
(function()
{
    'use strict';
    var t;
    var bmp,krata,lewe,prawe;
    function Lift1()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    };
    var p = createjs.extend(Lift1, createjs.Container);
    p.initialize=function() {

        bmp = new  c.Bitmap(main.loadedData.getResult('lift_level1'));
        t.addChild(bmp);

        krata = new  c.Bitmap(main.loadedData.getResult('krata'));
        //x=0]  [y=0]  [scaleX=1]  [scaleY=1]  [rotation=0]  [skewX=0]  [skewY=0]  [regX=0]  [regY=0]
        krata.setTransform(53,72,0,1,0,0,0,0,0);
        t.addChild(krata);

        lewe = new  c.Bitmap(main.loadedData.getResult('lift_l1_left'));
        lewe.setTransform(56,73,0,1,0,0,0,0,0);
        t.addChild(lewe);

        prawe = new  c.Bitmap(main.loadedData.getResult('lift_l1_left'));
        prawe.setTransform(112+prawe.image.width,73,0,1,0,0,0,prawe.image.width,0);
        t.addChild(prawe);
    };

    p.wlaczAnimacje = function(){
        TweenLite.to(krata,1,{scaleX:1,onComplete:wlaczDrzwi})
    };

    function wlaczDrzwi(){
        TweenLite.to(lewe,1,{scaleX:1})
        TweenLite.to(prawe,1,{scaleX:1,onComplete:odjazd})
    }

    function odjazd(){
       var  boom1 = new c.Bitmap(main.loadedData.getResult('lift_l1_boom1'));
        t.addChild(boom1);
        boom1.x = -92;
        boom1.y = 5;

        var  boom2 = new c.Bitmap(main.loadedData.getResult('lift_l1_boom2'));
        t.addChild(boom2);
        boom2.x = -92;
        boom2.y = 5;


        var  boom3 = new c.Bitmap(main.loadedData.getResult('lift_l1_boom3'));
        t.addChild(boom3);
        boom3.x = -216;
        boom3.y = 6;

        var  piorun = new c.Bitmap(main.loadedData.getResult('piorun'));
        t.addChild(piorun);
        piorun.x = -piorun.image.width/2+bmp.image.width/2
        piorun.regY = piorun.image.height;
        piorun.y =bmp.image.height;
     TweenLite.from(boom1,.2,{delay:.2,alpha:0});
     TweenLite.from(boom2,.2,{delay:.3,alpha:0});
     TweenLite.from(boom3,.2,{delay:.4,alpha:0});
     TweenLite.from(piorun,.2,{delay:.5,alpha:0});
     TweenLite.to(t,.2,{delay:.7,alpha:0,onComplete:onDispatch});
    }
    function onDispatch(){
        t.mouseEnabled = false;
        t.removeAllChildren();
        t.dispatchEvent({type:'endAnim',bubbles:false,cancelable:true});
    }

    window.Lift1 = createjs.promote(Lift1, "Container");

}());
