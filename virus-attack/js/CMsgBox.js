function CMsgBox(szText,oParentContainer){
    var _oMsg;
    var _oButOk;
    var _oThis;
    var _oContainer;
    var _oParentContainer;

    this._init = function (szText) {
        _oContainer = new createjs.Container();
        _oParentContainer.addChild(_oContainer);

        var oFade;
        oFade = new createjs.Shape();
        oFade.graphics.beginFill("rgb(0,0,0)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        oFade.alpha = 0.7;

        oFade.on("click", this._onButOk);

        _oContainer.addChild(oFade);

        var oSpriteBg = s_oSpriteLibrary.getSprite('credits_panel');
        var oBg = createBitmap(oSpriteBg);

        oBg.x = CANVAS_WIDTH * 0.5;
        oBg.y = CANVAS_HEIGHT * 0.5;
        oBg.regX = oSpriteBg.width * 0.5;
        oBg.regY = oSpriteBg.height * 0.5;
        _oContainer.addChild(oBg);

        _oMsg = new createjs.Text(szText, "26px " + PRIMARY_FONT, "#fff");
        var oMsgOut = new createjs.Text(szText, "26px " + PRIMARY_FONT, "#000000");
        oMsgOut.outline = 3;
        _oMsg.x = CANVAS_WIDTH / 2 ;
        _oMsg.y = oBg.y - oBg.regY + 50;
        _oMsg.textAlign = "center";
        _oMsg.textBaseline = "middle";
        _oMsg.lineWidth = 450;
        oMsgOut.x = _oMsg.x;
        oMsgOut.y = _oMsg.y;
        oMsgOut.textAlign = "center";
        oMsgOut.textBaseline = "middle";
        oMsgOut.lineWidth = 450;
        _oContainer.addChild(oMsgOut);

        _oContainer.addChild(_oMsg);
        _oButOk = new CGfxButton(CANVAS_WIDTH / 2, 760, s_oSpriteLibrary.getSprite('but_yes_big'), _oContainer);
        _oButOk.addEventListener(ON_MOUSE_UP, this._onButOk, this);
    };

    this._onButOk = function () {
        _oThis.unload();
    };

    this.unload = function () {
        _oParentContainer.removeChild(_oContainer);
    };
    
    _oThis = this;
    _oParentContainer = oParentContainer;

    this._init(szText);
}