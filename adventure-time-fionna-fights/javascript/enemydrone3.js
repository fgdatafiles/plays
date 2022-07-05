function enemydrone3() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemydrone3.prototype = new enemy();

enemydrone3.prototype.init = function() {
	this.a = addObj("enemydrone3");
	this.addChild(this.a);
	
	this.setsize(28*scG, 28*scG);
	this.xs = g.enemyspeed;
	this.yposmax = _H-175*scG;
}