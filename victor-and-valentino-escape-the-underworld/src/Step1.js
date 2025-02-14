
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,btt1,logo_game1,p1,p2,i1,i2,i3,i4,i5,logo_cn;
    function Step1()
    {
    this.Container_constructor();

        t = this;
        this.initialize();
        this.setup();
    };

    var p = createjs.extend(Step1, createjs.Container);
    p.setup=function() {

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

        logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game1'));
        logo_game1.x = 598;
        logo_game1.y = 142;
        t.addChild(logo_game1);

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.x = 721;
        intro_logo.y = 34;
        t.addChild(intro_logo);


        p1=new c.Bitmap(main.loadedData.getResult('victor_intro'));
        p1.regX = p1.image.width/2;
        p1.regY = p1.image.height;
        p1.x = 401+p1.regX;
        p1.y = 203+p1.regY;


        p2=new c.Bitmap(main.loadedData.getResult('valentino_intro'));
        p2.regX = p2.image.width/2;
        p2.regY = p2.image.height;
        p2.x = 890+p2.regX;
        p2.y = 203+p2.regY;

        t.addChild(p1,p2);


         i1 =new c.Bitmap(main.loadedData.getResult('intro_icon2'));
        i1.regX = i1.image.width/2;
        i1.regY = i1.image.height/2;
        i1.x = 496+i1.regX;
        i1.y = 551+i1.regY;
        t.addChild(i1);


         i2 =new c.Bitmap(main.loadedData.getResult('intro_icon2'));
        i2.regX = i2.image.width/2;
        i2.regY = i2.image.height/2;
        i2.x = 318+i2.regX;
        i2.y = 460+i2.regY;
        i2.scaleX =i2.scaleY = 0.666;
        t.addChild(i2);




        i3 =new c.Bitmap(main.loadedData.getResult('intro_icon2'));
        i3.regX = i3.image.width/2;
        i3.regY = i3.image.height/2;
        i3.x = 1187+i3.regX;
        i3.y = 458+i3.regY;
        i3.scaleX =i3.scaleY = 0.666;
        t.addChild(i3);



        i4 =new c.Bitmap(main.loadedData.getResult('intro_icon1'));
        i4.regX = i4.image.width/2;
        i4.regY = i4.image.height/2;
        i4.x = 621+i4.regX;
        i4.y = 340+i4.regY;

        t.addChild(i4);

        i5 =new c.Bitmap(main.loadedData.getResult('intro_icon3'));
        i5.regX = i5.image.width/2;
        i5.regY = i5.image.height/2;
        i5.x = 934+i5.regX;
        i5.y = 473+i5.regY;
        t.addChild(i5);


        TweenLite.from(p1,2,{x:269,y:600,scale:0,ease:Power4.easeOut,delay:1});
        TweenLite.from(p2,2,{y:-100,scaleY:.5,ease:Bounce.easeOut,delay:1});


        TweenLite.from(logo_game1,2,{y:-200,ease:Elastic.easeOut,delay:2});
        TweenLite.from(intro_logo,2,{y:-200,ease:Elastic.easeOut,delay:2.5});
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:2+Math.random(),onComplete:wlaczBtt});
        for(var i=1;i<6;i++){

            var item = eval('i'+i);

            TweenLite.from(item,2+Math.random(),{scale:0,ease:Elastic.easeOut,delay:3+Math.random()});
        }
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
                "minigametitle":'escape the underworld',
                "gamestart": "1",
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
		
		
        onDispatch();

    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Htp, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Step1 = createjs.promote(Step1, "Container");

}());
