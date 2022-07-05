function cutscene1() {
	PIXI.Container.call( this );
	this.init();
}

cutscene1.prototype = new foxmovieclip();


cutscene1.prototype.init = function() {
	this.a = new PIXI.Graphics();
	this.a.beginFill(0x000000).drawRect(0, 0, _W, _H).endFill();
	this.addChild(this.a);
	
	// vars
	if (!g.finn) {
		this.rescuehand = "cakerescuehand";
		this.rescuebody = "cakerescue";
		this.rescuehand2 = "cakerescuehand2";
		this.fall1 = "fionnafall1";
		this.fall2 = "fionnafall2";
	} else {
		this.rescuehand = "jakerescuehand";
		this.rescuebody = "jakerescue";
		this.rescuehand2 = "jakerescuehand2";
		this.fall1 = "finnfall1";
		this.fall2 = "finnfall2";
	}
	commonclass.say("fall"); 
	// set up scene 1
	this.state = 1;
	this.scenewid = g.screenwid / 3;
	g.cutscenenow = 1;
	this.setscene1();
	this.d = 16;
	
	arClips.push(this);
}

// loop
cutscene1.prototype.loop = function() {
	this.cekstate()
}

// cek state
cutscene1.prototype.cekstate = function() {
	if (this.state == 1) {
		// scene 1
		var line1 = new whiteline();
		line1.x = fox.random(this.scenewid - 3*scG);
		line1.y =  g.screenhei + 300*scG + fox.random(200*scG);
		this.a.addChild(line1);
		var line2 = new whiteline();
		line2.x = fox.random(this.scenewid - 3*scG);
		line2.y =  g.screenhei + 300*scG + fox.random(200*scG);
		this.a.addChild(line2);
		this.it.x = this.xx + fox.random(4*scG);
		this.it.y = this.yy + fox.random(3*scG);
		//
		this.d--;
		if (!this.d) {
			this.d = 16;
			this.state = 2;
			g.cutscenenow = 2;
			this.setscene2()
			this.hair1.img.stop(); // stop Fionna hair animation
		}
	} else if (this.state == 2) {
		// scene 2	
		this.cakehand1.scale.y += 0.3;
		this.cakehand2.scale.y += 0.3;
		this.place.y += this.ys2;
		this.ys2 += this.grav;
		this.d--
		if (!this.d) {
			this.d = 30;
			this.state = 3;
			g.cutscenenow = 3;
			this.setscene3()
			this.caketail.img.stop(); // stop Cake tail animation
		}
	} else if (this.state == 3) {
		// scene 3
		if (!this.got) {
			this.it.y += this.ys;
			this.ys += 2*scG;
			this.cakehands.y = this.it.y - this.cdis;
			this.cdis *= 0.9;
			if (this.cdis < 30) {
				this.got = 1;
				this.ys = 5*scG;
			}
		} else {
			this.it.y += this.ys;
			this.ys -= 3*scG;
			this.cakehands.y = this.it.y - 20*scG;
			if (this.it.y < -20*scG) {
				// resume game
				g.action = 1;
				g.nopress = 12;
				g.justfall = 4;
				g.weapon = 1;
				g.shielding = g.fly = g.freeze = g.robothelp = g.vampirehelp = g.knifestorm = g.fireballs = g.weapontime = 0;
				fox.fadescreen();
				this.die();
			}
		}
	}
}

// set scene1
cutscene1.prototype.setscene1 = function() {
	// bg color	
	var box = new PIXI.Graphics();
	box.beginFill(0xBCF1FE);
	box.drawRect(0, 0, this.scenewid - 5*scG, g.screenhei);
	box.endFill();
	this.a.addChild(box);
	// add fionna fall pic
	this.xx = this.scenewid / 2;
	this.yy = g.hscreenhei;
	this.it = addObj(this.fall1, this.xx, this.yy, 0.5*scG);
	this.addChild(this.it);
	if (!g.finn) {
		// add fionna hair
		this.hair1 = addObj("fionnafallhair", -6*scG, -97*scG, 0.5*scG);
		this.hair1.img.play();
		this.hair1.img.animationSpeed = 0.5;
		this.hair1.rotation = fox.rad(40);
		this.it.addChild(this.hair1);
	}
	var line1 = new whiteline();
	line1.x = fox.random(this.scenewid - 3*scG);
	line1.y = fox.random(g.screenhei);
	this.a.addChild(line1);
	var line2 = new whiteline();
	line2.x = fox.random(this.scenewid - 3*scG);
	line2.y = fox.random(g.screenhei);
	this.a.addChild(line2);
	var line3 = new whiteline();
	line3.x = fox.random(this.scenewid - 3*scG);
	line3.y = fox.random(g.screenhei);
	this.a.addChild(line3);
	commonclass.fadearea(0, 0, this.scenewid, g.screenhei, this);
}

// set scene2
cutscene1.prototype.setscene2 = function() {
	// bg color// bg color	
	var box = new PIXI.Graphics();
	box.beginFill(0xBCF1FE);
	box.drawRect(this.scenewid, 0, this.scenewid, g.screenhei);
	box.endFill();
	this.a.addChild(box);
	// place
	this.place = new PIXI.Container();
	this.addChild(this.place);
	this.grav = 2*scG;
	this.ys2 = -12*scG;
	// add marshall
	this.xx = this.scenewid + this.scenewid / 2;
	this.yy = g.hscreenhei - 50*scG;
	var it = addObj("marshallrescue", this.xx, this.yy + 40*scG, scG);
	this.place.addChild(it);
	// add cake
	if (!g.finn) {
		this.caketail = addObj("cakerescuetail", this.xx - 40*scG, this.yy - 100*scG, scG);
		this.caketail.img.play();
		this.caketail.img.animationSpeed = 0.5;
		this.place.addChild(this.caketail);
	}
	this.cakehand1 = addObj(this.rescuehand, this.xx + 40*scG, this.yy - 65*scG, 0.5*scG);
	this.cakehand1.setRegY(0);
	this.place.addChild(this.cakehand1);
	var it2 = addObj(this.rescuebody, this.xx + 15*scG, this.yy - 60*scG, 0.5*scG);
	this.place.addChild(it2);
	this.cakehand2 = addObj(this.rescuehand, this.xx + 5*scG, this.yy - 60*scG, 0.5*scG);
	this.cakehand2.setRegY(0);
	this.place.addChild(this.cakehand2);
	commonclass.fadearea(this.scenewid, 0, this.scenewid, g.screenhei, this);
}

// set scene3
cutscene1.prototype.setscene3 = function() {
	var bg = addObj("bgcolor1a",0,0,scG);
	bg.setReg0();
	bg.x = 5*scG + this.scenewid * 2;
	bg.y = 0;
	this.addChild(bg);
	this.xx = 2.5 * this.scenewid;
	this.yy = 0;
	this.ys = 10*scG;
	this.got = 0;
	this.cdis = 100;
	this.cakehands = new PIXI.Container();
	this.cakehands.x = this.xx;
	this.cakehands.y = this.yy;
	this.addChild(this.cakehands);
	var it1 = addObj(this.rescuehand2, -8*scG, -125*scG, 0.5*scG);
	this.cakehands.addChild(it1);
	var it2 = addObj(this.rescuehand2, 8*scG, -125*scG, 0.5*scG);
	this.cakehands.addChild(it2);
	this.it = addObj(this.fall2, this.xx, this.yy, 0.5*scG);
	this.addChild(this.it);
	commonclass.fadearea(2 * this.scenewid, 0, this.scenewid, g.screenhei, this);
}