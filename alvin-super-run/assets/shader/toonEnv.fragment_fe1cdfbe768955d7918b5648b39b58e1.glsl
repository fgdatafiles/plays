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

uniform vec3 ambientLightColor;

varying vec3 vColor;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

varying vec3 viewPosition;
varying vec4 worldPosition;

uniform float time;

uniform vec2 fadeDistance;
uniform float alphaCut;

//for ground fog if needed
uniform float groundFogStart;
uniform float groundFogEnd;


uniform sampler2D albedo;
uniform sampler2D environment;

#if (NUM_DIR_LIGHTS > 0)
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];
#endif

vec3 rim(float start, float end, float coef, vec3 col) {

  vec3 normal = normalize(vNormal);
  vec3 eye = normalize(viewPosition);
  float rim = smoothstep(start, end, clamp(1.0 - dot(normal, eye), 0.0, 1.0));

  return col * clamp(rim, 0.0, 1.0) * coef;
}

void main() {

	vec4 alb = texture2D(albedo, vUv);
	vec4 col = alb;
	vec3 ambicol = ambientLightColor;
	vec4 env = texture2D(environment, vec2(0.5, 0.95));
	
	float brightness = (col.r + col.g + col.b) / 3.0;
	vec3 highlight = vec3((vNormal.r + vNormal.g + vNormal.b) / 3.0);
	highlight = smoothstep(0.2, 0.21, highlight) * brightness * ambicol.rgb;
	
	// init light direction
	vec3 dir = vec3(0.0);
	
	// init light color
	vec3 lightCol = vec3(0.0);
	
	// if a directional light exist, add its properies to dir and lightCol
	#if (NUM_DIR_LIGHTS > 0)
		dir += normalize(directionalLights[0].direction);
		lightCol += directionalLights[0].color;
		dir = normalize(dir);
	#endif
	
	// calculate how the light affects the fragment, based on the face normal
	vec3 lightDirection = vec3(dot(vNormal, dir));
	
	col.rgb = mix(col.rgb, ambicol.rgb * col.rgb, brightness);
	
	lightDirection = smoothstep(0.0, 0.2, lightDirection);
	col.rgb *= mix(ambientLightColor, lightCol + highlight, lightDirection + (1.0 - col.a));
	
	col.rgb = mix(col.rgb, env.rgb, smoothstep(fadeDistance.x, fadeDistance.y, viewPosition.z));
	// For emmision
	//col.rgb = mix(col.rgb + alb.rgb, col.rgb, alb.a);
	//for ground fog 
	col.rgb = mix(env.rgb, col.rgb, smoothstep(groundFogStart, groundFogEnd, worldPosition.y)); 
	
	
	gl_FragColor = vec4(col.rgb, alb.a);
	 if (gl_FragColor.a < alphaCut)
               // alpha value less than user-specified threshold?
            {
               discard; // yes: discard this fragment
            }
}
