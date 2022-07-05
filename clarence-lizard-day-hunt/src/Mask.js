//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Mask = cc.Sprite.extend({
	active:null,
	collideRect:null,

	ctor:function (stage, spot, data) {
		this._super("#mask_" + stage + "_" + spot +".png");
		// debug mask
		// this.setColor(cc.color(255, 0, 0));
		// this.setOpacity(128);

		this.setPosition(data.pos);
		
		this.collideRect = data.rect;

		// debug mask collider
		// var box = new cc.DrawNode();
		// var origin = cc.p(data.rect.x, data.rect.y);
		// var destination = cc.pAdd(origin, cc.p(data.rect.width, data.rect.height));
		// box.drawRect(origin, destination, cc.color(255, 0, 0, 64));
		// g_action.addChild(box, 10);
	}
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------