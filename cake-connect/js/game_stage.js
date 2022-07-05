// Stage for game 
function GameStageInit()
{	
    // init stage
    this.stage = new PIXI.Stage(0x000000, true);		
    this.backgrouds = new GameBackgrounds(); 
    this.gui = new StageGameGui();

    // contain level objects
    this.levelContainer = undefined;

    // called when stage is show
    this.Fadein = function()
    {	
        this.backgrouds.Init(this.stage);
        this.backgrouds.addInteractive();
        this.backgrouds.Show(); // change backgroud 

        this.levelContainer = new PIXI.DisplayObjectContainer();
        this.levelContainer.position.x = GlobalScale(0);
        this.levelContainer.position.y = GlobalScale(0);
        this.stage.addChild(this.levelContainer);

	GAME.InitLevel();
    }

    // called when stage is hide
    this.Fadeout = function(obj)
    {		
        this.backgrouds.Free(this.stage);
        this.stage.removeChild(this.levelContainer);
        this.levelContainer = undefined;
	GAME.FreeLevel();
    }

    this.Update = function()
    {
	GAME.Level.Update();
	this.gui.Update();
    }
    
}

// Implement stage gui
function StageGameGui()
{
    this.rootContainer = undefined;	// for this element root is  game stage
    this.objContainer = undefined;

    this.bg_top = undefined;
    this.button_pause= {"sprite":undefined, "effect": undefined, "scale": 1};

    // complex objects
    this.energyProgressBar = undefined; 
    this.flyingParticleManager = undefined;
    this.timer = undefined;
    this.score = undefined;
    this.gamePausedMenu = undefined; 
    this.gameFailMenu = undefined;
    this.gameCompleteMenu= undefined;
    this.thumbnailManager = undefined;
    this.stageFadeEffect = undefined;


    // remove object from scene
    this.Free = function(stage)
    {
	this.stageFadeEffect.Free();
	this.stageFadeEffect = undefined;
	
	this.gamePausedMenu.Free();
	this.gamePausedMenu = undefined;

        this.gameFailMenu.Free();
        this.gameFailMenu = undefined;

	this.gameCompleteMenu.Free();
	this.gameCompleteMenu = undefined;

	this.thumbnailManager.Free();
	this.thumbnailManager = undefined;
	
	this.flyingParticleManager.Free();
	this.flyingParticleManager = undefined;
	
	this.timer.Free();
	this.timer = undefined;

	this.score.Free();
	this.score = undefined;

	this.energyProgressBar.Free();
	this.energyProgressBar = undefined;

	this.objContainer.removeChild(this.button_pause.sprite);
	this.button_pause.sprite = undefined;
        this.button_pause.effect = undefined;

	this.objContainer.removeChild(this.bg_top);
	this.bg_top = undefined;

	this.rootContainer.removeChild(this.objContainer);
	this.objContainer = undefined;

    }

    this.Init = function(rootContainer)
    {   
	this.rootContainer = rootContainer;
	
        // Object container
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.objContainer.position.x = GlobalScale(0);
        this.objContainer.position.y = GlobalScale(0);
        this.rootContainer.addChild(this.objContainer);  
        
        // add elements to gui
        this.bg_top = new PIXI.Sprite(PIXI.Texture.fromImage("game_top_menu_background.png"));
        this.bg_top.position.x = GlobalScale(0);
        this.bg_top.position.y = GlobalScale(-30);
        this.objContainer.addChild(this.bg_top);	
    
        // button pause/main menu 
        this.button_pause.effect = new ShiverEffect();
        this.button_pause.effect.Init(0.05, 0.0, 0.3);
        this.button_pause.sprite= new PIXI.Sprite(PIXI.Texture.fromImage("button_pause.png"));
        this.button_pause.sprite.effect = undefined;
        this.button_pause.sprite.anchor.x = 0.5;
        this.button_pause.sprite.anchor.y = 0.5;
        this.button_pause.sprite.position.x = this.button_pause.sprite.width/2 + GlobalScale(522);
        this.button_pause.sprite.position.y = this.button_pause.sprite.height/2 + GlobalScale(4);
        this.button_pause.sprite.interactive = true;
        this.button_pause.sprite.buttonMode = true;
        DEVICE.ClickOrTap(this.button_pause.sprite, function(data){
            SoundManager.Play("click");
	    GAME.Pause();
	    GAME.stages.game.gui.gamePausedMenu.Show();
        });
        this.button_pause.sprite.mouseover = function()
        {
            var alias = GAME.stages.game.gui;   // this
            alias.button_pause.scale = 1 + 0.05;
        }
        this.button_pause.sprite.mouseout= function()
        {
            var alias = GAME.stages.game.gui;   // this
            alias.button_pause.scale = 1 - 0.05;
        }
        this.objContainer.addChild(this.button_pause.sprite);
        
	// init energyProgressBar
	// FIXME: move this code to another place
	var maxEnergy = 0; // calculate max energy/score
	for(var i = 0; i < GAME.Level.stars.length; ++i)
	    maxEnergy += GAME.Level.stars[i].energy.max; 

	this.energyProgressBar = new GuiEnergyProgressbar();
	this.energyProgressBar.Init(this.objContainer, 0, maxEnergy, GAME.Level.description.energy, 0);
	this.energyProgressBar.SetPosition(GlobalScale(35), GlobalScale(6)); 
	
	// Flying particle manager
	this.flyingParticleManager = new FlyingParticleManager();
	this.flyingParticleManager.Init(this.energyProgressBar.starContainer);

	this.timer = new GameTimer();
	var timeToCompleteLevel = GAME.Level.description.time;
	this.timer.Init(this.objContainer,  timeToCompleteLevel); 

	this.score = new GameScore();
	this.score.Init(this.objContainer);

        // Load thumbnail objects
	this.thumbnailManager = new ThumbnailManager();
	this.thumbnailManager.Init(this.objContainer);
	
	// menu 
	this.gamePausedMenu = new GamePausedMenu();
	this.gamePausedMenu.Init(this.objContainer);
	this.gamePausedMenu.Hide();

        this.gameFailMenu = new GameFailMenu();
        this.gameFailMenu.Init(this.objContainer);
        this.gameFailMenu.Hide();

	this.gameCompleteMenu = new GameCompleteMenu();
	this.gameCompleteMenu.Init(this.objContainer);
        this.gameCompleteMenu.Hide();
    
	// MUST BE LAST !!!
	this.stageFadeEffect = new StageFadeEffect();
	this.stageFadeEffect.Init(this.objContainer, -0.05);
        
    }
    
    // Update function
    this.Update = function()
    {   
	// some object need udate every time 
	this.timer.Update();

	if(GAME.isGamePaused() === false)
	{
            // button effect
            this.button_pause.effect.Update();
            this.button_pause.sprite.scale.x = this.button_pause.scale + this.button_pause.effect.GetValue();
            this.button_pause.sprite.scale.y = this.button_pause.scale - this.button_pause.effect.GetValue();

	    this.energyProgressBar.Update();
	    this.flyingParticleManager.Update();
	    this.thumbnailManager.Update();
	    this.stageFadeEffect.Update();
	    this.score.Update();
	}
	else
	{
	    // Update game paused menu
	    this.gamePausedMenu.Update();
	    this.gameFailMenu.Update();
	    this.gameCompleteMenu.Update();
	}
    }
    
}

