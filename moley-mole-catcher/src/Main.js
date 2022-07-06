var actualPage;
var ow=1680;
var oh=720;
var w,h,homeBtt,soundBtt,pageContainer,scaleS,pauseBtt;
(function(){
    'use strict';

    var t;
    var scaleS;
    var manifest;
    var logo;
    var helpAppla;
    var Main=function()
    {
        this.Container_constructor();
          t = this;
        this.initialize();

        this.nWidth;
        this.nHeight;
        this.context;
        this.scale;
        this.ow = 1680;
        this.oh = 720;

        this.nCurrentLevel=1;
        this.time ="00:00";
        this.best ="00:00";
        this.mili;

        this.isPanoramic=false;
        this.animationInterval;

        this.nCurrentLevel=0;
        t=this;
    };

    var _main = c.extend(Main, c.Container);
    _main.initialize=function() {


    };


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

            this.nWidth = stage.canvas.width;
            this.nHeight = stage.canvas.height;

            if (pageContainer){
                if(pause) pause.x = pageContainer.x;
                pageContainer.x = -(1680 / 2) + ((w / scaleS) / 2);


                if((w/scaleS)<=1680) {
                    if(soundBtt)soundBtt.x = (w / scaleS) - 111;

                }else{

                    if(soundBtt)soundBtt.x =1680+(w/scaleS- 1680)/2-111;
                    if(homeBtt)homeBtt.x = pageContainer.x+ 50;
                    if(pauseBtt)pauseBtt.x = pageContainer.x+ 120;

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
        stage = new c.Stage(canvas);
        c.Ticker.timingMode=c.Ticker.RAF_SYNCHED;
        c.Ticker.framerate = 35;
        if (!c.Sound.initializeDefaultPlugins()) {return;}
        stage.enableMouseOver(30);
        c.Touch.enable(stage);
        c.Ticker.addEventListener('tick', stage);
        pageContainer=new c.Container();
        stage.addChildAt(pageContainer,0);
        window.addEventListener("orientationchange", _main.resize, false);
        window.addEventListener('resize',  _main.resize, false);
        _main.resize();


    }
    function addGlobalElements()
    {

        homeBtt = new  FrameBtt(main.loadedData.getResult('home'),main.loadedData.getResult('home_on'),'#ffed00');
        stage.addChild(homeBtt);
        homeBtt.addEventListener('click',onHome);
        homeBtt.x=50;
        homeBtt.y=20;
        


        soundBtt = new  OnOffBtt(main.loadedData.getResult('sound_on'),'',main.loadedData.getResult('sound_off'),'Arial');

        stage.addChild(soundBtt);
        soundBtt.cursor ='pointer';
        soundBtt.x =_main.nWidth;
        soundBtt.y=20;

        pauseBtt = new  FrameBtt(main.loadedData.getResult('pausebtt'),main.loadedData.getResult('pausebtt_on'),'#ffed00');
        stage.addChild(pauseBtt);
        pauseBtt.addEventListener('click',pauseAll);
        pauseBtt.x=120;
        pauseBtt.y=20;
        pauseBtt.stateClicked=true;
        pauseBtt.visible = false;

    }
    function onHome(){
        c.Sound.stop();
        actualPage.dispatchStep1();
        
    }
    function onCloseHelp(e){

        stage.removeChild(helpAppla);
        helpAppla = null;
        soundBtt.visible =true;
        homeBtt.visible = true;
    }

    function loadGFX()
    {
         manifest=[

             {id:'life',src:'img/life.png'},
             {id:'bgd_intro',src:'img/bgd_intro.png'},
             {id:'bgd_game',src:'img/bgd_game.png'},
             {id:'bgd',src:'img/bgd.png'},
             {id:'ticker_bgd',src:'img/ticker_bgd.png'},
             {id:'go_p1',src:'img/go_p1.png'},
             {id:'go_p2',src:'img/go_p2.png'},
             {id:'description',src:'img/description.png'},
             {id:'htp1',src:'img/htp1.png'},
             {id:'htp2',src:'img/htp2.png'},
             {id:'ticker_bgd',src:'img/ticker_bgd.png'},

             {id:'htp_appla',src:'img/htp_appla.png'},
             {id:'mgla',src:'img/mgla.png'},
             {id:'header',src:'img/header.png'},
             {id:'intro_logo',src:'img/intro_logo.png'},
             {id:'playagain_off',src:'img/playagain_off.png'},
             {id:'playagain_on',src:'img/playagain_on.png'},

             {id:'hud_bgd',src:'img/hud_bgd.png'},
             {id:'helpBtt',src:'img/helpBtt.png'},
             {id:'helpBtt_on',src:'img/helpBtt_on.png'},
             {id:'sound_on',src:'img/sound_on.png'},
             {id:'sound_off',src:'img/sound_off.png'},
             {id:'plus',src:'img/plus.png'},
             {id:'minus',src:'img/minus.png'},
             {id:'logo',src:'img/logo.png'},
             {id:'pausebtt',src:'img/pausebtt.png'},
             {id:'pausebtt_on',src:'img/pausebtt_on.png'},
             {id:'startbtt',src:'img/startbtt.png'},
             {id:'startbtt_on',src:'img/startbtt_on.png'},

             {id:'home',src:'img/home.png'},

             {id:'home_on',src:'img/home_on.png'},
             {id:'play',src:'img/play.png'},
             {id:'play_off',src:'img/play_off.png'},
             {id:'pauseScreen',src:'img/pauseScreen.png'},

             {id:'3',src:'img/timer/3.png'},
             {id:'2',src:'img/timer/2.png'},
             {id:'1',src:'img/timer/1.png'},
             {id:'c0',src:'img/c0.png'},
             {id:'c1',src:'img/c1.png'},
             {id:'c2',src:'img/c2.png'},
             {id:'c3',src:'img/c3.png'},
             {id:'c4',src:'img/c4.png'},
             {id:'c5',src:'img/c5.png'},
             {id:'c6',src:'img/c6.png'},
             {id:'c7',src:'img/c7.png'},
             {id:'m0',src:'img/m0.png'},
             {id:'m1',src:'img/m1.png'},
             {id:'m2',src:'img/m2.png'},
             {id:'m3',src:'img/m3.png'},
             {id:'m4',src:'img/m4.png'},
             {id:'m5',src:'img/m5.png'},
             {id:'m6',src:'img/m6.png'},
             {id:'m7',src:'img/m7.png'},
             {id:'m8',src:'img/m8.png'},



             {id:'ticker',src:'img/ticker_bgd.png'},


         ];
        startLoading();
    }
    function startLoading(){
        var pre=new Preloader(manifest);
        pageContainer.addChild(pre);
        pre.addEventListener('completed',onLoaderComplete);

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
    window.Main = c.promote(Main, "Container");
}());

