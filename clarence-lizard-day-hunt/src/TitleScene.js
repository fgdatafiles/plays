//--------------------------------------------------------------------------------------------------------------------------------------------------------

var TitleLayer = cc.Layer.extend({
    howToNode:null,

    slideIn:null,
    slideOut:null,

    ctor:function () {
        this._super();

        var background = new cc.Sprite("res/bg_title.png");
        background.setPosition(gg.anchor.center);
        this.addChild(background);

        // Title Screen
        var playButtonA = new ccui.Button("btn_play_u.png", "btn_play_d.png", "btn_play_u.png", ccui.Widget.PLIST_TEXTURE);
        playButtonA.setPosition(cc.pAdd(gg.anchor.bot, cc.p(0, 150)));
        playButtonA.addTouchEventListener(this.onPlay, this);
        this.addChild(playButtonA);

        var howToButton = new ccui.Button("btn_howTo_u.png", "btn_howTo_d.png", "btn_howTo_u.png", ccui.Widget.PLIST_TEXTURE);
        howToButton.setPosition(cc.pAdd(gg.anchor.bot, cc.p(0, 60)));
        howToButton.addTouchEventListener(this.onHowTo, this);
        this.addChild(howToButton);

        // How to Play
        this.howToNode = new cc.Node();
        this.addChild(this.howToNode);

        var howToPage = new cc.Sprite("res/bg_howTo.png");
        howToPage.setPosition(gg.anchor.center);
        this.howToNode.addChild(howToPage);

        var playButtonB = new ccui.Button("btn_play_u.png", "btn_play_d.png", "btn_play_u.png", ccui.Widget.PLIST_TEXTURE);
        playButtonB.setPosition(cc.pAdd(gg.anchor.botRight, cc.p(-170, 60)));
        playButtonB.addTouchEventListener(this.onPlay, this);
        this.howToNode.addChild(playButtonB);

        var backButton = new ccui.Button("btn_right.png", "btn_right.png", "btn_right.png", ccui.Widget.PLIST_TEXTURE);
        backButton.setAnchorPoint(0, 0.5);
        backButton.setPosition(gg.anchor.left);
        backButton.addTouchEventListener(this.onBack, this);
        this.howToNode.addChild(backButton);

        this.howToNode.setPosition(-gg.screen.width, 0);

        this.slideIn = cc.moveBy(0.25, gg.screen.width, 0);
        this.slideOut = cc.moveBy(0.25, -gg.screen.width, 0);
    },

    onPlay:function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
            cc.director.runScene(new IntroScene()); // debug testscene
            break;
        }
    },

    onHowTo:function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
            this.howToNode.runAction(this.slideIn);
            break;
        }
    },

    onBack:function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
            this.howToNode.runAction(this.slideOut);
            break;
        }
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var TitleScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        // TODO: Do caching at preloader
        cc.spriteFrameCache.addSpriteFrames("res/lizards.plist");
        cc.spriteFrameCache.addSpriteFrames("res/masks.plist");
        cc.spriteFrameCache.addSpriteFrames("res/character0.plist");
        cc.spriteFrameCache.addSpriteFrames("res/character1a.plist");
        cc.spriteFrameCache.addSpriteFrames("res/character1b.plist");
        cc.spriteFrameCache.addSpriteFrames("res/character2.plist");
        cc.spriteFrameCache.addSpriteFrames("res/fx.plist");
        cc.spriteFrameCache.addSpriteFrames("res/ui.plist");
        cc.spriteFrameCache.addSpriteFrames("res/cutscene.plist");

        this.addChild(new TitleLayer());
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------