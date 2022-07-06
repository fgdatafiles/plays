
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
    var timer,brick;
    var pos=[[37,52],[162,52],[287,52],[37,156],[162,156],[287,156],[37,262],[162,262],[287,262]];
    //var arr=[1,2,3,4,5,6,7,8,9];
    var brick_pos=['',[676,436],[653,387],[713,177],[620,459],[804,220]];
    var brick_q,brick_con;
    var shadow_appla,anim3,anim;
    function Game4() {
        this.Container_constructor();

        this.init(); 
    }

    var game4 = c.extend(Game4,c.Container);
    game4.init = function(){
        t = this;
        console.log('GAME 4 INIT');
        app.step++;
        app.currentGame++;
        game = Math.ceil(app.step/2);
        
        //shuffle(arr);
        shuffle(pos);
        if(app.game4.length<1){
            app.game4 = globals.strings.pages.game4.images;
        }
        currData =  app.game4.shift();
    //      $.cookie(app.prefix+"_"+app.country+"_game4",app.game4);
        nCorrect =parseInt(currData.id);
        console.log(currData);
        bgd=new c.Bitmap(main.loadedData.getResult('b'+nCorrect));
        t.addChild(bgd);


        brick=new c.Bitmap(main.loadedData.getResult('brick_idle'));

        brick.x = 189;
        brick.y = 392;

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
        var question  = new c.Text(  globals.strings.pages.game4.intro.text, globals.strings.pages.game4.intro.font,'#0449C3');

        var l = question.font;
        l =l.substr(0,l.indexOf('px'));
        question.textAlign= 'center';
        question.lineWidth = 344;
        question.x =globals.strings.pages.game4.intro.x+179+question.lineWidth/2;
        question.y =globals.strings.pages.game4.intro.y+getoffset(question.font)+229/2-question.getMeasuredHeight()/2-(l/10);
        question.textBaseline = 'alphabetic';
        cc.addChild(question);


        mini_l=new c.Bitmap(main.loadedData.getResult('mini_logo'));
        t.addChild(mini_l);
        mini_l.x=404;
        mini_l.y=509;
        addCounter();


        next = new FrameBtt(main.loadedData.getResult('next_big_off'),main.loadedData.getResult('next_big_on'),globals.strings.pages.intro.next);
        next.x = 808;
        next.y= 373;
        next.addEventListener('click',onNext);
        t.addChild(next);
        TweenLite.from(ch,.5,{x:-566,delay:.3,ease:Power2.easeOut})
        TweenLite.from(cc,.5,{scaleX:0,scaleY:0,delay:1,ease:Power2.easeOut})
        TweenLite.from(mini_l,.5,{y:620,delay:1.2,ease:Power2.easeOut})
        TweenLite.from(next,.5,{x:1500,delay:1.3,ease:Power2.easeOut})

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
        t.addChild(brick);

         brick_con  = new c.Container();

        brick_q=new c.Bitmap(main.loadedData.getResult('brick_question'));
        t.addChild(brick_con);
        brick_con.addChild(brick_q);
        brick_con.x = brick_pos[nCorrect][0];
        brick_con.y = brick_pos[nCorrect][1];
        var data = {
            "framerate":24,
            "images":["img/anim/questions.png"],
            "frames":[
                [277, 0, 83, 36, 0, -19, -19],
                [360, 0, 84, 36, 0, -19, -19],
                [351, 37, 85, 34, 0, -18, -20],
                [269, 73, 87, 32, 0, -17, -21],
                [87, 106, 88, 31, 0, -17, -22],
                [263, 106, 89, 31, 0, -16, -22],
                [89, 73, 90, 33, 0, -16, -21],
                [84, 37, 91, 35, 0, -15, -20],
                [93, 0, 92, 37, 0, -15, -19],
                [0, 0, 93, 37, 0, -14, -19],
                [185, 0, 92, 37, 0, -15, -19],
                [175, 37, 91, 35, 0, -15, -20],
                [179, 73, 90, 33, 0, -16, -21],
                [0, 73, 89, 33, 0, -16, -21],
                [175, 106, 88, 31, 0, -17, -22],
                [0, 106, 87, 32, 0, -17, -21],
                [356, 73, 86, 32, 0, -18, -21],
                [266, 37, 85, 34, 0, -18, -20],
                [0, 37, 84, 36, 0, -19, -19]
            ],
            "animations":{}
        };
        var spriteSheet = new c.SpriteSheet(data);
        var anims= new c.Sprite(spriteSheet,'idle');
        //anim3.scaleX = anim3.scaleY=.7;
        //anims.x=550;
        //anims.y=-100;
        brick_con.addChild(anims);


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
        question.x =globals.strings.pages.game4.intro.x+14+question.lineWidth/2;
        question.y =globals.strings.pages.game4.intro.y+getoffset(question.font)+99/2-question.getMeasuredHeight()/2-(l/10);
        question.textBaseline = 'alphabetic';
        cc.addChild(question);

            var piece;
        var z;
        for(var i=0;i<9;i++){

            z=i+1;
            piece =new c.Container();
            var b =new createjs.Bitmap(main.loadedData.getResult('frame_idle'));
            piece.addChild(b);
            var toSelect =nCorrect;
            if(z>1){
                toSelect=Math.ceil(Math.random()*5);
            }
            b =new createjs.Bitmap(main.loadedData.getResult('game4_'+toSelect+'_'+z));
            piece.addChild(b);
            b.x =7;
            b.y =7;
            piece.addChild(b);

                //
            piece.x = pos[i][0];
            piece.y = pos[i][1];
            piece.name = 'p'+z;

            piece.addEventListener('click',onCheckMe);
            piece.cursor='pointer';
            t.addChild(piece);
            TweenLite.from(piece,.5,{alpha:0,delay:i*.2})
        };

        addTimer();
    }

    function addTimer(){
        timer = new Timer();
        timer.x= 32;
        timer.y= 509;
        timer.addEventListener('end',onSaveTime);
        t.addChild(timer);

    }
    function onSaveTime(e){

        app.times['game'+game].time=e.time;
        if(s=='good'){
            app.times['game'+game].mili=e.param;
            app.times['game'+game].points=parseInt((Math.max((100000 - e.param),0))/10);


        }else{
            app.times['game'+game].mili=-1;

            app.times['game'+game].points=0;
        }
        app.points=0;
        for(var i=1;i<=game;i++ ){

            app.points+=parseInt(app.times['game'+i].points);
        }

    }
    function onCheckMe(e){

        var i = parseInt(e.currentTarget.name.substr(1));
        t.removeChild(ch);
        ch=null;
        t.removeChild(counter);
        t.removeChild(brick);
        var spriteSheet;

        if(i!=1){
            s='bad';
            spriteSheet=new c.SpriteSheet(app.animSad);
            anim= new c.Sprite(spriteSheet,'sad');
            ch=new c.Bitmap(main.loadedData.getResult('small_unikitty_sad'));
            question.color ='#E32526';
            ch.x=915;
            playSounds('failure');
        }else{
            spriteSheet=new c.SpriteSheet(app.animHappy);
            anim= new c.Sprite(spriteSheet,'happy');
            ch=new c.Bitmap(main.loadedData.getResult('small_unikitty_happy'));
            question.color ='#ED4B9B';
            s='good';
            ch.x=919;
            playSounds('correct2');
        }
        TweenLite.to(brick_con,1,{alpha:0});
        
        //var zz = new c.Bitmap(main.loadedData.getResult('game4_'+nCorrect+'_1'));
        //t.addChild(zz);
        //zz.x= brick_pos[nCorrect][0]+6;
        //zz.y= brick_pos[nCorrect][1]+6;


        // dodaj dobrego bricka

        anim.scaleX = anim.scaleY=.4;
        anim.x=830;
        anim.y=-0;
        t.addChild(anim);
        brick=new c.Bitmap(main.loadedData.getResult('brick_'+s));
        t.addChild(brick);
        brick.x = 189;
        brick.y = 392;
        t.addChild(brick);

        question.text=currData[s].text;

        question.font =currData[s].font;
        var l = question.font;
        l =l.substr(0,l.indexOf('px'));
        question.x =currData[s].x+14+question.lineWidth/2;
        question.y =currData[s].y+getoffset(question.font)+99/2-question.getMeasuredHeight()/2-(l/10);


        t.addChild(ch);

        ch.y=62;
        var tt= 'frame_'+s;

        e.currentTarget.removeChildAt(0);
        var b = new c.Bitmap(main.loadedData.getResult(tt));

        e.currentTarget.addChildAt(b,0)


        for(i=1;i<10;i++){
            t.getChildByName('p'+i).mouseEnabled=false;
        }
       
            next.addEventListener('click',onNext3);
               t.addChild(next);
        timer.destroy();
    }
    function onNext2(){
        for(var i=1;i<10;i++){
            t.removeChild(t.getChildByName('p'+i));
        }
        t.removeChild(bgd);
        next.removeEventListener('click',onNext2);
        t.addChild(mini_l);
        t.removeChild(cc);
        t.removeChild(ch);
        t.removeChild(brick);
        t.removeChild(brick_con);
        cc = null;

        shadow_appla = new c.Container();
        t.addChildAt(shadow_appla,1);
        var shadow = new c.Bitmap(main.loadedData.getResult('summary_shadow'));
        shadow_appla.addChild(shadow);

        var k = new c.Bitmap(main.loadedData.getResult('summary_unikitty'));
        t.addChild(k);

        k.x = 709;
        k.y = 73;
        cc = new c.Container();

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
        TweenLite.from(cc,1,{alpha:0,scaleX:0,scaleY:0,delay:1,ease:Power2.easeOut})
        t.addChildAt(anim3,3);
        anim3.gotoAndPlay('anim');

        addProgress();
        next.addEventListener('click',onNext3);
    }
    function onNext3(){
        console.log(app.currentGame);
        if(app.currentGame==5){
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
        TweenLite.from(shadow_appla,1,{x:-1050,ease:Bounce.easeOut})
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





    window.Game4 = c.promote(Game4, "Container");

}());
