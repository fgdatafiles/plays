function ScrInstr() {
	PIXI.Container.call( this );
	this.init();
}

ScrInstr.prototype = Object.create(PIXI.Container.prototype);
ScrInstr.prototype.constructor = ScrInstr;

ScrInstr.prototype.init = function() {
	this.startTime = getTimer();
	this._arButtons = [];
	this._arTrees = [];
	
	var bgMenu = addObj("bgInstruction", _W/2, _H/2, 0.5*scG);
	this.addChild(bgMenu);
	
	var strTap = getText("click_to_jump_all");
	if(options_mobile){
		strTap = getText("tap_to_jump_all");
	}
	
	var arText = ["Muscle Man's your new mentor. \n Hang on tight, because it's \n about to get real.", 
	"Click to jump. \n Double click to double jump. \n Press Space to slide to the side."];
	arText = [getText("muscle_man_mentor") + " " + getText("hang_on_tight"), strTap];
	
	var styleNathanW = {
		font : 16*scG + "px " + fontLubalin,
		fill : "#FFFFFF",
		align : "center",
		wordWrapWidth : 320*scG,
		wordWrap : true,
		stroke : "#000000",
		strokeThickness : 1*scG,
		dropShadow : true,
		dropShadowBlur: 0,
		dropShadowColor : '#000000',
		dropShadowAngle : Math.PI / 4,
		dropShadowDistance : 2*scG
	};
	var styleNathanY = {
		font : 16*scG + "px " + fontLubalin,
		fill : "#FFCC00",
		align : "center",
		wordWrapWidth : 320*scG,
		wordWrap : true,
		stroke : "#000000",
		strokeThickness : 1*scG,
		dropShadow : true,
		dropShadowBlur: 0,
		dropShadowColor : '#000000',
		dropShadowAngle : Math.PI / 4,
		dropShadowDistance : 2*scG
	};
	var styleNathanT = {
		font : 36*scG + "px " + fontLubalin,
		fill : "#FF4A00",
		align : "center",
		stroke : "#000000",
		strokeThickness : 4*scG,
		dropShadow : true,
		dropShadowBlur: 0,
		dropShadowColor : '#000000',
		dropShadowAngle : Math.PI / 4,
		dropShadowDistance : 2*scG
	};
	
	var tfTitle = new PIXI.Text(getText("instroctions"), styleNathanT);
	tfTitle.x = Math.ceil(400*scG-tfTitle.width/2);
	tfTitle.y = 30*scG;
	this.addChild(tfTitle);
	var tf1 = new PIXI.Text(arText[0], styleNathanW);
	tf1.x = Math.ceil(400*scG-tf1.width/2);
	tf1.y = 100*scG;
	this.addChild(tf1);
	var tf2 = new PIXI.Text(arText[1], styleNathanY);
	tf2.x = Math.ceil(400*scG-tf2.width/2);
	tf2.y = 190*scG;
	this.addChild(tf2);
	
	var btnStart = addButton("btnDefault", 400, 345, 0.5);
	btnStart.rotation = -2 * Math.PI / 180;
	this.addChild(btnStart);
	this._arButtons.push(btnStart);
	var tfStart = addGlowText(getText("play"), 26, "#FF0000", "#000000", "center", 200, 4);
	tfStart.y = -tfStart.height/2;
	btnStart.addChild(tfStart);
	var tfStart = addGlowText(getText("play"), 26, "#FFFFFF", "#FF0000", "center", 200, 4, false, undefined, true);
	tfStart.y = -tfStart.height/2;
	btnStart.addChild(tfStart);
	
	btnStart.interactive = true;
	btnStart.buttonMode = true;
	tfStart.interactive = true;
	tfStart.buttonMode = true;
	
	this.interactive = true;
	this.on('mousedown', this.touchHandler);
	this.on('mousemove', this.touchHandler);
	this.on('touchstart', this.touchHandler);
	this.on('touchmove', this.touchHandler);
	this.on('touchend', this.touchHandler);
}

ScrInstr.prototype.clickObj = function(item_mc) {
	// sound_play("button_click");
	var name = item_mc.name
	// console.log("clickObj:", name);
	item_mc._selected = false;
	if(item_mc.over){
		item_mc.over.visible = false;
	}
	
	if(name == "btnDefault"){
		this.removeAllListener();
		showGame();
	}
}

ScrInstr.prototype.checkButtons = function(evt){
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

ScrInstr.prototype.touchHandler = function(evt){
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

ScrInstr.prototype.removeAllListener = function(){
	this.interactive = false;
	this.off('mousedown', this.touchHandler);
	this.off('mousemove', this.touchHandler);
	this.off('touchstart', this.touchHandler);
	this.off('touchmove', this.touchHandler);
	this.off('touchend', this.touchHandler);
}
