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
    var found = 0;
    var txt;
    var ti;
    var en;
    var txt2;
    var Timer2=function()
    {
        this.initialize();
    };


    var timer2=Timer2.prototype=new createjs.Container();
    timer2.initialize=function() {
        t = this;
        secStart = 0;
        licznik = 0;
        t.bStop = false;
        var bgd = new createjs.Bitmap(main.loadedData.getResult('energy_bgd'));
        t.addChild(bgd);

        var b = new createjs.Shape();
        b.graphics.beginFill('#FFEB38').drawRect(12, 40, 84, 110);
        this.addChildAt(b,0);


        var b1 =  new createjs.Bitmap(main.loadedData.getResult('energy_bar'));
      b1.x = 12;
      b1.y = 40;
        this.addChildAt(b1,1);

        en = new createjs.Shape();
        en.graphics.beginFill('#ff0000').drawRect(0, 0, 84, 110);
        en.y = 40+110;
        en.x = 12;
        en.regY =110;
        en.scaleY =0;

        t.addChild(en);
        b1.mask =en;
        en.alpha=0;


        txt = new createjs.Text(strings.pages.level3.timer.text, strings.pages.level3.timer.font,'#9D361F');
        txt.textBaseline = "alphabetic";
        txt.lineWidth = 110;
        txt.textAlign = 'center';
        txt.x = 55+strings.pages.level3.timer.x;
        txt.y =230+strings.pages.level3.timer.y;
        t.addChild(txt);




    timer2.update = timer2.update1;


    };


    timer2.start = function(){
        setTimer();
    };

    timer2.update=function()
    {

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
    timer2.addAction2 = function(){
        t.removeChildAt(0);
        t.removeChild(txt);
        timer2.update = timer2.update2;
    };
    timer2.update1 = function(){
        var dt=getTime() - t.startTime;
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
        var val = 30-sekundy1;
        if(val<10){
            val='0'+val;
        }
        txt.text ="0:"+val;


        TweenLite.to(en,1,{scaleY:(10000-main.energy)/10000});
        if(en.scaleY>=1){
            main.text = strings.pages.game_over.title2}else{
            main.text = strings.pages.game_over.title1;

        }

        if(txt.text=='0:00'||en.scaleY>=1){
            main.points3+=(100*val);
            t.removeEventListener('tick', t.update);

        }
        if(txt.text=='0:00')t.dispatchEvent({param: val, type:'game_over2',bubbles:true,cancelable:true});
        if(en.scaleY>=1)t.dispatchEvent({param: val, type:'game_over',bubbles:true,cancelable:true});

    };
    timer2.clear = function(){

    };
    timer2.update2 = function(){
        var dt=getTime() - t.startTime;
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
        var val = 30-sekundy1;
        txt.text =val;
        if(val==0){
            t.removeEventListener('tick', t.update);
            t.dispatchEvent({param: val, type:'game_over',bubbles:true,cancelable:true});
        }

    };
    timer2.destroy = function(){
        t.removeEventListener('tick', t.update);

        t.removeAllChildren();

    };

    window.Timer2=Timer2;
}());
