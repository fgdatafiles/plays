// represent game level - main object which contain information about current game state
// and other info 
function GAME_LEVEL()
{   
    this.rootContainer = undefined;
    this.objContainer = undefined;      // layer, hold all level objects

    this.description = undefined;	// level description
    this.levelId = undefined;
    this.isLoaded = false;      // return true if level loaded
    this.staticObj = undefined;    // array of static objects
    this.stars = undefined;     // array of stars
    this.world = undefined;     // physic world object
    this.nextSpawnObjectIndex = 0;
    this.dynamicObjectsList = undefined;    // array of total spawned dynamic objects
    this.starsContainer = undefined;    // layer with stars
    this.isDynamicObjectSpawned = undefined;    // true if all dynamic objects spawned
    this.spawnObjectAgo = 0; // how ago spawn object(in game tics)

    // unload level state
    this.Unload = function()
    {       
        if(!this.isLoaded)
        {
            console.log("Trying call unload level before load");
            return;
        }

        // description tip
        if(this.tip !== undefined)
        {
            for(var t = 0; t < this.tip.length; ++t)
            {
                this.tip[t].Free();
                this.tip[t] = undefined;
            }
            this.tip.length = 0;// TRUE way to delete/remove elements from array
            this.tip = undefined;
        }

        // stars
        for(var s = 0; s < this.stars.length; ++ s)
        {   
            this.stars[s].Free();
            this.stars[s] = undefined;
        }
        this.stars.length = 0;
        this.stars = undefined;

        // stars container
        this.rootContainer.removeChild(this.starsContainer);
        this.starsContainer = undefined;

        // static objects
        for(var s = 0; s < this.staticObj.length; ++s)
        {
            this.staticObj[s].Free();
            this.staticObj[s] = undefined;
        }
        this.staticObj.length = 0;
        this.staticObj = undefined;

        // dynamic objects
        this.isDynamicObjectSpawned = false;
        for(var d = 0; d < this.dynamicObjectsList.length; ++d)
        {
            this.dynamicObjectsList[d].Free();
            this.dynamicObjectsList[d] = undefined;
        }
        this.dynamicObjectsList.length = 0;
    
        // world
        this.world.SetContactListener(undefined);
        this.world = undefined;

        // clear container
        removeAllChild(this.objContainer);
        this.rootContainer.removeChild(this.objContainer);
        this.objContainer = undefined;
        this.rootContainer = undefined;

        this.desription = undefined;
        this.isLoaded = false;
    }

    // load level
    // levelId - current level number
    // stage - pixi stage to add texture into it
    this.Load = function(levelId, rootContainer)
    {           
        this.levelId = levelId;
        this.description = GAME_LEVELS[this.levelId];

        // Object container
        this.rootContainer = rootContainer; 
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.objContainer.position.x = 0;
        this.objContainer.position.y = 0;
        this.rootContainer.addChild(this.objContainer);  // register in stage

        // load physic
        this.world = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, 1.5), true);
        var listener = new Box2D.Dynamics.b2ContactListener;
        listener.BeginContact = function(contact) {
            var dynObjectA = contact.GetFixtureA().GetBody().GetUserData();	// Only dynamic objects have user data
            if(dynObjectA !== undefined && dynObjectA !== null)
                dynObjectA.doShiver();

            var dynObjectB = contact.GetFixtureB().GetBody().GetUserData();	// Only dynamic objects have user data
            if(dynObjectB !== undefined && dynObjectB !== null)
                dynObjectB.doShiver();			

        }
        listener.EndContact = function(contact) {
            // console.log(contact.GetFixtureA().GetBody().GetUserData());
        }
        listener.PostSolve = function(contact, impulse) {

        }
        listener.PreSolve = function(contact, oldManifold) {

        }
        this.world.SetContactListener(listener);

        //dynamic objects: create (not init or spawn) 
        this.nextSpawnObjectIndex = 0;
        this.dynamicObjectsList = new Array(this.description.objects.length);
        for(var d = 0; d < this.dynamicObjectsList.length; ++d)
        {
            var dynObj = new LEVEL_Object_Dynamic();
            dynObj.Init(this.description.objects[d]);
            this.dynamicObjectsList[d] = dynObj;
        }
        this.isDynamicObjectSpawned = false;

        // load static objects
        this.staticObj = new Array(this.description.staticObj.length);
        for(var i = 0; i < this.description.staticObj.length; ++ i)
        {
            var objDescr = this.description.staticObj[i];
            this.staticObj[i] = new GameStaticObjects();
            this.staticObj[i].Init(this.objContainer, this.world, objDescr);
        }

        // output level count number
        var levelCount = new PIXI.BitmapText("level "+(this.levelId + 1), {font: GlobalScale(45)+"px game_top_menu_font"});
        levelCount.position.x =  GlobalScale(280);
        levelCount.position.y =  GlobalScale(300);
        this.objContainer.addChild(levelCount);

        // load stars
        // contain stars, need to place stars layer on top to layers chain
        this.starsContainer = new PIXI.DisplayObjectContainer(); 
        this.starsContainer.position.x = 0;
        this.starsContainer.position.y = 0;
        this.rootContainer.addChild(this.starsContainer);

        this.stars = new Array(this.description.stars.length);
        for(var i = 0; i < this.description.stars.length; ++ i)
        {   
            var starDescr = this.description.stars[i];
            var star = new LEVEL_Object_Star();
            star.Load(this.starsContainer, starDescr[0], starDescr[1]);
            this.stars[i] = star;
        }

        // tip for level
        if(this.description.tip !== undefined)
        {
            this.tip = new Array(this.description.tip.length);
            for(var t = 0; t < this.description.tip.length; ++t)
            {
                var tipDescr = this.description.tip[t];
                var tipObj = new Level_Object_Tip();
                tipObj.Init(this.objContainer, tipDescr); 
                this.tip[t] = tipObj;
            }
        }


        this.isLoaded = true;
    }

    // spawn next obect in object chain in posion x,y
    this.SpawnNextObject = function(x,y)
    {   
        if(this.isDynamicObjectSpawned === true)
            return;
        
        this.spawnObjectAgo = 0;

        this.dynamicObjectsList[this.nextSpawnObjectIndex].SpawnObject(this.objContainer, x, y);
        this.nextSpawnObjectIndex += 1;

        // spawn last object
        if(this.nextSpawnObjectIndex == this.dynamicObjectsList.length)
        {
            this.isDynamicObjectSpawned = true; 
            return;
        }
    }
    

    // return true if all gameobject sleeped
    this.isGameObjectsSleep = function()
    {
        for(o =0; o < this.dynamicObjectsList.length; ++o)
        {
            st = this.dynamicObjectsList[o].isObjectSleep();
            if( st === undefined ||
                st === false)
            return false;
        }

        return true;
    }

    // true if object will spawn ago
    this.isSpawnAgo = function()
    {
        return this.spawnObjectAgo > 300;
    }

    // Update level state
    this.Update = function()
    {
        if(!this.isLoaded || GAME.isGamePaused())
            return;

        this.spawnObjectAgo +=1;
        
        var it = GAME.isGamePaused() ? 0 : 1/30; // stop physic update

        // update Physics
        this.world.Step(
                it	//frame-rate
                ,  8    //velocity iterations
                ,  3    //position iterations
                );

        this.world.ClearForces();

        // update dynamic objects
        for(var i = 0; i < this.nextSpawnObjectIndex; ++i)
            this.dynamicObjectsList[i].Update();

        // update static objects
        for(var i = 0; i < this.staticObj.length; ++i)
            this.staticObj[i].Update();

        // Stars iteract with objects
        for(var s=0; s < this.stars.length; ++s)
        {   
            // get position of star centre point    
            var star = this.stars[s];

            var isShine = false;
            for(var so = 0; so < this.nextSpawnObjectIndex; ++so)
            {   
                if(star.IsIterateWithGameObject(this.dynamicObjectsList[so].gameObject))
                {
                    star.LossEnergy();
                    isShine = true;
                }
            }

            isShine? star.Shine() : star.Fade();
            star.Update();
        }

        // check if level fail
        this.isFail();

    }

    // check if level fail
    this.isFail = function()
    {	
        for(var so = 0; so < this.nextSpawnObjectIndex; ++so)
        {   
            var obj = this.dynamicObjectsList[so].gameObject;
            var x = UnitsToPixels(obj.physObj.GetPosition().x);
            var y = UnitsToPixels(obj.physObj.GetPosition().y);
            if(y > Screen.VirtualScrH)	
                GAME.stateMonitor.SetState(GAME.stateMonitor.states.lossBlock);
        }

    }
}
