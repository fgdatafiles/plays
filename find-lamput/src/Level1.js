
(function()
{
    'use strict';
    var _this;
    var timer;
    var bgd,black;
    var pos =[
        {},{x:463,y:350},{x:479,y:231 },{x:692,y:203},{x:704,y:363},{x:703,y:587},{x:840,y:471},{x:949,y:302},{x:991,y:105},{x:1139,y:281},{x:1200,y:481}
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
    function Level1()
    {
        this.Container_constructor();
        _this = this;
        this.initialize();
    }
    var level1 = c.extend(Level1, c.Container);
    level1.initialize=function() {

        nCurrentLevel = 1;
        level1Points=0;
        level2Points=0;
        founded = 0;
        console.log('lev1');
        bgd = new c.Bitmap(main.loadedData.getResult('level1'));
        _this.addChild(bgd);
        var hudbgd = new c.Bitmap(main.loadedData.getResult('hud1'));
        _this.addChild(hudbgd);
        hudbgd.x=526;
        hudbgd.y=7;

         minihudContainer=  new c.Container();
        _this.addChild(minihudContainer)

         timer = new Timer();
        _this.addChild(timer);

        for(var i=1;i<11;i++){


            var minihud =  new c.Bitmap(main.loadedData.getResult('hud_mini1'));
            minihud.x = 538+i*22.7 - 23;
            minihud.y =21
            minihud.alpha= 0;
            minihudContainer.addChild(minihud);
            var item = new c.Bitmap(main.loadedData.getResult('1_'+i));
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
        _this.mouseEnabled= false;
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
        onClickAnim();
        TweenLite.to(minihudContainer.getChildAt(founded),.5,{alpha:1});
        founded++;
        playSounds('correct'+Math.ceil(Math.random()*6));
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
        _this.dispatchEvent({param: LevelComplete, type:'changePage',bubbles:false,cancelable:true});

}

    window.Level1 = c.promote(Level1, "Container");

}());
