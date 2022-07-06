/**
 * Created by pawel on 09.10.2014.
 */
var ScreenRotate =
{
    s_container: createjs.Container,


    Init: function()
    {
        this.s_container = new createjs.Container();
        Main.s_stage.addChild(this.s_container);

        this.s_bg = new createjs.Bitmap(Main.GetImage("rotate_bg"));

        this.s_panel = new createjs.Container();
        var panel = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        panel.gotoAndStop("rotate_panel");

        this.s_logos = new createjs.Container();
        var gameLogo = new createjs.Bitmap(Main.GetImage("logo_game_small"));
        gameLogo.y = 205;
        var uncleLogo = new createjs.Bitmap(Main.GetImage("logo_uncle_big"));
        uncleLogo.scaleX = uncleLogo.scaleY = 1.2;
        var bbU = uncleLogo.getBounds();
        var bbG = gameLogo.getBounds();
        uncleLogo.x = bbG.width - bbU.width * uncleLogo.scaleX >> 1;

        this.s_logos.addChild(gameLogo, uncleLogo);

        this.s_container.addChild(this.s_bg, this.s_panel, this.s_logos);

        //copy
        var copy = new createjs.Text();
        copy.textAlign = "center";
        copy.color = "#FFC500";
        copy.lineWidth = 260;
        copy.font = getFontStyle(".id7-rotate_device");
        copy.text = Main.COPY.getCopy("id7-rotate_device");
        copy.x = 380;
        copy.y = 400 - copy.getBounds().height >> 1;

        var outline = copy.clone();
        outline.color = "#000000";
        outline.outline = 8;
        outline.x -= 2;
        outline.y += 2;
        this.s_panel.addChild(panel, outline, copy);

        //
        Main.s_stage.mouseChildren = false;

        //
        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        return this;
    },


    Remove: function()
    {
        this.s_container.removeAllChildren();
        Main.s_stage.removeChild(this.s_container);

        this.s_panel.removeAllChildren();

        this.s_panel = null;
        this.s_logos = null;
        this.s_container = null;
        this.s_bg = null;

        Main.s_stage.update();

        Main.s_stage.mouseChildren = true;
    },


    UpdateCanvasSize: function(width, height)
    {
        if (width > height)
        {
            var bb = this.s_bg.getBounds();
//            var scale = Math.max(Main.SCALE, Math.max(width / (bb.width * Main.SCALE), height / (bb.height * Main.SCALE)));
            var scale = Math.max(Main.SCALE, Math.max(width / bb.width, height / bb.height));
            this.s_bg.scaleX = this.s_bg.scaleY = scale;
            this.s_bg.x = (width - bb.width * scale) >> 1;
            this.s_bg.y = (height - bb.height * scale) >> 1;

            var bb1 = this.s_panel.getBounds();
            var bb2 = this.s_logos.getBounds();

            var s1 = width / (bb1.width + bb2.width + 100);

            this.s_panel.scaleX = this.s_panel.scaleY = s1;
            this.s_panel.x = width - (bb1.width + 20) * s1;
            this.s_panel.y = (height - bb1.height * s1) >> 1;

            this.s_logos.scaleX = this.s_logos.scaleY = s1;
            this.s_logos.x = 20 * s1;
            this.s_logos.y = (height - bb2.height * s1) >> 1;
        }

        Main.s_stage.update();
    }
};