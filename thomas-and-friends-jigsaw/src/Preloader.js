
(function(){

    'use strict';
    var t;
    var bgd,cartoonito,maska;
    var pasek;
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
        //if (!c.Sound.initializeDefaultPlugins()) {return;}
		
		
		      var sounds = [
            {id:'empty', src:'sounds/empty.mp3'},
            {id:'ok', src:'sounds/click.mp3'},
            {id:'throw', src:'sounds/memory_rollover.mp3'},
            {id:'success1', src:'sounds/success1.mp3'},
            {id:'success2', src:'sounds/success2.mp3'},
            {id:'success3', src:'sounds/success3.mp3'},
            {id:'success4', src:'sounds/success4.mp3'},
            {id:'start', src:'sounds/start.mp3'},
            {id:'intro', src:'sounds/intro.mp3'}

        ];


        var anim = {
            "framerate":24,
            "images":["img/cartoonito_preloader.png"],
            "frames":[
                [0, 0, 1024, 512, 0, 0, 0],
                [1024, 0, 1024, 512, 0, 0, 0],
                [2048, 0, 1024, 512, 0, 0, 0],
                [0, 512, 1024, 512, 0, 0, 0],
                [1024, 512, 1024, 512, 0, 0, 0],
                [2048, 512, 1024, 512, 0, 0, 0],
                [0, 1024, 1024, 512, 0, 0, 0],
                [1024, 1024, 1024, 512, 0, 0, 0],
                [2048, 1024, 1024, 512, 0, 0, 0],
                [0, 1536, 1024, 512, 0, 0, 0],
                [1024, 1536, 1024, 512, 0, 0, 0],
                [2048, 1536, 1024, 512, 0, 0, 0],
                [0, 2048, 1024, 512, 0, 0, 0],
                [1024, 2048, 1024, 512, 0, 0, 0],
                [2048, 2048, 1024, 512, 0, 0, 0],
                [0, 2560, 1024, 512, 0, 0, 0],
                [1024, 2560, 1024, 512, 0, 0, 0],
                [2048, 2560, 1024, 512, 0, 0, 0],
                [0, 3072, 1024, 512, 0, 0, 0],
                [1024, 3072, 1024, 512, 0, 0, 0]
            ],
            "animations":{
                "stopMe": {"frames": [19], "speed": 1},
                "startMe": {"frames": [0], "speed": 1},
                "playMe": {
                    "next": "stopMe",
                    "frames": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18
                    ],
                    "speed": 1
                }
            }
        };

        var spriteSheet = new c.SpriteSheet(anim);
        cartoonito = new c.Sprite(spriteSheet,'startMe');

        cartoonito.x = 441;
        cartoonito.y = 129;
        //cartoonito.y =679/2 - 421/2;
        t.addChild(cartoonito);

        c.Sound.registerSounds(sounds);

        t.queue=new c.LoadQueue(false);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);
        t.queue.installPlugin(c.Sound);

        setTimeout(function(){

            cartoonito.gotoAndPlay('playMe');
        },2000);
        setTimeout(function(){
            t.queue.loadManifest(t.manifest,true);
        },3000);


        pasek = new c.Shape(new c.Graphics().f('#704A8C').drawRoundRectComplex(661,410,314,30,10,10,10,10));
        t.addChild(pasek);

        maska = new c.Shape(new c.Graphics().f('#ff0000').drawRect(0,0,314,30));
        maska.x = 661;
        maska.y = 410;
        t.addChild(maska);
        maska.scaleX = 0;
        pasek.mask=maska;
        maska.visible = false;
    }

    function onProgress(e)
    {

        maska.scaleX = e.loaded;

    }
    function onComplete(e)
    {
        TweenLite.to(t,1,{alpha:0,onComplete:disp});

        //   setTimeout(disp,1000);
    }
    function disp(){
        
        clear();
    }

    function clear()
    {

        console.log('reloader clear');
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