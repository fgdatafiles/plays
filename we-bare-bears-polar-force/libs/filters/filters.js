/*!
 * pixi-filters - v1.0.6
 * Compiled Wed Aug 31 2016 08:40:25 GMT-0400 (EDT)
 *
 * pixi-filters is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.filters = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function AsciiFilter()
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}"
    );

    this.size = 8;
}

AsciiFilter.prototype = Object.create(PIXI.Filter.prototype);
AsciiFilter.prototype.constructor = AsciiFilter;
module.exports = AsciiFilter;

Object.defineProperties(AsciiFilter.prototype, {
    size: {
        get: function ()
        {
            return this.uniforms.pixelSize;
        },
        set: function (value)
        {
            this.uniforms.pixelSize = value;
        }
    }
});

},{}],2:[function(require,module,exports){
var BlurXFilter = PIXI.filters.BlurXFilter,
    BlurYFilter = PIXI.filters.BlurYFilter,
    VoidFilter = PIXI.filters.VoidFilter;
function BloomFilter()
{
    PIXI.Filter.call(this);

    this.blurXFilter = new BlurXFilter();
    this.blurYFilter = new BlurYFilter();

    this.blurYFilter.blendMode = PIXI.BLEND_MODES.SCREEN;

    this.defaultFilter = new VoidFilter();
}

BloomFilter.prototype = Object.create(PIXI.Filter.prototype);
BloomFilter.prototype.constructor = BloomFilter;
module.exports = BloomFilter;

BloomFilter.prototype.apply = function (filterManager, input, output)
{
    var renderTarget = filterManager.getRenderTarget(true);
    this.defaultFilter.apply(filterManager, input, output);

    this.blurXFilter.apply(filterManager, input, renderTarget);
    this.blurYFilter.apply(filterManager, renderTarget, output);

    filterManager.returnRenderTarget(renderTarget);
};

Object.defineProperties(BloomFilter.prototype, {
    blur: {
        get: function ()
        {
            return this.blurXFilter.blur;
        },
        set: function (value)
        {
            this.blurXFilter.blur = this.blurYFilter.blur = value;
        }
    },
    blurX: {
        get: function ()
        {
            return this.blurXFilter.blur;
        },
        set: function (value)
        {
            this.blurXFilter.blur = value;
        }
    },
    blurY: {
        get: function ()
        {
            return this.blurYFilter.blur;
        },
        set: function (value)
        {
            this.blurYFilter.blur = value;
        }
    }
});

},{}],3:[function(require,module,exports){
if (typeof PIXI === "undefined") {
    throw new Error('pixi.js is required to be included');
}
},{}],4:[function(require,module,exports){
function ConvolutionFilter(matrix, width, height)
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "precision mediump float;\n#define GLSLIFY 1\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n"
    );

    this.matrix = matrix;
    this.width = width;
    this.height = height;
}

ConvolutionFilter.prototype = Object.create(PIXI.Filter.prototype);
ConvolutionFilter.prototype.constructor = ConvolutionFilter;
module.exports = ConvolutionFilter;

Object.defineProperties(ConvolutionFilter.prototype, {
    matrix: {
        get: function ()
        {
            return this.uniforms.matrix;
        },
        set: function (value)
        {
            this.uniforms.matrix = new Float32Array(value);
        }
    },
    width: {
        get: function ()
        {
            return 1/this.uniforms.texelSize[0];
        },
        set: function (value)
        {
            this.uniforms.texelSize[0] = 1/value;
        }
    },
    height: {
        get: function ()
        {
            return 1/this.uniforms.texelSize[1];
        },
        set: function (value)
        {
            this.uniforms.texelSize[1] = 1/value;
        }
    }
});

},{}],5:[function(require,module,exports){
function CrossHatchFilter()
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n"
    );
}

CrossHatchFilter.prototype = Object.create(PIXI.Filter.prototype);
CrossHatchFilter.prototype.constructor = CrossHatchFilter;
module.exports = CrossHatchFilter;

},{}],6:[function(require,module,exports){
function DotFilter()
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n"
    );

    this.scale = 1;
    this.angle = 5;
}

DotFilter.prototype = Object.create(PIXI.Filter.prototype);
DotFilter.prototype.constructor = DotFilter;
module.exports = DotFilter;

Object.defineProperties(DotFilter.prototype, {
    scale: {
        get: function ()
        {
            return this.uniforms.scale;
        },
        set: function (value)
        {
            this.uniforms.scale = value;
        }
    },
    angle: {
        get: function ()
        {
            return this.uniforms.angle;
        },
        set: function (value)
        {
            this.uniforms.angle = value;
        }
    }
});

},{}],7:[function(require,module,exports){
function EmbossFilter()
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n"
    );

    this.strength = 5;
}

EmbossFilter.prototype = Object.create(PIXI.Filter.prototype);
EmbossFilter.prototype.constructor = EmbossFilter;
module.exports = EmbossFilter;

Object.defineProperties(EmbossFilter.prototype, {
    strength: {
        get: function ()
        {
            return this.uniforms.strength;
        },
        set: function (value)
        {
            this.uniforms.strength = value;
        }
    },


});

},{}],8:[function(require,module,exports){
function PixelateFilter()
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n"
    );

    this.size = [10,10];

}

PixelateFilter.prototype = Object.create(PIXI.Filter.prototype);
PixelateFilter.prototype.constructor = PixelateFilter;
module.exports = PixelateFilter;

Object.defineProperties(PixelateFilter.prototype, {
    size: {
        get: function ()
        {
            return this.uniforms.size;
        },
        set: function (value)
        {
            this.uniforms.size.value = value;
        }
    }
});

},{}],9:[function(require,module,exports){
function RGBSplitFilter()
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n"
    );

    this.red = [-10, 0];
    this.green = [0, 10];
    this.blue = [0, 0];
}

RGBSplitFilter.prototype = Object.create(PIXI.Filter.prototype);
RGBSplitFilter.prototype.constructor = RGBSplitFilter;
module.exports = RGBSplitFilter;

Object.defineProperties(RGBSplitFilter.prototype, {
    red: {
        get: function ()
        {
            return this.uniforms.red;
        },
        set: function (value)
        {
            this.uniforms.red = value;
        }
    },
    green: {
        get: function ()
        {
            return this.uniforms.green;
        },
        set: function (value)
        {
            this.uniforms.green = value;
        }
    },
    blue: {
        get: function ()
        {
            return this.uniforms.blue.value;
        },
        set: function (value)
        {
            this.uniforms.blue.value = value;
        }
    }
});

},{}],10:[function(require,module,exports){
function ShockwaveFilter()
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n",
        {
            center: { type: 'v2', value: { x: 0.5, y: 0.5 } },
            params: { type: 'v3', value: { x: 10, y: 0.8, z: 0.1 } },
            time: { type: '1f', value: 0 }
        }
    );

    this.center = [0.5, 0.5];
    this.params = [10, 0.8, 0.1];
    this.time = 0;
}

ShockwaveFilter.prototype = Object.create(PIXI.Filter.prototype);
ShockwaveFilter.prototype.constructor = ShockwaveFilter;
module.exports = ShockwaveFilter;

Object.defineProperties(ShockwaveFilter.prototype, {
    center: {
        get: function ()
        {
            return this.uniforms.center;
        },
        set: function (value)
        {
            this.uniforms.center = value;
        }
    },
    params: {
        get: function ()
        {
            return this.uniforms.params;
        },
        set: function (value)
        {
            this.uniforms.params = value;
        }
    },
    time: {
        get: function ()
        {
            return this.uniforms.time;
        },
        set: function (value)
        {
            this.uniforms.time = value;
        }
    }
});

},{}],11:[function(require,module,exports){
function TiltShiftAxisFilter()
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n"

    );

    this.uniforms.blur = 100;
    this.uniforms.gradientBlur = 600;
    this.uniforms.start = new PIXI.Point(0, window.innerHeight / 2);
    this.uniforms.end = new PIXI.Point(600, window.innerHeight / 2);
    this.uniforms.delta = new PIXI.Point(30, 30);
    this.uniforms.texSize = new PIXI.Point(window.innerWidth, window.innerHeight);

    this.updateDelta();
}

TiltShiftAxisFilter.prototype = Object.create(PIXI.Filter.prototype);
TiltShiftAxisFilter.prototype.constructor = TiltShiftAxisFilter;
module.exports = TiltShiftAxisFilter;
TiltShiftAxisFilter.prototype.updateDelta = function ()
{
    this.uniforms.delta.x = 0;
    this.uniforms.delta.y = 0;
};

Object.defineProperties(TiltShiftAxisFilter.prototype, {
    blur: {
        get: function ()
        {
            return this.uniforms.blur;
        },
        set: function (value)
        {
            this.uniforms.blur = value;
        }
    },
    gradientBlur: {
        get: function ()
        {
            return this.uniforms.gradientBlur;
        },
        set: function (value)
        {
            this.uniforms.gradientBlur = value;
        }
    },
    start: {
        get: function ()
        {
            return this.uniforms.start;
        },
        set: function (value)
        {
            this.uniforms.start = value;
            this.updateDelta();
        }
    },
    end: {
        get: function ()
        {
            return this.uniforms.end;
        },
        set: function (value)
        {
            this.uniforms.end = value;
            this.updateDelta();
        }
    }
});

},{}],12:[function(require,module,exports){
var TiltShiftXFilter = require('./TiltShiftXFilter'),
    TiltShiftYFilter = require('./TiltShiftYFilter');
function TiltShiftFilter()
{
    PIXI.Filter.call(this);

    this.tiltShiftXFilter = new TiltShiftXFilter();
    this.tiltShiftYFilter = new TiltShiftYFilter();
}

TiltShiftFilter.prototype = Object.create(PIXI.Filter.prototype);
TiltShiftFilter.prototype.constructor = TiltShiftFilter;
module.exports = TiltShiftFilter;

TiltShiftFilter.prototype.apply = function (filterManager, input, output)
{
    var renderTarget = filterManager.getRenderTarget(true);

    this.tiltShiftXFilter.apply(filterManager, input, renderTarget);

    this.tiltShiftYFilter.apply(filterManager, renderTarget, output);

    filterManager.returnRenderTarget(renderTarget);
};

Object.defineProperties(TiltShiftFilter.prototype, {
    blur: {
        get: function ()
        {
            return this.tiltShiftXFilter.blur;
        },
        set: function (value)
        {
            this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = value;
        }
    },
    gradientBlur: {
        get: function ()
        {
            return this.tiltShiftXFilter.gradientBlur;
        },
        set: function (value)
        {
            this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = value;
        }
    },
    start: {
        get: function ()
        {
            return this.tiltShiftXFilter.start;
        },
        set: function (value)
        {
            this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = value;
        }
    },
    end: {
        get: function ()
        {
            return this.tiltShiftXFilter.end;
        },
        set: function (value)
        {
            this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = value;
        }
    }
});

},{"./TiltShiftXFilter":13,"./TiltShiftYFilter":14}],13:[function(require,module,exports){
var TiltShiftAxisFilter = require('./TiltShiftAxisFilter');
function TiltShiftXFilter()
{
    TiltShiftAxisFilter.call(this);
}

TiltShiftXFilter.prototype = Object.create(TiltShiftAxisFilter.prototype);
TiltShiftXFilter.prototype.constructor = TiltShiftXFilter;
module.exports = TiltShiftXFilter;
TiltShiftXFilter.prototype.updateDelta = function ()
{
    var dx = this.uniforms.end.x - this.uniforms.start.x;
    var dy = this.uniforms.end.y - this.uniforms.start.y;
    var d = Math.sqrt(dx * dx + dy * dy);

    this.uniforms.delta.x = dx / d;
    this.uniforms.delta.y = dy / d;
};

},{"./TiltShiftAxisFilter":11}],14:[function(require,module,exports){
var TiltShiftAxisFilter = require('./TiltShiftAxisFilter');
function TiltShiftYFilter()
{
    TiltShiftAxisFilter.call(this);
}

TiltShiftYFilter.prototype = Object.create(TiltShiftAxisFilter.prototype);
TiltShiftYFilter.prototype.constructor = TiltShiftYFilter;
module.exports = TiltShiftYFilter;
TiltShiftYFilter.prototype.updateDelta = function ()
{
    var dx = this.uniforms.end.x - this.uniforms.start.x;
    var dy = this.uniforms.end.y - this.uniforms.start.y;
    var d = Math.sqrt(dx * dx + dy * dy);

    this.uniforms.delta.x = -dy / d;
    this.uniforms.delta.y = dx / d;
};

},{"./TiltShiftAxisFilter":11}],15:[function(require,module,exports){
function TwistFilter()
{
    PIXI.Filter.call(this,
        "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n"
    );

    this.radius = 200;
    this.angle = 4;
    this.padding = 20;
}

TwistFilter.prototype = Object.create(PIXI.Filter.prototype);
TwistFilter.prototype.constructor = TwistFilter;
module.exports = TwistFilter;

Object.defineProperties(TwistFilter.prototype, {
    offset: {
        get: function ()
        {
            return this.uniforms.offset;
        },
        set: function (value)
        {
            this.uniforms.offset = value;
        }
    },
    radius: {
        get: function ()
        {
            return this.uniforms.radius;
        },
        set: function (value)
        {
            this.uniforms.radius = value;
        }
    },
    angle: {
        get: function ()
        {
            return this.uniforms.angle;
        },
        set: function (value)
        {
            this.uniforms.angle = value;
        }
    }
});

},{}],16:[function(require,module,exports){
require('./check');
var filters = {
    AsciiFilter: require('./ascii/AsciiFilter'),
    BloomFilter: require('./bloom/BloomFilter'),
    ConvolutionFilter: require('./convolution/ConvolutionFilter'),
    CrossHatchFilter: require('./crosshatch/CrossHatchFilter'),
    DotFilter: require('./dot/DotFilter'),
    EmbossFilter: require('./emboss/EmbossFilter'),
    PixelateFilter: require('./pixelate/PixelateFilter'),
    RGBSplitFilter: require('./rgb/RGBSplitFilter'),
    ShockwaveFilter: require('./shockwave/ShockwaveFilter'),
    TiltShiftFilter: require('./tiltshift/TiltShiftFilter'),
    TiltShiftAxisFilter: require('./tiltshift/TiltShiftAxisFilter'),
    TiltShiftXFilter: require('./tiltshift/TiltShiftXFilter'),
    TiltShiftYFilter: require('./tiltshift/TiltShiftYFilter'),
    TwistFilter: require('./twist/TwistFilter')
};
Object.assign(PIXI.filters, filters);
if (typeof module !== 'undefined' && module.exports) {
    module.exports = filters;
}
},{"./ascii/AsciiFilter":1,"./bloom/BloomFilter":2,"./check":3,"./convolution/ConvolutionFilter":4,"./crosshatch/CrossHatchFilter":5,"./dot/DotFilter":6,"./emboss/EmbossFilter":7,"./pixelate/PixelateFilter":8,"./rgb/RGBSplitFilter":9,"./shockwave/ShockwaveFilter":10,"./tiltshift/TiltShiftAxisFilter":11,"./tiltshift/TiltShiftFilter":12,"./tiltshift/TiltShiftXFilter":13,"./tiltshift/TiltShiftYFilter":14,"./twist/TwistFilter":15}]},{},[16])(16)
});
