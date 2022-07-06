function muscleman() {
	PIXI.Container.call( this );
	this.init();
}

muscleman.prototype = Object.create(PIXI.Container.prototype);
muscleman.prototype.constructor = muscleman;


muscleman.prototype.init = function() {
	this.a = new PIXI.Container();
	this.addChild(this.a);
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	
	this.act = "";
	this.actnow = "";
	this.z = {};
	
	var sc = 0.35*scG;
	this.a.run1 = addObj("run1", 0, 0, sc);
	this.a.run1.setRegY(1);
	this.a.run1.img.play();
	this.a.run1.img.animationSpeed = 0.5;
	this.a.addChild(this.a.run1);
	this.a.run2 = addObj("run2", 0, 0, sc);
	this.a.run2.setRegY(1);
	this.a.run2.img.play();
	this.a.run2.img.animationSpeed = 0.5;
	this.a.addChild(this.a.run2);
	this.a.side = addObj("side", 0, 0, sc);
	this.a.side.setRegY(1);
	this.a.side.img.play();
	this.a.side.img.animationSpeed = 0.5;
	this.a.addChild(this.a.side);
	
	this.added();
}

muscleman.prototype.added = function() {
	this.state = 1
	this.canpress = 1
	this.ycount = 0
	this.xs = g.runspeed/1;
	this.act = "run1"
	this.pickact()
	this.setsize(74*scG, 54*scG);
	this.addshadow()
	this.yelldelay = 70
	this.yd = 150
	this.sh.x = this.x
	this.sh.y = this.y
}

// cek yell
muscleman.prototype.cekyell = function() {
	this.yd--
	if (this.yd < 0){
		if (!g.hit && !g.jump && !g.endgame && g.totalobs > 1 && !g.specialch){
			this.yd = this.yelldelay + fox.random(30)
			soundPlay(getrandom(g.yell))
			this.ycount++
			this.ycount > 2 ? (this.yelldelay = Math.min(400, this.yelldelay + 30)) : (undefined)
		}
	}
}
		
// cek energy
muscleman.prototype.cekenergy = function() {
	if (!g.energy){
		if (!g.jump){
			// create Rigby falling animation
			it = new rigbyfall(), it.x = this.x, it.y = this.y - 35*scG, g.p = it, g.m4.addChild(it)
			this.act = "run2"
			this.pickact()
			g.fall = 1
			this.state = 9
		}
	}
}

// cek Rigby land
muscleman.prototype.cekland = function() {
	if (g.landed){
		this.state = 1
		this.act = "run1"
		soundPlay("zland")
		this.pickact()
	}
}

// pick act
muscleman.prototype.pickact = function() {
	this.a.run1.visible = this.a.run2.visible = this.a.side.visible = false
	this.act == "run1" ? (this.a.run1.visible = true) : (undefined)
	this.act == "run2" ? (this.a.run2.visible = true) : (undefined)
	this.act == "side" ? (this.a.side.visible = true) : (undefined)
}

// set size
muscleman.prototype.setsize = function(ww, hh) {
	this.wid = ww
	this.hei = hh
	this.hwid = this.wid / 2
	this.hhei = this.hei / 2
}

// set zone (based on parent's coordinates)
muscleman.prototype.setzone = function(xx, yy, wid, hei, draw) {
	this.z.x = this.x + xx
	this.z.y = this.y + yy
	this.zone.x = xx
	this.zone.y = yy
	this.z.width = this.zone.width = this.wid
	this.z.height = this.zone.height = this.hei
	draw ? (this.zone.visible = true) : (undefined)
}

// add shadow
muscleman.prototype.addshadow = function() {
	this.sh = addObj("shadow");
	this.updateshadow()
	this.addChild(this.sh)
}

// update shadow
muscleman.prototype.updateshadow = function() {
	this.sh.x = this.x
	this.sh.y = this.y
}

// movement
muscleman.prototype.move = function() {
	this.x += this.xs
	this.updatehitfx()
}

// cek out of screen
muscleman.prototype.cekout = function() {
	this.x > g.xmax + 100*scG ? (this.die()) : (undefined)
}

// if hitfx exists, update its position
muscleman.prototype.updatehitfx = function() {
	if (g.hitfx && !g.jump){
		g.hitfx.x = this.x
		g.side ? (g.hitfx.y = this.y - 40*scG) : (g.hitfx.y = this.y - 75*scG)
	}
	if(g.hitfx){
		g.hitfx.d--
		if(!g.hitfx.d){
			g.m3.removeChild(g.hitfx);
			g.hitfx = undefined;
		}
	}
}

// cek hit
muscleman.prototype.cekhit = function() {
	if (g.hit){
		// Rigby not bouncing
		if (!g.bounce){
			// create hit fx
			var it = addObj("hiteffect");
			it.d = 10
			it.img.play();
			it.img.animationSpeed = 0.5;
			g.m3.addChild(it);
			g.hitfx = it
			// reduce energy
			g.energy = Math.max(0, g.energy - g.hit.damage)
			// reset points
			g.ptsnow = g.pts
			this.updatehitfx()
			g.inv = g.invhitdelay
		}
		g.hit = undefined
	}
}

muscleman.prototype.cekstate = function() {
	if (this.state == 1){
		// running with Rigby
		this.move()
		this.cekhit()
		this.cekpresskey()
		this.setzone(-this.hwid, -this.hei, this.wid, this.hei, 0)
		this.cekenergy()
		this.cekyell()
	} else if (this.state >= 2 && this.state <= 4){
		// wait for jumping Rigby to come down
		this.cekpresskey()
		this.move()
		this.cekhit()
		this.cekland()
		this.cekenergy()
	} else if (this.state == 9){
		// out of energy
		this.move()
		this.cekout()
	}
	this.pickact()
}

// cek key pressed
muscleman.prototype.cekpresskey = function() {
	if (g.key.f1){
		this.canpress ? (this.pressing = 1) : (undefined)
	} else {
		if (g.intunnel){
			this.pressing = 1
		} else {
			this.pressing = 0
			this.canpress = 1
		}
	}
	if (this.pressing){
		if (!g.jump && !g.fall && !g.fly){
			g.side = 1
			this.act = "side"
		}
	} else {
		g.side = 0
		if (g.intunnel){
			this.act = "side"
		} else {
			if (!g.jump && !g.fall && !g.fly){
				this.act = "run1"
			}
		}
	}
}

muscleman.prototype.update = function() {
	this.cekstate();
}

// mousepress
muscleman.prototype.mousepress = function(mouseX, mouseY) {
	if (!g.nopress && !g.fall && !g.fly && !(g.intunnel && !g.jump) && !options_pause && !(mouseX > 570*scG && mouseX < 30*scG)){
		if (this.state == 1){
			// Rigby jump
			this.state = 2
			g.jump = 1
			g.landed = this.canpress = this.pressing = 0
			g.p.x = this.x
			g.p.y = this.y - 120*scG
			g.p.reset()
			// note: Muscleman MC in run2 is pushed back a bit to make a smooth transition
			this.act = "run2"
			this.pickact()
			soundPlay("zjump")
		} else if (this.state == 2){
			this.state = 3
			// Rigby double jump
			if (g.jump == 1 && g.p.ys < 25*scG){
				g.jump = 2
			}
			soundPlay("zjump")
		} else if (this.state == 3){
			this.state = 4
			// Rigby triple jump
			if (g.jump == 2 && g.p.ys < 25*scG){
				g.jump = 3
			}
		}
	}
}

// die
muscleman.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m2.removeChild(this)
}
