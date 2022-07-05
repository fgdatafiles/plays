(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"bob_atlas_", frames: [[0,1277,390,332],[0,934,384,341],[331,0,378,353],[0,571,366,361],[0,1611,350,367],[368,355,320,359],[386,716,288,353],[392,1071,274,352],[668,1147,263,351],[352,1611,184,333],[538,1776,317,116],[538,1894,201,119],[829,1616,108,107],[741,1894,120,112],[829,1500,114,114],[392,1425,120,139],[0,0,329,569],[676,787,278,358],[690,403,278,382],[711,0,278,401],[706,1500,121,263],[538,1500,166,274]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.DogArm1 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.DogArm2 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.DogArm3 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.DogHand1 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.DogHand2 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.DogHand3 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.DogHand5 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.DogHOBody = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.DogHOMouth1 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.DogHOMouth2 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.DogHOMouth3 = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.DogLEarL = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.DogLEarR = function() {
	this.initialize(ss["bob_atlas_"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.DogHeadHO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dog_HO_Mouth_1_png
	this.instance = new lib.DogHOMouth1();
	this.instance.parent = this;
	this.instance.setTransform(-139,-387.55);

	this.instance_1 = new lib.DogHOMouth2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-139,-383);

	this.instance_2 = new lib.DogHOMouth3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-139,-380);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-387.5,278,408.5);


(lib.DogEar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DogLEarL();
	this.instance.parent = this;
	this.instance.setTransform(23,-26,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-26,121,263);


(lib.DogBodyHO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglHAY0MAAAgxnMBKPAAAMAAAAxng");
	mask.setTransform(-7.45,-141.5);

	// Layer_1
	this.instance = new lib.DogHOBody();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-287);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.5,-287,329,304.3);


(lib.DogArms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-60,-166);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61,-186);

	this.instance_2 = new lib.Bitmap3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62,-209);

	this.instance_3 = new lib.Bitmap4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62,-228);

	this.instance_4 = new lib.Bitmap5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-67,-253);

	this.instance_5 = new lib.Bitmap6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-66,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-260,397,426);


(lib.FroyoSwap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.DogLipsync = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DogHeadHO("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,28.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(13).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(9).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(9).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(15).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(15).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(10).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(6).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(12).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(11).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(8).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(11).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(12).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(13).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(13).to({startPosition:0},0).wait(8).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(13).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(8).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(14).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(20).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(15).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(9).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(9).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(16).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(10).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(6).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(11).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(12).to({startPosition:0},0).wait(13).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(8).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(12).to({startPosition:1},0).wait(15).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(8).to({startPosition:0},0).wait(11).to({startPosition:1},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(75).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(20).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-358.8,278,408.6);


(lib.DogHands = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.FroyoContainer = new lib.FroyoSwap();
	this.FroyoContainer.name = "FroyoContainer";
	this.FroyoContainer.parent = this;
	this.FroyoContainer.setTransform(-4.75,-46.8,1,1,-3.0291,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.FroyoContainer).to({_off:true},1).wait(2).to({_off:false},0).wait(2));

	// Layer_1
	this.instance = new lib.DogHand1();
	this.instance.parent = this;
	this.instance.setTransform(-30.45,28,1,1,-66.9228);

	this.instance_1 = new lib.DogHand5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.35,75.75,1,1,0,172.0183,-7.9817);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-78.5,148.9,154.3);


(lib.DogGameplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lipsync
	this.instance = new lib.DogLipsync("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-11.55,-255.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.1,rotation:8.9736,x:-2.75,y:-255.8,startPosition:6},6,cjs.Ease.quadInOut).wait(13).to({startPosition:19},0).to({regX:0,regY:0,rotation:0,x:-11.55,y:-255.85,startPosition:26},7,cjs.Ease.quadInOut).wait(1).to({startPosition:27},0).to({regX:-0.1,regY:-0.1,rotation:-9.7018,x:-29.05,y:-256,startPosition:34},7,cjs.Ease.quadInOut).wait(21).to({startPosition:55},0).to({regX:0,regY:0,rotation:0,x:-11.55,y:-255.85,startPosition:66},11,cjs.Ease.quadInOut).wait(4).to({startPosition:70},0).wait(27).to({startPosition:97},0).to({y:-293.35,startPosition:106},9,cjs.Ease.quadInOut).to({y:-255.85,startPosition:115},9,cjs.Ease.quadInOut).wait(12).to({startPosition:127},0).to({regX:-0.1,regY:-0.1,rotation:-9.7018,x:-29.05,y:-256,startPosition:134},7,cjs.Ease.quadInOut).wait(21).to({startPosition:155},0).to({regX:0,regY:0,rotation:0,x:-11.55,y:-255.85,startPosition:166},11,cjs.Ease.quadInOut).wait(49).to({startPosition:215},0).to({regX:-0.1,rotation:9.6903,x:-2.75,y:-255.9,startPosition:223},8,cjs.Ease.quadInOut).wait(25).to({startPosition:248},0).to({regX:0,rotation:0,x:-11.55,y:-255.85,startPosition:258},10,cjs.Ease.quadInOut).wait(2).to({startPosition:260},0).to({regX:-0.1,regY:-0.1,rotation:-9.7018,x:-29.05,y:-256,startPosition:270},10,cjs.Ease.quadInOut).wait(31).to({startPosition:301},0).to({regX:0,regY:0,rotation:0,x:-11.55,y:-255.85,startPosition:312},11,cjs.Ease.quadInOut).wait(4).to({startPosition:316},0).to({y:-327.8,startPosition:322},6,cjs.Ease.quadInOut).wait(18).to({startPosition:340},0).to({y:-309.05,startPosition:345},5).to({y:-327.8,startPosition:348},3,cjs.Ease.quadInOut).to({y:-309.05,startPosition:353},5).wait(3).to({startPosition:356},0).to({y:-255.85,startPosition:366},10).wait(9).to({startPosition:375},0).to({rotation:-7.4549,x:-11.15,y:-256,startPosition:383},8,cjs.Ease.quadInOut).wait(20).to({startPosition:403},0).to({rotation:0,x:-11.55,y:-255.85,startPosition:412},9,cjs.Ease.quadInOut).wait(1).to({startPosition:413},0).to({y:-318.35,startPosition:419},6,cjs.Ease.quadInOut).to({y:-302.55,startPosition:422},3,cjs.Ease.quadInOut).wait(34).to({startPosition:456},0).to({y:-255.85,startPosition:464},8,cjs.Ease.quadInOut).wait(3).to({startPosition:467},0).to({regX:0.1,regY:-0.1,rotation:9.3985,x:10.4,y:-255.5,startPosition:474},7,cjs.Ease.quadInOut).wait(29).to({regX:0.2,regY:-0.2,scaleX:0.9918,scaleY:0.9917,rotation:9.3974,y:-255.45,startPosition:503},0).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-8.7914,x:-27.6,y:-254.05,startPosition:510},7,cjs.Ease.quadInOut).wait(15).to({rotation:-8.7914,startPosition:525},0).to({regX:0,regY:0,rotation:0,x:-11.55,y:-255.85,startPosition:534},9,cjs.Ease.quadInOut).wait(28).to({startPosition:562},0).to({rotation:7.4586,x:-3.9,startPosition:569},7,cjs.Ease.quadInOut).wait(24).to({startPosition:593},0).to({rotation:0,x:-11.55,startPosition:601},8,cjs.Ease.quadInOut).wait(17).to({startPosition:618},0).to({y:-296.55,startPosition:623},5,cjs.Ease.quadInOut).to({y:-255.85,startPosition:628},5,cjs.Ease.quadInOut).wait(13).to({startPosition:641},0).to({rotation:3.1962,x:-0.7,y:-255.3,startPosition:650},9,cjs.Ease.quadInOut).to({rotation:-4.466,x:-27.15,y:-254.45,startPosition:669},19,cjs.Ease.quadInOut).to({rotation:3.1962,x:-0.7,y:-255.3,startPosition:689},20,cjs.Ease.quadInOut).to({rotation:0,x:-11.55,y:-255.85,startPosition:703},14,cjs.Ease.quadInOut).wait(1).to({startPosition:704},0).wait(2).to({startPosition:706},0).to({y:-296.55,startPosition:711},5,cjs.Ease.quadInOut).wait(24).to({startPosition:735},0).to({y:-255.85,startPosition:740},5,cjs.Ease.quadInOut).wait(8).to({startPosition:748},0).to({rotation:6.7474,x:-13.4,y:-256.4,startPosition:754},6,cjs.Ease.quadInOut).wait(22).to({startPosition:776},0).to({rotation:0,x:-11.55,y:-255.85,startPosition:784},8,cjs.Ease.quadInOut).wait(1).to({startPosition:785},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,rotation:-8.9431,x:-28.5,y:-235.55,startPosition:792},7,cjs.Ease.quadInOut).wait(18).to({startPosition:810},0).to({scaleX:0.9671,scaleY:0.9671,rotation:-7.3539,x:-25.55,y:-253,startPosition:812},2,cjs.Ease.quadIn).to({scaleX:0.9778,scaleY:0.9778,rotation:-4.9689,x:-20.95,y:-263.45,startPosition:815},3).to({regX:-0.2,scaleX:0.9866,scaleY:0.9866,rotation:-2.9814,x:-17.3,y:-266.75,startPosition:817},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-11.55,y:-255.85,startPosition:820},3,cjs.Ease.quadOut).wait(1).to({startPosition:821},0).to({regX:0.1,regY:-0.1,rotation:7.2161,x:20.85,y:-288.2,startPosition:827},6,cjs.Ease.quadInOut).wait(28).to({startPosition:855},0).to({regX:0,regY:0,rotation:0,x:-11.55,y:-255.85,startPosition:863},8,cjs.Ease.quadInOut).wait(1).to({startPosition:864},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,rotation:-8.9431,x:-28.5,y:-235.55,startPosition:871},7,cjs.Ease.quadInOut).wait(41).to({startPosition:912},0).to({scaleX:0.9671,scaleY:0.9671,rotation:-7.3539,x:-25.55,y:-253,startPosition:914},2,cjs.Ease.quadIn).to({scaleX:0.9778,scaleY:0.9778,rotation:-4.9689,x:-20.95,y:-263.45,startPosition:917},3).to({regX:-0.2,scaleX:0.9866,scaleY:0.9866,rotation:-2.9814,x:-17.3,y:-266.75,startPosition:919},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-11.55,y:-255.85,startPosition:922},3,cjs.Ease.quadOut).wait(3).to({startPosition:925},0).to({rotation:7.4478,x:-9.9,y:-256.8,startPosition:933},8,cjs.Ease.quadInOut).wait(20).to({startPosition:953},0).to({rotation:0,x:-11.55,y:-255.85,startPosition:964},11,cjs.Ease.quadInOut).wait(59).to({startPosition:1023},0).to({rotation:3.1962,x:-0.7,y:-255.3,startPosition:1032},9,cjs.Ease.quadInOut).to({rotation:-4.466,x:-27.15,y:-254.45,startPosition:1047},15,cjs.Ease.quadInOut).to({rotation:3.1962,x:-0.7,y:-255.3,startPosition:1062},15,cjs.Ease.quadInOut).to({rotation:0,x:-11.55,y:-255.85,startPosition:1073},11,cjs.Ease.quadInOut).wait(1).to({startPosition:1074},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,rotation:-8.9431,x:-28.5,y:-235.55,startPosition:1086},12,cjs.Ease.quadInOut).wait(45).to({startPosition:1131},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:4.4773,x:4.75,y:-255.7,startPosition:1145},14,cjs.Ease.quadInOut).wait(21).to({rotation:0,x:-11.55,y:-255.85,startPosition:1166},0).to({regX:-0.1,rotation:-8.6039,x:-22.05,y:-256,startPosition:1176},10,cjs.Ease.quadInOut).wait(5).to({startPosition:1181},0).to({regX:0,scaleX:0.9999,scaleY:0.9999,rotation:15.349,x:26,y:-254.85,startPosition:1189},8,cjs.Ease.quadInOut).wait(19).to({startPosition:1208},0).to({scaleX:1,scaleY:1,rotation:0,x:-11.55,y:-255.85,startPosition:1217},9,cjs.Ease.quadInOut).wait(1).to({startPosition:1218},0).to({startPosition:1222},4,cjs.Ease.quadInOut).to({startPosition:1226},4,cjs.Ease.quadInOut).wait(14).to({startPosition:1240},0).to({rotation:-6.216,x:-18.75,y:-255.7,startPosition:1248},8,cjs.Ease.quadInOut).wait(42).to({startPosition:1290},0).to({regX:-0.2,regY:-0.1,rotation:-11.872,x:-30.1,y:-267.85,startPosition:1296},6,cjs.Ease.quadInOut).wait(21).to({startPosition:1317},0).to({regX:0,regY:0,rotation:0,x:-11.55,y:-255.85,startPosition:1328},11,cjs.Ease.quadInOut).wait(1).to({startPosition:1329},0).to({rotation:4.9449,y:-287.1,startPosition:1335},6,cjs.Ease.quadInOut).wait(18).to({startPosition:1353},0).to({rotation:0,y:-255.85,startPosition:1360},7,cjs.Ease.quadInOut).wait(2).to({startPosition:1362},0).to({rotation:-2.4908,x:-11.7,y:-244.3,startPosition:1395},33,cjs.Ease.quadInOut).to({rotation:0,x:-11.55,y:-255.85,startPosition:1429},34,cjs.Ease.quadInOut).wait(1).to({startPosition:1430},0).wait(3).to({startPosition:1433},0).to({scaleX:0.9871,scaleY:0.9871,y:-252.35,startPosition:1436},3).to({scaleX:0.97,scaleY:0.97,y:-247.7,startPosition:1440,loop:false},4,cjs.Ease.quadOut).wait(16).to({startPosition:1456},0).to({scaleX:1,scaleY:1,y:-255.85,startPosition:1464},8).wait(5));

	// Ear_R
	this.instance_1 = new lib.DogEar("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.95,-486.55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-0.1,skewX:4.53,skewY:184.53,x:114.9,y:-470.85},6,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-2.2204,skewY:177.7796,x:13.45,y:-497.3},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(1).to({regX:-37.5,regY:105.5,scaleY:1.0008,skewX:0.2935,skewY:180.2935,x:107.9,y:-381.7},0).wait(1).to({scaleY:1.0028,skewX:1.0939,skewY:181.0941,x:106.45,y:-383.65},0).wait(1).to({scaleY:1.0063,skewX:2.4968,skewY:182.4972,x:103.8,y:-387},0).wait(1).to({regX:0,regY:0,scaleY:1.0112,skewX:4.4486,skewY:184.4494,x:70.95,y:-501.15},0).wait(1).to({regX:-37.5,regY:105.5,scaleY:1.017,skewX:3.7695,skewY:183.7701,x:101.3,y:-399.15},0).wait(1).to({scaleY:1.022,skewX:3.1879,skewY:183.1884,x:102.4,y:-405.35},0).wait(1).to({scaleY:1.0255,skewX:2.7813,skewY:182.7816,x:103.15,y:-409.75},0).wait(1).to({scaleY:1.0275,skewX:2.5459,skewY:182.5462,x:103.6,y:-412.25},0).wait(1).to({regX:0,regY:0,scaleY:1.0283,skewX:2.451,skewY:182.4513,x:70.95,y:-523.25},0).wait(1).to({regX:-37.5,regY:105.5,scaleY:1.0265,skewX:2.2562,skewY:182.2564,x:104.1,y:-412.6},0).wait(1).to({scaleY:1.0214,skewX:1.7247,skewY:181.7249,x:105.2,y:-410.9},0).wait(1).to({scaleY:1.0124,skewX:0.7932,skewY:180.7934,x:106.95,y:-408.05},0).wait(1).to({regX:0,regY:0,scaleY:1,skewX:-0.5027,skewY:179.4973,x:70.95,y:-509.2},0).wait(1).to({regX:-37.5,regY:105.5,skewX:-2.7776,skewY:177.2224,x:113.5,y:-397.9},0).wait(1).to({skewX:-4.7257,skewY:175.2743,x:117,y:-392.8},0).wait(1).to({skewX:-6.0878,skewY:173.9122,x:119.45,y:-389.35},0).wait(1).to({skewX:-6.8763,skewY:173.1237,x:120.85,y:-387.3},0).wait(1).to({regX:0,regY:0,skewX:-7.194,skewY:172.806,x:70.95,y:-486.55},0).to({skewX:2.2151,skewY:182.2151},3,cjs.Ease.quadInOut).to({skewX:0,skewY:180},3,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-2.2204,skewY:177.7796,x:13.45,y:-497.3},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},11,cjs.Ease.quadInOut).wait(49).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:3.6903,skewY:183.6903,x:117.55,y:-469.55},8,cjs.Ease.quadInOut).wait(25).to({startPosition:0},0).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},10,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-2.2204,skewY:177.7796,x:13.45,y:-497.3},10,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({y:-558.5},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({skewX:-3.6911,skewY:176.3089,y:-539.75},5).to({skewX:1.4497,skewY:181.4497,y:-558.5},3,cjs.Ease.quadInOut).to({skewX:-5.9487,skewY:174.0513,y:-539.75},5).wait(3).to({skewX:-5.9487},0).to({skewX:0,skewY:180,y:-486.55},10).wait(9).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-0.9958,skewY:179.0042,x:40.8,y:-495.55},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({regX:-37.5,regY:105.5,skewX:0.5047,skewY:180.5047,x:107.5,y:-384.2},0).wait(1).to({skewX:2.0224,skewY:182.0224,x:104.75,y:-393.85},0).wait(1).to({regX:0,regY:0,skewX:4.4773,skewY:184.4773,x:70.95,y:-517.75},0).wait(1).to({regX:-37.5,regY:105.5,skewX:4.6276,skewY:184.6276,x:99.85,y:-426.9},0).wait(1).to({skewX:4.7167,skewY:184.7167,x:99.6,y:-437.15},0).wait(1).to({regX:0,regY:0,skewX:4.7483,skewY:184.7483,x:70.95,y:-549},0).to({skewX:-6.2293,skewY:173.7707,y:-533.25},3,cjs.Ease.quadInOut).to({skewX:3.6911,skewY:183.6911},3,cjs.Ease.quadInOut).to({skewX:0,skewY:180},3,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({y:-486.55},8,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:4.1863,skewY:184.1863,x:129.4,y:-469.55},7,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,skewX:1.986,skewY:181.986,x:18.55,y:-494.8},7,cjs.Ease.quadInOut).to({skewX:-1.4953,skewY:178.5047,x:18.45},4,cjs.Ease.quadInOut).wait(11).to({skewX:-1.4953},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:70.95,y:-486.55},9,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:3.2585,skewY:183.2585,x:107.9,y:-474.05},7,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},8,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({skewX:4.1994,skewY:184.1994,y:-527.2},5,cjs.Ease.quadInOut).to({skewX:-2.7042,skewY:177.2958,y:-486.55},5,cjs.Ease.quadInOut).to({skewX:4.1994,skewY:184.1994},3,cjs.Ease.quadInOut).to({skewX:0,skewY:180},3,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:0.7239,skewY:180.7239,x:94.65,y:-481.15},9,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0.981,skewY:180.981,x:37.15,y:-490.85},19,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,skewX:0.7239,skewY:180.7239,x:94.65,y:-481.15},20,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},14,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({skewX:4.1994,skewY:184.1994,y:-527.2},5,cjs.Ease.quadInOut).to({regY:-0.1,skewX:-1.2932,skewY:178.7068,y:-527.3},3).to({regY:0,skewX:4.1994,skewY:184.1994,y:-527.2},3).wait(18).to({startPosition:0},0).to({skewX:-2.7042,skewY:177.2958,y:-486.55},5,cjs.Ease.quadInOut).to({skewX:4.1994,skewY:184.1994},3,cjs.Ease.quadInOut).to({skewX:0,skewY:180},3,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regY:-0.1,skewX:3.0422,skewY:183.0422,x:95.65,y:-475.85},6,cjs.Ease.quadInOut).wait(22).to({startPosition:0},0).to({regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,skewX:-2.9603,skewY:177.0397,x:15.4,y:-466.6},7,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({scaleX:0.9671,scaleY:0.9671,skewX:-2.4353,skewY:177.5647,x:25.4,y:-484},2,cjs.Ease.quadIn).to({scaleX:0.9778,scaleY:0.9778,skewX:-1.6446,skewY:178.3554,x:40.2,y:-494.4},3).to({scaleX:0.9866,scaleY:0.9866,skewX:-0.9872,skewY:179.0128,x:52.5,y:-497.5},2).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:70.95,y:-486.55},3,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:7.2161,skewY:187.2161,x:131.65,y:-506.7},6,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,skewX:-2.9603,skewY:177.0397,x:15.4,y:-466.6},7,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({scaleX:0.9671,scaleY:0.9671,skewX:-2.4353,skewY:177.5647,x:25.4,y:-484},2,cjs.Ease.quadIn).to({scaleX:0.9778,scaleY:0.9778,skewX:-1.6446,skewY:178.3554,x:40.2,y:-494.4},3).to({scaleX:0.9866,scaleY:0.9866,skewX:-0.9872,skewY:179.0128,x:52.5,y:-497.5},2).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:70.95,y:-486.55},3,cjs.Ease.quadOut).wait(3).to({startPosition:0},0).to({skewX:-0.7694,skewY:179.2306,x:101.8,y:-474.85},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({skewX:0,skewY:180,x:70.95,y:-486.55},11,cjs.Ease.quadInOut).wait(59).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:0.7239,skewY:180.7239,x:94.65,y:-481.15},9,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0.981,skewY:180.981,x:37.15,y:-490.85},15,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,skewX:0.7239,skewY:180.7239,x:94.65,y:-481.15},15,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,skewX:-2.9603,skewY:177.0397,x:15.4,y:-466.6},12,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:4.4773,skewY:184.4773,x:105,y:-479.25},14,cjs.Ease.quadInOut).wait(21).to({skewX:0,skewY:180,x:70.95,y:-486.55},0).to({skewX:1.1218,skewY:181.1218,x:24.9,y:-496.5},10,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:11.5773,skewY:191.5773,x:166.6,y:-455.7},8,cjs.Ease.quadInOut).wait(19).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:70.95,y:-486.55},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({startPosition:0},4,cjs.Ease.quadInOut).to({startPosition:0},4,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:0.7572,skewY:180.7572,x:38.3,y:-494},8,cjs.Ease.quadInOut).wait(42).to({startPosition:0},0).to({regX:-0.2,regY:-0.2,skewX:-1.9125,skewY:178.0875,x:3.45,y:-510.7},6,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,skewX:2.2221,skewY:182.2221,x:90.65,y:-509.85},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({regX:0,skewX:0,skewY:180,x:70.95,y:-486.55},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.2,skewX:-1.0413,skewY:178.9587,x:60.65,y:-478.55},33,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:70.95,y:-486.55},34,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({scaleX:0.9871,scaleY:0.9871,x:69.9,y:-480.1},3).to({scaleX:0.97,scaleY:0.97,x:68.45,y:-471.5},4,cjs.Ease.quadOut).wait(16).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:70.95,y:-486.55},8).wait(5));

	// Ear_L
	this.instance_2 = new lib.DogEar("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-86.6,-488.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5.9867,x:-40.4,y:-497.05},6,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({rotation:0,x:-86.6,y:-488.3},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-2.706,x:-142.15,y:-472.6},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(1).to({regX:-37.5,regY:105.5,scaleY:1.0008,rotation:-0.296,x:-123.55,y:-383.45},0).wait(1).to({scaleY:1.0028,rotation:-1.1035,x:-122.05,y:-385.45},0).wait(1).to({scaleY:1.0063,rotation:-2.5187,x:-119.4,y:-388.8},0).wait(1).to({regX:-0.1,regY:-0.1,scaleY:1.0111,rotation:-4.4876,x:-86.7,y:-503},0).wait(1).to({regX:-37.5,regY:105.5,scaleY:1.017,rotation:-3.6252,x:-117.15,y:-401},0).wait(1).to({scaleY:1.022,rotation:-2.8865,x:-118.55,y:-407.3},0).wait(1).to({scaleY:1.0255,rotation:-2.3701,x:-119.55,y:-411.8},0).wait(1).to({scaleY:1.0275,rotation:-2.0712,x:-120.15,y:-414.35},0).wait(1).to({regX:-0.1,regY:-0.1,scaleY:1.0283,rotation:-1.9507,x:-86.7,y:-525.25},0).wait(1).to({regX:-37.5,regY:105.5,scaleY:1.0265,rotation:-1.7577,x:-120.8,y:-414.8},0).wait(1).to({scaleY:1.0214,rotation:-1.2311,x:-121.8,y:-413.1},0).wait(1).to({scaleY:1.0124,rotation:-0.3083,x:-123.55,y:-410.2},0).wait(1).to({regX:0,regY:0,scaleY:1,rotation:0.9757,x:-86.6,y:-511.1},0).wait(1).to({regX:-37.5,regY:105.5,rotation:3.6093,x:-130.65,y:-400.35},0).wait(1).to({rotation:5.8646,x:-134.65,y:-395.55},0).wait(1).to({rotation:7.4414,x:-137.4,y:-392.25},0).wait(1).to({rotation:8.3543,x:-139,y:-390.35},0).wait(1).to({regX:0,regY:0,rotation:8.7221,x:-86.6,y:-488.3},0).to({rotation:-2.2151},3,cjs.Ease.quadInOut).to({rotation:0},3,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-2.706,x:-142.15,y:-472.6},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},11,cjs.Ease.quadInOut).wait(49).to({startPosition:0},0).to({rotation:3.1928,x:-37.5,y:-497.7},8,cjs.Ease.quadInOut).wait(25).to({startPosition:0},0).to({rotation:0,x:-86.6,y:-488.3},10,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-2.706,x:-142.15,y:-472.6},10,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({y:-560.25},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({rotation:3.4529,y:-541.55},5).to({rotation:-1.2258,y:-560.25},3,cjs.Ease.quadInOut).to({rotation:2.2151,y:-541.55},5).wait(3).to({startPosition:0},0).to({rotation:0,y:-488.3},10).wait(9).to({startPosition:0},0).to({rotation:-0.9574,x:-115.7,y:-476.8},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({rotation:0,x:-86.6,y:-488.3},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({regX:-37.5,regY:105.5,rotation:-0.5608,x:-123.05,y:-385.95},0).wait(1).to({rotation:-2.2475,x:-119.9,y:-395.6},0).wait(1).to({regX:0,regY:0,rotation:-4.9756,x:-86.6,y:-519.6},0).wait(1).to({regX:-37.5,regY:105.5,rotation:-4.8495,x:-115.05,y:-428.65},0).wait(1).to({rotation:-4.7748,x:-115.15,y:-438.9},0).wait(1).to({regX:0,regY:0,rotation:-4.7483,x:-86.6,y:-550.8},0).to({rotation:4.9958,y:-535.1},3,cjs.Ease.quadInOut).to({rotation:-3.9794},3,cjs.Ease.quadInOut).to({rotation:0},3,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({y:-488.3},8,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({rotation:3.9514,x:-25.65,y:-496.95},7,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-5.5289,x:-137.35,y:-472.35},7,cjs.Ease.quadInOut).to({regY:-0.2,rotation:-8.7721,y:-472.45},4,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},9,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:3.9628,x:-48.1,y:-496.2},7,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},8,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({rotation:-2.9695,y:-529},5,cjs.Ease.quadInOut).to({rotation:3.6911,y:-488.3},5,cjs.Ease.quadInOut).to({rotation:-5.4383},3,cjs.Ease.quadInOut).to({rotation:0},3,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-0.0315,x:-62.7,y:-491.75},9,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:-0.2186,x:-120.1,y:-480.4},19,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-0.0315,x:-62.7,y:-491.75},20,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},14,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-2.9695,y:-529},5,cjs.Ease.quadInOut).to({rotation:1.7471},3).to({rotation:-2.9695},3).wait(18).to({startPosition:0},0).to({rotation:3.6911,y:-488.3},5,cjs.Ease.quadInOut).to({rotation:-5.4383},3,cjs.Ease.quadInOut).to({rotation:0},3,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({rotation:1.7812,x:-60.55,y:-496.05},6,cjs.Ease.quadInOut).wait(22).to({startPosition:0},0).to({rotation:0,x:-86.6,y:-488.3},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,rotation:-2.9776,x:-134.35,y:-444.8},7,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({scaleX:0.9671,scaleY:0.9671,rotation:-2.4489,x:-125.9,y:-466.45},2,cjs.Ease.quadIn).to({scaleX:0.9777,scaleY:0.9777,rotation:-1.6536,x:-113.15,y:-483.05},3).to({regX:-0.2,scaleX:0.9866,scaleY:0.9866,rotation:-0.9916,x:-102.6,y:-491.45},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-86.6,y:-488.3},3,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:7.2161,x:-24.45,y:-528.3},6,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,rotation:-2.9776,x:-134.35,y:-444.8},7,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({scaleX:0.9671,scaleY:0.9671,rotation:-2.4489,x:-125.9,y:-466.45},2,cjs.Ease.quadIn).to({scaleX:0.9777,scaleY:0.9777,rotation:-1.6536,x:-113.15,y:-483.05},3).to({regX:-0.2,scaleX:0.9866,scaleY:0.9866,rotation:-0.9916,x:-102.6,y:-491.45},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-86.6,y:-488.3},3,cjs.Ease.quadOut).wait(3).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:0.7519,x:-54.25,y:-497.15},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},11,cjs.Ease.quadInOut).wait(59).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-0.0315,x:-62.7,y:-491.75},9,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:-0.2186,x:-120.1,y:-480.4},15,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-0.0315,x:-62.7,y:-491.75},15,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,rotation:-2.9776,x:-134.35,y:-444.8},12,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:4.4773,x:-51.95,y:-493.4},14,cjs.Ease.quadInOut).wait(21).to({rotation:0,x:-86.6,y:-488.3},0).to({regX:-0.1,regY:-0.1,rotation:-3.8971,x:-131,y:-474.7},10,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,rotation:8.5794,x:15.15,y:-499.05},8,cjs.Ease.quadInOut).wait(19).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-86.6,y:-488.3},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({startPosition:0},4,cjs.Ease.quadInOut).to({startPosition:0},4,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-1.5101,x:-118.55,y:-478.75},8,cjs.Ease.quadInOut).wait(42).to({startPosition:0},0).to({regY:-0.2,rotation:-3.4328,x:-151.2,y:-480},6,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:2.7069,x:-66.15,y:-525.2},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({rotation:0,x:-86.6,y:-488.3},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-0.2535,x:-96.85,y:-473.35},33,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-86.6,y:-488.3},34,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({scaleX:0.9871,scaleY:0.9871,x:-85.6,y:-481.85},3).to({scaleX:0.97,scaleY:0.97,x:-84.3,y:-473.25},4,cjs.Ease.quadOut).wait(16).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:-86.6,y:-488.3},8).wait(5));

	// Body
	this.instance_3 = new lib.DogBodyHO("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.15,-49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:2.4924,x:-10.85,y:-48.95},6,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({rotation:0,x:-10.15,y:-49.2},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-4.9958,x:-9.75,y:-49.6},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({rotation:0,x:-10.15,y:-49.2},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).to({y:-86.7},9,cjs.Ease.quadInOut).to({y:-49.2},9,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).to({rotation:-4.9958,x:-9.75,y:-49.6},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({rotation:0,x:-10.15,y:-49.2},11,cjs.Ease.quadInOut).wait(49).to({startPosition:0},0).to({rotation:2.7226,y:-49.05},8,cjs.Ease.quadInOut).wait(25).to({startPosition:0},0).to({rotation:0,y:-49.2},10,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({rotation:-4.9958,x:-9.75,y:-49.6},10,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({rotation:0,x:-10.15,y:-49.2},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({y:-111.7},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({y:-92.95},5).to({y:-111.7},3,cjs.Ease.quadInOut).to({y:-92.95},5).wait(3).to({startPosition:0},0).to({y:-49.2},10).wait(9).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({startPosition:0},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({y:-111.7},6,cjs.Ease.quadInOut).to({y:-95.9},3,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({y:-49.2},8,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({rotation:5.7079,x:-8.75,y:-49.35},7,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({rotation:-5.2547,x:-8.5,y:-47.7},7,cjs.Ease.quadInOut).wait(15).to({startPosition:0},0).to({rotation:0,x:-10.15,y:-49.2},9,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({rotation:1.7331,y:-49.05},7,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({rotation:0,y:-49.2},8,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({y:-89.9},5,cjs.Ease.quadInOut).to({y:-49.2},5,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({rotation:3.1962,x:-10.7,y:-48.9},9,cjs.Ease.quadInOut).to({rotation:-4.466,x:-9.6,y:-48.55},19,cjs.Ease.quadInOut).to({rotation:3.1962,x:-10.7,y:-48.9},20,cjs.Ease.quadInOut).to({rotation:0,x:-10.15,y:-49.2},14,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({y:-89.9},5,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({y:-49.2},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({startPosition:0},6,cjs.Ease.quadInOut).wait(22).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,rotation:-3.2274,x:-17.05,y:-36.95},7,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({scaleX:0.967,scaleY:0.967,rotation:-2.6544,x:-15.85,y:-52.95},2,cjs.Ease.quadIn).to({scaleX:0.9777,scaleY:0.9777,rotation:-1.7932,x:-14,y:-61.35},3).to({scaleX:0.9866,scaleY:0.9866,rotation:-1.0758,x:-12.5,y:-62.75},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-10.15,y:-49.2},3,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({rotation:5.2407,x:3.2,y:-82.25},6,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({rotation:0,x:-10.15,y:-49.2},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,rotation:-3.2274,x:-17.05,y:-36.95},7,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({scaleX:0.967,scaleY:0.967,rotation:-2.6544,x:-15.85,y:-52.95},2,cjs.Ease.quadIn).to({scaleX:0.9777,scaleY:0.9777,rotation:-1.7932,x:-14,y:-61.35},3).to({scaleX:0.9866,scaleY:0.9866,rotation:-1.0758,x:-12.5,y:-62.75},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-10.15,y:-49.2},3,cjs.Ease.quadOut).wait(3).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({startPosition:0},11,cjs.Ease.quadInOut).wait(59).to({startPosition:0},0).to({rotation:3.1962,x:-10.7,y:-48.9},9,cjs.Ease.quadInOut).to({rotation:-4.466,x:-9.6,y:-48.55},15,cjs.Ease.quadInOut).to({rotation:3.1962,x:-10.7,y:-48.9},15,cjs.Ease.quadInOut).to({rotation:0,x:-10.15,y:-49.2},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,rotation:-3.2274,x:-17.05,y:-36.95},12,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:4.4773,x:-10,y:-49.6},14,cjs.Ease.quadInOut).wait(21).to({rotation:0,x:-10.15,y:-49.2},0).to({rotation:-3.1962,x:-9.35,y:-49.05},10,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({rotation:8.0065,x:-1.7,y:-49.2},8,cjs.Ease.quadInOut).wait(19).to({rotation:8.0065},0).to({rotation:0,x:-10.15},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({y:-58.65},4,cjs.Ease.quadInOut).to({y:-49.2},4,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({rotation:-2.2378,y:-49.45},8,cjs.Ease.quadInOut).wait(42).to({startPosition:0},0).to({rotation:-4.188,x:-14.8,y:-61.55},6,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({rotation:0,x:-10.15,y:-49.2},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({y:-80.45},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({y:-49.2},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-0.2999,x:-11.1,y:-42.75},33,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-10.15,y:-49.2},34,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({scaleX:0.9871,scaleY:0.9871,y:-48.35},3).to({scaleX:0.97,scaleY:0.97,y:-47.25},4,cjs.Ease.quadOut).wait(16).to({startPosition:0},0).to({scaleX:1,scaleY:1,y:-49.2},8).wait(5));

	// Hand_R
	this.instance_4 = new lib.DogHands("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(186.1,-53.5,1,1,62.7507);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:65.2436,x:185.4,y:-44.8},6,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({rotation:62.7507,x:186.1,y:-53.5},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:50.5331,x:211.6,y:-90.35},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:41.0384,x:268,y:-153.8},9,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},9,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:50.5331,x:211.6,y:-90.35},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},11,cjs.Ease.quadInOut).wait(49).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:65.4733,x:186.05,y:-44.2},8,cjs.Ease.quadInOut).wait(25).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},10,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:50.5331,x:211.6,y:-90.35},10,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,rotation:69.1398,x:210.85,y:-77.15},1).to({regX:-0.1,regY:-0.1,rotation:58.3064,x:272.7,y:-165.9},1).to({regX:0,rotation:16.914,x:301.45,y:-304.45,startPosition:3},1).to({regY:0,rotation:-22.5546,x:265.05,y:-373.15},1).wait(1).to({regX:44,regY:-1.4,rotation:-40.5481,x:314.25,y:-470.15},0).wait(1).to({regX:0,regY:0,rotation:-46.9293,x:287.65,y:-464.4},0).to({regX:0.1,regY:-0.1,rotation:-40.0107,x:294.2,y:-449.35},3,cjs.Ease.quadInOut).wait(15).to({startPosition:3},0).to({rotation:-23.7827,x:312.45,y:-368.65},5).to({rotation:-40.0107,x:294.2,y:-449.35},3,cjs.Ease.quadInOut).to({rotation:-23.7827,x:312.45,y:-368.65},5).wait(3).to({x:322.45,y:-346.15},0).to({regY:-0.2,rotation:11.9384,x:299.45,y:-258.65,startPosition:0},1).to({regY:-0.1,rotation:51.9055,x:284.6,y:-165.35},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:186.1,y:-53.5},7).wait(9).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:50.0413,x:234.75,y:-87.4},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:65.4733,x:173.9,y:-111},6,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:54.3042,x:220.5,y:-120.6},3,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},8,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:62.5114,x:213.1,y:-46.45},7,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:42.8492,x:241.9,y:-114.25},7,cjs.Ease.quadInOut).wait(15).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:186.1,y:-53.5},9,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:64.4837,x:186.15,y:-47.65},7,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},8,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({rotation:67.2499,x:165.75,y:-85.85},5,cjs.Ease.quadInOut).to({rotation:62.7507,x:186.1,y:-53.5},5,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({rotation:65.9475,x:185.4,y:-42.3},9,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:58.2849,x:185.65,y:-68.35},19,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:65.9475,x:185.4,y:-42.3},20,cjs.Ease.quadInOut).to({rotation:62.7507,x:186.1,y:-53.5},14,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:67.2499,x:165.75,y:-85.85},5,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({rotation:62.7507,x:186.1,y:-53.5},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({startPosition:0},6,cjs.Ease.quadInOut).wait(22).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.9599,scaleY:0.9599,rotation:47.818,x:213.2,y:-82.9},7,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({scaleX:0.967,scaleY:0.967,rotation:50.4732,x:208.35,y:-91.5},2,cjs.Ease.quadIn).to({scaleX:0.9777,scaleY:0.9777,rotation:54.4544,x:201.2,y:-88.8},3).to({scaleX:0.9865,scaleY:0.9865,rotation:57.771,x:195.2,y:-81},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:186.1,y:-53.5},3,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:67.9921,x:199.1,y:-68.8},6,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.9599,scaleY:0.9599,rotation:47.818,x:213.2,y:-82.9},7,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({scaleX:0.967,scaleY:0.967,rotation:50.4732,x:208.35,y:-91.5},2,cjs.Ease.quadIn).to({scaleX:0.9777,scaleY:0.9777,rotation:54.4544,x:201.2,y:-88.8},3).to({scaleX:0.9865,scaleY:0.9865,rotation:57.771,x:195.2,y:-81},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:186.1,y:-53.5},3,cjs.Ease.quadOut).wait(3).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({startPosition:0},11,cjs.Ease.quadInOut).wait(59).to({x:229.85,y:-67.25},0).to({regX:-0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:39.4748,x:266.75,y:-124.9,startPosition:3},1).to({rotation:14.6262,x:303.85,y:-178.75},1).wait(1).to({regX:44,regY:-1.4,rotation:15.552,x:346.9,y:-166.7},0).wait(1).to({rotation:16.84,x:346.95,y:-163.7},0).wait(1).to({rotation:18.2509,x:347.05,y:-160.45},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.4593,y:-157.65},0).wait(1).to({rotation:20.3041,x:347.1,y:-155.75},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:20.7932,y:-154.65},0).wait(1).to({regX:0.1,regY:-0.2,rotation:20.9902,x:305.55,y:-168.75,startPosition:4},0).to({regX:0,regY:-0.1,scaleX:1,scaleY:1,rotation:9.3123,x:291.95,y:-208.3},15,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,rotation:3.9489,x:326.8,y:-276.25},15,cjs.Ease.quadInOut).to({regX:-0.1,scaleX:1,scaleY:1,rotation:11.5265,x:302.4,y:-184.8},11,cjs.Ease.quadInOut).wait(1).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5,startPosition:0},0).wait(1).to({regX:44,regY:-1.4,scaleX:0.9994,scaleY:0.9994,rotation:59.6255,x:215.8,y:-24.35},0).wait(1).to({scaleX:0.9977,scaleY:0.9977,rotation:51.7603,x:236.35,y:-48.4},0).wait(1).to({scaleX:0.995,scaleY:0.995,rotation:38.2985,x:270.3,y:-91},0).wait(1).to({regX:0,regY:-0.1,scaleX:0.991,scaleY:0.991,rotation:18.7075,x:274.4,y:-168,startPosition:3},0).to({regX:-0.1,scaleX:0.986,scaleY:0.986,rotation:5.66,x:285.3,y:-198,startPosition:4},1).wait(1).to({regX:44,regY:-1.4,scaleX:0.9799,scaleY:0.9799,rotation:6.8176,x:328.1,y:-202.05},0).wait(1).to({scaleX:0.9739,scaleY:0.9739,rotation:7.9442,x:327.6,y:-209},0).wait(1).to({scaleX:0.9688,scaleY:0.9688,rotation:8.9034,x:327.1,y:-214.85},0).wait(1).to({scaleX:0.9649,scaleY:0.9649,rotation:9.6349,x:326.75,y:-219.35},0).wait(1).to({scaleX:0.9623,scaleY:0.9623,rotation:10.1393,x:326.5,y:-222.5},0).wait(1).to({scaleX:0.9606,scaleY:0.9606,rotation:10.443,x:326.3,y:-224.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.9599,scaleY:0.9599,rotation:10.5776,x:284.45,y:-231.65},0).wait(45).to({startPosition:4},0).to({regX:0,scaleX:1,scaleY:1,rotation:15.0151,x:303.65,y:-166.2},14,cjs.Ease.quadInOut).wait(21).to({regY:0,rotation:62.7507,x:186.1,y:-53.5,startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:59.5549,x:186.3,y:-64.45},10,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({rotation:70.7588,x:193.1,y:-26.3},8,cjs.Ease.quadInOut).wait(19).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:59.0452,x:200.75,y:-77.65},4,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},4,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({rotation:60.5121,x:185.75,y:-61.45},8,cjs.Ease.quadInOut).wait(42).to({startPosition:3},0).to({scaleX:0.9999,scaleY:0.9999,rotation:18.8696,x:304.55,y:-227.9},6,cjs.Ease.quadInOut).wait(21).to({startPosition:3},0).to({scaleX:1,scaleY:1,rotation:62.7507,x:186.1,y:-53.5,startPosition:0},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:67.228,x:166.65,y:-76},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({rotation:62.7507,x:186.1,y:-53.5},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:63.6344,x:180.35,y:-46},33,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:62.7507,x:186.1,y:-53.5},34,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({x:216.1,y:-77.25,startPosition:3},0).to({regX:-0.1,regY:-0.1,scaleX:0.9871,scaleY:0.9871,rotation:-10.4132,x:307.25,y:-267.2},3).to({regX:0.1,scaleX:0.9699,scaleY:0.9699,rotation:-48.0123,x:271.1,y:-409.25},4,cjs.Ease.quadOut).to({regY:0,rotation:-39.051,x:271.2,y:-409.2},2).to({regY:-0.1,rotation:-48.0123,x:271.1,y:-409.25},2).to({regY:0,rotation:-39.051,x:271.2,y:-409.2},2).to({regY:-0.1,rotation:-48.0123,x:271.1,y:-409.25},2).to({regY:0,rotation:-39.051,x:271.2,y:-409.2},2).to({regY:-0.1,rotation:-48.0123,x:271.1,y:-409.25},2).to({regY:0,rotation:-39.051,x:271.2,y:-409.2},2).to({startPosition:3},2).to({regX:0.2,regY:-0.1,scaleX:0.9736,scaleY:0.9736,rotation:-26.3249,x:284.4,y:-335.45},1).to({scaleX:0.9774,scaleY:0.9774,rotation:-13.6015,x:274.65,y:-286.1,startPosition:0},1).to({regX:0.4,scaleX:0.9811,scaleY:0.9811,rotation:5.6053,x:263.9,y:-242.6},1).to({regX:-0.1,scaleX:1,scaleY:1,rotation:78.9435,x:216.2,y:-77.35},5).wait(5));

	// Arm_R
	this.instance_5 = new lib.DogArms("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(72.1,-282.2,1,1,62.7507);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:65.2436,x:81.4,y:-278.2},6,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({rotation:62.7507,x:72.1,y:-282.2},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regY:-0.1,rotation:50.5331,x:51.8,y:-289.65},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regY:0,rotation:62.7507,x:72.1,y:-282.2},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:41.0384,x:77.65,y:-324.05},9,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:62.7507,x:72.1,y:-282.2},9,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).to({regY:-0.1,rotation:50.5331,x:51.8,y:-289.65},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regY:0,rotation:62.7507,x:72.1,y:-282.2},11,cjs.Ease.quadInOut).wait(49).to({startPosition:0},0).to({rotation:65.4733,x:82.95,y:-277.95},8,cjs.Ease.quadInOut).wait(25).to({startPosition:0},0).to({rotation:62.7507,x:72.1,y:-282.2},10,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regY:-0.1,rotation:50.5331,x:51.8,y:-289.65},10,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({regY:0,rotation:62.7507,x:72.1,y:-282.2},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({rotation:59.8792,x:72.25,y:-286.35,startPosition:3},1).to({regX:-0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:50.8303,x:72.75,y:-299.55,startPosition:5},1).to({regX:0,regY:-0.2,rotation:36.1933,x:73.5,y:-320.55,startPosition:7},1).to({rotation:22.2341,x:74.3,y:-340.5,startPosition:8},1).wait(1).to({regX:131.5,regY:-47,scaleX:1,scaleY:1,rotation:13.9631,x:213.6,y:-365.95},0).wait(1).to({regX:0.1,regY:-0.1,rotation:11.0299,x:74.95,y:-356.6},0).to({rotation:14.7203,x:75,y:-355.3},3,cjs.Ease.quadInOut).wait(15).to({startPosition:8},0).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:30.9474,x:75.75,y:-339.65},5).to({regY:-0.1,scaleX:1,scaleY:1,rotation:14.7203,x:75,y:-355.3},3,cjs.Ease.quadInOut).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:30.9474,x:75.75,y:-339.65},5).wait(3).to({startPosition:7},0).to({rotation:34.1275,x:75.35,y:-333.95,startPosition:5},1).to({rotation:37.3078,x:74.95,y:-328.25,startPosition:3},1).to({regY:-0.4,scaleX:0.9998,scaleY:0.9998,rotation:40.4873,x:74.8,y:-322.75,startPosition:0},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:72.1,y:-282.2},7).wait(9).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:50.0413,x:73.2,y:-285.2},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:72.1,y:-282.2},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:65.4733,x:70.85,y:-344.85},6,cjs.Ease.quadInOut).to({regY:-0.1,rotation:54.3042,x:74.15,y:-330.05},3,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({regY:0,rotation:62.7507,x:72.1,y:-282.2},8,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:62.5114,x:98.1,y:-274.7},7,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:42.8492,x:56.9,y:-290.45},7,cjs.Ease.quadInOut).wait(15).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:72.1,y:-282.2},9,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({rotation:64.4837,x:79.05,y:-279.55},7,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({rotation:62.7507,x:72.1,y:-282.2},8,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:67.2499,x:70.15,y:-322.7},5,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:62.7507,x:72.1,y:-282.2},5,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({regY:-0.1,rotation:65.9475,x:84.4,y:-277.1},9,cjs.Ease.quadInOut).to({regX:0.1,rotation:58.2849,x:54.25,y:-287.3},19,cjs.Ease.quadInOut).to({regX:0,rotation:65.9475,x:84.4,y:-277.1},20,cjs.Ease.quadInOut).to({regY:0,rotation:62.7507,x:72.1,y:-282.2},14,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:67.2499,x:70.15,y:-322.7},5,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:72.1,y:-282.2},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({startPosition:0},6,cjs.Ease.quadInOut).wait(22).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:0.9599,scaleY:0.9599,rotation:47.818,x:50.95,y:-266.75},7,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({regX:0,scaleX:0.967,scaleY:0.967,rotation:50.4732,x:54.65,y:-283.4},2,cjs.Ease.quadIn).to({regX:0.1,scaleX:0.9777,scaleY:0.9777,rotation:54.4544,x:60.35,y:-292.4},3).to({scaleX:0.9865,scaleY:0.9865,rotation:57.771,x:65.1,y:-294.7},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:72.1,y:-282.2},3,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:67.9921,x:106.45,y:-306.75},6,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:72.1,y:-282.2},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:0.9599,scaleY:0.9599,rotation:47.818,x:50.95,y:-266.75},7,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({regX:0,scaleX:0.967,scaleY:0.967,rotation:50.4732,x:54.65,y:-283.4},2,cjs.Ease.quadIn).to({regX:0.1,scaleX:0.9777,scaleY:0.9777,rotation:54.4544,x:60.35,y:-292.4},3).to({scaleX:0.9865,scaleY:0.9865,rotation:57.771,x:65.1,y:-294.7},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:72.1,y:-282.2},3,cjs.Ease.quadOut).wait(3).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({startPosition:0},11,cjs.Ease.quadInOut).wait(59).to({startPosition:4},0).to({regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:62.8297,x:72.5,y:-282.1,startPosition:6},1).to({regX:-0.1,rotation:63.067,x:73.4,y:-281.8,startPosition:8},1).wait(1).to({regX:131.5,regY:-47,rotation:63.486,x:175.65,y:-184.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:64.069,x:176.9,y:-182.3},0).wait(1).to({rotation:64.7076,x:178.25,y:-180.15},0).wait(1).to({rotation:65.2546,x:179.35,y:-178.35},0).wait(1).to({rotation:65.6369,x:180.1,y:-177.05},0).wait(1).to({rotation:65.8583,x:180.6,y:-176.3},0).wait(1).to({regX:0,regY:-0.1,rotation:65.9475,x:84.4,y:-277.1},0).to({regX:0.1,rotation:58.2849,x:54.25,y:-287.3},15,cjs.Ease.quadInOut).to({regX:0,regY:-0.2,rotation:41.2137,x:84.45,y:-277.1},15,cjs.Ease.quadInOut).to({regY:0,rotation:62.7507,x:72.1,y:-282.2},11,cjs.Ease.quadInOut).wait(1).to({startPosition:4},0).wait(1).to({regX:131.5,regY:-47,scaleX:0.9993,scaleY:0.9993,rotation:62.5151,x:174.05,y:-187.05},0).wait(1).to({regX:0,regY:-0.1,scaleX:0.9977,scaleY:0.9977,rotation:61.9221,x:71,y:-281.4,startPosition:5},0).wait(1).to({regX:131.5,regY:-47,scaleX:0.9948,scaleY:0.9948,rotation:60.8585,x:173.95,y:-188.8},0).wait(1).to({regX:0,regY:-0.2,scaleX:0.9906,scaleY:0.9906,rotation:59.3106,x:67.3,y:-278.85,startPosition:7},0).to({scaleX:0.9852,scaleY:0.9852,rotation:57.3208,x:64.5,y:-276.75,startPosition:8},1).wait(1).to({regX:131.5,regY:-47,scaleX:0.9793,scaleY:0.9793,rotation:55.0837,x:172.55,y:-195},0).wait(1).to({scaleX:0.9735,scaleY:0.9735,rotation:52.9067,x:171.7,y:-197.45},0).wait(1).to({scaleX:0.9686,scaleY:0.9686,rotation:51.0532,x:170.8,y:-199.55},0).wait(1).to({scaleX:0.9648,scaleY:0.9648,rotation:49.6396,x:170.05,y:-201.2},0).wait(1).to({scaleX:0.9622,scaleY:0.9622,rotation:48.6649,x:169.45,y:-202.3},0).wait(1).to({scaleX:0.9606,scaleY:0.9606,rotation:48.078,x:169.1,y:-203},0).wait(1).to({regX:0.1,regY:-0.2,scaleX:0.9599,scaleY:0.9599,rotation:47.818,x:50.95,y:-266.75},0).wait(45).to({startPosition:8},0).to({regY:-0.1,scaleX:1,scaleY:1,rotation:67.228,x:90.3,y:-275.5},14,cjs.Ease.quadInOut).wait(21).to({regX:0,regY:0,rotation:62.7507,x:72.1,y:-282.2,startPosition:0},0).to({rotation:59.5549,x:59.65,y:-286.35},10,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:70.7588,x:112.15,y:-268.45},8,cjs.Ease.quadInOut).wait(19).to({startPosition:0},0).to({regX:0,regY:0,rotation:62.7507,x:72.1,y:-282.2},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:59.0452,x:72.15,y:-298.3},4,cjs.Ease.quadInOut).to({rotation:62.7507,x:72.1,y:-282.2},4,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({regY:-0.1,rotation:60.5121,x:62.95,y:-285.6},8,cjs.Ease.quadInOut).wait(42).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:18.8696,x:63.9,y:-313.8},6,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:72.1,y:-282.2},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:67.228,x:70.85,y:-312.9},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({rotation:62.7507,x:72.1,y:-282.2},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:63.6344,x:69.85,y:-276.3},33,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:62.7507,x:72.1,y:-282.2},34,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({startPosition:4},0).to({regX:0.1,regY:-0.1,scaleX:0.9956,scaleY:0.9956,rotation:53.6103,x:71.85,y:-280.9,startPosition:5},1).to({scaleX:0.9913,scaleY:0.9913,rotation:44.4687,x:71.5,y:-279.7,startPosition:6},1).to({regY:-0.2,scaleX:0.987,scaleY:0.987,rotation:35.3277,x:71.2,y:-278.55,startPosition:7},1).to({regY:-0.1,scaleX:0.97,scaleY:0.97,rotation:-1.2403,x:69.7,y:-273.4},4,cjs.Ease.quadOut).wait(16).to({rotation:-1.2403},0).to({scaleX:0.9737,scaleY:0.9737,rotation:6.757,x:70,y:-274.55,startPosition:6},1).to({scaleX:0.9774,scaleY:0.9774,rotation:14.7556,x:70.3,y:-275.7,startPosition:5},1).to({regX:0.2,scaleX:0.9812,scaleY:0.9812,rotation:22.755,x:70.8,y:-276.8,startPosition:4},1).to({scaleX:0.9849,scaleY:0.9849,rotation:30.7531,x:70.9,y:-277.9,startPosition:0},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:62.7507,x:72.1,y:-282.2,startPosition:4},4).wait(5));

	// Hand_L
	this.instance_6 = new lib.DogHands("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-195.85,-53.5,1,1,0,-62.7507,117.2493);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:-55.273,skewY:124.727,x:-214.6,y:-71.15},6,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-67.7463,skewY:112.2537,x:-195.2,y:-37.85},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,skewX:-45.2547,skewY:134.7453,x:-260.05,y:-133.2},9,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},9,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-67.7463,skewY:112.2537,x:-195.2,y:-37.85},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},11,cjs.Ease.quadInOut).wait(49).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-60.0281,skewY:119.9719,x:-195.45,y:-62.4},8,cjs.Ease.quadInOut).wait(25).to({startPosition:0},0).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},10,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-67.7463,skewY:112.2537,x:-195.2,y:-37.85},10,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:-56.9921,skewY:123.0079,x:-239.75,y:-86.95},1).to({skewX:-33.1347,skewY:146.8653,x:-300.25,y:-177.65},1).to({regX:0.1,regY:-0.4,scaleX:0.9998,scaleY:0.9185,skewX:-1.9231,skewY:178.0768,x:-304.55,y:-287.4,startPosition:3},1).to({regY:-0.3,scaleX:0.9999,scaleY:0.9637,skewX:21.8536,skewY:201.854,x:-304.7,y:-371.55},1).wait(1).to({regX:44,regY:-1.4,scaleY:0.9904,skewX:39.2261,skewY:219.2262,x:-341.45,y:-441.65},0).wait(1).to({regX:0,regY:-0.1,scaleY:0.9999,skewX:45.387,skewY:225.387,x:-309.4,y:-427.8},0).to({skewX:38.4921,skewY:218.4921,x:-312.85,y:-418},3,cjs.Ease.quadInOut).wait(15).to({startPosition:3},0).to({regX:0.1,skewX:30.7526,skewY:210.7526,x:-320.15,y:-367.2},5).to({regX:0,skewX:38.4921,skewY:218.4921,x:-312.85,y:-418},3,cjs.Ease.quadInOut).to({regX:0.1,skewX:30.7526,skewY:210.7526,x:-320.15,y:-367.2},5).wait(3).to({skewX:20.0507,skewY:200.0507,x:-333.8,y:-312.2},0).to({regY:-0.2,skewX:-27.9666,skewY:152.0334,x:-321.3,y:-239.05,startPosition:0},1).to({scaleX:0.9998,scaleY:0.9998,skewX:-38.7898,skewY:141.2102,x:-299.85,y:-203.45},1).to({regY:-0.3,skewX:-41.7836,skewY:138.2164,x:-295.65,y:-181},1).to({regY:-0.4,skewX:-50.7699,skewY:129.2301,x:-261.75,y:-122.65},3).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},4).wait(9).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({startPosition:0},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-66.2039,skewY:113.7961,x:-180.9,y:-110.6},6,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-58.2963,skewY:121.7037,x:-213.05,y:-108.5},3,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},8,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({skewX:-37.8203,skewY:142.1797,x:-258.45,y:-123.9},7,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({regX:-0.1,regY:-0.2,scaleX:0.9999,scaleY:0.9999,skewX:-45.7976,skewY:134.2024,x:-277.85,y:-82.15},7,cjs.Ease.quadInOut).wait(15).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},9,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-61.0175,skewY:118.9825,x:-195.65,y:-59.2},7,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},8,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-64.7277,skewY:115.2723,x:-187.7,y:-90.85},5,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},5,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({skewX:-59.5549,skewY:120.4451,x:-195.95,y:-63.65},9,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,skewX:-67.2163,skewY:112.7837,x:-195.2,y:-38.55},19,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-59.5549,skewY:120.4451,x:-195.95,y:-63.65},20,cjs.Ease.quadInOut).to({skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},14,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-64.7277,skewY:115.2723,x:-187.7,y:-90.85},5,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({startPosition:0},6,cjs.Ease.quadInOut).wait(22).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,skewX:-61.0129,skewY:118.9871,x:-215.2,y:-40.35},7,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({scaleX:0.967,scaleY:0.967,skewX:-61.3223,skewY:118.6777,x:-211.85,y:-56.6},2,cjs.Ease.quadIn).to({scaleX:0.9777,scaleY:0.9777,skewX:-61.7839,skewY:118.2161,x:-206.7,y:-65.15},3).to({scaleX:0.9865,scaleY:0.9865,skewX:-62.1698,skewY:117.8302,x:-202.4,y:-66.85},2).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},3,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:-44.5679,skewY:135.4321,x:-227.35,y:-136.5},6,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,skewX:-61.0129,skewY:118.9871,x:-215.2,y:-40.35},7,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({scaleX:0.967,scaleY:0.967,skewX:-61.3223,skewY:118.6777,x:-211.85,y:-56.6},2,cjs.Ease.quadIn).to({scaleX:0.9777,scaleY:0.9777,skewX:-61.7839,skewY:118.2161,x:-206.7,y:-65.15},3).to({scaleX:0.9865,scaleY:0.9865,skewX:-62.1698,skewY:117.8302,x:-202.4,y:-66.85},2).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},3,cjs.Ease.quadOut).wait(3).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({startPosition:0},11,cjs.Ease.quadInOut).wait(59).to({startPosition:0},0).to({skewX:-59.5549,skewY:120.4451,x:-195.95,y:-63.65},9,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,skewX:-67.2163,skewY:112.7837,x:-195.2,y:-38.55},15,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-59.5549,skewY:120.4451,x:-195.95,y:-63.65},15,cjs.Ease.quadInOut).to({skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,skewX:-61.0129,skewY:118.9871,x:-215.2,y:-40.35},12,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:-58.273,skewY:121.727,x:-194.8,y:-68.55},14,cjs.Ease.quadInOut).wait(21).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},0).to({regX:-0.1,regY:-0.1,skewX:-65.9475,skewY:114.0525,x:-195.05,y:-43.15},10,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:0,regY:-0.2,scaleX:0.9999,scaleY:0.9999,skewX:-26.8051,skewY:153.1949,x:-266.2,y:-171.45},8,cjs.Ease.quadInOut).wait(19).to({skewX:-26.8051},0).to({regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},9,cjs.Ease.quadInOut).wait(1).to({skewX:-62.7507},0).to({skewX:-60.5357,skewY:119.4643,x:-209.05,y:-80.45},4,cjs.Ease.quadInOut).to({skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},4,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({skewX:-64.9882,skewY:115.0118,y:-46.55},8,cjs.Ease.quadInOut).wait(42).to({startPosition:0},0).to({regY:-0.1,skewX:-66.9389,skewY:113.0611,x:-200.4,y:-52.35},6,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-64.9663,skewY:115.0337,x:-186,y:-80.75},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-65.0277,skewY:114.9723,x:-188.95,y:-42.7},33,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-195.85,y:-53.5},34,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({x:-229.6,y:-79.75,startPosition:3},0).to({scaleX:0.987,scaleY:0.987,skewX:8.0397,skewY:188.0397,x:-327.2,y:-260.25},3).to({scaleX:0.9699,scaleY:0.9699,skewX:34.7934,skewY:214.7934,x:-290.95,y:-395.85},4,cjs.Ease.quadOut).to({regY:-0.1,skewX:29.5813,skewY:209.5813,x:-290.9,y:-395.95},2).to({regY:0,skewX:34.7934,skewY:214.7934,x:-290.95,y:-395.85},2).to({regY:-0.1,skewX:29.5813,skewY:209.5813,x:-290.9,y:-395.95},2).to({regY:0,skewX:34.7934,skewY:214.7934,x:-290.95,y:-395.85},2).to({regY:-0.1,skewX:29.5813,skewY:209.5813,x:-290.9,y:-395.95},2).to({regY:0,skewX:34.7934,skewY:214.7934,x:-290.95,y:-395.85},2).to({regY:-0.1,skewX:29.5813,skewY:209.5813,x:-290.9,y:-395.95},2).to({startPosition:3},2).to({regX:0.1,scaleX:0.9736,scaleY:0.9736,skewX:18.0388,skewY:198.0388,x:-297.1,y:-322.8},1).to({regY:-0.2,scaleX:0.9774,scaleY:0.9774,skewX:6.4973,skewY:186.4973,x:-292.45,y:-276.9,startPosition:0},1).to({regY:-0.3,scaleX:0.9811,scaleY:0.9811,skewX:-13.0109,skewY:166.9891,x:-280.7,y:-232.95},1).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-71.7177,skewY:108.2823,x:-229.6,y:-79.75},5).wait(5));

	// Arm_L
	this.instance_7 = new lib.DogArms("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-81.8,-282.2,1,1,0,-62.7507,117.2493);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:-0.1,skewX:-55.273,skewY:124.727,x:-71.9,y:-283.1},6,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({regY:0,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({skewX:-67.7463,skewY:112.2537,x:-101.4,y:-275.55},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,skewX:-45.2547,skewY:134.7453,x:-82.5,y:-317.05},9,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},9,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).to({skewX:-67.7463,skewY:112.2537,x:-101.4,y:-275.55},7,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},11,cjs.Ease.quadInOut).wait(49).to({startPosition:0},0).to({skewX:-60.0281,skewY:119.9719,x:-70.7,y:-285.25},8,cjs.Ease.quadInOut).wait(25).to({startPosition:0},0).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},10,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({skewX:-67.7463,skewY:112.2537,x:-101.4,y:-275.55},10,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},11,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,skewX:-60.1432,skewY:119.8568,x:-82.1,y:-285.8,startPosition:4},1).to({skewX:-51.9241,skewY:128.0759,x:-83.05,y:-296.8,startPosition:6},1).to({regY:-0.1,skewX:-38.6285,skewY:141.3715,x:-84.5,y:-314.8,startPosition:7},1).to({skewX:-25.9488,skewY:154.0512,x:-85.9,y:-331.9,startPosition:8},1).wait(1).to({regX:131.5,regY:-47,scaleX:1,scaleY:1,skewX:-18.4357,skewY:161.5643,x:-226.15,y:-344.8},0).wait(1).to({regX:0,regY:-0.1,skewX:-15.7713,skewY:164.2287,x:-86.9,y:-345.5},0).to({regX:0.1,skewX:-18.2218,skewY:161.7782,x:-87.1,y:-345.15},3,cjs.Ease.quadInOut).wait(15).to({startPosition:8},0).to({regX:0,regY:-0.2,skewX:-25.9613,skewY:154.0387,x:-86.5,y:-325.6},5).to({regX:0.1,regY:-0.1,skewX:-18.2218,skewY:161.7782,x:-87.1,y:-345.15},3,cjs.Ease.quadInOut).to({regX:0,regY:-0.2,skewX:-25.9613,skewY:154.0387,x:-86.5,y:-325.6},5).wait(3).to({startPosition:6},0).to({regX:0.1,scaleX:0.9999,scaleY:0.9999,skewX:-29.6403,skewY:150.3597,x:-86.1,y:-321.2,startPosition:4},1).to({regX:0,skewX:-33.3202,skewY:146.6798,x:-85.55,y:-317.05,startPosition:3},1).to({regX:0.1,regY:-0.3,scaleX:0.9998,scaleY:0.9998,skewX:-36.9984,skewY:143.0016,x:-85.2,y:-312.8,startPosition:0},1).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},7).wait(9).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({startPosition:0},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({skewX:-66.2039,skewY:113.7961,x:-80.85,y:-345.65},6,cjs.Ease.quadInOut).to({skewX:-58.2963,skewY:121.7037,x:-81.55,y:-327.65},3,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},8,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({regX:0.1,regY:-0.1,skewX:-37.8203,skewY:142.1797,x:-58.7,y:-283.25},7,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({regY:-0.3,scaleX:0.9999,scaleY:0.9999,skewX:-45.7976,skewY:134.2024,x:-102.2,y:-267.65},7,cjs.Ease.quadInOut).wait(15).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},9,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({skewX:-61.0175,skewY:118.9825,x:-74.75,y:-284.15},7,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},8,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({regY:-0.1,skewX:-64.7277,skewY:115.2723,x:-81.65,y:-323.25},5,cjs.Ease.quadInOut).to({regY:0,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},5,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({skewX:-59.5549,skewY:120.4451,x:-69.3,y:-285.6},9,cjs.Ease.quadInOut).to({skewX:-67.2163,skewY:112.7837,x:-99.2,y:-275.3},19,cjs.Ease.quadInOut).to({skewX:-59.5549,skewY:120.4451,x:-69.3,y:-285.6},20,cjs.Ease.quadInOut).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},14,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({regY:-0.1,skewX:-64.7277,skewY:115.2723,x:-81.65,y:-323.25},5,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regY:0,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({startPosition:0},6,cjs.Ease.quadInOut).wait(22).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:0.96,scaleY:0.96,skewX:-61.0129,skewY:118.9871,x:-99.25,y:-256.3},7,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({regY:-0.3,scaleX:0.967,scaleY:0.967,skewX:-61.3223,skewY:118.6777,x:-96.3,y:-274.75},2,cjs.Ease.quadIn).to({regY:-0.2,scaleX:0.9777,scaleY:0.9777,skewX:-61.7839,skewY:118.2161,x:-91.5,y:-286.7},3).to({regY:-0.3,scaleX:0.9865,scaleY:0.9865,skewX:-62.1698,skewY:117.8302,x:-87.8,y:-291.3},2).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},3,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,skewX:-44.5679,skewY:135.4321,x:-47.65,y:-318.05},6,cjs.Ease.quadInOut).wait(28).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:0.96,scaleY:0.96,skewX:-61.0129,skewY:118.9871,x:-99.25,y:-256.3},7,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({regY:-0.3,scaleX:0.967,scaleY:0.967,skewX:-61.3223,skewY:118.6777,x:-96.3,y:-274.75},2,cjs.Ease.quadIn).to({regY:-0.2,scaleX:0.9777,scaleY:0.9777,skewX:-61.7839,skewY:118.2161,x:-91.5,y:-286.7},3).to({regY:-0.3,scaleX:0.9865,scaleY:0.9865,skewX:-62.1698,skewY:117.8302,x:-87.8,y:-291.3},2).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},3,cjs.Ease.quadOut).wait(3).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({startPosition:0},11,cjs.Ease.quadInOut).wait(59).to({startPosition:0},0).to({skewX:-59.5549,skewY:120.4451,x:-69.3,y:-285.6},9,cjs.Ease.quadInOut).to({skewX:-67.2163,skewY:112.7837,x:-99.2,y:-275.3},15,cjs.Ease.quadInOut).to({skewX:-59.5549,skewY:120.4451,x:-69.3,y:-285.6},15,cjs.Ease.quadInOut).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:0.96,scaleY:0.96,skewX:-61.0129,skewY:118.9871,x:-99.25,y:-256.3},12,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-58.273,skewY:121.727,x:-63.2,y:-287.5},14,cjs.Ease.quadInOut).wait(21).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},0).to({skewX:-65.9475,skewY:114.0525,x:-93.9,y:-277.75},10,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:-26.8051,skewY:153.1949,x:-39.6,y:-289.5},8,cjs.Ease.quadInOut).wait(19).to({skewX:-26.8051},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},9,cjs.Ease.quadInOut).wait(1).to({skewX:-62.7507},0).to({regY:-0.1,skewX:-60.5357,skewY:119.4643,x:-86.35,y:-304.6},4,cjs.Ease.quadInOut).to({regY:0,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},4,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({skewX:-64.9882,skewY:115.0118,x:-90.85,y:-279.55},8,cjs.Ease.quadInOut).wait(42).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-66.9389,skewY:113.0611,x:-103.4,y:-288.8},6,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({skewX:-64.9663,skewY:115.0337,x:-80.85,y:-313.6},6,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:-65.0277,skewY:114.9723,x:-84,y:-275.75},33,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2},34,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({startPosition:4},0).to({regY:-0.1,scaleX:0.9956,scaleY:0.9956,skewX:-54.2538,skewY:125.7462,x:-81.65,y:-281.05,startPosition:5},1).to({regX:0.1,scaleX:0.9913,scaleY:0.9913,skewX:-45.7552,skewY:134.2448,x:-81.35,y:-279.75,startPosition:6},1).to({scaleX:0.987,scaleY:0.987,skewX:-37.2568,skewY:142.7432,x:-81.05,y:-278.5,startPosition:7},1).to({scaleX:0.97,scaleY:0.97,skewX:-3.2655,skewY:176.7345,x:-79.7,y:-273.4},4,cjs.Ease.quadOut).wait(16).to({skewX:-3.2655},0).to({scaleX:0.9737,scaleY:0.9737,skewX:-10.7001,skewY:169.2999,x:-79.95,y:-274.55,startPosition:6},1).to({scaleX:0.9774,scaleY:0.9774,skewX:-18.136,skewY:161.864,x:-80.3,y:-275.6,startPosition:5},1).to({regX:0.2,regY:-0.2,scaleX:0.9812,scaleY:0.9812,skewX:-25.572,skewY:154.428,x:-80.75,y:-276.8,startPosition:4},1).to({scaleX:0.9849,scaleY:0.9849,skewX:-33.0066,skewY:146.9934,x:-80.85,y:-277.95,startPosition:0},1).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-62.7507,skewY:117.2493,x:-81.8,y:-282.2,startPosition:4},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.2,-686.6,919.8,784.7);


// stage content:
(lib.bob = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"bob-cup":0,"bob-cone":27,"bob-wafflecone":70,"bob-wafflebowl":127,"bob-with":169,"bob-and":193,"bob-berry":215,"bob-birthday":260,"bob-rainbow":316,"bob-vanilla":375,"bob-mint":413,"bob-mango":467,"bob-banana":535,"bob-cereal":562,"bob-chips":603,"bob-chocolate":641,"bob-flapjack":704,"bob-peaches":748,"bob-peppermints":785,"bob-pickles":821,"bob-sprinkles":864,"bob-strawberries":925,"bob-jellybeans":965,"bob-please":993,"bob-thank-1":1023,"bob-thank-2":1074,"bob-wrong-order":1166,"bob-freeplay":1218,"bob-surprise":1329,idle:1362,idleSpecial:1430});

	// timeline functions:
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_126 = function() {
		this.stop();
	}
	this.frame_168 = function() {
		this.stop();
	}
	this.frame_192 = function() {
		this.stop();
	}
	this.frame_214 = function() {
		this.stop();
	}
	this.frame_259 = function() {
		this.stop();
	}
	this.frame_315 = function() {
		this.stop();
	}
	this.frame_374 = function() {
		this.stop();
	}
	this.frame_412 = function() {
		this.stop();
	}
	this.frame_466 = function() {
		this.stop();
	}
	this.frame_534 = function() {
		this.stop();
	}
	this.frame_561 = function() {
		this.stop();
	}
	this.frame_602 = function() {
		this.stop();
	}
	this.frame_640 = function() {
		this.stop();
	}
	this.frame_703 = function() {
		this.stop();
	}
	this.frame_747 = function() {
		this.stop();
	}
	this.frame_784 = function() {
		this.stop();
	}
	this.frame_820 = function() {
		this.stop();
	}
	this.frame_863 = function() {
		this.stop();
	}
	this.frame_924 = function() {
		this.stop();
	}
	this.frame_964 = function() {
		this.stop();
	}
	this.frame_992 = function() {
		this.stop();
	}
	this.frame_1022 = function() {
		this.stop();
	}
	this.frame_1073 = function() {
		this.stop();
	}
	this.frame_1165 = function() {
		this.stop();
	}
	this.frame_1217 = function() {
		this.stop();
	}
	this.frame_1328 = function() {
		this.stop();
	}
	this.frame_1361 = function() {
		this.stop();
	}
	this.frame_1429 = function() {
		this.gotoAndPlay('idle');
	}
	this.frame_1430 = function() {
		this.dispatchEvent('reaction', true);
	}
	this.frame_1468 = function() {
		this.dispatchEvent('complete', true);
		this.gotoAndPlay('idle');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(43).call(this.frame_69).wait(57).call(this.frame_126).wait(42).call(this.frame_168).wait(24).call(this.frame_192).wait(22).call(this.frame_214).wait(45).call(this.frame_259).wait(56).call(this.frame_315).wait(59).call(this.frame_374).wait(38).call(this.frame_412).wait(54).call(this.frame_466).wait(68).call(this.frame_534).wait(27).call(this.frame_561).wait(41).call(this.frame_602).wait(38).call(this.frame_640).wait(63).call(this.frame_703).wait(44).call(this.frame_747).wait(37).call(this.frame_784).wait(36).call(this.frame_820).wait(43).call(this.frame_863).wait(61).call(this.frame_924).wait(40).call(this.frame_964).wait(28).call(this.frame_992).wait(30).call(this.frame_1022).wait(51).call(this.frame_1073).wait(92).call(this.frame_1165).wait(52).call(this.frame_1217).wait(111).call(this.frame_1328).wait(33).call(this.frame_1361).wait(68).call(this.frame_1429).wait(1).call(this.frame_1430).wait(38).call(this.frame_1468).wait(1));

	// bob
	this.instance = new lib.DogGameplay("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(421.05,549.35,0.8,0.8,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1469));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(472.5,394.5,311.9,233.20000000000005);
// library properties:
lib.properties = {
	id: '5F05645677BC498CB8A79A92C503C4EF',
	width: 848,
	height: 789,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bob_atlas_.png", id:"bob_atlas_"}
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
an.compositions['5F05645677BC498CB8A79A92C503C4EF'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;