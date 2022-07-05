(function() {
    'use strict';
    var _this;
    var slots;
    var bgd, intro_logo, logo_game;

    function Level1() {
        this.Container_constructor();
        _this = this;
        this.initialize();
    }
    var level1 = c.extend(Level1, c.Container);
    level1.initialize = function() {

        nCurrentLevel = 1;
        level1Points = 0;
        level2Points = 0;
        level3Points = 0;
        level4Points = 0;
        console.log('lev1');
        bgd = new c.Bitmap(main.loadedData.getResult('level1'));
        _this.addChild(bgd);
        slots = new Slots();
        _this.addChild(slots);
        slots.addEventListener('end', onLevelComplete)




        /*
			
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


    var statsData ={
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
    };



        if(isLevel1Played==1){
            statsData['gamelevelreplay']='1';
        }
        turner_metadata.trackAction.push({
            "type": "game",
            "data":statsData
        });
        isLevel1Played = 1;

    */
    };

    level1.destroyAndReset = function() {
        slots.removeEventListener('end', onLevelComplete);
        slots.destroySlots();
        slots = null;
        this.removeAllChildren();
        this.dispatchEvent({
            param: ResetClass,
            type: 'changePage',
            bubbles: false,
            cancelable: true
        });
    };
    level1.pauseGame = function() {


        slots.pauseGame();
    };
    level1.unpauseGame = function() {
        slots.unpauseGame();
    };

    function onLevelComplete() {



        _this.removeChild(bgd);
        slots.removeEventListener('end', onLevelComplete);
        _this.removeChild(slots);
        slots = null;

        //t.dispatchEvent({type:'end',bubbles:false,cancelable:false});
        _this.dispatchEvent({
            param: LevelComplete,
            type: 'changePage',
            bubbles: false,
            cancelable: true
        });

    }

    window.Level1 = c.promote(Level1, "Container");

}());