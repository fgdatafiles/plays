DifficultyManager = function(parent){
    this.parentClass = parent;
    this.normalScore = 2;
    this.bonusScore = 3;
    
    this.diffStatic = new DifficultyBasketStatic(this, 0, 5);
    this.diffMoveRandomPosition = new DifficultyBasketMoveRandomPosition(this, 5, 10);
    this.diffMoveSlow = new DifficultyBasketMoveSlow(this, 10, 15);
    this.diffMoveFast = new DifficultyBasketMoveFast(this, 15, 20);
    
    this.arrayDifficulties = [this.diffStatic, this.diffMoveRandomPosition, this.diffMoveSlow, this.diffMoveFast];
    
    this.currentDifficultyIndex = 0;
    this.flagIceBallInside = 0;
}

DifficultyManager.prototype.startGame = function(){
    this.amountBallsInside = 0; //Counter each time the ball enter the basket
    this.multiplicatorFactor = 1; //We duplicate the factor if we do not touch the basket
}

DifficultyManager.prototype.iceBallInside = function(){
    this.flagIceBallInside = 1;
}

DifficultyManager.prototype.ballInside = function(){
    this.amountBallsInside++;

    console.log('this.amountBallsInside:'+this.amountBallsInside);
    
    var scoreToAdd = this.getBallScore();
    this.parentClass.basket.scoreManager.addScore(scoreToAdd, this.multiplicatorFactor);
}

DifficultyManager.prototype.ballFailed = function(){
    this.multiplicatorFactor = 1;
    this.parentClass.basket.hideBonusText();
}

DifficultyManager.prototype.getAmountBallsInside = function(){
    return this.amountBallsInside;
}

DifficultyManager.prototype.getBallScore = function(){
    if(this.parentClass.basket.getAmountBounces()==0){
        var score = this.bonusScore * this.multiplicatorFactor;
        this.multiplicatorFactor = this.multiplicatorFactor * 2;
        return score;
    }else{
        this.multiplicatorFactor = 1;
        return this.normalScore;
    }
}

DifficultyManager.prototype.calculateNextDifficulty = function(){
    if(!this.arrayDifficulties[this.currentDifficultyIndex].isInDifficultRange(this.amountBallsInside) ){
        this.goToNextDifficulty();
    }

    this.arrayDifficulties[this.currentDifficultyIndex].doAction(this.amountBallsInside);
}

DifficultyManager.prototype.goToNextDifficulty = function(){
    this.currentDifficultyIndex++;
    if(this.currentDifficultyIndex>=this.arrayDifficulties.length){
        this.currentDifficultyIndex = this.arrayDifficulties.length - 1;
    }
}

DifficultyManager.prototype.getBallType = function(){
    var maxLives = this.parentClass.basket.livesManager.getMaxLives();
    var currentLives = this.parentClass.basket.livesManager.getAmountLives();
    
    var nextBall = this.arrayDifficulties[this.currentDifficultyIndex].getBallType(maxLives, currentLives, this.amountBallsInside);
    return nextBall;
}

DifficultyManager.prototype.canJerryBlock = function(){
    return this.arrayDifficulties[this.currentDifficultyIndex].canJerryBlock(this.amountBallsInside);
}

