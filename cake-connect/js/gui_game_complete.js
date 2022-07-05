// game fail gui
function GameCompleteMenu()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;
    this.game_paused_music = undefined;
    this.timeFade = {"text": undefined, "effect":undefined}; // fade effect for time
    this.energyFade = {"text": undefined, "effect": undefined}; // fade effect for energy
    this.scoreFade = {"text": undefined, "effect": undefined}; // score fade effect 


    this.Init = function(rootContainer)
    {
        this.rootContainer = rootContainer;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootContainer.addChild(this.objContainer);

	// add new objects
	var backGround = new PIXI.Graphics();
	backGround.lineStyle(0);	
	backGround.beginFill(0x000001, 0.7);	//NOTE: fix for android brousers	
	backGround.drawRect(0, 0, Screen.VirtualScrW, Screen.VirtualScrH);
	backGround.endFill();	
	this.objContainer.addChild(backGround);	

	// background for menu 
	var game_paused_bg = new PIXI.Sprite.fromImage("game_paused_bg.png");
	game_paused_bg.position.x = GlobalScale(23);
	game_paused_bg.position.y = GlobalScale(257);
	this.objContainer.addChild(game_paused_bg);

        // second background  
	var second_bg = new PIXI.Sprite.fromImage("sub_bg.png");
	second_bg.position.x = GlobalScale(90); 
	second_bg.position.y = GlobalScale(333);
	this.objContainer.addChild(second_bg);

	// level complete label 
	var level= new PIXI.Sprite.fromImage("level_complete_label.png");
	level.position.x = GlobalScale(220);
	level.position.y = GlobalScale(280);
	this.objContainer.addChild(level);

	// level statistic label
	var statistic = new PIXI.Sprite.fromImage("level_statistic_label.png");
	statistic.position.x = GlobalScale(130);
	statistic.position.y = GlobalScale(350);
	this.objContainer.addChild(statistic);

        // buttons
        // music enabled/disabled
        var musicButtonTextures = 	{"Enable":"music_enabled_button.png",
            "Disable":"music_disabled_button.png"};
        this.game_paused_music = new CheckButton(); 
        this.game_paused_music.Init(this.objContainer, musicButtonTextures, 
            function(button){
                if(button.enabled)
                {    
                    SoundManager.Unmute(); 
                    GAMEINFO.enableSound(true);
                }
                else
                {
                    SoundManager.Mute();
                    GAMEINFO.enableSound(false);
                }
            });	
        this.game_paused_music.SetPosition(GlobalScale(78), GlobalScale(525));
        this.game_paused_music.SetState(!SoundManager.GetMute());


        // select levels button 
        var select_levels_button = new PIXI.Sprite.fromImage("select_levels_button.png");
        select_levels_button.position.x = GlobalScale(260); 
        select_levels_button.position.y = GlobalScale(538);
        select_levels_button.interactive = true;
        select_levels_button.buttonMode = true;
        DEVICE.ClickOrTap(select_levels_button, function(data){

                SoundManager.Play("click");

                GAME.currentStage.Fadeout();
                GAME.currentStage = GAME.stages.levels;
                GAME.currentStage.Fadein();
            });
        this.objContainer.addChild(select_levels_button);

        // next level button 
        if(GAMEINFO.isNextLevelAvailable())
        {
            var next_level_button = new PIXI.Sprite.fromImage("next_level_button.png");
            next_level_button.position.x = GlobalScale(440); 
            next_level_button.position.y = GlobalScale(523);
            next_level_button.interactive = true;
            next_level_button.buttonMode = true;
            var hack = this;    //FIXME: need for callback
            DEVICE.ClickOrTap(next_level_button, function(data){
                    SoundManager.Play("click");
                    GAME.currenLevelId = GAME.currenLevelId + 1;
                    GAME.currentStage.Fadeout();
                    GAME.currentStage = GAME.stages.game;
                    GAME.currentStage.Fadein();
                });
            this.objContainer.addChild(next_level_button);
        }

    }

    this.Update = function()
    {
        // there is no need update object when it hide
        if(!this.objContainer.visible)
            return;

        // time fade effect
        if(this.timeFade != undefined)
        {
            this.timeFade.effect.Update();
            this.timeFade.text.setText(this.timeFade.effect.getValue().toString());
        }

        // energy score effect
        if(this.energyFade !== undefined)
        {
            this.energyFade.effect.Update();
            this.energyFade.text.setText(this.energyFade.effect.getValue().toString());
        }

        // total score effect
        if(this.scoreFade !== undefined)
        {
            this.scoreFade.effect.Update();
            this.scoreFade.text.setText(this.scoreFade.effect.getValue().toString());
        }

    }

    this.Free = function()
    {
        this.game_paused_music.Free();

        if(this.timeFade.text !== undefined)
        {
            this.objContainer.removeChild(this.timeFade.text);
            this.timeFade = undefined;
        }

        if(this.energyFade.text !== undefined)
        {
            this.objContainer.removeChild(this.energyFade.text);
            this.energyFade = undefined;
        }

        if(this.scoreFade.text !== undefined)
        {
            this.objContainer.removeChild(this.scoreFade.text);
            this.scoreFade = undefined;
        }

        // remove all childs
        removeAllChild(this.objContainer); 

        this.rootContainer.removeChild(this.objContainer);
        objContainer = undefined;

    }

    // hide object
    this.Hide = function()
    {
        this.objContainer.visible = false;
    }
    
    // show dialog
    // energyScore - value of score from collect energy particles
    // timeScore - value of score for time
    this.Show = function(energyScore, timeScore)
    {
        SoundManager.Play("onlevelcomplete");
        this.game_paused_music.SetState(!SoundManager.GetMute());
        this.objContainer.visible = true;

        // time fade
        var timeFadeSpeed= 20; // speed of time effect
        var fontScale = GlobalScale(45);
        this.timeFade.text= new PIXI.BitmapText("0", {font: fontScale+"px game_top_menu_font"});
        this.timeFade.text.position.x = GlobalScale(350);
        this.timeFade.text.position.y = GlobalScale(355); 
        this.objContainer.addChild(this.timeFade.text);
        this.timeFade.effect = new FadeInOut();
        this.timeFade.effect.Init(0, timeScore, timeFadeSpeed);

        // this energy fade
        var energyFadeSpeed = 40; // speed of fade effect
        this.energyFade.text= new PIXI.BitmapText("0", {font: fontScale+"px game_top_menu_font"});
        this.energyFade.text.position.x = GlobalScale(350);
        this.energyFade.text.position.y = GlobalScale(405); 
        this.objContainer.addChild(this.energyFade.text);
        this.energyFade.effect = new FadeInOut();
        this.energyFade.effect.Init(0, energyScore, energyFadeSpeed);

        // score fade effect
        var scoreFadeSpeed = 30;
        this.scoreFade.text= new PIXI.BitmapText("0", {font: fontScale+"px game_top_menu_font"});
        this.scoreFade.text.position.x = GlobalScale(350);
        this.scoreFade.text.position.y = GlobalScale(460);
        this.objContainer.addChild(this.scoreFade.text);
        this.scoreFade.effect = new FadeInOut();
        this.scoreFade.effect.Init(0, energyScore + timeScore, scoreFadeSpeed);

    }
}
