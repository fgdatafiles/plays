var KoalaWalk = cc.SpriteBatchNode.extend({
    sprite:null,
    idleAnimation:null,
    tripAnimation:null,
    disabled:null,

    ctor:function()
    {
        this._super( res.char_koala_png);
        this.init();   
    },
 
    init:function()
    {
        this.initAction();
        this.initSpr();                
    },

    initAction:function()
    {
        this.idleAnimation = cc.repeatForever( Tools.createFramesAnimation( "anim_koalaWalkRight_", 0.07, 0, 11 ) );
        this.tripAnimation = Tools.createFramesAnimation( "anim_koalaTrip_", 0.07, 0, 11 );

        var aAction = cc.sequence(
                                  cc.moveBy(10, cc.p( GC.SCREENSIZE.width * 0.6, 0 ) )
                                   );
     
        this.runAction( aAction );
    }, 

    initSpr:function()
    {
        this.sprite = new cc.Sprite("#anim_koalaWalkRight_0.png"); 
        this.sprite.setAnchorPoint( 0.5, 0 );       
        this.addChild(this.sprite);  

        this.sprite.runAction( this.idleAnimation );
    },

    trip:function()
    {
        this.stopAllActions();
        this.sprite.stopAllActions();
        this.sprite.runAction( this.tripAnimation );  
    },

    collision:function()
    {       
        var rect = cc.rect(
            this.x - this.sprite.width * 0.5, 
            this.y,
            this.sprite.width,
            this.sprite.height 
            );

        return rect;
    }
});


var KoalaGlider = cc.SpriteBatchNode.extend({
    sprite:null,
    idleAnimation:null,

    ctor:function()
    {
        this._super( res.char_koala_png );
        this.init();   
    },
 
    init:function()
    {
        this.initAction();
        this.initSpr();   

        this.scheduleUpdate();             
    },

    initAction:function()
    {
        var speed = GC.DEFAULT_GLIDER_SPEED;
        var duration = 5 * speed /  GC.SPEED_GLIDER;

        this.idleAnimation = cc.repeatForever( Tools.createFramesAnimation( "anim_koalaGlider_", 0.04, 0, 11 ) );
    
        this.runAction( cc.spawn( cc.jumpBy( duration , cc.p( -GC.SCREENSIZE.width * 1.2, 0 ), -350, 1 ),
                                  cc.rotateBy( duration , 30) ) );

    }, 

    initSpr:function()
    {
        this.sprite = new cc.Sprite("#anim_koalaGlider_0.png");      
        this.addChild(this.sprite);  

        this.sprite.runAction( this.idleAnimation );      
    },

    collision:function()
    {
        var rect = cc.rect(
            this.x-this.sprite.width * 0.5, 
            this.y-this.sprite.height * 0.5,
            this.sprite.width,
            this.sprite.height 
            );
        
        return rect;
    },

    update:function(dt)
    {
        if( this.x <= -this.width + 5 ) {
            // added offset 5 to be sure it will be deleted
            this.stopAllActions();
            Tools.removeFromArray( g_sharedLevelManager.obstacles, this );
            this.removeFromParent();            
            this.unscheduleUpdate();
        }
    }
});

var Pigeon = cc.SpriteBatchNode.extend({
    sprite:null,
    idleAnimation:null,

    ctor:function()
    {
        this._super( res.gobj_png );
        this.init();   
    },
 
    init:function()
    {
        this.initAction();
        this.initSpr();

        this.scheduleUpdate();      
    },

    initAction:function()
    {
        this.idleAnimation = cc.repeatForever( Tools.createFramesAnimation( "gobj_pigeonFlying_", 0.04, 0, 7 ) );

        var speed = GC.DEFAULT_PIGEON_SPEED;
        var duration = 1.5 * speed /  GC.SPEED_PIGEON;
    
        var aAction = cc.sequence(  cc.jumpBy(duration, cc.p( GC.SCREENSIZE.width * 0.4, 0 ), -80, 1),
                                    cc.jumpBy(duration, cc.p( GC.SCREENSIZE.width * 0.4, 0 ), 80, 1),
                                    cc.jumpBy(duration, cc.p( GC.SCREENSIZE.width * 0.4, 0 ), -80, 1)

                                    );
        this.runAction( aAction );

    }, 

    initSpr:function()
    {
        this.sprite = new cc.Sprite("#gobj_pigeonFlying_0.png");       
        this.addChild(this.sprite);  

        this.sprite.runAction( this.idleAnimation );      
    },

    collision:function()
    {
        var rect = cc.rect(
            this.x-this.sprite.width * 0.5, 
            this.y-this.sprite.height * 0.5,
            this.sprite.width,
            this.sprite.height 
            );
        
        return rect;
    },

    update:function(dt)
    {
        if( this.x >= GC.SCREENSIZE.width + this.width + 5 ) {
            // added offset 5 to be sure it will be deleted
            this.stopAllActions();
            Tools.removeFromArray( g_sharedLevelManager.obstacles, this );
            this.removeFromParent();            
            this.unscheduleUpdate();
        }
    } 
});


var FoodType = 
{
    SLOW: 1,
    FAST: 2
}

var Food = cc.SpriteBatchNode.extend({
    sprite:null,
    fallAnimation:null,
    type:null,

    ctor:function()
    {
        this._super( res.gobj_png );
        this.init();   
    },
 
    init:function()
    {
        type = Tools.random(1, 2);
        
        this.initAction();
        this.initSpr();   

        this.scheduleUpdate();             
    },

    initAction:function()
    {
        switch( type )
        {
            case FoodType.SLOW:
                this.runAction( cc.repeatForever( cc.sequence( cc.rotateTo(0.5, -10),
                                cc.rotateBy(0.5, 10 ) ) ) );
                this.runAction( cc.moveBy(8, cc.p( 0, -GC.SCREENSIZE.height * 1.2) ) );
            break;
            case FoodType.FAST:                
                this.runAction( cc.moveBy(1.5, cc.p( 0, -GC.SCREENSIZE.height * 1.2) ) );

            break;
            default:
            break;
        } 
    }, 

    initSpr:function()
    {
        switch( type )
        {
            case FoodType.SLOW:
                this.sprite = new cc.Sprite("#gobj_foodParachute.png");   
            break;
            case FoodType.FAST:
                this.sprite = new cc.Sprite("#gobj_food.png");    
            break;
            default:
            break;
        }
            
        this.addChild(this.sprite);  

        
    },

    giveReward:function()
    {
        GC.COMBO++; g_HUDLayer.updateComboLabel();

        GC.SCORE+= 10 * GC.COMBO; 
        g_HUDLayer.updateFameScore();

        Tools.playSFX( res.sfx_get_honey_mp3, false );
    },

    collision:function()
    {
        var rect = cc.rect(
            this.x-this.sprite.width * 0.5, 
            this.y-this.sprite.height * 0.5,
            this.sprite.width,
            this.sprite.height 
            );
        
        return rect;
    },

    update:function(dt)
    {
        if( this.y <= -this.height + 5 ) {
            // added offset 5 to be sure it will be deleted
            this.stopAllActions();
            Tools.removeFromArray( g_sharedLevelManager.foods, this );
            this.removeFromParent();            
            this.unscheduleUpdate();
        }
    } 
});


var FXHit = cc.SpriteBatchNode.extend({
    sprite:null,
    idleAnimation:null,

    ctor:function()
    {
        this._super( res.fx_png );
        this.init();   
    },
 
    init:function()
    {
        this.initAction();
        this.initSpr();              
    },

    initAction:function()
    {
        this.idleAnimation = Tools.createFramesAnimation( "fx_hit_", 0.04, 0, 5 );
    }, 

    initSpr:function()
    {
        this.sprite = new cc.Sprite("#fx_hit_0.png");       
        this.addChild(this.sprite);  

        this.sprite.runAction( cc.sequence(this.idleAnimation, cc.removeSelf() ) );      
    }
});

