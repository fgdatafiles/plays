/**
 * @author Slayvin / http://slayvin.net
 */

THREE.Reflector = function(geometry, options) {
	THREE.Mesh.call(this, geometry);

	this.type = 'Reflector';

	const scope = this;

	options = options || {};

	const color = (options.color !== undefined) ? new THREE.Color(options.color) : new THREE.Color(0x7F7F7F);
	const textureWidth = options.textureWidth || 512;
	const textureHeight = options.textureHeight || 512;
	const clipBias = options.clipBias || 0;
	const shader = options.shader || THREE.Reflector.ReflectorShader;
	const recursion = options.recursion !== undefined ? options.recursion : 0;

	//

	const reflectorPlane = new THREE.Plane();
	const normal = new THREE.Vector3();
	const reflectorWorldPosition = new THREE.Vector3();
	const cameraWorldPosition = new THREE.Vector3();
	const rotationMatrix = new THREE.Matrix4();
	const lookAtPosition = new THREE.Vector3(0, 0, -1);
	const clipPlane = new THREE.Vector4();

	const view = new THREE.Vector3();
	const target = new THREE.Vector3();
	const q = new THREE.Vector4();

	const textureMatrix = new THREE.Matrix4();
	const virtualCamera = new THREE.PerspectiveCamera();

	const parameters = {
		minFilter     : THREE.LinearFilter,
		magFilter     : THREE.LinearFilter,
		format        : THREE.RGBFormat,
		stencilBuffer : false
	};

	const renderTarget = new THREE.WebGLRenderTarget(textureWidth, textureHeight, parameters);

	if (!THREE.Math.isPowerOfTwo(textureWidth) || !THREE.Math.isPowerOfTwo(textureHeight)) {
		renderTarget.texture.generateMipmaps = false;
	}

	const material = new THREE.ShaderMaterial({
		uniforms       : THREE.UniformsUtils.clone(shader.uniforms),
		fragmentShader : shader.fragmentShader,
		vertexShader   : shader.vertexShader
	});

	material.uniforms.tDiffuse.value = renderTarget.texture;
	material.uniforms.color.value = color;
	material.uniforms.textureMatrix.value = textureMatrix;

	this.material = material;

	this.onBeforeRender = function(renderer, scene, camera) {
		if ('recursion' in camera.userData) {
			if (camera.userData.recursion === recursion) {
				return;
			}

			camera.userData.recursion++;
		}

		reflectorWorldPosition.setFromMatrixPosition(scope.matrixWorld);
		cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);

		rotationMatrix.extractRotation(scope.matrixWorld);

		normal.set(0, 0, 1);
		normal.applyMatrix4(rotationMatrix);

		view.subVectors(reflectorWorldPosition, cameraWorldPosition);

		// Avoid rendering when reflector is facing away

		if (view.dot(normal) > 0) {
			return;
		}

		view.reflect(normal).negate();
		view.add(reflectorWorldPosition);

		rotationMatrix.extractRotation(camera.matrixWorld);

		lookAtPosition.set(0, 0, -1);
		lookAtPosition.applyMatrix4(rotationMatrix);
		lookAtPosition.add(cameraWorldPosition);

		target.subVectors(reflectorWorldPosition, lookAtPosition);
		target.reflect(normal).negate();
		target.add(reflectorWorldPosition);

		virtualCamera.position.copy(view);
		virtualCamera.up.set(0, 1, 0);
		virtualCamera.up.applyMatrix4(rotationMatrix);
		virtualCamera.up.reflect(normal);
		virtualCamera.lookAt(target);

		virtualCamera.far = camera.far; // Used in WebGLBackground

		virtualCamera.updateMatrixWorld();
		virtualCamera.projectionMatrix.copy(camera.projectionMatrix);

		virtualCamera.userData.recursion = 0;

		// Update the texture matrix
		textureMatrix.set(
			0.5, 0.0, 0.0, 0.5,
			0.0, 0.5, 0.0, 0.5,
			0.0, 0.0, 0.5, 0.5,
			0.0, 0.0, 0.0, 1.0
		);
		textureMatrix.multiply(virtualCamera.projectionMatrix);
		textureMatrix.multiply(virtualCamera.matrixWorldInverse);
		textureMatrix.multiply(scope.matrixWorld);

		// Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
		// Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
		reflectorPlane.setFromNormalAndCoplanarPoint(normal, reflectorWorldPosition);
		reflectorPlane.applyMatrix4(virtualCamera.matrixWorldInverse);

		clipPlane.set(reflectorPlane.normal.x, reflectorPlane.normal.y, reflectorPlane.normal.z, reflectorPlane.constant);

		const projectionMatrix = virtualCamera.projectionMatrix;

		q.x = (Math.sign(clipPlane.x) + projectionMatrix.elements[8]) / projectionMatrix.elements[0];
		q.y = (Math.sign(clipPlane.y) + projectionMatrix.elements[9]) / projectionMatrix.elements[5];
		q.z = -1.0;
		q.w = (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];

		// Calculate the scaled plane vector
		clipPlane.multiplyScalar(2.0 / clipPlane.dot(q));

		// Replacing the third row of the projection matrix
		projectionMatrix.elements[2] = clipPlane.x;
		projectionMatrix.elements[6] = clipPlane.y;
		projectionMatrix.elements[10] = clipPlane.z + 1.0 - clipBias;
		projectionMatrix.elements[14] = clipPlane.w;

		// Render

		scope.visible = false;

		const currentRenderTarget = renderer.getRenderTarget();

		// const currentVrEnabled = renderer.vr.enabled;
		const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

		// renderer.vr.enabled = false; // Avoid camera modification and recursion
		renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows

		renderer.setRenderTarget(renderTarget);
		renderer.clear();
		renderer.render(scene, virtualCamera);

		// renderer.vr.enabled = currentVrEnabled;
		renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;

		renderer.setRenderTarget(currentRenderTarget);

		// Restore viewport

		if (camera.isArrayCamera) {
			renderer.state.viewport(camera.viewport);
		}

		scope.visible = true;
	};

	this.getRenderTarget = function() {
		return renderTarget;
	};
};

THREE.Reflector.prototype = Object.create(THREE.Mesh.prototype);
THREE.Reflector.prototype.constructor = THREE.Reflector;

THREE.Reflector.ReflectorShader = {

	uniforms: {

		color: {
			value: null
		},

		tDiffuse: {
			value: null
		},

		textureMatrix: {
			value: null
		}

	},

	vertexShader: [
		'uniform mat4 textureMatrix;',
		'varying vec4 vUv;',

		'void main() {',

		'	vUv = textureMatrix * vec4( position, 1.0 );',

		'	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

		'}'
	].join('\n'),

	fragmentShader: [
		'uniform vec3 color;',
		'uniform sampler2D tDiffuse;',
		'varying vec4 vUv;',

		'float blendOverlay( float base, float blend ) {',

		'	return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );',

		'}',

		'vec3 blendOverlay( vec3 base, vec3 blend ) {',

		'	return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );',

		'}',

		'void main() {',

		'	vec4 base = texture2DProj( tDiffuse, vUv );',
		'	gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );',

		'}'
	].join('\n')
};
