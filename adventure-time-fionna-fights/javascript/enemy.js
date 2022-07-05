function enemy() {
	PIXI.Container.call( this );
}

enemy.prototype = new foxmovieclip();


enemy.prototype.initData = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	this.a = new PIXI.Container();
	this.addChild(this.a);
	
	// add to array
	// energy
	this.energy = this.energynow = this.energymax = 100;
	this.bumprange = 0.8 * _W;
	this.bumprotation = 41;
	this.yposmin = 80*scG;
	this.yposmax = _H - 60*scG;
	this.udahit = this.adacircle = 0;
	this.inv = 5;
	// damage
	this.damage = g.enemydamage;
	// speed
	this.xs = -g.enemyspeed;
	this.state = 1;
	// explosion animation
	this.exp = "explosion1";
	// sfx
	this.sfxhit = "zhit1";
	this.sfxdie = "zexplosion1";
	this.sfxmar = "zexplosion2";
	// x floating vars
	this.fxrange = 2*scG + 0.1 * fox.random(10*scG);
	this.fxspeed = 0.15*scG;
	this.fxs = this.fxrange;
	// y floating vars
	this.fyrange = 2*scG + 0.1 * fox.random(10*scG);
	this.fyspeed = 0.15*scG;
	this.fys = this.fyrange;
	// set zone
	this.showzone = 0;
	this.setsize(36*scG, 36*scG);
}

enemy.prototype.added = function() {
	// xy floating vars
	this.y = Math.max(this.yposmin, Math.min(this.yposmax, this.y));
	this.fxstart = this.x;
	this.fystart = this.y;
	// floating random starting position
	var ran = 1 + fox.random(30);
	for (var i = 0; i < ran; i++) {
		this.yfloating();
	}
	// set all
	this.setall()
	this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, this.showzone);
	this.setcirclezone(0, 0, this.hwid);
	arClips.push(this);
}

// cek circle highlight
enemy.prototype.cekhighlight = function() {
	if (this.wid < 62*scG) {
		if ((g.action > 1) && (this.x < g.xmin + 280*scG)) {
			if (!this.adacircle) {
				this.adacircle = 1;
				this.circ = fox.make("highlight", 0, 0, this);
				this.circ.width = this.wid + 12.5*scG;
				this.circ.height = this.hei + 12.5*scG;
			} else {
				// blink circle
				this.circ.visible = !this.circ.visible;
			}
		} else {
			if (this.adacircle)
				this.circ.visible = false;
		}
	} else {
		if (this.adacircle)
			this.circ.visible = false;
	}
}

// loop
enemy.prototype.loop = function() {
	this.cekstate()
}

// cek state
enemy.prototype.cekstate = function() {
	if (g.action != 9) {
		this.cekshield();
		this.cekhighlight();
		// console.log("this.state:", this.state);
		if (this.state == 1) {
			// move
			if (!g.freeze) {
				this.move();
			}
			this.cekout();
			this.cekhit();
		} else if (this.state == 2) {
			// attack marshall
			this.attackmar();
		} else if (this.state == 3) {
			// bump back
			this.bumpback();
		}
	} else {
		// player falling, remove me
		this.die();
	}
}

// move
enemy.prototype.move = function() {
	this.fxstart += this.xs;
	this.xfloating();
	this.yfloating();
}

// bump back after getting hit
enemy.prototype.bumpback = function() {
	this.x = this.x + (this.bumpx - this.x) / 5;
	this.a.rotation += fox.rad(this.bumprotation);
	if (this.bumpx - this.x < 10*scG) {
		// end of bump, update position
		this.endbump();
	}
}

// end of bump
enemy.prototype.endbump = function() {
	this.y = Math.max(this.hhei, Math.min(_H - this.hhei, this.y));
	this.fxstart = this.x;
	this.fystart = Math.max(this.yposmin, Math.min(this.yposmax, this.y));
	this.fxs = -this.fxrange;
	this.fys = -this.fyrange;
	this.a.rotation = 0;
	this.state = 1;
}

// cek shield
enemy.prototype.cekshield = function() {
	if (g.shielding) {
		// if this is not bonus item && it's crashing the shield
		if (this.damage > 0 && this.x < g.xmin + this.hwid + 40*scG) {
			this.energy = 0;
			// CN Achievement -------------------------------------------------------
			g.shieldkills++;
			if (g.shieldkills >= 15) {
				sendstat(201, 1);
				g.shieldkills = -99;
			}
			// ----------------------------------------------------------------------
		}
	}
}

// set circle zone
enemy.prototype.setcirclezone = function(centerx, centery, circleradius) {
	this.cx = centerx;
	this.cy = centery;
	this.radius = circleradius;
	this.radius2 = this.radius * this.radius;
}

// cek out
enemy.prototype.cekout = function() {
	if (this.x < g.mar.x + 150*scG || this.x < g.xmin - this.hwid && !g.shielding) {
		this.state = 2;
		if (this.x < g.xmin - this.hwid) {
			// pop miss
			var miss = new popmiss1();
			miss.x = g.xmin;
			miss.y = this.y;
			g.m3.addChild(miss);
			g.miss6k = 1;
		}
	}
}

// attack marshall
enemy.prototype.attackmar = function() {
	this.x = this.x + (g.mar.x - this.x) / 3;
	this.y = this.y + (g.mar.y - this.y) / 3;
	// cek hit Marshall
	if (hitTestObject(this.zone, g.mar.zone)) {
		g.energy1 = Math.max(0, g.energy1 - g.enemydamage);
		this.energy = 0;
		soundPlay(this.sfxmar);
		this.destroyed()
	}
}

// Floating y
enemy.prototype.yfloating = function() {
	this.y += this.fys;
	if(this.y > this.fystart){
		this.fys = Math.max(this.fys - this.fyspeed, -this.fyrange);
	} else {
		this.fys = Math.min(this.fys + this.fyspeed, this.fyrange)
	}
}

// Floating x
enemy.prototype.xfloating = function() {
	this.x += this.fxs;
	if(this.x > this.fxstart){
		this.fxs = Math.max(this.fxs - this.fxspeed, -this.fxrange)
	} else {
		this.fxs = Math.min(this.fxs + this.fxspeed, this.fxrange)
	}
}

// cek got hit
enemy.prototype.cekhit = function() {
	this.inv = Math.max(0, this.inv - 1);
	if (this.energy < this.energynow) {
		this.energynow = this.energy;
		if (this.energy <= 0) {
			// destroyed
			g.score += this.energymax;
			soundPlay(this.sfxdie);
			this.destroyed();
		} else {
			// bump back
			this.bumpx = this.x + this.bumprange;
			soundPlay(this.sfxhit);
			this.state = 3;
		}
	}
}

// destroyed
enemy.prototype.destroyed = function() {
	fox.removevalue(this, g.en);
	this.explode();
	this.die();
}

// explode
enemy.prototype.explode = function() {
	if (this.x > g.xmin && this.x < g.xmax) {
		// make explosion animation
		var mc;
		if(this.exp == "bonusfx"){
			mc = new bonusfx();
		} else {
			mc = new explosion(this.exp);
		}
		mc.x = this.x;
		mc.y = this.y;
		mc.scale.x = mc.scale.y = this.wid / 25;
		g.m1.addChild(mc);
	}
}

// set all
enemy.prototype.setall = function() {
	//
}