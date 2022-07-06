
(function()
{
    'use strict';
    var t;
    var bgd;
    var startBtt;

    function Step1()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Step1, c.Container);
    p.initialize=function() {



        playSounds('sIntro');
         bgd=new c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bgd);
        bgd.regX = 768/2;
        bgd.regY = 1365/2;
        bgd.x = 768/2
        bgd.y = 1365/2;
        TweenLite.from(bgd,1,{scaleX:2,scaleY:2,alpha:0})


        var logo2 =new c.Bitmap(main.loadedData.getResult('logo1'));

        logo2.x = 77  ;
        logo2.y= 262;
        TweenLite.from(logo2,0.7,{delay:1,y:1780,ease:Strong.easeOut});


        var logo3 =new c.Bitmap(main.loadedData.getResult('logo2'));

        logo3.x = 136  ;
        logo3.y= 42;
        TweenLite.from(logo3,0.7,{delay:1,y:-280,ease:Strong.easeOut});



        var intro_p1 =new c.Bitmap(main.loadedData.getResult('intro_p1'));
        t.addChild(intro_p1);
        intro_p1.x = 0  ;
        intro_p1.y= 450;
        TweenLite.from(intro_p1,0.7,{delay:1,x:-300,ease:Strong.easeOut});


        var intro_p2 =new c.Bitmap(main.loadedData.getResult('intro_p2'));
        t.addChild(intro_p2);
        intro_p2.x = 361 ;
        intro_p2.y= 660;
        TweenLite.from(intro_p2,0.7,{delay:1,x:1000,ease:Strong.easeOut});

        startBtt =new c.Bitmap(main.loadedData.getResult('play1'));
        startBtt.addEventListener('click',changeToStep2);
        startBtt.regX = startBtt.image.width/2;
        startBtt.regY = startBtt.image.height/2;
        startBtt.x =245+startBtt.regX;
        startBtt.y =1008+startBtt.regY;
        startBtt.cursor='pointer';
        t.addChild(startBtt);
        t.addChild(logo2);
        t.addChild(logo3);
        TweenLite.from(startBtt,1,{delay:1,y:1900,ease:Strong.easeOut});

        TweenLite.from(this,1,{alpha:0});


    };

    function changeToStep2(){
        c.Sound.play('music',{loop:-1,volume:0.3});
        t.mouseEnabled = false;
        t.mouseChildren =false;

        startAnim();

    }
    function startAnim(){
        TweenMax.to(startBtt,.5,{rotation:5,scaleX:1.05,scaleY:1.05,ease:Strong.easeOut});
        TweenMax.to(startBtt,.5,{delay:.5,rotation:-5,ease:Strong.easeOut});
        TweenMax.to(startBtt,.3,{delay:1,scaleX:.95,scaleY:.95,rotation:0,ease:Strong.easeOut,onComplete:change1});
    }
    function change1(){
        t.removeChild(startBtt);
        startBtt =new c.Bitmap(main.loadedData.getResult('play2'));
        startBtt.regX = startBtt.image.width/2;
        startBtt.regY = startBtt.image.height/2;
        startBtt.x =227+startBtt.regX;
        startBtt.y =991+startBtt.regY;
        t.addChild(startBtt);
        TweenMax.to(startBtt,.3,{scaleX:1.1,scaleY:1.1,rotation:-4,ease:Strong.easeOut});
        TweenMax.to(startBtt,.3,{delay:.3,scaleX:0.9,scaleY:0.9,rotation:2,ease:Strong.easeOut,onComplete:onChange2});
    }

    function onChange2(){
        t.removeChild(startBtt);
        startBtt =new c.Bitmap(main.loadedData.getResult('play3'));
        startBtt.regX = startBtt.image.width/2;
        startBtt.regY = startBtt.image.height/2;
        startBtt.x =232+startBtt.regX;
        startBtt.y =1026+startBtt.regY;
        t.addChild(startBtt);
        TweenMax.to(startBtt,.2,{scaleX:1.1,scaleY:1.1,rotation:-2,repeat:5,yoyo:true});
        TweenMax.to(startBtt,.3,{delay:1,scaleX:0.9,scaleY:0.9,rotation:2,ease:Strong.easeOut,onComplete:onChange3});
    }

    function onChange3(){
        t.removeChild(startBtt);
        startBtt =new c.Bitmap(main.loadedData.getResult('play4'));

        startBtt.regY = startBtt.image.height/2;
        startBtt.x =214;
        startBtt.y =1045+startBtt.regY;
        t.addChild(startBtt);
        TweenMax.to(startBtt,.3,{scaleX:0.7});
        TweenMax.to(startBtt,1,{scale:1.1,delay:.4,x:1700,ease:Strong.easeOut,onComplete:onDispatch});
    }

    function onDispatch(){
       TweenMax.killAll();

        t.dispatchEvent({param: Step2, type:'changePage',bubbles:true,cancelable:true});
    }
    window.Step1 = c.promote(Step1, "Container");

}());