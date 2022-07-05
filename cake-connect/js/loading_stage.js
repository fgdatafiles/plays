// Stage for load game graphics
function LoadingStageInit()
{	
    // init stage
    this.stage = new PIXI.Stage(0x7fcbe2, true);		

    this.background = undefined;    // background sprite
    this.loadingBarTexture = undefined;
    this.loadingBarSprite = undefined;    // loading sprite
    this.font = undefined; // font for load 
    this.preAssetLoaderComplete = false;	// true if preassetloader complete load 
    this.fadeOutEffect = undefined;
    this.assetLoader= undefined;        // loader object 


    //called when all graphics loaded 
    this.onComplete = function()
    {
        console.log("Loading complete");
        // Init sound 
        SoundManager.Init();
        // restore sound manager mute state from config
        if(GAMEINFO.isSoundEnabled())
            SoundManager.Unmute();
        else
            SoundManager.Mute();

        var alias = GAME.stages.loading;// this
        alias.fadeOutEffect = new StageFadeEffect();
        alias.fadeOutEffect.Init(alias.stage, 0.02, function(th){
                //FIXME: add time delay
                GAME.currentStage.Fadeout();
                GAME.currentStage = GAME.stages.mainmenu; // GAME.stages.levels
                GAME.currentStage.Fadein();
                });
    }

    // called when stage is show
    this.Fadein = function()
    {	
        this.assetLoader = new GameLoader();
        this.assetLoader.Init();
        this.assetLoader.runPreloader(this.createImagesPreloadList(), 
            function(assetloader)
            {
                console.log("Preloader finish work");
                var alias = GAME.stages.loading; // this class
                // Start load
                alias.FillResourceList();

                // there is no asset loader yet
                alias.background = PIXI.Sprite.fromImage("loading_bg.png");    
                alias.background.position.x = GlobalScale(0);
                alias.background.position.y = GlobalScale(0);
                alias.stage.addChild(alias.background);

                alias.loadingBarTexture= new PIXI.Texture.fromImage("loading_red.png");
                alias.loadingBarSprite = new PIXI.Sprite(alias.loadingBarTexture);
                alias.loadingBarSprite.position.x = GlobalScale(98);
                alias.loadingBarSprite.position.y = GlobalScale(521);
                alias.stage.addChild(alias.loadingBarSprite);

                var fontSize = GlobalScale(120);
                alias.font = new PIXI.BitmapText("0%", {font: fontSize+"px loading_fnt"});
                alias.font.position.x = GlobalScale(250);
                alias.font.position.y = GlobalScale(560);
                alias.stage.addChild(alias.font);

                // main asset loader
                alias.assetLoader.runLoad(undefined, alias.onComplete);

                alias.SetProgres();
                alias.preAssetLoaderComplete = true;

            });
    }

    // called when stage is hide
    this.Fadeout = function(obj)
    {		
        this.assetLoader.Free(); 
    }

    this.Update = function()
    {  
        if(this.preAssetLoaderComplete !== true)
            return;

        // if this.fadeOutEffect === undefined - there loading process still work, false - need switch stages
        if(this.fadeOutEffect === undefined)
            this.SetProgres();//  
        else
            this.fadeOutEffect.Update();
    }

    // need to set progress value of bar
    this.SetProgres = function()
    {
        var physVal= Math.round(GlobalScale(440) * this.assetLoader.getStatus()/100);  // 440 is not magic number is this.loadingBarSprite.width
        if(physVal == 0)
            physVal = 1;

        var offset = {"x":GlobalScale(2), "y": GlobalScale(964)}; // In not a magic, see loading.json
        var rec = new PIXI.Rectangle(offset.x, offset.y, physVal, GlobalScale(155)); // 155 is not magic number is this.loadingBarSprite.height 
        this.loadingBarTexture.setFrame(rec);

        //update persent (0 .. 99 %)
        this.font.setText(this.assetLoader.getStatus().toString()+"%");
    }

    // create list of preloaded images (need to load font )
    this.createImagesPreloadList = function()
    {
        var img = new Array();

        // root
        img.push("./img/json/loading.json");                    
        img.push("./img/fonts/loading_font.fnt");

        return img;
    }

    // create list of all images in game
    this.FillResourceList = function()
    {	
        // objects
        this.assetLoader.addResource("","./img/json/objects.json", "g");
        // static objects
        this.assetLoader.addResource("","./img/json/static.json", "g");
        // objects/eyes
        this.assetLoader.addResource("","./img/json/eyes.json", "g");
        //gui objects thumbnails
        this.assetLoader.addResource("","./img/json/objthumb.json", "g");
        // star
        this.assetLoader.addResource("","./img/json/star.json", "g");
        // buttons
        this.assetLoader.addResource("","./img/json/buttons.json", "g");
        // labels 
        this.assetLoader.addResource("","./img/json/labels.json", "g");
        // energy progressbar, timer, star, backgrounds
        this.assetLoader.addResource("","./img/json/bg_progress_and_small_obj.json", "g");
        //windows_and_faillevel
        this.assetLoader.addResource("","./img/json/windows_and_faillevel.json", "g");
        // main menu
        this.assetLoader.addResource("","./img/json/main_menu.json", "g");

        // fonts
        this.assetLoader.addResource("","./img/fonts/game_top_menu.fnt", "g"); // font
        this.assetLoader.addResource("","./img/fonts/select_level.fnt", "g"); // font

        // music and sound
        this.assetLoader.addResource("maintheme", "./sound/main_theme.ogg", "m");
        this.assetLoader.addResource("click", "./sound/click.ogg", "m");
        this.assetLoader.addResource("onbutton", "./sound/onbutton.ogg", "m");
        this.assetLoader.addResource("onlockedbutton", "./sound/protect.ogg", "m");
        this.assetLoader.addResource("onlevelstart", "./sound/onlevelstart.ogg", "m");
        this.assetLoader.addResource("onlevelcomplete", "./sound/onlevelcomplete.ogg", "m");
        this.assetLoader.addResource("onlevelfail", "./sound/onlevelfail.ogg", "m");
        this.assetLoader.addResource("onsignreach", "./sound/onsignreach.ogg", "m");
        this.assetLoader.addResource("ongoalreached", "./sound/ongoalreached.ogg", "m");
        this.assetLoader.addResource("onstarfadeout", "./sound/star_fadeout.ogg", "m");

        //<strip>
            this.assetLoader.addResource("b1", "./sound/b1.ogg", "m");
            this.assetLoader.addResource("b2", "./sound/b2.ogg", "m");
            this.assetLoader.addResource("b3", "./sound/b3.ogg", "m");
        //</strip>
    }

}

