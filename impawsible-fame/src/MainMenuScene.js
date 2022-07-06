var MainMenuLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
        
        return true;
    },
    
    init:function() {
        cc.audioEngine.stopMusic();
        Tools.addSoundHandler(this);
        
        this._super();

        var sprite = new cc.Sprite(res.bgTitleScreen_png);
        sprite.setPosition(GC.SCREENCENTER);
        this.addChild(sprite);

        cc.spriteFrameCache.addSpriteFrames(res.ui_plist);
        var ss_ui = new cc.SpriteBatchNode(res.ui_png);
        this.addChild(ss_ui);

        // Main menu buttons
        var playButton = new cc.MenuItemImage(
            "#ui_btn_play_U.png",
            "#ui_btn_play_D.png",
            this.startGame,
            this);

        playButton.x        = 0;
        playButton.y        = 0;
        
        var howToButton = new cc.MenuItemImage(
            "#ui_btn_howTo_U.png",
            "#ui_btn_howTo_D.png",
            this.showRules,
            this);

        howToButton.rotation = -3;
        howToButton.x = playButton.x;
        howToButton.y = -howToButton.getContentSize().height - 15; // add offset between

        var mainMenu = new cc.Menu(playButton, howToButton);
        mainMenu.x = GC.SCREENSIZE.width  * 0.78;
        mainMenu.y = GC.SCREENSIZE.height  * 0.34;
        this.addChild(mainMenu, 1);
        
        return true;
    },
    
    startGame:function () {
        // Note: Open your gameplay scene here.
        // Tools.playSFX(res.sfx_bonus_mp3, false);

        var gameScene = new GameplayScene();
        cc.director.runScene(new cc.TransitionMoveInR(0.5, gameScene));
    },
    
    showRules:function() {
        // Tools.playSFX(res.sfx_bonus_mp3, false);

        var howToPlayScene = new HowToPlayScene(GC.HOW_TO_PLAY_PAGE.ONE);
        cc.director.runScene(new cc.TransitionMoveInR(0.5, howToPlayScene));

       
    }
});

var MainMenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainMenuLayer();
        this.addChild(layer);
    }
});
