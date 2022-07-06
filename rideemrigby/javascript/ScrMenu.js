function ScrMenu(value) {
	PIXI.Container.call( this );
	this.init();
}

ScrMenu.prototype = Object.create(PIXI.Container.prototype);
ScrMenu.prototype.constructor = ScrMenu;

ScrMenu.prototype.init = function() {
	this.bg_mc = new PIXI.Container();
	this.startTime = getTimer();
	this._arButtons = [];
	this._arTrees = [];
	
	var bgMenu = addObj("bgMenu", _W/2, _H/2, scG);
	this.addChild(bgMenu);
	this.addChild(this.bg_mc);
	var sc = 0.5;
	if(language.current_id == "ar"){
		sc = 0.4;
	} else if(language.current_id == "en"){
		sc = 1;
	}
	var logo = addObj("logo_"+language.current_id, 415*scG, 85*scG, sc*scG);
	if(logo == undefined){
		logo = addObj("logo_en", 415*scG, 85*scG);
	}
	this.addChild(logo);
	
	this.addTrees(50*scG, 0.3*scG)
	this.addTrees(150*scG, 0.5*scG)
	this.addTrees(315*scG, 0.75*scG)
	this.addTrees(550*scG, 1*scG)
	this.addTrees(800*scG, 1*scG)
	
	var fastLines = addObj("fastLines", _W/2, 330*scG, scG);
	fastLines.img.gotoAndPlay(1);
	fastLines.img.animationSpeed = 0.5;
	this.addChild(fastLines);
	var titleAni = addObj("titleAni", 215*scG, 210*scG, scG);
	titleAni.img.gotoAndPlay(1);
	titleAni.img.animationSpeed = 0.5;
	this.addChild(titleAni);
	
	var btnStart = addButton("btnDefault", 503, 350, 0.5);
	btnStart.rotation = 3 * Math.PI / 180;
	this.addChild(btnStart);
	this._arButtons.push(btnStart);
	var tfStart = addGlowText(getText("start"), 26, "#FF0000", "#000000", "center", 200, 4);
	tfStart.y = -tfStart.height/2;
	btnStart.addChild(tfStart);
	var tfStart = addGlowText(getText("start"), 26, "#FFFFFF", "#FF0000", "center", 200, 4, false, undefined, true);
	tfStart.y = -tfStart.height/2+scG;
	btnStart.addChild(tfStart);
	
    var realW = window.innerWidth;
    var realH = window.innerHeight;
	if(ScreenLock){
		if(realW <realH){
			options_pause = true;
			ScreenLock.visible = true;
		}
	}
	
	btnStart.interactive = true;
	btnStart.buttonMode = true;
	
	this.interactive = true;
	this.on('mousedown', this.touchHandler);
	this.on('mousemove', this.touchHandler);
	this.on('touchstart', this.touchHandler);
	this.on('touchmove', this.touchHandler);
	this.on('touchend', this.touchHandler);
}

ScrMenu.prototype.addTrees = function(xx, ska){
	var _x = xx || _W;
	var _ska = ska || 2*scG
	var tree = addObj("titletrees1", _x, 217*scG, 1, _ska, _ska);
	tree.setRegY(1);
	tree.ska =_ska;
	tree.dead = false;
	tree.speed = 0.5*scG;
	this.bg_mc.addChild(tree)
	
	this._arTrees.push(tree);
}

ScrMenu.prototype.addNewTrees = function(){
	var tree = undefined;
	for (i = 0; i < this._arTrees.length; i ++) {
		var obj = this._arTrees[i];
		if(obj.dead){
			tree = obj;
			break;
		}
	}
	
	if(tree == undefined){
		this.addTrees(800*scG, 1*scG);
	} else {
		obj.dead = false;
		obj.visible = true
		obj.ska = 1*scG;
		obj.scale.x = obj.ska;
		obj.scale.y = obj.ska;
		obj.x = 800*scG;
		obj.alpha = 1;
	}
}

ScrMenu.prototype.resetTimer = function(){
	this.startTime = getTimer();
}

ScrMenu.prototype.update = function(diffTime){
	if(options_pause){
		return;
	}
	
	var maxX = 0;
	for (i = 0; i < this._arTrees.length; i ++) {
		var obj = this._arTrees[i];
		if(obj.x > -obj.w/2){
			if(obj.x < 550*scG){
				obj.ska -= 0.012*obj.speed;
				obj.ska = Math.max(obj.ska, 0.3)
				obj.scale.x = obj.ska;
				obj.scale.y = obj.ska;
				if(obj.x < 100*scG){
					var alp = obj.alpha - 0.075;
					obj.alpha = Math.max(0, alp);
				}
			}
			obj.x -= obj.speed*obj.ska*diffTime;
			if(obj.x>maxX){
				maxX = obj.x;
			}
		} else {
			obj.dead = true;
			obj.visible = false
		}
	}
	
	if(maxX < 560*scG){
		this.addNewTrees();
	}
}

ScrMenu.prototype.clickObj = function(item_mc) {
	// soundPlay("button_click");
	var name = item_mc.name
	// console.log("clickObj:", name);
	item_mc._selected = false;
	if(item_mc.over){
		item_mc.over.visible = false;
	}
	
	if(name == "btnDefault"){
		this.removeAllListener();
		showInsrt();
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
