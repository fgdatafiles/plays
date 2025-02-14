
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

    };
    var p = createjs.extend(LevelComplete, createjs.Container);
    p.initialize=function() {
        backBtt.visible= true;
        bmp = new  c.Bitmap(main.loadedData.getResult('level_complete_bgd'));
        t.addChild(bmp);
        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 744;
        intro_logo.y = 23;
        t.addChild(intro_logo);

        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});

        sterowiec = new c.Bitmap(main.loadedData.getResult('level_complete_sterowiec'));
        t.addChild(sterowiec);
        sterowiec.x = 330;
        sterowiec.y = 149;



        t1 =   new c.Text(strings.pages.next_level.score.text, strings.pages.next_level.score.font, '#002915');
        t1.textAlign = 'center';
        t1.x = 467+221;
        t1.lineWidth=442;
        t1.y = 310;
        t.addChild(t1);


        t1 =   new c.Text(level1Points, strings.pages.next_level.points.font, '#FF2B46');
        t1.textAlign = 'center';
        t1.x = 467+221;
        t1.lineWidth=442;
        t1.y = 334;
        t.addChild(t1);

        var t1;
		var gamecharacter = 'victor';
		if(postac ==2){
			gamecharacter = 'valentino';
		}
		
		
        if(activeConfig.level_success){
            playSounds('level_complete');
            t1=   new c.Text(strings.pages.next_level.success.text, strings.pages.next_level.success.font, '#002915');
            p2 = new c.Bitmap(main.loadedData.getResult('level_complete_valentino'));
            p1 = new c.Bitmap(main.loadedData.getResult('level_complete_victor'));
            btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.next_level.next_level,Level2);
			

			
				
				  turner_metadata.trackAction.push({
                     "type": "game", 
                      "data": {
                          "pageName": params.pageName,
                          "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                          "interaction": "gamewin",
                          "gamewin": "1",
                          "gamelevel": "1",
                          "minigametitle":'escape the underworld',
                          "gametitle": "victor and valentino",
                          "englishname": "victor and valentino",
                          "gamecategory": "arcade",
                          "brand": 'cartoon network',

                          "gamemilestonename": 'nvs',
                          "gamemap": 'underworld',
                          "gamecharacter": gamecharacter,
                          "gameitem": 'nvs'
                      }
        });
			
			

        }else{
            playSounds('game_over_fail');
            t1=   new c.Text(strings.pages.next_level.fail.text, strings.pages.next_level.fail.font, '#002915');
            p2 = new c.Bitmap(main.loadedData.getResult('level_complete_valentino2'));
            p1 = new c.Bitmap(main.loadedData.getResult('level_complete_victor2'));
            btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.next_level.play_again,Level1);
			
			
		turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "gameloss",
                "gameloss": "1",
                "gamelevel": "1",
                "minigametitle":'escape the underworld',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',

                "gamemilestonename": 'nvs',
                "gamemap": 'underworld',
                "gamecharacter": gamecharacter,
                "gameitem": 'nvs'
            }
        });
		}
        t1.textAlign = 'center';
        t1.x = 467+221;
        t1.lineWidth=442;
        t1.y = 238;
        t.addChild(t1);

        t.addChild(p2);
        p2.x = 781;
        p2.y = 419;

        t.addChild(p1);
        p1.x = 963;
        p1.y = 472;
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});

        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 1105+btt1.regX;
        btt1.y = 427+btt1.regY;
        t.addChild(btt1);
    };


    window.LevelComplete = createjs.promote(LevelComplete, "Container");
}());
