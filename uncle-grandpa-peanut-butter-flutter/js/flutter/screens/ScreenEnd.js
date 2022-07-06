/**
 * Created by pawel on 09.10.2014.
 */
var ScreenEnd =
{
    s_container: createjs.Container,


    Init: function()
    {
        Main.s_world.setAutoScroll(true);

        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        //overlay
        this.s_overlay = new createjs.Shape();
        this.s_overlay.graphics.beginFill("rgba(0,0,0,0.3)").drawRect(0, 0, 100, 100).endFill();
        this.s_container.addChild(this.s_overlay);

        this.s_content = new createjs.Container();
        this.s_container.addChild(this.s_content);

        //panel
        var panel = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        panel.gotoAndStop("end_panel");
        this.s_content.addChild(panel);

        var bbPanel = panel.getBounds();

        //header
        var header = new createjs.Text();
        header.textAlign = "center";
        header.color = "#FFC500";
        header.font = getFontStyle(".id5-your_score");
        header.text = Main.COPY.getCopy("id5-your_score");
        header.x = bbPanel.width >> 1;
        header.y = 240;

        var outline = header.clone();
        outline.color = "#000000";
        outline.outline = 6;

        var shadow = header.clone();
        shadow.color = "#000000";
        shadow.x -= 7;
        shadow.y += 6;
        this.s_content.addChild(shadow, outline, header);

        //copy
        var score = new createjs.Text();
        score.textAlign = "center";
        score.color = "#08838D";
        score.font = getFontStyle(".end_score");
        score.text = Main.s_score;
        score.x = bbPanel.width >> 1;
        score.y = 310;

        outline = score.clone();
        outline.color = "#000000";
        outline.outline = 5;

        shadow = score.clone();
        shadow.color = "#000000";
        shadow.x -= 7;
        shadow.y += 6;
        this.s_content.addChild(shadow, outline, score);

        //best
        var txtBest = new createjs.Text();
        txtBest.textAlign = "center";
        txtBest.color = "#FFC500";
        txtBest.font = getFontStyle(".id8-best");
        txtBest.text = Main.COPY.getCopy("id8-best") + ": " + Main.s_best;
        txtBest.x = bbPanel.width >> 1;
        txtBest.y = 445;

        outline = txtBest.clone();
        outline.color = "#000000";
        outline.outline = 3;

        shadow = txtBest.clone();
        shadow.color = "#000000";
        shadow.x -= 6;
        shadow.y += 5;
        this.s_content.addChild(shadow, outline, txtBest);

        //button
        this.s_btnPlay = new BtnPlayAgain();
        var bb = this.s_btnPlay.getBounds();
        this.s_btnPlay.x = bbPanel.width - bb.width >> 1;
        this.s_btnPlay.y = 510;
        this.s_content.addChild(this.s_btnPlay);

        //
        if (Main.IsMobile())
        {
            createjs.Touch.enable(Main.s_stage);
        }
        else
        {
            document.onkeydown = function(e){ScreenEnd.HandleKeyDown(e);};
        }
        this.s_btnPlay.addEventListener("click", function(e){ScreenEnd.OnClickPlay(e);});

        //
        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        return this;
    },


    Remove: function()
    {
        this.s_content.removeAllChildren();
        this.s_content = null;

        this.s_container.removeAllChildren();
        Main.s_scene.removeChild(this.s_container);

        this.s_btnPlay = null;
        this.s_container = null;
        this.s_overlay = null;
    },


    UpdateCanvasSize: function(width, height)
    {
        if (height > width)
        {
            this.s_overlay.scaleX = width / 100;
            this.s_overlay.scaleY = height / 100;
            this.s_overlay.cache(0, 0, width, height);

            this.s_content.scaleX = this.s_content.scaleY = Math.min(Main.SCALE, width / 640);
            var bb = this.s_content.getBounds();
            this.s_content.x = (width - bb.width * this.s_content.scaleX) >> 1;
            this.s_content.y = Math.min(95 * this.s_content.scaleX, (height - bb.height * this.s_content.scaleX) >> 1);
        }

        Main.s_stage.update();
    },


    OnClickPlay: function(e)
    {
        if (Main.IsMobile())
        {
            createjs.Touch.disable(Main.s_stage);
        }
        else
        {
            document.onkeydown = null;
        }

        this.s_btnPlay.removeAllEventListeners("click");

        Navigation.ShowScreen(Navigation.SCREEN_GAME);

        WiseTrack.track("Play Again Button");
    },


    HandleKeyDown: function(e)
    {
        //cross browser issues exist
        if(!e)
        {
            e = window.event;
        }

        e.preventDefault();

        switch(e.keyCode)
        {
            case ControllerKeyboard.KEYCODE_SPACE:
                ScreenEnd.OnClickPlay();
                break;
        }
    }
};