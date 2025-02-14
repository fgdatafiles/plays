
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,btt1,t1,t2,p1,p2,hud,logo_game1;
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
        level1msLeft=0;
        level2msLeft=0;

        bmp = new  c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bmp);

        this.shape = new c.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.9)").s().dr(0,0,1640,680)
        t.addChild(this.shape);


        bmp = new  c.Bitmap(main.loadedData.getResult('htp_bgd'));
        t.addChild(bmp);
        bmp.x = 367;
        bmp.y = 7;

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));

        intro_logo.scaleX = intro_logo.scaleY = 0.77;
        intro_logo.x = 402;
        intro_logo.y =29;

        t.addChild(intro_logo);
        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});


        logo_game1=new c.Container();

        bmp = new  c. Bitmap(main.loadedData.getResult('logo_game4'));
        logo_game1.addChild(bmp);
        logo_game1.scaleX = logo_game1.scaleY = 0.52;
        logo_game1.x = 962;
        logo_game1.y = 26;
        t.addChild(logo_game1);
        TweenLite.from(logo_game1,2,{y:-200,ease:Strong.easeOut,delay:.8});



        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 725+btt1.regX;
        btt1.y = 432+btt1.regY;
        t.addChild(btt1);
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random(),onComplete:wlaczBtt});




        var text1 =   new c.Text(strings.pages.htp.t1.text, strings.pages.htp.t1.font, '#F9CC99');
        text1.textAlign = 'center';
        text1.x = 1640/2+strings.pages.htp.t2.x;
        text1.lineWidth=1640;
        text1.y = 168+strings.pages.htp.t2.y;
        t.addChild(text1);



         text1 =   new c.Text(strings.pages.htp.t2.text, strings.pages.htp.t2.font, '#DDB517');
        text1.textAlign = 'center';
        text1.x = 1640/2+strings.pages.htp.t2.x;
        text1.lineWidth=1640;
        text1.y = 270+strings.pages.htp.t2.y;
        t.addChild(text1);


        for (var i=0;i<11;i++){
            var htp = new c.Bitmap(main.loadedData.getResult('htp'+i));
            t.addChild(htp);

            htp.regX = htp.image.width/2;
            htp.regY = htp.image.height/2;

            htp.x =htp_objects[i].x+htp.regX;
            htp.y =htp_objects[i].y+htp.regY;
            htp.scaleX = htp.scaleY=0;
            TweenLite.to(htp,1,{scale:0.8,delay:i*.1,ease:Bounce.easeOut})
        }



    };

    function wlaczBtt(){
        btt1.addEventListener('click',onDispatch);
    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Level1, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Htp = c.promote(Htp, "Container");

}());
