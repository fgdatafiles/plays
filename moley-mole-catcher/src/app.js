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






var globals = globals || {};

globals.bSound=true;
globals.screenlock=false;
globals.volume;
globals.music_volume;
var myStorage;
let music
globals.isDebugging=true;
globals.soundInstance;
globals.bestScore;
var main;
var stage;
if(createjs){
    var c = createjs;
}

if(  document.addEventListener  ){

    $(document).ready(function(){

        globals.isMobile = detectMobile();
        myStorage = window.localStorage;
        main=new Main();
        strings =game1;
        main.init();
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
function pauseAll() {
    if (actualPage){
        actualPage.pauseGame();
    }
    globals.volume  = c.Sound.volume;
    c.Sound.volume = 0;

}


function resumeAll(){
    c.Sound.volume = globals.volume;
    if (actualPage){
        actualPage.resumeGame();
    }
}
