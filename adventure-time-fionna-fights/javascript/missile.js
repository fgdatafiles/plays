function missile() {
	PIXI.Container.call( this );
	this.init();
}

missile.prototype = new knife();

missile.prototype.init = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	this.a = addObj("missile",0,0,0.5*scG);
	this.addChild(this.a);
	// power
	this.power = 500;
	
	this.bonusgem = 10;
	this.scoremultiplier = 12;
	
	this.xs = 35*scG;
	// set zone
	this.setsize(40*scG, 20*scG);
	arClips.push(this);
}

missile.prototype.move = function() {
	this.x += this.xs;
	if (this.x > g.xmax + 50*scG) {
		this.energy = 0;
	}
}

missile.prototype.explode = function() {
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