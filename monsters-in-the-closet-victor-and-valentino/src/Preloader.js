
(function(){

    'use strict';
    var t;
    var bgd,pre_bgd;
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
         bgd = new c.Bitmap('img/preloader/pre.jpg');
        t.addChild(bgd);

        if (!c.Sound.initializeDefaultPlugins()) {return;}


        var sounds = [

            {id:'empty', src:'sounds/empty.mp3'},
            {id:'intro_open', src:'sounds/intro_open.mp3'},
            {id:'door', src:'sounds/door.mp3'},
            {id:'monster1', src:'sounds/monster1.mp3'},
            {id:'monster2', src:'sounds/monster2.mp3'},
            {id:'monster3', src:'sounds/monster3.mp3'},
            {id:'monster4', src:'sounds/monster4.mp3'},
            {id:'monster5', src:'sounds/monster5.mp3'},
            {id:'monster6', src:'sounds/monster6.mp3'},
            {id:'monster7', src:'sounds/monster7.mp3'},
            {id:'monster8', src:'sounds/monster8.mp3'},
            {id:'monster9', src:'sounds/monster9.mp3'},
            {id:'monte1', src:'sounds/monte1.mp3'},
            {id:'monte2', src:'sounds/monte2.mp3'},
            {id:'monte3', src:'sounds/monte3.mp3'},
            {id:'monte4', src:'sounds/monte4.mp3'},
            {id:'monte5', src:'sounds/monte5.mp3'},
            {id:'monte6', src:'sounds/monte6.mp3'},
            {id:'monte7', src:'sounds/monte7.mp3'},
            {id:'game_over', src:'sounds/game_over.mp3'},
            {id:'game_over_fail', src:'sounds/game_over_fail.mp3'},
            {id:'level_complete', src:'sounds/level_complete.mp3'},
            {id:'click1', src:'sounds/click1.mp3'},
            {id:'click2', src:'sounds/click2.mp3'},
            {id:'click3', src:'sounds/click3.mp3'},
            {id:'intro', src:'sounds/intro.mp3'}

        ];




        pre_bgd=new createjs.Bitmap('img/preloader/pre2.png');
        pre_bgd.x = -189;
        pre_bgd.y = 374;
        t.addChild(pre_bgd);



        var maska=new createjs.Shape(new createjs.Graphics().beginFill('#fff').drawRect(0,0,337,48));
        maska.x = 126;
        maska.y = 368;

        pre_bgd.mask=maska;
        var bgd2=new createjs.Bitmap('img/preloader/pre1.png');
        bgd2.x = 126;
        bgd2.y = 368;
        t.addChild(bgd2);
        t.addChild(maska);
        maska.visible=false;
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
        pre_bgd.x = -189+(321*e.loaded)
    }



    function onComplete(e)
    {
        clear();
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
                "minigametitle":'victor and valentino',
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