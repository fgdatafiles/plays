function fionnaattack() {
	PIXI.Container.call( this );
	this.init();
}

fionnaattack.prototype = new foxmovieclip();


fionnaattack.prototype.init = function() {
	this.a = new PIXI.Container();
	this.addChild(this.a);
}

fionnaattack.prototype.added = function() {
	g.action = 2;
	g.attackno++;
	this.myweapon = g.weapon;
	this.myweaponrange = g.weaponrange;
	this.myweaponpower = g.weaponpower;
	this.addline1 = 30*scG;
	this.addline2 = 50*scG;
	if (this.myweapon == 2) {
		// Finn's sword has longer reach	
		this.addline2 = 120*scG;
		soundPlay("zswoosh");
	}
	if (this.myweapon == 5) {
		soundPlay("zdemon");
	}
	this.got = 0;
	this.d = 6;
	this.sx = this.x;
	this.sy = this.y;
	this.setall();
	
	arClips.push(this);
}

fionnaattack.prototype.loop = function() {
	this.move()
	// weapon fx
	this.showfx()
	//
	this.d--;
	// cek hitting enemies
	if (this.d == 5 || this.d == 2 || this.d == 0) {
		this.cekhit()
	}
	// end of attack
	if (!this.d) {
		this.endattack();
	}
}

fionnaattack.prototype.showfx = function() {
	if (this.myweapon == 2) {
		// finn sword
		var finnsword = new finnswordfx();
		finnsword.x = this.x;
		finnsword.y = this.y;
		g.m1.addChild(finnsword);
		this.addline2 = 120*scG;
	}
	if (this.myweapon == 5) {
		if (this.d > 2) {
			// demon sword
			var demonsword = new demonswordfx();
			demonsword.x = this.x;
			demonsword.y = this.y;
			g.m1.addChild(demonsword);
		}
	}
}

fionnaattack.prototype.move = function() {
	if (this.tx < this.x) {
		this.a.scale.y = -1;
	}
	this.x = this.x + (this.tx - this.x) / 2;
	this.y = this.y + (this.ty - this.y) / 2;
	this.fx.width = this.fx.width + (80*scG - this.fx.width) / 2;
}

fionnaattack.prototype.endattack = function() {
	// root sword ? flash root power at the end of attack
	if (this.myweapon == 3) {
		this.flashroot();
	}
	if (this.myweapon == 4) {
		this.flashcrystals();
	}
	if (!this.got && !g.knifestorm && !g.fireballs && !g.robothelp && !g.vampirehelp) {
		// miss!
		var miss = new popmiss2();
		miss.x = this.x + 60*scG;
		miss.y = this.y;
		g.m2.addChild(miss);
		g.miss6k = 1; 
		soundPlay("zmiss");
		g.energy1 = Math.max(0, g.energy1 - g.energyless);
		if (!g.energy1) {
			commonclass.popoutofenergy();
		}
	}
	// bounce
	g.action = 3;
	g.p = new fionnabounce();
	g.p.x = this.x;
	g.p.y = Math.min(g.screenhei - g.bumperbottom, this.y);
	g.p.added();
	g.m3.addChild(g.p);
	// pop hits
	if (this.got > 1) {
		var sk = this.got * this.got * 100;
		var pos = fox.localpos(this, g.stats);
		commonclass.pophit(pos.x, pos.y - 20*scG, this.got, sk);
		g.score += sk;
		// CN Achievement -------------------------------------------------------
		if (this.myweapon == 3 && this.got >= 5) {
			sendstat(200, 1)
		}
		// ----------------------------------------------------------------------
	}
	this.die()
}

fionnaattack.prototype.cekhit = function() {
	var x1 = this.sx - this.angcos * this.addline1;
	var y1 = this.sy - this.angsin * this.addline1;
	var x2 = this.x + this.angcos * this.addline2;
	var y2 = this.y + this.angsin * this.addline2;
	var prnt = this;
	// for each (var a in g.en) {
	g.en.forEach(function(a) {
		if (!a.inv && (a.energy > 0) && (a.udahit != g.attackno)) {
			if (fox.point2line(a.x + a.cx, a.y + a.cy, x1, y1, x2, y2) < a.radius + prnt.myweaponrange) {
				a.energy = Math.max(0, a.energy - prnt.myweaponpower);
				if (a.energy > 0) {
					// hit effect
					var hit = new hiteffect();
					hit.x = a.x;
					hit.y = a.y;
					g.m3.addChild(hit);
				}
				a.udahit = g.attackno;
				prnt.got++;
				// make gems
				if (!a.energy) {
					for (var f = 0; f < 2 * prnt.got; f++) {
						var mc = new gem();
						mc.x = prnt.x - 30*scG + fox.random(60*scG);
						mc.y = prnt.y - 30*scG + fox.random(60*scG);
						g.m3.addChild(mc);
					}
				}
			}
		}
	});
}

fionnaattack.prototype.flashcrystals = function() {
	var spacing = 70*scG;
	var total = 6;
	if (commonclass.itempaidstatus(1, 3) == 2) {
		// +1
		total = 9;
	} else if (commonclass.itempaidstatus(1, 3) == 3) {
		// +2
		total = 12;
	}
	var ro = (Math.PI / (0.5 * total));
	var ang = 0.01 * fox.random(314);
	for (var i = 0; i < total; i++) {
		ang += ro;
		var angdeg = ang;
		var mycos = Math.cos(ang);
		var mysin = Math.sin(ang);
		var distance = 100*scG;
		var ok = 1;
		while (ok) {
			var xx = this.x + mycos * distance;
			var yy = this.y + mysin * distance;
			var mc = new crystal();
			mc.x = xx;
			mc.y = yy;
			mc.rotation = fox.rad(angdeg);
			g.m2.addChild(mc);
			distance += spacing;
			this.cekcrystalhitenemy(xx, yy);
			if (xx < g.xmin + 100*scG || yy < g.ymin + 80*scG || xx > g.xmax || yy > g.ymax - 80*scG) {
				ok = 0;
			}
		}
	}
}

fionnaattack.prototype.cekcrystalhitenemy = function(xx, yy) {
	var prnt = this;
	g.en.forEach(function(a) {
		if (!a.inv && (a.energy > 0)) {
			if (xx + g.crystalhwid > a.x - a.hwid) {
				if (xx - g.crystalhwid < a.x + a.hwid) {
					if (yy + g.crystalhwid > a.y - a.hhei) {
						if (yy - g.crystalhwid < a.y + a.hhei) {
							a.energy = Math.max(0, a.energy - g.crystalpower);
							// make gem
							if (!a.energy) {
								for (var f = 0; f < 2 * prnt.got; f++) {
									var mc = new gem();
									mc.x = a.x;
									mc.y = a.y;
									g.m3.addChild(mc);
								}
							}
							prnt.got++;
						}
					}
				}
			}
		}
	});
}

fionnaattack.prototype.flashroot = function() {
	var mc = new root();
	mc.x = this.x;
	mc.y = this.y;
	g.m2.addChild(mc);
	soundPlay("zroot");
	var prnt = this;
	g.en.forEach(function(a) {
		if (!a.inv && (a.energy > 0)) {
			var dx = a.x - prnt.x;
			var dy = a.y - prnt.y;
			var rd = a.radius + g.rootradius
			if (dx * dx + dy * dy < rd * rd) {
				a.energy = Math.max(0, a.energy - prnt.myweaponpower);
				prnt.got++;
				// make gems
				if (!a.energy) {
					for (var f = 0; f < 2 * prnt.got; f++) {
						var mc = new gem();
						mc.x = a.x;
						mc.y = a.y;
						g.m3.addChild(mc)
					}
				}
			}
		}
	});
}

fionnaattack.prototype.setall = function() {
	// make fionna
	var xx = 39*scG;
	var yy = 0;
	var weapon;
	if (g.weapon == 1)
		weapon = addObj("sword1", xx, yy, 0.5*scG);
	if (g.weapon == 2)
		weapon = addObj("item12", xx, yy, 0.42*0.5*scG);
	if (g.weapon == 3)
		weapon = addObj("item13", xx, yy, 0.42*0.5*scG);
	if (g.weapon == 4)
		weapon = addObj("item14", xx, yy , 0.42*0.5*scG);
	if (g.weapon == 5)
		weapon = addObj("item15", xx, yy, 0.42*0.5*scG);
	this.a.addChild(weapon);
	// make fionna
	var mc = addObj("fionnaattack1",  -28*scG, 0, 0.5*scG);
	this.a.addChild(mc);
	this.fx = addObj("fastfx",  -27*scG, 4*scG, 0.5*scG);
	this.fx.setRegX(1);
	this.fx.width = 1.5 * this.tdis;
	this.a.addChild(this.fx);
}