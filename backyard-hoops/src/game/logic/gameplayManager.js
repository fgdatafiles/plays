GamePlayManagerStates = {
    none:0,
    showInstructions:1,
    playing:3,
    gameOver:4,
    levelComplete:5
}

GamePlayManager = function(parent){       
    this.parentClass = parent;
    this.state = GamePlayManagerStates.none;
}

GamePlayManager.prototype.initialize = function(){
    J2DM_ControlAspectVariables(config.spr_ball);

    this.particlesGroup = game.add.group();
    //Add basket
    this.basket = new Basket(this);
    game.add.existing(this.basket);

    //Bascket Back
    this.basketNetBack = new BasketFront(this,'back');
    game.add.existing(this.basketNetBack);
    
    //Behind Ball (Red)
    this.basketUnderBall = new BasketFront(this,'front');
    game.add.existing(this.basketUnderBall);

    this.ball = new Ball(this);
    game.add.existing(this.ball);

    //Front Ball (Red)
    this.basketFront = new BasketFront(this,'front');
    game.add.existing(this.basketFront);
    this.basketFront.visible = false;

    //Set basket collisions
    this.basket.setCollisions();

    //Create Floor Physics
    this.createFloor();

    //Tom
    this.tom = new Tom(this);
    game.add.existing(this.tom);

    this.btnPauseGame = J2DM_AddButton(config.btn_pauseGame, this.onPause, this, 1, 0, 2, 0);
    //PopUp Gameover
    this.popUpGameOver = new PopUpGameOver(this);
    //Pause Pop Up
    this.pausePopUp = new PausePopUp(this);
    //Alert Box Pop Up
    this.alertBoxPopUp = new AlertBoxPopUp(this);
    
    //Difficulty Manager
    this.difficultyManager = new DifficultyManager(this);

    //To control Bounce Sound
    this.counterBounceBallOnFloor = 0;

    SettingsGame.suscribePause(this.onExternalPause, this);

    this.winScreen = new WinScreen(this);
    this.winScreen.hide();
}

GamePlayManager.prototype.startGame = function(){
    this.restartGame(true);
}

GamePlayManager.prototype.onExternalPause = function(context, flag){
    if(flag){
        if(context.state == GamePlayManagerStates.playing){
            context.pausePopUp.show();
        }
    }
}

GamePlayManager.prototype.onPause = function(){
    this.pausePopUp.show();
}

GamePlayManager.prototype.destroy = function(){
    SettingsGame.unSuscribePause();
    stopMusic(configGame.soundId.loop);
}

//This is called by popUpGameOver
GamePlayManager.prototype.restartGame = function(firstTime){
    this.amountConsecutiveBallsInside = 0;

    this.state = GamePlayManagerStates.playing;

    stopMusic(configGame.soundId.cover);
    playMusic(configGame.soundId.loop);

    this.difficultyManager.startGame();
    //Rfresh Basket visibility
    this.basketUnderBall.visible = true;
    this.basketFront.visible = false;
    //Reset basket    
    this.basket.reset();
    this.basket.jerry.appear();
    this.winScreen.hide();

    if(!firstTime){
        game.time.events.add(Phaser.Timer.SECOND * 1, function(){
            this.tom.playAnimation(TomStates.PICK_BALL);
            this.ball.resetPosition();
        }, this); 
    }else{
        this.tom.playAnimation(TomStates.PICK_BALL);
    }
}

//This is called when the Ball enter the basket and you make a point
GamePlayManager.prototype.ballInBasketSucceed = function(){
    this.amountConsecutiveBallsInside ++;
    this.state = GamePlayManagerStates.levelComplete;

    this.difficultyManager.ballInside();
    this.showParticlesBallInside();
    this.basket.ballInBasketSucceed();

    //Select random sound when ball gets inside
    if(game.rnd.between(0, 100) > 50){
        playSound(configGame.soundId.ballNetSwish01);
    }else{
        playSound(configGame.soundId.ballNetSwish02);
    }

    this.tom.ballInside();
    this.basketFront.playAnimationBallIn();
    this.basketNetBack.playAnimationBallIn();
    
    if(this.ball.ballType == BallTypes.ice){
        this.basket.stopMoving();
        this.difficultyManager.iceBallInside();
        this.basket.setIceColor();
    }

    game.time.events.add(Phaser.Timer.SECOND * 1, function(){
        this.ball.fadeOut();

        if(this.ball.ballType == BallTypes.color){
            this.basket.livesManager.winLive();
        }

        if(this.ball.ballType == BallTypes.fire){
            this.basket.scoreManager.duplicateScore();
        }

        this.difficultyManager.calculateNextDifficulty();
    }, this);  

    //If 5 consecutive balls inside => show tom dancing
    if(this.amountConsecutiveBallsInside%3==0){
        game.time.events.add(Phaser.Timer.SECOND * 0.6, function(){
            this.winScreen.start();
        }, this);  
    }else{
        this.nextLevel(1.5);
    }
}

//This is called when the Ball do not enter the basket and you failed
GamePlayManager.prototype.ballInBasketFailed = function(){
    this.amountConsecutiveBallsInside = 0;
    this.basket.ballInBasketFailed();
    this.difficultyManager.ballFailed();

    if(this.basket.livesManager.getAmountLives()==0){
        this.state = GamePlayManagerStates.gameOver;

        this.counterBounceBallOnFloor = 1000;
        stopMusic(configGame.soundId.loop);
        playSound(configGame.soundId.boo_lose);
        
        //playSound(configGame.soundId.stingScorePopup);
        game.time.events.add(Phaser.Timer.SECOND * 0, function(){
            playSound(configGame.soundId.buzzRetry);
        }, this);  

        this.tom.looseBall();
        this.basket.stopMoving();
        var currentScore = this.basket.scoreManager.getScore();
        SettingsGame.submitScore(currentScore);
        this.popUpGameOver.show(currentScore);
        this.btnPauseGame.visible = false;
        this.basket.jerry.setAllowBlock(false);
        
        game.time.events.add(Phaser.Timer.SECOND * 2, function(){
            playMusic(configGame.soundId.cover);
        }, this);  
    }else{
        this.tom.looseBall();
        playSound(configGame.soundId.looseOneBall);
        this.nextLevel(1.25);
    }
}

GamePlayManager.prototype.nextLevel = function(delay){
    game.time.events.add(Phaser.Timer.SECOND * delay, function(){
        this.basketUnderBall.visible = true;
        this.basketFront.visible = false;
        this.ball.resetPosition();
        this.tom.playAnimation(TomStates.PICK_BALL);

        var nextBallType = this.difficultyManager.getBallType();
        var canJerryBlock = this.difficultyManager.canJerryBlock();
        this.basket.jerry.setAllowBlock(canJerryBlock);

        this.ball.setType( nextBallType );
        this.counterBounceBallOnFloor = 0;
    }, this);  
}

GamePlayManager.prototype.onThrowBall = function(){
    this.basketUnderBall.visible = true;
    this.basketFront.visible = false;
    this.basket.deactivateFlagsCheckpoints();
    //this.tom.setThrowFlag(true);
    this.tom.playAnimation(TomStates.THROW);
}

GamePlayManager.prototype.createFloor = function(){
    this.floor = new Phaser.Physics.Box2D.Body(game, null, game.world.centerX, game.world.height*0.95, 0);
    this.floor.setRectangle(game.world.width*3.0, game.world.height*0.06, 0, 0, 0);
    this.floor.static = true;
    this.floor.setBodyContactCallback(this.ball.body, this.onBallHitFloor, this);
}

GamePlayManager.prototype.onBallHitFloor = function(body1, body2, fixture1, fixture2, begin){
    if(begin){
        this.counterBounceBallOnFloor ++;
        if(this.counterBounceBallOnFloor<=3){
            playSound(configGame.soundId.ballBounce);
        }
    }
}

GamePlayManager.prototype.startEmmiter = function(x, y, factorVelocity){
    emitter = game.add.emitter(x, y, 40);
    this.particlesGroup.add(emitter);

    var star = game.add.sprite(0,0,'star');
    var starWidth = game.width /star.width * 0.8;
    star.destroy();

    var widthReference = this.basket.width;

    emitter.makeParticles('star');
    emitter.minParticleSpeed.setTo(factorVelocity * widthReference*0.8,  -widthReference*0.6);
    //emitter.maxParticleSpeed.setTo(-0, 0);
    emitter.minParticleScale = 0.018 * starWidth;
    emitter.maxParticleScale = 0.07 * starWidth;
    //emitter.minParticleAlpha = 0;
    emitter.setAlpha(0.8, 0);

    emitter.gravity = widthReference*0.4;

    //  This will emit a quantity of 5 particles every 500ms. Each particle will live for 2000ms.
    //  The -1 means "run forever"
    emitter.flow(1200, 10, 30, 1);
}

GamePlayManager.prototype.showParticlesBallInside = function(){
    game.time.events.add(Phaser.Timer.SECOND * 0.2, function(){
        this.startEmmiter(this.basket.x + this.basket.width*0.2, this.basket.y - this.basket.height*0.3, 1);
    }, this);  
    game.time.events.add(Phaser.Timer.SECOND * 0.4, function(){
        this.startEmmiter(this.basket.x - this.basket.width*0.2, this.basket.y - this.basket.height*0.3, -1);
    }, this);  
}

GamePlayManager.prototype.update = function(){
    if(this.winScreen!=null){
        this.winScreen.update();
    }
}

GamePlayManager.prototype.onBasketPositionChanged = function(xx){
    this.basketNetBack.updatePositionX(xx);
    this.basketUnderBall.updatePositionX(xx);
    this.basketFront.updatePositionX(xx);
}


/*

GamePlayManager.prototype.pauseElements = function(){
    this.tom.pause();
    this.ball.pause();
}

GamePlayManager.prototype.unpauseElements = function(){
    this.tom.unpause();
    this.ball.unpause();
}

*/