var Tools = Tools || {};

Tools.random = function (min, max) {
	// Note: includes both min and max
	return Math.round(Math.random() * (max - min) + min);
};

Tools.getAngle = function (p1, p2) {
	return Math.atan2(p2.y - p1.y, p2.x - p1.x);
};

Tools.degrees = function (radians) {
	return radians * 180 / Math.PI;
};

Tools.radians = function (degrees) {
	return degrees * 180 / Math.PI;
};

Tools.playSFX = function(audio, loop) {
	return cc.audioEngine.playEffect(audio, loop);
};

Tools.playBGM = function(audio, loop) {
	return cc.audioEngine.playMusic(audio, loop);
};

Tools.stopSFX = function(audioID) {
	cc.audioEngine.stopEffect(audioID);
};

Tools.createFramesAnimation = function (prefix, interval, start, end) {
	var frames = [];
		
	if (start < end) {
		for (var i = start; i <= end; i++) {
			var frame = cc.spriteFrameCache.getSpriteFrame(prefix + i + ".png");
			frames.push(frame);
		}
	} else {
		for (var i = start; i >= end; i--) {
			var frame = cc.spriteFrameCache.getSpriteFrame(prefix + i + ".png");
			frames.push(frame);
		}
	}
	
	return cc.animate(new cc.Animation(frames, interval));
};

Tools.createSpriteAnimation = function( prefix, interval, startFrame, endFrame ) {
    var startFrameName = "#" + prefix + "0.png";
    var sprAnim = new cc.Sprite( startFrameName );

    var animation = Tools.createFramesAnimation( prefix, interval, startFrame, endFrame);
    sprAnim.runAction( cc.RepeatForever.create( animation ) );

    return sprAnim;
},

Tools.circlesIntersect = function (obj1, obj2) {
    var distance = cc.pDist(ob1.getPosition(), ob2.getPosition());
	
    // NOTE: Create obj radius function that returns the object radius
    return distance < obj1.radius() + obj2.radius();
};

// Tools.rectsIntersect = function (objA, objB) {
//     // NOTE: Create obj rect function that returns the object collision box

//     var objAPos = objA.getPosition();
//     var objBPos = objB.getPosition();

//     var aRect = cc.rect(objAPos.x - objA.width * 0.5, objAPos.y - objA.height * 0.5, objA.width, objA.height );
//     var bRect = cc.rect(objBPos.x - objB.width * 0.5, objBPos.y - objB.height * 0.5, objB.width, objB.height );

//     return cc.rectIntersectsRect(aRect, bRect);
// };

Tools.rectsIntersectRect = function (rectA, rectB) {
	return cc.rectIntersectsRect(rectA, rectB);
};

Tools.rectsIntersect = function (objA, objB) {
    // NOTE: Create obj rect function that returns the object collision box

    var objAPos = objA.getPosition();
    var objBPos = objB.getPosition();

    var aRect = cc.rect(objAPos.x, objAPos.y, objA.width, objA.height );
    var bRect = cc.rect(objBPos.x, objBPos.y, objB.width, objB.height );

    return cc.rectIntersectsRect(aRect, bRect);
};

Tools.createCollider = function (width, height) {
	var collider = new cc.DrawNode();
	var origin = cc.p(0, 0);
	var destination = cc.p(width, height);
	collider.drawRect(origin, destination, cc.color(255, 255, 255, 64));
	return collider;
};

Tools.createBoundView = function (parent, width, height) {
	var boundView = new cc.LayerColor.create( cc.color(255, 0, 0, 100), width, height);
	var origin = cc.p(0, 0);
	var destination = cc.p(width, height);
	parent.addChild(boundView);
};

Tools.circleContainsPoint = function(circleRadius, circleCenterPoint, point) {
	var bCircleContainsPoint = false;

	var distance = cc.pDistance( circleCenterPoint , point );
	if( distance <= circleRadius )
		bCircleContainsPoint = true;

	return bCircleContainsPoint;
};

Tools.addSoundHandler = function(target)
{
    var listenerHideGame = cc.EventListener.create({
        event: cc.EventListener.CUSTOM,
        eventName: "game_on_hide",
        callback: function(event){
            cc.audioEngine.setEffectsVolume(0.0);   
            cc.audioEngine.setMusicVolume(0.0);
        }           
    });    
    cc.eventManager.addListener( listenerHideGame, target );

    var listenerShowGame = cc.EventListener.create({
        event: cc.EventListener.CUSTOM,
        eventName: "game_on_show",
        callback: function(event){
        	if( GC.ENABLE_SFX ) {
		        cc.audioEngine.setEffectsVolume(1.0);   
		        cc.audioEngine.setMusicVolume(1.0);
		    }
        }            
    });    
    cc.eventManager.addListener( listenerShowGame, target );
};

Tools.removeFromArray = function(array, object)
{
    var index = array.indexOf( object );

    if (index > -1) {
        array.splice(index, 1);
    }
};

Tools.formatNumber = function(num, size)
{
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

Tools.shuffleArray = function(array)
{
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

Tools.pluralize = function(val, str)
{
    if( val > 1 )
    {
        str = str + "S";
    }

    return str;
}