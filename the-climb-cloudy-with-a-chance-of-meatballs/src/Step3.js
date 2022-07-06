
(function()
{
    'use strict';
    var t;
    var bgd;
    var black;
    var c1,c2;
    var steve,steve2;
    var Step3=function()
    {
        t = this;
        this.initialize();
    };
    var p=Step3.prototype=new c.Container();
    p.initialize=function() {

        main.soundBtt.visible = true;
        var bgd1=new c.Bitmap(main.loadedData.getResult('intro_bgd'));
        t.addChild(bgd1);



        black = new c.Shape(new c.Graphics().beginFill('#000').drawRect(-287, -512, 574, 1024).endFill());
        t.addChild(black);
        black.x =  287;
        black.y =  512;
        TweenLite.to(black,1,{alpha:0,onComplete:clear});



        c1 = new FrameBtt(main.loadedData.getResult('c1_off'),globals.strings.pages.choice.easy.text,main.loadedData.getResult('c1_on'),'#ffffff',globals.strings.pages.choice.easy);
        t.addChild(c1);
        c1.x = 86;
        c1.y= -276;

        c2 = new FrameBtt(main.loadedData.getResult('c2_off'),globals.strings.pages.choice.easy.text,main.loadedData.getResult('c2_on'),'#ffffff',globals.strings.pages.choice.hard);
        t.addChild(c2);
        c2.x = 267;
        c2.y= -276;
        c1.addEventListener('click',onEasy);
        c1.addEventListener('mouseover',onC1Over);
        c1.addEventListener('mouseout',onC1Out);
        c2.addEventListener('click',onHard);
        c2.addEventListener('mouseover',onC2Over);
        c2.addEventListener('mouseout',onC2Out);

        TweenLite.to(c1,.5,{y:12,delay:1});
        TweenLite.to(c2,.5,{y:295});

        steve=new c.Bitmap(main.loadedData.getResult('steve'));
        t.addChild(steve);
        steve.x  =155;
        steve.y  =665;


        steve2=new c.Bitmap(main.loadedData.getResult('steve2'));
        steve2.regX = steve2.image.width/2;
        steve2.x  =111+steve2.regX;
        steve2.y  =599;



    };

    function onC1Over(){

        t.removeChild(steve);
        t.addChildAt(steve2,1);
        steve2.scaleX = 1;
    }
    function onC1Out(){

        t.addChildAt(steve,1);
        t.removeChild(steve2);

    }

    function onC2Over(){

        t.removeChild(steve);
        t.addChildAt(steve2,1);
        steve2.scaleX = -1;
    }
    function onC2Out(){
        t.addChildAt(steve,1);
        t.removeChild(steve2);
    }


    function clear(){
        black.graphics.clear();
    }
    function disp(){
        t.dispatchEvent({param: Step4, type:'changePage',bubbles:true,cancelable:true});
    }


    function onEasy(){
        main.mode = 1;
        anim();
    }
    function onHard(){
        main.mode = 2;
        anim();
    }
   function anim(){
       var sh = new c.Shape(new c.Graphics().beginFill('#a9e6ff').drawRect(-287, -512, 574, 1024).endFill());
       t.addChild(sh);
       sh.x =  287;
       sh.y =  512;
       TweenMax.from(sh,0.5,{scaleX:0,scaleY:0,onComplete:disp});
   }

    window.Step3=Step3;

}());
