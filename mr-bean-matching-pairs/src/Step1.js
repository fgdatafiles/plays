
(function()
{
    'use strict';
    var t,btt2,btt1,z1,z2,z3,txt2,bl,ticker_bgd,tl,easy,veryhard,hard,extrahard,intro_logo;
    var helpAppla,intro_logo_game,bgd;
    var napis,postaci_intro,logo;
    var Step1=function()
    {


        t = this;
        this.initialize();

    };
    var p=Step1.prototype=new c.Container();
    p.initialize=function() {


        bgd=new c.Bitmap(main.loadedData.getResult('bgd'));

        t.addChild(bgd);



        console.log(strings.pages.intro.game_title);
        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'),'#d7127a',strings.pages.intro.game_title);
        btt1.x = 651;
        btt1.y = 638;
        TweenLite.from(btt1,.5,{alpha:0,y:800,onComplete:wlaczbtt1});

         postaci_intro = new c.Bitmap(main.loadedData.getResult('postaci_intro'));
        t.addChild(postaci_intro);
        postaci_intro.regX = postaci_intro.image.width/2;
        postaci_intro.regY = postaci_intro.image.height/2;
        postaci_intro.x = 492+postaci_intro.regX;
        postaci_intro.y = 66+postaci_intro.regY;


        logo = new c.Bitmap(main.loadedData.getResult('logo_yabba'));
        t.addChild(logo);
        logo.regX = logo.image.width/2;
        logo.regY = logo.image.height/2;
        logo.x = 708+logo.regX;
        logo.y = 450+logo.regY;



        TweenLite.from(logo,2,{y:900,delay:.5,ease:Elastic.easeOut})
        TweenLite.from(postaci_intro,2,{scale:0,delay:1,ease:Elastic.easeOut})




        btt1.addEventListener('click',onAnim1);

        postaci_intro.addEventListener('click',onAnim1);
        logo.addEventListener('click',onAnim1);
       postaci_intro.cursor = logo.cursor= 'pointer';
        //btt1.addEventListener('click',onSkipLevel);
        playSounds('empty');
        t.addChild(btt1);
    };
    function onSkipLevel(){

        main.nCurrentLevel = 3;
        wylaczGre2();
    }
    function playS(){
        if(globals.bSound){
            c.Sound.play('tap');
        }
    }
    function wlaczMnie(zz){

        zz.addEventListener('mouseover',onMO);
        zz.addEventListener('mouseout',onMOU);
        zz.addEventListener('click',onMO2);
    }



    function onAnim1(){
        console.log('onAnim1')
     //   btt1.removeEventListener('click',onAnim1);

        postaci_intro.removeEventListener('click',onAnim1);
        logo.removeEventListener('click',onAnim1);
       btt1.mouseEnabled= postaci_intro.mouseEnabled = logo.mouseEnabled= false;
        playLoop('start');

        console.log('ANIM1')
      //  TweenLite.to(btt1,.5,{alpha:0,y:800});
        //TweenLite.to(ticker_bgd,.8,{y:800});
        bgd=new c.Bitmap(main.loadedData.getResult('bgd_select'));
        t.addChild(bgd);
        TweenLite.from(bgd,.8,{alpha:0});




        var logo_cn=new c.Bitmap(main.loadedData.getResult('logo_cn'));
        t.addChild(logo_cn);
        logo_cn.x  = 498;
        logo_cn.y  = 639;

        var logo_scooby=new c.Bitmap(main.loadedData.getResult('logo_yabba_small'));
        t.addChild(logo_scooby);

        logo_scooby.regX =logo_scooby.image.width/2;
        logo_scooby.regY =logo_scooby.image.height/2;

        logo_scooby.scaleX = logo_scooby.scaleY =1;
        logo_scooby.x  = 1278+ logo_scooby.regX;
        logo_scooby.y  = 631+ logo_scooby.regY;




        onStep2();

    }
    function wylaczMnie(zz){
        t.removeChild(zz);
        TweenLite.to(intro_logo_game,1,{scale:0,ease:Elastic.easeOut});
        if(zz.name =='c3'){

            TweenLite.to(intro_logo,.4,{x:14,y:768,ease:Strong.easeIn});
            TweenLite.to(bl,.5,{delay:.1,x:-1200,ease:Strong.easeIn,onComplete:onStepAlmost2});
        }
    }
    function onStepAlmost2(e) {

        var bgd = new c.Bitmap(main.loadedData.getResult('bgd_select'));
        t.addChildAt(bgd,0);
        TweenLite.from(bgd,1,{alpha:0,onComplete:onStep2});

    }

    function onStep2(){
        easy = new FrameBtt(main.loadedData.getResult('_b0'), main.loadedData.getResult('_b0_1'), '#fff', strings.pages.select_level.easy);
        easy.x = 728;
        easy.y = 152;
        easy.name = 'l0';
        t.addChild(easy);


        hard = new FrameBtt(main.loadedData.getResult('_b1'), main.loadedData.getResult('_b1_1'), '#fff', strings.pages.select_level.hard);
        hard.x =  728;
        hard.y = 270;
        t.addChild(hard);
        hard.name = 'l1';

        veryhard = new FrameBtt(main.loadedData.getResult('_b2'), main.loadedData.getResult('_b2_1'), '#fff', strings.pages.select_level.veryhard);
        veryhard.x =  728;
        veryhard.y = 388;
        veryhard.name = 'l2';
        t.addChild(veryhard);

        extrahard = new FrameBtt(main.loadedData.getResult('_b3'), main.loadedData.getResult('_b3_1'), '#fff', strings.pages.select_level.extrahard);
        extrahard.x = 728;
        extrahard.y = 505;
        extrahard.name = 'l3';
        t.addChild(extrahard);



        easy.addEventListener('click', onClickLevel);
        hard.addEventListener('click', onClickLevel);
        veryhard.addEventListener('click', onClickLevel);
        extrahard.addEventListener('click', onClickLevel);


        TweenLite.from(extrahard,.6,{ease:Strong.easeOut,y:-100,delay:.25});
        TweenLite.from(veryhard,.6,{ease:Strong.easeOut,y:-100,delay:.5});
        TweenLite.from(hard,.6,{ease:Strong.easeOut,y:-100,delay:.75});
        TweenLite.from(easy,.6,{ease:Strong.easeOut,y:-100,delay:1});
    }

      function wlaczbtt1(){


       btt1.mouseEnabled=true;

        postaci_intro.mouseEnabled=true;
    }

    function onClickLevel(e){

        var sq = new c.Shape(new c.Graphics().beginFill("#000").drawRect(0, 0, 1940, 768));
        t.addChild(sq);
        sq.alpha = 0.7;
        t.addChildAt(sq,8);
        helpAppla = new HelpAppla();
        helpAppla.x =308+140;
        t.addChild(helpAppla);
        TweenLite.from(helpAppla,1,{y:-800,ease:Strong.easeIn})
        soundBtt.visible  = false;
        homeBtt.visible  = false;
        helpAppla.addEventListener('closeHelp',onCloseHelp);


        var z = parseInt(e.currentTarget.name.substr(1));
        main.nCurrentLevel = z;
        console.log(z);
        for(var i=0;i<4;i++){
            var item = t.getChildByName('l'+i);
            item.mouseEnabled = false;
            item.mouseChildren = false;
            if(z==i){
                TweenLite.to(item,1,{y:302,delay:.4/*,onComplete:wlaczGre,onCompleteParams:[item]*/})
            }else{
                TweenLite.to(item,1,{alpha:0});
            }

        }


    }


    function onCloseHelp(){
        TweenLite.to(helpAppla,1,{y:700,ease:Strong.easeIn,onComplete:wylaczGre2 })
    }
    function wlaczGre(zz){

            TweenLite.to(zz,.4,{alpha:0,onComplete:wylaczGre2})
    }

    function wylaczGre2(){

        t.dispatchEvent({param: Game, type:'changePage',bubbles:true,cancelable:true});
    }

    p.dispatchStep1 = function(){

        TweenMax.killAll();

        t.dispatchEvent({param: ResetClass, type:'changePage',bubbles:true,cancelable:true});
    };

    window.Step1=Step1;

}());
