//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Puff = cc.Sprite.extend({
	active:null,

	puffAnim:null,

	ctor:function () {
		this._super("#puff_0.png");

		this.puffAnim = cc.sequence(Tools.createFrameAnim("puff", 15), cc.callFunc(this.hide, this));
	},

	show:function () {
		this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("puff_0.png"));

		this.active = true;
		this.visible = true;

		this.runAction(this.puffAnim);
	},

	hide:function () {
		this.stopAllActions();
		this.active = false;
		this.visible = false;
	}
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------