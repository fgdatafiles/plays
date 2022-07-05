function enemydrone4() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemydrone4.prototype = new enemy();

enemydrone4.prototype.init = function() {
	this.a = addObj("enemydrone4");
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 800;
	this.yposmin = 120*scG;
	this.yposmax = _H-120*scG;
	// damage
	this.damage = 3 * g.enemydamage;
	// big size
	this.setsize(144*scG, 144*scG);
	// floating x
	this.fxrange = 20*scG;
	this.fxspeed = 0.2*scG;
	this.fxs = this.fxrange;
}