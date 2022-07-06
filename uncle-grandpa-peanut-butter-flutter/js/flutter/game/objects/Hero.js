/**
 * Created by pawel on 21.10.2014.
 */
var Hero = function(screenH)
{
    createjs.Container.call(this);

    this.ANIM_DOWN = "uncle_down";
    this.ANIM_UP = "uncle_up";
    this.ANIM_HIT = "uncle_hit";

    this.INFO = {
        "uncle_down": {dx: 0, dy: 0, bb: {x:98, y: 60, w: 110, h: 130},
            shapes: [{x: 135, y: 62, w: 52, h: 45}, {x: 135, y: 87, w: 70, h: 100}, {x: 100, y: 125, w: 52, h: 62}]},
        "uncle_up": {dx: 0, dy: -8, bb: {x:98, y: 60, w: 110, h: 130},
            shapes: [{x: 135, y: 62, w: 52, h: 45}, {x: 135, y: 87, w: 70, h: 100}, {x: 100, y: 125, w: 52, h: 62}]},
        "uncle_hit": {dx: 62, dy: -26}
    };

    this.m_animId = "";
    this.m_anim = new createjs.Sprite(Main.GetSpriteSheet("uncle"));
    this.m_anim.scaleX = this.m_anim.scaleY = 0.8;
    this.addChild(this.m_anim);
    this.setAnim(this.ANIM_DOWN);

    this.m_screenH = screenH;

    this.m_speedXDest = 4;
    this.m_speedX = 4;
    this.m_speedY = 0;
    this.m_level = 0;
    this.m_isFlapping = false;
    this.m_isDestroyed = false;

    this.resizeShapes();

    this.setPos(-300, this.m_screenH * 0.2);
};


Hero.prototype = Object.create(createjs.Container.prototype);
Hero.prototype.constructor = Hero;


Hero.prototype.remove = function()
{
    this.removeAllChildren();
};


Hero.prototype.resizeShapes = function()
{
    this.scaleX = this.scaleY = Main.SCALE;
};


Hero.prototype.update = function()
{
    this.m_speedX += (this.m_speedXDest - this.m_speedX) * 0.03 * ScreenGame.s_ratio;

    if (this.m_x < 10)
    {
        this.m_speedY = 0;
        this.m_x += (10 - this.m_x) * 0.1 * ScreenGame.s_ratio;
        if (10 - this.m_x < 5)
        {
            this.m_x = 10;
        }
    }

    this.m_y += this.m_speedY * ScreenGame.s_ratio;
    if (this.m_y < 0)
    {
        this.m_y = 0;
        this.m_speedY = 0;
    }
    else if (this.m_y > this.m_screenH - 150 && !this.m_isDestroyed)
    {
        //hero under bottom border
        this.m_y = this.m_screenH - 150;
        this.m_speedY = 0;
        this.onHitObstacle();
    }
    else if (this.m_y > this.m_screenH + 10)
    {
        this.m_y = this.m_screenH + 10;
        this.m_speedY = 0;

        //
        if (this.m_isDestroyed)
        {
            //finish game
            ScreenGame.OnGameOver();
        }
    }

    //update shapes and bounds
    if (this.m_shapes)
    {
        for (var i = 0; i < this.m_shapes.length; i++)
        {
            this.m_shapes[i].x = this.m_info.shapes[i].x + this.m_x;
            this.m_shapes[i].y = this.m_info.shapes[i].y + this.m_y;
        }
        this.m_bb.x = this.m_info.bb.x + this.m_x;
        this.m_bb.y = this.m_info.bb.y + this.m_y;
    }

    //gravity
    this.applyGravity();

    //
    this.setPos(this.m_x, this.m_y);
};


Hero.prototype.setAnim = function(animId)
{
    if (this.m_animId != animId)
    {
        this.m_animId = animId;

        this.m_info = this.INFO[this.m_animId];
        this.m_anim.gotoAndPlay(this.m_animId);
        this.m_anim.x = this.m_info.dx;
        this.m_anim.y = this.m_info.dy;


        this.m_shapes = null;
        this.m_bb = null;
        if (this.m_info.shapes)
        {
            this.m_shapes = [];
            var sc = this.m_anim.scaleX;
            for (var i = 0; i < this.m_info.shapes.length; i++)
            {
                var s = this.m_info.shapes[i];
                this.m_shapes.push({x: s.x * sc, y: s.y * sc, w: s.w * sc, h: s.h * sc});
            }
            var bb = this.m_info.bb;
            this.m_bb = {x: bb.x * sc, y: bb.y * sc, w: bb.w * sc, h: bb.h * sc};
        }
    }
};


Hero.prototype.updateCanvasSize = function(width, height)
{
    this.resizeShapes();

    this.x = this.m_x * Main.SCALE;
    this.y = this.m_y * Main.SCALE;
};


Hero.prototype.setPos = function(x, y)
{
    this.m_x = x;
    this.m_y = y;

    this.x = this.m_x * Main.SCALE;
    this.y = this.m_y * Main.SCALE;
};


Hero.prototype.applyGravity = function()
{
    if (this.m_isDestroyed)
    {
        this.m_speedY += 1;
    }
    else
    {
        this.m_speedY += (0.3 + 0.4 * this.m_level);

        if (this.m_speedY > 8)
        {
            this.m_speedY = 8;
        }
    }

};


Hero.prototype.startFlap = function()
{
    if (!this.m_isDestroyed)
    {
        this.m_isFlapping = true;
        if (this.m_isFlapping)
        {
            this.m_speedY -= (6 + 8 * this.m_level);
            if (this.m_speedY < -14)
            {
                this.m_speedY = -14;
            }
            this.m_animId = "";
            this.setAnim(this.ANIM_UP);

            SoundsManager.PlaySound("arm_flap");
        }
    }
};


Hero.prototype.stopFlap = function()
{
    this.m_isFlapping = false;
};


Hero.prototype.getY = function()
{
    return Math.min(1, Math.max(0, this.m_y / this.m_screenH));
};


Hero.prototype.setLevel = function(level)
{
    this.m_level = level;
//    var speeds = [4, 5, 6.5, 8, 10];
//    this.m_speedXDest = speeds[this.m_level];
    this.m_speedXDest = 6 + 8 * this.m_level;
};


Hero.prototype.onHitObstacle = function()
{
    this.m_speedXDest = 0;
    this.m_isDestroyed = true;
    this.m_speedY = -24;
    this.setAnim(this.ANIM_HIT);

    SoundsManager.PlaySound("crash");
};