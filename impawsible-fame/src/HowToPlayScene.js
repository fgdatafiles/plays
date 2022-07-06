var HowToPlayPageLayer = cc.Layer.extend({
    ctor:function(currentPage) {
        this._super();
        
        // Batch node
        cc.spriteFrameCache.addSpriteFrames(res.ui_plist);
        var ss_ui = new cc.SpriteBatchNode(res.ui_png);
        this.addChild(ss_ui);
        
        // Background
        var spriteResource;
        if (currentPage == GC.HOW_TO_PLAY_PAGE.ONE) {
            spriteResource = res.howTo_page1_png;
        } 
        else if (currentPage == GC.HOW_TO_PLAY_PAGE.TWO)  {
            spriteResource = res.howTo_page2_png;
        }
        else {
            spriteResource = res.howTo_page3_png;
        }

        var sprite = new cc.Sprite(spriteResource);
        sprite.setPosition( GC.SCREENCENTER );
        this.addChild(sprite, 0);
    }
});

var HowToPlayNavigationLayer = cc.Layer.extend({
    currentPage:null,
    
    ctor:function(currentPage) {
        this._super();
        
        this.currentPage = currentPage;
        
        // Left
        var leftButton = new cc.MenuItemImage(
            "#btn_left.png",
            "#btn_left.png",
            this.goToPrevPage,
            this);
        
        leftButton.setAnchorPoint(0.0, 0.5);
        leftButton.x = 0;
        
        // Right
        var rightButton = new cc.MenuItemImage(
            "#btn_right.png",
            "#btn_right.png",
            this.goToNextPage,
            this);
        
        rightButton.setAnchorPoint(1.0, 0.5);
        rightButton.x = GC.SCREENSIZE.width;
        
        // Menu
        var navMenu;
        if (currentPage == GC.HOW_TO_PLAY_PAGE.COUNT) {
            navMenu = new cc.Menu(leftButton);
        } else {
            navMenu = new cc.Menu(leftButton, rightButton);
        }
        navMenu.setPosition(0, GC.SCREENCENTER.y);
        this.addChild(navMenu);

        // Add play button only in last page
        if ( currentPage == GC.HOW_TO_PLAY_PAGE.COUNT ) {
            // Play
            var playButton = new cc.MenuItemImage(
                "#ui_btn_play_U.png",
                "#ui_btn_play_D.png",
                this.startGame,
                this);
            
            playButton.setAnchorPoint(1.0, 0.0);
            playButton.setPosition(GC.SCREENSIZE.width - 10, 10);
            
            var playMenu = new cc.Menu(playButton);
            playMenu.x = 0;
            playMenu.y = 0;
            this.addChild(playMenu);
        }
    },
    
    goToPrevPage:function() {
        var nextScene;
        if (this.currentPage == GC.HOW_TO_PLAY_PAGE.ONE) {
            nextScene = new MainMenuScene();
            cc.director.runScene(new cc.TransitionMoveInL(0.5, nextScene));
        } else {
            nextScene = new HowToPlayScene(this.currentPage - 1);
            cc.director.runScene(new cc.TransitionMoveInL(0.5, nextScene));
        }
    },
    
    goToNextPage:function() {
        var nextScene = new HowToPlayScene(this.currentPage + 1);
        cc.director.runScene(new cc.TransitionMoveInR(0.5, nextScene));
    },
    
    startGame:function() {
        var gameScene = new GameplayScene();
        cc.director.runScene(new cc.TransitionMoveInR(0.5, gameScene));

        // Tools.playSFX(res.sfx_bonus_mp3, false);
    }
});

var HowToPlayScene = cc.Scene.extend({
    currentPage:null,
    
    ctor:function(currentPage) {
        this._super();
        
        this.currentPage = currentPage;
    },
    
    onEnter:function () {
        //cc.log("How to play scene current page = " + this.currentPage); // TODO remove
        
        this._super();
        var layer = new HowToPlayPageLayer(this.currentPage);
        var navButtons = new HowToPlayNavigationLayer(this.currentPage);
        
        this.addChild(layer);
        this.addChild(navButtons);
    }
});