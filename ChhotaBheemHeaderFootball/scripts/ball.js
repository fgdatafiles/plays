(function (exports)
{
    var canvas = document.getElementsByTagName('canvas')[0];

    var yLimit = 30;
    var xLimit = 25;

    var groundY = 500;
    exports.ball = {};
    var ball = exports.ball;
    ball.x = canvas.width;
    ball.y = 20;
    ball.radius = 40;
    ball.width = 80;
    ball.height = 80;
    ball.disx = -20;
    ball.disy = -20;

    exports.drawBall = function ()
    {
        exports.drawImage('ball.png', ball.x, ball.y, 'bits.png');
        exports.drawImage('shadow.png', ball.x, groundY, 'bits.png', undefined, 70 + (groundY - ball.y) / 10);
    };

    var netX, netY;
    exports.playerScore = exports.botScore = 0;
    exports.ballLogic = function (){
        if(!netX){
            netX = exports.netX;
        }
        if(!netY){
            netY = exports.netY;
        }

        ball.x += ball.disx;
        ball.y += ball.disy;

        ball.disy += 1.5;

        if(ball.y + ball.height > groundY){
            if(ball.x > netX){
                exports.playerScore += 1;
            }
            else {
                exports.botScore += 1;
            }
            ball.x = canvas.width;
            ball.y = 20;
            ball.disx = ball.disy = -20;
        }

        if(ball.x < 0){
            ball.x = 0;
            ball.disx *= -1;
        }
        if(ball.x + ball.width > canvas.width){
            ball.x = canvas.width - ball.width;
            ball.disx *= -1;
        }
        if(
            ball.y + ball.height > netY + 10 &&
            (
                ball.x + ball.width > netX && ball.x < netX ||
                ball.x < netX + 60 && ball.x + ball.width > netX + 60
            )
        ){
            var angle = Math.atan2((ball.y + ball.height / 2) - netY, (ball.x + ball.width / 2) - netX + 10);
            var speed = Math.sqrt(ball.disx * ball.disx + ball.disy * ball.disy);
            ball.disx = Math.cos(angle) * speed;
            ball.disy = Math.sin(angle) * speed;
            ball.disx *= 0.8;
        }

        if(ball.disy < -yLimit){
            ball.disy = -yLimit;
        }
        if(ball.disx < -xLimit){
            ball.disx = -xLimit;
        }
        else if(ball.disx > xLimit){
            ball.disx = xLimit;
        }
    };
})(window.head);