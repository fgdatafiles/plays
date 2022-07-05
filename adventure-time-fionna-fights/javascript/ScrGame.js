function ScrGame() {
	PIXI.Container.call( this );
	this.init();
}

ScrGame.prototype = Object.create(PIXI.Container.prototype);
ScrGame.prototype.constructor = ScrGame;

ScrGame.prototype.init = function() {
	this.game_mc = new PIXI.Container();
	this.face_mc = new PIXI.Container();
	
	this._gameOver = false;
	this._arButtons = [];
	musicPlay("zloop");
	
	this.addChild(this.game_mc);
	this.addChild(this.face_mc);
	
	this.btnPause = addButton("btnPause", 584*scG, 20*scG, 0.5*scG);
	this.face_mc.addChild(this.btnPause);
	this._arButtons.push(this.btnPause);
	
	this.initData();
	
	this.interactive = true;
	this.on('mousedown', this.touchHandler);
	this.on('mousemove', this.touchHandler);
	this.on('mouseup', this.touchHandler);
	this.on('touchstart', this.touchHandler);
	this.on('touchmove', this.touchHandler);
	this.on('touchend', this.touchHandler);
}

// init start
ScrGame.prototype.initData = function(){
	// start new game
	g.notalking = g.summonknives = g.summonvampire = g.miss6k = g.score200k = g.shieldkills = 0;
	g.vampireattack = g.justfall = g.endgame = g.score = g.cutscenenow = g.gemgot = g.playztink = 0;
	g.delayztink = g.canbuy = g.selecteditemcost = g.shielding = g.fly = g.attackno = g.freeze = 0;
	g.udapopoutenergy = g.attackbgspeed = g.robothelp = g.vampirehelp = g.knifestorm = g.fireballs = g.weapontime = 0;
	g.energy1 = g.energy1max = 100;
	g.finn = 0;
	g.energyless = 10;
	g.nopress = 12;
	g.action = 1;
	g.enddelay = 35;
	g.addspace = 100*scG;
	// weapon type: 1=steel_sword 2=root_sword 3=crystal_sword 4=devil_sword
	g.weapon = 1;
	g.weaponpower = g.weaponpowernormal = 100;
	g.weaponrange = g.weaponrangenormal = 20;
	g.specialweapontime = 250;
	g.additionalweapontime = 100;
	// g.attackdistancemin = 100;
	g.attackdistancemin = 10*scG;
	// delay between attacks
	g.attackdelayweapon1 = 8;
	g.attackdelayweapon2 = 12;
	g.attackdelayweapon3 = 14;
	g.attackdelayweapon4 = 17;
	g.attackdelayweapon5 = 17;
	g.attackdelay = g.attackdelayweapon1;
	g.rootradiusnormal = 80*scG;
	g.rootradius = 80*scG;
	g.bumperleft = 10*scG;
	g.bumperright = 20*scG;
	g.bumpertop = 25*scG;
	g.bumperbottom = 50*scG;
	g.fallrange = 220*scG;
	g.ska = 1;
	g.additionaltime = 100;
	g.shieldtime = 250;
	g.freezetime = 250;
	g.flytime = 350;
	g.flyendtime = 70;
	g.knifestormtime = 250;
	g.fireballstime = 300;
	g.robottime = 300;
	g.vampiretime = 300;
	g.fd = g.fireballsdelay = 10;
	g.crystalhwid = 20;
	g.crystalpower = 100;
	// enemies array
	g.en = [];
	g.wavetypes = [];
	g.wavecount = [];
	g.enemyspeed = 0;
	g.enemydamage = 5;
	g.enemynext = 1400*scG;
	g.enemyspacingeasy = 100*scG;
	g.enemyspacingnormal = 150*scG;
	g.enemyspacinghard = 200*scG;
	g.enemyspacing = g.enemyspacingeasy;
	g.maxenemyonscreen = 8;
	// setup bonus
	this.setupbonus();
	// setup waves
	this.setupwaves();
	// screen limits
	g.xmin = 0;
	g.xmax = g.screenwid;
	g.ymin = 0;
	g.ymax = g.screenhei;
	g.xlimit1 = 0;
	// create player and backgrounds
	g.all = new PIXI.Container(), this.game_mc.addChild(g.all)
	g.bgd = new movingbg(), g.all.addChild(g.bgd)
	g.bgc = new movingbg(), g.all.addChild(g.bgc)
	g.bgb = new movingbg(), g.all.addChild(g.bgb)
	g.bga = new movingbg(), g.all.addChild(g.bga)
	g.m = new PIXI.Container(), g.all.addChild(g.m)
	g.fr = new PIXI.Container(), g.all.addChild(g.fr)
	g.stats = new statistics(), g.all.addChild(g.stats)
	g.m0 = new PIXI.Container(), g.m.addChild(g.m0) // layer for platforms
	g.m1 = new PIXI.Container(), g.m.addChild(g.m1) // layer for items under the player
	g.m2 = new PIXI.Container(), g.m.addChild(g.m2) // layer for player
	g.m3 = new PIXI.Container(), g.m.addChild(g.m3) // layer for items over the player
	g.m4 = new PIXI.Container(), g.m.addChild(g.m4) // layer for special effects
	g.over = new PIXI.Container(), g.all.addChild(g.over)
	// fps = new fpsbox(stage), fps.y = 30, all.addChild(fps)
	g.bga.y = g.bgb.y = g.bgc.y = g.screenhei;
	// setup enemies
	// make marshall
	g.mar = new marshall();
	g.mar.x = 200*scG;
	g.mar.y = g.hscreenhei;
	g.mar.added();
	g.m1.addChild(g.mar);
	// play music loop
	/*g.playingzloop == 2 ? musicStop() : (undefined) // stop menu loop
	if (g.playingzloop != 1) {
		g.playingzloop = 1
		musicPlay("zloop") // play music loop with zero volume
	}*/
	// make hints
	fox.pophint(g.hscreenwid, 35*scG, 1, 60, 10, g.stats);
	fox.pophint(g.hscreenwid, 35*scG, 2, 80, 75, g.stats); // xxx
	fox.pophint(g.hscreenwid, 35*scG, 4, 150, 160, g.stats); // xxx
	fox.framescreen()
	fox.fadescreen()
}

// setup bonus
ScrGame.prototype.setupbonus = function(){
	g.bonus1 = [];
	g.bonus2 = [];
	g.bonus3 = [];
	g.bonus1delay = 750;
	g.bonus2delay = 750;
	g.bonus3delay = 750;
	// bonus weapon will pop out first, followed by the rest
	g.bd1 = 0.5 * g.bonus1delay;
	if (!g.bonus1.length && g.bonus2.length > 0) {
		g.bd2 = 0.5 * g.bonus2delay;
	} else {
		g.bd2 = g.bonus2delay;
		if (!g.bonus1.length && !g.bonus2.length && g.bonus3.length > 0) {
			g.bd3 = 0.5 * g.bonus3delay;
		} else {
			g.bd3 = g.bonus3delay + 200 + fox.random(200);
		}
	}
	// test
	// g.itempaid1 = [1, 0, 0, 0]; // swords
	// g.itempaid2 = [1, 0, 0, 0]; // potions
	// g.itempaid3 = [1, 0, 0, 0]; // magic
	// g.bd2 = 50;
	// add already paid items to array
	var i = 0;
	for (i = 0; i < g.itempaid1.length; i++) {
		if (g.itempaid1[i])
			g.bonus1.push(i);
	}
	for (i = 0; i < g.itempaid2.length; i++) {
		if (g.itempaid2[i])
			g.bonus2.push(i);
	}
	for (i = 0; i < g.itempaid3.length; i++) {
		if (g.itempaid3[i])
			g.bonus3.push(i);
	}
}

// set up enemy waves
ScrGame.prototype.setupwaves = function(){
	// ---------------------------------------------------------------------------------
	// enemy types: 1:drone 2:bigdrone 3:smalldrone 4:kingdrone 5:fairyblue 6:fairyorange 7:fairyred 8:fairyblack 9:burger1 
	// 				10:burger2 11:butterfly1 12:butterfly2 13:butterfly3 14:gum1 15:gum2 16:gum3 17:bat1 18:bat2 19:bird1
	g.enemytypes = [undefined, "enemydrone1", "enemydrone2", "enemydrone3", "enemydrone4", "enemyfairy1", 
					"enemyfairy2", "enemyfairy3", "enemyfairy4", "enemyburger1", "enemyburger2", 
					"enemybutterfly1", "enemybutterfly2", "enemybutterfly3", "enemygum1", "enemygum2", 
					"enemygum3", "enemybat1", "enemybat2", "enemybird1"];
	// easy wave ---
	g.wavetypes[1] = [1]; // drones
	g.wavecount[1] = [10]; // 10 count of drones per wave
	g.wavetypes[2] = [3]; // small drones
	g.wavecount[2] = [10];
	g.wavetypes[3] = [5]; // blue fairies
	g.wavecount[3] = [10];
	g.wavetypes[4] = [14]; // green gum
	g.wavecount[4] = [10];
	g.wavetypes[5] = [15]; // yellow gum
	g.wavecount[5] = [10];
	
	// normal wave ---
	g.wavetypes[11] = [5, 6]; // blue fairies & orange fairies
	g.wavecount[11] = [10, 2];
	g.wavetypes[12] = [1, 3]; // drones & small drones
	g.wavecount[12] = [10, 8];
	g.wavetypes[13] = [3, 2]; // small drones and big drones
	g.wavecount[13] = [10, 5];
	g.wavetypes[14] = [5, 9]; // blue fairies & burgers
	g.wavecount[14] = [10, 3];
	g.wavetypes[15] = [6]; // orange fairies
	g.wavecount[15] = [12];
	g.wavetypes[16] = [16]; // red gum
	g.wavecount[16] = [12];
	g.wavetypes[17] = [14, 15]; // green gum & yellow gum
	g.wavecount[17] = [6, 6];
	g.wavetypes[18] = [17]; // small bats
	g.wavecount[18] = [12];
	
	// hard wave ---
	g.wavetypes[31] = [6, 7]; // orange fairies & red fairies
	g.wavecount[31] = [12, 3];
	g.wavetypes[32] = [5, 7]; // blue fairies & red fairies
	g.wavecount[32] = [20, 3];
	g.wavetypes[33] = [1, 4]; // normal drones & king drone
	g.wavecount[33] = [20, 1];
	g.wavetypes[34] = [2, 4]; // big drones & king drone
	g.wavecount[34] = [10, 1];
	g.wavetypes[35] = [9, 10]; // burger1 & burger2
	g.wavecount[35] = [12, 2];
	g.wavetypes[36] = [11]; // butterfly1
	g.wavecount[36] = [10];
	g.wavetypes[37] = [9, 11]; // burger1 & butterfly1
	g.wavecount[37] = [12, 2];
	g.wavetypes[38] = [3, 12]; // drone2 & butterfly2
	g.wavecount[38] = [12, 3];
	g.wavetypes[39] = [11, 13]; // butterfly1 & butterfly3
	g.wavecount[39] = [8, 2];
	g.wavetypes[40] = [17, 18]; // small bats & big bats
	g.wavecount[40] = [12, 2];
	g.wavetypes[41] = [17, 19]; // small bats & bird1
	g.wavecount[41] = [12, 2];
	// pick which ones are easy ones and hard ones
	g.easywave = [1, 2, 3, 4, 5];
	g.normalwave = [11, 12, 13, 14, 15, 16, 17, 18];
	g.hardwave = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41];
	// test
	// g.hardwave = [41];
	// make enemies array
	g.enemylist = []
	// number of easy enemies & normal enemies in the beginning
	// game will start with easy waves, then continue with normal waves, and the rest will be hard waves
	g.goeasy = 2; // normally 2
	g.gonormal = 5; // normally 5
}

// get enemy list
ScrGame.prototype.getenemylist = function(){
	var no;
	if (g.goeasy > 0) {
		g.goeasy--;
		no = fox.getrandom("easywave");
		g.enemyspacing = g.enemyspacingeasy;
	} else if (g.gonormal > 0) {
		g.gonormal--;
		no = fox.getrandom("normalwave");
		g.enemyspacing = g.enemyspacingnormal;
	} else {
		no = fox.getrandom("hardwave");
		g.enemyspacing = g.enemyspacinghard;
	}
	// number of enemies for this wave
	var enemy1type = g.wavetypes[no][0];
	var enemy1count = g.wavecount[no][0];
	var enemy2type;
	var enemy2spacing;
	// more than 1 kind of enemy in this wave?
	if (g.wavetypes[no].length > 1) {
		enemy2type = g.wavetypes[no][1];
		var enemy2count = g.wavecount[no][1];
		enemy2spacing = Math.floor(enemy1count / (enemy2count + 1));
	}
	// add enemies to enemylist array
	for (var i = 0; i < enemy1count; i++) {
		// add enemy1 type
		g.enemylist.push(enemy1type);
		// add enemy2 type (spread evenly)
		if (enemy2type && fox.isMultipleOf(i, enemy2spacing)) {
			g.enemylist.push(enemy2type);
		}
	}
}

// cek make enemies
ScrGame.prototype.makeenemy = function(){
	if (g.xmax + 100*scG > g.enemynext) {
		// make sure not too many enemies onscreen
		if (g.en.length < g.maxenemyonscreen) {
			if (!g.enemylist.length) {
				this.getenemylist();
			}
			var no = g.enemylist.shift();
			var name = g.enemytypes[no];
			var enemy = new window[name]();
			enemy.x = g.enemynext;
			enemy.y = 80*scG + fox.random(g.screenhei - 140*scG);
			enemy.added();
			g.m2.addChild(enemy);
			g.en.push(enemy);
		}
		g.enemynext += g.enemyspacing;
	}
}

ScrGame.prototype.makebonus = function(){
	g.bd1--;
	g.bd2--;
	g.bd3--;
	if (g.bd1 < 0 && g.weapon == 1 && g.bonus1.length > 0 && 
	!g.vampirehelp && !g.robothelp && !g.fireballs && !g.knifestorm) {
		// weapons
		var ran1;
		if (g.newbuy1 > -1) {
			ran1 = g.newbuy1;
			g.newbuy1 = -1;
		} else {
			ran1 = fox.getrandom("bonus1");
		}
		var bn1 = new bonus();
		bn1.category = 1;
		bn1.id = ran1;
		bn1.x = g.xmax + 40;
		bn1.y = 80 + fox.random(g.screenhei - 140);
		bn1.added();
		g.m3.addChild(bn1);
		g.en.push(bn1);
		g.bd1 = g.bonus1delay + fox.random(200);
		g.bonus1delay += 30;
		this.delaynextbonus();
	}
	if (g.bd2 < 0 && g.bonus2.length > 0) {
		// potions
		var ran2;
		if (g.newbuy2 > -1) {
			ran2 = g.newbuy2;
			g.newbuy2 = -1;
		} else {
			// player in need of energy? Greater probability to get energy bonus
			if (g.energy1 < 50 && commonclass.itempaidstatus(2, 1) && (g.xmin < 25000) && fox.random(100) > 50) {
				ran2 = 0;
			} else {
				ran2 = fox.getrandom("bonus2");
				// energy is still full
				if (ran2 == 0 && g.energy1 == g.energymax) {
					// pop another kind of potion (if available)
					ran2 = fox.getrandom("bonus2");
				}
			}
		}
		var bn2 = new bonus();
		bn2.category = 2;
		bn2.id = ran2;
		bn2.x = g.xmax + 40;
		bn2.y = 80 + fox.random(g.screenhei - 140);
		bn2.added();
		g.m3.addChild(bn2);
		g.en.push(bn2);
		g.bd2 = g.bonus2delay + fox.random(200);
		g.bonus2delay += 30;
		this.delaynextbonus();
	}
	if (g.bd3 < 0 && g.bonus3.length > 0 && g.weapon == 1) {
		// magic
		var ran3;
		if (g.newbuy3 > -1) {
			ran3 = g.newbuy3;
			g.newbuy3 = -1;
		} else {
			ran3 = fox.getrandom("bonus3");
		}
		var bn3 = new bonus();
		bn3.category = 3;
		bn3.id = ran3;
		bn3.x = g.xmax + 40;
		bn3.y = 80 + fox.random(g.screenhei - 140);
		bn3.added();
		g.m3.addChild(bn3);
		g.en.push(bn3);
		g.bd3 = g.bonus3delay + fox.random(200);
		g.bonus3delay += 30;
		this.delaynextbonus();
	}
}

ScrGame.prototype.delaynextbonus = function(){
	g.bd1 = Math.max(101, g.bd1);
	g.bd2 = Math.max(102, g.bd2);
	g.bd3 = Math.max(103, g.bd3);
}

ScrGame.prototype.movescreen = function(){
	if (g.action == 1) {
		// standing on mashall lee
		g.m.x = -g.mar.x + g.addspace;
		g.mxdiv = 15;
		g.bgdiv = 1;
	} else {
		// attacking
		g.m.x = Math.min(g.xlimit1, g.m.x + (((-g.p.x + g.addspace) - g.m.x) / g.mxdiv));
		// screen backward movement limit
		g.xlimit1 = Math.min(g.xlimit1, g.m.x + 100);
		g.mxdiv = Math.max(5, g.mxdiv - 1);
		if (g.action == 2) {
			// attacking
			g.bgdiv = 0.01 * g.attackbgspeed * g.mxdiv;
		} else if (g.action == 3) {
			// bounce back
			g.bgdiv = 0.6;
		} else if (g.action >= 8) {
			// fall
			g.bgdiv = 1;
		}
	}
	// move background
	g.bga.movebg(g.bgapic, g.bgdiv * g.bgaxs);
	g.bgb.movebg(g.bgbpic, g.bgdiv * g.bgbxs);
	g.bgc.movebg(g.bgcpic, g.bgdiv * g.bgcxs);
	g.bgd.movebg(g.bgdpic, g.bgdiv * g.bgdxs);
	// trace(g.m.x)
	g.xmin = -g.m.x;
	g.xmax = -g.m.x + g.screenwid;
}

// cek end game
ScrGame.prototype.cekendgame = function(){
	if (g.endgame) {
		g.totalgem += g.gemgot;
		this._gameOver = true;
		this.removeAllListener();
		showEnd();
	}
}

// cek bonus powers
ScrGame.prototype.cekbonuspowers = function(){
	// special weapon
	if (g.weapontime > 0) {
		g.weapontime--;
		if (!g.weapontime) {
			g.weapon = 1; // back to standard weapon
			g.weaponrange = g.weaponrangenormal;
			g.weaponpower = g.weaponpowernormal;
			g.attackdelay = g.attackdelayweapon1;
		}
	}
	// flying
	g.fly = Math.max(0, g.fly - 1);
	// freeze
	g.freeze = Math.max(0, g.freeze - 1);
	// shield
	g.shielding = Math.max(0, g.shielding - 1);
	// knife storm
	g.knifestorm = Math.max(0, g.knifestorm - 1);
	if (g.knifestorm > 40) {
		if (fox.isEven(g.knifestorm)) {
			var mc = new knife();
			mc.added();
			mc.x = g.xmin + 30 + fox.random(g.screenwid);
			mc.y = g.ymin - 10;
			g.m2.addChild(mc);
		}
	}
	// fireballs
	g.fireballs = Math.max(0, g.fireballs - 1);
	if (g.fireballs > 50) {
		g.fd--;
		if (!g.fd) {
			g.fd = g.fireballsdelay
			// keep making fireball until count 40, 
			// to give player sign that the knife storm is ending and they must attack (see: fionnabounce & fionnafall)
			var it = new fireball();
			it.x = g.xmin - 40;
			it.y = g.ymin + 50 + fox.random(g.screenhei - 100);
			g.m2.addChild(it);
			soundPlay("zfireball");
		}
	}
	// robot help
	g.robothelp = Math.max(0, g.robothelp - 1);
	// vampire help
	g.vampirehelp = Math.max(0, g.vampirehelp - 1);
}

// cek nopress
ScrGame.prototype.ceknopress = function(){
	if (g.nopress > 0) {
		g.nopress--;
	}
}

// cek sfx
ScrGame.prototype.ceksfx = function(){
	if (!g.delayztink) {
		if (g.playztink) {
			soundPlay("ztink");
			g.delayztink = 1;
			g.playztink = 0;
		}
	} else {
		g.delayztink--;
	}
	// VO
	if (g.notalking > 0) {
		g.notalking--;
	}
}

ScrGame.prototype.update = function(diffTime){
	if(options_pause || this._gameOver){
		return;
	}
	
	this.movescreen();
	if (g.action < 9) {
		this.makebonus();
		this.makeenemy();
		this.cekbonuspowers();
		this.ceksfx();
	}
	this.ceknopress();
	this.cekendgame();
}

ScrGame.prototype.clickObj = function(item_mc) {
	// soundPlay("button_click");
	var name = item_mc.name
	// console.log("clickObj:", name);
	item_mc._selected = false;
	if(item_mc.over){
		item_mc.over.visible = false;
	}
	
	if(name == "btnPause"){
		options_pause = true;
		if(ScreenPause){
			ScreenPause.visible = true;
			ScreenPause.refreshButtons();
		}
	}
}

ScrGame.prototype.checkButtons = function(evt){
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

ScrGame.prototype.touchHandler = function(evt){
	var phase = evt.type;
	
	if(phase == 'touchstart' || phase == "mousedown"){
		var mouseX = evt.data.global.x;
		var mouseY = evt.data.global.y;
		this.checkButtons(evt);
		if(this.btnPause._selected == false && g.mar){
			if (g.energy1 > 0) {
				if (!g.nopress && !(mouseX > 570 && mouseY < 30)) {
					if (g.action == 1) {
						// standing -> attack
						g.mar.state = 2;
						var xx = g.mar.x;
						var yy = g.mar.y;
						var gX = g.mar.getGlobalPosition().x;
						var gY = g.mar.getGlobalPosition().y;
						// g.mar.attack(xx + 20, yy - 40, mouseX, mouseY, gX, gY);
						g.mar.attack(xx, yy, mouseX, mouseY, gX, gY);
					} else if (g.action == 3) {
						// bouncing -> attack
						var xx = g.p.x;
						var yy = g.p.y;
						var gX = g.p.getGlobalPosition().x;
						var gY = g.p.getGlobalPosition().y;
						g.p.die();
						g.mar.attack(xx, yy, mouseX, mouseY, gX, gY);
					}
					g.nopress = g.attackdelay;
				}
			} else {
				// out of energy
				commonclass.popoutofenergy();
			}
		}
	} else if(phase=='mousemove' || phase == 'touchmove'){
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

ScrGame.prototype.removeAllListener = function(){
	this.interactive = false;
	this.off('mousedown', this.touchHandler);
	this.off('mousemove', this.touchHandler);
	this.off('mouseup', this.touchHandler);
	this.off('touchstart', this.touchHandler);
	this.off('touchmove', this.touchHandler);
	this.off('touchend', this.touchHandler);
}
