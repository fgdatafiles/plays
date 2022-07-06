(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



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


(lib.keith12platform1_ref = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AH0nzIAAPnAnzH0IAAvn");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


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


(lib.pallette_dot_png = function() {
	this.initialize();

	// Layer 1
	this.pallette_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("ArjCvIAAldIXGAAIAAFdg");
	this.shape.setTransform(74,17.5);

	this.addChild(this.shape,this.pallette_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,35);


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


(lib.outsidebarn_hyphen_window3_dot_png = function() {
	this.initialize();

	// Layer 1
	this.outsidebarn_hyphen_window3_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AvELUIAA2oIeIAAIAAWog");
	this.shape.setTransform(96.5,72.5);

	this.addChild(this.shape,this.outsidebarn_hyphen_window3_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,193,145);


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


(lib.mud_hyphen_repeat_dot_png = function() {
	this.initialize();

	// Layer 1
	this.mud_hyphen_repeat_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("An4H4IAAvwIPwAAIAAPwg");
	this.shape.setTransform(50.5,50.5);

	this.addChild(this.shape,this.mud_hyphen_repeat_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


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


(lib.metalbox_dot_png = function() {
	this.initialize();

	// Layer 1
	this.metalbox_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Eg1WAJnIAAzNMBqtAAAIAATNg");
	this.shape.setTransform(341.5,61.5);

	this.addChild(this.shape,this.metalbox_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,683,123);


(lib.metalbar_dot_png = function() {
	this.initialize();

	// Layer 1
	this.metalbar_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgmRAEOIAAobMBMiAAAIAAIbg");
	this.shape.setTransform(245,27);

	this.addChild(this.shape,this.metalbar_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,490,54);


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


(lib.haystack_hyphen_dark_dot_png = function() {
	this.initialize();

	// Layer 1
	this.haystack_hyphen_dark_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A2GOiIAA9DMAsMAAAIAAdDg");
	this.shape.setTransform(141.5,93);

	this.addChild(this.shape,this.haystack_hyphen_dark_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,283,186);


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


(lib.barnfloor_hyphen_bottom_hyphen_left_dot_png = function() {
	this.initialize();

	// Layer 1
	this.barnfloor_hyphen_bottom_hyphen_left_dot_png = new lib.blank_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjvHqIAAvTIHeAAIAAPTg");
	this.shape.setTransform(24,49);

	this.addChild(this.shape,this.barnfloor_hyphen_bottom_hyphen_left_dot_png);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,98);


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


(lib.movingPlatform2 = function() {
	this.initialize();

	// Layer 1
	this.isMovingPlatform = new lib.blankMarker();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isMovingPlatform);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.movingPlatform = function() {
	this.initialize();

	// Layer 1
	this.isMovingPlatform = new lib.blankMarker();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isMovingPlatform);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.level20PixiBG = function() {
	this.initialize();

	// Layer 1
	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	// Layer 3
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(7632.1,831.3,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(7659.2,597.7,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(7631.7,684.9,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(7632,752.8,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(7632.2,909.7,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.hook_dot_png();
	this.instance_5.setTransform(2974.2,1164.5,0.78,0.78,0,0,0,41,96.5);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(2969.1,1034.5,0.786,0.786,0,0,0,7,74);

	this.instance_7 = new lib.hook_dot_png();
	this.instance_7.setTransform(2779.1,955.7,0.78,0.78,0,0,0,41,96.5);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(2779,821.9,0.786,0.786,0,0,0,7,74);

	this.instance_9 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_9.setTransform(7261.2,1512.2,1,1,0,0,0,237,152.5);

	this.instance_10 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_10.setTransform(7261.2,1210.3,1,1,0,0,0,237,152.5);

	this.instance_11 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_11.setTransform(7261.2,909,1,1,0,0,0,237,152.5);

	this.instance_12 = new lib.moss_dot_png();
	this.instance_12.setTransform(6887,1581.2,1.054,1.054,-5.2,0,0,40.4,27.6);

	this.instance_13 = new lib.moss_dot_png();
	this.instance_13.setTransform(5600.9,1595.1,0.638,0.638,-177.5,0,0,40.5,27.5);

	this.instance_14 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_14.setTransform(5941.7,855,1,1,0,0,0,14,211);

	this.instance_15 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_15.setTransform(5941.7,1262.4,1,1,0,0,0,14,211);

	this.instance_16 = new lib.crane_swith_only_dot_png();
	this.instance_16.setTransform(5941.7,1532.4,1,1,0,0,0,38.5,69.5);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(2875.6,-766.8,0.786,0.786,0,0,0,7,74);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(2875.6,-651.2,0.786,0.786,0,0,0,7,74);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(2875.6,-535.5,0.786,0.786,0,0,0,7,74);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(2875.6,-419.9,0.786,0.786,0,0,0,7,74);

	this.instance_21 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_21.setTransform(2875.6,-304.2,0.786,0.786,0,0,0,7,74);

	this.instance_22 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_22.setTransform(2875.6,-188.6,0.786,0.786,0,0,0,7,74);

	this.instance_23 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_23.setTransform(2875.6,-73.7,0.786,0.786,0,0,0,7,74);

	this.instance_24 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_24.setTransform(2875.6,41.9,0.786,0.786,0,0,0,7,74);

	this.instance_25 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_25.setTransform(2875.6,157,0.786,0.786,0,0,0,7,74);

	this.instance_26 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_26.setTransform(2875.6,272.7,0.786,0.786,0,0,0,7,74);

	this.instance_27 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_27.setTransform(2875.6,388.3,0.786,0.786,0,0,0,7,74);

	this.instance_28 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_28.setTransform(2875.6,504,0.786,0.786,0,0,0,7,74);

	this.instance_29 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_29.setTransform(2875.6,619.8,0.786,0.786,0,0,0,7,74);

	this.instance_30 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_30.setTransform(2875.6,735.4,0.786,0.786,0,0,0,7,74);

	this.instance_31 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_31.setTransform(2875.6,851.1,0.786,0.786,0,0,0,7,74);

	this.instance_32 = new lib.hook_dot_png();
	this.instance_32.setTransform(2875.7,1044.3,0.78,0.78,0,0,0,41,96.5);

	this.instance_33 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_33.setTransform(2875.6,966.7,0.786,0.786,0,0,0,7,74);

	this.instance_34 = new lib.moss_dot_png();
	this.instance_34.setTransform(5374.5,1584.1,0.638,0.638,74,0,0,40.5,27.4);

	this.instance_35 = new lib.moss_dot_png();
	this.instance_35.setTransform(5884.1,1587.7,0.47,0.47,0,0,0,40.5,27.4);

	this.instance_36 = new lib.moss_dot_png();
	this.instance_36.setTransform(5989.1,1577.9,1.097,1.097,-66,0,0,40.5,27.5);

	this.instance_37 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_37.setTransform(6127.7,-761.7,1,1,0,0,0,14,211);

	this.instance_38 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_38.setTransform(6127.7,-357.2,1,1,0,0,0,14,211);

	this.instance_39 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_39.setTransform(6127.7,50,1,1,0,0,0,14,211);

	this.instance_40 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_40.setTransform(6127.7,456.5,1,1,0,0,0,14,211);

	this.instance_41 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_41.setTransform(6127.7,859.4,1,1,0,0,0,14,211);

	this.instance_42 = new lib.crane_swith_only_dot_png();
	this.instance_42.setTransform(6127.7,1532.4,1,1,0,0,0,38.5,69.5);

	this.instance_43 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_43.setTransform(6127.7,1262.4,1,1,0,0,0,14,211);

	this.instance_44 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_44.setTransform(5941.7,-775.5,1,1,0,0,0,14,211);

	this.instance_45 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_45.setTransform(5941.7,-372,1,1,0,0,0,14,211);

	this.instance_46 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_46.setTransform(5941.7,38,1,1,0,0,0,14,211);

	this.instance_47 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_47.setTransform(5941.7,446,1,1,0,0,0,14,211);

	this.instance_48 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_48.setTransform(4938.7,-780,1,1,0,0,0,14,211);

	this.instance_49 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_49.setTransform(4938.7,-376.5,1,1,0,0,0,14,211);

	this.instance_50 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_50.setTransform(4938.7,34.5,1,1,0,0,0,14,211);

	this.instance_51 = new lib.crane_swith_only_dot_png();
	this.instance_51.setTransform(4941.4,707.8,0.919,0.919,0,0,0,38.6,69.5);

	this.instance_52 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_52.setTransform(4938.7,446,1,1,0,0,0,14,211);

	this.instance_53 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_53.setTransform(3427.6,-607,1,1,0,0,0,14,211);

	this.instance_54 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_54.setTransform(3427.6,-193.5,1,1,0,0,0,14,211);

	this.instance_55 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_55.setTransform(3427.6,219.5,1,1,0,0,0,14,211);

	this.instance_56 = new lib.crane_swith_only_dot_png();
	this.instance_56.setTransform(3426.2,909.9,0.87,0.87,0,0,0,38.5,69.5);

	this.instance_57 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_57.setTransform(3427.6,633,1,1,0,0,0,14,211);

	this.instance_58 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_58.setTransform(7732.6,1511.6,1,1,0,0,0,237,152.5);

	this.instance_59 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_59.setTransform(6791.2,1511.6,1,1,0,0,0,237,152.5);

	this.instance_60 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_60.setTransform(6319.7,1511.6,1,1,0,0,0,237,152.5);

	this.instance_61 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_61.setTransform(5849.7,1511.6,1,1,0,0,0,237,152.5);

	this.instance_62 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_62.setTransform(5378.3,1511.6,1,1,0,0,0,237,152.5);

	this.instance_63 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_63.setTransform(4908.3,1511.6,1,1,0,0,0,237,152.5);

	this.instance_64 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_64.setTransform(4436.8,1511.6,1,1,0,0,0,237,152.5);

	this.instance_65 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_65.setTransform(3966.8,1511.6,1,1,0,0,0,237,152.5);

	this.instance_66 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_66.setTransform(3494.4,1511.6,1,1,0,0,0,237,152.5);

	this.instance_67 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_67.setTransform(3024.4,1511.6,1,1,0,0,0,237,152.5);

	this.instance_68 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_68.setTransform(2552.9,1511.6,1,1,0,0,0,237,152.5);

	this.instance_69 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_69.setTransform(2082.9,1511.6,1,1,0,0,0,237,152.5);

	this.instance_70 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_70.setTransform(1611.5,1511.6,1,1,0,0,0,237,152.5);

	this.instance_71 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_71.setTransform(1141.5,1511.6,1,1,0,0,0,237,152.5);

	this.instance_72 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_72.setTransform(670,1511.6,1,1,0,0,0,237,152.5);

	this.instance_73 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_73.setTransform(200,1511.6,1,1,0,0,0,237,152.5);

	this.instance_74 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_74.setTransform(7732.6,1210,1,1,0,0,0,237,152.5);

	this.instance_75 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_75.setTransform(6791.2,1210,1,1,0,0,0,237,152.5);

	this.instance_76 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_76.setTransform(6319.7,1210,1,1,0,0,0,237,152.5);

	this.instance_77 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_77.setTransform(5849.7,1210,1,1,0,0,0,237,152.5);

	this.instance_78 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_78.setTransform(5378.3,1210,1,1,0,0,0,237,152.5);

	this.instance_79 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_79.setTransform(4908.3,1210,1,1,0,0,0,237,152.5);

	this.instance_80 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_80.setTransform(4436.8,1210,1,1,0,0,0,237,152.5);

	this.instance_81 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_81.setTransform(3966.8,1210,1,1,0,0,0,237,152.5);

	this.instance_82 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_82.setTransform(3494.4,1210,1,1,0,0,0,237,152.5);

	this.instance_83 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_83.setTransform(3024.4,1210,1,1,0,0,0,237,152.5);

	this.instance_84 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_84.setTransform(2552.9,1210,1,1,0,0,0,237,152.5);

	this.instance_85 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_85.setTransform(2082.9,1210,1,1,0,0,0,237,152.5);

	this.instance_86 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_86.setTransform(1611.5,1210,1,1,0,0,0,237,152.5);

	this.instance_87 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_87.setTransform(1141.5,1210,1,1,0,0,0,237,152.5);

	this.instance_88 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_88.setTransform(670,1210,1,1,0,0,0,237,152.5);

	this.instance_89 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_89.setTransform(200,1210,1,1,0,0,0,237,152.5);

	this.instance_90 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_90.setTransform(7732.6,909,1,1,0,0,0,237,152.5);

	this.instance_91 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_91.setTransform(6791.2,909,1,1,0,0,0,237,152.5);

	this.instance_92 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_92.setTransform(6319.7,909,1,1,0,0,0,237,152.5);

	this.instance_93 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_93.setTransform(5849.7,909,1,1,0,0,0,237,152.5);

	this.instance_94 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_94.setTransform(5378.3,909,1,1,0,0,0,237,152.5);

	this.instance_95 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_95.setTransform(4908.3,909,1,1,0,0,0,237,152.5);

	this.instance_96 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_96.setTransform(4436.8,909,1,1,0,0,0,237,152.5);

	this.instance_97 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_97.setTransform(3966.8,909,1,1,0,0,0,237,152.5);

	this.instance_98 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_98.setTransform(3494.4,909,1,1,0,0,0,237,152.5);

	this.instance_99 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_99.setTransform(3024.4,909,1,1,0,0,0,237,152.5);

	this.instance_100 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_100.setTransform(2552.9,909,1,1,0,0,0,237,152.5);

	this.instance_101 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_101.setTransform(2082.9,909,1,1,0,0,0,237,152.5);

	this.instance_102 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_102.setTransform(1611.5,909,1,1,0,0,0,237,152.5);

	this.instance_103 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_103.setTransform(1141.5,909,1,1,0,0,0,237,152.5);

	this.instance_104 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_104.setTransform(670,909,1,1,0,0,0,237,152.5);

	this.instance_105 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_105.setTransform(200,909,1,1,0,0,0,237,152.5);

	this.instance_106 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_106.setTransform(7732.6,609,1,1,0,0,0,237,152.5);

	this.instance_107 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_107.setTransform(6791.2,609,1,1,0,0,0,237,152.5);

	this.instance_108 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_108.setTransform(6319.7,609,1,1,0,0,0,237,152.5);

	this.instance_109 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_109.setTransform(5849.7,609,1,1,0,0,0,237,152.5);

	this.instance_110 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_110.setTransform(5378.3,609,1,1,0,0,0,237,152.5);

	this.instance_111 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_111.setTransform(4908.3,609,1,1,0,0,0,237,152.5);

	this.instance_112 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_112.setTransform(4436.8,609,1,1,0,0,0,237,152.5);

	this.instance_113 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_113.setTransform(3966.8,609,1,1,0,0,0,237,152.5);

	this.instance_114 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_114.setTransform(3494.4,609,1,1,0,0,0,237,152.5);

	this.instance_115 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_115.setTransform(3024.4,605.9,1,1,0,0,0,237,152.5);

	this.instance_116 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_116.setTransform(2552.9,609,1,1,0,0,0,237,152.5);

	this.instance_117 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_117.setTransform(2082.9,609,1,1,0,0,0,237,152.5);

	this.instance_118 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_118.setTransform(1611.5,609,1,1,0,0,0,237,152.5);

	this.instance_119 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_119.setTransform(1141.5,609,1,1,0,0,0,237,152.5);

	this.instance_120 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_120.setTransform(670,609,1,1,0,0,0,237,152.5);

	this.instance_121 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_121.setTransform(200,609,1,1,0,0,0,237,152.5);

	this.instance_122 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_122.setTransform(7732.6,307.3,1,1,0,0,0,237,152.5);

	this.instance_123 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_123.setTransform(7261.2,307.3,1,1,0,0,0,237,152.5);

	this.instance_124 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_124.setTransform(6791.2,307.3,1,1,0,0,0,237,152.5);

	this.instance_125 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_125.setTransform(6319.7,307.3,1,1,0,0,0,237,152.5);

	this.instance_126 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_126.setTransform(5849.7,307.3,1,1,0,0,0,237,152.5);

	this.instance_127 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_127.setTransform(5378.3,307.3,1,1,0,0,0,237,152.5);

	this.instance_128 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_128.setTransform(4908.3,307.3,1,1,0,0,0,237,152.5);

	this.instance_129 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_129.setTransform(4436.8,307.3,1,1,0,0,0,237,152.5);

	this.instance_130 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_130.setTransform(3966.8,307.3,1,1,0,0,0,237,152.5);

	this.instance_131 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_131.setTransform(3494.4,307.3,1,1,0,0,0,237,152.5);

	this.instance_132 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_132.setTransform(3024.5,311.2,1,1,0,0,0,237,152.5);

	this.instance_133 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_133.setTransform(2552.9,307.3,1,1,0,0,0,237,152.5);

	this.instance_134 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_134.setTransform(2082.9,307.3,1,1,0,0,0,237,152.5);

	this.instance_135 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_135.setTransform(1611.5,307.3,1,1,0,0,0,237,152.5);

	this.instance_136 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_136.setTransform(1141.5,307.3,1,1,0,0,0,237,152.5);

	this.instance_137 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_137.setTransform(670,307.3,1,1,0,0,0,237,152.5);

	this.instance_138 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_138.setTransform(200,307.3,1,1,0,0,0,237,152.5);

	this.instance_139 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_139.setTransform(7732.6,6.3,1,1,0,0,0,237,152.5);

	this.instance_140 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_140.setTransform(7261.2,6.3,1,1,0,0,0,237,152.5);

	this.instance_141 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_141.setTransform(6791.2,6.3,1,1,0,0,0,237,152.5);

	this.instance_142 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_142.setTransform(6319.7,6.3,1,1,0,0,0,237,152.5);

	this.instance_143 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_143.setTransform(5849.7,6.3,1,1,0,0,0,237,152.5);

	this.instance_144 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_144.setTransform(5378.3,6.3,1,1,0,0,0,237,152.5);

	this.instance_145 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_145.setTransform(4908.3,6.3,1,1,0,0,0,237,152.5);

	this.instance_146 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_146.setTransform(4436.8,6.3,1,1,0,0,0,237,152.5);

	this.instance_147 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_147.setTransform(3966.8,6.3,1,1,0,0,0,237,152.5);

	this.instance_148 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_148.setTransform(3494.4,6.3,1,1,0,0,0,237,152.5);

	this.instance_149 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_149.setTransform(3024.4,6.3,1,1,0,0,0,237,152.5);

	this.instance_150 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_150.setTransform(2552.9,6.3,1,1,0,0,0,237,152.5);

	this.instance_151 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_151.setTransform(2082.9,6.3,1,1,0,0,0,237,152.5);

	this.instance_152 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_152.setTransform(1611.5,6.3,1,1,0,0,0,237,152.5);

	this.instance_153 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_153.setTransform(1141.5,6.3,1,1,0,0,0,237,152.5);

	this.instance_154 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_154.setTransform(670,6.3,1,1,0,0,0,237,152.5);

	this.instance_155 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_155.setTransform(200,6.3,1,1,0,0,0,237,152.5);

	this.instance_156 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_156.setTransform(7732.6,-295.3,1,1,0,0,0,237,152.5);

	this.instance_157 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_157.setTransform(7261.2,-295.3,1,1,0,0,0,237,152.5);

	this.instance_158 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_158.setTransform(6791.2,-295.3,1,1,0,0,0,237,152.5);

	this.instance_159 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_159.setTransform(6319.7,-295.3,1,1,0,0,0,237,152.5);

	this.instance_160 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_160.setTransform(5849.7,-295.3,1,1,0,0,0,237,152.5);

	this.instance_161 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_161.setTransform(5378.3,-295.3,1,1,0,0,0,237,152.5);

	this.instance_162 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_162.setTransform(4908.3,-295.3,1,1,0,0,0,237,152.5);

	this.instance_163 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_163.setTransform(4436.8,-295.3,1,1,0,0,0,237,152.5);

	this.instance_164 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_164.setTransform(3966.8,-295.3,1,1,0,0,0,237,152.5);

	this.instance_165 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_165.setTransform(3494.4,-295.3,1,1,0,0,0,237,152.5);

	this.instance_166 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_166.setTransform(3024.4,-295.3,1,1,0,0,0,237,152.5);

	this.instance_167 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_167.setTransform(2552.9,-295.3,1,1,0,0,0,237,152.5);

	this.instance_168 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_168.setTransform(2082.9,-295.3,1,1,0,0,0,237,152.5);

	this.instance_169 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_169.setTransform(1611.5,-295.3,1,1,0,0,0,237,152.5);

	this.instance_170 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_170.setTransform(1141.5,-295.3,1,1,0,0,0,237,152.5);

	this.instance_171 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_171.setTransform(670,-295.3,1,1,0,0,0,237,152.5);

	this.instance_172 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_172.setTransform(200,-295.3,1,1,0,0,0,237,152.5);

	this.instance_173 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_173.setTransform(7732.6,-599.1,1,1,0,0,0,237,153);

	this.instance_174 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_174.setTransform(7261.2,-599.1,1,1,0,0,0,237,153);

	this.instance_175 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_175.setTransform(6791.2,-599.1,1,1,0,0,0,237,153);

	this.instance_176 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_176.setTransform(6319.7,-599.1,1,1,0,0,0,237,153);

	this.instance_177 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_177.setTransform(5849.7,-599.1,1,1,0,0,0,237,153);

	this.instance_178 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_178.setTransform(5378.3,-599.1,1,1,0,0,0,237,153);

	this.instance_179 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_179.setTransform(4908.3,-599.1,1,1,0,0,0,237,153);

	this.instance_180 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_180.setTransform(4436.8,-599.1,1,1,0,0,0,237,153);

	this.instance_181 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_181.setTransform(3966.8,-599.1,1,1,0,0,0,237,153);

	this.instance_182 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_182.setTransform(3495.4,-599.1,1,1,0,0,0,237,153);

	this.instance_183 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_183.setTransform(3025.4,-599.1,1,1,0,0,0,237,153);

	this.instance_184 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_184.setTransform(2552.9,-599.1,1,1,0,0,0,237,153);

	this.instance_185 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_185.setTransform(2082.9,-599.1,1,1,0,0,0,237,153);

	this.instance_186 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_186.setTransform(1611.5,-599.1,1,1,0,0,0,237,153);

	this.instance_187 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_187.setTransform(1141.5,-599.1,1,1,0,0,0,237,153);

	this.instance_188 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_188.setTransform(670,-599.1,1,1,0,0,0,237,153);

	this.instance_189 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_189.setTransform(200,-599.1,1,1,0,0,0,237,153);

	this.instance_190 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_190.setTransform(7261.2,606.5,1,1,0,0,0,237,152.5);

	this.addChild(this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.isDispBG);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37,-991,8006.6,2655.7);


(lib.level20movingplatform = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(8.9,-2204.4,1.285,1.285,-179.6,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(7.4,-2015.6,1.285,1.285,-179.6,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(6.2,-1826.1,1.285,1.285,-179.6,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(5,-1638.1,1.285,1.285,-179.6,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(3.7,-1448.5,1.285,1.285,-179.6,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(2.2,-1259.9,1.285,1.285,-179.6,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(0.9,-1070.3,1.285,1.285,-179.6,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(-0.7,-881.3,1.285,1.285,-179.6,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(-1.9,-691.8,1.285,1.285,-179.6,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(-3.5,-503.7,1.285,1.285,-179.6,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(-4.7,-314.1,1.285,1.285,-179.6,0,0,7,74);

	this.isMovingItem = new lib.metalbox_dot_png();
	this.isMovingItem.setTransform(0,0,1.099,1.412,0,0,0,341.5,61.5);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(-65.8,-146.9,1.285,1.285,41.2,0,0,7,74);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(54.9,-145.8,1.285,1.285,139.9,0,0,7,74);

	this.addChild(this.instance_12,this.instance_11,this.isMovingItem,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-375.2,-2299.6,750.5,2386.5);


(lib.level20movingpallette = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(34.6,-59.4,0.709,0.709,144.4,0,0,6.9,74.2);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(-26.2,-60.3,0.709,0.709,36.6,0,0,7,74.1);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(18.7,-2338,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(18.1,-2234.5,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(17.5,-2130.6,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(16.7,-2026.4,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(15.9,-1922.4,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(15.1,-1818.7,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(14.4,-1714.6,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(13.8,-1610.6,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(13.4,-1506.4,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(12.7,-1402.6,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(12,-1298.6,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(11.4,-1194.7,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(10.7,-1091,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(10.3,-986.4,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(9.5,-881.8,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(8.9,-777.9,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(8.1,-674.2,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(7.5,-569.6,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(6.9,-465.5,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_21 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_21.setTransform(6.2,-361.4,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_22 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_22.setTransform(5.3,-256.8,0.709,0.709,-179.7,0,0,7,74.2);

	this.instance_23 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_23.setTransform(4.5,-153.3,0.709,0.709,-179.7,0,0,7,74.2);

	this.isMovingItem = new lib.pallette_dot_png();
	this.isMovingItem.setTransform(0,-0.1,1.71,1.634,0,0,0,74,17.4);

	this.addChild(this.isMovingItem,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-2390.3,253.2,2419);


(lib.level19PixiBG = function() {
	this.initialize();

	// Layer 2
	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(5,3.5,1,1,0,0,0,5,3.5);

	// Layer 4
	this.instance = new lib.hook_dot_png();
	this.instance.setTransform(997.4,45.3,1,1,0,0,0,41,96.5);

	this.instance_1 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_1.setTransform(997.4,-539.7,1,2.441,0,0,0,14,211);

	this.instance_2 = new lib.hook_dot_png();
	this.instance_2.setTransform(1500,289,1,1,0,0,0,41,96.5);

	this.instance_3 = new lib.hook_dot_png();
	this.instance_3.setTransform(1378.2,294,1,1,0,0,0,41,96.5);

	this.instance_4 = new lib.hook_dot_png();
	this.instance_4.setTransform(1260,170,1,1,0,0,0,41,96.5);

	this.instance_5 = new lib.hook_dot_png();
	this.instance_5.setTransform(1122.7,40,1,1,0,0,0,41,96.5);

	this.instance_6 = new lib.hook_dot_png();
	this.instance_6.setTransform(750,-80,1,1,0,0,0,41,96.5);

	this.instance_7 = new lib.hook_dot_png();
	this.instance_7.setTransform(875.4,41.9,1,1,0,0,0,41,96.5);

	this.instance_8 = new lib.hook_dot_png();
	this.instance_8.setTransform(1630,410,1,1,0,0,0,41,96.5);

	this.instance_9 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_9.setTransform(749.1,-608.3,1,2.182,0,0,0,14,211);

	this.instance_10 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_10.setTransform(1122.7,-545,1,2.441,0,0,0,14,211);

	this.instance_11 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_11.setTransform(875.4,-518.1,1,2.322,0,0,0,14,211);

	this.instance_12 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_12.setTransform(1260,-450,1,2.607,0,0,0,14,211);

	this.instance_13 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_13.setTransform(1500,-385.2,1,2.917,0,0,0,14,211.1);

	this.instance_14 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_14.setTransform(1376,-388,1,2.929,0,0,0,14,211);

	this.instance_15 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_15.setTransform(1632.4,-318.4,1,3.175,0,0,0,14,211.1);

	this.instance_16 = new lib.crane_swith_only_dot_png();
	this.instance_16.setTransform(1693,1510,0.681,0.681,0,0,0,38.5,69.5);

	this.instance_17 = new lib.crane_swith_only_dot_png();
	this.instance_17.setTransform(1542.5,1510,0.681,0.681,0,0,0,38.5,69.5);

	this.instance_18 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_18.setTransform(1542.5,1300.5,1,0.761,0,0,0,14,211);

	this.instance_19 = new lib.crane_swith_only_dot_png();
	this.instance_19.setTransform(1380,1510,0.681,0.681,0,0,0,38.5,69.5);

	this.instance_20 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_20.setTransform(1385.1,1308.1,1,0.749,0,0,0,14,211.1);

	this.instance_21 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_21.setTransform(1693,1310.5,1,0.713,0,0,0,14,211);

	this.instance_22 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_22.setTransform(4298.8,395.8,1,1,0,0,0,237,152.5);

	this.instance_23 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_23.setTransform(3824.8,-198.8,1,1,0,0,0,237,152.5);

	this.instance_24 = new lib.tool_dot_png();
	this.instance_24.setTransform(4876.6,1008.4,1.368,1.368,-79.7,0,0,15,84.5);

	this.instance_25 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_25.setTransform(2169.2,1334.3,1.718,1.718,180,0,0,92.5,15.6);

	this.instance_26 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_26.setTransform(2169.2,1329.5,1.718,1.718,180,0,0,92.5,15.6);

	this.instance_27 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_27.setTransform(2644.1,-790.9,1,1,0,0,0,14,211);

	this.instance_28 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_28.setTransform(2644.1,-389.3,1,1,0,0,0,14,211);

	this.instance_29 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_29.setTransform(2644.1,17.1,1,1,0,0,0,14,211);

	this.instance_30 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_30.setTransform(2644.1,423,1,1,0,0,0,14,211);

	this.instance_31 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_31.setTransform(2644.1,833.5,1,1,0,0,0,14,211);

	this.instance_32 = new lib.crane_swith_only_dot_png();
	this.instance_32.setTransform(2643.3,1514.1,0.804,0.804,0,0,0,38.5,69.5);

	this.instance_33 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_33.setTransform(2643.9,1245.7,1,1,0,0,0,14,211);

	this.instance_34 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_34.setTransform(5720.8,2464,1,1,0,0,0,237,152.5);

	this.instance_35 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_35.setTransform(5246.8,2464,1,1,0,0,0,237,152.5);

	this.instance_36 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_36.setTransform(4772.8,2464,1,1,0,0,0,237,152.5);

	this.instance_37 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_37.setTransform(4298.8,2464,1,1,0,0,0,237,152.5);

	this.instance_38 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_38.setTransform(3824.8,2464,1,1,0,0,0,237,152.5);

	this.instance_39 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_39.setTransform(3350.8,2464,1,1,0,0,0,237,152.5);

	this.instance_40 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_40.setTransform(2876.8,2464,1,1,0,0,0,237,152.5);

	this.instance_41 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_41.setTransform(2404.4,2464,1,1,0,0,0,237,152.5);

	this.instance_42 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_42.setTransform(1933.1,2464,1,1,0,0,0,237,152.5);

	this.instance_43 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_43.setTransform(1459.1,2464,1,1,0,0,0,237,152.5);

	this.instance_44 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_44.setTransform(985.1,2464,1,1,0,0,0,237,152.5);

	this.instance_45 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_45.setTransform(511.1,2464,1,1,0,0,0,237,152.5);

	this.instance_46 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_46.setTransform(38.7,2464,1,1,0,0,0,237,152.5);

	this.instance_47 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(5720.8,2162.3,1,1,0,0,0,237,152.5);

	this.instance_48 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_48.setTransform(5246.8,2162.3,1,1,0,0,0,237,152.5);

	this.instance_49 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_49.setTransform(4772.8,2162.3,1,1,0,0,0,237,152.5);

	this.instance_50 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_50.setTransform(4298.8,2162.3,1,1,0,0,0,237,152.5);

	this.instance_51 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_51.setTransform(3824.8,2162.3,1,1,0,0,0,237,152.5);

	this.instance_52 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_52.setTransform(3350.8,2162.3,1,1,0,0,0,237,152.5);

	this.instance_53 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_53.setTransform(2876.8,2162.3,1,1,0,0,0,237,152.5);

	this.instance_54 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_54.setTransform(2404.4,2162.3,1,1,0,0,0,237,152.5);

	this.instance_55 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_55.setTransform(1933.1,2162.3,1,1,0,0,0,237,152.5);

	this.instance_56 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_56.setTransform(1459.1,2162.3,1,1,0,0,0,237,152.5);

	this.instance_57 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_57.setTransform(985.1,2162.3,1,1,0,0,0,237,152.5);

	this.instance_58 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_58.setTransform(511.1,2162.3,1,1,0,0,0,237,152.5);

	this.instance_59 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_59.setTransform(38.7,2162.3,1,1,0,0,0,237,152.5);

	this.instance_60 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_60.setTransform(5720.8,1869.8,1,1,0,0,0,237,152.5);

	this.instance_61 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_61.setTransform(5246.8,1869.8,1,1,0,0,0,237,152.5);

	this.instance_62 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_62.setTransform(4772.8,1869.8,1,1,0,0,0,237,152.5);

	this.instance_63 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_63.setTransform(4298.8,1869.8,1,1,0,0,0,237,152.5);

	this.instance_64 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_64.setTransform(3824.8,1869.8,1,1,0,0,0,237,152.5);

	this.instance_65 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_65.setTransform(3350.8,1869.8,1,1,0,0,0,237,152.5);

	this.instance_66 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_66.setTransform(2876.8,1869.8,1,1,0,0,0,237,152.5);

	this.instance_67 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_67.setTransform(2404.4,1869.8,1,1,0,0,0,237,152.5);

	this.instance_68 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_68.setTransform(1933.1,1869.8,1,1,0,0,0,237,152.5);

	this.instance_69 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_69.setTransform(1459.1,1869.8,1,1,0,0,0,237,152.5);

	this.instance_70 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_70.setTransform(985.1,1869.8,1,1,0,0,0,237,152.5);

	this.instance_71 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_71.setTransform(511.1,1869.8,1,1,0,0,0,237,152.5);

	this.instance_72 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_72.setTransform(38.7,1869.8,1,1,0,0,0,237,152.5);

	this.instance_73 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_73.setTransform(5720.8,1579,1,1,0,0,0,237,152.5);

	this.instance_74 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_74.setTransform(5246.8,1579,1,1,0,0,0,237,152.5);

	this.instance_75 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_75.setTransform(4772.8,1579,1,1,0,0,0,237,152.5);

	this.instance_76 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_76.setTransform(4298.8,1579,1,1,0,0,0,237,152.5);

	this.instance_77 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_77.setTransform(3824.8,1579,1,1,0,0,0,237,152.5);

	this.instance_78 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_78.setTransform(3350.8,1579,1,1,0,0,0,237,152.5);

	this.instance_79 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_79.setTransform(2876.8,1579,1,1,0,0,0,237,152.5);

	this.instance_80 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_80.setTransform(2404.4,1579,1,1,0,0,0,237,152.5);

	this.instance_81 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_81.setTransform(1933.1,1579,1,1,0,0,0,237,152.5);

	this.instance_82 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_82.setTransform(1459.1,1579,1,1,0,0,0,237,152.5);

	this.instance_83 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_83.setTransform(985.1,1579,1,1,0,0,0,237,152.5);

	this.instance_84 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_84.setTransform(511.1,1579,1,1,0,0,0,237,152.5);

	this.instance_85 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_85.setTransform(38.7,1579,1,1,0,0,0,237,152.5);

	this.instance_86 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_86.setTransform(5720.8,1277.3,1,1,0,0,0,237,152.5);

	this.instance_87 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_87.setTransform(5246.8,1277.3,1,1,0,0,0,237,152.5);

	this.instance_88 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_88.setTransform(4772.8,1277.3,1,1,0,0,0,237,152.5);

	this.instance_89 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_89.setTransform(4298.8,1277.3,1,1,0,0,0,237,152.5);

	this.instance_90 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_90.setTransform(3824.8,1277.3,1,1,0,0,0,237,152.5);

	this.instance_91 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_91.setTransform(3350.8,1277.3,1,1,0,0,0,237,152.5);

	this.instance_92 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_92.setTransform(2876.8,1277.3,1,1,0,0,0,237,152.5);

	this.instance_93 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_93.setTransform(2404.4,1277.3,1,1,0,0,0,237,152.5);

	this.instance_94 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_94.setTransform(1933.1,1277.3,1,1,0,0,0,237,152.5);

	this.instance_95 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_95.setTransform(1459.1,1277.3,1,1,0,0,0,237,152.5);

	this.instance_96 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_96.setTransform(985.1,1277.3,1,1,0,0,0,237,152.5);

	this.instance_97 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_97.setTransform(511.1,1277.3,1,1,0,0,0,237,152.5);

	this.instance_98 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_98.setTransform(38.7,1277.3,1,1,0,0,0,237,152.5);

	this.instance_99 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_99.setTransform(5720.8,978.5,1,1,0,0,0,237,152.5);

	this.instance_100 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_100.setTransform(5246.8,978.5,1,1,0,0,0,237,152.5);

	this.instance_101 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_101.setTransform(4772.8,978.5,1,1,0,0,0,237,152.5);

	this.instance_102 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_102.setTransform(4298.8,978.5,1,1,0,0,0,237,152.5);

	this.instance_103 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_103.setTransform(3824.8,978.5,1,1,0,0,0,237,152.5);

	this.instance_104 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_104.setTransform(3350.8,978.5,1,1,0,0,0,237,152.5);

	this.instance_105 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_105.setTransform(2876.8,978.5,1,1,0,0,0,237,152.5);

	this.instance_106 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_106.setTransform(2404.4,978.5,1,1,0,0,0,237,152.5);

	this.instance_107 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_107.setTransform(1933.1,978.5,1,1,0,0,0,237,152.5);

	this.instance_108 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_108.setTransform(1459.1,978.5,1,1,0,0,0,237,152.5);

	this.instance_109 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_109.setTransform(985.1,978.5,1,1,0,0,0,237,152.5);

	this.instance_110 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_110.setTransform(511.1,978.5,1,1,0,0,0,237,152.5);

	this.instance_111 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_111.setTransform(38.7,978.5,1,1,0,0,0,237,152.5);

	this.instance_112 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_112.setTransform(5720.8,687.7,1,1,0,0,0,237,152.5);

	this.instance_113 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_113.setTransform(5246.8,687.7,1,1,0,0,0,237,152.5);

	this.instance_114 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_114.setTransform(4772.8,687.7,1,1,0,0,0,237,152.5);

	this.instance_115 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_115.setTransform(4298.8,687.7,1,1,0,0,0,237,152.5);

	this.instance_116 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_116.setTransform(3824.8,687.7,1,1,0,0,0,237,152.5);

	this.instance_117 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_117.setTransform(3350.8,687.7,1,1,0,0,0,237,152.5);

	this.instance_118 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_118.setTransform(2876.8,687.7,1,1,0,0,0,237,152.5);

	this.instance_119 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_119.setTransform(2404.4,687.7,1,1,0,0,0,237,152.5);

	this.instance_120 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_120.setTransform(1933.1,687.7,1,1,0,0,0,237,152.5);

	this.instance_121 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_121.setTransform(1459.1,687.7,1,1,0,0,0,237,152.5);

	this.instance_122 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_122.setTransform(985.1,687.7,1,1,0,0,0,237,152.5);

	this.instance_123 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_123.setTransform(511.1,687.7,1,1,0,0,0,237,152.5);

	this.instance_124 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_124.setTransform(38.7,687.7,1,1,0,0,0,237,152.5);

	this.instance_125 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_125.setTransform(5720.8,386,1,1,0,0,0,237,152.5);

	this.instance_126 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_126.setTransform(5246.8,386,1,1,0,0,0,237,152.5);

	this.instance_127 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_127.setTransform(4772.8,386,1,1,0,0,0,237,152.5);

	this.instance_128 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_128.setTransform(3824.8,386,1,1,0,0,0,237,152.5);

	this.instance_129 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_129.setTransform(3350.8,386,1,1,0,0,0,237,152.5);

	this.instance_130 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_130.setTransform(2876.8,386,1,1,0,0,0,237,152.5);

	this.instance_131 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_131.setTransform(2404.4,386,1,1,0,0,0,237,152.5);

	this.instance_132 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_132.setTransform(1933.1,386,1,1,0,0,0,237,152.5);

	this.instance_133 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_133.setTransform(1459.1,386,1,1,0,0,0,237,152.5);

	this.instance_134 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_134.setTransform(985.1,386,1,1,0,0,0,237,152.5);

	this.instance_135 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_135.setTransform(511.1,386,1,1,0,0,0,237,152.5);

	this.instance_136 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_136.setTransform(38.7,386,1,1,0,0,0,237,152.5);

	this.instance_137 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_137.setTransform(5720.8,93.5,1,1,0,0,0,237,152.5);

	this.instance_138 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_138.setTransform(5246.8,93.5,1,1,0,0,0,237,152.5);

	this.instance_139 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_139.setTransform(4772.8,93.5,1,1,0,0,0,237,152.5);

	this.instance_140 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_140.setTransform(4298.8,93.5,1,1,0,0,0,237,152.5);

	this.instance_141 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_141.setTransform(3824.8,93.5,1,1,0,0,0,237,152.5);

	this.instance_142 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_142.setTransform(3350.8,93.5,1,1,0,0,0,237,152.5);

	this.instance_143 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_143.setTransform(2876.8,93.5,1,1,0,0,0,237,152.5);

	this.instance_144 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_144.setTransform(2404.4,93.5,1,1,0,0,0,237,152.5);

	this.instance_145 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_145.setTransform(1933.1,93.5,1,1,0,0,0,237,152.5);

	this.instance_146 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_146.setTransform(1459.1,93.5,1,1,0,0,0,237,152.5);

	this.instance_147 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_147.setTransform(985.1,93.5,1,1,0,0,0,237,152.5);

	this.instance_148 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_148.setTransform(511.1,93.5,1,1,0,0,0,237,152.5);

	this.instance_149 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_149.setTransform(38.7,93.5,1,1,0,0,0,237,152.5);

	this.instance_150 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_150.setTransform(5720.8,-197.4,1,1,0,0,0,237,152.5);

	this.instance_151 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_151.setTransform(5246.8,-197.4,1,1,0,0,0,237,152.5);

	this.instance_152 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_152.setTransform(4772.8,-197.4,1,1,0,0,0,237,152.5);

	this.instance_153 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_153.setTransform(4298.8,-197.4,1,1,0,0,0,237,152.5);

	this.instance_154 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_154.setTransform(3350.8,-197.4,1,1,0,0,0,237,152.5);

	this.instance_155 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_155.setTransform(2876.8,-197.4,1,1,0,0,0,237,152.5);

	this.instance_156 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_156.setTransform(2404.4,-197.4,1,1,0,0,0,237,152.5);

	this.instance_157 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_157.setTransform(1933.1,-197.4,1,1,0,0,0,237,152.5);

	this.instance_158 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_158.setTransform(1459.1,-197.4,1,1,0,0,0,237,152.5);

	this.instance_159 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_159.setTransform(985.1,-197.4,1,1,0,0,0,237,152.5);

	this.instance_160 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_160.setTransform(511.1,-197.4,1,1,0,0,0,237,152.5);

	this.instance_161 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_161.setTransform(38.7,-197.4,1,1,0,0,0,237,152.5);

	this.instance_162 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_162.setTransform(5720.8,-499.1,1,1,0,0,0,237,152.5);

	this.instance_163 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_163.setTransform(5246.8,-499.1,1,1,0,0,0,237,152.5);

	this.instance_164 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_164.setTransform(4772.8,-499.1,1,1,0,0,0,237,152.5);

	this.instance_165 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_165.setTransform(4298.8,-499.1,1,1,0,0,0,237,152.5);

	this.instance_166 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_166.setTransform(3824.8,-499.1,1,1,0,0,0,237,152.5);

	this.instance_167 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_167.setTransform(3350.8,-499.1,1,1,0,0,0,237,152.5);

	this.instance_168 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_168.setTransform(2876.8,-499.1,1,1,0,0,0,237,152.5);

	this.instance_169 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_169.setTransform(2404.4,-499.1,1,1,0,0,0,237,152.5);

	this.instance_170 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_170.setTransform(1933.1,-499.1,1,1,0,0,0,237,152.5);

	this.instance_171 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_171.setTransform(1459.1,-499.1,1,1,0,0,0,237,152.5);

	this.instance_172 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_172.setTransform(985.1,-499.1,1,1,0,0,0,237,152.5);

	this.instance_173 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_173.setTransform(511.1,-499.1,1,1,0,0,0,237,152.5);

	this.instance_174 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_174.setTransform(38.7,-499.1,1,1,0,0,0,237,152.5);

	this.instance_175 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_175.setTransform(5720.8,-801.3,1,1,0,0,0,237,153);

	this.instance_176 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_176.setTransform(5246.8,-801.3,1,1,0,0,0,237,153);

	this.instance_177 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_177.setTransform(4772.8,-801.3,1,1,0,0,0,237,153);

	this.instance_178 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_178.setTransform(4298.8,-801.3,1,1,0,0,0,237,153);

	this.instance_179 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_179.setTransform(3824.8,-801.3,1,1,0,0,0,237,153);

	this.instance_180 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_180.setTransform(3350.8,-801.3,1,1,0,0,0,237,153);

	this.instance_181 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_181.setTransform(2876.8,-801.3,1,1,0,0,0,237,153);

	this.instance_182 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_182.setTransform(2404.4,-801.3,1,1,0,0,0,237,153);

	this.instance_183 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_183.setTransform(1933.1,-801.3,1,1,0,0,0,237,153);

	this.instance_184 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_184.setTransform(1459.1,-801.3,1,1,0,0,0,237,153);

	this.instance_185 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_185.setTransform(985.1,-801.3,1,1,0,0,0,237,153);

	this.instance_186 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_186.setTransform(511.1,-801.3,1,1,0,0,0,237,153);

	this.instance_187 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_187.setTransform(38.7,-801.3,1,1,0,0,0,237,153);

	this.addChild(this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.isDispBG);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.3,-1411.1,6156.1,4240.4);


(lib.level19movingplatform3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(-454,-4385.7,2.401,2.401,-179.6,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(-454.8,-4036.3,2.401,2.401,-179.6,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(-457.6,-3683.6,2.401,2.401,-179.6,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(-459.9,-3329.5,2.401,2.401,-179.6,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(-462.2,-2978.2,2.401,2.401,-179.6,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(-464.6,-2624.1,2.401,2.401,-179.6,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(-467.4,-2271.7,2.401,2.401,-179.6,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(-469.8,-1917.6,2.401,2.401,-179.6,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(-472.8,-1564.5,2.401,2.401,-179.6,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(-475.1,-1210.4,2.401,2.401,-179.6,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(-478,-859,2.401,2.401,-179.6,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(-480.3,-504.9,2.401,2.401,-179.6,0,0,7,74);

	this.isMovingItem = new lib.metalbox_dot_png();
	this.isMovingItem.setTransform(-459.1,-14.1,1.099,1.412,0,0,0,341.5,61.5);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(-594.4,-192.5,2.401,2.401,41.2,0,0,7,74);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(-369,-190.5,2.401,2.401,139.9,0,0,7,74);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(360.4,-4392.4,2.401,2.401,-179.6,0,0,7,74);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(359.6,-4043.1,2.401,2.401,-179.6,0,0,7,74);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(356.8,-3690.4,2.401,2.401,-179.6,0,0,7,74);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(354.5,-3336.2,2.401,2.401,-179.6,0,0,7,74);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(352.3,-2985,2.401,2.401,-179.6,0,0,7,74);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(349.9,-2630.9,2.401,2.401,-179.6,0,0,7,74);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(347,-2278.5,2.401,2.401,-179.6,0,0,7,74);

	this.instance_21 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_21.setTransform(344.6,-1924.3,2.401,2.401,-179.6,0,0,7,74);

	this.instance_22 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_22.setTransform(341.7,-1571.2,2.401,2.401,-179.6,0,0,7,74);

	this.instance_23 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_23.setTransform(339.3,-1217.1,2.401,2.401,-179.6,0,0,7,74);

	this.instance_24 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_24.setTransform(336.4,-865.7,2.401,2.401,-179.6,0,0,7,74);

	this.instance_25 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_25.setTransform(334.1,-511.6,2.401,2.401,-179.6,0,0,7,74);

	this.isMovingItem_1 = new lib.metalbox_dot_png();
	this.isMovingItem_1.setTransform(354.8,-19.3,1.34,1.337,0,0,0,341.5,61.5);

	this.instance_26 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_26.setTransform(220,-199.3,2.401,2.401,41.2,0,0,7,74);

	this.instance_27 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_27.setTransform(445.5,-197.2,2.401,2.401,139.9,0,0,7,74);

	this.addChild(this.instance_27,this.instance_26,this.isMovingItem_1,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.isMovingItem,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-834.3,-4570.2,1646.8,4643);


(lib.level19movingplatform2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(5.1,-4375.2,2.401,2.401,-179.6,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(4.3,-4025.8,2.401,2.401,-179.6,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(1.5,-3673.1,2.401,2.401,-179.6,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(-0.8,-3319,2.401,2.401,-179.6,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(-3,-2967.7,2.401,2.401,-179.6,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(-5.4,-2613.6,2.401,2.401,-179.6,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(-8.3,-2261.2,2.401,2.401,-179.6,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(-10.7,-1907.1,2.401,2.401,-179.6,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(-13.6,-1554,2.401,2.401,-179.6,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(-16,-1199.9,2.401,2.401,-179.6,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(-18.9,-848.5,2.401,2.401,-179.6,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(-21.2,-494.4,2.401,2.401,-179.6,0,0,7,74);

	this.isMovingItem = new lib.metalbox_dot_png();
	this.isMovingItem.setTransform(0,0,1.099,1.412,0,0,0,341.5,61.5);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(-135.3,-182,2.401,2.401,41.2,0,0,7,74);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(90.2,-180,2.401,2.401,139.9,0,0,7,74);

	this.addChild(this.instance_13,this.instance_12,this.isMovingItem,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-375.2,-4553,750.5,4639.9);


(lib.level19movingplatform = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(36.5,-7042,3.134,3.134,-179.6,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(40,-6582,3.134,3.134,-179.6,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(40.2,-6130,3.134,3.134,-179.6,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(40.2,-5719.9,3.134,3.134,-179.6,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(39.1,-5263.9,3.134,3.134,-179.6,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(35.5,-4803.6,3.134,3.134,-179.6,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(32.5,-4341.4,3.134,3.134,-179.6,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(29.5,-3882.9,3.134,3.134,-179.6,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(26.4,-3420.7,3.134,3.134,-179.6,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(22.7,-2960.8,3.134,3.134,-179.6,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(19.6,-2498.5,3.134,3.134,-179.6,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(15.7,-2037.7,3.134,3.134,-179.6,0,0,7,74);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(12.6,-1575.5,3.134,3.134,-179.6,0,0,7,74);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(8.9,-1116.8,3.134,3.134,-179.6,0,0,7,74);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(5.8,-654.6,3.134,3.134,-179.6,0,0,7,74);

	this.isMovingItem = new lib.metalbox_dot_png();
	this.isMovingItem.setTransform(0,0,1.099,1.412,0,0,0,341.5,61.5);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(-143.1,-246.9,3.134,3.134,41.2,0,0,7,74);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(151.2,-244.2,3.134,3.134,139.9,0,0,7,74);

	this.addChild(this.instance_16,this.instance_15,this.isMovingItem,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-375.2,-7274,750.5,7360.9);


(lib.level18PixiBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hay_hyphen_cube_dot_png();
	this.instance.setTransform(987,664.5,0.987,0.987,0,0,0,45.5,46.5);

	this.instance_1 = new lib.endpole_dot_png();
	this.instance_1.setTransform(4750.5,2781.1,1,1,0,0,0,8,39.5);

	this.instance_2 = new lib.endflag_dot_png();
	this.instance_2.setTransform(4777.6,2547.5,1,1,0,0,0,49,56);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(4750.2,2634.7,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(4750.4,2702.5,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.endpole_dot_png();
	this.instance_5.setTransform(4750.6,2859.4,1,1,0,0,0,8,39.5);

	this.instance_6 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_6.setTransform(995.4,108.7,1,1,0,0,0,14,211);

	this.instance_7 = new lib.crane_swith_only_dot_png();
	this.instance_7.setTransform(993.8,573.7,0.805,0.805,0,0,0,46.6,74.5);

	this.instance_8 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_8.setTransform(989.1,348.2,1,1,0,0,0,14,211);

	this.instance_9 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_9.setTransform(2155.4,108.7,1,1,0,0,0,14,211);

	this.instance_10 = new lib.crane_swith_only_dot_png();
	this.instance_10.setTransform(2160,790,0.805,0.805,0,0,0,46.6,74.5);

	this.instance_11 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_11.setTransform(2155.3,520.7,1,1,0,0,0,14,211);

	this.instance_12 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_12.setTransform(3068.7,-112.6,1,1,0,0,0,14,211);

	this.instance_13 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_13.setTransform(3068.7,262.4,1,1,0,0,0,14,211);

	this.instance_14 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_14.setTransform(3068.7,672.3,1,1,0,0,0,14,211);

	this.instance_15 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_15.setTransform(3068.7,1086,1,1,0,0,0,14,211);

	this.instance_16 = new lib.crane_swith_only_dot_png();
	this.instance_16.setTransform(3073.4,1765.2,0.805,0.805,0,0,0,46.6,74.5);

	this.instance_17 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_17.setTransform(3068.7,1495.9,1,1,0,0,0,14,211);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(4309.6,-1347.1,1,1,0,0,0,7,74);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(4310.5,-33.4,1,1,0,0,0,7,74);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(4311.2,114.5,1,1,0,0,0,7,74);

	this.instance_21 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_21.setTransform(4566.2,-81.3,1,1,0,0,0,7,74);

	this.instance_22 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_22.setTransform(4566.8,66.6,1,1,0,0,0,7,74);

	this.instance_23 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_23.setTransform(4566.1,214.7,1,1,0,0,0,7,74);

	this.instance_24 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_24.setTransform(4566.7,362.6,1,1,0,0,0,7,74);

	this.instance_25 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_25.setTransform(4064.2,17.1,1,1,0,0,0,7,74);

	this.instance_26 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_26.setTransform(4063.5,165.1,1,1,0,0,0,7,74);

	this.instance_27 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_27.setTransform(4064.1,313.1,1,1,0,0,0,7,74);

	this.instance_28 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_28.setTransform(4064.7,460.7,1,1,0,0,0,7,74);

	this.instance_29 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_29.setTransform(4065.4,608.7,1,1,0,0,0,7,74);

	this.instance_30 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_30.setTransform(4064.6,756.7,1,1,0,0,0,7,74);

	this.instance_31 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_31.setTransform(4065.3,904.7,1,1,0,0,0,7,74);

	this.instance_32 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_32.setTransform(4065.2,1034.8,1,1,0,0,0,7,74);

	this.instance_33 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_33.setTransform(4065.9,1182.7,1,1,0,0,0,7,74);

	this.instance_34 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_34.setTransform(4065.1,1330.8,1,1,0,0,0,7,74);

	this.instance_35 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_35.setTransform(4065.8,1478.7,1,1,0,0,0,7,74);

	this.instance_36 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_36.setTransform(4066.4,1626.4,1,1,0,0,0,7,74);

	this.instance_37 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_37.setTransform(4067,1774.3,1,1,0,0,0,7,74);

	this.instance_38 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_38.setTransform(4066.3,1922.4,1,1,0,0,0,7,74);

	this.instance_39 = new lib.hook_dot_png();
	this.instance_39.setTransform(4066.6,2177.1,0.798,0.798,0,0,0,41,96.5);

	this.instance_40 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_40.setTransform(4066.9,2070.3,1,1,0,0,0,7,74);

	this.instance_41 = new lib.hook_dot_png();
	this.instance_41.setTransform(4316.6,2419.1,0.798,0.798,0,0,0,41,96.5);

	this.instance_42 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_42.setTransform(4311.4,261.7,1,1,0,0,0,7,74);

	this.instance_43 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_43.setTransform(4310.7,409.7,1,1,0,0,0,7,74);

	this.instance_44 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_44.setTransform(4311.3,557.7,1,1,0,0,0,7,74);

	this.instance_45 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_45.setTransform(4311.9,705.3,1,1,0,0,0,7,74);

	this.instance_46 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_46.setTransform(4312.6,853.3,1,1,0,0,0,7,74);

	this.instance_47 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_47.setTransform(4311.8,1001.3,1,1,0,0,0,7,74);

	this.instance_48 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_48.setTransform(4312.5,1149.3,1,1,0,0,0,7,74);

	this.instance_49 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_49.setTransform(4312.4,1279.4,1,1,0,0,0,7,74);

	this.instance_50 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_50.setTransform(4313.1,1427.3,1,1,0,0,0,7,74);

	this.instance_51 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_51.setTransform(4312.3,1575.4,1,1,0,0,0,7,74);

	this.instance_52 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_52.setTransform(4313,1723.3,1,1,0,0,0,7,74);

	this.instance_53 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_53.setTransform(4313.6,1871,1,1,0,0,0,7,74);

	this.instance_54 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_54.setTransform(4314.2,2018.9,1,1,0,0,0,7,74);

	this.instance_55 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_55.setTransform(4313.5,2167,1,1,0,0,0,7,74);

	this.instance_56 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_56.setTransform(4314.1,2314.9,1,1,0,0,0,7,74);

	this.instance_57 = new lib.hook_dot_png();
	this.instance_57.setTransform(4567.9,2667.9,0.798,0.798,0,0,0,41,96.5);

	this.instance_58 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_58.setTransform(4565.3,509.3,1,1,0,0,0,7,74);

	this.instance_59 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_59.setTransform(4564.5,657.3,1,1,0,0,0,7,74);

	this.instance_60 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_60.setTransform(4565.2,805.3,1,1,0,0,0,7,74);

	this.instance_61 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_61.setTransform(4565.8,952.9,1,1,0,0,0,7,74);

	this.instance_62 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_62.setTransform(4566.4,1100.9,1,1,0,0,0,7,74);

	this.instance_63 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_63.setTransform(4565.7,1248.9,1,1,0,0,0,7,74);

	this.instance_64 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_64.setTransform(4566.3,1396.9,1,1,0,0,0,7,74);

	this.instance_65 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_65.setTransform(4566.3,1527,1,1,0,0,0,7,74);

	this.instance_66 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_66.setTransform(4566.9,1674.9,1,1,0,0,0,7,74);

	this.instance_67 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_67.setTransform(4566.2,1823,1,1,0,0,0,7,74);

	this.instance_68 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_68.setTransform(4566.8,1970.9,1,1,0,0,0,7,74);

	this.instance_69 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_69.setTransform(4567.4,2118.6,1,1,0,0,0,7,74);

	this.instance_70 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_70.setTransform(4568.1,2266.5,1,1,0,0,0,7,74);

	this.instance_71 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_71.setTransform(4567.3,2414.6,1,1,0,0,0,7,74);

	this.instance_72 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_72.setTransform(4568,2562.5,1,1,0,0,0,7,74);

	this.instance_73 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_73.setTransform(5475.9,2836.1,1,1,0,0,0,200,200);

	this.instance_74 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_74.setTransform(5093.3,2836.1,1,1,0,0,0,200,200);

	this.instance_75 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_75.setTransform(4710.8,2836.1,1,1,0,0,0,200,200);

	this.instance_76 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_76.setTransform(4329.5,2836.1,1,1,0,0,0,200,200);

	this.instance_77 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_77.setTransform(3946.8,2836.1,1,1,0,0,0,200,200);

	this.instance_78 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_78.setTransform(3564.4,2836.1,1,1,0,0,0,200,200);

	this.instance_79 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_79.setTransform(3196.8,2836.1,1,1,0,0,0,200,200);

	this.instance_80 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_80.setTransform(2814.1,2836.1,1,1,0,0,0,200,200);

	this.instance_81 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_81.setTransform(2431.7,2836.1,1,1,0,0,0,200,200);

	this.instance_82 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_82.setTransform(2385.4,2836.1,1,1,0,0,0,200,200);

	this.instance_83 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_83.setTransform(2002.8,2836.1,1,1,0,0,0,200,200);

	this.instance_84 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_84.setTransform(1620.3,2836.1,1,1,0,0,0,200,200);

	this.instance_85 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_85.setTransform(1245.3,2836.1,1,1,0,0,0,200,200);

	this.instance_86 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_86.setTransform(862.6,2836.1,1,1,0,0,0,200,200);

	this.instance_87 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_87.setTransform(480.2,2836.1,1,1,0,0,0,200,200);

	this.instance_88 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_88.setTransform(97.5,2836.1,1,1,0,0,0,200,200);

	this.instance_89 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_89.setTransform(5475.9,2444.8,1,1,0,0,0,200,200);

	this.instance_90 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_90.setTransform(5093.3,2444.8,1,1,0,0,0,200,200);

	this.instance_91 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_91.setTransform(4710.8,2444.8,1,1,0,0,0,200,200);

	this.instance_92 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_92.setTransform(4329.5,2444.8,1,1,0,0,0,200,200);

	this.instance_93 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_93.setTransform(3946.8,2444.8,1,1,0,0,0,200,200);

	this.instance_94 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_94.setTransform(3564.4,2444.8,1,1,0,0,0,200,200);

	this.instance_95 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_95.setTransform(3196.8,2444.8,1,1,0,0,0,200,200);

	this.instance_96 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_96.setTransform(2814.1,2444.8,1,1,0,0,0,200,200);

	this.instance_97 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_97.setTransform(2431.7,2444.8,1,1,0,0,0,200,200);

	this.instance_98 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_98.setTransform(2385.4,2444.8,1,1,0,0,0,200,200);

	this.instance_99 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_99.setTransform(2002.8,2444.8,1,1,0,0,0,200,200);

	this.instance_100 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_100.setTransform(1620.3,2444.8,1,1,0,0,0,200,200);

	this.instance_101 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_101.setTransform(1245.3,2444.8,1,1,0,0,0,200,200);

	this.instance_102 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_102.setTransform(862.6,2444.8,1,1,0,0,0,200,200);

	this.instance_103 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_103.setTransform(480.2,2444.8,1,1,0,0,0,200,200);

	this.instance_104 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_104.setTransform(97.5,2444.8,1,1,0,0,0,200,200);

	this.instance_105 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_105.setTransform(5475.9,2067.2,1,1,0,0,0,200,200);

	this.instance_106 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_106.setTransform(5093.3,2067.2,1,1,0,0,0,200,200);

	this.instance_107 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_107.setTransform(4710.8,2067.2,1,1,0,0,0,200,200);

	this.instance_108 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_108.setTransform(4329.5,2067.2,1,1,0,0,0,200,200);

	this.instance_109 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_109.setTransform(3946.8,2067.2,1,1,0,0,0,200,200);

	this.instance_110 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_110.setTransform(3564.4,2067.2,1,1,0,0,0,200,200);

	this.instance_111 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_111.setTransform(3196.8,2067.2,1,1,0,0,0,200,200);

	this.instance_112 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_112.setTransform(2814.1,2067.2,1,1,0,0,0,200,200);

	this.instance_113 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_113.setTransform(2431.7,2067.2,1,1,0,0,0,200,200);

	this.instance_114 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_114.setTransform(2385.4,2067.2,1,1,0,0,0,200,200);

	this.instance_115 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_115.setTransform(2002.8,2067.2,1,1,0,0,0,200,200);

	this.instance_116 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_116.setTransform(1620.3,2067.2,1,1,0,0,0,200,200);

	this.instance_117 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_117.setTransform(1245.3,2067.2,1,1,0,0,0,200,200);

	this.instance_118 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_118.setTransform(862.6,2067.2,1,1,0,0,0,200,200);

	this.instance_119 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_119.setTransform(480.2,2067.2,1,1,0,0,0,200,200);

	this.instance_120 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_120.setTransform(97.5,2067.2,1,1,0,0,0,200,200);

	this.instance_121 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_121.setTransform(5475.9,1683.4,1,1,0,0,0,200,200);

	this.instance_122 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_122.setTransform(5093.3,1683.4,1,1,0,0,0,200,200);

	this.instance_123 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_123.setTransform(4710.8,1683.4,1,1,0,0,0,200,200);

	this.instance_124 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_124.setTransform(4329.5,1683.4,1,1,0,0,0,200,200);

	this.instance_125 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_125.setTransform(3946.8,1683.4,1,1,0,0,0,200,200);

	this.instance_126 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_126.setTransform(3564.4,1683.4,1,1,0,0,0,200,200);

	this.instance_127 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_127.setTransform(3196.8,1683.4,1,1,0,0,0,200,200);

	this.instance_128 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_128.setTransform(2814.1,1683.4,1,1,0,0,0,200,200);

	this.instance_129 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_129.setTransform(2431.7,1683.4,1,1,0,0,0,200,200);

	this.instance_130 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_130.setTransform(2385.4,1683.4,1,1,0,0,0,200,200);

	this.instance_131 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_131.setTransform(2002.8,1683.4,1,1,0,0,0,200,200);

	this.instance_132 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_132.setTransform(1620.3,1683.4,1,1,0,0,0,200,200);

	this.instance_133 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_133.setTransform(1245.3,1683.4,1,1,0,0,0,200,200);

	this.instance_134 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_134.setTransform(862.6,1683.4,1,1,0,0,0,200,200);

	this.instance_135 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_135.setTransform(480.2,1683.4,1,1,0,0,0,200,200);

	this.instance_136 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_136.setTransform(97.5,1683.4,1,1,0,0,0,200,200);

	this.instance_137 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_137.setTransform(5475.9,1303.3,1,1,0,0,0,200,200);

	this.instance_138 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_138.setTransform(5093.3,1303.3,1,1,0,0,0,200,200);

	this.instance_139 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_139.setTransform(4710.8,1303.3,1,1,0,0,0,200,200);

	this.instance_140 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_140.setTransform(4329.5,1303.3,1,1,0,0,0,200,200);

	this.instance_141 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_141.setTransform(3946.8,1303.3,1,1,0,0,0,200,200);

	this.instance_142 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_142.setTransform(3564.4,1303.3,1,1,0,0,0,200,200);

	this.instance_143 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_143.setTransform(3196.8,1303.3,1,1,0,0,0,200,200);

	this.instance_144 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_144.setTransform(2814.1,1303.3,1,1,0,0,0,200,200);

	this.instance_145 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_145.setTransform(2431.7,1303.3,1,1,0,0,0,200,200);

	this.instance_146 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_146.setTransform(2385.4,1303.3,1,1,0,0,0,200,200);

	this.instance_147 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_147.setTransform(2002.8,1303.3,1,1,0,0,0,200,200);

	this.instance_148 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_148.setTransform(1620.3,1303.3,1,1,0,0,0,200,200);

	this.instance_149 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_149.setTransform(1245.3,1303.3,1,1,0,0,0,200,200);

	this.instance_150 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_150.setTransform(862.6,1303.3,1,1,0,0,0,200,200);

	this.instance_151 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_151.setTransform(480.2,1303.3,1,1,0,0,0,200,200);

	this.instance_152 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_152.setTransform(97.5,1303.3,1,1,0,0,0,200,200);

	this.instance_153 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_153.setTransform(5475.9,916.8,1,1,0,0,0,200,200);

	this.instance_154 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_154.setTransform(5093.3,916.8,1,1,0,0,0,200,200);

	this.instance_155 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_155.setTransform(4710.8,916.8,1,1,0,0,0,200,200);

	this.instance_156 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_156.setTransform(4329.5,916.8,1,1,0,0,0,200,200);

	this.instance_157 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_157.setTransform(3946.8,916.8,1,1,0,0,0,200,200);

	this.instance_158 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_158.setTransform(3564.4,916.8,1,1,0,0,0,200,200);

	this.instance_159 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_159.setTransform(3196.8,916.8,1,1,0,0,0,200,200);

	this.instance_160 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_160.setTransform(2814.1,916.8,1,1,0,0,0,200,200);

	this.instance_161 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_161.setTransform(2431.7,916.8,1,1,0,0,0,200,200);

	this.instance_162 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_162.setTransform(2385.4,916.8,1,1,0,0,0,200,200);

	this.instance_163 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_163.setTransform(2002.8,916.8,1,1,0,0,0,200,200);

	this.instance_164 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_164.setTransform(1620.3,916.8,1,1,0,0,0,200,200);

	this.instance_165 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_165.setTransform(1245.3,916.8,1,1,0,0,0,200,200);

	this.instance_166 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_166.setTransform(862.6,916.8,1,1,0,0,0,200,200);

	this.instance_167 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_167.setTransform(480.2,916.8,1,1,0,0,0,200,200);

	this.instance_168 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_168.setTransform(97.5,916.8,1,1,0,0,0,200,200);

	this.instance_169 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_169.setTransform(5475.9,530.3,1,1,0,0,0,200,200);

	this.instance_170 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_170.setTransform(5093.3,530.3,1,1,0,0,0,200,200);

	this.instance_171 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_171.setTransform(4710.8,530.3,1,1,0,0,0,200,200);

	this.instance_172 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_172.setTransform(4329.5,530.3,1,1,0,0,0,200,200);

	this.instance_173 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_173.setTransform(3946.8,530.3,1,1,0,0,0,200,200);

	this.instance_174 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_174.setTransform(3564.4,530.3,1,1,0,0,0,200,200);

	this.instance_175 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_175.setTransform(3196.8,530.3,1,1,0,0,0,200,200);

	this.instance_176 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_176.setTransform(2814.1,530.3,1,1,0,0,0,200,200);

	this.instance_177 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_177.setTransform(2431.7,530.3,1,1,0,0,0,200,200);

	this.instance_178 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_178.setTransform(2385.4,530.3,1,1,0,0,0,200,200);

	this.instance_179 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_179.setTransform(2002.8,530.3,1,1,0,0,0,200,200);

	this.instance_180 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_180.setTransform(1620.3,530.3,1,1,0,0,0,200,200);

	this.instance_181 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_181.setTransform(1245.3,530.3,1,1,0,0,0,200,200);

	this.instance_182 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_182.setTransform(862.6,530.3,1,1,0,0,0,200,200);

	this.instance_183 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_183.setTransform(480.2,530.3,1,1,0,0,0,200,200);

	this.instance_184 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_184.setTransform(97.5,530.3,1,1,0,0,0,200,200);

	this.instance_185 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_185.setTransform(5554.7,142.4,1,1,0,0,0,200,200);

	this.instance_186 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_186.setTransform(5168.3,142.4,1,1,0,0,0,200,200);

	this.instance_187 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_187.setTransform(4774.6,142.4,1,1,0,0,0,200,200);

	this.instance_188 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_188.setTransform(4395.7,142.4,1,1,0,0,0,200,200);

	this.instance_189 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_189.setTransform(4001.9,142.4,1,1,0,0,0,200,200);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(3910.8,3.5,1,1,0,0,0,5,3.5);

	this.instance_190 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_190.setTransform(3614.3,142.4,1,1,0,0,0,200,200);

	this.instance_191 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_191.setTransform(3220.6,142.4,1,1,0,0,0,200,200);

	this.isDispBG_1 = new lib.physHold();
	this.isDispBG_1.setTransform(3129.5,3.5,1,1,0,0,0,5,3.5);

	this.instance_192 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_192.setTransform(2832.9,142.4,1,1,0,0,0,200,200);

	this.instance_193 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_193.setTransform(2439.2,142.4,1,1,0,0,0,200,200);

	this.isDispBG_2 = new lib.physHold();
	this.isDispBG_2.setTransform(2348.1,3.5,1,1,0,0,0,5,3.5);

	this.instance_194 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_194.setTransform(2059,142.4,1,1,0,0,0,200,200);

	this.instance_195 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_195.setTransform(1665.3,142.4,1,1,0,0,0,200,200);

	this.isDispBG_3 = new lib.physHold();
	this.isDispBG_3.setTransform(1574.2,3.5,1,1,0,0,0,5,3.5);

	this.instance_196 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_196.setTransform(1273.9,142.4,1,1,0,0,0,200,200);

	this.instance_197 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_197.setTransform(880.2,142.4,1,1,0,0,0,200,200);

	this.isDispBG_4 = new lib.physHold();
	this.isDispBG_4.setTransform(789.1,3.5,1,1,0,0,0,5,3.5);

	this.instance_198 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_198.setTransform(491.3,142.4,1,1,0,0,0,200,200);

	this.instance_199 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_199.setTransform(97.5,142.4,1,1,0,0,0,200,200);

	this.isDispBG_5 = new lib.physHold();
	this.isDispBG_5.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.addChild(this.isDispBG_5,this.instance_199,this.instance_198,this.isDispBG_4,this.instance_197,this.instance_196,this.isDispBG_3,this.instance_195,this.instance_194,this.isDispBG_2,this.instance_193,this.instance_192,this.isDispBG_1,this.instance_191,this.instance_190,this.isDispBG,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.5,-1421.1,5857.2,4457.3);


(lib.level18movingplatform2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(2.4,-2265.1,0.736,0.736,180,0,0,7,74.1);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(2.4,-2156.6,0.736,0.736,180,0,0,7,74.1);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(2.4,-2049.7,0.736,0.736,180,0,0,7,74.1);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(2.4,-1941.2,0.736,0.736,180,0,0,7,74.1);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(2.4,-1833.7,0.736,0.736,180,0,0,7,74.1);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(2.4,-1725.2,0.736,0.736,180,0,0,7,74.1);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(2.4,-1617.1,0.736,0.736,180,0,0,7,74.1);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(2.4,-1508.6,0.736,0.736,180,0,0,7,74.1);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(2.4,-1401.5,0.736,0.736,180,0,0,7,74.1);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(2.4,-1293,0.736,0.736,180,0,0,7,74.1);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(2.4,-1185.5,0.736,0.736,180,0,0,7,74.1);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(2.4,-1077,0.736,0.736,180,0,0,7,74.1);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(2.4,-969.5,0.736,0.736,180,0,0,7,74.1);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(2.4,-861,0.736,0.736,180,0,0,7,74.1);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(2.4,-753,0.736,0.736,180,0,0,7,74.1);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(2.4,-644.5,0.736,0.736,180,0,0,7,74.1);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(2.4,-537,0.736,0.736,180,0,0,7,74.1);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(2.4,-428.5,0.736,0.736,180,0,0,7,74.1);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(2.4,-321,0.736,0.736,180,0,0,7,74.1);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(2.4,-212.5,0.736,0.736,180,0,0,7,74.1);

	this.isMovingItem = new lib.woodenbox_dot_png();
	this.isMovingItem.setTransform(-164.2,-59.1,1.459,0.801);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(-15.9,-110.1,0.736,0.736,19.6,0,0,7,74);

	this.instance_21 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_21.setTransform(20,-110,0.736,0.736,160.8,0,0,7,74.1);

	this.addChild(this.instance_21,this.instance_20,this.isMovingItem,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-164.2,-2319.5,334.2,2395.8);


(lib.level18movingplatform1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(1.7,-2381.7,0.736,0.736,180,0,0,7,74.1);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(1.7,-2273.2,0.736,0.736,180,0,0,7,74.1);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(1.7,-2166.3,0.736,0.736,180,0,0,7,74.1);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(1.7,-2057.8,0.736,0.736,180,0,0,7,74.1);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(1.7,-1950.3,0.736,0.736,180,0,0,7,74.1);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(1.7,-1841.8,0.736,0.736,180,0,0,7,74.1);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(1.7,-1733.6,0.736,0.736,180,0,0,7,74.1);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(1.7,-1625.1,0.736,0.736,180,0,0,7,74.1);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(1.7,-1518,0.736,0.736,180,0,0,7,74.1);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(1.7,-1409.5,0.736,0.736,180,0,0,7,74.1);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(1.7,-1302,0.736,0.736,180,0,0,7,74.1);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(1.7,-1193.5,0.736,0.736,180,0,0,7,74.1);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(1.7,-1086,0.736,0.736,180,0,0,7,74.1);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(1.7,-977.5,0.736,0.736,180,0,0,7,74.1);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(1.7,-869.6,0.736,0.736,180,0,0,7,74.1);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(1.7,-761.1,0.736,0.736,180,0,0,7,74.1);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(1.7,-653.6,0.736,0.736,180,0,0,7,74.1);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(1.7,-545.1,0.736,0.736,180,0,0,7,74.1);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(1.7,-437.6,0.736,0.736,180,0,0,7,74.1);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(1.7,-329.1,0.736,0.736,180,0,0,7,74.1);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(-16.6,-226.6,0.736,0.736,19.6,0,0,7,74);

	this.instance_21 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_21.setTransform(19.3,-226.5,0.736,0.736,160.8,0,0,7,74.1);

	this.isMovingItem = new lib.woodencrate_dot_png();
	this.isMovingItem.setTransform(0,0,0.796,0.681,90,0,0,234,98);

	this.addChild(this.isMovingItem,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.7,-2436.1,133.6,2622.4);


(lib.level17PixiBG2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(3172.2,1335.3,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(3199.3,1101.7,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(3171.9,1188.9,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(3172.1,1256.8,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(3172.3,1413.7,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(2888.1,169.4,1,1,0,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(2855.3,169.4,1,1,0,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(2888.1,315.6,1,1,0,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(2855.3,315.6,1,1,0,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(2888.1,461.9,1,1,0,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(2855.3,461.9,1,1,0,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(2888.1,608.2,1,1,0,0,0,7,74);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(2855.3,608.2,1,1,0,0,0,7,74);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(2888.1,755.2,1,1,0,0,0,7,74);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(2855.3,755.2,1,1,0,0,0,7,74);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(2888.1,901.5,1,1,0,0,0,7,74);

	this.instance_16 = new lib.hook_dot_png();
	this.instance_16.setTransform(2872.3,1030.8,0.683,0.683,0,0,0,41,96.5);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(2855.3,901.5,1,1,0,0,0,7,74);

	this.instance_18 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_18.setTransform(752.2,-63.4,1,1,0,0,0,14,211);

	this.instance_19 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_19.setTransform(752.2,347.9,1,1,0,0,0,14,211);

	this.instance_20 = new lib.crane_swith_only_dot_png();
	this.instance_20.setTransform(751.7,1034.3,1,1,0,0,0,38.5,69.5);

	this.instance_21 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_21.setTransform(752.2,761.7,1,1,0,0,0,14,211);

	this.instance_22 = new lib.outsidebarn_hyphen_window1_dot_png();
	this.instance_22.setTransform(1530.9,737.5,1.657,1.657,0,0,0,99,72.5);

	this.instance_23 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_23.setTransform(750,1638.5,1,1,0,0,0,200,200);

	this.instance_24 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_24.setTransform(1027.6,1655,1,1,0,0,0,200,200);

	this.instance_25 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_25.setTransform(1794.7,1655,1,1,0,0,0,200,200);

	this.instance_26 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_26.setTransform(1413.4,1655,1,1,0,0,0,200,200);

	this.instance_27 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_27.setTransform(2545.1,1655,1,1,0,0,0,200,200);

	this.instance_28 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_28.setTransform(2163.8,1655,1,1,0,0,0,200,200);

	this.instance_29 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_29.setTransform(3283,1655,1,1,0,0,0,200,200);

	this.instance_30 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_30.setTransform(2901.7,1655,1,1,0,0,0,200,200);

	this.instance_31 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_31.setTransform(1027.6,1339.8,1,1,0,0,0,200,200);

	this.instance_32 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_32.setTransform(1794.7,1339.8,1,1,0,0,0,200,200);

	this.instance_33 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_33.setTransform(1413.4,1339.8,1,1,0,0,0,200,200);

	this.instance_34 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_34.setTransform(2545.1,1339.8,1,1,0,0,0,200,200);

	this.instance_35 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_35.setTransform(2163.8,1339.8,1,1,0,0,0,200,200);

	this.instance_36 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_36.setTransform(2901.7,1339.8,1,1,0,0,0,200,200);

	this.instance_37 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_37.setTransform(432.4,1627.3,1,1,0,0,0,200,200);

	this.instance_38 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_38.setTransform(56.1,1627.3,1,1,0,0,0,200,200);

	this.instance_39 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_39.setTransform(1010.1,1073.6,1,1,0,0,0,200,200);

	this.instance_40 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_40.setTransform(1777.2,1073.6,1,1,0,0,0,200,200);

	this.instance_41 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_41.setTransform(1395.9,1073.6,1,1,0,0,0,200,200);

	this.instance_42 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_42.setTransform(2527.6,1073.6,1,1,0,0,0,200,200);

	this.instance_43 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_43.setTransform(2146.3,1073.6,1,1,0,0,0,200,200);

	this.instance_44 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_44.setTransform(2888,901.4,1,1,0,0,0,7,74);

	this.instance_45 = new lib.outsidebarn_hyphen_window3_dot_png();
	this.instance_45.setTransform(2977.6,752.2,1.74,1.74,0,0,0,96.5,72.5);

	this.instance_46 = new lib.outsidebarn_hyphen_door_hyphen_open_dot_png();
	this.instance_46.setTransform(394.3,1221.4,1,1,0,0,0,225,226.5);

	this.instance_47 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(2752.9,1052.3,1,1,0,0,0,200,200);

	this.instance_48 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_48.setTransform(3273,678.3,1,1,0,0,0,200,200);

	this.instance_49 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_49.setTransform(2884.2,685.9,1,1,0,0,0,200,200);

	this.instance_50 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_50.setTransform(2492.9,685.9,1,1,0,0,0,200,200);

	this.instance_51 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_51.setTransform(2102.8,685.9,1,1,0,0,0,200,200);

	this.instance_52 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_52.setTransform(1711.5,685.9,1,1,0,0,0,200,200);

	this.instance_53 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_53.setTransform(1325.1,685.9,1,1,0,0,0,200,200);

	this.instance_54 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_54.setTransform(933.8,685.9,1,1,0,0,0,200,200);

	this.instance_55 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_55.setTransform(541.3,685.9,1,1,0,0,0,200,200);

	this.instance_56 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_56.setTransform(150,685.9,1,1,0,0,0,200,200);

	this.instance_57 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_57.setTransform(3466.9,297.1,1,1,0,0,0,200,200);

	this.instance_58 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_58.setTransform(3099.3,297.1,1,1,0,0,0,200,200);

	this.instance_59 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_59.setTransform(2719.1,297.1,1,1,0,0,0,200,200);

	this.instance_60 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_60.setTransform(2339.1,297.1,1,1,0,0,0,200,200);

	this.instance_61 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_61.setTransform(1991,297.1,1,1,0,0,0,200,200);

	this.instance_62 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_62.setTransform(1625.9,297.1,1,1,0,0,0,200,200);

	this.instance_63 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_63.setTransform(1258.3,297.1,1,1,0,0,0,200,200);

	this.instance_64 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_64.setTransform(878.1,297.1,1,1,0,0,0,200,200);

	this.instance_65 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_65.setTransform(498.1,297.1,1,1,0,0,0,200,200);

	this.instance_66 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_66.setTransform(150,297.1,1,1,0,0,0,200,200);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(1.4,0);

	this.instance_67 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_67.setTransform(61.1,1042.3,1,1,0,0,0,200,200);

	this.instance_68 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_68.setTransform(683.7,1073.6,1,1,0,0,0,200,200);

	this.instance_69 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_69.setTransform(386.2,822.3,1,1,0,0,0,200,200);

	this.instance_70 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_70.setTransform(750,1339.8,1,1,0,0,0,200,200);

	this.instance_71 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_71.setTransform(56.1,1442.3,1,1,0,0,0,200,200);

	this.instance_72 = new lib.haystack_hyphen_dark_dot_png();
	this.instance_72.setTransform(397.6,1335.3,1,1,0,0,0,141.5,93);

	this.instance_73 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_73.setTransform(301.3,1185.2,1,1,0,0,0,237,152.5);

	this.instance_74 = new lib.outsidebarn_hyphen_hole2_dot_png();
	this.instance_74.setTransform(3140.4,1006.3,1,1,0,0,0,195,133.5);

	this.instance_75 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_75.setTransform(3532.2,1057.7,1,1,0,0,0,200,200);

	this.instance_76 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_76.setTransform(3261.7,1336.6,1,1,0,0,0,200,200);

	this.addChild(this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.isDispBG,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.9,-274.4,3876.1,2129.4);


(lib.level17movingitem = function() {
	this.initialize();

	// Layer 1
	this.isMovingItem = new lib.metalbar_dot_png();
	this.isMovingItem.setTransform(0.1,0,1.118,1.23,90,0,0,245,27);

	this.addChild(this.isMovingItem);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.2,-274,66.5,548);


(lib.level16PixiBG = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(1979.9,647,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(2007,413.4,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(1979.6,500.6,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(1979.8,568.5,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(1980,725.4,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(1673.5,154.8,1,1,0,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(1706.1,155.8,1,1,0,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(1673.5,299.2,1,1,0,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(1706.1,300.2,1,1,0,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(1673.5,445.4,1,1,0,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(1706.1,446.4,1,1,0,0,0,7,74);

	this.instance_11 = new lib.hook_dot_png();
	this.instance_11.setTransform(1689.7,715.8,0.619,0.619,0,0,0,41,96.5);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(1673.5,591.7,1,1,0,0,0,7,74);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(1706.1,592.7,1,1,0,0,0,7,74);

	// Layer 3
	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.addChild(this.isDispBG,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-0.5,2265.2,1325.7);


(lib.level16Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.water_hyphen_top_dot_png();
	this.instance.setTransform(2216.6,1071.9,1,1,0,0,0,49.5,50);

	this.instance_1 = new lib.water_hyphen_top_dot_png();
	this.instance_1.setTransform(2125,1072.4,1,1,0,0,0,49.5,50);

	this.instance_2 = new lib.water_hyphen_top_dot_png();
	this.instance_2.setTransform(2029.1,1072.4,1,1,0,0,0,49.5,50);

	this.instance_3 = new lib.water_hyphen_top_dot_png();
	this.instance_3.setTransform(1947.9,1073.6,1,1,0,0,0,49.5,50);

	this.instance_4 = new lib.water_hyphen_top_dot_png();
	this.instance_4.setTransform(1852.5,1073.6,1,1,0,0,0,49.5,50);

	this.instance_5 = new lib.water_hyphen_top_dot_png();
	this.instance_5.setTransform(1755,1073.4,1,1,0,0,0,49.5,50);

	this.instance_6 = new lib.water_hyphen_top_dot_png();
	this.instance_6.setTransform(1673.8,1074.6,1,1,0,0,0,49.5,50);

	this.instance_7 = new lib.hazardsign_dot_png();
	this.instance_7.setTransform(1666.8,973.6,0.647,0.647,0,0,0,51,46);

	this.instance_8 = new lib.endpole_dot_png();
	this.instance_8.setTransform(1668.4,1019.4,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_9 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_9.setTransform(1520.2,963,0.688,0.558);

	this.instance_10 = new lib.moss_dot_png();
	this.instance_10.setTransform(1525.5,1021.7,0.402,0.402,-89.2,0,0,40.4,27.7);

	this.instance_11 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_11.setTransform(1794.5,1031.1,0.688,0.564,180);

	this.instance_12 = new lib.moss_dot_png();
	this.instance_12.setTransform(1793.9,1018.6,0.333,0.333,96.9,0,0,40.6,27.4);

	this.instance_13 = new lib.water_hyphen_bottom_dot_png();
	this.instance_13.setTransform(2144.4,1266.6,1,1,0,0,0,49.5,49.5);

	this.instance_14 = new lib.water_hyphen_bottom_dot_png();
	this.instance_14.setTransform(2048.9,1266.6,1,1,0,0,0,49.5,49.5);

	this.instance_15 = new lib.water_hyphen_bottom_dot_png();
	this.instance_15.setTransform(1955,1266.6,1,1,0,0,0,49.5,49.5);

	this.instance_16 = new lib.water_hyphen_bottom_dot_png();
	this.instance_16.setTransform(1859.8,1266.6,1,1,0,0,0,49.5,49.5);

	this.instance_17 = new lib.water_hyphen_bottom_dot_png();
	this.instance_17.setTransform(1765.9,1266.6,1,1,0,0,0,49.5,49.5);

	this.instance_18 = new lib.water_hyphen_bottom_dot_png();
	this.instance_18.setTransform(1670.4,1266.6,1,1,0,0,0,49.5,49.5);

	this.instance_19 = new lib.dirt1_dot_png();
	this.instance_19.setTransform(1290.8,924,0.181,0.181,-89.7,0,0,54.8,87);

	this.instance_20 = new lib.bone_dot_png();
	this.instance_20.setTransform(712.6,945.2,1.185,1.185,0,0,0,22.5,13.5);

	this.instance_21 = new lib.dirt4_dot_png();
	this.instance_21.setTransform(860.2,1287.7,1,1,0,0,0,121.5,37.5);

	this.instance_22 = new lib.dirt4_dot_png();
	this.instance_22.setTransform(478.9,862.7,1,1,96.3,0,0,121.5,37.5);

	this.instance_23 = new lib.dirt1_dot_png();
	this.instance_23.setTransform(1201.5,766.4,0.368,0.368,131.8,0,0,55.1,87);

	this.instance_24 = new lib.dirt1_dot_png();
	this.instance_24.setTransform(886.4,857.7,0.455,0.455,0,0,0,55,87);

	this.instance_25 = new lib.dirt3_dot_png();
	this.instance_25.setTransform(616.4,1148.9,1,1,175.3,0,0,55,88);

	this.instance_26 = new lib.dirt3_dot_png();
	this.instance_26.setTransform(1461.5,961.4,1,1,175.3,0,0,55,88);

	this.instance_27 = new lib.dirt4_dot_png();
	this.instance_27.setTransform(1896.6,855.2,1,1,0,0,0,121.5,37.5);

	this.instance_28 = new lib.dirt1_dot_png();
	this.instance_28.setTransform(1181.5,1079,0.545,0.545,0,0,0,55,87);

	this.instance_29 = new lib.dirt4_dot_png();
	this.instance_29.setTransform(1317.8,1211.5,1,1,0,0,0,121.5,37.5);

	this.instance_30 = new lib.dirt2_dot_png();
	this.instance_30.setTransform(947.6,1074,1,1,0,0,0,118.5,52.5);

	this.instance_31 = new lib.dirt3_dot_png();
	this.instance_31.setTransform(540.1,433.8,1,1,69,0,0,55,88);

	this.instance_32 = new lib.dirt1_dot_png();
	this.instance_32.setTransform(631.4,802.7,1,1,0,0,0,55,87);

	this.instance_33 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_33.setTransform(2079.8,964.1,0.688,0.564);

	this.instance_34 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_34.setTransform(2080.2,909.9,0.688,0.564);

	this.instance_35 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_35.setTransform(2055.3,988,0.698,0.73,0,0,0,53.1,60);

	this.instance_36 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_36.setTransform(1793.3,966.3,0.688,0.564,180);

	this.instance_37 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_37.setTransform(1821.5,985.2,0.776,0.776,0,0,0,53,60);

	this.instance_38 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_38.setTransform(2004.7,985.5,0.771,0.771,0,0,0,60,60);

	this.instance_39 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_39.setTransform(1957.5,985.5,0.771,0.771,0,0,0,60,60);

	this.instance_40 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_40.setTransform(1880.9,985.5,0.771,0.771,0,0,0,60,60);

	this.instance_41 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_41.setTransform(1405.6,776.4,0.577,0.577);

	this.instance_42 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_42.setTransform(1340,775.1,0.577,0.577);

	this.instance_43 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_43.setTransform(1283.1,777,0.577,0.577);

	this.instance_44 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_44.setTransform(1217.5,775.7,0.577,0.577);

	this.instance_45 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_45.setTransform(1793.3,902.6,0.688,0.564,180);

	this.instance_46 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_46.setTransform(1792.9,838.9,0.688,0.564,180);

	this.instance_47 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_47.setTransform(1793.3,784.7,0.688,0.564,180);

	this.instance_48 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_48.setTransform(2078.6,717.7,0.688,0.564);

	this.instance_49 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_49.setTransform(2079.8,782.5,0.688,0.564);

	this.instance_50 = new lib.ground_hyphen_right_dot_png();
	this.instance_50.setTransform(2031.3,778.8,0.545,0.545);

	this.instance_51 = new lib.ground_hyphen_left_dot_png();
	this.instance_51.setTransform(1783.9,770.3,0.655,0.629);

	this.instance_52 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_52.setTransform(2079.8,846.2,0.688,0.564);

	this.instance_53 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_53.setTransform(2064.5,747.8,0.575,0.575,0,0,0,57.6,60.5);

	this.instance_54 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_54.setTransform(1972,713.4,0.574,0.574);

	this.instance_55 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_55.setTransform(1777.9,712,0.578,0.578);

	this.instance_56 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_56.setTransform(1911.9,712.7,0.574,0.574);

	this.instance_57 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_57.setTransform(1844.6,712.7,0.574,0.574);

	this.instance_58 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_58.setTransform(1429.8,1197.7);

	this.instance_59 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_59.setTransform(418.4,1191.5,1.04,1.04);

	this.instance_60 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_60.setTransform(1345.3,1196.5);

	this.instance_61 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_61.setTransform(1261.6,1195.2);

	this.instance_62 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_62.setTransform(1154,1195.2);

	this.instance_63 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_63.setTransform(1037.8,1200.2);

	this.instance_64 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_64.setTransform(920.3,1197.7);

	this.instance_65 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_65.setTransform(815.2,1197.7);

	this.instance_66 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_66.setTransform(717.7,1185.2,1.104,1.104);

	this.instance_67 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_67.setTransform(642.2,1190.3,1.04,1.04);

	this.instance_68 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_68.setTransform(521.7,1190.3,1.04,1.04);

	this.instance_69 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_69.setTransform(1429.8,1082.7);

	this.instance_70 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_70.setTransform(419.6,1075.2);

	this.instance_71 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_71.setTransform(1345.3,1081.5);

	this.instance_72 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_72.setTransform(1261.5,1080.2);

	this.instance_73 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_73.setTransform(1154,1080.2);

	this.instance_74 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_74.setTransform(1037.7,1085.2);

	this.instance_75 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_75.setTransform(920.2,1082.7);

	this.instance_76 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_76.setTransform(815.2,1082.7);

	this.instance_77 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_77.setTransform(725.2,1067.7);

	this.instance_78 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_78.setTransform(632.7,1074.6);

	this.instance_79 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_79.setTransform(518.9,1074);

	this.instance_80 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_80.setTransform(726.3,1015,0.592,0.592);

	this.instance_81 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_81.setTransform(791.8,1015,0.592,0.592);

	this.instance_82 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_82.setTransform(664.8,1007.3,0.592,0.592);

	this.instance_83 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_83.setTransform(730.2,1007.4,0.592,0.592);

	this.instance_84 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_84.setTransform(532.6,1007.3,0.592,0.592);

	this.instance_85 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_85.setTransform(598.1,1007.4,0.592,0.592);

	this.instance_86 = new lib.ground_hyphen_right_dot_png();
	this.instance_86.setTransform(482.5,1078.7,0.501,0.501,180);

	this.instance_87 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_87.setTransform(472.9,1008,0.592,0.592);

	this.instance_88 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_88.setTransform(533.9,997.1,0.592,0.592);

	this.instance_89 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_89.setTransform(1520.7,911.3,0.688,0.558);

	this.instance_90 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_90.setTransform(1521.5,855.7,0.688,0.558);

	this.instance_91 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_91.setTransform(1520.2,785.1,0.688,0.633);

	this.instance_92 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_92.setTransform(1519.1,721,0.688,0.558);

	this.instance_93 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_93.setTransform(1165.3,783.4,0.688,0.558,180);

	this.instance_94 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_94.setTransform(1160.2,834.2,0.829,0.558,180,0,0,9,17.9);

	this.instance_95 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_95.setTransform(1165.8,905.3,0.688,0.558,180);

	this.instance_96 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_96.setTransform(1164.8,968.2,0.688,0.558,180);

	this.instance_97 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_97.setTransform(1165.9,1032.3,0.688,0.558,180);

	this.instance_98 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_98.setTransform(1412.5,951.4,0.577,0.577);

	this.instance_99 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_99.setTransform(1346.8,950.2,0.577,0.577);

	this.instance_100 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_100.setTransform(1290,952,0.577,0.577);

	this.instance_101 = new lib.ground_hyphen_right_dot_png();
	this.instance_101.setTransform(1472.7,954.9,0.545,0.545);

	this.instance_102 = new lib.ground_hyphen_left_dot_png();
	this.instance_102.setTransform(1156.9,945.6,0.655,0.629);

	this.instance_103 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_103.setTransform(1224.3,950.8,0.577,0.577);

	this.instance_104 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_104.setTransform(1412.5,889.5,0.577,0.577);

	this.instance_105 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_105.setTransform(1346.8,888.3,0.577,0.577);

	this.instance_106 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_106.setTransform(1290,890.1,0.577,0.577);

	this.instance_107 = new lib.ground_hyphen_right_dot_png();
	this.instance_107.setTransform(1472.7,893,0.545,0.545);

	this.instance_108 = new lib.ground_hyphen_left_dot_png();
	this.instance_108.setTransform(1156.9,883.7,0.655,0.629);

	this.instance_109 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_109.setTransform(1224.3,888.9,0.577,0.577);

	this.instance_110 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_110.setTransform(1411.9,826.4,0.577,0.577);

	this.instance_111 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_111.setTransform(1346.2,825.1,0.577,0.577);

	this.instance_112 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_112.setTransform(1289.4,827,0.577,0.577);

	this.instance_113 = new lib.ground_hyphen_right_dot_png();
	this.instance_113.setTransform(1472.1,829.8,0.545,0.545);

	this.instance_114 = new lib.ground_hyphen_left_dot_png();
	this.instance_114.setTransform(1156.3,820.5,0.655,0.629);

	this.instance_115 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_115.setTransform(1223.7,825.7,0.577,0.577);

	this.instance_116 = new lib.ground_hyphen_right_dot_png();
	this.instance_116.setTransform(1472.7,768.5,0.545,0.545);

	this.instance_117 = new lib.ground_hyphen_left_dot_png();
	this.instance_117.setTransform(1157.6,759.9,0.655,0.629);

	this.instance_118 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_118.setTransform(1406.6,713.6,0.567,0.567);

	this.instance_119 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_119.setTransform(1340,713.6,0.567,0.567);

	this.instance_120 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_120.setTransform(1148.2,712.2,0.571,0.571);

	this.instance_121 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_121.setTransform(1503.6,748.5,0.568,0.568,0,0,0,57.5,60.5);

	this.instance_122 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_122.setTransform(1280.6,712.9,0.567,0.567);

	this.instance_123 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_123.setTransform(1214.1,712.9,0.567,0.567);

	this.instance_124 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_124.setTransform(906,1023.6,0.571,0.571);

	this.instance_125 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_125.setTransform(898.1,965.4,0.691,0.569);

	this.instance_126 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_126.setTransform(898.5,910.7,0.691,0.569);

	this.instance_127 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_127.setTransform(898.1,846.3,0.691,0.569);

	this.instance_128 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_128.setTransform(898.1,781.9,0.691,0.569);

	this.instance_129 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_129.setTransform(896.9,716.5,0.691,0.569);

	this.instance_130 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_130.setTransform(1135.1,1057,0.522,0.522,0,0,0,57.5,60.5);

	this.instance_131 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_131.setTransform(1046.9,1024.6,0.567,0.567);

	this.instance_132 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_132.setTransform(980.3,1024.6,0.567,0.567);

	this.instance_133 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_133.setTransform(913.4,1023.4,0.567,0.567);

	this.instance_134 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_134.setTransform(722.5,959.4,0.577,0.577);

	this.instance_135 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_135.setTransform(786.3,959.5,0.577,0.577);

	this.instance_136 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_136.setTransform(662.5,951.9,0.577,0.577);

	this.instance_137 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_137.setTransform(726.3,952,0.577,0.577);

	this.instance_138 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_138.setTransform(533.7,951.9,0.577,0.577);

	this.instance_139 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_139.setTransform(597.5,952,0.577,0.577);

	this.instance_140 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_140.setTransform(657.5,893.2,0.577,0.577);

	this.instance_141 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_141.setTransform(663.8,844.4,0.577,0.577);

	this.instance_142 = new lib.ground_hyphen_right_dot_png();
	this.instance_142.setTransform(589.9,715.1,0.61,0.61);

	this.instance_143 = new lib.ground_hyphen_right_dot_png();
	this.instance_143.setTransform(467.5,512.2,0.787,0.787,-90);

	this.instance_144 = new lib.ground_hyphen_right_dot_png();
	this.instance_144.setTransform(534.9,511.7,0.787,0.787,-90);

	this.instance_145 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_145.setTransform(503.7,367,0.67,0.67);

	this.instance_146 = new lib.ground_hyphen_right_dot_png();
	this.instance_146.setTransform(484.9,1021.5,0.488,0.488,180);

	this.instance_147 = new lib.ground_hyphen_right_dot_png();
	this.instance_147.setTransform(484.6,967.7,0.488,0.488,180);

	this.instance_148 = new lib.ground_hyphen_right_dot_png();
	this.instance_148.setTransform(484.6,911.4,0.488,0.488,180);

	this.instance_149 = new lib.ground_hyphen_right_dot_png();
	this.instance_149.setTransform(484.3,857.7,0.488,0.488,180);

	this.instance_150 = new lib.ground_hyphen_right_dot_png();
	this.instance_150.setTransform(850.3,964.2,0.545,0.545);

	this.instance_151 = new lib.ground_hyphen_right_dot_png();
	this.instance_151.setTransform(850.7,900.5,0.545,0.545);

	this.instance_152 = new lib.ground_hyphen_right_dot_png();
	this.instance_152.setTransform(850.3,896,0.545,0.545);

	this.instance_153 = new lib.ground_hyphen_right_dot_png();
	this.instance_153.setTransform(850.7,832.3,0.545,0.545);

	this.instance_154 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_154.setTransform(491,594.5,0.577,0.577);

	this.instance_155 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_155.setTransform(545.5,588.9,0.577,0.577);

	this.instance_156 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_156.setTransform(491.7,547.6,0.577,0.577);

	this.instance_157 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_157.setTransform(542.4,540.7,0.577,0.577);

	this.instance_158 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_158.setTransform(483.5,789.5,0.577,0.577);

	this.instance_159 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_159.setTransform(541.8,786.4,0.577,0.577);

	this.instance_160 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_160.setTransform(484.2,742.6,0.577,0.577);

	this.instance_161 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_161.setTransform(538.7,738.2,0.577,0.577);

	this.instance_162 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_162.setTransform(475.5,952.6,0.577,0.577);

	this.instance_163 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_163.setTransform(535,942,0.577,0.577);

	this.instance_164 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_164.setTransform(477.4,906.3,0.577,0.577);

	this.instance_165 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_165.setTransform(531.3,885.7,0.577,0.577);

	this.instance_166 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_166.setTransform(489.7,485.1,0.577,0.577);

	this.instance_167 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_167.setTransform(544.2,479.5,0.577,0.577);

	this.instance_168 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_168.setTransform(490.4,438.2,0.577,0.577);

	this.instance_169 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_169.setTransform(541.1,431.3,0.577,0.577);

	this.instance_170 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_170.setTransform(482.2,680.1,0.577,0.577);

	this.instance_171 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_171.setTransform(540.5,677,0.577,0.577);

	this.instance_172 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_172.setTransform(482.9,633.2,0.577,0.577);

	this.instance_173 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_173.setTransform(537.4,628.8,0.577,0.577);

	this.instance_174 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_174.setTransform(474.2,843.2,0.577,0.577);

	this.instance_175 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_175.setTransform(533.7,832.6,0.577,0.577);

	this.instance_176 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_176.setTransform(476.1,796.9,0.577,0.577);

	this.instance_177 = new lib.ground_hyphen_right_dot_png();
	this.instance_177.setTransform(654.2,858.7,1,1,-90);

	this.instance_178 = new lib.ground_hyphen_right_dot_png();
	this.instance_178.setTransform(739.9,858.1,1,1,-90);

	this.instance_179 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_179.setTransform(647.2,615.1,0.741,0.741);

	this.instance_180 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_180.setTransform(645.4,534.7,0.741,0.741);

	this.instance_181 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_181.setTransform(645.1,455,0.741,0.741);

	this.instance_182 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_182.setTransform(643.2,374.7,0.741,0.741);

	this.instance_183 = new lib.ground_hyphen_left_dot_png();
	this.instance_183.setTransform(428.4,673,0.655,0.629);

	this.instance_184 = new lib.ground_hyphen_left_dot_png();
	this.instance_184.setTransform(429.4,450.5,0.655,0.629);

	this.instance_185 = new lib.ground_hyphen_right_dot_png();
	this.instance_185.setTransform(593.4,454.5,0.61,0.61);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_186 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_186.setTransform(580.3,366.8,0.731,0.731);

	this.instance_187 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_187.setTransform(419.9,364.8,0.726,0.726);

	this.instance_188 = new lib.ground_hyphen_left_dot_png();
	this.instance_188.setTransform(429.4,510.2,0.655,0.629);

	this.instance_189 = new lib.ground_hyphen_right_dot_png();
	this.instance_189.setTransform(593.4,514.2,0.61,0.61);

	this.instance_190 = new lib.ground_hyphen_left_dot_png();
	this.instance_190.setTransform(429.4,577.1,0.655,0.629);

	this.instance_191 = new lib.ground_hyphen_right_dot_png();
	this.instance_191.setTransform(593.4,581.1,0.61,0.61);

	this.instance_192 = new lib.ground_hyphen_left_dot_png();
	this.instance_192.setTransform(429.4,636.8,0.655,0.629);

	this.instance_193 = new lib.ground_hyphen_right_dot_png();
	this.instance_193.setTransform(486,806.7,0.488,0.488,180);

	this.instance_194 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_194.setTransform(460.8,732.1,0.608,0.608);

	this.instance_195 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_195.setTransform(530,776.3,0.577,0.577);

	this.instance_196 = new lib.ground_hyphen_right_dot_png();
	this.instance_196.setTransform(849.7,770.7,0.545,0.545);

	this.instance_197 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_197.setTransform(646.6,631.4,0.741,0.741);

	this.instance_198 = new lib.ground_hyphen_right_dot_png();
	this.instance_198.setTransform(588.7,658.9,0.61,0.61);

	this.instance_199 = new lib.ground_hyphen_right_dot_png();
	this.instance_199.setTransform(593.4,640.8,0.61,0.61);

	this.instance_200 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_200.setTransform(881.9,743.5,0.522,0.522,0,0,0,57.5,60.5);

	this.instance_201 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_201.setTransform(793.7,711.1,0.567,0.567);

	this.instance_202 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_202.setTransform(727.1,711.1,0.567,0.567);

	this.instance_203 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_203.setTransform(660.2,709.9,0.567,0.567);

	this.instance_204 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_204.setTransform(650.8,709.9,0.567,0.567);

	this.instance_205 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_205.setTransform(609.3,763.9,0.577,0.577);

	this.instance_206 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_206.setTransform(592.5,912,0.577,0.577);

	this.instance_207 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_207.setTransform(598.8,863.2,0.577,0.577);

	this.instance_208 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_208.setTransform(601.2,810.1,0.577,0.577);

	this.instance_209 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_209.setTransform(597.5,753.8,0.577,0.577);

	this.instance_210 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_210.setTransform(721.3,893.2,0.577,0.577);

	this.instance_211 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_211.setTransform(723.7,840.1,0.577,0.577);

	this.instance_212 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_212.setTransform(782.5,919.5,0.577,0.577);

	this.instance_213 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_213.setTransform(788.8,870.7,0.577,0.577);

	this.instance_214 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_214.setTransform(791.2,817.6,0.577,0.577);

	this.instance_215 = new lib.ground_hyphen_right_dot_png();
	this.instance_215.setTransform(857.5,1019.9,0.56,0.56);

	this.instance_216 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_216.setTransform(1413.2,1012.7,0.588,0.588);

	this.instance_217 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_217.setTransform(1346.2,1011.4,0.588,0.588);

	this.instance_218 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_218.setTransform(1288.2,1013.3,0.588,0.588);

	this.instance_219 = new lib.ground_hyphen_right_dot_png();
	this.instance_219.setTransform(1474.6,1016.2,0.556,0.556);

	this.instance_220 = new lib.ground_hyphen_left_dot_png();
	this.instance_220.setTransform(1152.5,1006.7,0.668,0.642);

	this.instance_221 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_221.setTransform(1221.3,1012,0.588,0.588);

	this.instance_222 = new lib.ground_hyphen_left_dot_png();
	this.instance_222.setTransform(1783.3,955.9,0.655,0.629);

	this.instance_223 = new lib.ground_hyphen_left_dot_png();
	this.instance_223.setTransform(1783.3,894,0.655,0.629);

	this.instance_224 = new lib.ground_hyphen_left_dot_png();
	this.instance_224.setTransform(1782.7,830.9,0.655,0.629);

	this.instance_225 = new lib.ground_hyphen_right_dot_png();
	this.instance_225.setTransform(2031.3,965.2,0.545,0.545);

	this.instance_226 = new lib.ground_hyphen_right_dot_png();
	this.instance_226.setTransform(2031.3,903.3,0.545,0.545);

	this.instance_227 = new lib.ground_hyphen_right_dot_png();
	this.instance_227.setTransform(2030.7,840.1,0.545,0.545);

	this.instance_228 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_228.setTransform(2002.6,775.7,0.577,0.577);

	this.instance_229 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_229.setTransform(1936.9,774.5,0.577,0.577);

	this.instance_230 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_230.setTransform(1880.1,776.3,0.577,0.577);

	this.instance_231 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_231.setTransform(1814.4,775.1,0.577,0.577);

	this.instance_232 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_232.setTransform(2005.7,833.2,0.577,0.577);

	this.instance_233 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_233.setTransform(1940,832,0.577,0.577);

	this.instance_234 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_234.setTransform(1883.2,833.8,0.577,0.577);

	this.instance_235 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_235.setTransform(1817.5,832.6,0.577,0.577);

	this.instance_236 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_236.setTransform(2003.2,890.7,0.577,0.577);

	this.instance_237 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_237.setTransform(1937.5,889.5,0.577,0.577);

	this.instance_238 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_238.setTransform(1880.7,891.3,0.577,0.577);

	this.instance_239 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_239.setTransform(1815,890.1,0.577,0.577);

	this.instance_240 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_240.setTransform(2033.2,983.1,0.577,0.622,0,0,0,59.6,42.3);

	this.instance_241 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_241.setTransform(1952.6,971.2,0.577,0.646,0,0,0,33.1,27.1);

	this.instance_242 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_242.setTransform(1900.1,978.9,0.577,0.635,0,0,0,41.2,38);

	this.instance_243 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_243.setTransform(1842.3,997,0.577,0.616,0,0,0,53.1,64.5);

	this.instance_244 = new lib.water_hyphen_middle_dot_png();
	this.instance_244.setTransform(1670.8,1171.4,1,1,0,0,0,49.5,49.5);

	this.instance_245 = new lib.water_hyphen_middle_dot_png();
	this.instance_245.setTransform(1575.5,1171.4,1,1,0,0,0,49.5,49.5);

	this.instance_246 = new lib.water_hyphen_middle_dot_png();
	this.instance_246.setTransform(1861.8,1170.8,1,1,0,0,0,49.5,49.5);

	this.instance_247 = new lib.water_hyphen_middle_dot_png();
	this.instance_247.setTransform(1766.5,1170.8,1,1,0,0,0,49.5,49.5);

	this.instance_248 = new lib.water_hyphen_middle_dot_png();
	this.instance_248.setTransform(2047,1170.8,1,1,0,0,0,49.5,49.5);

	this.instance_249 = new lib.water_hyphen_middle_dot_png();
	this.instance_249.setTransform(1951.7,1170.8,1,1,0,0,0,49.5,49.5);

	this.instance_250 = new lib.water_hyphen_middle_dot_png();
	this.instance_250.setTransform(2142.7,1170.3,1,1,0,0,0,49.5,49.5);

	this.instance_251 = new lib.water_hyphen_bottom_dot_png();
	this.instance_251.setTransform(1576.5,1266.6,1,1,0,0,0,49.5,49.5);

	this.instance_252 = new lib.water_hyphen_top_dot_png();
	this.instance_252.setTransform(1578.4,1074.6,1,1,0,0,0,49.5,50);

	this.addChild(this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.isDisp,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-0.5,2265.2,1325.7);


(lib.level15PixiBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(1155.1,2386.7,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(1182.2,2153.1,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(1154.8,2240.3,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(1155,2308.1,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(1155.2,2465,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_5.setTransform(1156.9,318,1,1,0,0,0,14,211);

	this.instance_6 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_6.setTransform(1156.9,731.8,1,1,0,0,0,14,211);

	this.instance_7 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_7.setTransform(1156.9,1141.4,1,1,0,0,0,14,211);

	this.instance_8 = new lib.crane_swith_only_dot_png();
	this.instance_8.setTransform(3022.2,580.3,1,1,0,0,0,38.5,69.5);

	this.instance_9 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_9.setTransform(3022.4,316.3,1,1,0,0,0,14,211);

	this.instance_10 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_10.setTransform(2176.3,134.1,1,1,0,0,0,14,211);

	this.instance_11 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_11.setTransform(2176.3,539.5,1,1,0,0,0,14,211);

	this.instance_12 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_12.setTransform(2176.3,945.1,1,1,0,0,0,14,211);

	this.instance_13 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_13.setTransform(2176.3,1352.8,1,1,0,0,0,14,211);

	this.instance_14 = new lib.crane_swith_only_dot_png();
	this.instance_14.setTransform(2175.8,2032,1,1,0,0,0,38.5,69.5);

	this.instance_15 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_15.setTransform(2176.3,1764.1,1,1,0,0,0,14,211);

	this.instance_16 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_16.setTransform(2362.3,1104.2,1,1,0,0,0,200,200);

	this.instance_17 = new lib.moss_dot_png();
	this.instance_17.setTransform(4197.6,1955.1,0.556,0.556,-176.1,0,0,40.6,27.4);

	this.instance_18 = new lib.leaves1_dot_png();
	this.instance_18.setTransform(2361.6,1929.2,0.595,0.595,0,0,0,18.5,15);

	this.instance_19 = new lib.leaves2_dot_png();
	this.instance_19.setTransform(2271.7,1949.4,1,1,-173.8,0,0,22,20);

	this.instance_20 = new lib.leaves1_dot_png();
	this.instance_20.setTransform(4510.6,809.4,0.911,0.911,171,0,0,18.5,15.1);

	this.instance_21 = new lib.leaves1_dot_png();
	this.instance_21.setTransform(3769.8,793.3,1,1,117,0,0,18.5,15);

	this.instance_22 = new lib.moss_dot_png();
	this.instance_22.setTransform(3953.7,749.1,0.853,0.853,0,0,0,40.5,27.4);

	this.instance_23 = new lib.dirt3_dot_png();
	this.instance_23.setTransform(2491.1,2510.1,0.801,0.801,-61,0,0,55,88);

	this.instance_24 = new lib.dirt2_dot_png();
	this.instance_24.setTransform(1828.1,626.4,1,1,99,0,0,118.5,52.5);

	this.instance_25 = new lib.dirt1_dot_png();
	this.instance_25.setTransform(1839.7,2125.7,1.208,1.208,-179.8,0,0,55,87);

	this.instance_26 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_26.setTransform(4330.8,-113.7,1,1,0,0,0,14,211);

	this.instance_27 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_27.setTransform(3698.6,389.3,1,1,0,0,0,14,211);

	this.instance_28 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_28.setTransform(3695.6,796.6,1,1,0,0,0,14,211);

	this.instance_29 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_29.setTransform(3695.6,1204.2,1,1,0,0,0,14,211);

	this.instance_30 = new lib.crane_swith_only_dot_png();
	this.instance_30.setTransform(3695.3,1877.1,1,1,0,0,0,38.5,69.5);

	this.instance_31 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_31.setTransform(3695.6,1609.9,1,1,0,0,0,14,211);

	this.instance_32 = new lib.crane_swith_only_dot_png();
	this.instance_32.setTransform(1155.3,1829.1,1,1,0,0,0,38.5,69.5);

	this.instance_33 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_33.setTransform(1156.9,1555.2,1,1,0,0,0,14,211);

	this.instance_34 = new lib.outsidebarn_hyphen_window2_dot_png();
	this.instance_34.setTransform(4139.5,1854.9,1.484,1.484,0,0,0,95,70);

	this.instance_35 = new lib.outsidebarn_hyphen_window2_dot_png();
	this.instance_35.setTransform(2274.6,1851.8,1.484,1.484,0,0,0,95,70);

	this.instance_36 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_36.setTransform(4667.6,2796.3,1,1,0,0,0,200,200);

	this.instance_37 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_37.setTransform(4354.3,2796.3,1,1,0,0,0,200,200);

	this.instance_38 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_38.setTransform(4044.7,2796.3,1,1,0,0,0,200,200);

	this.instance_39 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_39.setTransform(3677,2796.3,1,1,0,0,0,200,200);

	this.instance_40 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_40.setTransform(3319.1,2796.3,1,1,0,0,0,200,200);

	this.instance_41 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_41.setTransform(2986.6,2796.3,1,1,0,0,0,200,200);

	this.instance_42 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_42.setTransform(2653.9,2796.3,1,1,0,0,0,200,200);

	this.instance_43 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_43.setTransform(2323.8,2796.3,1,1,0,0,0,200,200);

	this.instance_44 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_44.setTransform(2011.1,2796.3,1,1,0,0,0,200,200);

	this.instance_45 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_45.setTransform(4327.6,2543.6,1,1,0,0,0,200,200);

	this.instance_46 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_46.setTransform(4667.6,2543.6,1,1,0,0,0,200,200);

	this.instance_47 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(3169.2,2543.6,1,1,0,0,0,200,200);

	this.instance_48 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_48.setTransform(3319.1,2543.6,1,1,0,0,0,200,200);

	this.instance_49 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_49.setTransform(3677,2543.6,1,1,0,0,0,200,200);

	this.instance_50 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_50.setTransform(4017,2543.6,1,1,0,0,0,200,200);

	this.instance_51 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_51.setTransform(2011.1,2543.6,1,1,0,0,0,200,200);

	this.instance_52 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_52.setTransform(2161,2543.6,1,1,0,0,0,200,200);

	this.instance_53 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_53.setTransform(2518.9,2543.6,1,1,0,0,0,200,200);

	this.instance_54 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_54.setTransform(2858.9,2543.6,1,1,0,0,0,200,200);

	this.instance_55 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_55.setTransform(2011.1,2190.9,1,1,0,0,0,200,200);

	this.instance_56 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_56.setTransform(2161,2190.9,1,1,0,0,0,200,200);

	this.instance_57 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_57.setTransform(2518.9,2190.9,1,1,0,0,0,200,200);

	this.instance_58 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_58.setTransform(2858.9,2190.9,1,1,0,0,0,200,200);

	this.instance_59 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_59.setTransform(3216.8,2190.9,1,1,0,0,0,200,200);

	this.instance_60 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_60.setTransform(3576.6,2190.9,1,1,0,0,0,200,200);

	this.instance_61 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_61.setTransform(3934.5,2190.9,1,1,0,0,0,200,200);

	this.instance_62 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_62.setTransform(4309.7,2190.9,1,1,0,0,0,200,200);

	this.instance_63 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_63.setTransform(4667.6,2190.9,1,1,0,0,0,200,200);

	this.instance_64 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_64.setTransform(2011.1,1828.2,1,1,0,0,0,200,200);

	this.instance_65 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_65.setTransform(2503.5,1828.2,1,1,0,0,0,200,200);

	this.instance_66 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_66.setTransform(2858.9,1828.2,1,1,0,0,0,200,200);

	this.instance_67 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_67.setTransform(3211.3,1828.2,1,1,0,0,0,200,200);

	this.instance_68 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_68.setTransform(3566.7,1828.2,1,1,0,0,0,200,200);

	this.instance_69 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_69.setTransform(3854.9,1817.6,1,1,0,0,0,200,200);

	this.instance_70 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_70.setTransform(4339.7,1828.9,1,1,0,0,0,200,200);

	this.instance_71 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_71.setTransform(4667.6,1828.2,1,1,0,0,0,200,200);

	this.instance_72 = new lib.outsidebarn_hyphen_window4_dot_png();
	this.instance_72.setTransform(4400.6,712.8,1.685,1.685,0,0,0,95,73);

	this.instance_73 = new lib.outsidebarn_hyphen_window1_dot_png();
	this.instance_73.setTransform(2268.8,683.1,1.518,1.518,0,0,0,99,72.5);

	this.instance_74 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_74.setTransform(2011.1,1453,1,1,0,0,0,200,200);

	this.instance_75 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_75.setTransform(2455.4,1458,1,1,0,0,0,200,200);

	this.instance_76 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_76.setTransform(2097.5,1458,1,1,0,0,0,200,200);

	this.instance_77 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_77.setTransform(3191.7,1458,1,1,0,0,0,200,200);

	this.instance_78 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_78.setTransform(2833.8,1458,1,1,0,0,0,200,200);

	this.instance_79 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_79.setTransform(3927.1,1458,1,1,0,0,0,200,200);

	this.instance_80 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_80.setTransform(3569.2,1458,1,1,0,0,0,200,200);

	this.instance_81 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_81.setTransform(4667.6,1458,1,1,0,0,0,200,200);

	this.instance_82 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_82.setTransform(4309.7,1458,1,1,0,0,0,200,200);

	this.instance_83 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_83.setTransform(2404.9,1075,1,1,0,0,0,200,200);

	this.instance_84 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_84.setTransform(3509.7,1075,1,1,0,0,0,200,200);

	this.instance_85 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_85.setTransform(3151.8,1075,1,1,0,0,0,200,200);

	this.instance_86 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_86.setTransform(2758,1075,1,1,0,0,0,200,200);

	this.instance_87 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_87.setTransform(4667.6,1075,1,1,0,0,0,200,200);

	this.instance_88 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_88.setTransform(4309.7,1075,1,1,0,0,0,200,200);

	this.instance_89 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_89.setTransform(2011.1,904.3,1,1,0,0,0,200,200);

	this.instance_90 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_90.setTransform(2433.8,904.3,1,1,0,0,0,200,200);

	this.instance_91 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_91.setTransform(2075.9,904.3,1,1,0,0,0,200,200);

	this.instance_92 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_92.setTransform(3169.2,904.3,1,1,0,0,0,200,200);

	this.instance_93 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_93.setTransform(2811.3,904.3,1,1,0,0,0,200,200);

	this.instance_94 = new lib.outsidebarn_hyphen_hole1_dot_png();
	this.instance_94.setTransform(3869.5,802.3,1,1,0,0,0,130,76.5);

	this.instance_95 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_95.setTransform(2011.1,534.1,1,1,0,0,0,200,200);

	this.instance_96 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_96.setTransform(2391.3,534.1,1,1,0,0,0,200,200);

	this.instance_97 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_97.setTransform(2774.1,534.1,1,1,0,0,0,200,200);

	this.instance_98 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_98.setTransform(3154.3,534.1,1,1,0,0,0,200,200);

	this.instance_99 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_99.setTransform(3548,534.1,1,1,0,0,0,200,200);

	this.instance_100 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_100.setTransform(3934.5,534.1,1,1,0,0,0,200,200);

	this.instance_101 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_101.setTransform(4295.5,399.7,1,1,0,0,0,200,200);

	this.instance_102 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_102.setTransform(2011.1,141.4,1,1,0,0,0,200,200);

	this.instance_103 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_103.setTransform(2391.3,145.1,1,1,0,0,0,200,200);

	this.instance_104 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_104.setTransform(2774.1,145.1,1,1,0,0,0,200,200);

	this.instance_105 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_105.setTransform(3154.3,145.1,1,1,0,0,0,200,200);

	this.instance_106 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_106.setTransform(3529.5,145.1,1,1,0,0,0,200,200);

	this.instance_107 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_107.setTransform(3909.7,145.1,1,1,0,0,0,200,200);

	this.instance_108 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_108.setTransform(4287.4,145.1,1,1,0,0,0,200,200);

	this.instance_109 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_109.setTransform(4667.6,145.1,1,1,0,0,0,200,200);

	this.instance_110 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_110.setTransform(4667.6,534.1,1,1,0,0,0,200,200);

	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(1.4,0);

	this.instance_111 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_111.setTransform(4667.6,904.3,1,1,0,0,0,200,200);

	this.instance_112 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_112.setTransform(4309.7,904.3,1,1,0,0,0,200,200);

	this.instance_113 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_113.setTransform(4190.9,904.3,1,1,0,0,0,200,200);

	this.instance_114 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_114.setTransform(3554.3,904.3,1,1,0,0,0,200,200);

	this.instance_115 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_115.setTransform(3875.7,1075,1,1,0,0,0,200,200);

	this.instance_116 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_116.setTransform(4242.2,1075,1,1,0,0,0,200,200);

	this.instance_117 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_117.setTransform(2007.1,153.1,1,1,4,0,0,200.1,200);

	this.instance_118 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_118.setTransform(2003.8,526.3,1,1,-2.7,0,0,200,200.1);

	this.instance_119 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_119.setTransform(2009.3,957.4,1,1,3.5,0,0,200,200);

	this.instance_120 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_120.setTransform(1997.7,1114.5,1,1,-3,0,0,200,200);

	this.instance_121 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_121.setTransform(1994.3,736.2,1,1,2,0,0,200,200);

	this.instance_122 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_122.setTransform(2004.6,2208.5,1,1,-3,0,0,200,200.1);

	this.instance_123 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_123.setTransform(2005.3,1831.9,1,1,3.2,0,0,200,200);

	this.instance_124 = new lib.dirt1_dot_png();
	this.instance_124.setTransform(1832.2,2188.2,1.208,1.208,175.5,0,0,55,87);

	this.instance_125 = new lib.outsidebarn_hyphen_top_dot_png();
	this.instance_125.setTransform(2011.5,116.8,1,1,-3.5,0,0,200,200);

	this.instance_126 = new lib.leaves2_dot_png();
	this.instance_126.setTransform(3936.2,837.2,0.799,0.799,-30.4,0,0,22.1,20.1);

	this.instance_127 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_127.setTransform(2315.3,2135.8,1,1,0,0,0,200,200);

	this.instance_128 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_128.setTransform(2237.9,1555.3,1,1,0,0,0,200,200);

	this.instance_129 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_129.setTransform(3968.4,1559.9,1,1,0,0,0,200,200);

	this.instance_130 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_130.setTransform(3963.8,2145.3,1,1,0,0,0,200,200);

	this.instance_131 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_131.setTransform(4112,548.4,1,1,0,0,0,200,200);

	this.addChild(this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.isDispBG,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.6,-324.7,5108.1,3618.7);


(lib.level15movingplatform = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(-2.2,-2522,0.736,0.736,0,0,0,7,74.1);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(-2.2,-2414.7,0.736,0.736,0,0,0,7,74.1);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(-2.2,-2307.5,0.736,0.736,0,0,0,7,74.1);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(-2.2,-2200.3,0.736,0.736,0,0,0,7,74.1);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(-2.2,-2093.1,0.736,0.736,0,0,0,7,74.1);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(-2.2,-1985.8,0.736,0.736,0,0,0,7,74.1);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(-2.2,-1878.6,0.736,0.736,0,0,0,7,74.1);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(-3,-1771.4,0.736,0.736,0,0,0,7,74.1);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(-3,-1664.2,0.736,0.736,0,0,0,7,74.1);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(-3,-1556.9,0.736,0.736,0,0,0,7,74.1);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(-3,-1449.7,0.736,0.736,0,0,0,7,74.1);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(-3,-1342.5,0.736,0.736,0,0,0,7,74.1);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(-3,-1235.3,0.736,0.736,0,0,0,7,74.1);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(-3,-1128,0.736,0.736,0,0,0,7,74.1);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(-3,-1020.8,0.736,0.736,0,0,0,7,74.1);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(-3,-911.9,0.736,0.736,0,0,0,7,74.1);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(-3,-804.7,0.736,0.736,0,0,0,7,74.1);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(-3,-697.5,0.736,0.736,0,0,0,7,74.1);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(-3,-590.3,0.736,0.736,0,0,0,7,74.1);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(-3,-483,0.736,0.736,0,0,0,7,74.1);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(-3,-375.8,0.736,0.736,0,0,0,7,74.1);

	this.instance_21 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_21.setTransform(-3,-268.6,0.736,0.736,0,0,0,7,74.1);

	this.instance_22 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_22.setTransform(-3,-161.4,0.736,0.736,0,0,0,7,74.1);

	this.isMovingItem = new lib.woodencrate_dot_png();
	this.isMovingItem.setTransform(0,0,0.543,0.365,0,0,0,234,98);

	this.instance_23 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_23.setTransform(33.6,-68.8,0.736,0.736,135.7,0,0,7,74);

	this.instance_24 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_24.setTransform(-38.1,-69.3,0.736,0.736,43.2,0,0,7,74);

	this.addChild(this.instance_24,this.instance_23,this.isMovingItem,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127,-2576.5,254,2612.3);


(lib.level15movingitem = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(4.8,-2237.8,0.643,0.706,0,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(4.7,-2138.4,0.643,0.643,0,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(4.8,-2044,0.643,0.643,0,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(4.4,-1949.6,0.643,0.643,0,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(4.4,-1855.2,0.643,0.643,0,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(4.1,-1760.8,0.643,0.643,0,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(4.1,-1666.4,0.643,0.643,0,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(4.1,-1572,0.643,0.643,0,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(3.7,-1477.6,0.643,0.643,0,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(3.8,-1383.2,0.643,0.643,0,0,0,7,74);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(3.4,-1288.8,0.643,0.643,0,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(3.4,-1194.4,0.643,0.643,0,0,0,7,74);

	this.instance_12 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_12.setTransform(3.1,-1100,0.643,0.643,0,0,0,7,74);

	this.instance_13 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_13.setTransform(3.1,-1005.6,0.643,0.643,0,0,0,7,74);

	this.instance_14 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_14.setTransform(2.8,-911.2,0.643,0.643,0,0,0,7,74);

	this.instance_15 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_15.setTransform(2.8,-816.4,0.643,0.643,0,0,0,7,74);

	this.instance_16 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_16.setTransform(2.4,-722,0.643,0.643,0,0,0,7,74);

	this.instance_17 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_17.setTransform(2.5,-627.6,0.643,0.643,0,0,0,7,74);

	this.instance_18 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_18.setTransform(2.1,-533.2,0.643,0.643,0,0,0,7,74);

	this.instance_19 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_19.setTransform(2.1,-438.8,0.643,0.643,0,0,0,7,74);

	this.instance_20 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_20.setTransform(1.8,-344.4,0.643,0.643,0,0,0,7,74);

	this.instance_21 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_21.setTransform(1.8,-250,0.643,0.643,0,0,0,7,74);

	this.instance_22 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_22.setTransform(1.5,-155.6,0.643,0.643,0,0,0,7,74);

	this.isMovingItem = new lib.woodencrate_dot_png();
	this.isMovingItem.setTransform(0,0,0.54,0.381,0,0,0,234,98);

	this.instance_23 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_23.setTransform(-29.8,-70.7,0.686,0.686,40.2,0,0,7,74);

	this.instance_24 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_24.setTransform(34.2,-69.6,0.686,0.686,137.7,0,0,7.1,74.1);

	this.addChild(this.instance_24,this.instance_23,this.isMovingItem,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.3,-2290.1,252.8,2327.4);


(lib.level14PixiBG = function() {
	this.initialize();

	// Layer 1
	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	// Layer 4
	this.instance = new lib.crane_swith_only_dot_png();
	this.instance.setTransform(1372.7,-161.8,1,1,0,0,0,38.5,69.5);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(1875.3,-327.5,0.55,0.55,0,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(1875.1,-246.6,0.55,0.55,0,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(1874.9,-165.9,0.55,0.55,0,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(1874.8,-84.8,0.55,0.55,0,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(1874.7,76.9,0.55,0.55,0,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(1874.7,-3.9,0.55,0.55,0,0,0,7,74);

	this.instance_7 = new lib.hook_dot_png();
	this.instance_7.setTransform(1874.9,234.8,0.42,0.42,0,0,0,41.1,96.5);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(1874.7,157.6,0.55,0.55,0,0,0,7,74);

	this.instance_9 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_9.setTransform(1372.1,-430.7,1,1,0,0,0,14,211);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.isDispBG);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84,-641.7,2890.9,2220.2);


(lib.level14movingitem = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(3.7,-508.3,0.771,0.803,0,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(3.7,-393.1,0.771,0.771,0,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(3.9,-279.4,0.771,0.771,0,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(3.9,-166.2,0.771,0.771,0,0,0,7,74);

	this.isMovingItem = new lib.metalbox_dot_png();
	this.isMovingItem.setTransform(0.1,0,0.548,0.548,0,0,0,341.6,61.5);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(-41.8,-67.7,0.833,0.833,48.5,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(47.9,-67.2,0.833,0.833,133.7,0,0,7,74);

	this.addChild(this.instance_5,this.instance_4,this.isMovingItem,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-187.1,-567.7,374.3,601.4);


(lib.level13SquareTurnyThing = function() {
	this.initialize();

	// Layer 1
	this.isMovingItem = new lib.metalbar_dot_png();
	this.isMovingItem.setTransform(-444.7,-8.6,1.893,0.406);

	this.addChild(this.isMovingItem);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-444.7,-8.6,927.6,21.9);


(lib.level13PixiBG = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(4584.4,1162,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(4611.5,928.4,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(4584,1015.6,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(4584.3,1083.4,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(4584.5,1240.3,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.moss_dot_png();
	this.instance_5.setTransform(4004.1,-75,1,1,0,0,0,40.5,27.5);

	this.instance_6 = new lib.moss_dot_png();
	this.instance_6.setTransform(2434.3,22,1,1,136.6,0,0,41,26.4);

	this.instance_7 = new lib.moss_dot_png();
	this.instance_7.setTransform(971.2,482.6,1,1,-74.7,0,0,40.5,27.6);

	this.instance_8 = new lib.dirt4_dot_png();
	this.instance_8.setTransform(2473.9,963.1,1,1,0,0,0,121.5,37.5);

	this.instance_9 = new lib.dirt4_dot_png();
	this.instance_9.setTransform(4565,111.8,1,1,0,0,0,121.5,37.5);

	this.instance_10 = new lib.dirt1_dot_png();
	this.instance_10.setTransform(4848,971.7,1.25,1.25,177,0,0,55,87);

	this.instance_11 = new lib.dirt1_dot_png();
	this.instance_11.setTransform(659.4,31.1,1,1,177,0,0,55,87);

	this.instance_12 = new lib.dirt1_dot_png();
	this.instance_12.setTransform(1344.8,724.1,1,1,121.3,0,0,55,87);

	this.instance_13 = new lib.dirt1_dot_png();
	this.instance_13.setTransform(3567,420.3,1,1,0,0,0,55,87);

	this.instance_14 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_14.setTransform(4981.3,1434.5,1,1,0,0,0,237,152.5);

	this.instance_15 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_15.setTransform(4039.5,1434.5,1,1,0,0,0,237,152.5);

	this.instance_16 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_16.setTransform(3568.2,1434.5,1,1,0,0,0,237,152.5);

	this.instance_17 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_17.setTransform(3095.8,1434.5,1,1,0,0,0,237,152.5);

	this.instance_18 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_18.setTransform(2625.7,1434.5,1,1,0,0,0,237,152.5);

	this.instance_19 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_19.setTransform(2154.4,1434.5,1,1,0,0,0,237,152.5);

	this.instance_20 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_20.setTransform(1682,1434.5,1,1,0,0,0,237,152.5);

	this.instance_21 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_21.setTransform(1210.7,1434.5,1,1,0,0,0,237,152.5);

	this.instance_22 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_22.setTransform(740.6,1434.5,1,1,0,0,0,237,152.5);

	this.instance_23 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_23.setTransform(269.2,1434.5,1,1,0,0,0,237,152.5);

	this.instance_24 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_24.setTransform(4981.3,1131.1,1,1,0,0,0,237,152.5);

	this.instance_25 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_25.setTransform(4509,1131.1,1,1,0,0,0,237,152.5);

	this.instance_26 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_26.setTransform(4039.5,1131.1,1,1,0,0,0,237,152.5);

	this.instance_27 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_27.setTransform(3568.2,1131.1,1,1,0,0,0,237,152.5);

	this.instance_28 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_28.setTransform(3095.8,1131.1,1,1,0,0,0,237,152.5);

	this.instance_29 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_29.setTransform(2625.7,1131.1,1,1,0,0,0,237,152.5);

	this.instance_30 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_30.setTransform(2154.4,1131.1,1,1,0,0,0,237,152.5);

	this.instance_31 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_31.setTransform(1682,1131.1,1,1,0,0,0,237,152.5);

	this.instance_32 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_32.setTransform(1210.7,1131.1,1,1,0,0,0,237,152.5);

	this.instance_33 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_33.setTransform(740.6,1131.1,1,1,0,0,0,237,152.5);

	this.instance_34 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_34.setTransform(269.2,1131.1,1,1,0,0,0,237,152.5);

	this.instance_35 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_35.setTransform(4981.3,829.3,1,1,0,0,0,237,152.5);

	this.instance_36 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_36.setTransform(4509,829.3,1,1,0,0,0,237,152.5);

	this.instance_37 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_37.setTransform(4039.5,829.3,1,1,0,0,0,237,152.5);

	this.instance_38 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_38.setTransform(3568.2,829.3,1,1,0,0,0,237,152.5);

	this.instance_39 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_39.setTransform(3095.8,829.3,1,1,0,0,0,237,152.5);

	this.instance_40 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_40.setTransform(2625.7,829.3,1,1,0,0,0,237,152.5);

	this.instance_41 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_41.setTransform(2154.4,829.3,1,1,0,0,0,237,152.5);

	this.instance_42 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_42.setTransform(1682,829.3,1,1,0,0,0,237,152.5);

	this.instance_43 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_43.setTransform(1210.7,829.3,1,1,0,0,0,237,152.5);

	this.instance_44 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_44.setTransform(740.6,829.3,1,1,0,0,0,237,152.5);

	this.instance_45 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_45.setTransform(269.2,829.3,1,1,0,0,0,237,152.5);

	this.instance_46 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_46.setTransform(4981.3,527,1,1,0,0,0,237,152.5);

	this.instance_47 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(4509,527,1,1,0,0,0,237,152.5);

	this.instance_48 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_48.setTransform(4039.5,527,1,1,0,0,0,237,152.5);

	this.instance_49 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_49.setTransform(3568.2,527,1,1,0,0,0,237,152.5);

	this.instance_50 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_50.setTransform(3095.8,527,1,1,0,0,0,237,152.5);

	this.instance_51 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_51.setTransform(2625.7,527,1,1,0,0,0,237,152.5);

	this.instance_52 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_52.setTransform(2154.4,527,1,1,0,0,0,237,152.5);

	this.instance_53 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_53.setTransform(1682,527,1,1,0,0,0,237,152.5);

	this.instance_54 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_54.setTransform(1210.7,527,1,1,0,0,0,237,152.5);

	this.instance_55 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_55.setTransform(740.6,527,1,1,0,0,0,237,152.5);

	this.instance_56 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_56.setTransform(269.2,527,1,1,0,0,0,237,152.5);

	this.instance_57 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_57.setTransform(4981.3,225.1,1,1,0,0,0,237,152.5);

	this.instance_58 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_58.setTransform(4509,225.1,1,1,0,0,0,237,152.5);

	this.instance_59 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_59.setTransform(4039.5,225.1,1,1,0,0,0,237,152.5);

	this.instance_60 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_60.setTransform(3568.2,225.1,1,1,0,0,0,237,152.5);

	this.instance_61 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_61.setTransform(3095.8,225.1,1,1,0,0,0,237,152.5);

	this.instance_62 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_62.setTransform(2625.7,225.1,1,1,0,0,0,237,152.5);

	this.instance_63 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_63.setTransform(2154.4,225.1,1,1,0,0,0,237,152.5);

	this.instance_64 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_64.setTransform(1682,225.1,1,1,0,0,0,237,152.5);

	this.instance_65 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_65.setTransform(1210.7,225.1,1,1,0,0,0,237,152.5);

	this.instance_66 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_66.setTransform(740.6,225.1,1,1,0,0,0,237,152.5);

	this.instance_67 = new lib.insidebarn_hyphen_repeat_dot_png();
	this.instance_67.setTransform(269.2,225.1,1,1,0,0,0,237,152.5);

	this.instance_68 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_68.setTransform(4981.3,-78.7,1,1,0,0,0,237,153);

	this.instance_69 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_69.setTransform(4509,-78.7,1,1,0,0,0,237,153);

	this.instance_70 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_70.setTransform(4037.6,-78.7,1,1,0,0,0,237,153);

	this.instance_71 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_71.setTransform(3567.2,-78.7,1,1,0,0,0,237,153);

	this.instance_72 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_72.setTransform(3095.8,-78.7,1,1,0,0,0,237,153);

	this.instance_73 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_73.setTransform(2625.7,-78.7,1,1,0,0,0,237,153);

	this.instance_74 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_74.setTransform(2154.4,-78.7,1,1,0,0,0,237,153);

	this.instance_75 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_75.setTransform(1682,-78.7,1,1,0,0,0,237,153);

	this.instance_76 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_76.setTransform(1210.7,-78.7,1,1,0,0,0,237,153);

	this.instance_77 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_77.setTransform(740.6,-78.7,1,1,0,0,0,237,153);

	this.instance_78 = new lib.insidebarn_hyphen_top_dot_png();
	this.instance_78.setTransform(269.2,-78.7,1,1,0,0,0,237,153);

	// Layer 1
	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.addChild(this.isDispBG,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-301.2,5217.4,2082.4);


(lib.level13Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(1658.5,-198.7,1,1,0,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(1658.5,-56.1,1,1,0,0,0,7,74);

	this.gate3 = new lib.level13SquareTurnyThing();
	this.gate3.setTransform(2576.9,717.7,1,4.818);

	this.instance_2 = new lib.fork_dot_png();
	this.instance_2.setTransform(4653,1113.1,1,1,-5.4,0,0,17.9,82.5);

	this.instance_3 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_3.setTransform(3647.5,1502.5,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_4 = new lib.dirt3_dot_png();
	this.instance_4.setTransform(3587.5,1439.9,1.074,1.074,0,0,0,55,88);

	this.instance_5 = new lib.dirt1_dot_png();
	this.instance_5.setTransform(4589.8,1392.3,0.665,0.665,-97.2,0,0,55,87);

	this.instance_6 = new lib.leaves2_dot_png();
	this.instance_6.setTransform(4512.5,1409.9,0.518,0.518,140,0,0,22,20);

	this.instance_7 = new lib.moss_dot_png();
	this.instance_7.setTransform(4551.8,1547.1,0.652,0.652,-132.9,0,0,40.5,27.4);

	this.instance_8 = new lib.dirt4_dot_png();
	this.instance_8.setTransform(3903.4,1420.4,1.391,1.391,0,0,0,121.5,37.5);

	this.instance_9 = new lib.moss_dot_png();
	this.instance_9.setTransform(3544.7,1269.3,0.818,0.818,90,0,0,40.5,27.5);

	this.instance_10 = new lib.dirt3_dot_png();
	this.instance_10.setTransform(3563.1,1666.9,0.614,0.614,172,0,0,55,88);

	this.instance_11 = new lib.dirt1_dot_png();
	this.instance_11.setTransform(4172,1296.5,1,1,0,0,0,55,87);

	this.instance_12 = new lib.dirt4_dot_png();
	this.instance_12.setTransform(4472.8,1609,1,1,0,0,0,121.5,37.5);

	this.instance_13 = new lib.dirt4_dot_png();
	this.instance_13.setTransform(4436.6,1657.4,1,1,0,0,0,121.5,37.5);

	this.instance_14 = new lib.dirt4_dot_png();
	this.instance_14.setTransform(4415.3,1626.2,1,1,0,0,0,121.5,37.5);

	this.instance_15 = new lib.dirt4_dot_png();
	this.instance_15.setTransform(4377.8,1577.3,1,1,0,0,0,121.5,37.5);

	this.instance_16 = new lib.dirt4_dot_png();
	this.instance_16.setTransform(4336.1,1609,1,1,0,0,0,121.5,37.5);

	this.instance_17 = new lib.dirt4_dot_png();
	this.instance_17.setTransform(4302,1551.2,1,1,0,0,0,121.5,37.5);

	this.instance_18 = new lib.dirt4_dot_png();
	this.instance_18.setTransform(4282,1586.5,1,1,0,0,0,121.5,37.5);

	this.instance_19 = new lib.dirt4_dot_png();
	this.instance_19.setTransform(4761,1279.5,1,1,0,0,0,121.5,37.5);

	this.instance_20 = new lib.dirt4_dot_png();
	this.instance_20.setTransform(4761,1307.6,1,1,0,0,0,121.5,37.5);

	this.instance_21 = new lib.dirt4_dot_png();
	this.instance_21.setTransform(4852,1326.1,1,1,0,0,0,121.5,37.5);

	this.instance_22 = new lib.dirt4_dot_png();
	this.instance_22.setTransform(4892,1346.1,1,1,0,0,0,121.5,37.5);

	this.instance_23 = new lib.dirt4_dot_png();
	this.instance_23.setTransform(4892,1307.6,1,1,0,0,0,121.5,37.5);

	this.instance_24 = new lib.dirt4_dot_png();
	this.instance_24.setTransform(4938.3,1297.7,1,1,0,0,0,121.5,37.5);

	this.instance_25 = new lib.leaves1_dot_png();
	this.instance_25.setTransform(236.9,718.9,0.797,0.797,0,0,0,18.5,15);

	this.instance_26 = new lib.moss_dot_png();
	this.instance_26.setTransform(381,674.1,0.831,0.831,-95.3,0,0,40.5,27.5);

	this.instance_27 = new lib.dirt1_dot_png();
	this.instance_27.setTransform(297.6,-126.2,1,1,0,0,0,52.5,85.8);

	this.instance_28 = new lib.dirt4_dot_png();
	this.instance_28.setTransform(253.3,516.9,1,1,0,0,0,121.5,37.5);

	this.instance_29 = new lib.dirt4_dot_png();
	this.instance_29.setTransform(239.8,481.3,1,1,0,0,0,121.5,37.5);

	this.instance_30 = new lib.dirt4_dot_png();
	this.instance_30.setTransform(247,457.6,1,1,0,0,0,121.5,37.5);

	this.instance_31 = new lib.dirt4_dot_png();
	this.instance_31.setTransform(253.3,422.6,1,1,0,0,0,121.5,37.5);

	this.instance_32 = new lib.dirt4_dot_png();
	this.instance_32.setTransform(253.3,448.8,1,1,0,0,0,121.5,37.5);

	this.instance_33 = new lib.dirt3_dot_png();
	this.instance_33.setTransform(162.6,98.8,0.56,0.56,0,0,0,55.1,88);

	this.instance_34 = new lib.water_hyphen_top_dot_png();
	this.instance_34.setTransform(2341.4,1255.7,1,1,0,0,0,49.5,50);

	this.instance_35 = new lib.water_hyphen_top_dot_png();
	this.instance_35.setTransform(2435.8,1255.7,1,1,0,0,0,49.5,50);

	this.gate2 = new lib.level13SquareTurnyThing();
	this.gate2.setTransform(3490.4,720.4,1,4.823);

	this.gate1 = new lib.level13SquareTurnyThing();
	this.gate1.setTransform(1659,717.8,1,4.818);

	this.instance_36 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_36.setTransform(1658.5,84,1,1,0,0,0,7,74);

	this.instance_37 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_37.setTransform(1658.5,228.4,1,1,0,0,0,7,74);

	this.instance_38 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_38.setTransform(1658.5,371.4,1,1,0,0,0,7,74);

	this.instance_39 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_39.setTransform(1658.5,510.9,1,1,0,0,0,7,74);

	this.instance_40 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_40.setTransform(1658.5,653.9,1,1,0,0,0,7,74);

	this.instance_41 = new lib.outsidebarn_hyphen_hole2_dot_png();
	this.instance_41.setTransform(4582.8,1485.6,0.541,0.541,0,0,0,195.1,133.5);

	this.instance_42 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_42.setTransform(4971.5,1626.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_43 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_43.setTransform(4971.5,1502.5,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_44 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_44.setTransform(4971.5,1304.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_45 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_45.setTransform(4770.2,1304.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_46 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_46.setTransform(4570.2,1304.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_47 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_47.setTransform(4368.9,1626.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_48 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_48.setTransform(4368.9,1502.5,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_49 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_49.setTransform(4368.9,1304.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_50 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_50.setTransform(4250.2,1626.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_51 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_51.setTransform(4250.2,1502.5,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_52 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_52.setTransform(4250.2,1304.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_53 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_53.setTransform(4048.9,1626.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_54 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_54.setTransform(4048.9,1502.5,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_55 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_55.setTransform(4048.9,1304.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_56 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_56.setTransform(3848.8,1626.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_57 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_57.setTransform(3848.8,1502.5,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_58 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_58.setTransform(3848.8,1304.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_59 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_59.setTransform(3647.5,1626.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_60 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_60.setTransform(3647.5,1304.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_61 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_61.setTransform(270.5,-188.7,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_62 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_62.setTransform(216.1,-188.7,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_63 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_63.setTransform(270.5,26.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_64 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_64.setTransform(216.1,26.3,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_65 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_65.setTransform(270.5,224.5,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_66 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_66.setTransform(216.1,224.5,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_67 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_67.setTransform(270.5,442,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_68 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_68.setTransform(216.1,442,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_69 = new lib.woodenbox_dot_png();
	this.instance_69.setTransform(571.3,1623.6,1.195,1.195,0.2,0,0,114.5,84.5);

	this.instance_70 = new lib.woodenbox_dot_png();
	this.instance_70.setTransform(355.9,1600.4,1.069,1.069,91.4,0,0,114.5,84.5);

	this.instance_71 = new lib.woodenbox_dot_png();
	this.instance_71.setTransform(207.1,1592.8,1.195,1.195,87.9,0,0,114.5,84.5);

	this.instance_72 = new lib.water_hyphen_bottom_dot_png();
	this.instance_72.setTransform(3493.4,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_73 = new lib.water_hyphen_bottom_dot_png();
	this.instance_73.setTransform(3448.4,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_74 = new lib.water_hyphen_bottom_dot_png();
	this.instance_74.setTransform(3356.8,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_75 = new lib.water_hyphen_bottom_dot_png();
	this.instance_75.setTransform(3262.4,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_76 = new lib.water_hyphen_bottom_dot_png();
	this.instance_76.setTransform(3172.8,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_77 = new lib.water_hyphen_bottom_dot_png();
	this.instance_77.setTransform(3078.4,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_78 = new lib.water_hyphen_bottom_dot_png();
	this.instance_78.setTransform(2989.8,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_79 = new lib.water_hyphen_bottom_dot_png();
	this.instance_79.setTransform(2895.4,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_80 = new lib.water_hyphen_bottom_dot_png();
	this.instance_80.setTransform(2805.8,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_81 = new lib.water_hyphen_bottom_dot_png();
	this.instance_81.setTransform(2711.4,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_82 = new lib.water_hyphen_bottom_dot_png();
	this.instance_82.setTransform(2619.8,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_83 = new lib.water_hyphen_bottom_dot_png();
	this.instance_83.setTransform(2525.4,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_84 = new lib.water_hyphen_bottom_dot_png();
	this.instance_84.setTransform(2435.8,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_85 = new lib.water_hyphen_bottom_dot_png();
	this.instance_85.setTransform(2341.4,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_86 = new lib.water_hyphen_bottom_dot_png();
	this.instance_86.setTransform(2252.6,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_87 = new lib.water_hyphen_bottom_dot_png();
	this.instance_87.setTransform(2158.2,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_88 = new lib.water_hyphen_bottom_dot_png();
	this.instance_88.setTransform(2068.6,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_89 = new lib.water_hyphen_bottom_dot_png();
	this.instance_89.setTransform(1974.2,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_90 = new lib.water_hyphen_bottom_dot_png();
	this.instance_90.setTransform(1882.6,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_91 = new lib.water_hyphen_bottom_dot_png();
	this.instance_91.setTransform(1788.2,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_92 = new lib.water_hyphen_bottom_dot_png();
	this.instance_92.setTransform(1698.6,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_93 = new lib.water_hyphen_bottom_dot_png();
	this.instance_93.setTransform(1604.2,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_94 = new lib.water_hyphen_bottom_dot_png();
	this.instance_94.setTransform(1512.7,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_95 = new lib.water_hyphen_bottom_dot_png();
	this.instance_95.setTransform(1418.3,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_96 = new lib.water_hyphen_bottom_dot_png();
	this.instance_96.setTransform(1328.7,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_97 = new lib.water_hyphen_middle_dot_png();
	this.instance_97.setTransform(3493.4,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_98 = new lib.water_hyphen_middle_dot_png();
	this.instance_98.setTransform(3448.4,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_99 = new lib.water_hyphen_middle_dot_png();
	this.instance_99.setTransform(3358.8,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_100 = new lib.water_hyphen_middle_dot_png();
	this.instance_100.setTransform(3264.4,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_101 = new lib.water_hyphen_middle_dot_png();
	this.instance_101.setTransform(3172.8,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_102 = new lib.water_hyphen_middle_dot_png();
	this.instance_102.setTransform(3078.4,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_103 = new lib.water_hyphen_middle_dot_png();
	this.instance_103.setTransform(2986.9,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_104 = new lib.water_hyphen_middle_dot_png();
	this.instance_104.setTransform(2892.5,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_105 = new lib.water_hyphen_middle_dot_png();
	this.instance_105.setTransform(2802.9,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_106 = new lib.water_hyphen_middle_dot_png();
	this.instance_106.setTransform(2708.5,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_107 = new lib.water_hyphen_middle_dot_png();
	this.instance_107.setTransform(2616.9,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_108 = new lib.water_hyphen_middle_dot_png();
	this.instance_108.setTransform(2522.5,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_109 = new lib.water_hyphen_middle_dot_png();
	this.instance_109.setTransform(2432.9,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_110 = new lib.water_hyphen_middle_dot_png();
	this.instance_110.setTransform(2338.5,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_111 = new lib.water_hyphen_middle_dot_png();
	this.instance_111.setTransform(2245.5,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_112 = new lib.water_hyphen_middle_dot_png();
	this.instance_112.setTransform(2151.1,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_113 = new lib.water_hyphen_middle_dot_png();
	this.instance_113.setTransform(2061.5,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_114 = new lib.water_hyphen_middle_dot_png();
	this.instance_114.setTransform(1967.1,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_115 = new lib.water_hyphen_middle_dot_png();
	this.instance_115.setTransform(1875.5,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_116 = new lib.water_hyphen_middle_dot_png();
	this.instance_116.setTransform(1781.1,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_117 = new lib.water_hyphen_middle_dot_png();
	this.instance_117.setTransform(1691.5,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_118 = new lib.water_hyphen_middle_dot_png();
	this.instance_118.setTransform(1597.1,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_119 = new lib.water_hyphen_middle_dot_png();
	this.instance_119.setTransform(1512.7,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_120 = new lib.water_hyphen_middle_dot_png();
	this.instance_120.setTransform(1418.3,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_121 = new lib.water_hyphen_middle_dot_png();
	this.instance_121.setTransform(1328.7,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_122 = new lib.water_hyphen_middle_dot_png();
	this.instance_122.setTransform(3493.4,1522,1,1,0,0,0,49.5,49.5);

	this.instance_123 = new lib.water_hyphen_middle_dot_png();
	this.instance_123.setTransform(3448.4,1522,1,1,0,0,0,49.5,49.5);

	this.instance_124 = new lib.water_hyphen_middle_dot_png();
	this.instance_124.setTransform(3358.8,1522,1,1,0,0,0,49.5,49.5);

	this.instance_125 = new lib.water_hyphen_middle_dot_png();
	this.instance_125.setTransform(3264.4,1522,1,1,0,0,0,49.5,49.5);

	this.instance_126 = new lib.water_hyphen_middle_dot_png();
	this.instance_126.setTransform(3172.8,1522,1,1,0,0,0,49.5,49.5);

	this.instance_127 = new lib.water_hyphen_middle_dot_png();
	this.instance_127.setTransform(3078.4,1522,1,1,0,0,0,49.5,49.5);

	this.instance_128 = new lib.water_hyphen_middle_dot_png();
	this.instance_128.setTransform(2986.9,1522,1,1,0,0,0,49.5,49.5);

	this.instance_129 = new lib.water_hyphen_middle_dot_png();
	this.instance_129.setTransform(2892.5,1522,1,1,0,0,0,49.5,49.5);

	this.instance_130 = new lib.water_hyphen_middle_dot_png();
	this.instance_130.setTransform(2802.9,1522,1,1,0,0,0,49.5,49.5);

	this.instance_131 = new lib.water_hyphen_middle_dot_png();
	this.instance_131.setTransform(2708.5,1522,1,1,0,0,0,49.5,49.5);

	this.instance_132 = new lib.water_hyphen_middle_dot_png();
	this.instance_132.setTransform(2616.9,1522,1,1,0,0,0,49.5,49.5);

	this.instance_133 = new lib.water_hyphen_middle_dot_png();
	this.instance_133.setTransform(2522.5,1522,1,1,0,0,0,49.5,49.5);

	this.instance_134 = new lib.water_hyphen_middle_dot_png();
	this.instance_134.setTransform(2432.9,1522,1,1,0,0,0,49.5,49.5);

	this.instance_135 = new lib.water_hyphen_middle_dot_png();
	this.instance_135.setTransform(2338.5,1522,1,1,0,0,0,49.5,49.5);

	this.instance_136 = new lib.water_hyphen_middle_dot_png();
	this.instance_136.setTransform(2245.5,1522,1,1,0,0,0,49.5,49.5);

	this.instance_137 = new lib.water_hyphen_middle_dot_png();
	this.instance_137.setTransform(2151.1,1522,1,1,0,0,0,49.5,49.5);

	this.instance_138 = new lib.water_hyphen_middle_dot_png();
	this.instance_138.setTransform(2061.5,1522,1,1,0,0,0,49.5,49.5);

	this.instance_139 = new lib.water_hyphen_middle_dot_png();
	this.instance_139.setTransform(1967.1,1522,1,1,0,0,0,49.5,49.5);

	this.instance_140 = new lib.water_hyphen_middle_dot_png();
	this.instance_140.setTransform(1875.5,1522,1,1,0,0,0,49.5,49.5);

	this.instance_141 = new lib.water_hyphen_middle_dot_png();
	this.instance_141.setTransform(1781.1,1522,1,1,0,0,0,49.5,49.5);

	this.instance_142 = new lib.water_hyphen_middle_dot_png();
	this.instance_142.setTransform(1691.5,1522,1,1,0,0,0,49.5,49.5);

	this.instance_143 = new lib.water_hyphen_middle_dot_png();
	this.instance_143.setTransform(1597.1,1522,1,1,0,0,0,49.5,49.5);

	this.instance_144 = new lib.water_hyphen_middle_dot_png();
	this.instance_144.setTransform(1512.7,1522,1,1,0,0,0,49.5,49.5);

	this.instance_145 = new lib.water_hyphen_middle_dot_png();
	this.instance_145.setTransform(1418.3,1522,1,1,0,0,0,49.5,49.5);

	this.instance_146 = new lib.water_hyphen_middle_dot_png();
	this.instance_146.setTransform(1328.7,1522,1,1,0,0,0,49.5,49.5);

	this.instance_147 = new lib.water_hyphen_middle_dot_png();
	this.instance_147.setTransform(3493.4,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_148 = new lib.water_hyphen_middle_dot_png();
	this.instance_148.setTransform(3448.4,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_149 = new lib.water_hyphen_middle_dot_png();
	this.instance_149.setTransform(3358.8,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_150 = new lib.water_hyphen_middle_dot_png();
	this.instance_150.setTransform(3264.4,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_151 = new lib.water_hyphen_middle_dot_png();
	this.instance_151.setTransform(3172.8,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_152 = new lib.water_hyphen_middle_dot_png();
	this.instance_152.setTransform(3078.4,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_153 = new lib.water_hyphen_middle_dot_png();
	this.instance_153.setTransform(2986.9,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_154 = new lib.water_hyphen_middle_dot_png();
	this.instance_154.setTransform(2892.5,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_155 = new lib.water_hyphen_middle_dot_png();
	this.instance_155.setTransform(2802.9,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_156 = new lib.water_hyphen_middle_dot_png();
	this.instance_156.setTransform(2708.5,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_157 = new lib.water_hyphen_middle_dot_png();
	this.instance_157.setTransform(2616.9,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_158 = new lib.water_hyphen_middle_dot_png();
	this.instance_158.setTransform(2522.5,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_159 = new lib.water_hyphen_middle_dot_png();
	this.instance_159.setTransform(2432.9,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_160 = new lib.water_hyphen_middle_dot_png();
	this.instance_160.setTransform(2338.5,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_161 = new lib.water_hyphen_middle_dot_png();
	this.instance_161.setTransform(2245.5,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_162 = new lib.water_hyphen_middle_dot_png();
	this.instance_162.setTransform(2151.1,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_163 = new lib.water_hyphen_middle_dot_png();
	this.instance_163.setTransform(2061.5,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_164 = new lib.water_hyphen_middle_dot_png();
	this.instance_164.setTransform(1967.1,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_165 = new lib.water_hyphen_middle_dot_png();
	this.instance_165.setTransform(1875.5,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_166 = new lib.water_hyphen_middle_dot_png();
	this.instance_166.setTransform(1781.1,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_167 = new lib.water_hyphen_middle_dot_png();
	this.instance_167.setTransform(1691.5,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_168 = new lib.water_hyphen_middle_dot_png();
	this.instance_168.setTransform(1597.1,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_169 = new lib.water_hyphen_middle_dot_png();
	this.instance_169.setTransform(1512.7,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_170 = new lib.water_hyphen_middle_dot_png();
	this.instance_170.setTransform(1418.3,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_171 = new lib.water_hyphen_middle_dot_png();
	this.instance_171.setTransform(1328.7,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_172 = new lib.water_hyphen_middle_dot_png();
	this.instance_172.setTransform(3493.4,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_173 = new lib.water_hyphen_middle_dot_png();
	this.instance_173.setTransform(3448.4,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_174 = new lib.water_hyphen_middle_dot_png();
	this.instance_174.setTransform(3358.8,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_175 = new lib.water_hyphen_middle_dot_png();
	this.instance_175.setTransform(3264.4,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_176 = new lib.water_hyphen_middle_dot_png();
	this.instance_176.setTransform(3172.8,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_177 = new lib.water_hyphen_middle_dot_png();
	this.instance_177.setTransform(3078.4,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_178 = new lib.water_hyphen_middle_dot_png();
	this.instance_178.setTransform(2986.9,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_179 = new lib.water_hyphen_middle_dot_png();
	this.instance_179.setTransform(2892.5,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_180 = new lib.water_hyphen_middle_dot_png();
	this.instance_180.setTransform(2802.9,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_181 = new lib.water_hyphen_middle_dot_png();
	this.instance_181.setTransform(2708.5,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_182 = new lib.water_hyphen_middle_dot_png();
	this.instance_182.setTransform(2616.9,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_183 = new lib.water_hyphen_middle_dot_png();
	this.instance_183.setTransform(2522.5,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_184 = new lib.water_hyphen_middle_dot_png();
	this.instance_184.setTransform(2432.9,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_185 = new lib.water_hyphen_middle_dot_png();
	this.instance_185.setTransform(2338.5,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_186 = new lib.water_hyphen_middle_dot_png();
	this.instance_186.setTransform(2245.5,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_187 = new lib.water_hyphen_middle_dot_png();
	this.instance_187.setTransform(2151.1,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_188 = new lib.water_hyphen_middle_dot_png();
	this.instance_188.setTransform(2061.5,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_189 = new lib.water_hyphen_middle_dot_png();
	this.instance_189.setTransform(1967.1,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_190 = new lib.water_hyphen_middle_dot_png();
	this.instance_190.setTransform(1875.5,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_191 = new lib.water_hyphen_middle_dot_png();
	this.instance_191.setTransform(1781.1,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_192 = new lib.water_hyphen_middle_dot_png();
	this.instance_192.setTransform(1691.5,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_193 = new lib.water_hyphen_middle_dot_png();
	this.instance_193.setTransform(1597.1,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_194 = new lib.water_hyphen_middle_dot_png();
	this.instance_194.setTransform(1512.7,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_195 = new lib.water_hyphen_middle_dot_png();
	this.instance_195.setTransform(1418.3,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_196 = new lib.water_hyphen_middle_dot_png();
	this.instance_196.setTransform(1328.7,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_197 = new lib.water_hyphen_top_dot_png();
	this.instance_197.setTransform(3493.4,1255.7,1,1,0,0,0,49.5,50);

	this.instance_198 = new lib.water_hyphen_top_dot_png();
	this.instance_198.setTransform(3448.4,1255.7,1,1,0,0,0,49.5,50);

	this.instance_199 = new lib.water_hyphen_top_dot_png();
	this.instance_199.setTransform(3359.7,1255.7,1,1,0,0,0,49.5,50);

	this.instance_200 = new lib.water_hyphen_top_dot_png();
	this.instance_200.setTransform(3265.3,1255.7,1,1,0,0,0,49.5,50);

	this.instance_201 = new lib.water_hyphen_top_dot_png();
	this.instance_201.setTransform(3172.8,1255.7,1,1,0,0,0,49.5,50);

	this.instance_202 = new lib.water_hyphen_top_dot_png();
	this.instance_202.setTransform(3078.4,1255.7,1,1,0,0,0,49.5,50);

	this.instance_203 = new lib.water_hyphen_top_dot_png();
	this.instance_203.setTransform(2992.7,1255.7,1,1,0,0,0,49.5,50);

	this.instance_204 = new lib.water_hyphen_top_dot_png();
	this.instance_204.setTransform(2898.3,1255.7,1,1,0,0,0,49.5,50);

	this.instance_205 = new lib.water_hyphen_top_dot_png();
	this.instance_205.setTransform(2805.8,1255.7,1,1,0,0,0,49.5,50);

	this.instance_206 = new lib.water_hyphen_top_dot_png();
	this.instance_206.setTransform(2711.4,1255.7,1,1,0,0,0,49.5,50);

	this.instance_207 = new lib.water_hyphen_top_dot_png();
	this.instance_207.setTransform(2622.7,1255.7,1,1,0,0,0,49.5,50);

	this.instance_208 = new lib.water_hyphen_top_dot_png();
	this.instance_208.setTransform(2528.3,1255.7,1,1,0,0,0,49.5,50);

	this.instance_209 = new lib.water_hyphen_top_dot_png();
	this.instance_209.setTransform(2252.6,1255.7,1,1,0,0,0,49.5,50);

	this.instance_210 = new lib.water_hyphen_top_dot_png();
	this.instance_210.setTransform(2158.2,1255.7,1,1,0,0,0,49.5,50);

	this.instance_211 = new lib.water_hyphen_top_dot_png();
	this.instance_211.setTransform(2065.7,1255.7,1,1,0,0,0,49.5,50);

	this.instance_212 = new lib.water_hyphen_top_dot_png();
	this.instance_212.setTransform(1971.3,1255.7,1,1,0,0,0,49.5,50);

	this.instance_213 = new lib.water_hyphen_top_dot_png();
	this.instance_213.setTransform(1882.6,1255.7,1,1,0,0,0,49.5,50);

	this.instance_214 = new lib.water_hyphen_top_dot_png();
	this.instance_214.setTransform(1788.2,1255.7,1,1,0,0,0,49.5,50);

	this.instance_215 = new lib.water_hyphen_top_dot_png();
	this.instance_215.setTransform(1695.7,1255.7,1,1,0,0,0,49.5,50);

	this.instance_216 = new lib.water_hyphen_top_dot_png();
	this.instance_216.setTransform(1601.3,1255.7,1,1,0,0,0,49.5,50);

	this.instance_217 = new lib.water_hyphen_top_dot_png();
	this.instance_217.setTransform(1515.6,1255.7,1,1,0,0,0,49.5,50);

	this.instance_218 = new lib.water_hyphen_top_dot_png();
	this.instance_218.setTransform(1421.2,1255.7,1,1,0,0,0,49.5,50);

	this.instance_219 = new lib.water_hyphen_top_dot_png();
	this.instance_219.setTransform(1328.7,1255.7,1,1,0,0,0,49.5,50);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_220 = new lib.woodencrate_dot_png();
	this.instance_220.setTransform(796.5,1629.7,0.936,0.936,0.9,0,0,234.1,98);

	this.instance_221 = new lib.woodencrate_dot_png();
	this.instance_221.setTransform(914.3,1498.3,0.775,0.775,91.2,0,0,234.2,98);

	this.instance_222 = new lib.woodenbox_dot_png();
	this.instance_222.setTransform(733.2,1499.4,1.069,1.069,-1.8,0,0,114.5,84.5);

	this.instance_223 = new lib.woodenbox_dot_png();
	this.instance_223.setTransform(542.1,1457.7,1.069,1.069,-1.8,0,0,114.5,84.5);

	this.instance_224 = new lib.woodenbox_dot_png();
	this.instance_224.setTransform(703.3,1332.4,0.806,0.806,94,0,0,114.5,84.5);

	this.instance_225 = new lib.woodenbox_dot_png();
	this.instance_225.setTransform(819.6,1379,0.806,0.806,94,0,0,114.5,84.5);

	this.instance_226 = new lib.woodencrate_dot_png();
	this.instance_226.setTransform(981.1,1592.2,0.936,0.936,0.9,0,0,234.1,98);

	this.instance_227 = new lib.woodencrate_dot_png();
	this.instance_227.setTransform(986,1666.9,0.936,0.936,0.9,0,0,234.1,98);

	this.instance_228 = new lib.water_hyphen_bottom_dot_png();
	this.instance_228.setTransform(1238.4,1669.4,1,1,0,0,0,49.5,49.5);

	this.instance_229 = new lib.water_hyphen_middle_dot_png();
	this.instance_229.setTransform(1238.4,1587.1,1,1,0,0,0,49.5,49.5);

	this.instance_230 = new lib.woodenbox_dot_png();
	this.instance_230.setTransform(235.1,1393.5,1.069,1.069,-177.6,0,0,114.5,84.5);

	this.instance_231 = new lib.woodenbox_dot_png();
	this.instance_231.setTransform(440,1439,1.445,1.445,173.7,0,0,114.5,84.3);

	this.instance_232 = new lib.woodencrate_dot_png();
	this.instance_232.setTransform(194.7,1207.9,0.885,0.885,91.2,0,0,234.1,98);

	this.instance_233 = new lib.woodencrate_dot_png();
	this.instance_233.setTransform(331,1288.1,0.885,0.885,85,0,0,234.2,98);

	this.instance_234 = new lib.woodenbox_dot_png();
	this.instance_234.setTransform(530.9,1301.2,1.182,1.182,-1.8,0,0,114.5,84.4);

	this.instance_235 = new lib.metalbox_dot_png();
	this.instance_235.setTransform(959.7,1474.5,0.736,0.736,0,0,0,341.4,61.5);

	this.instance_236 = new lib.water_hyphen_middle_dot_png();
	this.instance_236.setTransform(1238.4,1522,1,1,0,0,0,49.5,49.5);

	this.instance_237 = new lib.metalbox_dot_png();
	this.instance_237.setTransform(950.2,1402,0.736,0.736,3.9,0,0,341.5,61.5);

	this.instance_238 = new lib.water_hyphen_middle_dot_png();
	this.instance_238.setTransform(1238.4,1439.5,1,1,0,0,0,49.5,49.5);

	this.instance_239 = new lib.woodenbox_dot_png();
	this.instance_239.setTransform(1027.7,1294.6,0.767,0.767,88.5,0,0,114.5,84.5);

	this.instance_240 = new lib.woodenbox_dot_png();
	this.instance_240.setTransform(1132.9,1324.3,0.767,0.767,94.2,0,0,114.5,84.5);

	this.instance_241 = new lib.water_hyphen_middle_dot_png();
	this.instance_241.setTransform(1238.4,1351.9,1,1,0,0,0,49.5,49.5);

	this.instance_242 = new lib.metalbar_dot_png();
	this.instance_242.setTransform(813.7,1305.4,0.861,0.861,0,0,0,245,27);

	this.instance_243 = new lib.metalbar_dot_png();
	this.instance_243.setTransform(805.9,1275.3,0.861,0.861,-2.7,0,0,245.1,27);

	this.instance_244 = new lib.metalbar_dot_png();
	this.instance_244.setTransform(779.5,1250,0.466,0.466,-2.7,0,0,245,27.1);

	this.instance_245 = new lib.metalbar_dot_png();
	this.instance_245.setTransform(902.6,1240.6,0.466,0.466,-1.5,0,0,245.1,27.2);

	this.instance_246 = new lib.woodencrate_dot_png();
	this.instance_246.setTransform(603.5,1242,0.936,0.936,0.9,0,0,234.1,98);

	this.instance_247 = new lib.woodencrate_dot_png();
	this.instance_247.setTransform(984.4,1235.4,0.936,0.936,0.9,0,0,234.1,98);

	this.instance_248 = new lib.water_hyphen_top_dot_png();
	this.instance_248.setTransform(1238.4,1255.7,1,1,0,0,0,49.5,50);

	this.instance_249 = new lib.woodenbox_dot_png();
	this.instance_249.setTransform(1073,1087.6,1.069,1.069,-1.8,0,0,114.5,84.5);

	this.instance_250 = new lib.woodenbox_dot_png();
	this.instance_250.setTransform(868.5,1097.2,0.929,0.929,0.2,0,0,114.5,84.5);

	this.instance_251 = new lib.woodenbox_dot_png();
	this.instance_251.setTransform(701,1079.2,0.831,0.831,91.4,0,0,114.5,84.5);

	this.instance_252 = new lib.woodenbox_dot_png();
	this.instance_252.setTransform(585.3,1073.2,0.929,0.929,87.9,0,0,114.5,84.5);

	this.instance_253 = new lib.woodenbox_dot_png();
	this.instance_253.setTransform(433,1114.3,0.929,0.929,-3.6,0,0,114.5,84.5);

	this.instance_254 = new lib.woodenbox_dot_png();
	this.instance_254.setTransform(225.4,1059.1,1.025,1.025,4.6,0,0,114.4,84.5);

	this.instance_255 = new lib.metalbox_dot_png();
	this.instance_255.setTransform(335.3,1011.3,0.736,0.736,-4,0,0,341.5,61.4);

	this.instance_256 = new lib.metalbox_dot_png();
	this.instance_256.setTransform(296.2,941.3,0.736,0.736,-4,0,0,341.5,61.4);

	this.instance_257 = new lib.woodenbox_dot_png();
	this.instance_257.setTransform(809.4,969.6,0.93,0.93,-179.8,0,0,114.5,84.4);

	this.instance_258 = new lib.woodenbox_dot_png();
	this.instance_258.setTransform(987.5,967.2,0.808,0.808,-177.8,0,0,114.5,84.5);

	this.instance_259 = new lib.woodenbox_dot_png();
	this.instance_259.setTransform(1132.5,987.9,0.723,0.723,-86.6,0,0,114.5,84.6);

	this.instance_260 = new lib.woodencrate_dot_png();
	this.instance_260.setTransform(661.9,1014.6,0.775,0.775,91.2,0,0,234.2,98);

	this.instance_261 = new lib.woodencrate_dot_png();
	this.instance_261.setTransform(554.4,1022.3,0.775,0.775,78.8,0,0,234.1,98);

	this.instance_262 = new lib.metalbar_dot_png();
	this.instance_262.setTransform(967,896.4,0.995,0.995,0.5,0,0,245,27.1);

	this.instance_263 = new lib.metalbar_dot_png();
	this.instance_263.setTransform(950.6,872.2,0.995,0.995,-1,0,0,245.1,27.1);

	this.instance_264 = new lib.woodenbox_dot_png();
	this.instance_264.setTransform(210.1,884.8,0.93,0.93,-175.9,0,0,114.5,84.4);

	this.instance_265 = new lib.woodenbox_dot_png();
	this.instance_265.setTransform(366.7,874.2,0.574,0.574,177.7,0,0,114.5,84.5);

	this.instance_266 = new lib.woodenbox_dot_png();
	this.instance_266.setTransform(471.1,844.4,0.574,0.574,177.7,0,0,114.5,84.5);

	this.instance_267 = new lib.woodencrate_dot_png();
	this.instance_267.setTransform(626.7,826.9,0.456,0.456,-178.1,0,0,234.1,97.8);

	this.instance_268 = new lib.woodenbox_dot_png();
	this.instance_268.setTransform(1071.3,789.5,1.025,1.025,5.6,0,0,114.5,84.5);

	this.instance_269 = new lib.woodenbox_dot_png();
	this.instance_269.setTransform(899.4,796.5,1.025,1.025,0.2,0,0,114.5,84.4);

	this.instance_270 = new lib.woodenbox_dot_png();
	this.instance_270.setTransform(733.1,799.1,0.719,0.719,91.9,0,0,114.4,84.3);

	this.instance_271 = new lib.woodencrate_dot_png();
	this.instance_271.setTransform(267.3,781.1,0.701,0.701,176.7,0,0,234.2,98.1);

	this.instance_272 = new lib.metalbox_dot_png();
	this.instance_272.setTransform(495.2,763.5,0.777,0.777,-1.3,0,0,341.4,61.5);

	this.instance_273 = new lib.woodenbox_dot_png();
	this.instance_273.setTransform(317.7,769.1,0.929,0.929,-88.8,0,0,114.5,84.5);

	this.instance_274 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_274.setTransform(270.5,640.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_275 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_275.setTransform(216.1,640.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_276 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_276.setTransform(4797.7,1481.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_277 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_277.setTransform(4582.7,1668.8,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_278 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_278.setTransform(4756.8,1626.2,0.562,0.562,0,0,0,200.2,200.1);

	this.instance_279 = new lib.dirt2_dot_png();
	this.instance_279.setTransform(3615.9,1216.1,1,1,0,0,0,118.5,52.5);

	this.instance_280 = new lib.leaves1_dot_png();
	this.instance_280.setTransform(4664.1,1465.6,0.873,0.873,0,0,0,18.5,15);

	this.instance_281 = new lib.moss_dot_png();
	this.instance_281.setTransform(4533.3,1514.9,0.652,0.652,-132.9,0,0,40.5,27.4);

	this.instance_282 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_282.setTransform(3514.5,-202.4,1,1,0,0,0,7,74);

	this.instance_283 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_283.setTransform(3514.5,-59.9,1,1,0,0,0,7,74);

	this.instance_284 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_284.setTransform(3514.5,80.2,1,1,0,0,0,7,74);

	this.instance_285 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_285.setTransform(3514.5,224.6,1,1,0,0,0,7,74);

	this.instance_286 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_286.setTransform(3514.5,367.6,1,1,0,0,0,7,74);

	this.instance_287 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_287.setTransform(3514.5,507.2,1,1,0,0,0,7,74);

	this.instance_288 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_288.setTransform(3514.5,650.2,1,1,0,0,0,7,74);

	this.instance_289 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_289.setTransform(2586.5,-209.9,1,1,0,0,0,7,74);

	this.instance_290 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_290.setTransform(2586.5,-67.4,1,1,0,0,0,7,74);

	this.instance_291 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_291.setTransform(2586.5,72.7,1,1,0,0,0,7,74);

	this.instance_292 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_292.setTransform(2586.5,217.1,1,1,0,0,0,7,74);

	this.instance_293 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_293.setTransform(2586.5,360.1,1,1,0,0,0,7,74);

	this.instance_294 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_294.setTransform(2586.5,499.7,1,1,0,0,0,7,74);

	this.instance_295 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_295.setTransform(2586.5,642.7,1,1,0,0,0,7,74);

	this.instance_296 = new lib.hazardsign_dot_png();
	this.instance_296.setTransform(2043.8,1167,0.647,0.647,0,0,0,51,46);

	this.instance_297 = new lib.endpole_dot_png();
	this.instance_297.setTransform(2045.5,1212.8,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_298 = new lib.hazardsign_dot_png();
	this.instance_298.setTransform(2417,1159.3,0.647,0.647,0,0,0,51,46);

	this.instance_299 = new lib.endpole_dot_png();
	this.instance_299.setTransform(2418.7,1205.1,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_300 = new lib.hazardsign_dot_png();
	this.instance_300.setTransform(3061.8,1155.4,0.647,0.647,0,0,0,51,46);

	this.instance_301 = new lib.endpole_dot_png();
	this.instance_301.setTransform(3063.5,1201.2,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_302 = new lib.hazardsign_dot_png();
	this.instance_302.setTransform(1434.2,1153.4,0.647,0.647,0,0,0,51,46);

	this.instance_303 = new lib.endpole_dot_png();
	this.instance_303.setTransform(1435.9,1199.2,0.705,0.705,0,0,0,8.1,39.5);

	this.addChild(this.instance_303,this.instance_302,this.instance_301,this.instance_300,this.instance_299,this.instance_298,this.instance_297,this.instance_296,this.instance_295,this.instance_294,this.instance_293,this.instance_292,this.instance_291,this.instance_290,this.instance_289,this.instance_288,this.instance_287,this.instance_286,this.instance_285,this.instance_284,this.instance_283,this.instance_282,this.instance_281,this.instance_280,this.instance_279,this.instance_278,this.instance_277,this.instance_276,this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.isDisp,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.gate1,this.gate2,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.gate3,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-301.2,5082.9,2082.4);


(lib.level12PixiBG = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(4621.9,2701.6,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.endflag_dot_png();
	this.instance_1.setTransform(4649,2468,1,1,0,0,0,49,56);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(4621.5,2555.2,1,1,0,0,0,8,39.5);

	this.instance_3 = new lib.endpole_dot_png();
	this.instance_3.setTransform(4621.8,2623,1,1,0,0,0,8,39.5);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(4622,2779.9,1,1,0,0,0,8,39.5);

	this.instance_5 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_5.setTransform(2691.1,1497.4,1,1,0,0,0,14,211);

	this.instance_6 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_6.setTransform(2691.1,1909.9,1,1,0,0,0,14,211);

	this.instance_7 = new lib.crane_swith_only_dot_png();
	this.instance_7.setTransform(3064.6,2593.1,1,1,0,0,0,38.5,69.5);

	this.instance_8 = new lib.crane_swith_only_dot_png();
	this.instance_8.setTransform(2877.2,2593.1,1,1,0,0,0,38.5,69.5);

	this.instance_9 = new lib.crane_swith_only_dot_png();
	this.instance_9.setTransform(2691.7,2593.1,1,1,0,0,0,38.5,69.5);

	this.instance_10 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_10.setTransform(2691.1,2320.9,1,1,0,0,0,14,211);

	this.instance_11 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_11.setTransform(2876.6,1502.4,1,1,0,0,0,14,211);

	this.instance_12 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_12.setTransform(2876.6,1914.9,1,1,0,0,0,14,211);

	this.instance_13 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_13.setTransform(2876.6,2325.9,1,1,0,0,0,14,211);

	this.instance_14 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_14.setTransform(3063.5,1502.4,1,1,0,0,0,14,211);

	this.instance_15 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_15.setTransform(3063.5,1914.9,1,1,0,0,0,14,211);

	this.instance_16 = new lib.crane_hyphen_switch_hyphen_wire_dot_png();
	this.instance_16.setTransform(3063.5,2325.9,1,1,0,0,0,14,211);

	// Layer 1
	this.isDispBG = new lib.physHold();
	this.isDispBG.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.addChild(this.isDispBG,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-0.5,4818.6,3270.3);


(lib.level12movingitemcopy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chain_hyphen_repeat_dot_png();
	this.instance.setTransform(0.8,-1587.7,1,1,0,0,0,7,74);

	this.instance_1 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_1.setTransform(1.2,-1440.4,1,1,0,0,0,7,74);

	this.instance_2 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_2.setTransform(0.8,-1293.2,1,1,0,0,0,7,74);

	this.instance_3 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_3.setTransform(1.2,-1145.9,1,1,0,0,0,7,74);

	this.instance_4 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_4.setTransform(1.2,-999.6,1,1,0,0,0,7,74);

	this.instance_5 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_5.setTransform(1.5,-852.3,1,1,0,0,0,7,74);

	this.instance_6 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_6.setTransform(0.8,-704.8,1,1,0,0,0,7,74);

	this.instance_7 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_7.setTransform(1.2,-557.5,1,1,0,0,0,7,74);

	this.instance_8 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_8.setTransform(1.2,-411.2,1,1,0,0,0,7,74);

	this.instance_9 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_9.setTransform(1.5,-263.9,1,1,0,0,0,7,74);

	this.isMovingItem = new lib.woodenbox_dot_png();
	this.isMovingItem.setTransform(0,0,1.092,0.849,0,0,0,114.5,84.5);

	this.instance_10 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_10.setTransform(-37.7,-128.4,1,1,32,0,0,7,74);

	this.instance_11 = new lib.chain_hyphen_repeat_dot_png();
	this.instance_11.setTransform(39.3,-127.3,1,1,150,0,0,7,74);

	this.addChild(this.instance_11,this.instance_10,this.isMovingItem,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.1,-1661.7,250.2,1733.5);


(lib.keef12platform1 = function() {
	this.initialize();

	// Layer 1
	this.isMovingPlatform = new lib.blankMarker();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape,this.isMovingPlatform);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


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


(lib.item4Switch_switch = function(mode,startPosition,loop) {
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


(lib.thickPivotPlanks = function() {
	this.initialize();

	// isPin
	this.isPin = new lib.blankMarker();
	this.isPin.setTransform(0,0,0.52,0.52);

	// fixture
	this.instance = new lib.fixture();
	this.instance.setTransform(0,0,0.22,3.6,90);

	// isComplexShape
	this.isWaterWheel = new lib.blankMarker();
	this.isWaterWheel.setTransform(-42.3,0.2,0.52,0.52);

	this.addChild(this.isWaterWheel,this.instance,this.isPin);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-180,-11,360,22);


(lib.level20Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance.setTransform(540.1,-62.8,1,1,0,0,0,98.5,41);

	this.instance_1 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_1.setTransform(880.7,-64.8,1,1,0,0,0,98.5,41);

	this.instance_2 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_2.setTransform(996.5,773.9,1.03,1,0,90,-90,34.5,40);

	this.instance_3 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_3.setTransform(995.3,1083,1,1,90,0,0,98.5,41);

	this.instance_4 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_4.setTransform(995.3,889.8,1,1,90,0,0,98.5,41);

	this.instance_5 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_5.setTransform(994.3,1204.3,1,1,90,0,0,34.5,40);

	this.instance_6 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_6.setTransform(1323.2,1246.9,1.03,1,0,0,180,34.5,40);

	this.instance_7 = new lib.woodencrate_dot_png();
	this.instance_7.setTransform(1430.3,1308.8,0.548,0.548,176.1,0,0,234,97.9);

	this.instance_8 = new lib.water_hyphen_top_dot_png();
	this.instance_8.setTransform(1296,1256.4,1,1,0,0,0,49.5,50);

	this.instance_9 = new lib.woodencrate_dot_png();
	this.instance_9.setTransform(1155.4,1742.4,0.806,0.806,100,0,0,234,97.8);

	this.instance_10 = new lib.woodenbox_dot_png();
	this.instance_10.setTransform(822.4,1578.1,1.835,1.835,-178.2,0,0,114.4,84.5);

	this.instance_11 = new lib.woodenbox_dot_png();
	this.instance_11.setTransform(1000.2,1760.3,1.444,1.444,-88.6,0,0,114.5,84.5);

	this.instance_12 = new lib.woodenbox_dot_png();
	this.instance_12.setTransform(1332.6,1764.6,1.444,1.444,-88.6,0,0,114.5,84.5);

	this.instance_13 = new lib.woodencrate_dot_png();
	this.instance_13.setTransform(1210.6,1646.2,1,1,-1.2,0,0,234,98);

	this.instance_14 = new lib.woodencrate_dot_png();
	this.instance_14.setTransform(1535.8,1606.2,1,1,-1.2,0,0,234,98);

	this.instance_15 = new lib.woodenbox_dot_png();
	this.instance_15.setTransform(482.9,1406.2,1.323,1.323,-0.9,0,0,114.2,84.5);

	this.instance_16 = new lib.woodencrate_dot_png();
	this.instance_16.setTransform(418.5,1264.2,1,1,177.8,0,0,234.1,98);

	this.instance_17 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_17.setTransform(808.1,1434,1,1,0,0,0,200,200);

	this.instance_18 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_18.setTransform(1003.3,-63.8,1,1,0,0,0,34.5,40);

	this.instance_19 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_19.setTransform(994.4,-19.6,1,1,0,0,0,34.5,40);

	this.instance_20 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_20.setTransform(880.1,-19.3,1,1,0,0,0,98.5,41);

	this.instance_21 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_21.setTransform(1174.6,207.6,0.972,1.51,0,0,0,157,10.8);

	this.instance_22 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_22.setTransform(1335.3,204.4,0.972,1.51,0,0,0,157,10.8);

	this.instance_23 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_23.setTransform(1444.5,133.7,1,1.295,0,0,0,52.5,110.4);

	this.instance_24 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_24.setTransform(1257.1,240.1,1,0.833,0,0,0,155.5,45);

	this.instance_25 = new lib.water_hyphen_top_dot_png();
	this.instance_25.setTransform(1267.1,210.7,1,1,0,0,0,49.5,50);

	this.instance_26 = new lib.hazardsign_dot_png();
	this.instance_26.setTransform(1228.8,118.3,0.558,0.558,0,0,0,51,46.1);

	this.instance_27 = new lib.endpole_dot_png();
	this.instance_27.setTransform(1230.3,157.8,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_28 = new lib.water_hyphen_top_dot_png();
	this.instance_28.setTransform(1176.1,210.7,1,1,0,0,0,49.5,50);

	this.instance_29 = new lib.water_hyphen_top_dot_png();
	this.instance_29.setTransform(1357.8,210.7,1,1,0,0,0,49.5,50);

	this.instance_30 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_30.setTransform(1444.5,-0.3,1,1.154,0,0,0,52.5,110.4);

	this.instance_31 = new lib.wall_hyphen_left_dot_png();
	this.instance_31.setTransform(1478.4,528.2,1,1,0,0,0,70.5,45);

	this.instance_32 = new lib.wall_hyphen_left_dot_png();
	this.instance_32.setTransform(1477.8,510.3,1,1,0,0,0,70.5,45);

	this.instance_33 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_33.setTransform(2247.5,486.9,0.972,1.51,0,0,0,157,10.8);

	this.instance_34 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_34.setTransform(2408.2,483.7,0.972,1.51,0,0,0,157,10.8);

	this.instance_35 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_35.setTransform(2060.4,473.9,0.899,1.327,0,0,0,50.5,20.9);

	this.instance_36 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_36.setTransform(1580.8,451.4,0.972,1.51,0,0,0,156.9,10.8);

	this.instance_37 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_37.setTransform(1866.8,457.4,0.972,1.51,0,0,0,157,10.8);

	this.instance_38 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_38.setTransform(1584.5,530,1,1,0,0,0,155.5,45);

	this.instance_39 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_39.setTransform(1724.5,526.9,1,1,0,0,0,155.5,45);

	this.instance_40 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_40.setTransform(2030,526.9,1,1,0,0,0,155.5,45);

	this.instance_41 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_41.setTransform(2330,526.9,1,1,0,0,0,155.5,45);

	this.instance_42 = new lib.water_hyphen_top_dot_png();
	this.instance_42.setTransform(2340,502.6,1,1,0,0,0,49.5,50);

	this.instance_43 = new lib.water_hyphen_top_dot_png();
	this.instance_43.setTransform(2249,502.4,1,1,0,0,0,49.5,50);

	this.instance_44 = new lib.water_hyphen_top_dot_png();
	this.instance_44.setTransform(2136.2,502.6,1.337,1,0,0,0,49.5,50);

	this.instance_45 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_45.setTransform(2520,-600,1,1,0,0,0,52.5,110.5);

	this.instance_46 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_46.setTransform(2520,-470,1,1,0,0,0,52.5,110.5);

	this.instance_47 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_47.setTransform(2520,-290,1,1,0,0,0,52.5,110.5);

	this.instance_48 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_48.setTransform(2520,-100,1,1,0,0,0,52.5,110.5);

	this.instance_49 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_49.setTransform(2480,140,1,1,-90,0,0,98.5,41);

	this.instance_50 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_50.setTransform(2480,260,1,1,-90,0,0,98.5,41);

	this.instance_51 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_51.setTransform(2520,90,1,1,0,0,0,52.5,110.5);

	this.instance_52 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_52.setTransform(2520,270,1,1,0,0,0,52.5,110.5);

	this.instance_53 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_53.setTransform(2520,460,1,1,0,0,0,52.5,110.5);

	this.instance_54 = new lib.water_hyphen_top_dot_png();
	this.instance_54.setTransform(2430.7,502.6,1,1,0,0,0,49.5,50);

	this.instance_55 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_55.setTransform(1429.2,-105,1,1,0,0,0,38,40);

	this.instance_56 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_56.setTransform(2150,-110,1,1,0,0,0,98.5,41);

	this.instance_57 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_57.setTransform(2030,-110,1,1,0,0,0,98.5,41);

	this.instance_58 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_58.setTransform(1870,-110,1,1,0,0,0,98.5,41);

	this.instance_59 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_59.setTransform(1701.9,-108,1,1,0,0,0,98.5,41);

	this.instance_60 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_60.setTransform(1525.4,-106,1,1,0,0,0,98.5,41);

	this.instance_61 = new lib.woodenbox_dot_png();
	this.instance_61.setTransform(3552.4,740.2,0.677,0.677,85.4,0,0,109.2,98.7);

	this.instance_62 = new lib.woodenbox_dot_png();
	this.instance_62.setTransform(3566.9,894.9,0.677,0.677,94.4,0,0,114.2,84.5);

	this.instance_63 = new lib.metalbar_dot_png();
	this.instance_63.setTransform(3473.3,1043,0.678,0.937,-0.2,0,0,245,26.9);

	this.instance_64 = new lib.metalbar_dot_png();
	this.instance_64.setTransform(3473.3,996.1,0.678,0.937,-0.2,0,0,245,26.9);

	this.instance_65 = new lib.leaves2_dot_png();
	this.instance_65.setTransform(7549.5,843.9,1,1,0,0,0,22,20);

	this.instance_66 = new lib.moss_dot_png();
	this.instance_66.setTransform(7442.9,1583.4,1,1,0,0,0,40.5,27.5);

	this.instance_67 = new lib.leaves2_dot_png();
	this.instance_67.setTransform(4901.5,854.3,1,1,-173.5,0,0,22,20);

	this.instance_68 = new lib.leaves2_dot_png();
	this.instance_68.setTransform(397.8,42.5,1,1,0,0,0,22,20);

	this.instance_69 = new lib.leaves1_dot_png();
	this.instance_69.setTransform(412.7,1118.1,1,1,0,0,0,18.5,15);

	this.instance_70 = new lib.leaves1_dot_png();
	this.instance_70.setTransform(2371.3,-617.8,1,1,0,0,0,18.5,15);

	this.instance_71 = new lib.leaves2_dot_png();
	this.instance_71.setTransform(1831,-252.6,1,1,0,0,0,22,20);

	this.instance_72 = new lib.moss_dot_png();
	this.instance_72.setTransform(836.4,745.2,1,1,0,0,0,40.5,27.5);

	this.instance_73 = new lib.dirt4_dot_png();
	this.instance_73.setTransform(487.8,955.5,1,1,0,0,0,121.5,40);

	this.instance_74 = new lib.dirt4_dot_png();
	this.instance_74.setTransform(480.3,877.9,1,1,0,0,0,121.5,40);

	this.instance_75 = new lib.dirt4_dot_png();
	this.instance_75.setTransform(617.9,930.4,1,1,0,0,0,121.5,40);

	this.instance_76 = new lib.dirt4_dot_png();
	this.instance_76.setTransform(620.4,830.4,1,1,0,0,0,121.5,40);

	this.instance_77 = new lib.dirt4_dot_png();
	this.instance_77.setTransform(650.4,900.4,1,1,0,0,0,121.5,40);

	this.instance_78 = new lib.dirt4_dot_png();
	this.instance_78.setTransform(707.9,958,1,1,0,0,0,121.5,40);

	this.instance_79 = new lib.dirt4_dot_png();
	this.instance_79.setTransform(667.9,1030.5,1,1,0,0,0,121.5,40);

	this.instance_80 = new lib.dirt4_dot_png();
	this.instance_80.setTransform(577.8,948,1,1,0,0,0,121.5,40);

	this.instance_81 = new lib.dirt4_dot_png();
	this.instance_81.setTransform(575.3,1063,1,1,0,0,0,121.5,40);

	this.instance_82 = new lib.dirt4_dot_png();
	this.instance_82.setTransform(575.3,1023,1,1,0,0,0,121.5,40);

	this.instance_83 = new lib.dirt4_dot_png();
	this.instance_83.setTransform(680.4,1023,1,1,0,0,0,121.5,40);

	this.instance_84 = new lib.dirt4_dot_png();
	this.instance_84.setTransform(612.9,1033.1,1,1,0,0,0,121.5,40);

	this.instance_85 = new lib.dirt4_dot_png();
	this.instance_85.setTransform(605.4,1108.1,1,1,0,0,0,121.5,40);

	this.instance_86 = new lib.dirt4_dot_png();
	this.instance_86.setTransform(602.9,1040.6,1,1,0,0,0,121.5,40);

	this.instance_87 = new lib.dirt1_dot_png();
	this.instance_87.setTransform(908,145.1,1,1,0,0,0,55,87);

	this.instance_88 = new lib.dirt3_dot_png();
	this.instance_88.setTransform(137.6,740.5,1,1,0,0,0,55,88);

	this.instance_89 = new lib.dirt3_dot_png();
	this.instance_89.setTransform(1963.6,-630.3,1,1,0,0,0,55,88);

	this.instance_90 = new lib.dirt4_dot_png();
	this.instance_90.setTransform(2023.8,-135.1,1,1,0,0,0,121.5,37.5);

	this.instance_91 = new lib.dirt4_dot_png();
	this.instance_91.setTransform(2108.8,-117.6,1,1,0,0,0,121.5,37.5);

	this.instance_92 = new lib.dirt4_dot_png();
	this.instance_92.setTransform(2211.3,-102.6,1,1,0,0,0,121.5,37.5);

	this.instance_93 = new lib.dirt4_dot_png();
	this.instance_93.setTransform(6431.1,1718.5,1,1,0,0,0,121.5,37.5);

	this.instance_94 = new lib.dirt4_dot_png();
	this.instance_94.setTransform(6381,1773.5,1,1,0,0,0,121.5,37.5);

	this.instance_95 = new lib.dirt4_dot_png();
	this.instance_95.setTransform(6331,1741,1,1,0,0,0,121.5,37.5);

	this.instance_96 = new lib.dirt4_dot_png();
	this.instance_96.setTransform(6241,1736,1,1,0,0,0,121.5,37.5);

	this.instance_97 = new lib.dirt4_dot_png();
	this.instance_97.setTransform(6168.4,1796,1,1,0,0,0,121.5,37.5);

	this.instance_98 = new lib.dirt4_dot_png();
	this.instance_98.setTransform(6158.4,1728.5,1,1,0,0,0,121.5,37.5);

	this.instance_99 = new lib.dirt4_dot_png();
	this.instance_99.setTransform(6140.9,1798.5,1,1,0,0,0,121.5,37.5);

	this.instance_100 = new lib.dirt4_dot_png();
	this.instance_100.setTransform(7629.2,973.1,1,1,0,0,0,121.5,37.5);

	this.instance_101 = new lib.dirt4_dot_png();
	this.instance_101.setTransform(7749.3,948.1,1,1,0,0,0,121.5,37.5);

	this.instance_102 = new lib.dirt4_dot_png();
	this.instance_102.setTransform(7701.8,1018.1,1,1,0,0,0,121.5,37.5);

	this.instance_103 = new lib.dirt4_dot_png();
	this.instance_103.setTransform(7664.2,950.6,1,1,0,0,0,121.5,37.5);

	this.instance_104 = new lib.dirt4_dot_png();
	this.instance_104.setTransform(7654.2,1000.6,1,1,0,0,0,121.5,37.5);

	this.instance_105 = new lib.dirt4_dot_png();
	this.instance_105.setTransform(7626.7,933.1,1,1,0,0,0,121.5,37.5);

	this.instance_106 = new lib.dirt1_dot_png();
	this.instance_106.setTransform(4620.1,1035.6,1.201,1.201,0,0,0,55,87);

	this.instance_107 = new lib.dirt1_dot_png();
	this.instance_107.setTransform(4670.1,1125.7,1.201,1.201,0,0,0,55,87);

	this.instance_108 = new lib.dirt1_dot_png();
	this.instance_108.setTransform(4635.1,1135.7,1.201,1.201,0,0,0,55,87);

	this.instance_109 = new lib.dirt3_dot_png();
	this.instance_109.setTransform(4897.7,1398.3,1.204,1.204,-136.3,0,0,55,88);

	this.instance_110 = new lib.dirt1_dot_png();
	this.instance_110.setTransform(5685.7,1853.5,1.317,1.317,-82.7,0,0,55,87);

	this.instance_111 = new lib.dirt2_dot_png();
	this.instance_111.setTransform(7321.5,1788.5,1,1,0,0,0,118.5,52.5);

	this.instance_112 = new lib.dirt4_dot_png();
	this.instance_112.setTransform(7799.3,1202,1,1,0,0,0,121.5,37.5);

	this.instance_113 = new lib.dirt4_dot_png();
	this.instance_113.setTransform(7796.8,1278.3,1,1,0,0,0,121.5,37.5);

	this.instance_114 = new lib.dirt4_dot_png();
	this.instance_114.setTransform(7841.8,1222,1,1,0,0,0,121.5,37.5);

	this.instance_115 = new lib.dirt4_dot_png();
	this.instance_115.setTransform(7848.1,1278.3,1,1,0,0,0,121.5,37.5);

	this.instance_116 = new lib.dirt4_dot_png();
	this.instance_116.setTransform(7806.8,1430.8,1,1,0,0,0,121.5,37.5);

	this.instance_117 = new lib.dirt4_dot_png();
	this.instance_117.setTransform(7799.3,1357,1,1,0,0,0,121.5,37.5);

	this.instance_118 = new lib.dirt4_dot_png();
	this.instance_118.setTransform(7780.5,1438.3,1,1,0,0,0,121.5,37.5);

	this.instance_119 = new lib.dirt4_dot_png();
	this.instance_119.setTransform(7770.5,1354.5,1,1,0,0,0,121.5,37.5);

	this.instance_120 = new lib.dirt4_dot_png();
	this.instance_120.setTransform(7649.3,1355.8,1,1,0,0,0,121.5,37.5);

	this.instance_121 = new lib.dirt4_dot_png();
	this.instance_121.setTransform(7760.5,1404.5,1,1,0,0,0,121.5,37.5);

	this.instance_122 = new lib.dirt4_dot_png();
	this.instance_122.setTransform(7765.5,1315.8,1,1,0,0,0,121.5,37.5);

	this.instance_123 = new lib.dirt4_dot_png();
	this.instance_123.setTransform(7769.3,1370.8,1,1,0,0,0,121.5,37.5);

	this.instance_124 = new lib.metalbar_dot_png();
	this.instance_124.setTransform(5348.1,1126.1,0.792,1.166,90,0,0,245,27.1);

	this.instance_125 = new lib.metalbar_dot_png();
	this.instance_125.setTransform(5979.8,809.4,1.11,1.11,90,0,0,245,27);

	this.instance_126 = new lib.metalbar_dot_png();
	this.instance_126.setTransform(5870.7,1312.6,1.11,1.11,0,0,0,245,27);

	this.instance_127 = new lib.woodenbox_dot_png();
	this.instance_127.setTransform(2444.2,1507,0.38,0.415,87,0,0,114.3,84.3);

	this.instance_128 = new lib.woodenbox_dot_png();
	this.instance_128.setTransform(2607,1650.2,0.919,0.837,0,-95.5,-93.8,114.3,84.5);

	this.instance_129 = new lib.woodenbox_dot_png();
	this.instance_129.setTransform(2479,1648.5,0.919,0.836,0,-88.7,-89.1,114.3,84.5);

	this.instance_130 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_130.setTransform(7204.3,1792.9,1,1,0,0,0,200,200);

	this.instance_131 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_131.setTransform(6818.4,1792.9,1,1,0,0,0,200,200);

	this.instance_132 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_132.setTransform(6424.5,1792.9,1,1,0,0,0,200,200);

	this.instance_133 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_133.setTransform(6035.5,1792.9,1,1,0,0,0,200,200);

	this.instance_134 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_134.setTransform(5650.6,1792.9,1,1,0,0,0,200,200);

	this.instance_135 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_135.setTransform(5262.6,1792.9,1,1,0,0,0,200,200);

	this.instance_136 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_136.setTransform(7638.9,1752.4,1,1,0,0,0,200,200);

	this.instance_137 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_137.setTransform(7805.9,1743.1,1,1,0,0,0,200,200);

	this.instance_138 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_138.setTransform(7805.9,1398.4,1,1,0,0,0,200,200);

	this.instance_139 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_139.setTransform(7638.9,1398.4,1,1,0,0,0,200,200);

	this.instance_140 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_140.setTransform(7638.9,1047.7,1,1,0,0,0,200,200);

	this.instance_141 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_141.setTransform(7787.9,1046.4,1,1,0,0,0,200,200);

	this.instance_142 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_142.setTransform(4575.7,1534.3,1,1.05,0,0,0,200,200);

	this.instance_143 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_143.setTransform(3610.9,1555,1,1,0,0,0,26,70);

	this.instance_144 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_144.setTransform(3610.9,1678.1,1,1,0,0,0,26,70);

	this.instance_145 = new lib.water_hyphen_bottom_dot_png();
	this.instance_145.setTransform(3839.6,1665.6,1.285,1.428,0,0,0,49.5,49.4);

	this.instance_146 = new lib.water_hyphen_bottom_dot_png();
	this.instance_146.setTransform(3797.3,1665.6,1.285,1.428,0,0,0,49.5,49.4);

	this.instance_147 = new lib.water_hyphen_bottom_dot_png();
	this.instance_147.setTransform(3683.4,1665.7,1.171,1.428,0,0,0,49.5,49.5);

	this.instance_148 = new lib.water_hyphen_bottom_dot_png();
	this.instance_148.setTransform(3945.9,1665.7,1.171,1.428,0,0,0,49.5,49.5);

	this.instance_149 = new lib.water_hyphen_bottom_dot_png();
	this.instance_149.setTransform(4211.4,1665.6,1.285,1.428,0,0,0,49.5,49.4);

	this.instance_150 = new lib.water_hyphen_bottom_dot_png();
	this.instance_150.setTransform(4169.1,1665.6,1.285,1.428,0,0,0,49.5,49.4);

	this.instance_151 = new lib.water_hyphen_bottom_dot_png();
	this.instance_151.setTransform(4055.2,1665.7,1.171,1.428,0,0,0,49.5,49.5);

	this.instance_152 = new lib.water_hyphen_bottom_dot_png();
	this.instance_152.setTransform(4321.4,1665.7,1.171,1.428,0,0,0,49.5,49.5);

	this.platform3 = new lib.level20movingpallette();
	this.platform3.setTransform(5436.8,1470.3);

	this.platform2 = new lib.level20movingpallette();
	this.platform2.setTransform(6470.8,1307.1,1,0.965);

	this.instance_153 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_153.setTransform(3619.4,1442.6,1,1,0,0,0,34.5,46.5);

	this.instance_154 = new lib.woodenbox_dot_png();
	this.instance_154.setTransform(2020,1730,0.689,0.689,-88.9,0,0,114.2,84.5);

	this.instance_155 = new lib.woodencrate_dot_png();
	this.instance_155.setTransform(1748.3,1614.9,0.806,0.806,100,0,0,234,97.8);

	this.instance_156 = new lib.woodencrate_dot_png();
	this.instance_156.setTransform(1638,1627.2,0.713,0.713,90.6,0,0,234,97.9);

	this.instance_157 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_157.setTransform(732.6,-62.8,1,1,0,0,0,98.5,41);

	this.instance_158 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_158.setTransform(716.8,-25.6,1,1,0,0,0,98.5,41);

	this.instance_159 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_159.setTransform(218.9,-63.8,1,1,0,0,0,38,40);

	this.instance_160 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_160.setTransform(348.8,-62.8,1,1,0,0,0,98.5,41);

	this.instance_161 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_161.setTransform(309.3,-36.3,1,1,0,0,0,98.5,41);

	this.instance_162 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_162.setTransform(315.2,601.6,1.056,1,0,0,0,200,200);

	this.instance_163 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_163.setTransform(3511.9,1555,1,1,0,0,0,98.5,70);

	this.instance_164 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_164.setTransform(3361,1554.3,1,1,0,0,0,98.5,70);

	this.instance_165 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_165.setTransform(3508.5,1440.3,1,1,0,0,0,98.5,47.5);

	this.instance_166 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_166.setTransform(3364.1,1440.3,1,1,0,0,0,98.5,47.5);

	this.instance_167 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_167.setTransform(3174.1,1440.3,1,1,0,0,0,98.5,47.5);

	this.instance_168 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_168.setTransform(3043.7,1440.3,1,1,0,0,0,38,47.5);

	this.instance_169 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_169.setTransform(3056.7,1554.3,1,1,0,0,0,25,70);

	this.instance_170 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_170.setTransform(3174.1,1554.3,1,1,0,0,0,98.5,70);

	this.instance_171 = new lib.woodenbox_dot_png();
	this.instance_171.setTransform(1885,1660.2,1.113,1.113,-91.4,0,0,114.2,84.5);

	this.instance_172 = new lib.woodenbox_dot_png();
	this.instance_172.setTransform(637.5,1627.8,1.444,1.444,-88.6,0,0,114.5,84.5);

	this.instance_173 = new lib.woodenbox_dot_png();
	this.instance_173.setTransform(368.8,1684.2,1.444,1.444,-3.5,0,0,114.5,84.5);

	this.instance_174 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_174.setTransform(4865.1,1534.3,1,1.05,0,0,0,200,200);

	this.instance_175 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_175.setTransform(4575.7,1414,1,1,0,0,0,200,200);

	this.instance_176 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_176.setTransform(4865.1,1414,1,1,0,0,0,200,200);

	this.instance_177 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_177.setTransform(4941.6,808.7,1.01,1,0,0,0,98.5,41);

	this.instance_178 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_178.setTransform(4706.7,808.7,1.01,1,0,0,0,98.5,41);

	this.instance_179 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_179.setTransform(4382.4,807.7,1.01,1,0,0,0,38,40);

	this.instance_180 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_180.setTransform(4516,808.7,1.01,1,0,0,0,98.5,41);

	this.instance_181 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_181.setTransform(4845.7,808.7,1.01,1,0,0,0,98.5,41);

	this.instance_182 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_182.setTransform(5056.9,807.7,1.01,1,0,0,0,34.5,40);

	this.instance_183 = new lib.platformhay_hyphen_left_dot_png();
	this.instance_183.setTransform(2423.4,935.1,1,1,0,0,0,38,40);

	this.instance_184 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_184.setTransform(2540.1,936.1,1,1,0,0,0,98.5,41);

	this.instance_185 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_185.setTransform(2644.9,937.1,1,1,0,0,0,34.5,40);

	this.instance_186 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_186.setTransform(1962.8,1247.3,1,1,0,0,0,98.5,41);

	this.instance_187 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_187.setTransform(1769.7,1247.3,1,1,0,0,0,98.5,41);

	this.instance_188 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_188.setTransform(2084.2,1248.3,1,1,0,0,0,34.5,40);

	this.instance_189 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_189.setTransform(1581.5,1245.3,1,1,0,0,0,98.5,41);

	this.instance_190 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_190.setTransform(1433.4,1247.3,1,1,0,0,0,98.5,41);

	this.instance_191 = new lib.water_hyphen_top_dot_png();
	this.instance_191.setTransform(4332.4,1644.4,1,1.219,0,0,0,49.5,50);

	this.instance_192 = new lib.water_hyphen_top_dot_png();
	this.instance_192.setTransform(4229.3,1644.4,1.139,1.219,0,0,0,49.5,50);

	this.instance_193 = new lib.water_hyphen_top_dot_png();
	this.instance_193.setTransform(4131.8,1644.4,1,1.219,0,0,0,49.5,50);

	this.instance_194 = new lib.water_hyphen_top_dot_png();
	this.instance_194.setTransform(4041.1,1644.4,1,1.219,0,0,0,49.5,50);

	this.instance_195 = new lib.water_hyphen_top_dot_png();
	this.instance_195.setTransform(3950.5,1644.4,1,1.219,0,0,0,49.5,50);

	this.instance_196 = new lib.water_hyphen_top_dot_png();
	this.instance_196.setTransform(3858.6,1644.4,1,1.219,0,0,0,49.5,50);

	this.instance_197 = new lib.water_hyphen_top_dot_png();
	this.instance_197.setTransform(3768,1644.4,1,1.219,0,0,0,49.5,50);

	this.instance_198 = new lib.water_hyphen_bottom_dot_png();
	this.instance_198.setTransform(2873.7,1679.1,1.285,1.631,0,0,0,49.5,49.5);

	this.instance_199 = new lib.water_hyphen_bottom_dot_png();
	this.instance_199.setTransform(2831.3,1679.1,1.285,1.631,0,0,0,49.5,49.5);

	this.instance_200 = new lib.water_hyphen_bottom_dot_png();
	this.instance_200.setTransform(2717.5,1679.1,1.171,1.631,0,0,0,49.5,49.5);

	this.instance_201 = new lib.water_hyphen_bottom_dot_png();
	this.instance_201.setTransform(2355.6,1676.4,1.171,1.631,0,0,0,49.5,49.5);

	this.instance_202 = new lib.water_hyphen_bottom_dot_png();
	this.instance_202.setTransform(2236.8,1676.4,1.285,1.631,0,0,0,49.5,49.5);

	this.instance_203 = new lib.water_hyphen_middle_dot_png();
	this.instance_203.setTransform(2990.1,1553.4,1,1,0,0,0,49.5,49.5);

	this.instance_204 = new lib.water_hyphen_middle_dot_png();
	this.instance_204.setTransform(2900.9,1553.4,1,1,0,0,0,49.5,49.5);

	this.instance_205 = new lib.water_hyphen_middle_dot_png();
	this.instance_205.setTransform(2805.1,1553.4,1,1,0,0,0,49.5,49.5);

	this.instance_206 = new lib.water_hyphen_middle_dot_png();
	this.instance_206.setTransform(2364.1,1553.4,1,1,0,0,0,49.5,49.5);

	this.instance_207 = new lib.water_hyphen_middle_dot_png();
	this.instance_207.setTransform(2306.4,1553.4,1,1,0,0,0,49.5,49.5);

	this.instance_208 = new lib.water_hyphen_middle_dot_png();
	this.instance_208.setTransform(2210.6,1553.4,1,1,0,0,0,49.5,49.5);

	this.instance_209 = new lib.water_hyphen_top_dot_png();
	this.instance_209.setTransform(2986.8,1462.7,1,1,0,0,0,49.5,50);

	this.instance_210 = new lib.water_hyphen_top_dot_png();
	this.instance_210.setTransform(2896.1,1462.7,1,1,0,0,0,49.5,50);

	this.instance_211 = new lib.water_hyphen_top_dot_png();
	this.instance_211.setTransform(2805.1,1462.7,1,1,0,0,0,49.5,50);

	this.instance_212 = new lib.water_hyphen_top_dot_png();
	this.instance_212.setTransform(2269.7,1459,1,1,0,0,0,49.5,50);

	this.instance_213 = new lib.water_hyphen_top_dot_png();
	this.instance_213.setTransform(2210.6,1459,1,1,0,0,0,49.5,50);

	this.instance_214 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_214.setTransform(10.8,843.6,1,1,0,0,0,200,200);

	this.instance_215 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_215.setTransform(10.8,-619.1,1,1,0,0,0,200,200);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_216 = new lib.hay_hyphen_cube_dot_png();
	this.instance_216.setTransform(885.6,-119.4,1,1,0,0,0,45.5,46.5);

	this.instance_217 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_217.setTransform(10.8,519.8,1,1,0,0,0,200,200);

	this.instance_218 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_218.setTransform(4575.7,1026.5,1,1,0,0,0,200,200);

	this.instance_219 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_219.setTransform(4865.1,1026.5,1,1,0,0,0,200,200);

	this.instance_220 = new lib.woodencrate_dot_png();
	this.instance_220.setTransform(1538.1,1456.7,1,1,-176,0,0,234,98);

	this.instance_221 = new lib.woodenbox_dot_png();
	this.instance_221.setTransform(1545.2,1644.6,1.444,1.444,-88.6,0,0,114.5,84.5);

	this.instance_222 = new lib.woodenbox_dot_png();
	this.instance_222.setTransform(2015.4,1624.7,0.689,0.689,-92.6,0,0,114.2,84.5);

	this.instance_223 = new lib.metalbox_dot_png();
	this.instance_223.setTransform(531.6,1526.8,1,1,0,0,0,341.5,61.5);

	this.instance_224 = new lib.woodenbox_dot_png();
	this.instance_224.setTransform(320.5,1406.1,1.048,1.048,4.5,0,0,114.3,84.5);

	this.instance_225 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_225.setTransform(10.8,1599.9,1,1,0,0,0,200,200);

	this.instance_226 = new lib.metalbox_dot_png();
	this.instance_226.setTransform(1880.9,1523.6,0.583,0.583,4.7,0,0,341.4,61.6);

	this.instance_227 = new lib.woodenbox_dot_png();
	this.instance_227.setTransform(2006.6,1390.2,1.113,1.113,-91.4,0,0,114.2,84.5);

	this.instance_228 = new lib.water_hyphen_top_dot_png();
	this.instance_228.setTransform(2114.5,1459,1,1,0,0,0,49.5,50);

	this.instance_229 = new lib.water_hyphen_middle_dot_png();
	this.instance_229.setTransform(2114.5,1553.4,1,1,0,0,0,49.5,49.5);

	this.instance_230 = new lib.woodencrate_dot_png();
	this.instance_230.setTransform(1602.5,1386.5,0.713,0.713,-0.5,0,0,234,97.9);

	this.instance_231 = new lib.woodenbox_dot_png();
	this.instance_231.setTransform(1872,1446,1.238,0.689,-157.1,0,0,114.1,84.2);

	this.instance_232 = new lib.woodenbox_dot_png();
	this.instance_232.setTransform(1769.1,1316.4,0.689,0.689,-88.9,0,0,114.2,84.5);

	this.instance_233 = new lib.woodenbox_dot_png();
	this.instance_233.setTransform(1866.7,1340.2,0.911,0.911,3.9,0,0,114.2,84.5);

	this.instance_234 = new lib.woodenbox_dot_png();
	this.instance_234.setTransform(1628.2,1340.2,0.911,0.911,3.9,0,0,114.2,84.5);

	this.instance_235 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_235.setTransform(3511.9,1678.1,1,1,0,0,0,98.5,70);

	this.instance_236 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_236.setTransform(3361,1677.4,1,1,0,0,0,98.5,70);

	this.instance_237 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_237.setTransform(3055,1677.4,1,1,0,0,0,25,70);

	this.instance_238 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_238.setTransform(3174.1,1677.4,1,1,0,0,0,98.5,70);

	this.instance_239 = new lib.water_hyphen_top_dot_png();
	this.instance_239.setTransform(3677.4,1644.4,1,1.219,0,0,0,49.5,50);

	this.instance_240 = new lib.water_hyphen_bottom_dot_png();
	this.instance_240.setTransform(2979.9,1679.1,1.171,1.631,0,0,0,49.5,49.5);

	this.instance_241 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_241.setTransform(10.8,1226.1,1,1,0,0,0,200,200);

	this.instance_242 = new lib.water_hyphen_bottom_dot_png();
	this.instance_242.setTransform(1287.5,1473.8,1.171,1.631,0,0,0,49.5,49.5);

	this.instance_243 = new lib.water_hyphen_bottom_dot_png();
	this.instance_243.setTransform(1168.7,1473.8,1.285,1.631,0,0,0,49.5,49.5);

	this.instance_244 = new lib.water_hyphen_middle_dot_png();
	this.instance_244.setTransform(1296,1350.8,1,1,0,0,0,49.5,49.5);

	this.instance_245 = new lib.water_hyphen_middle_dot_png();
	this.instance_245.setTransform(1238.3,1350.8,1,1,0,0,0,49.5,49.5);

	this.instance_246 = new lib.water_hyphen_middle_dot_png();
	this.instance_246.setTransform(1142.5,1350.8,1,1,0,0,0,49.5,49.5);

	this.instance_247 = new lib.water_hyphen_top_dot_png();
	this.instance_247.setTransform(1201.6,1256.4,1,1,0,0,0,49.5,50);

	this.instance_248 = new lib.water_hyphen_top_dot_png();
	this.instance_248.setTransform(1142.5,1256.4,1,1,0,0,0,49.5,50);

	this.instance_249 = new lib.water_hyphen_middle_dot_png();
	this.instance_249.setTransform(1046.4,1350.8,1,1,0,0,0,49.5,49.5);

	this.instance_250 = new lib.water_hyphen_bottom_dot_png();
	this.instance_250.setTransform(1054.9,1473.8,1.171,1.631,0,0,0,49.5,49.5);

	this.instance_251 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_251.setTransform(407.7,1036.3,1.056,1,0,0,0,200,200);

	this.instance_252 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_252.setTransform(808.1,1036.3,1,1,0,0,0,200,200);

	this.instance_253 = new lib.water_hyphen_top_dot_png();
	this.instance_253.setTransform(1046.4,1256.4,1,1,0,0,0,49.5,50);

	this.instance_254 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_254.setTransform(796.8,945,1.056,1,0,0,0,200,200);

	this.instance_255 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_255.setTransform(385.5,945,1.056,1,0,0,0,200,200);

	this.instance_256 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_256.setTransform(605.2,601.6,1.056,1,0,0,0,200,200);

	this.instance_257 = new lib.platformhay_hyphen_right_dot_png();
	this.instance_257.setTransform(975.7,-41.6,1,1,0,0,0,34.5,40);

	this.instance_258 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_258.setTransform(880.7,-38.3,1,1,0,0,0,98.5,41);

	this.instance_259 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_259.setTransform(540.1,-36.3,1,1,0,0,0,98.5,41);

	this.instance_260 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_260.setTransform(348.8,-36.3,1,1,0,0,0,98.5,41);

	this.instance_261 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_261.setTransform(316.3,-18.6,1,1,0,0,0,98.5,41);

	this.instance_262 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_262.setTransform(309.3,-34,1,1,0,0,0,98.5,41);

	this.instance_263 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_263.setTransform(494.8,-23.2,1,1,0,0,0,98.5,41);

	this.instance_264 = new lib.platformhay_hyphen_repeat_dot_png();
	this.instance_264.setTransform(672.5,-21.8,1,1,0,0,0,98.5,41);

	this.instance_265 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_265.setTransform(401.4,207,1.056,1,0,0,0,200,200);

	this.instance_266 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_266.setTransform(225.8,-35.8,0.786,0.786,0,0,0,25,70);

	this.instance_267 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_267.setTransform(10.8,137.2,1,1,0,0,0,200,200);

	this.instance_268 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_268.setTransform(10.8,-236.5,1,1,0,0,0,200,200);

	this.platform1 = new lib.level20movingpallette();
	this.platform1.setTransform(5195.4,846.4,1,0.76);

	this.instance_269 = new lib.water_hyphen_bottom_dot_png();
	this.instance_269.setTransform(2123,1676.4,1.171,1.631,0,0,0,49.5,49.5);

	this.instance_270 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_270.setTransform(7277.8,1792.9,1,1,0,0,0,200,200);

	this.instance_271 = new lib.woodenbox_dot_png();
	this.instance_271.setTransform(2547,1518.5,0.675,0.737,-167,0,0,114.4,84.4);

	this.instance_272 = new lib.woodenbox_dot_png();
	this.instance_272.setTransform(2460.7,1450.8,0.441,0.482,-1.2,0,0,114.2,84.5);

	this.instance_273 = new lib.water_hyphen_top_dot_png();
	this.instance_273.setTransform(2364.1,1459,1,1,0,0,0,49.5,50);

	this.instance_274 = new lib.woodencrate_dot_png();
	this.instance_274.setTransform(2624.2,1495.2,0.462,0.462,87.6,0,0,234,97.9);

	this.instance_275 = new lib.water_hyphen_top_dot_png();
	this.instance_275.setTransform(2709,1462.7,1,1,0,0,0,49.5,50);

	this.instance_276 = new lib.water_hyphen_middle_dot_png();
	this.instance_276.setTransform(2709,1553.4,1,1,0,0,0,49.5,49.5);

	this.instance_277 = new lib.woodencrate_dot_png();
	this.instance_277.setTransform(2529,1442,0.462,0.462,2.1,0,0,234.1,98);

	this.instance_278 = new lib.woodenbox_dot_png();
	this.instance_278.setTransform(2497.2,1348.4,0.791,0.791,178.4,0,0,114.2,84.5);

	this.instance_279 = new lib.woodenbox_dot_png();
	this.instance_279.setTransform(2614.1,1367.5,0.427,0.427,12.8,0,0,114.1,84.5);

	this.instance_280 = new lib.woodenbox_dot_png();
	this.instance_280.setTransform(2623,1315.9,0.364,0.364,3.6,0,0,114.2,84.4);

	this.instance_281 = new lib.woodenbox_dot_png();
	this.instance_281.setTransform(2445.6,1269.7,0.302,0.302,3.6,0,0,114.4,84.2);

	this.instance_282 = new lib.woodenbox_dot_png();
	this.instance_282.setTransform(2530.1,1282.8,0.302,0.302,-88.9,0,0,114.5,84.2);

	this.instance_283 = new lib.woodencrate_dot_png();
	this.instance_283.setTransform(2585.4,1263.7,0.329,0.329,-0.4,0,0,234.1,98.2);

	this.instance_284 = new lib.woodenbox_dot_png();
	this.instance_284.setTransform(2620,1170,0.595,0.595,93.4,0,0,114.2,84.5);

	this.instance_285 = new lib.woodencrate_dot_png();
	this.instance_285.setTransform(2445.5,1174.7,0.359,0.359,-92.4,0,0,234.1,98.2);

	this.instance_286 = new lib.woodencrate_dot_png();
	this.instance_286.setTransform(2565.3,1229.4,0.237,0.237,4.1,0,0,234.4,98.4);

	this.instance_287 = new lib.metalbox_dot_png();
	this.instance_287.setTransform(2563.3,1200.3,0.325,0.325,0,0,0,341.4,61.5);

	this.instance_288 = new lib.metalbox_dot_png();
	this.instance_288.setTransform(2557.5,1177.1,0.309,0.309,6.5,0,0,341.3,61.5);

	this.instance_289 = new lib.woodenbox_dot_png();
	this.instance_289.setTransform(2467.5,1105.8,0.522,0.522,1.3,0,0,114.2,84.5);

	this.instance_290 = new lib.woodenbox_dot_png();
	this.instance_290.setTransform(2630,1110,0.428,0.428,88.8,0,0,114.3,84.5);

	this.instance_291 = new lib.woodencrate_dot_png();
	this.instance_291.setTransform(2550,1110,0.237,0.237,96.4,0,0,234.6,98.2);

	this.instance_292 = new lib.woodenbox_dot_png();
	this.instance_292.setTransform(2541.1,1063.7,0.428,0.428,88.8,0,0,114.3,84.5);

	this.instance_293 = new lib.woodenbox_dot_png();
	this.instance_293.setTransform(2600,1080,0.32,0.32,8.8,0,0,114.4,84.2);

	this.instance_294 = new lib.metalbar_dot_png();
	this.instance_294.setTransform(2505.7,1169.8,0.524,0.852,98.3,0,0,245.1,27);

	this.instance_295 = new lib.woodenbox_dot_png();
	this.instance_295.setTransform(2453.4,1015.9,0.517,0.517,84.8,0,0,114.4,84.7);

	this.instance_296 = new lib.woodencrate_dot_png();
	this.instance_296.setTransform(2507,1018.5,0.237,0.237,91,0,0,234.5,98.2);

	this.instance_297 = new lib.woodenbox_dot_png();
	this.instance_297.setTransform(2620.3,1028.8,0.428,0.428,0.8,0,0,114.2,84.5);

	this.instance_298 = new lib.woodenbox_dot_png();
	this.instance_298.setTransform(2557.6,996.3,0.428,0.428,0.8,0,0,114.2,84.5);

	this.instance_299 = new lib.woodenbox_dot_png();
	this.instance_299.setTransform(2628.4,982.3,0.29,0.29,14.2,0,0,114.2,84.5);

	this.instance_300 = new lib.metalbar_dot_png();
	this.instance_300.setTransform(6090.3,1312.6,1.11,1.11,0,0,0,245,27);

	this.instance_301 = new lib.metalbar_dot_png();
	this.instance_301.setTransform(5979.8,397.7,1.11,1.11,90,0,0,245,27);

	this.platform5 = new lib.level20movingplatform();
	this.platform5.setTransform(4012.1,1480.4);

	this.instance_302 = new lib.woodencrate_dot_png();
	this.instance_302.setTransform(3556.9,545.6,0.521,0.521,81.4,0,0,234,98.1);

	this.isMovingItem = new lib.metalbox_dot_png();
	this.isMovingItem.setTransform(3569.2,804.9,0.941,1.208,-90,0,0,341.4,61.5);

	this.instance_303 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_303.setTransform(796.8,207,1.056,1,0,0,0,200,200);

	this.instance_304 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_304.setTransform(1011.5,182,0.899,1.327,0,0,0,50.5,20.9);

	this.instance_305 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_305.setTransform(957.1,240.8,1,0.847,0,0,0,155.5,45.1);

	this.instance_306 = new lib.water_hyphen_top_dot_png();
	this.instance_306.setTransform(1063.3,210.7,1.337,1,0,0,0,49.5,50);

	this.instance_307 = new lib.hazardsign_dot_png();
	this.instance_307.setTransform(1142.1,1158.6,0.558,0.558,0,0,0,51,46.1);

	this.instance_308 = new lib.endpole_dot_png();
	this.instance_308.setTransform(1143.6,1198.1,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_309 = new lib.hazardsign_dot_png();
	this.instance_309.setTransform(2246.4,1370,0.558,0.558,0,0,0,51,46.1);

	this.instance_310 = new lib.endpole_dot_png();
	this.instance_310.setTransform(2247.9,1409.5,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_311 = new lib.hazardsign_dot_png();
	this.instance_311.setTransform(2846,1363.6,0.558,0.558,0,0,0,51,46.1);

	this.instance_312 = new lib.endpole_dot_png();
	this.instance_312.setTransform(2847.5,1403.1,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_313 = new lib.hazardsign_dot_png();
	this.instance_313.setTransform(3999.9,1539.4,0.558,0.558,0,0,0,51,46.1);

	this.instance_314 = new lib.endpole_dot_png();
	this.instance_314.setTransform(4001.4,1578.9,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_315 = new lib.hazardsign_dot_png();
	this.instance_315.setTransform(2300.9,396.1,0.558,0.558,0,0,0,51,46.1);

	this.instance_316 = new lib.endpole_dot_png();
	this.instance_316.setTransform(2302.4,435.6,0.609,0.609,0,0,0,8.2,39.5);

	this.addChild(this.instance_316,this.instance_315,this.instance_314,this.instance_313,this.instance_312,this.instance_311,this.instance_310,this.instance_309,this.instance_308,this.instance_307,this.instance_306,this.instance_305,this.instance_304,this.instance_303,this.isMovingItem,this.instance_302,this.platform5,this.instance_301,this.instance_300,this.instance_299,this.instance_298,this.instance_297,this.instance_296,this.instance_295,this.instance_294,this.instance_293,this.instance_292,this.instance_291,this.instance_290,this.instance_289,this.instance_288,this.instance_287,this.instance_286,this.instance_285,this.instance_284,this.instance_283,this.instance_282,this.instance_281,this.instance_280,this.instance_279,this.instance_278,this.instance_277,this.instance_276,this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.platform1,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.isDisp,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.platform2,this.platform3,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-189.2,-1000,8195.1,2992.9);


(lib.level20 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.deadZone();
	this.instance.setTransform(-49,187.5,11.952,1.244,90,0,0,0,0.1);

	this.instance_1 = new lib.deadZone();
	this.instance_1.setTransform(1612.3,809.3,32.562,0.67);

	// level20Pixi
	this.instance_2 = new lib.level20Pixi();
	this.instance_2.setTransform(0,0,0.4,0.4);

	// level20PixiBG
	this.instance_3 = new lib.level20PixiBG();
	this.instance_3.setTransform(0,0,0.4,0.4);

	// Layer 1
	this.platform1_switch = new lib.itemSwitch();
	this.platform1_switch.setTransform(2376.5,617.2,0.25,0.25,0,0,0,-1.6,-3);

	this.instance_4 = new lib.skyhook();
	this.instance_4.setTransform(1187.3,490.7,0.1,0.1);

	this.instance_5 = new lib.skyhook();
	this.instance_5.setTransform(1109.3,409.6,0.1,0.1);

	this.instance_6 = new lib.floor();
	this.instance_6.setTransform(397.7,397.6,0.369,1.938,0,0,0,0.1,0.2);

	this.instance_7 = new lib.wall();
	this.instance_7.setTransform(700.5,198.8,0.304,2.558,90);

	this.instance_8 = new lib.floor();
	this.instance_8.setTransform(1000,80,1.136,0.403,90,0,0,-0.4,-0.1);

	this.instance_9 = new lib.deadZone();
	this.instance_9.setTransform(909.9,200,0.251,1.628,90,0,0,0,-0.1);

	this.instance_10 = new lib.wall();
	this.instance_10.setTransform(480.1,100,0.2,1.604,90);

	this.instance_11 = new lib.wall();
	this.instance_11.setTransform(576.5,30,1.2,0.349,90);

	this.instance_12 = new lib.deadZone();
	this.instance_12.setTransform(479.9,80,0.251,1.628,90,0,0,0,-0.1);

	this.instance_13 = new lib.floor();
	this.instance_13.setTransform(730.4,-38.3,0.366,3.4,90,0,0,-0.2,-0.1);

	this.instance_14 = new lib.wall();
	this.instance_14.setTransform(781.4,210.8,0.344,4.173,90);

	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(736,-37.2,0.344,3.281,90);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(1375,407,1,0.375);

	this.platform5_switch = new lib.itemSwitch();
	this.platform5_switch.setTransform(1375,375,0.25,0.25,0,0,0,-1.6,-3);

	this.instance_17 = new lib.wall();
	this.instance_17.setTransform(2137.4,450,0.25,1.501);

	this.platform3_switch = new lib.itemSwitch();
	this.platform3_switch.setTransform(1975,300,0.25,0.25,0,0,0,-1.6,-3);

	this.platform3_ref = new lib.platformRef();
	this.platform3_ref.setTransform(2075.1,475,2.999,1,90);

	this.platform3 = new lib.movingPlatform2();
	this.platform3.setTransform(2075.5,624.7,1,0.25);

	this.instance_18 = new lib.wall();
	this.instance_18.setTransform(3020.3,580.8,1.659,0.907,90,0,0,0.3,-0.2);

	this.instance_19 = new lib.wall();
	this.instance_19.setTransform(2390,239.2,0.25,3.771,0,0,0,0,0.1);

	this.instance_20 = new lib.exit();
	this.instance_20.setTransform(3075,287.6);

	this.instance_21 = new lib.star();
	this.instance_21.setTransform(950,500,0.25,0.249);

	this.instance_22 = new lib.wall();
	this.instance_22.setTransform(2484.4,650,0.256,9.852,90,0,0,0.2,-0.2);

	this.instance_23 = new lib.wall();
	this.instance_23.setTransform(2387.8,525.1,0.25,3,90,0,0,0.2,-0.1);

	this.instance_24 = new lib.wall();
	this.instance_24.setTransform(3050,425.2,1.749,1.5,90,0,0,0.1,0);

	this.platform2_switch = new lib.itemSwitch();
	this.platform2_switch.setTransform(2450,625,0.25,0.25,0,0,0,-1.6,-3);

	this.platform2_ref = new lib.platformRef();
	this.platform2_ref.setTransform(2768.5,432,4.066,0.999,153.5);

	this.platform2 = new lib.movingPlatform();
	this.platform2.setTransform(2586.7,525.1,1,0.25);

	this.platform1_ref = new lib.platformRef();
	this.platform1_ref.setTransform(2222.1,337.5,2.972,0.75);

	this.platform1 = new lib.movingPlatform();
	this.platform1.setTransform(2367.1,327.5,1,0.25);

	this.instance_25 = new lib.skyhook();
	this.instance_25.setTransform(1149,449,0.1,0.1);

	this.instance_26 = new lib.wall();
	this.instance_26.setTransform(1550.6,700.3,0.75,4.5,90,0,0,0.1,0);

	this.instance_27 = new lib.floor();
	this.instance_27.setTransform(1887.5,325,2.755,0.275);

	this.instance_28 = new lib.floor();
	this.instance_28.setTransform(1331,575,2.375,0.25);

	this.instance_29 = new lib.wall();
	this.instance_29.setTransform(1827.5,-513.2,21.535,4.757,180,0,0,0,0.2);

	this.instance_30 = new lib.wall();
	this.instance_30.setTransform(1425,50.8,8,0.5,90,0,0,0.1,0);

	this.platform5_ref = new lib.keith12platform1_ref();
	this.platform5_ref.setTransform(1600,470.3,2.906,1,-90);

	this.instance_31 = new lib.floor();
	this.instance_31.setTransform(350,-62.5,0.5,0.25,90,0,0,-0.1,0);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(1552.1,185.3,31.395,9.523,0,0,0,0,0.4);

	this.instance_32 = new lib.wall();
	this.instance_32.setTransform(1887.7,538.6,3.998,2.755,90,0,0,0.1,0);

	this.instance_33 = new lib.star();
	this.instance_33.setTransform(350,250,0.25,0.249);

	this.instance_34 = new lib.star();
	this.instance_34.setTransform(1200,425,0.25,0.249);

	this.instance_35 = new lib.wall();
	this.instance_35.setTransform(1099.3,625.1,1,7,90,0,0,0.1,0.1);

	this.instance_36 = new lib.deadZone();
	this.instance_36.setTransform(1613.8,650.6,0.238,5.643,90,0,0,0,-0.2);

	this.platform5 = new lib.movingPlatform();
	this.platform5.setTransform(1600,604.8,3,0.685);

	this.instance_37 = new lib.floor();
	this.instance_37.setTransform(1012.5,375,1,0.25);

	this.instance_38 = new lib.wall();
	this.instance_38.setTransform(1012.5,500,2.5,1,90);

	this.instance_39 = new lib.floor();
	this.instance_39.setTransform(680,499.7,3.132,0.287,0,0,0,-0.1,0.1);

	this.instance_40 = new lib.wall();
	this.instance_40.setTransform(680.6,550.1,0.75,3.131,90,0,0,0.1,-0.1);

	this.instance_41 = new lib.deadZone();
	this.instance_41.setTransform(459.1,561.1,1.419,1.298,90,0,0,0.1,-0.1);

	this.instance_42 = new lib.wall();
	this.instance_42.setTransform(270.9,546.5,0.816,2.614,90,0,0,0.1,0.1);

	this.instance_43 = new lib.wall();
	this.instance_43.setTransform(475.2,-507.9,4.837,10.103,90,0,0,-0.1,0.1);

	this.instance_44 = new lib.wall();
	this.instance_44.setTransform(26.9,139.3,9.139,1.071,90);

	this.instance_45 = new lib.wall();
	this.instance_45.setTransform(1007.7,-25,4.999,0.349,90);

	this.p1 = new lib.shaun();
	this.p1.setTransform(175,-75,0.238,0.66);

	this.instance_46 = new lib.wall();
	this.instance_46.setTransform(194.2,295.8,6.094,2.614,90,0,0,0.1,0.1);

	this.instance_47 = new lib.wall();
	this.instance_47.setTransform(349.9,75.2,1.75,1,90,0,0,0.1,0.1);

	this.instance_48 = new lib.floor();
	this.instance_48.setTransform(247.4,-0.1,0.75,3.438,90,0,0,-0.1,-0.1);

	this.instance_49 = new lib.wall();
	this.instance_49.setTransform(345.3,424.9,2.492,0.665,90,0,0,0.1,0.1);

	this.instance_50 = new lib.deadZone();
	this.instance_50.setTransform(1005.9,579.3,0.251,4.11,90,0,0,0,-0.1);

	this.addChild(this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.p1,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.platform5,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.sizeRef,this.instance_31,this.platform5_ref,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.platform1,this.platform1_ref,this.platform2,this.platform2_ref,this.platform2_switch,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.platform3,this.platform3_ref,this.platform3_switch,this.instance_17,this.platform5_switch,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.platform1_switch,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.1,-750.1,3351.6,1592.9);


(lib.level19Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.woodencrate_dot_png();
	this.instance.setTransform(2006.6,2667.4,0.933,0.933,2,0,0,234.2,98);

	this.instance_1 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_1.setTransform(5196,1061.5,1,1,0,0,0,34.5,46.5);

	this.instance_2 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_2.setTransform(5068.8,1060.5,1.102,1,0,0,0,98.5,47.5);

	this.level19platform5 = new lib.level19movingplatform3();
	this.level19platform5.setTransform(3808.2,1607.1,0.581,0.581,0,0,0,0.1,-0.1);

	this.level19platform1 = new lib.level19movingplatform();
	this.level19platform1.setTransform(1430,1021,0.334,0.334);

	this.level19platform2 = new lib.level19movingplatform2();
	this.level19platform2.setTransform(735.8,1030,0.418,0.418);

	this.instance_3 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_3.setTransform(5237.4,2526.6,1,1,0,0,0,200,200);

	this.instance_4 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_4.setTransform(5237.4,2178.9,1,1,0,0,0,200,200);

	this.instance_5 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_5.setTransform(4498.5,1060,1,1,0,0,0,98.5,47.5);

	this.instance_6 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_6.setTransform(1840,1123.2,1,1.366,0,0,0,50.5,17);

	this.instance_7 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_7.setTransform(1740,1123.2,1,1.366,0,0,0,50.5,17);

	this.instance_8 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_8.setTransform(1650,1123.2,1,1.366,0,0,0,50.5,17);

	this.instance_9 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_9.setTransform(1560,1123.2,1,1.366,0,0,0,50.5,17);

	this.instance_10 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_10.setTransform(1460,1123.2,1,1.366,0,0,0,50.5,17);

	this.instance_11 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_11.setTransform(1361.7,1123.4,1,1.366,0,0,0,50.5,17);

	this.instance_12 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_12.setTransform(1263.7,1123.4,1,1.366,0,0,0,50.5,17);

	this.instance_13 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_13.setTransform(1166.9,1123.2,1,1.366,0,0,0,50.5,17);

	this.instance_14 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_14.setTransform(1380.2,1149.6,1,1,0,0,0,60.5,36);

	this.instance_15 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_15.setTransform(1670,1150,1,1,0,0,0,60.5,36);

	this.instance_16 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_16.setTransform(1610,1150,1,1,0,0,0,60.5,36);

	this.instance_17 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_17.setTransform(1494.3,1154.5,1,1,0,0,0,60.5,36);

	this.instance_18 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_18.setTransform(1320,1150,1,1,0,0,0,60.5,36);

	this.instance_19 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_19.setTransform(1230,1150,1,1,0,0,0,60.5,36);

	this.level19platform3 = new lib.level19movingplatform();
	this.level19platform3.setTransform(940.1,1441.6,0.334,0.334);

	this.instance_20 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_20.setTransform(1069.6,1122.4,1,1.366,0,0,0,50.5,17);

	this.instance_21 = new lib.water_hyphen_platform_hyphen_left_dot_png();
	this.instance_21.setTransform(956.3,1124.5,1.346,1.394,0,0,0,50.5,15.6);

	this.instance_22 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_22.setTransform(1020,1150,1,1,0,0,0,60.5,36);

	this.instance_23 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_23.setTransform(1121.2,1146.9,1,1,0,0,0,60.5,36);

	this.instance_24 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_24.setTransform(935.7,1155.5,1,1,0,0,0,60.5,41.5);

	this.instance_25 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_25.setTransform(1731.5,1150,1,1,0,0,0,60.5,36);

	this.instance_26 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_26.setTransform(1321.5,623.8,1,1.366,0,0,0,50.5,17);

	this.instance_27 = new lib.water_hyphen_platform_hyphen_left_dot_png();
	this.instance_27.setTransform(1429.8,630.4,1.346,1.394,0,0,180,56.8,19.1);

	this.instance_28 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_28.setTransform(1224.2,623.9,1,1.366,0,0,0,50.5,17);

	this.instance_29 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_29.setTransform(1126.9,623.2,1,1.366,0,0,0,50.5,17);

	this.instance_30 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_30.setTransform(1031,624.1,1,1.366,0,0,0,50.5,17);

	this.instance_31 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_31.setTransform(933.7,623.4,1,1.366,0,0,0,50.5,17);

	this.instance_32 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_32.setTransform(836.9,623.2,1,1.366,0,0,0,50.5,17);

	this.instance_33 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_33.setTransform(1450,650,1,1,0,0,180,60.5,41.5);

	this.instance_34 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_34.setTransform(1340,650,1,1,0,0,0,60.5,36);

	this.instance_35 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_35.setTransform(1231.2,646.9,1,1,0,0,0,60.5,36);

	this.instance_36 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_36.setTransform(1130,650,1,1,0,0,0,60.5,36);

	this.instance_37 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_37.setTransform(1020,650,1,1,0,0,0,60.5,36);

	this.instance_38 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_38.setTransform(900,650,1,1,0,0,0,60.5,36);

	this.instance_39 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_39.setTransform(739.6,622.4,1,1.366,0,0,0,50.5,17);

	this.instance_40 = new lib.water_hyphen_platform_hyphen_left_dot_png();
	this.instance_40.setTransform(626.3,624.5,1.346,1.394,0,0,0,50.5,15.6);

	this.instance_41 = new lib.water_hyphen_platform_hyphen_right_dot_png();
	this.instance_41.setTransform(1380,630.1,1.325,1.391,0,0,0,49,15.1);

	this.instance_42 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_42.setTransform(690,650,1,1,0,0,0,60.5,36);

	this.instance_43 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_43.setTransform(791.2,646.9,1,1,0,0,0,60.5,36);

	this.instance_44 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_44.setTransform(605.7,655.5,1,1,0,0,0,60.5,41.5);

	this.instance_45 = new lib.endflag_dot_png();
	this.instance_45.setTransform(5015.6,837.5,1,1,0,0,0,49,56);

	this.instance_46 = new lib.endpole_dot_png();
	this.instance_46.setTransform(4988.6,927.8,1,1,0,0,0,8,39.5);

	this.instance_47 = new lib.dirt1_dot_png();
	this.instance_47.setTransform(130.4,2080.5,1.184,1.184,0,0,0,55,87);

	this.instance_48 = new lib.dirt1_dot_png();
	this.instance_48.setTransform(74,2080.5,1.184,1.184,0,0,0,55,87);

	this.instance_49 = new lib.dirt3_dot_png();
	this.instance_49.setTransform(215,826.5,1.125,1.125,-85.4,0,0,55,88);

	this.instance_50 = new lib.dirt4_dot_png();
	this.instance_50.setTransform(6.7,-421.9,1.32,1.32,0,0,0,121.5,37.5);

	this.instance_51 = new lib.dirt4_dot_png();
	this.instance_51.setTransform(6.7,-383.7,1.32,1.32,0,0,0,121.5,37.5);

	this.instance_52 = new lib.dirt4_dot_png();
	this.instance_52.setTransform(6.7,-437.9,1.32,1.32,0,0,0,121.5,37.5);

	this.instance_53 = new lib.dirt4_dot_png();
	this.instance_53.setTransform(6.7,-421.9,1.32,1.32,0,0,0,121.5,37.5);

	this.instance_54 = new lib.leaves1_dot_png();
	this.instance_54.setTransform(196.6,-47.9,1,1,0,0,0,18.5,15);

	this.instance_55 = new lib.leaves1_dot_png();
	this.instance_55.setTransform(-24,1240.3,1,1,0,0,0,18.5,15);

	this.instance_56 = new lib.leaves2_dot_png();
	this.instance_56.setTransform(570.6,2497.5,1.35,1.35,33.5,0,0,21.9,20);

	this.instance_57 = new lib.dirt2_dot_png();
	this.instance_57.setTransform(2151.7,1263.2,1,1,0,0,0,118.5,52.5);

	this.instance_58 = new lib.dirt3_dot_png();
	this.instance_58.setTransform(2213,-588.2,0.773,0.773,0,0,0,55,88);

	this.instance_59 = new lib.leaves1_dot_png();
	this.instance_59.setTransform(2168.8,213,1.216,1.216,164.6,0,0,18.5,15.1);

	this.instance_60 = new lib.leaves2_dot_png();
	this.instance_60.setTransform(2030.1,829.2,1,1,0,0,0,22,20);

	this.instance_61 = new lib.moss_dot_png();
	this.instance_61.setTransform(1157.9,2161.6,1.307,1.307,177.5,0,0,40.6,27.6);

	this.instance_62 = new lib.moss_dot_png();
	this.instance_62.setTransform(2917.7,2457.1,1.307,1.307,-94.3,0,0,40.6,27.6);

	this.instance_63 = new lib.moss_dot_png();
	this.instance_63.setTransform(2918.3,1848.1,1.726,1.726,-94.3,0,0,40.5,27.6);

	this.instance_64 = new lib.dirt1_dot_png();
	this.instance_64.setTransform(1467.5,1880.6,1,1,0,0,0,55,87);

	this.instance_65 = new lib.dirt2_dot_png();
	this.instance_65.setTransform(1645.9,2649.8,1,1,0,0,0,118.5,52.5);

	this.instance_66 = new lib.dirt2_dot_png();
	this.instance_66.setTransform(2099.7,2221.7,1,1,0,0,0,118.5,52.5);

	this.instance_67 = new lib.dirt3_dot_png();
	this.instance_67.setTransform(2718.5,2094,1,1,0,0,0,55,88);

	this.instance_68 = new lib.dirt4_dot_png();
	this.instance_68.setTransform(2550.8,2568.2,1.477,1.477,0,0,0,121.5,37.5);

	this.instance_69 = new lib.dirt4_dot_png();
	this.instance_69.setTransform(1559.5,2520.8,1.477,1.477,0,0,0,121.5,37.5);

	this.instance_70 = new lib.dirt4_dot_png();
	this.instance_70.setTransform(1551.5,2102.2,1.477,1.477,0,0,0,121.5,37.5);

	this.instance_71 = new lib.dirt4_dot_png();
	this.instance_71.setTransform(2366.5,1938,1.477,1.477,0,0,0,121.5,37.5);

	this.instance_72 = new lib.leaves2_dot_png();
	this.instance_72.setTransform(4500.9,1865.6,1,1,0,0,0,22,23);

	this.instance_73 = new lib.dirt1_dot_png();
	this.instance_73.setTransform(5513.3,1615.4,1.609,1.609,0,0,0,55,87);

	this.instance_74 = new lib.dirt3_dot_png();
	this.instance_74.setTransform(4635.1,2206.7,1.5,1.5,157.5,0,0,55,88);

	this.instance_75 = new lib.dirt2_dot_png();
	this.instance_75.setTransform(5376.2,1025.5,1.523,1.523,0,0,0,118.5,52.5);

	this.instance_76 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_76.setTransform(2131.8,-456.2,1,1,0,0,0,200,200);

	this.instance_77 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_77.setTransform(2131.8,-856.2,1,1,0,0,0,200,200);

	this.instance_78 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_78.setTransform(2131.8,323.8,1,1,0,0,0,200,200);

	this.instance_79 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_79.setTransform(2131.8,-76.2,1,1,0,0,0,200,200);

	this.instance_80 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_80.setTransform(2131.8,1115.7,1,1,0,0,0,200,200);

	this.instance_81 = new lib.water_hyphen_platform_hyphen_repeat_dot_png();
	this.instance_81.setTransform(1910,1123.2,1,1.366,0,0,0,50.5,17);

	this.instance_82 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_82.setTransform(1910,1150,1,1,0,0,0,60.5,36);

	this.instance_83 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_83.setTransform(1850,1150,1,1,0,0,0,60.5,36);

	this.instance_84 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_84.setTransform(5587.2,-846.6,1,1,0,0,0,200,200);

	this.instance_85 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_85.setTransform(5385.2,-846.6,1,1,0,0,0,200,200);

	this.instance_86 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_86.setTransform(5587.2,-470.5,1,1,0,0,0,200,200);

	this.instance_87 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_87.setTransform(5385.2,-470.5,1,1,0,0,0,200,200);

	this.instance_88 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_88.setTransform(5587.2,-81.5,1,1,0,0,0,200,200);

	this.instance_89 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_89.setTransform(5385.2,-81.5,1,1,0,0,0,200,200);

	this.instance_90 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_90.setTransform(5587.2,681.5,1,1,0,0,0,200,200);

	this.instance_91 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_91.setTransform(5385.2,681.5,1,1,0,0,0,200,200);

	this.instance_92 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_92.setTransform(5587.2,305.5,1,1,0,0,0,200,200);

	this.instance_93 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_93.setTransform(5385.2,305.5,1,1,0,0,0,200,200);

	this.instance_94 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_94.setTransform(5587.2,1053.5,1,1,0,0,0,200,200);

	this.instance_95 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_95.setTransform(5385.2,1053.5,1,1,0,0,0,200,200);

	this.instance_96 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_96.setTransform(5587.2,1442.5,1,1,0,0,0,200,200);

	this.instance_97 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_97.setTransform(5385.2,1442.5,1,1,0,0,0,200,200);

	this.instance_98 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_98.setTransform(5587.2,2597.5,1,1,0,0,0,200,200);

	this.instance_99 = new lib.moss_dot_png();
	this.instance_99.setTransform(568.7,1597.1,1.205,1.205,-79.2,0,0,40.5,27.5);

	this.instance_100 = new lib.leaves1_dot_png();
	this.instance_100.setTransform(585,335.2,1.154,1.154,118,0,0,18.6,15);

	this.instance_101 = new lib.leaves2_dot_png();
	this.instance_101.setTransform(588.2,310.1,1.268,1.268,80.5,0,0,22,19.9);

	this.instance_102 = new lib.leaves2_dot_png();
	this.instance_102.setTransform(582.6,292.3,1.268,1.268,80.5,0,0,22,19.9);

	this.instance_103 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_103.setTransform(1629.8,1627.1,1,1,0,0,0,98.5,47.5);

	this.instance_104 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_104.setTransform(1823.6,1627.1,1,1,0,0,0,98.5,47.5);

	this.instance_105 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_105.setTransform(2013,1627.1,1,1,0,0,0,98.5,47.5);

	this.instance_106 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_106.setTransform(2206.8,1627.1,1,1,0,0,0,98.5,47.5);

	this.instance_107 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_107.setTransform(2398,1627.1,1,1,0,0,0,98.5,47.5);

	this.instance_108 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_108.setTransform(2591.8,1627.1,1,1,0,0,0,98.5,47.5);

	this.instance_109 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_109.setTransform(2795.7,1627.1,1.102,1,0,0,0,98.5,47.5);

	this.instance_110 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_110.setTransform(2922.9,1628.1,1,1,0,0,0,34.5,46.5);

	this.instance_111 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_111.setTransform(2865,1657,1,1,-90,0,0,25,70);

	this.instance_112 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_112.setTransform(2829.3,1654.5,1,1,-90,0,0,25,70);

	this.instance_113 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_113.setTransform(2694.6,1654.5,1,1,-90,0,0,25,70);

	this.instance_114 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_114.setTransform(2556.9,1654.5,1,1,-90,0,0,25,70);

	this.instance_115 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_115.setTransform(2421.5,1654.5,1,1,-90,0,0,25,70);

	this.instance_116 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_116.setTransform(2284.2,1657,1,1,-90,0,0,25,70);

	this.instance_117 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_117.setTransform(2148.2,1657.5,1,1,-90,0,0,25,70);

	this.instance_118 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_118.setTransform(2010.7,1659.7,1,1,-90,0,0,25,70);

	this.instance_119 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_119.setTransform(1872.4,1659.7,1,1,-90,0,0,25,70);

	this.instance_120 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_120.setTransform(1742,1658.3,1,1,90.3,0,0,25.9,70);

	this.instance_121 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_121.setTransform(1441.6,1627.1,1,1,0,0,0,98.5,47.5);

	this.instance_122 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_122.setTransform(1254.7,1627.1,1,1,0,0,0,98.5,47.5);

	this.instance_123 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_123.setTransform(1147.6,1626.5,1,1,0,0,0,38,47.5);

	this.instance_124 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_124.setTransform(1604.4,1657.3,1,1,-90,0,0,25,70);

	this.instance_125 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_125.setTransform(1467.8,1657.5,1,1,-90,0,0,25,70);

	this.instance_126 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_126.setTransform(1334.6,1657,1,1,-90,0,0,25,70);

	this.instance_127 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_127.setTransform(1207.9,1657.3,1,1,-90,0,0,25,70);

	this.instance_128 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_128.setTransform(5058.4,1059,1,1,0,0,0,34.5,46.5);

	this.instance_129 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_129.setTransform(4931.2,1058,1.102,1,0,0,0,98.5,47.5);

	this.instance_130 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_130.setTransform(4727.3,1058,1,1,0,0,0,98.5,47.5);

	this.instance_131 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_131.setTransform(4533.5,1058,1,1,0,0,0,98.5,47.5);

	this.instance_132 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_132.setTransform(5000.7,1088.3,1,1,90,0,0,26,70);

	this.instance_133 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_133.setTransform(4875.4,1088.3,1,1,90,0,0,26,70);

	this.instance_134 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_134.setTransform(4739.5,1088.9,1,1,-90,0,0,25,70);

	this.instance_135 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_135.setTransform(4601.6,1087.3,1,1,-90,0,0,25,70);

	this.instance_136 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_136.setTransform(4370,1060,1,1,0,0,0,38,47.5);

	this.instance_137 = new lib.barnfloor_hyphen_middle_hyphen_left_dot_png();
	this.instance_137.setTransform(4463.1,1088.9,1,1,-90,0,0,25,70);

	this.instance_138 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_138.setTransform(4699,2629.3,1,1,0,0,0,200,200);

	this.instance_139 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_139.setTransform(4699,2426.6,1,1,0,0,0,200,200);

	this.instance_140 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_140.setTransform(4699,2057.6,1,1,0,0,0,200,200);

	this.instance_141 = new lib.woodenbox_dot_png();
	this.instance_141.setTransform(2616.8,2656.1,0.826,0.826,0,0,0,114.4,84.5);

	this.instance_142 = new lib.woodencrate_dot_png();
	this.instance_142.setTransform(1724.3,2680.1,0.933,0.933,0,0,0,234.1,98);

	this.instance_143 = new lib.woodenbox_dot_png();
	this.instance_143.setTransform(1230.3,2553.4,1.64,1.64,89,0,0,114.5,84.5);

	this.instance_144 = new lib.woodenbox_dot_png();
	this.instance_144.setTransform(1489.5,2621,1.222,1.222,179.3,0,0,114.5,84.5);

	this.instance_145 = new lib.woodenbox_dot_png();
	this.instance_145.setTransform(1459.4,2470,0.895,0.895,0.3,0,0,114.6,84.5);

	this.instance_146 = new lib.woodencrate_dot_png();
	this.instance_146.setTransform(2244,2632.5,0.933,0.933,2,0,0,234.2,98);

	this.instance_147 = new lib.woodenbox_dot_png();
	this.instance_147.setTransform(2436,2595.4,1.172,1.172,87.8,0,0,114.5,84.5);

	this.instance_148 = new lib.woodenbox_dot_png();
	this.instance_148.setTransform(2585.1,2554.8,0.532,0.532,0,0,0,114.5,84.5);

	this.instance_149 = new lib.woodenbox_dot_png();
	this.instance_149.setTransform(2678.4,2547.1,0.532,0.532,-177.8,0,0,114.5,84.6);

	this.instance_150 = new lib.woodencrate_dot_png();
	this.instance_150.setTransform(2817.3,2668.9,0.608,0.608,2,0,0,234.2,98.2);

	this.instance_151 = new lib.metalbox_dot_png();
	this.instance_151.setTransform(2741.2,2589.4,0.636,0.636,0,0,0,341.4,61.5);

	this.instance_152 = new lib.metalbox_dot_png();
	this.instance_152.setTransform(2746.4,2532.9,0.636,0.636,2.3,0,0,341.4,61.4);

	this.instance_153 = new lib.hay_hyphen_cube_dot_png();
	this.instance_153.setTransform(1826.5,630.6,1.074,1.067,0,0,0,45.5,46.5);

	this.instance_154 = new lib.hay_hyphen_cube_dot_png();
	this.instance_154.setTransform(1902.1,629.1,1.074,1.067,0,0,0,45.5,46.5);

	this.instance_155 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_155.setTransform(205.1,3.9,1,1,0,0,0,38,47.5);

	this.instance_156 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_156.setTransform(501.9,1.9,1,1,0,0,0,98.5,47.5);

	this.instance_157 = new lib.hay_hyphen_cube_dot_png();
	this.instance_157.setTransform(504.7,-50.6,1.074,1.175,0,0,0,45.5,46.5);

	this.instance_158 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_158.setTransform(315,1.9,1,1,0,0,0,98.5,47.5);

	this.instance_159 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_159.setTransform(252.1,36,0.808,0.808,90,0,0,26,70);

	this.instance_160 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_160.setTransform(350.6,36,0.808,0.808,90,0,0,26,70);

	this.instance_161 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_161.setTransform(461.9,36,0.808,0.808,90,0,0,26,70);

	this.instance_162 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_162.setTransform(612.6,2.9,1,1,0,0,0,34.5,46.5);

	this.instance_163 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_163.setTransform(571,36,0.808,0.808,90,0,0,26,70);

	this.instance_164 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_164.setTransform(38.1,243.3,1,1,0,0,0,200,200);

	this.instance_165 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_165.setTransform(378.1,243.3,1,1,0,0,0,200,200);

	this.instance_166 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_166.setTransform(38.1,628.4,1,1,0,0,0,200,200);

	this.instance_167 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_167.setTransform(378.1,628.4,1,1,0,0,0,200,200);

	this.instance_168 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_168.setTransform(38.1,1013.7,1,1,0,0,0,200,200);

	this.instance_169 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_169.setTransform(378.1,1013.7,1,1,0,0,0,200,200);

	this.instance_170 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_170.setTransform(38.1,1376.3,1,1,0,0,0,200,200);

	this.instance_171 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_171.setTransform(378.1,1376.3,1,1,0,0,0,200,200);

	this.instance_172 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_172.setTransform(38.1,1761.6,1,1,0,0,0,200,200);

	this.instance_173 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_173.setTransform(378.1,1761.6,1,1,0,0,0,200,200);

	this.instance_174 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_174.setTransform(38.1,2144.6,1,1,0,0,0,200,200);

	this.instance_175 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_175.setTransform(378.1,2144.6,1,1,0,0,0,200,200);

	this.instance_176 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_176.setTransform(38.1,2530,1,1,0,0,0,200,200);

	this.instance_177 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_177.setTransform(378.1,2530,1,1,0,0,0,200,200);

	this.instance_178 = new lib.water_hyphen_bottom_dot_png();
	this.instance_178.setTransform(4453.9,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_179 = new lib.water_hyphen_bottom_dot_png();
	this.instance_179.setTransform(4408.3,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_180 = new lib.water_hyphen_bottom_dot_png();
	this.instance_180.setTransform(4311.9,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_181 = new lib.water_hyphen_bottom_dot_png();
	this.instance_181.setTransform(4207.6,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_182 = new lib.water_hyphen_bottom_dot_png();
	this.instance_182.setTransform(4104.4,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_183 = new lib.water_hyphen_bottom_dot_png();
	this.instance_183.setTransform(4000.1,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_184 = new lib.water_hyphen_bottom_dot_png();
	this.instance_184.setTransform(3903.7,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_185 = new lib.water_hyphen_bottom_dot_png();
	this.instance_185.setTransform(3799.4,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_186 = new lib.water_hyphen_bottom_dot_png();
	this.instance_186.setTransform(3701.3,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_187 = new lib.water_hyphen_bottom_dot_png();
	this.instance_187.setTransform(3597,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_188 = new lib.water_hyphen_bottom_dot_png();
	this.instance_188.setTransform(3500.6,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_189 = new lib.water_hyphen_bottom_dot_png();
	this.instance_189.setTransform(3396.3,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_190 = new lib.water_hyphen_bottom_dot_png();
	this.instance_190.setTransform(3293.1,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_191 = new lib.water_hyphen_bottom_dot_png();
	this.instance_191.setTransform(3188.8,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_192 = new lib.water_hyphen_bottom_dot_png();
	this.instance_192.setTransform(3092.4,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_193 = new lib.water_hyphen_bottom_dot_png();
	this.instance_193.setTransform(2988.1,2671.8,1.101,1.101,0,0,0,49.5,49.5);

	this.instance_194 = new lib.water_hyphen_middle_dot_png();
	this.instance_194.setTransform(4458.9,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_195 = new lib.water_hyphen_middle_dot_png();
	this.instance_195.setTransform(4458.9,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_196 = new lib.water_hyphen_middle_dot_png();
	this.instance_196.setTransform(4376.8,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_197 = new lib.water_hyphen_middle_dot_png();
	this.instance_197.setTransform(4281.1,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_198 = new lib.water_hyphen_middle_dot_png();
	this.instance_198.setTransform(4187.4,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_199 = new lib.water_hyphen_middle_dot_png();
	this.instance_199.setTransform(4093.4,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_200 = new lib.water_hyphen_middle_dot_png();
	this.instance_200.setTransform(4376.8,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_201 = new lib.water_hyphen_middle_dot_png();
	this.instance_201.setTransform(4281.1,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_202 = new lib.water_hyphen_middle_dot_png();
	this.instance_202.setTransform(4187.4,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_203 = new lib.water_hyphen_middle_dot_png();
	this.instance_203.setTransform(4093.4,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_204 = new lib.water_hyphen_middle_dot_png();
	this.instance_204.setTransform(4006.4,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_205 = new lib.water_hyphen_middle_dot_png();
	this.instance_205.setTransform(3910.7,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_206 = new lib.water_hyphen_middle_dot_png();
	this.instance_206.setTransform(3817,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_207 = new lib.water_hyphen_middle_dot_png();
	this.instance_207.setTransform(3723,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_208 = new lib.water_hyphen_middle_dot_png();
	this.instance_208.setTransform(3627.6,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_209 = new lib.water_hyphen_middle_dot_png();
	this.instance_209.setTransform(3537.6,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_210 = new lib.water_hyphen_middle_dot_png();
	this.instance_210.setTransform(4006.4,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_211 = new lib.water_hyphen_middle_dot_png();
	this.instance_211.setTransform(3910.7,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_212 = new lib.water_hyphen_middle_dot_png();
	this.instance_212.setTransform(3817,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_213 = new lib.water_hyphen_middle_dot_png();
	this.instance_213.setTransform(3723,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_214 = new lib.water_hyphen_middle_dot_png();
	this.instance_214.setTransform(3627.6,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_215 = new lib.water_hyphen_middle_dot_png();
	this.instance_215.setTransform(3537.6,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_216 = new lib.water_hyphen_middle_dot_png();
	this.instance_216.setTransform(3451.9,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_217 = new lib.water_hyphen_middle_dot_png();
	this.instance_217.setTransform(3356.2,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_218 = new lib.water_hyphen_middle_dot_png();
	this.instance_218.setTransform(3262.5,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_219 = new lib.water_hyphen_middle_dot_png();
	this.instance_219.setTransform(3168.5,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_220 = new lib.water_hyphen_middle_dot_png();
	this.instance_220.setTransform(3073.1,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_221 = new lib.water_hyphen_middle_dot_png();
	this.instance_221.setTransform(2983.1,2574.1,1,1,0,0,0,49.5,49.5);

	this.instance_222 = new lib.water_hyphen_middle_dot_png();
	this.instance_222.setTransform(3451.9,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_223 = new lib.water_hyphen_middle_dot_png();
	this.instance_223.setTransform(3356.2,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_224 = new lib.water_hyphen_middle_dot_png();
	this.instance_224.setTransform(3262.5,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_225 = new lib.water_hyphen_middle_dot_png();
	this.instance_225.setTransform(3168.5,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_226 = new lib.water_hyphen_middle_dot_png();
	this.instance_226.setTransform(3073.1,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_227 = new lib.water_hyphen_middle_dot_png();
	this.instance_227.setTransform(4458.9,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_228 = new lib.water_hyphen_middle_dot_png();
	this.instance_228.setTransform(4458.9,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_229 = new lib.water_hyphen_middle_dot_png();
	this.instance_229.setTransform(4376.8,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_230 = new lib.water_hyphen_middle_dot_png();
	this.instance_230.setTransform(4281.1,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_231 = new lib.water_hyphen_middle_dot_png();
	this.instance_231.setTransform(4187.4,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_232 = new lib.water_hyphen_middle_dot_png();
	this.instance_232.setTransform(4093.4,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_233 = new lib.water_hyphen_middle_dot_png();
	this.instance_233.setTransform(4376.8,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_234 = new lib.water_hyphen_middle_dot_png();
	this.instance_234.setTransform(4281.1,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_235 = new lib.water_hyphen_middle_dot_png();
	this.instance_235.setTransform(4187.4,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_236 = new lib.water_hyphen_middle_dot_png();
	this.instance_236.setTransform(4093.4,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_237 = new lib.water_hyphen_middle_dot_png();
	this.instance_237.setTransform(4006.4,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_238 = new lib.water_hyphen_middle_dot_png();
	this.instance_238.setTransform(3910.7,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_239 = new lib.water_hyphen_middle_dot_png();
	this.instance_239.setTransform(3817,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_240 = new lib.water_hyphen_middle_dot_png();
	this.instance_240.setTransform(3723,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_241 = new lib.water_hyphen_middle_dot_png();
	this.instance_241.setTransform(3627.6,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_242 = new lib.water_hyphen_middle_dot_png();
	this.instance_242.setTransform(3537.6,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_243 = new lib.water_hyphen_middle_dot_png();
	this.instance_243.setTransform(4006.4,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_244 = new lib.water_hyphen_middle_dot_png();
	this.instance_244.setTransform(3910.7,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_245 = new lib.water_hyphen_middle_dot_png();
	this.instance_245.setTransform(3817,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_246 = new lib.water_hyphen_middle_dot_png();
	this.instance_246.setTransform(3723,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_247 = new lib.water_hyphen_middle_dot_png();
	this.instance_247.setTransform(3627.6,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_248 = new lib.water_hyphen_middle_dot_png();
	this.instance_248.setTransform(3537.6,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_249 = new lib.water_hyphen_middle_dot_png();
	this.instance_249.setTransform(3451.9,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_250 = new lib.water_hyphen_middle_dot_png();
	this.instance_250.setTransform(3356.2,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_251 = new lib.water_hyphen_middle_dot_png();
	this.instance_251.setTransform(3262.5,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_252 = new lib.water_hyphen_middle_dot_png();
	this.instance_252.setTransform(3168.5,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_253 = new lib.water_hyphen_middle_dot_png();
	this.instance_253.setTransform(3073.1,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_254 = new lib.water_hyphen_middle_dot_png();
	this.instance_254.setTransform(3451.9,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_255 = new lib.water_hyphen_middle_dot_png();
	this.instance_255.setTransform(3356.2,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_256 = new lib.water_hyphen_middle_dot_png();
	this.instance_256.setTransform(3262.5,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_257 = new lib.water_hyphen_middle_dot_png();
	this.instance_257.setTransform(3168.5,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_258 = new lib.water_hyphen_middle_dot_png();
	this.instance_258.setTransform(3073.1,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_259 = new lib.water_hyphen_middle_dot_png();
	this.instance_259.setTransform(4458.9,2249,1,1,0,0,0,49.5,49.5);

	this.instance_260 = new lib.water_hyphen_middle_dot_png();
	this.instance_260.setTransform(4458.9,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_261 = new lib.water_hyphen_middle_dot_png();
	this.instance_261.setTransform(4376.8,2249,1,1,0,0,0,49.5,49.5);

	this.instance_262 = new lib.water_hyphen_middle_dot_png();
	this.instance_262.setTransform(4281.1,2249,1,1,0,0,0,49.5,49.5);

	this.instance_263 = new lib.water_hyphen_middle_dot_png();
	this.instance_263.setTransform(4187.4,2249,1,1,0,0,0,49.5,49.5);

	this.instance_264 = new lib.water_hyphen_middle_dot_png();
	this.instance_264.setTransform(4093.4,2249,1,1,0,0,0,49.5,49.5);

	this.instance_265 = new lib.water_hyphen_middle_dot_png();
	this.instance_265.setTransform(4376.8,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_266 = new lib.water_hyphen_middle_dot_png();
	this.instance_266.setTransform(4281.1,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_267 = new lib.water_hyphen_middle_dot_png();
	this.instance_267.setTransform(4187.4,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_268 = new lib.water_hyphen_middle_dot_png();
	this.instance_268.setTransform(4093.4,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_269 = new lib.water_hyphen_middle_dot_png();
	this.instance_269.setTransform(4006.4,2249,1,1,0,0,0,49.5,49.5);

	this.instance_270 = new lib.water_hyphen_middle_dot_png();
	this.instance_270.setTransform(3910.7,2249,1,1,0,0,0,49.5,49.5);

	this.instance_271 = new lib.water_hyphen_middle_dot_png();
	this.instance_271.setTransform(3817,2249,1,1,0,0,0,49.5,49.5);

	this.instance_272 = new lib.water_hyphen_middle_dot_png();
	this.instance_272.setTransform(3723,2249,1,1,0,0,0,49.5,49.5);

	this.instance_273 = new lib.water_hyphen_middle_dot_png();
	this.instance_273.setTransform(3627.6,2249,1,1,0,0,0,49.5,49.5);

	this.instance_274 = new lib.water_hyphen_middle_dot_png();
	this.instance_274.setTransform(3537.6,2249,1,1,0,0,0,49.5,49.5);

	this.instance_275 = new lib.water_hyphen_middle_dot_png();
	this.instance_275.setTransform(4006.4,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_276 = new lib.water_hyphen_middle_dot_png();
	this.instance_276.setTransform(3910.7,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_277 = new lib.water_hyphen_middle_dot_png();
	this.instance_277.setTransform(3817,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_278 = new lib.water_hyphen_middle_dot_png();
	this.instance_278.setTransform(3723,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_279 = new lib.water_hyphen_middle_dot_png();
	this.instance_279.setTransform(3627.6,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_280 = new lib.water_hyphen_middle_dot_png();
	this.instance_280.setTransform(3537.6,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_281 = new lib.water_hyphen_middle_dot_png();
	this.instance_281.setTransform(3451.9,2249,1,1,0,0,0,49.5,49.5);

	this.instance_282 = new lib.water_hyphen_middle_dot_png();
	this.instance_282.setTransform(3356.2,2249,1,1,0,0,0,49.5,49.5);

	this.instance_283 = new lib.water_hyphen_middle_dot_png();
	this.instance_283.setTransform(3262.5,2249,1,1,0,0,0,49.5,49.5);

	this.instance_284 = new lib.water_hyphen_middle_dot_png();
	this.instance_284.setTransform(3168.5,2249,1,1,0,0,0,49.5,49.5);

	this.instance_285 = new lib.water_hyphen_middle_dot_png();
	this.instance_285.setTransform(3073.1,2249,1,1,0,0,0,49.5,49.5);

	this.instance_286 = new lib.water_hyphen_middle_dot_png();
	this.instance_286.setTransform(3451.9,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_287 = new lib.water_hyphen_middle_dot_png();
	this.instance_287.setTransform(3356.2,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_288 = new lib.water_hyphen_middle_dot_png();
	this.instance_288.setTransform(3262.5,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_289 = new lib.water_hyphen_middle_dot_png();
	this.instance_289.setTransform(3168.5,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_290 = new lib.water_hyphen_middle_dot_png();
	this.instance_290.setTransform(3073.1,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_291 = new lib.water_hyphen_middle_dot_png();
	this.instance_291.setTransform(4458.9,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_292 = new lib.water_hyphen_middle_dot_png();
	this.instance_292.setTransform(4458.9,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_293 = new lib.water_hyphen_middle_dot_png();
	this.instance_293.setTransform(4376.8,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_294 = new lib.water_hyphen_middle_dot_png();
	this.instance_294.setTransform(4281.1,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_295 = new lib.water_hyphen_middle_dot_png();
	this.instance_295.setTransform(4187.4,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_296 = new lib.water_hyphen_middle_dot_png();
	this.instance_296.setTransform(4093.4,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_297 = new lib.water_hyphen_middle_dot_png();
	this.instance_297.setTransform(4376.8,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_298 = new lib.water_hyphen_middle_dot_png();
	this.instance_298.setTransform(4281.1,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_299 = new lib.water_hyphen_middle_dot_png();
	this.instance_299.setTransform(4187.4,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_300 = new lib.water_hyphen_middle_dot_png();
	this.instance_300.setTransform(4093.4,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_301 = new lib.water_hyphen_middle_dot_png();
	this.instance_301.setTransform(4006.4,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_302 = new lib.water_hyphen_middle_dot_png();
	this.instance_302.setTransform(3910.7,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_303 = new lib.water_hyphen_middle_dot_png();
	this.instance_303.setTransform(3817,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_304 = new lib.water_hyphen_middle_dot_png();
	this.instance_304.setTransform(3723,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_305 = new lib.water_hyphen_middle_dot_png();
	this.instance_305.setTransform(3627.6,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_306 = new lib.water_hyphen_middle_dot_png();
	this.instance_306.setTransform(3537.6,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_307 = new lib.water_hyphen_middle_dot_png();
	this.instance_307.setTransform(4006.4,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_308 = new lib.water_hyphen_middle_dot_png();
	this.instance_308.setTransform(3910.7,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_309 = new lib.water_hyphen_middle_dot_png();
	this.instance_309.setTransform(3817,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_310 = new lib.water_hyphen_middle_dot_png();
	this.instance_310.setTransform(3723,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_311 = new lib.water_hyphen_middle_dot_png();
	this.instance_311.setTransform(3627.6,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_312 = new lib.water_hyphen_middle_dot_png();
	this.instance_312.setTransform(3537.6,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_313 = new lib.water_hyphen_middle_dot_png();
	this.instance_313.setTransform(3451.9,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_314 = new lib.water_hyphen_middle_dot_png();
	this.instance_314.setTransform(3356.2,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_315 = new lib.water_hyphen_middle_dot_png();
	this.instance_315.setTransform(3262.5,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_316 = new lib.water_hyphen_middle_dot_png();
	this.instance_316.setTransform(3168.5,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_317 = new lib.water_hyphen_middle_dot_png();
	this.instance_317.setTransform(3073.1,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_318 = new lib.water_hyphen_middle_dot_png();
	this.instance_318.setTransform(3451.9,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_319 = new lib.water_hyphen_middle_dot_png();
	this.instance_319.setTransform(3356.2,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_320 = new lib.water_hyphen_middle_dot_png();
	this.instance_320.setTransform(3262.5,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_321 = new lib.water_hyphen_middle_dot_png();
	this.instance_321.setTransform(3168.5,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_322 = new lib.water_hyphen_middle_dot_png();
	this.instance_322.setTransform(3073.1,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_323 = new lib.water_hyphen_top_dot_png();
	this.instance_323.setTransform(4376.8,1917.9,1,1,0,0,0,49.5,50);

	this.instance_324 = new lib.water_hyphen_top_dot_png();
	this.instance_324.setTransform(4458.9,1917.9,1,1,0,0,0,49.5,50);

	this.instance_325 = new lib.water_hyphen_top_dot_png();
	this.instance_325.setTransform(3910.7,1917.9,1,1,0,0,0,49.5,50);

	this.instance_326 = new lib.water_hyphen_top_dot_png();
	this.instance_326.setTransform(4006.4,1917.9,1,1,0,0,0,49.5,50);

	this.instance_327 = new lib.water_hyphen_top_dot_png();
	this.instance_327.setTransform(4094.5,1917.9,1,1,0,0,0,49.5,50);

	this.instance_328 = new lib.water_hyphen_top_dot_png();
	this.instance_328.setTransform(4190.1,1917.9,1,1,0,0,0,49.5,50);

	this.instance_329 = new lib.water_hyphen_top_dot_png();
	this.instance_329.setTransform(4283.9,1917.9,1,1,0,0,0,49.5,50);

	this.instance_330 = new lib.water_hyphen_top_dot_png();
	this.instance_330.setTransform(3444.4,1917.9,1,1,0,0,0,49.5,50);

	this.instance_331 = new lib.water_hyphen_top_dot_png();
	this.instance_331.setTransform(3540,1917.9,1,1,0,0,0,49.5,50);

	this.instance_332 = new lib.water_hyphen_top_dot_png();
	this.instance_332.setTransform(3628.1,1917.9,1,1,0,0,0,49.5,50);

	this.instance_333 = new lib.water_hyphen_top_dot_png();
	this.instance_333.setTransform(3723.8,1917.9,1,1,0,0,0,49.5,50);

	this.instance_334 = new lib.water_hyphen_top_dot_png();
	this.instance_334.setTransform(3817.5,1917.9,1,1,0,0,0,49.5,50);

	this.instance_335 = new lib.water_hyphen_top_dot_png();
	this.instance_335.setTransform(3078.7,1917.9,1,1,0,0,0,49.5,50);

	this.instance_336 = new lib.water_hyphen_top_dot_png();
	this.instance_336.setTransform(3166.8,1917.9,1,1,0,0,0,49.5,50);

	this.instance_337 = new lib.water_hyphen_top_dot_png();
	this.instance_337.setTransform(3262.5,1917.9,1,1,0,0,0,49.5,50);

	this.instance_338 = new lib.water_hyphen_top_dot_png();
	this.instance_338.setTransform(3356.2,1917.9,1,1,0,0,0,49.5,50);

	this.instance_339 = new lib.water_hyphen_bottom_dot_png();
	this.instance_339.setTransform(1081.9,2680.5,1,1,0,0,0,49.5,49.5);

	this.instance_340 = new lib.water_hyphen_bottom_dot_png();
	this.instance_340.setTransform(986.2,2680.5,1,1,0,0,0,49.5,49.5);

	this.instance_341 = new lib.water_hyphen_bottom_dot_png();
	this.instance_341.setTransform(894.1,2680.5,1,1,0,0,0,49.5,49.5);

	this.instance_342 = new lib.water_hyphen_bottom_dot_png();
	this.instance_342.setTransform(798.5,2680.5,1,1,0,0,0,49.5,49.5);

	this.instance_343 = new lib.water_hyphen_bottom_dot_png();
	this.instance_343.setTransform(708.7,2680.5,1,1,0,0,0,49.5,49.5);

	this.instance_344 = new lib.water_hyphen_bottom_dot_png();
	this.instance_344.setTransform(613.1,2680.5,1,1,0,0,0,49.5,49.5);

	this.instance_345 = new lib.water_hyphen_middle_dot_png();
	this.instance_345.setTransform(1081.9,2587.7,1,1,0,0,0,49.5,49.5);

	this.instance_346 = new lib.water_hyphen_middle_dot_png();
	this.instance_346.setTransform(986.2,2587.7,1,1,0,0,0,49.5,49.5);

	this.instance_347 = new lib.water_hyphen_middle_dot_png();
	this.instance_347.setTransform(892.5,2587.7,1,1,0,0,0,49.5,49.5);

	this.instance_348 = new lib.water_hyphen_middle_dot_png();
	this.instance_348.setTransform(798.5,2587.7,1,1,0,0,0,49.5,49.5);

	this.instance_349 = new lib.water_hyphen_middle_dot_png();
	this.instance_349.setTransform(703.1,2587.7,1,1,0,0,0,49.5,49.5);

	this.instance_350 = new lib.water_hyphen_middle_dot_png();
	this.instance_350.setTransform(613.1,2587.7,1,1,0,0,0,49.5,49.5);

	this.instance_351 = new lib.water_hyphen_middle_dot_png();
	this.instance_351.setTransform(1081.9,2530.6,1,1,0,0,0,49.5,49.5);

	this.instance_352 = new lib.water_hyphen_middle_dot_png();
	this.instance_352.setTransform(986.2,2530.6,1,1,0,0,0,49.5,49.5);

	this.instance_353 = new lib.water_hyphen_middle_dot_png();
	this.instance_353.setTransform(892.5,2530.6,1,1,0,0,0,49.5,49.5);

	this.instance_354 = new lib.water_hyphen_middle_dot_png();
	this.instance_354.setTransform(798.5,2530.6,1,1,0,0,0,49.5,49.5);

	this.instance_355 = new lib.water_hyphen_middle_dot_png();
	this.instance_355.setTransform(703.1,2530.6,1,1,0,0,0,49.5,49.5);

	this.instance_356 = new lib.water_hyphen_middle_dot_png();
	this.instance_356.setTransform(613.1,2530.6,1,1,0,0,0,49.5,49.5);

	this.instance_357 = new lib.water_hyphen_middle_dot_png();
	this.instance_357.setTransform(1081.9,2440.5,1,1,0,0,0,49.5,49.5);

	this.instance_358 = new lib.water_hyphen_middle_dot_png();
	this.instance_358.setTransform(986.2,2440.5,1,1,0,0,0,49.5,49.5);

	this.instance_359 = new lib.water_hyphen_middle_dot_png();
	this.instance_359.setTransform(892.5,2440.5,1,1,0,0,0,49.5,49.5);

	this.instance_360 = new lib.water_hyphen_middle_dot_png();
	this.instance_360.setTransform(798.5,2440.5,1,1,0,0,0,49.5,49.5);

	this.instance_361 = new lib.water_hyphen_middle_dot_png();
	this.instance_361.setTransform(703.1,2440.5,1,1,0,0,0,49.5,49.5);

	this.instance_362 = new lib.water_hyphen_middle_dot_png();
	this.instance_362.setTransform(613.1,2440.5,1,1,0,0,0,49.5,49.5);

	this.instance_363 = new lib.water_hyphen_middle_dot_png();
	this.instance_363.setTransform(986.2,2348,1,1,0,0,0,49.5,49.5);

	this.instance_364 = new lib.water_hyphen_middle_dot_png();
	this.instance_364.setTransform(892.5,2348,1,1,0,0,0,49.5,49.5);

	this.instance_365 = new lib.water_hyphen_middle_dot_png();
	this.instance_365.setTransform(798.5,2348,1,1,0,0,0,49.5,49.5);

	this.instance_366 = new lib.water_hyphen_middle_dot_png();
	this.instance_366.setTransform(703.1,2348,1,1,0,0,0,49.5,49.5);

	this.instance_367 = new lib.water_hyphen_middle_dot_png();
	this.instance_367.setTransform(613.1,2348,1,1,0,0,0,49.5,49.5);

	this.instance_368 = new lib.water_hyphen_middle_dot_png();
	this.instance_368.setTransform(986.2,2261.6,1,1,0,0,0,49.5,49.5);

	this.instance_369 = new lib.water_hyphen_middle_dot_png();
	this.instance_369.setTransform(892.5,2261.6,1,1,0,0,0,49.5,49.5);

	this.instance_370 = new lib.water_hyphen_middle_dot_png();
	this.instance_370.setTransform(798.5,2261.6,1,1,0,0,0,49.5,49.5);

	this.instance_371 = new lib.water_hyphen_middle_dot_png();
	this.instance_371.setTransform(703.1,2261.6,1,1,0,0,0,49.5,49.5);

	this.instance_372 = new lib.water_hyphen_middle_dot_png();
	this.instance_372.setTransform(613.1,2261.6,1,1,0,0,0,49.5,49.5);

	this.instance_373 = new lib.water_hyphen_middle_dot_png();
	this.instance_373.setTransform(986.2,2173,1,1,0,0,0,49.5,49.5);

	this.instance_374 = new lib.water_hyphen_middle_dot_png();
	this.instance_374.setTransform(892.5,2173,1,1,0,0,0,49.5,49.5);

	this.instance_375 = new lib.water_hyphen_middle_dot_png();
	this.instance_375.setTransform(798.5,2173,1,1,0,0,0,49.5,49.5);

	this.instance_376 = new lib.water_hyphen_middle_dot_png();
	this.instance_376.setTransform(703.1,2173,1,1,0,0,0,49.5,49.5);

	this.instance_377 = new lib.water_hyphen_middle_dot_png();
	this.instance_377.setTransform(613.1,2173,1,1,0,0,0,49.5,49.5);

	this.instance_378 = new lib.water_hyphen_middle_dot_png();
	this.instance_378.setTransform(986.2,2080.5,1,1,0,0,0,49.5,49.5);

	this.instance_379 = new lib.water_hyphen_middle_dot_png();
	this.instance_379.setTransform(892.5,2080.5,1,1,0,0,0,49.5,49.5);

	this.instance_380 = new lib.water_hyphen_middle_dot_png();
	this.instance_380.setTransform(798.5,2080.5,1,1,0,0,0,49.5,49.5);

	this.instance_381 = new lib.water_hyphen_middle_dot_png();
	this.instance_381.setTransform(703.1,2080.5,1,1,0,0,0,49.5,49.5);

	this.instance_382 = new lib.water_hyphen_middle_dot_png();
	this.instance_382.setTransform(613.1,2080.5,1,1,0,0,0,49.5,49.5);

	this.instance_383 = new lib.water_hyphen_middle_dot_png();
	this.instance_383.setTransform(986.2,1994.1,1,1,0,0,0,49.5,49.5);

	this.instance_384 = new lib.water_hyphen_middle_dot_png();
	this.instance_384.setTransform(892.5,1994.1,1,1,0,0,0,49.5,49.5);

	this.instance_385 = new lib.water_hyphen_middle_dot_png();
	this.instance_385.setTransform(798.5,1994.1,1,1,0,0,0,49.5,49.5);

	this.instance_386 = new lib.water_hyphen_middle_dot_png();
	this.instance_386.setTransform(703.1,1994.1,1,1,0,0,0,49.5,49.5);

	this.instance_387 = new lib.water_hyphen_middle_dot_png();
	this.instance_387.setTransform(613.1,1994.1,1,1,0,0,0,49.5,49.5);

	this.instance_388 = new lib.water_hyphen_middle_dot_png();
	this.instance_388.setTransform(986.2,1901.6,1,1,0,0,0,49.5,49.5);

	this.instance_389 = new lib.water_hyphen_middle_dot_png();
	this.instance_389.setTransform(892.5,1901.6,1,1,0,0,0,49.5,49.5);

	this.instance_390 = new lib.water_hyphen_middle_dot_png();
	this.instance_390.setTransform(798.5,1901.6,1,1,0,0,0,49.5,49.5);

	this.instance_391 = new lib.water_hyphen_middle_dot_png();
	this.instance_391.setTransform(703.1,1901.6,1,1,0,0,0,49.5,49.5);

	this.instance_392 = new lib.water_hyphen_middle_dot_png();
	this.instance_392.setTransform(613.1,1901.6,1,1,0,0,0,49.5,49.5);

	this.instance_393 = new lib.water_hyphen_middle_dot_png();
	this.instance_393.setTransform(986.2,1824,1,1,0,0,0,49.5,49.5);

	this.instance_394 = new lib.water_hyphen_middle_dot_png();
	this.instance_394.setTransform(892.5,1824,1,1,0,0,0,49.5,49.5);

	this.instance_395 = new lib.water_hyphen_middle_dot_png();
	this.instance_395.setTransform(798.5,1824,1,1,0,0,0,49.5,49.5);

	this.instance_396 = new lib.water_hyphen_middle_dot_png();
	this.instance_396.setTransform(703.1,1824,1,1,0,0,0,49.5,49.5);

	this.instance_397 = new lib.water_hyphen_middle_dot_png();
	this.instance_397.setTransform(613.1,1824,1,1,0,0,0,49.5,49.5);

	this.instance_398 = new lib.water_hyphen_middle_dot_png();
	this.instance_398.setTransform(986.2,1731.5,1,1,0,0,0,49.5,49.5);

	this.instance_399 = new lib.water_hyphen_middle_dot_png();
	this.instance_399.setTransform(892.5,1731.5,1,1,0,0,0,49.5,49.5);

	this.instance_400 = new lib.water_hyphen_middle_dot_png();
	this.instance_400.setTransform(798.5,1731.5,1,1,0,0,0,49.5,49.5);

	this.instance_401 = new lib.water_hyphen_middle_dot_png();
	this.instance_401.setTransform(703.1,1731.5,1,1,0,0,0,49.5,49.5);

	this.instance_402 = new lib.water_hyphen_middle_dot_png();
	this.instance_402.setTransform(613.1,1731.5,1,1,0,0,0,49.5,49.5);

	this.instance_403 = new lib.water_hyphen_top_dot_png();
	this.instance_403.setTransform(613.1,1638,1,1,0,0,0,49.5,50);

	this.instance_404 = new lib.water_hyphen_top_dot_png();
	this.instance_404.setTransform(708.7,1638,1,1,0,0,0,49.5,50);

	this.instance_405 = new lib.water_hyphen_top_dot_png();
	this.instance_405.setTransform(796.8,1638,1,1,0,0,0,49.5,50);

	this.instance_406 = new lib.water_hyphen_top_dot_png();
	this.instance_406.setTransform(892.5,1638,1,1,0,0,0,49.5,50);

	this.instance_407 = new lib.water_hyphen_top_dot_png();
	this.instance_407.setTransform(986.2,1638,1,1,0,0,0,49.5,50);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(5,3.5,1,1,0,0,0,5,3.5);

	this.instance_408 = new lib.hay_hyphen_cube_dot_png();
	this.instance_408.setTransform(505.1,-140.7,1.074,1.175,0,0,0,45.5,46.5);

	this.instance_409 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_409.setTransform(1.8,-134.2,1,1,0,0,0,200,200);

	this.instance_410 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_410.setTransform(1.8,-506.8,1,1,0,0,0,200,200);

	this.instance_411 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_411.setTransform(1.8,-804.4,1,1,0,0,0,200,200);

	this.instance_412 = new lib.woodenbox_dot_png();
	this.instance_412.setTransform(1673.7,2447.2,1.64,1.64,89,0,0,114.5,84.5);

	this.instance_413 = new lib.woodencrate_dot_png();
	this.instance_413.setTransform(2856.2,2391,0.933,0.933,90,0,0,234.2,98);

	this.instance_414 = new lib.water_hyphen_middle_dot_png();
	this.instance_414.setTransform(2983.1,2335.2,1,1,0,0,0,49.5,49.5);

	this.instance_415 = new lib.water_hyphen_middle_dot_png();
	this.instance_415.setTransform(2983.1,2412.8,1,1,0,0,0,49.5,49.5);

	this.instance_416 = new lib.water_hyphen_middle_dot_png();
	this.instance_416.setTransform(2983.1,2496.5,1,1,0,0,0,49.5,49.5);

	this.instance_417 = new lib.woodencrate_dot_png();
	this.instance_417.setTransform(2723.1,2456.1,0.66,0.66,87.2,0,0,234.3,97.9);

	this.instance_418 = new lib.woodenbox_dot_png();
	this.instance_418.setTransform(2586.1,2431.7,0.826,0.826,0,0,0,114.4,84.5);

	this.instance_419 = new lib.woodenbox_dot_png();
	this.instance_419.setTransform(2277.7,2507.3,0.852,0.852,93.5,0,0,114.5,84.5);

	this.instance_420 = new lib.woodenbox_dot_png();
	this.instance_420.setTransform(2148.8,2525,0.852,0.852,89.8,0,0,114.5,84.5);

	this.instance_421 = new lib.woodencrate_dot_png();
	this.instance_421.setTransform(1943.2,2498.1,0.997,0.997,180,0,0,234,98);

	this.instance_422 = new lib.woodencrate_dot_png();
	this.instance_422.setTransform(1348.1,2318.6,0.997,0.997,176.8,0,0,234,98);

	this.instance_423 = new lib.water_hyphen_middle_dot_png();
	this.instance_423.setTransform(1081.9,2348,1,1,0,0,0,49.5,49.5);

	this.instance_424 = new lib.metalbox_dot_png();
	this.instance_424.setTransform(1409.4,2210.4,0.846,0.846,2.3,0,0,341.5,61.2);

	this.instance_425 = new lib.water_hyphen_middle_dot_png();
	this.instance_425.setTransform(1081.9,2261.6,1,1,0,0,0,49.5,49.5);

	this.instance_426 = new lib.woodencrate_dot_png();
	this.instance_426.setTransform(1210.6,1918.5,1.166,0.989,-87.8,0,0,234.1,97.9);

	this.instance_427 = new lib.metalbox_dot_png();
	this.instance_427.setTransform(1301.8,1944.6,0.716,0.716,83.7,0,0,341.7,61.2);

	this.instance_428 = new lib.water_hyphen_middle_dot_png();
	this.instance_428.setTransform(1081.9,1731.5,1,1,0,0,0,49.5,49.5);

	this.instance_429 = new lib.water_hyphen_middle_dot_png();
	this.instance_429.setTransform(1081.9,1824,1,1,0,0,0,49.5,49.5);

	this.instance_430 = new lib.water_hyphen_middle_dot_png();
	this.instance_430.setTransform(1081.9,1901.6,1,1,0,0,0,49.5,49.5);

	this.instance_431 = new lib.water_hyphen_middle_dot_png();
	this.instance_431.setTransform(1081.9,1994.1,1,1,0,0,0,49.5,49.5);

	this.instance_432 = new lib.water_hyphen_middle_dot_png();
	this.instance_432.setTransform(1081.9,2080.5,1,1,0,0,0,49.5,49.5);

	this.instance_433 = new lib.water_hyphen_middle_dot_png();
	this.instance_433.setTransform(1081.9,2173,1,1,0,0,0,49.5,49.5);

	this.instance_434 = new lib.water_hyphen_top_dot_png();
	this.instance_434.setTransform(1081.9,1638,1,1,0,0,0,49.5,50);

	this.instance_435 = new lib.woodenbox_dot_png();
	this.instance_435.setTransform(1442.1,2039.1,1.249,1.249,-90,0,0,114.4,84.5);

	this.instance_436 = new lib.woodenbox_dot_png();
	this.instance_436.setTransform(1367,1847.1,0.707,0.707,1.6,0,0,114.4,84.5);

	this.instance_437 = new lib.woodenbox_dot_png();
	this.instance_437.setTransform(1336.1,1742.6,0.887,0.887,2.8,0,0,114.4,84.5);

	this.instance_438 = new lib.woodencrate_dot_png();
	this.instance_438.setTransform(1847.2,2348.6,0.844,0.844,175.3,0,0,234,98);

	this.instance_439 = new lib.woodenbox_dot_png();
	this.instance_439.setTransform(2704.7,2295.2,1.16,1.16,90.7,0,0,114.5,84.4);

	this.instance_440 = new lib.woodenbox_dot_png();
	this.instance_440.setTransform(2803.2,2089,1.222,1.222,-175.5,0,0,114.5,84.5);

	this.instance_441 = new lib.metalbar_dot_png();
	this.instance_441.setTransform(2295.7,2448.5,1.071,1.071,0,0,0,245,27);

	this.instance_442 = new lib.metalbar_dot_png();
	this.instance_442.setTransform(2282.7,2406,1.071,1.071,-2.2,0,0,245.1,27.1);

	this.instance_443 = new lib.metalbar_dot_png();
	this.instance_443.setTransform(2182.6,2371.2,0.706,0.706,-0.2,0,0,245.1,26.9);

	this.instance_444 = new lib.metalbar_dot_png();
	this.instance_444.setTransform(2490.2,2368.8,0.706,0.706,2,0,0,245.1,26.9);

	this.instance_445 = new lib.metalbox_dot_png();
	this.instance_445.setTransform(2433.2,2326.4,0.636,0.636,0.8,0,0,341.4,61.4);

	this.instance_446 = new lib.metalbox_dot_png();
	this.instance_446.setTransform(2458.3,2269,0.636,0.636,-3.2,0,0,341.5,61.4);

	this.instance_447 = new lib.woodenbox_dot_png();
	this.instance_447.setTransform(2138.9,2307.3,1.01,1.291,-179.5,0,0,114.5,84.5);

	this.instance_448 = new lib.woodencrate_dot_png();
	this.instance_448.setTransform(2486.1,2173.5,0.844,0.844,-179.7,0,0,234,98);

	this.instance_449 = new lib.woodencrate_dot_png();
	this.instance_449.setTransform(2815.8,2057.5,0.844,0.844,-91.7,0,0,233.9,98);

	this.instance_450 = new lib.woodencrate_dot_png();
	this.instance_450.setTransform(2883.5,2036.4,0.844,0.844,-88.7,0,0,233.9,98.1);

	this.instance_451 = new lib.water_hyphen_top_dot_png();
	this.instance_451.setTransform(2983.1,1917.9,1,1,0,0,0,49.5,50);

	this.instance_452 = new lib.water_hyphen_middle_dot_png();
	this.instance_452.setTransform(2983.1,2011.1,1,1,0,0,0,49.5,49.5);

	this.instance_453 = new lib.water_hyphen_middle_dot_png();
	this.instance_453.setTransform(2983.1,2088.7,1,1,0,0,0,49.5,49.5);

	this.instance_454 = new lib.water_hyphen_middle_dot_png();
	this.instance_454.setTransform(2983.1,2171.4,1,1,0,0,0,49.5,49.5);

	this.instance_455 = new lib.water_hyphen_middle_dot_png();
	this.instance_455.setTransform(2983.1,2249,1,1,0,0,0,49.5,49.5);

	this.instance_456 = new lib.woodenbox_dot_png();
	this.instance_456.setTransform(1750,2213,0.823,0.823,176.7,0,0,114.5,84.5);

	this.instance_457 = new lib.woodenbox_dot_png();
	this.instance_457.setTransform(1608.5,2105.8,0.823,0.823,-176,0,0,114.5,84.5);

	this.instance_458 = new lib.woodenbox_dot_png();
	this.instance_458.setTransform(1760.4,2071.2,0.823,0.823,-87.8,0,0,114.5,84.5);

	this.instance_459 = new lib.woodenbox_dot_png();
	this.instance_459.setTransform(1617.6,1970.4,1.072,1.072,-87.8,0,0,114.5,84.4);

	this.instance_460 = new lib.woodenbox_dot_png();
	this.instance_460.setTransform(1503.4,1850.5,0.823,0.823,-176,0,0,114.5,84.5);

	this.instance_461 = new lib.woodencrate_dot_png();
	this.instance_461.setTransform(2588.2,2046.4,0.844,0.844,3.5,0,0,233.9,98);

	this.instance_462 = new lib.metalbox_dot_png();
	this.instance_462.setTransform(2052.3,2270.6,0.777,0.777,-0.2,0,0,341.4,61.3);

	this.instance_463 = new lib.metalbox_dot_png();
	this.instance_463.setTransform(2057.4,2192.6,0.777,0.777,-177.7,0,0,341.5,61.3);

	this.instance_464 = new lib.woodencrate_dot_png();
	this.instance_464.setTransform(2017,2088.1,1.009,1.009,-1.2,0,0,233.8,98);

	this.instance_465 = new lib.woodenbox_dot_png();
	this.instance_465.setTransform(2321.1,2084.3,0.96,0.96,-179,0,0,114.5,84.7);

	this.instance_466 = new lib.woodenbox_dot_png();
	this.instance_466.setTransform(2666,1887.3,0.96,0.96,87.9,0,0,114.6,84.7);

	this.instance_467 = new lib.woodenbox_dot_png();
	this.instance_467.setTransform(2855.3,1767.4,1.019,1.019,86.9,0,0,114.7,84.7);

	this.instance_468 = new lib.woodenbox_dot_png();
	this.instance_468.setTransform(2485,1956.4,1.046,1.046,-179,0,0,114.5,84.6);

	this.instance_469 = new lib.woodencrate_dot_png();
	this.instance_469.setTransform(1786.7,1943.8,0.743,0.743,-1,0,0,233.8,98);

	this.instance_470 = new lib.woodencrate_dot_png();
	this.instance_470.setTransform(1963.4,1947.8,0.743,0.743,90,0,0,233.8,98);

	this.instance_471 = new lib.woodencrate_dot_png();
	this.instance_471.setTransform(2082.4,1973,0.743,0.743,85.6,0,0,233.8,98.1);

	this.instance_472 = new lib.woodenbox_dot_png();
	this.instance_472.setTransform(2206.6,1900.1,1.072,1.072,-87.8,0,0,114.5,84.4);

	this.instance_473 = new lib.woodenbox_dot_png();
	this.instance_473.setTransform(2375.4,1926.9,1.072,1.072,-92.3,0,0,114.6,84.4);

	this.instance_474 = new lib.woodenbox_dot_png();
	this.instance_474.setTransform(1491.2,1762.1,1.072,1.072,-94.8,0,0,114.5,84.4);

	this.instance_475 = new lib.woodenbox_dot_png();
	this.instance_475.setTransform(1852.2,1838.3,0.823,0.823,-176,0,0,114.5,84.5);

	this.instance_476 = new lib.woodencrate_dot_png();
	this.instance_476.setTransform(1684.6,1820,0.743,0.743,-1,0,0,233.8,98);

	this.instance_477 = new lib.woodencrate_dot_png();
	this.instance_477.setTransform(1650,1700.8,0.686,0.686,-175.2,0,0,233.8,98);

	this.instance_478 = new lib.woodenbox_dot_png();
	this.instance_478.setTransform(2712.4,1762.5,1.046,1.046,-89.8,0,0,114.5,84.6);

	this.instance_479 = new lib.metalbar_dot_png();
	this.instance_479.setTransform(2371,1858.4,1.071,1.071,-0.2,0,0,245.1,27.1);

	this.instance_480 = new lib.metalbar_dot_png();
	this.instance_480.setTransform(2431.9,1826.3,1.255,1.255,-6.2,0,0,245.1,27.1);

	this.instance_481 = new lib.metalbox_dot_png();
	this.instance_481.setTransform(2039.2,1778.8,0.583,0.583,-177.7,0,0,341.4,61.4);

	this.instance_482 = new lib.metalbox_dot_png();
	this.instance_482.setTransform(2489.4,1766.3,0.583,0.583,175.8,0,0,341.4,61.3);

	this.instance_483 = new lib.woodenbox_dot_png();
	this.instance_483.setTransform(2275.3,1731.2,0.823,0.823,178.5,0,0,114.5,84.5);

	this.instance_484 = new lib.woodencrate_dot_png();
	this.instance_484.setTransform(2499.2,1735,0.743,0.743,-1,0,0,233.8,98);

	this.instance_485 = new lib.woodenbox_dot_png();
	this.instance_485.setTransform(2139.5,1727.3,0.701,0.701,-71.5,0,0,114.4,84.5);

	this.instance_486 = new lib.woodenbox_dot_png();
	this.instance_486.setTransform(2038.2,1725.1,0.701,0.701,-87.7,0,0,114.4,84.5);

	this.instance_487 = new lib.woodencrate_dot_png();
	this.instance_487.setTransform(1887.5,1715.9,0.511,0.511,-1.2,0,0,233.8,97.9);

	this.instance_488 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_488.setTransform(4864.8,1288.6,1,1,0,0,0,200,200);

	this.instance_489 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_489.setTransform(4699,1281.1,1,1,0,0,0,200,200);

	this.instance_490 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_490.setTransform(4699,1666.1,1,1,0,0,0,200,200);

	this.instance_491 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_491.setTransform(4864.8,1667.9,1,1,0,0,0,200,200);

	this.instance_492 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_492.setTransform(4864.8,2057.6,1,1,0,0,0,200,200);

	this.instance_493 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_493.setTransform(4864.8,2431,1,1,0,0,0,200,200);

	this.instance_494 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_494.setTransform(4864.8,2629.3,1,1,0,0,0,200,200);

	this.instance_495 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_495.setTransform(5385.2,2597.5,1,1,0,0,0,200,200);

	this.instance_496 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_496.setTransform(5587.2,2205.5,1,1,0,0,0,200,200);

	this.instance_497 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_497.setTransform(5385.2,2205.5,1,1,0,0,0,200,200);

	this.instance_498 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_498.setTransform(5587.2,1829.5,1,1,0,0,0,200,200);

	this.instance_499 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_499.setTransform(5385.2,1829.5,1,1,0,0,0,200,200);

	this.instance_500 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_500.setTransform(2131.8,715.7,1,1,0,0,0,200,200);

	this.instance_501 = new lib.water_hyphen_top_dot_png();
	this.instance_501.setTransform(1098.2,1637.4,1,1,0,0,0,49.5,50);

	this.instance_502 = new lib.endpole_dot_png();
	this.instance_502.setTransform(4988.6,1001.5,1,1,0,0,0,8,39.5);

	this.instance_503 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_503.setTransform(5044.9,1288.6,1,1,0,0,0,200,200);

	this.instance_504 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_504.setTransform(5044.9,1667.9,1,1,0,0,0,200,200);

	this.instance_505 = new lib.outsidebarn_hyphen_repeat_dot_png();
	this.instance_505.setTransform(5044.9,2057.6,1,1,0,0,0,200,200);

	this.instance_506 = new lib.hazardsign_dot_png();
	this.instance_506.setTransform(3141.8,1818.4,0.558,0.558,0,0,0,51,46.1);

	this.instance_507 = new lib.endpole_dot_png();
	this.instance_507.setTransform(3143.3,1857.9,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_508 = new lib.hazardsign_dot_png();
	this.instance_508.setTransform(4044.8,1830.9,0.558,0.558,0,0,0,51,46.1);

	this.instance_509 = new lib.endpole_dot_png();
	this.instance_509.setTransform(4046.3,1870.4,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_510 = new lib.hazardsign_dot_png();
	this.instance_510.setTransform(790.4,1545.7,0.558,0.558,0,0,0,51,46.1);

	this.instance_511 = new lib.endpole_dot_png();
	this.instance_511.setTransform(791.9,1585.2,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_512 = new lib.hazardsign_dot_png();
	this.instance_512.setTransform(1776,1055.4,0.558,0.558,0,0,0,51,46.1);

	this.instance_513 = new lib.endpole_dot_png();
	this.instance_513.setTransform(1777.5,1094.9,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_514 = new lib.hazardsign_dot_png();
	this.instance_514.setTransform(1319,1062.8,0.558,0.558,0,0,0,51,46.1);

	this.instance_515 = new lib.endpole_dot_png();
	this.instance_515.setTransform(1320.5,1102.3,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_516 = new lib.hazardsign_dot_png();
	this.instance_516.setTransform(1284.6,560.3,0.558,0.558,0,0,0,51,46.1);

	this.instance_517 = new lib.endpole_dot_png();
	this.instance_517.setTransform(1286.1,599.8,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_518 = new lib.hazardsign_dot_png();
	this.instance_518.setTransform(927.7,560.3,0.558,0.558,0,0,0,51,46.1);

	this.instance_519 = new lib.endpole_dot_png();
	this.instance_519.setTransform(929.2,599.8,0.609,0.609,0,0,0,8.2,39.5);

	this.addChild(this.instance_519,this.instance_518,this.instance_517,this.instance_516,this.instance_515,this.instance_514,this.instance_513,this.instance_512,this.instance_511,this.instance_510,this.instance_509,this.instance_508,this.instance_507,this.instance_506,this.instance_505,this.instance_504,this.instance_503,this.instance_502,this.instance_501,this.instance_500,this.instance_499,this.instance_498,this.instance_497,this.instance_496,this.instance_495,this.instance_494,this.instance_493,this.instance_492,this.instance_491,this.instance_490,this.instance_489,this.instance_488,this.instance_487,this.instance_486,this.instance_485,this.instance_484,this.instance_483,this.instance_482,this.instance_481,this.instance_480,this.instance_479,this.instance_478,this.instance_477,this.instance_476,this.instance_475,this.instance_474,this.instance_473,this.instance_472,this.instance_471,this.instance_470,this.instance_469,this.instance_468,this.instance_467,this.instance_466,this.instance_465,this.instance_464,this.instance_463,this.instance_462,this.instance_461,this.instance_460,this.instance_459,this.instance_458,this.instance_457,this.instance_456,this.instance_455,this.instance_454,this.instance_453,this.instance_452,this.instance_451,this.instance_450,this.instance_449,this.instance_448,this.instance_447,this.instance_446,this.instance_445,this.instance_444,this.instance_443,this.instance_442,this.instance_441,this.instance_440,this.instance_439,this.instance_438,this.instance_437,this.instance_436,this.instance_435,this.instance_434,this.instance_433,this.instance_432,this.instance_431,this.instance_430,this.instance_429,this.instance_428,this.instance_427,this.instance_426,this.instance_425,this.instance_424,this.instance_423,this.instance_422,this.instance_421,this.instance_420,this.instance_419,this.instance_418,this.instance_417,this.instance_416,this.instance_415,this.instance_414,this.instance_413,this.instance_412,this.instance_411,this.instance_410,this.instance_409,this.instance_408,this.isDisp,this.instance_407,this.instance_406,this.instance_405,this.instance_404,this.instance_403,this.instance_402,this.instance_401,this.instance_400,this.instance_399,this.instance_398,this.instance_397,this.instance_396,this.instance_395,this.instance_394,this.instance_393,this.instance_392,this.instance_391,this.instance_390,this.instance_389,this.instance_388,this.instance_387,this.instance_386,this.instance_385,this.instance_384,this.instance_383,this.instance_382,this.instance_381,this.instance_380,this.instance_379,this.instance_378,this.instance_377,this.instance_376,this.instance_375,this.instance_374,this.instance_373,this.instance_372,this.instance_371,this.instance_370,this.instance_369,this.instance_368,this.instance_367,this.instance_366,this.instance_365,this.instance_364,this.instance_363,this.instance_362,this.instance_361,this.instance_360,this.instance_359,this.instance_358,this.instance_357,this.instance_356,this.instance_355,this.instance_354,this.instance_353,this.instance_352,this.instance_351,this.instance_350,this.instance_349,this.instance_348,this.instance_347,this.instance_346,this.instance_345,this.instance_344,this.instance_343,this.instance_342,this.instance_341,this.instance_340,this.instance_339,this.instance_338,this.instance_337,this.instance_336,this.instance_335,this.instance_334,this.instance_333,this.instance_332,this.instance_331,this.instance_330,this.instance_329,this.instance_328,this.instance_327,this.instance_326,this.instance_325,this.instance_324,this.instance_323,this.instance_322,this.instance_321,this.instance_320,this.instance_319,this.instance_318,this.instance_317,this.instance_316,this.instance_315,this.instance_314,this.instance_313,this.instance_312,this.instance_311,this.instance_310,this.instance_309,this.instance_308,this.instance_307,this.instance_306,this.instance_305,this.instance_304,this.instance_303,this.instance_302,this.instance_301,this.instance_300,this.instance_299,this.instance_298,this.instance_297,this.instance_296,this.instance_295,this.instance_294,this.instance_293,this.instance_292,this.instance_291,this.instance_290,this.instance_289,this.instance_288,this.instance_287,this.instance_286,this.instance_285,this.instance_284,this.instance_283,this.instance_282,this.instance_281,this.instance_280,this.instance_279,this.instance_278,this.instance_277,this.instance_276,this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.level19platform3,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.level19platform2,this.level19platform1,this.level19platform5,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.2,-1411.1,5985.4,4240.4);


(lib.level19 = function() {
	this.initialize();

	// Layer 3
	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(1134.1,357.3,22.869,12.933,0,0,0,0.1,0.3);

	// Layer 1
	this.instance = new lib.skyhook();
	this.instance.setTransform(400,50,0.1,0.1);

	this.instance_1 = new lib.skyhook();
	this.instance_1.setTransform(600,150,0.1,0.1);

	this.instance_2 = new lib.skyhook();
	this.instance_2.setTransform(650,200,0.1,0.1);

	this.instance_3 = new lib.skyhook();
	this.instance_3.setTransform(550,150,0.1,0.1);

	this.instance_4 = new lib.skyhook();
	this.instance_4.setTransform(500,100,0.1,0.1);

	this.instance_5 = new lib.skyhook();
	this.instance_5.setTransform(450,50,0.1,0.1);

	this.instance_6 = new lib.skyhook();
	this.instance_6.setTransform(350,50,0.1,0.1);

	this.instance_7 = new lib.skyhook();
	this.instance_7.setTransform(300,0,0.1,0.1);

	this.p1 = new lib.shaun();
	this.p1.setTransform(130,-70,0.238,0.66);

	this.level19platform5_ref = new lib.platformRef();
	this.level19platform5_ref.setTransform(1524,535,2.099,0.378,-90);

	this.level19platform5 = new lib.movingPlatform();
	this.level19platform5.setTransform(1520.1,640,3.8,0.4);

	this.instance_8 = new lib.wall();
	this.instance_8.setTransform(370,457.5,0.199,0.25);

	this.level19platform3_switch = new lib.item4Switch_switch();
	this.level19platform3_switch.setTransform(677.7,613.3,0.25,0.25,0,0,0,-1.6,-3.2);

	this.level19platform2_switch = new lib.item4Switch_switch();
	this.level19platform2_switch.setTransform(616.5,613,0.25,0.25,0,0,0,-1.6,-3.2);

	this.level19platform1_switch = new lib.item4Switch_switch();
	this.level19platform1_switch.setTransform(551.6,613.3,0.25,0.25,0,0,0,-1.6,-3.2);

	this.level19platform3_ref = new lib.platformRef();
	this.level19platform3_ref.setTransform(447.2,594.9,1.47,0.413,-168.7);

	this.level19platform2_ref = new lib.platformRef();
	this.level19platform2_ref.setTransform(290.2,505,1.901,0.306,-90);

	this.level19platform1_ref = new lib.platformRef();
	this.level19platform1_ref.setTransform(484.5,409.4,1.69,0.413,180);

	this.instance_9 = new lib.deadZone();
	this.instance_9.setTransform(580.8,457.2,0.249,4,90,0,0,0,-0.2);

	this.level19platform3 = new lib.movingPlatform();
	this.level19platform3.setTransform(377.1,578,1,0.2);

	this.level19platform2 = new lib.movingPlatform();
	this.level19platform2.setTransform(287.5,410,1.35,0.2);

	this.level19platform1 = new lib.movingPlatform();
	this.level19platform1.setTransform(570,410,1,0.2);

	this.instance_10 = new lib.deadZone();
	this.instance_10.setTransform(411.9,253.2,0.249,3.782,90,0,0,0,-0.2);

	this.instance_11 = new lib.wall();
	this.instance_11.setTransform(2009.2,927.2,4.176,1,180,0,0,-0.1,0.1);

	this.instance_12 = new lib.wall();
	this.instance_12.setTransform(2254.7,925.2,2.653,1,90);

	this.instance_13 = new lib.wall();
	this.instance_13.setTransform(1702.9,1045.9,12,1.385,180);

	this.instance_14 = new lib.wall();
	this.instance_14.setTransform(1125.1,943.3,2.653,1,90);

	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(670.9,935.5,10,3.766,180,0,0,0.1,0.1);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(1302.9,-325.3,20,1);

	this.instance_17 = new lib.wall();
	this.instance_17.setTransform(421.5,-325.5,9.001,1);

	this.instance_18 = new lib.floor();
	this.instance_18.setTransform(1920.1,425,3.402,0.25);

	this.instance_19 = new lib.wall();
	this.instance_19.setTransform(849,76.1,9,1.5,90,0,0,0.1,0.1);

	this.instance_20 = new lib.floor();
	this.instance_20.setTransform(762.5,250,1,0.25);

	this.instance_21 = new lib.floor();
	this.instance_21.setTransform(200.1,-37.1,0.25,0.5);

	this.instance_22 = new lib.floor();
	this.instance_22.setTransform(162.5,0,1.749,0.25);

	this.instance_23 = new lib.star();
	this.instance_23.setTransform(1775,575,0.25,0.249);

	this.instance_24 = new lib.wall();
	this.instance_24.setTransform(2189.7,297.1,11.618,2.297,90,0,0,0.1,0.1);

	this.instance_25 = new lib.wall();
	this.instance_25.setTransform(1954.2,650.5,4.561,3.094,90,0,0,0.1,0.1);

	this.instance_26 = new lib.deadZone();
	this.instance_26.setTransform(1476.6,867,2.333,7.988,90,0,0,0.1,-0.1);

	this.instance_27 = new lib.star();
	this.instance_27.setTransform(425,275,0.25,0.249);

	this.instance_28 = new lib.floor();
	this.instance_28.setTransform(2049.2,798.2,1.314,0.157);

	this.instance_29 = new lib.wall();
	this.instance_29.setTransform(2100,839.9,0.749,2.113,90,0,0,0.1,0.1);

	this.instance_30 = new lib.star();
	this.instance_30.setTransform(750,214.5,0.25,0.249);

	this.instance_31 = new lib.floor();
	this.instance_31.setTransform(811.4,650,7.274,0.25);

	this.instance_32 = new lib.wall();
	this.instance_32.setTransform(25,150,9.001,1,90);

	this.instance_33 = new lib.exit();
	this.instance_33.setTransform(2003,365.9,0.914,0.449,90);

	this.instance_34 = new lib.wall();
	this.instance_34.setTransform(87.9,569.7,11.399,2.742,90);

	this.instance_35 = new lib.floor();
	this.instance_35.setTransform(187.5,125,1,0.25);

	this.instance_36 = new lib.deadZone();
	this.instance_36.setTransform(324.8,890.9,5.066,3.007,90,0,0,-0.1,-0.1);

	this.instance_37 = new lib.wall();
	this.instance_37.setTransform(699.1,700.1,1,9.5,90,0,0,0.1,0.1);

	// Layer 2
	this.instance_38 = new lib.deadZone();
	this.instance_38.setTransform(1142.9,-448.1,23.932,0.216,180);

	this.instance_39 = new lib.deadZone();
	this.instance_39.setTransform(-80.8,331,15.79,0.914,90,0,0,0,0.1);

	this.instance_40 = new lib.deadZone();
	this.instance_40.setTransform(2366.4,332.8,15.79,0.914,90);

	this.instance_41 = new lib.deadZone();
	this.instance_41.setTransform(1140.2,1152.5,23.932,0.885);

	this.instance_42 = new lib.level19Pixi();
	this.instance_42.setTransform(0,0,0.4,0.4);

	// level19PixiBG
	this.level19platform5_switch = new lib.item4Switch_switch();
	this.level19platform5_switch.setTransform(1060,610,0.25,0.25,0,0,0,-1.6,-3.2);

	this.instance_43 = new lib.level19PixiBG();
	this.instance_43.setTransform(0,0,0.4,0.4);

	this.addChild(this.instance_43,this.level19platform5_switch,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.level19platform1,this.level19platform2,this.level19platform3,this.instance_9,this.level19platform1_ref,this.level19platform2_ref,this.level19platform3_ref,this.level19platform1_switch,this.level19platform2_switch,this.level19platform3_switch,this.instance_8,this.level19platform5,this.level19platform5_ref,this.p1,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.sizeRef);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.4,-564.5,2538.5,1761.3);


(lib.level18Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance.setTransform(4944.5,2957.8,1.198,1.198,0,0,0,126,111);

	this.instance_1 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_1.setTransform(1200,1150,1.089,1.089,0,0,0,126,111);

	this.instance_2 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_2.setTransform(1250,1600,1.351,1.351,0,0,0,52.5,110.5);

	this.instance_3 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_3.setTransform(327.3,1594.9,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_4 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_4.setTransform(232.8,1594.9,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_5 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_5.setTransform(989.7,1596.9,1.21,1.21,0,0,0,89.5,111);

	this.instance_6 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_6.setTransform(851.8,1595.4,1,1,0,0,0,89.5,111);

	this.instance_7 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_7.setTransform(722.5,1594.4,1,1,0,0,0,89.5,111);

	this.instance_8 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_8.setTransform(451.3,1594.9,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_9 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_9.setTransform(545.9,1594.9,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_10 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_10.setTransform(621.5,1594.9,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_11 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_11.setTransform(403,1594.9,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_12 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_12.setTransform(1130.1,1604,1.351,1.351,0,0,0,52.5,110.5);

	this.instance_13 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_13.setTransform(120.6,1489,1,1,0,0,0,89.5,111);

	this.instance_14 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_14.setTransform(120.6,1651,1,1,0,0,0,89.5,111);

	this.instance_15 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_15.setTransform(2174.2,1661.9,0.752,0.752,0,0,0,126,111);

	this.instance_16 = new lib.wall_hyphen_left_dot_png();
	this.instance_16.setTransform(2135.8,1334.2,0.796,1.019,0,0,0,70.5,45);

	this.instance_17 = new lib.wall_hyphen_left_dot_png();
	this.instance_17.setTransform(2240,1335,0.796,1.019,180,0,0,70.5,45);

	this.instance_18 = new lib.wall_hyphen_left_dot_png();
	this.instance_18.setTransform(2135.8,1305.8,0.796,1.019,0,0,0,70.5,45);

	this.instance_19 = new lib.wall_hyphen_left_dot_png();
	this.instance_19.setTransform(2240,1300,0.796,1.019,180,0,0,70.5,45);

	this.instance_20 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_20.setTransform(2180,940,0.752,0.752,0,0,0,126,111);

	this.level18platform2 = new lib.level18movingplatform2();
	this.level18platform2.setTransform(1890,1000);

	this.level18platform1 = new lib.level18movingplatform2();
	this.level18platform1.setTransform(1510,1666.3);

	this.instance_21 = new lib.wall_hyphen_right_dot_png();
	this.instance_21.setTransform(1693.5,760,0.583,0.939,180,0,0,51.5,45);

	this.instance_22 = new lib.wall_hyphen_right_dot_png();
	this.instance_22.setTransform(1710,760,0.388,0.863,0,0,0,51.5,44.9);

	this.instance_23 = new lib.wall_hyphen_right_dot_png();
	this.instance_23.setTransform(1700,840,0.583,0.939,0,0,0,51.5,45);

	this.instance_24 = new lib.wall_hyphen_right_dot_png();
	this.instance_24.setTransform(1693.5,910,0.583,0.939,180,0,0,51.5,45);

	this.instance_25 = new lib.wall_hyphen_right_dot_png();
	this.instance_25.setTransform(1710,910,0.388,0.863,0,0,0,51.5,44.9);

	this.instance_26 = new lib.wall_hyphen_right_dot_png();
	this.instance_26.setTransform(1700,990,0.583,0.939,0,0,0,51.5,45);

	this.instance_27 = new lib.wall_hyphen_right_dot_png();
	this.instance_27.setTransform(1693.5,1070,0.583,0.939,180,0,0,51.5,45);

	this.instance_28 = new lib.wall_hyphen_right_dot_png();
	this.instance_28.setTransform(1710,1070,0.388,0.863,0,0,0,51.5,44.9);

	this.instance_29 = new lib.wall_hyphen_right_dot_png();
	this.instance_29.setTransform(1700,1150,0.583,0.939,0,0,0,51.5,45);

	this.instance_30 = new lib.wall_hyphen_right_dot_png();
	this.instance_30.setTransform(1693.5,1210,0.583,0.939,180,0,0,51.5,45);

	this.instance_31 = new lib.wall_hyphen_right_dot_png();
	this.instance_31.setTransform(1710,1210,0.388,0.863,0,0,0,51.5,44.9);

	this.instance_32 = new lib.wall_hyphen_right_dot_png();
	this.instance_32.setTransform(1700,1290,0.583,0.939,0,0,0,51.5,45);

	this.instance_33 = new lib.wall_hyphen_right_dot_png();
	this.instance_33.setTransform(1693.5,1370,0.583,0.939,180,0,0,51.5,45);

	this.instance_34 = new lib.wall_hyphen_right_dot_png();
	this.instance_34.setTransform(1710,1370,0.388,0.863,0,0,0,51.5,44.9);

	this.instance_35 = new lib.wall_hyphen_right_dot_png();
	this.instance_35.setTransform(1700,1450,0.583,0.939,0,0,0,51.5,45);

	this.instance_36 = new lib.wall_hyphen_right_dot_png();
	this.instance_36.setTransform(1693.5,1530,0.583,0.939,180,0,0,51.5,45);

	this.instance_37 = new lib.wall_hyphen_right_dot_png();
	this.instance_37.setTransform(1710,1530,0.388,0.863,0,0,0,51.5,44.9);

	this.instance_38 = new lib.wall_hyphen_right_dot_png();
	this.instance_38.setTransform(1700,1610,0.583,0.939,0,0,0,51.5,45);

	this.instance_39 = new lib.wall_hyphen_right_dot_png();
	this.instance_39.setTransform(1693.5,1690,0.583,0.939,180,0,0,51.5,45);

	this.instance_40 = new lib.wall_hyphen_right_dot_png();
	this.instance_40.setTransform(1710,1690,0.388,0.863,0,0,0,51.5,44.9);

	this.instance_41 = new lib.wall_hyphen_right_dot_png();
	this.instance_41.setTransform(1700,1770,0.583,0.939,0,0,0,51.5,45);

	this.instance_42 = new lib.wall_hyphen_right_dot_png();
	this.instance_42.setTransform(1693.5,1850,0.583,0.939,180,0,0,51.5,45);

	this.instance_43 = new lib.wall_hyphen_right_dot_png();
	this.instance_43.setTransform(1710,1850,0.388,0.863,0,0,0,51.5,44.9);

	this.instance_44 = new lib.wall_hyphen_right_dot_png();
	this.instance_44.setTransform(1700,2020,0.691,1.17,180,0,0,51.5,45);

	this.instance_45 = new lib.wall_hyphen_right_dot_png();
	this.instance_45.setTransform(1700,1930,0.583,0.939,0,0,0,51.5,45);

	this.instance_46 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_46.setTransform(490,2670,1.298,1.298,0,0,0,126,111);

	this.instance_47 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_47.setTransform(2167.5,2720,0.774,1.122,0,0,0,126,111);

	this.instance_48 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_48.setTransform(2167.5,2580,0.774,1.122,0,0,0,126,111);

	this.instance_49 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_49.setTransform(2195.3,2924.4,1.298,1.298,0,0,0,126,111);

	this.instance_50 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_50.setTransform(2060,2920,1.298,1.298,0,0,0,126,111);

	this.instance_51 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_51.setTransform(1850,2920,1.298,1.298,0,0,0,126,111);

	this.instance_52 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_52.setTransform(1580,2920,1.298,1.298,0,0,0,126,111);

	this.instance_53 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_53.setTransform(1330,2920,1.298,1.298,0,0,0,126,111);

	this.instance_54 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_54.setTransform(1070,2920,1.298,1.298,0,0,0,126,111);

	this.instance_55 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_55.setTransform(820,2920,1.298,1.298,0,0,0,126,111);

	this.instance_56 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_56.setTransform(400,2660,1.298,1.298,0,0,0,126,111);

	this.instance_57 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_57.setTransform(718.7,2672.1,1.298,1.298,0,0,0,126,111);

	this.instance_58 = new lib.wall_hyphen_right_dot_png();
	this.instance_58.setTransform(2535.7,1920,1.25,2.117,180,0,0,51.5,45);

	this.instance_59 = new lib.wall_hyphen_right_dot_png();
	this.instance_59.setTransform(2525.7,2100,1.25,2.117,180,0,0,51.5,45);

	this.instance_60 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_60.setTransform(1240,1970,1,1,0,0,0,89.5,111);

	this.instance_61 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_61.setTransform(1131.3,1970,1,1,0,0,0,89.5,111);

	this.instance_62 = new lib.moss_dot_png();
	this.instance_62.setTransform(1289,1140.9,1.463,1.463,-91.8,0,0,40.5,27.5);

	this.instance_63 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_63.setTransform(1251.6,1635.7,1.351,1.351,0,0,0,52.5,110.5);

	this.instance_64 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_64.setTransform(1248.4,1395.6,1.351,1.351,0,0,0,52.5,110.5);

	this.instance_65 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_65.setTransform(1200,1205,1.089,1.089,0,0,0,126,111);

	this.instance_66 = new lib.wall_hyphen_right_dot_png();
	this.instance_66.setTransform(1256,1830,1.291,1.291,0,0,0,51.5,45);

	this.instance_67 = new lib.water_hyphen_bottom_dot_png();
	this.instance_67.setTransform(1037.5,2815,1,1,0,0,0,49.5,49.5);

	this.instance_68 = new lib.water_hyphen_bottom_dot_png();
	this.instance_68.setTransform(950,2815,1,1,0,0,0,49.5,49.5);

	this.instance_69 = new lib.water_hyphen_bottom_dot_png();
	this.instance_69.setTransform(856.9,2815,1,1,0,0,0,49.5,49.5);

	this.instance_70 = new lib.water_hyphen_middle_dot_png();
	this.instance_70.setTransform(1037.5,2720.6,1,1,0,0,0,49.5,49.5);

	this.instance_71 = new lib.water_hyphen_middle_dot_png();
	this.instance_71.setTransform(950,2720.6,1,1,0,0,0,49.5,49.5);

	this.instance_72 = new lib.water_hyphen_middle_dot_png();
	this.instance_72.setTransform(856.9,2720.6,1,1,0,0,0,49.5,49.5);

	this.instance_73 = new lib.water_hyphen_middle_dot_png();
	this.instance_73.setTransform(1037.5,2660,1,1,0,0,0,49.5,49.5);

	this.instance_74 = new lib.water_hyphen_middle_dot_png();
	this.instance_74.setTransform(950,2660,1,1,0,0,0,49.5,49.5);

	this.instance_75 = new lib.water_hyphen_middle_dot_png();
	this.instance_75.setTransform(856.9,2660,1,1,0,0,0,49.5,49.5);

	this.instance_76 = new lib.water_hyphen_top_dot_png();
	this.instance_76.setTransform(1034.4,2565.7,1,1,0,0,0,49.5,50);

	this.instance_77 = new lib.water_hyphen_top_dot_png();
	this.instance_77.setTransform(953.1,2565.7,1,1,0,0,0,49.5,50);

	this.instance_78 = new lib.water_hyphen_bottom_dot_png();
	this.instance_78.setTransform(807.9,2815,1,1,0,0,0,49.5,49.5);

	this.instance_79 = new lib.water_hyphen_middle_dot_png();
	this.instance_79.setTransform(807.9,2720.6,1,1,0,0,0,49.5,49.5);

	this.instance_80 = new lib.water_hyphen_middle_dot_png();
	this.instance_80.setTransform(807.9,2660,1,1,0,0,0,49.5,49.5);

	this.instance_81 = new lib.water_hyphen_bottom_dot_png();
	this.instance_81.setTransform(1207.5,2815,1,1,0,0,0,49.5,49.5);

	this.instance_82 = new lib.water_hyphen_bottom_dot_png();
	this.instance_82.setTransform(1114.3,2815,1,1,0,0,0,49.5,49.5);

	this.instance_83 = new lib.water_hyphen_middle_dot_png();
	this.instance_83.setTransform(1207.5,2720.6,1,1,0,0,0,49.5,49.5);

	this.instance_84 = new lib.water_hyphen_middle_dot_png();
	this.instance_84.setTransform(1114.3,2720.6,1,1,0,0,0,49.5,49.5);

	this.instance_85 = new lib.water_hyphen_middle_dot_png();
	this.instance_85.setTransform(1207.5,2660,1,1,0,0,0,49.5,49.5);

	this.instance_86 = new lib.water_hyphen_middle_dot_png();
	this.instance_86.setTransform(1114.3,2660,1,1,0,0,0,49.5,49.5);

	this.instance_87 = new lib.water_hyphen_top_dot_png();
	this.instance_87.setTransform(1210.6,2565.7,1,1,0,0,0,49.5,50);

	this.instance_88 = new lib.water_hyphen_top_dot_png();
	this.instance_88.setTransform(1114.3,2565.7,1,1,0,0,0,49.5,50);

	this.instance_89 = new lib.water_hyphen_bottom_dot_png();
	this.instance_89.setTransform(1065.4,2815,1,1,0,0,0,49.5,49.5);

	this.instance_90 = new lib.water_hyphen_middle_dot_png();
	this.instance_90.setTransform(1065.4,2720.6,1,1,0,0,0,49.5,49.5);

	this.instance_91 = new lib.water_hyphen_middle_dot_png();
	this.instance_91.setTransform(1065.4,2660,1,1,0,0,0,49.5,49.5);

	this.instance_92 = new lib.water_hyphen_top_dot_png();
	this.instance_92.setTransform(1065.4,2565.7,1,1,0,0,0,49.5,50);

	this.instance_93 = new lib.water_hyphen_bottom_dot_png();
	this.instance_93.setTransform(1309.5,2814.9,1,1,0,0,0,49.5,49.5);

	this.instance_94 = new lib.water_hyphen_bottom_dot_png();
	this.instance_94.setTransform(1222.1,2814.9,1,1,0,0,0,49.5,49.5);

	this.instance_95 = new lib.water_hyphen_bottom_dot_png();
	this.instance_95.setTransform(1128.9,2814.9,1,1,0,0,0,49.5,49.5);

	this.instance_96 = new lib.water_hyphen_middle_dot_png();
	this.instance_96.setTransform(1309.5,2720.5,1,1,0,0,0,49.5,49.5);

	this.instance_97 = new lib.water_hyphen_middle_dot_png();
	this.instance_97.setTransform(1222.1,2720.5,1,1,0,0,0,49.5,49.5);

	this.instance_98 = new lib.water_hyphen_middle_dot_png();
	this.instance_98.setTransform(1128.9,2720.5,1,1,0,0,0,49.5,49.5);

	this.instance_99 = new lib.water_hyphen_middle_dot_png();
	this.instance_99.setTransform(1309.5,2659.9,1,1,0,0,0,49.5,49.5);

	this.instance_100 = new lib.water_hyphen_middle_dot_png();
	this.instance_100.setTransform(1222.1,2659.9,1,1,0,0,0,49.5,49.5);

	this.instance_101 = new lib.water_hyphen_middle_dot_png();
	this.instance_101.setTransform(1128.9,2659.9,1,1,0,0,0,49.5,49.5);

	this.instance_102 = new lib.water_hyphen_top_dot_png();
	this.instance_102.setTransform(1306.4,2565.6,1,1,0,0,0,49.5,50);

	this.instance_103 = new lib.water_hyphen_top_dot_png();
	this.instance_103.setTransform(1225.2,2565.6,1,1,0,0,0,49.5,50);

	this.instance_104 = new lib.water_hyphen_top_dot_png();
	this.instance_104.setTransform(1128.9,2565.6,1,1,0,0,0,49.5,50);

	this.instance_105 = new lib.water_hyphen_bottom_dot_png();
	this.instance_105.setTransform(1080,2814.9,1,1,0,0,0,49.5,49.5);

	this.instance_106 = new lib.water_hyphen_middle_dot_png();
	this.instance_106.setTransform(1080,2720.5,1,1,0,0,0,49.5,49.5);

	this.instance_107 = new lib.water_hyphen_middle_dot_png();
	this.instance_107.setTransform(1080,2659.9,1,1,0,0,0,49.5,49.5);

	this.instance_108 = new lib.water_hyphen_top_dot_png();
	this.instance_108.setTransform(1080,2565.6,1,1,0,0,0,49.5,50);

	this.instance_109 = new lib.water_hyphen_bottom_dot_png();
	this.instance_109.setTransform(1479.5,2814.9,1,1,0,0,0,49.5,49.5);

	this.instance_110 = new lib.water_hyphen_bottom_dot_png();
	this.instance_110.setTransform(1386.4,2814.9,1,1,0,0,0,49.5,49.5);

	this.instance_111 = new lib.water_hyphen_middle_dot_png();
	this.instance_111.setTransform(1479.5,2720.5,1,1,0,0,0,49.5,49.5);

	this.instance_112 = new lib.water_hyphen_middle_dot_png();
	this.instance_112.setTransform(1386.4,2720.5,1,1,0,0,0,49.5,49.5);

	this.instance_113 = new lib.water_hyphen_middle_dot_png();
	this.instance_113.setTransform(1479.5,2659.9,1,1,0,0,0,49.5,49.5);

	this.instance_114 = new lib.water_hyphen_middle_dot_png();
	this.instance_114.setTransform(1386.4,2659.9,1,1,0,0,0,49.5,49.5);

	this.instance_115 = new lib.water_hyphen_top_dot_png();
	this.instance_115.setTransform(1482.6,2565.6,1,1,0,0,0,49.5,50);

	this.instance_116 = new lib.water_hyphen_top_dot_png();
	this.instance_116.setTransform(1386.4,2565.6,1,1,0,0,0,49.5,50);

	this.instance_117 = new lib.water_hyphen_bottom_dot_png();
	this.instance_117.setTransform(1337.4,2814.9,1,1,0,0,0,49.5,49.5);

	this.instance_118 = new lib.water_hyphen_middle_dot_png();
	this.instance_118.setTransform(1337.4,2720.5,1,1,0,0,0,49.5,49.5);

	this.instance_119 = new lib.water_hyphen_middle_dot_png();
	this.instance_119.setTransform(1337.4,2659.9,1,1,0,0,0,49.5,49.5);

	this.instance_120 = new lib.water_hyphen_top_dot_png();
	this.instance_120.setTransform(1337.4,2565.6,1,1,0,0,0,49.5,50);

	this.instance_121 = new lib.water_hyphen_bottom_dot_png();
	this.instance_121.setTransform(1790,2814.4,1,1,0,0,0,49.5,49.5);

	this.instance_122 = new lib.water_hyphen_bottom_dot_png();
	this.instance_122.setTransform(1702.6,2814.4,1,1,0,0,0,49.5,49.5);

	this.instance_123 = new lib.water_hyphen_bottom_dot_png();
	this.instance_123.setTransform(1609.4,2814.4,1,1,0,0,0,49.5,49.5);

	this.instance_124 = new lib.water_hyphen_middle_dot_png();
	this.instance_124.setTransform(1790,2720,1,1,0,0,0,49.5,49.5);

	this.instance_125 = new lib.water_hyphen_middle_dot_png();
	this.instance_125.setTransform(1702.6,2720,1,1,0,0,0,49.5,49.5);

	this.instance_126 = new lib.water_hyphen_middle_dot_png();
	this.instance_126.setTransform(1609.4,2720,1,1,0,0,0,49.5,49.5);

	this.instance_127 = new lib.water_hyphen_middle_dot_png();
	this.instance_127.setTransform(1790,2659.4,1,1,0,0,0,49.5,49.5);

	this.instance_128 = new lib.water_hyphen_middle_dot_png();
	this.instance_128.setTransform(1702.6,2659.4,1,1,0,0,0,49.5,49.5);

	this.instance_129 = new lib.water_hyphen_middle_dot_png();
	this.instance_129.setTransform(1609.4,2659.4,1,1,0,0,0,49.5,49.5);

	this.instance_130 = new lib.water_hyphen_top_dot_png();
	this.instance_130.setTransform(1786.9,2565.1,1,1,0,0,0,49.5,50);

	this.instance_131 = new lib.water_hyphen_top_dot_png();
	this.instance_131.setTransform(1705.7,2565.1,1,1,0,0,0,49.5,50);

	this.instance_132 = new lib.water_hyphen_top_dot_png();
	this.instance_132.setTransform(1609.4,2565.1,1,1,0,0,0,49.5,50);

	this.instance_133 = new lib.water_hyphen_bottom_dot_png();
	this.instance_133.setTransform(1560.5,2814.4,1,1,0,0,0,49.5,49.5);

	this.instance_134 = new lib.water_hyphen_middle_dot_png();
	this.instance_134.setTransform(1560.5,2720,1,1,0,0,0,49.5,49.5);

	this.instance_135 = new lib.water_hyphen_middle_dot_png();
	this.instance_135.setTransform(1560.5,2659.4,1,1,0,0,0,49.5,49.5);

	this.instance_136 = new lib.water_hyphen_top_dot_png();
	this.instance_136.setTransform(1560.5,2565.1,1,1,0,0,0,49.5,50);

	this.instance_137 = new lib.water_hyphen_bottom_dot_png();
	this.instance_137.setTransform(2047.5,2814.4,1,1,0,0,0,49.5,49.5);

	this.instance_138 = new lib.water_hyphen_bottom_dot_png();
	this.instance_138.setTransform(1960,2814.4,1,1,0,0,0,49.5,49.5);

	this.instance_139 = new lib.water_hyphen_bottom_dot_png();
	this.instance_139.setTransform(1866.9,2814.4,1,1,0,0,0,49.5,49.5);

	this.instance_140 = new lib.water_hyphen_middle_dot_png();
	this.instance_140.setTransform(2047.5,2720,1,1,0,0,0,49.5,49.5);

	this.instance_141 = new lib.water_hyphen_middle_dot_png();
	this.instance_141.setTransform(1960,2720,1,1,0,0,0,49.5,49.5);

	this.instance_142 = new lib.water_hyphen_middle_dot_png();
	this.instance_142.setTransform(1866.9,2720,1,1,0,0,0,49.5,49.5);

	this.instance_143 = new lib.water_hyphen_middle_dot_png();
	this.instance_143.setTransform(2047.5,2659.4,1,1,0,0,0,49.5,49.5);

	this.instance_144 = new lib.water_hyphen_middle_dot_png();
	this.instance_144.setTransform(1960,2659.4,1,1,0,0,0,49.5,49.5);

	this.instance_145 = new lib.water_hyphen_middle_dot_png();
	this.instance_145.setTransform(1866.9,2659.4,1,1,0,0,0,49.5,49.5);

	this.instance_146 = new lib.water_hyphen_top_dot_png();
	this.instance_146.setTransform(2044.4,2565.1,1,1,0,0,0,49.5,50);

	this.instance_147 = new lib.water_hyphen_top_dot_png();
	this.instance_147.setTransform(1963.1,2565.1,1,1,0,0,0,49.5,50);

	this.instance_148 = new lib.water_hyphen_top_dot_png();
	this.instance_148.setTransform(1866.9,2565.1,1,1,0,0,0,49.5,50);

	this.instance_149 = new lib.water_hyphen_bottom_dot_png();
	this.instance_149.setTransform(1817.9,2814.4,1,1,0,0,0,49.5,49.5);

	this.instance_150 = new lib.water_hyphen_middle_dot_png();
	this.instance_150.setTransform(1817.9,2720,1,1,0,0,0,49.5,49.5);

	this.instance_151 = new lib.water_hyphen_middle_dot_png();
	this.instance_151.setTransform(1817.9,2659.4,1,1,0,0,0,49.5,49.5);

	this.instance_152 = new lib.water_hyphen_top_dot_png();
	this.instance_152.setTransform(1817.9,2565.1,1,1,0,0,0,49.5,50);

	this.instance_153 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_153.setTransform(2175,2294.5,0.754,1.122,0,0,0,126,111);

	this.instance_154 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_154.setTransform(2175,2406.5,0.754,1.122,0,0,0,126,111);

	this.instance_155 = new lib.wall_hyphen_right_dot_png();
	this.instance_155.setTransform(2523.6,984.3,1.723,2.117,180,0,0,51.5,45);

	this.instance_156 = new lib.wall_hyphen_right_dot_png();
	this.instance_156.setTransform(2518.1,1119,1.723,2.117,180,0,0,51.5,45);

	this.instance_157 = new lib.wall_hyphen_right_dot_png();
	this.instance_157.setTransform(2580.1,990,1.444,1.725,0,0,0,51.6,45);

	this.instance_158 = new lib.wall_hyphen_right_dot_png();
	this.instance_158.setTransform(2575.8,1092.4,1.444,1.725,0,0,0,51.6,45);

	this.instance_159 = new lib.wall_hyphen_right_dot_png();
	this.instance_159.setTransform(2575.8,1220,1.444,1.725,0,0,0,51.6,45);

	this.instance_160 = new lib.wall_hyphen_right_dot_png();
	this.instance_160.setTransform(2575.8,1340,1.444,1.725,0,0,0,51.6,45);

	this.instance_161 = new lib.wall_hyphen_right_dot_png();
	this.instance_161.setTransform(2520,1240,1.723,2.117,180,0,0,51.5,45);

	this.instance_162 = new lib.wall_hyphen_right_dot_png();
	this.instance_162.setTransform(2518.7,1350,1.723,2.117,180,0,0,51.5,45);

	this.instance_163 = new lib.wall_hyphen_left_dot_png();
	this.instance_163.setTransform(2390,1710,0.784,1.443,90,0,0,70.5,45);

	this.instance_164 = new lib.wall_hyphen_left_dot_png();
	this.instance_164.setTransform(2310,1710,0.784,1.443,90,0,0,70.5,45);

	this.instance_165 = new lib.wall_hyphen_right_dot_png();
	this.instance_165.setTransform(2530,1710,1.723,2.117,0,0,0,51.5,45);

	this.instance_166 = new lib.wall_hyphen_right_dot_png();
	this.instance_166.setTransform(2575.8,1490,1.444,1.725,0,0,0,51.6,45);

	this.instance_167 = new lib.wall_hyphen_right_dot_png();
	this.instance_167.setTransform(2521.8,1515.4,1.723,2.117,180,0,0,51.5,45);

	this.instance_168 = new lib.wall_hyphen_right_dot_png();
	this.instance_168.setTransform(2570.1,1570,1.444,1.725,0,0,0,51.6,45);

	this.instance_169 = new lib.wall_hyphen_right_dot_png();
	this.instance_169.setTransform(2520,1600,1.723,2.117,180,0,0,51.5,45);

	this.instance_170 = new lib.wall_hyphen_left_dot_png();
	this.instance_170.setTransform(2197.6,1824.9,1.706,1.568,0,0,0,70.5,45);

	this.instance_171 = new lib.wall_hyphen_left_dot_png();
	this.instance_171.setTransform(2340,1740,1.568,1.568,0,0,0,70.5,45);

	this.instance_172 = new lib.wall_hyphen_left_dot_png();
	this.instance_172.setTransform(2180,1790,1.568,1.568,0,0,0,70.5,45);

	this.instance_173 = new lib.dirt1_dot_png();
	this.instance_173.setTransform(1266.3,1033.2,0.75,0.75,-29.7,0,0,55,86.9);

	this.instance_174 = new lib.moss_dot_png();
	this.instance_174.setTransform(249.7,948.7,1.463,1.463,-164.8,0,0,40.5,27.6);

	this.instance_175 = new lib.moss_dot_png();
	this.instance_175.setTransform(1169.1,1144.8,1.463,1.463,-91.8,0,0,40.5,27.5);

	this.instance_176 = new lib.dirt1_dot_png();
	this.instance_176.setTransform(154.5,523.6,0.499,0.499,0,0,0,55,87);

	this.instance_177 = new lib.dirt3_dot_png();
	this.instance_177.setTransform(90.6,47.2,0.818,0.818,0,0,0,55,88);

	this.instance_178 = new lib.wall_hyphen_left_dot_png();
	this.instance_178.setTransform(2348.9,199.6,1.568,1.568,0,0,0,70.5,45);

	this.instance_179 = new lib.wall_hyphen_right_dot_png();
	this.instance_179.setTransform(2534.9,429.7,2.117,2.117,0,0,0,51.5,45);

	this.instance_180 = new lib.wall_hyphen_right_dot_png();
	this.instance_180.setTransform(2534.9,690.7,2.117,2.117,0,0,0,51.5,45);

	this.instance_181 = new lib.wall_hyphen_left_dot_png();
	this.instance_181.setTransform(2345.8,454.3,1.568,1.568,0,0,0,70.5,45);

	this.instance_182 = new lib.wall_hyphen_right_dot_png();
	this.instance_182.setTransform(2534.9,818,2.117,2.117,0,0,0,51.5,45);

	this.instance_183 = new lib.wall_hyphen_left_dot_png();
	this.instance_183.setTransform(2131.8,1069.6,0.796,1.019,0,0,0,70.5,45);

	this.instance_184 = new lib.wall_hyphen_left_dot_png();
	this.instance_184.setTransform(2345.8,842.7,1.568,1.568,0,0,0,70.5,45);

	this.instance_185 = new lib.wall_hyphen_right_dot_png();
	this.instance_185.setTransform(2534.9,557,2.117,2.117,0,0,0,51.5,45);

	this.instance_186 = new lib.wall_hyphen_left_dot_png();
	this.instance_186.setTransform(2345.8,581.7,1.568,1.568,0,0,0,70.5,45);

	this.instance_187 = new lib.wall_hyphen_left_dot_png();
	this.instance_187.setTransform(2348.9,326.9,1.568,1.568,0,0,0,70.5,45);

	this.instance_188 = new lib.wall_hyphen_right_dot_png();
	this.instance_188.setTransform(2538,302.3,2.117,2.117,0,0,0,51.5,45);

	this.instance_189 = new lib.wall_hyphen_right_dot_png();
	this.instance_189.setTransform(2562.2,2101.5,1.402,2.117,0,0,0,51.5,45);

	this.instance_190 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_190.setTransform(2569.7,2559.8,1,1,0,0,0,98.5,47.5);

	this.instance_191 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_191.setTransform(2761.7,2559.8,1,1,0,0,0,98.5,47.5);

	this.platformdoor = new lib.level18movingplatform1();
	this.platformdoor.setTransform(2690.7,2338.5);

	this.instance_192 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_192.setTransform(557.7,2918.8,1.298,1.298,0,0,0,126,111);

	this.instance_193 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_193.setTransform(308.6,2661.2,1.298,1.298,0,0,0,126,111);

	this.instance_194 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_194.setTransform(82.6,2908.3,1.298,1.298,0,0,0,126,111);

	this.instance_195 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_195.setTransform(82.6,2661.2,1.298,1.298,0,0,0,126,111);

	this.instance_196 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_196.setTransform(679.5,2468.9,1,1,0,0,0,89.5,111);

	this.instance_197 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_197.setTransform(788.3,2468.9,1,1,0,0,0,89.5,111);

	this.instance_198 = new lib.water_hyphen_top_dot_png();
	this.instance_198.setTransform(856.9,2565.7,1,1,0,0,0,49.5,50);

	this.instance_199 = new lib.water_hyphen_top_dot_png();
	this.instance_199.setTransform(807.9,2565.7,1,1,0,0,0,49.5,50);

	this.instance_200 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_200.setTransform(576.3,2468.9,1,1,0,0,0,89.5,111);

	this.instance_201 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_201.setTransform(219.1,2458.2,1,1,0,0,0,89.5,111);

	this.instance_202 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_202.setTransform(548.2,2458.2,1,1,0,0,0,89.5,111);

	this.instance_203 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_203.setTransform(439.4,2458.2,1,1,0,0,0,89.5,111);

	this.instance_204 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_204.setTransform(327.9,2458.2,1,1,0,0,0,89.5,111);

	this.instance_205 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_205.setTransform(7.2,2458.2,1,1,0,0,0,89.5,111);

	this.instance_206 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_206.setTransform(115.9,2458.2,1,1,0,0,0,89.5,111);

	this.instance_207 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_207.setTransform(679.5,2287.7,1,1,0,0,0,89.5,111);

	this.instance_208 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_208.setTransform(1010,1970.5,1,1,0,0,0,89.5,111);

	this.instance_209 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_209.setTransform(901.3,1808.5,1,1,0,0,0,89.5,111);

	this.instance_210 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_210.setTransform(901.3,1970.5,1,1,0,0,0,89.5,111);

	this.instance_211 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_211.setTransform(1010,1808.5,1,1,0,0,0,89.5,111);

	this.instance_212 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_212.setTransform(681,1970.5,1,1,0,0,0,89.5,111);

	this.instance_213 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_213.setTransform(789.7,1808.5,1,1,0,0,0,89.5,111);

	this.instance_214 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_214.setTransform(788.3,2125.7,1,1,0,0,0,89.5,111);

	this.instance_215 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_215.setTransform(788.3,2287.7,1,1,0,0,0,89.5,111);

	this.instance_216 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_216.setTransform(577.8,1970.5,1,1,0,0,0,89.5,111);

	this.instance_217 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_217.setTransform(582.6,1697.3,1,1,0,0,0,89.5,111);

	this.instance_218 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_218.setTransform(577.8,1808.5,1,1,0,0,0,89.5,111);

	this.instance_219 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_219.setTransform(576.3,2125.7,1,1,0,0,0,89.5,111);

	this.instance_220 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_220.setTransform(576.3,2287.7,1,1,0,0,0,89.5,111);

	this.instance_221 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_221.setTransform(219.1,2277,1,1,0,0,0,89.5,111);

	this.instance_222 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_222.setTransform(548.2,2277,1,1,0,0,0,89.5,111);

	this.instance_223 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_223.setTransform(439.4,2115,1,1,0,0,0,89.5,111);

	this.instance_224 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_224.setTransform(549.6,1959.8,1,1,0,0,0,89.5,111);

	this.instance_225 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_225.setTransform(440.9,1797.8,1,1,0,0,0,89.5,111);

	this.instance_226 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_226.setTransform(440.9,1959.8,1,1,0,0,0,89.5,111);

	this.instance_227 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_227.setTransform(439.4,2277,1,1,0,0,0,89.5,111);

	this.instance_228 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_228.setTransform(549.6,1797.8,1,1,0,0,0,89.5,111);

	this.instance_229 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_229.setTransform(548.2,2115,1,1,0,0,0,89.5,111);

	this.instance_230 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_230.setTransform(220.6,1797.8,1,1,0,0,0,89.5,111);

	this.instance_231 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_231.setTransform(220.6,1959.8,1,1,0,0,0,89.5,111);

	this.instance_232 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_232.setTransform(327.9,2115,1,1,0,0,0,89.5,111);

	this.instance_233 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_233.setTransform(327.9,2277,1,1,0,0,0,89.5,111);

	this.instance_234 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_234.setTransform(328.9,1630.6,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_235 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_235.setTransform(14.9,456,1,1,0,0,0,89.5,111);

	this.instance_236 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_236.setTransform(234.3,1630.6,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_237 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_237.setTransform(13.4,1524.6,1,1,0,0,0,89.5,111);

	this.instance_238 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_238.setTransform(14.9,1369.4,1,1,0,0,0,89.5,111);

	this.instance_239 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_239.setTransform(7.2,2115,1,1,0,0,0,89.5,111);

	this.instance_240 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_240.setTransform(117.4,1959.8,1,1,0,0,0,89.5,111);

	this.instance_241 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_241.setTransform(991.3,1632.5,1.21,1.21,0,0,0,89.5,111);

	this.instance_242 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_242.setTransform(853.4,1631,1,1,0,0,0,89.5,111);

	this.instance_243 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_243.setTransform(724.1,1630,1,1,0,0,0,89.5,111);

	this.instance_244 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_244.setTransform(452.9,1630.6,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_245 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_245.setTransform(547.4,1630.6,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_246 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_246.setTransform(623.1,1630.6,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_247 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_247.setTransform(831.1,1399.8,1,1,0,0,0,126,111);

	this.instance_248 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_248.setTransform(475.9,1398.8,1,1,0,0,0,126,111);

	this.instance_249 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_249.setTransform(292.8,1399.8,1,1,0,0,0,126,111);

	this.instance_250 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_250.setTransform(404.5,1630.6,1.119,1.119,0,0,0,52.5,110.5);

	this.instance_251 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_251.setTransform(1131.7,1639.6,1.351,1.351,0,0,0,52.5,110.5);

	this.instance_252 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_252.setTransform(1128.5,1399.5,1.351,1.351,0,0,0,52.5,110.5);

	this.instance_253 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_253.setTransform(1080.1,1209,1.089,1.089,0,0,0,126,111);

	this.instance_254 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_254.setTransform(687.6,1218.9,1,1,0,0,0,126,111);

	this.instance_255 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_255.setTransform(514.4,1218.9,1,1,0,0,0,89.5,111);

	this.instance_256 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_256.setTransform(256.3,1218.9,1,1,0,0,0,89.5,111);

	this.instance_257 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_257.setTransform(1286,1121.5,0.766,0.766,0,0,0,51,16);

	this.instance_258 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_258.setTransform(1240.9,989,0.752,0.752,0,0,0,126,111);

	this.instance_259 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_259.setTransform(1085.1,1014,1,1,0,0,0,126,111);

	this.instance_260 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_260.setTransform(794.6,1022.1,1,1,0,0,0,89.5,111);

	this.instance_261 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_261.setTransform(707.7,1019.5,1,1,0,0,0,89.5,111);

	this.instance_262 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_262.setTransform(627,1010.2,1,1,0,0,0,52.5,110.5);

	this.instance_263 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_263.setTransform(691.4,1026.4,1,1,0,0,0,89.5,111);

	this.instance_264 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_264.setTransform(551.4,1010.2,1,1,0,0,0,52.5,110.5);

	this.instance_265 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_265.setTransform(430,1016.6,1,1,0,0,0,126,111);

	this.instance_266 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_266.setTransform(261.6,1022.1,1,1,0,0,0,126,111);

	this.instance_267 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_267.setTransform(14.9,294,1,1,0,0,0,89.5,111);

	this.instance_268 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_268.setTransform(13.4,611.2,1,1,0,0,0,89.5,111);

	this.instance_269 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_269.setTransform(13.4,773.2,1,1,0,0,0,89.5,111);

	this.instance_270 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_270.setTransform(123.6,294,1,1,0,0,0,89.5,111);

	this.instance_271 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_271.setTransform(5082.7,2935.1,1.198,1.198,0,0,0,126,111);

	this.instance_272 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_272.setTransform(4947,2785.7,1.198,1.198,0,0,0,126,111);

	this.instance_273 = new lib.water_hyphen_top_dot_png();
	this.instance_273.setTransform(4740.9,2947.4,1,1,0,0,0,49.5,50);

	this.instance_274 = new lib.water_hyphen_top_dot_png();
	this.instance_274.setTransform(4651.5,2947.4,1,1,0,0,0,49.5,50);

	this.instance_275 = new lib.water_hyphen_top_dot_png();
	this.instance_275.setTransform(4818.4,2947.4,1,1,0,0,0,49.5,50);

	this.instance_276 = new lib.water_hyphen_top_dot_png();
	this.instance_276.setTransform(4909.7,2947.4,1,1,0,0,0,49.5,50);

	this.instance_277 = new lib.water_hyphen_bottom_dot_png();
	this.instance_277.setTransform(4909.7,3038,1,1,0,0,0,49.5,49.5);

	this.instance_278 = new lib.water_hyphen_bottom_dot_png();
	this.instance_278.setTransform(4818.4,3038,1,1,0,0,0,49.5,49.5);

	this.instance_279 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_279.setTransform(4743.2,2880.6,0.791,0.791,0,0,0,98.5,47.4);

	this.instance_280 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_280.setTransform(4639.6,2877.3,0.72,0.72,0,0,0,38,47.5);

	this.instance_281 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_281.setTransform(5104.6,102.4,1,1,0,0,0,52.5,110.5);

	this.instance_282 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_282.setTransform(5249,86.3,1.198,1.198,0,0,0,126,111);

	this.instance_283 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_283.setTransform(5098.4,297.4,1,1,0,0,0,52.5,110.5);

	this.instance_284 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_284.setTransform(5242.7,281.4,1.198,1.198,0,0,0,126,111);

	this.instance_285 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_285.setTransform(5098.4,494.1,1,1,0,0,0,52.5,110.5);

	this.instance_286 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_286.setTransform(5242.7,478,1.198,1.198,0,0,0,126,111);

	this.instance_287 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_287.setTransform(5104.6,876.7,1,1,0,0,0,52.5,110.5);

	this.instance_288 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_288.setTransform(5249,860.6,1.198,1.198,0,0,0,126,111);

	this.instance_289 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_289.setTransform(5115.3,1250.5,1,1,0,0,0,52.5,110.5);

	this.instance_290 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_290.setTransform(5259.6,1234.4,1.198,1.198,0,0,0,126,111);

	this.instance_291 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_291.setTransform(5104.6,1811.8,1,1,0,0,0,52.5,110.5);

	this.instance_292 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_292.setTransform(5249,1795.8,1.198,1.198,0,0,0,126,111);

	this.instance_293 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_293.setTransform(5122.1,1989.4,1,1,0,0,0,52.5,110.5);

	this.instance_294 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_294.setTransform(5266.5,1973.3,1.198,1.198,0,0,0,126,111);

	this.instance_295 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_295.setTransform(5104.6,2553.5,1,1,0,0,0,52.5,110.5);

	this.instance_296 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_296.setTransform(5249,2537.4,1.198,1.198,0,0,0,126,111);

	this.instance_297 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_297.setTransform(5104.6,2742.3,1,1,0,0,0,52.5,110.5);

	this.instance_298 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_298.setTransform(5249,2726.2,1.198,1.198,0,0,0,126,111);

	this.instance_299 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_299.setTransform(5252.1,2935.1,1.198,1.198,0,0,0,126,111);

	this.instance_300 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_300.setTransform(4950.1,2672.2,1.198,1.198,0,0,0,126,111);

	this.instance_301 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_301.setTransform(4950.1,1133.7,1.198,1.198,0,0,0,126,111);

	this.instance_302 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_302.setTransform(4950.1,1338.8,1.198,1.198,0,0,0,126,111);

	this.instance_303 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_303.setTransform(4950.1,751.2,1.198,1.198,0,0,0,126,111);

	this.instance_304 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_304.setTransform(4950.1,956.2,1.198,1.198,0,0,0,126,111);

	this.instance_305 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_305.setTransform(4950.1,76.3,1.198,1.198,0,0,0,126,111);

	this.instance_306 = new lib.barnfloor_hyphen_bottom_hyphen_right_dot_png();
	this.instance_306.setTransform(2881.5,3003.3,1,1,0,0,0,25,49);

	this.instance_307 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_307.setTransform(2883.2,2672.4,1,1,0,0,0,26,70);

	this.instance_308 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_308.setTransform(2020.5,3003.3,1,1,0,0,0,98.5,49);

	this.instance_309 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_309.setTransform(2210.3,3003.3,1,1,0,0,0,98.5,49);

	this.instance_310 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_310.setTransform(2401.6,3003.3,1,1,0,0,0,98.5,49);

	this.instance_311 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_311.setTransform(2589.8,3003.3,1,1,0,0,0,98.5,49);

	this.instance_312 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_312.setTransform(2781.1,3003.3,1,1,0,0,0,98.5,49);

	this.instance_313 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_313.setTransform(2206.6,2672.4,1,1,0,0,0,98.5,70);

	this.instance_314 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_314.setTransform(2397.9,2672.4,1,1,0,0,0,98.5,70);

	this.instance_315 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_315.setTransform(2589.8,2672.4,1,1,0,0,0,98.5,70);

	this.instance_316 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_316.setTransform(2781.1,2672.4,1,1,0,0,0,98.5,70);

	this.instance_317 = new lib.water_hyphen_bottom_dot_png();
	this.instance_317.setTransform(4740.9,3038,1,1,0,0,0,49.5,49.5);

	this.instance_318 = new lib.water_hyphen_bottom_dot_png();
	this.instance_318.setTransform(4651.5,3038,1,1,0,0,0,49.5,49.5);

	this.instance_319 = new lib.water_hyphen_bottom_dot_png();
	this.instance_319.setTransform(4558.3,3038,1,1,0,0,0,49.5,49.5);

	this.instance_320 = new lib.water_hyphen_bottom_dot_png();
	this.instance_320.setTransform(4470.9,3038,1,1,0,0,0,49.5,49.5);

	this.instance_321 = new lib.water_hyphen_bottom_dot_png();
	this.instance_321.setTransform(4377.7,3038,1,1,0,0,0,49.5,49.5);

	this.instance_322 = new lib.water_hyphen_top_dot_png();
	this.instance_322.setTransform(4555.2,2947.4,1,1,0,0,0,49.5,50);

	this.instance_323 = new lib.water_hyphen_top_dot_png();
	this.instance_323.setTransform(4474,2947.4,1,1,0,0,0,49.5,50);

	this.instance_324 = new lib.water_hyphen_top_dot_png();
	this.instance_324.setTransform(4377.7,2947.4,1,1,0,0,0,49.5,50);

	this.instance_325 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_325.setTransform(3860.9,2951.3,1,1.101,0,0,0,126,111);

	this.instance_326 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_326.setTransform(3719,2954.5,1,1.077,0,0,0,52.5,110.5);

	this.instance_327 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_327.setTransform(3573.3,2954,1,1.077,0,0,0,126,111);

	this.instance_328 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_328.setTransform(3386.2,2954,1,1.077,0,0,0,126,111);

	this.instance_329 = new lib.water_hyphen_bottom_dot_png();
	this.instance_329.setTransform(3232.4,3018.6,1,1,0,0,0,49.5,49.5);

	this.instance_330 = new lib.water_hyphen_bottom_dot_png();
	this.instance_330.setTransform(3139.3,3018.6,1,1,0,0,0,49.5,49.5);

	this.instance_331 = new lib.water_hyphen_bottom_dot_png();
	this.instance_331.setTransform(3051.8,3018.6,1,1,0,0,0,49.5,49.5);

	this.instance_332 = new lib.water_hyphen_bottom_dot_png();
	this.instance_332.setTransform(2958.7,3018.6,1,1,0,0,0,49.5,49.5);

	this.instance_333 = new lib.water_hyphen_middle_dot_png();
	this.instance_333.setTransform(3232.4,2924.2,1,1,0,0,0,49.5,49.5);

	this.instance_334 = new lib.water_hyphen_middle_dot_png();
	this.instance_334.setTransform(3139.3,2924.2,1,1,0,0,0,49.5,49.5);

	this.instance_335 = new lib.water_hyphen_middle_dot_png();
	this.instance_335.setTransform(3051.8,2924.2,1,1,0,0,0,49.5,49.5);

	this.instance_336 = new lib.water_hyphen_middle_dot_png();
	this.instance_336.setTransform(2958.7,2924.2,1,1,0,0,0,49.5,49.5);

	this.instance_337 = new lib.water_hyphen_middle_dot_png();
	this.instance_337.setTransform(3139.3,2863.6,1,1,0,0,0,49.5,49.5);

	this.instance_338 = new lib.water_hyphen_middle_dot_png();
	this.instance_338.setTransform(3051.8,2863.6,1,1,0,0,0,49.5,49.5);

	this.instance_339 = new lib.water_hyphen_middle_dot_png();
	this.instance_339.setTransform(2958.7,2863.6,1,1,0,0,0,49.5,49.5);

	this.instance_340 = new lib.water_hyphen_top_dot_png();
	this.instance_340.setTransform(3136.2,2769.3,1,1,0,0,0,49.5,50);

	this.instance_341 = new lib.water_hyphen_top_dot_png();
	this.instance_341.setTransform(3054.9,2769.3,1,1,0,0,0,49.5,50);

	this.instance_342 = new lib.water_hyphen_top_dot_png();
	this.instance_342.setTransform(2958.7,2769.3,1,1,0,0,0,49.5,50);

	this.instance_343 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_343.setTransform(3862.6,2157.9,1,1.023,0,0,0,126,111);

	this.instance_344 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_344.setTransform(3720.7,2160.9,1,1,0,0,0,52.5,110.5);

	this.instance_345 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_345.setTransform(3575,2160.4,1,1,0,0,0,126,111);

	this.instance_346 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_346.setTransform(3393.1,2160.4,1,1,0,0,0,126,111);

	this.instance_347 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_347.setTransform(3293.1,2042.3,0.934,0.934,0,0,0,38,47.5);

	this.instance_348 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_348.setTransform(3951.2,2045.2,0.891,0.891,0,0,0,34.5,46.5);

	this.instance_349 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_349.setTransform(3391.2,2043.4,0.911,0.911,0,0,0,98.5,47.5);

	this.instance_350 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_350.setTransform(3834,2043.4,0.911,0.911,0,0,0,98.5,47.5);

	this.instance_351 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_351.setTransform(3660,2043.4,0.911,0.911,0,0,0,98.5,47.5);

	this.instance_352 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_352.setTransform(3486.9,2043.4,0.911,0.911,0,0,0,98.5,47.5);

	this.instance_353 = new lib.hay_hyphen_cube_dot_png();
	this.instance_353.setTransform(3067.9,1852.5,0.987,0.987,0,0,0,45.5,46.5);

	this.instance_354 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_354.setTransform(2184.7,2561.8,1,1,0,0,0,98.5,47.5);

	this.instance_355 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_355.setTransform(2376.7,2561.8,1,1,0,0,0,98.5,47.5);

	this.instance_356 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_356.setTransform(2891,2560.8,1,1,0,0,0,34.5,46.5);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_357 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_357.setTransform(3862.6,2329.1,1,1.023,0,0,0,126,111);

	this.instance_358 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_358.setTransform(3720.7,2332.1,1,1,0,0,0,52.5,110.5);

	this.instance_359 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_359.setTransform(3575,2331.6,1,1,0,0,0,126,111);

	this.instance_360 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_360.setTransform(3393.1,2331.6,1,1,0,0,0,126,111);

	this.instance_361 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_361.setTransform(3862.6,2414.2,1,1.023,0,0,0,126,111);

	this.instance_362 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_362.setTransform(3720.7,2417.2,1,1,0,0,0,52.5,110.5);

	this.instance_363 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_363.setTransform(3575,2416.7,1,1,0,0,0,126,111);

	this.instance_364 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_364.setTransform(3393.1,2416.7,1,1,0,0,0,126,111);

	this.instance_365 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_365.setTransform(3862.6,2585.5,1,1.023,0,0,0,126,111);

	this.instance_366 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_366.setTransform(3720.7,2588.5,1,1,0,0,0,52.5,110.5);

	this.instance_367 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_367.setTransform(3575,2588,1,1,0,0,0,126,111);

	this.instance_368 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_368.setTransform(3389.8,2588,1,1,0,0,0,126,111);

	this.instance_369 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_369.setTransform(3860.9,2761.2,1,1.023,0,0,0,126,111);

	this.instance_370 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_370.setTransform(3719,2764.2,1,1,0,0,0,52.5,110.5);

	this.instance_371 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_371.setTransform(3573.3,2763.7,1,1,0,0,0,126,111);

	this.instance_372 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_372.setTransform(3386.2,2763.7,1,1,0,0,0,126,111);

	this.instance_373 = new lib.water_hyphen_middle_dot_png();
	this.instance_373.setTransform(3232.4,2863.6,1,1,0,0,0,49.5,49.5);

	this.instance_374 = new lib.water_hyphen_top_dot_png();
	this.instance_374.setTransform(3232.4,2769.3,1,1,0,0,0,49.5,50);

	this.instance_375 = new lib.water_hyphen_top_dot_png();
	this.instance_375.setTransform(4190.1,2947.4,1,1,0,0,0,49.5,50);

	this.instance_376 = new lib.water_hyphen_top_dot_png();
	this.instance_376.setTransform(4108.9,2947.4,1,1,0,0,0,49.5,50);

	this.instance_377 = new lib.water_hyphen_top_dot_png();
	this.instance_377.setTransform(4012.6,2947.4,1,1,0,0,0,49.5,50);

	this.instance_378 = new lib.water_hyphen_top_dot_png();
	this.instance_378.setTransform(4286.4,2947.4,1,1,0,0,0,49.5,50);

	this.instance_379 = new lib.water_hyphen_bottom_dot_png();
	this.instance_379.setTransform(4291.4,3038,1,1,0,0,0,49.5,49.5);

	this.instance_380 = new lib.water_hyphen_bottom_dot_png();
	this.instance_380.setTransform(4198.2,3038,1,1,0,0,0,49.5,49.5);

	this.instance_381 = new lib.water_hyphen_bottom_dot_png();
	this.instance_381.setTransform(4110.8,3038,1,1,0,0,0,49.5,49.5);

	this.instance_382 = new lib.water_hyphen_bottom_dot_png();
	this.instance_382.setTransform(4017.6,3038,1,1,0,0,0,49.5,49.5);

	this.instance_383 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_383.setTransform(2019,2789.3,1,1,0,0,0,98.5,70);

	this.instance_384 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_384.setTransform(2206.6,2789.3,1,1,0,0,0,98.5,70);

	this.instance_385 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_385.setTransform(2397.9,2789.3,1,1,0,0,0,98.5,70);

	this.instance_386 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_386.setTransform(2589.8,2789.3,1,1,0,0,0,98.5,70);

	this.instance_387 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_387.setTransform(2781.1,2789.3,1,1,0,0,0,98.5,70);

	this.instance_388 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_388.setTransform(2019,2888.3,1,1,0,0,0,98.5,70);

	this.instance_389 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_389.setTransform(2206.6,2888.3,1,1,0,0,0,98.5,70);

	this.instance_390 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_390.setTransform(2397.9,2888.3,1,1,0,0,0,98.5,70);

	this.instance_391 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_391.setTransform(2589.8,2888.3,1,1,0,0,0,98.5,70);

	this.instance_392 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_392.setTransform(2781.1,2888.3,1,1,0,0,0,98.5,70);

	this.instance_393 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_393.setTransform(2882.5,2803.1,1,1,0,0,0,26,70);

	this.instance_394 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_394.setTransform(2882.5,2891.7,1,1,0,0,0,26,70);

	this.instance_395 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_395.setTransform(4950.1,281.4,1.198,1.198,0,0,0,126,111);

	this.instance_396 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_396.setTransform(4950.1,485.1,1.198,1.198,0,0,0,126,111);

	this.instance_397 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_397.setTransform(4950.1,690.2,1.198,1.198,0,0,0,126,111);

	this.instance_398 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_398.setTransform(4950.1,1536.5,1.198,1.198,0,0,0,126,111);

	this.instance_399 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_399.setTransform(4950.1,1741.6,1.198,1.198,0,0,0,126,111);

	this.instance_400 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_400.setTransform(4950.1,1939.6,1.198,1.198,0,0,0,126,111);

	this.instance_401 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_401.setTransform(4950.1,2144.6,1.198,1.198,0,0,0,126,111);

	this.instance_402 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_402.setTransform(4950.1,2282.1,1.198,1.198,0,0,0,126,111);

	this.instance_403 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_403.setTransform(4950.1,2487.2,1.198,1.198,0,0,0,126,111);

	this.instance_404 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_404.setTransform(4950.1,2719.7,1.198,1.198,0,0,0,126,111);

	this.instance_405 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_405.setTransform(5104.6,2360,1,1,0,0,0,52.5,110.5);

	this.instance_406 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_406.setTransform(5249,2343.9,1.198,1.198,0,0,0,126,111);

	this.instance_407 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_407.setTransform(5104.6,2154.4,1,1,0,0,0,52.5,110.5);

	this.instance_408 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_408.setTransform(5249,2138.3,1.198,1.198,0,0,0,126,111);

	this.instance_409 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_409.setTransform(5107.8,1630.5,1,1,0,0,0,52.5,110.5);

	this.instance_410 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_410.setTransform(5252.1,1614.5,1.198,1.198,0,0,0,126,111);

	this.instance_411 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_411.setTransform(5115.3,1436.8,1,1,0,0,0,52.5,110.5);

	this.instance_412 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_412.setTransform(5259.6,1420.7,1.198,1.198,0,0,0,126,111);

	this.instance_413 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_413.setTransform(5107.8,1068,1,1,0,0,0,52.5,110.5);

	this.instance_414 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_414.setTransform(5252.1,1051.9,1.198,1.198,0,0,0,126,111);

	this.instance_415 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_415.setTransform(5098.4,691.6,1,1,0,0,0,52.5,110.5);

	this.instance_416 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_416.setTransform(5242.7,675.6,1.198,1.198,0,0,0,126,111);

	this.instance_417 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_417.setTransform(123.6,456,1,1,0,0,0,89.5,111);

	this.instance_418 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_418.setTransform(122.2,611.2,1,1,0,0,0,89.5,111);

	this.instance_419 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_419.setTransform(122.2,773.2,1,1,0,0,0,89.5,111);

	this.instance_420 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_420.setTransform(13.4,139,1,1,0,0,0,89.5,111);

	this.instance_421 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_421.setTransform(122.2,139,1,1,0,0,0,89.5,111);

	this.instance_422 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_422.setTransform(8.6,22.7,1,1,0,0,0,89.5,111);

	this.instance_423 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_423.setTransform(117.4,22.7,1,1,0,0,0,89.5,111);

	this.instance_424 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_424.setTransform(14.9,1182.4,1,1,0,0,0,89.5,111);

	this.instance_425 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_425.setTransform(13.4,1686.6,1,1,0,0,0,89.5,111);

	this.instance_426 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_426.setTransform(123.6,1144.9,1,1,0,0,0,89.5,111);

	this.isDisp_1 = new lib.physHold();
	this.isDisp_1.setTransform(6.4,916.9,1,1,0,0,0,5,3.5);

	this.instance_427 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_427.setTransform(123.6,1350.7,1,1,0,0,0,89.5,111);

	this.instance_428 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_428.setTransform(122.2,1505.9,1,1,0,0,0,89.5,111);

	this.instance_429 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_429.setTransform(122.2,1686.6,1,1,0,0,0,89.5,111);

	this.instance_430 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_430.setTransform(13.4,1027.4,1,1,0,0,0,89.5,111);

	this.instance_431 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_431.setTransform(122.2,1014.9,1,1,0,0,0,89.5,111);

	this.isDisp_2 = new lib.physHold();
	this.isDisp_2.setTransform(1.6,800.6,1,1,0,0,0,5,3.5);

	this.instance_432 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_432.setTransform(8.6,936.1,1,1,0,0,0,89.5,111);

	this.instance_433 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_433.setTransform(117.4,898.6,1,1,0,0,0,89.5,111);

	this.instance_434 = new lib.barnfloor_hyphen_top_hyphen_left_dot_png();
	this.instance_434.setTransform(168.9,913,1,1,0,0,0,38,47.5);

	this.instance_435 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_435.setTransform(8.6,1797.8,1,1,0,0,0,89.5,111);

	this.instance_436 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_436.setTransform(8.6,1959.8,1,1,0,0,0,89.5,111);

	this.instance_437 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_437.setTransform(7.2,2277,1,1,0,0,0,89.5,111);

	this.instance_438 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_438.setTransform(117.4,1797.8,1,1,0,0,0,89.5,111);

	this.instance_439 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_439.setTransform(115.9,2115,1,1,0,0,0,89.5,111);

	this.instance_440 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_440.setTransform(115.9,2277,1,1,0,0,0,89.5,111);

	this.instance_441 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_441.setTransform(1227.6,1120.6,0.766,0.766,0,0,0,51,16);

	this.instance_442 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_442.setTransform(863.9,1218.9,1,1,0,0,0,126,111);

	this.instance_443 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_443.setTransform(916,1019,1,1,0,0,0,126,111);

	this.instance_444 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_444.setTransform(382.6,1218.9,1,1,0,0,0,89.5,111);

	this.instance_445 = new lib.water_hyphen_bottom_dot_png();
	this.instance_445.setTransform(2909.7,3018.6,1,1,0,0,0,49.5,49.5);

	this.instance_446 = new lib.water_hyphen_middle_dot_png();
	this.instance_446.setTransform(2909.7,2924.2,1,1,0,0,0,49.5,49.5);

	this.instance_447 = new lib.water_hyphen_middle_dot_png();
	this.instance_447.setTransform(2909.7,2863.6,1,1,0,0,0,49.5,49.5);

	this.instance_448 = new lib.water_hyphen_top_dot_png();
	this.instance_448.setTransform(2909.7,2769.3,1,1,0,0,0,49.5,50);

	this.instance_449 = new lib.wall_hyphen_right_dot_png();
	this.instance_449.setTransform(1136.1,1833.9,1.291,1.291,0,0,0,51.5,45);

	this.instance_450 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_450.setTransform(653.9,1399.8,1,1,0,0,0,126,111);

	this.instance_451 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_451.setTransform(1009,1400.8,1,1,0,0,0,126,111);

	this.instance_452 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_452.setTransform(789.7,1970.5,1,1,0,0,0,89.5,111);

	this.instance_453 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_453.setTransform(679.5,2125.7,1,1,0,0,0,89.5,111);

	this.instance_454 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_454.setTransform(329.3,1959.8,1,1,0,0,0,89.5,111);

	this.instance_455 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_455.setTransform(329.3,1797.8,1,1,0,0,0,89.5,111);

	this.instance_456 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_456.setTransform(681,1808.5,1,1,0,0,0,89.5,111);

	this.instance_457 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_457.setTransform(219.1,2115,1,1,0,0,0,89.5,111);

	this.instance_458 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_458.setTransform(308.6,2908.3,1.298,1.298,0,0,0,126,111);

	this.instance_459 = new lib.wall_hyphen_right_dot_png();
	this.instance_459.setTransform(2556.2,1718.5,1.723,2.117,0,0,0,51.5,45);

	this.instance_460 = new lib.water_hyphen_top_dot_png();
	this.instance_460.setTransform(2398.3,1636.9,1.108,1,0,0,0,49.5,50);

	this.instance_461 = new lib.water_hyphen_top_dot_png();
	this.instance_461.setTransform(2291.7,1636.9,1.108,1,0,0,0,49.5,50);

	this.instance_462 = new lib.wall_hyphen_right_dot_png();
	this.instance_462.setTransform(2522.3,1810,2.117,2.117,0,0,0,51.5,45);

	this.instance_463 = new lib.wall_hyphen_left_dot_png();
	this.instance_463.setTransform(2320,1829.6,1.568,1.568,0,0,0,70.5,45);

	this.instance_464 = new lib.wall_hyphen_left_dot_png();
	this.instance_464.setTransform(2131.8,1147.3,0.796,1.019,0,0,0,70.5,45);

	this.instance_465 = new lib.wall_hyphen_left_dot_png();
	this.instance_465.setTransform(2136.9,1225.7,0.796,1.019,0,0,0,70.5,45);

	this.instance_466 = new lib.wall_hyphen_right_dot_png();
	this.instance_466.setTransform(2567.2,1974.1,1.305,2.117,0,0,0,51.5,45);

	this.instance_467 = new lib.wall_hyphen_left_dot_png();
	this.instance_467.setTransform(2345.8,715.3,1.568,1.568,0,0,0,70.5,45);

	this.instance_468 = new lib.wall_hyphen_left_dot_png();
	this.instance_468.setTransform(2155.8,950,1.225,1.568,0,0,0,70.5,45);

	this.instance_469 = new lib.wall_hyphen_left_dot_png();
	this.instance_469.setTransform(2241.1,1141.8,0.796,1.019,180,0,0,70.5,45);

	this.instance_470 = new lib.wall_hyphen_left_dot_png();
	this.instance_470.setTransform(2241.1,1064.2,0.796,1.019,180,0,0,70.5,45);

	this.instance_471 = new lib.wall_hyphen_left_dot_png();
	this.instance_471.setTransform(2222.2,950,1.225,1.568,180,0,0,70.5,45);

	this.instance_472 = new lib.wall_hyphen_left_dot_png();
	this.instance_472.setTransform(2241.1,1219.9,0.796,1.019,180,0,0,70.5,45);

	this.instance_473 = new lib.wall_hyphen_right_dot_png();
	this.instance_473.setTransform(2538,224.3,2.117,2.117,0,0,0,51.5,45);

	this.instance_474 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_474.setTransform(2548.1,2216,1.309,1.309,180,0,0,63,21);

	this.instance_475 = new lib.wall_hyphen_left_dot_png();
	this.instance_475.setTransform(2348.9,-45.7,1.568,1.568,0,0,0,70.5,45);

	this.instance_476 = new lib.wall_hyphen_right_dot_png();
	this.instance_476.setTransform(2534.9,184.4,2.117,2.117,0,0,0,51.5,45);

	this.instance_477 = new lib.wall_hyphen_left_dot_png();
	this.instance_477.setTransform(2348.9,81.6,1.568,1.568,0,0,0,70.5,45);

	this.instance_478 = new lib.wall_hyphen_right_dot_png();
	this.instance_478.setTransform(2538,57,2.117,2.117,0,0,0,51.5,45);

	this.instance_479 = new lib.wall_hyphen_right_dot_png();
	this.instance_479.setTransform(2538,-21,2.117,2.117,0,0,0,51.5,45);

	this.instance_480 = new lib.hazardsign_dot_png();
	this.instance_480.setTransform(1275.7,2466.2,0.558,0.558,0,0,0,51,46.1);

	this.instance_481 = new lib.endpole_dot_png();
	this.instance_481.setTransform(1277.2,2505.7,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_482 = new lib.hazardsign_dot_png();
	this.instance_482.setTransform(1758.5,2476.2,0.558,0.558,0,0,0,51,46.1);

	this.instance_483 = new lib.endpole_dot_png();
	this.instance_483.setTransform(1760,2515.7,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_484 = new lib.hazardsign_dot_png();
	this.instance_484.setTransform(2336.3,1550.7,0.558,0.558,0,0,0,51,46.1);

	this.instance_485 = new lib.endpole_dot_png();
	this.instance_485.setTransform(2337.8,1590.2,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_486 = new lib.hazardsign_dot_png();
	this.instance_486.setTransform(3114.2,2683.8,0.558,0.558,0,0,0,51,46.1);

	this.instance_487 = new lib.endpole_dot_png();
	this.instance_487.setTransform(3115.7,2723.3,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_488 = new lib.hazardsign_dot_png();
	this.instance_488.setTransform(4167.3,2853.9,0.558,0.558,0,0,0,51,46.1);

	this.instance_489 = new lib.endpole_dot_png();
	this.instance_489.setTransform(4168.8,2893.4,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_490 = new lib.hazardsign_dot_png();
	this.instance_490.setTransform(4389.9,2851.4,0.558,0.558,0,0,0,51,46.1);

	this.instance_491 = new lib.endpole_dot_png();
	this.instance_491.setTransform(4391.4,2890.9,0.609,0.609,0,0,0,8.2,39.5);

	this.addChild(this.instance_491,this.instance_490,this.instance_489,this.instance_488,this.instance_487,this.instance_486,this.instance_485,this.instance_484,this.instance_483,this.instance_482,this.instance_481,this.instance_480,this.instance_479,this.instance_478,this.instance_477,this.instance_476,this.instance_475,this.instance_474,this.instance_473,this.instance_472,this.instance_471,this.instance_470,this.instance_469,this.instance_468,this.instance_467,this.instance_466,this.instance_465,this.instance_464,this.instance_463,this.instance_462,this.instance_461,this.instance_460,this.instance_459,this.instance_458,this.instance_457,this.instance_456,this.instance_455,this.instance_454,this.instance_453,this.instance_452,this.instance_451,this.instance_450,this.instance_449,this.instance_448,this.instance_447,this.instance_446,this.instance_445,this.instance_444,this.instance_443,this.instance_442,this.instance_441,this.instance_440,this.instance_439,this.instance_438,this.instance_437,this.instance_436,this.instance_435,this.instance_434,this.instance_433,this.instance_432,this.isDisp_2,this.instance_431,this.instance_430,this.instance_429,this.instance_428,this.instance_427,this.isDisp_1,this.instance_426,this.instance_425,this.instance_424,this.instance_423,this.instance_422,this.instance_421,this.instance_420,this.instance_419,this.instance_418,this.instance_417,this.instance_416,this.instance_415,this.instance_414,this.instance_413,this.instance_412,this.instance_411,this.instance_410,this.instance_409,this.instance_408,this.instance_407,this.instance_406,this.instance_405,this.instance_404,this.instance_403,this.instance_402,this.instance_401,this.instance_400,this.instance_399,this.instance_398,this.instance_397,this.instance_396,this.instance_395,this.instance_394,this.instance_393,this.instance_392,this.instance_391,this.instance_390,this.instance_389,this.instance_388,this.instance_387,this.instance_386,this.instance_385,this.instance_384,this.instance_383,this.instance_382,this.instance_381,this.instance_380,this.instance_379,this.instance_378,this.instance_377,this.instance_376,this.instance_375,this.instance_374,this.instance_373,this.instance_372,this.instance_371,this.instance_370,this.instance_369,this.instance_368,this.instance_367,this.instance_366,this.instance_365,this.instance_364,this.instance_363,this.instance_362,this.instance_361,this.instance_360,this.instance_359,this.instance_358,this.instance_357,this.isDisp,this.instance_356,this.instance_355,this.instance_354,this.instance_353,this.instance_352,this.instance_351,this.instance_350,this.instance_349,this.instance_348,this.instance_347,this.instance_346,this.instance_345,this.instance_344,this.instance_343,this.instance_342,this.instance_341,this.instance_340,this.instance_339,this.instance_338,this.instance_337,this.instance_336,this.instance_335,this.instance_334,this.instance_333,this.instance_332,this.instance_331,this.instance_330,this.instance_329,this.instance_328,this.instance_327,this.instance_326,this.instance_325,this.instance_324,this.instance_323,this.instance_322,this.instance_321,this.instance_320,this.instance_319,this.instance_318,this.instance_317,this.instance_316,this.instance_315,this.instance_314,this.instance_313,this.instance_312,this.instance_311,this.instance_310,this.instance_309,this.instance_308,this.instance_307,this.instance_306,this.instance_305,this.instance_304,this.instance_303,this.instance_302,this.instance_301,this.instance_300,this.instance_299,this.instance_298,this.instance_297,this.instance_296,this.instance_295,this.instance_294,this.instance_293,this.instance_292,this.instance_291,this.instance_290,this.instance_289,this.instance_288,this.instance_287,this.instance_286,this.instance_285,this.instance_284,this.instance_283,this.instance_282,this.instance_281,this.instance_280,this.instance_279,this.instance_278,this.instance_277,this.instance_276,this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.platformdoor,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.level18platform1,this.level18platform2,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.3,-1319.5,5499.8,4410.4);


(lib.level18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wall();
	this.instance.setTransform(393.6,264.1,0.271,0.308,90,0,0,0.2,0);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(874.5,282.6,0.25,0.249,0,0,0,-2,2);

	this.instance_2 = new lib.wall();
	this.instance_2.setTransform(932.8,175.8,3.679,0.668,90);

	this.instance_3 = new lib.floor();
	this.instance_3.setTransform(1032.2,1019.9,2.643,0.25);

	this.instance_4 = new lib.wall();
	this.instance_4.setTransform(679,560,5.397,0.223,90);

	this.level18platform1_switch = new lib.item4Switch_switch();
	this.level18platform1_switch.setTransform(395,235.5,0.25,0.25,0,0,0,-1.6,-3.2);

	this.level18platform2_ref = new lib.keith12platform1_ref();
	this.level18platform2_ref.setTransform(749.7,704.3,6.097,0.701,-90,0,0,0.1,-0.1);

	this.level18platform2 = new lib.keef12platform1();
	this.level18platform2.setTransform(750,400,1.374,0.521);

	this.instance_5 = new lib.deadZone();
	this.instance_5.setTransform(950,540,0.249,0.9,90,0,0,0,-0.1);

	this.level18platform2_switch = new lib.item4Switch_switch();
	this.level18platform2_switch.setTransform(861,322,0.25,0.25,0,0,0,-1.6,-3.2);

	this.instance_6 = new lib.wall();
	this.instance_6.setTransform(949.7,701.3,0.828,1.004,90,0,0,0.1,0.1);

	this.instance_7 = new lib.deadZone();
	this.instance_7.setTransform(530,1020,0.249,6.2,90);

	this.instance_8 = new lib.deadZone();
	this.instance_8.setTransform(945.2,650,0.249,0.9,90,0,0,0,-0.1);

	this.instance_9 = new lib.wall();
	this.instance_9.setTransform(870,955,1.568,0.609,90,0,0,0.1,0);

	this.instance_10 = new lib.wall();
	this.instance_10.setTransform(870,450,1.941,0.618,90,0,0,0.1,0);

	this.instance_11 = new lib.wall();
	this.instance_11.setTransform(869.6,681.6,0.829,0.609,90,0,0,0.1,0);

	this.level18platform1_ref = new lib.keith12platform1_ref();
	this.level18platform1_ref.setTransform(600,704.3,6.097,0.701,-90,0,0,0.1,-0.1);

	this.level18platform1 = new lib.keef12platform1();
	this.level18platform1.setTransform(601.3,402.9,1.254,0.521);

	this.instance_12 = new lib.floor();
	this.instance_12.setTransform(1226.8,735.3,0.363,0.125);

	this.instance_13 = new lib.deadZone();
	this.instance_13.setTransform(1735.3,1175.7,0.249,3.619,90,0,0,0,-0.1);

	this.instance_14 = new lib.wall();
	this.instance_14.setTransform(1513,1230.3,1,8.234,90,0,0,0.1,0.1);

	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(1338.7,1166.5,1,4.747,90,0,0,0.1,0.1);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(353.5,598.1,4.636,3.532,90);

	this.instance_17 = new lib.skyhook();
	this.instance_17.setTransform(1826.8,1091.5,0.1,0.1);

	this.instance_18 = new lib.skyhook();
	this.instance_18.setTransform(1726.8,991.5,0.1,0.1);

	this.instance_19 = new lib.skyhook();
	this.instance_19.setTransform(1626.8,891.5,0.1,0.1);

	this.platformdoor_ref = new lib.keith12platform1_ref();
	this.platformdoor_ref.setTransform(1076.8,879.1,1.25,0.5,-90);

	this.platformdoor = new lib.keef12platform1();
	this.platformdoor.setTransform(1076.8,937.6,0.499,1.5);

	this.instance_20 = new lib.wall();
	this.instance_20.setTransform(1054.3,41.2,21.539,1);

	this.instance_21 = new lib.wall();
	this.instance_21.setTransform(423.3,41,9.001,1);

	this.instance_22 = new lib.floor();
	this.instance_22.setTransform(1450,816.5,2.75,0.25);

	this.instance_23 = new lib.wall();
	this.instance_23.setTransform(1020.9,441.5,9,0.618,90,0,0,0.1,0);

	this.instance_24 = new lib.star();
	this.instance_24.setTransform(1576.8,691.5,0.25,0.249);

	this.platformdoor_switch = new lib.item4Switch_switch();
	this.platformdoor_switch.setTransform(1226.8,716.5,0.25,0.25,0,0,0,-1.6,-3.2);

	this.instance_25 = new lib.wall();
	this.instance_25.setTransform(2042.9,650.8,11.75,2.297,90,0,0,0.1,0.1);

	this.instance_26 = new lib.wall();
	this.instance_26.setTransform(151.6,817.4,9,1.5,90,0,0,0.1,0.1);

	this.instance_27 = new lib.wall();
	this.instance_27.setTransform(1450,1054.2,4.5,2.75,90,0,0,0.1,0);

	this.instance_28 = new lib.star();
	this.instance_28.setTransform(551.8,741.5,0.25,0.249);

	this.instance_29 = new lib.floor();
	this.instance_29.setTransform(1901.8,1154,1,0.251);

	this.instance_30 = new lib.wall();
	this.instance_30.setTransform(1952.1,1204.1,0.75,2,90,0,0,0.1,0.1);

	this.instance_31 = new lib.wall();
	this.instance_31.setTransform(26.8,516.5,9.001,1,90);

	this.instance_32 = new lib.exit();
	this.instance_32.setTransform(1903.2,1103.8,0.914,0.449,90);

	this.p1 = new lib.shaun();
	this.p1.setTransform(123.1,255.6,0.238,0.66);

	this.instance_33 = new lib.wall();
	this.instance_33.setTransform(675.8,1073.2,0.861,9.75,90,0,0,0.1,0.1);

	this.instance_34 = new lib.deadZone();
	this.instance_34.setTransform(1321.3,1104,0.249,3.619,90,0,0,0,-0.1);

	// Layer 3
	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(1044.9,659,22.72,10.793,0,0,0,0,0.3);

	this.instance_35 = new lib.deadZone();
	this.instance_35.setTransform(1027.4,-118,21.756,0.207,180);

	this.instance_36 = new lib.deadZone();
	this.instance_36.setTransform(-85,627.4,15.107,0.831,90,0,0,0,0.1);

	this.instance_37 = new lib.deadZone();
	this.instance_37.setTransform(2139.7,629.1,15.107,0.831,90);

	this.instance_38 = new lib.deadZone();
	this.instance_38.setTransform(1025,1413.3,21.756,0.846);

	this.instance_39 = new lib.level18Pixi();
	this.instance_39.setTransform(0,0,0.4,0.4);

	// bg
	this.instance_40 = new lib.level18PixiBG();
	this.instance_40.setTransform(0,0,0.4,0.4);

	this.addChild(this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.sizeRef,this.instance_34,this.instance_33,this.p1,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.platformdoor_switch,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.platformdoor,this.platformdoor_ref,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.level18platform1,this.level18platform1_ref,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.level18platform2_switch,this.instance_5,this.level18platform2,this.level18platform2_ref,this.level18platform1_switch,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-568.4,2428.4,2024);


(lib.level17Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.dirt3_dot_png();
	this.instance.setTransform(1001.4,831.7,0.681,0.681,78.7);

	this.instance_1 = new lib.dirt3_dot_png();
	this.instance_1.setTransform(1024.8,914.3,0.681,0.681,174.7);

	this.instance_2 = new lib.dirt3_dot_png();
	this.instance_2.setTransform(223.7,895.5,0.681,0.681,69.7);

	this.instance_3 = new lib.dirt3_dot_png();
	this.instance_3.setTransform(438.7,874.3,0.681,0.681);

	this.instance_4 = new lib.moss_dot_png();
	this.instance_4.setTransform(542.6,893.4,0.892,0.892,-16.2);

	this.instance_5 = new lib.wall_hyphen_right_dot_png();
	this.instance_5.setTransform(495.6,894.1,1.222,1.222);

	this.instance_6 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_6.setTransform(464.5,899.3,1,1,0,0,0,156,21.5);

	this.instance_7 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_7.setTransform(305.4,916.8);

	this.instance_8 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_8.setTransform(308.2,899.3,1,1,0,0,0,156,21.5);

	this.instance_9 = new lib.hay_hyphen_cube_dot_png();
	this.instance_9.setTransform(749.4,1115.1,0.835,0.835,0,0,0,45.5,46.6);

	this.instance_10 = new lib.dirt4_dot_png();
	this.instance_10.setTransform(1052.7,1646.9,1,1,0,0,0,121.5,37.5);

	this.instance_11 = new lib.dirt1_dot_png();
	this.instance_11.setTransform(906.5,1633.3,0.536,0.536,0,0,0,55,87);

	this.instance_12 = new lib.moss_dot_png();
	this.instance_12.setTransform(723.8,1528.7,0.892,0.892);

	this.instance_13 = new lib.moss_dot_png();
	this.instance_13.setTransform(888.9,1487.5,0.892,0.892);

	this.instance_14 = new lib.wall_hyphen_right_dot_png();
	this.instance_14.setTransform(770.5,1589.2,1,1,0,0,0,51.5,45);

	this.instance_15 = new lib.dirt3_dot_png();
	this.instance_15.setTransform(669.5,1466.8,0.681,0.681);

	this.instance_16 = new lib.wall_hyphen_left_dot_png();
	this.instance_16.setTransform(925.9,1676.5,1,1,0,0,0,70.5,45);

	this.instance_17 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_17.setTransform(969.7,1508.3,1.121,1.257,0,0,0,50.5,21.1);

	this.instance_18 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_18.setTransform(1098.6,1541.7,1,1,0,0,0,156,21.5);

	this.instance_19 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_19.setTransform(846.2,1398.6);

	this.instance_20 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_20.setTransform(904.6,1533);

	this.instance_21 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_21.setTransform(930.7,1406.7,0.915,0.524);

	this.instance_22 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_22.setTransform(492.6,1536.6);

	this.instance_23 = new lib.water_hyphen_platform_hyphen_right_dot_png();
	this.instance_23.setTransform(2655.7,1131.9,1.537,1.537,0,0,0,49.7,16.1);

	this.instance_24 = new lib.water_hyphen_platform_hyphen_left_dot_png();
	this.instance_24.setTransform(2510.3,1131.8,1.412,1.554,0,0,0,50,16.8);

	this.instance_25 = new lib.dirt4_dot_png();
	this.instance_25.setTransform(1592,1168.2);

	this.instance_26 = new lib.dirt2_dot_png();
	this.instance_26.setTransform(2260.4,1653.5);

	this.instance_27 = new lib.leaves2_dot_png();
	this.instance_27.setTransform(2900,1496.7,1.295,1.295);

	this.instance_28 = new lib.leaves2_dot_png();
	this.instance_28.setTransform(2139.3,958.9,0.852,0.852,0,0,0,18.4,21.2);

	this.instance_29 = new lib.leaves1_dot_png();
	this.instance_29.setTransform(1274.5,1187.1,1.419,1.419);

	this.instance_30 = new lib.leaves2_dot_png();
	this.instance_30.setTransform(168.6,1355.9,1.719,1.719);

	this.instance_31 = new lib.leaves1_dot_png();
	this.instance_31.setTransform(746.7,1384);

	this.instance_32 = new lib.moss_dot_png();
	this.instance_32.setTransform(2807.5,1566.6,0.768,0.925);

	this.instance_33 = new lib.moss_dot_png();
	this.instance_33.setTransform(1783.5,1571.6);

	this.instance_34 = new lib.moss_dot_png();
	this.instance_34.setTransform(168.3,1486.5,0.846,0.846);

	this.instance_35 = new lib.moss_dot_png();
	this.instance_35.setTransform(49.5,1321.5);

	this.instance_36 = new lib.moss_dot_png();
	this.instance_36.setTransform(-10.5,987.7);

	this.instance_37 = new lib.dirt4_dot_png();
	this.instance_37.setTransform(536.1,853.9);

	this.instance_38 = new lib.dirt3_dot_png();
	this.instance_38.setTransform(390.1,639.9,0.727,0.727);

	this.instance_39 = new lib.dirt4_dot_png();
	this.instance_39.setTransform(-50.2,816.4);

	this.instance_40 = new lib.dirt4_dot_png();
	this.instance_40.setTransform(687.4,711.4);

	this.instance_41 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_41.setTransform(-79.8,874.3,1.174,1.174);

	this.instance_42 = new lib.barnfloor_hyphen_bottom_hyphen_left_dot_png();
	this.instance_42.setTransform(196.9,914.6,1,1,-90.5);

	this.instance_43 = new lib.barnfloor_hyphen_bottom_hyphen_left_dot_png();
	this.instance_43.setTransform(291.3,913.6,1,1,-90.5);

	this.instance_44 = new lib.barnfloor_hyphen_bottom_hyphen_left_dot_png();
	this.instance_44.setTransform(385.7,912.4,1,1,-90.5);

	this.instance_45 = new lib.barnfloor_hyphen_bottom_hyphen_left_dot_png();
	this.instance_45.setTransform(464,912.9,1,1,-90.5);

	this.instance_46 = new lib.barnfloor_hyphen_bottom_hyphen_left_dot_png();
	this.instance_46.setTransform(560,913.4,1,1,-90.5);

	this.instance_47 = new lib.barnfloor_hyphen_bottom_hyphen_left_dot_png();
	this.instance_47.setTransform(646.4,914.2,1,1,-90.5);

	this.instance_48 = new lib.barnfloor_hyphen_bottom_hyphen_left_dot_png();
	this.instance_48.setTransform(740.8,913,1,1,-90.5);

	this.instance_49 = new lib.barnfloor_hyphen_bottom_hyphen_left_dot_png();
	this.instance_49.setTransform(820.7,913.6,1,1,-90.5);

	this.instance_50 = new lib.barnfloor_hyphen_bottom_hyphen_left_dot_png();
	this.instance_50.setTransform(915.1,914,1,1,-90.5);

	this.instance_51 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_51.setTransform(-60.3,812.5);

	this.instance_52 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_52.setTransform(73.4,811.2);

	this.instance_53 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_53.setTransform(252.8,811.2);

	this.instance_54 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_54.setTransform(427.2,811.2);

	this.instance_55 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_55.setTransform(617.9,810.6);

	this.instance_56 = new lib.barnfloor_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_56.setTransform(807.3,810.5);

	this.instance_57 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_57.setTransform(964.6,768.9);

	this.instance_58 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_58.setTransform(964.6,722.7);

	this.instance_59 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_59.setTransform(2920.7,1433.1,1.031,1.152);

	this.instance_60 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_60.setTransform(2999.3,1433.6,1.031,1.152);

	this.instance_61 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_61.setTransform(3219.9,1433.7,1.031,1.152);

	this.instance_62 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_62.setTransform(3116,1433.6,1.031,1.152);

	this.instance_63 = new lib.wall_hyphen_left_dot_png();
	this.instance_63.setTransform(2996.8,1544.7,1,1,0,0,0,70.5,45);

	this.instance_64 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_64.setTransform(2963.6,1499.5);

	this.instance_65 = new lib.wall_hyphen_right_dot_png();
	this.instance_65.setTransform(3275.6,1544.6,1,1,0,0,0,51.5,45);

	this.instance_66 = new lib.wall_hyphen_right_dot_png();
	this.instance_66.setTransform(3274.2,1685.4,1,1,0,0,0,51.5,45);

	this.instance_67 = new lib.wall_hyphen_right_dot_png();
	this.instance_67.setTransform(3275,1604.6,1,1,0,0,0,51.5,45);

	this.instance_68 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_68.setTransform(2941.1,1640.2);

	this.instance_69 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_69.setTransform(2941.1,1559.5);

	this.instance_70 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_70.setTransform(2476.2,1520.8);

	this.instance_71 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_71.setTransform(73.4,1615.9);

	this.instance_72 = new lib.wall_hyphen_left_dot_png();
	this.instance_72.setTransform(-82.3,1602.9,1.142,1.142);

	this.instance_73 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_73.setTransform(365.9,1615.3);

	this.instance_74 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_74.setTransform(492.6,1621.5);

	this.instance_75 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_75.setTransform(933.9,1640.1);

	this.instance_76 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_76.setTransform(1237.7,1640.1);

	this.instance_77 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_77.setTransform(1534,1640.1);

	this.instance_78 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_78.setTransform(1837.8,1640.2);

	this.instance_79 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_79.setTransform(2115.4,1640.1);

	this.instance_80 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_80.setTransform(2421.1,1640.2);

	this.instance_81 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_81.setTransform(2167.4,1520.8);

	this.instance_82 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_82.setTransform(1858,1520.2);

	this.instance_83 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_83.setTransform(1550.4,1524);

	this.instance_84 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_84.setTransform(1239.7,1525.1);

	this.instance_85 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_85.setTransform(70.9,1542.1);

	this.instance_86 = new lib.wall_hyphen_left_dot_png();
	this.instance_86.setTransform(-82.3,1554.1,1.142,1.142);

	this.instance_87 = new lib.wall_hyphen_left_dot_png();
	this.instance_87.setTransform(-82.6,1457.3,1.142,1.142);

	this.instance_88 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_88.setTransform(2504.7,1104.5,1,1,180);

	this.instance_89 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_89.setTransform(1383.8,1356.5,1,1,180);

	this.instance_90 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_90.setTransform(1137.5,1357.5,1.043,1.043,180);

	this.instance_91 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_91.setTransform(1311.2,1317.9);

	this.instance_92 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_92.setTransform(2320.5,961.6);

	this.instance_93 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_93.setTransform(2019.3,961.2);

	this.instance_94 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_94.setTransform(2095.5,961.6);

	this.instance_95 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_95.setTransform(2432.5,959.8);

	this.instance_96 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_96.setTransform(2208.6,961.6);

	this.instance_97 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_97.setTransform(1518.6,1087.5);

	this.instance_98 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_98.setTransform(1594.8,1087.9);

	this.instance_99 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_99.setTransform(1808.7,1088);

	this.instance_100 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_100.setTransform(1707.9,1087.9);

	this.instance_101 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_101.setTransform(1018.4,1211.9);

	this.instance_102 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_102.setTransform(1094.6,1212.3);

	this.instance_103 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_103.setTransform(1308.5,1212.4);

	this.instance_104 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_104.setTransform(1207.8,1212.3);

	this.instance_105 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_105.setTransform(739.6,1398.6);

	this.instance_106 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_106.setTransform(629.5,1398.6);

	this.instance_107 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_107.setTransform(518.3,1398.6);

	this.instance_108 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_108.setTransform(408.9,1398.7);

	this.instance_109 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_109.setTransform(291.4,1398.7);

	this.instance_110 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_110.setTransform(173.9,1398.8);

	this.instance_111 = new lib.wall_hyphen_right_dot_png();
	this.instance_111.setTransform(73.9,1353.2,1.222,1.222);

	this.instance_112 = new lib.wall_hyphen_left_dot_png();
	this.instance_112.setTransform(-83,1359.8,1.142,1.142);

	this.instance_113 = new lib.wall_hyphen_right_dot_png();
	this.instance_113.setTransform(75.2,1315.7,1.222,1.222);

	this.instance_114 = new lib.wall_hyphen_left_dot_png();
	this.instance_114.setTransform(-81.7,1322.3,1.142,1.142);

	this.instance_115 = new lib.wall_hyphen_right_dot_png();
	this.instance_115.setTransform(77.7,1226.3,1.222,1.222);

	this.instance_116 = new lib.wall_hyphen_left_dot_png();
	this.instance_116.setTransform(-79.2,1232.9,1.142,1.142);

	this.instance_117 = new lib.wall_hyphen_right_dot_png();
	this.instance_117.setTransform(79,1127.6,1.222,1.222);

	this.instance_118 = new lib.wall_hyphen_left_dot_png();
	this.instance_118.setTransform(-77.9,1134.2,1.142,1.142);

	this.instance_119 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_119.setTransform(136.7,908.4,1,1,180);

	this.instance_120 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_120.setTransform(281.8,908.3,1,1,180);

	this.instance_121 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_121.setTransform(464.3,907.7,1,1,180);

	this.instance_122 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_122.setTransform(641.8,907.7,1,1,180);

	this.instance_123 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_123.setTransform(821.8,907.7,1,1,180);

	this.instance_124 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_124.setTransform(1011.8,908.4,1,1,180);

	this.instance_125 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_125.setTransform(-60.3,723.3);

	this.instance_126 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_126.setTransform(69.7,723.3);

	this.instance_127 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_127.setTransform(244.7,723.3);

	this.instance_128 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_128.setTransform(419.8,722.7);

	this.instance_129 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_129.setTransform(601.7,723.2);

	this.instance_130 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_130.setTransform(-57.9,629.5);

	this.instance_131 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_131.setTransform(35.9,628.9);

	this.instance_132 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_132.setTransform(216.5,629.5);

	this.instance_133 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_133.setTransform(400.9,630.2);

	this.instance_134 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_134.setTransform(585.9,630.8);

	this.instance_135 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_135.setTransform(771,630.8);

	this.instance_136 = new lib.barnfloor_hyphen_top_hyphen_right_dot_png();
	this.instance_136.setTransform(963.8,633.3);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(1.4,0);

	this.instance_137 = new lib.barnfloor_hyphen_middle_hyphen_right_dot_png();
	this.instance_137.setTransform(961.1,725.1);

	this.instance_138 = new lib.barnfloor_hyphen_middle_hyphen_repeat_dot_png();
	this.instance_138.setTransform(796.7,723.9);

	this.instance_139 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_139.setTransform(1011.2,854,1.114,1.423,180);

	this.instance_140 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_140.setTransform(798.7,849.7,1.114,1.423,180);

	this.instance_141 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_141.setTransform(589.3,850.3,1.114,1.423,180);

	this.instance_142 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_142.setTransform(379.3,852.8,1.114,1.423,180);

	this.instance_143 = new lib.barnfloor_hyphen_top_hyphen_repeat_dot_png();
	this.instance_143.setTransform(177.4,850.9,1.196,1.423,180);

	this.instance_144 = new lib.wall_hyphen_left_dot_png();
	this.instance_144.setTransform(1026.3,1257.8,0.791,0.791);

	this.instance_145 = new lib.wall_hyphen_right_dot_png();
	this.instance_145.setTransform(1319.3,1239,0.917,0.917);

	this.instance_146 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_146.setTransform(1045.2,1255.5,1.158,1.465);

	this.instance_147 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_147.setTransform(1884,1233.3,1,1,180);

	this.instance_148 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_148.setTransform(1637.6,1234.3,1.043,1.043,180);

	this.instance_149 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_149.setTransform(1811.4,1194.7);

	this.instance_150 = new lib.wall_hyphen_left_dot_png();
	this.instance_150.setTransform(1526.5,1134.6,0.791,0.791);

	this.instance_151 = new lib.wall_hyphen_right_dot_png();
	this.instance_151.setTransform(1819.4,1115.8,0.917,0.917);

	this.instance_152 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_152.setTransform(1545.3,1132.3,1.158,1.465);

	this.instance_153 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_153.setTransform(2140.3,1109.3,1.043,1.043,180);

	this.instance_154 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_154.setTransform(2434.7,1063.5);

	this.instance_155 = new lib.wall_hyphen_left_dot_png();
	this.instance_155.setTransform(2026.6,1004.6,0.791,0.791);

	this.instance_156 = new lib.wall_hyphen_right_dot_png();
	this.instance_156.setTransform(2444,1002,0.917,0.917);

	this.instance_157 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_157.setTransform(2056.1,1004.8,1.016,1.465);

	this.instance_158 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_158.setTransform(2387.9,1106.4,1,1,180);

	this.instance_159 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_159.setTransform(2159.8,1007.9,1.016,1.465);

	this.instance_160 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_160.setTransform(69,1457.7);

	this.instance_161 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_161.setTransform(363.4,1541.5);

	this.instance_162 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_162.setTransform(361.5,1457.1);

	this.instance_163 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_163.setTransform(933.9,1559.4);

	this.instance_164 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_164.setTransform(1237.7,1559.4);

	this.instance_165 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_165.setTransform(1534,1559.4);

	this.instance_166 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_166.setTransform(1837.8,1559.5);

	this.instance_167 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_167.setTransform(2115.4,1559.4);

	this.instance_168 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_168.setTransform(2421.1,1559.5);

	this.instance_169 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_169.setTransform(2724.2,1640.2);

	this.instance_170 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_170.setTransform(2724.2,1559.5);

	this.instance_171 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_171.setTransform(2631.9,1519.5);

	this.instance_172 = new lib.mud_hyphen_repeat_dot_png();
	this.instance_172.setTransform(855.4,1402.6,0.863,0.636);

	this.instance_173 = new lib.tool_dot_png();
	this.instance_173.setTransform(752.6,629.2,1.131,1.131,-80.4);

	this.instance_174 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_174.setTransform(2578.7,1153.2,1,1,0,0,0,60.5,36);

	this.instance_175 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_175.setTransform(2682.2,1157.3,0.95,0.95,0,0,0,55.5,41);

	this.instance_176 = new lib.water_hyphen_top_dot_png();
	this.instance_176.setTransform(1221.8,1504.1,1,1,0,0,0,49.5,50);

	this.instance_177 = new lib.water_hyphen_top_dot_png();
	this.instance_177.setTransform(1315.1,1504.1,1,1,0,0,0,49.5,50);

	this.instance_178 = new lib.water_hyphen_top_dot_png();
	this.instance_178.setTransform(1412.2,1504.1,1,1,0,0,0,49.5,50);

	this.instance_179 = new lib.water_hyphen_top_dot_png();
	this.instance_179.setTransform(1508.5,1504.1,1,1,0,0,0,49.5,50);

	this.instance_180 = new lib.water_hyphen_top_dot_png();
	this.instance_180.setTransform(1605.6,1504.1,1,1,0,0,0,49.5,50);

	this.instance_181 = new lib.water_hyphen_top_dot_png();
	this.instance_181.setTransform(1702.5,1504.1,1,1,0,0,0,49.5,50);

	this.instance_182 = new lib.water_hyphen_top_dot_png();
	this.instance_182.setTransform(1799.6,1504.1,1,1,0,0,0,49.5,50);

	this.instance_183 = new lib.water_hyphen_top_dot_png();
	this.instance_183.setTransform(1896,1504.1,1,1,0,0,0,49.5,50);

	this.instance_184 = new lib.water_hyphen_top_dot_png();
	this.instance_184.setTransform(1993.1,1504.1,1,1,0,0,0,49.5,50);

	this.instance_185 = new lib.water_hyphen_top_dot_png();
	this.instance_185.setTransform(2086.4,1504.1,1,1,0,0,0,49.5,50);

	this.instance_186 = new lib.water_hyphen_top_dot_png();
	this.instance_186.setTransform(2183.5,1504.1,1,1,0,0,0,49.5,50);

	this.instance_187 = new lib.water_hyphen_top_dot_png();
	this.instance_187.setTransform(2279.8,1504.1,1,1,0,0,0,49.5,50);

	this.instance_188 = new lib.water_hyphen_top_dot_png();
	this.instance_188.setTransform(2376.9,1504.1,1,1,0,0,0,49.5,50);

	this.instance_189 = new lib.water_hyphen_top_dot_png();
	this.instance_189.setTransform(2470.6,1504.1,1,1,0,0,0,49.5,50);

	this.instance_190 = new lib.water_hyphen_top_dot_png();
	this.instance_190.setTransform(2567.7,1504.1,1,1,0,0,0,49.5,50);

	this.instance_191 = new lib.water_hyphen_top_dot_png();
	this.instance_191.setTransform(2661,1504.1,1,1,0,0,0,49.5,50);

	this.instance_192 = new lib.water_hyphen_top_dot_png();
	this.instance_192.setTransform(2758.1,1504.1,1,1,0,0,0,49.5,50);

	this.instance_193 = new lib.water_hyphen_top_dot_png();
	this.instance_193.setTransform(2854.4,1504.1,1,1,0,0,0,49.5,50);

	this.instance_194 = new lib.water_hyphen_top_dot_png();
	this.instance_194.setTransform(2951.5,1504.1,1,1,0,0,0,49.5,50);

	this.instance_195 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_195.setTransform(2487.3,1156.7,0.952,0.952,0,0,0,60.5,41.5);

	this.instance_196 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_196.setTransform(492.6,1457.1);

	this.instance_197 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_197.setTransform(904.6,1615.3);

	this.instance_198 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_198.setTransform(870.8,1422.9,1,1,21.5);

	this.instance_199 = new lib.water_hyphen_top_dot_png();
	this.instance_199.setTransform(1028.3,1504.1,1,1,0,0,0,49.5,50);

	this.instance_200 = new lib.water_hyphen_top_dot_png();
	this.instance_200.setTransform(1124.7,1504.1,1,1,0,0,0,49.5,50);

	this.instance_201 = new lib.wall_hyphen_left_dot_png();
	this.instance_201.setTransform(925.7,1508.2,1,1,0,0,0,70.5,45);

	this.instance_202 = new lib.water_hyphen_top_dot_png();
	this.instance_202.setTransform(931.2,1504.1,1,1,0,0,0,49.5,50);

	this.instance_203 = new lib.wall_hyphen_left_dot_png();
	this.instance_203.setTransform(928.2,1589.2,1,1,0,0,0,70.5,45);

	this.instance_204 = new lib.wall_hyphen_right_dot_png();
	this.instance_204.setTransform(770.5,1499.2,1,1,0,0,0,51.5,45);

	this.instance_205 = new lib.wall_hyphen_right_dot_png();
	this.instance_205.setTransform(772.1,1671.6,1,1,0,0,0,51.5,45);

	this.platformdoor = new lib.level17movingitem();
	this.platformdoor.setTransform(840.5,1157.9,1,0.967);

	this.instance_206 = new lib.wall_hyphen_repeat_dot_png();
	this.instance_206.setTransform(149.2,916.8);

	this.addChild(this.instance_206,this.platformdoor,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.isDisp,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-0.5,3416.3,1759);


(lib.level17 = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.level17Pixi();
	this.instance.setTransform(0,0,0.4,0.4);

	this.instance_1 = new lib.hazardsign_dot_png();
	this.instance_1.setTransform(678.7,550.1,0.558,0.558,0,0,0,51,46.1);

	this.instance_2 = new lib.endpole_dot_png();
	this.instance_2.setTransform(680.2,589.6,0.609,0.609,0,0,0,8.2,39.5);

	this.instance_3 = new lib.hazardsign_dot_png();
	this.instance_3.setTransform(966.2,544.5,0.558,0.558,0,0,0,51,46.1);

	this.instance_4 = new lib.endpole_dot_png();
	this.instance_4.setTransform(967.7,584,0.609,0.609,0,0,0,8.2,39.5);

	// Layer 1
	this.instance_5 = new lib.floor();
	this.instance_5.setTransform(300.8,440,0.25,0.126);

	this.instance_6 = new lib.deadZone();
	this.instance_6.setTransform(1031.3,462.6,1.126,0.249,0,0,0,0,-0.2);

	this.instance_7 = new lib.floor();
	this.instance_7.setTransform(912.5,400,2,0.251);

	this.instance_8 = new lib.wall();
	this.instance_8.setTransform(912.3,425,0.25,1.999,90,0,0,0,0.1);

	this.instance_9 = new lib.floor();
	this.instance_9.setTransform(687.5,450,1.5,0.251);

	this.instance_10 = new lib.wall();
	this.instance_10.setTransform(687.4,475,0.25,1.5,90,0,0,0,0.1);

	this.instance_11 = new lib.skyhook();
	this.instance_11.setTransform(1150,425,0.1,0.1);

	this.instance_12 = new lib.floor();
	this.instance_12.setTransform(487.5,500.1,1.5,0.251);

	this.instance_13 = new lib.wall();
	this.instance_13.setTransform(487.4,525.1,0.25,1.5,90,0,0,0,0.1);

	this.instance_14 = new lib.floor();
	this.instance_14.setTransform(1250,587.5,1.5,0.25);

	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(1249.9,612.5,0.25,1.5,90,0,0,0,0.1);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(208.7,310.1,1.048,3.864,90,0,0,0.1,0.1);

	this.instance_17 = new lib.deadZone();
	this.instance_17.setTransform(838.5,600,0.251,9.75,90,0,0,0,-0.1);

	this.platformdoor_ref = new lib.keith12platform1_ref();
	this.platformdoor_ref.setTransform(337.5,607.4,2.856,0.25,90);

	this.platformdoor = new lib.keef12platform1();
	this.platformdoor.setTransform(337.5,462.4,0.25,2);

	this.instance_18 = new lib.star();
	this.instance_18.setTransform(800,325,0.25,0.249);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(658.4,362.2,13.363,6.305,0,0,0,0.1,0.3);

	this.instance_19 = new lib.star();
	this.instance_19.setTransform(500,375,0.25,0.249);

	this.instance_20 = new lib.star();
	this.instance_20.setTransform(1075,325,0.25,0.249);

	this.instance_21 = new lib.wall();
	this.instance_21.setTransform(25,468.6,4.375,1,90);

	this.instance_22 = new lib.exit();
	this.instance_22.setTransform(1270.8,530.2,0.914,0.449,90);

	this.p1 = new lib.shaun();
	this.p1.setTransform(100,500,0.238,0.66);

	this.instance_23 = new lib.wall();
	this.instance_23.setTransform(687.7,637.6,1,12.753,90,0,0,0.1,0);

	this.instance_24 = new lib.floor();
	this.instance_24.setTransform(200,575,3.506,0.25);

	this.platformdoor_switch = new lib.item4Switch_switch();
	this.platformdoor_switch.setTransform(299.6,424.2,0.25,0.25,0,0,0,-1.6,-3.2);

	// Layer 3
	this.instance_25 = new lib.wall();
	this.instance_25.setTransform(300.6,455.4,0.175,0.255,90,0,0,0,0.2);

	this.instance_26 = new lib.level17PixiBG2();
	this.instance_26.setTransform(0,0,0.4,0.4);

	// Layer 2
	this.instance_27 = new lib.deadZone();
	this.instance_27.setTransform(659.5,-122.2,14.819,0.123,180);

	this.instance_28 = new lib.deadZone();
	this.instance_28.setTransform(-98.2,320.3,8.969,0.566,90,0,0,0,0.1);

	this.instance_29 = new lib.deadZone();
	this.instance_29.setTransform(1417.1,321.3,8.969,0.566,90);

	this.instance_30 = new lib.deadZone();
	this.instance_30.setTransform(657.8,786.9,14.819,0.502);

	this.addChild(this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.platformdoor_switch,this.instance_24,this.instance_23,this.p1,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.sizeRef,this.instance_18,this.platformdoor,this.platformdoor_ref,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-128.4,1619.4,940.4);


(lib.level16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.deadZone();
	this.instance.setTransform(533.8,10.4,10.588,0.084,180);

	this.instance_1 = new lib.deadZone();
	this.instance_1.setTransform(-7.6,313,6.132,0.404,90,0,0,0,0.1);

	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(1075.2,313.7,6.132,0.404,90);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(532.7,632,10.588,0.343);

	this.instance_4 = new lib.star();
	this.instance_4.setTransform(602,133.1,0.25,0.25,0,0,0,-1,-3);

	this.instance_5 = new lib.star();
	this.instance_5.setTransform(285.3,166.8,0.25,0.25);

	this.instance_6 = new lib.star();
	this.instance_6.setTransform(287,264,0.25,0.25,0,0,0,-1,-3);

	this.instance_7 = new lib.exit();
	this.instance_7.setTransform(810.5,236.5,0.5,1);

	this.instance_8 = new lib.floor();
	this.instance_8.setTransform(774.9,349.8,1.25,1.25,0,0,0,-0.1,-0.2);

	this.instance_9 = new lib.deadZone();
	this.instance_9.setTransform(725.3,462.5,2.252,1);

	this.instance_10 = new lib.skyhook();
	this.instance_10.setTransform(675,300,0.1,0.1);

	this.instance_11 = new lib.floor();
	this.instance_11.setTransform(237.5,225.1,0.5,1.5,0,0,0,-0.1,-0.2);

	this.instance_12 = new lib.floor();
	this.instance_12.setTransform(412.1,462.2,4,1,0,0,0,-0.1,0);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(499.8,293.7,6.508,4.444,0,0,0,-0.1,-0.8);

	this.p1 = new lib.shaun();
	this.p1.setTransform(337.3,251,0.238,0.66);

	this.instance_13 = new lib.floor();
	this.instance_13.setTransform(537.4,350.2,1.5,1.259,0,0,0,-0.1,0.1);

	this.instance_14 = new lib.floor();
	this.instance_14.setTransform(287.9,349.8,1.5,1.25,0,0,0,-0.1,-0.2);

	// Layer 3
	this.instance_15 = new lib.level16Pixi();
	this.instance_15.setTransform(0,0,0.4,0.4);

	// Layer 2
	this.instance_16 = new lib.level16PixiBG();
	this.instance_16.setTransform(0,0,0.4,0.4);

	this.addChild(this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.p1,this.sizeRef,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.7,-0.2,1123.1,649.3);


(lib.level15Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.woodencrate_dot_png();
	this.instance.setTransform(4394.5,1455.5,0.771,0.771,88.7,0,0,233.9,97.9);

	this.instance_1 = new lib.woodenbox_dot_png();
	this.instance_1.setTransform(4361.8,1287.4,0.93,0.93,89.8,0,0,128,93.5);

	this.platform4 = new lib.level18movingplatform1();
	this.platform4.setTransform(1626.7,2273.4);

	this.instance_2 = new lib.water_hyphen_bottom_dot_png();
	this.instance_2.setTransform(2167.2,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_3 = new lib.water_hyphen_middle_dot_png();
	this.instance_3.setTransform(2125.2,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_4 = new lib.water_hyphen_middle_dot_png();
	this.instance_4.setTransform(2125.2,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_5 = new lib.water_hyphen_top_dot_png();
	this.instance_5.setTransform(2129.2,2744.7,1,1,0,0,0,49.5,50);

	this.instance_6 = new lib.water_hyphen_top_dot_png();
	this.instance_6.setTransform(2075.1,2744.7,1,1,0,0,0,49.5,50);

	this.instance_7 = new lib.water_hyphen_middle_dot_png();
	this.instance_7.setTransform(2075.1,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_8 = new lib.water_hyphen_middle_dot_png();
	this.instance_8.setTransform(2062.3,2928,1,1,0,0,0,49.5,49.5);

	this.instance_9 = new lib.water_hyphen_bottom_dot_png();
	this.instance_9.setTransform(2066.6,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_10 = new lib.water_hyphen_bottom_dot_png();
	this.instance_10.setTransform(2304.6,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_11 = new lib.water_hyphen_middle_dot_png();
	this.instance_11.setTransform(2262.6,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_12 = new lib.water_hyphen_middle_dot_png();
	this.instance_12.setTransform(2262.6,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_13 = new lib.water_hyphen_top_dot_png();
	this.instance_13.setTransform(2266.6,2744.7,1,1,0,0,0,49.5,50);

	this.instance_14 = new lib.water_hyphen_top_dot_png();
	this.instance_14.setTransform(2212.5,2744.7,1,1,0,0,0,49.5,50);

	this.instance_15 = new lib.water_hyphen_middle_dot_png();
	this.instance_15.setTransform(2212.5,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_16 = new lib.water_hyphen_middle_dot_png();
	this.instance_16.setTransform(2199.7,2928,1,1,0,0,0,49.5,49.5);

	this.instance_17 = new lib.water_hyphen_bottom_dot_png();
	this.instance_17.setTransform(2204,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_18 = new lib.water_hyphen_bottom_dot_png();
	this.instance_18.setTransform(2451.1,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_19 = new lib.water_hyphen_middle_dot_png();
	this.instance_19.setTransform(2409.1,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_20 = new lib.water_hyphen_middle_dot_png();
	this.instance_20.setTransform(2409.1,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_21 = new lib.water_hyphen_top_dot_png();
	this.instance_21.setTransform(2413.1,2744.7,1,1,0,0,0,49.5,50);

	this.instance_22 = new lib.water_hyphen_top_dot_png();
	this.instance_22.setTransform(2359.1,2744.7,1,1,0,0,0,49.5,50);

	this.instance_23 = new lib.water_hyphen_middle_dot_png();
	this.instance_23.setTransform(2359.1,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_24 = new lib.water_hyphen_middle_dot_png();
	this.instance_24.setTransform(2346.2,2928,1,1,0,0,0,49.5,49.5);

	this.instance_25 = new lib.water_hyphen_bottom_dot_png();
	this.instance_25.setTransform(2350.6,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.platform3 = new lib.level15movingplatform();
	this.platform3.setTransform(2684.3,2475.1);

	this.instance_26 = new lib.woodencrate_dot_png();
	this.instance_26.setTransform(3888.4,1205.4,0.365,0.668,89.9,0,0,234,98);

	this.instance_27 = new lib.woodencrate_dot_png();
	this.instance_27.setTransform(3495.3,1241.4,0.365,0.668,89.9,0,0,234,98);

	this.instance_28 = new lib.woodencrate_dot_png();
	this.instance_28.setTransform(3519.6,1766.7,0.365,0.668,89.9,0,0,234,98);

	this.instance_29 = new lib.woodencrate_dot_png();
	this.instance_29.setTransform(3104.4,954.4,0.365,0.668,89.9,0,0,234,98);

	this.instance_30 = new lib.woodencrate_dot_png();
	this.instance_30.setTransform(3113.4,1443,0.365,0.668,89.9,0,0,234,98);

	this.instance_31 = new lib.hay_hyphen_cube_dot_png();
	this.instance_31.setTransform(3668.8,1962.1,1,1,0,0,0,45.5,46.5);

	this.instance_32 = new lib.hay_hyphen_cube_dot_png();
	this.instance_32.setTransform(3727.7,1962.1,1,1,0,0,0,45.5,46.5);

	this.instance_33 = new lib.woodenbox_dot_png();
	this.instance_33.setTransform(3686.3,903.4,2.144,0.407,-179.6,0,0,114.6,84.5);

	this.instance_34 = new lib.woodencrate_dot_png();
	this.instance_34.setTransform(4369.3,1618.2,0.73,0.73,-0.1,0,0,234,98);

	this.instance_35 = new lib.woodencrate_dot_png();
	this.instance_35.setTransform(4252.4,1170.3,0.499,0.808,89.9,0,0,234,98);

	this.instance_36 = new lib.woodencrate_dot_png();
	this.instance_36.setTransform(3887.6,1421.6,0.365,0.668,89.9,0,0,234,98);

	this.instance_37 = new lib.woodencrate_dot_png();
	this.instance_37.setTransform(3896.7,1910.2,0.365,0.668,89.9,0,0,234,98);

	this.instance_38 = new lib.woodencrate_dot_png();
	this.instance_38.setTransform(4509.7,1764.7,0.73,0.73,89.9,0,0,234,98);

	this.instance_39 = new lib.woodencrate_dot_png();
	this.instance_39.setTransform(4369.3,1654.8,0.73,0.73,-0.1,0,0,234,98);

	this.instance_40 = new lib.hay_hyphen_cube_dot_png();
	this.instance_40.setTransform(2988.2,678.3,1,1,0,0,0,45.5,46.5);

	this.instance_41 = new lib.hay_hyphen_cube_dot_png();
	this.instance_41.setTransform(3047.1,678.3,1,1,0,0,0,45.5,46.5);

	this.instance_42 = new lib.dirt3_dot_png();
	this.instance_42.setTransform(224.5,1627,0.546,0.546,103.5,0,0,55,88);

	this.instance_43 = new lib.dirt4_dot_png();
	this.instance_43.setTransform(171.1,1853.3,1,1,0,0,0,121.5,37.5);

	this.instance_44 = new lib.dirt1_dot_png();
	this.instance_44.setTransform(592.8,1498.2,1,1,-6.3,0,0,56.2,87.1);

	this.instance_45 = new lib.moss_dot_png();
	this.instance_45.setTransform(613,1166.1,0.752,0.912,-89.5,0,0,40.5,27.6);

	this.instance_46 = new lib.moss_dot_png();
	this.instance_46.setTransform(591.6,1090.9,1,1,-110.6,0,0,40.6,27.5);

	this.instance_47 = new lib.dirt3_dot_png();
	this.instance_47.setTransform(31.1,1185.1,1,1,0,0,0,55,88);

	this.instance_48 = new lib.moss_dot_png();
	this.instance_48.setTransform(624.7,1845.8,0.782,0.782,-83.5,0,0,40.6,27.4);

	this.instance_49 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_49.setTransform(490,1889.3,1,1,0,0,0,60,60);

	this.instance_50 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_50.setTransform(391.8,1889.3,1,1,0,0,0,60,60);

	this.instance_51 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_51.setTransform(277.4,1889.3,1,1,0,0,0,60,60);

	this.instance_52 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_52.setTransform(163.6,1889.3,1,1,0,0,0,60,60);

	this.instance_53 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_53.setTransform(-60.9,1889.3,1,1,0,0,0,53,60);

	this.instance_54 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_54.setTransform(49.2,1889.3,1,1,0,0,0,60,60);

	this.instance_55 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_55.setTransform(580.4,1889.3,1,1,0,0,0,53,60);

	this.instance_56 = new lib.ground_hyphen_right_dot_png();
	this.instance_56.setTransform(579.9,1239.7,1,1,0,0,0,53.5,60.5);

	this.instance_57 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_57.setTransform(498.9,1239.7,1,1,0,0,0,60.5,60.5);

	this.instance_58 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_58.setTransform(403.9,1239.7,1,1,0,0,0,60.5,60.5);

	this.instance_59 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_59.setTransform(287.9,1239.7,1,1,0,0,0,60.5,60.5);

	this.instance_60 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_60.setTransform(169.7,1239.7,1,1,0,0,0,60.5,60.5);

	this.instance_61 = new lib.ground_hyphen_left_dot_png();
	this.instance_61.setTransform(-58.6,1239.7,1,1,0,0,0,53.5,60.5);

	this.instance_62 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_62.setTransform(53.8,1239.7,1,1,0,0,0,60.5,60.5);

	this.instance_63 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_63.setTransform(582.3,1123.7,1,1,0,0,0,57.5,60.5);

	this.instance_64 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_64.setTransform(505.8,1123.7,1,1,0,0,0,60.5,60.5);

	this.instance_65 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_65.setTransform(394.1,1123.7,1,1,0,0,0,60.5,60.5);

	this.instance_66 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_66.setTransform(281.3,1123.7,1,1,0,0,0,60.5,60.5);

	this.instance_67 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_67.setTransform(166.9,1123.7,1,1,0,0,0,60.5,60.5);

	this.instance_68 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_68.setTransform(52.6,1123.7,1,1,0,0,0,60.5,60.5);

	this.instance_69 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_69.setTransform(-60.2,1123.7,1,1,0,0,0,60.5,60.5);

	this.instance_70 = new lib.hay_hyphen_cube_dot_png();
	this.instance_70.setTransform(1136,1926.9,1,1,0,0,0,45.5,46.5);

	this.instance_71 = new lib.hay_hyphen_cube_dot_png();
	this.instance_71.setTransform(1194.9,1925.8,1,1,0,0,0,45.5,46.5);

	this.instance_72 = new lib.dirt4_dot_png();
	this.instance_72.setTransform(421.5,1999.8,1,1,164.3,0,0,121.5,37.5);

	this.instance_73 = new lib.dirt4_dot_png();
	this.instance_73.setTransform(55.5,1214,1,1,0,0,0,121.5,37.5);

	this.instance_74 = new lib.moss_dot_png();
	this.instance_74.setTransform(608.3,1065.6,1,1,-172.8,0,0,40.6,27.5);

	this.instance_75 = new lib.moss_dot_png();
	this.instance_75.setTransform(611.5,2212,1.135,1.135,-80.7,0,0,40.6,27.4);

	this.instance_76 = new lib.woodenbox_dot_png();
	this.instance_76.setTransform(1566.4,2938.7,1.473,1.473,87.5,0,0,114.5,84.5);

	this.instance_77 = new lib.woodenbox_dot_png();
	this.instance_77.setTransform(737.6,2701.1,0.76,0.76,-86.2,0,0,114.8,84.5);

	this.instance_78 = new lib.woodenbox_dot_png();
	this.instance_78.setTransform(1420.3,2938.7,1.842,1.842,-177.2,0,0,114.5,84.5);

	this.instance_79 = new lib.woodenbox_dot_png();
	this.instance_79.setTransform(823.8,2940.8,1.473,1.473,90,0,0,114.5,84.5);

	this.instance_80 = new lib.woodencrate_dot_png();
	this.instance_80.setTransform(489.1,2993.2,1.1,1.1,-0.7,0,0,234,98);

	this.instance_81 = new lib.woodencrate_dot_png();
	this.instance_81.setTransform(124.4,3008.6,1,1,1.5,0,0,234,98);

	this.instance_82 = new lib.tool_dot_png();
	this.instance_82.setTransform(349.3,997.3,1.037,1.037,-7.2,0,0,15,84.5);

	this.instance_83 = new lib.hay_dot_png();
	this.instance_83.setTransform(120.1,992.6,1.584,1.584,0,0,0,152,60);

	this.platform1 = new lib.level15movingplatform();
	this.platform1.setTransform(3328.6,2433.7);

	this.platform2 = new lib.level15movingitem();
	this.platform2.setTransform(4067.9,2222.3);

	this.instance_84 = new lib.hay_hyphen_cube_dot_png();
	this.instance_84.setTransform(4302.7,1875.8,1,1,0,0,0,45.5,46.5);

	this.instance_85 = new lib.hay_hyphen_cube_dot_png();
	this.instance_85.setTransform(4361.6,1875.8,1,1,0,0,0,45.5,46.5);

	this.instance_86 = new lib.woodenbox_dot_png();
	this.instance_86.setTransform(3134.1,3016.9,1.423,1.278,-178.4,0,0,114.5,84.7);

	this.instance_87 = new lib.woodencrate_dot_png();
	this.instance_87.setTransform(3358.6,3076,0.929,1.005,-90.4,0,0,234,98);

	this.instance_88 = new lib.woodenbox_dot_png();
	this.instance_88.setTransform(2912,3010.1,1.254,1.126,91.4,0,0,114.5,84.7);

	this.instance_89 = new lib.woodenbox_dot_png();
	this.instance_89.setTransform(2931.4,2867.7,1.021,0.917,0.6,0,0,114.5,84.7);

	this.instance_90 = new lib.woodenbox_dot_png();
	this.instance_90.setTransform(2999.4,2851.1,1.021,0.917,0.6,0,0,114.5,84.7);

	this.instance_91 = new lib.woodenbox_dot_png();
	this.instance_91.setTransform(3352.9,2830,1.423,1.278,-90.7,0,0,114.5,84.7);

	this.instance_92 = new lib.woodenbox_dot_png();
	this.instance_92.setTransform(3189.3,2768.6,1.423,1.278,-88.9,0,0,114.5,84.7);

	this.instance_93 = new lib.woodenbox_dot_png();
	this.instance_93.setTransform(2987.9,2692.2,1.423,1.278,-178.4,0,0,114.5,84.7);

	this.instance_94 = new lib.woodencrate_dot_png();
	this.instance_94.setTransform(3038.2,2534.3,1,1,178.6,0,0,234,98);

	this.instance_95 = new lib.woodenbox_dot_png();
	this.instance_95.setTransform(4777.2,2963.5,1.33,1.194,89.9,0,0,114.5,84.6);

	this.instance_96 = new lib.woodenbox_dot_png();
	this.instance_96.setTransform(4609,2995.5,1.33,1.194,85,0,0,114.5,84.5);

	this.instance_97 = new lib.metalbox_dot_png();
	this.instance_97.setTransform(4491.5,2956.1,0.641,0.641,92.3,0,0,341.4,61.5);

	this.instance_98 = new lib.woodencrate_dot_png();
	this.instance_98.setTransform(4071.6,3039.6,1,1,3,0,0,234,98);

	this.instance_99 = new lib.woodenbox_dot_png();
	this.instance_99.setTransform(4203.5,2872.7,1.423,1.278,176.1,0,0,114.5,84.7);

	this.instance_100 = new lib.woodenbox_dot_png();
	this.instance_100.setTransform(3949.3,2927,1.33,1.194,89.9,0,0,114.5,84.6);

	this.instance_101 = new lib.woodencrate_dot_png();
	this.instance_101.setTransform(4611.3,2794.6,1.182,1.182,-177.3,0,0,234,98);

	this.instance_102 = new lib.woodenbox_dot_png();
	this.instance_102.setTransform(3927.1,2457.8,0.844,0.844,180,0,0,114.5,84.5);

	this.instance_103 = new lib.woodencrate_dot_png();
	this.instance_103.setTransform(4400.8,1748.3,0.771,0.771,88.7,0,0,233.9,97.9);

	this.instance_104 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_104.setTransform(4844,2463.5,0.62,1,87.2,0,0,92.3,15.7);

	this.instance_105 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_105.setTransform(4777.1,2431.3,0.539,1.524,-3,0,0,92.5,15.7);

	this.instance_106 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_106.setTransform(4631.6,2544.7,0.73,1,180,0,0,92.5,15.5);

	this.instance_107 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_107.setTransform(4471.6,2544.7,1,1,180,0,0,92.5,15.5);

	this.instance_108 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_108.setTransform(4287.2,2541.2,1,1,180,0,0,92.5,15.5);

	this.instance_109 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_109.setTransform(4110.3,2541.2,1,1,180,0,0,92.5,15.5);

	this.instance_110 = new lib.shadow_hyphen_repeat_dot_png();
	this.instance_110.setTransform(3925.3,2541.2,1,1,180,0,0,92.5,15.5);

	this.instance_111 = new lib.woodenbox_dot_png();
	this.instance_111.setTransform(4604.6,2453.1,1.114,1,0,0,0,114.5,84.5);

	this.instance_112 = new lib.water_hyphen_bottom_dot_png();
	this.instance_112.setTransform(3703.7,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_113 = new lib.water_hyphen_bottom_dot_png();
	this.instance_113.setTransform(3593.2,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_114 = new lib.water_hyphen_bottom_dot_png();
	this.instance_114.setTransform(3482.2,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_115 = new lib.water_hyphen_bottom_dot_png();
	this.instance_115.setTransform(3371.6,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_116 = new lib.water_hyphen_bottom_dot_png();
	this.instance_116.setTransform(3260.6,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_117 = new lib.water_hyphen_bottom_dot_png();
	this.instance_117.setTransform(3150.2,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_118 = new lib.water_hyphen_bottom_dot_png();
	this.instance_118.setTransform(3039.2,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_119 = new lib.water_hyphen_bottom_dot_png();
	this.instance_119.setTransform(2930.2,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_120 = new lib.water_hyphen_bottom_dot_png();
	this.instance_120.setTransform(2819.2,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_121 = new lib.water_hyphen_bottom_dot_png();
	this.instance_121.setTransform(2708.7,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_122 = new lib.water_hyphen_bottom_dot_png();
	this.instance_122.setTransform(2597.7,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_123 = new lib.water_hyphen_bottom_dot_png();
	this.instance_123.setTransform(1944.7,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_124 = new lib.water_hyphen_bottom_dot_png();
	this.instance_124.setTransform(1834.3,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_125 = new lib.water_hyphen_bottom_dot_png();
	this.instance_125.setTransform(1734.8,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_126 = new lib.water_hyphen_middle_dot_png();
	this.instance_126.setTransform(3744.6,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_127 = new lib.water_hyphen_middle_dot_png();
	this.instance_127.setTransform(3650.2,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_128 = new lib.water_hyphen_middle_dot_png();
	this.instance_128.setTransform(3565.6,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_129 = new lib.water_hyphen_middle_dot_png();
	this.instance_129.setTransform(3471.2,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_130 = new lib.water_hyphen_middle_dot_png();
	this.instance_130.setTransform(3379.1,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_131 = new lib.water_hyphen_middle_dot_png();
	this.instance_131.setTransform(3284.7,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_132 = new lib.water_hyphen_middle_dot_png();
	this.instance_132.setTransform(3193.2,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_133 = new lib.water_hyphen_middle_dot_png();
	this.instance_133.setTransform(3098.7,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_134 = new lib.water_hyphen_middle_dot_png();
	this.instance_134.setTransform(3006.7,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_135 = new lib.water_hyphen_middle_dot_png();
	this.instance_135.setTransform(2912.2,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_136 = new lib.water_hyphen_middle_dot_png();
	this.instance_136.setTransform(2836.7,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_137 = new lib.water_hyphen_middle_dot_png();
	this.instance_137.setTransform(2742.2,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_138 = new lib.water_hyphen_middle_dot_png();
	this.instance_138.setTransform(2650.2,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_139 = new lib.water_hyphen_middle_dot_png();
	this.instance_139.setTransform(2555.7,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_140 = new lib.water_hyphen_middle_dot_png();
	this.instance_140.setTransform(2004.3,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_141 = new lib.water_hyphen_middle_dot_png();
	this.instance_141.setTransform(1912.2,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_142 = new lib.water_hyphen_middle_dot_png();
	this.instance_142.setTransform(1817.8,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_143 = new lib.water_hyphen_middle_dot_png();
	this.instance_143.setTransform(1726.3,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_144 = new lib.water_hyphen_middle_dot_png();
	this.instance_144.setTransform(3744.6,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_145 = new lib.water_hyphen_middle_dot_png();
	this.instance_145.setTransform(3650.2,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_146 = new lib.water_hyphen_middle_dot_png();
	this.instance_146.setTransform(3565.6,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_147 = new lib.water_hyphen_middle_dot_png();
	this.instance_147.setTransform(3471.2,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_148 = new lib.water_hyphen_middle_dot_png();
	this.instance_148.setTransform(3379.1,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_149 = new lib.water_hyphen_middle_dot_png();
	this.instance_149.setTransform(3284.7,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_150 = new lib.water_hyphen_middle_dot_png();
	this.instance_150.setTransform(3193.2,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_151 = new lib.water_hyphen_middle_dot_png();
	this.instance_151.setTransform(3098.7,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_152 = new lib.water_hyphen_middle_dot_png();
	this.instance_152.setTransform(3006.7,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_153 = new lib.water_hyphen_middle_dot_png();
	this.instance_153.setTransform(2912.2,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_154 = new lib.water_hyphen_middle_dot_png();
	this.instance_154.setTransform(2836.7,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_155 = new lib.water_hyphen_middle_dot_png();
	this.instance_155.setTransform(2742.2,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_156 = new lib.water_hyphen_middle_dot_png();
	this.instance_156.setTransform(2650.2,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_157 = new lib.water_hyphen_middle_dot_png();
	this.instance_157.setTransform(2555.7,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_158 = new lib.water_hyphen_middle_dot_png();
	this.instance_158.setTransform(2004.3,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_159 = new lib.water_hyphen_middle_dot_png();
	this.instance_159.setTransform(1912.2,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_160 = new lib.water_hyphen_middle_dot_png();
	this.instance_160.setTransform(1817.8,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_161 = new lib.water_hyphen_middle_dot_png();
	this.instance_161.setTransform(1726.3,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_162 = new lib.water_hyphen_top_dot_png();
	this.instance_162.setTransform(3779.7,2744.7,1,1,0,0,0,49.5,50);

	this.instance_163 = new lib.water_hyphen_top_dot_png();
	this.instance_163.setTransform(3684.1,2744.7,1,1,0,0,0,49.5,50);

	this.instance_164 = new lib.water_hyphen_top_dot_png();
	this.instance_164.setTransform(3589.7,2744.7,1,1,0,0,0,49.5,50);

	this.instance_165 = new lib.water_hyphen_top_dot_png();
	this.instance_165.setTransform(3498.1,2744.7,1,1,0,0,0,49.5,50);

	this.instance_166 = new lib.water_hyphen_top_dot_png();
	this.instance_166.setTransform(3403.7,2744.7,1,1,0,0,0,49.5,50);

	this.instance_167 = new lib.water_hyphen_top_dot_png();
	this.instance_167.setTransform(3308.1,2744.7,1,1,0,0,0,49.5,50);

	this.instance_168 = new lib.water_hyphen_top_dot_png();
	this.instance_168.setTransform(3213.7,2744.7,1,1,0,0,0,49.5,50);

	this.instance_169 = new lib.water_hyphen_top_dot_png();
	this.instance_169.setTransform(3121.1,2744.7,1,1,0,0,0,49.5,50);

	this.instance_170 = new lib.water_hyphen_top_dot_png();
	this.instance_170.setTransform(3026.7,2744.7,1,1,0,0,0,49.5,50);

	this.instance_171 = new lib.water_hyphen_top_dot_png();
	this.instance_171.setTransform(2931.1,2744.7,1,1,0,0,0,49.5,50);

	this.instance_172 = new lib.water_hyphen_top_dot_png();
	this.instance_172.setTransform(2844.2,2744.7,1,1,0,0,0,49.5,50);

	this.instance_173 = new lib.water_hyphen_top_dot_png();
	this.instance_173.setTransform(2749.7,2744.7,1,1,0,0,0,49.5,50);

	this.instance_174 = new lib.water_hyphen_top_dot_png();
	this.instance_174.setTransform(2654.2,2744.7,1,1,0,0,0,49.5,50);

	this.instance_175 = new lib.water_hyphen_top_dot_png();
	this.instance_175.setTransform(2559.7,2744.7,1,1,0,0,0,49.5,50);

	this.instance_176 = new lib.water_hyphen_top_dot_png();
	this.instance_176.setTransform(2505.7,2744.7,1,1,0,0,0,49.5,50);

	this.instance_177 = new lib.water_hyphen_top_dot_png();
	this.instance_177.setTransform(2024.3,2744.7,1,1,0,0,0,49.5,50);

	this.instance_178 = new lib.water_hyphen_top_dot_png();
	this.instance_178.setTransform(1997.3,2744.7,1,1,0,0,0,49.5,50);

	this.instance_179 = new lib.water_hyphen_top_dot_png();
	this.instance_179.setTransform(1901.8,2744.7,1,1,0,0,0,49.5,50);

	this.instance_180 = new lib.water_hyphen_top_dot_png();
	this.instance_180.setTransform(1807.3,2744.7,1,1,0,0,0,49.5,50);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_181 = new lib.woodencrate_dot_png();
	this.instance_181.setTransform(4478.1,2619.7,1,1,0,0,0,234,98);

	this.instance_182 = new lib.woodencrate_dot_png();
	this.instance_182.setTransform(4058.6,2612.6,1,1,179.6,0,0,234,98);

	this.instance_183 = new lib.woodenbox_dot_png();
	this.instance_183.setTransform(4386.1,2459.1,0.93,0.93,2.2,0,0,114.5,84.5);

	this.instance_184 = new lib.woodenbox_dot_png();
	this.instance_184.setTransform(4219.4,2430.9,0.93,0.93,89.8,0,0,114.5,84.5);

	this.instance_185 = new lib.woodenbox_dot_png();
	this.instance_185.setTransform(4075.7,2417,1.074,1.074,90,0,0,114.5,84.5);

	this.instance_186 = new lib.woodenbox_dot_png();
	this.instance_186.setTransform(3946.6,2328.5,0.938,0.938,179,0,0,114.5,84.5);

	this.instance_187 = new lib.woodenbox_dot_png();
	this.instance_187.setTransform(4219.4,2393.1,0.93,0.93,89.8,0,0,114.5,84.5);

	this.instance_188 = new lib.pallette_dot_png();
	this.instance_188.setTransform(4114.3,2287.8,0.862,0.862,0,0,0,74,17.7);

	this.instance_189 = new lib.woodencrate_dot_png();
	this.instance_189.setTransform(4664.1,2614.5,1,1,0,0,0,234,98);

	this.instance_190 = new lib.metalbox_dot_png();
	this.instance_190.setTransform(4820.8,2202.6,1,1,92.6,0,0,341.5,61.5);

	this.instance_191 = new lib.woodencrate_dot_png();
	this.instance_191.setTransform(4707.9,2311.2,0.73,0.73,89.9,0,0,234,98);

	this.instance_192 = new lib.woodencrate_dot_png();
	this.instance_192.setTransform(4579.9,2264.1,0.771,0.771,92.9,0,0,233.9,97.9);

	this.instance_193 = new lib.woodencrate_dot_png();
	this.instance_193.setTransform(4336,2337.5,0.83,0.855,-179.3,0,0,234,98);

	this.instance_194 = new lib.metalbox_dot_png();
	this.instance_194.setTransform(4353.5,2241.4,0.48,0.48,0,0,0,341.5,61.5);

	this.instance_195 = new lib.metalbox_dot_png();
	this.instance_195.setTransform(4366.9,2220.5,0.504,0.554,-1,0,0,341.4,61.6);

	this.instance_196 = new lib.pallette_dot_png();
	this.instance_196.setTransform(4116.2,2265,1.043,1.043,-2.5,0,0,73.9,17.7);

	this.instance_197 = new lib.woodenbox_dot_png();
	this.instance_197.setTransform(4525.3,2100.6,1.251,1.251,2.2,0,0,114.6,84.4);

	this.instance_198 = new lib.woodenbox_dot_png();
	this.instance_198.setTransform(4745.2,2081.6,1.251,1.251,-0.5,0,0,114.5,84.4);

	this.instance_199 = new lib.woodenbox_dot_png();
	this.instance_199.setTransform(4635.3,1930,0.844,0.844,180,0,0,114.5,84.5);

	this.instance_200 = new lib.woodenbox_dot_png();
	this.instance_200.setTransform(4472,1937,0.844,0.844,178.3,0,0,114.5,84.5);

	this.instance_201 = new lib.water_hyphen_middle_dot_png();
	this.instance_201.setTransform(4861.9,2029.1,1,1,0,0,0,49.5,49.5);

	this.instance_202 = new lib.water_hyphen_middle_dot_png();
	this.instance_202.setTransform(4767.5,2029.1,1,1,0,0,0,49.5,49.5);

	this.instance_203 = new lib.water_hyphen_middle_dot_png();
	this.instance_203.setTransform(4682.9,2029.1,1,1,0,0,0,49.5,49.5);

	this.instance_204 = new lib.water_hyphen_middle_dot_png();
	this.instance_204.setTransform(4588.5,2029.1,1,1,0,0,0,49.5,49.5);

	this.instance_205 = new lib.water_hyphen_middle_dot_png();
	this.instance_205.setTransform(4861.9,1937.1,1,1,0,0,0,49.5,49.5);

	this.instance_206 = new lib.water_hyphen_middle_dot_png();
	this.instance_206.setTransform(4767.5,1937.1,1,1,0,0,0,49.5,49.5);

	this.instance_207 = new lib.water_hyphen_middle_dot_png();
	this.instance_207.setTransform(4682.9,1937.1,1,1,0,0,0,49.5,49.5);

	this.instance_208 = new lib.water_hyphen_middle_dot_png();
	this.instance_208.setTransform(4588.5,1937.1,1,1,0,0,0,49.5,49.5);

	this.instance_209 = new lib.water_hyphen_top_dot_png();
	this.instance_209.setTransform(4897,1843.5,1,1,0,0,0,49.5,50);

	this.instance_210 = new lib.water_hyphen_top_dot_png();
	this.instance_210.setTransform(4801.4,1843.5,1,1,0,0,0,49.5,50);

	this.instance_211 = new lib.water_hyphen_top_dot_png();
	this.instance_211.setTransform(4707,1843.5,1,1,0,0,0,49.5,50);

	this.instance_212 = new lib.water_hyphen_top_dot_png();
	this.instance_212.setTransform(4615.4,1843.5,1,1,0,0,0,49.5,50);

	this.instance_213 = new lib.woodenbox_dot_png();
	this.instance_213.setTransform(4764.2,2493.2,0.93,0.93,2.2,0,0,114.5,84.5);

	this.instance_214 = new lib.woodencrate_dot_png();
	this.instance_214.setTransform(4083.7,2689.8,1.073,1.073,178,0,0,234,98);

	this.instance_215 = new lib.woodenbox_dot_png();
	this.instance_215.setTransform(4346.1,2716,0.93,0.93,2.2,0,0,114.5,84.5);

	this.instance_216 = new lib.woodenbox_dot_png();
	this.instance_216.setTransform(4388.8,2964.2,1.423,1.278,-88.6,0,0,114.5,84.7);

	this.instance_217 = new lib.water_hyphen_top_dot_png();
	this.instance_217.setTransform(3873.3,2744.7,1,1,0,0,0,49.5,50);

	this.instance_218 = new lib.water_hyphen_middle_dot_png();
	this.instance_218.setTransform(3835.3,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_219 = new lib.water_hyphen_middle_dot_png();
	this.instance_219.setTransform(3835.3,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_220 = new lib.water_hyphen_bottom_dot_png();
	this.instance_220.setTransform(3815.6,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_221 = new lib.woodencrate_dot_png();
	this.instance_221.setTransform(3344.1,2705.5,1.123,1.123,-86.7,0,0,234.1,98);

	this.instance_222 = new lib.water_hyphen_middle_dot_png();
	this.instance_222.setTransform(2505.7,2838.2,1,1,0,0,0,49.5,49.5);

	this.instance_223 = new lib.water_hyphen_middle_dot_png();
	this.instance_223.setTransform(2492.8,2928,1,1,0,0,0,49.5,49.5);

	this.instance_224 = new lib.water_hyphen_middle_dot_png();
	this.instance_224.setTransform(2039.3,2841,1,1,0,0,0,49.5,49.5);

	this.instance_225 = new lib.water_hyphen_middle_dot_png();
	this.instance_225.setTransform(2064.2,2930.2,1,1,0,0,0,49.5,49.5);

	this.instance_226 = new lib.woodenbox_dot_png();
	this.instance_226.setTransform(1061.4,2965,1.473,1.473,-179.7,0,0,114.5,84.5);

	this.instance_227 = new lib.metalbar_dot_png();
	this.instance_227.setTransform(237.5,2893.6,1.342,1.342,0,0,0,245,27.1);

	this.instance_228 = new lib.woodencrate_dot_png();
	this.instance_228.setTransform(624.4,2847.2,1,1,88.2,0,0,234,98);

	this.instance_229 = new lib.woodencrate_dot_png();
	this.instance_229.setTransform(341.8,2902.7,1,1,89.7,0,0,234,98);

	this.instance_230 = new lib.woodenbox_dot_png();
	this.instance_230.setTransform(160,2742.2,1.266,1.266,-88.2,0,0,114.6,84.5);

	this.instance_231 = new lib.woodenbox_dot_png();
	this.instance_231.setTransform(-14.4,2769,0.936,0.936,86.6,0,0,114.5,84.5);

	this.instance_232 = new lib.woodenbox_dot_png();
	this.instance_232.setTransform(489.4,2829.5,0.936,0.936,90.8,0,0,114.5,84.5);

	this.instance_233 = new lib.metalbox_dot_png();
	this.instance_233.setTransform(250.3,2682.9,1,1,0,0,0,341.5,61.5);

	this.instance_234 = new lib.metalbox_dot_png();
	this.instance_234.setTransform(247.2,2590.7,1,1,-2.5,0,0,341.5,61.5);

	this.instance_235 = new lib.metalbar_dot_png();
	this.instance_235.setTransform(-59.6,2494.1,1.388,1.388,78.9,0,0,244.9,26.9);

	this.instance_236 = new lib.woodenbox_dot_png();
	this.instance_236.setTransform(557.2,2473.5,0.8,0.8,3.5,0,0,114.7,84.5);

	this.instance_237 = new lib.woodenbox_dot_png();
	this.instance_237.setTransform(549.7,2385.1,0.8,0.8,-3,0,0,114.7,84.5);

	this.instance_238 = new lib.woodenbox_dot_png();
	this.instance_238.setTransform(562.8,2285.1,0.8,0.8,99.6,0,0,114.7,84.4);

	this.instance_239 = new lib.woodencrate_dot_png();
	this.instance_239.setTransform(284.2,2456.9,1,1,-179.6,0,0,234.1,98);

	this.instance_240 = new lib.woodenbox_dot_png();
	this.instance_240.setTransform(10.2,2450,0.871,0.871,88.6,0,0,114.7,84.4);

	this.instance_241 = new lib.woodencrate_dot_png();
	this.instance_241.setTransform(132.6,2376.6,1,1,3.2,0,0,234.1,98);

	this.instance_242 = new lib.woodenbox_dot_png();
	this.instance_242.setTransform(409.7,2318.2,1.146,1.146,175.3,0,0,114.7,84.4);

	this.instance_243 = new lib.metalbox_dot_png();
	this.instance_243.setTransform(187.7,2260.6,0.815,0.815,-0.5,0,0,341.6,61.6);

	this.instance_244 = new lib.woodenbox_dot_png();
	this.instance_244.setTransform(864.7,2678.7,1.028,1.028,87.3,0,0,114.8,84.5);

	this.instance_245 = new lib.woodencrate_dot_png();
	this.instance_245.setTransform(1150.9,2793.4,1.1,1.1,-0.7,0,0,234,98);

	this.instance_246 = new lib.metalbox_dot_png();
	this.instance_246.setTransform(1359.9,2727.6,1,1,-2.5,0,0,341.5,61.5);

	this.instance_247 = new lib.water_hyphen_top_dot_png();
	this.instance_247.setTransform(1726.3,2744.7,1,1,0,0,0,49.5,50);

	this.instance_248 = new lib.woodenbox_dot_png();
	this.instance_248.setTransform(1440.2,2789.4,0.76,0.76,-86.2,0,0,114.8,84.5);

	this.instance_249 = new lib.metalbar_dot_png();
	this.instance_249.setTransform(1147.5,2680.8,1.342,1.342,0,0,0,245,27.1);

	this.instance_250 = new lib.woodencrate_dot_png();
	this.instance_250.setTransform(1547.7,2611.1,0.64,0.64,-0.7,0,0,234,98);

	this.instance_251 = new lib.woodencrate_dot_png();
	this.instance_251.setTransform(1372.7,2642.7,0.64,0.64,90.1,0,0,234,98);

	this.instance_252 = new lib.woodenbox_dot_png();
	this.instance_252.setTransform(766.4,2562.9,0.76,0.76,-12,0,0,114.8,84.5);

	this.instance_253 = new lib.woodenbox_dot_png();
	this.instance_253.setTransform(1046.7,2606.7,1.028,1.028,-179.9,0,0,114.8,84.5);

	this.instance_254 = new lib.woodenbox_dot_png();
	this.instance_254.setTransform(1240.2,2589,0.95,0.95,7.3,0,0,114.7,84.5);

	this.instance_255 = new lib.metalbox_dot_png();
	this.instance_255.setTransform(1059.7,2502.2,0.724,0.724,-0.2,0,0,341.4,61.5);

	this.instance_256 = new lib.metalbox_dot_png();
	this.instance_256.setTransform(985.7,2558.2,0.724,0.724,10.2,0,0,341.5,61.6);

	this.instance_257 = new lib.woodencrate_dot_png();
	this.instance_257.setTransform(1535.2,2517.9,0.64,0.64,-0.7,0,0,234,98);

	this.instance_258 = new lib.woodencrate_dot_png();
	this.instance_258.setTransform(1444.5,2517.8,0.64,0.64,1.3,0,0,234,98);

	this.instance_259 = new lib.woodenbox_dot_png();
	this.instance_259.setTransform(636.8,2574.3,0.76,0.76,2.8,0,0,114.8,84.5);

	this.instance_260 = new lib.moss_dot_png();
	this.instance_260.setTransform(627.7,1143.4,1,1,-89.5,0,0,40.5,27.5);

	this.instance_261 = new lib.ground_hyphen_right_dot_png();
	this.instance_261.setTransform(579.9,1346,1,1,0,0,0,53.5,60.5);

	this.instance_262 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_262.setTransform(498.9,1346,1,1,0,0,0,60.5,60.5);

	this.instance_263 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_263.setTransform(403.9,1346,1,1,0,0,0,60.5,60.5);

	this.instance_264 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_264.setTransform(287.9,1346,1,1,0,0,0,60.5,60.5);

	this.instance_265 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_265.setTransform(169.7,1346,1,1,0,0,0,60.5,60.5);

	this.instance_266 = new lib.ground_hyphen_left_dot_png();
	this.instance_266.setTransform(-58.6,1346,1,1,0,0,0,53.5,60.5);

	this.instance_267 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_267.setTransform(53.8,1346,1,1,0,0,0,60.5,60.5);

	this.instance_268 = new lib.ground_hyphen_right_dot_png();
	this.instance_268.setTransform(579.9,1451.9,1,1,0,0,0,53.5,60.5);

	this.instance_269 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_269.setTransform(498.8,1451.9,1,1,0,0,0,60.5,60.5);

	this.instance_270 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_270.setTransform(403.8,1451.9,1,1,0,0,0,60.5,60.5);

	this.instance_271 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_271.setTransform(287.9,1451.9,1,1,0,0,0,60.5,60.5);

	this.instance_272 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_272.setTransform(169.7,1451.9,1,1,0,0,0,60.5,60.5);

	this.instance_273 = new lib.ground_hyphen_left_dot_png();
	this.instance_273.setTransform(-58.6,1451.9,1,1,0,0,0,53.5,60.5);

	this.instance_274 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_274.setTransform(53.7,1451.9,1,1,0,0,0,60.5,60.5);

	this.instance_275 = new lib.ground_hyphen_right_dot_png();
	this.instance_275.setTransform(579.9,1558.2,1,1,0,0,0,53.5,60.5);

	this.instance_276 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_276.setTransform(498.8,1558.2,1,1,0,0,0,60.5,60.5);

	this.instance_277 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_277.setTransform(403.8,1558.2,1,1,0,0,0,60.5,60.5);

	this.instance_278 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_278.setTransform(287.9,1558.2,1,1,0,0,0,60.5,60.5);

	this.instance_279 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_279.setTransform(169.7,1558.2,1,1,0,0,0,60.5,60.5);

	this.instance_280 = new lib.ground_hyphen_left_dot_png();
	this.instance_280.setTransform(-58.6,1558.2,1,1,0,0,0,53.5,60.5);

	this.instance_281 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_281.setTransform(53.7,1558.2,1,1,0,0,0,60.5,60.5);

	this.instance_282 = new lib.ground_hyphen_right_dot_png();
	this.instance_282.setTransform(579.9,1664.6,1,1,0,0,0,53.5,60.5);

	this.instance_283 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_283.setTransform(498.9,1664.6,1,1,0,0,0,60.5,60.5);

	this.instance_284 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_284.setTransform(403.9,1664.6,1,1,0,0,0,60.5,60.5);

	this.instance_285 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_285.setTransform(287.9,1664.6,1,1,0,0,0,60.5,60.5);

	this.instance_286 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_286.setTransform(169.7,1664.6,1,1,0,0,0,60.5,60.5);

	this.instance_287 = new lib.ground_hyphen_left_dot_png();
	this.instance_287.setTransform(-58.6,1664.6,1,1,0,0,0,53.5,60.5);

	this.instance_288 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_288.setTransform(53.8,1664.6,1,1,0,0,0,60.5,60.5);

	this.instance_289 = new lib.ground_hyphen_right_dot_png();
	this.instance_289.setTransform(579.9,1770.9,1,1,0,0,0,53.5,60.5);

	this.instance_290 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_290.setTransform(498.9,1770.9,1,1,0,0,0,60.5,60.5);

	this.instance_291 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_291.setTransform(403.9,1770.9,1,1,0,0,0,60.5,60.5);

	this.instance_292 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_292.setTransform(287.9,1770.9,1,1,0,0,0,60.5,60.5);

	this.instance_293 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_293.setTransform(169.7,1770.9,1,1,0,0,0,60.5,60.5);

	this.instance_294 = new lib.ground_hyphen_left_dot_png();
	this.instance_294.setTransform(-58.6,1770.9,1,1,0,0,0,53.5,60.5);

	this.instance_295 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_295.setTransform(53.8,1770.9,1,1,0,0,0,60.5,60.5);

	this.instance_296 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_296.setTransform(490,1990.8,1,1,0,0,0,60,60);

	this.instance_297 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_297.setTransform(391.7,1990.8,1,1,0,0,0,60,60);

	this.instance_298 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_298.setTransform(277.3,1990.8,1,1,0,0,0,60,60);

	this.instance_299 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_299.setTransform(163.6,1990.8,1,1,0,0,0,60,60);

	this.instance_300 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_300.setTransform(-61,1990.8,1,1,0,0,0,53,60);

	this.instance_301 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_301.setTransform(49.2,1990.8,1,1,0,0,0,60,60);

	this.instance_302 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_302.setTransform(580.4,1990.8,1,1,0,0,0,53,60);

	this.instance_303 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_303.setTransform(490,2096,1,1,0,0,0,60,60);

	this.instance_304 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_304.setTransform(391.8,2096,1,1,0,0,0,60,60);

	this.instance_305 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_305.setTransform(277.4,2096,1,1,0,0,0,60,60);

	this.instance_306 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_306.setTransform(163.6,2096,1,1,0,0,0,60,60);

	this.instance_307 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_307.setTransform(-60.9,2096,1,1,0,0,0,53,60);

	this.instance_308 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_308.setTransform(49.2,2096,1,1,0,0,0,60,60);

	this.instance_309 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_309.setTransform(580.4,2096,1,1,0,0,0,53,60);

	this.instance_310 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_310.setTransform(490,2197.5,1,1,0,0,0,60,60);

	this.instance_311 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_311.setTransform(391.7,2197.5,1,1,0,0,0,60,60);

	this.instance_312 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_312.setTransform(277.3,2197.5,1,1,0,0,0,60,60);

	this.instance_313 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_313.setTransform(163.6,2197.5,1,1,0,0,0,60,60);

	this.instance_314 = new lib.ground_hyphen_bottom_hyphen_left_dot_png();
	this.instance_314.setTransform(-61,2197.5,1,1,0,0,0,53,60);

	this.instance_315 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_315.setTransform(49.2,2197.5,1,1,0,0,0,60,60);

	this.instance_316 = new lib.ground_hyphen_bottom_hyphen_right_dot_png();
	this.instance_316.setTransform(580.4,2197.5,1,1,0,0,0,53,60);

	this.instance_317 = new lib.moss_dot_png();
	this.instance_317.setTransform(620,2158.4,1.323,1.323,-80.7,0,0,40.5,27.5);

	this.instance_318 = new lib.water_hyphen_bottom_dot_png();
	this.instance_318.setTransform(2497.2,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_319 = new lib.water_hyphen_bottom_dot_png();
	this.instance_319.setTransform(2055.7,3032.3,1.172,1.172,0,0,0,49.5,49.5);

	this.instance_320 = new lib.woodencrate_dot_png();
	this.instance_320.setTransform(791.4,2547.3,1,1,0,0,0,234,98);

	this.instance_321 = new lib.hazardsign_dot_png();
	this.instance_321.setTransform(2000.8,2650.2,0.647,0.647,0,0,0,51,46);

	this.instance_322 = new lib.endpole_dot_png();
	this.instance_322.setTransform(2002.5,2696,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_323 = new lib.hazardsign_dot_png();
	this.instance_323.setTransform(2555.7,2652.1,0.647,0.647,0,0,0,51,46);

	this.instance_324 = new lib.endpole_dot_png();
	this.instance_324.setTransform(2557.4,2697.9,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_325 = new lib.hazardsign_dot_png();
	this.instance_325.setTransform(3689.1,2644.2,0.647,0.647,0,0,0,51,46);

	this.instance_326 = new lib.endpole_dot_png();
	this.instance_326.setTransform(3690.7,2690,0.705,0.705,0,0,0,8.1,39.5);

	this.addChild(this.instance_326,this.instance_325,this.instance_324,this.instance_323,this.instance_322,this.instance_321,this.instance_320,this.instance_319,this.instance_318,this.instance_317,this.instance_316,this.instance_315,this.instance_314,this.instance_313,this.instance_312,this.instance_311,this.instance_310,this.instance_309,this.instance_308,this.instance_307,this.instance_306,this.instance_305,this.instance_304,this.instance_303,this.instance_302,this.instance_301,this.instance_300,this.instance_299,this.instance_298,this.instance_297,this.instance_296,this.instance_295,this.instance_294,this.instance_293,this.instance_292,this.instance_291,this.instance_290,this.instance_289,this.instance_288,this.instance_287,this.instance_286,this.instance_285,this.instance_284,this.instance_283,this.instance_282,this.instance_281,this.instance_280,this.instance_279,this.instance_278,this.instance_277,this.instance_276,this.instance_275,this.instance_274,this.instance_273,this.instance_272,this.instance_271,this.instance_270,this.instance_269,this.instance_268,this.instance_267,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.isDisp,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.platform2,this.platform1,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.platform3,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.platform4,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.6,-162.7,5108.1,3456.7);


(lib.level15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wall();
	this.instance.setTransform(1785.2,638.2,0.524,0.346,0,0,0,0.1,0);

	this.instance_1 = new lib.wall();
	this.instance_1.setTransform(1802,738.8,0.524,1.936,0,0,0,0.1,0);

	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(1859.2,774.9,1.638,1,0,0,0,-0.1,0);

	this.platform4_ref = new lib.platformRef();
	this.platform4_ref.setTransform(648.1,757.6,3.064,1,-90,0,0,0.1,0.1);

	this.platform4 = new lib.movingPlatform();
	this.platform4.setTransform(651,908.4,0.374,1.723);

	this.platform3 = new lib.movingPlatform();
	this.platform3.setTransform(1082.9,988.2,1,0.252);

	this.platform3_ref = new lib.platformRef();
	this.platform3_ref.setTransform(891.4,983.6,3.842,1,0,0,0,0.1,0.1);

	this.instance_3 = new lib.wall();
	this.instance_3.setTransform(1553.2,478.4,0.5,0.641);

	this.instance_4 = new lib.wall();
	this.instance_4.setTransform(1405.4,704.8,0.5,0.641);

	this.instance_5 = new lib.wall();
	this.instance_5.setTransform(1396.8,495.8,0.5,0.641);

	this.instance_6 = new lib.wall();
	this.instance_6.setTransform(1243,580.2,0.5,0.641);

	this.instance_7 = new lib.wall();
	this.instance_7.setTransform(1240.4,382.2,0.5,0.641);

	this.instance_8 = new lib.wall();
	this.instance_8.setTransform(1474.7,783.8,0.5,0.25);

	this.instance_9 = new lib.wall();
	this.instance_9.setTransform(1752.4,606.3,0.524,2.752,0,0,0,0.1,0);

	this.instance_10 = new lib.deadZone();
	this.instance_10.setTransform(1960.2,936.5,1.638,1,0,0,0,-0.1,0);

	this.instance_11 = new lib.wall();
	this.instance_11.setTransform(1555.8,764.7,0.5,0.641);

	this.instance_12 = new lib.wall();
	this.instance_12.setTransform(1698.9,468,0.576,0.931,0,0,0,0.1,0.1);

	this.instance_13 = new lib.wall();
	this.instance_13.setTransform(1553.2,566.7,0.5,0.641);

	this.instance_14 = new lib.wall();
	this.instance_14.setTransform(1724.6,890.9,1,0.318,0,0,0,-0.4,0);

	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(1702.4,654.7,0.5,0.641);

	this.platform2_switch = new lib.itemSwitch();
	this.platform2_switch.setTransform(1474.1,754.1,0.25,0.25,0,0,0,-1.4,-3.2);

	this.platform2_ref = new lib.platformRef();
	this.platform2_ref.setTransform(1623.2,627.3,5.399,0.248,-90);

	this.platform2 = new lib.movingPlatform();
	this.platform2.setTransform(1624.9,888.1,1,0.252);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(1818,910.1,1.25,3.418);

	this.instance_17 = new lib.exit();
	this.instance_17.setTransform(420.6,953.3,0.809,0.544,0,0,0,1.2,-1.8);

	this.instance_18 = new lib.wall();
	this.instance_18.setTransform(1472.3,359,1.949,0.25,0,0,0,-0.4,0);

	this.instance_19 = new lib.wall();
	this.instance_19.setTransform(464.9,769,0.5,0.25);

	this.platform4_switch = new lib.itemSwitch();
	this.platform4_switch.setTransform(464.1,738.1,0.25,0.25,0,0,0,-1.4,-3.2);

	this.instance_20 = new lib.star();
	this.instance_20.setTransform(1409.1,656.3,0.25,0.25,0,0,0,-1,-3);

	this.instance_21 = new lib.star();
	this.instance_21.setTransform(281.5,455.5,0.25,0.25,0,0,0,-1,-3);

	this.instance_22 = new lib.star();
	this.instance_22.setTransform(1393,275.2,0.25,0.25,0,0,0,-1,-3);

	this.instance_23 = new lib.wall();
	this.instance_23.setTransform(1205.6,267.9,0.5,0.25,0,0,0,-0.1,0);

	this.platform1_switch = new lib.itemSwitch();
	this.platform1_switch.setTransform(1205.8,235.5,0.25,0.25,0,0,0,-1.6,-3.2);

	this.platform1_ref = new lib.platformRef();
	this.platform1_ref.setTransform(1330.8,675,6.299,1,90,0,0,0.1,0.2);

	this.platform1 = new lib.movingPlatform();
	this.platform1.setTransform(1331,986,1,0.25);

	this.instance_24 = new lib.wall();
	this.instance_24.setTransform(200,721.1,1,5.751,0,0,0,0,0.1);

	this.instance_25 = new lib.wall();
	this.instance_25.setTransform(1654.5,991.6,2.391,1.814,0,0,0,-0.4,0);

	this.instance_26 = new lib.deadZone();
	this.instance_26.setTransform(753.6,1132.2,15.749,1,0,0,0,-0.1,0);

	this.instance_27 = new lib.wall();
	this.instance_27.setTransform(868,850.2,0.5,0.25);

	this.platform3_switch = new lib.itemSwitch();
	this.platform3_switch.setTransform(868,825.2,0.25,0.25,0,0,0,-1.6,-3.2);

	this.instance_28 = new lib.wall();
	this.instance_28.setTransform(1253.9,1032.5,2.5,1,0,0,0,-0.3,0);

	this.instance_29 = new lib.wall();
	this.instance_29.setTransform(405.2,1032.7,5.225,1,0,0,0,-0.3,0);

	this.p1 = new lib.shaun();
	this.p1.setTransform(1701.8,830.5,0.238,0.66);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(957.2,610.4,19.748,12.421,0,0,0,0.1,0.4);

	// Layer 2
	this.instance_30 = new lib.deadZone();
	this.instance_30.setTransform(994.3,-118.2,21.132,0.202,180);

	this.instance_31 = new lib.deadZone();
	this.instance_31.setTransform(-86.2,609.9,14.756,0.807,90,0,0,0,0.2);

	this.instance_32 = new lib.deadZone();
	this.instance_32.setTransform(2074.7,611.6,14.756,0.807,90);

	this.instance_33 = new lib.deadZone();
	this.instance_33.setTransform(992,1377.6,21.132,0.827);

	this.instance_34 = new lib.level15Pixi();
	this.instance_34.setTransform(-2,-0.6,0.4,0.4);

	// Layer 3
	this.instance_35 = new lib.level15PixiBG();
	this.instance_35.setTransform(51,185.5,0.4,0.4,0,0,0,127.5,463.7);

	this.addChild(this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.sizeRef,this.p1,this.instance_29,this.instance_28,this.platform3_switch,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.platform1,this.platform1_ref,this.platform1_switch,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.platform4_switch,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.platform2,this.platform2_ref,this.platform2_switch,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.platform3_ref,this.platform3,this.platform4,this.platform4_ref,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.4,-129.9,2241.5,1548.8);


(lib.level14Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endpole_dot_png();
	this.instance.setTransform(2525.2,135.5,1,1,0,0,0,8,39.5);

	this.instance_1 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_1.setTransform(393.1,813.9,1,1,0,0,0,60.5,41.5);

	this.instance_2 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_2.setTransform(459.4,810.3,1,1,0,0,0,60.5,36);

	this.instance_3 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_3.setTransform(2100.5,252,0.741,0.547,180,0,0,14.5,60.5);

	this.instance_4 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_4.setTransform(728.7,254.3,0.741,0.547,180,0,0,14.5,60.5);

	this.instance_5 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_5.setTransform(654.5,502.2,0.741,0.547,0,0,0,14.5,60.5);

	this.instance_6 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_6.setTransform(977.6,501.5,0.741,0.547,180,0,0,14.5,60.5);

	this.instance_7 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_7.setTransform(1106.4,815,0.741,0.547,180,0,0,14.5,60.5);

	this.instance_8 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_8.setTransform(778.7,813.9,0.741,0.547,0,0,0,14.5,60.5);

	this.instance_9 = new lib.endflag_dot_png();
	this.instance_9.setTransform(2552.3,-98.1,1,1,0,0,0,49,56);

	this.instance_10 = new lib.endpole_dot_png();
	this.instance_10.setTransform(2524.9,-10.9,1,1,0,0,0,8,39.5);

	this.instance_11 = new lib.bone_dot_png();
	this.instance_11.setTransform(1327.6,1257.5,0.741,0.741,0,0,0,22.5,13.5);

	this.instance_12 = new lib.leaves1_dot_png();
	this.instance_12.setTransform(1342.1,-100.5,0.73,0.73,0,0,0,18.5,15);

	this.instance_13 = new lib.leaves1_dot_png();
	this.instance_13.setTransform(918,214.5,1,1,0,0,0,18.5,15);

	this.instance_14 = new lib.dirt4_dot_png();
	this.instance_14.setTransform(1920.8,504.4,0.853,0.853,0,0,0,121.5,37.5);

	this.instance_15 = new lib.dirt4_dot_png();
	this.instance_15.setTransform(1570.5,506.9,1,1,0,0,0,121.5,37.5);

	this.instance_16 = new lib.dirt3_dot_png();
	this.instance_16.setTransform(2118.2,474.9,0.45,0.45,177,0,0,55,88.1);

	this.instance_17 = new lib.leaves1_dot_png();
	this.instance_17.setTransform(1442.3,474.3,0.811,0.811,0,0,0,18.5,15);

	this.instance_18 = new lib.leaves2_dot_png();
	this.instance_18.setTransform(460.9,775.5,0.775,0.775,0,0,0,22,20);

	this.instance_19 = new lib.water_hyphen_top_dot_png();
	this.instance_19.setTransform(902,1321.5,1,1,0,0,0,49.5,50);

	this.instance_20 = new lib.water_hyphen_top_dot_png();
	this.instance_20.setTransform(807.8,1321.5,1,1,0,0,0,49.5,50);

	this.instance_21 = new lib.water_hyphen_top_dot_png();
	this.instance_21.setTransform(714.4,1321.5,1,1,0,0,0,49.5,50);

	this.instance_22 = new lib.dirt2_dot_png();
	this.instance_22.setTransform(791.5,1271,1,1,0,0,0,118.5,52.5);

	this.instance_23 = new lib.dirt1_dot_png();
	this.instance_23.setTransform(1139.1,1250,0.5,0.517,96.3,0,0,54.9,87);

	this.instance_24 = new lib.dirt4_dot_png();
	this.instance_24.setTransform(1245.9,1252.4,1,1,0,0,0,121.5,37.5);

	this.instance_25 = new lib.leaves2_dot_png();
	this.instance_25.setTransform(1393.2,1152.5,0.875,0.875,-26.7,0,0,22,20);

	this.instance_26 = new lib.leaves1_dot_png();
	this.instance_26.setTransform(485.2,1078,1,1,50.5,0,0,18.5,15);

	this.instance_27 = new lib.leaves2_dot_png();
	this.instance_27.setTransform(877,1151.8,0.864,0.864,0,0,0,22,19.9);

	this.instance_28 = new lib.water_hyphen_top_dot_png();
	this.instance_28.setTransform(623.5,1321.5,1,1,0,0,0,49.5,50);

	this.instance_29 = new lib.moss_dot_png();
	this.instance_29.setTransform(651.1,1285,1.345,1.345,70.2,0,0,40.5,27.6);

	this.instance_30 = new lib.water_hyphen_top_dot_png();
	this.instance_30.setTransform(530.1,1321.5,1,1,0,0,0,49.5,50);

	this.instance_31 = new lib.water_hyphen_top_dot_png();
	this.instance_31.setTransform(436,1321.5,1,1,0,0,0,49.5,50);

	this.instance_32 = new lib.moss_dot_png();
	this.instance_32.setTransform(489,1270.4,1.345,1.345,0,0,0,40.5,27.5);

	this.platform1 = new lib.level14movingitem();
	this.platform1.setTransform(1291.2,251.5);

	this.instance_33 = new lib.leaves2_dot_png();
	this.instance_33.setTransform(1759.9,472.3,1,1,0,0,0,22,20);

	this.instance_34 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_34.setTransform(1686,483.1,1,1,0,0,0,155.5,21);

	this.instance_35 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_35.setTransform(1710.9,519.9,1,1,0,0,0,155.5,16.5);

	this.instance_36 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_36.setTransform(2571.2,251.4,1,1,0,0,0,55.5,41);

	this.instance_37 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_37.setTransform(2477,246.4,1,1,0,0,0,60.5,36);

	this.instance_38 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_38.setTransform(2365.7,246.4,1,1,0,0,0,60.5,36);

	this.instance_39 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_39.setTransform(2262.9,248,1,1,0,0,0,60.5,36);

	this.instance_40 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_40.setTransform(2148.3,253.5,1,1,0,0,0,60.5,41.5);

	this.instance_41 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_41.setTransform(1454.6,-59.8,1,1,0,0,0,55.5,41);

	this.instance_42 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_42.setTransform(1394.1,-63.6,1,1,0,0,0,60.5,36);

	this.instance_43 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_43.setTransform(1299.9,-60.3,1,1,0,0,0,60.5,41.5);

	this.instance_44 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_44.setTransform(1048.7,251.4,1,1,0,0,0,55.5,41);

	this.instance_45 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_45.setTransform(992.6,247.7,1,1,0,0,0,60.5,36);

	this.instance_46 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_46.setTransform(889.8,249.2,1,1,0,0,0,60.5,36);

	this.instance_47 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_47.setTransform(776.7,254.7,1,1,0,0,0,60.5,41.5);

	this.instance_48 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_48.setTransform(1387.9,500.8,1,1,0,0,0,55.5,41);

	this.instance_49 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_49.setTransform(1353.3,495.8,1,1,0,0,0,60.5,36);

	this.instance_50 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_50.setTransform(1242.1,495.8,1,1,0,0,0,60.5,36);

	this.instance_51 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_51.setTransform(1139.2,497.4,1,1,0,0,0,60.5,36);

	this.instance_52 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_52.setTransform(1026.6,501.2,1,1,0,0,0,60.5,41.5);

	this.instance_53 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_53.setTransform(609,500.8,1,1,0,0,0,55.5,41);

	this.instance_54 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_54.setTransform(565.4,497.4,1,1,0,0,0,60.5,36);

	this.instance_55 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_55.setTransform(490.4,495.8,1,1,0,0,0,60.5,36);

	this.instance_56 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_56.setTransform(387.5,497.4,1,1,0,0,0,60.5,36);

	this.instance_57 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_57.setTransform(269.9,502.9,1,1,0,0,0,60.5,41.5);

	this.instance_58 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_58.setTransform(1422.9,813.7,1,1,0,0,0,55.5,41);

	this.instance_59 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_59.setTransform(1366.8,810,1,1,0,0,0,60.5,36);

	this.instance_60 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_60.setTransform(1263.9,811.5,1,1,0,0,0,60.5,36);

	this.instance_61 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_61.setTransform(1156.2,817,1,1,0,0,0,60.5,41.5);

	this.instance_62 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_62.setTransform(735.2,812.5,1,1,0,0,0,55.5,41);

	this.instance_63 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_63.setTransform(679.1,808.7,1,1,0,0,0,60.5,36);

	this.instance_64 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_64.setTransform(576.3,810.3,1,1,0,0,0,60.5,36);

	this.instance_65 = new lib.bush_hyphen_platform_hyphen_block_dot_png();
	this.instance_65.setTransform(443.5,987,1,1,0,0,0,42,88.5);

	this.instance_66 = new lib.water_hyphen_bottom_dot_png();
	this.instance_66.setTransform(2713.5,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_67 = new lib.water_hyphen_bottom_dot_png();
	this.instance_67.setTransform(2625.7,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_68 = new lib.water_hyphen_bottom_dot_png();
	this.instance_68.setTransform(2532.3,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_69 = new lib.water_hyphen_bottom_dot_png();
	this.instance_69.setTransform(2438.1,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_70 = new lib.water_hyphen_bottom_dot_png();
	this.instance_70.setTransform(2344.7,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_71 = new lib.water_hyphen_bottom_dot_png();
	this.instance_71.setTransform(2256.9,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_72 = new lib.water_hyphen_bottom_dot_png();
	this.instance_72.setTransform(2163.5,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_73 = new lib.water_hyphen_bottom_dot_png();
	this.instance_73.setTransform(2075.6,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_74 = new lib.water_hyphen_bottom_dot_png();
	this.instance_74.setTransform(1982.2,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_75 = new lib.water_hyphen_bottom_dot_png();
	this.instance_75.setTransform(1894.3,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_76 = new lib.water_hyphen_bottom_dot_png();
	this.instance_76.setTransform(1800.9,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_77 = new lib.water_hyphen_bottom_dot_png();
	this.instance_77.setTransform(1706.8,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_78 = new lib.water_hyphen_bottom_dot_png();
	this.instance_78.setTransform(1613.4,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_79 = new lib.water_hyphen_bottom_dot_png();
	this.instance_79.setTransform(1525.5,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_80 = new lib.water_hyphen_bottom_dot_png();
	this.instance_80.setTransform(1432.1,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_81 = new lib.water_hyphen_bottom_dot_png();
	this.instance_81.setTransform(1342.3,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_82 = new lib.water_hyphen_bottom_dot_png();
	this.instance_82.setTransform(1248.9,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_83 = new lib.water_hyphen_bottom_dot_png();
	this.instance_83.setTransform(1161.1,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_84 = new lib.water_hyphen_bottom_dot_png();
	this.instance_84.setTransform(1067.7,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_85 = new lib.water_hyphen_bottom_dot_png();
	this.instance_85.setTransform(973.5,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_86 = new lib.water_hyphen_bottom_dot_png();
	this.instance_86.setTransform(880.1,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_87 = new lib.water_hyphen_bottom_dot_png();
	this.instance_87.setTransform(792.3,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_88 = new lib.water_hyphen_bottom_dot_png();
	this.instance_88.setTransform(698.9,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_89 = new lib.water_hyphen_bottom_dot_png();
	this.instance_89.setTransform(611,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_90 = new lib.water_hyphen_bottom_dot_png();
	this.instance_90.setTransform(517.6,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_91 = new lib.water_hyphen_bottom_dot_png();
	this.instance_91.setTransform(429.7,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_92 = new lib.water_hyphen_bottom_dot_png();
	this.instance_92.setTransform(336.3,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_93 = new lib.water_hyphen_bottom_dot_png();
	this.instance_93.setTransform(242.2,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_94 = new lib.water_hyphen_bottom_dot_png();
	this.instance_94.setTransform(148.8,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_95 = new lib.water_hyphen_bottom_dot_png();
	this.instance_95.setTransform(60.9,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_96 = new lib.water_hyphen_bottom_dot_png();
	this.instance_96.setTransform(-32.5,1529.6,1,1,0,0,0,49.5,49.5);

	this.instance_97 = new lib.water_hyphen_middle_dot_png();
	this.instance_97.setTransform(2746.4,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_98 = new lib.water_hyphen_middle_dot_png();
	this.instance_98.setTransform(2657.9,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_99 = new lib.water_hyphen_middle_dot_png();
	this.instance_99.setTransform(2565.2,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_100 = new lib.water_hyphen_middle_dot_png();
	this.instance_100.setTransform(2486.4,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_101 = new lib.water_hyphen_middle_dot_png();
	this.instance_101.setTransform(2397.8,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_102 = new lib.water_hyphen_middle_dot_png();
	this.instance_102.setTransform(2305.1,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_103 = new lib.water_hyphen_middle_dot_png();
	this.instance_103.setTransform(2216.6,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_104 = new lib.water_hyphen_middle_dot_png();
	this.instance_104.setTransform(2123.8,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_105 = new lib.water_hyphen_middle_dot_png();
	this.instance_105.setTransform(2035.3,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_106 = new lib.water_hyphen_middle_dot_png();
	this.instance_106.setTransform(1942.6,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_107 = new lib.water_hyphen_middle_dot_png();
	this.instance_107.setTransform(1854,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_108 = new lib.water_hyphen_middle_dot_png();
	this.instance_108.setTransform(1767.6,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_109 = new lib.water_hyphen_middle_dot_png();
	this.instance_109.setTransform(1679.1,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_110 = new lib.water_hyphen_middle_dot_png();
	this.instance_110.setTransform(1586.4,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_111 = new lib.water_hyphen_middle_dot_png();
	this.instance_111.setTransform(1497.8,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_112 = new lib.water_hyphen_middle_dot_png();
	this.instance_112.setTransform(1405.1,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_113 = new lib.water_hyphen_middle_dot_png();
	this.instance_113.setTransform(1318.6,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_114 = new lib.water_hyphen_middle_dot_png();
	this.instance_114.setTransform(1230.1,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_115 = new lib.water_hyphen_middle_dot_png();
	this.instance_115.setTransform(1137.4,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_116 = new lib.water_hyphen_middle_dot_png();
	this.instance_116.setTransform(1048.8,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_117 = new lib.water_hyphen_middle_dot_png();
	this.instance_117.setTransform(956.1,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_118 = new lib.water_hyphen_middle_dot_png();
	this.instance_118.setTransform(867.5,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_119 = new lib.water_hyphen_middle_dot_png();
	this.instance_119.setTransform(774.8,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_120 = new lib.water_hyphen_middle_dot_png();
	this.instance_120.setTransform(686.3,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_121 = new lib.water_hyphen_middle_dot_png();
	this.instance_121.setTransform(599.9,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_122 = new lib.water_hyphen_middle_dot_png();
	this.instance_122.setTransform(511.3,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_123 = new lib.water_hyphen_middle_dot_png();
	this.instance_123.setTransform(418.6,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_124 = new lib.water_hyphen_middle_dot_png();
	this.instance_124.setTransform(330.1,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_125 = new lib.water_hyphen_middle_dot_png();
	this.instance_125.setTransform(237.3,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_126 = new lib.water_hyphen_middle_dot_png();
	this.instance_126.setTransform(148.8,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_127 = new lib.water_hyphen_middle_dot_png();
	this.instance_127.setTransform(56.1,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_128 = new lib.water_hyphen_middle_dot_png();
	this.instance_128.setTransform(-32.5,1462.1,1,1,0,0,0,49.5,49.5);

	this.instance_129 = new lib.water_hyphen_middle_dot_png();
	this.instance_129.setTransform(2746.4,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_130 = new lib.water_hyphen_middle_dot_png();
	this.instance_130.setTransform(2657.9,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_131 = new lib.water_hyphen_middle_dot_png();
	this.instance_131.setTransform(2565.2,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_132 = new lib.water_hyphen_middle_dot_png();
	this.instance_132.setTransform(2486.4,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_133 = new lib.water_hyphen_middle_dot_png();
	this.instance_133.setTransform(2397.8,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_134 = new lib.water_hyphen_middle_dot_png();
	this.instance_134.setTransform(2305.1,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_135 = new lib.water_hyphen_middle_dot_png();
	this.instance_135.setTransform(2216.6,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_136 = new lib.water_hyphen_middle_dot_png();
	this.instance_136.setTransform(2123.8,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_137 = new lib.water_hyphen_middle_dot_png();
	this.instance_137.setTransform(2035.3,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_138 = new lib.water_hyphen_middle_dot_png();
	this.instance_138.setTransform(1942.6,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_139 = new lib.water_hyphen_middle_dot_png();
	this.instance_139.setTransform(1854,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_140 = new lib.water_hyphen_middle_dot_png();
	this.instance_140.setTransform(1767.6,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_141 = new lib.water_hyphen_middle_dot_png();
	this.instance_141.setTransform(1679.1,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_142 = new lib.water_hyphen_middle_dot_png();
	this.instance_142.setTransform(1586.4,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_143 = new lib.water_hyphen_middle_dot_png();
	this.instance_143.setTransform(1497.8,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_144 = new lib.water_hyphen_middle_dot_png();
	this.instance_144.setTransform(1405.1,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_145 = new lib.water_hyphen_middle_dot_png();
	this.instance_145.setTransform(1318.6,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_146 = new lib.water_hyphen_middle_dot_png();
	this.instance_146.setTransform(1230.1,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_147 = new lib.water_hyphen_middle_dot_png();
	this.instance_147.setTransform(1137.4,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_148 = new lib.water_hyphen_middle_dot_png();
	this.instance_148.setTransform(1048.8,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_149 = new lib.water_hyphen_middle_dot_png();
	this.instance_149.setTransform(956.1,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_150 = new lib.water_hyphen_middle_dot_png();
	this.instance_150.setTransform(867.5,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_151 = new lib.water_hyphen_middle_dot_png();
	this.instance_151.setTransform(774.8,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_152 = new lib.water_hyphen_middle_dot_png();
	this.instance_152.setTransform(686.3,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_153 = new lib.water_hyphen_middle_dot_png();
	this.instance_153.setTransform(599.9,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_154 = new lib.water_hyphen_middle_dot_png();
	this.instance_154.setTransform(511.3,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_155 = new lib.water_hyphen_middle_dot_png();
	this.instance_155.setTransform(418.6,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_156 = new lib.water_hyphen_middle_dot_png();
	this.instance_156.setTransform(330.1,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_157 = new lib.water_hyphen_middle_dot_png();
	this.instance_157.setTransform(237.3,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_158 = new lib.water_hyphen_middle_dot_png();
	this.instance_158.setTransform(148.8,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_159 = new lib.water_hyphen_middle_dot_png();
	this.instance_159.setTransform(56.1,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_160 = new lib.water_hyphen_middle_dot_png();
	this.instance_160.setTransform(-32.5,1414.6,1,1,0,0,0,49.5,49.5);

	this.instance_161 = new lib.water_hyphen_top_dot_png();
	this.instance_161.setTransform(2759.4,1321.5,1,1,0,0,0,49.5,50);

	this.instance_162 = new lib.water_hyphen_top_dot_png();
	this.instance_162.setTransform(2666,1321.5,1,1,0,0,0,49.5,50);

	this.instance_163 = new lib.water_hyphen_top_dot_png();
	this.instance_163.setTransform(2571.9,1321.5,1,1,0,0,0,49.5,50);

	this.instance_164 = new lib.water_hyphen_top_dot_png();
	this.instance_164.setTransform(2478.5,1321.5,1,1,0,0,0,49.5,50);

	this.instance_165 = new lib.water_hyphen_top_dot_png();
	this.instance_165.setTransform(2397.5,1321.5,1,1,0,0,0,49.5,50);

	this.instance_166 = new lib.water_hyphen_top_dot_png();
	this.instance_166.setTransform(2304.1,1321.5,1,1,0,0,0,49.5,50);

	this.instance_167 = new lib.water_hyphen_top_dot_png();
	this.instance_167.setTransform(2209.9,1321.5,1,1,0,0,0,49.5,50);

	this.instance_168 = new lib.water_hyphen_top_dot_png();
	this.instance_168.setTransform(2116.5,1321.5,1,1,0,0,0,49.5,50);

	this.instance_169 = new lib.water_hyphen_top_dot_png();
	this.instance_169.setTransform(2022.4,1321.5,1,1,0,0,0,49.5,50);

	this.instance_170 = new lib.water_hyphen_top_dot_png();
	this.instance_170.setTransform(1929,1321.5,1,1,0,0,0,49.5,50);

	this.instance_171 = new lib.water_hyphen_top_dot_png();
	this.instance_171.setTransform(1834.9,1321.5,1,1,0,0,0,49.5,50);

	this.instance_172 = new lib.water_hyphen_top_dot_png();
	this.instance_172.setTransform(1741.5,1321.5,1,1,0,0,0,49.5,50);

	this.instance_173 = new lib.hazardsign_dot_png();
	this.instance_173.setTransform(1762.5,1217.9,0.647,0.647,0,0,0,51,46);

	this.instance_174 = new lib.endpole_dot_png();
	this.instance_174.setTransform(1764.1,1263.7,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_175 = new lib.water_hyphen_top_dot_png();
	this.instance_175.setTransform(1650.6,1321.5,1,1,0,0,0,49.5,50);

	this.instance_176 = new lib.water_hyphen_top_dot_png();
	this.instance_176.setTransform(1557.2,1321.5,1,1,0,0,0,49.5,50);

	this.instance_177 = new lib.water_hyphen_top_dot_png();
	this.instance_177.setTransform(1463,1321.5,1,1,0,0,0,49.5,50);

	this.instance_178 = new lib.water_hyphen_top_dot_png();
	this.instance_178.setTransform(1370.4,1321.5,1,1,0,0,0,49.5,50);

	this.instance_179 = new lib.water_hyphen_top_dot_png();
	this.instance_179.setTransform(1277,1321.5,1,1,0,0,0,49.5,50);

	this.instance_180 = new lib.water_hyphen_top_dot_png();
	this.instance_180.setTransform(1182.9,1321.5,1,1,0,0,0,49.5,50);

	this.instance_181 = new lib.water_hyphen_top_dot_png();
	this.instance_181.setTransform(1089.5,1321.5,1,1,0,0,0,49.5,50);

	this.instance_182 = new lib.water_hyphen_top_dot_png();
	this.instance_182.setTransform(995.4,1321.5,1,1,0,0,0,49.5,50);

	this.instance_183 = new lib.water_hyphen_top_dot_png();
	this.instance_183.setTransform(342.6,1321.5,1,1,0,0,0,49.5,50);

	this.instance_184 = new lib.water_hyphen_top_dot_png();
	this.instance_184.setTransform(248.5,1321.5,1,1,0,0,0,49.5,50);

	this.instance_185 = new lib.water_hyphen_top_dot_png();
	this.instance_185.setTransform(155.1,1321.5,1,1,0,0,0,49.5,50);

	this.instance_186 = new lib.water_hyphen_top_dot_png();
	this.instance_186.setTransform(60.9,1321.5,1,1,0,0,0,49.5,50);

	this.instance_187 = new lib.hazardsign_dot_png();
	this.instance_187.setTransform(66.5,1225.7,0.647,0.647,0,0,0,51,46);

	this.instance_188 = new lib.endpole_dot_png();
	this.instance_188.setTransform(68.1,1271.5,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_189 = new lib.water_hyphen_top_dot_png();
	this.instance_189.setTransform(-32.5,1321.5,1,1,0,0,0,49.5,50);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_190 = new lib.ground_hyphen_top_hyphen_left_dot_png();
	this.instance_190.setTransform(463.6,1215.8,1.155,1.155,0,0,0,60.5,60.5);

	this.instance_191 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_191.setTransform(593.1,1215,1.113,1.113,0,0,0,60.5,60.5);

	this.instance_192 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_192.setTransform(716.7,1216.7,1.113,1.113,0,0,0,60.5,60.5);

	this.instance_193 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_193.setTransform(846.1,1216.7,1.113,1.113,0,0,0,60.5,60.5);

	this.instance_194 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_194.setTransform(969.7,1218.4,1.113,1.113,0,0,0,60.5,60.5);

	this.instance_195 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_195.setTransform(1099.6,1218.4,1.113,1.113,0,0,0,60.5,60.5);

	this.instance_196 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_196.setTransform(1229,1218.4,1.113,1.113,0,0,0,60.5,60.5);

	this.instance_197 = new lib.bush_hyphen_platform_hyphen_block_dot_png();
	this.instance_197.setTransform(443.5,1071.4,1,1,0,0,0,42,88.5);

	this.instance_198 = new lib.bush_hyphen_platform_hyphen_block_dot_png();
	this.instance_198.setTransform(1439.6,982.7,1,1,0,0,0,42,88.5);

	this.instance_199 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_199.setTransform(1425.7,1221.3,1.134,1.134,0,0,0,57.6,60.5);

	this.instance_200 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_200.setTransform(1352.6,1220.1,1.113,1.113,0,0,0,60.5,60.5);

	this.instance_201 = new lib.bush_hyphen_platform_hyphen_block_dot_png();
	this.instance_201.setTransform(1439.6,1083.3,1,1,0,0,0,42,88.5);

	this.instance_202 = new lib.platformwall_hyphen_bottom_hyphen_left_dot_png();
	this.instance_202.setTransform(1495,518.5,1,1,0,0,0,63.5,16);

	this.instance_203 = new lib.platformwall_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_203.setTransform(1944.8,519,1,1,0,0,0,155.5,16.5);

	this.instance_204 = new lib.platformwall_hyphen_bottom_hyphen_right_dot_png();
	this.instance_204.setTransform(2121.6,517.7,1,1,0,0,0,51,16);

	this.instance_205 = new lib.wall_hyphen_top_hyphen_left_dot_png();
	this.instance_205.setTransform(1468.3,483.1,1,1,0,0,0,63,21);

	this.instance_206 = new lib.wall_hyphen_top_hyphen_repeat_dot_png();
	this.instance_206.setTransform(1915,483,1,1,0,0,0,155.5,21);

	this.instance_207 = new lib.wall_hyphen_top_hyphen_right_dot_png();
	this.instance_207.setTransform(2120.2,483.1,1,1,0,0,0,50.5,21);

	this.instance_208 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_208.setTransform(2126,392.2,0.786,0.869,0,0,0,52.5,110.5);

	this.instance_209 = new lib.spade_dot_png();
	this.instance_209.setTransform(2323.7,205.1,0.849,0.849,-0.5,0,0,92.5,15);

	this.instance_210 = new lib.endpole_dot_png();
	this.instance_210.setTransform(2525.1,56.9,1,1,0,0,0,8,39.5);

	this.instance_211 = new lib.endpole_dot_png();
	this.instance_211.setTransform(2525.3,213.8,1,1,0,0,0,8,39.5);

	this.addChild(this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.isDisp,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.platform1,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82,-316.2,2890.9,1895.3);


(lib.level14 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.level14PixiBG();
	this.instance.setTransform(0,0,0.4,0.4);

	// level14Pixi
	this.instance_1 = new lib.level14Pixi();
	this.instance_1.setTransform(-2,-0.6,0.4,0.4);

	// Layer 1
	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(535.1,-122.9,12.474,0.109,180);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(-102.7,271.9,8.002,0.476,90,0,0,0,0.2);

	this.instance_4 = new lib.deadZone();
	this.instance_4.setTransform(1172.9,272.8,8.002,0.476,90);

	this.instance_5 = new lib.deadZone();
	this.instance_5.setTransform(533.8,688.2,12.474,0.448);

	this.instance_6 = new lib.wall();
	this.instance_6.setTransform(150.9,439.6,0.225,1.5,0,180,0,-0.2,-1.4);

	this.instance_7 = new lib.wall();
	this.instance_7.setTransform(598.7,439.6,0.225,1.5,0,180,0,-0.2,-1.4);

	this.instance_8 = new lib.wall();
	this.instance_8.setTransform(552.1,202.9,1,0.124,0,180,0,-0.1,-1.2);

	this.instance_9 = new lib.wall();
	this.instance_9.setTransform(590,-32.4,0.2,0.1,0,180,0,-0.2,-1);

	this.instance_10 = new lib.wall();
	this.instance_10.setTransform(510,-31.1,0.2,0.124,0,180,0,-0.2,-1.2);

	this.instance_11 = new lib.wall();
	this.instance_11.setTransform(549.9,-23.6,1,0.124,0,180,0,-0.1,-1.2);

	this.instance_12 = new lib.wall();
	this.instance_12.setTransform(942.8,106.4,1.882,0.124,0,180,0,-0.1,-1.2);

	this.instance_13 = new lib.floor();
	this.instance_13.setTransform(843.8,100,0.125,0.25);

	this.instance_14 = new lib.wall();
	this.instance_14.setTransform(518.6,329.1,1.375,0.173,0,180,0,-0.1,-1.2);

	this.instance_15 = new lib.floor();
	this.instance_15.setTransform(444.1,325,0.125,0.25);

	this.instance_16 = new lib.wall();
	this.instance_16.setTransform(230.8,329,1.374,0.174,0,180,0,-0.1,-1.2);

	this.instance_17 = new lib.wall();
	this.instance_17.setTransform(486.8,206.2,1.738,0.124,0,180,0,-0.1,-1.2);

	this.instance_18 = new lib.floor();
	this.instance_18.setTransform(305.9,325,0.125,0.25);

	this.instance_19 = new lib.floor();
	this.instance_19.setTransform(393.8,200,0.125,0.25);

	this.instance_20 = new lib.wall();
	this.instance_20.setTransform(168.6,206.4,1.625,0.124,0,180,0,-0.1,-1.2);

	this.instance_21 = new lib.floor();
	this.instance_21.setTransform(256.3,200,0.125,0.25);

	this.instance_22 = new lib.floor();
	this.instance_22.setTransform(293.8,100,0.125,0.25);

	this.instance_23 = new lib.wall();
	this.instance_23.setTransform(368.6,106.4,1.375,0.124,0,180,0,-0.1,-1.2);

	this.instance_24 = new lib.skyhook();
	this.instance_24.setTransform(750,100,0.1,0.1);

	this.instance_25 = new lib.floor();
	this.instance_25.setTransform(550,-33.7,0.6,0.075);

	this.platform1_switch = new lib.itemSwitch();
	this.platform1_switch.setTransform(550,-50,0.25,0.25,0,0,0,-1.6,-3);

	this.instance_26 = new lib.floor();
	this.instance_26.setTransform(937.5,93.8,2,0.125);

	this.platform1_ref = new lib.platformRef();
	this.platform1_ref.setTransform(587.7,100.1,1.502,0.501,0,180,0,0.1,-0.2);

	this.platform1 = new lib.movingPlatform();
	this.platform1.setTransform(512.5,100,1.5,0.25);

	this.instance_27 = new lib.star();
	this.instance_27.setTransform(175,100,0.25,0.25,0,0,0,-1,-3);

	this.instance_28 = new lib.star();
	this.instance_28.setTransform(475,150,0.25,0.25,0,0,0,-1,-3);

	this.instance_29 = new lib.star();
	this.instance_29.setTransform(550,290,0.25,0.25,0,0,0,-1,-3);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(538.8,244.5,11.25,7.43,0,0,0,0.1,-1);

	this.p1 = new lib.shaun();
	this.p1.setTransform(225,425,0.238,0.66);

	this.instance_30 = new lib.deadZone();
	this.instance_30.setTransform(546.9,562.5,11.06,1);

	this.instance_31 = new lib.exit();
	this.instance_31.setTransform(1025.8,50,0.5,0.75);

	this.instance_32 = new lib.floor();
	this.instance_32.setTransform(362.5,93.8,1.5,0.125);

	this.instance_33 = new lib.floor();
	this.instance_33.setTransform(175,193.8,1.75,0.125);

	this.instance_34 = new lib.floor();
	this.instance_34.setTransform(481.3,193.8,1.875,0.125);

	this.instance_35 = new lib.floor();
	this.instance_35.setTransform(175,412.5,0.25,1);

	this.instance_36 = new lib.floor();
	this.instance_36.setTransform(575,412.5,0.25,1);

	this.instance_37 = new lib.floor();
	this.instance_37.setTransform(512.5,316.3,1.5,0.075);

	this.instance_38 = new lib.floor();
	this.instance_38.setTransform(225,316.3,1.751,0.075);

	this.instance_39 = new lib.floor();
	this.instance_39.setTransform(375,487.5,4.25,0.5);

	this.instance_40 = new lib.wall();
	this.instance_40.setTransform(842.3,162.5,0.156,0.748);

	this.instance_41 = new lib.wall();
	this.instance_41.setTransform(711,200,2.78,0.25);

	this.addChild(this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.p1,this.sizeRef,this.instance_29,this.instance_28,this.instance_27,this.platform1,this.platform1_ref,this.instance_26,this.platform1_switch,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.4,-256.7,1323.1,967.3);


(lib.level13 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.level13Pixi();
	this.instance.setTransform(-2,-0.6,0.4,0.4);

	// Layer 1
	this.gate3 = new lib.thickPivotPlanks();
	this.gate3.setTransform(1033.1,286.6);

	this.gate2 = new lib.thickPivotPlanks();
	this.gate2.setTransform(1403,286.5);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(1375,250,0.25,0.25,0,0,0,-1,-3);

	this.instance_2 = new lib.star();
	this.instance_2.setTransform(1169,241,0.25,0.25,0,0,0,-5,-3);

	this.instance_3 = new lib.star();
	this.instance_3.setTransform(500,225,0.25,0.25,0,0,0,-1,-3);

	this.instance_4 = new lib.exit();
	this.instance_4.setTransform(1812.5,425,0.5,1);

	this.instance_5 = new lib.wall();
	this.instance_5.setTransform(1712.6,576.6,6.001,2.031);

	this.instance_6 = new lib.deadZone();
	this.instance_6.setTransform(1102.9,581.5,12.5,1.902,0,0,0,0.2,-0.2);

	this.instance_7 = new lib.wall();
	this.instance_7.setTransform(101.9,162.5,0.969,2.5);

	this.instance_8 = new lib.wall();
	this.instance_8.setTransform(264.4,482.3,4.22,3.901,0,0,0,0,-0.1);

	this.p1 = new lib.shaun();
	this.p1.setTransform(212.7,247.4,0.238,0.66);

	this.gate1 = new lib.thickPivotPlanks();
	this.gate1.setTransform(662,287);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(993.1,286.2,18.92,7.47,0,0,0,0.1,0.2);

	// Layer 2
	this.instance_9 = new lib.deadZone();
	this.instance_9.setTransform(1004.3,-122.4,21.32,0.12,180);

	this.instance_10 = new lib.deadZone();
	this.instance_10.setTransform(-85.9,309.2,8.746,0.814,90,0,0,0,0.1);

	this.instance_11 = new lib.deadZone();
	this.instance_11.setTransform(2094.3,310.2,8.746,0.814,90);

	this.instance_12 = new lib.deadZone();
	this.instance_12.setTransform(1001.9,764.2,21.32,0.49);

	this.instance_13 = new lib.level13PixiBG();
	this.instance_13.setTransform(-2,-0.6,0.4,0.4);

	this.addChild(this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.sizeRef,this.gate1,this.p1,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.gate2,this.gate3,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-128.4,2261.5,917.1);


(lib.level12Pixi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.leaves1_dot_png();
	this.instance.setTransform(4671.4,2973,1,1,0,0,0,18.5,15);

	this.instance_1 = new lib.leaves2_dot_png();
	this.instance_1.setTransform(4560.8,2811.1,1,1,0,0,0,22,20);

	this.instance_2 = new lib.water_hyphen_top_dot_png();
	this.instance_2.setTransform(4706.3,3107.4,1.044,1.044,0,0,0,49.6,50);

	this.instance_3 = new lib.water_hyphen_top_dot_png();
	this.instance_3.setTransform(4605.6,3107.4,1.044,1.044,0,0,0,49.6,50);

	this.instance_4 = new lib.water_hyphen_top_dot_png();
	this.instance_4.setTransform(4504.3,3107.4,1.044,1.044,0,0,0,49.6,50);

	this.instance_5 = new lib.water_hyphen_top_dot_png();
	this.instance_5.setTransform(4405.6,3107.4,1.044,1.044,0,0,0,49.6,50);

	this.instance_6 = new lib.moss_dot_png();
	this.instance_6.setTransform(4689.9,3058.3,1,1,126,0,0,40.5,27.5);

	this.instance_7 = new lib.moss_dot_png();
	this.instance_7.setTransform(4500.5,3033.5,1,1,0,0,0,40.5,27.5);

	this.instance_8 = new lib.moss_dot_png();
	this.instance_8.setTransform(4476.7,3056.2,1,1,0,0,0,40.5,27.5);

	this.platform3 = new lib.level12movingitemcopy();
	this.platform3.setTransform(3883.2,2876.8);

	this.platform2 = new lib.level12movingitemcopy();
	this.platform2.setTransform(3195.5,2126.7);

	this.platform1 = new lib.level12movingitemcopy();
	this.platform1.setTransform(2259.6,2508);

	this.instance_9 = new lib.water_hyphen_top_dot_png();
	this.instance_9.setTransform(4304.3,3107.4,1.044,1.044,0,0,0,49.6,50);

	this.instance_10 = new lib.water_hyphen_top_dot_png();
	this.instance_10.setTransform(4210,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_11 = new lib.water_hyphen_top_dot_png();
	this.instance_11.setTransform(4108.7,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_12 = new lib.water_hyphen_top_dot_png();
	this.instance_12.setTransform(4010,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_13 = new lib.water_hyphen_top_dot_png();
	this.instance_13.setTransform(3908.7,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_14 = new lib.water_hyphen_top_dot_png();
	this.instance_14.setTransform(3811,3107.4,1.044,1.044,0,0,0,49.6,50);

	this.instance_15 = new lib.water_hyphen_top_dot_png();
	this.instance_15.setTransform(3709.7,3107.4,1.044,1.044,0,0,0,49.6,50);

	this.instance_16 = new lib.water_hyphen_top_dot_png();
	this.instance_16.setTransform(3611,3107.4,1.044,1.044,0,0,0,49.6,50);

	this.instance_17 = new lib.water_hyphen_top_dot_png();
	this.instance_17.setTransform(3509.7,3107.4,1.044,1.044,0,0,0,49.6,50);

	this.instance_18 = new lib.water_hyphen_top_dot_png();
	this.instance_18.setTransform(3415.4,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_19 = new lib.water_hyphen_top_dot_png();
	this.instance_19.setTransform(3314.1,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_20 = new lib.water_hyphen_top_dot_png();
	this.instance_20.setTransform(3215.4,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_21 = new lib.water_hyphen_top_dot_png();
	this.instance_21.setTransform(3114.1,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_22 = new lib.water_hyphen_top_dot_png();
	this.instance_22.setTransform(3016.9,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_23 = new lib.water_hyphen_top_dot_png();
	this.instance_23.setTransform(2915.6,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_24 = new lib.water_hyphen_top_dot_png();
	this.instance_24.setTransform(2816.9,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_25 = new lib.water_hyphen_top_dot_png();
	this.instance_25.setTransform(2715.6,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_26 = new lib.water_hyphen_top_dot_png();
	this.instance_26.setTransform(2621.3,3105.9,1.044,1.044,0,0,0,49.6,50);

	this.instance_27 = new lib.water_hyphen_top_dot_png();
	this.instance_27.setTransform(2520,3105.9,1.044,1.044,0,0,0,49.6,50);

	this.instance_28 = new lib.water_hyphen_top_dot_png();
	this.instance_28.setTransform(2421.3,3105.9,1.044,1.044,0,0,0,49.6,50);

	this.instance_29 = new lib.water_hyphen_top_dot_png();
	this.instance_29.setTransform(2320,3105.9,1.044,1.044,0,0,0,49.6,50);

	this.instance_30 = new lib.water_hyphen_top_dot_png();
	this.instance_30.setTransform(2222.3,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_31 = new lib.water_hyphen_top_dot_png();
	this.instance_31.setTransform(2121,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_32 = new lib.water_hyphen_top_dot_png();
	this.instance_32.setTransform(2022.3,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_33 = new lib.water_hyphen_top_dot_png();
	this.instance_33.setTransform(1921,3106.7,1.044,1.044,0,0,0,49.6,50);

	this.instance_34 = new lib.water_hyphen_top_dot_png();
	this.instance_34.setTransform(1826.7,3105.9,1.044,1.044,0,0,0,49.6,50);

	this.instance_35 = new lib.water_hyphen_top_dot_png();
	this.instance_35.setTransform(1725.4,3105.9,1.044,1.044,0,0,0,49.6,50);

	this.instance_36 = new lib.water_hyphen_top_dot_png();
	this.instance_36.setTransform(1626.7,3105.9,1.044,1.044,0,0,0,49.6,50);

	this.instance_37 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_37.setTransform(1312.5,2895.3);

	this.instance_38 = new lib.water_hyphen_top_dot_png();
	this.instance_38.setTransform(1525.4,3105.9,1.044,1.044,0,0,0,49.6,50);

	this.instance_39 = new lib.water_hyphen_bottom_dot_png();
	this.instance_39.setTransform(4770,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_40 = new lib.water_hyphen_bottom_dot_png();
	this.instance_40.setTransform(4673,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_41 = new lib.water_hyphen_bottom_dot_png();
	this.instance_41.setTransform(4576.4,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_42 = new lib.water_hyphen_bottom_dot_png();
	this.instance_42.setTransform(4485.7,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_43 = new lib.water_hyphen_bottom_dot_png();
	this.instance_43.setTransform(4389.1,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_44 = new lib.water_hyphen_bottom_dot_png();
	this.instance_44.setTransform(4292.1,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_45 = new lib.water_hyphen_bottom_dot_png();
	this.instance_45.setTransform(4195.5,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_46 = new lib.water_hyphen_bottom_dot_png();
	this.instance_46.setTransform(4102.8,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_47 = new lib.water_hyphen_bottom_dot_png();
	this.instance_47.setTransform(4006.2,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_48 = new lib.water_hyphen_bottom_dot_png();
	this.instance_48.setTransform(3909.2,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_49 = new lib.water_hyphen_bottom_dot_png();
	this.instance_49.setTransform(3812.6,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_50 = new lib.water_hyphen_bottom_dot_png();
	this.instance_50.setTransform(3722.9,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_51 = new lib.water_hyphen_bottom_dot_png();
	this.instance_51.setTransform(3626.3,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_52 = new lib.water_hyphen_bottom_dot_png();
	this.instance_52.setTransform(3529.3,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_53 = new lib.water_hyphen_bottom_dot_png();
	this.instance_53.setTransform(3432.7,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_54 = new lib.water_hyphen_bottom_dot_png();
	this.instance_54.setTransform(3340,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_55 = new lib.water_hyphen_bottom_dot_png();
	this.instance_55.setTransform(3243.4,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_56 = new lib.water_hyphen_bottom_dot_png();
	this.instance_56.setTransform(3146.4,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_57 = new lib.water_hyphen_bottom_dot_png();
	this.instance_57.setTransform(3049.8,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_58 = new lib.water_hyphen_bottom_dot_png();
	this.instance_58.setTransform(2957.4,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_59 = new lib.water_hyphen_bottom_dot_png();
	this.instance_59.setTransform(2860.8,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_60 = new lib.water_hyphen_bottom_dot_png();
	this.instance_60.setTransform(2763.8,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_61 = new lib.water_hyphen_bottom_dot_png();
	this.instance_61.setTransform(2667.2,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_62 = new lib.water_hyphen_bottom_dot_png();
	this.instance_62.setTransform(2574.5,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_63 = new lib.water_hyphen_bottom_dot_png();
	this.instance_63.setTransform(2477.9,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_64 = new lib.water_hyphen_bottom_dot_png();
	this.instance_64.setTransform(2380.9,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_65 = new lib.water_hyphen_bottom_dot_png();
	this.instance_65.setTransform(2284.3,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_66 = new lib.water_hyphen_bottom_dot_png();
	this.instance_66.setTransform(2194.6,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_67 = new lib.water_hyphen_bottom_dot_png();
	this.instance_67.setTransform(2098,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_68 = new lib.water_hyphen_bottom_dot_png();
	this.instance_68.setTransform(2001,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_69 = new lib.water_hyphen_bottom_dot_png();
	this.instance_69.setTransform(1904.4,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_70 = new lib.water_hyphen_bottom_dot_png();
	this.instance_70.setTransform(1811.7,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_71 = new lib.water_hyphen_bottom_dot_png();
	this.instance_71.setTransform(1715.1,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_72 = new lib.water_hyphen_bottom_dot_png();
	this.instance_72.setTransform(1618.1,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_73 = new lib.dirt1_dot_png();
	this.instance_73.setTransform(381.5,2890.1,0.535,0.535);

	this.instance_74 = new lib.bone_dot_png();
	this.instance_74.setTransform(391.4,2555.9,1.638,1.638);

	this.instance_75 = new lib.dirt4_dot_png();
	this.instance_75.setTransform(505.1,2554.3,1,1,96.1);

	this.instance_76 = new lib.dirt4_dot_png();
	this.instance_76.setTransform(290.4,2947.3);

	this.instance_77 = new lib.dirt3_dot_png();
	this.instance_77.setTransform(281.1,2619.1,0.571,0.86);

	this.instance_78 = new lib.dirt1_dot_png();
	this.instance_78.setTransform(240.1,2346.6);

	this.instance_79 = new lib.dirt4_dot_png();
	this.instance_79.setTransform(349.5,3098.5,1,1,180,0,0,121.5,37.5);

	this.instance_80 = new lib.ground_hyphen_right_dot_png();
	this.instance_80.setTransform(417.9,2993,1,1,-0.5);

	this.instance_81 = new lib.ground_hyphen_left_dot_png();
	this.instance_81.setTransform(237.5,2417.2);

	this.instance_82 = new lib.ground_hyphen_left_dot_png();
	this.instance_82.setTransform(240.6,2539.1);

	this.instance_83 = new lib.ground_hyphen_left_dot_png();
	this.instance_83.setTransform(240.6,2649.7);

	this.instance_84 = new lib.ground_hyphen_left_dot_png();
	this.instance_84.setTransform(243.7,2766.9);

	this.instance_85 = new lib.ground_hyphen_left_dot_png();
	this.instance_85.setTransform(246.7,2881.3);

	this.instance_86 = new lib.ground_hyphen_left_dot_png();
	this.instance_86.setTransform(246.7,2991.9);

	this.instance_87 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_87.setTransform(307.4,2876.1);

	this.instance_88 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_88.setTransform(295.1,2802.3);

	this.instance_89 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_89.setTransform(292,2736.8);

	this.instance_90 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_90.setTransform(288.9,2622);

	this.instance_91 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_91.setTransform(292,2525.7);

	this.instance_92 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_92.setTransform(288.9,2411);

	this.instance_93 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_93.setTransform(228.5,2304.9);

	this.instance_94 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_94.setTransform(248,3186.6,1,1,0,0,0,60,60);

	this.instance_95 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_95.setTransform(346.4,3188.6,1,1,0,0,0,60,60);

	this.instance_96 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_96.setTransform(488.8,2783.9);

	this.instance_97 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_97.setTransform(488.8,2767.5);

	this.instance_98 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_98.setTransform(488.2,2656.2);

	this.instance_99 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_99.setTransform(486.9,2540.5);

	this.instance_100 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_100.setTransform(486.3,2429.9);

	this.instance_101 = new lib.sticky_hyphen_grass_hyphen_section_dot_png();
	this.instance_101.setTransform(486.3,2318);

	this.instance_102 = new lib.ground_hyphen_right_dot_png();
	this.instance_102.setTransform(401,2721.3);

	this.instance_103 = new lib.ground_hyphen_right_dot_png();
	this.instance_103.setTransform(400.1,2604.5);

	this.instance_104 = new lib.ground_hyphen_right_dot_png();
	this.instance_104.setTransform(400,2529.8);

	this.instance_105 = new lib.ground_hyphen_right_dot_png();
	this.instance_105.setTransform(399.1,2412.9);

	this.instance_106 = new lib.ground_hyphen_top_hyphen_repeat_dot_png();
	this.instance_106.setTransform(286.4,2304.9);

	this.instance_107 = new lib.ground_hyphen_top_hyphen_right_dot_png();
	this.instance_107.setTransform(398.8,2305.6);

	this.instance_108 = new lib.dirt3_dot_png();
	this.instance_108.setTransform(567.2,3249.4,1,1,-174.5);

	this.instance_109 = new lib.dirt3_dot_png();
	this.instance_109.setTransform(1271.5,3093.8);

	this.instance_110 = new lib.dirt4_dot_png();
	this.instance_110.setTransform(1111.9,3063.4,1.272,1.272);

	this.instance_111 = new lib.dirt1_dot_png();
	this.instance_111.setTransform(1122.7,3033,1,1,130.3);

	this.instance_112 = new lib.dirt3_dot_png();
	this.instance_112.setTransform(737.6,3001.3);

	this.instance_113 = new lib.dirt2_dot_png();
	this.instance_113.setTransform(489.1,3037.9,1.38,1.38);

	this.instance_114 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_114.setTransform(588.9,3069.8,1.07,1,0,0,0,88.8,185.7);

	this.instance_115 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_115.setTransform(636,2887.2);

	this.instance_116 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_116.setTransform(771.6,2887.8);

	this.instance_117 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_117.setTransform(908.7,2890.9);

	this.instance_118 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_118.setTransform(1044.3,2891.5);

	this.instance_119 = new lib.ground_hyphen_rectangle_hyphen_block_dot_png();
	this.instance_119.setTransform(1176.9,2894.7);

	this.instance_120 = new lib.dirt1_dot_png();
	this.instance_120.setTransform(1960.3,2906.8,1,1,0,0,0,55,87);

	this.instance_121 = new lib.leaves1_dot_png();
	this.instance_121.setTransform(2111.9,2884.9);

	this.instance_122 = new lib.leaves1_dot_png();
	this.instance_122.setTransform(1481.2,3001.8);

	this.instance_123 = new lib.leaves1_dot_png();
	this.instance_123.setTransform(1532.8,2808,1.417,1.417);

	this.instance_124 = new lib.leaves2_dot_png();
	this.instance_124.setTransform(1811.5,2615.5,1.313,1.313);

	this.instance_125 = new lib.moss_dot_png();
	this.instance_125.setTransform(1682.2,3027.2,1.05,1.05,-88.5);

	this.instance_126 = new lib.moss_dot_png();
	this.instance_126.setTransform(1639.8,2998.4,1.05,1.05,-88.5);

	this.instance_127 = new lib.moss_dot_png();
	this.instance_127.setTransform(1928.6,2991.7,1.71,1.71,-1.6);

	this.instance_128 = new lib.moss_dot_png();
	this.instance_128.setTransform(1703.6,2743.4,1.05,1.05);

	this.instance_129 = new lib.moss_dot_png();
	this.instance_129.setTransform(2138.6,2619.7,1.71,1.71,121.5);

	this.instance_130 = new lib.moss_dot_png();
	this.instance_130.setTransform(2023.6,2532.2,1.278,1.278);

	this.instance_131 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_131.setTransform(1546.4,2842.6);

	this.instance_132 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_132.setTransform(1864.6,2842.6);

	this.instance_133 = new lib.wall_hyphen_right_dot_png();
	this.instance_133.setTransform(2021.4,2973.9,1.109,1);

	this.instance_134 = new lib.wall_hyphen_right_dot_png();
	this.instance_134.setTransform(2021.1,2942.3,1.109,1);

	this.instance_135 = new lib.wall_hyphen_right_dot_png();
	this.instance_135.setTransform(2021.1,2855.4,1.109,1);

	this.instance_136 = new lib.wall_hyphen_right_dot_png();
	this.instance_136.setTransform(2021.4,2768.2,1.109,1);

	this.instance_137 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_137.setTransform(2021.5,2443.7,1.083,1.102);

	this.instance_138 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_138.setTransform(1929.6,2506.8,1,1.102);

	this.instance_139 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_139.setTransform(1837.7,2566.8,1,1.102);

	this.instance_140 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_140.setTransform(1744,2630.6,1,1.102);

	this.instance_141 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_141.setTransform(1650.8,2694.3,1,1.102);

	this.instance_142 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_142.setTransform(1556.5,2753.7,1,1.102);

	this.instance_143 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_143.setTransform(1467.8,2816.2,1,1.119);

	this.instance_144 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_144.setTransform(1874.6,2704.5);

	this.instance_145 = new lib.platformgrass_hyphen_right_dot_png();
	this.instance_145.setTransform(2999.9,2649.5,1.291,1.291);

	this.instance_146 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_146.setTransform(2883.7,2649.1,1.368,1.368);

	this.instance_147 = new lib.platformgrass_hyphen_repeat_dot_png();
	this.instance_147.setTransform(2730.7,2647.1,1.368,1.368);

	this.instance_148 = new lib.platformgrass_hyphen_left_dot_png();
	this.instance_148.setTransform(2612.5,2646.9,1.382,1.382);

	this.isDisp = new lib.physHold();
	this.isDisp.setTransform(6.4,3.5,1,1,0,0,0,5,3.5);

	this.instance_149 = new lib.wall_hyphen_right_dot_png();
	this.instance_149.setTransform(2021.4,2681,1.109,1);

	this.instance_150 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_150.setTransform(1727.7,2784.5);

	this.instance_151 = new lib.wall_hyphen_platform_hyphen_rectangle_dot_png();
	this.instance_151.setTransform(1657.6,2842);

	this.instance_152 = new lib.wall_hyphen_left_dot_png();
	this.instance_152.setTransform(1843.4,3018.7,1,1,0,0,0,70.5,45);

	this.instance_153 = new lib.moss_dot_png();
	this.instance_153.setTransform(2036.2,2566.4,1.278,1.278,180);

	this.instance_154 = new lib.moss_dot_png();
	this.instance_154.setTransform(2149.4,2506.6,1.278,1.278,180);

	this.instance_155 = new lib.ground_hyphen_right_dot_png();
	this.instance_155.setTransform(400,2791.4);

	this.instance_156 = new lib.ground_hyphen_right_dot_png();
	this.instance_156.setTransform(410.7,2876.1,1,1,-3.2);

	this.instance_157 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_157.setTransform(461.2,3185.6,1,1,0,0,0,60,60);

	this.instance_158 = new lib.ground_hyphen_repeat_dot_png();
	this.instance_158.setTransform(315.6,2991.4);

	this.instance_159 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_159.setTransform(250.1,3135.4,1,1,0,0,0,60,60);

	this.instance_160 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_160.setTransform(348.4,3137.4,1,1,0,0,0,60,60);

	this.instance_161 = new lib.ground_hyphen_bottom_hyphen_repeat_dot_png();
	this.instance_161.setTransform(463.2,3134.3,1,1,0,0,0,60,60);

	this.instance_162 = new lib.water_hyphen_bottom_dot_png();
	this.instance_162.setTransform(1521.5,3204.8,1,1,0,0,0,49.5,49.5);

	this.instance_163 = new lib.wall_hyphen_platform_hyphen_thin_dot_png();
	this.instance_163.setTransform(4498.2,2926.9,1.294,1.294,0,0,0,52.6,110.5);

	this.instance_164 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_164.setTransform(4657.7,2902.4,1,1,0,0,0,126,111);

	this.instance_165 = new lib.wall_hyphen_platform_hyphen_square_dot_png();
	this.instance_165.setTransform(4661.2,2974.7,1,1,0,0,0,126,111);

	this.instance_166 = new lib.hazardsign_dot_png();
	this.instance_166.setTransform(2303.7,3010.6,0.647,0.647,0,0,0,51,46);

	this.instance_167 = new lib.endpole_dot_png();
	this.instance_167.setTransform(2305.3,3066.2,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_168 = new lib.hazardsign_dot_png();
	this.instance_168.setTransform(2841.1,3013.9,0.647,0.647,0,0,0,51,46);

	this.instance_169 = new lib.endpole_dot_png();
	this.instance_169.setTransform(2842.7,3059.7,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_170 = new lib.hazardsign_dot_png();
	this.instance_170.setTransform(3583.6,3005.8,0.647,0.647,0,0,0,51,46);

	this.instance_171 = new lib.endpole_dot_png();
	this.instance_171.setTransform(3585.2,3051.6,0.705,0.705,0,0,0,8.1,39.5);

	this.instance_172 = new lib.hazardsign_dot_png();
	this.instance_172.setTransform(4261.6,3011.6,0.647,0.647,0,0,0,51,46);

	this.instance_173 = new lib.endpole_dot_png();
	this.instance_173.setTransform(4263.2,3057.4,0.705,0.705,0,0,0,8.1,39.5);

	this.addChild(this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.isDisp,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.platform1,this.platform2,this.platform3,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-0.5,4818.6,3270.3);


(lib.level12 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.level12Pixi();
	this.instance.setTransform(964.1,653.8,0.4,0.4,0,0,0,2410.2,1634.5);

	// Layer 2
	this.instance_1 = new lib.deadZone();
	this.instance_1.setTransform(1012.4,511.4,18.945,0.113,180);

	this.instance_2 = new lib.deadZone();
	this.instance_2.setTransform(43.7,917.5,8.23,0.724,90);

	this.instance_3 = new lib.deadZone();
	this.instance_3.setTransform(1980.9,918.5,8.23,0.724,90);

	this.instance_4 = new lib.deadZone();
	this.instance_4.setTransform(1010.3,1345.7,18.945,0.461);

	this.instance_5 = new lib.level12PixiBG();
	this.instance_5.setTransform(-2,-0.6,0.4,0.4);

	// Layer 1
	this.platform3_switch = new lib.itemSwitch();
	this.platform3_switch.setTransform(1225,1050,0.25,0.25,0,0,0,-1.6,-3.2);

	this.platform3 = new lib.movingPlatform();
	this.platform3.setTransform(1550.3,1149.9,1,0.503);

	this.platform3_ref = new lib.platformRef();
	this.platform3_ref.setTransform(1635.2,1063.6,2.48,0.784,-45);

	this.instance_6 = new lib.wall();
	this.instance_6.setTransform(1850,1137.5,1.5,0.25);

	this.instance_7 = new lib.exit();
	this.instance_7.setTransform(1872.7,1073,0.522,0.935);

	this.instance_8 = new lib.floor();
	this.instance_8.setTransform(1150,1079.4,2,0.349);

	this.platform2_switch = new lib.itemSwitch();
	this.platform2_switch.setTransform(1150,1050,0.25,0.25,0,0,0,-1.6,-3.2);

	this.platform1_switch = new lib.itemSwitch();
	this.platform1_switch.setTransform(1075,1050,0.25,0.25,0,0,0,-1.6,-3.2);

	this.platform2 = new lib.movingPlatform();
	this.platform2.setTransform(1275,850,1,0.499);

	this.platform2_ref = new lib.platformRef();
	this.platform2_ref.setTransform(1210.9,839.3,5,0.784,180);

	this.platform1 = new lib.movingPlatform();
	this.platform1.setTransform(900,1000,1,0.5);

	this.platform1_ref = new lib.platformRef();
	this.platform1_ref.setTransform(904.5,921.8,1.652,0.692,-90,0,0,-0.1,0);

	this.sizeRef = new lib.sizeRef();
	this.sizeRef.setTransform(1008,913.6,17.859,7.655);

	this.instance_9 = new lib.floor();
	this.instance_9.setTransform(830,1000,0.375,0.25);

	this.instance_10 = new lib.floor();
	this.instance_10.setTransform(792,1025,0.375,0.25);

	this.instance_11 = new lib.floor();
	this.instance_11.setTransform(755,1050,0.375,0.25);

	this.instance_12 = new lib.floor();
	this.instance_12.setTransform(680.8,1100,0.375,0.25);

	this.instance_13 = new lib.floor();
	this.instance_13.setTransform(718.1,1075,0.375,0.25);

	this.instance_14 = new lib.floor();
	this.instance_14.setTransform(643.8,1125,0.375,0.25);

	this.instance_15 = new lib.floor();
	this.instance_15.setTransform(606.3,1150,0.375,0.25);

	this.instance_16 = new lib.deadZone();
	this.instance_16.setTransform(1243.7,1255.7,13.124,0.615);

	this.instance_17 = new lib.floor();
	this.instance_17.setTransform(175.1,1049.8,0.499,2.5,0,0,0,0.1,-0.1);

	this.p1 = new lib.shaun();
	this.p1.setTransform(300,1125,0.238,0.66);

	this.instance_18 = new lib.floor();
	this.instance_18.setTransform(363.4,1224.9,4.5,1.25,0,0,0,0.1,-0.1);

	this.addChild(this.instance_18,this.p1,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.sizeRef,this.platform1_ref,this.platform1,this.platform2_ref,this.platform2,this.platform1_switch,this.platform2_switch,this.instance_8,this.instance_7,this.instance_6,this.platform3_ref,this.platform3,this.platform3_switch,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,-0.8,2018.8,1369.6);


// stage content:
(lib.flash_lib_ex2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boundingBoxes
	this.instance = new lib.level12();
	this.instance.setTransform(487.6,674.7,1,1,0,0,0,487.6,674.7);

	this.instance_1 = new lib.level13();
	this.instance_1.setTransform(487.6,674.7,1,1,0,0,0,487.6,674.7);

	this.instance_2 = new lib.level14();
	this.instance_2.setTransform(487.6,674.7,1,1,0,0,0,487.6,674.7);

	this.instance_3 = new lib.level15();
	this.instance_3.setTransform(487.6,674.7,1,1,0,0,0,487.6,674.7);

	this.instance_4 = new lib.level16();
	this.instance_4.setTransform(487.6,674.7,1,1,0,0,0,487.6,674.7);

	this.instance_5 = new lib.level17();
	this.instance_5.setTransform(487.6,674.7,1,1,0,0,0,487.6,674.7);

	this.instance_6 = new lib.level18();
	this.instance_6.setTransform(487.6,674.7,1,1,0,0,0,487.6,674.7);

	this.instance_7 = new lib.level19();
	this.instance_7.setTransform(1138.1,356.4,1,1,0,0,0,1138.1,356.4);

	this.instance_8 = new lib.level20();
	this.instance_8.setTransform(487.6,674.7,1,1,0,0,0,487.6,674.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.4,199.2,2018.8,1369.6);

})(lib2 = lib2||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib2, images, createjs, ss;