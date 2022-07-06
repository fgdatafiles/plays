/**
 * Created by pawel on 21.10.2014.
 */
var PopUpObject = function(x, y)
{
    createjs.Container.call(this);

    this.TYPES = ["tiger1", "tiger2", "face"];

    this.m_assets = [];
    var obj, bb;
    obj = new createjs.Sprite(Main.GetSpriteSheet("objects"));
    obj.gotoAndStop("tiger1");
    this.m_assets["tiger1"] = obj;

    obj = new createjs.Sprite(Main.GetSpriteSheet("objects"));
    obj.gotoAndStop("tiger2");
    this.m_assets["tiger2"] = obj;

    obj = new createjs.Sprite(Main.GetSpriteSheet("face"));
    obj.gotoAndStop("face");
    this.m_assets["face"] = obj;

    this.m_type = "";
    this.m_counter = 0;
    this.m_delay = 1;

    this.m_posX = x;
    this.m_posY = this.m_y0 = y;

    this.updateCanvasSize();
};


PopUpObject.prototype = Object.create(createjs.Container.prototype);
PopUpObject.prototype.constructor = PopUpObject;


PopUpObject.prototype.scroll = function(dx)
{
//    if (this.m_posX + this.m_width * Main.SCALE > -50)
    if (this.m_posX + this.m_width > -50)
    {
        this.m_posX -= dx;
    }
    else if (this.m_delay == 0)
    {
        this.m_delay = 20 + Math.random() * 20 | 0;
        this.m_delay *= 1 + ScreenGame.s_level;
    }

    this.x = this.m_posX * Main.SCALE;
};


PopUpObject.prototype.update = function()
{
    if (this.m_delay > 0)
    {
        this.m_delay -= ScreenGame.s_ratio;
        if (this.m_delay <= 0)
        {
            this.m_delay = 0;
            this.init();
        }
    }
    else
    {
        this.m_posY += (this.m_destY - this.m_posY) * 0.15 * ScreenGame.s_ratio;
        this.y = this.m_posY * Main.SCALE;
    }


    if (this.m_counter > 0)
    {
        this.m_counter -= ScreenGame.s_ratio;
        if (this.m_counter <= 0)
        {
            this.m_destY = this.m_y0;
        }
    }
};


PopUpObject.prototype.init = function()
{
    //remove prev child
    if (this.m_asset)
    {
        this.m_asset.stop();
        this.removeChild(this.m_asset);
    }

    //
    do
    {
        var type = this.TYPES[Math.random() * 3 | 0]
    }
    while(this.m_type == type);
    this.m_type = type;

    this.m_asset = this.m_assets[this.m_type];
    this.addChild(this.m_asset);
    this.m_posX = 100 + Math.random() * 200 | 0;
    this.m_posY = this.m_y0;
    var bb = this.m_asset.getBounds();
    this.m_width = bb.width;
    this.m_destY = this.m_y0 - bb.height;
    this.m_counter = 40 + Math.random() * 20 | 0;

    if (this.m_type == "face")
    {
        this.m_asset.gotoAndPlay("face");
        SoundsManager.PlaySound("funny_face");
    }
    else
    {
        SoundsManager.PlaySound("tiger");
    }

    //
    this.x = this.m_posX * Main.SCALE;
    this.y = this.m_posY * Main.SCALE;
};


PopUpObject.prototype.updateCanvasSize = function(width, height)
{
    this.scaleX = this.scaleY = Main.SCALE;
    this.x = this.m_posX * Main.SCALE;
    this.y = this.m_posY * Main.SCALE;
};