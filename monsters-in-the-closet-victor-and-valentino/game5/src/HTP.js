
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,btt1,t1,t2,c1,c2,c3,hud;
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


        bmp = new  c.Bitmap(main.loadedData.getResult('game_bgd'));
        t.addChild(bmp);


        this.shape = new c.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.6)").s().dr(0,0,1640,680)
        t.addChild(this.shape);

        var htp_header = new c.Container();
        bmp = new  c.Bitmap(main.loadedData.getResult('htp_header'));
        htp_header.addChild(bmp);
        bmp.x = 402;
        bmp.y = 11;
        t.addChild(htp_header);

        var text1 =   new c.Text(strings.pages.htp.t1.text, strings.pages.htp.t1.font, '#FDEB5D');
        text1.textAlign = 'center';
        text1.x = 1640/2+strings.pages.htp.t1.x;
        text1.lineWidth=1640;
        text1.y = 25+strings.pages.htp.t1.y;
        htp_header.addChild(text1);

        c1 = new  c.Bitmap(main.loadedData.getResult('customer4'));
        t.addChild(c1);
        c1.x = 405;
        c1.y = 310;
        TweenLite.from(c1,1,{y:690,delay:.4});

        c1 = new  c.Bitmap(main.loadedData.getResult('customer5'));
        t.addChild(c1);
        c1.x = 688;
        c1.y = 296;
        TweenLite.from(c1,1,{y:690,delay:.7});

        c1 = new  c.Bitmap(main.loadedData.getResult('customer6'));
        t.addChild(c1);
        c1.x = 1023;
        c1.y = 355;
        TweenLite.from(c1,1,{y:690,delay:.9});




        var d1 = new c.Container();

        d1.x = 405;
        d1.y = 122;
        bmp = new c.Bitmap(main.loadedData.getResult('htp_dymek0'));
        d1.addChild(bmp);

        text1 =   new c.Text(strings.pages.htp.t2.text, strings.pages.htp.t2.font, '#00CB00');
        text1.textAlign = 'center';
        text1.x = 270/2+strings.pages.htp.t2.x;
        text1.lineWidth=1640;
        text1.y = 43+strings.pages.htp.t2.y;
        d1.addChild(text1);



        var d2 = new c.Container();
        d2.x = 685;
        d2.y = 122;

        bmp = new c.Bitmap(main.loadedData.getResult('htp_dymek1'));
        d2.addChild(bmp);

        text1 =   new c.Text(strings.pages.htp.t3.text, strings.pages.htp.t3.font, '#CB9900');
        text1.textAlign = 'center';
        text1.x = 270/2+strings.pages.htp.t2.x;
        text1.lineWidth=1640;
        text1.y = 32+strings.pages.htp.t2.y;
        d2.addChild(text1);

        var d3 = new c.Container();

        d3.x = 965;
        d3.y = 122;
        bmp = new c.Bitmap(main.loadedData.getResult('dymek2'));
        d3.addChild(bmp);

        text1 =   new c.Text(strings.pages.htp.t4.text, strings.pages.htp.t4.font, '#FF0000');
        text1.textAlign = 'center';
        text1.x = 270/2+strings.pages.htp.t2.x;
        text1.lineWidth=1640;
        text1.y = 53+strings.pages.htp.t2.y;
        d3.addChild(text1);

        var arr = new  c.Bitmap(main.loadedData.getResult('htp_arrow'));
        arr.regY =arr.image.height;
        arr.x = 617;
        arr.y = 274+arr.regY;




      var overlay = new c.Bitmap(main.loadedData.getResult('htp_overlay'))
        t.addChild(overlay);
        t.addChild(htp_header);

        t.addChild(d1);
        t.addChild(d2);
        t.addChild(d3);
        t.addChild(arr);
        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 725+btt1.regX;
        btt1.y = 452+btt1.regY;
        t.addChild(btt1);
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random(),onComplete:wlaczBtt});


        TweenLite.from(htp_header,1,{y:-200,ease:Elastic.easeOut});
        TweenLite.from(d1,1,{delay:.8,y:220,alpha:0,ease:Power4.easeOut});
        TweenLite.from(d2,1,{delay:1.4,y:220,alpha:0,ease:Power4.easeOut});
        TweenLite.from(d3,1,{delay:2,y:220,alpha:0,ease:Power4.easeOut});
        TweenLite.from(arr,1,{scale:0,delay:2.2,ease:Power4.easeOut});




    };

    function wlaczBtt(){
        btt1.addEventListener('click',onDispatch);
    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Game, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Htp = c.promote(Htp, "Container");

}());
