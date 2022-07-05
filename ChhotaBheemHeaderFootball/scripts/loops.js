// Keep your drawing and logic loops separate. That way we can have our logic FPS running steadily, and have it draw as fast as the browser
// can manage.
// Add the drawing functions to exports.draw, before the if
// and do the same for logic

// If any other files require you to add their functions here, a comment at the top will tell you that

// REMEMBER TO CALL THE DRAW AND LOGIC FUNCTIONS!
(function (exports){
    var contexts = [];
    var canvases = document.getElementsByTagName('canvas');
    [].forEach.call(canvases, function (canvas){
        contexts.push(canvas.getContext('2d'));
    });



    var music = document.getElementById('music');
    var crowd = document.getElementById('crowd');
	
    exports.draw = function (){
        contexts.forEach(function (ctx, i)
        {
            ctx.clearRect(0, 0, canvases[i].width, canvases[i].height);
        });

        if(exports.screen === 'main'){
            exports.drawMainScreen();
        }
        if(exports.screen === 'translation')
        {
            exports.drawTranslationScreen();
        }
        else if(exports.screen === 'splash')
        {
            exports.drawSplash();
        }
        else if(exports.screen === 'select'){
            exports.selectScreen();
        }
        else if(exports.screen === 'quickselect'){
            exports.teamSelect();
        }
        else if(exports.screen === 'credits'){
            exports.creditsScreen();
			var totalscore=((1+exports.playerScore)*999)/1+exports.botScore;
			var ts=totalscore.toFixed(0);			
			exports.write(ts, 'center', 250);
        }
        else if(exports.screen === 'game'){
            exports.drawBg();
            exports.drawPlayers();
            exports.drawBall();
            exports.drawGameUI();
        }
        else if(exports.screen === 'readyPopup'){
            exports.drawBg();
            exports.drawPlayers();
            exports.drawBall();
            exports.drawGameUI();
            exports.drawReadyPopup();
        }
        else if(exports.screen === 'draw'){
            exports.drawBg();
            exports.drawPlayers();
            exports.drawBall();
            exports.drawGameUI();
            exports.drawPopup();
        }
        else if(exports.screen === 'extratime'){
            exports.drawBg();
            exports.drawPlayers();
            exports.drawBall();
            exports.drawGameUI();
            exports.extraTime();
        }
        else if(exports.screen === 'tree'){
            exports.tournamentTree();
        }
        else if(exports.screen === 'won'){
            //console.log('drawBG');
            exports.drawBg();
            exports.drawPlayers();
            exports.drawBall();
            exports.drawGameUI();
			exports.drawLeader();
			var totalscore=(((1+exports.playerScore)*999)/1+(exports.botScore));
			var ts=totalscore.toFixed(0);			
            exports.wonPopup(ts);
        }
        else if(exports.screen === 'lost'){
            exports.drawBg();
            exports.drawPlayers();
            exports.drawBall();
            exports.drawGameUI();            
			
			var totalscore=(((1+exports.playerScore)*999)/1+(exports.botScore));
		var ts=totalscore.toFixed(0);
		exports.drawLeader();
		exports.lostPopup(ts);
        }
        else if(exports.screen === 'inter'){
            exports.drawInterScreen();
        }
        else if(exports.screen === 'halftime'){
            exports.drawBg();
            exports.drawPlayers();
            exports.drawBall();
            exports.drawGameUI();
            exports.drawHalfTime();
        }
        else if (exports.screen === 'pause') {
            exports.drawBg();
            exports.drawPlayers();
            exports.drawBall();
            exports.drawGameUI();
            exports.drawPauseScreen();
        }

        if(exports.screen === 'tournamentstart'){
            exports.drawImage('game_background.png', 0, 0);
        }    
        exports.drawButtons();
        if(exports.screen === 'tournamentstart'){
            exports.tournamentStartScreen();
        }
        if(exports.paused !== true){
            requestAnimationFrame(function (){
                setTimeout(exports.draw, 1000 / (exports.FPS || 60));
            });
        }
    };

    exports.logic = function (){
        if(exports.screen === 'game'){
            exports.playerLogic();
            exports.ballLogic();
            exports.changeTime();
        }

        // Change to add in whatever logic functions you want to run
        if(exports.paused !== true){
            setTimeout(exports.logic, 1000 / (exports.FPS || 60));
        }
    };

    var loop = function (){
        exports.lastSeen = Date.now();
        setTimeout(loop, 1000 / (exports.FPS || 60));
    };
    loop();

})(window.head); // Change to your global namespace