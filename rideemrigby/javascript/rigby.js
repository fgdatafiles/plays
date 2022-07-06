function rigby() {
	PIXI.Container.call( this );
	this.init();
}

rigby.prototype = Object.create(PIXI.Container.prototype);
rigby.prototype.constructor = rigby;


rigby.prototype.init = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	this.a = new PIXI.Container();
	this.addChild(this.a);
	
	this.act = "";
	this.actnow = "";
	this.z = {};
	this.fys = 0
	this.fd = 0
	
	var sc = 0.35*scG;
	this.a.jump = addObj("rigbyjump", -5*scG, 15*scG, sc);
	this.a.jump.img.play();
	this.a.jump.img.animationSpeed = 0.5;
	this.a.addChild(this.a.jump);
	this.a.jump2 = addObj("rigbyjump2", -10*scG, -5*scG, sc);
	this.a.jump2.img.play();
	this.a.jump2.img.animationSpeed = 0.5;
	this.a.addChild(this.a.jump2);
	this.a.fly = addObj("rigbyfly", 0, 17*scG, sc);
	this.a.fly.img.play();
	this.a.fly.img.animationSpeed = 0.5;
	this.a.addChild(this.a.fly);
	
	this.added();
}

rigby.prototype.added = function() {
	this.setsize(14*scG, 28*scG);
	this.hideme()
}

// hide me
rigby.prototype.hideme = function() {
	this.state = 99
	this.act = "jump"
	this.showact()
	this.visible = false
	this.hidden = 1
	this.x = 1999*scG
	this.y = 1999*scG
}

// reset
rigby.prototype.reset = function() {
	this.state = 1
	this.hidden = 0
	this.visible = true
	this.act = "jump"
	this.showact()
	this.xs = 0
	this.ys = g.jumppower
	this.grav = g.grav
	this.flymin = -40*scG
	this.flymax = -20*scG
	this.fysnormal = 1
}

// set size
rigby.prototype.setsize = function(ww, hh) {
	this.wid = ww
	this.hei = hh
	this.hwid = this.wid / 2
	this.hhei = this.hei / 2
}

// set zone (based on parent's coordinates)
rigby.prototype.setzone = function(xx, yy, wid, hei, draw) {
	this.z.x = this.x + xx
	this.z.y = this.y + yy
	this.zone.x = xx
	this.zone.y = yy
	this.z.width = this.zone.width = this.wid
	this.z.height = this.zone.height = this.hei
	draw ? (this.zone.visible = true) : (undefined)
}
// show act
rigby.prototype.showact = function() {
	if(this.act != this.actnow){
		this.a.jump.visible = this.a.jump2.visible = this.a.fly.visible = false
		this.actnow = this.act; 
		this.act == "jump" ? (this.a.jump.visible = true) : (undefined)
		this.act == "jump2" ? (this.a.jump2.visible = true) : (undefined)
		this.act == "fly" ? (this.a.fly.visible = true) : (undefined)
	}
}

rigby.prototype.cekstate = function() {
	if (!this.hidden){
		if (this.state == 1){
			// jump
			this.move()
			this.cekjump(2)
			this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, 0)
			this.cekspecial()
		} else if (this.state == 2){
			// double jump
			this.move()
			this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, 0)
			this.cekspecial()
		} else if (this.state == 3){
			// triple jump - unused
			this.move()
			this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, 0)
		} else if (this.state == 4){
			// fly
			this.flying()
			this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, 0)
			this.cekdrop()
		} else if (this.state == 5){
			// bounce
			this.bouncing()
			this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, 0)
			this.cekdrop()
		}
		this.showact()
	}
}

// cek drop
rigby.prototype.cekdrop = function() {
	this.fd--
	// stop making obstacles
	!this.fd ? (g.nextob += 9999) : (undefined)
	if (this.fd < 0){
		// drop Rigby when area is clear of obstacles
		if (!g.ob.length){
			if (g.fly || (g.bounce && this.ys > 0)){
				this.act = "jump"
				this.ys = g.nopress = g.fly = g.bounce = 0
				// resume making obstacles
				g.nextob = this.x + 1500*scG
				this.state = 1
			}
		}
	}
}

// bouncing
rigby.prototype.bouncing = function() {
	this.x = g.mm.x
	this.y +=this. ys
	this.ys < 0 ? (this.ys += this.grav) : (this.ys += 0.5 * this.grav)
	// too high
	this.y < -1000*scG ? (this.ys < 0 ? (this.ys *= 0.8*scG) : (undefined)) : (undefined)
	// act
	this.ys > -2*scG ? (this.act = "jump2") : (this.act = "jump")
	this.updatehitfx()
	// falling
	if (this.y > g.yland - 100*scG){
		this.xs = 0
		this.ys = 2.85 * g.jumppower
		soundPlay("zboing")
	}
}

// flying
rigby.prototype.flying = function() {
	this.y += this.fys
	Math.abs(this.fys) > this.fysnormal ? (this.fys *= 0.9) : (undefined)
	if (this.fys < 0){
		this.y < this.flymin ? (this.y = this.flymin, this.fys = this.fysnormal) : (undefined)
	} else {
		this.y > this.flymax ? (this.y = this.flymax, this.fys = -this.fysnormal) : (undefined)
	}
	this.x = g.mm.x
}

// cek special
rigby.prototype.cekspecial = function() {
	if (g.fly){
		// start flying
		g.nopress = 99999
		this.state = 4
		this.act = "fly"
		this.fys = -20 * this.fysnormal
		this.fd = g.flytime
	} else if (g.bounce){
		// start bouncing
		g.nopress = 99999
		this.state = 5
		this.act = "jump"
		this.fd = g.bouncetime
		this.ys = 2.85 * g.jumppower
	}
}

// cek jump
rigby.prototype.cekjump = function(no) {
	if (g.jump == no){
		if (g.jump == 2){
			this.ys = g.jumppower2
			this.grav += 2*scG
			this.state = 2
		} else if (g.jump == 3){
			this.ys = g.jumppower3
			this.grav += 2*scG
			this.state = 3
		}
	}
}

// movement
rigby.prototype.move = function() {
	this.x = g.mm.x
	this.y += this.ys
	this.ys < 0 ? (this.ys += this.grav) : (this.ys += 1.5 * this.grav)
	// too high
	this.y < -1000*scG ? (this.ys < 0 ? (this.ys *= 0.8*scG) : (undefined)) : (undefined)
	// act
	this.ys > -2 ? (this.act = "jump2") : (this.act = "jump")
	this.updatehitfx()
	// falling
	if (this.y > g.yland - 100*scG){
		g.landed = 1
		g.jump = 0
		// tunnel crash?
		if (g.intunnel){
			commonclass.tunnelhit()
		}
		this.hideme()
	}
}

// if hitfx exists, update its position
rigby.prototype.updatehitfx = function() {
	if (g.hitfx){
		g.hitfx.x = this.x
		g.hitfx.y = this.y
	}
}

rigby.prototype.update = function() {
	if(this.act == "rigbyjump2"){
		if(this.a.jump2){
			if(this.a.jump2.img.currentFrame >= 6){
				this.a.jump2.img.gotoAndStop(6);
			}
		}
	}
	
	this.cekstate();
}

// die
rigby.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	this.parent.removeChild(this)
}