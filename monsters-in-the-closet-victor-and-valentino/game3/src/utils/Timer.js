
'use strict';
(function(){
    var t;
    var secStart=0;
    var licznik=0;
    var enTween;
    var ti;
    var pauseTime;
    var resumeTime;
    var timeOffset;
    var roznicaWczasie;

    var GAMETIME=30;
    function Timer()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    };


    var timer = createjs.extend(Timer, createjs.Container);
    timer.initialize=function() {

        timeOffset = 0;
        secStart = 0;
        licznik = 0;
        t.bStop = false;
        var bgd = new createjs.Bitmap(main.loadedData.getResult('energy_bgd'));
        t.addChild(bgd);
        bgd.y = 110;

        bgd = new createjs.Bitmap(main.loadedData.getResult('hud_game1'));
        t.addChild(bgd);
        this.shape = new c.Shape();
        this.shape.graphics.f("#FF0000").s().p("AKlBZQgZAAiFgQIm/gDQjngMjoAPQi2gGhTATQhigBgZhSQgDgxBQgQQA6gLCIADQE9gbGiANQDQAZDpgXQCNgIglCUQgeAfg/AAIgCAAg");
        this.shape.setTransform(285, 52);

        this.addChild(this.shape);
        this.shape.alpha = 0.7;

        this.maska = new c.Shape();
        this.maska.graphics.f("#000").s().dr(0, 0, 158, 18);
        this.maska.setTransform(285 - 158 / 2, 52 - 9);
        this.addChild(this.maska);
        this.shape.mask = this.maska;
        this.maska.visible = false;
        this.maska.scaleX = 0;

        ti = new createjs.Text('0:'+GAMETIME, '36px FredBold', '#65e9f2');
        ti.lineWidth = 72;
        ti.textAlign = 'center';
        ti.x = ti.lineWidth / 2 + 89;
        ti.y = 37;
        t.addChild(ti);


    }

    timer.start = function(){
        setTimer();
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

    timer.update = function(){
        var dt=getTime() - t.startTime+timeOffset;
        licznik = dt;
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

        //var elapsedMiliSek = Math.floor(dt / 1);
        elapsedGodz < 10 ? godziny1 = '0' + elapsedGodz.toString() : godziny1 = elapsedGodz.toString();
        elapsedMin < 10 ? minuty1 = '0' + elapsedMin.toString() : minuty1 = elapsedMin.toString();
        elapsedSek < 10 ? sekundy1 = '0' + elapsedSek.toString() : sekundy1 = elapsedSek.toString();
        var val = GAMETIME-sekundy1;
        var zz =val;
        if(zz.toString().length<2){
        ti.text ="0:0"+val;
        }else{
            ti.text ='0:'+val;
        }


        enTween = TweenLite.to(t.maska,1,{scaleX:(10000-main.energy)/10000});

        val = Math.max(val,0);


        if(t.maska.scaleX>=1){
            playSounds('piniata_bang');
            level1Points=100+(10*val);
            t.removeEventListener('tick', t.update);
            t.dispatchEvent({param: val, type:'game_over',bubbles:true,cancelable:true});
        }else if(val<=0){
            TweenMax.killTweensOf(t.maska);
            level1Points=100+(10*val);
            t.removeEventListener('tick', t.update);
            t.dispatchEvent({param: val, type:'time_over',bubbles:true,cancelable:true});
        }

    };

    timer.pause=function(){

        pauseTime =getTime();
        t.removeEventListener('tick', t.update);
    };

    timer.unpause=function(){
        resumeTime =getTime();
        roznicaWczasie = pauseTime - resumeTime;
        timeOffset +=roznicaWczasie;
        t.addEventListener('tick', t.update);
    }
    timer.clear = function(){

    };

    timer.destroy = function(){
        t.removeEventListener('tick', t.update);

        t.removeAllChildren();

    };

    window.Timer = createjs.promote(Timer, "Container");
}());
