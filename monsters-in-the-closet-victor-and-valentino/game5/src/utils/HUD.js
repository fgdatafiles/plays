var lives;
var points_number;
var customers_happy;
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

    var licznik=0;
    var txt2;
    var startTime;
    var timeOffset;
    var itemToFound;
    var roznicaWczasie;

    var icon;
    function Hud(n)
    {
        this.Container_constructor();
        t = this;
        this.initialize(n);
    };
    var hud = c.extend(Hud, c.Container);

    hud.initialize=function(n) {
        customers_happy=0;
        points_number = 0;
        lives = 3;


       bgd=  new c.Bitmap(main.loadedData.getResult('hud_bgd'));
        t.addChild(bgd);






        point_txt = new c.Text('0', '36px FredBold', '#F4DB63');

        point_txt.lineWidth = 90;
        point_txt.textAlign = 'center';
        point_txt.x = 277;
        point_txt.y = 41;

        t.addChild(point_txt);

        for (var i=0;i<3;i++){
            icon = new c.Bitmap(main.loadedData.getResult('life_icon'));
            icon.name='l'+i;
            icon.y= 41;
            icon.x = 29+(i*47);
            icon.alpha =1;
            t.addChild(icon);
        }



    setTimeout(odliczanie,3000);
    };

    hud.addPoints= function(){
        points_number+=100;
        point_txt.text=points_number.toString();
    };
    hud.removeLife = function(){

        if(lives>0){
            lives--;
            t.getChildByName('l'+lives).alpha=0;

            if(lives==0){
                t.dispatchEvent({type:'gameover',bubbles:true,cancelable:true});
            }
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


    }


    hud.destroy = function(){
        t.removeAllChildren();
        t.removeAllEventListeners();

    };
    window.Hud = c.promote(Hud, "Container");
}());
