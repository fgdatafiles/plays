/**
 * Created by pawel on 08.05.2014.
 */
var ControllerTouch =
{
    s_hero: Hero,


    Init: function(hero)
    {
        this.s_hero = hero;

        this.Start();

        return this;
    },


    Start: function()
    {
        if (Main.IsMobile())
        {
            createjs.Touch.enable(Main.s_stage, true);
        }
        Main.s_stage.addEventListener("stagemousedown", function(e){ControllerTouch.HandleMouseDown(e);});
        Main.s_stage.addEventListener("stagemouseup", function(e){ControllerTouch.HandleMouseUp(e);});
    },


    Stop: function()
    {
        if (Main.IsMobile())
        {
            createjs.Touch.disable(Main.s_stage);
        }
        Main.s_stage.removeAllEventListeners("stagemousedown");
        Main.s_stage.removeAllEventListeners("stagemouseup");
    },


    HandleMouseDown: function(e)
    {
        e.preventDefault();
        this.s_hero.startFlap();
    },


    HandleMouseUp: function(e)
    {
        e.preventDefault();

        this.s_hero.stopFlap();
    },


    StartResumeWait: function()
    {
        if (Main.IsMobile())
        {
            createjs.Touch.enable(Main.s_stage, true);
        }
        Main.s_stage.addEventListener("stagemousedown", function(e){ControllerTouch.HandleMouseDownResume(e);});
    },


    HandleMouseDownResume: function(e)
    {
        e.preventDefault();
        if (Main.IsMobile())
        {
            createjs.Touch.disable(Main.s_stage);
        }
        Main.s_stage.removeAllEventListeners("stagemousedown");
        ScreenGame.Resume();
    }
};

