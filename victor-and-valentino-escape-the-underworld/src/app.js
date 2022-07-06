


var objectsHitZoneLevel1_ = ['',{x:16,y:103},{x:36,y:52},{x:0,y:7},{x:0,y:8},{x:3,y:57},{x:0,y:144},{x:22,y:18},{x:10,y:72},{x:0,y:10}];
var objectsHitZoneLevel2_ = ['',{x:0,y:155},{x:0,y:48},{x:0,y:6},{x:19,y:89},{x:0,y:0},{x:19,y:89},{x:0,y:36},{x:0,y:72},{x:0,y:29},{x:0,y:164}];
var nActualLevel=1;
var level1Points=0;
var level2Points=0;
var globals = globals || {};
var activeConfig;
var postac;
globals.bSound=true;
globals.isDebugging=true;
globals.soundInstance;
globals.isMobile = false;

var isLevel1Played = 0;
var isLevel2Played = 0;

globals.game1Level1 = {
    prefix:'l1_',
    nGameTime:60000,
    nChanceForBonus:1,
    nObstaclesTypes:9,
    nMaxItems:16, // ilosc przeszkadzajek
    nMaxPoints:6, // ilosc punkktow na ekranie
    nMaxBonuses:1, // ilosc bonusow na ekranie
    nEnergyBonus:0.1,//ile dodaje energii po zlapaniu bonusa energii
    heroActiveAreaPadding:150, // granice jezdzenia herosa z lewej i prawej
    nMinY:346,// góra ekranu
    nMaxY:611, // dol ekranu
    nMinScale:0.6, // scale na gorze ekranu
    nPosItemOffScreen:1500,//jak daleko laduje nowy item za ekranem ( random*nPosItemOffScreen
    speed1:1, // szybkosc landscape'u
    speed2:2,//szybkosc domow
    speed3:5, // szybkosc chodnika i obstacli
    level_ended:false, // znacznik konca levelu
    level_success:false,
    level_points:0



};

globals.game1Level2 = {

    prefix:'l2_',
    nGameTime:60000,
    nChanceForBonus:1,
    nObstaclesTypes:10,
    nMaxItems:16, // ilosc przeszkadzajek
    nMaxPoints:10, // ilosc punkktow na ekranie
    nMaxBonuses:1, // ilosc bonusow na ekranie
    nEnergyBonus:0.1,//ile dodaje energii po zlapaniu bonusa energii
    heroActiveAreaPadding:150, // granice jezdzenia herosa z lewej i prawej
    nMinY:346,// góra ekranu
    nMaxY:611, // dol ekranu
    nMinScale:0.6, // scale na gorze ekranu
    nPosItemOffScreen:1500,//jak daleko laduje nowy item za ekranem ( random*nPosItemOffScreen
    speed1:1, // szybkosc landscape'u
    speed2:2,//szybkosc domow
    speed3:5, // szybkosc chodnika i obstacli
    level_ended:false, // znacznik konca levelu
    level_success:false,
    level_points:0
};




var main;
var stage;
if(createjs){
    var c = createjs;
}

if(  document.addEventListener  ){

    $(document).ready(function(){

        globals.isMobile = detectMobile();
        strings =game1;
        main=new Main();
        window.addEventListener("orientationchange", resizeCanvas, false);
        window.addEventListener('resize', resizeCanvas, false);
        
    });

}

function resizeCanvas() {

    
    main.resize();
}


