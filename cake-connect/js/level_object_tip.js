// level tool tip objects
function Level_Object_Tip()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;
    this.descr = undefined; // object description, comes from level description
    this.tip = {"font": undefined, "sprite": undefined}; // 


    this.Init = function(rootContainer, descr)
    {
        this.rootContainer = rootContainer;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootContainer.addChild(this.objContainer);

        this.descr = descr;
        
        var objAlpha = 0.5;
        // create object 
        if(this.descr[2] == "t") // text
        {
            // this.descr[3] - text itself
            var fontScale = GlobalScale(45);
            this.tip.font = new PIXI.BitmapText(this.descr[3], {font: fontScale+"px game_top_menu_font"});
            this.tip.font.position.x = this.descr[0]; // x pos
            this.tip.font.position.y = this.descr[1]; // y pos
            this.tip.font.alpha = objAlpha;
            this.objContainer.addChild(this.tip.font);
        }
        else if(this.descr[2] == "s") // sprite
        {
            this.tip.sprite = new PIXI.Sprite.fromImage(this.descr[3]);
            this.tip.sprite.anchor.x = 0.5;
            this.tip.sprite.anchor.y = 0.5;
            this.tip.sprite.rotation = this.descr[4]; // rotation
            this.tip.sprite.position.x = this.descr[0]; // x pos
            this.tip.sprite.position.y = this.descr[1]; // y pos
            this.tip.sprite.alpha = objAlpha;
            this.objContainer.addChild(this.tip.sprite);
        }
        else
        {
            console.log("Error: unknown type of tooltip");
        }

    }

    this.Update = function()
    {
    }

    this.Free = function()
    {
        
        if(this.descr[2] == "t") // text
        {
            this.objContainer.removeChild(this.tip.font)
            this.tip.font= undefined;
        }
        else if(this.descr[2] == "s")
        {
            this.objContainer.removeChild(this.tip.sprite);
            this.tip.sprite = undefined;
        }

        this.rootContainer.removeChild(this.objContainer);
        this.objContainer = undefined;

    }
}
