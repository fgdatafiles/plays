



var nActualLevel=1;
var level1msLeft=0;
var level2msLeft=0;
var timeleftl1;
var timeleftl2;
var success=false;
var globals = globals || {};
var activeConfig;
globals.isPaused =false;
globals.bSound=true;
globals.isDebugging=true;
globals.soundInstance;

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


