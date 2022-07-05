// implement game score
function GameScore()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;
    this.icon = undefined;
    this.font = undefined;
    this.currentScore = undefined;	// current value of score
    this.totalScore = undefined;
    this.growSpeed = undefined;	// speed of update
    
    this.Init = function(rootContainer, totalScore, current)
    {
	this.growSpeed = 4;
	this.currentScore = (current === undefined ? 0 : current );
	this.totalScore = (totalScore === undefined ? 0 : totalScore);

	this.rootContainer = rootContainer;
	this.objContainer = new PIXI.DisplayObjectContainer();
	this.objContainer.position.x = GlobalScale(300);
	this.objContainer.position.y = GlobalScale(4);
	this.rootContainer.addChild(this.objContainer);

	this.icon = new PIXI.Sprite.fromImage("score_star.png");
	this.icon.anchor.x = 0.5;
	this.icon.anchor.y = 0.5;
	this.icon.position.x = this.icon.width/2;
	this.icon.position.y = this.icon.height/2; 
	this.objContainer.addChild(this.icon);

        var fontSize = GlobalScale(45);
	this.font = new PIXI.BitmapText(this.currentScore.toString(), {font: fontSize+"px game_top_menu_font"});
	this.font.position.x = GlobalScale(50);
	this.font.position.y = GlobalScale(-4);
	this.objContainer.addChild(this.font);

    }
    
    // return total score
    this.getTotalScore = function()
    {
        return this.totalScore;
    }

    // set position of object
    this.setPosition = function(x, y)
    {
        this.objContainer.position.x = x;
        this.objContainer.position.y = y;
    }

    // add score 
    this.addScore = function(val)
    {
	this.totalScore += val;
    }

    // return true if animation finished
    this.isFinish = function()
    {
	return this.currentScore === this.totalScore;
    }

    this.Update = function()
    {
	if(this.isFinish())
	    return;	

	this.currentScore += this.growSpeed;
	if(this.currentScore > this.totalScore)
	    this.currentScore = this.totalScore; 

	this.font.setText(this.currentScore.toString());
	
    }

    this.Free = function()
    {
	this.growSpeed = undefined;
	this.currentScore = undefined;
	this.totalScore= undefined;

	this.objContainer.removeChild(this.font);
	this.font = undefined;

	this.objContainer.removeChild(this.icon);
	this.icon = undefined;

	this.rootContainer.removeChild(this.objContainer);
	this.objContainer = undefined;
    }

}
