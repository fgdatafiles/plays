function goToHome() {
    if (!game.state.checkState("Home")) {
        game.state.add('Home', Home.Play, true);
    } else {
        game.state.start('Home');
    }
}

function goToGamePlay() {
    if (!game.state.checkState("GamePlay")) {
        game.state.add('GamePlay', GamePlay.Play, true);
    } else {
        game.state.start('GamePlay');
    }
}

function goToGameOver() {
    if (!game.state.checkState("GameOver")) {
        game.state.add('GameOver', GameOver.Play, true);
    } else {
        game.state.start('GameOver');
    }
}

function goToGameFinish() {
    if (!game.state.checkState("GameFinish")) {
        game.state.add('GameFinish', GameFinish.Play, true);
    } else {
        game.state.start('GameFinish');
    }
}

function goToLevel() {
    if (!game.state.checkState("GameLevel")) {
        game.state.add('GameLevel', GameLevel.Play, true);
    } else {
        game.state.start('GameLevel');
    }
}

function goToTutorial() {
    if (!game.state.checkState("Tutorial")) {
        game.state.add('Tutorial', Tutorial.Play, true);
    } else {
        game.state.start('Tutorial');
    }
}