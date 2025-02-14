
(function()
{
    'use strict';

    var bgd;
    var hz;
    var odkurzacz,timer,c,tPoints,items,life,t;
    var good,bad;
    var Level2=function()
    {

        t = this;
        this.initialize();
    };
    var level2=Level2.prototype=new createjs.Container();
    level2.Container_initialize=level2.initialize;
    level2.initialize=function() {
        this.Container_initialize();
        main.nCurrentLevel=2;
        life = 3;

        main.points2 = 0;
        setTimeout(function(){t.mouseEnabled = true;},1000);
        bgd=new createjs.Bitmap(main.loadedData.getResult('level2'));
        console.log(bgd.image.width);
        t.addChild(bgd);


        odkurzacz = new createjs.Container;
        var gfx = new createjs.Bitmap(main.loadedData.getResult('odkurzacz2'));
        gfx.regX = gfx.image.width/2;
        odkurzacz.addChild(gfx);
        odkurzacz.y = 406;
        this.addChild(odkurzacz);

        hz = new createjs.Bitmap(main.loadedData.getResult('hz'));
        hz.x = -15;
        hz.y = 10;
        hz.visible = false;
        odkurzacz.addChild(hz);


        items = new Items2(Item2);
        this.addChild(items);
        this.addEventListener('tick', this.update);




        addHUD();



        good = new createjs.Bitmap(main.loadedData.getResult('good'));
        this.addChild(good);
        good.x = -1000;

        bad = new createjs.Bitmap(main.loadedData.getResult('bad'));
        bad.x = -1000;
        this.addChild(bad);

        powtorz();
    };

    function powtorz(){
        TweenLite.fromTo(bgd,30,{x:0},{x:-5187,/*onComplete:powtorz,*/ease:Linear.easeNone})
    }
    function addHUD(){

        c = new createjs.Container();
        t.addChild(c);
        c.x = 0;
        c.y = 474;
        var sh = new createjs.Shape(new createjs.Graphics().beginFill('#89338D').drawRect(0,0,201,33));
        c.addChild(sh);
        var tt = new createjs.Text(strings.pages.game.title.text, strings.pages.game.title.font,'#fff');
        tt.textBaseline = "alphabetic";
        tt.lineWidth=201;
        tt.textAlign='center';
        tt.x = 100+strings.pages.game.title.x;
        tt.y = 24+strings.pages.game.title.y;

        c.addChild(tt);

        for(var i=0;i<3;i++){
            var lemm = new createjs.Bitmap(main.loadedData.getResult('life'));
            lemm.x = 208+(36*i);
            lemm.y = 4;
            lemm.name = 'l'+(i+1);
            c.addChild(lemm);
        }
        sh = new createjs.Shape(new createjs.Graphics().beginFill('#fff').drawRect(201,0,120,33));
        c.addChildAt(sh,0);


        sh = new createjs.Shape(new createjs.Graphics().beginFill('#53B7E7').drawRect(740,0,117,33));
        c.addChildAt(sh,0);

        sh = new createjs.Shape(new createjs.Graphics().beginFill('#EB008B').drawRect(857,0,87,33));
        c.addChildAt(sh,0);



        timer = new Timer();
        t.addChild(timer);

        timer.x = 800;
        timer.y = 472;

        main.nLevel2_points=0;
        tPoints=new createjs.Text(main.nLevel2_points, '30px GarageGothic-Bold' ,'#fff');
        tPoints.textAlign='center';
        tPoints.lineWidth = 87;
        tPoints.x = 857+87/2;
        tPoints.y = 26;
        tPoints.textBaseline = "alphabetic";
        c.addChild(tPoints);

        timer.addEventListener('end',onNextLevel);
        //timer.addEventListener('start',startGame);
    }


    level2.update=function(){

        odkurzacz.x=stage.mouseX/main.scale;//Math.max((Math.min(stage.mouseX/main.scale,810-offsetX)),15);
        var procent = ((944/2)-odkurzacz.x)/472;

        if(odkurzacz.x>472){odkurzacz.scaleX=-1;}else{
            odkurzacz.scaleX=1;
        }


        items.update();

        items.toCheck.forEach(function(item) {
            if(ndgmr.checkPixelCollision(hz,item,255,false)){

                if(item.parent.name.substr(0,1)=='l'){


                    c.getChildByName('l'+life).visible = false;
                    life--;
                    if(life==0){
                        if(main.points2<500){
                            main.text = strings.pages.game_over.title3;
                        }else{
                            main.text = strings.pages.game_over.title1;
                        }
                        timer.destroy();
                        t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
                    }else{
                        addBad();
                    }
                }else{
                    addGood();
                    main.points2+=100;
                    tPoints.text = main.points2;
                }

                console.log(item);
                item.parent.parent.reset();
            }

        });


    };
    function addGood(){
        if(main.sound){
            createjs.Sound.play('s2');
        }
        TweenMax.killTweensOf(good);
        TweenMax.killTweensOf(bad);
        bad.x= -1000;
        good.alpha=1;
        good.x = odkurzacz.x-10;
        good.y = odkurzacz.y;
        TweenLite.to(good,1,{y:364,alpha:0,ease:Strong.easeOut});
    }
    function addBad(){
        if(main.sound){
            createjs.Sound.play('s3');
        }
        TweenMax.killTweensOf(good);
        TweenMax.killTweensOf(bad);
        good.x= -1000;
        bad.alpha=1;
        bad.x = odkurzacz.x-10;
        bad.y = odkurzacz.y;
        TweenLite.to(bad,1,{y:364,alpha:0,ease:Strong.easeOut});
    }
    function onNextLevel(){

        if(main.nCurrentLevel==3){
            t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
        }else{
            t.dispatchEvent({param: NextLevel, type:'changePage',bubbles:true,cancelable:true});
        }
    }

    window.Level2=Level2;

}());



