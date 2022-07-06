function guardianblastexplosion() {
	PIXI.Container.call( this );
	this.init();
}

guardianblastexplosion.prototype = Object.create(PIXI.Container.prototype);
guardianblastexplosion.prototype.constructor = guardianblastexplosion;


guardianblastexplosion.prototype.init = function() {
	this.z = {};
	this.a = addObj("explosion",0,0,1);
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	this.a.rotation = fox.rad(fox.random(360))
	this.a.scale.x = this.a.scale.y = 1 + 0.1 * fox.random(4)
	this.d = 14
	g.arBonuses.push(this)
}

guardianblastexplosion.prototype.update = function() {
	if (this.d == 12){
		// cek hit obstacle
		for (var i = 0; i < g.ob.length; i++){
			var it = g.ob[i]
			if (it.x < this.x + 80*scG && it.x > this.x - 100*scG){
				it.state = 3
			}
		}
	}
	this.d--, !this.d ? (this.die()) : (undefined);
}

// die
guardianblastexplosion.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m3.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}