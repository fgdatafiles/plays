// static objects 
function GameStaticObjects()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;

    this.objDescr= undefined;   // description of object from level 
    this.staticObj = undefined;  // static object
    this.shadow = undefined;    // shadow of object

    // select texture for shadow
    this.SelectTextureForShadow = function(name)
    {
        return name + "_shadow";
    }

    // by type - return texture path
    this.SelectTexture = function(type)
    {
        var root = "";// "./img/objects/static/";
        if(type == "lb")
        {
            var name = ["longbox1", "longbox2", "longbox3", "longbox4"];
            return root + name[UTILS.intRandomBetween(0, name.length - 1)]; 
        }
        if(type == "b")
            return root + "box";

        if(type == "s")
            return root + "circle";

        console.log("Error: undefined texture type");
        return undefined;
    }

    // init object
    // rootContainer - container to store object sprites
    // world - physycs world
    // objDescr - information about game object(comes from level info)
    this.Init = function(rootContainer, world, objDescr)
    {
        this.rootContainer = rootContainer;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootContainer.addChild(this.objContainer);

        this.objDescr = objDescr;
        var textureName = this.SelectTexture(this.objDescr[3]);
        // generate shadow
        var shadowTextureName = this.SelectTextureForShadow(textureName) + ".png";
        textureName = textureName + ".png";

        this.shadow = new PIXI.Sprite.fromImage(shadowTextureName);
        this.shadow.position.x = this.objDescr[0] - GlobalScale(4); // shadow offset x
        this.shadow.position.y = this.objDescr[1] + GlobalScale(4); // shadow offset y
        this.shadow.anchor.x = 0.5;
        this.shadow.anchor.y = 0.5;
        this.shadow.rotation = this.objDescr[2];
        this.objContainer.addChild(this.shadow);

        this.staticObj = new GameObject();
        this.staticObj.Init(this.objContainer, world, textureName, this.objDescr[0], this.objDescr[1], this.objDescr[2], true, this.objDescr[3]);
    }

    this.Update = function()
    {
        // FIXME: there no need sync object coords, becouse object is static - not change it position
        //this.staticObj.Sync();
    }

    this.Free = function()
    {
        //FIXME: add remove object
        this.staticObj.Free();
        this.staticObj = undefined;

        this.objContainer.removeChild(this.shadow);
        this.shadow = undefined;

        this.rootContainer.removeChild(this.objContainer);
        this.objContainer = undefined;
        this.rootContainer = undefined;
        this.objDescr = undefined;
    }
}
