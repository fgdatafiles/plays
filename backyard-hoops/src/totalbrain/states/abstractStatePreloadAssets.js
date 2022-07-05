AbstractStatePreloadAssets = function(parent){
    this.parent = parent;
}

AbstractStatePreloadAssets.prototype.init = function(){
    //Set Scale Settings for the game
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.stage.backgroundColor = "#" + configGame.colors.bgColor;
}

AbstractStatePreloadAssets.prototype.createLoaderBar = function(bgLoaderAsset, loaderAsset){
    if(bgLoaderAsset!=null){
        this.bgLoader = J2DM_AddSprite(bgLoaderAsset);
    }
    J2DM_AddSprite(config.spr_loaderBarContainer);
    //Create loader
    this.loaderBar = J2DM_AddSprite(loaderAsset);
    //Copy scaled loader to a new sprite with scale 1
    var bmd = game.make.bitmapData(this.loaderBar.width, this.loaderBar.height);
    bmd.copy(loaderAsset.nameAsset, 0, 0, this.loaderBar.texture.width, this.loaderBar.texture.height, 0, 0, this.loaderBar.width, this.loaderBar.height);
    //We add the new image to the stage and put it in the same coordinates of the original one
    this.sprbmd = game.add.sprite(this.loaderBar.x, this.loaderBar.y, bmd);
    this.sprbmd.x -= this.sprbmd.width/2;

    this.loaderBar.destroy();
    game.load.setPreloadSprite(this.sprbmd);
}

AbstractStatePreloadAssets.prototype.preload = function(preloadAssets){
    for(var i=0; i<preloadAssets.length; i++){
        var assetData = preloadAssets[i];
        switch(assetData.type){
            case 'image':
                game.load.image(assetData.nameAsset, assetData.path);
                break;
            case 'audio':
                game.load.audio(assetData.nameAsset, assetData.path);
                break;
            case 'spritesheet':
                game.load.spritesheet(assetData.nameAsset, assetData.path, assetData.width, assetData.height, assetData.amount);
                break;
            case 'bitmapFont':
                game.load.bitmapFont(assetData.nameAsset, assetData.path, assetData.pathFnt);
                break;
            case 'atlas':
                game.load.atlasJSONArray(assetData.nameAsset, assetData.path, assetData.jsonPath);
                break;
            case 'json':
                game.load.json(assetData.nameAsset, assetData.path);
                break;
        }
    }
}

AbstractStatePreloadAssets.prototype.create = function(){
    var preloadAssets = configGame.getPreloadAssets();
    for(var i=0; i<preloadAssets.length; i++){
        var assetData = preloadAssets[i];
        switch(assetData.type){
            case 'audio':
                soundList[assetData.nameAsset] = game.add.audio(assetData.nameAsset);
                break;
        }
    }

    this.checkFonts();
}

AbstractStatePreloadAssets.prototype.update = function(){
}

AbstractStatePreloadAssets.prototype.checkFonts = function(){
    this.fontsToLoad = configGame.preloadFonts;
    this.indexFont = 0;

    this.preloadFonts();
}

AbstractStatePreloadAssets.prototype.preloadFonts = function(){
    if(this.indexFont<this.fontsToLoad.length){
        var font = new FontFaceObserver(this.fontsToLoad[this.indexFont]);
        var self = this;
        font.load(null, 30000).then(function () {
            self.indexFont++;
            self.preloadFonts();
        }, function () {
            console.log('Error loading font');
        });
    }else{
        this.finishPreloadFonts();
    }
}

AbstractStatePreloadAssets.prototype.finishPreloadFonts = function(){
    this.parent.goToNextState();
}