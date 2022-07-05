BasketFront = function(parent, type){
    this.parentClass = parent;

    Phaser.Sprite.call(this, game, 0, 0, 'BasketFrontBack');
    //Apply size
    J2DM_ScaleFixx(this, game.width * config.spr_ball.sizex_portrait * configGame.gameplay.basket.scaleFactor * 0.55);
    this.x = game.width * config.spr_basket.posx;
    this.y = game.height * config.spr_basket.posy;

    this.anchor.setTo(0.5, -0.16);
    if(type=='back')
    {
        this.animations.add('ballIn', ['basket0005','basket0006','basket0006','basket0007','basket0007','basket0008','basket0008','basket0009','basket0009','basket0005'], 24, false);
        this.frame = 5;
    }else
    {
        this.animations.add('ballIn', ['basket0000','basket0001','basket0001','basket0002','basket0002','basket0003','basket0003','basket0004','basket0004','basket0000'], 24, false);
    }
}

BasketFront.prototype = Object.create(Phaser.Sprite.prototype);
BasketFront.prototype.constructor = BasketFront;

BasketFront.prototype.update = function(){
    //this.x = this.parentClass.basket.x;
}

BasketFront.prototype.updatePositionX = function(xx){
    this.x = xx;
}

BasketFront.prototype.playAnimationBallIn = function(){
    this.animations.play('ballIn');
}
