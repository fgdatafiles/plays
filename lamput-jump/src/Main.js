
var soundBtt;
var ow=768;
var music;
var oh=1365;
var backBtt;
var iframeContainer;
(function(){
    'use strict';
    var actualPage;
    var t;
    var scaleS;
    var manifest;

    function Main()
    {

        this.Container_constructor();
        t = this;
        this.mode =1;
        this.pageContainer;
        this.globalContainer;
        this.nWidth;
        this.nHeight;
        this.points;
        this.height;
        this.best1;
        this.best2;
        
        this.context;
        this.scale;

        this.time;
        this.mili;
        this.ow;
        this.oh;
        t=this;

        this.setup();
    }

    var _main = c.extend(Main, c.Container);
    _main.setup=function()
    {

        iframeContainer = $('.iframe-container')
        initStage();
        loadGFX();
    };
       _main.resize=function(){

        this.ow = 768;
        this.oh = 1365;

        var w = Math.min(iframeContainer.width(),768);
        var h = Math.min(iframeContainer.height(),1365);

        if(stage.scaleX){

            scaleS = Math.min(w / this.ow, h / this.oh);
            stage.scaleX = scaleS;
            stage.scaleY = scaleS;
            stage.canvas.width = this.ow * scaleS;
            stage.canvas.height = this.oh * scaleS;
            this.nWidth=stage.canvas.width;
            this.nHeight=stage.canvas.height;
            t.scale= scaleS;
            try{

                soundBtt.x =689;
                backBtt.x =  5;
            }catch(e){}

        stage.update();
        }
    };

    function initStage()
    {

        console.log('mnint')
        var canvas=document.getElementById('stageCanvas');
        _main.context=canvas.getContext('2d');
        stage = new c.Stage(canvas);

        c.Ticker.timingMode=c.Ticker.RAF_SYNCHED;
        c.Ticker.framerate = game.standardframeRate;
        if(globals.isMobile){
            stage.enableMouseOver(0);
        }else{
            stage.enableMouseOver(35);
        }
        
        c.Touch.enable(stage);
        c.Ticker.addEventListener('tick', stage);

        _main.pageContainer=new c.Container();
        stage.addChild(t.pageContainer);
        _main.globalContainer=new c.Container();
        stage.addChild(t.globalContainer);
        _main.resize();
        setTimeout(_main.resize,1500);

        console.log(globals.isMobile+'is Mobile');
    }
    function addGlobalElements()
    {

        soundBtt = new  OnOffBtt(main.loadedData.getResult('sound_on'),'',main.loadedData.getResult('sound_off'),'Arial');
        stage.addChild(soundBtt);
        soundBtt.cursor ='pointer';
        console.log(_main.nWidth+":"+_main.nHeight)
        soundBtt.x =689;
        soundBtt.y=20;
        var ticker = new  c.Bitmap(main.loadedData.getResult('ticker'))
        stage.addChild(ticker);
        ticker.y=1320;
        backBtt = new  FrameBtt(main.loadedData.getResult('back_off'),'',main.loadedData.getResult('back'),'#ffed00');
        stage.addChild(backBtt);
        backBtt.addEventListener('click',onHome);
        backBtt.x=10;
        backBtt.y=20;
        backBtt.stateClicked=true;
    }



    function loadGFX()
    {

         manifest=[






             {id:'go_appla',src:'img/go_appla.png'},
             {id:'htp_bgd',src:'img/htp_bgd.png'},
             {id:'lefthand',src:'img/lefthand.png'},
             {id:'righthand',src:'img/righthand.png'},
             {id:'htp_p1',src:'img/htp_p2.png'},
             {id:'htp_p2',src:'img/htp_p1.png'},
             {id:'htp_appla',src:'img/htp_appla.png'},
             {id:'play1',src:'img/play1.png'},
             {id:'play2',src:'img/play2.png'},
             {id:'play3',src:'img/play3.png'},
             {id:'play4',src:'img/play4.png'},




             {id:'back_off',src:'img/back_off.png'},
             {id:'back',src:'img/back_on.png'},
             {id:'level1_bottom',src:'img/level1_bottom.png'},
             {id:'level1_up',src:'img/level1_up.png'},



             {id:'ticker',src:'img/ticker.png'},
             {id:'start_bgd',src:'img/step1_bgd.png'},

             {id:'go_bgd',src:'img/go_bgd.png'},

             {id:'go_p1',src:'img/go_p1.png'},

             {id:'anim',src:'img/anim.png'},
             {id:'intro_bgd',src:'img/intro_bgd.png'},
             {id:'mobile_intro',src:'img/mobile_intro.png'},



             {id:'intro1',src:'img/intro1.png'},
             {id:'intro2',src:'img/intro2.png'},
             {id:'intro3',src:'img/intro3.png'},
             {id:'intro4',src:'img/intro4.png'},
             {id:'intro5',src:'img/intro5.png'},
             {id:'intro6',src:'img/intro6.png'},
             {id:'intro7',src:'img/intro7.png'},
             {id:'intro8',src:'img/intro8.png'},
             {id:'intro9',src:'img/intro9.png'},
             {id:'intro10',src:'img/intro10.png'},


             {id:'sound_on',src:'img/sound_on.png'},
             {id:'sound_off',src:'img/sound_off.png'},


            {id:'btt_again',src:'img/btt_again.png'},
            {id:'btt_again_on',src:'img/btt_again_on.png'},

            {id:'skipBtt',src:'img/skip_btt.png'},
            {id:'skipBtt_on',src:'img/skip_btt_on.png'},

             {id:'logo1',src:'img/logo1.png'},
             {id:'logo2',src:'img/logo2.png'},
             {id:'intro_p1',src:'img/intro_p1.png'},
             {id:'intro_p2',src:'img/intro_p2.png'},
             {id:'intro_p3',src:'img/intro_p3.png'},

             {id:'hz',src:'img/player_hz.png'},
             {id:'p1_hz_l1',src:'img/platform1_hz_l1.png'},
             {id:'p2_hz_l1',src:'img/platform2_hz_l1.png'},



             
             {id:'p1_l1',src:'img/platform1_l1.png'},
             {id:'p1_hit_l1',src:'img/platform1_hit_l1.png'},
             {id:'p2_l1',src:'img/platform2_l1.png'},
             {id:'p2_hit_l1',src:'img/platform2_hit_l1.png'},


             {id:'timeIcon',src:'img/timeicon.png'},

             {id:'white',src:'img/white.png'},



            {id:'hud',src:'img/hud_bgd.png'},
            {id:'hud2',src:'img/hud_bgd2.png'},


                 {id:'bonus1_l1',src:'img/bonus1_l1.png'},
             {id:'bonus2_l1',src:'img/bonus2_l1.png'},
             {id:'bonus3_l1',src:'img/bonus3_l1.png'},
             {id:'bonus4',src:'img/bonus4.png'},
             {id:'bonus5',src:'img/bonus5.png'},
             {id:'bonus6',src:'img/bonus6.png'},
             {id:'bonus7',src:'img/bonus7.png'},



             {id:'points1',src:'img/points1.png'},
             {id:'points2',src:'img/points2.png'},
             {id:'points3',src:'img/points3.png'},
             {id:'points1_2',src:'img/points2.png'},
             {id:'points2_2',src:'img/points2_2.png'},
             {id:'points3_2',src:'img/points3_2.png'},
             {id:'multi',src:'img/multiplayer.png'},
             {id:'points_flush',src:'img/points_flush.png'},
             {id:'multi_bonus',src:'img/multi_bonus.png'},
             {id:'time_bonus',src:'img/time_bonus.png'},
             {id:'intro_lamput',src:'img/intro_lamput.png'},
             {id:'lamput_anim',src:'img/lamput_anim.png'},


            //SOUNDS




             {id:'music',src:'sounds/music.mp3'},
             {id:'sBonus1',src:'sounds/bonus_nice1.mp3'},
             {id:'sBonus2',src:'sounds/bonus_nice2.mp3'},

             {id:'sBonus3',src:'sounds/bonus_nice3.mp3'},

             {id:'sGood1',src:'sounds/good1.mp3'},

             {id:'sGood4',src:'sounds/good4.mp3'},
             {id:'sJump',src:'sounds/jump.mp3'},
             {id:'sIntro',src:'sounds/intro.mp3'}

        ];

        startLoading();
    }

    function startLoading(){
      
        var pre=new Preloader(manifest);
        stage.addChild(pre);
        pre.addEventListener('completed',onLoaderComplete);



    }
    function onLoaderComplete(e)
    {
        t.success = false;
        t.loadedData= e.target.queue;
        addGlobalElements();
        var step1=new Step1();
        changeScreen(step1);

    }
    function onHome(){

        window.location.href='./index.html';
    }
    function changeScreen(e){
        if(actualPage)
        {
           actualPage.mouseEnabled = false;
           flyOut(actualPage);
        }
          actualPage=e;
          t.pageContainer.addChildAt(e,0);
          actualPage.addEventListener('changePage',onScreenChange);
          flyIn(actualPage);
    }
    function flyOut(page)
    {
        setTimeout(clear,10,page);
    }
    function flyIn(page)
    {
        actualPage.alpha = 1;
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
            ('error: class doesnt exist');
        }
    }
    function clear(t)
    {
        actualPage.alpha=1;
        while(t.numChildren)
        {
            if(typeof t.getChildAt(0).removeAllChildren=== 'function')
            {
                t.getChildAt(0).removeAllChildren();
            }
            if(t.getChildAt(0).htmlElement!==undefined)
            {
                //console.log(t.getChildAt(0).htmlElement);
                t.getChildAt(0).htmlElement.parentNode.removeChild(t.getChildAt(0).htmlElement);
            }
            t.removeChildAt(0);
        }
        t.parent.removeChild(t);
    }
    window.Main = c.promote(Main, "Container");

}());

