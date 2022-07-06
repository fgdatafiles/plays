
'use strict';
(function(){
    var t;
    var secStart=0;

    var pauseTime;
    var resumeTime;
    var dt;
    var bgd;
    var time_txt;
    var point_txt;
    var points_number;
    var licznik=0;
    var txt2;
    var startTime;
    var timeOffset;
    var itemToFound;
    var roznicaWczasie;
    var founded;
    function Hud(n)
    {
        this.Container_constructor();
        t = this;
        this.initialize(n);
    };
    var hud = c.extend(Hud, c.Container);

    hud.initialize=function(n) {
        itemToFound  =n;
        founded = 0;
        timeOffset = 0;
        points_number = 0;
        startTime=60000;
        licznik = 0;
        secStart = 0;


       bgd=  new c.Bitmap(main.loadedData.getResult('hud_bgd'));
        t.addChild(bgd);




        time_txt = new c.Text('0:00', '33px FredBold', '#65E9F1');

        time_txt.lineWidth = 64;
        time_txt.textAlign = 'center';
        time_txt.x = 93+32;
        time_txt.y = 37;

        t.addChild(time_txt);

        point_txt = new c.Text('0/'+itemToFound, '36px FredBold', '#F4DB63');

        point_txt.lineWidth = 90;
        point_txt.textAlign = 'center';
        point_txt.x = 267+46;
        point_txt.y = 37;

        t.addChild(point_txt);



    setTimeout(odliczanie,100);
    };

function odliczanie(){

    var trzy = new createjs.Bitmap(main.loadedData.getResult('3'));
    t.addChild(trzy);
    trzy.regX = trzy.image.width/2;
    trzy.regY = trzy.image.height/2;

    trzy.x = ow/2-t.x;
    trzy.y = (oh/2)-40 - t.y;
    
    var dwa = new createjs.Bitmap(main.loadedData.getResult('2'));
    t.addChild(dwa);
    dwa.regX = dwa.image.width/2;
    dwa.regY = dwa.image.height/2;
    dwa.x = ow/2-t.x;
  dwa.y =(oh/2)-40- t.y;

    var jeden = new createjs.Bitmap(main.loadedData.getResult('1'));
    t.addChild(jeden);
    jeden.regX = jeden.image.width/2;
    jeden.regY = jeden.image.height/2;
    jeden.x =  ow/2-t.x;
    jeden.y =(oh/2)- t.y;


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
        backBtt.visible= false;
        t.start();
        t.parent.mouseEnabled= true;
        t.dispatchEvent({type:'start',bubbles:true,cancelable:true});

    }

     hud.start = function(){
        setHud();
    };

    hud.pause = function(){
        pauseTime =getTime();
        t.removeEventListener('tick', t.update);
    };


    hud.unpause = function(){


        console.log('unapuseGame');
        resumeTime =getTime();
        roznicaWczasie = pauseTime - resumeTime;
        timeOffset +=roznicaWczasie;

        t.addEventListener('tick', t.update);
    }



    hud.update=function()
    {
         dt=getTime() - t.startTime+timeOffset;
        dt = startTime-dt;


        if(dt<=0){
            success = false;
            backBtt.visible= true;
            t.dispatchEvent({type:'end',bubbles:false,cancelable:true});
            t.removeEventListener('tick', t.update);
            time_txt.text = '0:00';
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
        time_txt.text = sekundy1 + ':' + milisekundy1;

    };

    hud.addFound = function(){

        founded++;
        point_txt.text = founded+'/'+itemToFound;

        console.log( founded+'/'+itemToFound);
        if(founded ==itemToFound){
            t.removeEventListener('tick', t.update);
            if(nActualLevel==1){
            level1msLeft=dt;
                timeleftl1 = time_txt.text;
            }else{
                level2msLeft=dt;
                timeleftl2 = time_txt.text;
            }
            success = true;
            backBtt.visible= true;
            t.dispatchEvent({type:'founded',bubbles:false,cancelable:true});
        }

    };
    function setHud()
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

    hud.destroy = function(){
        t.removeAllChildren();
        t.removeEventListener('tick', t.update);


    };
    window.Hud = c.promote(Hud, "Container");
}());
