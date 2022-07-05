LivesManager = function(parent){  
    this.parentClass = parent;

    this.live1 = J2DM_AddSprite(config.spr_livesBall);
    this.parentClass.addChild(this.live1);
    this.live1.x = -62;
    this.live1.y = -213;
    this.live1Tween = game.add.tween(this.live1.scale).to({
        x: [1, 2.5, 1.5, 1],
        y: [1, 2.5, 1.5, 1]
    }, 1500, Phaser.Easing.Elastic.Out, false, 0, 0, false);

    this.live2 = J2DM_AddSprite(config.spr_livesBall);
    this.parentClass.addChild(this.live2);
    this.live2.x = -2;
    this.live2.y = -213;
    this.live2Tween = game.add.tween(this.live2.scale).to({
        x: [1, 2.5, 1.5, 1],
        y: [1, 2.5, 1.5, 1]
    }, 1500, Phaser.Easing.Elastic.Out, false, 0, 0, false);
    
    this.live3 = J2DM_AddSprite(config.spr_livesBall);
    this.parentClass.addChild(this.live3);
    this.live3.x = 60;
    this.live3.y = -213;
    this.live3Tween = game.add.tween(this.live3.scale).to({
        x: [1, 2.5, 1.5, 1],
        y: [1, 2.5, 1.5, 1]
    }, 1500, Phaser.Easing.Elastic.Out, false, 0, 0, false);
    
    this.arrayLivesTweens = [this.live1Tween, this.live2Tween, this.live3Tween];
    this.reset();
}

LivesManager.prototype.getMaxLives = function(){
    return 3;
}

LivesManager.prototype.getAmountLives = function(){
    return this.lives;
}

LivesManager.prototype.reset = function(){
    this.lives = this.getMaxLives();
    this.refreshLives();
}

LivesManager.prototype.looseLive = function(){
    this.lives--;
    if(this.lives<0){
        this.lives = 0;
    }
    this.refreshLives();
}

LivesManager.prototype.winLive = function(){
    if(this.lives>=this.getMaxLives()){
        return;
    }
    playSound(configGame.soundId.extra_life);
    this.lives++;
    this.refreshLives();
    this.arrayLivesTweens[this.lives-1].start();
}

LivesManager.prototype.refreshLives = function(){
    switch(this.lives){
        case 3:
            this.live1.visible = true;
            this.live2.visible = true;
            this.live3.visible = true;
            break;
        case 2:
            this.live1.visible = true;
            this.live2.visible = true;
            this.live3.visible = false;
            break;
        case 1:
            this.live1.visible = true;
            this.live2.visible = false;
            this.live3.visible = false;
            break;
        case 0:
            this.live1.visible = false;
            this.live2.visible = false;
            this.live3.visible = false;
            break;
    }
}