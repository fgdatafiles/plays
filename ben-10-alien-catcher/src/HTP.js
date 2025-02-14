
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

        playSounds('htp');
        bmp = new  c.Bitmap(main.loadedData.getResult('htp_bgd'));
        t.addChild(bmp);


        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'),'#FFFF00','');
        btt1.regX = 262/2;
        btt1.regY = 261/2;
        btt1.x = 690+btt1.regX;
        btt1.y = 301+btt1.regY;




        var textC = new c.Container();

        var t1 =   new c.Text(strings.pages.htp.title.text, strings.pages.htp.title.font, '#fff');
        t1.textAlign = 'center';
        t1.lineWidth=1640/2;
        t1.x = 1640/2+strings.pages.htp.title.x;
        t1.y = 52+strings.pages.htp.title.y;
        t.addChild(textC);
        textC.addChild(t1);

         t1 =   new c.Text(strings.pages.htp.t1.text, strings.pages.htp.t1.font, '#fff');
        t1.textAlign = 'center';
        t1.lineWidth=288;
        t1.x = 406+t1.lineWidth/2+strings.pages.htp.t1.x;
        t1.y = 178+strings.pages.htp.t1.y;
        t.addChild(textC);
        textC.addChild(t1);


         t1 =   new c.Text(strings.pages.htp.t2.text, strings.pages.htp.t2.font, '#fff');
        t1.textAlign = 'center';
        t1.x = 970+t1.lineWidth/2+strings.pages.htp.t2.x;
        t1.lineWidth=320;
        t1.y = 178+strings.pages.htp.t2.y;
        t.addChild(textC);
        textC.addChild(t1);





        p1 = new c.Bitmap(main.loadedData.getResult('htp1'));
        textC.addChildAt(p1,0);
        p1.x = 424;
        p1.y = 124;


        p2 = new c.Bitmap(main.loadedData.getResult('htp2'));
        textC.addChildAt(p2,0);
        p2.x = 841;
        p2.y =129;

        t.addChild(btt1);

        t.addChild(intro_logo);
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random(),onComplete:wlaczBtt});
        for(var i=0;i<textC.numChildren;i++){
            TweenLite.from(textC.getChildAt(i),1,{delay:i*.2,alpha:0});
        }

    };

    function wlaczBtt(){

        btt1.addEventListener('click',onDispatch);
    }
    function onDispatch(){


        c.Sound.play('music',{loop:-1});
        t.mouseEnabled = false;
        t.dispatchEvent({param: Level1, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Htp= c.promote(Htp, "Container");


}());
