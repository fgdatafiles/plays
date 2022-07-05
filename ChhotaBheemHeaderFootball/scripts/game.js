(function (exports){
    var canvas = document.getElementsByTagName('canvas')[0];
    var halfTime = 30;
    
    var formatTime = function (){
        exports.timeLeft -= 1000 / exports.FPS;
        var m, s;
        s = exports.timeLeft / 1000;
        m = Math.floor(s / 60);
        s %= 60;
        s = s.toFixed(0);
        if(s < 10){
            s = '0' + s;
        }
        exports.timeString = m + ':' + s;
    };

    exports.startGame = function (time, extraTime){
        exports.timeLeft = (time * 1000) || 60000;
        if(time){
            halfTime = time / 2;
        }
        else {
            halfTime = 30;
        }
        if(extraTime === true){
            halfTime = -10;
        }
        else {
            exports.playerScore = exports.botScore = 0;
			
        }
		
        formatTime();

        exports.pastHalfTime = false; 
        var ball = exports.ball;
        ball.x = canvas.width;
        ball.y = 20;
        ball.radius = 40;
        ball.width = 80;
        ball.height = 80;
        ball.disx = -20;
        ball.disy = -20;  
        exports.screen = 'game';
    };
    exports.changeTime = function (){
        formatTime();

        if(exports.timeLeft <= 0){
            exports.timeString = '0:00';
            if(exports.tournament){
				console.log(botScore);
                if(exports.botScore > exports.playerScore){
                    exports.screen = 'lost';
                }
                else if(exports.botScore === exports.playerScore){
                    exports.rematch();
                }
                else if(exports.canPlayOn){
                    exports.screen = 'tree';
                    exports.nextGroup(true);
                }
                else {
                    exports.screen = 'won';
                }
            }
            else {
				var totaalscore=(exports.playerScore*999)/exports.botScore;
				console.log(totaalscore);
				console.log(exports.playerScore);
                if(exports.botScore > exports.playerScore){
                    exports.screen = 'lost';
                }
                else if(exports.botScore === exports.playerScore){
                    exports.rematch();
                }
                else {
                    exports.screen = 'won';
                }
            }
        }
        if(exports.pastHalfTime !== true && exports.timeLeft / 1000 <= halfTime){
            exports.screen = 'halftime';
            exports.pastHalfTime = true;
        }
    };
    exports.rematch = function (){
        exports.screen = 'draw';
        setTimeout(function (){
            exports.screen = 'extratime';
            setTimeout(function (){
                exports.startGame(30, true);
            }, 2000);
        }, 2000);
    };
})(window.head);