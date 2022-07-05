var stage;
var _preloader;
var pre_bgd;
(function(){
    'use strict';
    var t;
    var scaleS;
    var manifest;

    var _preloader=function()
    {

    };

    _preloader.initialize=function() {


    };
    var Preloader=function()
    {
        this.initialize();
        t = this;
        this.pageContainer;
        this.nWidth;
        this.nHeight;
        this.context;
        this.oh;
        t=this;
    };

    _preloader=Preloader.prototype=new c.Container();

    _preloader.init=function()
    {
        initStage();

    };
    _preloader.resize=function(){



        this.ow = 580;
        this.oh = 580   ;
        var w = Math.min($('.preloader').width(),580);
        var h = Math.min($('.preloader').height(),580);


        if(stage.scaleX){
            this.scale = Math.min(w / this.ow, h / this.oh);
            stage.scaleX = this.scale;
            stage.scaleY = this.scale;
            stage.canvas.width = this.ow * this.scale;
            stage.canvas.height = this.oh * this.scale;
            stage.update();
        }

    };

    function initStage() {
        var canvas = document.getElementById('stage-canvas');
        _preloader.context = canvas.getContext('2d');
        _preloader.context.imageSmoothingEnabled = true;
        _preloader.context.imageSmoothingQuality = 'high';


        stage = new c.Stage(canvas);

        c.Ticker.timingMode = c.Ticker.RAF_SYNCHED;
        c.Ticker.framerate = 35;
        if (!c.Sound.initializeDefaultPlugins()) {
            return;
        }
        stage.enableMouseOver(30);
        c.Touch.enable(stage);
        c.Ticker.addEventListener('tick', stage);



        _preloader.pageContainer = new c.Container();
        stage.addChild(_preloader.pageContainer);
        
        var bg = new c.Bitmap('img/preloader/pre.jpg');
        _preloader.pageContainer.addChild(bg);

        _preloader.resize();


        pre_bgd=new createjs.Bitmap('img/preloader/pre2.png');
        pre_bgd.x = -189;
        pre_bgd.y = 374;
        _preloader.pageContainer.addChild(pre_bgd);

        var maska=new createjs.Shape(new createjs.Graphics().beginFill('#fff').drawRect(0,0,337,48))
        maska.x = 126;
        maska.y = 368;

        pre_bgd.mask=maska;
        var bgd2=new createjs.Bitmap('img/preloader/pre1.png');
        bgd2.x = 126;
        bgd2.y = 368;
        _preloader.pageContainer.addChild(bgd2);
        _preloader.pageContainer.addChild(maska);
        maska.visible=false;

    }
    _preloader.onComplete= function(){


        console.log('skonczone dogrywanie mozna zrobic resztę')
    }

    function startLoading(){



    }
    function onLoaderComplete(e){


    }


    window.Preloader=Preloader;
}());

