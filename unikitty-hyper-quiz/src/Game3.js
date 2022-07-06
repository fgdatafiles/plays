
(function()
{
    'use strict';
    var t;
    var bgd;

    
    var s;
    var question;
    var data,counter,next;
    var ch;
    var cc,mini_l,currData;
    var nCorrect;
    var game;
    var timer;
    var numbers=['',52,61,73,79,88];
    var input,tInput;

    var shadow_appla,anim;
    var anim3;
    var odpowiedzi; 
    function Game3() {
        this.Container_constructor();

        this.init();
    }

    var game3 = c.extend(Game3,c.Container);
    game3.init = function(){
        t = this;
        app.step++;
        app.currentGame++;
        game = Math.ceil(app.step/2);

        if(app.game3.length<1){
            app.game3 = globals.strings.pages.game3.images;
        }
        currData =  app.game3.shift();

        nCorrect =parseInt(currData.id);
        shuffle(currData.answers);

        bgd=new c.Bitmap(main.loadedData.getResult('game3_b'+nCorrect));
        t.addChild(bgd);

        ch=new c.Bitmap(main.loadedData.getResult('game1_intro_unikitty'));
        t.addChild(ch);
        ch.x=2;
        ch.y=0;


        cc = new c.Container();
        cc.x = 447;
        cc.y = 91;
        t.addChild(cc);
        bgd=new c.Bitmap(main.loadedData.getResult('game1_intro_bubble'));
        cc.addChild(bgd);
        var question  = new c.Text(  globals.strings.pages.game3.intro.text, globals.strings.pages.game3.intro.font,'#0449C3');

        var l = question.font;
        l =l.substr(0,l.indexOf('px'));
        question.textAlign= 'center';
        question.lineWidth = 344;
        question.x =globals.strings.pages.game3.intro.x+179+question.lineWidth/2;
        question.y =globals.strings.pages.game3.intro.y+getoffset(question.font)+229/2-question.getMeasuredHeight()/2-(l/10);
        question.textBaseline = 'alphabetic';
        cc.addChild(question);


        mini_l=new c.Bitmap(main.loadedData.getResult('mini_logo'));
        t.addChild(mini_l);
        mini_l.x=404;
        mini_l.y=509;
        addCounter();


        next = new FrameBtt(main.loadedData.getResult('next_big_off'),main.loadedData.getResult('next_big_on'),globals.strings.pages.intro.next);
        next.x = 708;
        next.y= 373;
        next.addEventListener('click',onNext);
        t.addChild(next);
        TweenLite.from(ch,.5,{x:-566,delay:.3,ease:Power2.easeOut})
        TweenLite.from(cc,.5,{scaleX:0,scaleY:0,delay:.8,ease:Power2.easeOut})
        TweenLite.from(mini_l,.5,{y:620,delay:.7,ease:Power2.easeOut})
        TweenLite.from(next,.5,{x:1500,delay:1.1,ease:Power2.easeOut})

        var spriteSheet = new c.SpriteSheet(app.animHappy);
        anim3= new c.Sprite(spriteSheet,'idle');
        //anim3.scaleX = anim3.scaleY=.7;
        anim3.x=550;
        anim3.y=-100;
    };

    function onNext(e){
        t.addChild(counter);
        t.removeChild(ch);
        t.removeChild(next);
        next.removeEventListener('click',onNext);
        t.removeChild(mini_l);
        t.removeChild(cc);
        bgd=new c.Bitmap(main.loadedData.getResult('game3_c'+nCorrect));
        t.addChildAt(bgd,1);

        ch=new c.Bitmap(main.loadedData.getResult('small_unikitty_idle'));
        t.addChild(ch);
        ch.x=919;
        ch.y=62;

        cc = new c.Container();
        cc.x = 429;
        cc.y = 37;
        t.addChild(cc);
        bgd=new c.Bitmap(main.loadedData.getResult('unikitty_answer_bubble'));
        cc.addChild(bgd);
        question  = new c.Text(  currData.hint.text,  currData.hint.font,'#0449C3');
        var l = question.font;
        l =l.substr(0,l.indexOf('px'));
        question.textAlign= 'center';
        question.lineWidth = 421;
        question.x =globals.strings.pages.game3.intro.x+14+question.lineWidth/2;
        question.y =globals.strings.pages.game3.intro.y+getoffset(question.font)+99/2-question.getMeasuredHeight()/2-(l/10);
        question.textBaseline = 'alphabetic';
        cc.addChild(question);
        TweenLite.from(ch,1,{x:1600,delay:.5,ease:Power2.easeOut})
        TweenLite.from(cc,1,{alpha:0,scaleX:0,scaleY:0,delay:1.5,ease:Power2.easeOut})


         odpowiedzi = new c.Container()
        t.addChild(odpowiedzi);
        var odp;
        for (var i = 0;i<3;i++){

            console.log(currData.answers[i]);
            console.log(currData.answers[i].id);
            odp =  new FrameBtt(main.loadedData.getResult('i_off'),main.loadedData.getResult('i_on'),currData.answers[i]);
            odp.name = 'q'+currData.answers[i].id;
            console.log(odp.name);
            odp.x=  30+(i*91);
            odp.y=  416;
            odp.stateClicked =  true;
            odp.addEventListener('click',onSaveInput);
            odpowiedzi.addChild(odp);

        }
        //next.addEventListener('click',onSaveInput);
        addTimer();


    }

    function onSaveInput(e){

        odpowiedzi.mouseEnabled= false;
        t.removeChild(ch);
        ch=null;

        t.removeChild(counter);
        t.removeChild(input);
        t.removeChild(next);
        next=null;

        var spriteSheet;


        console.log(e.currentTarget.name)
        console.log(e.currentTarget.name.substr(1));
        if(e.currentTarget.name.substr(1)=='1'){
            s = 'good';

            spriteSheet=new c.SpriteSheet(app.animHappy);
            anim= new c.Sprite(spriteSheet,'happy');
            ch=new c.Bitmap(main.loadedData.getResult('small_unikitty_happy'));
            ch.x=919;
            question.color ='#ED4B9B';
            playSounds('correct2');
        }else if(e.currentTarget.name.substr(1)=='2'){
            s = 'almost';
            spriteSheet=new c.SpriteSheet(app.animAngry);
            anim= new c.Sprite(spriteSheet,'angry');
            ch=new c.Bitmap(main.loadedData.getResult('small_unikitty_almost'));
            ch.x=919;
            question.color ='#ED4B9B';

            playSounds('almost');
        }else{
         s = 'bad';
            spriteSheet=new c.SpriteSheet(app.animSad);
            anim= new c.Sprite(spriteSheet,'sad');
            playSounds('failure');
            ch=new c.Bitmap(main.loadedData.getResult('small_unikitty_sad'));
            question.color ='#E32526';
            ch.x=914;
        }
        anim.scaleX = anim.scaleY=.4;
        anim.x=830;
        anim.y=-0;
        t.addChild(anim);
        //if(globals.isMobile){
          //  TweenLite.to(input,.5,{y:416});
            //TweenLite.to(next,.5,{y:420});
        //}


        question.text=currData[s].text;
        question.font =currData[s].font;
        var l = question.font;
        l =l.substr(0,l.indexOf('px'));
        question.x =currData[s].x+14+question.lineWidth/2;
        question.y =currData[s].y+getoffset(question.font)+99/2-question.getMeasuredHeight()/2-(l/10);


        t.addChild(ch);

        ch.y=62;


        next = new FrameBtt(main.loadedData.getResult('next_big_off'),main.loadedData.getResult('next_big_on'),globals.strings.pages.intro.next);
        next.x = 708;
        next.y= 373;

       
            next.addEventListener('click',onNext3);
        
        t.addChild(next);



        timer.destroy();
    }



    function addTimer(){
        timer = new Timer();
        timer.x= 32;
        timer.y= 509;
        timer.addEventListener('end',onSaveTime);
        t.addChild(timer);
        TweenLite.from(timer,1,{y:700,delay:.5,ease:Power2.easeOut})
    }
    function onSaveTime(e){

        app.times['game'+game].time=e.time;
        if(s=='good'){
            app.times['game'+game].mili=e.param;
            app.times['game'+game].points=parseInt((Math.max((100000 - e.param),0))/10);


        }else if(s=='almost'){
            console.log('almost');
            app.times['game'+game].mili=e.param;
            app.times['game'+game].points=parseInt((Math.max((100000 - (e.param))/2,0))/10);
        }else{
            app.times['game'+game].mili=-1;

            app.times['game'+game].points=0;
        }
        app.points=0;
        for(var i=1;i<=game;i++ ){

            app.points+=parseInt(app.times['game'+i].points);
        }

    }

    function onNext2(){
        for(var i=1;i<10;i++){
            t.removeChild(t.getChildByName('p'+i));
        }
        t.removeChild(bgd);
        next.removeEventListener('click',onNext2);
        t.addChild(mini_l);
        t.removeChild(cc);
        t.removeChild(odpowiedzi);
        t.removeChild(ch);
        cc = null;
        shadow_appla = new c.Container();
        t.addChildAt(shadow_appla,2);
        var shadow = new c.Bitmap(main.loadedData.getResult('summary_shadow'));
        shadow_appla.addChild(shadow);
        var k = new c.Bitmap(main.loadedData.getResult('summary_unikitty'));
        t.addChild(k);

        k.x = 709;
        k.y = 73;
        cc = new c.Container();
        cc.x = 310;
        cc.y = 36;
        t.addChild(cc);
        bgd=new c.Bitmap(main.loadedData.getResult('summary_bubble'));
        cc.addChild(bgd);
        question  = new c.Text(  app.global.summary.text, app.global.summary.font,'#0449C3');
        var l = question.font;
        l =l.substr(0,l.indexOf('px'));
        question.textAlign= 'center';
        question.lineWidth = 340;
        question.x =app.global.summary.x+25+question.lineWidth/2;
        question.y =app.global.summary.y+getoffset(question.font)+229/2-question.getMeasuredHeight()/2-(l/10);
        question.textBaseline = 'alphabetic';
        cc.addChild(question);
        cc.regX = bgd.image.width;
        cc.regY = bgd.image.height;
        cc.x = 310+cc.regX;
        cc.y = 36+cc.regY;
        TweenLite.from(k,1,{x:1200,ease:Power2.easeOut})
        TweenLite.from(cc,1,{alpha:0,scaleX:0,scaleY:0,delay:1,ease:Power2.easeOut});

        t.addChildAt(anim3,3);
        anim3.gotoAndPlay('anim');
        addProgress();
        next.addEventListener('click',onNext3);
    }
    function onNext3(){
        console.log(app.currentGame);
        if( app.currentGame==5){
            t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
        }else{
            t.dispatchEvent({param: Quiz, type:'changePage',bubbles:true,cancelable:true});
        }
    }
    function addProgress(){
        for (var i =0;i<10;i++){
            var s='lev';
            var zz;
            if(app.step>i){
                s='lev_on';
            }
            zz= new c.Bitmap(main.loadedData.getResult(s));
            zz.regX = zz.image.width/2
            zz.regY = zz.image.height/2
            zz.x= zz.regX+65+58*i;
            zz.y=zz.regY+433;
            shadow_appla.addChild(zz);
            TweenLite.from(zz,1,{scaleX:0,scaleY:0,ease:Bounce.easeOut,delay:1+i*.2})

        }

        var t1  = new c.Text(  app.global.time1.text, app.global.time1.font,'#FDDB03');
        shadow_appla.addChild(t1);
        t1.textBaseline = 'alphabetic';
        t1.x =64+app.global.time1.x;
        t1.y =61+getoffset(t1.font)+app.global.time1.y;

        t1  = new c.Text(  app.global.points1.text, app.global.time1.font,'#FDDB03');
        shadow_appla.addChild(t1);
        t1.textBaseline = 'alphabetic';
        t1.x =64+app.global.points1.x;
        t1.y =177+getoffset(t1.font)+app.global.points1.y;

        t1  = new c.Text(  app.global.total_score1.text, app.global.total_score1.font,'#FDDB03');
        shadow_appla.addChild(t1);
        t1.textBaseline = 'alphabetic';
        t1.x =64+app.global.total_score1.x;
        t1.y =292+getoffset(t1.font)+app.global.total_score1.y;


        var time2  = new c.Text(  app.times['game'+game].time, app.global.time2.font,'#fff');
        shadow_appla.addChild(time2);
        var l = time2.font;
        l =l.substr(0,l.indexOf('px'));
        time2.textBaseline = 'alphabetic';
        time2.x =64+app.global.time2.x;
        time2.y =100+getoffset(time2.font)+app.global.time2.y-(l/10);


        var points2  = new c.Text(  app.times['game'+game].points, app.global.points2.font,'#fff');
        shadow_appla.addChild(points2);
        var l = points2.font;
        l =l.substr(0,l.indexOf('px'));
        points2.textBaseline = 'alphabetic';
        points2.x =64+app.global.points2.x;
        points2.y =217+getoffset(points2.font)+app.global.points2.y-(l/10);



        var total_score2  = new c.Text(  app.points, app.global.total_score2.font,'#fff');
        shadow_appla.addChild(total_score2);
        var l = total_score2.font;
        l =l.substr(0,l.indexOf('px'));
        total_score2.textBaseline = 'alphabetic';
        total_score2.x =64+app.global.total_score2.x;
        total_score2.y =334+getoffset(total_score2.font)+app.global.total_score2.y-(l/10);
        TweenLite.from(shadow_appla,1,{x:-1050,ease:Bounce.easeOut});
        playSounds('wysuwanie');
    }
    function addCounter(){
         counter = new c.Container();

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





    window.Game3 = c.promote(Game3, "Container");

}());
