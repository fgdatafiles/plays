//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Lizard = cc.Sprite.extend({
	active:null,
	skin:null,
	colliderSize:null,
	idleAnim:null,

	ctor:function (skin) {
		this._super("#lizard" + skin + "_idle_0.png");

		this.idleAnim = Tools.createFrameAnim("lizard" + skin + "_idle", 15);
	},

	hide:function () {
		this.stopAllActions();
		this.active = false;
		this.visible = false;
	},

	collideRect:function () {
		return cc.rect(this.x - (this.colliderSize.width/2), this.y - (this.colliderSize.height/2), this.colliderSize.width, this.colliderSize.height);
	}
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Holezard = function (data) {
	Lizard.call(this, data.skin);
	this.direction = data.direction;
	this.spawnAnim = Tools.createFrameAnim("lizard" + data.skin + "_spawn", 15);
	this.despawnAnim = Tools.createFrameAnim("lizard" + data.skin + "_despawn", 15);

	this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("lizard" + data.skin + "_spawn_0.png"));

	this.setPosition(data.pos);
	this.setFlippedX(data.direction.x < 0);

	this.colliderSize = cc.size(60, 60);
};
Holezard.prototype = Object.create(Lizard.prototype);
Holezard.prototype.constructor = Holezard;
Holezard.prototype.spawn = function () {
	this.active = true;
	this.visible = true;

	this.runAction(cc.sequence(this.spawnAnim, cc.callFunc(this.idle, this)));
};
Holezard.prototype.idle = function () {
	this.stopAllActions();
	this.runAction(cc.sequence(this.idleAnim.repeat(2), cc.callFunc(this.despawn, this)));
};
Holezard.prototype.despawn = function () {
	this.stopAllActions();
	this.runAction(cc.sequence(this.despawnAnim, cc.callFunc(this.hide, this)));
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Groundzard = function (data) {
	Lizard.call(this, data.skin);
	this.pos = data.pos;
	this.speed = 250;
	this.direction = null;
	this.distance = cc.pDistance(data.pos[0], data.pos[1]);
	this.distanceTraveled = 0;

	this.idleAnim.speed(2);

	this.colliderSize = cc.size(this.width, this.height);
};
Groundzard.prototype = Object.create(Lizard.prototype);
Groundzard.prototype.constructor = Groundzard;
Groundzard.prototype.spawn = function () {
	var random = Tools.random(0, 1);

	this.setPosition(this.pos[random]);
	this.setFlippedX(random);
	this.direction = 1 - (2 * random);

	this.distanceTraveled = 0;

	this.active = true;
	this.visible = true;

	this.runAction(this.idleAnim.repeatForever());
};
Groundzard.prototype.update = function (dt) {
	this.x += dt * this.speed * this.direction;
	if (this.distanceTraveled < this.distance) {
		this.distanceTraveled += dt * this.speed;
	} else {
		this.hide();
	}
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Wallzard = function (data) {
	Lizard.call(this, data.skin);
	this.pos = data.pos;
	this.speed = 250;
	this.distance = cc.pDistance(data.pos[0], data.pos[1]);
	this.vx = 0;
	this.vy = 0;
	this.distanceTraveled = 0;

	this.idleAnim.speed(2);

	this.colliderSize = cc.size(this.width + 10, this.height + 10);
};
Wallzard.prototype = Object.create(Lizard.prototype);
Wallzard.prototype.constructor = Wallzard;
Wallzard.prototype.spawn = function () {
	var random = Tools.random(0, 1);

	var angleR = Tools.getAngle(this.pos[random], this.pos[random ^ 1]);
	var angleD = Tools.degrees(angleR);

	this.vx = Math.cos(angleR);
	this.vy = Math.sin(angleR);

	this.setRotation(-angleD);
	this.setFlippedY(this.vx < 0);

	this.setPosition(this.pos[random]);

	this.distanceTraveled = 0;

	this.active = true;
	this.visible = true;

	this.runAction(this.idleAnim.repeatForever());
};
Wallzard.prototype.update = function (dt) {
	this.x += dt * this.speed * this.vx;
	this.y += dt * this.speed * this.vy;
	if (this.distanceTraveled < this.distance) {
		this.distanceTraveled += dt * this.speed;
	} else {
		this.hide();
	}
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------