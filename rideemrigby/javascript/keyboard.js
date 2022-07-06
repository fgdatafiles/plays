function keyboard() {
	PIXI.Container.call( this );
	this.init();
}

keyboard.prototype = Object.create(PIXI.Container.prototype);
keyboard.prototype.constructor = keyboard;


keyboard.prototype.init = function() {
	this.z = {}
	this.d = g.keyboardtime
	this.bd = 2
	this.bdelay = 2
	
	var obj = addObj("keyboard");
    this.addChild(obj);
	
	this.added();
}

// added
keyboard.prototype.added = function() {
	g.arBonuses.push(this)
	fox.initjiggle(this, 2, 1, 0.5, 0.8)
}

keyboard.prototype.update = function() {
	fox.jiggle(this)
	this.bd--
	if (!this.bd){
		this.bd = this.bdelay
		if (g.ob.length > 0){
			it = g.ob[g.ob.length - 1]
			if (it.x < g.xmax - 50*scG){
				// make bolt
				var mc = new bolt();
				mc.x = 0.5 * (g.xmax + g.xmin)
				mc.y = 120*scG
				mc.scale.x = mc.scale.y = 0.4
				mc.targ = it
				mc.added();
				g.m3.addChild(mc)
				soundPlay("zzap")
				this.scale.x = this.scale.y = 1.5
				this.rotation = fox.rad(-10 + fox.random(20))
			}
		}
	}
	//
	this.rotation = this.rotation + (0 - this.rotation) / 4
	this.notunnels()
	this.d--, !this.d ? (this.die()) : (undefined)
}

// keep preventing making tunnels
keyboard.prototype.notunnels = function() {
	g.notunnel = 2
}

// die
keyboard.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.stat.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}
