//<strip>
    //FIXME: probably remove it to somewere
    var starBellCounter = 1;
//</strip>
// Game object: level star
function LEVEL_Object_Star()
{
    this.objContainer = undefined; // container to store data
    this.onSprite = undefined;
    this.offSprite = undefined;
    this.stateOn = false;   // true if current state "on" false otherwise
    this.starPosInUnits = undefined; // for physic 
    this.starPosInPixels = undefined;	// in pixels
    this.energy = {"max": 1000, "current": 0, "spawnParticleEvery":25, "lossEnergyPerTick":1, "currentParticleNumber":0}; 
    this.rotEffect = undefined; // rotation effect
    this.scaleEffect = undefined; //scale effect
    this.isEnergyEmpty = undefined; // true if energy empty 
    this.dissolveEffect = undefined;    // dissolve when energy is empty 

    this.glowEffect = {"scale": undefined, "alpha": undefined};    // glow effect when block enter or leave star
    this.glowSprite = undefined;    // sprite for glow effect
    this.starShape = undefined;     // physic star share
    this.starShapeTransform  = undefined; // physic transform of star

    // true if star is on(shine), if off(fade) return false
    this.isShine = function()
    {
        return this.stateOn;
    }

    // off/on a star 
    this.Shine = function(st)
    {
        if(this.stateOn == true)
            return;

        if(this.stateOn == false)
        {
            // first time shine enabled
            this.glowEffect.scale = new FadeInOut();
            this.glowEffect.scale.Init(1.0, 2.0, 0.01); // FIXME: move this to constants
            this.glowEffect.alpha = new FadeInOut();
            this.glowEffect.alpha.Init(1.0, 0.0, -0.01);
            this.glowSprite.visible = true;
        }

        //<strip>
        SoundManager.Play("b"+(starBellCounter%3 + 1).toString()); 
        starBellCounter++;
        //</strip>

	this.stateOn = true;
    }

    this.Fade = function()
    {
        if(this.stateOn == false)
            return;

        if(this.stateOn == true)
        {
            // first time shine disabled 
            this.glowEffect.scale = new FadeInOut();
            this.glowEffect.scale.Init(1.5, 0.5, -0.02); // FIXME: move this to constants
            this.glowEffect.alpha = new FadeInOut();
            this.glowEffect.alpha.Init(0.8, 0.0, -0.02);
            this.glowSprite.visible = true;
        }

	this.stateOn = false;
    }

    this.Update = function()
    {   
	if(!this.isLoaded())
	    return;
        
        // when dissolve effect complete - object not visible and there not need to update it
        if(this.dissolveEffect.isComplete())
            return;

        // update glow effect
        if( this.glowEffect.scale !== undefined &&
                this.glowEffect.alpha !== undefined)
        {
            this.glowEffect.scale.Update();
            this.glowEffect.alpha.Update();

            // scale effect
            if( !this.glowEffect.scale.isComplete())
            {
                this.glowSprite.scale.x = this.glowSprite.scale.y = this.glowEffect.scale.getValue();
            }

            // alpha effect
            if( !this.glowEffect.alpha.isComplete())
            {
                this.glowSprite.alpha = this.glowEffect.alpha.getValue();
            }

            // hide object when all effects completed
            if(this.glowEffect.scale.isComplete() && this.glowEffect.alpha.isComplete())
            {
                this.glowSprite.visible = false;// hide object
            }

        }

        // 
	this.onSprite.visible = this.stateOn;
	this.offSprite.visible = !this.stateOn;

        this.rotEffect.Update();
        this.offSprite.rotation = this.rotEffect.GetValue();
        this.onSprite.rotation = this.rotEffect.GetValue();
        
        if(this.stateOn)
        {
            this.scaleEffect.Update();
            this.onSprite.scale.x = this.onSprite.scale.y = 1 + this.scaleEffect.GetValue();
        }

        if(this.isEnergyEmpty)
        {
            this.dissolveEffect.Update();
            this.onSprite.alpha = Math.abs(this.dissolveEffect.GetValue());
        }
    }

    // load textures and place to position x,y
    // objContainer - display container
    // x, y position of star
    this.Load = function(objContainer, x, y)
    {
        this.objContainer = objContainer
        this.isEnergyEmpty = false;
	this.stateOn = false;
	// onsprite
	this.onSprite = new PIXI.Sprite(PIXI.Texture.fromImage("star_on.png"));
	this.onSprite.anchor.x = 0.5;
	this.onSprite.anchor.y = 0.5;
	this.onSprite.position.x = x;
	this.onSprite.position.y = y;
	this.objContainer.addChild(this.onSprite);

	// off sprite
	this.offSprite = new PIXI.Sprite(PIXI.Texture.fromImage("star_off.png"));
	this.offSprite.anchor.x = 0.5;
	this.offSprite.anchor.y = 0.5;
	this.offSprite.position.x = x;
	this.offSprite.position.y = y;
	this.objContainer.addChild(this.offSprite);

	// glow sprite 
	this.glowSprite = new PIXI.Sprite(PIXI.Texture.fromImage("star_glow.png"));
	this.glowSprite.anchor.x = 0.5;
	this.glowSprite.anchor.y = 0.5;
	this.glowSprite.position.x = x;
	this.glowSprite.position.y = y;
        this.glowSprite.visible = false;
	this.objContainer.addChild(this.glowSprite);

	this.starPosInUnits = {"x":PixelsToUnits(x), "y":PixelsToUnits(y)};
	this.starPosInPixels = {"x":x, "y": y};

        this.rotEffect = new ShiverEffect();
        this.rotEffect.Init(0.3, 0, 0.05); 
        
        this.scaleEffect = new ShiverEffect();
        this.scaleEffect.Init(0.2, 0, 0.1);
        
        this.dissolveEffect = new ShiverEffect();
        this.dissolveEffect.Init(1, 0.006, 0.16);

        this.starShape = new Box2D.Collision.Shapes.b2CircleShape(PixelsToUnits(GlobalScale(20)));
        this.starShapeTransform = new Box2D.Common.Math.b2Transform( Box2D.Common.Math.b2Vec2.Make(this.starPosInUnits.x, this.starPosInUnits.y),
                                                                    Box2D.Common.Math.b2Mat22.FromAngle(0));

    }

    this.Free= function()
    {
        this.starShape = undefined;
        this.starShapeTransform = undefined;

        this.dissolveEffect = undefined;
        this.scaleEffect = undefined;
        this.rotEffect = undefined;
        this.starPosInUnits = undefined;
        this.starPosInPixels = undefined;
        
        this.objContainer.removeChild(this.glowSprite);
        this.glowSprite = undefined;

        this.objContainer.removeChild(this.offSprite);
        this.offSprite = undefined;

        this.objContainer.removeChild(this.onSprite);
        this.onSprite = undefined;

        this.stateOn = false;
        this.isEnergyEmpty = undefined;
        this.objContainer = undefined;
    }

    // check if current star iterate with game object, return true if is
    this.IsIterateWithGameObject = function(gameobject)
    {           
	var physObj = gameobject.physObj;
	var sh = physObj.GetFixtureList().GetShape();
        
	var r =  Box2D.Collision.Shapes.b2Shape.TestOverlap(    this.starShape,
                                                                this.starShapeTransform,
                                                                sh,
                                                                physObj.GetTransform()
                                                            );
	return r;
    }


    // explode function - create particles equal to amount of energy last in star
    this.Explode = function()
    {
       while(this.isEnergyEmpty !== true)
           this.LossEnergy(this.energy.spawnParticleEvery );
    }

    // called every tick(or in Explode function). this method determine if star need spawn particle
    // lossEnergyPerTick - how many energy loss per tick, default value is this.energy.lossEnergyPerTick
    this.LossEnergy = function(lossEnergyPerTick)
    {
        // default value
        if(lossEnergyPerTick === undefined)
            lossEnergyPerTick = this.energy.lossEnergyPerTick; 

	if(this.isEnergyEmpty)
	    return;
        
	this.energy.current += lossEnergyPerTick;
	var id = Math.floor(this.energy.current / this.energy.spawnParticleEvery);
	if(id != this.energy.currentParticleNumber)
	{
	    this.energy.currentParticleNumber ++;

	    var alias = GAME.stages.game.gui.energyProgressBar.energySign;
	    var to={"x":alias.position.x, "y":alias.position.y}; 
	    GAME.stages.game.gui.flyingParticleManager.SpawnParticle(this.starPosInPixels, to, this);
	}

	if(this.energy.current > this.energy.max)
	{
	    //First time when energy is empty,  do some effect 
            this.isEnergyEmpty = true;
            SoundManager.Play("onstarfadeout");
	}
    }

    this.isLoaded = function()
    {
	return	this.offSprite !== undefined ||
	    this.onSprite !== undefined; 
    }



}

