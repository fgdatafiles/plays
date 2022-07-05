function enemydrone1() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemydrone1.prototype = new enemy();

enemydrone1.prototype.init = function() {
	this.a = addObj("enemydrone1");
	this.addChild(this.a);
	
	this.xs = -0.8 * g.enemyspeed*scG;
	this.yposmax = _H-150*scG;
}