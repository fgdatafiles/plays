ScoreManager = function(parent){
    this.parentClass = parent;

    this.txtScore = J2DM_CreateMovieClip(config.mc_textScore);    
    this.parentClass.addChild(this.txtScore);

    this.txtScore.x = 0;
    this.txtScore.y = -140;

    this.resetScore();
}

ScoreManager.prototype.setScore = function(value){
    this.score = value;
    this.refreshScore();
}

ScoreManager.prototype.getScore = function(){
    return this.score;
}

ScoreManager.prototype.addScore = function(value, multiplicatorFactor){
    game.time.events.add(Phaser.Timer.SECOND * 0.3, function(){
        this.score += value;
        this.refreshScore();
        this.parentClass.showBonusText(multiplicatorFactor);
        if(this.parentClass.getAmountBounces()==0){
            playSound(configGame.soundId.scoring02);
        }else{
            playSound(configGame.soundId.scoring01);
        }
    }, this);  
}

ScoreManager.prototype.duplicateScore = function(){
    this.score *= 2;
    this.refreshScore();
    playSound(configGame.soundId.scoring02);
}

ScoreManager.prototype.resetScore = function(){
    this.score = 0;
    this.refreshScore();
}

ScoreManager.prototype.refreshScore = function(){
    this.txtScore.txt_score.text = this.score;
}

