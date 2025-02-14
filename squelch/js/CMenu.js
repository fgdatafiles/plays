var bPlayOnce = false;

function CMenu(){
    var _pStartPosAudio;
    var _pStartPosPlay;
    var _pStartPosCredits;
	var _pStartPosFullscreen;
    
    var _oBg;
	var _oBgSprite;
	var _oBgButton;
    var _oButPlay;
	var _oButBackground;
    //var _oButCredits;
    var _oAudioToggle;
    var _oFade;
	var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    this._init = function(){
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
	
		
		_oBg.addEventListener(ON_MOUSE_UP, this.playAudio, this)
        s_oStage.addChild(_oBg);
		
		_oBgSprite = s_oSpriteLibrary.getSprite('bg_menu');
		_oBgButton = new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT/2,_oBgSprite," ",FONT_GAME,"White","36",s_oStage);
        _oBgButton.addEventListener(ON_MOUSE_UP, this.playAudio, this);
		_pStartPosPlay = {x:(CANVAS_WIDTH/2),y:CANVAS_HEIGHT - 150};
        var oSprite = s_oSpriteLibrary.getSprite('but_menu_bg');
		
		
        _oButPlay = new CTextButton(_pStartPosPlay.x,_pStartPosPlay.y,oSprite," ",FONT_GAME,"White","36",s_oStage);
		_oButPlay.setScale(2);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10};            
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);  
		     _pStartPosFullscreen = {x:_pStartPosAudio.x-oSprite.width/2 - 10,y:oSprite.height/2 + 10};
        }else{
			 _pStartPosFullscreen = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10}; 
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
           
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,true);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
		
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0}, 1000).call(function(){_oFade.visible = false;});  
		//if (!bPlayOnce)
		//{
		//	bPlayOnce = true;
		//	
		//}
		
		
		
	this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
	this.playAudio = function(){
		if(bPlayOnce === false)
		{
			bPlayOnce = true;
			playSound("main", 1,-1);
		}
	}
	
	
    this.unload = function(){
        _oButPlay.unload(); 
        _oButPlay = null;
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.unload();
        }
        s_oStage.removeAllChildren();
    };
	
    this.refreshButtonPos = function(iNewX,iNewY){
            _oButPlay.setPosition(_pStartPosPlay.x,_pStartPosPlay.y - iNewY);
            if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
                    _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
            }
			if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x - iNewX,_pStartPosFullscreen.y + iNewY);
        }
            //_oButCredits.setPosition(_pStartPosCredits.x + iNewX,_pStartPosCredits.y + iNewY);
            
    };
    
    this._onButPlayRelease = function(){
        this.unload();
	
        $(s_oMain).trigger("start_session");
        s_oMain.gotoGame();
		this.playAudio();
	s_oMenu = null;
    };
    
    this._onButCreditsRelease = function(){
        new CCredits();
    };

    this._onAudioToggle = function(){
        s_bAudioActive = !s_bAudioActive;
        _oAudioToggle.setActive(s_bAudioActive);
        createjs.Sound.setMute(!s_bAudioActive);
		this.playAudio();
    };
	
	this._onFullscreenRelease = function(){
        if(s_bFullscreen) { 
            _fCancelFullScreen.call(window.document);
            s_bFullscreen = false;
        }else{
            _fRequestFullScreen.call(window.document.documentElement);
            s_bFullscreen = true;
        }
        this.playAudio();
        sizeHandler();
    };
	
	s_oMenu = this;
    
    this._init();
}

var s_oMenu = null;