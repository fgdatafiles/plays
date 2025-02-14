
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,btt1,logo_game1,p1,p2,logo_cn;
    function Step1()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Step1, c.Container);
    p.initialize=function() {



        bmp = new  c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bmp);
        TweenLite.from(bmp,1,{alpha:0});

        p1=new c.Bitmap(main.loadedData.getResult('p1'));
        p1.regX = p1.image.width/2;
        p1.regY = p1.image.height/2;

        p1.x = 386+p1.regX;
        p1.y = 17+p1.regY;


       var globe=new c.Bitmap(main.loadedData.getResult('globe'));
       globe.regX = globe.image.width/2;
       globe.regY = globe.image.height/2;
        globe.x = globe.regX;
        globe.y = globe.regY;


        TweenLite.to(globe,120,{rotation:360,ease:Linear.easeNone})
        var globeContainer = new c.Container();
        t.addChild(globeContainer);

        globeContainer.addChild(globe)

        globeContainer.x = 551;
        globeContainer.y =-262;
        TweenLite.from(globeContainer,15,{y:-600,ease:Strong.easeOut});

        t.addChild(p1);

        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'),'#FFFF00','');
        btt1.regX = 262/2;
        btt1.regY = 261/2;
        btt1.x = 690+btt1.regX;
        btt1.y = 301+btt1.regY;

        t.addChild(btt1);

        logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game'));
        logo_game1.x = 544;
        logo_game1.y = 555;
        t.addChild(logo_game1);








        TweenLite.from(p1,2,{scaleX:0,scaleY:0,ease:Elastic.easeOut,delay:2});
        TweenLite.from(logo_game1,2,{y:-400,ease:Elastic.easeOut,delay:2});

        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:2+Math.random(),onComplete:wlaczBtt});

    };

    function wlaczBtt(){
        btt1.addEventListener('click',animOut);
    }



    function animOut(){
        onDispatch();
		/*
		   turner_metadata.trackAction.push({
              "type": "game", 
               "data": {
                   "pageName": params.pageName,
                   "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                   "interaction": "game start",
                   "gamestart": "1",
                   "minigametitle":'creature catcher',
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
		*/

    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Htp, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Step1 = c.promote(Step1, "Container");

}());
