
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,p1,p2,btt1,btt2;
    function GameOver()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(GameOver, c.Container);
    p.initialize=function() {

        playSounds('game_over');
        bmp = new  c.Bitmap(main.loadedData.getResult('level_complete_bgd'));
        t.addChild(bmp);
        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 744;
        intro_logo.y = 23;
        t.addChild(intro_logo);

        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});


        var t1 =   new c.Text(strings.pages.game_over.success.text, strings.pages.game_over.success.font, '#65E9F1');
        t1.textAlign = 'center';
        t1.x = 897+163;
        t1.lineWidth=326;
        t1.y = 213;
        t.addChild(t1);

        t1 =   new c.Text(strings.pages.game_over.total_score.text, strings.pages.game_over.total_score.font, '#FFA147');
        t1.textAlign = 'center';
        t1.x = 977+176/2;
        t1.lineWidth=176;
        t1.y = 332;
        t.addChild(t1);
        var points = parseInt(level2Points)+parseInt(level1Points);

        t1 =   new c.Text(points, strings.pages.game_over.points.font, '#ff5138');
        t1.textAlign = 'center';
        t1.x = 948+234/2;
        t1.lineWidth=234;
        t1.y = 352;
        t.addChild(t1);


        p2 = new c.Bitmap(main.loadedData.getResult('valentino_level_complete'));
        t.addChild(p2);
        p2.x = 370;
        p2.y = 177;

        p1 = new c.Bitmap(main.loadedData.getResult('victor_level_complete'));
        t.addChild(p1);
        p1.x = 685;
        p1.y = 256;

/*
        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 984+btt1.regX;
        btt1.y = 447+btt1.regY;
        t.addChild(btt1);
*/

        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 894+btt1.regX;
        btt1.y = 447+btt1.regY;
        t.addChild(btt1);




        btt2 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.continue);
        btt2.regX = 188/2;
        btt2.regY = 182/2;
        btt2.x = 1080+btt2.regX;
        btt2.y = 447+btt2.regY;
        t.addChild(btt2);

        //btt1.scaleX = btt1.scaleY = btt2.scaleY=btt2.scaleX = 0.7
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
        TweenLite.from(btt2,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
        btt2.addEventListener('click',onHome);





        TweenLite.from(p1,1,{delay:.5,x:-1000,alpha:0});
        TweenLite.from(p2,1,{delay:.9,x:-1000,alpha:0});
		
		
			turner_metadata.trackAction.push({
               "type": "game", 
                "data": {
                    "pageName": params.pageName,
                    "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                    "interaction": "gamewin",
                    "gamewin": "1",
                    "gamelevel": "2",
                    "minigametitle":'creature catcher',
                    "gametitle": "victor and valentino",
                    "englishname": "victor and valentino",
                    "gamecategory": "arcade",
                    "brand": 'cartoon network',

                    "gamemilestonename": 'nvs',
                    "gamemap": 'nvs',
                    "gamecharacter": 'nvs',
                    "gameitem": 'nvs'
                }
			   });
					
		turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "gamecomplete",
                "gamecomplete": "1",
                "minigametitle":'creature catcher',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": 'nvs',
                "gamemilestonename": 'nvs',
                "gamemap": 'nvs',
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
        });

    };

function onHome(){

    window.location.href='../index.html?pageName='+params.pageName+'&cid='+params.cid;
}

    function onDispatch(){
		
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
        t.mouseEnabled = false;
        t.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});
    }
    window.GameOver = c.promote(GameOver, "Container");

}());
