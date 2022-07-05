function enemybat1() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemybat1.prototype = new enemy();


enemybat1.prototype.init = function() {
	this.a = addObj("enemybat1", 0,0,0.5*scG);
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	// energy
	this.energy = energynow = energymax = 200;
	this.yposmin = 150*scG;
	this.yposmax = 250*scG;
	// y floating vars
	this.fyrange = 5*scG;
	this.fyspeed = 1.5*scG;
	this.fys = this.fyrange;
}

// end of bump
enemybat1.prototype.endbump = function() {
	this.fyspeed = 4*scG;
	this.fyrange = 15*scG;
	this.fys = -this.fyrange;
	this.fystart = Math.max(this.yposmin-30*scG, Math.min(this.yposmax+30*scG, this.y));
	this.a.rotation = 0;
	this.state = 1;
}