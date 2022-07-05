(function (exports)
{
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');
    var netX = (canvas.width - 60) / 2;
    var netY = canvas.height - 340;
    exports.netX = netX;
    exports.netY = netY;
    exports.drawBg = function (){
        exports.drawImage('game_background.png', 0, 0);
        exports.drawImage('net.png', netX, netY, 'bits.png');
    };
	
    exports.player = {};
    var player = exports.player;
    player.x = 170;
    player.y = 330;
    player.disy = 0;
    player.width = 114;
    player.height = 161;
    player.state = 'idle';
    player.frame = 1;
    player.jumping = false;

    var playerHead = {};
    playerHead.x = player.x + player.width / 2;
    playerHead.y = player.y + 50;
    playerHead.radius = 40;

    var bot = {};
    bot.x = 600;
    bot.y = 330;
    bot.disy = 0;
    bot.width = 114;
    bot.height = 161;
    bot.state = 'idle';

    var botHead = {};
    botHead.x = bot.x + bot.width / 2;
    botHead.y = bot.y + 50;
    botHead.radius = 50;

    exports.drawPlayers = function ()
    {
        exports.drawImage('player_' + player.state + '.png', player.x, player.y, 'players', 'player_' + exports.playerTeam);
        

        ctx.save();
        ctx.translate(bot.x + bot.width, bot.y);
        ctx.scale(-1, 1);
        if(exports.screen != 'won')
        exports.drawImage('player_' + bot.state + '.png', 0, 0, 'players', 'player_' + exports.botTeam);
       
        ctx.restore();
    };
    
    var selected = false;
    var targetX = player.x;
    var startY = player.y;
    var targetY = player.y;
    var mouseDown = function (e){
        var x = e.changedTouches ? e.touches[0].pageX : e.pageX;
        var y = e.changedTouches ? e.touches[0].pageY : e.pageY;
        startY = targetY = y / exports.scaleY;
        selected = exports.inBounds(x, y, player);
    };

    var mouseMove = function (e){
        if(selected){
            var x = e.changedTouches ? e.touches[0].pageX : e.pageX;
            var y = e.changedTouches ? e.touches[0].pageY : e.pageY;
            targetX = (x / exports.scaleX) - player.width / 2;
            targetY = (y / exports.scaleY);
            if(startY < targetY){
                startY = targetY;
            }
        }
    };

    var mouseUp = function (){
        selected = false;
        targetY = startY;
    };

    if('ontouchstart' in window){
        document.body.addEventListener('touchstart', mouseDown, false);
        document.body.addEventListener('touchmove', mouseMove, false);
        document.body.addEventListener('touchend', mouseUp, false);
    }
    else {
        document.body.addEventListener('mousedown', mouseDown, false);
        document.body.addEventListener('mousemove', mouseMove, false);
        document.body.addEventListener('mouseup', mouseUp, false);
    }


    var framesPassed = 0;
    var ball;

    var ballCollision = function (head, body){
        if(Math.sqrt(Math.pow(head.x - (ball.x + ball.width / 2), 2) + Math.pow(head.y - (ball.y + ball.height / 2), 2)) < head.radius + ball.radius){
            var angle = Math.atan2((ball.y + ball.height / 2) - head.y, (ball.x + ball.width / 2) - head.x);
            var speed = Math.sqrt(ball.disx * ball.disx + ball.disy * ball.disy);
            ball.disx = Math.cos(angle) * speed;
            ball.disy = Math.sin(angle) * speed;
            ball.disy -= body.disy;
            ball.disx *= 0.8;
        }
    };

    var botSpeed = 10;
    var botRight, botLeft;
    exports.playerLogic = function (){
        if(!ball){
            ball = exports.ball;
        }
        framesPassed++;
        if(framesPassed > 4){
            // framesPassed = 0;
            if(targetX < player.x){
                player.state = player.state === 'walk3' ? 'walk4' : 'walk3';
            }
            else {
                player.state = player.state === 'walk1' ? 'walk2' : 'walk1';
            }

            if(player.x === targetX){
                player.state = 'idle';
            }
        }

        player.x = targetX || 170;
        if(player.x + 20 < 0){
            player.x = -20;
            player.state = 'idle';
        }

        if(player.x + player.width - 20 > netX){
            player.x = netX - (player.width - 20);
            player.state = 'idle';
        }

        if(startY - targetY > 0.12 * window.innerHeight){
            player.state = 'jump';
            if(player.jumping === false){
                player.jumping = true;
                player.disy = 40;
            }
        }

        if(player.jumping === true) {
            player.y -= player.disy;
            player.disy -= 5;
            if(player.y >= 330){
                startY = targetY;
                player.disy = 0;
                player.y = 330;
                player.jumping = false;
                player.state = 'idle';
            }
        }


        playerHead.x = player.x + player.width / 2;
        playerHead.y = player.y + 50;

        botLeft = botRight = false;
        if(Math.abs(ball.x - bot.x) > 10){
            if(ball.x < bot.x && bot.x - botSpeed > netX + 60){
                if(ball.disx < 0 || (ball.x > canvas.width * 0.8 && ball.disx > 20 && ball.disy > -5) ){
                    botLeft = true;
                }
            }
            else if(ball.x + ball.width / 2 > bot.x){
                if( (ball.x < canvas.width * 0.9 && ball.disy > 0 && ball.disx < 30) || ball.disx < -10 ){
                    botRight = true;
                }
            }

            if(botLeft === false && bot.x + bot.width < canvas.width && ball.x < bot.x && ball.disx > 20){
                botRight = true;
            }



            if(botLeft === true){
                bot.x -= botSpeed;
                if(framesPassed > 4){
                    framesPassed = 0;
                    bot.state = (bot.state === 'walk1') ? 'walk2' : 'walk1';
                }
            }
            if(botRight === true){
                bot.x += botSpeed;
                if(framesPassed > 4){
                    framesPassed = 0;
                    bot.state = (bot.state === 'walk3') ? 'walk4' : 'walk3';
                }
            }

            if(ball.y < canvas.width / 2 && botHead.y > ball.y + ball.height && botHead.y - ball.y < botHead.radius * 4 && Math.abs(ball.x + ball.width - botHead.x) < botHead.radius * 4 && ball.disy > 0 && bot.jumping !== true){
                bot.disy = 40;
                bot.jumping = true;
                bot.state = 'jump';
            }
        }

        if(bot.jumping === true){
            bot.y -= bot.disy;
            bot.disy -= 5;
            if(bot.y >= 330){
                bot.disy = 0;
                bot.y = 330;
                bot.jumping = false;
                bot.state = 'idle';
            }
        }

        botHead.x = bot.x + bot.width / 2;
        botHead.y = bot.y + 50;


        ballCollision(playerHead, player);
        ballCollision(botHead, bot);
    };

})(window.head);