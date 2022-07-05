function enemybutterfly2() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemybutterfly2.prototype = new enemy();

enemybutterfly2.prototype.init = function() {
	this.a = addObj("enemybutterfly2");
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 500;
	this.yposmin = 100*scG;
	this.yposmax = 150*scG;
	// damage
	this.damage = 2 * g.enemydamage;
	// size
	this.setsize(64*scG, 64*scG);
	// y floating vars
	this.fyrange = 5*scG;
	this.fyspeed = 8*scG;
	this.fys = this.fyrange;
}

// end of bump
enemybutterfly2.prototype.endbump = function() {
	this.fyrange = 18*scG + 0.1*scG * fox.random(20);
	this.fyspeed = 8*scG;
	this.fxrange = 38*scG + 0.1*scG * fox.random(20);
	this.fxspeed = 8*scG;
	this.fxstart = this.x;
	this.fystart = Math.max(this.yposmin-30*scG, Math.min(this.yposmax+30*scG, this.y));
	this.fxs = -this.fxrange;
	this.fys = -this.fyrange;
	this.a.rotation = 0;
	this.state = 1;
}