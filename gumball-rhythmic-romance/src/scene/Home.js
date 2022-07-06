var Home = function () {
};
Home.Play = function () {
};
Home.Play.prototype = {
    preload: function () {

        this.sound_button_play = new Audio();
        this.sound_button = new Audio();
        this.sound_button_play.src = "sound/button_play.mp3";
        this.sound_button.src = "sound/button.mp3";

        this.sound_button_play.preload = "auto";
        this.sound_button.preload = "auto";
    },

    create: function () {

        this.camera.x = 0;
        this.camera.y = 0;

        this.world.setBounds(this.camera.x, this.camera.y, 640, 480);
        this.add.tileSprite(0, 0, this.world.width, this.world.height, 'background_home');

        this.backgroundStart = this.add.tileSprite(-640, 0, this.world.width * 2, this.world.height, 'background_start');
        this.backgroundStart.alpha = 0.3;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = this.game.width;
        this.scale.maxHeight = this.game.height;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);

        this.rainbow = this.add.sprite(this.world.centerX, this.world.centerY, 'rainbow');
        this.rainbow.anchor.set(0.5);

        this.logo = this.add.sprite(this.world.centerX + 10, this.world.centerY + 65, 'logo');
        this.logo.anchor.set(0.5);

        if (lang.id == "es") {
            this.title = this.add.sprite(this.world.centerX, this.world.centerY + 65, 'title');
        } else if (lang.id == "pt") {
            this.title = this.add.sprite(this.world.centerX, this.world.centerY + 65, 'title_pt');
        } else {
            this.title = this.add.sprite(this.world.centerX, this.world.centerY + 65, 'title_en');
            this.rainbow.y = this.rainbow.y - 63;
            this.logo.y = this.logo.y - 35;
        }

        this.title.anchor.set(0.5);
        this.title.scale.set(0.2);
        this.title.alpha = 0;

        this.rainbow.scale.set(0);
        this.rainbow.alpha = 0;

        this.game.add.tween(this.logo).to({
            y: this.world.centerY - 40
        }, 600, Phaser.Easing.Back.Out, true);

        this.tweenTitle = this.game.add.tween(this.title.scale).to({
            x: 1,
            y: 1
        }, 1500, Phaser.Easing.Bounce.Out, true);

        this.game.add.tween(this.title).to({
            alpha: 1
        }, 1500, Phaser.Easing.Bounce.Out, true);


        var rainbowTween = this.game.add.tween(this.rainbow).to({
            alpha: 1
        }, 1000, Phaser.Easing.Bounce.Out, true);

        rainbowTween.onComplete.add(function () {
            this.game.add.tween(this.rainbow.scale).to({
                x: 1,
                y: 1
            }, 600, Phaser.Easing.Linear.Out, true);
        }, this);

        this.tweenTitle.onComplete.add(function () {
            this.createButtons();
        }, this);


        GamePlay.Play.prototype.setGameFinish("true");
        this.startSound();
    },

    createButtons: function () {

        this.btnStart = this.add.button(this.world.centerX, this.world.height - 80, 'play');
        this.btnStart.anchor.set(0.5);
        this.btnStart.onInputDown.add(this.goGamePlay, this);
        this.btnStart.input.useHandCursor = true;

        this.textButtonPlay = game.add.text(this.btnStart.x - 10, 400, lang.play, {
            font: "20px fred_burger_bold",
            fill: "#ffffff",
            align: "center"
        });

        this.textButtonPlay.anchor.set(0.5);

        this.animateButtonStart();

        this.button_sound = this.add.button(this.camera.x + this.game.width - 10, this.camera.y + 40, "on_music");
        this.button_effect = this.add.button(this.button_sound - 60, this.button_sound.y, "on_effect");

        this.button_sound.x = (this.camera.x + this.camera.width) - (this.button_sound.width + 10);
        this.button_effect.x = (this.button_sound.x - this.button_effect.width) - 30;

        this.button_effect.anchor.set(0.5);
        this.button_sound.anchor.set(0.5);

        if (getEffect() == "true") {
            this.button_effect.loadTexture("on_effect");
        } else {
            this.button_effect.loadTexture("off_effect");
        }

        if (getVolume() == "true") {
            this.button_sound.loadTexture("on_music");
        } else {
            this.button_sound.loadTexture("off_music");
        }

        this.button_sound.onInputDown.add(this.soundPlay, this);
        this.button_effect.onInputDown.add(this.effectPlay, this);

        this.button_sound.input.useHandCursor = true;
        this.button_effect.input.useHandCursor = true;
    },

    animateButtonStart: function () {
        var tween = game.add.tween(this.btnStart.scale).to({x: 1, y: 1}, 180, Phaser.Easing.Back.In, true);

        var tweenText = game.add.tween(this.textButtonPlay.scale).to({x: 1, y: 1}, 180, "Linear", true);

        tweenText.onComplete.add(function () {
            var tweenComplete = game.add.tween(this.textButtonPlay.scale).to({
                x: 0.9,
                y: 0.9
            }, 180, Phaser.Easing.Back.Out, true);
        }, this);

        tween.onComplete.add(function () {
            var tweenComplete = game.add.tween(this.btnStart.scale).to({
                x: 0.9,
                y: 0.9
            }, 180, Phaser.Easing.Back.Out, true);

            tweenComplete.onComplete.add(function () {
                this.animateButtonStart();
            }, this);
        }, this);
    },
    startSound: function () {
        if (getEffect() == "true") {
            this.sound_button.volume = 1;
            this.sound_button_play.volume = 1;
            setEffect("true");
        }

    },
    update: function () {
        this.backgroundStart.width = this.world.width * 2;
        this.backgroundStart.height = this.game.height;

        this.backgroundStart.x += 0.3;

        if (this.backgroundStart.x >= 0) {
            this.backgroundStart.x = -640;
        }
    },

    goGamePlay: function () {
        this.soundButtonStart();

        if (getTutorial() == "false") {
            goToTutorial();
        } else {
            //Select Level tutorial
            goToLevel();
        }
    },

    soundPlay: function () {
        this.soundButton();
        if (getVolume() == "true") {
            this.button_sound.loadTexture("off_music");
            setVolume("false");
        } else {
            this.button_sound.loadTexture("on_music");
            setVolume("true");
        }
    },

    effectPlay: function () {
        this.soundButton();
        if (this.sound_button_play != null && this.sound_button != null) {
            if (getEffect() == "true") {
                this.button_effect.loadTexture("off_effect");
                this.sound_button_play.volume = 0;
                this.sound_button.volume = 0;
                setEffect("false");
            } else {
                this.button_effect.loadTexture("on_effect");
                this.sound_button_play.volume = 1;
                this.sound_button.volume = 1;
                setEffect("true");
            }
        }

    },
    soundButtonStart: function () {
        if (getEffect() == "true") {
            if (this.sound_button_play != null) {
                this.sound_button_play.play();
                this.sound_button_play.volume = 1;
            }
        }
    },
    soundButton: function () {
        if (getEffect() == "true") {
            if (this.sound_button != null) {
                this.sound_button.play();
                this.sound_button.volume = 1;
            }
        }
    }
};


