var __extends = this.__extends || function (d, b) {
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };

var MenuScene = (function (_super) {
    __extends(MenuScene, _super);

    var oScope;
    var mIsMenuAssetsLoaded = false;
    var mBgSound;
    var isMute;
    var mSoundButtonTextureOne;
    var mSoundButton;

    function MenuScene() {
        _super.call(this);
        oScope = this;
        PIXI.loader
            .add('images/Menu.json')
            .add('images/musicButton.json')
            .load(onMenuAssetsLoaded);

         mBgSound = new Howl({
         urls: ['sounds/bheemBgSound.mp3'],
         autoplay: true,
         loop: true,
         volume: 0.5
         });
    }

    MenuScene.prototype.update = function () {
        _super.prototype.update.call(this);
        if(!mIsMenuAssetsLoaded){
            return;
        }
    };



    function onMenuAssetsLoaded()
    {
        var mBackgroundTexture = PIXI.Texture.fromFrame('Titlebackground');
        var mBackground = new PIXI.Sprite(mBackgroundTexture);
        oScope.addChild(mBackground);

        var TextStyle = {
            font : 'bold  22px Arial',
            fill : '#000000',
        };

        var mStartRaceText = new PIXI.Text('Start Race',TextStyle);
        mStartRaceText.x = -48;
        mStartRaceText.y = -15;

        var mInstructionBtnText = new PIXI.Text('Instructions',TextStyle);
        mInstructionBtnText.x = -52;
        mInstructionBtnText.y = -15;

        var startRaceBtnTexture = PIXI.Texture.fromFrame('playbutton');
        var mStartRaceBtn = new PIXI.Sprite(startRaceBtnTexture);
        mStartRaceBtn.x = 535;
        mStartRaceBtn.y = 310;
        mStartRaceBtn.anchor.set(0.5);
        mStartRaceBtn.buttonMode = true;
        mStartRaceBtn.interactive = true;
        mStartRaceBtn .on('mousedown', startRaceBtnClick)
                      .on('touchstart', startRaceBtnClick)
                      .on('mouseup', onButtonUp)
                      .on('touchend', onButtonUp)
                      .on('mouseupoutside', onButtonUp)
                      .on('touchendoutside', onButtonUp)
                      .on('mouseover', onButtonOver)
                      .on('mouseout', onButtonOut);
        oScope.addChild(mStartRaceBtn);
        mStartRaceBtn.addChild(mStartRaceText);

        var instructionBtnTexture = PIXI.Texture.fromFrame('playbutton');
        var mInstructionBtn = new PIXI.Sprite(instructionBtnTexture);
        mInstructionBtn.x = 535;
        mInstructionBtn.y = 380;
        mInstructionBtn.anchor.set(0.5);
        mInstructionBtn.buttonMode = true;
        mInstructionBtn.interactive = true;
        mInstructionBtn .on('mousedown', instructionBtnClick)
                      .on('touchstart', instructionBtnClick)
                      .on('mouseup', onButtonUp)
                      .on('touchend', onButtonUp)
                      .on('mouseupoutside', onButtonUp)
                      .on('touchendoutside', onButtonUp)
                      .on('mouseover', onButtonOver)
                      .on('mouseout', onButtonOut);
        oScope.addChild(mInstructionBtn);
        mInstructionBtn.addChild(mInstructionBtnText);

        mSoundButtonTextureOne = PIXI.Texture.fromFrame('musicBtn');
        mSoundButton = new PIXI.Sprite(mSoundButtonTextureOne);
        mSoundButton.position.x = 600;
        mSoundButton.position.y = 440;
        mSoundButton.interactive = true;
        mSoundButton.buttonMode = true;
        mSoundButton.anchor.set(0.5);
        mSoundButton.on('mousedown', onMute)
            .on('touchstart', onMute)
            .on('mouseup', onButtonUp)
            .on('touchend', onButtonUp)
            .on('mouseupoutside', onButtonUp)
            .on('touchendoutside', onButtonUp)
            .on('mouseover', onButtonOver)
            .on('mouseout', onButtonOut);
        oScope.addChild(mSoundButton);

        mIsMenuAssetsLoaded = true;
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
    function startRaceBtnClick(){
        this.isdown = true;
        this.isOver = false;
        scenesManager.goToScene('story');
    }
    function instructionBtnClick(){
        this.isdown = true;
        this.isOver = false;
        scenesManager.goToScene('instruction');
    }
    MenuScene.Mute = function (p_button)
    {
        isMute =!isMute;
        if(isMute){
            mBgSound.mute();
            var mSoundButtonTextureTwo =  PIXI.Texture.fromFrame('musicBtnClosed');
            p_button.texture = mSoundButtonTextureTwo;
        }
        else{
            mBgSound.unmute();
            var mSoundButtonTextureOne = PIXI.Texture.fromFrame('musicBtn');
            p_button.texture = mSoundButtonTextureOne;
        }

    };
    function onMute()
    {
        MenuScene.Mute(mSoundButton);
    }

    return MenuScene;
})(Scene);
