/**
 * Created by pawel on 08.05.2014.
 */
var ControllerKeyboard =
{
    KEYCODE_ENTER: 13,
    KEYCODE_SPACE: 32,
    KEYCODE_UP: 38,
    KEYCODE_DOWN: 40,
    KEYCODE_LEFT: 37,
    KEYCODE_RIGHT: 39,

    s_hero: Hero,
    s_spaceReleased: true,


    Init: function(hero)
    {
        this.s_hero = hero;

        this.Start();

        return this;
    },


    Start: function()
    {
        document.onkeydown = function(e){ControllerKeyboard.HandleKeyDown(e);};
        document.onkeyup = function(e){ControllerKeyboard.HandleKeyUp(e);};
    },


    Stop: function()
    {
        s_hero = null;

        document.onkeydown = null;
        document.onkeyup = null;
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
            case this.KEYCODE_SPACE:
                if (this.s_spaceReleased)
                {
                    this.s_spaceReleased = false;
                    this.s_hero.startFlap();
                }
        }
    },


    HandleKeyUp: function(e)
    {
        //cross browser issues exist
        if(!e)
        {
            e = window.event;
        }

        e.preventDefault();

        switch(e.keyCode)
        {
            case this.KEYCODE_SPACE:
                this.s_spaceReleased = true;
                this.s_hero.stopFlap();
                break;
        }
    },


    StartResumeWait: function()
    {
        document.onkeydown = function(e){ControllerKeyboard.HandleKeyDownResume(e);};
    },


    HandleKeyDownResume: function(e)
    {
        if(!e)
        {
            e = window.event;
        }

        e.preventDefault();
        document.onkeydown = null;

        switch(e.keyCode)
        {
            case this.KEYCODE_SPACE:
                ScreenGame.Resume();
                break;
        }
    }
};