function popscore(x1, y1, n) {
	PIXI.Container.call( this );
	this.init(x1, y1, n);
}

popscore.prototype = Object.create(PIXI.Container.prototype);
popscore.prototype.constructor = popscore;


popscore.prototype.init = function(x1, y1, n) {
	if(x1){}else{x1=100*scG}
	if(y1){}else{y1=100*scG}
	if(n){}else{n=0}
	
	this.z = {}
	this.x = x1
	this.xx = x1
	this.y = y1
	this.yy = y1
	this.y -= 30*scG * fox.getrandom("popscorerandomlocation")
	this.sk = n
	this.d = 30
	this.xs = 30*scG
	this.grav = -1.5*scG
	
	var style = {
		font : 30*scG + "px " + fontLubalin,
		fill : "#FF6600",
		align : "center",
		stroke : "#FFFFFF",
		strokeThickness : 2*scG
	};
	
	this.a = new PIXI.Container();
	this.addChild(this.a);
	this.a.b = new PIXI.Text(this.sk, style);
	this.a.b.x = - this.a.b.width/2;
	this.a.addChild(this.a.b);
}

// added
popscore.prototype.added = function() {
	g.arBonuses.push(this)
	fox.initjiggle(this, 2.5, 1)
}

popscore.prototype.update = function() {
	this.a.x += this.xs
	this.a.x > 0 ? (this.xs +=this. grav) : (this.xs *= 0.9)
	fox.jiggle(this)
	this.d--, !this.d ? (this.die()) : (undefined)
}

// die
popscore.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m4.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}
