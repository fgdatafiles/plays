//
function LevelsStageInit()
{	
    // init stage
    this.stage = new PIXI.Stage(0x000000, true);		
    this.backgrouds = new GameBackgrounds(); 
    this.gui = new LevelsStageGui();
    this.currentScreenId = 1;

    // called when stage is show
    // currentScreenId - index of current screen (to show levels as 1..20, 21-40, ...)
    this.Fadein = function(currentScreenId)
    {	
        this.currentScreenId = currentScreenId;

        this.backgrouds.Init(this.stage);
        this.gui.Init(this.stage, this.currentScreenId);
        this.backgrouds.Show(); // change backgroud 
    }

    // called when stage is hide
    this.Fadeout = function(obj)
    {		
        this.backgrouds.Free();
        this.gui.Free();
    }

    this.Update = function()
    {
        this.gui.Update();
    }

}

// Implement stage gui
function LevelsStageGui(currentScreenId)
{

    this.rootContainer = undefined;
    this.objContainer = undefined;
    // positions of icons
    this.iconsPos= [
        [{"x":GlobalScale(52), "y":GlobalScale(207)},{"x":GlobalScale(195), "y":GlobalScale(207)},{"x":GlobalScale(340), "y":GlobalScale(207)},{"x":GlobalScale(485), "y":GlobalScale(207)}],
        [{"x":GlobalScale(52), "y":GlobalScale(343)},{"x":GlobalScale(195), "y":GlobalScale(343)},{"x":GlobalScale(340), "y":GlobalScale(343)},{"x":GlobalScale(485), "y":GlobalScale(343)}],
        [{"x":GlobalScale(52), "y":GlobalScale(489)},{"x":GlobalScale(195), "y":GlobalScale(489)},{"x":GlobalScale(340), "y":GlobalScale(489)},{"x":GlobalScale(485), "y":GlobalScale(489)}],
        [{"x":GlobalScale(52), "y":GlobalScale(635)},{"x":GlobalScale(195), "y":GlobalScale(635)},{"x":GlobalScale(340), "y":GlobalScale(635)},{"x":GlobalScale(485), "y":GlobalScale(635)}],
        [{"x":GlobalScale(52), "y":GlobalScale(772)},{"x":GlobalScale(195), "y":GlobalScale(772)},{"x":GlobalScale(340), "y":GlobalScale(772)},{"x":GlobalScale(485), "y":GlobalScale(772)}]
            ];
    this.iconsArray = undefined;
    this.levelsScreenButtons = undefined; // list with select levels screen buttons
    this.stageFadeInEffect = undefined; // fade effect when switch to this stage 
    this.stageFadeOutEffect = undefined; // fade effect when switch from this stage 
    this.score = undefined;
    this.button_pause= {"sprite":undefined, "effect": undefined, "scale": 1};

    this.Init = function(rootContainer, currentSelectedId)
    {
        this.rootContainer = rootContainer;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootContainer.addChild(this.objContainer);

        // add elements to gui
        var bg_top = new PIXI.Sprite(PIXI.Texture.fromImage("game_top_menu_background.png"));
        bg_top.position.x = GlobalScale(0);
        bg_top.position.y = GlobalScale(-30);
        this.objContainer.addChild(bg_top);	

        // big backgroud
        var big_bg = new PIXI.Sprite(PIXI.Texture.fromImage("big_bg.png"));
        big_bg.position.x = GlobalScale(7);
        big_bg.position.y = GlobalScale(114);
        this.objContainer.addChild(big_bg);	

        // button pause/main menu 
        this.button_pause.effect = new ShiverEffect();
        this.button_pause.effect.Init(0.05, 0.0, 0.3);
        this.button_pause.sprite= new PIXI.Sprite(PIXI.Texture.fromImage("button_pause.png"));
        this.button_pause.sprite.effect = undefined;
        this.button_pause.sprite.anchor.x = 0.5;
        this.button_pause.sprite.anchor.y = 0.5;
        this.button_pause.sprite.position.x = this.button_pause.sprite.width/2 + GlobalScale(522);
        this.button_pause.sprite.position.y = this.button_pause.sprite.height/2 + GlobalScale(4);
        this.button_pause.sprite.interactive = true;
        this.button_pause.sprite.buttonMode = true;
        DEVICE.ClickOrTap(this.button_pause.sprite, function(data){
                SoundManager.Play("click");
                GAME.currentStage.Fadeout();
                GAME.currentStage = GAME.stages.mainmenu;
                GAME.currentStage.Fadein();
        });
        this.button_pause.sprite.mouseover = function()
        {
            var alias = GAME.stages.levels.gui;   // this
            alias.button_pause.scale = 1 + 0.05;
        }
        this.button_pause.sprite.mouseout= function()
        {
            var alias = GAME.stages.levels.gui;   // this
            alias.button_pause.scale = 1 - 0.05;
        }
        this.objContainer.addChild(this.button_pause.sprite);

        // levels label 
        var level_label = new PIXI.Sprite(PIXI.Texture.fromImage("level_label.png"));
        level_label.position.x = GlobalScale(56);
        level_label.position.y = GlobalScale(30); 
        this.objContainer.addChild(level_label);	

        // label
        var label = new PIXI.Sprite(PIXI.Texture.fromImage("select_level_label.png"));
        label.position.x = GlobalScale(230);
        label.position.y = GlobalScale(140); 
        this.objContainer.addChild(label);	

        // font 
        var completed_total = GAMEINFO.currentCompletedLevelsNum().toString() + "/" + GAMEINFO.getTotalLevelsNum();
        var fontSize= GlobalScale(45);
	this.font = new PIXI.BitmapText(completed_total, {font: fontSize+"px game_top_menu_font"});
	this.font.position.x = GlobalScale(170);
	this.font.position.y = GlobalScale(20);
	this.objContainer.addChild(this.font);

        var max = GAMEINFO.getTotalLevelsNum();    // how many levels in this game :)
        var cur = GAMEINFO.currentCompletedLevelsNum(); // from 0 to max , if cur == max - game is complete :)

        var levelsIconsPerScreen = this.iconsPos.length * this.iconsPos[0].length; // 20 icons per screen
        var maxLevelsScreen = Math.ceil(GAME_LEVELS.length / levelsIconsPerScreen) ;// how many select levels screen will be , starts from 1
        var currentLevelsScreen = currentSelectedId;     // current level screen, start from 1 to  maxLevelsScreen
        // auto detect levels screen
        if(currentLevelsScreen === undefined)
        {
            currentLevelsScreen = Math.ceil(cur / levelsIconsPerScreen);
        }

        // bound checking 
        if(currentLevelsScreen < 1) currentLevelsScreen  = 1;
        if(currentLevelsScreen > maxLevelsScreen) currentLevelsScreen  = maxLevelsScreen;

        var levelsStartFrom = levelsIconsPerScreen * currentLevelsScreen - levelsIconsPerScreen ;

        // place icons
        var counter = levelsStartFrom ;
        this.iconsArray = new Array();
        for(var i = 0;i < this.iconsPos.length; ++i)
        {
            var rov = this.iconsPos[i];
            for(var j=0; j< rov.length; j++)
            {
                // check there is last page
                if(counter >= GAME_LEVELS.length)
                    break;

                // type of icon
                if(cur > counter)
                {
                    // completed levels
                    var alreadyCompletedLevel = new IconCompleted();
                    alreadyCompletedLevel.Init(this.objContainer, counter + 1); 
                    alreadyCompletedLevel.SetPosition(rov[j].x, rov[j].y);
                    this.iconsArray.push(alreadyCompletedLevel);
                }
                else if(cur == counter)
                {
                    // current level
                    var currentLevel = new IconCurrentPlay();
                    currentLevel.Init(this.objContainer, counter + 1); 
                    currentLevel.SetPosition(rov[j].x, rov[j].y);
                    this.iconsArray.push(currentLevel);
                }
                else
                {
                    // locked levels
                    var lockedLevel = new IconLocked();
                    lockedLevel.Init(this.objContainer); 
                    lockedLevel.SetPosition(rov[j].x, rov[j].y);
                    this.iconsArray.push(lockedLevel);
                }

                counter ++;
            }
        }
        
        // init array with game buttons
        this.levelsScreenButtons = new Array();
        var selectLevelsScreenButtonsPos = [
                {"x":GlobalScale(170), "y":GlobalScale(902)},
                {"x":GlobalScale(300), "y":GlobalScale(902)},
                {"x":GlobalScale(430), "y":GlobalScale(902)}
            ];
        if(selectLevelsScreenButtonsPos.length != currentLevelsScreen )
            console.log("game levels button not equal to levels screens");
        for(var i = 1; i <= maxLevelsScreen; ++i)
        {
            var scrBtn = new SelectGameLevelsScreen();
            scrBtn.Init(this.objContainer, i, i === currentLevelsScreen);
            scrBtn.SetPosition(selectLevelsScreenButtonsPos[i-1].x, selectLevelsScreenButtonsPos[i-1].y);
            this.levelsScreenButtons.push(scrBtn);
        }

        // score init
        this.score = new GameScore();
        this.score.Init(this.objContainer, GAMEINFO.getTotalScore(), GAMEINFO.getTotalScore());
        this.score.setPosition(GlobalScale(320), GlobalScale(24));
        
        // MUST BE LAST !!!
        this.stageFadeInEffect = new StageFadeEffect();
        this.stageFadeInEffect.Init(this.objContainer, -0.02);
        this.stageFadeOutEffect = new StageFadeEffect();
        this.stageFadeOutEffect.Init(this.objContainer, 0.02);
        this.stageFadeOutEffect.Pause();
    }

    this.Update = function()
    {
        this.stageFadeInEffect.Update();
        this.stageFadeOutEffect.Update();

        if(this.iconsArray !== undefined)
        {
            for(var i = 0; i < this.iconsArray.length; ++i)
                this.iconsArray[i].Update();
        }

        if(this.levelsScreenButtons !== undefined)
        {
            for(var i = 0; i < this.levelsScreenButtons.length; ++i)
                this.levelsScreenButtons[i].Update();
        }

        this.button_pause.effect.Update();
        this.button_pause.sprite.scale.x = this.button_pause.scale + this.button_pause.effect.GetValue();
        this.button_pause.sprite.scale.y = this.button_pause.scale - this.button_pause.effect.GetValue();

        this.score.Update();
    }

    this.Free = function()
    {
        this.stageFadeInEffect.Free();
        this.stageFadeInEffect = undefined;

        this.score.Free();
        this.score = undefined;

        for(var i = 0;i < this.iconsPos.length; ++i)
            this.iconsArray[i].Free();
        this.iconsArray = undefined;


	this.objContainer.removeChild(this.button_pause.sprite);
	this.button_pause.sprite = undefined;
        this.button_pause.effect = undefined;

        removeAllChild(this.objContainer); // clear other objects

        this.rootContainer.removeChild(this.objContainer);
        this.objContainer = undefined;
    }
}

