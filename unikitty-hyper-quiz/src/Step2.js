
(function()
{
    'use strict';
    var t;
    var bgd;

    var nCurrent;
    var kitti;
    var bubble;
    var bubble_txt;
    var emoticon,next,skip;
    function Step2() {
        this.Container_constructor();

        this.init();
    }

    var step2 = c.extend(Step2,c.Container);
    step2.init = function(){
        t = this;
        nCurrent=1;
        bgd=new c.Bitmap(main.loadedData.getResult('intro_bgd'));
        t.addChild(bgd);


         skip = new FrameBtt(main.loadedData.getResult('small_btt_off'),main.loadedData.getResult('small_btt_on'),globals.strings.pages.intro.skip,'boink');
        t.addChild(skip);
        skip.x = 450;
        skip.y= 544;


        skip.addEventListener('click',onSkip);



        next = new FrameBtt(main.loadedData.getResult('next_off'),main.loadedData.getResult('next_on'),globals.strings.pages.intro.next,null,'boink');
        t.addChild(next);
        next.x = 936;
        next.y= 486;
        next.addEventListener('click',onNext);
        kitti=new c.Bitmap(main.loadedData.getResult('intro_unikitti'));
        t.addChild(kitti);
        kitti.x=23;
        kitti.y=232;
        t.addChild(kitti);
        TweenLite.from(kitti,.5,{x:-200,ease:Power3.easeOut})
        bubble=new c.Container();

        t.addChild(bubble);


        bgd = new c.Bitmap(main.loadedData.getResult('intro_speak_bubble'));
        bubble.addChild(bgd);
        bubble.x=236;
        bubble.regY = bgd.image.height;
        bubble.y =46+bubble.regY;
        var data = globals.strings.pages.intro['text'+nCurrent];

        bubble_txt  = new c.Text(data.text, data.font,'#0449C3');
        bubble_txt.textBaseline = 'alphabetic';

        bubble_txt.lineWidth = 384;
        bubble_txt.lineHeight=30;
        bubble_txt.textAlign='center';
        bubble_txt.x = 192+data.x;

        bubble_txt.y = ((bgd.image.height/2)-(bubble_txt.getMeasuredHeight ()/2));

        bubble.addChild(bubble_txt);

        emoticon= new c.Bitmap(main.loadedData.getResult('intro_emo_'+nCurrent));
        t.addChild(emoticon);
        TweenLite.from(emoticon,1,{alpha:0,delay:1});
        TweenLite.from(bubble,1,{scaleX:0,scaleY:0,delay:1});
        //secondAnim();
    };
    function onNext(e){
        nCurrent++;
        if(nCurrent>3){
            onSkip();
            return;
        }else{
            t.removeChild(emoticon);
            emoticon= new c.Bitmap(main.loadedData.getResult('intro_emo_'+nCurrent));
            t.addChild(emoticon);
            TweenLite.from(emoticon,1,{alpha:0});
            var data = globals.strings.pages.intro['text'+nCurrent];
            bubble_txt.text = data.text;
            bubble_txt.font = data.font;
            bubble_txt.y = 73+data.y+getoffset(bubble_txt.font);

            TweenLite.from(bubble,1,{scaleX:0,scaleY:0});
        }

    }
    function onSkip(e){

        TweenMax.killAll();

        TweenMax.to(bubble,.3,{rotation:360,alpha:0,scaleX:0,scaleY:0});
        TweenMax.to(emoticon,.3,{alpha:0,delay:.3});
        TweenMax.to(kitti,.5,{x:1024,delay:.6});
        t.removeChild(skip,next);
        disp();
    }


    function disp(){
        
        t.dispatchEvent({param: Quiz, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Step2 = c.promote(Step2, "Container");

}());
