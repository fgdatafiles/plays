/**
 * Created by pawel on 18.08.2014.
 */
var DecorLayer = function(scrollRatio, screenH, height)
{
    createjs.Container.call(this);

    this.m_scrollRatio = scrollRatio;
    this.m_screenH = screenH;

    this.m_height = height;

    this.m_decor1 = new Decoration(100, height - 260, 1000);
    this.m_decor2 = new Decoration(1000, height - 280, 1000);

    //this.snapToPixel = this.m_decor1.snapToPixel = this.m_decor2.snapToPixel = true;

    this.m_posX = 0;
    this.m_posY = 0;


    this.addChild(this.m_decor1);
    this.addChild(this.m_decor2);
};

DecorLayer.prototype = Object.create(createjs.Container.prototype);
DecorLayer.prototype.constructor = LandscapeLayer;


DecorLayer.prototype.remove = function()
{
    this.removeAllChildren();
    this.m_decor1 = null;
    this.m_decor2 = null;
};


DecorLayer.prototype.updateCanvasSize = function(width, height)
{
    this.m_screenH = height;
    //this.scaleX = this.scaleY = Main.SCALE;
    this.y = -this.m_posY * (this.m_height * Main.SCALE - this.m_screenH);

    this.m_decor1.updateCanvasSize(width, height);
    this.m_decor2.updateCanvasSize(width, height);
};


DecorLayer.prototype.scroll = function(dx, y)
{
    this.m_decor1.scroll(dx * this.m_scrollRatio);
    this.m_decor2.scroll(dx * this.m_scrollRatio);

    this.m_posY = y;
    this.y = -this.m_posY * (this.m_height * Main.SCALE - this.m_screenH);
};
