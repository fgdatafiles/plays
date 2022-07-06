
(function()
{
    'use strict';
    var t;
    var timer;
    var ball;
    var line1;
    var line2;
    var img;
    var x1 = 52;
    var y1 = -90;
    var x2 = 53;

    var y2 = 140;
    var bat;
    var oldX;
    var oldY;
    var l1,l2;
    var counter =0;
    var aParts  =[[285,126,-77,19],[232,146,-100,146],[231,212,-48,149],[287,291,-62,270],[318,367,316,504],[406,348,426,518],[438,280,538,500],[475,220,750,353],[387,125,510,-28],[342,89,251,-25]];
    var part;


    function Piniata()
    {
        this.Container_constructor();
        t= this;
        this.initialize();

    }
    var piniata= c.extend(Piniata, c.Container);

    piniata.initialize=function()
    {
        TweenLite.from(t,1,{alpha:0,delay:1});

        ball = new Ball();
        this.addChild(ball);

        line1 = new c.Shape();
        line1.graphics.setStrokeStyle(4).beginStroke("rgba(0,0,0,1)");
        line1.graphics.moveTo(871, 168);
        line1.graphics.lineTo(ball.x+x1,ball.y+y1);
        line1.graphics.endStroke();
        t.addChild(line1);


        line2 = new c.Shape();
        line2.graphics.setStrokeStyle(4).beginStroke("rgba(0,0,0,1)");
        line2.graphics.moveTo(850, 628);
        line2.graphics.lineTo(ball.x+x2,ball.y+y2);
        line2.graphics.endStroke();

        t.addChild(line2);
        bat = new Bat();
        this.addChild(bat);

    };


    
    piniata.start=function(){
        t.addEventListener('tick', t.update);
    };
    piniata.update=function(){

        counter++;
        var mouseX =stage.mouseX/scaleS;
        var mouseY =stage.mouseY/scaleS;

        bat.update();

       var odleglosc = Math.floor(Math.sqrt(Math.pow(oldX-mouseX,2)+Math.pow(oldY-mouseY,2)));

        if(odleglosc>70&&ndgmr.checkRectCollision(ball.img,bat.img)){
            ball.hit(odleglosc);
        }
        oldX = mouseX;
        oldY = mouseY;
        ball.update();

        line1.graphics.clear();
        line2.graphics.clear();
        line1.graphics.setStrokeStyle(4).beginStroke("rgba(0,0,0,1)");
        line1.graphics.moveTo(871, 168);
        line1.graphics.lineTo(ball.x+x1,ball.y+y1);
        line1.graphics.endStroke();

        line2.graphics.setStrokeStyle(4).beginStroke("rgba(0,0,0,1)");
        line2.graphics.moveTo(850, 628);
        line2.graphics.lineTo(ball.x+x2,ball.y+y2);
        line2.graphics.endStroke();

    };

    piniata.gameOver=function(){
        //t.removeEventListener('tick', t.update);
        bat.gameOver();
        ball.gameOver();
        for(var i=0;i<9;i++){
            part = new createjs.Bitmap(main.loadedData.getResult('p'+i));
            t.addChild(part);
            part.x =aParts[i][0];
            part.y =aParts[i][1]-35;
            TweenLite.to(part,0.5,{x:aParts[i][2],y:aParts[i][3]});
        }
        var a =new createjs.Bitmap(main.loadedData.getResult('chmura'+main.selectedItem));
        //a.x = 141;
        //a.y = 500;
        t.addChildAt(a,0);
        a.regX = a.image.width/2;
        a.regY = a.image.height/2;
        a.x = ow/2;
        a.y = oh/2;
        TweenLite.from(a,1,{scaleX:0,scaleY:0,ease:Linear.easeNone,onComplete:dalej,onCompleteParams:[a]});
//;
        setTimeout(sciemnij,100);
    };

    function dalej(a){
        TweenLite.to(a,1,{scaleX:1.5,scaleY:1.5,alpha:0,ease:Strong.easeOut});
    }

    function sciemnij(){
        var sh = new createjs.Shape();
        sh.graphics.beginFill('#000000').drawRect(0, 0, 1640, 680);
        sh.alpha = 0;
        t.addChild(sh);
        TweenLite.to(sh,1,{alpha:0.5,onComplete:dispatch});
    }
    function dispatch(){
        t.dispatchEvent({type:'game_over2',bubbles:true,cancelable:true});
    }

    piniata.pause=function(){

        t.removeEventListener('tick', t.update);
    };

    piniata.unpause=function(){
        t.addEventListener('tick', t.update);
    };

    window.Piniata = c.promote(Piniata, "Container");

}());
