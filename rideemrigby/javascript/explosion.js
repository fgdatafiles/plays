function explosion() {
	PIXI.Container.call( this );
	this.init();
}

explosion.prototype = Object.create(PIXI.Container.prototype);
explosion.prototype.constructor = explosion;


explosion.prototype.init = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	
	this.z = {};
	this.delay = 0
	this.udahit = 0
	this.damage = g.energyless
	this.setsize(110*scG, 110*scG)
	this.showzone = 0
	this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, this.showzone)
	
	this.a = addObj("explosion",0,0,scG);
	this.a.img.stop();
    this.addChild(this.a);
}

// added
explosion.prototype.added = function() {
	g.arBonuses.push(this)
	this.d = 16
	this.visible = false
	this.a.rotation = fox.random(2*Math.PI)
	this.a.scale.x = this.a.scale.y = 1 + 0.1 * fox.random(4)
}

// set size
explosion.prototype.setsize = function(ww, hh) {
	this.wid = ww
	this.hei = hh
	this.hwid = this.wid / 2
	this.hhei = this.hei / 2
}

// set zone (based on parent's coordinates)
explosion.prototype.setzone = function(xx, yy, wid, hei, draw) {
	this.z.x = this.x + xx
	this.z.y = this.y + yy
	this.zone.x = xx
	this.zone.y = yy
	this.z.width = this.zone.width = this.wid
	this.z.height = this.zone.height = this.hei
	draw ? (this.zone.visible = true) : (undefined)
}

// cek hit rigby
explosion.prototype.cekhitrigby = function() {	
	if (!g.inv && !g.fly && !this.udahit && g.jump){
		hitTestZone(this, g.p) ? (udahit = 1, g.hit = this) : (undefined)
	}
}

explosion.prototype.update = function() {
	this.delay--
	if (!this.delay){
		this.visible = true
		this.a.img.gotoAndPlay(1)
	}
	if (this.delay < 0){
		this.delay == -1 || this.delay == -3 ? (this.cekhitrigby()) : (undefined)
		this.d--, !this.d ? (this.die()) : (undefined);
	}
}

// die
explosion.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m3.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}