function CCongratulationPanel(){
    
    var _oFade;
    var _oPanelContainer;
    var _oButExit;
    var _oListener;
    
    var _pStartPanelPos;
    
    this._init = function(){
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oListener = _oFade.on("mousedown",function(){});
        s_oStage.addChild(_oFade);
        
        new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        
        _oPanelContainer = new createjs.Container();        
        s_oStage.addChild(_oPanelContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('credits_panel');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(oPanel);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;  
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2 - 40},500, createjs.Ease.quartIn);
        
        var oTitleStroke = new createjs.Text(TEXT_CONGRATULATION,"34px "+PRIMARY_FONT, "#000000");
        oTitleStroke.y = -oSprite.height/2 + 120;
        oTitleStroke.textAlign = "center";
        oTitleStroke.textBaseline = "middle";
        oTitleStroke.lineWidth = 400;
        oTitleStroke.outline = 5;
        _oPanelContainer.addChild(oTitleStroke);

        var oTitle = new createjs.Text(TEXT_CONGRATULATION,"34px "+PRIMARY_FONT, "#ffd000");
        oTitle.y = oTitleStroke.y;
        oTitle.textAlign = "center";
        oTitle.textBaseline = "middle";
        oTitle.lineWidth = 400;
        _oPanelContainer.addChild(oTitle);
        
        var oLinkStroke = new createjs.Text(TEXT_DEFEATED_ALL,"24px "+PRIMARY_FONT, "#000000");
        oLinkStroke.y = -20;
        oLinkStroke.textAlign = "center";
        oLinkStroke.textBaseline = "middle";
        oLinkStroke.lineWidth = 400;
        oLinkStroke.outline = 5;
        _oPanelContainer.addChild(oLinkStroke);

        var oLink = new createjs.Text(TEXT_DEFEATED_ALL,"24px "+PRIMARY_FONT, "#ffd000");
        oLink.y = oLinkStroke.y;
        oLink.textAlign = "center";
        oLink.textBaseline = "middle";
        oLink.lineWidth = 400;
        _oPanelContainer.addChild(oLink);
        
        var aLevelScore = s_oLocalStorage.getItemJson(LOCALSTORAGE_SCORE);
        var iTotalScore = 0;
        for(var i=0; i<aLevelScore.length; i++){
            iTotalScore += aLevelScore[i];
        };
        
        $(s_oMain).trigger("save_score",iTotalScore);                
        $(s_oMain).trigger("share_event",iTotalScore);
        
        var oScoreStroke = new createjs.Text(TEXT_TOTAL_SCORE + " "+iTotalScore,"24px "+PRIMARY_FONT, "#000000");
        oScoreStroke.y = 100;
        oScoreStroke.textAlign = "center";
        oScoreStroke.textBaseline = "middle";
        oScoreStroke.lineWidth = 500;
        oScoreStroke.outline = 5;
        _oPanelContainer.addChild(oScoreStroke);

        var oScore = new createjs.Text(TEXT_TOTAL_SCORE + " " +iTotalScore,"24px "+PRIMARY_FONT, "#ffd000");
        oScore.y = oScoreStroke.y;
        oScore.textAlign = "center";
        oScore.textBaseline = "middle";
        oScore.lineWidth = 500;
        _oPanelContainer.addChild(oScore);
        
      
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _oButExit = new CGfxButton(250, -150, oSprite, _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);
        
    };
    
    this.unload = function(){
        
        _oButExit.setClickable(false);
        
        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            s_oStage.removeChild(_oFade);
            s_oStage.removeChild(_oPanelContainer);

            _oButExit.unload();
            
            s_oGame.onExit();
            
        }); 
        
        _oFade.off("mousedown",_oListener);
        
        
    };
    
    this._init();
    
    
};


