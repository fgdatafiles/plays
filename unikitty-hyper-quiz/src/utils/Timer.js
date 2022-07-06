(function(){

    var secStart=0;
    var found = 0;
    var txt;
    var text1;
    var licznik=0;

    
    function Timer() {
        this.Container_constructor();

        this.init();
    }

    var timer = c.extend(Timer,c.Container);
    timer.init = function(){
        t = this;

        licznik = 0;
        secStart = 0;
            console.log('init Timer');
        t.bStop = false;
        var bgd =new c.Bitmap(main.loadedData.getResult('time_bgd'));
        t.addChild(bgd);
        txt = new c.Text(app.global.timer.text, app.global.timer.font, '#ED4B9B');
        txt.lineWidth = 57;
        txt.textBaseline = 'alphabetic';
        txt.textAlign = 'center';
        txt.x =35+ app.global.timer.x+txt.lineWidth/2;
        var l = txt.font;
        l =l.substr(0,l.indexOf('px'));
        txt.y =bgd.image.height/2+app.global.timer.y+getoffset(app.global.timer.font)-txt.getMeasuredHeight()/2-(l/10);

        t.addChild(txt);
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

    timer.destroy = function(){
        console.log('destroy2');
        t.dispatchEvent({param: licznik, time:txt.text.toString(),type:'end',bubbles:true,cancelable:true});
        t.removeEventListener('tick', t.update);
        t.removeAllChildren();

    };
    timer.update=function()
    {
        console.log('t');
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
        var elapsedMiliSek = Math.floor(dt);
        elapsedGodz < 10 ? godziny1 = '0' + elapsedGodz.toString() : godziny1 = elapsedGodz.toString();
        minuty1 = elapsedMin.toString();
        //elapsedMin < 10 ? minuty1 = '0' + elapsedMin.toString() : minuty1 = elapsedMin.toString();
        elapsedSek < 10 ? sekundy1 = '0' + elapsedSek.toString() : sekundy1 = elapsedSek.toString();


        txt.text =minuty1 + ':' + sekundy1;

    };

    window.Timer = c.promote(Timer, "Container");
}());




