function shield() {
	PIXI.Container.call( this );
	this.init();
}

shield.prototype = new foxmovieclip();


shield.prototype.init = function() {
	var a = addObj("shield",0,0,scG);
	a.setReg0();
	a.img.play();
	a.img.animationSpeed = 0.5;
	this.addChild(a);
	this.alpha = 0;
	g.shieldkills = 0;
	
	arClips.push(this);
}

shield.prototype.loop = function() {
	this.x = g.xmin;
	if (!g.shielding) {
		this.alpha = Math.max(0, this.alpha - 0.1);
		if (!this.alpha) {
			g.shieldkills = 0; 
			this.die()
		}
	} else {
		this.alpha = Math.min(1, this.alpha + 0.1);
	}
}