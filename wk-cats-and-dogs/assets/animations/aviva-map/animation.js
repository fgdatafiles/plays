(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animation_atlas_1", frames: [[398,204,57,43],[0,0,266,327],[268,0,210,202],[268,204,128,158],[0,396,124,38],[282,364,139,56],[141,364,139,62],[398,249,57,37],[0,329,139,65],[398,288,56,35],[456,288,56,26],[480,0,30,30],[480,32,27,28],[398,325,58,32],[457,233,40,30],[457,204,55,27],[480,62,18,20]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Ah = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AvivaBod = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AvivaHead = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.AvivaTail = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Blink0 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Blink1 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Blink2 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.E = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.EyeWhite = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.L = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.M = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.PupilL = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.PupilR = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.S = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Uh = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.V = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.W = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.AvivaPupilR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PupilR();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,28);


(lib.AvivaPupilL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PupilL();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.AvivaPonyTail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.AvivaTail();
	this.instance.setTransform(-107.6,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.6,-24,128,158);


(lib.AvivaMouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.M();

	this.instance_1 = new lib.L();

	this.instance_2 = new lib.E();

	this.instance_3 = new lib.Ah();

	this.instance_4 = new lib.S();

	this.instance_5 = new lib.Uh();
	this.instance_5.setTransform(10,6.5);

	this.instance_6 = new lib.V();

	this.instance_7 = new lib.W();
	this.instance_7.setTransform(25,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,43);


(lib.AvivaEyewhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.EyeWhite();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,65);


(lib.AvivaEyelids = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Blink0();

	this.instance_1 = new lib.Blink1();
	this.instance_1.setTransform(-6,-4);

	this.instance_2 = new lib.Blink2();
	this.instance_2.setTransform(-6,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-4,139,62);


(lib.AvivaBody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.AvivaBod();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,327);


(lib.AvivaHeadMenu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,idle:4,idleBlink:65,"menu-instructions":126,"menu-select":191,"menu-puppy":253,"menu-kitten":288,"menu-sticker":327,Neutral:0,"Neutral":126,L:130,Ah:133,S:137,Uh:139,"L":142,"S":145,Ee:147,M:149,"Ee":150,"Ah":154,"S":156,"Ah":160,"S":162,"Ah":163,F:168,"Uh":170,"L":172,"Ah":174,"M":178,"Uh":180,"M":183,"Neutral":185,"Neutral":190,"Neutral":191,"L":197,"S":198,"M":200,"Ah":201,"S":210,R:213,Oh:216,"M":218,"Ee":220,D:222,"Ee":224,"L":226,"Ah":227,"D":229,"Oh":232,"R":234,"Ah":236,"L":238,"Ee":242,"F":246,"Neutral":248,"Neutral":252,"Neutral":253,"L":255,"Ah":259,"Oh":267,"M":269,"Ah":274,"L":276,"Ee":278,"L":283,"Neutral":285,"Neutral":287,"Neutral":288,"D":292,"Ah":294,"Oh":303,"M":305,"Neutral":306,"Ah":310,"D":314,"D":321,"Neutral":322,"Neutral":326,"Neutral":327,"S":330,"Ah":336,"S":339,"Ah":341,"S":344,"Ee":347,"D":356,"Ee":358,"Neutral":360};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Aviva_Mouth
	this.instance = new lib.AvivaMouth("single",0);
	this.instance.setTransform(115,175,1,1,0,0,0,33,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({startPosition:0},0).wait(4).to({startPosition:7},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(5).to({startPosition:6},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:7},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:6},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:7},0).wait(4).to({startPosition:2},0).wait(8).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:7},0).wait(2).to({startPosition:2},0).wait(9).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(7).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(6).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(9).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(7));

	// Aviva_Eyelids
	this.instance_1 = new lib.AvivaEyelids("single",0);
	this.instance_1.setTransform(134,121,1,1,0,0,0,79,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({mode:"synched",loop:false},0).wait(68).to({mode:"single",startPosition:2},0).wait(2).to({startPosition:4},0).wait(18).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(192));

	// Aviva_Pupil_L
	this.instance_2 = new lib.AvivaPupilL("single",0);
	this.instance_2.setTransform(86,116,1,1,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(194).to({startPosition:0},0).to({x:98,y:110},5,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).to({x:86,y:116},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({x:100},4,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({x:86},4,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({x:98,y:110},5,cjs.Ease.quadInOut).wait(27).to({startPosition:0},0).to({x:86,y:116},5,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({x:100,y:122},4,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({x:86,y:116},4,cjs.Ease.quadInOut).wait(4));

	// Aviva_Pupil_R
	this.instance_3 = new lib.AvivaPupilR("single",0);
	this.instance_3.setTransform(152,119,1,1,0,0,0,15.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(194).to({startPosition:0},0).to({x:163,y:113},5,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).to({x:152,y:119},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({x:163},4,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({x:152},4,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({x:163,y:113},5,cjs.Ease.quadInOut).wait(27).to({startPosition:0},0).to({x:152,y:119},5,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({x:161,y:125},4,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({x:152,y:119},4,cjs.Ease.quadInOut).wait(4));

	// Aviva_Eyewhite
	this.instance_4 = new lib.AvivaEyewhite("single",0);
	this.instance_4.setTransform(118.5,113.5,1,1,0,0,0,69.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(367));

	// Aviva_Head_png
	this.instance_5 = new lib.AvivaHead();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(367));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,202);


// stage content:
(lib.avivamap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"idle":4,"idleBlink":65,"menu-instructions":126,"menu-select":191,"menu-puppy":253,"menu-kitten":288,"menu-sticker":327};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [64,125,190,252,287,326,366];
	// timeline functions:
	this.frame_64 = function() {
		if (Math.random() < 0.3) {
			this.gotoAndPlay("idleBlink");
		}
		else {
			this.gotoAndPlay("idle");
		}
	}
	this.frame_125 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_190 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_252 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_287 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_326 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_366 = function() {
		this.gotoAndPlay("idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(61).call(this.frame_125).wait(65).call(this.frame_190).wait(62).call(this.frame_252).wait(35).call(this.frame_287).wait(39).call(this.frame_326).wait(40).call(this.frame_366).wait(1));

	// Aviva_Head_Map
	this.instance = new lib.AvivaHeadMenu("synched",0);
	this.instance.setTransform(130.1,207.9,1,1,0,0,0,74.6,166.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:4},0).to({regX:74.7,regY:166.5,skewX:2.1844,skewY:1.7042,x:133.9,y:210.25,startPosition:34},30,cjs.Ease.quadInOut).to({regX:74.6,regY:166.4,skewX:0,skewY:0,x:130.1,y:207.9,startPosition:64},30,cjs.Ease.quadInOut).wait(1).to({startPosition:65},0).to({regX:74.7,regY:166.5,skewX:2.1844,skewY:1.7042,x:133.9,y:210.25,startPosition:95},30,cjs.Ease.quadInOut).to({regX:74.6,regY:166.4,skewX:0,skewY:0,x:130.1,y:207.9,startPosition:125},30,cjs.Ease.quadInOut).wait(1).to({startPosition:126},0).to({rotation:-14.2449,x:125.1,startPosition:136},10,cjs.Ease.quadInOut).wait(41).to({startPosition:177},0).to({rotation:0,x:130.1,startPosition:186},9).wait(5).to({startPosition:191},0).to({regY:166.5,rotation:-11.9442,x:140.1,y:208,startPosition:199},8,cjs.Ease.quadInOut).wait(40).to({startPosition:239},0).to({regY:166.4,rotation:0,x:130.1,y:207.9,startPosition:247},8,cjs.Ease.quadInOut).wait(41).to({startPosition:288},0).to({regY:166.5,rotation:-6.9377,y:208.05,startPosition:295},7,cjs.Ease.quadInOut).wait(20).to({startPosition:315},0).to({regY:166.4,rotation:0,y:207.9,startPosition:323},8,cjs.Ease.quadInOut).wait(44));

	// Aviva_Body
	this.instance_1 = new lib.AvivaBody("synched",0);
	this.instance_1.setTransform(148.1,366.9,1,1,0,0,0,133,163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({startPosition:0},0).to({regX:133.1,scaleX:1.0124,scaleY:0.9924,skewX:0.4801,x:149.55,y:368.15},30,cjs.Ease.quadInOut).to({regX:133,scaleX:1,scaleY:1,skewX:0,x:148.1,y:366.9},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:133.1,scaleX:1.0124,scaleY:0.9924,skewX:0.4801,x:149.55,y:368.15},30,cjs.Ease.quadInOut).to({regX:133,scaleX:1,scaleY:1,skewX:0,x:148.1,y:366.9},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({scaleY:1.0004,skewX:-1.6729,x:143.3},10,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({scaleY:1,skewX:0,x:148.1},9).wait(5).to({startPosition:0},0).to({regX:133.1,scaleY:1.0011,skewX:2.6349,x:155.75},8,cjs.Ease.quadInOut).wait(40).to({startPosition:0},0).to({regX:133,scaleY:1,skewX:0,x:148.1},8).wait(120));

	// Aviva_Pony_Tail
	this.instance_2 = new lib.AvivaPonyTail("synched",0);
	this.instance_2.setTransform(125.1,197.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({startPosition:0},0).to({skewX:1.7461,skewY:1.266,x:130.9,y:197.15},30,cjs.Ease.quadInOut).to({skewX:0,skewY:0,x:125.1,y:197.5},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({skewX:1.7461,skewY:1.266,x:130.9,y:197.15},30,cjs.Ease.quadInOut).to({skewX:0,skewY:0,x:125.1,y:197.5},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-10.4831,x:120.1},10,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-7.5124,x:120.2,y:197.6},5,cjs.Ease.quadInOut).wait(36).to({startPosition:0},0).to({regX:0,regY:0,rotation:7.194,x:125.1,y:197.5},7,cjs.Ease.quadInOut).to({rotation:0},4,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({rotation:-13.7347,x:135.1},8,cjs.Ease.quadInOut).to({rotation:-5.7898},5,cjs.Ease.quadInOut).wait(36).to({startPosition:0},0).to({rotation:4.7379,x:125.1},6,cjs.Ease.quadInOut).to({rotation:0},4,cjs.Ease.quadInOut).wait(37).to({startPosition:0},0).to({rotation:-7.9631},7,cjs.Ease.quadInOut).to({regX:0.1,rotation:-4.4668,x:125.2},4,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({regX:0,rotation:4.2467,x:125.1},5,cjs.Ease.quadInOut).to({rotation:0},3,cjs.Ease.quadInOut).wait(41));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(186.1,278.3,110.1,252.2);
// library properties:
lib.properties = {
	id: '5251952CF5444BAE99F0538D8627296A',
	width: 369,
	height: 530,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animation_atlas_1.png", id:"animation_atlas_1"}
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
an.compositions['5251952CF5444BAE99F0538D8627296A'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;