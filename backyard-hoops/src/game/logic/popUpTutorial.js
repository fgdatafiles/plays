PopUpTutorial = function(parent){
    this.parentClass = parent;
    
    this.graphicsObject = game.add.graphics(0, 0);
    this.graphicsObject.beginFill('0x000000', 0.5);
    this.graphicsObject.drawRect(0, 0, game.width, game.height);
    this.graphicsObject.endFill();
    this.graphicsObject.inputEnabled = true;
    this.graphicsObject.events.onInputDown.add(this.onClickGraphics, this);
    
    this.popUp = J2DM_CreateMovieClip(config.mc_popUpTutorial);
    this.popUp.txt_howToPlay.text = configGame.getText(configGame.texts.howToPlay);
    this.popUp.txt_howToPlay.setShadow(6, 6, "#40419e", 2, true, true);
  
    this.btnPlay = J2DM_AddButton(config.btn_play, this.onPlay, this, 1, 0, 2, 0);
    this.popUp.addChild(this.btnPlay);
    this.btnPlay.y = this.popUp.height * 0.4 / this.popUp.scale.x;
    
    this.ball = J2DM_AddSprite(config.spr_ballTutorial);
    this.hand = J2DM_AddSprite(config.spr_hand);

    var finalPositionTween = game.height * 0.4;
    this.handTween = game.add.tween(this.hand).to({y: finalPositionTween}, 1000,  Phaser.Easing.Circular.Out, true, 0, Infinity);

    this.hide();
}

PopUpTutorial.prototype.onClickGraphics = function(){
    console.log('onClickGraphics');
}

PopUpTutorial.prototype.show = function(){
    this.isOpen = true;
    this.graphicsObject.visible = true;
    this.popUp.visible = true;    
    
    this.ball.visible = true;
    this.hand.visible = true;
}

PopUpTutorial.prototype.hide = function(){
    this.isOpen = false;
    this.graphicsObject.visible = false;
    this.popUp.visible = false;
    
    this.ball.visible = false;
    this.hand.visible = false;
}

PopUpTutorial.prototype.onPlay = function(){
    playSound(configGame.soundId.buttonGeneric);
    this.hide();
    
    this.hand.destroy();
    
    this.parentClass.onPlay();
    //game.state.start(StatesGame.gameplay); 
}