function enemybutterfly3() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemybutterfly3.prototype = new enemy();

enemybutterfly3.prototype.init = function() {
	this.a = addObj("enemybutterfly3");
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 500;
	this.yposmin = 150*scG;
	this.yposmax = 250*scG;
	// damage
	this.damage = 2 * g.enemydamage;
	// size
	this.setsize(94*scG, 94*scG);
	// y floating vars
	this.fyrange = 5*scG;
	this.fyspeed = 0.5*scG;
	this.fys = this.fyrange;
}

// end of bump
enemybutterfly3.prototype.endbump = function() {
	this.fyrange = 6*scG + 0.1*scG * fox.random(10);
	this.fyspeed = 0.5*scG;
	this.fxrange = 15*scG + 0.1*scG * fox.random(10);
	this.fxspeed = 0.5*scG;
	this.fxstart = this.x;
	this.fystart = Math.max(this.yposmin-30*scG, Math.min(this.yposmax+30*scG, this.y));
	this.fxs = -this.fxrange;
	this.fys = -this.fyrange;
	this.a.rotation = 0;
	this.state = 1;
}