(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"grampy_atlas_", frames: [[0,539,301,235],[679,480,266,247],[0,1190,307,172],[300,1402,308,143],[0,1547,310,118],[312,1659,311,95],[639,1590,304,117],[0,1364,298,154],[654,1400,288,188],[375,1181,277,219],[312,1547,325,110],[679,0,286,478],[750,729,210,246],[654,1181,256,217],[0,1667,176,146],[0,809,373,379],[304,407,373,400],[304,0,373,405],[375,809,373,370],[750,977,192,168],[0,0,302,537]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_57750bdd_b672_414f_9b33_47723a6fe5a8 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaHOBody = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaHOEarL = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaHOEarR = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaHOHair = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaHOMouth1 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaHOMouth2 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaHOMouth3 = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaHOMouthClosed = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaHONeck = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.GrandpaLBody = function() {
	this.initialize(ss["grampy_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.WarpedAsset_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BMP_57750bdd_b672_414f_9b33_47723a6fe5a8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325,110);


(lib.GrandpaNeck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GrandpaHONeck();
	this.instance.parent = this;
	this.instance.setTransform(-95,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-121,192,168);


(lib.GrandpaHeadHO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GrandpaHOMouth1();
	this.instance.parent = this;
	this.instance.setTransform(-190.5,-368.65);

	this.instance_1 = new lib.GrandpaHOMouth2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-190.5,-368.65);

	this.instance_2 = new lib.GrandpaHOMouth3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-190.5,-368.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.5,-368.6,373,405);


(lib.GrandpaHair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GrandpaHOHair();
	this.instance.parent = this;
	this.instance.setTransform(-97,-148.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-148,176,146);


(lib.GrandpaEar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GrandpaHOEarR();
	this.instance.parent = this;
	this.instance.setTransform(-15.45,-219.55);

	this.instance_1 = new lib.GrandpaHOEarL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(188.75,-215.7,1,1,0,-1.4873,178.5127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-219.5,261.7,255.2);


(lib.GrandpaBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GrandpaHOBody();
	this.instance.parent = this;
	this.instance.setTransform(-158.55,-281.05);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.5,-281,286,478);


(lib.FroyoSwap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.GrampyLipsync = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouth
	this.instance = new lib.GrandpaHeadHO("single",0);
	this.instance.parent = this;
	this.instance.setTransform(4,183.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(12).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(6).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(6).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(6).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(10).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(8).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(8).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(6).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(9).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(8).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(7).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(15).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(9).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(7).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(8).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(11).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(8).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(10).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(7).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(11).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(9).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(11).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(8).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(12).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(9).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(7).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(6).to({startPosition:0},0).wait(10).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(9).to({startPosition:0},0).wait(66).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(6).to({startPosition:0},0).wait(13).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(13).to({startPosition:1},0).wait(6).to({startPosition:0},0).wait(33).to({startPosition:0},0).to({_off:true},1).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.5,-185,373,405);


(lib.PuppetShape_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325,110);


(lib.GrandpaArms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FroyoSwap
	this.FroyoContainer = new lib.FroyoSwap();
	this.FroyoContainer.name = "FroyoContainer";
	this.FroyoContainer.parent = this;
	this.FroyoContainer.setTransform(206.7,-151.6,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.FroyoContainer).wait(11));

	// Layer_2_copy
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-22,-46);

	this.instance_1 = new lib.PuppetShape_4("synched",1,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(142.1,9.95,1,1,0,0,0,162.5,55);

	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-24,-48);

	this.instance_3 = new lib.Bitmap3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-25,-49);

	this.instance_4 = new lib.Bitmap4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-26,-50);

	this.instance_5 = new lib.Bitmap5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-27,-54);

	this.instance_6 = new lib.Bitmap6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-28,-78);

	this.instance_7 = new lib.Bitmap7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-30,-116);

	this.instance_8 = new lib.Bitmap8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-31,-151);

	this.instance_9 = new lib.Bitmap9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-31,-183);

	this.instance_10 = new lib.Bitmap10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-32,-212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-212,316,401);


(lib.GrampyGameplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hair
	this.instance = new lib.GrandpaHair("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-21.3,-488.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.1,rotation:8.1778,x:30.65,y:-487.3},7,cjs.Ease.quadInOut).wait(10).to({startPosition:0},0).to({regX:-0.1,regY:-0.2,rotation:-1.3063,x:-34,y:-528.55},7,cjs.Ease.quadInOut).wait(3).to({rotation:-1.3063},0).to({regX:0,regY:0,rotation:0,x:-21.3,y:-488.9},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-6.1456,x:-65.05,y:-475.2},7,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({rotation:0,x:-21.3,y:-488.9},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-6.1456,x:-65.05,y:-475.2},8,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({rotation:0,x:-21.3,y:-488.9},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-14.1493,x:-120.5,y:-537.1},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({y:-520.65},7,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({y:-537.1},7,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,rotation:1.8084,x:-16.65,y:-550.15},8,cjs.Ease.quadInOut).wait(7).to({rotation:1.8084},0).to({scaleX:1,scaleY:1,rotation:3.2919,x:2.55,y:-541.4},7,cjs.Ease.quadInOut).to({rotation:0,x:-21.3,y:-488.9},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:9.6946,x:25.5,y:-487},8,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-7.9483,x:-87.35,y:-490.05},7,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:9.6946,x:25.5,y:-487},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({rotation:0,x:-21.3,y:-488.9},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({y:-474.8},4).to({y:-488.9},3).to({y:-477.1},5).to({y:-488.9},3).to({y:-477.1},5).to({y:-488.9},6,cjs.Ease.quadInOut).to({rotation:-7.8899,x:-74.2,y:-484.45},7,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({rotation:0,x:-21.3,y:-488.9},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-5.7044,x:-75.7,y:-458.6},7,cjs.Ease.quadInOut).wait(9).to({startPosition:0},0).to({rotation:0.7458,x:-18.35,y:-500.15},5,cjs.Ease.quadInOut).to({regX:-0.2,scaleX:0.9311,scaleY:0.9311,rotation:-2.8697,x:-48.75,y:-485.65},3).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-7.6977,x:-89.65,y:-495.1},4).to({regY:-0.2,scaleX:1.0711,scaleY:1.0711,rotation:-3.4751,x:-54.4,y:-509.7},4).to({regY:-0.1,scaleX:1,scaleY:1,rotation:0.7458,x:-18.35,y:-500.15},4).to({y:-475.1},6,cjs.Ease.quadInOut).to({y:-505.7},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-21.3,y:-488.9},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({y:-512.45},5,cjs.Ease.quadInOut).to({y:-488.9},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({rotation:-11.4512,x:-103.45,y:-478.35},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:7.2435,x:45.25,y:-464.8},7,cjs.Ease.quadInOut).wait(6).to({rotation:7.2435},0).to({regX:0,regY:0,rotation:0,x:-21.3,y:-488.9},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:8.6534,x:54,y:-501},6,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({rotation:-1.3072,x:4.85,y:-502.35},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({rotation:8.6534,x:54,y:-501},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-21.3,y:-488.9},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({regX:0.1,rotation:10.4512,x:50.75,y:-487.2},7,cjs.Ease.quadInOut).to({regX:0.2,regY:-0.1,rotation:8.275,x:36.85,y:-512.2},6,cjs.Ease.quadInOut).to({regX:0.1,regY:0,rotation:10.4512,x:50.75,y:-487.2},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({regX:0,rotation:-7.9163,x:-61.7,y:-485.85},10,cjs.Ease.quadInOut).to({rotation:0,x:-21.3,y:-488.9},7,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:-4.466,x:-41.4,y:-486.8},8,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({rotation:0,x:-21.3,y:-488.9},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({y:-514.8},5,cjs.Ease.quadInOut).to({y:-488.9},6,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({y:-514.8},4,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-2.9327,x:-41.6,y:-513.95},3,cjs.Ease.quadInOut).to({regX:0.1,rotation:2.9668,x:0.1,y:-514.9},3,cjs.Ease.quadInOut).to({regX:0,rotation:-2.1748,x:-37.8,y:-514.05},3,cjs.Ease.quadInOut).to({regX:-0.1,rotation:2.4093,x:-3.8,y:-515},3,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-21.3,y:-488.9},6,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({y:-529.6},6,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-2.3673,x:-38.2,y:-528.9},4,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-21.3,y:-529.6},6,cjs.Ease.quadInOut).to({rotation:3.9917,x:-1.2,y:-549.6},5,cjs.Ease.quadInOut).to({rotation:0,x:-21.3,y:-488.9},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).to({y:-512.45},5,cjs.Ease.quadInOut).to({y:-488.9},5,cjs.Ease.quadInOut).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:-3.9207,x:-46.85,y:-487.3},6,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({rotation:0,x:-21.3,y:-488.9},8,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({rotation:5.7167,x:6.35,y:-487.85},7,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({y:-447.15},3,cjs.Ease.quadInOut).to({rotation:-1.7243,x:-28.95,y:-527.75},5,cjs.Ease.quadInOut).to({rotation:4.4888,x:0.85,y:-527.4},3,cjs.Ease.quadInOut).to({rotation:-5.9348,x:-48.2,y:-526.45},3,cjs.Ease.quadInOut).to({rotation:2.7183,x:-7.6,y:-527.85},3,cjs.Ease.quadInOut).to({rotation:0,x:-21.3,y:-488.9},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(24).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({y:-529.6},7,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).wait(4).to({startPosition:0},0).to({y:-488.9},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({rotation:-0.9495,x:-30,y:-511.95},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({rotation:0.2343,x:-18.85,y:-483.95},5,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:1.2337,x:-9.8,y:-514.8},5,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-21.3,y:-488.9},5,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(40).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:-1.4838,x:-40.45,y:-425.55},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({rotation:9.2233,x:48.55,y:-507.75},7,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({rotation:-0.2492,x:9.7,y:-509.3},6,cjs.Ease.quadInOut).wait(6).to({rotation:-0.2492},0).to({rotation:0,x:-21.3,y:-488.9},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(15).to({startPosition:0},0).to({rotation:-6.2056,x:-61.6,y:-486.15},8,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({rotation:0,x:-21.3,y:-488.9},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-4.6633,x:-61.35,y:-431.95},9,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({rotation:10.7717,x:85.7,y:-476.35},7,cjs.Ease.quadInOut).wait(19).to({startPosition:0},0).to({rotation:0,x:-21.3,y:-488.9},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,scaleX:1.0402,scaleY:1.0402,rotation:10.7175,x:48.3,y:-493.5},8,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:10.718,x:46.75,y:-485.4},8,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({x:41.05,y:-482.05},5,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({x:46.75,y:-485.4},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regY:-0.1,rotation:-0.0017,x:-4.85,y:-489.4},6,cjs.Ease.quadInOut).wait(5).to({rotation:-0.0017},0).to({regY:0,rotation:0,x:-21.3,y:-488.9},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-8.1679,x:-78,y:-483.5},8,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-21.3,y:-488.9},8).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:1.3955,x:-12.15,y:-476.8},29,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-21.3,y:-488.9},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({scaleX:0.94,scaleY:0.94,rotation:11.2063,x:60.65,y:-467.2},8,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-4.0345,x:-91.25,y:-460.15},7,cjs.Ease.quadInOut).to({rotation:-10.2791,x:-119.45,y:-455.2},3).to({regX:0.1,regY:-0.3,scaleX:0.9399,scaleY:0.944,rotation:0,skewX:-2.6312,skewY:2.7022,x:28.55,y:-466.45},7,cjs.Ease.quadInOut).to({scaleY:0.9409,skewX:15.3218,skewY:12.6627,x:74.9,y:-461.25},3).to({regX:-0.1,regY:-0.1,scaleX:1.06,scaleY:1.0645,skewX:8.5171,skewY:3.2283,x:-33.7,y:-527.1},14,cjs.Ease.quadInOut).to({scaleY:1.0607,skewX:-5.5569,skewY:-3.4671,x:-68.2,y:-525.2},6,cjs.Ease.quadOut).to({scaleY:1.06,rotation:-3.4671,skewX:0,skewY:0},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-21.3,y:-488.9},9,cjs.Ease.quadInOut).wait(1));

	// LIPSYNC
	this.instance_1 = new lib.GrampyLipsync("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19.9,-366.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:-0.1,rotation:8.1778,x:14.65,y:-366.3,startPosition:7},7,cjs.Ease.quadInOut).wait(10).to({startPosition:17},0).to({regX:0,regY:-0.2,rotation:-1.3063,x:-29.7,y:-406.6,startPosition:24},7,cjs.Ease.quadInOut).wait(3).to({rotation:-1.3063,startPosition:27},0).to({regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:34},7,cjs.Ease.quadInOut).wait(1).to({startPosition:35},0).to({regX:-0.1,regY:-0.1,rotation:-6.1456,x:-50.65,y:-354.1,startPosition:42},7,cjs.Ease.quadInOut).wait(16).to({startPosition:58},0).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:66},8,cjs.Ease.quadInOut).wait(1).to({startPosition:67},0).to({regX:-0.1,regY:-0.1,rotation:-6.1456,x:-50.65,y:-354.1,startPosition:75},8,cjs.Ease.quadInOut).wait(29).to({startPosition:104},0).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:113},9,cjs.Ease.quadInOut).wait(1).to({startPosition:114},0).to({regX:-0.1,regY:-0.1,rotation:-14.1493,x:-89.35,y:-419.25,startPosition:121},7,cjs.Ease.quadInOut).wait(6).to({regX:0,x:-89.25,startPosition:127},0).to({y:-402.8,startPosition:134},7,cjs.Ease.quadInOut).wait(3).to({startPosition:137},0).to({regX:-0.1,x:-89.35,y:-419.25,startPosition:144},7,cjs.Ease.quadInOut).wait(4).to({startPosition:148},0).to({scaleX:0.9999,scaleY:0.9999,rotation:1.8084,x:-19.15,y:-428.2,startPosition:156},8,cjs.Ease.quadInOut).wait(7).to({rotation:1.8084,startPosition:163},0).to({regY:-0.2,scaleX:1,scaleY:1,rotation:3.2919,x:-3.05,y:-419.75,startPosition:170},7,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:177},7,cjs.Ease.quadInOut).wait(1).to({startPosition:178},0).to({rotation:9.6946,x:6.35,y:-366.5,startPosition:186},8,cjs.Ease.quadInOut).wait(5).to({startPosition:191},0).to({regY:-0.1,rotation:-7.9483,x:-68.95,y:-369.35,startPosition:198},7,cjs.Ease.quadInOut).to({regY:0,rotation:9.6946,x:6.35,y:-366.5,startPosition:205},7,cjs.Ease.quadInOut).wait(2).to({startPosition:207},0).to({rotation:0,x:-19.9,y:-366.95,startPosition:214},7,cjs.Ease.quadInOut).wait(1).to({startPosition:215},0).to({y:-352.75,startPosition:219},4).to({y:-366.95,startPosition:222},3).to({y:-355.15,startPosition:227},5).to({y:-366.95,startPosition:230},3).to({y:-355.15,startPosition:235},5).to({y:-366.95,startPosition:241},6,cjs.Ease.quadInOut).to({rotation:-7.8899,x:-56,y:-363.8,startPosition:248},7,cjs.Ease.quadInOut).wait(8).to({startPosition:256},0).to({rotation:0,x:-19.9,y:-366.95,startPosition:262},6,cjs.Ease.quadInOut).wait(1).to({startPosition:263},0).to({rotation:-5.7044,x:-62.1,y:-337.25,startPosition:270},7,cjs.Ease.quadInOut).wait(9).to({startPosition:279},0).to({regX:-0.1,regY:-0.1,rotation:0.7458,x:-18.55,y:-378.2,startPosition:284},5,cjs.Ease.quadInOut).to({regY:-0.2,scaleX:0.9311,scaleY:0.9311,rotation:-2.8697,x:-41.7,y:-372.7,startPosition:287},3).to({regY:-0.1,scaleX:1,scaleY:1,rotation:-7.6977,x:-71.9,y:-374.5,startPosition:291},4).to({regY:-0.2,scaleX:1.0711,scaleY:1.0711,rotation:-3.4751,x:-45.05,y:-379.75,startPosition:295},4).to({regY:-0.1,scaleX:1,scaleY:1,rotation:0.7458,x:-18.55,y:-378.2,startPosition:299},4).to({y:-353.15,startPosition:305},6,cjs.Ease.quadInOut).to({y:-383.75,startPosition:313},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:321},8,cjs.Ease.quadInOut).wait(1).to({startPosition:322},0).to({y:-390.5,startPosition:327},5,cjs.Ease.quadInOut).to({y:-366.95,startPosition:332},5,cjs.Ease.quadInOut).wait(5).to({startPosition:337},0).to({rotation:-11.4512,x:-77.9,y:-359.05,startPosition:344},7,cjs.Ease.quadInOut).wait(6).to({startPosition:350},0).to({regX:0.1,regY:-0.1,rotation:7.2435,x:31.3,y:-343.6,startPosition:357},7,cjs.Ease.quadInOut).wait(6).to({rotation:7.2435,startPosition:363},0).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:369},6,cjs.Ease.quadInOut).wait(1).to({startPosition:370},0).to({regX:0.1,regY:-0.1,rotation:8.6534,x:37.05,y:-380.2,startPosition:376},6,cjs.Ease.quadInOut).wait(16).to({startPosition:392},0).to({rotation:-1.3072,x:9.05,y:-380.4,startPosition:399},7,cjs.Ease.quadInOut).wait(6).to({startPosition:405},0).to({rotation:8.6534,x:37.05,y:-380.2,startPosition:413},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:424},11,cjs.Ease.quadInOut).wait(1).to({startPosition:425},0).wait(3).to({startPosition:428},0).to({rotation:10.4512,x:29.9,startPosition:435},7,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,rotation:8.275,x:20.65,y:-391.25,startPosition:441},6,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:10.4512,x:29.9,y:-366.95,startPosition:447},6,cjs.Ease.quadInOut).wait(7).to({startPosition:454},0).to({regX:-0.1,regY:-0.1,rotation:-7.9163,x:-43.6,y:-365.25,startPosition:464},10,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:471},7,cjs.Ease.quadInOut).wait(7).to({startPosition:478},0).wait(1).to({startPosition:479},0).wait(18).to({startPosition:497},0).wait(1).to({startPosition:498},0).wait(20).to({startPosition:518},0).wait(1).to({startPosition:519},0).to({rotation:-4.466,x:-30.45,y:-365.25,startPosition:527},8,cjs.Ease.quadInOut).wait(6).to({startPosition:533},0).to({rotation:0,x:-19.9,y:-366.95,startPosition:541},8,cjs.Ease.quadInOut).wait(1).to({startPosition:542},0).wait(1).to({startPosition:543},0).to({y:-392.85,startPosition:548},5,cjs.Ease.quadInOut).to({y:-366.95,startPosition:554},6,cjs.Ease.quadInOut).wait(4).to({startPosition:558},0).to({y:-392.85,startPosition:562},4,cjs.Ease.quadInOut).to({rotation:-2.9327,x:-33.9,y:-392.1,startPosition:565},3,cjs.Ease.quadInOut).to({rotation:2.9668,x:-4.85,y:-392.95,startPosition:568},3,cjs.Ease.quadInOut).to({regX:-0.1,rotation:-2.1748,x:-31.8,y:-392.1,startPosition:571},3,cjs.Ease.quadInOut).to({regY:-0.1,rotation:2.4093,x:-7.5,y:-393.05,startPosition:574},3,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:580},6,cjs.Ease.quadInOut).wait(5).to({startPosition:585},0).to({y:-407.65,startPosition:591},6,cjs.Ease.quadInOut).to({rotation:-2.3673,x:-31.7,y:-407.05,startPosition:595},4,cjs.Ease.quadInOut).to({rotation:0,x:-19.9,y:-407.65,startPosition:601},6,cjs.Ease.quadInOut).to({rotation:3.9917,x:-8.35,y:-427.75,startPosition:606},5,cjs.Ease.quadInOut).to({rotation:0,x:-19.9,y:-366.95,startPosition:611},5,cjs.Ease.quadInOut).wait(8).to({startPosition:619},0).wait(1).to({startPosition:620},0).wait(17).to({startPosition:637},0).to({y:-390.5,startPosition:642},5,cjs.Ease.quadInOut).to({y:-366.95,startPosition:647},5,cjs.Ease.quadInOut).wait(9).to({startPosition:656},0).wait(1).to({startPosition:657},0).to({rotation:-3.9207,x:-37.15,y:-365.7,startPosition:663},6,cjs.Ease.quadInOut).wait(20).to({startPosition:683},0).to({rotation:0,x:-19.9,y:-366.95,startPosition:691},8,cjs.Ease.quadInOut).wait(8).to({startPosition:699},0).wait(1).to({startPosition:700},0).wait(5).to({startPosition:705},0).to({rotation:5.7167,x:-4.45,y:-366.4,startPosition:712},7,cjs.Ease.quadInOut).wait(16).to({startPosition:728},0).to({y:-325.7,startPosition:731},3,cjs.Ease.quadInOut).to({rotation:-1.7243,x:-23.8,y:-405.85,startPosition:736},5,cjs.Ease.quadInOut).to({rotation:4.4888,x:-7.3,y:-405.65,startPosition:739},3,cjs.Ease.quadInOut).to({rotation:-5.9348,x:-34.1,y:-405.25,startPosition:742},3,cjs.Ease.quadInOut).to({rotation:2.7183,x:-12,y:-405.9,startPosition:745},3,cjs.Ease.quadInOut).to({rotation:0,x:-19.9,y:-366.95,startPosition:753},8,cjs.Ease.quadInOut).wait(1).to({startPosition:754},0).wait(20).to({startPosition:774},0).wait(1).to({startPosition:775},0).wait(24).to({startPosition:799},0).wait(1).to({startPosition:800},0).to({y:-407.65,startPosition:807},7,cjs.Ease.quadInOut).wait(3).to({startPosition:810},0).wait(4).to({startPosition:814},0).to({y:-366.95,startPosition:820},6,cjs.Ease.quadInOut).wait(1).to({startPosition:821},0).wait(6).to({startPosition:827},0).to({rotation:-0.9495,x:-26.55,y:-390,startPosition:833},6,cjs.Ease.quadInOut).wait(7).to({startPosition:840},0).to({rotation:0.2343,x:-17.9,y:-362,startPosition:845},5,cjs.Ease.quadInOut).to({regX:-0.1,rotation:1.2337,x:-11.05,y:-392.7,startPosition:850},5,cjs.Ease.quadInOut).to({regX:0,rotation:0,x:-19.9,y:-366.95,startPosition:855},5,cjs.Ease.quadInOut).wait(12).to({startPosition:867},0).wait(1).to({startPosition:868},0).wait(40).to({startPosition:908},0).wait(1).to({startPosition:909},0).wait(23).to({startPosition:932},0).wait(1).to({startPosition:933},0).to({rotation:-1.4838,x:-35.9,y:-303.6,startPosition:939},6,cjs.Ease.quadInOut).wait(7).to({startPosition:946},0).to({regX:0.1,regY:-0.1,rotation:9.2233,x:30.45,y:-387.15,startPosition:953},7,cjs.Ease.quadInOut).wait(8).to({startPosition:961},0).to({rotation:-0.2492,x:11.6,y:-387.35,startPosition:967},6,cjs.Ease.quadInOut).wait(6).to({rotation:-0.2492,startPosition:973},0).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:979},6,cjs.Ease.quadInOut).wait(1).to({startPosition:980},0).wait(15).to({startPosition:995},0).to({regX:-0.1,regY:-0.1,rotation:-6.2056,x:-47.15,y:-365.15,startPosition:1003},8,cjs.Ease.quadInOut).wait(11).to({startPosition:1014},0).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:1021},7,cjs.Ease.quadInOut).wait(1).to({startPosition:1022},0).to({regX:-0.1,regY:-0.1,rotation:-4.6633,x:-50.2,y:-310.45,startPosition:1031},9,cjs.Ease.quadInOut).wait(20).to({startPosition:1051},0).to({regY:-0.2,rotation:10.7717,x:64.25,y:-356.4,startPosition:1058},7,cjs.Ease.quadInOut).wait(19).to({startPosition:1077},0).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:1085},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1086},0).to({scaleX:1.0402,scaleY:1.0402,rotation:10.7175,x:26.1,y:-368.4,startPosition:1094},8,cjs.Ease.quadInOut).wait(24).to({startPosition:1118},0).to({scaleX:1,scaleY:1,rotation:10.718,x:25.4,y:-365.25,startPosition:1126},8,cjs.Ease.quadInOut).wait(11).to({startPosition:1137},0).to({x:19.7,y:-361.9,startPosition:1142},5,cjs.Ease.quadInOut).wait(2).to({startPosition:1144},0).to({x:25.4,y:-365.25,startPosition:1149},5,cjs.Ease.quadInOut).wait(5).to({startPosition:1154},0).to({rotation:-0.0017,x:-3.4,y:-367.35,startPosition:1160},6,cjs.Ease.quadInOut).wait(5).to({rotation:-0.0017,startPosition:1165},0).to({rotation:0,x:-19.9,y:-366.95,startPosition:1171},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1172},0).to({regX:-0.1,regY:-0.1,rotation:-8.1679,x:-59.35,y:-362.95,startPosition:1180},8,cjs.Ease.quadInOut).wait(31).to({startPosition:1211},0).to({regX:0,regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:1219},8).wait(1).to({startPosition:1220},0).to({regY:-0.1,rotation:1.3955,x:-13.7,y:-354.75,startPosition:1249},29,cjs.Ease.quadInOut).to({regY:0,rotation:0,x:-19.9,y:-366.95,startPosition:1279},30,cjs.Ease.quadInOut).wait(1).to({startPosition:1280},0).to({regX:0.1,regY:-0.2,scaleX:0.94,scaleY:0.94,rotation:11.2063,x:39.75,y:-354.7,startPosition:1288},8,cjs.Ease.quadInOut).to({regX:-0.1,rotation:-4.0345,x:-81.8,y:-346,startPosition:1295},7,cjs.Ease.quadInOut).to({rotation:-10.2791,x:-97.7,y:-342.75,startPosition:1298},3).to({regX:0.1,regY:-0.3,scaleX:0.9399,scaleY:0.9399,rotation:2.7022,x:24.55,y:-351.8,startPosition:1305},7,cjs.Ease.quadInOut).to({regY:-0.4,rotation:12.6627,x:51.15,y:-349.1,startPosition:1308},3).to({regX:0,regY:0,scaleX:1.06,scaleY:1.06,rotation:3.2283,x:-39.4,y:-397.9,startPosition:1322},14,cjs.Ease.quadInOut).to({rotation:-3.4671,x:-58.85,y:-396.1,startPosition:1328},6,cjs.Ease.quadOut).to({rotation:-3.4671,startPosition:1335},7,cjs.Ease.quadInOut).wait(6).to({startPosition:1341},0).wait(6).to({startPosition:1347},0).to({scaleX:1,scaleY:1,rotation:0,x:-19.9,y:-366.95,startPosition:1279},9,cjs.Ease.quadInOut).wait(1));

	// Neck
	this.instance_2 = new lib.GrandpaNeck("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-17.3,-142.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:2.9861,x:-7.3},7,cjs.Ease.quadInOut).wait(10).to({startPosition:0},0).to({regX:-0.1,rotation:-1.5013,x:-20.85,y:-181.45},7,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({regX:0,rotation:0,x:-17.3,y:-142.65},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-1.7042,x:-28.95,y:-130.9},7,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({rotation:0,x:-17.3,y:-142.65},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-1.7042,x:-28.95,y:-130.9},8,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({rotation:0,x:-17.3,y:-142.65},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-6.7017,x:-39.95,y:-200.1},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({y:-183.65},7,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({y:-200.1},7,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-0.7195,x:-19.9,y:-203.8},8,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({rotation:0.7642,x:-9.7,y:-195.3},7,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-17.3,y:-142.65},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-7.1493,x:-37.45,y:-148.25},7,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-17.3,y:-142.65},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({startPosition:0},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({y:-128.5},4).to({y:-142.65},3).to({y:-130.8},5).to({y:-142.65},3).to({y:-130.8},5).to({y:-142.65},6,cjs.Ease.quadInOut).to({rotation:-3.6911,x:-28.1,y:-141.5},7,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({rotation:0,x:-17.3,y:-142.65},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-3.212,x:-40.2,y:-114.05},7,cjs.Ease.quadInOut).wait(9).to({startPosition:0},0).to({rotation:3.2383,x:-21.75,y:-153.8},5,cjs.Ease.quadInOut).to({scaleX:0.96,scaleY:0.96,rotation:0.3625,x:-31.65,y:-156.4},3).to({scaleX:1,scaleY:1,rotation:-3.4713,x:-43.6,y:-152},4).to({regX:-0.1,regY:-0.1,scaleX:1.0399,scaleY:1.0399,rotation:-0.116,x:-32.25,y:-149.6},4).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:3.2383,x:-21.75,y:-153.8},4).to({y:-128.7},6,cjs.Ease.quadInOut).to({y:-159.3},8,cjs.Ease.quadInOut).to({rotation:0,x:-17.3,y:-142.65},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({y:-166.15},5,cjs.Ease.quadInOut).to({y:-142.65},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({rotation:-6.9517,x:-38.2,y:-138.9},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({rotation:6.2865,x:4.3,y:-120.9},7,cjs.Ease.quadInOut).wait(6).to({rotation:6.2865},0).to({rotation:0,x:-17.3,y:-142.65},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:5.4585,x:9.3,y:-157.1},6,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({startPosition:0},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).to({rotation:0,x:-17.3,y:-142.65},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({rotation:6.2293,x:-2.2,y:-144.55},7,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:5.2794,x:-4.8,y:-168.25},6,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:6.2293,x:-2.2,y:-144.55},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({rotation:0,x:-17.3,y:-142.65},10,cjs.Ease.quadInOut).to({startPosition:0},7,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({y:-168.55},5,cjs.Ease.quadInOut).to({y:-142.65},6,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({y:-168.55},4,cjs.Ease.quadInOut).to({rotation:-1.4838,x:-21.25,y:-168.15},3,cjs.Ease.quadInOut).to({rotation:1.4838,x:-12.4,y:-168.75},3,cjs.Ease.quadInOut).to({rotation:-1.2258,x:-21.55,y:-168.15},3,cjs.Ease.quadInOut).to({rotation:1.1838,x:-13.25,y:-168.65},3,cjs.Ease.quadInOut).to({rotation:0,x:-17.3,y:-142.65},6,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({y:-183.35},6,cjs.Ease.quadInOut).to({rotation:-1.1838,x:-21.35,y:-183.1},4,cjs.Ease.quadInOut).to({rotation:0,x:-17.3,y:-183.35},6,cjs.Ease.quadInOut).to({y:-203.8},5,cjs.Ease.quadInOut).to({y:-142.65},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).to({y:-166.15},5,cjs.Ease.quadInOut).to({y:-142.65},5,cjs.Ease.quadInOut).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:-1.4497,x:-21.65,y:-142.05},6,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({rotation:0,x:-17.3,y:-142.65},8,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({startPosition:0},7,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({y:-101.95},3,cjs.Ease.quadInOut).to({y:-183.35},5,cjs.Ease.quadInOut).to({startPosition:0},3,cjs.Ease.quadInOut).to({startPosition:0},3,cjs.Ease.quadInOut).to({startPosition:0},3,cjs.Ease.quadInOut).to({y:-142.65},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(24).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({y:-183.35},7,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({y:-142.65},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({rotation:-0.9495,x:-20.3,y:-165.75},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({rotation:0.2343,x:-16.25,y:-137.65},5,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:1.2337,x:-13.25,y:-168.45},5,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-17.3,y:-142.65},5,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(40).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:-1.4838,x:-27.5,y:-79.4},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({rotation:2.7271,x:3.15,y:-163.9},7,cjs.Ease.quadInOut).wait(8).to({rotation:2.7271},0).to({startPosition:0},6,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({rotation:0,x:-17.3,y:-142.65},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(15).to({startPosition:0},0).to({rotation:-2.2151,x:-24.45,y:-142.05},8,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({rotation:0,x:-17.3,y:-142.65},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-2.1923,x:-32.25,y:-86.9},9,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({rotation:6.0499,x:29.35,y:-134.35},7,cjs.Ease.quadInOut).wait(19).to({rotation:6.0499},0).to({rotation:0,x:-17.3,y:-142.65},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regY:-0.1,scaleX:1.03,scaleY:1.03,rotation:3.4815,x:-6.8,y:-140.55},8,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regY:0,scaleX:1,scaleY:1,rotation:3.4817,x:-6.9,y:-143.25},8,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({y:-157.1},5,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({y:-143.25},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({startPosition:0},6,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({rotation:0,x:-17.3,y:-142.65},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-4.4773,x:-28.95,y:-140.9},8,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({rotation:0,x:-17.3,y:-142.65},8).wait(1).to({startPosition:0},0).to({rotation:0.4468,x:-15.75,y:-134.45},29,cjs.Ease.quadInOut).to({rotation:0,x:-17.3,y:-142.65},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({scaleX:0.94,scaleY:0.94,rotation:7.2142,x:5.65,y:-146.2},8,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,rotation:-13.5097,x:-53.3,y:-136.4},7,cjs.Ease.quadInOut).to({startPosition:0},3).to({rotation:8.6823,x:10,y:-142.95},7,cjs.Ease.quadInOut).to({startPosition:0},3).to({regX:0,regY:0,scaleX:1.06,scaleY:1.06,rotation:-3.4671,x:-41.75,y:-159},14,cjs.Ease.quadInOut).to({rotation:-3.4671},6,cjs.Ease.quadOut).to({startPosition:0},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:0,x:-17.3,y:-142.65},9,cjs.Ease.quadInOut).wait(1));

	// Body
	this.instance_3 = new lib.GrandpaBody("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.85,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:2.9861,x:-4.3,y:58.9},7,cjs.Ease.quadInOut).wait(10).to({startPosition:1},0).to({regX:-0.1,regY:0.1,rotation:-1.5013,x:-2.1,y:19.25},7,cjs.Ease.quadInOut).wait(3).to({startPosition:1},0).to({regX:0,regY:0,rotation:0,x:-3.85,y:58.5},7,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({rotation:-1.7042,x:-9.5,y:69.6},7,cjs.Ease.quadInOut).wait(16).to({startPosition:1},0).to({rotation:0,x:-3.85,y:58.5},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({rotation:-1.7042,x:-9.5,y:69.6},8,cjs.Ease.quadInOut).wait(29).to({startPosition:1},0).to({rotation:0,x:-3.85,y:58.5},9,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({rotation:-6.7017,x:-3.05,y:-2},7,cjs.Ease.quadInOut).wait(6).to({startPosition:1},0).to({y:14.5},7,cjs.Ease.quadInOut).wait(3).to({startPosition:1},0).to({y:-2},7,cjs.Ease.quadInOut).wait(4).to({startPosition:1},0).to({rotation:-0.7195,x:-3.85,y:-2.85},8,cjs.Ease.quadInOut).wait(3).to({startPosition:1},0).wait(4).to({startPosition:1},0).to({rotation:0.7642,x:1.25,y:6.05},7,cjs.Ease.quadInOut).to({rotation:0,x:-3.85,y:58.5},7,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({startPosition:1},8,cjs.Ease.quadInOut).wait(5).to({startPosition:1},0).to({regX:0.1,regY:0.1,rotation:-7.1493,x:0.95,y:49.65},7,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-3.85,y:58.5},7,cjs.Ease.quadInOut).wait(2).to({startPosition:1},0).to({startPosition:1},7,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({y:72.65},4).to({y:58.5},3).to({y:70.25},5).to({y:58.5},3).to({y:70.25},5).to({y:58.5},6,cjs.Ease.quadInOut).to({rotation:-3.6911,x:-1.7,y:58.3},7,cjs.Ease.quadInOut).wait(8).to({startPosition:1},0).to({rotation:0,x:-3.85,y:58.5},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({rotation:-3.212,x:-15.55,y:85.95},7,cjs.Ease.quadInOut).wait(9).to({startPosition:1},0).to({rotation:3.2383,x:-19.7,y:47.75},5,cjs.Ease.quadInOut).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,rotation:0.3625,x:-20.1,y:36.55},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-3.4713,x:-18,y:47.8},4).to({regX:-0.1,scaleX:1.0399,scaleY:1.0399,rotation:-0.116,x:-17.8,y:59.2},4).to({regX:0,scaleX:1,scaleY:1,rotation:3.2383,x:-19.7,y:47.75},4).to({y:72.75},6,cjs.Ease.quadInOut).to({y:42.15},8,cjs.Ease.quadInOut).to({rotation:0,x:-3.85,y:58.5},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({y:34.9},5,cjs.Ease.quadInOut).to({y:58.5},5,cjs.Ease.quadInOut).wait(5).to({startPosition:1},0).to({rotation:-6.9517,x:-0.45,y:59},7,cjs.Ease.quadInOut).wait(6).to({startPosition:1},0).to({rotation:6.2865,x:-4.3,y:80.35},7,cjs.Ease.quadInOut).wait(6).to({rotation:6.2865},0).to({rotation:0,x:-3.85,y:58.5},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({rotation:5.4585,x:3.65,y:44.35},6,cjs.Ease.quadInOut).wait(16).to({startPosition:1},0).to({startPosition:1},7,cjs.Ease.quadInOut).wait(6).to({startPosition:1},0).to({startPosition:1},8,cjs.Ease.quadInOut).to({rotation:0,x:-3.85,y:58.5},11,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(3).to({startPosition:1},0).to({rotation:6.2293,x:-10.65,y:56.7},7,cjs.Ease.quadInOut).to({regX:-0.1,regY:0.1,rotation:5.2794,x:-9.9,y:33.3},6,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:6.2293,x:-10.65,y:56.7},6,cjs.Ease.quadInOut).wait(7).to({startPosition:1},0).to({rotation:0,x:-3.85,y:58.5},10,cjs.Ease.quadInOut).to({startPosition:1},7,cjs.Ease.quadInOut).wait(7).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(18).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(20).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({startPosition:1},8,cjs.Ease.quadInOut).wait(6).to({startPosition:1},0).to({startPosition:1},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({y:32.6},5,cjs.Ease.quadInOut).to({y:58.5},6,cjs.Ease.quadInOut).wait(4).to({startPosition:1},0).to({y:32.6},4,cjs.Ease.quadInOut).to({rotation:-1.4838,x:-2.55,y:32.4},3,cjs.Ease.quadInOut).to({rotation:1.4838,x:-4.1,y:32.6},3,cjs.Ease.quadInOut).to({rotation:-1.2258,x:-3.75},3,cjs.Ease.quadInOut).to({rotation:1.1838,x:-3.85,y:32.7},3,cjs.Ease.quadInOut).to({rotation:0,y:58.5},6,cjs.Ease.quadInOut).wait(5).to({startPosition:1},0).to({y:17.8},6,cjs.Ease.quadInOut).to({rotation:-1.1838,x:-3.65,y:17.7},4,cjs.Ease.quadInOut).to({rotation:0,x:-3.85,y:17.8},6,cjs.Ease.quadInOut).to({y:-2.75},5,cjs.Ease.quadInOut).to({y:58.5},5,cjs.Ease.quadInOut).wait(8).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(17).to({startPosition:1},0).to({y:34.9},5,cjs.Ease.quadInOut).to({y:58.5},5,cjs.Ease.quadInOut).wait(9).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({rotation:-1.4497,x:-3.05,y:58.6},6,cjs.Ease.quadInOut).wait(20).to({startPosition:1},0).to({rotation:0,x:-3.85,y:58.5},8,cjs.Ease.quadInOut).wait(8).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(5).to({startPosition:1},0).to({startPosition:1},7,cjs.Ease.quadInOut).wait(16).to({startPosition:1},0).to({y:99.15},3,cjs.Ease.quadInOut).to({y:17.8},5,cjs.Ease.quadInOut).to({startPosition:1},3,cjs.Ease.quadInOut).to({startPosition:1},3,cjs.Ease.quadInOut).to({startPosition:1},3,cjs.Ease.quadInOut).to({y:58.5},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(20).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(24).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({y:17.8},7,cjs.Ease.quadInOut).wait(7).to({startPosition:1},0).to({y:58.5},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(6).to({startPosition:1},0).to({rotation:-0.9495,x:-3.45,y:35},6,cjs.Ease.quadInOut).wait(7).to({startPosition:1},0).to({rotation:0.2343,x:-3.55,y:63.4},5,cjs.Ease.quadInOut).to({regY:0.1,rotation:1.2337,x:-4,y:32.9},5,cjs.Ease.quadInOut).to({regY:0,rotation:0,x:-3.85,y:58.5},5,cjs.Ease.quadInOut).wait(12).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(40).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(23).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({rotation:-1.4838,x:-8.75,y:121.2},6,cjs.Ease.quadInOut).wait(7).to({startPosition:1},0).to({rotation:2.7271,x:7,y:37.5},7,cjs.Ease.quadInOut).wait(8).to({rotation:2.7271},0).to({startPosition:1},6,cjs.Ease.quadInOut).wait(6).to({startPosition:1},0).to({rotation:0,x:-3.85,y:58.5},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(15).to({startPosition:1},0).to({rotation:-2.2151,x:-3.15,y:58.4},8,cjs.Ease.quadInOut).wait(11).to({startPosition:1},0).to({rotation:0,x:-3.85,y:58.5},7,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({rotation:-2.1923,x:-11.05,y:113.5},9,cjs.Ease.quadInOut).wait(20).to({startPosition:1},0).to({regY:0.1,rotation:6.0499,x:21.55,y:67},7,cjs.Ease.quadInOut).wait(19).to({rotation:6.0499},0).to({regY:0,rotation:0,x:-3.85,y:58.5},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({scaleX:1.03,scaleY:1.03,rotation:3.4815,x:-5.45,y:67},8,cjs.Ease.quadInOut).wait(24).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:3.4817,x:-5.65,y:58.2},8,cjs.Ease.quadInOut).wait(11).to({startPosition:1},0).to({y:48.3},5,cjs.Ease.quadInOut).wait(2).to({startPosition:1},0).to({y:58.2},5,cjs.Ease.quadInOut).wait(5).to({startPosition:1},0).to({startPosition:1},6,cjs.Ease.quadInOut).wait(5).to({startPosition:1},0).to({rotation:0,x:-3.85,y:58.5},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({rotation:-4.4773,x:0.15},8,cjs.Ease.quadInOut).wait(31).to({startPosition:1},0).to({rotation:0,x:-3.85},8).wait(1).to({startPosition:1},0).to({rotation:0.4468,y:66.7},29,cjs.Ease.quadInOut).to({rotation:0,y:58.5},30,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({scaleX:0.94,scaleY:0.94,rotation:7.2142,x:-5.45,y:42.8},8,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-13.5097,x:3.25,y:44.45},7,cjs.Ease.quadInOut).to({startPosition:1},3).to({regX:0,rotation:8.6823,x:-6.05,y:45.7},7,cjs.Ease.quadInOut).to({startPosition:1},3).to({regX:-0.1,scaleX:1.06,scaleY:1.06,rotation:-3.4671,x:-14.6,y:52.95},14,cjs.Ease.quadInOut).to({rotation:-3.4671},6,cjs.Ease.quadOut).to({startPosition:1},7,cjs.Ease.quadInOut).wait(6).to({startPosition:1},0).wait(6).to({startPosition:1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-3.85,y:58.5},9,cjs.Ease.quadInOut).wait(1));

	// Ear_R
	this.instance_4 = new lib.GrandpaEar("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11.8,-481.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.1,regY:-0.1,rotation:5.9383,x:39.05,y:-478.6},7,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,rotation:10.6491},3,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,rotation:8.1778},3,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({regX:0,rotation:2.146,x:-24.1,y:-521.3},7,cjs.Ease.quadInOut).to({rotation:-1.3063,x:-24.15},3,cjs.Ease.quadInOut).to({regY:0,rotation:0,x:-11.8,y:-481.45},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-6.1456,x:-54.85,y:-468.9},7,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-6.1456,x:-54.85,y:-468.9},8,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-9.9254,x:-109.45,y:-532.25},7,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-17.3456,x:-109.6,y:-532.3},3,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:-14.1493,x:-109.45,y:-532.25},3,cjs.Ease.quadInOut).to({y:-515.75},7,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({y:-532.25},7,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:0.3244,x:-7.4,y:-542.45},8,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,rotation:3.8096},3,cjs.Ease.quadInOut).to({rotation:1.8084},4,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:3.2919,x:11.7,y:-533.5},7,cjs.Ease.quadInOut).to({rotation:0,x:-11.8,y:-481.45},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:7.0081,x:33.7,y:-478.05},8,cjs.Ease.quadInOut).to({rotation:11.645},2,cjs.Ease.quadInOut).to({rotation:9.6946},3,cjs.Ease.quadInOut).to({regY:-0.2,rotation:-7.9483,x:-76.8,y:-484.05},7,cjs.Ease.quadInOut).to({regY:0,rotation:9.6946,x:33.7,y:-478.05},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({rotation:0,x:-11.8,y:-481.45},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-1.9763,y:-467.3},4).to({rotation:2.6858,x:-11.7,y:-481.45},3).to({rotation:-1.7331,x:-11.8,y:-469.65},5).to({rotation:0,y:-481.45},3).to({rotation:-1.7331,y:-469.65},5).to({rotation:0,y:-481.45},6,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-7.8899,x:-63.8,y:-478.45},7,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-5.7044,x:-65.45,y:-452.15},7,cjs.Ease.quadInOut).wait(9).to({startPosition:0},0).to({rotation:0.7458,x:-8.85,y:-492.55},5,cjs.Ease.quadInOut).to({regX:-0.2,scaleX:0.9311,scaleY:0.9311,rotation:-1.9111,x:-39.6,y:-479.2},3).to({scaleX:1,scaleY:1,rotation:-5.4595,x:-79.25,y:-489.1},4).to({regY:-0.3,scaleX:1.0711,scaleY:1.0711,rotation:-2.3579,x:-43.8,y:-502.55},4).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:0.7458,x:-8.85,y:-492.55},4).to({regX:-0.2,rotation:-0.438,x:-8.95,y:-467.45},6,cjs.Ease.quadInOut).to({rotation:-0.438,y:-498.05},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:3.6911,x:-11.7,y:-505},5,cjs.Ease.quadInOut).to({rotation:0,x:-11.8,y:-481.45},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-7.2152,x:-92.7,y:-473},7,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:-11.4512,x:-92.6,y:-472.9},6,cjs.Ease.quadOut).to({regX:-0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:1.8049,x:53.7,y:-456.25},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,rotation:7.2435},6,cjs.Ease.quadOut).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:8.6534,x:62.3,y:-492.25},6,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({regY:-0.2,rotation:-1.3072,x:14.55,y:-495.2},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({regY:-0.1,rotation:8.6534,x:62.3,y:-492.25},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({rotation:10.4512,x:58.65,y:-478.05},7,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,rotation:8.275,x:45.15,y:-503.5},6,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:10.4512,x:58.65,y:-478.05},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({regX:-0.1,rotation:-5.1942,x:-51.25,y:-479.75},10,cjs.Ease.quadInOut).to({regX:0,rotation:-3.9917,x:-11.8,y:-481.45},7,cjs.Ease.quadInOut).to({rotation:2.4513,x:-11.7},3,cjs.Ease.quadInOut).to({rotation:0,x:-11.8},4,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:-4.466,x:-31.3,y:-480.05},8,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({rotation:0,x:-11.8,y:-481.45},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:1.4497,x:-11.7,y:-507.4},5,cjs.Ease.quadInOut).to({rotation:0,x:-11.8,y:-481.45},6,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({rotation:1.4497,x:-11.7,y:-507.4},4,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:0.25,x:-31.6,y:-507},3,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.2,rotation:2.966,x:9.2,y:-507.1},3,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:1.0072,x:-28,y:-507},3,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.2,rotation:1.9072,x:5.6,y:-507.2},3,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},6,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({y:-522.15},6,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-0.883,x:-28.3,y:-521.85},4,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:-11.8,y:-522.15},6,cjs.Ease.quadInOut).to({rotation:3.9917,x:7.8,y:-541.5},5,cjs.Ease.quadInOut).to({rotation:0,x:-11.8,y:-481.45},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).to({rotation:3.7182,x:-11.7,y:-505},5,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-1.7033,x:-11.9,y:-481.55},5,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:1.4497,x:-11.7,y:-481.45},4,cjs.Ease.quadInOut).to({rotation:0,x:-11.8},4,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-0.9504,x:-36.95,y:-480.6},6,cjs.Ease.quadInOut).to({rotation:-3.9207},5,cjs.Ease.elasticOut).wait(15).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},8,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({rotation:3.0308,x:15.05,y:-479.55},7,cjs.Ease.quadInOut).to({rotation:5.7167},4,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).to({y:-438.8},3,cjs.Ease.quadInOut).to({rotation:-1.7243,x:-19.2,y:-520.65},5,cjs.Ease.quadInOut).to({rotation:-0.9679,x:9.7,y:-519.3},3,cjs.Ease.quadInOut).to({rotation:-2.2291,x:-37.9,y:-519.95},3,cjs.Ease.quadInOut).to({rotation:-0.9723,x:1.5},3,cjs.Ease.quadInOut).wait(1).to({regX:109.7,regY:-91.9,rotation:-0.6877,x:109.65,y:-611.9},0).wait(1).to({rotation:0.1133,x:109.85,y:-606.95},0).wait(1).to({regX:0.1,regY:-0.1,rotation:1.5153,x:-2.05,y:-509.3},0).wait(1).to({regX:109.7,regY:-91.9,rotation:1.0442,x:106.2,y:-590.4},0).wait(1).to({rotation:0.5908,x:102.6,y:-582.95},0).wait(1).to({rotation:0.2618,x:99.95,y:-577.55},0).wait(1).to({rotation:0.0731,x:98.45,y:-574.4},0).wait(1).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(24).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:2.2378,x:-11.7,y:-522.15},7,cjs.Ease.quadInOut).to({rotation:-1.4838,x:-11.8},3,cjs.Ease.quadInOut).to({rotation:0},4,cjs.Ease.quadInOut).to({y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({rotation:-0.9495,x:-20.35,y:-504.7},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-1.7418,x:-9.4,y:-476.6},5,cjs.Ease.quadInOut).to({rotation:3.2094,x:-0.35,y:-507.1},5,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:-2.2151,x:-11.8,y:-481.45},5,cjs.Ease.quadInOut).to({rotation:0},4,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(40).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:-4.4528,x:-30.65,y:-418.4},6,cjs.Ease.quadInOut).to({rotation:-1.4838,y:-418.3},3,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({rotation:9.2233,x:56.85,y:-498.8},7,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({regX:109.7,regY:-91.9,rotation:9.0479,x:177.5,y:-572.45},0).wait(1).to({rotation:8.5205,x:170.45,y:-574.2},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:7.6673,x:38.1,y:-500.55},0).wait(1).to({regX:109.7,regY:-91.9,rotation:4.9133,x:144.7,y:-583.35},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.2814,x:136.15,y:-587.1},0).wait(1).to({regX:0,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:2.7026,x:19.3,y:-501.95},0).to({regX:0.1,scaleX:1,scaleY:1,rotation:-2.441,x:19.4},3,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:-0.2492,x:19.3,y:-501.85},3,cjs.Ease.quadInOut).to({rotation:0,x:-11.8,y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(15).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-6.2056,x:-51.45,y:-479.95},8,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regY:-0.1,rotation:-4.6633,x:-51.25,y:-425.35},9,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({regX:0.1,rotation:10.7717,x:93.75,y:-467.3},7,cjs.Ease.quadInOut).wait(19).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regY:-0.1,scaleX:1.0402,scaleY:1.0402,rotation:10.7175,x:56.55,y:-483.95},8,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({regY:0,scaleX:1,scaleY:1,rotation:10.718,x:54.75,y:-476.25},8,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({x:49.05,y:-472.9},5,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({x:54.75,y:-476.25},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regY:-0.1,rotation:-0.0017,x:4.75,y:-481.95},6,cjs.Ease.quadInOut).wait(5).to({rotation:-0.0017},0).to({regY:0,rotation:0,x:-11.8,y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-8.1679,x:-67.45,y:-477.5},8,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:-11.8,y:-481.45},8).wait(1).to({startPosition:0},0).to({regY:-0.1,rotation:1.3955,x:-2.75,y:-469.1},29,cjs.Ease.quadInOut).to({regY:0,rotation:0,x:-11.8,y:-481.45},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({scaleX:0.94,scaleY:0.94,rotation:11.2063,x:68.2,y:-458.6},8,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,scaleX:0.9399,scaleY:0.9399,rotation:-0.08,x:-81.7,y:-453.85},7,cjs.Ease.quadInOut).to({scaleY:0.9404,rotation:0,skewX:-19.3149,skewY:-17.5399,x:-109.4,y:-449.9},3).to({skewX:-10.078,skewY:-8.3037,x:37.15,y:-458.9},7,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.3,scaleY:0.9399,skewX:16.9906,skewY:16.4008,x:82.3,y:-452.5},3).to({regX:0,regY:0,scaleX:1.06,scaleY:1.06,rotation:8.7306,skewX:0,skewY:0,x:-23.9,y:-518.55},14,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:-7.6662,x:-57.7,y:-517.95},6,cjs.Ease.quadOut).to({regX:0,regY:0,rotation:-3.4671,x:-57.6,y:-517.85},7,cjs.Ease.quadInOut).wait(6).to({rotation:-3.4671},0).wait(6).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:0,x:-11.8,y:-481.45},9,cjs.Ease.quadInOut).wait(1));

	// Ear_L
	this.instance_5 = new lib.GrandpaEar("single",1);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-69.8,-481.45,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-0.1,skewX:6.9519,skewY:186.9519,x:-18.45,y:-486.8},7,cjs.Ease.quadInOut).to({regX:0.1,skewX:9.4034,skewY:189.4034,x:-18.55},3,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:8.1778,skewY:188.1778,x:-18.45,y:-486.7},3,cjs.Ease.quadInOut).wait(4).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:1.937,skewY:181.937,x:-82.2,y:-519.95},7,cjs.Ease.quadInOut).to({skewX:-1.3063,skewY:178.6937},3,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},7,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({skewX:-6.1456,skewY:173.8544,x:-112.4,y:-462.6},7,cjs.Ease.quadInOut).wait(16).to({startPosition:1},0).to({skewX:0,skewY:180,x:-69.8,y:-481.45},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({skewX:-6.1456,skewY:173.8544,x:-112.4,y:-462.6},8,cjs.Ease.quadInOut).wait(29).to({startPosition:1},0).to({skewX:0,skewY:180,x:-69.8,y:-481.45},9,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({scaleY:0.9323,skewX:-14.1491,skewY:165.8507,x:-165.65,y:-518.05},7,cjs.Ease.quadInOut).to({scaleY:1.029,skewX:-14.1492},3,cjs.Ease.quadInOut).to({scaleY:1,skewX:-14.1493},3,cjs.Ease.quadInOut).to({y:-501.65},7,cjs.Ease.quadInOut).wait(3).to({startPosition:1},0).to({y:-518.05},7,cjs.Ease.quadInOut).wait(4).to({startPosition:1},0).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:0.0752,skewY:180.0752,x:-65.35,y:-544.25},8,cjs.Ease.quadInOut).to({skewX:4.2795,skewY:184.2795},3,cjs.Ease.quadInOut).to({skewX:1.8084,skewY:181.8084},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:3.2919,skewY:183.2919,x:-46.3,y:-536.85},7,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},7,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({skewX:7.7169,skewY:187.7169,x:-23.5,y:-487.85},8,cjs.Ease.quadInOut).to({skewX:11.1776,skewY:191.1776,y:-487.75},2,cjs.Ease.quadInOut).to({skewX:9.6946,skewY:189.6946},3,cjs.Ease.quadInOut).to({regX:0.2,regY:-0.1,skewX:-7.9483,skewY:172.0517,x:-134.3,y:-476},7,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:9.6946,skewY:189.6946,x:-23.5,y:-487.75},7,cjs.Ease.quadInOut).wait(2).to({startPosition:1},0).to({skewX:0,skewY:180,x:-69.8,y:-481.45},7,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({skewX:0.9495,skewY:180.9495,y:-467.3},4).to({skewX:-1.7331,skewY:178.2669,y:-481.45},3).to({skewX:1.0002,skewY:181.0002,y:-469.65},5).to({skewX:0,skewY:180,y:-481.45},3).to({skewX:1.0002,skewY:181.0002,y:-469.65},5).to({skewX:0,skewY:180,y:-481.45},6,cjs.Ease.quadInOut).to({regX:0.1,skewX:-7.8899,skewY:172.1101,x:-121.15,y:-470.4},7,cjs.Ease.quadInOut).wait(8).to({startPosition:1},0).to({regX:0,skewX:0,skewY:180,x:-69.8,y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({skewX:-5.7044,skewY:174.2956,x:-123.15,y:-446.3},7,cjs.Ease.quadInOut).wait(9).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:0.7458,skewY:180.7458,x:-66.85,y:-493.3},5,cjs.Ease.quadInOut).to({scaleX:0.9311,scaleY:0.9311,skewX:-1.0742,skewY:178.9258,x:-93.35,y:-476.6},3).to({regX:0.2,regY:-0.2,scaleX:1,scaleY:1,skewX:-3.509,skewY:176.491,x:-136.8,y:-481.4},4).to({scaleX:1.0711,scaleY:1.0711,skewX:-1.382,skewY:178.618,x:-105.55,y:-498.65},4).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,skewX:0.7458,skewY:180.7458,x:-66.85,y:-493.3},4).to({skewX:2.9836,skewY:182.9836,x:-66.95,y:-468.25},6,cjs.Ease.quadInOut).to({y:-498.9},8,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({skewX:-3.4957,skewY:176.5043,y:-505},5,cjs.Ease.quadInOut).to({skewX:0,skewY:180,y:-481.45},5,cjs.Ease.quadInOut).wait(5).to({startPosition:1},0).to({regX:0.1,skewX:-6.4757,skewY:173.5243,x:-149.55,y:-461.45},7,cjs.Ease.quadInOut).to({skewX:-11.4512,skewY:168.5488},6,cjs.Ease.quadOut).to({regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:3.7474,skewY:183.7474,x:-3.8,y:-463.55},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:7.2435,skewY:187.2435},6,cjs.Ease.quadOut).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:8.6534,skewY:188.6534,x:4.9,y:-500.9},6,cjs.Ease.quadInOut).wait(16).to({startPosition:1},0).to({skewX:-1.3072,skewY:178.6928,x:-43.5,y:-493.85},7,cjs.Ease.quadInOut).wait(6).to({startPosition:1},0).to({skewX:8.6534,skewY:188.6534,x:4.9,y:-500.9},8,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},11,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(3).to({startPosition:1},0).to({skewX:10.4512,skewY:190.4512,x:1.7,y:-488.6},7,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,skewX:8.275,skewY:188.275,x:-12.25,y:-511.85},6,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:10.4512,skewY:190.4512,x:1.7,y:-488.6},6,cjs.Ease.quadInOut).wait(7).to({startPosition:1},0).to({regX:0.1,skewX:-5.2126,skewY:174.7874,x:-108.7,y:-471.75},10,cjs.Ease.quadInOut).to({regX:0,skewX:-3.7323,skewY:176.2677,x:-69.8,y:-481.45},7,cjs.Ease.quadInOut).to({skewX:1.4497,skewY:181.4497},4,cjs.Ease.quadInOut).to({skewX:0,skewY:180},3,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(18).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(20).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({skewX:-4.466,skewY:175.534,x:-89.05,y:-475.55},8,cjs.Ease.quadInOut).wait(6).to({startPosition:1},0).to({skewX:0,skewY:180,x:-69.8,y:-481.45},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({skewX:-2.7042,skewY:177.2958,y:-507.4},5,cjs.Ease.quadInOut).to({skewX:0,skewY:180,y:-481.45},6,cjs.Ease.quadInOut).wait(4).to({startPosition:1},0).to({skewX:-2.7042,skewY:177.2958,y:-507.4},4,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,skewX:-3.6868,skewY:176.3132,x:-89.65,y:-504.05},3,cjs.Ease.quadInOut).to({regY:-0.2,scaleY:1.0011,skewX:-2.3771,skewY:180.264,x:-50.4,y:-510.05},3,cjs.Ease.quadInOut).to({scaleY:1,skewX:-3.6518,skewY:176.3482,x:-86,y:-504.9},3,cjs.Ease.quadInOut).to({regX:0,regY:-0.1,skewX:-2.5082,skewY:177.4918,x:-52.45,y:-509.6},3,cjs.Ease.quadInOut).to({regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},6,cjs.Ease.quadInOut).wait(5).to({startPosition:1},0).to({y:-522.15},6,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,skewX:-0.9172,skewY:179.0828,x:-86.3,y:-519.5},4,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-522.15},6,cjs.Ease.quadInOut).to({skewX:3.9917,skewY:183.9917,x:-50.1,y:-545.5},5,cjs.Ease.quadInOut).to({skewX:0,skewY:180,x:-69.8,y:-481.45},5,cjs.Ease.quadInOut).wait(8).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(17).to({startPosition:1},0).to({skewX:-3.2435,skewY:176.7565,y:-505},5,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,skewX:0.2238,skewY:180.2238,x:-69.9,y:-481.55},5,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-2.952,skewY:177.048,x:-69.8,y:-481.45},4,cjs.Ease.quadInOut).to({skewX:0,skewY:180},4,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:-1.469,skewY:178.531,x:-94.75,y:-476.6},6,cjs.Ease.quadInOut).to({skewX:-3.9207,skewY:176.0793},5,cjs.Ease.elasticOut).wait(15).to({startPosition:1},0).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},8,cjs.Ease.quadInOut).wait(8).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(5).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:3.0124,skewY:183.0124,x:-42.65,y:-485.4},7,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:5.7167,skewY:185.7167,y:-485.3},4,cjs.Ease.quadInOut).wait(12).to({startPosition:1},0).to({y:-444.6},3,cjs.Ease.quadInOut).to({regX:0.1,skewX:-1.7243,skewY:178.2757,x:-77.15,y:-518.9},5,cjs.Ease.quadInOut).to({regX:0.2,regY:-0.1,skewX:-0.2168,skewY:179.7832,x:-48.2,y:-523.95},3,cjs.Ease.quadInOut).to({regX:0.1,skewX:-1.9431,skewY:178.0569,x:-95.65,y:-514.15},3,cjs.Ease.quadInOut).to({skewX:-0.7196,skewY:179.2804,x:-56.4,y:-522.9},3,cjs.Ease.quadInOut).wait(1).to({regX:109.7,regY:-91.9,skewX:-0.4115,skewY:179.5885,x:-167.05,y:-612.55},0).wait(1).to({skewX:0.4558,skewY:180.4558,x:-166.9,y:-610.45},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:1.9738,skewY:181.9738,x:-60.2,y:-511.2},0).wait(1).to({regX:109.7,regY:-91.9,scaleX:1,scaleY:1,skewX:1.36,skewY:181.36,x:-170.5,y:-596.25},0).wait(1).to({skewX:0.7695,skewY:180.7695,x:-174.35,y:-586.25},0).wait(1).to({skewX:0.341,skewY:180.341,x:-177.15,y:-579},0).wait(1).to({skewX:0.0953,skewY:180.0953,x:-178.7,y:-574.85},0).wait(1).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},0).wait(1).to({startPosition:1},0).wait(20).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(24).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({skewX:-2.4714,skewY:177.5286,y:-522.15},7,cjs.Ease.quadInOut).to({skewX:0.7746,skewY:180.7746},3,cjs.Ease.quadInOut).to({skewX:0,skewY:180},4,cjs.Ease.quadInOut).to({y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(6).to({startPosition:1},0).to({skewX:-0.9495,skewY:179.0505,x:-78.3,y:-503.75},6,cjs.Ease.quadInOut).wait(7).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:2.4487,skewY:182.4487,x:-67.45,y:-476.8},5,cjs.Ease.quadInOut).to({skewX:0.0079,skewY:180.0079,x:-58.4,y:-508.45},5,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:1.4497,skewY:181.4497,x:-69.8,y:-481.45},5,cjs.Ease.quadInOut).to({skewX:0,skewY:180},4,cjs.Ease.quadInOut).wait(8).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(40).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(23).to({startPosition:1},0).wait(1).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:0.7536,skewY:180.7536,x:-88.75,y:-416.9},6,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-1.4838,skewY:178.5162,x:-88.65,y:-416.8},3,cjs.Ease.quadInOut).wait(4).to({startPosition:1},0).to({skewX:9.2233,skewY:189.2233,x:-0.45,y:-508.15},7,cjs.Ease.quadInOut).wait(8).to({startPosition:1},0).wait(1).to({regX:109.7,regY:-91.9,skewX:9.2325,skewY:189.2325,x:-96.15,y:-616.05},0).wait(1).to({skewX:9.2604,skewY:189.2604,x:-102.55,y:-615},0).wait(1).to({regX:0.1,regY:0,scaleX:0.9999,scaleY:0.9999,skewX:9.3054,skewY:189.3054,x:-19.7,y:-504.9},0).wait(1).to({regX:109.7,regY:-91.9,scaleX:1,scaleY:1,skewX:5.7869,skewY:185.7869,x:-130.15,y:-605.55},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,skewX:3.702,skewY:183.702,x:-140.05,y:-600.8},0).wait(1).to({regX:0.1,regY:0,scaleX:1,scaleY:1,skewX:2.9627,skewY:182.9627,x:-38.85,y:-501.65},0).to({skewX:-1.4743,skewY:178.5257},3,cjs.Ease.quadInOut).to({skewX:-0.2492,skewY:179.7508},3,cjs.Ease.quadInOut).to({regX:0,skewX:0,skewY:180,x:-69.8,y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(15).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:-6.2056,skewY:173.7944,x:-109.05,y:-473.65},8,cjs.Ease.quadInOut).wait(11).to({startPosition:1},0).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},7,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({regY:-0.1,skewX:-4.6633,skewY:175.3367,x:-109.05,y:-420.6},9,cjs.Ease.quadInOut).wait(20).to({startPosition:1},0).to({regX:-0.1,skewX:10.7717,skewY:190.7717,x:36.85,y:-478.15},7,cjs.Ease.quadInOut).wait(19).to({startPosition:1},0).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({regX:0.1,regY:-0.1,scaleX:1.0402,scaleY:1.0402,skewX:10.7175,skewY:190.7175,x:-2.65,y:-495.2},8,cjs.Ease.quadInOut).wait(24).to({startPosition:1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:10.718,skewY:190.718,x:-2.15,y:-487.1},8,cjs.Ease.quadInOut).wait(11).to({startPosition:1},0).to({x:-7.9,y:-483.75},5,cjs.Ease.quadInOut).wait(2).to({startPosition:1},0).to({x:-2.15,y:-487.1},5,cjs.Ease.quadInOut).wait(5).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:-0.0017,skewY:179.9983,x:-53.25,y:-481.95},6,cjs.Ease.quadInOut).wait(5).to({skewX:-0.0017},0).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},6,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:-8.1679,skewY:171.8321,x:-124.9,y:-469.3},8,cjs.Ease.quadInOut).wait(31).to({startPosition:1},0).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},8).wait(1).to({startPosition:1},0).to({regX:0.1,regY:-0.1,skewX:1.3955,skewY:181.3955,x:-60.85,y:-470.5},29,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:-69.8,y:-481.45},30,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({scaleX:0.94,scaleY:0.94,skewX:11.2063,skewY:191.2063,x:14.65,y:-469.2},8,cjs.Ease.quadInOut).to({regX:0.2,regY:-0.1,skewX:-0.5655,skewY:179.4345,x:-136.15,y:-450.05},7,cjs.Ease.quadInOut).to({regY:-0.2,scaleX:0.9399,scaleY:0.9399,skewX:-22.4992,skewY:157.5008,x:-163,y:-440.3},3).to({regX:0.1,regY:-0.4,skewX:-14.5012,skewY:165.4988,x:-17.3,y:-461.8},7,cjs.Ease.quadInOut).to({regY:-0.5,skewX:14.7007,skewY:194.7007,x:28.95,y:-464.6},3).to({regY:-0.1,scaleX:1.06,scaleY:1.06,skewX:10.4286,skewY:190.4286,x:-85.45,y:-522.15},14,cjs.Ease.quadInOut).to({skewX:-10.1845,skewY:169.8155,x:-119.05,y:-514.15},6,cjs.Ease.quadOut).to({skewX:-3.4671,skewY:176.5329},7,cjs.Ease.quadInOut).wait(6).to({skewX:-3.4671},0).wait(6).to({startPosition:1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:-69.8,y:-481.45},9,cjs.Ease.quadInOut).wait(1));

	// Arm_R
	this.instance_6 = new lib.GrandpaArms("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(64.5,-131.2,1,1,18.2284);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:38.9526,x:73.7,y:-126.95},7,cjs.Ease.quadInOut).wait(10).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,rotation:43.9168,x:61.2,y:-172.3},7,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:18.2284,x:64.5,y:-131.2},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:33.7444,x:53.1,y:-121.95},7,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({rotation:18.2284,x:64.5,y:-131.2},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:33.7444,x:53.1,y:-121.95},8,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({rotation:18.2284,x:64.5,y:-131.2},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,rotation:16.9155,x:63.6,y:-134,startPosition:2},1).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:12.8444,x:61,y:-142.55,startPosition:3},1).to({scaleX:0.9999,scaleY:0.9999,rotation:5.8498,x:56.3,y:-157.2,startPosition:5},1).to({rotation:-2.3553,x:50.7,y:-174.15,startPosition:7},1).to({regX:0.2,rotation:-8.8505,x:46.3,y:-187.75,startPosition:9},1).to({rotation:-12.5788,x:43.8,y:-195.35,startPosition:10},1).wait(1).to({regX:136.3,regY:-11.5,rotation:-8.9257,x:175.85,y:-229.15},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.5218,x:176.75,y:-224.5},0).wait(1).to({regX:0.1,regY:0,rotation:-5.2427,x:42.65,y:-198.3},0).wait(4).to({startPosition:10},0).to({y:-181.85},7,cjs.Ease.quadInOut).wait(3).to({startPosition:10},0).to({rotation:-13.965,y:-198.3},7,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,rotation:-20.1705,y:-198.35},4,cjs.Ease.quadInOut).wait(1).to({regX:136.3,regY:-11.5,rotation:-18.9687,x:168.3,y:-253.25},0).wait(1).to({regX:0.1,regY:0,rotation:-15.5862,x:45.05,y:-197.75,startPosition:9},0).wait(1).to({regX:136.3,regY:-11.5,rotation:-9.4414,x:180.7,y:-230.6},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-1.372,x:52.55,y:-196,startPosition:7},0).wait(1).to({regX:136.3,regY:-11.5,rotation:6.3933,x:193.25,y:-191.05},0).wait(1).to({rotation:12.0274,x:195.2,y:-176.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.2583,x:195.75,y:-168.9},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:16.5108,x:61.95,y:-193.45,startPosition:6},0).wait(7).to({startPosition:6},0).to({regX:0.2,regY:-0.2,rotation:25.0204,x:72,y:-182.9},7,cjs.Ease.quadInOut).wait(1).to({regX:136.3,regY:-11.5,rotation:24.8104,x:199.95,y:-134.45},0).wait(1).to({regX:0.1,regY:-0.2,rotation:24.3826,x:71.15,y:-178.15,startPosition:4},0).wait(1).to({regX:136.3,regY:-11.5,rotation:23.7143,x:199.55,y:-128.7},0).wait(1).to({regX:0.1,regY:-0.3,rotation:22.7841,x:69.4,y:-166.2,startPosition:2},0).to({regX:0.2,rotation:21.5721,x:68.15,y:-156.95,startPosition:0},1).wait(1).to({regX:136.3,regY:-11.5,rotation:20.0572,x:198.15,y:-109.05},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:18.2284,x:64.5,y:-131.2},0).wait(1).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:11.0773,x:45.15,y:-147.1},7,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:18.2284,x:64.5,y:-131.2},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({startPosition:0},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({y:-117.05},4).to({y:-131.2},3).to({rotation:14.7326,y:-119.35},5).to({rotation:18.2284,y:-131.2},3).to({rotation:14.7326,y:-119.35},5).to({rotation:18.2284,y:-131.2},6,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:36.979,x:54.15,y:-135.5},7,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({regX:0,regY:0,rotation:18.2284,x:64.5,y:-131.2},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:15.0168,x:42.05,y:-107.15},7,cjs.Ease.quadInOut).wait(9).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,rotation:14.5581,x:43.5,y:-109.65,startPosition:2},1).to({regX:0.1,regY:-0.1,rotation:13.0963,x:48,y:-117.55,startPosition:5},1).to({rotation:11.0814,x:54,y:-128.3,startPosition:8},1).wait(1).to({regX:136.3,regY:-11.5,scaleX:1,scaleY:1,rotation:9.7363,x:194.1,y:-123.6},0).wait(1).to({regX:0,regY:0,rotation:9.2801,x:59.2,y:-137.75},0).to({regX:0.1,regY:-0.1,scaleX:0.9599,scaleY:0.9599,rotation:3.6409,x:46.6,y:-144.95},3).to({scaleX:0.9699,scaleY:0.9699,rotation:-3.7931,x:44.75,y:-145.15,startPosition:9},1).to({regX:0.2,scaleX:0.9799,scaleY:0.9799,rotation:-11.228,x:42.9,y:-145.4,startPosition:10},1).to({regX:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-26.1005,x:38.75,y:-145.7},2).to({scaleX:1.0399,scaleY:1.0399,rotation:7.5631,x:52.95,y:-137.85,startPosition:8},4).to({scaleX:0.9999,scaleY:0.9999,rotation:12.0207,x:59.3},4).to({scaleX:1,scaleY:1,rotation:6.0536,y:-112.8},6,cjs.Ease.quadInOut).wait(1).to({regX:136.3,regY:-11.5,rotation:6.0537,x:195.95,y:-110.75},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,y:-113.55},0).wait(1).to({regX:0.1,regY:-0.1,rotation:6.0539,x:59.4,y:-121.4,startPosition:7},0).wait(1).to({regX:136.3,regY:-11.5,x:196,y:-125.25},0).wait(1).to({regX:0.1,regY:-0.1,x:59.4,y:-134.85,startPosition:5},0).wait(1).to({regX:136.3,regY:-11.5,x:196,y:-136.6},0).wait(1).to({regX:0.1,regY:-0.1,x:59.4,y:-142.35,startPosition:4},0).to({scaleX:1,scaleY:1,rotation:6.0536,x:59.3,y:-143.35,startPosition:3},1).to({regX:0,regY:0,rotation:18.2284,x:64.5,y:-131.2,startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:22.4749,y:-154.7},5,cjs.Ease.quadInOut).to({rotation:18.2284,y:-131.2},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({rotation:23.5193,x:44.35,y:-137.45},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:36.7585,x:84.45,y:-100.65},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({regX:0,regY:0,rotation:18.2284,x:64.5,y:-131.2},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regY:-0.1,rotation:32.9248,x:89.65,y:-137.95},6,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({startPosition:0},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).to({regY:0,rotation:18.2284,x:64.5,y:-131.2},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:46.6521,x:77.85,y:-124.35},7,cjs.Ease.quadInOut).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:48.1546,x:75.65,y:-149.4},6,cjs.Ease.quadInOut).to({regY:-0.1,scaleX:1,scaleY:1,rotation:46.6521,x:77.85,y:-124.35},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({regX:0,regY:0,rotation:18.2284,x:64.5,y:-131.2},10,cjs.Ease.quadInOut).to({startPosition:0},7,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:21.4402,y:-157.1},5,cjs.Ease.quadInOut).to({rotation:18.2284,y:-131.2},6,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({rotation:21.4402,y:-157.1},4,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,rotation:19.9563,x:60.95,y:-158.9},3,cjs.Ease.quadInOut).to({rotation:22.9236,x:69.15,y:-155.2},3,cjs.Ease.quadInOut).to({rotation:20.2141,x:60.6,y:-158.5},3,cjs.Ease.quadInOut).to({rotation:22.6239,x:68.4,y:-155.5},3,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:18.2284,x:64.5,y:-131.2},6,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({rotation:36.9367,y:-171.9},6,cjs.Ease.quadInOut).to({regY:-0.1,rotation:35.7528,x:60.7,y:-173.35},4,cjs.Ease.quadInOut).to({regY:0,rotation:36.9367,x:64.5,y:-171.9},6,cjs.Ease.quadInOut).to({regX:-0.1,regY:-0.1,rotation:41.1246,x:64.45,y:-192.5},5,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:18.2284,x:64.5,y:-131.2},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).to({rotation:22.1824,y:-154.7},5,cjs.Ease.quadInOut).to({rotation:18.2284,y:-131.2},5,cjs.Ease.quadInOut).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:16.7786,x:60.45,y:-132.65},6,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({rotation:18.2284,x:64.5,y:-131.2},8,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({startPosition:0},7,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({y:-90.45},3,cjs.Ease.quadInOut).to({rotation:41.7,y:-171.9},5,cjs.Ease.quadInOut).to({startPosition:0},3,cjs.Ease.quadInOut).to({startPosition:0},3,cjs.Ease.quadInOut).to({startPosition:0},3,cjs.Ease.quadInOut).wait(1).to({regX:136.3,regY:-11.5,rotation:40.9449,x:175,y:-90},0).wait(1).to({rotation:38.8193,x:177.9,y:-90.4},0).wait(1).to({regX:0,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:35.0986,x:64.5,y:-160.55},0).wait(1).to({regX:136.3,regY:-11.5,scaleX:1,scaleY:1,rotation:29.853,x:188.4,y:-93.5},0).wait(1).to({rotation:24.8052,x:193,y:-95.85},0).wait(1).to({rotation:21.1428,x:195.75,y:-97.8},0).wait(1).to({rotation:19.0426,x:197.1,y:-98.95},0).wait(1).to({regX:0,regY:0,rotation:18.2284,x:64.5,y:-131.2},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(24).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:33.4214,y:-171.9},7,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({rotation:18.2284,y:-131.2},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({rotation:19.2547,x:61.7,y:-155.65},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({regY:-0.1,rotation:17.9448,x:65.5,y:-125.9},5,cjs.Ease.quadInOut).to({regY:-0.2,rotation:22.1451,x:68.35,y:-155.35},5,cjs.Ease.quadInOut).to({regY:0,rotation:18.2284,x:64.5,y:-131.2},5,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(40).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,rotation:18.1468,x:64,y:-127.85,startPosition:2},1).to({regX:-0.1,regY:-0.1,rotation:17.8869,x:62.3,y:-117.3,startPosition:4},1).to({regX:0,rotation:17.4661,x:59.6,y:-99.9,startPosition:5},1).to({rotation:17.0651,x:56.9,y:-83.45,startPosition:7},1).wait(1).to({regX:136.3,regY:-11.5,scaleX:1,scaleY:1,rotation:16.8279,x:188.95,y:-45},0).wait(1).to({regX:0,regY:0,rotation:16.7438,x:54.55,y:-70.05},0).wait(7).to({startPosition:7},0).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:39.4451,x:84.35,y:-148.65},7,cjs.Ease.quadInOut).wait(8).to({startPosition:7},0).to({regX:0,regY:0,rotation:41.9828,x:84.2,y:-148.6},6,cjs.Ease.quadInOut).wait(6).to({startPosition:7},0).to({scaleX:1,scaleY:1,rotation:18.2284,x:64.5,y:-131.2},6,cjs.Ease.quadInOut).wait(1).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:7},0).wait(10).to({startPosition:7},0).to({regX:0.1,regY:-0.1,rotation:5.549,x:57.85,y:-133.8},8,cjs.Ease.quadInOut).wait(11).to({rotation:5.549},0).to({regX:0,regY:0,rotation:18.2284,x:64.5,y:-131.2},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:-38.6571,x:50,y:-78.6},9,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,rotation:38.3127,x:109.4,y:-114.5},7,cjs.Ease.quadInOut).wait(19).to({rotation:38.3127},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:18.2284,x:64.5,y:-131.2},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({scaleX:1.03,scaleY:1.03,rotation:30.9204,x:76.5,y:-123.6},8,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:30.921,x:74,y:-126.85},8,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({rotation:43.3813,y:-136.9},5,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({rotation:30.921,y:-126.85},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({startPosition:0},6,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({rotation:18.2284,x:64.5,y:-131.2},6,cjs.Ease.quadInOut).wait(1).to({startPosition:2},0).to({scaleX:0.9999,scaleY:0.9999,rotation:17.5112,x:64.2,y:-131.4,startPosition:5},1).to({rotation:15.3165,x:63.25,y:-131.95,startPosition:7},1).to({regY:-0.1,rotation:11.4764,x:61.4,y:-132.85,startPosition:8},1).wait(1).to({regX:136.3,regY:-11.5,rotation:6.43,x:195.65,y:-129.9},0).wait(1).to({rotation:1.574,x:193.05,y:-142.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.9493,x:190.6,y:-151.5},0).wait(1).to({rotation:-3.9697,x:188.95,y:-156.65},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-4.753,x:53.5,y:-136},0).wait(12).to({startPosition:8},0).to({scaleX:0.9999,scaleY:0.9999,rotation:-6.4856,startPosition:9},3).to({rotation:8.7511,x:53.4,y:-136.1,startPosition:6},5).wait(11).to({rotation:-32.737,x:53.45,y:-136.05,startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:18.2284,x:64.5,y:-131.2},8).wait(1).to({startPosition:0},0).to({rotation:22.8865,x:65.9,y:-122.35},29,cjs.Ease.quadInOut).to({rotation:18.2284,x:64.5,y:-131.2},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,scaleX:0.94,scaleY:0.94,rotation:25.4423,x:80.7,y:-125.95},8,cjs.Ease.quadInOut).to({rotation:4.7173,x:23.95,y:-143.8},7,cjs.Ease.quadInOut).to({rotation:4.7173},3).to({scaleX:0.9399,scaleY:0.9399,rotation:26.9095,x:84.35,y:-120.65},7,cjs.Ease.quadInOut).to({startPosition:0},3).to({regX:0,regY:0,scaleX:1.06,scaleY:1.06,rotation:27.7337,x:45.5,y:-152.1},14,cjs.Ease.quadInOut).to({startPosition:0},6,cjs.Ease.quadOut).to({startPosition:0},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:18.2284,x:64.5,y:-131.2},9,cjs.Ease.quadInOut).wait(1));

	// Arm_L
	this.instance_7 = new lib.GrandpaArms("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-99.7,-131.2,1,1,0,-18.2284,161.7716);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewX:-46.931,skewY:133.069,x:-90.3,y:-135.55},7,cjs.Ease.quadInOut).wait(10).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9999,skewX:-56.6213,skewY:123.3787,x:-102.8,y:-167.9},7,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regY:-0.1,skewX:-35.3712,skewY:144.6288,x:-110.95,y:-117.15},7,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regY:-0.1,skewX:-35.3712,skewY:144.6288,x:-110.95,y:-117.15},8,cjs.Ease.quadInOut).wait(29).to({startPosition:0},0).to({regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({skewX:-47.6456,skewY:132.3544,x:-120.4,y:-179.15},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({y:-162.7},7,cjs.Ease.quadInOut).wait(3).to({startPosition:0},0).to({y:-179.15},7,cjs.Ease.quadInOut).to({startPosition:0},4,cjs.Ease.quadInOut).to({skewX:-41.6629,skewY:138.3371,x:-102.05,y:-191.25},8,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({skewX:-40.1783,skewY:139.8217,x:-92.1,y:-184.9},7,cjs.Ease.quadInOut).to({skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({skewX:-25.3779,skewY:154.6221,x:-117.8,y:-126.6},7,cjs.Ease.quadInOut).to({skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},7,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({startPosition:0},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({y:-117.05},4).to({y:-131.2},3).to({skewX:-14.7742,skewY:165.2258,y:-119.35},5).to({skewX:-18.2284,skewY:161.7716,y:-131.2},3).to({skewX:-14.7742,skewY:165.2258,y:-119.35},5).to({skewX:-18.2284,skewY:161.7716,y:-131.2},6,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,skewX:-38.8903,skewY:141.1097,x:-109.7,y:-124.8},7,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({skewX:-21.4402,skewY:158.5598,x:-121.85,y:-98},7,cjs.Ease.quadInOut).wait(9).to({startPosition:2},0).to({startPosition:5},1).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:-19.6524,skewY:160.3476,x:-117.4,y:-111.6,startPosition:7},1).to({skewX:-17.1907,skewY:162.8093,x:-110.85,y:-130.4,startPosition:9},1).wait(1).to({regX:136.3,regY:-11.5,scaleX:1,scaleY:1,skewX:-15.5459,skewY:164.4541,x:-240.55,y:-117.25},0).wait(1).to({regX:0.1,regY:-0.1,skewX:-14.988,skewY:165.012,x:-104.8,y:-147.05},0).to({scaleX:0.9732,scaleY:0.9732,skewX:-11.645,skewY:168.355,x:-108.85,y:-146.4,startPosition:10},2).to({scaleX:0.9599,scaleY:0.9599,skewX:-9.9708,skewY:170.0292,x:-110.9,y:-146.05},1).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,skewX:-28.6058,skewY:151.3942,x:-125.35,y:-135.7,startPosition:9},4).to({scaleX:1.0199,scaleY:1.0199,skewX:-17.6117,skewY:162.3883,x:-121.6,y:-136.55,startPosition:10},2).to({regX:0.2,scaleX:1.0399,scaleY:1.0399,skewX:-6.6186,skewY:173.3814,x:-117.9,y:-137.45},2).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,skewX:-10.0215,skewY:169.9785,x:-104.75,y:-147.1,startPosition:9},4).to({skewX:-3.0475,skewY:176.9525,y:-122.05},6,cjs.Ease.quadInOut).wait(1).to({regX:136.3,regY:-11.5,skewX:-3.0475,x:-241.35,y:-127.15},0).wait(1).to({regX:0.1,regY:-0.1,x:-104.9,y:-125.8,startPosition:7},0).wait(1).to({regX:136.3,regY:-11.5,x:-241.5,y:-135.05},0).wait(1).to({regX:0.1,regY:-0.2,x:-104.9,y:-137.75,startPosition:5},0).wait(1).to({regX:136.3,regY:-11.5,skewX:-3.048,skewY:176.952,x:-241.45,y:-148.25},0).wait(1).to({regX:0.1,regY:-0.2,skewX:-3.0484,skewY:176.9516,x:-104.9,y:-148.9,startPosition:3},0).wait(1).to({regX:136.3,regY:-11.5,skewX:-3.0478,skewY:176.9522,x:-241.35,y:-155.65},0).wait(1).to({regX:0.1,regY:-0.1,skewX:-3.0475,skewY:176.9525,x:-104.75,y:-152.65},0).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2,startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({skewX:-20.4655,skewY:159.5345,y:-154.7},5,cjs.Ease.quadInOut).to({skewX:-18.2284,skewY:161.7716,y:-131.2},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:0.1,regY:-0.1,skewX:-34.175,skewY:145.825,x:-118.75,y:-117.6},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({skewX:-20.9354,skewY:159.0646,x:-78.95,y:-118.55},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},6,cjs.Ease.quadInOut).wait(1).to({startPosition:2},0).to({skewX:-17.0643,skewY:162.9357,x:-98.35,y:-132.45,startPosition:4},1).to({scaleX:0.9999,scaleY:0.9999,skewX:-13.3977,skewY:166.6023,x:-93.85,y:-136.4,startPosition:7},1).to({skewX:-7.4664,skewY:172.5336,x:-86.55,y:-142.75,startPosition:9},1).to({regX:0.1,regY:-0.1,skewX:-1.8085,skewY:178.1915,x:-79.7,y:-148.9,startPosition:10},1).wait(1).to({regX:136.3,regY:-11.5,skewX:1.5437,skewY:181.5437,x:-211.3,y:-167.45},0).wait(1).to({regX:0.1,regY:-0.1,skewX:2.7325,skewY:182.7325,x:-73.9,y:-153.65},0).to({regX:0.2,scaleX:1,scaleY:1,skewX:-2.9749,skewY:177.0251,x:-74},4,cjs.Ease.quadInOut).wait(8).to({startPosition:10},0).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,skewX:12.2141,skewY:192.2141,x:-73.95,y:-153.8},5,cjs.Ease.quadInOut).to({regY:-0.1,scaleX:1,scaleY:1,skewX:-2.9749,skewY:177.0251,x:-74,y:-153.65},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,skewX:10.7509,skewY:190.7509,y:-153.7},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:-2.9749,skewY:177.0251,y:-153.65},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,skewX:10.0255,skewY:190.0255,y:-153.7,startPosition:8},5,cjs.Ease.quadInOut).to({regY:-0.2,skewX:9.5591,skewY:189.5591,x:-74.45,y:-153.5,startPosition:6},1).to({regX:0.3,skewX:8.1584,skewY:188.1584,x:-75.8,y:-152.35,startPosition:4},1).to({regX:0.4,skewX:5.7368,skewY:185.7368,x:-78.15,y:-150.5,startPosition:2},1).to({regY:-0.3,skewX:2.2302,skewY:182.2302,x:-81.35,y:-147.75,startPosition:0},1).wait(1).to({regX:136.3,regY:-11.5,skewX:-2.1479,skewY:177.8521,x:-221.5,y:-150.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:-6.7799,skewY:173.2201,x:-225.7,y:-135.5},0).wait(1).to({skewX:-10.923,skewY:169.077,x:-228.7,y:-122.35},0).wait(1).to({skewX:-14.1376,skewY:165.8624,x:-230.55,y:-112.15},0).wait(1).to({skewX:-16.3486,skewY:163.6514,x:-231.6,y:-105.2},0).wait(1).to({skewX:-17.6627,skewY:162.3373,x:-232.1,y:-101.05},0).wait(1).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({regX:0.1,regY:-0.1,skewX:-32.2437,skewY:147.7563,x:-85.5,y:-142.15},7,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,skewX:-35.6653,skewY:144.3347,x:-87.95,y:-164.35},6,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:-32.2437,skewY:147.7563,x:-85.5,y:-142.15},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},10,cjs.Ease.quadInOut).to({startPosition:0},7,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({skewX:-22.4628,skewY:157.5372,y:-157.1},5,cjs.Ease.quadInOut).to({skewX:-18.2284,skewY:161.7716,y:-131.2},6,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({skewX:-22.4628,skewY:157.5372,y:-157.1},4,cjs.Ease.quadInOut).to({skewX:-23.9461,skewY:156.0539,x:-103.3,y:-154.6},3,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,skewX:-20.9788,skewY:159.0212,x:-95.15,y:-159.45},3,cjs.Ease.quadInOut).to({skewX:-23.6877,skewY:156.3123,x:-103.8,y:-154.95},3,cjs.Ease.quadInOut).to({skewX:-21.2788,skewY:158.7212,x:-96,y:-158.9},3,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},6,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({skewX:-41.1773,skewY:138.8227,y:-171.9},6,cjs.Ease.quadInOut).to({skewX:-42.3605,skewY:137.6395,x:-103.45,y:-169.9},4,cjs.Ease.quadInOut).to({skewX:-41.1773,skewY:138.8227,x:-99.7,y:-171.9},6,cjs.Ease.quadInOut).to({skewX:-45.6318,skewY:134.3682,y:-192.35},5,cjs.Ease.quadInOut).to({skewX:-18.2284,skewY:161.7716,y:-131.2},5,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).to({skewX:-20.9685,skewY:159.0315,y:-154.7},5,cjs.Ease.quadInOut).to({skewX:-18.2284,skewY:161.7716,y:-131.2},5,cjs.Ease.quadInOut).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({skewX:-19.6781,skewY:160.3219,x:-103.65,y:-128.5},6,cjs.Ease.quadInOut).wait(20).to({startPosition:0},0).to({skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},8,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({startPosition:0},7,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).to({y:-90.45},3,cjs.Ease.quadInOut).to({skewX:-45.1879,skewY:134.8121,y:-171.9},5,cjs.Ease.quadInOut).to({startPosition:0},3,cjs.Ease.quadInOut).to({startPosition:0},3,cjs.Ease.quadInOut).to({startPosition:0},3,cjs.Ease.quadInOut).to({skewX:-18.2284,skewY:161.7716,y:-131.2},8,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(24).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({skewX:-39.9451,skewY:140.0549,y:-171.9},7,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({skewX:-18.2284,skewY:161.7716,y:-131.2},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({regY:-0.1,skewX:-20.8817,skewY:159.1183,x:-102.45,y:-153.05},6,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).to({regX:0.1,skewX:-18.2467,skewY:161.7533,x:-98.8,y:-126.55},5,cjs.Ease.quadInOut).to({skewX:-21.4184,skewY:158.5816,x:-95.9,y:-158.8},5,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},5,cjs.Ease.quadInOut).wait(12).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(40).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({skewX:-19.7115,skewY:160.2885,x:-109.55,y:-65.85},6,cjs.Ease.quadInOut).wait(7).to({startPosition:2},0).to({scaleX:0.9999,scaleY:0.9999,skewX:-18.3069,skewY:161.6931,x:-108.4,y:-69.5,startPosition:5},1).wait(1).to({regX:136.3,regY:-11.5,skewX:-13.9514,skewY:166.0486,x:-239.6,y:-59.25},0).wait(1).to({regX:0,regY:0,skewX:-6.4662,skewY:173.5338,x:-98.1,y:-100.7,startPosition:6},0).wait(1).to({regX:136.3,regY:-11.5,scaleX:1,scaleY:1,skewX:2.3137,skewY:182.3137,x:-226.2,y:-140.8},0).wait(1).to({regX:0.1,regY:-0.1,skewX:9.2617,skewY:189.2617,x:-84.5,y:-142.2,startPosition:8},0).wait(1).to({regX:136.3,regY:-11.5,skewX:13.2524,skewY:193.2524,x:-210.9,y:-194.9},0).wait(1).to({regX:0,regY:0,skewX:14.7348,skewY:194.7348,x:-79.7,y:-156.4},0).wait(8).to({startPosition:8},0).to({regX:0.1,regY:-0.1,skewX:27.6732,skewY:207.6732,x:-79.75,y:-156.55},6,cjs.Ease.quadInOut).wait(6).to({startPosition:6},0).to({scaleX:0.9999,scaleY:0.9999,skewX:25.1236,skewY:205.1236,x:-80.8,y:-155.15,startPosition:4},1).to({skewX:17.0932,skewY:197.0932,x:-84.35,y:-150.7,startPosition:2},1).to({skewX:4.1034,skewY:184.1034,x:-90,y:-143.6,startPosition:0},1).wait(1).to({regX:136.3,regY:-11.5,scaleX:1,scaleY:1,skewX:-8.2846,skewY:171.7154,x:-231.75,y:-128.35},0).wait(1).to({skewX:-15.6252,skewY:164.3748,x:-232.75,y:-106.85},0).wait(1).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},0).wait(1).to({startPosition:0},0).wait(15).to({startPosition:0},0).to({skewX:-20.4434,skewY:159.5566,x:-106.35,y:-127.35},8,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},7,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,skewX:27.3173,skewY:207.3173,x:-114.3,y:-72.35},9,cjs.Ease.quadInOut).wait(20).to({skewX:23.3251,skewY:203.3251,x:-114.2,startPosition:3},0).to({scaleX:0.9999,scaleY:0.9999,skewX:8.3356,skewY:188.3356,x:-111.85,y:-74.8,startPosition:7},1).to({regY:-0.2,skewX:9.3923,skewY:189.3923,x:-104.2,y:-82.4,startPosition:10},1).wait(1).to({regX:136.3,regY:-11.5,scaleX:1,scaleY:1,skewX:12.7672,skewY:192.7672,x:-221.35,y:-136.35},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,skewX:16.7264,skewY:196.7264,x:-202.8,y:-160.4},0).wait(1).to({skewX:19.8596,skewY:199.8596,x:-187.75,y:-179.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:21.6581,skewY:201.6581,x:-178.85,y:-190.05},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:22.3262,skewY:202.3262,x:-53.95,y:-131.85,startPosition:9},0).wait(19).to({startPosition:8},0).to({skewX:21.0595,skewY:201.0595,x:-55.4,y:-131.9,startPosition:6},1).to({skewX:17.1862,skewY:197.1862,x:-59.8,y:-131.85,startPosition:3},1).to({regX:0.2,regY:-0.2,skewX:10.4065,skewY:190.4065,x:-67.5,startPosition:1},1).to({skewX:1.5032,skewY:181.5033,x:-77.6,y:-131.6,startPosition:0},1).wait(1).to({regX:136.3,regY:-11.5,skewX:-7.0649,skewY:172.9351,x:-223.55,y:-125.85},0).wait(1).to({scaleX:1,scaleY:1,skewX:-13.2815,skewY:166.7186,x:-229.15,y:-111},0).wait(1).to({skewX:-16.8464,skewY:163.1536,x:-231.6,y:-102.55},0).wait(1).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},0).wait(1).to({startPosition:0},0).to({scaleX:1.03,scaleY:1.03,skewX:-26.1889,skewY:153.8111,x:-92.2,y:-133.9},8,cjs.Ease.quadInOut).wait(24).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:-26.1893,skewY:153.8107,x:-89.9,y:-136.9},8,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({skewX:-36.1802,skewY:143.8198,y:-146.8},5,cjs.Ease.quadInOut).wait(2).to({startPosition:0},0).to({skewX:-26.1893,skewY:153.8107,y:-136.9},5,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({startPosition:0},6,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:-43.1561,skewY:136.8439,x:-110.3,y:-123.1},8,cjs.Ease.quadInOut).wait(31).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},8).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,skewX:-21.5269,skewY:158.4731,x:-98.4,y:-123.65},29,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({scaleX:0.94,scaleY:0.94,skewX:-11.0122,skewY:168.9878,x:-72.45,y:-145.25},8,cjs.Ease.quadInOut).to({scaleX:0.9399,scaleY:0.9399,skewX:-31.7376,skewY:148.2624,x:-126.1,y:-107.8},7,cjs.Ease.quadInOut).to({startPosition:0},3).to({regX:0.1,regY:-0.1,scaleX:0.94,scaleY:0.94,skewX:-9.5444,skewY:170.4556,x:-68.35,y:-144},7,cjs.Ease.quadInOut).to({startPosition:0},3).to({regX:0,regY:0,scaleX:1.0599,scaleY:1.0599,skewX:-35.656,skewY:144.344,x:-128.2,y:-141.6},14,cjs.Ease.quadInOut).to({startPosition:0},6,cjs.Ease.quadOut).to({startPosition:0},7,cjs.Ease.quadInOut).wait(6).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:-18.2284,skewY:161.7716,x:-99.7,y:-131.2},9,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-448.8,-813.5,841.7,1135.7);


// stage content:
(lib.grampy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"grampy-cone":0,"grampy-cup":35,"grampy-wafflebowl":67,"grampy-wafflecone":114,"grampy-berry":178,"grampy-birthday":215,"grampy-mango":263,"grampy-mint":322,"grampy-rainbow":370,"grampy-vanilla":425,"grampy-and":479,"grampy-with":498,"grampy-banana":519,"grampy-cereal":542,"grampy-chips":585,"grampy-chocolate":620,"grampy-flapjack":657,"grampy-jellybeans":700,"grampy-peaches":754,"grampy-peppermints":775,"grampy-pickles":800,"grampy-sprinkles":821,"grampy-strawberries":868,"grampy-please":909,"grampy-thank-1":933,"grampy-thank-2":980,"grampy-wrong-order":1022,"grampy-freeplay":1086,"grampy-surprise":1172,idle:1220,idleSpecial:1280});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_66 = function() {
		this.stop();
	}
	this.frame_113 = function() {
		this.stop();
	}
	this.frame_177 = function() {
		this.stop();
	}
	this.frame_214 = function() {
		this.stop();
	}
	this.frame_262 = function() {
		this.stop();
	}
	this.frame_321 = function() {
		this.stop();
	}
	this.frame_369 = function() {
		this.stop();
	}
	this.frame_424 = function() {
		this.stop();
	}
	this.frame_478 = function() {
		this.stop();
	}
	this.frame_497 = function() {
		this.stop();
	}
	this.frame_518 = function() {
		this.stop();
	}
	this.frame_541 = function() {
		this.stop();
	}
	this.frame_584 = function() {
		this.stop();
	}
	this.frame_619 = function() {
		this.stop();
	}
	this.frame_656 = function() {
		this.stop();
	}
	this.frame_699 = function() {
		this.stop();
	}
	this.frame_753 = function() {
		this.stop();
	}
	this.frame_774 = function() {
		this.stop();
	}
	this.frame_799 = function() {
		this.stop();
	}
	this.frame_820 = function() {
		this.stop();
	}
	this.frame_867 = function() {
		this.stop();
	}
	this.frame_908 = function() {
		this.stop();
	}
	this.frame_932 = function() {
		this.stop();
	}
	this.frame_979 = function() {
		this.stop();
	}
	this.frame_1021 = function() {
		this.stop();
	}
	this.frame_1085 = function() {
		this.stop();
	}
	this.frame_1171 = function() {
		this.stop();
	}
	this.frame_1219 = function() {
		this.stop();
	}
	this.frame_1279 = function() {
		this.gotoAndPlay('idle');
	}
	this.frame_1288 = function() {
		this.dispatchEvent('reaction', true);
	}
	this.frame_1356 = function() {
		this.dispatchEvent('complete', true);
		this.gotoAndPlay('idle');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(32).call(this.frame_66).wait(47).call(this.frame_113).wait(64).call(this.frame_177).wait(37).call(this.frame_214).wait(48).call(this.frame_262).wait(59).call(this.frame_321).wait(48).call(this.frame_369).wait(55).call(this.frame_424).wait(54).call(this.frame_478).wait(19).call(this.frame_497).wait(21).call(this.frame_518).wait(23).call(this.frame_541).wait(43).call(this.frame_584).wait(35).call(this.frame_619).wait(37).call(this.frame_656).wait(43).call(this.frame_699).wait(54).call(this.frame_753).wait(21).call(this.frame_774).wait(25).call(this.frame_799).wait(21).call(this.frame_820).wait(47).call(this.frame_867).wait(41).call(this.frame_908).wait(24).call(this.frame_932).wait(47).call(this.frame_979).wait(42).call(this.frame_1021).wait(64).call(this.frame_1085).wait(86).call(this.frame_1171).wait(48).call(this.frame_1219).wait(60).call(this.frame_1279).wait(9).call(this.frame_1288).wait(68).call(this.frame_1356).wait(1));

	// grampy
	this.instance = new lib.GrampyGameplay("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(368.15,575.75,0.7,0.7,0,0,0,0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1357));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(422.6,406.6,220.19999999999993,394.5);
// library properties:
lib.properties = {
	id: '3B007074AEF14ABAA4C32B79EFCFE7ED',
	width: 738,
	height: 801,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/grampy_atlas_.png", id:"grampy_atlas_"}
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
an.compositions['3B007074AEF14ABAA4C32B79EFCFE7ED'] = {
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