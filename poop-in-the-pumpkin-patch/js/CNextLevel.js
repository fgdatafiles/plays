function CNextLevel(oSpriteBg, iLevel, iScore){
    
    var _oBg;
    var _oGroup;

    var _oMsgText;
    var _oScoreText;
    
    this._init = function(oSpriteBg){
        _oBg = createBitmap(oSpriteBg);
        
        _oMsgText = new createjs.Text(""," 120px "+FONT, "#ea7321");
        _oMsgText.x = CANVAS_WIDTH/2;
        _oMsgText.y = (CANVAS_HEIGHT/3+100);
        _oMsgText.textAlign = "center";
        _oMsgText.textBaseline = "alphabetic";
        _oMsgText.lineWidth = 600;        
        
        _oScoreText = new createjs.Text(iScore," 70px "+FONT, "#633f01");
        _oScoreText.x = CANVAS_WIDTH/2;
        _oScoreText.y = (CANVAS_HEIGHT/2) + 50;
        _oScoreText.textAlign = "center";
        _oScoreText.textBaseline = "alphabetic";
        _oScoreText.lineWidth = 500;
        
        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        
        _oGroup.addChild(_oBg, _oMsgText, _oScoreText);

        s_oStage.addChild(_oGroup);
        
        this.show(iLevel);
    };
    
    this._initListener = function(){
        _oGroup.on("mousedown",this._onExit);
    };
    
    this.show = function(iLevel){
        if(iLevel >0){
            playSound("win",1,false);
        }
        _oMsgText.text = "LEVEL "+(iLevel+1);
        _oScoreText.text = "THE SCORE TO SMASH IS "+iScore;
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});
    };
    
    this._onExit = function(){
        _oGroup.off("mousedown",this._onExit);
        s_oStage.removeChild(_oGroup);
        
        s_oGame.onNextLevelExit();
    };
    
    this._init(oSpriteBg);
    
    return this;
}
