GAME.Scores = function (game) {};

GAME.Scores.prototype = {
    create: function () {
        this.add.image(0, 0, 'BG');

        checkTotalScore();

        var gameScoreLabel = this.game.add.text(
            0, 80, 'Best Score Achieved ', {
                font: '56px IrishGrover',
                fill: '#d60000',
                fontWeight: 'bold',
                align: 'center',
                stroke: "#ffffff",
                strokeThickness: 5
            });

        gameScoreLabel.update();
        gameScoreLabel.x = (game.width / 2) - (gameScoreLabel.width / 2);

        this.scoreNumber = this.game.add.text(
            0, 0, String(reg.mainScore), {
                font: '146px IrishGrover',
                fill: '#d60000',
                fontWeight: 'bold',
                align: 'center',
                strokeThickness: 10,
                stroke: "#ffffff"
            });
        this.scoreNumber.update();
        this.scoreNumber.x = game.width/2 - this.scoreNumber.width/2;
        this.scoreNumber.y = (game.height/2 - this.scoreNumber.height/2) - 200;

        this.menuButton = this.add.button((game.width / 2) - 53, game.height - 150, 'menuBack', this.startMenu, this);

        ///////////////////////////

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
        result = localStorage.getItem("presenting_score");
        reg.mainScore = JSON.parse(result);
    } else {
        reg.mainScore = JSON.parse(result);
    }
}