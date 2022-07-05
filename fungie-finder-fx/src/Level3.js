(function() {
    'use strict';
    var t;
    var _this;
    var slots;
    var bgd, intro_logo, logo_game;

    function Level3() {

        this.Container_constructor();
        _this = this;
        this.initialize();

    }
    var p = c.extend(Level3, c.Container);
    p.initialize = function() {
        nCurrentLevel = 3;
        console.log('lev3');
        bgd = new c.Bitmap(main.loadedData.getResult('level3'));
        _this.addChild(bgd);
        slots = new Slots();
        _this.addChild(slots);
        slots.addEventListener('end', onLevelComplete);
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
    window.Level3 = c.promote(Level3, "Container");

}());