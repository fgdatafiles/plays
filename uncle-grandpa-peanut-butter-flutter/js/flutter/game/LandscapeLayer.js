/**
 * Created by pawel on 18.08.2014.
 */
var LandscapeLayer = function(imageId, scrollRatio, screenH, height, y)
{
    createjs.Container.call(this);

    this.m_scrollRatio = scrollRatio;
    this.m_screenH = screenH;

    var img = Main.GetImage(imageId);
    this.m_height = height || img.height;
    this.m_width = img.width;
    this.m_asset1 = new createjs.Bitmap(img);

    this.m_asset2 = this.m_asset1.clone();
    this.m_asset2.x = img.width - 1 | 0;

    this.snapToPixel = this.m_asset1.snapToPixel = this.m_asset2.snapToPixel = true;

    this.m_posX = 0;
    this.m_posY = 0;

    this.m_assetY = y || 0;
    this.m_asset1.y = this.m_asset2.y = this.m_assetY;


    this.addChild(this.m_asset1);
    this.addChild(this.m_asset2);
};

LandscapeLayer.prototype = Object.create(createjs.Container.prototype);
LandscapeLayer.prototype.constructor = LandscapeLayer;


LandscapeLayer.prototype.remove = function()
{
    this.removeAllChildren();
    this.m_asset1 = null;
    this.m_asset2 = null;
};


LandscapeLayer.prototype.updateCanvasSize = function(width, height)
{
    this.m_screenH = height;
    this.scaleX = this.scaleY = Main.SCALE;
    this.y = -this.m_posY * (this.m_height * Main.SCALE - this.m_screenH);
    this.x = this.m_posX * Main.SCALE | 0;
};


LandscapeLayer.prototype.scroll = function(dx, y)
{
    this.m_posX -= dx * this.m_scrollRatio;
    this.m_posY = y;
    this.y = -this.m_posY * (this.m_height * Main.SCALE - this.m_screenH) | 0;

    //
    if (this.m_posX < -this.m_width)
    {
        this.m_posX += this.m_width;
    }
    this.x = this.m_posX * Main.SCALE | 0;
};
