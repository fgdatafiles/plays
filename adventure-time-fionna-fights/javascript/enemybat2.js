function enemybat2() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemybat2.prototype = new enemy();


enemybat2.prototype.init = function() {
	this.a = addObj("enemybat2");
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 500;
	this.yposmin = 80*scG;
	this.yposmax = 200*scG;
	// damage
	this.damage = 2 * g.enemydamage;
	// size
	this.setsize(66*scG, 66*scG);
	// x floating vars
	this.fxrange = 30*scG;
	this.fxspeed = 3*scG;
	this.fxs = this.fxrange;
}