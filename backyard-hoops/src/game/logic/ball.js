BallStates = {
    none:0,
    dragging:1,
    throwingUp:2,
    throwingDown:3,
    win:4,
    failed:5,
    throwingWait:6
}

BallTypes = {
    normal:'normal',
    color:'color',
    ice:'ice',
    fire:'fire'
}

Ball = function(parent){
    this.parentClass = parent;
    Phaser.Sprite.call(this, game, 0, 0, 'balls');

    //Apply size and position
    J2DM_ApplySize(this, config.spr_ball);   
    this.x = game.width * config.spr_ball.posx;
    this.y = game.height * config.spr_ball.posy;
    //Initialize physics
    game.physics.box2d.enable(this);
    this.body.setCircle(this.width*0.4);
    this.body.restitution = 0.5;
    this.body.sensor = false;
    //this.body.gravityScale = 2;

    //Add Checkpoints Collision contact Callbacks to detect if ball is inside the basket
    this.listCheckpoints = this.parentClass.basket.listCheckpoints;
    for(var i=0; i<this.listCheckpoints.length; i++){
        this.body.setBodyContactCallback(this.listCheckpoints[i], this.onCkeckpointCollision, this);
    }

    //game.input.onDown.add(this.mouseDragStart, this);
    //game.input.addMoveCallback(this.mouseDragMove, this);
    //game.input.onUp.add(this.mouseDragEnd, this);

    // Set up handlers for mouse events
    this.inputEnabled = true;
    this.input.pixelPerfectClick = true;
    this.events.onInputDown.add(this.onInputDown, this);
    this.events.onInputUp.add(this.onInputUp, this);

    this.originalScale = this.scale.x;
    this.resetPosition();

    this.animations.add(BallTypes.normal, [0], 24, false);
    this.animations.add(BallTypes.color, [1], 24, false);
    this.animations.add(BallTypes.ice, [2], 24, false);
    this.animations.add(BallTypes.fire, [3,4,5,6,7,8,9,10,11,12,13], 24, true);

    this.setType(BallTypes.normal);

    var ballThroughForceFactor = J2DM_GetPercentageFrom2Ranges(configGame.gameplay.physicsValues.ballThroughForceFactorRange, ratioAspect);
    this.forceY = (this.parentClass.basket.y - this.y) * ballThroughForceFactor;
}

Ball.prototype = Object.create(Phaser.Sprite.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.pause = function(){
    this.animations.paused = true;
    this.body.dynamic = false;
}

Ball.prototype.unpause = function(){
    this.animations.paused = false;
    switch(this.state){
        case BallStates.none:
            break;
        case BallStates.dragging:
            break;
        case BallStates.throwingWait:
            break;
        case BallStates.throwingUp:
        case BallStates.throwingDown:
        case BallStates.win:
            this.body.dynamic = true;
            break;
    }
}

Ball.prototype.resetPosition = function(){
    if(this.tweenAlpha !=null){
        this.tweenAlpha.stop();
        this.tweenAlpha = null;
    }
    this.state = BallStates.none;

    this.setPosition(game.width * config.spr_ball.posx, game.height * config.spr_ball.posy);

    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    this.body.sensor = false;
    this.body.angularVelocity = 0;
    this.alpha = 1;
    this.listDragPositions = [];
    this.body.dynamic = false;
    this.scale.setTo(this.originalScale * configGame.gameplay.ball.scaleBeforeThrowing);
    this.flagControlBallSize = true;
    this.counterSoundBounce = 0;
}

Ball.prototype.setRandomType = function(){
    var newType = game.rnd.between(0, 3);
    switch(newType){
        case 0:
            this.setType(BallTypes.normal);
            break;
        case 1:
            this.setType(BallTypes.color);
            break;
        case 2:
            this.setType(BallTypes.ice);
            break;
        case 3:
            this.setType(BallTypes.fire);
            break;
    }
}

Ball.prototype.isInThrowingState = function(){
    if(this.state == BallStates.throwingUp || this.state == BallStates.throwingDown || this.state == BallStates.throwingWait){
        return true;
    }
    return false;
}

Ball.prototype.setType = function(type){
    this.ballType = type;
    this.animations.play(type);
}

Ball.prototype.setPosition = function(posx, posy){
    this.body.x = posx;
    this.body.y = posy;
}

Ball.prototype.onInputDown = function(){
    if(this.state != BallStates.none){
        return;
    }
    this.state = BallStates.dragging;
    var xPos = game.input.x;
    var yPos = game.input.y;
    this.listDragPositions.push({x: xPos, y:yPos});
}

Ball.prototype.onInputUp = function(){
    if(this.state != BallStates.dragging){
        return;
    }
    this.addDragPosition();

    var amount = this.listDragPositions.length;

    var positionx = this.listDragPositions[0].x;
    var positiony = this.listDragPositions[0].y;

    var lastPositionx = this.listDragPositions[amount-1].x;
    var lastPositiony = this.listDragPositions[amount-1].y;

    var forcex = (lastPositionx-positionx) ;
    var forcey = (lastPositiony-positiony) ;


    var factor = this.forceY / forcey;    
    if(factor>15){
        factor = 15;
    }

    if(lastPositiony<positiony){
        //this.throw((lastPositionx-positionx)* configGame.gameplay.physicsValues.ballThroughXFactor, this.forceY);
        this.throw(forcex * factor, this.forceY);
    }
}

Ball.prototype.addDragPosition = function(){
    var amount = this.listDragPositions.length;

    var positionx = game.input.x;
    var positiony = game.input.y;

    var lastPositionx = this.listDragPositions[amount-1].x;
    var lastPositiony = this.listDragPositions[amount-1].y;

    var deltax = Math.abs(lastPositionx-positionx);
    var deltay = Math.abs(lastPositiony-positiony);

    if(deltax>1 || deltay>1){
        this.listDragPositions.push({x:positionx, y:positiony});
        if(amount>9){
            this.listDragPositions.shift();
        }
    }
}

Ball.prototype.update = function(){
    switch(this.state){
        case BallStates.none:
            break;
        case BallStates.dragging:
            this.addDragPosition();
            break;
        case BallStates.throwingUp:
            if(this.body.y < this.parentClass.basket.y - this.parentClass.basket.height * 0.4)
            {
                this.setStateBallFalling();
            }
            if(this.body.velocity.y>0){
                this.setStateBallFalling();
            }
            this.controlBallSize();
            break;
        case BallStates.throwingDown:
            if(this.body.y > game.height * 0.6)
            {
                this.setStateGameOver();
            }
            this.controlBallSize();
            break;
        case BallStates.win:
            break;
    }
}

Ball.prototype.controlBallSize = function(){
    if(!this.flagControlBallSize){
        return;
    }
    if(this.body.velocity.y < 0){
        var percentage = J2DM_GetPercentageFromRange(this.forceY, 0, this.body.velocity.y);

        var parameters = {
            min : this.forceY,
            max : 0,
            minResult : this.originalScale * 1.5,
            maxResult : this.originalScale
        }

        var newScale = J2DM_GetPercentageFrom2Ranges(parameters, this.body.velocity.y);
        this.scale.setTo(newScale);
        if(this.body.velocity.y>-10){
            this.flagControlBallSize = false;
        }
    }
}

Ball.prototype.setStateBallFalling = function(){
    console.log("DOOOOOOOOWN");
    this.parentClass.basketUnderBall.visible = false;
    this.parentClass.basketFront.visible = true;

    this.body.sensor = false;
    this.state = BallStates.throwingDown;
}

Ball.prototype.setStateGameOver = function(){
    this.state = BallStates.failed;
    this.parentClass.ballInBasketFailed();
    this.fadeOut();
}

Ball.prototype.fadeOut = function(){
    //Alpha Tween
    this.tweenAlpha = game.add.tween(this);
    this.tweenAlpha.to( {alpha:0}, 400, Phaser.Easing.Quadratic.Out);
    
    this.alpha = 1;
    this.tweenAlpha.start();
}

Ball.prototype.throw = function(deltax, deltay){
    this.parentClass.onThrowBall();

    this.throwVelx = deltax;
    this.throwVely = deltay;

    this.state = BallStates.throwingWait;
}

Ball.prototype.throwCommit = function(){
    var slope = (-this.throwVely/this.throwVelx);

    if(Math.abs(slope)<2){
        //If the direction (slope) is very limit to go out the screen => We correct
        var newSlope = 4;
        if(slope<0){
            newSlope = -4;
        }
        this.throwVelx = -this.throwVely/ (newSlope);
    }else{
        //If the slope throw in relation to (basket-ball position slope), we correct the velx
        var deltaBasketx = this.parentClass.basket.x - this.x;
        var deltaBaskety = this.parentClass.basket.y - this.y;
        var slopeDeltaBasket = (deltaBaskety/deltaBasketx);
        
        this.throwVelx = -this.throwVely/ (slope*3);
        /*
        if(Math.abs(slopeDeltaBasket)<3){
            this.throwVelx = -this.throwVely/ (slope*3);
        }
        */
    }

    this.body.dynamic = true;
    this.body.sensor = true;
    this.body.velocity.x = this.throwVelx;
    this.body.velocity.y = this.throwVely;
    this.body.angularVelocity = 2;
    this.state = BallStates.throwingUp;
}

Ball.prototype.onCkeckpointCollision = function(body1, body2, fixture1, fixture2, begin){
    if(this.state == BallStates.throwingDown && begin){
        var idCheckpoint = body2.idCheckpoint;
        this.parentClass.basket.activateCheckpoint(idCheckpoint);
        if(this.parentClass.basket.areAllCheckpointsTrue()){
            this.state = BallStates.win;
            this.parentClass.ballInBasketSucceed();
        }
    }
}

//When ball touch the basket (Listeners created on basket object)
Ball.prototype.onBounce = function(){
    if(this.state == BallStates.throwingDown){
        this.counterSoundBounce++;
        if(this.counterSoundBounce<5){
            playSound(configGame.soundId.ballHitRim);
        }
        return true;
    }
    return false;
}

Ball.prototype.isBallThrowingDown = function(){
    return (this.state == BallStates.throwingDown);
}

Ball.prototype.jerryBlock = function(){
    game.time.events.add(Phaser.Timer.SECOND * 0.05, function(){
        this.body.velocity.y = - this.body.velocity.y;
        this.body.velocity.x = this.body.velocity.y/2;
    }, this);

}
/*
Ball.prototype.mouseDragStart = function(){
    game.physics.box2d.mouseDragStart(game.input.mousePointer);
    console.log("mouseDragStart:"+game.input.mousePointer);
}

Ball.prototype.mouseDragMove = function(){
    game.physics.box2d.mouseDragMove(game.input.mousePointer);
}

Ball.prototype.mouseDragEnd = function(){
    game.physics.box2d.mouseDragEnd();
    console.log("mouseDragEnd");
}
*/