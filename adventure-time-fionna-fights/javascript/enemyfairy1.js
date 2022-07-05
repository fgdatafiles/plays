function enemyfairy1() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemyfairy1.prototype = new enemy();

enemyfairy1.prototype.init = function() {
	this.a = addObj("enemyfairy1", 0, 0 , 0.4*scG);
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 100;
	// size
	this.setsize(40*scG, 40*scG);
	// speed
	this.xs = -0.8*scG * g.enemyspeed;
	// make wings
	var wings = addObj("fairywings", 30*scG, 0, 2.5);
	wings.img.play();
	wings.img.animationSpeed = 0.5;
	this.a.addChild(wings);
}