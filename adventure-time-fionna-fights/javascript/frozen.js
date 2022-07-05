function frozen() {
	PIXI.Container.call( this );
	this.init();
}

frozen.prototype = new foxmovieclip();


frozen.prototype.init = function() {	
	var bg = new PIXI.Graphics();
	bg.beginFill(0xffffff).drawRect(0, 0, _W, _H).endFill();
	bg.alpha = 0.3;
	this.addChild(bg);
	var topF = addObj("frozen", 0,0, scG);
	topF.setReg0();
	this.addChild(topF);
	var topD = addObj("frozen", _W, _H, scG);
	topD.rotation = fox.rad(180);
	topD.setReg0();
	this.addChild(topD);
	this.alpha = 0;
	
	arClips.push(this);
}

frozen.prototype.loop = function() {
	if (g.freeze > 0) {
		this.alpha = Math.min(1, this.alpha + 0.1);
	} else {
		this.alpha -= 0.1;
		if (this.alpha <= 0) {
			this.die();
		}
	}
}