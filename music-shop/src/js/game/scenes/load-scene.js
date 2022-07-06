CuriousJS.LoadScene = function(config) {
    var that = new CuriousJS.Scene(config);

    that._init = function(config) {
        var background = new createjs.Shape();
        background.graphics.beginFill('#fff48b').drawRect(-cm.game.targetWidth / 2, -cm.game.targetHeight / 2,
            cm.game.targetWidth, cm.game.targetHeight);

        var loadTrolly = new createjs.Sprite(cm.game.initialQueue.getResult('loadTrolly'));
        loadTrolly.x = (-cm.game.targetWidth / 2) - 30;
        loadTrolly.y = (-cm.game.targetHeight / 2) + 40;
        loadTrolly.gotoAndPlay("bounce");

        if(cm.game.mainQueue.progress == 1) {
            this.transitionToTitle();
        } else {
            this.manifestListener = cm.game.on('mainManifestLoaded', this.transitionToTitle, this);
        }

        this.addChild(background, loadTrolly);
    };

    that.update = function() {

    };

    that.exit = function() {

    };

    that.transitionToTitle = function() {
        //create scenes now that assets are loaded
        title = new CuriousJS.TitleScene({name:'title'});
        cm.game.addScene(title);
        musicShop = new CuriousJS.MusicShop.Scene({name:'musicShop'});
        cm.game.addScene(musicShop);
        activity = new CuriousJS.Activity.Scene({name:'activity'});
        cm.game.addScene(activity);
        //load title
        cm.game.loadScene('title');
    };

    that._init(config);
    return that;
};