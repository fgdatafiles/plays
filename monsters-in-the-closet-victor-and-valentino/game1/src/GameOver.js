
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,p1,p2,dymek,btt1,t1,btt2;
    function GameOver()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    };
    var p = createjs.extend(GameOver, createjs.Container);

    p.initialize=function() {
        backBtt.visible= true;
        bmp = new  c.Bitmap(main.loadedData.getResult('game_over_bgd'));
        t.addChild(bmp);
        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 744;
        intro_logo.y = 23;
        t.addChild(intro_logo);

        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});

        dymek = new c.Bitmap(main.loadedData.getResult('game_over_dymek'));
        t.addChild(dymek);
        dymek.x = 786;
        dymek.y = 170;




        t1 =   new c.Text(strings.pages.game_over.total_score.text, strings.pages.game_over.total_score.font, '#002915');
        t1.textAlign = 'center';
        t1.x = 835+209;
        t1.lineWidth=418;
        t1.y = 340;
        t.addChild(t1);
        var zz = parseInt(level1Points)+parseInt(level2Points);
        t1 =   new c.Text(zz, strings.pages.game_over.points.font, '#FF2B46');
        t1.textAlign = 'center';
        t1.x = 835+209;
        t1.lineWidth=418;
        t1.y = 360;
        t.addChild(t1);

			var gamecharacter = 'victor';
		if(postac ==2){
			gamecharacter = 'valentino';
		}
		
		
        if(activeConfig.level_success) {
            playSounds('game_over');
            t1 = new c.Text(strings.pages.game_over.success.text, strings.pages.game_over.success.font, '#3D73B8');
            p2 = new c.Bitmap(main.loadedData.getResult('game_over_valentino'));
            p1 = new c.Bitmap(main.loadedData.getResult('game_over_victor'));
				
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
					
		turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "gamecomplete",
                "gamecomplete": "1",
                "minigametitle":'escape the underworld',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": 'nvs',
                "gamemilestonename": 'nvs',
                "gamemap": 'monte macabre',
                "gamecharacter": gamecharacter,
                "gameitem": 'nvs'
            }
        });

        }else{
            playSounds('game_over_fail');
            t1 = new c.Text(strings.pages.game_over.fail.text, strings.pages.game_over.fail.font, '#3D73B8');
            p2 = new c.Bitmap(main.loadedData.getResult('game_over_valentino2'));
            p1 = new c.Bitmap(main.loadedData.getResult('game_over_victor2'));
			
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
        t1.x = 835+209;
        t1.lineWidth=418;
        t1.y = 229;
        t.addChild(t1);
        
      


        t.addChild(p1);
        p1.x = 964;
        p1.y = 496;

        t.addChild(p2);
        p2.x = 853;
        p2.y = 469;
		
		
		
		  btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 1027+btt1.regX;
        btt1.y = 439+btt1.regY;
        t.addChild(btt1);




        btt2 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.continue);
        btt2.regX = 188/2;
        btt2.regY = 182/2;
        btt2.x = 1160+btt2.regX;
        btt2.y = 439+btt2.regY;
        t.addChild(btt2);

        btt1.scaleX = btt1.scaleY = btt2.scaleY=btt2.scaleX = 0.7
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
        TweenLite.from(btt2,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
        btt2.addEventListener('click',onHome);

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
                "minigametitle":'escape the underworld',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": '1',
                "gamemilestonename": 'nvs',
                "gamemap": 'underworld',
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
        });
        t.mouseEnabled = false;
        t.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});
    }
    window.GameOver = createjs.promote(GameOver, "Container");

}());
