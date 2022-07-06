function unicorns() {
	PIXI.Container.call( this );
	this.init();
}

unicorns.prototype = Object.create(PIXI.Container.prototype);
unicorns.prototype.constructor = unicorns;


unicorns.prototype.init = function() {
	this.z = {}
	g.specialch = 6
	this.x = g.xmin - 200*scG
	this.y = g.yland + 100*scG
	this.space = 200*scG
	this.ska = 1.1
	this.scale.x = this.scale.y = this.ska
	this.setsize(200*scG, 80*scG)
	this.state = 1
	this.flip = true
	this.xs = 1*scG
	soundPlay("zunicorns")
	g.arBonuses.push(this)
	
	this.a = addObj("unicorns", -85*scG, -72*scG);
    this.addChild(this.a);
	this.b1 = addObj("hotrod", -160*scG, -70*scG);
    this.addChild(this.b1);
	this.b2 = addObj("hotrod", 20*scG, -33*scG, 0.21*scG);
    this.addChild(this.b2);
}

// set size
unicorns.prototype.setsize = function(ww, hh) {
	this.wid = ww
	this.hei = hh
	this.hwid = this.wid / 2
	this.hhei = this.hei / 2
}

unicorns.prototype.update = function() {
	// this.cekstate()
	// this.notunnels()
	// this.tiresanimation()
}

// tires animation
unicorns.prototype.tiresanimation = function() {
	this.flip = !this.flip
	if (this.flip){
		this.b1.rotation = this.b2.rotation = fox.rad(2 * fox.random(10))
	} else {
		this.b1.rotation = this.b2.rotation = fox.rad(-2 * fox.random(10))
	}
}

// keep preventing making tunnels
unicorns.prototype.notunnels = function() {
	g.notunnel = 2
}

// cek state
unicorns.prototype.cekstate = function() {
	if (this.state == 1){
		// entering
		this.x = this.x + ((g.xmax - this.space) - this.x) / 3
		if (this.x > g.xmax - this.space - 80*scG){
			this.state = 2
		}
	} else if (this.state == 2){
		// slide in
		this.x = this.x + ((g.mm.x + 400*scG) - this.x) / 3
		this.y = this.y + ((g.yland + 5*scG) - this.y) / 3
		this.ska = this.ska + (1 - this.ska) / 3
		this.scale.x = this.scale.y = this.ska
		if (this.ska < 1.02){
			this.scale.x = this.scale.y = 1
			this.y = g.yland + 5*scG
			this.state = 3
			g.specialchx = this.x
			g.specialchy = this.y
			this.d = g.unicorntime
		}
	} else if (this.state == 3){
		// ready
		this.x = g.mm.x + 400*scG + this.xs
		this.xs += 0.5
		g.specialchx = this.x
		this.d--
		!this.d ? (this.xs = 30*scG, this.state = 4) : (undefined)
	} else if (this.state == 4){
		// go out of screen
		this.x += this.xs
		this.xs += 2*scG
		g.specialchx = this.x
		this.x > g.xmax + 200*scG ? (g.specialch = g.specialchx = g.specialchy = 0, this.die()) : (undefined)
	}
}

// die
unicorns.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m3.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}
