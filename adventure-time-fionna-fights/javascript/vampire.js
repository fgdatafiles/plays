function vampire() {
	PIXI.Container.call( this );
	this.init();
}

vampire.prototype = new foxmovieclip();

vampire.prototype.init = function() {
	this.a = addObj("vampire",0,0,scG);
	this.addChild(this.a);
	
	this.visible = false;
	this.div = this.divnormal = 10*scG;
	
	this.bonusgem = 15;
	this.scoremultiplier = 15;
	
	this.attackradius = 180*scG;
	this.attackradius2 = this.attackradius * this.attackradius;
	this.d = 12;
	
	arClips.push(this);
}

// loop
vampire.prototype.loop = function() {
	this.d--;
	if (!this.d) {
		this.x = g.mar.x;
		this.y = g.mar.y;
		this.visible = true;
		g.vampireattack = 1;
		this.gettargetpos();
	}
	if (this.d < 0) {
		this.move();
	}
}

// move
vampire.prototype.move = function() {
	this.x = this.x + (this.tx - this.x) / this.div;
	this.y = this.y + (this.ty - this.y) / this.div;
	this.div = Math.max(6*scG, this.div - 1*scG);
	this.cekhit();
	if (Math.abs(this.tx - this.x) < 50*scG && Math.abs(this.ty - this.y) < 50*scG) {
		if (g.vampirehelp < 50 || g.action > 8) {
			g.vampireattack = 0;
			this.die();
		} else {
			this.x = g.xmin + 300*scG + fox.random(g.screenwid);
			this.gettargetpos();
		}
	}
}

// cek hit enemies
vampire.prototype.cekhit = function() {
	var prnt = this;
	g.en.forEach(function(a) { //for each
		if (a.energy > 0) {
			var dx = a.x - prnt.x;
			var dy = a.y - prnt.y;
			if (dx * dx + dy * dy < prnt.attackradius2) {
				a.energy = 0;
				
				// make gems
				for (var i = 0; i < prnt.bonusgem; i++) {
					var mc = new gem();
					mc.x = prnt.x - 30*scG + fox.random(60*scG);
					mc.y = prnt.y - 30*scG + fox.random(60*scG);
					g.m3.addChild(mc);
				}
				var skor = prnt.scoremultiplier * a.energymax;
				commonclass.popskor(a.x, a.y, skor);
				g.score += skor;
				
			}
		}
	});
}

// get target pos
vampire.prototype.gettargetpos = function() {
	if (this.y < g.hscreenhei) {
		this.y = -50*scG;
		this.ty = g.screenhei + 600*scG;
	} else {
		this.y = g.screenhei + 50*scG;
		this.ty = -600*scG;
	}
	if (this.x > g.xmin + g.hscreenwid) {
		this.tx = g.xmin + 300*scG;
	} else {
		this.tx = g.xmin + 300*scG + g.screenwid;
	}
	this.ang = Math.atan2(this.ty - this.y, this.tx - this.x);
	this.rotation = this.ang;
	this.div = this.divnormal;
	soundPlay("zvampire");
}