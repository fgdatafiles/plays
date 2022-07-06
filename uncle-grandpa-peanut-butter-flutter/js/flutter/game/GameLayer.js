/**
 * Created by pawel on 18.08.2014.
 */
var GameLayer = function(height, screenH)
{
    createjs.Container.call(this);

    this.m_height = height;
    this.m_screenH = screenH;

    this.m_contDecorations = new createjs.Container();
    this.m_fence = new LandscapeLayer("fence", 1, Main.GetCanvasSize().height, height, height - 389);
    this.m_contObjects = new createjs.Container();
    this.addChild(this.m_contDecorations, this.m_fence, this.m_contObjects);

    this.m_toRemove = [];

    this.m_activeObjects = [];
    this.m_scrollObjects = [];

    //add 2 decorations and 1 pop up
    this.m_popup = new PopUpObject(0, height - 370);
    this.m_contDecorations.addChild(this.m_popup);
    this.m_scrollObjects.push(this.m_popup);
    this.m_activeObjects.push(this.m_popup);
};

GameLayer.prototype = Object.create(createjs.Container.prototype);
GameLayer.prototype.constructor = GameLayer;


GameLayer.prototype.remove = function()
{
    this.removeAllChildren();
};


GameLayer.prototype.startGame = function()
{
    this.removeAllObjects();

    //this.placeRobot();
    //this.placeButter();
    //this.placeVan();
};


GameLayer.prototype.stopGame = function()
{

};


GameLayer.prototype.removeAllObjects = function()
{
    //remove all elements
    while (this.m_contObjects.getNumChildren() > 0)
    {
        var obj = this.m_contObjects.getChildAt(0);
        this.m_contObjects.removeChild(obj);
        obj.removeAllEventListeners();
        obj.remove();

        var ind = this.m_activeObjects.indexOf(obj);
        if (ind >= 0)
        {
            this.m_activeObjects.splice(ind, 1);
        }
        ind = this.m_scrollObjects.indexOf(obj);
        if (ind >= 0)
        {
            this.m_scrollObjects.splice(ind, 1);
        }
    }

    this.m_toRemove = [];
    this.m_lastVan = null;
};


GameLayer.prototype.updateCanvasSize = function(width, height)
{
    this.m_screenH = height;
    this.m_fence.updateCanvasSize(width, height);
    if (this.m_hero)
    {
        this.m_hero.updateCanvasSize(width, height);
    }

    for (var i = 0; i < this.m_scrollObjects.length; i++)
    {
        this.m_scrollObjects[i].updateCanvasSize(width, height);
    }

    this.y = -this.m_posY * (this.m_height * Main.SCALE - this.m_screenH);
};


GameLayer.prototype.addHero = function(hero)
{
    this.m_hero = hero;
    this.addChild(this.m_hero);
};


GameLayer.prototype.update = function()
{
    for (var i = 0; i < this.m_activeObjects.length; i++)
    {
        this.m_activeObjects[i].update(this.m_hero);
    }

    //remove objects
    for (i = 0; i < this.m_toRemove.length; i++)
    {
        var obj = this.m_toRemove[i];
        var ind = this.m_activeObjects.indexOf(obj);
        if (ind >= 0)
        {
            this.m_activeObjects.splice(ind, 1);
        }
        ind = this.m_scrollObjects.indexOf(obj);
        if (ind >= 0)
        {
            this.m_scrollObjects.splice(ind, 1);
        }
    }
    this.m_toRemove = [];
};


GameLayer.prototype.scroll = function(dx, y)
{
    this.m_posY = y;
    this.y = -this.m_posY * (this.m_height * Main.SCALE - this.m_screenH);

    //
    this.m_fence.scroll(dx, 0);

    //
    for (var i = 0; i < this.m_scrollObjects.length; i++)
    {
        this.m_scrollObjects[i].scroll(dx);
    }
};


GameLayer.prototype.removeObject = function(obj)
{
    this.m_toRemove.push(obj);
};


GameLayer.prototype.onRemoveObject = function(e)
{
    e.target.removeAllEventListeners();
    this.m_contObjects.removeChild(e.target);
    this.removeObject(e.target);
};


GameLayer.prototype.placeRobot = function(x, y)
{
    var me = this;
    var robot = new Robot(x, y);
    this.m_contObjects.addChild(robot);
    this.m_activeObjects.push(robot);
    this.m_scrollObjects.push(robot);
    robot.addEventListener("remove", function(e){me.onRemoveObject(e);});

    return robot;
};


GameLayer.prototype.placeButter = function(x, y)
{
    var me = this;
    var butter = new Butter(x, y);
    this.m_contObjects.addChild(butter);
    this.m_activeObjects.push(butter);
    this.m_scrollObjects.push(butter);
    butter.addEventListener("remove", function(e){me.onRemoveObject(e);});
    butter.addEventListener("collect", function(e){me.onCollectButter(e);});

    return butter;
};


GameLayer.prototype.onCollectButter = function(e)
{
    ScreenGame.OnCollectButter();
};


GameLayer.prototype.placeVan = function(x, y)
{
    var me = this;
    var van = new Van(x, y);
    this.m_contObjects.addChild(van);
    this.m_activeObjects.push(van);
    this.m_scrollObjects.push(van);
    van.addEventListener("remove", function(e){me.onRemoveObject(e);});

    this.m_lastVan = van;

    return van;
};


GameLayer.prototype.getLastVanBB = function()
{
    if (this.m_lastVan && this.m_lastVan.m_asset)
    {
        return {x: this.m_lastVan.m_posX, width: this.m_lastVan.getBounds().width};
    }

    return null;
};
