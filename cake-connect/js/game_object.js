// Define game object acotiated with physics
function GameObject()
{   
    this.rootContainer = undefined; //game scene
    this.physWorld = undefined; // physic world
    this.texturePath = undefined;   // path to texture
    this.type = undefined;
    this.isStatic = undefined;
    this.initPos = {"x":undefined, "y":undefined, "angle":undefined};
    this.gameObj = undefined;   // game object (loaded texture)
    this.physObj = undefined; // physic object itself

    // Init object 
    // gameScene - scene to insert game object(pixi scene)
    // physWord - physics world object
    // texturePath - path to texture
    // x,y postion (in pixels)
    // angle - rotation in radians
    // isStatic - if true, object static, false othervice
    // objType - type of object (box, sphere, triangle) "b" for box, "s" sphere, "t" triangle
    this.Init = function(gameScene, physWord, texturePath, x, y, angle, isStatic, objType)
    {
        this.rootContainer = gameScene;
        this.physWorld= physWord;
        this.texturePath = texturePath; 
        this.initPos.x = x;
        this.initPos.y = y;
        this.initPos.angle = angle;
        this.type = objType;
        this.isStatic = isStatic;

        // load sprite
        this.gameObj = new PIXI.Sprite(PIXI.Texture.fromImage(this.texturePath));
        this.gameObj.anchor.x = 0.5;
        this.gameObj.anchor.y = 0.5;
        this.gameObj.position.x = this.initPos.x;
        this.gameObj.position.y = this.initPos.y;
        this.gameObj.rotation = this.initPos.angle;
        this.rootContainer.addChild(this.gameObj);

        // size of object in units (for physics)
        var objSizeInUnits = {"w":PixelsToUnits(this.gameObj.width), "h":PixelsToUnits(this.gameObj.height)};
        // position of object in units(for physics)
        var objPosInUnits = {"x":PixelsToUnits(this.initPos.x), "y":PixelsToUnits(this.initPos.y)};

        // init physics
        // fixture
        var fixDef = new Box2D.Dynamics.b2FixtureDef;  // свойства объекта
        fixDef.density = 1;  // плотность kg/m^2
        fixDef.friction = 0.45; // трение (0 - полностью отсуствует, 1 максимальное)
        fixDef.restitution = 0.15;  // эластичность, упругость (1 полностью упругий, 0 не упругий  )
        // define type here
        if(this.type == "b" || this.type == "lb")  // box
        {
            fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;
            fixDef.shape.SetAsBox(objSizeInUnits.w/2, objSizeInUnits.h/2);    // half box 
        }
        else if(this.type == "s") // sphere
        {
            if(this.gameObj.width != this.gameObj.height)
                console.log("Warning: collision box = sphere but object.width != object.height");

            fixDef.shape = new Box2D.Collision.Shapes.b2CircleShape(objSizeInUnits.w/2);
        }
        else if(this.type == "t")
        {   
            // this cords taked manually from triangle_1_physic_box.xcf
            var verArray = [
                            new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(-7)), PixelsToUnits(GlobalScale(-80)) ),
                            new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(7)), PixelsToUnits(GlobalScale(-80)) ),
                            new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(56)), PixelsToUnits(GlobalScale(0)) ),
                            new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(30)), PixelsToUnits(GlobalScale(73)) ),
                            new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(-30)), PixelsToUnits(GlobalScale(73)) ),
                            new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(-60)), PixelsToUnits(GlobalScale(0)) )
                            ];

            //var verArray = [
                            //new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(30)), PixelsToUnits(GlobalScale(-73)) ),
                            //new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(56)), PixelsToUnits(GlobalScale(0)) ),
                            //new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(7)), PixelsToUnits(GlobalScale(80)) ),
                            //new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(-8)), PixelsToUnits(GlobalScale(80)) ),
                            //new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(-60)), PixelsToUnits(GlobalScale(0)) ),
                            //new Box2D.Common.Math.b2Vec2(PixelsToUnits(GlobalScale(-36)), PixelsToUnits(GlobalScale(-73)) )
                            //];

            fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;
            fixDef.shape.SetAsArray(verArray, verArray.length);
        }
        else
            console.log("Error: Trying to create object with unknown type");

        // body
        var bodyDef = new Box2D.Dynamics.b2BodyDef;
        bodyDef.type = (this.isStatic == true ? Box2D.Dynamics.b2Body.b2_staticBody : Box2D.Dynamics.b2Body.b2_dynamicBody);
        //some tune params
        bodyDef.allowSleep = true; // object can sleep
        //bodyDef.awake = true;

        bodyDef.position.x = objPosInUnits.x;
        bodyDef.position.y = objPosInUnits.y;
        this.physObj = physWord.CreateBody(bodyDef);
        this.physObj.CreateFixture(fixDef);
        this.physObj.SetAngle(angle);
    }

    // synchonyze physics and game object
    this.Sync = function()
    {
        // get position
        this.gameObj.position.x = UnitsToPixels(this.physObj.GetPosition().x);
        this.gameObj.position.y = UnitsToPixels(this.physObj.GetPosition().y);

        // get rotation
        this.gameObj.rotation = this.physObj.GetAngle();
    }

    // free resources allocated by object
    this.Free = function(rootStage, world)
    {
        this.physWorld.DestroyBody(this.physObj);
        this.physObj = undefined;

        this.rootContainer.removeChild(this.gameObj);
        this.gameObj = undefined;

        this.rootContainer = undefined; 
        this.physWorld = undefined; 
        this.texturePath = undefined;
        this.type = undefined;
        this.isStatic = undefined;
        this.initPos = {"x":undefined, "y":undefined, "angle":undefined};

    }

}
