var ticker;
var ow=1640;
var music;
var oh=680;
var w,h,pauseBtt,soundBtt,pageContainer,scaleS,backBtt,logo_game,homeBtt,pauseScreen;
var actualClassLevel,nCurrentLevel;
var home;
(function(){
    'use strict';
    var actualPage;
    var t;
    var manifest;



  function Main()
    {

        this.Container_constructor();
        t = this;
        this.nWidth;
        this.nHeight;
        this.context;
        this.scale;
        this.ow;
        this.oh;
        this.nCurrentLevel=0;
        this.setup();
    }
    var _main = c.extend(Main, c.Container);
    _main.setup=function()
    {
        initStage();
        loadGFX();


    };
    function updateTopPos(){


        w = home.width();
        h = home.height();
        if(h/w>0.70){
            $('.home').addClass('tablet');
            $('#stage-canvas').css('top', ((h/2)-$('body').height()/2)+'px');
        }
    }
    _main.resize=function(){


        w = home.width();
        h = home.height();
        if(stage.scaleX) {
            scaleS = h / oh;
            stage.scale = scaleS;
            stage.canvas.width = w;
            stage.canvas.height =oh * scaleS;
            // this.nWidth - taka jest szerokosc canvasa zachowujac proporcje wysokosci. iinymi slowy 1640*skala
            this.nWidth = stage.canvas.width;
            this.nHeight = stage.canvas.height;

            if (pageContainer){

                pageContainer.x = -(ow / 2) + ((w / scaleS) / 2);
                if((w/scaleS)<=ow) {
                    if(soundBtt)soundBtt.x = (w / scaleS) - 78;
                }else{

                    if(soundBtt){
                        soundBtt.x =(w / scaleS)/2+(ow/2) - 78;
                        backBtt.x = pageContainer.x+ 5;
                    }
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
        home = $('.home');
        var canvas=document.getElementById('stage-canvas');
        _main.context=canvas.getContext('2d');
        _main.context.imageSmoothingEnabled = true;
        _main.context.imageSmoothingQuality = 'low';
        stage = new c.Stage(canvas);

        c.Ticker.timingMode=c.Ticker.RAF_SYNCHED;
        c.Ticker.framerate = 60;
        if (!c.Sound.initializeDefaultPlugins()) {return;}
        stage.enableMouseOver(30);
        c.Touch.enable(stage);
        c.Ticker.addEventListener('tick', stage);

        pageContainer=new c.Container();

        stage.addChildAt(pageContainer,0);


	updateTopPos();

    }
    function addGlobalElements()
    {

        backBtt = new  FrameBtt(main.loadedData.getResult('back_off'),main.loadedData.getResult('back'),'#ffed00');
        stage.addChild(backBtt);
        backBtt.addEventListener('click',onHome);
        backBtt.x=5;
        backBtt.y=20;
        backBtt.stateClicked=true;


        soundBtt = new  OnOffBtt(main.loadedData.getResult('sound_on'),'',main.loadedData.getResult('sound_off'),'Arial');
        stage.addChild(soundBtt);
        soundBtt.cursor ='pointer';
        soundBtt.x =_main.nWidth;
        soundBtt.y=20;

           
        _main.resize();
        let ticker = new  c.Bitmap(main.loadedData.getResult('ticker'))
        t.addChild(ticker);
        ticker.y=680-ticker.image.height;
        pageContainer.addChild(ticker);
    }


    function onHome(){

        window.location.href='./index.html';
    }

    function loadGFX()
    {

         manifest=[


             {id:'ticker',src:'img/ticker.png'},
             {id:'click',src:'img/animate.png'},
             {id:'confetti',src:'img/confetti.png'},
             {id:'p1',src:'img/p1.png'},
             {id:'p2',src:'img/p2.png'},
             {id:'p1_lc',src:'img/p1_lc.png'},
             {id:'p2_lc',src:'img/p2_lc.png'},
             {id:'p1_go',src:'img/p1_go.png'},
             {id:'mobile',src:'img/mobile.png'},


             {id:'1_1',src:'img/1_1.png'},
             {id:'1_2',src:'img/1_2.png'},
             {id:'1_3',src:'img/1_3.png'},
             {id:'1_4',src:'img/1_4.png'},
             {id:'1_5',src:'img/1_5.png'},
             {id:'1_6',src:'img/1_6.png'},
             {id:'1_7',src:'img/1_7.png'},
             {id:'1_8',src:'img/1_8.png'},
             {id:'1_9',src:'img/1_9.png'},
             {id:'1_10',src:'img/1_10.png'},


             {id:'2_1',src:'img/2_1.png'},
             {id:'2_2',src:'img/2_2.png'},
             {id:'2_3',src:'img/2_3.png'},
             {id:'2_4',src:'img/2_4.png'},
             {id:'2_5',src:'img/2_5.png'},
             {id:'2_6',src:'img/2_6.png'},
             {id:'2_7',src:'img/2_7.png'},
             {id:'2_8',src:'img/2_8.png'},
             {id:'2_9',src:'img/2_9.png'},
             {id:'2_10',src:'img/2_10.png'},
             {id:'2_11',src:'img/2_11.png'},
             {id:'2_12',src:'img/2_12.png'},
             {id:'2_13',src:'img/2_13.png'},
             {id:'2_14',src:'img/2_14.png'},
             {id:'2_15',src:'img/2_15.png'},
             
             {id:'3',src:'img/timer/3.png'},
             {id:'2',src:'img/timer/2.png'},
             {id:'1',src:'img/timer/1.png'},


             {id:'htp_bgd',src:'img/htp_bgd.png'},
             {id:'htp1',src:'img/htp1.png'},
             {id:'htp2',src:'img/htp2.png'},
             {id:'htp3',src:'img/htp3.png'},
             {id:'cursor',src:'img/cursor.png'},
             {id:'logo_game',src:'img/logo_game.png'},
             {id:'logo_cn',src:'img/logo_cn.png'},
             {id:'start_bgd',src:'img/start_bgd.jpg'},
             {id:'game_level_complete',src:'img/game_level_complete.jpg'},
             {id:'mobile',src:'img/mobile.png'},
             {id:'level1',src:'img/start_bgd.jpg'},
             {id:'level2',src:'img/level2.jpg'},

             {id:'hud2',src:'img/hud2.png'},
             {id:'hud1',src:'img/hud1.png'},
             {id:'hud_mini1',src:'img/hud_mini1.png'},
             {id:'hud_mini2',src:'img/hud_mini2.png'},


             {id:'btt_bgd_on',src:'img/btt_bgd_on.png'},
             {id:'btt_bgd',src:'img/btt_bgd.png'},


             {id:'sound_on',src:'img/sound_on.png'},
             {id:'sound_off',src:'img/sound_off.png'},


             {id:'back',src:'img/back_on.png'},
             {id:'back_off',src:'img/back_off.png'},
             {id:'logo_game',src:'img/logo_game.png'}


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

        t.loadedData= e.target.queue;

        addGlobalElements();
        var step1=new Step1();
        changeScreen(step1);
        window.addEventListener('orientationchange',onOrientationChange);
        window.addEventListener('resize',onResize);
    }

    function changeScreen(e){

        if(actualPage)
        {
            console.log('tuz przed clearem');


            clear(actualPage);
        }
        actualPage=e;
        pageContainer.addChildAt(e,1);
        actualPage.addEventListener('changePage',onScreenChange);

    }

    function  onScreenChange(e)
    {
        console.log('onScreenChange');
        //e.preventDefault=true;
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
        console.log('clearMe')


        while(ttt.numChildren)
        {
            if(typeof ttt.getChildAt(0).removeAllChildren=== 'function')
            {
                ttt.getChildAt(0).removeAllChildren();
            }
            if(ttt.getChildAt(0).htmlElement!==undefined)
            {

                ttt.getChildAt(0).htmlElement.parentNode.removeChild(ttt.getChildAt(0).htmlElement);
            }
            ttt.removeChildAt(0);
        }
        ttt.parent.removeChild(t);

    }
    window.Main = c.promote(Main, "Container");

}());



