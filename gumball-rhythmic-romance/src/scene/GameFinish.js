var GameFinish = function () {
};
GameFinish.Play = function () {
};

GameFinish.Play.prototype = {
    preload: function () {
    },

    create: function () {

        this.world.setBounds(0, 0, 640, 480);

        this.add.tileSprite(0, 0, this.world.width, this.world.height, 'background_home');
        this.physics.startSystem(Phaser.Physics.ARCADE);

        var emitterEnd = game.add.emitter(this.camera.x + this.camera.width / 2, this.camera.y + this.camera.height / 2, 500);

        emitterEnd.setXSpeed(-500, 500);
        emitterEnd.setYSpeed(-500, 500);
        emitterEnd.makeParticles('particle_start');
        emitterEnd.setScale(1.5, 0.8, 1.5, 0.8, 2000);
        emitterEnd.gravity = 0;

        // explode, lifespan, frequency, quantity
        emitterEnd.start(false, 2000, 5);

        // Scale
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = this.game.width;
        this.scale.maxHeight = this.game.height;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);


        var btnMenu = this.add.button(this.camera.x + (this.camera.width - 60), this.camera.y + 380, "btn_menu");

        if (getLevel() < getNumLevel() - 1) {
            var btnNext = this.add.button(this.world.centerX, this.world.centerY, "play");
            btnNext.anchor.set(0.5);

            btnNext.onInputDown.add(function () {
                setLevel(parseInt(getLevel()) + 1);
                this.goGamePlay();
            }, this);
        }


        btnMenu.scale.set(0.7);
        btnMenu.anchor.set(0.5);

        btnMenu.onInputDown.add(this.goHome, this);

        btnMenu.input.useHandCursor = true;

        this.bar_1 = this.add.tileSprite(-640, 0, this.world.width * 2, 45, "bar_finish");
        this.bar_2 = this.add.tileSprite(0, this.world.height - 45, this.world.width * 2, 45, "bar_finish");

        //Textos de botones

        this.starFinsh = this.add.image(this.world.centerX, this.camera.y + 80, "start_finish");
        this.starFinsh.anchor.set(0.5);

        this.textGameOver = this.add.text(this.camera.x + 10, this.camera.y + 50, lang.level_up, {
            align: 'center',
            font: '45px fred_burger_bold',
            fill: '#ffeebe'
        });

        this.textGameOver.x = ((this.camera.width / 2)) - (this.textGameOver.width / 2);

        this.textLevel = this.add.text(this.camera.x + 200, this.camera.y + 80, "Lvl one", {
            align: 'center',
            font: '30px fred_burger_bold',
            fill: '#a3df44'
        });

        this.textLevel.alpha = 0;

        this.imageGumball = this.add.image(this.world.centerX + 20, this.textLevel.y + 150, "gumball_game_finish");
        this.imageGumball.anchor.set(0.5);

        this.animationEnd();

    },

    update: function () {

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

    },
    animationEnd: function () {

        var tw = game.add.tween(this.imageGumball);
        var that = this;

        tw.to({y: 250}, 1500, Phaser.Easing.Linear.Out);
        tw.onComplete.add(function () {

            var x = this.add.tween(this.imageGumball).to({
                y: this.textLevel.y + 150
            }, 1000, Phaser.Easing.Linear.Out, true);

            x.onComplete.add(function () {
                that.animationEnd();
            })


        }, this);
        tw.start();

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
        setLevel(0);
        if (!game.state.checkState("Home")) {
            game.state.add('Home', Home.Play, true);
        } else {
            game.state.start('Home');
        }
    }
};
