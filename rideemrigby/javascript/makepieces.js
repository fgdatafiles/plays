function makepieces(nama, total, xx, yy, wid, hei) {
	PIXI.Container.call(this);
	this.init(nama, total, xx, yy, wid, hei);
}

makepieces.prototype = Object.create(PIXI.Container.prototype);
makepieces.prototype.constructor = makepieces;

makepieces.prototype.init = function(nama, total, xx, yy, wid, hei) {
	this.pnama = nama
	this.ptotal = total
	this.px = xx
	this.py = yy
	this.pwid = wid
	this.phei = hei
	this.pnorandom = 0
	this.d = 0
	this.z = {}
	
	this.added();
}

// added
makepieces.prototype.added = function() {
	g.arBonuses.push(this)
	this.ptotal >= 3 ? (this.d = 3) : (this.d = 1)
	this.pstep = Math.round(this.ptotal / this.d)
}

makepieces.prototype.update = function() {
	for (var i = 0; i < this.pstep; i++){
		var aa = new obstaclepieces(this.pnama);
		if(aa){
			aa.x = this.px + 20*scG + fox.random(this.pwid)
			aa.y = this.py - fox.random(this.phei)
			aa.nama = this.pnama
			aa.norandomscale = this.pnorandom
			aa.added();
			// big item (fridge, sofa)
			if (this.ptotal == 1){
				g.m4.addChild(aa)
			} else {
				g.m3.addChild(aa)
			}
		}
	}
	
	this.d--, !this.d ? (this.die()) : (undefined)
}

// die
makepieces.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m3.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}
