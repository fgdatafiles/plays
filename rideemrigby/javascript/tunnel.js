function tunnel(value) {
	PIXI.Container.call( this );
	this.init(value);
}

tunnel.prototype = Object.create(PIXI.Container.prototype);
tunnel.prototype.constructor = tunnel;

tunnel.prototype.init = function(value) {
	this.uda = 0
	this.bpos = 0
	this.gotpoints = 0
	this.bspacing = 65*scG
	this.state = 1
	this.tipe = 1
	this.dead = false
	var _x = 0;
	var _y = 0;
	
	switch (value){
		case "o6":
			_x = 264*scG;
			_y = -35*scG;
			this.tipe = 1
			break;
		case "o11":
			_x = 142*scG;
			_y = -35*scG;
			this.tipe = 2
			break;
	}
	
	var obj = addObj(value, _x, _y, 0.5*scG);
    this.addChild(obj);
}

// added
tunnel.prototype.added = function() {
	g.ob.push(this)
	
	if (this.tipe == 1){
		// long tunnel
		this.twid = g.tunnelwid1
		// add tunnel background
		this.tbg = addObj("tunnelbg", this.x+262*scG, this.y-21*scG, 0.5*scG);
	} else if (this.tipe == 2){
		// short tunnel
		this.twid = g.tunnelwid2
		// add tunnel background
		this.tbg = addObj("tunnelbg2", this.x+144*scG, this.y-21*scG, 0.5*scG);
	}
	g.m1.addChild(this.tbg)
}

tunnel.prototype.update = function() {
	this.cekmm()
	this.cekbonus()
	this.cekout()
}

// cek muscle man
tunnel.prototype.cekmm = function() {
	if (g.mm.x > this.x){
		if (g.mm.x < this.x + this.twid){
			// crash?
			if (!this.uda && !g.side && !g.jump){
				this.uda = 1
				commonclass.tunnelhit()
			}
			if (!g.intunnel && g.mm.x < this.x + 25*scG){
				g.intunnel = 1
			}
		} else {
			g.intunnel = 0
		}
	}
}

// cek bonus
tunnel.prototype.cekbonus = function() {
	if (g.fly || g.bounce){
		// player flying or power bouncing
		if (!this.bpos){
			this.bpos = this.x + this.bspacing
		} else {
			if (g.mm.x + 140*scG > this.bpos){
				if (this.bpos < this.x + this.twid - 20*scG){
					// make point bonus that's going to fly to player
					commonclass.makebonus(1, this.bpos, g.yland - 100*scG)
					this.bpos += this.bspacing
				} else {
					this.bpos = 99999
				}
			}
		}
	} else if (!this.uda && !g.inv && g.intunnel && g.side && !g.jump && !g.falling){
		// player in tunnel
		if (!this.bpos){
			this.bpos = this.x + this.bspacing
		} else {
			if (g.mm.x > this.bpos){
				if (this.bpos < this.x + this.twid - 20*scG){
					// score!
					g.score += g.ptsnow
					commonclass.popskor(g.mm.x, this.y - 100*scG, g.ptsnow)
					soundPlay("zbonus")
					g.ptsnow += g.pts
					this.gotpoints = 1
					this.bpos += this.bspacing
				} else {
					this.bpos = 99999
				}
			}
		}
	}
}

// cek out
tunnel.prototype.cekout = function() {
	if (this.x + this.twid + 60*scG < g.xmin || this.state == 3){
		// CN Achievement -------------------------------------------------------
		if (this.tipe == 2){
			if (!this.uda && !this.gotpoints){
				g.jumpedblackpipes++
				// jumped over 3 black pipes
				if (g.jumpedblackpipes == 3)
					sendstat(202, 1)
			}
		}
		// ----------------------------------------------------------------------
		fox.removevalue(this, g.ob)
		this.die()
	}
}

// die
tunnel.prototype.die = function() {
	this.dead = true;
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	this.parent.removeChild(this)
}
