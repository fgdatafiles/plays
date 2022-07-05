


var hud;
var globals = globals || {};
var activeConfig;
globals.bSound=true;
globals.isDebugging=true;
globals.soundInstance;
var level1Points,level2Points,level3Points,level4Points;

var isLevel1Played = 0;
var isLevel2Played = 0;

var nCurrentLevel;
level1Points = level2Points  = 0;
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
    });
}


function resizeCanvas() {

    
    main.resize();
}


