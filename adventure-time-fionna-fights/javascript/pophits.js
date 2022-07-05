function pophits(x1, y1, n, sk) {
	PIXI.Container.call( this );
	this.init(x1, y1, n, sk);
}

pophits.prototype = new foxmovieclip();

pophits.prototype.init = function(x1, y1, n, sk) {
	if(x1){}else{x1=100}
	if(y1){}else{y1=100}
	if(n){}else{n=0}
	if(sk){}else{sk=0}
	
	this.a = new PIXI.Container();
	this.addChild(this.a);
	this.a.b = addText(String(n), 30*scG, "#E30202", undefined, 
					"right", 80*scG, 1*scG, fontMain, true, "#FFFFFF");
	this.a.b.x = -0;
	this.a.b.y = -32*scG;
	this.a.addChild(this.a.b);
	var tfHits = addText(getText("hits"), 20*scG, "#E30202", undefined, 
					"left", 100*scG, 1*scG, fontMain, true, "#FFFFFF");
	tfHits.x = -0;
	tfHits.y = -26*scG;
	this.a.addChild(tfHits);
	this.a.c = addText(String(sk), 30*scG, "#027D02", undefined, 
					"center", 130*scG, 1*scG, fontMain, true, "#FFFFFF");
	this.a.c.x = 0;
	this.a.c.y = -6*scG;
	this.a.addChild(this.a.c);
	
	this.x = x1;
	this.y = y1;
	this.d = 30;
	
	fox.initjiggle(this, 2, 1)
	
	arClips.push(this);
}

pophits.prototype.loop = function() {
	if (!options_pause) {
	fox.jiggle(this)
		if (this.d < 10) {
			this.y -= 5*scG;
		}
		this.d--;
		if (!this.d) {
			this.die()
		}
	}
}