CuriousJS.MusicShop.Scene = function(config) {
    var that = new CuriousJS.Scene(config);

    that._init = function(config) {
        this.panableContainer = new createjs.Container();
        this.topContainer = new createjs.Container();
        this.floor = new CuriousJS.MusicShop.Floor(this);
        this.ui = new CuriousJS.MusicShop.UI(this);
        this.activitySign = new CuriousJS.MusicShop.ActivitySign(this);
        this.instruments = new CuriousJS.MusicShop.Instruments(this);
        this.musicStage = new CuriousJS.MusicShop.Stage(this);
        this.characters = new CuriousJS.MusicShop.Characters(this);

        mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.background = new createjs.Bitmap(cm.game.mainQueue.getResult('musicShopBackground'));
        this.background.x = -this.background.image.width + (cm.game.targetWidth / 2);
        this.background.y = -cm.game.targetHeight / 2;

        
        this.activitySign.x = -88;
        this.activitySign.y = 13;

        this.panableContainer.addChild(this.background, this.musicStage, this.instruments, this.activitySign,
            this.characters, this.floor);

        //setup variables
        this.minPanableX = 0;
        this.maxPanableX = this.background.image.width - cm.game.targetWidth;
        this.firstEntrance = true;

        this.addChild(this.panableContainer, this.ui, this.topContainer);
    };

    that.enter = function() {
        if(this.firstEntrance) {
            this.firstEntrance = false;
            this.instruments.doorbell1.mouseOver();
            this.instruments.doorbell2.mouseOver();
            this.instruments.doorbell3.mouseOver();
            this.instruments.doorbell4.mouseOver();
        }
    };

    that.update = function() {
        
    };

    that.exit = function() {

    };

    that._init(config);
    return that;
};

CuriousJS.MusicShop.Floor = function(parent) {
    var that = new createjs.Container();

    that._init = function(parent) {
        this._parent = parent;
        this.name = 'floor';

        this.lowestFloorY = 135;
        this.instrumentDropY = 165;
    };

    that.customAddChild = function(child) {
        this.addChild(child);
        this.sortChildren(this.customSortFunction);
    };

    that.customSortFunction = function(obj1, obj2, options) {
        if(typeof obj1.getBounds != 'undefined' && typeof obj2.getBounds != 'undefined') {
            if(obj1.y + obj1.getBounds().height - obj1.regY > obj2.y + obj2.getBounds().height - obj2.regY) {
                return 1;
            } else if(obj1.y + obj1.getBounds().height - obj1.regY < obj2.y + obj2.getBounds().height - obj2.regY) {
                return -1;
            }
        } else if(obj1.y > obj2.y) {
            return 1;
        } else if(obj1.y < obj2.y) {
            return -1;
        }
        return 0;
    }

    that._init(parent);
    return that;
};

CuriousJS.MusicShop.ActivitySign = function(parent) {
    var that = new createjs.Container();

    that._init = function(parent) {
        this._parent = parent;
        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.sparkleContainer = new createjs.Container();
        this.sprite = new createjs.Sprite(mainSpriteSheet, 'activity-button');
        // this.sprite.hitArea = new createjs.Shape();
        // this.sprite.hitArea.graphics.beginFill('#A9FF8C')
        //     .drawRect(-55, 0, 160, 155);
        this.sprite.cursor = 'pointer';
        this.addChild(this.sparkleContainer, this.sprite);

        this.sparkleSpawnPoint = {x: 26, y: 26};

        this.sprite.on('click', this.signClicked, this);
    };

    that.signClicked = function() {
        createjs.Sound.stop();
        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');
        createjs.Sound.play('activityButtonSound');
        this.sparkleContainer.removeAllChildren();
        this.spawningTween = null;
        this.spawningTween = createjs.Tween.get(this.sparkleContainer, {override: true, loop: true})
            .wait(250).call(this.spawnSparkles, null, this);
    };

    that.spawnSparkles = function() {
        if(this.sparkleContainer.children.length > 100) {
            this.spawningTween.pause(this.spawningTween);
            createjs.Tween.get(this).wait(600).call(this.transitionToActivities, null, this);
        } else {
            for(var i = 0; i < 15; i++) {
                var sparkle = new createjs.Sprite(mainSpriteSheet, 'sparkle');
                sparkle.x = this.sparkleSpawnPoint.x;
                sparkle.y = this.sparkleSpawnPoint.y;
                sparkle.scaleX = 0.5;
                sparkle.scaleY = 0.5;
                sparkle.regX = sparkle.getBounds().width/2;
                sparkle.regY = sparkle.getBounds().height/2;

                var negativeX = Math.random() > 0.5 ? 1 : -1;
                var negativeY = Math.random() > 0.5 ? 1 : -1;
                var randomX = (Math.random() * negativeX * 40) + (20 * negativeX);
                var randomY = (Math.random() * negativeY * 40) + (20 * negativeY);

                createjs.Tween.get(sparkle)
                    .to({x: sparkle.x + randomX * 0.75, y: sparkle.y + randomY * 0.75}, 600)
                    .to({x: sparkle.x + randomX, y: sparkle.y + randomY, alpha: 0, visible: false}, 150);
                this.sparkleContainer.addChild(sparkle);
            }
        }
    };

    that.transitionToActivities = function() {
        cm.game.loadScene('activity');
    };

    that._init(parent);
    return that;
};

