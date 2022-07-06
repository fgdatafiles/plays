function popbonusname(x1, y1, st) {
	PIXI.Container.call( this );
	this.init(x1, y1, st);
}

popbonusname.prototype = Object.create(PIXI.Container.prototype);
popbonusname.prototype.constructor = popbonusname;


popbonusname.prototype.init = function(x1, y1, st) {
	if(x1){}else{x1=100*scG}
	if(y1){}else{y1=100*scG}
	if(st){}else{st=""}
	
	this.z = {}
	this.x = x1
	this.xx = x1
	this.y = y1
	this.yy = y1
	this.d = 60
	
	var tf1 = addGlowText(st, 25, "#FFCC00", "#000000", "center", 300, 2, 1, fontLubalin, true);
	tf1.y = - tf1.height/2;
	this.addChild(tf1);
	
	this.added();
}

// added
popbonusname.prototype.added = function() {
	g.arBonuses.push(this)
	fox.initjiggle(this, 2, 1, 0.5, 0.8)
}

popbonusname.prototype.update = function() {
	fox.jiggle(this)
	this.d--, !this.d ? (this.die()) : (undefined)
}

// die
popbonusname.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.stat.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}
