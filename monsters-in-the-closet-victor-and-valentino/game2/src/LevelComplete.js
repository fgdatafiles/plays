
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,p1,p2,sterowiec,btt1;
    function LevelComplete()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(LevelComplete, c.Container);

    p.initialize=function() {

        playSounds('level_complete');
        backBtt.visible= true;
        bmp = new  c.Bitmap(main.loadedData.getResult('level_complete_bgd'));
        t.addChild(bmp);
        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 744;
        intro_logo.y = 23;
        t.addChild(intro_logo);

        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});


        var t1 =   new c.Text(strings.pages.next_level.success.text, strings.pages.next_level.success.font, '#65E9F1');
        t1.textAlign = 'center';
        t1.x = 897+163;
        t1.lineWidth=326;
        t1.y = 233;
        t.addChild(t1);

        t1 =   new c.Text(strings.pages.next_level.score.text, strings.pages.next_level.score.font, '#FFA147');
        t1.textAlign = 'center';
        t1.x = 977+176/2;
        t1.lineWidth=176;
        t1.y = 322;
        t.addChild(t1);


        t1 =   new c.Text(level1Points, strings.pages.next_level.points.font, '#ff5138');
        t1.textAlign = 'center';
        t1.x = 948+234/2;
        t1.lineWidth=234;
        t1.y = 342;
        t.addChild(t1);


        p2 = new c.Bitmap(main.loadedData.getResult('valentino_level_complete'));
        t.addChild(p2);
        p2.x = 370;
        p2.y = 177;

        p1 = new c.Bitmap(main.loadedData.getResult('victor_level_complete'));
        t.addChild(p1);
        p1.x = 685;
        p1.y = 256;


        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.next_level.next_level,Level2);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 984+btt1.regX;
        btt1.y = 447+btt1.regY;
        t.addChild(btt1);
        TweenLite.from(p1,1,{delay:.5,x:-1000,alpha:0});
        TweenLite.from(p2,1,{delay:.9,x:-1000,alpha:0});
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
		
			
		turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "gamewin",
                "gamewin": "1",
                "gamelevel": "1",
                "minigametitle":'creature catcher',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',

                "gamemilestonename": 'nvs',
                "gamemap": 'underworld',
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
		});

    };

    window.LevelComplete = c.promote(LevelComplete, "Container");

}());
