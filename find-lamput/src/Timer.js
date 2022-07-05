
'use strict';
(function(){
    var t;
    var secStart=0;

    var pauseTime;
    var resumeTime;
    var dt;
    var bgd;

    var point_txt;
    var points_number;
    var licznik=0;
    var txt2;
    var startTime;
    var timeOffset;
    var roznicaWczasie;
    function Timer()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    };
    var timer = c.extend(Timer, c.Container);
    timer.time_txt;
    timer.percentage;
    timer.points;
    timer.timerTime = 30000;
    timer.percentage = 100;
    timer.initialize=function() {

        timeOffset = 0;
        points_number = 0;
        startTime=30000;
        licznik = 0;
        secStart = 0;

        this.time_txt = new c.Text('0:00:00', '27px lamput-boldregular', '#fff');

        this.time_txt.lineWidth = 64;
        this.time_txt.textAlign = 'center';
        this.time_txt.x = 1027;
        this.time_txt.y = 21;

        t.addChild(this.time_txt);
    };


    function startGame(){


    }

    timer.start = function(){
        t.sec=secStart;
        t.startTime=getTime();
        t.addEventListener('tick', t.update);
        t.update();
        t.dispatchEvent({type:'start',bubbles:true,cancelable:true});
    };
    timer.stop = function(){
            console.log(dt);
            if(nCurrentLevel==1){
                level1Points =Math.max(30000-this.points,0);
            }else if(nCurrentLevel==2){
                level2Points =Math.max(30000-this.points,0);
            }

            t.removeEventListener('tick', t.update);
            t.dispatchEvent({type:'end',bubbles:false,cancelable:true});
            //time_txt.text = '00:00';


    }

    timer.pause = function(){
        pauseTime =getTime();
        t.removeEventListener('tick', t.update);
    };


    timer.unpause = function(){

        resumeTime =getTime();
        roznicaWczasie = pauseTime - resumeTime;
        timeOffset +=roznicaWczasie;

        t.addEventListener('tick', t.update);
    }


    timer.addPoints = function(val){
        points_number =Math.max((points_number+val),0);
        point_txt.text = points_number;
    }
    timer.update=function()
    {
         dt=getTime() - t.startTime+timeOffset;
         timer.points = dt;
    //    dt = startTime-dt;

        t.percentage = dt/t.timerTime;

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
        t.time_txt.text = minuty1+':'+sekundy1 + ':' + milisekundy1;

    };

    function getTime(){
        var day = new Date();
        return day.getTime();
    }

    timer.destroy = function(){
        t.removeAllChildren();
        t.removeEventListener('tick', t.update);


    };
    window.Timer = c.promote(Timer, "Container");
}());
