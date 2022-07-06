

var SlotBear = cc.Node.extend({
    sprGrizzly:null,
    sprIce:null,
    sprPanda:null,
    sprActive:null,
    type:null,
    
    ctor:function(type){
        this._super();

        this.type       = type;     

        this.initAnimation();
        this.initSprites();
        this.setType();   
    },
    
    initSprites:function()
    {
        this.sprGrizzly = new cc.Sprite("#gobj_grizzBox_0.png");
        this.sprIce     = new cc.Sprite("#gobj_iceBearBox_0.png");
        this.sprPanda   = new cc.Sprite("#gobj_panBox_0.png");

        this.addChild( this.sprGrizzly );
        this.addChild( this.sprIce     );
        this.addChild( this.sprPanda   );
    },

    initAnimation:function()
    {
        switch( this.type )
        {
            case BearType.GRIZZLY:
                this.idleAnimation = Tools.createFramesAnimation( "gobj_grizzBox_", 0.75, 0, 2 );
            break;
            case BearType.ICE:
                this.idleAnimation = Tools.createFramesAnimation( "gobj_iceBearBox_", 0.75, 0, 2 );
            break;
            case BearType.PANDA:
                this.idleAnimation = Tools.createFramesAnimation( "gobj_panBox_", 0.75, 0, 2 );
            break;
        }

        this.idleAnimation.retain();
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

        this.idle();
        
    },

    changeType:function(type)
    {
        this.type       = type;

        this.setType();
        this.setAnimation();
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

    
    getType:function()
    {
        return this.type;
    }
});