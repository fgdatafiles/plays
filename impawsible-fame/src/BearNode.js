
var g_sharedBearNode = null;

var BearNode = cc.Node.extend({

    sprite:null,
    m_arrBears:null,
    m_arrObs:null,
    landObs:null,
    m_iVisibleBear:null,
    obsPool:null,
    tempDownCounter:null,
    bHasJustClearedLandObstacles:null,
    bEnableAddLandObstacles:null,
    
    ctor:function(){
        this._super();        
        this.init();
    },
    
    init:function(){
        g_sharedBearNode = this;

        this.m_arrBears = [];
        this.m_arrObs = [];
        this.landObs = [];
        this.m_iVisibleBear = 1;

        this.initBaseBear();   

        this.bHasJustClearedLandObstacles = false; 
        this.bEnableAddLandObstacles = true;
    },

    initBaseBear:function()
    {
        var bear = new Bear( 0 );        
        bear.setPosition( GC.SCREENCENTER.x, 0 );
        this.addChild(bear);
        bear.idle();

        this.m_arrBears.push(bear);
    },

    addBear:function(type, pos)
    {
        if( g_sharedGameplayLyr.m_gameState == GC.GameState.GAMEOVER ) return;

        if( type == null) return;        

        var bear = new Bear( type );        
        bear.setPosition( pos.x, pos.y - this.y - 100 );
        this.addChild(bear);

        this.fallBear(bear);
    },

    addObs:function(obstacle)
    {
        if( g_sharedGameplayLyr.m_gameState == GC.GameState.GAMEOVER ) return;

        switch ( obstacle )
        {
            case ObstacleType.GROUND:
                if( this.bEnableAddLandObstacles == true )
                {
                    var koalaWalk = new KoalaWalk();
                    koalaWalk.setPosition( cc.p( -GC.SCREENSIZE.width * 0.1, 0 ) );
                    this.addChild( koalaWalk );

                    g_sharedBearNode.landObs.push( koalaWalk );
                }
                
            break;
            case ObstacleType.AERIAL:
                var glider = new KoalaGlider();
                glider.setPosition( cc.p( GC.SCREENSIZE.width * 1.1, GC.SCREENSIZE.height * 0.8 - this.y) );
                this.addChild( glider, 1 ); 

                g_sharedLevelManager.obstacles.push( glider );
            break;
            case ObstacleType.PIGEON:
                var pigeon = new Pigeon();
                pigeon.setScaleX( -1 );
                pigeon.setPosition( cc.p( -GC.SCREENSIZE.width * 0.1, GC.SCREENSIZE.height * 0.5 - this.y) );
                this.addChild( pigeon, 1 );

                g_sharedLevelManager.obstacles.push( pigeon );
            break;        
        }
    },

    fallBear:function(bear)
    {
        var fallingBear  = bear;
        var bStackResult = false;

        // Check: Selected slot is right according to sequence
        if( g_sharedSlotManager.activeSlot() != g_sharedSlotManager.sequence()[0] )
        {
            fallingBear.returnToSlot();
        }
        else
        {
            if( this.m_arrBears.length > 0 ) {

                // Check if placement is lower than position of uppermost stack
                var topStackBear = this.m_arrBears[this.m_arrBears.length - 1];

                if( fallingBear.y < topStackBear.y)
                {
                    fallingBear.returnToSlot();
                }
                else{
                    // Check if placement is exact in terms of x
                    var diffX  = Math.abs(fallingBear.x - topStackBear.x);
                    cc.log("diffx " + diffX);
                    if( diffX < 50) {
                        this.m_arrBears.push(fallingBear);
                        fallingBear.fall( cc.p(GC.SCREENCENTER.x, GC.STACK_YPADDING * (this.m_arrBears.length - 1) ) );

                        bStackResult = true;
                    }
                    else {
                        fallingBear.returnToSlot();
                    }
                }  
            }
        }       
        
        this.stackResultCallback( bStackResult );
                        
    },

    stackResultCallback:function(bStackResult)
    {
        // Succeeded stacking
        if( bStackResult == true ) {

            Tools.playSFX( res.sfx_combo_mp3, false );

            var index = g_sharedSlotManager.types().indexOf( g_sharedGameplayLyr.m_dragBear.getType() );
            g_sharedSlotManager.removeBearFromSlot( index, g_sharedGameplayLyr.m_dragBear.getType() );


            GC.HEIGHT++; g_HUDLayer.updateHeightCount();
            GC.COMBO++;  g_HUDLayer.updateComboLabel();

            if( GC.HEIGHT > GC.MAX_HEIGHT_REACHED ) {
                GC.MAX_HEIGHT_REACHED = GC.HEIGHT;
                g_HUDLayer.showPushNotifs( GC.HEIGHT );
                g_sharedLevelManager.updateObstaclePool();
                g_sharedLevelManager.spawnFood();
                g_sharedLevelManager.updateObstacleSpeed();
                g_sharedLevelManager.updateLoadingTime();
            }

            GC.SCORE+= 10 * GC.COMBO; 
            g_HUDLayer.updateFameScore();

            if( GC.MAX_HEIGHT_REACHED > GC.MAX_STACK ) {
                g_sharedGameplayLyr.resetTimer();

                this.bEnableAddLandObstacles = false;
            }


            this.m_iVisibleBear++;  

            // TUTORIAL
            if( (GC.TUTORIAL_ENABLED  == true) &&  (GC.TUTORIAL_FINISHED  == false) )
            {
                if( GC.TUTORIAL_PROGRESS == GC.TUTORIAL_STEPS.STACK )
                {
                    GC.TUTORIAL_FINISHED  == true;
                    g_HUDLayer.updateTutorial(true);
                }                    
            }

            
        }  
        // Failed stacking   
        else
        {
            var index = g_sharedSlotManager.activeSlot();
            g_sharedSlotManager.slots()[index].show();


            GC.COMBO = 0; g_HUDLayer.updateComboLabel();

            Tools.playSFX( res.sfx_combo_break_mp3, false );

            if( GC.TUTORIAL_ENABLED  == true )
            {
                if( GC.TUTORIAL_PROGRESS == GC.TUTORIAL_STEPS.STACK )
                {
                    g_HUDLayer.updateTutorial(false);
                }                    
            }
        } 
    },

    

    jumpTopmostBear:function()
    {
        if( g_sharedGameplayLyr.m_gameState == GC.GameState.GAMEOVER ) return;

        if( this.m_arrBears.length <= 0 ) return;

        

        this.showJumpReduceFame();

        Tools.playSFX( res.sfx_parachute_mp3, false );
        // Make the topmost bear jump then remove from bears array
        this.m_arrBears[this.m_arrBears.length - 1].jump();

        this.m_arrBears.splice(this.m_arrBears.length - 1, 1);
        this.m_iVisibleBear--;

        GC.SCORE-= 20;
        // GC.SCORE = cc.clampf( GC.SCORE, 0, GC.SCORE);
        if( GC.SCORE < 0 )  GC.SCORE = 0;
        g_HUDLayer.updateFameScore();
        GC.HEIGHT--;    g_HUDLayer.updateHeightCount();
        GC.COMBO = 0;   g_HUDLayer.updateComboLabel();

        if( this.m_iVisibleBear < 0 )
        {
            g_sharedGameplayLyr.scheduleGameOver();
        }
    },

    showJumpReduceFame:function()
    {
        var label = new cc.LabelBMFont("-20", res.font_komikaCombo_fnt);
        label.setPosition( this.m_arrBears[this.m_arrBears.length - 1].getPosition().x,  this.m_arrBears[this.m_arrBears.length - 1].getPosition().y + 350);
        this.addChild( label );

        label.runAction( cc.sequence(
                                cc.spawn( 
                                    cc.moveBy( 2, cc.p(0, 150) ),
                                    cc.fadeTo( 2, 0)
                                ),
                                cc.removeSelf()
                            )
                        );
    },

    bearsFallAnim:function()
    {

        var bottom;
        var bottomMid;
        var upperMid;
        var upper; 

        if( this.m_arrBears.length <= 1 ) 
        {
            bottom      = this.m_arrBears[this.m_arrBears.length - 1];
        }
        else if( this.m_arrBears.length <= 2 ) 
        {
            bottomMid   = this.m_arrBears[this.m_arrBears.length - 1];
            bottom      = this.m_arrBears[this.m_arrBears.length - 2];
        }
        else if( this.m_arrBears.length <= 3 ) 
        {
            upperMid    = this.m_arrBears[this.m_arrBears.length - 1];
            bottomMid   = this.m_arrBears[this.m_arrBears.length - 2];
            bottom      = this.m_arrBears[this.m_arrBears.length - 3];
        }
        else
        {
            upper       = this.m_arrBears[this.m_arrBears.length - 1];
            upperMid    = this.m_arrBears[this.m_arrBears.length - 2];
            bottomMid   = this.m_arrBears[this.m_arrBears.length - 3];
            bottom      = this.m_arrBears[this.m_arrBears.length - 4];
        }

        if( bottom      != null ) bottom.hit();
        if( bottomMid   != null ) bottomMid.hit();
        if( upperMid    != null ) upperMid.hit();
        if( upper       != null ) upper.hit();

        var time        = 0.75;
        var timeBack    = 0.2;
        var timeLast    = 0.5;   

        if( bottom != null )
        bottom.runAction( cc.sequence( 
            cc.spawn( 
                cc.moveBy( time, cc.p(0, 0)).easing(cc.easeIn(time)),
                cc.rotateBy( time, -1 ).easing(cc.easeIn(time))
                ),
            cc.spawn( 
                cc.moveBy( timeBack, cc.p(0, 0)),
                cc.rotateBy( timeBack, 1 ) 
                ),
            cc.spawn( 
                cc.moveBy( timeLast, cc.p( 0, 0)),
                cc.rotateBy( timeLast, 15 )
                ) 
            )
        );

        if( bottomMid != null )
            bottomMid.runAction( cc.sequence( 
                cc.spawn( 
                    cc.moveBy( time, cc.p(-10, -5)).easing(cc.easeIn(time)),
                    cc.rotateBy( time, -2 ).easing(cc.easeIn(time))
                    ),
                cc.spawn( 
                    cc.moveBy( timeBack, cc.p(10, 5)),
                    cc.rotateBy( timeBack, 2 ) 
                    ),
                cc.spawn( 
                    cc.moveBy( timeLast, cc.p( 50, -10)),
                    cc.rotateBy( timeLast, 30 )
                    ) 
                )
            );

        if( upperMid != null )
            upperMid.runAction( cc.sequence( 
                cc.spawn( 
                    cc.moveBy( time, cc.p(-20, -5)).easing(cc.easeIn(time)),
                    cc.rotateBy( time, -4 ).easing(cc.easeIn(time))
                    ),
                cc.spawn( 
                    cc.moveBy( timeBack, cc.p(20, 5)),
                    cc.rotateBy( timeBack, 4 ) ),
                cc.spawn( 
                    cc.moveBy( timeLast, cc.p( 120, -20)),
                    cc.rotateBy( timeLast, 60 )
                    ) 
                )
            );

        if( upper != null )
            upper.runAction( cc.sequence( 
                cc.spawn( 
                    cc.moveBy( time, cc.p(-30, -5)).easing(cc.easeIn(time)),
                    cc.rotateBy( time, -8 ).easing(cc.easeIn(time))
                    ),
                cc.spawn( 
                    cc.moveBy( timeBack, cc.p(30, 5)),
                    cc.rotateBy( timeBack, 8 ) 
                    ),
                cc.spawn( 
                    cc.moveBy( timeLast, cc.p( 220, -40)),
                    cc.rotateBy( timeLast, 80 )
                    ) 
                )
            );
    },

    moveDown:function()
    {
        // Disable if there are land obstacles present\
        if( g_sharedBearNode.landObs.length > 0 ){
            this.tempDownCounter++;

            this.bHasJustClearedLandObstacles = true;

            return;
        }
        else
        {
            if( this.bHasJustClearedLandObstacles == true )
            {
                this.bHasJustClearedLandObstacles = false;

                if( this.m_iVisibleBear >= GC.MAX_STACK) {
                    this.m_iVisibleBear -= this.tempDownCounter;
                    this.stopAllActions();
                    this.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING * this.tempDownCounter ) ));

                    g_sharedUILayer.bg.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING * this.tempDownCounter ) ));
                    g_sharedUILayer.cloudNode.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING * this.tempDownCounter ) ));
                    g_sharedUILayer.cloudNode2.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING * this.tempDownCounter ) ));
                }
                
                this.tempDownCounter = 0;

                this.bEnableAddLandObstacles = false;

                return;
            }
        }
        
        if( this.m_iVisibleBear >= GC.MAX_STACK) {
            this.m_iVisibleBear--;
            this.stopAllActions();
            this.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING ) ));

            g_sharedUILayer.bg.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING ) ));
            g_sharedUILayer.cloudNode.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING ) ));
            g_sharedUILayer.cloudNode2.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING ) ));
        }

        this.clearNonVisibleBears();
    },

    clearNonVisibleBears:function()
    {
        // if( this.m_arrBears.length < 10) return;

        // for( var idx = (m_arrBears.length - 1); idx < m_arrBears.length - 5; idx++ )
        // {
        //     if( this.m_arrBears[idx] != null )
        //     {
        //         this.m_arrBears[idx].removeFromParent();
        //     }
        // }
    },

    panCamera:function()
    {
        cc.log("Pan camera");

        if( this.bHasJustClearedLandObstacles == true )
            {
                this.tempDownCounter--;
                this.bHasJustClearedLandObstacles = false;

                if( this.m_iVisibleBear >= GC.MAX_STACK) {
                    this.m_iVisibleBear -= this.tempDownCounter;
                    this.stopAllActions();
                    this.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING * this.tempDownCounter ) ));

                    g_sharedUILayer.bg.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING * this.tempDownCounter ) ));
                    g_sharedUILayer.cloudNode.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING * this.tempDownCounter ) ));
                    g_sharedUILayer.cloudNode2.runAction( cc.moveBy( 0.5, cc.p( 0, -GC.STACK_YPADDING * this.tempDownCounter ) ));
                }

                this.tempDownCounter = 0;

                this.bEnableAddLandObstacles = false;

                return;
            }
    }
});