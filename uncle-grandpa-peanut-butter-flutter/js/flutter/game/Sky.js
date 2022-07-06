/**
 * Created by pawel on 21.10.2014.
 */
var Sky = function()
{
    createjs.Container.call(this);
    var size = Main.GetCanvasSize();
    var img = Main.GetImage("sky");
    this.m_sky = new createjs.Shape();
    this.m_sky.graphics.beginBitmapFill(img, "repeat").drawRect(0, 0, 800, img.height).endFill();
    this.m_sky.cache(0, 0, 800, img.height);
    this.m_sky.scaleY = 1.3;
    this.addChild(this.m_sky);
};


Sky.prototype = Object.create(createjs.Container.prototype);
Sky.prototype.constructor = Sky;


Sky.prototype.updateCanvasSize = function(width, height)
{
    this.scaleX = width / 800;
    this.scaleY = this.scaleX * 1.3;
};


Sky.prototype.scroll = function(dx, y)
{

};

