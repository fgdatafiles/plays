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



var localStorage = window.localStorage;
var hud;
var globals = globals || {};
var activeConfig;
globals.bSound=true;
globals.isDebugging=true;
globals.soundInstance;
var level1Points,level2Points;

var nCurrentLevel;
level1Points = level2Points = 0;
var main;
var stage;
if(createjs){
    var c = createjs;
}

if(  document.addEventListener  ){

    $(document).ready(function(){
        strings =game1;
        main=new Main();
        window.addEventListener("orientationchange", resizeCanvas, false);
        window.addEventListener('resize', resizeCanvas, false);
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
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
    c.Sound.volume = 0;
}

function resumeAll(){
    c.Sound.volume = globals.volume;
}
function resizeCanvas() {
    main.resize();
}


