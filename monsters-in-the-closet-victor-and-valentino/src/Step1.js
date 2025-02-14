
(function()
{
    'use strict';
    var t,btt1,intro_logo,pin_intro,p1,p2,shadow,glow,ticker_bgd,ticker,valentino_glow,intro_door,door_mask,logo_cn;
    var intro_logo_game;
    var bgd,tweenToKill1,tweenToKill2,tweenToKill3,black;

    function Step1()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(Step1, c.Container);

    p.initialize=function() {

      

        setTimeout(playSounds,2000,'intro');
        setTimeout(playSounds,3600,'door');


        createCookie('skip_map_intro',0,255);
        bgd=new c.Bitmap(main.loadedData.getResult('intro_bgd'));
        t.addChild(bgd);
        bgd.regX = bgd.image.width/2;
        bgd.regY = bgd.image.height/2;
        bgd.x = bgd.regX;
        bgd.y = bgd.regY;

        black=new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(0,0,1640,680));
        t.addChild(black);



        intro_door=new c.Bitmap(main.loadedData.getResult('intro_door'));
        t.addChild(intro_door);
        intro_door.x = 594;
        intro_door.y = 0;



        door_mask = new c.Shape();
        door_mask.graphics.f("rgba(255,0,0,0.996)").s().p("Egi6AqWMAIchUrIBwAAMAx1AABIBAgBIAEAAQAQCpCtZ9MAFzA4Fg");
        door_mask.setTransform(817,271);
        t.addChild(door_mask);
        door_mask.visible=false;
        intro_door.mask=door_mask;


        shadow=new c.Bitmap(main.loadedData.getResult('shadow_intro'));
        shadow.regX = shadow.image.width/2;
        shadow.regY = shadow.image.height/2;
        shadow.x = 457+shadow.regX;
        shadow.y =-95+shadow.regY;//-95+shadow.regY;

        t.addChild(shadow);

        console.log(globals.isMobile+ 'is mobile');
        if(globals.isMobile){


            btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        }else{
            btt1 = new  FrameBtt(main.loadedData.getResult('play_off2'),main.loadedData.getResult('play_on2'));
        }
        //btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.x = 1036;
        btt1.y = 336;

        intro_logo=new c.Bitmap(main.loadedData.getResult('tour_logo_homepage'));
        intro_logo.x = 729;
        intro_logo.y = 20;
        intro_logo.mouseEnabled=false;




        intro_logo_game=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo_game.regX = intro_logo_game.image.width/2;
        intro_logo_game.regY = intro_logo_game.image.height/2;
        intro_logo_game.x = 522+intro_logo_game.regX;
        intro_logo_game.y = 18+intro_logo_game.regY;
        intro_logo_game.mouseEnabled=false;


        glow=new c.Bitmap(main.loadedData.getResult('glow_intro'));
        glow.regX = glow.image.width/2;
        glow.regY = glow.image.height/2;
        glow.x = 658+glow.regX;
        glow.y =-159+glow.regY;
        glow.mouseEnabled=false;

        
        
        p1=new c.Bitmap(main.loadedData.getResult('victor_intro'));
        p1.regX = p1.image.width/2;
        p1.regY = p1.image.height/2;
        p1.x = 499+p1.regX;
        p1.y = 226+p1.regY;
        p1.mouseEnabled=false;




        p2=new c.Bitmap(main.loadedData.getResult('valentino_intro'));
        p2.regX = p2.image.width/2;
        p2.regY = p2.image.height/2;
        p2.x = 674+p2.regX;
        p2.y = 166+p2.regY;
        p2.mouseEnabled=false;


        valentino_glow = new c.Bitmap(main.loadedData.getResult('valentino_glow'));
        valentino_glow.regX = valentino_glow.image.width/2;
        valentino_glow.regY = valentino_glow.image.height/2;
        valentino_glow.x = 711+valentino_glow.regX;
        valentino_glow.y = valentino_glow.regY;
        valentino_glow.mouseEnabled=false;


        t.addChild(shadow);
        t.addChild(p2,p1);
        t.addChild(btt1);
        t.addChild(intro_logo);
        t.addChild(intro_logo_game);
        t.addChild(pin_intro);

        TweenLite.from(bgd,5,{scale:2,alpha:0,ease:Power4.easeInOut});
        TweenLite.to(black,1,{alpha:0,ease:Power4.easeOut});
        TweenLite.from(intro_door,2,{y:-550,delay:3,ease:Bounce.easeOut,onComplete:addGlowFlickering});
        TweenLite.from(shadow,5,{delay:7,scale:2,alpha:0,y:700});
        TweenLite.from(p1,2,{delay:1.6,scale:3,alpha:0,x:200});
        TweenLite.from(p2,2.1,{delay:1.8,scale:3,alpha:0,x:1400,onComplete:addValentinoFlickering});


        TweenLite.from(intro_logo_game,1,{delay:5,scale:0,ease:Bounce.easeOut});
        TweenLite.from(btt1,.5,{alpha:0,y:800,delay:5.3});
        TweenLite.from(intro_logo,1,{delay:5.6,y:-200,ease:Strong.easeOut,onComplete:wlaczbtt1});

        btt1.addEventListener('mouseover',onMO);
        btt1.addEventListener('mouseout',onMOU);
        btt1.addEventListener('click',onStep2);



        logo_cn = new  c. Bitmap(main.loadedData.getResult('logo_cn'));
        logo_cn.x = 308;
        logo_cn.y = 558;
        logo_cn.scaleX = logo_cn.scaleY = 0.67;
        t.addChild(logo_cn);




    };
    function addValentinoFlickering(){
        t.addChildAt(valentino_glow,4);
        TweenLite.from(valentino_glow,1,{alpha:0});
        //valentino_glow.alpha=0;
       //tweenToKill2 =  TweenMax.to(valentino_glow,Math.random(),{alpha:Math.random(),onComplete:flick1});
    }
    function flick1(){
        tweenToKill2 =  TweenMax.to(valentino_glow,Math.random()*3,{alpha:Math.random()*3,onComplete:flick1});

    }
    function addGlowFlickering(){
        t.addChildAt(glow,4);
        TweenLite.from(glow,1,{alpha:0});
       // glow.alpha=0;
        //tweenToKill3 =  TweenMax.to(glow,Math.random(),{alpha:Math.random(),onComplete:flick2});

    }
    function flick2(){
        tweenToKill3 =  TweenMax.to(glow,Math.random()*3,{alpha:Math.random()*3,onComplete:flick2});

    }


    function playS(){
        if(globals.bSound){
            c.Sound.play('tap');
        }
    }
    function onStep2(){
/*turner_metadata.trackAction.push({
		"type": "pageview",
		"data": createStatObject(obj)
	});
	*/
   turner_metadata.trackAction.push({
	   
	    "type": "game", 
		 "data":{
            "pageName": params.pageName,
            "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
            "interaction": "game start",
            "gamestart": "1",
            "gametitle": "victor and valentino",
             "minigametitle":'victor and valentino',
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
        btt1.removeEventListener('click',onStep2);
        t.mouseEnabled = false;
 //       TweenLite.to(ticker,1,{alpha:0})
   //     TweenLite.to(ticker_bgd,1,{alpha:0})
        t.removeChild(glow);
        t.removeChild(valentino_glow);

        TweenLite.to(bgd,3,{scale:2,alpha:0,ease:Power4.easeInOut,onComplete:dispatchEnd});
        TweenLite.to(black,2,{alpha:1,delay:1,ease:Power4.easeOut});
        TweenLite.to(intro_door,2,{y:-550,delay:.3,ease:Strong.easeOut});
        TweenLite.to(shadow,5,{scale:2,alpha:0,y:700});
        TweenLite.to(p1,1,{scale:1.5,alpha:0,x:100});
        TweenLite.to(p2,1,{scale:1.5,alpha:0,x:1500});


        TweenLite.to(logo_cn,1,{alpha:0,ease:Strong.easeOut});
        TweenLite.to(intro_logo_game,1,{scale:0,ease:Strong.easeOut});
        TweenLite.to(btt1,.5,{alpha:0,y:800,delay:.2});
        TweenLite.to(intro_logo,1,{delay:.3,y:-200,ease:Strong.easeOut});


    }
    function onMO(e){

        playSounds('intro');
        TweenLite.to(p1,1,{x:500,scale:1.1});
        TweenLite.to(p2,1,{x:1150,scale:1.1});
        TweenLite.to(valentino_glow,1,{alpha:0});
        TweenLite.to(glow,1,{alpha:0});
        TweenLite.to(intro_door,1,{y:-200});
        TweenLite.to(shadow,1,{scale:1.4});
        TweenLite.to(black,1,{alpha:.6});


    }

    function onMOU(e){

        setTimeout(playSounds,500,'door');
        TweenLite.to(p1,1,{x: 499+p1.regX,scale:1});
        TweenLite.to(p2,1,{x:674+p2.regX,scale:1});
        TweenLite.to(glow,1,{alpha:1});
        TweenLite.to(valentino_glow,1,{alpha:1});
        TweenLite.to(intro_door,1,{y:0,ease:Bounce.easeOut});
        TweenLite.to(shadow,1,{scale:1});
        TweenLite.to(black,1,{alpha:0});
    }


    p.dispatchStep = function(){

        
    };
    function wlaczbtt1(){
        t.mouseEnabled=true;
    }

    function dispatchStep2(){
        TweenMax.killAll();
    }


    function dispatchEnd(){
        t.dispatchEvent({param: Split, type:'changePage',bubbles:true,cancelable:true});
    }



    window.Step1 = c.promote(Step1, "Container");
    

}());
