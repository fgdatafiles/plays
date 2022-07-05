(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.Recap_TJ = function() {
	this.initialize(img.Recap_TJ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,810);


(lib.SocialShareable = function() {
	this.initialize(img.SocialShareable);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1350);


(lib.SocialShareable02 = function() {
	this.initialize(img.SocialShareable02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,630);


(lib.theaters = function() {
	this.initialize(img.theaters);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1100,380);


(lib.theaters_white = function() {
	this.initialize(img.theaters_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1100,295);


(lib.TitleChar1 = function() {
	this.initialize(img.TitleChar1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,649);


(lib.TitleChar2 = function() {
	this.initialize(img.TitleChar2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,604);


(lib.TitleForeground = function() {
	this.initialize(img.TitleForeground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.TitleLogo = function() {
	this.initialize(img.TitleLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,490);


(lib.UIBackground = function() {
	this.initialize(img.UIBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.TitleTom = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TitleChar2();
	this.instance.setTransform(24.45,0,0.8989,0.8989);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.5,0,566.3,543);


(lib.TitleJerry = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TitleChar1();
	this.instance.setTransform(-107.95,-238.25,0.8759,0.8759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.9,-238.2,415.1,568.4);


(lib.SmallLogo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TitleLogo();
	this.instance.setTransform(0,-20,0.3265,0.3265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SmallLogo, new cjs.Rectangle(0,-20,160,160), null);


(lib.shareable_portrait = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// content
	this.instance = new lib.TitleLogo();
	this.instance.setTransform(285.15,539.95,1.0046,1.0046);

	this.txt_copyright = new cjs.Text("-", "bold 13px 'Century Gothic'", "#FFFFFF");
	this.txt_copyright.name = "txt_copyright";
	this.txt_copyright.textAlign = "center";
	this.txt_copyright.lineHeight = 18;
	this.txt_copyright.lineWidth = 666;
	this.txt_copyright.parent = this;
	this.txt_copyright.setTransform(540.7527,1316.85,1.5894,1.5894);

	this.instance_1 = new lib.theaters_white();
	this.instance_1.setTransform(265.8,1195.3,0.5,0.4997);

	this.txt_title = new cjs.Text("TUNE SQUAD PINBALL", "bold 34px 'Century Gothic'", "#3366CC");
	this.txt_title.name = "txt_title";
	this.txt_title.textAlign = "center";
	this.txt_title.lineHeight = 43;
	this.txt_title.lineWidth = 538;
	this.txt_title.parent = this;
	this.txt_title.setTransform(540.763,966.6,1.5894,1.5894);

	this.txt_score = new cjs.Text("SCORE: 000000", "bold 60px 'Century Gothic'", "#FF6120");
	this.txt_score.name = "txt_score";
	this.txt_score.textAlign = "center";
	this.txt_score.lineHeight = 73;
	this.txt_score.lineWidth = 1040;
	this.txt_score.parent = this;
	this.txt_score.setTransform(540.8,1042.75);

	this.txt_header = new cjs.Text("TRY TO BEAT MY SCORE!", "bold 40px 'Century Gothic'", "#FF6120");
	this.txt_header.name = "txt_header";
	this.txt_header.textAlign = "center";
	this.txt_header.lineHeight = 49;
	this.txt_header.lineWidth = 992;
	this.txt_header.parent = this;
	this.txt_header.setTransform(540.8062,1127.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_header},{t:this.txt_score},{t:this.txt_title},{t:this.instance_1},{t:this.txt_copyright},{t:this.instance}]}).wait(1));

	// background
	this.instance_2 = new lib.SocialShareable();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shareable_portrait, new cjs.Rectangle(0,0,1080,1350), null);


(lib.shareable_landscape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.TitleLogo();
	this.instance.setTransform(743.8,-27.15,0.665,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// content
	this.instance_1 = new lib.theaters_white();
	this.instance_1.setTransform(635,436,0.5,0.4997);

	this.txt_title = new cjs.Text("TUNE SQUAD PINBALL", "bold 36px 'Century Gothic'", "#3366CC");
	this.txt_title.name = "txt_title";
	this.txt_title.textAlign = "center";
	this.txt_title.lineHeight = 46;
	this.txt_title.lineWidth = 579;
	this.txt_title.parent = this;
	this.txt_title.setTransform(900.0462,265.65);

	this.txt_score = new cjs.Text("SCORE: 000000", "bold 55px 'Century Gothic'", "#FF6120");
	this.txt_score.name = "txt_score";
	this.txt_score.textAlign = "center";
	this.txt_score.lineHeight = 67;
	this.txt_score.lineWidth = 574;
	this.txt_score.parent = this;
	this.txt_score.setTransform(902.05,317.1);

	this.txt_header = new cjs.Text("TRY TO BEAT MY SCORE!", "32px 'Century Gothic'", "#FF6120");
	this.txt_header.name = "txt_header";
	this.txt_header.textAlign = "center";
	this.txt_header.lineHeight = 38;
	this.txt_header.lineWidth = 574;
	this.txt_header.parent = this;
	this.txt_header.setTransform(906.7438,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_header},{t:this.txt_score},{t:this.txt_title},{t:this.instance_1}]}).wait(1));

	// background
	this.instance_2 = new lib.SocialShareable02();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shareable_landscape, new cjs.Rectangle(0,-27.1,1200,657.1), null);


(lib.scene_level = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.txt_mission = new cjs.Text("-", "30px 'Century Gothic'", "#FFFFFF");
	this.txt_mission.name = "txt_mission";
	this.txt_mission.textAlign = "center";
	this.txt_mission.lineHeight = 36;
	this.txt_mission.lineWidth = 636;
	this.txt_mission.parent = this;
	this.txt_mission.setTransform(320,491.85);

	this.txt = new cjs.Text("LEVEL 1", "bold 44px 'Century Gothic'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 53;
	this.txt.lineWidth = 636;
	this.txt.parent = this;
	this.txt.setTransform(320,429);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.txt_mission}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene_level, new cjs.Rectangle(0,427,640,108.20000000000005), null);


(lib.recap_TJ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Recap_TJ();
	this.instance.setTransform(-189.6,-208.05,0.5926,0.5926);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-208,379.29999999999995,480);


(lib.recap_foreground = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("Eg+fABQIAAifMB8/AAAIAACfg");
	this.shape.setTransform(400,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg+fA+gMAAAh8/MB8/AAAMAAAB8/g");
	this.shape_1.setTransform(400,412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,812);


(lib.messaging = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.theaters();
	this.instance.setTransform(0,0,0.4998,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.messaging, new cjs.Rectangle(0,0,549.9,190), null);


(lib.font_loader = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.txt = new cjs.Text("PLAY", "bold 40px 'Century Gothic'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 49;
	this.txt.lineWidth = 428;
	this.txt.parent = this;
	this.txt.setTransform(213.9012,21.05);

	this.txt2 = new cjs.Text("LOADING", "20px 'Century Gothic'", "#FFFFFF");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 26;
	this.txt2.lineWidth = 418;
	this.txt2.parent = this;
	this.txt2.setTransform(210.95,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt2},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.font_loader, new cjs.Rectangle(-2.1,-5,432,88.1), null);


(lib.mc_dummy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);


(lib.ScrollButtons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {norm:0,over:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALFmIidlmICdllICIAAIidFlICdFmg");
	this.shape.setTransform(-1.575,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AjTGcQhYhYAAh8IAAmPQAAh8BYhYQBYhYB7AAQB8AABYBYQBYBYAAB8IAAGPQAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7BE1FF","#0088D1"],[0,1],0,-51.4,0,15.1).s().p("Aj3HAQhmhnAAiRIAAmPQAAiRBmhnQBnhmCQAAQCRAABmBmQBnBnAACRIAAGPQAACRhnBnQhmBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

	// Layer_7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#26567E").s().p("Aj3HAQhmhnAAiRIAAmPQAAiRBmhnQBnhmCQAAQCRAABmBmQBnBnAACRIAAGPQAACRhnBnQhmBmiRAAQiQAAhnhmg");
	this.shape_3.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-55,70,115);


(lib.mc_mutelines = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,2,1).p("AAJhjQBBBjhBBlAgjgeQAWAmgWAo");
	this.shape.setTransform(3.5923,10.0469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_mutelines, new cjs.Rectangle(-2,-2,11.2,24.2), null);


(lib.bFullscreenOff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIHTImkmkQgUgTAAgcQAAgbAUgTIGkmkQATgUAZALQAaAKAAAcIAAD9IE2AAQAgAAAWAXQAXAWAAAfIAADZQAAAfgXAXQgWAWggAAIk2AAIAAD9QAAAcgaAKQgJAEgIAAQgPAAgMgNg");
	this.shape.setTransform(24.098,6.5206,0.1919,0.1919,-45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIHTImkmkQgUgTAAgcQAAgbAUgTIGkmkQATgUAZALQAaAKAAAcIAAD9IE2AAQAgAAAWAXQAXAWAAAfIAADZQAAAfgXAXQgWAWggAAIk2AAIAAD9QAAAcgaAKQgJAEgIAAQgPAAgMgNg");
	this.shape_1.setTransform(6.502,23.9794,0.1919,0.1919,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bFullscreenOff, new cjs.Rectangle(-1.4,-1.4,33.5,33.4), null);


(lib.bFullScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIHTImkmkQgUgTAAgcQAAgbAUgTIGkmkQATgUAZALQAaAKAAAcIAAD9IE2AAQAgAAAWAXQAXAWAAAfIAADZQAAAfgXAXQgWAWggAAIk2AAIAAD9QAAAcgaAKQgJAEgIAAQgPAAgMgNg");
	this.shape.setTransform(24.102,6.4794,0.1919,0.1919,135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIHTImkmkQgUgTAAgcQAAgbAUgTIGkmkQATgUAZALQAaAKAAAcIAAD9IE2AAQAgAAAWAXQAXAWAAAfIAADZQAAAfgXAXQgWAWggAAIk2AAIAAD9QAAAcgaAKQgJAEgIAAQgPAAgMgNg");
	this.shape_1.setTransform(6.498,24.0206,0.1919,0.1919,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bFullScreen, new cjs.Rectangle(0,0,30.6,30.5), null);


(lib.b_twitter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkzDBIAfACQBXAABFg2QgpAAgggZQgggZgNglQAMACAMAAQASAAAPgFQgqgIgfgjQgcgjAAgtIAAgCQAdARAdgBQgagQgQgcQgPgcAAggQAAgiARgeQAxA8BBAhQBEAjBPAEQgEgQAAgNQAAgzAlgmQAlglA0AAQAYAAAaALQAXAJASATQAugIAjgWQgOAtgqAZQAmgDAjgRQgbAngkAbIAAAQQAABCgYA8QgYA/gsA0QhoB2iigBQhoAAhag5g");
	this.shape.setTransform(0.0337,0.0377,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AhjEsQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAIDHAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(-0.0178,0,1.0001,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7BE1FF","#0088D1"],[0,1],130,-37,130,65).s().p("AhjFeQiRAAhmhmQhnhnAAiRQAAiQBnhmQBmhnCRAAIDHAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAg");
	this.shape_2.setTransform(-0.019,0,1.0002,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#26567E").s().p("AhjFeQiRAAhmhmQhnhnAAiRQAAiQBnhmQBmhnCRAAIDHAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAg");
	this.shape_3.setTransform(-0.0171,4,1.0001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b_twitter, new cjs.Rectangle(-45,-35,90,74), null);


(lib.b_share = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"norm":0,"over":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}
	this.frame_1 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_6
	this.txt = new cjs.Text("SHARE", "bold 36px 'Century Gothic'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 44;
	this.txt.lineWidth = 280;
	this.txt.parent = this;
	this.txt.setTransform(0.0455,-21.25);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(2));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("A13EsQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAMArvAAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAg");
	this.shape.setTransform(0.0001,0,1.0001,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7BE1FF","#0088D1"],[0,1],0,-37,0,65).s().p("A12FeQiSAAhmhmQhmhnAAiRQAAiQBmhmQBmhnCSAAMAruAAAQCQAABnBnQBmBmAACQQAACRhmBnQhnBmiQAAg");
	this.shape_1.setTransform(0.0008,0,1.0002,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#26567E").s().p("A12FeQiSAAhmhmQhmhnAAiRQAAiQBmhmQBmhnCSAAMAruAAAQCQAABnBnQBmBmAACQQAACRhmBnQhnBmiQAAg");
	this.shape_2.setTransform(0.0007,4,1.0001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.9,-35,349.9,74);


(lib.b_resumegame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"norm":0,"over":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}
	this.frame_1 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_6
	this.txt = new cjs.Text("-", "bold 22px 'Century Gothic'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 27;
	this.txt.lineWidth = 166;
	this.txt.parent = this;
	this.txt.setTransform(122.1,10.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBdIhshOQgGgGAAgGQgBgFAGgFIBrhVQAFgFAFADQADABAAAIIABAsQAjALAZgDQAYgDAogZQgYA2gXAQQgYAQgTAHIghAKIAAAsQAAAHgDACIgEABQgCAAgEgDg");
	this.shape.setTransform(23.0979,25.5154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(2));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Au/D6QiMAAAAiMIAAjbQAAiMCMAAId/AAQCMAAAACMIAADbQAACMiMAAg");
	this.shape_1.setTransform(110,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,50);


(lib.b_play_lg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"norm":0,"over":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}
	this.frame_1 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_6
	this.txt = new cjs.Text("PLAY", "bold 36px 'Century Gothic'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 44;
	this.txt.lineWidth = 280;
	this.txt.parent = this;
	this.txt.setTransform(3.9955,-22);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("A13EsQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAMArvAAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAg");
	this.shape.setTransform(0.0001,0,1.0001,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7BE1FF","#0088D1"],[0,1],0,-37,0,65).s().p("A12FeQiSAAhmhmQhmhnAAiRQAAiQBmhmQBmhnCSAAMAruAAAQCQAABnBnQBmBmAACQQAACRhmBnQhnBmiQAAg");
	this.shape_1.setTransform(0.0008,0,1.0002,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#26567E").s().p("A12FeQiSAAhmhmQhmhnAAiRQAAiQBmhmQBmhnCSAAMAruAAAQCQAABnBnQBmBmAACQQAACRhmBnQhnBmiQAAg");
	this.shape_2.setTransform(0.0007,4,1.0001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.9,-35,349.9,74);


(lib.b_play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"norm":0,"over":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}
	this.frame_1 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_10
	this.txt = new cjs.Text("PLAY", "bold 50px 'Century Gothic'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 61;
	this.txt.lineWidth = 299;
	this.txt.parent = this;
	this.txt.setTransform(-0.0045,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(2));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AzhHCQi6AAiEiEQiEiEAAi6QAAi5CEiFQCEiDC6AAMAnDAAAQC6AACECDQCECFAAC5QAAC6iECEQiECEi6AAg");
	this.shape.setTransform(0.0501,0,1.0001,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7BE1FF","#0088D1"],[0,1],0,-52,0,50).s().p("AzhH0QjOAAiTiTQiSiSAAjPQAAjOCSiSQCTiTDOAAMAnDAAAQDOAACTCTQCTCSgBDOQABDPiTCSQiTCTjOAAg");
	this.shape_1.setTransform(0.0008,0,1.0002,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	// Layer_9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#26567E").s().p("AzhH0QjOAAiTiTQiSiSAAjPQAAjOCSiSQCTiTDOAAMAnDAAAQDOAACTCTQCTCSgBDOQABDPiTCSQiTCTjOAAg");
	this.shape_2.setTransform(0.0007,5,1.0001,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.9,-50,349.9,105);


(lib.b_pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"norm":0,"over":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBkQgMAAgKgJQgIgJAAgMIAAiLQAAgMAIgJQAKgJAMAAIATAAQAMAAAJAJQAJAJAAAMIAACLQAAAMgJAJQgJAJgMAAg");
	this.shape.setTransform(33.5,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBkQgMAAgKgJQgIgJAAgMIAAiLQAAgMAIgJQAKgJAMAAIATAAQAMAAAJAJQAJAJAAAMIAACLQAAAMgJAJQgJAJgMAAg");
	this.shape_1.setTransform(18.5,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhFj5ICLAAQBLAAA0A0QA1A1AABLIAACLQAABLg1A0Qg0A1hLAAIiLAAQhLAAg1g1Qg0g0AAhLIAAiLQAAhLA0g1QA1g0BLAAg");
	this.shape_2.setTransform(25.506,25.5,0.9992,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.098)").s().p("AhFD6QhLAAg1g1Qg0g0AAhLIAAiLQAAhKA0g1QA1g1BLAAICLAAQBLAAA0A1QA1A1AABKIAACLQAABLg1A0Qg0A1hLAAg");
	this.shape_3.setTransform(25.506,25.5,0.9992,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AhFD6QhLAAg1g1Qg0g0AAhLIAAiLQAAhKA0g1QA1g1BLAAICLAAQBLAAA0A1QA1A1AABKIAACLQAABLg1A0Qg0A1hLAAg");
	this.shape_4.setTransform(25.506,25.5,0.9992,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,53,53);


(lib.b_instagram = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAXQgJgKAAgNQAAgNAJgJQAKgKAMAAQAOAAAJAKQAJAJAAANQAAANgJAKQgJAJgOAAQgMAAgKgJg");
	this.shape.setTransform(13.8997,-12.7111,0.7197,0.7197);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah0B1QgwgxAAhEQAAhDAwgxQAxgwBDAAQBEAAAxAwQAwAxAABDQAABEgwAxQgxAwhEAAQhDAAgxgwgAhJhJQgfAeAAArQAAAsAfAeQAeAfArAAQAsAAAegfQAfgeAAgsQAAgrgfgeQgegfgsAAQgrAAgeAfg");
	this.shape_1.setTransform(1.285,-0.1858,0.7197,0.7197);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiGE7Qi0AAAAi0IAAkNQAAi0C0AAIENAAQC0AAAAC0IAAENQAAC0i0AAgAj+iGIAAENQAAB4B4AAIENAAQB4AAAAh4IAAkNQAAh4h4AAIkNAAQh4AAAAB4g");
	this.shape_2.setTransform(1.2867,-0.458,0.7197,0.7197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AhjEsQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAIDHAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAg");
	this.shape_3.setTransform(-0.0178,0,1.0001,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#7BE1FF","#0088D1"],[0,1],130,-37,130,65).s().p("AhjFeQiRAAhmhmQhnhnAAiRQAAiQBnhmQBmhnCRAAIDHAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAg");
	this.shape_4.setTransform(-0.019,0,1.0002,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#26567E").s().p("AhjFeQiRAAhmhmQhnhnAAiRQAAiQBnhmQBmhnCRAAIDHAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAg");
	this.shape_5.setTransform(-0.0171,4,1.0001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b_instagram, new cjs.Rectangle(-45,-35,90,74), null);


(lib.b_howto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"norm":0,"over":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}
	this.frame_1 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRB3QgHgEgFgEQgGgFgDgGQgCgHAAgGQAAgHACgGQADgHAFgFQAFgFAHgDQAHgDAJAAQAJAAAHACQAHADAFAFQAGAFADAHQADAGAAAIQAAAOgLAKQgLALgSAAQgIAAgHgDgAgfAqIgBgbQAAgIAFgHQAEgGAFgGIANgLIAMgKIAKgJQAEgFAAgFQAAgFgCgDQgCgDgDgCQgEgCgFAAIgIgBQgFAAgGACQgGADgGAEIgLAJQgGAFgEAFIglglQASgVAXgLQAWgMAZAAQARAAAPAFQAOAEALAJQALAJAGANQAHAMAAASQAAALgEAIQgEAJgGAGQgGAHgHAGIgNAIIgKAKQgEAEAAAFIAAATg");
	this.shape.setTransform(22.425,25.025);

	this.txt = new cjs.Text("HELP", "bold 22px 'Century Gothic'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 27;
	this.txt.lineWidth = 166;
	this.txt.parent = this;
	this.txt.setTransform(122.1,10.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.shape}]}).wait(2));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Au/D6QiMAAAAiMIAAjbQAAiMCMAAId/AAQCMAAAACMIAADbQAACMiMAAg");
	this.shape_1.setTransform(110,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,50);


(lib.b_facebook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWGCQgLgBAAgKIAAl0QAAgIgMgDIgzAAQgMABAAgLIAAhoQAAgJAMgBIAyAAQANAAAAgMIAAhEQgChHAfgwQAbgtBAgJICKAAQAMABAAAKIAABjQAAAMgMAAIhDAAQgoACgDAxIAABEQABAMAPAAIBZAAQALABgBAJIAABoQABALgLgBIheAAQgIADgDAHIAAF1QABAKgMABg");
	this.shape.setTransform(0,-0.05,0.55,0.55,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AhjEsQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAIDHAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(-0.0178,0,1.0001,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7BE1FF","#0088D1"],[0,1],130,-37,130,65).s().p("AhjFeQiRAAhmhmQhnhnAAiRQAAiQBnhmQBmhnCRAAIDHAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAg");
	this.shape_2.setTransform(-0.019,0,1.0002,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#26567E").s().p("AhjFeQiRAAhmhmQhnhnAAiRQAAiQBnhmQBmhnCRAAIDHAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAg");
	this.shape_3.setTransform(-0.0171,4,1.0001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b_facebook, new cjs.Rectangle(-45,-35,90,74), null);


(lib.b_exitgame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"norm":0,"over":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}
	this.frame_1 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.txt = new cjs.Text("-", "bold 22px 'Century Gothic'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 27;
	this.txt.lineWidth = 166;
	this.txt.parent = this;
	this.txt.setTransform(122.1,10.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAjIg5A6IgkgjIA7g6Ig7g5IAkgjIA5A6IA7g7IAjAkIg7A5IA7A6IgjAkg");
	this.shape.setTransform(24.2,23.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Au/D6QiMAAAAiMIAAjbQAAiMCMAAId/AAQCMAAAACMIAADbQAACMiMAAg");
	this.shape_1.setTransform(110,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,50);


(lib.b_download = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AimAcIBLAAIAAhqIC4AAIAABqIBKAAIinDGgAhbiGIAAhbIC4AAIAABbg");
	this.shape.setTransform(-0.05,-0.05,1,1,0,0,0,-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AhjEsQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAIDHAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(-0.0178,0,1.0001,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7BE1FF","#0088D1"],[0,1],130,-37,130,65).s().p("AhjFeQiRAAhmhmQhnhnAAiRQAAiQBnhmQBmhnCRAAIDHAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAg");
	this.shape_2.setTransform(-0.019,0,1.0002,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#26567E").s().p("AhjFeQiRAAhmhmQhnhnAAiRQAAiQBnhmQBmhnCRAAIDHAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAg");
	this.shape_3.setTransform(-0.0171,4,1.0001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b_download, new cjs.Rectangle(-45,-35,90,74), null);


(lib.TitleForeground_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TitleForeground();
	this.instance.setTransform(-320,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,0,640,768);


(lib.mcTitleLogo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TitleLogo();
	this.instance.setTransform(-340,-460,1.4695,1.4695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcTitleLogo, new cjs.Rectangle(-340,-460,720.1,720.1), null);


(lib.background_title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.UIBackground();
	this.instance.setTransform(-320,-568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_title, new cjs.Rectangle(-320,-568,640,1136), null);


(lib.background_recap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.UIBackground();
	this.instance.setTransform(-320,-568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_recap, new cjs.Rectangle(-320,-568,640,1136), null);


(lib.background_general = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.UIBackground();
	this.instance.setTransform(-320,-568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_general, new cjs.Rectangle(-320,-568,640,1136), null);


(lib.scene_recap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt_processing
	this.txt_processing = new cjs.Text("PROCESSING...", "30px 'Century Gothic'", "#000066");
	this.txt_processing.name = "txt_processing";
	this.txt_processing.textAlign = "center";
	this.txt_processing.lineHeight = 36;
	this.txt_processing.lineWidth = 636;
	this.txt_processing.parent = this;
	this.txt_processing.setTransform(320,802.8);

	this.timeline.addTween(cjs.Tween.get(this.txt_processing).wait(1));

	// b_download
	this.b_download = new lib.b_download();
	this.b_download.name = "b_download";
	this.b_download.setTransform(483,859,1,1,0,0,0,0,39);

	this.b_instagram = new lib.b_instagram();
	this.b_instagram.name = "b_instagram";
	this.b_instagram.setTransform(374,859,1,1,0,0,0,0,39);

	this.b_twitter = new lib.b_twitter();
	this.b_twitter.name = "b_twitter";
	this.b_twitter.setTransform(266,859,1,1,0,0,0,0,39);

	this.b_facebook = new lib.b_facebook();
	this.b_facebook.name = "b_facebook";
	this.b_facebook.setTransform(158,859,1,1,0,0,0,0,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b_facebook},{t:this.b_twitter},{t:this.b_instagram},{t:this.b_download}]}).wait(1));

	// b_share
	this.b_share = new lib.b_share();
	this.b_share.name = "b_share";
	this.b_share.setTransform(324.05,858,1,1,0,0,0,0,39);

	this.timeline.addTween(cjs.Tween.get(this.b_share).wait(1));

	// logo
	this.logo = new lib.SmallLogo();
	this.logo.name = "logo";
	this.logo.setTransform(320,6,1,1,0,0,0,75,0);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// misc
	this.TitleMessaging = new lib.messaging();
	this.TitleMessaging.name = "TitleMessaging";
	this.TitleMessaging.setTransform(316.9,1058.25,1,1,0,0,0,274.9,190);

	this.txt_score = new cjs.Text("35000", "bold 60px 'Century Gothic'");
	this.txt_score.name = "txt_score";
	this.txt_score.textAlign = "center";
	this.txt_score.lineHeight = 73;
	this.txt_score.lineWidth = 494;
	this.txt_score.parent = this;
	this.txt_score.setTransform(317.0988,609.15);

	this.txt_hdr = new cjs.Text("YOUR SCORE:", "32px 'Century Gothic'");
	this.txt_hdr.name = "txt_hdr";
	this.txt_hdr.textAlign = "center";
	this.txt_hdr.lineHeight = 38;
	this.txt_hdr.lineWidth = 494;
	this.txt_hdr.parent = this;
	this.txt_hdr.setTransform(317.0988,566.35);

	this.b_play = new lib.b_play_lg();
	this.b_play.name = "b_play";
	this.b_play.setTransform(317.1,762,1,1,0,0,0,0,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b_play},{t:this.txt_hdr},{t:this.txt_score},{t:this.TitleMessaging}]}).wait(1));

	// panel
	this.RecapForeground = new lib.recap_foreground();
	this.RecapForeground.name = "RecapForeground";
	this.RecapForeground.setTransform(326,543.95,1,1,0,0,0,400,0);

	this.timeline.addTween(cjs.Tween.get(this.RecapForeground).wait(1));

	// tom
	this.RecapJerry = new lib.recap_TJ();
	this.RecapJerry.name = "RecapJerry";
	this.RecapJerry.setTransform(320,369);

	this.timeline.addTween(cjs.Tween.get(this.RecapJerry).wait(1));

	// bg
	this.background = new lib.background_recap();
	this.background.name = "background";
	this.background.setTransform(320,568);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene_recap, new cjs.Rectangle(-74,-14,800,1370), null);


(lib.scene_instructions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.TitleMessaging = new lib.messaging();
	this.TitleMessaging.name = "TitleMessaging";
	this.TitleMessaging.setTransform(316.9,1028.25,1,1,0,0,0,274.9,190);

	this.logo = new lib.SmallLogo();
	this.logo.name = "logo";
	this.logo.setTransform(325,6,1,1,0,0,0,80,0);

	this.b_play = new lib.b_play();
	this.b_play.name = "b_play";
	this.b_play.setTransform(324.1,829.15,0.821,0.821,0,0,0,0.1,56.1);

	this.b_next_image = new lib.ScrollButtons();
	this.b_next_image.name = "b_next_image";
	this.b_next_image.setTransform(631.15,480.2,1,1,0,0,180,-35.1,0.1);

	this.b_prev_image = new lib.ScrollButtons();
	this.b_prev_image.name = "b_prev_image";
	this.b_prev_image.setTransform(11.1,480.2,1,1,0,0,0,-35.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b_prev_image},{t:this.b_next_image},{t:this.b_play},{t:this.logo},{t:this.TitleMessaging}]}).wait(1));

	// Layer_4
	this.background = new lib.background_general();
	this.background.name = "background";
	this.background.setTransform(320,509.5);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene_instructions, new cjs.Rectangle(0,-58.5,640,1136), null);


(lib.popup_pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.b_help = new lib.b_howto();
	this.b_help.name = "b_help";
	this.b_help.setTransform(-20,-69.5,1,1,0,0,0,90,22);

	this.b_resume = new lib.b_resumegame();
	this.b_resume.name = "b_resume";
	this.b_resume.setTransform(-20,63.5,1,1,0,0,0,90,22);

	this.b_exit = new lib.b_exitgame();
	this.b_exit.name = "b_exit";
	this.b_exit.setTransform(-20,-3,1,1,0,0,0,90,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b_exit},{t:this.b_resume},{t:this.b_help}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.popup_pause, new cjs.Rectangle(-110,-91.5,220,183), null);


(lib.GameTitle = function(mode,startPosition,loop,reversed) {
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
	this.txt = new cjs.Text("TUNE SQUAD PINBALL", "bold 34px 'Century Gothic'", "#3366CC");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 454;
	this.txt.parent = this;
	this.txt.setTransform(9.95,68.75);

	this.logo = new lib.mcTitleLogo();
	this.logo.name = "logo";
	this.logo.setTransform(0,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.1,-240,458.1,360);


(lib.b_mute = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"norm":0,"over":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABICVIhWhXIhEAAQgHABgFgFQgFgFAAgIIAAhaQAAgHAFgEQAFgGAHAAIBEAAIBWhUQAFgGAGAAQAIAAAFAGQAEAEAAAGIAAEQQAAAHgEAGQgFAEgIAAQgGAAgFgEg");
	this.shape.setTransform(17.5,25);

	this.mc_mutelines = new lib.mc_mutelines();
	this.mc_mutelines.name = "mc_mutelines";
	this.mc_mutelines.setTransform(36.7,27.55,1,1,0,0,0,4.8,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_mutelines},{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhFj5ICLAAQBLAAA0A0QA1A1AABLIAACLQAABLg1A0Qg0A1hLAAIiLAAQhLAAg1g1Qg0g0AAhLIAAiLQAAhLA0g1QA1g0BLAAg");
	this.shape_1.setTransform(25.506,25.5,0.9992,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.098)").s().p("AhFD6QhLAAg1g1Qg0g0AAhLIAAiLQAAhKA0g1QA1g1BLAAICLAAQBLAAA0A1QA1A1AABKIAACLQAABLg1A0Qg0A1hLAAg");
	this.shape_2.setTransform(25.506,25.5,0.9992,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.2)").s().p("AhFD6QhLAAg1g1Qg0g0AAhLIAAiLQAAhKA0g1QA1g1BLAAICLAAQBLAAA0A1QA1A1AABKIAACLQAABLg1A0Qg0A1hLAAg");
	this.shape_3.setTransform(25.506,25.5,0.9992,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,53,53);


(lib.b_fullscreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"norm":0,"over":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 5
	this.mc_on = new lib.bFullscreenOff();
	this.mc_on.name = "mc_on";
	this.mc_on.setTransform(13.4,16.1,1,1,0,0,0,3.7,6.1);
	new cjs.ButtonHelper(this.mc_on, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.mc_on).wait(2));

	// Layer 3
	this.mc_off = new lib.bFullScreen();
	this.mc_off.name = "mc_off";
	this.mc_off.setTransform(11.3,10,1,1,0,0,0,1.6,0);

	this.timeline.addTween(cjs.Tween.get(this.mc_off).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhFj5ICLAAQBLAAA0A0QA1A1AABLIAACLQAABLg1A0Qg0A1hLAAIiLAAQhLAAg1g1Qg0g0AAhLIAAiLQAAhLA0g1QA1g0BLAAg");
	this.shape.setTransform(25.506,25.5,0.9992,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("AhFD6QhLAAg1g1Qg0g0AAhLIAAiLQAAhKA0g1QA1g1BLAAICLAAQBLAAA0A1QA1A1AABKIAACLQAABLg1A0Qg0A1hLAAg");
	this.shape_1.setTransform(25.506,25.5,0.9992,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AhFD6QhLAAg1g1Qg0g0AAhLIAAiLQAAhKA0g1QA1g1BLAAICLAAQBLAAA0A1QA1A1AABKIAACLQAABLg1A0Qg0A1hLAAg");
	this.shape_2.setTransform(25.506,25.5,0.9992,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,53,53);


(lib.scene_title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// b_play
	this.b_play = new lib.b_play();
	this.b_play.name = "b_play";
	this.b_play.setTransform(324.15,828.15,0.8207,0.8207,0,0,0,0.1,56.2);

	this.timeline.addTween(cjs.Tween.get(this.b_play).wait(1));

	// GameTitle
	this.GameTitle = new lib.GameTitle();
	this.GameTitle.name = "GameTitle";
	this.GameTitle.setTransform(316,627.65);

	this.timeline.addTween(cjs.Tween.get(this.GameTitle).wait(1));

	// messaging
	this.TitleMessaging = new lib.messaging();
	this.TitleMessaging.name = "TitleMessaging";
	this.TitleMessaging.setTransform(316.9,1028.25,1,1,0,0,0,274.9,190);

	this.timeline.addTween(cjs.Tween.get(this.TitleMessaging).wait(1));

	// TitleJerry
	this.TitleJerry = new lib.TitleJerry();
	this.TitleJerry.name = "TitleJerry";
	this.TitleJerry.setTransform(310.05,359.95,1,1,0,0,0,123.4,112.2);

	this.timeline.addTween(cjs.Tween.get(this.TitleJerry).wait(1));

	// TitleForeground
	this.TitleForeground = new lib.TitleForeground_1();
	this.TitleForeground.name = "TitleForeground";
	this.TitleForeground.setTransform(320,437,1,1,0,0,0,0,111);

	this.timeline.addTween(cjs.Tween.get(this.TitleForeground).wait(1));

	// TitleTom
	this.TitleTom = new lib.TitleTom();
	this.TitleTom.name = "TitleTom";
	this.TitleTom.setTransform(317.15,0,1,1,0,0,0,307.6,0);

	this.timeline.addTween(cjs.Tween.get(this.TitleTom).wait(1));

	// background
	this.background = new lib.background_title();
	this.background.name = "background";
	this.background.setTransform(320,568);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene_title, new cjs.Rectangle(0,0,640,1136), null);


(lib.scene_mute_panel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.b_pause = new lib.b_pause();
	this.b_pause.name = "b_pause";
	this.b_pause.setTransform(0,118);

	this.b_fullscreen = new lib.b_fullscreen();
	this.b_fullscreen.name = "b_fullscreen";
	this.b_fullscreen.setTransform(0,59);

	this.b_mute = new lib.b_mute();
	this.b_mute.name = "b_mute";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b_mute},{t:this.b_fullscreen},{t:this.b_pause}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene_mute_panel, new cjs.Rectangle(-1,-1,53,171), null);


// stage content:
(lib.spacejam = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1416.5,1356);
// library properties:
lib.properties = {
	id: '6A454FA589CDD44C8194A5D1116158DD',
	width: 640,
	height: 1024,
	fps: 60,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"media/images/Recap_TJ.png", id:"Recap_TJ"},
		{src:"media/images/SocialShareable.jpg", id:"SocialShareable"},
		{src:"media/images/SocialShareable02.jpg", id:"SocialShareable02"},
		{src:"media/images/theaters.png", id:"theaters"},
		{src:"media/images/theaters_white.png", id:"theaters_white"},
		{src:"media/images/TitleChar1.png", id:"TitleChar1"},
		{src:"media/images/TitleChar2.png", id:"TitleChar2"},
		{src:"media/images/TitleForeground.png", id:"TitleForeground"},
		{src:"media/images/TitleLogo.png", id:"TitleLogo"},
		{src:"media/images/UIBackground.jpg", id:"UIBackground"}
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
an.compositions['6A454FA589CDD44C8194A5D1116158DD'] = {
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