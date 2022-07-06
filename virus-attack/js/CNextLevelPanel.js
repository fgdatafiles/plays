function CNextLevelPanel(iVirusType, iStage, iScore){
    var _oPanelContainer;
    var _oFade;
    var _oParent;
    var _oAchievementStars;
    var _oRollingText;
    var _oRollingTotScoreText;
    var _oContinueBut;
    var _oRestartBut;    
    var _oListener;
    
    var _pStartPanelPos;
    this._init = function(iVirusType, iStage, iScore){
        
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

        var oTitleStroke = new createjs.Text(TEXT_CONGRATULATION,"34px "+PRIMARY_FONT, "#000000");
        oTitleStroke.y = -oSprite.height/2 + 50;
        oTitleStroke.textAlign = "center";
        oTitleStroke.textBaseline = "middle";
        oTitleStroke.lineWidth = 200;
        oTitleStroke.outline = 5;
        _oPanelContainer.addChild(oTitleStroke);

        var oTitle = new createjs.Text(TEXT_CONGRATULATION,"34px "+PRIMARY_FONT, "#c1e401");
        oTitle.y = oTitleStroke.y
        oTitle.textAlign = "center";
        oTitle.textBaseline = "middle";
        oTitle.lineWidth = 200;
        _oPanelContainer.addChild(oTitle);
        
		var szStage = iStage+1;
        var szVirus = iVirusType+1;
        var oDefeatedStroke = new createjs.Text(TEXT_DEFEATED + " " + szVirus + ":" + szStage,"24px "+PRIMARY_FONT, "#000000");
        oDefeatedStroke.y = -180;
        oDefeatedStroke.textAlign = "center";
        oDefeatedStroke.textBaseline = "middle";
        oDefeatedStroke.lineWidth = 400;
        oDefeatedStroke.outline = 5;
        _oPanelContainer.addChild(oDefeatedStroke);

        var oDefeated = new createjs.Text(TEXT_DEFEATED + " " + szVirus + ":" + szStage,"24px "+PRIMARY_FONT, "#c1e401");
        oDefeated.y = oDefeatedStroke.y;
        oDefeated.textAlign = "center";
        oDefeated.textBaseline = "middle";
        oDefeated.lineWidth = 400;
        _oPanelContainer.addChild(oDefeated);        
        
      
       // var oStageStroke = new createjs.Text(TEXT_INSTAGE +" "+szStage,"24px "+PRIMARY_FONT, "#000000");
       // oStageStroke.y = -150;
       // oStageStroke.textAlign = "center";
       // oStageStroke.textBaseline = "middle";
       // oStageStroke.lineWidth = 400;
       // oStageStroke.outline = 5;
       // _oPanelContainer.addChild(oStageStroke);
       //
       // var oStage = new createjs.Text(TEXT_INSTAGE +" "+szStage,"24px "+PRIMARY_FONT, "#c1e401");
       // oStage.y = oStageStroke.y;
       // oStage.textAlign = "center";
       // oStage.textBaseline = "middle";
       // oStage.lineWidth = 400;
       // _oPanelContainer.addChild(oStage);

        var oScoreStroke = new createjs.Text(0,"40px "+PRIMARY_FONT, "#000000");
        oScoreStroke.y = 40;
        oScoreStroke.textAlign = "center";
        oScoreStroke.textBaseline = "middle";
        oScoreStroke.lineWidth = 200;
        oScoreStroke.outline = 5;
        _oPanelContainer.addChild(oScoreStroke);

        var oScore = new createjs.Text(0,"40px "+PRIMARY_FONT, "#c1e401");
        oScore.y = oScoreStroke.y;
        oScore.textAlign = "center";
        oScore.textBaseline = "middle";
        oScore.lineWidth = 200;
        _oPanelContainer.addChild(oScore);
        
        var oTotScoreStroke = new createjs.Text(0,"50px "+PRIMARY_FONT, "#000000");
        oTotScoreStroke.y = 90;
        oTotScoreStroke.textAlign = "center";
        oTotScoreStroke.textBaseline = "middle";
        oTotScoreStroke.lineWidth = 200;
        oTotScoreStroke.outline = 5;
        _oPanelContainer.addChild(oTotScoreStroke);

        var oTotScore = new createjs.Text(0,"50px "+PRIMARY_FONT, "#c1e401");
        oTotScore.y = oTotScoreStroke.y;
        oTotScore.textAlign = "center";
        oTotScore.textBaseline = "middle";
        oTotScore.lineWidth = 200;
        _oPanelContainer.addChild(oTotScore);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;      
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        
        this._sendScore();
        
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2},500, createjs.Ease.quartIn).call(function(){
            var oSprite = s_oSpriteLibrary.getSprite('star');
            _oAchievementStars = new CAchievementStars(oSprite, 0,-40, _oPanelContainer, "star");

            _oRollingText = new CRollingTextController(oScore, oScoreStroke, iScore, 4000, EASE_CUBIC_OUT);
            _oRollingText.addEventListener(ON_CONTROLLER_END, _oParent._onFinishRolling);
            _oRollingText.addEventListener(ON_CONTROLLER_REMOVE, _oParent._onFinishRolling);
            _oRollingText.addRollingListener(_oParent._onRollingText, _oParent, [SCORE_FIRST_STAR ,SCORE_SECOND_STAR, SCORE_THIRD_STAR]);
            
            _oRollingTotScoreText = new CRollingTextController(oTotScore, oTotScoreStroke, s_iTotalScore, 4000, EASE_CUBIC_OUT);
        });
        
        var oSprite = s_oSpriteLibrary.getSprite('but_next');
        _oContinueBut = new CGfxButton(120, 190, oSprite,_oPanelContainer);
        _oContinueBut.addEventListener(ON_MOUSE_UP, this._onContinue, this);
        _oContinueBut.pulseAnimation();
        
        var oSprite = s_oSpriteLibrary.getSprite('but_restart');
        _oRestartBut = new CGfxButton(-120, 190, oSprite,_oPanelContainer);
        _oRestartBut.addEventListener(ON_MOUSE_UP, this._onRestart, this);
                
         
        
        playSound("win",1,false);
        
    };
    
    this.unload = function(){
        _oAchievementStars.unload();
        _oRollingText.unload();
        
        _oFade.off("mousedown",_oListener);
        
        s_oStage.removeChild(_oFade);
        _oPanelContainer.removeAllChildren(_oFade);
        
        _oContinueBut.unload();
        _oRestartBut.unload();
        
    };
    
    this._sendScore = function(){
        var aScore = s_oLocalStorage.getItemJson(LOCALSTORAGE_SCORE);
        var iCurLevel = iVirusType*STAGE_PER_WORLD +iStage;
        
        if(aScore[iCurLevel] < iScore){
            aScore[iCurLevel] = iScore;
            s_oLocalStorage.setItemJson(LOCALSTORAGE_SCORE, aScore);
        }   
        
        s_iTotalScore = 0;
        for(var i=0; i<aScore.length; i++){
            s_iTotalScore += aScore[i];
        };
        
        $(s_oMain).trigger("save_score",s_iTotalScore);
    };
    
    this._onContinue = function(){
        
        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            _oParent.unload();
            s_oGame.nextLevel();
        });        
    };
    
    this._onRestart = function(){

        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            _oParent.unload();
            s_oGame.restartGame();
        }); 
    };
    
    this._onFinishRolling = function(){
        
    };
    
    this._onRollingRemoved = function(){

    };
    
    this._onRollingText = function(iStep){
        
        _oAchievementStars.playManualMode(iStep, STAR_EFFECT_SCALE);
 
    };
    
    _oParent = this;
    this._init(iVirusType, iStage, iScore);
}