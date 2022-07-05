var TransitionLayer = cc.Layer.extend({
	ctor:function () {
		this._super();

		var background = new cc.Sprite("res/bg_transition.png");
		background.setPosition(gg.anchor.center);
		this.addChild(background);

		var jarsA = new cc.Sprite("#jarsA_1.png");
		jarsA.setPosition(270, 170);
		this.addChild(jarsA);

		var jarsB = new cc.Sprite("#jarsB_1.png");
		jarsB.setPosition(1060, 210);
		this.addChild(jarsB);

		var character1 = new cc.Sprite("#cut_character0_1.png");
		character1.setPosition(696, 204);
		this.addChild(character1);

		var character2 = new cc.Sprite("#cut_character1_1.png");
		character2.setPosition(480, 202);
		this.addChild(character2);

		var character3 = new cc.Sprite("#cut_character2_1.png");
		character3.setPosition(896, 216);
		this.addChild(character3);

		var balloon1 = new Balloon("#balloon3.png");
		balloon1.setPosition(670, 520);
		balloon1.visible = false;
		this.addChild(balloon1);

		var label1A = new BalloonLabel("AWESOME!", 1, balloon1.width);
		label1A.setPosition(balloon1.width/2, balloon1.height/2 + 110);
		balloon1.addChild(label1A);

		var label1B = new BalloonLabel("Let's catch " + gg.gameplay.goal + " more\nlizards tomorrow!", 0.7, balloon1.width);
		label1B.setPosition(balloon1.width/2, balloon1.height/2 + 20);
		balloon1.addChild(label1B);
		
		this.runAction(cc.sequence(
								cc.delayTime(0.5),
								cc.callFunc(balloon1.show, balloon1)
								));

		var nextDayButton = new ccui.Button("btn_nextDay_u.png", "btn_nextDay_d.png", "btn_nextDay_u.png", ccui.Widget.PLIST_TEXTURE);
		nextDayButton.setPosition(cc.pAdd(gg.anchor.botRight, cc.p(-320, 60)));
		nextDayButton.addTouchEventListener(this.onNextDay, this);
		this.addChild(nextDayButton);
	},

    onNextDay:function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
            cc.director.runScene(new GameplayScene());
            break;
        }
    }
});

var TransitionScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		this.addChild(new TransitionLayer());
	}
});