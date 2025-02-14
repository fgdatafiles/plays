
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,btt1,icon,p1,p2,t1,t2,t3,logo_game1;
    function Htp()
    {

        this.Container_constructor();
        t = this;

        this.setup();


    };
    var p = createjs.extend(Htp, createjs.Container);
    p.setup=function() {
        t_bgd1.x = 0;
        TweenMax.killTweensOf(t_bgd1);
        playSounds('htp');
        bmp = new  c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bmp);
        bmp.alpha=0.2;

        bmp = new  c.Bitmap(main.loadedData.getResult('htp_bgd'));
        t.addChild(bmp);
        TweenLite.from(bmp,2,{y:800,ease:Strong.easeOut});
        bmp.x = 367;
        bmp.y = 7;

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 402;
        intro_logo.y = 21;
        t.addChild(intro_logo);
        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});

        logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game1'));
        logo_game1.x = 1009;
        logo_game1.y = 36;
        logo_game1.scaleX =logo_game1.scaleY = 0.54;
        t.addChild(logo_game1);
        TweenLite.from(logo_game1,2,{y:-200,ease:Strong.easeOut,delay:.8});


        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 725+btt1.regX;
        btt1.y = 432+btt1.regY;

        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random(),onComplete:wlaczBtt});


        var h1 = new c.Container();
        h1.y = -20;

        t.addChild(h1);
        var h2 = new c.Container();
        h2.y = -20;
        t.addChild(h2);
        bmp = new c.Bitmap(main.loadedData.getResult('htp_i1'));
        h1.addChild(bmp);
        bmp.x = 537;
        bmp.y = 223;

        bmp = new c.Bitmap(main.loadedData.getResult('htp_i2'));
        h2.addChild(bmp);
        bmp.x = 805;
        bmp.y = 223;



        var title =   new c.Text(strings.pages.htp.title.text, strings.pages.htp.title.font, '#FDEB5D');
        title.textAlign = 'center';
        title.x = 1640/2+strings.pages.htp.title.x;
        title.lineWidth=1640;
        title.y = 138+strings.pages.htp.title.y;

      t.addChild(title);
        ///collect these
        t1 =   new c.Text(strings.pages.htp.t4.text, strings.pages.htp.t4.font, '#922a24');
        t1.lineWidth=300;
        t1.textAlign='center'
        t1.x = 524+strings.pages.htp.t4.x+t1.lineWidth/2;
        t1.y = 243+strings.pages.htp.t4.y;

        h1.addChild(t1);

        //avoid these

        t1 =   new c.Text(strings.pages.htp.t5.text, strings.pages.htp.t5.font, '#922a24');
        t1.lineWidth=300;
        t1.textAlign='center'
        t1.x = 815+strings.pages.htp.t4.x+t1.lineWidth/2;
        t1.y = 243+strings.pages.htp.t4.y;
        h2.addChild(t1);

        //bonus points
        t1 =   new c.Text(strings.pages.htp.t1.text, strings.pages.htp.t1.font, '#000');
        t1.lineWidth=100;
        t1.textAlign='center'
        t1.x = 572+strings.pages.htp.t1.x+t1.lineWidth/2;
        t1.y = 434+strings.pages.htp.t1.x;

        h1.addChild(t1);

        //bonus time
        t2 =   new c.Text(strings.pages.htp.t2.text, strings.pages.htp.t2.font, '#000');
        t2.lineWidth=100;
        t2.textAlign='center'
        t2.x = 673+strings.pages.htp.t2.x+t2.lineWidth/2;
        t2.y = 434+strings.pages.htp.t2.y;

        h1.addChild(t2);


        //bonus energy
        t3 =   new c.Text(strings.pages.htp.t3.text, strings.pages.htp.t3.font, '#000');
        t2.lineWidth=100;
        t2.textAlign='center'
        t3.x = 687+strings.pages.htp.t3.x
        t3.y = 289+strings.pages.htp.t3.y;
        h1.addChild(t3);



        t.addChild(btt1);




        p1 = new c.Bitmap(main.loadedData.getResult('victor_htp'));
        t.addChild(p1);
        p1.x = 444;
        p1.y = 422;

        p2 = new c.Bitmap(main.loadedData.getResult('valentino_htp'));
        t.addChild(p2);
        p2.x = 1046;
        p2.y = 398;


            TweenLite.from(title,1,{delay:1,alpha:0});
            TweenLite.from(h1,1,{delay:1.4,alpha:0});
            TweenLite.from(h2,1,{delay:1.6,alpha:0});


    };

    function wlaczBtt(){
        btt1.addEventListener('click',onDispatch);
    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Selection, type:'changePage',bubbles:true,cancelable:true});
    }



    window.Htp = createjs.promote(Htp, "Container");

}());
