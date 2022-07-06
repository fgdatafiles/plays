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



(lib.SocialShareable11 = function() {
	this.initialize(img.SocialShareable11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,630);


(lib.theaters_white1 = function() {
	this.initialize(img.theaters_white1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,215);


(lib.TitleLogo = function() {
	this.initialize(img.TitleLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,400);// helper functions:

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


(lib.scene_shareable = function(mode,startPosition,loop,reversed) {
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
	this.txt_copy = new cjs.Text("© 2017 - 2021 Forestry Games Ltd. All Rights Reserved.\nHBO MaxTM is used under license.", "11px 'Century Gothic'", "#FFFFFF");
	this.txt_copy.name = "txt_copy";
	this.txt_copy.textAlign = "center";
	this.txt_copy.lineHeight = 10;
	this.txt_copy.lineWidth = 296;
	this.txt_copy.parent = this;
	this.txt_copy.setTransform(1047.9521,602.0001);

	this.txt_availability = new cjs.Text("AVAILABLE ON HBO MAX\n FOR 31 DAYS FROM THEATRICAL RELEASE", "11px 'Century Gothic'", "#FFFFFF");
	this.txt_availability.name = "txt_availability";
	this.txt_availability.textAlign = "center";
	this.txt_availability.lineHeight = 10;
	this.txt_availability.lineWidth = 296;
	this.txt_availability.parent = this;
	this.txt_availability.setTransform(750.1021,602);

	this.instance = new lib.theaters_white1();
	this.instance.setTransform(619.65,441.1,0.6999,0.6999);

	this.txt_title = new cjs.Text("THE DUEL", "32px 'CCExcelsius'", "#FFFFFF");
	this.txt_title.name = "txt_title";
	this.txt_title.textAlign = "center";
	this.txt_title.lineHeight = 40;
	this.txt_title.lineWidth = 538;
	this.txt_title.parent = this;
	this.txt_title.setTransform(903.5507,264);

	this.txt_score = new cjs.Text("SCORE: 9,850", "60px 'CCExcelsius'", "#FFFFFF");
	this.txt_score.name = "txt_score";
	this.txt_score.textAlign = "center";
	this.txt_score.lineHeight = 72;
	this.txt_score.lineWidth = 576;
	this.txt_score.parent = this;
	this.txt_score.setTransform(902.1787,357,1.0416,1);

	this.txt_msg = new cjs.Text("I WON PLAYING TOM!", "25px 'CCExcelsius'", "#FFFFFF");
	this.txt_msg.name = "txt_msg";
	this.txt_msg.textAlign = "center";
	this.txt_msg.lineHeight = 30;
	this.txt_msg.lineWidth = 600;
	this.txt_msg.parent = this;
	this.txt_msg.setTransform(904.2021,320.4);

	this.txt_button = new cjs.Text("TRY TO BEAT MY SCORE!", "60px 'CCExcelsius'", "#FFFFFF");
	this.txt_button.name = "txt_button";
	this.txt_button.textAlign = "center";
	this.txt_button.lineHeight = 72;
	this.txt_button.lineWidth = 992;
	this.txt_button.parent = this;
	this.txt_button.setTransform(897.7781,-69.5,0.5,0.5);

	this.instance_1 = new lib.TitleLogo();
	this.instance_1.setTransform(678.15,16,0.5902,0.5902);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.txt_button},{t:this.txt_msg},{t:this.txt_score},{t:this.txt_title},{t:this.instance},{t:this.txt_availability},{t:this.txt_copy}]}).wait(1));

	// background
	this.instance_2 = new lib.SocialShareable11();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene_shareable, new cjs.Rectangle(0,-70.5,1206.3,703.9), null);


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
	this.txt = new cjs.Text("PLAY", "40px 'CCExcelsius'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 48;
	this.txt.lineWidth = 428;
	this.txt.parent = this;
	this.txt.setTransform(213.9012,21.05);

	this.txt2 = new cjs.Text("LOADING", "20px 'CCExcelsius'", "#FFFFFF");
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


// stage content:
(lib.tomandjerry4 = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(95.5,441.5,1982.9,191.89999999999998);
// library properties:
lib.properties = {
	id: '6A454FA589CDD44C8194A5D1116158DD',
	width: 640,
	height: 1024,
	fps: 60,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"../media/images/SocialShareable11.png", id:"SocialShareable11"},
		{src:"../media/images/theaters_white1.png", id:"theaters_white1"},
		{src:"../media/images/TitleLogo.png", id:"TitleLogo"}
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