
var stage;
(function(){
    'use strict';
    var actualPage;
    var t;
    var scaleS;

    var manifest;

    var Main=function()
    {

        this.initialize();
        t = this;
        this.pageContainer;
        this.globalContainer;
        this.nWidth;
        this.nHeight;
        this.sound=true;
        this.context;
        this.scale;
        this.level;
        this.soundBtt;
		this.fsBtt;
		this.smallScreen=false;
        this.fs=false;
        this.nCurrentLevel=1;
        this.animacja;
        this.time;

        this.ow;
        this.oh;
        this.isMobile;

        this.answers = [];



    };

   var _main=Main.prototype=new createjs.Container();
    _main.Container_initialize=_main.initialize;
    _main.init=function()
    {
        this.points1=0;
        this.points2=0;
        this.points3=0;
        this.Container_initialize();
        var browserTest=new BrowserTest();


        initStage();


        loadGFX();


    };


    _main.resize=function(){


        this.ow = 944;
        this.oh = 530;

        var w = Math.min($('.iframe-container').width(),1024);
        var h = Math.min($('.iframe-container').height(),575);

        var keepAspectRatio = true;


        if(stage.scaleX){
            if (keepAspectRatio)
            {
                // keep aspect ratio
                scaleS = Math.min(w / this.ow, h / this.oh);
                stage.scaleX = scaleS;
                stage.scaleY = scaleS;
                // adjust canvas size
                stage.canvas.width = this.ow * scaleS;
                stage.canvas.height = this.oh * scaleS;
            }
            else
            {
                // scale to exact fit
                stage.scaleX = w / this.ow;
                stage.scaleY = h / this.oh;

                // adjust canvas size
                stage.canvas.width = this.ow * stage.scaleX;
                stage.canvas.height = this.oh * stage.scaleY;
            }
            this.nWidth=stage.canvas.width;
            this.nHeight=stage.canvas.height;

            t.scale= scaleS;
            stage.update();
        }
    };

    function initStage()
    {

        var canvas=document.getElementById('stageCanvas');
        _main.context=canvas.getContext('2d');
        stage = new createjs.Stage(canvas);
        
        createjs.Ticker.setFPS(30);
        createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED;
        stage.enableMouseOver(30);
        createjs.Touch.enable(stage);
        createjs.Ticker.addEventListener('tick', stage);


        _main.pageContainer=new createjs.Container();

        stage.addChild(t.pageContainer);
        _main.globalContainer=new createjs.Container();
        stage.addChild(t.globalContainer);
        _main.resize();

        t.animacja = new createjs.Bitmap('img/purple.png');
        t.animacja.x = -449;
        t.animacja.y = -351;
        stage.addChild(t.animacja);
/*
        var frame = new createjs.Bitmap('img/frame.png');
        stage.addChild(frame);
        */

    }
    function addGlobalElements() {


        t.soundBtt = new OnOffBtt(main.loadedData.getResult('sound_on'), '', main.loadedData.getResult('sound_off'), 'Arial');

        t.addChild(t.soundBtt);
        t.soundBtt.cursor = 'pointer';
        t.soundBtt.x = 855;
        t.soundBtt.y = 10;
        stage.addChild(t.soundBtt);

		//if( navigator.userAgent.match(/Android/i)) addFs();


    }
    function addFs(){


        console.log('addFSB');
        t.fsBtt = new FullScreenBtt(main.loadedData.getResult('fs_off'), '', main.loadedData.getResult('fs_on'), 'Arial');
        stage.addChild(t.fsBtt);
        t.fsBtt.cursor = 'pointer';
        t.fsBtt.x = 765;
        t.fsBtt.y = 10;

    }

    function loadGFX()
    {

         manifest=[


             {id:'kalka',src:'img/level3/kalka.jpg'},



            {id:'intro',src:'img/intro_bgd.jpg'},


            {id:'go_bgd',src:'img/gameover_bgd.jpg'},
            {id:'htp',src:'img/htp_bgd.jpg'},
            {id:'htp2',src:'img/htp2_bgd.jpg'},
             {id:'next',src:'img/next.png'},
             {id:'over',src:'img/game_over.png'},
             {id:'next_bgd',src:'img/next_bgd.jpg'},
             {id:'life',src:'img/life.png'},
             {id:'good',src:'img/points.png'},
             {id:'bad',src:'img/bad.png'},
             {id:'odkurzacz1',src:'img/odkurzacz1.png'},
             {id:'odkurzacz2',src:'img/odkurzacz2.png'},
             {id:'level1',src:'img/l1.jpg'},
             {id:'level2',src:'img/l2.jpg'},
             {id:'level3',src:'img/l3.jpg'},
             {id:'fs_on',src:'img/fs_on.png'},
             {id:'fs_off',src:'img/fs_off.png'},



             {id:'belka',src:'img/belka.png'},
             //level1

             {id:'dron2',src:'img/level1/dron.png'},

             //level2
             {id:'blow',src:'img/level2/blow.png'},
             {id:'b1',src:'img/level2/box1.png'},
             {id:'b2',src:'img/level2/box2.png'},
             {id:'b3',src:'img/level2/box3.png'},
             {id:'b4',src:'img/level2/box4.png'},
             {id:'b5',src:'img/level2/box5.png'},

             {id:'l1',src:'img/level2/l1.png'},
             {id:'l2',src:'img/level2/l2.png'},
             {id:'l3',src:'img/level2/l3.png'},
             {id:'l4',src:'img/level2/l4.png'},
             {id:'l5',src:'img/level2/l5.png'},
             {id:'dron',src:'img/level2/dron.png'},
             {id:'hz',src:'img/level2/h1.png'},




             ////////LEVEL3
             {id:'energy_bgd',src:'img/level3/energy_bgd.png'},
             {id:'energy_bar',src:'img/level3/energy_bar.png'},
             {id:'piniata',src:'img/level3/box.png'},
             {id:'bat2',src:'img/level3/bat2.png'},
             {id:'bam',src:'img/level3/bam.png'},
             {id:'all',src:'img/level3/all.png'},
            ////

            {id:'btt',src:'img/btt.png'},
            {id:'btt_small',src:'img/btt_small.png'},
            {id:'btt_small_on',src:'img/btt_small_on.png'},
            {id:'btt_on',src:'img/btt_on.png'},
            {id:'logo_bomerang',src:'img/logo_bomerang.png'},
            {id:'logo_game',src:'img/logo_game.png'},
            {id:'sound_on',src:'img/sound_on.png'},
            {id:'sound_off',src:'img/sound_off.png'},
            {id:'intro_gfx',src:'img/intro_gfx.png'},
            {id:'rog',src:'img/logo_game_small.png'},
            {id:'level_on',src:'img/level_on.png'},
            {id:'level_off',src:'img/level_off.png'},
            {id:'chmura',src:'img/chmura.png'},

             {id:'3',src:'img/3.png'},
             {id:'2',src:'img/2.png'},
             {id:'1',src:'img/1.png'},
             {id:'go',src:'img/go.png'},


             {id:'close_on',src:'img/close_on.png'},
             {id:'close',src:'img/close.png'},
             {id:'srodek',src:'img/srodek.png'},
             

             {id:'ok',src:'img/ok.png'},
             {id:'ok2',src:'img/ok2.png'}




        ];

        var data = {
            images: ['img/logo.png'],
            frames:  [
                [0, 0, 510, 510, 0, 0, 0],
                [512, 0, 510, 512, 0, 0, 0],
                [1024, 0, 510, 512, 0, 0, 0],
                [0, 512, 510, 512, 0, 0, 0],
                [512, 512, 510, 512, 0, 0, 0],
                [1024, 512, 510, 512, 0, 0, 0],
                [0, 1024, 510, 512, 0, 0, 0],
                [512, 1024, 510, 512, 0, 0, 0],
                [1024, 1024, 510, 512, 0, 0, 0],
                [0, 1536, 510, 512, 0, 0, 0],
                [512, 1536, 510, 512, 0, 0, 0],
                [1024, 1536, 510, 512, 0, 0, 0]

            ],
            animations: {
                playMe: {
                    frames: [0, 1, 2, 3, 4,5,6,7,8,9,10]


                },
                stopMe:{
                    frames:[0]
                }

            }

        };
        t.hero = new createjs.Container();
        var spriteSheet = new createjs.SpriteSheet(data);
        t.anim = new createjs.Sprite(spriteSheet,'stopMe');
        t.anim.framerate=24;
        t.hero.addChild(t.anim);
        t.anim.gotoAndPlay('playMe');
        t.hero.x = (944/2) - 200;
        t.hero.y=  (530/2)-155;
        TweenLite.from(t.anim,2,{alpha:0,onComplete:startLoading});
        stage.addChild(t.hero);
    }

    function startLoading(){
        t.anim.gotoAndPlay('playMe');
        var pre=new Preloader(manifest);
        stage.addChild(pre);
        pre.addEventListener('completed',onLoaderComplete);

    }
    function onLoaderComplete(e)
    {

        t.isMobile = detectmob();
        t.success = false;
        t.loadedData= e.target.queue;

        t.anim.gotoAndStop('stopMe');


        var music = document.getElementById("music");
        music.play();

        TweenLite.to(t.animacja,1,{x:360,y:400});
        setTimeout(function(){
            TweenLite.to(t.hero,.6,{alpha:0})
        },100);

        var step1=new Step1();
        changeScreen(step1);
        addGlobalElements();


    }


      function changeScreen(e){


        if(actualPage)
        {

            t.animacja.y = -351;

            TweenLite.to(t.animacja,.5,{x:-449,y:-351});
            TweenLite.to(t.animacja,.5,{x:360,y:400,delay:.5});
            actualPage.mouseEnabled = false;
            flyOut(actualPage);

        }
        actualPage=e;
          actualPage.mouseEnabled = false;
        t.pageContainer.addChildAt(e,0);
        actualPage.addEventListener('changePage',onScreenChange);

        flyIn(actualPage);
    }
    function flyOut(page)
    {
        setTimeout(clear,500,page);
        //TweenMax.to(page,0.2,{alpha:0,onComplete:clear,onCompleteParams:[page]});
    }
    function flyIn(page)
    {
        actualPage.alpha = 1;
        //TweenMax.from(page,0.2,{alpha:0});
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
    function clear(t)
    {
        actualPage.alpha=1;
        while(t.getNumChildren())
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
var main=new Main();