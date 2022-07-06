(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"plane_atlas_", frames: [[0,253,435,152],[484,28,9,46],[495,28,8,46],[0,0,439,251],[464,28,18,24],[441,0,21,192],[464,0,45,26],[441,194,59,18],[0,407,144,139]]}
];


// symbols:



(lib.bannerShadow = function() {
	this.initialize(ss["plane_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_49 = function() {
	this.initialize(ss["plane_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_50 = function() {
	this.initialize(ss["plane_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.penguinPlanepropless = function() {
	this.initialize(ss["plane_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PropNub = function() {
	this.initialize(ss["plane_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.propeller = function() {
	this.initialize(ss["plane_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.scarf_01 = function() {
	this.initialize(ss["plane_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.scarf_02 = function() {
	this.initialize(ss["plane_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.stringsShadow = function() {
	this.initialize(ss["plane_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Strings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.stringsShadow();
	this.instance.parent = this;
	this.instance.setTransform(-39,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,0,144,139);


(lib.ScarfF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.scarf_02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,18);


(lib.ScarfB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.scarf_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,26);


(lib.Propellar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.propeller();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Propellar, new cjs.Rectangle(0,0,21,192), null);


(lib.BannerBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bannerShadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BannerBox, new cjs.Rectangle(0,0,435,152), null);


(lib.ScarfFlip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Scarf_F
	this.instance = new lib.ScarfF("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(29.5,26,1,1,0,0,0,29.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:29.4,regY:9.1,scaleX:0.784,rotation:-14.9983,x:23.35,y:20.75},3).to({scaleX:0.9566,scaleY:0.9998,rotation:-2.8142,x:28.35,y:25},4).wait(1));

	// Scarf_B
	this.instance_1 = new lib.ScarfB("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.1,16.3,1,1,7.7523,0,0,22.6,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:13,scaleX:1.1089,scaleY:0.9999,rotation:29.4526,x:30.1,y:26.95},4).to({regY:13.1,scaleX:1.0211,scaleY:0.9993,rotation:12.0313,x:26.85,y:18.45},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0.3,60.2,50.300000000000004);


(lib.PropSpin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.CachedTexturedBitmap_49();
	this.instance.parent = this;
	this.instance.setTransform(6.7,73.55);

	this.instance_1 = new lib.CachedTexturedBitmap_50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.3,72.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).wait(2));

	// Layer_2
	this.instance_2 = new lib.PropNub();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.55,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5));

	// Layer_1
	this.instance_3 = new lib.Propellar();
	this.instance_3.parent = this;
	this.instance_3.setTransform(11,96,1,1,0,0,0,11,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:96.1,scaleY:0.5417,y:96.05},0).wait(1).to({regY:96.2,scaleY:0.271},0).wait(1).to({scaleY:0.2716,skewX:176.1502},0).wait(1).to({regY:96.1,scaleY:0.5417,skewX:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,0,24.5,192);


(lib.Plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.PropSpin("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.95,96,1,1,0,0,0,10.5,96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Layer_3
	this.instance_1 = new lib.penguinPlanepropless();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,0,439,261);


(lib.Banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.BannerBox();
	this.instance.parent = this;
	this.instance.setTransform(24,86,1,1,0,0,0,62,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9802,skewY:-1.0374,x:24.1},0).wait(2).to({scaleX:0.9606,skewY:-2.3024,x:24,y:85.95},0).wait(2).to({regX:61.9,scaleX:0.9802,skewY:-1.0392,x:24.05},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-14.4,435,168.8);


(lib.LoadingLoop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Strings
	this.instance = new lib.Strings("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(438.3,57.45,1,1,0,0,0,52.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:33,regY:69.5,scaleX:1.0003,skewY:-0.1928,x:418.75,y:88.55},0).wait(1).to({scaleX:1.0006,skewY:-0.4271,y:88.65},0).wait(1).to({scaleX:1.0011,skewY:-0.7056,y:88.8},0).wait(1).to({scaleX:1.0015,skewY:-1.0307,y:89},0).wait(1).to({scaleX:1.0021,skewY:-1.4041,y:89.2},0).wait(1).to({scaleX:1.0027,skewY:-1.8265,x:418.7,y:89.45},0).wait(1).to({scaleX:1.0034,skewY:-2.2971,x:418.75,y:89.65},0).wait(1).to({scaleX:1.0041,skewY:-2.8128,x:418.7,y:89.95},0).wait(1).to({scaleX:1.005,skewY:-3.3679,y:90.3},0).wait(1).to({scaleX:1.0058,skewY:-3.9535,y:90.6},0).wait(1).to({scaleX:1.0067,skewY:-4.558,y:90.95},0).wait(1).to({scaleX:1.0076,skewY:-5.1678,y:91.3},0).wait(1).to({scaleX:1.0085,skewY:-5.7685,y:91.6},0).wait(1).to({scaleX:1.0093,skewY:-6.3466,y:91.95},0).wait(1).to({scaleX:1.0102,skewY:-6.8907,x:418.75,y:92.25},0).wait(1).to({scaleX:1.0109,skewY:-7.3926,y:92.5},0).wait(1).to({scaleX:1.0116,skewY:-7.8467,x:418.7,y:92.8},0).wait(1).to({scaleX:1.0121,skewY:-8.2505,x:418.75,y:93},0).wait(1).to({scaleX:1.0127,skewY:-8.6036,y:93.2},0).wait(1).to({scaleX:1.0131,skewY:-8.9069,x:418.8,y:93.35},0).wait(1).to({scaleX:1.0135,skewY:-9.1626,x:418.75,y:93.5},0).wait(1).to({scaleX:1.0138,skewY:-9.3732,y:93.65},0).wait(1).to({regX:52.5,regY:38.6,scaleX:1.014,skewY:-9.5417,x:438.3,y:59.5},0).wait(1).to({regX:33,regY:69.5,scaleX:1.0138,skewY:-9.3638,x:418.75,y:93.5},0).wait(1).to({scaleX:1.0135,skewY:-9.1506,y:93.45},0).wait(1).to({scaleX:1.0131,skewY:-8.8999,x:418.8,y:93.3},0).wait(1).to({scaleX:1.0127,skewY:-8.6098,x:418.75,y:93.1},0).wait(1).to({scaleX:1.0122,skewY:-8.2787,y:92.95},0).wait(1).to({scaleX:1.0117,skewY:-7.9057,y:92.7},0).wait(1).to({scaleX:1.0111,skewY:-7.491,y:92.5},0).wait(1).to({scaleX:1.0104,skewY:-7.0358,y:92.2},0).wait(1).to({scaleX:1.0097,skewY:-6.5435,y:91.95},0).wait(1).to({scaleX:1.009,skewY:-6.0194,y:91.65},0).wait(1).to({scaleX:1.0082,skewY:-5.4708,y:91.4},0).wait(1).to({scaleX:1.0074,skewY:-4.9074,y:91.05},0).wait(1).to({scaleX:1.0065,skewY:-4.34,y:90.75},0).wait(1).to({scaleX:1.0057,skewY:-3.7798,y:90.4},0).wait(1).to({scaleX:1.0049,skewY:-3.2378,x:418.8,y:90.15},0).wait(1).to({scaleX:1.0042,skewY:-2.723,y:89.85},0).wait(1).to({scaleX:1.0035,skewY:-2.2428,y:89.55},0).wait(1).to({scaleX:1.0028,skewY:-1.8021,x:418.85,y:89.3},0).wait(1).to({scaleX:1.0023,skewY:-1.4037,x:418.8,y:89.1},0).wait(1).to({scaleX:1.0018,skewY:-1.0488,x:418.85,y:88.9},0).wait(1).to({scaleX:1.0013,skewY:-0.7372,y:88.75},0).wait(1).to({scaleX:1.0009,skewY:-0.4676,x:418.9,y:88.6},0).wait(1).to({scaleX:1.0006,skewY:-0.2383,x:418.85,y:88.45},0).wait(1).to({regX:52.6,regY:38.6,scaleX:1.0003,skewY:0,x:438.45,y:57.5},0).wait(1));

	// Plane
	this.instance_1 = new lib.Plane("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(199,99,1,1,0,0,0,199,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:178.5,regY:130.5,rotation:0.0646,x:178.45,y:130.5,startPosition:1},0).wait(1).to({rotation:0.1431,startPosition:2},0).wait(1).to({rotation:0.2364,x:178.35,y:130.45,startPosition:3},0).wait(1).to({rotation:0.3453,x:178.3,y:130.4,startPosition:4},0).wait(1).to({rotation:0.4703,x:178.25,y:130.35,startPosition:0},0).wait(1).to({rotation:0.6118,x:178.15,y:130.3,startPosition:1},0).wait(1).to({rotation:0.7695,x:178.1,y:130.25,startPosition:2},0).wait(1).to({rotation:0.9422,x:178,startPosition:3},0).wait(1).to({rotation:1.1282,x:177.9,y:130.1,startPosition:4},0).wait(1).to({rotation:1.3243,x:177.8,y:130,startPosition:0},0).wait(1).to({rotation:1.5268,x:177.65,startPosition:1},0).wait(1).to({rotation:1.7311,x:177.55,y:129.95,startPosition:2},0).wait(1).to({rotation:1.9323,x:177.45,y:129.85,startPosition:3},0).wait(1).to({rotation:2.1259,x:177.4,y:129.75,startPosition:4},0).wait(1).to({rotation:2.3082,x:177.25,y:129.7,startPosition:0},0).wait(1).to({rotation:2.4763,x:177.2,y:129.65,startPosition:1},0).wait(1).to({rotation:2.6284,x:177.1,y:129.6,startPosition:2},0).wait(1).to({rotation:2.7637,x:177.05,y:129.55,startPosition:3},0).wait(1).to({rotation:2.882,x:177,y:129.5,startPosition:4},0).wait(1).to({rotation:2.9836,x:176.9,y:129.45,startPosition:0},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,rotation:3.0692,x:176.85,y:129.4,startPosition:1},0).wait(1).to({rotation:3.1398,startPosition:2},0).wait(1).to({regX:199.1,regY:99,scaleX:1,scaleY:1,rotation:3.1962,x:199.15,y:99.05,startPosition:0},0).wait(1).to({regX:178.5,regY:130.5,scaleX:1.0001,scaleY:1.0001,rotation:3.1366,x:176.8,y:129.35,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.0651,y:129.4,startPosition:2},0).wait(1).to({rotation:2.981,x:176.85,y:129.45,startPosition:3},0).wait(1).to({rotation:2.8837,x:176.95,y:129.55,startPosition:4},0).wait(1).to({rotation:2.7727,x:177,startPosition:0},0).wait(1).to({rotation:2.6476,y:129.6,startPosition:1},0).wait(1).to({rotation:2.5085,x:177.15,y:129.65,startPosition:2},0).wait(1).to({rotation:2.3559,x:177.2,y:129.7,startPosition:3},0).wait(1).to({rotation:2.1908,x:177.25,y:129.75,startPosition:4},0).wait(1).to({rotation:2.015,x:177.4,y:129.85,startPosition:0},0).wait(1).to({rotation:1.8311,x:177.5,y:129.9,startPosition:1},0).wait(1).to({rotation:1.6421,x:177.6,y:129.95,startPosition:2},0).wait(1).to({rotation:1.4518,x:177.7,y:130,startPosition:3},0).wait(1).to({rotation:1.264,x:177.75,y:130.1,startPosition:4},0).wait(1).to({rotation:1.0822,x:177.85,y:130.2,startPosition:0},0).wait(1).to({rotation:0.9096,x:178,y:130.25,startPosition:1},0).wait(1).to({rotation:0.7485,x:178.05,y:130.35,startPosition:2},0).wait(1).to({rotation:0.6007,x:178.15,startPosition:3},0).wait(1).to({rotation:0.4671,x:178.2,y:130.4,startPosition:4},0).wait(1).to({rotation:0.3481,x:178.25,y:130.45,startPosition:0},0).wait(1).to({rotation:0.2436,x:178.35,startPosition:1},0).wait(1).to({rotation:0.1532,y:130.55,startPosition:2},0).wait(1).to({rotation:0.0763,x:178.45,startPosition:3},0).wait(1).to({regX:199.1,regY:99,rotation:0.0122,x:199.1,y:99.05,startPosition:0},0).wait(1));

	// Scarf_Flip
	this.instance_2 = new lib.ScarfFlip("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(268.8,40.45,1,1,0,0,0,29.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:28.9,regY:25.4,rotation:0.0646,x:268.2,y:48.4,startPosition:1},0).wait(1).to({rotation:0.1431,x:268.3,y:48.5,startPosition:2},0).wait(1).to({rotation:0.2364,x:268.4,y:48.6,startPosition:3},0).wait(1).to({rotation:0.3453,x:268.45,y:48.75,startPosition:4},0).wait(1).to({rotation:0.4703,x:268.6,y:48.95,startPosition:5},0).wait(1).to({rotation:0.6118,x:268.7,y:49.1,startPosition:6},0).wait(1).to({rotation:0.7695,x:268.85,y:49.3,startPosition:7},0).wait(1).to({rotation:0.9422,x:269,y:49.5,startPosition:0},0).wait(1).to({rotation:1.1282,x:269.15,y:49.75,startPosition:1},0).wait(1).to({rotation:1.3243,x:269.3,y:50,startPosition:2},0).wait(1).to({rotation:1.5268,x:269.45,y:50.25,startPosition:3},0).wait(1).to({rotation:1.7311,x:269.7,y:50.5,startPosition:4},0).wait(1).to({rotation:1.9323,x:269.85,y:50.75,startPosition:5},0).wait(1).to({rotation:2.1259,x:270,y:51,startPosition:6},0).wait(1).to({rotation:2.3082,x:270.2,y:51.25,startPosition:7},0).wait(1).to({rotation:2.4763,x:270.25,y:51.45,startPosition:0},0).wait(1).to({rotation:2.6284,x:270.4,y:51.65,startPosition:1},0).wait(1).to({rotation:2.7637,x:270.55,y:51.8,startPosition:2},0).wait(1).to({rotation:2.882,x:270.6,y:51.95,startPosition:3},0).wait(1).to({rotation:2.9836,x:270.75,y:52.05,startPosition:4},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,rotation:3.0692,x:270.8,y:52.2,startPosition:5},0).wait(1).to({rotation:3.1398,x:270.85,y:52.3,startPosition:6},0).wait(1).to({regX:29.6,regY:17.6,scaleX:1,scaleY:1,rotation:3.1962,x:272,y:44.55,startPosition:7},0).wait(1).to({regX:28.9,regY:25.4,scaleX:1.0001,scaleY:1.0001,rotation:3.1366,x:270.8,y:52.25,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.0651,x:270.75,y:52.1,startPosition:1},0).wait(1).to({rotation:2.981,x:270.7,y:52,startPosition:2},0).wait(1).to({rotation:2.8837,x:270.55,y:51.9,startPosition:3},0).wait(1).to({rotation:2.7727,x:270.45,y:51.75,startPosition:4},0).wait(1).to({rotation:2.6476,x:270.4,y:51.6,startPosition:5},0).wait(1).to({rotation:2.5085,x:270.25,y:51.45,startPosition:6},0).wait(1).to({rotation:2.3559,x:270.15,y:51.3,startPosition:7},0).wait(1).to({rotation:2.1908,x:270.05,y:51.05,startPosition:0},0).wait(1).to({rotation:2.015,x:269.85,y:50.85,startPosition:1},0).wait(1).to({rotation:1.8311,x:269.75,y:50.6,startPosition:2},0).wait(1).to({rotation:1.6421,x:269.55,y:50.4,startPosition:3},0).wait(1).to({rotation:1.4518,x:269.4,y:50.15,startPosition:4},0).wait(1).to({rotation:1.264,x:269.25,y:49.9,startPosition:5},0).wait(1).to({rotation:1.0822,x:269.05,y:49.7,startPosition:6},0).wait(1).to({rotation:0.9096,x:268.95,y:49.45,startPosition:7},0).wait(1).to({rotation:0.7485,x:268.8,y:49.25,startPosition:0},0).wait(1).to({rotation:0.6007,x:268.7,y:49.05,startPosition:1},0).wait(1).to({rotation:0.4671,x:268.55,y:48.9,startPosition:2},0).wait(1).to({rotation:0.3481,x:268.45,y:48.8,startPosition:3},0).wait(1).to({rotation:0.2436,x:268.35,y:48.6,startPosition:4},0).wait(1).to({rotation:0.1532,x:268.3,y:48.55,startPosition:5},0).wait(1).to({rotation:0.0763,x:268.2,y:48.4,startPosition:6},0).wait(1).to({regX:29.6,regY:17.6,rotation:0.0122,x:268.85,y:40.5,startPosition:7},0).wait(1));

	// Banner
	this.instance_3 = new lib.Banner("synched",7);
	this.instance_3.parent = this;
	this.instance_3.setTransform(664.1,68.75,1.0014,1,0,0,3.1401,198.6,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:179.5,regY:70,scaleX:1.0012,skewY:2.8988,x:645,y:92.1,startPosition:0},0).wait(1).to({scaleX:1.001,skewY:2.6596,x:645.05,y:91,startPosition:1},0).wait(1).to({scaleX:1.0008,skewY:2.4227,x:645.1,y:89.95,startPosition:2},0).wait(1).to({scaleX:1.0006,skewY:2.1879,y:88.85,startPosition:3},0).wait(1).to({scaleX:1.0003,skewY:1.9553,x:645.15,y:87.8,startPosition:4},0).wait(1).to({scaleX:1.0001,skewY:1.7248,x:645.2,y:86.8,startPosition:5},0).wait(1).to({scaleX:0.9999,skewY:1.4965,y:85.75,startPosition:6},0).wait(1).to({scaleX:0.9997,skewY:1.2704,x:645.25,y:84.75,startPosition:7},0).wait(1).to({scaleX:0.9995,skewY:1.0464,x:645.3,y:83.75,startPosition:0},0).wait(1).to({scaleX:0.9993,skewY:0.8245,y:82.75,startPosition:1},0).wait(1).to({scaleX:0.9991,skewY:0.6047,y:81.75,startPosition:2},0).wait(1).to({scaleX:0.9989,skewY:0.3871,x:645.4,y:80.75,startPosition:3},0).wait(1).to({scaleX:0.9987,skewY:0.1716,y:79.8,startPosition:4},0).wait(1).to({scaleX:0.9985,skewY:0,y:78.8,startPosition:5},0).wait(1).to({scaleX:0.9983,skewY:-0.2531,x:645.5,y:77.85,startPosition:6},0).wait(1).to({scaleX:0.9981,skewY:-0.4623,y:76.9,startPosition:7},0).wait(1).to({scaleX:0.9979,skewY:-0.6695,x:645.55,y:75.95,startPosition:0},0).wait(1).to({scaleX:0.9977,skewY:-0.8745,y:75,startPosition:1},0).wait(1).to({scaleX:0.9975,skewY:-1.0774,x:645.6,y:74.15,startPosition:2},0).wait(1).to({scaleX:0.9973,skewY:-1.2783,y:73.2,startPosition:3},0).wait(1).to({scaleX:0.9971,skewY:-1.4771,x:645.65,y:72.35,startPosition:4},0).wait(1).to({scaleX:0.9969,skewY:-1.6739,x:645.7,y:71.4,startPosition:5},0).wait(1).to({regX:198.5,regY:44.6,scaleX:0.9967,skewY:-1.8686,x:664.8,y:44.5,startPosition:7},0).wait(1).to({regX:179.5,regY:70,scaleX:0.9968,skewY:-1.7843,x:645.85,y:70.9,startPosition:0},0).wait(1).to({scaleX:0.9969,skewY:-1.6874,x:645.8,y:71.35,startPosition:1},0).wait(1).to({scaleX:0.997,skewY:-1.5772,y:71.85,startPosition:2},0).wait(1).to({scaleX:0.9972,skewY:-1.4532,y:72.35,startPosition:3},0).wait(1).to({scaleX:0.9973,skewY:-1.3149,x:645.75,y:73,startPosition:4},0).wait(1).to({scaleX:0.9974,skewY:-1.1617,y:73.65,startPosition:5},0).wait(1).to({scaleX:0.9976,skewY:-0.9935,x:645.7,y:74.45,startPosition:6},0).wait(1).to({scaleX:0.9977,skewY:-0.8099,y:75.25,startPosition:7},0).wait(1).to({scaleX:0.9979,skewY:-0.6111,x:645.6,y:76.2,startPosition:0},0).wait(1).to({scaleX:0.9982,skewY:-0.3974,y:77.15,startPosition:1},0).wait(1).to({scaleX:0.9984,skewY:-0.1694,x:645.55,y:78.15,startPosition:2},0).wait(1).to({scaleX:0.9986,skewY:0.0716,y:79.25,startPosition:3},0).wait(1).to({scaleX:0.9988,skewY:0.3244,x:645.5,y:80.4,startPosition:4},0).wait(1).to({scaleX:0.9991,skewY:0.5867,x:645.4,y:81.6,startPosition:5},0).wait(1).to({scaleX:0.9993,skewY:0.8564,y:82.85,startPosition:6},0).wait(1).to({scaleX:0.9996,skewY:1.1305,x:645.35,y:84.05,startPosition:7},0).wait(1).to({scaleX:0.9998,skewY:1.406,x:645.3,y:85.3,startPosition:0},0).wait(1).to({scaleX:1.0001,skewY:1.68,y:86.5,startPosition:1},0).wait(1).to({scaleX:1.0003,skewY:1.9492,x:645.25,y:87.75,startPosition:2},0).wait(1).to({scaleX:1.0006,skewY:2.211,x:645.2,y:88.95,startPosition:3},0).wait(1).to({scaleX:1.0008,skewY:2.4627,y:90.05,startPosition:4},0).wait(1).to({scaleX:1.001,skewY:2.7025,x:645.15,y:91.15,startPosition:5},0).wait(1).to({scaleX:1.0013,skewY:2.9287,x:645.1,y:92.2,startPosition:6},0).wait(1).to({regX:198.6,regY:44.5,scaleX:1.0014,skewY:3.1401,x:664.1,y:68.75,startPosition:7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-18.4,912.4,290.29999999999995);


// stage content:
(lib.plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LoadingLoop("synched",41);
	this.instance.parent = this;
	this.instance.setTransform(859.3,360.95,1,1,0,0,0,431.2,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1210.5,627.5,80.40000000000009,-93.70000000000005);
// library properties:
lib.properties = {
	id: 'B7DD617AFC8F45879B23C5711ADF62BE',
	width: 1664,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/plane_atlas_.png", id:"plane_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B7DD617AFC8F45879B23C5711ADF62BE'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;