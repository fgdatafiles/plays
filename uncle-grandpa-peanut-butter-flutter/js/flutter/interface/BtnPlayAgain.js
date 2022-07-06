/**
 * Created by pawel on 20.10.2014.
 */
var BtnPlayAgain = function()
{
    createjs.Container.call(this);

    this.m_bg = new createjs.Sprite(Main.GetSpriteSheet("interface"));
    this.m_bg.gotoAndStop("btn_play_again");
    this.addChild(this.m_bg);

    var bb = this.m_bg.getBounds();

    var text = new createjs.Text();
    text.textAlign = "center";
    text.textBaseline = "middle";
    text.color = "#ffffff";
    text.font = getFontStyle(".id6-play_again");
    text.text = Main.COPY.getCopy("id6-play_again");
    text.x = bb.width / 2 + 5;
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


BtnPlayAgain.prototype = Object.create(createjs.Container.prototype);
BtnPlayAgain.prototype.constructor = BtnPlayAgain;

