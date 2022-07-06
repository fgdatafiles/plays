
(function(){
    'use strict';
    var t;
    function Main() {
        this.Container_constructor();
        t = this;
    }

    var _main = c.extend(Main,c.Container);
    _main.init = function() {
        t = this;
        this.mode =1;
      /*  this.pageContainer;
        this.globalContainer;
        this.context;
        this.actualPage;
        this.scale;
        this.soundBtt;
        */
        initStage();
        loadGFX();
    };
       _main.resize=function(){

        var ow = 1024;
        var oh = 574;
        var iframe =$('.iframe-container');
        var w = Math.min(iframe.width(),1024);
        var h = Math.min(iframe.height(),574);

        if(stage.scaleX){
            t.scale = Math.min(w / ow, h / oh);
            stage.scaleX = t.scale;
            stage.scaleY = t.scale;
            stage.canvas.width = ow * t.scale;
            stage.canvas.height = oh * t.scale;
            stage.update();
        }
    };

    function initStage()
    {



        var canvas=document.getElementById('stageCanvas');
        _main.context=canvas.getContext('2d');
        stage = new c.Stage(canvas);
        c.Ticker.setFPS(30);
        c.Ticker.timingMode=c.Ticker.RAF_SYNCHED;

        if (!c.Sound.initializeDefaultPlugins()) {return;}

        if(globals.isMobile){
            stage.enableMouseOver(0);
        }else{
            stage.enableMouseOver(30);
        }

        c.Touch.enable(stage);
        c.Ticker.addEventListener('tick', stage);

        _main.pageContainer=new c.Container();
        stage.addChild(t.pageContainer);
        _main.globalContainer=new c.Container();
        stage.addChild(t.globalContainer);
        _main.resize();
        setTimeout(_main.resize,1500);


    }
    function addGlobalElements()
    {

        t.soundBtt = new  OnOffBtt('img/sound_on.png','img/sound_off.png');
        t.addChild(t.soundBtt);
        t.soundBtt.cursor ='pointer';
        t.soundBtt.x=958;
        t.soundBtt.y=10;
        if(globals.isMobile){
            t.soundBtt.x = 929;
            
        }

        stage.addChild(t.soundBtt);



    }

    function loadGFX()
    {

         var manifest=[
             {id:'splash_bgd',src:'img/splash_bgd.png'},
             {id:'intro_bgd',src:'img/intro_bgd.png'},
             {id:'quiz_bgd',src:'img/quiz_bgd.png'},
             {id:'unikitty_quiz_think',src:'img/unikitty_quiz_think.png'},
             {id:'unikitty_quiz_answer',src:'img/unikitty_quiz_answer.png'},
             {id:'step_counter',src:'img/step_counter.png'},
             {id:'intro_speak_bubble',src:'img/intro_speak_bubble.png'},
             {id:'splash_logo',src:'img/splash_logo.png'},
             {id:'splash_characters',src:'img/splash_characters.png'},
             {id:'next_on',src:'img/next_on.png'},
             {id:'next_big_on',src:'img/next_big_on.png'},
             {id:'next_off',src:'img/next_off.png'},
             {id:'next_big_off',src:'img/next_big_off.png'},
             {id:'mini_logo',src:'img/mini_logo.png'},
             {id:'intro_emo_1',src:'img/intro_emo_1.png'},
             {id:'intro_emo_2',src:'img/intro_emo_2.png'},
             {id:'intro_emo_3',src:'img/intro_emo_3.png'},
             {id:'intro_unikitti',src:'img/intro_unikitti.png'},
             {id:'big_btt_off',src:'img/big_btt_off.png'},
             {id:'big_btt_on',src:'img/big_btt_on.png'},
             {id:'small_btt_off',src:'img/small_btt_off.png'},
             {id:'small_btt_on',src:'img/small_btt_on.png'},
             {id:'small_unikitty_idle',src:'img/small_unikitty_idle.png'},
             {id:'small_unikitty_sad',src:'img/small_unikitty_sad.png'},
             {id:'small_unikitty_happy',src:'img/small_unikitty_happy.png'},
             {id:'small_unikitty_almost',src:'img/small_unikitty_almost.png'},
             {id:'unikitty_answer_bubble',src:'img/unikitty_answer_bubble.png'},
             {id:'time_bgd',src:'img/time_bgd.png'},
             {id:'lev',src:'img/lev.png'},
             {id:'lev_on',src:'img/lev_on.png'},
             {id:'summary_shadow',src:'img/summary_shadow.png'},
             {id:'summary_unikitty',src:'img/summary_unikitty.png'},
             {id:'summary_bubble',src:'img/summary_bubble.png'},

            /// game over

             {id:'gameover_bubble',src:'img/gameover_bubble.png'},
             {id:'gameover_unikitty_big',src:'img/gameover_unikitty_big.png'},
             {id:'gameover_1',src:'img/gameover_1.png'},
             {id:'gameover_2',src:'img/gameover_2.png'},
             {id:'gameover_3',src:'img/gameover_3.png'},
             {id:'gameover_unikitty',src:'img/gameover_unikitty.png'},
             


             // quiz
             {id:'image_quiz_blank_on',src:'img/image_quiz/image_quiz_blank_on.png'},
             {id:'image_quiz_blank_off',src:'img/image_quiz/image_quiz_blank_off.png'},
             {id:'image_quiz_q1_1',src:'img/image_quiz/image_quiz_q1_1.png'},
             {id:'image_quiz_q1_2',src:'img/image_quiz/image_quiz_q1_2.png'},
             {id:'image_quiz_q2_1',src:'img/image_quiz/image_quiz_q2_1.png'},
             {id:'image_quiz_q2_2',src:'img/image_quiz/image_quiz_q2_2.png'},
             {id:'image_quiz_q3_1',src:'img/image_quiz/image_quiz_q3_1.png'},
             {id:'image_quiz_q3_2',src:'img/image_quiz/image_quiz_q3_2.png'},
             ///GAME1
             {id:'game1_bgd',src:'img/game1/game1_bgd.png'},
             {id:'game1_intro_bubble',src:'img/game1/game1_intro_bubble.png'},
             {id:'game1_intro_unikitty',src:'img/game1/game1_intro_unikitty.png'},
             {id:'game1_ch1',src:'img/game1/ch1.png'},
             {id:'game1_ch2',src:'img/game1/ch2.png'},
             {id:'game1_ch3',src:'img/game1/ch3.png'},
             {id:'game1_ch4',src:'img/game1/ch4.png'},
             {id:'game1_ch5',src:'img/game1/ch5.png'},

             {id:'game1_sh1_idle',src:'img/game1/game1_sh1_idle.png'},
             {id:'game1_sh2_idle',src:'img/game1/game1_sh2_idle.png'},
             {id:'game1_sh3_idle',src:'img/game1/game1_sh3_idle.png'},
             {id:'game1_sh4_idle',src:'img/game1/game1_sh4_idle.png'},
             {id:'game1_sh5_idle',src:'img/game1/game1_sh5_idle.png'},
             {id:'game1_sh6_idle',src:'img/game1/game1_sh6_idle.png'},
             {id:'game1_sh7_idle',src:'img/game1/game1_sh7_idle.png'},
             {id:'game1_sh8_idle',src:'img/game1/game1_sh8_idle.png'},
             {id:'game1_sh9_idle',src:'img/game1/game1_sh9_idle.png'},
             {id:'game1_sh10_idle',src:'img/game1/game1_sh10_idle.png'},
             {id:'game1_sh1_bad',src:'img/game1/game1_sh1_bad.png'},
             {id:'game1_sh2_bad',src:'img/game1/game1_sh2_bad.png'},
             {id:'game1_sh3_bad',src:'img/game1/game1_sh3_bad.png'},
             {id:'game1_sh4_bad',src:'img/game1/game1_sh4_bad.png'},
             {id:'game1_sh5_bad',src:'img/game1/game1_sh5_bad.png'},
             {id:'game1_sh6_bad',src:'img/game1/game1_sh6_bad.png'},
             {id:'game1_sh7_bad',src:'img/game1/game1_sh7_bad.png'},
             {id:'game1_sh8_bad',src:'img/game1/game1_sh8_bad.png'},
             {id:'game1_sh9_bad',src:'img/game1/game1_sh9_bad.png'},
             {id:'game1_sh10_bad',src:'img/game1/game1_sh10_bad.png'},

             {id:'game1_sh1_good',src:'img/game1/game1_sh1_good.png'},
             {id:'game1_sh2_good',src:'img/game1/game1_sh2_good.png'},
             {id:'game1_sh3_good',src:'img/game1/game1_sh3_good.png'},
             {id:'game1_sh4_good',src:'img/game1/game1_sh4_good.png'},
             {id:'game1_sh5_good',src:'img/game1/game1_sh5_good.png'},




             ///
             {id:'game2_bgd',src:'img/game2/game2_bgd.png'},
             {id:'game2_ch1',src:'img/game2/ch1.png'},
             {id:'game2_ch2',src:'img/game2/ch2.png'},
             {id:'game2_ch3',src:'img/game2/ch3.png'},
             {id:'game2_ch4',src:'img/game2/ch4.png'},
             {id:'game2_ch5',src:'img/game2/ch5.png'},

             {id:'game2_ch1_good',src:'img/game2/ch1_good.png'},
             {id:'game2_ch2_good',src:'img/game2/ch2_good.png'},
             {id:'game2_ch3_good',src:'img/game2/ch3_good.png'},
             {id:'game2_ch4_good',src:'img/game2/ch4_good.png'},
             {id:'game2_ch5_good',src:'img/game2/ch5_good.png'},

             {id:'game2_bgd_bad',src:'img/game2/bgd_bad.png'},
             {id:'game2_bgd_good',src:'img/game2/bgd_good.png'},
             {id:'game2_bgd_idle',src:'img/game2/bgd_idle.png'},
             {id:'game2_1_1',src:'img/game2/1_1.png'},
             {id:'game2_1_2',src:'img/game2/1_2.png'},
             {id:'game2_1_3',src:'img/game2/1_3.png'},
             {id:'game2_1_4',src:'img/game2/1_4.png'},
             {id:'game2_1_5',src:'img/game2/1_5.png'},
             {id:'game2_1_6',src:'img/game2/1_6.png'},
             {id:'game2_1_7',src:'img/game2/1_7.png'},
             {id:'game2_1_8',src:'img/game2/1_8.png'},
             {id:'game2_1_9',src:'img/game2/1_9.png'},

             {id:'game2_2_1',src:'img/game2/2_1.png'},
             {id:'game2_2_2',src:'img/game2/2_2.png'},
             {id:'game2_2_3',src:'img/game2/2_3.png'},
             {id:'game2_2_4',src:'img/game2/2_4.png'},
             {id:'game2_2_5',src:'img/game2/2_5.png'},
             {id:'game2_2_6',src:'img/game2/2_6.png'},
             {id:'game2_2_7',src:'img/game2/2_7.png'},
             {id:'game2_2_8',src:'img/game2/2_8.png'},
             {id:'game2_2_9',src:'img/game2/2_9.png'},

             {id:'game2_3_1',src:'img/game2/3_1.png'},
             {id:'game2_3_2',src:'img/game2/3_2.png'},
             {id:'game2_3_3',src:'img/game2/3_3.png'},
             {id:'game2_3_4',src:'img/game2/3_4.png'},
             {id:'game2_3_5',src:'img/game2/3_5.png'},
             {id:'game2_3_6',src:'img/game2/3_6.png'},
             {id:'game2_3_7',src:'img/game2/3_7.png'},
             {id:'game2_3_8',src:'img/game2/3_8.png'},
             {id:'game2_3_9',src:'img/game2/3_9.png'},
             {id:'game2_4_1',src:'img/game2/4_1.png'},
             {id:'game2_4_2',src:'img/game2/4_2.png'},
             {id:'game2_4_3',src:'img/game2/4_3.png'},
             {id:'game2_4_4',src:'img/game2/4_4.png'},
             {id:'game2_4_5',src:'img/game2/4_5.png'},
             {id:'game2_4_6',src:'img/game2/4_6.png'},
             {id:'game2_4_7',src:'img/game2/4_7.png'},
             {id:'game2_4_8',src:'img/game2/4_8.png'},
             {id:'game2_4_9',src:'img/game2/4_9.png'},
             {id:'game2_5_1',src:'img/game2/5_1.png'},
             {id:'game2_5_2',src:'img/game2/5_2.png'},
             {id:'game2_5_3',src:'img/game2/5_3.png'},
             {id:'game2_5_4',src:'img/game2/5_4.png'},
             {id:'game2_5_5',src:'img/game2/5_5.png'},
             {id:'game2_5_6',src:'img/game2/5_6.png'},
             {id:'game2_5_7',src:'img/game2/5_7.png'},
             {id:'game2_5_8',src:'img/game2/5_8.png'},
             {id:'game2_5_9',src:'img/game2/5_9.png'},

             //GAME3
             
             
             {id:'game3_b1',src:'img/game3/b1.png'},
             {id:'game3_c1',src:'img/game3/c1.png'},
             {id:'game3_b2',src:'img/game3/b2.png'},
             {id:'game3_c2',src:'img/game3/c2.png'},
             {id:'game3_b3',src:'img/game3/b3.png'},
             {id:'game3_c3',src:'img/game3/c3.png'},
             {id:'game3_b4',src:'img/game3/b4.png'},
             {id:'game3_c4',src:'img/game3/c4.png'},
             {id:'game3_b5',src:'img/game3/b5.png'},
             {id:'game3_c5',src:'img/game3/c5.png'},
             {id:'input_bgd',src:'img/game3/input_bgd.png'},
             {id:'promt',src:'img/game3/promt.png'},
             {id:'i_on',src:'img/game3/i_on.png'},
             {id:'i_off',src:'img/game3/i_off.png'},
            // game 4

             {id:'game4_1_1',src:'img/game4/1_1.png'},
             {id:'game4_1_2',src:'img/game4/1_2.png'},
             {id:'game4_1_3',src:'img/game4/1_3.png'},
             {id:'game4_1_4',src:'img/game4/1_4.png'},
             {id:'game4_1_5',src:'img/game4/1_5.png'},
             {id:'game4_1_6',src:'img/game4/1_6.png'},
             {id:'game4_1_7',src:'img/game4/1_7.png'},
             {id:'game4_1_8',src:'img/game4/1_8.png'},
             {id:'game4_1_9',src:'img/game4/1_9.png'},
             {id:'game4_2_1',src:'img/game4/2_1.png'},
             {id:'game4_2_2',src:'img/game4/2_2.png'},
             {id:'game4_2_3',src:'img/game4/2_3.png'},
             {id:'game4_2_4',src:'img/game4/2_4.png'},
             {id:'game4_2_5',src:'img/game4/2_5.png'},
             {id:'game4_2_6',src:'img/game4/2_6.png'},
             {id:'game4_2_7',src:'img/game4/2_7.png'},
             {id:'game4_2_8',src:'img/game4/2_8.png'},
             {id:'game4_2_9',src:'img/game4/2_9.png'},
             {id:'game4_3_1',src:'img/game4/3_1.png'},
             {id:'game4_3_2',src:'img/game4/3_2.png'},
             {id:'game4_3_3',src:'img/game4/3_3.png'},
             {id:'game4_3_4',src:'img/game4/3_4.png'},
             {id:'game4_3_5',src:'img/game4/3_5.png'},
             {id:'game4_3_6',src:'img/game4/3_6.png'},
             {id:'game4_3_7',src:'img/game4/3_7.png'},
             {id:'game4_3_8',src:'img/game4/3_8.png'},
             {id:'game4_3_9',src:'img/game4/3_9.png'},
             {id:'game4_4_1',src:'img/game4/4_1.png'},
             {id:'game4_4_2',src:'img/game4/4_2.png'},
             {id:'game4_4_3',src:'img/game4/4_3.png'},
             {id:'game4_4_4',src:'img/game4/4_4.png'},
             {id:'game4_4_5',src:'img/game4/4_5.png'},
             {id:'game4_4_6',src:'img/game4/4_6.png'},
             {id:'game4_4_7',src:'img/game4/4_7.png'},
             {id:'game4_4_8',src:'img/game4/4_8.png'},
             {id:'game4_4_9',src:'img/game4/4_9.png'},
             {id:'game4_5_1',src:'img/game4/5_1.png'},
             {id:'game4_5_2',src:'img/game4/5_2.png'},
             {id:'game4_5_3',src:'img/game4/5_3.png'},
             {id:'game4_5_4',src:'img/game4/5_4.png'},
             {id:'game4_5_5',src:'img/game4/5_5.png'},
             {id:'game4_5_6',src:'img/game4/5_6.png'},
             {id:'game4_5_7',src:'img/game4/5_7.png'},
             {id:'game4_5_8',src:'img/game4/5_8.png'},
             {id:'game4_5_9',src:'img/game4/5_9.png'},
             {id:'quest',src:'img/anim/questions.png'},
             {id:'frame_bad',src:'img/game4/frame_bad.png'},
             {id:'frame_good',src:'img/game4/frame_good.png'},
             {id:'frame_idle',src:'img/game4/frame_idle.png'},
             {id:'brick_bad',src:'img/game4/brick_bad.png'},
             {id:'brick_good',src:'img/game4/brick_good.png'},
             {id:'brick_idle',src:'img/game4/brick_idle.png'},
             {id:'brick_question',src:'img/game4/brick_question.png'},
             {id:'b1',src:'img/game4/b1.png'},
             {id:'b2',src:'img/game4/b2.png'},
             {id:'b3',src:'img/game4/b3.png'},
             {id:'b4',src:'img/game4/b4.png'},
             {id:'b5',src:'img/game4/b5.png'},
             {id:'h1',src:'img/anim/happy_0.png'},
             {id:'h2',src:'img/anim/happy_1.png'},
             {id:'h3',src:'img/anim/happy_2.png'},
             {id:'h4',src:'img/anim/happy_3.png'},
             {id:'an1',src:'img/anim/angry_0.png'},
             {id:'an2',src:'img/anim/angry_1.png'},
             {id:'sa1',src:'img/anim/sad_0.png'},
             {id:'sa2',src:'img/anim/sad_1.png'},
             {id:'sa3',src:'img/anim/sad_2.png'},



            {id:'sound_on',src:'img/sound_on.png'},
            {id:'sound_off',src:'img/sound_off.png'},




            //SOUNDS
             {id:'almost',src:'sounds/almost.mp3'},
             {id:'click',src:'sounds/click.mp3'},
             {id:'happy',src:'sounds/happy.mp3'},
             {id:'sad',src:'sounds/sad.mp3'},
             {id:'whohoo',src:'sounds/whohoo.mp3'},
             {id:'wysuwanie',src:'sounds/wysuwanie.mp3'},
             {id:'yeay',src:'sounds/yeay.mp3'},
             {id:'r1',src:'sounds/r1.mp3'},
             {id:'r2',src:'sounds/r2.mp3'},
             {id:'correct',src:'sounds/correct.mp3'},
             {id:'correct2',src:'sounds/correct2.mp3'},
             {id:'failure',src:'sounds/failure.mp3'},
             {id:'boink',src:'sounds/boing.mp3'},
             {id:'yeah2',src:'sounds/yeah2.mp3'}


        ];
        startLoading(manifest);
    }

    function startLoading(manifest){

        var pre=new Preloader(manifest);
        stage.addChild(pre);
        pre.addEventListener('completed',onLoaderComplete);
        addGlobalElements();
    }
    function onLoaderComplete(e)
    {
        t.success = false;
        t.loadedData= e.target.queue;
        
        var step1=new Step1();
        changeScreen(step1);

    }

    function changeScreen(e){
        if(t.actualPage)
        {
           t.actualPage.mouseEnabled = false;
           flyOut(t.actualPage);
        }
          t.actualPage=e;
          t.pageContainer.addChildAt(e,0);
          t.actualPage.addEventListener('changePage',onScreenChange);
          flyIn(t.actualPage);
    }
    function flyOut(page)
    {
        setTimeout(clear,10,page);
    }
    function flyIn(page)
    {
        t.actualPage.alpha = 1;
    }
    function  onScreenChange(e)
    {
        e.preventDefault=true;

        var page= new e.param();

        if(typeof page == 'object')
        {
            changeScreen(page);
        }
        else
        {
            trace('error: class doesnt exist');
        }
    }
    function clear(page)
    {
        t.actualPage.alpha=1;
        while(page.getNumChildren())
        {
            if(typeof page.getChildAt(0).removeAllChildren=== 'function')
            {
                page.getChildAt(0).removeAllChildren();
            }
            if(page.getChildAt(0).htmlElement!=undefined)
            {
                page.getChildAt(0).htmlElement.parentNode.removeChild(page.getChildAt(0).htmlElement);
            }
            page.removeChildAt(0);
        }
        page.parent.removeChild(page);
    }
    window.Main = c.promote(Main, "Container");
}());
