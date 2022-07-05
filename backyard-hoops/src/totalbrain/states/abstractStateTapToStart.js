AbstractStateTapToStart = function(parent){
    this.parent = parent;
}

AbstractStateTapToStart.prototype.preload = function(){
}

AbstractStateTapToStart.prototype.init = function(){
  
}

AbstractStateTapToStart.prototype.create = function(){
    game.input.onTap.add(this.onTap, this); //Callback for taps

    //Tap To Continue Text
    this.tapToContinueText = J2DM_AddText(config.txt_tapToContinue);
    this.tapToContinueText.visible = false;

    this.tapCounter = 0;
}

AbstractStateTapToStart.prototype.update = function(){
    this.tapCounter ++;
    if(this.tapCounter < configGame.tapToStart.tapCounter1){
        this.tapToContinueText.visible = true;
    }else if(this.tapCounter < configGame.tapToStart.tapCounter2){
        this.tapToContinueText.visible = false;
    }else{
        this.tapCounter = 0;
    }
}

AbstractStateTapToStart.prototype.onTap = function(pointer){
    this.parent.onTap(pointer);
}