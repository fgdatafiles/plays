// select levels stage 
function MainMenuStageInit()
{	
    // init stage
    this.stage = new PIXI.Stage(0x000000, true);		
    this.backgrouds = new GameBackgrounds(); 
    this.gui = new MainMenuStageGui();
    this.isInited = false;

    // called when stage is show
    this.Fadein = function()
    {	
        this.backgrouds.Init(this.stage);
        this.gui.Init(this.stage);
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
function MainMenuStageGui()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;
    
    this.play_game_button= {"sprite":undefined, "effect": undefined, "scale": 1.0};
    this.game_paused_music = undefined; 
    this.about_button = {"sprite": undefined, "effect": undefined, "scale": 1.0}; //FIXME: move to button class
    this.reset_game_score = {"sprite": undefined, "effect": undefined, "scale": 1.0}; //FIXME: move to button class
    this.stageFadeInEffect = undefined; // fade effect when switch to this stage 

    this.clearGameDataDialog= undefined;
    this.aboutDialog = undefined;

    this.flyingObj = undefined; 
    this.flyingObjConf = undefined;

    // Init function
    this.Init = function(rootContainer)
    {
        this.flyingObjConf = [  {pos:{x:106, y:290}, texture:"mm_donut.png", rotation: 0.002, speed: 0.0005}, 
                            {pos:{x:506, y:246}, texture:"mm_cupcake.png", rotation: 0.001, speed: 0.0002},
                            {pos:{x:100, y:864}, texture:"mm_cookie.png", rotation: -0.0005, speed: 0.0001} ];

        this.flyingObj = new Array();

        this.rootContainer = rootContainer;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootContainer.addChild(this.objContainer);
    

        // background for menu 
        var bg = new PIXI.Sprite.fromImage("mm_cake.png");
        bg.position.x = GlobalScale(5);
        bg.position.y = GlobalScale(209);
        this.objContainer.addChild(bg);

        // game logo
        var logo = new PIXI.Sprite.fromImage("logo_green.png");
        logo.position.x = GlobalScale(116);
        logo.position.y = GlobalScale(355);
        this.objContainer.addChild(logo);

        // play button
        this.play_game_button.effect = new ShiverEffect();
        this.play_game_button.effect.Init(0.01, 0.0, 0.3);
        this.play_game_button.sprite = new PIXI.Sprite.fromImage("mm_play_btn.png");
        this.play_game_button.sprite.anchor.x = 0.5;
        this.play_game_button.sprite.anchor.y = 0.5;
        this.play_game_button.sprite.position.x = GlobalScale(235) + this.play_game_button.sprite.width/2;
        this.play_game_button.sprite.position.y = GlobalScale(564) + this.play_game_button.sprite.height/2;
        this.play_game_button.sprite.interactive = true;
        this.play_game_button.sprite.buttonMode = true;
        DEVICE.ClickOrTap(this.play_game_button.sprite, function(data){

                //FIXME: need fix
                SoundManager.PlayContiniousSound("maintheme");
                GAME.currentStage.Fadeout();
                GAME.currentStage = GAME.stages.levels;
                GAME.currentStage.Fadein();

                });
        this.play_game_button.sprite.mouseout = function()
        {
            var alias = GAME.stages.mainmenu.gui;
            alias.play_game_button.scale = 1.0 - 0.05;
        }
        this.play_game_button.sprite.mouseover = function()
        {
            var alias = GAME.stages.mainmenu.gui;
            alias.play_game_button.scale = 1.0 + 0.05;
        }
        this.objContainer.addChild(this.play_game_button.sprite);

        // music enabled/disabled
        var musicButtonTextures = 	{"Enable":"mm_music_enabled.png",
            "Disable":"mm_music_disabled.png"};
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
        this.game_paused_music.SetPosition(GlobalScale(239), GlobalScale(824));
        this.game_paused_music.SetState(!SoundManager.GetMute());

        // about button
        this.about_button.sprite = new PIXI.Sprite.fromImage("mm_about_btn.png");
        this.about_button.sprite.anchor.x = 0.5;
        this.about_button.sprite.anchor.y = 0.5;
        this.about_button.sprite.position.x = this.about_button.sprite.width/2 + GlobalScale(496) - 10000000000000000; 
        this.about_button.sprite.position.y = this.about_button.sprite.height/2 + GlobalScale(824);
        this.about_button.sprite.interactive = true;
        this.about_button.sprite.buttonMode = true;
        DEVICE.ClickOrTap(this.about_button.sprite, function(data){
                SoundManager.Play("click");
                var alias = GAME.stages.mainmenu.gui;
                alias.aboutDialog.Show();

                });
        this.about_button.sprite.mouseout = function()
        {
            var alias = GAME.stages.mainmenu.gui;
            alias.about_button.scale = 1.0 - 0.05;
        }
        this.about_button.sprite.mouseover = function()
        {
            var alias = GAME.stages.mainmenu.gui;
            alias.about_button.scale = 1.0 + 0.05;
        }
        this.objContainer.addChild(this.about_button.sprite);

        // clear game data button
        this.reset_game_score.sprite = new PIXI.Sprite.fromImage("mm_clear_btn.png");
        this.reset_game_score.sprite.anchor.x = 0.5;
        this.reset_game_score.sprite.anchor.y = 0.5;
        this.reset_game_score.sprite.position.x = this.reset_game_score.sprite.width/2 + GlobalScale(367); 
        this.reset_game_score.sprite.position.y = this.reset_game_score.sprite.height/2 + GlobalScale(824);
        this.reset_game_score.sprite.interactive = true;
        this.reset_game_score.sprite.buttonMode = true;
        DEVICE.ClickOrTap(this.reset_game_score.sprite, function(data){

                SoundManager.Play("click");
                var alias = GAME.stages.mainmenu.gui;
                alias.clearGameDataDialog.Show();
            });
        this.reset_game_score.sprite.mouseout = function()
        {
            var alias = GAME.stages.mainmenu.gui;
            alias.reset_game_score.scale = 1.0 - 0.05;
        }
        this.reset_game_score.sprite.mouseover= function()
        {
            var alias = GAME.stages.mainmenu.gui;
            alias.reset_game_score.scale = 1.0 + 0.05;
        }
        this.objContainer.addChild(this.reset_game_score.sprite);

        // clear game data dialog
        this.clearGameDataDialog = new ClearGameData();
        this.clearGameDataDialog.Init(this.objContainer);
        this.clearGameDataDialog.Hide();

        // clear game data dialog
        this.aboutDialog = new AboutGameDialog();
        this.aboutDialog.Init(this.objContainer);
        this.aboutDialog.Hide();

        

        for(var i = 0; i < this.flyingObjConf.length; ++i)
        {
            var obj = new PIXI.Sprite.fromImage(this.flyingObjConf[i].texture);
            obj.anchor.x = 0.5;
            obj.anchor.y = 0.5;
            obj.position.x = GlobalScale(this.flyingObjConf[i].pos.x);
            obj.position.y = GlobalScale(this.flyingObjConf[i].pos.y);
            this.objContainer.addChild(obj);
            this.flyingObj.push(obj);
        }

        // MUST BE LAST !!!
        this.stageFadeInEffect = new StageFadeEffect();
        this.stageFadeInEffect.Init(this.objContainer, -0.02);

    }

    this.Update = function()
    {
        if(this.clearGameDataDialog.IsVisible())
        {
            this.clearGameDataDialog.Update();
        }
        else if(this.aboutDialog.IsVisible())
        {
            this.aboutDialog.Update();
        }
        else
        {
            this.stageFadeInEffect.Update();

            // update reset game button
            this.about_button.sprite.scale.x = this.about_button.scale;
            this.about_button.sprite.scale.y = this.about_button.scale;

            // update resume game button 
            this.play_game_button.effect.Update();
            this.play_game_button.sprite.scale.x = this.play_game_button.scale + this.play_game_button.effect.GetValue();
            this.play_game_button.sprite.scale.y = this.play_game_button.scale + this.play_game_button.effect.GetValue();

            // button music
            this.game_paused_music.Update();

            // reset game score button
            this.reset_game_score.sprite.scale.x = this.reset_game_score.scale;
            this.reset_game_score.sprite.scale.y = this.reset_game_score.scale;

            // let flying objects fly:
            var centerScreen = {x: Screen.VirtualScrW / 2, y:Screen.VirtualScrH / 2}; // screen center
            for(var i =0; i < this.flyingObj.length; ++i)
            {
                // calculate x
                var dx = this.flyingObjConf[i].speed * (this.flyingObj[i].position.x - centerScreen.x);
                this.flyingObj[i].position.x = this.flyingObj[i].position.x + dx;

                // calculate y
                var dy = this.flyingObjConf[i].speed * (this.flyingObj[i].position.y - centerScreen.y);
                this.flyingObj[i].position.y = this.flyingObj[i].position.y + dy;

                this.flyingObj[i].rotation += this.flyingObjConf[i].rotation;
            }

        }
    }

    this.Free = function()
    {
        // clear game data dialog
        this.clearGameDataDialog.Free();
        this.clearGameDataDialog= undefined;

        // about dialog
        this.aboutDialog.Free();
        this.aboutDialog= undefined;

        // fade effect
        this.stageFadeInEffect.Free();
        this.stageFadeInEffect = undefined;

        // free resume game button
        this.play_game_button.effect = undefined; 
        this.play_game_button.scale = 1.0;
        this.objContainer.removeChild(this.play_game_button.sprite);
        this.play_game_button.sprite = undefined;

        // free music button
        this.game_paused_music.Free();

        // free select levels button
        this.objContainer.removeChild(this.reset_game_score.sprite);
        this.reset_game_score.sprite = undefined;
        this.reset_game_score.scale = 1.0;

        this.rootContainer.removeChild(this.objContainer);
        this.objContainer = undefined;
    }
}

