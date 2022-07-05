stage
var ticker;
var ow=1640;
var music;
var oh=680;
stage;
var w,h,pauseBtt,soundBtt,pageContainer,scaleS,backBtt,logo_game,homeBtt,pauseScreen;
var actualClassLevel,nCurrentLevel
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
        c.Ticker.framerate = 45;
        if (!c.Sound.initializeDefaultPlugins()) {return;}
        stage.enableMouseOver(30);
        c.Touch.enable(stage);
        c.Ticker.addEventListener('tick', stage);
        stage.tickEnabled = false;
        pageContainer=new c.Container();

        stage.addChildAt(pageContainer,0);
		/*
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
        */

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

    }

    function onBackToStage1(){

        removePause();
        actualClassLevel = Step1;
        actualPage.destroyAndReset()
    }


    function onHome(){

        window.location.href='./index.html';
    }

    function loadGFX()
    {

         manifest=[
             {id:'p1',src:'img/p1.png'},
             {id:'globe',src:'img/glob.png'},
             {id:'play_off',src:'img/play_off.png'},
             {id:'play_on',src:'img/play_on.png'},
             {id:'lc_p1',src:'img/lc_p1.png'},
             {id:'lc_blob',src:'img/lc_blob.png'},
             {id:'lc_appla',src:'img/lc_appla.png'},
             {id:'go_appla',src:'img/go_appla.png'},

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



             {id:'p1',src:'img/p1.png'},
             {id:'logo_game',src:'img/logo_game.png'},
             {id:'start_bgd',src:'img/start_bgd.jpg'},
             {id:'htp_bgd',src:'img/htp_bgd.jpg'},
             {id:'game_level_complete_good',src:'img/game_level_complete_good.jpg'},


             {id:'level1',src:'img/level1.jpg'},
             {id:'level2',src:'img/level2.jpg'},



             {id:'htp1',src:'img/htp1.png'},
             {id:'htp2',src:'img/htp2.png'},
             {id:'hud',src:'img/hud_bgd.png'},

             {id:'plus',src:'img/plus.png'},
             {id:'minus',src:'img/minus.png'},


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

