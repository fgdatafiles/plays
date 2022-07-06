var tickerTween,ticker,ticker_bgd,t_bgd1;
var ow=1640;
var oh=680;
var w,h,pauseBtt,soundBtt,pageContainer,scaleS,backBtt,logo_game,pauseScreen;
var actualClassLevel;
(function(){
    'use strict';
    var actualPage;
    var t;
    var manifest;
    var logo;
    var helpAppla;

  function Main()
    {
        this.Container_constructor();
        this.init();
        t = this;

        this.nWidth;
        this.nHeight;
        this.context;
        this.scale;
        this.ow;
        this.oh;
        this.nWidth=1640;
        this.nHeight=680;
        this.nCurrentLevel=0;
    };

    var _main = c.extend(Main, c.Container);

    _main.init=function()
    {
        initStage();
        loadGFX();
    };

    function updateTopPos(){

        w = $('.home').width();
        h = $('.home').height();
        
        if(h/w>0.70){
            $('.home').addClass('tablet');
            $('#stage-canvas').css('top', ((h/2)-$('body').height()/2)+'px');
        }
        /*else{
            $('.home').removeClass('tablet');
            $('#stage-canvas').css('top', '0');
        }*/

    }
    _main.resize=function(){

        w = $('.home').width();
        h = $('.home').height();
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
                        pauseBtt.x = pageContainer.x+ 5;
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
        var canvas=document.getElementById('stage-canvas');
        _main.context=canvas.getContext('2d');
        _main.context.imageSmoothingEnabled = true;
        _main.context.imageSmoothingQuality = 'low';
        stage = new c.Stage(canvas);

        c.Ticker.timingMode=c.Ticker.RAF_SYNCHED;
        c.Ticker.framerate = 30;
        if (!c.Sound.initializeDefaultPlugins()) {return;}
        stage.enableMouseOver(30);
        c.Touch.enable(stage);
        c.Ticker.addEventListener('tick', stage);

        pageContainer=new c.Container();

        stage.addChildAt(pageContainer,0);

		turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "game launch",
                "gamelaunch": "1",
                "minigametitle":'nvs',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": 'nvs',
                "gamemilestones": 'nvs',
                "gamemap": 'nvs',
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
			
        });
		updateTopPos();
    }
    function addGlobalElements()
    {
        console.log('adding global element')
        pauseBtt = new  FrameBtt(main.loadedData.getResult('pause_off'),main.loadedData.getResult('pause_on'),'#ffed00');
        stage.addChild(pauseBtt);
        pauseBtt.addEventListener('click',onPauseGame);
        pauseBtt.x=5;
        pauseBtt.y=20;


        backBtt = new  FrameBtt(main.loadedData.getResult('back'),main.loadedData.getResult('back_off'),'#ffed00');
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

        ticker_bgd=new c.Bitmap(main.loadedData.getResult('ticker_bgd'));
        ticker_bgd.x = 0;
        ticker_bgd.y = 637;
        ticker_bgd.mouseEnabled=false;

        ticker = new c.Container();

        t_bgd1 = new c.Bitmap(main.loadedData.getResult('ticker_txt'));
        t_bgd1.y = 12;
        ticker.addChild(t_bgd1);

        ticker.x = 0;
        ticker.y = 637;

        pageContainer.addChild(ticker_bgd,ticker);
   

        _main.resize();


    }

    function onPauseGame(){

        if(actualPage.pauseGame){
            actualPage.pauseGame();
        }
        globals.isPaused = true;

        pauseScreen  = new PauseScreen();
        pauseScreen.addEventListener('back',onBackToStage1);
        pauseScreen.addEventListener('resume',onPauseResume);
        pauseScreen.addEventListener('replay',onReplayLevel);
        pageContainer.addChild(pauseScreen);
            

    }


    function onBackToStage1(){

        removePause();
        
        actualPage.destroyAndReset(Step1)
    }
    function onPauseResume(){

        actualPage.unpauseGame();
        removePause();

    }
    function onReplayLevel(){
        actualPage.destroyAndReset();
        removePause();
    }


    function removePause(){
        globals.isPaused = false;
        pauseBtt.visible = true;
        pageContainer.removeChild(pauseScreen);
        pauseScreen = null;

    }

    function onHome(){
        window.location.href='../index.html?pageName='+params.pageName+'&cid='+params.cid;
    }

    function loadGFX()
    {

         manifest=[

             {id:'ticker_bgd',src:'img/ticker_bgd.png'},
             {id:'ticker_txt',src:'img/ticker_text.png'},
             {id:'pause_bgd',src:'img/pause_bgd.png'},
             {id:'pause_screen_shadow',src:'img/pause_screen_shadow.png'},
             {id:'pause_screen_glow',src:'img/pause_screen_glow.png'},
             {id:'pausescreen_restartBtt_on',src:'img/pausescreen_restartBtt_on.png'},
             {id:'pausescreen_restartBtt_off',src:'img/pausescreen_restartBtt_off.png'},
             {id:'pausescreen_backBtt_on',src:'img/pausescreen_backBtt_on.png'},
             {id:'pausescreen_backBtt_off',src:'img/pausescreen_backBtt_off.png'},



             {id:'3',src:'img/timer/3.png'},
             {id:'2',src:'img/timer/2.png'},
             {id:'1',src:'img/timer/1.png'},


            /// START SCREEN
             {id:'start_bgd',src:'img/start_bgd.png'},
             {id:'logo_intro',src:'img/logo_intro.png'},
             {id:'game5_logo',src:'img/game5_logo.png'},
             {id:'logo_cn',src:'img/cn_logo.png'},


             {id:'game_over_right',src:'img/game_over_right.png'},
             {id:'game_over_left',src:'img/game_over_left.png'},
             {id:'game_over_appla',src:'img/game_over_appla.png'},
             {id:'game_over_bgd',src:'img/game_over_bgd.png'},
             {id:'game_bgd',src:'img/game_bgd.png'},
             {id:'game_overlay',src:'img/game_overlay.png'},
             {id:'icon1',src:'img/icon1.png'},
             {id:'icon2',src:'img/icon2.png'},
             {id:'icon3',src:'img/icon3.png'},
             {id:'icon4',src:'img/icon4.png'},
             {id:'icon5',src:'img/icon5.png'},
             {id:'icon6',src:'img/icon6.png'},
             {id:'icon7',src:'img/icon7.png'},
             {id:'icon0',src:'img/icon0.png'},
             {id:'htp_header',src:'img/htp_header.png'},
             {id:'htp_arrow',src:'img/htp_arrow.png'},
             {id:'htp_overlay',src:'img/htp_overlay.png'},

             {id:'htp_dymek1',src:'img/htp_dymek1.png'},
             {id:'htp_dymek0',src:'img/htp_dymek0.png'},
             {id:'dymek2',src:'img/dymek2.png'},
             {id:'dymek1',src:'img/dymek1.png'},
             {id:'dymek0',src:'img/dymek0.png'},
             //{id:'dymek2',src:'img/dymek2.png'},
             //{id:'dymek3',src:'img/dymek3.png'},
             {id:'sq',src:'img/sq.png'},
             {id:'life_icon',src:'img/life_icon.png'},

             {id:'hud_bgd',src:'img/hud_bgd.png'},
             {id:'customer1',src:'img/customer1.png'},
             {id:'customer2',src:'img/customer2.png'},
             {id:'customer3',src:'img/customer3.png'},
             {id:'customer4',src:'img/customer4.png'},
             {id:'customer5',src:'img/customer5.png'},
             {id:'customer6',src:'img/customer6.png'},



             {id:'btt_bgd_on',src:'img/btt_bgd_on.png'},
             {id:'btt_bgd',src:'img/btt_bgd.png'},

             {id:'play_on',src:'img/play_on.png'},
             {id:'play_off',src:'img/play_off.png'},
             {id:'sound_on',src:'img/sound_on.png'},
             {id:'sound_off',src:'img/sound_off.png'},
             {id:'pause_on',src:'img/pause_on.png'},
             {id:'pause_off',src:'img/pause_off.png'},
             {id:'home',src:'img/home_btt.png'},
             {id:'home_on',src:'img/home_btt.png'},

             {id:'back',src:'img/back_on.png'},
             {id:'back_off',src:'img/back_off.png'}


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
        console.log('loading complete');
        addGlobalElements();
        var step1=new Step1();
        changeScreen(step1);
        window.addEventListener('orientationchange',onOrientationChange);
        window.addEventListener('resize',onResize);
    }

    function changeScreen(e){
        
        if(actualPage)
        {
            actualPage.mouseEnabled = false;
            clear(actualPage);
        }
        actualPage=e;
        pageContainer.addChildAt(e,1);
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
    window.Main = c.promote(Main, "Container");

}());



