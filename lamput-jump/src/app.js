var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}



var level1Points =0;

var globals = globals || {};

globals.strings;
globals.bSound=true;
globals.isDebugging=true;
globals.soundInstance;
globals.isMobile = detectMobile();
console.log(navigator.userAgent);
console.log(navigator);


var game={};
game.points=[];
game.levelLimits=[0,1000];
game.standardframeRate = 50;
game.player={};
game.player.velX=0;
game.player.velY=0;
game.player.speed=10;
game.player.jumpSpeed=30;
game.player.trampolineSpeed=60;
game.player.jumping=false;
game.player.isLeft=false;
game.player.isRight=false;
game.player.isIdle=true;
game.friction=0.7;
game.gravity=1.3;
game.width=668;
game.height=900;
game.start_width=100;
game.keys=[];
game.hits=0;

/*

 game.points_bonus_chance=0.3;
 game.trampoline_bonus_chance=0.2;
 game.multiply_bonus_chance=0.2;
 game.time_bonus_chance=0.2;

 */

game.bonus_chance = .6; /// czy ma być w ogole bonus

game.points_bonus_chance=0.75; // czy to mają być zwyczajne punkty

game.trampoline_bonus_chance=0.1; // czy to ma być trampolica

game.points2_bonus_chance=0.05; //czy to ma być +200


game.multiply_bonus_chance=0.05; // czy to mają być  czasowe podwójne punkty


game.time_bonus_chance=0.05; // czy to ma być zwolnienie czasu


game.nDifficultyMultiplayer=1;
game.nTimeMultiplayer=1;


game.orginalGameVariables={};
game.orginalGameVariables.speed = game.player.speed;
game.orginalGameVariables.jumpSpeed = game.player.jumpSpeed;
game.orginalGameVariables.friction = game.friction;
game.orginalGameVariables.gravity = game.gravity;
// EXTRA POINTS BONUS

game.pointsMulti=1;
game.isExtraPointsTime =5000;
game.isTimeSlowTime =5000;
game.isExtraPointsTimeout;
game.isTimeSlowTimeout;
game.gameOverTimeout;
game.timeMulti=1;
game.gameOver =false;
game.nCurrentLevel=1;


var main;
var stage;
if(createjs){
    var c = createjs;
}

if(  document.addEventListener  ){

    $(document).ready(function(){

        globals.strings = gameStrings.game;
        main=new Main();
        window.addEventListener("orientationchange", resizeCanvas, false);
        window.addEventListener('resize', resizeCanvas, false);
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
        console.log(globals.strings);
    });

}


function handleVisibilityChange() {
    if (document[hidden]) {
        pauseAll();
    } else {
        resumeAll();
    }
}
function pauseAll(){

    globals.volume  = c.Sound.volume;
    console.log(globals.volume+ ' GLOBAL VOLUME BEFORE LOCK DOWN');

    console.log(globals.volume+ ' audio tag VOLUME BEFORE LOCK DOWN');
    c.Sound.volume = 0;

}


function resumeAll(){

    c.Sound.volume = globals.volume;
    //playLoop('start');
}


function resizeCanvas() {

    main.resize();
}