
(function()
{
    'use strict';
    var t,btt2,btt2,im,b;

    var NextLevel=function()
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
    var p=NextLevel.prototype=new createjs.Container();
    p.Container_initialize=p.initialize;
    p.initialize=function() {
        this.Container_initialize();
        if(main.sound){
            createjs.Sound.play('applause');
        }
        
        setTimeout(function(){t.mouseEnabled = true;},1000);



        var bgd=new createjs.Bitmap(main.loadedData.getResult('next_bgd'));
        t.addChild(bgd);

        var gfx=new createjs.Bitmap(main.loadedData.getResult('next'));
        t.addChild(gfx);

        gfx.x = 643;
        gfx.y = 204;
        TweenLite.from(gfx,1,{ x:1200,delay:1,ease:Strong.easeOut});


        var cc= new createjs.Container();
        this.addChild(cc);
        cc.x= 29;
        cc.y = 24;
        bgd = new createjs.Bitmap(main.loadedData.getResult('rog'));
        cc.addChild(bgd);
         t1  = new createjs.Text(strings.pages.htp_page.game_title.text, strings.pages.htp_page.game_title.font,'#fff');
        t1.lineWidth=228;
        t1.textBaseline = "alphabetic";
        t1.x = 114+strings.pages.htp_page.game_title.x;
        t1.y = 143+strings.pages.htp_page.game_title.y;
        t1.textAlign='center';
        cc.addChild(t1);


        var t1  = new createjs.Text(strings.pages.level_complete.title.text, strings.pages.level_complete.title.font,'#000');
        t1.lineWidth = 944;
        t1.lineHeight=40;
        t1.textAlign='center';
        t1.textBaseline = "alphabetic";
        t1.x = 944/2+strings.pages.level_complete.title.x;
        t1.y = 108+strings.pages.level_complete.title.y;
        this.addChild(t1);
        main.points = main.points1+main.points2+main.points3;
        t1  = new createjs.Text(strings.pages.level_complete.your_points.text+' '+main.points, strings.pages.level_complete.your_points.font,'#EB008B');
        t1.lineWidth = 944;
        t1.textAlign='center';
        t1.x = 944/2+strings.pages.level_complete.your_points.x;
        t1.y = 225+strings.pages.level_complete.your_points.y;
        t1.textBaseline = "alphabetic";
        this.addChild(t1);


        btt2 = new  FrameBtt(main.loadedData.getResult('btt_small'),main.loadedData.getResult('btt_small_on'),'#ffffff',strings.pages.level_complete.menu_button,Step1);
        t.addChild(btt2);
        btt2.cursor ='pointer';
        btt2.x=350;
        btt2.y=322;
        btt2.mouseEnabled=true;
        btt2.stateClicked = true;

        btt2 = new  FrameBtt(main.loadedData.getResult('btt_small'),main.loadedData.getResult('btt_small_on'),'#ffffff',strings.pages.level_complete.next_button);
        t.addChild(btt2);
        btt2.addEventListener('click',onNext);
        btt2.cursor ='pointer';
        btt2.x=350;
        btt2.y=378;
        btt2.mouseEnabled=true;
        btt2.stateClicked = true;

    };
    function onNext(){
        main.nCurrentLevel++;
        if(main.nCurrentLevel==3){
            t.dispatchEvent({param:HTP2, type:'changePage',bubbles:true,cancelable:true});
        }else{
            t.dispatchEvent({param:eval('Level'+main.nCurrentLevel), type:'changePage',bubbles:true,cancelable:true});
        }
    }   
    function wlaczbtt2(){
        btt2.mouseEnabled=true;
    }
   
   

    window.NextLevel=NextLevel;

}());
