function crystal() {
	PIXI.Container.call( this );
	this.init();
}

crystal.prototype = new foxmovieclip();


crystal.prototype.init = function() {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	this.a = addObj("crystal", 0,0, 0.5*scG);
	this.addChild(this.a);
	
	this.d = 5;
	
	arClips.push(this);
}

crystal.prototype.loop = function() {
	this.alpha -= 0.2;
	this.d--;
	if (!this.d) {
		this.die();
	}
}