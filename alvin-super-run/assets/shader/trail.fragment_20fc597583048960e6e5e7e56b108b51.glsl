// three.js defaults
// uniform mat4 modelMatrix;
// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
// uniform mat3 normalMatrix;
// uniform vec3 cameraPosition;
// attribute vec3 position;
// attribute vec3 normal;
// attribute vec2 uv;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

uniform sampler2D albedo;
uniform vec4 tint;

uniform float boostPower;

void main() {
	float power = 1.0 + boostPower * 2.0;
	
	vec4 alb = texture2D(albedo, vUv);
	gl_FragColor = vec4(alb.rgb * tint.rgb * alb.r * 3.0 * power, 1.0);
}
