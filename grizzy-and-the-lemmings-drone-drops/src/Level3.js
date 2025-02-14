
(function()
{
    'use strict';
    var t;
    var timer;

    var piniata;

    var Level3=function()
    {
        this.initialize();
    };
    var level3=Level3.prototype=new createjs.Container();
    level3.Container_initialize=level3.initialize;
    level3.initialize=function()
    {
        main.nCurrentLevel=3;
        this.Container_initialize();
        t= this;

        var kalka=  new createjs.Bitmap(main.loadedData.getResult('kalka'))
        this.addChild(kalka);
        kalka.alpha=0;
        kalka=  new createjs.Bitmap(main.loadedData.getResult('level3'));
        this.addChild(kalka);


        document.getElementById('stageCanvas').style.cursor ='none';
        timer = new Timer2();
        timer.x = 45;
        timer.y = 51;
        t.addChild(timer);

        main.energy =10000;

        piniata = new Piniata();
        this.addChild(piniata);
        piniata.addEventListener('game_over',onGameOver);
        piniata.start();
        timer.start();
        timer.addEventListener('game_over',onGameOver2);
        timer.addEventListener('game_over2',onGameOver);
    };
    function odliczanie(){
        var trzy = new createjs.Bitmap(main.loadedData.getResult('3'));
        t.addChild(trzy);
        trzy.regX = trzy.image.width/2;
        trzy.regY = trzy.image.height/2;
        trzy.x = main.nWidth/2;
        trzy.y = main.nHeight/2;

        var dwa = new createjs.Bitmap(main.loadedData.getResult('2'));
        t.addChild(dwa);
        dwa.regX = dwa.image.width/2;
        dwa.regY = dwa.image.height/2;
        dwa.x = main.nWidth/2;
        dwa.y = main.nHeight/2;

        var jeden = new createjs.Bitmap(main.loadedData.getResult('1'));
        t.addChild(jeden);
        jeden.regX = jeden.image.width/2;
        jeden.regY = jeden.image.height/2;
        jeden.x = main.nWidth/2;
        jeden.y = main.nHeight/2;

        var go = new createjs.Bitmap(main.loadedData.getResult('go'));
        t.addChild(go);
        go.regX = go.image.width/2;
        go.regY = go.image.height/2;
        go.x = main.nWidth/2;
        go.y = main.nHeight/2;


        TweenLite.from(trzy,0.5,{scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(dwa,0.5,{delay:1,scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(jeden,0.5,{delay:2,scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(go,0.5,{delay:3,scaleX:0,scaleY:0,overwrite:true});

        setTimeout(function(){TweenLite.to(trzy,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},500);
        setTimeout(function(){TweenLite.to(dwa,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},1500);
        setTimeout(function(){TweenLite.to(jeden,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},2500);
        setTimeout(function(){TweenLite.to(go,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},3500);
        setTimeout(startGame,4500);

    }

    function onGameOver2(e){

        if(main.sound){
            createjs.Sound.play('s4');
        }
        piniata.gameOver();
        setTimeout(dis,1900);

    }
    function onGameOver(e){

        //piniata.gameOver();
        setTimeout(dis,100);

    }
    function dis(){
        t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
    }
    window.Level3=Level3;
}());
