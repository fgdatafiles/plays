function CLevelMenu(){
    
    var _aLevelScore;
    var _aLevelButton;
    
    var _oBg;
    var _oButExit;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosExit;
    var _pStartPosFullscreen;
    
    this._init = function(){

        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        s_oStage.addChild(_oBg);
    
        var oTitleStroke = new createjs.Text(TEXT_SELECT_WORLD,"34px "+PRIMARY_FONT, "#000000");
        oTitleStroke.x = CANVAS_WIDTH/2;
        oTitleStroke.y = 200;
        oTitleStroke.textAlign = "center";
        oTitleStroke.textBaseline = "middle";
        oTitleStroke.lineWidth = 500;
        oTitleStroke.outline = 5;
        s_oStage.addChild(oTitleStroke);
    
        var oTitle = new createjs.Text(TEXT_SELECT_WORLD,"34px "+PRIMARY_FONT, "#c1e401");
        oTitle.x = oTitleStroke.x;
        oTitle.y = oTitleStroke.y;
        oTitle.textAlign = "center";
        oTitle.textBaseline = "middle";
        oTitle.lineWidth = 500;
        s_oStage.addChild(oTitle);    
    
        _aLevelScore = s_oLocalStorage.getItemJson(LOCALSTORAGE_SCORE);    
    
        _aLevelButton = new Array();        
        var oFrameSprite = s_oSpriteLibrary.getSprite('but_level');
        for(var i=0; i<4; i++){
            var iXPos = CANVAS_WIDTH/2 - 120+(i%2)*240;
            var oEnabledSprite = s_oSpriteLibrary.getSprite('image_'+i);
            var oDisabledSprite = s_oSpriteLibrary.getSprite('cover_'+i);
            _aLevelButton[i] = new CLevelButton(iXPos,400 + Math.floor(i/2)*200,oFrameSprite, oDisabledSprite, oEnabledSprite, s_oStage);
            _aLevelButton[i].addEventListenerWithParams(ON_MOUSE_UP, this._onLevelBut, this, i);
            _aLevelButton[i].disable();
        }
        this._setLevelActive();
    
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x: oSprite.width/4 + 10,y:_pStartPosExit.y};

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
        
        
        s_iTotalScore = 0;
        for(var i=0; i<_aLevelScore.length; i++){
            s_iTotalScore += _aLevelScore[i];
        };
        
        var oScoreStroke = new createjs.Text(TEXT_TOTAL_SCORE + " "+s_iTotalScore,"48px "+PRIMARY_FONT, "#000000");
        oScoreStroke.x = CANVAS_WIDTH/2;
        oScoreStroke.y = 740;
        oScoreStroke.textAlign = "center";
        oScoreStroke.textBaseline = "middle";
        oScoreStroke.lineWidth = 500;
        oScoreStroke.outline = 5;
        s_oStage.addChild(oScoreStroke);

        var oScore = new createjs.Text(TEXT_TOTAL_SCORE + " " +s_iTotalScore,"48px "+PRIMARY_FONT, "#c1e401");
        oScore.x = oScoreStroke.x;
        oScore.y = oScoreStroke.y;
        oScore.textAlign = "center";
        oScore.textBaseline = "middle";
        oScore.lineWidth = 500;
        s_oStage.addChild(oScore);
        
    
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        _oButExit.setPosition(_pStartPosExit.x - iNewX,iNewY + _pStartPosExit.y);
        
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX,_pStartPosFullscreen.y + s_iOffsetY);
        }
    };
    
    this.unload = function(){
        for(var i=0; i<_aLevelButton.length; i++){
            _aLevelButton[i].unload();
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.unload();
        }
        _oButExit.unload();
        
        s_oLevelMenu = null;
        s_oStage.removeAllChildren();
    };
    
    this._setLevelActive = function(){
        var iCurIndexActive = 0;
        for(var i=0; i<_aLevelScore.length; i++){
            if(_aLevelScore[i] > 0){
                iCurIndexActive = i+1;
            }
        }
        
        if(iCurIndexActive === STAGE_PER_WORLD*_aLevelButton.length){
            for(var i=0; i<_aLevelButton.length; i++){
                _aLevelButton[i].enable();
            }
        } else {
            var iNumLevelActive = Math.floor(iCurIndexActive/STAGE_PER_WORLD);
            
            for(var i=0; i<iNumLevelActive+1; i++){
                _aLevelButton[i].enable();
            }
            _aLevelButton[iNumLevelActive].pulseAnimation();
        }

    };
    
    this._onLevelBut = function(iWorld){
        var iStartIndex  = iWorld*STAGE_PER_WORLD;
        
        var aScore = new Array();        
        aScore = [_aLevelScore[iStartIndex], _aLevelScore[iStartIndex+1], _aLevelScore[iStartIndex+2]]
        new CStageMenu(iWorld, aScore);
    };
    
    this._onExit = function(){
        $(s_oMain).trigger("end_session");
        this.unload();
        s_oMain.gotoMenu();
    };
    
    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.enabled){
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
    
    s_oLevelMenu = this;
    this._init();
};


var s_oLevelMenu = null;