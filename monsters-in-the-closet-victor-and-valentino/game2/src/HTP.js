
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,btt1,icon,p1,p2,t1,t2,t3;
    function Htp()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(Htp, c.Container);
    p.initialize=function() {

        
         t_bgd1.x = 0;
        TweenMax.killTweensOf(t_bgd1);
        playSounds('htp');
        bmp = new  c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bmp);
        bmp.alpha=0.2;

        bmp = new  c.Bitmap(main.loadedData.getResult('htp_bgd'));
        t.addChild(bmp);
        TweenLite.from(bmp,2,{alpha:0,ease:Strong.easeOut});
        bmp.x = 367;
        bmp.y = 7;

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 402;
        intro_logo.y = 29;
        t.addChild(intro_logo);

        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});

        var logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game2_small'));
        logo_game1.x = 971;

        logo_game1.y = 31;
        t.addChild(logo_game1);

        TweenLite.from(logo_game1,2,{y:-200,ease:Strong.easeOut,delay:.8});

        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 725+btt1.regX;
        btt1.y = 452+btt1.regY;

        var textC = new c.Container();
         bmp=new c.Bitmap(main.loadedData.getResult('htp_bgd_title'));
        bmp.x = 461;
        bmp.y = 153;
        textC.addChild(bmp);
        var t1 =   new c.Text(strings.pages.htp.title.text, strings.pages.htp.title.font, '#fff');
        t1.textAlign = 'center';
        t1.lineWidth=1640/2;
        t1.x = 1640/2+strings.pages.htp.title.x;
        t1.y = 179+strings.pages.htp.title.y;
        t.addChild(textC);
        textC.addChild(t1);

         t1 =   new c.Text(strings.pages.htp.t1.text, strings.pages.htp.t1.font, '#99ff00');
        t1.textAlign = 'center';
        t1.lineWidth=288;
        t1.x = 458+t1.lineWidth/2+strings.pages.htp.t1.x;
        t1.y = 268+strings.pages.htp.t1.y;
        t.addChild(textC);
        textC.addChild(t1);


         t1 =   new c.Text(strings.pages.htp.t2.text, strings.pages.htp.t2.font, '#ff3333');
        t1.textAlign = 'center';
        t1.x = 1047+t1.lineWidth/2+strings.pages.htp.t2.x;
        t1.lineWidth=320;
        t1.y = 268+strings.pages.htp.t2.y;
        t.addChild(textC);
        textC.addChild(t1);





        p1 = new c.Bitmap(main.loadedData.getResult('htp1'));
        textC.addChild(p1);
        p1.x = 403;
        p1.y = 296;

        p2 = new c.Bitmap(main.loadedData.getResult('htp2'));
        textC.addChild(p2);
        p2.x = 851;
        p2.y = 296;

        t.addChild(btt1);
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random(),onComplete:wlaczBtt});
        for(var i=0;i<textC.numChildren;i++){
            TweenLite.from(textC.getChildAt(i),1,{delay:2+i*.2,alpha:0});
        }

    };

    function wlaczBtt(){
        btt1.addEventListener('click',onDispatch);
    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Level1, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Htp= c.promote(Htp, "Container");


}());
