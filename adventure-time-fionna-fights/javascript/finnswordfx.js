function finnswordfx() {
	PIXI.Container.call( this );
	this.init();
}

finnswordfx.prototype = new foxmovieclip();

finnswordfx.prototype.init = function() {
	this.a = addObj("finnswordfx",0,0,0.5*scG);
	this.addChild(this.a);
	this.rotation = g.p.rotation;
	this.d = 7;
	if (commonclass.itempaidstatus(1, 1) == 1) {
		this.scale.x = this.scale.y = 0.5;
	} else if (commonclass.itempaidstatus(1, 1) == 2) {
		this.scale.x = this.scale.y = 0.75;
	}
	
	arClips.push(this);
}

finnswordfx.prototype.loop = function() {
	this.a.x = this.a.x + (150*scG - this.a.x) / 4;
	this.d--;
	if (this.d < 5){
		this.alpha -= 0.2;
	}
	if (!this.d){
		this.die()
	}
}