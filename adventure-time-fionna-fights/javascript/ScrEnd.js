function ScrEnd() {
	PIXI.Container.call( this );
	this.init();
}

ScrEnd.prototype = Object.create(PIXI.Container.prototype);
ScrEnd.prototype.constructor = ScrEnd;

ScrEnd.prototype.init = function() {	
	this._arButtons = [];
	
	var bgEnd = addObj("bgEnd", _W/2, _H/2, 0.5*scG);
	this.addChild(bgEnd);
	
	this.a = new PIXI.Container();
	this.a.x = _W/2;
	this.a.y = 177*scG;
	this.addChild(this.a);
	
	var tfGO = addText(getText("game_over"), 55*scG, "#FFE81A", "#CC0000", undefined, 520*scG, 5*scG);
	tfGO.x = 300*scG;
	tfGO.y = 55*scG - tfGO.height/2;
	this.addChild(tfGO);
	
	var tfScore = addText(getText("your_score"), 25*scG, "#FFFFFF", "#006600", undefined, 320*scG, 5*scG);
	tfScore.y = - 89*scG;
	this.a.addChild(tfScore);
	this.tfScore = addText(String(g.score), 44*scG, "#FEE719", "#006600", undefined, 320*scG, 5*scG);
	this.tfScore.y = - 63*scG;
	this.a.addChild(this.tfScore);
	var tfCoins = addText(getText("gems"), 25*scG, "#FFFFFF", "#006600", undefined, 320*scG, 5*scG);
	tfCoins.y = - 6*scG;
	this.a.addChild(tfCoins);
	this.tfCoins = addText(String(g.gemgot), 44*scG, "#FEE719", "#006600", undefined, 320*scG, 5*scG);
	this.tfCoins.y = 20*scG;
	this.a.addChild(this.tfCoins);
	this.tfBest = addText(getText("best") + " " + String(g.highscore), 25*scG, 
							"#D5FF6F", "#006600", "left", 320*scG, 5*scG);
	this.tfBest.x = -this.tfBest.width/2;
	this.tfBest.y = 70*scG;
	this.a.addChild(this.tfBest);
	
	if (g.score > g.highscore) {
		g.highscore = g.score
		this.tfBest.setText(getText("new_best_score"));
	} else if(language.current_id == "ar"){
		this.tfBest.setText(getText("best") + " ");
		var tfBest2 = addText(String(g.highscore), 25*scG, 
							"#D5FF6F", "#006600", "left", 320*scG, 5*scG);
		var w = this.tfBest.width + tfBest2.width;
		tfBest2.x = -w/2;
		this.tfBest.x = tfBest2.x + tfBest2.width;
		tfBest2.y = 70*scG;
		this.a.addChild(tfBest2);
	}
	fox.initjiggle(this.a, 1.6, 1, 0.7, 0.7)
	this.a.d = 40;
	
	
	var sizeTf = 22*scG;
	if(language.current_id == "es"){
		sizeTf = 18*scG;
	}
	var btnMenu = addButton("btnRed", 300*scG, 347*scG, 0.5*scG);
	this.addChild(btnMenu);
	this._arButtons.push(btnMenu);
	var tfMenu = addText(getText("next"), sizeTf, "#FFFFFF", undefined, undefined, 100*scG);
	tfMenu.y = - tfMenu.height/2;
	btnMenu.addChild(tfMenu);
	
	saveData();
	
	btnMenu.interactive = true;
	btnMenu.buttonMode = true;
	
	this.interactive = true;
	this.on('mousedown', this.touchHandler);
	this.on('mousemove', this.touchHandler);
	this.on('touchstart', this.touchHandler);
	this.on('touchmove', this.touchHandler);
	this.on('touchend', this.touchHandler);
}

ScrEnd.prototype.update = function(diffTime){
	if(options_pause){
		return;
	}
	
	if(this.a){
		this.a.d--
		if (this.a.d > 0) {
			fox.jiggle(this.a)
		}
		// Space bar to play again
		if (g.key.f1) {
			this.removeAllListener();
			showShop();
		}
	}
}

ScrEnd.prototype.clickObj = function(item_mc) {
	// soundPlay("button_click");
	var name = item_mc.name
	// console.log("clickObj:", name);
	
	if(name.indexOf("btn") == -1){
		item_mc._selected = false;
		if(item_mc.over){
			item_mc.over.visible = false;
		}
	}
	
	if(name == "btnRed"){
		this.removeAllListener();
		showShop();
	}
}

ScrEnd.prototype.checkButtons = function(evt){
	var mouseX = evt.data.global.x;
	var mouseY = evt.data.global.y;
	for (var i = 0; i < this._arButtons.length; i++) {
		var item_mc = this._arButtons[i];
		if(hit_test_rec(item_mc, item_mc.w, item_mc.h, mouseX, mouseY)){
			if(item_mc.visible && item_mc.alpha == 1){
				if(item_mc._selected == false){
					item_mc._selected = true;
					if(item_mc.over){
						item_mc.over.visible = true;
					} else if(item_mc.overSc){
						item_mc.scale.x = 1.1*item_mc.vX;
						item_mc.scale.y = 1.1;
					}
				}
			}
		} else {
			if(item_mc._selected){
				item_mc._selected = false;
				if(item_mc.over){
					item_mc.over.visible = false;
				} else if(item_mc.overSc){
					item_mc.scale.x = 1*item_mc.vX;
					item_mc.scale.y = 1;
				}
			}
		}
	}
}

ScrEnd.prototype.touchHandler = function(evt){
	var phase = evt.type;
	if(phase=='mousemove' || phase == 'touchmove' || phase == 'touchstart'){
		this.checkButtons(evt);
	}else{
		var mouseX = evt.data.global.x;
		var mouseY = evt.data.global.y;
		
		for (var i = 0; i < this._arButtons.length; i++) {
			var item_mc = this._arButtons[i];
			if(item_mc._selected){
				this.clickObj(item_mc);
				item_mc._selected = false;
				if(item_mc.over){
					item_mc.over.visible = false;
				} else if(item_mc.overSc){
					item_mc.scale.x = 1*item_mc.vX;
					item_mc.scale.y = 1;
				}
				return;
			}
		}
	}
}

ScrEnd.prototype.removeAllListener = function(){
	clearClips();
	this.interactive = false;
	this.off('mousedown', this.touchHandler);
	this.off('mousemove', this.touchHandler);
	this.off('touchstart', this.touchHandler);
	this.off('touchmove', this.touchHandler);
	this.off('touchend', this.touchHandler);
}
