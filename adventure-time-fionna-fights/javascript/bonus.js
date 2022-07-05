function bonus() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

bonus.prototype = new enemy();

bonus.prototype.init = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	
	this.b = addObj("bonus_shine",0,0,0.5*scG);
	this.addChild(this.b);
	this.a = new PIXI.Container();
	this.addChild(this.a);
	var bubble = addObj("bubble",0,0,0.5*scG);
	this.addChild(bubble);
	
	this.id = 0;
	this.setsize(50*scG, 50*scG);
	this.energy = this.energymax = 1;
	this.damage = this.inv = 0;
	this.xs = -5*scG;
	this.state = 1;
	this.exp = "bonusfx";
	this.sfxdie = "zbonus";
	this.sfxmar = "";
	// set zone
	this.showzone = 0;
	this.setzone(-this.hwid, -this.hhei, this.wid, this.hei, this.showzone);
	this.setcirclezone(0, 0, this.hwid)
}

bonus.prototype.loop = function() {
	this.b.rotation += 5;
	this.cekstate();
}

bonus.prototype.move = function() {
	this.x += this.xs;
	this.yfloating()
	if (this.x < g.xmin - this.hwid) {
		fox.removevalue(this, g.en);
		this.die()
	}
}

// cek out
bonus.prototype.cekout = function() {
	// do nothing since it's a bonus
}

// cek got bonus
bonus.prototype.cekhit = function() {
	if (this.energy <= 0) {
		// got bonus
		var pos = fox.localpos(this, g.stats);
		if (this.category == 1) {
			// swords
			g.weapon = this.id + 2;
			g.weapontime = g.specialweapontime;
			if (this.id == 0) {
				// Finn's sword
				g.weaponpower = 2 * g.weaponpowernormal;
				g.weaponrange = g.weaponrangenormal; // +1
				if (commonclass.itempaidstatus(1, 1) == 2) {
					g.weaponrange = 1.5 * g.weaponrangenormal; // +2
					g.weapontime += g.additionalweapontime;
				}
				if (commonclass.itempaidstatus(1, 1) == 3) {
					g.weaponrange = 2 * g.weaponrangenormal; // +3
					g.weapontime += 2 * g.additionalweapontime;
				}
				g.attackdelay = g.attackdelayweapon2;
				commonclass.popbonusnm(pos.x, pos.y, getText("golden_sword"));
			}
			if (this.id == 1) {
				// Root sword
				g.weaponpower = 2 * g.weaponpowernormal;
				g.weaponrange = g.weaponrangenormal;
				g.attackdelay = g.attackdelayweapon3;
				g.rootradius = g.rootradiusnormal; // +1
				if (commonclass.itempaidstatus(1, 2) == 2)
					g.rootradius = 1.25 * g.rootradiusnormal; // +2
				if (commonclass.itempaidstatus(1, 2) == 3)
					g.rootradius = 1.5 * g.rootradiusnormal; // +3
				commonclass.popbonusnm(pos.x, pos.y, getText("root_sword"));
			}
			if (this.id == 2) {
				// Crystal sword
				g.weaponpower = 3 * g.weaponpowernormal;
				g.weaponrange = g.weaponrangenormal;
				g.attackdelay = g.attackdelayweapon4;
				commonclass.popbonusnm(pos.x, pos.y, getText("crystal_sword"));
			}
			if (this.id == 3) {
				// Demon sword
				g.weaponpower = 4 * g.weaponpowernormal;
				g.weaponrange = 6 * g.weaponrangenormal;
				if (commonclass.itempaidstatus(1, 4) == 2)
					g.weaponrange = 8 * g.weaponrangenormal; // +2
				if (commonclass.itempaidstatus(1, 4) == 3)
					g.weaponrange = 10 * g.weaponrangenormal; // +3
				g.attackdelay = g.attackdelayweapon5;
				commonclass.popbonusnm(pos.x, pos.y, getText("demon_sword"));
				// CN Achievement -------------------------------------------------------
				if (g.finn) {
					sendstat(206, 1);
				}
				// ----------------------------------------------------------------------
			}
		}
		if (this.category == 2) {
			if (this.id == 0) {
				// energy
				if (commonclass.itempaidstatus(2, 1) == 1)
					g.energy1 = Math.min(g.energy1max, g.energy1 + 35); // +1
				if (commonclass.itempaidstatus(2, 1) == 2)
					g.energy1 = Math.min(g.energy1max, g.energy1 + 50); // +2
				if (commonclass.itempaidstatus(2, 1) == 3)
					g.energy1 = Math.min(g.energy1max, g.energy1 + 65); // +3
				commonclass.popbonusnm(pos.x, pos.y, getText("energy_plus"));
			}
			if (this.id == 1) {
				// flight
				g.fly = g.flytime; // +1
				if (commonclass.itempaidstatus(2, 2) == 2)
					g.fly += g.additionaltime; // +2
				if (commonclass.itempaidstatus(2, 2) == 3)
					g.fly += 2 * g.additionaltime; // +3
				commonclass.popbonusnm(pos.x, pos.y, getText("flight"));
			}
			if (this.id == 2) {
				// freeze
				g.freeze = g.freezetime;
				if (commonclass.itempaidstatus(2, 3) == 2)
					g.freeze += g.additionaltime; // +2
				if (commonclass.itempaidstatus(2, 3) == 3)
					g.freeze += 2 * g.additionaltime; // +3
				var it = new frozen();
				it.x = 0;
				it.y = 0;
				g.fr.addChild(it);
				commonclass.popbonusnm(pos.x, pos.y, getText("freeze"));
			}
			if (this.id == 3) {
				// shield
				if (!g.shielding) {
					var it = new shield();
					it.x = g.xmin;
					it.y = 0;
					g.m1.addChild(it);
				}
				g.shielding = g.shieldtime;
				if (commonclass.itempaidstatus(2, 4) == 2)
					g.shielding += g.additionaltime; // +2
				if (commonclass.itempaidstatus(2, 4) == 3)
					g.shielding += 2 * g.additionaltime; // +3
				commonclass.popbonusnm(pos.x, pos.y, getText("shield"));
			}
		}
		if (this.category == 3) {
			if (this.id == 0) {
				// knife storm
				g.knifestorm = g.knifestormtime;
				if (commonclass.itempaidstatus(3, 1) == 2)
					g.knifestorm += g.additionaltime; // +2
				if (commonclass.itempaidstatus(3, 1) == 3)
					g.knifestorm += 2 * g.additionaltime; // +3
				commonclass.popbonusnm(pos.x, pos.y, getText("knife_storm_b"));
				// CN Achievement -------------------------------------------------------
				g.summonknives++;
				if (g.summonknives >= 2) {
					g.summonknives = -99;
					sendstat(202, 1);
				}
				// ----------------------------------------------------------------------
			}
			if (this.id == 1) {
				// fireballs
				g.fireballs = g.fireballstime;
				if (commonclass.itempaidstatus(3, 2) == 2)
					g.fireballs += g.additionaltime; // +2
				if (commonclass.itempaidstatus(3, 2) == 3)
					g.fireballs += 2 * g.additionaltime; // +3
				commonclass.popbonusnm(pos.x, pos.y, getText("fireballs"));
			}
			if (this.id == 2) {
				// robot sidekick
				g.robothelp = g.robottime;
				if (commonclass.itempaidstatus(3, 3) == 2)
					g.robothelp += g.additionaltime; // +2
				if (commonclass.itempaidstatus(3, 3) == 3)
					g.robothelp += 2 * g.additionaltime; // +3
				var mc = new robot();
				mc.x = g.xmin - 110;
				mc.y = g.p.y;
				g.m2.addChild(mc);
				commonclass.popbonusnm(pos.x, pos.y, getText("neptr"));
			}
			if (this.id == 3) {
				// Marshall Lee
				g.vampirehelp = g.vampiretime;
				if (commonclass.itempaidstatus(3, 4) == 2)
					g.vampirehelp += g.additionaltime; // +2
				if (commonclass.itempaidstatus(3, 4) == 3)
					g.vampirehelp += 2 * g.additionaltime; // +3
				var mc = new vampire();
				mc.x = g.xmin - 110;
				mc.y = g.mar.y;
				g.m2.addChild(mc);
				var friend = g.finn ? getText("marceline") : getText("marshall_lee");
				commonclass.popbonusnm(pos.x, pos.y, friend);
				// CN Achievement -------------------------------------------------------
				if (g.finn) {
					g.summonvampire++;
					if (g.summonvampire >= 3) {
						g.summonvampire = -99;
						sendstat(207, 1);
					}
				}
				// ----------------------------------------------------------------------
			}
		}
		// sfx
		soundPlay(this.sfxdie);
		this.destroyed();
	}
}

// set all
bonus.prototype.setall = function() {
	if (this.category == 1) {
		var pic;
		if (this.id == 0)
			pic = addObj("itemsmall12",0,0,0.5*scG);
		if (this.id == 1)
			pic = addObj("itemsmall13",0,0,0.5*scG);
		if (this.id == 2)
			pic = addObj("itemsmall14",0,0,0.5*scG);
		if (this.id == 3)
			pic = addObj("itemsmall15",0,0,0.5*scG);
		pic.rotation = fox.rad(-45);
		this.a.addChild(pic);
	}
	if (this.category == 2) {
		if (this.id == 0)
			pic = addObj("item21", 0, 0, 0.37*0.5*scG);
		if (this.id == 1)
			pic = addObj("item22", 0, 0, 0.35*0.5*scG);
		if (this.id == 2)
			pic = addObj("item23", 0, 0, 0.37*0.5*scG);
		if (this.id == 3)
			pic = addObj("item24", 0, 0, 0.34*0.5*scG);
		this.a.addChild(pic);
	}
	if (this.category == 3) {
		if (this.id == 0)
			pic = addObj("itemsmall31",0,0,0.5*scG);
		if (this.id == 1)
			pic = addObj("item32", 0, 0, 0.37*0.5*scG);
		if (this.id == 2)
			if (!g.finn) {
				pic = addObj("itemsmall33",0,0,0.5*scG);
			} else {
				pic = addObj("item33b", 0, 0, 0.46*0.5*scG);
			}
		if (this.id == 3)
			if (!g.finn) {
				pic = addObj("item34", 0, 0, 0.35*0.5*scG);
			} else {
				pic = addObj("item34b", 0, 0, 0.35*0.5*scG);
			}
		this.a.addChild(pic);
	}
}