function duck() {
	PIXI.Container.call( this );
	this.init();
}

duck.prototype = Object.create(PIXI.Container.prototype);
duck.prototype.constructor = duck;


duck.prototype.init = function() {
	this.z = {}
	this.d = 3
	this.state = 1
	this.xs = this.ys = this.ax = this.ay = 0;
	
	this.a = addObj("duck");
	this.a.img.animationSpeed = 0.5;
	this.a.img.gotoAndPlay(1 + fox.random(7))
    this.addChild(this.a);
	
	g.arBonuses.push(this)
}

duck.prototype.update = function() {
	this.cekstate()
}

// cek state
duck.prototype.cekstate = function() {
	if (this.state == 1) {
		this.grab()
	} else if (this.state == 2) {
		// flying	
		this.x = g.p.x + this.ax
		this.y = g.p.y + this.ay
		!g.fly ? (this.state = 3, this.xs = 5, this.ys = -1) : (undefined)
	} else if (this.state == 3) {
		// fly out	
		this.x +=this. xs
		this.y += this.ys
		this.ys *= 1.1
		if (this.x < g.xmin) {
			this.die()
		}
	}
}

// grab
duck.prototype.grab = function() {
	this.d--
	this.x = this.x + (g.p.x - this.x) / 2
	this.y = this.y + (g.p.y - this.y) / 2
	!this.d ? (g.fly = 1, this.state = 2) : (undefined)
}

// die
duck.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m3.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}
