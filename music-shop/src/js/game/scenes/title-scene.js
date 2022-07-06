CuriousJS.TitleScene = function(config) {
    var that = new CuriousJS.Scene(config);

    that._init = function(config) {
        createjs.Sound.play('titleAudio');
        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');
        var background = new createjs.Bitmap(cm.game.mainQueue.getResult('title'));
        background.x = (-cm.game.targetWidth/2);
        background.y = (-cm.game.targetHeight/2);
        this.playButton = new createjs.Sprite(mainSpriteSheet, 'ui/play');
        this.playButton.cursor = "pointer";
        this.playButton.regX = 98.5;
        this.playButton.regY = 45;
        this.playButton.x = 0;
        this.playButton.y = 190;

        this.playButton.on('mousedown', this.playButtonMouseDown, this);
        if(!CuriousJS.Game.IsMobile.any()) {
            this.playButton.on('mouseover', this.playButtonMouseOver, this);
            this.playButton.on('mouseout', this.playButtonMouseOut, this);
        }

        this.addChild(background, this.playButton);
    };

    that.update = function() {
        
    };

    that.exit = function() {

    };

    that.playButtonMouseDown = function() {
        createjs.Sound.stop();
        this.playButton.removeAllEventListeners();
        createjs.Sound.stop();
        createjs.Sound.play('playButtonSound');
        createjs.Tween.get(this.playButton, {override: true})
            .to({scaleX: 0.9, scaleY: 0.9}, 100)
            .to({scaleX: 1.1, scaleY: 1.1}, 100)
            .to({scaleX: 1, scaleY: 1}, 100)
            .call(this.loadMusicShop, null, this);
    };

    that.playButtonMouseOver = function() {
        createjs.Tween.get(this.playButton, {override: true})
            .to({scaleX: 1.1, scaleY: 1.1}, 100);
    };

    that.playButtonMouseOut = function() {
        createjs.Tween.get(this.playButton, {override: true})
            .to({scaleX: 1, scaleY: 1}, 100);
    };

    that.loadMusicShop = function() {
        cm.game.loadScene('musicShop');
    };

    that._init(config);
    return that;
};