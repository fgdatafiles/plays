function CMain(oData) {
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;
    var _oPreloader;
    var _oMenu;
    var _oGame;
    var _oLevelMenu;

    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
	s_oStage.preventSelection = false;
        createjs.Touch.enable(s_oStage);

        s_bMobile = jQuery.browser.mobile;
        if (s_bMobile === false) {
            s_oStage.enableMouseOver(20);
            $('body').on('contextmenu', '#canvas', function (e) {
                return false;
            });
        }

        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);

        if (navigator.userAgent.match(/Windows Phone/i)) {
            DISABLE_SOUND_MOBILE = true;
        }

        s_oSpriteLibrary = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
    };

    this.preloaderReady = function () {
        this._loadImages();
        
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            this._initSounds();
        }

        
        _bUpdate = true;
    };

    this.soundLoaded = function () {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);

        if (_iCurResource === RESOURCE_TO_LOAD) {
			setTimeout(function () {s_oMain._onRemovePreloader();}, 5000);
        }
    };
    
    this._initSounds = function(){
        var aSoundsInfo = new Array();
        aSoundsInfo.push({path: './sounds/',filename:'game_over',loop:false,volume:1, ingamename: 'game_over'});
        aSoundsInfo.push({path: './sounds/',filename:'click',loop:false,volume:1, ingamename: 'click'});
        aSoundsInfo.push({path: './sounds/',filename:'game_completed',loop:false,volume:1, ingamename: 'game_completed'});
        aSoundsInfo.push({path: './sounds/',filename:'barrel_active',loop:false,volume:1, ingamename: 'barrel_active'});
        aSoundsInfo.push({path: './sounds/',filename:'barrel_explosion',loop:false,volume:1, ingamename: 'barrel_explosion'});
        aSoundsInfo.push({path: './sounds/',filename:'enemy_death',loop:false,volume:1, ingamename: 'enemy_death'});
        aSoundsInfo.push({path: './sounds/',filename:'money',loop:false,volume:1, ingamename: 'money'});
        aSoundsInfo.push({path: './sounds/',filename:'pirate_death',loop:false,volume:1, ingamename: 'pirate_death'});
        aSoundsInfo.push({path: './sounds/',filename:'power_up',loop:false,volume:1, ingamename: 'power_up'});
        aSoundsInfo.push({path: './sounds/',filename:'stage_clear',loop:false,volume:1, ingamename: 'stage_clear'});
        aSoundsInfo.push({path: './sounds/',filename:'trap_floor_in',loop:false,volume:1, ingamename: 'trap_floor_in'});
        aSoundsInfo.push({path: './sounds/',filename:'trap_floor_out',loop:false,volume:1, ingamename: 'trap_floor_out'});
        aSoundsInfo.push({path: './sounds/',filename:'soundtrack',loop:true,volume:1, ingamename: 'soundtrack'});
        
        RESOURCE_TO_LOAD += aSoundsInfo.length;

        s_aSounds = new Array();
        for(var i=0; i<aSoundsInfo.length; i++){
            s_aSounds[aSoundsInfo[i].ingamename] = new Howl({ 
                                                            src: [aSoundsInfo[i].path+aSoundsInfo[i].filename+'.mp3', aSoundsInfo[i].path+aSoundsInfo[i].filename+'.ogg'],
                                                            autoplay: false,
                                                            preload: true,
                                                            loop: aSoundsInfo[i].loop, 
                                                            volume: aSoundsInfo[i].volume,
                                                            onload: s_oMain.soundLoaded
                                                        });
        }
        
    }; 
    
    

    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);

        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game_completed", "./sprites/bg_game_completed.png");
        s_oSpriteLibrary.addSprite("bg_game_over", "./sprites/bg_game_over.png");
        s_oSpriteLibrary.addSprite("bg_level_1", "./sprites/bg_level_1.jpg");

        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("icon_audio", "./sprites/icon_audio.png");

        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");

        s_oSpriteLibrary.addSprite("hero_bottom", "./sprites/hero_bottom.png");
        s_oSpriteLibrary.addSprite("hero_left", "./sprites/hero_left.png");
        s_oSpriteLibrary.addSprite("hero_right", "./sprites/hero_right.png");
        s_oSpriteLibrary.addSprite("hero_top", "./sprites/hero_top.png");

        s_oSpriteLibrary.addSprite("life", "./sprites/life.png");
        
        s_oSpriteLibrary.addSprite("bg_level", "./sprites/bg_level.png");

        s_oSpriteLibrary.addSprite("cell", "./sprites/cell.png");
        
        s_oSpriteLibrary.addSprite("keyboard", "./sprites/keyboard.png");
        
        s_oSpriteLibrary.addSprite("hand_touch", "./sprites/hand_touch.png");
        
        s_oSpriteLibrary.addSprite("swipe", "./sprites/swipe.png");

        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        
        for (var i = 0; i < TYPES_OF_OBJECT; i++) {
            s_oSpriteLibrary.addSprite("object_" + i, "./sprites/object_" + i + ".png");
        }

        for (var i = 0; i < TYPES_OF_FLOOR; i++) {
            s_oSpriteLibrary.addSprite("floor_" + i, "./sprites/floor_" + i + ".jpg");
        }

        for (var i = 0; i < TYPES_OF_ENEMY; i++) {
            s_oSpriteLibrary.addSprite("enemy_bottom_" + i, "./sprites/enemy_bottom_" + i + ".png");
            s_oSpriteLibrary.addSprite("enemy_top_" + i, "./sprites/enemy_top_" + i + ".png");
            s_oSpriteLibrary.addSprite("enemy_left_right_" + i, "./sprites/enemy_left_right_" + i + ".png");
        }

        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this._onImagesLoaded = function () {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);
        
        if (_iCurResource === RESOURCE_TO_LOAD) {
			setTimeout(function () {s_oMain._onRemovePreloader();}, 5000);
        }
    };

    this._onAllImagesLoaded = function () {
        
    };

    this._onRemovePreloader = function(){

		_oPreloader.unload();

        if (!isIOS()) {
            s_oSoundTrack = playSound("soundtrack", 1, true);
        }
        

        this.gotoMenu();
    };
    
    this.gotoMenu = function () {
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };

    this.gotoGame = function (iLevel) {
        _oGame = new CGame(_oData, iLevel);
        _iState = STATE_GAME;

        $(s_oMain).trigger("start_session");
    };

    this.gotoLevelMenu = function () {
        _oLevelMenu = new CLevelMenu();
        _iState = STATE_MENU;
    };

    this.stopUpdate = function(){
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display","block");
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            Howler.mute(true);
        }
        
    };

    this.startUpdate = function(){
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display","none");
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            if(s_bAudioActive){
                Howler.mute(false);
            }
        }
        
    };

    this._update = function (event) {
        if (_bUpdate === false) {
            return;
        }
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;

        if (s_iCntTime >= 1000) {
            s_iCurFps = s_iCntFps;
            s_iCntTime -= 1000;
            s_iCntFps = 0;
        }

        if (_iState === STATE_GAME) {
            _oGame.update();
        }

        s_oStage.update(event);

    };

    s_oMain = this;

    _oData = oData;
    ENABLE_FULLSCREEN = oData.fullscreen;
    ENABLE_CHECK_ORIENTATION = oData.check_orientation;

    this.initContainer();
}

var s_bMobile;
var s_bAudioActive = true;
var s_bFullscreen = false;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_iLevelReached = 1;

var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oSoundTrack = null;
var s_oCanvas;
var s_aSounds;