
(function()
{
    'use strict';
    var t;
    var bgd;
    var text,billboard;
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
        logo2.x =175 ;
        logo2.y= 24;
        TweenLite.from(logo2,0.7,{delay:1,y:-280,ease:Strong.easeOut});
        t.addChild(logo2);
        billboard = new c.Container();
        var bgd2 = new c.Bitmap(main.loadedData.getResult('bill'));
        billboard.addChild(bgd2);
        billboard.x =0;


        billboard.y=343;
        TweenLite.from(billboard,1,{delay:1,y:-980,ease:Strong.easeOut});
        this.addChild(billboard);

     /*   black = new c.Shape(new c.Graphics().beginFill('#000').drawRect(0, 0, 538, 365).endFill());
        billboard.addChild(black);
        black.x =   18;
        black.y = 35;
*/

        bgd=new c.Bitmap(main.loadedData.getResult('intro'+nCurrent));
        bgd.setTransform(84,45);
        billboard.addChild(bgd);

        var skip = new FrameBtt(main.loadedData.getResult('skipBtt'),globals.strings.pages.intro.skip.text,main.loadedData.getResult('skipBtt_on'));
        t.addChild(skip);
        skip.x = 255+127;
        skip.y= 1365;
        skip.regX = 127;
        skip.regY = 314;


        TweenLite.from(skip,1,{delay:1,y:2100,ease:Bounce.easeOut});
        skip.addEventListener('click',onSkip);
        skip.addEventListener('rollover',onRollSkip);

         secondTimeout =   setTimeout(secondAnim,2000);


        var t1  = new c.Text(globals.strings.pages.intro.header.text, globals.strings.pages.intro.header.font,'#43322F');
        t1.textBaseline = 'alphabetic';
        t1.lineWidth = 768;
        t1.textAlign='center';
        t1.x = globals.strings.pages.intro.header.x+t1.lineWidth/2;
        t1.y = 260+globals.strings.pages.intro.header.y;
        t.addChild(t1);

        TweenLite.from(t1,1,{alpha:0,delay:2})




        text  = new c.Text(globals.strings.pages.intro['t'+nCurrent].text, globals.strings.pages.intro['t'+nCurrent].font,'#F9E8C7');
        text.textBaseline = 'alphabetic';
        text.lineWidth = 768;
        text.textAlign='center';
        text.x = globals.strings.pages.intro['t'+nCurrent].x+text.lineWidth/2;
        text.y = 524+globals.strings.pages.intro['t'+nCurrent].y;
        billboard.addChild(text);

        left = new FrameBtt(main.loadedData.getResult('left'),'',main.loadedData.getResult('left_on'),'#fff',null);
        left.addEventListener('click',prev)
        t.addChild(left)
        left.x = 45;
        left.y = 880;


        right = new FrameBtt(main.loadedData.getResult('right'),'',main.loadedData.getResult('right_on'),'#fff',null);
        right.addEventListener('click',next)
        t.addChild(right)
        right.x = 643;
        right.y = 880;

        left.stateClicked = right.stateClicked = false;


        TweenLite.from(left,1,{delay:1,alpha:0})
        TweenLite.from(right,1,{delay:1,alpha:0})
    };

    function onRollSkip(e){
        TweenLite.to(e.currentTarget,1,{rotation:-10+(Math.random()*20),yoyo:true,repeat:1,ease:Elastic.easeOut});
    }
    function onSkip(e){

        console.log('onSkip');
        t.removeChild(e.currentTarget);
        TweenMax.killAll();
        clearTimeout(interval);
        //dispatchStep3fromStep2();
        playAnimOut();
    }
    function secondAnim(){
 //       show();
    }
    function prev(){
        clearTimeout(secondTimeout);
        clearTimeout(interval);
        if(nCurrent>1){
            nCurrent--;

            zmien();
        }
    }
    function next(){
        clearTimeout(secondTimeout);
        clearTimeout(interval);
        nCurrent++;
        zmien();
    }
    function show(){
        console.log('show');
        TweenLite.to(bgd,.3,{alpha:1,onComplete:czekaj});
    }
    function czekaj(){
        interval =   setTimeout(hide,4000);
    }
    function hide(){
        TweenLite.to(bgd,.3,{alpha:0,onComplete:zmien});
    }
    function zmien(){
        right.mouseEnabled = left.mouseEnabled= true;
        if(nCurrent==9){
            clearTimeout(interval);
            TweenMax.killAll();
            console.log('zmieniam ze step2')
            playAnimOut();
        }else{
            billboard.removeChild(bgd);
            bgd=new c.Bitmap(main.loadedData.getResult('intro'+nCurrent));
            billboard.addChildAt(bgd,1);
            bgd.setTransform(84,45);
            billboard.removeChild(text);
            text  = new c.Text(globals.strings.pages.intro['t'+nCurrent].text, globals.strings.pages.intro['t'+nCurrent].font,'#F9E8C7');
            text.textBaseline = 'alphabetic';
            text.lineWidth = 768;
            text.textAlign='center';
            text.x = globals.strings.pages.intro['t'+nCurrent].x+text.lineWidth/2;
            text.y = 524+globals.strings.pages.intro['t'+nCurrent].y;
            billboard.addChild(text);
          //  show();
        }
    }

    function playAnimOut(){

            var htp_left =  new c.Bitmap(main.loadedData.getResult('htp_left'));
            var htp_right = new  c.Bitmap(main.loadedData.getResult('htp_right'));

            var htp_gora =  new c.Bitmap(main.loadedData.getResult('htp_gora'));

            var htp_dol =  new c.Bitmap(main.loadedData.getResult('htp_dol'));
            htp_dol.y =1204;
            htp_right.regX =475;
            htp_right.x =768;

            t.addChild(htp_left,htp_right,htp_gora,htp_dol);

            TweenLite.from(htp_gora,1,{delay:1,y:-300,ease:Power4.easeOut});
            TweenLite.from(htp_dol,.5,{delay:.3,y:1500,ease:Power4.easeOut});
            TweenLite.from(htp_left,2,{rotation:71.7,x:132,y:-678,ease:Power4.easeOut});
            TweenLite.from(htp_right,2,{rotation:-41.7,x:909,y:-545,ease:Power4.easeOut,onComplete:dispatchStep3fromStep2});
        var logo=new c.Bitmap(main.loadedData.getResult('logo2'));
        logo.regX = logo.image.width/2;
        logo.regY = logo.image.height/2;
        logo.scaleX = logo.scaleY =0.6;
        logo.x = 768/2;
        logo.y=81;
        t.addChild(logo);
        TweenLite.from(logo,1,{delay:1,y:-120})

    }

    function dispatchStep3fromStep2(){
       t.dispatchEvent({param: Step3, type:'changePage',bubbles:true,cancelable:true});
    }
    window.Step2 = c.promote(Step2, "Container");

}());