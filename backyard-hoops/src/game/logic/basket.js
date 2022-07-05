BasketStates = {
    none:0,
    movingRight:1,
    movingLeft:2,
    movingToPosition:3
}

Basket = function(parent){
    this.parentClass = parent;

    Phaser.Sprite.call(this, game, 0, 0, 'BasketStruct');

    this.groupBack = game.add.group();
    this.addChild(this.groupBack);

    this.basketFront = game.add.sprite(0, 0, 'BasketStruct');
    this.basketFront.anchor.setTo(0.5);
    this.addChild(this.basketFront);

    //Apply size
    J2DM_ScaleFixx(this, game.width * config.spr_ball.sizex_portrait * configGame.gameplay.basket.scaleFactor);
    //J2DM_ApplySize(this, config.spr_basket);   
    this.x = game.width * config.spr_basket.posx;
    this.y = game.height * config.spr_basket.posy;

    this.anchor.setTo(0.5)

    //Score Bonus (x2)
    this.scoreBonus = J2DM_CreateMovieClip(config.mc_textBonusScore); 
    this.scoreBonus.visible = false;
    this.addChild(this.scoreBonus);
    
    this.radiusCircle = this.width * config.spr_basket.radiusCircle; 
    this.widthBasketHole = this.width * config.spr_basket.holeWidth;

    var circleLeftx = this.x - this.widthBasketHole / 2;
    var circleLefty = this.y + this.height * config.spr_basket.circley;
    var circleRightx = this.x + this.widthBasketHole / 2;
    var circleRighty = this.y + this.height * config.spr_basket.circley;

    this.circleRight = new Phaser.Physics.Box2D.Body(game, null, circleRightx, circleRighty, 0);
    this.circleRight.setCircle(this.radiusCircle);
    this.circleRight.static = true;

    this.circleLeft = new Phaser.Physics.Box2D.Body(game, null, circleLeftx, circleLefty, 0);
    this.circleLeft.setCircle(this.radiusCircle);
    this.circleLeft.static = true;

    this.listMovingBodies = [this.circleLeft, this.circleRight, this];
    this.basketDirection = 1;
    this.setNormalVelocity();

    this.createCheckpoint(5);
    this.createJerryCheckpoint();

    this.state = BasketStates.none;

    this.livesManager = new LivesManager(this);
    this.scoreManager = new ScoreManager(this);

    this.counterBounce = 0;

    this.groupFront = game.add.group();
    this.addChild(this.groupFront);

    //Jerry
    this.jerry = new Jerry(this);
    this.groupBack.add(this.jerry);
    this.groupBack.add(this.jerry);
    this.groupFront.add(this.jerry);

}

Basket.prototype = Object.create(Phaser.Sprite.prototype);
Basket.prototype.constructor = Basket;

Basket.prototype.getAmountBounces = function(){
    return this.counterBounce;
}

Basket.prototype.showBonusText = function(bonus){
    if(bonus>2){
        this.scoreBonus.txt_bonus.text = 'x' + (bonus/2);
        this.scoreBonus.visible = true;
    }else{
        this.hideBonusText();
    }
}

Basket.prototype.hideBonusText = function(){
    this.scoreBonus.visible = false;
}

Basket.prototype.reset = function(){
    this.setNormalVelocity();
    this.state = BasketStates.none;
    this.moveToPosition(game.width/2);
    this.livesManager.reset();
    this.scoreManager.resetScore();
}

Basket.prototype.setCollisions = function(){
    this.circleLeft.setBodyContactCallback(this.parentClass.ball.body, this.onBounce, this);
    this.circleRight.setBodyContactCallback(this.parentClass.ball.body, this.onBounce, this);

    this.checkpointJerry.setBodyContactCallback(this.parentClass.ball.body, this.onCkeckpointJerry, this);
}

Basket.prototype.onBounce = function(body1, body2, fixture1, fixture2, begin){
    if(begin){
        var flagBounce = this.parentClass.ball.onBounce();
        if(flagBounce){
            this.counterBounce ++;
        }
    }
}

Basket.prototype.update = function(){
    this.jerry.update();
    switch(this.state){
        case BasketStates.movingRight:
            this.moveBodies();
            if(this.x > game.width*configGame.gameplay.basket.limitMovingRightFactor){
                this.startMovingLeft();
            }
            break;
        case BasketStates.movingLeft:
            this.moveBodies();
            if(this.x < game.width*configGame.gameplay.basket.limitMovingLeftFactor){
                this.startMovingRight();
            }
            break;
        case BasketStates.movingToPosition:
            var currentx = this.x + ((this.newx - this.x)*configGame.gameplay.basket.movingToPositionFactor);
            this.moveBodiesToX(currentx-this.x);
            if(Math.abs(this.newx-currentx) < 2){
                this.stopMoving();
            }
            break;
    }
    this.parentClass.onBasketPositionChanged(this.x);
}

//------------------------------------------------------------
//------------------------------------------------------------
//-------------  P U B L I C   F U N C T I O N S--------------
//------------------------------------------------------------
//------------------------------------------------------------

Basket.prototype.moveToRandomPosition = function(){
    var xx = game.rnd.between(game.width*0.1, game.width*0.9);
    var minDistance = game.width * 0.25;
    while( Math.abs(xx-this.x) < minDistance ){
        xx = game.rnd.between(game.width*0.1, game.width*0.9);
    }
    playSound(configGame.soundId.boardMove);
    this.moveToPosition(xx);
}

Basket.prototype.moveToPosition = function(newX){
    this.state = BasketStates.movingToPosition;
    this.newx = newX;
}

Basket.prototype.onSwitchMoving = function(){
    if(this.state == BasketStates.none){
        this.startMovingRight();
    }else{
        this.stopMoving();
    }
}

Basket.prototype.stopMoving = function(){
    this.state = BasketStates.none;
}

Basket.prototype.startMoving = function(){
    if(this.state == BasketStates.movingRight || this.state == BasketStates.movingLeft){
        return;
    }
    this.startMovingRight();
}

Basket.prototype.startMovingRight = function(){
    this.state = BasketStates.movingRight;
    this.basketDirection = 1;
}

Basket.prototype.startMovingLeft = function(){
    this.state = BasketStates.movingLeft;
    this.basketDirection = -1;
}

Basket.prototype.increaseVelocity = function(){
    this.velocity += 1;
}

Basket.prototype.ballInBasketFailed = function(){
    this.livesManager.looseLive();
    this.jerry.ballInBasketFailed();
}

Basket.prototype.ballInBasketSucceed = function(){
    this.jerry.ballInBasketSucceed();
}

Basket.prototype.setNormalVelocity = function(){
    this.velocity = game.width * 0.005;
}

Basket.prototype.setFastVelocity = function(){
    this.velocity = game.width * 0.01;
}

Basket.prototype.setIceColor = function(){
    
}

//------------------------------------------------------------
//------------------------------------------------------------

Basket.prototype.moveBodies = function(){
    var amount = this.listMovingBodies.length;
    for(var i=0; i<amount; i++){
        this.listMovingBodies[i].x += (this.velocity * this.basketDirection);
    }
}

Basket.prototype.moveBodiesToX = function(deltaX){
    var amount = this.listMovingBodies.length;
    for(var i=0; i<amount; i++){
        this.listMovingBodies[i].x += deltaX;
    }
}

Basket.prototype.createJerryCheckpoint = function(){
    var heightCheckpoint = this.radiusCircle * 1;
    var posy = this.y - this.height * config.spr_basket.checkpointJerryY;

    this.checkpointJerry = new Phaser.Physics.Box2D.Body(game, null, this.x, posy, 0);
    this.checkpointJerry.setRectangle(this.widthBasketHole * 0.85, heightCheckpoint, 0, 0, 0);
    this.checkpointJerry.static = true;
    this.checkpointJerry.sensor = true;
    this.checkpointJerry.flagTouchBall = false;
    this.listMovingBodies.push(this.checkpointJerry);
}

Basket.prototype.onCkeckpointJerry = function(body1, body2, fixture1, fixture2, begin){
    if(begin && !this.checkpointJerry.flagTouchBall && this.parentClass.ball.isBallThrowingDown() ){
        if(this.parentClass.basket.jerry.isInPositionToBlock()){
            this.parentClass.basket.jerry.blockBall();
            this.parentClass.ball.jerryBlock();
            this.checkpointJerry.flagTouchBall = true;
        }
    }
}

Basket.prototype.createCheckpoint = function(amount){
    this.listCheckpoints = [];
    var heightCheckpoint = this.radiusCircle * 2;
    var posy = this.y + this.height * config.spr_basket.circley;
    for(var i=0; i<amount; i++){
        var checkpoint = new Phaser.Physics.Box2D.Body(game, null, this.x, posy + i * heightCheckpoint, 0);
        checkpoint.setRectangle(this.widthBasketHole, heightCheckpoint, 0, 0, 0);
        checkpoint.static = true;
        checkpoint.sensor = true;
        checkpoint.idCheckpoint = i;
        checkpoint.flagTouchBall = false;
        this.listCheckpoints.push(checkpoint);
        this.listMovingBodies.push(checkpoint);
    }
}

Basket.prototype.deactivateFlagsCheckpoints = function(){
    this.checkpointJerry.flagTouchBall = false;
    this.counterBounce = 0;
    var amount = this.listCheckpoints.length;
    for(var i=0; i<amount; i++){
        this.listCheckpoints[i].flagTouchBall = false;
    }
}

Basket.prototype.activateCheckpoint = function(index){
    if(index>=0 && index<this.listCheckpoints.length){
        this.listCheckpoints[index].flagTouchBall = true;
    }
}

Basket.prototype.areAllCheckpointsTrue = function(){
    var amount = this.listCheckpoints.length;
    for(var i=0; i<amount; i++){
        if(this.listCheckpoints[i].flagTouchBall == false){
            return false;    
        }
    }
    return true;
}