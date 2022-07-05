AlertBoxPopUp = function(parent){
    this.parentClass = parent;
    
    this.graphicsObject = game.add.graphics(0, 0);
    this.graphicsObject.beginFill('0x000000', 0.5);
    this.graphicsObject.drawRect(0, 0, game.width, game.height);
    this.graphicsObject.endFill();
    this.graphicsObject.inputEnabled = true;
    this.graphicsObject.events.onInputDown.add(this.onClickGraphics, this);
    
    this.popUp = J2DM_CreateMovieClip(config.mc_popUpBox_alert);
    this.popUp.txt_desc.text = configGame.getText(configGame.texts.wantToLeave);
    
    this.btnYes = J2DM_AddButton(config.btn_yes, this.onYes, this, 1, 0, 2, 0);
    this.btnYes.customGroup.txt_buttonText.text = configGame.getText(configGame.texts.yes);
    this.popUp.addChild(this.btnYes);
    
    this.btnNo = J2DM_AddButton(config.btn_no, this.onNo, this, 1, 0, 2, 0);
    this.btnNo.customGroup.txt_buttonText.text = configGame.getText(configGame.texts.no);
    this.popUp.addChild(this.btnNo);
        
    this.isOpen = true;
    this.hide();
}

AlertBoxPopUp.prototype.onClickGraphics = function(){
    console.log('onClickGraphics');
}

AlertBoxPopUp.prototype.onYes = function(){
    game.paused= false;
    playSound(configGame.soundId.buttonGeneric);
    this.parentClass.destroy();
    game.state.start(StatesGame.splash);
}

AlertBoxPopUp.prototype.onNo = function(){
    this.hide();
        
    playSound(configGame.soundId.buttonGeneric);
}

AlertBoxPopUp.prototype.show = function(){
    if(this.isOpen){
        return;
    }
    
    this.isOpen = true;
    this.graphicsObject.visible = true;
    this.popUp.visible = true;
    playSound(configGame.soundId.buttonGeneric); 
}

AlertBoxPopUp.prototype.hide = function(){
    if(!this.isOpen){
        return;
    }

    this.isOpen = false;
    game.paused = false;
    this.graphicsObject.visible = false;
    this.popUp.visible = false;
}
