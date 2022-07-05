State_PreloadAssets = {
    init: function() {
        this.abs = new AbstractStatePreloadAssets(this);
        this.abs.init();
    },
    preload: function() {
        this.abs.createLoaderBar(config.spr_backgroundLoader, config.spr_loaderBar);
        J2DM_AddSprite(config.spr_logoBoomerang);
        this.abs.preload(configGame.getPreloadAssets());
    },
    create: function() {        
        this.abs.create();
    },
    update: function() {
        this.abs.update();
    },
    goToNextState: function() {
        game.state.start(StatesGame.splash);
    },
}