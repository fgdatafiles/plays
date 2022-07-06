
(function()
{
    'use strict';
    var t;
    var bgd;
    var lamput,billboard;
    var nCurrent,logo2,interval,left,right;
    var secondTimeout;
    function Step2()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Step2, c.Container);
    p.initialize=function() {
        nCurrent=1;
        var bgd1=new c.Bitmap(main.loadedData.getResult('intro_bgd'));
        t.addChild(bgd1);

         logo2 =new c.Bitmap(main.loadedData.getResult('logo2'));
        logo2.x =136 ;
        logo2.y= 42  ;

        var p3 =new c.Bitmap(main.loadedData.getResult('intro_p3'));
         p3.x =254 ;
        p3.y= 256  ;
        t.addChild(p3);
        TweenLite.from(logo2,0.7,{delay:1,y:-280,ease:Strong.easeOut});
        t.addChild(logo2);
        billboard = new c.Container();
        var bgd2 = new c.Bitmap(main.loadedData.getResult('mobile_intro'));
        billboard.addChild(bgd2);
        billboard.x =28;
        billboard.y =518;
        billboard.addChild(bgd2)
        this.addChild(billboard);



        bgd=new c.Bitmap(main.loadedData.getResult('intro'+nCurrent));
        bgd.setTransform(28,21);
        billboard.addChildAt(bgd,0);

        var skip = new FrameBtt(main.loadedData.getResult('skipBtt'),globals.strings.pages.intro.skip.text,main.loadedData.getResult('skipBtt_on'));
        t.addChild(skip);
        skip.x = 49;
        skip.y= 962;


        skip.addEventListener('click',onSkip);


     //    secondTimeout =   setTimeout(secondAnim,2000);







        left = new c.Bitmap(main.loadedData.getResult('lefthand'));

        t.addChild(left)
        left.x = -202;
        left.regY = left.image.height;
        left.y = 631+left.regY;


        right = new c.Bitmap(main.loadedData.getResult('righthand'));

        t.addChild(right);
        right.regY = right.image.height;
        right.regX = right.image.width;
        right.x = 582+right.regX;
        right.y = 647+right.regY;
        left.cursor = right.cursor = 'pointer';
        left.addEventListener('click',prev)
        right.addEventListener('click',next)

    };

    function onSkip(e){

        console.log('onSkip');
        t.removeChild(e.currentTarget);
        TweenMax.killAll();
        clearTimeout(interval);
        //dispatchStep3fromStep2();
        playAnimOut();
    }

    function prev(e){
        e.currentTarget.mouseEnabled=false;
        clearTimeout(secondTimeout);
        clearTimeout(interval);
        if(nCurrent>1) {
            nCurrent--;
            TweenMax.to(left, .1, {scaleX: 1.1, scaleY: 1.1})
            TweenMax.to(left, .5, {delay: .1, rotation: 15, x: -138, scaleX: 1, scaleY: 1, onComplete: zmien})
            TweenMax.to(left, .1, {x: -202, delay: .6, rotation: 0,onComplete:function(){left.mouseEnabled=true;}})
        }
    }
    function next(e){

        e.currentTarget.mouseEnabled=false;

        TweenMax.to(right, .1, {scaleX: 1.1, scaleY: 1.1})
        TweenMax.to(right, .5, {delay: .1, rotation: -15, x: 438+right.regX, scaleX: 1, scaleY: 1, onComplete: zmien})
        TweenMax.to(right, .1, {x: 582+right.regX, delay: .6, rotation: 0,onComplete:function(){right.mouseEnabled=true;}})
        clearTimeout(secondTimeout);
        clearTimeout(interval);
        nCurrent++;
    }


    function hide(){
        TweenLite.to(bgd,.3,{alpha:0,onComplete:zmien});
    }
    function zmien(){
//        right.mouseEnabled = left.mouseEnabled= true;


     if( nCurrent===10) {
            billboard.removeChild(bgd);
            bgd=new c.Bitmap(main.loadedData.getResult('intro'+nCurrent));
            billboard.addChildAt(bgd,0);
            bgd.setTransform(28,21);

            lamput = new c.Bitmap(main.loadedData.getResult('intro_lamput'));

         lamput.regX = lamput.image.width/2;
         lamput.regY = lamput.image.height/2;
         lamput.x = 155+lamput.regX;
         lamput.y = 550+lamput.regY;
         lamput.scaleX = lamput.scaleY= 0.9;
         t.addChild(lamput);

     }
     else if( nCurrent===11 )
     {
         t.mouseChildren = false;
         TweenLite.to(lamput,.1,{scaleX:1.05,scaleY:1.05})
         TweenLite.to(lamput,.6,{delay:.1,y:-100,onComplete:playAnimOut})

     }else{
         billboard.removeChild(bgd);
         bgd=new c.Bitmap(main.loadedData.getResult('intro'+nCurrent));
         billboard.addChildAt(bgd,0);
         bgd.setTransform(28,21);
         if(lamput&& t.contains(lamput)){
             t.removeChild(lamput);
         }


     }
    }


    function playAnimOut(){

        TweenMax.killAll();
        dispatch();
    }

    function dispatch(){
        t.dispatchEvent({param: Step3, type:'changePage',bubbles:true,cancelable:true});


    }


    window.Step2 = c.promote(Step2, "Container");

}());