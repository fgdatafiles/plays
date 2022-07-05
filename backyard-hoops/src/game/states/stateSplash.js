State_Splash = {
    init: function() {

    },
    preload: function() {
        if(!game.device.desktop){
            game.scale.forceOrientation(false, true);
            game.scale.enterIncorrectOrientation.add(handleIncorrect);
            game.scale.leaveIncorrectOrientation.add(handleCorrect);
        }
    },
    create: function() {         
        this.bg = J2DM_AddSprite(config.spr_coverBackground);
        this.jerry = J2DM_AddSprite(config.spr_coverJerry);
        this.tom = J2DM_AddSprite(config.spr_coverTom);
        this.posTomy = this.tom.y;
        this.counterTomy = 0;
        
        //Logo
        this.logo = J2DM_CreateMovieClip(config.mc_popUpLogoBase);
        this.logo.txt_gameName1.text = configGame.getText(configGame.texts.nameGame1);
        this.logo.txt_gameName2.text = configGame.getText(configGame.texts.nameGame2);
        this.logo.txt_gameName1.setShadow(6, 6, "#d90e12", 2, true, true);
        this.logo.txt_gameName2.setShadow(6, 6, "#4042af", 2, true, true);

        if(this.logo.txt_gameName1.width>this.logo.spr_logoBase.width*1.5){
           J2DM_ScaleFixx(this.logo.txt_gameName1, this.logo.spr_logoBase.width*1.45);
        }

        //Best Score
        this.bestScore = J2DM_CreateMovieClip(config.mc_splashBestScore);
        this.bestScore.txt_labelScore.text = configGame.getText(configGame.texts.bestScore);
        this.bestScore.txt_score.text = SettingsGame.bestScore + '';
        this.bestScore.txt_labelScore.setShadow(6, 6, "#d90e12", 2, true, true);
        this.bestScore.txt_score.setShadow(6, 6, "#4042af", 2, true, true);
        
        if(this.bestScore.txt_labelScore.width > this.bestScore.spr_logoBase.width * 1.5)
        {
           J2DM_ScaleFixx(this.bestScore.txt_labelScore, this.bestScore.spr_logoBase.width * 1.5);
        }

        this.btnPlay = J2DM_AddButton(config.btn_playCover, this.onPlay, this, 1, 0, 2, 0);
        this.btnPlay.customGroup.txt_buttonText.text = configGame.getText(configGame.texts.play);

        var autoScaleButtonPlay = 300;
        if(this.btnPlay.customGroup.txt_buttonText.width > autoScaleButtonPlay){
           J2DM_ScaleFixx(this.btnPlay.customGroup.txt_buttonText, autoScaleButtonPlay);
        }

        game.physics.startSystem(Phaser.Physics.BOX2D);
        game.physics.box2d.gravity.y = game.height * configGame.gameplay.physicsValues.gravityFactor;

        SettingsGame.tutorialShown = false;
        this.fadeManager = new FadeManager(this);
        this.fadeManager.fadeOut(0.35);

        stopMusic(configGame.soundId.loop);
        playMusic(configGame.soundId.cover);
        //game.state.start(StatesGame.tutorial);
        this.tweenIn();
    },
    tweenIn:function(){
        //Btn Play
        this.scaleBtnPlay = this.btnPlay.scale.x;
        this.btnPlay.scale.setTo(0);
        game.add.tween(this.btnPlay.scale).to({
            x: this.scaleBtnPlay,
            y: this.scaleBtnPlay
        }, 500, Phaser.Easing.Back.Out, true, 800, 0, false);
        
        //Logo
        this.scaleLogo = this.logo.scale.x;
        this.logo.scale.setTo(0);
        game.add.tween(this.logo.scale).to({
            x: this.scaleLogo ,
            y: this.scaleLogo 
        }, 500, Phaser.Easing.Back.Out, true, 500, 0, false);
        
        //BEST SCORE
        this.bestScorex = this.bestScore.x;
        this.bestScore.x = game.width * 1.5;
        game.add.tween(this.bestScore).to( { x: this.bestScorex }, 200, Phaser.Easing.Quadratic.Out, true,700);
        
        //TOM
        this.tomPositionx = this.tom.x;
        this.tom.x = -game.width * 0.5;
        game.add.tween(this.tom).to( { x: this.tomPositionx }, 500, Phaser.Easing.Quadratic.Out, true, 0);
        
        //JERRY
        this.jerryPositionx = this.jerry.x;
        this.jerryPositiony = this.jerry.y;
        this.jerry.x = game.width * 1.5;
        this.jerry.y = game.height * 1.5;
        game.add.tween(this.jerry).to( { x: this.jerryPositionx, y: this.jerryPositiony}, 400, Phaser.Easing.Quadratic.Out, true, 250);
    },
    update: function() {
        this.counterTomy += 0.03;
        this.tom.y = this.posTomy + Math.sin(this.counterTomy) * this.tom.height * 0.03;
    },
    onPlay: function(){
        playSound(configGame.soundId.buttonGeneric);
        this.fadeManager = new FadeManager(this);
        this.fadeManager.fadeIn(0.2);
    },
    onFadeInComplete: function(){
        game.state.start(StatesGame.gameplay);
    },
    onFadeOutComplete: function() {
    }
}