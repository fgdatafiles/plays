var __extends = this.__extends || function (d, b) {
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };

var Instruction = (function (_super) {
    __extends(Instruction, _super);

    var oScope;
    var mIsIntAssetsLoaded = false;

    function Instruction() {
        _super.call(this);
        oScope = this;
    }

    Instruction.prototype.update = function () {
        _super.prototype.update.call(this);
        if(!mIsIntAssetsLoaded){
            return;
        }
    };

    PIXI.loader
        .add('images/instruction.json')
        .load(onInstAssetsLoaded);

    function onInstAssetsLoaded()
    {
        var mBackgroundTexture = PIXI.Texture.fromFrame('InstructionBg');
        var mBackground = new PIXI.Sprite(mBackgroundTexture);
        oScope.addChild(mBackground);

        var TextStyle = {
            font : 'bold 20px Arial',
            fill : '#000000'
        };

        var mbackBtnText = new PIXI.Text('Back',TextStyle);
        mbackBtnText.x = 70;
        mbackBtnText.y = 17;

        var mPlayBtnText = new PIXI.Text('Play',TextStyle);
        mPlayBtnText.x = 70;
        mPlayBtnText.y = 17;

        var backBtnTexture = PIXI.Texture.fromFrame('playbutton');
        var mBackBtn = new PIXI.Sprite(backBtnTexture);
        mBackBtn.x = 80;
        mBackBtn.y = 410;
        mBackBtn.buttonMode = true;
        mBackBtn.interactive = true;
        mBackBtn .on('mousedown', backBtnClick)
                      .on('touchstart', backBtnClick)
                      .on('mouseup', onButtonUp)
                      .on('touchend', onButtonUp)
                      .on('mouseupoutside', onButtonUp)
                      .on('touchendoutside', onButtonUp)
                      .on('mouseover', onButtonOver)
                      .on('mouseout', onButtonOut);
        oScope.addChild(mBackBtn);
        mBackBtn.addChild(mbackBtnText);

        var playBtnTexture = PIXI.Texture.fromFrame('playbutton');
        var mPlayBtn = new PIXI.Sprite(playBtnTexture);
        mPlayBtn.x = 370;
        mPlayBtn.y = 410;
        mPlayBtn.buttonMode = true;
        mPlayBtn.interactive = true;
        mPlayBtn .on('mousedown', playBtnClick)
                      .on('touchstart', playBtnClick)
                      .on('mouseup', onButtonUp)
                      .on('touchend', onButtonUp)
                      .on('mouseupoutside', onButtonUp)
                      .on('touchendoutside', onButtonUp)
                      .on('mouseover', onButtonOver)
                      .on('mouseout', onButtonOut);
        oScope.addChild(mPlayBtn);
        mPlayBtn.addChild(mPlayBtnText);

        mIsIntAssetsLoaded = true;
    }
    function onButtonUp()
    {
        this.isdown = false;

        if (this.isOver)
        {
            this.scale.set(1.05);
        }
        else
        {
            this.scale.set(1);
        }
    }

    function onButtonOver()
    {
        this.isOver = true;

        if (this.isdown)
        {
            return;
        }
        this.scale.set(1.05);
    }

    function onButtonOut()
    {
        this.isOver = false;

        if (this.isdown)
        {
            return;
        }
        this.scale.set(1);
    }
    function backBtnClick(){
        this.isdown = true;
        scenesManager.goToScene('menu');
    }
    function playBtnClick(){
        this.isdown = true;
        scenesManager.goToScene('story');
    }
    return Instruction;
})(Scene);
