function enemyfairy2() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemyfairy2.prototype = new enemy();

enemyfairy2.prototype.init = function() {
	this.sc = 0.4*scG;
	this.a = addObj("enemyfairy2", 0, 0, this.sc);
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 300;
	// size
	this.setsize(40*scG, 40*scG);
	// speed
	this.xs = -0.8*scG * g.enemyspeed;
	// make wings
	var wings = addObj("fairywings", 30*scG, 0, 2.5);
	wings.img.play();
	wings.img.animationSpeed = 0.5;
	this.a.addChild(wings);
}

// bigger size after bump
enemyfairy2.prototype.endbump = function() {
	if (this.a.scale.x < 1.7*this.sc) {
		this.a.scale.x = this.a.scale.y = 1.7*this.sc;
		this.setsize(62*scG, 62*scG);
		this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, this.showzone);
		this.setcirclezone(0, 0, this.hwid);
	} else if (this.a.scale.x >= 1.7*this.sc && this.a.scale.x < 2.5*this.sc) {
		this.a.scale.x = this.a.scale.y = 2.5*this.sc;
		this.setsize(90*scG, 90*scG);
		this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, this.showzone);
		this.setcirclezone(0, 0, this.hwid);
	}
	
	this.y = Math.max(this.hhei, Math.min(_H - this.hhei, this.y));
	this.fxstart = this.x;
	this.fystart = Math.max(this.yposmin, Math.min(this.yposmax, this.y));
	this.fxs = -this.fxrange;
	this.fys = -this.fyrange;
	this.a.rotation = 0;
	this.state = 1;
}