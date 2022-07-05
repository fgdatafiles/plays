function ScrShop() {
	PIXI.Container.call( this );
	this.init();
}

ScrShop.prototype = Object.create(PIXI.Container.prototype);
ScrShop.prototype.constructor = ScrShop;

ScrShop.prototype.init = function() {	
	this._arButtons = [];
	this.items = [];
	this.gemnow = 0;
	this.mouseX = 0;
	this.mouseY = 0;
	this.touchX = 0;
	this.touchY = 0;
	this.bTouch = false;
	
	var sizeTf = 18*scG;
	var sizeB = 14*scG;
	if(language.current_id == "de"){
		sizeTf = 15*scG;
	}
	if(language.current_id == "es"){
		sizeB = 13*scG;
	}
	
	var bgMenu = addObj("bgShop", _W/2, _H/2, scG);
	this.addChild(bgMenu);
	var iconGem = addObj("iconGem", 572*scG,47*scG, 0.5*scG);
	this.addChild(iconGem);
	var tfCoin = addText("0", 25*scG, "#D95E00", undefined, "right", 300*scG, 4*scG, fontMain, true, "#FFE0FB");
	tfCoin.x = 552*scG;
	tfCoin.y = 48*scG - tfCoin.height/2;
	this.addChild(tfCoin);
	this.gembox = tfCoin;
	
	this.a = new PIXI.Container();
	this.addChild(this.a);
	
	var btnSwords = addButton("btnYellow", 70*scG, 44*scG, 0.5*scG);
	btnSwords.name = "button1";
	this.addChild(btnSwords);
	this._arButtons.push(btnSwords);
	var tfSwords = addText(getText("swords"), sizeTf, "#D54000", undefined, undefined, 100*scG);
	tfSwords.y = - tfSwords.height/2;
	btnSwords.addChild(tfSwords);
	var btnPotions = addButton("btnYellow", 200*scG, 44*scG, 0.5*scG);
	btnPotions.name = "button2";
	this.addChild(btnPotions);
	this._arButtons.push(btnPotions);
	var tfPotions = addText(getText("potions"), sizeTf, "#D54000", undefined, undefined, 100*scG);
	tfPotions.y = - tfPotions.height/2;
	btnPotions.addChild(tfPotions);
	var btnSpecials = addButton("btnYellow", 330*scG, 44*scG, 0.5*scG);
	btnSpecials.name = "button3";
	this.addChild(btnSpecials);
	this._arButtons.push(btnSpecials);
	var tfSpecials = addText(getText("specials"), sizeTf, "#D54000", undefined, undefined, 100*scG);
	tfSpecials.y = - tfSpecials.height/2;
	btnSpecials.addChild(tfSpecials);
	var btnMenu = addButton("btnYellow2", 110*scG, 355*scG, 0.5*scG);
	btnMenu.name = "button4";
	this.addChild(btnMenu);
	this._arButtons.push(btnMenu);
	var tfMenu = addText(getText("main_menu"), 14*scG, "#D54000", undefined, undefined, 100*scG);
	tfMenu.y = - tfMenu.height/2;
	btnMenu.addChild(tfMenu);
	var btnStart = addButton("btnRed2", 489*scG, 355*scG, 0.5*scG);
	btnStart.name = "button5";
	this.addChild(btnStart);
	this._arButtons.push(btnStart);
	var tfStart = addText(getText("play_game"), 16*scG, "#FFFFFF", undefined, undefined, 100*scG);
	tfStart.y = - tfStart.height/2;
	btnStart.addChild(tfStart);
	var btnBuy = addButton("btnRed", 300*scG, 355*scG, 0.5*scG);
	btnBuy.name = "button6";
	this.addChild(btnBuy);
	this._arButtons.push(btnBuy);
	var tfBuy = addText(getText("buy"), sizeB, "#FFFFFF", undefined, undefined, 100*scG);
	tfBuy.y = - tfBuy.height/2;
	btnBuy.addChild(tfBuy);
	this.btnBuy = btnBuy;
	this.buybuttonpos = btnBuy.y;
	
	this.added();
	
	btnStart.interactive = true;
	btnStart.buttonMode = true;
	btnMenu.interactive = true;
	btnMenu.buttonMode = true;
	btnSwords.interactive = true;
	btnSwords.buttonMode = true;
	btnPotions.interactive = true;
	btnPotions.buttonMode = true;
	btnSpecials.interactive = true;
	btnSpecials.buttonMode = true;
	btnBuy.interactive = true;
	btnBuy.buttonMode = true;
	
	this.interactive = true;
	this.on('mousedown', this.touchHandler);
	this.on('mousemove', this.touchHandler);
	this.on('mouseup', this.touchHandler);
	this.on('touchstart', this.touchHandler);
	this.on('touchmove', this.touchHandler);
	this.on('touchend', this.touchHandler);
}

ScrShop.prototype.added = function(){
	// test
	// g.totalgem = 8000;
	if (g.gemgot > 0) {
		this.gemnow = g.totalgem - g.gemgot;
		this.countstep = Math.max(1, Math.round(g.gemgot / 30));
		g.gemgot = 0;
	} else {
		this.gemnow = g.totalgem;
	}
	
	this.items = [];
	this.gembox.setText(this.gemnow);
	this.a.x = g.itemcenter;
	this.a.y = g.hscreenhei;
	g.itemcategory = this.pressing = this.speed = 0;
	g.selecteditem = 1;
	this.xnow = this.oldx = this.a.x;
	this.xdiv = 12;
	this.switchcategory(1);
}

ScrShop.prototype.switchcategory = function(id){
	if (id != g.itemcategory) {
		g.itemcategory = id;
		g.selecteditem = -1;
		this.a.x = g.itemcenter;
		this.showitems(id);
	}
}

ScrShop.prototype.showitems = function(id){
	// clear items
	var i = 0;
	var mc;
	for (i = this.items.length - 1; i >= 0; i--) {
		this.items[i].die();
	}
	this.items = [];
	// display items based on category
	if (id == 1) {
		// swords
		this.xx = 0;
		for (i = 0; i < g.itemtype1.length; i++) {
			mc = new itembox(this.a);
			mc.itemtype = g.itemtype1[i];
			mc.itemname = g.itemname1[i];
			mc.itemcost = commonclass.getitemcost(1, i + 1);
			mc.itempaid = g.itempaid1[i];
			mc.itemcategory = 1;
			mc.itemdescription = g.itemdescription1[i];
			mc.x = this.xx + (i * g.itemspacing);
			mc.id = i;
			mc.added();
			this.a.addChild(mc);
			this.items.push(mc);
		}
	}
	if (id == 2) {
		// potions
		this.xx = 0;
		for (i = 0; i < g.itemtype2.length; i++) {
			mc = new itembox(this.a);
			mc.itemtype = g.itemtype2[i];
			mc.itemname = g.itemname2[i];
			mc.itemcost = commonclass.getitemcost(2, i + 1);
			mc.itempaid = g.itempaid2[i];
			mc.itemcategory = 2;
			mc.itemdescription = g.itemdescription2[i];
			mc.x = this.xx + (i * g.itemspacing);
			mc.id = i;
			mc.added();
			this.a.addChild(mc);
			this.items.push(mc);
		}
	}
	if (id == 3) {
		// magic
		this.xx = 0;
		for (i = 0; i < g.itemtype3.length; i++) {
			mc = new itembox(this.a);
			mc.itemtype = g.itemtype3[i];
			mc.itemname = g.itemname3[i];
			mc.itemcost = commonclass.getitemcost(3, i + 1);
			mc.itempaid = g.itempaid3[i];
			mc.itemcategory = 3;
			mc.itemdescription = g.itemdescription3[i];
			mc.x = this.xx + (i * g.itemspacing);
			mc.id = i;
			mc.added();
			this.a.addChild(mc);
			this.items.push(mc);
		}
	}
}

ScrShop.prototype.buy = function(){
	if (g.selecteditemcost != 0 && g.selecteditem >= 0 && g.canbuy) {
		// buy it
		g.totalgem -= g.selecteditemcost;
		this.gembox.setText(g.totalgem);
		if (g.itemcategory == 1) {
			g.itempaid1[g.selecteditem] += 1;
			g.newbuy1 = g.selecteditem;
			this.showitems(1);
			// CN Achievement -------------------------------------------------------
			if (g.itempaid1[0] == 3) {
				sendstat(204, 1) // max up Finn's sword
			}
			if (g.itempaid1[2] == 3) {
				sendstat(208, 1) // max up Crystal sword
			}
			// ----------------------------------------------------------------------
		}
		if (g.itemcategory == 2) {
			g.itempaid2[g.selecteditem] += 1;
			g.newbuy2 = g.selecteditem;
			this.showitems(2);
		}
		if (g.itemcategory == 3) {
			g.itempaid3[g.selecteditem] += 1;
			g.newbuy3 = g.selecteditem;
			this.showitems(3);
		}
		g.selecteditem = -1;
		saveData();
		soundPlay("zbuy");
	}
}

ScrShop.prototype.update = function(diffTime){
	if(options_pause){
		return;
	}
	
	// gem counter
	this.countgems();
	// cek touch
	this.cektouch();
	// cek can buy
	this.cekcanbuy();
}

ScrShop.prototype.countgems = function(){
	if (this.gemnow < g.totalgem) {
		this.gemnow = Math.min(g.totalgem, this.gemnow + this.countstep);
		this.gembox.setText(this.gemnow);
		soundPlay("zcount");
		if (this.gemnow == g.totalgem) {
			// end of count
			// TweenLite.to(gembox, 1, {scaleX: gembox.scaleX, scaleY: gembox.scaleY, ease: Elastic.easeOut});
			// this.gembox.scale.x = this.gembox.scale.y = 2 * this.gembox.scale.x;
			// CN Achievement -------------------------------------------------------
			if (g.totalgem >= 2500) {
				sendstat(205, 1)
			}
			// ----------------------------------------------------------------------
		}
	}
}

ScrShop.prototype.cektouch = function(){
	// scrolling items
	var mouseX = this.mouseX;
	var mouseY = this.mouseY;
	var move = false;
	
	if(options_mobile){
		this.dx = mouseX - g.hscreenwid;
		if(this.bTouch && mouseY > 90*scG && mouseY < g.screenhei - 90*scG && Math.abs(this.dx) > 70*scG){
			move = true;
		}
	} else {
		this.dx = mouseX - g.hscreenwid;
		if (mouseY > 90*scG && mouseY < g.screenhei - 90*scG && Math.abs(this.dx) > 70*scG) {
			move = true;
		}
	}
	
	if (move) {
		this.a.x -= Math.max(-20*scG, Math.min(20*scG, this.dx / 3));
		this.xdiv = 12;
	} else {
		// release
		this.a.x += this.speed;
		this.speed *= 0.8;
		this.xnow = this.a.x;
		if (Math.abs(this.speed) < 4*scG && g.selecteditem >= 0) {
			// snap to selected item
			if (this.speed > 0 && this.a.x > g.itemcenter + (0.5 * g.itemspacing) - (g.selecteditem * g.itemspacing)) {
				this.snapx = g.itemcenter - ((g.selecteditem + 1) * g.itemspacing);
			} else if (this.speed < 0 && this.a.x < g.itemcenter - (0.5 * g.itemspacing) - (g.selecteditem * g.itemspacing)) {
				this.snapx = g.itemcenter - ((g.selecteditem - 1) * g.itemspacing);
			} else {
				this.snapx = g.itemcenter - g.selecteditem * g.itemspacing;
			}
			this.a.x = this.a.x + (this.snapx - this.a.x) / this.xdiv;
			if (this.xdiv > 3) {
				this.xdiv -= 1;
			}
		}
	}
	// cek limits
	this.a.x = Math.min(g.itemcenter, Math.max(g.itemcenter - (g.itemspacing * (this.items.length - 1)), this.a.x));
}

ScrShop.prototype.cekcanbuy = function(){
	// cek can buy
	if (g.canbuy == 0) {
		this.btnBuy.y = this.buybuttonpos;
		this.btnBuy.objImg.visible = false;
		this.btnBuy.lock.visible = true;
	} else if (g.canbuy == 1) {
		this.btnBuy.y = this.buybuttonpos;
		this.btnBuy.objImg.visible = true;
		this.btnBuy.lock.visible = false;
	} else if (g.canbuy == 9) {
		this.btnBuy.y = 9999;
	}
}

ScrShop.prototype.clickObj = function(item_mc) {
	// soundPlay("button_click");
	var name = item_mc.name
	// console.log("clickObj:", name);
	
	if(name.indexOf("btn") == -1){
		item_mc._selected = false;
		if(item_mc.over){
			item_mc.over.visible = false;
		}
	}
	
	if(name == "button1"){
		this.switchcategory(1);
	} else if(name == "button2"){
		this.switchcategory(2);
	} else if(name == "button3"){
		this.switchcategory(3);
	} else if(name == "button4"){
		this.removeAllListener();
		showMenu();
	} else if(name == "button5"){
		this.removeAllListener();
		showGame();
	} else if(name == "button6"){
		this.buy();
	}
}

ScrShop.prototype.checkButtons = function(evt){
	this.mouseX = evt.data.global.x;
	this.mouseY = evt.data.global.y;
	var mouseX = this.mouseX;
	var mouseY = this.mouseY;
	for (var i = 0; i < this._arButtons.length; i++) {
		var item_mc = this._arButtons[i];
		if(hit_test_rec(item_mc, item_mc.w, item_mc.h, mouseX, mouseY)){
			var lock = false;
			if(item_mc.lock){
				lock = item_mc.lock.visible;
			}			
			if(item_mc.visible && item_mc.alpha == 1 && !lock){
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

ScrShop.prototype.touchHandler = function(evt){
	var phase = evt.type;
	if(phase=='mousemove' || phase == 'touchmove' || phase == 'touchstart'){
		this.checkButtons(evt);
		if(phase == 'touchstart'){
			this.bTouch = true;
			this.touchX = evt.data.global.x;
		}
	}else{
		var mouseX = evt.data.global.x;
		var mouseY = evt.data.global.y;
		this.bTouch = false;
		
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

ScrShop.prototype.removeAllListener = function(){
	clearClips();
	this.interactive = false;
	this.off('mousedown', this.touchHandler);
	this.off('mousemove', this.touchHandler);
	this.off('mouseup', this.touchHandler);
	this.off('touchstart', this.touchHandler);
	this.off('touchmove', this.touchHandler);
	this.off('touchend', this.touchHandler);
}
