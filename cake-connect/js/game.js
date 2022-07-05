// class game, main class contain all info about game
function GAME()
{   
    this.isPaused = false;	// true if game in paused mode
    this.currenLevelId = 0;   // for demo
    this.Level = undefined; // level itself
    this.stateMonitor = undefined;  // state monitor

    // list of stages
    this.stages = undefined;	// array with stages, filled in Init funciton	
    this.currentStage = undefined;	//current stage

    // Init game level and gui
    this.InitLevel = function()
    {	
        this.Level = new GAME_LEVEL();
        console.log("current level id " + GAME.currenLevelId);
        this.Level.Load(GAME.currenLevelId, this.stages.game.levelContainer);

        this.stateMonitor = new GameStateMonitor(); 
        this.stateMonitor.Init();

        // init gui
        this.stages.game.gui.Init(this.stages.game.stage);  

        this.isPaused = false;
    }

    this.FreeLevel = function()
    {
        // Unload level
        this.stages.game.gui.Free();
        if(this.Level !== undefined)
        {
            this.Level.Unload();
            this.Level = undefined;
        }

        this.stateMonitor.Free();
        this.stateMonitor = undefined;

    }

    // reset level
    this.ResetLevel = function()
    {
	this.FreeLevel();
        // Load level
        this.InitLevel();
    }

    // Called every tick
    this.Update = function()
    {
        this.currentStage.Update();

        // current stage is game stage
        if(this.currentStage == this.stages.game)
        {
            if(this.isGamePaused() !== true)
                this.stateMonitor.Update();
        }
    }

    // Used to init game state
    this.Init = function()
    {  
        this.stages ={  "loading": new LoadingStageInit(), 
                        "game": new GameStageInit(), 
                        "levels": new LevelsStageInit(), 
                        "mainmenu": new MainMenuStageInit(), 
                        "about": undefined};	
        this.currentStage = this.stages.loading;
        this.currentStage.Fadein();
    }

    // switch game to pause mode
    this.Pause = function()
    {
        if(this.isPaused === true)
            return;	// game already in pause mode

        this.isPaused = true;
    }

    // resume game from pause
    this.Resume = function()
    {
        if(this.isPaused !== true)
            return;	// game already resumed

        this.isPaused = false;
    }

    // return true if game in pause, false otherwice
    this.isGamePaused = function()
    {
        return this.isPaused;
    }

}
GAME = new GAME(); // global game object

