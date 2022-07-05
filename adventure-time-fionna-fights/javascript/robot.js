function robot() {
	PIXI.Container.call( this );
	this.init();
}

robot.prototype = new foxmovieclip();

robot.prototype.init = function() {
	this.a = addObj("robot",0,0,scG);
	this.a.img.play();
	this.a.img.animationSpeed = 0.5;
	this.addChild(this.a);
	
	this.y1 = g.ymin + 50*scG;
	this.y2 = g.ymax - 80*scG;
	this.sd = this.shootdelay = 5;
	this.speed = 5*scG;
	this.ys = -this.speed;
	
	arClips.push(this);
}

// loop
robot.prototype.loop = function() {
	if (g.robothelp < 50 || g.action > 8) {
		// get out
		this.x = this.x + ((g.xmin - 300*scG) - this.x) / 8;
		if (this.x < g.xmin - 200*scG) {
			this.die();
		}
	} else {
		this.move()
		this.cekshoot()
	}
}

// cek shoot
robot.prototype.cekshoot = function() {
	this.sd--;
	if (this.sd < 0) {
		this.sd = this.shootdelay + fox.random(5);
		var mc = new missile();
		mc.x = this.x + 120*scG;
		mc.y = this.y;
		g.m2.addChild(mc);
		soundPlay("zmissile");
	}
}

// move
robot.prototype.move = function() {
	this.x = this.x + ((g.xmin + 100*scG) - this.x) / 8;
	this.y += this.ys;
	if (this.y < this.y1) {
		this.y = this.y1;
		this.ys = this.speed;
	}
	if (this.y > this.y2) {
		this.y = this.y2;
		this.ys = -this.speed;
	}
}