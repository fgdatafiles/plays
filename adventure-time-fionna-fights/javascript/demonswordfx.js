function demonswordfx() {
	PIXI.Container.call( this );
	this.init();
}

demonswordfx.prototype = new foxmovieclip();

demonswordfx.prototype.init = function() {
	this.a = addObj("demonswordfx",0,0,scG);
	this.addChild(this.a);
	this.rotation = fox.rad(fox.random(360));
	this.d = 20;
	if (commonclass.itempaidstatus(1, 4) == 2) {
		this.scale.x = this.scale.y = 1.25;
	} else if (commonclass.itempaidstatus(1, 4) == 3) {
		this.scale.x = this.scale.y = 1.5;
	}
	
	arClips.push(this);
}

demonswordfx.prototype.loop = function() {
	this.scale.x = this.scale.y = 1.01 * this.scale.x;
	this.rotation += 2;
	this.d--;
	if (this.d < 5) {
		this.alpha -= 0.2;
	}
	if (!this.d || this.x < g.xmin - 0.5 * this.width) {
		this.die();
	}
}