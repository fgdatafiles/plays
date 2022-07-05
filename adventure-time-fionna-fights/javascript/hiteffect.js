function hiteffect() {
	PIXI.Container.call( this );
	this.init();
}

hiteffect.prototype = new foxmovieclip();

hiteffect.prototype.init = function() {
	this.a = addObj("hiteffect", 0,0, scG);
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	this.d = 2;
	this.a.rotation = fox.rad(fox.random(360));
	
	arClips.push(this);
}

hiteffect.prototype.loop = function() {
	this.d--;
	if (!this.d) {
		this.die();
	}
}