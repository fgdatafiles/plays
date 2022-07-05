function root() {
	PIXI.Container.call( this );
	this.init();
}

root.prototype = new foxmovieclip();


root.prototype.init = function() {
	this.a = addObj("root", 0,0, scG);
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	this.d = 10;
	this.width = this.height = 2*scG * g.rootradius;
	
	arClips.push(this);
}

root.prototype.loop = function() {
	this.d--;
	if (!this.d) {
		this.die();
	}
}