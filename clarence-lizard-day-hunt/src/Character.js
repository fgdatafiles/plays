//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Character = cc.Sprite.extend({
	skin:null,

	idleAnim1:null,
	idleAnim2:null,
	idleAnim:null,
	cheerAnim:null,
	nagAnim:null,
	
	ctor:function (skin, data) {
		this.skin = skin;
		this._super("#character" + this.skin + "_idle1_0.png");

		this.setAnchorPoint(0.5, 0);
		this.setPosition(data.pos);

		this.idleAnim1 = Tools.createFrameAnim("character" + this.skin + "_idle1", 15);
		this.idleAnim2 = Tools.createFrameAnim("character" + this.skin + "_idle2", 15);
		this.idleAnim = this.idleAnim1;
		this.cheerAnim = cc.sequence(Tools.createFrameAnim("character" + this.skin + "_cheer", 15).repeat(data.cheerLoop), cc.callFunc(this.idle, this));
		this.nagAnim = cc.sequence(Tools.createFrameAnim("character" + this.skin + "_nag", 15).repeat(data.nagLoop), cc.callFunc(this.idle, this));
	},
	
	idle:function () {
		this.stopAllActions();
		this.runAction(this.idleAnim.repeatForever());
	},

	cheer:function () {
		this.stopAllActions();
		this.runAction(this.cheerAnim);

		cc.audioEngine.playEffect("res/sfx_character" + this.skin + "_cheer.mp3");
	},

	nag:function () {
		this.idleAnim = this.idleAnim2;
		
		this.stopAllActions();
		this.runAction(this.nagAnim);

		cc.audioEngine.playEffect("res/sfx_character" + this.skin + "_nag.mp3");
	},

	goalReached:function () {
		this.idleAnim2 = this.idleAnim1;
		this.idleAnim = this.idleAnim1;
		this.cheer();
	}
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------