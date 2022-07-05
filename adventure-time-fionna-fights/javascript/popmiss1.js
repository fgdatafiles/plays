function popmiss1() {
	PIXI.Container.call( this );
	this.init();
}

popmiss1.prototype = new foxmovieclip();


popmiss1.prototype.init = function() {
	this.a = addObj("popmiss1", 0,0,0.5*scG);
	this.addChild(this.a);
	var tfMiss = addText(getText("miss"), 12*scG, "#FFFFFF", "#870101");
	tfMiss.y = -tfMiss.height/2;
	this.a.addChild(tfMiss);
	
	this.d = 20;
	fox.initjiggle(this.a, 2, 1, 0.8, 0.8);
	
	arClips.push(this);
}

popmiss1.prototype.loop = function() {
	this.x = g.xmin+this.width/2;
	fox.jiggle(this.a);
	this.d--;
	if (this.d > 8)
		commonclass.say("miss"); 
	if (!this.d)
		this.die();
}