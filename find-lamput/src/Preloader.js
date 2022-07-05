
(function(){

    'use strict';
    var t;
    var black,pre_bgd,preloadTime,maska;
    function Preloader(_manifest){

        this.Container_constructor();
        this.manifest=_manifest;
        t=this;
        this.initialize();
    }
    var p = c.extend(Preloader, c.Container);

    p.initialize=function()
    {
       

        if (!c.Sound.initializeDefaultPlugins()) {return;}


        var sounds = [



            {id:'music', src:'sounds/music.mp3'},
            {id:'game_over', src:'sounds/game_over.mp3'},
            {id:'level_complete', src:'sounds/level_complete.mp3'},
            {id:'htp', src:'sounds/htp.mp3'},

            {id:'correct1', src:'sounds/correct1.mp3'},
            {id:'correct2', src:'sounds/correct2.mp3'},
            {id:'correct3', src:'sounds/correct3.mp3'},
            {id:'correct4', src:'sounds/correct4.mp3'},
            {id:'correct5', src:'sounds/correct5.mp3'},
            {id:'correct6', src:'sounds/correct6.mp3'},
            {id:'click2', src:'sounds/click2.mp3'}

        ];
         black = new c.Shape();
        black.graphics.f("#000").s().dr(0,0,1640,768);

        var bgd = new c.Bitmap('img/start_bgd.jpg');
        t.addChild(bgd);
        t.addChild(black)
     pre_bgd=new createjs.Bitmap('img/preloader/pre_bgd.png');
        pre_bgd.x = (1640/2)-255/2;
        pre_bgd.y = 680/2 - 210/2;
        t.addChild(pre_bgd);

         maska=new createjs.Shape(new createjs.Graphics().beginFill('#FF8500').drawRect(0,0,223,13));
         maska.x = pre_bgd.x +16;
         maska.y =pre_bgd.y+ 194;
        maska.scaleX = 0;
        t.addChild(maska)

		
        c.Sound.registerSounds(sounds);
        t.queue=new c.LoadQueue(false);
        t.queue.installPlugin(c.Sound);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);


        setTimeout(function(){

            t.queue.loadManifest(t.manifest,true);
			  preloadTime = getTime();

        },1000)


    }

    function onProgress(e)
    {
        maska.scaleX = e.loaded;
        black.alpha = 1-e.loaded;
    }



    function onComplete(e)
    {
		
		 preloadTime = ((getTime() - preloadTime)/1000).toFixed(1);	
		var arr = preloadTime.split('.');
		preloadTime = arr.join(':');
		console.log(preloadTime);

		
        clear();
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
    window.Preloader = c.promote(Preloader, "Container");

}());