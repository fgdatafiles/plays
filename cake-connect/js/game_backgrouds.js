// switch game backgrouds
function GameBackgrounds()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;
    this.bgList = ["bg_1.png", "bg_2.png", "bg_3.png"];
    this.bg = undefined;
    this.currentId = undefined;

    this.Init = function(rootContainer)
    {
        this.rootContainer = rootContainer;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootContainer.addChild(this.objContainer);

        this.bg = new Array();

        for(var i = 0; i < this.bgList.length; ++i)
        {
            var background = new PIXI.Sprite.fromImage(this.bgList[i]);
            background.position.x = GlobalScale(0);
            background.position.y = GlobalScale(0);
            background.visible = false;
            this.objContainer.addChild(background);
            this.bg.push(background);
        }
    }
    
    // show background relative to current completed level
    this.Show = function()
    {
        if(this.currentId != undefined)
            this.bg[this.currentId].visible = false;

        this.currentId = GAMEINFO.currentCompletedLevelsNum() % this.bgList.length;
        this.bg[this.currentId].visible = true;
    }

    this.Free = function()
    {
        removeAllChild(this.objContainer);

        this.bg = undefined;
        this.currentId = undefined;

        this.rootContainer.removeChild(this.objContainer);
        this.objContainer = undefined;
    }

    this.Update = function()
    {
    }
    
    this.addInteractive = function()
    {
        this.objContainer.interactive = true;
        this.objContainer.buttonMode = true;
        DEVICE.ClickOrTap(this.objContainer, function(data){

                var x = Math.round(data.global.x);
                var y = Math.round(data.global.y);
                GAME.Level.SpawnNextObject(x, 0);

                });
    }
}
