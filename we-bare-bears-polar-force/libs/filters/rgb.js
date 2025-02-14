/*!
 * pixi-filters - v1.0.6
 * Compiled Wed Aug 31 2016 08:40:36 GMT-0400 (EDT)
 *
 * pixi-filters is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.rgb = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
if (typeof PIXI === "undefined") {
    throw new Error('pixi.js is required to be included');
}
},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
require('../check');

var filter = PIXI.filters.RGBSplitFilter = require('./RGBSplitFilter');
if (typeof module !== 'undefined' && module.exports) {
    module.exports = filter;
}
},{"../check":1,"./RGBSplitFilter":2}]},{},[3])(3)
});
