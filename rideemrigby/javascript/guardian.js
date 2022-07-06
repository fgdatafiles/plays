function guardian() {
	PIXI.Container.call( this );
	this.init();
}

guardian.prototype = Object.create(PIXI.Container.prototype);
guardian.prototype.constructor = guardian;


guardian.prototype.init = function() {
	g.specialch = 8
	this.count = 0
	this.ang = 60
	this.d = g.guardiantime
	this.state = 1
	this.space = 100*scG
	fox.inityfloat(this, 5, 0.3)
	soundPlay("zblast")
	this.a = addObj("guardian", -67*scG, -88*scG);
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	this.z = {};
	g.arBonuses.push(this)
}

guardian.prototype.update = function() {
	this.cekstate()
	this.notunnels()
}

// cek state
guardian.prototype.cekstate = function() {
	if (this.state == 1){
		// flying
		this.x = g.mm.x + this.space
		fox.yfloating(this)
		this.d--
		!this.d ? (this.state = 2) : (undefined)
		this.makeblast()
	} else if (this.state == 2){
		// fly out
		if (this.x < g.xmin){
			g.specialch = 0
			this.die()
		}
	}
}

// keep preventing making tunnels
guardian.prototype.notunnels = function() {
	g.notunnel = 2
}

// make blast
guardian.prototype.makeblast = function() {
	var it = new guardianblast()
	it.x = this.x
	it.y = this.y
	it.ang = this.ang
	this.ang = Math.max(40, this.ang - 0.5)
	this.count++
	this.count % 4 == 1 ? (it.explode = 1) : (undefined)
	g.m1.addChild(it)
	it.added();
}

// die
guardian.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m3.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}