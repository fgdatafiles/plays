



var nActualLevel=1;
var level1Points=0;
var level2Points=0;
var globals = globals || {};
var activeConfig;
globals.bSound=true;
globals.isDebugging=true;
globals.soundInstance;
var timer2Points;


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


