/**
 * Created with JetBrains WebStorm.
 * User: sfera_michał
 * Date: 22.08.13
 * Time: 13:28
 * To change this template use File | Settings | File Templates.
 */
'use strict';
(function(){
    var t;
    var secStart=0;
    var licznik=0;

    var ti;

    var bgd;
    var pauseTime;
    var resumeTime;
    var timeOffset;
    var roznicaWczasie;
    var GAMETIME=30;

    function Timer2()
    {

        this.Container_constructor();
        t = this;
        this.initialize();
    };

    var timer2 = createjs.extend(Timer2, createjs.Container);
    timer2.initialize=function() {

        secStart = 0;
        licznik = 0;
        timeOffset=0;
        t.bStop = false;

        bgd = new createjs.Bitmap(main.loadedData.getResult('hud_game2'));
        t.addChild(bgd);
        var icon = new c.Bitmap(main.loadedData.getResult('o'+main.selectedItem));
        icon.regX = icon.image.width/2;
        icon.regY = icon.image.height/2;
        icon.x = 235;
        icon.y = 52;
        t.addChild(icon);
        ti = new createjs.Text('0:30', '36px FredBold', '#65e9f2');
        ti.lineWidth = 72;
        ti.textAlign = 'center';
        ti.x =ti.lineWidth/2+89;
        ti.y = 37;
        t.addChild(ti);


        timer2Points = new createjs.Text('0', '36px FredBold', '#FDEB5D');
        timer2Points.lineWidth = 72;
        timer2Points.textAlign = 'center';
        timer2Points.x =timer2Points.lineWidth/2+271;
        timer2Points.y = 37;
        t.addChild(timer2Points);

    };


    timer2.start = function(){
        setTimer2();
    };

    function setTimer2()
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

    timer2.clear = function(){

    };
    timer2.update = function(){
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

        if(val<=0){
            level2Points =parseInt();
            t.removeEventListener('tick', t.update);
            t.dispatchEvent({param: val, type:'game_over',bubbles:true,cancelable:true});
        }

    };

    timer2.pause=function(){

        pauseTime =getTime();
        t.removeEventListener('tick', t.update);
    };

    timer2.unpause=function(){
        resumeTime =getTime();
        roznicaWczasie = pauseTime - resumeTime;
        timeOffset +=roznicaWczasie;
        t.addEventListener('tick', t.update);
    }
    timer2.destroy = function(){
        t.removeEventListener('tick', t.update);

        t.removeAllChildren();

    };
    window.Timer2 = createjs.promote(Timer2, "Container");

}());
