
(function()
{
    'use strict';
    var t,p1,closeBtt,bgd;
    var question,answers,answerContainers;
    function QuizAppla(n)
    {
        this.Container_constructor();
        t = this;
        this.initialize(n);
    }
    var quiz_appla = c.extend(QuizAppla, c.Container);


    quiz_appla.initialize=function(n) {

        console.log('talizma numer: '+n);
        this.Container_initialize();
        this.name = 'q'+n;
        bgd =  new c.Bitmap(main.loadedData.getResult('quiz_bgd'));
        t.addChild(bgd);

        bgd =  new c.Bitmap(main.loadedData.getResult('quiz_image'+n));
        bgd.x = 612;//-bgd.image.width/2;
        bgd.y = 63;//-bgd.image.height/2;
        t.addChild(bgd);


        closeBtt = new  FrameBtt(main.loadedData.getResult('close_talisman_big_btt_off'),main.loadedData.getResult('close_talisman_big_btt_on'));
        closeBtt.x = 749;
        closeBtt.y = 43;
        this.addChild(closeBtt);
        closeBtt.addEventListener('click',onCloseAppla);



        p1 =  new c.Bitmap(main.loadedData.getResult('quizes_p1'));
        p1.x = 55;
        p1.y =259;
        t.addChild(p1);


       question = new c.Text(strings.pages.global['quiz'+n+'_q'].text, strings.pages.global['quiz'+n+'_q'].font, '#FDEB5D');
        t.addChild(question);
        question.mouseEnabled = false;

        question.lineWidth = 500;

        question.x =98+strings.pages.global['quiz'+n+'_q'].x;
        question.y =142+strings.pages.global['quiz'+n+'_q'].y;
         answers = [];
        for (var i=0;i<3;i++){
            var obj = {};
            obj.pos = i;
            obj.answer = strings.pages.global['quiz'+n+'_a'+i];
            answers.push(obj)
        }
        shuffle(answers);
        answerContainers = new c.Container();
        t.addChild(answerContainers)
        var answer;
        for ( i=0;i<3;i++){

            answer = new  FrameBtt(main.loadedData.getResult('quiz_btt_off'),main.loadedData.getResult('quiz_btt_on'),'#fff',answers[i].answer,null,'#fff');

            console.log(answers[i].answer);
            if(parseInt(answers[i].pos)==0){
                answer.name='c';
            }
            answer.x = 224;
            answer.y = 252+(i*85);
            answerContainers.addChild(answer);
            answer.addEventListener('click',onClickAnswer);
        }
        /*

         txt = new c.Text(strings.pages.global['talisman'+n+'_name'].text, strings.pages.global['talisman'+n+'_name'].font, '#080929');
        t.addChild(txt);
        txt.mouseEnabled = false;

        txt.lineWidth = bgd.image.width+strings.pages.global['talisman'+n+'_name'].x;
        txt.textAlign='center';
        txt.x =txt.lineWidth/2;
        txt.y =320+strings.pages.global['talisman'+n+'_name'].y;
        this.scaleX = this.scaleY = 0;
        TweenLite.to(this,1,{scale:1});
        */

    };

    function onClickAnswer(e){
        answerContainers.mouseChildren  =false;
        answerContainers.mouseEnabled  =false;

        if(e.currentTarget.name=='c'){
            e.currentTarget.selectCorrect();
            playSounds('level_complete');
        }else{
            playSounds('game_over_fail');
            e.currentTarget.selectWrong();

            t.removeChild(p1);
            p1 =  new c.Bitmap(main.loadedData.getResult('quizes_p2'));
            p1.x = 55;
            p1.y =259;
            t.addChild(p1);
            TweenLite.from(p1,1,{alpha:0})

        }

        TweenMax.to(question,1,{delay:1,alpha:0})
        TweenMax.to(answerContainers,1,{delay:1,alpha:0,onComplete:showStep2})
    }
    function showStep2(){
        t.removeChild(question);
        var zz =t.name.substr(1);
        console.log(zz);
        question = new c.Text(strings.pages.global['quiz'+zz+'_header'].text, strings.pages.global['quiz'+zz+'_header'].font, '#E93D2F');
        t.addChild(question);

        question.lineWidth = 818;
        question.x = 832/2;
        question.textAlign = 'center';
        question.y =142+strings.pages.global['quiz'+zz+'_header'].y;


       var desc = new c.Text(strings.pages.global['quiz'+zz+'_description'].text, strings.pages.global['quiz'+zz+'_description'].font, '#FDEB5D');
        t.addChild(desc);

        desc.lineWidth = 360;
        desc.x = 818/2;
        desc.textAlign = 'center';
        desc.y =279+strings.pages.global['quiz'+zz+'_description'].y;
    }
    function onCloseAppla(){

        TweenMax.killAll();
        t.dispatchEvent('close_appla');
    }

    window.QuizAppla = c.promote(QuizAppla, "Container");


}());
