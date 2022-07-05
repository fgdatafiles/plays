function ScrIntro1() {
	PIXI.Container.call( this );
	this.init();
}

ScrIntro1.prototype = Object.create(PIXI.Container.prototype);
ScrIntro1.prototype.constructor = ScrIntro1;

ScrIntro1.prototype.init = function() {
	this.bg_mc = new PIXI.Container();
	this.addChild(this.bg_mc);
	
	this._arButtons = [];
	g.state = 1;
	this.uda = 0;
	this.ys = -70;
	this.grav = 10;
	this.d = 220;
	var yy = 50;
	var sizeTf = 22;
	if(language.current_id == "es" ||
	language.current_id == "ru"){
		sizeTf = 17;
	} else if(language.current_id == "it" ||
	language.current_id == "tr"){
		sizeTf = 15;
	} else if(language.current_id == "fr"){
		sizeTf = 14;
	} else if(language.current_id == "de"){
		sizeTf = 13;
	}
	
	var bgMenu = addObj("bgIntro", _W/2, _H/2, 0.5*scG);
	this.addChild(bgMenu);
	
	var tfPausedD = addText(getText("the_story"), 34*scG, "#CC0000", "#ffffff", undefined, 300*scG, 10*scG);
	tfPausedD.x = 160*scG;
	tfPausedD.y = 50*scG;
	this.addChild(tfPausedD);
	var tfPaused = addText(getText("the_story"), 34*scG, "#FFE81A", "#CC0000", undefined, 300*scG, 5*scG);
	tfPaused.x = tfPausedD.x;
	tfPaused.y = tfPausedD.y+2*scG;
	this.addChild(tfPaused);
	
	var tfDesc = addText(getText("desc_story"), 14*scG, "#000000", "#ffffff", undefined, 300*scG, 3*scG);
	tfDesc.x = tfPausedD.x;
	tfDesc.y = 135*scG;
	this.addChild(tfDesc);
	
	var btnMenu = addButton("btnYellow", 75*scG, 350*scG, 0.5*scG);
	this.addChild(btnMenu);
	this._arButtons.push(btnMenu);
	var tfMenu = addText(getText("shop"), sizeTf*scG, "#D54000", undefined, undefined, 100*scG);
	tfMenu.y = - tfMenu.height/2;
	btnMenu.addChild(tfMenu);
	var btnStart = addButton("btnRed", 520*scG, 350*scG, 0.5*scG);
	this.addChild(btnStart);
	this._arButtons.push(btnStart);
	var tfStart = addText(getText("start"), sizeTf*scG, "#FFFFFF", undefined, undefined, 100*scG);
	tfStart.y = - tfStart.height/2;
	btnStart.addChild(tfStart);
	
	btnStart.interactive = true;
	btnStart.buttonMode = true;
	btnMenu.interactive = true;
	btnMenu.buttonMode = true;
	
	this.interactive = true;
	this.on('mousedown', this.touchHandler);
	this.on('mousemove', this.touchHandler);
	this.on('touchstart', this.touchHandler);
	this.on('touchmove', this.touchHandler);
	this.on('touchend', this.touchHandler);
}

ScrIntro1.prototype.clickObj = function(item_mc) {
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
		showGame();
	} else if(name == "btnYellow"){
		this.removeAllListener();
		showShop();
	}
}

ScrIntro1.prototype.checkButtons = function(evt){
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

ScrIntro1.prototype.touchHandler = function(evt){
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

ScrIntro1.prototype.removeAllListener = function(){
	clearClips();
	this.interactive = false;
	this.off('mousedown', this.touchHandler);
	this.off('mousemove', this.touchHandler);
	this.off('touchstart', this.touchHandler);
	this.off('touchmove', this.touchHandler);
	this.off('touchend', this.touchHandler);
}
