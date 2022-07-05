State_Tutorial = {
    init: function() {
        SettingsGame.level = 0;
    },
    preload: function() {

    },
    create: function() {        
        this.bg = J2DM_AddSprite(config.spr_background);
        SettingsGame.backgroundId = game.rnd.between(1, 3);
        this.bg.loadTexture("background_" + SettingsGame.backgroundId ); 
        
        this.popUpTutorial = new PopUpTutorial(this);
        this.popUpTutorial.show();
        
        this.startGame();
    },
    startGame: function(){

    },
    startLevel: function(){

    },
    update: function() {

    },
    levelComplete:function(){

    },
    render: function(){
        //game.debug.box2dWorld();
    }
}