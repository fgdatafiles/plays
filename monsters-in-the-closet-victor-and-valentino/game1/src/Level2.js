
(function()
{
    'use strict';
    var t;

    var bgd_slider,obstacles,logo_game1,intro_logo;
    function Level2()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    };
    var p = createjs.extend(Level2, createjs.Container);


    p.initialize=function() {
        backBtt.visible= true;
        activeConfig = Object.assign({}, globals.game1Level2);
        level2Points= 0;
        nActualLevel=2;
         bgd_slider = new BackgroundsSlider(
            {x:0,y:0,width:1640,height:270,offsetY:0,bgd_id:activeConfig.prefix+'landscape'},
            {x:0,y:0,width:1640,height:332,offsetY:0,bgd_id:activeConfig.prefix+'city'},
            {x:0,y:0,width:1640,height:351,offsetY:332,bgd_id:activeConfig.prefix+'road'}
        );

        t.addChild(bgd_slider);
        obstacles = new Obstacles();
        obstacles.addEventListener('levelEnded',onLevelComplete)
        t.addChild(obstacles);
        stage.addEventListener('tick',this.updateMovingItems);

        hud = new Hud();
        hud.x = 652;
        hud.addEventListener('life_end',onLifeEnded);
        hud.addEventListener('end',onTimerEnded);
        t.addChild(hud);

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 442;
        intro_logo.y = 21;
        t.addChild(intro_logo);
        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});

        logo_game1=new c.Bitmap(main.loadedData.getResult('logo_game1'));
        logo_game1.x = 1009;
        logo_game1.y = 36;
        logo_game1.scaleX =logo_game1.scaleY = 0.54;
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
                  "minigametitle":'escape the underworld',
                  "gametitle": "victor and valentino",
                  "englishname": "victor and valentino",
                  "gamecategory": "arcade",
                  "brand": 'cartoon network',
                  "gamelevel": 'nvs',
                  "gamemilestonename": 'escape the underworld',
                  "gamemap": 'monte mcabre',
                  "gamecharacter": 'nvs',
                  "gameitem": 'nvs'
              }
        });
		var gamecharacter = 'victor';
		if(postac ==2){
			gamecharacter = 'valentino';
		}

		 turner_metadata.trackAction.push({
            "type": "game", 
             "data": {
                 "pageName": params.pageName,
                 "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                 "interaction": "game level",
                 "gamelevelstart": "1",
                 "minigametitle":'escape the underworld',
                 "gametitle": "victor and valentino",
                 "englishname": "victor and valentino",
                 "gamecategory": "arcade",
                 "brand": 'cartoon network',
                 "gamelevel": '2',
                 "gamemilestonename": 'nvs',
                 "gamemap": 'monte mcabre',
                 "gamecharacter": gamecharacter,
                 "gameitem": 'nvs'
             }
        });

    };
    p.destroyAndReset = function(s){
        hud.destroy();
        obstacles.destroy();
        bgd_slider.destroy();
        if(!s){
            actualClassLevel = Level2;
        }else{
            actualClassLevel = s;
        }
        stage.removeEventListener('tick',this.updateMovingItems);
        t.dispatchEvent({param: ResetClass, type:'changePage',bubbles:true,cancelable:true});
    };
    p.pauseGame = function(){
        stage.removeEventListener('tick',this.updateMovingItems);
        obstacles.pause();
        hud.pause();
    }
    p.unpauseGame = function(){
        stage.addEventListener('tick',this.updateMovingItems);
        obstacles.unpause();
        hud.unpause();
    }

    function onLevelComplete(){
        t.removeChild(obstacles);
        bgd_slider.destroy();
        obstacles.destroy();
        hud.destroy();
        stage.removeEventListener('tick',p.updateMovingItems);
        t.removeAllChildren();
        t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
    }

    function onLifeEnded(){
        activeConfig.level_success = false;
        activeConfig.level_ended=true;
        obstacles.onLevel2LifeEndedAnimation();
    }
    function onTimerEnded(){

        activeConfig.level_ended = true;
        obstacles.onLevel2EndedAnimation();
    }
    p.updateMovingItems=function(){
        bgd_slider.update();
        obstacles.update();
    }
    p.updateMovingItems=function(){
        bgd_slider.update();
        obstacles.update();
    }


    window.Level2 = createjs.promote(Level2, "Container");
}());
