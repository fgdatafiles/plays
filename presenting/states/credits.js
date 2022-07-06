GAME.Credits = function (game) {};

GAME.Credits.prototype = {
    create: function () {
        this.add.image(0, 0, 'BG');


        this.gameScoreLabel = this.game.add.text(
            0, 80, 'Graphics by', {
                font: '38px IrishGrover',
                fill: '#d60000',
                fontWeight: 'bold',
                align: 'center',
                stroke: "#ffffff",
                strokeThickness: 5
            });

        this.gameScoreLabel.update();
        this.gameScoreLabel.x = (game.width / 2) - (this.gameScoreLabel.width / 2) -150;

        this.gameScoreLabel2 = this.game.add.text(
            0, 80, 'Code by', {
                font: '38px IrishGrover',
                fill: '#d60000',
                fontWeight: 'bold',
                align: 'center',
                stroke: "#ffffff",
                strokeThickness: 5
            });

        this.gameScoreLabel2.update();
        this.gameScoreLabel2.x = (game.width / 2) - (this.gameScoreLabel2.width / 2) +150;

        this.graphicsImg = this.game.add.image(0, 0, "creditImg");
        this.graphicsImg.x = game.width / 2 - this.graphicsImg.width / 2 - 140;
        this.graphicsImg.y = this.gameScoreLabel.y + this.gameScoreLabel.height + 200; //game.height-(this.graphicsImg.height+150);
        this.graphicsImg.scale.setTo(0.8, 0.8);
        this.graphicsImg.inputEnabled = true;
        this.graphicsImg.input.useHandCursor = true;
        this.graphicsImg.events.onInputDown.add(function(){
            $("#credit")[0].click();
        }, this);

        this.graphicsImg2 = this.game.add.image(0, 0, "maskot");
        this.graphicsImg2.x = game.width / 2 - this.graphicsImg2.width / 2 + 180;
        this.graphicsImg2.y = this.gameScoreLabel.y + this.gameScoreLabel.height + 200;
        this.graphicsImg2.scale.setTo(0.8, 0.8);
        this.graphicsImg2.inputEnabled = true;
        this.graphicsImg2.input.useHandCursor = true;
        this.graphicsImg2.events.onInputDown.add(function(){
            $("#credit2")[0].click();
        }, this);

        this.menuButton = this.add.button((game.width / 2) - 53, game.height - 150, 'menuBack', this.startMenu, this);

        createSnow();
        ///////////////////////////

    },
    update: function() {
         updateSnow();
     },
    hide: function () {

    },
    startMenu: function () {
        game.state.start('MainMenu');
    }
};

function checkTotalScore() {
    var result = localStorage.getItem("presenting_score");

    if (result === null || result === undefined) {
        localStorage.setItem("presenting_score", 0);
    } else {
        reg.mainScore = JSON.parse(result);
    }
}