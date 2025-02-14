
(function()
{
    'use strict';
    var _this;
    var slots;
    var bgd,intro_logo,logo_game;
    function Level1()
    {
        this.Container_constructor();
        _this = this;
        this.initialize();
    }
    var level1 = c.extend(Level1, c.Container);
    level1.initialize=function() {

	        backBtt.visible = true;
        console.log('level1 init');
        nCurrentLevel = 0;
        level1Points=0;
        level2Points=0;
        backBtt.visible = true;
        bgd = new c.Bitmap(main.loadedData.getResult('game_level1'));
        _this.addChild(bgd);
        slots = new Slots();
        _this.addChild(slots);
        slots.addEventListener('end',onLevelComplete)


        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 430;
        intro_logo.y = 17;
        intro_logo.scaleX=intro_logo.scaleY=0.84;
        _this.addChild(intro_logo);

        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});

        var logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game2_small'));
        logo_game1.x = 1045;
        logo_game1.scaleX=logo_game1.scaleY=0.7;
        logo_game1.y = 30;
        _this.addChild(logo_game1);

        TweenLite.from(logo_game1,2,{y:-200,ease:Strong.easeOut,delay:.8});
		
		
			
		  turner_metadata.trackAction.push({
             "type": "game", 
              "data": {
                  "pageName": params.pageName,
                  "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                  "interaction": "game milestone",
                  "minigamestart": "1",
                  "gamemilestones": "1",
                  "minigametitle":'creature catcher',
                  "gametitle": "victor and valentino",
                  "englishname": "victor and valentino",
                  "gamecategory": "arcade",
                  "brand": 'cartoon network',
                  "gamelevel": 'nvs',
                  "gamemilestonename": 'creature catcher',
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
                 "interaction": "game level",
                 "gamelevelstart": "1",
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

    };

    level1.destroyAndReset = function(){
        slots.removeEventListener('end',onLevelComplete);
        slots.destroySlots();
        slots = null;
        this.removeAllChildren();
        this.dispatchEvent({param: ResetClass, type:'changePage',bubbles:false,cancelable:true});
    };
    level1.pauseGame = function(){


        slots.pauseGame();
    };
    level1.unpauseGame = function(){
        slots.unpauseGame();
    };
    function onLevelComplete(){



        _this.removeChild(bgd);
        slots.removeEventListener('end',onLevelComplete);
        _this.removeChild(slots);
        slots = null;

        //t.dispatchEvent({type:'end',bubbles:false,cancelable:false});
        _this.dispatchEvent({param: LevelComplete, type:'changePage',bubbles:false,cancelable:true});

}

    window.Level1 = c.promote(Level1, "Container");

}());
