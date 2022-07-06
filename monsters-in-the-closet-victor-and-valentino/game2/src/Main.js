var tickerTween,ticker,ticker_bgd,t_bgd1;
var ow=1640;
var oh=680;
var w,h,pauseBtt,soundBtt,pageContainer,scaleS,backBtt,logo_game,homeBtt,pauseScreen;
var actualClassLevel,nCurrentLevel;
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

        w = $('.home').width();
        h = $('.home').height();
        console.log(h/w+'propotcje');
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
        c.Ticker.framerate = 35;
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
                  "minigametitle":'nvs',
                  "gamelaunch": "1",
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
/*
        logo_game = new  c.Bitmap(main.loadedData.getResult('logo_game'));
        stage.addChild(logo_game);
        logo_game.addEventListener('click',onHome);
        logo_game.x=120;
        logo_game.y=11;
        logo_game.stateClicked=true;
*/

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


        pauseScreen  = new PauseScreen();
        pauseScreen.addEventListener('back',onBackToStage1);
        pauseScreen.addEventListener('resume',onPauseResume);
        pauseScreen.addEventListener('replay',onReplayLevel);
        pageContainer.addChild(pauseScreen);

    }


    function onBackToStage1(){

        removePause();
        actualClassLevel = Step1;
        actualPage.destroyAndReset()
    }
    function onPauseResume(){

        actualPage.unpauseGame();
        removePause();

    }
    function onReplayLevel(){

        if(nCurrentLevel==0) {
            actualClassLevel = Level1;

        }else{
            actualClassLevel = Level2;
        }
        actualPage.destroyAndReset()
        removePause();
    }


    function removePause(){
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
             {id:'logo_cn',src:'img/cn_logo.png'},
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
             {id:'m0',src:'img/m0.png'},
             {id:'m1',src:'img/m1.png'},
             {id:'m2',src:'img/m2.png'},
             {id:'m3',src:'img/m3.png'},
             {id:'m4',src:'img/m4.png'},
             {id:'m5',src:'img/m5.png'},
             {id:'m6',src:'img/m6.png'},
             {id:'m7',src:'img/m7.png'},
             {id:'m8',src:'img/m8.png'},
             {id:'m9',src:'img/m9.png'},
             {id:'c0',src:'img/c0.png'},
             {id:'c1',src:'img/c1.png'},
             {id:'c2',src:'img/c2.png'},
             {id:'c3',src:'img/c3.png'},
             {id:'c4',src:'img/c4.png'},
             {id:'c5',src:'img/c5.png'},
             {id:'c6',src:'img/c6.png'},
             {id:'c7',src:'img/c7.png'},
             {id:'c8',src:'img/c8.png'},
             {id:'c9',src:'img/c9.png'},


             {id:'victor_intro',src:'img/victor_intro.png'},
             {id:'valentino_intro',src:'img/valentino_intro.png'},
             {id:'logo_game2',src:'img/logo_game2.png'},
             {id:'logo_game2_small',src:'img/logo_game2_small.png'},
             {id:'start_bgd',src:'img/start_bgd.png'},
             {id:'htp_bgd_title',src:'img/htp_bgd_title.png'},
             {id:'htp_bgd',src:'img/htp_bgd.png'},
             {id:'level_complete_bgd',src:'img/level_complete_bgd.png'},
             {id:'victor_level_complete',src:'img/victor_level_complete.png'},
             {id:'valentino_level_complete',src:'img/valentino_level_complete.png'},
             {id:'htp1',src:'img/htp1.png'},
             {id:'htp2',src:'img/htp2.png'},
             {id:'hud_bgd0',src:'img/hud_bgd_l1.png'},
             {id:'hud_bgd1',src:'img/hud_bgd_l2.png'},
             {id:'plus',src:'img/plus.png'},
             {id:'minus',src:'img/minus.png'},

             {id:'logo_intro',src:'img/logo_intro.png'},
             {id:'game_level1',src:'img/game_level1_bgd.png'},
             {id:'game_level2',src:'img/game_level2_bgd.png'},


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



