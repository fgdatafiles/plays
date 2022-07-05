/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _Boot = __webpack_require__(88);
	
	var _Boot2 = _interopRequireDefault(_Boot);
	
	var _Load = __webpack_require__(90);
	
	var _Load2 = _interopRequireDefault(_Load);
	
	var _Game = __webpack_require__(111);
	
	var _Game2 = _interopRequireDefault(_Game);
	
	var _Welcome = __webpack_require__(129);
	
	var _Welcome2 = _interopRequireDefault(_Welcome);
	
	var _GameEnd = __webpack_require__(131);
	
	var _GameEnd2 = _interopRequireDefault(_GameEnd);
	
	var _screenfullMin = __webpack_require__(133);
	
	var _screenfullMin2 = _interopRequireDefault(_screenfullMin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Game = function (_Phaser$Game) {
	    (0, _inherits3.default)(Game, _Phaser$Game);
	
	    function Game() {
	        (0, _classCallCheck3.default)(this, Game);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (Game.__proto__ || (0, _getPrototypeOf2.default)(Game)).call(this, 1080, 1920, Phaser.CANVAS, "game_container", {
	            preload: function preload() {
	                this.game.load.baseURL = window.game_config.base_assets_url;
	            },
	            create: function create() {
	                this.game.state.add('Boot', _Boot2.default, false);
	                this.game.state.add('Load', _Load2.default, false);
	                this.game.state.add('Game', _Game2.default, false);
	                this.game.state.add('Welcome', _Welcome2.default, false);
	                this.game.state.add('GameEnd', _GameEnd2.default, false);
	                this.game.gameContainer = document.getElementById("game_container");
	                this.game.state.start('Boot');
	
	                var rotateScreen = document.getElementsByClassName("rotate")[0];
	                rotateScreen.style["background-image"] = "url(" + this.game.load.baseURL + "assets/ui/bg_rotate.jpg)";
	                rotateScreen.getElementsByClassName("icon")[0].style["background-image"] = "url(" + this.game.load.baseURL + "assets/ui/rotate_icon.png)";
	            }
	        }));
	
	        window.addEventListener("wheel", function (e) {
	            e.preventDefault();
	        }, false);
	        window.addEventListener("mousewheel", function (e) {
	            e.preventDefault();
	        }, false);
	        window.addEventListener("DOMMouseScroll", function (e) {
	            e.preventDefault();
	        }, false);
	        window.addEventListener("keydown", function (e) {
	            e.preventDefault();
	        }, false);
	
	        var t = _this;
	        Object.defineProperty(_this, "paused", {
	            get: function get() {
	                return this._paused;
	            },
	
	            set: function set(value) {
	
	                if (value === true) {
	                    if (this._paused === false) {
	                        this._paused = true;
	                        //this.sound.setMute();
	                        this.time.gamePaused();
	                        this.onPause.dispatch(this);
	                    }
	                    this._codePaused = true;
	                } else {
	                    if (this._paused) {
	                        this._paused = false;
	                        this.input.reset();
	                        this.sound.unsetMute();
	                        this.time.gameResumed();
	                        this.onResume.dispatch(this);
	                    }
	                    this._codePaused = false;
	                }
	            }
	        });
	
	        window.addEventListener("resize", _this.handleResize.bind(_this));
	        window.addEventListener("blur", _this.handleWindowBlur.bind(_this));
	        window.addEventListener("focus", _this.handleWindowFocus.bind(_this));
	        window.addEventListener("webkitfullscreenchange", _this.handleResize.bind(_this));
	        return _this;
	    }
	
	    (0, _createClass3.default)(Game, [{
	        key: 'requestFullscreen',
	        value: function requestFullscreen(element) {
	            if (!this.device.desktop && _screenfullMin2.default.enabled) {
	                _screenfullMin2.default.request();
	            }
	        }
	    }, {
	        key: 'track',
	        value: function track(evt) {
	            if (window.WiseTrack) window.WiseTrack.track(this.data.wisetrack_prefix + evt);
	        }
	    }, {
	        key: 'handleWindowBlur',
	        value: function handleWindowBlur() {
	            if (!this.sound.mute) {
	                this.sound.setMute();
	                this.blurMuted = true;
	            } else {
	                this.blurMuted = false;
	            }
	        }
	    }, {
	        key: 'handleWindowFocus',
	        value: function handleWindowFocus() {
	            if (this.blurMuted) {
	                this.sound.unsetMute();
	            }
	        }
	    }, {
	        key: 'handleResize',
	        value: function handleResize() {
	            var scale = 1;
	
	            // handle landscape game
	            if (this.width > this.height) {
	                var aspect = window.innerHeight / window.innerWidth;
	                if (window.innerWidth > window.innerHeight) {
	                    //console.log("landscape");
	                    if (aspect > 0.56 && aspect < 0.75) {
	                        scale = window.innerHeight / this.height;
	                    } else if (aspect > 0.75) {
	                        scale = window.innerWidth / this.width;
	                    } else {
	                        scale = window.innerHeight / this.height;
	                    }
	
	                    if (this.paused) this.paused = false;
	                    document.getElementById("rotate").style.display = "none";
	                } else {
	                    scale = window.innerWidth / this.width;
	                    if (!this.device.desktop) {
	                        //show rotate
	                        this.paused = true;
	                        document.getElementById("rotate").style.display = "block";
	                    }
	                }
	            }
	            // handle portrait game
	            else {
	
	                    var _aspect = window.innerWidth / window.innerHeight;
	                    if (window.innerHeight > window.innerWidth) {
	                        if (_aspect > 0.56 && _aspect < 0.75) {
	                            scale = window.innerWidth / this.width;
	                        } else if (_aspect > 0.75) {
	                            scale = window.innerHeight / this.height;
	                        } else {
	                            scale = window.innerWidth / this.width;
	                        }
	                        if (this.paused) this.paused = false;
	                        document.getElementById("rotate").style.display = "none";
	                    } else {
	                        scale = window.innerHeight / this.height;
	                        if (!this.device.desktop) {
	                            //show rotate
	                            this.paused = true;
	                            document.getElementById("rotate").style.display = "block";
	                        }
	                    }
	                }
	
	            var targetWidth = this.width * scale;
	
	            var targetHeight = this.height * scale;
	            var targetTop = window.innerHeight / 2 - targetHeight / 2;
	            var targetLeft = window.innerWidth / 2 - targetWidth / 2;
	            this.gameContainer.style.width = targetWidth + "px";
	            this.gameContainer.style.height = targetHeight + "px";
	            this.gameContainer.style.top = targetTop + "px";
	            this.gameContainer.style.left = targetLeft + "px";
	
	            // calculate viewport
	            var vy = targetTop > 0 ? 0 : this.height * (Math.abs(targetTop) / targetHeight);
	            var vx = targetLeft > 0 ? 0 : this.width * (Math.abs(targetLeft) / targetWidth);
	            var vw = targetWidth < window.innerWidth ? this.width : this.width * (window.innerWidth / targetWidth);
	            var vh = targetHeight < window.innerHeight ? this.height : this.height * (window.innerHeight / targetHeight);
	
	            this.viewport = {
	                left: vx,
	                top: vy,
	                width: vw,
	                height: vh,
	                right: vx + vw,
	                bottom: vy + vh,
	                centerX: vx + vw / 2,
	                centerY: vy + vh / 2
	            };
	
	            this.scale.setUserScale(scale, scale);
	            this.scale.refresh();
	        }
	    }]);
	    return Game;
	}(Phaser.Game);
	
	window.game = new Game();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(15).Object.getPrototypeOf;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(5)
	  , $getPrototypeOf = __webpack_require__(7);
	
	__webpack_require__(13)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(5)
	  , IE_PROTO    = __webpack_require__(9)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(10)('keys')
	  , uid    = __webpack_require__(12);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(15)
	  , fails   = __webpack_require__(24);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , hide      = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(19)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(23) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(20)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(26)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function(){
	  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(21);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(30);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', {defineProperty: __webpack_require__(19).f});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(34);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(35);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(64);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(37);
	__webpack_require__(59);
	module.exports = __webpack_require__(63).f('iterator');

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(38)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(40)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(42)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(43)
	  , $iterCreate    = __webpack_require__(44)
	  , setToStringTag = __webpack_require__(57)
	  , getPrototypeOf = __webpack_require__(7)
	  , ITERATOR       = __webpack_require__(58)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(45)
	  , descriptor     = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(57)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(58)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(20)
	  , dPs         = __webpack_require__(46)
	  , enumBugKeys = __webpack_require__(55)
	  , IE_PROTO    = __webpack_require__(9)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(25)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(56).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(19)
	  , anObject = __webpack_require__(20)
	  , getKeys  = __webpack_require__(47);
	
	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(48)
	  , enumBugKeys = __webpack_require__(55);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(49)
	  , arrayIndexOf = __webpack_require__(52)(false)
	  , IE_PROTO     = __webpack_require__(9)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(50)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(51);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(49)
	  , toLength  = __webpack_require__(53)
	  , toIndex   = __webpack_require__(54);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11).document && document.documentElement;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(58)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(10)('wks')
	  , uid        = __webpack_require__(12)
	  , Symbol     = __webpack_require__(11).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	var global        = __webpack_require__(11)
	  , hide          = __webpack_require__(18)
	  , Iterators     = __webpack_require__(43)
	  , TO_STRING_TAG = __webpack_require__(58)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(61)
	  , step             = __webpack_require__(62)
	  , Iterators        = __webpack_require__(43)
	  , toIObject        = __webpack_require__(49);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(40)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(58);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	module.exports = __webpack_require__(15).Symbol;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(11)
	  , has            = __webpack_require__(8)
	  , DESCRIPTORS    = __webpack_require__(23)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(42)
	  , META           = __webpack_require__(67).KEY
	  , $fails         = __webpack_require__(24)
	  , shared         = __webpack_require__(10)
	  , setToStringTag = __webpack_require__(57)
	  , uid            = __webpack_require__(12)
	  , wks            = __webpack_require__(58)
	  , wksExt         = __webpack_require__(63)
	  , wksDefine      = __webpack_require__(68)
	  , keyOf          = __webpack_require__(69)
	  , enumKeys       = __webpack_require__(70)
	  , isArray        = __webpack_require__(73)
	  , anObject       = __webpack_require__(20)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(26)
	  , createDesc     = __webpack_require__(27)
	  , _create        = __webpack_require__(45)
	  , gOPNExt        = __webpack_require__(74)
	  , $GOPD          = __webpack_require__(76)
	  , $DP            = __webpack_require__(19)
	  , $keys          = __webpack_require__(47)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(72).f  = $propertyIsEnumerable;
	  __webpack_require__(71).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(12)('meta')
	  , isObject = __webpack_require__(21)
	  , has      = __webpack_require__(8)
	  , setDesc  = __webpack_require__(19).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(24)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(11)
	  , core           = __webpack_require__(15)
	  , LIBRARY        = __webpack_require__(41)
	  , wksExt         = __webpack_require__(63)
	  , defineProperty = __webpack_require__(19).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(47)
	  , toIObject = __webpack_require__(49);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(47)
	  , gOPS    = __webpack_require__(71)
	  , pIE     = __webpack_require__(72);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 72 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(51);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(49)
	  , gOPN      = __webpack_require__(75).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(48)
	  , hiddenKeys = __webpack_require__(55).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(72)
	  , createDesc     = __webpack_require__(27)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 77 */
/***/ function(module, exports) {



/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68)('asyncIterator');

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68)('observable');

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(81);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(85);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(34);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(84).set});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(21)
	  , anObject = __webpack_require__(20);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, __webpack_require__(76).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	var $Object = __webpack_require__(15).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(45)});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _utils = __webpack_require__(89);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$State) {
	    (0, _inherits3.default)(_class, _Phaser$State);
	
	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: "preload",
	        value: function preload() {
	            // grab urls set in index page
	            this.game.languageCode = window.game_config.default_language;
	            this.game.copyurl = window.game_config.base_locale_url + this.game.languageCode + "/copy.xml";
	            this.game.stylesurl = window.game_config.base_locale_url + this.game.languageCode + "/styles.json";
	
	            // locate copy xml
	            this.game.load.crossOrigin = true;
	            this.game.load.pack('load', 'assets/assetpack.json', null, this);
	        }
	    }, {
	        key: "create",
	        value: function create() {
	            // apply game settings
	            this.stage.backgroundColor = '#000000';
	            this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
	            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	            this.game.scale.pageAlignHorizontally = true;
	            this.game.scale.pageAlignVertically = true;
	
	            // is this a touch screen?
	            this.game.isTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
	
	            // resize game to fit and attach listener
	            this.game.handleResize();
	            this.game.scale.onSizeChange.add(this.game.handleResize, this.game);
	
	            // start loading
	            this.state.start('Load');
	        }
	    }]);
	    return _class;
	}(Phaser.State);
	
	exports.default = _class;

/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    GetUrlParamenterByName: function GetUrlParamenterByName(name, url) {
	        if (!url) url = window.location.href;
	        name = name.replace(/[\[\]]/g, "\\$&");
	        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	        var results = regex.exec(url);
	
	        if (!results) return null;
	        if (!results[2]) return '';
	        return decodeURIComponent(results[2].replace(/\+/g, " "));
	    }
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _webfontloader = __webpack_require__(91);
	
	var _webfontloader2 = _interopRequireDefault(_webfontloader);
	
	var _CopyManager = __webpack_require__(108);
	
	var _CopyManager2 = _interopRequireDefault(_CopyManager);
	
	var _SoundManager = __webpack_require__(109);
	
	var _SoundManager2 = _interopRequireDefault(_SoundManager);
	
	var _LoadingSpinner = __webpack_require__(110);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$State) {
	    (0, _inherits3.default)(_class, _Phaser$State);
	
	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: 'preload',
	        value: function preload() {
	            this.fontsReady = false;
	            this.assetsReady = false;
	
	            // add load bar
	            this.loadBar = new _LoadingSpinner2.default(this.game, this.game.width / 2, 0);
	            this.game.add.existing(this.loadBar);
	
	            // load content
	            this.game.load.pack('ui', 'assets/assetpack.json', null, this);
	            this.game.load.pack('game', 'assets/assetpack.json', null, this);
	            this.game.load.xml("copy_data", this.game.copyurl);
	            this.game.load.json("font_styles", this.game.stylesurl);
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            // get and set copy data
	            this.game.data = this.game.cache.getJSON("game_data");
	            this.game.copy = new _CopyManager2.default(this.game.cache.getXML("copy_data"));
	
	            // set font based on settings
	            this.game.font = this.game.cache.getJSON("font_styles").font;
	            this.game.data.styles = this.game.cache.getJSON("font_styles")[this.game.data.copy_ref.styles];
	
	            // set sound manager
	            this.game.sounds = new _SoundManager2.default(this.game);
	
	            // set page title
	            document.title = this.game.copy.getCopy(this.game.data.copy_ref.character_id) + " : " + this.game.copy.getCopy(this.game.data.copy_ref.game_id);
	
	            // load the required fonts
	            _webfontloader2.default.load({
	                custom: { families: [this.game.font.family], urls: [window.game_config.base_locale_url + this.game.font.css] },
	                active: this.fontsLoaded.bind(this),
	                inactive: this.fontsLoaded.bind(this)
	            });
	
	            // scan through required audio and add them to sound manager
	            for (var i in this.game.data.audio) {
	                this.game.sounds.addSound(i, this.game.data.audio[i]);
	            }
	
	            // add wise tracking script
	            var script = document.createElement('script');
	            script.src = "//www.wisetrack.net/js2_detect.php?tracking_id=" + this.game.data.wisetrack_ID + "&country=" + this.game.languageCode;
	            document.body.appendChild(script);
	
	            // assets are currently ready
	            this.assetsReady = true;
	
	            // have we finished loading everything?
	            this.checkLoading();
	        }
	    }, {
	        key: 'checkLoading',
	        value: function checkLoading() {
	            // if both assets and fonts are flagged, we're done
	            if (this.assetsReady && this.fontsReady) {
	                // define fonts
	                for (var i in this.game.data.styles) {
	                    var font = this.game.data.styles[i].font;
	                    font += " " + this.game.font.family;
	                    this.game.data.styles[i].font = font;
	                }
	
	                // start game
	                this.game.state.start("Welcome");
	            }
	        }
	    }, {
	        key: 'fontsLoaded',
	        value: function fontsLoaded() {
	            this.fontsReady = true;
	            this.checkLoading();
	        }
	    }]);
	    return _class;
	}(Phaser.State);
	
	exports.default = _class;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _promise = __webpack_require__(92);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */(function () {
	  function aa(a, b, c) {
	    return a.call.apply(a.bind, arguments);
	  }function ba(a, b, c) {
	    if (!a) throw Error();if (2 < arguments.length) {
	      var d = Array.prototype.slice.call(arguments, 2);return function () {
	        var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
	      };
	    }return function () {
	      return a.apply(b, arguments);
	    };
	  }function p(a, b, c) {
	    p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;return p.apply(null, arguments);
	  }var q = Date.now || function () {
	    return +new Date();
	  };function ca(a, b) {
	    this.a = a;this.m = b || a;this.c = this.m.document;
	  }var da = !!window.FontFace;function t(a, b, c, d) {
	    b = a.c.createElement(b);if (c) for (var e in c) {
	      c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
	    }d && b.appendChild(a.c.createTextNode(d));return b;
	  }function u(a, b, c) {
	    a = a.c.getElementsByTagName(b)[0];a || (a = document.documentElement);a.insertBefore(c, a.lastChild);
	  }function v(a) {
	    a.parentNode && a.parentNode.removeChild(a);
	  }
	  function w(a, b, c) {
	    b = b || [];c = c || [];for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
	      for (var f = !1, g = 0; g < d.length; g += 1) {
	        if (b[e] === d[g]) {
	          f = !0;break;
	        }
	      }f || d.push(b[e]);
	    }b = [];for (e = 0; e < d.length; e += 1) {
	      f = !1;for (g = 0; g < c.length; g += 1) {
	        if (d[e] === c[g]) {
	          f = !0;break;
	        }
	      }f || b.push(d[e]);
	    }a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
	  }function y(a, b) {
	    for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) {
	      if (c[d] == b) return !0;
	    }return !1;
	  }
	  function z(a) {
	    if ("string" === typeof a.f) return a.f;var b = a.m.location.protocol;"about:" == b && (b = a.a.location.protocol);return "https:" == b ? "https:" : "http:";
	  }function ea(a) {
	    return a.m.location.hostname || a.a.location.hostname;
	  }
	  function A(a, b, c) {
	    function d() {
	      k && e && f && (k(g), k = null);
	    }b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });var e = !1,
	        f = !0,
	        g = null,
	        k = c || null;da ? (b.onload = function () {
	      e = !0;d();
	    }, b.onerror = function () {
	      e = !0;g = Error("Stylesheet failed to load");d();
	    }) : setTimeout(function () {
	      e = !0;d();
	    }, 0);u(a, "head", b);
	  }
	  function B(a, b, c, d) {
	    var e = a.c.getElementsByTagName("head")[0];if (e) {
	      var f = t(a, "script", { src: b }),
	          g = !1;f.onload = f.onreadystatechange = function () {
	        g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
	      };e.appendChild(f);setTimeout(function () {
	        g || (g = !0, c && c(Error("Script load timeout")));
	      }, d || 5E3);return f;
	    }return null;
	  };function C() {
	    this.a = 0;this.c = null;
	  }function D(a) {
	    a.a++;return function () {
	      a.a--;E(a);
	    };
	  }function F(a, b) {
	    a.c = b;E(a);
	  }function E(a) {
	    0 == a.a && a.c && (a.c(), a.c = null);
	  };function G(a) {
	    this.a = a || "-";
	  }G.prototype.c = function (a) {
	    for (var b = [], c = 0; c < arguments.length; c++) {
	      b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
	    }return b.join(this.a);
	  };function H(a, b) {
	    this.c = a;this.f = 4;this.a = "n";var c = (b || "n4").match(/^([nio])([1-9])$/i);c && (this.a = c[1], this.f = parseInt(c[2], 10));
	  }function fa(a) {
	    return I(a) + " " + (a.f + "00") + " 300px " + J(a.c);
	  }function J(a) {
	    var b = [];a = a.split(/,\s*/);for (var c = 0; c < a.length; c++) {
	      var d = a[c].replace(/['"]/g, "");-1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
	    }return b.join(",");
	  }function K(a) {
	    return a.a + a.f;
	  }function I(a) {
	    var b = "normal";"o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");return b;
	  }
	  function ga(a) {
	    var b = 4,
	        c = "n",
	        d = null;a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));return c + b;
	  };function ha(a, b) {
	    this.c = a;this.f = a.m.document.documentElement;this.h = b;this.a = new G("-");this.j = !1 !== b.events;this.g = !1 !== b.classes;
	  }function ia(a) {
	    a.g && w(a.f, [a.a.c("wf", "loading")]);L(a, "loading");
	  }function M(a) {
	    if (a.g) {
	      var b = y(a.f, a.a.c("wf", "active")),
	          c = [],
	          d = [a.a.c("wf", "loading")];b || c.push(a.a.c("wf", "inactive"));w(a.f, c, d);
	    }L(a, "inactive");
	  }function L(a, b, c) {
	    if (a.j && a.h[b]) if (c) a.h[b](c.c, K(c));else a.h[b]();
	  };function ja() {
	    this.c = {};
	  }function ka(a, b, c) {
	    var d = [],
	        e;for (e in b) {
	      if (b.hasOwnProperty(e)) {
	        var f = a.c[e];f && d.push(f(b[e], c));
	      }
	    }return d;
	  };function N(a, b) {
	    this.c = a;this.f = b;this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f);
	  }function O(a) {
	    u(a.c, "body", a.a);
	  }function P(a) {
	    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + J(a.c) + ";" + ("font-style:" + I(a) + ";font-weight:" + (a.f + "00") + ";");
	  };function Q(a, b, c, d, e, f) {
	    this.g = a;this.j = b;this.a = d;this.c = c;this.f = e || 3E3;this.h = f || void 0;
	  }Q.prototype.start = function () {
	    var a = this.c.m.document,
	        b = this,
	        c = q(),
	        d = new _promise2.default(function (d, e) {
	      function k() {
	        q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
	          1 <= a.length ? d() : setTimeout(k, 25);
	        }, function () {
	          e();
	        });
	      }k();
	    }),
	        e = new _promise2.default(function (a, d) {
	      setTimeout(d, b.f);
	    });_promise2.default.race([e, d]).then(function () {
	      b.g(b.a);
	    }, function () {
	      b.j(b.a);
	    });
	  };function R(a, b, c, d, e, f, g) {
	    this.v = a;this.B = b;this.c = c;this.a = d;this.s = g || "BESbswy";this.f = {};this.w = e || 3E3;this.u = f || null;this.o = this.j = this.h = this.g = null;this.g = new N(this.c, this.s);this.h = new N(this.c, this.s);this.j = new N(this.c, this.s);this.o = new N(this.c, this.s);a = new H(this.a.c + ",serif", K(this.a));a = P(a);this.g.a.style.cssText = a;a = new H(this.a.c + ",sans-serif", K(this.a));a = P(a);this.h.a.style.cssText = a;a = new H("serif", K(this.a));a = P(a);this.j.a.style.cssText = a;a = new H("sans-serif", K(this.a));a = P(a);this.o.a.style.cssText = a;O(this.g);O(this.h);O(this.j);O(this.o);
	  }var S = { D: "serif", C: "sans-serif" },
	      T = null;function U() {
	    if (null === T) {
	      var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
	    }return T;
	  }R.prototype.start = function () {
	    this.f.serif = this.j.a.offsetWidth;this.f["sans-serif"] = this.o.a.offsetWidth;this.A = q();la(this);
	  };
	  function ma(a, b, c) {
	    for (var d in S) {
	      if (S.hasOwnProperty(d) && b === a.f[S[d]] && c === a.f[S[d]]) return !0;
	    }return !1;
	  }function la(a) {
	    var b = a.g.a.offsetWidth,
	        c = a.h.a.offsetWidth,
	        d;(d = b === a.f.serif && c === a.f["sans-serif"]) || (d = U() && ma(a, b, c));d ? q() - a.A >= a.w ? U() && ma(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : na(a) : V(a, a.v);
	  }function na(a) {
	    setTimeout(p(function () {
	      la(this);
	    }, a), 50);
	  }function V(a, b) {
	    setTimeout(p(function () {
	      v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a);
	    }, a), 0);
	  };function W(a, b, c) {
	    this.c = a;this.a = b;this.f = 0;this.o = this.j = !1;this.s = c;
	  }var X = null;W.prototype.g = function (a) {
	    var b = this.a;b.g && w(b.f, [b.a.c("wf", a.c, K(a).toString(), "active")], [b.a.c("wf", a.c, K(a).toString(), "loading"), b.a.c("wf", a.c, K(a).toString(), "inactive")]);L(b, "fontactive", a);this.o = !0;oa(this);
	  };
	  W.prototype.h = function (a) {
	    var b = this.a;if (b.g) {
	      var c = y(b.f, b.a.c("wf", a.c, K(a).toString(), "active")),
	          d = [],
	          e = [b.a.c("wf", a.c, K(a).toString(), "loading")];c || d.push(b.a.c("wf", a.c, K(a).toString(), "inactive"));w(b.f, d, e);
	    }L(b, "fontinactive", a);oa(this);
	  };function oa(a) {
	    0 == --a.f && a.j && (a.o ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), L(a, "active")) : M(a.a));
	  };function pa(a) {
	    this.j = a;this.a = new ja();this.h = 0;this.f = this.g = !0;
	  }pa.prototype.load = function (a) {
	    this.c = new ca(this.j, a.context || this.j);this.g = !1 !== a.events;this.f = !1 !== a.classes;qa(this, new ha(this.c, a), a);
	  };
	  function ra(a, b, c, d, e) {
	    var f = 0 == --a.h;(a.f || a.g) && setTimeout(function () {
	      var a = e || null,
	          k = d || null || {};if (0 === c.length && f) M(b.a);else {
	        b.f += c.length;f && (b.j = f);var h,
	            m = [];for (h = 0; h < c.length; h++) {
	          var l = c[h],
	              n = k[l.c],
	              r = b.a,
	              x = l;r.g && w(r.f, [r.a.c("wf", x.c, K(x).toString(), "loading")]);L(r, "fontloading", x);r = null;null === X && (X = window.FontFace ? (x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(x[1], 10) : !0 : !1);X ? r = new Q(p(b.g, b), p(b.h, b), b.c, l, b.s, n) : r = new R(p(b.g, b), p(b.h, b), b.c, l, b.s, a, n);m.push(r);
	        }for (h = 0; h < m.length; h++) {
	          m[h].start();
	        }
	      }
	    }, 0);
	  }function qa(a, b, c) {
	    var d = [],
	        e = c.timeout;ia(b);var d = ka(a.a, c, a.c),
	        f = new W(a.c, b, e);a.h = d.length;b = 0;for (c = d.length; b < c; b++) {
	      d[b].load(function (b, d, c) {
	        ra(a, f, b, d, c);
	      });
	    }
	  };function sa(a, b) {
	    this.c = a;this.a = b;
	  }function ta(a, b, c) {
	    var d = z(a.c);a = (a.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");return d + "//" + a + "/" + b + ".js" + (c ? "?v=" + c : "");
	  }
	  sa.prototype.load = function (a) {
	    function b() {
	      if (f["__mti_fntLst" + d]) {
	        var c = f["__mti_fntLst" + d](),
	            e = [],
	            h;if (c) for (var m = 0; m < c.length; m++) {
	          var l = c[m].fontfamily;void 0 != c[m].fontStyle && void 0 != c[m].fontWeight ? (h = c[m].fontStyle + c[m].fontWeight, e.push(new H(l, h))) : e.push(new H(l));
	        }a(e);
	      } else setTimeout(function () {
	        b();
	      }, 50);
	    }var c = this,
	        d = c.a.projectId,
	        e = c.a.version;if (d) {
	      var f = c.c.m;B(this.c, ta(c, d, e), function (e) {
	        e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
	          return c.a;
	        }, b());
	      }).id = "__MonotypeAPIScript__" + d;
	    } else a([]);
	  };function ua(a, b) {
	    this.c = a;this.a = b;
	  }ua.prototype.load = function (a) {
	    var b,
	        c,
	        d = this.a.urls || [],
	        e = this.a.families || [],
	        f = this.a.testStrings || {},
	        g = new C();b = 0;for (c = d.length; b < c; b++) {
	      A(this.c, d[b], D(g));
	    }var k = [];b = 0;for (c = e.length; b < c; b++) {
	      if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), m = 0; m < h.length; m += 1) {
	        k.push(new H(d[0], h[m]));
	      } else k.push(new H(d[0]));
	    }F(g, function () {
	      a(k, f);
	    });
	  };function va(a, b, c) {
	    a ? this.c = a : this.c = b + wa;this.a = [];this.f = [];this.g = c || "";
	  }var wa = "//fonts.googleapis.com/css";function xa(a, b) {
	    for (var c = b.length, d = 0; d < c; d++) {
	      var e = b[d].split(":");3 == e.length && a.f.push(e.pop());var f = "";2 == e.length && "" != e[1] && (f = ":");a.a.push(e.join(f));
	    }
	  }
	  function ya(a) {
	    if (0 == a.a.length) throw Error("No fonts to load!");if (-1 != a.c.indexOf("kit=")) return a.c;for (var b = a.a.length, c = [], d = 0; d < b; d++) {
	      c.push(a.a[d].replace(/ /g, "+"));
	    }b = a.c + "?family=" + c.join("%7C");0 < a.f.length && (b += "&subset=" + a.f.join(","));0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));return b;
	  };function za(a) {
	    this.f = a;this.a = [];this.c = {};
	  }
	  var Aa = { latin: "BESbswy", "latin-ext": "çöüğş", cyrillic: "йяЖ", greek: "αβΣ", khmer: "កខគ", Hanuman: "កខគ" },
	      Ba = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" },
	      Ca = { i: "i", italic: "i", n: "n", normal: "n" },
	      Da = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
	  function Ea(a) {
	    for (var b = a.f.length, c = 0; c < b; c++) {
	      var d = a.f[c].split(":"),
	          e = d[0].replace(/\+/g, " "),
	          f = ["n4"];if (2 <= d.length) {
	        var g;var k = d[1];g = [];if (k) for (var k = k.split(","), h = k.length, m = 0; m < h; m++) {
	          var l;l = k[m];if (l.match(/^[\w-]+$/)) {
	            var n = Da.exec(l.toLowerCase());if (null == n) l = "";else {
	              l = n[2];l = null == l || "" == l ? "n" : Ca[l];n = n[1];if (null == n || "" == n) n = "4";else var r = Ba[n],
	                  n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);l = [l, n].join("");
	            }
	          } else l = "";l && g.push(l);
	        }0 < g.length && (f = g);3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = Aa[d[0]]) && (a.c[e] = d));
	      }a.c[e] || (d = Aa[e]) && (a.c[e] = d);for (d = 0; d < f.length; d += 1) {
	        a.a.push(new H(e, f[d]));
	      }
	    }
	  };function Fa(a, b) {
	    this.c = a;this.a = b;
	  }var Ga = { Arimo: !0, Cousine: !0, Tinos: !0 };Fa.prototype.load = function (a) {
	    var b = new C(),
	        c = this.c,
	        d = new va(this.a.api, z(c), this.a.text),
	        e = this.a.families;xa(d, e);var f = new za(e);Ea(f);A(c, ya(d), D(b));F(b, function () {
	      a(f.a, f.c, Ga);
	    });
	  };function Ha(a, b) {
	    this.c = a;this.a = b;
	  }Ha.prototype.load = function (a) {
	    var b = this.a.id,
	        c = this.c.m;b ? B(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
	      if (b) a([]);else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
	        b = c.Typekit.config.fn;for (var e = [], f = 0; f < b.length; f += 2) {
	          for (var g = b[f], k = b[f + 1], h = 0; h < k.length; h++) {
	            e.push(new H(g, k[h]));
	          }
	        }try {
	          c.Typekit.load({ events: !1, classes: !1, async: !0 });
	        } catch (m) {}a(e);
	      }
	    }, 2E3) : a([]);
	  };function Ia(a, b) {
	    this.c = a;this.f = b;this.a = [];
	  }Ia.prototype.load = function (a) {
	    var b = this.f.id,
	        c = this.c.m,
	        d = this;b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
	      for (var g = 0, k = c.fonts.length; g < k; ++g) {
	        var h = c.fonts[g];d.a.push(new H(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
	      }a(d.a);
	    }, B(this.c, z(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
	      b && a([]);
	    })) : a([]);
	  };var Y = new pa(window);Y.a.c.custom = function (a, b) {
	    return new ua(b, a);
	  };Y.a.c.fontdeck = function (a, b) {
	    return new Ia(b, a);
	  };Y.a.c.monotype = function (a, b) {
	    return new sa(b, a);
	  };Y.a.c.typekit = function (a, b) {
	    return new Ha(b, a);
	  };Y.a.c.google = function (a, b) {
	    return new Fa(b, a);
	  };var Z = { load: p(Y.load, Y) }; true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return Z;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
	})();

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	__webpack_require__(37);
	__webpack_require__(59);
	__webpack_require__(94);
	module.exports = __webpack_require__(15).Promise;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(41)
	  , global             = __webpack_require__(11)
	  , ctx                = __webpack_require__(16)
	  , classof            = __webpack_require__(95)
	  , $export            = __webpack_require__(14)
	  , isObject           = __webpack_require__(21)
	  , aFunction          = __webpack_require__(17)
	  , anInstance         = __webpack_require__(96)
	  , forOf              = __webpack_require__(97)
	  , speciesConstructor = __webpack_require__(101)
	  , task               = __webpack_require__(102).set
	  , microtask          = __webpack_require__(104)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(58)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(105)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(57)($Promise, PROMISE);
	__webpack_require__(106)(PROMISE);
	Wrapper = __webpack_require__(15)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(107)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(51)
	  , TAG = __webpack_require__(58)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(16)
	  , call        = __webpack_require__(98)
	  , isArrayIter = __webpack_require__(99)
	  , anObject    = __webpack_require__(20)
	  , toLength    = __webpack_require__(53)
	  , getIterFn   = __webpack_require__(100)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(20);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(43)
	  , ITERATOR   = __webpack_require__(58)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(95)
	  , ITERATOR  = __webpack_require__(58)('iterator')
	  , Iterators = __webpack_require__(43);
	module.exports = __webpack_require__(15).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(20)
	  , aFunction = __webpack_require__(17)
	  , SPECIES   = __webpack_require__(58)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(16)
	  , invoke             = __webpack_require__(103)
	  , html               = __webpack_require__(56)
	  , cel                = __webpack_require__(25)
	  , global             = __webpack_require__(11)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(51)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , macrotask = __webpack_require__(102).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(51)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(11)
	  , core        = __webpack_require__(15)
	  , dP          = __webpack_require__(19)
	  , DESCRIPTORS = __webpack_require__(23)
	  , SPECIES     = __webpack_require__(58)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(58)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function () {
	  function _class(copyXML) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    this.xmldata = copyXML;
	    this.copydata = {};
	    var nodes = this.xmldata.getElementsByTagName('item');
	    for (var i = 0; i < nodes.length; i++) {
	      this.copydata[nodes[i].getAttribute('id')] = nodes[i].childNodes[0].nodeValue;
	    }
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: 'getCopy',
	    value: function getCopy(id) {
	      if (!this.copydata) {
	        return '';
	      }
	      return this.copydata[id] || "copy not found";
	    }
	  }]);
	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function () {
	  function _class(game) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    this.game = game;
	    this.sounds = {};
	    this._allowMusic = true;
	    this._allowEffects = true;
	    this.backgroundMusic = { id: "", volume: 1 };
	
	    Object.defineProperty(this, "allowMusic", {
	      get: function get() {
	        return this._allowMusic;
	      },
	      set: function set(value) {
	        this._allowMusic = value;
	        if (this._allowMusic && this.backgroundMusic.id) {
	          this.playBackgroundMusic(this.backgroundMusic.id, this.backgroundMusic.volume);
	        } else if (!this._allowMusic && this.backgroundMusic.id) {
	          this.stopSound(this.backgroundMusic.id);
	        }
	      }
	    });
	
	    Object.defineProperty(this, "allowEffects", {
	      get: function get() {
	        return this._allowEffects;
	      },
	      set: function set(value) {
	        this._allowEffects = value;
	        if (!this._allowEffects) {
	          for (var i in this.sounds) {
	            if (i != this.backgroundMusic.id) this.sounds[i].stop();
	          }
	        }
	      }
	    });
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "addSound",
	    value: function addSound(id, assetKey) {
	      this.sounds[id] = this.game.add.audio(assetKey);
	    }
	  }, {
	    key: "playBackgroundMusic",
	    value: function playBackgroundMusic(id, volume) {
	      if (this.sounds[id]) {
	        if (this.backgroundMusic.id != id) {
	          this.stopSound(this.backgroundMusic.id);
	        }
	
	        this.backgroundMusic.id = id;
	        this.backgroundMusic.volume = volume;
	
	        if (this._allowMusic) {
	          this.sounds[id].play(null, 0, volume || 1, true);
	        }
	      } else {
	        console.log("cannot find background music : " + id + ", has it been added?");
	      }
	    }
	  }, {
	    key: "playSoundEffect",
	    value: function playSoundEffect(id, loop, volume) {
	      if (this._allowEffects) {
	        if (this.sounds[id]) this.playSound(id, loop, volume);else console.log("cannot find sound effect : " + id + ", has it been added?");
	      }
	    }
	  }, {
	    key: "playSound",
	    value: function playSound(id, loop, volume) {
	      if (this.sounds[id]) this.sounds[id].play(null, 0, volume || 1, loop);else console.log("cannot find sound : " + id + ", has it been added?");
	    }
	  }, {
	    key: "stopSound",
	    value: function stopSound(id) {
	      if (this.sounds[id]) this.sounds[id].stop();
	    }
	  }, {
	    key: "isSoundPlaying",
	    value: function isSoundPlaying(id) {
	      if (this.sounds[id]) return this.sounds[id].isPlaying;
	      return false;
	    }
	  }, {
	    key: "stopAllSounds",
	    value: function stopAllSounds() {
	      for (var i in this.sounds) {
	        this.sounds[i].stop();
	      }
	    }
	  }]);
	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	    function _class(game, x, y) {
	        (0, _classCallCheck3.default)(this, _class);
	
	        // add graphics
	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));
	
	        _this.logo = _this.game.add.image(0, _this.game.height * 0.35, "cn_preloader_bg");
	        _this.logo.anchor.set(0.5);
	
	        _this.loadPattern = _this.game.add.image(0, _this.game.height * 0.55, "cn_preloader_pattern");
	        _this.loadPattern.anchor.set(0.5);
	
	        _this.loadBar = _this.game.add.image(0, _this.loadPattern.y - 2, "cn_preloader_bar");
	        _this.loadBar.anchor.set(0.5);
	
	        _this.loadPosition = -64;
	        _this.loadOffset = 0;
	
	        _this.addChild(_this.logo);
	        _this.addChild(_this.loadPattern);
	        _this.addChild(_this.loadBar);
	        return _this;
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: "update",
	        value: function update() {
	            this.loadOffset += 5;
	            this.loadPattern.x = this.loadOffset + this.loadPosition;
	
	            if (this.loadOffset >= 128) {
	                this.loadOffset = 0;
	            }
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _phaserSwipe = __webpack_require__(112);
	
	var _phaserSwipe2 = _interopRequireDefault(_phaserSwipe);
	
	var _Hero = __webpack_require__(113);
	
	var _Hero2 = _interopRequireDefault(_Hero);
	
	var _HeroDust = __webpack_require__(114);
	
	var _HeroDust2 = _interopRequireDefault(_HeroDust);
	
	var _Lane = __webpack_require__(115);
	
	var _Lane2 = _interopRequireDefault(_Lane);
	
	var _TimeStamp = __webpack_require__(116);
	
	var _TimeStamp2 = _interopRequireDefault(_TimeStamp);
	
	var _Hazard = __webpack_require__(117);
	
	var _Hazard2 = _interopRequireDefault(_Hazard);
	
	var _HazardExplode = __webpack_require__(118);
	
	var _HazardExplode2 = _interopRequireDefault(_HazardExplode);
	
	var _DeathParticle = __webpack_require__(119);
	
	var _DeathParticle2 = _interopRequireDefault(_DeathParticle);
	
	var _Countdown = __webpack_require__(120);
	
	var _Countdown2 = _interopRequireDefault(_Countdown);
	
	var _GameHUD = __webpack_require__(121);
	
	var _GameHUD2 = _interopRequireDefault(_GameHUD);
	
	var _ClockPickup = __webpack_require__(128);
	
	var _ClockPickup2 = _interopRequireDefault(_ClockPickup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$State) {
	  (0, _inherits3.default)(_class, _Phaser$State);
	
	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'preload',
	    value: function preload() {}
	  }, {
	    key: 'create',
	    value: function create() {
	
	      // house game content
	      this.gameContainer = this.game.add.group();
	
	      // create container to house background scene objects
	      this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "background");
	
	      this.game.sounds.playBackgroundMusic("game_background", 1);
	
	      // house lane positions for sapwns / movement
	      this.lanePositions = this.game.data.lane_positions;
	
	      // setup hero
	      this.hero = new _Hero2.default(this.game);
	      this.hero.lane = 1;
	      this.hero.targetLane = 1;
	      this.hero.position.set(this.game.width / 2, this.game.alreadyPlayed ? this.game.height + this.hero.height * 2 : this.game.height + this.hero.height * 8);
	
	      this.heroDust = new _HeroDust2.default(this.game);
	      this.heroDust.scale.set(1, 2);
	      this.heroDust.position.set(this.hero.x, this.hero.y + this.hero.height * 0.5);
	
	      // setup hazards
	      this.hazards = [];
	      this.hazardPool = [];
	      this.clocks = [];
	      this.clockPool = [];
	      this.hazardDropRate = this.game.data.hazard_droprate;
	      this.hazardLastDropped = 0;
	      this.hazardContainer = this.game.make.group();
	
	      this.hud = new _GameHUD2.default(this.game, { clock: true, score: true });
	
	      //setup countdown
	
	      this.countdown = new _Countdown2.default(this.game, 0, 0);
	      this.countdown.position.set(this.game.width / 2 - this.countdown.width / 2, this.game.height / 2 - this.countdown.height / 2);
	      this.countdown.onCountComplete.add(this.handleCountdownComplete, this);
	
	      // add display objects
	
	      this.gameContainer.addChild(this.background);
	      this.gameContainer.addChild(this.hazardContainer);
	      this.gameContainer.addChild(this.heroDust);
	      this.gameContainer.addChild(this.hero);
	      this.gameContainer.bringToTop(this.hero);
	      this.game.add.existing(this.gameContainer);
	      this.game.add.existing(this.hud);
	
	      // game settings
	      this.gameSpeed = this.game.data.game_speed;
	      this.gameSpeedIncrease = this.game.data.game_speed_increment;
	      this.lanePositionswitchSpeed = this.game.data.lane_switch_speed;
	      this.timeStamp = new _TimeStamp2.default(this.game.time.now);
	      this.timeLimit = this.game.data.game_time;
	      this.timeEnd = null;
	      this.timePaused = 0;
	      this.distanceTravelled = 0;
	      this.gameOver = false;
	      this.smashed = 0;
	      this.state = -1;
	      this.spawnStep = 0;
	
	      // game events
	      this.game.onPause.add(this.handlePause, this);
	      this.game.onResume.add(this.handleResume, this);
	      if (this.game.isTouch) {
	        this.swipe = new _phaserSwipe2.default(this.game);
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var distStep = this.timeStamp.timeStep * (this.gameSpeed / 1000);
	
	      switch (this.state) {
	        case -1:
	          this.hero.y -= distStep;
	          if (this.hero.y <= this.game.height - this.hero.height - 20) {
	            this.hud.setTimeDisplay(this.game.data.game_time);
	            this.gameContainer.addChild(this.countdown);
	            this.gameContainer.bringToTop(this.countdown);
	            this.countdown.startCountdown();
	            this.state = 0;
	          }
	          // update background position
	          this.background.tilePosition.y += distStep;
	          this.heroDust.position.set(this.hero.x, this.hero.y + this.hero.height * 0.5);
	          break;
	        case 0:
	          //countdown state
	          //update background position
	          this.background.tilePosition.y += distStep;
	          this.heroDust.position.set(this.hero.x, this.hero.y + this.hero.height * 0.5);
	          break;
	        case 1:
	
	          // update time stamps
	          this.timeLimit -= this.timeStamp.timeStep;
	          this.hud.setTimeDisplay(this.timeLimit);
	          this.distanceTravelled += distStep;
	
	          if (this.timeLimit < 29250) {
	            this.gamename.destroy(true);
	          }
	
	          // update the game
	          this.checkUserInput();
	          this.checkHazardSpawn();
	          this.updateHero(distStep);
	          this.updateHazards(distStep);
	          this.updateClocks(distStep);
	
	          // update background position
	          this.background.tilePosition.y += distStep;
	          this.heroDust.position.set(this.hero.x, this.hero.y + this.hero.height * 0.5);
	
	          var clockSoundPlaying = this.game.sounds.isSoundPlaying("timeup");
	          if (this.timeLimit < 5000 && !clockSoundPlaying) {
	            this.game.sounds.playSound("timeup", 1, true);
	          } else if (this.timeLimit > 5000 && clockSoundPlaying) {
	            this.game.sounds.stopSound("timeup");
	          }
	
	          // check time
	          if (this.timeLimit <= 0) this.state = 2;
	          break;
	        case 2:
	          this.updateHero(distStep, true);
	          this.updateHazards(0);
	          this.checkUserInput();
	          this.game.sounds.stopSound("timeup");
	          this.updateClocks(0);
	          if (this.hero.y < this.hero.height) this.game.state.start("GameEnd", true, false, this.smashed);
	          break;
	
	      }
	
	      this.timeStamp.updateTime(this.game.time.now);
	      this.hud.setScoreDisplay(this.smashed);
	    }
	  }, {
	    key: 'checkUserInput',
	    value: function checkUserInput() {
	      if (this.game.isTouch) {
	        var direction = this.swipe.check();
	        if (direction !== null) {
	          switch (direction.direction) {
	            case this.swipe.DIRECTION_LEFT:
	            case this.swipe.DIRECTION_UP_LEFT:
	            case this.swipe.DIRECTION_DOWN_LEFT:
	              this.hero.targetLane = Math.max(this.hero.lane - 1, 0);
	              break;
	            case this.swipe.DIRECTION_RIGHT:
	            case this.swipe.DIRECTION_UP_RIGHT:
	            case this.swipe.DIRECTION_DOWN_RIGHT:
	              this.hero.targetLane = Math.min(this.hero.lane + 1, 2);
	              break;
	          }
	        }
	      } else {
	        if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
	          this.hero.targetLane = Math.min(this.hero.lane + 1, 2);
	        }
	
	        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
	          this.hero.targetLane = Math.max(this.hero.lane - 1, 0);
	        }
	      }
	    }
	
	    //===================================================================================================================
	    //   UPDATE HERO
	    //===================================================================================================================
	
	  }, {
	    key: 'updateHero',
	    value: function updateHero(distStep, endGame) {
	      // calculate distance hero is from desired lane
	      var dx = this.hero.x - this.lanePositions[this.hero.targetLane];
	      // calculate lane switch distance
	      var laneStep = this.timeStamp.timeStep * (this.lanePositionswitchSpeed / 1000);
	
	      // if distance is less than step
	      if (Math.abs(dx) < distStep) {
	        // just put the hero in place
	        this.hero.x = this.lanePositions[this.hero.targetLane];
	        this.hero.costume.visible = true;
	        this.hero.tiltLeft.visible = false;
	        this.hero.tiltRight.visible = false;
	        this.hero.lane = this.hero.targetLane;
	      } else {
	        // other wise move hero towards position
	        var rotation = Math.atan2(0, dx);
	        this.hero.x -= Math.cos(rotation) * laneStep;
	
	        if (dx > 0) {
	          this.hero.costume.visible = false;
	          this.hero.tiltLeft.visible = true;
	        } else {
	          this.hero.costume.visible = false;
	          this.hero.tiltRight.visible = true;
	        }
	      }
	
	      if (endGame) {
	        this.hero.y -= distStep;
	        this.heroDust.y += distStep;
	      }
	    }
	  }, {
	    key: 'updateClocks',
	    value: function updateClocks(distStep) {
	
	      var clock = null;
	      var garbage = [];
	      var i = 0;
	
	      for (i in this.clocks) {
	        clock = this.clocks[i];
	
	        if (clock.y > this.game.height + clock.height) {
	          garbage.push(clock);
	        } else {
	          // move by distance
	          clock.y += distStep;
	
	          // calculate distance from hero
	          var d = Math.sqrt((clock.x - this.hero.x) * (clock.x - this.hero.x) + (clock.y - this.hero.y) * (clock.y - this.hero.y));
	
	          // if smaller than hero radius - we hit hero
	          if (this.state == 1 && d < this.hero.height / 2) {
	            if (clock.alive === true) {
	              clock.alive = false;
	              clock.bringToTop();
	              clock.pickupTween();
	              this.game.sounds.playSoundEffect("timebonus");
	              this.timeLimit += this.game.data.clock_bonus;
	            }
	          }
	        }
	      }
	
	      for (i in garbage) {
	        this.clocks.splice(this.clocks.indexOf(garbage[i]), 1);
	        this.clockPool.push(garbage[i]);
	      }
	    }
	
	    //===================================================================================================================
	    //   CHACK HAZARDS
	    //===================================================================================================================
	
	  }, {
	    key: 'checkHazardSpawn',
	    value: function checkHazardSpawn() {
	      // do we need to spawn a hazard
	      if (this.distanceTravelled - this.hazardLastDropped > this.hazardDropRate) {
	        // yup - reset last drop point
	        this.hazardLastDropped = this.distanceTravelled;
	        this.spawnHazard();
	      }
	    }
	  }, {
	    key: 'updateHazards',
	    value: function updateHazards(distStep) {
	      var garbage = [];
	      var i = 0;
	
	      var hazard = void 0;
	      // update hazards
	      for (i in this.hazards) {
	        hazard = this.hazards[i];
	
	        if (hazard.y > this.game.height + hazard.height) {
	          garbage.push(hazard);
	        } else {
	          // move by distance
	          hazard.y += distStep;
	
	          if (hazard.alive) {
	            // calculate distance from hero
	            var d = Math.sqrt((hazard.x - this.hero.x) * (hazard.x - this.hero.x) + (hazard.y - this.hero.y) * (hazard.y - this.hero.y));
	
	            // if smaller than hero radius - we hit hero
	            if (d < this.hero.height / 2) this.destroyHazard(hazard);
	          }
	        }
	      }
	
	      for (i in garbage) {
	        this.hazards.splice(this.hazards.indexOf(garbage[i]), 1);
	        this.hazardPool.push(garbage[i]);
	      }
	    }
	  }, {
	    key: 'destroyHazard',
	    value: function destroyHazard(hazard) {
	      this.smashed++;
	      hazard.visible = false;
	      hazard.alive = false;
	      this.gameContainer.addChild(new _HazardExplode2.default(this.game, hazard.x, hazard.y, hazard.type));
	      this.game.sounds.playSoundEffect("smash");
	    }
	  }, {
	    key: 'spawnHazard',
	    value: function spawnHazard() {
	
	      if (this.spawnStep > 0 && this.spawnStep % this.game.data.clock_drop == 0) {
	        var lanes = [0, 1, 2];
	        var count = 2;
	        while (lanes.length > count) {
	          lanes.splice(Math.floor(Math.random() * 3), 1);
	        }var hazardLane = lanes.splice(Math.floor(Math.random() * 2), 1)[0];
	        var clocklane = lanes[0];
	
	        this.createHazard(hazardLane);
	        this.dropClock(clocklane);
	      } else {
	        var lane = Math.floor(Math.random() * 3);
	        this.createHazard(Math.floor(Math.random() * 3));
	      }
	
	      this.spawnStep++;
	    }
	  }, {
	    key: 'createHazard',
	    value: function createHazard(lane) {
	      var hazard = this.hazardPool.shift() || new _Hazard2.default(this.game);
	      hazard.reset();
	      hazard.position.set(this.lanePositions[lane], -200);
	      this.hazardContainer.addChild(hazard);
	      this.hazards.push(hazard);
	    }
	  }, {
	    key: 'dropClock',
	    value: function dropClock(lane) {
	      var clock = this.clockPool.shift() || new _ClockPickup2.default(this.game);
	      clock.position.set(this.lanePositions[lane], -200);
	      this.hazardContainer.addChild(clock);
	      this.clocks.push(clock);
	    }
	
	    //===================================================================================================================
	    //   COUNTDOWN
	    //===================================================================================================================
	
	  }, {
	    key: 'handleCountdownComplete',
	    value: function handleCountdownComplete() {
	      this.countdown.onCountComplete.remove(this.handleCountdownComplete, this);
	      this.gameContainer.remove(this.countdown);
	      this.state = 1;
	      this.gamename = this.game.add.text(0, 0, this.game.copy.getCopy(this.game.data.copy_ref.game_id), this.game.data.styles.in_game_message);
	      this.gamename.setTextBounds(0, 0, this.game.width, this.game.height);
	      this.gamename.position.set(0, 0);
	      this.gamename.padding.set(100);
	    }
	    //===================================================================================================================
	    //   PAUSE / RESUME
	    //===================================================================================================================
	
	  }, {
	    key: 'handleGameSizeChange',
	    value: function handleGameSizeChange() {
	      this.background.height = this.game.height;
	      this.hero.y = this.state > 0 ? this.game.height - this.hero.height * 0.65 : this.hero.y;
	      this.heroDust.y = this.hero.y + this.hero.height * 0.5;
	    }
	  }, {
	    key: 'handlePause',
	    value: function handlePause() {
	      this.timePaused = this.game.time.now;
	    }
	  }, {
	    key: 'handleResume',
	    value: function handleResume(e) {
	      this.timeStamp.timeUpdated += this.game.time.now - this.timePaused;
	    }
	  }, {
	    key: 'shutdown',
	    value: function shutdown() {
	      this.hero.destroy(true);
	      this.hazardContainer.destroy(true);
	      this.hud.destroy(true);
	      this.background.destroy(true);
	
	      this.game.sounds.stopSound("game_background");
	
	      for (var i in this.hazards) {
	        this.hazards[i].destroy();
	      }for (var i in this.hazardPool) {
	        this.hazardPool[i].destroy();
	      } // game settings#
	      this.background = null;
	      this.lanePositions = null;
	      this.hazardPool = null;
	      this.hazards = null;
	      this.hazardContainer = null;
	      this.hazardLastDropped = null;
	      this.hazardDropRate = null;
	      this.hud = null;
	      this.gameSpeed = null;
	      this.gameSpeedIncrease = null;
	      this.lanePositionswitchSpeed = null;
	      this.timeStamp = null;
	      this.timeLimit = null;
	      this.timeEnd = null;
	      this.timePaused = null;
	      this.distanceTravelled = null;
	      this.gameOver = null;
	      this.smashed = null;
	      this.state = null;
	
	      // game events
	      this.game.onPause.remove(this.handlePause, this);
	      this.game.onResume.remove(this.handleResume, this);
	      this.game.scale.onSizeChange.remove(this.handleGameSizeChange, this);
	    }
	  }]);
	  return _class;
	}(Phaser.State); /* globals __DEV__ */
	

	exports.default = _class;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by flogvit on 2015-11-03.
	 *
	 * @copyright Cellar Labs AS, 2015, www.cellarlabs.com, all rights reserved
	 * @file
	 * @license MIT
	 * @author Vegard Hanssen <Vegard.Hanssen@cellarlabs.com>
	 *
	 */
	
	
	function Swipe(game, model) {
	  var self = this;
	
	  self.DIRECTION_UP = 1;
	  self.DIRECTION_DOWN = 2;
	  self.DIRECTION_LEFT = 4;
	  self.DIRECTION_RIGHT = 8;
	  self.DIRECTION_UP_RIGHT = 16;
	  self.DIRECTION_UP_LEFT = 32;
	  self.DIRECTION_DOWN_RIGHT = 64;
	  self.DIRECTION_DOWN_LEFT = 128;
	
	  self.game = game;
	  self.model = model !== undefined ? model : null;
	  self.dragLength = 100;
	  self.diagonalDelta = 50;
	  self.swiping = false;
	  self.direction = null;
	  self.tmpDirection = null;
	  self.tmpCallback = null;
	  self.diagonalDisabled = false;
	
	  this.game.input.onDown.add(function () {
	    self.swiping = true;
	  });
	  this.game.input.onUp.add(function () {
	    self.swiping = false;
	  })
	
	  this.setupKeyboard();
	}
	
	Swipe.prototype.setupKeyboard = function() {
	  var self = this;
	  var up = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
	  up.onDown.add(function () {
	    if (self.tmpDirection !== null) {
	      switch(self.tmpDirection) {
	        case self.DIRECTION_LEFT:
	          self.direction = self.DIRECTION_UP_LEFT;
	          self.model !== null && self.model.upLeft && self.model.upLeft();
	          break;
	        case self.DIRECTION_RIGHT:
	          self.direction = self.DIRECTION_UP_RIGHT;
	          self.model !== null && self.model.upRight && self.model.upRight();
	          break;
	        default:
	          self.direction = self.DIRECTION_UP;
	          self.model !== null && self.model.up && self.model.up();
	      }
	      self.tmpDirection = null;
	      self.tmpCallback = null;
	    } else {
	      self.tmpDirection = self.DIRECTION_UP;
	      self.tmpCallback = self.model !== null && self.model.up ? self.model.up : null;
	    }
	  })
	  up.onUp.add(this.keyUp, this);
	
	  var down = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	  down.onDown.add(function () {
	    if (self.tmpDirection !== null) {
	      switch(self.tmpDirection) {
	        case self.DIRECTION_LEFT:
	          self.direction = self.DIRECTION_DOWN_LEFT;
	          self.model !== null && self.model.downLeft && self.model.downLeft();
	          break;
	        case self.DIRECTION_RIGHT:
	          self.direction = self.DIRECTION_DOWN_RIGHT;
	          self.model !== null && self.model.downRight && self.model.downRight();
	          break;
	        default:
	          self.direction = self.DIRECTION_DOWN;
	          self.model !== null && self.model.down && self.model.down();
	      }
	      self.tmpDirection = null;
	      self.tmpCallback = null;
	    } else {
	      self.tmpDirection = self.DIRECTION_DOWN;
	      self.tmpCallback = self.model !== null && self.model.down ? self.model.down : null;
	    }
	  })
	  down.onUp.add(this.keyUp, this);
	
	  var left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	  left.onDown.add(function () {
	    if (self.tmpDirection !== null) {
	      switch(self.tmpDirection) {
	        case self.DIRECTION_UP:
	          self.direction = self.DIRECTION_UP_LEFT;
	          self.model !== null && self.model.upLeft && self.model.upLeft();
	          break;
	        case self.DIRECTION_DOWN:
	          self.direction = self.DIRECTION_DOWN_LEFT;
	          self.model !== null && self.model.downLeft && self.model.downLeft();
	          break;
	        default:
	          self.direction = self.DIRECTION_LEFT;
	          self.model !== null && self.model.left && self.model.left();
	      }
	      self.tmpDirection = null;
	      self.tmpCallback = null;
	    } else {
	      self.tmpDirection = self.DIRECTION_LEFT;
	      self.tmpCallback = self.model !== null && self.model.left ? self.model.left : null;
	    }
	  })
	  left.onUp.add(this.keyUp, this);
	  var right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	  right.onDown.add(function () {
	    if (self.tmpDirection !== null) {
	      switch(self.tmpDirection) {
	        case self.DIRECTION_UP:
	          self.direction = self.DIRECTION_UP_RIGHT;
	          self.model !== null && self.model.upRight && self.model.upRight();
	          break;
	        case self.DIRECTION_DOWN:
	          self.direction = self.DIRECTION_DOWN_RIGHT;
	          self.model !== null && self.model.downRight && self.model.downRight();
	          break;
	        default:
	          self.direction = self.DIRECTION_RIGHT;
	          self.model !== null && self.model.right && self.model.right();
	      }
	      self.tmpDirection = null;
	      self.tmpCallback = null;
	    } else {
	      self.tmpDirection = self.DIRECTION_RIGHT;
	      self.tmpCallback = self.model !== null && self.model.right ? self.model.right : null;
	    }
	  })
	  right.onUp.add(this.keyUp, this);
	}
	
	Swipe.prototype.keyUp = function() {
	  this.direction = this.tmpDirection;
	  this.tmpDirection = null;
	  if (this.tmpCallback !== null) {
	    this.tmpCallback.call(this.model);
	    this.tmpCallback = null;
	  }
	}
	
	Swipe.prototype.check = function () {
	  if (this.direction !== null) {
	    var result = {x: 0, y: 0, direction: this.direction};
	    this.direction = null;
	    return result;
	  }
	  if (!this.swiping) return null;
	
	  if (Phaser.Point.distance(this.game.input.activePointer.position, this.game.input.activePointer.positionDown) < this.dragLength) return null;
	
	  this.swiping = false;
	
	  var direction = null;
	  var deltaX = this.game.input.activePointer.position.x - this.game.input.activePointer.positionDown.x;
	  var deltaY = this.game.input.activePointer.position.y - this.game.input.activePointer.positionDown.y;
	
	  var result = {
	    x: this.game.input.activePointer.positionDown.x,
	    y: this.game.input.activePointer.positionDown.y
	  };
	
	  var deltaXabs = Math.abs(deltaX);
	  var deltaYabs = Math.abs(deltaY);
	
	  if (!this.diagonalDisabled && deltaXabs > (this.dragLength-this.diagonalDelta) && deltaYabs > (this.dragLength-this.diagonalDelta)) {
	    if (deltaX > 0 && deltaY > 0) {
	      direction = this.DIRECTION_DOWN_RIGHT;
	      this.model !== null && this.model.downRight && this.model.downRight(result);
	    } else if (deltaX > 0 && deltaY < 0) {
	      direction = this.DIRECTION_UP_RIGHT;
	      this.model !== null && this.model.upRight && this.model.upRight(result);
	    } else if (deltaX < 0 && deltaY > 0) {
	      direction = this.DIRECTION_DOWN_LEFT;
	      this.model !== null && this.model.downLeft && this.model.downLeft(result);
	    } else if (deltaX < 0 && deltaY < 0) {
	      direction = this.DIRECTION_UP_LEFT;
	      this.model !== null && this.model.upLeft && this.model.upLeft(result);
	    }
	  } else if (deltaXabs > this.dragLength || deltaYabs > this.dragLength) {
	    if (deltaXabs > deltaYabs) {
	      if (deltaX > 0) {
	        direction = this.DIRECTION_RIGHT;
	        this.model !== null && this.model.right && this.model.right(result);
	      } else if (deltaX < 0) {
	        direction = this.DIRECTION_LEFT;
	        this.model !== null && this.model.left && this.model.left(result);
	      }
	    } else {
	      if (deltaY > 0) {
	        direction = this.DIRECTION_DOWN;
	        this.model !== null && this.model.down && this.model.down(result);
	      } else if (deltaY < 0) {
	        direction = this.DIRECTION_UP;
	        this.model !== null && this.model.up && this.model.up(result);
	      }
	    }
	  }
	  if (direction !== null) {
	    result['direction'] = direction;
	    return result;
	  }
	  return null;
	}
	
	if (true) {
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Swipe;
	  }
	}


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));
	
	    _this.speedlines = _this.game.make.sprite(0, 25, "hero_speed_lines");
	    _this.speedlines.anchor.set(0.5);
	
	    _this.speedlines.animations.add("run");
	    _this.speedlines.animations.play("run", 24, true);
	
	    //  this.dustCloud = this.game.make.sprite(0,150,"hero_dust");
	    //  this.dustCloud.anchor.set(0.5);
	    //  this.dustCloud.animations.add("run");
	    //  this.dustCloud.animations.play("run", 24, true);
	
	    _this.costume = _this.game.make.sprite(0, 0, "hero");
	    _this.costume.anchor.set(0.5);
	    _this.costume.animations.add("run");
	    _this.costume.animations.play("run", 24, true);
	
	    _this.tiltLeft = _this.game.make.sprite(0, 0, "hero_tilt_left");
	    _this.tiltLeft.anchor.set(0.5, 0.6);
	    _this.tiltLeft.animations.add("run");
	    _this.tiltLeft.animations.play("run", 24, true);
	    _this.tiltLeft.visible = false;
	
	    _this.tiltRight = _this.game.make.sprite(0, 0, "hero_tilt_right");
	    _this.tiltRight.anchor.set(0.5, 0.6);
	    _this.tiltRight.animations.add("run");
	    _this.tiltRight.animations.play("run", 24, true);
	    _this.tiltRight.visible = false;
	
	    //this.addChild(this.dustCloud);
	    _this.addChild(_this.costume);
	    _this.addChild(_this.speedlines);
	    _this.addChild(_this.tiltLeft);
	    _this.addChild(_this.tiltRight);
	
	    Object.defineProperty(_this, 'width', { get: function get() {
	        return this.costume.width;
	      } });
	    Object.defineProperty(_this, 'height', { get: function get() {
	        return this.costume.height;
	      } });
	    return _this;
	  }
	
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "hero_dust"));
	
	    _this.animations.add("run");
	    _this.animations.play("run", 24, true);
	
	    _this.anchor.set(0.5);
	    return _this;
	  }
	
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y, width) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));
	
	    _this.costume = _this.game.make.graphics();
	    _this.costume.beginFill(0xCCCCCC);
	    _this.costume.drawRect(0, 0, width, _this.game.height);
	    _this.costume.beginFill(0xAAAAAA);
	    _this.costume.drawRect(0, 0, 4, _this.game.height);
	    _this.costume.drawRect(width - 4, 0, 4, _this.game.height);
	    _this.costume.beginFill(0x505050);
	
	    _this.costume.drawRect(4, 0, 2, _this.game.height);
	    _this.costume.drawRect(width - 6, 0, 2, _this.game.height);
	
	    _this.costume.x = -(width / 2);
	
	    _this.addChild(_this.costume);
	
	    return _this;
	  }
	
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function () {
	  function _class(time) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    this.timeStart = time;
	    this.timeUpdated = this.timeStart;
	    this.timeStep = 0;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "updateTime",
	    value: function updateTime(time) {
	      this.timeStep = time - this.timeUpdated;
	      this.timeUpdated = time;
	    }
	  }, {
	    key: "setTime",
	    value: function setTime(time) {}
	  }]);
	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));
	
	    _this.anchor.set(0.5);
	
	    _this.explodeA = _this.game.make.sprite(0, 0, "hazard_a_explode");
	    _this.explodeA.animations.add("explode");
	    _this.explodeB = _this.game.make.sprite(0, 0, "hazard_b_explode");
	    _this.explodeB.animations.add("explode");
	
	    _this.type = 'a';
	
	    _this.reset();
	    return _this;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "reset",
	    value: function reset() {
	      this.type = Math.random() > 0.5 ? 'a' : 'b';
	      this.loadTexture("hazard_" + this.type);
	      this.alive = true;
	      this.visible = true;
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
		(0, _inherits3.default)(_class, _Phaser$Sprite);
	
		function _class(game, x, y, type) {
			(0, _classCallCheck3.default)(this, _class);
	
			var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));
	
			_this.costume = _this.game.make.sprite(0, 0, "hazard_" + type + "_explode");
			_this.costume.anchor.set(0.5);
			_this.costume.scale.set(1.25);
			_this.costume.animations.add("run");
			_this.costume.animations.play("run", 24, false);
			_this.costume.animations.currentAnim.onComplete.addOnce(function () {
				this.destroy();
			}, _this);
			_this.addChild(_this.costume);
	
			_this.lastUpdate = _this.game.time.now;
			_this.speed = 0.75;
	
			return _this;
		}
	
		(0, _createClass3.default)(_class, [{
			key: "update",
			value: function update() {
				var step = this.game.time.now - this.lastUpdate;
	
				this.lastUpdate = this.game.time.now;
	
				this.costume.y += this.speed * step;
			}
		}]);
		return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y, color, stroke) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));
	
	    _this.costume = _this.game.make.graphics();
	    _this.life = 100;
	    _this.speed = 2 + Math.random() * 5;
	    _this.angle = Math.random() * 360;
	    _this.radius = 5 + Math.random() * 25;
	
	    _this.costume.lineStyle(2, stroke || 0x505050);
	    _this.costume.beginFill(color || 0x505050);
	    _this.costume.drawCircle(0, 0, _this.radius * 2);
	    _this.addChild(_this.costume);
	    return _this;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "update",
	    value: function update() {
	      this.x += this.speed * Math.cos(this.rotation);
	      this.y += this.speed * Math.sin(this.rotation);
	      this.scale.set(this.life / 100);
	      this.life *= 0.95;
	      if (this.life <= 0.1) {
	        this.destroy();
	      }
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));
	
	    _this.game = game;
	
	    _this.costume = _this.game.make.sprite(0, 0, "gameoverlay_countdown");
	    _this.costume.anchor.set(0, 0.11);
	    _this.addChild(_this.costume);
	
	    _this.label = _this.game.make.text(_this.costume.width * 0.05, _this.costume.height * 0.08, 3, _this.game.data.styles.in_game_countdown);
	    _this.label.setTextBounds(0, 0, _this.costume.width * 0.9, 400);
	    _this.label.padding.set(50);
	
	    _this.addChild(_this.label);
	
	    _this.onCountComplete = new Phaser.Signal();
	
	    _this.count = 3;
	
	    Object.defineProperty(_this, 'width', { get: function get() {
	        return this.costume.width * 0.9;
	      } });
	    Object.defineProperty(_this, 'height', { get: function get() {
	        return this.costume.height;
	      } });
	    return _this;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: 'startCountdown',
	    value: function startCountdown(onComplete) {
	      this.count = 4;
	      this.onComplete = onComplete;
	      this.countdown();
	    }
	  }, {
	    key: 'countdown',
	    value: function countdown() {
	      this.count--;
	      this.label.text = this.count;
	      if (this.count == 0) this.onCountComplete.dispatch();else {
	        this.game.time.events.add(1000, this.countdown, this).autoDestroy = true;
	      }
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ClockDisplay = __webpack_require__(122);
	
	var _ClockDisplay2 = _interopRequireDefault(_ClockDisplay);
	
	var _ScoreDisplay = __webpack_require__(123);
	
	var _ScoreDisplay2 = _interopRequireDefault(_ScoreDisplay);
	
	var _BtnPause = __webpack_require__(124);
	
	var _BtnPause2 = _interopRequireDefault(_BtnPause);
	
	var _InstructionSwipe = __webpack_require__(125);
	
	var _InstructionSwipe2 = _interopRequireDefault(_InstructionSwipe);
	
	var _InstructionArrowsLeftRight = __webpack_require__(126);
	
	var _InstructionArrowsLeftRight2 = _interopRequireDefault(_InstructionArrowsLeftRight);
	
	var _BtnSoundToggle = __webpack_require__(127);
	
	var _BtnSoundToggle2 = _interopRequireDefault(_BtnSoundToggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	    function _class(game, args) {
	        (0, _classCallCheck3.default)(this, _class);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game));
	
	        args = args || {};
	
	        // add game UI
	        if (args.clock) {
	            _this.clockDisplay = new _ClockDisplay2.default(_this.game);
	            _this.clockDisplay.setTime(_this.game.data.game_time);
	            _this.addChild(_this.clockDisplay);
	        }
	
	        if (args.score) {
	            _this.scoreDisplay = new _ScoreDisplay2.default(_this.game);
	            _this.addChild(_this.scoreDisplay);
	        }
	
	        _this.btnPause = new _BtnPause2.default(_this.game);
	        _this.pauseOverlay = _this.game.make.sprite(0, 0, "gameoverlay_pause");
	        _this.pauseOverlay.position.set(_this.game.width / 2 - _this.pauseOverlay.width / 2, _this.game.height * 0.4 - _this.pauseOverlay.height / 2);
	        _this.pauseOverlay.visible = false;
	        _this.pauseOverlay.inputEnabled = true;
	        _this.pauseOverlay.input.useHandCursor = true;
	        _this.pauseOverlay.events.onInputUp.add(_this.btnPause.resumeGame, _this.btnPause);
	
	        _this.btnSound = new _BtnSoundToggle2.default(_this.game);
	        _this.btnSound.position.set(_this.game.width / 2 - _this.btnSound.width / 2, _this.game.height * 0.6);
	        _this.btnSound.visible = false;
	
	        _this.instruction = _this.game.isTouch ? new _InstructionSwipe2.default(_this.game) : new _InstructionArrowsLeftRight2.default(_this.game);
	        _this.addChild(_this.instruction);
	        _this.addChild(_this.pauseOverlay);
	        _this.addChild(_this.btnPause);
	        _this.addChild(_this.btnSound);
	
	        _this.game.onPause.add(_this.handlePause, _this);
	        _this.game.onResume.add(_this.handleResume, _this);
	
	        _this.pauseOverlay.y = _this.game.height / 2 - _this.pauseOverlay.height * 0.75;
	
	        _this.pauseInterval;
	        _this.pausedUpdate = _this.handleMouseUpdates.bind(_this);
	        _this.lastScreenSize = { width: 0, height: 0 };
	
	        return _this;
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: 'update',
	        value: function update() {
	            if (window.innerWidth != this.lastScreenSize.width || window.innerHeight != this.game.viewport.height) {
	                this.btnPause.position.set(this.scoreDisplay ? this.game.viewport.right - this.scoreDisplay.width - this.btnPause.width : this.game.viewport.right - this.btnPause.width, this.game.viewport.top);
	                if (this.scoreDisplay) this.scoreDisplay.position.set(this.game.viewport.right - this.scoreDisplay.width, this.game.viewport.top);
	                if (this.clockDisplay) this.clockDisplay.position.set(this.game.viewport.left, this.game.viewport.top);
	                this.pauseOverlay.position.set(this.game.viewport.centerX - this.pauseOverlay.width / 2, this.game.viewport.centerY - this.pauseOverlay.height * 0.6);
	                this.btnSound.position.set(this.game.viewport.centerX - this.btnSound.width / 2, this.pauseOverlay.y + this.pauseOverlay.height + 10);
	                this.lastScreenSize = { width: window.innerWidth, height: window.innerHeight };
	            }
	        }
	    }, {
	        key: 'handleResume',
	        value: function handleResume() {
	            window.removeEventListener("mousemove", this.pausedUpdate);
	            this.pauseOverlay.visible = false;
	            this.btnSound.visible = false;
	            this.game.input.onDown.remove(this.handlePausedInput, this);
	            this.game.input.onUp.remove(this.handlePausedUpInput, this);
	        }
	    }, {
	        key: 'handlePause',
	        value: function handlePause(e) {
	            this.pauseOverlay.visible = true;
	            this.btnSound.visible = true;
	            this.game.input.onDown.add(this.handlePausedInput, this);
	            this.game.input.onUp.add(this.handlePausedUpInput, this);
	            window.addEventListener("mousemove", this.pausedUpdate);
	        }
	    }, {
	        key: 'setScoreDisplay',
	        value: function setScoreDisplay(value) {
	            if (this.scoreDisplay) this.scoreDisplay.setScore(value);
	        }
	    }, {
	        key: 'setTimeDisplay',
	        value: function setTimeDisplay(value) {
	            if (this.clockDisplay) this.clockDisplay.setTime(value);
	        }
	    }, {
	        key: 'handleMouseUpdates',
	        value: function handleMouseUpdates() {
	            var e = this.game.input;
	
	            if (this.isOverSound(e)) {
	                this.btnSound.handleOver();
	                this.game.updateRender();
	            } else {
	                this.btnSound.handleUp();
	                this.game.updateRender();
	            }
	        }
	    }, {
	        key: 'handlePausedUpInput',
	        value: function handlePausedUpInput() {
	            this.btnSound.handleUp();
	        }
	    }, {
	        key: 'isOverSound',
	        value: function isOverSound(e) {
	            return e.x > this.btnSound.x && e.x < this.btnSound.x + this.btnSound.width && e.y > this.btnSound.y && e.y < this.btnSound.y + this.btnSound.height;
	        }
	    }, {
	        key: 'handlePausedInput',
	        value: function handlePausedInput(e) {
	            if (this.isOverSound(e)) {
	                this.btnSound.handleInput();
	                this.btnSound.handleOver();
	            } else if (e.x > this.pauseOverlay.x && e.x < this.pauseOverlay.x + this.pauseOverlay.width && e.y > this.pauseOverlay.y && e.y < this.pauseOverlay.y + this.pauseOverlay.height) {
	                this.btnPause.resumeGame();
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            //document.removeEventListener("webkitfullscreenchange", this.gameSizeChangeHandler);
	            window.removeEventListener("mousemove", this.pausedUpdate);
	            this.btnPause.destroy(true);
	            this.btnSound.destroy(true);
	            this.game.input.onDown.remove(this.handlePausedInput, this);
	            this.game.onPause.remove(this.handlePause, this);
	            this.game.onResume.remove(this.handleResume, this);
	            //this.game.scale.onSizeChange.remove(this.handleGameSizeChange, this);
	            Phaser.Sprite.prototype.destroy.call(this);
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "gamehud_time"));
	
	    _this.game = game;
	    _this.copy = _this.game.make.text(0, 0, '0.00', _this.game.data.styles.in_game_clock);
	    _this.copy.setTextBounds(155, 40, 155, 60);
	    _this.copy.padding.set(10);
	    _this.addChild(_this.copy);
	    return _this;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "setTime",
	    value: function setTime(milliseconds) {
	      var time = this.msToTime(milliseconds);
	      this.copy.text = time.minutes + " : " + time.seconds;
	      this.copy.fill = time.seconds < 10 ? "#FF0000" : "#ffffff";
	    }
	  }, {
	    key: "msToTime",
	    value: function msToTime(duration) {
	      var milliseconds = parseInt(duration % 1000 / 100),
	          seconds = parseInt(duration / 1000 % 60),
	          minutes = parseInt(duration / (1000 * 60) % 60),
	          hours = parseInt(duration / (1000 * 60 * 60) % 24);
	
	      hours = hours < 10 ? "0" + hours : hours;
	      seconds = seconds < 10 ? "0" + seconds : seconds;
	      milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
	      return { minutes: minutes, seconds: seconds };
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "gamehud_score"));
	
	    _this.game = game;
	
	    _this.copy = _this.game.make.text(0, 0, '0000', _this.game.data.styles.in_game_score);
	    _this.copy.setTextBounds(0, 45, _this.width, _this.height);
	    _this.copy.anchor.set(0.5);
	    _this.copy.padding.set(10);
	    _this.addChild(_this.copy);
	    return _this;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "pulseTween",
	    value: function pulseTween() {
	      this.copy.scale.set(1);
	      this.tweenUp = this.game.add.tween(this.copy.scale).to({ x: 1.25, y: 1.25 }, 250, "Quart.easeOut", false, 0);
	      this.tweenDown = this.game.add.tween(this.copy.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut", false, 0);
	      this.tweenUp.chain(this.tweenDown);
	      this.tweenUp.start();
	    }
	  }, {
	    key: "setScore",
	    value: function setScore(score) {
	      if (this.copy.text != score.toString()) this.pulseTween();
	
	      this.copy.text = score.toString();
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	    function _class(game, x, y) {
	        (0, _classCallCheck3.default)(this, _class);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "gamehud_pause"));
	
	        _this.game = game;
	        _this.inputEnabled = true;
	        _this.input.useHandCursor = true;
	
	        _this.game.onPause.add(_this.pauseGame, _this);
	        _this.game.onResume.add(_this.resumeGame, _this);
	
	        _this.events.onInputDown.add(_this.handleOver, _this);
	        _this.events.onInputOver.add(_this.handleOver, _this);
	        _this.events.onInputOut.add(_this.handleUp, _this);
	        _this.events.onInputUp.add(_this.pauseGame, _this);
	
	        _this.pauseActive = false;
	        return _this;
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: "handleInput",
	        value: function handleInput() {
	            if (this.pauseActive) {
	                this.resumeGame();
	            } else {
	                this.pauseGame();
	            }
	        }
	    }, {
	        key: "pauseGame",
	        value: function pauseGame() {
	            this.pauseActive = true;
	            this.game.paused = true;
	            this.game.input.onUp.add(this.resumeHandlePausedInput, this);
	            if (this.game.isTouch) this.handleOver();
	        }
	    }, {
	        key: "resumeHandlePausedInput",
	        value: function resumeHandlePausedInput(e) {
	            if (e.x > this.x && e.x < this.x + this.width && e.y > this.y && e.y < this.y + this.height) {
	                this.resumeGame();
	            }
	        }
	    }, {
	        key: "resumeGame",
	        value: function resumeGame() {
	            this.pauseActive = false;
	            this.game.paused = false;
	            this.game.input.onUp.remove(this.resumeGame, this);
	            if (this.game.isTouch) this.handleUp();
	        }
	    }, {
	        key: "handleOver",
	        value: function handleOver() {
	            this.loadTexture("gamehud_pause_wht");
	        }
	    }, {
	        key: "handleUp",
	        value: function handleUp() {
	            this.loadTexture("gamehud_pause");
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.events.onInputUp.remove(this.pauseGame, this);
	            this.game.onPause.remove(this.pauseGame, this);
	            this.game.onResume.remove(this.resumeGame, this);
	            Phaser.Sprite.prototype.destroy.call(this);
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "instruction_swipe"));
	
	    _this.scale.set(0);
	    _this.visible = false;
	
	    if (!_this.game.alreadyPlayed) {
	      _this.game.alreadyPlayed = true;
	      _this.anchor.set(0.5);
	      _this.position.set(_this.game.width / 2, _this.game.height / 2);
	      _this.tweenCount = 0;
	      _this.game.time.events.add(1000, _this.tweenLeft, _this).autoDestroy = true;
	    }
	
	    return _this;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "tweenLeft",
	    value: function tweenLeft() {
	      this.scale.set(1);
	      this.visible = true;
	      this.position.set(this.game.width / 2, this.game.height / 2);
	      this.tweenA = this.game.add.tween(this).to({ x: this.game.width * 0.25 }, 500, "Quart.easeOut");
	      this.tweenB = this.game.add.tween(this.scale).to({ x: 0, y: 0 }, 250, "Quart.easeOut");
	      this.tweenA.chain(this.tweenB);
	      this.tweenB.onComplete.addOnce(this.reset, this);
	      this.tweenA.start();
	    }
	  }, {
	    key: "tweenRight",
	    value: function tweenRight() {
	      this.scale.set(1);
	      this.visible = true;
	      this.position.set(this.game.width / 2, this.game.height / 2);
	      this.tweenA = this.game.add.tween(this).to({ x: this.game.width * 0.75 }, 500, "Quart.easeOut");
	      this.tweenB = this.game.add.tween(this.scale).to({ x: 0, y: 0 }, 250, "Quart.easeOut");
	      this.tweenA.chain(this.tweenB);
	      this.tweenB.onComplete.addOnce(this.reset, this);
	      this.tweenA.start();
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.tweenCount++;
	
	      if (this.tweenCount <= 1) {
	        this.tweenCount % 2 == 0 ? this.tweenLeft() : this.tweenRight();
	      }
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));
	
	    if (!_this.game.alreadyPlayed) {
	      _this.arrowLeft = _this.game.make.sprite(0, 0, "instruction_arrow_left");
	      _this.arrowRight = _this.game.make.sprite(0, 0, "instruction_arrow_right");
	
	      _this.arrowLeft.anchor.set(1, 0.5);
	      _this.arrowRight.anchor.set(0, 0.5);
	      _this.arrowLeft.scale.set(1);
	      _this.arrowRight.scale.set(1);
	
	      _this.arrowLeft.position.set(-10, 0);
	      _this.arrowRight.position.set(10, 0);
	      _this.game.alreadyPlayed = true;
	      _this.anchor.set(0.5);
	      _this.position.set(_this.game.width / 2, _this.game.height / 2);
	      _this.addChild(_this.arrowLeft);
	      _this.addChild(_this.arrowRight);
	      _this.tweenArrows();
	    } else {
	      _this.visible = false;
	    }
	
	    return _this;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "tweenArrows",
	    value: function tweenArrows() {
	      this.tweenLeftIn = this.game.add.tween(this.arrowLeft.scale).to({ x: 0.5, y: 0.5 }, 250, "Quart.easeOut", false, 250);
	      this.tweenLeftOut = this.game.add.tween(this.arrowLeft.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut");
	      this.tweenRightIn = this.game.add.tween(this.arrowRight.scale).to({ x: 0.5, y: 0.5 }, 250, "Quart.easeOut", false, 250);
	      this.tweenRightOut = this.game.add.tween(this.arrowRight.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut");
	      this.tweenOut = this.game.add.tween(this.scale).to({ x: 0, y: 0 }, 250, "Quart.easeOut", false, 250);
	
	      this.tweenLeftIn.chain(this.tweenLeftOut);
	      this.tweenLeftOut.chain(this.tweenRightIn);
	      this.tweenRightIn.chain(this.tweenRightOut);
	      this.tweenRightOut.chain(this.tweenOut);
	
	      this.tweenLeftIn.start();
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	    function _class(game, x, y) {
	        (0, _classCallCheck3.default)(this, _class);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "btn_sound_on"));
	
	        _this.inputEnabled = true;
	        _this.input.useHandCursor = true;
	        _this.state = _this.game.sounds.allowMusic;
	
	        _this.updateDisplayStatus(_this.game.sounds.allowMusic);
	        _this.events.onInputUp.add(_this.handleInput, _this);
	        _this.events.onInputOut.add(_this.handleUp, _this);
	        _this.events.onInputDown.add(_this.handleOver, _this);
	        _this.events.onInputOver.add(_this.handleOver, _this);
	
	        _this.over = false;
	        return _this;
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: "handleInput",
	        value: function handleInput() {
	            var state = this.game.sounds.allowMusic === false;
	            this.game.sounds.allowMusic = state;
	            this.game.sounds.allowEffects = state;
	            this.updateDisplayStatus(state);
	            if (this.game.isTouch) this.handleUp();
	        }
	    }, {
	        key: "updateDisplayStatus",
	        value: function updateDisplayStatus(status) {
	            if (this.over) {
	                this.loadTexture(status ? "btn_sound_on_wht" : "btn_sound_off_wht");
	            } else {
	                this.loadTexture(status ? "btn_sound_on" : "btn_sound_off");
	            }
	        }
	    }, {
	        key: "handleOver",
	        value: function handleOver() {
	            this.over = true;
	            this.loadTexture(this.game.sounds.allowMusic ? "btn_sound_on_wht" : "btn_sound_off_wht");
	        }
	    }, {
	        key: "handleUp",
	        value: function handleUp() {
	            this.over = false;
	            this.loadTexture(this.game.sounds.allowMusic ? "btn_sound_on" : "btn_sound_off");
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.events.onInputOver.remove(this.handleOver, this);
	            this.events.onInputOut.remove(this.handleUp, this);
	            this.events.onInputDown.remove(this.handleOver, this);
	            this.events.onInputUp.remove(this.handleInput, this);
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "clock_pickup"));
	
	    _this.anchor.set(0.5);
	    return _this;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "reset",
	    value: function reset() {
	      this.y = 5000;
	      this.alive = true;
	      this.scale.set(1);
	    }
	  }, {
	    key: "pickupTween",
	    value: function pickupTween() {
	      this.scale.set(1);
	      this.tweenUp = this.game.add.tween(this).to({ x: this.x, y: this.game.height * 0.25 }, 400, "Quart.easeOut", false, 0);
	      this.tweenScaleUp = this.game.add.tween(this.scale).to({ x: 1.75, y: 1.75 }, 250, "Quart.easeOut", false, 0);
	      this.tweenScaleDown = this.game.add.tween(this.scale).to({ x: 0, y: 0 }, 150, "Quart.easeOut", false, 100);
	
	      this.tweenUp.chain(this.tweenScaleUp);
	      this.tweenScaleUp.chain(this.tweenScaleDown);
	      this.tweenScaleDown.onComplete.addOnce(this.reset, this);
	
	      this.tweenUp.start();
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _BtnPlay = __webpack_require__(130);
	
	var _BtnPlay2 = _interopRequireDefault(_BtnPlay);
	
	var _BtnSoundToggle = __webpack_require__(127);
	
	var _BtnSoundToggle2 = _interopRequireDefault(_BtnSoundToggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$State) {
	    (0, _inherits3.default)(_class, _Phaser$State);
	
	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: 'init',
	        value: function init() {}
	    }, {
	        key: 'preload',
	        value: function preload() {}
	    }, {
	        key: 'create',
	        value: function create() {
	            this.game.sounds.playBackgroundMusic("intro_background");
	
	            // attach background image
	            this.background = this.game.add.sprite(this.game.width / 2, this.game.height / 2, "bg_welcome");
	            this.background.anchor.set(0.5);
	
	            // add character image
	            this.character = this.game.add.sprite(0, 0, "char_welcome");
	            this.character.anchor.set(1, 1);
	            this.character.position.set(this.game.width, this.game.height);
	
	            // add ben 10 logo
	            this.logo = this.game.add.sprite(this.game.width * 0.06, this.game.height * 0.22, "logo_ben10");
	
	            // add character and game name
	            this.characterName = this.game.add.text(this.game.width * 0.2, this.game.height * 0.22, this.game.copy.getCopy(this.game.data.copy_ref.character_id), this.game.data.styles.welcome_character_name);
	            this.characterName.setTextBounds(0, 0, this.game.width * 0.78, 90);
	            this.characterName.padding.set(20);
	
	            this.gameName = this.game.add.text(this.game.width * 0.2, this.game.height * 0.25, this.game.copy.getCopy(this.game.data.copy_ref.game_id), this.game.data.styles.welcome_game_name);
	            this.gameName.setTextBounds(0, 0, this.game.width * 0.78, 220);
	            this.gameName.padding.set(20);
	
	            // add play button
	            this.btnPlay = new _BtnPlay2.default(this.game);
	            this.btnPlay.angle = -3;
	            this.btnPlay.events.onInputUp.add(this.handlePlayButton, this);
	            this.btnPlay.position.set(this.game.width * 0.07, this.game.height * 0.71);
	            this.game.add.existing(this.btnPlay);
	
	            // add sound button relative to play button
	            this.btnSound = new _BtnSoundToggle2.default(this.game);
	            this.btnSound.position.set(this.btnPlay.x + this.btnPlay.width, this.btnPlay.y - this.btnPlay.height * 0.15);
	            this.game.add.existing(this.btnSound);
	
	            this.game.handleResize();
	        }
	    }, {
	        key: 'handlePlayButton',
	        value: function handlePlayButton() {
	            this.game.requestFullscreen(document.body);
	            this.btnPlay.events.onInputUp.remove(this.handlePlayButton, this);
	            this.game.state.start("Game", true, false);
	            this.game.sounds.playSoundEffect("button", false, 1);
	            this.game.sounds.stopSound("intro_background");
	            this.game.track("PLAY");
	        }
	    }, {
	        key: 'shutdown',
	        value: function shutdown() {
	            this.background.destroy(true);
	            this.character.destroy(true);
	            this.logo.destroy(true);
	            this.characterName.destroy(true);
	            this.gameName.destroy(true);
	            this.btnPlay.destroy(true);
	            this.btnSound.destroy(true);
	
	            this.background = null;
	            this.character = null;
	            this.logo = null;
	            this.characterName = null;
	            this.gameName = null;
	            this.btnPlay = null;
	            this.btnSound = null;
	        }
	    }]);
	    return _class;
	}(Phaser.State);
	
	exports.default = _class;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	    function _class(game, x, y) {
	        (0, _classCallCheck3.default)(this, _class);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "btn_play"));
	
	        _this.game = game;
	        _this.label = _this.game.make.text(225, 75, _this.game.copy.getCopy("game_play"), _this.game.data.styles.btn_play);
	        _this.label.setTextBounds(0, 0, 300, 104);
	        _this.label.padding.set(10);
	        _this.addChild(_this.label);
	
	        _this.inputEnabled = true;
	        _this.input.useHandCursor = true;
	
	        _this.events.onInputOver.add(_this.handleOver, _this);
	        _this.events.onInputOut.add(_this.handleUp, _this);
	        _this.events.onInputDown.add(_this.handleOver, _this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: "handleOver",
	        value: function handleOver() {
	            this.loadTexture("btn_play_wht");
	        }
	    }, {
	        key: "handleUp",
	        value: function handleUp() {
	            this.loadTexture("btn_play");
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.events.onInputOver.remove(this.handleOver, this);
	            this.events.onInputOut.remove(this.handleUp, this);
	            this.events.onInputDown.remove(this.handleOver, this);
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _BtnReplay = __webpack_require__(132);
	
	var _BtnReplay2 = _interopRequireDefault(_BtnReplay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$State) {
	    (0, _inherits3.default)(_class, _Phaser$State);
	
	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: 'init',
	        value: function init(score) {
	            this.score = Math.round(score);
	        }
	    }, {
	        key: 'preload',
	        value: function preload() {
	            if (window.game_config.promote_games.show) {
	                // grab 2 games to promote
	                var shuffledGames = this.shuffle(window.game_config.promote_games.options);
	                this.promotedGames = [shuffledGames[0], shuffledGames[1]];
	                this.game.load.image('promo_a', 'assets/ui/' + shuffledGames[0].thumb, true);
	                this.game.load.image('promo_b', 'assets/ui/' + shuffledGames[1].thumb, true);
	            }
	        }
	    }, {
	        key: 'shuffle',
	        value: function shuffle(array) {
	            var currentIndex = array.length,
	                temporaryValue,
	                randomIndex;
	            // While there remain elements to shuffle...
	            while (0 !== currentIndex) {
	
	                // Pick a remaining element...
	                randomIndex = Math.floor(Math.random() * currentIndex);
	                currentIndex -= 1;
	
	                // And swap it with the current element.
	                temporaryValue = array[currentIndex];
	                array[currentIndex] = array[randomIndex];
	                array[randomIndex] = temporaryValue;
	            }
	
	            return array;
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            this.game.track("END");
	
	            this.game.sounds.playSoundEffect("end_background", false, 1);
	
	            this.scoreCounter = 0;
	            this.scoreTick = 10;
	
	            // attach background
	            this.background = this.game.add.sprite(0, 0, "bg_gameend");
	
	            if (this.promotedGames && this.promotedGames.length >= 2) {
	                this.renderPromotedGames();
	            } else {
	                this.renderDefault();
	            }
	
	            this.checkHighscore();
	            this.incrementScore();
	        }
	    }, {
	        key: 'renderDefault',
	        value: function renderDefault() {
	            // add end icon
	            this.endIcon = this.game.add.sprite(this.game.width / 2, this.game.height * 0.18, "icon_timeup");
	            this.endIcon.anchor.set(0.5, 0);
	
	            // add score panel
	            this.scorePanel = this.game.add.sprite(this.game.width * 0.2, this.endIcon.y + this.endIcon.height + 20, "gameend_panel_score");
	            this.scoreValue = this.game.add.text(0, 0, 0, this.game.data.styles.end_game_score);
	            this.scoreValue.padding.set(20);
	            this.scoreValue.setTextBounds(0, 0, this.scorePanel.width, this.scorePanel.height);
	            this.scorePanel.addChild(this.scoreValue);
	
	            // add highscore message
	            this.bestValue = this.game.add.text(this.game.width / 2, this.scorePanel.y + this.scorePanel.height + 100, this.score, this.game.data.styles.end_game_best);
	            this.bestValue.visible = false;
	            this.bestValue.anchor.set(0, 0.5);
	            this.bestValue.padding.set(20);
	
	            this.highscoreIcon = this.game.add.sprite(0, 0, "icon_highscore");
	            this.highscoreIcon.visible = false;
	            this.highscoreIcon.anchor.set(1, 0.5);
	
	            var offset = (this.highscoreIcon.width + this.bestValue.width + 40) / 2;
	            this.highscoreIcon.position.set(this.bestValue.x - offset, this.bestValue.y);
	
	            // add replay button
	            this.btnReplay = new _BtnReplay2.default(this.game);
	            this.btnReplay.anchor.set(0.5, 0);
	            this.btnReplay.position.set(this.game.width / 2, this.highscoreIcon.y + this.highscoreIcon.height);
	            this.btnReplay.events.onInputUp.add(this.handlePlayButton, this);
	            this.game.add.existing(this.btnReplay);
	        }
	    }, {
	        key: 'renderPromotedGames',
	        value: function renderPromotedGames() {
	            // add score panel
	            this.scorePanel = this.game.add.sprite(this.game.width * 0.2, this.game.height * 0.21, "gameend_panel_score");
	            this.scoreValue = this.game.add.text(0, 0, 0, this.game.data.styles.end_game_score);
	            this.scoreValue.padding.set(20);
	            this.scoreValue.setTextBounds(0, 0, this.scorePanel.width, this.scorePanel.height);
	            this.scorePanel.addChild(this.scoreValue);
	
	            // add highscore message
	            this.bestValue = this.game.add.text(this.game.width / 2, this.scorePanel.y + this.scorePanel.height + 100, this.score, this.game.data.styles.end_game_best);
	            this.bestValue.visible = false;
	            this.bestValue.anchor.set(0, 0.5);
	            this.bestValue.padding.set(20);
	
	            this.highscoreIcon = this.game.add.sprite(0, 0, "icon_highscore");
	            this.highscoreIcon.visible = false;
	            this.highscoreIcon.anchor.set(1, 0.5);
	
	            var offset = (this.highscoreIcon.width + this.bestValue.width + 40) / 2;
	            this.highscoreIcon.position.set(this.bestValue.x - offset, this.bestValue.y);
	
	            // add replay button
	            this.btnReplay = new _BtnReplay2.default(this.game);
	            this.btnReplay.anchor.set(0.5, 0);
	            this.btnReplay.position.set(this.game.width / 2, this.highscoreIcon.y + this.highscoreIcon.height);
	            this.btnReplay.events.onInputUp.add(this.handlePlayButton, this);
	            this.game.add.existing(this.btnReplay);
	
	            // create promo panel backing
	            this.promoPanel = this.game.add.graphics();
	            this.promoPanel.beginFill(0xFFFFFF);
	            this.promoPanel.moveTo(0, this.game.height * 0.65);
	            this.promoPanel.lineTo(this.game.width, this.game.height * 0.62);
	            this.promoPanel.lineTo(this.game.width, this.game.height * 0.8);
	            this.promoPanel.lineTo(0, this.game.height * 0.84);
	
	            // create promo panel copy
	            this.promoCopy = this.game.add.text(0, this.game.height * 0.65, this.game.copy.getCopy("game_recommend"), this.game.data.styles.end_game_recommend);
	            this.promoCopy.angle = -3;
	            this.promoCopy.setTextBounds(0, 0, this.game.width, 100);
	
	            // create promo buttons and attach input listeners
	            this.promoA = this.game.add.sprite(this.game.width * 0.02, this.game.height * 0.68, "promo_a");
	            this.promoA.inputEnabled = true;
	            this.promoA.input.useHandCursor = true;
	            this.promoA.events.onInputDown.add(this.handleSelectPromoA, this);
	
	            this.promoB = this.game.add.sprite(this.game.width * 0.52, this.game.height * 0.66, "promo_b");
	            this.promoB.inputEnabled = true;
	            this.promoB.input.useHandCursor = true;
	            this.promoB.events.onInputDown.add(this.handleSelectPromoB, this);
	        }
	    }, {
	        key: 'handleSelectPromoA',
	        value: function handleSelectPromoA() {
	            this.game.track("SELECT_PROMOTED_GAME");
	            window.open(this.promotedGames[0].url, "_self");
	        }
	    }, {
	        key: 'handleSelectPromoB',
	        value: function handleSelectPromoB() {
	            this.game.track("SELECT_PROMOTED_GAME");
	            window.open(this.promotedGames[1].url, "_self");
	        }
	    }, {
	        key: 'checkHighscore',
	        value: function checkHighscore() {
	            var best = this.getCookie(this.game.data.save_ref);
	            if (best && best > this.score) {
	                this.bestValue.text = best;
	            } else {
	                document.cookie = this.game.data.save_ref + "=" + this.score;
	            }
	        }
	    }, {
	        key: 'getCookie',
	        value: function getCookie(cname) {
	            var name = cname + "=";
	            var ca = document.cookie.split(';');
	            for (var i = 0; i < ca.length; i++) {
	                var c = ca[i];
	                while (c.charAt(0) == ' ') {
	                    c = c.substring(1);
	                }
	                if (c.indexOf(name) == 0) {
	                    return c.substring(name.length, c.length);
	                }
	            }
	            return "";
	        }
	    }, {
	        key: 'incrementScore',
	        value: function incrementScore() {
	            if (this.scoreCounter < this.score) {
	                this.game.sounds.playSoundEffect("end_score", false, 0.3);
	                this.scoreCounter += this.game.data.end_score_increment_value;
	                this.scoreValue.text = this.scoreCounter;
	                this.game.time.events.add(this.game.data.end_score_increment_delay, this.incrementScore, this).autoDestroy = true;
	            } else {
	                this.scoreValue.text = this.score;
	                this.highscoreIcon.visible = true;
	                this.bestValue.visible = true;
	            }
	        }
	    }, {
	        key: 'handleGameSizeChange',
	        value: function handleGameSizeChange() {
	            var targetScale = Math.max(this.game.canvas.width / 1080, this.game.canvas.height / 1920);
	            this.background.scale.set(targetScale);
	
	            this.background.position.set(this.game.canvas.width / 2, this.game.canvas.height / 2);
	            this.contentContainer.position.set(0, this.game.height / 2);
	        }
	    }, {
	        key: 'handlePlayButton',
	        value: function handlePlayButton() {
	            this.game.track("REPLAY");
	            this.btnReplay.events.onInputDown.remove(this.handlePlayButton, this);
	            this.game.sounds.playSoundEffect("button", false, 1);
	            this.game.state.start("Game", true, false);
	        }
	    }, {
	        key: 'shutdown',
	        value: function shutdown() {
	            this.btnReplay.events.onInputUp.remove(this.handlePlayButton, this);
	            this.game.scale.onSizeChange.remove(this.handleGameSizeChange, this);
	        }
	    }]);
	    return _class;
	}(Phaser.State);
	
	exports.default = _class;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);
	
	  function _class(game, x, y) {
	    (0, _classCallCheck3.default)(this, _class);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "btn_replay"));
	
	    _this.game = game;
	    _this.inputEnabled = true;
	    _this.input.useHandCursor = true;
	    _this.events.onInputOver.add(_this.handleOver, _this);
	    _this.events.onInputOut.add(_this.handleUp, _this);
	    _this.events.onInputDown.add(_this.handleOver, _this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "handleOver",
	    value: function handleOver() {
	      this.loadTexture("btn_replay_wht");
	    }
	  }, {
	    key: "handleUp",
	    value: function handleUp() {
	      this.loadTexture("btn_replay");
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.events.onInputOver.remove(this.handleOver, this);
	      this.events.onInputOut.remove(this.handleUp, this);
	      this.events.onInputDown.remove(this.handleOver, this);
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);
	
	exports.default = _class;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperties = __webpack_require__(134);
	
	var _defineProperties2 = _interopRequireDefault(_defineProperties);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*!
	* screenfull
	* v3.0.0 - 2015-11-24
	* (c) Sindre Sorhus; MIT License
	*/
	!function () {
	  "use strict";
	  var a = "undefined" != typeof module && module.exports,
	      b = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
	      c = function () {
	    for (var a, b, c = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], d = 0, e = c.length, f = {}; e > d; d++) {
	      if (a = c[d], a && a[1] in document) {
	        for (d = 0, b = a.length; b > d; d++) {
	          f[c[0][d]] = a[d];
	        }return f;
	      }
	    }return !1;
	  }(),
	      d = { request: function request(a) {
	      var d = c.requestFullscreen;a = a || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[d]() : a[d](b && Element.ALLOW_KEYBOARD_INPUT);
	    }, exit: function exit() {
	      document[c.exitFullscreen]();
	    }, toggle: function toggle(a) {
	      this.isFullscreen ? this.exit() : this.request(a);
	    }, raw: c };return c ? ((0, _defineProperties2.default)(d, { isFullscreen: { get: function get() {
	        return Boolean(document[c.fullscreenElement]);
	      } }, element: { enumerable: !0, get: function get() {
	        return document[c.fullscreenElement];
	      } }, enabled: { enumerable: !0, get: function get() {
	        return Boolean(document[c.fullscreenEnabled]);
	      } } }), void (a ? module.exports = d : window.screenfull = d)) : void (a ? module.exports = !1 : window.screenfull = !1);
	}();

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(136);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperties(T, D){
	  return $Object.defineProperties(T, D);
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', {defineProperties: __webpack_require__(46)});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map