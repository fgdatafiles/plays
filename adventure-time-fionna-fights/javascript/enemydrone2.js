function enemydrone2() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemydrone2.prototype = new enemy();

enemydrone2.prototype.init = function() {
	this.a = addObj("enemydrone2");
	this.addChild(this.a);
	
	this.energy = this.energynow = this.energymax = 200;
	this.setsize(54*scG, 54*scG);
	this.xs = -0.4*scG * g.enemyspeed;
}