var Tutorial = function () {
};
Tutorial.Play = function () {
};

Tutorial.Play.prototype = {
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

        this.titleTutorial = this.add.text(this.game.world.centerX - 40, 20, lang.titleTutorial, {
            font: '40px fred_burger_bold',
            fill: '#cfe73e'
        });

        this.titleTutorial.x = (this.world.width / 2) - (this.titleTutorial.width / 2);

        var posTextX = 216;

        var description = this.add.text(120, 105, lang.tutorialDescription, {
            font: '16px fred_burger_regular',
            fill: '#ffffff'
        });

        description.align = 'center';
        description.x = (this.world.width / 2) - (description.width / 2);

        this.backspaceInit = this.game.add.sprite(this.world.centerX, this.camera.y + 200, 'sprite_space_bar');
        this.backspaceInit.animations.add('sprite_space_bar', null, 3, true);
        this.backspaceInit.play("sprite_space_bar");
        this.backspaceInit.scale.set(0.9);

        this.backspaceInit.x = this.world.centerX - this.backspaceInit.width/2;

        var next = this.add.text(this.world.centerX, this.backspaceInit.y + 170, lang.tutorial1, {
            font: '14px fred_burger_regular',
            fill: '#ffffff'
        });

        next.x = this.world.centerX - (next.width/2);

        this.buttonSpace = this.input.onTap.add(this.goGame, this);

        setTutorial("true");
    },

    goGame: function () {
        this.goGamePlay();
    },

    update: function () {
        this.backgroundStart.width = this.world.width * 2;
        this.backgroundStart.height = this.game.height;

        this.backgroundStart.x += 0.3;

        if (this.backgroundStart.x >= 0) {
            this.backgroundStart.x = -640;
        }

        if (this.buttonSpace.isDown){
            this.goGame();
        }

    },
    goGamePlay: function () {
        goToLevel();
    }
};
