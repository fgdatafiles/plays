function bolt() {
	PIXI.Container.call( this );
	this.init();
}

bolt.prototype = Object.create(PIXI.Container.prototype);
bolt.prototype.constructor = bolt;


bolt.prototype.init = function() {
	this.z = {}
	
	this.a = addObj("bolt");
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
    this.addChild(this.a);
}

// added
bolt.prototype.added = function() {
	g.arBonuses.push(this)
	this.d = 4
	this.ska = this.scale.x
	var dx = this.targ.x - this.x
	var dy = this.targ.y - this.y
	var ang = Math.atan2(dy, dx)
	this.a.rotation = ang
}

bolt.prototype.update = function() {
	this.ska < 1 ? (this.ska = Math.min(1.5, 1.5 * this.ska)) : (undefined)
	this.scale.x = this.scale.y = this.ska
	this.x = this.x + (this.targ.x - this.x) / 3
	this.y = this.y + (this.targ.y - this.y) / 3
	this.d--
	if (!this.d){
		this.targ.state = 3
		this.die()
	}
}

// die
bolt.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m3.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}
