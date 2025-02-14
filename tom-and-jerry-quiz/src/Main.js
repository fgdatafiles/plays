
var stage;
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
        this.pageContainer;
        this.globalContainer;
        this.nWidth;
        this.nHeight;
        this.sound=true;
        this.context;
        this.scale;
        this.level;
        this.soundBtt;
        this.nCurrentLevel=1;
        this.animacja;
        this.time;
        this.mili;
        this.ow;
        this.oh;
        this.answers = [];
        t=this;
        this.fsBtt;
        this.smallScreen=false;

        this.isMobile;
        this.fs=false;
    };

    _main=Main.prototype=new createjs.Container();

    _main.init=function()
    {
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
        setTimeout(_main.resize,1500);
        t.animacja = new createjs.Bitmap('img/purple.png');
        t.animacja.x = -449;
        t.animacja.y = -351;
        stage.addChild(t.animacja);

    }
    function addGlobalElements()
    {

        t.soundBtt = new  OnOffBtt(main.loadedData.getResult('sound_on'),'',main.loadedData.getResult('sound_off'),'Arial');
        t.addChild(t.soundBtt);
        t.soundBtt.cursor ='pointer';
        t.soundBtt.x=855;
        t.soundBtt.y=10;
        if(detectmob()){
            t.soundBtt.x = 835;
            t.soundBtt.y = 30;
        }

        stage.addChild(t.soundBtt);

        if( navigator.userAgent.match(/Android/i))addFs();

    }
    function addFs(){


        console.log('addFSB');
        t.fsBtt = new FullScreenBtt(main.loadedData.getResult('fs_off'), '', main.loadedData.getResult('fs_on'), 'Arial');
        stage.addChild(t.fsBtt);
        t.fsBtt.cursor = 'pointer';
        t.fsBtt.x = 735;
        t.fsBtt.y = 30;

    }

    function centerLoginBox() {
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; // Detect Android devices
        if (isAndroid) {
            //window.orientation is different for iOS and Android
            if (window.orientation == 0 || window.orientation == 180) { //Landscape Mode
                return false;

            }
            else if (window.orientation == 90 || window.orientation == -90) { //Portrait Mode
                return true
            }
        }
        else {
            if (window.orientation == 90 || window.orientation == -90) { //Landscape Mode
                return true;
            }
            else if (window.orientation == 0 || window.orientation == 180) { //Portrait Mode
                return false;
            }
        }
    }

    function loadGFX()
    {

         manifest=[

            //KALKI/

/*
            {id:'k1',src:'img/kalki/k1.jpg'},
            {id:'k2',src:'img/kalki/k2.jpg'},
            {id:'k3',src:'img/kalki/k3.jpg'},
            {id:'k4',src:'img/kalki/k4.jpg'},
            {id:'k5',src:'img/kalki/k5.jpg'},
            {id:'k6',src:'img/kalki/k6.jpg'},
            {id:'k7',src:'img/kalki/k7.jpg'},
            {id:'k8',src:'img/kalki/k8.jpg'},
            {id:'k9',src:'img/kalki/k9.jpg'},
            {id:'k10',src:'img/kalki/k10.jpg'},

*/

            {id:'intro',src:'img/intro_bgd.png'},
            {id:'game_bgd',src:'img/game_bgd.png'},
            {id:'gameover_bgd',src:'img/gameover_bgd.png'},

            {id:'label',src:'img/label.png'},
            {id:'btt',src:'img/btt.png'},
            {id:'btt_big',src:'img/btt_big.png'},
            {id:'btt_on',src:'img/btt_on.png'},
            {id:'btt_big_on',src:'img/btt_big_on.png'},
            {id:'logo_bomerang',src:'img/logo_bomerang.png'},
            {id:'logo_game',src:'img/logo_game.png'},
            {id:'sound_on',src:'img/sound_on.png'},
            {id:'sound_off',src:'img/sound_off.png'},


            {id:'yell',src:'img/yell.png'},
            {id:'pink',src:'img/pink.png'},

            {id:'label_yell',src:'img/label_yell.png'},
            {id:'label_viol',src:'img/label_viol.png'},
            {id:'dol',src:'img/dol.png'},
            {id:'podest',src:'img/podest.png'},
            {id:'yellow',src:'img/yellow.png'},
            {id:'home',src:'img/home.png'},
            {id:'home_on',src:'img/home_on.png'},
            {id:'purple',src:'img/purple.png'},
            {id:'top',src:'img/top.png'},


            {id:'b1',src:'img/1.png'},
            {id:'b2',src:'img/2.png'},
            {id:'b3',src:'img/3.png'},
            {id:'b4',src:'img/4.png'},
            {id:'b5',src:'img/5.png'},
            {id:'b6',src:'img/6.png'},
            {id:'b7',src:'img/7.png'},
            {id:'b8',src:'img/8.png'},
            {id:'b9',src:'img/9.png'},
            {id:'b10',src:'img/10.png'},
            {id:'b11',src:'img/11.png'},
            {id:'b12',src:'img/12.png'},
            {id:'b13',src:'img/13.png'},
            {id:'b14',src:'img/14.png'},
            {id:'b15',src:'img/15.png'},
            {id:'b16',src:'img/16.png'},
            {id:'b17',src:'img/17.png'},
            {id:'b18',src:'img/18.png'},
            {id:'b19',src:'img/19.png'},
            {id:'b20',src:'img/20.png'},
            {id:'b21',src:'img/21.png'},
            {id:'b22',src:'img/22.png'},
            {id:'b23',src:'img/23.png'},
            {id:'b24',src:'img/24.png'},
            {id:'b25',src:'img/intro1.png'},
            {id:'b26',src:'img/intro2.png'},
            {id:'b27',src:'img/intro3.png'},
            {id:'b28',src:'img/intro4.png'},
             {id:'fs_on',src:'img/fs_on.png'},
             {id:'fs_off',src:'img/fs_off.png'}
            /* KREATOR*/



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
        //t.anim.gotoAndStop('stopMe');


        var music = document.getElementById("music");
        music.play();
        console.log('tutaj');

        TweenLite.to(t.animacja,.5,{x:270,y:320,delay:.5});
        /*        setTimeout(function(){
            TweenLite.to(t.hero,.6,{alpha:0})
        },100);
*/
        var step1=new Step1();
        changeScreen(step1);
        addGlobalElements();


    }
    function przesunLogo(){

    }
    function rozjedz(){
        console.log('t.animacja-rozjechania');



    }

      function changeScreen(e){

        if(actualPage)
        {
            t.animacja.y = -351;
            t.animacja.y = -351;

            TweenLite.to(t.animacja,.5,{x:-449,y:-351});
            TweenLite.to(t.animacja,.5,{x:270,y:320,delay:.5});
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