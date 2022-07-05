function enemybird1() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemybird1.prototype = new enemy();


enemybird1.prototype.init = function() {
	this.a = addObj("enemybird1");
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 300;
	this.yposmin = 100*scG;
	this.yposmax = 200*scG;
	// floating x
	this.fxrange = 5*scG;
	this.fxspeed = 3*scG;
	this.fxs = this.fxrange;
	// size
	this.setsize(74*scG, 74*scG);
	// y floating vars
	this.fyrange = 5*scG;
	this.fyspeed = 0.5*scG;
	this.fys = this.fyrange;
}

// this enemy move forward after getting bumped
enemybird1.prototype.bumpback = function() {
	this.x = this.x + (this.bumpx - this.x) / 5;
	this.a.rotation += fox.rad(this.bumprotation);
	if (this.bumpx - this.x < 10*scG) {
		// end of bump, we don't update fxstart position (making the enemy move forward)
		this.a.rotation = fox.rad(-20);
		this.fxspeed = 1*scG;
		this.fxrange = 20*scG;
		this.fxs = -this.fxspeed;
		this.fxstart = g.xmin + 100*scG;
		this.state = 1;
	}
}