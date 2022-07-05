function enemygum3() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemygum3.prototype = new enemy();

enemygum3.prototype.init = function() {
	this.a = addObj("enemygum3");
	this.addChild(this.a);
}

enemygum3.prototype.added = function() {	
	// energy
	this.energy = this.energynow = this.energymax = 200;
	// xy floating vars
	this.fxstart = this.x;
	// y floating vars
	this.fystart = this.y;
	this.fyrange = 2*scG;
	this.fyspeed = 0.4*scG;
	this.fys = this.fyrange;
	this.xs = -g.enemyspeed;
	// size
	this.setsize(46*scG, 46*scG);
	// set all
	this.setall()
	this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, this.showzone);
	this.setcirclezone(0, 0, this.hwid);
	
	arClips.push(this);
}