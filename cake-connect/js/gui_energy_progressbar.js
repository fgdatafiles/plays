// energy progress bar
function GuiEnergyProgressbar()
{
    this.rootContainer = undefined;	// root container called on Init function
    this.objContainer = undefined;

    this.energySign = undefined; // energy sign, all coordinates of other objects relative to it
    this.goalSign = undefined; // goal sign 
    this.goalSignEffect = new ShiverEffect();
    this.bar_backgroud = undefined;
    this.progressBar = undefined;	// texture for progressbar  
    this.pbSprite = undefined;		// sprite for progressbar
    this.starContainer = undefined;	// each star particle will located in this container

    this.logicValues= undefined; // any logic values, from ... to, and where place progressbar_goal 
    this.physValue = {"xFrom": GlobalScale(1), "xTo": GlobalScale(401), "y":GlobalScale(45) }; // physical value of goal sigh relative to energy sigh, position relative to energysign 
    this.currentValue = undefined;  // current value (in logic values) of progressbar

    // free resources allocated by object, remove objects from scene
    this.Free = function()
    {
	this.objContainer.removeChild(this.goalSign);
	this.goalSign = undefined;

	this.objContainer.removeChild(this.energySign);
	this.energySign = undefined;	

	this.objContainer.removeChild(this.starContainer);
	this.starContainer = undefined;

	this.objContainer.removeChild(this.pbSprite);
	this.pbSprite = undefined;
	this.progressbar = undefined;

	this.objContainer.removeChild(this.bar_backgroud);
	this.bar_backgroud = undefined;

	this.goalSignEffect = undefined;

	this.logicValues = undefined;
	this.currentValue = undefined;

	this.rootContainer.removeChild(this.objContainer);
	this.objContainer= undefined;
    }

    // Init object and place it into container
    // rootContainer- container to place object into it
    // minValue - minimum value of object
    // maxValue - maximum value which object store
    // requiredValue - required value to complete level(from minValue to maxValue)
    // progressbarValue - current value of progressbar(from minValue to maxValue)
    this.Init = function(rootContainer, minValue, maxValue, requiredValue, progressbarValue ) 
    {
	// containers
	this.rootContainer = rootContainer;
    	this.objContainer = new PIXI.DisplayObjectContainer();
	this.rootContainer.addChild(this.objContainer);  

	this.logicValues = {"min":minValue, "max":maxValue, "required":requiredValue, "barValue":progressbarValue};    
	this.currentValue = progressbarValue;
	
	// sign effect
	this.goalSignEffect = new ShiverEffect();
	this.goalSignEffect.Init(0.5, 0.05, 0.1); 
    
	
	// backgroud for bar
	this.bar_backgroud= new PIXI.Sprite.fromImage("energy_progressbar_background.png");
	this.bar_backgroud.position.x = GlobalScale(7);   //NOTE: Each element position will relative to energySign 
	this.bar_backgroud.position.y = GlobalScale(40);  //NOTE: Each element position will relative to energySign 
	this.objContainer.addChild(this.bar_backgroud);

	// Progress bar 
	this.progressbar = new PIXI.Texture.fromImage("energy_full_bar.png");
	this.pbSprite = new PIXI.Sprite(this.progressbar);
	this.pbSprite.position.x = GlobalScale(65);   
	this.pbSprite.position.y = GlobalScale(49);  
	this.objContainer.addChild(this.pbSprite);
	this.SetProgress(this.logicValues.barValue);

	// 
	this.starContainer = new PIXI.DisplayObjectContainer();
	this.objContainer.addChild(this.starContainer);	
	
	// energy sign
	this.energySign = new PIXI.Sprite.fromImage("energy_progressbar_sign.png");
	this.energySign.position.x = this.energySign.width/2 - GlobalScale(15); //NOTE: Each element position will relative to energySign 
	this.energySign.position.y = this.energySign.height/2 + GlobalScale(10); //NOTE: Each element position will relative to energySign 
	this.energySign.anchor.x = 0.5;
	this.energySign.anchor.y = 0.5;
	this.objContainer.addChild(this.energySign);

	// goal sign 
	this.goalSign = new PIXI.Sprite.fromImage("energy_progressbar_goal.png");
	this.objContainer.addChild(this.goalSign);
	this.SetGoal(requiredValue);
	
    }

    // true if max energy collected
    this.isMaxEnergyCollected= function()
    {
	return (this.currentValue >= this.logicValues.max);
    }

    // true if goal reached
    this.isGoalReached = function()
    {
	return (this.currentValue >= this.logicValues.required);
    }

    // setup goal
    this.SetGoal = function(value)
    {
	this.logicValues.required = value;
	this.goalSign.position.x = GlobalScale(65) + this.fromLogicToPhys(value); // 65 is not magic number - is start of bar
	this.goalSign.position.y = this.physValue.y; 
    }

    // update progressbar
    // val - curent value from minValue to maxValue passed on GuiEnergyBar init function
    this.SetProgress= function(value)
    {
        var t = this.isGoalReached();
        var me = this.isMaxEnergyCollected();
	this.currentValue = value;
	this.CheckBounds(this.currentValue);
	var physVal= this.fromLogicToPhys(this.currentValue);

        var rectangleOffset={"x":GlobalScale(640), "y":GlobalScale(964)}; // is not magic, see offset energy_full_bar.png in bg_progress_and_small_obj.json 
        var rec = new PIXI.Rectangle(rectangleOffset.x, rectangleOffset.y, physVal, GlobalScale(28)); // 28 is not magic number is progressbar texture height
        this.progressbar.setFrame(rec);

        if(t !== this.isGoalReached())
        {
            // on goal reached callback
            SoundManager.Play("ongoalreached");
        }

        if(me !== this.isMaxEnergyCollected())
        {
            // on max energy collected
        }
    }

    // return current value of progress bar (in logic)
    this.GetProgress = function()
    {
	return this.currentValue;
    }

    // auxiliary function - check input bounds
    this.CheckBounds = function(val)
    {
	if(val === undefined)
	{ 
	    console.log("input value is undefined, int/double required");
	    return;
	}

	if(this.logicValues === undefined)
	{
	    console.log("Error:calculate fail, not logicValues specified");
	    return;
	}

	if(this.logicValues.min > val || this.logicValues.max < val)
	{
	    console.log("Error:out of range");
	    return;
	}
    }

    // auxiliary function return position of required value calculated in phys values 
    this.fromLogicToPhys = function(val)
    {
	this.CheckBounds(val);	

	var lA = (val - this.logicValues.min)/(this.logicValues.max - this.logicValues.min);
	var p = lA * (this.physValue.xTo - this.physValue.xFrom) + this.physValue.xFrom;
	return Math.round(p);
    }

    // set position of progressbar
    this.SetPosition =function(x,y)
    {
	this.objContainer.position.x = x;
	this.objContainer.position.y = y;
    }

    // 
    this.TouchSign = function()
    {
        this.goalSignEffect.Start();
    }

    this.Update = function()
    {
	this.goalSignEffect.Update();
	var v = this.goalSignEffect.GetValue();
    
	this.energySign.scale.x = 1.0 + v;
	this.energySign.scale.y = 1.0 + v;

    }
}
  
