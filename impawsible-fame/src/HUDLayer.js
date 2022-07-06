
var g_HUDLayer = null;

var HudLayer = cc.Layer.extend({

	ctor:function() {
		this._super();		
		this.init();
	},

	init:function() {
		g_HUDLayer = this;

        this.uiNode = new cc.SpriteBatchNode(res.ui_png);
        this.addChild(this.uiNode);

        //this.initSlots();
        this.initFameScoreLabel();
        this.initHeightCountLabel();
        this.initComboLabel();
        this.initTimer();
        this.initPushNotifs();
        this.initTutorialArrows();

        this.updateFameScore();
        this.updateHeightCount();
        this.updateComboLabel();
	},

	updateFameScore:function() {
        var fame = Tools.formatNumber(GC.SCORE, 5);
		this.lblScore.setString(fame);
	},

	updateHeightCount:function() {
		this.lblHeight.setString(GC.HEIGHT.toString());
        //this.dispMeters.setString( Tools.pluralize( GC.HEIGHT, " METRO" ) );
	},

    updateComboLabel:function() {
        this.lblCombo.setString(GC.COMBO.toString());
    },

    updateTimer:function()
    {
        this.timer.setPercentage(100);
        var to1 = cc.progressTo( GC.LOAD_TIME, 0);
        this.timer.runAction(to1);

        this.timer.y = GC.STACK_YPADDING + g_sharedBearNode.m_arrBears.length * GC.STACK_YPADDING;
    },

    updateTutorial:function(success)
    {
        if( GC.TUTORIAL_PROGRESS >= GC.TUTORIAL_STEPS.FINISHED ) return;

        if( success ) {
            if( GC.TUTORIAL_PROGRESS > GC.TUTORIAL_STEPS.FINISHED ){
                this.arrow.setVisible(false);
            }
            else
            {
                GC.TUTORIAL_PROGRESS++; 
            }   
        }  
        else
        {
            GC.TUTORIAL_PROGRESS--; 
        }   

        this.updateArrow();    
    },

    updateArrow:function()
    {
        if( GC.TUTORIAL_PROGRESS < GC.TUTORIAL_STEPS.FINISHED ) {
            this.arrow.setVisible(true);
            this.arrow.setPosition( GC.TUTORIAL_PROGRESS_POS[GC.TUTORIAL_PROGRESS] );  
        }
        else
            this.arrow.setVisible(false);
    },

    hideTimer:function()
    {
        this.timer.stopAllActions();
        this.timer.setPercentage(0);
    },

    showPushNotifs:function(val)
    {
        if( LevelData.getPushNotifsData[val] == null ) return;

        this.notifMsg.setString( LevelData.getPushNotifsData[val].msg );

        var random = Tools.random(0, 4);

        for( var idx = 0; idx < this.arrPushNotifsBg.length; idx++ )
        {
            this.arrPushNotifsBg[idx].setVisible( false );
        } 

        this.arrPushNotifsBg[random].setVisible( true );

        this.pushNotifsNode.runAction( cc.sequence( cc.moveBy( 0.5, cc.p(0, GC.SCREENSIZE.height * 0.35)),
                                                    cc.delayTime( 3.0 ),
                                                    cc.moveBy( 0.5, cc.p(0, -GC.SCREENSIZE.height * 0.35))
                                                     ) );

        Tools.playSFX( res.sfx_push_notifs_mp3, false );

        
    },

	initFameScoreLabel:function() {

        this.fameBg = cc.Sprite.create("#ui_fame.png");
        this.fameBg.setPosition( GC.SCREENSIZE.width * 0.1, GC.SCREENSIZE.height * 0.9 );
        this.fameBg.setAnchorPoint(0, 0.5);
        this.addChild(this.fameBg);

		this.lblScore = new cc.LabelBMFont("99999", res.font_clappyFamescore_fnt);
		this.lblScore.setPosition( this.fameBg.width * 0.9, this.fameBg.height * 0.6);
        this.lblScore.setAnchorPoint(1, 0.5);
        this.lblScore.setScale(0.5);
		this.fameBg.addChild( this.lblScore );
	},

	initHeightCountLabel:function() {

		this.lblHeight = new cc.LabelBMFont("99999", res.font_clappylikemeternos_fnt);
		this.lblHeight.setPosition( GC.SCREENCENTER.x, GC.SCREENSIZE.height * 0.9 );
		this.lblHeight.setAnchorPoint(1, 0.5);
		this.addChild( this.lblHeight );

        this.dispMeters = new cc.LabelBMFont("METERS", res.font_malamnotif_fnt);
        this.dispMeters.setPosition( GC.SCREENCENTER.x, GC.SCREENSIZE.height * 0.9 );
        this.dispMeters.setAnchorPoint(0, 0.5);
        this.addChild( this.dispMeters );
	},

    initComboLabel:function()
    {
        this.dispCombo = cc.Sprite.create("#ui_combo.png");
        this.dispCombo.setPosition( GC.SCREENSIZE.width * 0.1, GC.SCREENSIZE.height * 0.78 );
        this.dispCombo.setAnchorPoint(0, 0.5);
        this.addChild( this.dispCombo );

        this.lblX = new cc.LabelBMFont(" X", res.font_komikaCombo_fnt);
        this.lblX.setAnchorPoint(0, 0.5);
        this.lblX.setPosition( this.dispCombo.width, this.lblX.height * 0.5);
        this.dispCombo.addChild( this.lblX );

        this.lblCombo = new cc.LabelBMFont("99999", res.font_komikaCombo_fnt);        
        this.lblCombo.setAnchorPoint(0, 0.5);
        this.lblCombo.setPosition( this.dispCombo.width + this.lblX.width, this.dispCombo.height * 0.8 );
        this.lblCombo.setScale(1.5);
        this.dispCombo.addChild( this.lblCombo );
    },

    initTimer:function()
    {
        this.timer = cc.ProgressTimer.create(cc.Sprite.create("#ui_timer.png"));
        this.timer.setType(cc.ProgressTimer.TYPE_RADIAL);
        this.timer.setBarChangeRate(cc.p(1,0));
        this.timer.setMidpoint(cc.p(0.5,0.5));
        this.timer.setPosition( GC.SCREENSIZE.width * 0.5, GC.SCREENSIZE.height * 0.6 );
        g_sharedBearNode.addChild(this.timer);
    },

    initPushNotifs:function()
    {
        this.pushNotifsNode = cc.Node.create();
        this.pushNotifsNode.setPosition( cc.p( GC.SCREENSIZE.width * 0.2, -GC.SCREENSIZE.height * 0.2) );
        this.addChild( this.pushNotifsNode );

        this.arrPushNotifsBg = [];

        this.bg1 = cc.Sprite.create("#ui_notif_adventureGram.png");
        this.bg2 = cc.Sprite.create("#ui_notif_bearBook.png");
        this.bg3 = cc.Sprite.create("#ui_notif_fiveSquare.png");
        this.bg4 = cc.Sprite.create("#ui_notif_mug.png");
        this.bg5 = cc.Sprite.create("#ui_notif_uvideo.png");

        this.arrPushNotifsBg.push( this.bg1 );
        this.arrPushNotifsBg.push( this.bg2 );
        this.arrPushNotifsBg.push( this.bg3 );
        this.arrPushNotifsBg.push( this.bg4 );
        this.arrPushNotifsBg.push( this.bg5 );

        for( var idx = 0; idx < this.arrPushNotifsBg.length; idx++ )
        {
            this.pushNotifsNode.addChild( this.arrPushNotifsBg[idx] );
            this.arrPushNotifsBg[idx].setVisible( false );
        }

        this.notifMsg = new cc.LabelBMFont("", res.font_malamnotif_fnt, 480, cc.TEXT_ALIGNMENT_LEFT, GC.ZERO);
        this.notifMsg.setPosition( -this.bg1.width * 0.38, this.bg1.height * 0.1);
        this.notifMsg.setAnchorPoint(0, 0.5);
        this.notifMsg.setScale(0.55);
        this.notifMsg.setString( "A beary furfect bear tower is being built in the middle of the forest!" );
        this.pushNotifsNode.addChild( this.notifMsg );
    },

    initTutorialArrows:function()
    {
        this.arrow = cc.Sprite.create("#ui_arrow.png");
        this.arrow.setPosition( GC.SCREENSIZE.width * 0.5, GC.SCREENSIZE.height * 0.5 );
        this.arrow.setAnchorPoint(0.5, 0);
        this.addChild(this.arrow);
        this.arrow.setVisible(false);

        this.arrow.runAction( cc.repeatForever( cc.jumpBy(1, cc.p( 0, 0 ), 100, 1) ) );
    }
});




var g_sharedUILayer = null;
var UILayer = cc.Layer.extend({
	bg:null,
    spawnCount:null,
    cloudNode:null,
    slotBoxes:null,

	ctor:function() {
		this._super();		
		this.init();
	},

	init:function() {
		g_sharedUILayer = this;

        this.spawnCount = 0;
        this.slotBoxes = [];

		var bgSky = cc.Sprite.create(res.bgSky_png);
		bgSky.setPosition( GC.SCREENCENTER );
		this.addChild(bgSky);

		this.bg = cc.Sprite.create(res.bg_png);
		this.bg.setPosition( GC.SCREENCENTER );
		this.addChild(this.bg);

        this.initClouds();

		var slot1 = new cc.Sprite("#gobj_greenBox_0.png");
        slot1.setPosition( GC.SLOT_POS[0] );
        this.addChild( slot1 ); 

        var slot2 = new cc.Sprite("#gobj_orangeBox_0.png");
        slot2.setPosition( GC.SLOT_POS[1] );
        this.addChild( slot2 ); 

        var slot3 = new cc.Sprite("#gobj_pinkBox_0.png");
        slot3.setPosition( GC.SLOT_POS[2] );
        this.addChild( slot3 ); 

        var numSlots = 3;
        for( var idx = 0;  idx < numSlots; idx++ )
        {
            var box = new cc.Sprite( "#gobj_Box_0.png" );
            box.setPosition( GC.SLOT_POS[idx] );
            this.addChild( box ); 
            this.slotBoxes.push(box);                  
        }

        this.initCheat();
        
        this.scheduleUpdate();
    },

    initClouds:function()
    {
        this.cloudNode = cc.Node.create();
        this.cloudNode.setPosition( 0, GC.SCREENSIZE.height );
        this.addChild( this.cloudNode );

        var cloud1 = cc.Sprite.create("res/bg/bg_cloud_1.png");
        cloud1.setPosition( 0, GC.SCREENSIZE.height * 0.1 * Tools.random( 1, 9 ) );
        this.cloudNode.addChild(cloud1);

        var cloud2= cc.Sprite.create("res/bg/bg_cloud_2.png");
        cloud2.setPosition( GC.SCREENSIZE.width * 0.5, GC.SCREENSIZE.height * 0.1 * Tools.random( 1, 9 ) );
        this.cloudNode.addChild(cloud2);

        cloud1.runAction( 
            cc.repeatForever( 
                cc.sequence(
                    cc.moveBy(30, cc.p( GC.SCREENSIZE.width, 0 ) ),
                    cc.moveBy(30, cc.p( -GC.SCREENSIZE.width, 0 ) ) 
                ) 
            )
        );

        cloud2.runAction( 
            cc.repeatForever( 
                cc.sequence(
                    cc.moveBy(30, cc.p( GC.SCREENSIZE.width, 0 ) ),
                    cc.moveBy(30, cc.p( -GC.SCREENSIZE.width, 0 ) ) 
                ) 
            )
        );

        this.cloudNode2 = cc.Node.create();
        this.cloudNode2.setPosition( 0, GC.SCREENSIZE.height * 2 );
        this.addChild( this.cloudNode2 );

        var cloud3 = cc.Sprite.create("res/bg/bg_cloud_0.png");
        cloud3.setPosition( 0, GC.SCREENSIZE.height * 0.7 * Tools.random( 1, 9 ) );
        this.cloudNode2.addChild(cloud3);

        var cloud4 = cc.Sprite.create("res/bg/bg_cloud_1.png");
        cloud4.setPosition( GC.SCREENSIZE.width * 0.3, GC.SCREENSIZE.height * 0.1 * Tools.random( 1, 9 ) );
        this.cloudNode2.addChild(cloud4);

        cloud3.runAction( 
            cc.repeatForever( 
                cc.sequence(
                    cc.moveBy(30, cc.p( GC.SCREENSIZE.width, 0 ) ),
                    cc.moveBy(30, cc.p( -GC.SCREENSIZE.width, 0 ) ) 
                ) 
            )
        );

        cloud4.runAction( 
            cc.repeatForever( 
                cc.sequence(
                    cc.moveBy(30, cc.p( GC.SCREENSIZE.width, 0 ) ),
                    cc.moveBy(30, cc.p( -GC.SCREENSIZE.width, 0 ) ) 
                ) 
            )
        );
    },

    update:function()
    {
        if( this.cloudNode.y  <= -GC.SCREENSIZE.height )
            this.cloudNode.y = GC.SCREENSIZE.height;

        if( this.cloudNode2.y  <= -GC.SCREENSIZE.height )
            this.cloudNode2.y = GC.SCREENSIZE.height;
    },

    initSlotBears:function()
    {
        if( this.spawnCount >= GC.MAX_SLOTS ){
            return;
        }

        this.spawnCount++;

        var currentFilledSlots = g_sharedSlotManager.slotFilledCount();
        var index = g_sharedSlotManager.sequence()[currentFilledSlots];
        var type  = g_sharedSlotManager.types()[currentFilledSlots];

        var slotbear = new SlotBear( type );    
        slotbear.setPosition( GC.SLOT_POS[index] );
        this.addChild(slotbear);

        g_sharedSlotManager.slots()[index] = slotbear; 

        this.updateCheatLabel();

        Tools.playSFX( res.sfx_pop_out_from_box_mp3, false );

        // for( var idx = 0; idx < this.slotBoxes.length; idx++ )
        // {

        //     this.slotBoxes[idx].setVisible(true);

        //     if( g_sharedSlotManager.slots()[idx] != null )
        //         this.slotBoxes[idx].setVisible(false);
        // }

        
    },

    resetSlots:function()
    {
        this.spawnCount = 0;
    },

    initCheat:function()
    {
    	if( !GC.DEBUG.CHEAT_MODE ) return;

    	this.debugLabel = cc.LabelTTF.create("Debug Cheat: ", "Arial", 32);
    	this.debugLabel.setAnchorPoint( 1, 1 );
    	this.debugLabel.setColor( cc.color( 255, 0, 0, 255) );
    	this.debugLabel.setPosition( GC.SCREENSIZE.width, GC.SCREENSIZE.height );
    	this.addChild(this.debugLabel);
    },

    updateCheatLabel:function()
    {
    	if( !GC.DEBUG.CHEAT_MODE ) return;

    	var str = "Debug Cheat: \n";

    	for( var idx = 0; idx < g_sharedSlotManager.sequence().length; idx++ )
    	{
    		str = str + " " + (g_sharedSlotManager.sequence()[idx] + 1);
    	}

    	this.debugLabel.setString( str );
    }
});
