TomStates = {NONE:'none', IDLE:'idle', PICK_BALL:'pickBall', THROW:'throw', THROW_LOOP:'throwLoop', LOOSE_BALL:'looseBall', INSIDE_BALL:'insideBall'};

Tom = function(parent){
    this.parentClass = parent;
    this.FRAME_ANIMATIONS = 'frameAnimations';
    this.OFFSET_BALL_POSITION = 'offsetBallPosition';
    this.LOOP = 'loop';
    this.BALL_POSITIONS = 'ballPositions';

    this.ball = this.parentClass.ball;

    Phaser.Sprite.call(this, game, game.width*0.5, game.height, 'TomAnimations', 'tomIdle0000');

    this.scale.setTo(this.parentClass.ball.scale.x*0.8/ 0.55 * 1.1);
    this.anchor.setTo(0.62, 0.98);

    this.y += (this.height * 0.2);

    this.data = {};
    this.data[TomStates.IDLE] = {};
    this.data[TomStates.IDLE][this.FRAME_ANIMATIONS] = ['tomIdle0000', 'tomIdle0001', 'tomIdle0002', 'tomIdle0003', 'tomIdle0004', 'tomIdle0005','tomIdle0006', 'tomIdle0007', 'tomIdle0008', 'tomIdle0009','tomIdle0010', 'tomIdle0011', 'tomIdle0010', 'tomIdle0009', 'tomIdle0008', 'tomIdle0007', 'tomIdle0006','tomIdle0005','tomIdle0004','tomIdle0003','tomIdle0002','tomIdle0001'];
    this.data[TomStates.IDLE][this.OFFSET_BALL_POSITION] = {x:-50, y:0};
    this.data[TomStates.IDLE][this.LOOP] = false;
    this.data[TomStates.IDLE][this.BALL_POSITIONS] = [{x:66.89,y:-312.36},{x:66.89,y:-310.67},{x:66.89,y:-305.65},{x:66.89,y:-297.24},{x:66.89,y:-291.86},{x:66.89,y:-287.66},{x:66.89,y:-284.68},{x:66.89,y:-282.89},{x:66.89,y:-282.27},{x:66.89,y:-282.27},{x:66.89,y:-282.27},{x:66.89,y:-282.27},{x:66.89,y:-282.27},{x:66.89,y:-282.27},{x:66.89,y:-282.27},{x:66.89,y:-282.89},{x:66.89,y:-284.68},{x:66.89,y:-287.66},{x:66.89,y:-291.86},{x:66.89,y:-297.24},{x:66.89,y:-305.65},{x:66.89,y:-310.67}];

    this.data[TomStates.PICK_BALL] = {};
    this.data[TomStates.PICK_BALL][this.FRAME_ANIMATIONS] =['tomPickBall0000','tomPickBall0001','tomPickBall0002','tomPickBall0003','tomPickBall0004','tomPickBall0005','tomPickBall0006','tomPickBall0007','tomPickBall0008','tomPickBall0009','tomPickBall0010','tomPickBall0011','tomPickBall0012','tomPickBall0013'];
    this.data[TomStates.PICK_BALL][this.OFFSET_BALL_POSITION] = {x:0, y:0};
    this.data[TomStates.PICK_BALL][this.LOOP] = false;
    this.data[TomStates.PICK_BALL][this.BALL_POSITIONS] = [{x:-139.57,y:-42.29},{x:-139.57,y:-42.29},{x:-139.57,y:-42.29},{x:-139.57,y:-42.29},{x:-139.57,y:-42.29},{x:-139.57,y:-42.29},{x:-139.57,y:-42.29},{x:-139.57,y:-42.29},{x:-139.57,y:-42.29},{x:-146.54,y:-48.85},{x:-167.15,y:-68.38},{x:-155.31,y:-116.92},{x:-122.92,y:-202.93},{x:-106.51,y:-222.71}];


    this.data[TomStates.THROW] = {};
    this.data[TomStates.THROW][this.FRAME_ANIMATIONS] = ['tomThrow0000','tomThrow0001','tomThrow0002','tomThrow0003'];
    this.data[TomStates.THROW][this.OFFSET_BALL_POSITION] = {x:-50, y:0};
    this.data[TomStates.THROW][this.LOOP] = false;
    this.data[TomStates.THROW][this.BALL_POSITIONS] = [{x:59.92,y:-278.99},{x:58.38,y:-336.09},{x:56.79,y:-393.25},{x:56.74,y:-437.22}];
    
    this.data[TomStates.THROW_LOOP] = {};
    this.data[TomStates.THROW_LOOP][this.FRAME_ANIMATIONS] = ['tomThrow0004','tomThrow0005'];
    this.data[TomStates.THROW_LOOP][this.OFFSET_BALL_POSITION] = {x:0, y:0};
    this.data[TomStates.THROW_LOOP][this.LOOP] = false;

    this.data[TomStates.LOOSE_BALL] = {};
    this.data[TomStates.LOOSE_BALL][this.FRAME_ANIMATIONS] = ['tomWin0004','tomWin0005','tomLoose0000','tomLoose0001','tomLoose0002','tomLoose0003','tomLoose0004'];
    this.data[TomStates.LOOSE_BALL][this.OFFSET_BALL_POSITION] = {x:0, y:0};
    this.data[TomStates.LOOSE_BALL][this.LOOP] = false;
    
    this.data[TomStates.INSIDE_BALL] = {};
    this.data[TomStates.INSIDE_BALL][this.FRAME_ANIMATIONS] = ['tomWin0003','tomWin0004','tomWin0005','tomWin0006','tomWin0000','tomWin0001','tomWin0002',
     'tomWin0003','tomWin0004','tomWin0005','tomWin0006','tomWin0000','tomWin0001','tomWin0002',
     'tomWin0003','tomWin0004','tomWin0005','tomWin0006','tomWin0000','tomWin0001','tomWin0002',
     'tomWin0003','tomWin0004','tomWin0005','tomWin0006','tomWin0000','tomWin0001','tomWin0002'];
    this.data[TomStates.INSIDE_BALL][this.OFFSET_BALL_POSITION] = {x:0, y:0};
    this.data[TomStates.INSIDE_BALL][this.LOOP] = true;
    
    Object.entries(this.data).forEach(([key, value]) => {
        //console.log(key, value);
        var animation = this.animations.add(key, value[this.FRAME_ANIMATIONS], 24, value[this.LOOP]);
        animation.onComplete.add(this.onAnimationComplete, this);
    });

    this.state = TomStates.NONE;
    this.throwFlag = false; //Flag to wait until idle animation complete to start throw animation 

    this.flagBallHasBeenThrowed = false; //To fix bug on android
    /*
    this.frame = 0;
    var currentX = this.x + this.data[TomStates.THROW][this.BALL_POSITIONS][this.frame].x * this.scale.x + this.data[TomStates.THROW][this.OFFSET_BALL_POSITION].x * this.scale.x;
    var currentY = this.y + this.data[TomStates.THROW][this.BALL_POSITIONS][this.frame].y * this.scale.y + this.data[TomStates.THROW][this.OFFSET_BALL_POSITION].y * this.scale.y;
    this.ball.setPosition(currentX,  currentY);
    */
}

Tom.prototype = Object.create(Phaser.Sprite.prototype);
Tom.prototype.constructor = Tom;

Tom.prototype.playAnimation = function(newState){
    this.state = newState;
    this.currentAnimation = this.animations.play(newState);
}

Tom.prototype.setThrowFlag = function(value){
    this.throwFlag = true;
}

Tom.prototype.looseBall = function(){
    this.state = TomStates.LOOSE_BALL;
    this.playAnimation(TomStates.LOOSE_BALL);
}

Tom.prototype.ballInside = function(){
    this.state = TomStates.INSIDE_BALL;
    this.playAnimation(TomStates.INSIDE_BALL);
}

Tom.prototype.pause = function(){
    this.animations.paused = true;
}

Tom.prototype.unpause = function(){
    this.animations.paused = false;
}

Tom.prototype.onAnimationComplete = function(){
    switch(this.state){
        case TomStates.IDLE:
            if(this.throwFlag){
                this.playAnimation(TomStates.THROW);
                this.throwFlag = false;
            }else{
                this.playAnimation(TomStates.IDLE);
            }
            break;
        case TomStates.PICK_BALL:
            this.playAnimation(TomStates.IDLE);
            break;
        case TomStates.THROW:
            this.playAnimation(TomStates.THROW_LOOP);
            if(this.flagBallHasBeenThrowed==false){
                playSound(configGame.soundId.ballThrow);
                this.ball.throwCommit();
            }
            this.flagBallHasBeenThrowed=false;
            break;
        case TomStates.THROW_LOOP:
            break;
    }
}

Tom.prototype.setBallPosition = function(dataAnimation){
    var index = this.getCurrentAnimationIndex(dataAnimation);
    if(index>=0 && index<dataAnimation[this.BALL_POSITIONS].length){
        var currentX = this.x + dataAnimation[this.BALL_POSITIONS][index].x * this.scale.x + dataAnimation[this.OFFSET_BALL_POSITION].x * this.scale.x;
        var currentY = this.y + dataAnimation[this.BALL_POSITIONS][index].y * this.scale.y + dataAnimation[this.OFFSET_BALL_POSITION].y * this.scale.y;
        this.ball.setPosition(currentX,  currentY);
    }

}

Tom.prototype.getCurrentAnimationIndex = function(dataAnimation){
    var nameCurrentFrame = this.currentAnimation.currentFrame.name;
    if(nameCurrentFrame!=null){
        var stringIndex = nameCurrentFrame.slice(nameCurrentFrame.length-2, nameCurrentFrame.length);
        var currentIndex = parseInt(stringIndex);
        return currentIndex;
    }
    return -1;
}

Tom.prototype.update = function(){
    switch(this.state){
        case TomStates.IDLE:
            this.setBallPosition(this.data[TomStates.IDLE]);
            break;
        case TomStates.PICK_BALL:
            this.setBallPosition(this.data[TomStates.PICK_BALL]);
            var index = this.getCurrentAnimationIndex();
            if(index==6){
                playSound(configGame.soundId.ballGrab);
            }
            break;
        case TomStates.THROW:
            this.setBallPosition(this.data[TomStates.THROW]);

            /*var index = this.getCurrentAnimationIndex();
            if(index==2){
                playSound(configGame.soundId.ballThrow);
                this.ball.throwCommit();
                this.flagBallHasBeenThrowed = true;
            }*/
            break;
        case TomStates.THROW_LOOP:
            break;
    }
}

