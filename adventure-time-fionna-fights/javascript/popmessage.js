function popmessage(x1, y1, st) {
	PIXI.Container.call( this );
	this.init(x1, y1, st);
}

popmessage.prototype = new foxmovieclip();


popmessage.prototype.init = function(x1, y1, st) {
	if(x1){}else{x1 = 100*scG;}
	if(y1){}else{y1 = 100*scG;}
	if(st){}else{st = "";}
	this.x = x1;
	this.y = y1;
	this.d = 60;
	var bg = new addObj("popmessage",0,0,0.5*scG);
	this.addChild(bg);
	this.b = addText(getText(st), 16*scG, "#000000", undefined, "center", 230*scG);
	this.b.x = 0;
	this.b.y = -this.b.height/2;
	this.addChild(this.b);
	fox.initjiggle(this, 2, 1, 0.5, 0.8)
	arClips.push(this);
}

popmessage.prototype.loop = function() {
	fox.jiggle(this)
	this.d--, !this.d ? (this.die()) : (undefined)
}