/*
Interface
onFadeInComplete()
onFadeOutComplete()
*/

FadeManager = function(parent){
    this.parentClass = parent;

    this.fade = J2DM_AddSprite(config.spr_pixel);
    this.fade.visible = false;
}

FadeManager.prototype.fadeIn = function(seconds){
    this.fade.visible = true;
    this.fade.alpha = 0;
    game.add.tween(this.fade).to( { alpha: 1 }, seconds * 1000, Phaser.Easing.Quadratic.Out, true, 0);
    game.time.events.add(Phaser.Timer.SECOND * seconds, function(){
        this.fade.visible = false;
        this.parentClass.onFadeInComplete();
    }, this); 
}

FadeManager.prototype.fadeOut = function(seconds){
    this.fade.visible = true;
    this.fade.alpha = 1;
    game.add.tween(this.fade).to( { alpha: 0 }, seconds * 1000, Phaser.Easing.Quadratic.In, true, 0);
    game.time.events.add(Phaser.Timer.SECOND * seconds, function(){
        this.fade.visible = false;
        this.parentClass.onFadeOutComplete();
    }, this); 
}