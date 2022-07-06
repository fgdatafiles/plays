/**
 * Created by pawel on 20.10.2014.
 */
var Hud = function()
{
    createjs.Container.call(this);

    this.m_panel = new createjs.Container();
    this.addChild(this.m_panel);

    var panel = new createjs.Sprite(Main.GetSpriteSheet("interface"));
    panel.gotoAndStop("score_panel");
    this.m_panel.addChild(panel);

    this.m_text = new createjs.Text();
    this.m_text.textAlign = "center";
    this.m_text.textBaseline = "middle";
    this.m_text.color = "#08838D";
    this.m_text.font = getFontStyle(".in_game_score");
    this.m_text.text = "0";
    this.m_text.x = 160;
    this.m_text.y = 50;

    this.m_outline = this.m_text.clone();
    this.m_outline.color = "#000000";
    this.m_outline.outline = 4;

    this.m_shadow = this.m_text.clone();
    this.m_shadow.color = "#000000";
    this.m_shadow.x -= 7;
    this.m_shadow.y += 6;
    this.m_panel.addChild(this.m_shadow, this.m_outline, this.m_text);


    if (Main.IsMobile())
    {
        createjs.Touch.enable(Main.s_stage);
    }
    else
    {
        //add sound button
//        this.m_btnSound = new BtnSoundControl();
//        this.addChild(this.m_btnSound);
    }

    this.m_btnHelp = new createjs.Sprite(Main.GetSpriteSheet("interface"));
    this.m_btnHelp.gotoAndStop("btn_help");
    this.addChild(this.m_btnHelp);
    this.m_btnHelp.cursor = "pointer";
    this.enableButtons();


    var size = Main.GetCanvasSize();
    this.updateCanvasSize(size.width, size.height);
};


Hud.prototype = Object.create(createjs.Container.prototype);
Hud.prototype.constructor = Hud;


Hud.prototype.remove = function()
{
    this.removeAllChildren();
    this.m_panel.removeAllChildren();
    this.m_panel = null;
    this.m_text = null;
    this.m_outline = null;
    this.m_btnHelp.removeAllEventListeners("click");
    this.m_btnHelp = null;

    if (this.m_btnSound)
    {
        this.m_btnSound.remove();
        this.m_btnSound = null;
    }
};


Hud.prototype.onClickHelp = function(e)
{
    ScreenGame.ShowInstructions();

    WiseTrack.track("In-Game Instructions Button");
};


Hud.prototype.updateCanvasSize = function(width, height)
{
    this.m_btnHelp.scaleX = this.m_btnHelp.scaleY = Main.SCALE;
    var bb = this.m_btnHelp.getBounds();
    this.m_btnHelp.x = width - (bb.width + 20) * Main.SCALE;
    this.m_btnHelp.y = height - (bb.height + 20) * Main.SCALE;

    this.m_panel.scaleX = this.m_panel.scaleY = Main.SCALE;
    var bb = this.m_panel.getBounds();
    this.m_panel.x = 20 * Main.SCALE;
    this.m_panel.y = height - (bb.height + 20) * Main.SCALE;
};


Hud.prototype.setScore = function(score)
{
    this.m_text.text = score;
    this.m_outline.text = score;
    this.m_shadow.text = score;
};


Hud.prototype.disableButtons = function()
{
    this.m_btnHelp.removeAllEventListeners("click");
    this.m_btnHelp.mouseEnabled = false;
};


Hud.prototype.enableButtons = function()
{
    var me = this;
    this.m_btnHelp.addEventListener("click", function(e){me.onClickHelp(e);});
    this.m_btnHelp.mouseEnabled = true;
};