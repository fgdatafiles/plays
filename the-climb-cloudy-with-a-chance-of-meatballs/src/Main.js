

(function(){
    'use strict';
    var actualPage;
    var t;
    var scaleS;
    var manifest;

    var _main=function()
    {

    };

    _main.initialize=function() {


    };
    var Main=function()
    {
        
        this.initialize();
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
        this.soundBtt;
        this.time;
        this.mili;
        this.ow;
        this.oh;
        t=this;
    };

    _main=Main.prototype=new createjs.Container();

    _main.init=function()
    {
        var browserTest=new BrowserTest();



        initStage();
        loadGFX();
    };
       _main.resize=function(){

        this.ow = 574;
        this.oh = 1024;
        var w = Math.min($('.iframe-container').width(),574);
        var h = Math.min($('.iframe-container').height(),1024);
        console.log('resize');
        if(stage.scaleX){
            scaleS = Math.min(w / this.ow, h / this.oh);
            stage.scaleX = scaleS;
            stage.scaleY = scaleS;
            stage.canvas.width = this.ow * scaleS;
            stage.canvas.height = this.oh * scaleS;
            this.nWidth=stage.canvas.width;
            this.nHeight=stage.canvas.height;
            t.scale= scaleS;
            console.log(scaleS);
        stage.update();
        }
    };

    function initStage()
    {
        var canvas=document.getElementById('stageCanvas');
        _main.context=canvas.getContext('2d');
        stage = new createjs.Stage(canvas);

        createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.framerate = 35;
        if (!createjs.Sound.initializeDefaultPlugins()) {return;}

        if(globals.isMobile){
            stage.enableMouseOver(0);
        }else{
            stage.enableMouseOver(35);
        }
        
        createjs.Touch.enable(stage);
        createjs.Ticker.addEventListener('tick', stage);

        _main.pageContainer=new createjs.Container();
        stage.addChild(t.pageContainer);
        _main.globalContainer=new createjs.Container();
        stage.addChild(t.globalContainer);
        _main.resize();
        setTimeout(_main.resize,1500);


    }
    function addGlobalElements()
    {

        t.soundBtt = new  OnOffBtt('img/sound_on.png','img/sound_off.png');
        t.addChild(t.soundBtt);
        t.soundBtt.cursor ='pointer';
        t.soundBtt.x=497;


        stage.addChild(t.soundBtt);


    }



    function loadGFX()
    {

         manifest=[


             {id:'start_bgd',src:'img/step1_bgd.png'},
             {id:'anim',src:'img/steve_anim.png'},
             {id:'intro_bgd',src:'img/intro_bgd.png'},
             {id:'bill',src:'img/intro_billboard.png'},

             {id:'gameover_bgd',src:'img/gameover_bgd.png'},
             {id:'game_bgd',src:'img/game_bgd.png'},
             {id:'sky',src:'img/sky.png'},
             {id:'sky2',src:'img/sky2.png'},

             {id:'startBtt',src:'img/startBtt.png'},
             {id:'startBtt_on',src:'img/startBtt_on.png'},
             {id:'logo2',src:'img/logo_small.png'},

             {id:'steve',src:'img/steve_intro.png'},
             {id:'steve',src:'img/choice_steve1.png'},
             {id:'steve2',src:'img/choice_steve2.png'},
             {id:'steve_game',src:'img/steve_game.png'},
             {id:'go_appla',src:'img/game_over_steve.png'},

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
             {id:'intro11',src:'img/intro11.png'},
             {id:'intro12',src:'img/intro12.png'},
             {id:'intro13',src:'img/intro13.png'},
             {id:'intro14',src:'img/intro14.png'},
             {id:'intro15',src:'img/intro15.png'},

            {id:'sound_on',src:'img/sound_on.png'},
            {id:'sound_off',src:'img/sound_off.png'},
            {id:'pause_on',src:'img/pause_on.png'},
            {id:'pause_off',src:'img/pause_off.png'},


            {id:'nextBtt',src:'img/nextBtt.png'},
            {id:'nextBtt_on',src:'img/nextBtt_on.png'},
            {id:'btt_again',src:'img/btt_again.png'},
            {id:'btt_again_on',src:'img/btt_again_on.png'},
            {id:'nextBtt_on',src:'img/nextBtt_on.png'},
            {id:'skipBtt',src:'img/skipBtt.png'},
            {id:'skipBtt_on',src:'img/skipBtt_on.png'},
            {id:'rec',src:'img/rec.png'},
            {id:'battery',src:'img/battery.png'},
             {id:'tl',src:'img/tl.png'},
             {id:'tr',src:'img/tr.png'},
             {id:'br',src:'img/br.png'},
             {id:'bl',src:'img/bl.png'},
             {id:'logo1',src:'img/logo1.png'},
             {id:'p1',src:'img/platform1.png'},
             {id:'p1_hit',src:'img/platform1_hit.png'},
             {id:'hz',src:'img/player_hz.png'},
             {id:'p1_hz',src:'img/platform1_hz.png'},
             {id:'p2_hz',src:'img/platform2_hz.png'},
             {id:'p2',src:'img/platform2.png'},
             {id:'p2_hit',src:'img/platform2_hit.png'},
             {id:'timeIcon',src:'img/timeicon.png'},


             {id:'white',src:'img/white.png'},





            {id:'hud',src:'img/hud_bgd.png'},
            {id:'hud2',src:'img/hud_bgd2.png'},
            {id:'line',src:'img/line.png'},
            {id:'c1_off',src:'img/choice1_off.png'},
            {id:'c1_on',src:'img/choice1_on.png'},
             {id:'c2_off',src:'img/choice1_off.png'},
             {id:'c2_on',src:'img/choice1_on.png'},




            {id:'intro1',src:'img/intro1.png'},
            {id:'intro2',src:'img/intro2.png'},
            {id:'intro3',src:'img/intro3.png'},
            {id:'intro4',src:'img/intro4.png'},
            {id:'intro5',src:'img/intro5.png'},
            {id:'intro6',src:'img/intro6.png'},
            {id:'intro7',src:'img/intro7.png'},
            {id:'intro8',src:'img/intro8.png'},

             {id:'3',src:'img/3.png'},
             {id:'2',src:'img/2.png'},
             {id:'1',src:'img/1.png'},
             {id:'go',src:'img/go.png'},
             {id:'record',src:'img/record.png'},



            //{id:'pause_bgd',src:'img/pause_bgd.jpg'},
           // {id:'home_off',src:'img/home_off.png'},
           // {id:'home_on',src:'img/home_on.png'},

            //{id:'htp_left_off',src:'img/htp_left_off.png'},
            //{id:'htp_left_on',src:'img/htp_left_on.png'},
            //{id:'htp_right_off',src:'img/htp_right_off.png'},
            //{id:'htp_right_on',src:'img/htp_right_on.png'},
            //{id:'htp_restart_on',src:'img/htp_restart_on.png'},
            //{id:'htp_restart_off',src:'img/htp_restart_off.png'},
            //{id:'htp_next_off',src:'img/htp_next_off.png'},
            //{id:'htp_next_on',src:'img/htp_next_on.png'},
            //{id:'htpScreen_on',src:'img/htpScreen_on.png'},
            //{id:'htpScreen_off',src:'img/htpScreen_off.png'},
            
           // {id:'tak_off',src:'img/tak_off.png'},
           // {id:'tak_on',src:'img/tak_on.png'},
             //{id:'nie_off',src:'img/nie_off.png'},
             //{id:'nie_on',src:'img/nie_on.png'},
             {id:'bonus1',src:'img/bonus1.png'},
             {id:'bonus2',src:'img/bonus2.png'},
             {id:'bonus3',src:'img/bonus3.png'},
             {id:'bonus4',src:'img/bonus4.png'},
             {id:'bonus5',src:'img/bonus5.png'},
             {id:'bonus6',src:'img/bonus6.png'},
             {id:'bonus7',src:'img/bonus7.png'},
             {id:'bonus8',src:'img/bonus8.png'},
             {id:'bonus9',src:'img/bonus9.png'},
             {id:'bonus10',src:'img/bonus10.png'},

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
             {id:'sBonus1',src:'sounds/bonus_nice2.mp3'},
             {id:'sBonus2',src:'sounds/bonus_nice2.mp3'},
             {id:'sBonus3',src:'sounds/bonus_nice2.mp3'},
             {id:'sBonus4',src:'sounds/gameover.mp3'},

             {id:'sHighlight1',src:'sounds/button_highlight2.mp3'},
             {id:'sHighlight2',src:'sounds/button_highlight3.mp3'},
             {id:'sPress1',src:'sounds/button_press1.mp3'},
             {id:'sPress2',src:'sounds/button_press2.mp3'},
             {id:'sFootsteps',src:'sounds/footsteps.mp3'},
             {id:'sGameover',src:'sounds/game_over2.mp3'},
             {id:'sGood1',src:'sounds/good1.mp3'},
             {id:'sGood2',src:'sounds/good2.mp3'},
             {id:'sGood3',src:'sounds/good3.mp3'},
             {id:'sGood4',src:'sounds/good4.mp3'},
             {id:'sIntro',src:'sounds/intro.mp3'}

        ];

        if(globals.isMobile){
            manifest.push({id:'htp_bgd',src:'img/htp_mobile.png'});
        }else{
            manifest.push({id:'htp_bgd',src:'img/htp_desktop.png'});
        }
        startLoading();
    }

    function startLoading(){
      
        var pre=new Preloader(manifest);
        stage.addChild(pre);
        pre.addEventListener('completed',onLoaderComplete);

        addGlobalElements();

    }
    function onLoaderComplete(e)
    {
        t.success = false;
        t.loadedData= e.target.queue;
//        var music = document.getElementById("music");
     //  music.play();


        var step1=new Step1();
        changeScreen(step1);

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
    window.Main=Main;
}());

