var GameLevel = function () {
};
GameLevel.Play = function () {
};

GameLevel.Play.prototype = {
    preload: function () {
    },

    create: function () {

        this.world.setBounds(0, 0, 640, 480);
        this.add.tileSprite(0, 0, this.world.width, this.world.height, 'background_home');

        this.backgroundStart = this.add.tileSprite(-640, 0, this.world.width * 2, this.world.height, 'background_start');
        this.backgroundStart.alpha = 0.3;

        this.physics.startSystem(Phaser.Physics.ARCADE);

        // Scale
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = this.game.width;
        this.scale.maxHeight = this.game.height;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);

        this.titleLevel = this.add.text(this.game.world.width /2, 80, lang.level, {
            font: '45px fred_burger_bold',
            fill: '#cfe73e'
        });

        this.titleLevel.anchor.set(0.5);

        this.box = this.add.sprite(this.world.centerX, 255, "box_level");
        this.box.anchor.set(0.5);

        this.btnLvlOne = this.game.add.button(150, 210, "btn_level1");
        this.btnLvlTwo = this.game.add.button(this.btnLvlOne.x + 110, 210, "btn_level2");
        this.btnLvlThree = this.game.add.button(this.btnLvlTwo.x + 222, 210, "btn_level3");

        this.btnLvlFour = this.game.add.button(230, 350, "btn_level4");
        this.btnLvlFive = this.game.add.button(400, 350, "btn_level5");

        this.btnLvlOne.anchor.set(0.5);
        this.btnLvlTwo.anchor.set(0.5);
        this.btnLvlThree.anchor.set(0.5);
        this.btnLvlFour.anchor.set(0.5);
        this.btnLvlFive.anchor.set(0.5);

        this.btnLvlTwo.x = this.game.width/2;

        var textLvlOne = game.add.text(this.btnLvlOne.x, this.btnLvlOne.y + 5, "1", {
            align: 'center',
            font: '45px fred_burger_bold',
            fill: '#FFFFFF'
        });

        var textLvlTwo = game.add.text(this.btnLvlTwo.x, this.btnLvlTwo.y + 5, "2", {
            align: 'center',
            font: '45px fred_burger_bold',
            fill: '#FFFFFF'
        });

        var textLvlThree = game.add.text(this.btnLvlThree.x, this.btnLvlThree.y + 5, "3", {
            align: 'center',
            font: '45px fred_burger_bold',
            fill: '#FFFFFF'
        });

        var textLvlFour = game.add.text(this.btnLvlFour.x, this.btnLvlFour.y + 5, "4", {
            align: 'center',
            font: '45px fred_burger_bold',
            fill: '#FFFFFF'
        });

        var textLvlFive = game.add.text(this.btnLvlFive.x, this.btnLvlFive.y + 5, "5", {
            align: 'center',
            font: '45px fred_burger_bold',
            fill: '#FFFFFF'
        });

        textLvlOne.anchor.set(0.5);
        textLvlTwo.anchor.set(0.5);
        textLvlThree.anchor.set(0.5);
        textLvlFour.anchor.set(0.5);
        textLvlFive.anchor.set(0.5);

        this.btnLvlOne.onInputDown.add(function () {
            this.goToLevel(0);
        }, this);

        this.btnLvlTwo.onInputDown.add(function () {
            if (getLevel2Active() == "true") {
                this.goToLevel(1);
            }
        }, this);

        this.btnLvlThree.onInputDown.add(function () {
            if (getLevel3Active() == "true") {
                this.goToLevel(2);
            }
        }, this);

        this.btnLvlFour.onInputDown.add(function () {
            if (getLevel4Active() == "true") {
                this.goToLevel(3);
            }
        }, this);

        this.btnLvlFive.onInputDown.add(function () {
            if (getLevel5Active() == "true") {
                this.goToLevel(4);
            }
        }, this);

        if (getLevel2Active() == "false") {
            this.btnLvlTwo.loadTexture('btn_level_block');
        }
        if (getLevel3Active() == "false") {
            this.btnLvlThree.loadTexture('btn_level_block');
        }

        if (getLevel4Active() == "false") {
            this.btnLvlFour.loadTexture('btn_level_block');
        }

        if (getLevel5Active() == "false") {
            this.btnLvlFive.loadTexture('btn_level_block');
        }

        this.btnLvlOne.input.useHandCursor = true;
        this.btnLvlTwo.input.useHandCursor = true;
        this.btnLvlThree.input.useHandCursor = true;
        this.btnLvlFour.input.useHandCursor = true;
        this.btnLvlFive.input.useHandCursor = true;

        //Textos de botones

    },

    update: function () {
        this.backgroundStart.width = this.world.width * 2;
        this.backgroundStart.height = this.game.height;

        this.backgroundStart.x += 0.3;

        if (this.backgroundStart.x >= 0) {
            this.backgroundStart.x = -640;
        }
    },
    goToLevel: function (level) {
        console.log("level : " + level);
        soundButtonPlay();
        setLevel(level);
        if (!game.state.checkState("GamePlay")) {
            game.state.add('GamePlay', GamePlay.Play, true);
        } else {
            game.state.start('GamePlay');
        }
    }
};
