WinScreen = function(parent){
    this.parentClass = parent;
    this.container = game.add.group();
    game.add.existing(this.container);

    this.bg = J2DM_AddSprite(config.spr_bgWinScreen);
    this.container.add(this.bg);
    this.effect = J2DM_AddSprite(config.spr_effectWinScreen);
    this.container.add(this.effect);

    var xPos = [0.4, 0.2, 0.82, 0.15, 0.9, 0.85];
    var yPos = [0.1, 0.3, 0.25, 0.8, 0.6, 0.85];

    for(var i=0; i<xPos.length; i++){
        this.star = new StarWinScreen(this, game.width * xPos[i], game.height * yPos[i]);
        this.container.add(this.star);
    }

    this.tomAnimationPositionY = game.height * 0.6;
    this.createTom();
    this.createTomTriple();

    this.winText = J2DM_CreateMovieClip(config.mc_msgWinScreen);
    this.winText.txt_title.text = configGame.getText(configGame.texts.winText1);

    this.winTextScale = this.winText.txt_title.scale.x;

    this.widthShadow = this.winText.txt_title.style.strokeThickness / 4; //The same as thickess after autoScale
    this.winText.txt_title.setShadow(this.widthShadow, this.widthShadow, "#D10008", 2, true, false);

    this.container.add(this.winText);

    this.counterScreenShown = 0;
    this.counterTilt = 0;
}

WinScreen.prototype.update = function(){
    if(this.container==null || !this.container.visible){
        return;
    }
    this.effect.angle += 0.3;

    this.counterTilt++;
    var deltaFrames = 10;
    if(this.counterTilt%deltaFrames==0){
        this.winText.txt_title.addColor("#FFFFFF", 0); 
        this.winText.txt_title.setShadow(this.widthShadow, this.widthShadow, "#FF6028", 2, true, false);
        this.winText.txt_title.stroke = '#D10008';

        this.counterTilt = 0;
    }else if(this.counterTilt%(deltaFrames/2)==0){
        this.winText.txt_title.addColor("#F5F590", 0); 
        this.winText.txt_title.setShadow(this.widthShadow, this.widthShadow, "#FFFFFF", 2, true, false);
        this.winText.txt_title.stroke = '#FF6028';
    }
}

WinScreen.prototype.createTom = function(){
    this.tomAnimation = game.add.sprite(game.width * 0.5, this.tomAnimationPositionY, 'tomWinScreen', 'tomWin0010');
    this.tomAnimation.anchor.setTo(0.5, 0.32);
    var arrayAnimations= [];
    for(var i=0; i<52; i++){
        if(i+1<10){
            arrayAnimations.push('tomWin000' + (i+1));
        }else{
            arrayAnimations.push('tomWin00' + (i+1));
        }
    }
    this.tomAnimation.animations.add('animation', arrayAnimations, 24, false);

    this.container.add(this.tomAnimation);
    J2DM_ScaleFixx(this.tomAnimation, game.width*1.15);
}

WinScreen.prototype.createTomTriple = function(){
    this.tomTripleAnimation = game.add.sprite(game.width * 0.5, this.tomAnimationPositionY, 'tomTripleWinScreen', 'tomTripleWin0003');
    this.tomTripleAnimation.anchor.setTo(0.5, 0.32);
    var arrayAnimations= [];
    for(var i=0; i<50; i++){
        if(i+1<10){
            arrayAnimations.push('tomTripleWin000' + (i+1));
        }else{
            arrayAnimations.push('tomTripleWin00' + (i+1));
        }
    }
    this.tomTripleAnimation.animations.add('animation', arrayAnimations, 24, false);

    this.container.add(this.tomTripleAnimation);
    J2DM_ScaleFixx(this.tomTripleAnimation, game.width*0.96);
}

WinScreen.prototype.start = function(){
    playSound(configGame.soundId.celebratory);
    
    this.counterScreenShown ++;

    this.show();
    this.container.alpha = 0;
    this.tomAnimation.visible = false;
    this.tomTripleAnimation.visible = false;

    this.originalPositionTomY = this.parentClass.tom.y;
    game.add.tween(this.parentClass.tom).to( { y: game.height*1.5 }, 100, Phaser.Easing.Quadratic.Out, true, 0);

    game.add.tween(this.container).to( { alpha: 1 }, 300, Phaser.Easing.Quadratic.Out, true, 80);

    //Select from the 2 animations to show 
    this.flagAnimationToShow = 0;
    if(this.counterScreenShown==1){
        this.flagAnimationToShow = 0;
    }else if(this.counterScreenShown==2){
        this.flagAnimationToShow = 1;
    }else{
        if(Math.random()*1000>500){
            this.flagAnimationToShow = 0;
        }else{
            this.flagAnimationToShow = 1;
        }
    }

    this.winText.visible = false;

    this.currentTomAnimation = null;
    game.time.events.add(Phaser.Timer.SECOND * 0.1, function(){
        if(this.flagAnimationToShow==0){
            this.currentTomAnimation = this.tomAnimation;
            this.winText.txt_title.text = configGame.getText(configGame.texts.winText1);
        }else{
            this.currentTomAnimation = this.tomTripleAnimation;
            this.winText.txt_title.text = configGame.getText(configGame.texts.winText2);
        }

        this.currentTomAnimation.animations.play('animation');
        this.currentTomAnimation.visible = true;
        this.currentTomAnimation.y = game.height * 1.5;
        game.add.tween(this.currentTomAnimation).to( { y: this.tomAnimationPositionY }, 150, Phaser.Easing.Quadratic.Out, true, 0);

        this.winText.visible = true;
        game.add.tween(this.winText.txt_title.scale).to({
            x: [ this.winTextScale * 0.4,  this.winTextScale * 1.5,  this.winTextScale * 1],
            y: [ this.winTextScale * 0.4,  this.winTextScale * 1.5,  this.winTextScale * 1]
        }, 800, Phaser.Easing.Elastic.Out, true, 0, 0, false);
    }, this);  

    game.time.events.add(Phaser.Timer.SECOND * 2.4, function(){
        game.add.tween(this.currentTomAnimation).to( { y: game.height * 1.5 }, 150, Phaser.Easing.Quadratic.Out, true, 0);

    }, this);  

    game.time.events.add(Phaser.Timer.SECOND * 2.6, function(){
        game.add.tween(this.parentClass.tom).to( { y: this.originalPositionTomY }, 150, Phaser.Easing.Quadratic.In, true, 0);
        game.add.tween(this.container).to( { alpha: 0 }, 150, Phaser.Easing.Quadratic.Out, true, 0);
        game.add.tween(this.winText.txt_title.scale).to( { x: 0, y:0 }, 80, Phaser.Easing.Quadratic.Out, true, 0);
    }, this);  

    game.time.events.add(Phaser.Timer.SECOND * 2.75, function(){
        this.hide();
    }, this);  

    game.time.events.add(Phaser.Timer.SECOND * 2.6, function(){
        this.parentClass.nextLevel(0);
    }, this);  
}

WinScreen.prototype.show = function(){
    this.container.visible = true;
    this.counterTilt = 0;
}

WinScreen.prototype.hide = function(){
    this.container.visible = false;
}
