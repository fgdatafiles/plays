function CMsgBox(szText,oParentContainer){
    var _oMsg;
    var _oButOk;
    var _oContainer;
    var _oParentContainer;

    this._init = function (szText) {
        _oContainer = new createjs.Container();
        _oParentContainer.addChild(_oContainer);

        var oFade;

        oFade = new createjs.Shape();
        oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        oFade.alpha = 0.5;

        oFade.on("click", function () {});

        _oContainer.addChild(oFade);

        var oSpriteBg = s_oSpriteLibrary.getSprite('msg_box_big');
        var oBg = createBitmap(oSpriteBg);

        oBg.x = CANVAS_WIDTH * 0.5;
        oBg.y = CANVAS_HEIGHT * 0.5;
        oBg.regX = oSpriteBg.width * 0.5;
        oBg.regY = oSpriteBg.height * 0.5;
        _oContainer.addChild(oBg);

        _oMsg = new createjs.Text(TEXT_ERR_LS, FONT_SIZE_MSG_BOX + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oMsg.x = CANVAS_WIDTH / 2;
        _oMsg.y = CANVAS_HEIGHT / 2 - 190;
        _oMsg.textAlign = "center";
        _oMsg.textBaseline = "middle";
        _oMsg.lineWidth = 500;
        _oContainer.addChild(_oMsg);

        _oButOk = new CGfxButton(CANVAS_WIDTH / 2, 820, s_oSpriteLibrary.getSprite('but_yes'), _oContainer);
        _oButOk.addEventListener(ON_MOUSE_UP, this._onButOk, this);
    };

    this._onButOk = function () {
        this.unload();
    };

    this.unload = function () {
        _oButOk.unload();
        _oParentContainer.removeChild(_oContainer);
    };
    
    _oParentContainer = oParentContainer;

    this._init(szText);
}