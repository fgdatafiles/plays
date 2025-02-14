
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,btt1,t1,t2,t3,p1,p2,hud,logo_game1;
    function Htp1()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(Htp1, c.Container);
    p.initialize=function() {
		
		     t_bgd1.x = 0;
        TweenMax.killTweensOf(t_bgd1);
        playSounds('htp');
        level1Points=0;
        level2Points=0;
        bmp = new  c.Bitmap(main.loadedData.getResult('htp1_bgd'));
        t.addChild(bmp);

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.x = 402;
        intro_logo.y = 11;
        t.addChild(intro_logo);
        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});


        logo_game1=new c.Container();

        bmp = new  c. Bitmap(main.loadedData.getResult('logo_game3'));
        logo_game1.addChild(bmp);
        logo_game1.scaleX = logo_game1.scaleY = 0.52;
        logo_game1.x = 1034;
        logo_game1.y = -57;
        t.addChild(logo_game1);
        TweenLite.from(logo_game1,2,{y:-200,ease:Strong.easeOut,delay:.8});

        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 1038+btt1.regX;
        btt1.y = 432+btt1.regY;
        t.addChild(btt1);
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random(),onComplete:wlaczBtt});

        var hudC = new c.Container();
        hudC.x = 614;
        hudC.y = 14;
        TweenLite.from(hudC,2,{y:-200,ease:Strong.easeOut,delay:.4});


        hud=new c.Bitmap(main.loadedData.getResult('hud_htp1'));
        hudC.addChild(hud);
        var text1 =   new c.Text(strings.pages.htp.title.text, strings.pages.htp.title.font, '#fff');
        text1.textAlign = 'center';
        text1.lineWidth=397;
        text1.x = 200+strings.pages.htp.title.x+11;

        text1.y = 121+strings.pages.htp.title.y;
        hudC.addChild(text1);






        p1 = new c.Bitmap(main.loadedData.getResult('htp1_p1'));
        t.addChild(p1);
        p1.regY = p1.image.height/2;
        p1.x = 611;
        p1.y = 88+p1.regY;

        p2 = new c.Bitmap(main.loadedData.getResult('htp1_p2'));
        t.addChild(p2);
        p2.x = 915+36;
        p2.y = 384+182;
        p2.regX = 36;
        p2.regY =182;

        TweenMax.to(p2,1,{x:2000});
        TweenMax.from(p1,1,{alpha:0});

        TweenMax.to(p2,1,{rotation:-20,yoyo:true,repeat:-1,delay:2});

        t3 = new c.Container();
        t.addChild(t3);

        var bmp = new c.Bitmap(main.loadedData.getResult('htp1_t3'));
        t3.addChild(bmp);
        t3.regX =271;
        t3.regY =228;
        t3.x = 395+t3.regX;
        t3.y = 171+t3.regY;
        TweenMax.from(t3,2,{scale:0,delay:2,ease:Elastic.easeOut});

        var text1 =   new c.Text(strings.pages.htp.t3.text, strings.pages.htp.t3.font, '#49291F');
        text1.textAlign = 'center';
        text1.x = 271/2+strings.pages.htp.t3.x;
        text1.lineWidth=271;
        text1.y = 48+strings.pages.htp.t3.y;
        t3.addChild(text1);



        t1 = new c.Container();

         bmp = new c.Bitmap(main.loadedData.getResult('htp1_t1'));
        t1.addChild(bmp);
        t1.regX =284;
        t1.regY =10;
        t1.x = 410+t1.regX;
        t1.y = 379+t1.regY;
        TweenMax.from(t1,2,{scale:0,delay:2,ease:Elastic.easeOut});

        var text1 =   new c.Text(strings.pages.htp.t1.text, strings.pages.htp.t1.font, '#49291F');
        text1.textAlign = 'center';
        text1.x = 310/2+strings.pages.htp.t1.x;
        text1.lineWidth=397;
        text1.y = 135+strings.pages.htp.t1.y;
        t1.addChild(text1);


        t2 = new c.Container();
        bmp = new c.Bitmap(main.loadedData.getResult('htp1_t2'));

        t2.addChild(bmp)
        t.addChild(t2);
        t2.regX =66;
        t2.regY =286;
        t2.x = 933+t2.regX;
        t2.y = 191+t2.regY;


         text1 =   new c.Text(strings.pages.htp.t2.text, strings.pages.htp.t2.font, '#49291F');
        text1.textAlign = 'center';
        text1.x = 310/2+strings.pages.htp.t2.x;
        text1.lineWidth=397;
        text1.y = 54+strings.pages.htp.t2.y;
        t2.addChild(text1);

        TweenMax.from(t2,2,{scale:0,delay:2,ease:Elastic.easeOut});
        TweenMax.from(p2,1,{x:2000});



        t.addChild(p1,p2,t1,t2,hudC);



    };

    function wlaczBtt(){
        btt1.addEventListener('click',onDispatch);
    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Game1, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Htp1 = c.promote(Htp1, "Container");

}());
