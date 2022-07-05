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
uniform float curviness;

varying vec4 worldPosition;
varying vec3 viewPosition;

varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;

#include <skinning_pars_vertex> //
#include <skinbase_vertex> //
#include <skinning_vertex>
#include <skinnormal_vertex>

void main() {
vColor = color;
	vUv = uv;


	
	//This is somehow needed for the rimlight and shadow calculation in the fragment shader
	// it doesn't make much sense for me...(adapted from Bens shader)
	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
	viewPosition = -mvPosition.xyz;
	vPosition = position;
	
	//getting the distance
	//calculating vertecies into world coordinates (magic)
	worldPosition = modelMatrix * vec4(position, 1.0);
	//calculating distance of 2 vec3, the camera and the v in world space
	float dist = distance(cameraPosition, worldPosition.xyz);
	
	vec3 transformedNormal = normalMatrix * normal.xyz;
	vNormal = normalize(transformedNormal);

	//transforming the points along the y achsis in world space depending on the distance
	//added some calculation to the distance (curviness) to get a nice curve
	worldPosition.y += (dist * 0.01) * (curviness*dist);
	//worldPosition.y += (sin((dist+4.0)*0.02)*15.0)-3.0;
	//La ola Curving
	//worldPosition.y += ((dist * 0.01) * (curviness*dist) + (dist*0.15))-1.5;
	//worldPosition.y += (sin((dist-15.0)*0.3*0.1)*10.0);

	
	// putting stuff back together. We don't need the modelViewMatrix 
	// because we already calculted the worldPosition with the modelMatrix
	gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
