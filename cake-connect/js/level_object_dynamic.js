// game level dynamic object 
function LEVEL_Object_Dynamic()
{
    this.thumbRootContainer = undefined; // root container for thumbnails
    this.objRootContainer = undefined;  // root where place object

    this.decriptor = undefined; // object descriptor - comes from level desription 
    this.gameObject = undefined; // game object (texture + physic box)
    this.textureName = undefined;// random texture name(and name of thumbnail texture) comes from this.descriptor
    this.thumbSprite = undefined;   // thumbnail sprite
    this.ObjectTextureRoot = "";//"./img/objects/";    // root folder which contain texture objects
    this.ObjectThumbTextureRoot = "";//"./img/gui/objthumb/";    // root folder to contain texture for thumbnail objects

    // in Box2dWeb there no function isSleeping, so emulate this!!!
    this.isSleeping = false;
    this.lastState = {"x":undefined, "y":undefined, "rot":undefined}; // position and rotation
    this.ticsCount = undefined; // how many tics passed


    //<strip>
    this.emotion = undefined;       // emotion
    //</strip>

    //<strip>
    this.scaleShiver = {"x": undefined, "y": undefined}; // scale shivering
    //</strip>

    // Used to init object, thumbnail and others additional stuff
    // descriptor - object descriptor
    this.Init = function(descriptor)
    {
        this.decriptor = descriptor;
        this.textureName = this.GetRandomTexture(this.decriptor[1]);
    }

    // Init thumbnail texture
    // thumbRootContainer- container where place sprites 
    this.InitThumbnail = function(thumbRootContainer)
    {
        this.thumbRootContainer = thumbRootContainer; 
        var thumTexture = this.ObjectThumbTextureRoot + "t_"+this.textureName.fileName;
        this.thumbSprite = new PIXI.Sprite(PIXI.Texture.fromImage(thumTexture));
        this.thumbSprite.visible = false;    
        this.thumbSprite.anchor.x = 0.5;
        this.thumbSprite.anchor.y = 0.5;
        this.thumbSprite.rotation = this.decriptor[0];
        this.thumbRootContainer.addChild(this.thumbSprite);
    }

    // Free thumbnail
    this.FreeThumbnail = function()
    {
        this.thumbRootContainer.removeChild(this.thumbSprite);
        this.thumbSprite = undefined;
        //this.thumbRootContainer = undefined;
    }

    // Init object and place it to stage
    // rootContainer - container to place object
    // descriptor - object descriptor, contain rotation and type
    // x, y position where place object
    this.SpawnObject = function (rootContainer, x, y)
    {   
        this.objRootContainer = rootContainer;
        var texturePath  = this.ObjectTextureRoot + this.textureName.fileName;        

        this.gameObject = new GameObject();
        this.gameObject.Init(this.objRootContainer, GAME.Level.world, texturePath, x, y, this.decriptor[0], false, this.decriptor[1]);
        this.gameObject.physObj.SetUserData(this);	// store this to user data

        this.isSleeping = false;
        this.lastState.x = this.gameObject.gameObj.position.x;
        this.lastState.y = this.gameObject.gameObj.position.y;
        this.lastState.rot = this.gameObject.gameObj.rotation;
        this.ticsCount  = 0;

        //<strip>
        this.emotion = new LEVEL_Object_Emotion(this.decriptor[1]);
        this.emotion.Init(this.objRootContainer);
        //</strip>

        //<strip>
        // shiver effect
        this.scaleShiver.x = new ShiverEffect();
        this.scaleShiver.y = new ShiverEffect();
        this.scaleShiver.x.Init(0.07, 0.0015, 0.3); 
        this.scaleShiver.y.Init(0.07, 0.0015, 0.3);       
        //</strip>
    }
    
    //
    //return true if physic object box issleep(need enable when create object) 
    // return false if object not sleep
    // return undefined if object not created yet
    this.isObjectSleep = function()
    {
        return this.isSleeping;
    }

    // free spawned object 
    this.FreeObject = function()
    {
        if(this.gameObject === undefined)
            return;

        //<strip>
        this.scaleShiver.x = undefined;
        this.scaleShiver.y = undefined;
        //</strip>

        //<strip> drop emotion from lo res game mode 
        this.emotion.Free();
        this.emotion = undefined;
        //</strip>

        this.gameObject.physObj.SetUserData(undefined);	// store this to user data
        this.gameObject.Free();
        this.gameObject.gameObj = undefined;
        this.gameObject = undefined;

        this.objRootContainer = undefined;
    }

    // remove object from stage, free resources asotiated with object
    this.Free = function(stage, thumbStage)
    {
        this.FreeObject();
        this.descriptor = undefined;
        this.textureName = undefined;
    }

    // Update object state
    this.Update = function()
    {
        if(this.gameObject === undefined)
            return;

        this.gameObject.Sync();
        

        if(this.isNotMove())
        {
            this.ticsCount ++;
            if(this.ticsCount > 100) // 100 is number in tics
                this.isSleeping = true;
        }
        else
        {
            this.lastState.x = this.gameObject.gameObj.position.x;
            this.lastState.y = this.gameObject.gameObj.position.y;
            this.lastState.rot = this.gameObject.gameObj.rotation;
            this.isSleeping = false;
            this.ticsCount = 0;
        }
        //<strip>
        this.emotion.Update(this.gameObject.gameObj.position.x, this.gameObject.gameObj.position.y, this.gameObject.gameObj.rotation);
        //</strip>

        //<strip>
        // Shivering
        this.scaleShiver.x.Update();
        this.scaleShiver.y.Update();
        this.gameObject.gameObj.scale.x = 1 + this.scaleShiver.x.GetValue();
        this.gameObject.gameObj.scale.y = 1 + this.scaleShiver.y.GetValue();			
        //</strip>

    }

    this.doShiver = function()
    {	
        //<strip>
        if(this.scaleShiver.x.isComplete() /*&& this.scaleShiver.y.isComplete()*/)
            this.scaleShiver.x.Start();

        if(this.scaleShiver.y.isComplete())
            this.scaleShiver.y.Start();
        //</strip>

    }
    
    // private function - return true, if object not move between tics
    this.isNotMove = function()
    {

        return  this.lastState.x == this.gameObject.gameObj.position.x &&
                this.lastState.y == this.gameObject.gameObj.position.y &&
                this.lastState.rot == this.gameObject.gameObj.rotation;
    }

    // return path to random texture of block by it type
    // "shotType" short type of object (b, s, lb, t)
    this.GetRandomTexture = function(shotType)
    {           
        var colors = ["1", "2", "3"];
        var color = colors[UTILS.intRandomBetween(0, colors.length-1)];

        var type = undefined;
        if(shotType == "b")
            type = "box";
        else if(shotType == "s")
            type = "sphere";
        else if(shotType == "t")
            type = "triangle";
        else if(shotType == "lb")
            type = "block";
        else
            console.log("ERROR: unknown object type");

        var ret = {"fileName":type+"_"+color+".png", "color":color, "type":type};
        console.log("filename:" +ret);
        return ret;
    }
}

