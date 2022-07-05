
DifficultyBasketMoveRandomPosition = function(parent, minRange, maxRange){
    DifficultyAbstractUnit.call(this, true, parent, minRange, maxRange);
    this.setJerryBlockIndex(1);
}

DifficultyBasketMoveRandomPosition.prototype = new DifficultyAbstractUnit;
DifficultyBasketMoveRandomPosition.prototype.constructor = DifficultyBasketMoveRandomPosition;

DifficultyBasketMoveRandomPosition.prototype.doAction = function(amountBallsInside){
    this.parentClass.parentClass.basket.moveToRandomPosition();
}

DifficultyBasketMoveRandomPosition.prototype.getBallType = function(maxLives, currentLives, amountBallsInside){
    if(this.canPlaceColorBall(maxLives, currentLives, amountBallsInside)){
        return BallTypes.color;
    }
    
    if(this.canPlaceFireBall(maxLives, currentLives, amountBallsInside)){
        return BallTypes.fire;
    }
    
    return BallTypes.normal;
}