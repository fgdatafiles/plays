
(function()
{
    'use strict';
    var t,btt2,btt1,im,b;
    var h1, h2,claw;
    var timeout;
    var HTP=function()
    {

        t = this;
        this.initialize();

    };
    var htp=HTP.prototype=new createjs.Container();
    htp.Container_initialize=htp.initialize;
    htp.initialize=function() {
        this.Container_initialize();

        main.nCurrentLevel=1;
        setTimeout(function(){t.mouseEnabled = true;},1000);

        var bgd=new createjs.Bitmap(main.loadedData.getResult('htp'));
        t.addChild(bgd);
        var cc= new createjs.Container();
        this.addChild(cc);
        cc.x= 29;
        cc.y = 24;
        bgd = new createjs.Bitmap(main.loadedData.getResult('rog'));
        cc.addChild(bgd);
        var t1  = new createjs.Text(strings.pages.htp_page.game_title.text, strings.pages.htp_page.game_title.font,'#fff');
        t1.lineWidth=228;
        t1.x = 114+strings.pages.htp_page.game_title.x;
        t1.y = 143+strings.pages.htp_page.game_title.y;
        t1.textBaseline = "alphabetic";
        t1.textAlign='center';
        cc.addChild(t1);
        var b1 = new  FrameBtt(main.loadedData.getResult('btt'),main.loadedData.getResult('btt_on'),'#ffffff',strings.pages.intro.play_button);
        b1.addEventListener('click',onLevel);

        b1.x = 52;
        b1.y = 410;

        b1.name = 'b1';
        t.addChild(b1);

         t1  = new createjs.Text(strings.pages.htp_page.description.text, strings.pages.htp_page.description.font,'#89338D');
        t1.textBaseline = "alphabetic";
        t1.x = 49+strings.pages.htp_page.description.x;
        t1.y = 260+strings.pages.htp_page.description.y;
        t1.lineHeight = 48;
        this.addChild(t1);
        TweenLite.from(t1,1,{ x:-320,ease:Strong.easeOut,delay:1.5});







    };

    function onLevel(){
        
        t.dispatchEvent({param: Level1, type:'changePage',bubbles:true,cancelable:true});
    }

    function startOver(){
        TweenLite.to(claw,1,{ease:Linear.easeNone,delay:2, x:712,y:196});
        TweenLite.to(claw,.1,{ease:Linear.easeNone,delay:3, scaleX:1.1,scaleY:1.1});
        TweenLite.to(h2,1,{ease:Linear.easeNone,delay:3.1, scaleX:1.5,scaleY:1.5,alpha:0});

        TweenLite.to(claw,.1,{ease:Linear.easeNone,delay:3.1, scaleX:1,scaleY:1,rotation:0});

        TweenLite.to(claw,1,{ease:Linear.easeNone,delay:3.5, x:563,y:182});
        TweenLite.to(claw,.1,{ease:Linear.easeNone,delay:4.5, scaleX:1.1,scaleY:1.1});
        TweenLite.to(claw,.1,{ease:Linear.easeNone,delay:4.6, scaleX:1,scaleY:1});
        TweenLite.to(h1,1,{ease:Linear.easeNone,delay:4.5, scaleX:1.5,scaleY:1.5,alpha:0});

        TweenLite.to(claw,1,{ease:Linear.easeNone,delay:5, x:300,y:200});
        timeout = setTimeout(startOver,7000);
        h1.scaleX = h1.scaleY =h2.scaleX=h2.scaleY=h1.alpha=h2.alpha = 1;
    }
    function wlaczbtt1(){
        btt1.mouseEnabled=true;
    }
   
   

    window.HTP=HTP;

}());
