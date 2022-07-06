function CMain(oData){
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;
    
    var _oPreloader;
    var _oMenu;
    var _oLevelMenu;
    var _oHelp;
    var _oGame;

    this.initContainer = function(){
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
		s_oStage.preventSelection = false;
        createjs.Touch.enable(s_oStage);
		
	s_bMobile = jQuery.browser.mobile;
        if(s_bMobile === false){
            s_oStage.enableMouseOver(20);  
            $('body').on('contextmenu', '#canvas', function(e){ return false; });
        }
		
        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        
        if(navigator.userAgent.match(/Windows Phone/i)){
                DISABLE_SOUND_MOBILE = true;
        }
        
        s_oSpriteLibrary  = new CSpriteLibrary();

        s_oTweenController = new CTweenController();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
	
        s_oLocalStorage = new CLocalStorage("virus_attack");
        
    };
    
    this.preloaderReady = function(){
        this._loadImages();
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            this._initSounds();
        }
        
        
        _bUpdate = true;
    };
    
    this.soundLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        _oPreloader.refreshLoader(iPerc);
    };
    
    this._initSounds = function(){
        var aSoundsInfo = new Array();
        aSoundsInfo.push({path: './sounds/',filename:'boss_idle',loop:false,volume:1, ingamename: 'boss_idle'});
        aSoundsInfo.push({path: './sounds/',filename:'click',loop:false,volume:1, ingamename: 'click'});
        aSoundsInfo.push({path: './sounds/',filename:'minion_anim',loop:false,volume:1, ingamename: 'minion_anim'});
        aSoundsInfo.push({path: './sounds/',filename:'hero_dead',loop:false,volume:1, ingamename: 'hero_dead'});
        aSoundsInfo.push({path: './sounds/',filename:'weaving',loop:false,volume:1, ingamename: 'weaving'});
        aSoundsInfo.push({path: './sounds/',filename:'close_mask',loop:false,volume:1, ingamename: 'close_mask'});
        aSoundsInfo.push({path: './sounds/',filename:'boss_dead',loop:false,volume:1, ingamename: 'boss_dead'});
        aSoundsInfo.push({path: './sounds/',filename:'virus_dead_0',loop:false,volume:1, ingamename: 'virus_dead_0'});
        aSoundsInfo.push({path: './sounds/',filename:'virus_dead_1',loop:false,volume:1, ingamename: 'virus_dead_1'});
        aSoundsInfo.push({path: './sounds/',filename:'game_over',loop:false,volume:1, ingamename: 'game_over'});
        aSoundsInfo.push({path: './sounds/',filename:'win',loop:false,volume:1, ingamename: 'win'});
        aSoundsInfo.push({path: './sounds/',filename:'star',loop:false,volume:1, ingamename: 'star'});
        aSoundsInfo.push({path: './sounds/',filename:'soundtrack',loop:true,volume:1, ingamename: 'soundtrack'});
        
        RESOURCE_TO_LOAD += aSoundsInfo.length;

        s_aSounds = new Array();
        for(var i=0; i<aSoundsInfo.length; i++){
            s_aSounds[aSoundsInfo[i].ingamename] = new Howl({ 
                                                            src: [aSoundsInfo[i].path+aSoundsInfo[i].filename+'.mp3'],
                                                            autoplay: false,
                                                            preload: true,
                                                            loop: aSoundsInfo[i].loop, 
                                                            volume: aSoundsInfo[i].volume,
                                                            onload: s_oMain.soundLoaded
                                                        });
        }
        
    };  
    
    
    this._loadImages = function(){
        s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );

        s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");
        
        s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg"); 
        s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");
        
        s_oSpriteLibrary.addSprite("keys","./sprites/keys.png");
        s_oSpriteLibrary.addSprite("space_bar","./sprites/space_bar.png");
        s_oSpriteLibrary.addSprite("swift_hand","./sprites/swift_hand.png");
        s_oSpriteLibrary.addSprite("touch_hand","./sprites/touch_hand.png");
        
        s_oSpriteLibrary.addSprite("but_info","./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_yes_big","./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("but_exit_big","./sprites/but_exit_big.png");
        s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("game_over_box","./sprites/game_over_box.png");
        s_oSpriteLibrary.addSprite("intro_level_box","./sprites/intro_level_box.png");
        s_oSpriteLibrary.addSprite("next_level_box","./sprites/next_level_box.png");
        s_oSpriteLibrary.addSprite("credits_panel","./sprites/credits_panel.png");
        s_oSpriteLibrary.addSprite("ctl_logo","./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("star","./sprites/star.png");
        s_oSpriteLibrary.addSprite("but_next","./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_back","./sprites/but_back.png");

        s_oSpriteLibrary.addSprite("but_restart","./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_level","./sprites/but_level.png");
        
        s_oSpriteLibrary.addSprite("hero","./sprites/hero.png");        
        s_oSpriteLibrary.addSprite("life","./sprites/life.png");        
        s_oSpriteLibrary.addSprite("percentage_box","./sprites/percentage_box.png");
        s_oSpriteLibrary.addSprite("indicator","./sprites/indicator.png");
        s_oSpriteLibrary.addSprite("but_fullscreen","./sprites/but_fullscreen.png");
        
        
        s_oSpriteLibrary.addSprite("pill","./sprites/pill.png");
        s_oSpriteLibrary.addSprite("boss0","./sprites/boss0.png");
        s_oSpriteLibrary.addSprite("boss1","./sprites/boss1.png");
        s_oSpriteLibrary.addSprite("boss2","./sprites/boss2.png");
        s_oSpriteLibrary.addSprite("boss3","./sprites/boss3.png");
        s_oSpriteLibrary.addSprite("virus0","./sprites/virus0.png");
        s_oSpriteLibrary.addSprite("virus1","./sprites/virus1.png");
        s_oSpriteLibrary.addSprite("virus2","./sprites/virus2.png");
        s_oSpriteLibrary.addSprite("virus3","./sprites/virus3.png");
        
        s_oSpriteLibrary.addSprite("frame_cover","./sprites/frame_cover.png");
        for(var i=0; i<4; i++){
            s_oSpriteLibrary.addSprite("percentage_fill_"+i,"./sprites/percentage_fill_"+i+".png");
            s_oSpriteLibrary.addSprite("image_"+i,"./sprites/image_"+i+".jpg");
            s_oSpriteLibrary.addSprite("cover_"+i,"./sprites/cover_"+i+".jpg");
        }
        
        
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };
    
    this._onImagesLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        //console.log("PERC: "+iPerc);
        _oPreloader.refreshLoader(iPerc);

    };
    
    this._onAllImagesLoaded = function(){
        
    };

    this._onRemovePreloader = function(){
        _oPreloader.unload();

        s_oSoundTrack = playSound("soundtrack", 1, true);

        s_oMain.gotoMenu();
    };

    this.gotoMenu = function(){
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };    
    
    this.gotoLevelMenu = function(){
        _oLevelMenu = new CLevelMenu();
        _iState = STATE_MENU;
    };
    

    this.gotoGame = function(iWorld, iStage){ 
        _oGame = new CGame(_oData, iWorld, iStage);   						
        _iState = STATE_GAME;
    };
    
    this.gotoHelp = function(){
        _oHelp = new CHelp();
        _iState = STATE_HELP;
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
    
    
    this._update = function(event){
		if(_bUpdate === false){
			return;
		}
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;
        
        if ( s_iCntTime >= 1000 ){
            s_iCurFps = s_iCntFps;
            s_iCntTime-=1000;
            s_iCntFps = 0;
        }
                
        if(_iState === STATE_GAME){
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
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oCanvas;
var s_oTweenController;
var s_oLocalStorage;
var s_bFullscreen = false;
var s_bStorageAvailable = true;
var s_iTotalScore = 0;
var s_oSoundTrack = null;