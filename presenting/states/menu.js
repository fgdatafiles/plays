GAME.Menu = function (game) {

};

GAME.Menu.prototype = {
    create: function () {
        this.add.image(0, 0, 'menuBG');
        checkTotalScore();
        this.startButton = this.add.button((game.width / 2) - 112 / 2, (game.height / 2 - 110 / 2)+50, 'buttons', this.startGame, this, "play_snow", "play_snow", "small_pr_play_snowed", "play_snow");

        this.soundButton = this.add.button(this.startButton.x - 180, this.startButton.y + this.startButton.height, 'buttons', this.toggleSound, this, "sound", "sound", "small_pr_sound", "sound");
        this.nosoundButton = this.add.button(this.startButton.x - 180, this.startButton.y + this.startButton.height, 'buttons', this.toggleSound, this, "no_sound", "no_sound", "small_pr_no_sound", "no_sound");
        this.nosoundButton.alpha = 0;

        this.scoresButton = this.add.button(this.startButton.x + this.startButton.width + 60, this.soundButton.y, 'buttons', this.startScores, this, 'score', 'score', 'small_pr_score', 'score');

        this.fbButton = this.add.button(this.startButton.x - 700, this.startButton.y - this.startButton.height, 'buttons', this.shareFacebook, this, 'fb', 'fb', 'small_pr_fb', 'fb');

        this.twitterButton = this.add.button(this.startButton.x + this.startButton.width + 700, this.fbButton.y, 'buttons', this.shareTwitter, this, 'twitter', 'twitter', 'small_pr_twitter', 'twitter');

        //this.creditsButton = this.add.button(game.width / 2 - 700 / 2, this.startButton.y + this.startButton.height + 700, "creditButton", this.startCredits, this);

        // sound manager
        if(reg.song === undefined){
            reg.song = game.add.audio('song');
            reg.song.repeat = true;
            reg.song.volume = 0.3;
        }

        if(reg.ding === undefined){
            reg.ding = game.add.audio('ding');
            reg.ding.volume = 0.5;
        }

        if (reg.sound === true && reg.song.isPlaying === false) {
            reg.song.play();
        }

        if(reg.sound === false) {
            this.soundButton.alpha = 0;
            this.nosoundButton.alpha = 1;
        }
    },
    startGame: function () {
        game.state.start('Game');
    },
    startScores: function () {
        game.state.start('Scores');
    },
    toggleSound: function () {
        reg.sound = (reg.sound === true) ? false : true;

        if (reg.sound === false) {
            this.soundButton.alpha = 0;
            this.nosoundButton.alpha = 1;
            reg.song.stop();
        } else {
            this.nosoundButton.alpha = 0;
            this.soundButton.alpha = 1;
            reg.song.play();
        }
    },
    startScores: function () {
        game.state.start('Scores');
    },
    startCredits: function () {
        //game.state.start("Credits");
    },
    shareTwitter: function () {
        var sharerURL = "http://twitter.com/intent/tweet?text=" + encodeURIComponent("I captured " + reg.mainScore + " presents on ELF HELP can you beat my score?");
        window.open(
            sharerURL,
            'Twitter',
            'width=626,height=436');
    },
    shareFacebook: function () {

        FB.ui({
            display: 'dialog',
            method: "feed",
            link: "",
            /*caption: title,*/
            description: "I captured " + reg.mainScore + " presents on ELF HELP - can you beat my score?",
            picture: "assets/promo.png",
            size: {width:640,height:480}, width:640, height:480
            /*caption: "I captured " + reg.mainScore + " presents on Present...ing! can you beat my score? http://presenting.surge.sh/",*/
        }, function (response) {

        });
    }
};