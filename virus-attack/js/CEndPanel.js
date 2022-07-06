function CEndPanel(){
    
    var _oFade;
    var _oPanelContainer;
    var _oExitBut;
    var _oRestartBut;
    var _oParent;
    var _oListener;
    
    var _pStartPanelPos;
    this._init = function(){
        
        setVolume("soundtrack", 0);
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oListener = _oFade.on("mousedown",function(){});
        s_oStage.addChild(_oFade);
        
        new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        
        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('game_over_box');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(oPanel);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;   
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2},500, createjs.Ease.quartIn);
        
        var oTitleStroke = new createjs.Text(TEXT_GAMEOVER,"34px "+PRIMARY_FONT, "#000000");
        oTitleStroke.y = -oSprite.height/2 + 50;
        oTitleStroke.textAlign = "center";
        oTitleStroke.textBaseline = "middle";
        oTitleStroke.lineWidth = 400;
        oTitleStroke.outline = 5;
        _oPanelContainer.addChild(oTitleStroke);

        var oTitle = new createjs.Text(TEXT_GAMEOVER,"34px "+PRIMARY_FONT, "#ef000b");
        oTitle.y = oTitleStroke.y
        oTitle.textAlign = "center";
        oTitle.textBaseline = "middle";
        oTitle.lineWidth = 400;
        _oPanelContainer.addChild(oTitle);
        
        
        var aLevelScore = s_oLocalStorage.getItemJson(LOCALSTORAGE_SCORE);
        var iTotalScore = 0;
        for(var i=0; i<aLevelScore.length; i++){
            iTotalScore += aLevelScore[i];
        };
        
        $(s_oMain).trigger("save_score",iTotalScore);                
        $(s_oMain).trigger("share_event",iTotalScore);
        
        var oScoreStroke = new createjs.Text(TEXT_TOTAL_SCORE + " "+iTotalScore,"24px "+PRIMARY_FONT, "#000000");
        oScoreStroke.y = oTitleStroke.y + 40;
        oScoreStroke.textAlign = "center";
        oScoreStroke.textBaseline = "middle";
        oScoreStroke.lineWidth = 500;
        oScoreStroke.outline = 5;
        _oPanelContainer.addChild(oScoreStroke);

        var oScore = new createjs.Text(TEXT_TOTAL_SCORE + " " +iTotalScore,"24px "+PRIMARY_FONT, "#ef000b");
        oScore.y = oScoreStroke.y;
        oScore.textAlign = "center";
        oScore.textBaseline = "middle";
        oScore.lineWidth = 500;
        _oPanelContainer.addChild(oScore);
        
        
        var oSprite = s_oSpriteLibrary.getSprite('but_exit_big');
        _oExitBut = new CGfxButton(120, 190, oSprite,_oPanelContainer);
        _oExitBut.addEventListener(ON_MOUSE_UP, this._onExit, this);

        var oSprite = s_oSpriteLibrary.getSprite('but_restart');
        _oRestartBut = new CGfxButton(-120, 190, oSprite,_oPanelContainer);
        _oRestartBut.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        _oRestartBut.pulseAnimation();
        
    };
    
    this.unload = function(){
        s_oStage.removeChild(_oPanelContainer);
        _oFade.off("mousedown",_oListener);
        
        _oExitBut.unload();
        _oRestartBut.unload();
    };

    
    this.show = function(iScore){
        playSound("game_over",1,false);

    };
    
    this._onExit = function(){
        setVolume("soundtrack", 1);
        _oFade.off("mousedown",_oListener);
        s_oStage.removeChild(_oPanelContainer);
        
        s_oGame.onExit();
    };
    
    this._onRestart = function(){

        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            _oParent.unload();
            s_oGame.restartGame();
        }); 
    };
    
    _oParent = this;
    this._init();
    
    return this;
}
