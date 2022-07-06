// TESTING STEP3
(function()
{
    'use strict';
    var t;
    var startBtt;

    function Step3()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Step3, c.Container);
    p.initialize=function() {
        game.points = [];
        game.nCurrentLevel = 1;
        var bgd1 = new c.Bitmap(main.loadedData.getResult('htp_bgd'));
        t.addChild(bgd1);


        var logo3 =new c.Bitmap(main.loadedData.getResult('logo2'));

        logo3.x = 136  ;
        logo3.y= 42;
        TweenLite.from(logo3,0.7,{delay:1,y:-280,ease:Strong.easeOut});



        var htp_p1 =new c.Bitmap(main.loadedData.getResult('htp_p1'));

        htp_p1.x = 0  ;
        htp_p1.y= 927;
        TweenLite.from(htp_p1,0.7,{delay:1,x:-300,ease:Strong.easeOut});


        var htp_p2 =new c.Bitmap(main.loadedData.getResult('htp_p2'));

        htp_p2.x = 597 ;
        htp_p2.y= 995;
        TweenLite.from(htp_p2,0.7,{delay:1,x:1000,ease:Strong.easeOut});


        var appla =new c.Bitmap(main.loadedData.getResult('htp_appla'));
        t.addChild(appla);
        appla.x = 45 ;
        appla.y= 213;
        TweenLite.from(appla,0.7,{delay:1,y:1400,ease:Elastic.easeOut});
        t.addChild(htp_p1);
        t.addChild(htp_p2);
        startBtt = new c.Bitmap(main.loadedData.getResult('play1'));
        startBtt.addEventListener('click', changeToStep2);
        startBtt.regX = startBtt.image.width / 2;
        startBtt.regY = startBtt.image.height / 2;
        startBtt.x = 245 + startBtt.regX;
        startBtt.y = 1008 + startBtt.regY;
        startBtt.cursor = 'pointer';
        t.addChild(startBtt);
        t.mouseEnabled = false;
        TweenMax.from(startBtt,2,{scaleY:2,y:1700,ease:Elastic.easeOut,onComplete:function(){t.mouseEnabled=true;}});
        t.addChild(logo3);
    }

        function changeToStep2(){
            t.mouseEnabled = false;
            t.mouseChildren =false;

            onChange3();

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
            startBtt = new c.Bitmap(main.loadedData.getResult('play4'));

            startBtt.regY = startBtt.image.height / 2;
            startBtt.x = 214;
            startBtt.y = 1045 + startBtt.regY;
            t.addChild(startBtt);

            TweenMax.to(startBtt,.4,{scale:1.1,x:1700,ease:Strong.easeIn,onComplete:onDispatch});
        }

    function onDispatch() {
        TweenMax.killAll();

        t.dispatchEvent({param: Step4, type: 'changePage', bubbles: true, cancelable: true});
    }

    window.Step3 = c.promote(Step3, "Container");

}());