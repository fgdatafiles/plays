function obstaclepieces(nama) {
	PIXI.Container.call(this);
	this.init(nama);
}

obstaclepieces.prototype = Object.create(PIXI.Container.prototype);
obstaclepieces.prototype.constructor = obstaclepieces;

obstaclepieces.prototype.init = function(nama) {
	this.d = 0
	this.z = {}
	this.ro = 10 + fox.random(20)
	this.xs = fox.random(15*scG)
	this.ys = -10*scG - fox.random(20*scG)
	this.div = 0.5
	this.grav = 3*scG
	this.norandomscale = 0;
	
	this.a = addObj(nama,0,0, 0.5*scG);
	if(this.a){
		this.a.img.gotoAndStop(fox.getrandom(nama + "type"))
	} else {
		this.a = new PIXI.Container();
		console.log("obstaclepieces " + nama + " miss.")
	}
	this.addChild(this.a);
}

// added
obstaclepieces.prototype.added = function() {
	g.arBonuses.push(this)
	if(this.a.img){
		this.a.img.gotoAndStop(fox.getrandom(this.nama + "type"))
	}
	if (g.specialch || g.musclewomanlanded){
		// ada unicorn/musclewoman, shift the pieces down a bit
		this.yland = g.yland + 20*scG + fox.random(10*scG) - (0.5 * this.a.h)
		// for musclewoman, scatter upwards
		if (g.musclewomanlanded){
			this.yland += 20*scG
			this.xs = -2*scG + 0.1 * fox.random(40*scG)
			this.ys = -30*scG - fox.random(40*scG)
			this.div = 0.2
		}
	} else {
		this.yland = g.yland + fox.random(10*scG) - (0.5 * this.a.h)
		// exploding ahead of muscleman, shift the pieces down a bit
		if (this.x - g.mm.x > 200*scG){
			this.yland += 30*scG
		}
	}
	this.rotation = fox.random(2* Math.PI)
	if (!this.norandomscale){
		// random scale
		this.scale.x = this.scale.y = 0.7 + 0.01 * fox.random(50)
	}
}

obstaclepieces.prototype.update = function() {
	this.ys += this.grav
	this.x += this.xs
	this.y += this.ys
	this.rotation += this.ro*(Math.PI/180)
	if (this.y > this.yland){
		this.rotation = 0
		this.y = this.yland
		this.ys = -this.div * this.ys
		this.xs = 0.8 * this.xs
		this.xs < 1 ? (this.xs = 0) : (undefined)
	}
	// cek out
	if (this.x < g.xmin - 100*scG){
		this.die()
	} else {
		// end of the game
		if (g.fall){
			if(this.xs == 0){
				this.alpha -= 0.15
				if(this.alpha <= 0){
					this.die()
				}
			}
		}
	}
}

// die
obstaclepieces.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	this.parent.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}
