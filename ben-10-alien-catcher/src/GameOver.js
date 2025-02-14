
(function()
{
    'use strict';
    var t;
    var bmp,className,button,bmpString,btt_obj,p1,p2,btt1,btt2,t1;
    function GameOver()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(GameOver, c.Container);
    p.initialize=function() {

        playSounds('game_over');
        var  bSuccess = true;
        playSounds('level_complete');
        try{
            window.parent.extChallenge1Completed();
        }catch(e){

        }
         btt_obj = strings.pages.game_over.play_again;
        t1 =strings.pages.game_over.success;
        nCurrentLevel++;
        bmp = new  c.Bitmap(main.loadedData.getResult('game_level_complete_good'));
        t.addChild(bmp);

        var globe=new c.Bitmap(main.loadedData.getResult('globe'));
        globe.regX = globe.image.width/2;
        globe.regY = globe.image.height/2;
        globe.x = globe.regX;
        globe.y = globe.regY;
        globe.scaleX = globe.scaleY = 0.74;


        TweenLite.to(globe,120,{rotation:360,ease:Linear.easeNone})
        var globeContainer = new c.Container();
        t.addChild(globeContainer);

        globeContainer.addChild(globe)

        globeContainer.x = 378;
        globeContainer.y =43;
        TweenLite.from(globeContainer,15,{y:-600,ease:Strong.easeOut});


        var blob=new c.Bitmap(main.loadedData.getResult('lc_blob'));
        t.addChild(blob);
        blob.regX = blob.image.width/2;
        blob.regY = blob.image.height/2;
        blob.x = 451+blob.regX;
        blob.y = 361+blob.regY;
        t.addChild(blob);
        TweenMax.from(blob,3,{scaleX:0,scaleY:0,ease:Elastic.easeOut});


        var p1 = new  c.Bitmap(main.loadedData.getResult('go_p1'));
        t.addChild(p1);
        p1.x = 378;
        p1.y =16;
        TweenMax.from(p1,3,{x:-600,delay:2,ease:Power4.easeOut});


        var zz=level1Points;

        var left = new c.Container();
        left.x = 646;
        left.y= 37;
        t.addChild(left);
        TweenMax.from(left,3,{delay:1,x:1800,ease:Power4.easeOut})
        bmp=new c.Bitmap(main.loadedData.getResult('go_appla'));
        left.addChild(bmp);

        t1 =   new c.Text(t1.text, t1.font, '#1D1F21');
        t1.textAlign = 'center';
        t1.x =646/2;
        t1.lineWidth=646;
        t1.y = 35;
        left.addChild(t1);

        t1 =strings.pages.game_over.success2;
        t1 =   new c.Text(t1.text, t1.font, '#59311F');
        t1.textAlign = 'center';
        t1.x = 646/2;
        t1.lineWidth=646;
        t1.y = 89;
        left.addChild(t1);




        t1 =   new c.Text(strings.pages.game_over.total_score.text, strings.pages.game_over.total_score.font, '#fff');
        t1.textAlign = 'center';
        t1.x = 646/2;
        t1.lineWidth=646;
        t1.y = 227;
        left.addChild(t1);

        t1 =   new c.Text(zz, strings.pages.game_over.points.font, '#BF0609');
        t1.textAlign = 'center';
        t1.x = 646/2;
        t1.lineWidth=646;
        t1.y = 258;
        left.addChild(t1);

        console.log(className+'CLASSS NAME');
        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd_on'),main.loadedData.getResult('btt_bgd'),'#fff',btt_obj,Step1);

        btt1.x = 195+btt1.regX;
        btt1.y = 491+btt1.regY;
        left.addChild(btt1);
        TweenLite.from(btt1,1,{alpha:0,ease:Elastic.easeOut,delay:1+Math.random()});
    };

function onHome(){

    window.location.href='../index.html?pageName='+params.pageName+'&cid='+params.cid;
}

    function onDispatch(){
		/*
		turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "game level",
                "gamelevelreplay": "1",
                "minigametitle":'creature catcher',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": '1',
                "gamemilestonename": 'nvs',
                "gamemap": 'nvs',
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
        });
        */

        t.mouseEnabled = false;
        t.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});
    }
    window.GameOver = c.promote(GameOver, "Container");

}());
