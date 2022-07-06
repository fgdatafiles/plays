(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes



(lib.speedboost01 = function() {
	this.initialize(img.speedboost01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


(lib.speedboost02 = function() {
	this.initialize(img.speedboost02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


(lib.speedboost03 = function() {
	this.initialize(img.speedboost03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


(lib.speedboost04 = function() {
	this.initialize(img.speedboost04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


(lib.speedboost05 = function() {
	this.initialize(img.speedboost05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


(lib.speedboost06 = function() {
	this.initialize(img.speedboost06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


(lib.speedboost07 = function() {
	this.initialize(img.speedboost07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


(lib.speedboost08 = function() {
	this.initialize(img.speedboost08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


(lib.speedboost09 = function() {
	this.initialize(img.speedboost09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


(lib.speedboost10 = function() {
	this.initialize(img.speedboost10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,65);


// stage content:
(lib.SpeedBoost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.speedboost01();

	this.instance_1 = new lib.speedboost02();

	this.instance_2 = new lib.speedboost03();

	this.instance_3 = new lib.speedboost04();

	this.instance_4 = new lib.speedboost05();

	this.instance_5 = new lib.speedboost06();

	this.instance_6 = new lib.speedboost07();

	this.instance_7 = new lib.speedboost08();

	this.instance_8 = new lib.speedboost09();

	this.instance_9 = new lib.speedboost10();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98,32.5,196,65);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;