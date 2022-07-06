(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes


(lib.wheels1 = function() {
	this.initialize(img.wheels1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,194);


(lib.wheels2 = function() {
	this.initialize(img.wheels2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,194);


(lib.wheels3 = function() {
	this.initialize(img.wheels3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,194);


(lib.wheels4 = function() {
	this.initialize(img.wheels4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,194);


// stage content:
(lib.Wheels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheels1();

	this.instance_1 = new lib.wheels2();

	this.instance_2 = new lib.wheels3();

	this.instance_3 = new lib.wheels4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106.5,97,213,194);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;