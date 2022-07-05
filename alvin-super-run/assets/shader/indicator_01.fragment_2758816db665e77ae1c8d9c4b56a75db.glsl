
uniform vec4 col;

uniform vec4 col2;

uniform float time;


varying vec2 vUv;
varying vec3 viewPosition;
varying vec3 vNormal;
varying vec3 objectNormal;
varying vec3 worldPosition;
varying vec3 vPosition;

uniform float patternSize;

// for fog
uniform vec2 fadeDistance;

//for ground fog if needed
uniform float groundFogStart;
uniform float groundFogEnd;

//fog color
uniform sampler2D environment;


vec2 brickTile(vec2 _st, float _zoom){
    _st *= _zoom;

    // Here is where the offset is happening
    _st.x += step(0.5, mod(_st.y,1.00)) * 0.50;

    return fract(_st);
}

float box(vec2 _st, vec2 _size){
    _size = vec2(0.5,0.5)-_size*0.5;
    vec2 uv = smoothstep(_size,_size+vec2(1e-4),_st);
    uv *= smoothstep(_size,_size+vec2(1e-4),vec2(1.0)-_st);
    return uv.x*uv.y;
}

void main() {
	vec2 st = vUv;
	vec3 color = vec3(0.0);

	st = brickTile(st,patternSize);
	color = vec3(box(st,vec2(0.500,1.000)));
	vec4 pattern = vec4(color,1.0);
	vec4 base = mix(col, col2, worldPosition.y/50.0);
	vec4 colmix = pattern * base;
	
	//fog color
	vec4 env = texture2D(environment, vec2(0.5, 0.95));

	//fog
	colmix.a = mix(colmix.a, 0.0, smoothstep(fadeDistance.x, fadeDistance.y, viewPosition.z));
	//colmix.rgb = mix(colmix.rgb, env.rgb, smoothstep(fadeDistance.x, fadeDistance.y, viewPosition.z));
	
	//for ground fog 
	colmix.rgb = mix(env.rgb, colmix.rgb, smoothstep(groundFogStart, groundFogEnd, worldPosition.y)); 
	
	gl_FragColor = colmix;
	//gl_FragColor = vec4(color,1.0);
	//gl_FragColor = base;
}
