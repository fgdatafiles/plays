function CMain(oData){
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;
    
    var _oPreloader;
    var _oMenu;
    var _oChooseMenu;
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
        createjs.Ticker.framerate = 30;
        
        if(navigator.userAgent.match(/Windows Phone/i)){
                DISABLE_SOUND_MOBILE = true;
        }
        
        s_oTweenController = new CTweenController();
        
        s_oSpriteLibrary  = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
		
	s_aTeamLoaded= new Array();
        for(var i=0;i<NUM_TEAMS;i++){
            s_aTeamLoaded[i] = false;
        }
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
        Howler.mute(!s_bAudioActive);


        s_aSoundsInfo = new Array();
        s_aSoundsInfo.push({path: './sounds/',filename:'crowd',loop:false,volume:1, ingamename: 'crowd'});
        s_aSoundsInfo.push({path: './sounds/',filename:'click',loop:false,volume:1, ingamename: 'click'});
        s_aSoundsInfo.push({path: './sounds/',filename:'game_over',loop:false,volume:1, ingamename: 'game_over'});
        s_aSoundsInfo.push({path: './sounds/',filename:'kick',loop:false,volume:1, ingamename: 'kick'});
        s_aSoundsInfo.push({path: './sounds/',filename:'goal',loop:false,volume:1, ingamename: 'goal'});
        s_aSoundsInfo.push({path: './sounds/',filename:'miss_goal',loop:false,volume:1, ingamename: 'miss_goal'});
        s_aSoundsInfo.push({path: './sounds/',filename:'red_area',loop:false,volume:1, ingamename: 'red_area'});
        s_aSoundsInfo.push({path: './sounds/',filename:'yellow_area',loop:false,volume:1, ingamename: 'yellow_area'});
        s_aSoundsInfo.push({path: './sounds/',filename:'green_area',loop:false,volume:1, ingamename: 'green_area'});
        s_aSoundsInfo.push({path: './sounds/',filename:'soundtrack',loop:true,volume:1, ingamename: 'soundtrack'});
        
        RESOURCE_TO_LOAD += s_aSoundsInfo.length;

        s_aSounds = new Array();
        for(var i=0; i<s_aSoundsInfo.length; i++){
            this.tryToLoadSound(s_aSoundsInfo[i], false);
        }
        
    };  
    
    this.tryToLoadSound = function(oSoundInfo, bDelay){
        
       setTimeout(function(){        
            s_aSounds[oSoundInfo.ingamename] = new Howl({ 
                                                            src: [oSoundInfo.path+oSoundInfo.filename+'.mp3'],
                                                            autoplay: false,
                                                            preload: true,
                                                            loop: oSoundInfo.loop, 
                                                            volume: oSoundInfo.volume,
                                                            onload: s_oMain.soundLoaded,
                                                            onloaderror: function(szId,szMsg){
                                                                                for(var i=0; i < s_aSoundsInfo.length; i++){
                                                                                     if ( szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id){
                                                                                         s_oMain.tryToLoadSound(s_aSoundsInfo[i], true);
                                                                                         break;
                                                                                     }
                                                                                }
                                                                        },
                                                            onplayerror: function(szId) {
                                                                for(var i=0; i < s_aSoundsInfo.length; i++){
                                                                                     if ( szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id){
                                                                                          s_aSounds[s_aSoundsInfo[i].ingamename].once('unlock', function() {
                                                                                            s_aSounds[s_aSoundsInfo[i].ingamename].play();
                                                                                            if(s_aSoundsInfo[i].ingamename === "soundtrack" && s_oGame !== null){
                                                                                                setVolume("soundtrack",SOUNDTRACK_VOLUME_IN_GAME);
                                                                                            }

                                                                                          });
                                                                                         break;
                                                                                     }
                                                                                 }
                                                                       
                                                            } 
                                                        });

            
        }, (bDelay ? 200 : 0) );
        
        
    };


    this._loadImages = function(){
        s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );

        s_oSpriteLibrary.addSprite("logo","./sprites/logo.png");
        s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("ctl_logo","./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info","./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big","./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("but_exit_big","./sprites/but_exit_big.png");
        s_oSpriteLibrary.addSprite("but_home","./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("arrow","./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("but_fullscreen","./sprites/but_fullscreen.png");
        
        s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");
        for(var i=1; i<=5; i++){
            s_oSpriteLibrary.addSprite("bg_game_"+i,"./sprites/bg_game_"+i+"/bg_game_"+i+".jpg");
            s_oSpriteLibrary.addSprite("post_"+i,"./sprites/bg_game_"+i+"/post_"+i+".png");
            s_oSpriteLibrary.addSprite("green_area_"+i,"./sprites/bg_game_"+i+"/green_area_"+i+".png");
            s_oSpriteLibrary.addSprite("yellow_area_"+i,"./sprites/bg_game_"+i+"/yellow_area_"+i+".png");
            s_oSpriteLibrary.addSprite("red_area_"+i,"./sprites/bg_game_"+i+"/red_area_"+i+".png");
        }

        
        s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_restart","./sprites/but_restart.png");        
        s_oSpriteLibrary.addSprite("arrow_bar","./sprites/arrow_bar.png");
        s_oSpriteLibrary.addSprite("top_bar","./sprites/top_bar.png");
        s_oSpriteLibrary.addSprite("right_bar","./sprites/right_bar.png");
        
        s_oSpriteLibrary.addSprite("ball","./sprites/ball.png");
        s_oSpriteLibrary.addSprite("ball_holder","./sprites/ball_holder.png");
        s_oSpriteLibrary.addSprite("bg_choose_team","./sprites/bg_choose_team.jpg");
        s_oSpriteLibrary.addSprite("progress_loading","./sprites/progress_loading.png");
        
        for(var k=0;k<NUM_TEAMS;k++){
            s_oSpriteLibrary.addSprite("team_"+k,"./sprites/player_team_panels/team_"+k+".png");
        }
        
        
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };
    
    this._onImagesLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        _oPreloader.refreshLoader(iPerc);

    };
    
    this._onAllImagesLoaded = function(){
        
    };
    
    this._allResourcesLoaded = function(){
        _oPreloader.unload();
        
        try{
            saveItem("ls_available","ok");
        }catch(evt){
            // localStorage not defined
            s_bStorageAvailable = false;
        }
        
        s_oSoundTrack = playSound("soundtrack", 1, true);
        
        
        s_oMain.gotoMenu();
    };

    
    this.gotoMenu = function(){
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };
    
    this.gotoChooseMenu = function(){
        _oChooseMenu = new CChooseMenu();
        
        _iState = STATE_SELECT_TEAM;
    }

    this.gotoGame = function(){
        _oGame = new CGame(_oData);   						
        _iState = STATE_GAME;
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
    s_bAudioActive = oData.audio_enable_on_startup;

    
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
var s_oSoundtrack = null;
var s_oCanvas;
var s_oTweenController;
var s_bFullscreen = false;
var s_aSounds;
var s_iTeamSelected;
var s_aTeamLoaded;
var s_iBestScore = 0;
var s_bStorageAvailable = true;
var s_aSoundsInfo;