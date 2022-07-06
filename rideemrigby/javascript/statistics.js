function statistics() {
	PIXI.Container.call( this );
	this.init();
}

statistics.prototype = Object.create(PIXI.Container.prototype);
statistics.prototype.constructor = statistics;


statistics.prototype.init = function() {
	this.scorenow = g.score;
	this.pausebutton;
	this.xs = 0;
	this.accel = 0.8;
	this.convert = 0.5;
	this.energynow = 100;
	this.z = {}
	
	var styleNathanL = {
		font : 16*scG + "px " + fontLubalin,
		fill : "#FF6600",
		align : "left",
		dropShadow : true,
		dropShadowBlur: 0,
		dropShadowColor : '#000000',
		dropShadowAngle : Math.PI / 4,
		dropShadowDistance : 1*scG
	};
	var styleGlassL = {
		font : 30*scG + "px " + fontLubalin,
		fill : "#FF3300",
		align : "left",
		dropShadow : true,
		dropShadowBlur: 0,
		dropShadowColor : '#000000',
		dropShadowAngle : Math.PI / 4,
		dropShadowDistance : 1*scG
	};
	
	// var tfTitleScore = addObj("tfScore", 4, 12, 0.5);
	// tfTitleScore.setRegX(0)
	var tfTitleScore = addGlowText(getText("score"), 12, "#FF6600", undefined, "left", 350, 2, 1, undefined, true);
	tfTitleScore.x = 4*scG;
	tfTitleScore.y = 12*scG-tfTitleScore.height/2;
	this.addChild(tfTitleScore);
	this.tfScore = new PIXI.Text("0", styleGlassL);
	this.tfScore.x = tfTitleScore.x + tfTitleScore.width+5;
	this.tfScore.y = 2;
	this.addChild(this.tfScore);
	// var tfTitleEnergy = addObj("tfEnergy", 334, 12, 0.5);
	// tfTitleEnergy.setRegX(0)
	var tfTitleEnergy = addGlowText(getText("energy"), 12, "#FF6600", undefined, "right", 350, 2, 1, undefined, true);
	tfTitleEnergy.x = 390*scG;
	tfTitleEnergy.y = 12*scG-tfTitleEnergy.height/2;
	this.addChild(tfTitleEnergy);
	var bgBar = new PIXI.Graphics();
    bgBar.beginFill(0x663300).drawRect(0, 0, 160*scG, 15*scG).endFill();
	bgBar.x = 400*scG;
	bgBar.y = 7*scG;
    this.addChild(bgBar);
	this.ebar = addObj("ebar", 400*scG, 14*scG, 0.5*scG)
	this.ebar.setRegX(0);
    this.addChild(this.ebar);
	this.frameEnergy = addObj("frameEnergy", 394*scG, 5*scG, 0.5*scG, 1, 1, "0")
    this.addChild(this.frameEnergy);
}

statistics.prototype.update = function() {
	this.updatestatscore1()
	this.updatestatenergy1()
}

// update stat score
statistics.prototype.updatestatscore1 = function() {
	this.scorenow != g.score ? (this.scorenow = g.score, this.tfScore.text = g.score) : (undefined)
}

// update stat energy
statistics.prototype.updatestatenergy1 = function() {
	if(Math.abs(g.energy - this.energynow) > 2){
		if(g.energy < this.energynow){
			fox.tintflash(this.ebar, 8, 0xFF6600, 1)
			fox.tintflash(this.frameEnergy, 8, 0xFF6600, 1)
		} else {
			fox.tintflash(this.ebar, 8, 0xFFFFFF, 1)
			fox.tintflash(this.frameEnergy, 8, 0xFFFFFF, 1)
		}
	}
	this.energynow = g.energy
	this.xs = (this.xs * this.accel) + (((g.energy / 100) - this.ebar.scale.x) * this.convert)
	this.ebar.scale.x = Math.min(1, Math.max(0.001, this.ebar.scale.x + this.xs))
}
