/**
 * Created by pawel on 09.10.2014.
 */
var ScreenInstructions =
{
    s_container: createjs.Container,


    Init: function(inGame)
    {
        this.s_inGame = inGame;

        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        this.s_overlay = new createjs.Shape();
        this.s_overlay.graphics.beginFill("rgba(0,0,0,0.3)").drawRect(0, 0, 100, 100).endFill();
        this.s_container.addChild(this.s_overlay);

        this.s_content = new createjs.Container();
        this.s_container.addChild(this.s_content);

        var panel = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        panel.gotoAndStop("instructions_panel");
        this.s_content.addChild(panel);

        var bbPanel = panel.getBounds();

//screen 1
        this.s_screen1 = new createjs.Container();
        this.s_content.addChild(this.s_screen1);

        //header
        var header = new createjs.Text();
        header.textAlign = "center";
        header.color = "#FFC500";
        header.font = getFontStyle(".id2-instructions");
        header.text = Main.COPY.getCopy("id2-instructions");
        header.x = bbPanel.width >> 1;
        header.y = 40;

        var outline = header.clone();
        outline.color = "#000000";
        outline.outline = 6;

        var shadow = header.clone();
        shadow.color = "#000000";
        shadow.x -= 7;
        shadow.y += 6;

        this.s_screen1.addChild(shadow, outline, header);

        //copy
        var copy = new createjs.Text();
        copy.textAlign = "center";
        copy.color = "#000000";
        copy.font = getFontStyle(".id3-instructions_copy1");
        copy.lineWidth = 500;
        copy.text = Main.COPY.getCopy("id3-instructions_copy1" + (Main.IsMobile() ? "_mobile" : ""));
        copy.x = bbPanel.width >> 1;
        copy.y = 125;
        this.s_screen1.addChild(copy);

        //image
        var img = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        img.gotoAndStop("instructions_screen_1");
        var bb = img.getBounds();
        img.x = (bbPanel.width - bb.width) >> 1;
        img.y = 205;
        this.s_screen1.addChild(img);

        //finger
        if (Main.IsMobile())
        {
            var finger = new createjs.Sprite(Main.GetSpriteSheet("interface"));
            finger.gotoAndStop("instructions_finger");
            var bb = finger.getBounds();
            finger.x = -30;
            finger.y = 480;
            this.s_screen1.addChild(finger);
        }

        //btn next
        this.s_btnNext = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        this.s_btnNext.gotoAndStop("btn_next");
        this.s_btnNext.cursor = "pointer";
        this.s_btnNext.addEventListener("click", function(e){ScreenInstructions.OnClickNext(e);});
        this.s_btnNext.x = 500;
        this.s_btnNext.y = 325;

        this.s_screen1.addChild(this.s_btnNext);

//screen 2
        this.s_screen2 = new createjs.Container();
        this.s_content.addChild(this.s_screen2);
        this.s_screen2.visible = false;

        //copy
        copy = copy.clone();
        copy.text = Main.COPY.getCopy("id4-instructions_copy2");
        copy.y = 45;
        this.s_screen2.addChild(copy);

        copy = copy.clone();
        copy.text = Main.COPY.getCopy("id4-instructions_copy3");
        copy.y = 267;
        this.s_screen2.addChild(copy);

        copy = copy.clone();
        copy.text = Main.COPY.getCopy("id4-instructions_copy4");
        copy.y = 487;
        this.s_screen2.addChild(copy);

        //image
        var img = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        img.gotoAndStop("instructions_screen_2");
        var bb = img.getBounds();
        img.x = (bbPanel.width - bb.width) >> 1;
        img.y = 90;
        this.s_screen2.addChild(img);

        //btn prev
        this.s_btnPrev = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        this.s_btnPrev.gotoAndStop("btn_prev");
        this.s_btnPrev.cursor = "pointer";
        this.s_btnPrev.addEventListener("click", function(e){ScreenInstructions.OnClickPrev(e);});
        this.s_btnPrev.x = -15;
        this.s_btnPrev.y = 325;
        this.s_screen2.addChild(this.s_btnPrev);
// end screen 2


        //play button
        this.s_btnPlay = new BtnPlay();
        this.s_container.addChild(this.s_btnPlay);

        //
        if (Main.IsMobile())
        {
            createjs.Touch.enable(Main.s_stage);
        }
        else
        {
            document.onkeydown = function(e){ScreenInstructions.HandleKeyDown(e);};
        }
        this.s_btnPlay.addEventListener("click", function(e){ScreenInstructions.OnClickPlay(e);});

        //
        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        return this;
    },


    Remove: function()
    {
        this.s_screen1.removeAllChildren();
        this.s_screen1 = null;

        this.s_screen2.removeAllChildren();
        this.s_screen2 = null;

        this.s_content.removeAllChildren();
        this.s_content = null;

        this.s_container.removeAllChildren();
        Main.s_scene.removeChild(this.s_container);

        this.s_btnNext.removeAllEventListeners("click");
        this.s_btnPrev.removeAllEventListeners("click");
        this.s_btnNext = null;
        this.s_btnPrev = null;

        this.s_btnPlay = null;
        this.s_container = null;
        this.s_overlay = null;
    },


    UpdateCanvasSize: function(width, height)
    {
        if (height > width)
        {
            var bottom = 816 * Main.SCALE;

            this.s_overlay.scaleX = width / 100;
            this.s_overlay.scaleY = height / 100;
            this.s_overlay.cache(0, 0, width, height);

            this.s_content.scaleX = this.s_content.scaleY = Math.min(Main.SCALE, width / 640);
            var bb = this.s_content.getBounds();
            this.s_content.x = (width - bb.width * this.s_content.scaleX) >> 1;
            this.s_content.y = Math.min(60 * Main.SCALE, (height - bb.height * this.s_content.scaleX) >> 1);

            this.s_btnPlay.scaleX = this.s_btnPlay.scaleY = Main.SCALE;
            bb = this.s_btnPlay.getBounds();
            this.s_btnPlay.x = (width - bb.width * this.s_btnPlay.scaleX) / 2;
            this.s_btnPlay.y = Math.min(height, bottom) - (bb.height - 50) * this.s_btnPlay.scaleX;
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


        if (this.s_inGame)
        {
            ScreenGame.HideInstructions();
        }
        else
        {
            ScreenFront.HideInstructions();
        }
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
                ScreenInstructions.OnClickPlay();
                break;
        }
    },


    OnClickNext: function(e)
    {
        this.s_screen1.visible = false;
        this.s_screen2.visible = true;

        Main.s_stage.update();
    },


    OnClickPrev: function(e)
    {
        this.s_screen1.visible = true;
        this.s_screen2.visible = false;

        Main.s_stage.update();
    }
};