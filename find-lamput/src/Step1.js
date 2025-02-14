
(function()
{
    'use strict';
    let t;
    let bmp,intro_logo,btt1,logo_game1,p1,p2;
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
        p1.x = 1048;
        p1.y = 123;
        t.addChild(p1);

        p2=new c.Bitmap(main.loadedData.getResult('p2'));
        p2.regX = p2.image.width/2
        p2.regY = p2.image.height;
        p2.x = 617+p2.regX;
        p2.y = 228+p2.regY;
        t.addChild(p2);

       var t1 =   new c.Text(strings.pages.intro.header1.text, strings.pages.intro.header1.font, '#fff');
        t1.textAlign = 'center';

        t1.x = 1640/2
        t1.y = 142+strings.pages.intro.header1.y;
        t.addChild(t1);

        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#FFF',strings.pages.intro.play);
        btt1.regX = 327/2;
        btt1.regY = 71/2;
        btt1.x = 608+btt1.regX;
        btt1.y = 539+btt1.regY;
        btt1.txt.y +=10;

        t.addChild(btt1);

        logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game'));
        logo_game1.x = 694;
        logo_game1.y = 25;
        t.addChild(logo_game1);

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_cn'));
        intro_logo.x = 424;
        intro_logo.y = 529;
        t.addChild(intro_logo);

        TweenLite.from(t1,2,{alpha:0, scaleX:2,ease:Power4.easeOut,delay:1});
        TweenLite.from(p1,2,{x:1800,ease:Power4.easeOut,delay:1});
        TweenLite.from(p2,2,{scaleX:0,scaleY:0,ease:Power4.easeOut,delay:1});
        TweenMax.to(p2,1,{scaleX:0.95,scaleY:1.05,repeat:-1,yoyo:true, ease:Power4.easeInOut,delay:3});
        TweenLite.from(logo_game1,2,{y:-400,ease:Elastic.easeOut,delay:2});
        TweenLite.from(intro_logo,2,{x:-200,ease:Power4.easeOut,delay:.5});
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:2+Math.random(),onComplete:wlaczBtt});

    };

    function wlaczBtt(){
        btt1.addEventListener('click',animOut);
    }



    function animOut(){
        onDispatch();
    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Htp, type:'changePage',bubbles:true,cancelable:true});
    }
    window.Step1 = c.promote(Step1, "Container");

}());
