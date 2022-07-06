var tickerTween,ticker,ticker_bgd,t_bgd1;
var ow=1640;
var oh=680;
var w,h,pauseBtt,soundBtt,pageContainer,scaleS,backBtt,logo_game,homeBtt,pauseScreen;
var actualClassLevel;
(function(){
    
    var actualPage;
    var t;
    var manifest;
    var logo;
    var helpAppla;


    function Main(){
        this.Container_constructor();
        t = this;
        this.nWidth;
        this.nHeight;
        this.context;
        this.scale;
        this.ow;
        this.oh;
        this.nCurrentLevel=0;
        t=this;
        this.setup();
    }
    var _main = c.extend(Main,c.Container);


    _main.initialize=function() {


    };

    _main.setup = function()
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

        if(activeConfig.prefix.substr(1)=='1') {
            actualPage.destroyAndReset()
        }else{
            actualPage.destroyAndReset()
        }
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
             {id:'l1_city',src:'img/l1_city.png'},
             {id:'l2_city',src:'img/l2_city.png'},
             {id:'l1_landscape',src:'img/l1_landscape.png'},
             {id:'l2_landscape',src:'img/l2_landscape.png'},
             {id:'l2_road',src:'img/l2_road.jpg'},
             {id:'l1_road',src:'img/l1_road.png'},
             {id:'hud_bgd',src:'img/hud_bgd.png'},
             {id:'tacos_icon_hud',src:'img/tacos_icon_hud.png'},
             {id:'skate_icon_hud',src:'img/skate_icon_hud.png'},
             {id:'time_icon_hud',src:'img/time_icon_hud.png'},
             {id:'valentino_hero',src:'img/hero_valentino.png'},
             {id:'victor_hero',src:'img/victor_hero.png'},
             {id:'victor_hz',src:'img/victor_hz.png'},

             {id:'pause_bgd',src:'img/pause_bgd.png'},
             {id:'pause_screen_shadow',src:'img/pause_screen_shadow.png'},
             {id:'pause_screen_glow',src:'img/pause_screen_glow.png'},
             {id:'pausescreen_restartBtt_on',src:'img/pausescreen_restartBtt_on.png'},
             {id:'pausescreen_restartBtt_off',src:'img/pausescreen_restartBtt_off.png'},
             {id:'pausescreen_backBtt_on',src:'img/pausescreen_backBtt_on.png'},
             {id:'pausescreen_backBtt_off',src:'img/pausescreen_backBtt_off.png'},


             {id:'points_b',src:'img/points_b.png'},
             {id:'energy_b',src:'img/energy_b.png'},
             {id:'time_b',src:'img/time_b.png'},

             {id:'arrow',src:'img/arrow.png'},
             {id:'select_title_bgd',src:'img/select_title_bgd.png'},
             {id:'victor_select1',src:'img/victor_select1.png'},
             {id:'victor_select2',src:'img/victor_select2.png'},
             {id:'valentino_select1',src:'img/valentino_select1.png'},
             {id:'valentino_select2',src:'img/valentino_select2.png'},




             {id:'boom_animation',src:'img/boom_animation.png'},
             {id:'victor_anim',src:'img/victor_anim.png'},
             {id:'valentino_anim',src:'img/valentino_anim.png'},
             {id:'victor_htp',src:'img/victor_htp.png'},
             {id:'valentino_htp',src:'img/valentino_htp.png'},
             {id:'htp_i1',src:'img/htp_i1.png'},
             {id:'htp_i2',src:'img/htp_i2.png'},

             {id:'htp_bgd',src:'img/htp_bgd.png'},



             {id:'grandmaHouse',src:'img/grandmaHouse.png'},
             {id:'lift_level1',src:'img/lift_level1.png'},
             {id:'krata',src:'img/krata.png'},
             {id:'lift_l1_right',src:'img/lift_l1_right.png'},
             {id:'lift_l1_left',src:'img/lift_l1_left.png'},
             {id:'lift_l1_boom1',src:'img/lift_l1_boom1.png'},
             {id:'lift_l1_boom2',src:'img/lift_l1_boom2.png'},
             {id:'lift_l1_boom3',src:'img/lift_l1_boom3.png'},
             {id:'piorun',src:'img/piorun.png'},

             {id:'l1_o1',src:'img/l1_o1.png'},
             {id:'l1_o2',src:'img/l1_o2.png'},
             {id:'l1_o3',src:'img/l1_o3.png'},
             {id:'l1_o4',src:'img/l1_o4.png'},
             {id:'l1_o5',src:'img/l1_o5.png'},
             {id:'l1_o6',src:'img/l1_o6.png'},
             {id:'l1_o7',src:'img/l1_o7.png'},
             {id:'l1_o8',src:'img/l1_o8.png'},
             {id:'l1_o9',src:'img/l1_o9.png'},
             //{id:'l1_o10',src:'img/l1_o10.png'},

             {id:'l2_o1',src:'img/l2_o1.png'},
             {id:'l2_o2',src:'img/l2_o2.png'},
             {id:'l2_o3',src:'img/l2_o3.png'},
             {id:'l2_o4',src:'img/l2_o4.png'},
             {id:'l2_o5',src:'img/l2_o5.png'},
             {id:'l2_o6',src:'img/l2_o6.png'},
             {id:'l2_o7',src:'img/l2_o7.png'},
             {id:'l2_o8',src:'img/l2_o8.png'},
             {id:'l2_o9',src:'img/l2_o9.png'},
             {id:'l2_o10',src:'img/l2_o10.png'},

             {id:'3',src:'img/timer/3.png'},
             {id:'2',src:'img/timer/2.png'},
             {id:'1',src:'img/timer/1.png'},


             {id:'points_icon',src:'img/extra_points.png'},
             {id:'b1',src:'img/extra_time.png'},
             {id:'b2',src:'img/extra_energy.png'},
             {id:'intro_icon1',src:'img/intro_icon1.png'},
             {id:'intro_icon2',src:'img/intro_icon2.png'},
             {id:'intro_icon3',src:'img/intro_icon3.png'},
             {id:'victor_intro',src:'img/victor_intro.png'},
             {id:'valentino_intro',src:'img/valentino_intro.png'},
             {id:'logo_game1',src:'img/logo_game1.png'},
             {id:'start_bgd',src:'img/start_bgd.png'},
             {id:'logo_intro',src:'img/logo_intro.png'},
             {id:'logo_game1',src:'img/logo_game1.png'},


             {id:'level_complete_victor',src:'img/level_complete_victor.png'},
             {id:'level_complete_victor2',src:'img/level_complete_victor2.png'},
             {id:'level_complete_valentino',src:'img/level_complete_valentino.png'},
             {id:'level_complete_valentino2',src:'img/level_complete_valentino2.png'},
             {id:'level_complete_sterowiec',src:'img/level_complete_sterowiec.png'},
             {id:'level_complete_bgd',src:'img/level_complete_bgd.png'},

             {id:'game_over_victor2',src:'img/game_over_victor2.png'},
             {id:'game_over_victor',src:'img/game_over_victor.png'},
             {id:'game_over_valentino',src:'img/game_over_valentino.png'},
             {id:'game_over_valentino2',src:'img/game_over_valentino2.png'},
             {id:'game_over_dymek',src:'img/game_over_dymek.png'},
             {id:'game_over_bgd',src:'img/game_over_bgd.png'},

           

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



			 // SOUNDS




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
    window.Main= c.promote(Main,"Container");
}());



