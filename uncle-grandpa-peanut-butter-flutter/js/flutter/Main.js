/**
 * Created by pawel on 02.10.2014.
 */
$(document).ready(function ()
{
    waitForWebfonts(['header'], function(){Main.Start();});
});


var Main = {

    SCALE: 1,
    s_stage: createjs.Stage,
    s_scene: createjs.Container,
    s_jsons: Array,
    s_spritesheets: Array,
    s_loader: createjs.LoadQueue,
    s_world: null,
    s_score: 0,
    s_best: 0,
    s_loaded: false,
    s_firstRun: true,


    Start: function()
    {
        var me = this;
        this.COPY = new CopyParser(function (){me.OnLoadCopy();}, 'copy/copy.xml');
    },


    OnLoadCopy: function()
    {
        //load assets
        this.Init();
    },


    Init: function()
    {
        var me = this;

        //create stage
        this.s_stage = new createjs.Stage(document.getElementById("canvasGame"));
        //this.s_stage.autoClear = false;
        this.s_scene = new createjs.Container();
        this.s_stage.addChild(this.s_scene);

        //
        Navigation.ShowScreen(Navigation.SCREEN_PRELOAD);

        //resize
//        window.parent.addEventListener('resize', function(){Main.ResizeCanvas();}, false);
        window.addEventListener('resize', function(){Main.ResizeCanvas();}, false);

        //
        this.s_jsons = new Array();
        this.s_spritesheets = new Array();

        //load data and sprite sheets
        var manifest = [
            {src: "images/game/preloader/sky.png", id: "preloader_sky"},
            {src: "images/game/preloader/butter.png", id: "preloader_butter"},
            {src: "images/game/preloader/logo_cn.png", id: "preloader_logo"},
            {src: "images/game/preloader/uncle.png", id: "preloader_uncle"},
            {src: "images/game/interface/logo_game_big.png", id: "logo_game_big"},
            {src: "images/game/interface/logo_game_small.png", id: "logo_game_small"},
            {src: "images/game/interface/logo_uncle_big.png", id: "logo_uncle_big"},
            {src: "images/game/interface/logo_uncle_small.png", id: "logo_uncle_small"},
            {src: "images/game/interface/rotate_bg.png", id: "rotate_bg"},
            {src: "images/game/interface/interface.json", id: "interface"},
            {src: "images/game/sky.png", id: "sky"},
            {src: "images/game/city.png", id: "city"},
            {src: "images/game/fence.png", id: "fence"},
            {src: "images/game/spritesheets/face.json", id: "face"},
            {src: "images/game/spritesheets/objects.json", id: "objects"},
            {src: "images/game/spritesheets/butter.json", id: "butter"},
            {src: "images/game/spritesheets/robot.json", id: "robot"},
            {src: "images/game/spritesheets/uncle.json", id: "uncle"}
        ];

        this.s_loader = new createjs.LoadQueue(false);
        this.s_loader.setMaxConnections = 10;
        this.s_loader.loadManifest(manifest);
        this.s_loader.addEventListener("fileload", function (e)
        {
            me.HandleFileLoad(e);
        });
        this.s_loader.addEventListener("progress", function (e)
        {
            me.OnLoadFilesProgress(e);
        });
        this.s_loader.addEventListener("complete", function (e)
        {
            me.OnLoadFiles(e);
        });

        //orientation and device
        var $body = $("body");
        if (this.IsMobile())
        {
            //mobile
            $body.addClass("mobile");

            //system
            if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/iPod/i))
            {
                $body.addClass("ios");
                if (navigator.userAgent.match(/iPad/i))
                {
                    $body.addClass("ipad");
                }
                else if (window.devicePixelRatio == 1)
                {
                    $body.addClass("no_sound");
                }
            }
            else
            {
                $body.addClass("android");
            }

            //orientation
//            var mm = window.matchMedia("(orientation: portrait)");
            var mm = matchMedia("(orientation: portrait)");

            // If there are matches, we're in portrait
            if(mm.matches)
            {
                // Portrait orientation
                this.OnChangeOrientation(true);
            }
            else
            {
                // Landscape orientation
                this.OnChangeOrientation(false);
            }

            //Add a media query change listener
            mm.addListener(mmListener);

            //
            this.ResizeCanvas();
        }
        else
        {
            //desktop
            $body.addClass("desktop");

            this.s_stage.enableMouseOver(15);

            this.ResizeCanvas();
        }
    },


    HandleFileLoad: function (e)
    {
        var id = e.item.id;
        if (e.item.type == "json" && e.result.images)
        {
            //load images from json sprite sheet
            this.s_jsons.push({id: id, result: e.result});
            for (var i = 0; i < e.result.images.length; i++)
            {
                this.s_loader.loadFile({src: e.result.images[i], id: id + "_" + i});
            }
        }
        else if (id.indexOf("preloader") >= 0)
        {
            if (id == "preloader_sky")
            {
                ScreenPreloader.SetSky();
            }
            else if (id == "preloader_butter")
            {
                ScreenPreloader.SetButter();
            }
            else if (id == "preloader_logo")
            {
                ScreenPreloader.SetLogo();
            }
            else if (id == "preloader_uncle")
            {
                ScreenPreloader.SetUncle();
            }
        }
    },


    OnLoadFilesProgress: function(e)
    {
        ScreenPreloader.SetProgress(0.8 * e.progress);
    },


    OnLoadFiles: function ()
    {
        this.s_loader.removeAllEventListeners("complete");
        this.s_loader.removeAllEventListeners("progress");
        this.s_loader.removeAllEventListeners("fileload");

        this.s_data = this.s_loader.getResult("data");

        //create sprite sheets
        for (var i = 0; i < this.s_jsons.length; i++)
        {
            this.s_spritesheets[this.s_jsons[i].id] = new createjs.SpriteSheet(this.s_jsons[i].result);
        }

        //
        if (!$("body").hasClass("no_sound"))
        {
            this.LoadSounds();
        }
        else
        {
            this.StartGame();
        }
    },


    LoadSounds: function()
    {
        var me = this;
        var sounds = [];
        sounds.push({id: "game_loop", src: "audio/theme_tune.mp3"});
        sounds.push({id: "arm_flap", src: "audio/arm_flap.mp3"});
        sounds.push({id: "funny_face", src: "audio/funny_face.mp3"});
        sounds.push({id: "good_morning", src: "audio/good_morning.mp3"});
        sounds.push({id: "tiger", src: "audio/tiger.mp3"});
        sounds.push({id: "splat", src: "audio/splat.mp3"});
        sounds.push({id: "crash", src: "audio/crash2.mp3"});

        SoundsManager.Init(sounds, me);
    },


    OnProgressSounds: function(e)
    {
        ScreenPreloader.SetProgress(e.progress * 0.2 + 0.8);
    },


    OnLoadSounds: function(e)
    {
        this.StartGame();
    },


    StartGame: function()
    {
        this.s_loaded = true;


        //
        this.s_world = new World();
        this.s_scene.addChild(this.s_world);

        //
        Navigation.ShowScreen(Navigation.SCREEN_FRONT);

        //
        if ($("body").hasClass("landscape"))
        {
            Navigation.ShowRotateScreen();
        }
    },


    GetSpriteSheet: function(id)
    {
        return this.s_spritesheets[id];
    },


    GetImage: function(id)
    {
        return this.s_loader.getResult(id);
    },


    GetItem: function(id)
    {
        return this.s_loader.getItem(id);
    },


    IsMobile: function()
    {
        return ("ontouchstart" in document.documentElement);
    },


    ResizeCanvas: function (h)
    {
        var $body = $("body");
        var canvas = document.getElementById('canvasGame');

        if (Main.IsMobile())
        {
            var pixelRatio = window.devicePixelRatio || 1;
            var width = $(window).width();
            var height;
            if (h)
            {
                height = h;
            }
            else
            {
                if ($body.hasClass("ios") && !$body.hasClass("ipad"))
                {
//                    height = Math.min(window.parent.innerHeight, $(window.parent).height());
                    height = Math.min(window.innerHeight, $(window).height());
                }
                else
                {
//                    height = $(window.parent).height();
                    height = $(window).height();
                }
            }

            //test
//            pixelRatio = 1;
//            width = (width > height) ? 960 : 768;
//            height = (width > height) ? 710 : 1024;

            //
            width *= pixelRatio;
            height *= pixelRatio;

            var scale = height / 950;
            if (width > height)
            {
                scale = height / 640;
            }
            canvas.width = width;
            canvas.height = height;
            canvas.style.width = (canvas.width / pixelRatio) + "px";
            canvas.style.height = (canvas.height / pixelRatio) + "px";
            $(".game").css("width", canvas.style.width);
            $(".game").css("height", canvas.style.height);

            this.SCALE = scale;

            if (this.s_world)
            {
                this.s_world.updateCanvasSize(canvas.width, canvas.height);
            }
            Navigation.UpdateCanvasSize(canvas.width, canvas.height);

            //
            positionPage();
        }
        else
        {
            var width = $(window).width();
            var height = $(window).height();
            var scale = Math.min(width / 768, height / 950);
            canvas.width = 768 * scale;
            canvas.height = 950 * scale;
            canvas.style.width = (canvas.width) + "px";
            canvas.style.height = (canvas.height) + "px";
            $(".game").css("width", canvas.style.width);
            $(".game").css("height", canvas.style.height);

            this.SCALE = scale;

            if (this.s_world)
            {
                this.s_world.updateCanvasSize(canvas.width, canvas.height);
            }
            Navigation.UpdateCanvasSize(canvas.width, canvas.height);
        }

        this.s_stage.update();
    },


    OnChangeOrientation: function(portrait)
    {
        if (this.s_orentation != portrait)
        {
            this.s_orentation = portrait;
            var $body = $("body");
            if (portrait)
            {
                $body.removeClass("landscape");
                $body.addClass("portrait");
                if (this.s_loaded)
                {
                    this.Resume();
                }
            }
            else
            {
                $body.addClass("landscape");
                $body.removeClass("portrait");
                if (this.s_loaded)
                {
                    this.Pause();
                }
            }

            //
            positionPage();
        }
    },


    Pause: function()
    {
        this.s_paused = true;
        Navigation.ShowRotateScreen();
    },


    Resume: function()
    {
        this.s_paused = false;
        Navigation.HideRotateScreen();
    },


    GetCanvasSize: function()
    {
        return {width: this.s_stage.canvas.width, height: this.s_stage.canvas.height};
    }

};


function mmListener(m)
{
    if(m.matches)
    {
        // Portrait orientation
        Main.OnChangeOrientation(true);
    }
    else
    {
        // Landscape orientation
        Main.OnChangeOrientation(false);
    }
}


function positionPage()
{
//    window.parent.scrollTo(0, 1);
    window.scrollTo(0, 1);
}


function getFontStyle(className)
{
    var x, sheets,classes;
    for (sheets = document.styleSheets.length-1; sheets >= 0; sheets--)
    {
        classes = document.styleSheets[sheets].rules || document.styleSheets[sheets].cssRules;
        for (x = 0; x < classes.length; x++)
        {
            if (classes[x].selectorText === className)
            {
                return  classes[x].style.font;
            }
        }
    }
    return false;
}


function waitForWebfonts(fonts, callback)
{
    var loadedFonts = 0;
    for(var i = 0, l = fonts.length; i < l; ++i)
    {
        (function(font)
        {
            var node = document.createElement('span');
            // Characters that vary significantly among different fonts
            node.innerHTML = 'giItT1WQy@!-/#';
            // Visible - so we can measure it - but not on the screen
            node.style.position      = 'absolute';
            node.style.left          = '-10000px';
            node.style.top           = '-10000px';
            // Large font size makes even subtle changes obvious
            node.style.fontSize      = '300px';
            // Reset any font properties
            node.style.fontFamily    = 'sans-serif';
            node.style.fontVariant   = 'normal';
            node.style.fontStyle     = 'normal';
            node.style.fontWeight    = 'normal';
            node.style.letterSpacing = '0';
            document.body.appendChild(node);

            // Remember width with no applied web font
            var width = node.offsetWidth;

            node.style.fontFamily = font;

            var interval;
            function checkFont()
            {
                // Compare current width with original width
                if(node && node.offsetWidth != width)
                {
                    ++loadedFonts;
                    node.parentNode.removeChild(node);
                    node = null;
                }

                // If all fonts have been loaded
                if(loadedFonts >= fonts.length)
                {
                    if(interval)
                    {
                        clearInterval(interval);
                    }
                    if(loadedFonts == fonts.length)
                    {
                        callback();
                        return true;
                    }
                }
            };

            if(!checkFont())
            {
                interval = setInterval(checkFont, 50);
            }
        })(fonts[i]);
    }
};