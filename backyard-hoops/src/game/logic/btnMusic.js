ButtonMusic = function(parent){
    this.parentClass = parent;
    this.container = game.add.group();

    this.btnMusicOn = J2DM_AddButton(config.btn_music, this.onButtonDown, this, 1, 0, 2, 0);
    this.container.add(this.btnMusicOn);
        
    this.refreshMusicState();
    this.timePressed = 0;
}

ButtonMusic.prototype.onButtonDown = function(){
    console.log('onButtonDown');
    this.onButtonMusic();
}

ButtonMusic.prototype.onButtonMusic = function(){
    var timeNow = new Date().getTime();
    if(timeNow - this.timePressed<400){
        console.log('onButtonSound invalid');
        return;
    }
    this.timePressed = timeNow;
    
    console.log('onButtonMusic state:'+SettingsGame.flagMusicState);
    if(SettingsGame.flagMusicState){
        SettingsGame.setStateMusic(false);
        stopMusic(configGame.soundId.loop);
    }else{
        SettingsGame.setStateMusic(true);
        playMusic(configGame.soundId.loop);
    }
    playSound(configGame.soundId.buttonGeneric);
    this.refreshMusicState();
}

ButtonMusic.prototype.refreshMusicState = function(){
    console.log('onButtonMusic refreshMusicState:'+SettingsGame.flagMusicState);
    if(SettingsGame.flagMusicState){
        this.btnMusicOn.setFrames(0, 1, 2);
    }else{
        this.btnMusicOn.setFrames(3, 4, 5);
    }
}