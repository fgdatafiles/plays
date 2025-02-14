
(function()
{
    'use strict';
    var t;
    var slots;
    var bgd,intro_logo,logo_game;
    function Level2()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(Level2, c.Container);
    p.initialize=function() {
		        backBtt.visible = true;
        nCurrentLevel = 1;
        level2Points=0;
        backBtt.visible = true;
         bgd = new c.Bitmap(main.loadedData.getResult('game_level2'));
        t.addChild(bgd);
        slots = new Slots();
        t.addChild(slots);
        slots.addEventListener('end',onLevelComplete);

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 430;
        intro_logo.y = 17;
        intro_logo.scaleX=intro_logo.scaleY=0.84;
        t.addChild(intro_logo);

        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});

        var logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game2_small'));
        logo_game1.x = 1045;
        logo_game1.scaleX=logo_game1.scaleY=0.7;
        logo_game1.y = 30;
        t.addChild(logo_game1);

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
                 "gamelevel": '2',
                 "gamemilestonename": 'creature catcher',
                 "gamemap": 'nvs',
                 "gamecharacter": 'nvs',
                 "gameitem": 'nvs'
             }
        });
    };

    p.destroyAndReset = function(s){
        slots.removeEventListener('end',onLevelComplete);
        slots.destroySlots();
        slots = null;
        t.removeAllChildren();

        t.dispatchEvent({param: ResetClass, type:'changePage',bubbles:false,cancelable:true});
    };


    p.pauseGame = function(){


        slots.pauseGame();
    };
    p.unpauseGame = function(){
        slots.unpauseGame();
    };
    function onLevelComplete(){
        t.removeChild(bgd);

        slots.removeEventListener('end',onLevelComplete);
        t.removeChild(slots);
        slots = null;
        //t.removeAllChildren();
        t.dispatchEvent({param: GameOver, type:'changePage',bubbles:false,cancelable:true});
    
    }
    window.Level2 = c.promote(Level2, "Container");

}());
