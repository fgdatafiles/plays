
(function()
{
    'use strict';
    var t;
    var bgd;
    var black;

    var startBtt;
    var Step4=function()
    {
        t = this;
        this.initialize();
    };
    var p=Step4.prototype=new c.Container();
    p.initialize=function() {

        main.soundBtt.visible = true;
        var bgd1 = new c.Bitmap(main.loadedData.getResult('htp_bgd'));
        t.addChild(bgd1);
        bgd1.x = 287;
        bgd1.y = 512;
        bgd1.scaleX = bgd1.scaleY = 2;
        bgd1.regX = 287;
        bgd1.regY = 512;
        TweenLite.to(bgd1, .5, {scaleX: 1, scaleY: 1, ease: Strong.easeOut});

        startBtt = new FrameBtt(main.loadedData.getResult('startBtt'), '', main.loadedData.getResult('startBtt_on'), '#fff', null, Step5);
        startBtt.x = 188;
        startBtt.y = 775;
        t.addChild(startBtt);
        TweenLite.from(startBtt, 1, {delay: 1, y: 1100, ease: Strong.easeOut});

    }
    function disp(){
        t.dispatchEvent({param: Step5, type:'changePage',bubbles:true,cancelable:true});
    }
   function anim(){
       var sh = new c.Shape(new c.Graphics().beginFill('#a9e6ff').drawRect(-287, -512, 574, 1024).endFill());
       t.addChild(sh);
       sh.x =  287;
       sh.y =  512;
       TweenMax.from(sh,0.5,{scaleX:0,scaleY:0,onComplete:disp});
   }

    window.Step4=Step4;

}());
