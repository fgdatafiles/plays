/**
 * Created by pawel on 21.10.2014.
 */
var Van = function(x, y)
{
    createjs.Container.call(this);

    this.m_info = {
        bb: {x: 20, y: 25 - 433, w: 510, h: 367},
        shapes: [{x: 55, y: 46 - 433, w: 293, h: 57}, {x: 447, y: 44 - 433, w: 58, h: 56}, {x: 24, y: 100 - 433, w: 501, h: 290}]
    };

    this.m_asset = new createjs.Sprite(Main.GetSpriteSheet("objects"));
    this.m_asset.gotoAndStop("van");
    this.addChild(this.m_asset);

    //
    this.m_shapes = [];
    for (var i = 0; i < this.m_info.shapes.length; i++)
    {
        var s = this.m_info.shapes[i];
        this.m_shapes.push({x: s.x, y: s.y, w: s.w, h: s.h});
    }
    var bb = this.m_info.bb;
    this.m_bb = {x: bb.x, y: bb.y, w: bb.w, h: bb.h};

    //
    this.m_asset.y = -this.getBounds().height;

    this.m_posX = x;
    this.m_posY = y;

    this.snapToPixel = true;

    this.updateCanvasSize();
};


Van.prototype = Object.create(createjs.Container.prototype);
Van.prototype.constructor = Van;


Van.prototype.remove = function()
{
    this.removeAllChildren();
    this.m_asset = null;
};


Van.prototype.update = function(hero)
{
    for (var i = 0; i < this.m_shapes.length; i++)
    {
        this.m_shapes[i].x = this.m_info.shapes[i].x + this.m_posX;
        this.m_shapes[i].y = this.m_info.shapes[i].y + this.m_posY;
    }
    this.m_bb.x = this.m_info.bb.x + this.m_posX;
    this.m_bb.y = this.m_info.bb.y + this.m_posY;


    // check collision with hero
    if (!hero.m_isDestroyed)
    {
        var rect = this.m_bb;
        var rectH = hero.m_bb;
        if (Collision.CheckRects(rect, rectH))
        {
            // detailed check
            for (var i = 0; i < this.m_shapes.length; i++)
            {
                rect = this.m_shapes[i];
                if (Collision.CheckRects(rect, rectH))
                {
                    for (var j = 0; j < hero.m_shapes.length; j++)
                    {
                        rectH = hero.m_shapes[j];
                        if (Collision.CheckRects(rect, rectH))
                        {
                            hero.onHitObstacle();
                            break;
                        }
                    }
                }
            }
        }
    }
};


Van.prototype.scroll = function(dx)
{
    this.m_posX -= dx;
    if (this.m_posX + this.m_width * Main.SCALE < 0)
    {
        this.remove();
        this.dispatchEvent(new createjs.Event("remove"));
    }
    this.x = this.m_posX * Main.SCALE;
};


Van.prototype.updateCanvasSize = function(width, height)
{
    this.scaleX = this.scaleY = Main.SCALE;
    this.x = this.m_posX * Main.SCALE | 0;
    this.y = this.m_posY * Main.SCALE | 0;

    this.m_width = this.getBounds().width / Main.SCALE;
};