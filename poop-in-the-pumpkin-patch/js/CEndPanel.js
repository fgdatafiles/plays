function CEndPanel(oSpriteBg){
    
    var _oBg;
    var _oGroup;
    
    var _oLevelText;
    var _oMsgText;
    var _oScoreText;
    
    this._init = function(oSpriteBg){
        
        _oBg = createBitmap(oSpriteBg);

        _oMsgText = new createjs.Text(""," 100px "+FONT, "#ea7321");
        _oMsgText.x = CANVAS_WIDTH/2;
        _oMsgText.y = (CANVAS_HEIGHT/2)-100;
        _oMsgText.textAlign = "center";
        _oMsgText.textBaseline = "alphabetic";
        _oMsgText.lineWidth = 600;        
        
        _oLevelText = new createjs.Text(""," 55px "+FONT, "#633f01");
        _oLevelText.x = CANVAS_WIDTH/2;
        _oLevelText.y = (CANVAS_HEIGHT/2) + 10;
        _oLevelText.textAlign = "center";
        _oLevelText.textBaseline = "alphabetic";
        _oLevelText.lineWidth = 500;
        
        _oScoreText = new createjs.Text(""," 55px "+FONT, "#ea7321");
        _oScoreText.x = CANVAS_WIDTH/2;
        _oScoreText.y = (CANVAS_HEIGHT/2) + 130;
        _oScoreText.textAlign = "center";
        _oScoreText.textBaseline = "alphabetic";
        _oScoreText.lineWidth = 500;

        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        
        _oGroup.addChild(_oBg, _oScoreText, _oLevelText, _oMsgText);

        s_oStage.addChild(_oGroup);
    };
    
    this.unload = function(){
        _oGroup.off("mousedown",this._onExit);
    };
    
    this._initListener = function(){
        _oGroup.on("mousedown",this._onExit);   
    };
    
    this.show = function(iScore, iLevel){
	playSound("game_over",1,false);
        
        
        _oMsgText.text = TEXT_GAMEOVER;
        _oLevelText.text = TEXT_LEVEL + (iLevel+1);
        _oScoreText.text = TEXT_SCORE + iScore;
        
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});
        
        $(s_oMain).trigger("share_event",iScore);
        $(s_oMain).trigger("end_level",iLevel);
        $(s_oMain).trigger("save_score",[iScore]);
    };
    
    this.win = function(iScore){
	playSound("game_over",1,false);

        _oMsgText.text = TEXT_WIN;
        
        _oScoreText.text = TEXT_SCORE + iScore;
        
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});

        $(s_oMain).trigger("share_event",iScore);
        $(s_oMain).trigger("save_score",[iScore]);
    };

    this._onExit = function(){
        _oGroup.off("mousedown",this._onExit);
        s_oStage.removeChild(_oGroup);
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        
        s_oGame.onExit();
    };
    
    
    this._init(oSpriteBg);
    
    return this;
}
