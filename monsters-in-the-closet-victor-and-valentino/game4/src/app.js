



var nActualLevel=1;
var level1msLeft=0;
var level2msLeft=0;
var timeleftl1;
var timeleftl2;
var success=false;
var globals = globals || {};
var activeConfig;
globals.bSound=true;
globals.isDebugging=true;
globals.soundInstance;
var timer2Points;
var found=0;
var itemToFound;
var prefix;
var htp_objects = [{x:413,y:442},{x:438,y:324},{x:573,y:447},{x:580,y:324},{x:587,y:555},{x:780,y:329},{x:934,y:405},{x:936,y:341},{x:937,y:537},{x:1045,y:444},{x:1051,y:326}];
var level1_objects = [{x:329,y:117},{x:366,y:324},{x:378,y:417},{x:392,y:371},{x:392,y:179},{x:541,y:290},{x:555,y:390},{x:675,y:399},{x:714,y:594},{x:751,y:327},{x:794,y:308},{x:962,y:603},{x:1018,y:273},{x:1132,y:66},{x:1170,y:560},{x:1170,y:265},{x:1202,y:475}];
var level2_objects = [{x:350,y:422},{x:346,y:503},{x:402,y:124},{x:569,y:121},{x:614,y:522},{x:701,y:473},{x:718,y:329},{x:748,y:598},{x:839,y:149},{x:905,y:324},{x:981,y:550},{x:1026,y:44},{x:1036,y:273},{x:1053,y:375},{x:1159,y:541}];
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


