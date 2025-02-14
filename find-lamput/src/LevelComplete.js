
(function()
{
    'use strict';
    var t;
    var bmp,t1,p1,p2,btt1,diff;
    var tempPoint =0;
    var interval;
    function LevelComplete()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(LevelComplete, c.Container);

    p.initialize=function() {

        playSounds('level_complete');
        nCurrentLevel++;

        bmp = new  c.Bitmap(main.loadedData.getResult('game_level_complete'));
        t.addChild(bmp);

        p1= new  c.Bitmap(main.loadedData.getResult('p1_lc'));
        p1.x = 1064;
        p1.y = 181;

         p2 = new  c.Bitmap(main.loadedData.getResult('p2_lc'));
        p2.x = 478;
        p2.y = 16;



        var mobile = new c.Container();
        var mob_gfx= new c.Bitmap(main.loadedData.getResult('mobile'));

        mob_gfx.x = 63;
        mob_gfx.y = 132;
        mobile.addChild(mob_gfx)
         t1 =   new c.Text(strings.pages.next_level.success.text, strings.pages.next_level.success.font, '#4F5969');
        t1.textAlign = 'center';
        t1.x = 1640/2+strings.pages.next_level.success.x;
        t1.lineWidth=1640;
        t1.y = 210+strings.pages.next_level.success.y;
        mobile.addChild(t1);

        t1 =   new c.Text(strings.pages.next_level.score.text, strings.pages.next_level.score.font, '#8793A7');
        t1.textAlign = 'center';
        t1.x = 1640/2+strings.pages.next_level.score.x;
        t1.lineWidth=1640;
        t1.y = 330+strings.pages.next_level.score.y;
        mobile.addChild(t1);


        t1 =   new c.Text('0', strings.pages.next_level.points.font, '#FF8500');
        t1.textAlign = 'center';
        t1.x = 1640/2+strings.pages.next_level.points.x;
        t1.lineWidth=1640;
        t1.y = 370+strings.pages.next_level.points.y;
        mobile.addChild(t1);


        var logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game'));
        logo_game1.x = 694;
        logo_game1.y = 25;
        t.addChild(logo_game1);

        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#fff',strings.pages.next_level.next_level);
        btt1.regX = 327/2;
        btt1.regY = 71/2;
        btt1.x = 608+btt1.regX;
        btt1.y = 539+btt1.regY;
        btt1.txt.y +=10;
        btt1.addEventListener('click',onLevel2)
        t.addChild(p2);
        t.addChild(mobile);
        t.addChild(btt1);

        t.addChild(p1);

        TweenMax.from(mobile,4,{y:800,ease:Power4.easeOut,delay:.5,onComplete:setIntervalT});
        TweenMax.from(p2,1,{alpha:0,y:200,ease:Bounce.easeOut,delay:2.5});
        TweenMax.from(p1,1,{x:2000,ease:Elastic.easeOut,delay:2.9});


        TweenMax.from(t1,1.5,{scaleX:0,scaleY:0,ease:Elastic.easeOut,delay:2.5});

    };
    function setIntervalT(){

        diff = Math.floor(level1Points/60);
        interval = setInterval(increase,50)

    }
    function increase(){
        playSounds('click2');
        if(tempPoint<level1Points){
            tempPoint = Math.min(level1Points,tempPoint+diff);


            t1.text = tempPoint;
        }else{
            t1.text = level1Points;
            clearInterval(interval);
        }
    }
    function onLevel2(){
        TweenMax.killAll();
        clearInterval(interval)
        t.dispatchEvent({param: Level2, type:'changePage',bubbles:false,cancelable:true});
    }

    window.LevelComplete = c.promote(LevelComplete, "Container");

}());
