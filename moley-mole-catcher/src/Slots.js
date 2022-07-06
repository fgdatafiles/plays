


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
    var levelsClass= [Slot0,Slot1,Slot2,Slot3,Slot4,Slot5,Slot6,Slot7,Slot8,Slot9,Slot10,Slot11,Slot12,Slot13,Slot14,Slot15,Slot16];
    var slotTimer;
    var slotsPosition=[
        {x:393,y:444,width:47,height:143,scale:.7},{x:405,y:148,width:49,height:136,scale:.60},{x:462,y:536,width:94,height:148,scale:1},{x:517,y:511,width:69,height:108,scale:.8},
        {x:585,y:446,width:32,height:130,scale:.55} ,{x:595,y:177,width:31,height:120,scale:.5} ,{x:694,y:399,width:86,height:160,scale:.75},{x:592,y:213,width:200,height:120,scale:.65},
        {x:766,y:362,width:144,height:196,scale:0.9},{x:887,y:130,width:185,height:149,scale:0.65},{x:885,y:417,width:125,height:98,scale:0.55},{x:901,y:400,width:82,height:142,scale:0.65},
        {x:1029,y:400,width:114,height:223,scale:1},{x:405,y:148,width:49,height:136,scale:.60},{x:1135,y:172,width:37,height:79,scale:.5},{x:1155,y:450,width:87,height:159,scale:.90},
        {x:1222,y:171,width:38,height:78,scale:.48}];
    p.initialize = function() {

        points = 0;
        var slot;
        for (var i=0;i<levelsClass.length;i++){
            slot = new levelsClass[i](slotsPosition[i]);
            slot.setTransform(slotsPosition[i].x+slotsPosition[i].width/2,slotsPosition[i].y+slotsPosition[i].height/2)
            t.addChild(slot);
            slot.name = 's'+i;

        }
        this.startMole();
    };
    p.pauseGame = function(){
        game= false;
        if(slotTimer)clearTimeout(slotTimer)
    };
    p.unpauseGame=function(){
        game = true;
        p.startMole();
    };

    p.destroySlots = function(){
        if(slotTimer)clearTimeout(slotTimer);

        for (var i=0;i<levelsClass.length;i++){
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
        _mole_delay = MOLE_DELAY_MAX - ((MOLE_DELAY_MAX - MOLE_DELAY_MIN) * 0.5);
        slotTimer=setTimeout(onSlotTimer,_mole_delay);
    }

    function triggerMole(){

        var index = Math.round(Math.random()*(levelsClass.length-1));


        var tMole = t.getChildByName("s"+index);

            if (tMole._active === false) {
                playSounds('show'+Math.ceil(Math.random()*2));
                if (Math.random() <.75) {
                  tMole.showBad();
                } else {
                 tMole.showGood();
                }
            }
        }
    function onTimerEnded(e){
        if(slotTimer){
            clearTimeout(slotTimer)
        }
        t.destroySlots();

    }

    window.Slots = c.promote(Slots, "Container");
}());