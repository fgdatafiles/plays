// game state monitor
function GameStateMonitor()
{
    // all posible game end 
    this.states = { "game": 1,   // game mode
        "levelCompleted": 2, // level completed
        "timeIsOver": 3,    // time is over
        "lossBlock": 4,     // player loose block
        "energyTooLow": 5   // energy too low
    };

    // current state
    this.currentState = undefined;

    // Init object 
    this.Init = function()
    {
        this.currentState = this.states.game;
    }

    // free object 
    this.Free = function()
    {
        this.currentState = undefined;
    }

    // monitor game state 
    this.Update = function()
    {
        // check if player loss game level
        if(this.currentState === this.states.timeIsOver ||
                this.currentState === this.states.lossBlock ||
                this.currentState === this.states.energyTooLow)
        {
            // level is fail
            // game in pause 
            GAME.Pause();
            // show fail game dialog
            GAME.stages.game.gui.gameFailMenu.Show();
            return;
        }

        // level in game mode
        if(this.currentState === this.states.game)
        {
            // player complete game level
	    if( GAME.stages.game.gui.energyProgressBar.isGoalReached() &&
                GAME.Level.isDynamicObjectSpawned === true &&
                GAME.Level.isSpawnAgo() === true &&
                GAME.stages.game.gui.flyingParticleManager.isSpawnAgo() === true)
	    {
		this.SetState(this.states.levelCompleted);
		return;
	    }
            
            // all objects spawned and all dynamic object are sleep
            if( GAME.Level.isDynamicObjectSpawned === true &&
                GAME.Level.isGameObjectsSleep() )
            {
                // explode all shined stars in level
                for(s = 0; s < GAME.Level.stars.length; s++)
                {
                    if(GAME.Level.stars[s].isShine())
                        GAME.Level.stars[s].Explode();
                }
            }

            // all objects spawned, and there is no particles to spawn
            if( GAME.Level.isDynamicObjectSpawned === true &&
                GAME.Level.isSpawnAgo() === true &&
                GAME.stages.game.gui.flyingParticleManager.isSpawnAgo() === true)
            {
                this.SetState(this.states.energyTooLow);
                return;
            }
            
        }

        // level in completed mode
        if(this.currentState === this.states.levelCompleted)
        {
            // wait while flying star manager complete spawn star
            // show complete level dialog
	    if(GAME.stages.game.gui.flyingParticleManager.isSpawnAgo() === true)
	    {
		// game in pause 
		GAME.Pause();

                // save info
                var energyScore = GAME.stages.game.gui.score.getTotalScore();
                var time = GAME.stages.game.gui.timer.GetCurrent()/1000;
                var timeScore =  Math.round(time) * 50;    // 50 score points for each second

                // update info in storage
                var currentTotalScore = energyScore + timeScore;
                var previousLevelScore = GAMEINFO.getInfo(GAME.currenLevelId);
                if( previousLevelScore === undefined || 
                    currentTotalScore > previousLevelScore.totalScore ||
                    previousLevelScore.totalScore === undefined)
                {
                    // save only best score
                    GAMEINFO.updateInfo(GAME.currenLevelId, energyScore, currentTotalScore, time);
                }

		// show fail game dialog
		GAME.stages.game.gui.gameCompleteMenu.Show(energyScore, timeScore);
	    }
        }

    }

    // set object state
    // state - state to set from this.states
    this.SetState = function(state)
    {
        if(this.currentState === this.states.levelCompleted)
            return ;    // level complete

        // can not change state back to game
        if(state === this.states.game)
        {
            console.log("ERROR: cannot change state game");
            return;
        }

        this.currentState = state;
    }
}
