function fionnastand() {
	PIXI.Container.call( this );
	this.init();
}

fionnastand.prototype = new foxmovieclip();


fionnastand.prototype.init = function() {
	this.a = new PIXI.Container();
	this.addChild(this.a);
	
	this.state = 1
	// set all
	this.setall();
}

// set all
fionnastand.prototype.setall = function() {
	// make fionna body
	var body = addObj("fionnastandbody", 6*scG, -32*scG, 0.5*scG);
	this.a.addChild(body);
	// make fionna head
	var head = addObj("fionnastandhead", 22*scG, -68*scG, 0.5*scG);
	head.img.play();
	head.img.animationSpeed = 0.5;
	this.a.addChild(head);
	// make weapon
	var xx = 8*scG;
	var yy = -38*scG;
	var weapon;
	if (g.weapon == 1)
		weapon = addObj("sword1", xx + 17*scG, yy - 1*scG, 0.5*scG);
	if (g.weapon == 2)
		weapon = addObj("item12", xx + 17*scG, yy - 1*scG, 0.42*0.5*scG);
	if (g.weapon == 3)
		weapon = addObj("item13", xx + 17*scG, yy - 1*scG, 0.42*0.5*scG);
	if (g.weapon == 4)
		weapon = addObj("item14", xx + 17*scG, yy - 1*scG, 0.42*0.5*scG);
	if (g.weapon == 5)
		weapon = addObj("item15", xx + 17*scG, yy - 1*scG, 0.42*0.5*scG);
	weapon.rotation = fox.rad(-25);
	this.a.addChild(weapon);
	// make arm
	var arm = addObj("fionnaarm", xx, yy);
	this.a.addChild(arm);
}