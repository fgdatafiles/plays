
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

    };
    var p = c.extend(Step1, c.Container);
    p.initialize=function() {

           t_bgd1.x = 0;
        tickerTween = TweenMax.to(t_bgd1,20,{x:-1640,repeat:-1,ease:Linear.easeNone});
        backBtt.visible= true;
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
		

		
        logo_game1=new c.Container();

        bmp = new  c. Bitmap(main.loadedData.getResult('logo_game4'));
        logo_game1.addChild(bmp);

        logo_game1.x = 580;

        t.addChild(logo_game1);

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.x = 384;
        intro_logo.y = 21;
        t.addChild(intro_logo);


        TweenLite.from(logo_game1,2,{y:-400,ease:Bounce.easeOut,delay:1});
        TweenLite.from(intro_logo,2,{y:-500,ease:Elastic.easeOut,delay:2.5});
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:2+Math.random(),onComplete:wlaczBtt});



         p1 = new  c.Bitmap(main.loadedData.getResult('victor_start'));
        t.addChild(p1);



         p2 = new  c.Bitmap(main.loadedData.getResult('valentino_start'));
        t.addChild(p2);

        p2.regX = p2.image.width/2;
        p2.regY = p2.image.height/2;
        p2.x= -466+p2.regX;
        p2.y= 318+p2.regY;


        p1.regX = p1.image.width/2;
        p1.regY = p1.image.height/2;
        p1.x= 1640+p1.regX;
        p1.y= 327+p1.regY;

        TweenLite.to(p1,2,{x:945+p1.regX,ease:Power4.easeOut});
        TweenLite.to(p2,2,{x:208+p2.regX,ease:Power4.easeOut});
        btt1.addEventListener('mouseover',onMO);
        btt1.addEventListener('mouseout',onMOU);

        logo_cn = new  c. Bitmap(main.loadedData.getResult('logo_cn'));
          logo_cn.x = 308;
        logo_cn.y = 558;
        logo_cn.scaleX = logo_cn.scaleY = 0.67;
        t.addChild(logo_cn);
    };


    function onMO(){


        TweenLite.to(p1,2,{x:1145+p1.regX,ease:Power4.easeOut,scale:1.2});
        TweenLite.to(p2,2,{x:108+p2.regX,ease:Power4.easeOut,scale:1.2});
    }
    function onMOU(){

        TweenLite.to(p1,2,{x:940+p1.regX,ease:Power4.easeOut,scale:1});
        TweenLite.to(p2,2,{x:208+p2.regX,ease:Power4.easeOut,scale:1});
    }
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
                   "minigametitle":'cleanup challenge',
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
        btt1.removeEventListener('mouseover',onMO);
        btt1.removeEventListener('mouseout',onMOU);
        t.mouseEnabled = false;
        TweenLite.to(btt1,1,{alpha:0,ease:Power4.easeOut,scale:1.6});
        TweenLite.to(p1,1,{x:1645,ease:Power4.easeOut,scale:1.6,alpha:0});
        TweenLite.to(p2,1,{x:-466,ease:Power4.easeOut,scale:1.6,alpha:0,onComplete:onDispatch});



    }
    function onDispatch(){


        TweenMax.killAll();
        t.dispatchEvent({param: Htp, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Step1 = c.promote(Step1, "Container");

}());
