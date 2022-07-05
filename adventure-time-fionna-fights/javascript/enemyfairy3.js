function enemyfairy3() {
	PIXI.Container.call( this );
	this.initData();
	this.init();
}

enemyfairy3.prototype = new enemy();

enemyfairy3.prototype.init = function() {
	this.a = addObj("enemyfairy3", 0, 0 , 0.4*scG);
	this.addChild(this.a);
	
	// energy
	this.energy = this.energynow = this.energymax = 100;
	// size
	this.setsize(40*scG, 40*scG);
	// speed
	this.xs = -0.8*scG * g.enemyspeed;
	// make wings
	var wings = addObj("fairywings", 30*scG, 0, 2.5);
	wings.img.play();
	wings.img.animationSpeed = 0.5;
	this.a.addChild(wings);
}

// destroyed
enemyfairy3.prototype.destroyed = function() {
	// create 2 black fairies
	var enemy = new enemyfairy4();
	enemy.x = this.x;
	enemy.y = this.y;
	enemy.added();
	g.m2.addChild(enemy);
	g.en.push(enemy);
	var enemy2 = new enemyfairy4();
	enemy2.x = this.x;
	enemy2.y = this.y;
	enemy2.added();
	g.m2.addChild(enemy2);
	g.en.push(enemy2);
	
	fox.removevalue(this, g.en);
	this.explode();
	this.die();
}