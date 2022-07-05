function popbonusname(x1, y1, st) {
	PIXI.Container.call( this );
	this.init(x1, y1, st);
}

popbonusname.prototype = new foxmovieclip();

popbonusname.prototype.init = function(x1, y1, st) {
	if(x1){}else{x1=100*scG}
	if(y1){}else{y1=100*scG}
	if(st){}else{st=""}
	
	this.a = new PIXI.Container();
	this.addChild(this.a);
	this.a.b = addText(st, 25*scG, "#E30202", undefined, "center", 80*scG, 1*scG, fontMain, true, "#FFFFFF");
	this.a.b.x = 0;
	this.a.b.y = -this.a.b.height/2;
	this.a.addChild(this.a.b);
	
	this.x = xx = Math.max(80*scG, x1);
	this.y = yy = Math.max(60*scG, y1);
	this.d = 60;
	
	fox.initjiggle(this, 2, 1, 0.5, 0.8)
	
	arClips.push(this);
}

popbonusname.prototype.loop = function() {
	fox.jiggle(this)
	if (this.d < 10) {
		this.y -= 5*scG;
	}
	this.d--;
	if (!this.d) {
		this.die()
	}
}