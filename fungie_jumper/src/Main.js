
var soundBtt;
var ow=768;
var music;
var oh=1365;
var backBtt;
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
    };

    var _main = c.extend(Main, c.Container);
    _main.setup=function()
    {


        initStage();
        loadGFX();
    };
       _main.resize=function(){

        this.ow = 768;
        this.oh = 1365;
        var w = Math.min($('.iframe-container').width(),768);
        var h = Math.min($('.iframe-container').height(),1365);

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

                soundBtt.x =668;
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
        soundBtt.x =668;
        soundBtt.y=20;
        var ticker = new  c.Bitmap(main.loadedData.getResult('ticker'))
        stage.addChild(ticker);
        ticker.y=1320;
        backBtt = new  FrameBtt(main.loadedData.getResult('back_off'),main.loadedData.getResult('back'),'#ffed00');
        stage.addChild(backBtt);
        backBtt.addEventListener('click',onHome);
        backBtt.x=5;
        backBtt.y=20;
        backBtt.stateClicked=true;
    }



    function loadGFX()
    {

         manifest=[


             {id:'htp_right',src:'img/htp_right.png'},
             {id:'htp_left',src:'img/htp_left.png'},
             {id:'htp_gora',src:'img/htp_gora.png'},
             {id:'htp_dol',src:'img/htp_dol.png'},
             {id:'right',src:'img/right.png'},
             {id:'right_on',src:'img/right_on.png'},
             {id:'left_on',src:'img/left_on.png'},
             {id:'left',src:'img/left.png'},
             {id:'play_off',src:'img/play_off.png'},
             {id:'play_on',src:'img/play_on.png'},


             {id:'back_off',src:'img/back_off.png'},
             {id:'back',src:'img/back_on.png'},
             {id:'level1_bottom',src:'img/level1_bottom.png'},
             {id:'level1_up',src:'img/level1_up.png'},
             {id:'level2_bottom',src:'img/level2_bottom.png'},
             {id:'level2_up',src:'img/level2_up.png'},
             {id:'level3_bottom',src:'img/level3_bottom.png'},
             {id:'level3_up',src:'img/level3_up.png'},

             {id:'fredzle',src:'img/fredzle.png'},
             {id:'balloons',src:'img/balloons.png'},
             {id:'ticker',src:'img/ticker.png'},
             {id:'start_bgd',src:'img/step1_bgd.png'},
             {id:'htp_bgd',src:'img/htp_desktop.png'},
             {id:'go_bgd',src:'img/go_bgd.png'},
             {id:'nextlevel_bgd',src:'img/nextlevel_bgd.png'},
             {id:'nextlevel_p1',src:'img/nextlevel_p1.png'},
             {id:'nextlevel_p2',src:'img/nextlevel_p2.png'},
             {id:'go_p1',src:'img/go_p1.png'},
             {id:'anim',src:'img/anim.png'},
             {id:'intro_bgd',src:'img/intro_bgd.png'},
             {id:'bill',src:'img/intro_billboard.png'},

             
             {id:'game_bgd',src:'img/game_bgd.png'},

             {id:'startBtt',src:'img/startBtt.png'},
             {id:'startBtt_on',src:'img/startBtt_on.png'},

             {id:'intro1',src:'img/intro1.png'},
             {id:'intro2',src:'img/intro2.png'},
             {id:'intro3',src:'img/intro3.png'},
             {id:'intro4',src:'img/intro4.png'},
             {id:'intro5',src:'img/intro5.png'},
             {id:'intro6',src:'img/intro6.png'},
             {id:'intro7',src:'img/intro7.png'},
             {id:'intro8',src:'img/intro8.png'},


             {id:'sound_on',src:'img/sound_on.png'},
             {id:'sound_off',src:'img/sound_off.png'},


            {id:'btt_again',src:'img/btt_again.png'},
            {id:'btt_again_on',src:'img/btt_again_on.png'},

            {id:'skipBtt',src:'img/skip_btt.png'},
            {id:'skipBtt_on',src:'img/skip_btt_on.png'},

             {id:'logo1',src:'img/logo1.png'},
             {id:'logo2',src:'img/logo2.png'},
             {id:'intro_p1',src:'img/intro_p1.png'},

             {id:'hz',src:'img/player_hz.png'},
             {id:'p1_hz_l1',src:'img/platform1_hz_l1.png'},
             {id:'p2_hz_l1',src:'img/platform2_hz_l1.png'},


             {id:'p1_hz_l2',src:'img/platform1_hz_l2.png'},
             {id:'p2_hz_l2',src:'img/platform2_hz_l2.png'},


             {id:'p1_hz_l3',src:'img/platform1_hz_l3.png'},
             {id:'p2_hz_l3',src:'img/platform2_hz_l3.png'},

             
             
             {id:'p1_l1',src:'img/platform1_l1.png'},
             {id:'p1_hit_l1',src:'img/platform1_hit_l1.png'},
             {id:'p2_l1',src:'img/platform2_l1.png'},
             {id:'p2_hit_l1',src:'img/platform2_hit_l1.png'},

             {id:'p1_l2',src:'img/platform1_l2.png'},
             {id:'p1_hit_l2',src:'img/platform1_hit_l2.png'},
             {id:'p2_l2',src:'img/platform2_l2.png'},
             {id:'p2_hit_l2',src:'img/platform2_hit_l2.png'},

             {id:'p1_l3',src:'img/platform1_l3.png'},
             {id:'p1_hit_l3',src:'img/platform1_hit_l3.png'},
             {id:'p2_l3',src:'img/platform2_l3.png'},
             {id:'p2_hit_l3',src:'img/platform2_hit_l3.png'},
             {id:'timeIcon',src:'img/timeicon.png'},

             {id:'white',src:'img/white.png'},



            {id:'hud',src:'img/hud_bgd.png'},
            {id:'hud2',src:'img/hud_bgd2.png'},




            {id:'intro1',src:'img/intro1.png'},
            {id:'intro2',src:'img/intro2.png'},
            {id:'intro3',src:'img/intro3.png'},
            {id:'intro4',src:'img/intro4.png'},
            {id:'intro5',src:'img/intro5.png'},
            {id:'intro6',src:'img/intro6.png'},
            {id:'intro7',src:'img/intro7.png'},
            {id:'intro8',src:'img/intro8.png'},

             {id:'bonus1_l1',src:'img/bonus1_l1.png'},
             {id:'bonus2_l1',src:'img/bonus2_l1.png'},
             {id:'bonus3_l1',src:'img/bonus3_l1.png'},
             {id:'bonus4',src:'img/bonus4.png'},
             {id:'bonus5',src:'img/bonus5.png'},
             {id:'bonus6',src:'img/bonus6.png'},
             {id:'bonus7',src:'img/bonus7.png'},
             {id:'bonus1_l2',src:'img/bonus1_l2.png'},
             {id:'bonus2_l2',src:'img/bonus2_l2.png'},
             {id:'bonus3_l2',src:'img/bonus3_l2.png'},

             {id:'bonus1_l3',src:'img/bonus1_l3.png'},
             {id:'bonus2_l3',src:'img/bonus2_l3.png'},
             {id:'bonus3_l3',src:'img/bonus3_l3.png'},


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


            //SOUNDS


             {id:'sBad1',src:'sounds/bad1.mp3'},
             {id:'sBad2',src:'sounds/bad2.mp3'},
             {id:'sBad3',src:'sounds/bad3.mp3'},
             {id:'sBad4',src:'sounds/bad4.mp3'},
             {id:'sBad5',src:'sounds/bad5.mp3'},

             {id:'sBonus1',src:'sounds/bonus_nice1.mp3'},
             {id:'sBonus2',src:'sounds/bonus_nice2.mp3'},
             {id:'sBonus3',src:'sounds/bonus_nice3.mp3'},
             {id:'sBonus4',src:'sounds/bonus_nice4.mp3'},


             {id:'music',src:'sounds/music.mp3'},
             {id:'sHighlight1',src:'sounds/button_highlight2.mp3'},
             {id:'sHighlight2',src:'sounds/button_highlight3.mp3'},
             {id:'sPress1',src:'sounds/button_press1.mp3'},
             {id:'sPress2',src:'sounds/button_press2.mp3'},

             {id:'sGameover1',src:'sounds/game_over2.mp3'},
             {id:'sGameover2',src:'sounds/gameover.mp3'},

             {id:'sGood1',src:'sounds/good1.mp3'},
             {id:'sGood2',src:'sounds/good2.mp3'},
             {id:'sGood3',src:'sounds/good3.mp3'},
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
            if(t.getChildAt(0).htmlElement!=undefined)
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

