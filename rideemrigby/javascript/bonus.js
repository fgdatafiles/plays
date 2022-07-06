function bonus(value) {
	PIXI.Container.call( this );
	this.init(value);
}

bonus.prototype = Object.create(PIXI.Container.prototype);
bonus.prototype.constructor = bonus;


bonus.prototype.init = function(value) {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	
	this.z = {};
	g.arBonuses.push(this)
	
	this.id = value;
	this.setsize(44*scG, 60*scG)
	this.showzone = 0
	this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, this.showzone)
	
	if(value > 1){
		var star = addObj("starSlices");
		this.addChild(star);
		var angleStar = 43 * Math.PI / 180
		createjs.Tween.get(star, {loop:true}).to({rotation:angleStar},60);
	}
	var _x = 0;
	var _y = 0;
	this.a = addObj("bonus" + value, _x, _y, 0.5*scG);
    this.addChild(this.a);
}

// added
bonus.prototype.added = function() {
	fox.inityfloat(this, 2, 0.2)
}

// set size
bonus.prototype.setsize = function(ww, hh) {
	this.wid = ww
	this.hei = hh
	this.hwid = this.wid / 2
	this.hhei = this.hei / 2
}

// set zone (based on parent's coordinates)
bonus.prototype.setzone = function(xx, yy, wid, hei, draw) {
	this.z.x = this.x + xx
	this.z.y = this.y + yy
	this.zone.x = xx
	this.zone.y = yy
	this.z.width = this.zone.width = this.wid
	this.z.height = this.zone.height = this.hei
	draw ? (this.zone.visible = true) : (undefined)
}

bonus.prototype.update = function() {
	if (g.fly || g.bounce) {
		if (Math.abs(g.p.x - this.x) < 150*scG) {
			this.flytorigby()
		} else {
			fox.yfloating(this)
		}
	} else if (g.specialch == 7 || g.musclewomanlanded) {
		// while musclewoman onscreen
		if (Math.abs(g.mm.x - this.x) < 150*scG) {
			if (g.jump) {
				this.flytorigby()
			} else {
				this.flytomuscleman()
			}
		} else {
			fox.yfloating(this)
		}
	} else {
		fox.yfloating(this)
	}
	this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, this.showzone)
	this.cekgot()
	this.cekout()
}

// fly to rigby
bonus.prototype.flytorigby = function() {
	this.x = this.x + (g.p.x - this.x) / 2
	this.y = this.y + (g.p.y - this.y) / 3
}

// fly to muscleman
bonus.prototype.flytomuscleman = function() {
	this.x = this.x + (g.mm.x - this.x) / 2
	this.y = this.y + (g.mm.y - 50*scG - this.y) / 3
}

// cek got
bonus.prototype.cekgot = function() {
	if (this.x > g.mm.x - 60*scG) {
		if (g.jump) {
			if (hitTestZone(this, g.p)) {
				this.gotme()
			}
		} else {			
			if (hitTestZone(this, g.p)) {
				this.gotme()
			}
		}
	} else {
		// miss!
		g.missed = 1
	}
}

// cek out
bonus.prototype.cekout = function() {
	if (this.x < g.xmin - 100*scG) {
		if ((this.id == 3 || this.id == 6 || this.id == 7 || this.id == 8) && g.notunnel) {
			g.notunnel = 0
		}
		this.die()
	}
}

// got me
bonus.prototype.gotme = function() {
	if (this.id == 1) {
		g.score += g.ptsnow
		// CN Achievement -------------------------------------------------------
		if (!g.udasodacan5000 && g.ptsnow >= 5000) {
			g.udasodacan5000 = 1
			sendstat(200, 1)
		}
		// ----------------------------------------------------------------------
		commonclass.popskor(this.x, this.y - 30*scG, g.ptsnow)
		soundPlay("zbonus")
		g.ptsnow += g.pts
		// CN Achievement -------------------------------------------------------
		if (g.score >= 40000 && !g.uda40k) {
			sendstat(203, 1)
			g.uda40k = 1
		}
		// CN Achievement -------------------------------------------------------
		if (g.score >= 60000 && !g.uda60k && !g.missed) {
			sendstat(205, 1)
			g.uda60k = 1
		}
		// ----------------------------------------------------------------------
	} else if(this.id == 2){
		g.energy = Math.min(g.energymax, g.energy + g.energybonus) 
		commonclass.popbonusnm(g.hscreenwid, 60*scG, getText("energy_plus"))
		soundPlay("zbonus2")
	} else if (this.id == 3) {
		commonclass.makekeyboard()
		soundPlay("zbonus2")
		// CN Achievement -------------------------------------------------------
		sendstat(201, 1)
		// ----------------------------------------------------------------------
	} else if (this.id == 4) {
		commonclass.makeducks()
		g.p.ys = -5 * g.p.grav
		soundPlay("zbonus2")
		commonclass.popbonusnm(g.hscreenwid, 60*scG, getText("baby_ducks"))
		// CN Achievement -------------------------------------------------------
		g.gotducks++;
		if (g.gotducks == 2) {
			sendstat(204, 1)
		}
		// ----------------------------------------------------------------------
	}else if (this.id == 5) {
		g.bounce = 1,
		soundPlay("zbonus2")
		commonclass.popbonusnm(g.hscreenwid, 60*scG, getText("power_bounce"))
	}else if (this.id == 6) {
		commonclass.makeunicorns()
		soundPlay("zbonus2")
		commonclass.popbonusnm(g.hscreenwid, 60*scG, getText("unicorns"))
	}else if (this.id == 7) {
		commonclass.makemusclewoman()
		soundPlay("zbonus2")
		commonclass.popbonusnm(g.hscreenwid, 60*scG, getText("muscle_woman"))
	}else if (this.id == 8) {
		commonclass.makeguardian()
		soundPlay("zbonus2")
		commonclass.popbonusnm(g.hscreenwid, 60*scG, getText("the_guardian"))
	}
	this.die()
}

// die
bonus.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m2.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}