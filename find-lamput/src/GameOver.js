
(function()
{
    'use strict';
    var t;
    var bmp,confetti,totalscore,p2,btt1,bestVal,t2,t3;
    var t1,diff;
    var tempPoint =0;
    var interval;
    function GameOver()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(GameOver, c.Container);
    p.initialize=function(){


        totalscore = level1Points+level2Points;
        tempPoint = level1Points;
         bestVal=parseInt(readLocalStorageObject('lamput_game1_points'));
         console.log(bestVal+'bestVal')

        if(isNaN(bestVal)){
            bestVal=totalscore;
            console.log('is NaN')
            createLocalStorageObject('lamput_game1_points',bestVal)
        }else{


            if(bestVal<totalscore){
                bestVal=totalscore;
                createLocalStorageObject('lamput_game1_points',bestVal)
            }

        }


        playSounds('game_over');

        bmp = new  c.Bitmap(main.loadedData.getResult('game_level_complete'));
        t.addChild(bmp);

        var p1 = new  c.Bitmap(main.loadedData.getResult('p1_go'));
        p1.x = 956;
        p1.y = 1;

        var mobile = new c.Container();
        var mob_gfx= new c.Bitmap(main.loadedData.getResult('mobile'));

        mob_gfx.x = 63;
        mob_gfx.y = 132;
        mobile.addChild(mob_gfx)
         t1 =   new c.Text(strings.pages.game_over.success.text, strings.pages.game_over.success.font, '#4F5969');
        t1.textAlign = 'center';
        t1.x = 1640/2+strings.pages.game_over.success.x;
        t1.lineWidth=1640;
        t1.y = 210+strings.pages.game_over.success.y;
        mobile.addChild(t1);

        t1 =   new c.Text(strings.pages.game_over.total_score.text, strings.pages.game_over.total_score.font, '#8793A7');
        t1.textAlign = 'center';
        t1.x = 1640/2+strings.pages.game_over.total_score.x;
        t1.lineWidth=1640;
        t1.y = 301+strings.pages.game_over.total_score.y;
        mobile.addChild(t1);

        console.log(level1Points+":"+level2Points);
        t1 =   new c.Text(level1Points, strings.pages.game_over.points.font, '#FF8500');
        t1.textAlign = 'center';
        t1.x = 1640/2+strings.pages.game_over.points.x;
        t1.lineWidth=1640;
        t1.y = 337+strings.pages.game_over.points.y;
        mobile.addChild(t1);


        t2 =   new c.Text(strings.pages.game_over.best_score.text, strings.pages.game_over.best_score.font, '#8793A7');
        t2.textAlign = 'center';
        t2.x = 1640/2+strings.pages.game_over.best_score.x;
        t2.lineWidth=1640;
        t2.y = 452+strings.pages.game_over.best_score.y;
        mobile.addChild(t2);
``
        t3 =   new c.Text(bestVal, strings.pages.game_over.best_score.font, '#FF8500');

        t3.x = 867;
        t3.y = 452+strings.pages.game_over.best_score.y;
        mobile.addChild(t3);
        t2.alpha = t3.alpha = 0;


        var logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game'));
        logo_game1.x = 694;
        logo_game1.y = 25;
        t.addChild(logo_game1);

        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#fff',strings.pages.game_over.play_again);
        btt1.regX = 327/2;
        btt1.regY = 71/2;
        btt1.x = 608+btt1.regX;
        btt1.y = 539+btt1.regY;
        btt1.addEventListener('click',onDispatch);
        btt1.txt.y +=10;
        t.addChild(p2);
        t.addChild(mobile);
        t.addChild(btt1);
        t.addChild(p1);


        TweenMax.from(mobile,4,{y:800,ease:Power4.easeOut,delay:.5,onComplete:setIntervalT});

        TweenMax.from(p1,3,{y:-200,ease:Elastic.easeOut,delay:2.9});

        confetti= new c.Bitmap(main.loadedData.getResult('confetti'));
        t.addChild(confetti);
        confetti.regX = confetti.image.width/2;
        confetti.regY = confetti.image.height;


        confetti.x = 1640/2;
        TweenLite.to(confetti,7,{y:2200})



    };
    function setIntervalT(){

        diff = Math.floor(level2Points/60);

        if(diff>1){
        interval = setInterval(increase,50)
        }else{
            t1.text = totalscore;

            TweenLite.to(t2,1,{alpha:1})
            TweenLite.to(t3,1,{alpha:1,delay:.5})
        }

    }
    function increase(){
        playSounds('click2');
        if(tempPoint<totalscore){
            tempPoint = Math.min(totalscore,tempPoint+diff);


            t1.text = tempPoint;
        }else{
            t1.text = totalscore;
            clearInterval(interval);

            TweenLite.to(t2,1,{alpha:1})
            TweenLite.to(t3,1,{alpha:1,delay:.5})
        }
    }

    function onDispatch(){

        window.location='./index.html'
        //t.mouseEnabled = false;
       // t.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});
    }
    window.GameOver = c.promote(GameOver, "Container");

}());
