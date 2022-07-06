function CInterface(iWorld){
    var _oAudioToggle;
    var _oButExit;

    var _oHelpPanel=null;
    
    var _oScoreTextStroke;
    var _oScoreText;
    var _oScoreNumStroke;
    var _oScoreNum;
    var _oLife;
    var _oTextLifeStroke;
    var _oTextLife;
    var _oPercentageContainer;
    var _oPercentageBox;
    var _oPercentageFill;
    var _oMask;
    var _oCurPercentageTextStroke;
    var _oCurPercentageText;
    var _oIndicator;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    
    this._init = function(iWorld){                
        var oExitX;        
        
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        
        oExitX = CANVAS_WIDTH - (oSprite.width/2) - 100;
        _pStartPosAudio = {x: oExitX, y: (oSprite.height/2) + 10};
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);  
            
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x: _pStartPosAudio.x - oSprite.width/2 - 10,y:_pStartPosAudio.y};
        }else{
            _pStartPosFullscreen = {x: oExitX, y: (oSprite.height/2) + 10};
        }
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        _oScoreTextStroke = new createjs.Text(TEXT_SCORE,"28px "+PRIMARY_FONT, "#000000");
        _oScoreTextStroke.x = 20;
        _oScoreTextStroke.y = 130;
        _oScoreTextStroke.textAlign = "left";
        _oScoreTextStroke.textBaseline = "middle";
        _oScoreTextStroke.lineWidth = 200;
        _oScoreTextStroke.outline = 5;
        s_oStage.addChild(_oScoreTextStroke);
        
        _oScoreText = new createjs.Text(TEXT_SCORE,"28px "+PRIMARY_FONT, "#c1e401");
        _oScoreText.x = 20;
        _oScoreText.y = _oScoreTextStroke.y;
        _oScoreText.textAlign = "left";
        _oScoreText.textBaseline = "middle";
        _oScoreText.lineWidth = 200;
        s_oStage.addChild(_oScoreText);

        _oScoreNumStroke = new createjs.Text(0,"28px "+PRIMARY_FONT, "#000000");
        _oScoreNumStroke.x = _oScoreText.x + 132;
        _oScoreNumStroke.y = _oScoreText.y;
        _oScoreNumStroke.textAlign = "left";
        _oScoreNumStroke.textBaseline = "middle";
        _oScoreNumStroke.lineWidth = 200;
        _oScoreNumStroke.outline = 5;
        s_oStage.addChild(_oScoreNumStroke);
        
        _oScoreNum = new createjs.Text(0,"28px "+PRIMARY_FONT, "#c1e401");
        _oScoreNum.x = _oScoreNumStroke.x;
        _oScoreNum.y = _oScoreText.y;
        _oScoreNum.textAlign = "left";
        _oScoreNum.textBaseline = "middle";
        _oScoreNum.lineWidth = 200;
        s_oStage.addChild(_oScoreNum);

        var oSprite = s_oSpriteLibrary.getSprite('life');
        _oLife = createBitmap(oSprite);
        _oLife.regX = oSprite.width/2;
        _oLife.regY = oSprite.height/2;
        _oLife.x = 35;
        _oLife.y = 180;
        s_oStage.addChild(_oLife);

        _oTextLifeStroke = new createjs.Text("X"+HERO_LIFE,"28px "+PRIMARY_FONT, "#000000");
        _oTextLifeStroke.x = _oLife.x + 30;
        _oTextLifeStroke.y = _oLife.y;
        _oTextLifeStroke.textAlign = "left";
        _oTextLifeStroke.textBaseline = "middle";
        _oTextLifeStroke.lineWidth = 200;
        _oTextLifeStroke.outline = 5;
        s_oStage.addChild(_oTextLifeStroke);

        _oTextLife = new createjs.Text("X"+HERO_LIFE,"28px "+PRIMARY_FONT, "#c1e401");
        _oTextLife.x = _oLife.x + 30;
        _oTextLife.y = _oLife.y;
        _oTextLife.textAlign = "left";
        _oTextLife.textBaseline = "middle";
        _oTextLife.lineWidth = 200;
        s_oStage.addChild(_oTextLife);

        _oPercentageContainer = new createjs.Container();
        _oPercentageContainer.x = 250;
        _oPercentageContainer.y = _oLife.y; 
        s_oStage.addChild(_oPercentageContainer);

        var oSprite = s_oSpriteLibrary.getSprite('percentage_fill_'+iWorld);
        _oPercentageFill = createBitmap(oSprite);
        _oPercentageFill.regX = oSprite.width/2;
        _oPercentageFill.regY = oSprite.height/2;  
        _oPercentageContainer.addChild(_oPercentageFill);

        var oSprite = s_oSpriteLibrary.getSprite('percentage_box');
        var iBoxWidth = oSprite.width;
        var iBoxHeight = oSprite.height;        
        _oPercentageBox = createBitmap(oSprite);
        _oPercentageBox.regX = oSprite.width/2;
        _oPercentageBox.regY = oSprite.height/2;        
        
        
        var oSprite = s_oSpriteLibrary.getSprite('percentage_fill_'+iWorld);
        _oMask = new createjs.Shape();
        _oMask.x = _oPercentageFill.x -oSprite.width/2;
        _oMask.y = _oPercentageFill.y -oSprite.height/2;
        _oMask.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(0, 0, oSprite.width,oSprite.height);
        _oPercentageContainer.addChild(_oMask);
        _oPercentageFill.compositeOperation = "source-in";
        _oPercentageFill.mask = _oMask;        
        _oMask.scaleX = 0;
        
        _oCurPercentageTextStroke = new createjs.Text("0%","28px "+PRIMARY_FONT, "#000000");
        _oCurPercentageTextStroke.textAlign = "center";
        _oCurPercentageTextStroke.textBaseline = "middle";
        _oCurPercentageTextStroke.lineWidth = 200;
        _oCurPercentageTextStroke.outline = 5;
        _oPercentageContainer.addChild(_oCurPercentageTextStroke);
        
        _oCurPercentageText = new createjs.Text("0%","28px "+PRIMARY_FONT, "#c1e401");
        _oCurPercentageText.textAlign = "center";
        _oCurPercentageText.textBaseline = "middle";
        _oCurPercentageText.lineWidth = 200;
        _oPercentageContainer.addChild(_oCurPercentageText);
             
        var oSprite = s_oSpriteLibrary.getSprite('indicator');     
        _oIndicator = createBitmap(oSprite);
        _oIndicator.regX = oSprite.width/2;
        _oIndicator.regY = oSprite.height;
        _oIndicator.x = WIN_QUOTE[iWorld]*iBoxWidth/100 - iBoxWidth/2;
        _oIndicator.y = iBoxHeight/2;
        _oPercentageContainer.addChild(_oIndicator); 
             
        _oPercentageContainer.addChild(_oPercentageBox);
       
        var oTargetPercentageTextStroke = new createjs.Text(WIN_QUOTE[iWorld]+"%","16px "+PRIMARY_FONT, "#000000");
        oTargetPercentageTextStroke.x = _oIndicator.x;
        oTargetPercentageTextStroke.y = _oIndicator.y +10;
        oTargetPercentageTextStroke.textAlign = "center";
        oTargetPercentageTextStroke.textBaseline = "middle";
        oTargetPercentageTextStroke.lineWidth = 200;
        oTargetPercentageTextStroke.outline = 3;
        _oPercentageContainer.addChild(oTargetPercentageTextStroke);
        
        var oTargetPercentageText = new createjs.Text(WIN_QUOTE[iWorld]+"%","16px "+PRIMARY_FONT, "#ffd000");
        oTargetPercentageText.x = _oIndicator.x;
        oTargetPercentageText.y = _oIndicator.y+10;
        oTargetPercentageText.textAlign = "center";
        oTargetPercentageText.textBaseline = "middle";
        oTargetPercentageText.lineWidth = 200;
        _oPercentageContainer.addChild(oTargetPercentageText);
        
       
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this.unload = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        _oButExit.unload();
        if(_oHelpPanel!==null){
            _oHelpPanel.unload();
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.unload();
        }
        
        s_oInterface = null;        
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        _oButExit.setPosition(_pStartPosExit.x - iNewX,iNewY + _pStartPosExit.y);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x - s_iOffsetX,_pStartPosFullscreen.y + s_iOffsetY);
        }
    };

    this.refreshScore = function(iValue){
        _oScoreNum.text = iValue;
        _oScoreNumStroke.text = _oScoreNum.text;
        
        new createjs.Tween.get(_oScoreNum, {override:true}).to({scaleX:1.1, scaleY:1.1}, 100).to({scaleX:1, scaleY:1}, 100);
        
        new createjs.Tween.get(_oScoreNumStroke, {override:true}).to({scaleX:1.1, scaleY:1.1}, 100).to({scaleX:1, scaleY:1}, 100);
        
    };

    this.refreshLife = function(iValue){
        _oTextLife.text = "X"+iValue;
        _oTextLifeStroke.text = _oTextLife.text;
    };

    this.refreshPercentage = function(iValue){

        var iTruncNum = Number(iValue.toString().match(/^\d+(?:\.\d{0,1})?/));

        _oCurPercentageText.text = iTruncNum + "%";
        _oCurPercentageTextStroke.text = _oCurPercentageText.text;
        
        var iQuote = iValue/100;
        createjs.Tween.get(_oMask).to({scaleX:iQuote}, 400, createjs.Ease.cubicOut);
    };

    this.getNumScorePos = function(){
        return {x: _oScoreNum.x, y: _oScoreNum.y};
    };

    this._onButHelpRelease = function(){
        _oHelpPanel = new CHelpPanel();
    };
    
    this._onButRestartRelease = function(){
        s_oGame.restartGame();        
    };
    
    this.onExitFromHelp = function(){
        _oHelpPanel.unload();
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onExit = function(){ 
        new CAreYouSurePanel(s_oStage);
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
    
    s_oInterface = this;
    
    this._init(iWorld);
    
    return this;
}

var s_oInterface = null;