function enemyburger2() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemyburger2.prototype = new enemy();

enemyburger2.prototype.init = function() {
	this.a = new PIXI.Container();
	this.addChild(this.a);
	this.a.b2 = addObj("burger2_bottom", 0, 19*scG);
	this.a.addChild(this.a.b2);
	this.a.b1 = addObj("burger2_top", 0, -16*scG);
	this.a.addChild(this.a.b1);
	
	// energy
	this.energy = this.energynow = this.energymax = 500;
	// damage
	this.damage = 2 * g.enemydamage;
	// big size
	this.setsize(124*scG, 124*scG);
	// animation vars
	this.yy1 = this.a.b1.y;
	this.yy2 = this.a.b2.y;
	this.d = 20;
	// floating x
	this.fxrange = 25*scG;
	this.fxspeed = 0.4*scG;
	this.fxs = this.fxrange;
}

// move
enemyburger2.prototype.move = function() {
	this.fxstart += this.xs;
	this.xfloating();
	this.yfloating();
	this.animate();
}

// animate
enemyburger2.prototype.animate = function() {
	this.d--
	if (this.d > 10) {
		this.a.b1.y = this.a.b1.y + ((this.yy1 - 12*scG) - this.a.b1.y) / 3;
		this.a.b2.y = this.a.b2.y + ((this.yy2 + 12*scG) - this.a.b2.y) / 3;
	} else {
		this.a.b1.y = this.a.b1.y + (this.yy1 - this.a.b1.y) / 3;
		this.a.b2.y = this.a.b2.y + (this.yy2 - this.a.b2.y) / 3;
	}
	if (!this.d) {
		this.d = 20;
	}
}

// this enemy move forward after getting bumped
enemyburger2.prototype.bumpback = function() {
	this.x = this.x + (this.bumpx - this.x) / 5;
	this.a.rotation += fox.rad(this.bumprotation);
	if (this.bumpx - this.x < 10*scG) {
		// end of bump, we don't update fxstart position (making the enemy move forward)
		this.a.rotation = 0;
		this.fxs = this.fxspeed;
		this.state = 1;
	}
}