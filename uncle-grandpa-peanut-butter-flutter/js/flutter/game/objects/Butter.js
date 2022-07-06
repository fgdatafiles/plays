/**
 * Created by pawel on 21.10.2014.
 */
var Butter = function(x, y)
{
    createjs.Container.call(this);

    this.m_hitArea = {x: 83, y: 58, w: 70, h: 120};

    this.m_anim = new createjs.Sprite(Main.GetSpriteSheet("butter"));
    this.m_anim.gotoAndPlay("idle");
    this.addChild(this.m_anim);

    this.m_bb = this.getBounds();

    this.m_posX = x;
    this.m_posY = y;

    this.m_isCollected = false;

    this.updateCanvasSize();
};


Butter.prototype = Object.create(createjs.Container.prototype);
Butter.prototype.constructor = Butter;


Butter.prototype.remove = function()
{
    if (this.m_anim)
    {
        this.m_anim.stop();
        this.removeAllChildren();
        this.m_anim = null;
    }
};


Butter.prototype.update = function(hero)
{
    //check collision with hero
    if (!this.m_isCollected && !hero.m_isDestroyed)
    {
        var rect = this.getHitArea();
        var rectH = hero.m_bb;
        if (Collision.CheckRects(rect, rectH))
        {
            //detailed check
            for (var i = 0; i < hero.m_shapes.length; i++)
            {
                rectH = hero.m_shapes[i];
                if (Collision.CheckRects(rect, rectH))
                {
                    this.m_isCollected = true;
                    this.m_anim.gotoAndPlay("pop");

                    var me = this;
                    this.m_anim.addEventListener("animationend", function(e){me.onPopAnimEnd(e);});

                    this.dispatchEvent(new createjs.Event("collect"));

                    SoundsManager.PlaySound("splat");
                    break;
                }
            }
        }
    }
};


Butter.prototype.onPopAnimEnd = function(e)
{
    this.m_anim.removeAllEventListeners("animationend");
    this.remove();
    this.dispatchEvent(new createjs.Event("remove"));
};


Butter.prototype.getHitArea = function()
{
    return {x: this.m_posX + this.m_hitArea.x, y: this.m_posY + this.m_hitArea.y,
        w: this.m_hitArea.w, h: this.m_hitArea.h};
};


Butter.prototype.scroll = function(dx)
{
    this.m_posX -= dx;
    if (this.m_posX + this.m_width * Main.SCALE < -100)
    {
        this.remove();
        this.dispatchEvent(new createjs.Event("remove"));
    }
    this.x = this.m_posX * Main.SCALE;
};


Butter.prototype.updateCanvasSize = function(width, height)
{
    this.scaleX = this.scaleY = Main.SCALE;
    this.x = this.m_posX * Main.SCALE | 0;
    this.y = this.m_posY * Main.SCALE | 0;

    this.m_width = this.m_bb.width / Main.SCALE;
};