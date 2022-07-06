
'use strict';
(function(){
    var t;
    var secStart=0;

    var found = 0;
    var txt;
    var text1;
    var licznik=0;
    var txt2;
    var Timer=function()
    {
        this.initialize();
    };
    var timer=Timer.prototype=new createjs.Container();
    timer.initialize=function() {


        t = this;
        txt;
        licznik = 0;
        secStart = 0;

        t.bStop = false;

        txt = new createjs.Text(strings.pages.game.timer.text, strings.pages.game.timer.font, '#ffffff');
        txt.textBaseline = "alphabetic";
        txt.lineWidth = 117;
        txt.textAlign = 'center';
        txt.x =strings.pages.game.timer.x;
        txt.y =strings.pages.game.timer.y+28;

        t.addChild(txt);





        startGame();
//    odliczanie();

    };

    function odliczanie(){
        
        var trzy = new createjs.Bitmap(main.loadedData.getResult('3'));
        t.addChild(trzy);
        trzy.regX = trzy.image.width/2;
        trzy.regY = trzy.image.height/2;
        trzy.x = main.ow/2;
        trzy.y = main.oh/2;

        var dwa = new createjs.Bitmap(main.loadedData.getResult('2'));
        t.addChild(dwa);
        dwa.regX = dwa.image.width/2;
        dwa.regY = dwa.image.height/2;
        dwa.x = main.ow/2;
        dwa.y =main.oh/2;

        var jeden = new createjs.Bitmap(main.loadedData.getResult('1'));
        t.addChild(jeden);
        jeden.regX = jeden.image.width/2;
        jeden.regY = jeden.image.height/2;
        jeden.x =  main.ow/2;
        jeden.y = main.oh/2;

        var go = new createjs.Bitmap(main.loadedData.getResult('go'));
        t.addChild(go);
        go.regX = go.image.width/2;
        go.regY = go.image.height/2;
        go.x =  main.ow/2;
        go.y =main.oh/2;


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
    function startGame(){

        t.start();
       t.dispatchEvent({type:'start',bubbles:true,cancelable:true});

    }
  
       timer.start = function(){
        setTimer();
    };

    timer.update=function()
    {
        var dt=getTime() - t.startTime;
        dt = 30000-dt;
        if(dt<=0){
            main.text = strings.pages.game_over.title1;
            t.dispatchEvent({type:'end',bubbles:true,cancelable:true});
            return;

        }
            var godziny1;
        var minuty1;
        var sekundy1;
        var milisekundy1;
            var min=Math.floor(Math.floor(dt/1000)/60);
            var sec=Math.floor(dt/1000)-min*60;
            var mili=Math.floor(dt/1000)-min*60;
                if (sec.toString().length < 2) {
                    sec = '0' + sec;
                }
        var elapsedGodz = Math.floor(dt / 3600000);
        dt = dt - (elapsedGodz * 3600000);
        var elapsedMin = Math.floor(dt / 60000);
        dt = dt - (elapsedMin * 60000);
      var   elapsedSek = Math.floor(dt / 1000);
        dt = dt - (elapsedSek * 1000);
       var elapsedMiliSek = Math.floor(dt / 1);
        elapsedGodz < 10 ? godziny1 = '0' + elapsedGodz.toString() : godziny1 = elapsedGodz.toString();
        elapsedMin < 10 ? minuty1 = '0' + elapsedMin.toString() : minuty1 = elapsedMin.toString();
        elapsedSek < 10 ? sekundy1 = '0' + elapsedSek.toString() : sekundy1 = elapsedSek.toString();
        if (elapsedMiliSek < 100) {
            if (elapsedMiliSek < 10) {
                milisekundy1 = '00' + elapsedMiliSek.toString();
            } else {
                milisekundy1 ='0' +elapsedMiliSek.toString();
            }
        } else {
            milisekundy1 = elapsedMiliSek.toString();
        }
        milisekundy1 = milisekundy1.substr(0,2);
        txt.text =minuty1 + ':' + sekundy1 + ':' + milisekundy1;

    };
    function setTimer()
    {
        t.sec=secStart;
        t.startTime=getTime();
        t.addEventListener('tick', t.update);
        t.update();
    }
    function getTime(){
        var day = new Date();
        return day.getTime();
    }

    timer.destroy = function(){
        

        t.removeEventListener('tick', t.update);

        t.removeAllChildren();

    };

    window.Timer=Timer;
}());
