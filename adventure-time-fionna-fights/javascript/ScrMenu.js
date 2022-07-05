function ScrMenu() {
	PIXI.Container.call( this );
	this.init();
}

ScrMenu.prototype = Object.create(PIXI.Container.prototype);
ScrMenu.prototype.constructor = ScrMenu;

ScrMenu.prototype.init = function() {
	this.bg_mc = new PIXI.Container();
	this.addChild(this.bg_mc);
	this._arButtons = [];
	musicPlay("zloop2");
	
	var bgMenu = addObj("bgMenu", _W/2, _H/2, 0.5*scG);
	this.bg_mc.addChild(bgMenu);
	var id = language.current_id;
	if(id == "es"){
		id = "en";
	}
	
	var logo = addObj("logo_"+id, 0, 0, 0.4*scG);
	if(logo == undefined){
		logo = addObj("logo_en", 0, 0, 0.5*scG);
	}
	logo.setReg0();
	logo.x = 30*scG;
	logo.y = 10*scG;
	this.addChild(logo);
	
	var btnMenu = addButton("btnYellow", 75*scG, 350*scG, 0.5*scG);
	this.addChild(btnMenu);
	this._arButtons.push(btnMenu);
	var tfMenu = addText(getText("menu"), 22*scG, "#D54000", undefined, undefined, 100*scG);
	tfMenu.y = - tfMenu.height/2;
	btnMenu.addChild(tfMenu);
	var btnStart = addButton("btnRed", 520*scG, 350*scG, 0.5*scG);
	this.addChild(btnStart);
	this._arButtons.push(btnStart);
	var tfStart = addText(getText("play"), 16*scG, "#FFFFFF", undefined, undefined, 100*scG);
	tfStart.y = - tfStart.height/2;
	btnStart.addChild(tfStart);
	
    var realW = window.innerWidth;
    var realH = window.innerHeight;
	if(ScreenLock){
		if(realW <realH){
			options_pause = true;
			ScreenLock.visible = true;
		}
	}
	
	// var strSize = Math.round(renderer.view.style.width) + "x" +
					// Math.round(renderer.view.style.height)
	// var tfTest = addText(strSize, 16*scG, "#FFFFFF", "#000000", undefined, 600*scG);
	// tfTest.x = _W/2;
	// tfTest.y = _H/2;
	// this.addChild(tfTest);
	// this.tfTest = tfTest;
	
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

ScrMenu.prototype.update = function(diffTime){
	if(options_pause){
		return;
	}
	// var strSize = renderer.view.style.width + "*" +
					// renderer.view.style.height + "\n" +
					// window.innerWidth + "*" +
					// window.innerHeight + "\n" + 
					// globalScale
	// this.tfTest.setText(strSize);
}

ScrMenu.prototype.clickObj = function(item_mc) {
	// soundPlay("button_click");
	var name = item_mc.name
	// console.log("clickObj:", name);
	item_mc._selected = false;
	if(item_mc.over){
		item_mc.over.visible = false;
	}
	
	if(name == "btnRed"){
		this.removeAllListener();
		showInto1();
	} else if(name == "btnYellow"){
		this.removeAllListener();
		showMainMenu();
	}
}

ScrMenu.prototype.checkButtons = function(evt){
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

ScrMenu.prototype.touchHandler = function(evt){
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

ScrMenu.prototype.removeAllListener = function(){
	this.interactive = false;
	this.off('mousedown', this.touchHandler);
	this.off('mousemove', this.touchHandler);
	this.off('touchstart', this.touchHandler);
	this.off('touchmove', this.touchHandler);
	this.off('touchend', this.touchHandler);
}
