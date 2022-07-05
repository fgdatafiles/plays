function CWinPanel(oSpriteBg, bEnd, bMultiplayer) {
	var _bMultiplayer;
    var _oBg;
    var _oResultTextStroke;
    var _oResultText;
    var _oTitleTextStoke;
    var _oTitleText;
    var _oScoreTextGoalPlayerStroke;
    var _oScoreTextGoalPlayer;
    var _oScoreTextGoalOpponentStroke;
    var _oScoreTextGoalOpponent;
    var _oScoreMatchTextStroke;
    var _oScoreMatchText;
    var _oNewScoreTextStroke;
    var _oNewScoreText;
    var _oNewScoreText;
    var _oTitleText;
    var _oGroup;
    var _oButMenu;
    var _oButContinue;
    var _oFade;

    this._init = function (oSpriteBg, bEnd) {
        var iSizeFontSecondaryText = 24;


		_bMultiplayer = bMultiplayer;
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.0;

        s_oStage.addChild(_oFade);

        _oGroup = new createjs.Container();
        _oGroup.alpha = 1;
        _oGroup.visible = false;
        _oGroup.y = CANVAS_HEIGHT;

        _oBg = createBitmap(oSpriteBg);
        _oBg.x = CANVAS_WIDTH_HALF;
        _oBg.y = CANVAS_HEIGHT_HALF;
        _oBg.regX = oSpriteBg.width * 0.5;
        _oBg.regY = oSpriteBg.height * 0.5;
        _oGroup.addChild(_oBg);

        _oTitleTextStoke = new createjs.Text("", "50px " + FONT_GAME, "#ff6000");
        _oTitleTextStoke.x = CANVAS_WIDTH / 2;
        _oTitleTextStoke.y = CANVAS_HEIGHT_HALF - 200;
        _oTitleTextStoke.textAlign = "center";
        _oTitleTextStoke.outline = 5;

        _oGroup.addChild(_oTitleTextStoke);

        _oTitleText = new createjs.Text("", "50px " + FONT_GAME, TEXT_COLOR);
        _oTitleText.x = CANVAS_WIDTH / 2;
        _oTitleText.y = _oTitleTextStoke.y;
        _oTitleText.textAlign = "center";

        _oGroup.addChild(_oTitleText);

        _oResultTextStroke = new createjs.Text("", "26px " + FONT_GAME, "#ff6000");
        _oResultTextStroke.x = CANVAS_WIDTH / 2;
        _oResultTextStroke.y = (CANVAS_HEIGHT / 2) - 90;
        _oResultTextStroke.textAlign = "center";
        _oResultTextStroke.textBaseline = "middle";
        _oResultTextStroke.outline = 5;

        _oGroup.addChild(_oResultTextStroke);

        _oResultText = new createjs.Text("", "26px " + FONT_GAME, TEXT_COLOR);
        _oResultText.x = CANVAS_WIDTH / 2;
        _oResultText.y = _oResultTextStroke.y;
        _oResultText.textAlign = "center";
        _oResultText.textBaseline = "middle";

        _oGroup.addChild(_oResultText);

        _oNewScoreTextStroke = new createjs.Text("", iSizeFontSecondaryText + "px " + FONT_GAME, "#ff6000");
        _oNewScoreTextStroke.x = CANVAS_WIDTH / 2;
        _oNewScoreTextStroke.y = (CANVAS_HEIGHT / 2) + 160;
        _oNewScoreTextStroke.textAlign = "center";
        _oNewScoreTextStroke.outline = 5;

        _oGroup.addChild(_oNewScoreTextStroke);

        _oNewScoreText = new createjs.Text("", iSizeFontSecondaryText + "px " + FONT_GAME, TEXT_COLOR);
        _oNewScoreText.x = CANVAS_WIDTH / 2;
        _oNewScoreText.y = _oNewScoreTextStroke.y;
        _oNewScoreText.textAlign = "center";

        _oGroup.addChild(_oNewScoreText);
		
		if (!_bMultiplayer)
		{
			var oSpriteButContinue = s_oSpriteLibrary.getSprite("but_continue");
			_oButContinue = new CGfxButton(CANVAS_WIDTH * 0.5 + 310, CANVAS_HEIGHT * 0.5 + 150, oSpriteButContinue, _oGroup);
			_oButContinue.pulseAnimation();
		}
		
        if (bEnd === false) {
            var oSpriteButHome = s_oSpriteLibrary.getSprite("but_home");
            _oButMenu = new CGfxButton(CANVAS_WIDTH * 0.5 - 310, CANVAS_HEIGHT * 0.5 + 150, oSpriteButHome, _oGroup);
            _oButMenu.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
			
			if (!_bMultiplayer) {
				_oButContinue.addEventListener(ON_MOUSE_DOWN, this._onContinue, this);
			}
        } else {
            if (!_bMultiplayer) {
				_oButContinue.addEventListener(ON_MOUSE_DOWN, this._onEnd, this);
			}
			
        }

		if (_bMultiplayer)
		{
			var oSpriteButRestart = s_oSpriteLibrary.getSprite("but_restart");
			_oButRestart = new CGfxButton(CANVAS_WIDTH * 0.5 + 310, CANVAS_HEIGHT * 0.5 + 150, oSpriteButRestart, _oGroup);
			_oButRestart.addEventListener(ON_MOUSE_DOWN, this._onRestart, this);
			_oButRestart.pulseAnimation();
		}
        s_oStage.addChild(_oGroup);

    };

    this.unload = function () {

        s_oStage.removeChild(_oGroup);
        if (_oButMenu) {
            _oButMenu.unload();
            _oButMenu = null;
        }

        if (_oButContinue) {
            _oButContinue.unload();
            _oButContinue = null;
        }
    };

    this.show = function (iGoalPlayer, iGoalOpponent, iPlayerTeam, iOpponentTeam, oInfoScore) {

        var szPlayerTeam = TEXT_TEAM_CODE[iPlayerTeam];
        var szOpponentTeam = TEXT_TEAM_CODE[iOpponentTeam];

        _oResultText.text = szPlayerTeam + " " + iGoalPlayer + " - " + iGoalOpponent + " " + szOpponentTeam;
        _oResultTextStroke.text = szPlayerTeam + " " + iGoalPlayer + " - " + iGoalOpponent + " " + szOpponentTeam;

		if(_bMultiplayer)
		{
        _oTitleTextStoke.text = TEXT_MULTI_P1_WIN;
        _oTitleText.text = TEXT_MULTI_P1_WIN;
		}
		else
		{
			_oTitleTextStoke.text = TEXT_WIN;
			_oTitleText.text = TEXT_WIN;
		}

        _oNewScoreTextStroke.text = TEXT_TOTAL_SCORE + ": " + oInfoScore.new_score;
        _oNewScoreText.text = TEXT_TOTAL_SCORE + ": " + oInfoScore.new_score;

        var oSpriteFlagSmall = s_oSpriteLibrary.getSprite("flags_small");

        var oFlagPlayer = new CFlag(_oResultText.x - 160, _oResultText.y, iPlayerTeam, false, oSpriteFlagSmall, _oGroup);

        var oFlagOpponent = new CFlag(_oResultText.x + 160, _oResultText.y, iOpponentTeam, false, oSpriteFlagSmall, _oGroup);

        _oGroup.visible = true;

        createjs.Tween.get(_oFade).to({alpha: 0.5}, 500, createjs.Ease.cubicOut);

        createjs.Tween.get(_oGroup).wait(250).to({y: 0}, 1250, createjs.Ease.bounceOut).call(function () {
            if (s_oAdsLevel === NUM_LEVEL_FOR_ADS) {
                $(s_oMain).trigger("show_interlevel_ad");
                s_oAdsLevel = 1;
            } else {
                s_oAdsLevel++;
            }
        });

        $(s_oMain).trigger("save_score", oInfoScore.new_score);
        $(s_oMain).trigger("share_event", oInfoScore.new_score);
    };

    this._onContinue = function () {
        var oParent = this;
        createjs.Tween.get(_oGroup).to({y: CANVAS_HEIGHT}, 750, createjs.Ease.quartIn).call(function () {
            oParent.unload();
        });

        createjs.Tween.get(_oFade).to({alpha: 0}, 400, createjs.Ease.cubicOut).call(function () {
            s_oStage.removeChild(_oFade);
            _oFade.removeAllEventListeners();
        });

        _oButContinue.block(true);
        _oButMenu.block(true);

        s_oGame.onContinue(s_oStage.getChildIndex(_oGroup));
    };

    this._onEnd = function () {
        _oButContinue.block(true);
        this.unload();
        s_oGame._onEnd();
    };
	
	
    this._onRestart = function () {
        this.unload();

        createjs.Tween.get(_oFade).to({alpha: 0}, 400, createjs.Ease.cubicOut).call(function () {
            s_oStage.removeChild(_oFade);
        });

		if (!_bMultiplayer)
		{
			s_oGame.restartLevel();
		}
		else{
			s_oGame.onRematchMultiplayer();
		}
    };

    this._onExit = function () {
        this.unload();

        _oFade.off("click", function () {});

        s_oGame.onExit();
    };

    this._init(oSpriteBg, bEnd);

    return this;
}