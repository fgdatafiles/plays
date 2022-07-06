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
        console.log(h/w+'propotcje');
        if(h/w>0.70){
            $('.home').addClass('tablet');
            $('#stage-canvas').css('top', ((h/2)-$('body').height()/2)+'px');
        }
     

    }
    _main.resize=function(){


        w = $('.home').width();
        h = $('.home').height();

        this.selectedItem = Math.floor(Math.random()*8);

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
        
        actualPage.destroyAndReset(Step1)
    }
    function onPauseResume(){

        actualPage.unpauseGame();
        removePause();

    }
    function onReplayLevel(){
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
             {id:'all',src:'img/all.png'},
             {id:'babcia',src:'img/babcia.png'},
             {id:'kid',src:'img/kid.png'},
             {id:'girl2',src:'img/girl2.png'},
             {id:'piniata_girl1',src:'img/piniata_girl1.png'},
             {id:'piniata_victor',src:'img/piniata_victor.png'},
             {id:'piniata_valentino',src:'img/piniata_valentino.png'},
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
             {id:'logo_game3',src:'img/logo_game3.png'},
             {id:'intro_victor',src:'img/intro_victor.png'},
             {id:'intro_valentino',src:'img/intro_valentino.png'},
             {id:'intro_pala',src:'img/intro_pala.png'},
             {id:'intro_piniata',src:'img/intro_piniata.png'},
             {id:'piniata_game1',src:'img/piniata_game1.png'},

             /// HTP1 SCREEN

             {id:'htp1_bgd',src:'img/htp1_bgd.png'},

             {id:'htp1_p2',src:'img/htp1_p1.png'},
             {id:'htp1_p1',src:'img/htp1_p2.png'},
             {id:'htp1_t3',src:'img/htp1_t3.png'},
             {id:'htp1_t2',src:'img/htp1_t2.png'},
             {id:'htp1_t1',src:'img/htp1_t1.png'},
             {id:'hud_htp1',src:'img/hud_htp1.png'},


             /////// htp2 Screen

             {id:'htp2_bgd',src:'img/htp2_bgd.png'},
             {id:'htp2_p1',src:'img/htp2_p1.png'},
             {id:'htp2_t1',src:'img/htp2_t1.png'},
             {id:'hud_htp2',src:'img/hud_htp2.png'},

                ///////// GAMEOVER
             {id:'game_over_bgd',src:'img/game_over_bgd.png'},
             {id:'game_over_victor1',src:'img/game_over_victor1.png'},
             {id:'game_over_victor2',src:'img/game_over_victor2.png'},
             {id:'game_over_valentino1',src:'img/game_over_valentino1.png'},
             {id:'game_over_valentino2',src:'img/game_over_valentino2.png'},
             {id:'game_over_success',src:'img/gameover_success.png'},



             //GAME 1

             {id:'all',src:'img/all.png'},
             {id:'bat2',src:'img/bat2.png'},
             {id:'o0',src:'img/o0.png'},
             {id:'o0_0',src:'img/o0_0.png'},
             {id:'o0_1',src:'img/o0_1.png'},
             {id:'o0_2',src:'img/o0_2.png'},
             {id:'o1',src:'img/o1.png'},
             {id:'o1_0',src:'img/o1_0.png'},
             {id:'o1_1',src:'img/o1_1.png'},
             {id:'o1_2',src:'img/o1_2.png'},
             {id:'o2',src:'img/o2.png'},
             {id:'o2_0',src:'img/o2_0.png'},
             {id:'o2_1',src:'img/o2_1.png'},
             {id:'o2_2',src:'img/o2_2.png'},
             {id:'o3',src:'img/o3.png'},
             {id:'o3_0',src:'img/o3_0.png'},
             {id:'o3_1',src:'img/o3_1.png'},
             {id:'o3_2',src:'img/o3_2.png'},
             {id:'o4',src:'img/o4.png'},
             {id:'o4_0',src:'img/o4_0.png'},
             {id:'o4_1',src:'img/o4_1.png'},
             {id:'o4_2',src:'img/o4_2.png'},
             {id:'o5',src:'img/o5.png'},
             {id:'o5_0',src:'img/o5_0.png'},
             {id:'o5_1',src:'img/o5_1.png'},
             {id:'o5_2',src:'img/o5_2.png'},
             {id:'o6',src:'img/o6.png'},
             {id:'o6_0',src:'img/o6_0.png'},
             {id:'o6_1',src:'img/o6_1.png'},
             {id:'o6_2',src:'img/o6_2.png'},
             {id:'o7',src:'img/o7.png'},
             {id:'o7_0',src:'img/o7_0.png'},
             {id:'o7_1',src:'img/o7_1.png'},
             {id:'o7_2',src:'img/o7_2.png'},
             {id:'hz',src:'img/box.png'},
             {id:'bam',src:'img/bam.png'},
             {id:'hit',src:'img/hitArea.png'},
             {id:'game1_bgd',src:'img/game1_bgd.png'},

             {id:'hud_game1',src:'img/hud_game1.png'},
             {id:'down_holder',src:'img/down_holder.png'},
             {id:'chmura0',src:'img/chmura0.png'},
             {id:'chmura1',src:'img/chmura1.png'},
             {id:'chmura2',src:'img/chmura2.png'},
             {id:'chmura3',src:'img/chmura3.png'},
             {id:'chmura4',src:'img/chmura4.png'},
             {id:'chmura5',src:'img/chmura5.png'},
             {id:'chmura6',src:'img/chmura6.png'},
             {id:'chmura7',src:'img/chmura7.png'},

            // game2
             {id:'game2_bgd',src:'img/game2_bgd.png'},
             {id:'hud_game2',src:'img/hud_game2.png'},
             {id:'hit',src:'img/hitArea.png'},

             {id:'yell',src:'img/yellow.png'},


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
        console.log('loading complete')
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



