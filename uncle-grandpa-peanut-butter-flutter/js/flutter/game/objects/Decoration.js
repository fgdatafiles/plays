/**
 * Created by pawel on 21.10.2014.
 */
/**
 * Created by pawel on 21.10.2014.
 */
var Decoration = function(x, y, width)
{
    createjs.Container.call(this);

    this.SETS = [
        ["tree1", "tree2", "house"],
        ["tree2", "tree1", "house"],
        ["tree1", "house", "tree2"],
        ["tree2", "house", "tree1"],
        ["house", "tree1", "tree2"],
        ["house", "tree2", "tree1"]
    ];

    this.m_assets = [];
    for (var i = 0; i < 3; i++)
    {
        var id = this.SETS[0][i];
        var obj = new createjs.Sprite(Main.GetSpriteSheet("objects"));
        obj.gotoAndStop(id);
        var bb = obj.getBounds();
        obj.y = -bb.height;
        this.addChild(obj);
        this.m_assets[id] = obj;
    }

    this.m_assets["house"].y += 30;

    this.m_x0 = x;
    this.m_y0 = y;
    this.m_width = width;

    //this.snapToPixel = true;

    this.init();

    this.updateCanvasSize();
};


Decoration.prototype = Object.create(createjs.Container.prototype);
Decoration.prototype.constructor = Decoration;


Decoration.prototype.init = function()
{
    var info = this.SETS[Math.random() * this.SETS.length | 0];

    var x0 = 0;
    for (var i = 0; i < 3; i++)
    {
        var id = info[i];
        var obj = this.m_assets[id];
        var bb = obj.getBounds();
        if (i == 0)
        {
            obj.x = 0;
        }
        else
        {
            obj.x = x0 + Math.random() * 150 - 50 | 0;
        }
        x0 = obj.x + bb.width;
    }
};


Decoration.prototype.scroll = function(dx)
{
    this.m_x0 -= dx;
    if (this.m_x0 + this.m_width < 0)
    {
        this.m_x0 += this.m_width * 2;
        this.init();
    }
    this.x = this.m_x0 * Main.SCALE;
};


Decoration.prototype.updateCanvasSize = function(width, height)
{
    this.scaleX = this.scaleY = Main.SCALE;
    this.y = this.m_y0 * Main.SCALE;
    this.x = this.m_x0 * Main.SCALE;
};