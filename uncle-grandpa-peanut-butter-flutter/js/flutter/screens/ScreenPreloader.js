/**
 * Created by pawel on 09.10.2014.
 */
var ScreenPreloader = {

    s_container: createjs.Container,


    Init: function()
    {
        this.s_container = new createjs.Container();
        Main.s_stage.addChild(this.s_container);

        this.s_content = new createjs.Container();
        this.s_container.addChild(this.s_content);

        var canvas = Main.s_stage.canvas;
        this.UpdateCanvasSize(canvas.width, canvas.height);

        return this;
    },


    Remove: function()
    {
        this.s_container.removeAllChildren();
        Main.s_stage.removeChild(this.s_container);
    },


    UpdateCanvasSize: function(width, height)
    {
        if (this.s_sky)
        {
            var bb = this.s_sky.getBounds();
            this.s_sky.scaleX = width / bb.width;
            this.s_sky.scaleY = height / bb.height;
        }

        this.s_content.scaleX = this.s_content.scaleY = Main.SCALE;
        this.s_content.x = width - (420 * Main.SCALE) >> 1;
        this.s_content.y = height - (600 * Main.SCALE) >> 1;

        Main.s_stage.update();
    },


    SetSky: function()
    {
        this.s_sky = new createjs.Bitmap(Main.GetImage("preloader_sky"));
        this.s_container.addChildAt(this.s_sky, 0);

        var canvas = Main.s_stage.canvas;
        this.UpdateCanvasSize(canvas.width, canvas.height);
    },


    SetButter: function()
    {
        var butter = new createjs.Bitmap(Main.GetImage("preloader_butter"));
        this.s_contButters = new createjs.Container();
        this.s_content.addChild(this.s_contButters);
        this.s_butters = [];
        for (var i = 0; i < 5; i++)
        {
            var b = butter.clone();
            b.x = i * 80;
            b.visible = false;
            this.s_butters[i] = b;
            this.s_contButters.addChild(b);
        }

        this.s_contButters.x = 20;
        this.s_contButters.y = 290;
        this.s_content.addChild(this.s_contButters);
    },


    SetLogo: function()
    {
        var logo = new createjs.Bitmap(Main.GetImage("preloader_logo"));
        this.s_content.addChild(logo);
        var bb = logo.getBounds();
        logo.x = 420 - bb.width >> 1;
        logo.y = 600 - bb.height;

        Main.s_stage.update();
    },


    SetUncle: function()
    {
        var uncle = new createjs.Bitmap(Main.GetImage("preloader_uncle"));
        this.s_content.addChild(uncle);
        var bb = uncle.getBounds();
        uncle.x = 420 - bb.width >> 1;
        uncle.y = 0;

        Main.s_stage.update();
    },


    SetProgress: function(value)
    {
        value = (value + 0.05) * 5 | 0;
        if (this.s_butters)
        {
            for (var i = 0; i < 5; i++)
            {
                if ( i + 1 == value )
                {
                    this.s_butters[i].visible = true;
                }
            }
            Main.s_stage.update();
        }
    }
};