State_PreloadLoader = {
    init: function() {
        this.abs = new AbstractStatePreloadAssets(this);
        this.abs.init();
    },
    preload: function() {
        this.abs.preload(configGame.getLoadingAssets());
    },
    create: function() {    
        game.state.start(StatesGame.preloadAssets);
    },
    update: function() {
        this.abs.update();
    }
}