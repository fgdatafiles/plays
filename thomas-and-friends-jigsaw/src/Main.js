var ow=1640;
var oh=768;
var w,h,homeBtt,soundBtt,pageContainer,scaleS,legal;
(function(){
    'use strict';
    var actualPage;
    var t;

    var manifest;
    var logo;
    var helpAppla;

    var _main=function()
    {

    };

    _main.initialize=function() {


    };
    var Main=function()
    {
        
        this.initialize();
        t = this;
        this.mode =1;

        this.nWidth;
        this.nHeight;
        this.context;

        this.toonixAnim={
            "framerate":24,
            "images":["img/toonix.png"],
            "frames":[
                [1355, 268, 113, 122, 0, -19, -18],
                [225, 392, 113, 122, 0, -19, -18],
                [449, 392, 113, 121, 0, -19, -19],
                [1575, 392, 114, 118, 0, -20, -22],
                [1689, 392, 113, 118, 0, -23, -21],
                [1802, 392, 112, 117, 0, -26, -23],
                [1351, 392, 111, 119, 0, -26, -21],
                [1017, 268, 109, 123, 0, -28, -17],
                [113, 140, 110, 127, 0, -27, -13],
                [1008, 0, 110, 130, 0, -25, -10],
                [897, 0, 111, 133, 0, -22, -7],
                [672, 0, 112, 136, 0, -20, -4],
                [560, 0, 112, 137, 0, -17, -3],
                [336, 0, 112, 140, 0, -13, 0],
                [0, 0, 112, 140, 0, -9, 0],
                [112, 0, 112, 140, 0, -9, 0],
                [224, 0, 112, 140, 0, -7, 0],
                [448, 0, 112, 139, 0, -9, -1],
                [784, 0, 113, 134, 0, -11, -6],
                [1566, 0, 113, 128, 0, -14, -12],
                [1241, 140, 113, 125, 0, -18, -15],
                [1468, 268, 114, 122, 0, -20, -18],
                [793, 268, 112, 123, 0, -23, -17],
                [681, 268, 112, 123, 0, -23, -17],
                [0, 392, 112, 122, 0, -22, -18],
                [1014, 392, 113, 120, 0, -20, -20],
                [1462, 392, 113, 119, 0, -19, -21],
                [900, 392, 114, 120, 0, -18, -20],
                [1921, 268, 113, 122, 0, -18, -18],
                [1695, 268, 113, 122, 0, -18, -18],
                [453, 268, 114, 123, 0, -19, -17],
                [339, 268, 114, 123, 0, -18, -17],
                [567, 268, 114, 123, 0, -18, -17],
                [1808, 268, 113, 122, 0, -19, -18],
                [1582, 268, 113, 122, 0, -19, -18],
                [112, 392, 113, 122, 0, -19, -18],
                [787, 392, 113, 120, 0, -20, -20],
                [562, 392, 112, 121, 0, -23, -19],
                [674, 392, 113, 121, 0, -23, -19],
                [1239, 392, 112, 119, 0, -21, -21],
                [1127, 392, 112, 119, 0, -18, -21],
                [338, 392, 111, 121, 0, -16, -19],
                [905, 268, 112, 123, 0, -12, -17],
                [226, 268, 113, 124, 0, -8, -16],
                [1811, 140, 113, 124, 0, -6, -16],
                [1469, 140, 114, 124, 0, -4, -16],
                [1583, 140, 114, 124, 0, -2, -16],
                [1241, 268, 114, 123, 0, 0, -17],
                [1126, 268, 115, 123, 0, 0, -17],
                [1697, 140, 114, 124, 0, -3, -16],
                [786, 140, 114, 125, 0, -8, -15],
                [900, 140, 114, 125, 0, -12, -15],
                [1354, 140, 115, 125, 0, -16, -15],
                [671, 140, 115, 125, 0, -20, -15],
                [223, 140, 114, 127, 0, -24, -13],
                [1679, 0, 114, 128, 0, -26, -12],
                [0, 140, 113, 128, 0, -28, -12],
                [1793, 0, 112, 128, 0, -30, -12],
                [1341, 0, 112, 129, 0, -31, -11],
                [1230, 0, 111, 129, 0, -32, -11],
                [1453, 0, 113, 129, 0, -30, -11],
                [1118, 0, 112, 129, 0, -29, -11],
                [1905, 0, 112, 128, 0, -27, -12],
                [449, 140, 111, 126, 0, -24, -14],
                [114, 268, 112, 124, 0, -19, -16],
                [337, 140, 112, 126, 0, -15, -14],
                [560, 140, 111, 126, 0, -12, -14],
                [1128, 140, 113, 125, 0, -7, -15],
                [1014, 140, 114, 125, 0, -5, -15],
                [1924, 140, 114, 124, 0, -4, -16],
                [0, 268, 114, 124, 0, -2, -16]
            ],
            "animations":{
                "start1": {
                    "next": "start2",
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
                        35
                    ]
                },
                "start2": {
                    "next": "loop",
                    "speed": 1,
                    "frames": [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
                },
                "loop": {
                    "speed": 1,
                    "frames": [
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
                        65,
                        66,
                        67,
                        68,
                        69,
                        70,
                        48
                    ]
                },
                "stopMe": {"next": "stopMe", "speed": 1, "frames": [0, 0]}
            }
        };

        this.nCurrentLevel=0;
        this.time ="00:00";
        this.best ="00:00";
        this.mili;
        this.ow;
        this.oh;
        this.isPanoramic=false;
        this.animationInterval;
        this.helpBtt;
        this.nCurrentLevel=0;
        t=this;
    };

    _main=Main.prototype=new c.Container();

    _main.init=function()
    {
        initStage();
        loadGFX();
    };
    _main.resize=function(){


        w = $('.home').width();
        h = $('.home').height();
        if((w/h)>1.75){
            main.isPanoramic=true;

        }else{
            main.isPanoramic=false;
        }

        if(stage.scaleX) {
            scaleS = h / oh;
            stage.scale = scaleS;
            stage.canvas.width = w;
            stage.canvas.height =oh * scaleS;
            // this.nWidth - taka jest szerokosc canvasa zachowujac proporcje wysokosci. iinymi slowy 1640*skala
            this.nWidth = stage.canvas.width;
            this.nHeight = stage.canvas.height;

            if (pageContainer){

                pageContainer.x = -(1640 / 2) + ((w / scaleS) / 2);
                if((w/scaleS)<=1640) {
                    if(soundBtt)soundBtt.x = (w / scaleS) - 111;
                    if (legal)legal.x = w / scaleS - 160;
                }else{

                    if(legal)legal.x =(w / scaleS)/2+(ow/2) - 160;
                    if(soundBtt)soundBtt.x =(w / scaleS)/2+(ow/2) - 111;
                    if(homeBtt)homeBtt.x = pageContainer.x+ 50;

                }
            }
            stage.update();



        }

    };
    function onResize(){

        _main.resize();
    }
    function onOrientationChange(){
        _main.resize();

    }
    function initStage()
    {
        var canvas=document.getElementById('stage-canvas');
        _main.context=canvas.getContext('2d');
        _main.context.imageSmoothingEnabled = true;
        _main.context.imageSmoothingQuality = 'high';
        stage = new c.Stage(canvas);

        c.Ticker.timingMode=c.Ticker.RAF_SYNCHED;
        c.Ticker.framerate = 35;
        if (!c.Sound.initializeDefaultPlugins()) {return;}
        stage.enableMouseOver(30);
        c.Touch.enable(stage);
        c.Ticker.addEventListener('tick', stage);

        pageContainer=new c.Container();

        stage.addChildAt(pageContainer,0);


    }
    function addGlobalElements()
    {

        homeBtt = new  FrameBtt(main.loadedData.getResult('home'),main.loadedData.getResult('home_on'),'#ffed00');
        stage.addChild(homeBtt);
        homeBtt.addEventListener('click',onHome);
        homeBtt.x=50;
        homeBtt.y=20;
        homeBtt.stateClicked=true;


        soundBtt = new  OnOffBtt(main.loadedData.getResult('sound_on'),'',main.loadedData.getResult('sound_off'),'Arial');

        stage.addChild(soundBtt);
        soundBtt.cursor ='pointer';
        soundBtt.x =_main.nWidth;
        soundBtt.y=20;

        _main.resize();


    }




    _main.onHelp = function(){

        helpAppla = new HelpAppla();

        stage.addChildAt(helpAppla,1);
        homeBtt.visible = false;
        soundBtt.visible  = false;
        helpAppla.addEventListener('closeHelp',onCloseHelp);

    }


    function onHome(){

        if(actualPage instanceof Step1){

        }else if(actualPage instanceof Game){
            actualPage.dispatchStep1();
        }else{
           actualPage.dispatchStep1();
        }
    }
    function onCloseHelp(e){
        helpAppla.removeEventListener('closeHelp',onCloseHelp);
        stage.removeChild(helpAppla);
        helpAppla = null;
        soundBtt.visible =true;
        homeBtt.visible = true;
        t.visible = true;
    }


    function loadGFX()
    {

         manifest=[

             {id:'bgd',src:'img/bgd_intro.png'},
             {id:'bgd_game1',src:'img/b1.png'},
             {id:'bgd_game2',src:'img/b2.png'},
             {id:'bgd_game3',src:'img/b3.png'},
             {id:'sound_on',src:'img/sound_on.png'},
             {id:'sound_off',src:'img/sound_off.png'},
             {id:'intro_logo',src:'img/intro_logo.png'},
             {id:'intro_logo_game',src:'img/intro_logo_game.png'},
             {id:'intro_logo_over',src:'img/intro_logo_over.png'},
             {id:'logo_cartoonito',src:'img/logo_cartoonito.png'},

             


             {id:'legal',src:'img/legal.png'},
             {id:'home',src:'img/home.png'},
             {id:'home_on',src:'img/home.png'},
             {id:'play_on',src:'img/play_on.png'},
             {id:'play_off',src:'img/play_off.png'},


             {id:'intro_c0',src:'img/intro_c0.png'},
             {id:'intro_c1',src:'img/intro_c1.png'},
             {id:'intro_c2',src:'img/intro_c2.png'},
             {id:'intro_bl',src:'img/intro_bl.png'},
             
             
             {id:'c0',src:'img/jigsaw/c0.png'},
             {id:'s0',src:'img/jigsaw/s0.png'},
             {id:'a0',src:'img/jigsaw/a0.png'},

             {id:'c1',src:'img/jigsaw/c1.png'},
             {id:'s1',src:'img/jigsaw/s1.png'},
             {id:'a1',src:'img/jigsaw/a1.png'},

             {id:'c2',src:'img/jigsaw/c2.png'},
             {id:'s2',src:'img/jigsaw/s2.png'},
             {id:'a2',src:'img/jigsaw/a2.png'},
             {id:'c3',src:'img/jigsaw/c3.png'},
             {id:'s3',src:'img/jigsaw/s3.png'},
             {id:'a3',src:'img/jigsaw/a3.png'},
             {id:'c4',src:'img/jigsaw/c4.png'},
             {id:'s4',src:'img/jigsaw/s4.png'},
             {id:'a4',src:'img/jigsaw/a4.png'},
             {id:'c5',src:'img/jigsaw/c5.png'},
             {id:'s5',src:'img/jigsaw/s5.png'},
             {id:'a5',src:'img/jigsaw/a5.png'},
             {id:'c6',src:'img/jigsaw/c6.png'},
             {id:'s6',src:'img/jigsaw/s6.png'},
             {id:'a6',src:'img/jigsaw/a6.png'},
             {id:'c7',src:'img/jigsaw/c7.png'},
             {id:'s7',src:'img/jigsaw/s7.png'},
             {id:'a7',src:'img/jigsaw/a7.png'},
             {id:'c8',src:'img/jigsaw/c8.png'},
             {id:'s8',src:'img/jigsaw/s8.png'},
             {id:'a8',src:'img/jigsaw/a8.png'},
             {id:'c9',src:'img/jigsaw/c9.png'},
             {id:'s9',src:'img/jigsaw/s9.png'},
             {id:'a9',src:'img/jigsaw/a9.png'},
             {id:'c10',src:'img/jigsaw/c10.png'},
             {id:'s10',src:'img/jigsaw/s10.png'},
             {id:'a10',src:'img/jigsaw/a10.png'},
             {id:'c11',src:'img/jigsaw/c11.png'},
             {id:'s11',src:'img/jigsaw/s11.png'},
             {id:'a11',src:'img/jigsaw/a11.png'},
             {id:'p0_1',src:'img/jigsaw/0_1.png'},
             {id:'p0_2',src:'img/jigsaw/0_2.png'},
             {id:'p0_3',src:'img/jigsaw/0_3.png'},
             {id:'p0_4',src:'img/jigsaw/0_4.png'},
             {id:'p0_5',src:'img/jigsaw/0_5.png'},
             {id:'p0_6',src:'img/jigsaw/0_6.png'},

             {id:'p1_1',src:'img/jigsaw/1_1.png'},
             {id:'p1_2',src:'img/jigsaw/1_2.png'},
             {id:'p1_3',src:'img/jigsaw/1_3.png'},
             {id:'p1_4',src:'img/jigsaw/1_4.png'},
             {id:'p1_5',src:'img/jigsaw/1_5.png'},
             {id:'p1_6',src:'img/jigsaw/1_6.png'},

             {id:'p2_1',src:'img/jigsaw/2_1.png'},
             {id:'p2_2',src:'img/jigsaw/2_2.png'},
             {id:'p2_3',src:'img/jigsaw/2_3.png'},
             {id:'p2_4',src:'img/jigsaw/2_4.png'},
             {id:'p2_5',src:'img/jigsaw/2_5.png'},
             {id:'p2_6',src:'img/jigsaw/2_6.png'},

             {id:'p3_1',src:'img/jigsaw/3_1.png'},
             {id:'p3_2',src:'img/jigsaw/3_2.png'},
             {id:'p3_3',src:'img/jigsaw/3_3.png'},
             {id:'p3_4',src:'img/jigsaw/3_4.png'},
             {id:'p3_5',src:'img/jigsaw/3_5.png'},
             {id:'p3_6',src:'img/jigsaw/3_6.png'},

             {id:'p4_1',src:'img/jigsaw/4_1.png'},
             {id:'p4_2',src:'img/jigsaw/4_2.png'},
             {id:'p4_3',src:'img/jigsaw/4_3.png'},
             {id:'p4_4',src:'img/jigsaw/4_4.png'},
             {id:'p4_5',src:'img/jigsaw/4_5.png'},
             {id:'p4_6',src:'img/jigsaw/4_6.png'},

             {id:'p5_1',src:'img/jigsaw/5_1.png'},
             {id:'p5_2',src:'img/jigsaw/5_2.png'},
             {id:'p5_3',src:'img/jigsaw/5_3.png'},
             {id:'p5_4',src:'img/jigsaw/5_4.png'},
             {id:'p5_5',src:'img/jigsaw/5_5.png'},
             {id:'p5_6',src:'img/jigsaw/5_6.png'},


             {id:'p6_1',src:'img/jigsaw/6_1.png'},
             {id:'p6_2',src:'img/jigsaw/6_2.png'},
             {id:'p6_3',src:'img/jigsaw/6_3.png'},
             {id:'p6_4',src:'img/jigsaw/6_4.png'},
             {id:'p6_5',src:'img/jigsaw/6_5.png'},
             {id:'p6_6',src:'img/jigsaw/6_6.png'},

             {id:'p7_1',src:'img/jigsaw/7_1.png'},
             {id:'p7_2',src:'img/jigsaw/7_2.png'},
             {id:'p7_3',src:'img/jigsaw/7_3.png'},
             {id:'p7_4',src:'img/jigsaw/7_4.png'},
             {id:'p7_5',src:'img/jigsaw/7_5.png'},
             {id:'p7_6',src:'img/jigsaw/7_6.png'},

             {id:'p8_1',src:'img/jigsaw/8_1.png'},
             {id:'p8_2',src:'img/jigsaw/8_2.png'},
             {id:'p8_3',src:'img/jigsaw/8_3.png'},
             {id:'p8_4',src:'img/jigsaw/8_4.png'},
             {id:'p8_5',src:'img/jigsaw/8_5.png'},
             {id:'p8_6',src:'img/jigsaw/8_6.png'},


             {id:'p9_1',src:'img/jigsaw/9_1.png'},
             {id:'p9_2',src:'img/jigsaw/9_2.png'},
             {id:'p9_3',src:'img/jigsaw/9_3.png'},
             {id:'p9_4',src:'img/jigsaw/9_4.png'},
             {id:'p9_5',src:'img/jigsaw/9_5.png'},
             {id:'p9_6',src:'img/jigsaw/9_6.png'},

             {id:'p10_1',src:'img/jigsaw/10_1.png'},
             {id:'p10_2',src:'img/jigsaw/10_2.png'},
             {id:'p10_3',src:'img/jigsaw/10_3.png'},
             {id:'p10_4',src:'img/jigsaw/10_4.png'},
             {id:'p10_5',src:'img/jigsaw/10_5.png'},
             {id:'p10_6',src:'img/jigsaw/10_6.png'},

             {id:'p11_1',src:'img/jigsaw/11_1.png'},
             {id:'p11_2',src:'img/jigsaw/11_2.png'},
             {id:'p11_3',src:'img/jigsaw/11_3.png'},
             {id:'p11_4',src:'img/jigsaw/11_4.png'},
             {id:'p11_5',src:'img/jigsaw/11_5.png'},
             {id:'p11_6',src:'img/jigsaw/11_6.png'}

             
             
             
             

        ];
        startLoading();
    }

    function startLoading(){
        var pre=new Preloader(manifest);
        pageContainer.addChild(pre);
        pre.addEventListener('completed',onLoaderComplete);
        _main.resize();


    }
    function onLoaderComplete(e){
        console.log('preloader_complete');
        t.loadedData= e.target.queue;

        addGlobalElements();
        var step1=new Step1();
        changeScreen(step1);
        window.addEventListener('orientationchange',onOrientationChange);
        window.addEventListener('resize',onResize);
    }
    function changeScreen(e){
        if(_main.animationInterval)clearIntervalI(_main.animationInterval);
        if(actualPage)
        {
            actualPage.mouseEnabled = false;
            clear(actualPage);
        }
        actualPage=e;
        pageContainer.addChild(e);
        actualPage.addEventListener('changePage',onScreenChange);
        _main.resize();
    }

    function  onScreenChange(e)
    {
        e.preventDefault=true;
        var page= new e.param();
        if(typeof page == 'object')
        {
            changeScreen(page);
        }
        else
        {
            console.log('error: class doesnt exist');
        }
    }
    function clear(ttt)
    {
        actualPage.alpha=1;
        while(ttt.numChildren)
        {
            if(typeof ttt.getChildAt(0).removeAllChildren=== 'function')
            {
                ttt.getChildAt(0).removeAllChildren();
            }
            if(ttt.getChildAt(0).htmlElement!=undefined)
            {

                ttt.getChildAt(0).htmlElement.parentNode.removeChild(ttt.getChildAt(0).htmlElement);
            }
            ttt.removeChildAt(0);
        }
        ttt.parent.removeChild(t);
    }
    window.Main=Main;
}());

