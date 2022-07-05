function statistics() {
	PIXI.Container.call( this );
	this.init();
}

statistics.prototype = new foxmovieclip();

statistics.prototype.init = function() {
	this.energynow = g.energy1;
	this.convert = 0.5;
	this.accel = 0.8;
	this.xs = 0;
	this.gemnow = -999;
	this.scorenow = -999;
	
	this.energybar = new PIXI.Container();
	this.energybar.x = 391*scG;
	this.energybar.y = 20*scG;
	this.addChild(this.energybar);
	var bgBar = new PIXI.Graphics();
	bgBar.beginFill(0xFFFFFF).drawRect(0, -7.5*scG, 170*scG, 15*scG).endFill();
	bgBar.alpha = 0.5;
    this.energybar.addChild(bgBar);
	var ebar = addObj("ebar",0,0, 0.5*scG);
	ebar.setRegX(0);
    this.energybar.addChild(ebar);
	this.energybar.b = ebar;
	var frameEnergy = addObj("frameEnergy", 0,0, 0.5*scG)
	frameEnergy.x = frameEnergy.width/2 - 8*scG;
    this.energybar.addChild(frameEnergy);
	this.energybar.b.scale.x = g.energy1 / 100;
	
	var coinpic = addObj("iconGem", 336*scG, 20*scG, 0.3*scG);
	this.addChild(coinpic);
	var tfScore = addText(String(g.score), 25*scG, "#027D02", 
					undefined, "left", 200*scG, 1*scG, fontMain, true, "#FFE0FB");
	tfScore.x = 7*scG;
	tfScore.y = 0;
	this.addChild(tfScore);
	this.tfScore = tfScore;
	var tfCoin = addText(String(g.gemgot), 25*scG, "#027D02", 
					undefined, "right", 200*scG, 1*scG, fontMain, true, "#FFE0FB");
	tfCoin.x = 328*scG;
	tfCoin.y = 0;
	this.addChild(tfCoin);
	this.tfCoin = tfCoin;
	
	arClips.push(this);
}

statistics.prototype.loop = function() {
	this.updatestatgembox()
	this.updatestatscorebox()
	this.updatestatenergybar()
}

// update stat coin
statistics.prototype.updatestatgembox = function() {
	this.gemnow != g.gemgot ? (this.gemnow = g.gemgot, this.tfCoin.setText(g.gemgot)) : (undefined)
}

// update stat score
statistics.prototype.updatestatscorebox = function() {
	if (this.scorenow != g.score){
		this.scorenow = g.score;
		this.tfScore.setText(g.score);
	}
}

// update stat energy
statistics.prototype.updatestatenergybar = function() {
	Math.abs(g.energy1 - this.energynow) > 2 ? (g.energy1 < this.energynow ? (fox.tintflash(this.energybar, 8, 0xFF6600, 1)) : (fox.tintflash(this.energybar, 8, 0xFFFFFF, 1))) : (undefined)
	this.energynow = g.energy1
	this.xs = (this.xs * this.accel) + (((g.energy1 / 100) - this.energybar.b.scale.x) * this.convert)
	this.energybar.b.scale.x = Math.min(1, Math.max(0.001, this.energybar.b.scale.x + this.xs))
	// just fall?
	if (g.justfall > 0) {
		g.justfall = Math.max(0, g.justfall - 1);
		if (!g.justfall) {
			g.energy1 = Math.max(g.enemydamage - 1, g.energy1 - g.enemydamage);
		}
	}
}
