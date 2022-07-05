function popmiss2() {
	PIXI.Container.call( this );
	this.init();
}

popmiss2.prototype = new foxmovieclip();


popmiss2.prototype.init = function() {
	this.a = addObj("popmiss2", 0,0,0.5*scG);
	this.addChild(this.a);
	var tfMiss = addText(getText("miss"), 12*scG, "#FFFFFF", "#870101");
	tfMiss.y = -tfMiss.height/2;
	this.a.addChild(tfMiss);
	
	this.d = 20;
	fox.initjiggle(this.a, 2, 1, 0.8, 0.8);
	
	arClips.push(this);
}

popmiss2.prototype.loop = function() {
	fox.jiggle(this.a);
	this.d--;
	if (this.d > 8)
		commonclass.say("miss"); 
	if (!this.d)
		this.die();
}