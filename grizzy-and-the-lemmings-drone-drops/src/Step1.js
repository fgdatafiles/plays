
(function()
{
    'use strict';
    var t,btt2,btt1,im,b;

    var Step1=function()
    {

        this.bgd;
        this.circ;
        this.logo;
        this.heroes;
        this.cc;
        this.up;
        this.down;
        this.btn;
        this.maska;
        this.bg;

        t = this;
        this.initialize();

    };
    var p=Step1.prototype=new createjs.Container();
    p.Container_initialize=p.initialize;
    p.initialize=function() {
        this.Container_initialize();


        setTimeout(function(){t.mouseEnabled = true;},1000);
        main.answers = [];
        main.nCurrentLevel=1;
        main.points1=0;
        main.points2=0;
        main.points3=0;
        var bgd=new createjs.Bitmap(main.loadedData.getResult('intro'));
        t.addChild(bgd);
        


        var logo_game=new createjs.Bitmap(main.loadedData.getResult('logo_game'));
        logo_game.x = 62;
        logo_game.y = -287;
        t.addChild(logo_game);
        TweenLite.to(logo_game,1,{delay:1,y:24});

        btt1 = new  FrameBtt(main.loadedData.getResult('btt'),main.loadedData.getResult('btt_on'),'#ffffff',strings.pages.intro.play_button,HTP);

        t.addChild(btt1);
        btt1.cursor ='pointer';
        btt1.x=33;
        btt1.y=273;
        btt1.mouseEnabled=true;
        btt1.stateClicked = true;
        TweenLite.from(btt1,1,{ x:33,ease:Strong.easeOut});


        var c= new createjs.Container();
        c.x= 33;
        c.y =159;
        var b = new createjs.Bitmap(main.loadedData.getResult('belka'));
        c.addChild(b)
       var t1  = new createjs.Text(strings.pages.intro.game_title.text, strings.pages.intro.game_title.font,'#f5c38f');
        t1.lineWidth = 314;
        t1.textBaseline = "alphabetic";
        t1.textAlign = 'center';
        t1.x = 157+strings.pages.intro.game_title.x;
        t1.y = 46+strings.pages.intro.game_title.y;
        
        c.addChild(t1);
        this.addChild(c);
        TweenLite.from(c,1,{ y:-100,ease:Strong.easeOut,delay:.8});






	btt1.addEventListener('click',onMusic);
    };
    function onMusic(){
        if(main.sound){
            var music = document.getElementById("music");
            music.play();
        }
    }
   
    function wlaczbtt1(){
        btt1.mouseEnabled=true;
    }
   
   

    window.Step1=Step1;

}());
