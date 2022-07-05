function hint(xx, yy, n, timer, delay) {
	PIXI.Container.call( this );
	this.init(xx, yy, n, timer, delay);
}

hint.prototype = new foxmovieclip();


hint.prototype.init = function(xx, yy, n, timer, delay) {
	if(timer){}else{timer=100*scG}
	if(delay){}else{delay=0}
	
	this.a = new PIXI.Container();
	this.addChild(this.a);
	
	this.d = timer
	this.dl = delay
	this.visible = false
	this.x = xx
	this.y = yy
	this.no = n
	
	arClips.push(this);
	
	var str = "hint_" + String(n);
	if(options_mobile && n == 1){
		str = "hint_" + String(n)+"_tap";
	}
	
	var tfHintD = addText(getText(str), 22*scG, "#FFFFFF", "#FF6600", undefined, 390*scG, 6*scG);
	this.a.addChild(tfHintD);
	var tfHint = addText(getText(str), 22*scG, "#000000", "#FFFFFF", undefined, 390*scG, 5*scG);
	tfHint.x = tfHintD.x;
	tfHint.y = tfHintD.y;
	this.a.addChild(tfHint);
	
	fox.initjiggle(this.a, 2, 1, 0.5, 0.8)
}

hint.prototype.loop = function() {
	this.dl--
	if(!this.dl){
		this.visible = true;
		soundPlay("zpop");
	}
	if (this.dl < 0) {
		fox.jiggle(this.a);
		this.d--, !this.d ? (this.die()) : (undefined);
	}
}