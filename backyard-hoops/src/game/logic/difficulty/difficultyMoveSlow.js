
DifficultyBasketMoveSlow = function(parent, minRange, maxRange){
    DifficultyAbstractUnit.call(this, true, parent, minRange, maxRange);
    this.setJerryBlockIndex(2);
}

DifficultyBasketMoveSlow.prototype = new DifficultyAbstractUnit;
DifficultyBasketMoveSlow.prototype.constructor = DifficultyBasketMoveSlow;

DifficultyBasketMoveSlow.prototype.doAction = function(amountBallsInside){
    if(this.parentClass.flagIceBallInside>0)
    {
        this.parentClass.flagIceBallInside++;
        if(this.parentClass.flagIceBallInside==3){
            this.parentClass.flagIceBallInside = 0;
        }
    }else
    {
        this.parentClass.parentClass.basket.startMoving();
        this.parentClass.parentClass.basket.setNormalVelocity();
    }
}

DifficultyBasketMoveSlow.prototype.getBallType = function(maxLives, currentLives, amountBallsInside){
    if(!this.flagIceBall && amountBallsInside == this.indexIceBall){
        this.flagIceBall = true;
        return BallTypes.ice;
    }

    this.doAction();
    
    if(this.canPlaceColorBall(maxLives, currentLives, amountBallsInside)){
        return BallTypes.color;
    }

    if(this.canPlaceFireBall(maxLives, currentLives, amountBallsInside)){
        return BallTypes.fire;
    }

    return BallTypes.normal;
}