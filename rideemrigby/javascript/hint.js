function hint(xx, yy, n, timer, delay) {
	PIXI.Container.call( this );
	this.init(xx, yy, n, timer, delay);
}

hint.prototype = Object.create(PIXI.Container.prototype);
hint.prototype.constructor = hint;


hint.prototype.init = function(xx, yy, n, timer, delay) {
	if(timer){}else{timer=100}
	if(delay){}else{delay=0}
	
	if(options_mobile){
		var bg = new PIXI.Graphics();
		bg.beginFill(0xFA0D00).drawRect(-g.hscreenwid/2, -yy, g.hscreenwid, g.screenhei).endFill();
		bg.alpha = 0.3;
		this.addChild(bg);
	}
	
	this.a = new PIXI.Container();
	this.addChild(this.a);
	
	this.d = timer
	this.dl = delay
	this.visible = false
	this.x = xx
	this.y = yy
	this.no = n
	this.z = {};
	g.arBonuses.push(this)
	
	this.arText = ["", "click_to_jump", 
	"double_click", 
	"press_space"]
	if(options_mobile){
		this.arText = ["", "tap_right_side", 
		"double_tap", 
		"touch_left"]
	}
	
	var wL = 260*scG;
	if(language.current_id == "ar"){
		wL = _W;
	}
	
	var styleGlass = {
		font : 20*scG + "px " + fontLubalin,
		fill : "#FFCC00",
		align : "center",
		wordWrapWidth : wL,
		wordWrap : true,
		stroke : "#000000",
		strokeThickness : 2*scG,
		dropShadow : true,
		dropShadowBlur: 0,
		dropShadowColor : '#000000',
		dropShadowAngle : Math.PI / 4,
		dropShadowDistance : 3*scG
	};
	
	this.tfHint = new PIXI.Text(getText(this.arText[n]), styleGlass);
	this.tfHint.x = -this.tfHint.width/2;
	this.a.addChild(this.tfHint);
	
	fox.initjiggle(this.a, 2, 1, 0.5, 0.8)
}

hint.prototype.update = function() {
	this.dl--
	if(!this.dl){
		this.visible = true;
		soundPlay("zpop")
	}
	if (this.dl < 0) {
		fox.jiggle(this.a)
		// remove hints if certain conditions met
		g.gameid == 4 && this.no == 2 && g.udadash ? (this.d = Math.min(1, this.d)) : (undefined)
		g.gameid == 4 && this.no == 5 && g.rig.state == 2 ? (this.dd = Math.min(1, this.dd)) : (undefined)
		g.gameid == 4 && this.no == 4 && g.rig.state != 2 ? (this.dd = Math.min(1, this.dd)) : (undefined)
		this.d--, !this.d ? (this.die()) : (undefined);
	}
}

// die
hint.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.stat.removeChild(this)
	fox.removevalue(this, g.arBonuses)
}