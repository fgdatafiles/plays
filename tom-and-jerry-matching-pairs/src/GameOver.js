
(function()
{
    'use strict';
    var t,toonix_pasek,select_bl_toonix,offset,btt1,classToDispatch, bgd;
    var small_l;
    var t1,t3,t4,p1;

    var GameOver=function()
    {
        console.log('step7');
        t = this;
        this.initialize();
    };
    var p=GameOver.prototype=new c.Container();
    p.initialize=function() {



        var boom = new c.Bitmap(main.loadedData.getResult('logo_cn'));
        t.addChildAt(boom);
        boom.x=498;
        boom.y=639;
        t.addChild(boom)


        boom = new c.Bitmap(main.loadedData.getResult('logo_yabba_small'));
        t.addChildAt(boom);
        boom.x=1278;
        boom.y=631;
        t.addChild(boom)


        setTimeout(playSounds, 1000, 'gameover');
        bgd = new c.Bitmap(main.loadedData.getResult('bgd_game_over'));
        t.addChildAt(bgd);

        p1 = new c.Bitmap(main.loadedData.getResult('gameover_p1'));
        t.addChild(p1);
        p1.regX = p1.image.width / 2;
        p1.regY = p1.image.height / 2;
        p1.x = 779 + p1.regX;
        p1.y = 188 + p1.regY;

        bgd=new c.Bitmap(main.loadedData.getResult('go_label'));
        t.addChild(bgd);
        bgd.x = 639;
        bgd.y =24;


        t1 = new c.Text(strings.pages.game_over.congratulations.text, strings.pages.game_over.congratulations.font, '#fff');
        t1.lineWidth = 1920;
        t1.lineHeight = 66;
        t1.textBaseline = "alphabetic";


        t1.x = 960 + parseInt(strings.pages.game_over.congratulations.x);
        t1.textAlign = 'center';

        var l = t1.font;
        l =parseInt(l.substr(0,l.indexOf('px')));
        console.log(l)
        t1.y = 40 + parseInt(strings.pages.game_over.congratulations.y)+l*0.7;
        
        t3 = new c.Text(strings.pages.game_over.your_time.text, strings.pages.game_over.your_time.font, '#fff');
        t3.lineWidth = 1920;
        t3.x = 960 + parseInt(strings.pages.game_over.your_time.x);
        t3.textAlign = 'center';
        t3.y = 559 + parseInt(strings.pages.game_over.your_time.y);

        t4 = new c.Text(main.time, strings.pages.game_over.time.font, '#fff');
        t4.lineWidth = 1920;
        t4.x = 960 + parseInt(strings.pages.game_over.time.x);
        t4.textAlign = 'center';
        t4.y = 600 + parseInt(strings.pages.game_over.time.y);

        t.addChild(t1, t3, t4);
        var obj;
        var func;
        if (main.nCurrentLevel < 3) {
            obj = strings.pages.game_over.next_level;
            func = onNextLevel;
        } else {
            obj = strings.pages.game_over.play_again;
            func = onPlayAgain;
        }
        btt1 = new FrameBtt(main.loadedData.getResult('select_off'), main.loadedData.getResult('select_on'), '#73479D', obj);
        btt1.addEventListener('click', func);
        btt1.x = 782;
        btt1.y = 685;
        btt1.stateClicked = true;
        t.addChild(btt1);

        TweenLite.from(p1, .7, {scale: 0, x: 1008, y: 378, delay: .3});
        TweenLite.from(bgd, .7, { y: -400, delay: .5});
        TweenLite.from(t1, .6, {delay: .7, y: -200});

        TweenLite.from(t3, .6, {delay: .9, y: 790});
        TweenLite.from(t4, .6, {delay: 1, y: 790});
        TweenLite.from(btt1, .7, {delay: 1.2, y: 790});

    };


    function onPlayAgain(){
        classToDispatch = ResetClass;
        animOut();
    }
    function onNextLevel(){
		t.mouseEnabled=false;
        main.nCurrentLevel++;
        classToDispatch = Game;
        animOut();
    }
    function animOut(){
        


        TweenLite.to(t1,.8,{y:-150,ease:Strong.easeIn});

        TweenLite.to(btt1,.6,{y:820,ease:Strong.easeIn});
        TweenLite.to(t4,.6,{delay:.2,y:820,ease:Strong.easeIn});
        TweenLite.to(t3,.5,{delay:.4,y:820,ease:Strong.easeIn});
        TweenLite.to(bgd, .7, { y: -400, delay: .2});

        TweenLite.to(p1,.6,{delay:.8,x:-250,ease:Strong.easeIn,onComplete:t.dispatch});

    }

    p.dispatchStep1 = function(){
        t.dispatchEvent({param: ResetClass, type:'changePage',bubbles:true,cancelable:true});
    };
    p.dispatch = function(){
        t.dispatchEvent({param: classToDispatch, type:'changePage',bubbles:true,cancelable:true});
    };
    window.GameOver=GameOver;

}());
