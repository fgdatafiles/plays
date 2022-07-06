
'use strict';
(function(){
    var t;
    var secStart=0;

    var pauseTime;
    var resumeTime;

    var skate_icon,tacos_icon,time_icon;
    var energy_bar;

    var txt;
    var time_txt;
    var point_txt;
    var licznik=0;
    var txt2;
    var startTime;
    var timeOffset;
    var roznicaWczasie;
    function Hud ()
    {

        this.Container_constructor();
        this.initialize();
        t = this;
        this.energy_bar;
    };
    var hud = createjs.extend(Hud, createjs.Container);
    hud.initialize=function() {


        timeOffset = 0;
        t = this;
        startTime=activeConfig.nGameTime;
        licznik = 0;
        secStart = 0;

       var bgd=  new c.Bitmap(main.loadedData.getResult('hud_bgd'));
        t.addChild(bgd);

        skate_icon =  new c.Bitmap(main.loadedData.getResult('skate_icon_hud'));
        t.addChild(skate_icon);
        skate_icon.x = 9;
        skate_icon.y = 58;

        time_icon =  new c.Bitmap(main.loadedData.getResult('time_icon_hud'));
        t.addChild(time_icon);
        time_icon.x = 19;
        time_icon.y = 21;


        tacos_icon =  new c.Bitmap(main.loadedData.getResult('tacos_icon_hud'));
        t.addChild(tacos_icon);
        tacos_icon.x = 163;
        tacos_icon.y = 26;

        this.energy_bar = new c.Shape(new c.Graphics().beginFill('#CD3F45').drawRect(0,0,262,15).endFill());
        t.addChild(this.energy_bar);
        this.energy_bar.x = 70;
        this.energy_bar.y = 69;

        this.energy_bar.scaleX = 1;

        time_txt = new c.Text('60:00', '33px lubalin', '#FF5137');

        time_txt.lineWidth = 64;
        time_txt.textAlign = 'center';
        time_txt.x = 61+32;
        time_txt.y = 24;

        t.addChild(time_txt);

        point_txt = new c.Text('0', '33px lubalin', '#F79B47');

        point_txt.lineWidth = 90;
        point_txt.textAlign = 'center';
        point_txt.x = 227+46;
        point_txt.y = 24;

        t.addChild(point_txt);



    setTimeout(odliczanie,100);
    };

    hud.addPoints = function(){
        var val = parseInt(point_txt.text)
        val +=100;
        point_txt.text = val;
    }
     hud.changeEnergyBar = function(n){

        var delta =Math.max(Math.min((this.energy_bar.scaleX+n),1),0);
         TweenLite.to(this.energy_bar,.5,{scaleX:delta});
        if(delta==0){


            activeConfig.level_success=  false;
            if(nActualLevel==1){
                level1Points =point_txt.text;
            }else{
                level2Points =point_txt.text;

            }
            var val  = eval(('level'+nActualLevel+'Points'));
            val  = point_txt.text;
            console.log(level1Points)
            console.log(level2Points);
            t.removeEventListener('tick', t.update);
            t.dispatchEvent({type:'life_end',bubbles:false,cancelable:true});
        }

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
        t.dispatchEvent({type:'start',bubbles:false,cancelable:true});

    }

     hud.start = function(){
        setHud();
    };

    hud.addTime = function(){
      startTime+=5000;
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
        var dt=getTime() - t.startTime+timeOffset;
        dt = startTime-dt;
        if(dt<=0){
            backBtt.visible= true;

            activeConfig.level_success=  true;
            if(nActualLevel==1){
                level1Points =point_txt.text;
            }else{
                level2Points =point_txt.text;

            }

            t.dispatchEvent({type:'end',bubbles:true,cancelable:true});
            t.removeEventListener('tick', t.update);
            time_txt.text = '00:00';
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
        //var elapsedMin = Math.floor(dt / 60000);
        //dt = dt - (elapsedMin * 60000);
      var   elapsedSek = Math.floor(dt / 1000);
        dt = dt - (elapsedSek * 1000);
       var elapsedMiliSek = Math.floor(dt / 1);
        elapsedGodz < 10 ? godziny1 = '0' + elapsedGodz.toString() : godziny1 = elapsedGodz.toString();
     //   elapsedMin < 10 ? minuty1 = '0' + elapsedMin.toString() : minuty1 = elapsedMin.toString();
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
        t.removeEventListener('tick', t.update);

        t.removeAllChildren();

    };

    window.Hud = createjs.promote(Hud, "Container");
}());
