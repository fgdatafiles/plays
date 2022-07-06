var GameControlsLayer = cc.Layer.extend({
    ctor:function() {
        this._super();
        this.init();
    },
    init:function()
    {
        //Initialize here
        
        // Keyboard listener
        if (cc.sys.capabilities.hasOwnProperty('keyboard')){
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyReleased: KeyListener.onKeyReleased
            }, this);
        }
        
        // Touch listener
        //NOTE: Default swipe listener is attach, change this depending on what game control you need
        //      Check Control Events for more control inputs
        cc.eventManager.addListener(DraggingListener, this );
        cc.eventManager.addListener(ClickListener, this );
    }
});



//Create a "one by one" touch event listener (processes one touch at a time)
var DraggingListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
    swallowTouches: true,
    //onTouchBegan event callback function
    onTouchBegan: function (touch, event) {
        // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.
        var target = event.getCurrentTarget();

        //Get the position of the current point relative to the button

        //cc.log("LENGTH m_arrObs " + g_sharedBearNode.m_arrObs.length);

        // for( var idx = 0; idx < g_sharedBearNode.m_arrObs.length; idx++ )
        // {
        //     var s = cc.size( g_sharedBearNode.m_arrObs[idx].collision().x, g_sharedBearNode.m_arrObs[idx].collision().y );

        //     var obj = g_sharedBearNode.m_arrObs[idx];
        //     var locationInNode = obj.convertToNodeSpace(touch.getLocation() );
        //     var rect = cc.rect( -obj.collision().width * 0.5, 0, obj.collision().width, obj.collision().height);
        //     // cc.log("Loca in node " + obj.collision().width + " " + obj.collision().height );
        //     if( cc.rectContainsPoint( rect, locationInNode) )
        //     {
        //         cc.log("TOUCHED OBSTACLE");
        //     }

        // }

        var locationInNode = target.convertToNodeSpace(touch.getLocation() );

        //Check the click area
        for( var idx = 0; idx < 3; idx++ )
            if (cc.rectContainsPoint( GC.SLOT_RECT[idx], locationInNode)) {
                if( g_sharedSlotManager.slots()[idx] != null) {

                    g_sharedSlotManager.slots()[idx].hide();
                           
                    g_sharedGameplayLyr.m_dragBear.changeType( g_sharedSlotManager.slots()[idx].getType()  );
                    g_sharedGameplayLyr.m_dragBear.hang();
                    g_sharedGameplayLyr.m_dragBear.setPosition( locationInNode );
                    g_sharedSlotManager.setActiveSlot(idx);

                    if( GC.TUTORIAL_ENABLED == true )
                    {
                        if( GC.TUTORIAL_PROGRESS == GC.TUTORIAL_STEPS.SLOTS ) {
                            g_HUDLayer.updateTutorial(true);
                        }
                    }
                }
                else
                    return false;

            return true;
        }
        return false;
    },
    //Trigger when moving touch
    onTouchMoved: function (touch, event) {
        //Move the position of current button sprite
        var target = event.getCurrentTarget();
        var delta = touch.getDelta();
        g_sharedGameplayLyr.m_dragBear.x += delta.x;
        g_sharedGameplayLyr.m_dragBear.y += delta.y;

        if( delta.x > GC.MOVE_MIN  )
            g_sharedGameplayLyr.m_dragBear.swayLeft();
        else  if( delta.x < -GC.MOVE_MIN  )
            g_sharedGameplayLyr.m_dragBear.swayRight();   


    },
    //Process the touch end event
    onTouchEnded: function (touch, event) {
        var target = event.getCurrentTarget();
        g_sharedGameplayLyr.m_dragBear.hide();
        g_sharedBearNode.addBear( g_sharedGameplayLyr.m_dragBear.getType(), touch.getLocation() );
    }
});

var ClickListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    
    // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
    swallowTouches: true,
    
    onTouchBegan: function(touch, event) {

        var _obs = g_sharedLevelManager.obstacles;
        var _landObs = g_sharedBearNode.landObs;
        var _foods = g_sharedLevelManager.foods;

        for( var idx = 0; idx < _obs.length; idx++ )
        {
            var obs = _obs[idx];
            var locationInNode = obs.convertToNodeSpace(touch.getLocation() );

            var rect = cc.rect( -obs.collision().width * 0.5,-obs.collision().height * 0.5, obs.collision().width, obs.collision().height);

            if( cc.rectContainsPoint( rect, locationInNode) ){
                obs.removeFromParent();
                Tools.removeFromArray( _obs , obs );
                
                return true;
            }
        }

        for( var idx = 0; idx < _foods.length; idx++ )
        {
            var food = _foods[idx];
            var locationInNode = food.convertToNodeSpace(touch.getLocation() );

            var rect = cc.rect( -food.collision().width * 0.5,-food.collision().height * 0.5, food.collision().width, food.collision().height);

            if( cc.rectContainsPoint( rect, locationInNode) ){

                g_sharedGameplayLyr.addHitSpark(food.getPosition());
                food.removeFromParent();
                Tools.removeFromArray( _foods , food );

                food.giveReward();

                
                return true;
            }
        }


        for( var idx = 0; idx < _landObs.length; idx++ )
        {
            var obj = _landObs[idx];
            var locationInNode = obj.convertToNodeSpace(touch.getLocation() );

            var rect = cc.rect( -obj.collision().width * 0.5, 0, obj.collision().width, obj.collision().height);

            if( cc.rectContainsPoint( rect, locationInNode) ){
                obj.removeFromParent();
                Tools.removeFromArray( _landObs , obj );

                if( _landObs.length <= 0 ) g_sharedBearNode.panCamera();
                
                return true;
            }
        }

        return false;
    },

    onTouchMoved: function(touch, event) {
    },

    onTouchEnded: function(touch, event){
    }
});

var KeyListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ALL_AT_ONCE,
    // TODO: For testing only.
    onKeyReleased: function(key, event){
        // TODO: For testing only. Disable this on launch
        if (key == cc.KEY.r) {
            cc.log("Reload");
            reload();
        } else if (key == cc.KEY.space) {
            if (GC.PAUSED) {
                cc.log("Resume");
                resume();
            } else {
                cc.log("Pause");
                pause();
            }
        } else if (key == cc.KEY.m) {
            if (GC.ENABLE_SFX) {
                cc.log("Mute");
                mute();
            } else {
                cc.log("Unmute");
                unmute();
            }
        } 

        if (key == cc.KEY.w) {
            g_sharedGameplayLyr.spawnBearAtRandomAvailableSlot();
        } 
         if (key == cc.KEY.e) {
            cc.log("number of obstacles " + g_sharedLevelManager.obstacles.length);
        } 
        if (key == cc.KEY.a) {
            g_sharedBearNode.addBear();
        }
        if (key == cc.KEY.s) {
            g_sharedBearNode.moveDown();
        }
        if (key == cc.KEY.d) {
            g_sharedBearNode.jumpTopmostBear();
        }

        if (key == cc.KEY.y) {
            g_HUDLayer.showPushNotifs();
        }

        if (key == cc.KEY.j) {
            g_sharedBearNode.bearsFallAnim();
        }

        if (key == cc.KEY.t) {
            g_HUDLayer.updateTutorial();
        }
    }
});

