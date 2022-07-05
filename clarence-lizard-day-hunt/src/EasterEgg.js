//--------------------------------------------------------------------------------------------------------------------------------------------------------

var EasterEgg = cc.Sprite.extend({
	active:null,
	collideRect:null,

	ctor:function (spriteName) {
		this._super(spriteName);
		this.active = true;
	}
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Chips = function () {
	EasterEgg.call(this, "#chips.png");
	this.chipsCount = 3;
	this.index = 0;

	this.breakAnim = [];
	for (var i = 0; i < this.chipsCount; i++) {
		this.breakAnim[i] = cc.sequence(Tools.createFrameAnim("chips_break" + i, 15), cc.callFunc(this.breakCallback, this));
	}

	this.collideRect = cc.rect(910, 121, 100, 66);
};
Chips.prototype = Object.create(EasterEgg.prototype);
Chips.prototype.constructor = Chips;
Chips.prototype.trigger = function () {
	this.active = false;

	this.runAction(this.breakAnim[this.index]);

	this.index++;
};
Chips.prototype.breakCallback = function () {
	if (this.index >= this.chipsCount) {
		this.active = false;
		return;
	}

	this.active = true;
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Flies = function () {
	EasterEgg.call(this, "#flies_0.png");

	this.fly = cc.sequence(Tools.createFrameAnim("flies", 15), cc.callFunc(this.flyCallback, this));

	this.collideRect = cc.rect(1015, 222, 170, 80);
};
Flies.prototype = Object.create(EasterEgg.prototype);
Flies.prototype.constructor = Flies;
Flies.prototype.trigger = function () {
	this.active = false;
	this.visible = true;

	this.runAction(this.fly);
};
Flies.prototype.flyCallback = function () {
	this.active = true;
	this.visible = false;
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Crack = function () {
	EasterEgg.call(this, "#crack_0.png");
	this.maxFrame = 2;
	this.currentFrame = 0;

	this.collideRect = cc.rect(789, 260, 110, 80);
};
Crack.prototype = Object.create(EasterEgg.prototype);
Crack.prototype.constructor = Crack;
Crack.prototype.trigger = function () {
	if (!this.visible) {
		this.visible = true;
		return;
	}

	this.currentFrame++;
	if (this.currentFrame >= this.maxFrame) {
		this.active = false;
	}
	this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("crack_" + this.currentFrame + ".png"));
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Tail = function () {
	EasterEgg.call(this, "#tail_3.png");

	this.wiggle = cc.sequence(Tools.createFrameAnim("tail", 15).repeat(3), cc.callFunc(this.wiggleCallback, this));
	this.collideRect = cc.rect(880, 35, 80, 50);
};
Tail.prototype = Object.create(EasterEgg.prototype);
Tail.prototype.constructor = Tail;
Tail.prototype.trigger = function () {
	this.active = false;
	this.runAction(this.wiggle);
};
Tail.prototype.wiggleCallback = function () {
	this.active = true;
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Pinwheel = function () {
	EasterEgg.call(this, "#stick.png");

	this.setCascadeColorEnabled(true);

	this.wheel = new cc.Sprite("#pinwheel.png");
	this.wheel.setPosition(30, 86);
	this.addChild(this.wheel);

	this.spin = cc.sequence(cc.rotateBy(6, 2000).easing(cc.easeSineOut()), cc.callFunc(this.spinCallback, this));
	this.collideRect = cc.rect(838, 58, 100, 100);
};
Pinwheel.prototype = Object.create(EasterEgg.prototype);
Pinwheel.prototype.constructor = Pinwheel;
Pinwheel.prototype.trigger = function () {
	this.active = false;
	this.wheel.runAction(this.spin);
};
Pinwheel.prototype.spinCallback = function () {
	this.active = true;
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Sprinkle = function () {
	EasterEgg.call(this, "#sprinkle_0.png");

	this.sprinkle = cc.sequence(Tools.createFrameAnim("sprinkle", 15), cc.callFunc(this.sprinkleCallback, this));
	this.collideRect = cc.rect(1026, 14, 150, 100);
};
Sprinkle.prototype = Object.create(EasterEgg.prototype);
Sprinkle.prototype.constructor = Sprinkle;
Sprinkle.prototype.trigger = function () {
	this.active = false;
	this.visible = true;
	this.runAction(this.sprinkle);
};
Sprinkle.prototype.sprinkleCallback = function () {
	this.active = true;
	this.visible = false;
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------