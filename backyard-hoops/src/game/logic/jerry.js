JerryStates = {NONE:'none', JUMP_IN_TWEEN:'jerryJumpInTween', JUMP_IN_END : 'jerryJumpInEnd', IDLE_START:'jerryIdleStart', IDLE_RIGHT:'jerryIdleRight', IDLE_LEFT : 'jerryIdleLeft', IDLE_CENTER: 'jerryIdleCenter', JUMP_OUT_TWEEN : 'jerryJumpOutTween', JUMP_BASKET_TWEEN:'jerryJumpBasketTween', JUMP_BASKET_END:'jerryJumpBasketEnd', BASKET_IDLE:'jerryBasketIdle', BASKET_BLOCK:'jerryBasketBlock', BASKET_JUMP_OUT:'jerryBasketJumpOut', BASKET_JUMP_OUT_BACK:'jerryBasketJumpOutBack', ANGRY:'jerryAngry', LAUGH:'jerryLaugh'};

Jerry = function(parent){
    this.parentClass = parent;
    this.basketRef = this.parentClass;
    this.groupBack = this.parentClass.groupBack;
    this.groupFront = this.parentClass.groupFront;

    this.FRAME_ANIMATIONS = 'frameAnimations';
    this.LOOP = 'loop';
    this.LOCZ = 'locz';
    this.TWEEN = 'tween';

    this.pointBasketUp = {x:0, y: - (this.basketRef.height / this.basketRef.scale.x / 2 )};
    this.pointBasketDown = {x:0, y: this.pointBasketUp.y + this.basketRef.height * 0.53 / this.basketRef.scale.x};

    this.pointBasketGoOut1 = {x:0, y: - (this.basketRef.height / this.basketRef.scale.x * 0.4 )};
    this.pointBasketGoOut2 = {x:0, y: - (this.basketRef.height / this.basketRef.scale.x * 0.52 )};

    Phaser.Sprite.call(this, game, game.width*0.5, game.height*0.5, 'JerryAnimations', 'jerryBasketIdle0000');

    //this.scale.setTo(this.basketRef.scale.x*2);
    J2DM_ScaleFixx(this, this.basketRef.width * 0.3 / this.basketRef.scale.x);
    this.anchor.setTo(0.5, 0.87);
    this.x = this.pointBasketUp.x;
    this.y = this.pointBasketDown.y;

    this.state = TomStates.NONE;

    //CREATE ANIMATIONS
    this.data = {};
    this.data[JerryStates.JUMP_IN_TWEEN] = {};
    this.data[JerryStates.JUMP_IN_TWEEN][this.FRAME_ANIMATIONS] = ['jerryFirstPart0000'];
    this.data[JerryStates.JUMP_IN_TWEEN][this.LOOP] = false;
    this.data[JerryStates.JUMP_IN_TWEEN][this.LOCZ] = this.groupBack;
    this.data[JerryStates.JUMP_IN_TWEEN][this.TWEEN] = { y0:this.pointBasketDown.y, y1:this.pointBasketUp.y};

    this.data[JerryStates.JUMP_IN_END] = {};
    this.data[JerryStates.JUMP_IN_END][this.FRAME_ANIMATIONS] = ['jerryFirstPart0000','jerryFirstPart0001','jerryFirstPart0002','jerryFirstPart0003'];
    this.data[JerryStates.JUMP_IN_END][this.LOOP] = false;
    this.data[JerryStates.JUMP_IN_END][this.LOCZ] = this.groupBack;

    this.data[JerryStates.IDLE_START] = {};
    this.data[JerryStates.IDLE_START][this.FRAME_ANIMATIONS] = ['jerryFirstPart0004','jerryFirstPart0005','jerryFirstPart0006','jerryFirstPart0007','jerryFirstPart0008','jerryFirstPart0009','jerryFirstPart0010','jerryFirstPart0010','jerryFirstPart0010','jerryFirstPart0010','jerryFirstPart0010','jerryFirstPart0010'];
    this.data[JerryStates.IDLE_START][this.LOOP] = false;
    this.data[JerryStates.IDLE_START][this.LOCZ] = this.groupFront;

    this.data[JerryStates.IDLE_RIGHT] = {};
    this.data[JerryStates.IDLE_RIGHT][this.FRAME_ANIMATIONS] = ['jerryFirstPart0011','jerryFirstPart0012','jerryFirstPart0013','jerryFirstPart0014','jerryFirstPart0015','jerryFirstPart0016','jerryFirstPart0017','jerryFirstPart0018','jerryFirstPart0019','jerryFirstPart0020','jerryFirstPart0021','jerryFirstPart0020','jerryFirstPart0019','jerryFirstPart0019','jerryFirstPart0019','jerryFirstPart0019','jerryFirstPart0019','jerryFirstPart0019','jerryFirstPart0019','jerryFirstPart0019','jerryFirstPart0019','jerryFirstPart0019','jerryFirstPart0019'];
    this.data[JerryStates.IDLE_RIGHT][this.LOOP] = false;
    this.data[JerryStates.IDLE_RIGHT][this.LOCZ] = this.groupFront;

    this.data[JerryStates.IDLE_LEFT] = {};
    this.data[JerryStates.IDLE_LEFT][this.FRAME_ANIMATIONS] = ['jerryFirstPart0018','jerryFirstPart0017','jerryFirstPart0016','jerryFirstPart0022','jerryFirstPart0023','jerryFirstPart0024','jerryFirstPart0025','jerryFirstPart0026','jerryFirstPart0025','jerryFirstPart0024','jerryFirstPart0024','jerryFirstPart0024','jerryFirstPart0024','jerryFirstPart0024','jerryFirstPart0024','jerryFirstPart0024','jerryFirstPart0024','jerryFirstPart0024','jerryFirstPart0024','jerryFirstPart0024'];
    this.data[JerryStates.IDLE_LEFT][this.LOOP] = false;
    this.data[JerryStates.IDLE_LEFT][this.LOCZ] = this.groupFront;

    this.data[JerryStates.IDLE_CENTER] = {};
    this.data[JerryStates.IDLE_CENTER][this.FRAME_ANIMATIONS] = ['jerryFirstPart0023','jerryFirstPart0022','jerryFirstPart0015','jerryFirstPart0014','jerryFirstPart0013','jerryFirstPart0012','jerryFirstPart0011','jerryFirstPart0011','jerryFirstPart0011','jerryFirstPart0011','jerryFirstPart0011','jerryFirstPart0011'];
    this.data[JerryStates.IDLE_CENTER][this.LOOP] = false;
    this.data[JerryStates.IDLE_CENTER][this.LOCZ] = this.groupFront;

    this.data[JerryStates.JUMP_OUT_TWEEN] = {};
    this.data[JerryStates.JUMP_OUT_TWEEN][this.FRAME_ANIMATIONS] = ['jerryJumpOutTween0000','jerryJumpOutTween0001','jerryJumpOutTween0002','jerryJumpOutTween0003','jerryJumpOutTween0004','jerryJumpOutTween0005','jerryJumpOutTween0006','jerryJumpOutTween0007'];
    this.data[JerryStates.JUMP_OUT_TWEEN][this.LOOP] = false;
    this.data[JerryStates.JUMP_OUT_TWEEN][this.LOCZ] = this.groupBack;
    this.data[JerryStates.JUMP_OUT_TWEEN][this.TWEEN] = { y0:this.pointBasketGoOut1.y, y1:this.pointBasketGoOut2.y};

    this.data[JerryStates.JUMP_BASKET_TWEEN] = {};
    this.data[JerryStates.JUMP_BASKET_TWEEN][this.FRAME_ANIMATIONS] = ['jerryJumpBasketTween0000','jerryJumpBasketTween0001','jerryJumpBasketTween0002','jerryJumpBasketTween0003'];
    this.data[JerryStates.JUMP_BASKET_TWEEN][this.LOOP] = false;
    this.data[JerryStates.JUMP_BASKET_TWEEN][this.LOCZ] = this.groupFront;
    this.data[JerryStates.JUMP_BASKET_TWEEN][this.TWEEN] = { y0:this.pointBasketGoOut2.y, y1:this.pointBasketDown.y};

    this.data[JerryStates.JUMP_BASKET_END] = {};
    this.data[JerryStates.JUMP_BASKET_END][this.FRAME_ANIMATIONS] = ['jerryBasketIdle0026'];
    this.data[JerryStates.JUMP_BASKET_END][this.LOOP] = false;
    this.data[JerryStates.JUMP_BASKET_END][this.LOCZ] = this.groupFront;

    this.data[JerryStates.BASKET_IDLE] = {};
    this.data[JerryStates.BASKET_IDLE][this.FRAME_ANIMATIONS] = ['jerryBasketIdle0000','jerryBasketIdle0001','jerryBasketIdle0002','jerryBasketIdle0003','jerryBasketIdle0004','jerryBasketIdle0005','jerryBasketIdle0006','jerryBasketIdle0007','jerryBasketIdle0006','jerryBasketIdle0005','jerryBasketIdle0004','jerryBasketIdle0003','jerryBasketIdle0002','jerryBasketIdle0001','jerryBasketIdle0000','jerryBasketIdle0001','jerryBasketIdle0002','jerryBasketIdle0003','jerryBasketIdle0004','jerryBasketIdle0005','jerryBasketIdle0006','jerryBasketIdle0007','jerryBasketIdle0006','jerryBasketIdle0005','jerryBasketIdle0004','jerryBasketIdle0003','jerryBasketIdle0002','jerryBasketIdle0001','jerryBasketIdle0000','jerryBasketIdle0001','jerryBasketIdle0002','jerryBasketIdle0003','jerryBasketIdle0004','jerryBasketIdle0005','jerryBasketIdle0006','jerryBasketIdle0007','jerryBasketIdle0006','jerryBasketIdle0005','jerryBasketIdle0004','jerryBasketIdle0003','jerryBasketIdle0002','jerryBasketIdle0001'];
    this.data[JerryStates.BASKET_IDLE][this.LOOP] = false;
    this.data[JerryStates.BASKET_IDLE][this.LOCZ] = this.groupFront;

    this.data[JerryStates.BASKET_BLOCK] = {};
    this.data[JerryStates.BASKET_BLOCK][this.FRAME_ANIMATIONS] = ['jerryBasketIdle0008','jerryBasketIdle0009','jerryBasketIdle00010','jerryBasketIdle0011','jerryBasketIdle0012','jerryBasketIdle0013','jerryBasketIdle0014','jerryBasketIdle0015','jerryBasketIdle0016','jerryBasketIdle0017','jerryBasketIdle0018','jerryBasketIdle0019','jerryBasketIdle0020','jerryBasketIdle0021','jerryBasketIdle0022','jerryBasketIdle0023','jerryBasketIdle0024','jerryBasketIdle0025'];
    this.data[JerryStates.BASKET_BLOCK][this.LOOP] = false;
    this.data[JerryStates.BASKET_BLOCK][this.LOCZ] = this.groupFront;

    this.data[JerryStates.BASKET_JUMP_OUT] = {};
    this.data[JerryStates.BASKET_JUMP_OUT][this.FRAME_ANIMATIONS] = ['jerryBasketIdle0027','jerryBasketIdle0028','jerryBasketIdle0029','jerryBasketIdle0030','jerryBasketIdle0031','jerryBasketIdle0032','jerryBasketIdle0033'];
    this.data[JerryStates.BASKET_JUMP_OUT][this.LOOP] = false;
    this.data[JerryStates.BASKET_JUMP_OUT][this.LOCZ] = this.groupFront;

    this.data[JerryStates.BASKET_JUMP_OUT_BACK] = {};
    this.data[JerryStates.BASKET_JUMP_OUT_BACK][this.FRAME_ANIMATIONS] = ['jerryBasketIdle0034','jerryBasketIdle0035','jerryBasketIdle0036','jerryBasketIdle0037','jerryBasketIdle0037','jerryBasketIdle0037','jerryBasketIdle0037','jerryBasketIdle0037','jerryBasketIdle0037','jerryBasketIdle0037','jerryBasketIdle0037','jerryBasketIdle0037','jerryBasketIdle0037','jerryBasketIdle0037'];
    this.data[JerryStates.BASKET_JUMP_OUT_BACK][this.LOOP] = false;
    this.data[JerryStates.BASKET_JUMP_OUT_BACK][this.LOCZ] = this.groupBack;

    this.data[JerryStates.ANGRY] = {};
    this.data[JerryStates.ANGRY][this.FRAME_ANIMATIONS] = ['jerryAngry0000','jerryAngry0001','jerryAngry0002','jerryAngry0003','jerryAngry0004','jerryAngry0005',
                                                           'jerryAngry0006','jerryAngry0007','jerryAngry0008','jerryAngry0009','jerryAngry0008','jerryAngry0007',
                                                           'jerryAngry0006','jerryAngry0007','jerryAngry0008','jerryAngry0009','jerryAngry0008','jerryAngry0007',
                                                           'jerryAngry0006','jerryAngry0007','jerryAngry0008','jerryAngry0009','jerryAngry0008','jerryAngry0007',
                                                           'jerryAngry0006','jerryAngry0007','jerryAngry0008','jerryAngry0009','jerryAngry0008','jerryAngry0007',
                                                           'jerryAngry0006','jerryAngry0007','jerryAngry0008','jerryAngry0009','jerryAngry0008','jerryAngry0007',
                                                           'jerryAngry0006','jerryAngry0007','jerryAngry0008','jerryAngry0009','jerryAngry0008','jerryAngry0007',
                                                           'jerryAngry0005','jerryAngry0004','jerryAngry0003','jerryAngry0002','jerryAngry0001'];
    this.data[JerryStates.ANGRY][this.LOOP] = false;
    this.data[JerryStates.ANGRY][this.LOCZ] = this.groupBack;

    this.data[JerryStates.LAUGH] = {};
    this.data[JerryStates.LAUGH][this.FRAME_ANIMATIONS] = ['jerryLaugh0000','jerryLaugh0001','jerryLaugh0002','jerryLaugh0003','jerryLaugh0004',
                                                           'jerryLaugh0003','jerryLaugh0002','jerryLaugh0002','jerryLaugh0002','jerryLaugh0003','jerryLaugh0004',
                                                           'jerryLaugh0005','jerryLaugh0006','jerryLaugh0007','jerryLaugh0008','jerryLaugh0007','jerryLaugh0006','jerryLaugh0005',
                                                           'jerryLaugh0005','jerryLaugh0006','jerryLaugh0007','jerryLaugh0008','jerryLaugh0007','jerryLaugh0006','jerryLaugh0005',
                                                           'jerryLaugh0005','jerryLaugh0006','jerryLaugh0007','jerryLaugh0008','jerryLaugh0007','jerryLaugh0006','jerryLaugh0005',
                                                           'jerryLaugh0001'
                                                          ];
    this.data[JerryStates.LAUGH][this.LOOP] = false;
    this.data[JerryStates.LAUGH][this.LOCZ] = this.groupBack;

    //CREATE ANIMATIONS
    Object.entries(this.data).forEach(([key, value]) => {
        //console.log(key, value);
        var animation = this.animations.add(key, value[this.FRAME_ANIMATIONS], 18, value[this.LOOP]);
        animation.onComplete.add(this.onAnimationComplete, this);
    });

    this.visible = false;
    this.setAllowBlock(false);
    
    this.flagFirstTimeAngry = false;
    this.flagFirstTimeLaugh = false;
}

Jerry.prototype = Object.create(Phaser.Sprite.prototype);
Jerry.prototype.constructor = Jerry;

Jerry.prototype.setAllowBlock = function(value){
    this.allowBlock = value;
}

Jerry.prototype.appear = function(){
    game.time.events.add(Phaser.Timer.SECOND * 0.6, function(){
        playSound(configGame.soundId.jerryAsoma);
        this.playAnimation(JerryStates.JUMP_IN_TWEEN);
    }, this); 
}

Jerry.prototype.blockBall = function(){
    playSound(configGame.soundId.jerryBloquea);
    this.playAnimation(JerryStates.BASKET_BLOCK);
}

Jerry.prototype.isInPositionToBlock = function(){
    if(this.allowBlock && this.state == JerryStates.BASKET_IDLE){
        return true;
    }
    return false;
}

Jerry.prototype.playAnimation = function(animation){
    this.visible = true;
    this.state = animation;
    this.animations.play(animation);
    this.data[animation][this.LOCZ].add(this);
    if( this.data[animation][this.TWEEN]!=null ){
        this.y = this.data[animation][this.TWEEN].y0;

        this.currentTween = game.add.tween(this);
        this.currentTween.to( { y: this.data[animation][this.TWEEN].y1 }, 300, Phaser.Easing.Quadratic.Out, false, 0 );
        this.currentTween.onComplete.add( this.tweenComplete, this);
        this.currentTween.start();
    }
}

Jerry.prototype.tweenComplete = function(){
    switch(this.state){
        case JerryStates.JUMP_IN_TWEEN:
            this.playAnimation(JerryStates.JUMP_IN_END);
            break;
        case JerryStates.JUMP_OUT_TWEEN:
            this.playAnimation(JerryStates.JUMP_BASKET_TWEEN);
            break;
    }
}

Jerry.prototype.ballInBasketSucceed = function(){
    if(this.state==JerryStates.IDLE_START || this.state==JerryStates.IDLE_RIGHT || this.state==JerryStates.IDLE_LEFT || this.state==JerryStates.IDLE_CENTER){
        if(Math.random()*1000<600 || !this.flagFirstTimeAngry){
            this.flagFirstTimeAngry = true;
            this.playAnimation(JerryStates.ANGRY);
        }
    }
}

Jerry.prototype.ballInBasketFailed = function(){
    if(this.state==JerryStates.IDLE_START || this.state==JerryStates.IDLE_RIGHT || this.state==JerryStates.IDLE_LEFT || this.state==JerryStates.IDLE_CENTER){
        if(Math.random()*1000<600 || !this.flagFirstTimeLaugh){
            this.flagFirstTimeLaugh = true;
            this.playAnimation(JerryStates.LAUGH);
        }
    }
}

Jerry.prototype.update = function(){

}

Jerry.prototype.onAnimationComplete = function(){
    switch(this.state){
        case JerryStates.JUMP_IN_END:
            this.playAnimation(JerryStates.IDLE_START);
            break;
        case JerryStates.IDLE_START:
            this.playAnimation(JerryStates.IDLE_RIGHT);
            break;
        case JerryStates.IDLE_RIGHT:
            this.playAnimation(JerryStates.IDLE_LEFT);
            break;
        case JerryStates.IDLE_LEFT:
            this.playAnimation(JerryStates.IDLE_CENTER);
            break;
        case JerryStates.IDLE_CENTER:
            if(this.allowBlock){
                playSound(configGame.soundId.jerryBaja);
                this.playAnimation(JerryStates.JUMP_OUT_TWEEN);
            }else{
                this.playAnimation(JerryStates.IDLE_START);
            }            
            break;

        case JerryStates.JUMP_BASKET_TWEEN:
            this.playAnimation(JerryStates.JUMP_BASKET_END);
            break;
        case JerryStates.JUMP_BASKET_END:
            this.playAnimation(JerryStates.BASKET_IDLE);
            break;
        case JerryStates.BASKET_IDLE:
            if(this.parentClass.parentClass.ball.isInThrowingState()){
                //If the ball is coming we repeat to block the ball
                this.playAnimation(JerryStates.BASKET_IDLE);
            }else{
                playSound(configGame.soundId.jerrySube);
                this.playAnimation(JerryStates.BASKET_JUMP_OUT);
            }
            break;

        case JerryStates.BASKET_BLOCK:
            playSound(configGame.soundId.jerrySube);
            this.playAnimation(JerryStates.BASKET_JUMP_OUT);
            break;
        case JerryStates.BASKET_JUMP_OUT:
            this.playAnimation(JerryStates.BASKET_JUMP_OUT_BACK);
            break;
        case JerryStates.BASKET_JUMP_OUT_BACK:
            playSound(configGame.soundId.jerryAsoma);
            this.playAnimation(JerryStates.JUMP_IN_TWEEN);
            break;
        case JerryStates.ANGRY:
            this.playAnimation(JerryStates.IDLE_START);
            break;
        case JerryStates.LAUGH:
            this.playAnimation(JerryStates.IDLE_START);
            break;
    }
}