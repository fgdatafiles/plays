(function() {
    'use strict';
    var t;

    function Slots() {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Slots, c.Container);

    var MOLE_DELAY_MAX = 2250; // ms
    var MOLE_DELAY_MIN = 1500; // ms
    var _mole_delay = MOLE_DELAY_MAX;
    var points = 0;

    var game;
    var levelsClass = [
        [],
        [Slot0, Slot1, Slot2, Slot3, Slot4, Slot5],
        [Slot6, Slot7, Slot8, Slot9, Slot10, Slot11, Slot12],
        [Slot13, Slot14, Slot15, Slot16, Slot17, Slot18, Slot19, Slot20],
        [Slot21, Slot22, Slot23, Slot24, Slot25, Slot26, Slot28, Slot29, Slot30]
    ];
    var slotTimer;
    var slotsPosition = [
        [],
        [{
            x: 416,
            y: 158
        }, {
            x: 636,
            y: 159
        }, {
            x: 816,
            y: 582
        }, {
            x: 978,
            y: 371
        }, {
            x: 1004,
            y: 51
        }, {
            x: 1157,
            y: 327
        }],
        [{
            x: 488,
            y: 141
        }, {
            x: 546,
            y: 418
        }, {
            x: 760,
            y: 623
        }, {
            x: 816,
            y: 448
        }, {
            x: 992,
            y: 420
        }, {
            x: 1034,
            y: 232
        }, {
            x: 1196,
            y: 594
        }],
        [{
            x: 472,
            y: 597
        }, {
            x: 770,
            y: 453
        }, {
            x: 820,
            y: 631
        }, {
            x: 845,
            y: 237
        }, {
            x: 1002,
            y: 318
        }, {
            x: 1126,
            y: 550
        }, {
            x: 1122,
            y: 74
        }, {
            x: 1221,
            y: 231
        }],
        [{
            x: 460,
            y: 534
        }, {
            x: 434,
            y: 204
        }, {
            x: 579,
            y: 293
        }, {
            x: 701,
            y: 181
        }, {
            x: 753,
            y: 481
        }, {
            x: 809,
            y: 320
        }, {
            x: 887,
            y: 525
        }, {
            x: 1072,
            y: -20
        }, {
            x: 1115,
            y: 516
        }]

        //78.475,93.5
    ];


    p.initialize = function() {


        points = 0;

        hud = new Hud();
        hud.x = 499;
        hud.addEventListener('start', onStartGame);
        hud.addEventListener('end', onTimerEnded);
        t.addChild(hud);


        var slot;

        for (var i = 0; i < levelsClass[nCurrentLevel].length; i++) {
            slot = new levelsClass[nCurrentLevel][i];
            slot.setTransform(slotsPosition[nCurrentLevel][i].x, slotsPosition[nCurrentLevel][i].y);
            t.addChild(slot);
            slot.name = 's' + i;

        }

    };
    p.pauseGame = function() {

        hud.pause();
        game = false;
        if (slotTimer) clearTimeout(slotTimer)
    };
    p.unpauseGame = function() {
        hud.unpause();
        game = true;
        p.startMole();

    };

    function onStartGame() {
        p.startMole();

        console.log('start Mole');
    }
    p.destroySlots = function() {


        if (slotTimer) clearTimeout(slotTimer);

        for (var i = 0; i < levelsClass[nCurrentLevel].length; i++) {
            t.getChildByName('s' + i).destroy();
        }



    };
    p.startMole = function() {
        game = true;
        triggerMole();
        slotTimer = setTimeout(onSlotTimer, _mole_delay);

    };



    function onSlotTimer() {
        if (game) {
            triggerMole();
            cycleMoleTimer();
        }
    }

    function cycleMoleTimer() {
        _mole_delay = MOLE_DELAY_MAX - ((MOLE_DELAY_MAX - MOLE_DELAY_MIN) * hud.percentage);
        slotTimer = setTimeout(onSlotTimer, _mole_delay);
    }

    function triggerMole() {

        var index = Math.round(Math.random() * (levelsClass[nCurrentLevel].length - 1));

        var percentage = hud.percentage;
        var tMole = t.getChildByName("s" + index);

        if (tMole._active == false) {
            playSounds('show' + Math.ceil(Math.random() * 2));
            if (Math.random() < .5) {
                tMole.showBad(percentage);
            } else {
                tMole.showGood(percentage);
            }
        }
    }

    function onTimerEnded(e) {
        if (slotTimer) {
            clearTimeout(slotTimer)
        }
        hud.destroy();
        t.destroySlots();
        t.dispatchEvent({
            type: 'end',
            bubbles: false,
            cancelable: false
        });
    }

    window.Slots = c.promote(Slots, "Container");
}());