/**
 * Created by pawel on 09.10.2014.
 */
var ScreenFront =
{
    s_container: createjs.Container,


    Init: function()
    {
        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        this.s_gameLogo = new createjs.Bitmap(Main.GetImage("logo_game_big"));
        this.s_container.addChild(this.s_gameLogo);

        this.s_uncleLogo = new createjs.Bitmap(Main.GetImage("logo_uncle_small"));
        this.s_container.addChild(this.s_uncleLogo);

        this.s_btnPlay = new BtnPlay();
        this.s_container.addChild(this.s_btnPlay);

        this.s_robotLeft = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        this.s_robotLeft.gotoAndStop("robot_left");
        this.s_container.addChild(this.s_robotLeft);

        this.s_robotRight = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        this.s_robotRight.gotoAndStop("robot_right");
        this.s_container.addChild(this.s_robotRight);

        this.s_uncle = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        this.s_uncle.gotoAndStop("uncle_front");
        this.s_container.addChild(this.s_uncle);

        //
        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        Main.s_world.setAutoScroll(true);
        Main.s_world.getGameLayer().placeVan(-400, 1000); // add van

        //
        if (Main.IsMobile())
        {
            createjs.Touch.enable(Main.s_stage);
        }
        else
        {
            document.onkeydown = function(e){ScreenFront.HandleKeyDown(e);};
        }
        this.s_btnPlay.addEventListener("click", function(e){ScreenFront.OnClickPlay(e);});

        //
        SoundsManager.PlaySound("good_morning");

        //
        return this;
    },


    Remove: function()
    {
        this.s_container.removeAllChildren();
        Main.s_scene.removeChild(this.s_container);

        this.s_gameLogo = null;
        this.s_uncleLogo = null;
        this.s_robotLeft = null;
        this.s_robotRight = null;
        this.s_btnPlay = null;
        this.s_container = null;

        Main.s_loader.remove("front_bg");
    },


    UpdateCanvasSize: function(width, height)
    {
        if (height > width)
        {
            this.s_uncleLogo.scaleX = this.s_uncleLogo.scaleY = Main.SCALE;
            var bb = this.s_uncleLogo.getBounds();
            this.s_uncleLogo.x = (width - bb.width * Main.SCALE) >> 1;
            this.s_uncleLogo.y = 20 * Main.SCALE;

            this.s_gameLogo.scaleX = this.s_gameLogo.scaleY = Main.SCALE;
            this.s_gameLogo.y = this.s_uncleLogo.y + (bb.height + 15) * Main.SCALE;
            bb = this.s_gameLogo.getBounds();
            this.s_gameLogo.x = (width - bb.width * Main.SCALE) >> 1;

            var bottom = 816 * Main.SCALE;
            this.s_btnPlay.scaleX = this.s_btnPlay.scaleY = Main.SCALE;//width / 640;
            bb = this.s_btnPlay.getBounds();
            this.s_btnPlay.x = (width - bb.width * this.s_btnPlay.scaleX) >> 1;
            this.s_btnPlay.y = Math.min(height, bottom) - (bb.height - 50) * this.s_btnPlay.scaleX;

            this.s_robotLeft.scaleX = this.s_robotLeft.scaleY = Main.SCALE;
            this.s_robotLeft.x = -55 * Main.SCALE;

            this.s_robotRight.scaleX = this.s_robotRight.scaleY = Main.SCALE;
            bb = this.s_robotRight.getBounds();
            this.s_robotRight.x = width - (bb.width - 110) * Main.SCALE;
            this.s_robotRight.y = -10 * Main.SCALE;

            this.s_uncle.scaleX = this.s_uncle.scaleY = Main.SCALE;
            bb = this.s_uncle.getBounds();
            this.s_uncle.x = width / 2 - 410 * Main.SCALE;
            this.s_uncle.y = 250 * Main.SCALE;

            //
            if (this.s_instructions)
            {
                this.s_instructions.UpdateCanvasSize(width, height);
            }
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

        //
        if (Main.s_firstRun)
        {
            this.ShowInstructions();
        }
        else
        {
            Navigation.ShowScreen(Navigation.SCREEN_GAME);
        }

        //
        WiseTrack.track("Game Started");
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
                ScreenFront.OnClickPlay();
                break;
        }
    },


    ShowInstructions: function()
    {
        this.s_instructions = ScreenInstructions.Init(false);
        this.s_btnPlay.visible = false;


        Main.s_stage.update();
    },


    HideInstructions: function()
    {
        this.s_instructions.Remove();
        this.s_instructions = null;
        Navigation.ShowScreen(Navigation.SCREEN_GAME);
    }
};