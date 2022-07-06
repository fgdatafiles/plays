
(function()
{
    'use strict';
    var t;
    var timer;
    var ball;
    var line1;
    var line2;
    var img;
    var x1 = 153;
    var x2 = 156;
    var y1 = 62;
    var y2 = 248;
    var bat;
    var oldX;
    var oldY;
    var counter =0;
    var aParts  =[[285,126,-77,19],[232,146,-100,146],[231,212,-48,149],[287,291,-62,270],[318,367,316,504],[406,348,426,518],[438,280,538,500],[475,220,750,353],[387,125,510,-28],[342,89,251,-25]];
    var part;
    var Piniata=function()
    {
        this.initialize();
    };
    var piniata=Piniata.prototype=new createjs.Container();
    piniata.Container_initialize=piniata.initialize;
    piniata.initialize=function()
    {
        t= this;
        //main.stage.cursor='none';
        ball = new Ball();
        ball.x = -40;
        ball.y = -120;



        this.addChild(ball);
        //setTimeout(function(){ball.x = 400;ball.y=400;},1000);




        line1= new createjs.Shape();
        line1.graphics.setStrokeStyle(5);
        line1.graphics.beginStroke('#7B5739');
        line1.graphics.moveTo(470,68);

        line1.graphics.lineTo(ball.x+x1,ball.y+y1);
        this.addChild(line1);


        line2= new createjs.Shape();

        line2.graphics.setStrokeStyle(5);
        line2.graphics.beginStroke('#7B5739');
        line2.graphics.moveTo(470,460);
        line2.graphics.lineTo(ball.x+x2,ball.y+y2);
        this.addChild(line2);

        bat = new Bat();
        this.addChild(bat);
        //main.stage.addEventListener('pressmove',onBatChange);


    };

    piniata.start=function(){
        t.addEventListener('tick', t.update);
    };
    piniata.update=function(){
        counter++;
        line1.graphics.clear();
        line1.graphics.setStrokeStyle(5);
        line1.graphics.beginStroke('#7B5739');
        line1.graphics.moveTo(470,68);

        line1.graphics.lineTo(ball.x+x1,ball.y+y1);

        line2.graphics.clear();
        line2.graphics.setStrokeStyle(5);
        line2.graphics.beginStroke('#7B5739');
        line2.graphics.moveTo(470,460);

        line2.graphics.lineTo(ball.x+x2,ball.y+y2);
        t.addChild(line2);

        var mouseX =stage.mouseX;
        var mouseY =stage.mouseY;

        bat.update();

       var odleglosc = Math.floor(Math.sqrt(Math.pow(oldX-mouseX,2)+Math.pow(oldY-mouseY,2)));

        if(odleglosc>70&&ndgmr.checkRectCollision(ball.img,bat.img)){
            ball.hit(odleglosc);
        }
        oldX = mouseX;
        oldY = mouseY;
        ball.update();
    };

    piniata.gameOver=function(){
        //t.removeEventListener('tick', t.update);
        bat.gameOver();
        ball.gameOver();
        /*
        for(var i=0;i<9;i++){
            part = new createjs.Bitmap(main.loadedData.getResult('p'+i));
            t.addChild(part);
            part.x =aParts[i][0];
            part.y =aParts[i][1]-35;
            TweenLite.to(part,0.5,{x:aParts[i][2],y:aParts[i][3]});
        }*/console.log('gameover piniata');
        var a =new createjs.Bitmap(main.loadedData.getResult('chmura'));
        //a.x = 141;
        //a.y = 500;
        t.addChildAt(a,0);
        a.regX = a.image.width/2;
        a.regY = a.image.height/2;
        a.x = (main.nWidth/2)/main.scale;
        a.y = (main.nHeight/2)/main.scale;
        TweenLite.from(a,2,{scaleX:0,scaleY:0,ease:Linear.easeNone});
//;
        //setTimeout(sciemnij,100);
    };

    function dalej(a){
        TweenLite.to(a,1,{scaleX:1.5,scaleY:1.5,alpha:0,ease:Strong.easeOut});
    }
    function toRad(angle) {
        return  (angle-90) * Math.PI/180;
    }
    function pie(pie_x, pie_y, startAngle, endAngle, radius1, radius2, fillColor, lineColor, lineThickness)
    {
        var g = new createjs.Graphics();
        g.setStrokeStyle(lineThickness);
        g.beginFill(fillColor);
        g.beginStroke(lineColor);
        g.arc(pie_x, pie_y, radius1, toRad(startAngle), toRad(endAngle));
        g.lineTo(pie_x + Math.cos(toRad(endAngle)) * radius2, pie_y + Math.sin(toRad(endAngle)) * radius2);
        g.arc(pie_x, pie_y, radius2, toRad(endAngle), toRad(startAngle), true);
        g.closePath();
        g.endFill();

        return g;


    }
    function sciemnij(){
        var sh = new createjs.Shape();
        sh.graphics.beginFill('#000000').drawRect(0, 0, 944, 530);
        sh.alpha = 0;
        t.addChild(sh);
        TweenLite.to(sh,1,{alpha:0.5,onComplete:dispatch});
    }
    function dispatch(){
 //      t.dispatchEvent({type:'game_over',bubbles:true,cancelable:true});
    }

/*
    function onBatChange(e){
        bat.x=  main.stage.mouseX;
        bat.y=  main.stage.mouseY;
    }
    */
    window.Piniata=Piniata;
}());
