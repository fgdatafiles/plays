var g_sharedLevelManager = null;

var ObstacleType = {
	GROUND: 0,
	AERIAL: 1,
	PIGEON: 2
}

var LevelManager = cc.Class.extend({

	obstacles:null,
    foods:null,

	obsPool:null,
	iCurrentObs:null,


	ctor:function()
	{
		this.init();        
	},

	init:function()
	{
		g_sharedLevelManager = this;

		this.resetObstacles();


        this.obstacles = [];        
        this.foods     = [];
	},

	resetObstacles:function()
	{
		this.obsPool   = [];
		this.iCurrentObs = 0;
	},

	updateObstaclePool:function()
    {
        if( LevelData.getData[GC.HEIGHT] == null ) return;

        this.resetObstacles();        

        this.obsPool = [];

        var ground = LevelData.getData[GC.HEIGHT].ground;
        var aerial = LevelData.getData[GC.HEIGHT].aerial;
        var pigeon = LevelData.getData[GC.HEIGHT].pigeon;        

        for( var idx = 0; idx < ground; idx++ ) this.obsPool.push( ObstacleType.GROUND );
        for( var idx = 0; idx < aerial; idx++ ) this.obsPool.push( ObstacleType.AERIAL );
        for( var idx = 0; idx < pigeon; idx++ ) this.obsPool.push( ObstacleType.PIGEON );

        Tools.shuffleArray( this.obsPool );

        g_sharedGameplayLyr.scheduleSpawnObstacles();
    },

    getNextObs:function()
    {
    	return this.obsPool[this.iCurrentObs];
    },

    addObs:function()
    {
    	if( this.obsPool.length <= 0 || this.iCurrentObs >= this.obsPool.length ) return;

    	g_sharedBearNode.addObs( this.getNextObs() );

    	this.iCurrentObs++;
    },

    spawnFood:function()
    {
        if( GC.MAX_HEIGHT_REACHED % 10 == 0 )
        {
            var food = new Food();
            food.setPosition( GC.SCREENSIZE.width * 0.75, GC.SCREENSIZE.height);
            g_sharedGameplayLyr.addChild(food);

            this.addFood(food);
        }
    },

    addFood:function(food)
    {
        this.foods.push(food);
    },

    updateObstacleSpeed:function()
    {
        if( LevelData.getData[GC.MAX_HEIGHT_REACHED] != null ) {
            GC.SPEEDMULT_PIGEON = LevelData.getData[GC.MAX_HEIGHT_REACHED].pSpeed;
            GC.SPEEDMULT_GLIDER = LevelData.getData[GC.MAX_HEIGHT_REACHED].gSpeed;
        }
    },

    updateLoadingTime:function()
    {
        if( LevelData.getData[GC.MAX_HEIGHT_REACHED] != null ) {
            GC.LOAD_TIME = LevelData.getData[GC.MAX_HEIGHT_REACHED].loadTime;
        }
    }
});