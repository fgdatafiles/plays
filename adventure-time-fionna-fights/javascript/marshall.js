function marshall() {
	PIXI.Container.call( this );
	this.init();
}

marshall.prototype = new foxmovieclip();


marshall.prototype.init = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	this.a = new PIXI.Container();
	this.addChild(this.a);
}

marshall.prototype.added = function() {
	this.state = 1;
	this.setsize(150*scG, 80*scG);
	fox.inityfloat(this, 2, 0.1);
	this.xs = 5;
	this.ys = 0;
	this.grav = 0.5;
	// set all
	this.setall();
	// set zone
	this.setzone(-this.hwid, -10*scG, this.wid, this.hei, 0)
	
	arClips.push(this);
}

marshall.prototype.loop = function() {
	this.cekstate();
}

marshall.prototype.cekstate = function() {
	if (g.action == 1) {
		// flying
		this.fly();
		this.cekoutofenergy();
	} else {
		// wait behind
		this.waitbehind();
	}
}

// wait behind player
marshall.prototype.waitbehind = function() {
	if (!g.vampirehelp) {
		this.visible = this.ca.visible = this.catail.visible = true;
		this.fi.visible = false;
		this.x = Math.max(this.x, -g.m.x - 250*scG);
	} else {
		if (g.vampireattack) {
			// hide when vampire attack begins
			this.x = -g.m.x - 250*scG;
			this.visible = false;
		} else {
			if (g.vampirehelp > 100) {
				// move into screen to show vampire is coming to help
				this.ca.visible = this.catail.visible = false;
				this.x = this.x + ((-g.m.x + 150*scG) - this.x) / 4;
			}
		}
	}
}

// attack
marshall.prototype.attack = function(x1, y1, x2, y2, gX, gY) {
	this.fi.visible = false;
	g.attackbgspeed = 0.2 * (x2 - gX);
	g.p = new fionnaattack();
	g.p.x = x1;
	g.p.y = y1;
	g.p.added();
	g.m3.addChild(g.p);
	var dx = x2 - gX;
	var dy = y2 - gY;
	var ang = Math.atan2(dy, dx);
	g.p.tx = x1+dx;
	g.p.ty = y1+dy;
	g.p.tdis = Math.sqrt(dx * dx + dy * dy);
	g.p.angcos = Math.cos(ang);
	g.p.angsin = Math.sin(ang);
	g.p.rotation = ang;
	// attack distance must be more than minimum distance
	if (g.p.tdis < g.attackdistancemin) {
		g.p.tdis = g.attackdistancemin;
		g.p.tx = gX + g.p.angcos * g.attackdistancemin;
		g.p.ty = gY + g.p.angsin * g.attackdistancemin;
	}
	// cek limits
	g.p.tx = Math.max(g.xmin + 10*scG, g.p.tx);
	g.p.ty = Math.max(g.ymin + 20*scG, g.p.ty);
	commonclass.say("weapon"+g.weapon); 
}

// fly
marshall.prototype.fly = function() {
	this.fi.visible = true;
	this.x += this.xs;
	fox.yfloating(this);
}

// cek out of energy
marshall.prototype.cekoutofenergy = function() {
	if (!g.energy1) {
		commonclass.popoutofenergy();
		this.y += this.ys;
		this.ys += this.grav;
		this.rotation = Math.min(fox.rad(30), this.rotation + fox.rad(0.3));
		g.enddelay = Math.max(0, g.enddelay - 1);
		if (!g.enddelay) {
			g.endgame = 1;
		}
	}
}

// set all
marshall.prototype.setall = function() {
	// make marshall wing
	var wing2 = addObj("marshallwing2", -68*scG, -20*scG, scG);
	wing2.rotation = fox.rad(30);
	wing2.img.play();
	wing2.img.animationSpeed = 0.5;
	this.a.addChild(wing2);
	// make marshall body
	var body = addObj("marshallbody", -2*scG, -6*scG, scG);
	body.x = -35*scG;
	body.y = 40*scG;
	body.img.play();
	body.img.animationSpeed = 0.5;
	this.a.addChild(body);
	if (!g.finn) {
		// make fionna & cake
		this.fi = new fionnastand();
		this.fi.x = -10*scG;
		this.fi.y = 0;
		this.a.addChild(this.fi);
		this.catail = addObj("cakestandtail", 0, 0, 0.5*scG);
		this.catail.x = -60*scG;
		this.catail.y = -25*scG;
		this.catail.img.play();
		this.catail.img.animationSpeed = 0.5;
		this.a.addChild(this.catail);
		this.ca = addObj("cakestandbody", 0, 0, 0.5*scG);
		this.ca.x = -40*scG;
		this.ca.y = -19*scG;
		this.a.addChild(this.ca);
	} else {
		// make finn & jake
	}
	// make marshall wing
	var wing1 = addObj("marshallwing1", -69*scG, -20*scG, scG);
	wing1.img.play();
	wing1.img.animationSpeed = 0.5;
	this.a.addChild(wing1);
}