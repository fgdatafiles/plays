
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

           t_bgd1.x = 0;
        tickerTween = TweenMax.to(t_bgd1,20,{x:-1640,repeat:-1,ease:Linear.easeNone});
        playSounds('intro');
        bmp = new  c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bmp);
        TweenLite.from(bmp,1,{alpha:0});
        backBtt.visible = true;
        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 725+btt1.regX;
        btt1.y = 432+btt1.regY;

        t.addChild(btt1);
		logo_cn = new  c. Bitmap(main.loadedData.getResult('logo_cn'));
        logo_cn.x = 308;
        logo_cn.y = 558;
        logo_cn.scaleX = logo_cn.scaleY = 0.67;
        t.addChild(logo_cn);
        logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game2'));
        logo_game1.x = 580;
        logo_game1.y = 42;
        t.addChild(logo_game1);

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.x = 721;
        intro_logo.y = 34;
        t.addChild(intro_logo);


        p1=new c.Bitmap(main.loadedData.getResult('victor_intro'));
        p1.regX = p1.image.width/2;
        p1.regY = p1.image.height;
        p1.x = 945+p1.regX;
        p1.y = 371+p1.regY;


        p2=new c.Bitmap(main.loadedData.getResult('valentino_intro'));
        p2.regX = p2.image.width/2;
        p2.regY = p2.image.height;
        p2.x = 494+p2.regX;
        p2.y = 326+p2.regY;

        t.addChild(p1,p2);



        TweenLite.from(p1,2,{x:1869,ease:Power4.easeOut,delay:1});
        TweenLite.from(p2,2,{x:-300,scaleY:.5,ease:Power4.easeOut,delay:1});


        TweenLite.from(logo_game1,2,{y:-400,ease:Elastic.easeOut,delay:2});
        TweenLite.from(intro_logo,2,{y:-200,ease:Elastic.easeOut,delay:2.5});
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:2+Math.random(),onComplete:wlaczBtt});
    };

    function wlaczBtt(){
        btt1.addEventListener('click',animOut);
    }



    function animOut(){
        onDispatch();
		
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
		

    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Htp, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Step1 = c.promote(Step1, "Container");

}());
