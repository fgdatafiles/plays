function enemygum2() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemygum2.prototype = new enemy();

enemygum2.prototype.init = function() {
	this.a = addObj("enemygum2");
	this.addChild(this.a);
}

enemygum2.prototype.added = function() {	
	// xy floating vars
	this.fxstart = this.x;
	// y floating vars
	this.fystart = this.y = g.hscreenhei;
	this.fyrange = 6*scG;
	this.fyspeed = 0.2*scG;
	this.fys = this.fyrange;
	for (var i = 0; i < 10; i++) {
		this.yfloating();
	}
	this.xs = -0.4 * g.enemyspeed*scG;
	// set all
	this.setall()
	this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, this.showzone);
	this.setcirclezone(0, 0, this.hwid);
	
	arClips.push(this);
}