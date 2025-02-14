function foxmovieclip() {
	PIXI.Container.call( this );
	this.init();
}

foxmovieclip.prototype = Object.create(PIXI.Container.prototype);
foxmovieclip.prototype.constructor = foxmovieclip;

foxmovieclip.prototype.init = function() {
	this.a, this.zone, this.it, this.sh;
	this.energy, this.energymax, this.wid, this.hei, this.hwid, this.hhei, this.d;
	this.act, this.actnow;
	this.z = {};
	
	// create empty MovieClip 'a' if not available
	if (!this.a){
		this.a = new PIXI.Container()
		this.addChild(this.a);
	}
	this.energy = this.energymax = 100
	this.setsize(0, 0)
	this.z = {}
	this.zone ? (this.zone.visible = false) : (undefined);
	this.added();
}

// show act
foxmovieclip.prototype.showact = function() {
	if(this.act != this.actnow){
		this.actnow = this.act;
	}
}

// set size
foxmovieclip.prototype.setsize = function(ww, hh) {
	this.wid = ww;
	this.hei = hh;
	this.hwid = this.wid / 2;
	this.hhei = this.hei / 2;
}

// set zone (based on parent's coordinates)
foxmovieclip.prototype.setzone = function(xx, yy, wid, hei, draw) {
	this.z.x = this.x + xx
	this.z.y = this.y + yy
	this.zone.x = xx
	this.zone.y = yy
	this.z.width = this.zone.width = this.wid
	this.z.height = this.zone.height = this.hei
	draw ? (this.zone.visible = true) : (undefined)
}

// added
foxmovieclip.prototype.added = function() {
	this.setlisteners()
}

// loop
foxmovieclip.prototype.loop = function() {
}

// removed
foxmovieclip.prototype.removed = function() {
}

// cek die
foxmovieclip.prototype.cekdie = function() {
	!this.energy ? (this.die()) : (undefined)
}

// add shadow
foxmovieclip.prototype.addshadow = function(nama) {
}

// update shadow
foxmovieclip.prototype.updateshadow = function() {
	sh.x = x
	sh.y = y
}

// set listeners
foxmovieclip.prototype.setlisteners = function() {
}

// enter_frame
foxmovieclip.prototype.enter_frame = function() {
	// trace(name)
	!g.paused ? (this.loop()) : (undefined)
}

// removed_from_stage
foxmovieclip.prototype.removed_from_stage = function() {
	this.removed()
	this.clearlistener()
	this.sh ? (this.sh.parent.removeChild(this.sh)) : (undefined) // remove shadow
}

// clear listener
foxmovieclip.prototype.clearlistener = function() {
}

// die
foxmovieclip.prototype.die = function() {
	fox.removevalue(this, arClips);
	if (this.parent){
		this.parent.removeChild(this)
	}
}