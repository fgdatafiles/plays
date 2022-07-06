
var BearType = {
    GRIZZLY: 0,
    ICE: 1,
    PANDA: 2
};

var Bear = cc.Node.extend({
    sprGrizzly:null,
    sprIce:null,
    sprPanda:null,
    sprActive:null,
    type:null,
    goState:null,
    
    showAnimation:null,
    idleAnimation:null,
    hangAnimation:null,
    hitAnimation:null,
    jumpAnimation:null,
    fallAnimation:null,
    landAnimation:null,
    
    ctor:function(type){
        this._super();

        this.type       = type; 
        this.goState    = GC.GameObjectState.DEFAULT;      

        this.setAnimation();
        this.initSprites();
        this.setType();  
        this.initTimer();     
    },
    
    initSprites:function()
    {
        this.sprGrizzly = new cc.Sprite("#anim_grizzIdle_0.png");
        this.sprIce     = new cc.Sprite("#anim_iceBearIdle_0.png");
        this.sprPanda   = new cc.Sprite("#anim_panIdle_0.png");

        this.addChild( this.sprGrizzly );
        this.addChild( this.sprIce     );
        this.addChild( this.sprPanda   );

        this.sprGrizzly.setAnchorPoint( 0.5, 0 );
        this.sprIce.setAnchorPoint( 0.5, 0 );    
        this.sprPanda.setAnchorPoint( 0.5, 0 );
    },

    setType:function()
    {
        this.sprGrizzly.setVisible(false);
        this.sprIce.setVisible(false);
        this.sprPanda.setVisible(false);

        switch( this.type )
        {
            case BearType.GRIZZLY:
                this.sprActive = this.sprGrizzly;
            break;
            case BearType.ICE:
                this.sprActive = this.sprIce;
            break;
            case BearType.PANDA:
                this.sprActive = this.sprPanda;
            break;
        }

        this.sprActive.setVisible(true);
    },

    changeType:function(type)
    {
        this.type       = type;

        this.setType();
        this.setAnimation();
    },

    setAnimation:function(){

        switch( this.type )
        {
            case BearType.GRIZZLY:
                this.idleAnimation = Tools.createFramesAnimation( "anim_grizzIdle_", 0.04, 0, 11 );
                this.hangAnimation = Tools.createFramesAnimation( "anim_grizzDrag_", 0.02, 0, 11 );
                this.hitAnimation  = Tools.createFramesAnimation( "anim_grizzHit_", 0.02, 0, 0 );
                this.jumpAnimation = Tools.createFramesAnimation( "anim_grizzParachute_", 0.05, 0, 11 );
                this.fallAnimation = Tools.createFramesAnimation( "anim_grizzLand_", 0.04, 0, 0 );
                this.landAnimation = Tools.createFramesAnimation( "anim_grizzLand_", 0.04, 1, 11 );
            break;
            case BearType.ICE:
                this.idleAnimation = Tools.createFramesAnimation( "anim_iceBearIdle_", 0.04, 0, 11 );
                this.hangAnimation = Tools.createFramesAnimation( "anim_iceBearDrag_", 0.02, 0, 11 );
                this.hitAnimation  = Tools.createFramesAnimation( "anim_iceBearHit_", 0.02, 0, 0 );
                this.jumpAnimation = Tools.createFramesAnimation( "anim_iceBearParachute_", 0.05, 0, 11 );
                this.fallAnimation = Tools.createFramesAnimation( "anim_iceBearLand_", 0.04, 0, 0 );
                this.landAnimation = Tools.createFramesAnimation( "anim_iceBearLand_", 0.04, 1, 11 );
            break;
            case BearType.PANDA:
                this.idleAnimation = Tools.createFramesAnimation( "anim_panIdle_", 0.04, 0, 11 );
                this.hangAnimation = Tools.createFramesAnimation( "anim_panDrag_", 0.02, 0, 11 );
                this.hitAnimation  = Tools.createFramesAnimation( "anim_panHit_", 0.02, 0, 0 );
                this.jumpAnimation = Tools.createFramesAnimation( "anim_panParachute_", 0.05, 0, 11 );
                this.fallAnimation = Tools.createFramesAnimation( "anim_panLand_", 0.04, 0, 0 );
                this.landAnimation = Tools.createFramesAnimation( "anim_panLand_", 0.04, 1, 11 );
            break;
        }

        this.idleAnimation.retain();
        this.hangAnimation.retain();
        this.hitAnimation.retain();
        this.jumpAnimation.retain();
        this.fallAnimation.retain();
        this.landAnimation.retain();
    },
    
    

    hang:function(){
        this.sprActive.stopAllActions();
        this.sprActive.rotation = -60;
        this.sprActive.setAnchorPoint( 0.8, 0.8 );

        var rotateTo    = cc.rotateBy(0.75, -10);
        var rotateBack  = cc.rotateBy(0.75, 10);
        var seq = cc.sequence(rotateTo, rotateBack);
        this.sprActive.runAction( cc.repeatForever(seq) );
        this.sprActive.runAction( cc.repeatForever(this.hangAnimation) );
    },

    showCallback:function(){
        this.idle();
    },
    
    idle:function(){
        this.sprActive.stopAllActions();
        this.sprActive.runAction( cc.repeatForever(this.idleAnimation) );
    },
    
    hide:function(){
        this.sprActive.setVisible(false);
    },

    show:function(){
        this.sprActive.setVisible(true);
    },

    fall:function(pos)
    {
        this.stopAllActions();
        var distance = Math.abs(this.y - pos.y);
        var speed = 800;
        var time = distance / speed; 

        this.sprActive.runAction( this.fallAnimation ); 

        this.runAction( cc.sequence( 
            cc.moveTo( time, pos).easing(cc.easeSineIn()),
            cc.callFunc( this.fallCallback, this) ) );
    },

    hit:function()
    {
        this.sprActive.stopAllActions();
        this.sprActive.runAction( this.hitAnimation );
    },

    returnToSlot:function()
    {
        this.stopAllActions();

        this.runAction( cc.removeSelf() );
    },

    fallCallback:function()
    {
        // this.sprActive.runAction( this.landAnimation );
        g_sharedBearNode.moveDown();

        this.sprActive.runAction( cc.sequence( this.landAnimation,
                                    cc.callFunc(this.idle, this) ) ) ;
    },

    returnCallback:function()
    {
         // Remove score
         // Remove combo
    },

    bearStopAllActions:function()
    {
        this.sprActive.stopAllActions();
        this.stopAllActions();
    },

    getType:function()
    {
        return this.type;
    },

    jump:function()
    {
        this.sprActive.stopAllActions();
        this.sprActive.runAction( this.jumpAnimation );

        this.sprActive.runAction( cc.sequence( cc.moveBy(0.2, cc.p(-50, 10)), cc.moveBy(4, cc.p(-800, -1000) ), cc.removeSelf() ));
    },

    swayLeft:function()
    {
        this.setSwayRotation( 30 );
    },

    swayRight:function()
    {
        this.setSwayRotation( -30 );
    },

    setSwayRotation:function(val)
    {
        var currentRot = this.sprActive.rotation;
        var finalRot = currentRot + val;
        finalRot = cc.clampf( finalRot,  -120, -20);

        var aRotateTo   = cc.rotateTo( 0.05, finalRot );
        var aRotateBack = cc.rotateTo( 0.25, finalRot-val );
        var aSequence   = cc.Sequence.create( aRotateTo, aRotateBack );
        this.sprActive.runAction( aSequence );
    },

    collision:function()
    {
        var rect = cc.rect(
            this.x - this.sprActive.width * 0.5, 
            this.y,
            this.sprActive.width,
            this.sprActive.height 
            );

        return rect;
    },

    initTimer:function()
    {
        this.timer = cc.ProgressTimer.create(cc.Sprite.create("#ui_timer.png"));
        this.timer.setType(cc.ProgressTimer.TYPE_RADIAL);
        this.timer.setBarChangeRate(cc.p(1,0));
        this.timer.setMidpoint(cc.p(0.5,0.5));
        this.timer.setPosition( this.sprActive.width * 0.5, this.sprActive.height * 1.5 );
        this.sprActive.addChild(this.timer);

        this.hideTimer();
    },

    hideTimer:function()
    {
        this.timer.stopAllActions();
        this.timer.setPercentage(0);
    },

    updateTimer:function()
    {
        this.timer.setPercentage(100);
        var to1 = cc.progressTo(3, 0);
        this.timer.runAction(to1);
    }
});