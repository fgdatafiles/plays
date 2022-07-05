//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Balloon = cc.Sprite.extend({
	showAnim:null,
	hideAnim:null,

	ctor:function (spriteName) {
		this._super(spriteName);

		this.showAnim = cc.scaleTo(0.25, 1, 1).easing(cc.easeBackOut());
		this.hideAnim = cc.sequence(cc.scaleTo(0.25, 0, 0).easing(cc.easeBackIn()), cc.callFunc(this.hideCallback, this));
	},

	show:function () {
		this.setScale(0);

		this.visible = true;
		this.runAction(this.showAnim);
	},

	hide:function () {
		this.stopAllActions();
		this.runAction(this.hideAnim);
	},

	hideCallback:function () {
		this.visible = false;
	}
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var BalloonLabel = cc.LabelBMFont.extend({
	ctor:function (string, scale, width) {
		this._super(string, "res/fnt_comiquita.fnt");
		this.textAlign = cc.TEXT_ALIGNMENT_CENTER;
		this.setScale(scale);
		this.boundingWidth = (width - 20) / this.scaleX;
		this.setColor(cc.color(0, 0, 0));
	}
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------