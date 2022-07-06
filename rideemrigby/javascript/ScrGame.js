function ScrGame() {
	PIXI.Container.call( this );
	this.init();
}

ScrGame.prototype = Object.create(PIXI.Container.prototype);
ScrGame.prototype.constructor = ScrGame;

var all, CNplace, a0, bga, bgb, bgc, bgd, bg0, bgsky, m, m0, m1, m2, m3, m4, page, over, it, loadbox; //MovieClip
var stat; //statistics
var allsfx, bgzpic, bgapic, bgbpic, bgcpic, bgdpic; //Array
var flip; //Boolean
var oldx, sxs, ypos, fpos, skypos, bgawid, bgbwid, bgcwid, bgdwid, bgaxdiv, bgbxdiv, bgcxdiv, bgdxdiv; //Number

ScrGame.prototype.init = function() {
	var bg = new PIXI.Graphics();
    bg.beginFill(0x000000).drawRect(0, 0, _W, _H).endFill();
    this.addChild(bg);
	
	this.bg_mc = new PIXI.Container();
	this.face_mc = new PIXI.Container();
	this.gfx_mc = new PIXI.Container();
	this.game_mc = new PIXI.Container();
	
	this.startTime = getTimer();
	this._gameOver = false;
	
	this._arButtons = [];
	// musicPlay("zloop2");
	
	g.skipmenu = 0
	g.gamemode = 2 // mode: 1=complete 2=express
	g.shakefx = 1 // enable or disable shake effect
	g.shakemax = 10 // maximum shake strength
	g.mute = g.udamusik = 0
	allsfx = ["zloop", "zloop2", "zbegin1", "zbegin2", "zfall", "zyell1", "zyell2", "zyell3", "zyell4", "zyell5", "zyell6", "zblast", "zboing", "zvending", "zsofa", "zunicorns", "zslam", "zarcade", "zfridge", "zland", "zzap", "zjump", "ztrashcans", "zrock", "zpop", "zcrates", "zsplat", "zexplosion", "zpaintcans", "zpop", "zhit1", "zbonus", "zbonus2", "zvowin1", "zvowin2", "zvowin3", "zvowin4"]
	g.screenwid = 600*scG
	g.screenhei = 400*scG
	g.hscreenwid = g.screenwid / 2
	g.hscreenhei = g.screenhei / 2
	g.playingzloop = 0
	bgapic = "ground1"
	bgbpic = "trees1"
	bgcpic = "city1"
	bgdpic = "sky1"
	bgawid = bgbwid = bgcwid = bgdwid = 600*scG;
	bgaxdiv = 1
	bgbxdiv = 0.55
	bgcxdiv = 0.4
	bgdxdiv = 0.2
	g.xspace = 80*scG;
	// load previous highscore
	g.highscore1 = login_obj["score1"] || 0
	g.highscore2 = login_obj["score2"] || 0
	
	this.addChild(this.bg_mc);
	this.addChild(this.game_mc);
	this.addChild(this.gfx_mc);
	this.addChild(this.face_mc);
	
	this.initGame();
	
	this.btnPause = addButton("btnPause", 584, 15);
	this.face_mc.addChild(this.btnPause);
	this._arButtons.push(this.btnPause);
	
	this.interactive = true;
	this.on('mousedown', this.touchHandler);
	this.on('mousemove', this.touchHandler);
	this.on('mouseup', this.touchHandler);
	this.on('touchstart', this.touchHandler);
	this.on('touchmove', this.touchHandler);
	this.on('touchend', this.touchHandler);
	window.addEventListener("keydown", this.keydown); 
	window.addEventListener("keyup", this.keyup); 
}

ScrGame.prototype.initGame = function() {	
	// start new game
	!g.level ? (g.level = g.startlevel = 1, g.startscore = g.endscore = g.vowinindex = 0, g.ptsnow = g.pts = 10) : (undefined)
	g.xmin = g.jump = g.fall = g.side = g.inv = g.endgame = g.lastob = g.intunnel = g.fly = g.bounce = g.notunnel = 0;
	g.specialch = g.specialchx = g.specialchy = g.musclewomanlanded = g.musclewomanwave = g.falling = 0
	g.p = g.hit = g.hitfx = undefined
	// CN Achievement -------------------------------------------------------
	// variables for the calculations
	g.udasodacan5000 = g.jumpedblackpipes = g.uda40k = g.uda60k = g.gotducks = g.missed = 0
	// ----------------------------------------------------------------------
	g.score = g.startscore
	g.energy = g.energymax = 100
	g.invhitdelay = 15
	g.energyless = 20
	g.energybonus = 50
	g.tunnelwid1 = 500*scG
	g.tunnelwid2 = 240*scG
	g.addtallspace = 100*scG
	g.nopress = 10
	flip = true
	g.ob = [] // obstacle array
	g.arBonuses = [] // bonuses array
	g.bd = 4 + fox.random(4)
	// probability of short obstacles with tall bonus points location
	g.popscorerandomlocation = [0, 1, 2]
	g.randomtallbonuslocation = [0, 0, 0, 1]
	g.rocktype = [1, 2, 3]
	g.rockpiecestype = [1, 2, 3, 4, 5, 5, 6, 6]
	g.arcadepiecestype = [1, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9, 10, 11, 11, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17]
	g.trashcanpiecestype = [1, 2, 3, 4, 5, 6, 7, 8]
	g.paintcanpiecestype = [1, 2, 3, 4, 1, 2, 3]
	g.fridgepiecestype = [1]
	g.sofapiecestype = [1]
	g.vendingpiecestype = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	g.cratepiecestype = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]
	g.xmax = g.screenwid
	// create player and backgrounds
	all = new PIXI.Container(), this.game_mc.addChild(all)
	bgd = new PIXI.Container(), all.addChild(bgd)
	a0 = new PIXI.Container(), all.addChild(a0)
	bgc = new PIXI.Container(), a0.addChild(bgc)
	bgb = new PIXI.Container(), a0.addChild(bgb)
	bga = new PIXI.Container(), a0.addChild(bga)
	m = new PIXI.Container(), a0.addChild(m)
	stat = new statistics(), all.addChild(stat)
	m0 = new PIXI.Container(), m.addChild(m0) // layer for platforms
	m1 = new PIXI.Container(), m.addChild(m1) // layer for items under the player
	m2 = new PIXI.Container(), m.addChild(m2) // layer for player
	m3 = new PIXI.Container(), m.addChild(m3) // layer for items over the player
	m4 = new PIXI.Container(), m.addChild(m4) // layer for special effects
	g.all = all, g.bga = bga, g.bgb = bgb, g.bgc = bgc, g.bgd = bgd, g.a0 = a0
	g.m = m, g.m0 = m0, g.m1 = m1, g.m2 = m2, g.m3 = m3, g.m4 = m4
	g.stat = stat
	g.a0pos = 410*scG
	// setup level
	this.setuplevel();
	// bonus type (1=points 2=energy 3=keyboard 4=ducks 5=bounce 6=unicorns 7=musclewoman 8=guardian)
	// for testing
	// g.bonustype = [4]
	// g.bd = 1
	// g.obstacletype = [11]
	
	// yland
	g.yland = 380*scG
	m.y = -g.yland
	m.x = bga.y = bgb.y = bgc.y = bgd.y = 0
	// normal zoom
	g.ska = g.skanow = g.normalska = 0.9
	g.skamin = 0.3
	// create muscleman & rigby
	it = new muscleman(), it.x = 400*scG, it.y = g.yland, g.m2.addChild(it), g.mm = it
	it = new rigby(), g.m2.addChild(it), g.p = it
	// VO
	g.vobegin = ["zbegin1", "zbegin2"]
	g.vowin = ["zvowin1", "zvowin2", "zvowin3", "zvowin4"]
	g.yell = ["zyell1", "zyell2", "zyell3", "zyell4", "zyell5", "zyell6"]
	fox.randomize(g.vobegin)
	fox.randomize(g.vowin)
	fox.randomize(g.yell)
	/*
	// load sfx
	!g.udamusik ? (g.udamusik = 1, loadsfx()) : (undefined)
	// CN Achievement -------------------------------------------------------
	g.level == 1 ? (_achievementSystem.achievementNotificationGameStarted()) : (undefined)*/
	this.allback()
	// CN Achievement -------------------------------------------------------
}

ScrGame.prototype.setuplevel = function(){
	fox.resetrandom()
	// bonus time
	g.level < 7 ? (g.guardiantime = g.keyboardtime = g.bouncetime = g.unicorntime = g.flytime = 180) : (g.guardiantime = g.keyboardtime = g.bouncetime = g.unicorntime = g.flytime = 150)
	// obstacle type. 1=rock 2=crates 3=trashcans 4=paintcans 5=propane 6=tunnel 7=arcade 8=fridge 9=sofa 10=vending 11=tunnel-short
	g.level == 1 ? (g.totalobs = 7, g.obstacletype = [1, 3, 4], g.startobstacle = [1], g.runspeed = 18) : (undefined)
	g.level == 2 ? (g.totalobs = 10, g.obstacletype = [1, 2, 3, 4], g.startobstacle = [2, 4, 1], g.runspeed = 18.5) : (undefined)
	g.level == 3 ? (g.totalobs = 15, g.obstacletype = [1, 2, 3, 4, 6], g.startobstacle = [6], g.runspeed = 19) : (undefined)
	g.level == 4 ? (g.totalobs = 20, g.obstacletype = [1, 2, 3, 4, 5, 6], g.startobstacle = [1], g.runspeed = 19.5) : (undefined)
	g.level == 5 ? (g.totalobs = 25, g.obstacletype = [1, 2, 3, 4, 5, 6, 7], g.startobstacle = [3], g.runspeed = 20) : (undefined)
	g.level == 6 ? (g.totalobs = 30, g.obstacletype = [1, 2, 3, 4, 5, 6, 7, 8, 11], g.startobstacle = [2], g.runspeed = 20.5) : (undefined)
	g.level == 7 ? (g.totalobs = 35, g.obstacletype = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11], g.startobstacle = [2], g.runspeed = 21) : (undefined)
	g.level == 8 ? (g.totalobs = 40, g.obstacletype = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], g.startobstacle = [2], g.runspeed = 21.5) : (undefined)
	g.level >= 9 ? (g.totalobs = 45 + ((g.level - 9) * 5), g.obstacletype = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], g.startobstacle = [], g.runspeed = 22) : (undefined)
	g.runspeed *= scG;
	// jump power
	g.level == 1 ? (g.grav = 3, g.jumppower = -26, g.jumppower2 = -40, g.jumppower3 = -56, g.obspacing = 800) : (undefined)
	g.level == 2 ? (g.grav = 3, g.jumppower = -26, g.jumppower2 = -40, g.jumppower3 = -56, g.obspacing = 700) : (undefined)
	g.level == 3 ? (g.grav = 3, g.jumppower = -26, g.jumppower2 = -40, g.jumppower3 = -56, g.obspacing = 600) : (undefined)
	g.level == 4 ? (g.grav = 3.5, g.jumppower = -28, g.jumppower2 = -41, g.jumppower3 = -56.5, g.obspacing = 560) : (undefined)
	g.level == 5 ? (g.grav = 4, g.jumppower = -30, g.jumppower2 = -42, g.jumppower3 = -57, g.obspacing = 520) : (undefined)
	g.level == 6 ? (g.grav = 4.5, g.jumppower = -31.5, g.jumppower2 = -42.5, g.jumppower3 = -57.5, g.obspacing = 500) : (undefined)
	g.level == 7 ? (g.grav = 5, g.jumppower = -33, g.jumppower2 = -43, g.jumppower3 = -58, g.obspacing = 480) : (undefined)
	g.level == 8 ? (g.grav = 5.5, g.jumppower = -35, g.jumppower2 = -43.7, g.jumppower3 = -58.5, g.obspacing = 455) : (undefined)
	g.level == 9 ? (g.grav = 6, g.jumppower = -36.5, g.jumppower2 = -44, g.jumppower3 = -59, g.obspacing = 430) : (undefined)
	g.level == 10 ? (g.grav = 6.5, g.jumppower = -38.5, g.jumppower2 = -45, g.jumppower3 = -59.5, g.obspacing = 405) : (undefined)
	g.level >= 11 ? (g.grav = 7, g.jumppower = -40, g.jumppower2 = -47, g.jumppower3 = -60, g.obspacing = 380) : (undefined)
	g.grav *= scG;
	g.jumppower *= scG;
	g.jumppower2 *= scG;
	g.jumppower3 *= scG;
	g.obspacing *= scG;
	// bonus type (1=points 2=energy 3=keyboard 4=ducks 5=bounce 6=unicorns 7=musclewoman 8=guardian)
	g.level <= 10 ? (g.bonusdelay = 10) : (g.bonusdelay = 10 + ((g.level - 10) * 3))
	g.level <= 3 ? (g.bonustype = []) : (undefined)
	g.level == 4 ? (g.bonustype = []) : (undefined)
	// differences between lite & full
	if (g.gamemode == 1){
		// next obstacle (starting obstacle) for full version
		g.level == 1 ? (g.nextob = 3000) : (undefined)
		g.level == 2 ? (g.nextob = 3500) : (undefined)
		g.level == 3 ? (g.nextob = 3500) : (undefined)
		g.level >= 4 ? (g.nextob = 2000) : (undefined)
		// show level info
		// it = new levelinfo(), g.stat.addChild(it) //TODO
		g.hintdelay = 40
	} else if (g.gamemode == 2){
		// for express version
		g.level == 1 ? (g.totalobs = 4, g.nextob = 3000) : (undefined)
		g.level == 2 ? (g.totalobs = 4) : (undefined)
		g.level == 3 ? (g.totalobs = 4) : (undefined)
		g.level == 4 ? (g.totalobs = 5) : (undefined)
		g.hintdelay = 10
	}
	// bonuses
	g.udaspecialbonus = g.udabonusenergy = 0
	g.level == 5 ? (g.bonustype = [2, 4]) : (undefined)
	g.level == 6 ? (g.bonustype = [4, 3]) : (undefined)
	g.level == 7 ? (g.bonustype = [2, 3]) : (undefined)
	g.level == 8 ? (g.bonustype = [2, 5, 4]) : (undefined)
	g.level == 9 ? (g.bonustype = [2, 5, 3]) : (undefined)
	g.level >= 10 ? (g.bonustype = [2, 3, 4, 5]) : (undefined)
	// show hint
	// xx, yy, no, timer, delay, place
	if(options_mobile){
		g.level == 1 ? (fox.pophint(g.hscreenwid+g.hscreenwid/2, 70*scG, 1, 150, g.hintdelay, g.stat)) : (undefined)
		g.level == 2 ? (fox.pophint(g.hscreenwid+g.hscreenwid/2, 70*scG, 2, 200, g.hintdelay+30, g.stat)) : (undefined)
		g.level == 3 ? (fox.pophint(g.hscreenwid-g.hscreenwid/2, 70*scG, 3, 200, g.hintdelay+40, g.stat)) : (undefined)
	} else {
		g.level == 1 ? (fox.pophint(g.hscreenwid, 70*scG, 1, 150, g.hintdelay, g.stat)) : (undefined)
		g.level == 2 ? (fox.pophint(g.hscreenwid, 70*scG, 2, 200, g.hintdelay+30, g.stat)) : (undefined)
		g.level == 3 ? (fox.pophint(g.hscreenwid, 70*scG, 3, 200, g.hintdelay+40, g.stat)) : (undefined)
	}
}

ScrGame.prototype.allback = function(){	
	soundPlay(getrandom(g.vobegin))
	// g.r.addChild(all)
	// g.r.addChild(CNplace)
}

// make items
ScrGame.prototype.make = function(id, xx, yy){
	// console.log("make:", id);
	var name = "o" + id;
	var it = undefined;
	if(name == "o6" || name == "o11"){
		it = new tunnel(name)
	} else {
		it = new ItemObject(name);
	}
	it.x = xx
	it.y = yy
	it.id = id
	it.added();
	m3.addChild(it)
}

// shake screen
ScrGame.prototype.shakescreen = function(){
	if (g.shakefx){
		if (g.shake > 0){
			flip = !flip
			if (flip){
				all.x = fox.random(Math.min(g.shakemax, g.shake))
			} else {
				all.x = -fox.random(Math.min(g.shakemax, g.shake))
			}
			if (fox.random(100) > 50){
				all.y = fox.random(Math.min(g.shakemax, g.shake))
			} else {
				all.y = -fox.random(Math.min(g.shakemax, g.shake))
			}
			g.shake--, !g.shake ? (all.x = all.y = 0) : (null)
		}
	}
}

// cek make
ScrGame.prototype.cekmake = function(){
	// make obstacles
	if (g.nextob < g.xmax + 200*scG){
		if (g.totalobs > 0){
			g.totalobs--
			var tipe
			g.startobstacle.length > 0 ? (tipe = g.startobstacle.shift()) : (tipe = fox.getrandom("obstacletype"))
			// if no tunnel..
			if (g.notunnel > 0){
				g.notunnel--
				tipe == 6 || tipe == 11 ? (tipe = 1) : (undefined)
			}
			// tall items, add more space before it
			tipe == 2 || tipe == 5 && g.obspacing < 480*scG ? (g.nextob += g.addtallspace) : (undefined)
			this.make(tipe, g.nextob, g.yland)
			g.lastob = g.nextob
			g.nextob += g.obspacing
			// tunnel, add more space after it
			tipe == 6 ? (g.nextob += g.tunnelwid1) : (undefined)
			tipe == 11 ? (g.nextob += g.tunnelwid2) : (undefined)
			// no more obstacles (end of level)
			if (!g.totalobs){
				if (g.gamemode == 1){
					// NORMAL VERSION : end the level
					g.nextob += 9999
					// make group cart picture in the background
					it = addObj("groupcart", 62*scG, -92*scG);
					it.x = g.xmax + 750*scG
					it.y = g.yland 
					g.m1.addChild(it)
				} else if (g.gamemode == 2){
					// EXPRESS VERSION : keep going with next level
					g.nextob += g.obspacing
					g.level++
					this.setuplevel()
					// console.log("Level " + g.level + " ---------------")
				}
			}
		}
	}
}

// move screen to follow player
ScrGame.prototype.movescreen = function(){
	if (g.jump || g.fall || g.fly || g.specialch == 7 || g.specialch == 8){
		// follow rigby
		if (!g.landed || g.fall || g.fly){
			oldx = m.x
			m.x = -g.p.x + g.xspace
			this.updatescreencorners()
			sxs = m.x - oldx // screen x speed
		} else {
			m.x += sxs
			sxs *= 0.75
		}
		// any special character bonuses onscreen?
		if (!g.specialch || g.fall){
			// zoom out based on player's position + future pos (5*ys)
			!g.fly ? (fpos = g.p.y + 10 * g.p.ys) : (fpos = -100)
		} else if (g.specialch == 7){
			// musclewoman onscreen
			m.x = -g.mm.x + g.xspace
			m.y = -g.mm.y
			this.updatescreencorners()
			fpos = Math.min(0, Math.max(-500, fpos - 20))
		} else if (g.specialch == 8){
			// guardian onscreen
			m.x = -g.mm.x + g.xspace
			m.y = -g.mm.y
			this.updatescreencorners()
			fpos = Math.min(0, Math.max(-220, fpos - 20))
		}
		fpos < 200 ? (g.skanow = Math.max(g.skamin, g.normalska + ((fpos - 200) / 1000))) : (g.skanow = g.normalska)
	} else {
		if (g.totalobs > 0){
			// follow muscleman
			m.x = -g.mm.x + g.xspace
		} else {
			// end of level, slowly stop screen movement
			if (g.mm.x > g.lastob + 400*scG){
				g.nopress = 999
				m.x = m.x + ((-g.lastob - 700*scG) - m.x) / 20
				// cek muscleman out of screen
				g.mm.x > g.xmax - 200*scG ? (g.endgame = 1) : (g.mm.xs += 1.5*scG)
			} else {
				m.x = -g.mm.x + g.xspace
			}
		}
		m.y = -g.mm.y
		g.xmin = -m.x
		this.updatescreencorners()
		g.skanow = g.normalska
	}
}

// update screen corners
ScrGame.prototype.updatescreencorners = function(){
	g.xmin = -m.x
	g.xmax = -m.x + (g.screenwid / g.ska) // xmax is right corner of the screen
}

// scale screen
ScrGame.prototype.scalescreen = function(){
	g.ska = g.ska + (g.skanow - g.ska) / 3
	a0.scale.y = a0.scale.x = a0.scale.x + (g.ska - a0.scale.x) / 5
	// a0.x = (1 - g.ska) * - 100 // shift x a bit
	skypos = (-g.ska) * 200 // shift sky
	bgd.y = bgd.y + (0.75 * skypos - bgd.y) / 3 
	bgc.y = bgc.y + (0.3 * skypos - bgc.y) / 3
	bgb.y = bgb.y + (0.15 * skypos - bgb.y) / 3
	a0.y = g.a0pos - a0.scale.y * 40
}

// repeat scroll background
ScrGame.prototype.repeatbg = function(t, pics, wid, xdiv){
	if(!t.udabegin){
		t.udabegin = 1
		t.wid = wid
		t.xdiv = xdiv
		t.pic = addObj(pics,0,0,scG, 1, 1, "0");
		t.no = 0
		t.las = 0
		t.arr = []
	}
	// move along with m.x
	t.x = m.x * t.xdiv
	// space that must be filled
	t.xx = -t.x + (1 / g.ska * g.screenwid) + 100*scG // for this game there's 'g.ska' variable because of the zooming
	// add right	
	while (t.xx > t.las){
		var _x = 0;
		var _y = 0;
		if(pics == "ground1"){
			_y = -80;
		} else if(pics == "trees1"){
			_y = -156;
		} else if(pics == "city1"){
			_y = -160;
		}
		t.it = addObj(pics, _x*scG, _y*scG, scG, 1, 1, "0");
		t.it.x = t.las
		t.addChild(t.it)
		t.las += t.it.width
		t.arr.push(t.it)
		t.no++, t.no >= t.pic.length ? (t.no = 0) : (undefined)
	}
	// remove out of screen bg pic
	t.arr[0].x + t.arr[0].width < -m.x * t.xdiv ? (t.removeChild(t.arr[0]), t.arr.shift()) : (undefined)
}

// cek end game
ScrGame.prototype.cekendgame = function(){
	if (g.endgame){
		this.removeAllListener();
		if (g.endgame == 1){
			// make finish info
			// it = new finishinfo(), it.x = g.hscreenwid, it.y = g.hscreenhei + 10, g.stat.addChild(it)
		} else if (g.endgame == 2){
			// game over
			// showEnd()
			addScreen("end")
		}
	}
}

ScrGame.prototype.resetTimer = function(){
	this.startTime = getTimer();
}

ScrGame.prototype.update = function(diffTime){
	if(options_pause){
		return;
	}
	
	this.movescreen()
	this.scalescreen()
	this.shakescreen()
	this.cekmake()
	this.repeatbg(bga, bgapic, bgawid, bgaxdiv)
	this.repeatbg(bgb, bgbpic, bgbwid, bgbxdiv)
	this.repeatbg(bgc, bgcpic, bgcwid, bgcxdiv)
	this.repeatbg(bgd, bgdpic, bgdwid, bgdxdiv)
	g.nopress > 0 ? (g.nopress--) : (undefined)
	g.inv > 0 ? (g.inv--) : (undefined)
	this.cekendgame()
	
	if(g.p){
		g.p.update();
	}
	if(g.mm){
		g.mm.update();
	}
	if(stat){
		stat.update();
	}
	var i = 0;
	for (i = 0; i < g.ob.length; i++) {
		var obj = g.ob[i];
		obj.update();
	}
	// console.log("g.ob.arBonuses:", g.arBonuses.length);
	for (i = 0; i < g.arBonuses.length; i++) {
		var obj = g.arBonuses[i];
		obj.update();
	}
}

ScrGame.prototype.clickObj = function(item_mc) {
	// sound_play("button_click");
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
	if(options_pause){
		return false;
	}
	var phase = evt.type;
	if(phase == 'touchstart' || phase == "mousedown"){
		this.checkButtons(evt);
		if(this.btnPause._selected == false){
			if(options_mobile){
				var mouseX = evt.data.global.x;
				if(mouseX < _W/2){
					g.key.f1 = true
				} else if(g.mm){
					g.mm.mousepress(mouseX, mouseY, phase);
				}
			} else {
				if(g.mm){
					g.mm.mousepress(mouseX, mouseY, phase);
				}
			}
		}
	} else if(phase=='mousemove' || phase == 'touchmove'){
		this.checkButtons(evt);
	} else {
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
				return false;
			}
		}
		
		if(options_mobile){
			if(mouseX < _W/2){
				g.key.f1 = false
			} else if(g.mm){
				// g.mm.mousepress(mouseX, mouseY, phase);
			}
		}
	}
}

// keydown
ScrGame.prototype.keydown = function(evt){
	if(options_pause){
		return false;
	}
	var k = evt.keyCode
	var keyp;
	// player control keys
	k == g.key1 ? (g.key.at = true) : (undefined)
	k == g.key2 ? (g.key.ba = true) : (undefined)
	k == g.key3 ? (g.key.ki = true) : (undefined)
	k == g.key4 ? (g.key.ka = true) : (undefined)
	k == g.key5 ? (g.key.f1 = true) : (undefined)
	k == g.key6 ? (g.key.f2 = true) : (undefined)
	// others
	k >= 65 && k <= 90 ? (keyp = g.letterkeys[k - 65]) : (undefined)
	k >= 48 && k <= 57 ? (keyp = g.numberkeys[k - 48]) : (undefined)
	k >= 96 && k <= 111 ? (keyp = g.numpadkeys[k - 96]) : (undefined)
	
	if (keyp){
		// Check cheat words
		g.keypressed += keyp
		// trace("g.keypressed : " + g.keypressed);
		if (g.keypressed.substr(g.keypressed.length - 3, 3) == 'NNN'){
			// skip level
		}
		g.keypressed.length > 100 ? (g.keypressed = '') : (undefined)
	}
}

// key up
ScrGame.prototype.keyup = function(evt){
	if(options_pause){
		return false;
	}
	switch (evt.keyCode){
		case g.key1:
			g.key.at = false
			break;
		case g.key2:
			g.key.ba = false
			break;
		case g.key3:
			g.key.ki = false
			break;
		case g.key4:
			g.key.ka = false
			break;
		case g.key5:
			g.key.f1 = false
			break;
		case g.key6:
			g.key.f2 = false
			break;
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
	window.removeEventListener("keydown", this.keydown); 
	window.removeEventListener("keyup", this.keyup); 
}
