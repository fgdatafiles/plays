/**
 * Created by pawel on 21.10.2014.
 */
var Robot = function(x, y)
{
    createjs.Container.call(this);

    this.m_info = {
        bb: {x: 47, y: 23, w: 187, h: 188},
        shapes: [{x: 107, y: 23, w: 127, h: 90}, {x: 134, y: 104, w: 69, h: 105},
            {x: 48, y: 72, w: 62, h: 37}]
    };

    this.m_anim = new createjs.Sprite(Main.GetSpriteSheet("robot"));
    this.m_anim.gotoAndPlay("idle");
    this.addChild(this.m_anim);
    this.m_anim.scaleX = this.m_anim.scaleY = 0.8;

    //
    var sc = this.m_anim.scaleX;
    this.m_shapes = [];
    for (var i = 0; i < this.m_info.shapes.length; i++)
    {
        var s = this.m_info.shapes[i];
        this.m_shapes.push({x: s.x * sc, y: s.y * sc, w: s.w * sc, h: s.h * sc});
    }
    var bb = this.m_info.bb;
    this.m_bb = {x: bb.x * sc, y: bb.y * sc, w: bb.w * sc, h: bb.h * sc};

    this.m_posX = x;
    this.m_posY = y;

    this.updateCanvasSize();

};


Robot.prototype = Object.create(createjs.Container.prototype);
Robot.prototype.constructor = Robot;


Robot.prototype.remove = function()
{
    this.m_anim.stop();
    this.removeAllChildren();
    this.m_anim = null;
};


Robot.prototype.getHitArea = function()
{
    return {x: this.x + this.m_hitArea.x, y: this.y + this.m_hitArea.y,
        w: this.m_hitArea.w, h: this.m_hitArea.h};
};


Robot.prototype.update = function(hero)
{
    for (var i = 0; i < this.m_shapes.length; i++)
    {
        this.m_shapes[i].x = this.m_info.shapes[i].x + this.m_posX;
        this.m_shapes[i].y = this.m_info.shapes[i].y + this.m_posY;
    }
    this.m_bb.x = this.m_info.bb.x + this.m_posX;
    this.m_bb.y = this.m_info.bb.y + this.m_posY;

    //check collision with hero
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


Robot.prototype.scroll = function(dx)
{
    this.m_posX -= dx + 2;
    if (this.m_posX + this.m_width * Main.SCALE < -20)
    {
        this.remove();
        this.dispatchEvent(new createjs.Event("remove"));
    }

    this.x = this.m_posX * Main.SCALE | 0;
};


Robot.prototype.updateCanvasSize = function(width, height)
{
    this.scaleX = this.scaleY = Main.SCALE;
    this.x = this.m_posX * Main.SCALE | 0;
    this.y = this.m_posY * Main.SCALE | 0;

    this.m_width = 295 * 0.8 / Main.SCALE;
};