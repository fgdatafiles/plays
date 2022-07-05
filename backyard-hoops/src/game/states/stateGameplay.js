State_Gameplay = {
    init: function() {
        SettingsGame.level = 0;
    },
    preload: function() {

    },
    create: function() {        
        this.bg = J2DM_AddSprite(config.spr_background);
        SettingsGame.backgroundId = game.rnd.between(1, 3);
        this.bg.loadTexture("background_" + SettingsGame.backgroundId ); 

        this.gameplayManager = new GamePlayManager(this);
        this.gameplayManager.initialize();

        if(!SettingsGame.tutorialShown){
            SettingsGame.tutorialShown = true;
            this.popUpTutorial = new PopUpTutorial(this);
            this.popUpTutorial.show();
        }else{
            this.startGame();
        }

        this.fadeManager = new FadeManager(this);
        this.fadeManager.fadeOut(0.45);
    },
    onPlay:function() {
        stopMusic(configGame.soundId.cover);
        this.startGame();
    },
    startGame: function() {
        this.gameplayManager.startGame();
    },
    onFadeOutComplete: function() {
    },
    update: function() {
        if(this.gameplayManager!=null){
            this.gameplayManager.update();
        }
    },
    render: function(){
        //game.debug.box2dWorld();
    }
}