// game fail gui
function GameFailMenu()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;
    this.game_paused_music = undefined;

    // game states textures
    this.states = [ {"sprite":undefined, "x":GlobalScale(96),    "y":GlobalScale(352), "texture":"energy_too_low.png"},
                    {"sprite":undefined, "x":GlobalScale(118),   "y":GlobalScale(366), "texture":"time_is_over.png"},
                    {"sprite":undefined, "x":GlobalScale(105),   "y":GlobalScale(351), "texture":"you_lose_object.png"} ];

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

	// label 
	var level_fail_label = new PIXI.Sprite.fromImage("level_fail_label.png");
	level_fail_label.position.x = GlobalScale(250);
	level_fail_label.position.y = GlobalScale(275);
	this.objContainer.addChild(level_fail_label);

	// second background  
	var second_bg = new PIXI.Sprite.fromImage("sub_bg.png");
	second_bg.position.x = GlobalScale(90); 
	second_bg.position.y = GlobalScale(333);
	this.objContainer.addChild(second_bg);

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

        // reset game button
        var reset_game_button = new PIXI.Sprite.fromImage("reset_game_button.png");
        reset_game_button.position.x = GlobalScale(440); 
        reset_game_button.position.y = GlobalScale(523);
        reset_game_button.interactive = true;
        reset_game_button.buttonMode = true;
        DEVICE.ClickOrTap(reset_game_button, function(data){
                SoundManager.Play("click");
                GAME.ResetLevel();
                });
        this.objContainer.addChild(reset_game_button);

        // game states textures
        for(var st = 0; st < this.states.length; st++)
        {
            this.states[st].sprite = new PIXI.Sprite.fromImage(this.states[st].texture);
            this.states[st].sprite.position.x = this.states[st].x;
            this.states[st].sprite.position.y = this.states[st].y;
            this.states[st].sprite.visible = false;
            this.objContainer.addChild(this.states[st].sprite);
        }

    }

    this.Update = function()
    {
    }

    this.Free = function()
    {
        this.game_paused_music.Free();

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
    this.Show = function()
    {
        SoundManager.Play("onlevelfail");
        this.game_paused_music.SetState(!SoundManager.GetMute());
        if(GAME.stateMonitor.currentState === GAME.stateMonitor.states.lossBlock)
            this.states[2].sprite.visible = true;
        else if(GAME.stateMonitor.currentState === GAME.stateMonitor.states.timeIsOver)
            this.states[1].sprite.visible = true;
        else if(GAME.stateMonitor.currentState === GAME.stateMonitor.states.energyTooLow)
            this.states[0].sprite.visible = true;

        this.objContainer.visible = true;
    }
}
