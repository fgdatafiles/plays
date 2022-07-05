attribute vec3 color; //

uniform float curviness;

varying vec3 worldPosition;// is a vec3 in SRR
varying vec3 viewPosition; //

varying vec2 vUv; //
varying vec3 vCol;
//varying vec3 fPosition;
//varying vec3 fNormal;

varying vec3 vColor;
varying vec3 vNormal; //
varying vec3 objectNormal;
varying vec3 vPosition; 


#include <skinning_pars_vertex> //

void main() {
	#include <skinbase_vertex> //

	vUv = uv;
	vCol = color;

	worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

	vec3 transformed = vec3(position);
	vec3 objectNormal = normal.xyz;

	#include <skinning_vertex>
	#include <skinnormal_vertex>
	
	// add code here to transform the complete model
	//example:
	//transformed.y += 1.0;
	float dist = distance(cameraPosition, worldPosition.xyz);
	transformed.y += (dist * 0.01) * (curviness*dist);
	
	
	vec3 transformedNormal = normalMatrix * objectNormal;
	vNormal = normalize(transformedNormal);
	
	vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
	viewPosition = -mvPosition.xyz;
//	vPosition = position;
	

	
	gl_Position = projectionMatrix * mvPosition;


}
