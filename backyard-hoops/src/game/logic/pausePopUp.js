PausePopUp = function(parent){
    this.parentClass = parent;
    
    this.graphicsObject = game.add.graphics(0, 0);
    this.graphicsObject.beginFill('0x000000', 0.5);
    this.graphicsObject.drawRect(0, 0, game.width, game.height);
    this.graphicsObject.endFill();
    this.graphicsObject.inputEnabled = true;
    this.graphicsObject.events.onInputDown.add(this.onClickGraphics, this);
    
    this.popUp = J2DM_CreateMovieClip(config.mc_popUpPause);
    this.popUp.txt_Pause.text = configGame.getText(configGame.texts.pause);
    this.popUp.txt_Pause.setShadow(6, 6, "#40419e", 2, true, true);
    this.btnPlay = J2DM_AddButton(config.btn_play, this.onPlay, this, 1, 0, 2, 0);
    this.popUp.addChild(this.btnPlay);
    
    this.btnRestart = J2DM_AddButton(config.btn_restart, this.onRestart, this, 1, 0, 2, 0);
    this.popUp.addChild(this.btnRestart);
    
    this.btnHome = J2DM_AddButton(config.btn_home, this.onHome, this, 1, 0, 2, 0);
    this.popUp.addChild(this.btnHome);
    
    this.btnMusic = new ButtonMusic(this);
    this.popUp.addChild(this.btnMusic.container);
    
    this.btnSound = new ButtonSound(this);
    this.popUp.addChild(this.btnSound.container);
    
    this.hide();
}

PausePopUp.prototype.onClickGraphics = function(){
    console.log('onClickGraphics');
}

PausePopUp.prototype.show = function(){
    if(this.isOpen){
        return;
    }
    
    this.isOpen = true;
    this.graphicsObject.visible = true;
    this.popUp.visible = true;
    playSound(configGame.soundId.buttonGeneric);
    
    game.time.events.add(Phaser.Timer.SECOND * 0.05, function(){
        game.paused= true;
    }, this);  
    
}

PausePopUp.prototype.hide = function(){
    this.isOpen = false;
    game.paused= false;
    this.graphicsObject.visible = false;
    this.popUp.visible = false;
    //this.parentClass.unpauseElements();
}

PausePopUp.prototype.onPlay = function(){
    this.hide();
    playSound(configGame.soundId.buttonGeneric);
}

PausePopUp.prototype.onRestart = function(){
    game.paused= false;
    playSound(configGame.soundId.buttonGeneric);
    this.parentClass.destroy();
    game.state.start(StatesGame.gameplay);
}

PausePopUp.prototype.onHome = function(){
    this.isOpen = false;
    this.graphicsObject.visible = false;
    this.popUp.visible = false;
    //game.paused= false;
    this.parentClass.alertBoxPopUp.show();    
}