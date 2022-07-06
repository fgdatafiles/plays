function rigbyfall() {
	PIXI.Container.call( this );
	this.init();
}

rigbyfall.prototype = Object.create(PIXI.Container.prototype);
rigbyfall.prototype.constructor = rigbyfall;


rigbyfall.prototype.init = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	this.a = new PIXI.Container();
	this.addChild(this.a);
	
	var sc = 0.35*scG;
	this.a.fall = addObj("rigbyfall", -10*scG, 0, sc);
	this.a.fall.img.play();
	this.a.fall.img.animationSpeed = 0.5;
	this.a.addChild(this.a.fall);
	this.a.fallstop = addObj("rigbyfallstop", -7*scG, 4*scG, sc);
	this.a.fallstop.img.stop();
	this.a.fallstop.img.animationSpeed = 0.5;
	this.a.addChild(this.a.fallstop);
	
	g.falling = 1
	this.xs = g.mm.xs
	this.ys = -0.5 * this.xs
	this.d = 0
	this.grav = 2*scG
	this.rotation = fox.rad(-10)
	this.yland = g.yland + 10*scG
	this.state = 1
	this.addshadow()
	this.sh.x = this.x - 5*scG
	this.sh.y = g.yland + 15*scG
	// stop other VO
	// g.sfx.stopSound("zyell1")
	// g.sfx.stopSound("zyell2")
	// g.sfx.stopSound("zyell4")
	soundPlay("zfall")
	this.z = {};
	this.actnow = "";
	this.act = "fall"
	this.showact()
	this.setzone(0, 0, 1*scG, 1*scG, 0)
	
}

// set size
rigbyfall.prototype.setsize = function(ww, hh) {
	this.wid = ww
	this.hei = hh
	this.hwid = this.wid / 2
	this.hhei = this.hei / 2
}

// set zone (based on parent's coordinates)
rigbyfall.prototype.setzone = function(xx, yy, wid, hei, draw) {
	this.z.x = this.x + xx
	this.z.y = this.y + yy
	this.zone.x = xx
	this.zone.y = yy
	this.z.width = this.zone.width = this.wid
	this.z.height = this.zone.height = this.hei
	draw ? (this.zone.visible = true) : (undefined)
}

// add shadow
rigbyfall.prototype.addshadow = function() {
	this.sh = addObj("shadow");
	this.updateshadow()
	this.addChild(this.sh)
}

// update shadow
rigbyfall.prototype.updateshadow = function() {
	this.sh.x = this.x
	this.sh.y = this.y
}

// show act
rigbyfall.prototype.showact = function() {
	if(this.act != this.actnow){
		this.a.fall.visible = this.a.fallstop.visible = false
		this.actnow = this.act; 
		this.act == "fall" ? (this.a.fall.visible = true) : (undefined)
		if(this.act == "fallstop"){
			this.a.fallstop.visible = true
			this.a.fallstop.img.play();
		}
	}
}

rigbyfall.prototype.update = function() {
	if(this.act == "fallstop"){
		if(this.a.fallstop){
			if(this.a.fallstop.img.currentFrame >= 9){
				this.a.fallstop.img.stop();
			}
		}
	}
	
	this.cekstate();
}

// cek state
rigbyfall.prototype.cekstate = function() {
	if (this.state == 1){
		this.move()
	} else if (this.state == 2){
		this.act = "fallstop"
		// game over
		this.d--, !this.d ? (g.endgame = 2, this.die()) : (undefined)
	}
	this.showact()
}

// move
rigbyfall.prototype.move = function() {
	this.ys += this.grav
	this.x += this.xs
	this.y += this.ys
	var ang = Math.atan2(this.ys, this.xs)
	this.rotation = ang
	if (this.y > this.yland){
		if(!this.udasfx){
			this.udasfx = 1
			soundPlay("zsplat")
		}
		this.rotation = 0
		this.y = this.yland
		this.ys = -0.5 * this.ys
		this.xs = 0.8 * this.xs
		this.xs < 1 ? (this.xs = 0, this.d = 25, this.state = 2) : (undefined)
	}
	this.sh.x = this.x - 5
}

// die
rigbyfall.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m4.removeChild(this)
}