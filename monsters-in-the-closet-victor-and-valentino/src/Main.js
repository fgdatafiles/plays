var t_bgd1;
var ow=1640;
var oh=680;
var tickerTween;
var w,h,homeBtt,soundBtt,pageContainer,scaleS,ticker,ticker_bgd;
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
    };

    var _main = c.extend(Main, c.Container);

    _main.setup=function()
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

                    if(soundBtt)soundBtt.x =(w / scaleS)/2+(ow/2) - 78;
                    if(homeBtt)homeBtt.x = pageContainer.x+ 5;
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
        c.Ticker.framerate = 32;
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
                  "minigametitle":'nvs',
                  "interaction": "game launch",
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
        console.log($(window).height()/$(window).width()+'proporja')
        updateTopPos();

    }
    function addGlobalElements()
    {

        homeBtt = new  FrameBtt(main.loadedData.getResult('home'),main.loadedData.getResult('home_on'),'#ffed00');
        stage.addChild(homeBtt);
        homeBtt.addEventListener('click',onHome);
        homeBtt.x=5;
        homeBtt.y=20;
        homeBtt.stateClicked=true;


        soundBtt = new  OnOffBtt(main.loadedData.getResult('sound_on'),'',main.loadedData.getResult('sound_off'),'Arial');

        stage.addChild(soundBtt);
        soundBtt.cursor ='pointer';
        soundBtt.x =_main.nWidth;
        soundBtt.y=20;

        _main.resize();

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
        ticker.x = 0;
        tickerTween = TweenMax.to(t_bgd1,20,{x:-1640,repeat:-1,ease:Linear.easeNone});

    }




    function onHome(){

        if(actualPage instanceof Step1){

        }else {
            skip_map_intro =0;
            var evt = new c.Event('changePage');
            evt.param = Step1;
            onScreenChange(evt);
        }

    }

    function loadGFX()
    {

         manifest=[

             {id:'intro_bgd',src:'img/intro_bgd.png'},
             {id:'logo_cn',src:'img/cn_logo.png'},
             {id:'logo_intro',src:'img/logo_intro.png'},
             {id:'logo_split',src:'img/logo_split.png'},
             {id:'split_victor',src:'img/split_victor.png'},
             {id:'split_valentino',src:'img/split_valentino.png'},


             {id:'suwak',src:'img/suwak.png'},
             {id:'split_underworld_bgd',src:'img/split_underworld_bgd.png'},
             {id:'split_monte_bgd',src:'img/split_monte_bgd.png'},
             {id:'split_monte',src:'img/split_monte.png'},
             {id:'split_underworld',src:'img/split_underworld.png'},
             {id:'shadow_intro',src:'img/shadow_intro.png'},
             {id:'ticker_bgd',src:'img/ticker_bgd.png'},
             {id:'tour_logo_homepage',src:'img/tour_logo_homepage.png'},
             {id:'valentino_intro',src:'img/valentino_intro.png'},
             {id:'valentino_glow',src:'img/glow_valentino.png'},
             {id:'victor_intro',src:'img/victor_intro.png'},
             {id:'glow_intro',src:'img/glow.png'},
             {id:'ticker_txt',src:'img/ticker_text.png'},
             {id:'intro_door',src:'img/intro_door.png'},



             // MAPY
             {id:'switch_btt_under',src:'img/switch_btt_under.png'},
             {id:'switch_btt_under_on',src:'img/switch_btt_under_on.png'},
             {id:'switch_btt_monte',src:'img/switch_btt_monte.png'},
             {id:'switch_btt_monte_on',src:'img/switch_btt_monte_on.png'},
             {id:'map_logo_monte',src:'img/map_logo_monte.png'},
             {id:'map_logo_under',src:'img/map_logo_underworld.png'},
             {id:'map_monte',src:'img/map_monte.png'},
             {id:'map_underworld',src:'img/map_underworld.png'},
             {id:'skip_intro_btt_on',src:'img/skip_intro_btt_on.png'},
             {id:'skip_intro_btt_off',src:'img/skip_intro_btt_off.png'},
             {id:'monte_intro_1',src:'img/monte_intro_1.png'},
             {id:'monte_intro_2',src:'img/monte_intro_2.png'},
             {id:'monte_intro_3',src:'img/monte_intro_3.png'},
             {id:'monte_intro_4',src:'img/monte_intro_4.png'},
             {id:'foot_prints3',src:'img/foot_prints4.png'},
             {id:'foot_prints2',src:'img/foot_prints3.png'},
             {id:'foot_prints1',src:'img/foot_prints2.png'},
             {id:'foot_prints0',src:'img/foot_prints1.png'},
             {id:'start_game_btt',src:'img/start_game_btt.png'},
             {id:'game_off',src:'img/game_off.png'},
             {id:'game_active1',src:'img/game_active1.png'},
             {id:'game_active2',src:'img/game_active2.png'},
             {id:'game_active3',src:'img/game_active3.png'},
             {id:'game_active4',src:'img/game_active4.png'},
             {id:'game_active5',src:'img/game_active5.png'},
             {id:'quiz_point',src:'img/quiz_point.png'},

             // TALISMANS
             {id:'talismans_bgd',src:'img/talismans_bgd.png'},
             {id:'talisman_arrows',src:'img/talisman_arrows.png'},
             {id:'quiz_image0',src:'img/quiz_image0.png'},
             {id:'quiz_image1',src:'img/quiz_image1.png'},
             {id:'quiz_image2',src:'img/quiz_image2.png'},
             {id:'quiz_image3',src:'img/quiz_image3.png'},
             {id:'quiz_image4',src:'img/quiz_image4.png'},
             {id:'talisman0',src:'img/talisman0.png'},
             {id:'talisman1',src:'img/talisman1.png'},
             {id:'talisman2',src:'img/talisman2.png'},
             {id:'talisman3',src:'img/talisman3.png'},
             {id:'talisman4',src:'img/talisman4.png'},
             {id:'talisman5',src:'img/talisman5.png'},
             {id:'talisman6',src:'img/talisman6.png'},
             {id:'talisman7',src:'img/talisman7.png'},
             {id:'talisman8',src:'img/talisman8.png'},
             {id:'talisman9',src:'img/talisman9.png'},
             {id:'talisman_help_appla',src:'img/talisman_help_appla.png'},
             {id:'close_talisman_btt_on',src:'img/close_talisman_btt_on.png'},
             {id:'close_talisman_btt_off',src:'img/close_talisman_btt_off.png'},
             {id:'help_talisman_btt_on',src:'img/help_talisman_btt_on.png'},
             {id:'help_talisman_btt_off',src:'img/help_talisman_btt_off.png'},


             {id:'found_talisman_appla',src:'img/found_talisman_appla.png'},
             {id:'congratulation_appla',src:'img/congratulation_appla.png'},
             {id:'close_talisman_big_btt_on',src:'img/close_talisman_big_btt_on.png'},
             {id:'close_talisman_big_btt_off',src:'img/close_talisman_big_btt_off.png'},
             {id:'help_talisman_download_btt_off',src:'img/help_talisman_download_btt_off.png'},
             {id:'help_talisman_download_btt_on',src:'img/help_talisman_download_btt_on.png'},
             {id:'button_download_on',src:'img/button_download_on.png'},
             {id:'button_download_off',src:'img/button_download_off.png'},



             //quiz
             {id:'quiz_bgd',src:'img/quiz_bgd.png'},
             {id:'quiz_btt_wrong',src:'img/quiz_btt_wrong.png'},
             {id:'quiz_btt_correct',src:'img/quiz_btt_correct.png'},
             {id:'quiz_btt_off',src:'img/quiz_btt.png'},
             {id:'quiz_btt_on',src:'img/quiz_btt_on.png'},
             {id:'quizes_p1',src:'img/quizes_p1.png'},
             {id:'quizes_p2',src:'img/quizes_p2.png'},




             {id:'under_intro_1',src:'img/under_intro_1.png'},
             {id:'under_intro_2',src:'img/under_intro_2.png'},
             {id:'under_intro_3',src:'img/under_intro_3.png'},
             {id:'under_intro_4',src:'img/under_intro_4.png'},

             {id:'start_here_button',src:'img/start_here_button.png'},
             {id:'start_here_button_on',src:'img/start_here_button_on.png'},
             {id:'sound_on',src:'img/sound_on.png'},
             {id:'sound_off',src:'img/sound_off.png'},
             {id:'home',src:'img/home_btt.png'},
             {id:'home_on',src:'img/home_btt.png'},
             {id:'play_on2',src:'img/play2_on.png'},
             {id:'play_on',src:'img/play_on.png'},
             {id:'play_off',src:'img/play_off.png'},
             {id:'play_off2',src:'img/play2_off.png'}


        ];
        startLoading();
    }
    function startLoading(){
        var pre=new Preloader(manifest);
        pageContainer.addChild(pre);
        pre.x = 530;
        pre.y = 50;
        pre.addEventListener('completed',onLoaderComplete);
        _main.resize();


    }
    function onLoaderComplete(e){

        t.loadedData= e.target.queue;

        addGlobalElements();
        var step1;

        console.log(skip_intro+'skip intro');
        if(skip_intro=='1') {
            step1 = new Map();

        }else{
            step1 = new Step1();
        }

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
    {       console.log(e);
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
    window.Main = c.promote(Main, "Container");
}());



