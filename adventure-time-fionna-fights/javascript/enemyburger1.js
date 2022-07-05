function enemyburger1() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemyburger1.prototype = new enemy();


enemyburger1.prototype.init = function() {
	this.a = addObj("enemyburger1");
	this.addChild(this.a);
	
	// energy
	this.energy = energynow = energymax = 200;
	this.setsize(64*scG, 64*scG);
	// floating x
	this.fxrange = 10*scG;
	this.fxspeed = 3*scG;
	this.fys = this.fyrange;
}