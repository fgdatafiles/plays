


(function() {
    'use strict';
    var t;
    function Slots() {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
var p =c.extend(Slots, c.Container);

    var MOLE_DELAY_MAX = 750; // ms
    var MOLE_DELAY_MIN = 500; // ms
    var _mole_delay= MOLE_DELAY_MAX;
    var points = 0;

    var game;
    var levelsClass= [[Slot0,Slot1,Slot2,Slot3,Slot4,Slot5,Slot6,Slot7,Slot8],[Slot9,Slot10,Slot11,Slot12,Slot13,Slot14,Slot15,Slot16]];
    var slotTimer;
    var slotsPosition=[[{x:383,y:622},{x:518,y:432},{x:644,y:351},{x:709,y:657},{x:770,y:275},{x:882,y:569},{x:996,y:618},{x:1192,y:666},{x:1194,y:300}],
        [{x:373,y:314},{x:488,y:363},{x:646,y:482},{x:808,y:538},{x:898,y:421},{x:1031,y:494},{x:1241,y:564},{x:1330,y:290}]];

    p.initialize = function() {


        points = 0;

        hud = new Hud();
        hud.x = 615;
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
                if (Math.random() <.75) {
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