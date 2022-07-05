var __extends = this.__extends || function (d, b) {
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };

var StoryScene = (function (_super) {
    __extends(StoryScene, _super);

    var oScope;
    var mIsStrAssetsLoaded = false;

    function StoryScene() {
        _super.call(this);
        oScope = this;
    }

    StoryScene.prototype.update = function () {
        _super.prototype.update.call(this);
        if(!mIsStrAssetsLoaded){
            return;
        }
    };

    PIXI.loader
        .add('images/story.json')
        .load(onStoryAssetsLoaded);

    function onStoryAssetsLoaded()
    {
        var mBackgroundTexture = PIXI.Texture.fromFrame('storyBg');
        var mBackground = new PIXI.Sprite(mBackgroundTexture);
        oScope.addChild(mBackground);

        var TextStyle = {
            font : 'bold 20px Arial',
            fill : '#000000'
        };

        var mContinueBtnText = new PIXI.Text('Continue',TextStyle);
        mContinueBtnText.x = -44;
        mContinueBtnText.y = -15;

        var contBtnTexture = PIXI.Texture.fromFrame('playbutton');
        var mContinueBtn = new PIXI.Sprite(contBtnTexture);
        mContinueBtn.x = 325;
        mContinueBtn.y = 445;
        mContinueBtn.anchor.set(0.5);
        mContinueBtn.buttonMode = true;
        mContinueBtn.interactive = true;
        mContinueBtn .on('mousedown', contBtnClick)
                      .on('touchstart', contBtnClick)
                      .on('mouseup', onButtonUp)
                      .on('touchend', onButtonUp)
                      .on('mouseupoutside', onButtonUp)
                      .on('touchendoutside', onButtonUp)
                      .on('mouseover', onButtonOver)
                      .on('mouseout', onButtonOut);
        oScope.addChild(mContinueBtn);
        mContinueBtn.addChild(mContinueBtnText);

        mIsStrAssetsLoaded = true;
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
    function contBtnClick(){
        this.isdown = true;
        scenesManager.goToScene('game');
    }

    return StoryScene;
})(Scene);
