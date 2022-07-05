(function() {
    'use strict';
    var t;
    var _this;
    var slots;
    var bgd, intro_logo, logo_game;

    function Level4() {

        this.Container_constructor();
        _this = this;
        this.initialize();

    }
    var p = c.extend(Level4, c.Container);
    p.initialize = function() {
        nCurrentLevel = 4
        bgd = new c.Bitmap(main.loadedData.getResult('level4'));
        _this.addChild(bgd);
        slots = new Slots();
        console.log('lev4');
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
            param: GameOver,
            type: 'changePage',
            bubbles: false,
            cancelable: true
        });

    }
    window.Level4 = c.promote(Level4, "Container");

}());