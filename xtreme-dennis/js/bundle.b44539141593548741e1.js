webpackJsonp([0],[
/* 0 */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! babel-polyfill */1);
	module.exports = __webpack_require__(/*! E:\work\projects\dennis\build\svn\EXTREMEDEN\trunk\dev\src/index.js */297);


/***/ }),
/* 1 */
/*!***************************************!*\
  !*** ./~/babel-polyfill/lib/index.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(/*! core-js/shim */ 2);
	
	__webpack_require__(/*! regenerator-runtime/runtime */ 293);
	
	__webpack_require__(/*! core-js/fn/regexp/escape */ 294);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/*!***************************!*\
  !*** ./~/core-js/shim.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./modules/es6.symbol */ 3);
	__webpack_require__(/*! ./modules/es6.object.create */ 52);
	__webpack_require__(/*! ./modules/es6.object.define-property */ 53);
	__webpack_require__(/*! ./modules/es6.object.define-properties */ 54);
	__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ 55);
	__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ 57);
	__webpack_require__(/*! ./modules/es6.object.keys */ 60);
	__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ 61);
	__webpack_require__(/*! ./modules/es6.object.freeze */ 62);
	__webpack_require__(/*! ./modules/es6.object.seal */ 63);
	__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ 64);
	__webpack_require__(/*! ./modules/es6.object.is-frozen */ 65);
	__webpack_require__(/*! ./modules/es6.object.is-sealed */ 66);
	__webpack_require__(/*! ./modules/es6.object.is-extensible */ 67);
	__webpack_require__(/*! ./modules/es6.object.assign */ 68);
	__webpack_require__(/*! ./modules/es6.object.is */ 70);
	__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ 72);
	__webpack_require__(/*! ./modules/es6.object.to-string */ 74);
	__webpack_require__(/*! ./modules/es6.function.bind */ 76);
	__webpack_require__(/*! ./modules/es6.function.name */ 79);
	__webpack_require__(/*! ./modules/es6.function.has-instance */ 80);
	__webpack_require__(/*! ./modules/es6.parse-int */ 81);
	__webpack_require__(/*! ./modules/es6.parse-float */ 85);
	__webpack_require__(/*! ./modules/es6.number.constructor */ 87);
	__webpack_require__(/*! ./modules/es6.number.to-fixed */ 89);
	__webpack_require__(/*! ./modules/es6.number.to-precision */ 92);
	__webpack_require__(/*! ./modules/es6.number.epsilon */ 93);
	__webpack_require__(/*! ./modules/es6.number.is-finite */ 94);
	__webpack_require__(/*! ./modules/es6.number.is-integer */ 95);
	__webpack_require__(/*! ./modules/es6.number.is-nan */ 97);
	__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ 98);
	__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ 99);
	__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ 100);
	__webpack_require__(/*! ./modules/es6.number.parse-float */ 101);
	__webpack_require__(/*! ./modules/es6.number.parse-int */ 102);
	__webpack_require__(/*! ./modules/es6.math.acosh */ 103);
	__webpack_require__(/*! ./modules/es6.math.asinh */ 105);
	__webpack_require__(/*! ./modules/es6.math.atanh */ 106);
	__webpack_require__(/*! ./modules/es6.math.cbrt */ 107);
	__webpack_require__(/*! ./modules/es6.math.clz32 */ 109);
	__webpack_require__(/*! ./modules/es6.math.cosh */ 110);
	__webpack_require__(/*! ./modules/es6.math.expm1 */ 111);
	__webpack_require__(/*! ./modules/es6.math.fround */ 113);
	__webpack_require__(/*! ./modules/es6.math.hypot */ 114);
	__webpack_require__(/*! ./modules/es6.math.imul */ 115);
	__webpack_require__(/*! ./modules/es6.math.log10 */ 116);
	__webpack_require__(/*! ./modules/es6.math.log1p */ 117);
	__webpack_require__(/*! ./modules/es6.math.log2 */ 118);
	__webpack_require__(/*! ./modules/es6.math.sign */ 119);
	__webpack_require__(/*! ./modules/es6.math.sinh */ 120);
	__webpack_require__(/*! ./modules/es6.math.tanh */ 121);
	__webpack_require__(/*! ./modules/es6.math.trunc */ 122);
	__webpack_require__(/*! ./modules/es6.string.from-code-point */ 123);
	__webpack_require__(/*! ./modules/es6.string.raw */ 124);
	__webpack_require__(/*! ./modules/es6.string.trim */ 125);
	__webpack_require__(/*! ./modules/es6.string.iterator */ 126);
	__webpack_require__(/*! ./modules/es6.string.code-point-at */ 131);
	__webpack_require__(/*! ./modules/es6.string.ends-with */ 132);
	__webpack_require__(/*! ./modules/es6.string.includes */ 136);
	__webpack_require__(/*! ./modules/es6.string.repeat */ 137);
	__webpack_require__(/*! ./modules/es6.string.starts-with */ 138);
	__webpack_require__(/*! ./modules/es6.string.anchor */ 139);
	__webpack_require__(/*! ./modules/es6.string.big */ 141);
	__webpack_require__(/*! ./modules/es6.string.blink */ 142);
	__webpack_require__(/*! ./modules/es6.string.bold */ 143);
	__webpack_require__(/*! ./modules/es6.string.fixed */ 144);
	__webpack_require__(/*! ./modules/es6.string.fontcolor */ 145);
	__webpack_require__(/*! ./modules/es6.string.fontsize */ 146);
	__webpack_require__(/*! ./modules/es6.string.italics */ 147);
	__webpack_require__(/*! ./modules/es6.string.link */ 148);
	__webpack_require__(/*! ./modules/es6.string.small */ 149);
	__webpack_require__(/*! ./modules/es6.string.strike */ 150);
	__webpack_require__(/*! ./modules/es6.string.sub */ 151);
	__webpack_require__(/*! ./modules/es6.string.sup */ 152);
	__webpack_require__(/*! ./modules/es6.date.now */ 153);
	__webpack_require__(/*! ./modules/es6.date.to-json */ 154);
	__webpack_require__(/*! ./modules/es6.date.to-iso-string */ 155);
	__webpack_require__(/*! ./modules/es6.date.to-string */ 156);
	__webpack_require__(/*! ./modules/es6.date.to-primitive */ 157);
	__webpack_require__(/*! ./modules/es6.array.is-array */ 159);
	__webpack_require__(/*! ./modules/es6.array.from */ 160);
	__webpack_require__(/*! ./modules/es6.array.of */ 166);
	__webpack_require__(/*! ./modules/es6.array.join */ 167);
	__webpack_require__(/*! ./modules/es6.array.slice */ 169);
	__webpack_require__(/*! ./modules/es6.array.sort */ 170);
	__webpack_require__(/*! ./modules/es6.array.for-each */ 171);
	__webpack_require__(/*! ./modules/es6.array.map */ 175);
	__webpack_require__(/*! ./modules/es6.array.filter */ 176);
	__webpack_require__(/*! ./modules/es6.array.some */ 177);
	__webpack_require__(/*! ./modules/es6.array.every */ 178);
	__webpack_require__(/*! ./modules/es6.array.reduce */ 179);
	__webpack_require__(/*! ./modules/es6.array.reduce-right */ 181);
	__webpack_require__(/*! ./modules/es6.array.index-of */ 182);
	__webpack_require__(/*! ./modules/es6.array.last-index-of */ 183);
	__webpack_require__(/*! ./modules/es6.array.copy-within */ 184);
	__webpack_require__(/*! ./modules/es6.array.fill */ 187);
	__webpack_require__(/*! ./modules/es6.array.find */ 189);
	__webpack_require__(/*! ./modules/es6.array.find-index */ 190);
	__webpack_require__(/*! ./modules/es6.array.species */ 191);
	__webpack_require__(/*! ./modules/es6.array.iterator */ 193);
	__webpack_require__(/*! ./modules/es6.regexp.constructor */ 195);
	__webpack_require__(/*! ./modules/es6.regexp.to-string */ 197);
	__webpack_require__(/*! ./modules/es6.regexp.flags */ 198);
	__webpack_require__(/*! ./modules/es6.regexp.match */ 199);
	__webpack_require__(/*! ./modules/es6.regexp.replace */ 201);
	__webpack_require__(/*! ./modules/es6.regexp.search */ 202);
	__webpack_require__(/*! ./modules/es6.regexp.split */ 203);
	__webpack_require__(/*! ./modules/es6.promise */ 204);
	__webpack_require__(/*! ./modules/es6.map */ 211);
	__webpack_require__(/*! ./modules/es6.set */ 214);
	__webpack_require__(/*! ./modules/es6.weak-map */ 215);
	__webpack_require__(/*! ./modules/es6.weak-set */ 217);
	__webpack_require__(/*! ./modules/es6.typed.array-buffer */ 218);
	__webpack_require__(/*! ./modules/es6.typed.data-view */ 221);
	__webpack_require__(/*! ./modules/es6.typed.int8-array */ 222);
	__webpack_require__(/*! ./modules/es6.typed.uint8-array */ 224);
	__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ 225);
	__webpack_require__(/*! ./modules/es6.typed.int16-array */ 226);
	__webpack_require__(/*! ./modules/es6.typed.uint16-array */ 227);
	__webpack_require__(/*! ./modules/es6.typed.int32-array */ 228);
	__webpack_require__(/*! ./modules/es6.typed.uint32-array */ 229);
	__webpack_require__(/*! ./modules/es6.typed.float32-array */ 230);
	__webpack_require__(/*! ./modules/es6.typed.float64-array */ 231);
	__webpack_require__(/*! ./modules/es6.reflect.apply */ 232);
	__webpack_require__(/*! ./modules/es6.reflect.construct */ 233);
	__webpack_require__(/*! ./modules/es6.reflect.define-property */ 234);
	__webpack_require__(/*! ./modules/es6.reflect.delete-property */ 235);
	__webpack_require__(/*! ./modules/es6.reflect.enumerate */ 236);
	__webpack_require__(/*! ./modules/es6.reflect.get */ 237);
	__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ 238);
	__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ 239);
	__webpack_require__(/*! ./modules/es6.reflect.has */ 240);
	__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ 241);
	__webpack_require__(/*! ./modules/es6.reflect.own-keys */ 242);
	__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ 244);
	__webpack_require__(/*! ./modules/es6.reflect.set */ 245);
	__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ 246);
	__webpack_require__(/*! ./modules/es7.array.includes */ 247);
	__webpack_require__(/*! ./modules/es7.string.at */ 248);
	__webpack_require__(/*! ./modules/es7.string.pad-start */ 249);
	__webpack_require__(/*! ./modules/es7.string.pad-end */ 251);
	__webpack_require__(/*! ./modules/es7.string.trim-left */ 252);
	__webpack_require__(/*! ./modules/es7.string.trim-right */ 253);
	__webpack_require__(/*! ./modules/es7.string.match-all */ 254);
	__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ 255);
	__webpack_require__(/*! ./modules/es7.symbol.observable */ 256);
	__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ 257);
	__webpack_require__(/*! ./modules/es7.object.values */ 258);
	__webpack_require__(/*! ./modules/es7.object.entries */ 260);
	__webpack_require__(/*! ./modules/es7.object.define-getter */ 261);
	__webpack_require__(/*! ./modules/es7.object.define-setter */ 263);
	__webpack_require__(/*! ./modules/es7.object.lookup-getter */ 264);
	__webpack_require__(/*! ./modules/es7.object.lookup-setter */ 265);
	__webpack_require__(/*! ./modules/es7.map.to-json */ 266);
	__webpack_require__(/*! ./modules/es7.set.to-json */ 269);
	__webpack_require__(/*! ./modules/es7.system.global */ 270);
	__webpack_require__(/*! ./modules/es7.error.is-error */ 271);
	__webpack_require__(/*! ./modules/es7.math.iaddh */ 272);
	__webpack_require__(/*! ./modules/es7.math.isubh */ 273);
	__webpack_require__(/*! ./modules/es7.math.imulh */ 274);
	__webpack_require__(/*! ./modules/es7.math.umulh */ 275);
	__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ 276);
	__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ 278);
	__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ 279);
	__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ 280);
	__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ 281);
	__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ 282);
	__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ 283);
	__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ 284);
	__webpack_require__(/*! ./modules/es7.reflect.metadata */ 285);
	__webpack_require__(/*! ./modules/es7.asap */ 286);
	__webpack_require__(/*! ./modules/es7.observable */ 287);
	__webpack_require__(/*! ./modules/web.timers */ 288);
	__webpack_require__(/*! ./modules/web.immediate */ 291);
	__webpack_require__(/*! ./modules/web.dom.iterable */ 292);
	module.exports = __webpack_require__(/*! ./modules/_core */ 9);

/***/ }),
/* 3 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/es6.symbol.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(/*! ./_global */ 4)
	  , has            = __webpack_require__(/*! ./_has */ 5)
	  , DESCRIPTORS    = __webpack_require__(/*! ./_descriptors */ 6)
	  , $export        = __webpack_require__(/*! ./_export */ 8)
	  , redefine       = __webpack_require__(/*! ./_redefine */ 18)
	  , META           = __webpack_require__(/*! ./_meta */ 22).KEY
	  , $fails         = __webpack_require__(/*! ./_fails */ 7)
	  , shared         = __webpack_require__(/*! ./_shared */ 23)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 24)
	  , uid            = __webpack_require__(/*! ./_uid */ 19)
	  , wks            = __webpack_require__(/*! ./_wks */ 25)
	  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 26)
	  , wksDefine      = __webpack_require__(/*! ./_wks-define */ 27)
	  , keyOf          = __webpack_require__(/*! ./_keyof */ 29)
	  , enumKeys       = __webpack_require__(/*! ./_enum-keys */ 42)
	  , isArray        = __webpack_require__(/*! ./_is-array */ 45)
	  , anObject       = __webpack_require__(/*! ./_an-object */ 12)
	  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 32)
	  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 16)
	  , createDesc     = __webpack_require__(/*! ./_property-desc */ 17)
	  , _create        = __webpack_require__(/*! ./_object-create */ 46)
	  , gOPNExt        = __webpack_require__(/*! ./_object-gopn-ext */ 49)
	  , $GOPD          = __webpack_require__(/*! ./_object-gopd */ 51)
	  , $DP            = __webpack_require__(/*! ./_object-dp */ 11)
	  , $keys          = __webpack_require__(/*! ./_object-keys */ 30)
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
	  __webpack_require__(/*! ./_object-gopn */ 50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(/*! ./_object-pie */ 44).f  = $propertyIsEnumerable;
	  __webpack_require__(/*! ./_object-gops */ 43).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(/*! ./_library */ 28)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 4 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_global.js ***!
  \**************************************/
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_has.js ***!
  \***********************************/
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 6 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_descriptors.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./_fails */ 7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 7 */
/*!*************************************!*\
  !*** ./~/core-js/modules/_fails.js ***!
  \*************************************/
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 8 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_export.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 4)
	  , core      = __webpack_require__(/*! ./_core */ 9)
	  , hide      = __webpack_require__(/*! ./_hide */ 10)
	  , redefine  = __webpack_require__(/*! ./_redefine */ 18)
	  , ctx       = __webpack_require__(/*! ./_ctx */ 20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
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

/***/ }),
/* 9 */
/*!************************************!*\
  !*** ./~/core-js/modules/_core.js ***!
  \************************************/
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/*!************************************!*\
  !*** ./~/core-js/modules/_hide.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(/*! ./_object-dp */ 11)
	  , createDesc = __webpack_require__(/*! ./_property-desc */ 17);
	module.exports = __webpack_require__(/*! ./_descriptors */ 6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 11 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_object-dp.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(/*! ./_an-object */ 12)
	  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 14)
	  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 16)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ }),
/* 12 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_an-object.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 13 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_is-object.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 14 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_ie8-dom-define.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(/*! ./_descriptors */ 6) && !__webpack_require__(/*! ./_fails */ 7)(function(){
	  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 15 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_dom-create.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , document = __webpack_require__(/*! ./_global */ 4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 16 */
/*!********************************************!*\
  !*** ./~/core-js/modules/_to-primitive.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
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

/***/ }),
/* 17 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_property-desc.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 18 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_redefine.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 4)
	  , hide      = __webpack_require__(/*! ./_hide */ 10)
	  , has       = __webpack_require__(/*! ./_has */ 5)
	  , SRC       = __webpack_require__(/*! ./_uid */ 19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(/*! ./_core */ 9).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ }),
/* 19 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_uid.js ***!
  \***********************************/
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 20 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_ctx.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./_a-function */ 21);
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

/***/ }),
/* 21 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_a-function.js ***!
  \******************************************/
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 22 */
/*!************************************!*\
  !*** ./~/core-js/modules/_meta.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(/*! ./_uid */ 19)('meta')
	  , isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , has      = __webpack_require__(/*! ./_has */ 5)
	  , setDesc  = __webpack_require__(/*! ./_object-dp */ 11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(/*! ./_fails */ 7)(function(){
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

/***/ }),
/* 23 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_shared.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./_global */ 4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 24 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_set-to-string-tag.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./_object-dp */ 11).f
	  , has = __webpack_require__(/*! ./_has */ 5)
	  , TAG = __webpack_require__(/*! ./_wks */ 25)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 25 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_wks.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(/*! ./_shared */ 23)('wks')
	  , uid        = __webpack_require__(/*! ./_uid */ 19)
	  , Symbol     = __webpack_require__(/*! ./_global */ 4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ }),
/* 26 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_wks-ext.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(/*! ./_wks */ 25);

/***/ }),
/* 27 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_wks-define.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(/*! ./_global */ 4)
	  , core           = __webpack_require__(/*! ./_core */ 9)
	  , LIBRARY        = __webpack_require__(/*! ./_library */ 28)
	  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 26)
	  , defineProperty = __webpack_require__(/*! ./_object-dp */ 11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 28 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_library.js ***!
  \***************************************/
/***/ (function(module, exports) {

	module.exports = false;

/***/ }),
/* 29 */
/*!*************************************!*\
  !*** ./~/core-js/modules/_keyof.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(/*! ./_object-keys */ 30)
	  , toIObject = __webpack_require__(/*! ./_to-iobject */ 32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 30 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-keys.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(/*! ./_object-keys-internal */ 31)
	  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 41);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 31 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/_object-keys-internal.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(/*! ./_has */ 5)
	  , toIObject    = __webpack_require__(/*! ./_to-iobject */ 32)
	  , arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 36)(false)
	  , IE_PROTO     = __webpack_require__(/*! ./_shared-key */ 40)('IE_PROTO');
	
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

/***/ }),
/* 32 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_to-iobject.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./_iobject */ 33)
	  , defined = __webpack_require__(/*! ./_defined */ 35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 33 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_iobject.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./_cof */ 34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 34 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_cof.js ***!
  \***********************************/
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 35 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_defined.js ***!
  \***************************************/
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 36 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_array-includes.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 32)
	  , toLength  = __webpack_require__(/*! ./_to-length */ 37)
	  , toIndex   = __webpack_require__(/*! ./_to-index */ 39);
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

/***/ }),
/* 37 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_to-length.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./_to-integer */ 38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 38 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_to-integer.js ***!
  \******************************************/
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 39 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_to-index.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 40 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_shared-key.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(/*! ./_shared */ 23)('keys')
	  , uid    = __webpack_require__(/*! ./_uid */ 19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 41 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_enum-bug-keys.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 42 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_enum-keys.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(/*! ./_object-keys */ 30)
	  , gOPS    = __webpack_require__(/*! ./_object-gops */ 43)
	  , pIE     = __webpack_require__(/*! ./_object-pie */ 44);
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

/***/ }),
/* 43 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-gops.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 44 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_object-pie.js ***!
  \******************************************/
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 45 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_is-array.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(/*! ./_cof */ 34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 46 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_object-create.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(/*! ./_an-object */ 12)
	  , dPs         = __webpack_require__(/*! ./_object-dps */ 47)
	  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 41)
	  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(/*! ./_dom-create */ 15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(/*! ./_html */ 48).appendChild(iframe);
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


/***/ }),
/* 47 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_object-dps.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(/*! ./_object-dp */ 11)
	  , anObject = __webpack_require__(/*! ./_an-object */ 12)
	  , getKeys  = __webpack_require__(/*! ./_object-keys */ 30);
	
	module.exports = __webpack_require__(/*! ./_descriptors */ 6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 48 */
/*!************************************!*\
  !*** ./~/core-js/modules/_html.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./_global */ 4).document && document.documentElement;

/***/ }),
/* 49 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_object-gopn-ext.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 32)
	  , gOPN      = __webpack_require__(/*! ./_object-gopn */ 50).f
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


/***/ }),
/* 50 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-gopn.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(/*! ./_object-keys-internal */ 31)
	  , hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 51 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-gopd.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(/*! ./_object-pie */ 44)
	  , createDesc     = __webpack_require__(/*! ./_property-desc */ 17)
	  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 32)
	  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 16)
	  , has            = __webpack_require__(/*! ./_has */ 5)
	  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 14)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 52 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.object.create.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(/*! ./_object-create */ 46)});

/***/ }),
/* 53 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/es6.object.define-property.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 6), 'Object', {defineProperty: __webpack_require__(/*! ./_object-dp */ 11).f});

/***/ }),
/* 54 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es6.object.define-properties.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 6), 'Object', {defineProperties: __webpack_require__(/*! ./_object-dps */ 47)});

/***/ }),
/* 55 */
/*!*********************************************************************!*\
  !*** ./~/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(/*! ./_to-iobject */ 32)
	  , $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 51).f;
	
	__webpack_require__(/*! ./_object-sap */ 56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),
/* 56 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_object-sap.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , core    = __webpack_require__(/*! ./_core */ 9)
	  , fails   = __webpack_require__(/*! ./_fails */ 7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 57 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.object.get-prototype-of.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(/*! ./_to-object */ 58)
	  , $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59);
	
	__webpack_require__(/*! ./_object-sap */ 56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ }),
/* 58 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_to-object.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./_defined */ 35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 59 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_object-gpo.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(/*! ./_has */ 5)
	  , toObject    = __webpack_require__(/*! ./_to-object */ 58)
	  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 40)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 60 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.object.keys.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 58)
	  , $keys    = __webpack_require__(/*! ./_object-keys */ 30);
	
	__webpack_require__(/*! ./_object-sap */ 56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 61 */
/*!****************************************************************!*\
  !*** ./~/core-js/modules/es6.object.get-own-property-names.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(/*! ./_object-sap */ 56)('getOwnPropertyNames', function(){
	  return __webpack_require__(/*! ./_object-gopn-ext */ 49).f;
	});

/***/ }),
/* 62 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.object.freeze.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , meta     = __webpack_require__(/*! ./_meta */ 22).onFreeze;
	
	__webpack_require__(/*! ./_object-sap */ 56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ }),
/* 63 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.object.seal.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , meta     = __webpack_require__(/*! ./_meta */ 22).onFreeze;
	
	__webpack_require__(/*! ./_object-sap */ 56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ }),
/* 64 */
/*!************************************************************!*\
  !*** ./~/core-js/modules/es6.object.prevent-extensions.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , meta     = __webpack_require__(/*! ./_meta */ 22).onFreeze;
	
	__webpack_require__(/*! ./_object-sap */ 56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ }),
/* 65 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.object.is-frozen.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	
	__webpack_require__(/*! ./_object-sap */ 56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ }),
/* 66 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.object.is-sealed.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	
	__webpack_require__(/*! ./_object-sap */ 56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ }),
/* 67 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es6.object.is-extensible.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	
	__webpack_require__(/*! ./_object-sap */ 56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ }),
/* 68 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.object.assign.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(/*! ./_object-assign */ 69)});

/***/ }),
/* 69 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_object-assign.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(/*! ./_object-keys */ 30)
	  , gOPS     = __webpack_require__(/*! ./_object-gops */ 43)
	  , pIE      = __webpack_require__(/*! ./_object-pie */ 44)
	  , toObject = __webpack_require__(/*! ./_to-object */ 58)
	  , IObject  = __webpack_require__(/*! ./_iobject */ 33)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(/*! ./_fails */ 7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 70 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.object.is.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(/*! ./_export */ 8);
	$export($export.S, 'Object', {is: __webpack_require__(/*! ./_same-value */ 71)});

/***/ }),
/* 71 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_same-value.js ***!
  \******************************************/
/***/ (function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ }),
/* 72 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.object.set-prototype-of.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(/*! ./_export */ 8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 73).set});

/***/ }),
/* 73 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_set-proto.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , anObject = __webpack_require__(/*! ./_an-object */ 12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(/*! ./_ctx */ 20)(Function.call, __webpack_require__(/*! ./_object-gopd */ 51).f(Object.prototype, '__proto__').set, 2);
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

/***/ }),
/* 74 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.object.to-string.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(/*! ./_classof */ 75)
	  , test    = {};
	test[__webpack_require__(/*! ./_wks */ 25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(/*! ./_redefine */ 18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ }),
/* 75 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_classof.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./_cof */ 34)
	  , TAG = __webpack_require__(/*! ./_wks */ 25)('toStringTag')
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

/***/ }),
/* 76 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.function.bind.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P, 'Function', {bind: __webpack_require__(/*! ./_bind */ 77)});

/***/ }),
/* 77 */
/*!************************************!*\
  !*** ./~/core-js/modules/_bind.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(/*! ./_a-function */ 21)
	  , isObject   = __webpack_require__(/*! ./_is-object */ 13)
	  , invoke     = __webpack_require__(/*! ./_invoke */ 78)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ }),
/* 78 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_invoke.js ***!
  \**************************************/
/***/ (function(module, exports) {

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

/***/ }),
/* 79 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.function.name.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(/*! ./_object-dp */ 11).f
	  , createDesc = __webpack_require__(/*! ./_property-desc */ 17)
	  , has        = __webpack_require__(/*! ./_has */ 5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(/*! ./_descriptors */ 6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ }),
/* 80 */
/*!********************************************************!*\
  !*** ./~/core-js/modules/es6.function.has-instance.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(/*! ./_is-object */ 13)
	  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59)
	  , HAS_INSTANCE   = __webpack_require__(/*! ./_wks */ 25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(/*! ./_object-dp */ 11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ }),
/* 81 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.parse-int.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , $parseInt = __webpack_require__(/*! ./_parse-int */ 82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ }),
/* 82 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_parse-int.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(/*! ./_global */ 4).parseInt
	  , $trim     = __webpack_require__(/*! ./_string-trim */ 83).trim
	  , ws        = __webpack_require__(/*! ./_string-ws */ 84)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ }),
/* 83 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_string-trim.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 8)
	  , defined = __webpack_require__(/*! ./_defined */ 35)
	  , fails   = __webpack_require__(/*! ./_fails */ 7)
	  , spaces  = __webpack_require__(/*! ./_string-ws */ 84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ }),
/* 84 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_string-ws.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 85 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.parse-float.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(/*! ./_export */ 8)
	  , $parseFloat = __webpack_require__(/*! ./_parse-float */ 86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ }),
/* 86 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_parse-float.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(/*! ./_global */ 4).parseFloat
	  , $trim       = __webpack_require__(/*! ./_string-trim */ 83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ 84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ }),
/* 87 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.number.constructor.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(/*! ./_global */ 4)
	  , has               = __webpack_require__(/*! ./_has */ 5)
	  , cof               = __webpack_require__(/*! ./_cof */ 34)
	  , inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 88)
	  , toPrimitive       = __webpack_require__(/*! ./_to-primitive */ 16)
	  , fails             = __webpack_require__(/*! ./_fails */ 7)
	  , gOPN              = __webpack_require__(/*! ./_object-gopn */ 50).f
	  , gOPD              = __webpack_require__(/*! ./_object-gopd */ 51).f
	  , dP                = __webpack_require__(/*! ./_object-dp */ 11).f
	  , $trim             = __webpack_require__(/*! ./_string-trim */ 83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(/*! ./_object-create */ 46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(/*! ./_descriptors */ 6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(/*! ./_redefine */ 18)(global, NUMBER, $Number);
	}

/***/ }),
/* 88 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/_inherit-if-required.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(/*! ./_is-object */ 13)
	  , setPrototypeOf = __webpack_require__(/*! ./_set-proto */ 73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ }),
/* 89 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.number.to-fixed.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(/*! ./_export */ 8)
	  , toInteger    = __webpack_require__(/*! ./_to-integer */ 38)
	  , aNumberValue = __webpack_require__(/*! ./_a-number-value */ 90)
	  , repeat       = __webpack_require__(/*! ./_string-repeat */ 91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(/*! ./_fails */ 7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ }),
/* 90 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_a-number-value.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(/*! ./_cof */ 34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ }),
/* 91 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_string-repeat.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(/*! ./_to-integer */ 38)
	  , defined   = __webpack_require__(/*! ./_defined */ 35);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ }),
/* 92 */
/*!******************************************************!*\
  !*** ./~/core-js/modules/es6.number.to-precision.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(/*! ./_export */ 8)
	  , $fails       = __webpack_require__(/*! ./_fails */ 7)
	  , aNumberValue = __webpack_require__(/*! ./_a-number-value */ 90)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ }),
/* 93 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.number.epsilon.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ }),
/* 94 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-finite.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , _isFinite = __webpack_require__(/*! ./_global */ 4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ }),
/* 95 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-integer.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(/*! ./_is-integer */ 96)});

/***/ }),
/* 96 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_is-integer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ }),
/* 97 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-nan.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ }),
/* 98 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-safe-integer.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , isInteger = __webpack_require__(/*! ./_is-integer */ 96)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ }),
/* 99 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.number.max-safe-integer.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ }),
/* 100 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.number.min-safe-integer.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ }),
/* 101 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.number.parse-float.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(/*! ./_export */ 8)
	  , $parseFloat = __webpack_require__(/*! ./_parse-float */ 86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ }),
/* 102 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.number.parse-int.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , $parseInt = __webpack_require__(/*! ./_parse-int */ 82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ }),
/* 103 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.acosh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , log1p   = __webpack_require__(/*! ./_math-log1p */ 104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ }),
/* 104 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_math-log1p.js ***!
  \******************************************/
/***/ (function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ }),
/* 105 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.asinh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ }),
/* 106 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.atanh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ }),
/* 107 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.cbrt.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , sign    = __webpack_require__(/*! ./_math-sign */ 108);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ }),
/* 108 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_math-sign.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ }),
/* 109 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.clz32.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ }),
/* 110 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.cosh.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ }),
/* 111 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.expm1.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $expm1  = __webpack_require__(/*! ./_math-expm1 */ 112);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ }),
/* 112 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_math-expm1.js ***!
  \******************************************/
/***/ (function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ }),
/* 113 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.math.fround.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , sign      = __webpack_require__(/*! ./_math-sign */ 108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ }),
/* 114 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.hypot.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ }),
/* 115 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.imul.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ }),
/* 116 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.log10.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ }),
/* 117 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.log1p.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(/*! ./_math-log1p */ 104)});

/***/ }),
/* 118 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.log2.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ }),
/* 119 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.sign.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {sign: __webpack_require__(/*! ./_math-sign */ 108)});

/***/ }),
/* 120 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.sinh.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , expm1   = __webpack_require__(/*! ./_math-expm1 */ 112)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ }),
/* 121 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.tanh.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , expm1   = __webpack_require__(/*! ./_math-expm1 */ 112)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ }),
/* 122 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.trunc.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ }),
/* 123 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/es6.string.from-code-point.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(/*! ./_export */ 8)
	  , toIndex        = __webpack_require__(/*! ./_to-index */ 39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ }),
/* 124 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.string.raw.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , toIObject = __webpack_require__(/*! ./_to-iobject */ 32)
	  , toLength  = __webpack_require__(/*! ./_to-length */ 37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ }),
/* 125 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.string.trim.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(/*! ./_string-trim */ 83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ }),
/* 126 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.string.iterator.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./_string-at */ 127)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./_iter-define */ 128)(String, 'String', function(iterated){
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

/***/ }),
/* 127 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_string-at.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 38)
	  , defined   = __webpack_require__(/*! ./_defined */ 35);
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

/***/ }),
/* 128 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_iter-define.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(/*! ./_library */ 28)
	  , $export        = __webpack_require__(/*! ./_export */ 8)
	  , redefine       = __webpack_require__(/*! ./_redefine */ 18)
	  , hide           = __webpack_require__(/*! ./_hide */ 10)
	  , has            = __webpack_require__(/*! ./_has */ 5)
	  , Iterators      = __webpack_require__(/*! ./_iterators */ 129)
	  , $iterCreate    = __webpack_require__(/*! ./_iter-create */ 130)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 24)
	  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59)
	  , ITERATOR       = __webpack_require__(/*! ./_wks */ 25)('iterator')
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

/***/ }),
/* 129 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_iterators.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 130 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_iter-create.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(/*! ./_object-create */ 46)
	  , descriptor     = __webpack_require__(/*! ./_property-desc */ 17)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 24)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./_hide */ 10)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 25)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 131 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es6.string.code-point-at.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $at     = __webpack_require__(/*! ./_string-at */ 127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ }),
/* 132 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.string.ends-with.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , toLength  = __webpack_require__(/*! ./_to-length */ 37)
	  , context   = __webpack_require__(/*! ./_string-context */ 133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ }),
/* 133 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_string-context.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(/*! ./_is-regexp */ 134)
	  , defined  = __webpack_require__(/*! ./_defined */ 35);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ }),
/* 134 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_is-regexp.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , cof      = __webpack_require__(/*! ./_cof */ 34)
	  , MATCH    = __webpack_require__(/*! ./_wks */ 25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ }),
/* 135 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_fails-is-regexp.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(/*! ./_wks */ 25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ }),
/* 136 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.string.includes.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(/*! ./_export */ 8)
	  , context  = __webpack_require__(/*! ./_string-context */ 133)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ }),
/* 137 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.string.repeat.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(/*! ./_string-repeat */ 91)
	});

/***/ }),
/* 138 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.string.starts-with.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(/*! ./_export */ 8)
	  , toLength    = __webpack_require__(/*! ./_to-length */ 37)
	  , context     = __webpack_require__(/*! ./_string-context */ 133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ }),
/* 139 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.string.anchor.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(/*! ./_string-html */ 140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ }),
/* 140 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_string-html.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 8)
	  , fails   = __webpack_require__(/*! ./_fails */ 7)
	  , defined = __webpack_require__(/*! ./_defined */ 35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ }),
/* 141 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.string.big.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(/*! ./_string-html */ 140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ }),
/* 142 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.string.blink.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(/*! ./_string-html */ 140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ }),
/* 143 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.string.bold.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(/*! ./_string-html */ 140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ }),
/* 144 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.string.fixed.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(/*! ./_string-html */ 140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ }),
/* 145 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.string.fontcolor.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(/*! ./_string-html */ 140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ }),
/* 146 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.string.fontsize.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(/*! ./_string-html */ 140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ }),
/* 147 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.string.italics.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(/*! ./_string-html */ 140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ }),
/* 148 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.string.link.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(/*! ./_string-html */ 140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ }),
/* 149 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.string.small.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(/*! ./_string-html */ 140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ }),
/* 150 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.string.strike.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(/*! ./_string-html */ 140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ }),
/* 151 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.string.sub.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(/*! ./_string-html */ 140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ }),
/* 152 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.string.sup.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(/*! ./_string-html */ 140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ }),
/* 153 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.date.now.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ }),
/* 154 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.date.to-json.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(/*! ./_export */ 8)
	  , toObject    = __webpack_require__(/*! ./_to-object */ 58)
	  , toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16);
	
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ 7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ }),
/* 155 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.date.to-iso-string.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , fails   = __webpack_require__(/*! ./_fails */ 7)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ }),
/* 156 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.date.to-string.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(/*! ./_redefine */ 18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ }),
/* 157 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.date.to-primitive.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ 25)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(/*! ./_hide */ 10)(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ 158));

/***/ }),
/* 158 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_date-to-primitive.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(/*! ./_an-object */ 12)
	  , toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ }),
/* 159 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.array.is-array.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(/*! ./_is-array */ 45)});

/***/ }),
/* 160 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.from.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(/*! ./_ctx */ 20)
	  , $export        = __webpack_require__(/*! ./_export */ 8)
	  , toObject       = __webpack_require__(/*! ./_to-object */ 58)
	  , call           = __webpack_require__(/*! ./_iter-call */ 161)
	  , isArrayIter    = __webpack_require__(/*! ./_is-array-iter */ 162)
	  , toLength       = __webpack_require__(/*! ./_to-length */ 37)
	  , createProperty = __webpack_require__(/*! ./_create-property */ 163)
	  , getIterFn      = __webpack_require__(/*! ./core.get-iterator-method */ 164);
	
	$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ 165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 161 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_iter-call.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./_an-object */ 12);
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

/***/ }),
/* 162 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_is-array-iter.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(/*! ./_iterators */ 129)
	  , ITERATOR   = __webpack_require__(/*! ./_wks */ 25)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 163 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_create-property.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(/*! ./_object-dp */ 11)
	  , createDesc      = __webpack_require__(/*! ./_property-desc */ 17);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ }),
/* 164 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/core.get-iterator-method.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 75)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 25)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 129);
	module.exports = __webpack_require__(/*! ./_core */ 9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 165 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_iter-detect.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(/*! ./_wks */ 25)('iterator')
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

/***/ }),
/* 166 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.array.of.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(/*! ./_export */ 8)
	  , createProperty = __webpack_require__(/*! ./_create-property */ 163);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ }),
/* 167 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.join.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , toIObject = __webpack_require__(/*! ./_to-iobject */ 32)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ 33) != Object || !__webpack_require__(/*! ./_strict-method */ 168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ }),
/* 168 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_strict-method.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(/*! ./_fails */ 7);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ }),
/* 169 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.array.slice.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(/*! ./_export */ 8)
	  , html       = __webpack_require__(/*! ./_html */ 48)
	  , cof        = __webpack_require__(/*! ./_cof */ 34)
	  , toIndex    = __webpack_require__(/*! ./_to-index */ 39)
	  , toLength   = __webpack_require__(/*! ./_to-length */ 37)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ 7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ }),
/* 170 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.sort.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , aFunction = __webpack_require__(/*! ./_a-function */ 21)
	  , toObject  = __webpack_require__(/*! ./_to-object */ 58)
	  , fails     = __webpack_require__(/*! ./_fails */ 7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(/*! ./_strict-method */ 168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ }),
/* 171 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.array.for-each.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(/*! ./_export */ 8)
	  , $forEach = __webpack_require__(/*! ./_array-methods */ 172)(0)
	  , STRICT   = __webpack_require__(/*! ./_strict-method */ 168)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 172 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_array-methods.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(/*! ./_ctx */ 20)
	  , IObject  = __webpack_require__(/*! ./_iobject */ 33)
	  , toObject = __webpack_require__(/*! ./_to-object */ 58)
	  , toLength = __webpack_require__(/*! ./_to-length */ 37)
	  , asc      = __webpack_require__(/*! ./_array-species-create */ 173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ }),
/* 173 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/_array-species-create.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ 174);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ }),
/* 174 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/_array-species-constructor.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , isArray  = __webpack_require__(/*! ./_is-array */ 45)
	  , SPECIES  = __webpack_require__(/*! ./_wks */ 25)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ }),
/* 175 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.array.map.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $map    = __webpack_require__(/*! ./_array-methods */ 172)(1);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 176 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.array.filter.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $filter = __webpack_require__(/*! ./_array-methods */ 172)(2);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 177 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.some.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $some   = __webpack_require__(/*! ./_array-methods */ 172)(3);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 178 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.array.every.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $every  = __webpack_require__(/*! ./_array-methods */ 172)(4);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 179 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.array.reduce.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $reduce = __webpack_require__(/*! ./_array-reduce */ 180);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ }),
/* 180 */
/*!********************************************!*\
  !*** ./~/core-js/modules/_array-reduce.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(/*! ./_a-function */ 21)
	  , toObject  = __webpack_require__(/*! ./_to-object */ 58)
	  , IObject   = __webpack_require__(/*! ./_iobject */ 33)
	  , toLength  = __webpack_require__(/*! ./_to-length */ 37);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ }),
/* 181 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.array.reduce-right.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $reduce = __webpack_require__(/*! ./_array-reduce */ 180);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ }),
/* 182 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.array.index-of.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(/*! ./_export */ 8)
	  , $indexOf      = __webpack_require__(/*! ./_array-includes */ 36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ 168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ }),
/* 183 */
/*!******************************************************!*\
  !*** ./~/core-js/modules/es6.array.last-index-of.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(/*! ./_export */ 8)
	  , toIObject     = __webpack_require__(/*! ./_to-iobject */ 32)
	  , toInteger     = __webpack_require__(/*! ./_to-integer */ 38)
	  , toLength      = __webpack_require__(/*! ./_to-length */ 37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ 168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ }),
/* 184 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.array.copy-within.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(/*! ./_array-copy-within */ 185)});
	
	__webpack_require__(/*! ./_add-to-unscopables */ 186)('copyWithin');

/***/ }),
/* 185 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_array-copy-within.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(/*! ./_to-object */ 58)
	  , toIndex  = __webpack_require__(/*! ./_to-index */ 39)
	  , toLength = __webpack_require__(/*! ./_to-length */ 37);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ }),
/* 186 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/_add-to-unscopables.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(/*! ./_wks */ 25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(/*! ./_hide */ 10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ }),
/* 187 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.fill.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P, 'Array', {fill: __webpack_require__(/*! ./_array-fill */ 188)});
	
	__webpack_require__(/*! ./_add-to-unscopables */ 186)('fill');

/***/ }),
/* 188 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_array-fill.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(/*! ./_to-object */ 58)
	  , toIndex  = __webpack_require__(/*! ./_to-index */ 39)
	  , toLength = __webpack_require__(/*! ./_to-length */ 37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ }),
/* 189 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.find.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $find   = __webpack_require__(/*! ./_array-methods */ 172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(/*! ./_add-to-unscopables */ 186)(KEY);

/***/ }),
/* 190 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.array.find-index.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $find   = __webpack_require__(/*! ./_array-methods */ 172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(/*! ./_add-to-unscopables */ 186)(KEY);

/***/ }),
/* 191 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.array.species.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_set-species */ 192)('Array');

/***/ }),
/* 192 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_set-species.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(/*! ./_global */ 4)
	  , dP          = __webpack_require__(/*! ./_object-dp */ 11)
	  , DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 6)
	  , SPECIES     = __webpack_require__(/*! ./_wks */ 25)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ }),
/* 193 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.array.iterator.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 186)
	  , step             = __webpack_require__(/*! ./_iter-step */ 194)
	  , Iterators        = __webpack_require__(/*! ./_iterators */ 129)
	  , toIObject        = __webpack_require__(/*! ./_to-iobject */ 32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./_iter-define */ 128)(Array, 'Array', function(iterated, kind){
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

/***/ }),
/* 194 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_iter-step.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 195 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.constructor.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(/*! ./_global */ 4)
	  , inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 88)
	  , dP                = __webpack_require__(/*! ./_object-dp */ 11).f
	  , gOPN              = __webpack_require__(/*! ./_object-gopn */ 50).f
	  , isRegExp          = __webpack_require__(/*! ./_is-regexp */ 134)
	  , $flags            = __webpack_require__(/*! ./_flags */ 196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(/*! ./_descriptors */ 6) && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ 7)(function(){
	  re2[__webpack_require__(/*! ./_wks */ 25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(/*! ./_redefine */ 18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(/*! ./_set-species */ 192)('RegExp');

/***/ }),
/* 196 */
/*!*************************************!*\
  !*** ./~/core-js/modules/_flags.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(/*! ./_an-object */ 12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ }),
/* 197 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.to-string.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(/*! ./es6.regexp.flags */ 198);
	var anObject    = __webpack_require__(/*! ./_an-object */ 12)
	  , $flags      = __webpack_require__(/*! ./_flags */ 196)
	  , DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(/*! ./_redefine */ 18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(/*! ./_fails */ 7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ }),
/* 198 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.regexp.flags.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(/*! ./_descriptors */ 6) && /./g.flags != 'g')__webpack_require__(/*! ./_object-dp */ 11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(/*! ./_flags */ 196)
	});

/***/ }),
/* 199 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.regexp.match.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(/*! ./_fix-re-wks */ 200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ }),
/* 200 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_fix-re-wks.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(/*! ./_hide */ 10)
	  , redefine = __webpack_require__(/*! ./_redefine */ 18)
	  , fails    = __webpack_require__(/*! ./_fails */ 7)
	  , defined  = __webpack_require__(/*! ./_defined */ 35)
	  , wks      = __webpack_require__(/*! ./_wks */ 25);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ }),
/* 201 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.replace.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(/*! ./_fix-re-wks */ 200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ }),
/* 202 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.search.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(/*! ./_fix-re-wks */ 200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ }),
/* 203 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.regexp.split.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(/*! ./_fix-re-wks */ 200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(/*! ./_is-regexp */ 134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ }),
/* 204 */
/*!******************************************!*\
  !*** ./~/core-js/modules/es6.promise.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(/*! ./_library */ 28)
	  , global             = __webpack_require__(/*! ./_global */ 4)
	  , ctx                = __webpack_require__(/*! ./_ctx */ 20)
	  , classof            = __webpack_require__(/*! ./_classof */ 75)
	  , $export            = __webpack_require__(/*! ./_export */ 8)
	  , isObject           = __webpack_require__(/*! ./_is-object */ 13)
	  , aFunction          = __webpack_require__(/*! ./_a-function */ 21)
	  , anInstance         = __webpack_require__(/*! ./_an-instance */ 205)
	  , forOf              = __webpack_require__(/*! ./_for-of */ 206)
	  , speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 207)
	  , task               = __webpack_require__(/*! ./_task */ 208).set
	  , microtask          = __webpack_require__(/*! ./_microtask */ 209)()
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
	      , FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ 25)('species')] = function(exec){ exec(empty, empty); };
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
	  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ 210)($Promise.prototype, {
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
	__webpack_require__(/*! ./_set-to-string-tag */ 24)($Promise, PROMISE);
	__webpack_require__(/*! ./_set-species */ 192)(PROMISE);
	Wrapper = __webpack_require__(/*! ./_core */ 9)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ 165)(function(iter){
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

/***/ }),
/* 205 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_an-instance.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ }),
/* 206 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_for-of.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(/*! ./_ctx */ 20)
	  , call        = __webpack_require__(/*! ./_iter-call */ 161)
	  , isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 162)
	  , anObject    = __webpack_require__(/*! ./_an-object */ 12)
	  , toLength    = __webpack_require__(/*! ./_to-length */ 37)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 164)
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

/***/ }),
/* 207 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/_species-constructor.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(/*! ./_an-object */ 12)
	  , aFunction = __webpack_require__(/*! ./_a-function */ 21)
	  , SPECIES   = __webpack_require__(/*! ./_wks */ 25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 208 */
/*!************************************!*\
  !*** ./~/core-js/modules/_task.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(/*! ./_ctx */ 20)
	  , invoke             = __webpack_require__(/*! ./_invoke */ 78)
	  , html               = __webpack_require__(/*! ./_html */ 48)
	  , cel                = __webpack_require__(/*! ./_dom-create */ 15)
	  , global             = __webpack_require__(/*! ./_global */ 4)
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
	  if(__webpack_require__(/*! ./_cof */ 34)(process) == 'process'){
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

/***/ }),
/* 209 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_microtask.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 4)
	  , macrotask = __webpack_require__(/*! ./_task */ 208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(/*! ./_cof */ 34)(process) == 'process';
	
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

/***/ }),
/* 210 */
/*!********************************************!*\
  !*** ./~/core-js/modules/_redefine-all.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(/*! ./_redefine */ 18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ }),
/* 211 */
/*!**************************************!*\
  !*** ./~/core-js/modules/es6.map.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(/*! ./_collection-strong */ 212);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(/*! ./_collection */ 213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ }),
/* 212 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_collection-strong.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(/*! ./_object-dp */ 11).f
	  , create      = __webpack_require__(/*! ./_object-create */ 46)
	  , redefineAll = __webpack_require__(/*! ./_redefine-all */ 210)
	  , ctx         = __webpack_require__(/*! ./_ctx */ 20)
	  , anInstance  = __webpack_require__(/*! ./_an-instance */ 205)
	  , defined     = __webpack_require__(/*! ./_defined */ 35)
	  , forOf       = __webpack_require__(/*! ./_for-of */ 206)
	  , $iterDefine = __webpack_require__(/*! ./_iter-define */ 128)
	  , step        = __webpack_require__(/*! ./_iter-step */ 194)
	  , setSpecies  = __webpack_require__(/*! ./_set-species */ 192)
	  , DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 6)
	  , fastKey     = __webpack_require__(/*! ./_meta */ 22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ }),
/* 213 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_collection.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(/*! ./_global */ 4)
	  , $export           = __webpack_require__(/*! ./_export */ 8)
	  , redefine          = __webpack_require__(/*! ./_redefine */ 18)
	  , redefineAll       = __webpack_require__(/*! ./_redefine-all */ 210)
	  , meta              = __webpack_require__(/*! ./_meta */ 22)
	  , forOf             = __webpack_require__(/*! ./_for-of */ 206)
	  , anInstance        = __webpack_require__(/*! ./_an-instance */ 205)
	  , isObject          = __webpack_require__(/*! ./_is-object */ 13)
	  , fails             = __webpack_require__(/*! ./_fails */ 7)
	  , $iterDetect       = __webpack_require__(/*! ./_iter-detect */ 165)
	  , setToStringTag    = __webpack_require__(/*! ./_set-to-string-tag */ 24)
	  , inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 88);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ }),
/* 214 */
/*!**************************************!*\
  !*** ./~/core-js/modules/es6.set.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(/*! ./_collection-strong */ 212);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(/*! ./_collection */ 213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ }),
/* 215 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.weak-map.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(/*! ./_array-methods */ 172)(0)
	  , redefine     = __webpack_require__(/*! ./_redefine */ 18)
	  , meta         = __webpack_require__(/*! ./_meta */ 22)
	  , assign       = __webpack_require__(/*! ./_object-assign */ 69)
	  , weak         = __webpack_require__(/*! ./_collection-weak */ 216)
	  , isObject     = __webpack_require__(/*! ./_is-object */ 13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ 213)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ }),
/* 216 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_collection-weak.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(/*! ./_redefine-all */ 210)
	  , getWeak           = __webpack_require__(/*! ./_meta */ 22).getWeak
	  , anObject          = __webpack_require__(/*! ./_an-object */ 12)
	  , isObject          = __webpack_require__(/*! ./_is-object */ 13)
	  , anInstance        = __webpack_require__(/*! ./_an-instance */ 205)
	  , forOf             = __webpack_require__(/*! ./_for-of */ 206)
	  , createArrayMethod = __webpack_require__(/*! ./_array-methods */ 172)
	  , $has              = __webpack_require__(/*! ./_has */ 5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ }),
/* 217 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.weak-set.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(/*! ./_collection-weak */ 216);
	
	// 23.4 WeakSet Objects
	__webpack_require__(/*! ./_collection */ 213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ }),
/* 218 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.array-buffer.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(/*! ./_export */ 8)
	  , $typed       = __webpack_require__(/*! ./_typed */ 219)
	  , buffer       = __webpack_require__(/*! ./_typed-buffer */ 220)
	  , anObject     = __webpack_require__(/*! ./_an-object */ 12)
	  , toIndex      = __webpack_require__(/*! ./_to-index */ 39)
	  , toLength     = __webpack_require__(/*! ./_to-length */ 37)
	  , isObject     = __webpack_require__(/*! ./_is-object */ 13)
	  , ArrayBuffer  = __webpack_require__(/*! ./_global */ 4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ 7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(/*! ./_set-species */ 192)(ARRAY_BUFFER);

/***/ }),
/* 219 */
/*!*************************************!*\
  !*** ./~/core-js/modules/_typed.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./_global */ 4)
	  , hide   = __webpack_require__(/*! ./_hide */ 10)
	  , uid    = __webpack_require__(/*! ./_uid */ 19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ }),
/* 220 */
/*!********************************************!*\
  !*** ./~/core-js/modules/_typed-buffer.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(/*! ./_global */ 4)
	  , DESCRIPTORS    = __webpack_require__(/*! ./_descriptors */ 6)
	  , LIBRARY        = __webpack_require__(/*! ./_library */ 28)
	  , $typed         = __webpack_require__(/*! ./_typed */ 219)
	  , hide           = __webpack_require__(/*! ./_hide */ 10)
	  , redefineAll    = __webpack_require__(/*! ./_redefine-all */ 210)
	  , fails          = __webpack_require__(/*! ./_fails */ 7)
	  , anInstance     = __webpack_require__(/*! ./_an-instance */ 205)
	  , toInteger      = __webpack_require__(/*! ./_to-integer */ 38)
	  , toLength       = __webpack_require__(/*! ./_to-length */ 37)
	  , gOPN           = __webpack_require__(/*! ./_object-gopn */ 50).f
	  , dP             = __webpack_require__(/*! ./_object-dp */ 11).f
	  , arrayFill      = __webpack_require__(/*! ./_array-fill */ 188)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ }),
/* 221 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.typed.data-view.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ 219).ABV, {
	  DataView: __webpack_require__(/*! ./_typed-buffer */ 220).DataView
	});

/***/ }),
/* 222 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.typed.int8-array.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_typed-array */ 223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 223 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_typed-array.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(/*! ./_descriptors */ 6)){
	  var LIBRARY             = __webpack_require__(/*! ./_library */ 28)
	    , global              = __webpack_require__(/*! ./_global */ 4)
	    , fails               = __webpack_require__(/*! ./_fails */ 7)
	    , $export             = __webpack_require__(/*! ./_export */ 8)
	    , $typed              = __webpack_require__(/*! ./_typed */ 219)
	    , $buffer             = __webpack_require__(/*! ./_typed-buffer */ 220)
	    , ctx                 = __webpack_require__(/*! ./_ctx */ 20)
	    , anInstance          = __webpack_require__(/*! ./_an-instance */ 205)
	    , propertyDesc        = __webpack_require__(/*! ./_property-desc */ 17)
	    , hide                = __webpack_require__(/*! ./_hide */ 10)
	    , redefineAll         = __webpack_require__(/*! ./_redefine-all */ 210)
	    , toInteger           = __webpack_require__(/*! ./_to-integer */ 38)
	    , toLength            = __webpack_require__(/*! ./_to-length */ 37)
	    , toIndex             = __webpack_require__(/*! ./_to-index */ 39)
	    , toPrimitive         = __webpack_require__(/*! ./_to-primitive */ 16)
	    , has                 = __webpack_require__(/*! ./_has */ 5)
	    , same                = __webpack_require__(/*! ./_same-value */ 71)
	    , classof             = __webpack_require__(/*! ./_classof */ 75)
	    , isObject            = __webpack_require__(/*! ./_is-object */ 13)
	    , toObject            = __webpack_require__(/*! ./_to-object */ 58)
	    , isArrayIter         = __webpack_require__(/*! ./_is-array-iter */ 162)
	    , create              = __webpack_require__(/*! ./_object-create */ 46)
	    , getPrototypeOf      = __webpack_require__(/*! ./_object-gpo */ 59)
	    , gOPN                = __webpack_require__(/*! ./_object-gopn */ 50).f
	    , getIterFn           = __webpack_require__(/*! ./core.get-iterator-method */ 164)
	    , uid                 = __webpack_require__(/*! ./_uid */ 19)
	    , wks                 = __webpack_require__(/*! ./_wks */ 25)
	    , createArrayMethod   = __webpack_require__(/*! ./_array-methods */ 172)
	    , createArrayIncludes = __webpack_require__(/*! ./_array-includes */ 36)
	    , speciesConstructor  = __webpack_require__(/*! ./_species-constructor */ 207)
	    , ArrayIterators      = __webpack_require__(/*! ./es6.array.iterator */ 193)
	    , Iterators           = __webpack_require__(/*! ./_iterators */ 129)
	    , $iterDetect         = __webpack_require__(/*! ./_iter-detect */ 165)
	    , setSpecies          = __webpack_require__(/*! ./_set-species */ 192)
	    , arrayFill           = __webpack_require__(/*! ./_array-fill */ 188)
	    , arrayCopyWithin     = __webpack_require__(/*! ./_array-copy-within */ 185)
	    , $DP                 = __webpack_require__(/*! ./_object-dp */ 11)
	    , $GOPD               = __webpack_require__(/*! ./_object-gopd */ 51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ }),
/* 224 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.uint8-array.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_typed-array */ 223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 225 */
/*!************************************************************!*\
  !*** ./~/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_typed-array */ 223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ }),
/* 226 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.int16-array.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_typed-array */ 223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 227 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.uint16-array.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_typed-array */ 223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 228 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.int32-array.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_typed-array */ 223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 229 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.uint32-array.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_typed-array */ 223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 230 */
/*!******************************************************!*\
  !*** ./~/core-js/modules/es6.typed.float32-array.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_typed-array */ 223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 231 */
/*!******************************************************!*\
  !*** ./~/core-js/modules/es6.typed.float64-array.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_typed-array */ 223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 232 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.apply.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , aFunction = __webpack_require__(/*! ./_a-function */ 21)
	  , anObject  = __webpack_require__(/*! ./_an-object */ 12)
	  , rApply    = (__webpack_require__(/*! ./_global */ 4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ 7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ }),
/* 233 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.construct.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(/*! ./_export */ 8)
	  , create     = __webpack_require__(/*! ./_object-create */ 46)
	  , aFunction  = __webpack_require__(/*! ./_a-function */ 21)
	  , anObject   = __webpack_require__(/*! ./_an-object */ 12)
	  , isObject   = __webpack_require__(/*! ./_is-object */ 13)
	  , fails      = __webpack_require__(/*! ./_fails */ 7)
	  , bind       = __webpack_require__(/*! ./_bind */ 77)
	  , rConstruct = (__webpack_require__(/*! ./_global */ 4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ }),
/* 234 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.define-property.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(/*! ./_object-dp */ 11)
	  , $export     = __webpack_require__(/*! ./_export */ 8)
	  , anObject    = __webpack_require__(/*! ./_an-object */ 12)
	  , toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ }),
/* 235 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.delete-property.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(/*! ./_export */ 8)
	  , gOPD     = __webpack_require__(/*! ./_object-gopd */ 51).f
	  , anObject = __webpack_require__(/*! ./_an-object */ 12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ }),
/* 236 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.enumerate.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(/*! ./_export */ 8)
	  , anObject = __webpack_require__(/*! ./_an-object */ 12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(/*! ./_iter-create */ 130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ }),
/* 237 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.reflect.get.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(/*! ./_object-gopd */ 51)
	  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59)
	  , has            = __webpack_require__(/*! ./_has */ 5)
	  , $export        = __webpack_require__(/*! ./_export */ 8)
	  , isObject       = __webpack_require__(/*! ./_is-object */ 13)
	  , anObject       = __webpack_require__(/*! ./_an-object */ 12);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ }),
/* 238 */
/*!**********************************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(/*! ./_object-gopd */ 51)
	  , $export  = __webpack_require__(/*! ./_export */ 8)
	  , anObject = __webpack_require__(/*! ./_an-object */ 12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ }),
/* 239 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(/*! ./_export */ 8)
	  , getProto = __webpack_require__(/*! ./_object-gpo */ 59)
	  , anObject = __webpack_require__(/*! ./_an-object */ 12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ }),
/* 240 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.reflect.has.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ }),
/* 241 */
/*!********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.is-extensible.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(/*! ./_export */ 8)
	  , anObject      = __webpack_require__(/*! ./_an-object */ 12)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ }),
/* 242 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.own-keys.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(/*! ./_own-keys */ 243)});

/***/ }),
/* 243 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_own-keys.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(/*! ./_object-gopn */ 50)
	  , gOPS     = __webpack_require__(/*! ./_object-gops */ 43)
	  , anObject = __webpack_require__(/*! ./_an-object */ 12)
	  , Reflect  = __webpack_require__(/*! ./_global */ 4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ }),
/* 244 */
/*!*************************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(/*! ./_export */ 8)
	  , anObject           = __webpack_require__(/*! ./_an-object */ 12)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ }),
/* 245 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.reflect.set.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(/*! ./_object-dp */ 11)
	  , gOPD           = __webpack_require__(/*! ./_object-gopd */ 51)
	  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59)
	  , has            = __webpack_require__(/*! ./_has */ 5)
	  , $export        = __webpack_require__(/*! ./_export */ 8)
	  , createDesc     = __webpack_require__(/*! ./_property-desc */ 17)
	  , anObject       = __webpack_require__(/*! ./_an-object */ 12)
	  , isObject       = __webpack_require__(/*! ./_is-object */ 13);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ }),
/* 246 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(/*! ./_export */ 8)
	  , setProto = __webpack_require__(/*! ./_set-proto */ 73);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ }),
/* 247 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.array.includes.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , $includes = __webpack_require__(/*! ./_array-includes */ 36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(/*! ./_add-to-unscopables */ 186)('includes');

/***/ }),
/* 248 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es7.string.at.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $at     = __webpack_require__(/*! ./_string-at */ 127)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ }),
/* 249 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.string.pad-start.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $pad    = __webpack_require__(/*! ./_string-pad */ 250);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ }),
/* 250 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_string-pad.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(/*! ./_to-length */ 37)
	  , repeat   = __webpack_require__(/*! ./_string-repeat */ 91)
	  , defined  = __webpack_require__(/*! ./_defined */ 35);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ }),
/* 251 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.string.pad-end.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $pad    = __webpack_require__(/*! ./_string-pad */ 250);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ }),
/* 252 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.string.trim-left.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(/*! ./_string-trim */ 83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ }),
/* 253 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es7.string.trim-right.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(/*! ./_string-trim */ 83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ }),
/* 254 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.string.match-all.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(/*! ./_export */ 8)
	  , defined     = __webpack_require__(/*! ./_defined */ 35)
	  , toLength    = __webpack_require__(/*! ./_to-length */ 37)
	  , isRegExp    = __webpack_require__(/*! ./_is-regexp */ 134)
	  , getFlags    = __webpack_require__(/*! ./_flags */ 196)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(/*! ./_iter-create */ 130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ }),
/* 255 */
/*!********************************************************!*\
  !*** ./~/core-js/modules/es7.symbol.async-iterator.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_wks-define */ 27)('asyncIterator');

/***/ }),
/* 256 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es7.symbol.observable.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_wks-define */ 27)('observable');

/***/ }),
/* 257 */
/*!**********************************************************************!*\
  !*** ./~/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(/*! ./_export */ 8)
	  , ownKeys        = __webpack_require__(/*! ./_own-keys */ 243)
	  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 32)
	  , gOPD           = __webpack_require__(/*! ./_object-gopd */ 51)
	  , createProperty = __webpack_require__(/*! ./_create-property */ 163);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ }),
/* 258 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es7.object.values.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $values = __webpack_require__(/*! ./_object-to-array */ 259)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ }),
/* 259 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_object-to-array.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(/*! ./_object-keys */ 30)
	  , toIObject = __webpack_require__(/*! ./_to-iobject */ 32)
	  , isEnum    = __webpack_require__(/*! ./_object-pie */ 44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ }),
/* 260 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.object.entries.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(/*! ./_export */ 8)
	  , $entries = __webpack_require__(/*! ./_object-to-array */ 259)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ }),
/* 261 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.object.define-getter.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(/*! ./_export */ 8)
	  , toObject        = __webpack_require__(/*! ./_to-object */ 58)
	  , aFunction       = __webpack_require__(/*! ./_a-function */ 21)
	  , $defineProperty = __webpack_require__(/*! ./_object-dp */ 11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(/*! ./_descriptors */ 6) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ }),
/* 262 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_object-forced-pam.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(/*! ./_library */ 28)|| !__webpack_require__(/*! ./_fails */ 7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(/*! ./_global */ 4)[K];
	});

/***/ }),
/* 263 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.object.define-setter.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(/*! ./_export */ 8)
	  , toObject        = __webpack_require__(/*! ./_to-object */ 58)
	  , aFunction       = __webpack_require__(/*! ./_a-function */ 21)
	  , $defineProperty = __webpack_require__(/*! ./_object-dp */ 11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(/*! ./_descriptors */ 6) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ }),
/* 264 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.object.lookup-getter.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(/*! ./_export */ 8)
	  , toObject                 = __webpack_require__(/*! ./_to-object */ 58)
	  , toPrimitive              = __webpack_require__(/*! ./_to-primitive */ 16)
	  , getPrototypeOf           = __webpack_require__(/*! ./_object-gpo */ 59)
	  , getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 51).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(/*! ./_descriptors */ 6) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ }),
/* 265 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.object.lookup-setter.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(/*! ./_export */ 8)
	  , toObject                 = __webpack_require__(/*! ./_to-object */ 58)
	  , toPrimitive              = __webpack_require__(/*! ./_to-primitive */ 16)
	  , getPrototypeOf           = __webpack_require__(/*! ./_object-gpo */ 59)
	  , getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 51).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(/*! ./_descriptors */ 6) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ }),
/* 266 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es7.map.to-json.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(/*! ./_collection-to-json */ 267)('Map')});

/***/ }),
/* 267 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/_collection-to-json.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(/*! ./_classof */ 75)
	  , from    = __webpack_require__(/*! ./_array-from-iterable */ 268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ }),
/* 268 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/_array-from-iterable.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(/*! ./_for-of */ 206);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 269 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es7.set.to-json.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(/*! ./_collection-to-json */ 267)('Set')});

/***/ }),
/* 270 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es7.system.global.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'System', {global: __webpack_require__(/*! ./_global */ 4)});

/***/ }),
/* 271 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.error.is-error.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , cof     = __webpack_require__(/*! ./_cof */ 34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ }),
/* 272 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.math.iaddh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ }),
/* 273 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.math.isubh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ }),
/* 274 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.math.imulh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ }),
/* 275 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.math.umulh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ }),
/* 276 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.define-metadata.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(/*! ./_metadata */ 277)
	  , anObject                  = __webpack_require__(/*! ./_an-object */ 12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ }),
/* 277 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_metadata.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(/*! ./es6.map */ 211)
	  , $export = __webpack_require__(/*! ./_export */ 8)
	  , shared  = __webpack_require__(/*! ./_shared */ 23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ 215)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ }),
/* 278 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.delete-metadata.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(/*! ./_metadata */ 277)
	  , anObject               = __webpack_require__(/*! ./_an-object */ 12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ }),
/* 279 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.get-metadata.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(/*! ./_metadata */ 277)
	  , anObject               = __webpack_require__(/*! ./_an-object */ 12)
	  , getPrototypeOf         = __webpack_require__(/*! ./_object-gpo */ 59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 280 */
/*!************************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(/*! ./es6.set */ 214)
	  , from                    = __webpack_require__(/*! ./_array-from-iterable */ 268)
	  , metadata                = __webpack_require__(/*! ./_metadata */ 277)
	  , anObject                = __webpack_require__(/*! ./_an-object */ 12)
	  , getPrototypeOf          = __webpack_require__(/*! ./_object-gpo */ 59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ }),
/* 281 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(/*! ./_metadata */ 277)
	  , anObject               = __webpack_require__(/*! ./_an-object */ 12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 282 */
/*!****************************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(/*! ./_metadata */ 277)
	  , anObject                = __webpack_require__(/*! ./_an-object */ 12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ }),
/* 283 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.has-metadata.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(/*! ./_metadata */ 277)
	  , anObject               = __webpack_require__(/*! ./_an-object */ 12)
	  , getPrototypeOf         = __webpack_require__(/*! ./_object-gpo */ 59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 284 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(/*! ./_metadata */ 277)
	  , anObject               = __webpack_require__(/*! ./_an-object */ 12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 285 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.metadata.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(/*! ./_metadata */ 277)
	  , anObject                  = __webpack_require__(/*! ./_an-object */ 12)
	  , aFunction                 = __webpack_require__(/*! ./_a-function */ 21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ }),
/* 286 */
/*!***************************************!*\
  !*** ./~/core-js/modules/es7.asap.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(/*! ./_export */ 8)
	  , microtask = __webpack_require__(/*! ./_microtask */ 209)()
	  , process   = __webpack_require__(/*! ./_global */ 4).process
	  , isNode    = __webpack_require__(/*! ./_cof */ 34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ }),
/* 287 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.observable.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(/*! ./_export */ 8)
	  , global      = __webpack_require__(/*! ./_global */ 4)
	  , core        = __webpack_require__(/*! ./_core */ 9)
	  , microtask   = __webpack_require__(/*! ./_microtask */ 209)()
	  , OBSERVABLE  = __webpack_require__(/*! ./_wks */ 25)('observable')
	  , aFunction   = __webpack_require__(/*! ./_a-function */ 21)
	  , anObject    = __webpack_require__(/*! ./_an-object */ 12)
	  , anInstance  = __webpack_require__(/*! ./_an-instance */ 205)
	  , redefineAll = __webpack_require__(/*! ./_redefine-all */ 210)
	  , hide        = __webpack_require__(/*! ./_hide */ 10)
	  , forOf       = __webpack_require__(/*! ./_for-of */ 206)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(/*! ./_set-species */ 192)('Observable');

/***/ }),
/* 288 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/web.timers.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(/*! ./_global */ 4)
	  , $export    = __webpack_require__(/*! ./_export */ 8)
	  , invoke     = __webpack_require__(/*! ./_invoke */ 78)
	  , partial    = __webpack_require__(/*! ./_partial */ 289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ }),
/* 289 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_partial.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(/*! ./_path */ 290)
	  , invoke    = __webpack_require__(/*! ./_invoke */ 78)
	  , aFunction = __webpack_require__(/*! ./_a-function */ 21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ }),
/* 290 */
/*!************************************!*\
  !*** ./~/core-js/modules/_path.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./_global */ 4);

/***/ }),
/* 291 */
/*!********************************************!*\
  !*** ./~/core-js/modules/web.immediate.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $task   = __webpack_require__(/*! ./_task */ 208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ }),
/* 292 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/web.dom.iterable.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(/*! ./es6.array.iterator */ 193)
	  , redefine      = __webpack_require__(/*! ./_redefine */ 18)
	  , global        = __webpack_require__(/*! ./_global */ 4)
	  , hide          = __webpack_require__(/*! ./_hide */ 10)
	  , Iterators     = __webpack_require__(/*! ./_iterators */ 129)
	  , wks           = __webpack_require__(/*! ./_wks */ 25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ }),
/* 293 */
/*!******************************************!*\
  !*** ./~/regenerator-runtime/runtime.js ***!
  \******************************************/
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 294 */
/*!***************************************!*\
  !*** ./~/core-js/fn/regexp/escape.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/core.regexp.escape */ 295);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 9).RegExp.escape;

/***/ }),
/* 295 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/core.regexp.escape.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(/*! ./_export */ 8)
	  , $re     = __webpack_require__(/*! ./_replacer */ 296)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ }),
/* 296 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_replacer.js ***!
  \****************************************/
/***/ (function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ }),
/* 297 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(/*! ./styl/index.styl */ 298);
	
	var _Game = __webpack_require__(/*! ./js/Game */ 308);
	
	var _Game2 = _interopRequireDefault(_Game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	
	    window.game = new _Game2.default();
	
	    window.importGameData = function () {
	        var input = document.createElement('input');
	        input.addEventListener('change', handleFileSelect);
	        input.type = 'file';
	        input.click();
	
	        function handleFileSelect(evt) {
	            var file = evt.target.files[0];
	            var reader = new FileReader();
	            reader.onload = function (e) {
	                var data = JSON.stringify();
	                window.game.updateLevelSectionData(JSON.parse(e.target.result));
	            };
	
	            // Read in the image file as a data URL.
	            reader.readAsText(file);
	        };
	    };
	};

/***/ }),
/* 298 */
/*!*****************************!*\
  !*** ./src/styl/index.styl ***!
  \*****************************/
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StateBoot = __webpack_require__(/*! ./states/StateBoot */ 309);
	
	var _StateBoot2 = _interopRequireDefault(_StateBoot);
	
	var _StateLoad = __webpack_require__(/*! ./states/StateLoad */ 310);
	
	var _StateLoad2 = _interopRequireDefault(_StateLoad);
	
	var _StateWelcome = __webpack_require__(/*! ./states/StateWelcome */ 314);
	
	var _StateWelcome2 = _interopRequireDefault(_StateWelcome);
	
	var _StatePlay = __webpack_require__(/*! ./states/StatePlay */ 319);
	
	var _StatePlay2 = _interopRequireDefault(_StatePlay);
	
	var _StateComplete = __webpack_require__(/*! ./states/StateComplete */ 346);
	
	var _StateComplete2 = _interopRequireDefault(_StateComplete);
	
	var _StateResetGame = __webpack_require__(/*! ./states/StateResetGame */ 347);
	
	var _StateResetGame2 = _interopRequireDefault(_StateResetGame);
	
	var _SimpleButton = __webpack_require__(/*! ./ui/SimpleButton */ 318);
	
	var _SimpleButton2 = _interopRequireDefault(_SimpleButton);
	
	var _BtnSoundToggle = __webpack_require__(/*! ./ui/BtnSoundToggle */ 338);
	
	var _BtnSoundToggle2 = _interopRequireDefault(_BtnSoundToggle);
	
	var _SoundController = __webpack_require__(/*! ./controller/SoundController */ 348);
	
	var _SoundController2 = _interopRequireDefault(_SoundController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GAME_WIDTH = 1368;
	var GAME_HEIGHT = 720;
	
	var Game = function (_Phaser$Game) {
	    _inherits(Game, _Phaser$Game);
	
	    function Game() {
	        _classCallCheck(this, Game);
	
	        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'canvas', null));
	        // initialize Phaser 
	
	
	        _this.playCount = 0;
	
	        // set game states
	        _this.state.add('Boot', _StateBoot2.default, false);
	        _this.state.add('Load', _StateLoad2.default, false);
	        _this.state.add('Welcome', _StateWelcome2.default, false);
	        _this.state.add('Play', _StatePlay2.default, false);
	        _this.state.add('Complete', _StateComplete2.default, false);
	        _this.state.add('Reset', _StateResetGame2.default, false);
	
	        // define the games default width, used to aid positioning of elements on resize
	        _this.defaultWidth = GAME_WIDTH;
	        _this.defaultHeight = GAME_HEIGHT;
	
	        // something to manage noises
	        _this.sounds = new _SoundController2.default(_this);
	
	        // signal pause / resume events, we handle pause manually
	        _this.onGamePaused = new Phaser.Signal();
	        _this.onGameResumed = new Phaser.Signal();
	
	        // attach to window events for handling game when focus is lost
	        window.addEventListener("resize", _this.handleWindowResized.bind(_this));
	        window.addEventListener("blur", _this.handleWindowBlur.bind(_this));
	        window.addEventListener("focus", _this.handleWindowFocus.bind(_this));
	
	        // attach a touchevent listener, we will use this to detect is user is using touch device
	        _this.bindedTouchStart = _this.handleTouchStart.bind(_this);
	        window.addEventListener("touchstart", _this.bindedTouchStart);
	
	        // start the game via boot
	        _this.state.start('Boot', false, false);
	        return _this;
	    }
	
	    /*
	    ============================================================================
	        HANDLE GAME CHEATS
	    ============================================================================
	    */
	
	    _createClass(Game, [{
	        key: "updateLevelSectionData",
	        value: function updateLevelSectionData(data) {
	            // built in cheat allows for user to upload new levelsections.json
	            // new json will override default level data
	            this.state.start("Welcome", true, false);
	            this.data.levelSections = data;
	        }
	
	        /*
	        ============================================================================
	            HANDLE WINDOW EVENTS
	        ============================================================================
	        */
	
	    }, {
	        key: "handleTouchStart",
	        value: function handleTouchStart() {
	            // user has touched the screen, safe to assume they are on touch device
	            // we enable to games touch flag
	            this.touchEnabled = true;
	            window.removeEventListener("touchstart", this.bindedTouchStart);
	        }
	    }, {
	        key: "handleWindowBlur",
	        value: function handleWindowBlur() {
	            // window has lost focus from the user
	            // we pause the game
	            // if sound is enabled, we need to resume it again on focus
	            this.unmuteOnFocus = this.sounds.allowMusic;
	
	            // mute the sounds
	            this.sounds.allowMusic = false;
	            this.sounds.allowEffects = false;
	            // and trigger pause if user is currently playing the game
	            if (this.state.current === "Play") {
	                this.pauseGame();
	            }
	        }
	    }, {
	        key: "handleWindowFocus",
	        value: function handleWindowFocus() {
	            // window has regained focus
	            if (this.unmuteOnFocus) {
	                this.sound.mute = false;
	            };
	            // if sound was previously enabled, we enable it again
	            if (this.unmuteOnFocus) {
	                this.sounds.allowMusic = true;
	                this.sounds.allowEffects = true;
	            }
	            // if the user is not currently playing the game, we resume
	            if (this.state.current !== "Play") {
	                this.resumeGame();
	            }
	        }
	
	        /*
	        ============================================================================
	            PAUSE / RESUME
	        ============================================================================
	        */
	
	    }, {
	        key: "pauseGame",
	        value: function pauseGame() {
	            this.onGamePaused.dispatch();
	        }
	    }, {
	        key: "resumeGame",
	        value: function resumeGame() {
	            this.onGameResumed.dispatch();
	        }
	
	        /*
	        ============================================================================
	            HANDLE WINDOW RESIZE
	        ============================================================================
	        */
	
	    }, {
	        key: "handleWindowResized",
	        value: function handleWindowResized() {
	            // game cannot be played in portrait mode
	            // we pause the game if user is playing so they can resume when resolved
	            if (window.innerWidth < window.innerHeight) {
	                if (this.state.current === "Play") {
	                    this.pauseGame();
	                }
	            } else {
	                // calculate the aspect ratio
	                var aspect = window.innerWidth / window.innerHeight;
	
	                // set target width of game based on window aspect
	                var targetWidth = GAME_HEIGHT * aspect;
	                var minWidth = GAME_HEIGHT / 3 * 4;
	
	                // if the apect falls within supported range, crop the window
	                if (targetWidth < GAME_WIDTH && targetWidth >= minWidth) {
	                    this.scale.setGameSize(targetWidth, GAME_HEIGHT);
	                } else {
	                    // otherwise we default game size and letterbox
	                    this.scale.setGameSize(GAME_WIDTH, GAME_HEIGHT);
	                }
	            }
	        }
	
	        /*
	        ============================================================================
	            HANLDE GAME TRACKING
	        ============================================================================
	        */
	
	    }, {
	        key: "trackEvent",
	        value: function trackEvent(event) {
	            if (window.WiseTrack) {
	                window.WiseTrack.track(event);
	            }
	        }
	
	        /*
	        ============================================================================
	            SAVE AND RETRIEVE DATA
	        ============================================================================
	        */
	
	    }, {
	        key: "GetUrlParamenterByName",
	        value: function GetUrlParamenterByName(name, url) {
	            // searches the url for any params that may have been passed through
	            if (!url) url = window.location.href;
	            name = name.replace(/[\[\]]/g, "\\$&");
	            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	            var results = regex.exec(url);
	
	            if (!results) return null;
	            if (!results[2]) return '';
	            return decodeURIComponent(results[2].replace(/\+/g, " "));
	        }
	    }, {
	        key: "setCookie",
	        value: function setCookie(cname, value) {
	            var savedData = this.getSavedData();
	            savedData[cname] = value;
	            localStorage.setItem(this.data.config.save_data_id, JSON.stringify(savedData));
	        }
	    }, {
	        key: "getCookie",
	        value: function getCookie(cname) {
	            var savedData = this.getSavedData();
	            return savedData[cname] || null;
	        }
	    }, {
	        key: "getSavedData",
	        value: function getSavedData() {
	            var savedData = JSON.parse(localStorage.getItem(this.data.config.save_data_id)) || {};
	            if (savedData.version !== this.data.config.save_data_id) {
	                localStorage.clear();
	                savedData = { version: this.data.config.save_data_id };
	            }
	
	            return savedData;
	        }
	        /*
	        ============================================================================
	            HANDY QUICK FIRE METHODS FOR COMMON GAME ITEMS
	        ============================================================================
	        */
	
	    }, {
	        key: "addScreenImage",
	        value: function addScreenImage(texture, ax, ay, container) {
	            var x = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	            var y = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	            var image = this.add.image(x, y, texture);
	            image.anchor.set(ax, ay);
	            if (container) {
	                container.addChild(image);
	            }
	            return image;
	        }
	    }, {
	        key: "addSimpleButton",
	        value: function addSimpleButton(up, over, callback, context, container) {
	            var btn = new _SimpleButton2.default(this, 0, 0, up, over);
	            btn.onInputUp.add(callback, context);
	            this.add.existing(btn);
	            if (container) {
	                container.addChild(btn);
	            }
	            return btn;
	        }
	    }, {
	        key: "addSoundButton",
	        value: function addSoundButton(container) {
	            var btn = new _BtnSoundToggle2.default(this, this.width - 72, 83);
	            this.add.existing(btn);
	            if (container) {
	                container.addChild(btn);
	            }
	            return btn;
	        }
	    }, {
	        key: "addScreenText",
	        value: function addScreenText(fontsize, copy, colour, align, bounds, container) {
	            var style = { font: fontsize + "px " + "dirty", fill: colour || "#ffffff", align: align || "center" };
	            if (bounds) {
	                style.boundsAlignH = bounds.alignH;
	                style.boundsAlignV = bounds.alignV;
	            }
	            var text = this.add.text(0, 0, copy, style);
	            if (bounds) {
	                text.setTextBounds(bounds.x, bounds.y, bounds.width, bounds.height);
	            }
	            this.add.existing(text);
	            if (container) {
	                container.addChild(text);
	            }
	
	            return text;
	        }
	    }]);
	
	    return Game;
	}(Phaser.Game);
	
	exports.default = Game;

/***/ }),
/* 309 */
/*!************************************!*\
  !*** ./src/js/states/StateBoot.js ***!
  \************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Phaser$State) {
	    _inherits(_class, _Phaser$State);
	
	    function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
	        key: 'preload',
	        value: function preload() {
	            // asset asset base url from config ( found in index.html )
	            this.game.load.baseURL = window.AppConfig.asset_root;
	
	            // loadd boot assets from assetpack
	            this.game.load.pack('boot', 'assets/assetpack.json', null, this);
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            this.game.app_config = this.game.cache.getJSON("app_config");
	            // setup defulat background colour
	            this.stage.backgroundColor = '#000000';
	            // apply same default colour to DOM for letterboxing
	            document.body.style.background = '#000000';
	
	            // set scale modes
	            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	            this.game.scale.pageAlignHorizontally = true;
	            this.game.scale.pageAlignVertically = true;
	            this.game.stage.disableVisibilityChange = true;
	
	            // trigger resize event to size canvas correctly
	            this.game.handleWindowResized();
	
	            // start loading assets
	            this.state.start('Load', true);
	        }
	    }]);
	
	    return _class;
	}(Phaser.State);
	
	exports.default = _class;

/***/ }),
/* 310 */
/*!************************************!*\
  !*** ./src/js/states/StateLoad.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _webfontloader = __webpack_require__(/*! ../utils/webfontloader */ 311);
	
	var _webfontloader2 = _interopRequireDefault(_webfontloader);
	
	var _LoadAnimation = __webpack_require__(/*! ../ui/LoadAnimation */ 312);
	
	var _LoadAnimation2 = _interopRequireDefault(_LoadAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Phaser$State) {
	    _inherits(_class, _Phaser$State);
	
	    function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
	        key: "preload",
	        value: function preload() {
	            // add visuals
	            this.loadAnimation = new _LoadAnimation2.default(this.game);
	
	            // load wisetrack
	            if (this.game.app_config.wisetrack_id && this.game.app_config.wisetrack_id.length > 1) {
	                this.game.app_config = this.game.GetUrlParamenterByName("locale") || this.game.app_config;
	                var script = document.createElement('script');
	                script.type = 'text/javascript';
	                script.src = '//www.wisetrack.net/js2_detect.php?tracking_id=' + this.game.app_config.wisetrack_id + '&country=' + this.game.app_config.country_code;
	                document.getElementsByTagName('head')[0].appendChild(script);
	            }
	
	            // load assets 
	            this.game.load.pack('load', 'assets/assetpack.json?v=1.0.0', null, this);
	            this.game.load.pack('ui', 'assets/assetpack.json?v=1.0.0', null, this);
	            this.game.load.pack('game', 'assets/assetpack.json?v=1.0.0', null, this);
	            this.game.load.pack('skater', 'assets/assetpack.json?v=1.0.0', null, this);
	            this.game.load.pack('audio', 'assets/assetpack.json?v=1.0.0', null, this);
	
	            // load fonts
	            _webfontloader2.default.load({
	                custom: { families: ["dirty", "bimbo"], urls: ["assets/fonts/dirtyego.css", "assets/fonts/bimbo.css"] },
	                active: this.fontsLoaded.bind(this),
	                inactive: this.fontsLoaded.bind(this)
	            });
	
	            this.progress = 0;
	        }
	    }, {
	        key: "loadUpdate",
	        value: function loadUpdate() {
	            this.loadAnimation.setProgress(this.game.load.progress / 100);
	        }
	    }, {
	        key: "create",
	        value: function create() {
	            // set game data
	            this.game.data = {
	                config: this.game.cache.getJSON("game_config"),
	                audio: this.game.cache.getJSON("game_config").audio,
	                tutorialConfig: this.game.cache.getJSON("tutorial_config"),
	                levelData: this.game.cache.getJSON("level_data").levels,
	                levelSections: this.game.cache.getJSON("level_sections")
	
	                // add any registered audio
	            };for (var i in this.game.data.audio) {
	                this.game.sounds.addSound(i, this.game.data.audio[i]);
	            }
	
	            // flag assets ready and check load progress
	            this.assetsReady = true;
	        }
	    }, {
	        key: "fontsLoaded",
	        value: function fontsLoaded() {
	            this.fontsReady = true;
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            // check loading flags and trigger welcome if done
	            if (this.assetsReady && this.fontsReady) {
	                this.game.state.start("Welcome", true);
	            }
	        }
	    }, {
	        key: "shutdown",
	        value: function shutdown() {
	            this.loadAnimation.destroy();
	            this.loadAnimation = null;
	        }
	    }]);
	
	    return _class;
	}(Phaser.State);
	
	exports.default = _class;

/***/ }),
/* 311 */
/*!***************************************!*\
  !*** ./src/js/utils/webfontloader.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
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
	        d = new Promise(function (d, e) {
	      function k() {
	        q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
	          1 <= a.length ? d() : setTimeout(k, 25);
	        }, function () {
	          e();
	        });
	      }k();
	    }),
	        e = new Promise(function (a, d) {
	      setTimeout(d, b.f);
	    });Promise.race([e, d]).then(function () {
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
	  var Aa = { latin: "BESbswy", "latin-ext": "\xE7\xF6\xFC\u011F\u015F", cyrillic: "\u0439\u044F\u0416", greek: "\u03B1\u03B2\u03A3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782" },
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

/***/ }),
/* 312 */
/*!************************************!*\
  !*** ./src/js/ui/LoadAnimation.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _LoaderProgress = __webpack_require__(/*! ./LoaderProgress */ 313);
	
	var _LoaderProgress2 = _interopRequireDefault(_LoaderProgress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Phaser$Group) {
	        _inherits(_class, _Phaser$Group);
	
	        function _class(game) {
	                _classCallCheck(this, _class);
	
	                // add background
	                var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game));
	
	                _this.background = _this.game.addScreenImage('bg_generic', 0.5, 0.5);
	
	                _this.vignette = _this.game.addScreenImage('vignette', 0.5, 0.5, _this.backgroundContainer, _this.game.width / 2, _this.game.height / 2);
	                _this.vignette.width = _this.game.width;
	                _this.vignette.height = _this.game.height;
	
	                // add animated icon
	                _this.loadIcon = _this.game.make.sprite(0, 0, "skater_loader");
	                _this.loadIcon.anchor.set(0.6, 0.5);
	                _this.loadIcon.animations.add("play");
	                _this.loadIcon.animations.play("play", 24, true);
	                _this.game.add.existing(_this.loadIcon);
	
	                _this.loadText = _this.game.make.image(0, 0, "loading_text");
	                _this.loadText.anchor.set(0.42);
	                _this.game.add.existing(_this.loadText);
	
	                _this.loadIndicator = new _LoaderProgress2.default(_this.game);
	                _this.game.add.existing(_this.loadIndicator);
	
	                _this.positionElements();
	                _this.game.scale.onSizeChange.add(_this.positionElements, _this);
	                return _this;
	        }
	
	        _createClass(_class, [{
	                key: 'setProgress',
	                value: function setProgress(value) {
	                        this.loadIndicator.setProgress(value);
	                }
	        }, {
	                key: 'positionElements',
	                value: function positionElements() {
	                        this.vignette.width = this.game.width;
	                        this.vignette.height = this.game.height;
	                        this.loadIndicator.position.set(this.game.width / 2 - 119.5, this.game.height * 0.65);
	                        this.background.position.set(this.game.width / 2, this.game.height / 2);
	                        this.loadText.position.set(this.game.width / 2, this.game.height / 2);
	                        this.loadIcon.position.set(this.game.width / 2, this.game.height * 0.25);
	                }
	        }, {
	                key: 'destroy',
	                value: function destroy() {
	                        this.game.scale.onSizeChange.remove(this.positionElements, this);
	
	                        this.background.destroy(true);
	                        this.loadIcon.animations.stop();
	                        this.loadIcon.destroy(true);
	
	                        this.background = null;
	                        this.loadIcon = null;
	
	                        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'destroy', this).call(this, true);
	                }
	        }]);
	
	        return _class;
	}(Phaser.Group);
	
	exports.default = _class;

/***/ }),
/* 313 */
/*!*************************************!*\
  !*** ./src/js/ui/LoaderProgress.js ***!
  \*************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoaderProgress = function (_Phaser$Group) {
	    _inherits(LoaderProgress, _Phaser$Group);
	
	    function LoaderProgress(game) {
	        _classCallCheck(this, LoaderProgress);
	
	        var _this = _possibleConstructorReturn(this, (LoaderProgress.__proto__ || Object.getPrototypeOf(LoaderProgress)).call(this, game));
	
	        _this.bg = _this.game.make.image(0, 0, "loader_bg");
	        _this.addChild(_this.bg);
	
	        _this.icon1 = _this.game.make.image(25, 35, "loader_prog_1");
	        _this.icon2 = _this.game.make.image(65, 35, "loader_prog_2");
	        _this.icon3 = _this.game.make.image(100, 35, "loader_prog_3");
	        _this.icon4 = _this.game.make.image(138, 35, "loader_prog_4");
	        _this.icon5 = _this.game.make.image(170, 35, "loader_prog_5");
	
	        _this.icon1.alpha = 0.25;
	        _this.icon2.alpha = 0.25;
	        _this.icon3.alpha = 0.25;
	        _this.icon4.alpha = 0.25;
	        _this.icon5.alpha = 0.25;
	
	        _this.addChild(_this.icon1);
	        _this.addChild(_this.icon2);
	        _this.addChild(_this.icon3);
	        _this.addChild(_this.icon4);
	        _this.addChild(_this.icon5);
	        return _this;
	    }
	
	    _createClass(LoaderProgress, [{
	        key: "setProgress",
	        value: function setProgress(value) {
	            this.icon1.alpha = value > 0.2 ? 1 : 0.25;
	            this.icon2.alpha = value > 0.4 ? 1 : 0.25;
	            this.icon3.alpha = value > 0.6 ? 1 : 0.25;
	            this.icon4.alpha = value > 0.7 ? 1 : 0.25;
	            this.icon5.alpha = value > 0.98 ? 1 : 0.25;
	        }
	    }]);
	
	    return LoaderProgress;
	}(Phaser.Group);
	
	exports.default = LoaderProgress;

/***/ }),
/* 314 */
/*!***************************************!*\
  !*** ./src/js/states/StateWelcome.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _UIButton = __webpack_require__(/*! ../display/UIButton */ 315);
	
	var _UIButton2 = _interopRequireDefault(_UIButton);
	
	var _Transition = __webpack_require__(/*! ../ui/Transition */ 316);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _GameIntroPanel = __webpack_require__(/*! ../ui/GameIntroPanel */ 317);
	
	var _GameIntroPanel2 = _interopRequireDefault(_GameIntroPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Phaser$State) {
	    _inherits(_class, _Phaser$State);
	
	    function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
	        key: "create",
	        value: function create() {
	            // create a background container to add visuals in
	            // we will offset the container on window reize
	            this.backgroundContainer = this.game.add.group();
	
	            // add visuals
	            this.background = this.game.addScreenImage('bg_generic', 0.5, 0.5, this.backgroundContainer, this.game.defaultWidth / 2, this.game.defaultHeight / 2);
	            this.vignette = this.game.addScreenImage('vignette', 0.5, 0.5, this.backgroundContainer, this.game.defaultWidth / 2, this.game.defaultHeight / 2);
	            this.gameLogo = this.game.addScreenImage('logo_gamename', 0.5, 0.5, this.backgroundContainer, this.game.defaultWidth / 2, this.game.height / 2);
	            this.dennisImage = this.game.addScreenImage('char_dennis', 0, 0.5, this.backgroundContainer);
	            this.dennisLogo = this.game.addScreenImage('logo_dennisgnasher', 0.5, 0, this.backgroundContainer, this.game.defaultWidth / 2, 30);
	            this.gnasherImage = this.game.addScreenImage('char_gnasher_home', 1, 1, this.backgroundContainer);
	
	            // add UI
	            this.btnPlay = this.game.addSimpleButton("btn_play", "btn_play_over", this.playGame, this);
	            this.copyright = this.game.addScreenImage('copyright', 1, 1);
	            this.btnHelp = this.game.addSimpleButton("btn_help", "btn_help_over", this.handleHelpButton, this);
	            this.btnSound = this.game.addSoundButton();
	
	            // allow progress to next screen via spacebar
	            this.progressKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	            this.progressKey.onDown.add(this.playGame, this);
	
	            // position screen elements and attach to resize listener
	            this.positionElements();
	            this.game.scale.onSizeChange.add(this.positionElements, this);
	
	            // add transition, and trigger opening
	            this.transition = new _Transition2.default(this.game);
	            this.transition.out();
	            this.startGameMusic();
	            this.tweenInElements();
	        }
	    }, {
	        key: "tweenInElements",
	        value: function tweenInElements() {
	            // set starting points 
	            this.gameLogo.scale.set(0);
	            this.dennisLogo.scale.set(0);
	            this.dennisImage.position.set(this.game.defaultWidth / 2 + 85, this.game.height + this.dennisImage.height);
	            this.gnasherImage.position.set(this.game.defaultWidth / 2 - 125, this.game.height + this.gnasherImage.height);
	
	            // trigger tweens
	            this.game.add.tween(this.dennisLogo.scale).to({ x: 1, y: 1 }, 250, Phaser.Easing.Back.Out, true, 450);
	            this.game.add.tween(this.gameLogo.scale).to({ x: 1, y: 1 }, 250, Phaser.Easing.Back.Out, true, 550);
	            this.game.add.tween(this.dennisImage).to({ y: this.game.defaultHeight / 2 }, 250, Phaser.Easing.Out, true, 250);
	            this.introTween = this.game.add.tween(this.gnasherImage).to({ y: this.game.defaultHeight }, 250, Phaser.Easing.Out, true, 650);
	            this.introTween.onComplete.add(this.handleIntroTweenComplete, this);
	        }
	    }, {
	        key: "handleIntroTweenComplete",
	        value: function handleIntroTweenComplete() {
	            this.game.sounds.playSound("welcome");
	        }
	    }, {
	        key: "positionElements",
	        value: function positionElements() {
	            // position background container to center
	            // and resize vignette to match screen
	            this.backgroundContainer.x = this.game.width / 2 - this.game.defaultWidth / 2;
	            this.backgroundContainer.y = this.game.height / 2 - this.game.defaultHeight / 2;
	
	            this.vignette.width = this.game.width;
	            this.vignette.height = this.game.height;
	
	            //posiiton UI elements
	            this.btnHelp.position.set(69, 75);
	            this.btnPlay.position.set(this.game.width / 2, 603);
	            this.btnSound.position.set(this.game.width - 69, 83);
	            this.copyright.position.set(this.game.width - 20, this.game.height - 10);
	        }
	    }, {
	        key: "handleHelpButton",
	        value: function handleHelpButton() {
	            // shows the game intro popup
	            this.introPanel = new _GameIntroPanel2.default(this.game);
	            this.introPanel.start();
	        }
	    }, {
	        key: "startGameMusic",
	        value: function startGameMusic() {
	            if (this.game.sounds.isSoundPlaying("gameplayloop")) {
	                this.game.sounds.setVolume("gameplayloop", 0.35);
	            } else {
	                this.game.sounds.playBackgroundMusic("gameplayloop", 0.35);
	            }
	        }
	    }, {
	        key: "playGame",
	        value: function playGame() {
	            if (this.game.playCount === 0) {
	                this.game.trackEvent("PLAY_GAME");
	            } else {
	                this.game.trackEvent("REPLAY_GAME_" + this.game.playCount);
	            }
	
	            // attempt background music
	            if (!this.game.sounds.isSoundPlaying("gameplayloop")) {
	                this.startGameMusic();
	            }
	
	            // start transitioon and change state on complete
	            this.transition.onIn.add(this.handleTransitionIn, this);
	            this.transition.in();
	        }
	    }, {
	        key: "handleTransitionIn",
	        value: function handleTransitionIn() {
	            this.transition.onIn.remove(this.handleTransitionIn, this);
	            this.game.state.start("Play", true);
	        }
	    }, {
	        key: "shutdown",
	        value: function shutdown() {
	            // destroy visuals an ui
	            this.backgroundContainer.destroy(true);
	            this.btnHelp.destroy(true);
	            this.btnPlay.destroy(true);
	            this.btnSound.destroy(true);
	            this.copyright.destroy(true);
	
	            // clear up listeners
	            if (this.introTween) {
	                this.introTween.onComplete.remove(this.handleIntroTweenComplete, this);
	            }
	            this.transition.onIn.remove(this.handleTransitionIn, this);
	            this.progressKey.onDown.remove(this.playGame, this);
	            this.game.scale.onSizeChange.remove(this.positionElements);
	        }
	    }]);
	
	    return _class;
	}(Phaser.State);
	
	exports.default = _class;

/***/ }),
/* 315 */
/*!************************************!*\
  !*** ./src/js/display/UIButton.js ***!
  \************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UIButton = function (_Phaser$Sprite) {
	    _inherits(UIButton, _Phaser$Sprite);
	
	    function UIButton(game, texture, size, onClick, scope) {
	        _classCallCheck(this, UIButton);
	
	        var _this = _possibleConstructorReturn(this, (UIButton.__proto__ || Object.getPrototypeOf(UIButton)).call(this, game));
	
	        _this.loadTexture("ui", texture);
	        _this.scale.set(size / _this.height);
	
	        _this.onClick = onClick.bind(scope);
	
	        _this.inputEnabled = true;
	        _this.input.useHandCursor = true;
	        _this.events.onInputUp.add(_this.handleClick, _this);
	
	        return _this;
	    }
	
	    _createClass(UIButton, [{
	        key: "handleClick",
	        value: function handleClick() {
	            this.game.soundController.playAudio("button");
	            this.onClick(this);
	        }
	    }]);
	
	    return UIButton;
	}(Phaser.Sprite);
	
	exports.default = UIButton;

/***/ }),
/* 316 */
/*!*********************************!*\
  !*** ./src/js/ui/Transition.js ***!
  \*********************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Transition = function (_Phaser$Group) {
	    _inherits(Transition, _Phaser$Group);
	
	    function Transition(game) {
	        _classCallCheck(this, Transition);
	
	        var _this = _possibleConstructorReturn(this, (Transition.__proto__ || Object.getPrototypeOf(Transition)).call(this, game));
	
	        _this.stripesRed = [];
	        _this.stripesBlack = [];
	
	        for (var i = 0; i < 5; i++) {
	            var red = _this.game.make.image(0, -130 + i * 212, "trans_red");
	            _this.stripesRed.push(red);
	            _this.addChild(red);
	        }
	
	        var posY = [-25, 180, 405, 584];
	        for (var i = 0; i < 4; i++) {
	            var black = _this.game.make.image(0, posY[i], "trans_black_" + (i + 1));
	            _this.stripesBlack.push(black);
	            _this.addChild(black);
	        }
	
	        _this.onIn = new Phaser.Signal();
	        _this.onOut = new Phaser.Signal();
	
	        _this.vignette = _this.game.addScreenImage('vignette', 0.5, 0.5, _this.backgroundContainer, _this.game.width / 2, _this.game.height / 2);
	        _this.vignette.width = _this.game.width;
	        _this.vignette.height = _this.game.height;
	        _this.speed = 150;
	        return _this;
	    }
	
	    _createClass(Transition, [{
	        key: "in",
	        value: function _in() {
	            this.vignette.alpha = 0;
	
	            for (var i = 0; i < 4; i++) {
	                var stripe = this.stripesBlack[i];
	                stripe.x = 1368;
	                this.game.add.tween(stripe).to({ x: 0 }, this.speed, null, true, i * this.speed / 2);
	            }
	
	            for (var _i = 0; _i < 5; _i++) {
	                var _stripe = this.stripesRed[_i];
	                _stripe.x = -1368;
	                var tween = this.game.add.tween(_stripe).to({ x: 0 }, this.speed, null, true, this.speed / 2 + _i * this.speed / 2);
	
	                if (_i == 4) {
	                    tween.onComplete.add(this.onInComplete, this);
	                }
	            }
	
	            this.game.add.tween(this.vignette).to({ alpha: 1 }, this.speed * 2).start();
	        }
	    }, {
	        key: "onInComplete",
	        value: function onInComplete() {
	            this.onIn.dispatch();
	        }
	    }, {
	        key: "out",
	        value: function out() {
	            this.vignette.alpha = 1;
	
	            for (var i = 0; i < 4; i++) {
	                var stripe = this.stripesBlack[i];
	                stripe.x = 0;
	                this.game.add.tween(stripe).to({ x: -1368 }, this.speed, null, true, this.speed / 2 + i * this.speed / 2);
	            }
	
	            for (var _i2 = 0; _i2 < 5; _i2++) {
	                var _stripe2 = this.stripesRed[_i2];
	                _stripe2.x = 0;
	                var tween = this.game.add.tween(_stripe2).to({ x: 1368 }, this.speed, null, true, _i2 * this.speed / 2);
	
	                if (_i2 == 4) {
	                    tween.onComplete.add(this.onOutComplete, this);
	                }
	            }
	
	            this.game.add.tween(this.vignette).to({ alpha: 0 }, this.speed * 2).start();
	        }
	    }, {
	        key: "onOutComplete",
	        value: function onOutComplete() {
	            this.onOut.dispatch();
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.vignette.destroy();
	            _get(Transition.prototype.__proto__ || Object.getPrototypeOf(Transition.prototype), "destroy", this).call(this, true);
	        }
	    }]);
	
	    return Transition;
	}(Phaser.Group);
	
	exports.default = Transition;

/***/ }),
/* 317 */
/*!*************************************!*\
  !*** ./src/js/ui/GameIntroPanel.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SimpleButton = __webpack_require__(/*! ../ui/SimpleButton */ 318);
	
	var _SimpleButton2 = _interopRequireDefault(_SimpleButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameIntro = function (_Phaser$Group) {
	        _inherits(GameIntro, _Phaser$Group);
	
	        function GameIntro(game) {
	                _classCallCheck(this, GameIntro);
	
	                var _this = _possibleConstructorReturn(this, (GameIntro.__proto__ || Object.getPrototypeOf(GameIntro)).call(this, game));
	
	                _this.x = (1368 - _this.game.width) / 2 * -1;
	                _this.y = 0;
	                _this.onClose = new Phaser.Signal();
	
	                _this.backing = _this.game.make.graphics();
	                _this.backing.beginFill(0x000000, 0.65);
	                _this.backing.drawRect(0, 0, 1368, 720);
	                _this.backing.visible = false;
	                _this.backing.alpha = 0;
	                _this.add(_this.backing);
	
	                _this.backing.inputEnabled = true;
	
	                _this.panel = _this.game.addScreenImage("game_intro_panel", 0, 0.5, _this);
	                _this.panel.position.set(_this.game.width + _this.panel.width, _this.game.height / 2);
	                _this.add(_this.panel);
	
	                _this.btnClose = _this.game.addSimpleButton("btn_close", "btn_close_over", _this.closeIntro, _this, _this);
	                _this.btnClose.position.set(_this.panel.width - _this.btnClose.width / 2, -(_this.panel.height / 2) + _this.btnClose.height / 2);
	                _this.panel.addChild(_this.btnClose);
	
	                _this.dennis = _this.game.make.image(_this.game.width, _this.game.height, "char_dennis");
	                _this.dennis.anchor.set(0, 1);
	                _this.dennis.position.set(_this.game.width + 100, _this.game.height + 50);
	                _this.add(_this.dennis);
	                return _this;
	        }
	
	        _createClass(GameIntro, [{
	                key: "start",
	                value: function start() {
	                        this.backing.visible = true;
	                        this.backing.inputEnabled = true;
	
	                        this.game.add.tween(this.backing).to({ alpha: 1 }, 150, "Linear", true, 0);
	                        this.game.add.tween(this.dennis).to({ x: 100 }, 250, "Linear", true, 150);
	                        this.game.add.tween(this.panel).to({ x: 400 }, 250, "Linear", true, 350);
	                }
	        }, {
	                key: "closeIntro",
	                value: function closeIntro() {
	                        this.backing.inputEnabled = false;
	                        var closeTween = this.game.add.tween(this.backing).to({ alpha: 0 }, 550, "Linear", true, 0);
	                        this.game.add.tween(this.dennis).to({ x: -this.game.width }, 250, "Linear", true, 0);
	                        this.game.add.tween(this.panel).to({ x: -this.game.width }, 250, "Linear", true, 250);
	
	                        closeTween.onComplete.addOnce(this.completeIntro, this);
	                }
	        }, {
	                key: "completeIntro",
	                value: function completeIntro() {
	                        this.onClose.dispatch();
	                }
	        }]);
	
	        return GameIntro;
	}(Phaser.Group);
	
	exports.default = GameIntro;

/***/ }),
/* 318 */
/*!***********************************!*\
  !*** ./src/js/ui/SimpleButton.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SimpleButton = function (_Phaser$Button) {
	    _inherits(SimpleButton, _Phaser$Button);
	
	    function SimpleButton(game, x, y, up, over) {
	        _classCallCheck(this, SimpleButton);
	
	        //this.loadTexture('buttons', up);
	        var _this = _possibleConstructorReturn(this, (SimpleButton.__proto__ || Object.getPrototypeOf(SimpleButton)).call(this, game, x, y, 'buttons'));
	
	        _this.setFrames(over, up, up, up);
	        _this.anchor.set(0.5);
	
	        _this.out = up;
	        _this.over = over;
	        _this.isOver = false;
	        _this.input.useHandCursor = true;
	
	        _this.onInputDown.add(_this.onDown, _this);
	
	        _this.game.time.events.add(1, _this.init, _this);
	
	        return _this;
	    }
	
	    _createClass(SimpleButton, [{
	        key: "init",
	        value: function init() {
	            this.onInputOver.add(this.onOver, this);
	            this.onInputOut.add(this.onOut, this);
	
	            var mx = this.game.input.activePointer.x;
	            var my = this.game.input.activePointer.y;
	            if (this.getBounds().contains(mx, my)) {
	                // this.onOver();
	            } else {
	                    // this.onOut();
	                }
	        }
	    }, {
	        key: "onDown",
	        value: function onDown() {
	            // this.loadTexture('buttons', this.out);
	            this.game.sounds.playSoundEffect("click");
	        }
	    }, {
	        key: "onOver",
	        value: function onOver() {
	            // if (!this.game.data.isMobile)
	            // {
	            //     this.isOver = true;
	            //     if (this.over)
	            //     {
	            //         this.loadTexture('buttons', this.over);
	            //     }
	            // }
	        }
	    }, {
	        key: "onOut",
	        value: function onOut() {
	            // this.isOver = false;
	            // this.loadTexture('buttons', this.out);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.onInputOver.remove(this.onOver, this);
	            this.onInputOut.remove(this.onOut, this);
	            this.onInputDown.remove(this.onDown, this);
	            _get(SimpleButton.prototype.__proto__ || Object.getPrototypeOf(SimpleButton.prototype), "destroy", this).call(this);
	        }
	    }]);
	
	    return SimpleButton;
	}(Phaser.Button);
	
	exports.default = SimpleButton;

/***/ }),
/* 319 */
/*!************************************!*\
  !*** ./src/js/states/StatePlay.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _LandscapeLayer = __webpack_require__(/*! ../display/LandscapeLayer */ 320);
	
	var _LandscapeLayer2 = _interopRequireDefault(_LandscapeLayer);
	
	var _GameLayer = __webpack_require__(/*! ../display/GameLayer */ 321);
	
	var _GameLayer2 = _interopRequireDefault(_GameLayer);
	
	var _Section = __webpack_require__(/*! ../display/Section */ 322);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	var _Hero = __webpack_require__(/*! ../objects/Hero */ 330);
	
	var _Hero2 = _interopRequireDefault(_Hero);
	
	var _ControllerKeyboard = __webpack_require__(/*! ../controller/ControllerKeyboard */ 331);
	
	var _ControllerKeyboard2 = _interopRequireDefault(_ControllerKeyboard);
	
	var _SwipeController = __webpack_require__(/*! ../controller/SwipeController */ 332);
	
	var _SwipeController2 = _interopRequireDefault(_SwipeController);
	
	var _ControllerCamera = __webpack_require__(/*! ../controller/ControllerCamera */ 333);
	
	var _ControllerCamera2 = _interopRequireDefault(_ControllerCamera);
	
	var _GameHeroScoreDisplay = __webpack_require__(/*! ../display/GameHeroScoreDisplay */ 334);
	
	var _GameHeroScoreDisplay2 = _interopRequireDefault(_GameHeroScoreDisplay);
	
	var _BoundsDebugger = __webpack_require__(/*! ../display/BoundsDebugger */ 335);
	
	var _BoundsDebugger2 = _interopRequireDefault(_BoundsDebugger);
	
	var _GameEvents = __webpack_require__(/*! ../utils/GameEvents */ 336);
	
	var _GameEvents2 = _interopRequireDefault(_GameEvents);
	
	var _Transition = __webpack_require__(/*! ../ui/Transition */ 316);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _GameHud = __webpack_require__(/*! ../ui/GameHud */ 337);
	
	var _GameHud2 = _interopRequireDefault(_GameHud);
	
	var _GameIntroPanel = __webpack_require__(/*! ../ui/GameIntroPanel */ 317);
	
	var _GameIntroPanel2 = _interopRequireDefault(_GameIntroPanel);
	
	var _TutorialController = __webpack_require__(/*! ../controller/TutorialController */ 342);
	
	var _TutorialController2 = _interopRequireDefault(_TutorialController);
	
	var _IntroAnimController = __webpack_require__(/*! ../controller/IntroAnimController */ 343);
	
	var _IntroAnimController2 = _interopRequireDefault(_IntroAnimController);
	
	var _SceneryLayerTwo = __webpack_require__(/*! ../display/SceneryLayerTwo */ 345);
	
	var _SceneryLayerTwo2 = _interopRequireDefault(_SceneryLayerTwo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LAYER_SKY = 0;
	var LAYER_BACKGROUND_01 = 1;
	var LAYER_BACKGROUND_02 = 2;
	var LAYER_BACKGROUND_03 = 3;
	var LAYER_GAME = 4;
	var LAYER_GROUND = 5;
	
	var StatePlay = function (_Phaser$State) {
	    _inherits(StatePlay, _Phaser$State);
	
	    function StatePlay() {
	        _classCallCheck(this, StatePlay);
	
	        return _possibleConstructorReturn(this, (StatePlay.__proto__ || Object.getPrototypeOf(StatePlay)).apply(this, arguments));
	    }
	
	    _createClass(StatePlay, [{
	        key: "create",
	        value: function create() {
	            this.game.playCount++;
	
	            // create some events
	            this.game.events = this.game.events || new _GameEvents2.default(this.game);
	
	            // attach to events
	            this.game.events.onCoinCollected.add(this.handleCoinCollected, this);
	            this.game.events.onClockCollected.add(this.handleClockCollected, this);
	            this.game.events.onSectionRequired.add(this.addGameSection, this);
	            this.game.events.onSectionRemoved.add(this.handleSectionRemoved, this);
	            this.game.events.onIntroPanelClosed.add(this.handleIntroPanelClosed, this);
	
	            // game container
	            this.container = this.game.make.group();
	            this.game.add.existing(this.container);
	
	            // calculate points per millisecond on doing tricks        
	            this.scoreTricksPerMS = this.game.data.config.trick_points_per_second / 1000;
	            this.grindPointsPerMS = this.game.data.config.grind_points_per_second / 1000;
	
	            // create the game sections
	            this.initSections();
	
	            // create game layers...
	
	            // drop a sky gradient
	            var skyGradient = this.game.make.bitmapData(this.game.data.config.width, this.game.data.config.height);
	            var grd = skyGradient.context.createLinearGradient(0, 0, 0, skyGradient.height);
	            grd.addColorStop(0, "#67D2F0");
	            grd.addColorStop(0.3, "#B1F1EB");
	            skyGradient.context.fillStyle = grd;
	            skyGradient.context.fillRect(0, 0, skyGradient.width, skyGradient.height);
	            skyGradient.update();
	            var skyGradientImage = this.game.make.image(0, 0, skyGradient);
	            skyGradientImage.fixedToCamera = true;
	            this.container.addChild(skyGradientImage);
	
	            // set our environments
	            this.environments = this.game.data.config.game_environments;
	            this.enviroment = 0;
	
	            this.layers = [];
	            this.layers[LAYER_SKY] = new _LandscapeLayer2.default(this.game, "landscape", "background_layer_00000", 0.025, this.game.height, this.game.height, 75);
	            this.layers[LAYER_BACKGROUND_01] = new _SceneryLayerTwo2.default(this.game, this.game.data.config.game_layers.background_1, this.environments[this.enviroment], 0.25, this.game.height, this.game.data.config.height, this.game.height - this.game.data.config.ground_height - 90, null, 2);
	            this.layers[LAYER_BACKGROUND_02] = new _SceneryLayerTwo2.default(this.game, this.game.data.config.game_layers.background_2, this.environments[this.enviroment], 0.5, this.game.height, this.game.data.config.height, this.game.height - this.game.data.config.ground_height - 60, null, 2);
	            this.layers[LAYER_BACKGROUND_03] = new _SceneryLayerTwo2.default(this.game, this.game.data.config.game_layers.background_3, this.environments[this.enviroment], 0.8, this.game.height, this.game.data.config.height, this.game.height - this.game.data.config.ground_height);
	            this.layers[LAYER_GAME] = new _GameLayer2.default(this.game, this.game.data.config.height, this.game.data.config.ground_height, this.game.height, this);
	            this.layers[LAYER_GROUND] = new _SceneryLayerTwo2.default(this.game, this.game.data.config.game_layers.forground, this.environments[this.enviroment], 1, this.game.height, this.game.data.config.height, this.game.height, true);
	
	            for (var i in this.layers) {
	                this.container.addChild(this.layers[i]);
	            }
	
	            this.layers[LAYER_GROUND].onEnvironmentChanged.add(this.handleEnvironmentChanged, this);
	
	            // create our hero
	            this.hero = new _Hero2.default(this.game, -this.game.width, 5, this.game.data.config.speed, this.game.data.config.height, this.game.data.config.ground_height);
	            this.layers[LAYER_GAME].addHero(this.hero);
	            this.game.add.existing(this.hero);
	            this.game.add.existing(this.layers[LAYER_GROUND]);
	
	            // attach to hero listeners
	            this.hero.onGrindStart.add(this.handleGrindStart, this);
	            this.hero.onGrindEnd.add(this.handleGrindEnd, this);
	            this.hero.onTrickStart.add(this.handleTrickStart, this);
	            this.hero.onTrickEnd.add(this.handleTrickEnd, this);
	            this.hero.onLanded.add(this.handleHeroLanded, this);
	            this.hero.onStopped.add(this.endGame, this);
	            this.hero.onDead.add(this.handleHeroDead, this);
	
	            // attach trick score display to hero
	            this.heroScoreDisplay = new _GameHeroScoreDisplay2.default(this.game, this.hero);
	            this.heroScoreDisplay.visible = false;
	            this.lastTrickEndTime = 0;
	            this.allowNewSections = false;
	
	            this.game.add.existing(this.heroScoreDisplay);
	
	            // control our hero
	            this.keyboardController = new _ControllerKeyboard2.default(this.game, this.hero);
	            if (this.game.touchEnabled) {
	                this.swipeController = new _SwipeController2.default(this.game, this.hero);
	                this.swipeController.activate();
	            }
	
	            // something to follow hero around
	            this.camera = new _ControllerCamera2.default(this.game, this.hero, this.container);
	
	            // game needs a hud
	            this.hud = new _GameHud2.default(this.game);
	            this.hud.fixedToCamera = true;
	            this.game.onGamePaused.add(this.handleGamePaused, this);
	            this.game.onGameResumed.add(this.handleGameResume, this);
	
	            // we need to know where in the world we are
	            this.worldPosition = 0;
	
	            // create debug container if we want to debug collisions
	            if (false) {
	                this.game.boundsDebugger = new _BoundsDebugger2.default(this.game);
	                this.game.add.existing(this.game.boundsDebugger);
	            }
	
	            this.reset();
	            this.updateAllLayers();
	
	            // attach transition for trans out
	            this.transition = new _Transition2.default(this.game);
	            this.transition.onOut.addOnce(this.handleScreenTransitionOutComplete, this);
	            this.transition.out();
	
	            this.game.sounds.setVolume("gameplayloop", 0.07);
	        }
	    }, {
	        key: "handleScreenTransitionOutComplete",
	        value: function handleScreenTransitionOutComplete() {
	            // initiate tutorial mode if required
	            if (!this.game.getCookie('intro_shown')) {
	                this.introPanel = new _GameIntroPanel2.default(this.game);
	                this.introPanel.onClose.addOnce(this.startGameIntroAnimation, this);
	                this.introPanel.start();
	
	                this.game.setCookie('intro_shown', true);
	            } else {
	                this.startGameIntroAnimation();
	            }
	        }
	    }, {
	        key: "handleGamePaused",
	        value: function handleGamePaused() {
	            this.isPaused = true;
	            this.timePaused = new Date().getTime();
	            this.game.tweens.pauseAll();
	            this.hero.pause();
	            for (var i in this.layers) {
	                this.layers[i].paused = true;
	            }
	        }
	    }, {
	        key: "handleGameResume",
	        value: function handleGameResume() {
	            this.game.tweens.resumeAll();
	            for (var i in this.layers) {
	                this.layers[i].paused = false;
	            }
	            this.hero.resume();
	
	            this.timeCurrent = new Date().getTime();
	            this.timePrevious += this.timeCurrent - this.timePaused;
	
	            this.isPaused = false;
	        }
	
	        /*
	        ======================================================================================================
	            INTRO ANIMATION MANAGEMENT
	        ======================================================================================================
	        */
	
	    }, {
	        key: "startGameIntroAnimation",
	        value: function startGameIntroAnimation() {
	            this.GameIntroAnimation = new _IntroAnimController2.default(this.game, this.hero);
	            this.GameIntroAnimation.onIntroComplete.add(this.handleIntroComplete, this);
	            this.GameIntroAnimation.start();
	        }
	    }, {
	        key: "handleIntroComplete",
	        value: function handleIntroComplete() {
	            this.game.getCookie("tutorial_completed") ? this.startGame() : this.startTutorial();
	        }
	
	        /*
	        ======================================================================================================
	            TUTORIAL MANAGEMENT
	        ======================================================================================================
	        */
	
	    }, {
	        key: "startTutorial",
	        value: function startTutorial() {
	            this.game.sounds.playSound("tutorialstart");
	            this.game.trackEvent("TUTORIAL_START");
	
	            this.tutorialController = new _TutorialController2.default(this.game, this.hero);
	            this.tutorialController.fixedToCamera = true;
	            this.tutorialController.addTutorialSection.add(this.addToGameLayer, this);
	            this.tutorialController.onTutorialCompleted.add(this.handleTutorialComplete, this);
	            this.tutorialController.activate();
	            this.isTutorial = true;
	        }
	    }, {
	        key: "handleTutorialComplete",
	        value: function handleTutorialComplete() {
	            this.game.trackEvent("TUTORIAL_COMPLETE");
	            this.tutorialController.addTutorialSection.remove(this.addToGameLayer);
	            this.tutorialController.onTutorialCompleted.remove(this.handleTutorialComplete);
	            this.game.world.remove(this.tutorialController);
	            this.game.setCookie("tutorial_completed", true);
	            this.startGame();
	        }
	
	        /*
	        ======================================================================================================
	           START GAME
	        ======================================================================================================
	        */
	
	    }, {
	        key: "reset",
	        value: function reset() {
	            this.obstaclesAvailable = this.shuffledObstacles(this.game.data.levelSections.obstacles);
	            this.timeRemaining = this.game.data.config.start_time * 1000;
	            this.nextEnvironmentSwitch = this.game.data.config.enviroment_switch;
	            this.timeCurrent = new Date().getTime();
	            this.timePrevious = this.timeCurrent;
	            this.hero.canJump = false;
	            this.hero.canTrick = false;
	            this.hero.canGrind = false;
	            this.awaitingEnvironmentSwitch = false;
	            this.awaitingGameSection = false;
	            this.scoreTotal = 0;
	            this.scoreTricks = 0;
	            this.multiplier = 1;
	            this.allowNewSections = false;
	            this.prevSectionID = -1;
	            this.lastTimePickup = 0;
	        }
	    }, {
	        key: "shuffledObstacles",
	        value: function shuffledObstacles(array) {
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
	        key: "startGame",
	        value: function startGame() {
	            // set timestamps
	            this.timeCurrent = new Date().getTime();
	            this.timePrevious = this.timeCurrent;
	            this.timeTotal = 0;
	
	            // fully activate hero
	            this.hero.canJump = true;
	            this.hero.canTrick = true;
	            this.hero.canGrind = true;
	
	            // activate game sections
	            this.allowNewSections = true;
	            this.isTutorial = false;
	            this.lastTimePickup = this.timeCurrent;
	
	            this.nextEnvironmentSwitch = this.worldPosition + this.game.data.config.enviroment_switch;
	
	            this.hud.revealHud();
	
	            this.hero.start();
	
	            // show hud and drop new sectiom
	            this.addGameSection();
	        }
	
	        /*
	        =======================================================================================
	            HANDLE GAME EVENTS
	        =======================================================================================
	        */
	
	    }, {
	        key: "handleIntroPanelClosed",
	        value: function handleIntroPanelClosed() {
	            this.startGameIntroAnimation();
	        }
	    }, {
	        key: "handleCoinCollected",
	        value: function handleCoinCollected() {
	            this.addToScore(this.game.data.config.points_per_coin);
	            this.game.sounds.playSound("pickupcoin");
	        }
	    }, {
	        key: "handleClockCollected",
	        value: function handleClockCollected() {
	            this.timeRemaining += this.game.data.config.time_bonus;
	            this.lastTimePickup = new Date().getTime();
	            this.game.sounds.playSound("pickuptime");
	        }
	    }, {
	        key: "handleTrickStart",
	        value: function handleTrickStart() {
	            this.setMultiplier(this.multiplier + 1);
	        }
	    }, {
	        key: "handleTrickEnd",
	        value: function handleTrickEnd() {}
	    }, {
	        key: "handleGrindStart",
	        value: function handleGrindStart() {
	            this.setMultiplier(this.multiplier + 1);
	        }
	    }, {
	        key: "handleGrindEnd",
	        value: function handleGrindEnd() {}
	    }, {
	        key: "handleSectionRemoved",
	        value: function handleSectionRemoved() {}
	    }, {
	        key: "handleHeroLanded",
	        value: function handleHeroLanded() {
	
	            this.setMultiplier(1);
	            this.scoreTricks = 0;
	            this.heroScoreDisplay.visible = false;
	        }
	    }, {
	        key: "handleEnvironmentChanged",
	        value: function handleEnvironmentChanged() {
	            // the game envirmnement has changed
	            // if the hero is grounded, throw in a push animation
	            if (!this.hero.isGrinding && !this.hero.isJumping && !this.hero.isPerformingTrick) {
	                this.hero.push();
	            }
	
	            // disable wait flag
	            this.awaitingEnvironmentSwitch = false;
	
	            // if a new section is required, add it
	            if (this.awaitingGameSection) {
	                this.awaitingGameSection = false;
	                this.addGameSection();
	            }
	        }
	    }, {
	        key: "handleHeroDead",
	        value: function handleHeroDead() {
	            var bounds = this.hero.getWorldBounds();
	            this.wipeout = this.game.make.sprite();
	            this.wipeout.angle = 90;
	            this.wipeout.scale.set(2.5);
	            this.wipeout.anchor.set(0.5);
	            this.wipeout.loadTexture("skater_wipeout");
	            this.wipeout.position.set(bounds.x + bounds.width, bounds.y + bounds.height / 2);
	            this.wipeout.animations.add("play");
	            this.wipeout.animations.play("play", 24, false);
	            this.game.add.existing(this.wipeout);
	            this.camera.shake();
	            this.game.sounds.playSound("collision");
	        }
	    }, {
	        key: "addToScore",
	        value: function addToScore(value) {
	            if (this.isTutorial) {
	                return;
	            }
	
	            this.scoreTotal += value;
	            this.hud.setScore(Math.ceil(this.scoreTotal));
	        }
	    }, {
	        key: "initSections",
	        value: function initSections() {
	            var _this2 = this;
	
	            // apply main game sections
	            this.urbanSections = [];
	            this.game.data.levelSections.urban.map(function (section) {
	                _this2.urbanSections.push(new _Section2.default(_this2.game, section, _this2.game.data.config.height));
	            });
	            if (this.urbanSections.length === 1) {
	                this.urbanSections[1] = new _Section2.default(this.game, this.game.data.levelSections.urban[0], this.game.data.config.height);
	            }
	            //
	            this.parkSections = [];
	            this.game.data.levelSections.park.map(function (section) {
	                _this2.parkSections.push(new _Section2.default(_this2.game, section, _this2.game.data.config.height));
	            });
	            if (this.parkSections.length === 1) {
	                this.parkSections[1] = new _Section2.default(this.game, this.game.data.levelSections.park[0], this.game.data.config.height);
	            }
	        }
	
	        /*
	        ======================================================================================================
	           MANAGE GAME SECTIONS
	        ======================================================================================================
	        */
	
	    }, {
	        key: "addGameSection",
	        value: function addGameSection() {
	
	            if (this.allowNewSections && this.awaitingGameSection === false) {
	                this.updateGameEnvironment();
	
	                if (this.awaitingEnvironmentSwitch) {
	                    // the game is waiting for the environement to change
	                    // tell the game to request a new section when environement changes
	                    this.awaitingGameSection = true;
	                } else {
	                    var sections = this.enviroment === 0 ? this.urbanSections : this.parkSections;
	
	                    // set i to previous section
	                    var i = this.prevSectionID;
	                    // while i matches current section, grab another one at random
	                    while (i === this.prevSectionID) {
	                        i = Math.floor(Math.random() * sections.length);
	                    }
	                    // set previous section id to i for next update check  
	                    this.prevSectionID = i;
	                    // add the next section to game
	                    this.addToGameLayer(sections[i]);
	                }
	            }
	        }
	    }, {
	        key: "addToGameLayer",
	        value: function addToGameLayer(section) {
	            // parse the section for obstacles
	            for (var i = 0; i < section.obstacles.length; i++) {
	                section.obstacles[i].resetObstacle(this.obstaclesAvailable[0]);
	                this.obstaclesAvailable.push(this.obstaclesAvailable.shift());
	            }
	
	            // add the section to the game layer then actvate it
	            this.layers[LAYER_GAME].addSection(section);
	            section.start(new Date().getTime() - this.lastTimePickup > this.game.data.config.time_bonus_delay);
	        }
	
	        /*
	        ==========================================================================================================
	        UPDATE
	        ==========================================================================================================
	        */
	
	    }, {
	        key: "update",
	        value: function update() {
	
	            if (this.isPaused || !this.hero.started) {
	                return;
	            }
	
	            if (false) {
	                this.game.boundsDebugger.clearGraphics();
	            }
	
	            // update timesetps
	            this.timeCurrent = new Date().getTime();
	            this.deltaTime = this.timeCurrent - this.timePrevious;
	            this.timePrevious = this.timeCurrent;
	            this.timeTotal += this.deltaTime;
	
	            if (this.hero) {
	                this.hero.updateHero();
	                this.updateAllLayers();
	
	                this.camera.updateCamera();
	
	                // run game updates for non-dead status
	                if (!this.hero.isDead && !this.isTutorial) {
	                    this.checkIfHeroIsPerformingTrick();
	                    this.updateGameTimeRemaining();
	                } else if (this.wipeout) {
	                    this.wipeout.x -= this.hero.speedX;
	                }
	
	                // if our hero is dead, has he fallen out of the screen?
	                if (this.hero.isDead && this.hero.y > this.game.height * 1.5) {
	                    this.endGame();
	                }
	            }
	        }
	    }, {
	        key: "updateAllLayers",
	        value: function updateAllLayers() {
	            // update the core game layer
	            this.layers[LAYER_GAME].updateLayer();
	            this.worldPosition += this.hero.speedX;
	
	            // loop through and update all layer psoitions
	            for (var i = 0; i < this.layers.length; i++) {
	                this.layers[i].layerPosition(this.worldPosition, 0);
	            }
	
	            var heroHeightPercent = Math.abs(this.game.camera.y) / 250;
	            this.layers[LAYER_SKY].y = -(100 * heroHeightPercent);
	            this.layers[LAYER_BACKGROUND_01].y = this.layers[LAYER_BACKGROUND_01].initY - 75 * heroHeightPercent;
	            this.layers[LAYER_BACKGROUND_02].y = this.layers[LAYER_BACKGROUND_02].initY - 50 * heroHeightPercent;
	        }
	    }, {
	        key: "updateGameEnvironment",
	        value: function updateGameEnvironment() {
	            var _this3 = this;
	
	            if (this.worldPosition >= this.nextEnvironmentSwitch) {
	                this.nextEnvironmentSwitch = this.worldPosition + this.game.data.config.enviroment_switch;
	                this.enviroment++;
	                if (this.enviroment >= this.environments.length) {
	                    this.enviroment = 0;
	                }
	                this.layers.forEach(function (layer) {
	                    if (layer.setLayerStage) {
	                        layer.setLayerStage(_this3.environments[_this3.enviroment], true);
	                    }
	                });
	
	                this.awaitingEnvironmentSwitch = true;
	            }
	
	            return this.awaitingEnvironmentSwitch;
	        }
	
	        /*
	        ==========================================================================================================
	            TIME MANAGEMENT
	        ==========================================================================================================
	        */
	
	    }, {
	        key: "updateGameTimeRemaining",
	        value: function updateGameTimeRemaining() {
	            if (this.allowNewSections && !this.hero.timeOut) {
	                // decrease time 
	                this.timeRemaining -= this.deltaTime;
	
	                // if time epires, then game is over
	                if (this.timeRemaining <= 0) {
	                    this.game.trackEvent("GAME_OVER_TIMEOUT");
	                    this.timoutGame();
	                }
	
	                // update ui
	                this.hud.setTime(Math.round(this.timeRemaining / 1000));
	            }
	        }
	    }, {
	        key: "timoutGame",
	        value: function timoutGame() {
	            this.timeRemaining = 0;
	            this.hero.RollToStop();
	            this.hud.showTimeup();
	        }
	
	        /*
	        ==========================================================================================================
	            TRICK MANAGEMENT
	        ==========================================================================================================
	        */
	
	    }, {
	        key: "checkIfHeroIsPerformingTrick",
	        value: function checkIfHeroIsPerformingTrick() {
	            // if the hero is performing a trick
	            if (this.hero.isPerformingTrick) {
	                // increment points based on trickpoints per second * multiplier
	                this.addToTrickPoints(this.scoreTricksPerMS * this.deltaTime);
	            }
	            // if the hero is grinding
	            else if (this.hero.isGrinding) {
	                    // increment points based on grind points per second * multiplier
	                    this.addToTrickPoints(this.grindPointsPerMS * this.deltaTime);
	                }
	        }
	    }, {
	        key: "addToTrickPoints",
	        value: function addToTrickPoints(value) {
	            var increment = value * this.multiplier;
	            this.scoreTricks += increment;
	            this.addToScore(increment);
	            this.heroScoreDisplay.visible = true;
	            this.heroScoreDisplay.setValue(Math.round(this.scoreTricks), this.multiplier);
	        }
	    }, {
	        key: "setMultiplier",
	        value: function setMultiplier(value) {
	            if (!this.isTutorial && value != this.multiplier) {
	                this.multiplier = value;
	                this.hud.setMultiplier(this.multiplier);
	            }
	        }
	
	        /*
	        ==========================================================================================================
	            GAME END
	        ==========================================================================================================
	        */
	
	    }, {
	        key: "endGame",
	        value: function endGame() {
	            if (!this.endingGame) {
	
	                if (this.isTutorial) {
	                    this.game.trackEvent("TUTORIAL_FAILED");
	                }
	
	                this.endingGame = true;
	                this.game.add.existing(this.transition);
	                this.game.world.bringToTop(this.transition);
	                this.transition.onIn.add(this.endState, this);
	                this.transition.in();
	
	                if (this.wipeout) {
	                    this.game.sounds.playSound("failwipeout", false, 1);
	                } else {
	                    this.game.sounds.playSound("gameend_timeout", false, 1);
	                }
	            }
	        }
	    }, {
	        key: "endState",
	        value: function endState() {
	            this.transition.onIn.remove(this.endState, this);
	            // if we die in tutorial mode - just reset the tutorial, otehrwise it's a default gameend
	            this.game.state.start(this.isTutorial ? "Reset" : "Complete", true, false, { score: Math.ceil(this.scoreTotal), timeout: this.timeRemaining <= 0 });
	        }
	    }, {
	        key: "shutdown",
	        value: function shutdown() {
	            this.handleGameResume();
	            this.game.onGamePaused.remove(this.handleGamePaused, this);
	            this.game.onGameResumed.remove(this.handleGameResume, this);
	            this.game.events.onCoinCollected.remove(this.handleCoinCollected, this);
	            this.game.events.onClockCollected.remove(this.handleClockCollected, this);
	            this.game.events.onSectionRequired.remove(this.addGameSection, this);
	            this.game.events.onSectionRemoved.remove(this.handleSectionRemoved, this);
	            this.game.events.onIntroPanelClosed.remove(this.handleIntroPanelClosed, this);
	            this.hero.onGrindStart.remove(this.handleGrindStart, this);
	            this.hero.onGrindEnd.remove(this.handleGrindEnd, this);
	            this.hero.onTrickStart.remove(this.handleTrickStart, this);
	            this.hero.onTrickEnd.remove(this.handleTrickEnd, this);
	            this.hero.onLanded.remove(this.handleHeroLanded, this);
	            this.hero.onStopped.remove(this.endGame, this);
	            this.hero.onDead.remove(this.handleHeroDead, this);
	
	            this.game.sounds.stopSound("skate");
	
	            if (this.GameIntroAnimation) {
	                this.GameIntroAnimation.destroy();
	            }
	
	            // clean up all event listeners
	            if (this.wipeout) {
	                this.wipeout.destroy();
	                this.wipeout = null;
	            }
	            this.endingGame = null;
	            this.hud.destroy();
	        }
	    }]);
	
	    return StatePlay;
	}(Phaser.State);
	
	exports.default = StatePlay;

/***/ }),
/* 320 */
/*!******************************************!*\
  !*** ./src/js/display/LandscapeLayer.js ***!
  \******************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LandscapeLayer = function (_Phaser$Group) {
	    _inherits(LandscapeLayer, _Phaser$Group);
	
	    function LandscapeLayer(game, texture, frame, scrollRatio, screenHeight, height, y) {
	        _classCallCheck(this, LandscapeLayer);
	
	        var _this = _possibleConstructorReturn(this, (LandscapeLayer.__proto__ || Object.getPrototypeOf(LandscapeLayer)).call(this, game));
	
	        if (frame == "background_layer_10000") {
	            _this.traceTest = true;
	        }
	
	        _this.assetY = y || 0;
	        _this.scrollRatio = scrollRatio;
	        _this.screenHeight = screenHeight;
	
	        _this.layerWidth = 0;
	        while (_this.layerWidth < _this.game.width * 3) {
	            var image = _this.game.make.image();
	            image.loadTexture(texture, frame);
	
	            image.y = _this.assetY;
	            image.x = _this.layerWidth - 5;
	            _this.loopWidth = image.width;
	            _this.layerWidth += image.width - 5;
	            _this.layerHeight = height || image.height;
	
	            _this.add(image);
	        }
	
	        _this.posX = 0;
	        _this.posY = 0;
	        return _this;
	    }
	
	    _createClass(LandscapeLayer, [{
	        key: "remove",
	        value: function remove() {
	            this.removeAll(true);
	            this.asset1 = null;
	            this.asset2 = null;
	            _get(LandscapeLayer.prototype.__proto__ || Object.getPrototypeOf(LandscapeLayer.prototype), "destroy", this).call(this, true);
	        }
	    }, {
	        key: "updateCanvasSize",
	        value: function updateCanvasSize(width, height) {
	            this.screenHeight = height;
	            this.y = this.posY * (this.layerHeight - this.screenHeight);
	            this.x = this.posX;
	        }
	    }, {
	        key: "layerPosition",
	        value: function layerPosition(x, y) {
	            this.posX = -x * this.scrollRatio % this.loopWidth;
	            this.posY = y;
	            this.x = this.posX;
	            this.y = this.posY * (this.layerHeight - this.screenHeight);
	        }
	    }]);
	
	    return LandscapeLayer;
	}(Phaser.Group);
	
	exports.default = LandscapeLayer;

/***/ }),
/* 321 */
/*!*************************************!*\
  !*** ./src/js/display/GameLayer.js ***!
  \*************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameLayer = function (_Phaser$Group) {
	    _inherits(GameLayer, _Phaser$Group);
	
	    function GameLayer(game, height, groundHeight, screenHeight) {
	        _classCallCheck(this, GameLayer);
	
	        var _this = _possibleConstructorReturn(this, (GameLayer.__proto__ || Object.getPrototypeOf(GameLayer)).call(this, game));
	
	        _this.m_height = height;
	        _this.m_groundHeight = groundHeight;
	        _this.m_screenH = screenHeight;
	        _this.m_sections = new Array();
	        return _this;
	    }
	
	    _createClass(GameLayer, [{
	        key: "destroy",
	        value: function destroy() {
	            this.removeAll(true);
	            this.m_sections = null;
	            _get(GameLayer.prototype.__proto__ || Object.getPrototypeOf(GameLayer.prototype), "destroy", this).call(this, true);
	        }
	    }, {
	        key: "getLastSectionX",
	        value: function getLastSectionX() {
	            var last = this.m_sections[this.m_sections.length - 1];
	            if (last) {
	                return last.x + last.info.length;
	            }
	            return 0;
	        }
	    }, {
	        key: "addSection",
	        value: function addSection(section) {
	            section.x = Math.max(this.getLastSectionX(), this.game.width * 1.25 + Math.abs(this.x));
	            section.reset();
	
	            this.m_sections.push(section);
	            this.addChildAt(section, 0);
	        }
	    }, {
	        key: "addHero",
	        value: function addHero(hero) {
	            this.m_hero = hero;
	
	            //this.add(hero);
	        }
	    }, {
	        key: "updateLayer",
	        value: function updateLayer() {
	            for (var i = 0; i < this.m_sections.length; i++) {
	                this.m_sections[i].updateSection(this.m_hero);
	            }
	        }
	    }, {
	        key: "updateCanvasSize",
	        value: function updateCanvasSize(width, height) {
	            this.m_screenH = height;
	        }
	    }, {
	        key: "layerPosition",
	        value: function layerPosition(x, y) {
	            this.x = -x;
	            this.y = -y * (this.m_height - this.m_screenH);
	
	            //move sections
	
	            var end;
	            for (var i = 0; i < this.m_sections.length; i++) {
	                var section = this.m_sections[i];
	                end = this.x + section.x + section.info.length;
	                //remove section if out of the screen
	                if (end < 0) {
	                    this.m_sections.splice(i, 1);
	                    this.removeChild(section);
	                    section.close();
	                    i--;
	                    this.game.events.onSectionRemoved.dispatch(section);
	                }
	            }
	
	            //add section if end is
	            //var width = this.game.width * 3;
	            //end = this.x + this.getLastSectionX();
	            if (end < this.game.width * 1.25 / this.game.camera.zoomScale) {
	                // this.game.paused = true;
	                this.game.events.onSectionRequired.dispatch();
	            }
	        }
	    }, {
	        key: "onTransformHero",
	        value: function onTransformHero(heroType) {
	            for (var i = 0; i < this.m_sections.length; i++) {
	                this.m_sections[i].updateCustomObjects(heroType, Main.s_stage.canvas.width);
	            }
	        }
	    }]);
	
	    return GameLayer;
	}(Phaser.Group);
	
	exports.default = GameLayer;

/***/ }),
/* 322 */
/*!***********************************!*\
  !*** ./src/js/display/Section.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Wall = __webpack_require__(/*! ../objects/Wall */ 323);
	
	var _Wall2 = _interopRequireDefault(_Wall);
	
	var _Coin = __webpack_require__(/*! ../objects/Coin */ 326);
	
	var _Coin2 = _interopRequireDefault(_Coin);
	
	var _Clock = __webpack_require__(/*! ../objects/Clock */ 327);
	
	var _Clock2 = _interopRequireDefault(_Clock);
	
	var _Obstacle = __webpack_require__(/*! ../objects/Obstacle */ 328);
	
	var _Obstacle2 = _interopRequireDefault(_Obstacle);
	
	var _Furniture = __webpack_require__(/*! ../objects/Furniture */ 329);
	
	var _Furniture2 = _interopRequireDefault(_Furniture);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Section = function (_Phaser$Group) {
	    _inherits(Section, _Phaser$Group);
	
	    function Section(game, info, levelHeight) {
	        _classCallCheck(this, Section);
	
	        var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, game));
	
	        _this.game = game;
	        _this.info = info;
	        _this.objects = [];
	        _this.messages = info.messages || [];
	        _this.props = info.props || {};
	
	        //add walls
	        if (info.walls) {
	            for (var i = 0; i < info.walls.length; i++) {
	                var d = info.walls[i];
	                var wall = new _Wall2.default(_this.game, d, d.x, d.y);
	                _this.addChild(wall);
	                _this.objects.push(wall);
	            }
	        }
	        if (info.coins) {
	            for (var i = 0; i < info.coins.length; i++) {
	                var d = info.coins[i];
	                var coin = new _Coin2.default(_this.game, d, d.x, d.y);
	                _this.addChild(coin);
	                _this.objects.push(coin);
	            }
	        }
	
	        _this.obstacles = [];
	        if (info.obstacles) {
	            for (var i = 0; i < info.obstacles.length; i++) {
	                var d = info.obstacles[i];
	                var obstacle = new _Obstacle2.default(_this.game, d, d.x, d.y);
	                _this.addChild(obstacle);
	                _this.objects.push(obstacle);
	                _this.obstacles.push(obstacle);
	            }
	        }
	        if (info.clocks) {
	            for (var i = 0; i < info.clocks.length; i++) {
	                var d = info.clocks[i];
	                var clock = new _Clock2.default(_this.game, d, d.x, d.y);
	                _this.addChild(clock);
	                _this.objects.push(clock);
	            }
	        }
	        if (info.objects) {
	            for (var i = 0; i < info.objects.length; i++) {
	                var d = info.objects[i];
	                var furniture = new _Furniture2.default(_this.game, d, d.x, d.y);
	                _this.addChild(furniture);
	                _this.objects.push(furniture);
	            }
	        }
	
	        _this.game.world.remove(_this);
	
	        return _this;
	    }
	
	    _createClass(Section, [{
	        key: "close",
	        value: function close() {
	            this.sectionEnabled = false;
	
	            // for (var i = 0; i < this.objects.length; i++)
	            // {
	            //     this.objects[i].visible = false;
	            // }
	        }
	
	        // remove()
	        // {
	
	        //     this.removeAll( true );
	        //     this.objects = null;
	        // }
	
	
	    }, {
	        key: "updateSection",
	        value: function updateSection(hero) {
	            for (var i = 0; i < this.objects.length; i++) {
	                this.objects[i].updateObject(hero);
	            }
	        }
	    }, {
	        key: "reset",
	        value: function reset() {
	
	            // for (var i = 0; i < this.objects.length; i++)
	            // {
	            //     this.objects[i].reset();
	
	            //     if(this.objects[i].type === "clock")
	            //     {
	            //         this.objects[i].visible = this.ignoreTimeDrops === false;
	            //     }
	            // }
	        }
	    }, {
	        key: "start",
	        value: function start(allowTimeDrops) {
	            this.sectionEnabled = true;
	
	            for (var i = 0; i < this.objects.length; i++) {
	                this.objects[i].reset();
	
	                if (this.objects[i].type === "clock") {
	                    this.objects[i].visible = this.ignoreTimeDrops === false;
	                } else {
	                    this.objects[i].visible = true;
	                }
	            }
	
	            this.ignoreTimeDrops = allowTimeDrops === false;
	            this.visible = true;
	        }
	    }, {
	        key: "updateCustomObjects",
	        value: function updateCustomObjects(heroType, width) {
	            for (var i = 0; i < this.objects.length; i++) {
	                this.objects[i].showCustom(heroType, width);
	            }
	        }
	    }]);
	
	    return Section;
	}(Phaser.Group);
	
	exports.default = Section;

/***/ }),
/* 323 */
/*!********************************!*\
  !*** ./src/js/objects/Wall.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GameObject2 = __webpack_require__(/*! ./GameObject */ 324);
	
	var _GameObject3 = _interopRequireDefault(_GameObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Wall = function (_GameObject) {
	    _inherits(Wall, _GameObject);
	
	    function Wall(game, data, x, y) {
	        _classCallCheck(this, Wall);
	
	        var _this = _possibleConstructorReturn(this, (Wall.__proto__ || Object.getPrototypeOf(Wall)).call(this, game, data, x, y));
	
	        _this.createAsset(data.type.indexOf('wall') >= 0 ? 'walls' : 'furniture', data.type);
	        return _this;
	    }
	
	    _createClass(Wall, [{
	        key: 'updateObject',
	        value: function updateObject(hero) {
	            if (this.visible && this.checkCollisions(hero, true)) {
	                hero.onPlatform(this.getWorldCollisionBounds().y);
	            }
	        }
	    }]);
	
	    return Wall;
	}(_GameObject3.default);
	
	exports.default = Wall;

/***/ }),
/* 324 */
/*!**************************************!*\
  !*** ./src/js/objects/GameObject.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Collision = __webpack_require__(/*! ../utils/Collision */ 325);
	
	var _Collision2 = _interopRequireDefault(_Collision);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Generic game object class
	// most ingame objects should be able to extends this one
	// mainly handles collisions
	var GameObject = function (_Phaser$Sprite) {
	    _inherits(GameObject, _Phaser$Sprite);
	
	    function GameObject(game, data, x, y) {
	        _classCallCheck(this, GameObject);
	
	        var _this = _possibleConstructorReturn(this, (GameObject.__proto__ || Object.getPrototypeOf(GameObject)).call(this, game));
	
	        _this.x = x;
	        _this.y = y;
	        _this.info = data;
	        _this.isCollision = false;
	        _this.collisionSize = _this.game.data.levelSections.game_objects[data.type].collider;
	        _this.isVisible = false;
	        _this.visible = false;
	        return _this;
	    }
	
	    _createClass(GameObject, [{
	        key: "createAsset",
	        value: function createAsset(texture, frame) {
	            this.asset = this.asset || this.game.make.image(0, 0);
	            this.asset.loadTexture(texture, frame);
	            this.addChild(this.asset);
	        }
	    }, {
	        key: "reset",
	        value: function reset() {
	            this.visible = true;
	            this.isVisible = true;
	        }
	    }, {
	        key: "getWorldCollisionBounds",
	
	
	        /*
	        ====================================================================================================================
	            BOUNDS CALCULATION
	        ====================================================================================================================
	        */
	
	        value: function getWorldCollisionBounds() {
	            return {
	                x: Math.round(this.world.x + this.collisionSize.x * this.game.camera.zoomScale),
	                y: Math.round(this.world.y + this.collisionSize.y * this.game.camera.zoomScale),
	                width: Math.round(this.collisionSize.width * this.game.camera.zoomScale),
	                height: Math.round(this.collisionSize.height * this.game.camera.zoomScale)
	            };
	        }
	
	        /*
	        ====================================================================================================================
	            COLLISION CHECKS
	        ====================================================================================================================
	        */
	
	    }, {
	        key: "checkCollisions",
	        value: function checkCollisions(hero, oneway) {
	            // turn of flag, by feault we won;t collide with anything
	            this.isCollision = false;
	
	            // this whole function is useless without a hero, and we don't care if the hero id dead
	            if (!hero || hero.isDead) {
	                return this.isCollision;
	            }
	
	            // grab our world bounds to check if we are in a 'collision zone'
	            var myBounds = this.getWorldCollisionBounds();
	
	            // we also dont care if the object is not visible or of the screen
	            if (myBounds.x + myBounds.width < hero.x || !this.visible) {
	                return this.isCollision;
	            }
	
	            // if we are within the left half of the screen
	            if (myBounds.x < this.game.width * this.game.camera.zoomScale * 0.25 && myBounds.x + myBounds.width > 0) {
	                // grab the hero world bounds
	                var heroBounds = hero.getWorldBounds();
	
	                // if this is a oneway collision we offset the bounds and check hero feet
	                if (oneway) {
	                    heroBounds.y += heroBounds.height - hero.speedY;
	                    heroBounds.height = 10 * this.game.camera.zoomScale;
	                }
	
	                // if collision is not oneway, or the hero is falling (oneway) run a collision check
	                if (!oneway || oneway && hero.speedY < 0) {
	                    // check if bounding boxes collide            
	                    this.isCollision = _Collision2.default.CheckRects(heroBounds, myBounds);
	
	                    // visual debug
	                    if (false) {
	                        this.debugBounds(true);
	                        this.debugCollisionCheck(heroBounds);
	                    }
	                }
	            }
	
	            return this.isCollision;
	        }
	
	        /*
	        ====================================================================================================================
	            BOUNDS DEBUG
	        ====================================================================================================================
	        */
	
	        // renders the bounding box in game
	
	    }, {
	        key: "debugBounds",
	        value: function debugBounds(value) {
	            var collisionBounds = this.getWorldCollisionBounds();
	            this.game.boundsDebugger.drawBounds(collisionBounds.x, collisionBounds.y, collisionBounds.width, collisionBounds.height, this.isCollision ? 0xFFFF00 : 0xFF0000);
	        }
	    }, {
	        key: "debugCollisionCheck",
	        value: function debugCollisionCheck(bounds) {
	            this.game.boundsDebugger.drawBounds(bounds.x, bounds.y, bounds.width, bounds.height, 0x0000FF);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            if (this.asset) {
	                this.asset.destroy(true);
	            }
	            _get(GameObject.prototype.__proto__ || Object.getPrototypeOf(GameObject.prototype), "destroy", this).call(this, true);
	        }
	    }]);
	
	    return GameObject;
	}(Phaser.Sprite);
	
	exports.default = GameObject;

/***/ }),
/* 325 */
/*!***********************************!*\
  !*** ./src/js/utils/Collision.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    CheckRects: function CheckRects(rectA, rectB) {
	        if (rectA.x + rectA.width > rectB.x && rectA.x < rectB.x + rectB.width && rectA.y + rectA.height > rectB.y && rectA.y < rectB.y + rectB.height) {
	
	            return true;
	        }
	
	        return false;
	    }
	};

/***/ }),
/* 326 */
/*!********************************!*\
  !*** ./src/js/objects/Coin.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Collision = __webpack_require__(/*! ../utils/Collision */ 325);
	
	var _Collision2 = _interopRequireDefault(_Collision);
	
	var _GameObject2 = __webpack_require__(/*! ./GameObject */ 324);
	
	var _GameObject3 = _interopRequireDefault(_GameObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Coin = function (_GameObject) {
	    _inherits(Coin, _GameObject);
	
	    function Coin(game, data, x, y) {
	        _classCallCheck(this, Coin);
	
	        var _this = _possibleConstructorReturn(this, (Coin.__proto__ || Object.getPrototypeOf(Coin)).call(this, game, data, x, y));
	
	        _this.createAsset('pickups', data.type);
	        return _this;
	    }
	
	    _createClass(Coin, [{
	        key: "updateObject",
	        value: function updateObject(hero) {
	            // no update if not visible
	            if (!this.visible) {
	                return;
	            }
	
	            // run hero collision check
	            this.checkCollisions(hero);
	
	            // if collision,
	            // dispatch event, hide object and clear debug
	            if (this.isCollision) {
	                this.game.events.onCoinCollected.dispatch();
	                this.visible = false;
	                if (false) {
	                    this.debugBounds(false);
	                }
	            }
	        }
	    }]);
	
	    return Coin;
	}(_GameObject3.default);
	
	exports.default = Coin;

/***/ }),
/* 327 */
/*!*********************************!*\
  !*** ./src/js/objects/Clock.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Collision = __webpack_require__(/*! ../utils/Collision */ 325);
	
	var _Collision2 = _interopRequireDefault(_Collision);
	
	var _GameObject2 = __webpack_require__(/*! ./GameObject */ 324);
	
	var _GameObject3 = _interopRequireDefault(_GameObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Clock = function (_GameObject) {
	    _inherits(Clock, _GameObject);
	
	    function Clock(game, data, x, y, gameController) {
	        _classCallCheck(this, Clock);
	
	        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, game, data, x, y));
	
	        _this.createAsset('pickups', data.type);
	        return _this;
	    }
	
	    _createClass(Clock, [{
	        key: "updateObject",
	        value: function updateObject(hero) {
	            // no update if not visible
	            if (!this.visible) {
	                return;
	            }
	
	            // run hero collision check
	            this.checkCollisions(hero);
	
	            // if collision,
	            // dispatch event, hide object and clear debug
	            if (!hero.stopping && this.isCollision) {
	                this.game.events.onClockCollected.dispatch();
	                this.visible = false;
	            }
	        }
	    }]);
	
	    return Clock;
	}(_GameObject3.default);
	
	exports.default = Clock;

/***/ }),
/* 328 */
/*!************************************!*\
  !*** ./src/js/objects/Obstacle.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Collision = __webpack_require__(/*! ../utils/Collision */ 325);
	
	var _Collision2 = _interopRequireDefault(_Collision);
	
	var _GameObject2 = __webpack_require__(/*! ./GameObject */ 324);
	
	var _GameObject3 = _interopRequireDefault(_GameObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Coin = function (_GameObject) {
	    _inherits(Coin, _GameObject);
	
	    function Coin(game, data, x, y) {
	        _classCallCheck(this, Coin);
	
	        if (data.type === "obstacle_random") {
	            var randomSelect = game.data.levelSections.obstacles[Math.floor(Math.random() * game.data.levelSections.obstacles.length)];
	            data.type = randomSelect;
	        }
	
	        var _this = _possibleConstructorReturn(this, (Coin.__proto__ || Object.getPrototypeOf(Coin)).call(this, game, data, x, y));
	
	        _this.createAsset('obstacles', data.type);
	        _this.x -= _this.asset.width / 2;
	        _this.y -= _this.asset.height;
	
	        return _this;
	    }
	
	    _createClass(Coin, [{
	        key: "resetObstacle",
	        value: function resetObstacle(type) {
	            this.info.type = type;
	            this.isCollision = false;
	            this.collisionSize = this.game.data.levelSections.game_objects[type].collider;
	            this.isVisible = false;
	            this.visible = false;
	
	            this.createAsset('obstacles', type);
	            this.x = this.info.x - this.asset.width / 2;
	            this.y = this.info.y - this.asset.height;
	        }
	    }, {
	        key: "updateObject",
	        value: function updateObject(hero) {
	            // no update if not visible
	            if (!this.visible) {
	                return;
	            }
	
	            if (!hero.stopping) {
	                // run hero collision check
	                this.checkCollisions(hero);
	
	                // if collision, hero is killed
	                if (this.isCollision) {
	                    hero.die();
	                    this.game.trackEvent("GAME_OVER_COLLISION");
	                    this.visible = false;
	                } else if (!this.heroWarned) {
	                    var myBounds = this.getWorldCollisionBounds();
	                    var heroBounds = hero.getWorldBounds();
	
	                    if (heroBounds.x < myBounds.x && heroBounds.y + heroBounds.height > myBounds.y && myBounds.x - (heroBounds.x + heroBounds.width) < this.game.width * 0.25) {
	                        this.heroWarned = true;
	                        this.game.sounds.playSound("obstaclewarning", false, 1, null, null, true);
	                    }
	                }
	            }
	        }
	    }]);
	
	    return Coin;
	}(_GameObject3.default);
	
	exports.default = Coin;

/***/ }),
/* 329 */
/*!*************************************!*\
  !*** ./src/js/objects/Furniture.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Collision = __webpack_require__(/*! ../utils/Collision */ 325);
	
	var _Collision2 = _interopRequireDefault(_Collision);
	
	var _GameObject2 = __webpack_require__(/*! ./GameObject */ 324);
	
	var _GameObject3 = _interopRequireDefault(_GameObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Coin = function (_GameObject) {
	    _inherits(Coin, _GameObject);
	
	    function Coin(game, data, x, y) {
	        _classCallCheck(this, Coin);
	
	        var _this = _possibleConstructorReturn(this, (Coin.__proto__ || Object.getPrototypeOf(Coin)).call(this, game, data, x, y));
	
	        _this.createAsset('furniture', data.type);
	        return _this;
	    }
	
	    _createClass(Coin, [{
	        key: "updateObject",
	        value: function updateObject(hero) {
	            if (this.visible && this.checkCollisions(hero, true)) {
	                hero.onPlatform(this.getWorldCollisionBounds().y);
	            }
	        }
	    }]);
	
	    return Coin;
	}(_GameObject3.default);
	
	exports.default = Coin;

/***/ }),
/* 330 */
/*!********************************!*\
  !*** ./src/js/objects/Hero.js ***!
  \********************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO : Pawel used this global vars... need to translate
	var ScreenGame = {
	    s_ratio: 1,
	    s_level: 0
	};
	
	var Hero = function (_Phaser$Group) {
	    _inherits(Hero, _Phaser$Group);
	
	    function Hero(game, x, y, speed, levelHeight, groundHeight) {
	        _classCallCheck(this, Hero);
	
	        var _this = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, game));
	
	        _this.onGrindStart = new Phaser.Signal();
	        _this.onGrindEnd = new Phaser.Signal();
	        _this.onTrickStart = new Phaser.Signal();
	        _this.onTrickEnd = new Phaser.Signal();
	        _this.onLanded = new Phaser.Signal();
	        _this.onJump = new Phaser.Signal();
	        _this.onDead = new Phaser.Signal();
	        _this.onStopped = new Phaser.Signal();
	
	        _this.TYPE_SKATER = "skater";
	
	        _this.tricks = ["trick_gazelleflip", "trick_indygrab", "trick_kickflip", "trick_nosegrab", "trick_popshovit", "trick_stalefish"];
	        _this.grinds = ["grind_5050", "grind_boardslide", "grind_crookedgrind"];
	
	        for (var i = _this.tricks.length; i; i--) {
	            var j = Math.floor(Math.random() * i);
	            var _ref = [_this.tricks[j], _this.tricks[i - 1]];
	            _this.tricks[i - 1] = _ref[0];
	            _this.tricks[j] = _ref[1];
	        }
	
	        _this.x = x;
	        _this.posX = x;
	        _this.posY = y;
	        _this.currentTrick = 0;
	
	        _this.speedXNormal = speed;
	        _this.levelHeight = levelHeight;
	        _this.groundLevel = groundHeight;
	
	        _this.animId = "";
	
	        _this.type = ScreenGame.s_level == 0 ? _this.TYPE_SKATER : _this.TYPE_CARRIAGE;
	
	        _this.asset = _this.game.make.sprite(0, 0, "skater_roll");
	        _this.asset.animations.add("play");
	        _this.asset.animations.play("play", 24, true);
	        _this.asset.anchor.set(0, 0);
	        _this.addChild(_this.asset);
	
	        _this.isJumping = false;
	        _this.canGrind = false;
	        _this.canTrick = false;
	        _this.canJump = false;
	        _this.hasGnasher = false;
	
	        _this.SIZES = {
	            skater: {
	                roll: { dx: 0, dy: -215, rect: { x: 52, y: 101, w: 94, h: 115 } },
	                dead: { dx: 0, dy: -215, rect: { x: 52, y: 101, w: 94, h: 115 } },
	                fall: { dx: 0, dy: -215, rect: { x: 52, y: 101, w: 94, h: 115 } },
	                push: { dx: 0, dy: -215, rect: { x: 52, y: 101, w: 94, h: 114 } },
	                land: { dx: 0, dy: -215, rect: { x: 52, y: 101, w: 94, h: 114 } },
	                grind: { dx: 0, dy: -215, rect: { x: 52, y: 101, w: 94, h: 115 } },
	                trick01: { dx: 0, dy: -215, rect: { x: 52, y: 101, w: 94, h: 114 } },
	                trick02: { dx: 0, dy: -215, rect: { x: 52, y: 101, w: 94, h: 114 } },
	                jump: { dx: 0, dy: -215, rect: { x: 52, y: 101, w: 94, h: 114 } }
	            }
	        };
	
	        // this.sparks = this.game.make.sprite();
	        // this.sparks.loadTexture('skater_sparks');
	        // this.sparks.anchor.set(0.8, 0.6);
	        // this.sparks.animations.add("play");
	        // this.sparks.animations.play("play", 24, true);
	        // this.sparks.position.set( this.asset.width/2, this.asset.height );
	        // this.sparks.visible = false;
	        // this.addChildAt(this.sparks, 0);
	
	        _this.reset();
	        _this.setAnim('roll_solo', true);
	        //this.roll();
	        return _this;
	    }
	
	    _createClass(Hero, [{
	        key: "pause",
	        value: function pause() {
	            this.asset.animations.currentAnim.paused = true;this.game.sounds.setVolume("skate", 0);
	        }
	    }, {
	        key: "resume",
	        value: function resume() {
	            this.asset.animations.currentAnim.paused = false;this.game.sounds.setVolume("skate", 1);
	        }
	    }, {
	        key: "remove",
	        value: function remove() {
	            this.removeAll(true);
	            this.asset = null;
	
	            if (this.s_speedAudio) {
	                this.s_speedAudio.stop();
	                this.s_speedAudio = null;
	            }
	        }
	    }, {
	        key: "reset",
	        value: function reset() {
	            this.speedX = 0;
	            this.speedY = 0;
	            this.speedXDest = this.speedXNormal;
	            this.jumpFactor = 0.5;
	            this.speedFactor = 0.08;
	            this.onGround = false;
	            this.releasedActionA = true;
	            this.releasedActionB = true;
	            this.started = false;
	            this.isActionB = false;
	            this.actionBCounter = 0;
	            this.canActionB = true;
	            this.groundCounter = 0;
	            this.isDead = false;
	            this.speedTime = 0;
	            this.canSpeedUp = true;
	            this.runFast = false;
	            this.timeOut = false;
	            this.timeOutAnim = false;
	        }
	    }, {
	        key: "start",
	        value: function start() {
	            if (!this.started) {
	
	                this.started = true;
	                this.roll();
	            }
	        }
	    }, {
	        key: "RollToStop",
	        value: function RollToStop() {
	            if (this.isGrinding) {
	                this.endGrind();
	            }
	            this.stopping = true;
	        }
	
	        /*
	        =================================================================================
	        ANIMATION TRIGGERS
	        =================================================================================
	        */
	
	    }, {
	        key: "setGnasherClimbAnim",
	        value: function setGnasherClimbAnim() {
	            this.hasGnasher = true;
	            this.setAnim('climb', false, this.roll);
	        }
	    }, {
	        key: "setAnim",
	        value: function setAnim(animId, loop, onAnimComplete) {
	            var framerate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 24;
	
	            if (this.animId != animId) {
	                this.animId = animId;
	                //this.asset.gotoAndPlay(animId);
	                this.size = { dx: 0, dy: -222, rect: { x: 100, y: 100, w: 85, h: 125 } };
	
	                this.asset.animations.stop();
	                this.asset.animations.currentAnim.onComplete.removeAll();
	
	                this.asset.loadTexture("skater_" + animId);
	                this.asset.animations.add("skater_" + animId);
	                this.asset.animations.play("skater_" + animId, framerate, loop);
	
	                // this.x = this.posX;
	                this.y = this.levelHeight - this.posY + this.size.dy;
	
	                if (onAnimComplete) {
	                    this.asset.animations.currentAnim.onComplete.add(onAnimComplete, this);
	                }
	            }
	        }
	    }, {
	        key: "onTimeOutAnimEnd",
	        value: function onTimeOutAnimEnd(e) {
	            //this.asset.removeAllEventListeners("animationend");
	            //ScreenGame.TimeOut();
	        }
	    }, {
	        key: "updateHero",
	        value: function updateHero() {
	            this.onGround = false;
	
	            //gravity
	            if (this.speedY > -30) {
	                this.speedY -= 0.8;
	            }
	
	            if (!this.isDead && !this.stopping) {
	                if (this.started && this.canSpeedUp) {
	                    this.speedX += (this.speedXDest - this.speedX) * this.speedFactor * ScreenGame.s_ratio;
	                }
	
	                if (this.animId.indexOf("grind") >= 0 && this.speedY < -1) {
	                    this.endGrind();
	                }
	            }
	
	            if (this.stopping) {
	                this.speedX *= 0.99;
	
	                if (this.speedX < 0.25) {
	                    this.speedX = 0;
	                    this.onStopped.dispatch();
	                }
	
	                this.game.sounds.setVolume("skate", this.speedX / 10);
	            }
	
	            this.posX += this.speedX * ScreenGame.s_ratio;
	            this.posY += this.speedY * ScreenGame.s_ratio;
	
	            if (!this.isDead) {
	
	                if (this.posY < this.groundLevel) {
	
	                    this.isGrinding = false;
	                    this.handleOnGround(this.groundLevel);
	                }
	
	                //slow down / speed up time counter
	                if (!this.timeOut) {
	                    if (this.speedTime > 0) {
	                        this.speedTime -= this.game.time.elapsedMS;
	                        if (this.speedTime <= 0) {
	                            this.endSpeedUp();
	                        }
	                    }
	                }
	            } else {
	                this.speedX *= 0.99;
	            }
	
	            // this.x = this.posX + this.size.dx;
	            this.y = this.levelHeight - this.posY + this.size.dy;
	
	            //if(__DEBUG_COLLISIONS__ ){ this.debugBounds(); }
	        }
	    }, {
	        key: "debugBounds",
	        value: function debugBounds() {
	            var bounds = this.getWorldBounds();
	            this.game.boundsDebugger.drawBounds(bounds.x, bounds.y, bounds.width, bounds.height, 0x00FF00);
	        }
	    }, {
	        key: "timeOut",
	        value: function timeOut() {
	            this.isDead = true;
	            this.timeOut = true;
	            this.speedXDest = 0;
	            this.speedFactor = 0.15;
	        }
	    }, {
	        key: "setPosition",
	        value: function setPosition(x, y) {
	            this.posX = x;
	            this.posY = y;
	            this.update();
	        }
	    }, {
	        key: "getRect",
	        value: function getRect() {
	            return { x: this.x + this.size.rect.x, y: this.y + this.size.rect.y,
	                width: this.size.rect.w, height: this.size.rect.h };
	        }
	    }, {
	        key: "getWorldBounds",
	        value: function getWorldBounds() {
	            return {
	
	                x: this.asset.world.x + this.size.rect.x * this.game.camera.zoomScale,
	                y: this.asset.world.y + this.size.rect.y * this.game.camera.zoomScale,
	                width: this.size.rect.w * this.game.camera.zoomScale,
	                height: this.size.rect.h * this.game.camera.zoomScale
	            };
	        }
	    }, {
	        key: "getAttackRect",
	        value: function getAttackRect() {
	            if (this.size.hit) {
	                return { x: this.x + this.size.hit.x, y: this.y + this.size.hit.y,
	                    width: this.size.hit.w, height: this.size.hit.h };
	            }
	
	            return null;
	        }
	    }, {
	        key: "jump",
	
	
	        /*
	        ====================================================================================================
	            JUMP / land
	        ====================================================================================================
	        */
	
	        value: function jump() {
	            if (this.canJump) {
	                if (this.isGrinding) {
	                    this.endGrind();
	                }
	
	                this.y -= 25;
	                this.isJumping = true;
	                this.speedY = 40 * this.jumpFactor;
	                this.setAnim("jump", false);
	                this.onJump.dispatch();
	                this.game.sounds.stopSound("skate");
	                this.game.sounds.playSoundEffect("ollie");
	            }
	        }
	    }, {
	        key: "push",
	        value: function push() {
	            this.setAnim("push", false, this.roll);
	        }
	    }, {
	        key: "fall",
	        value: function fall() {
	            this.isJumping = true;
	            this.setAnim("fall");
	        }
	    }, {
	        key: "land",
	        value: function land() {
	            this.isJumping = false;
	            this.isPerformingTrick = false;
	            this.isGrinding = false;
	            this.isGrindPrepped = false;
	            this.setAnim("land", false, this.roll);
	            this.onLanded.dispatch();
	            this.game.sounds.playSoundEffect("land");
	        }
	    }, {
	        key: "roll",
	        value: function roll() {
	            if (!this.game.sounds.isSoundPlaying("skate")) {
	                this.game.sounds.playSoundEffect("skate", true);
	            }
	            this.asset.animations.currentAnim.onComplete.remove(this.roll);
	            this.setAnim(this.hasGnasher ? 'roll' : 'roll_solo', true);
	        }
	
	        /*
	        ====================================================================================================
	            TRICKS
	        ====================================================================================================
	        */
	
	    }, {
	        key: "startTrick",
	        value: function startTrick() {
	            if (this.canTrick && !this.isPerformingTrick) {
	                this.isPerformingTrick = true;
	                this.onTrickStart.dispatch();
	                var trick = this.tricks[this.currentTrick];
	                this.game.sounds.playSound("trick", false, 0.5);
	                if (trick === "trick_gazelleflip") {
	                    this.game.sounds.playSound("gazelle720");
	                }
	                this.setAnim(trick, false, this.endTrick.bind(this));
	                this.currentTrick++;
	                if (this.currentTrick >= this.tricks.length) {
	                    this.currentTrick = 0;
	                }
	            }
	        }
	    }, {
	        key: "endTrick",
	        value: function endTrick() {
	            this.isPerformingTrick = false;
	            this.fall();
	            this.onTrickEnd.dispatch();
	        }
	
	        /*
	        ====================================================================================================
	            GRINDING
	        ====================================================================================================
	        */
	
	    }, {
	        key: "prepGrind",
	        value: function prepGrind() {
	            this.isGrindPrepped = true;
	            this.speedY = -10;
	        }
	    }, {
	        key: "startGrind",
	        value: function startGrind() {
	            // choose a random grind animation
	            var randomGrind = this.grinds[Math.floor(Math.random() * this.grinds.length)];
	            this.setAnim(randomGrind, true);
	
	            // set flags
	            this.isJumping = false;
	            this.isPerformingTrick = false;
	            this.isGrindPrepped = false;
	            this.isGrinding = true;
	
	            // trigger notification
	            this.onGrindStart.dispatch();
	            this.game.sounds.playSoundEffect("grind", true);
	            this.game.sounds.playSoundEffect("land");
	        }
	    }, {
	        key: "endGrind",
	        value: function endGrind() {
	            this.game.sounds.stopSound("grind");
	            this.isGrinding = false;
	            this.fall();
	            this.onGrindEnd.dispatch();
	        }
	
	        /*
	        ====================================================================================================
	            GROUNDED
	        ====================================================================================================
	        */
	
	    }, {
	        key: "handleOnGround",
	        value: function handleOnGround(y) {
	            if (this.isPerformingTrick) {
	                this.game.trackEvent("GAME_OVER_TRICK_ERROR");
	                this.die();
	            } else {
	                // if the skaters is not 'rolling' or 'accepting gnasher'
	                if (this.isJumping && this.animId.indexOf('climb') < 0 && !this.isGrinding) {
	                    this.land();
	                }
	
	                this.onGround = true;
	                this.groundCounter = 1;
	                this.speedY = 0;
	                this.posY = y;
	                this.y = this.levelHeight - this.posY + this.size.dy;
	            }
	        }
	    }, {
	        key: "onPlatform",
	
	
	        /*
	        ====================================================================================================
	            REACT TO PLATFORM
	        ====================================================================================================
	        */
	
	        value: function onPlatform(y) {
	            if (!this.stopping == true) {
	                y -= this.game.camera.zoomOffsetY;
	
	                if (this.isGrindPrepped) {
	                    this.startGrind();
	                }
	
	                this.handleOnGround(this.levelHeight - y / this.game.camera.zoomScale);
	            }
	        }
	    }, {
	        key: "actionA",
	        value: function actionA() {
	            if (this.stopping) {
	                return;
	            }
	
	            if (!this.isJumping) {
	                this.jump();
	            } else if (this.isJumping) {
	                this.startTrick();
	            }
	        }
	    }, {
	        key: "actionB",
	        value: function actionB() {
	            if (!this.stopping && !this.isGrinding) {
	                if (this.isJumping || this.isPerformingTrick) {
	                    this.prepGrind();
	                }
	            }
	        }
	    }, {
	        key: "getNormalizedY",
	        value: function getNormalizedY() {
	            return Math.min(1, Math.max(0, 1 - (this.posY - this.groundLevel) / this.levelHeight));
	        }
	    }, {
	        key: "die",
	        value: function die() {
	            if (!this.isDead && !this.stopping) {
	                this.isDead = true;
	                this.speedX *= 0.5;
	                this.visible = false;
	                this.onDead.dispatch();
	            }
	        }
	    }]);
	
	    return Hero;
	}(Phaser.Group);
	
	exports.default = Hero;

/***/ }),
/* 331 */
/*!*************************************************!*\
  !*** ./src/js/controller/ControllerKeyboard.js ***!
  \*************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ControllerKeyboard = function () {
	    function ControllerKeyboard(game, hero) {
	        _classCallCheck(this, ControllerKeyboard);
	
	        this.hero = hero;
	        this.game = game;
	        this.cursors = this.game.input.keyboard.createCursorKeys();
	
	        this.cursors.up.onDown.add(this.handleUpArrow, this);
	        this.cursors.down.onDown.add(this.handleDownArrow, this);
	    }
	
	    _createClass(ControllerKeyboard, [{
	        key: "start",
	        value: function start() {}
	    }, {
	        key: "stop",
	        value: function stop() {}
	    }, {
	        key: "handleUpArrow",
	        value: function handleUpArrow() {
	            this.hero.actionA();
	        }
	    }, {
	        key: "handleDownArrow",
	        value: function handleDownArrow() {
	            this.hero.actionB();
	        }
	    }, {
	        key: "update",
	        value: function update() {}
	    }]);
	
	    return ControllerKeyboard;
	}();
	
	exports.default = ControllerKeyboard;

/***/ }),
/* 332 */
/*!**********************************************!*\
  !*** ./src/js/controller/SwipeController.js ***!
  \**********************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SwipeController = function () {
	    function SwipeController(game, hero) {
	        _classCallCheck(this, SwipeController);
	
	        this.game = game;
	        this.hero = hero;
	        this.inputStartX = 0;
	        this.inputStartY = 0;
	        this.inputDistReq = 100;
	    }
	
	    _createClass(SwipeController, [{
	        key: "activate",
	        value: function activate() {
	            this.game.input.onDown.add(this.handleInputDown, this);
	            this.game.input.onUp.add(this.handleInputUp, this);
	        }
	    }, {
	        key: "handleInputDown",
	        value: function handleInputDown(pointer) {
	            this.inputStartX = pointer.clientX;
	            this.inputStartY = pointer.clientY;
	        }
	    }, {
	        key: "handleInputUp",
	        value: function handleInputUp(pointer) {
	            var dist = this.inputStartY - pointer.clientY;
	            if (Math.abs(dist) < this.inputDistReq) {
	                this.handleSwipeUp();
	            } else if (Math.abs(dist) > this.inputDistReq && dist < 0) {
	                this.handleSwipeDown();
	            }
	        }
	    }, {
	        key: "handleSwipeUp",
	        value: function handleSwipeUp() {
	            this.hero.actionA();
	        }
	    }, {
	        key: "handleSwipeDown",
	        value: function handleSwipeDown() {
	            this.hero.actionB();
	        }
	    }]);
	
	    return SwipeController;
	}();
	
	exports.default = SwipeController;

/***/ }),
/* 333 */
/*!***********************************************!*\
  !*** ./src/js/controller/ControllerCamera.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ControllerCamera = function () {
	    function ControllerCamera(game, hero, gameContainer) {
	        _classCallCheck(this, ControllerCamera);
	
	        this.game = game;
	        this.gameContainer = gameContainer;
	        this.camera = this.game.camera;
	
	        this.setZoom(1);
	
	        this.hero = hero;
	        this.heroCameraOffset = this.hero.getWorldBounds().y - this.game.camera.y - 200;
	        this.damping = 1;
	
	        // expand world bounds to accomdate camera movements
	        this.game.world.setBounds(0, -this.game.height * 3, this.game.width, this.game.height * 4);
	        this.game.camera.setBoundsToWorld();
	    }
	
	    _createClass(ControllerCamera, [{
	        key: "updateCamera",
	        value: function updateCamera() {
	            // calculate the distance to our hero
	            var dist = this.camera.y - (this.hero.y - this.heroCameraOffset - this.game.height / 2);
	            // close the distance, applying some damping 
	            this.camera.setPosition(this.camera.x, this.camera.y - dist * this.damping);
	
	            if (this.isShake) {
	                this.shakeTime -= this.game.time.elapsedMS;
	                this.gameContainer.x = Math.random() * 20 - 10;
	                this.gameContainer.y = Math.random() * 10;
	                this.gameContainer.scale.set(1 + Math.random() * 0.05);
	
	                if (this.shakeTime <= 0) {
	                    this.isShake = false;
	                    this.gameContainer.x = 0;
	                    this.gameContainer.y = 0;
	                    this.gameContainer.scale.set(1);
	                }
	            }
	        }
	    }, {
	        key: "shake",
	        value: function shake() {
	            this.isShake = true;
	            this.shakeTime = 500;
	        }
	    }, {
	        key: "setZoom",
	        value: function setZoom(value) {
	            this.game.camera.zoomScale = 1;
	            this.game.camera.zoomOffsetY = this.game.height * (1 - this.game.camera.zoomScale);
	            this.gameContainer.scale.set(this.game.camera.zoomScale);
	        }
	    }]);
	
	    return ControllerCamera;
	}();
	
	exports.default = ControllerCamera;

/***/ }),
/* 334 */
/*!************************************************!*\
  !*** ./src/js/display/GameHeroScoreDisplay.js ***!
  \************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameHeroScoreDisplay = function (_Phaser$Group) {
	    _inherits(GameHeroScoreDisplay, _Phaser$Group);
	
	    function GameHeroScoreDisplay(game, hero) {
	        _classCallCheck(this, GameHeroScoreDisplay);
	
	        var _this = _possibleConstructorReturn(this, (GameHeroScoreDisplay.__proto__ || Object.getPrototypeOf(GameHeroScoreDisplay)).call(this, game));
	
	        _this.hero = hero;
	
	        // var style       = { font: "34px Arial", fill: "#ffffff", align: "center",boundsAlignH: "center", boundsAlignV: "middle" };
	        // var style2      = { font: "24px Arial", fill: "#ffffff", align: "center",boundsAlignH: "center", boundsAlignV: "middle" };
	        // this.text       = game.add.text(0,0, "0", style);
	        // this.text2      = game.add.text(0,25, "x", style2);
	        // this.text.setTextBounds(0, 0, 100, 50);
	        // this.text2.setTextBounds(50, 0, 50, 50);
	        // this.addChild( this.text);
	        // this.addChild( this.text2);
	
	        _this.panel = _this.game.addScreenImage("hero_scorepanel", 0, 0, _this);
	        _this.panel.angle = -5;
	
	        var style = { font: "47px dirty", fill: "#ffe401", boundsAlignH: "center", boundsAlignV: "middle" };
	        _this.label = _this.game.make.text(0, 0, "0", style);
	        _this.label.setTextBounds(0, 0, _this.panel.width * 0.85, _this.panel.height);
	        _this.panel.addChild(_this.label);
	
	        _this.multiplierPanel = _this.game.addScreenImage("hero_multiplierPanel", 0, 0, _this);
	        var style2 = { font: "39px dirty", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
	        var style3 = { font: "26px dirty", fill: "#000000", boundsAlignH: "right", boundsAlignV: "bottom" };
	
	        _this.multiplierSymbol = _this.game.make.text(_this.multiplierPanel.width * 0.25, 0, "X", style3);
	        _this.multiplierText = _this.game.make.text(_this.multiplierPanel.width * 0.4, 0, "0", style2);
	
	        _this.multiplierText.setTextBounds(0, 0, _this.multiplierPanel.width * 0.4, _this.multiplierPanel.height);
	        _this.multiplierSymbol.setTextBounds(0, 0, _this.multiplierPanel.width * 0.1, _this.multiplierPanel.height);
	        _this.multiplierPanel.addChild(_this.multiplierText);
	        _this.multiplierPanel.addChild(_this.multiplierSymbol);
	
	        _this.multiplierPanel.angle = 5;
	        _this.multiplierPanel.position.set(_this.panel.width * 0.6, _this.panel.height * 0.85);
	
	        return _this;
	    }
	
	    _createClass(GameHeroScoreDisplay, [{
	        key: "setValue",
	        value: function setValue(score, multiplier) {
	            this.label.text = score;
	            this.multiplierText.text = multiplier;
	
	            if (multiplier < 10) {
	                this.multiplierSymbol.x = this.multiplierPanel.width * 0.35;
	            } else {
	                this.multiplierSymbol.x = this.multiplierPanel.width * 0.25;
	            }
	            this.multiplierPanel.visible = multiplier >= 2;
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            if (this.visible) {
	                var bounds = this.hero.getWorldBounds();
	                this.x = this.hero.x + this.panel.width * 0.75;
	                this.y = this.hero.y + this.hero.asset.height - this.panel.height / 2;
	            }
	        }
	    }]);
	
	    return GameHeroScoreDisplay;
	}(Phaser.Group);
	
	exports.default = GameHeroScoreDisplay;

/***/ }),
/* 335 */
/*!******************************************!*\
  !*** ./src/js/display/BoundsDebugger.js ***!
  \******************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BoundsDebugger = function (_Phaser$Graphics) {
	    _inherits(BoundsDebugger, _Phaser$Graphics);
	
	    function BoundsDebugger(game) {
	        _classCallCheck(this, BoundsDebugger);
	
	        return _possibleConstructorReturn(this, (BoundsDebugger.__proto__ || Object.getPrototypeOf(BoundsDebugger)).call(this, game));
	    }
	
	    _createClass(BoundsDebugger, [{
	        key: "clearGraphics",
	        value: function clearGraphics() {
	            this.clear();
	        }
	    }, {
	        key: "drawBounds",
	        value: function drawBounds(x, y, width, height, colour) {
	            this.lineStyle(2, colour, 1);
	            this.drawRect(x, y, width, height);
	        }
	    }]);
	
	    return BoundsDebugger;
	}(Phaser.Graphics);
	
	exports.default = BoundsDebugger;

/***/ }),
/* 336 */
/*!************************************!*\
  !*** ./src/js/utils/GameEvents.js ***!
  \************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GameEvents = function GameEvents(game) {
	    _classCallCheck(this, GameEvents);
	
	    this.onCoinCollected = new Phaser.Signal();
	    this.onClockCollected = new Phaser.Signal();
	    this.onHeroDead = new Phaser.Signal();
	    this.onTrickStart = new Phaser.Signal();
	    this.onGrindStart = new Phaser.Signal();
	    this.onGrindEnd = new Phaser.Signal();
	    this.onTrickEnd = new Phaser.Signal();
	    this.onHeroStopped = new Phaser.Signal();
	    this.onHeroJumped = new Phaser.Signal();
	    this.onSectionRequired = new Phaser.Signal();
	    this.onSectionRemoved = new Phaser.Signal();
	    this.onIntroPanelClosed = new Phaser.Signal();
	    this.onGamePaused = new Phaser.Signal();
	    this.onGameResumed = new Phaser.Signal();
	};
	
	exports.default = GameEvents;

/***/ }),
/* 337 */
/*!******************************!*\
  !*** ./src/js/ui/GameHud.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _BtnSoundToggle = __webpack_require__(/*! ../ui/BtnSoundToggle */ 338);
	
	var _BtnSoundToggle2 = _interopRequireDefault(_BtnSoundToggle);
	
	var _SimpleButton = __webpack_require__(/*! ../ui/SimpleButton */ 318);
	
	var _SimpleButton2 = _interopRequireDefault(_SimpleButton);
	
	var _GameHudScore = __webpack_require__(/*! ./GameHudScore */ 339);
	
	var _GameHudScore2 = _interopRequireDefault(_GameHudScore);
	
	var _GameHudTime = __webpack_require__(/*! ./GameHudTime */ 340);
	
	var _GameHudTime2 = _interopRequireDefault(_GameHudTime);
	
	var _PauseOverlay = __webpack_require__(/*! ../ui/PauseOverlay */ 341);
	
	var _PauseOverlay2 = _interopRequireDefault(_PauseOverlay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameHud = function (_Phaser$Group) {
	    _inherits(GameHud, _Phaser$Group);
	
	    function GameHud(game) {
	        _classCallCheck(this, GameHud);
	
	        // screen vignette
	        var _this = _possibleConstructorReturn(this, (GameHud.__proto__ || Object.getPrototypeOf(GameHud)).call(this, game));
	
	        _this.vignette = _this.game.addScreenImage("vignette", 0, 0, _this);
	
	        // create hud buttons
	        _this.btnPause = _this.game.addSimpleButton("btn_pause", "btn_pause_over", _this.handlePauseButton, _this, _this);
	        _this.btnSound = _this.game.addSoundButton(_this);
	
	        // create hud info panels
	        _this.scorePanel = new _GameHudScore2.default(_this.game);
	        _this.scorePanel.position.set(100, -500);
	        _this.addChild(_this.scorePanel);
	
	        _this.timePanel = new _GameHudTime2.default(_this.game);
	        _this.timePanel.position.set(_this.game.camera.width - 120 - _this.timePanel.panel.width, -500);
	        _this.addChild(_this.timePanel);
	
	        // attach game listeners
	        _this.handleWindowResized();
	        _this.game.scale.onSizeChange.add(_this.handleWindowResized, _this);
	        _this.game.onGamePaused.add(_this.handleGamePaused, _this);
	        _this.game.onGameResumed.add(_this.handleGameResumed, _this);
	        return _this;
	    }
	
	    _createClass(GameHud, [{
	        key: "handleWindowResized",
	        value: function handleWindowResized() {
	            this.vignette.width = this.game.width;
	            this.vignette.height = this.game.height;
	            this.btnSound.x = this.game.width - 67;
	            this.btnSound.y = 75;
	            this.btnPause.x = 67;
	            this.btnPause.y = 75;
	        }
	
	        /*
	        =============================================================================
	            HANDLE PAUSE / RESUME EVENTS
	        =============================================================================
	        */
	
	    }, {
	        key: "handlePauseButton",
	        value: function handlePauseButton() {
	            this.game.pauseGame();
	        }
	    }, {
	        key: "handleGamePaused",
	        value: function handleGamePaused() {
	            if (!this.paused) {
	                this.paused = true;
	                this.pauseOverlay = new _PauseOverlay2.default(this.game);
	                this.game.add.existing(this.pauseOverlay);
	
	                this.game.trackEvent("GAME_PAUSED");
	            }
	        }
	    }, {
	        key: "handleGameResumed",
	        value: function handleGameResumed() {
	            this.paused = false;
	            this.game.trackEvent("GAME_RESUMED");
	        }
	
	        /*
	        =============================================================================
	           UI TRIGGERS
	        =============================================================================
	        */
	
	    }, {
	        key: "showTimeup",
	        value: function showTimeup() {
	            if (!this.timeup) {
	                this.timeup = this.game.addScreenImage('hud_timeuppanel', 0.5, 0, this, this.game.width * 1.5, this.game.height * 0.15);
	                var tween = this.game.add.tween(this.timeup).to({ x: this.game.width / 2 }, 500, Phaser.Easing.Back.Out, true);
	                tween.onComplete.addOnce(this.removeTimeup, this);
	            }
	        }
	    }, {
	        key: "removeTimeup",
	        value: function removeTimeup() {
	            this.game.add.tween(this.timeup).to({ x: -(this.game.width * 1.5) }, 500, Phaser.Easing.Back.In, true, 2000);
	        }
	    }, {
	        key: "setScore",
	        value: function setScore(value) {
	            this.scorePanel.setValue(value);
	        }
	    }, {
	        key: "setMultiplier",
	        value: function setMultiplier(value) {
	            this.scorePanel.setMultiplier(value);
	        }
	    }, {
	        key: "setTime",
	        value: function setTime(value) {
	            this.timePanel.setValue(value);
	        }
	    }, {
	        key: "revealHud",
	        value: function revealHud() {
	            this.game.add.tween(this.timePanel).to({ y: 0 }, 500, Phaser.Easing.Back.Out, true, 250);
	            this.game.add.tween(this.scorePanel).to({ y: 10 }, 500, Phaser.Easing.Back.Out, true);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.game.scale.onSizeChange.remove(this.handleWindowResized, this);
	            this.game.onGamePaused.remove(this.handleGamePaused, this);
	            this.game.onGameResumed.remove(this.handleGameResumed, this);
	            _get(GameHud.prototype.__proto__ || Object.getPrototypeOf(GameHud.prototype), "destroy", this).call(this, true);
	        }
	    }]);
	
	    return GameHud;
	}(Phaser.Group);
	
	exports.default = GameHud;

/***/ }),
/* 338 */
/*!*************************************!*\
  !*** ./src/js/ui/BtnSoundToggle.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _SimpleButton2 = __webpack_require__(/*! ./SimpleButton */ 318);
	
	var _SimpleButton3 = _interopRequireDefault(_SimpleButton2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BtnSoundToggle = function (_SimpleButton) {
	    _inherits(BtnSoundToggle, _SimpleButton);
	
	    function BtnSoundToggle(game, x, y) {
	        _classCallCheck(this, BtnSoundToggle);
	
	        var _this = _possibleConstructorReturn(this, (BtnSoundToggle.__proto__ || Object.getPrototypeOf(BtnSoundToggle)).call(this, game, x, y, "btn_soundon", "btn_soundon_over"));
	
	        _this.onInputDown.add(_this.handleInput, _this);
	        _this.updateDisplayStatus(_this.game.sounds.allowMusic);
	        return _this;
	    }
	
	    _createClass(BtnSoundToggle, [{
	        key: "handleInput",
	        value: function handleInput() {
	            var state = this.game.sounds.allowMusic == false;
	            this.game.sounds.allowMusic = state;
	            this.game.sounds.allowEffects = state;
	            this.game.trackEvent(this.game.sounds.allowMusic ? "AUDIO_UNMUTE" : "AUDIO_MUTE");
	            this.updateDisplayStatus(state);
	        }
	    }, {
	        key: "updateDisplayStatus",
	        value: function updateDisplayStatus(status) {
	            if (status) {
	                this.setFrames("btn_soundon_over", "btn_soundon", "btn_soundon", "btn_soundon");
	            } else {
	                this.setFrames("btn_soundoff_over", "btn_soundoff", "btn_soundoff", "btn_soundoff");
	            }
	
	            // if (this.isOver)
	            // {
	            //     this.loadTexture('buttons', this.over);
	            // }
	            // else
	            // {
	            //     this.loadTexture('buttons', this.out);
	            // }
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.onInputDown.remove(this.handleInput, this);
	            _get(BtnSoundToggle.prototype.__proto__ || Object.getPrototypeOf(BtnSoundToggle.prototype), "destroy", this).call(this);
	        }
	    }]);
	
	    return BtnSoundToggle;
	}(_SimpleButton3.default);
	
	exports.default = BtnSoundToggle;

/***/ }),
/* 339 */
/*!***********************************!*\
  !*** ./src/js/ui/GameHudScore.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameHudScore = function (_Phaser$Group) {
	    _inherits(GameHudScore, _Phaser$Group);
	
	    function GameHudScore(game) {
	        _classCallCheck(this, GameHudScore);
	
	        var _this = _possibleConstructorReturn(this, (GameHudScore.__proto__ || Object.getPrototypeOf(GameHudScore)).call(this, game));
	
	        _this.panel = _this.game.addScreenImage("hud_scorepanel", 0, 0, _this);
	
	        var style = { font: "32px dirty", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	        _this.label = _this.game.make.text(0, 0, "score:", style);
	        _this.label.setTextBounds(15, _this.panel.height * 0.37, _this.panel.width * 0.5, 40);
	
	        var style2 = { font: "64px dirty", fill: "#ffe401", boundsAlignH: "right", boundsAlignV: "middle" };
	        _this.value = _this.game.make.text(0, 0, "0", style2);
	        _this.value.setTextBounds(_this.panel.width * 0.55, 0, _this.panel.width * 0.3, _this.panel.height * 0.9);
	
	        var style2 = { font: "64px dirty", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
	        var style3 = { font: "32px dirty", fill: "#000000", boundsAlignH: "center", boundsAlignV: "bottom" };
	
	        _this.multiplierbox = _this.game.addScreenImage("hud_multiplierpanel", 0, 0, _this);
	        _this.multiplierSymbol = _this.game.make.text(0, 0, "X", style3);
	        _this.multiplierSymbol.setTextBounds(20, 0, _this.multiplierbox.width * 0.15, _this.multiplierbox.height - 10);
	        _this.multiplierText = _this.game.make.text(0, 0, "0", style2);
	
	        _this.multiplierText.setTextBounds(_this.multiplierbox.width * 0.15, 0, _this.multiplierbox.width, _this.multiplierbox.height);
	        _this.multiplierbox.position.set(_this.panel.width - 15, -500);
	        _this.multiplierbox.addChild(_this.multiplierText);
	        _this.multiplierbox.addChild(_this.multiplierSymbol);
	        _this.multiplierboxHidden = true;
	        _this.addChild(_this.multiplierbox);
	
	        _this.addChild(_this.label);
	        _this.addChild(_this.value);
	        return _this;
	    }
	
	    _createClass(GameHudScore, [{
	        key: "setValue",
	        value: function setValue(value) {
	            this.value.text = value;
	        }
	    }, {
	        key: "setMultiplier",
	        value: function setMultiplier(value) {
	            this.multiplierText.text = value;
	
	            if (value > 1 && this.multiplierboxHidden) {
	                this.revealMultiplier();
	            } else if (value <= 1 && !this.multiplierboxHidden) {
	                this.removeMultiplier();
	            } else if (value > 1 && !this.multiplierboxHidden) {
	                this.pulseMultiplier();
	            }
	        }
	    }, {
	        key: "revealMultiplier",
	        value: function revealMultiplier() {
	            this.multiplierboxHidden = false;
	
	            if (this.multiplierTween) {
	                this.multiplierTween.stop();
	            }
	            this.multiplierTween = this.game.add.tween(this.multiplierbox).to({ y: 10 }, 250, Phaser.Easing.Back.Out, true);
	        }
	    }, {
	        key: "removeMultiplier",
	        value: function removeMultiplier() {
	            this.multiplierboxHidden = true;
	            this.multiplierTween = this.game.add.tween(this.multiplierbox).to({ y: -500 }, 250, Phaser.Easing.Back.In, true);
	        }
	    }, {
	        key: "pulseMultiplier",
	        value: function pulseMultiplier() {
	            if (this.pulseTween) {
	                this.pulseTween.stop();
	                this.pulseTween.onComplete.removeAll();
	            }
	            this.pulseTween = this.game.add.tween(this.multiplierbox.scale).to({ x: 1.25, y: 1.25 }, 150, Phaser.Easing.Out, true);
	            this.pulseTween.onComplete.addOnce(this.handlePluseOutComplete, this);
	        }
	    }, {
	        key: "handlePluseOutComplete",
	        value: function handlePluseOutComplete() {
	            this.game.add.tween(this.multiplierbox.scale).to({ x: 1, y: 1 }, 150, Phaser.Easing.Out, true);
	        }
	    }]);
	
	    return GameHudScore;
	}(Phaser.Group);
	
	exports.default = GameHudScore;

/***/ }),
/* 340 */
/*!**********************************!*\
  !*** ./src/js/ui/GameHudTime.js ***!
  \**********************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameHudTime = function (_Phaser$Group) {
	    _inherits(GameHudTime, _Phaser$Group);
	
	    function GameHudTime(game) {
	        _classCallCheck(this, GameHudTime);
	
	        var _this = _possibleConstructorReturn(this, (GameHudTime.__proto__ || Object.getPrototypeOf(GameHudTime)).call(this, game));
	
	        _this.panel = _this.game.addScreenImage("hud_timepanel", 0, 0, _this);
	
	        var style = { font: "32px dirty", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	        _this.label = _this.game.make.text(0, 0, "time:", style);
	        _this.label.setTextBounds(20, _this.panel.height * 0.47, _this.panel.width * 0.5, 40);
	
	        var style2 = { font: "64px dirty", fill: "#ffe401", boundsAlignH: "right", boundsAlignV: "middle" };
	        _this.value = _this.game.make.text(0, 0, "0", style2);
	        _this.value.setTextBounds(_this.panel.width * 0.55, 5, _this.panel.width * 0.3, _this.panel.height);
	
	        _this.addChild(_this.label);
	        _this.addChild(_this.value);
	        return _this;
	    }
	
	    _createClass(GameHudTime, [{
	        key: "setValue",
	        value: function setValue(value) {
	            var secs = value % 60;
	            if (secs < 10) {
	                secs = '0' + secs;
	            }
	            var mins = Math.floor(value / 60);
	            this.value.text = mins + ":" + secs;
	        }
	    }]);
	
	    return GameHudTime;
	}(Phaser.Group);
	
	exports.default = GameHudTime;

/***/ }),
/* 341 */
/*!***********************************!*\
  !*** ./src/js/ui/PauseOverlay.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PauseOverlay = function (_Phaser$Group) {
	    _inherits(PauseOverlay, _Phaser$Group);
	
	    function PauseOverlay(game) {
	        _classCallCheck(this, PauseOverlay);
	
	        var _this = _possibleConstructorReturn(this, (PauseOverlay.__proto__ || Object.getPrototypeOf(PauseOverlay)).call(this, game));
	
	        _this.transitionIn = false;
	        _this.transitionOut = false;
	        _this.active = false;
	
	        // overlay
	        _this.bg = _this.game.make.graphics();
	        _this.bg.inputEnabled = true;
	        _this.bg.beginFill(0x000000, 0.65);
	        _this.bg.drawRect(0, 0, 1368, 720);
	        _this.add(_this.bg);
	
	        // btn home
	        _this.btnHome = _this.game.addSimpleButton("btn_home", "btn_home_over", _this.handleReturnHome, _this, _this);
	        _this.btnSound = _this.game.addSoundButton(_this);
	
	        // panel container
	        _this.panelContainer = _this.game.make.group();
	        _this.panelContainer.position.set(_this.game.width, 0);
	        _this.addChild(_this.panelContainer);
	
	        // panel
	        _this.panel = _this.game.make.sprite(0, 74, "pause_panel");
	        _this.panel.anchor.set(0.5, 0);
	        _this.panelContainer.addChild(_this.panel);
	
	        //content 1
	        _this.content1 = _this.game.make.group();
	        _this.panel.addChild(_this.content1);
	
	        _this.btnContinue = _this.game.addSimpleButton("btn_continue", "btn_continue_over", _this.handleContinueButton, _this, _this.content1);
	        _this.btnContinue.position.set(14, 137);
	
	        _this.btnRestart = _this.game.addSimpleButton("btn_restart", "btn_restart_over", _this.handleRestartButton, _this, _this.content1);
	        _this.btnRestart.position.set(14, 265);
	
	        _this.btnCredits = _this.game.addSimpleButton("btn_credits", "btn_credits_over", _this.handleShowCredits, _this, _this.content1);
	        _this.btnCredits.position.set(14, 365);
	
	        _this.content2 = _this.game.make.group();
	        _this.content2.visible = false;
	        _this.btnBack = _this.game.addSimpleButton("btn_back", "btn_back_over", _this.handleCloseCredits, _this, _this.content2);
	        _this.btnBack.position.set(0, 380);
	
	        _this.credits = _this.game.make.image(0, _this.panel.height * 0.42, "credits");
	        _this.credits.anchor.set(0.5);
	        _this.content2.addChild(_this.credits);
	
	        _this.panel.addChild(_this.content2);
	
	        _this.game.scale.onSizeChange.add(_this.handleWindowResized, _this);
	        _this.handleWindowResized();
	        _this.tweenIntoview();
	
	        return _this;
	    }
	
	    _createClass(PauseOverlay, [{
	        key: "tweenIntoview",
	        value: function tweenIntoview() {
	            this.panelContainer.x = this.game.width * 1.5;
	            this.game.add.tween(this.panelContainer).to({ x: this.game.width / 2 - 24 }, 150, Phaser.Easing.Quadratic.Out, true);
	        }
	    }, {
	        key: "handleWindowResized",
	        value: function handleWindowResized() {
	            this.btnHome.position.set(67, 75);
	            this.btnSound.x = this.game.camera.width - 67;
	            this.btnSound.y = 75;
	
	            this.panelContainer.x = this.game.width / 2;
	        }
	    }, {
	        key: "handleContinueButton",
	        value: function handleContinueButton() {
	            this.killPauseOverlay();
	        }
	    }, {
	        key: "handleRestartButton",
	        value: function handleRestartButton() {
	            //this.game.resumeGame();
	            this.game.trackEvent("GAME_RESTARTED");
	            this.game.state.start("Reset", true);
	        }
	    }, {
	        key: "handleReturnHome",
	        value: function handleReturnHome() {
	            //this.game.resumeGame();
	            this.game.trackEvent("GAME_QUIT");
	            this.game.state.start("Welcome", true);
	        }
	    }, {
	        key: "handleShowCredits",
	        value: function handleShowCredits() {
	            this.content2.visible = true;
	            this.content1.visible = false;
	        }
	    }, {
	        key: "handleCloseCredits",
	        value: function handleCloseCredits() {
	            this.content2.visible = false;
	            this.content1.visible = true;
	        }
	    }, {
	        key: "killPauseOverlay",
	        value: function killPauseOverlay() {
	            this.game.scale.onSizeChange.remove(this.handleWindowResized, this);
	            var tween = this.game.add.tween(this.panelContainer).to({ x: -this.panel.width }, 150, Phaser.Easing.Quadratic.In, true);
	            tween.onComplete.addOnce(this.handlePauseOverlayKilled, this);
	        }
	    }, {
	        key: "handlePauseOverlayKilled",
	        value: function handlePauseOverlayKilled() {
	            this.btnContinue.destroy();
	            this.content1.destroy();
	            this.panel.destroy();
	            this.panelContainer.destroy();
	            this.game.resumeGame();
	            this.destroy(true);
	        }
	    }, {
	        key: "positionElements",
	        value: function positionElements() {
	            this.btnSound.x = this.game.width - 72;
	            this.panelContainer.x = this.game.width / 2 - 24;
	            this.overlay.x = this.game.width / 2;
	        }
	    }, {
	        key: "handleCreditsButton",
	        value: function handleCreditsButton() {
	            this.game.trackEvent("CREDITS");
	
	            this.content1.visible = false;
	            this.content2.visible = true;
	        }
	    }, {
	        key: "handleBackButton",
	        value: function handleBackButton() {
	            this.content2.visible = false;
	            this.content1.visible = true;
	        }
	
	        // handle out/over event
	
	    }, {
	        key: "pauseUpdate",
	        value: function pauseUpdate() {
	            // buttons over/out
	            var x = this.game.input.mousePointer.x;
	            var y = this.game.input.mousePointer.y;
	
	            for (var i in this.buttons) {
	                var btn = this.buttons[i];
	                btn.onOut();
	                if (btn.getBounds().contains(x, y)) {
	                    btn.onOver();
	                }
	            }
	
	            // transitions in/out
	            if (this.transitionIn) {
	                this.panel.x += -this.panel.x * 0.4;
	                if (this.panel.x < 2) {
	                    this.panel.x = 0;
	                    this.transitionIn = false;
	                }
	            } else if (this.transitionOut) {
	                this.panel.x += (-this.game.width - this.panel.x) * 0.2;
	                if (this.panel.x < -this.game.width + 20) {
	                    this.transitionOut = false;
	                    this.game.paused = false;
	                }
	            }
	        }
	    }]);
	
	    return PauseOverlay;
	}(Phaser.Group);
	
	exports.default = PauseOverlay;

/***/ }),
/* 342 */
/*!*************************************************!*\
  !*** ./src/js/controller/TutorialController.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Section = __webpack_require__(/*! ../display/Section */ 322);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameTutorial = function (_Phaser$Group) {
	    _inherits(GameTutorial, _Phaser$Group);
	
	    function GameTutorial(game, hero) {
	        _classCallCheck(this, GameTutorial);
	
	        var _this = _possibleConstructorReturn(this, (GameTutorial.__proto__ || Object.getPrototypeOf(GameTutorial)).call(this, game));
	
	        _this.hero = hero;
	        _this.tutorialState = 0;
	        _this.tutorialConfig = _this.game.data.tutorialConfig;
	        _this.tutorialStateData = null;
	
	        // create visuals
	        _this.tutorialIcon = _this.game.make.image();
	        _this.tutorialIcon.visible = false;
	        _this.tutorialIcon.anchor.set(0.5);
	
	        _this.tutorialCopy = _this.game.make.image();
	        _this.tutorialCopy.visible = false;
	        _this.tutorialCopy.anchor.set(0.5);
	
	        // create target position objects for tweens
	        _this.targetCopyPosition = { x: 0, y: 0 };
	        _this.targetIconPosition = { x: 0, y: 0 };
	
	        // dispatching events
	        _this.onCurrentTutorialShown = new Phaser.Signal();
	        _this.onCurrentTutotialComplete = new Phaser.Signal();
	        _this.addTutorialSection = new Phaser.Signal();
	        _this.onTutorialCompleted = new Phaser.Signal();
	
	        // add visuals
	        _this.addChild(_this.tutorialIcon);
	        _this.addChild(_this.tutorialCopy);
	
	        if (_this.game.getCookie("tutorial_state") > 0 && !_this.game.getCookie("tutorial_completed")) {
	            _this.game.trackEvent("TUTORIAL_CONTINUED");
	        }
	
	        // set initial state
	        _this.setTutorialState(_this.game.getCookie("tutorial_state") || 0);
	        return _this;
	    }
	
	    _createClass(GameTutorial, [{
	        key: "setTutorialState",
	        value: function setTutorialState(value) {
	            if (value < this.tutorialConfig.states.length) {
	                // set tutorial state and grab data
	                this.tutorialState = value;
	                this.tutorialStateData = this.tutorialConfig.states[this.tutorialState];
	
	                // set tutorial icon if required
	                if (this.tutorialStateData.icon) {
	                    this.targetIconPosition = { x: this.game.width * this.tutorialStateData.icon.px, y: this.game.height * this.tutorialStateData.icon.py };
	                    this.tutorialIcon.loadTexture(this.game.touchEnabled ? this.tutorialStateData.icon.mobile : this.tutorialStateData.icon.desktop);
	                }
	
	                // tutorial copy is mandatory
	                this.targetCopyPosition = { x: this.game.width * this.tutorialStateData.copy.px, y: this.game.height * this.tutorialStateData.copy.py };
	                this.tutorialCopy.loadTexture(this.game.touchEnabled ? this.tutorialStateData.copy.mobile : this.tutorialStateData.copy.desktop);
	
	                // hide icons if wanted
	                this.tutorialIcon.visible = false;
	                this.tutorialCopy.visible = false;
	
	                // clean up listeners  
	                if (this.tweenTutorialCopy) {
	                    this.tweenTutorialCopy.onComplete.removeAll();
	                }
	
	                return true;
	            }
	
	            return false;
	        }
	    }, {
	        key: "activate",
	        value: function activate() {
	            this.showCurrentTutorial();
	        }
	
	        // reset and show currently active tutorial
	
	    }, {
	        key: "showCurrentTutorial",
	        value: function showCurrentTutorial() {
	            // save user progress
	            this.game.setCookie("tutorial_state", this.tutorialState);
	
	            // move visual off screen to the right
	            this.tutorialIcon.position.set(this.game.width * 1.5, this.targetIconPosition.y);
	            this.tutorialCopy.position.set(this.game.width * 1.5, this.targetCopyPosition.y);
	
	            // show and tween in icon if required
	            if (this.tutorialStateData.icon) {
	                this.tutorialIcon.visible = true;
	                this.game.add.tween(this.tutorialIcon).to({ x: this.targetIconPosition.x }, 300).start();
	            }
	
	            // show and tween in copy
	            // add a delay if also icon
	            this.tweenTutorialCopy = this.game.add.tween(this.tutorialCopy).to({ x: this.targetCopyPosition.x }, 300, "Linear", true, this.tutorialStateData.icon ? 150 : 0);
	            this.tutorialCopy.visible = true;
	
	            // trigger state change dispatch
	            this.tweenTutorialCopy.onComplete.addOnce(this.handleTweenInComplete, this);
	        }
	    }, {
	        key: "setCurrentTutorialListeners",
	        value: function setCurrentTutorialListeners() {
	            // atttach onto game events to know when a tutorial action has been completed
	            switch (this.tutorialStateData.complete_action) {
	                case "JUMP":
	                    this.hero.onJump.add(this.completeCurrentTutorial, this);
	                    break;
	                case "GRIND":
	                    this.hero.onGrindStart.add(this.completeCurrentTutorial, this);
	                    break;
	                case "TRICK":
	                    this.hero.onTrickEnd.add(this.completeCurrentTutorial, this);
	                    break;
	                case "TIME":
	                    this.game.time.events.add(2500, this.completeCurrentTutorial, this).autoDestroy = true;
	                    break;
	            }
	
	            this.game.events.onSectionRemoved.add(this.handleTutorialSectionRemoved, this);
	        }
	    }, {
	        key: "removeCurrentTutorialListeners",
	        value: function removeCurrentTutorialListeners() {
	            this.hero.onJump.remove(this.completeCurrentTutorial, this);
	            this.game.events.onSectionRemoved.remove(this.handleTutorialSectionRemoved, this);
	            this.hero.onGrindStart.remove(this.completeCurrentTutorial, this);
	            this.hero.onTrickEnd.remove(this.completeCurrentTutorial, this);
	        }
	
	        // current tutorial has tweened into pposition
	
	    }, {
	        key: "handleTweenInComplete",
	        value: function handleTweenInComplete() {
	            // clean up listeners
	            this.tweenTutorialCopy.onComplete.removeAll();
	
	            // does this part of the tutorial require a section?
	            this.tutorialStateSection = this.getCurrentTutorialSection();
	            if (this.tutorialStateSection) {
	                // trigger event to get section added
	                this.tutorialStateSection.id = this.tutorialState;
	                this.addTutorialSection.dispatch(this.tutorialStateSection);
	            }
	
	            // set hero abilities
	            this.hero.canJump = this.tutorialStateData.canJump;
	            this.hero.canGrind = this.tutorialStateData.canGrind;
	            this.hero.canTrick = this.tutorialStateData.canTrick;
	
	            // set tutorial listners and dispatch ready state
	            this.setCurrentTutorialListeners();
	            this.onCurrentTutorialShown.dispatch(this.tutorialState);
	        }
	    }, {
	        key: "handleTutorialSectionRemoved",
	        value: function handleTutorialSectionRemoved(section) {
	            if (this.tutorialStateData.complete_action === "CLEAR_SECTION") {
	                this.completeCurrentTutorial();
	            } else if (this.tutorialStateSection) {
	                this.addTutorialSection.dispatch(this.tutorialStateSection);
	            }
	        }
	    }, {
	        key: "handleSectionRemoved",
	        value: function handleSectionRemoved() {
	            this.completeCurrentTutorial();
	        }
	
	        // complete and remove the current tutorial
	
	    }, {
	        key: "completeCurrentTutorial",
	        value: function completeCurrentTutorial() {
	            // tween icons and copy out of view
	            if (this.tutorialStateData.icon) {
	                this.game.add.tween(this.tutorialIcon).to({ x: -this.game.width / 2 }, 500, "Linear", true, 250);
	            }
	
	            // clean up listeners
	            this.removeCurrentTutorialListeners();
	            this.tutorialStateSection = null;
	
	            // tween the copy into place, set listenr to know ehen completed
	            this.tweenTutorialCopy = this.game.add.tween(this.tutorialCopy).to({ x: -this.game.width / 2 }, 500, "Linear", true, 500).start();
	            this.tweenTutorialCopy.onComplete.addOnce(this.handleTweenOutComplete, this);
	        }
	    }, {
	        key: "handleTweenOutComplete",
	        value: function handleTweenOutComplete() {
	            this.tweenTutorialCopy.onComplete.removeAll();
	            // dispatch tutorial state completed
	            this.onCurrentTutotialComplete.dispatch(this.tutorialState);
	
	            // if there is a next state, start it
	            if (this.setTutorialState(this.tutorialState + 1)) {
	                this.showCurrentTutorial();
	            } else {
	                // otherwise the tutorial has been completed
	                this.onTutorialCompleted.dispatch();
	            }
	        }
	
	        // returns a tutorial section if required for current tutorial
	
	    }, {
	        key: "getCurrentTutorialSection",
	        value: function getCurrentTutorialSection() {
	            if (this.tutorialStateData.section) {
	                return new _Section2.default(this.game, this.tutorialStateData.section, this.game.data.levelData.height);
	            }
	
	            return false;
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.onCurrentTutorialShown.removeAll();
	            this.onCurrentTutotialComplete.removeAll();
	            this.addTutorialSection.removeAll();
	            this.onTutorialCompleted.removeAll();
	
	            this.onCurrentTutorialShown = null;
	            this.onCurrentTutotialComplete = null;
	            this.addTutorialSection = null;
	            this.onTutorialCompleted = null;
	
	            this.removeCurrentTutorialListeners();
	            _get(GameTutorial.prototype.__proto__ || Object.getPrototypeOf(GameTutorial.prototype), "destroy", this).call(this, true);
	        }
	    }]);
	
	    return GameTutorial;
	}(Phaser.Group);
	
	exports.default = GameTutorial;

/***/ }),
/* 343 */
/*!**************************************************!*\
  !*** ./src/js/controller/IntroAnimController.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Gnasher = __webpack_require__(/*! ../objects/Gnasher */ 344);
	
	var _Gnasher2 = _interopRequireDefault(_Gnasher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IntroAnimController = function () {
	    function IntroAnimController(game, hero) {
	        _classCallCheck(this, IntroAnimController);
	
	        this.game = game;
	        this.hero = hero;
	
	        this.onIntroComplete = new Phaser.Signal();
	    }
	
	    _createClass(IntroAnimController, [{
	        key: "start",
	        value: function start() {
	            // move hero off screen
	            this.hero.x = -this.hero.asset.width;
	
	            // create gnasher run animation
	            this.introGnasher = new _Gnasher2.default(this.game);
	            this.introGnasher.update = this.handleGnasherIntroUpdate.bind(this);
	            this.introGnasher.position.set(-300, this.game.height - this.introGnasher.asset.height - this.game.data.config.ground_height);
	            this.game.add.existing(this.introGnasher);
	
	            // tween dennis into view
	            this.game.add.tween(this.hero).to({ x: this.game.width * 0.35 }, 1600, Phaser.Easing.Quadratic.Out, true, 1000);
	
	            // tween gnasher to catch up with dennis
	            this.gnasherIntroTween = this.game.add.tween(this.introGnasher).to({ x: this.game.width * 0.35 }, 1100, "Linear", true, 1500);
	            this.gnasherIntroTween.onComplete.addOnce(this.handleGnasherIntroComplete, this);
	
	            // activate dennis to get screen momentum
	            this.hero.resume();
	            this.hero.start();
	
	            this.game.onGamePaused.add(this.handleGamePaused, this);
	            this.game.onGameResumed.add(this.handleGameResumed, this);
	        }
	    }, {
	        key: "handleGamePaused",
	        value: function handleGamePaused() {
	            if (this.introGnasher) {
	                this.introGnasher.pause();
	            }
	        }
	    }, {
	        key: "handleGameResumed",
	        value: function handleGameResumed() {
	            if (this.introGnasher) {
	                this.introGnasher.resume();
	            }
	        }
	    }, {
	        key: "handleGnasherIntroUpdate",
	        value: function handleGnasherIntroUpdate() {
	            if (!this.gnasherBark && this.introGnasher.x > 0 && this.hero.x - this.introGnasher.x < 350) {
	                this.gnasherBark = true;
	                this.game.sounds.playSound("gnasherjump");
	            }
	        }
	    }, {
	        key: "handleGnasherIntroComplete",
	        value: function handleGnasherIntroComplete() {
	            // gnasher has caught up with dennis, remove gnasher
	            this.introGnasher.destroy(true);
	            this.hero.setGnasherClimbAnim();
	
	            this.introGnasher = null;
	
	            // play gnasher climbing up dennis
	            var tween = this.game.add.tween(this.hero).to({ x: 50 }, 1750, Phaser.Easing.Quadratic.InOut).start();
	            tween.onComplete.addOnce(this.handleIntroComplete, this);
	        }
	    }, {
	        key: "handleIntroComplete",
	        value: function handleIntroComplete() {
	            this.onIntroComplete.dispatch();
	            this.destroy();
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.game.onGamePaused.remove(this.handleGamePaused, this);
	            this.game.onGameResumed.remove(this.handleGameResumed, this);
	
	            if (this.onIntroComplete) {
	                this.onIntroComplete.removeAll();
	                this.onIntroComplete = null;
	            }
	            if (this.gnasherIntroTween) {
	                this.gnasherIntroTween.stop();
	                this.gnasherIntroTween.onComplete.removeAll();
	                this.gnasherIntroTween = null;
	            }
	
	            if (this.introGnasher) {
	                this.introGnasher.destroy(true);
	            };
	
	            this.gnasherBark = false;
	        }
	    }]);
	
	    return IntroAnimController;
	}();
	
	exports.default = IntroAnimController;

/***/ }),
/* 344 */
/*!***********************************!*\
  !*** ./src/js/objects/Gnasher.js ***!
  \***********************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Gnasher = function (_Phaser$Sprite) {
	    _inherits(Gnasher, _Phaser$Sprite);
	
	    function Gnasher(game) {
	        _classCallCheck(this, Gnasher);
	
	        var _this = _possibleConstructorReturn(this, (Gnasher.__proto__ || Object.getPrototypeOf(Gnasher)).call(this, game));
	
	        _this.asset = _this.game.make.sprite();
	        _this.asset.loadTexture("gnasher_run");
	        _this.asset.animations.add('run');
	        _this.asset.animations.play('run', 24, true);
	        _this.addChild(_this.asset);
	        return _this;
	    }
	
	    _createClass(Gnasher, [{
	        key: 'pause',
	        value: function pause() {
	            this.asset.animations.stop();
	        }
	    }, {
	        key: 'resume',
	        value: function resume() {
	            this.asset.animations.currentAnim.paused = false;
	        }
	    }]);
	
	    return Gnasher;
	}(Phaser.Sprite);
	
	exports.default = Gnasher;

/***/ }),
/* 345 */
/*!*******************************************!*\
  !*** ./src/js/display/SceneryLayerTwo.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SceneryLayerTwo = function (_Phaser$Group) {
	    _inherits(SceneryLayerTwo, _Phaser$Group);
	
	    function SceneryLayerTwo(game, layerData, defaultStage, scrollRatio, screenHeight, height, y, dispatchEnvironmentChange) {
	        var scale = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
	
	        _classCallCheck(this, SceneryLayerTwo);
	
	        var _this = _possibleConstructorReturn(this, (SceneryLayerTwo.__proto__ || Object.getPrototypeOf(SceneryLayerTwo)).call(this, game));
	
	        _this.initY = y;
	        _this.y = y / scale;
	        _this.layerData = layerData;
	        _this.scrollRatio = scrollRatio;
	        _this.screenHeight = screenHeight;
	        _this.stage = defaultStage || 'urban';
	        _this.currentTextures = _this.layerData[_this.stage].pool;
	        _this.forceStartTexture = false;
	        _this.textureScale = scale;
	
	        _this.layerImagesActive = [];
	        _this.layerImagesPool = [];
	
	        if (dispatchEnvironmentChange) {
	            _this.onEnvironmentChanged = new Phaser.Signal();
	        }
	
	        // populate layer to fill screen
	        _this.currentLayerEnd = _this.x;
	        _this.updateLayerCoverage();
	        _this.layerPosition(0, 0);
	        _this.updateActiveLayerImages();
	        _this.update();
	        return _this;
	    }
	
	    _createClass(SceneryLayerTwo, [{
	        key: 'setLayerStage',
	        value: function setLayerStage(value, forceStartTexture) {
	            this.stage = value || 'urban';
	            this.forceStartTexture = forceStartTexture;
	            this.currentTextures = this.layerData[this.stage].pool;
	        }
	
	        // grab a random texture from currently active list
	
	    }, {
	        key: 'getRandomTexture',
	        value: function getRandomTexture() {
	            if (this.forceStartTexture === true) {
	                this.forceStartTexture = false;
	                if (this.layerData[this.stage].start != false) {
	                    return this.layerData[this.stage].start;
	                }
	            }
	            return this.currentTextures[Math.floor(Math.random() * this.currentTextures.length)];
	        }
	
	        // grabs an idle immage from the pool
	        // populates the texture with a random one from current list
	        // removes image from pool and returns it
	
	    }, {
	        key: 'getImageFromPool',
	        value: function getImageFromPool() {
	            // if pool is empty, make it not so
	            if (this.layerImagesPool.length === 0) {
	                this.layerImagesPool.push(this.game.make.image());
	            }
	
	            var image = this.layerImagesPool.shift();
	            image.scale.set(this.textureScale);
	            image.anchor.set(0, 1);
	            var randomTexture = this.getRandomTexture();
	
	            image.isStart = randomTexture === this.layerData[this.stage].start;
	
	            image.loadTexture(randomTexture);
	
	            return image;
	        }
	    }, {
	        key: 'layerPosition',
	        value: function layerPosition(x, y) {
	
	            this.x = -(x * this.scrollRatio);
	
	            this.updateActiveLayerImages();
	            this.updateLayerCoverage();
	        }
	    }, {
	        key: 'updateActiveLayerImages',
	        value: function updateActiveLayerImages() {
	            var image = void 0,
	                imageEnd = void 0;
	            this.currentLayerEnd = this.x;
	            for (var i = 0; i < this.layerImagesActive.length; i++) {
	                image = this.layerImagesActive[i];
	                imageEnd = this.x + image.x + image.width;
	
	                if (imageEnd < 0) {
	                    this.remove(image);
	                    this.layerImagesActive.splice(i, 1);
	                    this.layerImagesPool.push(image);
	                    i--;
	                } else {
	                    this.currentLayerEnd = Math.max(this.currentLayerEnd, imageEnd);
	                    if (this.currentLayerEnd < this.game.width * 0.75 && image.isStart) {
	                        image.isStart = false;
	                        if (this.onEnvironmentChanged) {
	                            this.onEnvironmentChanged.dispatch();
	                        }
	                    }
	                }
	            }
	        }
	
	        // checks for end of layer coverage, fills in any gaps
	
	    }, {
	        key: 'updateLayerCoverage',
	        value: function updateLayerCoverage() {
	            while (this.currentLayerEnd < this.game.width * 1.25) {
	                var image = this.getImageFromPool();
	                image.x = this.currentLayerEnd - this.x;
	                this.currentLayerEnd += image.width;
	                this.layerImagesActive.push(image);
	                this.addChild(image);
	            }
	        }
	    }]);
	
	    return SceneryLayerTwo;
	}(Phaser.Group);
	
	exports.default = SceneryLayerTwo;

/***/ }),
/* 346 */
/*!****************************************!*\
  !*** ./src/js/states/StateComplete.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _UIButton = __webpack_require__(/*! ../display/UIButton */ 315);
	
	var _UIButton2 = _interopRequireDefault(_UIButton);
	
	var _Transition = __webpack_require__(/*! ../ui/Transition */ 316);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _BtnSoundToggle = __webpack_require__(/*! ../ui/BtnSoundToggle */ 338);
	
	var _BtnSoundToggle2 = _interopRequireDefault(_BtnSoundToggle);
	
	var _SimpleButton = __webpack_require__(/*! ../ui/SimpleButton */ 318);
	
	var _SimpleButton2 = _interopRequireDefault(_SimpleButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StateComplete = function (_Phaser$State) {
	    _inherits(StateComplete, _Phaser$State);
	
	    function StateComplete() {
	        _classCallCheck(this, StateComplete);
	
	        return _possibleConstructorReturn(this, (StateComplete.__proto__ || Object.getPrototypeOf(StateComplete)).apply(this, arguments));
	    }
	
	    _createClass(StateComplete, [{
	        key: "init",
	        value: function init(data) {
	            this.score = data.score;
	            this.timeout = data.timeout;
	        }
	    }, {
	        key: "preload",
	        value: function preload() {}
	    }, {
	        key: "create",
	        value: function create() {
	            this.game.trackEvent("GAME_OVER_SCREEN");
	
	            // make things pretty 
	            this.background = this.game.addScreenImage('bg_generic', 0.5, 0.5);
	
	            // central container ( houses score boxes ) 
	            this.centerPanel = this.game.addScreenImage("gameend_panel_center", 0, 0);
	
	            // grab the current top score
	            var topScore = this.game.getCookie("highscore") || 0;
	            var newTopScore = this.score > topScore;
	            // is it greater than cuurent score
	            if (newTopScore) {
	                topScore = this.score;
	                this.game.setCookie("highscore", this.score);
	
	                this.highScoreAlert = this.game.addScreenText(62, "NEW HIGH SCORE!", '#ffffff', "center", null, this.centerPanel);
	                this.highScoreAlert.position.set(this.centerPanel.width / 2, this.centerPanel.height * 0.56);
	                this.highScoreAlert.anchor.set(0.5);
	                this.highScoreAlert.scale.set(0);
	            }
	
	            // we'll tween the score in, so store a temp value
	            this.tweenedScore = 0;
	
	            // main scorebox
	            this.scorepanel = this.game.addScreenImage("gameend_panel_score", 0, 0, this.centerPanel);
	            this.scorepanel.position.set(this.centerPanel.width * 0.38, this.centerPanel.height / 2 - this.scorepanel.height / 2);
	
	            this.scoreLabel = this.game.addScreenText(180, this.tweenedScore, '#000000', "center", { x: 0, y: 0, width: this.scorepanel.width, height: this.scorepanel.height * 0.9, alignH: "center", alignV: "middle" }, this.scorepanel);
	            this.scoreTitle = this.game.addScreenText(62, "SCORE:", '#808080', "right", { x: -this.centerPanel.width * 0.2, y: 0, width: this.centerPanel.width * 0.3, height: this.scorepanel.height, alignH: "right", alignV: "middle" }, this.scorepanel);
	            this.scoreTitle.anchor.set(1, 0);
	            // highscore box
	            this.highscorePanel = this.game.addScreenImage("gameend_panel_highscore", 0, 0, this.centerPanel);
	            this.highscorePanel.alpha = 0;
	
	            this.highscoreLabel = this.game.addScreenText(70, this.numberWithCommas(topScore), '#000000', "center", { x: this.highscorePanel.width * 0.25, y: 0, width: this.highscorePanel.width * 0.75, height: this.highscorePanel.height * 0.9, alignH: "center", alignV: "middle" }, this.highscorePanel);
	            this.highscoreTitle = this.game.addScreenText(40, "HIGH SCORE:", '#808080', "right", { x: 0, y: this.highscorePanel.y, width: this.highscorePanel.x - 20, height: this.highscorePanel.height, alignH: "right", alignV: "middle" }, this.highscorePanel);
	
	            // game end title
	            this.gameTitle = this.game.addScreenImage(this.timeout ? "gameend_title_timeout" : "gameend_title_wipeout", 0.45, 0);
	
	            if (this.timeout) {
	                this.chars = this.game.addScreenImage("gameend_chars_timeout", 1, 1);
	            } else {
	                this.charDennis = this.game.addScreenImage("gamend_dennis_wipeout", 0, 1);
	                this.charGnasher = this.game.addScreenImage("gamend_gnasher_wipeout", 0, 1);
	            }
	
	            this.btnHome = this.game.addSimpleButton("btn_home", "btn_home_over", this.returnHome, this);
	            this.btnPlay = this.game.addSimpleButton("btn_replay", "btn_replay_over", this.replayGame, this);
	            this.btnSound = this.game.addSoundButton();
	
	            this.game.scale.onSizeChange.add(this.positionElements, this);
	            this.positionElements();
	
	            this.progressKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	            this.progressKey.onDown.add(this.replayGame, this);
	
	            this.transition = new _Transition2.default(this.game);
	            this.transition.onOut.addOnce(this.startScoreTally, this);
	            this.transition.out();
	
	            // initiate score tween
	            this.tweeningScore = true;
	            this.scoreTween = this.game.add.tween(this).to({ tweenedScore: this.score }, 2500, Phaser.Easing.out, false);
	            this.scoreTween.onComplete.addOnce(this.handleTweenedScoreEnd, this);
	
	            this.game.sounds.setVolume("gameplayloop", 0.35);
	        }
	    }, {
	        key: "startScoreTally",
	        value: function startScoreTally() {
	            this.scoreTween.start();
	            this.game.sounds.playSoundEffect("scoretally", true);
	        }
	    }, {
	        key: "numberWithCommas",
	        value: function numberWithCommas(x) {
	            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	        }
	    }, {
	        key: "positionElements",
	        value: function positionElements() {
	            var halfWidth = this.game.width / 2;
	            this.background.position.set(halfWidth, this.game.height / 2);
	            this.centerPanel.position.set(halfWidth - this.centerPanel.width / 2, this.game.height / 2 - this.centerPanel.height / 2);
	            this.gameTitle.position.set(halfWidth, 35);
	
	            this.btnHome.position.set(67, 75);
	            this.btnPlay.position.set(halfWidth, 603);
	            this.btnSound.position.set(this.game.width - 72, 83);
	
	            if (this.charDennis) {
	                this.charDennis.position.set(halfWidth + 268, this.game.height);
	            }
	            if (this.charGnasher) {
	                this.charGnasher.position.set(Math.min(0, halfWidth - 250 - this.charGnasher.width), this.game.height);
	            }
	            if (this.chars) {
	                this.chars.position.set(this.game.width * 0.44, this.game.height);
	            }
	        }
	    }, {
	        key: "returnHome",
	        value: function returnHome() {
	            this.game.state.start("Welcome");
	        }
	    }, {
	        key: "replayGame",
	        value: function replayGame() {
	            this.game.trackEvent("REPLAY_GAME_" + this.game.playCount);
	            this.game.state.start("Play", true, false, this.character);
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            if (this.tweeningScore) {
	                this.scoreLabel.text = this.numberWithCommas(Math.round(this.tweenedScore));
	            }
	        }
	    }, {
	        key: "handleTweenedScoreEnd",
	        value: function handleTweenedScoreEnd() {
	            this.game.sounds.stopSound("scoretally");
	
	            this.tweeningScore = false;
	            this.scoreLabel.text = this.numberWithCommas(this.score);
	            this.highscorePanel.position.set(this.centerPanel.width * 0.45, this.highScoreAlert ? 170 + this.scorepanel.height : 150 + this.scorepanel.height);
	            this.game.add.tween(this.scorepanel).to({ y: this.highScoreAlert ? 90 : 110 }, 200, Phaser.Easing.out, true);
	            this.game.add.tween(this.highscorePanel).to({ alpha: 1 }, 200, Phaser.Easing.out, true, 200);
	
	            if (this.highScoreAlert) {
	                this.game.add.tween(this.highScoreAlert.scale).to({ x: 1, y: 1 }, 200, Phaser.Easing.Back.Out, true, 400);
	                this.game.sounds.playSound("newhighscore");
	                this.game.trackEvent("NEW_HIGH_SCORE");
	            }
	        }
	    }, {
	        key: "shutdown",
	        value: function shutdown() {
	            if (this.highScoreAlert) {
	                this.highScoreAlert.destroy();
	                this.highScoreAlert = null;
	            }
	            this.game.sounds.stopSound("scoretally");
	            this.progressKey.onDown.remove(this.replayGame, this);
	            this.game.scale.onSizeChange.remove(this.positionElements, this);
	        }
	    }]);
	
	    return StateComplete;
	}(Phaser.State);
	
	exports.default = StateComplete;

/***/ }),
/* 347 */
/*!*****************************************!*\
  !*** ./src/js/states/StateResetGame.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Phaser$State) {
	    _inherits(_class, _Phaser$State);
	
	    function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
	        key: 'preload',
	        value: function preload() {}
	    }, {
	        key: 'create',
	        value: function create() {
	            // start loading
	            this.game.resumeGame();
	            this.state.start('Play', true, false, this.game.gameCharacter);
	        }
	    }]);
	
	    return _class;
	}(Phaser.State);
	
	exports.default = _class;

/***/ }),
/* 348 */
/*!**********************************************!*\
  !*** ./src/js/controller/SoundController.js ***!
  \**********************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SoundManager = function () {
	    function SoundManager(game) {
	        _classCallCheck(this, SoundManager);
	
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
	                for (var i in this.sounds) {
	                    if (i != this.backgroundMusic.id) this.sounds[i].mute = this._allowEffects == false;
	                }
	            }
	        });
	    }
	
	    _createClass(SoundManager, [{
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
	                // console.log("cannot find background music : " + id + ", has it been added?");
	            }
	        }
	    }, {
	        key: "playSoundEffect",
	        value: function playSoundEffect(id, loop, volume) {
	            if (this._allowEffects) {
	                if (this.sounds[id]) {
	                    this.playSound(id, loop, volume);
	                } else {
	                    // console.log("cannot find sound effect : " + id + ", has it been added?")
	                }
	            }
	        }
	    }, {
	        key: "playSound",
	        value: function playSound(id, loop, volume, onComplete, onCompleteScope, dontOverride) {
	            if (this.sounds[id]) {
	                if (dontOverride && this.sounds[id].isPlaying) {
	                    return;
	                } else {
	                    this.sounds[id].play(null, 0, volume || 1, loop);
	                    if (onComplete) {
	                        this.sounds[id].onStop.addOnce(onComplete, onCompleteScope);
	                    }
	                }
	            } else {
	                // console.log("cannot find sound : " + id + ", has it been added?")
	            }
	        }
	    }, {
	        key: "stopSound",
	        value: function stopSound(id) {
	            if (this.sounds[id]) {
	                this.sounds[id].stop();
	            }
	        }
	    }, {
	        key: "isSoundPlaying",
	        value: function isSoundPlaying(id) {
	            if (this.sounds[id]) {
	                return this.sounds[id].isPlaying;
	            }
	            return false;
	        }
	    }, {
	        key: "stopAllSounds",
	        value: function stopAllSounds() {
	            for (var i in this.sounds) {
	                this.sounds[i].stop();
	            }
	        }
	    }, {
	        key: "setVolume",
	        value: function setVolume(id, volume) {
	            if (this.backgroundMusic.id == id) {
	                this.backgroundMusic.volume = volume;
	                this.sounds[id].fadeTo(1000, volume);
	            } else {
	                this.sounds[id].volume = volume;
	            }
	        }
	    }]);
	
	    return SoundManager;
	}();
	
	exports.default = SoundManager;

/***/ })
]);
//# sourceMappingURL=bundle.b44539141593548741e1.js.map