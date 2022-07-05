
(function()
{
    'use strict';
    var t;
    var bgd;
    var steve,startBtt;

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

        logo2.x = 61  ;
        logo2.y= 676;
        TweenLite.from(logo2,0.7,{delay:1,y:1780,ease:Strong.easeOut});


        var logo3 =new c.Bitmap(main.loadedData.getResult('logo2'));

        logo3.x = 175  ;
        logo3.y= 24;
        TweenLite.from(logo3,0.7,{delay:1,y:-280,ease:Strong.easeOut});



        var intro_p1 =new c.Bitmap(main.loadedData.getResult('intro_p1'));
        t.addChild(intro_p1);
        intro_p1.x = 207  ;
        intro_p1.y= 207;
        TweenLite.from(intro_p1,0.7,{delay:1,y:1580,ease:Strong.easeOut});


        startBtt =new FrameBtt(main.loadedData.getResult('play_off'),'',main.loadedData.getResult('play_on'),'#571250',globals.strings.pages.intro.play);
        startBtt.addEventListener('click',changeToStep2);
        startBtt.x =102;
        startBtt.y =1043;
        startBtt.txt.color = '#571250';
        t.addChild(startBtt);
        t.addChild(logo2);
        t.addChild(logo3);
        TweenLite.from(startBtt,1,{delay:1,y:1900,ease:Strong.easeOut});

        TweenLite.from(this,1,{alpha:0});


    };

    function changeToStep2(){
        TweenMax.killAll();
        c.Sound.play('music',{loop:-1,volume:0.3});
       t.dispatchEvent({param: Step2, type:'changePage',bubbles:true,cancelable:true});
    }
    window.Step1 = c.promote(Step1, "Container");

}());