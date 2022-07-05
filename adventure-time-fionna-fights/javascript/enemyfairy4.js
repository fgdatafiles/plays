function enemyfairy4() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemyfairy4.prototype = new enemy();

enemyfairy4.prototype.init = function() {
	this.a = addObj("enemyfairy4", 0, 0 , 0.4*scG);
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 300;
	// size
	this.setsize(40*scG, 40*scG);
	// speed
	this.xs = -0.8*scG * g.enemyspeed;
	this.getdestination()
	this.d = 40;
	this.div = 15*scG;
	// make wings
	var wings = addObj("fairywings", 30*scG, 0, 2.5);
	wings.img.play();
	wings.img.animationSpeed = 0.5;
	this.a.addChild(wings);
}

// move
enemyfairy4.prototype.move = function() {
	this.x = this.x + (Math.max(g.p.x + 100*scG, this.tx) - this.x) / this.div;
	this.y = this.y + (this.ty - this.y) / 7;
	this.div = Math.max(6*scG, this.div-1*scG);
	this.d--;
	if (!this.d) {
		this.d = 30 + fox.random(10);
		this.getdestination();
	}
}

// get destination
enemyfairy4.prototype.getdestination = function() {
	this.tx = g.xmin + _H/2 + fox.random(_H/2 - 100*scG);
	this.ty = 80*scG + fox.random(_H - 160*scG);
}