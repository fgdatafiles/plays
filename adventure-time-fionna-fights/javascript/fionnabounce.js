function fionnabounce() {
	PIXI.Container.call( this );
	this.init();
}

fionnabounce.prototype = new foxmovieclip();


fionnabounce.prototype.init = function() {
	this.a = new PIXI.Container();
	this.addChild(this.a);
}

fionnabounce.prototype.added = function() {
	this.xs = 0;
	this.ys = Math.min(-10*scG, -5*scG - (this.y / 20));
	this.grav = 2*scG;
	this.d = this.ys > -12*scG ? (10) : (15)
	this.flyin = g.fly > g.flyendtime ? 1 : 0;
	this.flydelay = 100;
	this.gravdiv = 1.1
	this.setall();
	arClips.push(this);
}

fionnabounce.prototype.loop = function() {
	if (!this.flyin) {
		this.bounce();
	} else {
		// flying ended 
		if (g.fly < g.flyendtime) {
			this.ys = Math.min(-10*scG, -5*scG - (this.y / 20));
			this.flyin = 0;
		}
	}
}

// bounce
fionnabounce.prototype.bounce = function() {
	// bouncing
	this.x = Math.max(g.xmin + g.bumperleft, this.x + this.xs);
	this.y = Math.max(g.bumpertop, this.y + this.ys);
	this.d--;
	if (this.d > 0) {
		this.ys = Math.min(2*scG, this.ys + this.grav);
		this.grav = Math.max(0.5*scG, this.grav - 0.1*scG);
	} else {
		this.ys = Math.min(15*scG, this.ys + this.grav);
		this.grav = Math.min(8*scG, this.grav * this.gravdiv);
	}
	this.xs *= 0.95;
	if (this.y > g.screenhei + g.fallrange) {
		// out of screen
		this.fall();
	}
}

// fall
fionnabounce.prototype.fall = function() {
	g.action = 9;
	
	if (g.energy1 > 0) {
		// make cutscene1
		var mc = new cutscene1();
		g.stats.addChild(mc);
		g.fireballs = g.shielding = g.knifestorm = g.weapontime = g.fly = g.freeze = 0;
		// remove all enemies from array
		g.en.forEach(function(a) { //for each
			a.energy = 0;
		});
		g.en = [];
		// move marshall forward a bit
		g.mar.x += g.screenwid;
		// adjust next enemy
		g.enemynext = g.mar.x + g.screenwid;
	} else {
		g.endgame = 1;
	}
	
	this.die()
}

// set all
fionnabounce.prototype.setall = function() {
	// make fionna body
	var xx = 0;
	var yy = 0;
	var body = addObj("fionnabouncebody", xx, yy, 0.5*scG);
	this.a.addChild(body);
	// make fionna head
	var head = addObj("fionnabouncehead", xx, yy - 45*scG, 0.5*scG);
	this.a.addChild(head);
	// make weapon
	var weapon;
	if (g.weapon == 1)
		weapon = addObj("sword1", xx + 9*scG, yy - 13*scG, 0.5*scG);
	if (g.weapon == 2)
		weapon = addObj("item12", xx + 9*scG, yy - 13*scG, 0.42*0.5*scG);
	if (g.weapon == 3)
		weapon = addObj("item13", xx + 9*scG, yy - 13*scG, 0.42*0.5*scG);
	if (g.weapon == 4)
		weapon = addObj("item14", xx + 9*scG, yy - 13*scG, 0.42*0.5*scG);
	if (g.weapon == 5)
		weapon = addObj("item15", xx + 9*scG, yy - 13*scG, 0.42*0.5*scG);
	weapon.rotation = fox.rad(-25);
	this.a.addChild(weapon);
	// make arm
	xx = -10*scG;
	yy = -12*scG;
	var arm = addObj("fionnaarm", xx, yy);
	this.a.addChild(arm);
}