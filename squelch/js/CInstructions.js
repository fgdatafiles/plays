function CInstructions(){
	var _oInstructionText;
	var _oGoodluckText;
	var _oMsgTimeScore;
	var _oMsgTotalScore;
    var _oMsgLevelScore;
	var _oContinueButton;	
	var _oGroup;
		
	this._init = function(){
		_oGroup = new createjs.Container();
		_oGroup.alpha = 0;
		_oGroup.visible = false;
		s_oStage.addChild(_oGroup);
		
		var oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_instructions"));
		
		_oInstructionText = new createjs.Text("Match two of the same cards together","36px "+FONT_GAME, "#fff");
		_oInstructionText.x = CANVAS_WIDTH/2;
		_oInstructionText.y = (CANVAS_HEIGHT/2)- 110;
		_oInstructionText.textBaseline = "alphabetic";
		_oInstructionText.textAlign = "center";
		_oInstructionText.shadow = new createjs.Shadow("#000000", 3, 3, 2);
		
		
		_oGoodluckText = new createjs.Text("Goodluck and have fun!!","36px "+FONT_GAME, "#fff");
		_oGoodluckText.x = CANVAS_WIDTH/2;
		_oGoodluckText.y = (CANVAS_HEIGHT/2)- 10;
		_oGoodluckText.textBaseline = "alphabetic";
		_oGoodluckText.textAlign = "center";
		_oGoodluckText.shadow = new createjs.Shadow("#000000", 3, 3, 2);
		
		_oGroup.addChild(oBg);
		
		_oContinueButton =  new CTextButton(CANVAS_WIDTH/2,950,
                                        s_oSpriteLibrary.getSprite('but_menu_bg'),
                                        " ",
                                        FONT_GAME,
                                        "White",
                                        "48",
                                        _oGroup);
        _oContinueButton.addEventListener(ON_MOUSE_UP, this.hide, this);	
	};


    this.display = function(){

        _oGroup.visible = true;
        createjs.Tween.get(_oGroup).to({alpha:1},250);
    };
	
    this.hide = function(){
            _oGroup.alpha = 0;
            _oGroup.visible = false;
			s_oGame.disableInstructions();// level & GUI setup
			s_oGame.nextLevel();
    };

    this.unload = function(){
        _oContinueButton.unload();
        s_oStage.removeChild(_oGroup);
    };
	
    this._init();
}