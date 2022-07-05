function explosion(name) {
	PIXI.Container.call( this );
	this.init(name);
}

explosion.prototype = new foxmovieclip();

explosion.prototype.init = function(name) {
	var sc = 1;
	if(name == "explosion1"){
		sc = 0.5;
	}
	this.a = addObj(name, 0,0, sc);
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	this.d = 9;
	this.scale.x = this.scale.y = 0.8 + 0.1 * fox.random(4);
	this.rotation = fox.rad(fox.random(360));
	
	arClips.push(this);
}

explosion.prototype.loop = function() {
	this.d--;
	if (!this.d)
		this.die()
}