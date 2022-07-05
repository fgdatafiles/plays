// Thumbnail manager
function ThumbnailManager()
{
    this.rootContainer = undefined;
    this.objContainer = undefined;

    this.thumbPositionX = [GlobalScale(80), GlobalScale(194), GlobalScale(318), GlobalScale(442), GlobalScale(566)]; // X position of thumbnail in palaceholder
    this.thumbPositionY = GlobalScale(883);  // y position of thumbnail

    // called to init object
    this.Init = function(rootContainer)
    {
	this.rootContainer = rootContainer;
	this.objContainer = new PIXI.DisplayObjectContainer();
	this.rootContainer.addChild(this.objContainer);

        // add elements to gui
	var nextObjectBorder = new PIXI.Sprite.fromImage("next_selected.png");
	nextObjectBorder.position.x = GlobalScale(25);
	nextObjectBorder.position.y = GlobalScale(830);
	this.objContainer.addChild(nextObjectBorder);	
	
	// load thumbnail objects
        var dynObjectsList = GAME.Level.dynamicObjectsList;
	for(var d = 0; d < dynObjectsList.length; ++d)
	{
	    dynObjectsList[d].InitThumbnail(this.objContainer);
	}
    }

    // called to delete object and remove all it resources from scene
    this.Free = function()
    {
        var dynObjectsList = GAME.Level.dynamicObjectsList;
	for(var d = 0; d < dynObjectsList.length; ++d)
	{
	    dynObjectsList[d].FreeThumbnail(this.objContainer);
	}

	removeAllChild(this.objContainer);
	this.rootContainer.removeChild(this.objContainer);
	this.objContainer = undefined;
    }

    // called to update object state
    this.Update = function()
    {
        // hide all
	var dynObjectsList = GAME.Level.dynamicObjectsList; // alias
	var obj = Math.min(this.thumbPositionX.length, dynObjectsList.length - GAME.Level.nextSpawnObjectIndex);
	for(var o = 0; o < dynObjectsList.length; ++o)
	    dynObjectsList[o].thumbSprite.visible = false;
	
	// dsable needed
	for(var o = 0; o < obj; ++o)
	{
	    var id = GAME.Level.nextSpawnObjectIndex + o;
	    dynObjectsList[id].thumbSprite.position.x = this.thumbPositionX[o];
	    dynObjectsList[id].thumbSprite.position.y = this.thumbPositionY;
	    dynObjectsList[id].thumbSprite.visible = true;    
	}
    }
}

