var pasek;
(function(){

    'use strict';
    var t;
    var maska;

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
        if (!c.Sound.initializeDefaultPlugins()) {return;}

        var sounds = [
            {id:'fail1', src:'sounds/fail1.mp3'},
            {id:'fail2', src:'sounds/fail2.mp3'},
            {id:'fail3', src:'sounds/fail3.mp3'},
            {id:'fail4', src:'sounds/fail4.mp3'},

            {id:'success1', src:'sounds/success1.mp3'},
            {id:'success2', src:'sounds/success2.mp3'},
            {id:'success3', src:'sounds/success3.mp3'},
            {id:'success4', src:'sounds/success4.mp3'},

            {id:'show1', src:'sounds/show1.mp3'},
            {id:'show2', src:'sounds/show2.mp3'},


            {id:'empty', src:'sounds/empty.mp3'},
            {id:'click1', src:'sounds/click1.mp3'},
            {id:'click2', src:'sounds/click2.mp3'},

            {id:'countdown', src:'sounds/countdown.mp3'},
            {id:'music', src:'sounds/music.mp3'},
            {id:'gameover', src:'sounds/gameover.mp3'}

        ];


        t.x = 1680/2 -1920/2;
        t.y = 720/2 - 768/2;
        var gfx =  new c.Bitmap('img/bgd_intro.png');
        t.addChild(gfx)
        gfx =  new c.Bitmap('img/pre_gfx.png');
        t.addChild(gfx)
        gfx.x = 756;
        gfx.y = 141;


        pasek = new c.Shape(new c.Graphics().f('#eb008b').drawRect(0,0,263,22))
        maska = new c.Shape(new c.Graphics().f('#704A8C').drawRoundRectComplex(829,495  ,263,22,11,11,11,11));

        pasek.x =829;
        pasek.y =495;
        t.addChild(maska);
        t.addChild(pasek);
        pasek.scaleX = 0;

        maska.visible = false;
        pasek.mask = maska;

        c.Sound.registerSounds(sounds);

        t.queue=new c.LoadQueue(false);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);
        t.queue.installPlugin(c.Sound);

        t.queue.loadManifest(t.manifest,true);


    }

    function onProgress(e)
    {

        pasek.scaleX = e.loaded;

    }
    function onComplete(e)
    {
        // TweenLite.to(t,1,{alpha:0});

          setTimeout(disp,100);
    }
    function disp(){
        clear();
    }

    function clear()
    {
        t.dispatchEvent('completed');

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