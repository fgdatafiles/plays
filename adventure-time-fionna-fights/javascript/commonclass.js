var commonclass = function() {
   
};

// equip
commonclass.prototype.equip = function(num){
	var g = fox.globalvar;
	if (g.itemequip[num] == 0) {
		g.itemequip[num] = 1;
	} else {
		g.itemequip[num] = 0;
	}
	// check compatibility with other items
	if (num == 0)
		this.cekcompatibility(g.compatibility0);
	if (num == 1)
		this.cekcompatibility(g.compatibility1);
	if (num == 2)
		this.cekcompatibility(g.compatibility2);
	if (num == 3)
		this.cekcompatibility(g.compatibility3);
	if (num == 4)
		this.cekcompatibility(g.compatibility4);
	if (num == 5)
		this.cekcompatibility(g.compatibility5);
	if (num == 6)
		this.cekcompatibility(g.compatibility6);
	if (num == 7)
		this.cekcompatibility(g.compatibility7);
	if (num == 8)
		this.cekcompatibility(g.compatibility8);
	if (num == 9)
		this.cekcompatibility(g.compatibility9);
	g.startitemequip = fox.clone(g.itemequip);
}

// cek compatibility
commonclass.prototype.cekcompatibility = function(arr){
	var g = fox.globalvar;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			g.itemequip[i] = 0;
		}
	}
}

// show coin multiplier
commonclass.prototype.showcoinmultiplier = function(){
	var g = fox.globalvar;
	var it = new coinsmultiplier();
	it.x = g.screenwid - 60;
	it.y = g.screenhei - 60;
	g.stats.addChild(it)
	soundPlay("zmultiplier");
}

// show score multiplier
commonclass.prototype.showscoremultiplier = function(){
	var g = fox.globalvar;
	var it = new scoremultiplier();
	it.x = 60;
	it.y = g.screenhei - 60;
	g.stats.addChild(it)
	soundPlay("zmultiplier");
}

// make moving background
commonclass.prototype.makemovingbg = function(pic, dv){
	var g = fox.globalvar;
	var it = new movingbg();
	it.x = it.y = 0;
	it.pic = pic;
	it.dv = dv;
	it.cekaddbg(-1);
	g.bg.addChild(it);
	return it;
}

// play music loop
commonclass.prototype.playmusicloop = function(num){
	var g = fox.globalvar;
	if (g.playingzloop != num) {
		if (g.playingzloop > 0) {
			// stop old loop
			if (g.playingzloop == 99) {
				musicStop();
			} else {
				musicStop();
			}
		}
		// play new loop
		if (num == 99) {
			musicPlay("zloop", 1, 0, 999999);
		} else {
			musicPlay("zloop" + num, 1, 0, 999999);
		}
		g.playingzloop = num;
	}
}

// say VO
commonclass.prototype.say = function(vo){
	var g = fox.globalvar;
	if (!g.notalking) {
		if (g.finn) {
			soundPlay("zvo2" + vo);
		} else {
			soundPlay("zvo1" + vo);
		}
		g.notalking = 10;
		if (vo == "miss")
			g.notalking += 20;
	}
}

// reset game
commonclass.prototype.resetgame = function(){
	var g = fox.globalvar;
	g.totalcoins = g.score = 0;
	g.itempaid1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	g.itemequip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	g.startitemequip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	fox.savecookie("score", 0, "CNGumballClimber");
	fox.savecookie("coins", 0, "CNGumballClimber");
	fox.savecookie("item1", g.itempaid1, "CNGumballClimber");
}

// get item cost
commonclass.prototype.itempaidstatus = function(category, idx){
	var g = fox.globalvar;
	var res = 0;
	if (category == 1)
		res = g.itempaid1[idx - 1];
	if (category == 2)
		res = g.itempaid2[idx - 1];
	if (category == 3)
		res = g.itempaid3[idx - 1];
	return res;
}

// get item cost
commonclass.prototype.getitemcost = function(category, idx){
	var g = fox.globalvar;
	var res = 0;
	if (category == 1) {
		if (idx == 1)
			res = g.itemcost11[g.itempaid1[0]];
		if (idx == 2)
			res = g.itemcost12[g.itempaid1[1]];
		if (idx == 3)
			res = g.itemcost13[g.itempaid1[2]];
		if (idx == 4)
			res = g.itemcost14[g.itempaid1[3]];
	}
	if (category == 2) {
		if (idx == 1)
			res = g.itemcost21[g.itempaid2[0]];
		if (idx == 2)
			res = g.itemcost22[g.itempaid2[1]];
		if (idx == 3)
			res = g.itemcost23[g.itempaid2[2]];
		if (idx == 4)
			res = g.itemcost24[g.itempaid2[3]];
	}
	if (category == 3) {
		if (idx == 1)
			res = g.itemcost31[g.itempaid3[0]];
		if (idx == 2)
			res = g.itemcost32[g.itempaid3[1]];
		if (idx == 3)
			res = g.itemcost33[g.itempaid3[2]];
		if (idx == 4)
			res = g.itemcost34[g.itempaid3[3]];
	}
	return res;
}

// pop out of energy
commonclass.prototype.popoutofenergy = function(){
	var g = fox.globalvar;
	if (!g.udapopoutenergy) {
		g.udapopoutenergy = 1;
		g.fly = 0;
		fox.pophint(g.hscreenwid, g.hscreenhei - 10, 3, 80, 1, g.stats);
	}
}

// fadearea
commonclass.prototype.fadearea = function(x1, y1, x2, y2, place){
	// var box = new Sprite();
	// box.graphics.beginFill(0xFFFFFF);
	// box.graphics.drawRect(x1, y1, x2, y2);
	// box.graphics.endFill();
	// box.cacheAsBitmap = true;
	// EC.add(box, Event.ENTER_FRAME, fadeloop);
	// function fadeloop(e:Event) {
		// box.alpha -= 0.25
		// box.alpha <= 0 ? (EC.remove(box), place.removeChild(box), box = null) : (null);
	// }
	// place.addChild(box);
}

// pop message
commonclass.prototype.popmsg = function(place, xx, yy, say){
	var g = fox.globalvar;
	var it = new popmessage(xx, yy, say);
	place.addChild(it);
}

// pop hit
commonclass.prototype.pophit = function(x1, y1, n, sk){
	var g = fox.globalvar
	var it = new pophits(x1, y1, n, sk)
	g.stats.addChild(it)
}

// pop bonus name
commonclass.prototype.popbonusnm = function(xx, yy, st){
	var g = fox.globalvar
	var it = new popbonusname(xx, yy, st)
	g.stats.addChild(it)
}

// pop score
commonclass.prototype.popskor = function(xx, yy, sk){
	var g = fox.globalvar
	var it = new popscore(xx, yy, sk)
	g.m4.addChild(it)
}
