SettingsGame = {
    score:0,
    level:0,
    bestScore:0,
    bestLevel:0,
    tutorialComplete:false,
    tutorialShown:false,
    backgroundId:0,
    flagSoundState:true,
    flagMusicState:true,
    initSettings:function() {
        //Check if it is the first time the user play the game => Show tutorial
        var flagTutorialComplete = localStorage.getItem('tutorialComplete_'+configGame.nameGame);
        if(flagTutorialComplete == 'yes'){
            this.tutorialComplete = true;
        }else{
            this.tutorialComplete = false;
        }

        //Highscore
        var flagHighscore = localStorage.getItem('bestScore_'+configGame.nameGame);
        if(flagHighscore==null){
            this.bestScore = 0;
        }else{
            this.bestScore = parseInt(flagHighscore);
        }

        //Best Level
        var flagBestLevel = localStorage.getItem('bestLevel_'+configGame.nameGame);
        if(flagBestLevel==null){
            this.bestLevel = 0;
        }else{
            this.bestLevel = parseInt(flagBestLevel);
        }

        J2DM_ConsoleLog('HIGHSCORE:'+this.bestScore);
        J2DM_ConsoleLog('BEST LEVEL:'+this.bestLevel); 

        //Flag Sound
        var flagSound = localStorage.getItem('soundState_'+configGame.nameGame);
        console.log('---- SettingGame, flagSound:'+flagSound);
        if(flagSound==null){
            console.log('---- SettingGame 01, flagSound null');
            this.flagSoundState = true;
        }else{
            if(flagSound == '1'){
                console.log('---- SettingGame 02, flagSound 1');
                this.flagSoundState = true;
            }else{
                console.log('---- SettingGame 03, flagSound 0');
                this.flagSoundState = false;
            }
        }

        //Flag Music
        var flagMusic = localStorage.getItem('musicState_'+configGame.nameGame);
        console.log('---- SettingGame, flagMusic:'+flagMusic);
        if(flagMusic==null){
            console.log('---- SettingGame 01, flagMusic null');
            this.flagMusicState = true;
        }else{
            if(flagMusic == '1'){
                console.log('---- SettingGame 02, flagMusic 1');
                this.flagMusicState = true;
            }else{
                console.log('---- SettingGame 03, flagMusic 0');
                this.flagMusicState = false;
            }
        }
    },
    setTutorialComplete: function() {
        localStorage.setItem('tutorialComplete_'+configGame.nameGame, 'yes');
    },
    submitScore: function(currentScore) {
        //Save Higscore
        if(currentScore>this.bestScore){
            localStorage.setItem('bestScore_'+configGame.nameGame, currentScore);
            this.bestScore = currentScore;
        } 
    },
    submitLevel: function(currentLevel) {
        if(currentLevel>this.bestLevel){
            localStorage.setItem('bestLevel_'+configGame.nameGame, currentLevel);
            this.bestLevel = currentLevel;
        }
    },
    suscribePause: function(callback, context){
        this.callbackPause = callback;
        this.contextPause = context;
    },
    unSuscribePause: function(){
        this.callbackPause = null;
        this.contextPause = null;
    },
    setPauseOn: function(){
        if(this.callbackPause!=null){
            this.callbackPause(this.contextPause, true);
        }
    },
    setPauseOff: function(){
        if(this.callbackPause!=null){
            this.callbackPause(this.contextPause, false);
        }
    },
    setStateMusic(value){
        console.log('---- SettingGame setStateMusic, value:'+value);
        this.flagMusicState=value;
        if(value){
            localStorage.setItem('musicState_'+configGame.nameGame, '1');
        }else{
            localStorage.setItem('musicState_'+configGame.nameGame, '0');
        }
    },
    setStateSound(value){
        console.log('---- SettingGame setStateSound, value:'+value);
        this.flagSoundState=value;
        if(value){
            localStorage.setItem('soundState_'+configGame.nameGame, '1');
        }else{
            localStorage.setItem('soundState_'+configGame.nameGame, '0');
        }
    }
}