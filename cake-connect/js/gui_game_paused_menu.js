// Implement game paused menu
function GamePausedMenu()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;

    this.resume_game_button = {"sprite":undefined, "effect": undefined, "scale": 1.0};
    this.game_paused_music = undefined; 
    this.reset_game_button = {"sprite": undefined, "effect": undefined, "scale": 1.0}; //FIXME: move to button class
    this.select_levels_button = {"sprite": undefined, "effect": undefined, "scale": 1.0}; //FIXME: move to button class

    // return true if object visible
    this.IsVisible = function()
    {
        return this.objContainer.visible;
    }

    // hide object 
    this.Hide = function()
    {
        this.objContainer.visible = false;
    }

    this.Show= function()
    {
        this.game_paused_music.SetState(!SoundManager.GetMute());
        this.objContainer.visible = true;
    }

    this.Update = function()
    {
        if(this.IsVisible() === false)
            return;

        // update resume game button 
        this.resume_game_button.effect.Update();
        this.resume_game_button.sprite.scale.x = this.resume_game_button.scale + this.resume_game_button.effect.GetValue();
        this.resume_game_button.sprite.scale.y = this.resume_game_button.scale + this.resume_game_button.effect.GetValue();

        // update reset game button
        this.reset_game_button.sprite.scale.x = this.reset_game_button.scale;
        this.reset_game_button.sprite.scale.y = this.reset_game_button.scale;

        // select levels button
        this.select_levels_button.sprite.scale.x = this.select_levels_button.scale;
        this.select_levels_button.sprite.scale.y = this.select_levels_button.scale;
        
        // button music
        this.game_paused_music.Update();

    }

    this.Free = function()
    {
        // free resume game button
        this.resume_game_button.effect = undefined; 
        this.resume_game_button.scale = 1.0;
        this.objContainer.removeChild(this.resume_game_button.sprite);
        this.resume_game_button.sprite = undefined;

        // free select levels button
        this.objContainer.removeChild(this.select_levels_button.sprite);
        this.select_levels_button.sprite = undefined;
        this.select_levels_button.scale = 1.0;
        
        // free music button
        this.game_paused_music.Free();

        // remove all other objects
        removeAllChild(this.objContainer);
        this.rootContainer.removeChild(this.objContainer);
        this.objContainer = undefined;
    }


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

        // game paused label
        var game_paused_label= new PIXI.Sprite.fromImage("game_paused_label.png");
        game_paused_label.position.x = GlobalScale(240);
        game_paused_label.position.y = GlobalScale(280);
        this.objContainer.addChild(game_paused_label);

        // resume button
        this.resume_game_button.effect = new ShiverEffect();
        this.resume_game_button.effect.Init(0.01, 0.0, 0.3);

        this.resume_game_button.sprite = new PIXI.Sprite.fromImage("resume_game_button.png");
        this.resume_game_button.sprite.anchor.x = 0.5;
        this.resume_game_button.sprite.anchor.y = 0.5;
        this.resume_game_button.sprite.position.x = GlobalScale(235) + this.resume_game_button.sprite.width/2;
        this.resume_game_button.sprite.position.y = GlobalScale(335)+ this.resume_game_button.sprite.height/2;
        this.resume_game_button.sprite.interactive = true;
        this.resume_game_button.sprite.buttonMode = true;
        DEVICE.ClickOrTap(this.resume_game_button.sprite, function(data){
                
                SoundManager.Play("click");
                // resume game 
                GAME.Resume();
                GAME.stages.game.gui.gamePausedMenu.Hide();
                });
        this.resume_game_button.sprite.mouseout = function()
        {
            var alias = GAME.stages.game.gui.gamePausedMenu;
            alias.resume_game_button.scale = 1.0 - 0.05;
        }
        this.resume_game_button.sprite.mouseover = function()
        {
            var alias = GAME.stages.game.gui.gamePausedMenu;
            alias.resume_game_button.scale = 1.0 + 0.05;
        }
        this.objContainer.addChild(this.resume_game_button.sprite);


        // reset game button
        this.reset_game_button.sprite = new PIXI.Sprite.fromImage("reset_game_button.png");
        this.reset_game_button.sprite.anchor.x = 0.5;
        this.reset_game_button.sprite.anchor.y = 0.5;
        this.reset_game_button.sprite.position.x = this.reset_game_button.sprite.width/2 + GlobalScale(440); 
        this.reset_game_button.sprite.position.y = this.reset_game_button.sprite.height/2 + GlobalScale(523);
        this.reset_game_button.sprite.interactive = true;
        this.reset_game_button.sprite.buttonMode = true;
        DEVICE.ClickOrTap(this.reset_game_button.sprite, function(data){
                SoundManager.Play("click");
                GAME.ResetLevel();
                });
        this.reset_game_button.sprite.mouseout = function()
        {
            var alias = GAME.stages.game.gui.gamePausedMenu;
            alias.reset_game_button.scale = 1.0 - 0.05;
        }
        this.reset_game_button.sprite.mouseover = function()
        {
            var alias = GAME.stages.game.gui.gamePausedMenu;
            alias.reset_game_button.scale = 1.0 + 0.05;
        }
        this.objContainer.addChild(this.reset_game_button.sprite);


        // select levels button 
        this.select_levels_button.sprite = new PIXI.Sprite.fromImage("select_levels_button.png");
        this.select_levels_button.sprite.anchor.x = 0.5;
        this.select_levels_button.sprite.anchor.y = 0.5;
        this.select_levels_button.sprite.position.x = this.select_levels_button.sprite.width/2 + GlobalScale(260); 
        this.select_levels_button.sprite.position.y = this.select_levels_button.sprite.height/2 + GlobalScale(538);
        this.select_levels_button.sprite.interactive = true;
        this.select_levels_button.sprite.buttonMode = true;
        DEVICE.ClickOrTap(this.select_levels_button.sprite, function(data){
                SoundManager.Play("click");
                GAME.currentStage.Fadeout();
                GAME.currentStage = GAME.stages.levels;
                GAME.currentStage.Fadein();
                });
        this.select_levels_button.sprite.mouseout = function()
        {
            var alias = GAME.stages.game.gui.gamePausedMenu;
            alias.select_levels_button.scale = 1.0 - 0.05;
        }
        this.select_levels_button.sprite.mouseover= function()
        {
            var alias = GAME.stages.game.gui.gamePausedMenu;
            alias.select_levels_button.scale = 1.0 + 0.05;
        }

        this.objContainer.addChild(this.select_levels_button.sprite);

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

    }

}
