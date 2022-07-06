(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var MovieClip = cjs.MovieClip;
var Bitmap = cjs.Bitmap;
var Tween = cjs.Tween;
var Rectangle = cjs.Rectangle;
var Shape = cjs.Shape;

// library properties:




// symbols:



(lib.Rockz1 = function() {
	this.initialize(img.Rockz1);
}).prototype = p = new Bitmap();
p.nominalBounds = new Rectangle(0,0,159,179);


(lib.Rockz2 = function() {
	this.initialize(img.Rockz2);
}).prototype = p = new Bitmap();
p.nominalBounds = new Rectangle(0,0,169,169);


(lib.Rockz3 = function() {
	this.initialize(img.Rockz3);
}).prototype = p = new Bitmap();
p.nominalBounds = new Rectangle(0,0,146,177);


(lib.Rockz4 = function() {
	this.initialize(img.Rockz4);
}).prototype = p = new Bitmap();
p.nominalBounds = new Rectangle(0,0,317,184);


(lib.Rockz = function(mode,startPosition,loop) {
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	instance = this.instance = new lib.Rockz1();
	instance.setTransform(-84.6,-86.7);

	instance_1 = this.instance_1 = new lib.Rockz2();
	instance_1.setTransform(-91.2,-67.1);

	instance_2 = this.instance_2 = new lib.Rockz3();
	instance_2.setTransform(-80,-86);

	instance_3 = this.instance_3 = new lib.Rockz4();
	instance_3.setTransform(-159.1,-91.9);

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance}]}).to({state:[{t:instance_1}]},1).to({state:[{t:instance_2}]},1).to({state:[{t:instance_3}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-84.6,-86.7,159,179);


(lib.Countdown_1 = function(mode,startPosition,loop) {
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// GO
	instance = this.instance = new lib.Rockz("single",3);
	instance.setTransform(0,-404);
	instance._off = true;

	this.timeline.addTween(Tween.get(instance).wait(66).to({_off:false},0).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:-386.1},0).wait(1).to({y:-337.7},0).wait(1).to({y:-234.9},0).wait(1).to({y:-92.7},0).wait(1).to({y:-1.1},0).wait(1).to({regX:0,regY:0,x:0,y:18},0).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:22.3},0).wait(1).to({y:17.2},0).wait(1).to({y:8.6},0).wait(1).to({y:6.1},0).wait(1).to({y:5.2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(9).to({startPosition:3},0).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:0.4},0).wait(1).to({regX:0,regY:0,x:0,y:-12},0).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:28.6},0).wait(1).to({y:178.2},0).wait(1).to({y:401.4},0).wait(1).to({regX:0,regY:0,x:0,y:464.2},0).to({_off:true},1).wait(1));

	// 1
	instance_1 = this.instance_1 = new lib.Rockz("single",2);
	instance_1.setTransform(0,-402);
	instance_1._off = true;

	this.timeline.addTween(Tween.get(instance_1).wait(41).to({_off:false},0).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:-388.2},0).wait(1).to({y:-355.2},0).wait(1).to({y:-280.5},0).wait(1).to({y:-140.5},0).wait(1).to({y:-16.2},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).to({y:-5},2).to({y:0},2).to({startPosition:2},3).wait(2).to({startPosition:2},0).to({y:-5},2).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:20.8},0).wait(1).to({y:113.1},0).wait(1).to({y:321.4},0).wait(1).to({regX:0,regY:0,x:0,y:395},0).to({_off:true},1).wait(32));

	// 2
	instance_2 = this.instance_2 = new lib.Rockz("single",1);
	instance_2.setTransform(0,-402);
	instance_2._off = true;

	this.timeline.addTween(Tween.get(instance_2).wait(18).to({_off:false},0).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:-388.2},0).wait(1).to({y:-355.2},0).wait(1).to({y:-280.5},0).wait(1).to({y:-140.5},0).wait(1).to({y:-16.2},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).to({y:-5},2).to({y:0},2).to({startPosition:1},3).wait(3).to({startPosition:1},0).to({y:-5},2).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:20.8},0).wait(1).to({y:113.1},0).wait(1).to({y:321.4},0).wait(1).to({regX:0,regY:0,x:0,y:395},0).to({_off:true},1).wait(54));

	// 3
	instance_3 = this.instance_3 = new lib.Rockz("single",0);
	instance_3.setTransform(0,-402);

	this.timeline.addTween(Tween.get(instance_3).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:-388.2},0).wait(1).to({y:-355.2},0).wait(1).to({y:-280.5},0).wait(1).to({y:-140.5},0).wait(1).to({y:-16.2},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).to({y:-5},2).to({y:0},2).to({startPosition:0},3).wait(1).to({startPosition:0},0).to({y:-5},2).wait(1).to({regX:-0.7,regY:5,x:-0.7,y:12.7},0).wait(1).to({y:63.2},0).wait(1).to({y:187.5},0).wait(1).to({y:353.6},0).wait(1).to({regX:0,regY:0,x:0,y:395},0).to({_off:true},1).wait(73));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-84.6,-488.7,159,179);


// stage content:



(lib.Countdown = function(mode,startPosition,loop) {
	var shape;
	var instance;
	this.initialize(mode,startPosition,loop,{countdown:0,countdown_stop:95});

	// countdown
	instance = this.instance = new lib.Countdown_1("synched",0,false);
	instance.setTransform(600,300);

	this.timeline.addTween(Tween.get(instance).wait(96));

	// Layer 2
	shape = this.shape = new Shape();
	shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	shape.setTransform(600,300);

	this.timeline.addTween(Tween.get(shape).wait(96));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(600,111.3,1200,788.7);

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;