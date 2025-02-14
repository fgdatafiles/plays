
(function()
{
    'use strict';
    var t;
    var card,toonix_pasek,cartoonito,toonixAnimContainer;
    var container,wybor;
    var available =[0,1,2,3,4,5,6,7,8,9,10,11];
    var bgds=[1,2,3,1,3,1,2,3,1,2,1,2];
    var nMax;
    var nCurrent;
    var shadow,white;
    var anim={
        "framerate":24,
        "images":["img/animation_resized.png"],
        "frames":[
            [444, 406, 113, 98, 0, -42, -5],
            [337, 505, 113, 98, 0, -41, -5],
            [578, 306, 111, 100, 0, -36, -3],
            [1185, 0, 106, 102, 0, -24, -1],
            [1073, 0, 112, 102, 0, -12, -1],
            [982, 205, 114, 100, 0, -5, -3],
            [503, 103, 116, 102, 0, 0, -1],
            [1837, 205, 116, 100, 0, 0, -3],
            [450, 505, 114, 97, 0, -1, -6],
            [1355, 505, 113, 95, 0, -4, -8],
            [1829, 306, 109, 99, 0, -14, -4],
            [855, 0, 103, 103, 0, -26, 0],
            [0, 0, 103, 103, 0, -29, 0],
            [103, 0, 106, 103, 0, -28, 0],
            [428, 0, 106, 103, 0, -27, 0],
            [1396, 0, 104, 102, 0, -27, -1],
            [1677, 103, 104, 101, 0, -22, -2],
            [113, 406, 106, 99, 0, -17, -4],
            [1619, 205, 107, 100, 0, -15, -3],
            [1434, 205, 106, 100, 0, -17, -3],
            [1239, 406, 106, 98, 0, -17, -5],
            [1326, 205, 108, 100, 0, -17, -3],
            [333, 205, 105, 101, 0, -22, -2],
            [702, 103, 105, 102, 0, -24, -1],
            [324, 0, 104, 103, 0, -25, 0],
            [638, 0, 104, 103, 0, -25, 0],
            [109, 103, 104, 102, 0, -25, -1],
            [1614, 0, 106, 102, 0, -22, -1],
            [227, 205, 106, 101, 0, -21, -2],
            [1894, 103, 110, 101, 0, -16, -2],
            [0, 306, 113, 100, 0, -11, -3],
            [219, 406, 112, 99, 0, -11, -4],
            [0, 406, 113, 99, 0, -10, -4],
            [1013, 406, 113, 98, 0, -10, -5],
            [1716, 306, 113, 99, 0, -11, -4],
            [1726, 205, 111, 100, 0, -14, -3],
            [118, 205, 109, 101, 0, -17, -2],
            [1291, 0, 105, 102, 0, -25, -1],
            [1720, 0, 105, 102, 0, -35, -1],
            [350, 306, 112, 100, 0, -41, -3],
            [462, 306, 116, 100, 0, -48, -3],
            [232, 306, 118, 100, 0, -55, -3],
            [113, 306, 119, 100, 0, -56, -3],
            [958, 0, 115, 102, 0, -60, -1],
            [213, 103, 114, 102, 0, -60, -1],
            [1500, 0, 114, 102, 0, -59, -1],
            [557, 205, 115, 101, 0, -59, -2],
            [672, 205, 115, 101, 0, -59, -2],
            [0, 205, 118, 101, 0, -55, -2],
            [438, 205, 119, 101, 0, -49, -2],
            [1261, 306, 116, 99, 0, -43, -4],
            [331, 406, 113, 98, 0, -41, -5],
            [1938, 306, 110, 98, 0, -40, -5],
            [227, 505, 110, 98, 0, -40, -5],
            [915, 306, 112, 99, 0, -40, -4],
            [689, 306, 113, 99, 0, -41, -4],
            [557, 406, 114, 98, 0, -42, -5],
            [671, 406, 115, 98, 0, -42, -5],
            [790, 505, 114, 97, 0, -42, -6],
            [564, 505, 113, 97, 0, -42, -6],
            [677, 505, 113, 97, 0, -42, -6],
            [1455, 406, 113, 98, 0, -42, -5],
            [786, 406, 113, 98, 0, -42, -5],
            [899, 406, 114, 98, 0, -42, -5],
            [113, 505, 114, 98, 0, -42, -5],
            [1126, 406, 113, 98, 0, -42, -5],
            [1490, 306, 112, 99, 0, -39, -4],
            [1939, 0, 108, 102, 0, -29, -1],
            [0, 103, 109, 102, 0, -17, -1],
            [1781, 103, 113, 101, 0, -9, -2],
            [209, 0, 115, 103, 0, -7, 0],
            [1563, 103, 114, 101, 0, -8, -2],
            [1018, 505, 112, 97, 0, -10, -6],
            [1345, 406, 110, 98, 0, -10, -5],
            [787, 205, 105, 100, 0, -10, -3],
            [1138, 103, 97, 101, 0, -6, -2],
            [619, 103, 83, 102, 0, -5, -1],
            [433, 103, 70, 102, 0, -16, -1],
            [807, 103, 100, 101, 0, -6, -2],
            [1020, 103, 118, 101, 0, 0, -2],
            [892, 205, 90, 100, 0, -14, -3],
            [1953, 205, 68, 98, 0, -28, -5],
            [1540, 205, 79, 100, 0, -31, -3],
            [1463, 103, 100, 101, 0, -15, -2],
            [1352, 103, 111, 101, 0, -7, -2],
            [1096, 205, 112, 100, 0, -9, -3],
            [1568, 406, 111, 98, 0, -14, -5],
            [327, 103, 106, 102, 0, -24, -1],
            [534, 0, 104, 103, 0, -29, 0],
            [742, 0, 113, 103, 0, -36, 0],
            [1208, 205, 118, 100, 0, -42, -3],
            [1027, 306, 118, 99, 0, -45, -4],
            [1679, 406, 115, 98, 0, -48, -5],
            [802, 306, 113, 99, 0, -50, -4],
            [907, 103, 113, 101, 0, -49, -2],
            [1825, 0, 114, 102, 0, -50, -1],
            [1235, 103, 117, 101, 0, -46, -2],
            [1145, 306, 116, 99, 0, -42, -4],
            [904, 505, 114, 97, 0, -42, -6],
            [1242, 505, 113, 96, 0, -41, -7],
            [1130, 505, 112, 97, 0, -41, -6],
            [1794, 406, 112, 98, 0, -41, -5],
            [1377, 306, 113, 99, 0, -41, -4],
            [1602, 306, 114, 99, 0, -41, -4],
            [1906, 406, 114, 98, 0, -42, -5],
            [0, 505, 113, 98, 0, -42, -5]
        ],
        "animations":{
            "stopMe": {"speed": 1, "frames": [0]},
            "playing": {
                "next": "stopMe",
                "speed": 1,
                "frames": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44,
                    45,
                    46,
                    47,
                    48,
                    49,
                    50,
                    51,
                    52,
                    53,
                    54,
                    55,
                    56,
                    57,
                    58,
                    59,
                    60,
                    61,
                    62,
                    63,
                    64,
                    64,
                    64,
                    64,
                    64,
                    64,
                    64,
                    64,
                    64,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    65,
                    66,
                    67,
                    68,
                    69,
                    70,
                    71,
                    72,
                    73,
                    74,
                    75,
                    76,
                    77,
                    78,
                    79,
                    80,
                    81,
                    82,
                    83,
                    84,
                    85,
                    86,
                    87,
                    88,
                    89,
                    90,
                    91,
                    92,
                    93,
                    94,
                    95,
                    96,
                    97,
                    98,
                    99,
                    100,
                    101,
                    102,
                    103,
                    104,
                    104,
                    104,
                    104,
                    104,
                    104,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105,
                    105
                ]
            }
        }
    };


    var aPos=[    /* shadow   white     1                         2                   3           4           5                      6
     /*l_0*/   [[514,587],[655,182],[363,189,823,305],[478,374,693,182],[516,44,822,461],[995,228,823,182],[1034,59,655,496],[1107,410,659,338]],
     /*l_1*/   [[746,482],[759,181],[346,111,911,181],[349,442,1058,298],[526,53,759,434],[617,324,1091,394],[744,74,906,426]],
     /*l_2*/   [[353,534],[519,216],[331,321,521,274],[482,51,846,441],[765,54,519,440],[1030,344,643,216],[1041,78,683,403]],
     /*l_3*/   [[522,531],[639,137],[343,134,787,275],[435,384,822,448],[549,30,787,137],[960,32,704,137],[1053,401,639,482],[1090,139,639,309]],
     /*l_4*/   [[356,524],[515,193],[332,338,742,197],[378,49,515,220],[935,33,781,387],[959,343,648,387],[1104,115,609,193],[1144,398,516,428]],
     /*l_5*/   [[546,582],[632,205],[372,159,787,204],[372,364,787,318],[531,54,632,503],[892,46,661,204],[1059,412,648,353],[1107,177,822,469]],
     /*l_6*/   [[799,489],[812,196],[346,298,931,409],[530,30,937,196],[598,439,1107,374],[722,272,812,452],[762,33,1072,246]],
     /*l_7*/   [[522,197],[427,189],[447,35,765,414],[765,58,427,414],[895,539,427,257],[935,300,727,252],[1024,48,556,189],[1090,352,596,414]],
     /*l_8*/   [[540,566],[668,162],[354,201,785,162],[492,420,820,458],[540,43,706,162],[962,46,676,327],[994,474,668,493],[1114,215,785,292]],
     /*l_9*/   [[797,493],[808,229],[367,229,920,230],[523,61,1053,278],[579,530,808,469],[613,291,919,436],[882,31,1087,402]],
     /*l_10*/   [[526,576],[643,129],[354,357,786,266],[379,38,698,129],[502,203,786,129],[999,40,821,438],[1008,412,681,301],[1094,264,643,473]],


     /*l_11*/   [[804,450],[813,243],[359,348,817,382],[380,104,909,244],[581,556,1004,347],[593,113,1005,244],[660,326,1039,486],[762,48,813,520]]
    ];
    var intro_logo_game;
    var ok;
    var bgd;
    var Game=function()
    {

        t = this;
        this.initialize();
    };
    var p=Game.prototype=new c.Container();
    p.initialize=function() {
        available =[0,1,2,3,4,5,6,7,8,9,10,11];

        playSounds('intro');
        
        main.nCurrentLevel=Math.ceil(Math.random()*11);
         bgd= new c.Bitmap(main.loadedData.getResult('bgd_game'+bgds[main.nCurrentLevel]));
        t.addChildAt(bgd,0);
        intro_logo_game=new c.Bitmap(main.loadedData.getResult('intro_logo_game'));
        intro_logo_game.y = 635;
        intro_logo_game.scaleX = intro_logo_game.scaleY=0.55;

        soundBtt.visible = true;
        homeBtt.visible = true;

        toonixAnimContainer = new c.Container();
        t.addChild(toonixAnimContainer);
        toonixAnimContainer.y = 702;
        if(main.isPanoramic){
            intro_logo_game.x = 1250;
            toonixAnimContainer.x =206;

        }else{
            intro_logo_game.x = 1099;
            toonixAnimContainer.x = 356;
        }
        var maska = new c.Shape(new c.Graphics().f('0xff0000').dr(0,-120,200,140).ef());
        toonixAnimContainer.addChild(maska);

        var spriteSheet = new c.SpriteSheet(anim);
        cartoonito = new c.Sprite(spriteSheet,'stopMe');

        cartoonito.x = -5;
        cartoonito.y = 10;
        cartoonito.mask = maska;
        maska.visible=false;
        toonixAnimContainer.addChild(cartoonito);
        toonix_pasek = new c.Bitmap(main.loadedData.getResult('logo_cartoonito'));
        TweenLite.from(toonix_pasek, .7, {ease: Strong.easeOut, y: 100,onComplete:wlaczAnimacjeCartoonito});
        toonixAnimContainer.addChild(toonix_pasek);

        t.addChild(intro_logo_game);
        rozlorz();
        ok = new c.Bitmap(main.loadedData.getResult('ok'));

        ok.regX = 137/2;
        ok.regY = 51;
        ok.x = -120;
        ok.y = 0;
        t.addChild(ok);

    };

    function  wlaczAnimacjeCartoonito(){
        TweenLite.to(cartoonito,1,{y:-100,ease:Strong.easeOut,onComplete:readyAnim});
    }

    function readyAnim(){
        cartoonito.gotoAndPlay('playing');
        main.animationInterval = setInterval(wlaczwylaczAnimacje,10000);
    }

    function wlaczwylaczAnimacje(){
        if(cartoonito.currentAnimation=='stopMe'){
            cartoonito.gotoAndPlay('playing');
        }else{
            cartoonito.gotoAndPlay('stopMe');
        }

    }
    p.dispatchStep1 = function(){

        TweenMax.killAll();

        this.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});
    };

    function startGame(){
        container.mouseEnabled = true;
    }


    function rozlorz(){
       // shuffle();
        container = new c.Container();
        t.addChildAt(container,t.numChildren-2);
        //container.mouseEnabled = false;
        nCurrent=0;
        nMax = aPos[main.nCurrentLevel].length;
        shadow = new c.Bitmap(main.loadedData.getResult('s'+main.nCurrentLevel));
        shadow.x=  aPos[main.nCurrentLevel][0][0];
        shadow.y=  aPos[main.nCurrentLevel][0][1];

        white = new c.Bitmap(main.loadedData.getResult('c'+main.nCurrentLevel));
        white.x=  aPos[main.nCurrentLevel][1][0];
        white.y=  aPos[main.nCurrentLevel][1][1];


        container.addChild(shadow,white);
        var item;
        var j;
        for(var i=2;i<nMax;i++){
            j=i-1;
            item = new c.Bitmap(main.loadedData.getResult('p'+main.nCurrentLevel+'_'+j));
            item.regX = item.image.width/2;
            item.regY = item.image.height/2;
            item.x = aPos[main.nCurrentLevel][i][0]+item.regX;
            item.y = aPos[main.nCurrentLevel][i][1]+item.regY;
            item.cursor = 'pointer';
            item.name = 'i'+i;
            container.addChild(item);

            item.addEventListener('pressmove',onStartDrag);
            item.addEventListener('pressup',onStopDrag);
            item.addEventListener('click',onStopDrag);


        }
    }


    function onStopDrag(e){
        playSounds('throw');
        var nI = e.currentTarget.name.substr(1);
        var nJ =e.currentTarget.name.substr(e.currentTarget.name.indexOf('_')+1);
        var regX =e.currentTarget.regX;
        var regY =e.currentTarget.regY;
        var nX = e.currentTarget.x;
        var nY = e.currentTarget.y;

        e.currentTarget.removeEventListener('pressmove',onStartDrag);
        e.currentTarget.removeEventListener('pressup',onStopDrag);
        e.currentTarget.removeEventListener('click',onStopDrag);
        e.currentTarget.cursor='default';
        //ShutUpPlayAndSpeak('correct');
        var myRotation;

        console.log(nX+":"+aPos[main.nCurrentLevel][nI][2]);

        if( Math.abs(nX-(aPos[main.nCurrentLevel][nI][2]+regX)<50)&&( Math.abs(nY-(aPos[main.nCurrentLevel][nI][3]+regY))<50)){
            myRotation=0;
        }else{
            myRotation=360;
        }

        nCurrent++;

        if(nCurrent==nMax-2){

            TweenLite.to(e.currentTarget,2,{rotation:myRotation,x:aPos[main.nCurrentLevel][nI][2]+regX,y:aPos[main.nCurrentLevel][nI][3]+regY,onComplete:next,ease:Strong.easeOut});
        }else{

            TweenLite.to(e.currentTarget,2,{rotation:myRotation,x:aPos[main.nCurrentLevel][nI][2]+regX,y:aPos[main.nCurrentLevel][nI][3]+regY,ease:Strong.easeOut});
        }

    }




    function next(){
        playSounds('success'+Math.ceil(Math.random()*4));
        container.removeChild(white);
        white = new c.Bitmap(main.loadedData.getResult('a'+main.nCurrentLevel));
        white.x=  aPos[main.nCurrentLevel][1][0];
        white.y=  aPos[main.nCurrentLevel][1][1];
        container.addChild(white);

        TweenLite.to(container,1,{delay:1,alpha:0,onComplete:resetMe})



    }


    function onStartDrag(e){

        e.currentTarget.x = stage.mouseX/scaleS-(pageContainer.x);
        e.currentTarget.y = stage.mouseY/scaleS-(pageContainer.y);

    }

    function resetMe(){
        main.nCurrentLevel++;
        if(main.nCurrentLevel>11)main.nCurrentLevel=0;



        container.removeAllChildren();
        container.alpha=1;

        t.removeChild(bgd);
        bgd= new c.Bitmap(main.loadedData.getResult('bgd_game'+bgds[main.nCurrentLevel]));
        t.addChildAt(bgd,0);

        rozlorz();
    }
    /*

    function onStopDrag(e){
        var item = e.currentTarget;
        item.mouseEnabled = false;
            var i = item.name.substr(1);

            item.x  = aPos[main.nCurrentLevel][i][2]+item.regX;
            item.y  = aPos[main.nCurrentLevel][i][3]+item.regY;
            nCurrent++;
            console.log(nCurrent);

        if(nCurrent==nMax-2){
            console.log('pokaz cale');
            container.removeChild(white);
            white = new c.Bitmap(main.loadedData.getResult('a'+main.nCurrentLevel));
            white.x=  aPos[main.nCurrentLevel][1][0];
            white.y=  aPos[main.nCurrentLevel][1][1];
            container.addChild(white);
        }

    };
*/

    function playS(){
        if(globals.bSound){
            c.Sound.play('tap2');
        }
    }
    function usun(){
        ok.x = -120;

    }

    function shuffle(){
        wybor =[];
        var av = available;
        for(var i=0;i<nPary[main.nCurrentLevel];i++){
            wybor.push(av.splice(Math.floor(Math.random()*av.length),1)[0]);
        }
        wybor=wybor.concat(wybor);
        shuffle2(wybor);
        console.log(wybor);

    }

    function shuffle2(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;


        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    window.Game=Game;

}());
