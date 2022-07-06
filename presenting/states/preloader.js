GAME.Preloader = function (game) {};
GAME.Preloader.prototype = {
    preload: function () {
        this.game.stage.backgroundColor = '#16181a';

        // Add the progress bar
        this.loadBase = this.add.image(0, 0, 'loadingBG');
        this.preloadBar = this.add.sprite(0, game.height/2 - (73 / 2), 'loading');
        this.preloadBar.x = 0;
        this.preloadBar.y = game.world.centerY - (30 / 2) + 18;
        game.load.setPreloadSprite(this.preloadBar, 0);

        // FONTS
        this.game.load.bitmapFont('redFont', 'styles/fonts/font.png', 'styles/fonts/font.fnt');

        // UI

        // EFFECTS
        game.load.spritesheet('snowflakes', 'assets/snowflakes.png', 17, 17);
        game.load.spritesheet('snowflakes_large', 'assets/snowflakes_large.png', 64, 64);
        this.load.atlasJSONHash("explosion", "assets/explode/explosion_smoke.png", "assets/atlas/explosion_smoke.json");

        // MENU //

        this.load.atlasJSONHash("buttons", "assets/buttons/buttons.png", "assets/atlas/buttons.json");
        this.game.load.image("menuBack", "assets/buttons/menuBack.png");
        this.game.load.image("cancel", "assets/buttons/cancel.png");

        // BACKGROUNDS
        this.game.load.image("BG", "assets/bg.png");
        this.game.load.image("menuBG", "assets/menuBG.png");

        // Presents & elves //
        this.game.load.image("elfCenter", "assets/elfCenter.png");
        this.game.load.image("elfLeft", "assets/elfLeft.png");
        this.game.load.image("elfRight", "assets/elfRight.png");

        this.game.load.image("present1", "assets/present1.png");
        this.game.load.image("present2", "assets/present2.png");
        this.game.load.image("present3", "assets/present3.png");
        this.game.load.image("present4", "assets/present4.png");
        this.game.load.image("present5", "assets/present5.png");
        this.game.load.image("present6", "assets/present6.png");
        this.game.load.image("present7", "assets/present7.png");
        this.game.load.image("present8", "assets/present8.png");
        this.game.load.image("present9", "assets/present9.png");
        this.game.load.image("present10", "assets/present10.png");
        this.game.load.image("present11", "assets/present11.png");


        this.load.audio('ding', ['assets/sounds/ding.mp3']);
        this.load.audio('song', ['assets/sounds/song.mp3']);
        this.load.audio('gameover', ['assets/sounds/gameover.mp3']);

    },
    create: function () {
        getLocalSave();
        getLocalSaveScore();
        this.game.state.start('MainMenu');
    }
};

function getLocalSave() {

    var result = localStorage.getItem("template");

    if(result === null || result === undefined) {
        localStorage.setItem("template", JSON.stringify(reg.levelEditor));
    }
    else {
        //reg.levelEditor = JSON.parse(result);
    }
}

function getLocalSaveScore() {
    var result = localStorage.getItem("template_score");

    if(result === null || result === undefined) {
        localStorage.setItem("template_score", 0);
    }
    else {
        reg.mainScore = JSON.parse(result);
    }
}