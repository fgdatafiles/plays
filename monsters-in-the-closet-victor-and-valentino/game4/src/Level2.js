var hud;
(function()
{
    'use strict';
    var t;

    var bmp,intro_logo,logo_game1;
    var itemsToFind;
    var found=0;
    var biale;
    var czarne;
    function Level2()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var l2 = createjs.extend(Level2, createjs.Container);
    l2.initialize=function() {
        backBtt.visible = true;
        var found=0;
        t.mouseEnabled=false;
        nActualLevel=2;

        prefix = 'l2_';
        level2msLeft = 0;
        bmp = new  c.Bitmap(main.loadedData.getResult('level2_bgd'));
        t.addChild(bmp);

        var item;
        for(var i=0;i<level2_objects.length;i++){
            console.log(i);
            item = new c.Bitmap(main.loadedData.getResult(prefix+i));
            t.addChild(item);
            item.x = level2_objects[i].x+item.image.width/2;
            item.y = level2_objects[i].y+item.image.height/2;
            item.regX = +item.image.width/2;
            item.regY = +item.image.height/2;
            item.addEventListener('mousedown',onFindItem)
        }
        
        hud = new Hud( level2_objects.length);
        hud.x = 582;
        hud.addEventListener('end',onTimerEnded);
        hud.addEventListener('founded',onLevelComplete);
        t.addChild(hud);

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));

        intro_logo.scaleX = intro_logo.scaleY = 0.77;
        intro_logo.x = 402;
        intro_logo.y =20;

        t.addChild(intro_logo);
        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});


        logo_game1=new c.Container();

        bmp = new  c. Bitmap(main.loadedData.getResult('logo_game4'));
        logo_game1.addChild(bmp);
        logo_game1.scaleX = logo_game1.scaleY = 0.46;
        logo_game1.x = 1012;
        logo_game1.y = 0;

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
                  "minigametitle":'cleanup challenge',
                  "gametitle": "victor and valentino",
                  "englishname": "victor and valentino",
                  "gamecategory": "arcade",
                  "brand": 'cartoon network',
                  "gamelevel": 'nvs',
                  "gamemilestonename": 'smash the pinata',
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
                 "minigametitle":'cleanup challenge',
                 "gametitle": "victor and valentino",
                 "englishname": "victor and valentino",
                 "gamecategory": "arcade",
                 "brand": 'cartoon network',
                 "gamelevel": '2',
                 "gamemilestonename": 'nvs',
                 "gamemap": 'nvs',
                 "gamecharacter": 'nvs',
                 "gameitem": 'nvs'
             }
        });
    };



    function onLevelComplete(){
        t.mouseEnabled=false;
        success = true;
        animSuccess();
    }
    function onFindItem(e){
        playSounds('hit'+Math.ceil(Math.random()*7));
        e.currentTarget.removeEventListener('mousedown',onFindItem)
        hud.addFound();
        TweenLite.to(e.currentTarget,.5,{y:e.currentTarget.y-20,scale:1.05});
        TweenLite.to(e.currentTarget,.5,{alpha:0,scale:1.4,delay:.5});

    }


    function onTimerEnded(){

        t.mouseEnabled=false;
        success = false;
        animFail();

    }
    function animFail(){
        playSounds('fail');
        console.log('animate Fail');

        biale= new c.Shape();
        biale.graphics.f("rgba(0,0,0,1)").s().dr(0,0,1640,680)
        t.addChild(biale);
        biale.alpha=0;
        TweenLite.to(biale,1,{alpha:.5});

        var cluttertaur =   new c.Bitmap(main.loadedData.getResult('cluttertaur'));
        cluttertaur.regX =cluttertaur.image.width/2;
        cluttertaur.regY =cluttertaur.image.height/2;
        cluttertaur.x =  1640/2;;
        cluttertaur.y = 680;

        t.addChild(cluttertaur);
        TweenLite.to(cluttertaur,2,{y:340,onComplete:wlaczBiale})
    }
    function animSuccess(){
        playSounds('success');
       biale= new c.Shape();
        biale.graphics.f("rgba(255,255,255,1)").s().dr(0,0,1640,680)
        t.addChild(biale);
        biale.alpha=0;
        TweenLite.to(biale,1,{alpha:.5});
        var grandma =   new c.Bitmap(main.loadedData.getResult('grandma_win'));
        grandma.regX =grandma.image.width/2;
        grandma.regY =grandma.image.height/2;
        grandma.alpha=0;
        grandma.x = 1640/2;
        grandma.y = 680;
        t.addChild(grandma)
        TweenLite.to(grandma,1,{y:340,alpha:1,onComplete:wlaczBiale})
        console.log('animate success');
    }


    function wlaczBiale(){
        var func
        if(success){
            func = levComp;
        }else{
            func = levFail;
        }
        t.addChild(biale);
        TweenLite.to(biale,1,{alpha:1,onComplete:func})

    }
    function levFail(){
        t.dispatchEvent({param: LevelOver, type:'changePage',bubbles:true,cancelable:true});
    }
    function levComp(){
        t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
    }
    l2.destroyAndReset = function(s){
        hud.destroy();
        
        if(!s){
            actualClassLevel = Level2;
        }else{
            actualClassLevel = s;
        }

        t.dispatchEvent({param: ResetClass, type:'changePage',bubbles:true,cancelable:true});
    };
    l2.pauseGame = function(){

        hud.pause();
    }
    l2.unpauseGame = function(){

        hud.unpause();
    }

        window.Level2 = createjs.promote(Level2, "Container");
}());
