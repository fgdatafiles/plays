(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animation_atlas_1", frames: [[459,85,45,27],[459,114,45,23],[368,85,89,47],[368,0,108,83],[478,48,20,20],[478,25,21,21],[368,134,79,37],[0,0,182,170],[449,139,44,21],[227,170,44,12],[184,0,182,168],[449,162,46,18],[478,0,32,23],[184,170,41,15],[273,170,18,19]]}
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



(lib.KokiAh = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.KokiAy = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.KokiBlink0 = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.KokiBody = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.KokiEyeL = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.KokiEyeR = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.KokiEyeWhites = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.KokiHair = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.KokiL = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.KokiM = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.KokiSkull = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.KokiSTD = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.KokiU = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.KokiV = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.KokiW = function() {
	this.initialize(ss["animation_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.KokiSkull_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KokiSkull();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,168);


(lib.KokiPupilR = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KokiEyeR();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,21);


(lib.KokiPupilL = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KokiEyeL();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.KokiMouth = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KokiM();

	this.instance_1 = new lib.KokiL();

	this.instance_2 = new lib.KokiAy();

	this.instance_3 = new lib.KokiAh();
	this.instance_3.setTransform(1,0.05,1,0.9259);

	this.instance_4 = new lib.KokiSTD();

	this.instance_5 = new lib.KokiU();
	this.instance_5.setTransform(7,-3);

	this.instance_6 = new lib.KokiV();
	this.instance_6.setTransform(0.5,0.5);

	this.instance_7 = new lib.KokiW();
	this.instance_7.setTransform(17,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,46,28.1);


(lib.KokiHair_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KokiHair();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,170);


(lib.KokiEyeWhites_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KokiEyeWhites();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,37);


(lib.KokiBody_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KokiBody();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,83);


(lib.KokiBlink = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KokiBlink0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,47);


(lib.KokiHead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,idle:4,"intro-1":65,"intro-2":439,"intro-3":704,"activity-1":958,"activity-1b":1040,"activity-1a":1097,Neutral:0,"Neutral":65,Uh:79,D:81,R:84,Ah:87,M:90,Oh:93,"M":96,"Uh":98,S:101,"Uh":103,F:105,"Ah":108,Ee:113,"D":117,"Ee":120,"D":124,"Neutral":127,"Ee":144,"S":147,"Uh":152,"R":154,"Ee":156,"M":158,"Uh":161,"M":164,"Oh":165,"M":168,"Ee":169,"F":173,"Oh":175,"M":179,"Uh":183,"S":188,"Ee":193,"D":195,Woo:198,"Neutral":201,"D":203,"Uh":205,"D":207,"Uh":210,"S":213,"M":216,"Uh":219,L:222,"Ee":224,"Oh":228,"D":231,"Ah":236,"F":240,"Uh":242,"D":244,"Ee":246,"S":249,"D":251,"Ah":254,"R":257,"Neutral":263,"Ee":281,"D":284,"Uh":286,"Oh":294,"D":296,"Ee":302,"S":306,"Ah":309,"D":314,"Oh":316,"S":321,"M":323,"Ee":326,"Oh":334,"M":336,"Ah":339,"L":343,"Ah":346,"D":348,"Neutral":350,"Uh":354,"D":356,"Uh":360,"M":364,"S":366,"Ee":369,"D":371,"Ah":373,"L":377,"S":380,"Neutral":383,"M":396,"Uh":399,"D":402,"S":404,"Neutral":407,"Ah":411,"D":414,"Oh":416,"M":418,"Oh":419,"Neutral":422,"Neutral":438,"Neutral":439,"Ee":447,"R":451,"Woo":453,"Oh":456,"D":462,"Ah":466,"F":470,"D":472,"Ee":475,"Woo":477,"Ah":481,"M":485,"Oh":489,"D":492,"Woo":499,"Uh":502,"D":508,"Neutral":511,"Ah":514,"L":518,"Neutral":521,"Ee":533,"D":538,"Uh":540,"L":544,"Ee":546,"S":548,"Ee":551,"Woo":554,"M":557,"Ee":559,"S":563,"Ee":566,"M":568,"Uh":570,"D":574,"Uh":577,"M":582,"Ah":586,"F":590,"Neutral":593,"Ah":596,"Ee":599,"Oh":604,"L":607,"Ah":609,"S":614,"Ah":617,"S":619,"Neutral":623,"Ah":637,"D":639,"M":641,"Oh":643,"Ee":645,"D":650,"Ah":655,"Oh":660,"M":662,"Neutral":667,"Ee":670,"S":675,"L":679,"Ah":682,"D":685,"S":688,"Neutral":692,"Neutral":703,"Neutral":704,"Ah":717,"M":722,"Ee":726,"Ah":729,"D":734,"S":736,"L":739,"Ah":741,"L":744,"Ah":747,"Ee":752,"M":756,"S":758,"Neutral":762,"Uh":770,"L":776,"Ah":778,"D":782,"Woo":788,"Ee":791,"S":793,"D":795,"Uh":798,"Ee":801,"M":803,"Ah":804,"L":807,"Uh":809,"F":815,"M":817,"Oh":818,"F":822,"Ee":827,"D":829,"Neutral":833,"Ah":843,"D":845,"Uh":847,"D":849,"Ee":852,"Uh":856,"M":859,"Uh":861,"D":867,"Uh":871,"M":873,"Uh":875,"D":877,"Ee":880,"R":885,"S":888,"Neutral":891,"Ah":895,"M":897,"Neutral":901,"Uh":914,"S":916,"Ah":919,"D":923,"Oh":925,"M":927,"Ah":930,"D":933,"Ah":936,"Neutral":949,"Neutral":957,"Neutral":958,"Ah":970,"S":974,"Ee":978,"S":980,"Ah":984,"D":987,"R":989,"Ee":993,"S":998,"Ee":1000,"Ah":1003,"M":1006,"Ee":1008,"S":1012,"M":1015,"Ah":1018,"Ee":1021,"S":1023,"Neutral":1030,"Neutral":1039,"Neutral":1040,"Ah":1046,"M":1049,"Uh":1052,"S":1055,"Ah":1059,"D":1062,"Woo":1064,"D":1067,"Oh":1070,"M":1073,"Oh":1074,"Ee":1077,"Woo":1079,"L":1084,"Oh":1087,"Neutral":1089,"Neutral":1096};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Koki_Mouth
	this.instance = new lib.KokiMouth("single",0);
	this.instance.setTransform(113,153,1,1,0,0,0,23,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({startPosition:0},0).wait(14).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:3},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:6},0).wait(3).to({startPosition:3},0).wait(5).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(17).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(5).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:6},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(5).to({startPosition:3},0).wait(4).to({startPosition:6},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:3},0).wait(3).to({startPosition:4},0).wait(6).to({startPosition:0},0).wait(18).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(8).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(6).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:3},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(8).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:3},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:3},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:3},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(13).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:3},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(6).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:7},0).wait(3).to({startPosition:5},0).wait(6).to({startPosition:4},0).wait(4).to({startPosition:3},0).wait(4).to({startPosition:6},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:7},0).wait(4).to({startPosition:3},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(7).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(6).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:3},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(12).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:7},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(5).to({startPosition:0},0).wait(4).to({startPosition:3},0).wait(4).to({startPosition:6},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:3},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:5},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:3},0).wait(5).to({startPosition:4},0).wait(3).to({startPosition:3},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(14).to({startPosition:3},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(5).to({startPosition:3},0).wait(5).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:3},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(13).to({startPosition:3},0).wait(5).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:3},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:3},0).wait(5).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(8).to({startPosition:5},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:3},0).wait(4).to({startPosition:4},0).wait(6).to({startPosition:7},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:3},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(6).to({startPosition:6},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(4).to({startPosition:6},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(10).to({startPosition:3},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(6).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:3},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(13).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:3},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:3},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:3},0).wait(6).to({startPosition:4},0).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12).to({startPosition:3},0).wait(4).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:3},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:3},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:3},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(7).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:3},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(4).to({startPosition:3},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:7},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:5},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(6).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:3},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:3},0).wait(4).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(6).to({startPosition:0},0).wait(5));

	// Koki_Blink
	this.instance_1 = new lib.KokiBlink("single",0);
	this.instance_1.setTransform(108,111.5,1,1,0,0,0,44.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1158));

	// Koki_Pupil_L
	this.instance_2 = new lib.KokiPupilL("single",0);
	this.instance_2.setTransform(131.5,110.5,0.95,1,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({startPosition:0},0).to({x:134.5,y:100.5},5,cjs.Ease.quadInOut).wait(55).to({startPosition:0},0).to({x:131.5,y:110.5},6).wait(88).to({startPosition:0},0).to({x:139.5,y:104.5},6,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({x:131.5,y:110.5},6,cjs.Ease.quadInOut).wait(180).to({startPosition:0},0).to({x:139.5,y:105.5},6,cjs.Ease.quadInOut).wait(91).to({startPosition:0},0).to({x:131.5,y:110.5},6,cjs.Ease.quadInOut).wait(172).to({startPosition:0},0).to({x:141.5,y:109.5},6,cjs.Ease.quadInOut).wait(172).to({startPosition:0},0).to({x:131.5,y:110.5},6,cjs.Ease.quadInOut).wait(38).to({startPosition:0},0).to({x:138.5,y:104.5},5,cjs.Ease.quadInOut).wait(33).to({startPosition:0},0).to({x:140.5,y:107.5},5,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({x:131.5,y:110.5},5,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({x:138.5,y:104.5},5,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({x:131.5,y:110.5},5,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({x:138.5,y:104.5},5,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({x:131.5,y:110.5},5,cjs.Ease.quadInOut).wait(9));

	// Koki_Pupil_R
	this.instance_3 = new lib.KokiPupilR("single",0);
	this.instance_3.setTransform(86,110.5,1,1,0,0,0,10.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83).to({startPosition:0},0).to({x:89,y:100.5},5,cjs.Ease.quadInOut).wait(55).to({startPosition:0},0).to({x:86,y:110.5},6).wait(88).to({startPosition:0},0).to({x:94,y:104.5},6,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({x:86,y:110.5},6,cjs.Ease.quadInOut).wait(180).to({startPosition:0},0).to({x:96,y:105.5},6,cjs.Ease.quadInOut).wait(91).to({startPosition:0},0).to({x:86,y:110.5},6,cjs.Ease.quadInOut).wait(172).to({startPosition:0},0).to({x:98,y:109.5},6,cjs.Ease.quadInOut).wait(172).to({startPosition:0},0).to({x:86,y:110.5},6,cjs.Ease.quadInOut).wait(38).to({startPosition:0},0).to({x:93,y:104.5},5,cjs.Ease.quadInOut).wait(33).to({startPosition:0},0).to({x:96,y:107.5},5,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({x:86,y:110.5},5,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({x:93,y:104.5},5,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({x:86,y:110.5},5,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({x:93,y:104.5},5,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({x:86,y:110.5},5,cjs.Ease.quadInOut).wait(9));

	// Koki_Eye_Whites
	this.instance_4 = new lib.KokiEyeWhites_1("single",0);
	this.instance_4.setTransform(110.5,109,1,1,0,0,0,39.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1158));

	// Koki_Skull
	this.instance_5 = new lib.KokiSkull_1("single",0);
	this.instance_5.setTransform(92,158.5,1,1,0,0,0,92,158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1158));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,168);


// stage content:
(lib.kokipopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"idle":4,"intro-1":65,"intro-2":439,"intro-3":704,"activity-1":958,"activity-1b":1040,"activity-1a":1097};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [64,438,703,957,1039,1096,1157];
	// timeline functions:
	this.frame_64 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_438 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_703 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_957 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_1039 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_1096 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_1157 = function() {
		this.gotoAndPlay("idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(374).call(this.frame_438).wait(265).call(this.frame_703).wait(254).call(this.frame_957).wait(82).call(this.frame_1039).wait(57).call(this.frame_1096).wait(61).call(this.frame_1157).wait(1));

	// Koki_Head
	this.instance = new lib.KokiHead("synched",0,false);
	this.instance.setTransform(125.25,243.35,1,1,0,0,0,94,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:4},0).to({rotation:1.2258,x:125.4,y:245.4,startPosition:34},30,cjs.Ease.quadInOut).to({rotation:0,x:125.25,y:243.35,startPosition:65},31,cjs.Ease.quadInOut).wait(14).to({startPosition:79},0).to({rotation:3.9917,x:125.15,y:243.65,startPosition:90},11,cjs.Ease.quadInOut).wait(18).to({startPosition:108},0).to({regX:93.9,regY:157.4,rotation:-4.4484,x:121.9,y:243.85,startPosition:117},9,cjs.Ease.quadInOut).wait(27).to({rotation:-4.4484,startPosition:144},0).to({regY:157.3,rotation:2.7612,x:125.8,y:243.95,startPosition:154},10).wait(80).to({rotation:2.7612,startPosition:234},0).to({regY:157.2,rotation:-5.175,x:124.15,y:243.8,startPosition:243},9,cjs.Ease.quadInOut).wait(37).to({rotation:-5.175,startPosition:280},0).to({regX:93.8,rotation:6.5717,x:124.5,y:244.1,startPosition:290},10,cjs.Ease.quadInOut).wait(136).to({rotation:6.5717,startPosition:426},0).to({regX:94,regY:157.5,rotation:0,x:125.25,y:243.35,startPosition:438},12,cjs.Ease.quadInOut).wait(1).to({startPosition:439},0).wait(6).to({startPosition:445},0).to({rotation:-7.4752,x:124.9,y:243.1,startPosition:454},9,cjs.Ease.quadInOut).wait(78).to({startPosition:532},0).to({regY:157.4,rotation:6.2548,x:125.15,startPosition:541},9,cjs.Ease.quadInOut).wait(94).to({startPosition:635},0).to({regY:157.3,rotation:-4.2371,x:124.65,y:243.45,startPosition:646},11,cjs.Ease.quadInOut).wait(47).to({rotation:-4.2371,startPosition:693},0).to({regY:157.5,rotation:0,x:125.25,y:243.35,startPosition:703},10,cjs.Ease.quadInOut).wait(1).to({startPosition:704},0).wait(11).to({startPosition:715},0).to({rotation:4.4545,startPosition:723},8,cjs.Ease.quadInOut).wait(21).to({startPosition:744},0).to({rotation:-8.2855,x:125.05,y:244,startPosition:753},9,cjs.Ease.quadInOut).wait(55).to({rotation:-8.2855,startPosition:808},0).to({regY:157.4,rotation:3.1963,x:125.3,startPosition:818},10,cjs.Ease.quadInOut).wait(60).to({rotation:3.1963,startPosition:878},0).to({rotation:-3.544,x:124.9,y:243.85,startPosition:888},10,cjs.Ease.quadInOut).wait(41).to({rotation:-3.544,startPosition:929},0).to({regY:157.5,rotation:0,x:125.25,y:243.35,startPosition:941},12,cjs.Ease.quadInOut).wait(16).to({startPosition:957},0).wait(1).to({startPosition:958},0).wait(9).to({startPosition:967},0).to({rotation:4.4878,x:125.35,y:243.45,startPosition:976},9,cjs.Ease.quadInOut).wait(36).to({startPosition:1012},0).to({rotation:0,x:125.25,y:243.35,startPosition:1022},10,cjs.Ease.quadInOut).wait(17).to({startPosition:1039},0).wait(1).to({startPosition:1040},0).wait(118));

	// Koki_Body
	this.instance_1 = new lib.KokiBody_1("single",0);
	this.instance_1.setTransform(133.25,273.35,1,1,0,0,0,54,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({startPosition:0},0).to({scaleX:1.0185,scaleY:0.9578,y:275.15},30,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:273.35},31,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({startPosition:0},11,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({rotation:-2.741,x:131.55,y:273.1},9,cjs.Ease.quadInOut).wait(27).to({startPosition:0},0).to({regY:41.4,rotation:0.5018,x:133.9,y:273.6},10).wait(80).to({rotation:0.5018},0).to({rotation:-0.7239,x:133.05,y:273.4},9,cjs.Ease.quadInOut).wait(37).to({startPosition:0},0).to({startPosition:0},10,cjs.Ease.quadInOut).wait(136).to({startPosition:0},0).to({regY:41.5,rotation:0,x:133.25,y:273.35},12,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({startPosition:0},9,cjs.Ease.quadInOut).wait(78).to({startPosition:0},0).to({startPosition:0},9,cjs.Ease.quadInOut).wait(94).to({startPosition:0},0).to({startPosition:0},11,cjs.Ease.quadInOut).wait(47).to({startPosition:0},0).to({startPosition:0},10,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(11).to({startPosition:0},0).to({startPosition:0},8,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({startPosition:0},9,cjs.Ease.quadInOut).wait(55).to({startPosition:0},0).to({startPosition:0},10,cjs.Ease.quadInOut).wait(60).to({startPosition:0},0).to({startPosition:0},10,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({startPosition:0},12,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(9).to({startPosition:0},0).to({startPosition:0},9,cjs.Ease.quadInOut).wait(36).to({startPosition:0},0).to({startPosition:0},10,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(118));

	// Koki_Hair
	this.instance_2 = new lib.KokiHair_1("single",0);
	this.instance_2.setTransform(122.25,247.35,1,1,0,0,0,91,161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({startPosition:0},0).to({rotation:1.2258,x:122.3,y:249.35},30,cjs.Ease.quadInOut).to({rotation:0,x:122.25,y:247.35},31,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({rotation:3.9917,x:121.9,y:247.45},11,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({rotation:-4.4484,x:119.35,y:248.2},9,cjs.Ease.quadInOut).wait(27).to({rotation:-4.4484},0).to({regX:90.9,regY:161.4,rotation:2.7612,x:122.65,y:247.95},10).wait(80).to({rotation:2.7612},0).to({regY:161.3,rotation:-5.175,x:121.55,y:248.15},9,cjs.Ease.quadInOut).wait(37).to({rotation:-5.175},0).to({regX:90.8,regY:161.2,rotation:6.5717,x:121.05,y:247.75},10,cjs.Ease.quadInOut).wait(136).to({rotation:6.5717},0).to({regX:91,regY:161.5,rotation:0,x:122.25,y:247.35},12,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({rotation:-7.4752,x:122.45,y:247.45},9,cjs.Ease.quadInOut).wait(78).to({startPosition:0},0).to({rotation:6.2548,x:121.7,y:246.85},9,cjs.Ease.quadInOut).wait(94).to({startPosition:0},0).to({regX:90.9,rotation:-4.2371,x:121.9,y:247.9},11,cjs.Ease.quadInOut).wait(47).to({rotation:-4.2371},0).to({regX:91,rotation:0,x:122.25,y:247.35},10,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(11).to({startPosition:0},0).to({rotation:4.4545,x:122,y:247.1},8,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({rotation:-8.2855,x:122.65,y:248.4},9,cjs.Ease.quadInOut).wait(55).to({rotation:-8.2855},0).to({rotation:3.1963,x:122.1,y:247.9},10,cjs.Ease.quadInOut).wait(60).to({rotation:3.1963},0).to({regY:161.4,rotation:-3.544,y:248.05},10,cjs.Ease.quadInOut).wait(41).to({rotation:-3.544},0).to({regY:161.5,rotation:0,x:122.25,y:247.35},12,cjs.Ease.quadInOut).wait(16).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(9).to({startPosition:0},0).to({rotation:4.4878,x:122,y:247.2},9,cjs.Ease.quadInOut).wait(36).to({startPosition:0},0).to({rotation:0,x:122.25,y:247.35},10,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(118));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(163.9,234,66.19999999999999,83.19999999999999);
// library properties:
lib.properties = {
	id: 'E4037BF1825D4A72A76E30C68389EE26',
	width: 309,
	height: 317,
	fps: 30,
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
an.compositions['E4037BF1825D4A72A76E30C68389EE26'] = {
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