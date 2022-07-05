attribute vec3 color;

varying vec2 vUv;
varying vec3 viewPosition;
varying vec3 vNormal;
varying vec3 objectNormal;
varying vec3 worldPosition;
varying vec3 vPosition;

uniform float time;
uniform float grooviness;
uniform float bounceSpeed;

#include <skinning_pars_vertex>

void main() {
	#include <skinbase_vertex>

	vUv = uv;

	vec3 transformed = vec3(position);
	
	transformed.x += sin(time * bounceSpeed) * transformed.x * 0.05 * grooviness;
	transformed.z += sin(time * bounceSpeed) * transformed.z * 0.05 * grooviness;
	transformed.y += sin(time * bounceSpeed) * transformed.y * 0.03 * grooviness;

	objectNormal = normal.xyz;

	#include <skinning_vertex>
	#include <skinnormal_vertex>
	
	vec3 transformedNormal = normalMatrix * objectNormal;

	vNormal = normalize(transformedNormal);

	vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
	viewPosition = -mvPosition.xyz;
	
	worldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
	
	vPosition = transformed;
	
	gl_Position = projectionMatrix * mvPosition;
}
