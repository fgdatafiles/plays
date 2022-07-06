
(function(){

    'use strict';
    var t;
    var maska,dym1,dym2,dym3,dym4,dym5,dym6;
    var bgd,bgd1,bgd2,bar,progress_bar,pre_container;
    var tt;
    var counter=1;
    var nX;
    var nY;

    var Preloader=function(_manifest){

        this.manifest=_manifest;
        this.initialize();
    };
    var p = Preloader.prototype = new c.Container();

    p.initialize=function()
    {
        t=this;
        t.children=null;
        t.children=[];
        bgd= new c.Bitmap('img/bgd_preloader.png');
        t.addChild(bgd)

        if (!c.Sound.initializeDefaultPlugins()) {return;}
        bgd1=new c.Bitmap('img/pre/p3.png');
        bgd1.x = 118;
        bgd1.y = 413;
        t.addChild(bgd1);

        bgd=new c.Bitmap('img/pre/p2.png');
        bgd.x = -221;
        bgd.y = 413;
        t.addChild(bgd);

        var maska=new c.Shape(new c.Graphics().beginFill('#fff').drawRect(0,0,339,46))
        maska.x = 118;
        maska.y = 413;

        bgd.mask=maska;
        bgd2=new c.Bitmap('img/pre/p1.png');
        bgd2.x = 118;
        bgd2.y = 413;
        t.addChild(bgd2);
        t.addChild(maska);
        maska.visible=false;


        var data = {
            images: ['img/pre/animacja_preloader.png'],
            frames:  [
                [0, 0, 512, 512, 0, -64, -52],
                [512, 0, 512, 512, 0, -64, -52],
                [1024, 0, 512, 512, 0, -64, -52],
                [0, 512, 512, 512, 0, -64, -52],
                [512, 512, 512, 512, 0, -64, -52],
                [1024, 512, 512, 512, 0, -64, -52],
                [0, 1024, 512, 512, 0, -64, -52],
                [512, 1024, 512, 512, 0, -64, -52],
                [1024, 1024, 512, 512, 0, -64, -52]

            ],
            animations: {
                playMe: {
                    frames: [ 1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        6,
                        5,
                        4,
                        3,
                        4,
                        5,
                        8,
                        8,
                        8,
                        5,
                        4,
                        3,
                        2,
                        1,
                        2],
                    next: "stopMe2"
                },
                stopMe:{
                    frames:[0]
                },
                stopMe2:{
                    frames:[2]
                }
            }
        };

        t.hero = new c.Container();
        var spriteSheet = new c.SpriteSheet(data);


        t.anim = new c.Sprite(spriteSheet,'stopMe');
        t.anim.framerate=16;
        t.hero.addChild(t.anim);
        t.hero.x = (574/2) - 200;
        t.hero.y=  30;
        t.addChild(t.hero);


        startLoading()

    };

    function startLoading() {

        t.queue=new c.LoadQueue(false);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);
        t.queue.installPlugin(c.Sound);
        t.queue.loadManifest(t.manifest,true);

    }




    function onProgress(e)
    {
        bgd.x = -221+(340*e.loaded)
    }
    function onComplete(e)
    {
        bgd.visible= bgd2.visible=bgd1.visible=false;
        t.anim.gotoAndPlay('playMe');
        setTimeout(disp,2000);
    }
    function disp(){
       //
        clear();

    }

   
    function clear()
    {
        t.dispatchEvent('completed');
        clearInterval(tt);
        while(t.numChildren)
        {
            if(typeof t.getChildAt(0).removeAllChildren=== 'function')
            {
                t.getChildAt(0).removeAllChildren();
            }
            t.removeChildAt(0);
        }
        if(t.parent)
        {
        t.parent.removeChild(t);
        }
    }
    window.Preloader = Preloader;
}());