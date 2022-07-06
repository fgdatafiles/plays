function CHelp(){
    
    var _oStart;
    var _oModePos;
    var _oModePos1;
    var _oStart1;
    
    var _oBg;
    var _oAudioToggle;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _oScoreNum;
    
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    
    this._init = function(){
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_help'));
        s_oStage.addChild(_oBg);
        
        _oModePos = {x: CANVAS_WIDTH-300, y: 775};
        
        var oSpriteStart = s_oSpriteLibrary.getSprite('but_play');
        _oStart = CTextButton(_oModePos.x,_oModePos.y,oSpriteStart,"START!",FONT,"#ffffff",60);
        _oStart.addEventListener(ON_MOUSE_UP, this._onStart, this, 0);

        _oModePos1 = {x: -400, y: 700};
        
        var oSpriteStart1 = s_oSpriteLibrary.getSprite('but_play');
        _oStart1 = CTextButton(_oModePos1.x,_oModePos1.y,oSpriteStart1,"BACK",FONT,"#ffffff",60);
        _oStart1.addEventListener(ON_MOUSE_UP, this._onMenu, this, 0);        

        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.width/4) -10, y: (oSprite.height/2) + 10};
            
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive,s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);          
        }
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && inIframe() === false){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x:oSprite.width/4 + 10,y:oSprite.height/2 +10};

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
        
        
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
        
    };  
    
    this.unload = function(){
        _oStart.unload();  
        _oStart1.unload();
        
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.unload();
        }
        
        s_oHelp = null;
        s_oStage.removeAllChildren();        
    };
    
    this._onStart = function(){
        s_oHelp.unload();
        s_oMain.gotoGame();
    };
    
    this._onMenu = function(){
        s_oHelp.unload();
        s_oMain.gotoMenu();
        
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, iNewY + _pStartPosAudio.y);
        }       
        
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX,_pStartPosFullscreen.y + s_iOffsetY);
        }
    };
    
    this.resetFullscreenBut = function(){
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.setActive(s_bFullscreen);
        }
        
    };
    
    this._onFullscreenRelease = function(){
        if(s_bFullscreen) { 
            _fCancelFullScreen.call(window.document);
        }else{
            _fRequestFullScreen.call(window.document.documentElement);
        }
        sizeHandler();
    };
              
    s_oHelp = this;        
    this._init();
    
    
};

var s_oHelp = null;