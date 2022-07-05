
DifficultyAbstractUnit = function(flagInitialize, parent, minRange, maxRange){   
    if(flagInitialize){
        this.parentClass = parent;
        this.minRange = minRange;
        this.maxRange = maxRange;

        this.flagExtraLiveBall = false; 
        this.indexColorBall = game.rnd.between(minRange+1, maxRange-1);

        this.flagIceBall = false; 
        this.indexIceBall = game.rnd.between(minRange+1, maxRange-1);
        while(this.indexIceBall == this.indexColorBall){
            this.indexIceBall = game.rnd.between(minRange+1, maxRange-1);
        }

        this.flagFireBall = false; 
        console.log('initialize indexColorBall:'+this.indexColorBall); 
        console.log('initialize indexIceBall:'+this.indexIceBall);

        this.arrayJerryBlock = [];
    }
}

DifficultyAbstractUnit.prototype.isInDifficultRange = function(amountBallsInside){
    if(amountBallsInside >= this.minRange && amountBallsInside < this.maxRange){
        return true;
    }else{
        return false;
    }
}

DifficultyAbstractUnit.prototype.doAction = function(amountBallsInside){

}

DifficultyAbstractUnit.prototype.getBallType = function(maxLives, currentLives, amountBallsInside){
    return BallTypes.normal;
}

DifficultyAbstractUnit.prototype.canPlaceColorBall = function(maxLives, currentLives, amountBallsInside){
    if(!this.flagExtraLiveBall){
        if(amountBallsInside >= this.indexColorBall){
            if( currentLives < maxLives ){
                this.flagExtraLiveBall = true;
                return true;
            }
            this.indexColorBall++;
        }
    }

    return false;
}

DifficultyAbstractUnit.prototype.canPlaceFireBall = function(maxLives, currentLives, amountBallsInside){
    if(!this.flagFireBall){
        if(game.rnd.between(0, 100)>95){
            this.flagFireBall = true;
            return true;
        }
    }
    return false;
}

DifficultyAbstractUnit.prototype.setJerryBlockIndex = function(amount){
    this.arrayJerryBlock = [];
    if(amount==0){
        return;
    }

    for(var i=0; i<amount; i++){
        var index = game.rnd.between(this.minRange+1, this.maxRange-1);
        
        while(this.arrayJerryBlock.indexOf(index)>=0){
            index = game.rnd.between(this.minRange+1, this.maxRange-1);
        }        
        this.arrayJerryBlock.push(index);
    }
    console.log('*** this.arrayJerryBlock:' + this.arrayJerryBlock);
}

DifficultyAbstractUnit.prototype.canJerryBlock = function(amountBallsInside){
    if(this.arrayJerryBlock.indexOf(amountBallsInside)>=0){
        return true;
    }else{
        return false;
    }
}