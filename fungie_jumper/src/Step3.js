
(function()
{
    'use strict';
    var t;
    var bgd;

    function Step3()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Step3, c.Container);
    p.initialize=function() {
        game.points=[];
        game.nCurrentLevel=1;
        var bgd1=new c.Bitmap(main.loadedData.getResult('htp_bgd'));
        t.addChild(bgd1);

        console.log('HTP-INIT')
       var  startBtt =new FrameBtt(main.loadedData.getResult('startBtt'),'',main.loadedData.getResult('startBtt_on'),'#fff',null);
       startBtt.addEventListener('click',disp)
        startBtt.x =232;
        startBtt.y =1033;
        t.addChild(startBtt);

        TweenLite.from(startBtt,1,{delay:1,y:1900,ease:Strong.easeOut});


        main.mode = 1;
    };

    function disp(){

        t.dispatchEvent({param: Step4, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Step3 = c.promote(Step3, "Container");

}());