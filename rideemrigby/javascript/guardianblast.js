function guardianblast() {
	PIXI.Container.call( this );
	this.init();
}

guardianblast.prototype = Object.create(PIXI.Container.prototype);
guardianblast.prototype.constructor = guardianblast;


guardianblast.prototype.init = function() {
	this.z = {};
	this.explode = 0;
	this.a = addObj("guardianblast");
	this.addChild(this.a);
}

guardianblast.prototype.added = function() {
	g.arBonuses.push(this)
	this.speed = 20*scG
	this.ska = this.scale.x
	this.div = 1.05
	this.angrad = fox.rad(this.ang)
	this.a.rotation = this.angrad
	this.xs = Math.cos(this.angrad) * this.speed
	this.ys = Math.sin(this.angrad) * this.speed
}

guardianblast.prototype.update = function() {
	this.ska *= this.div
	this.div *= 0.999
	this.scale.x = this.scale.y = this.ska
	this.a.rotation = fox.rad(fox.random(360))
	this.x += this.xs + g.runspeed
	this.y += this.ys
	if (this.y > g.yland - 40*scG){
		if (this.explode){
			// explosion
			var it = new guardianblastexplosion()
			it.x = this.x + 20*scG
			it.y = this.y - 50*scG
			g.m3.addChild(it)
			soundPlay("zexplosion")
		}
		this.die()
	}
}

// die
guardianblast.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m1.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}