function ScrEnd() {
	PIXI.Container.call( this );
	this.init();
}

ScrEnd.prototype = Object.create(PIXI.Container.prototype);
ScrEnd.prototype.constructor = ScrEnd;

ScrEnd.prototype.init = function() {
	this._arButtons = [];
	this.z = {}
	
	// var say = "tfSay1"; // THAT'S TOO BAD
	var say = "thats_to_bad"; // THAT'S TOO BAD
	var day = "";
	
	var comments = ["nice_hustle", "awesome_bro", "wooooooo", "you_are_master"]
	fox.randomize(comments)
	g.level <= 3 ? (say = "later_grandma") : (undefined) // LATER, GRANDMA!
	g.level == 4 ? (say = "not_bad_rig") : (undefined) // NOT BAD, RIG-BABY!
	g.level == 5 ? (say = "never_quit") : (undefined) // NEVER QUIT!
	g.level == 6 ? (say = "now_youre_getting_it") : (undefined) //NOW YOU'RE GETTING IT
	// g.level <= 3 ? (say = "tfSay2") : (undefined) // LATER, GRANDMA!
	// g.level == 4 ? (say = "tfSay3") : (undefined) // NOT BAD, RIG-BABY!
	// g.level == 5 ? (say = "tfSay4") : (undefined) // NEVER QUIT!
	// g.level == 6 ? (say = "tfSay5") : (undefined) //NOW YOU'RE GETTING IT
	g.level > 6 ? (say = comments.pop()) : (undefined)
	
	var bgMenu = addObj("bgEnd", _W/2, _H/2, scG);
	this.addChild(bgMenu);
	
	this.a = new PIXI.Container();
	this.a.x = 400*scG;
	this.a.y = 70*scG;
	this.addChild(this.a);
	
	
	// var tf1 = addObj(say);
	var tf1 = addGlowText(getText(say), 32, "#CC0000", "#000000", "center", 350, 5, 1, fontLubalin, true);
	tf1.x = 400*scG-400*scG;
	tf1.y = 58*scG-70*scG - tf1.height/2;
	this.a.addChild(tf1);
	var tf2 = addGlowText("", 30, "#FFFFFF", "#000000", "center", 450, 6, 1, fontLubalin, true);
	tf2.x = 400*scG-400*scG;
	tf2.y = 99*scG-70*scG - tf2.height/2;
	this.a.addChild(tf2);
	// var tf3 = addObj("tfYourScore");
	var str3 = getText("your_score")+" :";
	if(language.current_id == "ar"){
		str3 = ":"+getText("your_score");
	}
	var tf3 = addGlowText(str3, 20, "#FF9900", "#000000", "center", 450, 5, 1, fontLubalin, true);
	tf3.x = 400*scG;
	tf3.y = 153*scG - tf3.height/2;
	this.addChild(tf3);
	var tf4 = addGlowText(g.score || "0", 60, "#FFFFFF", "#000000", "center", 450, 6, 1, fontLubalin, true);
	tf4.x = 400*scG;
	tf4.y = 201*scG - tf4.height/2;
	this.addChild(tf4);
	var tf5 = addGlowText(getText("best_score"), 22, "#FFCC00", "#000000", "center", 450, 4, 1, fontLubalin, true);
	tf5.x = 400*scG;
	tf5.y = 255*scG - tf5.height/2;
	this.addChild(tf5);
	var tf6 = addGlowText("0", 33, "#FFFFCC", "#000000", "center", 450, 6, 1, fontLubalin, true);
	tf6.x = 400*scG;
	tf6.y = 287*scG - tf6.height/2;
	this.addChild(tf6);
	
	if (g.gamemode == 1){
		// Complete mode
		g.level > 1 ? (day = " " + getText("miles")) : (day = " "+getText("mile"))
		tf2.setText(getText("you_made_it")+" " + g.level + day)
		if(language.current_id == "ar"){
			tf5.setText(":"+getText("best_score"))
		} else {
			tf5.setText(getText("best_score")+":")
		}
		tf6.setText(g.highscore1)
		if (g.score > g.highscore1){
			g.highscore1 = g.score
			login_obj["score1"] = g.score;
			saveData();
			if(language.current_id == "ar"){
				tf5.setText(":"+getText("previous_best"))
			} else {
				tf5.setText(getText("previous_best")+":")
			}
		}
	} else {
		// Express mode
		tf2.setText("")
		this.a.y += 20*scG
		tf3.y -= 10*scG
		tf4.y -= 10*scG
		tf5.y -= 10*scG
		tf6.y -= 10*scG
		if(language.current_id == "ar"){
			tf5.setText(":"+getText("best_score"))
		} else {
			tf5.setText(getText("best_score")+":")
		}
		tf6.setText(g.highscore2)
		if (g.score > g.highscore2){
			g.highscore2 = g.score
			login_obj["score2"] = g.score;
			saveData();
			if(language.current_id == "ar"){
				tf5.setText(":"+getText("previous_best"))
			} else {
				tf5.setText(getText("previous_best")+":")
			}
		}
	}
	
	if (g.gamemode == 2){
		soundPlay(this.getrandomvowin())
		// soundPlay(getrandom(g.vobegin))
	}
	fox.initjiggle(this.a, 2, 1, 0.5, 0.8)
	this.d = 80/**/
	
	var btnStart = addButton("btnDefault2", 400, 348, 0.5);
	this.addChild(btnStart);
	this._arButtons.push(btnStart);
	var tfStart = addGlowText(getText("play_again"), 20, "#FFCC00", "#00000", "center", 170, 3);
	tfStart.y = -tfStart.height/2;
	btnStart.addChild(tfStart);
	// var tfStart = addObj("tfPlayAgain", 400, 348, 0.5);
	// tfStart.rotation = btnStart.rotation;
	// this.addChild(tfStart);
	
	btnStart.interactive = true;
	btnStart.buttonMode = true;
	
	this.interactive = true;
	this.on('mousedown', this.touchHandler);
	this.on('mousemove', this.touchHandler);
	this.on('touchstart', this.touchHandler);
	this.on('touchmove', this.touchHandler);
	this.on('touchend', this.touchHandler);
}

// get random VO win
ScrEnd.prototype.getrandomvowin = function(){
	g.vowinindex++, g.vowinindex >= g.vowin.length ? (g.vowinindex = 0, fox.randomize(g.vowin)) : (undefined)
	return (g.vowin[g.vowinindex])
}

ScrEnd.prototype.update = function(diffTime){
	this.d--
	if (this.d > 0){
		fox.jiggle(this.a)
	}
}

ScrEnd.prototype.clickObj = function(item_mc) {
	// sound_play("button_click");
	var name = item_mc.name
	// console.log("clickObj:", name);
	item_mc._selected = false;
	if(item_mc.over){
		item_mc.over.visible = false;
	}
	
	if(name == "btnDefault2"){
		g.level = 0;
		this.removeAllListener();
		showGame();
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
	this.interactive = false;
	this.off('mousedown', this.touchHandler);
	this.off('mousemove', this.touchHandler);
	this.off('touchstart', this.touchHandler);
	this.off('touchmove', this.touchHandler);
	this.off('touchend', this.touchHandler);
}
