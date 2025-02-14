var oryginal =[1,2,3,4,5,6];
var actual=[];
var globalTimer;
(function() {
    'use strict';
    var t;
    var bmp, logo;
    var iconHolder;
    var startX = 345;
    var startY = 536;
    var slotsX = [{x1: 495, x2: 400}, {x1: 792, x2: 700}, {x1: 1081, x2: 1000}];
    var actualDragItem;
    var customerContainer;
    var dataRows;
    var foodsContainer;
    var fd;
    var hud;

    var startDelay;
    var nCurrentstartDelay;
    var randomDelay;
    var globalDelay;

    function Game() {
        this.Container_constructor();
        t = this;

        startDelay=10000;
        randomDelay=8000;
        globalDelay =20000;
        this.initialize();
    }

    var game = c.extend(Game, c.Container);
    game.initialize = function () {

        actual = oryginal.slice();
        shuffle(actual);
        globalTimer =new Set_Timeout(zmniejszDelay,globalDelay);
        dataRows = [];
        nCurrentstartDelay = startDelay;
        for (var i=0;i<3;i++){
            dataRows[i] = {};
            dataRows[i].currentState=0;
            dataRows[i].currentDelay;
        }
        backBtt.visible = true;
        playSounds('intro');
        bmp = new c.Bitmap(main.loadedData.getResult('game_bgd'));
        t.addChild(bmp);

        backBtt.visible = true;


        logo = new c.Bitmap(main.loadedData.getResult('logo_intro'));

        logo.regX = logo.image.width / 2;
        logo.regY = logo.image.height / 2;
        logo.scaleX = logo.scaleY = 0.77;
        logo.x = 478;
        logo.y = 64;


        var overlay = new c.Bitmap(main.loadedData.getResult('game_overlay'));
        bmp.regX = overlay.regX = 1640 / 2;
        bmp.regY = overlay.regY = 680 / 2;
        bmp.x = overlay.x = overlay.regX;
        bmp.y = overlay.y = overlay.regY;


        TweenLite.from(logo, 2, {y: -150, ease: Power4.easeOut});
        TweenLite.from(bmp, 3, {scale: 1.2, ease: Power4.easeOut});
        TweenLite.from(overlay, 3.3, {alpha: 0, scale: 2, ease: Power4.easeOut});


        hud = new Hud();
        hud.addEventListener('start', onStartGame);
        hud.addEventListener('gameover', onGameOver);
        hud.x = 631;
        TweenLite.from(hud, 1, {y: -200, ease: Bounce.easeOut, delay: 1});

        customerContainer = new c.Container();
        t.addChild(customerContainer);
        t.addChild(overlay);
        foodsContainer = new c.Container();
        t.addChild(foodsContainer);


        t.addChild(hud);
        t.addChild(logo);
        this.rozlorzIkony();
	
		  turner_metadata.trackAction.push({
             "type": "game", 
              "data": {
                  "pageName": params.pageName,
                  "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                  "interaction": "game milestone",
                  "minigamestart": "1",
                  "gamemilestones": "1",
                  "minigametitle":'taco time',
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
                 "minigametitle":'taco time',
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
    function zmniejszDelay(){

        globalTimer = new Set_Timeout(zmniejszDelay,globalDelay);
        startDelay-=1000;


    }
    function onStartGame() {
        game.addCustomer(0);
        game.addCustomer(1);
        game.addCustomer(2);
    }

    function onGameOver() {
        backBtt.visible= true;
        clearMe();

        var black = new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(0, 0, 1640, 680));
        t.addChild(black);
        TweenLite.from(black, 3, {alpha: 0, onComplete: dispatchGameOver})

    }

    game.addCustomer = function (n) {

        var delay = Math.floor(nCurrentstartDelay+Math.random()*randomDelay);

        dataRows[n].currentDelay = delay;
        fd = new FoodContainer();
        fd.name = 'f' + n;
        foodsContainer.addChild(fd);
        fd.x = slotsX[n].x2;
        fd.y = 130;

        var curr = actual.pop()
        var cust = new Customer(curr);
        cust.name = 'row' + n + '_' + curr;
        cust.x = slotsX[n].x1;
        cust.addEventListener('timeout', t.hideCustomerSad);
        cust.y = 528;
        customerContainer.addChild(cust);

       fd.animFd = TweenMax.from(fd, 1, {y: 500, alpha: 0});
        fd.animCust = TweenMax.from(cust, 1, {y: 1100});
        fd.reference = cust;

        dataRows[n].currentState=0;

        dataRows[n].timer = new Set_Timeout(this.changeState, dataRows[n].currentDelay,n);

    };

    game.changeState=function(nRow){

        dataRows[nRow].currentState++;
        var fd = foodsContainer.getChildByName('f'+nRow);
        console.log(nRow+ 'NROW');

        fd.changeState(dataRows[nRow].currentState);
        fd.reference.changeState(dataRows[nRow].currentState);

        if(dataRows[nRow].currentState<3){
          dataRows[nRow].timer = new Set_Timeout(t.changeState, dataRows[nRow].currentDelay,nRow);
        }
    };
    function clearMe(){

        globalTimer.clear();
        for (var i=0;i<3;i++){
            dataRows[i].timer.clear();
        }
        stage.removeEventListener('stagemouseup', onDrop);

        hud.removeEventListener('start', onStartGame);
        hud.removeEventListener('gameover', onGameOver);


        for ( i = 0; i < customerContainer.numChildren; i++) {

            console.log(customerContainer.children[i])

            customerContainer.children[i].removeAllEventListeners();
        }
        for (i = 0; i < iconHolder.numChildren; i++) {
            iconHolder.children[i].removeEventListener('mousedown', onStartDrag);
            iconHolder.children[i].removeEventListener('pressmove', onDrag);
        }
        TweenMax.killAll();
    }
    game.destroyAndReset = function(s){
        hud.destroy();
       clearMe();
        if(!s){
            actualClassLevel = Game;
        }else{
            actualClassLevel = s;
        }

        t.dispatchEvent({param: ResetClass, type:'changePage',bubbles:true,cancelable:true});
    };
    game.unpauseGame = function () {
        globalTimer.resume();

        for (var i=0;i<3;i++){

            dataRows[i].timer.resume();

        }
    }
    game.pauseGame = function(){
        console.log(dataRows);
        globalTimer.pause();

        for (var i=0;i<3;i++){
            console.log(dataRows[i].timer)
            dataRows[i].timer.pause();

        }


    };
    game.hideCustomerSad = function(e) {

        playSounds('game_over_fail');
        if (!globals.isPaused){
            hud.removeLife();
        }
        var zz = foodsContainer.getChildByName('f'+e.currentTarget.name.substr(3,1));
        if(lives>0){
            TweenMax.to(zz,.3,{alpha:0,onComplete:removeAndChangeCustomer,onCompleteParams:[zz]})
            TweenMax.to(e.currentTarget,1,{y:1100,onComplete:getBackNumberAndAdd,onCompleteParams:[e.currentTarget]});
        }else{
            TweenMax.to(zz,.3,{alpha:0});
            TweenMax.to(e.currentTarget,1,{y:1100});
        }
    };
    game.hideCustomerHappy= function(customerReference){
        playSounds('level_complete');
        customers_happy++;
        TweenMax.to(customerReference,1,{y:1100,onComplete:getBackNumberAndAdd,onCompleteParams:[customerReference]});

    }

    function getBackNumberAndAdd(customerReference){

        actual.push(customerReference.name.substr(5,1));
        shuffle(actual);
        t.addCustomer(customerReference.name.substr(3,1));
        customerContainer.removeChild(customerReference);
        customerReference=null;
    }
    game.rozlorzIkony = function(){
        iconHolder = new c.Container();
        t.addChild(iconHolder);
        var icon;
        var bmp;
        for(var i=0;i<8;i++){

            icon = new c.Container();
            bmp = new c.Bitmap(main.loadedData.getResult('sq'));
            icon.addChild(bmp);

            icon.regX =55;
            icon.regY = 55;
            icon.addChild(bmp);

            bmp =new c.Bitmap(main.loadedData.getResult('icon'+i));
            bmp.x = 55-bmp.image.width/2;
            bmp.y = 55-bmp.image.height/2;
            icon.addChild(bmp);
            icon.x= startX+(i*120)+icon.regX;
            icon.y= startY+icon.regY;
            icon.name ='i'+i;

            iconHolder.addChild(icon);
            icon.cursor = 'pointer';
            TweenLite.from(icon,1,{scale:1.3,delay:2+i*.1,ease:Power4.easeOut,alpha:0});

            icon.addEventListener('mousedown',onStartDrag);
            icon.addEventListener('pressmove',onDrag);

        }
    };


    function onDrop(){


        for(var i=0;i<foodsContainer.numChildren;i++){
            if (ndgmr.checkRectCollision(foodsContainer.children[i].hz, actualDragItem)) {
                var numtocheck =parseInt(actualDragItem.name.substr(1));
                var tocheck = foodsContainer.children[i].slot;
                for(var j =0;j<tocheck.length;j++){
                    if(tocheck[j]==numtocheck){
                        hud.addPoints(30);
                        var zz = foodsContainer.children[i].getChildByName('i'+numtocheck);
                        zz.alpha=1;
                        tocheck.splice(j,1);
                        if(tocheck.length==0){

                            t.hideCustomerHappy(foodsContainer.children[i].reference);
                            TweenLite.to(foodsContainer.children[i],.3,{alpha:0,onComplete:removeAndChangeCustomer,onCompleteParams:[foodsContainer.children[i]]})

                        }
                    }
                }
            }else{

                playSounds('click3');
            }


        }
        stage.removeEventListener('stagemouseup',onDrop);
        t.removeChild(actualDragItem);
        actualDragItem = null;
    }

    function removeAndChangeCustomer(toRemove){
        toRemove.destroy();
        foodsContainer.removeChild(toRemove);
    }

    function onStartDrag(e){
        playSounds('click2');
        actualDragItem = new c.Bitmap(main.loadedData.getResult('icon'+e.currentTarget.name.substr(1)));
        actualDragItem.mouseEnabled =false;
        actualDragItem.name = 'i'+e.currentTarget.name.substr(1);
        actualDragItem.regX = actualDragItem.image.width/2;
        actualDragItem.regY = actualDragItem.image.height/2;
        t.addChild(actualDragItem);
        actualDragItem.mouseEnabled = false;
        actualDragItem.x = stage.mouseX/scaleS-(pageContainer.x);
        actualDragItem.y = stage.mouseY/scaleS-(pageContainer.y);

        stage.addEventListener('stagemouseup',onDrop);

    }

    function onDrag(){
        actualDragItem.x = stage.mouseX/scaleS-(pageContainer.x);
        actualDragItem.y = stage.mouseY/scaleS-(pageContainer.y);

    }
    function dispatchGameOver(){
        TweenMax.killAll();
        t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
    }
    function onDispatch(){
        TweenMax.killAll();
        t.dispatchEvent({param: Htp, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Game = c.promote(Game, "Container");

}());
