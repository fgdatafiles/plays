
(function()
{
    'use strict';
    var t;
    var bgd;
    var steve,startBtt;

    var Step1=function()
    {
        t = this;
        this.initialize();

    };
    var p=Step1.prototype=new c.Container();
    p.initialize=function() {
        main.soundBtt.visible = true;
        playSounds('sIntro');
         bgd=new c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bgd);
        bgd.regX = 574/2;
        bgd.regY = 1024/2;
        bgd.x = 574/2
        bgd.y = 1024/2;
        TweenLite.from(bgd,1,{scaleX:2,scaleY:2,alpha:0})


        var logo2 =new c.Bitmap(main.loadedData.getResult('logo1'));
        t.addChild(logo2);
        logo2.x = 149  ;
        logo2.y= 72;
        TweenLite.from(logo2,0.7,{delay:1,y:-280,ease:Strong.easeOut});

        startBtt =new FrameBtt(main.loadedData.getResult('startBtt'),'',main.loadedData.getResult('startBtt_on'),'#fff',null,Step2);
        startBtt.x =188;
        startBtt.y =775;
        t.addChild(startBtt);


        TweenLite.from(startBtt,1,{delay:1,y:1100,ease:Strong.easeOut});

        TweenLite.from(this,1,{alpha:0});


    };

    function changeToStep2(){
        TweenMax.killAll();
       t.dispatchEvent({param: Step2, type:'changePage',bubbles:true,cancelable:true});
    }
    window.Step1=Step1;

}());
