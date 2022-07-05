(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"main_animations_atlas_", frames: [[115,88,112,86],[115,176,47,47],[191,176,18,29],[164,203,20,20],[164,176,25,25],[115,0,112,86],[0,89,113,87],[0,0,113,87]]}
];


// symbols:



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["main_animations_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["main_animations_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["main_animations_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["main_animations_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["main_animations_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["main_animations_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["main_animations_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["main_animations_atlas_"];
	this.gotoAndStop(7);
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


(lib.PurpleBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PurpleBlock, new cjs.Rectangle(0,0,112,86), null);


(lib.Littlegear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-1,25,25);


(lib.LimeBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Box 2 copy
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LimeBlock, new cjs.Rectangle(0,0,112,86), null);


(lib.Handle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-14,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-4,20,20);


(lib.GreenBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GreenBlock, new cjs.Rectangle(0,0,113,87), null);


(lib.Crank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,29);


(lib.BlueBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Box 2 copy
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BlueBlock, new cjs.Rectangle(-1,-1,113,87), null);


(lib.BigGear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


(lib.PurpleBlockPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":6});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
		if (this.onAnimationEndCallback)
		{
			var cb = this.onAnimationEndCallback;
			this.onAnimationEndCallback = null;
			cb();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.PurpleBlock();
	this.instance.parent = this;
	this.instance.setTransform(54.5,37.7,0.8,1.14,0,0,0,54.6,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:54.1,regY:43.3,scaleX:1.18,scaleY:0.9,x:54.2,y:46.3},0).wait(2).to({regX:54.4,regY:43.1,scaleX:0.9,scaleY:1.06,x:54.4,y:40.7},0).wait(2).to({scaleX:1,scaleY:1,y:43.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.8,-11.4,89.6,98.1);


(lib.LimeBlockPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":6});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
		if (this.onAnimationEndCallback)
		{
			var cb = this.onAnimationEndCallback;
			this.onAnimationEndCallback = null;
			cb();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.LimeBlock();
	this.instance.parent = this;
	this.instance.setTransform(54.5,37.7,0.8,1.14,0,0,0,54.6,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:54.1,regY:43.3,scaleX:1.18,scaleY:0.9,x:54.2,y:46.3},0).wait(2).to({regX:54.4,regY:43.1,scaleX:0.9,scaleY:1.06,x:54.4,y:40.7},0).wait(2).to({scaleX:1,scaleY:1,y:43.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.8,-11.4,89.6,98.1);


(lib.GreenBlockPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":6});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
		if (this.onAnimationEndCallback)
		{
			var cb = this.onAnimationEndCallback;
			this.onAnimationEndCallback = null;
			cb();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.GreenBlock();
	this.instance.parent = this;
	this.instance.setTransform(54.5,37.7,0.8,1.14,0,0,0,54.6,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:54.1,regY:43.3,scaleX:1.18,scaleY:0.9,x:54.2,y:46.3},0).wait(2).to({regX:54.4,regY:43.1,scaleX:0.9,scaleY:1.06,x:54.4,y:40.7},0).wait(2).to({scaleX:1,scaleY:1,y:43.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.8,-11.4,90.4,99.2);


(lib.Gears = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
		if (this.onAnimationEndCallback)
		{
			var cb = this.onAnimationEndCallback;
			this.onAnimationEndCallback = null;
			cb();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 3
	this.instance = new lib.Handle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.5,45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[18.6,45.8,18.1,45.5,17.6,45.2,17.4,45,17.1,44.9,15.7,43.9,14.4,42.8,6.2,35.7,5.3,24.9,4.4,14.2,11.6,5.9,18.6,-2.3,29.3,-3.2,40.1,-4,48.4,3,56.7,10.1,57.5,20.9,58.4,31.6,51.3,39.9,44.2,48.2,33.4,49,25.6,49.7,19.1,46.1]}},24).wait(1));

	// Layer 4
	this.instance_1 = new lib.Crank("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.6,23.4,1,1,0,0,0,14.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},24).wait(1));

	// Layer 5
	this.instance_2 = new lib.BigGear("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(31.9,23.6,1,1,0,0,0,23.7,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:360},24).wait(1));

	// Layer 2
	this.instance_3 = new lib.Littlegear("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(56.8,47.1,1,1,0,0,0,12.6,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-720},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.5,0,65.7,61.8);


(lib.BlueBlockPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":6});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
		if (this.onAnimationEndCallback)
		{
			var cb = this.onAnimationEndCallback;
			this.onAnimationEndCallback = null;
			cb();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.BlueBlock();
	this.instance.parent = this;
	this.instance.setTransform(54.5,37.7,0.8,1.14,0,0,0,54.6,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:54.1,regY:43.3,scaleX:1.18,scaleY:0.9,x:54.2,y:46.3},0).wait(2).to({regX:54.4,regY:43.1,scaleX:0.9,scaleY:1.06,x:54.4,y:40.7},0).wait(2).to({scaleX:1,scaleY:1,y:43.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-12.6,90.4,99.2);


// stage content:
(lib.main_animations = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: 'BE87308C08704CA6869CD57449E63886',
	width: 1426,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/main_animations_atlas_.png", id:"main_animations_atlas_"}
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
an.compositions['BE87308C08704CA6869CD57449E63886'] = {
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