function CStageMenu(iLevel, aScore){
    
    var _aStageButton;
    
    var _oFade;
    var _oButBack;
    var _oPanelContainer;
    var _oListener;
    
    var _pStartPanelPos;
    
    this._init = function(iLevel, aScore){
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oListener = _oFade.on("mousedown",function(){});
        s_oStage.addChild(_oFade);
        
        new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        
        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('next_level_box');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(oPanel);   
        
        var oTitleStroke = new createjs.Text(TEXT_SELECT_STAGE,"34px "+PRIMARY_FONT, "#000000");
        oTitleStroke.y = -oSprite.height/2 + 50;
        oTitleStroke.textAlign = "center";
        oTitleStroke.textBaseline = "middle";
        oTitleStroke.lineWidth = 400;
        oTitleStroke.outline = 5;
        _oPanelContainer.addChild(oTitleStroke);

        var oTitle = new createjs.Text(TEXT_SELECT_STAGE,"34px "+PRIMARY_FONT, "#c1e401");
        oTitle.y = oTitleStroke.y
        oTitle.textAlign = "center";
        oTitle.textBaseline = "middle";
        oTitle.lineWidth = 400;
        _oPanelContainer.addChild(oTitle);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2},500, createjs.Ease.quartIn).call(function(){
            
        });

        var oFrameSprite = s_oSpriteLibrary.getSprite('but_level');
        var oEnabledSprite = s_oSpriteLibrary.getSprite('image_'+iLevel);
        var oDisabledSprite = s_oSpriteLibrary.getSprite('cover_'+iLevel);
        _aStageButton = new Array();
        for(var i=0; i<STAGE_PER_WORLD; i++){
            var szLevel = i+1;
            _aStageButton[i] = new CLevelButton(0, -150 + (i*110),oFrameSprite, oDisabledSprite, oEnabledSprite, _oPanelContainer);
            _aStageButton[i].addEventListenerWithParams(ON_MOUSE_UP, this._onStageBut, this, i);
            _aStageButton[i].setScale(0.6);
            _aStageButton[i].addLevelText(szLevel);
            _aStageButton[i].disable();
            _aStageButton[i].addStar(0);
        }
        this._setStageInfo();
        

        var oSprite = s_oSpriteLibrary.getSprite('but_back');
        _oButBack = new CGfxButton(-120, 190, oSprite,_oPanelContainer);
        _oButBack.addEventListener(ON_MOUSE_UP, this._onBack, this);
    };
    
    this.unload = function(){
        for(var i=0; i<STAGE_PER_WORLD; i++){            
            _aStageButton[i].unload();
        }
        _oFade.off("mousedown",_oListener);
        
        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oPanelContainer);
    };
    
    this._setStageInfo = function(){     
        var iCurIndexActive = 0;
        for(var i=0; i<aScore.length; i++){
            if(aScore[i] > 0){
                iCurIndexActive = i+1;
            }
        }
        
        if(iCurIndexActive < STAGE_PER_WORLD){
            _aStageButton[iCurIndexActive].enable();
            _aStageButton[iCurIndexActive].addScore(0);
            _aStageButton[iCurIndexActive].pulseAnimation();
        }
        
        for(var i=0; i<iCurIndexActive; i++){            
            _aStageButton[i].enable();
            if(aScore[i]>0 && aScore[i]<SCORE_SECOND_STAR){
                _aStageButton[i].addStar(1);
            } else if(aScore[i]>=SCORE_SECOND_STAR && aScore[i]<SCORE_THIRD_STAR) {
                _aStageButton[i].addStar(2);
            } else {
                _aStageButton[i].addStar(3);
            }
            _aStageButton[i].addScore(aScore[i]);
        }
    };
    
    this._onStageBut = function(iStage){
        this.unload();
        s_oLevelMenu.unload();
        s_oMain.gotoGame(iLevel, iStage);       
    };
    
    this._onBack = function(){
        for(var i=0; i<3; i++){            
            _aStageButton[i].setClickable();
        }
        _oButBack.setClickable();
        var oParent = this;

        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            oParent.unload();
        });
        
    };
    

    this._init(iLevel, aScore);
};

