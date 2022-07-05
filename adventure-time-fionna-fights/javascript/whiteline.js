function whiteline() {
	PIXI.Container.call( this );
	this.init();
}

whiteline.prototype = new foxmovieclip();


whiteline.prototype.init = function() {
	this.a = addObj("whiteline",0,0,scG);
	this.addChild(this.a);
	
	this.ys = -100*scG;
	
	arClips.push(this);
}

whiteline.prototype.loop = function() {
	if (g.cutscenenow == 1) {
		this.y += this.ys
		if (this.y < -0.5 * this.height)
			this.die();
	}
}