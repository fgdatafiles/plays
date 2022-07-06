var __extends = this.__extends || function (d, b) {
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };

var MenuScene = (function (_super) {
    __extends(MenuScene, _super);

    var oScope;
    var mIsMenuAssetsLoaded = false;
    var mRestartGame = false;
    var mCommet;
    var mTitle;
    var mSpaceShip;
    var mPlaybutton;
    var mInstructionButton;
    var isCommetFall = false;
    var mPlaybtnClicked;
    var mTextContainer;
    var mStoryTxtImage;
    var mNextBtn;
    var mNextBtnClicked = false;
    var storyTextTexture;
    var textContainerTexture;
    var mStarOne;
    var mStarTwo;
    var mStarThree;
    var isScaleDown = false;

    function MenuScene() {
        _super.call(this);
        oScope = this;
    }

    MenuScene.prototype.update = function () {
        _super.prototype.update.call(this);
        if(!mIsMenuAssetsLoaded){
            return;
        }
        mStarOne.rotation -= 0.02;
        mStarTwo.rotation -= 0.05;
        mStarThree.rotation -= 0.08;
        if(isScaleDown == false){
            mStarOne.scale.x -= 0.02;
            mStarOne.scale.y -= 0.02;
            mStarTwo.scale.x -= 0.01;
            mStarTwo.scale.y -= 0.01;
            mStarThree.scale.x -= 0.03;
            mStarThree.scale.y -= 0.03;
        }
        if(mStarOne.scale.x <= 0.4 || mStarOne.scale.y <= 0.4){
            isScaleDown = true;
        }
        if(isScaleDown == true){
            mStarOne.scale.x += 0.02;
            mStarOne.scale.y += 0.02;
            mStarTwo.scale.x += 0.01;
            mStarTwo.scale.y += 0.01;
            mStarThree.scale.x += 0.03;
            mStarThree.scale.y += 0.03;
        }
        if(mStarOne.scale.x >= 1 || mStarOne.scale.y >= 1){
            isScaleDown = false;
        }
        mSpaceShip.position.y += 0.2;
        if(mSpaceShip.position.y > 251.5){
            mSpaceShip.position.y = 250;
        }
        if(mPlaybtnClicked == true){
            mSpaceShip.position.x += 40;
            if(mSpaceShip.position.x + mSpaceShip.width >= 640){
                mPlaybtnClicked = false;
                mSpaceShip.position.x = -mSpaceShip.width;
            }
        }
        if(isCommetFall == true){
            mCommet.position.x -= 25;
            mCommet.position.y += 10;
        }
        if(mCommet.position.x + mCommet.width < 0){
            isCommetFall = false;
            mCommet.position.x = 640;
            mCommet.position.y = 0;
        }
    };

    PIXI.loader
        .add('images/menuScene_0.json')
        .load(onMenuAssetsLoaded);

    MenuScene.prototype.resume = function  () {
        _super.prototype.resume.call(this);
        if(!mRestartGame){
            return;
        }
        mCommet.position.x = 640;
        mCommet.position.y = 0;
        mSpaceShip.position.x = 0;
        mSpaceShip.position.y = 250;
        mPlaybtnClicked = false;
        mTitle.visible = true;
        mPlaybutton.visible = true;
        mInstructionButton.visible = true;
        mStoryTxtImage.position.x = 24;
        mTextContainer.visible = false;
        mStoryTxtImage.texture = storyTextTexture;
        mNextBtnClicked = false;
        isCommetFall = true;

    };

    function onMenuAssetsLoaded()
    {
        var mBackgroundTexture = PIXI.Texture.fromFrame('gameSceneBg');
        var mBackground = new PIXI.Sprite(mBackgroundTexture);
        oScope.addChild(mBackground);

        var mContainer = new PIXI.Container();
        mContainer.width = 640;
        mContainer.height = 480;
        var starOneTxture = PIXI.Texture.fromFrame('star_3');
        mStarOne = new PIXI.Sprite(starOneTxture);
        mStarOne.position.x = 100;
        mStarOne.position.y = 100;
        mStarOne.anchor.set(0.5);
        mContainer.addChild(mStarOne);

        mStarTwo = new PIXI.Sprite(starOneTxture);
        mStarTwo.position.x = 300;
        mStarTwo.position.y = 400;
        mStarTwo.anchor.set(0.5);
        mContainer.addChild(mStarTwo);

        mStarThree = new PIXI.Sprite(starOneTxture);
        mStarThree.position.x = 550;
        mStarThree.position.y = 200;
        mStarThree.anchor.set(0.5);
        mContainer.addChild(mStarThree);
        mBackground.addChild(mContainer);

        var commetTexture = PIXI.Texture.fromFrame('comet_04');
        mCommet = new PIXI.Sprite(commetTexture);
        mCommet.position.x = 640;
        oScope.addChild(mCommet);

        var titleTexture = PIXI.Texture.fromFrame('titleText');
        mTitle = new PIXI.Sprite(titleTexture);
        mTitle.position.x = 100;
        mTitle.position.y = 20;
        oScope.addChild(mTitle);

        var spaceShipTexture = PIXI.Texture.fromFrame('plane');
        mSpaceShip = new PIXI.Sprite(spaceShipTexture);
        mSpaceShip.position.x = 0;
        mSpaceShip.position.y = 250;
        oScope.addChild(mSpaceShip);

        textContainerTexture = PIXI.Texture.fromFrame('screen_u1');
        mTextContainer = new PIXI.Sprite(textContainerTexture);
        mTextContainer.position.x = 125;
        mTextContainer.position.y = 70;
        mTextContainer.visible = false;
        oScope.addChild(mTextContainer);

        storyTextTexture = PIXI.Texture.fromFrame('story');
        mStoryTxtImage = new PIXI.Sprite(storyTextTexture);
        mStoryTxtImage.position.x = 24;
        mStoryTxtImage.position.y = 8;
        mTextContainer.addChild(mStoryTxtImage);

        var nextBtnTexture = PIXI.Texture.fromFrame('next');
        mNextBtn = new PIXI.Sprite(nextBtnTexture);
        mNextBtn.position.x = 200;
        mNextBtn.position.y = 340;
        mNextBtn.anchor.set(0.5);
        mNextBtn.interactive = true;
        mNextBtn.buttonMode = true;
        mNextBtn.on('mousedown', onButtonDown)
                .on('touchstart', onButtonDown)
                .on('mouseup', nextBtnClick)
                .on('touchend', nextBtnClick)
                .on('mouseupoutside', onButtonUp)
                .on('touchendoutside', onButtonUp)
                .on('mouseover', onButtonOver)
                .on('mouseout', onButtonOut);
        mTextContainer.addChild(mNextBtn);

        var playbuttonTexture = PIXI.Texture.fromFrame('play_button');
        mPlaybutton = new PIXI.Sprite(playbuttonTexture);
        mPlaybutton.position.x = 550;
        mPlaybutton.position.y = 240;
        mPlaybutton.interactive = true;
        mPlaybutton.buttonMode = true;
        mPlaybutton.anchor.set(0.5);
        mPlaybutton.on('mousedown', onButtonDown)
                    .on('touchstart', onButtonDown)
                    .on('mouseup', playBtnClick)
                    .on('touchend', playBtnClick)
                    .on('mouseupoutside', onButtonUp)
                    .on('touchendoutside', onButtonUp)
                    .on('mouseover', onButtonOver)
                    .on('mouseout', onButtonOut);
        oScope.addChild(mPlaybutton);

        var instrctnButtonTexture = PIXI.Texture.fromFrame('instructions_button');
        mInstructionButton = new PIXI.Sprite(instrctnButtonTexture);
        mInstructionButton.position.x = 550;
        mInstructionButton.position.y = 300;
        mInstructionButton.interactive = true;
        mInstructionButton.buttonMode = true;
        mInstructionButton.anchor.set(0.5);
        mInstructionButton.on('mousedown', onButtonDown)
            .on('touchstart', onButtonDown)
            .on('mouseup', instuctionBtnClick)
            .on('touchend', instuctionBtnClick)
            .on('mouseupoutside', onButtonUp)
            .on('touchendoutside', onButtonUp)
            .on('mouseover', onButtonOver)
            .on('mouseout', onButtonOut);
        oScope.addChild(mInstructionButton);

        isCommetFall = true;
        mIsMenuAssetsLoaded = true;

    }

    function onButtonUp()
    {
        this.isdown = false;

        if (this.isOver)
        {
            this.scale.set(1);
        }
        else
        {
            this.scale.set(1.05);
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
    function onButtonDown()
    {
        if (this.isdown)
        {
            this.scale.set(0.5);
        }else{
            this.scale.set(1);
        }

    }

    function playBtnClick(){
        this.scale.set(1);
        mPlaybtnClicked = true;
        mTitle.visible = false;
        mPlaybutton.visible = false;
        mInstructionButton.visible = false;
        mTextContainer.visible = true;
    }

    function instuctionBtnClick(){
        this.scale.set(1);
        mPlaybtnClicked = true;
        mTitle.visible = false;
        mPlaybutton.visible = false;
        mInstructionButton.visible = false;
        mTextContainer.visible = true;
        var instructionTextTxr = PIXI.Texture.fromFrame('instructions');
        mStoryTxtImage.texture = instructionTextTxr;
        mStoryTxtImage.position.x = 39;
        mNextBtnClicked = true;
    }

    function nextBtnClick(){
        if(mNextBtnClicked == false){
            var instructionTextTxr = PIXI.Texture.fromFrame('instructions');
            mStoryTxtImage.texture = instructionTextTxr;
            mStoryTxtImage.position.x = 39;
            mNextBtnClicked = true;
            this.scale.set(1);
        }
        else{
            mRestartGame = true;
            scenesManager.goToScene('game');
        }

    }

    return MenuScene;
})(Scene);
