
DifficultyBasketStatic = function(parent, minRange, maxRange){
    DifficultyAbstractUnit.call(this, true, parent, minRange, maxRange);
    this.setJerryBlockIndex(1);
}

DifficultyBasketStatic.prototype = new DifficultyAbstractUnit;
DifficultyBasketStatic.prototype.constructor = DifficultyBasketStatic;

//DifficultyBasketStatic.prototype.hola = function(){
//DifficultyAbstractUnit.prototype.hola.call();
//}

DifficultyBasketStatic.prototype.getBallType = function(maxLives, currentLives, amountBallsInside){
    if(this.canPlaceColorBall(maxLives, currentLives, amountBallsInside)){
        return BallTypes.color;
    }
        
    return BallTypes.normal;
}