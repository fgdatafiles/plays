function musclewoman() {
	PIXI.Container.call( this );
	this.init();
}

musclewoman.prototype = Object.create(PIXI.Container.prototype);
musclewoman.prototype.constructor = musclewoman;


musclewoman.prototype.init = function() {
	this.a = new PIXI.Container();
	this.addChild(this.a);
	
	this.act = "";
	this.actnow = "";
	this.z = {};
	
	var sc = 0.35*scG;
	var sh = addObj("shadow");
	this.a.addChild(sh);
	this.a.jump = addObj("jumpwoman", 0, 0, sc);
	this.a.jump.setRegY(1);
	this.a.jump.img.stop();
	this.a.jump.img.animationSpeed = 0.5;
	this.a.addChild(this.a.jump);
	this.a.run = addObj("runwoman", 0, 0, sc);
	this.a.run.setRegY(1);
	this.a.run.img.play();
	this.a.run.img.animationSpeed = 0.5;
	this.a.addChild(this.a.run);
	this.a.land = addObj("landwoman", 0, 0, sc);
	this.a.land.setRegY(1);
	this.a.land.img.stop();
	this.a.addChild(this.a.land);
	
	this.added();
}

musclewoman.prototype.added = function() {
	g.arBonuses.push(this)
	g.musclewomanlanded = 0
	this.x = g.xmin - 60*scG
	this.y = g.yland + 20*scG
	this.grav = 8*scG
	this.space = 200*scG
	this.space2 = 140*scG
	this.ska = 1.1
	this.scale.x = this.scale.y = this.ska
	this.act = "run"
	this.showact()
	this.setsize(60*scG, 70*scG)
	this.state = 1
	this.xs = g.runspeed
}

// set size
musclewoman.prototype.setsize = function(ww, hh) {
	this.wid = ww
	this.hei = hh
	this.hwid = this.wid / 2
	this.hhei = this.hei / 2
}

musclewoman.prototype.update = function() {
	if(this.act == "jump"){
		if(this.a.jump){
			if(this.a.jump.img.currentFrame >= 4){
				this.a.jump.img.stop();
			}
		}
	}
	
	this.cekstate();
	this.notunnels()
	this.showact()
}

// show act
musclewoman.prototype.showact = function() {
	if(this.act != this.actnow){
		this.a.jump.visible = this.a.run.visible = this.a.land.visible = false
		this.actnow = this.act; 
		this.act == "run" ? (this.a.run.visible = true) : (undefined)
		this.act == "land" ? (this.a.land.visible = true) : (undefined)
		if(this.act == "jump"){
			this.a.jump.visible = true
			this.a.jump.img.play();
		}
	}
}

// keep preventing making tunnels
musclewoman.prototype.notunnels = function() {
	g.notunnel = 2
}

// cek state
musclewoman.prototype.cekstate = function() {
	if (this.state == 1) {
		// entering
		this.x = this.x + ((g.mm.x + this.space) - this.x) / 3.6
		if (this.x > g.mm.x + this.space - 100*scG) {
			this.state = 2
		}
		g.specialch = 7
		g.specialchx = this.x
		g.specialchy = this.y
	} else if (this.state == 2) {
		// slide in
		this.x = this.x + ((g.mm.x + this.space2) - this.x) / 1.6
		this.y = this.y + ((g.yland + 5) - this.y) / 1.6
		this.ska = this.ska + (1 - this.ska) / 1.6
		this.scale.x = this.scale.y = this.ska
		g.specialchx = this.x
		g.specialchy = this.y
		if (this.ska < 1.02) {
			this.scale.x = this.scale.y = 1
			this.y = g.yland
			this.state = 3
			this.d = 50
		}
	} else if (this.state == 3) {
		// ready
		this.x = g.mm.x + this.space2 + this.xs
		this.xs += 0.5 * g.runspeed
		g.specialchx = this.x
		this.d--
		!this.d ? (this.act = "jump", this.ys = -100*scG, this.state = 4) : (undefined)
	} else if (this.state == 4) {
		// jump
		this.ys += this.grav
		this.y += this.ys
		this.x = g.mm.x + this.space2 + this.xs
		if (this.y > g.yland) {
			// landed
			this.y = g.yland
			this.act = "land"
			g.musclewomanlanded = 1
			g.musclewomanwave = 2
			// blow up all obstacles
			for (var i = 0; i < g.ob.length; i++) {
				var it = g.ob[i]
				it.crash(it.x, it.y)
			}
			this.state = 5
			this.d = 15
		}
	} else if (this.state == 5) {
		// cek out of screen
		this.d--
		!this.d ? (g.specialch = g.specialchx = g.specialchy = 0) : (undefined)
		this.x < g.xmin - 60*scG ? (g.musclewomanlanded = 0, this.die()) : (undefined)
	}
}

// die
musclewoman.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m3.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}