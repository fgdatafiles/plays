(function (lib, img, cjs, ss) {

var p;

lib.properties = {
	width: 250,
	height: 250,
	fps: 24
};

(lib.duststorm01 = function() {
	this.initialize(img.duststorm01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.duststorm02 = function() {
	this.initialize(img.duststorm02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.duststorm03 = function() {
	this.initialize(img.duststorm03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.duststorm04 = function() {
	this.initialize(img.duststorm04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.duststorm05 = function() {
	this.initialize(img.duststorm05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.duststorm06 = function() {
	this.initialize(img.duststorm06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


// stage content:
(lib.DustStorm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.duststorm01();

	this.instance_1 = new lib.duststorm02();

	this.instance_2 = new lib.duststorm03();

	this.instance_3 = new lib.duststorm04();

	this.instance_4 = new lib.duststorm05();

	this.instance_5 = new lib.duststorm06();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,125,250,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;