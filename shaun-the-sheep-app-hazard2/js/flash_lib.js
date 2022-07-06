(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 26,
	color: "#FFFFFF",
	manifest: [
		{src:"images/levelItems.png", id:"levelItems"}
	]
};



// symbols:



(lib.levelItems = function() {
	this.initialize(img.levelItems);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,2048);


(lib.vCam = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1C1810").ss(1,1,1).p("EhGTgu3MCMnAAAMAAABdvMiMnAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.267)").s().p("EhGTAu3MAAAhdtMCMnAAAMAAABdtg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-451,-301,902,602);


(lib.sizeRef = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1,1,1).p("AH0H0IvnAAIAAvnIPnAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


(lib.sensor = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,51,0,0)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.platformRef = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AH0nzIAAPnAnzH0IAAvn");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


(lib.physHold = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC99").ss(1,1,1).p("AgxgiIBjAAIAABFIhjAAg");
	this.shape.setTransform(5,3.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,12,9);


(lib.indicationArrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(12.5,1,1).p("AhegBIC9i/AhaAGIC5C7");
	this.shape.setTransform(-23.6,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.3,-25.5,31.6,51.1);


(lib.extend = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AnzHzIAAvmIPmAAIAAPmg");
	this.shape.setTransform(50,50);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.blankMarker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336699").s().p("AhiBiQgpgpAAg5QAAg4ApgqQAqgpA4AAQA5AAApApQAqAqAAA4QAAA5gqApQgpAqg5AAQg4AAgqgqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-14,28,28);


(lib.blank_mc = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.wallcopy = function() {
	this.initialize();

	// Layer 1
	this.isWall = new lib.blankMarker();
	this.isWall.setTransform(-3,21.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isWall);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.wall = function() {
	this.initialize();

	// Layer 1
	this.isWall = new lib.blankMarker();
	this.isWall.setTransform(-3,21.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isWall);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.star = function() {
	this.initialize();

	// Layer 1
	this.isStar = new lib.blankMarker();
	this.isStar.setTransform(-0.4,-0.6,0.536,0.536);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjFB5IkujoIF3gQIB3l0ICCFwIF2AEIkmDxIBwF2Ik5jYIkwDjg");
	this.shape.setTransform(-1,-3);

	this.addChild(this.shape,this.isStar);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-53,100,100);


(lib.woodencrate_dot_png = function() {
	this.initialize();

	// Layer 1
	this.woodencrate_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgkjAPUIAA+nMBJHAAAIAAeng");
	this.shape.setTransform(234,98);

	this.addChild(this.shape,this.woodencrate_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,468,196);


(lib.woodenbox_dot_png = function() {
	this.initialize();

	// Layer 1
	this.woodenbox_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ax4NNIAA6ZMAjwAAAIAAaZg");
	this.shape.setTransform(114.5,84.5);

	this.addChild(this.shape,this.woodenbox_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,229,169);


(lib.water_hyphen_top_dot_png = function() {
	this.initialize();

	// Layer 1
	this.water_hyphen_top_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AnuHzIAAvmIPdAAIAAPmg");
	this.shape.setTransform(49.5,50);

	this.addChild(this.shape,this.water_hyphen_top_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,100);


(lib.water_hyphen_platform_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.water_hyphen_platform_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AnpCVIAAkqIPTAAIAAEqg");
	this.shape.setTransform(49,15);

	this.addChild(this.shape,this.water_hyphen_platform_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,30);


(lib.water_hyphen_platform_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.water_hyphen_platform_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("An4CqIAAlTIPwAAIAAFTg");
	this.shape.setTransform(50.5,17);

	this.addChild(this.shape,this.water_hyphen_platform_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,34);


(lib.water_hyphen_platform_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.water_hyphen_platform_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("An4CaIAAk0IPwAAIAAE0g");
	this.shape.setTransform(50.5,15.5);

	this.addChild(this.shape,this.water_hyphen_platform_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,31);


(lib.water_hyphen_middle_dot_png = function() {
	this.initialize();

	// Layer 1
	this.water_hyphen_middle_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AnuHvIAAvdIPdAAIAAPdg");
	this.shape.setTransform(49.5,49.5);

	this.addChild(this.shape,this.water_hyphen_middle_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,99);


(lib.water_hyphen_bottom_dot_png = function() {
	this.initialize();

	// Layer 1
	this.water_hyphen_bottom_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AnuHvIAAvdIPdAAIAAPdg");
	this.shape.setTransform(49.5,49.5);

	this.addChild(this.shape,this.water_hyphen_bottom_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,99);


(lib.wall_hyphen_top_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.wall_hyphen_top_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("An4DSIAAmjIPwAAIAAGjg");
	this.shape.setTransform(50.5,21);

	this.addChild(this.shape,this.wall_hyphen_top_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,42);


(lib.wall_hyphen_top_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.wall_hyphen_top_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A4SDSIAAmjMAwlAAAIAAGjg");
	this.shape.setTransform(155.5,21);

	this.addChild(this.shape,this.wall_hyphen_top_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,311,42);


(lib.wall_hyphen_top_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.wall_hyphen_top_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ap1DSIAAmjITrAAIAAGjg");
	this.shape.setTransform(63,21);

	this.addChild(this.shape,this.wall_hyphen_top_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,126,42);


(lib.wall_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.wall_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AoCHCIAAuDIQEAAIAAODg");
	this.shape.setTransform(51.5,45);

	this.addChild(this.shape,this.wall_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,90);


(lib.wall_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.wall_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A4SHCIAAuDMAwlAAAIAAODg");
	this.shape.setTransform(155.5,45);

	this.addChild(this.shape,this.wall_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,311,90);


(lib.wall_hyphen_platform_hyphen_thin_dot_png = function() {
	this.initialize();

	// Layer 1
	this.wall_hyphen_platform_hyphen_thin_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AoMRRMAAAgihIQZAAMAAAAihg");
	this.shape.setTransform(52.5,110.5);

	this.addChild(this.shape,this.wall_hyphen_platform_hyphen_thin_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,105,221);


(lib.wall_hyphen_platform_hyphen_square_dot_png = function() {
	this.initialize();

	// Layer 1
	this.wall_hyphen_platform_hyphen_square_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AzrRWMAAAgirMAnXAAAMAAAAirg");
	this.shape.setTransform(126,111);

	this.addChild(this.shape,this.wall_hyphen_platform_hyphen_square_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252,222);


(lib.wall_hyphen_platform_hyphen_rectangle_dot_png = function() {
	this.initialize();

	// Layer 1
	this.wall_hyphen_platform_hyphen_rectangle_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("At+RWMAAAgirIb9AAMAAAAirg");
	this.shape.setTransform(89.5,111);

	this.addChild(this.shape,this.wall_hyphen_platform_hyphen_rectangle_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,179,222);


(lib.wall_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.wall_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("ArAHCIAAuDIWBAAIAAODg");
	this.shape.setTransform(70.5,45);

	this.addChild(this.shape,this.wall_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,141,90);


(lib.tool_dot_png = function() {
	this.initialize();

	// Layer 1
	this.tool_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AiVNNIAA6ZIEqAAIAAaZg");
	this.shape.setTransform(15,84.5);

	this.addChild(this.shape,this.tool_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,169);


(lib.sticky_hyphen_grass_hyphen_section_dot_png = function() {
	this.initialize();

	// Layer 1
	this.sticky_hyphen_grass_hyphen_section_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AiQJcIAAy4IEgAAIAAS4g");
	this.shape.setTransform(14.5,60.5);

	this.addChild(this.shape,this.sticky_hyphen_grass_hyphen_section_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,121);


(lib.spade_dot_png = function() {
	this.initialize();

	// Layer 1
	this.spade_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AucCVIAAkqIc5AAIAAEqg");
	this.shape.setTransform(92.5,15);

	this.addChild(this.shape,this.spade_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185,30);


(lib.shadow_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.shadow_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AovCaIAAk0IReAAIAAE0g");
	this.shape.setTransform(56,15.5);

	this.addChild(this.shape,this.shadow_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,112,31);


(lib.shadow_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.shadow_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AucCaIAAk0Ic5AAIAAE0g");
	this.shape.setTransform(92.5,15.5);

	this.addChild(this.shape,this.shadow_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185,31);


(lib.shadow_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.shadow_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AovCaIAAk0IReAAIAAE0g");
	this.shape.setTransform(56,15.5);

	this.addChild(this.shape,this.shadow_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,112,31);


(lib.saw_hyphen_horse_dot_png = function() {
	this.initialize();

	// Layer 1
	this.saw_hyphen_horse_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AuhOxIAA9hIdDAAIAAdhg");
	this.shape.setTransform(93,94.5);

	this.addChild(this.shape,this.saw_hyphen_horse_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,186,189);


(lib.platformwall_hyphen_bottom_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformwall_hyphen_bottom_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("An9CgIAAk/IP6AAIAAE/g");
	this.shape.setTransform(51,16);

	this.addChild(this.shape,this.platformwall_hyphen_bottom_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,32);


(lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformwall_hyphen_bottom_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A4SClIAAlJMAwlAAAIAAFJg");
	this.shape.setTransform(155.5,16.5);

	this.addChild(this.shape,this.platformwall_hyphen_bottom_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,311,33);


(lib.platformwall_hyphen_bottom_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformwall_hyphen_bottom_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ap6CgIAAk/IT0AAIAAE/g");
	this.shape.setTransform(63.5,16);

	this.addChild(this.shape,this.platformwall_hyphen_bottom_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,127,32);


(lib.platformtop_hyphen_green1_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformtop_hyphen_green1_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AyvD/IAAn9MAlfAAAIAAH9g");
	this.shape.setTransform(120,25.5);

	this.addChild(this.shape,this.platformtop_hyphen_green1_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,51);


(lib.platformhay_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformhay_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AlYGQIAAsfIKxAAIAAMfg");
	this.shape.setTransform(34.5,40);

	this.addChild(this.shape,this.platformhay_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,80);


(lib.platformhay_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformhay_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AvYGZIAAsyIexAAIAAMyg");
	this.shape.setTransform(98.5,41);

	this.addChild(this.shape,this.platformhay_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197,82);


(lib.platformhay_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformhay_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Al7GQIAAsfIL2AAIAAMfg");
	this.shape.setTransform(38,40);

	this.addChild(this.shape,this.platformhay_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,80);


(lib.platformgrass_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformgrass_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AolGZIAAsyIRKAAIAAMyg");
	this.shape.setTransform(55,41);

	this.addChild(this.shape,this.platformgrass_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,82);


(lib.platformgrass_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformgrass_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("ApSFoIAArPISkAAIAALPg");
	this.shape.setTransform(59.5,36);

	this.addChild(this.shape,this.platformgrass_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119,72);


(lib.platformgrass_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.platformgrass_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("ApXGeIAAs8ISuAAIAAM8g");
	this.shape.setTransform(60,41.5);

	this.addChild(this.shape,this.platformgrass_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,83);


(lib.plank_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.plank_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgshABaIAAizMBZCAAAIAACzg");
	this.shape.setTransform(285,9);

	this.addChild(this.shape,this.plank_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,570,18);


(lib.outsidebarn_hyphen_window4_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_window4_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Au1LZIAA2yIdqAAIAAWyg");
	this.shape.setTransform(95,73);

	this.addChild(this.shape,this.outsidebarn_hyphen_window4_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190,146);


(lib.outsidebarn_hyphen_window2_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_window2_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Au1K8IAA13IdqAAIAAV3g");
	this.shape.setTransform(95,70);

	this.addChild(this.shape,this.outsidebarn_hyphen_window2_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190,140);


(lib.outsidebarn_hyphen_window1_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_window1_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AvdLUIAA2oIe7AAIAAWog");
	this.shape.setTransform(99,72.5);

	this.addChild(this.shape,this.outsidebarn_hyphen_window1_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,145);


(lib.outsidebarn_hyphen_top_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_top_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A/PfPMAAAg+eMA+eAAAMAAAA+eg");
	this.shape.setTransform(200,200);

	this.addChild(this.shape,this.outsidebarn_hyphen_top_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.outsidebarn_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A/PfPMAAAg+eMA+eAAAMAAAA+eg");
	this.shape.setTransform(200,200);

	this.addChild(this.shape,this.outsidebarn_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.outsidebarn_hyphen_hole5_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_hole5_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A7uOEIAA8HMA3cAAAIAAcHg");
	this.shape.setTransform(177.5,90);

	this.addChild(this.shape,this.outsidebarn_hyphen_hole5_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,355,180);


(lib.outsidebarn_hyphen_hole4_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_hole4_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A7uW+MAAAgt7MA3cAAAMAAAAt7g");
	this.shape.setTransform(177.5,147);

	this.addChild(this.shape,this.outsidebarn_hyphen_hole4_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,355,294);


(lib.outsidebarn_hyphen_hole2_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_hole2_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A+dU3MAAAgptMA86AAAMAAAAptg");
	this.shape.setTransform(195,133.5);

	this.addChild(this.shape,this.outsidebarn_hyphen_hole2_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,390,267);


(lib.outsidebarn_hyphen_hole1_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_hole1_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A0TL9IAA35MAonAAAIAAX5g");
	this.shape.setTransform(130,76.5);

	this.addChild(this.shape,this.outsidebarn_hyphen_hole1_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,153);


(lib.outsidebarn_hyphen_door_hyphen_open_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_door_hyphen_open_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgjJAjYMAAAhGwMBGTAAAMAAABGwg");
	this.shape.setTransform(225,226.5);

	this.addChild(this.shape,this.outsidebarn_hyphen_door_hyphen_open_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,450,453);


(lib.moss_dot_png = function() {
	this.initialize();

	// Layer 1
	this.moss_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AmUESIAAokIMpAAIAAIkg");
	this.shape.setTransform(40.5,27.5);

	this.addChild(this.shape,this.moss_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,55);


(lib.metal_hyphen_join3_dot_png = function() {
	this.initialize();

	// Layer 1
	this.metal_hyphen_join3_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AmyFZIAAqxINlAAIAAKxg");
	this.shape.setTransform(43.5,34.5);

	this.addChild(this.shape,this.metal_hyphen_join3_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,69);


(lib.leaves2_dot_png = function() {
	this.initialize();

	// Layer 1
	this.leaves2_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjbDHIAAmOIG3AAIAAGOg");
	this.shape.setTransform(22,20);

	this.addChild(this.shape,this.leaves2_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,40);


(lib.leaves1_dot_png = function() {
	this.initialize();

	// Layer 1
	this.leaves1_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ai4CVIAAkqIFwAAIAAEqg");
	this.shape.setTransform(18.5,15);

	this.addChild(this.shape,this.leaves1_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37,30);


(lib.leaves_hyphen_sml_dot_png = function() {
	this.initialize();

	// Layer 1
	this.leaves_hyphen_sml_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AhjBQIAAifIDGAAIAACfg");
	this.shape.setTransform(10,8);

	this.addChild(this.shape,this.leaves_hyphen_sml_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,16);


(lib.insidebarn_hyphen_top_dot_png = function() {
	this.initialize();

	// Layer 1
	this.insidebarn_hyphen_top_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EglBAX6MAAAgvzMBKDAAAMAAAAvzg");
	this.shape.setTransform(237,153);

	this.addChild(this.shape,this.insidebarn_hyphen_top_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,306);


(lib.insidebarn_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.insidebarn_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EglBAX1MAAAgvpMBKDAAAMAAAAvpg");
	this.shape.setTransform(237,152.5);

	this.addChild(this.shape,this.insidebarn_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,305);


(lib.hook_dot_png = function() {
	this.initialize();

	// Layer 1
	this.hook_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AmZPEIAA+IIMyAAIAAeIg");
	this.shape.setTransform(41,96.5);

	this.addChild(this.shape,this.hook_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,193);


(lib.hazardsign_dot_png = function() {
	this.initialize();

	// Layer 1
	this.hazardsign_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("An9HLIAAuWIP6AAIAAOWg");
	this.shape.setTransform(51,46);

	this.addChild(this.shape,this.hazardsign_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,92);


(lib.hay_hyphen_cube_dot_png = function() {
	this.initialize();

	// Layer 1
	this.hay_hyphen_cube_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AnGHQIAAugIOMAAIAAOgg");
	this.shape.setTransform(45.5,46.5);

	this.addChild(this.shape,this.hay_hyphen_cube_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91,93);


(lib.hay_dot_png = function() {
	this.initialize();

	// Layer 1
	this.hay_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A3vJXIAAyuMAvfAAAIAASug");
	this.shape.setTransform(152,60);

	this.addChild(this.shape,this.hay_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,304,120);


(lib.ground_hyphen_top_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_top_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ao5JXIAAyuIRzAAIAASug");
	this.shape.setTransform(57,60);

	this.addChild(this.shape,this.ground_hyphen_top_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,120);


(lib.ground_hyphen_top_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_top_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("ApcJcIAAy4IS4AAIAAS4g");
	this.shape.setTransform(60.5,60.5);

	this.addChild(this.shape,this.ground_hyphen_top_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,121);


(lib.ground_hyphen_top_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_top_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("ApcJcIAAy4IS4AAIAAS4g");
	this.shape.setTransform(60.5,60.5);

	this.addChild(this.shape,this.ground_hyphen_top_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,121);


(lib.ground_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AoWJcIAAy4IQtAAIAAS4g");
	this.shape.setTransform(53.5,60.5);

	this.addChild(this.shape,this.ground_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,121);


(lib.ground_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("ApcJcIAAy4IS4AAIAAS4g");
	this.shape.setTransform(60.5,60.5);

	this.addChild(this.shape,this.ground_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,121);


(lib.ground_hyphen_rectangle_hyphen_block_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_rectangle_hyphen_block_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AtgcWMAAAg4sIbAAAMAAAA4sg");
	this.shape.setTransform(86.5,181.5);

	this.addChild(this.shape,this.ground_hyphen_rectangle_hyphen_block_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,173,363);


(lib.ground_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AoWJcIAAy4IQtAAIAAS4g");
	this.shape.setTransform(53.5,60.5);

	this.addChild(this.shape,this.ground_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,121);


(lib.ground_hyphen_bottom_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_bottom_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AoRJXIAAyuIQjAAIAASug");
	this.shape.setTransform(53,60);

	this.addChild(this.shape,this.ground_hyphen_bottom_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,120);


(lib.ground_hyphen_bottom_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_bottom_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("ApXJXIAAyuISuAAIAASug");
	this.shape.setTransform(60,60);

	this.addChild(this.shape,this.ground_hyphen_bottom_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ground_hyphen_bottom_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.ground_hyphen_bottom_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AoRJXIAAyuIQjAAIAASug");
	this.shape.setTransform(53,60);

	this.addChild(this.shape,this.ground_hyphen_bottom_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,120);


(lib.fork_dot_png = function() {
	this.initialize();

	// Layer 1
	this.fork_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AizM4IAA5wIFnAAIAAZwg");
	this.shape.setTransform(18,82.5);

	this.addChild(this.shape,this.fork_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,165);


(lib.endpole_dot_png = function() {
	this.initialize();

	// Layer 1
	this.endpole_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AhPGLIAAsVICfAAIAAMVg");
	this.shape.setTransform(8,39.5);

	this.addChild(this.shape,this.endpole_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,79);


(lib.endflag_dot_png = function() {
	this.initialize();

	// Layer 1
	this.endflag_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AnpIvIAAxeIPTAAIAAReg");
	this.shape.setTransform(49,56);

	this.addChild(this.shape,this.endflag_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,112);


(lib.dirt4_dot_png = function() {
	this.initialize();

	// Layer 1
	this.dirt4_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ay+F2IAArsMAl9AAAIAALsg");
	this.shape.setTransform(121.5,37.5);

	this.addChild(this.shape,this.dirt4_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,243,75);


(lib.dirt3_dot_png = function() {
	this.initialize();

	// Layer 1
	this.dirt3_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AolNwIAA7fIRKAAIAAbfg");
	this.shape.setTransform(55,88);

	this.addChild(this.shape,this.dirt3_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,176);


(lib.dirt2_dot_png = function() {
	this.initialize();

	// Layer 1
	this.dirt2_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AygINIAAwZMAlAAAAIAAQZg");
	this.shape.setTransform(118.5,52.5);

	this.addChild(this.shape,this.dirt2_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,105);


(lib.dirt1_dot_png = function() {
	this.initialize();

	// Layer 1
	this.dirt1_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AolNlIAA7KIRKAAIAAbKg");
	this.shape.setTransform(55,87);

	this.addChild(this.shape,this.dirt1_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,174);


(lib.crane_swith_only_dot_png = function() {
	this.initialize();

	// Layer 1
	this.crane_swith_only_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AmAK2IAA1sIMBAAIAAVsg");
	this.shape.setTransform(38.5,69.5);

	this.addChild(this.shape,this.crane_swith_only_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,139);


(lib.crane_hyphen_switch_hyphen_wire_dot_png = function() {
	this.initialize();

	// Layer 1
	this.crane_hyphen_switch_hyphen_wire_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgCLAg+MAAAhB7IEWAAMAAABB7g");
	this.shape.setTransform(14,211);

	this.addChild(this.shape,this.crane_hyphen_switch_hyphen_wire_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,422);


(lib.chain_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.chain_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AhFLjIAA3GICLAAIAAXGg");
	this.shape.setTransform(7,74);

	this.addChild(this.shape,this.chain_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,148);


(lib.bush_hyphen_top_dot_png = function() {
	this.initialize();

	// Layer 1
	this.bush_hyphen_top_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EghWAE7IAAp1MBCsAAAIAAJ1g");
	this.shape.setTransform(213.5,31.5);

	this.addChild(this.shape,this.bush_hyphen_top_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,427,63);


(lib.bush_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.bush_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AkmKEIAA0IIJNAAIAAUIg");
	this.shape.setTransform(29.5,64.5);

	this.addChild(this.shape,this.bush_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,129);


(lib.bush_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.bush_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EghWAKEIAA0IMBCsAAAIAAUIg");
	this.shape.setTransform(213.5,64.5);

	this.addChild(this.shape,this.bush_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,427,129);


(lib.bush_hyphen_platform_hyphen_block_dot_png = function() {
	this.initialize();

	// Layer 1
	this.bush_hyphen_platform_hyphen_block_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AmjN1IAA7pINGAAIAAbpg");
	this.shape.setTransform(42,88.5);

	this.addChild(this.shape,this.bush_hyphen_platform_hyphen_block_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,177);


(lib.bush_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.bush_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AkcKEIAA0III4AAIAAUIg");
	this.shape.setTransform(28.5,64.5);

	this.addChild(this.shape,this.bush_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,129);


(lib.bone_dot_png = function() {
	this.initialize();

	// Layer 1
	this.bone_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjgCHIAAkNIHBAAIAAENg");
	this.shape.setTransform(22.5,13.5);

	this.addChild(this.shape,this.bone_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,27);


(lib.barnfloor_hyphen_top_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.barnfloor_hyphen_top_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AlYHQIAAugIKxAAIAAOgg");
	this.shape.setTransform(34.5,46.5);

	this.addChild(this.shape,this.barnfloor_hyphen_top_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,93);


(lib.barnfloor_hyphen_top_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.barnfloor_hyphen_top_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AvYHbIAAu1IexAAIAAO1g");
	this.shape.setTransform(98.5,47.5);

	this.addChild(this.shape,this.barnfloor_hyphen_top_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197,95);


(lib.barnfloor_hyphen_top_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.barnfloor_hyphen_top_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Al7HbIAAu1IL2AAIAAO1g");
	this.shape.setTransform(38,47.5);

	this.addChild(this.shape,this.barnfloor_hyphen_top_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,95);


(lib.barnfloor_hyphen_middle_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.barnfloor_hyphen_middle_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AkDK8IAA13IIHAAIAAV3g");
	this.shape.setTransform(26,70);

	this.addChild(this.shape,this.barnfloor_hyphen_middle_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52,140);


(lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.barnfloor_hyphen_middle_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AvYK8IAA13IexAAIAAV3g");
	this.shape.setTransform(98.5,70);

	this.addChild(this.shape,this.barnfloor_hyphen_middle_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197,140);


(lib.barnfloor_hyphen_middle_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.barnfloor_hyphen_middle_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Aj5K8IAA13IHzAAIAAV3g");
	this.shape.setTransform(25,70);

	this.addChild(this.shape,this.barnfloor_hyphen_middle_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,140);


(lib.barnfloor_hyphen_bottom_hyphen_right_dot_png = function() {
	this.initialize();

	// Layer 1
	this.barnfloor_hyphen_bottom_hyphen_right_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Aj5HqIAAvTIHzAAIAAPTg");
	this.shape.setTransform(25,49);

	this.addChild(this.shape,this.barnfloor_hyphen_bottom_hyphen_right_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,98);


(lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.barnfloor_hyphen_bottom_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AvYHqIAAvTIexAAIAAPTg");
	this.shape.setTransform(98.5,49);

	this.addChild(this.shape,this.barnfloor_hyphen_bottom_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197,98);


(lib.skyhook = function() {
	this.initialize();

	// Layer 1
	this.isSkyHook = new lib.blankMarker();
	this.isSkyHook.setTransform(-3,-2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isSkyHook);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.sheepSwitcherBlock = function() {
	this.initialize();

	// Layer 2
	this.isSwitcher = new lib.blankMarker();
	this.isSwitcher.setTransform(19.1,27.1);

	this.isSheep = new lib.blankMarker();
	this.isSheep.setTransform(-0.9,-0.9);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999933").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isSheep,this.isSwitcher);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.sheepStopperBlock = function() {
	this.initialize();

	// Layer 1
	this.isStopper = new lib.blankMarker();
	this.isStopper.setTransform(-0.9,2.1);

	this.isSheep = new lib.blankMarker();
	this.isSheep.setTransform(-0.9,-25.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AnzH0IAAvmIPnAAIAAPmg");
	this.shape.setTransform(0,-25);

	this.addChild(this.shape,this.isSheep,this.isStopper);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-75,100,100);


(lib.sheepGroundBlock = function() {
	this.initialize();

	// Layer 3
	this.bl = new lib.indicationArrow();
	this.bl.setTransform(-1.3,-0.5,1,1,-45);

	this.b = new lib.indicationArrow();
	this.b.setTransform(-1.4,-0.5,1,1,-90);

	this.br = new lib.indicationArrow();
	this.br.setTransform(-1.5,-0.5,1,1,-135);

	this.r = new lib.indicationArrow();
	this.r.setTransform(-1.4,-0.5,1,1,180,0,0,-0.1,0);

	this.tr = new lib.indicationArrow();
	this.tr.setTransform(-1.5,-0.4,1,1,135);

	this.t = new lib.indicationArrow();
	this.t.setTransform(-1.4,-0.5,1,1,90,0,0,-0.1,0);

	this.tl = new lib.indicationArrow();
	this.tl.setTransform(-1.4,-0.4,1,1,45);

	this.l = new lib.indicationArrow();
	this.l.setTransform(0.1,-0.6);

	// Layer 2
	this.isHanger = new lib.blankMarker();
	this.isHanger.setTransform(27.1,27.1);

	this.isSheep = new lib.blankMarker();
	this.isSheep.setTransform(-0.9,-0.9);

	// Layer 1
	this.bottom = new lib.extend();
	this.bottom.setTransform(-3.5,73.5,1,0.5,0,0,0,50,50.1);

	this.bottomRight = new lib.extend();
	this.bottomRight.setTransform(71.5,73.5,0.5,0.5,0,0,0,50,50.1);

	this.bottomLeft = new lib.extend();
	this.bottomLeft.setTransform(-74.5,73.5,0.5,0.5,0,0,0,50,50.1);

	this.topRight = new lib.extend();
	this.topRight.setTransform(71.5,-73.5,0.5,0.5,0,0,0,50,50);

	this.topLeft = new lib.extend();
	this.topLeft.setTransform(-74.5,-73.5,0.5,0.5,0,0,0,50,50);

	this.top = new lib.extend();
	this.top.setTransform(0.5,-73.5,1,0.5,0,0,0,50,50);

	this.left = new lib.extend();
	this.left.setTransform(-74.5,-0.9,0.5,0.99,0,0,0,50,50.1);

	this.right = new lib.extend();
	this.right.setTransform(71.5,0.1,0.5,0.99,0,0,0,50,50.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.right,this.left,this.top,this.topLeft,this.topRight,this.bottomLeft,this.bottomRight,this.bottom,this.isSheep,this.isHanger,this.l,this.tl,this.t,this.tr,this.r,this.br,this.b,this.bl);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.5,-98.5,196,197);


(lib.shaun = function() {
	this.initialize();

	// Layer 1
	this.footSensor = new lib.sensor();
	this.footSensor.setTransform(2.4,40.2,0.387,0.344,0,0,0,0,0.1);

	this.topSensor = new lib.sensor();
	this.topSensor.setTransform(-2.2,-25.8,2.092,0.476,0,0,0,0,0.1);

	this.leftSensor = new lib.sensor();
	this.leftSensor.setTransform(-67.3,0.1,0.653,0.991,0,0,0,0,0.2);

	this.rightSensor = new lib.sensor();
	this.rightSensor.setTransform(66.2,0.1,0.579,0.991,0,0,0,0,0.2);

	this.isShaun = new lib.blankMarker();
	this.isShaun.setTransform(-3,-2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,51,0.976)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isShaun,this.rightSensor,this.leftSensor,this.topSensor,this.footSensor);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.8,-50,209.2,107.3);


(lib.movingPlatform = function() {
	this.initialize();

	// Layer 1
	this.isMovingPlatform = new lib.blankMarker();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isMovingPlatform);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.level11PixiBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(1830,2306.7,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(1857.1,2073.1,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(1829.6,2160.3,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(1829.9,2228.1,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(1830.1,2385,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.outsidebarn_hyphen_window2_dot_png();
	this.instance_5.setTransform(1731.6,1700.3,1.922,1.922,0,0,0,95,70);

	this.instance_6 = new lib.outsidebarn_hyphen_window2_dot_png();
	this.instance_6.setTransform(1363,875.6,1.79,1.79,0,0,0,95,70);

	this.instance_7 = new lib.outsidebarn_hyphen_hole4_dot_png();
	this.instance_7.setTransform(2292.5,524.1,1,1,0,0,0,177.5,147);

	this.instance_8 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_8.setTransform(308.8,485.2,1,1,0,0,0,200,200);

	this.instance_9 = new lib.outsidebarn_hyphen_hole2_dot_png();
	this.instance_9.setTransform(694.1,425,1,1,0,0,0,195,133.5);

	this.instance_10 = new lib.outsidebarn_hyphen_door_hyphen_open_dot_png();
	this.instance_10.setTransform(1574.7,2813.5,1.448,1.448,0,0,0,225,226.6);

	this.instance_11 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_11.setTransform(1122.7,11.5,1,1,0,0,0,14,211);

	this.instance_12 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_12.setTransform(1122.7,416.6,1,1,0,0,0,14,211);

	this.instance_13 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_13.setTransform(1122.7,822.9,1,1,0,0,0,14,211);

	this.instance_14 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_14.setTransform(1122.7,1231.1,1,1,0,0,0,14,211);

	this.instance_15 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_15.setTransform(1122.7,1636.2,1,1,0,0,0,14,211);

	this.instance_16 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_16.setTransform(1122.7,2046.8,1,1,0,0,0,14,211);

	this.instance_17 = new lib.crane_swith_only_dot_png();
	this.instance_17.setTransform(1122.9,2721.9,0.886,0.886,0,0,0,38.5,69.5);

	this.instance_18 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_18.setTransform(1122.7,2458,1,1,0,0,0,14,211);

	this.instance_19 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_19.setTransform(201.4,3068.5,1,1,0,0,0,200,200);

	this.instance_20 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_20.setTransform(2266.8,3068.5,1,1,0,0,0,200,200);

	this.instance_21 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_21.setTransform(2006.8,3037.2,1,1,0,0,0,200,200);

	this.instance_22 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_22.setTransform(1125.4,3068.5,1.094,1,0,0,0,200,200);

	this.instance_23 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_23.setTransform(719.1,3068.5,1,1,0,0,0,200,200);

	this.instance_24 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_24.setTransform(351.4,3068.5,1,1,0,0,0,200,200);

	this.instance_25 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_25.setTransform(200,2801,1,1,0,0,0,200,200);

	this.instance_26 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_26.setTransform(2265.4,2801,1,1,0,0,0,200,200);

	this.instance_27 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_27.setTransform(2013.5,2701,1,1,0,0,0,200,200);

	this.instance_28 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_28.setTransform(1119.1,2694.2,1.081,1,0,0,0,200,200);

	this.instance_29 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_29.setTransform(717.7,2801,1,1,0,0,0,200,200);

	this.instance_30 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_30.setTransform(350,2801,1,1,0,0,0,200,200);

	this.instance_31 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_31.setTransform(1105.3,2418.3,1,1,0,0,0,200,200);

	this.instance_32 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_32.setTransform(717.7,2418.3,1,1,0,0,0,200,200);

	this.instance_33 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_33.setTransform(330.1,2418.3,1,1,0,0,0,200,200);

	this.instance_34 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_34.setTransform(2135.3,2401,1,1,0,0,0,200,200);

	this.instance_35 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_35.setTransform(1747.8,2346.5,1,1,0,0,0,200,200);

	this.instance_36 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_36.setTransform(1362.7,2343.4,1,1,0,0,0,200,200);

	this.instance_37 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_37.setTransform(975.2,2401,1,1,0,0,0,200,200);

	this.instance_38 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_38.setTransform(587.6,2401,1,1,0,0,0,200,200);

	this.instance_39 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_39.setTransform(200,2401,1,1,0,0,0,200,200);

	this.instance_40 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_40.setTransform(2135.3,2018.3,1,1,0,0,0,200,200);

	this.instance_41 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_41.setTransform(1747.8,2018.3,1,1,0,0,0,200,200);

	this.instance_42 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_42.setTransform(1362.7,2018.3,1,1,0,0,0,200,200);

	this.instance_43 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_43.setTransform(975.2,2018.3,1,1,0,0,0,200,200);

	this.instance_44 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_44.setTransform(587.6,2018.3,1,1,0,0,0,200,200);

	this.instance_45 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_45.setTransform(200,2018.3,1,1,0,0,0,200,200);

	this.instance_46 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_46.setTransform(2135.3,1635.8,1,1,0,0,0,200,200);

	this.instance_47 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(1362.7,1635.8,1,1,0,0,0,200,200);

	this.instance_48 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_48.setTransform(975.2,1635.8,1,1,0,0,0,200,200);

	this.instance_49 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_49.setTransform(587.6,1635.8,1,1,0,0,0,200,200);

	this.instance_50 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_50.setTransform(200,1635.8,1,1,0,0,0,200,200);

	this.instance_51 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_51.setTransform(2135.3,1253.1,1,1,0,0,0,200,200);

	this.instance_52 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_52.setTransform(1747.8,1253.1,1,1,0,0,0,200,200);

	this.instance_53 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_53.setTransform(1362.7,1253.1,1,1,0,0,0,200,200);

	this.instance_54 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_54.setTransform(975.2,1253.1,1,1,0,0,0,200,200);

	this.instance_55 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_55.setTransform(587.6,1253.1,1,1,0,0,0,200,200);

	this.instance_56 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_56.setTransform(200,1253.1,1,1,0,0,0,200,200);

	this.instance_57 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_57.setTransform(2135.3,867.9,1,1,0,0,0,200,200);

	this.instance_58 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_58.setTransform(1747.8,867.9,1,1,0,0,0,200,200);

	this.instance_59 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_59.setTransform(975.2,867.9,1,1,0,0,0,200,200);

	this.instance_60 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_60.setTransform(587.6,867.9,1,1,0,0,0,200,200);

	this.instance_61 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_61.setTransform(200,867.9,1,1,0,0,0,200,200);

	this.instance_62 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_62.setTransform(1747.8,485.2,1,1,0,0,0,200,200);

	this.instance_63 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_63.setTransform(1362.7,485.2,1,1,0,0,0,200,200);

	this.instance_64 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_64.setTransform(1083.9,485.2,1,1,0,0,0,200,200);

	this.instance_65 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_65.setTransform(200,485.2,1,1,0,0,0,200,200);

	this.instance_66 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_66.setTransform(2142.9,93.8,1,1,0,0,0,200,200);

	this.instance_67 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_67.setTransform(1755.4,93.8,1,1,0,0,0,200,200);

	this.instance_68 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_68.setTransform(1367.8,93.8,1,1,0,0,0,200,200);

	this.instance_69 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_69.setTransform(980.2,93.8,1,1,0,0,0,200,200);

	this.instance_70 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_70.setTransform(587.6,93.8,1,1,0,0,0,200,200);

	this.instance_71 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_71.setTransform(200,93.8,1,1,0,0,0,200,200);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_72 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_72.setTransform(1600.4,2808.7,1.847,1.847,0,0,0,237,152.6);

	this.instance_73 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_73.setTransform(695.9,755.4,1,1,0,0,0,200,200);

	this.instance_74 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_74.setTransform(1921.3,491.5,1,1,0,0,0,200,200);

	this.instance_75 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_75.setTransform(2142.9,180.2,1,1,0,0,0,200,200);

	this.instance_76 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_76.setTransform(1362.7,562.7,1,1,0,0,0,200,200);

	this.instance_77 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_77.setTransform(1671.5,867.9,1,1,0,0,0,200,200);

	this.instance_78 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_78.setTransform(1057.7,871.1,1,1,0,0,0,200,200);

	this.instance_79 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_79.setTransform(1362.7,1181.9,1,1,0,0,0,200,200);

	this.instance_80 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_80.setTransform(1747.8,1374.4,1,1,0,0,0,200,200);

	this.instance_81 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_81.setTransform(2047.8,1642.1,1,1,0,0,0,200,200);

	this.instance_82 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_82.setTransform(1439.5,1635.8,1,1,0,0,0,200,200);

	this.addChild(this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.isDispBG,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165.1,-199.5,2722.5,3704.7);


(lib.level11movingitem = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(-0.1,-2868.3,1,1.072,0,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(-0.1,-2716.6,1,1,0,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(-0.1,-2570.3,1,1,0,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(-0.1,-2422.7,1,1,0,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(-0.1,-2276.5,1,1,0,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(-0.1,-2129.2,1,1,0,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(-0.1,-1983,1,1,0,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(-0.1,-1836.6,1,1,0,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(-0.1,-1690.4,1,1,0,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(-0.1,-1543.1,1,1,0,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(-0.1,-1396.9,1,1,0,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(-0.4,-1250.5,1,1,0,0,0,7,74);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(-0.4,-1104.3,1,1,0,0,0,7,74);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(-0.4,-957,1,1,0,0,0,7,74);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(-0.4,-810.8,1,1,0,0,0,7,74);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(-0.4,-664.4,1,1,0,0,0,7,74);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(-0.4,-518.2,1,1,0,0,0,7,74);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(-0.4,-370.9,1,1,0,0,0,7,74);

	this.isMovingItem = new lib.woodencrate_dot_png();
	this.isMovingItem.setTransform(0.1,0.1,0.67,0.46,0,0,0,234,98.1);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(-5.1,-157.2,1,1,38.7);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(45.9,-94.7,1,1,141.8,0,0,7,74);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(-0.4,-224.7,1,1,0,0,0,7,74);

	this.addChild(this.instance_20,this.instance_19,this.instance_18,this.isMovingItem,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-156.7,-2947.6,313.5,2992.8);


(lib.level10PixiBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(2565.6,438.8,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(2592.7,205.2,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(2565.3,292.4,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(2565.5,360.3,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(2565.7,517.2,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.crane_swith_only_dot_png();
	this.instance_5.setTransform(1312.7,97.3,0.659,0.659,0,0,0,38.6,69.5);

	this.instance_6 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_6.setTransform(1312.1,-80.8,0.659,0.659,0,0,0,14,211);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.addChild(this.isDispBG,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-219.8,2640.8,776.5);


(lib.level10movingplatform = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(1.8,-931.9,0.749,0.749,0,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(1.8,-821.7,0.749,0.749,0,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(1.8,-712.1,0.749,0.749,0,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(1.8,-602,0.749,0.749,0,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(1.8,-491.8,0.749,0.749,0,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(1.8,-381.7,0.749,0.749,0,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(1.8,-271.5,0.749,0.749,0,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(1.8,-161.4,0.749,0.749,0,0,0,7,74);

	this.isMovingItem = new lib.woodencrate_dot_png();
	this.isMovingItem.setTransform(0,0,0.54,0.362,0,0,0,234,98);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(-31.9,-67.4,0.694,0.694,42,0,0,7,73.9);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(35.3,-66.5,0.694,0.694,139.5,0,0,7,73.8);

	this.addChild(this.instance_9,this.instance_8,this.isMovingItem,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.4,-987.3,252.8,1022.8);


(lib.level9PixiBG = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.dirt4_dot_png();
	this.instance.setTransform(935.4,956.9,1,1,0,0,0,121.5,37.5);

	this.instance_1 = new lib.dirt4_dot_png();
	this.instance_1.setTransform(982.4,1029.1,0.986,2.37);

	this.instance_2 = new lib.dirt4_dot_png();
	this.instance_2.setTransform(519,998.5,1.908,2.263);

	// Layer 1
	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(2246.7,517,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endflag_dot_png();
	this.instance_4.setTransform(2273.8,283.4,1,1,0,0,0,49,56);

	this.instance_5 = new lib.endpole_dot_png();
	this.instance_5.setTransform(2246.3,370.6,1,1,0,0,0,8,39.5);

	this.instance_6 = new lib.endpole_dot_png();
	this.instance_6.setTransform(2246.6,438.5,1,1,0,0,0,8,39.5);

	this.instance_7 = new lib.endpole_dot_png();
	this.instance_7.setTransform(2246.8,595.4,1,1,0,0,0,8,39.5);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(4.4,3.5,1,1,0,0,0,5,3.5);

	this.addChild(this.isDispBG,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-0.5,2323.9,1207.4);


(lib.level9Pixi = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.dirt4_dot_png();
	this.instance.setTransform(935.4,956.9,1,1,0,0,0,121.5,37.5);

	this.instance_1 = new lib.dirt4_dot_png();
	this.instance_1.setTransform(982.4,1029.1,0.986,2.37);

	this.instance_2 = new lib.dirt4_dot_png();
	this.instance_2.setTransform(519,998.5,1.908,2.263);

	// Layer 1
	this.instance_3 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_3.setTransform(2252.8,1035.8,1,1,180);

	this.instance_4 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_4.setTransform(2063.5,1035.8,1,1,180);

	this.instance_5 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_5.setTransform(1994.3,1035.8,1,1,180);

	this.instance_6 = new lib.dirt2_dot_png();
	this.instance_6.setTransform(901.7,882.9,0.653,1.093,19);

	this.instance_7 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_7.setTransform(870.5,899.9,0.523,0.515);

	this.instance_8 = new lib.dirt2_dot_png();
	this.instance_8.setTransform(681.7,912.7,1.062,1.093);

	this.instance_9 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_9.setTransform(683.1,899.6,0.593,0.515);

	this.instance_10 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_10.setTransform(810.1,899.9,0.523,0.515);

	this.instance_11 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_11.setTransform(749.3,899.3,0.523,0.515);

	this.instance_12 = new lib.dirt2_dot_png();
	this.instance_12.setTransform(736,958.9,1.062,1.093);

	this.instance_13 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_13.setTransform(803,972.9,1,1,180,0,0,60.5,60.5);

	this.instance_14 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_14.setTransform(889.7,972.9,1,1,180,0,0,60.5,60.5);

	this.instance_15 = new lib.dirt1_dot_png();
	this.instance_15.setTransform(1600.6,790.8,0.324,0.307);

	this.instance_16 = new lib.dirt3_dot_png();
	this.instance_16.setTransform(1650.1,895,0.558,0.646,180);

	this.instance_17 = new lib.leaves2_dot_png();
	this.instance_17.setTransform(114.5,384.6,0.629,0.529,0,0,0,22,19.9);

	this.instance_18 = new lib.leaves1_dot_png();
	this.instance_18.setTransform(94.4,385.2,1,1,0,0,0,18.5,15);

	this.instance_19 = new lib.dirt4_dot_png();
	this.instance_19.setTransform(-18.6,994.4,0.713,0.713);

	this.instance_20 = new lib.dirt4_dot_png();
	this.instance_20.setTransform(249.4,1054.8,1,1,180);

	this.instance_21 = new lib.dirt4_dot_png();
	this.instance_21.setTransform(216.9,1035.8,1,1,180);

	this.instance_22 = new lib.ground_hyphen_left_dot_png();
	this.instance_22.setTransform(54.5,1078,1.252,1,0,0,0,53.5,60.5);

	this.instance_23 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_23.setTransform(-43,964.3,0.597,0.554);

	this.instance_24 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_24.setTransform(17.5,963.9,0.597,0.554);

	this.instance_25 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_25.setTransform(86.5,963.1,0.597,0.554);

	this.instance_26 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_26.setTransform(9.6,825.2,1,1,0,0,0,89.5,111);

	this.instance_27 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_27.setTransform(84.9,825.2,1,1,0,0,0,89.5,111);

	this.instance_28 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_28.setTransform(13.6,494.1,1,1,0,0,0,89.5,111);

	this.instance_29 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_29.setTransform(88.9,494.1,1,1,0,0,0,89.5,111);

	this.instance_30 = new lib.leaves_hyphen_sml_dot_png();
	this.instance_30.setTransform(144.2,929.7,1.7,1.719);

	this.instance_31 = new lib.leaves2_dot_png();
	this.instance_31.setTransform(166.5,960.4,0.841,0.887,0,0,0,22,20);

	this.instance_32 = new lib.leaves2_dot_png();
	this.instance_32.setTransform(697.3,897.6,0.614,0.5,0,0,0,22,20);

	this.instance_33 = new lib.leaves1_dot_png();
	this.instance_33.setTransform(1144.6,896.5,0.65,0.836,0,0,0,18.6,15);

	this.instance_34 = new lib.moss_dot_png();
	this.instance_34.setTransform(2489.9,967.3,1.248,0.726,0,0,0,40.5,27.5);

	this.instance_35 = new lib.leaves_hyphen_sml_dot_png();
	this.instance_35.setTransform(2136.2,585.9,1,1,0,0,0,10,8);

	this.instance_36 = new lib.leaves2_dot_png();
	this.instance_36.setTransform(1189.4,770.8,1,1,0,0,0,22,20);

	this.instance_37 = new lib.moss_dot_png();
	this.instance_37.setTransform(311.8,1257.4,1,1,0,0,0,40.5,27.5);

	this.instance_38 = new lib.leaves1_dot_png();
	this.instance_38.setTransform(2159.1,583,1,1,0,0,0,18.5,15);

	this.instance_39 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_39.setTransform(-14.6,1237.5,1.217,1.242);

	this.instance_40 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_40.setTransform(-14.6,1101,1.217,1.167);

	this.instance_41 = new lib.dirt3_dot_png();
	this.instance_41.setTransform(561.2,939,0.788,0.593);

	this.instance_42 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_42.setTransform(604.2,968.6,0.545,0.529,180);

	this.instance_43 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_43.setTransform(110.5,1101.3,1.013,1.16);

	this.instance_44 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_44.setTransform(229,1101.3,1.013,1.16);

	this.instance_45 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_45.setTransform(341.4,1098.4,1.013,1.184);

	this.instance_46 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_46.setTransform(449.1,1170.9,1.013,1.16,0,0,0,60,60);

	this.instance_47 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_47.setTransform(506.8,1101.2,1.013,1.16);

	this.instance_48 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_48.setTransform(624.7,1100.6,1.013,1.16);

	this.instance_49 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_49.setTransform(743.1,1100.5,1.013,1.16);

	this.instance_50 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_50.setTransform(111.8,1243.8,1.013,1.184);

	this.instance_51 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_51.setTransform(219.5,1316.2,1.013,1.16,0,0,0,60,60);

	this.instance_52 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_52.setTransform(338,1316.2,1.013,1.16,0,0,0,60,60);

	this.instance_53 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_53.setTransform(683,1315.8,1.013,1.16,0,0,0,60,60);

	this.instance_54 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_54.setTransform(455.9,1315.5,1.013,1.16,0,0,0,60,60);

	this.instance_55 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_55.setTransform(574.3,1315.5,1.013,1.16,0,0,0,60,60);

	this.instance_56 = new lib.ground_hyphen_right_dot_png();
	this.instance_56.setTransform(680,1315.3,1.013,1.16,180,0,0,53.5,60.5);

	this.instance_57 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_57.setTransform(802.2,1316.2,1.013,1.16,0,0,0,60,60);

	this.instance_58 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_58.setTransform(50.9,1323,1,1.045,0,0,0,60.5,60.5);

	this.instance_59 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_59.setTransform(51.2,1203.9,1,1,0,0,0,60.5,60.5);

	this.instance_60 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_60.setTransform(166.3,1323,1,1.045,0,0,0,60.5,60.5);

	this.instance_61 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_61.setTransform(166.6,1203.9,1,1,0,0,0,60.5,60.5);

	this.instance_62 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_62.setTransform(163.6,1086.7,1,1,0,0,0,60.5,60.5);

	this.instance_63 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_63.setTransform(277.4,1323.1,1,1.045,0,0,0,60.5,60.5);

	this.instance_64 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_64.setTransform(277.7,1204,1,1,0,0,0,60.5,60.5);

	this.instance_65 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_65.setTransform(277.7,1086.8,1,1,0,0,0,60.5,60.5);

	this.instance_66 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_66.setTransform(392.9,1323.1,1,1.045,0,0,0,60.5,60.5);

	this.instance_67 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_67.setTransform(393.2,1204,1,1,0,0,0,60.5,60.5);

	this.instance_68 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_68.setTransform(393.1,1086.8,1,1,0,0,0,60.5,60.5);

	this.instance_69 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_69.setTransform(458.8,1323,1,1.045,0,0,0,60.5,60.5);

	this.instance_70 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_70.setTransform(459.1,1203.9,1,1,0,0,0,60.5,60.5);

	this.instance_71 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_71.setTransform(459,1086.7,1,1,0,0,0,60.5,60.5);

	this.instance_72 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_72.setTransform(574.2,1323,1,1.045,0,0,0,60.5,60.5);

	this.instance_73 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_73.setTransform(574.5,1203.9,1,1,0,0,0,60.5,60.5);

	this.instance_74 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_74.setTransform(574.5,1086.7,1,1,0,0,0,60.5,60.5);

	this.instance_75 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_75.setTransform(685.3,1323,1,1.045,0,0,0,60.5,60.5);

	this.instance_76 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_76.setTransform(685.6,1203.9,1,1,0,0,0,60.5,60.5);

	this.instance_77 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_77.setTransform(685.6,1086.7,1,1,0,0,0,60.5,60.5);

	this.instance_78 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_78.setTransform(800.8,1323,1,1.045,0,0,0,60.5,60.5);

	this.instance_79 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_79.setTransform(801.1,1203.9,1,1,0,0,0,60.5,60.5);

	this.instance_80 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_80.setTransform(853,1091.8,1.013,1.02);

	this.instance_81 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_81.setTransform(899.9,1094.2,1.013,1);

	this.instance_82 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_82.setTransform(916.3,1315.4,1.013,1.184,0,0,0,60,60);

	this.instance_83 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_83.setTransform(963.3,1316.8,1.013,1.16,0,0,0,60,60);

	this.instance_84 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_84.setTransform(915,1190.8,1.013,1.02,0,0,0,60,60);

	this.instance_85 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_85.setTransform(962,1192.1,1.013,1,0,0,0,60,60);

	this.instance_86 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_86.setTransform(999.9,1152.4,1.013,1.02,0,0,0,60,60);

	this.instance_87 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_87.setTransform(986.1,1093.6,1.013,1);

	this.instance_88 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_88.setTransform(1104.5,1093.6,1.013,1);

	this.instance_89 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_89.setTransform(1002.5,1314.8,1.013,1.184,0,0,0,60,60);

	this.instance_90 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_90.setTransform(1049.4,1316.2,1.013,1.16,0,0,0,60,60);

	this.instance_91 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_91.setTransform(1167.9,1316.2,1.013,1.16,0,0,0,60,60);

	this.instance_92 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_92.setTransform(1001.2,1190.2,1.013,1.02,0,0,0,60,60);

	this.instance_93 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_93.setTransform(1048.1,1191.5,1.013,1,0,0,0,60,60);

	this.instance_94 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_94.setTransform(1166.6,1191.4,1.013,1,0,0,0,60,60);

	this.instance_95 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_95.setTransform(1885,1035.8,1,1,180);

	this.instance_96 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_96.setTransform(2175.9,1030.9,1,1,180);

	this.instance_97 = new lib.dirt3_dot_png();
	this.instance_97.setTransform(1735.9,1012.3,2.091,1.426);

	this.instance_98 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_98.setTransform(1216.9,1091.1,1.013,1.02);

	this.instance_99 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_99.setTransform(1324.7,1153.6,1.013,1,0,0,0,60,60);

	this.instance_100 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_100.setTransform(1382.3,1093.5,1.013,1);

	this.instance_101 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_101.setTransform(1788.2,1153.2,1.013,1,0,0,0,60,60);

	this.instance_102 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_102.setTransform(1500.2,1093,1.013,1);

	this.instance_103 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_103.setTransform(1679.5,1152.9,1.013,1,0,0,0,60,60);

	this.instance_104 = new lib.ground_hyphen_right_dot_png();
	this.instance_104.setTransform(1785.2,1152.8,1.013,1,180,0,0,53.5,60.5);

	this.instance_105 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_105.setTransform(1907.4,1153.6,1.013,1,0,0,0,60,60);

	this.instance_106 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_106.setTransform(2126.9,1160.6,1,1,0,0,0,60,60);

	this.instance_107 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_107.setTransform(2019.6,1160.3,1,1,0,0,0,60,60);

	this.instance_108 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_108.setTransform(2008,1043,1,1,180,0,0,60.5,60.5);

	this.instance_109 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_109.setTransform(1367.6,1043.1,1,1,180,0,0,60.5,60.5);

	this.instance_110 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_110.setTransform(1486.1,1043.7,1,1,180,0,0,60.5,60.5);

	this.instance_111 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_111.setTransform(1588.6,1043.1,1,1,180,0,0,60.5,60.5);

	this.instance_112 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_112.setTransform(1707.1,1043.6,1,1,180,0,0,60.5,60.5);

	this.instance_113 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_113.setTransform(1822.4,1043.7,1,1,180,0,0,60.5,60.5);

	this.instance_114 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_114.setTransform(1940.8,1044.2,1,1,180,0,0,60.5,60.5);

	this.instance_115 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_115.setTransform(1272,1044.8,1,1,180,0,0,60.5,60.5);

	this.instance_116 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_116.setTransform(1776.4,1010.7,1,1,180);

	this.instance_117 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_117.setTransform(1146.2,1017.4,0.722,0.734);

	this.instance_118 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_118.setTransform(1078.1,1021.9,0.681,0.697);

	this.instance_119 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_119.setTransform(1056.1,1020,0.747,0.713);

	this.instance_120 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_120.setTransform(988,1019.5,0.705,0.718);

	this.instance_121 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_121.setTransform(920.9,1020.5,0.643,0.709);

	this.instance_122 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_122.setTransform(852.8,1022.5,0.676,0.693);

	this.instance_123 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_123.setTransform(1280.3,1314.7,1.013,1.184,0,0,0,60,60);

	this.instance_124 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_124.setTransform(1327.2,1316.2,1.013,1.16,0,0,0,60,60);

	this.instance_125 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_125.setTransform(1445.7,1316.1,1.013,1.16,0,0,0,60,60);

	this.instance_126 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_126.setTransform(1790.7,1315.8,1.013,1.16,0,0,0,60,60);

	this.instance_127 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_127.setTransform(1563.6,1315.5,1.013,1.16,0,0,0,60,60);

	this.instance_128 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_128.setTransform(1682,1315.4,1.013,1.16,0,0,0,60,60);

	this.instance_129 = new lib.ground_hyphen_right_dot_png();
	this.instance_129.setTransform(1787.7,1315.2,1.013,1.16,180,0,0,53.5,60.5);

	this.instance_130 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_130.setTransform(1909.9,1316.2,1.013,1.16,0,0,0,60,60);

	this.instance_131 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_131.setTransform(1279,1190.2,1.013,1.02,0,0,0,60,60);

	this.instance_132 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_132.setTransform(1325.9,1191.4,1.013,1,0,0,0,60,60);

	this.instance_133 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_133.setTransform(1444.4,1191.4,1.013,1,0,0,0,60,60);

	this.instance_134 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_134.setTransform(1789.4,1191.1,1.013,1,0,0,0,60,60);

	this.instance_135 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_135.setTransform(1562.3,1190.8,1.013,1,0,0,0,60,60);

	this.instance_136 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_136.setTransform(1680.7,1190.8,1.013,1,0,0,0,60,60);

	this.instance_137 = new lib.ground_hyphen_right_dot_png();
	this.instance_137.setTransform(1786.4,1190.6,1.013,1,180,0,0,53.5,60.5);

	this.instance_138 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_138.setTransform(1908.6,1191.4,1.013,1,0,0,0,60,60);

	this.instance_139 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_139.setTransform(2982,1251.4,1.687,1.111);

	this.instance_140 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_140.setTransform(2129.4,1318.8,1,1.111,0,0,0,60,60);

	this.instance_141 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_141.setTransform(2022.1,1318.5,1,1.111,0,0,0,60,60);

	this.instance_142 = new lib.ground_hyphen_right_dot_png();
	this.instance_142.setTransform(2126.4,1318.3,1,1.111,180,0,0,53.5,60.5);

	this.instance_143 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_143.setTransform(2221.5,1318.8,1,1.111,0,0,0,60,60);

	this.instance_144 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_144.setTransform(2278.7,1318.5,1,1.111,0,0,0,60,60);

	this.instance_145 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_145.setTransform(2395.6,1318.5,1,1.111,0,0,0,60,60);

	this.instance_146 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_146.setTransform(2510.4,1318.5,1,1.111,0,0,0,60,60);

	this.instance_147 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_147.setTransform(2562.3,1317.7,1,1.111,0,0,0,60,60);

	this.instance_148 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_148.setTransform(2639.9,1317.7,1,1.111,0,0,0,60,60);

	this.instance_149 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_149.setTransform(2752.3,1317.7,1,1.111,0,0,0,60,60);

	this.instance_150 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_150.setTransform(2865.5,1317.7,1,1.111,0,0,0,60,60);

	this.instance_151 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_151.setTransform(2979.5,1317.7,1.113,1.111,0,0,0,60,60);

	this.instance_152 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_152.setTransform(2980.6,1137.7,1.697,1);

	this.instance_153 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_153.setTransform(2128.1,1198.5,1,1,0,0,0,60,60);

	this.instance_154 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_154.setTransform(2020.8,1198.2,1,1,0,0,0,60,60);

	this.instance_155 = new lib.ground_hyphen_right_dot_png();
	this.instance_155.setTransform(2125.2,1198,1,1,180,0,0,53.5,60.5);

	this.instance_156 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_156.setTransform(2220.3,1198.5,1,1,0,0,0,60,60);

	this.instance_157 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_157.setTransform(2277.5,1198.2,1,1,0,0,0,60,60);

	this.instance_158 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_158.setTransform(2394.4,1198.1,1,1,0,0,0,60,60);

	this.instance_159 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_159.setTransform(2509.1,1198.1,1,1,0,0,0,60,60);

	this.instance_160 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_160.setTransform(2561.1,1197.5,1,1,0,0,0,60,60);

	this.instance_161 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_161.setTransform(2638.6,1197.5,1,1,0,0,0,60,60);

	this.instance_162 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_162.setTransform(2751.1,1197.4,1,1,0,0,0,60,60);

	this.instance_163 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_163.setTransform(2864.2,1197.4,1,1,0,0,0,60,60);

	this.instance_164 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_164.setTransform(2978.2,1197.4,1.113,1,0,0,0,60,60);

	this.instance_165 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_165.setTransform(2978.6,1021.1,1.744,1);

	this.instance_166 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_166.setTransform(2126.3,1081.8,1,1,0,0,0,60,60);

	this.instance_167 = new lib.ground_hyphen_right_dot_png();
	this.instance_167.setTransform(2123.3,1081.4,1,1,180,0,0,53.5,60.5);

	this.instance_168 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_168.setTransform(2218.4,1081.8,1,1,0,0,0,60,60);

	this.instance_169 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_169.setTransform(2275.6,1081.5,1,1,0,0,0,60,60);

	this.instance_170 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_170.setTransform(2392.5,1081.5,1,1,0,0,0,60,60);

	this.instance_171 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_171.setTransform(2507.3,1081.5,1,1,0,0,0,60,60);

	this.instance_172 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_172.setTransform(2559.2,1080.8,1,1,0,0,0,60,60);

	this.instance_173 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_173.setTransform(2636.8,1080.8,1,1,0,0,0,60,60);

	this.instance_174 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_174.setTransform(2749.2,1080.8,1,1,0,0,0,60,60);

	this.instance_175 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_175.setTransform(2862.4,1080.8,1,1,0,0,0,60,60);

	this.instance_176 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_176.setTransform(2976.4,1080.8,1.113,1,0,0,0,60,60);

	this.instance_177 = new lib.dirt1_dot_png();
	this.instance_177.setTransform(811.2,967.3,0.394,0.583,101.6);

	this.instance_178 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_178.setTransform(756.7,949.5,0.672,0.643);

	this.instance_179 = new lib.dirt4_dot_png();
	this.instance_179.setTransform(1309.4,860);

	this.instance_180 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_180.setTransform(1075.6,950.3,1,1,180,0,0,60.5,60.5);

	this.instance_181 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_181.setTransform(1194,950.9,1,1,180,0,0,60.5,60.5);

	this.instance_182 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_182.setTransform(1296.6,950.3,1,1,180,0,0,60.5,60.5);

	this.instance_183 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_183.setTransform(1415,950.8,1,1,180,0,0,60.5,60.5);

	this.instance_184 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_184.setTransform(1530.3,950.9,1,1,180,0,0,60.5,60.5);

	this.instance_185 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_185.setTransform(1648.8,951.4,1,1,180,0,0,60.5,60.5);

	this.instance_186 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_186.setTransform(1629.6,787.3,1,1,180);

	this.instance_187 = new lib.dirt3_dot_png();
	this.instance_187.setTransform(1815.1,887.7,0.558,0.646,180);

	this.instance_188 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_188.setTransform(936.9,907.6,0.772,0.615,180);

	this.instance_189 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_189.setTransform(938.9,882.8,0.843,0.839,180);

	this.instance_190 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_190.setTransform(1163,900.8,0.624,0.515);

	this.instance_191 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_191.setTransform(1098,899.5,0.593,0.515);

	this.instance_192 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_192.setTransform(1036.4,899.6,0.593,0.515);

	this.instance_193 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_193.setTransform(622,899.8,0.609,0.515);

	this.instance_194 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_194.setTransform(592.4,899.8,0.609,0.515);

	this.instance_195 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_195.setTransform(545.8,964.3,0.597,0.554);

	this.instance_196 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_196.setTransform(484.4,964.5,0.597,0.554);

	this.instance_197 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_197.setTransform(423.1,964.5,0.597,0.554);

	this.instance_198 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_198.setTransform(352.5,964.5,0.597,0.554);

	this.instance_199 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_199.setTransform(292.6,964.5,0.597,0.554);

	this.instance_200 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_200.setTransform(222.5,964.5,0.597,0.554);

	this.instance_201 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_201.setTransform(154.7,964.5,0.597,0.554);

	this.instance_202 = new lib.dirt1_dot_png();
	this.instance_202.setTransform(93,583.8,0.455,0.547);

	this.instance_203 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_203.setTransform(1511.8,774.3,0.845,1);

	this.instance_204 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_204.setTransform(1410.9,774.3,0.845,1);

	this.instance_205 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_205.setTransform(1310.5,774.3,0.845,1);

	this.instance_206 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_206.setTransform(1194.5,774);

	this.instance_207 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_207.setTransform(1075.1,774);

	this.instance_208 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_208.setTransform(983.6,834,1,1,0,0,0,60.5,60);

	this.instance_209 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_209.setTransform(968.1,769.9);

	this.instance_210 = new lib.bone_dot_png();
	this.instance_210.setTransform(2399.6,858.9,1.667,1.556,0,0,0,22.5,13.5);

	this.instance_211 = new lib.dirt1_dot_png();
	this.instance_211.setTransform(2307.7,781.5,0.455,0.353,0,0,0,55,80);

	this.instance_212 = new lib.dirt4_dot_png();
	this.instance_212.setTransform(2101.6,727.6,1,1,180);

	this.instance_213 = new lib.dirt1_dot_png();
	this.instance_213.setTransform(2979.3,831.9,1.082,1);

	this.instance_214 = new lib.dirt4_dot_png();
	this.instance_214.setTransform(2088.7,652.6);

	this.instance_215 = new lib.dirt4_dot_png();
	this.instance_215.setTransform(2388.3,889.1);

	this.instance_216 = new lib.dirt3_dot_png();
	this.instance_216.setTransform(1762.9,895.4,1,1,180);

	this.instance_217 = new lib.dirt2_dot_png();
	this.instance_217.setTransform(2553.3,935.5,0.433,0.488,0,0,0,118.5,52.5);

	this.instance_218 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_218.setTransform(1614.2,653.2,1,1,180,0,0,14.5,60.5);

	this.instance_219 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_219.setTransform(2977.3,911.1,1.753,1);

	this.instance_220 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_220.setTransform(2218.1,911.6);

	this.instance_221 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_221.setTransform(2335,911.6);

	this.instance_222 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_222.setTransform(2509.7,971.6,1,1,0,0,0,60,60);

	this.instance_223 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_223.setTransform(2561.7,970.9,1,1,0,0,0,60,60);

	this.instance_224 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_224.setTransform(2639.2,970.9,1,1,0,0,0,60,60);

	this.instance_225 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_225.setTransform(2751.7,970.9,1,1,0,0,0,60,60);

	this.instance_226 = new lib.ground_hyphen_left_dot_png();
	this.instance_226.setTransform(3037.7,970.6,1.082,1,180,0,0,53.5,60.5);

	this.instance_227 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_227.setTransform(1722.2,868,1,1,180,0,0,60.5,60.5);

	this.instance_228 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_228.setTransform(1841.3,868,1,1,180,0,0,60.5,60.5);

	this.instance_229 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_229.setTransform(1959.2,868,1,1,180,0,0,60.5,60.5);

	this.instance_230 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_230.setTransform(2076.7,868,1,1,180,0,0,60.5,60.5);

	this.instance_231 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_231.setTransform(2194.8,868,1,1,180,0,0,60.5,60.5);

	this.instance_232 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_232.setTransform(2313,868,1,1,180,0,0,60.5,60.5);

	this.instance_233 = new lib.ground_hyphen_left_dot_png();
	this.instance_233.setTransform(2672.8,935.3,1.723,1.066,180);

	this.instance_234 = new lib.ground_hyphen_right_dot_png();
	this.instance_234.setTransform(2498.6,702.5,1.654,1);

	this.instance_235 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_235.setTransform(2449.5,765.2,1,1,0,0,0,60.5,60.5);

	this.instance_236 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_236.setTransform(2269.9,704.7);

	this.instance_237 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_237.setTransform(2212.6,765.2,1,1,0,0,0,60.5,60.5);

	this.instance_238 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_238.setTransform(2095.1,765.2,1,1,0,0,0,60.5,60.5);

	this.instance_239 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_239.setTransform(1916.5,704.7);

	this.instance_240 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_240.setTransform(1788.3,704.7,1.215,1);

	this.instance_241 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_241.setTransform(1735.8,762.2,1.091,1,0,0,0,60.5,60.5);

	this.instance_242 = new lib.ground_hyphen_left_dot_png();
	this.instance_242.setTransform(1659.7,764.5,1,1,0,0,0,53.5,60.5);

	this.instance_243 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_243.setTransform(2443.4,645.4,1.141,1,0,0,0,60.5,60.5);

	this.instance_244 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_244.setTransform(2343.4,645.4,1,1,0,0,0,60.5,60.5);

	this.instance_245 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_245.setTransform(2224,645.4,1,1,0,0,0,60.5,60.5);

	this.instance_246 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_246.setTransform(2044.7,584.9);

	this.instance_247 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_247.setTransform(1925.4,584.9);

	this.instance_248 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_248.setTransform(2496.1,586.8,1.651,1);

	this.instance_249 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_249.setTransform(1806,584.9);

	this.instance_250 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_250.setTransform(1686.5,584.9);

	this.instance_251 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_251.setTransform(1604.6,584.9);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(4.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_252 = new lib.dirt3_dot_png();
	this.instance_252.setTransform(1661.2,715.9,1,1,180,0,0,55,88);

	this.instance_253 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_253.setTransform(989.6,951.7,1,1.15,180,0,0,60.5,60.5);

	this.instance_254 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_254.setTransform(1863.7,929.7,1,1,180);

	this.instance_255 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_255.setTransform(1713.5,891.7,1,1,180,0,0,60.5,60.5);

	this.instance_256 = new lib.leaves1_dot_png();
	this.instance_256.setTransform(360,958.5,1,1,0,0,0,18.5,15);

	this.instance_257 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_257.setTransform(730.7,1022.8,1.142,0.851);

	this.instance_258 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_258.setTransform(1131.7,942.3,0.829,0.807);

	this.instance_259 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_259.setTransform(1069.7,942.8,0.722,0.832);

	this.instance_260 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_260.setTransform(1043.1,989.2,0.615,0.807,0,0,0,59.3,58.1);

	this.instance_261 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_261.setTransform(700.1,942.8,0.615,0.807);

	this.instance_262 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_262.setTransform(628.5,940,0.615,0.807);

	this.instance_263 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_263.setTransform(590.2,933,0.615,0.807);

	this.instance_264 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_264.setTransform(2523.3,926.7,1.782,1.145,180);

	this.instance_265 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_265.setTransform(2978.8,970.9,1.113,1,0,0,0,60,60);

	this.instance_266 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_266.setTransform(2864.8,970.9,1,1,0,0,0,60,60);

	this.instance_267 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_267.setTransform(9.6,656,1,1,0,0,0,89.5,111);

	this.instance_268 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_268.setTransform(84.9,656,1,1,0,0,0,89.5,111);

	this.instance_269 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_269.setTransform(5.8,864.2,1,1,0,0,0,89.5,111);

	this.instance_270 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_270.setTransform(81.1,864.2,1,1,0,0,0,89.5,111);

	this.instance_271 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_271.setTransform(1694.5,928.8,1,1,180);

	this.addChild(this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.isDisp,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.7,-0.5,3247.1,1387);


(lib.level8PixiBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hazardsign_dot_png();
	this.instance.setTransform(1214.3,723.6,0.647,0.647,0,0,0,51,46);

	this.instance_1 = new lib.endpole_dot_png();
	this.instance_1.setTransform(1216,779.2,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_2 = new lib.hazardsign_dot_png();
	this.instance_2.setTransform(3036.5,719.1,0.647,0.647,0,0,0,51,46);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(3038.1,764.9,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(5072.6,455.5,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.endflag_dot_png();
	this.instance_5.setTransform(5099.7,221.9,1,1,0,0,0,49,56);

	this.instance_6 = new lib.endpole_dot_png();
	this.instance_6.setTransform(5072.2,309.1,1,1,0,0,0,8,39.5);

	this.instance_7 = new lib.endpole_dot_png();
	this.instance_7.setTransform(5072.5,376.9,1,1,0,0,0,8,39.5);

	this.instance_8 = new lib.endpole_dot_png();
	this.instance_8.setTransform(5072.7,533.8,1,1,0,0,0,8,39.5);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(1187.8,-58,0.381,0.381,0,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(1187.8,-2,0.381,0.381,0,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(749.2,-29.7,0.381,0.381,0,0,0,7,74);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(749.2,26.3,0.381,0.381,0,0,0,7,74);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(749.2,82.3,0.381,0.381,0,0,0,7,74);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(749.2,138.3,0.381,0.381,0,0,0,7,74);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(749.2,194.3,0.381,0.381,0,0,0,7,74);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(749.2,250.3,0.381,0.381,0,0,0,7,74);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(749.2,306.3,0.381,0.381,0,0,0,7,74);

	this.instance_18 = new lib.hook_dot_png();
	this.instance_18.setTransform(4374.8,485.1,0.405,0.358,0,0,0,41,96.5);

	this.instance_19 = new lib.hook_dot_png();
	this.instance_19.setTransform(3936.3,672,0.405,0.358,0,0,0,41,96.5);

	this.instance_20 = new lib.hook_dot_png();
	this.instance_20.setTransform(3750.4,672,0.405,0.358,0,0,0,41,96.5);

	this.instance_21 = new lib.hook_dot_png();
	this.instance_21.setTransform(3562.5,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_22 = new lib.hook_dot_png();
	this.instance_22.setTransform(3375.6,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_23 = new lib.hook_dot_png();
	this.instance_23.setTransform(3187.5,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_24 = new lib.hook_dot_png();
	this.instance_24.setTransform(3001.2,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_25 = new lib.hook_dot_png();
	this.instance_25.setTransform(2812.4,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_26 = new lib.hook_dot_png();
	this.instance_26.setTransform(2624.8,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_27 = new lib.hook_dot_png();
	this.instance_27.setTransform(2374.8,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_28 = new lib.hook_dot_png();
	this.instance_28.setTransform(2062.2,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_29 = new lib.hazardsign_dot_png();
	this.instance_29.setTransform(2090.7,718.6,0.647,0.647,0,0,0,51,46);

	this.instance_30 = new lib.endpole_dot_png();
	this.instance_30.setTransform(2092.4,774.1,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_31 = new lib.hook_dot_png();
	this.instance_31.setTransform(1687.2,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_32 = new lib.hook_dot_png();
	this.instance_32.setTransform(1187.7,672.7,0.405,0.358,0,0,0,41,96.5);

	this.instance_33 = new lib.hook_dot_png();
	this.instance_33.setTransform(749.5,421.1,0.405,0.358,0,0,0,41,96.5);

	this.instance_34 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_34.setTransform(749.2,362.3,0.381,0.381,0,0,0,7,74);

	this.instance_35 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_35.setTransform(1187.8,54,0.381,0.381,0,0,0,7,74);

	this.instance_36 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_36.setTransform(1187.8,110,0.381,0.381,0,0,0,7,74);

	this.instance_37 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_37.setTransform(1187.8,166,0.381,0.381,0,0,0,7,74);

	this.instance_38 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_38.setTransform(1187.8,221.8,0.381,0.381,0,0,0,7,74);

	this.instance_39 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_39.setTransform(1187.8,277.8,0.381,0.381,0,0,0,7,74);

	this.instance_40 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_40.setTransform(1187.8,333.8,0.381,0.381,0,0,0,7,74);

	this.instance_41 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_41.setTransform(1187.8,389.8,0.381,0.381,0,0,0,7,74);

	this.instance_42 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_42.setTransform(1187.8,445.8,0.381,0.381,0,0,0,7,74);

	this.instance_43 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_43.setTransform(1187.8,501.8,0.381,0.381,0,0,0,7,74);

	this.instance_44 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_44.setTransform(1187.8,557.8,0.381,0.381,0,0,0,7,74);

	this.instance_45 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_45.setTransform(1187.8,613.8,0.381,0.381,0,0,0,7,74);

	this.instance_46 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_46.setTransform(1686.8,-59.4,0.381,0.381,0,0,0,7,74);

	this.instance_47 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_47.setTransform(1686.8,-3.4,0.381,0.381,0,0,0,7,74);

	this.instance_48 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_48.setTransform(1686.8,52.6,0.381,0.381,0,0,0,7,74);

	this.instance_49 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_49.setTransform(1686.8,108.6,0.381,0.381,0,0,0,7,74);

	this.instance_50 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_50.setTransform(1686.8,164.6,0.381,0.381,0,0,0,7,74);

	this.instance_51 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_51.setTransform(1686.8,220.4,0.381,0.381,0,0,0,7,74);

	this.instance_52 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_52.setTransform(1686.8,276.4,0.381,0.381,0,0,0,7,74);

	this.instance_53 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_53.setTransform(1686.8,332.4,0.381,0.381,0,0,0,7,74);

	this.instance_54 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_54.setTransform(1686.8,388.4,0.381,0.381,0,0,0,7,74);

	this.instance_55 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_55.setTransform(1686.8,444.4,0.381,0.381,0,0,0,7,74);

	this.instance_56 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_56.setTransform(1686.8,500.4,0.381,0.381,0,0,0,7,74);

	this.instance_57 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_57.setTransform(1686.8,556.4,0.381,0.381,0,0,0,7,74);

	this.instance_58 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_58.setTransform(1686.8,612.4,0.381,0.381,0,0,0,7,74);

	this.instance_59 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_59.setTransform(2061.6,-59.4,0.381,0.381,0,0,0,7,74);

	this.instance_60 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_60.setTransform(2061.6,-3.4,0.381,0.381,0,0,0,7,74);

	this.instance_61 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_61.setTransform(2061.6,52.6,0.381,0.381,0,0,0,7,74);

	this.instance_62 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_62.setTransform(2061.6,108.6,0.381,0.381,0,0,0,7,74);

	this.instance_63 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_63.setTransform(2061.6,164.6,0.381,0.381,0,0,0,7,74);

	this.instance_64 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_64.setTransform(2061.6,220.4,0.381,0.381,0,0,0,7,74);

	this.instance_65 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_65.setTransform(2061.6,276.4,0.381,0.381,0,0,0,7,74);

	this.instance_66 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_66.setTransform(2061.6,332.4,0.381,0.381,0,0,0,7,74);

	this.instance_67 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_67.setTransform(2061.6,388.4,0.381,0.381,0,0,0,7,74);

	this.instance_68 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_68.setTransform(2061.6,444.4,0.381,0.381,0,0,0,7,74);

	this.instance_69 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_69.setTransform(2061.6,500.4,0.381,0.381,0,0,0,7,74);

	this.instance_70 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_70.setTransform(2061.6,556.4,0.381,0.381,0,0,0,7,74);

	this.instance_71 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_71.setTransform(2061.6,612.4,0.381,0.381,0,0,0,7,74);

	this.instance_72 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_72.setTransform(2374.3,-59.4,0.381,0.381,0,0,0,7,74);

	this.instance_73 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_73.setTransform(2374.3,-3.4,0.381,0.381,0,0,0,7,74);

	this.instance_74 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_74.setTransform(2374.3,52.6,0.381,0.381,0,0,0,7,74);

	this.instance_75 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_75.setTransform(2374.3,108.6,0.381,0.381,0,0,0,7,74);

	this.instance_76 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_76.setTransform(2374.3,164.6,0.381,0.381,0,0,0,7,74);

	this.instance_77 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_77.setTransform(2374.3,220.4,0.381,0.381,0,0,0,7,74);

	this.instance_78 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_78.setTransform(2374.3,276.4,0.381,0.381,0,0,0,7,74);

	this.instance_79 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_79.setTransform(2374.3,332.4,0.381,0.381,0,0,0,7,74);

	this.instance_80 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_80.setTransform(2374.3,388.4,0.381,0.381,0,0,0,7,74);

	this.instance_81 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_81.setTransform(2374.3,444.4,0.381,0.381,0,0,0,7,74);

	this.instance_82 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_82.setTransform(2374.3,500.4,0.381,0.381,0,0,0,7,74);

	this.instance_83 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_83.setTransform(2374.3,556.4,0.381,0.381,0,0,0,7,74);

	this.instance_84 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_84.setTransform(2374.3,612.4,0.381,0.381,0,0,0,7,74);

	this.instance_85 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_85.setTransform(2624.6,-59.4,0.381,0.381,0,0,0,7,74);

	this.instance_86 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_86.setTransform(2624.6,-3.4,0.381,0.381,0,0,0,7,74);

	this.instance_87 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_87.setTransform(2624.6,52.6,0.381,0.381,0,0,0,7,74);

	this.instance_88 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_88.setTransform(2624.6,108.6,0.381,0.381,0,0,0,7,74);

	this.instance_89 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_89.setTransform(2624.6,164.6,0.381,0.381,0,0,0,7,74);

	this.instance_90 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_90.setTransform(2624.6,220.4,0.381,0.381,0,0,0,7,74);

	this.instance_91 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_91.setTransform(2624.6,276.4,0.381,0.381,0,0,0,7,74);

	this.instance_92 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_92.setTransform(2624.6,332.4,0.381,0.381,0,0,0,7,74);

	this.instance_93 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_93.setTransform(2624.6,388.4,0.381,0.381,0,0,0,7,74);

	this.instance_94 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_94.setTransform(2624.6,444.4,0.381,0.381,0,0,0,7,74);

	this.instance_95 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_95.setTransform(2624.6,500.4,0.381,0.381,0,0,0,7,74);

	this.instance_96 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_96.setTransform(2624.6,556.4,0.381,0.381,0,0,0,7,74);

	this.instance_97 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_97.setTransform(2624.6,612.4,0.381,0.381,0,0,0,7,74);

	this.instance_98 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_98.setTransform(2812.3,-59.4,0.381,0.381,0,0,0,7,74);

	this.instance_99 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_99.setTransform(2812.3,-3.4,0.381,0.381,0,0,0,7,74);

	this.instance_100 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_100.setTransform(2812.3,52.6,0.381,0.381,0,0,0,7,74);

	this.instance_101 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_101.setTransform(2812.3,108.6,0.381,0.381,0,0,0,7,74);

	this.instance_102 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_102.setTransform(2812.3,164.6,0.381,0.381,0,0,0,7,74);

	this.instance_103 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_103.setTransform(2812.3,220.4,0.381,0.381,0,0,0,7,74);

	this.instance_104 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_104.setTransform(2812.3,276.4,0.381,0.381,0,0,0,7,74);

	this.instance_105 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_105.setTransform(2812.3,332.4,0.381,0.381,0,0,0,7,74);

	this.instance_106 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_106.setTransform(2812.3,388.4,0.381,0.381,0,0,0,7,74);

	this.instance_107 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_107.setTransform(2812.3,444.4,0.381,0.381,0,0,0,7,74);

	this.instance_108 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_108.setTransform(2812.3,500.4,0.381,0.381,0,0,0,7,74);

	this.instance_109 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_109.setTransform(2812.3,556.4,0.381,0.381,0,0,0,7,74);

	this.instance_110 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_110.setTransform(2812.3,612.4,0.381,0.381,0,0,0,7,74);

	this.instance_111 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_111.setTransform(3001.1,-59.4,0.381,0.381,0,0,0,7,74);

	this.instance_112 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_112.setTransform(3001.1,-3.4,0.381,0.381,0,0,0,7,74);

	this.instance_113 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_113.setTransform(3001.1,52.6,0.381,0.381,0,0,0,7,74);

	this.instance_114 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_114.setTransform(3001.1,108.6,0.381,0.381,0,0,0,7,74);

	this.instance_115 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_115.setTransform(3001.1,164.6,0.381,0.381,0,0,0,7,74);

	this.instance_116 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_116.setTransform(3001.1,220.4,0.381,0.381,0,0,0,7,74);

	this.instance_117 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_117.setTransform(3001.1,276.4,0.381,0.381,0,0,0,7,74);

	this.instance_118 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_118.setTransform(3001.1,332.4,0.381,0.381,0,0,0,7,74);

	this.instance_119 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_119.setTransform(3001.1,388.4,0.381,0.381,0,0,0,7,74);

	this.instance_120 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_120.setTransform(3001.1,444.4,0.381,0.381,0,0,0,7,74);

	this.instance_121 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_121.setTransform(3001.1,500.4,0.381,0.381,0,0,0,7,74);

	this.instance_122 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_122.setTransform(3001.1,556.4,0.381,0.381,0,0,0,7,74);

	this.instance_123 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_123.setTransform(3001.1,612.4,0.381,0.381,0,0,0,7,74);

	this.instance_124 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_124.setTransform(3187.3,-59.4,0.381,0.381,0,0,0,7,74);

	this.instance_125 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_125.setTransform(3187.3,-3.4,0.381,0.381,0,0,0,7,74);

	this.instance_126 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_126.setTransform(3187.3,52.6,0.381,0.381,0,0,0,7,74);

	this.instance_127 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_127.setTransform(3187.3,108.6,0.381,0.381,0,0,0,7,74);

	this.instance_128 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_128.setTransform(3187.3,164.6,0.381,0.381,0,0,0,7,74);

	this.instance_129 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_129.setTransform(3187.3,220.4,0.381,0.381,0,0,0,7,74);

	this.instance_130 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_130.setTransform(3187.3,276.4,0.381,0.381,0,0,0,7,74);

	this.instance_131 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_131.setTransform(3187.3,332.4,0.381,0.381,0,0,0,7,74);

	this.instance_132 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_132.setTransform(3187.3,388.4,0.381,0.381,0,0,0,7,74);

	this.instance_133 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_133.setTransform(3187.3,444.4,0.381,0.381,0,0,0,7,74);

	this.instance_134 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_134.setTransform(3187.3,500.4,0.381,0.381,0,0,0,7,74);

	this.instance_135 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_135.setTransform(3187.3,556.4,0.381,0.381,0,0,0,7,74);

	this.instance_136 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_136.setTransform(3187.3,612.4,0.381,0.381,0,0,0,7,74);

	this.instance_137 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_137.setTransform(3375.6,-59.4,0.381,0.381,0,0,0,7,74);

	this.instance_138 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_138.setTransform(3375.6,-3.4,0.381,0.381,0,0,0,7,74);

	this.instance_139 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_139.setTransform(3375.6,52.6,0.381,0.381,0,0,0,7,74);

	this.instance_140 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_140.setTransform(3375.6,108.6,0.381,0.381,0,0,0,7,74);

	this.instance_141 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_141.setTransform(3375.6,164.6,0.381,0.381,0,0,0,7,74);

	this.instance_142 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_142.setTransform(3375.6,220.4,0.381,0.381,0,0,0,7,74);

	this.instance_143 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_143.setTransform(3375.6,276.4,0.381,0.381,0,0,0,7,74);

	this.instance_144 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_144.setTransform(3375.6,332.4,0.381,0.381,0,0,0,7,74);

	this.instance_145 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_145.setTransform(3375.6,388.4,0.381,0.381,0,0,0,7,74);

	this.instance_146 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_146.setTransform(3375.6,444.4,0.381,0.381,0,0,0,7,74);

	this.instance_147 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_147.setTransform(3375.6,500.4,0.381,0.381,0,0,0,7,74);

	this.instance_148 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_148.setTransform(3375.6,556.4,0.381,0.381,0,0,0,7,74);

	this.instance_149 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_149.setTransform(3375.6,612.4,0.381,0.381,0,0,0,7,74);

	this.instance_150 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_150.setTransform(3562.3,-59.4,0.381,0.381,0,0,0,7,74);

	this.instance_151 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_151.setTransform(3562.3,-3.4,0.381,0.381,0,0,0,7,74);

	this.instance_152 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_152.setTransform(3562.3,52.6,0.381,0.381,0,0,0,7,74);

	this.instance_153 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_153.setTransform(3562.3,108.6,0.381,0.381,0,0,0,7,74);

	this.instance_154 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_154.setTransform(3562.3,164.6,0.381,0.381,0,0,0,7,74);

	this.instance_155 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_155.setTransform(3562.3,220.4,0.381,0.381,0,0,0,7,74);

	this.instance_156 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_156.setTransform(3562.3,276.4,0.381,0.381,0,0,0,7,74);

	this.instance_157 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_157.setTransform(3562.3,332.4,0.381,0.381,0,0,0,7,74);

	this.instance_158 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_158.setTransform(3562.3,388.4,0.381,0.381,0,0,0,7,74);

	this.instance_159 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_159.setTransform(3562.3,444.4,0.381,0.381,0,0,0,7,74);

	this.instance_160 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_160.setTransform(3562.3,500.4,0.381,0.381,0,0,0,7,74);

	this.instance_161 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_161.setTransform(3562.3,556.4,0.381,0.381,0,0,0,7,74);

	this.instance_162 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_162.setTransform(3562.3,612.4,0.381,0.381,0,0,0,7,74);

	this.instance_163 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_163.setTransform(3750.3,-60.6,0.381,0.381,0,0,0,7,74);

	this.instance_164 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_164.setTransform(3750.3,-4.6,0.381,0.381,0,0,0,7,74);

	this.instance_165 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_165.setTransform(3750.3,51.4,0.381,0.381,0,0,0,7,74);

	this.instance_166 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_166.setTransform(3750.3,107.4,0.381,0.381,0,0,0,7,74);

	this.instance_167 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_167.setTransform(3750.3,163.4,0.381,0.381,0,0,0,7,74);

	this.instance_168 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_168.setTransform(3750.3,219.1,0.381,0.381,0,0,0,7,74);

	this.instance_169 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_169.setTransform(3750.3,275.1,0.381,0.381,0,0,0,7,74);

	this.instance_170 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_170.setTransform(3750.3,331.1,0.381,0.381,0,0,0,7,74);

	this.instance_171 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_171.setTransform(3750.3,387.1,0.381,0.381,0,0,0,7,74);

	this.instance_172 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_172.setTransform(3750.3,443.1,0.381,0.381,0,0,0,7,74);

	this.instance_173 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_173.setTransform(3750.3,499.1,0.381,0.381,0,0,0,7,74);

	this.instance_174 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_174.setTransform(3750.3,555.1,0.381,0.381,0,0,0,7,74);

	this.instance_175 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_175.setTransform(3750.3,611.1,0.381,0.381,0,0,0,7,74);

	this.instance_176 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_176.setTransform(3936.1,-60,0.381,0.381,0,0,0,7,74);

	this.instance_177 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_177.setTransform(3936.1,-4,0.381,0.381,0,0,0,7,74);

	this.instance_178 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_178.setTransform(3936.1,52,0.381,0.381,0,0,0,7,74);

	this.instance_179 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_179.setTransform(3936.1,108,0.381,0.381,0,0,0,7,74);

	this.instance_180 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_180.setTransform(3936.1,164,0.381,0.381,0,0,0,7,74);

	this.instance_181 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_181.setTransform(3936.1,219.8,0.381,0.381,0,0,0,7,74);

	this.instance_182 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_182.setTransform(3936.1,275.8,0.381,0.381,0,0,0,7,74);

	this.instance_183 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_183.setTransform(3936.1,331.8,0.381,0.381,0,0,0,7,74);

	this.instance_184 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_184.setTransform(3936.1,387.8,0.381,0.381,0,0,0,7,74);

	this.instance_185 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_185.setTransform(3936.1,443.8,0.381,0.381,0,0,0,7,74);

	this.instance_186 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_186.setTransform(3936.1,499.8,0.381,0.381,0,0,0,7,74);

	this.instance_187 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_187.setTransform(3936.1,555.8,0.381,0.381,0,0,0,7,74);

	this.instance_188 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_188.setTransform(3936.1,611.8,0.381,0.381,0,0,0,7,74);

	this.instance_189 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_189.setTransform(4374.8,-247,0.381,0.381,0,0,0,7,74);

	this.instance_190 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_190.setTransform(4374.8,-191,0.381,0.381,0,0,0,7,74);

	this.instance_191 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_191.setTransform(4374.8,-135,0.381,0.381,0,0,0,7,74);

	this.instance_192 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_192.setTransform(4374.8,-79,0.381,0.381,0,0,0,7,74);

	this.instance_193 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_193.setTransform(4374.8,-23,0.381,0.381,0,0,0,7,74);

	this.instance_194 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_194.setTransform(4374.8,32.8,0.381,0.381,0,0,0,7,74);

	this.instance_195 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_195.setTransform(4374.8,88.8,0.381,0.381,0,0,0,7,74);

	this.instance_196 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_196.setTransform(4374.8,144.8,0.381,0.381,0,0,0,7,74);

	this.instance_197 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_197.setTransform(4374.8,200.8,0.381,0.381,0,0,0,7,74);

	this.instance_198 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_198.setTransform(4374.8,256.8,0.381,0.381,0,0,0,7,74);

	this.instance_199 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_199.setTransform(4374.8,312.8,0.381,0.381,0,0,0,7,74);

	this.instance_200 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_200.setTransform(4374.8,368.8,0.381,0.381,0,0,0,7,74);

	this.instance_201 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_201.setTransform(4374.8,424.8,0.381,0.381,0,0,0,7,74);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.addChild(this.isDispBG,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-275.2,5434.2,1614.6);


(lib.level8Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance.setTransform(4643.2,1137.7,1,1,0,0,0,126,111);

	this.instance_1 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_1.setTransform(5041.5,1145.9,1,1,0,0,0,126,111);

	this.instance_2 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_2.setTransform(4830.2,842.1,1,1,0,0,0,126,111);

	this.instance_3 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_3.setTransform(4491.4,1000.8,1,1,0,0,0,89.5,111);

	this.instance_4 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_4.setTransform(4845.9,1010.8,1,1,0,0,0,126,111);

	this.instance_5 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_5.setTransform(5238.4,1005.2,1,1,0,0,0,126,111);

	this.instance_6 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_6.setTransform(4491.4,835.8,1,1,0,0,0,89.5,111);

	this.instance_7 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_7.setTransform(4632,842.7,1,1,0,0,0,126,111);

	this.instance_8 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_8.setTransform(5037.1,843.3,1,1,0,0,0,126,111);

	this.instance_9 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_9.setTransform(5242.2,843.9,1,1,0,0,0,126,111);

	this.instance_10 = new lib.leaves2_dot_png();
	this.instance_10.setTransform(208.3,915.6,0.698,0.698,-17.5,0,0,21.9,19.9);

	this.instance_11 = new lib.dirt4_dot_png();
	this.instance_11.setTransform(601.3,1217.2,1,1,0,0,0,121.5,37.5);

	this.instance_12 = new lib.dirt4_dot_png();
	this.instance_12.setTransform(358.3,993.5,1,1,0,0,0,121.5,37.5);

	this.instance_13 = new lib.dirt4_dot_png();
	this.instance_13.setTransform(354.5,979.3,1,1,0,0,0,121.5,37.5);

	this.instance_14 = new lib.dirt4_dot_png();
	this.instance_14.setTransform(342.8,962.3,1,1,0,0,0,121.5,37.5);

	this.instance_15 = new lib.dirt3_dot_png();
	this.instance_15.setTransform(815.6,928.8,0.752,0.752,-93.8,0,0,55,88);

	this.instance_16 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_16.setTransform(772.6,1199.2,1,1.112,0,0,0,126,111);

	this.instance_17 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_17.setTransform(954.6,1198.1,1,1.112,0,0,0,126,111);

	this.instance_18 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_18.setTransform(172.6,1198.1,1,1.112,0,0,0,126,111);

	this.instance_19 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_19.setTransform(380.1,1198.1,1,1.112,0,0,0,126,111);

	this.instance_20 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_20.setTransform(1077.9,1197.6,1,1.112,0,0,0,52.5,110.5);

	this.instance_21 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_21.setTransform(569.3,1199.2,1,1.112,0,0,0,126,111);

	this.instance_22 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_22.setTransform(23.9,1198.7,1,1.112,0,0,0,52.5,110.5);

	this.instance_23 = new lib.water_hyphen_top_dot_png();
	this.instance_23.setTransform(1062.3,1178.6,1,1.112,0,0,0,49.5,50.1);

	this.instance_24 = new lib.water_hyphen_top_dot_png();
	this.instance_24.setTransform(967.6,1178.6,1,1.112,0,0,0,49.5,50.1);

	this.instance_25 = new lib.water_hyphen_top_dot_png();
	this.instance_25.setTransform(873.5,1178.6,1,1.112,0,0,0,49.5,50.1);

	this.instance_26 = new lib.water_hyphen_top_dot_png();
	this.instance_26.setTransform(778.8,1178.6,1,1.112,0,0,0,49.5,50.1);

	this.instance_27 = new lib.water_hyphen_top_dot_png();
	this.instance_27.setTransform(686.1,1178.4,1,1.112,0,0,0,49.5,50);

	this.instance_28 = new lib.water_hyphen_top_dot_png();
	this.instance_28.setTransform(591.4,1178.4,1,1.112,0,0,0,49.5,50);

	this.instance_29 = new lib.water_hyphen_top_dot_png();
	this.instance_29.setTransform(497.3,1178.4,1,1.112,0,0,0,49.5,50);

	this.instance_30 = new lib.water_hyphen_top_dot_png();
	this.instance_30.setTransform(402.6,1178.4,1,1.112,0,0,0,49.5,50);

	this.instance_31 = new lib.water_hyphen_top_dot_png();
	this.instance_31.setTransform(310.4,1178.4,1,1.112,0,0,0,49.5,50);

	this.instance_32 = new lib.water_hyphen_top_dot_png();
	this.instance_32.setTransform(215.7,1178.4,1,1.112,0,0,0,49.5,50);

	this.instance_33 = new lib.water_hyphen_top_dot_png();
	this.instance_33.setTransform(121.6,1178.4,1,1.112,0,0,0,49.5,50);

	this.instance_34 = new lib.water_hyphen_top_dot_png();
	this.instance_34.setTransform(26.9,1178.4,1,1.112,0,0,0,49.5,50);

	this.instance_35 = new lib.water_hyphen_middle_dot_png();
	this.instance_35.setTransform(1044.2,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_36 = new lib.water_hyphen_middle_dot_png();
	this.instance_36.setTransform(949.5,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_37 = new lib.water_hyphen_middle_dot_png();
	this.instance_37.setTransform(862.2,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_38 = new lib.water_hyphen_middle_dot_png();
	this.instance_38.setTransform(767.5,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_39 = new lib.water_hyphen_middle_dot_png();
	this.instance_39.setTransform(674.8,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_40 = new lib.water_hyphen_middle_dot_png();
	this.instance_40.setTransform(580.1,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_41 = new lib.water_hyphen_middle_dot_png();
	this.instance_41.setTransform(492.8,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_42 = new lib.water_hyphen_middle_dot_png();
	this.instance_42.setTransform(398.1,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_43 = new lib.water_hyphen_middle_dot_png();
	this.instance_43.setTransform(307.9,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_44 = new lib.water_hyphen_middle_dot_png();
	this.instance_44.setTransform(213.2,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_45 = new lib.water_hyphen_middle_dot_png();
	this.instance_45.setTransform(125.9,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_46 = new lib.water_hyphen_middle_dot_png();
	this.instance_46.setTransform(31.2,1193.7,1,1.112,0,0,0,49.5,49.5);

	this.instance_47 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_47.setTransform(574.8,822.6,1,1,0,0,0,126,111);

	this.instance_48 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_48.setTransform(960,821.6,1,1,0,0,0,126,111);

	this.instance_49 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_49.setTransform(178,821.6,1,1,0,0,0,126,111);

	this.instance_50 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_50.setTransform(1079,992.6,1,1,0,0,0,52.5,110.5);

	this.instance_51 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_51.setTransform(955.7,993.1,1,1,0,0,0,126,111);

	this.instance_52 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_52.setTransform(773.8,994.1,1,1,0,0,0,126,111);

	this.instance_53 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_53.setTransform(570.5,994.1,1,1,0,0,0,126,111);

	this.instance_54 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_54.setTransform(381.3,993.1,1,1,0,0,0,126,111);

	this.instance_55 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_55.setTransform(173.7,993.1,1,1,0,0,0,126,111);

	this.instance_56 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_56.setTransform(25.1,993.6,1,1,0,0,0,52.5,110.5);

	this.instance_57 = new lib.water_hyphen_middle_dot_png();
	this.instance_57.setTransform(1131.2,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_58 = new lib.water_hyphen_middle_dot_png();
	this.instance_58.setTransform(1041,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_59 = new lib.water_hyphen_middle_dot_png();
	this.instance_59.setTransform(946.3,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_60 = new lib.water_hyphen_middle_dot_png();
	this.instance_60.setTransform(859,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_61 = new lib.water_hyphen_middle_dot_png();
	this.instance_61.setTransform(764.3,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_62 = new lib.water_hyphen_middle_dot_png();
	this.instance_62.setTransform(671.7,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_63 = new lib.water_hyphen_middle_dot_png();
	this.instance_63.setTransform(577,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_64 = new lib.water_hyphen_middle_dot_png();
	this.instance_64.setTransform(489.7,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_65 = new lib.water_hyphen_middle_dot_png();
	this.instance_65.setTransform(395,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_66 = new lib.water_hyphen_middle_dot_png();
	this.instance_66.setTransform(304.8,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_67 = new lib.water_hyphen_middle_dot_png();
	this.instance_67.setTransform(210.1,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_68 = new lib.water_hyphen_middle_dot_png();
	this.instance_68.setTransform(122.8,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_69 = new lib.water_hyphen_middle_dot_png();
	this.instance_69.setTransform(28.1,1071.1,1,1,0,0,0,49.5,49.5);

	this.instance_70 = new lib.water_hyphen_top_dot_png();
	this.instance_70.setTransform(1063.4,975.5,1,1,0,0,0,49.5,50);

	this.instance_71 = new lib.water_hyphen_top_dot_png();
	this.instance_71.setTransform(968.7,975.5,1,1,0,0,0,49.5,50);

	this.instance_72 = new lib.water_hyphen_top_dot_png();
	this.instance_72.setTransform(874.7,975.5,1,1,0,0,0,49.5,50);

	this.instance_73 = new lib.water_hyphen_top_dot_png();
	this.instance_73.setTransform(780,975.5,1,1,0,0,0,49.5,50);

	this.instance_74 = new lib.water_hyphen_top_dot_png();
	this.instance_74.setTransform(687.2,975.4,1,1,0,0,0,49.5,50);

	this.instance_75 = new lib.water_hyphen_top_dot_png();
	this.instance_75.setTransform(592.5,975.4,1,1,0,0,0,49.5,50);

	this.instance_76 = new lib.water_hyphen_top_dot_png();
	this.instance_76.setTransform(498.5,975.4,1,1,0,0,0,49.5,50);

	this.instance_77 = new lib.water_hyphen_top_dot_png();
	this.instance_77.setTransform(403.8,975.4,1,1,0,0,0,49.5,50);

	this.instance_78 = new lib.water_hyphen_top_dot_png();
	this.instance_78.setTransform(311.5,975.4,1,1,0,0,0,49.5,50);

	this.instance_79 = new lib.water_hyphen_top_dot_png();
	this.instance_79.setTransform(216.8,975.4,1,1,0,0,0,49.5,50);

	this.instance_80 = new lib.water_hyphen_top_dot_png();
	this.instance_80.setTransform(122.8,975.4,1,1,0,0,0,49.5,50);

	this.instance_81 = new lib.water_hyphen_top_dot_png();
	this.instance_81.setTransform(28.1,975.4,1,1,0,0,0,49.5,50);

	this.instance_82 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_82.setTransform(1083.3,821.1,1,1,0,0,0,52.5,110.5);

	this.instance_83 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_83.setTransform(778.1,822.6,1,1,0,0,0,126,111);

	this.instance_84 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_84.setTransform(385.6,821.6,1,1,0,0,0,126,111);

	this.instance_85 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_85.setTransform(29.4,822.1,1,1,0,0,0,52.5,110.5);

	this.instance_86 = new lib.water_hyphen_bottom_dot_png();
	this.instance_86.setTransform(4364.7,1256.4,1,1,0,0,0,49.5,49.5);

	this.instance_87 = new lib.water_hyphen_bottom_dot_png();
	this.instance_87.setTransform(4270.6,1256.4,1,1,0,0,0,49.5,49.5);

	this.instance_88 = new lib.water_hyphen_bottom_dot_png();
	this.instance_88.setTransform(4175.9,1256.4,1,1,0,0,0,49.5,49.5);

	this.instance_89 = new lib.water_hyphen_bottom_dot_png();
	this.instance_89.setTransform(4083.7,1256.4,1,1,0,0,0,49.5,49.5);

	this.instance_90 = new lib.water_hyphen_bottom_dot_png();
	this.instance_90.setTransform(3989,1256.4,1,1,0,0,0,49.5,49.5);

	this.instance_91 = new lib.water_hyphen_bottom_dot_png();
	this.instance_91.setTransform(3894.9,1256.4,1,1,0,0,0,49.5,49.5);

	this.instance_92 = new lib.water_hyphen_bottom_dot_png();
	this.instance_92.setTransform(3800.2,1256.4,1,1,0,0,0,49.5,49.5);

	this.instance_93 = new lib.water_hyphen_bottom_dot_png();
	this.instance_93.setTransform(3707.5,1256.3,1,1,0,0,0,49.5,49.5);

	this.instance_94 = new lib.water_hyphen_bottom_dot_png();
	this.instance_94.setTransform(3612.8,1256.3,1,1,0,0,0,49.5,49.5);

	this.instance_95 = new lib.water_hyphen_bottom_dot_png();
	this.instance_95.setTransform(3518.7,1256.3,1,1,0,0,0,49.5,49.5);

	this.instance_96 = new lib.water_hyphen_bottom_dot_png();
	this.instance_96.setTransform(3424,1256.3,1,1,0,0,0,49.5,49.5);

	this.instance_97 = new lib.water_hyphen_bottom_dot_png();
	this.instance_97.setTransform(3331.8,1256.3,1,1,0,0,0,49.5,49.5);

	this.instance_98 = new lib.water_hyphen_bottom_dot_png();
	this.instance_98.setTransform(3237.1,1256.3,1,1,0,0,0,49.5,49.5);

	this.instance_99 = new lib.water_hyphen_bottom_dot_png();
	this.instance_99.setTransform(3143,1256.3,1,1,0,0,0,49.5,49.5);

	this.instance_100 = new lib.water_hyphen_bottom_dot_png();
	this.instance_100.setTransform(3048.3,1256.3,1,1,0,0,0,49.5,49.5);

	this.instance_101 = new lib.water_hyphen_bottom_dot_png();
	this.instance_101.setTransform(2955.9,1257.5,1,1,0,0,0,49.5,49.5);

	this.instance_102 = new lib.water_hyphen_bottom_dot_png();
	this.instance_102.setTransform(2861.2,1257.5,1,1,0,0,0,49.5,49.5);

	this.instance_103 = new lib.water_hyphen_bottom_dot_png();
	this.instance_103.setTransform(2767.1,1257.5,1,1,0,0,0,49.5,49.5);

	this.instance_104 = new lib.water_hyphen_bottom_dot_png();
	this.instance_104.setTransform(2672.4,1257.5,1,1,0,0,0,49.5,49.5);

	this.instance_105 = new lib.water_hyphen_bottom_dot_png();
	this.instance_105.setTransform(2580.2,1257.5,1,1,0,0,0,49.5,49.5);

	this.instance_106 = new lib.water_hyphen_bottom_dot_png();
	this.instance_106.setTransform(2485.5,1257.5,1,1,0,0,0,49.5,49.5);

	this.instance_107 = new lib.water_hyphen_bottom_dot_png();
	this.instance_107.setTransform(2391.4,1257.5,1,1,0,0,0,49.5,49.5);

	this.instance_108 = new lib.water_hyphen_bottom_dot_png();
	this.instance_108.setTransform(2296.7,1257.5,1,1,0,0,0,49.5,49.5);

	this.instance_109 = new lib.water_hyphen_bottom_dot_png();
	this.instance_109.setTransform(2204,1257.3,1,1,0,0,0,49.5,49.5);

	this.instance_110 = new lib.water_hyphen_bottom_dot_png();
	this.instance_110.setTransform(2109.3,1257.3,1,1,0,0,0,49.5,49.5);

	this.instance_111 = new lib.water_hyphen_bottom_dot_png();
	this.instance_111.setTransform(2015.2,1257.3,1,1,0,0,0,49.5,49.5);

	this.instance_112 = new lib.water_hyphen_bottom_dot_png();
	this.instance_112.setTransform(1920.5,1257.3,1,1,0,0,0,49.5,49.5);

	this.instance_113 = new lib.water_hyphen_bottom_dot_png();
	this.instance_113.setTransform(1828.3,1257.3,1,1,0,0,0,49.5,49.5);

	this.instance_114 = new lib.water_hyphen_bottom_dot_png();
	this.instance_114.setTransform(1733.6,1257.3,1,1,0,0,0,49.5,49.5);

	this.instance_115 = new lib.water_hyphen_bottom_dot_png();
	this.instance_115.setTransform(1639.5,1257.3,1,1,0,0,0,49.5,49.5);

	this.instance_116 = new lib.water_hyphen_bottom_dot_png();
	this.instance_116.setTransform(1544.8,1257.3,1,1,0,0,0,49.5,49.5);

	this.instance_117 = new lib.water_hyphen_bottom_dot_png();
	this.instance_117.setTransform(1449.2,1257,1,1,0,0,0,49.5,49.5);

	this.instance_118 = new lib.water_hyphen_bottom_dot_png();
	this.instance_118.setTransform(1354.5,1257,1,1,0,0,0,49.5,49.5);

	this.instance_119 = new lib.water_hyphen_bottom_dot_png();
	this.instance_119.setTransform(1260.4,1257,1,1,0,0,0,49.5,49.5);

	this.instance_120 = new lib.water_hyphen_bottom_dot_png();
	this.instance_120.setTransform(1165.7,1257,1,1,0,0,0,49.5,49.5);

	this.instance_121 = new lib.water_hyphen_bottom_dot_png();
	this.instance_121.setTransform(1073.5,1257,1,1,0,0,0,49.5,49.5);

	this.instance_122 = new lib.water_hyphen_bottom_dot_png();
	this.instance_122.setTransform(978.8,1257,1,1,0,0,0,49.5,49.5);

	this.instance_123 = new lib.water_hyphen_bottom_dot_png();
	this.instance_123.setTransform(884.7,1257,1,1,0,0,0,49.5,49.5);

	this.instance_124 = new lib.water_hyphen_bottom_dot_png();
	this.instance_124.setTransform(790,1257,1,1,0,0,0,49.5,49.5);

	this.instance_125 = new lib.water_hyphen_bottom_dot_png();
	this.instance_125.setTransform(697.3,1256.9,1,1,0,0,0,49.5,49.5);

	this.instance_126 = new lib.water_hyphen_bottom_dot_png();
	this.instance_126.setTransform(602.6,1256.9,1,1,0,0,0,49.5,49.5);

	this.instance_127 = new lib.water_hyphen_bottom_dot_png();
	this.instance_127.setTransform(508.5,1256.9,1,1,0,0,0,49.5,49.5);

	this.instance_128 = new lib.water_hyphen_bottom_dot_png();
	this.instance_128.setTransform(413.8,1256.9,1,1,0,0,0,49.5,49.5);

	this.instance_129 = new lib.water_hyphen_bottom_dot_png();
	this.instance_129.setTransform(321.6,1256.9,1,1,0,0,0,49.5,49.5);

	this.instance_130 = new lib.water_hyphen_bottom_dot_png();
	this.instance_130.setTransform(226.9,1256.9,1,1,0,0,0,49.5,49.5);

	this.instance_131 = new lib.water_hyphen_bottom_dot_png();
	this.instance_131.setTransform(132.8,1256.9,1,1,0,0,0,49.5,49.5);

	this.instance_132 = new lib.water_hyphen_bottom_dot_png();
	this.instance_132.setTransform(38.1,1256.9,1,1,0,0,0,49.5,49.5);

	this.instance_133 = new lib.water_hyphen_middle_dot_png();
	this.instance_133.setTransform(4351.1,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_134 = new lib.water_hyphen_middle_dot_png();
	this.instance_134.setTransform(4256.4,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_135 = new lib.water_hyphen_middle_dot_png();
	this.instance_135.setTransform(4169.1,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_136 = new lib.water_hyphen_middle_dot_png();
	this.instance_136.setTransform(4074.4,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_137 = new lib.water_hyphen_middle_dot_png();
	this.instance_137.setTransform(3984.2,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_138 = new lib.water_hyphen_middle_dot_png();
	this.instance_138.setTransform(3889.5,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_139 = new lib.water_hyphen_middle_dot_png();
	this.instance_139.setTransform(3802.2,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_140 = new lib.water_hyphen_middle_dot_png();
	this.instance_140.setTransform(3707.5,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_141 = new lib.water_hyphen_middle_dot_png();
	this.instance_141.setTransform(3614.9,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_142 = new lib.water_hyphen_middle_dot_png();
	this.instance_142.setTransform(3520.2,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_143 = new lib.water_hyphen_middle_dot_png();
	this.instance_143.setTransform(3432.9,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_144 = new lib.water_hyphen_middle_dot_png();
	this.instance_144.setTransform(3338.2,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_145 = new lib.water_hyphen_middle_dot_png();
	this.instance_145.setTransform(3248,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_146 = new lib.water_hyphen_middle_dot_png();
	this.instance_146.setTransform(3153.3,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_147 = new lib.water_hyphen_middle_dot_png();
	this.instance_147.setTransform(3066,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_148 = new lib.water_hyphen_middle_dot_png();
	this.instance_148.setTransform(2971.3,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_149 = new lib.water_hyphen_middle_dot_png();
	this.instance_149.setTransform(2889,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_150 = new lib.water_hyphen_middle_dot_png();
	this.instance_150.setTransform(2794.3,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_151 = new lib.water_hyphen_middle_dot_png();
	this.instance_151.setTransform(2707,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_152 = new lib.water_hyphen_middle_dot_png();
	this.instance_152.setTransform(2612.3,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_153 = new lib.water_hyphen_middle_dot_png();
	this.instance_153.setTransform(2522.1,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_154 = new lib.water_hyphen_middle_dot_png();
	this.instance_154.setTransform(2427.4,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_155 = new lib.water_hyphen_middle_dot_png();
	this.instance_155.setTransform(2340.1,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_156 = new lib.water_hyphen_middle_dot_png();
	this.instance_156.setTransform(2245.4,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_157 = new lib.water_hyphen_middle_dot_png();
	this.instance_157.setTransform(2152.8,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_158 = new lib.water_hyphen_middle_dot_png();
	this.instance_158.setTransform(2058.1,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_159 = new lib.water_hyphen_middle_dot_png();
	this.instance_159.setTransform(1970.8,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_160 = new lib.water_hyphen_middle_dot_png();
	this.instance_160.setTransform(1876.1,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_161 = new lib.water_hyphen_middle_dot_png();
	this.instance_161.setTransform(1785.9,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_162 = new lib.water_hyphen_middle_dot_png();
	this.instance_162.setTransform(1691.2,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_163 = new lib.water_hyphen_middle_dot_png();
	this.instance_163.setTransform(1603.9,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_164 = new lib.water_hyphen_middle_dot_png();
	this.instance_164.setTransform(1509.2,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_165 = new lib.water_hyphen_middle_dot_png();
	this.instance_165.setTransform(1412.2,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_166 = new lib.water_hyphen_middle_dot_png();
	this.instance_166.setTransform(1317.5,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_167 = new lib.water_hyphen_middle_dot_png();
	this.instance_167.setTransform(1230.2,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_168 = new lib.water_hyphen_middle_dot_png();
	this.instance_168.setTransform(1135.5,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_169 = new lib.water_hyphen_middle_dot_png();
	this.instance_169.setTransform(1045.3,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_170 = new lib.water_hyphen_middle_dot_png();
	this.instance_170.setTransform(950.6,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_171 = new lib.water_hyphen_middle_dot_png();
	this.instance_171.setTransform(863.3,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_172 = new lib.water_hyphen_middle_dot_png();
	this.instance_172.setTransform(768.6,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_173 = new lib.water_hyphen_middle_dot_png();
	this.instance_173.setTransform(676,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_174 = new lib.water_hyphen_middle_dot_png();
	this.instance_174.setTransform(581.3,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_175 = new lib.water_hyphen_middle_dot_png();
	this.instance_175.setTransform(494,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_176 = new lib.water_hyphen_middle_dot_png();
	this.instance_176.setTransform(399.3,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_177 = new lib.water_hyphen_middle_dot_png();
	this.instance_177.setTransform(309.1,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_178 = new lib.water_hyphen_middle_dot_png();
	this.instance_178.setTransform(214.4,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_179 = new lib.water_hyphen_middle_dot_png();
	this.instance_179.setTransform(127.1,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_180 = new lib.water_hyphen_middle_dot_png();
	this.instance_180.setTransform(32.4,1170.1,1,1,0,0,0,49.5,49.5);

	this.instance_181 = new lib.water_hyphen_middle_dot_png();
	this.instance_181.setTransform(4351.1,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_182 = new lib.water_hyphen_middle_dot_png();
	this.instance_182.setTransform(4256.4,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_183 = new lib.water_hyphen_middle_dot_png();
	this.instance_183.setTransform(4169.1,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_184 = new lib.water_hyphen_middle_dot_png();
	this.instance_184.setTransform(4074.4,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_185 = new lib.water_hyphen_middle_dot_png();
	this.instance_185.setTransform(3984.2,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_186 = new lib.water_hyphen_middle_dot_png();
	this.instance_186.setTransform(3889.5,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_187 = new lib.water_hyphen_middle_dot_png();
	this.instance_187.setTransform(3802.2,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_188 = new lib.water_hyphen_middle_dot_png();
	this.instance_188.setTransform(3707.5,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_189 = new lib.water_hyphen_middle_dot_png();
	this.instance_189.setTransform(3614.9,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_190 = new lib.water_hyphen_middle_dot_png();
	this.instance_190.setTransform(3520.2,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_191 = new lib.water_hyphen_middle_dot_png();
	this.instance_191.setTransform(3432.9,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_192 = new lib.water_hyphen_middle_dot_png();
	this.instance_192.setTransform(3338.2,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_193 = new lib.water_hyphen_middle_dot_png();
	this.instance_193.setTransform(3248,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_194 = new lib.water_hyphen_middle_dot_png();
	this.instance_194.setTransform(3153.3,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_195 = new lib.water_hyphen_middle_dot_png();
	this.instance_195.setTransform(3066,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_196 = new lib.water_hyphen_middle_dot_png();
	this.instance_196.setTransform(2971.3,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_197 = new lib.water_hyphen_middle_dot_png();
	this.instance_197.setTransform(2889,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_198 = new lib.water_hyphen_middle_dot_png();
	this.instance_198.setTransform(2794.3,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_199 = new lib.water_hyphen_middle_dot_png();
	this.instance_199.setTransform(2707,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_200 = new lib.water_hyphen_middle_dot_png();
	this.instance_200.setTransform(2612.3,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_201 = new lib.water_hyphen_middle_dot_png();
	this.instance_201.setTransform(2522.1,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_202 = new lib.water_hyphen_middle_dot_png();
	this.instance_202.setTransform(2427.4,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_203 = new lib.water_hyphen_middle_dot_png();
	this.instance_203.setTransform(2340.1,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_204 = new lib.water_hyphen_middle_dot_png();
	this.instance_204.setTransform(2245.4,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_205 = new lib.water_hyphen_middle_dot_png();
	this.instance_205.setTransform(2152.8,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_206 = new lib.water_hyphen_middle_dot_png();
	this.instance_206.setTransform(2058.1,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_207 = new lib.water_hyphen_middle_dot_png();
	this.instance_207.setTransform(1970.8,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_208 = new lib.water_hyphen_middle_dot_png();
	this.instance_208.setTransform(1876.1,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_209 = new lib.water_hyphen_middle_dot_png();
	this.instance_209.setTransform(1785.9,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_210 = new lib.water_hyphen_middle_dot_png();
	this.instance_210.setTransform(1691.2,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_211 = new lib.water_hyphen_middle_dot_png();
	this.instance_211.setTransform(1603.9,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_212 = new lib.water_hyphen_middle_dot_png();
	this.instance_212.setTransform(1509.2,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_213 = new lib.water_hyphen_middle_dot_png();
	this.instance_213.setTransform(1412.2,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_214 = new lib.water_hyphen_middle_dot_png();
	this.instance_214.setTransform(1317.5,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_215 = new lib.water_hyphen_middle_dot_png();
	this.instance_215.setTransform(1230.2,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_216 = new lib.water_hyphen_middle_dot_png();
	this.instance_216.setTransform(1135.5,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_217 = new lib.water_hyphen_middle_dot_png();
	this.instance_217.setTransform(1045.3,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_218 = new lib.water_hyphen_middle_dot_png();
	this.instance_218.setTransform(950.6,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_219 = new lib.water_hyphen_middle_dot_png();
	this.instance_219.setTransform(863.3,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_220 = new lib.water_hyphen_middle_dot_png();
	this.instance_220.setTransform(768.6,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_221 = new lib.water_hyphen_middle_dot_png();
	this.instance_221.setTransform(676,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_222 = new lib.water_hyphen_middle_dot_png();
	this.instance_222.setTransform(581.3,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_223 = new lib.water_hyphen_middle_dot_png();
	this.instance_223.setTransform(494,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_224 = new lib.water_hyphen_middle_dot_png();
	this.instance_224.setTransform(399.3,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_225 = new lib.water_hyphen_middle_dot_png();
	this.instance_225.setTransform(309.1,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_226 = new lib.water_hyphen_middle_dot_png();
	this.instance_226.setTransform(214.4,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_227 = new lib.water_hyphen_middle_dot_png();
	this.instance_227.setTransform(127.1,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_228 = new lib.water_hyphen_middle_dot_png();
	this.instance_228.setTransform(32.4,1080.5,1,1,0,0,0,49.5,49.5);

	this.instance_229 = new lib.water_hyphen_middle_dot_png();
	this.instance_229.setTransform(4351.1,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_230 = new lib.water_hyphen_middle_dot_png();
	this.instance_230.setTransform(4256.4,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_231 = new lib.water_hyphen_middle_dot_png();
	this.instance_231.setTransform(4169.1,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_232 = new lib.water_hyphen_middle_dot_png();
	this.instance_232.setTransform(4074.4,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_233 = new lib.water_hyphen_middle_dot_png();
	this.instance_233.setTransform(3984.2,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_234 = new lib.water_hyphen_middle_dot_png();
	this.instance_234.setTransform(3889.5,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_235 = new lib.water_hyphen_middle_dot_png();
	this.instance_235.setTransform(3802.2,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_236 = new lib.water_hyphen_middle_dot_png();
	this.instance_236.setTransform(3707.5,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_237 = new lib.water_hyphen_middle_dot_png();
	this.instance_237.setTransform(3614.9,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_238 = new lib.water_hyphen_middle_dot_png();
	this.instance_238.setTransform(3520.2,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_239 = new lib.water_hyphen_middle_dot_png();
	this.instance_239.setTransform(3432.9,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_240 = new lib.water_hyphen_middle_dot_png();
	this.instance_240.setTransform(3338.2,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_241 = new lib.water_hyphen_middle_dot_png();
	this.instance_241.setTransform(3248,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_242 = new lib.water_hyphen_middle_dot_png();
	this.instance_242.setTransform(3153.3,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_243 = new lib.water_hyphen_middle_dot_png();
	this.instance_243.setTransform(3066,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_244 = new lib.water_hyphen_middle_dot_png();
	this.instance_244.setTransform(2971.3,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_245 = new lib.water_hyphen_middle_dot_png();
	this.instance_245.setTransform(2889,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_246 = new lib.water_hyphen_middle_dot_png();
	this.instance_246.setTransform(2794.3,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_247 = new lib.water_hyphen_middle_dot_png();
	this.instance_247.setTransform(2707,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_248 = new lib.water_hyphen_middle_dot_png();
	this.instance_248.setTransform(2612.3,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_249 = new lib.water_hyphen_middle_dot_png();
	this.instance_249.setTransform(2522.1,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_250 = new lib.water_hyphen_middle_dot_png();
	this.instance_250.setTransform(2427.4,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_251 = new lib.water_hyphen_middle_dot_png();
	this.instance_251.setTransform(2340.1,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_252 = new lib.water_hyphen_middle_dot_png();
	this.instance_252.setTransform(2245.4,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_253 = new lib.water_hyphen_middle_dot_png();
	this.instance_253.setTransform(2152.8,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_254 = new lib.water_hyphen_middle_dot_png();
	this.instance_254.setTransform(2058.1,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_255 = new lib.water_hyphen_middle_dot_png();
	this.instance_255.setTransform(1970.8,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_256 = new lib.water_hyphen_middle_dot_png();
	this.instance_256.setTransform(1876.1,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_257 = new lib.water_hyphen_middle_dot_png();
	this.instance_257.setTransform(1785.9,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_258 = new lib.water_hyphen_middle_dot_png();
	this.instance_258.setTransform(1691.2,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_259 = new lib.water_hyphen_middle_dot_png();
	this.instance_259.setTransform(1603.9,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_260 = new lib.water_hyphen_middle_dot_png();
	this.instance_260.setTransform(1509.2,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_261 = new lib.water_hyphen_middle_dot_png();
	this.instance_261.setTransform(1412.2,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_262 = new lib.water_hyphen_middle_dot_png();
	this.instance_262.setTransform(1317.5,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_263 = new lib.water_hyphen_middle_dot_png();
	this.instance_263.setTransform(1230.2,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_264 = new lib.water_hyphen_middle_dot_png();
	this.instance_264.setTransform(1135.5,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_265 = new lib.water_hyphen_middle_dot_png();
	this.instance_265.setTransform(1045.3,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_266 = new lib.water_hyphen_middle_dot_png();
	this.instance_266.setTransform(950.6,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_267 = new lib.water_hyphen_middle_dot_png();
	this.instance_267.setTransform(863.3,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_268 = new lib.water_hyphen_middle_dot_png();
	this.instance_268.setTransform(768.6,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_269 = new lib.water_hyphen_middle_dot_png();
	this.instance_269.setTransform(676,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_270 = new lib.water_hyphen_middle_dot_png();
	this.instance_270.setTransform(581.3,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_271 = new lib.water_hyphen_middle_dot_png();
	this.instance_271.setTransform(494,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_272 = new lib.water_hyphen_middle_dot_png();
	this.instance_272.setTransform(399.3,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_273 = new lib.water_hyphen_middle_dot_png();
	this.instance_273.setTransform(309.1,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_274 = new lib.water_hyphen_middle_dot_png();
	this.instance_274.setTransform(214.4,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_275 = new lib.water_hyphen_middle_dot_png();
	this.instance_275.setTransform(127.1,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_276 = new lib.water_hyphen_middle_dot_png();
	this.instance_276.setTransform(32.4,989.2,1,1,0,0,0,49.5,49.5);

	this.instance_277 = new lib.water_hyphen_middle_dot_png();
	this.instance_277.setTransform(5279,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_278 = new lib.water_hyphen_middle_dot_png();
	this.instance_278.setTransform(5184.3,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_279 = new lib.water_hyphen_middle_dot_png();
	this.instance_279.setTransform(5091.7,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_280 = new lib.water_hyphen_middle_dot_png();
	this.instance_280.setTransform(4997,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_281 = new lib.water_hyphen_middle_dot_png();
	this.instance_281.setTransform(4909.7,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_282 = new lib.water_hyphen_middle_dot_png();
	this.instance_282.setTransform(4815,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_283 = new lib.water_hyphen_middle_dot_png();
	this.instance_283.setTransform(4724.8,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_284 = new lib.water_hyphen_middle_dot_png();
	this.instance_284.setTransform(4630.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_285 = new lib.water_hyphen_middle_dot_png();
	this.instance_285.setTransform(4542.8,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_286 = new lib.water_hyphen_middle_dot_png();
	this.instance_286.setTransform(4448.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_287 = new lib.water_hyphen_middle_dot_png();
	this.instance_287.setTransform(4351.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_288 = new lib.water_hyphen_middle_dot_png();
	this.instance_288.setTransform(4256.4,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_289 = new lib.water_hyphen_middle_dot_png();
	this.instance_289.setTransform(4169.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_290 = new lib.water_hyphen_middle_dot_png();
	this.instance_290.setTransform(4074.4,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_291 = new lib.water_hyphen_middle_dot_png();
	this.instance_291.setTransform(3984.2,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_292 = new lib.water_hyphen_middle_dot_png();
	this.instance_292.setTransform(3889.5,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_293 = new lib.water_hyphen_middle_dot_png();
	this.instance_293.setTransform(3802.2,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_294 = new lib.water_hyphen_middle_dot_png();
	this.instance_294.setTransform(3707.5,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_295 = new lib.water_hyphen_middle_dot_png();
	this.instance_295.setTransform(3614.9,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_296 = new lib.water_hyphen_middle_dot_png();
	this.instance_296.setTransform(3520.2,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_297 = new lib.water_hyphen_middle_dot_png();
	this.instance_297.setTransform(3432.9,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_298 = new lib.water_hyphen_middle_dot_png();
	this.instance_298.setTransform(3338.2,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_299 = new lib.water_hyphen_middle_dot_png();
	this.instance_299.setTransform(3248,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_300 = new lib.water_hyphen_middle_dot_png();
	this.instance_300.setTransform(3153.3,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_301 = new lib.water_hyphen_middle_dot_png();
	this.instance_301.setTransform(3066,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_302 = new lib.water_hyphen_middle_dot_png();
	this.instance_302.setTransform(2971.3,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_303 = new lib.water_hyphen_middle_dot_png();
	this.instance_303.setTransform(2889,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_304 = new lib.water_hyphen_middle_dot_png();
	this.instance_304.setTransform(2794.3,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_305 = new lib.water_hyphen_middle_dot_png();
	this.instance_305.setTransform(2707,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_306 = new lib.water_hyphen_middle_dot_png();
	this.instance_306.setTransform(2612.3,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_307 = new lib.water_hyphen_middle_dot_png();
	this.instance_307.setTransform(2522.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_308 = new lib.water_hyphen_middle_dot_png();
	this.instance_308.setTransform(2427.4,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_309 = new lib.water_hyphen_middle_dot_png();
	this.instance_309.setTransform(2340.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_310 = new lib.water_hyphen_middle_dot_png();
	this.instance_310.setTransform(2245.4,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_311 = new lib.water_hyphen_middle_dot_png();
	this.instance_311.setTransform(2152.8,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_312 = new lib.water_hyphen_middle_dot_png();
	this.instance_312.setTransform(2058.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_313 = new lib.water_hyphen_middle_dot_png();
	this.instance_313.setTransform(1970.8,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_314 = new lib.water_hyphen_middle_dot_png();
	this.instance_314.setTransform(1876.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_315 = new lib.water_hyphen_middle_dot_png();
	this.instance_315.setTransform(1785.9,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_316 = new lib.water_hyphen_middle_dot_png();
	this.instance_316.setTransform(1691.2,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_317 = new lib.water_hyphen_middle_dot_png();
	this.instance_317.setTransform(1603.9,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_318 = new lib.water_hyphen_middle_dot_png();
	this.instance_318.setTransform(1509.2,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_319 = new lib.water_hyphen_middle_dot_png();
	this.instance_319.setTransform(1412.2,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_320 = new lib.water_hyphen_middle_dot_png();
	this.instance_320.setTransform(1317.5,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_321 = new lib.water_hyphen_middle_dot_png();
	this.instance_321.setTransform(1230.2,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_322 = new lib.water_hyphen_middle_dot_png();
	this.instance_322.setTransform(1135.5,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_323 = new lib.water_hyphen_middle_dot_png();
	this.instance_323.setTransform(1045.3,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_324 = new lib.water_hyphen_middle_dot_png();
	this.instance_324.setTransform(950.6,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_325 = new lib.water_hyphen_middle_dot_png();
	this.instance_325.setTransform(863.3,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_326 = new lib.water_hyphen_middle_dot_png();
	this.instance_326.setTransform(768.6,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_327 = new lib.water_hyphen_middle_dot_png();
	this.instance_327.setTransform(676,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_328 = new lib.water_hyphen_middle_dot_png();
	this.instance_328.setTransform(581.3,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_329 = new lib.water_hyphen_middle_dot_png();
	this.instance_329.setTransform(494,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_330 = new lib.water_hyphen_middle_dot_png();
	this.instance_330.setTransform(399.3,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_331 = new lib.water_hyphen_middle_dot_png();
	this.instance_331.setTransform(309.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_332 = new lib.water_hyphen_middle_dot_png();
	this.instance_332.setTransform(214.4,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_333 = new lib.water_hyphen_middle_dot_png();
	this.instance_333.setTransform(127.1,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_334 = new lib.water_hyphen_middle_dot_png();
	this.instance_334.setTransform(32.4,899.6,1,1,0,0,0,49.5,49.5);

	this.instance_335 = new lib.water_hyphen_top_dot_png();
	this.instance_335.setTransform(5301.2,803.8,1,1,0,0,0,49.5,50);

	this.instance_336 = new lib.water_hyphen_top_dot_png();
	this.instance_336.setTransform(5211.1,803.4,1,1,0,0,0,49.5,50);

	this.instance_337 = new lib.water_hyphen_top_dot_png();
	this.instance_337.setTransform(5113.7,803.7,1,1,0,0,0,49.5,50);

	this.instance_338 = new lib.water_hyphen_top_dot_png();
	this.instance_338.setTransform(5019.7,803.7,1,1,0,0,0,49.5,50);

	this.instance_339 = new lib.water_hyphen_top_dot_png();
	this.instance_339.setTransform(4925,803.7,1,1,0,0,0,49.5,50);

	this.instance_340 = new lib.water_hyphen_top_dot_png();
	this.instance_340.setTransform(4832.7,803.7,1,1,0,0,0,49.5,50);

	this.instance_341 = new lib.water_hyphen_top_dot_png();
	this.instance_341.setTransform(4738,803.7,1,1,0,0,0,49.5,50);

	this.instance_342 = new lib.water_hyphen_top_dot_png();
	this.instance_342.setTransform(4644,803.7,1,1,0,0,0,49.5,50);

	this.instance_343 = new lib.water_hyphen_top_dot_png();
	this.instance_343.setTransform(4549.3,803.7,1,1,0,0,0,49.5,50);

	this.instance_344 = new lib.water_hyphen_top_dot_png();
	this.instance_344.setTransform(4453.6,803.4,1,1,0,0,0,49.5,50);

	this.instance_345 = new lib.water_hyphen_top_dot_png();
	this.instance_345.setTransform(4358.9,803.4,1,1,0,0,0,49.5,50);

	this.instance_346 = new lib.water_hyphen_top_dot_png();
	this.instance_346.setTransform(4264.9,803.4,1,1,0,0,0,49.5,50);

	this.instance_347 = new lib.water_hyphen_top_dot_png();
	this.instance_347.setTransform(4170.2,803.4,1,1,0,0,0,49.5,50);

	this.instance_348 = new lib.water_hyphen_top_dot_png();
	this.instance_348.setTransform(4077.9,803.4,1,1,0,0,0,49.5,50);

	this.instance_349 = new lib.water_hyphen_top_dot_png();
	this.instance_349.setTransform(3983.2,803.4,1,1,0,0,0,49.5,50);

	this.instance_350 = new lib.water_hyphen_top_dot_png();
	this.instance_350.setTransform(3889.2,803.4,1,1,0,0,0,49.5,50);

	this.instance_351 = new lib.water_hyphen_top_dot_png();
	this.instance_351.setTransform(3794.5,803.4,1,1,0,0,0,49.5,50);

	this.instance_352 = new lib.water_hyphen_top_dot_png();
	this.instance_352.setTransform(3701.7,803.2,1,1,0,0,0,49.5,50);

	this.instance_353 = new lib.water_hyphen_top_dot_png();
	this.instance_353.setTransform(3607,803.2,1,1,0,0,0,49.5,50);

	this.instance_354 = new lib.water_hyphen_top_dot_png();
	this.instance_354.setTransform(3513,803.2,1,1,0,0,0,49.5,50);

	this.instance_355 = new lib.water_hyphen_top_dot_png();
	this.instance_355.setTransform(3418.3,803.2,1,1,0,0,0,49.5,50);

	this.instance_356 = new lib.water_hyphen_top_dot_png();
	this.instance_356.setTransform(3326,803.2,1,1,0,0,0,49.5,50);

	this.instance_357 = new lib.water_hyphen_top_dot_png();
	this.instance_357.setTransform(3231.3,803.2,1,1,0,0,0,49.5,50);

	this.instance_358 = new lib.water_hyphen_top_dot_png();
	this.instance_358.setTransform(3137.3,803.2,1,1,0,0,0,49.5,50);

	this.instance_359 = new lib.water_hyphen_top_dot_png();
	this.instance_359.setTransform(3042.6,803.2,1,1,0,0,0,49.5,50);

	this.instance_360 = new lib.water_hyphen_top_dot_png();
	this.instance_360.setTransform(2950.1,804.4,1,1,0,0,0,49.5,50);

	this.instance_361 = new lib.water_hyphen_top_dot_png();
	this.instance_361.setTransform(2855.4,804.4,1,1,0,0,0,49.5,50);

	this.instance_362 = new lib.water_hyphen_top_dot_png();
	this.instance_362.setTransform(2764.8,803.8,1,1,0,0,0,49.5,50);

	this.instance_363 = new lib.water_hyphen_top_dot_png();
	this.instance_363.setTransform(2671.8,804.6,1,1,0,0,0,49.5,50);

	this.instance_364 = new lib.water_hyphen_top_dot_png();
	this.instance_364.setTransform(2574.4,804.4,1,1,0,0,0,49.5,50);

	this.instance_365 = new lib.water_hyphen_top_dot_png();
	this.instance_365.setTransform(2479.7,804.4,1,1,0,0,0,49.5,50);

	this.instance_366 = new lib.water_hyphen_top_dot_png();
	this.instance_366.setTransform(2385.7,804.4,1,1,0,0,0,49.5,50);

	this.instance_367 = new lib.water_hyphen_top_dot_png();
	this.instance_367.setTransform(2291,804.4,1,1,0,0,0,49.5,50);

	this.instance_368 = new lib.water_hyphen_top_dot_png();
	this.instance_368.setTransform(2200.9,804,1,1,0,0,0,49.5,50);

	this.instance_369 = new lib.water_hyphen_top_dot_png();
	this.instance_369.setTransform(2103.5,804.3,1,1,0,0,0,49.5,50);

	this.instance_370 = new lib.water_hyphen_top_dot_png();
	this.instance_370.setTransform(2009.5,804.3,1,1,0,0,0,49.5,50);

	this.instance_371 = new lib.water_hyphen_top_dot_png();
	this.instance_371.setTransform(1914.8,804.3,1,1,0,0,0,49.5,50);

	this.instance_372 = new lib.water_hyphen_top_dot_png();
	this.instance_372.setTransform(1822.5,804.3,1,1,0,0,0,49.5,50);

	this.instance_373 = new lib.water_hyphen_top_dot_png();
	this.instance_373.setTransform(1727.8,804.3,1,1,0,0,0,49.5,50);

	this.instance_374 = new lib.water_hyphen_top_dot_png();
	this.instance_374.setTransform(1633.8,804.3,1,1,0,0,0,49.5,50);

	this.instance_375 = new lib.water_hyphen_top_dot_png();
	this.instance_375.setTransform(1539.1,804.3,1,1,0,0,0,49.5,50);

	this.instance_376 = new lib.water_hyphen_top_dot_png();
	this.instance_376.setTransform(1443.4,804,1,1,0,0,0,49.5,50);

	this.instance_377 = new lib.water_hyphen_top_dot_png();
	this.instance_377.setTransform(1348.7,804,1,1,0,0,0,49.5,50);

	this.instance_378 = new lib.water_hyphen_top_dot_png();
	this.instance_378.setTransform(1254.7,804,1,1,0,0,0,49.5,50);

	this.instance_379 = new lib.water_hyphen_top_dot_png();
	this.instance_379.setTransform(1160,804,1,1,0,0,0,49.5,50);

	this.instance_380 = new lib.water_hyphen_top_dot_png();
	this.instance_380.setTransform(1067.7,804,1,1,0,0,0,49.5,50);

	this.instance_381 = new lib.water_hyphen_top_dot_png();
	this.instance_381.setTransform(973,804,1,1,0,0,0,49.5,50);

	this.instance_382 = new lib.water_hyphen_top_dot_png();
	this.instance_382.setTransform(879,804,1,1,0,0,0,49.5,50);

	this.instance_383 = new lib.water_hyphen_top_dot_png();
	this.instance_383.setTransform(784.3,804,1,1,0,0,0,49.5,50);

	this.instance_384 = new lib.water_hyphen_top_dot_png();
	this.instance_384.setTransform(691.5,803.8,1,1,0,0,0,49.5,50);

	this.instance_385 = new lib.water_hyphen_top_dot_png();
	this.instance_385.setTransform(596.8,803.8,1,1,0,0,0,49.5,50);

	this.instance_386 = new lib.water_hyphen_top_dot_png();
	this.instance_386.setTransform(502.8,803.8,1,1,0,0,0,49.5,50);

	this.instance_387 = new lib.water_hyphen_top_dot_png();
	this.instance_387.setTransform(408.1,803.8,1,1,0,0,0,49.5,50);

	this.instance_388 = new lib.water_hyphen_top_dot_png();
	this.instance_388.setTransform(315.8,803.8,1,1,0,0,0,49.5,50);

	this.instance_389 = new lib.water_hyphen_top_dot_png();
	this.instance_389.setTransform(221.1,803.8,1,1,0,0,0,49.5,50);

	this.instance_390 = new lib.water_hyphen_top_dot_png();
	this.instance_390.setTransform(127.1,803.8,1,1,0,0,0,49.5,50);

	this.instance_391 = new lib.water_hyphen_top_dot_png();
	this.instance_391.setTransform(32.4,803.8,1,1,0,0,0,49.5,50);

	this.instance_392 = new lib.dirt4_dot_png();
	this.instance_392.setTransform(2500.7,735.5,0.53,0.53,-117.3,0,0,121.5,37.5);

	this.instance_393 = new lib.moss_dot_png();
	this.instance_393.setTransform(2460,745.5,0.624,0.624,78.5,0,0,40.6,27.5);

	this.instance_394 = new lib.leaves2_dot_png();
	this.instance_394.setTransform(2524.5,686.8,0.3,0.3,0,0,0,22.1,20.1);

	this.instance_395 = new lib.leaves2_dot_png();
	this.instance_395.setTransform(2548.2,664.3,0.486,0.486,0,0,0,22,20.1);

	this.instance_396 = new lib.moss_dot_png();
	this.instance_396.setTransform(3479.1,751.1,0.386,0.386,0,0,0,40.4,27.4);

	this.instance_397 = new lib.dirt2_dot_png();
	this.instance_397.setTransform(3451.5,730.6,0.339,0.339,83.5,0,0,118.5,52.6);

	this.instance_398 = new lib.leaves2_dot_png();
	this.instance_398.setTransform(4843.4,475.7,1,1,0,0,0,22,20);

	this.instance_399 = new lib.leaves1_dot_png();
	this.instance_399.setTransform(5060.8,479.5,1,1,0,0,0,18.5,15);

	this.instance_400 = new lib.leaves1_dot_png();
	this.instance_400.setTransform(4533.9,608.2,1,1,0,0,0,18.5,15);

	this.instance_401 = new lib.moss_dot_png();
	this.instance_401.setTransform(5145.6,735.6,1,1,-163.5,0,0,40.5,27.6);

	this.instance_402 = new lib.moss_dot_png();
	this.instance_402.setTransform(4995.4,743.2,1,1,120.8,0,0,40.5,27.5);

	this.instance_403 = new lib.moss_dot_png();
	this.instance_403.setTransform(4883.3,484.5,1,1,-179,0,0,40.6,27.4);

	this.instance_404 = new lib.moss_dot_png();
	this.instance_404.setTransform(5073.3,745.1,1,1,0,0,0,40.5,27.5);

	this.instance_405 = new lib.dirt3_dot_png();
	this.instance_405.setTransform(5202.8,680.1,0.636,0.636,0,0,0,55,88);

	this.instance_406 = new lib.dirt4_dot_png();
	this.instance_406.setTransform(4737.7,631.4,1,1,0,0,0,121.5,37.5);

	this.instance_407 = new lib.dirt2_dot_png();
	this.instance_407.setTransform(4833.1,738.6,0.667,0.667,0,0,0,118.5,52.5);

	this.instance_408 = new lib.dirt2_dot_png();
	this.instance_408.setTransform(4553.7,729.9,1,1,0,0,0,118.5,52.5);

	this.instance_409 = new lib.leaves2_dot_png();
	this.instance_409.setTransform(4225.1,531.4,0.625,0.625,0,0,0,22,20);

	this.instance_410 = new lib.dirt4_dot_png();
	this.instance_410.setTransform(4197.7,655.8,0.667,0.667,0,0,0,121.5,37.5);

	this.instance_411 = new lib.moss_dot_png();
	this.instance_411.setTransform(4305.1,660.5,0.584,0.584,-72.7,0,0,40.4,27.6);

	this.instance_412 = new lib.moss_dot_png();
	this.instance_412.setTransform(4153.8,748.2,0.584,0.584,0,0,0,40.5,27.5);

	this.instance_413 = new lib.dirt1_dot_png();
	this.instance_413.setTransform(4049.3,708.2,0.479,0.479,-178,0,0,55.1,87);

	this.instance_414 = new lib.dirt1_dot_png();
	this.instance_414.setTransform(4090.5,717.7,0.479,0.479,0,0,0,55.1,87);

	this.instance_415 = new lib.dirt3_dot_png();
	this.instance_415.setTransform(4268.9,718.6,0.545,0.545,89.9,0,0,54.8,88.1);

	this.instance_416 = new lib.leaves1_dot_png();
	this.instance_416.setTransform(4053.3,653.7,0.627,0.627,-18.2,0,0,18.4,15);

	this.instance_417 = new lib.leaves2_dot_png();
	this.instance_417.setTransform(3655.1,679.3,0.58,0.58,0,0,0,22,20);

	this.instance_418 = new lib.leaves2_dot_png();
	this.instance_418.setTransform(3119.3,696.5,0.289,0.289,0,0,0,22,19.9);

	this.instance_419 = new lib.leaves1_dot_png();
	this.instance_419.setTransform(2711.1,654.6,0.476,0.476,0,0,0,18.5,15.1);

	this.instance_420 = new lib.dirt4_dot_png();
	this.instance_420.setTransform(3847.3,704.6,0.333,0.333,-80,0,0,121.6,37.5);

	this.instance_421 = new lib.dirt3_dot_png();
	this.instance_421.setTransform(3280,734.9,0.227,0.227,0,0,0,55,88);

	this.instance_422 = new lib.moss_dot_png();
	this.instance_422.setTransform(2728.6,751.7,0.306,0.306,0,0,0,40.5,27.4);

	this.instance_423 = new lib.moss_dot_png();
	this.instance_423.setTransform(2930.8,677.1,0.306,0.306,-93.3,0,0,40.6,27.4);

	this.instance_424 = new lib.moss_dot_png();
	this.instance_424.setTransform(3077,749,0.374,0.374,0,0,0,40.6,27.4);

	this.instance_425 = new lib.moss_dot_png();
	this.instance_425.setTransform(3665.7,727.1,0.469,0.469,0,0,0,40.5,27.4);

	this.instance_426 = new lib.moss_dot_png();
	this.instance_426.setTransform(3293.5,656.9,0.306,0.306,176.3,0,0,40.6,27.4);

	this.instance_427 = new lib.moss_dot_png();
	this.instance_427.setTransform(3845.9,658.6,0.306,0.306,-83.7,0,0,40.5,27.4);

	this.instance_428 = new lib.dirt1_dot_png();
	this.instance_428.setTransform(3080.6,677.3,0.176,0.176,0,0,0,54.9,87);

	this.instance_429 = new lib.dirt1_dot_png();
	this.instance_429.setTransform(3071.2,687.9,0.176,0.176,0,0,0,54.9,87);

	this.instance_430 = new lib.dirt1_dot_png();
	this.instance_430.setTransform(3282.8,660.7,0.176,0.176,0,0,0,54.9,87);

	this.instance_431 = new lib.dirt1_dot_png();
	this.instance_431.setTransform(2898,737.8,0.176,0.176,74.7,0,0,55.3,87);

	this.instance_432 = new lib.dirt1_dot_png();
	this.instance_432.setTransform(2735.2,667.3,0.176,0.176,-58.2,0,0,55,87.1);

	this.instance_433 = new lib.dirt1_dot_png();
	this.instance_433.setTransform(2705.6,764.7,0.176,0.176,0,0,0,54.9,87);

	this.instance_434 = new lib.moss_dot_png();
	this.instance_434.setTransform(2177.3,737.7,0.599,0.599,0,0,0,40.5,27.4);

	this.instance_435 = new lib.dirt1_dot_png();
	this.instance_435.setTransform(2243.7,744.9,0.404,0.404,-104,0,0,55,87);

	this.instance_436 = new lib.dirt1_dot_png();
	this.instance_436.setTransform(2283.9,749.4,0.404,0.404,0,0,0,55,87);

	this.instance_437 = new lib.leaves2_dot_png();
	this.instance_437.setTransform(1988.7,665.8,0.405,0.405,0,0,0,22,20);

	this.instance_438 = new lib.moss_dot_png();
	this.instance_438.setTransform(1911.3,687.7,0.28,0.28,104.8,0,0,40.6,27.4);

	this.instance_439 = new lib.moss_dot_png();
	this.instance_439.setTransform(1791.8,748.1,0.658,0.658,0,0,0,40.5,27.5);

	this.instance_440 = new lib.dirt4_dot_png();
	this.instance_440.setTransform(1863.6,740.4,0.769,0.769,0,0,0,121.5,37.5);

	this.instance_441 = new lib.dirt3_dot_png();
	this.instance_441.setTransform(1960,748,0.353,0.353,-86.5,0,0,54.9,88);

	this.instance_442 = new lib.leaves1_dot_png();
	this.instance_442.setTransform(1362.8,664.8,0.81,0.81,0,0,0,18.6,15);

	this.instance_443 = new lib.moss_dot_png();
	this.instance_443.setTransform(1500.2,751.2,0.329,0.329,0,0,0,40.5,27.6);

	this.instance_444 = new lib.moss_dot_png();
	this.instance_444.setTransform(1555.7,753.3,0.636,0.636,0,0,0,40.5,27.5);

	this.instance_445 = new lib.moss_dot_png();
	this.instance_445.setTransform(1585.1,746.7,0.636,0.636,0,0,0,40.5,27.5);

	this.instance_446 = new lib.dirt2_dot_png();
	this.instance_446.setTransform(1330.8,744.2,0.707,0.707,2,0,0,118.5,52.6);

	this.instance_447 = new lib.leaves1_dot_png();
	this.instance_447.setTransform(569.5,522,1,1,0,0,0,18.5,15);

	this.instance_448 = new lib.leaves1_dot_png();
	this.instance_448.setTransform(403.2,648.2,1,1,0,0,0,18.5,15);

	this.instance_449 = new lib.leaves2_dot_png();
	this.instance_449.setTransform(1049.6,531.3,0.689,0.689,0,0,0,22,19.9);

	this.instance_450 = new lib.moss_dot_png();
	this.instance_450.setTransform(822.9,665.9,0.728,0.728,0,0,0,40.5,27.6);

	this.instance_451 = new lib.moss_dot_png();
	this.instance_451.setTransform(604.5,593.9,0.815,0.815,0,0,0,40.5,27.5);

	this.instance_452 = new lib.moss_dot_png();
	this.instance_452.setTransform(27.5,457.6,1,1,170,0,0,40.5,27.5);

	this.instance_453 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_453.setTransform(5232.2,729.2,1.115,1.115,0,0,0,155.5,45);

	this.instance_454 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_454.setTransform(4727.1,730.5,1.097,1.097,0,0,0,155.5,45);

	this.instance_455 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_455.setTransform(5004.4,636,1,1,0,0,0,155.5,45);

	this.instance_456 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_456.setTransform(4710.2,639.1,1,1,0,0,0,155.5,45);

	this.instance_457 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_457.setTransform(4491.8,488.9,1,1,0,0,0,63,21);

	this.instance_458 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_458.setTransform(4659.1,487.9,1,1,0,0,0,155.5,21);

	this.instance_459 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_459.setTransform(3843,710.9,0.651,0.62,0,0,0,52.5,110.5);

	this.instance_460 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_460.setTransform(4216.3,592.2,0.574,0.574,0,0,0,125.9,111);

	this.instance_461 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_461.setTransform(4223.8,715.8,0.574,0.574,0,0,0,125.9,111);

	this.instance_462 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_462.setTransform(4122.4,653.5,0.574,0.574,0,0,0,125.9,111);

	this.instance_463 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_463.setTransform(4099.2,715.5,0.574,0.574,0,0,0,125.9,111);

	this.instance_464 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_464.setTransform(4029.8,713.4,0.627,0.598,0,0,0,52.5,110.5);

	this.instance_465 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_465.setTransform(3655.5,711.2,0.651,0.62,0,0,0,52.5,110.5);

	this.instance_466 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_466.setTransform(3468.6,711.5,0.651,0.62,0,0,0,52.5,110.5);

	this.instance_467 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_467.setTransform(3280.9,711.1,0.651,0.62,0,0,0,52.5,110.5);

	this.instance_468 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_468.setTransform(3093.7,711.1,0.651,0.62,0,0,0,52.5,110.5);

	this.instance_469 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_469.setTransform(2905.9,711.1,0.62,0.62,0,0,0,52.5,110.5);

	this.instance_470 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_470.setTransform(2718.5,711.1,0.62,0.62,0,0,0,52.5,110.5);

	this.instance_471 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_471.setTransform(2499.3,715.8,0.574,0.574,0,0,0,125.9,111);

	this.instance_472 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_472.setTransform(2250.5,715.8,0.574,0.574,0,0,0,125.9,111);

	this.instance_473 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_473.setTransform(2187.2,715.9,0.574,0.574,0,0,0,125.9,111);

	this.instance_474 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_474.setTransform(1877.3,715.1,0.585,0.585,0,0,0,52.5,110.6);

	this.instance_475 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_475.setTransform(1937.6,715.6,0.574,0.574,0,0,0,125.9,111);

	this.instance_476 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_476.setTransform(1812.3,716.2,0.574,0.574,0,0,0,125.9,111);

	this.instance_477 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_477.setTransform(1561.8,718,0.574,0.574,0,0,0,125.9,111);

	this.instance_478 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_478.setTransform(1465.3,718.1,0.574,0.574,0,0,0,125.9,111);

	this.instance_479 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_479.setTransform(1406.5,718,0.574,0.574,0,0,0,125.9,111);

	this.instance_480 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_480.setTransform(1310.1,718.1,0.574,0.574,0,0,0,125.9,111);

	this.instance_481 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_481.setTransform(975.9,716.8,0.833,0.833,0,0,0,155.5,45);

	this.instance_482 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_482.setTransform(627.8,689.8,0.804,0.804,0,0,0,89.5,111);

	this.instance_483 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_483.setTransform(1088.5,672.9,1,1,0,0,0,50.5,21);

	this.instance_484 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_484.setTransform(905.2,671.8,1,1,0,0,0,155.5,21);

	this.instance_485 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_485.setTransform(842,669.3,1,1,0,0,0,155.5,21);

	this.instance_486 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_486.setTransform(639.1,560.8,1,1,0,0,0,52.5,110.5);

	this.instance_487 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_487.setTransform(629.7,664.8,0.804,0.804,0,0,0,89.5,111);

	this.instance_488 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_488.setTransform(529.5,665.4,0.804,0.804,0,0,0,89.5,111);

	this.instance_489 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_489.setTransform(1074.4,672.7,0.762,0.762,0,0,0,63,21);

	this.instance_490 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_490.setTransform(292.3,734.7,1,1,0,0,0,155.5,45);

	this.instance_491 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_491.setTransform(31.3,669,1,1,0,0,0,52.5,110.5);

	this.instance_492 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_492.setTransform(105.8,669.7,1,1,0,0,0,52.5,110.5);

	this.instance_493 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_493.setTransform(31.3,530.7,1,1,0,0,0,52.5,110.5);

	this.instance_494 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_494.setTransform(104.5,536.4,1,1,0,0,0,52.5,110.5);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_495 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_495.setTransform(294.2,709.7,1,1,0,0,0,155.5,45);

	this.instance_496 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_496.setTransform(291.2,666.8,1,1,0,0,0,155.5,21);

	this.instance_497 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_497.setTransform(445.1,666.9,0.809,0.809,0,0,0,52.5,110.5);

	this.instance_498 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_498.setTransform(550.2,620.2,1,1,0,0,0,52.5,110.5);

	this.instance_499 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_499.setTransform(1062.9,593.3,0.69,0.69,0,0,0,52.5,110.5);

	this.instance_500 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_500.setTransform(530.8,690.5,0.804,0.804,0,0,0,89.5,111);

	this.instance_501 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_501.setTransform(446.9,690.1,0.809,0.809,0,0,0,52.5,110.5);

	this.instance_502 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_502.setTransform(816.3,724.3,0.833,0.833,0,0,0,155.5,45);

	this.instance_503 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_503.setTransform(813.8,741.2,0.833,0.833,0,0,0,155.5,45);

	this.instance_504 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_504.setTransform(975.3,741.2,0.833,0.833,0,0,0,155.5,45);

	this.instance_505 = new lib.wall_hyphen_right_dot_png();
	this.instance_505.setTransform(1087.6,735.2,1,1,0,0,0,51.5,45);

	this.instance_506 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_506.setTransform(4253.5,716.4,0.574,0.574,0,0,0,125.9,111);

	this.instance_507 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_507.setTransform(4252.9,596.3,0.574,0.574,0,0,0,125.9,111);

	this.instance_508 = new lib.wall_hyphen_right_dot_png();
	this.instance_508.setTransform(4293,671,0.466,0.466,0,0,0,51.5,45);

	this.instance_509 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_509.setTransform(4296.5,514.8,0.434,0.434,0,0,0,52.5,110.5);

	this.instance_510 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_510.setTransform(4923.3,487.9,1,1,0,0,0,155.5,21);

	this.instance_511 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_511.setTransform(5140.5,488.3,1,1,0,0,0,155.5,21);

	this.instance_512 = new lib.wall_hyphen_left_dot_png();
	this.instance_512.setTransform(4486.8,552.1,1,1,0,0,0,70.5,45);

	this.instance_513 = new lib.wall_hyphen_left_dot_png();
	this.instance_513.setTransform(4488.7,730.5,1.097,1.097,0,0,0,70.5,45);

	this.instance_514 = new lib.wall_hyphen_left_dot_png();
	this.instance_514.setTransform(4486.2,640.3,1,1,0,0,0,70.5,45);

	this.instance_515 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_515.setTransform(4710.8,550.9,1,1,0,0,0,155.5,45);

	this.instance_516 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_516.setTransform(5003.1,548.4,1,1,0,0,0,155.5,45);

	this.instance_517 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_517.setTransform(5200.9,547.7,1,1,0,0,0,155.5,45);

	this.instance_518 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_518.setTransform(5217.8,635.3,1,1,0,0,0,155.5,45);

	this.instance_519 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_519.setTransform(4993.7,727.7,1.147,1.147,0,0,0,155.5,45);

	this.instance_520 = new lib.moss_dot_png();
	this.instance_520.setTransform(59.6,445.8,1,1,6,0,0,40.5,27.5);

	this.instance_521 = new lib.moss_dot_png();
	this.instance_521.setTransform(3844.3,652.1,0.306,0.306,0,0,0,40.5,27.4);

	this.instance_522 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_522.setTransform(4640.7,1001.5,1,1,0,0,0,126,111);

	this.instance_523 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_523.setTransform(5039,1009.6,1,1,0,0,0,126,111);

	this.instance_524 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_524.setTransform(4495.1,1218.4,1,1,0,0,0,89.5,111);

	this.instance_525 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_525.setTransform(4849.6,1228.4,1,1,0,0,0,126,111);

	this.instance_526 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_526.setTransform(5242.2,1222.8,1,1,0,0,0,126,111);

	this.instance_527 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_527.setTransform(4644.4,1219,1,1,0,0,0,126,111);

	this.instance_528 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_528.setTransform(5042.7,1227.2,1,1,0,0,0,126,111);

	this.instance_529 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_529.setTransform(4848.4,1147.1,1,1,0,0,0,126,111);

	this.instance_530 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_530.setTransform(5240.9,1141.5,1,1,0,0,0,126,111);

	this.instance_531 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_531.setTransform(4493.9,1137.1,1,1,0,0,0,89.5,111);

	this.instance_532 = new lib.water_hyphen_middle_dot_png();
	this.instance_532.setTransform(4390.5,1171.4,1,1,0,0,0,49.5,49.5);

	this.instance_533 = new lib.water_hyphen_middle_dot_png();
	this.instance_533.setTransform(4390.5,1081.8,1,1,0,0,0,49.5,49.5);

	this.instance_534 = new lib.water_hyphen_middle_dot_png();
	this.instance_534.setTransform(4390.5,990.4,1,1,0,0,0,49.5,49.5);

	this.instance_535 = new lib.water_hyphen_bottom_dot_png();
	this.instance_535.setTransform(4404.7,1256.4,1,1,0,0,0,49.5,49.5);

	this.addChild(this.instance_535,this.instance_534,this.instance_533,this.instance_532,this.instance_531,this.instance_530,this.instance_529,this.instance_528,this.instance_527,this.instance_526,this.instance_525,this.instance_524,this.instance_523,this.instance_522,this.instance_521,this.instance_520,this.instance_519,this.instance_518,this.instance_517,this.instance_516,this.instance_515,this.instance_514,this.instance_513,this.instance_512,this.instance_511,this.instance_510,this.instance_509,this.instance_508,this.instance_507,this.instance_506,this.instance_505,this.instance_504,this.instance_503,this.instance_502,this.instance_501,this.instance_500,this.instance_499,this.instance_498,this.instance_497,this.instance_496,this.instance_495,this.isDisp,this.instance_494,this.instance_493,this.instance_492,this.instance_491,this.instance_490,this.instance_489,this.instance_488,this.instance_487,this.instance_486,this.instance_485,this.instance_484,this.instance_483,this.instance_482,this.instance_481,this.instance_480,this.instance_479,this.instance_478,this.instance_477,this.instance_476,this.instance_475,this.instance_474,this.instance_473,this.instance_472,this.instance_471,this.instance_470,this.instance_469,this.instance_468,this.instance_467,this.instance_466,this.instance_465,this.instance_464,this.instance_463,this.instance_462,this.instance_461,this.instance_460,this.instance_459,this.instance_458,this.instance_457,this.instance_456,this.instance_455,this.instance_454,this.instance_453,this.instance_452,this.instance_451,this.instance_450,this.instance_449,this.instance_448,this.instance_447,this.instance_446,this.instance_445,this.instance_444,this.instance_443,this.instance_442,this.instance_441,this.instance_440,this.instance_439,this.instance_438,this.instance_437,this.instance_436,this.instance_435,this.instance_434,this.instance_433,this.instance_432,this.instance_431,this.instance_430,this.instance_429,this.instance_428,this.instance_427,this.instance_426,this.instance_425,this.instance_424,this.instance_423,this.instance_422,this.instance_421,this.instance_420,this.instance_419,this.instance_418,this.instance_417,this.instance_416,this.instance_415,this.instance_414,this.instance_413,this.instance_412,this.instance_411,this.instance_410,this.instance_409,this.instance_408,this.instance_407,this.instance_406,this.instance_405,this.instance_404,this.instance_403,this.instance_402,this.instance_401,this.instance_400,this.instance_399,this.instance_398,this.instance_397,this.instance_396,this.instance_395,this.instance_394,this.instance_393,this.instance_392,this.instance_391,this.instance_390,this.instance_389,this.instance_388,this.instance_387,this.instance_386,this.instance_385,this.instance_384,this.instance_383,this.instance_382,this.instance_381,this.instance_380,this.instance_379,this.instance_378,this.instance_377,this.instance_376,this.instance_375,this.instance_374,this.instance_373,this.instance_372,this.instance_371,this.instance_370,this.instance_369,this.instance_368,this.instance_367,this.instance_366,this.instance_365,this.instance_364,this.instance_363,this.instance_362,this.instance_361,this.instance_360,this.instance_359,this.instance_358,this.instance_357,this.instance_356,this.instance_355,this.instance_354,this.instance_353,this.instance_352,this.instance_351,this.instance_350,this.instance_349,this.instance_348,this.instance_347,this.instance_346,this.instance_345,this.instance_344,this.instance_343,this.instance_342,this.instance_341,this.instance_340,this.instance_339,this.instance_338,this.instance_337,this.instance_336,this.instance_335,this.instance_334,this.instance_333,this.instance_332,this.instance_331,this.instance_330,this.instance_329,this.instance_328,this.instance_327,this.instance_326,this.instance_325,this.instance_324,this.instance_323,this.instance_322,this.instance_321,this.instance_320,this.instance_319,this.instance_318,this.instance_317,this.instance_316,this.instance_315,this.instance_314,this.instance_313,this.instance_312,this.instance_311,this.instance_310,this.instance_309,this.instance_308,this.instance_307,this.instance_306,this.instance_305,this.instance_304,this.instance_303,this.instance_302,this.instance_301,this.instance_300,this.instance_299,this.instance_298,this.instance_297,this.instance_296,this.instance_295,this.instance_294,this.instance_293,this.instance_292,this.instance_291,this.instance_290,this.instance_289,this.instance_288,this.instance_287,this.instance_286,this.instance_285,this.instance_284,this.instance_283,this.instance_282,this.instance_281,this.instance_280,this.instance_279,this.instance_278,this.instance_277,this.instance_276,this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.6,-0.5,5434.2,1339.9);


(lib.level7PixiBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hook_dot_png();
	this.instance.setTransform(2293.8,349.6,0.606,0.606,0,0,0,14,33.5);

	this.instance_1 = new lib.hook_dot_png();
	this.instance_1.setTransform(2204.2,349.5,0.606,0.606,0,0,0,14,33.5);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(2310,175.2,1,1,0,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(2310,320.3,1,1,0,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(2311.6,-261.6,1,1,0,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(2311.6,-117.8,1,1,0,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(2311.6,27.2,1,1,0,0,0,7,74);

	this.instance_7 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_7.setTransform(384.2,-198,1,1,0,0,0,14,211);

	this.instance_8 = new lib.crane_swith_only_dot_png();
	this.instance_8.setTransform(383.3,470.9,0.855,0.855,0,0,0,38.5,69.5);

	this.instance_9 = new lib.crane_swith_only_dot_png();
	this.instance_9.setTransform(1381.6,101.9,0.855,0.855,0,0,0,38.5,69.5);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(2220,156.5,1,1,0,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(2220,301.5,1,1,0,0,0,7,74);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(2221.6,-261.6,1,1,0,0,0,7,74);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(2221.6,-117.8,1,1,0,0,0,7,74);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(2221.6,8.5,1,1,0,0,0,7,74);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_15 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_15.setTransform(384.2,208.2,1,1,0,0,0,14,211);

	this.instance_16 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_16.setTransform(1381.5,-160.5,1,1,0,0,0,14,211);

	this.addChild(this.instance_16,this.instance_15,this.isDispBG,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.3,-409,3996.6,2041.2);


(lib.level7movingplatform2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(5.1,-668.2,0.786,0.786,0,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(5.1,-552.5,0.786,0.786,0,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(4.8,-437,0.786,0.786,0,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(4.7,-321.4,0.786,0.786,0,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(4.4,-205.9,0.786,0.786,0,0,0,7,74);

	this.isMovingItem = new lib.woodencrate_dot_png();
	this.isMovingItem.setTransform(0,0,0.526,0.633,0,0,0,234,98);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(-30,-100.6,0.786,0.786,37.2,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(39.5,-100.5,0.786,0.786,142.7,0,0,7,74);

	this.addChild(this.instance_6,this.instance_5,this.isMovingItem,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123,-726.3,246.1,788.4);


(lib.level7movingplatform = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(5.1,-1188.2,1,1,-179.7,0,0,6.9,73.9);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(4,-1040.7,1,1,-179.7,0,0,6.9,73.9);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(3.3,-893.8,1,1,-179.7,0,0,6.9,73.9);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(2.2,-746.4,1,1,-179.7,0,0,6.9,73.9);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(1.6,-598.9,1,1,-179.7,0,0,6.9,73.9);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(0.5,-452.1,1,1,-179.7,0,0,6.9,73.9);

	this.isMovingItem = new lib.woodenbox_dot_png();
	this.isMovingItem.setTransform(-1,0.1,1.096,1.286,0,0,0,114.5,84.5);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(-34.4,-169.7,1,1,28.5,0,0,6.9,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(32.4,-168.6,1,1,152.7,0,0,6.9,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(-0.2,-304.6,1,1,-179.7,0,0,6.9,73.9);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.isMovingItem,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-1262.3,251,1371);


(lib.level6Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance.setTransform(308.8,1662.8,1.149,1.149,0,0,0,126,111);

	this.instance_1 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_1.setTransform(50,1661.6,1.149,1.149,0,0,0,126,111);

	this.instance_2 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_2.setTransform(777.6,1661.6,1.149,1.149,0,0,0,126,111);

	this.instance_3 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_3.setTransform(1475.2,1666.6,1.149,1.149,0,0,0,126,111);

	this.instance_4 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_4.setTransform(1534,1667.8,1.149,1.149,0,0,0,126,111);

	this.instance_5 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_5.setTransform(2410.4,1665.3,1.149,1.149,0,0,0,126,111);

	this.instance_6 = new lib.water_hyphen_bottom_dot_png();
	this.instance_6.setTransform(1794.3,1748.8,1,1,0,0,0,49.5,49.5);

	this.instance_7 = new lib.water_hyphen_bottom_dot_png();
	this.instance_7.setTransform(1698.3,1748.8,1,1,0,0,0,49.5,49.5);

	this.instance_8 = new lib.water_hyphen_bottom_dot_png();
	this.instance_8.setTransform(1884,1748.8,1,1,0,0,0,49.5,49.5);

	this.instance_9 = new lib.water_hyphen_bottom_dot_png();
	this.instance_9.setTransform(2069.2,1748.8,1,1,0,0,0,49.5,49.5);

	this.instance_10 = new lib.water_hyphen_bottom_dot_png();
	this.instance_10.setTransform(1973.2,1748.8,1,1,0,0,0,49.5,49.5);

	this.instance_11 = new lib.water_hyphen_bottom_dot_png();
	this.instance_11.setTransform(2253.4,1748.8,1,1,0,0,0,49.5,49.5);

	this.instance_12 = new lib.water_hyphen_bottom_dot_png();
	this.instance_12.setTransform(2157.4,1748.8,1,1,0,0,0,49.5,49.5);

	this.instance_13 = new lib.water_hyphen_middle_dot_png();
	this.instance_13.setTransform(2154.8,1659.1,1,1,0,0,0,49.5,49.5);

	this.instance_14 = new lib.water_hyphen_middle_dot_png();
	this.instance_14.setTransform(2062.9,1659.1,1,1,0,0,0,49.5,49.5);

	this.instance_15 = new lib.water_hyphen_middle_dot_png();
	this.instance_15.setTransform(1971.6,1658.4,1,1,0,0,0,49.5,49.5);

	this.instance_16 = new lib.water_hyphen_middle_dot_png();
	this.instance_16.setTransform(1879.7,1658.4,1,1,0,0,0,49.5,49.5);

	this.instance_17 = new lib.water_hyphen_middle_dot_png();
	this.instance_17.setTransform(1788.5,1659.7,1,1,0,0,0,49.5,49.5);

	this.instance_18 = new lib.water_hyphen_middle_dot_png();
	this.instance_18.setTransform(1696.6,1659.7,1,1,0,0,0,49.5,49.5);

	this.instance_19 = new lib.water_hyphen_middle_dot_png();
	this.instance_19.setTransform(2250.4,1658.5,1,1,0,0,0,49.5,49.5);

	this.instance_20 = new lib.water_hyphen_middle_dot_png();
	this.instance_20.setTransform(2157.9,1605.9,1,1,0,0,0,49.5,49.5);

	this.instance_21 = new lib.water_hyphen_middle_dot_png();
	this.instance_21.setTransform(2066,1605.9,1,1,0,0,0,49.5,49.5);

	this.instance_22 = new lib.water_hyphen_middle_dot_png();
	this.instance_22.setTransform(1974.7,1605.3,1,1,0,0,0,49.5,49.5);

	this.instance_23 = new lib.water_hyphen_middle_dot_png();
	this.instance_23.setTransform(1882.8,1605.3,1,1,0,0,0,49.5,49.5);

	this.instance_24 = new lib.water_hyphen_middle_dot_png();
	this.instance_24.setTransform(1791.6,1606.5,1,1,0,0,0,49.5,49.5);

	this.instance_25 = new lib.water_hyphen_middle_dot_png();
	this.instance_25.setTransform(1225.8,1647.2,1,1,0,0,0,49.5,49.5);

	this.instance_26 = new lib.water_hyphen_middle_dot_png();
	this.instance_26.setTransform(1136.4,1647.2,1,1,0,0,0,49.5,49.5);

	this.instance_27 = new lib.water_hyphen_middle_dot_png();
	this.instance_27.setTransform(1045.2,1647.2,1,1,0,0,0,49.5,49.5);

	this.instance_28 = new lib.water_hyphen_middle_dot_png();
	this.instance_28.setTransform(1317.7,1646.6,1,1,0,0,0,49.5,49.5);

	this.instance_29 = new lib.water_hyphen_middle_dot_png();
	this.instance_29.setTransform(950.8,1647.8,1,1,0,0,0,49.5,49.5);

	this.instance_30 = new lib.water_hyphen_middle_dot_png();
	this.instance_30.setTransform(1224.6,1608.4,1,1,0,0,0,49.5,49.5);

	this.instance_31 = new lib.water_hyphen_middle_dot_png();
	this.instance_31.setTransform(1135.2,1608.4,1,1,0,0,0,49.5,49.5);

	this.instance_32 = new lib.water_hyphen_middle_dot_png();
	this.instance_32.setTransform(1043.9,1608.4,1,1,0,0,0,49.5,49.5);

	this.instance_33 = new lib.water_hyphen_middle_dot_png();
	this.instance_33.setTransform(571.3,1651.6,1,1,0,0,0,49.5,49.5);

	this.instance_34 = new lib.water_hyphen_middle_dot_png();
	this.instance_34.setTransform(475.7,1651.6,1,1,0,0,0,49.5,49.5);

	this.instance_35 = new lib.water_hyphen_middle_dot_png();
	this.instance_35.setTransform(633.2,1650.9,1,1,0,0,0,49.5,49.5);

	this.instance_36 = new lib.water_hyphen_middle_dot_png();
	this.instance_36.setTransform(572,1605.3,1,1,0,0,0,49.5,49.5);

	this.instance_37 = new lib.water_hyphen_middle_dot_png();
	this.instance_37.setTransform(474.7,1603.7,1,1,0,0,0,49.5,49.5);

	this.instance_38 = new lib.water_hyphen_bottom_dot_png();
	this.instance_38.setTransform(556.4,1741.4,1,1,0,0,0,49.5,49.5);

	this.instance_39 = new lib.dirt4_dot_png();
	this.instance_39.setTransform(-18.9,1050.1,1,1,98.6,0,0,121.5,37.5);

	this.instance_40 = new lib.dirt4_dot_png();
	this.instance_40.setTransform(-5.1,509.4,1,1,98.6,0,0,121.5,37.5);

	this.instance_41 = new lib.dirt4_dot_png();
	this.instance_41.setTransform(-6.4,454.3,1,1,98.6,0,0,121.5,37.5);

	this.instance_42 = new lib.dirt1_dot_png();
	this.instance_42.setTransform(2507,1584.6,1,1,0,0,0,46.2,84.5);

	this.instance_43 = new lib.dirt3_dot_png();
	this.instance_43.setTransform(2364.3,1523.3,1,1,0,0,0,55,88);

	this.instance_44 = new lib.moss_dot_png();
	this.instance_44.setTransform(2493.2,995.1,1,1,48.7,0,0,40.5,27.6);

	this.instance_45 = new lib.moss_dot_png();
	this.instance_45.setTransform(2303,524.5,0.66,0.66,0,0,0,40.5,27.5);

	this.instance_46 = new lib.leaves1_dot_png();
	this.instance_46.setTransform(1696,80.1,1,1,0,0,0,18.5,15);

	this.instance_47 = new lib.leaves1_dot_png();
	this.instance_47.setTransform(1458.2,837.4,1,1,0,0,0,18.5,15);

	this.instance_48 = new lib.moss_dot_png();
	this.instance_48.setTransform(1360.6,1167.8,1,1,93,0,0,40.5,27.5);

	this.instance_49 = new lib.moss_dot_png();
	this.instance_49.setTransform(1595.9,1063.9,1,1,0,0,0,40.5,27.5);

	this.instance_50 = new lib.dirt1_dot_png();
	this.instance_50.setTransform(1583.3,916.3,0.854,0.854,161.3,0,0,55.1,87);

	this.instance_51 = new lib.dirt2_dot_png();
	this.instance_51.setTransform(1467,1543.3,1,1,0,0,0,118.5,52.5);

	this.instance_52 = new lib.dirt1_dot_png();
	this.instance_52.setTransform(768.5,1555.9,0.84,0.84,0,0,0,55,87);

	this.instance_53 = new lib.dirt4_dot_png();
	this.instance_53.setTransform(777.4,1333,1,1,0,0,0,121.5,37.5);

	this.instance_54 = new lib.dirt4_dot_png();
	this.instance_54.setTransform(774.8,1303,1,1,0,0,0,121.5,37.5);

	this.instance_55 = new lib.dirt1_dot_png();
	this.instance_55.setTransform(287.8,1505.7,0.705,0.705,0,0,0,55,87);

	this.instance_56 = new lib.dirt3_dot_png();
	this.instance_56.setTransform(38.8,1463.5,1,1,0,0,0,55,88);

	this.instance_57 = new lib.leaves2_dot_png();
	this.instance_57.setTransform(43.9,1144.2,1,1,0,0,0,22,20);

	this.instance_58 = new lib.moss_dot_png();
	this.instance_58.setTransform(257.9,1246.7,1,1,0,0,0,40.5,27.5);

	this.instance_59 = new lib.moss_dot_png();
	this.instance_59.setTransform(-5,700.9,0.784,0.784,-106.5,0,0,40.5,27.5);

	this.instance_60 = new lib.moss_dot_png();
	this.instance_60.setTransform(-16.3,286.6,0.784,0.784,-164.5,0,0,40.5,27.5);

	this.instance_61 = new lib.leaves1_dot_png();
	this.instance_61.setTransform(25.7,-88.9,0.667,0.667,0,0,0,18.5,15);

	this.instance_62 = new lib.moss_dot_png();
	this.instance_62.setTransform(-12.6,-18.7,0.784,0.784,48.2,0,0,40.5,27.6);

	this.instance_63 = new lib.moss_dot_png();
	this.instance_63.setTransform(16.2,1151.5,1,1,-89.5,0,0,40.5,27.4);

	this.instance_64 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_64.setTransform(2583,309.4,1,1,0,0,0,55.5,41);

	this.instance_65 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_65.setTransform(2477.2,303.7,1,1,0,0,0,60.5,36);

	this.instance_66 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_66.setTransform(2360,1476.4,1,1,0,0,0,89.5,111);

	this.instance_67 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_67.setTransform(2460.2,1476.4,1,1,0,0,0,89.5,111);

	this.instance_68 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_68.setTransform(2359.4,1125.9,1,1,0,0,0,89.5,111);

	this.instance_69 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_69.setTransform(2459.5,1125.9,1,1,0,0,0,89.5,111);

	this.instance_70 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_70.setTransform(2359.4,1309.3,1,1,0,0,0,89.5,111);

	this.instance_71 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_71.setTransform(2459.6,1309.3,1,1,0,0,0,89.5,111);

	this.instance_72 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_72.setTransform(2415.3,303.7,1,1,0,0,0,60.5,36);

	this.instance_73 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_73.setTransform(2325.1,308.1,1,1,0,0,0,60.5,41.5);

	this.instance_74 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_74.setTransform(1731.1,121.8,1,1,0,0,0,55.5,41);

	this.instance_75 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_75.setTransform(1604.7,118,1,1,0,0,0,60.5,36);

	this.instance_76 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_76.setTransform(1514.6,122.4,1,1,0,0,0,60.5,41.5);

	this.instance_77 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_77.setTransform(1631.6,118,1,1,0,0,0,60.5,36);

	this.instance_78 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_78.setTransform(920.1,497.3,1,1,0,0,0,55.5,41);

	this.instance_79 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_79.setTransform(793.7,493.5,1,1,0,0,0,60.5,36);

	this.instance_80 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_80.setTransform(703.5,497.9,1,1,0,0,0,60.5,41.5);

	this.instance_81 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_81.setTransform(820.6,493.5,1,1,0,0,0,60.5,36);

	this.instance_82 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_82.setTransform(1606,876.5,1,1,0,0,0,55.5,41);

	this.instance_83 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_83.setTransform(1479.6,872.7,1,1,0,0,0,60.5,36);

	this.instance_84 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_84.setTransform(1389.4,877.1,1,1,0,0,0,60.5,41.5);

	this.instance_85 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_85.setTransform(860.7,1186.8,1,1,0,0,0,55.5,41);

	this.instance_86 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_86.setTransform(790.6,1182.4,1,1,0,0,0,60.5,36);

	this.instance_87 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_87.setTransform(700.4,1186.8,1,1,0,0,0,60.5,41.5);

	this.instance_88 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_88.setTransform(-14.9,0.1,1,1,0,0,0,52.5,110.5);

	this.instance_89 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_89.setTransform(-14.4,167.2,1,1,0,0,0,52.5,110.5);

	this.instance_90 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_90.setTransform(-14.3,254.8,1,1,0,0,0,52.5,110.5);

	this.instance_91 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_91.setTransform(-14.4,425,1,1,0,0,0,52.5,110.5);

	this.instance_92 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_92.setTransform(-14.4,588.9,1,1,0,0,0,52.5,110.5);

	this.instance_93 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_93.setTransform(-15.6,764.2,1,1,0,0,0,52.5,110.5);

	this.instance_94 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_94.setTransform(-15.6,942,1,1,0,0,0,52.5,110.5);

	this.instance_95 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_95.setTransform(-18.7,1285.5,1,1,0,0,0,52.5,110.5);

	this.instance_96 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_96.setTransform(-19.3,1453.9,1,1,0,0,0,52.5,110.5);

	this.instance_97 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_97.setTransform(378.8,1166.6,1,1,0,0,0,50.5,21);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_98 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_98.setTransform(-18.7,1105.3,1,1,0,0,0,52.5,110.5);

	this.instance_99 = new lib.bush_hyphen_platform_hyphen_block_dot_png();
	this.instance_99.setTransform(373.1,1099.2,0.896,0.896,0,0,0,42,88.5);

	this.instance_100 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_100.setTransform(1506.5,872.7,1,1,0,0,0,60.5,36);

	this.instance_101 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_101.setTransform(175.2,1164.5,1,1,0,0,0,155.5,21);

	this.instance_102 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_102.setTransform(177,1225.6,1,1,0,0,0,155.5,45);

	this.instance_103 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_103.setTransform(176.4,1312.6,1,1,0,0,0,155.5,45);

	this.instance_104 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_104.setTransform(176.4,1398.4,1,1,0,0,0,155.5,45);

	this.instance_105 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_105.setTransform(175.8,1485.4,1,1,0,0,0,155.5,45);

	this.instance_106 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_106.setTransform(180.2,1519.2,1,1,0,0,0,155.5,45);

	this.instance_107 = new lib.wall_hyphen_right_dot_png();
	this.instance_107.setTransform(378.7,1228.8,1,1,0,0,0,51.5,45);

	this.instance_108 = new lib.wall_hyphen_right_dot_png();
	this.instance_108.setTransform(379.4,1315.8,1,1,0,0,0,51.5,45);

	this.instance_109 = new lib.wall_hyphen_right_dot_png();
	this.instance_109.setTransform(380.6,1401.5,1,1,0,0,0,51.5,45);

	this.instance_110 = new lib.wall_hyphen_right_dot_png();
	this.instance_110.setTransform(381.3,1488.6,1,1,0,0,0,51.5,45);

	this.instance_111 = new lib.wall_hyphen_right_dot_png();
	this.instance_111.setTransform(381.3,1518.6,1,1,0,0,0,51.5,45);

	this.instance_112 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_112.setTransform(731.6,1289.2,1,1,0,0,0,89.5,111);

	this.instance_113 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_113.setTransform(833.7,1289.8,1,1,0,0,0,89.5,111);

	this.instance_114 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_114.setTransform(731,1456.3,1,1,0,0,0,89.5,111);

	this.instance_115 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_115.setTransform(833.1,1456.9,1,1,0,0,0,89.5,111);

	this.instance_116 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_116.setTransform(1456.3,976.3,1,1,0,0,0,126,111);

	this.instance_117 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_117.setTransform(1542.7,976.3,1,1,0,0,0,126,111);

	this.instance_118 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_118.setTransform(1457.6,1156,1,1,0,0,0,126,111);

	this.instance_119 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_119.setTransform(1544,1156,1,1,0,0,0,126,111);

	this.instance_120 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_120.setTransform(1458.8,1292.4,1,1,0,0,0,126,111);

	this.instance_121 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_121.setTransform(1545.2,1292.4,1,1,0,0,0,126,111);

	this.instance_122 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_122.setTransform(1460.1,1472.1,1,1,0,0,0,126,111);

	this.instance_123 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_123.setTransform(1546.5,1472.1,1,1,0,0,0,126,111);

	this.instance_124 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_124.setTransform(2356.2,415.6,1,1,0,0,0,89.5,111);

	this.instance_125 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_125.setTransform(2456.4,415.6,1,1,0,0,0,89.5,111);

	this.instance_126 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_126.setTransform(2356.3,599,1,1,0,0,0,89.5,111);

	this.instance_127 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_127.setTransform(2456.4,599,1,1,0,0,0,89.5,111);

	this.instance_128 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_128.setTransform(2358.7,769.2,1,1,0,0,0,89.5,111);

	this.instance_129 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_129.setTransform(2458.8,769.2,1,1,0,0,0,89.5,111);

	this.instance_130 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_130.setTransform(2358.7,952.6,1,1,0,0,0,89.5,111);

	this.instance_131 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_131.setTransform(2458.9,952.6,1,1,0,0,0,89.5,111);

	this.instance_132 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_132.setTransform(2562.1,1476.4,1,1,0,0,0,89.5,111);

	this.instance_133 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_133.setTransform(2561.5,1125.9,1,1,0,0,0,89.5,111);

	this.instance_134 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_134.setTransform(2561.5,1309.3,1,1,0,0,0,89.5,111);

	this.instance_135 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_135.setTransform(2558.3,415.6,1,1,0,0,0,89.5,111);

	this.instance_136 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_136.setTransform(2558.4,599,1,1,0,0,0,89.5,111);

	this.instance_137 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_137.setTransform(2560.8,769.2,1,1,0,0,0,89.5,111);

	this.instance_138 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_138.setTransform(2560.8,952.6,1,1,0,0,0,89.5,111);

	this.instance_139 = new lib.leaves2_dot_png();
	this.instance_139.setTransform(727.2,454.3,1.401,1.401,0,0,0,22,20);

	this.instance_140 = new lib.moss_dot_png();
	this.instance_140.setTransform(2286.7,543.2,1,1,-89.5,0,0,40.5,27.4);

	this.instance_141 = new lib.water_hyphen_bottom_dot_png();
	this.instance_141.setTransform(460.4,1741.4,1,1,0,0,0,49.5,49.5);

	this.instance_142 = new lib.water_hyphen_bottom_dot_png();
	this.instance_142.setTransform(646.1,1741.4,1,1,0,0,0,49.5,49.5);

	this.instance_143 = new lib.water_hyphen_bottom_dot_png();
	this.instance_143.setTransform(1017.3,1745,1,1,0,0,0,49.5,49.5);

	this.instance_144 = new lib.water_hyphen_bottom_dot_png();
	this.instance_144.setTransform(921.3,1745,1,1,0,0,0,49.5,49.5);

	this.instance_145 = new lib.water_hyphen_bottom_dot_png();
	this.instance_145.setTransform(1107,1745,1,1,0,0,0,49.5,49.5);

	this.instance_146 = new lib.water_hyphen_bottom_dot_png();
	this.instance_146.setTransform(1292.2,1745,1,1,0,0,0,49.5,49.5);

	this.instance_147 = new lib.water_hyphen_bottom_dot_png();
	this.instance_147.setTransform(1196.2,1745,1,1,0,0,0,49.5,49.5);

	this.instance_148 = new lib.water_hyphen_bottom_dot_png();
	this.instance_148.setTransform(1386,1745.2,1,1,0,0,0,49.5,49.5);

	this.instance_149 = new lib.water_hyphen_top_dot_png();
	this.instance_149.setTransform(476.4,1512.8,1,1,0,0,0,49.5,50);

	this.instance_150 = new lib.water_hyphen_top_dot_png();
	this.instance_150.setTransform(572,1512.8,1,1,0,0,0,49.5,50);

	this.instance_151 = new lib.water_hyphen_top_dot_png();
	this.instance_151.setTransform(666.7,1512.8,1,1,0,0,0,49.5,50);

	this.instance_152 = new lib.water_hyphen_top_dot_png();
	this.instance_152.setTransform(948.8,1514.3,1,1,0,0,0,49.5,50);

	this.instance_153 = new lib.water_hyphen_top_dot_png();
	this.instance_153.setTransform(1043.5,1514.2,1,1,0,0,0,49.5,50);

	this.instance_154 = new lib.water_hyphen_top_dot_png();
	this.instance_154.setTransform(1137.3,1513.6,1,1,0,0,0,49.5,50);

	this.instance_155 = new lib.water_hyphen_top_dot_png();
	this.instance_155.setTransform(1233.2,1514.3,1,1,0,0,0,49.5,50);

	this.instance_156 = new lib.water_hyphen_top_dot_png();
	this.instance_156.setTransform(1328.3,1513.6,1,1,0,0,0,49.5,50);

	this.instance_157 = new lib.water_hyphen_top_dot_png();
	this.instance_157.setTransform(1695.6,1515.7,1,1,0,0,0,49.5,50);

	this.instance_158 = new lib.water_hyphen_top_dot_png();
	this.instance_158.setTransform(1792.8,1515.7,1,1,0,0,0,49.5,50);

	this.instance_159 = new lib.water_hyphen_top_dot_png();
	this.instance_159.setTransform(1888.1,1515.7,1,1,0,0,0,49.5,50);

	this.instance_160 = new lib.water_hyphen_top_dot_png();
	this.instance_160.setTransform(1985.5,1515.7,1,1,0,0,0,49.5,50);

	this.instance_161 = new lib.water_hyphen_top_dot_png();
	this.instance_161.setTransform(2080.9,1515.7,1,1,0,0,0,49.5,50);

	this.instance_162 = new lib.water_hyphen_top_dot_png();
	this.instance_162.setTransform(2174,1515.7,1,1,0,0,0,49.5,50);

	this.instance_163 = new lib.water_hyphen_top_dot_png();
	this.instance_163.setTransform(2264,1515.7,1,1,0,0,0,49.5,50);

	this.instance_164 = new lib.water_hyphen_middle_dot_png();
	this.instance_164.setTransform(633.8,1604.7,1,1,0,0,0,49.5,49.5);

	this.instance_165 = new lib.water_hyphen_middle_dot_png();
	this.instance_165.setTransform(1316.5,1607.8,1,1,0,0,0,49.5,49.5);

	this.instance_166 = new lib.water_hyphen_middle_dot_png();
	this.instance_166.setTransform(949.5,1609,1,1,0,0,0,49.5,49.5);

	this.instance_167 = new lib.water_hyphen_middle_dot_png();
	this.instance_167.setTransform(1699.7,1606.5,1,1,0,0,0,49.5,49.5);

	this.instance_168 = new lib.water_hyphen_middle_dot_png();
	this.instance_168.setTransform(2253.5,1605.3,1,1,0,0,0,49.5,49.5);

	this.instance_169 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_169.setTransform(2527.9,1671.6,1.149,1.149,0,0,0,126,111);

	this.instance_170 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_170.setTransform(173.8,1664.1,1.149,1.149,0,0,0,126,111);

	this.instance_171 = new lib.endpole_dot_png();
	this.instance_171.setTransform(2459.4,226.6,1,1,0,0,0,8,39.5);

	this.instance_172 = new lib.endflag_dot_png();
	this.instance_172.setTransform(2486.5,-7,1,1,0,0,0,49,56);

	this.instance_173 = new lib.endpole_dot_png();
	this.instance_173.setTransform(2459.1,80.2,1,1,0,0,0,8,39.5);

	this.instance_174 = new lib.endpole_dot_png();
	this.instance_174.setTransform(2459.3,148.1,1,1,0,0,0,8,39.5);

	this.instance_175 = new lib.endpole_dot_png();
	this.instance_175.setTransform(2459.5,305,1,1,0,0,0,8,39.5);

	this.instance_176 = new lib.hazardsign_dot_png();
	this.instance_176.setTransform(551.4,1402.1,0.8,0.8,0,0,0,51,46);

	this.instance_177 = new lib.endpole_dot_png();
	this.instance_177.setTransform(553.4,1458.8,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_178 = new lib.hazardsign_dot_png();
	this.instance_178.setTransform(1098.8,1406,0.8,0.8,0,0,0,51,46);

	this.instance_179 = new lib.endpole_dot_png();
	this.instance_179.setTransform(1100.8,1462.7,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_180 = new lib.hazardsign_dot_png();
	this.instance_180.setTransform(1990.3,1394.2,0.8,0.8,0,0,0,51,46);

	this.instance_181 = new lib.endpole_dot_png();
	this.instance_181.setTransform(1992.3,1450.9,0.873,0.873,0,0,0,8.1,39.5);

	this.addChild(this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.isDisp,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.7,-110.4,2767.4,1909.6);


(lib.level5PixiBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(2175.2,620.9,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(2202.3,387.3,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(2174.9,474.5,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(2175.1,542.4,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(2175.3,699.3,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.moss_dot_png();
	this.instance_5.setTransform(2008.4,416.1,0.853,0.853,173.5,0,0,40.5,27.5);

	this.instance_6 = new lib.leaves1_dot_png();
	this.instance_6.setTransform(350.1,418.9,1,1,0,0,0,18.5,15);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(1944.3,-130.4,0.723,0.723,0,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(1944.3,-24.4,0.723,0.723,0,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(1944,81.9,0.723,0.723,0,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(1943.8,188.3,0.723,0.723,0,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(1943.8,294.9,0.723,0.723,0,0,0,7,74);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(1943.7,401.2,0.723,0.723,0,0,0,7,74);

	this.instance_13 = new lib.hook_dot_png();
	this.instance_13.setTransform(1943.5,645.7,0.935,0.935,0,0,0,41,96.5);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(1943.8,507.3,0.723,0.723,0,0,0,7,74);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(1631.1,-128.6,0.723,0.723,0,0,0,7,74);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(1631.1,-22.4,0.723,0.723,0,0,0,7,74);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(1631.1,83.7,0.723,0.723,0,0,0,7,74);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(1631.1,190,0.723,0.723,0,0,0,7,74);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(1631.6,295.9,0.723,0.723,0,0,0,7,74);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(1631.6,402.4,0.723,0.723,0,0,0,7,74);

	this.instance_21 = new lib.hook_dot_png();
	this.instance_21.setTransform(1632.2,647,0.935,0.935,0,0,0,41,96.5);

	this.instance_22 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_22.setTransform(1631.6,508.9,0.723,0.723,0,0,0,7,74);

	this.instance_23 = new lib.dirt1_dot_png();
	this.instance_23.setTransform(416.1,484.1,1,1,0,0,0,55,87);

	this.instance_24 = new lib.dirt3_dot_png();
	this.instance_24.setTransform(1184.4,526.1,0.604,0.604,0,0,0,55,88);

	this.instance_25 = new lib.outsidebarn_hyphen_window4_dot_png();
	this.instance_25.setTransform(337.6,351.8,1.232,1.232,0,0,0,95,73);

	this.instance_26 = new lib.outsidebarn_hyphen_window2_dot_png();
	this.instance_26.setTransform(1938.5,343.7,1.168,1.168,0,0,0,95,70);

	this.instance_27 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_27.setTransform(2118.9,958.2,1,1,0,0,0,200,200);

	this.instance_28 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_28.setTransform(2003.9,935.2,1,1,0,0,0,200,200);

	this.instance_29 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_29.setTransform(1616.9,935.2,1,1,0,0,0,200,200);

	this.instance_30 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_30.setTransform(1225,958.2,1,1,0,0,0,200,200);

	this.instance_31 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_31.setTransform(838,958.2,1,1,0,0,0,200,200);

	this.instance_32 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_32.setTransform(453,958.2,1,1,0,0,0,200,200);

	this.instance_33 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_33.setTransform(66,958.2,1,1,0,0,0,200,200);

	this.instance_34 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_34.setTransform(2118.9,854.2,1,1,0,0,0,200,200);

	this.instance_35 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_35.setTransform(2003.9,854.2,1,1,0,0,0,200,200);

	this.instance_36 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_36.setTransform(1616.9,854.2,1,1,0,0,0,200,200);

	this.instance_37 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_37.setTransform(1225,854.2,1,1,0,0,0,200,200);

	this.instance_38 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_38.setTransform(838,854.2,1,1,0,0,0,200,200);

	this.instance_39 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_39.setTransform(453,854.2,1,1,0,0,0,200,200);

	this.instance_40 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_40.setTransform(66,854.2,1,1,0,0,0,200,200);

	this.instance_41 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_41.setTransform(2211.9,474.1,1,1,0,0,0,200,200);

	this.instance_42 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_42.setTransform(1667,461.9,1,1,0,0,0,200,200);

	this.instance_43 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_43.setTransform(1616.9,474.1,1,1,0,0,0,200,200);

	this.instance_44 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_44.setTransform(1225,474.1,1,1,0,0,0,200,200);

	this.instance_45 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_45.setTransform(838,474.1,1,1,0,0,0,200,200);

	this.instance_46 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_46.setTransform(608.4,464.6,1,1,0,0,0,200,200);

	this.instance_47 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(66,474.1,1,1,0,0,0,200,200);

	this.instance_48 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_48.setTransform(2382.9,81,1,1,0,0,0,200,200);

	this.instance_49 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_49.setTransform(1997.9,81,1,1,0,0,0,200,200);

	this.instance_50 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_50.setTransform(1610.9,81,1,1,0,0,0,200,200);

	this.instance_51 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_51.setTransform(1225,81,1,1,0,0,0,200,200);

	this.instance_52 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_52.setTransform(838,81,1,1,0,0,0,200,200);

	this.instance_53 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_53.setTransform(453,81,1,1,0,0,0,200,200);

	this.instance_54 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_54.setTransform(66,81,1,1,0,0,0,200,200);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_55 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_55.setTransform(1958.9,612.2,1,1,0,0,0,200,200);

	this.instance_56 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_56.setTransform(372.5,535.9,1,1,0,0,0,200,200);

	this.addChild(this.instance_56,this.instance_55,this.isDispBG,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165.5,-183.9,2748.4,1342.1);


(lib.level5Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance.setTransform(600.7,704,1,1.155,90);

	this.instance_1 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_1.setTransform(726.1,339.4,0.828,0.546,90);

	this.instance_2 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_2.setTransform(596.1,340.3,0.828,0.546,90);

	this.instance_3 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_3.setTransform(631.4,297.9,0.828,0.79,-87.8);

	this.instance_4 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_4.setTransform(607.6,298.7,0.828,0.79,-90);

	this.instance_5 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_5.setTransform(524.9,301,0.828,0.79,-90);

	this.instance_6 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_6.setTransform(592.1,283.3,0.668,0.509);

	this.instance_7 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_7.setTransform(532.3,286.5,0.668,0.509);

	this.instance_8 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_8.setTransform(470.2,678.1,1,1.124,-90);

	this.instance_9 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_9.setTransform(591.5,334.4,0.591,0.904);

	this.instance_10 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_10.setTransform(666,435.9,0.621,0.85,180);

	this.instance_11 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_11.setTransform(591.5,374.5,0.591,0.904);

	this.instance_12 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_12.setTransform(666,476.1,0.621,0.85,180);

	this.instance_13 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_13.setTransform(591.5,462.2,0.591,0.904);

	this.instance_14 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_14.setTransform(666,563.7,0.621,0.85,180);

	this.instance_15 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_15.setTransform(591.5,559.6,0.591,0.904);

	this.instance_16 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_16.setTransform(666,661.2,0.621,0.85,180);

	this.instance_17 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_17.setTransform(591.5,644.8,0.591,0.904);

	this.instance_18 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_18.setTransform(666,746.4,0.621,0.85,180);

	this.instance_19 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_19.setTransform(709.4,284.8,0.828,0.546);

	this.instance_20 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_20.setTransform(541.9,351,0.828,0.546,180);

	this.instance_21 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_21.setTransform(591.5,743.1,0.591,0.904);

	this.instance_22 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_22.setTransform(666,844.7,0.621,0.85,180);

	this.instance_23 = new lib.ground_hyphen_right_dot_png();
	this.instance_23.setTransform(64.6,563.3);

	this.instance_24 = new lib.ground_hyphen_right_dot_png();
	this.instance_24.setTransform(64.6,508.4);

	this.instance_25 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_25.setTransform(423.9,726.5,0.828,0.546,180);

	this.instance_26 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_26.setTransform(406.4,682.8,1,1.124,-90);

	this.instance_27 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_27.setTransform(545.5,701.9,1,1.155,90);

	this.instance_28 = new lib.ground_hyphen_right_dot_png();
	this.instance_28.setTransform(595.9,714,0.678,0.443,180);

	this.instance_29 = new lib.ground_hyphen_right_dot_png();
	this.instance_29.setTransform(539.4,714,1.175,0.443,180);

	this.instance_30 = new lib.dirt4_dot_png();
	this.instance_30.setTransform(4.4,336.4,0.751,0.751,0,0,0,121.5,37.5);

	this.instance_31 = new lib.dirt4_dot_png();
	this.instance_31.setTransform(56.9,336.4,0.751,0.751,0,0,0,121.5,37.5);

	this.instance_32 = new lib.dirt4_dot_png();
	this.instance_32.setTransform(13.1,336.4,0.751,0.751,0,0,0,121.5,37.5);

	this.instance_33 = new lib.ground_hyphen_right_dot_png();
	this.instance_33.setTransform(64.6,332.1);

	this.instance_34 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_34.setTransform(262,477.5,0.828,0.546);

	this.instance_35 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_35.setTransform(279.4,521.3,1,1.062,90);

	this.instance_36 = new lib.water_hyphen_bottom_dot_png();
	this.instance_36.setTransform(1849.1,1089.5,1.058,1.058,0,0,0,49.5,49.5);

	this.instance_37 = new lib.water_hyphen_bottom_dot_png();
	this.instance_37.setTransform(1747,1089.5,1.058,1.058,0,0,0,49.5,49.5);

	this.instance_38 = new lib.water_hyphen_bottom_dot_png();
	this.instance_38.setTransform(1646.1,1089.5,1.058,1.058,0,0,0,49.6,49.5);

	this.instance_39 = new lib.leaves_hyphen_sml_dot_png();
	this.instance_39.setTransform(-25.4,64.5,1.688,1.688);

	this.instance_40 = new lib.leaves_hyphen_sml_dot_png();
	this.instance_40.setTransform(-3.9,65.9,1.688,1.688);

	this.instance_41 = new lib.leaves2_dot_png();
	this.instance_41.setTransform(35.5,241.4,1,1,17);

	this.instance_42 = new lib.leaves1_dot_png();
	this.instance_42.setTransform(928.1,818.6);

	this.instance_43 = new lib.moss_dot_png();
	this.instance_43.setTransform(1016.3,836.1,0.901,0.901);

	this.instance_44 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_44.setTransform(527.9,834.9);

	this.instance_45 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_45.setTransform(339.1,833.9);

	this.instance_46 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_46.setTransform(637.9,834.9);

	this.instance_47 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_47.setTransform(1474.3,1108.3,1,1,0,0,0,25,49);

	this.instance_48 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_48.setTransform(1474.4,990.2,1,1,0,0,0,26,70);

	this.instance_49 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_49.setTransform(1404.4,1107.6,1,1,0,0,0,98.5,49);

	this.instance_50 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_50.setTransform(1230.8,1107.7,1,1,0,0,0,98.5,49);

	this.instance_51 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_51.setTransform(1306.1,920.2);

	this.instance_52 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_52.setTransform(1132.4,919.6);

	this.instance_53 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_53.setTransform(1269.3,835.2);

	this.instance_54 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_54.setTransform(1486.9,880.1,1,1,0,0,0,34.5,46.5);

	this.instance_55 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_55.setTransform(1196.8,833.9);

	this.instance_56 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_56.setTransform(804.5,1107.6,1,1,0,0,0,98.5,49);

	this.instance_57 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_57.setTransform(627.6,1107.7,1,1,0,0,0,98.5,49);

	this.instance_58 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_58.setTransform(706.2,920.2);

	this.instance_59 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_59.setTransform(529.2,919.6);

	this.instance_60 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_60.setTransform(682.8,1088.3,1,1,0,0,0,60,60);

	this.instance_61 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_61.setTransform(727.9,1028.9);

	this.instance_62 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_62.setTransform(527.3,1028.3);

	this.instance_63 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_63.setTransform(682.2,970.2,1,1,0,0,0,60,60);

	this.instance_64 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_64.setTransform(727.3,910.8);

	this.instance_65 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_65.setTransform(526.7,910.1);

	this.instance_66 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_66.setTransform(1103.3,1107.6,1,1,0,0,0,98.5,49);

	this.instance_67 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_67.setTransform(926.4,1107.7,1,1,0,0,0,98.5,49);

	this.instance_68 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_68.setTransform(1005,920.2);

	this.instance_69 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_69.setTransform(828,919.6);

	this.instance_70 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_70.setTransform(1004.9,833.9);

	this.instance_71 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_71.setTransform(827.3,833.6);

	this.instance_72 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_72.setTransform(138.8,1107.6,1,1,0,0,0,98.5,49);

	this.instance_73 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_73.setTransform(-38.1,1107.7,1,1,0,0,0,98.5,49);

	this.instance_74 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_74.setTransform(40.4,920.2);

	this.instance_75 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_75.setTransform(-136.5,919.6);

	this.instance_76 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_76.setTransform(-137.9,834.9);

	this.instance_77 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_77.setTransform(-27.8,834.9);

	this.instance_78 = new lib.leaves2_dot_png();
	this.instance_78.setTransform(2059.1,671.4,1,1,0,0,0,22,20);

	this.instance_79 = new lib.leaves1_dot_png();
	this.instance_79.setTransform(2220.1,896.4,1.167,1.167);

	this.instance_80 = new lib.moss_dot_png();
	this.instance_80.setTransform(2223.6,689.1,0.798,0.798,38.2);

	this.instance_81 = new lib.moss_dot_png();
	this.instance_81.setTransform(2071,1029.8,1.56,1.56);

	this.instance_82 = new lib.wall_hyphen_right_dot_png();
	this.instance_82.setTransform(2203.6,1031.6,1.352,1.352);

	this.instance_83 = new lib.wall_hyphen_right_dot_png();
	this.instance_83.setTransform(2203.3,911.9,1.352,1.352);

	this.instance_84 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_84.setTransform(2015.5,632.3,1.276,1.276);

	this.instance_85 = new lib.wall_hyphen_left_dot_png();
	this.instance_85.setTransform(2019.5,1022.5,1.328,1.328);

	this.instance_86 = new lib.dirt1_dot_png();
	this.instance_86.setTransform(617.6,723.9,0.364,0.364,0,0,0,55,87);

	this.instance_87 = new lib.dirt3_dot_png();
	this.instance_87.setTransform(588.9,308.3);

	this.instance_88 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_88.setTransform(648.6,284.9,0.668,0.509);

	this.instance_89 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_89.setTransform(17,1088.3,1,1,0,0,0,60,60);

	this.instance_90 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_90.setTransform(62.2,1028.9);

	this.instance_91 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_91.setTransform(-138.5,1028.3);

	this.instance_92 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_92.setTransform(16.4,970.2,1,1,0,0,0,60,60);

	this.instance_93 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_93.setTransform(61.6,910.8);

	this.instance_94 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_94.setTransform(-139.1,910.1);

	this.instance_95 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_95.setTransform(15.8,851.4,1,1,0,0,0,60,60);

	this.instance_96 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_96.setTransform(61,792);

	this.instance_97 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_97.setTransform(-139.7,791.4);

	this.instance_98 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_98.setTransform(437.6,1107.6,1,1,0,0,0,98.5,49);

	this.instance_99 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_99.setTransform(260.7,1107.7,1,1,0,0,0,98.5,49);

	this.instance_100 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_100.setTransform(339.2,920.2);

	this.instance_101 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_101.setTransform(162.3,919.6);

	this.instance_102 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_102.setTransform(161.6,833.6);

	this.instance_103 = new lib.bone_dot_png();
	this.instance_103.setTransform(-9.6,422.8,1.093,1.093);

	this.instance_104 = new lib.dirt3_dot_png();
	this.instance_104.setTransform(-85,550.8);

	this.instance_105 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_105.setTransform(13.8,734.5,1,1,0,0,0,60,60);

	this.instance_106 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_106.setTransform(58.9,675.1);

	this.instance_107 = new lib.ground_hyphen_right_dot_png();
	this.instance_107.setTransform(64.6,717.1);

	this.instance_108 = new lib.ground_hyphen_right_dot_png();
	this.instance_108.setTransform(64.6,662.1);

	this.instance_109 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_109.setTransform(162.8,500.9,1,1,-90);

	this.instance_110 = new lib.ground_hyphen_right_dot_png();
	this.instance_110.setTransform(57.2,556.5);

	this.instance_111 = new lib.ground_hyphen_left_dot_png();
	this.instance_111.setTransform(-140.9,557.1);

	this.instance_112 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_112.setTransform(-47.9,557.1);

	this.instance_113 = new lib.ground_hyphen_right_dot_png();
	this.instance_113.setTransform(64.6,438.4);

	this.instance_114 = new lib.ground_hyphen_right_dot_png();
	this.instance_114.setTransform(165.2,490,1,0.443);

	this.instance_115 = new lib.dirt3_dot_png();
	this.instance_115.setTransform(24.4,325.1,0.29,0.29,0,0,0,55.1,88);

	this.instance_116 = new lib.ground_hyphen_right_dot_png();
	this.instance_116.setTransform(54.6,395.3);

	this.instance_117 = new lib.ground_hyphen_left_dot_png();
	this.instance_117.setTransform(-141,437.7);

	this.instance_118 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_118.setTransform(-48,437.7);

	this.instance_119 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_119.setTransform(-48,331.4);

	this.instance_120 = new lib.ground_hyphen_right_dot_png();
	this.instance_120.setTransform(42.8,378.8,1,1,-90);

	this.instance_121 = new lib.dirt2_dot_png();
	this.instance_121.setTransform(-163.5,260.1);

	this.instance_122 = new lib.ground_hyphen_right_dot_png();
	this.instance_122.setTransform(-16.2,377.6,1,1,0,0,0,53.5,60.5);

	this.instance_123 = new lib.ground_hyphen_left_dot_png();
	this.instance_123.setTransform(-138.5,318.3);

	this.instance_124 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_124.setTransform(-141.7,674.5);

	this.instance_125 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_125.setTransform(18.7,167.1);

	this.instance_126 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_126.setTransform(17.4,87.7);

	this.instance_127 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_127.setTransform(-154,75.4,1.13,1);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_128 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_128.setTransform(2026.2,848.5,0.831,0.831);

	this.instance_129 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_129.setTransform(2129.2,638,1.276,1.276);

	this.instance_130 = new lib.moss_dot_png();
	this.instance_130.setTransform(1062,893.7,1.447,1.447,180);

	this.instance_131 = new lib.water_hyphen_middle_dot_png();
	this.instance_131.setTransform(1841.9,991,1,1,0,0,0,49.5,49.5);

	this.instance_132 = new lib.water_hyphen_middle_dot_png();
	this.instance_132.setTransform(1744.9,991,1,1,0,0,0,49.5,49.5);

	this.instance_133 = new lib.water_hyphen_middle_dot_png();
	this.instance_133.setTransform(1651,991,1,1,0,0,0,49.5,49.5);

	this.instance_134 = new lib.water_hyphen_middle_dot_png();
	this.instance_134.setTransform(1553.9,991,1,1,0,0,0,49.5,49.5);

	this.instance_135 = new lib.water_hyphen_middle_dot_png();
	this.instance_135.setTransform(2004.1,991,1,1,0,0,0,49.5,49.5);

	this.instance_136 = new lib.water_hyphen_middle_dot_png();
	this.instance_136.setTransform(1907,991,1,1,0,0,0,49.5,49.5);

	this.instance_137 = new lib.water_hyphen_bottom_dot_png();
	this.instance_137.setTransform(1543.9,1089.5,1.058,1.058,0,0,0,49.5,49.5);

	this.instance_138 = new lib.water_hyphen_bottom_dot_png();
	this.instance_138.setTransform(2026.1,1089.5,1.058,1.058,0,0,0,49.5,49.5);

	this.instance_139 = new lib.water_hyphen_bottom_dot_png();
	this.instance_139.setTransform(1924,1089.5,1.058,1.058,0,0,0,49.5,49.5);

	this.instance_140 = new lib.water_hyphen_top_dot_png();
	this.instance_140.setTransform(1555.8,896.7,1,1.137,0,0,0,49.5,50);

	this.instance_141 = new lib.water_hyphen_top_dot_png();
	this.instance_141.setTransform(1651,896.7,1,1.137,0,0,0,49.5,50);

	this.instance_142 = new lib.water_hyphen_top_dot_png();
	this.instance_142.setTransform(1742.1,896.7,1,1.137,0,0,0,49.5,50);

	this.instance_143 = new lib.water_hyphen_top_dot_png();
	this.instance_143.setTransform(1837.3,896.7,1,1.137,0,0,0,49.5,50);

	this.instance_144 = new lib.water_hyphen_top_dot_png();
	this.instance_144.setTransform(1926.3,896.7,1,1.137,0,0,0,49.5,50);

	this.instance_145 = new lib.water_hyphen_top_dot_png();
	this.instance_145.setTransform(2021.5,896.7,1,1.137,0,0,0,49.5,50);

	this.instance_146 = new lib.water_hyphen_middle_dot_png();
	this.instance_146.setTransform(1536.4,989.8,1,1,0,0,0,49.5,49.5);

	this.instance_147 = new lib.water_hyphen_bottom_dot_png();
	this.instance_147.setTransform(1526.4,1088.2,1.058,1.058,0,0,0,49.5,49.5);

	this.instance_148 = new lib.water_hyphen_top_dot_png();
	this.instance_148.setTransform(1538.3,895.4,1,1.137,0,0,0,49.5,50);

	this.instance_149 = new lib.ground_hyphen_right_dot_png();
	this.instance_149.setTransform(64.6,277.2);

	this.instance_150 = new lib.ground_hyphen_right_dot_png();
	this.instance_150.setTransform(-18,382.8,1,1,-90);

	this.instance_151 = new lib.hazardsign_dot_png();
	this.instance_151.setTransform(1787,768.6,0.8,0.8,0,0,0,51,46);

	this.instance_152 = new lib.endpole_dot_png();
	this.instance_152.setTransform(1789,825.3,0.873,0.873,0,0,0,8.1,39.5);

	this.addChild(this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.isDisp,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.5,-0.5,2521.1,1157.8);


(lib.level4seesawcopy = function() {
	this.initialize();

	// Layer 1
	this.isMovingItem = new lib.plank_hyphen_repeat_dot_png();
	this.isMovingItem.setTransform(0,0,0.871,0.928,0,0,0,285,9);

	this.addChild(this.isMovingItem);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-248.1,-8.3,496.3,16.7);


(lib.level4PixiPlatform = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(-7.3,-1247.4,1,1,0,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(-7.3,-1099.4,1,1,0,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(-7.3,-976.1,1,1,0,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(-7.3,-828.1,1,1,0,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(-7.3,-680.1,1,1,0,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(-7.3,-532.1,1,1,0,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(-7.3,-384.1,1,1,0,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(-7.3,-236.1,1,1,0,0,0,7,74);

	this.isMovingItem = new lib.woodencrate_dot_png();
	this.isMovingItem.setTransform(-1.5,6.3,0.758,0.758,0,0,0,234,98);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(44.6,-111.2,1,1,-45,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(-57.6,-111.3,1,1,45,0,0,7,74);

	this.addChild(this.instance_9,this.instance_8,this.isMovingItem,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-178.8,-1321.4,354.6,1402);


(lib.level4PixiBG = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.dirt4_dot_png();
	this.instance.setTransform(1570.4,602.2,1,1,0,0,0,121.5,37.5);

	this.instance_1 = new lib.dirt4_dot_png();
	this.instance_1.setTransform(2620.7,138,1,1,0,0,0,121.5,37.5);

	this.instance_2 = new lib.dirt1_dot_png();
	this.instance_2.setTransform(4118.2,-32.5,0.586,0.586,90.3,0,0,55,87);

	this.instance_3 = new lib.dirt1_dot_png();
	this.instance_3.setTransform(3592.9,356.1,0.724,0.724,0,0,0,55.1,87);

	this.instance_4 = new lib.dirt1_dot_png();
	this.instance_4.setTransform(1624.5,30.8,1,1,134.6,0,0,55,87);

	this.instance_5 = new lib.dirt1_dot_png();
	this.instance_5.setTransform(302.1,288.1,1,1,0,0,0,55,87);

	this.instance_6 = new lib.leaves1_dot_png();
	this.instance_6.setTransform(4373.3,329.7,0.783,0.783,0,0,0,18.6,15);

	this.instance_7 = new lib.leaves2_dot_png();
	this.instance_7.setTransform(4148.5,-232.2,0.766,0.766,161.3,0,0,21.9,19.9);

	this.instance_8 = new lib.moss_dot_png();
	this.instance_8.setTransform(2358.4,116.5,0.679,0.679,-96.6,0,0,40.5,27.5);

	this.instance_9 = new lib.moss_dot_png();
	this.instance_9.setTransform(1773.8,-230.7,1.109,1.109,175.8,0,0,40.5,27.5);

	this.instance_10 = new lib.moss_dot_png();
	this.instance_10.setTransform(892.4,-235.6,1,1,0,0,0,40.5,27.5);

	this.instance_11 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_11.setTransform(2126.9,-372.6,1,1,0,0,0,14,211);

	this.instance_12 = new lib.crane_swith_only_dot_png();
	this.instance_12.setTransform(2126,294.5,0.805,0.805,0,0,0,38.5,69.5);

	this.instance_13 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_13.setTransform(2126.9,37.4,1,1,0,0,0,14,211);

	this.instance_14 = new lib.hook_dot_png();
	this.instance_14.setTransform(1880.3,787,0.665,0.665,0,0,0,41,96.5);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(1879.7,-430.5,0.686,0.686,0,0,0,7,74);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(1879.7,-329.7,0.686,0.686,0,0,0,7,74);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(1879.7,-228.6,0.686,0.686,0,0,0,7,74);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(1879.7,-127.5,0.686,0.686,0,0,0,7,74);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(1879.7,-26.4,0.686,0.686,0,0,0,7,74);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(1879.7,74.3,0.686,0.686,0,0,0,7,74);

	this.instance_21 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_21.setTransform(1879.7,175,0.686,0.686,0,0,0,7,74);

	this.instance_22 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_22.setTransform(1879.7,275.7,0.686,0.686,0,0,0,7,74);

	this.instance_23 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_23.setTransform(1879.7,376.5,0.686,0.686,0,0,0,7,74);

	this.instance_24 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_24.setTransform(1879.7,477.2,0.686,0.686,0,0,0,7,74);

	this.instance_25 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_25.setTransform(1879.7,577.9,0.686,0.686,0,0,0,7,74);

	this.instance_26 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_26.setTransform(1879.7,678.6,0.686,0.686,0,0,0,7,74);

	this.instance_27 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_27.setTransform(1379.7,-437,0.686,0.686,0,0,0,7,74);

	this.instance_28 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_28.setTransform(1379.7,-336.2,0.686,0.686,0,0,0,7,74);

	this.instance_29 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_29.setTransform(1379.7,-235.1,0.686,0.686,0,0,0,7,74);

	this.instance_30 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_30.setTransform(1379.7,-134,0.686,0.686,0,0,0,7,74);

	this.instance_31 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_31.setTransform(1379.7,-32.9,0.686,0.686,0,0,0,7,74);

	this.instance_32 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_32.setTransform(1379.7,67.8,0.686,0.686,0,0,0,7,74);

	this.instance_33 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_33.setTransform(1379.7,168.5,0.686,0.686,0,0,0,7,74);

	this.instance_34 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_34.setTransform(1379.7,269.2,0.686,0.686,0,0,0,7,74);

	this.instance_35 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_35.setTransform(1379.7,370,0.686,0.686,0,0,0,7,74);

	this.instance_36 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_36.setTransform(1379.7,470.7,0.686,0.686,0,0,0,7,74);

	this.instance_37 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_37.setTransform(1379.7,571.4,0.686,0.686,0,0,0,7,74);

	this.instance_38 = new lib.hook_dot_png();
	this.instance_38.setTransform(1379.6,780.2,0.665,0.665,0,0,0,41,96.5);

	this.instance_39 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_39.setTransform(1379.7,672.1,0.686,0.686,0,0,0,7,74);

	this.instance_40 = new lib.endpole_dot_png();
	this.instance_40.setTransform(4299.4,299.6,1,1,0,0,0,8,39.5);

	this.instance_41 = new lib.endflag_dot_png();
	this.instance_41.setTransform(4326.4,129.3,1,1,0,0,0,49,56);

	this.instance_42 = new lib.endpole_dot_png();
	this.instance_42.setTransform(4299.4,222.6,1,1,0,0,0,8,39.5);

	this.instance_43 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_43.setTransform(4474.8,939.7,1,1,0,0,0,237,152.5);

	this.instance_44 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_44.setTransform(4002.5,939.7,1,1,0,0,0,237,152.5);

	this.instance_45 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_45.setTransform(3530.1,939.7,1,1,0,0,0,237,152.5);

	this.instance_46 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_46.setTransform(3057.8,939.7,1,1,0,0,0,237,152.5);

	this.instance_47 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(2586.9,939.7,1,1,0,0,0,237,152.5);

	this.instance_48 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_48.setTransform(2114.6,939.7,1,1,0,0,0,237,152.5);

	this.instance_49 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_49.setTransform(1642.2,939.7,1,1,0,0,0,237,152.5);

	this.instance_50 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_50.setTransform(1169.9,939.7,1,1,0,0,0,237,152.5);

	this.instance_51 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_51.setTransform(699,939.7,1,1,0,0,0,237,152.5);

	this.instance_52 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_52.setTransform(226.7,939.7,1,1,0,0,0,237,152.5);

	this.instance_53 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_53.setTransform(4474.8,637.7,1,1,0,0,0,237,152.5);

	this.instance_54 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_54.setTransform(4002.5,637.7,1,1,0,0,0,237,152.5);

	this.instance_55 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_55.setTransform(3530.1,637.7,1,1,0,0,0,237,152.5);

	this.instance_56 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_56.setTransform(3057.8,637.7,1,1,0,0,0,237,152.5);

	this.instance_57 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_57.setTransform(2586.9,637.7,1,1,0,0,0,237,152.5);

	this.instance_58 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_58.setTransform(2114.6,637.7,1,1,0,0,0,237,152.5);

	this.instance_59 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_59.setTransform(1642.2,637.7,1,1,0,0,0,237,152.5);

	this.instance_60 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_60.setTransform(1169.9,637.7,1,1,0,0,0,237,152.5);

	this.instance_61 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_61.setTransform(699,637.7,1,1,0,0,0,237,152.5);

	this.instance_62 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_62.setTransform(226.7,637.7,1,1,0,0,0,237,152.5);

	this.instance_63 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_63.setTransform(4474.8,341.4,1,1,0,0,0,237,152.5);

	this.instance_64 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_64.setTransform(4002.5,335.8,1,1,0,0,0,237,152.5);

	this.instance_65 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_65.setTransform(3530.1,335.8,1,1,0,0,0,237,152.5);

	this.instance_66 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_66.setTransform(3057.8,335.8,1,1,0,0,0,237,152.5);

	this.instance_67 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_67.setTransform(2586.9,335.8,1,1,0,0,0,237,152.5);

	this.instance_68 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_68.setTransform(2114.6,335.8,1,1,0,0,0,237,152.5);

	this.instance_69 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_69.setTransform(1642.2,335.8,1,1,0,0,0,237,152.5);

	this.instance_70 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_70.setTransform(1169.9,335.8,1,1,0,0,0,237,152.5);

	this.instance_71 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_71.setTransform(699,335.8,1,1,0,0,0,237,152.5);

	this.instance_72 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_72.setTransform(226.7,335.8,1,1,0,0,0,237,152.5);

	this.instance_73 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_73.setTransform(4474.8,37.3,1,1,0,0,0,237,152.5);

	this.instance_74 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_74.setTransform(4002.5,36.4,1,1,0,0,0,237,152.5);

	this.instance_75 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_75.setTransform(3530.1,36.4,1,1,0,0,0,237,152.5);

	this.instance_76 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_76.setTransform(3057.8,36.4,1,1,0,0,0,237,152.5);

	this.instance_77 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_77.setTransform(2586.9,36.4,1,1,0,0,0,237,152.5);

	this.instance_78 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_78.setTransform(2114.6,36.4,1,1,0,0,0,237,152.5);

	this.instance_79 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_79.setTransform(1642.2,36.4,1,1,0,0,0,237,152.5);

	this.instance_80 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_80.setTransform(1169.9,36.4,1,1,0,0,0,237,152.5);

	this.instance_81 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_81.setTransform(699,36.4,1,1,0,0,0,237,152.5);

	this.instance_82 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_82.setTransform(226.7,36.4,1,1,0,0,0,237,152.5);

	this.instance_83 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_83.setTransform(4474.8,-267.5,1,1,0,0,0,237,153);

	this.instance_84 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_84.setTransform(4002.5,-267.5,1,1,0,0,0,237,153);

	this.instance_85 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_85.setTransform(3530.1,-267.5,1,1,0,0,0,237,153);

	this.instance_86 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_86.setTransform(3057.8,-267.5,1,1,0,0,0,237,153);

	this.instance_87 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_87.setTransform(2586.9,-267.5,1,1,0,0,0,237,153);

	this.instance_88 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_88.setTransform(2114.6,-267.5,1,1,0,0,0,237,153);

	this.instance_89 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_89.setTransform(1642.2,-267.5,1,1,0,0,0,237,153);

	this.instance_90 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_90.setTransform(1169.9,-267.5,1,1,0,0,0,237,153);

	this.instance_91 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_91.setTransform(699,-267.5,1,1,0,0,0,237,153);

	this.instance_92 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_92.setTransform(226.7,-267.5,1,1,0,0,0,237,153);

	// Layer 1
	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.addChild(this.isDispBG,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.8,-583.6,4771.7,1750.7);


(lib.level4Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(3577.5,-446.6,1,1,0,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(3577.5,-302.2,1,1,0,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(3577.5,-159.2,1,1,0,0,0,7,74);

	this.level4Seesaw2 = new lib.level4seesawcopy();
	this.level4Seesaw2.setTransform(3579.1,196.8);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(3577.5,-19.6,1,1,0,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(3577.5,123.4,1,1,0,0,0,7,74);

	this.level4seesaw = new lib.level4seesawcopy();
	this.level4seesaw.setTransform(563.9,713.5);

	this.instance_5 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_5.setTransform(275.1,773.7,1.167,1.167);

	this.instance_6 = new lib.water_hyphen_bottom_dot_png();
	this.instance_6.setTransform(3961.3,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_7 = new lib.water_hyphen_bottom_dot_png();
	this.instance_7.setTransform(4437.7,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_8 = new lib.water_hyphen_bottom_dot_png();
	this.instance_8.setTransform(4345.4,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_9 = new lib.water_hyphen_bottom_dot_png();
	this.instance_9.setTransform(4247.8,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_10 = new lib.water_hyphen_bottom_dot_png();
	this.instance_10.setTransform(4151.3,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_11 = new lib.water_hyphen_bottom_dot_png();
	this.instance_11.setTransform(4053.7,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_12 = new lib.water_hyphen_top_dot_png();
	this.instance_12.setTransform(4181.4,1035.8,1,1,0,0,0,49.5,50);

	this.instance_13 = new lib.water_hyphen_top_dot_png();
	this.instance_13.setTransform(4276,1035.8,1,1,0,0,0,49.5,50);

	this.instance_14 = new lib.water_hyphen_top_dot_png();
	this.instance_14.setTransform(4372.5,1035.8,1,1,0,0,0,49.5,50);

	this.instance_15 = new lib.water_hyphen_top_dot_png();
	this.instance_15.setTransform(4467.1,1035.8,1,1,0,0,0,49.5,50);

	this.instance_16 = new lib.water_hyphen_top_dot_png();
	this.instance_16.setTransform(4088.2,1035.8,1,1,0,0,0,49.5,50);

	this.instance_17 = new lib.water_hyphen_top_dot_png();
	this.instance_17.setTransform(3995.2,1035.8,1,1,0,0,0,49.5,50);

	this.instance_18 = new lib.water_hyphen_bottom_dot_png();
	this.instance_18.setTransform(3478.1,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_19 = new lib.water_hyphen_bottom_dot_png();
	this.instance_19.setTransform(3863.7,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_20 = new lib.water_hyphen_bottom_dot_png();
	this.instance_20.setTransform(3767.2,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_21 = new lib.water_hyphen_bottom_dot_png();
	this.instance_21.setTransform(3669.6,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_22 = new lib.water_hyphen_bottom_dot_png();
	this.instance_22.setTransform(3575.7,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_23 = new lib.water_hyphen_top_dot_png();
	this.instance_23.setTransform(3625.1,1035.8,1,1,0,0,0,49.5,50);

	this.instance_24 = new lib.water_hyphen_top_dot_png();
	this.instance_24.setTransform(3719.7,1035.8,1,1,0,0,0,49.5,50);

	this.instance_25 = new lib.water_hyphen_top_dot_png();
	this.instance_25.setTransform(3816.2,1035.8,1,1,0,0,0,49.5,50);

	this.instance_26 = new lib.water_hyphen_top_dot_png();
	this.instance_26.setTransform(3910.8,1035.8,1,1,0,0,0,49.5,50);

	this.instance_27 = new lib.water_hyphen_top_dot_png();
	this.instance_27.setTransform(3531.9,1035.8,1,1,0,0,0,49.5,50);

	this.instance_28 = new lib.water_hyphen_bottom_dot_png();
	this.instance_28.setTransform(2993.4,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_29 = new lib.water_hyphen_bottom_dot_png();
	this.instance_29.setTransform(3381.6,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_30 = new lib.water_hyphen_bottom_dot_png();
	this.instance_30.setTransform(3284,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_31 = new lib.water_hyphen_bottom_dot_png();
	this.instance_31.setTransform(3187.5,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_32 = new lib.water_hyphen_bottom_dot_png();
	this.instance_32.setTransform(3089.9,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_33 = new lib.water_hyphen_top_dot_png();
	this.instance_33.setTransform(3153.1,1035.8,1,1,0,0,0,49.5,50);

	this.instance_34 = new lib.water_hyphen_top_dot_png();
	this.instance_34.setTransform(3247.7,1035.8,1,1,0,0,0,49.5,50);

	this.instance_35 = new lib.water_hyphen_top_dot_png();
	this.instance_35.setTransform(3344.2,1035.8,1,1,0,0,0,49.5,50);

	this.instance_36 = new lib.water_hyphen_top_dot_png();
	this.instance_36.setTransform(3438.8,1035.8,1,1,0,0,0,49.5,50);

	this.instance_37 = new lib.water_hyphen_top_dot_png();
	this.instance_37.setTransform(3059.9,1035.8,1,1,0,0,0,49.5,50);

	this.instance_38 = new lib.water_hyphen_bottom_dot_png();
	this.instance_38.setTransform(2508.7,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_39 = new lib.water_hyphen_bottom_dot_png();
	this.instance_39.setTransform(2895.8,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_40 = new lib.water_hyphen_bottom_dot_png();
	this.instance_40.setTransform(2800.4,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_41 = new lib.water_hyphen_bottom_dot_png();
	this.instance_41.setTransform(2702.8,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_42 = new lib.water_hyphen_bottom_dot_png();
	this.instance_42.setTransform(2606.3,1117.5,1,1,0,0,0,49.5,49.5);

	this.instance_43 = new lib.water_hyphen_top_dot_png();
	this.instance_43.setTransform(2682.4,1035.8,1,1,0,0,0,49.5,50);

	this.instance_44 = new lib.water_hyphen_top_dot_png();
	this.instance_44.setTransform(2777,1035.8,1,1,0,0,0,49.5,50);

	this.instance_45 = new lib.water_hyphen_top_dot_png();
	this.instance_45.setTransform(2873.5,1035.8,1,1,0,0,0,49.5,50);

	this.instance_46 = new lib.water_hyphen_top_dot_png();
	this.instance_46.setTransform(2968.1,1035.8,1,1,0,0,0,49.5,50);

	this.instance_47 = new lib.water_hyphen_top_dot_png();
	this.instance_47.setTransform(2589.2,1035.8,1,1,0,0,0,49.5,50);

	this.instance_48 = new lib.water_hyphen_bottom_dot_png();
	this.instance_48.setTransform(1737.5,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_49 = new lib.water_hyphen_bottom_dot_png();
	this.instance_49.setTransform(2029.2,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_50 = new lib.water_hyphen_bottom_dot_png();
	this.instance_50.setTransform(1931.6,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_51 = new lib.water_hyphen_bottom_dot_png();
	this.instance_51.setTransform(1835.1,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_52 = new lib.water_hyphen_top_dot_png();
	this.instance_52.setTransform(1737.5,1035.8,1,1,0,0,0,49.5,50);

	this.instance_53 = new lib.water_hyphen_top_dot_png();
	this.instance_53.setTransform(1832.1,1035.8,1,1,0,0,0,49.5,50);

	this.instance_54 = new lib.water_hyphen_top_dot_png();
	this.instance_54.setTransform(1928.6,1035.8,1,1,0,0,0,49.5,50);

	this.instance_55 = new lib.water_hyphen_top_dot_png();
	this.instance_55.setTransform(2023.2,1035.8,1,1,0,0,0,49.5,50);

	this.instance_56 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_56.setTransform(1197.8,881.9,1.167,1.167);

	this.instance_57 = new lib.water_hyphen_bottom_dot_png();
	this.instance_57.setTransform(1355.6,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_58 = new lib.water_hyphen_top_dot_png();
	this.instance_58.setTransform(1358.6,1035.8,1,1,0,0,0,49.5,50);

	this.instance_59 = new lib.water_hyphen_bottom_dot_png();
	this.instance_59.setTransform(1647.3,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_60 = new lib.water_hyphen_bottom_dot_png();
	this.instance_60.setTransform(1549.7,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_61 = new lib.water_hyphen_bottom_dot_png();
	this.instance_61.setTransform(1453.2,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_62 = new lib.water_hyphen_top_dot_png();
	this.instance_62.setTransform(1453.2,1035.8,1,1,0,0,0,49.5,50);

	this.instance_63 = new lib.water_hyphen_top_dot_png();
	this.instance_63.setTransform(1549.7,1035.8,1,1,0,0,0,49.5,50);

	this.instance_64 = new lib.water_hyphen_top_dot_png();
	this.instance_64.setTransform(1644.3,1035.8,1,1,0,0,0,49.5,50);

	this.instance_65 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_65.setTransform(1742.9,873.3,0.694,0.709,0,0,0,86.5,181.5);

	this.instance_66 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_66.setTransform(1700.4,873.8,0.694,0.709,0,0,0,86.5,181.5);

	this.instance_67 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_67.setTransform(1602,873.8,0.694,0.709,0,0,0,86.5,181.5);

	this.instance_68 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_68.setTransform(1503.7,873.3,0.694,0.709,0,0,0,86.5,181.5);

	this.instance_69 = new lib.water_hyphen_bottom_dot_png();
	this.instance_69.setTransform(2413.8,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_70 = new lib.water_hyphen_bottom_dot_png();
	this.instance_70.setTransform(2316.2,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_71 = new lib.water_hyphen_bottom_dot_png();
	this.instance_71.setTransform(2219.7,1117.6,1,1,0,0,0,49.5,49.5);

	this.instance_72 = new lib.water_hyphen_bottom_dot_png();
	this.instance_72.setTransform(2122.1,1117.6,1,1,0,0,0,49.5,49.5);

	this.nate14platform2 = new lib.level4PixiPlatform();
	this.nate14platform2.setTransform(2437.4,812.4);

	this.instance_73 = new lib.leaves1_dot_png();
	this.instance_73.setTransform(2180.3,330,0.71,0.71);

	this.instance_74 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_74.setTransform(2146.1,338.5);

	this.instance_75 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_75.setTransform(2075.5,339.7);

	this.instance_76 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_76.setTransform(1987.4,338.6);

	this.instance_77 = new lib.leaves2_dot_png();
	this.instance_77.setTransform(835.2,983.9,1,1,0,0,0,22,20);

	this.instance_78 = new lib.dirt1_dot_png();
	this.instance_78.setTransform(1639.7,746.9);

	this.instance_79 = new lib.moss_dot_png();
	this.instance_79.setTransform(184.6,793.4,0.385,0.385,-109.5);

	this.instance_80 = new lib.leaves2_dot_png();
	this.instance_80.setTransform(30.6,527.6,0.485,0.485);

	this.instance_81 = new lib.leaves2_dot_png();
	this.instance_81.setTransform(18.5,497,0.783,0.783);

	this.instance_82 = new lib.leaves1_dot_png();
	this.instance_82.setTransform(1151.1,1079);

	this.instance_83 = new lib.leaves2_dot_png();
	this.instance_83.setTransform(1165.5,1035.9,1.47,1.47);

	this.instance_84 = new lib.moss_dot_png();
	this.instance_84.setTransform(1272.6,847.6,1,1,178,0,0,40.5,27.6);

	this.instance_85 = new lib.moss_dot_png();
	this.instance_85.setTransform(993.4,690.1);

	this.instance_86 = new lib.moss_dot_png();
	this.instance_86.setTransform(630.3,847.7,0.567,0.567,-147.2);

	this.instance_87 = new lib.moss_dot_png();
	this.instance_87.setTransform(655.9,826.5,0.567,0.567);

	this.instance_88 = new lib.moss_dot_png();
	this.instance_88.setTransform(186.5,1009.6,1.817,1.817);

	this.instance_89 = new lib.moss_dot_png();
	this.instance_89.setTransform(668.3,759.6,0.865,0.865,87.2);

	this.instance_90 = new lib.moss_dot_png();
	this.instance_90.setTransform(92.7,541.4);

	this.instance_91 = new lib.dirt1_dot_png();
	this.instance_91.setTransform(1989.8,792.5);

	this.instance_92 = new lib.dirt3_dot_png();
	this.instance_92.setTransform(1685.3,866.6,0.944,0.702);

	this.instance_93 = new lib.dirt4_dot_png();
	this.instance_93.setTransform(1505,795.8);

	this.instance_94 = new lib.dirt4_dot_png();
	this.instance_94.setTransform(1978.2,877.7);

	this.instance_95 = new lib.dirt2_dot_png();
	this.instance_95.setTransform(4162.4,428.8,0.372,0.372,111.3);

	this.instance_96 = new lib.dirt2_dot_png();
	this.instance_96.setTransform(3262.2,711.4,0.372,0.372,111.3);

	this.instance_97 = new lib.dirt2_dot_png();
	this.instance_97.setTransform(2938.8,582.6,0.595,0.595);

	this.instance_98 = new lib.dirt1_dot_png();
	this.instance_98.setTransform(2755.6,825.9,0.408,0.408);

	this.instance_99 = new lib.dirt1_dot_png();
	this.instance_99.setTransform(2656.7,841.9);

	this.instance_100 = new lib.leaves1_dot_png();
	this.instance_100.setTransform(2795.7,289.5);

	this.instance_101 = new lib.leaves1_dot_png();
	this.instance_101.setTransform(3342.7,297.6);

	this.instance_102 = new lib.leaves2_dot_png();
	this.instance_102.setTransform(2964.7,814.5,1.202,1.202);

	this.instance_103 = new lib.leaves_hyphen_sml_dot_png();
	this.instance_103.setTransform(2935.8,827.1,3.729,3.729);

	this.instance_104 = new lib.leaves_hyphen_sml_dot_png();
	this.instance_104.setTransform(2998.3,805.1,1.97,1.97);

	this.instance_105 = new lib.moss_dot_png();
	this.instance_105.setTransform(3325.8,978.2,1.422,1.422,0,0,0,44.7,23.2);

	this.instance_106 = new lib.moss_dot_png();
	this.instance_106.setTransform(2772.8,486.5,1.423,1.423);

	this.instance_107 = new lib.moss_dot_png();
	this.instance_107.setTransform(2712.4,345.6,1,1,94.5);

	this.instance_108 = new lib.moss_dot_png();
	this.instance_108.setTransform(3075.1,303.8);

	this.instance_109 = new lib.dirt1_dot_png();
	this.instance_109.setTransform(4154.3,740.3,0.26,0.26);

	this.instance_110 = new lib.dirt1_dot_png();
	this.instance_110.setTransform(4208,575.3,0.26,0.26);

	this.instance_111 = new lib.dirt4_dot_png();
	this.instance_111.setTransform(3865.8,525.4,1,1,96.5);

	this.instance_112 = new lib.dirt4_dot_png();
	this.instance_112.setTransform(4060.9,775.5);

	this.instance_113 = new lib.leaves2_dot_png();
	this.instance_113.setTransform(3805.8,311.3,0.905,0.905);

	this.instance_114 = new lib.leaves1_dot_png();
	this.instance_114.setTransform(4198.4,308.8,1.521,1.521);

	this.instance_115 = new lib.dirt3_dot_png();
	this.instance_115.setTransform(4034.5,745.1,1,1,0,0,0,55,88);

	this.instance_116 = new lib.dirt4_dot_png();
	this.instance_116.setTransform(4056.7,379.6,1.381,1.381);

	this.instance_117 = new lib.dirt4_dot_png();
	this.instance_117.setTransform(3863,410.1);

	this.instance_118 = new lib.dirt2_dot_png();
	this.instance_118.setTransform(4011.1,899.3);

	this.instance_119 = new lib.dirt1_dot_png();
	this.instance_119.setTransform(4400.9,929.1,1,1,170.3);

	this.instance_120 = new lib.dirt1_dot_png();
	this.instance_120.setTransform(3813.5,811.8);

	this.instance_121 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_121.setTransform(4380.2,841.4,1,1,0,0,0,53,60);

	this.instance_122 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_122.setTransform(4200.8,781.5);

	this.instance_123 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_123.setTransform(4093.3,781.5);

	this.instance_124 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_124.setTransform(3982,780.9);

	this.instance_125 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_125.setTransform(3863.8,780.9);

	this.instance_126 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_126.setTransform(3760.5,781.5);

	this.instance_127 = new lib.ground_hyphen_left_dot_png();
	this.instance_127.setTransform(3760.3,564);

	this.instance_128 = new lib.ground_hyphen_left_dot_png();
	this.instance_128.setTransform(3761.5,446.5);

	this.instance_129 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_129.setTransform(4329,332.7);

	this.instance_130 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_130.setTransform(4214.6,333.9);

	this.instance_131 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_131.setTransform(4099,333.9);

	this.instance_132 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_132.setTransform(3983.3,333.3);

	this.instance_133 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_133.setTransform(3867.7,333.3);

	this.instance_134 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_134.setTransform(3749.6,332.7);

	this.instance_135 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_135.setTransform(3331.5,316.3,1,1,0,0,0,50.5,21);

	this.instance_136 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_136.setTransform(3020.5,296);

	this.instance_137 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_137.setTransform(2620.9,295.3);

	this.instance_138 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_138.setTransform(2744.7,296);

	this.instance_139 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_139.setTransform(3005,855.3);

	this.instance_140 = new lib.wall_hyphen_left_dot_png();
	this.instance_140.setTransform(2603.6,855.9);

	this.instance_141 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_141.setTransform(2731.2,855.9);

	this.instance_142 = new lib.wall_hyphen_right_dot_png();
	this.instance_142.setTransform(3329.4,900.2,1,1,0,0,0,51.5,45);

	this.instance_143 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_143.setTransform(3004.4,769);

	this.instance_144 = new lib.wall_hyphen_left_dot_png();
	this.instance_144.setTransform(2603,769.6);

	this.instance_145 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_145.setTransform(2730.6,769.6);

	this.instance_146 = new lib.wall_hyphen_right_dot_png();
	this.instance_146.setTransform(3328.8,813.9,1,1,0,0,0,51.5,45);

	this.instance_147 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_147.setTransform(3005.7,682.8);

	this.instance_148 = new lib.wall_hyphen_left_dot_png();
	this.instance_148.setTransform(2604.2,683.4);

	this.instance_149 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_149.setTransform(2731.8,683.4);

	this.instance_150 = new lib.wall_hyphen_right_dot_png();
	this.instance_150.setTransform(3330,727.6,1,1,0,0,0,51.5,45);

	this.instance_151 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_151.setTransform(3005,595.3);

	this.instance_152 = new lib.wall_hyphen_left_dot_png();
	this.instance_152.setTransform(2603.6,595.9);

	this.instance_153 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_153.setTransform(2731.2,595.9);

	this.instance_154 = new lib.wall_hyphen_right_dot_png();
	this.instance_154.setTransform(3329.4,640.1,1,1,0,0,0,51.5,45);

	this.instance_155 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_155.setTransform(3006.3,509);

	this.instance_156 = new lib.wall_hyphen_left_dot_png();
	this.instance_156.setTransform(2604.8,509.6);

	this.instance_157 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_157.setTransform(2732.4,509.6);

	this.instance_158 = new lib.wall_hyphen_right_dot_png();
	this.instance_158.setTransform(3330.6,553.9,1,1,0,0,0,51.5,45);

	this.instance_159 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_159.setTransform(3006.2,420.9);

	this.instance_160 = new lib.wall_hyphen_left_dot_png();
	this.instance_160.setTransform(2604.8,421.5);

	this.instance_161 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_161.setTransform(2732.4,421.5);

	this.instance_162 = new lib.wall_hyphen_right_dot_png();
	this.instance_162.setTransform(3330.6,465.7,1,1,0,0,0,51.5,45);

	this.instance_163 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_163.setTransform(3007.5,334.6);

	this.instance_164 = new lib.wall_hyphen_left_dot_png();
	this.instance_164.setTransform(2606,335.2);

	this.instance_165 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_165.setTransform(1195.9,774.9,1.167,1.167);

	this.instance_166 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_166.setTransform(1219.7,771.7);

	this.instance_167 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_167.setTransform(1020.9,886.2,1.167,1.167);

	this.instance_168 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_168.setTransform(948.3,881.2,1.167,1.167);

	this.instance_169 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_169.setTransform(946.4,774.3,1.167,1.167);

	this.instance_170 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_170.setTransform(935.7,597.9);

	this.instance_171 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_171.setTransform(826.9,596.7);

	this.instance_172 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_172.setTransform(727.7,881.9,1.167,1.167);

	this.instance_173 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_173.setTransform(721.4,775.5,1.167,1.167);

	this.instance_174 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_174.setTransform(627.7,877.5,1.167,1.167);

	this.instance_175 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_175.setTransform(625.8,770.6,1.167,1.167);

	this.instance_176 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_176.setTransform(559.5,883.1,1.167,1.167);

	this.instance_177 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_177.setTransform(557.6,776.2,1.167,1.167);

	this.instance_178 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_178.setTransform(478.3,881.3,1.167,1.167);

	this.instance_179 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_179.setTransform(476.4,774.3,1.167,1.167);

	this.instance_180 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_180.setTransform(379.5,879.4,1.167,1.167);

	this.instance_181 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_181.setTransform(377.6,772.5,1.167,1.167);

	this.instance_182 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_182.setTransform(277,880.7,1.167,1.167);

	this.instance_183 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_183.setTransform(174.5,881.3,1.167,1.167);

	this.instance_184 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_184.setTransform(172.6,774.3,1.167,1.167);

	this.instance_185 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_185.setTransform(534,767.3);

	this.instance_186 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_186.setTransform(499.6,767.3);

	this.instance_187 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_187.setTransform(191.4,767.3);

	this.instance_188 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_188.setTransform(-17.5,880,1.167,1.167);

	this.instance_189 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_189.setTransform(-15,668.7,1.167,1.167);

	this.instance_190 = new lib.wall_hyphen_right_dot_png();
	this.instance_190.setTransform(92.4,690.8);

	this.instance_191 = new lib.wall_hyphen_right_dot_png();
	this.instance_191.setTransform(145.1,717,1,1,0,0,0,51.5,45);

	this.instance_192 = new lib.wall_hyphen_right_dot_png();
	this.instance_192.setTransform(93.6,586.4);

	this.instance_193 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_193.setTransform(-59.9,293.3);

	this.instance_194 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_194.setTransform(25.7,292.7);

	this.instance_195 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_195.setTransform(92.6,293.4);

	this.instance_196 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_196.setTransform(1944.2,744,0.694,0.709);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_197 = new lib.wall_hyphen_right_dot_png();
	this.instance_197.setTransform(92.9,498.3);

	this.instance_198 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_198.setTransform(-16.2,468.1,1.167,1.167);

	this.instance_199 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_199.setTransform(71.3,748.1,1.167,1.167);

	this.instance_200 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_200.setTransform(69.4,880,1.167,1.167);

	this.instance_201 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_201.setTransform(835.8,881.2,1.167,1.167);

	this.instance_202 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_202.setTransform(833.9,774.3,1.167,1.167);

	this.instance_203 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_203.setTransform(960.9,771);

	this.instance_204 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_204.setTransform(1109,885,1.167,1.167);

	this.instance_205 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_205.setTransform(1107.1,778,1.167,1.167);

	this.instance_206 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_206.setTransform(1019,779.3,1.167,1.167);

	this.instance_207 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_207.setTransform(2733.6,335.2);

	this.instance_208 = new lib.wall_hyphen_right_dot_png();
	this.instance_208.setTransform(3331.8,379.5,1,1,0,0,0,51.5,45);

	this.instance_209 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_209.setTransform(3007.5,909.7);

	this.instance_210 = new lib.wall_hyphen_left_dot_png();
	this.instance_210.setTransform(2606.1,910.3);

	this.instance_211 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_211.setTransform(2733.7,910.3);

	this.instance_212 = new lib.wall_hyphen_right_dot_png();
	this.instance_212.setTransform(3331.9,954.6,1,1,0,0,0,51.5,45);

	this.instance_213 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_213.setTransform(4207.8,446.4);

	this.instance_214 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_214.setTransform(4093.4,446.4);

	this.instance_215 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_215.setTransform(3978.4,446.4);

	this.instance_216 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_216.setTransform(3864,445.8);

	this.instance_217 = new lib.ground_hyphen_right_dot_png();
	this.instance_217.setTransform(4326.1,446.2);

	this.instance_218 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_218.setTransform(4206.6,553.3);

	this.instance_219 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_219.setTransform(4092.2,553.3);

	this.instance_220 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_220.setTransform(3977.1,553.3);

	this.instance_221 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_221.setTransform(3862.7,552.7);

	this.instance_222 = new lib.ground_hyphen_right_dot_png();
	this.instance_222.setTransform(4326.1,553.9);

	this.instance_223 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_223.setTransform(4207.2,669.6);

	this.instance_224 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_224.setTransform(4092.8,669.6);

	this.instance_225 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_225.setTransform(3977.8,669.6);

	this.instance_226 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_226.setTransform(3863.4,669);

	this.instance_227 = new lib.ground_hyphen_right_dot_png();
	this.instance_227.setTransform(4326.7,670.2);

	this.instance_228 = new lib.ground_hyphen_left_dot_png();
	this.instance_228.setTransform(3760.3,669.6);

	this.instance_229 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_229.setTransform(4380.2,935.2,1,1,0,0,0,53,60);

	this.instance_230 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_230.setTransform(4200.9,875.3);

	this.instance_231 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_231.setTransform(4093.3,875.3);

	this.instance_232 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_232.setTransform(3982.1,874.7);

	this.instance_233 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_233.setTransform(3863.9,874.7);

	this.instance_234 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_234.setTransform(3760.5,875.3);

	this.instance_235 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_235.setTransform(4380.8,944.9,1,1,0,0,0,53,60);

	this.instance_236 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_236.setTransform(4201.4,885);

	this.instance_237 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_237.setTransform(4093.9,885);

	this.instance_238 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_238.setTransform(3982.6,884.4);

	this.instance_239 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_239.setTransform(3864.4,884.4);

	this.instance_240 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_240.setTransform(3761.1,885);

	this.instance_241 = new lib.leaves2_dot_png();
	this.instance_241.setTransform(1539.5,728.2,0.717,0.717);

	this.instance_242 = new lib.leaves1_dot_png();
	this.instance_242.setTransform(2226,730.4,0.75,0.75);

	this.instance_243 = new lib.moss_dot_png();
	this.instance_243.setTransform(128.2,334.1,1,1,175.6);

	this.instance_244 = new lib.moss_dot_png();
	this.instance_244.setTransform(720.7,825,1.525,1.525,179.6);

	this.instance_245 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_245.setTransform(4232.3,553.3);

	this.instance_246 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_246.setTransform(4242.8,782.8);

	this.instance_247 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_247.setTransform(4240.3,877.2);

	this.instance_248 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_248.setTransform(4227.7,883.6);

	this.instance_249 = new lib.water_hyphen_top_dot_png();
	this.instance_249.setTransform(2207,1035.8,1,1,0,0,0,49.5,50);

	this.instance_250 = new lib.water_hyphen_top_dot_png();
	this.instance_250.setTransform(2301.6,1035.8,1,1,0,0,0,49.5,50);

	this.instance_251 = new lib.water_hyphen_top_dot_png();
	this.instance_251.setTransform(2398.1,1035.8,1,1,0,0,0,49.5,50);

	this.instance_252 = new lib.water_hyphen_top_dot_png();
	this.instance_252.setTransform(2492.7,1035.8,1,1,0,0,0,49.5,50);

	this.instance_253 = new lib.water_hyphen_top_dot_png();
	this.instance_253.setTransform(2113.8,1035.8,1,1,0,0,0,49.5,50);

	this.instance_254 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_254.setTransform(2208.8,969.6,0.694,0.709,0,0,0,104.5,317.7);

	this.instance_255 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_255.setTransform(2042.5,744.5,0.694,0.709);

	this.instance_256 = new lib.saw_hyphen_horse_dot_png();
	this.instance_256.setTransform(566.4,744.6,0.405,0.405,0,0,0,93,94.5);

	this.instance_257 = new lib.hazardsign_dot_png();
	this.instance_257.setTransform(3554.2,933.9,0.8,0.8,0,0,0,51,46);

	this.instance_258 = new lib.endpole_dot_png();
	this.instance_258.setTransform(3556.2,990.6,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_259 = new lib.hazardsign_dot_png();
	this.instance_259.setTransform(2424.5,933.9,0.8,0.8,0,0,0,51,46);

	this.instance_260 = new lib.endpole_dot_png();
	this.instance_260.setTransform(2426.5,990.6,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_261 = new lib.hazardsign_dot_png();
	this.instance_261.setTransform(1387.2,933.9,0.8,0.8,0,0,0,51,46);

	this.instance_262 = new lib.endpole_dot_png();
	this.instance_262.setTransform(1389.2,990.6,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_263 = new lib.hazardsign_dot_png();
	this.instance_263.setTransform(1877.1,933.9,0.8,0.8,0,0,0,51,46);

	this.instance_264 = new lib.endpole_dot_png();
	this.instance_264.setTransform(1879.1,990.6,0.873,0.873,0,0,0,8.1,39.5);

	this.addChild(this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.isDisp,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.nate14platform2,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.level4seesaw,this.instance_4,this.instance_3,this.level4Seesaw2,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-520.6,4576.6,1687.7);


(lib.level3PixiBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(4143.9,328,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(4171,94.4,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(4143.5,181.6,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(4143.8,249.5,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(4144,406.4,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_5.setTransform(-220.9,1019.2,1,1,0,0,0,237,152.5);

	this.instance_6 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_6.setTransform(-220.9,804.8,1,1,0,0,0,237,152.5);

	this.instance_7 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_7.setTransform(-220.9,508.4,1,1,0,0,0,237,152.5);

	this.instance_8 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_8.setTransform(-220.9,210.7,1,1,0,0,0,237,152.5);

	this.instance_9 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_9.setTransform(-220.9,-93.2,1,1,0,0,0,237,153);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(-262.6,-11.5,1,1,0,0,0,5,3.5);

	this.instance_10 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_10.setTransform(2700.8,-304.7,0.618,0.618,0,0,0,14,211);

	this.instance_11 = new lib.crane_swith_only_dot_png();
	this.instance_11.setTransform(2700.8,60.8,0.585,0.585,0,0,0,38.5,69.5);

	this.instance_12 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_12.setTransform(2700.8,-48.9,0.618,0.618,0,0,0,14,211);

	this.instance_13 = new lib.crane_swith_only_dot_png();
	this.instance_13.setTransform(185.7,88.2,0.853,0.853,0,0,0,38.5,69.5);

	this.instance_14 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_14.setTransform(186.2,-129.3,0.779,0.779,0,0,0,14,211.1);

	this.instance_15 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_15.setTransform(4497.6,1019.2,1.05,1,0,0,0,237,152.5);

	this.instance_16 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_16.setTransform(4015.2,1019.2,1,1,0,0,0,237,152.5);

	this.instance_17 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_17.setTransform(3545.2,1019.2,1,1,0,0,0,237,152.5);

	this.instance_18 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_18.setTransform(3074.4,1019.2,1,1,0,0,0,237,152.5);

	this.instance_19 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_19.setTransform(2602.6,1019.2,1,1,0,0,0,237,152.5);

	this.instance_20 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_20.setTransform(2132.6,1019.2,1,1,0,0,0,237,152.5);

	this.instance_21 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_21.setTransform(1661.8,1019.2,1,1,0,0,0,237,152.5);

	this.instance_22 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_22.setTransform(1190.9,1019.2,1,1,0,0,0,237,152.5);

	this.instance_23 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_23.setTransform(720.9,1019.2,1,1,0,0,0,237,152.5);

	this.instance_24 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_24.setTransform(250.1,1019.2,1,1,0,0,0,237,152.5);

	this.instance_25 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_25.setTransform(4497.6,804.8,1.05,1,0,0,0,237,152.5);

	this.instance_26 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_26.setTransform(4015.2,804.8,1,1,0,0,0,237,152.5);

	this.instance_27 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_27.setTransform(3545.2,804.8,1,1,0,0,0,237,152.5);

	this.instance_28 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_28.setTransform(3074.4,804.8,1,1,0,0,0,237,152.5);

	this.instance_29 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_29.setTransform(2602.6,804.8,1,1,0,0,0,237,152.5);

	this.instance_30 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_30.setTransform(2132.6,804.8,1,1,0,0,0,237,152.5);

	this.instance_31 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_31.setTransform(1661.8,804.8,1,1,0,0,0,237,152.5);

	this.instance_32 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_32.setTransform(1190.9,804.8,1,1,0,0,0,237,152.5);

	this.instance_33 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_33.setTransform(720.9,804.8,1,1,0,0,0,237,152.5);

	this.instance_34 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_34.setTransform(250.1,804.8,1,1,0,0,0,237,152.5);

	this.instance_35 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_35.setTransform(4497.6,508.4,1.05,1,0,0,0,237,152.5);

	this.instance_36 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_36.setTransform(4015.2,508.4,1,1,0,0,0,237,152.5);

	this.instance_37 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_37.setTransform(3545.2,508.4,1,1,0,0,0,237,152.5);

	this.instance_38 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_38.setTransform(3074.4,508.4,1,1,0,0,0,237,152.5);

	this.instance_39 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_39.setTransform(2602.6,506.5,1,1,0,0,0,237,152.5);

	this.instance_40 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_40.setTransform(2132.6,508.4,1,1,0,0,0,237,152.5);

	this.instance_41 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_41.setTransform(1661.8,508.4,1,1,0,0,0,237,152.5);

	this.instance_42 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_42.setTransform(1190.9,508.4,1,1,0,0,0,237,152.5);

	this.instance_43 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_43.setTransform(720.9,508.4,1,1,0,0,0,237,152.5);

	this.instance_44 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_44.setTransform(250.1,508.4,1,1,0,0,0,237,152.5);

	this.instance_45 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_45.setTransform(4497.6,210.7,1.05,1,0,0,0,237,152.5);

	this.instance_46 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_46.setTransform(4015.2,210.7,1,1,0,0,0,237,152.5);

	this.instance_47 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(3545.2,210.7,1,1,0,0,0,237,152.5);

	this.instance_48 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_48.setTransform(3074.4,210.7,1,1,0,0,0,237,152.5);

	this.instance_49 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_49.setTransform(2602.6,210.7,1,1,0,0,0,237,152.5);

	this.instance_50 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_50.setTransform(2132.6,210.7,1,1,0,0,0,237,152.5);

	this.instance_51 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_51.setTransform(1661.8,210.7,1,1,0,0,0,237,152.5);

	this.instance_52 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_52.setTransform(1190.9,210.7,1,1,0,0,0,237,152.5);

	this.instance_53 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_53.setTransform(720.9,210.7,1,1,0,0,0,237,152.5);

	this.instance_54 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_54.setTransform(250.1,209.8,1,1,0,0,0,237,152.5);

	this.instance_55 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_55.setTransform(4493.8,-93.2,1.034,1,0,0,0,237,153);

	this.instance_56 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_56.setTransform(4016.1,-93.2,1,1,0,0,0,237,153);

	this.instance_57 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_57.setTransform(3545.2,-93.2,1,1,0,0,0,237,153);

	this.instance_58 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_58.setTransform(3074.4,-93.2,1,1,0,0,0,237,153);

	this.instance_59 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_59.setTransform(2603.5,-93.2,1,1,0,0,0,237,153);

	this.instance_60 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_60.setTransform(2132.6,-93.2,1,1,0,0,0,237,153);

	this.instance_61 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_61.setTransform(1661.8,-93.2,1,1,0,0,0,237,153);

	this.instance_62 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_62.setTransform(1190.9,-93.2,1,1,0,0,0,237,153);

	this.instance_63 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_63.setTransform(720.9,-93.2,1,1,0,0,0,237,153);

	this.instance_64 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_64.setTransform(250.1,-93.2,1,1,0,0,0,237,153);

	this.isDispBG_1 = new lib.physHold();
	this.isDispBG_1.setTransform(211.4,-11.5,1,1,0,0,0,5,3.5);

	this.addChild(this.isDispBG_1,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.isDispBG,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-457.9,-435,5204.4,1690.9);


(lib.level3movingwheel = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.metal_hyphen_join3_dot_png();
	this.instance.setTransform(0.8,-3.8,0.638,0.638,0,0,0,43.5,34.5);

	this.instance_1 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_1.setTransform(1.1,0.3,0.707,0.723,-90,0,0,284.9,9);

	this.instance_2 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_2.setTransform(-0.2,-0.4,0.707,0.723,-45,0,0,284.9,8.9);

	this.instance_3 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_3.setTransform(-0.1,-0.6,0.707,0.723,45,0,0,284.9,8.9);

	this.isMovingItem = new lib.plank_hyphen_repeat_dot_png();
	this.isMovingItem.setTransform(-0.1,-1,0.707,0.723,0,0,0,284.9,9);

	this.instance_4 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_4.setTransform(-138.6,-61.5,0.207,0.244,-70.3,0,0,284.7,8.8);

	this.instance_5 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_5.setTransform(-138.1,56.1,0.207,0.244,-111,0,0,284.8,8.6);

	this.instance_6 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_6.setTransform(-59.2,137.1,0.207,0.244,-159,0,0,285.1,8.6);

	this.instance_7 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_7.setTransform(56.1,136.3,0.207,0.244,156.6,0,0,285.4,8.6);

	this.instance_8 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_8.setTransform(137.2,54.7,0.207,0.244,112.8,0,0,285.7,8.8);

	this.instance_9 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_9.setTransform(139.2,-61.6,0.207,0.244,70.2,0,0,285.9,8.7);

	this.instance_10 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_10.setTransform(57.5,-141.4,0.207,0.244,20.4,0,0,286.2,8.6);

	this.instance_11 = new lib.plank_hyphen_repeat_dot_png();
	this.instance_11.setTransform(-59.7,-141.1,0.207,0.244,-21,0,0,286,8.6);

	this.addChild(this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.isMovingItem,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-201.6,-201.4,403.3,403.3);


(lib.level3movingplatform = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(138.4,-701.5,0.764,0.764,0.5,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(137.6,-588.7,0.764,0.764,0.5,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(136.4,-476.2,0.764,0.764,0.5,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(135.6,-363.4,0.764,0.764,0.5,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(134.8,-250.6,0.764,0.764,0.5,0,0,7,74);

	this.isMovingItem = new lib.woodencrate_dot_png();
	this.isMovingItem.setTransform(135,36.1,0.577,0.368,0,0,0,234.1,98);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(102,-38.4,0.764,0.764,35.7,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(164.7,-39.6,0.764,0.764,144.3,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(134,-137.8,0.764,0.764,0.5,0,0,7,74);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.isMovingItem,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-758.1,269.9,830.4);


(lib.level2PixiBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.moss_dot_png();
	this.instance.setTransform(1961.2,652.6,0.669,0.669,-176.7,0,0,40.6,27.4);

	this.instance_1 = new lib.moss_dot_png();
	this.instance_1.setTransform(2046.8,645.4,0.669,0.669,0,0,0,40.5,27.5);

	this.instance_2 = new lib.leaves2_dot_png();
	this.instance_2.setTransform(571.1,2385.7,0.923,0.923,0,0,0,22,20);

	this.instance_3 = new lib.leaves2_dot_png();
	this.instance_3.setTransform(240,579.5,1,1,0,0,0,22,20);

	this.instance_4 = new lib.moss_dot_png();
	this.instance_4.setTransform(415.6,452.7,0.895,0.895,-164.8,0,0,40.5,27.4);

	this.instance_5 = new lib.leaves1_dot_png();
	this.instance_5.setTransform(1853.1,1576.8,1,1,0,0,0,18.5,15);

	this.instance_6 = new lib.moss_dot_png();
	this.instance_6.setTransform(2043.7,1723.5,1,1,0,0,0,40.5,27.5);

	this.instance_7 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_7.setTransform(1850.6,2711.4,1,1,0,0,0,94.5,74.5);

	this.instance_8 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_8.setTransform(2028.2,3221.7,1,1,0,0,0,94.5,74.5);

	this.instance_9 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_9.setTransform(2049.5,2907.9,1,1,0,0,0,94.5,74.5);

	this.instance_10 = new lib.outsidebarn_hyphen_window2_dot_png();
	this.instance_10.setTransform(1977.3,1467.4,2.157,2.157,0,0,0,95,70.2);

	this.instance_11 = new lib.outsidebarn_hyphen_window1_dot_png();
	this.instance_11.setTransform(1985.9,542.2,1.983,1.983,0,0,0,99,72.5);

	this.instance_12 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_12.setTransform(533.4,3291.8,1,1,0,0,0,94.5,74.5);

	this.instance_13 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_13.setTransform(858.4,3291.8,1,1,0,0,0,94.5,74.5);

	this.instance_14 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_14.setTransform(1207.9,3291.8,1,1,0,0,0,94.5,74.5);

	this.instance_15 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_15.setTransform(1549.4,3291.8,1,1,0,0,0,94.5,74.5);

	this.instance_16 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_16.setTransform(1729.8,3250.5,1,1,0,0,0,94.5,74.5);

	this.instance_17 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_17.setTransform(171.4,3291.8,1,1,0,0,0,94.5,74.5);

	this.instance_18 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_18.setTransform(171.4,2962,1,1,0,0,0,94.5,74.5);

	this.instance_19 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_19.setTransform(533.4,2962,1,1,0,0,0,94.5,74.5);

	this.instance_20 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_20.setTransform(854.3,2962,1,1,0,0,0,94.5,74.5);

	this.instance_21 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_21.setTransform(1176.6,2962,1,1,0,0,0,94.5,74.5);

	this.instance_22 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_22.setTransform(1700.9,2950.7,1,1,0,0,0,94.5,74.5);

	this.instance_23 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_23.setTransform(420.1,2622,1,1,0,0,0,94.6,74.5);

	this.instance_24 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_24.setTransform(791.8,2623.2,1,1,0,0,0,94.5,74.5);

	this.instance_25 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_25.setTransform(1159.6,2623.2,1,1,0,0,0,94.5,74.5);

	this.instance_26 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_26.setTransform(1533.9,2623.2,1,1,0,0,0,94.5,74.5);

	this.instance_27 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_27.setTransform(1724.8,2523.6,1,1,0,0,0,94.5,74.5);

	this.instance_28 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_28.setTransform(2343.3,2562,1,1,0,0,0,94.5,74.5);

	this.instance_29 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_29.setTransform(171.4,2622,1,1,0,0,0,94.5,74.5);

	this.instance_30 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_30.setTransform(533.4,2237.8,1,1,0,0,0,94.5,74.5);

	this.instance_31 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_31.setTransform(881.7,2237.8,1,1,0,0,0,94.5,74.5);

	this.instance_32 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_32.setTransform(1240,2237.8,1,1,0,0,0,94.5,74.5);

	this.instance_33 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_33.setTransform(1589.4,2237.8,1,1,0,0,0,94.5,74.5);

	this.instance_34 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_34.setTransform(2282.3,2237.8,1,1,0,0,0,94.5,74.5);

	this.instance_35 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_35.setTransform(171.4,2237.8,1,1,0,0,0,94.5,74.5);

	this.instance_36 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_36.setTransform(2400,46.1,1,1,0,0,0,94.5,94);

	this.instance_37 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_37.setTransform(2400,400.9,1,1,0,0,0,94.5,74.5);

	this.instance_38 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_38.setTransform(171.4,1150.1,1,1,0,0,0,94.5,74.5);

	this.instance_39 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_39.setTransform(158.9,46.1,1,1,0,0,0,94.5,94);

	this.instance_40 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_40.setTransform(404.3,44.8,1,1,0,0,0,94.5,94);

	this.instance_41 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_41.setTransform(776.6,44.9,1,1,0,0,0,94.5,94);

	this.instance_42 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_42.setTransform(952.5,46.1,1,1,0,0,0,94.5,94);

	this.instance_43 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_43.setTransform(1324.8,46.2,1,1,0,0,0,94.5,94);

	this.instance_44 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_44.setTransform(1700.9,46.1,1,1,0,0,0,94.5,94);

	this.instance_45 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_45.setTransform(2073.3,46.1,1,1,0,0,0,94.5,94);

	this.instance_46 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_46.setTransform(533.4,1871.1,1,1,0,0,0,94.5,74.5);

	this.instance_47 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(881.7,1871.1,1,1,0,0,0,94.5,74.5);

	this.instance_48 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_48.setTransform(1254.3,1871.1,1,1,0,0,0,94.5,74.5);

	this.instance_49 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_49.setTransform(1921.6,1871.1,1,1,0,0,0,94.5,74.5);

	this.instance_50 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_50.setTransform(2282.3,1871.1,1,1,0,0,0,94.5,74.5);

	this.instance_51 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_51.setTransform(171.4,1871.1,1,1,0,0,0,94.5,74.5);

	this.instance_52 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_52.setTransform(552.5,1505.6,1,1,0,0,0,94.5,74.5);

	this.instance_53 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_53.setTransform(2349.4,1505.6,1,1,0,0,0,94.5,74.5);

	this.instance_54 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_54.setTransform(924.8,1505.6,1,1,0,0,0,94.5,74.5);

	this.instance_55 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_55.setTransform(1300.9,1505.6,1,1,0,0,0,94.5,74.5);

	this.instance_56 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_56.setTransform(1531,1279.3,1,1,0,0,0,94.5,74.5);

	this.instance_57 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_57.setTransform(2209.7,1271.8,1,1,0,0,0,94.5,74.5);

	this.instance_58 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_58.setTransform(171.4,1505.6,1,1,0,0,0,94.5,74.5);

	this.instance_59 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_59.setTransform(514.7,1150.1,1,1,0,0,0,94.5,74.5);

	this.instance_60 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_60.setTransform(878,1150.1,1,1,0,0,0,94.5,74.5);

	this.instance_61 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_61.setTransform(1233.9,1150.1,1,1,0,0,0,94.5,74.5);

	this.instance_62 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_62.setTransform(1589.4,1150.1,1,1,0,0,0,94.5,74.5);

	this.instance_63 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_63.setTransform(1949.4,1150.1,1,1,0,0,0,94.5,74.5);

	this.instance_64 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_64.setTransform(2317,1150.1,1,1,0,0,0,94.5,74.5);

	this.instance_65 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_65.setTransform(881.7,400.9,1,1,0,0,0,94.5,74.5);

	this.instance_66 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_66.setTransform(1207.9,400.9,1,1,0,0,0,94.5,74.5);

	this.instance_67 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_67.setTransform(1557.5,400.9,1,1,0,0,0,94.5,74.5);

	this.instance_68 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_68.setTransform(1904.5,400.9,1,1,0,0,0,94.5,74.5);

	this.instance_69 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_69.setTransform(2247.9,400.9,1,1,0,0,0,94.5,74.5);

	this.instance_70 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_70.setTransform(597.5,400.9,1,1,0,0,0,94.5,74.5);

	this.instance_71 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_71.setTransform(902.2,768.4,1,1,0,0,0,94.5,74.5);

	this.instance_72 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_72.setTransform(1281.7,768.4,1,1,0,0,0,94.5,74.5);

	this.instance_73 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_73.setTransform(1654.3,768.4,1,1,0,0,0,94.5,74.5);

	this.instance_74 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_74.setTransform(2033.1,768.4,1,1,0,0,0,94.5,74.5);

	this.instance_75 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_75.setTransform(2400,768.4,1,1,0,0,0,94.5,74.5);

	this.instance_76 = new lib.moss_dot_png();
	this.instance_76.setTransform(71.7,78.7,1,1,0,0,0,40.6,27.4);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_77 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_77.setTransform(533.4,768.4,1,1,0,0,0,94.5,74.5);

	this.instance_78 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_78.setTransform(-135.3,374.8,1,1,0,0,0,94.5,74.5);

	this.instance_79 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_79.setTransform(1945.4,2237.8,1,1,0,0,0,94.5,74.5);

	this.instance_80 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_80.setTransform(1605.4,1871.1,1,1,0,0,0,94.5,74.5);

	this.instance_81 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_81.setTransform(2437.2,3219.4,1,1,0,0,0,94.5,74.5);

	this.instance_82 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_82.setTransform(2433.1,2962,1,1,0,0,0,94.5,74.5);

	this.instance_83 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_83.setTransform(1521.6,2962,1,1,0,0,0,94.5,74.5);

	this.instance_84 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_84.setTransform(158.9,768.4,1,1,0,0,0,94.5,74.5);

	this.instance_85 = new lib.outsidebarn_hyphen_hole1_dot_png();
	this.instance_85.setTransform(335.8,517.5,1.327,1.327,0,0,0,130,76.5);

	this.instance_86 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_86.setTransform(219.7,689.8,1,1,0,0,0,94.5,74.5);

	this.instance_87 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_87.setTransform(237.2,93.3,1,1,0,0,0,94.5,74.5);

	this.instance_88 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_88.setTransform(2055.7,2621.6,1,1,0,0,0,94.5,74.5);

	this.instance_89 = new lib.outsidebarn_hyphen_hole5_dot_png();
	this.instance_89.setTransform(1987.5,1680.2,0.958,0.958,0,0,0,177.5,90);

	this.instance_90 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_90.setTransform(1521.4,1590.6,1,1,0,0,0,94.5,74.5);

	this.instance_91 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_91.setTransform(1917,1831.5,1,1,0,0,0,94.5,74.5);

	this.instance_92 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_92.setTransform(2244.7,1505.6,1,1,0,0,0,94.5,74.5);

	this.instance_93 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_93.setTransform(1982.9,1635.9,1.885,1.885,180,0,0,92.5,15.5);

	this.instance_94 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_94.setTransform(2230.9,3178.1,1,1,0,0,0,94.5,74.5);

	this.instance_95 = new lib.moss_dot_png();
	this.instance_95.setTransform(1941.8,1617.9,1,1,-177.3,0,0,40.5,27.4);

	this.addChild(this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.isDispBG,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-563.2,-94.8,3306,3712.1);


(lib.level2Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance.setTransform(696.8,1862.2,1.231,1,0,0,0,155.5,16.5);

	this.instance_1 = new lib.wall_hyphen_right_dot_png();
	this.instance_1.setTransform(530.5,1813.3,1.052,1,0,0,180,51.5,45);

	this.instance_2 = new lib.moss_dot_png();
	this.instance_2.setTransform(1073.8,1810,0.799,0.799,98.8,0,0,40.6,27.5);

	this.instance_3 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_3.setTransform(1012.1,1856.5,0.948,1,0,0,0,155.6,16.5);

	this.instance_4 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_4.setTransform(576.4,2616.3,0.897,1,0,0,0,155.5,16.5);

	this.instance_5 = new lib.wall_hyphen_right_dot_png();
	this.instance_5.setTransform(462.1,2567.4,1.052,1,0,0,180,51.5,45);

	this.instance_6 = new lib.moss_dot_png();
	this.instance_6.setTransform(704.6,2607.9,0.799,0.799,0,0,0,40.5,27.5);

	this.instance_7 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_7.setTransform(590,2574.8,1,1,0,0,0,155.5,45);

	this.instance_8 = new lib.hazardsign_dot_png();
	this.instance_8.setTransform(1375.2,2986.4,0.8,0.8,0,0,0,51,46);

	this.instance_9 = new lib.hazardsign_dot_png();
	this.instance_9.setTransform(1008.1,2988.2,0.8,0.8,0,0,0,51,46);

	this.instance_10 = new lib.hazardsign_dot_png();
	this.instance_10.setTransform(937.3,2393.2,0.8,0.8,0,0,0,51,46);

	this.instance_11 = new lib.hazardsign_dot_png();
	this.instance_11.setTransform(1062.3,1618.4,0.8,0.8,0,0,0,51,46);

	this.instance_12 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_12.setTransform(2266.6,2896.8,1,1,0,0,0,60.5,60.5);

	this.instance_13 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_13.setTransform(2264.2,3008,1,1,0,0,0,60.5,60.5);

	this.instance_14 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_14.setTransform(2265.4,3238.7,1,1,0,0,0,60,60);

	this.instance_15 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_15.setTransform(2266.6,3330.6,1,1,0,0,0,60,60);

	this.instance_16 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_16.setTransform(2265.4,3127.4,1,1,0,0,0,60.5,60.5);

	this.instance_17 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_17.setTransform(2149.7,2894.9,1,1,0,0,0,60.5,60.5);

	this.instance_18 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_18.setTransform(2147.3,3006.1,1,1,0,0,0,60.5,60.5);

	this.instance_19 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_19.setTransform(2148.5,3236.8,1,1,0,0,0,60,60);

	this.instance_20 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_20.setTransform(2149.7,3328.7,1,1,0,0,0,60,60);

	this.instance_21 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_21.setTransform(2148.5,3125.5,1,1,0,0,0,60.5,60.5);

	this.instance_22 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_22.setTransform(2032.2,2893.6,1,1,0,0,0,60.5,60.5);

	this.instance_23 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_23.setTransform(2029.7,3004.9,1,1,0,0,0,60.5,60.5);

	this.instance_24 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_24.setTransform(2030.9,3235.5,1,1,0,0,0,60,60);

	this.instance_25 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_25.setTransform(2032.2,3327.4,1,1,0,0,0,60,60);

	this.instance_26 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_26.setTransform(2031,3124.3,1,1,0,0,0,60.5,60.5);

	this.instance_27 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_27.setTransform(1915.9,2893,1,1,0,0,0,60.5,60.5);

	this.instance_28 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_28.setTransform(1913.5,3004.3,1,1,0,0,0,60.5,60.5);

	this.instance_29 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_29.setTransform(1914.7,3234.9,1,1,0,0,0,60,60);

	this.instance_30 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_30.setTransform(1915.9,3326.8,1,1,0,0,0,60,60);

	this.instance_31 = new lib.water_hyphen_bottom_dot_png();
	this.instance_31.setTransform(1188.9,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_32 = new lib.water_hyphen_bottom_dot_png();
	this.instance_32.setTransform(1096.3,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_33 = new lib.water_hyphen_bottom_dot_png();
	this.instance_33.setTransform(1003.4,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_34 = new lib.water_hyphen_bottom_dot_png();
	this.instance_34.setTransform(910.8,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_35 = new lib.water_hyphen_bottom_dot_png();
	this.instance_35.setTransform(823.8,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_36 = new lib.water_hyphen_bottom_dot_png();
	this.instance_36.setTransform(731.2,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_37 = new lib.water_hyphen_bottom_dot_png();
	this.instance_37.setTransform(638.3,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_38 = new lib.water_hyphen_bottom_dot_png();
	this.instance_38.setTransform(545.7,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_39 = new lib.water_hyphen_bottom_dot_png();
	this.instance_39.setTransform(454.4,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_40 = new lib.water_hyphen_bottom_dot_png();
	this.instance_40.setTransform(361.8,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_41 = new lib.water_hyphen_bottom_dot_png();
	this.instance_41.setTransform(268.9,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_42 = new lib.water_hyphen_middle_dot_png();
	this.instance_42.setTransform(802.2,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_43 = new lib.water_hyphen_middle_dot_png();
	this.instance_43.setTransform(709.5,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_44 = new lib.water_hyphen_middle_dot_png();
	this.instance_44.setTransform(623,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_45 = new lib.water_hyphen_middle_dot_png();
	this.instance_45.setTransform(530.4,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_46 = new lib.water_hyphen_middle_dot_png();
	this.instance_46.setTransform(448.1,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_47 = new lib.water_hyphen_middle_dot_png();
	this.instance_47.setTransform(355.4,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_48 = new lib.water_hyphen_middle_dot_png();
	this.instance_48.setTransform(268.9,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_49 = new lib.water_hyphen_middle_dot_png();
	this.instance_49.setTransform(1338.9,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_50 = new lib.water_hyphen_middle_dot_png();
	this.instance_50.setTransform(1246.2,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_51 = new lib.water_hyphen_middle_dot_png();
	this.instance_51.setTransform(1163.9,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_52 = new lib.water_hyphen_middle_dot_png();
	this.instance_52.setTransform(1071.3,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_53 = new lib.water_hyphen_middle_dot_png();
	this.instance_53.setTransform(984.8,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_54 = new lib.water_hyphen_middle_dot_png();
	this.instance_54.setTransform(892.1,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_55 = new lib.water_hyphen_middle_dot_png();
	this.instance_55.setTransform(802.2,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_56 = new lib.water_hyphen_middle_dot_png();
	this.instance_56.setTransform(709.5,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_57 = new lib.water_hyphen_middle_dot_png();
	this.instance_57.setTransform(623,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_58 = new lib.water_hyphen_middle_dot_png();
	this.instance_58.setTransform(530.4,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_59 = new lib.water_hyphen_middle_dot_png();
	this.instance_59.setTransform(448.1,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_60 = new lib.water_hyphen_middle_dot_png();
	this.instance_60.setTransform(355.4,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_61 = new lib.water_hyphen_middle_dot_png();
	this.instance_61.setTransform(268.9,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_62 = new lib.water_hyphen_top_dot_png();
	this.instance_62.setTransform(1179.3,3113.6,1,1,0,0,0,49.5,50);

	this.instance_63 = new lib.water_hyphen_top_dot_png();
	this.instance_63.setTransform(1086.5,3113.8,1,1,0,0,0,49.5,50);

	this.instance_64 = new lib.water_hyphen_top_dot_png();
	this.instance_64.setTransform(994,3114,1,1,0,0,0,49.5,50);

	this.instance_65 = new lib.water_hyphen_top_dot_png();
	this.instance_65.setTransform(901.2,3114.2,1,1,0,0,0,49.5,50);

	this.instance_66 = new lib.water_hyphen_top_dot_png();
	this.instance_66.setTransform(816.6,3114.2,1,1,0,0,0,49.5,50);

	this.instance_67 = new lib.water_hyphen_top_dot_png();
	this.instance_67.setTransform(723.8,3114.4,1,1,0,0,0,49.5,50);

	this.instance_68 = new lib.water_hyphen_top_dot_png();
	this.instance_68.setTransform(631.3,3114.6,1,1,0,0,0,49.5,50);

	this.instance_69 = new lib.water_hyphen_top_dot_png();
	this.instance_69.setTransform(538.5,3114.8,1,1,0,0,0,49.5,50);

	this.instance_70 = new lib.water_hyphen_top_dot_png();
	this.instance_70.setTransform(448.1,3114.8,1,1,0,0,0,49.5,50);

	this.instance_71 = new lib.water_hyphen_top_dot_png();
	this.instance_71.setTransform(355.2,3115,1,1,0,0,0,49.5,50);

	this.instance_72 = new lib.water_hyphen_top_dot_png();
	this.instance_72.setTransform(262.8,3115.2,1,1,0,0,0,49.5,50);

	this.instance_73 = new lib.water_hyphen_platform_hyphen_left_dot_png();
	this.instance_73.setTransform(891.3,2473.9,0.739,1.26,0,0,0,50.5,15.5);

	this.instance_74 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_74.setTransform(945.2,2471.8,0.383,1.278,0,0,0,50.4,17.1);

	this.instance_75 = new lib.water_hyphen_platform_hyphen_right_dot_png();
	this.instance_75.setTransform(998.9,2474.5,0.714,1.268,0,0,0,49,15.1);

	this.instance_76 = new lib.water_hyphen_platform_hyphen_left_dot_png();
	this.instance_76.setTransform(1011,1713.2,0.85,1.26,0,0,0,50.5,15.5);

	this.instance_77 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_77.setTransform(1061.8,1712.3,0.286,1.278,0,0,0,50.4,17.1);

	this.instance_78 = new lib.water_hyphen_platform_hyphen_right_dot_png();
	this.instance_78.setTransform(1109.2,1714.9,0.694,1.268,0,0,0,49,15.1);

	this.instance_79 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_79.setTransform(1070.5,1741.1,1,1,0,0,0,98.5,41);

	this.instance_80 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_80.setTransform(611.9,1743.1,1,1,0,0,0,98.5,41);

	this.instance_81 = new lib.leaves2_dot_png();
	this.instance_81.setTransform(426.8,2994.2,0.822,0.822,152.2,0,0,22.1,20.1);

	this.instance_82 = new lib.moss_dot_png();
	this.instance_82.setTransform(866.7,3005.4,0.799,0.799,0,0,0,45.2,35.3);

	this.instance_83 = new lib.moss_dot_png();
	this.instance_83.setTransform(431.3,2200.9,0.799,0.799,0,0,0,40.5,27.5);

	this.instance_84 = new lib.moss_dot_png();
	this.instance_84.setTransform(901.8,1079.6,1,1,0,0,0,40.5,27.5);

	this.instance_85 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_85.setTransform(887,1100,0.699,0.699,-179.5,0,0,50.6,21.1);

	this.instance_86 = new lib.leaves2_dot_png();
	this.instance_86.setTransform(2392.9,953.9,1,1,-13,0,0,22,20);

	this.instance_87 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_87.setTransform(2248.2,995,1.051,1,0,0,0,98.5,41);

	this.instance_88 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_88.setTransform(1820,997.5,1,1,0,0,0,98.5,41);

	this.instance_89 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_89.setTransform(2065.7,995.6,1,1,0,0,0,98.5,41);

	this.instance_90 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_90.setTransform(1916.3,996.2,1,1,0,0,0,98.5,41);

	this.instance_91 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_91.setTransform(1401.2,1000.6,1,1,0,0,0,98.5,41);

	this.instance_92 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_92.setTransform(1646.8,998.8,1,1,0,0,0,98.5,41);

	this.instance_93 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_93.setTransform(1497.5,999.4,1,1,0,0,0,98.5,41);

	this.instance_94 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_94.setTransform(974.2,1003.7,1,1,0,0,0,98.5,41);

	this.instance_95 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_95.setTransform(1219.9,1001.9,1,1,0,0,0,98.5,41);

	this.instance_96 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_96.setTransform(2389.5,996.1,1.254,1,0,0,0,34.5,40);

	this.instance_97 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_97.setTransform(1070.5,1002.5,1,1,0,0,0,98.5,41);

	this.instance_98 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_98.setTransform(860.6,1004.2,1,1,0,0,0,38,40);

	this.instance_99 = new lib.leaves1_dot_png();
	this.instance_99.setTransform(2637.3,1136.5,1,1,11.5,0,0,18.5,15);

	this.instance_100 = new lib.leaves2_dot_png();
	this.instance_100.setTransform(2511.7,1897.2,1,1,0,0,0,22,20);

	this.instance_101 = new lib.leaves1_dot_png();
	this.instance_101.setTransform(2566.7,3111.8,1,1,0,0,0,18.5,15);

	this.instance_102 = new lib.leaves1_dot_png();
	this.instance_102.setTransform(101.3,1720.2,1,1,18.5,0,0,18.6,15);

	this.instance_103 = new lib.leaves_hyphen_sml_dot_png();
	this.instance_103.setTransform(843.9,820.2,2.065,2.065,-61.2,0,0,10,8);

	this.instance_104 = new lib.leaves1_dot_png();
	this.instance_104.setTransform(1178.9,753.9,1.25,1.25,0,0,0,18.4,15);

	this.instance_105 = new lib.moss_dot_png();
	this.instance_105.setTransform(2572.4,1730.8,1,1,0,0,0,40.5,27.5);

	this.instance_106 = new lib.moss_dot_png();
	this.instance_106.setTransform(2413.6,2089.6,0.414,0.414,-73,0,0,40.5,27.6);

	this.instance_107 = new lib.moss_dot_png();
	this.instance_107.setTransform(2632.4,2368.4,1,1,172,0,0,40.5,27.5);

	this.instance_108 = new lib.moss_dot_png();
	this.instance_108.setTransform(2532.6,2871,0.651,0.651,-87,0,0,40.5,27.6);

	this.instance_109 = new lib.moss_dot_png();
	this.instance_109.setTransform(2699.8,2746.7,0.784,0.784,84,0,0,40.6,27.4);

	this.instance_110 = new lib.moss_dot_png();
	this.instance_110.setTransform(2427.2,3267.4,1,1,89.7,0,0,40.5,27.6);

	this.instance_111 = new lib.moss_dot_png();
	this.instance_111.setTransform(71.7,78.8,0.364,0.364,113,0,0,40.6,27.4);

	this.instance_112 = new lib.moss_dot_png();
	this.instance_112.setTransform(57.2,290.7,1,1,78.2,0,0,40.5,27.6);

	this.instance_113 = new lib.moss_dot_png();
	this.instance_113.setTransform(37.3,949.7,1,1,0,0,0,40.5,27.5);

	this.instance_114 = new lib.dirt4_dot_png();
	this.instance_114.setTransform(1847.3,2933,0.667,0.667,174.8,0,0,121.5,37.6);

	this.instance_115 = new lib.dirt1_dot_png();
	this.instance_115.setTransform(1581.5,3058,0.282,0.282,0,0,0,55.1,87);

	this.instance_116 = new lib.dirt4_dot_png();
	this.instance_116.setTransform(1621.6,3076.8,1,1,0,0,0,121.5,37.5);

	this.instance_117 = new lib.dirt4_dot_png();
	this.instance_117.setTransform(1629.7,3285.6,1,1,0,0,0,121.5,37.5);

	this.instance_118 = new lib.dirt1_dot_png();
	this.instance_118.setTransform(1939.7,2933,0.274,0.274,0,0,0,55.1,87);

	this.instance_119 = new lib.dirt1_dot_png();
	this.instance_119.setTransform(1942.2,3060.5,0.295,0.295,0,0,0,55,87);

	this.instance_120 = new lib.dirt3_dot_png();
	this.instance_120.setTransform(1844,3169.3,1,1,0,0,0,55,88);

	this.instance_121 = new lib.dirt2_dot_png();
	this.instance_121.setTransform(1576,2939.2,1,1,0,0,0,118.5,52.5);

	this.instance_122 = new lib.dirt1_dot_png();
	this.instance_122.setTransform(2655.7,643.7,1,1,0,0,0,55,87);

	this.instance_123 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_123.setTransform(252.5,2122.1,1,1,0,0,0,98.5,41);

	this.instance_124 = new lib.tool_dot_png();
	this.instance_124.setTransform(140.5,1994,1.167,1.167,-3.3,0,0,15,84.5);

	this.instance_125 = new lib.spade_dot_png();
	this.instance_125.setTransform(2503.3,454.9,1,1,0,0,0,92.5,15);

	this.instance_126 = new lib.moss_dot_png();
	this.instance_126.setTransform(2490.8,1133.7,1,1,-10,0,0,40.6,27.6);

	this.instance_127 = new lib.moss_dot_png();
	this.instance_127.setTransform(2418.2,880,1,1,92.5,0,0,40.6,27.6);

	this.instance_128 = new lib.moss_dot_png();
	this.instance_128.setTransform(127.3,1424.1,1,1,0,0,0,40.5,27.5);

	this.instance_129 = new lib.moss_dot_png();
	this.instance_129.setTransform(-520.2,2852.5,1,1,0,0,0,40.5,27.5);

	this.instance_130 = new lib.moss_dot_png();
	this.instance_130.setTransform(-522.7,2996.2,1,1,0,0,0,40.5,27.5);

	this.instance_131 = new lib.moss_dot_png();
	this.instance_131.setTransform(75.3,3212.4,1,1,0,0,0,40.5,27.5);

	this.instance_132 = new lib.moss_dot_png();
	this.instance_132.setTransform(107.2,2983.1,0.407,0.407,0,0,0,40.5,27.5);

	this.instance_133 = new lib.moss_dot_png();
	this.instance_133.setTransform(49.7,2536.7,0.295,0.295,0,0,0,40.6,27.5);

	this.instance_134 = new lib.moss_dot_png();
	this.instance_134.setTransform(109.1,2014.1,1,1,-92,0,0,40.5,27.5);

	this.instance_135 = new lib.moss_dot_png();
	this.instance_135.setTransform(20.4,2589.8,1,1,-88.2,0,0,40.5,27.4);

	this.instance_136 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_136.setTransform(2518,3293.4,1,1,0,0,0,126,111);

	this.instance_137 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_137.setTransform(2614.2,3294.7,1,1,0,0,0,126,111);

	this.instance_138 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_138.setTransform(2610.5,2293.1,1,1,0,0,0,126,111);

	this.instance_139 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_139.setTransform(2517.3,2111.2,1,1,0,0,0,126,111);

	this.instance_140 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_140.setTransform(2609.2,2111.2,1,1,0,0,0,126,111);

	this.instance_141 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_141.setTransform(2516.7,2291.9,1,1,0,0,0,126,111);

	this.instance_142 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_142.setTransform(2518,2478.2,1,1,0,0,0,126,111);

	this.instance_143 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_143.setTransform(2614.2,2479.4,1,1,0,0,0,126,111);

	this.instance_144 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_144.setTransform(2611.7,1773,1,1,0,0,0,126,111);

	this.instance_145 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_145.setTransform(2518.5,1591.1,1,1,0,0,0,126,111);

	this.instance_146 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_146.setTransform(2610.4,1591.1,1,1,0,0,0,126,111);

	this.instance_147 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_147.setTransform(2517.9,1771.8,1,1,0,0,0,126,111);

	this.instance_148 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_148.setTransform(2519.2,1958.1,1,1,0,0,0,126,111);

	this.instance_149 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_149.setTransform(2615.4,1959.3,1,1,0,0,0,126,111);

	this.instance_150 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_150.setTransform(2605.5,752.7,1,1,0,0,0,126,111);

	this.instance_151 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_151.setTransform(2512.3,570.8,1,1,0,0,0,126,111);

	this.instance_152 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_152.setTransform(2604.2,570.8,1,1,0,0,0,126,111);

	this.instance_153 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_153.setTransform(69,1270.1);

	this.instance_154 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_154.setTransform(343.2,2125.3,1,1,0,0,0,98.5,41);

	this.instance_155 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_155.setTransform(454.5,2125.1,1,1,0,0,0,34.5,40);

	this.instance_156 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_156.setTransform(135.8,2124.4,1,1,0,0,0,38,40);

	this.instance_157 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_157.setTransform(73.1,1541.4,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_158 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_158.setTransform(73.7,1984.5,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_159 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_159.setTransform(71.8,1769.5,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_160 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_160.setTransform(73.7,2402.1,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_161 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_161.setTransform(71.9,2187.1,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_162 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_162.setTransform(766.1,2935.4,1,1,0,0,0,98.5,41);

	this.instance_163 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_163.setTransform(640.4,2937.3,1,1,0,0,0,98.5,41);

	this.instance_164 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_164.setTransform(462.3,2937.9,1,1,0,0,0,98.5,41);

	this.instance_165 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_165.setTransform(892.3,2935.9,1,1,0,0,0,34.5,40);

	this.instance_166 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_166.setTransform(267.9,2937.9,1,1,0,0,0,98.5,41);

	this.instance_167 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_167.setTransform(135,2939,1,1,0,0,0,38,40);

	this.instance_168 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_168.setTransform(72.5,2829,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_169 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_169.setTransform(70.6,2614,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_170 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_170.setTransform(76.2,3255.3,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_171 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_171.setTransform(74.4,3040.3,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_172 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_172.setTransform(43.7,3256.6,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_173 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_173.setTransform(41.9,3041.6,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_174 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_174.setTransform(45,2911.5,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_175 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_175.setTransform(43.1,2696.5,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_176 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_176.setTransform(46.2,2494,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_177 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_177.setTransform(44.4,2279,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_178 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_178.setTransform(46.2,2080.1,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_179 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_179.setTransform(46.2,1903.6,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_180 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_180.setTransform(44.4,1688.6,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_181 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_181.setTransform(46.2,1489.8,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_182 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_182.setTransform(44.4,1274.8,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_183 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_183.setTransform(43.7,1084.7,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_184 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_184.setTransform(41.9,869.7,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_185 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_185.setTransform(43.8,661.6,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_186 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_186.setTransform(46.2,453.2,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_187 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_187.setTransform(44.4,238.2,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_188 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_188.setTransform(46.3,30,1.13,1.13,0,0,0,52.5,110.5);

	this.instance_189 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_189.setTransform(974.2,1741.1,1,1,0,0,0,98.5,41);

	this.instance_190 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_190.setTransform(195.7,1309.1,1,1,0,0,0,98.5,41);

	this.instance_191 = new lib.bush_hyphen_right_dot_png();
	this.instance_191.setTransform(1270.9,937,1,1,0,0,0,29.5,64.5);

	this.instance_192 = new lib.bush_hyphen_right_dot_png();
	this.instance_192.setTransform(1272.7,847.7,1,1,0,0,0,29.5,64.5);

	this.instance_193 = new lib.bush_hyphen_left_dot_png();
	this.instance_193.setTransform(858.3,937.1,1,1,0,0,0,28.5,64.5);

	this.instance_194 = new lib.bush_hyphen_left_dot_png();
	this.instance_194.setTransform(858.9,857.1,1,1,0,0,0,28.5,64.5);

	this.instance_195 = new lib.bush_hyphen_top_dot_png();
	this.instance_195.setTransform(1065.2,773.2,1.032,1,0,0,0,213.5,31.5);

	this.instance_196 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_196.setTransform(1100.3,2873.9,1,1,0,0,0,38,40);

	this.instance_197 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_197.setTransform(1205.8,2871.8,0.847,0.909,0,0,0,98.6,41.1);

	this.instance_198 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_198.setTransform(1282,2876.8,1,1,0,0,0,34.5,40);

	this.instance_199 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_199.setTransform(740.5,2496.6,1,1,0,0,0,98.5,41);

	this.instance_200 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_200.setTransform(551,2496.6,1,1,0,0,0,98.5,41);

	this.instance_201 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_201.setTransform(419.8,2497.7,1,1,0,0,0,38,40);

	this.instance_202 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_202.setTransform(782.6,1741.1,1,1,0,0,0,98.5,41);

	this.instance_203 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_203.setTransform(494,1744.9,1,1,0,0,0,38,40);

	this.instance_204 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_204.setTransform(670.8,1311.4,1,1,0,0,0,34.5,40);

	this.instance_205 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_205.setTransform(533.3,1310.9,1.127,1,0,0,0,98.5,41);

	this.instance_206 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_206.setTransform(332,1309.7,1,1,0,0,0,98.5,41);

	this.instance_207 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_207.setTransform(1478.4,3297,1.16,1.454,180,0,0,14.5,60.5);

	this.instance_208 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_208.setTransform(1476.2,3155.3,1.16,1.16,180,0,0,14.5,60.5);

	this.instance_209 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_209.setTransform(1475.9,3031.2,1.16,1.16,180,0,0,14.5,60.5);

	this.instance_210 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_210.setTransform(1474.6,2911.2,1.16,1.16,180,0,0,14.5,60.5);

	this.instance_211 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_211.setTransform(1833.4,3233.7,1,1,0,0,0,60,60);

	this.instance_212 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_212.setTransform(1733.4,3233.1,1,1,0,0,0,60,60);

	this.instance_213 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_213.setTransform(1637.8,3232.4,1,1,0,0,0,60,60);

	this.instance_214 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_214.setTransform(1527.1,3226.2,1,1,0,0,0,53,60);

	this.instance_215 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_215.setTransform(1815.3,3121.8,1,1,0,0,0,60.5,60.5);

	this.instance_216 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_216.setTransform(1716.5,3121.8,1,1,0,0,0,60.5,60.5);

	this.instance_217 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_217.setTransform(1635.3,3121.8,1,1,0,0,0,60.5,60.5);

	this.instance_218 = new lib.ground_hyphen_left_dot_png();
	this.instance_218.setTransform(1528.3,3121.2,1,1,0,0,0,53.5,60.5);

	this.instance_219 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_219.setTransform(1815.4,3004.9,1,1,0,0,0,60.5,60.5);

	this.instance_220 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_220.setTransform(1716.6,3004.9,1,1,0,0,0,60.5,60.5);

	this.instance_221 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_221.setTransform(1635.3,3004.9,1,1,0,0,0,60.5,60.5);

	this.instance_222 = new lib.ground_hyphen_left_dot_png();
	this.instance_222.setTransform(1528.4,3004.3,1,1,0,0,0,53.5,60.5);

	this.instance_223 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_223.setTransform(1845.9,2893.6,1,1,0,0,0,60.5,60.5);

	this.instance_224 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_224.setTransform(1744.6,2893,1,1,0,0,0,60.5,60.5);

	this.instance_225 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_225.setTransform(1632.8,2893,1,1,0,0,0,60.5,60.5);

	this.instance_226 = new lib.endpole_dot_png();
	this.instance_226.setTransform(1645.9,2733.8,1,1,0,0,0,8,39.5);

	this.instance_227 = new lib.endflag_dot_png();
	this.instance_227.setTransform(1673,2500.2,1,1,0,0,0,49,56);

	this.instance_228 = new lib.endpole_dot_png();
	this.instance_228.setTransform(1645.6,2587.4,1,1,0,0,0,8,39.5);

	this.instance_229 = new lib.endpole_dot_png();
	this.instance_229.setTransform(1645.8,2655.2,1,1,0,0,0,8,39.5);

	this.instance_230 = new lib.endpole_dot_png();
	this.instance_230.setTransform(1646,2812.1,1,1,0,0,0,8,39.5);

	this.instance_231 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_231.setTransform(1522.1,2892.8,1,1,0,0,0,60.5,60.5);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_232 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_232.setTransform(1526.5,3323.1,1,1,0,0,0,53,60);

	this.instance_233 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_233.setTransform(1826.5,3324.9,1,1,0,0,0,60,60);

	this.instance_234 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_234.setTransform(1726.5,3324.3,1,1,0,0,0,60,60);

	this.instance_235 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_235.setTransform(1630.9,3323.7,1,1,0,0,0,60,60);

	this.instance_236 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_236.setTransform(1068.3,853.9,0.893,0.893,0,0,0,213.5,64.5);

	this.instance_237 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_237.setTransform(1064,944,0.893,0.893,0,0,0,213.5,64.5);

	this.instance_238 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_238.setTransform(434,1376.5,1,1,0,0,0,155.5,45);

	this.instance_239 = new lib.wall_hyphen_right_dot_png();
	this.instance_239.setTransform(637.8,1377.1,1,1,0,0,0,51.5,45);

	this.instance_240 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_240.setTransform(250.9,1376.5,1,1,0,0,0,155.5,45);

	this.instance_241 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_241.setTransform(531.1,1427.5,1,1,0,0,0,155.5,16.5);

	this.instance_242 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_242.setTransform(251.7,1428.8,1,1,0,0,0,155.5,16.5);

	this.instance_243 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_243.setTransform(2511.7,751.4,1,1,0,0,0,126,111);

	this.instance_244 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_244.setTransform(2513,937.7,1,1,0,0,0,126,111);

	this.instance_245 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_245.setTransform(2609.2,939,1,1,0,0,0,126,111);

	this.instance_246 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_246.setTransform(2609.2,1245.4,1,1,0,0,0,126,111);

	this.instance_247 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_247.setTransform(2516,1063.5,1,1,0,0,0,126,111);

	this.instance_248 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_248.setTransform(2607.9,1063.5,1,1,0,0,0,126,111);

	this.instance_249 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_249.setTransform(2515.4,1244.2,1,1,0,0,0,126,111);

	this.instance_250 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_250.setTransform(2516.7,1430.5,1,1,0,0,0,126,111);

	this.instance_251 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_251.setTransform(2612.9,1431.7,1,1,0,0,0,126,111);

	this.instance_252 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_252.setTransform(2613,2833.2,1,1,0,0,0,126,111);

	this.instance_253 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_253.setTransform(2519.8,2651.3,1,1,0,0,0,126,111);

	this.instance_254 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_254.setTransform(2611.7,2651.3,1,1,0,0,0,126,111);

	this.instance_255 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_255.setTransform(2519.2,2832,1,1,0,0,0,126,111);

	this.instance_256 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_256.setTransform(2520.5,3018.3,1,1,0,0,0,126,111);

	this.instance_257 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_257.setTransform(2616.7,3019.5,1,1,0,0,0,126,111);

	this.instance_258 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_258.setTransform(2520.5,3195.9,1,1,0,0,0,126,111);

	this.instance_259 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_259.setTransform(2616.7,3197.1,1,1,0,0,0,126,111);

	this.instance_260 = new lib.moss_dot_png();
	this.instance_260.setTransform(188.6,1442.1,1,1,173.3,0,0,40.5,27.6);

	this.instance_261 = new lib.moss_dot_png();
	this.instance_261.setTransform(2413.6,2929.8,0.692,0.692,-60.5,0,0,40.6,27.4);

	this.instance_262 = new lib.moss_dot_png();
	this.instance_262.setTransform(2539.3,467.2,1.126,1.126,-5.7,0,0,40.5,27.6);

	this.instance_263 = new lib.leaves1_dot_png();
	this.instance_263.setTransform(1294,916.7,0.73,0.73,77.5,0,0,18.5,15);

	this.instance_264 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_264.setTransform(2156.8,1045.2,1,1,0,0,0,155.5,45);

	this.instance_265 = new lib.wall_hyphen_right_dot_png();
	this.instance_265.setTransform(2360.6,1045.8,1,1,0,0,0,51.5,45);

	this.instance_266 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_266.setTransform(1973.6,1045.2,1,1,0,0,0,155.5,45);

	this.instance_267 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_267.setTransform(2253.9,1096.2,1,1,0,0,0,155.5,16.5);

	this.instance_268 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_268.setTransform(1974.5,1097.5,1,1,0,0,0,155.5,16.5);

	this.instance_269 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_269.setTransform(1672.9,1044.5,1,1,0,0,0,155.5,45);

	this.instance_270 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_270.setTransform(1673.8,1096.8,1,1,0,0,0,155.5,16.5);

	this.instance_271 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_271.setTransform(1372.2,1045.8,1,1,0,0,0,155.5,45);

	this.instance_272 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_272.setTransform(1373.1,1098.1,1,1,0,0,0,155.5,16.5);

	this.instance_273 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_273.setTransform(1066.5,1045.8,1,1,0,0,0,155.5,45);

	this.instance_274 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_274.setTransform(1067.4,1098.1,1,1,0,0,0,155.5,16.5);

	this.instance_275 = new lib.wall_hyphen_left_dot_png();
	this.instance_275.setTransform(910.2,1048.9,1,1,0,0,0,70.5,45);

	this.instance_276 = new lib.moss_dot_png();
	this.instance_276.setTransform(933.6,1107.7,1,1,173.3,0,0,40.5,27.6);

	this.instance_277 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_277.setTransform(269.2,2167,1,1,0,0,0,155.5,45);

	this.instance_278 = new lib.wall_hyphen_right_dot_png();
	this.instance_278.setTransform(419.8,2177.6,1,1,0,0,0,51.5,45);

	this.instance_279 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_279.setTransform(278.1,2211.8,1,1,0,0,0,155.5,16.5);

	this.instance_280 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_280.setTransform(275.9,2961.3,1,1,0,0,0,155.5,45);

	this.instance_281 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_281.setTransform(277,3004.9,1,1,0,0,0,155.5,16.5);

	this.instance_282 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_282.setTransform(582.2,2962.6,1,1,0,0,0,155.5,45);

	this.instance_283 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_283.setTransform(583.3,3006.1,1,1,0,0,0,155.5,16.5);

	this.instance_284 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_284.setTransform(698.5,2964.5,1,1,0,0,0,155.5,45);

	this.instance_285 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_285.setTransform(699.5,3008,1,1,0,0,0,155.5,16.5);

	this.instance_286 = new lib.wall_hyphen_right_dot_png();
	this.instance_286.setTransform(855.7,2958.8,1,1,0,0,0,51.5,45);

	this.instance_287 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_287.setTransform(874.9,3010.9,0.496,0.496,-179.7,0,0,63,20.8);

	this.instance_288 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_288.setTransform(1158.4,1742.1,1,1,0,0,0,34.5,40);

	this.instance_289 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_289.setTransform(904.1,2501.1,1,1,0,0,0,98.5,41);

	this.instance_290 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_290.setTransform(1017.4,2502.1,1,1,0,0,0,34.5,40);

	this.instance_291 = new lib.water_hyphen_top_dot_png();
	this.instance_291.setTransform(169.9,3115.4,1,1,0,0,0,49.5,50);

	this.instance_292 = new lib.water_hyphen_top_dot_png();
	this.instance_292.setTransform(1440.3,3113.6,1,1,0,0,0,49.5,50);

	this.instance_293 = new lib.water_hyphen_top_dot_png();
	this.instance_293.setTransform(1347.5,3113.8,1,1,0,0,0,49.5,50);

	this.instance_294 = new lib.water_hyphen_top_dot_png();
	this.instance_294.setTransform(1255,3114,1,1,0,0,0,49.5,50);

	this.instance_295 = new lib.water_hyphen_middle_dot_png();
	this.instance_295.setTransform(176.3,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_296 = new lib.water_hyphen_middle_dot_png();
	this.instance_296.setTransform(1425.4,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_297 = new lib.water_hyphen_middle_dot_png();
	this.instance_297.setTransform(1338.9,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_298 = new lib.water_hyphen_middle_dot_png();
	this.instance_298.setTransform(1246.2,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_299 = new lib.water_hyphen_middle_dot_png();
	this.instance_299.setTransform(1163.9,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_300 = new lib.water_hyphen_middle_dot_png();
	this.instance_300.setTransform(1071.3,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_301 = new lib.water_hyphen_middle_dot_png();
	this.instance_301.setTransform(984.8,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_302 = new lib.water_hyphen_middle_dot_png();
	this.instance_302.setTransform(892.1,3209.3,1,1,0,0,0,49.5,49.5);

	this.instance_303 = new lib.water_hyphen_bottom_dot_png();
	this.instance_303.setTransform(176.3,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_304 = new lib.water_hyphen_middle_dot_png();
	this.instance_304.setTransform(176.3,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_305 = new lib.water_hyphen_middle_dot_png();
	this.instance_305.setTransform(1425.4,3245.8,1,1,0,0,0,49.5,49.5);

	this.instance_306 = new lib.water_hyphen_bottom_dot_png();
	this.instance_306.setTransform(1458.7,3331.9,1,1,0,0,0,49.5,49.5);

	this.instance_307 = new lib.water_hyphen_bottom_dot_png();
	this.instance_307.setTransform(1366,3333.6,1,1,0,0,0,49.5,49.5);

	this.instance_308 = new lib.water_hyphen_bottom_dot_png();
	this.instance_308.setTransform(1278.3,3334.2,1,1,0,0,0,49.5,49.5);

	this.instance_309 = new lib.dirt1_dot_png();
	this.instance_309.setTransform(2385.3,2934.9,0.274,0.274,0,0,0,55.1,87);

	this.instance_310 = new lib.dirt1_dot_png();
	this.instance_310.setTransform(2387.8,3062.4,0.295,0.295,0,0,0,55,87);

	this.instance_311 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_311.setTransform(2369.1,3233.1,1,1,0,0,0,53,60);

	this.instance_312 = new lib.ground_hyphen_right_dot_png();
	this.instance_312.setTransform(2367.6,3122.5,1,1,0,0,0,53.5,60.5);

	this.instance_313 = new lib.ground_hyphen_right_dot_png();
	this.instance_313.setTransform(2367.6,3005.6,1,1,0,0,0,53.5,60.5);

	this.instance_314 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_314.setTransform(2368.2,2895.5,1,1,0,0,0,57.5,60.5);

	this.instance_315 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_315.setTransform(2369.3,3335.2,1,1,0,0,0,53,60);

	this.instance_316 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_316.setTransform(1914.7,3123.7,1,1,0,0,0,60.5,60.5);

	this.instance_317 = new lib.endpole_dot_png();
	this.instance_317.setTransform(1064.3,1675.1,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_318 = new lib.endpole_dot_png();
	this.instance_318.setTransform(944.3,2437.4,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_319 = new lib.endpole_dot_png();
	this.instance_319.setTransform(1011.7,3044.8,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_320 = new lib.endpole_dot_png();
	this.instance_320.setTransform(1376.7,3043.6,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_321 = new lib.wall_hyphen_right_dot_png();
	this.instance_321.setTransform(980.6,2557.9,1,1,0,0,0,51.5,45);

	this.instance_322 = new lib.moss_dot_png();
	this.instance_322.setTransform(1012.6,2596,0.799,0.799,0,0,0,40.5,27.5);

	this.instance_323 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_323.setTransform(850.5,2562.1,1,1,0,0,0,155.5,45);

	this.instance_324 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_324.setTransform(859.4,2606.9,1,1,0,0,0,155.5,16.5);

	this.instance_325 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_325.setTransform(694.7,1812.4,1.233,1.186,0,0,0,155.5,45);

	this.instance_326 = new lib.wall_hyphen_right_dot_png();
	this.instance_326.setTransform(1125.9,1815.4,0.969,1,0,0,0,51.5,45);

	this.instance_327 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_327.setTransform(1014.9,1803.1,0.926,1,0,0,0,155.5,45);

	this.addChild(this.instance_327,this.instance_326,this.instance_325,this.instance_324,this.instance_323,this.instance_322,this.instance_321,this.instance_320,this.instance_319,this.instance_318,this.instance_317,this.instance_316,this.instance_315,this.instance_314,this.instance_313,this.instance_312,this.instance_311,this.instance_310,this.instance_309,this.instance_308,this.instance_307,this.instance_306,this.instance_305,this.instance_304,this.instance_303,this.instance_302,this.instance_301,this.instance_300,this.instance_299,this.instance_298,this.instance_297,this.instance_296,this.instance_295,this.instance_294,this.instance_293,this.instance_292,this.instance_291,this.instance_290,this.instance_289,this.instance_288,this.instance_287,this.instance_286,this.instance_285,this.instance_284,this.instance_283,this.instance_282,this.instance_281,this.instance_280,this.instance_279,this.instance_278,this.instance_277,this.instance_276,this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.isDisp,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-563.2,-94.8,3306,3500.5);


(lib.level1PixiBG = function() {
	this.initialize();

	// Layer 2
	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	// Layer 1
	this.instance = new lib.endflag_dot_png();
	this.instance.setTransform(274.1,1713.5,1,1,0,0,0,49,56);

	this.instance_1 = new lib.endpole_dot_png();
	this.instance_1.setTransform(247.1,1805.2,1,1,0,0,0,8,39.5);

	this.addChild(this.instance_1,this.instance,this.isDispBG);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-0.5,322.2,1845.2);


(lib.level1Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hazardsign_dot_png();
	this.instance.setTransform(815.2,1968.9,0.8,0.8,0,0,0,51,46);

	this.instance_1 = new lib.hazardsign_dot_png();
	this.instance_1.setTransform(-211.2,1187.8,0.8,0.8,0,0,0,51,46);

	this.instance_2 = new lib.hazardsign_dot_png();
	this.instance_2.setTransform(-94.3,1512.2,0.8,0.8,0,0,0,51,46);

	this.instance_3 = new lib.hazardsign_dot_png();
	this.instance_3.setTransform(-19.6,1972.9,0.8,0.8,0,0,0,51,46);

	this.instance_4 = new lib.hazardsign_dot_png();
	this.instance_4.setTransform(393.7,1960.7,0.8,0.8,0,0,0,51,46);

	this.instance_5 = new lib.leaves1_dot_png();
	this.instance_5.setTransform(-269.9,1248.4,1,1,-22.2,0,0,18.5,15);

	this.instance_6 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_6.setTransform(-405,1349.7,1,1,0,0,0,52.5,110.5);

	this.instance_7 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_7.setTransform(-402.5,1168.4,1,1,0,0,0,52.5,110.5);

	this.instance_8 = new lib.wall_hyphen_right_dot_png();
	this.instance_8.setTransform(-310.6,1337.4,1,1,0,0,0,51.5,45);

	this.instance_9 = new lib.wall_hyphen_right_dot_png();
	this.instance_9.setTransform(-313.5,1249.6,1,1,0,0,0,51.5,45);

	this.instance_10 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_10.setTransform(-319.9,1288.1,1.191,1.578,0,0,0,50.5,17);

	this.instance_11 = new lib.water_hyphen_platform_hyphen_right_dot_png();
	this.instance_11.setTransform(-206,1291.8,1.143,1.643,0,0,0,49,15);

	this.instance_12 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_12.setTransform(-119,1310.6,1.199,1,0,0,0,60.5,36);

	this.instance_13 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_13.setTransform(-87.5,1598.7,1,1.366,0,0,0,50.5,17);

	this.instance_14 = new lib.water_hyphen_platform_hyphen_left_dot_png();
	this.instance_14.setTransform(-200.7,1600.8,1.346,1.394,0,0,0,50.5,15.6);

	this.instance_15 = new lib.water_hyphen_platform_hyphen_right_dot_png();
	this.instance_15.setTransform(15.6,1602.1,1.325,1.391,0,0,0,49,15.1);

	this.instance_16 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_16.setTransform(-137,1626.3,1,1,0,0,0,60.5,36);

	this.instance_17 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_17.setTransform(-35.8,1623.2,1,1,0,0,0,60.5,36);

	this.instance_18 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_18.setTransform(81.9,1623.2,1,1,0,0,0,60.5,36);

	this.instance_19 = new lib.leaves1_dot_png();
	this.instance_19.setTransform(1181.7,2058.7,1,1,-8,0,0,18.4,15);

	this.instance_20 = new lib.moss_dot_png();
	this.instance_20.setTransform(-285.4,2063.8,1,1,-88.2,0,0,40.6,27.6);

	this.instance_21 = new lib.leaves2_dot_png();
	this.instance_21.setTransform(-273.6,1588.3,0.868,0.868,0,0,0,22,20);

	this.instance_22 = new lib.water_hyphen_bottom_dot_png();
	this.instance_22.setTransform(820.3,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_23 = new lib.water_hyphen_bottom_dot_png();
	this.instance_23.setTransform(724.8,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_24 = new lib.water_hyphen_bottom_dot_png();
	this.instance_24.setTransform(630.4,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_25 = new lib.water_hyphen_bottom_dot_png();
	this.instance_25.setTransform(534.9,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_26 = new lib.water_hyphen_bottom_dot_png();
	this.instance_26.setTransform(440.5,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_27 = new lib.water_hyphen_bottom_dot_png();
	this.instance_27.setTransform(345,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_28 = new lib.water_hyphen_bottom_dot_png();
	this.instance_28.setTransform(250.6,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_29 = new lib.water_hyphen_bottom_dot_png();
	this.instance_29.setTransform(155.1,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_30 = new lib.water_hyphen_bottom_dot_png();
	this.instance_30.setTransform(61.2,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_31 = new lib.water_hyphen_bottom_dot_png();
	this.instance_31.setTransform(-34.3,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_32 = new lib.water_hyphen_bottom_dot_png();
	this.instance_32.setTransform(-128.7,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_33 = new lib.leaves2_dot_png();
	this.instance_33.setTransform(122.4,959.2,1.25,1.25,0,0,0,28,20);

	this.instance_34 = new lib.leaves2_dot_png();
	this.instance_34.setTransform(708.7,1274.3,1.25,1.25,0,0,0,28,20);

	this.instance_35 = new lib.leaves2_dot_png();
	this.instance_35.setTransform(737.5,1835.6,1.25,1.25,0,0,0,28,20);

	this.instance_36 = new lib.leaves2_dot_png();
	this.instance_36.setTransform(-392.7,665.4,1.25,1.25,0,0,0,28,20);

	this.instance_37 = new lib.leaves1_dot_png();
	this.instance_37.setTransform(1172.5,394.5,1.917,1.917,0,0,0,18.4,15);

	this.instance_38 = new lib.dirt3_dot_png();
	this.instance_38.setTransform(-330,1594,0.523,0.523,0,0,0,55,88);

	this.instance_39 = new lib.moss_dot_png();
	this.instance_39.setTransform(-302.5,477.6,1,1,0,0,0,40.5,27.5);

	this.instance_40 = new lib.moss_dot_png();
	this.instance_40.setTransform(-337.7,986.8,1,1,0,-78.4,-78.2);

	this.instance_41 = new lib.moss_dot_png();
	this.instance_41.setTransform(-372.5,1617.8,1,1,0,0,0,40.5,27.5);

	this.instance_42 = new lib.moss_dot_png();
	this.instance_42.setTransform(1194.1,1544.1,1,1,92.5,0,0,40.5,27.4);

	this.instance_43 = new lib.moss_dot_png();
	this.instance_43.setTransform(1369,1147.8,1,1,0,0,0,40.5,27.5);

	this.instance_44 = new lib.moss_dot_png();
	this.instance_44.setTransform(1015.2,587.6,1,1,98.1,0,0,40.5,27.5);

	this.instance_45 = new lib.moss_dot_png();
	this.instance_45.setTransform(1327.9,61.3,1,1,0,0,0,40.5,27.5);

	this.instance_46 = new lib.moss_dot_png();
	this.instance_46.setTransform(-388.7,98.8,1,1,0,0,0,40.5,27.5);

	this.instance_47 = new lib.moss_dot_png();
	this.instance_47.setTransform(1174.1,1843,1,1,84.7,0,0,40.5,27.4);

	this.instance_48 = new lib.dirt1_dot_png();
	this.instance_48.setTransform(1068.1,624.1,0.591,0.591,102.3,0,0,55.1,86.9);

	this.instance_49 = new lib.dirt1_dot_png();
	this.instance_49.setTransform(1257.6,14,0.591,0.591,102.3,0,0,55.1,86.9);

	this.instance_50 = new lib.dirt1_dot_png();
	this.instance_50.setTransform(1186.2,1702.6,0.591,0.591,102.3,0,0,55.1,86.9);

	this.instance_51 = new lib.dirt1_dot_png();
	this.instance_51.setTransform(-389.6,676,0.591,0.591,102.3,0,0,55.1,86.9);

	this.instance_52 = new lib.dirt2_dot_png();
	this.instance_52.setTransform(1265.7,1335.7,0.916,0.916,-90,0,0,118.5,52.5);

	this.instance_53 = new lib.dirt3_dot_png();
	this.instance_53.setTransform(1353.2,352.7,0.818,0.602,0,0,0,55,88);

	this.instance_54 = new lib.dirt4_dot_png();
	this.instance_54.setTransform(-351.3,576.4,1,1,86.4,0,0,121.5,37.5);

	this.instance_55 = new lib.dirt4_dot_png();
	this.instance_55.setTransform(-333.8,426.4,1,1,86.4,0,0,121.5,37.5);

	this.instance_56 = new lib.dirt4_dot_png();
	this.instance_56.setTransform(-387.6,466.4,1,1,86.4,0,0,121.5,37.5);

	this.instance_57 = new lib.dirt4_dot_png();
	this.instance_57.setTransform(-320,437.6,1,1,86.4,0,0,121.5,37.5);

	this.instance_58 = new lib.dirt1_dot_png();
	this.instance_58.setTransform(-352.6,2066.6,1,1,90,0,0,55,87);

	this.instance_59 = new lib.dirt1_dot_png();
	this.instance_59.setTransform(-427.5,137.6,1,1,0,0,0,55,87);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_60 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_60.setTransform(70.8,433.9,1,1,0,0,0,60.5,36);

	this.instance_61 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_61.setTransform(-125.2,433.9,1.075,1,0,0,0,60.5,36);

	this.instance_62 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_62.setTransform(184.4,433.9,1,1,0,0,0,60.5,36);

	this.instance_63 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_63.setTransform(-14,433.9,1.075,1,0,0,0,60.5,36);

	this.instance_64 = new lib.wall_hyphen_right_dot_png();
	this.instance_64.setTransform(-309.9,283.8,1,1,0,0,0,51.5,45);

	this.instance_65 = new lib.wall_hyphen_right_dot_png();
	this.instance_65.setTransform(-310,371.8,1,1,0,0,0,51.5,45);

	this.instance_66 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_66.setTransform(583.2,439.4,1,1,0,0,0,55.5,41);

	this.instance_67 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_67.setTransform(385.3,434.5,1,1,0,0,0,60.5,36);

	this.instance_68 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_68.setTransform(498.8,434.5,1,1,0,0,0,60.5,36);

	this.instance_69 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_69.setTransform(968,1872.2,1,1,0,0,0,60.5,36);

	this.instance_70 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_70.setTransform(435.7,1872,1,1,0,0,0,60.5,36);

	this.instance_71 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_71.setTransform(321.9,1871.7,1,1,0,0,0,60.5,36);

	this.instance_72 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_72.setTransform(1077.8,1877.1,1,1,0,0,0,55.5,41);

	this.instance_73 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_73.setTransform(887.4,1871,1,1,0,0,0,60.5,36);

	this.instance_74 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_74.setTransform(776.1,1871.4,1,1,0,0,0,60.5,36);

	this.instance_75 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_75.setTransform(661.4,1872,1,1,0,0,0,60.5,36);

	this.instance_76 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_76.setTransform(547.6,1871.7,1,1,0,0,0,60.5,36);

	this.instance_77 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_77.setTransform(206.4,1875.7,1,1,0,0,0,60.5,41.5);

	this.instance_78 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_78.setTransform(549.7,1626.3,1,1,0,0,0,55.5,41);

	this.instance_79 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_79.setTransform(421.5,1623.6,1,1,0,0,0,61.8,36.4);

	this.instance_80 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_80.setTransform(314.9,1623.9,1,1,0,0,0,61.8,36.4);

	this.instance_81 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_81.setTransform(-221.3,1631.8,1,1,0,0,0,60.5,41.5);

	this.instance_82 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_82.setTransform(199.8,1623.2,1,1,0,0,0,60.5,36);

	this.instance_83 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_83.setTransform(797.1,1316.6,0.972,1,0,0,0,55.6,41);

	this.instance_84 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_84.setTransform(577.9,1316.5,0.972,1,0,0,0,60.6,41.5);

	this.instance_85 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_85.setTransform(691.5,1310.6,0.972,1,0,0,0,60.5,36);

	this.instance_86 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_86.setTransform(112.8,1313.8,0.972,1,0,0,0,55.6,41);

	this.instance_87 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_87.setTransform(20,1311,1.195,1,0,0,0,61.8,36.4);

	this.instance_88 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_88.setTransform(625.1,686.1,1,1,0,0,0,60.5,36);

	this.instance_89 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_89.setTransform(511.3,685.8,1,1,0,0,0,60.5,36);

	this.instance_90 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_90.setTransform(483.5,1002.8,1,1,0,0,0,55.5,41);

	this.instance_91 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_91.setTransform(418.4,998.2,1,1,0,0,0,61.8,36.4);

	this.instance_92 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_92.setTransform(1131.6,691.8,1,1,0,0,0,55.5,41);

	this.instance_93 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_93.setTransform(1076.8,685.1,1,1,0,0,0,60.5,36);

	this.instance_94 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_94.setTransform(965.5,685.5,1,1,0,0,0,60.5,36);

	this.instance_95 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_95.setTransform(850.8,686.1,1,1,0,0,0,60.5,36);

	this.instance_96 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_96.setTransform(737,685.8,1,1,0,0,0,60.5,36);

	this.instance_97 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_97.setTransform(311.8,998.5,1,1,0,0,0,61.8,36.4);

	this.instance_98 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_98.setTransform(79.7,1003.7,1,1,0,0,0,60.5,41.5);

	this.instance_99 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_99.setTransform(196.7,997.8,1,1,0,0,0,60.5,36);

	this.instance_100 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_100.setTransform(1104.6,501.9,1,1,0,0,0,126,111);

	this.instance_101 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_101.setTransform(1368.4,2046.8,1,1,0,0,0,52.5,110.5);

	this.instance_102 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_102.setTransform(1290.8,2047.4,1,1,0,0,0,52.5,110.5);

	this.instance_103 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_103.setTransform(1373.4,1960.6,1,1,0,0,0,52.5,110.5);

	this.instance_104 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_104.setTransform(1295.8,1961.2,1,1,0,0,0,52.5,110.5);

	this.instance_105 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_105.setTransform(1365.9,1763,1,1,0,0,0,52.5,110.5);

	this.instance_106 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_106.setTransform(1288.3,1763.6,1,1,0,0,0,52.5,110.5);

	this.instance_107 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_107.setTransform(1368.4,1570.5,1,1,0,0,0,52.5,110.5);

	this.instance_108 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_108.setTransform(1290.8,1571.1,1,1,0,0,0,52.5,110.5);

	this.instance_109 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_109.setTransform(1372.1,1379.2,1,1,0,0,0,52.5,110.5);

	this.instance_110 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_110.setTransform(1294.6,1379.8,1,1,0,0,0,52.5,110.5);

	this.instance_111 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_111.setTransform(1374.6,1186.6,1,1,0,0,0,52.5,110.5);

	this.instance_112 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_112.setTransform(1297.1,1187.2,1,1,0,0,0,52.5,110.5);

	this.instance_113 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_113.setTransform(1375.9,997.8,1,1,0,0,0,52.5,110.5);

	this.instance_114 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_114.setTransform(1298.3,998.4,1,1,0,0,0,52.5,110.5);

	this.instance_115 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_115.setTransform(1378.4,805.3,1,1,0,0,0,52.5,110.5);

	this.instance_116 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_116.setTransform(1300.8,805.9,1,1,0,0,0,52.5,110.5);

	this.instance_117 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_117.setTransform(1377.1,624,1,1,0,0,0,52.5,110.5);

	this.instance_118 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_118.setTransform(1299.6,624.6,1,1,0,0,0,52.5,110.5);

	this.instance_119 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_119.setTransform(1379.6,431.4,1,1,0,0,0,52.5,110.5);

	this.instance_120 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_120.setTransform(1302.1,432,1,1,0,0,0,52.5,110.5);

	this.instance_121 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_121.setTransform(1377.1,241.4,1,1,0,0,0,52.5,110.5);

	this.instance_122 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_122.setTransform(1299.6,242,1,1,0,0,0,52.5,110.5);

	this.instance_123 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_123.setTransform(1379.6,48.9,1,1,0,0,0,52.5,110.5);

	this.instance_124 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_124.setTransform(1302.1,49.5,1,1,0,0,0,52.5,110.5);

	this.instance_125 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_125.setTransform(1224.6,46.4,1,1,0,0,0,52.5,110.5);

	this.instance_126 = new lib.wall_hyphen_right_dot_png();
	this.instance_126.setTransform(1225.9,2112.2,1,1,180,0,0,51.5,45);

	this.instance_127 = new lib.wall_hyphen_right_dot_png();
	this.instance_127.setTransform(1225.9,2005.3,1,1,180,0,0,51.5,45);

	this.instance_128 = new lib.wall_hyphen_right_dot_png();
	this.instance_128.setTransform(1225.9,2093.4,1,1,180,0,0,51.5,45);

	this.instance_129 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_129.setTransform(-460.1,1869.8,1,1,0,0,0,52.5,110.5);

	this.instance_130 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_130.setTransform(-405,1868.5,1,1,0,0,0,52.5,110.5);

	this.instance_131 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_131.setTransform(-462.6,2051,1,1,0,0,0,52.5,110.5);

	this.instance_132 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_132.setTransform(-407.5,2049.8,1,1,0,0,0,52.5,110.5);

	this.instance_133 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_133.setTransform(-455.1,1531,1,1,0,0,0,52.5,110.5);

	this.instance_134 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_134.setTransform(-400,1529.7,1,1,0,0,0,52.5,110.5);

	this.instance_135 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_135.setTransform(-457.6,1712.2,1,1,0,0,0,52.5,110.5);

	this.instance_136 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_136.setTransform(-402.5,1711,1,1,0,0,0,52.5,110.5);

	this.instance_137 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_137.setTransform(-457.6,1169.7,1,1,0,0,0,52.5,110.5);

	this.instance_138 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_138.setTransform(-460.1,1350.9,1,1,0,0,0,52.5,110.5);

	this.instance_139 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_139.setTransform(-450,800.9,1,1,0,0,0,52.5,110.5);

	this.instance_140 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_140.setTransform(-395,799.6,1,1,0,0,0,52.5,110.5);

	this.instance_141 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_141.setTransform(-452.5,982.1,1,1,0,0,0,52.5,110.5);

	this.instance_142 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_142.setTransform(-397.5,980.9,1,1,0,0,0,52.5,110.5);

	this.instance_143 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_143.setTransform(-457.6,424.5,1,1,0,0,0,52.5,110.5);

	this.instance_144 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_144.setTransform(-402.5,423.3,1,1,0,0,0,52.5,110.5);

	this.instance_145 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_145.setTransform(-460.1,605.8,1,1,0,0,0,52.5,110.5);

	this.instance_146 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_146.setTransform(-405,604.5,1,1,0,0,0,52.5,110.5);

	this.instance_147 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_147.setTransform(-455.1,57,1,1,0,0,0,52.5,110.5);

	this.instance_148 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_148.setTransform(-400,55.7,1,1,0,0,0,52.5,110.5);

	this.instance_149 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_149.setTransform(-311.3,58.2,1,1,0,0,0,52.5,110.5);

	this.instance_150 = new lib.wall_hyphen_right_dot_png();
	this.instance_150.setTransform(-311.2,2114.5,1,1,0,0,0,51.5,45);

	this.instance_151 = new lib.wall_hyphen_right_dot_png();
	this.instance_151.setTransform(1223.5,17.8,1,1,180,0,0,51.5,45);

	this.instance_152 = new lib.wall_hyphen_right_dot_png();
	this.instance_152.setTransform(1223.5,106,1,1,180,0,0,51.5,45);

	this.instance_153 = new lib.wall_hyphen_right_dot_png();
	this.instance_153.setTransform(1223.5,193.2,1,1,180,0,0,51.5,45);

	this.instance_154 = new lib.wall_hyphen_right_dot_png();
	this.instance_154.setTransform(1223.5,281.4,1,1,180,0,0,51.5,45);

	this.instance_155 = new lib.wall_hyphen_right_dot_png();
	this.instance_155.setTransform(1223.5,366.9,1,1,180,0,0,51.5,45);

	this.instance_156 = new lib.wall_hyphen_right_dot_png();
	this.instance_156.setTransform(1223.5,455,1,1,180,0,0,51.5,45);

	this.instance_157 = new lib.wall_hyphen_right_dot_png();
	this.instance_157.setTransform(1223.5,542.3,1,1,180,0,0,51.5,45);

	this.instance_158 = new lib.wall_hyphen_right_dot_png();
	this.instance_158.setTransform(1223.5,630.4,1,1,180,0,0,51.5,45);

	this.instance_159 = new lib.wall_hyphen_right_dot_png();
	this.instance_159.setTransform(1223.5,710.5,1,1,180,0,0,51.5,45);

	this.instance_160 = new lib.wall_hyphen_right_dot_png();
	this.instance_160.setTransform(1223.5,798.6,1,1,180,0,0,51.5,45);

	this.instance_161 = new lib.wall_hyphen_right_dot_png();
	this.instance_161.setTransform(1223.5,885.9,1,1,180,0,0,51.5,45);

	this.instance_162 = new lib.wall_hyphen_right_dot_png();
	this.instance_162.setTransform(1223.5,974,1,1,180,0,0,51.5,45);

	this.instance_163 = new lib.wall_hyphen_right_dot_png();
	this.instance_163.setTransform(1043.4,613.7,1,1,180,0,0,51.5,45);

	this.instance_164 = new lib.wall_hyphen_right_dot_png();
	this.instance_164.setTransform(1224.7,1052.1,1,1,180,0,0,51.5,45);

	this.instance_165 = new lib.wall_hyphen_right_dot_png();
	this.instance_165.setTransform(1224.7,1139.4,1,1,180,0,0,51.5,45);

	this.instance_166 = new lib.wall_hyphen_right_dot_png();
	this.instance_166.setTransform(1224.7,1227.5,1,1,180,0,0,51.5,45);

	this.instance_167 = new lib.wall_hyphen_right_dot_png();
	this.instance_167.setTransform(1224.7,1312,1,1,180,0,0,51.5,45);

	this.instance_168 = new lib.wall_hyphen_right_dot_png();
	this.instance_168.setTransform(1224.7,1400.2,1,1,180,0,0,51.5,45);

	this.instance_169 = new lib.wall_hyphen_right_dot_png();
	this.instance_169.setTransform(1224.7,1487.4,1,1,180,0,0,51.5,45);

	this.instance_170 = new lib.wall_hyphen_right_dot_png();
	this.instance_170.setTransform(1224.7,1575.6,1,1,180,0,0,51.5,45);

	this.instance_171 = new lib.wall_hyphen_right_dot_png();
	this.instance_171.setTransform(1224.7,1661.1,1,1,180,0,0,51.5,45);

	this.instance_172 = new lib.wall_hyphen_right_dot_png();
	this.instance_172.setTransform(1224.7,1749.2,1,1,180,0,0,51.5,45);

	this.instance_173 = new lib.wall_hyphen_right_dot_png();
	this.instance_173.setTransform(1224.7,1836.5,1,1,180,0,0,51.5,45);

	this.instance_174 = new lib.wall_hyphen_right_dot_png();
	this.instance_174.setTransform(1224.7,1924.6,1,1,180,0,0,51.5,45);

	this.instance_175 = new lib.wall_hyphen_right_dot_png();
	this.instance_175.setTransform(-310.6,2028.8,1,1,0,0,0,51.5,45);

	this.instance_176 = new lib.wall_hyphen_right_dot_png();
	this.instance_176.setTransform(-310.6,1940.7,1,1,0,0,0,51.5,45);

	this.instance_177 = new lib.wall_hyphen_right_dot_png();
	this.instance_177.setTransform(-310.6,1855.9,1,1,0,0,0,51.5,45);

	this.instance_178 = new lib.wall_hyphen_right_dot_png();
	this.instance_178.setTransform(-310.6,1767.7,1,1,0,0,0,51.5,45);

	this.instance_179 = new lib.wall_hyphen_right_dot_png();
	this.instance_179.setTransform(-310.6,1682.2,1,1,0,0,0,51.5,45);

	this.instance_180 = new lib.wall_hyphen_right_dot_png();
	this.instance_180.setTransform(-310.6,1594.1,1,1,0,0,0,51.5,45);

	this.instance_181 = new lib.wall_hyphen_right_dot_png();
	this.instance_181.setTransform(-310.6,1505.6,1,1,0,0,0,51.5,45);

	this.instance_182 = new lib.wall_hyphen_right_dot_png();
	this.instance_182.setTransform(-310.6,1417.5,1,1,0,0,0,51.5,45);

	this.instance_183 = new lib.wall_hyphen_right_dot_png();
	this.instance_183.setTransform(-310.6,1162,1,1,0,0,0,51.5,45);

	this.instance_184 = new lib.wall_hyphen_right_dot_png();
	this.instance_184.setTransform(-310.6,1073.9,1,1,0,0,0,51.5,45);

	this.instance_185 = new lib.wall_hyphen_right_dot_png();
	this.instance_185.setTransform(-310.6,988.4,1,1,0,0,0,51.5,45);

	this.instance_186 = new lib.wall_hyphen_right_dot_png();
	this.instance_186.setTransform(-310.6,900.2,1,1,0,0,0,51.5,45);

	this.instance_187 = new lib.wall_hyphen_right_dot_png();
	this.instance_187.setTransform(-310.6,813,1,1,0,0,0,51.5,45);

	this.instance_188 = new lib.wall_hyphen_right_dot_png();
	this.instance_188.setTransform(-310.6,724.8,1,1,0,0,0,51.5,45);

	this.instance_189 = new lib.wall_hyphen_right_dot_png();
	this.instance_189.setTransform(-310,635.9,1,1,0,0,0,51.5,45);

	this.instance_190 = new lib.wall_hyphen_right_dot_png();
	this.instance_190.setTransform(-310,547.8,1,1,0,0,0,51.5,45);

	this.instance_191 = new lib.wall_hyphen_right_dot_png();
	this.instance_191.setTransform(-310,460.5,1,1,0,0,0,51.5,45);

	this.instance_192 = new lib.wall_hyphen_right_dot_png();
	this.instance_192.setTransform(-309.9,195.6,1,1,0,0,0,51.5,45);

	this.instance_193 = new lib.wall_hyphen_right_dot_png();
	this.instance_193.setTransform(-309.9,108.4,1,1,0,0,0,51.5,45);

	this.instance_194 = new lib.wall_hyphen_right_dot_png();
	this.instance_194.setTransform(-309.9,20.2,1,1,0,0,0,51.5,45);

	this.instance_195 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_195.setTransform(-457.6,238.2,1,1,0,0,0,52.5,110.5);

	this.instance_196 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_196.setTransform(-402.5,237,1,1,0,0,0,52.5,110.5);

	this.instance_197 = new lib.wall_hyphen_right_dot_png();
	this.instance_197.setTransform(1138.4,614.3,1,1,180,0,0,51.5,45);

	this.instance_198 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_198.setTransform(395.8,689.8,1,1,0,0,0,60.5,41.5);

	this.instance_199 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_199.setTransform(444.9,1624.2,1,1,0,0,0,61.8,36.4);

	this.instance_200 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_200.setTransform(1128.3,1705.9,1.293,1.293,0,0,0,52.5,110.5);

	this.instance_201 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_201.setTransform(300.5,434.5,1.075,1,0,0,0,60.5,36);

	this.instance_202 = new lib.bush_hyphen_platform_hyphen_block_dot_png();
	this.instance_202.setTransform(597.6,341.4,0.777,0.777,0,0,0,42,88.5);

	this.instance_203 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_203.setTransform(-233.2,438.9,1,1,0,0,0,60.5,41.5);

	this.instance_204 = new lib.moss_dot_png();
	this.instance_204.setTransform(1139,1850.4,1,1,0,0,0,40.5,27.5);

	this.instance_205 = new lib.water_hyphen_bottom_dot_png();
	this.instance_205.setTransform(-224.2,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_206 = new lib.water_hyphen_bottom_dot_png();
	this.instance_206.setTransform(1189.1,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_207 = new lib.water_hyphen_bottom_dot_png();
	this.instance_207.setTransform(1093.6,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_208 = new lib.water_hyphen_bottom_dot_png();
	this.instance_208.setTransform(999.2,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_209 = new lib.water_hyphen_bottom_dot_png();
	this.instance_209.setTransform(903.7,2109.2,1,1,0,0,0,49.5,49.5);

	this.instance_210 = new lib.water_hyphen_top_dot_png();
	this.instance_210.setTransform(-219.2,2101.1,1,1,0,0,0,49.5,50);

	this.instance_211 = new lib.water_hyphen_top_dot_png();
	this.instance_211.setTransform(-123.2,2101.1,1,1,0,0,0,49.5,50);

	this.instance_212 = new lib.water_hyphen_top_dot_png();
	this.instance_212.setTransform(-27,2101.1,1,1,0,0,0,49.5,50);

	this.instance_213 = new lib.water_hyphen_top_dot_png();
	this.instance_213.setTransform(69,2101.1,1,1,0,0,0,49.5,50);

	this.instance_214 = new lib.water_hyphen_top_dot_png();
	this.instance_214.setTransform(164.1,2101.1,1,1,0,0,0,49.5,50);

	this.instance_215 = new lib.water_hyphen_top_dot_png();
	this.instance_215.setTransform(260.1,2101.1,1,1,0,0,0,49.5,50);

	this.instance_216 = new lib.water_hyphen_top_dot_png();
	this.instance_216.setTransform(356.3,2101.1,1,1,0,0,0,49.5,50);

	this.instance_217 = new lib.water_hyphen_top_dot_png();
	this.instance_217.setTransform(452.3,2101.1,1,1,0,0,0,49.5,50);

	this.instance_218 = new lib.water_hyphen_top_dot_png();
	this.instance_218.setTransform(547.6,2100.3,1,1,0,0,0,49.5,50);

	this.instance_219 = new lib.water_hyphen_top_dot_png();
	this.instance_219.setTransform(643.6,2100.3,1,1,0,0,0,49.5,50);

	this.instance_220 = new lib.water_hyphen_top_dot_png();
	this.instance_220.setTransform(739.8,2100.3,1,1,0,0,0,49.5,50);

	this.instance_221 = new lib.water_hyphen_top_dot_png();
	this.instance_221.setTransform(835.8,2100.3,1,1,0,0,0,49.5,50);

	this.instance_222 = new lib.water_hyphen_top_dot_png();
	this.instance_222.setTransform(932,2100.3,1,1,0,0,0,49.5,50);

	this.instance_223 = new lib.water_hyphen_top_dot_png();
	this.instance_223.setTransform(1028,2100.3,1,1,0,0,0,49.5,50);

	this.instance_224 = new lib.water_hyphen_top_dot_png();
	this.instance_224.setTransform(1124.2,2100.3,1,1,0,0,0,49.5,50);

	this.instance_225 = new lib.water_hyphen_top_dot_png();
	this.instance_225.setTransform(1220.2,2100.3,1,1,0,0,0,49.5,50);

	this.instance_226 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_226.setTransform(-224.2,1315.5,0.972,1,0,0,0,60.6,41.5);

	this.instance_227 = new lib.endpole_dot_png();
	this.instance_227.setTransform(-208,1249.6,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_228 = new lib.endpole_dot_png();
	this.instance_228.setTransform(-90.5,1568.2,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_229 = new lib.endpole_dot_png();
	this.instance_229.setTransform(-18,2026.9,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_230 = new lib.endpole_dot_png();
	this.instance_230.setTransform(816.8,2028.1,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_231 = new lib.endpole_dot_png();
	this.instance_231.setTransform(393.2,2028.1,0.873,0.873,0,0,0,8.1,39.5);

	this.addChild(this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.isDisp,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-515.1,-64.1,1947.2,2225.7);


(lib.itemSwitch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.isSwitch = new lib.blankMarker();
	this.isSwitch.setTransform(-0.9,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.isSwitch).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,28,28);


(lib.floor = function() {
	this.initialize();

	// Layer 1
	this.isFloor = new lib.blankMarker();
	this.isFloor.setTransform(-3,-2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8B8IAAj4ID4AAIAAD4g");
	this.shape.setTransform(-37.5,-37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999900").s().p("AnzH0IAArtID6AAIAAj6ILtAAIAAPng");

	this.addChild(this.shape_1,this.shape,this.isFloor);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.fixture = function() {
	this.initialize();

	// Layer 1
	this.isFixture = new lib.blankMarker();
	this.isFixture.setTransform(-3,-2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999900").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isFixture);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.exit = function() {
	this.initialize();

	// Layer 1
	this.isExit = new lib.blankMarker();
	this.isExit.setTransform(-3,21.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC99CC").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isExit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.deadZone = function() {
	this.initialize();

	// Layer 1
	this.isDeath = new lib.blankMarker();
	this.isDeath.setTransform(-3,21.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isDeath);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.waterWheel = function() {
	this.initialize();

	// isPin
	this.isPin = new lib.blankMarker();
	this.isPin.setTransform(-0.5,-0.6,0.52,0.52);

	// fixture
	this.instance = new lib.fixture();
	this.instance.setTransform(52.5,122.8,0.041,1.133,-113.2);

	// fixture
	this.instance_1 = new lib.fixture();
	this.instance_1.setTransform(123.6,49.9,0.041,1.093,-157.2,0,0,0.5,0.1);

	// fixture
	this.instance_2 = new lib.fixture();
	this.instance_2.setTransform(125.3,-53.8,0.041,1.094,160);

	// fixture
	this.instance_3 = new lib.fixture();
	this.instance_3.setTransform(51.4,-126.6,0.041,1.133,110.3);

	// fixture
	this.instance_4 = new lib.fixture();
	this.instance_4.setTransform(-54.7,-125.6,0.041,1.133,69);

	// fixture
	this.instance_5 = new lib.fixture();
	this.instance_5.setTransform(-126.9,-52.5,0.041,1.133,19.6);

	// fixture
	this.instance_6 = new lib.fixture();
	this.instance_6.setTransform(-125.9,53.7,0.041,1.133,159);

	// fixture
	this.instance_7 = new lib.fixture();
	this.instance_7.setTransform(-51.1,125.2,0.041,1.133,111.1,0,0,0.2,-0.1);

	// fixture
	this.instance_8 = new lib.fixture();
	this.instance_8.setTransform(-91.8,-0.8,0.041,1.84,90,0,0,-1.2,-0.1);

	// fixture
	this.instance_9 = new lib.fixture();
	this.instance_9.setTransform(-67.4,-65.5,0.041,1.84,-45,0,0,-0.8,-0.1);

	// fixture
	this.instance_10 = new lib.fixture();
	this.instance_10.setTransform(-67,64.9,0.041,1.84,-135,0,0,0.8,-0.1);

	// fixture
	this.instance_11 = new lib.fixture();
	this.instance_11.setTransform(0.6,93.4,0.041,1.84,180,0,0,-1.2,-0.1);

	// fixture
	this.instance_12 = new lib.fixture();
	this.instance_12.setTransform(65.5,65,0.041,1.84,135,0,0,-0.8,-0.1);

	// fixture
	this.instance_13 = new lib.fixture();
	this.instance_13.setTransform(92.2,-0.8,0.041,1.84,90,0,0,-1.2,-0.1);

	// fixture
	this.instance_14 = new lib.fixture();
	this.instance_14.setTransform(65.1,-65.4,0.041,1.84,45,0,0,0,-0.1);

	// fixture
	this.instance_15 = new lib.fixture();
	this.instance_15.setTransform(-1,-91.7,0.041,1.84,0,0,0,0,-0.1);

	// isComplexShape
	this.isWaterWheel = new lib.blankMarker();
	this.isWaterWheel.setTransform(-16,28.9,0.52,0.52);

	this.addChild(this.isWaterWheel,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.isPin);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184,-183.5,368,368.7);


(lib.seeSaw = function() {
	this.initialize();

	// isPin
	this.isPin = new lib.blankMarker();
	this.isPin.setTransform(0,0,0.52,0.52);

	// fixture
	this.instance = new lib.fixture();
	this.instance.setTransform(-49.9,-0.8,0.041,1,90,0,0,-1.2,-0.1);

	// fixture
	this.instance_1 = new lib.fixture();
	this.instance_1.setTransform(50.2,-0.8,0.041,1,90,0,0,-1.2,-0.1);

	// isComplexShape
	this.isComplexShape = new lib.blankMarker();
	this.isComplexShape.setTransform(-16,28.9,0.52,0.52);

	this.addChild(this.isComplexShape,this.instance_1,this.instance,this.isPin);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100,-7.2,200.1,43.4);


(lib.level11Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance.setTransform(2429.4,3435.2,1,1,0,0,0,98.5,70);

	this.instance_1 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_1.setTransform(2429.4,3364.7,1,1,0,0,0,98.5,70);

	this.instance_2 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_2.setTransform(2429.4,3238.2,1,1,0,0,0,98.5,70);

	this.instance_3 = new lib.water_hyphen_middle_dot_png();
	this.instance_3.setTransform(270.7,3296.7,1,1,0,0,0,49.5,50);

	this.instance_4 = new lib.water_hyphen_middle_dot_png();
	this.instance_4.setTransform(176.1,3296.7,1,1,0,0,0,49.5,50);

	this.instance_5 = new lib.water_hyphen_middle_dot_png();
	this.instance_5.setTransform(145.7,3296.7,1,1,0,0,0,49.5,50);

	this.instance_6 = new lib.water_hyphen_middle_dot_png();
	this.instance_6.setTransform(51.2,3296.7,1,1,0,0,0,49.5,50);

	this.instance_7 = new lib.water_hyphen_middle_dot_png();
	this.instance_7.setTransform(488.6,3296.7,1,1,0,0,0,49.5,50);

	this.instance_8 = new lib.water_hyphen_middle_dot_png();
	this.instance_8.setTransform(394,3296.7,1,1,0,0,0,49.5,50);

	this.instance_9 = new lib.water_hyphen_middle_dot_png();
	this.instance_9.setTransform(363.6,3296.7,1,1,0,0,0,49.5,50);

	this.instance_10 = new lib.water_hyphen_middle_dot_png();
	this.instance_10.setTransform(269.1,3296.7,1,1,0,0,0,49.5,50);

	this.instance_11 = new lib.water_hyphen_middle_dot_png();
	this.instance_11.setTransform(797.9,3294.3,1,1,0,0,0,49.5,50);

	this.instance_12 = new lib.water_hyphen_middle_dot_png();
	this.instance_12.setTransform(703.3,3294.3,1,1,0,0,0,49.5,50);

	this.instance_13 = new lib.water_hyphen_middle_dot_png();
	this.instance_13.setTransform(672.9,3294.3,1,1,0,0,0,49.5,50);

	this.instance_14 = new lib.water_hyphen_middle_dot_png();
	this.instance_14.setTransform(578.4,3294.3,1,1,0,0,0,49.5,50);

	this.instance_15 = new lib.water_hyphen_middle_dot_png();
	this.instance_15.setTransform(270.7,3213.4,1,1,0,0,0,49.5,50);

	this.instance_16 = new lib.water_hyphen_middle_dot_png();
	this.instance_16.setTransform(176.1,3213.4,1,1,0,0,0,49.5,50);

	this.instance_17 = new lib.water_hyphen_middle_dot_png();
	this.instance_17.setTransform(145.7,3213.4,1,1,0,0,0,49.5,50);

	this.instance_18 = new lib.water_hyphen_middle_dot_png();
	this.instance_18.setTransform(51.2,3213.4,1,1,0,0,0,49.5,50);

	this.instance_19 = new lib.water_hyphen_middle_dot_png();
	this.instance_19.setTransform(488.6,3213.4,1,1,0,0,0,49.5,50);

	this.instance_20 = new lib.water_hyphen_middle_dot_png();
	this.instance_20.setTransform(394,3213.4,1,1,0,0,0,49.5,50);

	this.instance_21 = new lib.water_hyphen_middle_dot_png();
	this.instance_21.setTransform(363.6,3213.4,1,1,0,0,0,49.5,50);

	this.instance_22 = new lib.water_hyphen_middle_dot_png();
	this.instance_22.setTransform(269.1,3213.4,1,1,0,0,0,49.5,50);

	this.instance_23 = new lib.water_hyphen_middle_dot_png();
	this.instance_23.setTransform(797.9,3215,1,1,0,0,0,49.5,50);

	this.instance_24 = new lib.water_hyphen_middle_dot_png();
	this.instance_24.setTransform(703.3,3215,1,1,0,0,0,49.5,50);

	this.instance_25 = new lib.water_hyphen_middle_dot_png();
	this.instance_25.setTransform(672.9,3215,1,1,0,0,0,49.5,50);

	this.instance_26 = new lib.water_hyphen_middle_dot_png();
	this.instance_26.setTransform(578.4,3215,1,1,0,0,0,49.5,50);

	this.instance_27 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_27.setTransform(865.8,3372.5,0.85,0.797,0,0,0,25,69.9);

	this.instance_28 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_28.setTransform(1940.7,3361.6,1,1,0,0,0,98.5,70);

	this.instance_29 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_29.setTransform(1746.9,3361.6,1,1,0,0,0,98.5,70);

	this.instance_30 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_30.setTransform(1560,3361.6,1,1,0,0,0,98.5,70);

	this.instance_31 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_31.setTransform(1366.2,3361.6,1,1,0,0,0,98.5,70);

	this.instance_32 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_32.setTransform(1175.6,3361.6,1,1,0,0,0,98.5,70);

	this.instance_33 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_33.setTransform(981.8,3358.3,1,1,0,0,0,98.5,70);

	this.instance_34 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_34.setTransform(865.8,3344.9,0.85,0.797,0,0,0,25,69.9);

	this.instance_35 = new lib.water_hyphen_bottom_dot_png();
	this.instance_35.setTransform(903.6,3357.2,1.236,1.136,0,0,0,49.5,49.6);

	this.instance_36 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_36.setTransform(2303.3,3361.6,1,1,0,0,0,98.5,70);

	this.instance_37 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_37.setTransform(2134.5,3361.6,1,1,0,0,0,98.5,70);

	this.instance_38 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_38.setTransform(2146.5,3121.4,1,1,0,0,0,34.5,46.5);

	this.instance_39 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_39.setTransform(2039.2,3120.4,1,1,0,0,0,98.5,47.5);

	this.instance_40 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_40.setTransform(865.8,3239.5,0.85,0.797,0,0,0,25,69.9);

	this.instance_41 = new lib.leaves1_dot_png();
	this.instance_41.setTransform(1686.4,2414.4,0.73,0.73,0,0,0,18.5,15);

	this.instance_42 = new lib.leaves2_dot_png();
	this.instance_42.setTransform(1841.5,2432.9,1,1,-19.2,0,0,22.1,20);

	this.instance_43 = new lib.moss_dot_png();
	this.instance_43.setTransform(1110.2,2789.4,0.591,0.591,0,0,0,40.6,27.5);

	this.instance_44 = new lib.water_hyphen_top_dot_png();
	this.instance_44.setTransform(578.4,3123.7,1,1,0,0,0,49.5,50);

	this.instance_45 = new lib.moss_dot_png();
	this.instance_45.setTransform(575.8,3064,0.636,0.636,-89.5,0,0,40.4,27.5);

	this.instance_46 = new lib.leaves1_dot_png();
	this.instance_46.setTransform(882.7,3073,1,1,0,0,0,18.5,15);

	this.instance_47 = new lib.water_hyphen_top_dot_png();
	this.instance_47.setTransform(712.1,3123.7,1,1,0,0,0,49.5,50);

	this.instance_48 = new lib.hazardsign_dot_png();
	this.instance_48.setTransform(701.4,3016.5,0.647,0.647,0,0,0,51,46);

	this.instance_49 = new lib.endpole_dot_png();
	this.instance_49.setTransform(703.1,3072,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_50 = new lib.water_hyphen_top_dot_png();
	this.instance_50.setTransform(666.5,3123.7,1,1,0,0,0,49.5,50);

	this.instance_51 = new lib.water_hyphen_top_dot_png();
	this.instance_51.setTransform(490.9,3123.7,1,1,0,0,0,49.5,50);

	this.instance_52 = new lib.water_hyphen_top_dot_png();
	this.instance_52.setTransform(402.7,3123.7,1,1,0,0,0,49.5,50);

	this.instance_53 = new lib.water_hyphen_top_dot_png();
	this.instance_53.setTransform(314.7,3123.7,1,1,0,0,0,49.5,50);

	this.instance_54 = new lib.water_hyphen_top_dot_png();
	this.instance_54.setTransform(226.6,3123.7,1,1,0,0,0,49.5,50);

	this.instance_55 = new lib.water_hyphen_top_dot_png();
	this.instance_55.setTransform(139.1,3123.7,1,1,0,0,0,49.5,50);

	this.instance_56 = new lib.water_hyphen_top_dot_png();
	this.instance_56.setTransform(50.9,3123.7,1,1,0,0,0,49.5,50);

	this.instance_57 = new lib.dirt4_dot_png();
	this.instance_57.setTransform(182.5,3071,1,1,0,0,0,121.5,37.5);

	this.instance_58 = new lib.dirt1_dot_png();
	this.instance_58.setTransform(508.3,3074,1,1,-8.2,0,0,55,87);

	this.instance_59 = new lib.dirt4_dot_png();
	this.instance_59.setTransform(478.9,2041.6,1,1,0,0,0,121.5,37.5);

	this.instance_60 = new lib.dirt3_dot_png();
	this.instance_60.setTransform(130.7,1656.5,0.503,0.503,0,0,0,55.1,88);

	this.instance_61 = new lib.dirt4_dot_png();
	this.instance_61.setTransform(369.4,795.7,1,1,-101.3,0,0,121.6,37.5);

	this.instance_62 = new lib.dirt1_dot_png();
	this.instance_62.setTransform(522.8,1150.5,0.468,0.468,0,0,0,55.1,87);

	this.instance_63 = new lib.leaves1_dot_png();
	this.instance_63.setTransform(1008.2,561.4,0.662,0.662,81.7,0,0,18.6,15.1);

	this.instance_64 = new lib.leaves2_dot_png();
	this.instance_64.setTransform(931.7,392.5,1,1,0,0,0,22,20);

	this.instance_65 = new lib.dirt4_dot_png();
	this.instance_65.setTransform(335.2,459.9,1,1,0,0,0,121.5,37.5);

	this.instance_66 = new lib.dirt3_dot_png();
	this.instance_66.setTransform(119.6,581.7,0.899,0.899,86,0,0,55,88);

	this.level11platform = new lib.level11movingitem();
	this.level11platform.setTransform(1410.7,2818.2);

	this.instance_67 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_67.setTransform(-54.5,2316.8,1,1,0,0,0,98.5,70);

	this.instance_68 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_68.setTransform(138.6,2316.8,1,1,0,0,0,98.5,70);

	this.instance_69 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_69.setTransform(266.8,2316.8,1,1,0,0,0,98.5,70);

	this.instance_70 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_70.setTransform(459.9,2316.8,1,1,0,0,0,98.5,70);

	this.instance_71 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_71.setTransform(576.2,2320.1,1.145,1,-7.5,0,0,25.9,70);

	this.instance_72 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_72.setTransform(72.3,2211.4,1,1,0,0,0,98.5,47.5);

	this.instance_73 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_73.setTransform(261,2209.4,1,1,0,0,0,98.5,47.5);

	this.instance_74 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_74.setTransform(451.5,2209.4,1,1,0,0,0,98.5,47.5);

	this.instance_75 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_75.setTransform(579.2,2210.4,1,1,0,0,0,34.5,46.5);

	this.instance_76 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_76.setTransform(571.6,1303.7,1,1,-4.7,0,0,26,70);

	this.instance_77 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_77.setTransform(476.3,1311.6,1,1,0,0,0,98.5,70);

	this.instance_78 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_78.setTransform(-25.7,1313.1,1,1,0,0,0,98.5,70);

	this.instance_79 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_79.setTransform(126.5,1313.1,1,1,0,0,0,98.5,70);

	this.instance_80 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_80.setTransform(312.2,1309.6,1,1,0,0,0,98.5,70);

	this.instance_81 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_81.setTransform(78.6,1200,1,1,0,0,0,98.5,47.5);

	this.instance_82 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_82.setTransform(261,1200,1,1,0,0,0,98.5,47.5);

	this.instance_83 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_83.setTransform(447.8,1200,1,1,0,0,0,98.5,47.5);

	this.instance_84 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_84.setTransform(577.1,1201,1,1,0,0,0,34.5,46.5);

	this.instance_85 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_85.setTransform(571.6,1119.8,1.033,1.033,-6.2,0,0,24.9,49);

	this.instance_86 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_86.setTransform(93.5,1123.9,1,1,0,0,0,98.5,49);

	this.instance_87 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_87.setTransform(280.6,1123.9,1,1,0,0,0,98.5,49);

	this.instance_88 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_88.setTransform(467.2,1123.9,1,1,0,0,0,98.5,49);

	this.instance_89 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_89.setTransform(4.5,662.4,1,1,0,0,0,38,47.5);

	this.instance_90 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_90.setTransform(134.6,662.4,1,1,0,0,0,98.5,47.5);

	this.instance_91 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_91.setTransform(258.9,662.4,1,1,0,0,0,98.5,47.5);

	this.instance_92 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_92.setTransform(449.9,662.4,1,1,0,0,0,98.5,47.5);

	this.instance_93 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_93.setTransform(577.1,661.4,1,1,-4,0,0,34.5,46.5);

	this.instance_94 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_94.setTransform(95.7,609.7,1,1,0,0,0,98.5,49);

	this.instance_95 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_95.setTransform(282.8,609.7,1,1,0,0,0,98.5,49);

	this.instance_96 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_96.setTransform(469.4,609.7,1,1,0,0,0,98.5,49);

	this.instance_97 = new lib.bush_hyphen_left_dot_png();
	this.instance_97.setTransform(915.2,445.9,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_98 = new lib.bush_hyphen_left_dot_png();
	this.instance_98.setTransform(915.2,515.9,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_99 = new lib.bush_hyphen_right_dot_png();
	this.instance_99.setTransform(996.5,440.6,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_100 = new lib.bush_hyphen_right_dot_png();
	this.instance_100.setTransform(996.5,515,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_101 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_101.setTransform(959.4,507.7,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_102 = new lib.bush_hyphen_right_dot_png();
	this.instance_102.setTransform(996.5,586.3,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_103 = new lib.bush_hyphen_left_dot_png();
	this.instance_103.setTransform(915.2,590.6,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_104 = new lib.bush_hyphen_left_dot_png();
	this.instance_104.setTransform(915.2,664,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_105 = new lib.bush_hyphen_left_dot_png();
	this.instance_105.setTransform(915.2,734,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_106 = new lib.bush_hyphen_right_dot_png();
	this.instance_106.setTransform(996.5,658.8,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_107 = new lib.bush_hyphen_right_dot_png();
	this.instance_107.setTransform(996.5,733.2,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_108 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_108.setTransform(959.4,725.8,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_109 = new lib.bush_hyphen_right_dot_png();
	this.instance_109.setTransform(996.5,804.4,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_110 = new lib.bush_hyphen_left_dot_png();
	this.instance_110.setTransform(915.2,808.8,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_111 = new lib.bush_hyphen_left_dot_png();
	this.instance_111.setTransform(915.2,876.8,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_112 = new lib.bush_hyphen_left_dot_png();
	this.instance_112.setTransform(915.2,946.8,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_113 = new lib.bush_hyphen_right_dot_png();
	this.instance_113.setTransform(996.5,871.6,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_114 = new lib.bush_hyphen_right_dot_png();
	this.instance_114.setTransform(996.5,946,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_115 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_115.setTransform(959.4,938.6,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_116 = new lib.bush_hyphen_right_dot_png();
	this.instance_116.setTransform(996.5,1017.2,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_117 = new lib.bush_hyphen_left_dot_png();
	this.instance_117.setTransform(915.2,1021.6,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_118 = new lib.bush_hyphen_left_dot_png();
	this.instance_118.setTransform(915.2,1090.7,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_119 = new lib.bush_hyphen_left_dot_png();
	this.instance_119.setTransform(915.2,1160.7,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_120 = new lib.bush_hyphen_right_dot_png();
	this.instance_120.setTransform(996.5,1085.5,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_121 = new lib.bush_hyphen_right_dot_png();
	this.instance_121.setTransform(996.5,1159.9,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_122 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_122.setTransform(959.4,1152.5,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_123 = new lib.bush_hyphen_right_dot_png();
	this.instance_123.setTransform(996.5,1231.1,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_124 = new lib.bush_hyphen_left_dot_png();
	this.instance_124.setTransform(915.2,1235.5,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_125 = new lib.bush_hyphen_left_dot_png();
	this.instance_125.setTransform(915.2,1308.9,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_126 = new lib.bush_hyphen_left_dot_png();
	this.instance_126.setTransform(915.2,1378.9,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_127 = new lib.bush_hyphen_right_dot_png();
	this.instance_127.setTransform(996.5,1303.6,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_128 = new lib.bush_hyphen_right_dot_png();
	this.instance_128.setTransform(996.5,1378,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_129 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_129.setTransform(959.4,1370.7,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_130 = new lib.bush_hyphen_right_dot_png();
	this.instance_130.setTransform(996.5,1449.3,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_131 = new lib.bush_hyphen_left_dot_png();
	this.instance_131.setTransform(915.2,1453.6,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_132 = new lib.bush_hyphen_left_dot_png();
	this.instance_132.setTransform(915.2,1521.7,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_133 = new lib.bush_hyphen_left_dot_png();
	this.instance_133.setTransform(915.2,1591.7,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_134 = new lib.bush_hyphen_right_dot_png();
	this.instance_134.setTransform(996.5,1516.4,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_135 = new lib.bush_hyphen_right_dot_png();
	this.instance_135.setTransform(996.5,1590.8,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_136 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_136.setTransform(959.4,1583.5,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_137 = new lib.bush_hyphen_right_dot_png();
	this.instance_137.setTransform(996.5,1662.1,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_138 = new lib.bush_hyphen_left_dot_png();
	this.instance_138.setTransform(915.2,1666.4,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_139 = new lib.bush_hyphen_left_dot_png();
	this.instance_139.setTransform(915.2,1739.8,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_140 = new lib.bush_hyphen_left_dot_png();
	this.instance_140.setTransform(915.2,1809.8,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_141 = new lib.bush_hyphen_right_dot_png();
	this.instance_141.setTransform(996.5,1734.6,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_142 = new lib.bush_hyphen_right_dot_png();
	this.instance_142.setTransform(996.5,1809,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_143 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_143.setTransform(959.4,1801.6,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_144 = new lib.bush_hyphen_right_dot_png();
	this.instance_144.setTransform(996.5,1880.2,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_145 = new lib.bush_hyphen_left_dot_png();
	this.instance_145.setTransform(915.2,1884.6,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_146 = new lib.bush_hyphen_left_dot_png();
	this.instance_146.setTransform(915.2,1952.3,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_147 = new lib.bush_hyphen_left_dot_png();
	this.instance_147.setTransform(915.2,2022.3,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_148 = new lib.bush_hyphen_right_dot_png();
	this.instance_148.setTransform(996.5,1947,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_149 = new lib.bush_hyphen_right_dot_png();
	this.instance_149.setTransform(996.5,2021.4,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_150 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_150.setTransform(959.4,2014.1,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_151 = new lib.bush_hyphen_right_dot_png();
	this.instance_151.setTransform(996.5,2092.7,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_152 = new lib.bush_hyphen_left_dot_png();
	this.instance_152.setTransform(915.2,2097,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_153 = new lib.bush_hyphen_left_dot_png();
	this.instance_153.setTransform(915.2,2170.4,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_154 = new lib.bush_hyphen_left_dot_png();
	this.instance_154.setTransform(915.2,2240.4,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_155 = new lib.bush_hyphen_right_dot_png();
	this.instance_155.setTransform(996.5,2165.2,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_156 = new lib.bush_hyphen_right_dot_png();
	this.instance_156.setTransform(996.5,2239.6,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_157 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_157.setTransform(959.4,2232.2,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_158 = new lib.bush_hyphen_right_dot_png();
	this.instance_158.setTransform(996.5,2310.8,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_159 = new lib.bush_hyphen_left_dot_png();
	this.instance_159.setTransform(915.2,2315.2,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_160 = new lib.bush_hyphen_left_dot_png();
	this.instance_160.setTransform(915.2,2383.2,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_161 = new lib.bush_hyphen_left_dot_png();
	this.instance_161.setTransform(915.2,2453.2,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_162 = new lib.bush_hyphen_right_dot_png();
	this.instance_162.setTransform(996.5,2378,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_163 = new lib.bush_hyphen_right_dot_png();
	this.instance_163.setTransform(996.5,2452.4,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_164 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_164.setTransform(959.4,2445,0.555,0.555,-90,0,0,213.5,64.5);

	this.instance_165 = new lib.bush_hyphen_right_dot_png();
	this.instance_165.setTransform(996.5,2523.6,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_166 = new lib.bush_hyphen_left_dot_png();
	this.instance_166.setTransform(915.2,2528,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_167 = new lib.bush_hyphen_left_dot_png();
	this.instance_167.setTransform(915.2,2601.4,0.605,0.605,0,0,0,28.5,64.5);

	this.instance_168 = new lib.bush_hyphen_left_dot_png();
	this.instance_168.setTransform(915.2,2660.8,0.605,0.442,0,0,0,28.5,64.5);

	this.instance_169 = new lib.bush_hyphen_right_dot_png();
	this.instance_169.setTransform(996.5,2596.1,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_170 = new lib.bush_hyphen_right_dot_png();
	this.instance_170.setTransform(996.5,2670.5,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_171 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_171.setTransform(1591,2419.5,0.579,0.579,0,0,0,63,20.9);

	this.instance_172 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_172.setTransform(1959.6,2418.7,1.008,0.904,0,0,0,50.5,21);

	this.instance_173 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_173.setTransform(1617.5,2446.1,0.99,0.99,0,0,0,63.6,16);

	this.instance_174 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_174.setTransform(1960,2445.1,0.937,0.937,0,0,0,51.1,15.9);

	this.instance_175 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_175.setTransform(1768.6,2446.9,0.928,1.014,0,0,0,155.6,16.5);

	this.instance_176 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_176.setTransform(1772.2,2421.8,1.054,1.054,0,0,0,155.6,21);

	this.instance_177 = new lib.hay_hyphen_cube_dot_png();
	this.instance_177.setTransform(1625.2,2811.3,1,1,0,0,0,45.5,46.5);

	this.instance_178 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_178.setTransform(967.8,2746.4,0.419,0.419,45,0,0,63.1,21);

	this.instance_179 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_179.setTransform(1193.9,2782.4,0.729,0.654,0,0,0,50.5,21);

	this.instance_180 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_180.setTransform(967.8,2773.4,0.716,0.716,45,0,0,63.5,16);

	this.instance_181 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_181.setTransform(1194.7,2801.6,0.678,0.678,0,0,0,51.1,16);

	this.instance_182 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_182.setTransform(1074.2,2802.8,0.553,0.733,0,0,0,155.6,16.5);

	this.instance_183 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_183.setTransform(2429.4,2888.2,1,1,0,0,0,98.5,70);

	this.instance_184 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_184.setTransform(2236.9,2888.2,1,1,0,0,0,98.5,70);

	this.instance_185 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_185.setTransform(2117.3,2888.2,1,1,0,0,0,25,70);

	this.instance_186 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_186.setTransform(2423.8,2772.4,1,1,0,0,0,98.5,47.5);

	this.instance_187 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_187.setTransform(2236.9,2772.4,1,1,0,0,0,98.5,47.5);

	this.instance_188 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_188.setTransform(2104.7,2772.4,1,1,0,0,0,38,47.5);

	this.instance_189 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_189.setTransform(1940.7,3228.6,1,1,0,0,0,98.5,70);

	this.instance_190 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_190.setTransform(1746.9,3228.6,1,1,0,0,0,98.5,70);

	this.instance_191 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_191.setTransform(1560,3228.6,1,1,0,0,0,98.5,70);

	this.instance_192 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_192.setTransform(1366.2,3228.6,1,1,0,0,0,98.5,70);

	this.instance_193 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_193.setTransform(1175.6,3228.6,1,1,0,0,0,98.5,70);

	this.instance_194 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_194.setTransform(981.8,3225.3,1,1,0,0,0,98.5,70);

	this.instance_195 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_195.setTransform(865.8,3211.9,0.85,0.797,0,0,0,25,69.9);

	this.instance_196 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_196.setTransform(1925.2,3120.4,1,1,0,0,0,98.5,47.5);

	this.instance_197 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_197.setTransform(1765.4,3120.4,1,1,0,0,0,98.5,47.5);

	this.instance_198 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_198.setTransform(1572.2,3120.4,1,1,0,0,0,98.5,47.5);

	this.instance_199 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_199.setTransform(1378.4,3120.4,1,1,0,0,0,98.5,47.5);

	this.instance_200 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_200.setTransform(1184.7,3120.4,1,1,0,0,0,98.5,47.5);

	this.instance_201 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_201.setTransform(990.9,3117.4,1,1,0,0,0,98.5,47.5);

	this.instance_202 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_202.setTransform(856.3,3114.4,1,1,0,0,0,38,47.5);

	this.instance_203 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_203.setTransform(-62.4,1010.8,1,1,0,0,0,98.5,70);

	this.instance_204 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_204.setTransform(454.1,498.9,1,1,0,0,0,98.5,70);

	this.instance_205 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_205.setTransform(-62.4,766.8,1,1,0,0,0,98.5,70);

	this.instance_206 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_206.setTransform(130.7,766.8,1,1,0,0,0,98.5,70);

	this.instance_207 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_207.setTransform(258.9,766.8,1,1,0,0,0,98.5,70);

	this.instance_208 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_208.setTransform(-62.4,882.4,1,1,0,0,0,98.5,70);

	this.instance_209 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_209.setTransform(130.7,882.4,1,1,0,0,0,98.5,70);

	this.instance_210 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_210.setTransform(258.9,882.4,1,1,0,0,0,98.5,70);

	this.instance_211 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_211.setTransform(-66.6,1988.6,1,1,0,0,0,98.5,70);

	this.instance_212 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_212.setTransform(128.6,1860.8,1,1,0,0,0,98.5,70);

	this.instance_213 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_213.setTransform(128.6,1636.2,1,1,0,0,0,98.5,70);

	this.instance_214 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_214.setTransform(-64.5,1507.8,1,1,0,0,0,98.5,70);

	this.instance_215 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_215.setTransform(128.6,1507.8,1,1,0,0,0,98.5,70);

	this.instance_216 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_216.setTransform(256.8,1860.8,1,1,0,0,0,98.5,70);

	this.instance_217 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_217.setTransform(449.9,1860.8,1,1,0,0,0,98.5,70);

	this.instance_218 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_218.setTransform(570.7,1861.8,1.144,1,-2,0,0,25.9,70);

	this.instance_219 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_219.setTransform(254.7,1988.6,1,1,0,0,0,98.5,70);

	this.instance_220 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_220.setTransform(447.8,1988.6,1,1,0,0,0,98.5,70);

	this.instance_221 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_221.setTransform(564.9,1988.8,1.071,1,6,0,0,25.9,70);

	this.instance_222 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_222.setTransform(466.3,2434.7,1,1,0,0,0,98.5,49);

	this.instance_223 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_223.setTransform(72.3,2871.8,1,1,0,0,0,98.5,49);

	this.instance_224 = new lib.water_hyphen_bottom_dot_png();
	this.instance_224.setTransform(903.6,3224.2,1.236,1.136,0,0,0,49.5,49.6);

	this.instance_225 = new lib.water_hyphen_bottom_dot_png();
	this.instance_225.setTransform(268.5,3398.8,1.136,1.136,0,0,0,49.5,49.6);

	this.instance_226 = new lib.water_hyphen_bottom_dot_png();
	this.instance_226.setTransform(375.1,3398.8,1.136,1.136,0,0,0,49.6,49.6);

	this.instance_227 = new lib.water_hyphen_bottom_dot_png();
	this.instance_227.setTransform(162.5,3398.8,1.136,1.136,0,0,0,49.5,49.6);

	this.instance_228 = new lib.water_hyphen_bottom_dot_png();
	this.instance_228.setTransform(56,3398.8,1.136,1.136,0,0,0,49.5,49.6);

	this.instance_229 = new lib.water_hyphen_bottom_dot_png();
	this.instance_229.setTransform(688.1,3398.8,1.136,1.136,0,0,0,49.5,49.6);

	this.instance_230 = new lib.water_hyphen_bottom_dot_png();
	this.instance_230.setTransform(794.5,3398.8,1.136,1.136,0,0,0,49.5,49.6);

	this.instance_231 = new lib.water_hyphen_bottom_dot_png();
	this.instance_231.setTransform(582,3398.8,1.136,1.136,0,0,0,49.5,49.6);

	this.instance_232 = new lib.water_hyphen_bottom_dot_png();
	this.instance_232.setTransform(475.6,3398.8,1.136,1.136,0,0,0,49.6,49.6);

	this.instance_233 = new lib.water_hyphen_top_dot_png();
	this.instance_233.setTransform(800.3,3123.7,1,1,0,0,0,49.5,50);

	this.instance_234 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_234.setTransform(-60.3,498.9,1,1,0,0,0,98.5,70);

	this.instance_235 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_235.setTransform(132.8,498.9,1,1,0,0,0,98.5,70);

	this.instance_236 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_236.setTransform(261,498.9,1,1,0,0,0,98.5,70);

	this.instance_237 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_237.setTransform(573.1,493.3,1,1,-2,0,0,26,70);

	this.instance_238 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_238.setTransform(579.2,384.3,1,1,0,0,0,34.5,46.5);

	this.instance_239 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_239.setTransform(337.6,383.3,1,1,0,0,0,98.5,47.5);

	this.instance_240 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_240.setTransform(146.3,383.3,1,1,0,0,0,98.5,47.5);

	this.instance_241 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_241.setTransform(-48.1,383.3,1,1,0,0,0,98.5,47.5);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_242 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_242.setTransform(454.1,383.3,1,1,0,0,0,98.5,47.5);

	this.instance_243 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_243.setTransform(452,766.8,1,1,0,0,0,98.5,70);

	this.instance_244 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_244.setTransform(573,766.4,1.025,1.025,-3.2,0,0,25.9,70);

	this.instance_245 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_245.setTransform(452,882.4,1,1,0,0,0,98.5,70);

	this.instance_246 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_246.setTransform(570.7,894.6,1,1,5.2,0,0,26,70);

	this.instance_247 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_247.setTransform(130.7,1010.8,1,1,0,0,0,98.5,70);

	this.instance_248 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_248.setTransform(258.9,1010.8,1,1,0,0,0,98.5,70);

	this.instance_249 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_249.setTransform(452,1010.8,1,1,0,0,0,98.5,70);

	this.instance_250 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_250.setTransform(568.6,1010.8,1,1,0,0,0,26,70);

	this.instance_251 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_251.setTransform(-64.5,1380.6,1,1,0,0,0,98.5,70);

	this.instance_252 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_252.setTransform(128.6,1380.6,1,1,0,0,0,98.5,70);

	this.instance_253 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_253.setTransform(256.8,1380.6,1,1,0,0,0,98.5,70);

	this.instance_254 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_254.setTransform(449.9,1380.6,1,1,0,0,0,98.5,70);

	this.instance_255 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_255.setTransform(572.2,1420,1.121,1,4.5,0,0,26,70);

	this.instance_256 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_256.setTransform(256.8,1507.8,1,1,0,0,0,98.5,70);

	this.instance_257 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_257.setTransform(449.9,1507.8,1,1,0,0,0,98.5,70);

	this.instance_258 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_258.setTransform(573.1,1510.4,1.24,1,-5.2,0,0,26,70);

	this.instance_259 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_259.setTransform(-64.5,1636.2,1,1,0,0,0,98.5,70);

	this.instance_260 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_260.setTransform(256.8,1636.2,1,1,0,0,0,98.5,70);

	this.instance_261 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_261.setTransform(449.9,1636.2,1,1,0,0,0,98.5,70);

	this.instance_262 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_262.setTransform(572.8,1637.7,1.169,1,3,0,0,26.1,70);

	this.instance_263 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_263.setTransform(-64.5,1747.4,1,1,0,0,0,98.5,70);

	this.instance_264 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_264.setTransform(128.6,1747.4,1,1,0,0,0,98.5,70);

	this.instance_265 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_265.setTransform(256.8,1747.4,1,1,0,0,0,98.5,70);

	this.instance_266 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_266.setTransform(449.9,1747.4,1,1,0,0,0,98.5,70);

	this.instance_267 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_267.setTransform(570.6,1753.1,1.121,1,0,0,0,26,70);

	this.instance_268 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_268.setTransform(263.3,2871.8,1,1,0,0,0,98.5,49);

	this.instance_269 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_269.setTransform(453.4,2871.8,1,1,0,0,0,98.5,49);

	this.instance_270 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_270.setTransform(573.3,2865.6,1.126,1,10,0,0,25.1,49);

	this.instance_271 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_271.setTransform(85.1,2434.7,1,1,0,0,0,98.5,49);

	this.instance_272 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_272.setTransform(276.1,2434.7,1,1,0,0,0,98.5,49);

	this.instance_273 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_273.setTransform(586.6,2434.7,1,1,0,0,0,25,49);

	this.instance_274 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_274.setTransform(85.1,2532.7,1,1,0,0,0,98.5,49);

	this.instance_275 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_275.setTransform(276.1,2532.7,1,1,0,0,0,98.5,49);

	this.instance_276 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_276.setTransform(466.3,2532.7,1,1,0,0,0,98.5,49);

	this.instance_277 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_277.setTransform(580,2525.9,1,1,6,0,0,25.1,49);

	this.instance_278 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_278.setTransform(-64.5,1860.8,1,1,0,0,0,98.5,70);

	this.instance_279 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_279.setTransform(126.5,1988.6,1,1,0,0,0,98.5,70);

	this.instance_280 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_280.setTransform(-66.6,2117.2,1,1,0,0,0,98.5,70);

	this.instance_281 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_281.setTransform(126.5,2117.2,1,1,0,0,0,98.5,70);

	this.instance_282 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_282.setTransform(254.7,2117.2,1,1,0,0,0,98.5,70);

	this.instance_283 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_283.setTransform(447.8,2117.2,1,1,0,0,0,98.5,70);

	this.instance_284 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_284.setTransform(564.1,2120.5,1.145,1,-7.5,0,0,25.9,70);

	this.instance_285 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_285.setTransform(2429.4,3019.9,1,1,0,0,0,98.5,70);

	this.instance_286 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_286.setTransform(2236.9,3019.9,1,1,0,0,0,98.5,70);

	this.instance_287 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_287.setTransform(2117.3,3019.9,1,1,0,0,0,25,70);

	this.instance_288 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_288.setTransform(2429.4,3110,1,1,0,0,0,98.5,70);

	this.instance_289 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_289.setTransform(2236.9,3110,1,1,0,0,0,98.5,70);

	this.instance_290 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_290.setTransform(2303.3,3228.6,1,1,0,0,0,98.5,70);

	this.instance_291 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_291.setTransform(2134.5,3150,1,1,0,0,0,98.5,70);

	this.instance_292 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_292.setTransform(2134.5,3228.6,1,1,0,0,0,98.5,70);

	this.instance_293 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_293.setTransform(1076.4,2784.6,0.645,0.762,0,0,0,155.5,21);

	this.instance_294 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_294.setTransform(959.4,2646.3,0.476,0.555,-90,0,0,213.6,64.5);

	this.instance_295 = new lib.bush_hyphen_right_dot_png();
	this.instance_295.setTransform(996.5,2741.8,0.619,0.619,0,0,0,29.5,64.5);

	this.instance_296 = new lib.bush_hyphen_left_dot_png();
	this.instance_296.setTransform(920.9,2715.4,0.605,0.442,-14.5,0,0,28.6,64.5);

	this.instance_297 = new lib.bush_hyphen_platform_hyphen_block_dot_png();
	this.instance_297.setTransform(958.6,400,1.214,1.155,0,0,0,42.1,88.5);

	this.instance_298 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_298.setTransform(569.9,600.1,1,1,6,0,0,25,49);

	this.instance_299 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_299.setTransform(258.1,2619.6,1,1,0,0,0,98.5,49);

	this.instance_300 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_300.setTransform(448.2,2619.6,1,1,0,0,0,98.5,49);

	this.instance_301 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_301.setTransform(568.6,2619.6,1,1,0,0,0,25,49);

	this.instance_302 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_302.setTransform(67.1,2619.6,1,1,0,0,0,98.5,49);

	this.instance_303 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_303.setTransform(80.2,2633.5,1,1,0,0,0,98.5,49);

	this.instance_304 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_304.setTransform(271.2,2633.5,1,1,0,0,0,98.5,49);

	this.instance_305 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_305.setTransform(461.3,2633.5,1,1,0,0,0,98.5,49);

	this.instance_306 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_306.setTransform(576.5,2620.6,1,1,0,0,0,25,49);

	this.instance_307 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_307.setTransform(73.4,2779,1,1,0,0,0,98.5,49);

	this.instance_308 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_308.setTransform(73.4,2698.1,1,1,0,0,0,98.5,49);

	this.instance_309 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_309.setTransform(264.4,2698.1,1,1,0,0,0,98.5,49);

	this.instance_310 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_310.setTransform(454.6,2698.1,1,1,0,0,0,98.5,49);

	this.instance_311 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_311.setTransform(574.9,2698.1,1,1,0,0,0,25,49);

	this.instance_312 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_312.setTransform(264.4,2779,1,1,0,0,0,98.5,49);

	this.instance_313 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_313.setTransform(454.6,2779,1,1,0,0,0,98.5,49);

	this.instance_314 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_314.setTransform(573.6,2776,1.229,1,-6.2,0,0,25.1,49);

	this.instance_315 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_315.setTransform(264.3,2952.6,1,1,0,0,0,98.5,49);

	this.instance_316 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_316.setTransform(454.4,2952.6,1,1,0,0,0,98.5,49);

	this.instance_317 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_317.setTransform(574.7,2952.7,1,1,-2,0,0,24.9,49.1);

	this.instance_318 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_318.setTransform(73.3,2952.6,1,1,0,0,0,98.5,49);

	this.instance_319 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_319.setTransform(264.3,3035.9,1,1,0,0,0,98.5,49);

	this.instance_320 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_320.setTransform(454.4,3035.9,1,1,0,0,0,98.5,49);

	this.instance_321 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_321.setTransform(574.1,3044.7,1.064,1.064,-6.7,0,0,25,49);

	this.instance_322 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_322.setTransform(73.3,3035.9,1,1,0,0,0,98.5,49);

	this.instance_323 = new lib.hay_dot_png();
	this.instance_323.setTransform(2347.9,2659.9,1.378,1.378,0,0,0,152,60);

	this.instance_324 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_324.setTransform(0.1,238.2,1,1,0,0,0,89.5,111);

	this.instance_325 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_325.setTransform(865.8,3441.4,0.85,0.797,0,0,0,25,69.9);

	this.instance_326 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_326.setTransform(1940.7,3430.5,1,1,0,0,0,98.5,70);

	this.instance_327 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_327.setTransform(1746.9,3430.5,1,1,0,0,0,98.5,70);

	this.instance_328 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_328.setTransform(1560,3430.5,1,1,0,0,0,98.5,70);

	this.instance_329 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_329.setTransform(1366.2,3430.5,1,1,0,0,0,98.5,70);

	this.instance_330 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_330.setTransform(1175.6,3430.5,1,1,0,0,0,98.5,70);

	this.instance_331 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_331.setTransform(981.8,3427.2,1,1,0,0,0,98.5,70);

	this.instance_332 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_332.setTransform(865.8,3413.8,0.85,0.797,0,0,0,25,69.9);

	this.instance_333 = new lib.water_hyphen_bottom_dot_png();
	this.instance_333.setTransform(903.6,3426.1,1.236,1.136,0,0,0,49.5,49.6);

	this.instance_334 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_334.setTransform(2303.3,3430.5,1,1,0,0,0,98.5,70);

	this.instance_335 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_335.setTransform(2134.5,3430.5,1,1,0,0,0,98.5,70);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,153,0.267)").s().p("AgJANQAAgEgDgCIgCgIQAAgCAGgGQAFgEADgBQALAEAEAIIgBANIgCACQgDACgJAAQgIAAgBgCg");
	this.shape.setTransform(860.7,3106.8);

	this.addChild(this.shape,this.instance_335,this.instance_334,this.instance_333,this.instance_332,this.instance_331,this.instance_330,this.instance_329,this.instance_328,this.instance_327,this.instance_326,this.instance_325,this.instance_324,this.instance_323,this.instance_322,this.instance_321,this.instance_320,this.instance_319,this.instance_318,this.instance_317,this.instance_316,this.instance_315,this.instance_314,this.instance_313,this.instance_312,this.instance_311,this.instance_310,this.instance_309,this.instance_308,this.instance_307,this.instance_306,this.instance_305,this.instance_304,this.instance_303,this.instance_302,this.instance_301,this.instance_300,this.instance_299,this.instance_298,this.instance_297,this.instance_296,this.instance_295,this.instance_294,this.instance_293,this.instance_292,this.instance_291,this.instance_290,this.instance_289,this.instance_288,this.instance_287,this.instance_286,this.instance_285,this.instance_284,this.instance_283,this.instance_282,this.instance_281,this.instance_280,this.instance_279,this.instance_278,this.instance_277,this.instance_276,this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.isDisp,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.level11platform,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165.1,-129.4,2722.5,3634.7);


(lib.level11 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.floor();
	this.instance.setTransform(996.5,1026.5,0.25,1.5);

	this.instance_1 = new lib.floor();
	this.instance_1.setTransform(923.4,1104.3,1.737,0.22);

	this.instance_2 = new lib.wall();
	this.instance_2.setTransform(392.9,1095,0.234,0.592,-44.5,0,0,0.3,0);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(465.1,1058.3,9.221,6.426,0,0,0,0.1,0.1);

	this.instance_3 = new lib.star();
	this.instance_3.setTransform(282,1138.1,0.25,0.25,0,0,0,-1,-3);

	this.instance_4 = new lib.star();
	this.instance_4.setTransform(430.1,1035.1,0.25,0.25,0,0,0,-1,-3);

	this.instance_5 = new lib.star();
	this.instance_5.setTransform(830.2,1047.2,0.25,0.25,0,0,0,-1,-3);

	this.instance_6 = new lib.wall();
	this.instance_6.setTransform(445.7,1117.2,0.834,0.165,0,0,0,-0.2,-0.3);

	this.instance_7 = new lib.exit();
	this.instance_7.setTransform(775,925,0.5,1);

	this.instance_8 = new lib.wallcopy();
	this.instance_8.setTransform(712.5,975,1.75,0.25);

	this.instance_9 = new lib.floor();
	this.instance_9.setTransform(850.5,1187.5,0.25,1.5);

	this.level11platform_switch = new lib.itemSwitch();
	this.level11platform_switch.setTransform(450,1100,0.25,0.25,0,0,0,-1.6,-3.2);

	this.level11platform_ref = new lib.platformRef();
	this.level11platform_ref.setTransform(562.5,1037.5,1.751,1.251,90.3);

	this.level11platform = new lib.movingPlatform();
	this.level11platform.setTransform(562.5,1125,1.25,0.25);

	this.instance_10 = new lib.floor();
	this.instance_10.setTransform(589.2,1250,5.021,0.25);

	this.instance_11 = new lib.floor();
	this.instance_11.setTransform(650,1125,0.25,0.25);

	this.instance_12 = new lib.floor();
	this.instance_12.setTransform(381.2,603.3,0.375,9.58,0,0,0,-0.1,-0.1);

	this.instance_13 = new lib.deadZone();
	this.instance_13.setTransform(262.9,1250,1.5,0.25,0,0,0,-0.1,0);

	this.instance_14 = new lib.floor();
	this.instance_14.setTransform(212.4,686.4,0.5,11,0,0,0,-0.2,-0.1);

	this.instance_15 = new lib.floor();
	this.instance_15.setTransform(113.1,150,2.403,0.25);

	this.p1 = new lib.shaun();
	this.p1.setTransform(374,1195.9,0.238,0.66);

	this.instance_16 = new lib.wallcopy();
	this.instance_16.setTransform(-2.4,74.3,1.271,0.54,90);

	// level11Pixi
	this.instance_17 = new lib.level11Pixi();
	this.instance_17.setTransform(0,0,0.4,0.4);

	// level11PixiBG
	this.instance_18 = new lib.deadZone();
	this.instance_18.setTransform(453.1,-118.2,10.928,0.203,180);

	this.instance_19 = new lib.deadZone();
	this.instance_19.setTransform(-105.6,675.5,16.062,0.417,90,0,0,0,0.1);

	this.instance_20 = new lib.deadZone();
	this.instance_20.setTransform(1011.9,680.1,16.129,0.417,90);

	this.instance_21 = new lib.deadZone();
	this.instance_21.setTransform(444.3,1435.9,10.928,0.832);

	this.instance_22 = new lib.level11PixiBG();
	this.instance_22.setTransform(0,0,0.4,0.4);

	this.addChild(this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.p1,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.level11platform,this.level11platform_ref,this.level11platform_switch,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.sizeRef,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.4,-128.3,1159.2,1614.9);


(lib.level10Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.dirt3_dot_png();
	this.instance.setTransform(1476.7,865.4,1,1,-151.1,0,0,55,88);

	this.instance_1 = new lib.dirt3_dot_png();
	this.instance_1.setTransform(1920.7,747.8,1,1,0,0,0,55,88);

	this.instance_2 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_2.setTransform(1918.5,906,1,1,0,0,0,53,60);

	this.instance_3 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_3.setTransform(1521.2,884.5,1,1,0,0,0,53,60);

	this.instance_4 = new lib.ground_hyphen_right_dot_png();
	this.instance_4.setTransform(1467.2,728.1,1,1.141);

	this.instance_5 = new lib.ground_hyphen_left_dot_png();
	this.instance_5.setTransform(1919,787.6,1,1,0,0,0,53.5,60.5);

	this.instance_6 = new lib.water_hyphen_bottom_dot_png();
	this.instance_6.setTransform(1823.7,956.4,1,1,0,0,0,49.5,49.5);

	this.instance_7 = new lib.water_hyphen_bottom_dot_png();
	this.instance_7.setTransform(1792.7,956.4,1,1,0,0,0,49.5,49.5);

	this.instance_8 = new lib.water_hyphen_bottom_dot_png();
	this.instance_8.setTransform(1706.2,956.4,1,1,0,0,0,49.5,49.5);

	this.instance_9 = new lib.water_hyphen_bottom_dot_png();
	this.instance_9.setTransform(1616.9,956.4,1,1,0,0,0,49.5,49.5);

	this.instance_10 = new lib.water_hyphen_middle_dot_png();
	this.instance_10.setTransform(1823.7,867.3,1,1,0,0,0,49.5,49.5);

	this.instance_11 = new lib.water_hyphen_middle_dot_png();
	this.instance_11.setTransform(1803.1,867.3,1,1,0,0,0,49.5,49.5);

	this.instance_12 = new lib.water_hyphen_middle_dot_png();
	this.instance_12.setTransform(1710.6,867.3,1,1,0,0,0,49.5,49.5);

	this.instance_13 = new lib.water_hyphen_middle_dot_png();
	this.instance_13.setTransform(1616.9,867.3,1,1,0,0,0,49.5,49.5);

	this.instance_14 = new lib.water_hyphen_top_dot_png();
	this.instance_14.setTransform(1805.2,777.1,1,1,0,0,0,49.5,50);

	this.instance_15 = new lib.water_hyphen_top_dot_png();
	this.instance_15.setTransform(1710.6,777.6,1,1,0,0,0,49.5,50);

	this.level10platform = new lib.level10movingplatform();
	this.level10platform.setTransform(1715.8,364.3);

	this.instance_16 = new lib.dirt4_dot_png();
	this.instance_16.setTransform(844.9,1119.8,1,1,0,0,0,121.5,37.5);

	this.instance_17 = new lib.dirt4_dot_png();
	this.instance_17.setTransform(2803.2,1182.3,1,1,0,0,0,121.5,37.5);

	this.instance_18 = new lib.dirt4_dot_png();
	this.instance_18.setTransform(2796.7,622.6,1,1,0,0,0,121.5,37.5);

	this.instance_19 = new lib.dirt3_dot_png();
	this.instance_19.setTransform(1431.4,665.9,0.608,0.608,-90);

	this.instance_20 = new lib.ground_hyphen_right_dot_png();
	this.instance_20.setTransform(1446.5,629.7,1,1.141);

	this.instance_21 = new lib.spade_dot_png();
	this.instance_21.setTransform(287.7,814.8,1,1,-25.2,0,0,92.5,15.1);

	this.instance_22 = new lib.moss_dot_png();
	this.instance_22.setTransform(1191.1,185.5,0.691,0.691);

	this.instance_23 = new lib.leaves1_dot_png();
	this.instance_23.setTransform(998.3,490.7,1,1,0,0,0,18.5,15);

	this.instance_24 = new lib.moss_dot_png();
	this.instance_24.setTransform(502.3,591.7,1,1,0,0,0,40.5,27.5);

	this.instance_25 = new lib.leaves2_dot_png();
	this.instance_25.setTransform(156.2,487.3,1.337,1.337,0,0,0,21.9,20);

	this.instance_26 = new lib.leaves2_dot_png();
	this.instance_26.setTransform(2659.7,514.7,1,1,0,0,0,22,20);

	this.instance_27 = new lib.leaves1_dot_png();
	this.instance_27.setTransform(1950.6,515.1,1.433,1.433,0,0,0,18.5,15);

	this.instance_28 = new lib.bone_dot_png();
	this.instance_28.setTransform(1008.2,687.6,1.259,1.259,0,0,0,22.6,13.5);

	this.instance_29 = new lib.bone_dot_png();
	this.instance_29.setTransform(2669.9,843.7,1.37,1.37,0,0,0,22.5,13.5);

	this.instance_30 = new lib.dirt3_dot_png();
	this.instance_30.setTransform(2318.6,636,1,1,-85.2,0,0,55.1,88);

	this.instance_31 = new lib.dirt2_dot_png();
	this.instance_31.setTransform(2356.5,1172.3,1.658,1.725,0,0,0,118.5,52.5);

	this.instance_32 = new lib.dirt3_dot_png();
	this.instance_32.setTransform(33.9,974.1,1.307,1.035,28.2);

	this.instance_33 = new lib.dirt4_dot_png();
	this.instance_33.setTransform(301.6,754.3,2.531,2.531);

	this.instance_34 = new lib.dirt1_dot_png();
	this.instance_34.setTransform(2837.7,861.3);

	this.instance_35 = new lib.dirt3_dot_png();
	this.instance_35.setTransform(1984,810.6,0.608,0.608,-153.6);

	this.instance_36 = new lib.dirt4_dot_png();
	this.instance_36.setTransform(-45.4,574.7);

	this.instance_37 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_37.setTransform(1924.1,732.7);

	this.instance_38 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_38.setTransform(2746.2,986.4);

	this.instance_39 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_39.setTransform(2630.2,986.4);

	this.instance_40 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_40.setTransform(2623.2,985.4);

	this.instance_41 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_41.setTransform(2507.2,985.4);

	this.instance_42 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_42.setTransform(2416.7,986.4);

	this.instance_43 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_43.setTransform(2388.7,986.4);

	this.instance_44 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_44.setTransform(2272.7,986.4);

	this.instance_45 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_45.setTransform(2182.2,987.4);

	this.instance_46 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_46.setTransform(2064.8,987.4);

	this.instance_47 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_47.setTransform(1988.2,987.4);

	this.instance_48 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_48.setTransform(2653.2,1077.3);

	this.instance_49 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_49.setTransform(2759.2,1076.8);

	this.instance_50 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_50.setTransform(2917.3,1136.9,1,1,0,0,0,53,60);

	this.instance_51 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_51.setTransform(2917.8,1065.9,1,1,0,0,0,53,60);

	this.instance_52 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_52.setTransform(2917.3,1001.9,1,1,0,0,0,53,60);

	this.instance_53 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_53.setTransform(2556.7,1077.3);

	this.instance_54 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_54.setTransform(2475.7,1077.3);

	this.instance_55 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_55.setTransform(2368.7,1077.3);

	this.instance_56 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_56.setTransform(2252.7,1077.3);

	this.instance_57 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_57.setTransform(2162.2,1078.3);

	this.instance_58 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_58.setTransform(2044.8,1078.3);

	this.instance_59 = new lib.ground_hyphen_right_dot_png();
	this.instance_59.setTransform(2863.3,824.5);

	this.instance_60 = new lib.ground_hyphen_right_dot_png();
	this.instance_60.setTransform(2863.8,718.5);

	this.instance_61 = new lib.ground_hyphen_right_dot_png();
	this.instance_61.setTransform(2861.8,599);

	this.instance_62 = new lib.ground_hyphen_right_dot_png();
	this.instance_62.setTransform(2861.8,615.5);

	this.instance_63 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_63.setTransform(2772.8,614.6);

	this.instance_64 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_64.setTransform(2697.8,614.1);

	this.instance_65 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_65.setTransform(2588.3,614.1);

	this.instance_66 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_66.setTransform(2489.8,614.1);

	this.instance_67 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_67.setTransform(2380.4,614.1);

	this.instance_68 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_68.setTransform(2286.9,614.1);

	this.instance_69 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_69.setTransform(2177.4,614.1);

	this.instance_70 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_70.setTransform(2081.9,614.1);

	this.instance_71 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_71.setTransform(1972.5,614.1);

	this.instance_72 = new lib.ground_hyphen_left_dot_png();
	this.instance_72.setTransform(1920.9,674.5,1,1,0,0,0,53.5,60.5);

	this.instance_73 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_73.setTransform(1915.2,577.7,1,1,0,0,0,60.5,60.5);

	this.instance_74 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_74.setTransform(2116.7,517.2);

	this.instance_75 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_75.setTransform(2023.7,517.2);

	this.instance_76 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_76.setTransform(1917.6,517.2);

	this.instance_77 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_77.setTransform(2470.7,517.2);

	this.instance_78 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_78.setTransform(2377.7,517.2);

	this.instance_79 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_79.setTransform(2271.6,517.2);

	this.instance_80 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_80.setTransform(2205.6,517.2);

	this.instance_81 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_81.setTransform(2842.7,517.2);

	this.instance_82 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_82.setTransform(2749.7,517.2);

	this.instance_83 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_83.setTransform(2643.6,517.2);

	this.instance_84 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_84.setTransform(2577.6,517.2);

	this.instance_85 = new lib.ground_hyphen_left_dot_png();
	this.instance_85.setTransform(-70,577.7);

	this.instance_86 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_86.setTransform(1356,1079.8);

	this.instance_87 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_87.setTransform(1238.5,1079.8);

	this.instance_88 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_88.setTransform(1162,1079.8);

	this.instance_89 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_89.setTransform(1044.5,1079.8);

	this.instance_90 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_90.setTransform(954,1080.8);

	this.instance_91 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_91.setTransform(836.6,1080.8);

	this.instance_92 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_92.setTransform(732,1080.8);

	this.instance_93 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_93.setTransform(614.5,1080.8);

	this.instance_94 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_94.setTransform(524,1081.8);

	this.instance_95 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_95.setTransform(406.6,1081.8);

	this.instance_96 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_96.setTransform(330,1081.8);

	this.instance_97 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_97.setTransform(212.6,1081.8);

	this.instance_98 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_98.setTransform(122.1,1082.8);

	this.instance_99 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_99.setTransform(4.6,1082.8);

	this.instance_100 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_100.setTransform(1358,993.8);

	this.instance_101 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_101.setTransform(1240.5,993.8);

	this.instance_102 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_102.setTransform(1164,993.8);

	this.instance_103 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_103.setTransform(1046.5,993.8);

	this.instance_104 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_104.setTransform(956,994.8);

	this.instance_105 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_105.setTransform(838.6,994.8);

	this.instance_106 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_106.setTransform(734,994.8);

	this.instance_107 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_107.setTransform(616.5,994.8);

	this.instance_108 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_108.setTransform(526,995.8);

	this.instance_109 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_109.setTransform(408.6,995.8);

	this.instance_110 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_110.setTransform(332,995.8);

	this.instance_111 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_111.setTransform(214.6,995.8);

	this.instance_112 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_112.setTransform(124.1,996.8);

	this.instance_113 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_113.setTransform(6.6,996.8);

	this.instance_114 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_114.setTransform(1358,928.8);

	this.instance_115 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_115.setTransform(1240.5,928.8);

	this.instance_116 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_116.setTransform(1164,928.8);

	this.instance_117 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_117.setTransform(1046.5,928.8);

	this.instance_118 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_118.setTransform(956,929.8);

	this.instance_119 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_119.setTransform(838.6,929.8);

	this.instance_120 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_120.setTransform(734,929.8);

	this.instance_121 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_121.setTransform(616.5,929.8);

	this.instance_122 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_122.setTransform(526,930.8);

	this.instance_123 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_123.setTransform(408.6,930.8);

	this.instance_124 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_124.setTransform(332,930.8);

	this.instance_125 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_125.setTransform(214.6,930.8);

	this.instance_126 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_126.setTransform(124.1,931.8);

	this.instance_127 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_127.setTransform(6.6,931.8);

	this.instance_128 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_128.setTransform(1368.5,818.8);

	this.instance_129 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_129.setTransform(1342,817.8);

	this.instance_130 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_130.setTransform(1224.5,817.8);

	this.instance_131 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_131.setTransform(1148,817.8);

	this.instance_132 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_132.setTransform(1030.5,817.8);

	this.instance_133 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_133.setTransform(940,818.8);

	this.instance_134 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_134.setTransform(822.6,818.8);

	this.instance_135 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_135.setTransform(718,818.8);

	this.instance_136 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_136.setTransform(600.5,818.8);

	this.instance_137 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_137.setTransform(510,819.8);

	this.instance_138 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_138.setTransform(392.6,819.8);

	this.instance_139 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_139.setTransform(316,819.8);

	this.instance_140 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_140.setTransform(198.6,819.8);

	this.instance_141 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_141.setTransform(108.1,820.8);

	this.instance_142 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_142.setTransform(-9.4,820.8);

	this.instance_143 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_143.setTransform(-72.2,1082.8);

	this.instance_144 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_144.setTransform(-72,999.3);

	this.instance_145 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_145.setTransform(-71.7,911.1);

	this.instance_146 = new lib.dirt2_dot_png();
	this.instance_146.setTransform(1194.4,511.4);

	this.instance_147 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_147.setTransform(1393.3,708.1);

	this.instance_148 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_148.setTransform(1293.8,707.6);

	this.instance_149 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_149.setTransform(1197.8,707.6);

	this.instance_150 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_150.setTransform(1088.3,707.1);

	this.instance_151 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_151.setTransform(989.4,707.1);

	this.instance_152 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_152.setTransform(879.9,706.6);

	this.instance_153 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_153.setTransform(772.9,706.6);

	this.instance_154 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_154.setTransform(663.4,706.1);

	this.instance_155 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_155.setTransform(558.4,706.1);

	this.instance_156 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_156.setTransform(448.9,705.6);

	this.instance_157 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_157.setTransform(355.4,705.6);

	this.instance_158 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_158.setTransform(245.9,705.1);

	this.instance_159 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_159.setTransform(141,705.1);

	this.instance_160 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_160.setTransform(31.5,704.6);

	this.instance_161 = new lib.ground_hyphen_right_dot_png();
	this.instance_161.setTransform(1467.2,601.7,1,1.141);

	this.instance_162 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_162.setTransform(1402.3,606.1);

	this.instance_163 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_163.setTransform(1292.8,605.6);

	this.instance_164 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_164.setTransform(1196.8,605.6);

	this.instance_165 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_165.setTransform(1087.3,605.1);

	this.instance_166 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_166.setTransform(988.4,605.1);

	this.instance_167 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_167.setTransform(878.9,604.6);

	this.instance_168 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_168.setTransform(771.9,604.6);

	this.instance_169 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_169.setTransform(662.4,604.1);

	this.instance_170 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_170.setTransform(557.4,604.1);

	this.instance_171 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_171.setTransform(447.9,603.6);

	this.instance_172 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_172.setTransform(354.4,603.6);

	this.instance_173 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_173.setTransform(244.9,603.1);

	this.instance_174 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_174.setTransform(140,603.1);

	this.instance_175 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_175.setTransform(30.5,602.6);

	this.instance_176 = new lib.ground_hyphen_left_dot_png();
	this.instance_176.setTransform(-71,704.7);

	this.instance_177 = new lib.ground_hyphen_left_dot_png();
	this.instance_177.setTransform(-70.5,602.2);

	this.instance_178 = new lib.moss_dot_png();
	this.instance_178.setTransform(1374.9,188,0.691,0.691);

	this.instance_179 = new lib.moss_dot_png();
	this.instance_179.setTransform(97.6,357.2,0.662,0.662,0,0,0,40.5,27.6);

	this.instance_180 = new lib.moss_dot_png();
	this.instance_180.setTransform(-13.5,451.6,1,1,0,0,0,40.5,27.5);

	this.instance_181 = new lib.leaves2_dot_png();
	this.instance_181.setTransform(-51,248.6,0.848,0.848,-28.7);

	this.instance_182 = new lib.leaves1_dot_png();
	this.instance_182.setTransform(41.8,230);

	this.instance_183 = new lib.platformtop_hyphen_green1_dot_png();
	this.instance_183.setTransform(1356.8,145.3,0.409,0.363);

	this.instance_184 = new lib.platformtop_hyphen_green1_dot_png();
	this.instance_184.setTransform(1276.1,144.3,0.363,0.363);

	this.instance_185 = new lib.platformtop_hyphen_green1_dot_png();
	this.instance_185.setTransform(1195.3,144.8,0.363,0.363);

	this.instance_186 = new lib.wall_hyphen_left_dot_png();
	this.instance_186.setTransform(1316.1,154.8,0.627,0.543);

	this.instance_187 = new lib.wall_hyphen_left_dot_png();
	this.instance_187.setTransform(1254.2,154.7,0.633,0.543);

	this.instance_188 = new lib.wall_hyphen_right_dot_png();
	this.instance_188.setTransform(1391.1,154.9,0.614,0.614);

	this.instance_189 = new lib.wall_hyphen_left_dot_png();
	this.instance_189.setTransform(1188.9,154.7,0.601,0.543);

	this.instance_190 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_190.setTransform(1464.5,493.5);

	this.instance_191 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_191.setTransform(1399.2,494.3);

	this.instance_192 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_192.setTransform(1296.2,494.3);

	this.instance_193 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_193.setTransform(1230.2,494.3);

	this.instance_194 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_194.setTransform(1132.8,494.3);

	this.instance_195 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_195.setTransform(1039.8,494.3);

	this.instance_196 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_196.setTransform(933.7,494.3);

	this.instance_197 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_197.setTransform(867.7,494.3);

	this.instance_198 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_198.setTransform(765,494.3);

	this.instance_199 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_199.setTransform(699,494.3);

	this.instance_200 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_200.setTransform(601.6,494.3);

	this.instance_201 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_201.setTransform(508.6,494.3);

	this.instance_202 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_202.setTransform(402.5,494.3);

	this.instance_203 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_203.setTransform(336.5,494.3);

	this.instance_204 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_204.setTransform(239,494.3);

	this.instance_205 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_205.setTransform(146,494.3);

	this.instance_206 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_206.setTransform(38.6,494.3);

	this.instance_207 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_207.setTransform(-65.9,494.3);

	this.instance_208 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_208.setTransform(39.5,230.5);

	this.instance_209 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_209.setTransform(-62.5,241.5);

	this.instance_210 = new lib.wall_hyphen_left_dot_png();
	this.instance_210.setTransform(-77.5,282.5);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_211 = new lib.wall_hyphen_left_dot_png();
	this.instance_211.setTransform(-76.5,362);

	this.instance_212 = new lib.wall_hyphen_right_dot_png();
	this.instance_212.setTransform(17,388.5,1.272,1.289);

	this.instance_213 = new lib.wall_hyphen_left_dot_png();
	this.instance_213.setTransform(-72,426.5,0.738,0.944);

	this.instance_214 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_214.setTransform(1393.3,705.1);

	this.instance_215 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_215.setTransform(-71.5,804.9);

	this.instance_216 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_216.setTransform(2053.5,929.8);

	this.instance_217 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_217.setTransform(1972.5,929.8);

	this.instance_218 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_218.setTransform(2336.4,930.8);

	this.instance_219 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_219.setTransform(2255.4,930.8);

	this.instance_220 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_220.setTransform(2148.4,930.8);

	this.instance_221 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_221.setTransform(2630.4,930.8);

	this.instance_222 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_222.setTransform(2549.4,930.8);

	this.instance_223 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_223.setTransform(2442.4,930.8);

	this.instance_224 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_224.setTransform(2775.4,930.8);

	this.instance_225 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_225.setTransform(2694.4,930.8);

	this.instance_226 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_226.setTransform(1962.4,835.8);

	this.instance_227 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_227.setTransform(2077.4,835.8);

	this.instance_228 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_228.setTransform(2187.4,835.8);

	this.instance_229 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_229.setTransform(2302.4,835.8);

	this.instance_230 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_230.setTransform(2411.4,835.8);

	this.instance_231 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_231.setTransform(2526.4,835.8);

	this.instance_232 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_232.setTransform(2636.4,835.8);

	this.instance_233 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_233.setTransform(2751.4,835.8);

	this.instance_234 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_234.setTransform(2707.8,722.1);

	this.instance_235 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_235.setTransform(2598.3,722.1);

	this.instance_236 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_236.setTransform(2499.8,722.1);

	this.instance_237 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_237.setTransform(2390.4,722.1);

	this.instance_238 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_238.setTransform(2296.9,722.1);

	this.instance_239 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_239.setTransform(2187.4,722.1);

	this.instance_240 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_240.setTransform(2091.9,722.1);

	this.instance_241 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_241.setTransform(1982.5,722.1);

	this.instance_242 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_242.setTransform(2758.8,722.1);

	this.instance_243 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_243.setTransform(1450,225,0.748,1.125,180);

	this.instance_244 = new lib.water_hyphen_top_dot_png();
	this.instance_244.setTransform(1616.9,778.1,1,1,0,0,0,49.5,50);

	this.instance_245 = new lib.water_hyphen_top_dot_png();
	this.instance_245.setTransform(1823.7,777.6,1,1,0,0,0,49.5,50);

	this.instance_246 = new lib.hazardsign_dot_png();
	this.instance_246.setTransform(1732.8,688.3,0.647,0.647,0,0,0,51,46);

	this.instance_247 = new lib.endpole_dot_png();
	this.instance_247.setTransform(1734.5,743.8,0.705,0.705,0,0,0,8.1,39.5);

	this.addChild(this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.isDisp,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.level10platform,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.5,-623,3048.3,1885.9);


(lib.level10 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.level10Pixi();
	this.instance.setTransform(0,0,0.4,0.4);

	// Layer 3
	this.instance_1 = new lib.deadZone();
	this.instance_1.setTransform(570.2,-124,13.135,0.087,180);

	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(-101.4,188.9,6.342,0.502,90,0,0,0,0.1);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(1241.7,189.6,6.342,0.502,90);

	this.instance_4 = new lib.deadZone();
	this.instance_4.setTransform(568.7,518.8,13.135,0.355);

	this.instance_5 = new lib.level10PixiBG();
	this.instance_5.setTransform(578.7,187.7,0.4,0.4,0,0,0,1446.7,469.2);

	// Layer 1
	this.instance_6 = new lib.deadZone();
	this.instance_6.setTransform(686,300,1.22,0.125);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(576.9,152.2,12.001,4.502,0,0,0,0.1,0.1);

	this.instance_7 = new lib.star();
	this.instance_7.setTransform(687.1,123.6,0.25,0.25,0,0,0,-1,-3);

	this.instance_8 = new lib.star();
	this.instance_8.setTransform(687.1,164.3,0.25,0.25,0,0,0,-1,-3);

	this.instance_9 = new lib.star();
	this.instance_9.setTransform(687.9,206.8,0.25,0.25,0,0,0,-1,-3);

	this.instance_10 = new lib.exit();
	this.instance_10.setTransform(1046.8,159.3,0.5,1);

	this.instance_11 = new lib.wall();
	this.instance_11.setTransform(25.1,150,0.5,1,0,0,0,0.2,0);

	this.p1 = new lib.shaun();
	this.p1.setTransform(86.9,148.5,0.238,0.66);

	this.instance_12 = new lib.wall();
	this.instance_12.setTransform(525,75,1,0.25);

	this.level10platform_switch = new lib.itemSwitch();
	this.level10platform_switch.setTransform(525,50,0.25,0.25,0,0,0,-1.6,-3.2);

	this.level10platform = new lib.movingPlatform();
	this.level10platform.setTransform(685.1,77.2,1,0.25);

	this.level10platform_ref = new lib.platformRef();
	this.level10platform_ref.setTransform(685.1,171.5,1.923,1,90,0,0,0.1,0);

	this.instance_13 = new lib.wall();
	this.instance_13.setTransform(935.6,259.3,3.758,1,0,0,0,0.2,0);

	this.instance_14 = new lib.wall();
	this.instance_14.setTransform(562.5,345.2,11.206,1);

	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(313.8,250,6.25,1,0,0,0,0.2,0);

	this.addChild(this.instance_15,this.instance_14,this.instance_13,this.level10platform_ref,this.level10platform,this.level10platform_switch,this.instance_12,this.p1,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.sizeRef,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-249.2,1393.3,785.8);


(lib.level9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wall();
	this.instance.setTransform(131,456,2.699,1.299,0,0,0,0,-0.1);

	this.instance_1 = new lib.floor();
	this.instance_1.setTransform(238.8,378.4,0.036,0.32,0,0,0,0,-0.7);

	this.instance_2 = new lib.wall();
	this.instance_2.setTransform(454.8,441.6,4.339,1.509);

	this.instance_3 = new lib.floor();
	this.instance_3.setTransform(642.4,275.5,0.036,0.739,0,0,0,0,-0.5);

	this.instance_4 = new lib.floor();
	this.instance_4.setTransform(370.4,338.6,0.036,0.598,0,0,0,0,-0.5);

	this.instance_5 = new lib.floor();
	this.instance_5.setTransform(505.7,311.2,2.702,0.051);

	this.instance_6 = new lib.wall();
	this.instance_6.setTransform(507.1,348.6,2.699,0.69);

	this.instance_7 = new lib.wall();
	this.instance_7.setTransform(793.6,379.4,3.044,2.739,0,0,0,0,0.1);

	this.instance_8 = new lib.star();
	this.instance_8.setTransform(306.3,340.2,0.25,0.25,0,0,0,-1,-3);

	this.instance_9 = new lib.star();
	this.instance_9.setTransform(771.5,208.4,0.25,0.25,0,0,0,-1,-3);

	this.instance_10 = new lib.star();
	this.instance_10.setTransform(496.2,281,0.25,0.25,0,0,0,-1,-3);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(472.8,262.7,9.431,5.129,0,0,0,0.1,0.4);

	this.instance_11 = new lib.exit();
	this.instance_11.setTransform(920.5,188.6,0.5,1);

	this.instance_12 = new lib.floor();
	this.instance_12.setTransform(940.3,241.4,5.945,0.09);

	this.p1 = new lib.shaun();
	this.p1.setTransform(108.9,341.3,0.238,0.66);

	this.instance_13 = new lib.floor();
	this.instance_13.setTransform(304.9,365.5,1.327,0.06);

	this.instance_14 = new lib.floor();
	this.instance_14.setTransform(664.9,310.9,3.539,0.051);

	this.instance_15 = new lib.floor();
	this.instance_15.setTransform(155.9,389.4,3.115,0.04,0,0,0,0.1,0);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(50.6,287.5,0.25,2.5);

	// level9Pixi
	this.instance_17 = new lib.deadZone();
	this.instance_17.setTransform(622.2,-123.1,14.115,0.105,180);

	this.instance_18 = new lib.deadZone();
	this.instance_18.setTransform(-99.6,255.7,7.677,0.539,90,0,0,0,0.1);

	this.instance_19 = new lib.deadZone();
	this.instance_19.setTransform(1343.8,256.6,7.677,0.539,90);

	this.instance_20 = new lib.deadZone();
	this.instance_20.setTransform(620.6,655.1,14.115,0.43);

	this.instance_21 = new lib.level9Pixi();
	this.instance_21.setTransform(0,0,0.4,0.4);

	// Layer 2
	this.instance_22 = new lib.level9PixiBG();
	this.instance_22.setTransform(0,0,0.4,0.4);

	this.addChild(this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.p1,this.instance_12,this.instance_11,this.sizeRef,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-128.4,1497.3,804.9);


(lib.level8 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.deadZone();
	this.instance.setTransform(1073.3,-123.3,22.622,0.102,180);

	this.instance_1 = new lib.deadZone();
	this.instance_1.setTransform(-83.4,245.2,7.467,0.864,90,0,0,0,0.1);

	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(2229.9,246,7.467,0.864,90);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(1070.8,633.7,22.622,0.418);

	this.instance_4 = new lib.level8PixiBG();
	this.instance_4.setTransform(0,0,0.4,0.4);

	// level8Pixi
	this.instance_5 = new lib.level8Pixi();
	this.instance_5.setTransform(0,0,0.4,0.4);

	// Layer 1
	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(1058.1,217.8,21.096,4.598,0,0,0,0.1,0.1);

	this.p1 = new lib.shaun();
	this.p1.setTransform(100,212.5,0.238,0.66);

	this.s3 = new lib.star();
	this.s3.setTransform(1824.9,100.4,0.247,0.247);

	this.s1 = new lib.star();
	this.s1.setTransform(324.9,100.4,0.247,0.247);

	this.instance_6 = new lib.skyhook();
	this.instance_6.setTransform(299.9,175.9,0.066,0.069);

	this.s2 = new lib.star();
	this.s2.setTransform(599.2,149,0.247,0.247);

	this.instance_7 = new lib.wall();
	this.instance_7.setTransform(1913.6,250.3,2.754,1.211,0,0,0,0.5,-0.2);

	this.instance_8 = new lib.skyhook();
	this.instance_8.setTransform(1749.9,200.4,0.066,0.069);

	this.instance_9 = new lib.wall();
	this.instance_9.setTransform(1720,249.9,0.12,1.211,0,0,0,0,-0.1);

	this.instance_10 = new lib.wall();
	this.instance_10.setTransform(1693.4,239.7,0.629,0.51,0,0,0,-0.1,-0.1);

	this.instance_11 = new lib.wall();
	this.instance_11.setTransform(1649.7,251.6,0.504,0.25,0,0,0,-0.1,0);

	this.instance_12 = new lib.wall();
	this.instance_12.setTransform(49.9,225.3,0.25,1,0,0,0,0.4,-0.1);

	this.instance_13 = new lib.wall();
	this.instance_13.setTransform(424.9,225.2,0.25,0.249,0,0,0,0.4,0);

	this.instance_14 = new lib.wall();
	this.instance_14.setTransform(424.9,253.1,0.25,0.309,0,0,0,0.4,0);

	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(256.3,226.4,0.375,0.774,0,0,0,0.4,-0.1);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(218.8,238.9,0.375,0.524,0,0,0,0.4,0);

	this.instance_17 = new lib.wall();
	this.instance_17.setTransform(181.2,253.1,0.375,0.309,0,0,0,0.4,0);

	this.instance_18 = new lib.wall();
	this.instance_18.setTransform(1662.4,288.3,1.25,0.489);

	this.instance_19 = new lib.wall();
	this.instance_19.setTransform(1537.4,286.6,0.25,0.489);

	this.instance_20 = new lib.skyhook();
	this.instance_20.setTransform(1574.7,275.2,0.066,0.069);

	this.instance_21 = new lib.wall();
	this.instance_21.setTransform(1462.4,286.6,0.25,0.489);

	this.instance_22 = new lib.skyhook();
	this.instance_22.setTransform(1500.2,275.2,0.066,0.069);

	this.instance_23 = new lib.wall();
	this.instance_23.setTransform(1387.4,287.5,0.25,0.489);

	this.instance_24 = new lib.skyhook();
	this.instance_24.setTransform(1425.1,275.4,0.066,0.069);

	this.instance_25 = new lib.wall();
	this.instance_25.setTransform(1312.4,286.6,0.25,0.489);

	this.instance_26 = new lib.skyhook();
	this.instance_26.setTransform(1350.1,275.2,0.066,0.069);

	this.instance_27 = new lib.wall();
	this.instance_27.setTransform(1237.4,288.3,0.25,0.489);

	this.instance_28 = new lib.skyhook();
	this.instance_28.setTransform(1275.1,275.6,0.066,0.069);

	this.instance_29 = new lib.wall();
	this.instance_29.setTransform(1162.4,288.3,0.25,0.489);

	this.instance_30 = new lib.skyhook();
	this.instance_30.setTransform(1200.6,275.6,0.066,0.069);

	this.instance_31 = new lib.wall();
	this.instance_31.setTransform(1087.4,287.5,0.25,0.489);

	this.instance_32 = new lib.wall();
	this.instance_32.setTransform(1000,286.6,0.5,0.489,0,0,0,0.1,0);

	this.instance_33 = new lib.skyhook();
	this.instance_33.setTransform(949.9,275.4,0.066,0.069);

	this.instance_34 = new lib.wall();
	this.instance_34.setTransform(887.5,287.4,0.749,0.506,0,0,0,0.1,-0.1);

	this.instance_35 = new lib.skyhook();
	this.instance_35.setTransform(824.9,275.4,0.066,0.069);

	this.instance_36 = new lib.wall();
	this.instance_36.setTransform(750,287.5,1.001,0.489,0,0,0,0.1,0);

	this.instance_37 = new lib.skyhook();
	this.instance_37.setTransform(1049.9,275.4,0.066,0.069);

	this.instance_38 = new lib.skyhook();
	this.instance_38.setTransform(1124.9,275.4,0.066,0.069);

	this.instance_39 = new lib.exit();
	this.instance_39.setTransform(2051,151.3,0.914,0.449,90);

	this.instance_40 = new lib.skyhook();
	this.instance_40.setTransform(674.9,275.4,0.066,0.069);

	this.instance_41 = new lib.wall();
	this.instance_41.setTransform(574.9,288.3,1.5,0.489);

	this.instance_42 = new lib.skyhook();
	this.instance_42.setTransform(474.9,275.4,0.066,0.069);

	this.instance_43 = new lib.deadZone();
	this.instance_43.setTransform(1041.2,319.9,20.172,0.16);

	this.instance_44 = new lib.wall();
	this.instance_44.setTransform(253.1,287.5,3.952,0.489,0,0,0,0.2,0);

	this.addChild(this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.s2,this.instance_6,this.s1,this.s3,this.p1,this.sizeRef,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-128.4,2399.6,782.9);


(lib.level7Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance.setTransform(3507.7,415.5,1,1,0,0,0,155.5,21);

	this.instance_1 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_1.setTransform(3423.1,424.9,1,1,0,0,0,50.5,21);

	this.instance_2 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_2.setTransform(3673,422.6,1,1,0,0,0,50.5,21);

	this.instance_3 = new lib.wall_hyphen_right_dot_png();
	this.instance_3.setTransform(3666.7,481.4,1,1,0,0,0,51.5,45);

	this.instance_4 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_4.setTransform(3494.1,481.4,1,1,0,0,0,155.5,45);

	this.instance_5 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_5.setTransform(3667.2,536.6,1,1,0,0,0,51,16);

	this.instance_6 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_6.setTransform(3470.4,539.6,1,1,0,0,0,155.5,16.5);

	this.instance_7 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_7.setTransform(3365,422.6,1,1,0,0,0,50.5,21);

	this.instance_8 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_8.setTransform(3168.2,418.5,1,1,0,0,0,155.5,21);

	this.instance_9 = new lib.wall_hyphen_right_dot_png();
	this.instance_9.setTransform(3358.7,481.4,1,1,0,0,0,51.5,45);

	this.instance_10 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_10.setTransform(3186.1,481.4,1,1,0,0,0,155.5,45);

	this.instance_11 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_11.setTransform(3359.2,536.6,1,1,0,0,0,51,16);

	this.instance_12 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_12.setTransform(3162.4,539.6,1,1,0,0,0,155.5,16.5);

	this.instance_13 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_13.setTransform(2429.2,541.6,1,1,0,0,0,63.5,16);

	this.instance_14 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_14.setTransform(2429.7,422.5,1,1,0,0,0,63,21);

	this.instance_15 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_15.setTransform(3022.4,426.6,1,1,0,0,0,50.5,21);

	this.instance_16 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_16.setTransform(2825.6,422.5,1,1,0,0,0,155.5,21);

	this.instance_17 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_17.setTransform(2610.1,421,1,1,0,0,0,155.5,21);

	this.instance_18 = new lib.wall_hyphen_right_dot_png();
	this.instance_18.setTransform(3016.1,485.4,1,1,0,0,0,51.5,45);

	this.instance_19 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_19.setTransform(2843.5,485.4,1,1,0,0,0,155.5,45);

	this.instance_20 = new lib.wall_hyphen_left_dot_png();
	this.instance_20.setTransform(2423.9,483.7,1,1,0,0,0,70.5,45);

	this.instance_21 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_21.setTransform(2611.8,485.4,1,1,0,0,0,155.5,45);

	this.instance_22 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_22.setTransform(3016.6,540.6,1,1,0,0,0,51,16);

	this.instance_23 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_23.setTransform(2593.6,543.6,1,1,0,0,0,155.5,16.5);

	this.instance_24 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_24.setTransform(2819.8,543.6,1,1,0,0,0,155.5,16.5);

	this.instance_25 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_25.setTransform(425.9,199.8,0.485,0.656,-3.5,0,0,52.4,110.5);

	this.instance_26 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_26.setTransform(473.1,401.4,1.119,1.119,-7.5,0,0,52.5,110.5);

	this.instance_27 = new lib.dirt4_dot_png();
	this.instance_27.setTransform(1437.7,1505.3,1,1,0,0,0,121.5,37.5);

	this.instance_28 = new lib.dirt4_dot_png();
	this.instance_28.setTransform(1377.7,1471.5,1,1,0,0,0,121.5,37.5);

	this.instance_29 = new lib.dirt4_dot_png();
	this.instance_29.setTransform(1527.8,1499,1,1,0,0,0,121.5,37.5);

	this.instance_30 = new lib.dirt1_dot_png();
	this.instance_30.setTransform(1694.1,1326.5,0.626,0.626,0,0,0,55,87);

	this.instance_31 = new lib.dirt4_dot_png();
	this.instance_31.setTransform(216.3,1522.8,1.195,1.195,0,0,0,121.5,37.5);

	this.instance_32 = new lib.dirt4_dot_png();
	this.instance_32.setTransform(66.3,1331.5,1.195,1.195,0,0,0,121.5,37.5);

	this.instance_33 = new lib.dirt4_dot_png();
	this.instance_33.setTransform(101.3,1337.8,1.195,1.195,0,0,0,121.5,37.5);

	this.instance_34 = new lib.dirt3_dot_png();
	this.instance_34.setTransform(387.6,1366.5,1.313,1.313,0,0,0,55,88);

	this.instance_35 = new lib.dirt4_dot_png();
	this.instance_35.setTransform(1236.5,1336.5,1,1,0,0,0,121.5,37.5);

	this.instance_36 = new lib.dirt1_dot_png();
	this.instance_36.setTransform(840.5,1327,1,1,-50.5,0,0,55,87);

	this.instance_37 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_37.setTransform(302.1,1380.9,1.165,1.165,0,0,0,60,60);

	this.instance_38 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_38.setTransform(179.8,1383.8,1.165,1.165,0,0,0,60,60);

	this.instance_39 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_39.setTransform(54.5,1383.8,1.165,1.165,0,0,0,60,60);

	this.instance_40 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_40.setTransform(415.8,1382.3,1.165,1.165,0,0,0,60,60);

	this.instance_41 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_41.setTransform(905,1380.9,1.165,1.165,0,0,0,60,60);

	this.instance_42 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_42.setTransform(782.6,1383.8,1.165,1.165,0,0,0,60,60);

	this.instance_43 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_43.setTransform(657.4,1383.8,1.165,1.165,0,0,0,60,60);

	this.instance_44 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_44.setTransform(535.1,1386.7,1.165,1.165,0,0,0,60.1,60);

	this.instance_45 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_45.setTransform(1018.6,1382.3,1.165,1.165,0,0,0,60,60);

	this.instance_46 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_46.setTransform(1510.8,1380.9,1.165,1.165,0,0,0,60,60);

	this.instance_47 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_47.setTransform(1388.5,1383.8,1.165,1.165,0,0,0,60.1,60);

	this.instance_48 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_48.setTransform(1263.2,1383.8,1.165,1.165,0,0,0,60,60);

	this.instance_49 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_49.setTransform(1140.9,1386.7,1.165,1.165,0,0,0,60,60);

	this.instance_50 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_50.setTransform(1624.5,1382.3,1.165,1.165,0,0,0,60.1,60);

	this.instance_51 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_51.setTransform(1688.9,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_52 = new lib.water_hyphen_middle_dot_png();
	this.instance_52.setTransform(3705.2,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_53 = new lib.water_hyphen_middle_dot_png();
	this.instance_53.setTransform(3612.3,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_54 = new lib.water_hyphen_middle_dot_png();
	this.instance_54.setTransform(3521.6,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_55 = new lib.water_hyphen_middle_dot_png();
	this.instance_55.setTransform(3428.7,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_56 = new lib.water_hyphen_middle_dot_png();
	this.instance_56.setTransform(3343.5,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_57 = new lib.water_hyphen_middle_dot_png();
	this.instance_57.setTransform(3250.6,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_58 = new lib.water_hyphen_middle_dot_png();
	this.instance_58.setTransform(3159.9,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_59 = new lib.water_hyphen_middle_dot_png();
	this.instance_59.setTransform(3076.5,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_60 = new lib.water_hyphen_middle_dot_png();
	this.instance_60.setTransform(2983.6,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_61 = new lib.water_hyphen_middle_dot_png();
	this.instance_61.setTransform(2893,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_62 = new lib.water_hyphen_middle_dot_png();
	this.instance_62.setTransform(2800.1,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_63 = new lib.water_hyphen_middle_dot_png();
	this.instance_63.setTransform(2714.8,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_64 = new lib.water_hyphen_middle_dot_png();
	this.instance_64.setTransform(2621.9,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_65 = new lib.water_hyphen_middle_dot_png();
	this.instance_65.setTransform(2531.3,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_66 = new lib.water_hyphen_middle_dot_png();
	this.instance_66.setTransform(2445.2,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_67 = new lib.water_hyphen_middle_dot_png();
	this.instance_67.setTransform(2352.3,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_68 = new lib.water_hyphen_middle_dot_png();
	this.instance_68.setTransform(2261.6,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_69 = new lib.water_hyphen_middle_dot_png();
	this.instance_69.setTransform(2168.7,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_70 = new lib.water_hyphen_middle_dot_png();
	this.instance_70.setTransform(2083.5,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_71 = new lib.water_hyphen_middle_dot_png();
	this.instance_71.setTransform(1990.6,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_72 = new lib.water_hyphen_middle_dot_png();
	this.instance_72.setTransform(1899.9,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_73 = new lib.water_hyphen_middle_dot_png();
	this.instance_73.setTransform(3705.2,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_74 = new lib.water_hyphen_middle_dot_png();
	this.instance_74.setTransform(3612.3,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_75 = new lib.water_hyphen_middle_dot_png();
	this.instance_75.setTransform(3521.6,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_76 = new lib.water_hyphen_middle_dot_png();
	this.instance_76.setTransform(3428.7,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_77 = new lib.water_hyphen_middle_dot_png();
	this.instance_77.setTransform(3343.5,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_78 = new lib.water_hyphen_middle_dot_png();
	this.instance_78.setTransform(3250.6,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_79 = new lib.water_hyphen_middle_dot_png();
	this.instance_79.setTransform(3159.9,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_80 = new lib.water_hyphen_middle_dot_png();
	this.instance_80.setTransform(3076.5,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_81 = new lib.water_hyphen_middle_dot_png();
	this.instance_81.setTransform(2983.6,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_82 = new lib.water_hyphen_middle_dot_png();
	this.instance_82.setTransform(2893,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_83 = new lib.water_hyphen_middle_dot_png();
	this.instance_83.setTransform(2800.1,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_84 = new lib.water_hyphen_middle_dot_png();
	this.instance_84.setTransform(2714.8,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_85 = new lib.water_hyphen_middle_dot_png();
	this.instance_85.setTransform(2621.9,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_86 = new lib.water_hyphen_middle_dot_png();
	this.instance_86.setTransform(2531.3,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_87 = new lib.water_hyphen_middle_dot_png();
	this.instance_87.setTransform(2445.2,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_88 = new lib.water_hyphen_middle_dot_png();
	this.instance_88.setTransform(2352.3,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_89 = new lib.water_hyphen_middle_dot_png();
	this.instance_89.setTransform(2261.6,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_90 = new lib.water_hyphen_middle_dot_png();
	this.instance_90.setTransform(2168.7,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_91 = new lib.water_hyphen_middle_dot_png();
	this.instance_91.setTransform(2083.5,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_92 = new lib.water_hyphen_middle_dot_png();
	this.instance_92.setTransform(1990.6,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_93 = new lib.water_hyphen_middle_dot_png();
	this.instance_93.setTransform(1899.9,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_94 = new lib.water_hyphen_middle_dot_png();
	this.instance_94.setTransform(3705.2,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_95 = new lib.water_hyphen_middle_dot_png();
	this.instance_95.setTransform(3612.3,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_96 = new lib.water_hyphen_middle_dot_png();
	this.instance_96.setTransform(3521.6,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_97 = new lib.water_hyphen_middle_dot_png();
	this.instance_97.setTransform(3428.7,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_98 = new lib.water_hyphen_middle_dot_png();
	this.instance_98.setTransform(3343.5,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_99 = new lib.water_hyphen_middle_dot_png();
	this.instance_99.setTransform(3250.6,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_100 = new lib.water_hyphen_middle_dot_png();
	this.instance_100.setTransform(3159.9,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_101 = new lib.water_hyphen_middle_dot_png();
	this.instance_101.setTransform(3076.5,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_102 = new lib.water_hyphen_middle_dot_png();
	this.instance_102.setTransform(2983.6,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_103 = new lib.water_hyphen_middle_dot_png();
	this.instance_103.setTransform(2893,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_104 = new lib.water_hyphen_middle_dot_png();
	this.instance_104.setTransform(2800.1,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_105 = new lib.water_hyphen_middle_dot_png();
	this.instance_105.setTransform(2714.8,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_106 = new lib.water_hyphen_middle_dot_png();
	this.instance_106.setTransform(2621.9,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_107 = new lib.water_hyphen_middle_dot_png();
	this.instance_107.setTransform(2531.3,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_108 = new lib.water_hyphen_middle_dot_png();
	this.instance_108.setTransform(2445.2,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_109 = new lib.water_hyphen_middle_dot_png();
	this.instance_109.setTransform(2352.3,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_110 = new lib.water_hyphen_middle_dot_png();
	this.instance_110.setTransform(2261.6,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_111 = new lib.water_hyphen_middle_dot_png();
	this.instance_111.setTransform(2168.7,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_112 = new lib.water_hyphen_middle_dot_png();
	this.instance_112.setTransform(2083.5,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_113 = new lib.water_hyphen_middle_dot_png();
	this.instance_113.setTransform(1990.6,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_114 = new lib.water_hyphen_middle_dot_png();
	this.instance_114.setTransform(1899.9,1316.2,1,1,0,0,0,49.5,49.5);

	this.instance_115 = new lib.water_hyphen_middle_dot_png();
	this.instance_115.setTransform(1807,1316.2,1,1,0,0,0,49.5,49.5);

	this.level4seesaw = new lib.level4seesawcopy();
	this.level4seesaw.setTransform(1050.6,994.9,1,1,-14.4);

	this.level8platform2 = new lib.level7movingplatform2();
	this.level8platform2.setTransform(1614.2,431.3);

	this.level8platform1 = new lib.level7movingplatform();
	this.level8platform1.setTransform(675.6,992.5,0.921,1.069);

	this.instance_116 = new lib.bush_hyphen_top_dot_png();
	this.instance_116.setTransform(3621.3,280.7,1,1,0,0,0,213.5,31.5);

	this.instance_117 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_117.setTransform(1412.2,159.8,0.569,0.702,180,0,0,63.5,16);

	this.instance_118 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_118.setTransform(1351,182.5,0.704,0.704,0,0,0,63.6,16.1);

	this.instance_119 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_119.setTransform(1412.1,182.3,0.708,0.708,0,0,0,51,16);

	this.instance_120 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_120.setTransform(1344.2,161.1,0.782,0.782,180,0,0,51,16);

	this.instance_121 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_121.setTransform(852.7,493.8,1,1,0,0,0,63.5,16);

	this.instance_122 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_122.setTransform(853.2,374.7,1,1,0,0,0,63,21);

	this.instance_123 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_123.setTransform(1445.9,378.9,1,1,0,0,0,50.5,21);

	this.instance_124 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_124.setTransform(1249.1,374.7,1,1,0,0,0,155.5,21);

	this.instance_125 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_125.setTransform(1033.6,373.3,1,1,0,0,0,155.5,21);

	this.instance_126 = new lib.wall_hyphen_right_dot_png();
	this.instance_126.setTransform(1439.6,437.6,1,1,0,0,0,51.5,45);

	this.instance_127 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_127.setTransform(445.7,622.2,1,0.949,0,0,0,126,111);

	this.instance_128 = new lib.water_hyphen_middle_dot_png();
	this.instance_128.setTransform(3707.7,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_129 = new lib.water_hyphen_middle_dot_png();
	this.instance_129.setTransform(3614.8,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_130 = new lib.water_hyphen_middle_dot_png();
	this.instance_130.setTransform(3524.1,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_131 = new lib.water_hyphen_middle_dot_png();
	this.instance_131.setTransform(3431.2,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_132 = new lib.water_hyphen_middle_dot_png();
	this.instance_132.setTransform(3346,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_133 = new lib.water_hyphen_middle_dot_png();
	this.instance_133.setTransform(3253.1,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_134 = new lib.water_hyphen_middle_dot_png();
	this.instance_134.setTransform(3162.4,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_135 = new lib.water_hyphen_middle_dot_png();
	this.instance_135.setTransform(3079,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_136 = new lib.water_hyphen_middle_dot_png();
	this.instance_136.setTransform(2986.1,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_137 = new lib.water_hyphen_middle_dot_png();
	this.instance_137.setTransform(2895.5,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_138 = new lib.water_hyphen_middle_dot_png();
	this.instance_138.setTransform(2802.6,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_139 = new lib.water_hyphen_middle_dot_png();
	this.instance_139.setTransform(2717.3,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_140 = new lib.water_hyphen_middle_dot_png();
	this.instance_140.setTransform(2624.4,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_141 = new lib.water_hyphen_middle_dot_png();
	this.instance_141.setTransform(2533.8,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_142 = new lib.water_hyphen_middle_dot_png();
	this.instance_142.setTransform(2447.7,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_143 = new lib.water_hyphen_middle_dot_png();
	this.instance_143.setTransform(2354.8,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_144 = new lib.water_hyphen_middle_dot_png();
	this.instance_144.setTransform(2264.1,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_145 = new lib.water_hyphen_middle_dot_png();
	this.instance_145.setTransform(2171.2,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_146 = new lib.water_hyphen_middle_dot_png();
	this.instance_146.setTransform(2086,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_147 = new lib.water_hyphen_middle_dot_png();
	this.instance_147.setTransform(1993.1,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_148 = new lib.water_hyphen_middle_dot_png();
	this.instance_148.setTransform(1902.4,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_149 = new lib.water_hyphen_top_dot_png();
	this.instance_149.setTransform(3707.7,1140.3,1,1,0,0,0,49.5,50);

	this.instance_150 = new lib.water_hyphen_top_dot_png();
	this.instance_150.setTransform(3616.4,1140.3,1,1,0,0,0,49.5,50);

	this.instance_151 = new lib.water_hyphen_top_dot_png();
	this.instance_151.setTransform(3529.5,1140.3,1,1,0,0,0,49.5,50);

	this.instance_152 = new lib.water_hyphen_top_dot_png();
	this.instance_152.setTransform(3438.3,1140.3,1,1,0,0,0,49.5,50);

	this.instance_153 = new lib.water_hyphen_top_dot_png();
	this.instance_153.setTransform(3347.6,1140.3,1,1,0,0,0,49.5,50);

	this.instance_154 = new lib.water_hyphen_top_dot_png();
	this.instance_154.setTransform(3256.4,1140.3,1,1,0,0,0,49.5,50);

	this.instance_155 = new lib.water_hyphen_top_dot_png();
	this.instance_155.setTransform(3167,1140.3,1,1,0,0,0,49.5,50);

	this.instance_156 = new lib.water_hyphen_top_dot_png();
	this.instance_156.setTransform(3075.7,1140.3,1,1,0,0,0,49.5,50);

	this.instance_157 = new lib.water_hyphen_top_dot_png();
	this.instance_157.setTransform(2985.1,1140.3,1,1,0,0,0,49.5,50);

	this.instance_158 = new lib.water_hyphen_top_dot_png();
	this.instance_158.setTransform(2893.8,1140.3,1,1,0,0,0,49.5,50);

	this.instance_159 = new lib.water_hyphen_top_dot_png();
	this.instance_159.setTransform(2806.9,1140.3,1,1,0,0,0,49.5,50);

	this.instance_160 = new lib.water_hyphen_top_dot_png();
	this.instance_160.setTransform(2715.7,1140.3,1,1,0,0,0,49.5,50);

	this.instance_161 = new lib.water_hyphen_top_dot_png();
	this.instance_161.setTransform(2625,1140.3,1,1,0,0,0,49.5,50);

	this.instance_162 = new lib.water_hyphen_top_dot_png();
	this.instance_162.setTransform(2533.8,1140.3,1,1,0,0,0,49.5,50);

	this.instance_163 = new lib.water_hyphen_top_dot_png();
	this.instance_163.setTransform(2444.4,1140.3,1,1,0,0,0,49.5,50);

	this.instance_164 = new lib.water_hyphen_top_dot_png();
	this.instance_164.setTransform(2353.1,1140.3,1,1,0,0,0,49.5,50);

	this.instance_165 = new lib.water_hyphen_top_dot_png();
	this.instance_165.setTransform(2262.5,1140.3,1,1,0,0,0,49.5,50);

	this.instance_166 = new lib.water_hyphen_top_dot_png();
	this.instance_166.setTransform(2171.2,1140.3,1,1,0,0,0,49.5,50);

	this.instance_167 = new lib.water_hyphen_top_dot_png();
	this.instance_167.setTransform(2084.3,1140.3,1,1,0,0,0,49.5,50);

	this.instance_168 = new lib.hazardsign_dot_png();
	this.instance_168.setTransform(2037.3,1026.7,0.8,0.8,0,0,0,51,46);

	this.instance_169 = new lib.endpole_dot_png();
	this.instance_169.setTransform(2039.3,1083.4,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_170 = new lib.water_hyphen_top_dot_png();
	this.instance_170.setTransform(1993.1,1140.3,1,1,0,0,0,49.5,50);

	this.instance_171 = new lib.water_hyphen_top_dot_png();
	this.instance_171.setTransform(1902.4,1140.3,1,1,0,0,0,49.5,50);

	this.instance_172 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_172.setTransform(178,437.2,1,1,0,0,0,51,16);

	this.instance_173 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_173.setTransform(20.8,698.9,1,1,0,0,0,126,111);

	this.instance_174 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_174.setTransform(22.6,845.2,1,1,0,0,0,126,111);

	this.instance_175 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_175.setTransform(20.8,400.1,1,1,0,0,0,126,111);

	this.instance_176 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_176.setTransform(1025,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_177 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_177.setTransform(1547.6,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_178 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_178.setTransform(1415.1,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_179 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_179.setTransform(1273.8,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_180 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_180.setTransform(1152.5,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_181 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_181.setTransform(934.5,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_182 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_182.setTransform(793.3,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_183 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_183.setTransform(660.7,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_184 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_184.setTransform(519.5,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_185 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_185.setTransform(398.2,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_186 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_186.setTransform(256.9,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_187 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_187.setTransform(124.4,1265.2,1,1,0,0,0,86.5,181.5);

	this.instance_188 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_188.setTransform(-16.9,1265.2,1,1,0,0,0,86.5,181.5);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_189 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_189.setTransform(22.6,546.4,1,1,0,0,0,126,111);

	this.instance_190 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_190.setTransform(20.8,987.7,1,1,0,0,0,126,111);

	this.instance_191 = new lib.wall_hyphen_right_dot_png();
	this.instance_191.setTransform(176.6,375.4,1.056,1.056,0,0,0,51.5,45);

	this.instance_192 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_192.setTransform(167.8,316.4,1.249,1.143,0,0,0,50.5,21);

	this.instance_193 = new lib.water_hyphen_top_dot_png();
	this.instance_193.setTransform(1811.2,1140.3,1,1,0,0,0,49.5,50);

	this.instance_194 = new lib.water_hyphen_middle_dot_png();
	this.instance_194.setTransform(1809.5,1231.1,1,1,0,0,0,49.5,49.5);

	this.instance_195 = new lib.water_hyphen_bottom_dot_png();
	this.instance_195.setTransform(1659,1339.7,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_196 = new lib.water_hyphen_bottom_dot_png();
	this.instance_196.setTransform(1865.1,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_197 = new lib.water_hyphen_bottom_dot_png();
	this.instance_197.setTransform(1982.2,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_198 = new lib.water_hyphen_bottom_dot_png();
	this.instance_198.setTransform(2089.8,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_199 = new lib.water_hyphen_bottom_dot_png();
	this.instance_199.setTransform(2206.9,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_200 = new lib.water_hyphen_bottom_dot_png();
	this.instance_200.setTransform(2324.6,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_201 = new lib.water_hyphen_bottom_dot_png();
	this.instance_201.setTransform(2441.7,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_202 = new lib.water_hyphen_bottom_dot_png();
	this.instance_202.setTransform(2556.6,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_203 = new lib.water_hyphen_bottom_dot_png();
	this.instance_203.setTransform(2673.6,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_204 = new lib.water_hyphen_bottom_dot_png();
	this.instance_204.setTransform(2791.4,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_205 = new lib.water_hyphen_bottom_dot_png();
	this.instance_205.setTransform(2908.5,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_206 = new lib.water_hyphen_bottom_dot_png();
	this.instance_206.setTransform(3024.8,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_207 = new lib.water_hyphen_bottom_dot_png();
	this.instance_207.setTransform(3141.9,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_208 = new lib.water_hyphen_bottom_dot_png();
	this.instance_208.setTransform(3259.6,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_209 = new lib.water_hyphen_bottom_dot_png();
	this.instance_209.setTransform(3376.7,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_210 = new lib.water_hyphen_bottom_dot_png();
	this.instance_210.setTransform(3477.5,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_211 = new lib.water_hyphen_bottom_dot_png();
	this.instance_211.setTransform(3594.6,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_212 = new lib.water_hyphen_bottom_dot_png();
	this.instance_212.setTransform(3712.4,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_213 = new lib.water_hyphen_bottom_dot_png();
	this.instance_213.setTransform(3829.4,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_214 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_214.setTransform(444.5,706.9,1,1,0,0,0,126,111);

	this.instance_215 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_215.setTransform(499.8,827.1,1.159,1.159,0,0,0,51,16);

	this.instance_216 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_216.setTransform(394.4,824.4,1,1.194,0,0,0,63.5,16);

	this.instance_217 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_217.setTransform(1267,437.6,1,1,0,0,0,155.5,45);

	this.instance_218 = new lib.wall_hyphen_left_dot_png();
	this.instance_218.setTransform(847.4,436,1,1,0,0,0,70.5,45);

	this.instance_219 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_219.setTransform(1035.3,437.6,1,1,0,0,0,155.5,45);

	this.instance_220 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_220.setTransform(1440.1,492.8,1,1,0,0,0,51,16);

	this.instance_221 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_221.setTransform(1017.1,495.8,1,1,0,0,0,155.5,16.5);

	this.instance_222 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_222.setTransform(1243.3,495.8,1,1,0,0,0,155.5,16.5);

	this.instance_223 = new lib.bush_hyphen_left_dot_png();
	this.instance_223.setTransform(3420.3,341.3,1,1,0,0,0,28.5,64.5);

	this.instance_224 = new lib.bush_hyphen_repeat_dot_png();
	this.instance_224.setTransform(3611.3,349.3,0.787,0.787,0,0,0,213.5,64.5);

	this.instance_225 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_225.setTransform(496.3,410.1,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_226 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_226.setTransform(432.5,290.5,0.485,0.656,-3.5,0,0,52.4,110.5);

	this.instance_227 = new lib.saw_hyphen_horse_dot_png();
	this.instance_227.setTransform(1055,1040.2,0.543,0.543,0,0,0,93,94.5);

	this.instance_228 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_228.setTransform(-38.1,1486.1,1,1,0,0,0,53,60);

	this.instance_229 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_229.setTransform(-38.1,1568,1,1,0,0,0,53,60);

	this.instance_230 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_230.setTransform(67.5,1480.3,1,1,0,0,0,60,60);

	this.instance_231 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_231.setTransform(385.1,1475.3,1,1,0,0,0,60,60);

	this.instance_232 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_232.setTransform(280.1,1477.8,1,1,0,0,0,60,60);

	this.instance_233 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_233.setTransform(172.6,1477.8,1,1,0,0,0,60,60);

	this.instance_234 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_234.setTransform(383.9,1565.3,1,1,0,0,0,60,60);

	this.instance_235 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_235.setTransform(278.8,1567.8,1,1,0,0,0,60,60);

	this.instance_236 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_236.setTransform(171.3,1567.8,1,1,0,0,0,60,60);

	this.instance_237 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_237.setTransform(66.3,1570.3,1,1,0,0,0,60,60);

	this.instance_238 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_238.setTransform(482.7,1476.5,1,1,0,0,0,60,60);

	this.instance_239 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_239.setTransform(481.4,1566.5,1,1,0,0,0,60,60);

	this.instance_240 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_240.setTransform(585.1,1480.3,1,1,0,0,0,60,60);

	this.instance_241 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_241.setTransform(902.7,1475.3,1,1,0,0,0,60,60);

	this.instance_242 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_242.setTransform(797.7,1477.8,1,1,0,0,0,60,60);

	this.instance_243 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_243.setTransform(690.2,1477.8,1,1,0,0,0,60,60);

	this.instance_244 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_244.setTransform(901.5,1565.3,1,1,0,0,0,60,60);

	this.instance_245 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_245.setTransform(796.4,1567.8,1,1,0,0,0,60,60);

	this.instance_246 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_246.setTransform(688.9,1567.8,1,1,0,0,0,60,60);

	this.instance_247 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_247.setTransform(583.9,1570.3,1,1,0,0,0,60,60);

	this.instance_248 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_248.setTransform(1000.3,1476.5,1,1,0,0,0,60,60);

	this.instance_249 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_249.setTransform(999,1566.5,1,1,0,0,0,60,60);

	this.instance_250 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_250.setTransform(1105.2,1480.3,1,1,0,0,0,60,60);

	this.instance_251 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_251.setTransform(1422.8,1475.3,1,1,0,0,0,60,60);

	this.instance_252 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_252.setTransform(1317.8,1477.8,1,1,0,0,0,60,60);

	this.instance_253 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_253.setTransform(1210.3,1477.8,1,1,0,0,0,60,60);

	this.instance_254 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_254.setTransform(1421.6,1565.3,1,1,0,0,0,60,60);

	this.instance_255 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_255.setTransform(1316.5,1567.8,1,1,0,0,0,60,60);

	this.instance_256 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_256.setTransform(1209,1567.8,1,1,0,0,0,60,60);

	this.instance_257 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_257.setTransform(1104,1570.3,1,1,0,0,0,60,60);

	this.instance_258 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_258.setTransform(1520.4,1476.5,1,1,0,0,0,60,60);

	this.instance_259 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_259.setTransform(1519.1,1566.5,1,1,0,0,0,60,60);

	this.instance_260 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_260.setTransform(1616.1,1478.4,1,1,0,0,0,60,60);

	this.instance_261 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_261.setTransform(1614.8,1569,1,1,0,0,0,60,60);

	this.instance_262 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_262.setTransform(1721,1491.5,1,1,0,0,0,53,60);

	this.instance_263 = new lib.water_hyphen_middle_dot_png();
	this.instance_263.setTransform(1807,1447.5,1,1,0,0,0,49.5,49.5);

	this.instance_264 = new lib.water_hyphen_middle_dot_png();
	this.instance_264.setTransform(1807,1401.2,1,1,0,0,0,49.5,49.5);

	this.instance_265 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_265.setTransform(1722.9,1572.1,1,1,0,0,0,53,60);

	this.instance_266 = new lib.water_hyphen_bottom_dot_png();
	this.instance_266.setTransform(1747.3,1552.3,1.251,1.251,0,0,0,49.5,49.5);

	this.instance_267 = new lib.endpole_dot_png();
	this.instance_267.setTransform(3545.6,240.3,1,1,0,0,0,8,39.5);

	this.instance_268 = new lib.endflag_dot_png();
	this.instance_268.setTransform(3572.7,6.7,1,1,0,0,0,49,56);

	this.instance_269 = new lib.endpole_dot_png();
	this.instance_269.setTransform(3545.3,93.9,1,1,0,0,0,8,39.5);

	this.instance_270 = new lib.endpole_dot_png();
	this.instance_270.setTransform(3545.5,161.7,1,1,0,0,0,8,39.5);

	this.instance_271 = new lib.endpole_dot_png();
	this.instance_271.setTransform(3545.7,318.6,1,1,0,0,0,8,39.5);

	this.instance_272 = new lib.hazardsign_dot_png();
	this.instance_272.setTransform(3409.8,1026.7,0.8,0.8,0,0,0,51,46);

	this.instance_273 = new lib.endpole_dot_png();
	this.instance_273.setTransform(3411.8,1083.4,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_274 = new lib.hazardsign_dot_png();
	this.instance_274.setTransform(2686.7,1026.7,0.8,0.8,0,0,0,51,46);

	this.instance_275 = new lib.endpole_dot_png();
	this.instance_275.setTransform(2688.7,1083.4,0.873,0.873,0,0,0,8.1,39.5);

	this.addChild(this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.isDisp,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.level8platform1,this.level8platform2,this.level4seesaw,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.2,-356.9,3996.6,1989.1);


(lib.level7 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.level7PixiBG();
	this.instance.setTransform(-2,-0.6,0.4,0.4);

	// Layer 2
	this.instance_1 = new lib.level7Pixi();
	this.instance_1.setTransform(-2,-0.6,0.4,0.4);

	// Layer 1
	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(735.2,-122.7,16.246,0.113,180);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(-95.5,284.3,8.249,0.621,90,0,0,0,0.1);

	this.instance_4 = new lib.deadZone();
	this.instance_4.setTransform(1565.8,285.3,8.249,0.621,90);

	this.instance_5 = new lib.deadZone();
	this.instance_5.setTransform(733.4,713.5,16.246,0.462);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(720.6,274.6,15.023,7.381,0,0,0,0.1,0.2);

	this.level8platform2_ref = new lib.platformRef();
	this.level8platform2_ref.setTransform(731.4,174.1,1.75,0.5,0,180,-180,-0.1,0.1);

	this.level8platform1_ref = new lib.platformRef();
	this.level8platform1_ref.setTransform(267.1,282.1,2.259,0.848,90);

	this.level8platform2 = new lib.movingPlatform();
	this.level8platform2.setTransform(643.7,174.2,1,0.5);

	this.level8platform1 = new lib.movingPlatform();
	this.level8platform1.setTransform(268.7,393.1,1,0.861);

	this.instance_6 = new lib.star();
	this.instance_6.setTransform(942,114.2,0.25,0.25,0,0,0,-1,-3);

	this.instance_7 = new lib.star();
	this.instance_7.setTransform(625,400,0.25,0.25,0,0,0,-1,-3);

	this.instance_8 = new lib.star();
	this.instance_8.setTransform(202.8,99.2,0.25,0.25,0,0,0,-1,-3);

	this.instance_9 = new lib.wall();
	this.instance_9.setTransform(550.2,68,0.5,0.125,0,0,0,0.3,0.4);

	this.instance_10 = new lib.wall();
	this.instance_10.setTransform(175,224.2,0.755,0.267,0,0,0,0,0.4);

	this.instance_11 = new lib.floor();
	this.instance_11.setTransform(1409.2,137.9,0.932,0.5,0,0,0,0.2,0.4);

	this.level4seesaw = new lib.seeSaw();
	this.level4seesaw.setTransform(418.7,399.2,1,1,-14);

	this.instance_12 = new lib.floor();
	this.instance_12.setTransform(349.1,449.2,7.112,0.25);

	this.instance_13 = new lib.deadZone();
	this.instance_13.setTransform(1090.2,470.1,7.655,0.25,0,0,0,0.1,0);

	this.instance_14 = new lib.exit();
	this.instance_14.setTransform(1453.3,61.3,0.75,1);

	this.level8platform2_switch = new lib.itemSwitch();
	this.level8platform2_switch.setTransform(550,49.2,0.25,0.25,0,0,0,-1.6,-3);

	this.instance_15 = new lib.skyhook();
	this.instance_15.setTransform(885.7,174.2,0.104,0.142);

	this.instance_16 = new lib.skyhook();
	this.instance_16.setTransform(921.8,174.2,0.104,0.142);

	this.instance_17 = new lib.wall();
	this.instance_17.setTransform(1200.5,187.8,5.057,0.498,0,0,0,0.1,0.3);

	this.instance_18 = new lib.wall();
	this.instance_18.setTransform(456.2,174.3,2.75,0.5,0,0,0,0,0.3);

	this.instance_19 = new lib.wall();
	this.instance_19.setTransform(168.8,93.2,0.125,0.746,0,0,0,0,0.2);

	this.level8platform1_switch = new lib.itemSwitch();
	this.level8platform1_switch.setTransform(150,199.2,0.25,0.25,0,0,0,-1.4,-3);

	this.instance_20 = new lib.wall();
	this.instance_20.setTransform(50,150,0.755,0.514,0,0,0,0,0.4);

	this.instance_21 = new lib.wall();
	this.instance_21.setTransform(196.9,234,0.437,2.067,0,0,0,0,0.4);

	this.instance_22 = new lib.wall();
	this.instance_22.setTransform(25,287.6,0.5,3.253,0,0,0,0,0.3);

	this.p1 = new lib.shaun();
	this.p1.setTransform(25,74.2,0.238,0.66);

	this.addChild(this.p1,this.instance_22,this.instance_21,this.instance_20,this.level8platform1_switch,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.level8platform2_switch,this.instance_14,this.instance_13,this.instance_12,this.level4seesaw,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.level8platform1,this.level8platform2,this.level8platform1_ref,this.level8platform2_ref,this.sizeRef,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-164.2,1723.4,900.8);


(lib.level6 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.deadZone();
	this.instance.setTransform(508.1,-122,11.965,0.128,180);

	this.instance_1 = new lib.deadZone();
	this.instance_1.setTransform(-103.6,338.7,9.337,0.457,90,0,0,0,0.1);

	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(1119.9,339.8,9.337,0.457,90);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(506.8,824.4,11.965,0.523);

	this.instance_4 = new lib.level6Pixi();
	this.instance_4.setTransform(0,0,0.4,0.4);

	// Layer 1
	this.instance_5 = new lib.wall();
	this.instance_5.setTransform(973.4,377.3,1.221,4.798);

	this.instance_6 = new lib.wall();
	this.instance_6.setTransform(312.9,552.6,1,1.3);

	this.instance_7 = new lib.wall();
	this.instance_7.setTransform(600.2,489.6,1.251,2.551,0,0,0,-0.1,-0.1);

	this.instance_8 = new lib.star();
	this.instance_8.setTransform(698.9,12,0.25,0.25,0,0,0,-1,-3);

	this.instance_9 = new lib.star();
	this.instance_9.setTransform(352.5,164.3,0.25,0.25,0,0,0,-1,-3);

	this.instance_10 = new lib.star();
	this.instance_10.setTransform(613.2,310.4,0.25,0.25,0,0,0,-1,-3);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(514.7,310.7,10.673,8.075,0,0,0,-0.1,0.2);

	this.instance_11 = new lib.floor();
	this.instance_11.setTransform(962.4,125,1,0.25,0,0,0,-0.1,0);

	this.instance_12 = new lib.floor();
	this.instance_12.setTransform(650,50,1.251,0.25);

	this.instance_13 = new lib.floor();
	this.instance_13.setTransform(325,200,1.25,0.252);

	this.instance_14 = new lib.floor();
	this.instance_14.setTransform(600,350,1.251,0.25);

	this.instance_15 = new lib.floor();
	this.instance_15.setTransform(312.5,475,1,0.25);

	this.instance_16 = new lib.floor();
	this.instance_16.setTransform(150,437.7,0.252,0.502,0,0,0,0.4,0.4);

	this.instance_17 = new lib.wall();
	this.instance_17.setTransform(74.3,540.2,1.765,1.55,0,0,0,0,0.1);

	this.instance_18 = new lib.deadZone();
	this.instance_18.setTransform(505.8,604.7,10.122,0.25,0,0,0,0.1,0);

	this.instance_19 = new lib.wall();
	this.instance_19.setTransform(1023.3,307.6,0.25,6.178,0,0,0,0,-0.1);

	this.instance_20 = new lib.exit();
	this.instance_20.setTransform(1002,63.4,0.914,0.449,90);

	this.p1 = new lib.shaun();
	this.p1.setTransform(52.6,431.7,0.238,0.66,0,0,0,0.2,-0.2);

	this.instance_21 = new lib.wall();
	this.instance_21.setTransform(-1.1,298.4,0.25,6,0,0,0,0,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,153,0.267)").s().p("AgxAiIAAhEIBiAAIAABEg");
	this.shape.setTransform(3.9,2.5);

	this.addChild(this.shape,this.instance_21,this.p1,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.sizeRef,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.4,-128.4,1269.2,979);


(lib.level5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.floor();
	this.instance.setTransform(249.9,125.5,0.765,0.25);

	this.instance_1 = new lib.floor();
	this.instance_1.setTransform(87.2,203,0.5,0.25);

	this.instance_2 = new lib.floor();
	this.instance_2.setTransform(200.2,277,0.752,0.25);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(435.1,-124.2,10.588,0.084,180);

	this.instance_4 = new lib.deadZone();
	this.instance_4.setTransform(-106.3,178.4,6.132,0.404,90,0,0,0,0.1);

	this.instance_5 = new lib.deadZone();
	this.instance_5.setTransform(976.5,179.1,6.132,0.404,90);

	this.instance_6 = new lib.deadZone();
	this.instance_6.setTransform(434,497.4,10.588,0.343);

	this.instance_7 = new lib.deadZone();
	this.instance_7.setTransform(706.8,350,2.125,0.25);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(434.8,199.9,9.759,4.883,0,0,0,0,0.2);

	this.instance_8 = new lib.floor();
	this.instance_8.setTransform(0,74,0.812,0.25,90,0,0,-1.7,0.2);

	this.instance_9 = new lib.skyhook();
	this.instance_9.setTransform(775,275,0.1,0.1,0,0,180);

	this.instance_10 = new lib.skyhook();
	this.instance_10.setTransform(650,275,0.1,0.1,0,0,180);

	this.instance_11 = new lib.star();
	this.instance_11.setTransform(325,21,0.341,0.341,0,0,0,-1.1,-3);

	this.instance_12 = new lib.star();
	this.instance_12.setTransform(169,129,0.341,0.341,0,0,0,-1.1,-3);

	this.instance_13 = new lib.star();
	this.instance_13.setTransform(725,225,0.341,0.341,0,0,0,-1.1,-3);

	this.instance_14 = new lib.floor();
	this.instance_14.setTransform(300,356.3,6,0.375);

	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(25,243.8,0.75,2.625);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(250,237.5,0.25,2);

	this.instance_17 = new lib.exit();
	this.instance_17.setTransform(891,235.4,0.5,0.5);

	this.instance_18 = new lib.wall();
	this.instance_18.setTransform(850,318.8,0.75,1.125);

	this.p1 = new lib.shaun();
	this.p1.setTransform(47.3,75.8,0.238,0.66);

	// level5Pixi
	this.instance_19 = new lib.level5Pixi();
	this.instance_19.setTransform(-2,-0.6,0.4,0.4);

	// level5PixiBG
	this.instance_20 = new lib.level5PixiBG();
	this.instance_20.setTransform(-2,-0.6,0.4,0.4);

	this.addChild(this.instance_20,this.instance_19,this.p1,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.sizeRef,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.4,-128.4,1157.6,642.9);


(lib.level4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.deadZone();
	this.instance.setTransform(899.2,-276.9,19.289,0.112,180);

	this.instance_1 = new lib.deadZone();
	this.instance_1.setTransform(-63.4,125.8,8.16,0.264,90);

	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(1861.7,126.7,8.16,0.264,90);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(897.1,549,19.289,0.43);

	this.instance_4 = new lib.star();
	this.instance_4.setTransform(848.8,99.2,0.25,0.25,0,0,0,-1,-3);

	this.instance_5 = new lib.star();
	this.instance_5.setTransform(1020.8,274.2,0.25,0.25,0,0,0,-1,-3);

	this.instance_6 = new lib.star();
	this.instance_6.setTransform(648.8,199.2,0.25,0.25,0,0,0,-1,-3);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(883.5,143.4,17.675,6.126,0,0,0,0.1,0.4);

	this.instance_7 = new lib.floor();
	this.instance_7.setTransform(848.8,150.8,1,0.25);

	this.nate14platform2 = new lib.movingPlatform();
	this.nate14platform2.setTransform(972.4,324.2,1.5,0.5);

	this.nate14platform2_ref = new lib.platformRef();
	this.nate14platform2_ref.setTransform(972.9,236.5,1.749,0.5,90);

	this.nate14platform2_switch = new lib.itemSwitch();
	this.nate14platform2_switch.setTransform(848.8,125.8,0.25,0.25);

	this.instance_8 = new lib.exit();
	this.instance_8.setTransform(1740.3,84.9,0.492,1);

	this.instance_9 = new lib.wall();
	this.instance_9.setTransform(1629.2,274.4,2.5,2.75,0,0,0,0.1,0.1);

	this.level4Seesaw2 = new lib.seeSaw();
	this.level4Seesaw2.setTransform(1429,78.8,1.015,1,10);

	this.instance_10 = new lib.deadZone();
	this.instance_10.setTransform(1014.3,411.7,9.827,0.25,0,0,0,-0.1,0);

	this.instance_11 = new lib.wall();
	this.instance_11.setTransform(1199.1,261.6,3,2.751,0,0,0,0.1,0);

	this.instance_12 = new lib.wall();
	this.instance_12.setTransform(839.4,349.2,1.188,1.001);

	this.instance_13 = new lib.wall();
	this.instance_13.setTransform(648.7,349.2,1.374,1.001);

	this.instance_14 = new lib.skyhook();
	this.instance_14.setTransform(748.8,324.2,0.1,0.1,180);

	this.instance_15 = new lib.skyhook();
	this.instance_15.setTransform(548.8,324.2,0.1,0.1,180);

	this.p1 = new lib.shaun();
	this.p1.setTransform(98.8,274.2,0.238,0.66);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(62.8,224.2,0.25,2);

	this.instance_17 = new lib.wall();
	this.instance_17.setTransform(386.3,286.7,1,0.75);

	this.level4seesaw = new lib.seeSaw();
	this.level4seesaw.setTransform(223.8,283.8,1,1,-14);

	this.instance_18 = new lib.wall();
	this.instance_18.setTransform(287,355.3,4.74,0.877);

	// level4Pixi
	this.instance_19 = new lib.level4Pixi();
	this.instance_19.setTransform(-2,-0.6,0.4,0.4);

	// level4PixiBG
	this.instance_20 = new lib.level4PixiBG();
	this.instance_20.setTransform(-2,-0.6,0.4,0.4);

	this.addChild(this.instance_20,this.instance_19,this.instance_18,this.level4seesaw,this.instance_17,this.instance_16,this.p1,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.level4Seesaw2,this.instance_9,this.instance_8,this.nate14platform2_switch,this.nate14platform2_ref,this.nate14platform2,this.instance_7,this.sizeRef,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.6,-282.5,1959.3,853);


(lib.level3Pixi = function() {
	this.initialize();

	// Layer 1
	this.waterwheel1 = new lib.level3movingwheel();
	this.waterwheel1.setTransform(1188.7,208.4);

	this.instance = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance.setTransform(157.5,145.7,0.626,0.626,180,0,0,51,16);

	this.instance_1 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_1.setTransform(215.1,145.6,0.632,0.632,180,0,0,63.5,16);

	this.instance_2 = new lib.hay_hyphen_cube_dot_png();
	this.instance_2.setTransform(2697.6,133.8,1,1,0,0,0,45.5,46.5);

	this.instance_3 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_3.setTransform(4110.8,436.3,0.938,0.861,0,0,0,98.5,47.5);

	this.instance_4 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_4.setTransform(3985.5,436.3,0.938,0.861,0,0,0,38,47.5);

	this.platform1 = new lib.level3movingplatform();
	this.platform1.setTransform(2488.8,462.4,1,1,0,0,0,134.9,36.1);

	this.instance_5 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_5.setTransform(160.5,160.9,0.55,0.55,0,0,0,63.6,16);

	this.instance_6 = new lib.leaves2_dot_png();
	this.instance_6.setTransform(-144.1,648.7,1,1,0,0,0,22,20);

	this.instance_7 = new lib.leaves1_dot_png();
	this.instance_7.setTransform(-138.1,253.2,0.865,0.865,0,0,0,18.5,15);

	this.instance_8 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_8.setTransform(489,439.6,1,1,0,0,0,98.5,41);

	this.instance_9 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_9.setTransform(359.9,438.6,1,1,0,0,0,38,40);

	this.instance_10 = new lib.shadow_hyphen_left_dot_png();
	this.instance_10.setTransform(405.7,480.3,1,1,180,0,0,56,15.5);

	this.instance_11 = new lib.shadow_hyphen_right_dot_png();
	this.instance_11.setTransform(437.2,491.4,1,1,180,0,0,56,15.5);

	this.instance_12 = new lib.dirt3_dot_png();
	this.instance_12.setTransform(4480.7,225.3,0.56,0.56,0,0,0,55.1,88);

	this.instance_13 = new lib.dirt3_dot_png();
	this.instance_13.setTransform(4377,573.4,1,1,0,0,0,55,88);

	this.instance_14 = new lib.dirt2_dot_png();
	this.instance_14.setTransform(4386.3,123.5,1,1,0,0,0,118.5,52.5);

	this.instance_15 = new lib.dirt1_dot_png();
	this.instance_15.setTransform(4412.6,1151.3,1,1,0,0,0,55,87);

	this.instance_16 = new lib.dirt1_dot_png();
	this.instance_16.setTransform(4353.8,1167.3,1,1,0,0,0,55,87);

	this.instance_17 = new lib.leaves2_dot_png();
	this.instance_17.setTransform(4290,486,0.842,0.842,-164.8,0,0,22.1,19.9);

	this.instance_18 = new lib.moss_dot_png();
	this.instance_18.setTransform(4302.1,655.7,1.525,1.525,93.8,0,0,40.6,27.4);

	this.instance_19 = new lib.leaves1_dot_png();
	this.instance_19.setTransform(2237.9,399.4,1,1,0,0,0,18.5,15);

	this.instance_20 = new lib.water_hyphen_top_dot_png();
	this.instance_20.setTransform(2200.7,712.5,1,1,0,0,0,49.5,50);

	this.instance_21 = new lib.water_hyphen_top_dot_png();
	this.instance_21.setTransform(2007.1,712.5,1,1,0,0,0,49.5,50);

	this.instance_22 = new lib.water_hyphen_top_dot_png();
	this.instance_22.setTransform(2104.4,712.5,1,1,0,0,0,49.5,50);

	this.instance_23 = new lib.dirt3_dot_png();
	this.instance_23.setTransform(2107.2,611,1,1,0,0,0,55,88);

	this.instance_24 = new lib.water_hyphen_top_dot_png();
	this.instance_24.setTransform(2298,712.5,1,1,0,0,0,49.5,50);

	this.instance_25 = new lib.moss_dot_png();
	this.instance_25.setTransform(2220.4,653.9,1.71,1.71,0,0,0,40.5,27.5);

	this.instance_26 = new lib.moss_dot_png();
	this.instance_26.setTransform(-150.2,32.1,0.784,0.784,-64.5,0,0,40.6,27.4);

	this.instance_27 = new lib.moss_dot_png();
	this.instance_27.setTransform(-137.8,446.5,0.784,0.784,-89,0,0,40.6,27.4);

	this.instance_28 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_28.setTransform(490.1,690.2,0.9,0.889,0,0,0,98.5,47.5);

	this.instance_29 = new lib.moss_dot_png();
	this.instance_29.setTransform(456.1,630.2,1,1,75,0,0,40.5,27.6);

	this.instance_30 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_30.setTransform(-106,695.5,1,1,0,0,0,98.5,47.5);

	this.instance_31 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_31.setTransform(4467,1144.8,1,1,0,0,0,89.5,111);

	this.instance_32 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_32.setTransform(4470.8,953.3,1,1,0,0,0,89.5,111);

	this.instance_33 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_33.setTransform(4467,770.2,1,1,0,0,0,89.5,111);

	this.instance_34 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_34.setTransform(4470.8,593.6,1,1,0,0,0,89.5,111);

	this.instance_35 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_35.setTransform(4467,410.5,1,1,0,0,0,89.5,111);

	this.instance_36 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_36.setTransform(4467,232.6,1,1,0,0,0,89.5,111);

	this.instance_37 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_37.setTransform(4463.3,49.5,1,1,0,0,0,89.5,111);

	this.instance_38 = new lib.wall_hyphen_left_dot_png();
	this.instance_38.setTransform(4338.3,955.1,1,1,0,0,0,70.5,45);

	this.instance_39 = new lib.wall_hyphen_left_dot_png();
	this.instance_39.setTransform(4338.3,866.8,1,1,0,0,0,70.5,45);

	this.instance_40 = new lib.wall_hyphen_left_dot_png();
	this.instance_40.setTransform(4338.3,781.3,1,1,0,0,0,70.5,45);

	this.instance_41 = new lib.wall_hyphen_left_dot_png();
	this.instance_41.setTransform(4338.3,693,1,1,0,0,0,70.5,45);

	this.instance_42 = new lib.wall_hyphen_left_dot_png();
	this.instance_42.setTransform(4338.3,1210.7,1,1,0,0,0,70.5,45);

	this.instance_43 = new lib.wall_hyphen_left_dot_png();
	this.instance_43.setTransform(4338.3,1125.3,1,1,0,0,0,70.5,45);

	this.instance_44 = new lib.wall_hyphen_left_dot_png();
	this.instance_44.setTransform(4338.3,1036.9,1,1,0,0,0,70.5,45);

	this.instance_45 = new lib.wall_hyphen_left_dot_png();
	this.instance_45.setTransform(4338.3,270.3,1,1,0,0,0,70.5,45);

	this.instance_46 = new lib.wall_hyphen_left_dot_png();
	this.instance_46.setTransform(4338.3,181.9,1,1,0,0,0,70.5,45);

	this.instance_47 = new lib.wall_hyphen_left_dot_png();
	this.instance_47.setTransform(4338.3,96.5,1,1,0,0,0,70.5,45);

	this.instance_48 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_48.setTransform(4342.7,-52.4,1,1,0,0,0,63,21);

	this.instance_49 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_49.setTransform(4503.3,-52.4,1,1,0,0,0,155.5,21);

	this.instance_50 = new lib.water_hyphen_bottom_dot_png();
	this.instance_50.setTransform(4205.5,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_51 = new lib.water_hyphen_bottom_dot_png();
	this.instance_51.setTransform(4156.3,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_52 = new lib.water_hyphen_bottom_dot_png();
	this.instance_52.setTransform(3996.7,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_53 = new lib.water_hyphen_bottom_dot_png();
	this.instance_53.setTransform(3838.6,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_54 = new lib.water_hyphen_bottom_dot_png();
	this.instance_54.setTransform(3682.1,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_55 = new lib.water_hyphen_bottom_dot_png();
	this.instance_55.setTransform(3524,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_56 = new lib.water_hyphen_bottom_dot_png();
	this.instance_56.setTransform(3364.4,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_57 = new lib.water_hyphen_bottom_dot_png();
	this.instance_57.setTransform(3206.3,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_58 = new lib.water_hyphen_bottom_dot_png();
	this.instance_58.setTransform(3049.6,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_59 = new lib.water_hyphen_bottom_dot_png();
	this.instance_59.setTransform(2891.5,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_60 = new lib.water_hyphen_bottom_dot_png();
	this.instance_60.setTransform(2731.9,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_61 = new lib.water_hyphen_bottom_dot_png();
	this.instance_61.setTransform(2573.8,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_62 = new lib.water_hyphen_bottom_dot_png();
	this.instance_62.setTransform(2417.2,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_63 = new lib.water_hyphen_bottom_dot_png();
	this.instance_63.setTransform(2259.1,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_64 = new lib.water_hyphen_bottom_dot_png();
	this.instance_64.setTransform(2099.5,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_65 = new lib.water_hyphen_bottom_dot_png();
	this.instance_65.setTransform(1941.4,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_66 = new lib.water_hyphen_bottom_dot_png();
	this.instance_66.setTransform(1784.2,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_67 = new lib.water_hyphen_bottom_dot_png();
	this.instance_67.setTransform(1626.1,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_68 = new lib.water_hyphen_bottom_dot_png();
	this.instance_68.setTransform(1466.5,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_69 = new lib.water_hyphen_bottom_dot_png();
	this.instance_69.setTransform(1308.4,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_70 = new lib.water_hyphen_bottom_dot_png();
	this.instance_70.setTransform(1151.8,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_71 = new lib.water_hyphen_bottom_dot_png();
	this.instance_71.setTransform(993.7,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_72 = new lib.water_hyphen_bottom_dot_png();
	this.instance_72.setTransform(834.1,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_73 = new lib.water_hyphen_top_dot_png();
	this.instance_73.setTransform(4241.6,712.5,1,1,0,0,0,49.5,50);

	this.instance_74 = new lib.water_hyphen_top_dot_png();
	this.instance_74.setTransform(4144.3,712.5,1,1,0,0,0,49.5,50);

	this.instance_75 = new lib.water_hyphen_top_dot_png();
	this.instance_75.setTransform(4046.8,712.5,1,1,0,0,0,49.5,50);

	this.instance_76 = new lib.water_hyphen_top_dot_png();
	this.instance_76.setTransform(3949.4,712.5,1,1,0,0,0,49.5,50);

	this.instance_77 = new lib.water_hyphen_top_dot_png();
	this.instance_77.setTransform(3852.5,712.5,1,1,0,0,0,49.5,50);

	this.instance_78 = new lib.water_hyphen_top_dot_png();
	this.instance_78.setTransform(3755.1,712.5,1,1,0,0,0,49.5,50);

	this.instance_79 = new lib.water_hyphen_top_dot_png();
	this.instance_79.setTransform(3657.6,712.5,1,1,0,0,0,49.5,50);

	this.instance_80 = new lib.water_hyphen_top_dot_png();
	this.instance_80.setTransform(3563.6,712.5,1,1,0,0,0,49.5,50);

	this.instance_81 = new lib.water_hyphen_top_dot_png();
	this.instance_81.setTransform(3466.1,712.5,1,1,0,0,0,49.5,50);

	this.instance_82 = new lib.water_hyphen_top_dot_png();
	this.instance_82.setTransform(3368.7,712.5,1,1,0,0,0,49.5,50);

	this.instance_83 = new lib.water_hyphen_top_dot_png();
	this.instance_83.setTransform(3271.5,712.5,1,1,0,0,0,49.5,50);

	this.instance_84 = new lib.water_hyphen_top_dot_png();
	this.instance_84.setTransform(3174.1,712.5,1,1,0,0,0,49.5,50);

	this.instance_85 = new lib.water_hyphen_top_dot_png();
	this.instance_85.setTransform(3076.6,712.5,1,1,0,0,0,49.5,50);

	this.instance_86 = new lib.water_hyphen_top_dot_png();
	this.instance_86.setTransform(2979.3,712.5,1,1,0,0,0,49.5,50);

	this.instance_87 = new lib.water_hyphen_top_dot_png();
	this.instance_87.setTransform(2882.3,712.5,1,1,0,0,0,49.5,50);

	this.instance_88 = new lib.water_hyphen_top_dot_png();
	this.instance_88.setTransform(2785,712.5,1,1,0,0,0,49.5,50);

	this.instance_89 = new lib.water_hyphen_top_dot_png();
	this.instance_89.setTransform(2687.5,712.5,1,1,0,0,0,49.5,50);

	this.instance_90 = new lib.water_hyphen_top_dot_png();
	this.instance_90.setTransform(2590.1,712.5,1,1,0,0,0,49.5,50);

	this.instance_91 = new lib.water_hyphen_top_dot_png();
	this.instance_91.setTransform(2492.9,712.5,1,1,0,0,0,49.5,50);

	this.instance_92 = new lib.water_hyphen_top_dot_png();
	this.instance_92.setTransform(2395.5,712.5,1,1,0,0,0,49.5,50);

	this.instance_93 = new lib.water_hyphen_top_dot_png();
	this.instance_93.setTransform(1909.6,712.5,1,1,0,0,0,49.5,50);

	this.instance_94 = new lib.water_hyphen_top_dot_png();
	this.instance_94.setTransform(1812.2,712.5,1,1,0,0,0,49.5,50);

	this.instance_95 = new lib.water_hyphen_top_dot_png();
	this.instance_95.setTransform(1715,712.5,1,1,0,0,0,49.5,50);

	this.instance_96 = new lib.water_hyphen_top_dot_png();
	this.instance_96.setTransform(1617.6,712.5,1,1,0,0,0,49.5,50);

	this.instance_97 = new lib.water_hyphen_top_dot_png();
	this.instance_97.setTransform(1520.1,712.5,1,1,0,0,0,49.5,50);

	this.instance_98 = new lib.water_hyphen_top_dot_png();
	this.instance_98.setTransform(1422.8,712.5,1,1,0,0,0,49.5,50);

	this.instance_99 = new lib.water_hyphen_top_dot_png();
	this.instance_99.setTransform(1325.8,712.5,1,1,0,0,0,49.5,50);

	this.instance_100 = new lib.water_hyphen_top_dot_png();
	this.instance_100.setTransform(1228.5,712.5,1,1,0,0,0,49.5,50);

	this.instance_101 = new lib.water_hyphen_top_dot_png();
	this.instance_101.setTransform(1131,712.5,1,1,0,0,0,49.5,50);

	this.instance_102 = new lib.water_hyphen_top_dot_png();
	this.instance_102.setTransform(1033.6,712.5,1,1,0,0,0,49.5,50);

	this.instance_103 = new lib.water_hyphen_top_dot_png();
	this.instance_103.setTransform(936.4,712.5,1,1,0,0,0,49.5,50);

	this.instance_104 = new lib.water_hyphen_top_dot_png();
	this.instance_104.setTransform(839,712.5,1,1,0,0,0,49.5,50);

	this.instance_105 = new lib.water_hyphen_top_dot_png();
	this.instance_105.setTransform(741.5,712.5,1,1,0,0,0,49.5,50);

	this.instance_106 = new lib.water_hyphen_middle_dot_png();
	this.instance_106.setTransform(4225.9,805.1,1.233,1,0,0,0,49.5,49.5);

	this.instance_107 = new lib.water_hyphen_middle_dot_png();
	this.instance_107.setTransform(4143.5,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_108 = new lib.water_hyphen_middle_dot_png();
	this.instance_108.setTransform(4050.7,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_109 = new lib.water_hyphen_middle_dot_png();
	this.instance_109.setTransform(3960.7,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_110 = new lib.water_hyphen_middle_dot_png();
	this.instance_110.setTransform(3867.8,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_111 = new lib.water_hyphen_middle_dot_png();
	this.instance_111.setTransform(3785.4,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_112 = new lib.water_hyphen_middle_dot_png();
	this.instance_112.setTransform(3692.6,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_113 = new lib.water_hyphen_middle_dot_png();
	this.instance_113.setTransform(3599.7,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_114 = new lib.water_hyphen_middle_dot_png();
	this.instance_114.setTransform(3506.9,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_115 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_115.setTransform(2229.1,511,1.075,1.075,0,0,0,126,111);

	this.instance_116 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_116.setTransform(2149.4,511,1.075,1.075,0,0,0,126,111);

	this.instance_117 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_117.setTransform(2227.9,557.1,1.075,1.075,0,0,0,126,111);

	this.instance_118 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_118.setTransform(2148.1,557.1,1.075,1.075,0,0,0,126,111);

	this.instance_119 = new lib.water_hyphen_middle_dot_png();
	this.instance_119.setTransform(3431.3,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_120 = new lib.water_hyphen_middle_dot_png();
	this.instance_120.setTransform(3338.5,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_121 = new lib.water_hyphen_middle_dot_png();
	this.instance_121.setTransform(3256.1,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_122 = new lib.water_hyphen_middle_dot_png();
	this.instance_122.setTransform(3163.2,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_123 = new lib.water_hyphen_middle_dot_png();
	this.instance_123.setTransform(3073.2,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_124 = new lib.water_hyphen_middle_dot_png();
	this.instance_124.setTransform(2980.4,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_125 = new lib.water_hyphen_middle_dot_png();
	this.instance_125.setTransform(2898,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_126 = new lib.water_hyphen_middle_dot_png();
	this.instance_126.setTransform(2805.1,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_127 = new lib.water_hyphen_middle_dot_png();
	this.instance_127.setTransform(2712.3,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_128 = new lib.water_hyphen_middle_dot_png();
	this.instance_128.setTransform(2619.4,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_129 = new lib.water_hyphen_middle_dot_png();
	this.instance_129.setTransform(2537,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_130 = new lib.water_hyphen_middle_dot_png();
	this.instance_130.setTransform(2444.2,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_131 = new lib.water_hyphen_middle_dot_png();
	this.instance_131.setTransform(2354.2,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_132 = new lib.water_hyphen_middle_dot_png();
	this.instance_132.setTransform(2261.3,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_133 = new lib.water_hyphen_middle_dot_png();
	this.instance_133.setTransform(2178.9,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_134 = new lib.water_hyphen_middle_dot_png();
	this.instance_134.setTransform(2086.1,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_135 = new lib.water_hyphen_middle_dot_png();
	this.instance_135.setTransform(1993.4,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_136 = new lib.water_hyphen_middle_dot_png();
	this.instance_136.setTransform(1900.5,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_137 = new lib.water_hyphen_middle_dot_png();
	this.instance_137.setTransform(1818.1,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_138 = new lib.water_hyphen_middle_dot_png();
	this.instance_138.setTransform(1725.3,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_139 = new lib.water_hyphen_middle_dot_png();
	this.instance_139.setTransform(1635.3,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_140 = new lib.water_hyphen_middle_dot_png();
	this.instance_140.setTransform(1542.4,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_141 = new lib.water_hyphen_middle_dot_png();
	this.instance_141.setTransform(1460,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_142 = new lib.water_hyphen_middle_dot_png();
	this.instance_142.setTransform(1367.2,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_143 = new lib.water_hyphen_middle_dot_png();
	this.instance_143.setTransform(1274.3,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_144 = new lib.water_hyphen_middle_dot_png();
	this.instance_144.setTransform(1181.5,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_145 = new lib.water_hyphen_middle_dot_png();
	this.instance_145.setTransform(1099.1,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_146 = new lib.water_hyphen_middle_dot_png();
	this.instance_146.setTransform(1006.2,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_147 = new lib.water_hyphen_middle_dot_png();
	this.instance_147.setTransform(916.2,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_148 = new lib.water_hyphen_middle_dot_png();
	this.instance_148.setTransform(823.4,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_149 = new lib.water_hyphen_middle_dot_png();
	this.instance_149.setTransform(741,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_150 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_150.setTransform(1690.9,437.6,1.096,1,0,0,0,98.5,41);

	this.instance_151 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_151.setTransform(1830.2,436.6,1.152,1,0,0,0,34.5,40);

	this.instance_152 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_152.setTransform(1490,437.6,1,1,0,0,0,98.5,41);

	this.instance_153 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_153.setTransform(1360.9,436.6,1,1,0,0,0,38,40);

	this.instance_154 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_154.setTransform(502.6,892,1,1,0,0,0,98.5,70);

	this.instance_155 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_155.setTransform(690,439.6,1.096,1,0,0,0,98.5,41);

	this.instance_156 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_156.setTransform(829.3,438.6,1.152,1,0,0,0,34.5,40);

	this.instance_157 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_157.setTransform(-153.5,498.3,0.71,0.71,0,0,0,52.5,110.5);

	this.instance_158 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_158.setTransform(-154.1,-7.4,0.71,0.71,0,0,0,52.5,110.5);

	this.instance_159 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_159.setTransform(578.8,923.8,1,1,0,0,0,26,70);

	this.instance_160 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_160.setTransform(578.6,1076.1,1,1,0,0,0,25,49);

	this.instance_161 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_161.setTransform(502.6,922.3,1,1,0,0,0,98.5,70);

	this.instance_162 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_162.setTransform(135.9,901.5,1,1,0,0,0,98.5,70);

	this.instance_163 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_163.setTransform(500.5,1050.8,1,1,0,0,0,98.5,49);

	this.instance_164 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_164.setTransform(393.5,1050.8,1,1,0,0,0,98.5,49);

	this.instance_165 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_165.setTransform(203.8,1050.8,1,1,0,0,0,98.5,49);

	this.instance_166 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_166.setTransform(83.7,1050.8,1,1,0,0,0,98.5,49);

	this.instance_167 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_167.setTransform(-106,1050.8,1,1,0,0,0,98.5,49);

	this.instance_168 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_168.setTransform(325.2,898,1,1,0,0,0,98.5,70);

	this.instance_169 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_169.setTransform(-108.6,888.3,1,1,0,0,0,98.5,70);

	this.instance_170 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_170.setTransform(-9.5,888.3,1,1,0,0,0,98.5,70);

	this.instance_171 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_171.setTransform(327.4,695.5,1,1,0,0,0,98.5,47.5);

	this.instance_172 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_172.setTransform(135.3,695.5,1,1,0,0,0,98.5,47.5);

	this.instance_173 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_173.setTransform(76.5,695.5,1,1,0,0,0,98.5,47.5);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_174 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_174.setTransform(-106,934.4,1,1,0,0,0,98.5,70);

	this.instance_175 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_175.setTransform(81.3,934.4,1,1,0,0,0,98.5,70);

	this.instance_176 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_176.setTransform(226.6,934.4,1,1,0,0,0,98.5,70);

	this.instance_177 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_177.setTransform(413.9,934.4,1,1,0,0,0,98.5,70);

	this.instance_178 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_178.setTransform(502.6,934.4,1,1,0,0,0,98.5,70);

	this.instance_179 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_179.setTransform(500.5,1119.6,1,1,0,0,0,98.5,49);

	this.instance_180 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_180.setTransform(393.5,1119.6,1,1,0,0,0,98.5,49);

	this.instance_181 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_181.setTransform(203.8,1119.6,1,1,0,0,0,98.5,49);

	this.instance_182 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_182.setTransform(83.7,1119.6,1,1,0,0,0,98.5,49);

	this.instance_183 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_183.setTransform(-106,1119.6,1,1,0,0,0,98.5,49);

	this.instance_184 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_184.setTransform(500.5,1145.3,1,1,0,0,0,98.5,49);

	this.instance_185 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_185.setTransform(393.5,1145.3,1,1,0,0,0,98.5,49);

	this.instance_186 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_186.setTransform(203.8,1145.3,1,1,0,0,0,98.5,49);

	this.instance_187 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_187.setTransform(83.7,1145.3,1,1,0,0,0,98.5,49);

	this.instance_188 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_188.setTransform(-106,1145.3,1,1,0,0,0,98.5,49);

	this.instance_189 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_189.setTransform(327.4,726.1,1,1,0,0,0,98.5,47.5);

	this.instance_190 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_190.setTransform(327.4,760,1,1,0,0,0,98.5,47.5);

	this.instance_191 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_191.setTransform(327.4,783,1,1,0,0,0,98.5,47.5);

	this.instance_192 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_192.setTransform(135.9,726.3,1,1,0,0,0,98.5,47.5);

	this.instance_193 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_193.setTransform(135.3,761.6,1,1,0,0,0,98.5,47.5);

	this.instance_194 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_194.setTransform(135.9,785.2,1,1,0,0,0,98.5,47.5);

	this.instance_195 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_195.setTransform(76.5,716.2,1,1,0,0,0,98.5,47.5);

	this.instance_196 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_196.setTransform(-106,716.2,1,1,0,0,0,98.5,47.5);

	this.instance_197 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_197.setTransform(76.5,746.5,1,1,0,0,0,98.5,47.5);

	this.instance_198 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_198.setTransform(-106,746.5,1,1,0,0,0,98.5,47.5);

	this.instance_199 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_199.setTransform(73.9,773.8,1,1,0,0,0,98.5,47.5);

	this.instance_200 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_200.setTransform(-108.6,773.8,1,1,0,0,0,98.5,47.5);

	this.instance_201 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_201.setTransform(578.4,963.8,1,1,0,0,0,26,70);

	this.instance_202 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_202.setTransform(577.8,1172.8,1,1,0,0,0,25,49);

	this.instance_203 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_203.setTransform(-153.4,117.4,0.71,0.71,0,0,0,52.5,110.5);

	this.instance_204 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_204.setTransform(-153.6,243.9,0.71,0.71,0,0,0,52.5,110.5);

	this.instance_205 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_205.setTransform(-152.9,368.7,0.71,0.71,0,0,0,52.5,110.5);

	this.instance_206 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_206.setTransform(-154.1,626.2,0.71,0.71,0,0,0,52.5,110.5);

	this.instance_207 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_207.setTransform(585.4,688.1,0.862,0.862,0,0,0,34.5,46.5);

	this.instance_208 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_208.setTransform(500,718.7,1.001,0.889,0,0,0,98.5,47.5);

	this.instance_209 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_209.setTransform(500,752.7,1.001,0.889,0,0,0,98.5,47.5);

	this.instance_210 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_210.setTransform(502.5,782.5,1.001,0.889,0,0,0,98.5,47.5);

	this.instance_211 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_211.setTransform(581.8,732.3,0.838,0.838,0,0,0,26,70);

	this.instance_212 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_212.setTransform(583.8,798.9,0.838,0.838,0,0,0,26,70);

	this.instance_213 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_213.setTransform(422.9,552.5,1,1,0,0,0,89.5,111);

	this.instance_214 = new lib.water_hyphen_middle_dot_png();
	this.instance_214.setTransform(648.1,805.1,1,1,0,0,0,49.5,49.5);

	this.instance_215 = new lib.water_hyphen_middle_dot_png();
	this.instance_215.setTransform(4228.1,899.8,1.186,1,0,0,0,49.5,49.5);

	this.instance_216 = new lib.water_hyphen_middle_dot_png();
	this.instance_216.setTransform(4145.7,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_217 = new lib.water_hyphen_middle_dot_png();
	this.instance_217.setTransform(4052.9,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_218 = new lib.water_hyphen_middle_dot_png();
	this.instance_218.setTransform(3962.9,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_219 = new lib.water_hyphen_middle_dot_png();
	this.instance_219.setTransform(3870,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_220 = new lib.water_hyphen_middle_dot_png();
	this.instance_220.setTransform(3787.6,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_221 = new lib.water_hyphen_middle_dot_png();
	this.instance_221.setTransform(3694.8,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_222 = new lib.water_hyphen_middle_dot_png();
	this.instance_222.setTransform(3601.9,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_223 = new lib.water_hyphen_middle_dot_png();
	this.instance_223.setTransform(3509.1,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_224 = new lib.water_hyphen_middle_dot_png();
	this.instance_224.setTransform(3433.5,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_225 = new lib.water_hyphen_middle_dot_png();
	this.instance_225.setTransform(3340.7,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_226 = new lib.water_hyphen_middle_dot_png();
	this.instance_226.setTransform(3258.3,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_227 = new lib.water_hyphen_middle_dot_png();
	this.instance_227.setTransform(3165.4,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_228 = new lib.water_hyphen_middle_dot_png();
	this.instance_228.setTransform(3075.4,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_229 = new lib.water_hyphen_middle_dot_png();
	this.instance_229.setTransform(2982.6,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_230 = new lib.water_hyphen_middle_dot_png();
	this.instance_230.setTransform(2900.2,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_231 = new lib.water_hyphen_middle_dot_png();
	this.instance_231.setTransform(2807.3,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_232 = new lib.water_hyphen_middle_dot_png();
	this.instance_232.setTransform(2714.5,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_233 = new lib.water_hyphen_middle_dot_png();
	this.instance_233.setTransform(2621.6,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_234 = new lib.water_hyphen_middle_dot_png();
	this.instance_234.setTransform(2539.2,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_235 = new lib.water_hyphen_middle_dot_png();
	this.instance_235.setTransform(2446.4,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_236 = new lib.water_hyphen_middle_dot_png();
	this.instance_236.setTransform(2356.4,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_237 = new lib.water_hyphen_middle_dot_png();
	this.instance_237.setTransform(2263.5,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_238 = new lib.water_hyphen_middle_dot_png();
	this.instance_238.setTransform(2181.1,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_239 = new lib.water_hyphen_middle_dot_png();
	this.instance_239.setTransform(2088.3,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_240 = new lib.water_hyphen_middle_dot_png();
	this.instance_240.setTransform(1995.6,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_241 = new lib.water_hyphen_middle_dot_png();
	this.instance_241.setTransform(1902.7,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_242 = new lib.water_hyphen_middle_dot_png();
	this.instance_242.setTransform(1820.3,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_243 = new lib.water_hyphen_middle_dot_png();
	this.instance_243.setTransform(1727.5,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_244 = new lib.water_hyphen_middle_dot_png();
	this.instance_244.setTransform(1637.5,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_245 = new lib.water_hyphen_middle_dot_png();
	this.instance_245.setTransform(1544.6,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_246 = new lib.water_hyphen_middle_dot_png();
	this.instance_246.setTransform(1462.2,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_247 = new lib.water_hyphen_middle_dot_png();
	this.instance_247.setTransform(1369.4,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_248 = new lib.water_hyphen_middle_dot_png();
	this.instance_248.setTransform(1276.5,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_249 = new lib.water_hyphen_middle_dot_png();
	this.instance_249.setTransform(1183.7,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_250 = new lib.water_hyphen_middle_dot_png();
	this.instance_250.setTransform(1101.3,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_251 = new lib.water_hyphen_middle_dot_png();
	this.instance_251.setTransform(1008.4,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_252 = new lib.water_hyphen_middle_dot_png();
	this.instance_252.setTransform(918.4,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_253 = new lib.water_hyphen_middle_dot_png();
	this.instance_253.setTransform(825.6,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_254 = new lib.water_hyphen_middle_dot_png();
	this.instance_254.setTransform(743.2,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_255 = new lib.water_hyphen_middle_dot_png();
	this.instance_255.setTransform(650.3,899.8,1,1,0,0,0,49.5,49.5);

	this.instance_256 = new lib.water_hyphen_middle_dot_png();
	this.instance_256.setTransform(4225.9,993.7,1.233,1,0,0,0,49.5,49.5);

	this.instance_257 = new lib.water_hyphen_middle_dot_png();
	this.instance_257.setTransform(4143.5,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_258 = new lib.water_hyphen_middle_dot_png();
	this.instance_258.setTransform(4050.7,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_259 = new lib.water_hyphen_middle_dot_png();
	this.instance_259.setTransform(3960.7,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_260 = new lib.water_hyphen_middle_dot_png();
	this.instance_260.setTransform(3867.8,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_261 = new lib.water_hyphen_middle_dot_png();
	this.instance_261.setTransform(3785.4,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_262 = new lib.water_hyphen_middle_dot_png();
	this.instance_262.setTransform(3692.6,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_263 = new lib.water_hyphen_middle_dot_png();
	this.instance_263.setTransform(3599.7,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_264 = new lib.water_hyphen_middle_dot_png();
	this.instance_264.setTransform(3506.9,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_265 = new lib.water_hyphen_middle_dot_png();
	this.instance_265.setTransform(3431.3,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_266 = new lib.water_hyphen_middle_dot_png();
	this.instance_266.setTransform(3338.5,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_267 = new lib.water_hyphen_middle_dot_png();
	this.instance_267.setTransform(3256.1,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_268 = new lib.water_hyphen_middle_dot_png();
	this.instance_268.setTransform(3163.2,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_269 = new lib.water_hyphen_middle_dot_png();
	this.instance_269.setTransform(3073.2,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_270 = new lib.water_hyphen_middle_dot_png();
	this.instance_270.setTransform(2980.4,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_271 = new lib.water_hyphen_middle_dot_png();
	this.instance_271.setTransform(2898,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_272 = new lib.water_hyphen_middle_dot_png();
	this.instance_272.setTransform(2805.1,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_273 = new lib.water_hyphen_middle_dot_png();
	this.instance_273.setTransform(2712.3,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_274 = new lib.water_hyphen_middle_dot_png();
	this.instance_274.setTransform(2619.4,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_275 = new lib.water_hyphen_middle_dot_png();
	this.instance_275.setTransform(2537,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_276 = new lib.water_hyphen_middle_dot_png();
	this.instance_276.setTransform(2444.2,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_277 = new lib.water_hyphen_middle_dot_png();
	this.instance_277.setTransform(2354.2,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_278 = new lib.water_hyphen_middle_dot_png();
	this.instance_278.setTransform(2261.3,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_279 = new lib.water_hyphen_middle_dot_png();
	this.instance_279.setTransform(2178.9,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_280 = new lib.water_hyphen_middle_dot_png();
	this.instance_280.setTransform(2086.1,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_281 = new lib.water_hyphen_middle_dot_png();
	this.instance_281.setTransform(1993.4,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_282 = new lib.water_hyphen_middle_dot_png();
	this.instance_282.setTransform(1900.5,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_283 = new lib.water_hyphen_middle_dot_png();
	this.instance_283.setTransform(1818.1,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_284 = new lib.water_hyphen_middle_dot_png();
	this.instance_284.setTransform(1725.3,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_285 = new lib.water_hyphen_middle_dot_png();
	this.instance_285.setTransform(1635.3,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_286 = new lib.water_hyphen_middle_dot_png();
	this.instance_286.setTransform(1542.4,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_287 = new lib.water_hyphen_middle_dot_png();
	this.instance_287.setTransform(1460,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_288 = new lib.water_hyphen_middle_dot_png();
	this.instance_288.setTransform(1367.2,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_289 = new lib.water_hyphen_middle_dot_png();
	this.instance_289.setTransform(1274.3,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_290 = new lib.water_hyphen_middle_dot_png();
	this.instance_290.setTransform(1181.5,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_291 = new lib.water_hyphen_middle_dot_png();
	this.instance_291.setTransform(1099.1,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_292 = new lib.water_hyphen_middle_dot_png();
	this.instance_292.setTransform(1006.2,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_293 = new lib.water_hyphen_middle_dot_png();
	this.instance_293.setTransform(916.2,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_294 = new lib.water_hyphen_middle_dot_png();
	this.instance_294.setTransform(823.4,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_295 = new lib.water_hyphen_middle_dot_png();
	this.instance_295.setTransform(741,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_296 = new lib.water_hyphen_middle_dot_png();
	this.instance_296.setTransform(648.1,993.7,1,1,0,0,0,49.5,49.5);

	this.instance_297 = new lib.water_hyphen_top_dot_png();
	this.instance_297.setTransform(644.2,712.5,1,1,0,0,0,49.5,50);

	this.instance_298 = new lib.water_hyphen_bottom_dot_png();
	this.instance_298.setTransform(676,1108.4,1.643,1.643,0,0,0,49.5,49.5);

	this.instance_299 = new lib.wall_hyphen_left_dot_png();
	this.instance_299.setTransform(4338.3,8.1,1,1,0,0,0,70.5,45);

	this.instance_300 = new lib.wall_hyphen_left_dot_png();
	this.instance_300.setTransform(4338.3,614.2,1,1,0,0,0,70.5,45);

	this.instance_301 = new lib.wall_hyphen_left_dot_png();
	this.instance_301.setTransform(4338.3,525.9,1,1,0,0,0,70.5,45);

	this.instance_302 = new lib.wall_hyphen_left_dot_png();
	this.instance_302.setTransform(4338.3,440.4,1,1,0,0,0,70.5,45);

	this.instance_303 = new lib.wall_hyphen_left_dot_png();
	this.instance_303.setTransform(4338.3,352.1,1,1,0,0,0,70.5,45);

	this.instance_304 = new lib.spade_dot_png();
	this.instance_304.setTransform(652.5,391.3,1,1,0,0,0,92.5,15);

	this.instance_305 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_305.setTransform(224.2,160,0.609,0.609,0,0,0,51.1,16);

	this.instance_306 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_306.setTransform(4206.3,436.3,0.938,0.861,0,0,0,98.5,47.5);

	this.instance_307 = new lib.fork_dot_png();
	this.instance_307.setTransform(4271.2,337,1.015,0.881,0,0,180,18,82.5);

	this.instance_308 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_308.setTransform(4043.9,460.4,1,1,-90,0,0,25,70);

	this.instance_309 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_309.setTransform(4180.9,460.4,1,1,-90,0,0,25,70);

	this.instance_310 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_310.setTransform(4317.4,460.4,1,1,-90,0,0,25,70);

	this.instance_311 = new lib.hazardsign_dot_png();
	this.instance_311.setTransform(1072.3,594,0.8,0.8,0,0,0,51,46);

	this.instance_312 = new lib.endpole_dot_png();
	this.instance_312.setTransform(1074.3,650.7,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_313 = new lib.hazardsign_dot_png();
	this.instance_313.setTransform(1734.6,596.5,0.8,0.8,0,0,0,51,46);

	this.instance_314 = new lib.endpole_dot_png();
	this.instance_314.setTransform(1736.6,653.2,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_315 = new lib.hazardsign_dot_png();
	this.instance_315.setTransform(3541.7,596.5,0.8,0.8,0,0,0,51,46);

	this.instance_316 = new lib.endpole_dot_png();
	this.instance_316.setTransform(3543.7,653.2,0.873,0.873,0,0,0,8.1,39.5);

	this.instance_317 = new lib.hazardsign_dot_png();
	this.instance_317.setTransform(2834.4,596.5,0.8,0.8,0,0,0,51,46);

	this.instance_318 = new lib.endpole_dot_png();
	this.instance_318.setTransform(2836.4,653.2,0.873,0.873,0,0,0,8.1,39.5);

	this.addChild(this.instance_318,this.instance_317,this.instance_316,this.instance_315,this.instance_314,this.instance_313,this.instance_312,this.instance_311,this.instance_310,this.instance_309,this.instance_308,this.instance_307,this.instance_306,this.instance_305,this.instance_304,this.instance_303,this.instance_302,this.instance_301,this.instance_300,this.instance_299,this.instance_298,this.instance_297,this.instance_296,this.instance_295,this.instance_294,this.instance_293,this.instance_292,this.instance_291,this.instance_290,this.instance_289,this.instance_288,this.instance_287,this.instance_286,this.instance_285,this.instance_284,this.instance_283,this.instance_282,this.instance_281,this.instance_280,this.instance_279,this.instance_278,this.instance_277,this.instance_276,this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.isDisp,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.platform1,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.waterwheel1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-207.1,-331.8,4866,1587.7);


(lib.level3 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.level3Pixi();
	this.instance.setTransform(0,0,0.4,0.4);

	// Layer 1
	this.instance_1 = new lib.floor();
	this.instance_1.setTransform(1080,55,0.25,0.25);

	this.instance_2 = new lib.wall();
	this.instance_2.setTransform(1718.7,213.5,0.128,4.751,0,0,0,0.4,0.2);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(869.3,180.9,18.858,5.397,0,0,0,0.1,0.1);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(978,368.1,14.75,2,0,0,0,0.2,-0.1);

	this.s3 = new lib.star();
	this.s3.setTransform(850,75,0.247,0.247);

	this.s1 = new lib.star();
	this.s1.setTransform(116.7,238.7,0.247,0.247);

	this.s2 = new lib.star();
	this.s2.setTransform(790.8,199.8,0.247,0.247);

	this.instance_4 = new lib.wall();
	this.instance_4.setTransform(1650.3,175,1.25,0.25,0,0,0,0.2,0);

	this.instance_5 = new lib.floor();
	this.instance_5.setTransform(638.1,175,2,0.25,0,0,0,0.3,0);

	this.instance_6 = new lib.wall();
	this.instance_6.setTransform(74.5,59.9,0.074,0.5,90);

	this.instance_7 = new lib.exit();
	this.instance_7.setTransform(1680.3,116.9,0.914,0.449,90);

	this.waterwheel1 = new lib.waterWheel();
	this.waterwheel1.setTransform(476.1,84.4,0.441,0.441);

	this.waterwheel1_switch = new lib.itemSwitch();
	this.waterwheel1_switch.setTransform(74.3,41.2,0.32,0.32);

	this.instance_8 = new lib.wall();
	this.instance_8.setTransform(875.3,225.3,1.25,1.25,0,0,0,0.2,0.2);

	this.instance_9 = new lib.floor();
	this.instance_9.setTransform(237.5,175,2,0.248);

	this.instance_10 = new lib.wall();
	this.instance_10.setTransform(162.5,222.5,1,0.5,90,0,0,0,0.1);

	this.p1 = new lib.shaun();
	this.p1.setTransform(50,225,0.238,0.66);

	this.instance_11 = new lib.floor();
	this.instance_11.setTransform(87.9,362.3,2,3.251,90,0,0,-0.1,-0.1);

	this.instance_12 = new lib.wall();
	this.instance_12.setTransform(-62.5,138.9,0.25,3.25,0,0,0,0,-0.1);

	this.platform1_switch = new lib.itemSwitch();
	this.platform1_switch.setTransform(1079,21,0.25,0.25);

	this.platform1_ref = new lib.platformRef();
	this.platform1_ref.setTransform(1263.5,183,5.368,0.18,0,0,0,0.2,0);

	this.platform1 = new lib.movingPlatform();
	this.platform1.setTransform(994.1,182.3,1.09,0.23);

	// Layer 3
	this.instance_13 = new lib.deadZone();
	this.instance_13.setTransform(936.8,-103,21.4,0.249,180);

	this.instance_14 = new lib.deadZone();
	this.instance_14.setTransform(-134.1,292.7,8.07,0.249,90);

	this.instance_15 = new lib.deadZone();
	this.instance_15.setTransform(2002.3,293.6,8.07,0.293,90);

	this.instance_16 = new lib.deadZone();
	this.instance_16.setTransform(932.1,693.2,21.4,0.249);

	this.instance_17 = new lib.level3PixiBG();
	this.instance_17.setTransform(0,0,0.4,0.4);

	this.addChild(this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.platform1,this.platform1_ref,this.platform1_switch,this.instance_12,this.instance_11,this.p1,this.instance_10,this.instance_9,this.instance_8,this.waterwheel1_switch,this.waterwheel1,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.s2,this.s1,this.s3,this.instance_3,this.sizeRef,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.2,-174,2200.1,879.6);


(lib.level2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wall();
	this.instance.setTransform(317.9,714.2,0.46,2.571,90,0,0,-0.1,0.1);

	this.instance_1 = new lib.wall();
	this.instance_1.setTransform(661.9,425.3,0.382,6.358,90,0,0,0,0.1);

	this.instance_2 = new lib.wall();
	this.instance_2.setTransform(200.2,1191.5,0.316,3.173,90,0,0,0,0.1);

	this.instance_3 = new lib.wall();
	this.instance_3.setTransform(79.1,867.7,0.382,2.073,90,0,0,0,0.1);

	this.instance_4 = new lib.wall();
	this.instance_4.setTransform(280.9,1017.4,2.394,0.496,0,0,0,-0.1,0.3);

	this.instance_5 = new lib.deadZone();
	this.instance_5.setTransform(375.8,993.8,0.5,0.125,0,0,0,0.2,0);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(538.3,677,10.744,13.108,0,0,0,0.1,0.2);

	this.instance_6 = new lib.star();
	this.instance_6.setTransform(97.1,490.1,0.25,0.25,0,0,0,-1,-3);

	this.instance_7 = new lib.star();
	this.instance_7.setTransform(74.8,1135.1,0.25,0.25,0,0,0,-1,-3);

	this.instance_8 = new lib.star();
	this.instance_8.setTransform(265.3,1135.1,0.25,0.25,0,0,0,-1,-3);

	this.instance_9 = new lib.wall();
	this.instance_9.setTransform(1050,300,1.75,2.25);

	this.instance_10 = new lib.floor();
	this.instance_10.setTransform(815.7,400,6.069,0.251);

	this.instance_11 = new lib.floor();
	this.instance_11.setTransform(425,359.9,1.75,0.948);

	this.instance_12 = new lib.floor();
	this.instance_12.setTransform(777.5,1225.2,1.75,3.807,90,0,0,0.1,0.1);

	this.instance_13 = new lib.wall();
	this.instance_13.setTransform(267.2,1311.3,0.75,6.66,90);

	this.instance_14 = new lib.floor();
	this.instance_14.setTransform(475,1150,0.75,0.25);

	this.instance_15 = new lib.floor();
	this.instance_15.setTransform(200,1175,3.25,0.25);

	this.instance_16 = new lib.deadZone();
	this.instance_16.setTransform(264.6,1254,6.479,0.479,0,0,0,0.2,0);

	this.instance_17 = new lib.deadZone();
	this.instance_17.setTransform(421.8,690,0.5,0.068,0,0,0,0.2,0);

	this.instance_18 = new lib.floor();
	this.instance_18.setTransform(262.5,990.7,2,0.063);

	this.instance_19 = new lib.floor();
	this.instance_19.setTransform(106.3,846.7,1.624,0.185,0,0,0,0,-0.2);

	this.instance_20 = new lib.wall();
	this.instance_20.setTransform(-5.3,933.9,7.266,1.106,90);

	this.instance_21 = new lib.floor();
	this.instance_21.setTransform(294,689,2.06,0.048);

	this.instance_22 = new lib.floor();
	this.instance_22.setTransform(112.5,519.6,3.19,0.132);

	this.instance_23 = new lib.wall();
	this.instance_23.setTransform(112.4,551.6,0.533,3.186,90,0,0,-0.1,0.1);

	this.instance_24 = new lib.wall();
	this.instance_24.setTransform(0,287.5,6.5,0.75,90);

	this.instance_25 = new lib.exit();
	this.instance_25.setTransform(676.9,1108.1,0.914,0.449,90);

	this.p1 = new lib.shaun();
	this.p1.setTransform(914.4,229.2,0.238,0.66);

	// level2Pixi
	this.instance_26 = new lib.level2Pixi();
	this.instance_26.setTransform(-2,-0.6,0.4,0.4);

	// Layer 2
	this.instance_27 = new lib.deadZone();
	this.instance_27.setTransform(586.1,-113,18.201,0.249,180);

	this.instance_28 = new lib.deadZone();
	this.instance_28.setTransform(-322.1,785.2,18.201,0.249,90);

	this.instance_29 = new lib.deadZone();
	this.instance_29.setTransform(1494.3,787.2,18.201,0.249,90);

	this.instance_30 = new lib.deadZone();
	this.instance_30.setTransform(584.1,1693.4,18.201,0.249);

	this.instance_31 = new lib.level2PixiBG();
	this.instance_31.setTransform(-2,-0.6,0.4,0.4);

	this.addChild(this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.p1,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.sizeRef,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-334.6,-125.4,1841.4,1831.3);


(lib.level1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.deadZone();
	this.instance.setTransform(266.1,-713.1,18.201,0.249,180);

	this.instance_1 = new lib.deadZone();
	this.instance_1.setTransform(-642.2,185.1,18.201,0.249,90);

	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(1174.3,187.1,18.201,0.249,90);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(264.1,1093.3,18.201,0.249);

	this.instance_4 = new lib.wall();
	this.instance_4.setTransform(62.6,746,0.081,0.215,0,0,0,0,1);

	this.instance_5 = new lib.wall();
	this.instance_5.setTransform(255.3,753.1,3.89,0.135,0,0,0,-0.1,0.8);

	this.instance_6 = new lib.wall();
	this.instance_6.setTransform(234,648.4,0.081,0.215,0,0,0,0,1);

	this.instance_7 = new lib.wall();
	this.instance_7.setTransform(59.1,519.8,0.081,0.147,0,0,0,0,0.7);

	this.instance_8 = new lib.wall();
	this.instance_8.setTransform(214.5,524.6,0.081,0.246,0,0,0,0,0.6);

	this.instance_9 = new lib.wall();
	this.instance_9.setTransform(332.1,523.9,0.081,0.292,0,0,0,0,0.7);

	this.instance_10 = new lib.wall();
	this.instance_10.setTransform(12.5,398.6,0.012,0.221,0,0,0,0,0.7);

	this.instance_11 = new lib.wall();
	this.instance_11.setTransform(208,397.9,0.081,0.204,0,0,0,0,0.8);

	this.instance_12 = new lib.wall();
	this.instance_12.setTransform(134.1,276.6,0.054,0.292,0,0,0,0,0.7);

	this.instance_13 = new lib.wall();
	this.instance_13.setTransform(124.3,653.3,2.232,0.125,0,0,0,0,0.4);

	this.instance_14 = new lib.wall();
	this.instance_14.setTransform(273.7,530.2,1.25,0.164,0,0,0,0,0.6);

	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(-5.9,531.5,1.371,0.108,0,0,0,0,0.5);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(111.5,407.6,2,0.166,0,0,0,0,0.3);

	this.instance_17 = new lib.wall();
	this.instance_17.setTransform(293.2,282.1,3.128,0.202);

	this.instance_18 = new lib.wall();
	this.instance_18.setTransform(64.9,180.9,3.7,0.13,0,0,0,-0.1,0.4);

	this.instance_19 = new lib.deadZone();
	this.instance_19.setTransform(-37.3,650.1,1,0.25);

	this.instance_20 = new lib.deadZone();
	this.instance_20.setTransform(-92.7,521.9,0.319,0.25);

	this.instance_21 = new lib.floor();
	this.instance_21.setTransform(53,168.2,3.439,0.114);

	this.instance_22 = new lib.wall();
	this.instance_22.setTransform(-150,409.4,0.83,8.494,0,0,0,0.1,0.1);

	this.instance_23 = new lib.wall();
	this.instance_23.setTransform(511.2,415.5,0.83,8.792,0,0,0,0.1,0.1);

	this.instance_24 = new lib.wall();
	this.instance_24.setTransform(437.4,687.5,0.25,1);

	this.instance_25 = new lib.floor();
	this.instance_25.setTransform(-17,519.3,1.396,0.135);

	this.instance_26 = new lib.floor();
	this.instance_26.setTransform(237.5,137.5,0.25,0.5);

	this.instance_27 = new lib.wall();
	this.instance_27.setTransform(472.4,213,1.518,1,0,0,0,0.2,0);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(183.7,425.3,7.561,8.727,0,0,0,0,0.2);

	this.instance_28 = new lib.star();
	this.instance_28.setTransform(73.7,616.5,0.25,0.25,0,0,0,-1,-3);

	this.instance_29 = new lib.star();
	this.instance_29.setTransform(199,366.6,0.25,0.25,0,0,0,-1,-3);

	this.instance_30 = new lib.star();
	this.instance_30.setTransform(149.3,241.3,0.25,0.25,0,0,0,-1,-3);

	this.p1 = new lib.shaun();
	this.p1.setTransform(74.3,125,0.238,0.652,0,0,0,0,0.1);

	this.instance_31 = new lib.floor();
	this.instance_31.setTransform(257.9,741.9,0.087,3.834,90,0,0,0,0.1);

	this.instance_32 = new lib.floor();
	this.instance_32.setTransform(120.2,642.2,2.154,0.096);

	this.instance_33 = new lib.floor();
	this.instance_33.setTransform(273.1,517.2,1.09,0.094);

	this.instance_34 = new lib.floor();
	this.instance_34.setTransform(112.3,393.4,1.983,0.118);

	this.instance_35 = new lib.floor();
	this.instance_35.setTransform(293.4,268.1,3.131,0.112,0,180,0);

	this.instance_36 = new lib.floor();
	this.instance_36.setTransform(137.6,168.4,2.251,0.119);

	this.instance_37 = new lib.deadZone();
	this.instance_37.setTransform(205.8,835.8,7.318,0.249);

	this.instance_38 = new lib.exit();
	this.instance_38.setTransform(92.4,711,0.25,0.5,0,0,0,16.4,-2.1);

	// Layer 2
	this.instance_39 = new lib.level1PixiBG();
	this.instance_39.setTransform(0,0,0.4,0.4);

	// level1Pixi
	this.instance_40 = new lib.level1Pixi();
	this.instance_40.setTransform(0,0,0.4,0.4);

	this.addChild(this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.p1,this.instance_30,this.instance_29,this.instance_28,this.sizeRef,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-654.6,-725.6,1841.4,1831.3);


(lib.levels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{level1:0,level2:2,level3:4,level4:6,level5:8,level6:10,level7:12,level8:14,level9:16,level10:18,level11:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(2).call(this.frame_8).wait(2).call(this.frame_10).wait(2).call(this.frame_12).wait(2).call(this.frame_14).wait(2).call(this.frame_16).wait(2).call(this.frame_18).wait(2).call(this.frame_20).wait(2));

	// boundingBoxes
	this.instance = new lib.level1();

	this.instance_1 = new lib.level2();
	this.instance_1.setTransform(344,759.2,1,1,0,0,0,599,693.1);

	this.instance_2 = new lib.level3();
	this.instance_2.setTransform(991.2,394.4,1,1,0,0,0,991.2,394.4);

	this.instance_3 = new lib.level4();
	this.instance_3.setTransform(900,309.6,1,1,0,0,0,900,309.6);

	this.instance_4 = new lib.level5();
	this.instance_4.setTransform(487.9,250.1,1,1,0,0,0,487.9,250.1);

	this.instance_5 = new lib.level6();
	this.instance_5.setTransform(537.4,421.6,1,1,0,0,0,537.4,421.6);

	this.instance_6 = new lib.level7();
	this.instance_6.setTransform(775.6,312.4,1,1,0,0,0,775.6,312.4);

	this.instance_7 = new lib.level8();
	this.instance_7.setTransform(1055.8,200,1,1,0,0,0,1055.8,200);

	this.instance_8 = new lib.level9();
	this.instance_8.setTransform(599.5,200,1,1,0,0,0,625,224.9);

	this.instance_9 = new lib.level10();
	this.instance_9.setTransform(600.1,250.1,1,1,0,0,0,600.1,250.1);

	this.instance_10 = new lib.level11();
	this.instance_10.setTransform(487.6,674.7,1,1,0,0,0,487.6,674.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-654.6,-725.6,1841.4,1831.3);


// stage content:
(lib.flash_lib = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.blank_mc();
	this.instance.setTransform(-1316,-159);

	this.instance_1 = new lib.levelItems();
	this.instance_1.setTransform(-2426.6,-560.3);

	this.instance_2 = new lib.vCam();
	this.instance_2.setTransform(424,998);

	this.instance_3 = new lib.sheepSwitcherBlock();
	this.instance_3.setTransform(-370.9,62.4,0.25,0.25);

	this.instance_4 = new lib.sheepStopperBlock();
	this.instance_4.setTransform(-511.9,194.5,0.25,0.5);

	this.instance_5 = new lib.sheepSwitcherBlock();
	this.instance_5.setTransform(-370.9,62.4,0.25,0.25);

	this.instance_6 = new lib.sheepStopperBlock();
	this.instance_6.setTransform(-511.9,194.5,0.25,0.5);

	this.instance_7 = new lib.sheepGroundBlock();
	this.instance_7.setTransform(-260,102);

	this.instance_8 = new lib.levels();

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2151.6,-525.6,3613.4,2213.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;