
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,btt1,cursor,p1,p2,p3;
    var click;
    var clickAnim ={
        "framerate":24,
        "images":["img/animate.png"],
        "frames":[
            [2, 2, 124, 124, 0, 0, 0],
            [134, 2, 124, 124, 0, 0, 0],
            [266, 2, 124, 124, 0, 0, 0],
            [398, 2, 124, 124, 0, 0, 0],
            [530, 2, 124, 124, 0, 0, 0],
            [662, 2, 124, 124, 0, 0, 0],
            [794, 2, 124, 124, 0, 0, 0],
            [926, 2, 124, 124, 0, 0, 0],
            [1058, 2, 124, 124, 0, 0, 0],
            [1190, 2, 124, 124, 0, 0, 0],
            [1322, 2, 124, 124, 0, 0, 0],
            [1454, 2, 124, 124, 0, 0, 0],
            [1586, 2, 124, 124, 0, 0, 0],
            [1718, 2, 124, 124, 0, 0, 0],
            [1850, 2, 124, 124, 0, 0, 0],
            [2, 134, 124, 124, 0, 0, 0],
            [134, 134, 124, 124, 0, 0, 0],
            [266, 134, 124, 124, 0, 0, 0],
            [398, 134, 124, 124, 0, 0, 0],
            [530, 134, 124, 124, 0, 0, 0]
        ],
        "animations":{
            "stop": {"frames": [0], "speed": 1},
            "play": {
                "frames": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19
                ],
                "next": "stop",
                "speed": 2
            }
        }
    }
    function Htp()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(Htp, c.Container);
    p.initialize=function() {

        playSounds('htp');
        bmp = new  c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bmp);

       var logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game'));
        logo_game1.x = 694;
        logo_game1.y = 25;
        t.addChild(logo_game1);



        TweenLite.from(logo_game1,2,{y:-200,ease:Strong.easeOut,delay:.5});

        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#FFF',strings.pages.intro.play);
        btt1.regX = 327/2;
        btt1.regY = 71/2;
        btt1.x = 608+btt1.regX;
        btt1.y = 539+btt1.regY;
        btt1.txt.y +=10;



        var textC = new c.Container();
        textC.x=475;
        textC.y=135;
         bmp=new c.Bitmap(main.loadedData.getResult('htp_bgd'));
        textC.addChild(bmp);
        var t1 =   new c.Text(strings.pages.htp.title.text, strings.pages.htp.title.font, '#fff');
        t1.textAlign = 'center';
        t1.lineWidth=690;
        t1.x = 690/2+strings.pages.htp.title.x;
        t1.y = 25+strings.pages.htp.title.y;
        t.addChild(textC);
        textC.addChild(t1);








        p1 = new c.Bitmap(main.loadedData.getResult('htp1'));
        t.addChild(p1);
        p1.regX = p1.image.width/2
        p1.regY = p1.image.height/2
        p1.x = 580;+p1.regX
        p1.y = 295+p1.regY;


        p2 = new c.Bitmap(main.loadedData.getResult('htp2'));
        t.addChild(p2);
        p2.regX = p2.image.width/2;
        p2.regY = p2.image.height/2;
        p2.x = 795+ p2.regX;
        p2.y = 335+ p2.regY;

        p3 = new c.Bitmap(main.loadedData.getResult('htp3'));
        t.addChild(p3);
        p3.regX = p3.image.width/2;
        p3.regY = p3.image.height/2;
        p3.x = 1038+ p3.regX ;
        p3.y = 428+ p3.regY;

        t.addChild(btt1);



         cursor = new  c.Bitmap(main.loadedData.getResult('cursor'));
        cursor.regX =14;
        cursor.regY =10;

        cursor.x = 1181+cursor.regX;
        cursor.y = 318+cursor.regY;

        t.addChild(intro_logo);
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random(),onComplete:wlaczBtt});
        for(var i=0;i<textC.numChildren;i++){
            TweenLite.from(textC.getChildAt(i),1,{delay:2+i*.2,alpha:0});
        }



       var clickA = new c.SpriteSheet(clickAnim);
        click = new c.Sprite(clickA);
        t.addChild(click);
        click.regX = 78/2;
        click.regY = 78/2;

        t.addChild(cursor);

        TweenLite.from(cursor,1,{x:1900,ease:Power1.easeOut,delay:1,onComplete:animateMe});
        t.addChild(btt1);

    };


    function animateMe(){
        p3.alpha= p2.alpha= p1.alpha=1;
        p3.scaleX = p3.scaleY=p1.scaleX = p1.scaleY=p2.scaleX = p2.scaleY=1;
        p3.x = 1038+ p3.regX;
        p3.y = 428+ p3.regY;
        TweenLite.to(cursor,.8,{x:600,y:321,ease:Power1.easeOut,delay:2.2});
        TweenMax.to(cursor,.1,{scaleX:0.95,scaleY:0.95,ease:Power1.easeOut,delay:3.2,onComplete:onPointAnim,onCompleteParams:[600,321]});
        TweenLite.to(cursor,.1,{scaleX:1.05,scaleY:1.05,ease:Power1.easeOut,delay:3.3});
        TweenMax.to(cursor,.1,{scaleX:1,scaleY:1,ease:Power1.easeOut,delay:3.4,onComplete:animP1});

        TweenMax.to(cursor,.7,{x:831,y:362,ease:Power1.easeOut,delay:3.8});
        TweenMax.to(cursor,.1,{scaleX:0.95,scaleY:0.95,ease:Power1.easeOut,delay:4.6,onComplete:onPointAnim,onCompleteParams:[831,362]});
        TweenLite.to(cursor,.1,{scaleX:1.05,scaleY:1.05,ease:Power1.easeOut,delay:4.7});
        TweenMax.to(cursor,.1,{scaleX:1,scaleY:1,ease:Power1.easeOut,delay:4.8,onComplete:animP2});
        TweenMax.to(cursor,.7,{x:831,y:362,ease:Power1.easeOut,delay:5.2});

        TweenMax.to(cursor,.7,{x:1089,y:465,ease:Power1.easeOut,delay:5.6});
        TweenMax.to(cursor,.1,{scaleX:0.95,scaleY:0.95,ease:Power1.easeOut,delay:6.3,onComplete:onPointAnim,onCompleteParams:[1089,465]});
        TweenLite.to(cursor,.1,{scaleX:1.05,scaleY:1.05,ease:Power1.easeOut,delay:6.4});
        TweenMax.to(cursor,.1,{scaleX:1,scaleY:1,ease:Power1.easeOut,delay:6.5,onComplete:animP3});
        TweenMax.to(cursor,.7,{x:1181,y:318,ease:Power1.easeOut,delay:6.9,onComplete:animateMe});
    }

    function animP3(){
        console.log('p1')
        TweenLite.to(p3,.5,{scaleX:1.5,scaleY:1.5,alpha:0})
    }
    function animP1(){
        console.log('p1')
        TweenLite.to(p1,.5,{scaleX:1.5,scaleY:1.5,alpha:0})
    }
    function animP2(){

        TweenLite.to(p2,.5,{scaleX:1.5,scaleY:1.5,alpha:0})
    }
    function onPointAnim(x,y){
        click.x = x;
        click.y = y;
        click.gotoAndPlay('play');
    }

    function wlaczBtt(){

        btt1.addEventListener('click',onDispatch);
    }
    function onDispatch(){

        TweenMax.killAll();
        c.Sound.play('music',{loop:-1});
        t.mouseEnabled = false;
        t.dispatchEvent({param: Level1, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Htp= c.promote(Htp, "Container");


}());
