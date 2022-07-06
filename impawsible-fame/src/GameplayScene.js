var GameAssetLoader = cc.Layer.extend({
    ctor:function() {
        this._super();
        this.init();
    },

    init:function()
    {
        this.loadResource( res.gobj_plist,         res.gobj_png   );
        this.loadResource( res.char_grizz_plist,   res.char_grizz_png   );
        this.loadResource( res.char_iceBear_plist, res.char_iceBear_png );
        this.loadResource( res.char_panda_plist,   res.char_panda_png   );
        this.loadResource( res.char_koala_plist,   res.char_koala_png   );
        this.loadResource( res.ui_plist,           res.ui_png   );
        this.loadResource( res.fx_plist,           res.fx_png   );
    },

    loadResource:function(plistSrc, imgSrc)
    {
        cc.spriteFrameCache.addSpriteFrames(plistSrc);
        var ss_char = new cc.SpriteBatchNode(imgSrc);
        this.addChild(ss_char);
    }
});


var g_sharedGameplayLyr;


var GameplayLayer = cc.Layer.extend({
    m_tempSprite:null,
    m_dragBear:null,
    m_gameState:null,
    m_gameObjPool:null,
    obs:null,

    ctor:function() {
        this._super();
        this.init();
    },

    init:function()
    {
        g_sharedGameplayLyr = this;
        Tools.addSoundHandler(this);   

        var slotManager  = new SlotManager(); 
        var levelManager = new LevelManager();      
        
        this.resetConfigs(); 
        this.initBearNode();
        
        Tools.playBGM( res.bgm_ambient_mp3, true );
    },  

    startGame:function()
    {
        this.scheduleSpawnSlots();

        g_sharedLevelManager.updateObstaclePool();
    },

    initBearNode:function()
    {
        var bearNode = new BearNode();
        bearNode.setPosition( 0, 100 );
        this.addChild( bearNode );

        this.m_dragBear = new Bear( 0 ); 
        this.addChild(this.m_dragBear);
        this.m_dragBear.hide(); 
    },

    resetConfigs:function()
    {
        this.m_gameState = GC.GameState.DEFAULT;
        GC.SCORE  = 0;
        GC.HEIGHT = 1;
        GC.COMBO  = 0;
        GC.MAX_HEIGHT_REACHED = 1;

        GC.SPEED_PIGEON = GC.DEFAULT_PIGEON_SPEED;
        GC.SPEED_GLIDER = GC.DEFAULT_GLIDER_SPEED;
        GC.LOAD_TIME    = GC.DEFAULT_LOAD_TIME;
    },

    scheduleSpawnObstacles:function()
    {
        this.unschedule(this.spawnObstacle);
        this.schedule(this.spawnObstacle, 3);
        // this.schedule(this.spawnObstacle, 3, 4, 2);
    },

    spawnObstacle:function()
    {
        g_sharedLevelManager.addObs();
    },

    checkCurrentHeight:function()
    {
        var height = GC.MAX_HEIGHT_REACHED;
    },

    scheduleSpawnSlots:function()
    {
        this.m_gameState = GC.GameState.SPAWN;

        g_sharedUILayer.resetSlots();

        g_sharedSlotManager.pickRandomSequence();
        this.schedule(this.spawnBearAtRandomAvailableSlot, 1);
    },

    spawnBearAtRandomAvailableSlot:function()
    {
        if( this.m_gameState = GC.GameState.SPAWN )
            g_sharedUILayer.initSlotBears();
        else
            return;

        if( g_sharedSlotManager.slotFilledCount() >= GC.MAX_SLOTS ) {
            this.m_gameState = GC.GameState.STANDBY;
            this.unschedule(this.spawnBearAtRandomAvailableSlot);
        }        
    },

    resetTimer:function()
    {
        g_HUDLayer.updateTimer();
        if( g_sharedSlotManager.slotFilledCount() <= 0 ){
            g_HUDLayer.hideTimer();
            this.schedule( this.waitSlot );
            return;
        }

        this.unschedule(this.timerCallBack);
        g_HUDLayer.updateTimer();
        this.schedule(this.timerCallBack, GC.LOAD_TIME);
    },

    waitSlot:function()
    {
        if( g_sharedSlotManager.slotFilledCount() > 0 ){
            this.resetTimer();
            this.unschedule(this.waitSlot);            
        }
    },

    timerCallBack:function()
    {
        g_sharedBearNode.jumpTopmostBear(); 
        g_HUDLayer.updateTimer();
    },    

    
    update:function(dt)
    {
        this.checkIfCollide();
    },

    checkIfCollide:function()
    {
        var _bears   = g_sharedBearNode.m_arrBears;
        var _obs     = g_sharedLevelManager.obstacles;
        var _landObs = g_sharedBearNode.landObs;

         for( var y = 0; y < _bears.length; y++ ) {
                
                var bear = _bears[y];

                // COLLISION - Obs vs Bears
                for( var x = 0; x < _obs.length; x++ )
                {
                    var obs = _obs[x];
                    if( Tools.rectsIntersectRect( obs.collision(), bear.collision() ))
                    {
                        var index = x;

                        if (index > -1) {
                            _obs.splice(index, 1);
                        }

                        this.addHitFx( 0.5 * ( bear.x + obs.x ), 0.5 * ( bear.y+ obs.y ) );

                        this.scheduleGameOver();

                        g_sharedBearNode.bearsFallAnim();
                        break;
                    }
                }

                // COLLISION - LandObs vs Bears
                for( var x = 0; x < _landObs.length; x++ )
                {
                    var obs = _landObs[x];
                    if( Tools.rectsIntersectRect( obs.collision(), bear.collision() ))
                    {
                        var index = x;

                        if (index > -1) {
                            _landObs.splice(index, 1);
                        }

                        this.scheduleGameOver();

                        obs.trip();

                        g_sharedBearNode.bearsFallAnim();
                        break;
                    }
                }

                
            }
    },

    addHitFx:function(pos)
    {
        var fx = new FXHit();
        fx.setPosition( pos );
        g_sharedBearNode.addChild(fx);
    },

    addHitSpark:function(pos)
    {
        cc.log("ADD HIT SPARK " + pos.x + " " + pos.y);
        var hitSpark = new cc.Sprite("#fx_spark_0.png");  
        hitSpark.setPosition( pos );     
        this.addChild(hitSpark);  

        var idleAnimation = Tools.createFramesAnimation( "fx_spark_", 0.04, 0, 6 );
        hitSpark.runAction( cc.sequence( idleAnimation, cc.removeSelf() ) ); 
    },

    scheduleGameOver:function()
    {
        this.m_gameState = GC.GameState.GAMEOVER;

        this.scheduleOnce(this.gameOver, 1.5);

        
    },

    gameOver:function()
    {
        var gameOver = new GameOverScene();
        cc.director.runScene(new cc.TransitionMoveInR(0.5, gameOver));
    }

});

var PreSceneLayer = cc.Layer.extend({
    ctor:function() {
        this._super();
        this.init();
    },

    init:function()
    {
        GC.TUTORIAL_ENABLED  = true;

        this.initPreScene();       

        this.runAction( cc.sequence( cc.delayTime(0.7), cc.callFunc( this.showSpeechBubble, this), cc.delayTime(2),
            cc.callFunc( this.showSpeechBubble2, this ) ) );
    },

    initPreScene:function()
    {  
        var layerBg = new cc.LayerColor(cc.color(0, 0, 0, 200) );
        layerBg.setAnchorPoint( 0.5, 0.5 );
        this.addChild(layerBg, 0);

        var preGameBg = cc.Sprite.create("#gobj_pregame_pregame.png");
        preGameBg.setAnchorPoint( 0.5, 0 );
        preGameBg.setPosition(GC.SCREENCENTER.x, 0);
        this.addChild( preGameBg );

        this.speechBubble = cc.Sprite.create("#gobj_speech_0.png");
        this.speechBubble.setAnchorPoint( 0.5, 0 );
        this.speechBubble.setPosition( GC.SCREENSIZE.width * 0.5, GC.SCREENSIZE.height * 0.5);
        this.addChild( this.speechBubble );
        this.speechBubble.setVisible(false);

        this.speechBubble2 = cc.Sprite.create("#gobj_speech_1.png");
        this.speechBubble2.setAnchorPoint( 0.5, 0 );
        this.speechBubble2.setPosition( GC.SCREENSIZE.width * 0.5, GC.SCREENSIZE.height * 0.5);
        this.addChild( this.speechBubble2 );
        this.speechBubble2.setVisible(false);

        var menu = cc.Menu.create();
        this.addChild(menu);

        var inviFullScreen_U = new cc.LayerColor(cc.color(0, 0, 0, 0) );
        var inviFullScreen_D = new cc.LayerColor(cc.color(0, 0, 0, 0) );

        inviFullScreen_U.setAnchorPoint( 0.5, 0.5 );
        inviFullScreen_D.setAnchorPoint( 0.5, 0.5 );
        
        var itemSprite = cc.MenuItemSprite.create( inviFullScreen_U, inviFullScreen_D, this.startGamePlay, this);

        menu.addChild(itemSprite);
    },

    showSpeechBubble:function()
    {
        this.speechBubble.setVisible(true);
    },

    showSpeechBubble2:function()
    {
        this.speechBubble.setVisible(false);
        this.speechBubble2.setVisible(true);
    },

    startGamePlay:function()
    {
        cc.log("startgameplay");
        g_sharedGameplayLyr.startGame();

        g_HUDLayer.updateTutorial(true);

        this.stopAllActions();
        this.removeFromParent();
    }
});


var GameplayScene = cc.Scene.extend({
    gameplayLayer:null,
    ctor:function() {
        this._super();
    },
    
    onEnter:function () {
        this._super();

        this.addChild( new GameAssetLoader()    );
        this.addChild( new UILayer()            );        
        this.addChild( new GameplayLayer()      );
        this.addChild( new HudLayer()           ); 
        this.addChild( new PreSceneLayer()      ); 
        this.addChild( new GameControlsLayer()  ); 

        //Centralize update
        this.schedule(this.update);
    },
    
    update:function(delta)
    {
        g_sharedGameplayLyr.update(delta);
    }
});

var ReplayGameplayScene = cc.Scene.extend({
    gameplayLayer:null,
    ctor:function() {
        this._super();
    },
    
    onEnter:function () {
        this._super();

        this.addChild( new GameAssetLoader()    );
        this.addChild( new UILayer()            );        
        this.addChild( new GameplayLayer()      );
        this.addChild( new HudLayer()           ); 
        this.addChild( new GameControlsLayer()  ); 

        GC.TUTORIAL_ENABLED  = false;  

        g_sharedGameplayLyr.startGame();       
        
        //Centralize update
        this.schedule(this.update);
    },
    
    update:function(delta)
    {
        g_sharedGameplayLyr.update(delta);
    }
});




/*

Changelogs

Adjust collision of bear y
Collision of obs to bear
Drag animation of bear
Adjust GC.min

*/