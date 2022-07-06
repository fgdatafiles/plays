function ScrPause() {
	PIXI.Container.call( this );
	this.init();
}

ScrPause.prototype = Object.create(PIXI.Container.prototype);
ScrPause.prototype.constructor = ScrPause;

ScrPause.prototype.init = function() {
	this._arButtons = [];
	var bgMenu = addObj("sky1", _W/2, _H/2, scG);
	this.addChild(bgMenu);
	var tfPaused = addGlowText(getText("game_paused"), 40, "#FF4A00", "#000000", "center", 500, 5);
	tfPaused.x = _W/2;
	tfPaused.y = _H/2-120*scG-tfPaused.height/2;
	this.addChild(tfPaused);
	
	var btnResume = addButton("btnDefault2", 301, 163, 0.5);
	btnResume.name = "btnResume";
	btnResume.rotation = -2 * Math.PI / 180;
	this.addChild(btnResume);
	this._arButtons.push(btnResume);
	var tfResume = addGlowText(getText("resume"), 20, "#FFFFFF", "#000000", "center", 160, 3);
	tfResume.y = -tfResume.height/2;
	btnResume.addChild(tfResume);
	
	var btnSoundOn = addButton("btnDefault2", 299, 233, 0.5);
	btnSoundOn.name = "btnSoundOn";
	this.addChild(btnSoundOn);
	this._arButtons.push(btnSoundOn);
	var tfSoundOn = addGlowText(getText("sound_on"), 18, "#FFFFFF", "#000000", "center", 160, 3);
	tfSoundOn.y = -tfSoundOn.height/2;
	btnSoundOn.addChild(tfSoundOn);
	var btnSoundOff = addButton("btnDefault2", 299, 233, 0.5);
	btnSoundOff.name = "btnSoundOff";
	this.addChild(btnSoundOff);
	this._arButtons.push(btnSoundOff);
	var tfSoundOff = addGlowText(getText("sound_off"), 18, "#FFFFFF", "#000000", "center", 160, 3);
	tfSoundOff.y = -tfSoundOff.height/2;
	btnSoundOff.addChild(tfSoundOff);
	this.btnSoundOn = btnSoundOn;
	this.btnSoundOff = btnSoundOff;
	
	var btnQuit = addButton("btnDefault2", 301, 304, 0.5);
	btnQuit.name = "btnQuit";
	btnQuit.rotation = 2 * Math.PI / 180;
	this.addChild(btnQuit);
	this._arButtons.push(btnQuit);
	var tfQuit = addGlowText(getText("quit_game"), 20, "#FFFFFF", "#000000", "center", 160, 3);
	tfQuit.y = -tfQuit.height/2;
	btnQuit.addChild(tfQuit);
	// var tfQuit = addObj("tfQuitGame", 301, 304, 0.5);
	// tfQuit.rotation = btnQuit.rotation;
	// this.addChild(tfQuit);
	
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
		this.playMusic();
	} else {
		this.btnSoundOn.visible = true;
		this.btnSoundOff.visible = false;
		musicStop();
	}
}

ScrPause.prototype.playMusic = function(){
	/*if(currentScreen){
		soundManager.currentMusic = "none";
		if(currentScreen.name == "game"){
			if(currentScreen.name == "game"){
				musicPlay("zloop2");
			} else {
				musicPlay("zloop");
			}
		} else {
			musicPlay("zloop");
		}
	}*/
	musicPlay("zloop2");
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
	} else if(name == "btnSoundOff"){
		options_sound = false;
		options_music = false;
		this.refreshButtons();
	} else if(name == "btnQuit"){
		options_pause = false;
		g.level = 0;
		if(ScreenGame){
			ScreenGame.removeAllListener();
		}
		showMenu();
		this.playMusic();
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