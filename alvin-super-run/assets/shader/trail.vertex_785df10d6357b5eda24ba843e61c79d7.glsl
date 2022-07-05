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

attribute vec3 color;

uniform float time;
uniform float speed;
uniform float angle;
uniform float angleY;
uniform float tilt;

uniform float boostPower;

varying vec4 worldPosition;
varying vec3 viewPosition;

varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;


void main() {
	vColor = color;
	vUv = uv;

	float power = 1.0 + boostPower;

	vec3 transformed = position;

	transformed.x *= power;
	transformed.x += (angle * transformed.z * transformed.z);
	transformed.z *= speed;
	transformed.y -= tilt * transformed.x;
	transformed.y -= (angleY * transformed.z * transformed.z);

	vec3 transformedNormal = normalMatrix * normal.xyz;

	vNormal = normalize(transformedNormal);

	worldPosition = modelMatrix * vec4(position, 1.0);

	vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
	viewPosition = -mvPosition.xyz;

	vPosition = transformed;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
