
(function()
{
    'use strict';
    var t;
    var bgd;

    var nCurrent;

    var a1,a2;
    var currData,counter,next,anim3
    function Quiz() {
        this.Container_constructor();

        this.init();
    }

    var quiz = c.extend(Quiz,c.Container);
    quiz.init = function(){
        t = this;

        app.step++;
        
        if(app.quizes.length<1){
            app.quizes =globals.strings.pages.text_quizes;
            app.quizes = app.quizes.concat( globals.strings.pages.image_quizes)
        }
        currData =  app.quizes.shift();
      //  $.cookie(app.prefix+"_"+app.country+"_quizes",app.quizes);
        nCurrent=1;
        bgd=new c.Bitmap(main.loadedData.getResult('quiz_bgd'));
        t.addChild(bgd);
        bgd=new c.Bitmap(main.loadedData.getResult('unikitty_quiz_think'));
        t.addChild(bgd);
        bgd.x=604;
        bgd.y=30;
        addCounter();

        var data = currData.question;

        var question  = new c.Text(data.text, data.font,'#000');
        question.x =65+data.x;
        question.y =64+data.y+getoffset(question.font);
        question.lineWidth = 540;
        question.textBaseline = 'alphabetic';
        t.addChild(question);
//
        var i1  = currData.image1;
        if(i1){
            var i2  = currData.image2;
            a1 = new Button(main.loadedData.getResult('image_quiz_blank_off'),main.loadedData.getResult('image_quiz_blank_on'),main.loadedData.getResult(i1.bmp),currData.answer1,'r1');


            t.addChild(a1);
            a1.x = 67;
            a1.y= 203;
            a1.stateClicked=true;
            a1.addEventListener('click',onClickAnswer);
            a1.name='a1';


            a2 = new Button(main.loadedData.getResult('image_quiz_blank_off'),main.loadedData.getResult('image_quiz_blank_on'),main.loadedData.getResult(i2.bmp),currData.answer2,'r2');

            t.addChild(a2);
            a2.x = 289;
            a2.y= 203;
            a2.stateClicked=true;
            a2.addEventListener('click',onClickAnswer);
            a2.name='a2';

        }else{


            a1 = new FrameBtt(main.loadedData.getResult('big_btt_off'),main.loadedData.getResult('big_btt_on'),currData.answer1,'r1');
            t.addChild(a1);
            a1.x = 67;
            a1.y= 230;
            a1.stateClicked=true;
            a1.addEventListener('click',onClickAnswer);
            a1.name='a1';

            a2 = new FrameBtt(main.loadedData.getResult('big_btt_off'),main.loadedData.getResult('big_btt_on'),currData.answer2,'r2');
            t.addChild(a2);
            a2.x = 67;
            a2.y= 311;
            a2.stateClicked=true;
            a2.addEventListener('click',onClickAnswer);
            a2.name='a2';
        }

        next = new FrameBtt(main.loadedData.getResult('next_off'),main.loadedData.getResult('next_on'),globals.strings.pages.intro.next);

        next.x = 936;
        next.y= 486;
        next.addEventListener('click',onNext);

        TweenLite.from(question,.7,{delay:.7,alpha:0,ease:Power2.easeOut})
        TweenLite.from(a1,.7,{y:-200,delay:1,ease:Power2.easeOut})
        TweenLite.from(a2,.7,{y:-200,delay:1.3,ease:Power2.easeOut})
        TweenLite.from(bgd,.7,{x:1300,delay:.4,ease:Power2.easeOut})
        var spriteSheet = new c.SpriteSheet(app.animHappy);
        anim3= new c.Sprite(spriteSheet);
        anim3.x=400;
        anim3.y=100;
        t.addChildAt(anim3,1);




    };
    function onClickAnswer(e){

        t.removeChild(bgd);

        a1.mouseEnabled=false;
        a2.mouseEnabled=false;
        t.addChild(next)
        t.removeChild(counter);
        var kitti = new c.Container();
        bgd =new c.Bitmap(main.loadedData.getResult('unikitty_quiz_answer'));
        kitti.addChild(bgd);
        kitti.x=530;
        kitti.y=30;

        var data = currData['comment'+e.currentTarget.name.substr(1)];

        var question  = new c.Text(data.text, data.font,'#0449C3');

        var l = question.font;
        l =l.substr(0,l.indexOf('px'));
        question.textAlign= 'center';
        question.lineWidth = 344;
        question.x =data.x+110+question.lineWidth/2;
        question.y =data.y+getoffset(question.font)+229/2-question.getMeasuredHeight()/2-(l/10);
        question.textBaseline = 'alphabetic';
        kitti.addChild(question);
        t.addChild(kitti);

        TweenLite.from(kitti,1,{alpha:0,ease:Power2.easeOut});
        playSounds('correct');
        setTimeout(function(){

            anim3.play('anim')
        },500)


    }
    function onNext(e){

        console.log('tworze '+'Game'+app.gameConfig[app.currentGame]);
        t.dispatchEvent({param: eval('Game'+app.gameConfig[app.currentGame]), type:'changePage',bubbles:true,cancelable:true});
    }
    function addCounter(){
         counter = new c.Container();
        t.addChild(counter);
        counter.x = 958;
        counter.y = 508;
        var bgd=new c.Bitmap(main.loadedData.getResult('step_counter'));
        counter.addChild(bgd);
        var data = globals.strings.pages.intro['counter'];
        var text  = new c.Text(app.step+data.text, data.font,'#fff');
        text.textBaseline = 'alphabetic';
        text.lineWidth = 56;
        text.lineHeight=30;
        text.textAlign='center';
        var l = text.font;
        l =l.substr(0,l.indexOf('px'));
        text.x = 28+data.x;
        text.y = getoffset(text.font)/2+((bgd.image.height/2))-(l/10);
        counter.addChild(text);
    }







    window.Quiz = c.promote(Quiz, "Container");

}());
