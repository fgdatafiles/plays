function CEndPanel(oSpriteBg){
    var m;
    var _oBg;
    var _oScoreText;
    var _oMsgText;
    var _oGroup;
    
    this._init = function(oSpriteBg){
        
        _oBg = createBitmap(oSpriteBg);

        _oMsgText = new createjs.Text(TEXT_CONGRATS,"bold 28px "+FONT_GAME, "#c8f402");
        _oMsgText.x = CANVAS_WIDTH/2 + 20;
        _oMsgText.y = (CANVAS_HEIGHT/2)-70;
        _oMsgText.textAlign = "center";
        
        _oScoreText = new createjs.Text(TEXT_FINAL_SCORE + "\n99999","bold 32px "+FONT_GAME, "#c8f402");
        _oScoreText.x = CANVAS_WIDTH/2 + 20;
        _oScoreText.y = (CANVAS_HEIGHT/2)-30;
        _oScoreText.textAlign = "center";
        
        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        
        _oGroup.addChild(_oBg,_oScoreText,_oMsgText);

        s_oStage.addChild(_oGroup);
    };
    
    this.unload = function(){
        _oGroup.off("mousedown",this._onExit);
        s_oStage.removeChild(_oGroup);
    };
    
    this._initListener = function(){
    };
    
    this.show = function(iScore,bWin){
		m=iScore;
        if(bWin){	
			
			//Submit button
			var oSprite1 = s_oSpriteLibrary.getSprite('but_submit');
			_oButSubmit = new CGfxButton((CANVAS_WIDTH/2)+250,CANVAS_HEIGHT -100,oSprite1);
			_oButSubmit.addEventListener(ON_MOUSE_UP, this._onButSubmitRelease, this);
		
					//Replay button
			var oSprite2 = s_oSpriteLibrary.getSprite('but_bg');
			_oButRePlay = new CGfxButton((CANVAS_WIDTH/2)-200,CANVAS_HEIGHT -100,oSprite2);
			_oButRePlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
            _oMsgText.text = TEXT_CONGRATS;
	    }else{
            _oMsgText.text = TEXT_GAMEOVER;
			//Replay button
			var oSprite = s_oSpriteLibrary.getSprite('but_bg');
			_oButPlay = new CGfxButton((CANVAS_WIDTH/2)-200,CANVAS_HEIGHT -100,oSprite);
			_oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
			
			//Submit button
			var oSprite1 = s_oSpriteLibrary.getSprite('but_submit');
			_oButSubmit = new CGfxButton((CANVAS_WIDTH/2)+250,CANVAS_HEIGHT -100,oSprite1);
			_oButSubmit.addEventListener(ON_MOUSE_UP, this._onButSubmitRelease, this);
			
        }
		
        _oScoreText.text = TEXT_FINAL_SCORE+"\n "+iScore;
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});
        
        //$(s_oMain).trigger("save_score",iScore);
    };
    this._onButPlayRelease = function(){
		 updatePlayAgain(); //Call API to increase no. of played in Database--		
        this.unload();
        s_oMain.gotoGame();
    };
	    this._onButSubmitRelease = function(){
		var submit_score = m;
		submit_on_game_click(submit_score);
    };
    this._onExit = function(){
        _oGroup.off("mousedown");
        s_oGame.onExit();
    };    
    this._init(oSpriteBg);
    
    return this;
}