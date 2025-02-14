
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,btt1,logo_game1,p1,p2,pala,palaContainer,piniata,logo_cn;
    function Step1()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    };
    var p = c.extend(Step1, c.Container);
    p.initialize=function() {

       t_bgd1.x = 0;
        tickerTween = TweenMax.to(t_bgd1,20,{x:-1640,repeat:-1,ease:Linear.easeNone});
        playSounds('intro');
        backBtt.visible= true;
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
		

        logo_game1=new c.Container();

        bmp = new  c. Bitmap(main.loadedData.getResult('logo_game3'));
        logo_game1.addChild(bmp);


        logo_game1.x = 368;

        t.addChild(logo_game1);

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.x = 466;
        intro_logo.y = 21;
        t.addChild(intro_logo);


        palaContainer = new c.Container();

        p1=new c.Bitmap(main.loadedData.getResult('intro_victor'));
        p1.regX = p1.image.width/2;
        p1.regY = p1.image.height;
        p1.x = 390+p1.regX;
        p1.y = 310+p1.regY;


        p2=new c.Bitmap(main.loadedData.getResult('intro_valentino'));
        p2.regX = p2.image.width/2;
        p2.regY = p2.image.height;
        p2.x = 1027+p2.regX;
        p2.y = 316+p2.regY;




        piniata=new c.Bitmap(main.loadedData.getResult('intro_piniata'));
        piniata.x = 791;

        
        pala=new c.Bitmap(main.loadedData.getResult('intro_pala'));
        pala.regX = 37;
        pala.regY = 121;
        pala.x = 438+pala.regX;
        pala.y = 510+pala.regY;

        t.addChild(piniata,palaContainer,p2);
        palaContainer.addChild(p1,pala)

        TweenLite.from(palaContainer,2,{x:-1269,ease:Power4.easeOut,delay:1});

        TweenMax.to(pala,1,{rotation:-20,yoyo:true,repeat:-1})
        TweenLite.from(p2,2,{x:2200,ease:Strong.easeOut,delay:1});


        TweenLite.from(piniata,2,{x:2000,ease:Elastic.easeOut,delay:1});
        TweenLite.from(logo_game1,2,{y:-400,ease:Bounce.easeOut,delay:1});
        TweenLite.from(intro_logo,2,{y:-500,ease:Elastic.easeOut,delay:2.5});
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:2+Math.random(),onComplete:wlaczBtt});
        logo_cn = new  c. Bitmap(main.loadedData.getResult('logo_cn'));
         logo_cn.x = 308;
        logo_cn.y = 558;
        logo_cn.scaleX = logo_cn.scaleY = 0.67;
        t.addChild(logo_cn);

    };

    function wlaczBtt(){

        btt1.addEventListener('click',animOut);
    }



    function animOut(){
		
		   turner_metadata.trackAction.push({
              "type": "game", 
               "data": {
                   "pageName": params.pageName,
                   "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                   "interaction": "game start",
                   "gamestart": "1",

                   "gametitle": "victor and valentino",
                   "minigametitle":'smash the pinata',
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
		
        onDispatch();

    }
    function onDispatch(){
        t.mouseEnabled = false;
        TweenMax.killAll();
        t.dispatchEvent({param: Htp1, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Step1 = c.promote(Step1, "Container");

}());
