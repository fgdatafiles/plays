/**
 * Created by pawel on 20.10.2014.
 */
var BtnPlay = function()
{
    createjs.Container.call(this);

    var bg = new createjs.Sprite(Main.GetSpriteSheet("interface"));
    bg.gotoAndStop("btn_play");
    this.addChild(bg);

    var bb = bg.getBounds();

    var text = new createjs.Text();
    text.textAlign = "center";
    text.textBaseline = "middle";
    text.color = "#ffffff";
    text.font = getFontStyle(".id1-play");
    text.text = Main.COPY.getCopy("id1-play");
    text.x = bb.width / 2;
    text.y = bb.height / 2 - 5;

    var outline = text.clone();
    outline.color = "#000000";
    outline.outline = 6;

    var shadow = text.clone();
    shadow.color = "#000000";
    shadow.x -= 7;
    shadow.y += 6;

    this.addChild(shadow, outline, text);

    this.cursor = "pointer";
};


BtnPlay.prototype = Object.create(createjs.Container.prototype);
BtnPlay.prototype.constructor = BtnPlay;

