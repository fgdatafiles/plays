var Main = function () {
};
Main.Play = function () {
};
Main.Play.prototype = {
    preload: function () {
        this.load.image('splash', 'assets/images/background/splash_preload.jpg');
        this.load.spritesheet("sprite_loading", "assets/images/sprites/sprite_loading.png", 1426, 486);

        if(lang.id == "es"){
            this.load.image('loading_text', 'assets/text_loading_es.png');
        }else if(lang.id == "en"){
            this.load.image('loading_text', 'assets/text_loading.png');
        }else{
            this.load.image('loading_text', 'assets/text_loading_pt.png');
        }
    },

    create: function () {
        this.add.tileSprite(0, 0, this.world.width, this.world.height, 'splash');

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = this.game.width;
        this.scale.maxHeight = this.game.height;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);

        this.loadingText = this.add.image(this.world.centerX, this.world.height - 60, "loading_text");
        this.loadingText.anchor.set(0.5);

         var loadingTex2t = this.add.text(this.world.centerX, game.world.centerY + 170, lang.loading, {
            font: '35px fred_burger_bold',
            fill: '#fffae4'
        });

        loadingTex2t.alpha = 0;

        GamePlay.Play.prototype.setGameFinish("true");

        this.loaderBar = this.add.sprite(this.world.centerX - ((1426 / 2) * 0.36), this.world.centerY + 20, "sprite_loading");
        this.loaderBar.scale.set(0.35);
        this.loaderBar.animations.add("loading", null, 5, true);
        this.loaderBar.animations.play("loading");

        this.load.onLoadStart.add(this.loadStart, this);
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);

        this.start();
    },

    loadStart: function () {
    },
    start: function () {
        // Load Assets in Assets.js//
        for (var i = 0; i < assets.length; i++) {
            if (i > 4 && i < 12) {
                this.load.spritesheet(assets[i].name, assets[i].resource, 82, 88);
            } else {
                this.load.image(assets[i].name, assets[i].resource);
            }
        }

        this.camera.x = 0;
        this.camera.y = 0;

        this.load.spritesheet("penny_center", "assets/images/player/penny_center.png", 69, 100);
        this.load.spritesheet("penny_rotation", "assets/images/player/penny_rotation.png", 100, 100);
        this.load.spritesheet("gumball_rotation", "assets/images/player/gumball_rotation.png", 80, 80);
        this.load.spritesheet("gumball_center", "assets/images/player/gumball_center.png", 80, 80);
        this.load.spritesheet("floor_blue_down", "assets/images/platform/box_blue_down.jpg", 82, 86);
        this.load.spritesheet("sprite_feet", "assets/images/sprites/sprite_feet.png", 80, 80);
        this.load.spritesheet("sprite_level_up", "assets/images/sprites/sprite_level_up.png", 400, 516);
        this.load.image("gumball_gameover", "assets/images/player/gumball_gameover.png");
        this.load.image("penny_gameover", "assets/images/player/penny_gameover.png");
        this.load.spritesheet("sprite_background", "assets/images/background/background.jpg", 537, 960);
        this.load.spritesheet("sprite_space_bar", "assets/images/sprites/sprite_space_bar.png", 200, 200);

        this.load.start();
    },

    fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
    },

    loadComplete: function () {
        this.time.events.add(Phaser.Timer.SECOND * 2, this.startMain, this); // this.startMain();
    },

    startMain: function () {
        goToHome();
    },
    update: function () {
    }
};