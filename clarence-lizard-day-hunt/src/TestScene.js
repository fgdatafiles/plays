var TestLayer = cc.LayerColor.extend({
	ctor:function () {
		this._super(cc.color(0, 0, 0));

		var midBar = new cc.DrawNode();
		var origin = cc.p(0, 354);
		var destination = cc.p(1366, 414);
		midBar.drawRect(origin, destination, cc.color(0, 0, 0));
		this.addChild(midBar);

		var text = new cc.LabelBMFont("888", "res/fnt_comiquita.fnt");
		text.textAlign = cc.TEXT_ALIGNMENT_CENTER;
		text.setPosition(683, 0);
		text.setScale(4);
		text.setAnchorPoint(0.5, 0);
		this.addChild(text);

		if (cc.sys.capabilities.hasOwnProperty('keyboard')) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyReleased: this.onKeyReleased
            }, this);
        }
	},

	onKeyReleased:function (key, event) {
		var target = event.getCurrentTarget();

		if (key === cc.KEY.q) {
		}
	}
});

var TestScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		this.addChild(new TestLayer());
	}
});