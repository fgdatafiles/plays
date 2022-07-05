function ScrPause() {
	PIXI.Container.call( this );
	this.init();
}

ScrPause.prototype = Object.create(PIXI.Container.prototype);
ScrPause.prototype.constructor = ScrPause;

ScrPause.prototype.init = function() {
	this._arButtons = [];
	this.box;
	this.bWindow = false;
	var bgMenu = addObj("bgMainMenu", _W/2, _H/2, 0.5*scG);
	this.addChild(bgMenu);
	var tfPausedD = addText(getText("game_paused"), 34*scG, "#CC0000", "#ffffff", undefined, 300*scG, 10*scG);
	tfPausedD.x = 448*scG;
	tfPausedD.y = 20*scG;
	this.addChild(tfPausedD);
	var tfPaused = addText(getText("game_paused"), 34*scG, "#FFE81A", "#CC0000", undefined, 300*scG, 5*scG);
	tfPaused.x = 448*scG;
	tfPaused.y = tfPausedD.y+2*scG;
	this.addChild(tfPaused);
	
	var size = 16*scG;
	if(language.current_id == "it" ||
	language.current_id == "fr" ||
	language.current_id == "es" ||
	language.current_id == "pl"){
		size = 14*scG;
	}
	var btnSoundOn = addButton("btnYellow2", 448*scG, 233*scG, 0.5*scG);
	btnSoundOn.name = "btnSoundOn";
	this.addChild(btnSoundOn);
	this._arButtons.push(btnSoundOn);
	var tfSoundOn = addText(getText("sound_on"), size, "#D54000", undefined, undefined, 180*scG);
	tfSoundOn.y = -tfSoundOn.height/2;
	btnSoundOn.addChild(tfSoundOn);
	var btnSoundOff = addButton("btnYellow2", 448*scG, 233*scG, 0.5*scG);
	btnSoundOff.name = "btnSoundOff";
	this.addChild(btnSoundOff);
	this._arButtons.push(btnSoundOff);
	var tfSoundOff = addText(getText("sound_off"), size, "#D54000", undefined, undefined, 180*scG);
	tfSoundOff.y = -tfSoundOff.height/2;
	btnSoundOff.addChild(tfSoundOff);
	
	var btnResume = addButton("btnYellow2", 448*scG, 148*scG, 0.5*scG);
	btnResume.name = "btnResume";
	this.addChild(btnResume);
	this._arButtons.push(btnResume);
	var tfResume = addText(getText("resume"), size, "#D54000", undefined, undefined, 180*scG);
	tfResume.y = -tfResume.height/2;
	btnResume.addChild(tfResume);
	
	this.btnSoundOn = btnSoundOn;
	this.tfSoundOn = tfSoundOn;
	this.btnSoundOff = btnSoundOff;
	this.tfSoundOff = tfSoundOff;
	
	var btnQuit = addButton("btnYellow2", 448*scG, 318*scG, 0.5*scG);
	btnQuit.name = "btnQuit";
	this.addChild(btnQuit);
	this._arButtons.push(btnQuit);
	var tfQuit = addText(getText("quit_game"), size, "#D54000", undefined, undefined, 180*scG);
	tfQuit.y = -tfQuit.height/2;
	btnQuit.addChild(tfQuit);
	
	btnResume.interactive = true;
	btnResume.buttonMode = true;
	btnSoundOn.interactive = true;
	btnSoundOn.buttonMode = true;
	btnSoundOff.interactive = true;
	btnSoundOff.buttonMode = true;
	btnQuit.interactive = true;
	btnQuit.buttonMode = true;
	
	this.refreshButtons();
	
	this.interactive = true;
	this.on('mousedown', this.touchHandler);
	this.on('mousemove', this.touchHandler);
	this.on('touchstart', this.touchHandler);
	this.on('touchmove', this.touchHandler);
	this.on('touchend', this.touchHandler);
}

ScrPause.prototype.refreshButtons = function(){
	if(options_sound){
		this.btnSoundOn.visible = false;
		this.btnSoundOff.visible = true;
	} else {
		this.btnSoundOn.visible = true;
		this.btnSoundOff.visible = false;
		musicStop();
	}
}

ScrPause.prototype.clickObj = function(item_mc) {
	// sound_play("button_click");
	var name = item_mc.name
	// console.log("clickObj:", name);
	item_mc._selected = false;
	if(item_mc.over){
		item_mc.over.visible = false;
	}
	
	if(name == "btnResume"){
		this.visible = false;
		options_pause = false;
		refreshTime();
	} else if(name == "btnSoundOn"){
		options_sound = true;
		options_music = true;
		this.refreshButtons();
		musicPlay("zloop");
	} else if(name == "btnSoundOff"){
		options_sound = false;
		options_music = false;
		this.refreshButtons();
	} else if(name == "btnQuit"){
		options_pause = false;
		if(ScreenGame){
			ScreenGame.removeAllListener();
		}
		showMenu();
	}
}

ScrPause.prototype.checkButtons = function(evt){
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

ScrPause.prototype.touchHandler = function(evt){
	if(options_pause == false){
		return false;
	}
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

ScrPause.prototype.removeAllListener = function(){
	this.interactive = false;
	this.off('mousedown', this.touchHandler);
	this.off('mousemove', this.touchHandler);
	this.off('touchstart', this.touchHandler);
	this.off('touchmove', this.touchHandler);
	this.off('touchend', this.touchHandler);
}