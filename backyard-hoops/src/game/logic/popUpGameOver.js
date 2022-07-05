PopUpGameOver = function(parent){
    this.parentClass = parent;

    this.graphicsObject = game.add.graphics(0, 0);
    this.graphicsObject.beginFill('0x000000', 0.5);
    this.graphicsObject.drawRect(0, 0, game.width, game.height);
    this.graphicsObject.endFill();

    this.popUpGameOver = J2DM_CreateMovieClip(config.mc_popUpGameOver);
    this.popUpGameOver.txt_finalScore.text = configGame.getText(configGame.texts.finalScore);
    this.popUpGameOver.txt_finalScore.setShadow(6, 6, "#40419e", 2, true, true);

    this.btnPlayAgain = J2DM_AddButton(config.btn_play, this.onPlayAgain, this, 1, 0, 2, 0);
    this.btnPlayAgain.y = this.popUpGameOver.height * 0.3 / this.popUpGameOver.scale.x;

    this.popUpGameOver.txt_bestScoreLabel.text = configGame.getText(configGame.texts.bestScore);

    this.popUpGameOver.addChild(this.btnPlayAgain);

    //this.popUpGameOver.spr_scoreSpinfx.visible = false;

    //the parameters for 'to' are properties, time, ease, auto start, delay and times to repeat (Infinity will keep it repeating forever) and yoyo (not used, makes the tween go backwards every other repeat) 
    //Rotate Spin
    this.rotateTween = game.add.tween(this.popUpGameOver.spr_scoreSpinfx).to({angle: 359}, 7000, null, true, 0, Infinity);

    //Invert Confetti
    this.popUpGameOver.spr_scoreConfettiRight.scale.setTo(-1,1);

    this.hide();
}

PopUpGameOver.prototype.show = function(finalScore){
    this.isOpen = true;
    this.popUpGameOver.visible = true;
    this.btnPlayAgain.visible = true;
    this.graphicsObject.visible = true;
    this.popUpGameOver.txt_score.text = this.integerToString(finalScore, 6);;
    this.popUpGameOver.txt_bestScore.text = this.integerToString(SettingsGame.bestScore, 4);
}

PopUpGameOver.prototype.hide = function(){
    this.isOpen = false;
    this.popUpGameOver.visible = false;
    this.btnPlayAgain.visible = false;
    this.graphicsObject.visible = false;
}

PopUpGameOver.prototype.onPlayAgain = function(){
    this.fadeManager = new FadeManager(this);
    this.fadeManager.fadeIn(0.2); 
}

PopUpGameOver.prototype.onFadeInComplete = function(){
    game.state.start(StatesGame.gameplay);
}

PopUpGameOver.prototype.integerToString = function(value, amountDigits){
    var valueString = value + '';
    var currentAmountDigits = valueString.length;
    for(var i=0; i< (amountDigits - currentAmountDigits); i++){
        valueString = '0' + valueString;
    }
    return valueString;
}
