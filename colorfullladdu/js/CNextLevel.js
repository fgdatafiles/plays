function CNextLevel(){
    var _oBg;
    var _oMsgText;
    var _oScoreText;
    var _oGroup;
    
    this._init = function(){
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('msg_box'));

        _oMsgText = new createjs.Text("LEVEL 2","bold 48px "+FONT_GAME, "#c8f402");
        _oMsgText.x = CANVAS_WIDTH/2 + 30;
        _oMsgText.y = (CANVAS_HEIGHT/2) - 72;
        _oMsgText.textAlign = "center";

        _oScoreText = new createjs.Text("SCORE 99999","bold 34px "+FONT_GAME, "#c8f402");
        _oScoreText.x = CANVAS_WIDTH/2 +30;
        _oScoreText.y = (CANVAS_HEIGHT/2) + 10;
        _oScoreText.textAlign = "center";
        
        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        
        _oGroup.addChild(_oBg,_oMsgText,_oScoreText);

        s_oStage.addChild(_oGroup);
    };
    
    this.show = function(iLevel,iScore){
        _oMsgText.text = TEXT_LEVEL + " "+ iLevel;
        _oScoreText.text = TEXT_SCORE +" "+ iScore;
        
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});
        
        $(s_oMain).trigger("next_level",iScore);
    };
    
    this._initListener = function(){
        _oGroup.on("mousedown",this._onExit);
    };
    
    this._onExit = function(){
        _oGroup.off("mousedown");
        _oGroup.alpha = 0;
        _oGroup.visible = false;
        s_oGame.nextLevel();
    };
    
    this._init();
}