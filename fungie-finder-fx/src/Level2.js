(function() {
    'use strict';
    var t;
    var _this;
    var slots;
    var bgd, intro_logo, logo_game;

    function Level2() {

        this.Container_constructor();
        _this = this;
        this.initialize();

    }
    var p = c.extend(Level2, c.Container);
    p.initialize = function() {
        nCurrentLevel = 2;
        console.log('lev2');
        bgd = new c.Bitmap(main.loadedData.getResult('level2'));
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


        var statsData = {
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
        };
        if(isLevel2Played==1){
            statsData['gamelevelreplay']='1';
        }
        turner_metadata.trackAction.push({
            "type": "game",
            "data":statsData
        });
        isLevel2Played = 1;

		 */
    };

    p.destroyAndReset = function(s) {
        slots.removeEventListener('end', onLevelComplete);
        slots.destroySlots();
        slots = null;
        _this.removeAllChildren();

        _this.dispatchEvent({
            param: ResetClass,
            type: 'changePage',
            bubbles: false,
            cancelable: true
        });
    };


    p.pauseGame = function() {


        slots.pauseGame();
    };
    p.unpauseGame = function() {
        slots.unpauseGame();
    };

    function onLevelComplete() {
        _this.removeChild(bgd);

        slots.removeEventListener('end', onLevelComplete);
        _this.removeChild(slots);
        slots = null;
        //_this.removeAllChildren();
        _this.dispatchEvent({
            param: LevelComplete,
            type: 'changePage',
            bubbles: false,
            cancelable: true
        });

    }
    window.Level2 = c.promote(Level2, "Container");

}());