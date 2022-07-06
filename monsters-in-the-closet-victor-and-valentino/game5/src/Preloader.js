
(function(){

    'use strict';
    var t;
    var bgd,pre_bgd,maska;
	var preloadTime;
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

            {id:'empty', src:'sounds/empty.mp3'},
            {id:'fail', src:'sounds/fail.mp3'},
            {id:'success', src:'sounds/success.mp3'},



            {id:'click1', src:'sounds/click1.mp3'},
            {id:'click2', src:'sounds/click2.mp3'},
            {id:'click3', src:'sounds/click3.mp3'},
            {id:'intro', src:'sounds/intro.mp3'},
            {id:'game_over', src:'sounds/game_over.mp3'},

            {id:'htp', src:'sounds/htp.mp3'},
            {id:'level_complete', src:'sounds/level_complete.mp3'},
            {id:'game_over_fail', src:'sounds/game_over_fail.mp3'},


            {id:'hit1', src:'sounds/hit1.mp3'},
            {id:'hit2', src:'sounds/hit2.mp3'},
            {id:'hit3', src:'sounds/hit3.mp3'},
            {id:'hit4', src:'sounds/hit4.mp3'},
            {id:'hit5', src:'sounds/hit5.mp3'},
            {id:'hit6', src:'sounds/hit6.mp3'},
            {id:'hit7', src:'sounds/hit7.mp3'},
            {id:'htp', src:'sounds/htp.mp3'},
            {id:'level_complete', src:'sounds/level_complete.mp3'}



        ];



    pre_bgd=new createjs.Bitmap('img/preloader/pre_bgd.png');
        pre_bgd.x = (1640/2)-279/2;
        pre_bgd.y = 680/2 - 212/2;
        t.addChild(pre_bgd);

         maska=new createjs.Shape(new createjs.Graphics().beginFill('#22459f').drawRect(0,0,245,20));
         maska.x = pre_bgd.x +16;
         maska.y =pre_bgd.y+ 131;
        maska.scaleX = 0;
        t.addChild(maska)
        c.Sound.registerSounds(sounds);
        t.queue=new c.LoadQueue(false);
        t.queue.installPlugin(c.Sound);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);


        setTimeout(function(){
		preloadTime = getTime();
            t.queue.loadManifest(t.manifest,true);

        },1000)


    }

    function onProgress(e)
    {
        maska.scaleX = e.loaded;
    }



    function onComplete(e)
    {
		
		 preloadTime = ((getTime() - preloadTime)/1000).toFixed(1);	
		var arr = preloadTime.split('.');
		preloadTime = arr.join(':');
		console.log(preloadTime);
        turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "game load",
                "minigametitle":'taco time',
                "gameloadduration": preloadTime,
                "gamelaunch": "1",
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": 'nvs',
                "gamemilestones": 'nvs',
                "gamemap": 'nvs',
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
        });
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