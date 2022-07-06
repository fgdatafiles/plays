



var globals = globals || {};

globals.bSound=true;
globals.isDebugging=true;
globals.soundInstance;

var skip_intro;
var skip_map_intro;
var actual_world;
var game_active;
var myStorage;
var sTalismans;
var aTalismans;
var nTalismans;
var main;
var stage;
var pageName;
var cid;
var myStorage;
if(createjs){
    var c = createjs;
}

if(  document.addEventListener  ){

    $(document).ready(function(){
       
        pageName = params.pageName;
        cid = params.cid;
        globals.isMobile = detectMobile();

        myStorage = window.localStorage;



        skip_intro = readCookie('skip_intro') || 0;
        skip_map_intro = readCookie('skip_map_intro') || 0;
        actual_world = readCookie('actual_world') || 1;
        sTalismans = readCookie('sTalismans') || '0,0,0,0,0,0,0,0,0,0';

        game_active = readCookie('game_active') || 1;
        
        aTalismans = sTalismans.split(',');

        for(var i=0;i<10;i++){
            nTalismans +=parseInt(aTalismans[i]);
        }
        console.log('skip_intro:'+skip_intro);
        console.log('skip_map_intro:'+skip_map_intro);
        console.log('actual_world:'+actual_world);
        console.log('sTalismans:'+sTalismans);
        console.log('game_active:'+game_active);

        strings =game1;
        window.addEventListener("orientationchange", resizeCanvas, false);
        window.addEventListener('resize', resizeCanvas, false);

        main=new Main();


    });



}
function resizeCanvas() {

    main.resize();
}


