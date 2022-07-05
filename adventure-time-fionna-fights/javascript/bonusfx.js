function bonusfx() {
	PIXI.Container.call( this );
	this.init();
}

bonusfx.prototype = new foxmovieclip();

bonusfx.prototype.init = function() {
	this.slices = [];
	var ro = fox.rad(22.5);
	for (var i = 0; i < 16; i++) {
		var it = new PIXI.Container();;
		var slice = addObj("bonusfxslice", 16*scG, -8*scG, 0.5*scG);
		it.addChild(slice);
		it.rotation = i * ro;
		this.addChild(it);
		this.slices.push(it)
	}
	this.div = 1.2;
	this.d = 10;
	arClips.push(this);
}

// loop
bonusfx.prototype.loop = function() {
	for (var i = 0; i < this.slices.length; i++) {
		this.slices[i].scale.x *= this.div;
	}
	this.div += 0.1;
	this.d--;
	if (this.d < 5) {
		this.alpha -= 0.2;
	}
	if (!this.d) {
		this.die();
	}
}