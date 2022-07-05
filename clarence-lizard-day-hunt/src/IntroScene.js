var IntroLayer = cc.Layer.extend({
	ctor:function () {
		this._super();

		var background = new cc.Sprite("res/bg_transition.png");
		background.setPosition(gg.anchor.center);
		this.addChild(background);

		var jarsA = new cc.Sprite("#jarsA_0.png");
		jarsA.setPosition(310, 210);
		this.addChild(jarsA);

		var jarsB = new cc.Sprite("#jarsB_0.png");
		jarsB.setPosition(1060, 210);
		this.addChild(jarsB);

		var character1 = new cc.Sprite("#cut_character0_2.png");
		character1.setPosition(696, 204);
		this.addChild(character1);

		var character2 = new cc.Sprite("#cut_character1_2.png");
		character2.setPosition(480, 202);
		this.addChild(character2);

		var character3 = new cc.Sprite("#cut_character2_2.png");
		character3.setPosition(896, 216);
		this.addChild(character3);

		var balloon1 = new Balloon("#balloon1.png");
		balloon1.setPosition(683, 560);
		balloon1.visible = false;
		this.addChild(balloon1);

		var label1 = new BalloonLabel("Sooo...\nWhat do you wanna\ndo tomorrow?", 0.5, balloon1.width);
		label1.setPosition(balloon1.width/2, balloon1.height/2 + 56);
		balloon1.addChild(label1);
		
		var balloon2 = new Balloon("#balloon2.png");
		balloon2.setPosition(420, 430);
		balloon2.setFlippedX(true);
		balloon2.visible = false;
		this.addChild(balloon2);

		var label2A = new BalloonLabel("Lizards!\nLet's catch...", 0.5, balloon2.width);
		label2A.setPosition(balloon2.width/2, (balloon2.height/2) + 60);
		balloon2.addChild(label2A);

		var label2B = new BalloonLabel("10!", 0.8, balloon2.width);
		label2B.setPosition(balloon2.width/2, (balloon2.height/2) + 20);
		balloon2.addChild(label2B);

		var balloon3 = new Balloon("#balloon2.png");
		balloon3.setPosition(960, 430);
		balloon3.visible = false;
		this.addChild(balloon3);

		var label3 = new BalloonLabel("Perfect!", 0.5, balloon3.width);
		label3.setPosition(balloon3.width/2, (balloon3.height/2) + 40);
		balloon3.addChild(label3);

		this.runAction(cc.sequence(
								cc.delayTime(0.5),
								cc.callFunc(balloon1.show, balloon1),
								cc.delayTime(1.5),
								cc.callFunc(balloon1.show, balloon2),
								cc.delayTime(1.5),
								cc.callFunc(balloon1.show, balloon3),
								cc.delayTime(1.5)
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

var IntroScene = cc.Scene.extend({
	onEnter:function () {
		this._super();

		this.addChild(new IntroLayer());

		gg.gameplay.level = 1;
		gg.gameplay.stage = 0;
		gg.gameplay.spawnCounts = [1, 1];
		gg.gameplay.spawnCountIndex = 1;
		gg.gameplay.goal = 10;
        gg.gameplay.totalCounter = 0;
	}
});