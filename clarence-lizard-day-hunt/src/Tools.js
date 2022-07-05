//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Tools = Tools || {};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

Tools.random = function (min, max) {
	return Math.round(Math.random() * (max - min) + min);
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

Tools.radians = function (degrees) {
	return degrees * 180 / Math.PI;
};

Tools.degrees = function (radians) {
	return radians * 180 / Math.PI;
};

Tools.getAngle = function (p1, p2) {
	return Math.atan2(p2.y - p1.y, p2.x - p1.x);
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

Tools.createFrameAnim = function (prefix, fps, from, to) {
	var frames = [];

	if (from === undefined || to === undefined) {
		var i = 0;
		while (true) {
			var frame = cc.spriteFrameCache.getSpriteFrame(prefix + "_" + i + ".png");
			if (frame) {
				frames.push(frame);
				i++;
			} else {
				break;
			}
		}
	} else {
		for (var i = from; i <= to; i++) {
			var frame = cc.spriteFrameCache.getSpriteFrame(prefix + "_" + i + ".png");
			frames.push(frame);
		}
	}
	
	return cc.animate(new cc.Animation(frames, 1/fps));
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

Tools.createSafeZone = function () {
	var safeZone = new cc.Node();

	var leftOverlay = new cc.DrawNode();
	leftOverlay.drawRect(cc.p(0, 0), cc.p(171, gg.screen.height), cc.color(0, 0, 0, 128));
	safeZone.addChild(leftOverlay, 10);

	var rightOverlay = new cc.DrawNode();
	rightOverlay.drawRect(cc.p(gg.screen.width - 171, 0), cc.p(gg.screen.width, gg.screen.height), cc.color(0, 0, 0, 128));
	safeZone.addChild(rightOverlay, 10);

	return safeZone;
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------