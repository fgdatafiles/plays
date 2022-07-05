ButtonSound = function(parent){
    this.parentClass = parent;
    this.container = game.add.group();

    this.btnSound = J2DM_AddButton(config.btn_sound, this.onButtonDown, this, 1, 0, 2, 0);
    this.container.add(this.btnSound);
        
    this.refreshSoundState();
    this.timePressed = 0;
}

ButtonSound.prototype.onButtonDown = function(){
    console.log('onButtonDown');
    this.onButtonSound();
}

ButtonSound.prototype.onButtonSound = function(){
    var timeNow = new Date().getTime();
    if(timeNow - this.timePressed<400){
        console.log('onButtonSound invalid');
        return;
    }
    this.timePressed = timeNow;
    
    console.log('onButtonSound state:'+SettingsGame.flagSoundState);
    SettingsGame.setStateSound(!SettingsGame.flagSoundState);
    playSound(configGame.soundId.buttonGeneric);
    this.refreshSoundState();
}

ButtonSound.prototype.refreshSoundState = function(){
    console.log('onButtonSound refreshSoundState:'+SettingsGame.flagSoundState);
    if(SettingsGame.flagSoundState){
        this.btnSound.setFrames(0, 1, 2);
    }else{
        this.btnSound.setFrames(3, 4, 5);
    }
}