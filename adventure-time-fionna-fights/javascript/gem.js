function gem() {
	PIXI.Container.call( this );
	this.init();
}

gem.prototype = new foxmovieclip();

gem.prototype.init = function() {
	this.a = addObj("gem", 0,0, 0.5*scG);
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	this.a.img.gotoAndStop(1 + fox.random(6));
	this.d = fox.random(8);
	this.visible = false;
	this.ty = 15*scG;
	this.xdiv = (2 + 0.1 * fox.random(20))*scG;
	this.ydiv = (2 + 0.1 * fox.random(20))*scG;
	fox.initxfloat(this.a, 8, 1);
	
	arClips.push(this);
}

gem.prototype.loop = function() {
	this.d--;
	if (this.d < 0) {
		this.visible = true;
		this.tx = g.xmin + 320*scG + fox.random(50);
		this.x = this.x + (this.tx - this.x) / this.xdiv;
		this.y = this.y + (this.ty - this.y) / this.ydiv;
		fox.xfloating(this.a);
		if ((Math.abs(this.tx - this.x) < 30*scG) && (Math.abs(this.ty - this.y) < 30*scG)) {
			g.gemgot++;
			g.playztink = 1;
			this.die();
		}
	}
}