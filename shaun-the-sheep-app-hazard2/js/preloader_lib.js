(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/greenbg.jpg", id:"greenbg"}
	]
};

// stage content:
(lib.preloader_lib = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.loader();
	this.instance.setTransform(0,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(275,200.5,900,600);


// symbols:
(lib.greenbg = function() {
	this.initialize(img.greenbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib.logoloader = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAOIAAgFIgBgEIAAgNIAAAAIgFAIIgBAAIgBAAIgEgIIAAAWIgEAAIAAgBIAAAAIAAgaIAGAAIAAABIAAAAIADAGIAAABIAAABIAAABIAAAAIAAgCIABgBIAAgBIABgCIABgBIABgCIAAgBIAGAAIAAAbg");
	this.shape.setTransform(167.3,90,1.773,1.773);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAOIAAgBIAAgBIAAgBIAAgBIAAgBIAAgRIgBAAIAAgBIgJAAIAAgEIAVAAIAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAIAAABIgJAAIAAABIAAAUIAAABIAAAAIAAABg");
	this.shape_1.setTransform(163.1,90,1.773,1.773);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHAuQgQAAgNgNQgLgMgCgNIAAgJQACgRAHgMQALgPAPAAIACAAQAMABAIAMQAGAMAAALIAAABQgBAHgBABQgDAFgPADIgJABIgHAAIADAFQAFAIAJAAIABAAQAFAAADgFQAGgGADAAQAEAAADAGIACAIIAAABQAAAJgLAGQgIAFgJAAgAgLgFQAKgBANgBQgEgUgIgBIAAAAQgGAAgFAXg");
	this.shape_2.setTransform(105.4,87.2,1.773,1.773);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvB5QgBgGgFg/IgHhZQgDhIAFgGQAJgLARAAQAIgBAUAJQA/AbADA0IAAAFQAAAggVATQgUAVgfAGIgEABIAABJQgGAJgLABQgJAAgHgHgAgUhDIAEBAIAAAFIABABIAGgCQAagEAAgaIAAgCQAAgIgEgIIgBgCQgHgNgQgKIgKgFg");
	this.shape_3.setTransform(154.1,113.9,1.773,1.773);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA9BZQgLAAgEgNIgCgIIgGAFQgPAJgQABQgbADgZgRQgdgTgCggQgDgkARgYQARgXAggDQAWgCASAKIAHAEIABgIQADgXALgBIABAAQAIAAAHAJQAJAKAAALIADBBIABAuQAAAYgCACQgEAJgKABgAgVgaQgOAJgEARIAAAIQAAAKAGAMIABABQANAPASAAQAHAAAIgEQASgIADgSQACgJgCgIQgCgJgEgFIgBgBQgMgNgQgDIgBAAQgKAAgKAGg");
	this.shape_4.setTransform(94.2,55.4,1.773,1.773);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBhQghAAgcgYQgegagDglQgBgoAQgeQAUgjAmgBIACAAQAVAAARAYQARAXABAZIAAADQAAAKgDAHQgFAJgeAHQgQAFgQABIgJABIAEAIQAPAbAegBQAMgBAKgOQAJgNAFAAIABAAQAGAAAGAKQAEAIABAJIAAABQAAARgTAOQgSANgTAAgAgcgXIgBAJIAggJIAGgBIgCgGQgHgagOAAIgBAAQgKABgDAgg");
	this.shape_5.setTransform(99.8,115.9,1.773,1.773);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOBiQgjgCgcgdQgbgfADgkQADgpATgbQAWgdAhAAIAGAAQAYACAPAbQANAYgBAaQgCANgEAFQgFAJgfAFQgSACgQgBIgIAAIADAIQALAdAeADQAMAAAMgMQAKgMAFAAQAIAAAEALQAEAJgBAJQgCARgVAMQgRAJgQAAIgFAAgAgVgbIgCAIIAIgBIAWgDIAHAAIgCgIQgGgbgKgBIAAAAQgKAAgHAgg");
	this.shape_6.setTransform(126.4,110.9,1.773,1.773);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVCDQgDgCAAgHQgBgMAEggQAEgggBgMQAAgQgHgHQgFgEgIAAIgCAAQgIABgPAKIgCABIAAAEIABAvQAAAygDAEQgIAIgLABQgOAAgFgHQgBAAAAgOQAAglgDgmIgIhvQAAgcABgEIACgHQACgMAFgCQAJgFAKgBQAHAAAEACQAFAHAGBbIAAAIIAIgDQANgHAOgBQA+gDACBGQABALgCAgQgCAjgDAGQgEAGgOAGQgLAGgKAAQgGAAgDgCg");
	this.shape_7.setTransform(69.7,110.3,1.773,1.773);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYByQgSgEgEgGIAAAAQgEgFAAgIQAAgFACgIQADgIAGAAIABAAIAjADIACAAQAEAAAHgEQAIgFgBgGQAAgIgUgKQgggPgIgGQgWgQgBgSQgCgfAcgiQAbgiAdgBQAPgBARAIQAUAIAAANQAAAIgFAKQgHAKgIAAQgGAAgMgEQgMgEgGAAQgJABgIAQQgIAQAAAIQAAAJAUAOIAmAXQAUAPABAMQABAYgWAWQgXAWgWABIgFAAQgJAAgKgCg");
	this.shape_8.setTransform(41.1,109.6,1.773,1.773);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrCDQgHgIAAgLQgBgKAGgFQAEgDALgEIAjgOQAagMgBgNQgBgOgcgKIgwgVQgbgPgCgaQgBggAUgaQASgXAhgOQATgIATgBQARgBALAFQAPAHABAOIAAACQAAALgFAFQgFAGgMAAIgegBQgQABgNAIQgSALAAAOQACAVAXAMIAwAWQAZARACAlQACAkgkAaQggAYgkACQgLAAgHgJg");
	this.shape_9.setTransform(33.1,61.8,1.773,1.773);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVBsQgBgPADgdQAFgcgBgRQAAgYgVAAIgBAAQgIAAgPAJIgCACIAAAyQAAAygDAEQgHAIgLAAQgMABgIgGQgCgHgIhcIgGhUQgBgcACgDQADgGAMgGQAKgFAJAAQAHAAAEACQAGACADBDIABAJIAHgEQAOgHAOgBQA9gDADBFQABAMgCAgQgBAigFAHQgDAHgOAGQgMAFgKAAIgBAAQgKAAAAgLg");
	this.shape_10.setTransform(63.6,52.6,1.773,1.773);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAoBZIgEgBIgHgBQgCAAgBgEIgCgMIgBgKIgIAGQgGAEgJADQgHACgEAAQgvgFgIgzQgGgnAEgpIABgIQAEgHAPgHQAPgGAJABQAEABABABIAAAAQAFAEgCAqIgCAnQAAASABAJQABAFAFACIAFABQAHAAAIgGQAIgHABgMQACgOgBgbQgBgSABgLQABgMANgEQAKgEANABIALACIAAAAQAEAGgBA2QAAArgDAZQgBARgFAFIgCACQgKAOgIAAg");
	this.shape_11.setTransform(123.6,59.1,1.773,1.773);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALBDQgDgDAAgDIACgXQACgMAAgKQAAgLgIAAIgBAAQgDAAgFAFIgCAAIABAZQAAAagDACQgDAFgHAAQgHAAgEgEQgDgBgDgxIgEg3QAAgPABgCQABgEAHgDQAGgDAFAAIAGABQAEACACAuIAAAEIAEgBIALgEQAQAAAIAIQAKAJAAARIAAAXQgBASgCADQgDAEgHADQgGADgFAAIgCABQgCAAgCgCg");
	this.shape_12.setTransform(90.4,84,1.773,1.773);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEA1QgDgFgEgwIAAgCIgEAAQgHAAgDgDQgEgEgBgJIAAgBQAAgLAOgBIADAAIAAgNQAAgGABgBQADgGAIAAQAFAAAEAEQACABABASIAAADIADAAIAJABQAHADABAIIAAABQAAAIgHADIgIACIgDABIABASIABAbIgBALQgEAGgFAAQgFAAgEgFg");
	this.shape_13.setTransform(76.7,86.9,1.773,1.773);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXBZQgDAAgCgCQgFgEAEgrIADgiIAAAAIAAgGQACgRgCgIQAAgFgFgCQgJgEgLAIIgBAAQgHAFgCANQgDARAAAZQABAPgCANQgBAMgNAEQgKADgOgBQgHgBgEgCIAAAAQgCAAAAgVIABgmQADgrADgWIABgBIAAgDQABgPAGgHIABgCQALgMAIAAIACAAIADABIAIABQABABABAEIACAVIAIgFQALgIAOAAIABAAQAwAGAFA0QAEApgFAnIgCAIQgDAHgQAGQgMAFgIAAIgEgBg");
	this.shape_14.setTransform(152.8,61.2,1.773,1.773);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37BDB2").s().p("AhpM6QhngvhMhTQhGAdhNAAQikAAh1h1Qh0h0AAikQAAgyAMgvQh7icABjGQACi2BqiTQBpiQCng6QARgzAtghQAtggA5gBQA1AAAuAgQBFhABXgiQBZgjBggBQBzAABpAyQBkAwBIBVQCwApBzCPQB1CQgBC6QABAWgEAoQAgAZASAkQASAkAAAoQAAAigOAhQAsBOAABZQAACOhlBkQhkBliOAAIgHAAQhIB9h8BJQiBBMiUgBQh1AAhpgvg");
	this.shape_15.setTransform(94,87.4);

	// Layer 2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhpM6QhngvhMhTQhGAdhNAAQikAAh1h1Qh0h0AAikQAAgyAMgvQh7icABjGQACi2BqiTQBpiQCng6QARgzAtghQAtggA5gBQA1AAAuAgQBFhABXgiQBZgjBggBQBzAABpAyQBkAwBIBVQCwApBzCPQB1CQgBC6QABAWgEAoQAgAZASAkQASAkAAAoQAAAigOAhQAsBOAABZQAACOhlBkQhkBliOAAIgHAAQhIB9h8BJQiBBMiUgBQh1AAhpgvg");
	this.shape_16.setTransform(101,92.4);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,195,179.8);


(lib.bar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("Ego/AFOIg8qcMBT3AAKIgoKSg");
	this.shape.setTransform(268.5,33.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,537,67);


(lib.loadingbar = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(5,1,1).p("Egp7gFOMBT3AAKIgoKTMhSTAAAg");
	this.shape.setTransform(256.5,21.5);

	// Layer 3
	this.loader_bar = new lib.bar();
	this.loader_bar.setTransform(-12,-12);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6600").ss(5,1,1).p("Egp7gFOMBT3AAKIgoKTMhSTAAAg");
	this.shape_1.setTransform(256.5,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA503").s().p("Ego/AFOIg8qbMBT3AAKIgoKRg");
	this.shape_2.setTransform(256.5,21.5);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgpJAFJIgep+MBTPgAUIgeKSg");
	this.shape_3.setTransform(270.7,33.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.loader_bar,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,551.7,80.6);


(lib.loader = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logoloader();
	this.instance.setTransform(446.1,210,0.777,0.777,0,0,0,94,87.5);

	// Layer 2
	this.loader = new lib.loadingbar();
	this.loader.setTransform(450.9,341.2,0.694,0.694,0,0,0,266.4,32);

	// Layer 1
	this.instance_1 = new lib.greenbg();

	this.addChild(this.instance_1,this.loader,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);

})(preload_lib = preload_lib||{}, images = images||{}, createjs = createjs||{});
var preload_lib, images, createjs;
