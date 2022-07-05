function fireball() {
	PIXI.Container.call( this );
	this.init();
}

fireball.prototype = new knife();

fireball.prototype.init = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20, 20).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	this.a = addObj("fireball",0,0,0.5*scG);
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	// power
	this.power = 300;
	
	this.bonusgem = 8;
	this.scoremultiplier = 10;
	
	this.xs = 35*scG;
	// set zone
	this.setsize(80*scG, 40*scG);
	arClips.push(this);
}

fireball.prototype.move = function() {
	this.x += this.xs;
	if (this.x > g.xmax + 50*scG) {
		this.energy = 0;
	}
}

fireball.prototype.explode = function() {
	if (this.x > g.xmin && this.x < g.xmax) {
		// make explosion
		var it = new explosion("explosion3");
		it.x = this.x;
		it.y = this.y;
		g.m3.addChild(it);
		soundPlay("zexplosion3");
	}
	this.energy = 0;
}