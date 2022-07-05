


(function() {
    'use strict';
    var t;
    function Slots() {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
var p =c.extend(Slots, c.Container);

    var MOLE_DELAY_MAX = 1950; // ms
    var MOLE_DELAY_MIN = 1100; // ms
    var _mole_delay= MOLE_DELAY_MAX;
    var points = 0;

    var game;
    var levelsClass= [[],[Slot0,Slot1,Slot2,Slot3,Slot4,Slot5],[Slot6,Slot7,Slot8,Slot9,Slot10,Slot11]];
    var slotTimer;
    var slotsPosition=[[],[{x:357,y:265},{x:572,y:284},{x:750,y:352},{x:976,y:347},{x:587,y:185},{x:975,y:180}],
        [{x:513,y:568},{x:559,y:218},{x:850,y:185},{x:816,y:448},{x:1090,y:300},{x:1114,y:590}],
        ]
    ;


    p.initialize = function() {


        points = 0;

        hud = new Hud();
        hud.x = 553;
        hud.addEventListener('start',onStartGame);
        hud.addEventListener('end',onTimerEnded);
        t.addChild(hud);


        var slot;

        for (var i=0;i<levelsClass[nCurrentLevel].length;i++){
            slot = new levelsClass[nCurrentLevel][i];
            slot.setTransform(slotsPosition[nCurrentLevel][i].x,slotsPosition[nCurrentLevel][i].y);
            t.addChild(slot);
            slot.name = 's'+i;

        }
        
    };
    p.pauseGame = function(){

        hud.pause();
        game= false;
        if(slotTimer)clearTimeout(slotTimer)
    };
    p.unpauseGame=function(){
        hud.unpause();
        game = true;
        p.startMole();

    };
    function onStartGame(){
        p.startMole();
        
        console.log('start Mole');
    }
    p.destroySlots = function(){


        if(slotTimer)clearTimeout(slotTimer);

        for (var i=0;i<levelsClass[nCurrentLevel].length;i++){
            t.getChildByName('s'+i).destroy();
        }



    };
    p.startMole=function(){
        game = true;
        triggerMole();
        slotTimer= setTimeout(onSlotTimer,_mole_delay);

    };



    function onSlotTimer(){
       if(game){
        triggerMole();
        cycleMoleTimer();
       }
    }
    function cycleMoleTimer() {
        _mole_delay = MOLE_DELAY_MAX - ((MOLE_DELAY_MAX - MOLE_DELAY_MIN) * hud.percentage);
        slotTimer=setTimeout(onSlotTimer,_mole_delay);
    }

    function triggerMole(){

        var index = Math.round(Math.random()*(levelsClass[nCurrentLevel].length-1));

        var percentage = hud.percentage;
        var tMole = t.getChildByName("s"+index);

            if (tMole._active == false) {
                playSounds('show'+Math.ceil(Math.random()*2));
                if (Math.random() <.5) {
                  tMole.showBad(percentage);
                } else {
                 tMole.showGood(percentage);
                }
            }
        }
    function onTimerEnded(e){
        if(slotTimer){
            clearTimeout(slotTimer)
        }
        hud.destroy();
        t.destroySlots();
        t.dispatchEvent({type:'end',bubbles:false,cancelable:false});
    }

    window.Slots = c.promote(Slots, "Container");
}());