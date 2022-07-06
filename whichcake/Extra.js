function Extra() {
    window.game.events.on('gameOver', function() {
        // Game Over
        console.log('Game Over')
    });

    window.game.events.on('play', function() {
        // Play the game
        console.log('play')

    });

    window.game.events.on('highscore', function(highscore) {
        // Highscore
        console.log('New Highscore : ' + highscore)
    });

}