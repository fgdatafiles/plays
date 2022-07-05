(function (exports)
{
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');

    exports.wantMusic = true;
    var music = document.getElementById('music');
    music.addEventListener('ended', function (){
        if(exports.wantMusic === true){
            this.play();
        }
    }, false);
    music.addEventListener('timeupdate', function (){
        if(Date.now() - exports.lastSeen > 100){
            this.pause();
        }
    }, false);
    
    var crowd = document.getElementById('crowd');
    crowd.addEventListener('ended', function (){
        if(exports.wantMusic === true){
            this.play();
        }
    }, false);
    crowd.addEventListener('timeupdate', function (){
        if(Date.now() - exports.lastSeen > 100){
            this.pause();
        }
    }, false);
    var halfTimeClick = false;
    var endGameClick = false;
    var pauseClick = false;
    var tapToContinue = function ()
    {
        if(exports.screen === 'halftime' && halfTimeClick === true){
            halfTimeClick = false;
            exports.screen = 'game';
            var ball = exports.ball;
            ball.x = canvas.width;
            ball.y = 20;
            ball.radius = 40;
            ball.width = 80;
            ball.height = 80;
            ball.disx = -20;
            ball.disy = -20;
        }
        else if(endGameClick && (exports.screen === 'won' || exports.screen === 'lost')){
            endGameClick = false;
            exports.screen = 'credits';
        }
        else if (pauseClick && exports.screen === 'pause') {
            pauseClick = false;
            exports.screen = 'game';
        }
    };

    var musicScreens = {
        'main': 1,
        'translation': 1,
        'credits': 1,
        'select': 1,
        'quickselect': 1,
        'tournamentstart': 1
    };
    var crowdMusicScreens = {
        'game': 1,
        'readyPopup': 1,
        'halftime': 1,
        'won': 1,
        'lost': 1,
        'inter': 1
    };

    var noButtonsClicked = function (e){
        var noButtonsClicked = true;
        var x = (e.changedTouches && e.changedTouches[0].pageX) || e.pageX;
        var y = (e.changedTouches && e.changedTouches[0].pageY) || e.pageY;
        exports.buttons.forEach(function (button){
            if(button.conditionFn() && exports.inBounds(x, y, button)){
                noButtonsClicked = false;
            }
        });
        return noButtonsClicked;
    };

    document.body.addEventListener('touchstart', function (e){
        if(exports.screen === 'halftime' && noButtonsClicked(e)){
            halfTimeClick = true;
        }
        else if( (exports.screen === 'won' || exports.screen === 'lost') && noButtonsClicked(e) ){
            endGameClick = true;
        }
        else if (exports.screen === 'pause' && noButtonsClicked(e)) {
            pauseClick = true;
        }
    }, false);
    document.body.addEventListener('touchend', function (){
        if(exports.wantMusic){
            if(exports.screen in musicScreens){
                crowd.pause();
                music.play();
            }
            else if(exports.screen in crowdMusicScreens){
                music.pause();
                crowd.play();
            }
        }
        tapToContinue();
    }, false);

    document.body.addEventListener('mousedown', function (e){
        if(exports.screen === 'halftime' && noButtonsClicked(e)){
            halfTimeClick = true;
        }
        else if( (exports.screen === 'won' || exports.screen === 'lost') && noButtonsClicked(e) ){
            endGameClick = true;
        }
        else if (exports.screen === 'pause' && noButtonsClicked(e)) {
            pauseClick = true;
        }
    }, false);
    document.body.addEventListener('mouseup', function (){
        tapToContinue();

        if(exports.wantMusic){
            if(exports.screen in musicScreens){
                crowd.pause();
                music.play();
            }
            else if(exports.screen in crowdMusicScreens){
                music.pause();
                crowd.play();
            }
        }
        tapToContinue();
    }, false);


    var navShown = false;
    var dismissNav = function (e){
        var x = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        var y = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

        if(!(x / exports.scaleX < 160 && y / exports.scaleY > 60)){
            navShown = false;
        }
    };
    // To dismiss the nav bar
    document.body.addEventListener('mousedown', dismissNav, false);
    document.body.addEventListener('touchstart', dismissNav, false);

    var selectedTeam;
    var selectedFrameX, selectedFrameY;
    
    var currentText = '';
    var numInGroup = 16;
    exports.addAllButtons = function (){
        var flagX, flagY;
        var randomChosen = Math.floor(exports.flags.length * Math.random());
        exports.flags.forEach(function (flag, i){
            flagX = 65 + 112 * (i % 4);
            flagY = 86 + 110 * Math.floor(i / 4);
            if(i % 4 >= 2){
                flagX += 127;
            }
            if(Math.floor(i / 4) >= 2){
                flagY += 87;
            }
            if(i === randomChosen){
                selectedTeam = flag;
                selectedFrameX = flagX;
                selectedFrameY = flagY;
            }

          exports.addButton('', flagX, flagY,
                function (){
                    return exports.screen === 'tournamentstart';
                },
                function (button){
                    selectedTeam = flag;
                    selectedFrameX = button.x;
                    selectedFrameY = button.y;
                },
                false,
                flag,
                'flags.png'
            );
        });
        
        exports.addButton('Select', 680, 380,
            function (){
                return exports.screen === 'tournamentstart';
            },
            function (){
                exports.initTree();
                exports.startGame();
                exports.playerTeam = selectedTeam;
                var i = groups.indexOf(selectedTeam);
                exports.botTeam = (i % 2 === 0) ? groups[i + 1] : groups[i - 1];
            },
            true,
            undefined, undefined,
            true
        );

        exports.addButton('  Play  ', 'center', 550,
            function (){
                return exports.screen === 'main';
            },
            function (){
                exports.screen = 'select';
            },
            true
			//,'pause_btn.png'
        );

 

        var paused = false;
        exports.addButton('', 8.4, 5.7,
            function (){
                return exports.screen === 'game' || exports.screen === 'pause';
            },
            function (){
                if(exports.screen === 'pause'){
                    exports.screen = 'game';
                    paused = false;
                }
                else {
                    exports.screen = 'pause';
                    paused = true;
                }
            },
            true,
            'pause_btn.png'
        );

        
        var gameMute = exports.addButton('', 100, 5.7,
            function (){
                return exports.screen === 'game' || exports.screen === 'pause';
            },
            function (button){
                if(button.imgName === 'mute_btn.png'){
                    button.imgName = playMute.imgName = 'pressed_mute_btn.png';
                    music.pause();
                    crowd.pause();
                    exports.wantMusic = false;
                }
                else {
                    button.imgName = playMute.imgName = 'mute_btn.png';
                    if(exports.screen !== 'game'){
                        music.play();
                    }
                    else {
                        crowd.play();
                    }
                    exports.wantMusic = true;
                }
            },
            false,
            'mute_btn.png'
        );
		exports.drawLeader = function (){
        exports.drawImage('leaderbord.png', 330, 100);
       
    };
        var noMuteScreens = {
            'splash': 1,
            'game': 1,
            'inter': 1,
            'readyPopup': 1,
            'halftime': 1,
            'won': 1,
            'lost': 1,
            'translation': 1,
            'pause': 1
        };
        var playMute = exports.addButton('', 873, 10,
            function (){
                return !(exports.screen in noMuteScreens);
            },
            function (button){
                if(button.imgName === 'mute_btn.png'){
                    button.imgName = gameMute.imgName = 'pressed_mute_btn.png';
                    music.pause();
                    exports.wantMusic = false;
                }
                else {
                    button.imgName = gameMute.imgName = 'mute_btn.png';
                    music.play();
                    exports.wantMusic = true;
                }
            },
            false,
            'mute_btn.png'
        );

        exports.addButton('Submit', 650, 530,
            function (){
                return exports.screen === 'credits';
            },
            function (){
            var totalscore=(((1+exports.playerScore)*999)/1+(exports.botScore));
			var ts=totalscore.toFixed(0);  			
			var submit_score=ts;
			submit_on_game_click(submit_score);
            },
            true
        );
		//PlayAgain
		exports.addButton('Replay', 40, 530,
            function (){
                return exports.screen === 'credits';
            },
            function (){
				updatePlayAgain();
				return exports.screen === 'translation';
              
            },
            true
        );
		
	

		//play_btn
       var playgame= exports.addButton('Play', 10, 550,
            function (){
                return exports.screen === 'select';
            },
            function (){
                exports.screen = 'quickselect';
            },
            true
            
        );
        exports.addButton('', 490, 330,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                rightIndex--;
                if(rightIndex < 1){
                    rightIndex = exports.flags.length - 1;
                }
            },
            true,
            'arrow_btn.png'
        );

        exports.addButton('rotate', 800, 330,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                rightIndex++;
                if(rightIndex >= exports.flags.length){
                    rightIndex = 1;
                }
            },
            true,
            'arrow_btn.png'
        );

        exports.addButton('00:30', 45, 500,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                exports.playerTeam = exports.flags[0];
                exports.botTeam = exports.flags[rightIndex];
                exports.startGame(30);
            },
            true
        );

        exports.addButton('01:00', 'center', 500,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                exports.playerTeam = exports.flags[0];
                exports.botTeam = exports.flags[rightIndex];
                exports.startGame(60);
            },
            true
        );

        exports.addButton('01:30', 645, 500,
            function (){
                return exports.screen === 'quickselect';
            },
            function (){
                exports.playerTeam = exports.flags[0];
                exports.botTeam = exports.flags[rightIndex];
                exports.startGame(90);
            },
            true
        );

        var tournamentText = {
            '16': 'Group match',
            '8': 'Quarter-final',
            '4': 'Semi-final',
            '2': 'Final!'
        };

        var goFunc = function (){
            currentText = 'Go!';
            setTimeout(function (){
                exports.screen = 'game';
            }, 1000);
        };
        var ready = function (){
            currentText = 'Ready?';
            setTimeout(goFunc, 2000);
        };

        var interContinue = function (){
            if(paused){
                exports.screen = 'game';
            }
            else {
                exports.screen = 'readyPopup';
                if(exports.tournament === true){
                    currentText = tournamentText[numInGroup];
                    setTimeout(ready, 1500);
                }
                else {
                    ready();
                }
            }
        };
        exports.addButton('Keep playing', 'center', 500,
            function (){
                return exports.screen === 'inter';
            },
            interContinue,
            true
        );

        exports.addButton('', 850, 10,
            function (){
                return exports.screen === 'inter';
            },
            interContinue,
            true,
            'exit_btn.png'
        );
        var navPlaces = {
            'main': 1,
            'inter': 1,
            'credits': 1,
            'select': 1
        };

        exports.addButton('', 15, 220,
            function (){
                return navShown === true;
            },
            function (){
                window.open();
            },
            true,
            'bugs_btn.png'
        );
    };

    exports.drawMainScreen = function ()
    { 
        exports.drawImage('story.jpg', 0, 0);
    };

    exports.creditsScreen = function (){
		exports.drawImage('game_background.png', 0, 0);
        exports.drawImage('leaderbord.png', 330, 100); 
    };

    exports.drawHalfTime = function (){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '24pt Megalopolis';
        exports.write('Half time!', 'center', 250);
        exports.write('Half time!', 'center', 250, undefined, true);
        exports.write('Tap to continue', 'center', 350);
        exports.write('Tap to continue', 'center', 350, undefined, true);
    };

    exports.popup = function (text){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '24pt Megalopolis';
        exports.write(text, 'center', 270);
        exports.write(text, 'center', 270, undefined, true);
		
        ctx.font = '14pt Megalopolis';
        exports.write('Tap to continue', 'center', 350);
        exports.write('Tap to continue', 'center', 350, undefined, true);
    };

    exports.wonPopup = function (src){
        exports.popup(src);
		 exports.canPlayOn = true;
    };
    exports.lostPopup = function (src){
        exports.popup(src);
    };
    exports.selectScreen = function ()
    {
        exports.drawImage('help.jpg', 0, 0);

    };

    var leftIndex = 1;
    var rightIndex = 2;
    var selectionY = 30;
    var text, textSize;
	//left Side
    	exports.teamSelect = function (){
        exports.drawImage('game_background.png', 0, 0);
        exports.drawImage(exports.flags[0], 300, selectionY, 'flags.png');
        exports.drawImage('team_holder_left.png', 100, selectionY, 'bits.png');
        exports.drawImage('player_idle.png', 180, 130, 'players', 'player_' + exports.flags[0]);
        ctx.font = '25px ' + exports.font;
        ctx.fillStyle = 'white';
        //text = exports.flags[0].slice(0, -4).toUpperCase();
		text = "DHOLAKPUR";
		//console.log(exports.flags[0]);
        textSize = ctx.measureText(text);
        ctx.fillText(text, 100 + (294 - textSize.width) / 2, selectionY + 350);
//--------------------
        exports.drawImage(exports.flags[rightIndex], 550, selectionY, 'flags.png');
        exports.drawImage('team_holder_right.png', 550, selectionY, 'bits.png');
        ctx.save();
        ctx.translate(760, 130);
        ctx.scale(-1, 1);
        exports.drawImage('player_idle.png', 0, 0, 'players', 'player_' + exports.flags[rightIndex]);
        ctx.restore();
        text = exports.flags[rightIndex].slice(0, -4).toUpperCase();
        textSize = ctx.measureText(text);
        ctx.fillText(text, 550 + (294 - textSize.width) / 2, selectionY + 350);
    };

    exports.drawGameUI = function (){
        exports.drawImage(exports.playerTeam, 318, 9.25, 'flags.png', undefined, 68, 68);
        exports.drawImage('flag_frame.png', 318, 9.25, 'bits.png');
        exports.drawImage(exports.botTeam, 580, 9.25, 'flags.png', undefined, 68, 68);
        exports.drawImage('flag_frame.png', 580, 9.25, 'bits.png');

        ctx.font = '40pt ' + exports.font;
        ctx.fillText(exports.playerScore, 400, 59);
        ctx.strokeText(exports.playerScore, 400, 59);

        ctx.fillText('-', 469, 50);
        ctx.strokeText('-', 469, 50);

        ctx.fillText(exports.botScore, 505, 59);
        ctx.strokeText(exports.botScore, 505, 59);

        ctx.fillText(exports.timeString, 821, 50);
        ctx.strokeText(exports.timeString, 821, 50);
    };

    var interAd = document.getElementById('inter-ads');
    exports.showInterAd = function (){
        interAd.style.left = (window.innerWidth - 300) / 2 + 'px';
        interAd.style.top = (window.innerHeight - 250) / 2 + 'px';
        interAd.style.display = 'block';
    };

    exports.drawInterScreen = function (){
        exports.showInterAd();
    };


    var groups;
    var treePositions = [];
    var makeTreeObj = function (flag, x, y, w, h){
        var obj = {};
        obj.img = flag;
        obj.x = x;
        obj.y = y;
        obj.w = w;
        obj.h = h;
        treePositions.push(obj);
        return true;
    };

    exports.initTree = function (){
        var tmp;
        groups = exports.flags.slice(0);
        tmp = groups[2];
        groups[2] = groups[4];
        groups[4] = tmp;


        tmp = groups[3];
        groups[3] = groups[5];
        groups[5] = tmp;


        tmp = groups[10];
        groups[10] = groups[12];
        groups[12] = tmp;

        tmp = groups[11];
        groups[11] = groups[13];
        groups[13] = tmp;
        treePositions = [];

        var x, y;
        groups.forEach(function (flag, i){
            x = 50 + (i % 2) * 60;
            y = 18 + Math.floor(i / 2) * 60;

            y += Math.floor(i / 4) * 41;
            makeTreeObj(flag, x, y, 60, 60);
        });
    };

    var sizes = {
        '8': 47,
        '4': 90,
        '2': 120,
        '1': 120
    };

    exports.nextGroup = function (playerWon){
        var curGroupDone = false;
        var ret = [];
        for(var i = 0, len = groups.length; i < len; i++){
            if(i % 2 === 0){
                curGroupDone = false;
                if(playerWon && (groups[i] === exports.playerTeam || groups[i + 1] === exports.playerTeam)){
                    curGroupDone = true;
                    ret.push(exports.playerTeam);
                }
            }
            if(curGroupDone === false && Math.random() > 0.5){
                ret.push(groups[i]);
                curGroupDone = true;
            }
            else if(curGroupDone === false && (i - 1) % 2 === 0){
                ret.push(groups[i]);
                curGroupDone = true;
            }
        }
        groups = ret;
        numInGroup = groups.length;
        var size;
        var x, y;
        groups.forEach(function (flag, i){
            if(groups.length === 8){
                size = sizes[groups.length];
                x = 251;
                y = 19 + i * 75;
                y += Math.floor(i / 2) * 10;
                makeTreeObj(flag, x, y, size, size);
            }
            else if(groups.length === 4){
                size = sizes[groups.length];
                x = 381;
                y = 38 + i * 160;

                makeTreeObj(flag, x, y, size, size);
            }
            else if(groups.length <= 2){
                size = sizes[groups.length];
                x = (groups.length === 2) ? 564 : 807;
                y = 105 + i * 321;
                if(groups.length === 1){
                    y = 270;
                }
                makeTreeObj(flag, x, y, size, size);
            }

            if(flag === exports.playerTeam){
                exports.botTeam = (i % 2 === 0) ? groups[i + 1] : groups[i - 1];
            }
        });

        exports.canPlayOn = groups.length !== 1;
        if(exports.canPlayOn === false){
            exports.screen = 'won';
        }

        return true;
    };

   // exports.tournamentTree = function (){
        //exports.drawImage('tournament_screen.png', 0, 0);
        //treePositions.forEach(function (obj){
           // exports.drawImage(obj.img, obj.x, obj.y, 'flags.png', undefined, obj.w, obj.h);
      //  });
        //exports.drawImage('tournament_screen_overlay.png', 40, 10);
   // };

    exports.drawReadyPopup = function (){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '44pt Megalopolis';
        exports.write(currentText, 'center', 250);
        exports.write(currentText, 'center', 250, undefined, true);
    };

    exports.drawPopup = function (){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '44pt Megalopolis';
        exports.write('Draw!', 'center', 250);
        exports.write('Draw!', 'center', 250, undefined, true);
    };
    exports.drawPauseScreen = function() {
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '44pt Megalopolis';
        exports.write('Paused', 'center', 250);
        exports.write('Paused', 'center', 250, undefined, true);
        exports.write('Tap to continue', 'center', 350);
        exports.write('Tap to continue', 'center', 350, undefined, true);
    };
    exports.extraTime = function (){
        exports.drawImage('pop_up.png', 0, 152, 'bits.png');
        ctx.font = '44pt Megalopolis';
        exports.write('Extra time!', 'center', 250);
        exports.write('Extra time!', 'center', 250, undefined, true);
    };

    var splashAlpha = 0.1;
    var fadeAway = false;
    var controlSplashScreen = function (){
        if(fadeAway === false){
            if(splashAlpha < 1){
                splashAlpha += 0.05;
            }
            else {
                setTimeout(function (){
                    fadeAway = true;
                }, 100);
            }
        }
        if(fadeAway === true){
            splashAlpha -= 0.5;
            if(splashAlpha <= 0){
                exports.screen = 'main';
            }
        }
    };

    exports.drawSplash = function (){
        ctx.save();
        ctx.globalAlpha = splashAlpha;
        controlSplashScreen();
        ctx.restore();
    };
})(window.head);