function enemybutterfly1() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemybutterfly1.prototype = new enemy();

enemybutterfly1.prototype.init = function() {
	this.a = addObj("enemybutterfly1");
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 400;
	this.yposmin = 150*scG;
	this.yposmax = 200*scG;
	// size
	this.setsize(44*scG, 44*scG);
	// y floating vars
	this.fyrange = 5*scG;
	this.fyspeed = 0.5*scG;
	this.fys = this.fyrange;
}

// end of bump
enemybutterfly1.prototype.endbump = function() {
	this.fyspeed *= 2.5*scG;
	this.fyrange *= 1.2*scG;
	this.fystart = this.y;
	this.fyspeed = 0.5*scG;
	this.fxrange = 10*scG;
	this.fxspeed = 2*scG;
	this.fxstart = this.x - 100*scG;
	this.fystart = Math.max(this.yposmin-30*scG, Math.min(this.yposmax+30*scG, this.y));
	this.fxs = -this.fxrange;
	this.fys = -this.fyrange;
	this.a.rotation = 0;
	this.state = 1;
}