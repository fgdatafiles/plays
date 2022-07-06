var GameOverLayer = cc.Layer.extend({
    
    isNewHighScore:null,
    
    ctor:function() {       
        this._super();
        this.init();
    },
    
    init:function() {
        this._super();

        Tools.addSoundHandler(this);
        // Note: Already done in MainMenuScene.js.
        //cc.spriteFrameCache.addSpriteFrames(res.main_menu_plist);
        
        // Batch node
        cc.spriteFrameCache.addSpriteFrames(res.ui_plist);
        var ss_ui = new cc.SpriteBatchNode(res.ui_png);
        this.addChild(ss_ui);
        
        // Background
        var sprite = new cc.Sprite( res.bgResultScreen_png );
        sprite.setPosition( GC.SCREENCENTER );
        this.addChild(sprite, 0);

        
        // Score values
        var yourScoreLabel = cc.LabelBMFont.create("999", res.font_clappyFamescore_fnt);
        yourScoreLabel.setPosition(GC.GAME_OVER_ASSETS.YOUR.X,
                                   GC.GAME_OVER_ASSETS.YOUR.Y);
        this.addChild(yourScoreLabel);
        
        var highScoreLabel = cc.LabelBMFont.create("999", res.font_clappyFamescore_fnt);
        highScoreLabel.setPosition(GC.GAME_OVER_ASSETS.HIGH.X,
                                   GC.GAME_OVER_ASSETS.HIGH.Y);
        this.addChild(highScoreLabel);

        //High score banner
        var highScoreBanner = new cc.Sprite("#ui_newRecord.png");
        highScoreBanner.x = highScoreLabel.x + 200; //GC.SCREEN.SIZE.WIDTH - highScoreBanner.getContentSize().width / 2 - 20,
        highScoreBanner.y = highScoreLabel.y + 300;
        highScoreBanner.rotation = 30;
        this.addChild(highScoreBanner);
        
        // Set high score
        this.isNewHighScore = false;
        
        highScoreLabel.setString(this.getHighScore());
        yourScoreLabel.setString(GC.SCORE);
        
        if (this.isNewHighScore) {
            highScoreBanner.visible = true;
        } else {
            highScoreBanner.visible = false;
        }
        
        // Main menu buttons
        var playButton = new cc.MenuItemImage(
            "#ui_btn_playAgain_U.png",
            "#ui_btn_playAgain_D.png",
            this.replayGame,
            this);
        
        var mainMenu = new cc.Menu(playButton);
        mainMenu.x = GC.SCREENCENTER.x + GC.GAME_OVER_ASSETS.REPLAY.X;
        mainMenu.y = GC.SCREENCENTER.y + GC.GAME_OVER_ASSETS.REPLAY.Y;
        this.addChild(mainMenu, 1);
    },
    
    getHighScore:function() {
        var highScore = cc.sys.localStorage.getItem(GC.UNIQUE_SCORE_KEY);
        
        if (GC.SCORE > highScore || highScore == null) {
            cc.sys.localStorage.setItem(GC.UNIQUE_SCORE_KEY, GC.SCORE);
            if (highScore != null) {
                this.isNewHighScore = true;
            }
            return GC.SCORE;
        } else {
            return highScore;
        }
    },
    
    replayGame:function() {
        // Note: Replace MainMenuScene with your gameplay scene.
        var gameScene = new ReplayGameplayScene();
        cc.director.runScene(new cc.TransitionMoveInR(0.5, gameScene));

        //Tools.playSFX(res.sfx_bonus_mp3, false);
    }    
});

var GameOverScene = cc.Scene.extend({
    onEnter:function () {
        this._super();        

        this.showAds();

        var layer = new GameOverLayer();
        this.addChild(layer);
    },

    showAds:function() {
        if (mobile) {
            window.location = 'cnwap://showad';
        }
        else {
            if (typeof showAd === 'function') 
            { 
                showAd();
            }
        }
    }
});