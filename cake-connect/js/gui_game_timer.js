// implement game timer
function GameTimer()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;
    this.timerIcon = undefined; // pixi object
    this.font = undefined; // pixi font
    this.timer = undefined;
    this.lastTickInfo = undefined;


    // return current time in milliseconds
    this.GetCurrent = function()
    {
        return this.timer.current;
    }
    // Init object
    // rootContainer - container
    // timeToComplete - time in ms to complete level
    this.Init = function(rootContainer, timeToComplete)
    {
	this.rootContainer = rootContainer;
	this.timer = {"from": timeToComplete, "current": timeToComplete};

	this.objContainer = new PIXI.DisplayObjectContainer();
	this.objContainer.position.x = GlobalScale(106);
	this.objContainer.position.y = GlobalScale(4);
	this.rootContainer.addChild(this.objContainer);

	this.timerIcon = new PIXI.Sprite.fromImage("timer.png");
	this.timerIcon.anchor.x = 0.5;
	this.timerIcon.anchor.y = 0.5;
	this.timerIcon.position.x = this.timerIcon.width / 2;
	this.timerIcon.position.y = this.timerIcon.height / 2;
	this.objContainer.addChild(this.timerIcon);
	    
        var fontScale = GlobalScale(45);
	this.font = new PIXI.BitmapText("13:3", {font: fontScale + "px game_top_menu_font"});
	this.font.position.x = GlobalScale(50);
	this.font.position.y = GlobalScale(-6);
	this.objContainer.addChild(this.font);

	this.lastTickInfo = this.getFrameInfo();

    }

    this.Free = function()
    {
	this.timer = undefined;
	this.lastTickInfo = undefined;

	this.objContainer.removeChild(this.font);
	this.font = undefined;

	this.objContainer.removeChild(this.timerIcon);
	this.timerIcon = undefined;

	this.rootContainer.removeChild(this.objContainer);
	this.objContainer = undefined;
    }

    this.Update = function()
    {
	if(this.timer.current === 0)
	    return ;

	var thisTickInfo = this.getFrameInfo();
	
	if( this.lastTickInfo.pause === true &&
	    thisTickInfo.pause === false)
	{
	    // game return from pause
	    this.lastTickInfo = thisTickInfo;
	    return;	
	}
	else if(this.lastTickInfo.pause === false &&
	    	thisTickInfo.pause === true)
	{
	    this.lastTickInfo = thisTickInfo;
	    // game goes to pause
	    return ;
	}
	else if(this.lastTickInfo.pause === true &&
	    	thisTickInfo.pause === true)
	{
	    // game in pause
	    return;
	}
	
	// game in game mode :)
	var frameDiff = thisTickInfo.time - this.lastTickInfo.time;
	this.timer.current -= frameDiff;
	if(this.timer.current <= 0)
	{
	    // time is over !!!!
	    this.timer.current = 0;
            GAME.stateMonitor.SetState(GAME.stateMonitor.states.timeIsOver); 
            return;
	}
	
	// convert to string 
	this.font.setText(TimeToString(this.timer.current));

	this.lastTickInfo = thisTickInfo;
    }

    // get info about frame
    this.getFrameInfo = function()
    {
	var info = {"time": new Date().getTime(), "pause": GAME.isGamePaused()};
	return info;
    }
}
