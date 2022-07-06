function ItemObject(value) {
	PIXI.Container.call( this );
	this.init(value);
}

ItemObject.prototype = Object.create(PIXI.Container.prototype);
ItemObject.prototype.constructor = ItemObject;

ItemObject.prototype.init = function(value) {
	this.zone = new PIXI.Graphics();
    this.zone.beginFill(0xCC0000).drawRect(0, 0, 20*scG, 20*scG).endFill();
	this.zone.visible = false;
    this.addChild(this.zone);
	
	this.z = {};
	
	g.ob.push(this)
	this.nick = value;
	this.state = 1
	this.d = 1 // delay after crash before die
	this.udahit = 0
	this.tall = 0
	this.setsize(55*scG, 50*scG)
	this.damage = g.energyless
	this.shakepower = 3
	this.showzone = 0
	this.piecestotal = 40
	this.pieceswid = 60*scG
	this.pieceshei = 60*scG
	
	var _x = 0;
	var _y = 0;
	
	switch (value){
		case "o1":
			_x = 1*scG;
			_y = -20*scG;
			this.sfx = "zrock"
			this.setsize(60*scG, 40*scG)
			this.showzone = 0
			// pieces info
			this.piecesname = "rockpieces"
			this.piecestotal = 40
			this.pieceswid = 60*scG
			this.pieceshei = 60*scG
			break;
		case "o2":
			_x = 40*scG;
			_y = -140*scG;
			this.sfx = "zcrates"
			this.setsize(80*scG, 270*scG)
			this.showzone = 0
			this.shakepower = 8
			this.tall = 1
			// pieces info
			this.piecesname = "cratepieces"
			this.piecestotal = 60
			this.pieceswid = 100*scG
			this.pieceshei = 50*scG
			break;
		case "o3":
			_x = -10*scG;
			_y = -28*scG;
			this.sfx = "ztrashcans"
			this.setsize(90*scG, 55*scG)
			this.showzone = 1
			// pieces info
			this.piecesname = "trashcanpieces"
			this.piecestotal = 9
			this.pieceswid = 60*scG
			this.pieceshei = 60*scG
			break;
		case "o4":
			_x = -3*scG;
			_y = -33*scG;
			this.sfx = "zpaintcans"
			this.setsize(60*scG, 65*scG)
			this.showzone = 0
			// pieces info
			this.piecesname = "paintcanpieces"
			this.piecestotal = 7
			this.pieceswid = 60*scG
			this.pieceshei = 60*scG
			break;
		case "o5":
			_x = 1*scG;
			_y = -85*scG;
			this.sfx = "zexplosion"
			this.setsize(60*scG, 80*scG)
			this.showzone = 0
			this.tall = 1
			this.shakepower = 12
			this.d = 2
			break;
		case "o7":
			_x = 0;
			_y = -65*scG;
			this.sfx = "zarcade"
			this.setsize(70*scG, 140*scG)
			this.showzone = 0
			// pieces info
			this.piecesname = "arcadepieces"
			this.piecestotal = 50
			this.pieceswid = 60*scG
			this.pieceshei = 70*scG
			break;
		case "o8":
			_x = 0;
			_y = -65*scG;
			this.sfx = "zfridge"
			this.setsize(60*scG, 120*scG)
			this.showzone = 0
			// pieces info
			this.piecesname = "fridgepieces"
			this.piecestotal = 1
			this.pieceswid = 60*scG
			this.pieceshei = 70*scG
			break;
		case "o9":
			_x = 10*scG;
			_y = -47*scG;
			this.sfx = "zsofa"
			this.setsize(120*scG, 80*scG)
			this.showzone = 1
			// pieces info
			this.piecesname = "sofapieces"
			this.piecestotal = 1
			this.pieceswid = 60*scG
			this.pieceshei = 70*scG
			break;
		case "o10":
			_x = 5*scG;
			_y = -80*scG;
			this.sfx = "zvending"
			this.setsize(70*scG, 120*scG)
			this.showzone = 0
			// pieces info
			this.piecesname = "vendingpieces"
			this.piecestotal = 30
			this.pieceswid = 60*scG
			this.pieceshei = 70*scG
			break;
	}
	
	var obj = addObj(value, _x, _y, 0.5*scG);
    this.addChild(obj);
}

// added
ItemObject.prototype.added = function() {
	this.setzone(-this.hwid, -this.hei, this.wid, this.hei, this.showzone)
	// make bonus item
	var makebonus = 0
	g.bd--
	if (g.bd <= 0){
		if (g.totalobs > 8 && !this.tall && g.bonustype.length > 0){
			makebonus = 1
			g.bd = g.bonusdelay + fox.random(3)
		}
	}
	if (makebonus){
		// pick a bonus
		var id = fox.getrandom("bonustype")
		// full energy?
		id == 2 && g.energy == g.energymax ? (id = fox.getrandom("bonustype")) : (undefined)
		id == 2 && g.energy == g.energymax ? (id = fox.getrandom("bonustype")) : (undefined)
		// for level 5,6,7 make different special characters [3, 4, 5] after the first special characters
		if (id != 2 && (g.level == 5 || g.level == 6 || g.level == 7)){
			if (!g.udaspecialbonus){
				g.udaspecialbonus = 1
			} else {
				id = 3 + fox.random(2)
			}
		}
		// for level 5, 7, 9, 11 if player need energy, make energy bonus first
		if (g.level == 5 || g.level == 7 || g.level == 9 || g.level == 11){
			if (g.energy < g.energymax && !g.udabonusenergy){
				g.udabonusenergy = 1
				id = 2
			}
		}
		
		if (this.tall){
			commonclass.makebonus(id, this.x, this.y - 380*scG)
		} else {
			commonclass.makebonus(id, this.x, this.y - 240*scG)
		}
	} else {
		// make point items along the way
		if (g.level > 3){
			// sometimes make short items have tall bonus location
			if (!this.tall && fox.getrandom("randomtallbonuslocation") == 1){
				this.tall = 1
				// add more space
				this.x += 0.5 * g.addtallspace;
				g.nextob += 0.5 * g.addtallspace;
				g.obspacing < 480*scG ? (g.nextob += g.addtallspace) : (undefined)
			}
		}
		if (this.tall){
			commonclass.makebonus(1, this.x - 50*scG, this.y - 370*scG)
			commonclass.makebonus(1, this.x, this.y - 380*scG)
			commonclass.makebonus(1, this.x + 50*scG, this.y - 370*scG)
		} else {
			commonclass.makebonus(1, this.x - 50*scG, this.y - 230*scG)
			commonclass.makebonus(1, this.x, this.y - 240*scG)
			commonclass.makebonus(1, this.x + 50*scG, this.y - 230*scG)
		}
	}
	// blasted by musclewoman wave?
	if (g.musclewomanwave > 0){
		this.crash(this.x, this.y, true)
		g.musclewomanwave = Math.max(0, g.musclewomanwave - 1)
		// last one blasted? delay next obstacle a bit
		!g.musclewomanwave ? (g.nextob += 1000*scG) : (undefined)
	}
}

// crash
ItemObject.prototype.crash = function(xx, yy, nosfx) {
	if(nosfx){}else{nosfx = false}
	if(this.nick == "o5"){
		var it = new explosion()
		it.delay = 1
		it.x = this.x-10*scG
		it.y = this.y
		it.added();
		g.m3.addChild(it)
		var it = new explosion()
		it.delay = 3
		it.x = this.x 
		it.y = this.y-100*scG
		it.added();
		g.m3.addChild(it)
		var it = new explosion()
		it.delay = 6
		it.x = this.x+20 *scG
		it.y = this.y-200*scG
		it.added();
		g.m3.addChild(it)
		// sfx
		soundPlay(this.sfx)
		// shake screen
		!g.fall ? (g.shake = this.shakepower) : (undefined)
		this.state = 2
		return;
	}
	if(this.nick == "o10"){
		// besides pieces, add flipping vending animation
		var it = addObj("vendingflip");
		it.x = this.x
		it.y = this.y - 50*scG
		g.m4.addChild(it)
	}
	if (this.piecestotal > 0){
		// make pieces
		var it = new makepieces(this.piecesname, this.piecestotal, xx, yy, this.pieceswid, this.pieceshei)
		it.x = this.x + 300*scG
		it.y = this.y - 100*scG
		g.m3.addChild(it)
		// cek hit rigby
		this.cekhitrigby()
		// sfx
		!nosfx ? (soundPlay(this.sfx)) : (undefined)
		// shake screen
		!g.fall ? (g.shake = this.shakepower) : (undefined)
		this.state = 2
	}
}

// set size
ItemObject.prototype.setsize = function(ww, hh) {
	this.wid = ww
	this.hei = hh
	this.hwid = this.wid / 2
	this.hhei = this.hei / 2
}

// set zone (based on parent's coordinates)
ItemObject.prototype.setzone = function(xx, yy, wid, hei, draw) {
	this.z.x = this.x + xx
	this.z.y = this.y + yy
	this.zone.x = xx
	this.zone.y = yy
	this.z.width = this.zone.width = this.wid
	this.z.height = this.zone.height = this.hei
	draw ? (this.zone.visible = true) : (undefined)
}

// cek hit
ItemObject.prototype.cekhit = function() {
	// hit muscleman
	if(g.mm.x + g.mm.hwid > this.x - this.hwid){ 
		this.crash(g.mm.x, g.mm.y)
	}
	
	if (this.state == 1){
		if (g.specialchx){
			// cek hit unicorn & muscle woman
			(g.specialchx + 80*scG > this.x - this.hwid) && (g.specialchx - 80*scG < this.x + this.hwid) ? (this.crash(g.specialchx, g.specialchy)) : (undefined)
		}
	}
}

// cek hit rigby
ItemObject.prototype.cekhitrigby = function() {
	if (!g.inv && !g.fly && !this.udahit){
		if (!g.jump && Math.abs(this.x - g.mm.x) < 100*scG){
			this.udahit = 1, g.hit = this
		} else {
			hitTestZone(this, g.p) ? (udahit = 1, g.hit = this) : (undefined)
		}
	}
}

ItemObject.prototype.update = function() {
	this.cekstate()
}

ItemObject.prototype.cekstate = function() {
	if (this.state == 1){
		// before crash
		this.cekhit()
	} else if (this.state == 2){
		// after crash
		this.cekhitrigby()
		this.d--
		!this.d ? (visible = false) : (undefined)
		if (this.d == -5){
			fox.removevalue(this, g.ob)
			this.die()
		}
	} else if (this.state == 3){
		// disappear (shot by magic keyboard)
		fox.removevalue(this, g.ob)
		this.die()
	}
}

// die
ItemObject.prototype.die = function() {
	this.sh ? (this.removeChild(this.sh)) : (undefined) // remove shadow
	g.allmc ? (fox.removevalue(this, g.allmc)) : (undefined) // remove from sort depth array
	g.m3.removeChild(this)
}