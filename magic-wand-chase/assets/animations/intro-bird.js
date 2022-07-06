(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"intro_bird_atlas_", frames: [[328,231,91,73],[95,178,118,109],[215,219,111,63],[270,113,134,104],[421,231,88,67],[270,0,126,111],[406,136,100,93],[406,0,82,134],[215,284,85,43],[183,0,85,176],[0,250,83,70],[95,0,86,176],[0,0,93,248]]}
];


// symbols:



(lib.BirdBeak = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BirdBod = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BirdEyes = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BirdFeather = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BirdNeck = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BirdSkull = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BirdTail1 = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BirdTail2 = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.DownFlap = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Down = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.UpFlap = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Up = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.wand = function() {
	this.initialize(ss["intro_bird_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Wand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,248);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Up();
	this.instance.parent = this;
	this.instance.setTransform(-43,88,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-88,86,176);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Up();
	this.instance.parent = this;
	this.instance.setTransform(-43,88,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-88,86,176);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Down();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,88,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-88,85,176);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Down();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-88,85,176);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Down();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-88,85,176);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Up();
	this.instance.parent = this;
	this.instance.setTransform(-43,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-88,86,176);


(lib.BirdTail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BirdTail2();
	this.instance.parent = this;
	this.instance.setTransform(12,0);

	this.instance_1 = new lib.BirdTail1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,142.5);


(lib.BirdNeck_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BirdNeck();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,67);


(lib.BirdHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BirdSkull();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,111);


(lib.BirdFeather_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BirdFeather();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,104);


(lib.BirdEyes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BirdEyes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,63);


(lib.BirdBeak_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BirdBeak();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,73);


(lib.NewFlapBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-7.9,-89.8,1,1.0324,0,14.3879,0);

	this.instance_1 = new lib.DownFlap();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.8,-17.25,1,1.0603,0,19.4087,0);

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-14.6,64.85,1,0.8815,0,-11.0742,0);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-29.55,64,1,0.8539,0,0,0,0,0.1);

	this.instance_4 = new lib.UpFlap();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-30.5,-48.95,1,0.9528,0,34.7407,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.9528,skewX:34.7407,x:-30.5,y:-48.95}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.1049,skewX:25.1736,x:-39,y:-68.25}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.8901,skewX:14.7702,x:-10.7,y:-77.6},1).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true,regY:0.1,scaleY:0.8539,skewX:0,x:-29.55,y:64},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,-177.8,134.10000000000002,318.8);


(lib.NewFlap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-29.55,-86.25);

	this.instance_1 = new lib.DownFlap();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100.85,-17.25,1.3413,1);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-44,78.25,1,1.0116,0,8.6894,0);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22.1,59.25,1,0.7886,0,-7.0167,0,-0.1,0.1);

	this.instance_4 = new lib.UpFlap();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-71.5,-33.6,1.0267,0.8857,0,0,-13.0944);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.0267,scaleY:0.8857,skewY:-13.0944,x:-71.5,y:-33.6}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,skewY:0,x:-71.95,y:-68.25}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.824,skewX:-10.2886,x:-39.75,y:-69},1).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true,regX:-0.1,regY:0.1,scaleY:0.7886,skewX:-7.0167,x:-22.1,y:59.25},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-174.2,129.8,340.5);


(lib.BirdBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BirdBod();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Wand("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.65,82.85,1,1,-63.0529,0,0,46.5,124);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-14.8,263.20000000000005,195.3);


(lib.FlapLoop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{flapWand:0});

	// Bird_Beak
	this.instance = new lib.BirdBeak_1("single",0);
	this.instance.parent = this;
	this.instance.setTransform(266.05,159.8,1,1,-18.4972,0,0,45.6,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-16.025,x:261.45,y:140.6},5,cjs.Ease.quadInOut).wait(1).to({regX:45.5,regY:36.5,scaleX:0.9999,scaleY:0.9999,rotation:-16.1664,x:261.55,y:141.65},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-16.4289,x:262.05,y:143.7},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:-16.8646,x:262.9,y:147.1},0).wait(1).to({regX:45.6,regY:36.6,scaleX:0.999,scaleY:0.999,rotation:-17.5338,x:264.3,y:152.55},0).wait(1));

	// Bird_Eyes
	this.instance_1 = new lib.BirdEyes_1("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(257.15,123.7,1,1,-18.4972,0,0,55.6,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:55.5,regY:31.7,rotation:-16.025,x:254.05,y:104.2},5,cjs.Ease.quadInOut).wait(1).to({regY:31.5,scaleX:0.9999,scaleY:0.9999,rotation:-16.1664,x:254.1,y:105.1},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-16.4289,x:254.45,y:107.25},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:-16.8646,x:255.05,y:110.75},0).wait(1).to({regX:55.6,regY:31.7,scaleX:0.999,scaleY:0.999,rotation:-17.5338,x:256,y:116.35},0).wait(1));

	// Bird_Feather
	this.instance_2 = new lib.BirdFeather_1("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(249.65,82.35,1,1,-18.4972,0,0,10.1,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:10.2,regY:65.6,scaleX:1.0231,rotation:0,skewX:-9.5583,skewY:2.6678,x:248.5,y:62.5},5,cjs.Ease.quadInOut).wait(1).to({regX:67,regY:52,scaleX:1.0217,scaleY:0.9999,skewX:-10.0727,skewY:1.4324,x:304.2,y:51.7},0).wait(1).to({scaleX:1.0191,scaleY:0.9998,skewX:-11.028,skewY:-0.8618,x:303.95,y:51.55},0).wait(1).to({scaleX:1.0147,scaleY:0.9995,skewX:-12.6132,skewY:-4.669,x:303.35,y:51.4},0).wait(1).to({regX:10.2,regY:65.5,scaleX:1.008,scaleY:0.9991,skewX:-15.0484,skewY:-10.5178,x:249.2,y:74.85},0).wait(1));

	// Bird_Head
	this.instance_3 = new lib.BirdHead("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.5,165.5,1,1,-18.4972,0,0,44.5,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:44.6,regY:83.1,rotation:-16.025,x:235.75,y:145.2},5,cjs.Ease.quadInOut).wait(1).to({regX:63,regY:55.5,scaleX:0.9999,scaleY:0.9999,rotation:-16.1664,x:246,y:114.75},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-16.4289,x:246.4,y:116.95},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:-16.8646,x:247,y:120.6},0).wait(1).to({regX:44.6,regY:83.1,scaleX:0.999,scaleY:0.999,rotation:-17.5338,x:238.8,y:158},0).wait(1));

	// Bird_Neck
	this.instance_4 = new lib.BirdNeck_1("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(220.5,199.45,1,1,-33.9524,0,0,34.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:38.1,rotation:-40.4272,x:220.55,y:181.05},5,cjs.Ease.quadInOut).wait(1).to({regX:44,regY:33.5,scaleX:0.9998,scaleY:0.9998,rotation:-40.0452,x:224.9,y:172.45},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,rotation:-39.3359,x:224.95,y:174.5},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,rotation:-38.1588,x:225.25,y:177.9},0).wait(1).to({regX:34.5,regY:38.1,scaleX:0.9984,scaleY:0.9984,rotation:-36.3504,x:220.7,y:192.5},0).wait(1));

	// New_Flap_Front
	this.instance_5 = new lib.NewFlap("synched",3);
	this.instance_5.parent = this;
	this.instance_5.setTransform(185.2,204.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:185,y:196.1,startPosition:7},5,cjs.Ease.quadInOut).wait(1).to({regX:-35.9,regY:-4,x:149.1,y:192.3,startPosition:8},0).wait(1).to({y:192.75,startPosition:9},0).wait(1).to({y:193.45,startPosition:0},0).wait(1).to({regX:0,regY:0,x:185,y:198.6,startPosition:1},0).wait(1));

	// Bird_Body
	this.instance_6 = new lib.BirdBody("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(167.1,218.5,1,1,-33.9524,0,0,59,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-37.149,x:167.95,y:201.95},5,cjs.Ease.quadInOut).wait(1).to({regX:12.7,regY:82.8,scaleX:0.9998,scaleY:0.9998,rotation:-36.9571,x:147.8,y:253.25},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,rotation:-36.6008,x:147.45,y:254.95},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,rotation:-36.0096,x:146.75,y:257.65},0).wait(1).to({regX:59.1,regY:54.6,scaleX:0.9984,scaleY:0.9984,rotation:-35.1013,x:167.4,y:212.15},0).wait(1));

	// New_Flap_Back
	this.instance_7 = new lib.NewFlapBack("synched",3);
	this.instance_7.parent = this;
	this.instance_7.setTransform(225.1,204.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.9244,skewX:-16.9933,x:228,y:194.75,startPosition:7},5,cjs.Ease.quadInOut).wait(1).to({regX:-9.9,regY:-18.4,scaleY:0.9285,skewX:-14.7139,x:213.45,y:178.55,startPosition:8},0).wait(1).to({scaleY:0.9359,skewX:-10.4811,x:214.1,y:178.75,startPosition:9},0).wait(1).to({scaleY:0.9482,skewX:-3.4573,x:215.3,y:179.4,startPosition:0},0).wait(1).to({regX:0.1,regY:0.1,scaleY:0.9672,skewX:7.3328,x:224.9,y:198.55,startPosition:1},0).wait(1));

	// Bird_Body
	this.instance_8 = new lib.BirdTail("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(122.35,191.3,1,1,-33.9524,0,0,97,135.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:135.2,scaleX:0.9999,scaleY:0.9999,rotation:-48.341,x:120.35,y:175.45},5,cjs.Ease.quadInOut).wait(1).to({regX:50,regY:71.2,scaleX:0.9998,scaleY:0.9998,rotation:-47.2823,x:41.65,y:167.7},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:-44.0424,x:42.75,y:166.9},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,rotation:-39.2548,x:44.85,y:165.75},0).wait(1).to({regX:96.9,regY:135.2,scaleX:0.9984,scaleY:0.9984,rotation:-35.578,x:122.15,y:189.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-19,419.8,387.3);


// stage content:
(lib.introbird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.FlapLoop("synched",8);
	this.instance.parent = this;
	this.instance.setTransform(821.3,406.65,0.5697,0.5697,17.7351,0,0,175,192.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1545.8,687.8,-589.0999999999999,-183.49999999999994);
// library properties:
lib.properties = {
	id: '1072373FAF34480EA7AA0C1BFB177E28',
	width: 1664,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/intro_bird_atlas_.png", id:"intro_bird_atlas_"}
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
an.compositions['1072373FAF34480EA7AA0C1BFB177E28'] = {
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