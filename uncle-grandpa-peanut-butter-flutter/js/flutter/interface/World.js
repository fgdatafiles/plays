/**
 * Created by pawel on 23.10.2014.
 */
var World = function()
{
    this.GAME_LAYER = 3;
    this.GAME_LAYER_HEIGHT = 1100;

    createjs.Container.call(this);

    var size = Main.GetCanvasSize();

    this.m_layers = new Array();
    this.m_layers.push(new Sky());
    this.m_layers.push(new LandscapeLayer("city", 0.75, size.height, 1000, 450));
    this.m_layers.push(new DecorLayer(0.9, size.height, 1040));
    this.m_layers.push(new GameLayer(this.GAME_LAYER_HEIGHT, size.height));
    this.addChild(this.m_layers[0], this.m_layers[1], this.m_layers[2], this.m_layers[3]);

    this.updateCanvasSize(size.width, size.height);

    this.m_destY = 0;

    this.scroll(0, 0.0);
};


World.prototype = Object.create(createjs.Container.prototype);
World.prototype.constructor = World;


World.prototype.getGameLayer = function()
{
    return this.m_layers[this.GAME_LAYER];
};


World.prototype.scroll = function(dx, y)
{
    this.m_destY += (y - this.m_destY ) * 0.1;
    for (var i = 0; i < this.m_layers.length; i++)
    {
        this.m_layers[i].scroll(dx, this.m_destY);
    }
};


World.prototype.updateCanvasSize = function(width, height)
{
    if (this.m_layers.length > 1)
    {
        for (var i = 0; i < this.m_layers.length; i++)
        {
            this.m_layers[i].updateCanvasSize(width, height);
        }
    }
};


World.prototype.setAutoScroll = function(value)
{
    if (this.m_autoscroll != value && false)
    {
        this.m_autoscroll = value;
        if (this.m_autoscroll)
        {
            createjs.Ticker.addEventListener("tick", ScrollUpdate);
        }
        else
        {
            createjs.Ticker.removeEventListener("tick", ScrollUpdate);
        }
    }
};




function ScrollUpdate()
{
    Main.s_world.scroll(3, 0.6);
    Main.s_stage.update();
}