
(function()
{
    'use strict';
    var t;
    var bgd;
    var sh,tl,tr,bl,br,rec,battery,black,billboard;
    var nCurrent,logo2;
    var Step2=function()
    {
        t = this;
        this.initialize();

    };
    var p=Step2.prototype=new c.Container();
    p.initialize=function() {
        nCurrent=1;
        var bgd1=new c.Bitmap(main.loadedData.getResult('intro_bgd'));
        t.addChild(bgd1);

         logo2 =new c.Bitmap(main.loadedData.getResult('logo1'));
        t.addChild(logo2);
        logo2.x = 149  ;
        logo2.y= 72;
        TweenLite.from(logo2,1,{delay:1,y:-400});

        billboard = new c.Container();
        var bgd2 = new c.Bitmap(main.loadedData.getResult('bill'));
        billboard.addChild(bgd2);
        billboard.x =0
        billboard.y=343;
        TweenLite.from(billboard,1,{delay:1,y:-580,ease:Strong.easeOut});
        this.addChild(billboard);

        bgd=new c.Bitmap(main.loadedData.getResult('intro'+nCurrent));
        billboard.addChildAt(bgd,1);
        bgd.setTransform(18,35);

        black = new c.Shape(new c.Graphics().beginFill('#000').drawRect(0, 0, 538, 365).endFill());
        billboard.addChild(black);
        black.x =   18;
        black.y = 35;


         tl=new c.Bitmap(main.loadedData.getResult('tl'));
        billboard.addChild(tl);
        tl.x =271;
        tl.y =200;
         tr=new c.Bitmap(main.loadedData.getResult('tr'));
        billboard.addChild(tr);
        tr.x =271;
        tr.y =200;
         br=new c.Bitmap(main.loadedData.getResult('br'));
        billboard.addChild(br);
        br.x =271;
        br.y =200;

         bl=new c.Bitmap(main.loadedData.getResult('bl'));
        billboard.addChild(bl);
        bl.x =271;
        bl.y =200;

        var skip = new FrameBtt(main.loadedData.getResult('skipBtt'),globals.strings.pages.intro.skip.text,main.loadedData.getResult('skipBtt_on'),'#ffffff',globals.strings.pages.intro.skip);
        t.addChild(skip);
        skip.x = 203;
        skip.y= 806;

        TweenLite.from(skip,1,{delay:1,y:1100,ease:Strong.easeOut});
        skip.addEventListener('click',onSkip);

        setTimeout(secondAnim,2000);


    };
    function onSkip(e){


        t.removeChild(e.currentTarget);
        TweenMax.killAll();

        TweenLite.to(logo2,1,{y:-550});
        nCurrent=15;
        hide();
    }
    function secondAnim(){
        rec=new c.Bitmap(main.loadedData.getResult('rec'));
        rec.x = 484;
        rec.y = 49;
        billboard.addChild(rec);
        battery=new c.Bitmap(main.loadedData.getResult('battery'));
        battery.x = 55;
        battery.y = 356;
        billboard.addChild(battery);

        TweenLite.to(tl,1,{delay:0.5,x:33,y:49,ease:Strong.easeOut});
        TweenLite.to(tr,1,{delay:0.5,x:508,y:49,ease:Strong.easeOut});
        TweenLite.to(bl,1,{delay:0.5,x:33,y:352,ease:Strong.easeOut});
        TweenLite.to(br,1,{delay:0.5,x:508,y:352,ease:Strong.easeOut});
        zgas();
        show();
    }
    function zgas(){
        TweenLite.to(rec,1,{alpha:0.7,onComplete:zapal});
        TweenLite.to(battery,1,{alpha:0.7});
    }
    function zapal(){
        TweenLite.to(rec,1,{alpha:1,onComplete:zgas});
        TweenLite.to(battery,1,{alpha:1});
    }


    function show(){
        TweenLite.to(black,.3,{alpha:0,onComplete:czekaj});
    }

    function czekaj(){
        setTimeout(hide,1000);
    }
    function hide(){
        TweenLite.to(black,.3,{alpha:1,onComplete:zmien});
    }
    function zmien(){
        nCurrent++;
        if(nCurrent==16){
            TweenMax.killAll();
            TweenLite.to(tl,1,{alpha:0});
            TweenLite.to(tr,1,{alpha:0});
            TweenLite.to(bl,1,{alpha:0});
            TweenLite.to(br,1,{alpha:0});
            TweenLite.to(rec,1,{alpha:0});
            TweenLite.to(battery,1,{alpha:0,onComplete:disp});
        }else{
            billboard.removeChild(bgd);
            bgd=new c.Bitmap(main.loadedData.getResult('intro'+nCurrent));
            billboard.addChildAt(bgd,1);
            bgd.setTransform(18,35);
            show();
        }

    }

    function disp(){
        
        t.dispatchEvent({param: Step3, type:'changePage',bubbles:true,cancelable:true});
    }
   

    window.Step2=Step2;

}());
