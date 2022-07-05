// Implement game paused menu
function AboutGameDialog()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;

    this.game_paused_music = undefined; 
    this.yes_button = {"sprite": undefined, "effect": undefined, "scale": 1.0}; //FIXME: move to button class

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
        this.objContainer.visible = true;
    }

    this.Update = function()
    {
        if(this.IsVisible() === false)
            return;

        // update reset game button
        this.yes_button.sprite.scale.x = this.yes_button.scale;
        this.yes_button.sprite.scale.y = this.yes_button.scale;

    }

    this.Free = function()
    {
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

        // label
        var clear_game_dialog_label= new PIXI.Sprite.fromImage("info_label.png");
        clear_game_dialog_label.position.x = GlobalScale(232);
        clear_game_dialog_label.position.y = GlobalScale(268);
        this.objContainer.addChild(clear_game_dialog_label);

        // text
        var clear_game_dialog_text = new PIXI.Sprite.fromImage("info_about.png");
        clear_game_dialog_text.position.x = GlobalScale(100);
        clear_game_dialog_text.position.y = GlobalScale(371);
        this.objContainer.addChild(clear_game_dialog_text);

        // yes button 
        this.yes_button.sprite = new PIXI.Sprite.fromImage("yes_button.png");
        this.yes_button.sprite.anchor.x = 0.5;
        this.yes_button.sprite.anchor.y = 0.5;
        this.yes_button.sprite.position.x = this.yes_button.sprite.width/2 + GlobalScale(440); 
        this.yes_button.sprite.position.y = this.yes_button.sprite.height/2 + GlobalScale(523);
        this.yes_button.sprite.interactive = true;
        this.yes_button.sprite.buttonMode = true;
        DEVICE.ClickOrTap(this.yes_button.sprite, function(data){
                SoundManager.Play("click");
                var alias = GAME.stages.mainmenu.gui; // main menu object
                alias.stageFadeInEffect.Reset();
                alias.aboutDialog.Hide();

                });
        this.yes_button.sprite.mouseout = function()
        {
            var alias = GAME.stages.mainmenu.gui.aboutDialog;
            alias.yes_button.scale = 1.0 - 0.05;
        }
        this.yes_button.sprite.mouseover = function()
        {
            var alias = GAME.stages.mainmenu.gui.aboutDialog;
            alias.yes_button.scale = 1.0 + 0.05;
        }
        this.objContainer.addChild(this.yes_button.sprite);

    }

}
