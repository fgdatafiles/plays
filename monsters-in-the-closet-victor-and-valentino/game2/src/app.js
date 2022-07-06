


var hud;
var globals = globals || {};
var activeConfig;
globals.bSound=true;
globals.isDebugging=true;
globals.soundInstance;
var level1Points,level2Points;



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


