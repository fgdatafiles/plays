function knife() {
	PIXI.Container.call( this );
	this.init();
}

knife.prototype = new foxmovieclip();

knife.prototype.init = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	
	// power
	this.power = 100;
	
	this.bonusgem = 5;
	this.scoremultiplier = 8;
	
	this.ys = (10 + fox.random(10))*scG;
	this.energy = 100;
	// set zone
	this.setsize(28*scG, 36*scG);
	arClips.push(this);
}

knife.prototype.added = function() {
	var a = addObj("knife",0,0,0.5*scG);
	this.addChild(a);
}

// loop
knife.prototype.loop = function() {
	this.cekhitenemy();
	this.move();
	this.cekdie();
}

// move
knife.prototype.move = function() {
	this.y += this.ys;
	if ((this.x < g.xmin - 10*scG) || (this.y > g.ymax + 20*scG)) {
		this.energy = 0;
	}
}

// cek hit enemy
knife.prototype.cekhitenemy = function() {
	var prnt = this;
	g.en.forEach(function(a) { //for each
		if (!a.inv && (a.energy > 0)) {
			if (hitTestObject(prnt.zone, a.zone)) {
				a.energy = Math.max(0, a.energy - prnt.power);
				// make gem
				if (!a.energy) {
					for (var i = 0; i < prnt.bonusgem; i++) {
						var mc = new gem();
						mc.x = a.x - 30*scG + fox.random(60*scG);
						mc.y = a.y - 30*scG + fox.random(60*scG);
						g.m3.addChild(mc);
					}
					var skor = prnt.scoremultiplier * a.energymax;
					commonclass.popskor(a.x, a.y, skor);
					g.score += skor;
				}
				prnt.explode();
			}
		}
	});
}

// explode
knife.prototype.explode = function() {
	this.energy = 0;
}