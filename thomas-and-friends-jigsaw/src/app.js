



var globals = globals || {};

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

        main=new Main();
        loadLocally();

    });

}

function loadLocally()
{
 //   $.getJSON( "strings/strings_game1.json?callback=", function( data ) {

        strings =game1;
        main.init();
        window.addEventListener("orientationchange", resizeCanvas, false);
        window.addEventListener('resize', resizeCanvas, false);



}
function resizeCanvas() {

    
    main.resize();
}


