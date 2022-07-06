function CLevelButton(iXPos,iYPos,oFrameSprite, oDisabledSprite, oEnabledSprite, oParentContainer){
    
    var _bDisabled;
    
    var _iScaleFactor;
    
    var _aCbCompleted;
    var _aCbOwner;
    var _aParams = [];
    
    var _oButton;
    var _oFgContainer;
    var _oFrame;
    var _oLevelStroke = null;
    var _oLevel = null;
    var _oBg;
    var _oStar;
    var _oTween;
    var _oParent;
    var _oListenerMouseDown;
    var _oListenerMouseUp;
    var _oListenerMouseMove;
    
    this._init =function(iXPos,iYPos,oFrameSprite, oDisabledSprite, oEnabledSprite, oParentContainer){
        _bDisabled = false;
        
        _iScaleFactor = 1;
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oButton = new createjs.Container();
        _oButton.x = iXPos;
        _oButton.y = iYPos; 
        _oButton.scaleX = _oButton.scaleY = _iScaleFactor;
        oParentContainer.addChild(_oButton);       
        
        _oFgContainer = new createjs.Container();
        _oFgContainer.x = iXPos;
        _oFgContainer.y = iYPos; 
        _oFgContainer.scaleX = _oButton.scaleY = _iScaleFactor;
        oParentContainer.addChild(_oFgContainer);     
        
        var _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRoundRect(-65, -65, 130, 130,20);
        _oButton.addChild(_oFade);
        
        _oBg = createBitmap(oDisabledSprite);
        _oBg.regX = oDisabledSprite.width/2;
        _oBg.regY = oDisabledSprite.height/2;
        _oBg.scaleX = _oBg.scaleY = 0.25;  
        _oBg.compositeOperation = "source-in";
        _oBg.mask = _oFade;
        _oButton.addChild(_oBg);
        
        
        
        var iWidth = oFrameSprite.width/2;
        var iHeight = oFrameSprite.height;
        var oData = {   
                        images: [oFrameSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: iWidth, height: iHeight, regX: iWidth/2, regY: iHeight/2}, 
                        animations: {on:[0], off:[1]}
                   };
                   
         var oSpriteSheet = new createjs.SpriteSheet(oData);
		_oFrame = createSprite(oSpriteSheet, "on",iWidth/2,iHeight/2,iWidth,iHeight); 
        _oButton.addChild(_oFrame);
        
        
        this._initListener();
    };
    
    this.unload = function(){
        if(s_bMobile){
            _oButton.off("mousedown", _oListenerMouseDown);
            _oButton.off("pressup" , _oListenerMouseUp);
        } else {
            _oButton.off("mousedown", _oListenerMouseDown);
            _oButton.off("mouseover", _oListenerMouseMove);
            _oButton.off("pressup" , _oListenerMouseUp);
        }
        
       oParentContainer.removeChild(_oButton);
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this.enable = function(){
        _oFrame.gotoAndStop("on");
        _oBg.image = oEnabledSprite;
        _bDisabled = false;
        if(_oLevel !== null){
            _oLevelStroke.color = "#000000";
            _oLevel.color = "#c1e401";
        }
    };
    
    this.disable = function(){
        _bDisabled = true;
        _oBg.image = oDisabledSprite;
        _oFrame.gotoAndStop("off");
        if(_oLevel !== null){
            _oLevelStroke.color = "#000000";
            _oLevel.color = "#8c874e";
        }
    };
    
    this.setClickable = function(bVal){
        _bDisabled = !bVal;
    };
    
    this.addStar = function(iNumLitStar){
        var oSprite = s_oSpriteLibrary.getSprite('star');
        _oStar = new CAchievementStars(oSprite, 0,-oFrameSprite.height/2 +45,_oFgContainer);
        
        _oStar.getContainer().scaleX = _oStar.getContainer().scaleY = 0.30;
        _oStar.startLitStar(iNumLitStar);
    };
    
    this.addScore = function(iScore){
        var oScoreStroke = new createjs.Text(TEXT_SCORE + ": " +iScore,"18px "+PRIMARY_FONT, "#000000");
        oScoreStroke.y = oFrameSprite.height/2 - 50;
        oScoreStroke.textAlign = "center";
        oScoreStroke.textBaseline = "middle";
        oScoreStroke.lineWidth = 200;
        oScoreStroke.outline = 4;
        _oFgContainer.addChild(oScoreStroke);

        var oScore = new createjs.Text(TEXT_SCORE + ": " +iScore,"18px "+PRIMARY_FONT, "#c1e401");
        oScore.y = oScoreStroke.y;
        oScore.textAlign = "center";
        oScore.textBaseline = "middle";
        oScore.lineWidth = 200;
        _oFgContainer.addChild(oScore);
    };
    
    this.addLevelText = function(iLevel){
        _oLevelStroke = new createjs.Text(iLevel,"80px "+PRIMARY_FONT, "#000000");
        _oLevelStroke.textAlign = "center";
        _oLevelStroke.textBaseline = "middle";
        _oLevelStroke.lineWidth = 200;
        _oLevelStroke.outline = 8;
        _oButton.addChild(_oLevelStroke);

        _oLevel = new createjs.Text(iLevel,"80px "+PRIMARY_FONT, "#c1e401");
        _oLevel.textAlign = "center";
        _oLevel.textBaseline = "middle";
        _oLevel.lineWidth = 200;
        _oButton.addChild(_oLevel);
    };
    
    this._initListener = function(){
        if(s_bMobile){
            _oListenerMouseDown = _oButton.on("mousedown", this.buttonDown);
            _oListenerMouseUp = _oButton.on("pressup" , this.buttonRelease);
        } else {
            _oListenerMouseDown = _oButton.on("mousedown", this.buttonDown);
            _oListenerMouseMove = _oButton.on("mouseover", this.buttonOver);
            _oListenerMouseUp = _oButton.on("pressup" , this.buttonRelease);
        }      
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.addEventListenerWithParams = function(iEvent,cbCompleted, cbOwner,aParams){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };
    
    this.buttonRelease = function(){
        if(_bDisabled){
            return;
        }
        _oButton.scaleX = _iScaleFactor;
        _oButton.scaleY = _iScaleFactor;

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP], _aParams);
        }
    };
    
    this.buttonDown = function(){
        
        if(_bDisabled){
            return;
        }
        playSound("click",1,false);
        _oButton.scaleX = _iScaleFactor*0.9;
        _oButton.scaleY = _iScaleFactor*0.9;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN], _aParams);
       }
    };
    
    this.buttonOver = function(evt){
        if(!s_bMobile){
            if(_bDisabled){
                return;
            }
            evt.target.cursor = "pointer";
        }  
    };
    
    this.pulseAnimation = function () {
        _oTween = createjs.Tween.get(_oButton).to({scaleX: _iScaleFactor*0.9, scaleY: _iScaleFactor*0.9}, 850, createjs.Ease.quadOut).to({scaleX: _iScaleFactor, scaleY: _iScaleFactor}, 650, createjs.Ease.quadIn).call(function () {
            _oParent.pulseAnimation();
        });
    };

    this.trembleAnimation = function () {
        _oTween = createjs.Tween.get(_oButton).to({rotation: 5}, 75, createjs.Ease.quadOut).to({rotation: -5}, 140, createjs.Ease.quadIn).to({rotation: 0}, 75, createjs.Ease.quadIn).wait(750).call(function () {
            _oParent.trebleAnimation();
        });
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
    };
    
    this.setScale = function(iScale){
        _iScaleFactor = iScale;
        _oButton.scaleX = _oButton.scaleY = iScale;
    };
    
    this.setX = function(iXPos){
         _oButton.x = iXPos;
    };
    
    this.setY = function(iYPos){
         _oButton.y = iYPos;
    };
    
    this.getButtonImage = function(){
        return _oButton;
    };

    this.getX = function(){
        return _oButton.x;
    };
    
    this.getY = function(){
        return _oButton.y;
    };

    _oParent = this;
    this._init(iXPos,iYPos,oFrameSprite, oDisabledSprite, oEnabledSprite, oParentContainer);
    
    return this;
}


