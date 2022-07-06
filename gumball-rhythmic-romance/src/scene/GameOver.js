var GameOver = function () {
};
GameOver.Play = function () {
};

GameOver.Play.prototype = {
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

        this.bar_1 = this.add.tileSprite(-640, 0, this.world.width * 2, 45, "bar_finish");
        this.bar_2 = this.add.tileSprite(0, this.world.height - 45, this.world.width * 2, 45, "bar_finish");

        var imgGumball = this.add.sprite(this.camera.x + 40, this.camera.y + 190, 'gumball_game_over');

        var btnRepeat = this.add.button(this.camera.x + 470, this.camera.y + 380, "btn_repeat");
        var btnMenu = this.add.button(btnRepeat.x + btnRepeat.width + 27, this.camera.y + 380, "btn_menu");

        btnRepeat.anchor.set(0.5);
        btnMenu.anchor.set(0.5);

        btnRepeat.onInputDown.add(this.goGamePlay, this);
        btnMenu.onInputDown.add(this.goHome, this);

        btnRepeat.input.useHandCursor = true;
        btnMenu.input.useHandCursor = true;

        //Textos de botones

        this.textGameOver = this.add.text(this.camera.x + 200, this.camera.y + 85, lang.gameOver, {
            align: 'center',
            font: '45px fred_burger_bold',
            fill: '#ffeebe'
        });

        this.textGameOver.x = ((this.camera.width / 2)) - (this.textGameOver.width / 2);

        this.btnEffect = this.add.button(this.camera.x + 525, this.camera.y + 80, "on_effect");
        this.btnMusic = this.add.button(this.btnEffect.x + this.btnEffect.width + 20, this.btnEffect.y, "on_music");

        this.btnEffect.anchor.set(0.5);
        this.btnMusic.anchor.set(0.5);

        this.btnEffect.input.useHandCursor = true;
        this.btnMusic.input.useHandCursor = true;

        if (getEffect() == "true") {
            this.btnEffect.loadTexture("on_effect");
        } else {
            this.btnEffect.loadTexture("off_effect");
        }

        if (getVolume() == "true") {
            this.btnMusic.loadTexture("on_music");
        } else {
            this.btnMusic.loadTexture("off_music");
        }

        this.btnEffect.onInputDown.add(function () {

            if (getEffect() == "true") {
                soundButtonPlay();
                this.btnEffect.loadTexture("off_effect");
                setEffect("false");

            } else {
                this.btnEffect.loadTexture("on_effect");
                setEffect("true");
            }

        }, this);

        this.btnMusic.onInputDown.add(function () {
            soundButtonPlay();
            if (getVolume() == "true") {
                this.btnMusic.loadTexture("off_music");
                setVolume("false");
            } else {
                this.btnMusic.loadTexture("on_music");
                setVolume("true");
            }
        }, this);

        this.buttonSpace = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function () {
        this.backgroundStart.width = this.world.width * 2;
        this.backgroundStart.height = this.game.height;

        this.backgroundStart.x += 0.3;

        if (this.backgroundStart.x >= 0) {
            this.backgroundStart.x = -640;
        }

        this.bar_1.width = this.world.width * 2;
        this.bar_2.width = this.world.width * 2;

        this.bar_1.x += 2;
        this.bar_2.x -= 2;

        if (this.bar_1.x >= 0) {
            this.bar_1.x = -640;
        }

        if (this.bar_2.x <= -640) {
            this.bar_2.x = 0;
        }

        if (this.buttonSpace.isDown) {
            this.goGamePlay();
        }

    },
    goGamePlay: function () {
        soundButtonPlay();
        if (!game.state.checkState("GamePlay")) {
            game.state.add('GamePlay', GamePlay.Play, true);
        } else {
            game.state.start('GamePlay');
        }
    },
    goHome: function () {
        soundButtonPlay();
        if (!game.state.checkState("Home")) {
            game.state.add('Home', Home.Play, true);
        } else {
            game.state.start('Home');
        }
    }
};
