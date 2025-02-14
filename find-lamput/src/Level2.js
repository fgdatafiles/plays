
(function()
{
    'use strict';
    var _this;
    var timer;
    var bgd,black;
    var pos =[
        {},{x:415,y:148},{x:415,y:432 },{x:486,y:172},{x:550,y:463},{x:652,y:387},{x:753,y:70},{x:798,y:538},{x:844,y:186},{x:907,y:325},{x:1021,y:242},{x:1067,y:386},{x:1060,y:563},{x:1131,y:300},{x:1166,y:381},{x:1208,y:344}
    ]
    var click,minihudContainer;
    var founded  =0;
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
    function Level2()
    {
        this.Container_constructor();
        _this = this;
        this.initialize();
    }
    var level1 = c.extend(Level2, c.Container);
    level1.initialize=function() {

        nCurrentLevel =2;

        level2Points=0;
        founded = 0;
        console.log('lev2');
        bgd = new c.Bitmap(main.loadedData.getResult('level2'));
        _this.addChild(bgd);
        var hudbgd = new c.Bitmap(main.loadedData.getResult('hud2'));
        _this.addChild(hudbgd);
        hudbgd.x=486;
        hudbgd.y=7;

        minihudContainer=  new c.Container();
        _this.addChild(minihudContainer)

        timer = new Timer();
        _this.addChild(timer);
        timer.time_txt.x+=50;

        for(var i=1;i<16;i++){


            var minihud =  new c.Bitmap(main.loadedData.getResult('hud_mini2'));
            minihud.x = 498+i*20.5 - 20;
            minihud.y =21
            minihud.alpha= 0;
            minihudContainer.addChild(minihud);
            var item = new c.Bitmap(main.loadedData.getResult('2_'+i));
            item.regX = item.image.width/2;
            item.regY = item.image.height/2;
            item.x =pos[i].x+item.regX;
            item.y =pos[i].y+item.regY;
            _this.addChild(item);
            item.addEventListener('click',onClickLamput);
        }

        var clickA = new c.SpriteSheet(clickAnim);
        click = new c.Sprite(clickA);
        _this.addChild(click);
        click.regX = 78/2;
        click.regY = 78/2;
        black = new c.Shape();
        black.graphics.f("#000").s().dr(0,0,1640,768);
        _this.addChild(black);
        odliczanie();

    };

    function odliczanie(){

        var trzy = new createjs.Bitmap(main.loadedData.getResult('3'));
        _this.addChild(trzy);
        trzy.regX = trzy.image.width/2;
        trzy.regY = trzy.image.height/2;

        trzy.x = ow/2-_this.x;
        trzy.y = (oh/2)-40 - _this.y;

        var dwa = new createjs.Bitmap(main.loadedData.getResult('2'));
        _this.addChild(dwa);
        dwa.regX = dwa.image.width/2;
        dwa.regY = dwa.image.height/2;
        dwa.x = ow/2-_this.x;
        dwa.y =(oh/2)-40- _this.y;

        var jeden = new createjs.Bitmap(main.loadedData.getResult('1'));
        _this.addChild(jeden);
        jeden.regX = jeden.image.width/2;
        jeden.regY = jeden.image.height/2;
        jeden.x =  ow/2-_this.x;
        jeden.y =(oh/2)-_this.y;


        TweenLite.to(black,4.5,{alpha:0,ease:Power4.easeInOut});
        TweenLite.from(trzy,0.5,{scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(dwa,0.5,{delay:1,scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(jeden,0.5,{delay:2,scaleX:0,scaleY:0,overwrite:true});
        //TweenLite.from(go,0.5,{delay:3,scaleX:0,scaleY:0,overwrite:true});

        setTimeout(function(){TweenLite.to(trzy,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},500);
        setTimeout(function(){TweenLite.to(dwa,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},1500);
        setTimeout(function(){TweenLite.to(jeden,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true,onStart:wlaczStart});},2500);
        //   setTimeout(function(){TweenLite.to(go,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true,onStart:wlaczStart});},3500);
        setTimeout(startGame,3500);
        _this.mouseEnabled= false;
    }


    function wlaczStart(){
        playSounds('start');
    }
    function startGame(){
        _this.mouseEnabled= true;
        timer.start();
        //   _this.dispatchEvent({type:'start',bubbles:true,cancelable:true});

    }
    function onClickAnim(e){
        click.x = ((stage.mouseX)/scaleS)-pageContainer.x;
        click.y = (stage.mouseY/scaleS);
        click.gotoAndPlay('play');
    }
    function onClickLamput(e){
        playSounds('correct'+Math.ceil(Math.random()*6));
        onClickAnim();
        TweenLite.to(minihudContainer.getChildAt(founded),.5,{alpha:1});
        founded++;

        e.currentTarget.mouseEnabled= false;

        TweenLite.to(e.currentTarget,1,{scaleX:1.5,scaleY:1.5,alpha:0,onComplete:removeMe,onCompleteParams:[e.currentTarget]})

        if(founded ==pos.length-1){
            timer.stop();
            _this.addChild(black);
            TweenLite.to(black,1,{alpha:1,ease:Power4.easeInOut,onComplete:onLevelComplete,delay:1});
        }
    }

    function removeMe(e){

        _this.removeChild(e);
    }
    level1.destroyAndReset = function(){

        this.removeAllChildren();
        this.dispatchEvent({param: ResetClass, type:'changePage',bubbles:false,cancelable:true});
    };
    level1.pauseGame = function(){


    };
    level1.unpauseGame = function(){

    };
    function onLevelComplete(){



        _this.removeChild(bgd);
        timer.destroy();

        //t.dispatchEvent({type:'end',bubbles:false,cancelable:false});
        _this.dispatchEvent({param: GameOver, type:'changePage',bubbles:false,cancelable:true});

    }

    window.Level2 = c.promote(Level2, "Container");

}());
