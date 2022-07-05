var __extends = this.__extends || function (d, b) {
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };

var GameScene = (function (_super) {
    __extends(GameScene, _super);

    var mCarUpVelocity = 5;
    var mCarBasePosition= 310;
    var mCarJumpDistance = 120;
    var mJump = keyboard(32);
    var mRotateForward = keyboard(39);
    var mRotateBackward = keyboard(37);
    var floorSpeed = 6;
    var mDistance = 0;
    var mScore = 0;
    var mColPos = 100;
    var mCharClicked = 0;

    var oScope;
    var mRearWheel;
    var mFrontWheel;
    var mFloorOne;
    var mFloorTwo;
    var mSeaBgOne;
    var mSeaBgTwo;
    var mCar;
    var mCarJumpUp = true;
    var mIsAssetsLoaded = false;
    var mPlaybuttonClicked = false;
    var isCarJumped = false;
    var isRightArrowPress = false;
    var isLeftArrowPress = false;
    var mPlayButton;
    var bheemBody;
    var rajuBody;
    var scoreText;
    var plyrSelectbg;
    var mObstacles;
    var mCollectibleArr = [];
    var mSelectionHighlight;
    var mScoreTxtArr = [];
    var gameBackground;
    var mcloudOne;
    var mcloudTwo;
    var bgTreeOne;
    var bgTreeTwo;
    var emptyPxl;
    var pausePopUp;
    var mStyle;
    var mCarTexture;
    var mCrashCarTexture;
    var isPauseBtnClick = false;
    var isInvokeStop = false;
    var mInvoke;
    var damageMeter;
    var mTimer = 0;
    var mTimerVariable;
    var levelUpPop;
    var mLevel = 1;
    var isLevelUp = false;
    var isGameOver = false;
    var gameOverPopUp;
    var finalScoredText;
    var PopUpTextStyle;
    var mPauseBtn;
    var jumpButton;
    var rightArrowButton;
    var leftArrowButton;
    var mRestartGame = false;
    var mSoundButton;
    var isCrashed = false;

    function GameScene() {
        _super.call(this);

        oScope = this;
        PIXI.loader
            .add('images/gameSceneDisplay_0.json')
            .add('images/gameSceneDisplay_1.json')
            .add('images/gameSceneDisplay_2.json')
            .add('images/gameSceneDisplay_3.json')
            .add('images/gameSceneDisplay_4.json')
            .load(onAssetsLoaded);
    }

    GameScene.prototype.update = function () {
        _super.prototype.update.call(this);
        if (!mIsAssetsLoaded || !mPlaybuttonClicked || isPauseBtnClick || isLevelUp || isGameOver || isCrashed) {
            return;
        }
        mDistance++;
        mRearWheel.rotation -= 3;
        mFrontWheel.rotation -= 3;
        mFloorOne.position.x -= floorSpeed;
        mFloorTwo.position.x -= floorSpeed;
        mSeaBgOne.position.x -= floorSpeed - 2;
        mSeaBgTwo.position.x -= floorSpeed - 2;
        if (mLevel == 1) {
            mcloudOne.position.x -= floorSpeed -2;
            mcloudTwo.position.x -= floorSpeed -2;
        } else {
            mcloudOne.position.x -= floorSpeed;
            mcloudTwo.position.x -= floorSpeed;
        }
        bgTreeOne.position.x -= floorSpeed -4;
        bgTreeTwo.position.x -= floorSpeed -4;

        bheemBody.position.y += 0.3;
        if(bheemBody.position.y >= -33){
            bheemBody.position.y = -35;
        }

        rajuBody.position.y += 0.3;
        if(rajuBody.position.y >= -37){
            rajuBody.position.y = -39;
        }

        if(mDistance >= mColPos) {
            mColPos += getRandom(10,100);
            var col = new Collectibles(floorSpeed);
            mCollectibleArr.push(col);
            gameBackground.addChild(col.mCollectible);
        }
        var pLen = mCollectibleArr.length;
        for(var i = 0; i < pLen; i++){
            var pCol = mCollectibleArr[i];
            if(hitTestRectangle(mCar, pCol.mCollectible)){
                createScoreText.call(this,pCol.getCollectibleScore());
                mScore+= pCol.getCollectibleScore();
                scoreText.text = mScore;
                gameBackground.removeChild(pCol.mCollectible);
                mCollectibleArr.splice(i,1);
                i--;
                pLen--;
            }
            else if(pCol.mCollectible.position.x + pCol.mCollectible.width < 0){
                gameBackground.removeChild(pCol.mCollectible);
                mCollectibleArr.splice(i,1);
                i--;
                pLen--;
            } else {
                updateCollectible.call(pCol);
            }
        }

        if(mFloorOne.position.x + mFloorOne.width <= 0){
            mFloorOne.position.x = mFloorTwo.position.x;//+ (mFloorOne.width-10);
        }
        if(mFloorTwo.position.x <= 0){
            mFloorTwo.position.x = mFloorOne.position.x + (mFloorTwo.width-10) + 710;
        }

        if(mSeaBgOne.position.x+mSeaBgOne.width <= 0){
            mSeaBgOne.position.x = mSeaBgTwo.position.x + (mSeaBgOne.width -10);
        }
        if(mSeaBgTwo.position.x+mSeaBgTwo.width <= 0){
            mSeaBgTwo.position.x = mSeaBgOne.position.x + (mSeaBgTwo.width -10);
        }
        if(mcloudOne.position.x+mcloudOne.width <= 0){
            mcloudOne.position.x = mcloudTwo.position.x + (mcloudOne.width - 20);
        }
        if(mcloudTwo.position.x+mcloudTwo.width <= 0){
            mcloudTwo.position.x = mcloudOne.position.x + (mcloudTwo.width- 20);
        }
        if(bgTreeOne.position.x+bgTreeOne.width <= 0){
            bgTreeOne.position.x = bgTreeTwo.position.x + (bgTreeOne.width + 400);
        }
        if(bgTreeTwo.position.x+bgTreeTwo.width <= 0){
            bgTreeTwo.position.x = bgTreeOne.position.x + (bgTreeTwo.width + 400);
        }

        ScoreTextAnim.call(oScope);
        updateObstacle.call(mObstacles);
        if(hitTestRectangle(mCar, mObstacles.mObstacle) && !mObstacles.isCrashed){
            if(damageMeter.width <= 35){
                resetObstacle.call(mObstacles);
                showGameOverPopUp.call(this);
                return;
            }
            if(mLevel == 1){
                mObstacles.mObstacle.texture = PIXI.Texture.fromFrame('obstaclescrash_01');
            }else if(mLevel == 2){
                mObstacles.mObstacle.texture = PIXI.Texture.fromFrame('obstaclescrash_03');
            }
            resetCar.call(this);
            changeCarCrashTexture.call(this);
            mObstacles.isCrashed = true;
            damageMeter.width -= 50;

        }
        if(isCarJumped) {
            if (mCarJumpUp && mCar.position.y > mCarJumpDistance) {
                mCar.position.y -= mCarUpVelocity;
            } else {
                mCarJumpUp = false;
                mCar.position.y += mCarUpVelocity;
            }
            if(mCar.position.y > mCarBasePosition){
                mCar.position.y = mCarBasePosition;
                isCarJumped = false;
                mCarJumpUp = true;
                isRightArrowPress = false;
                isLeftArrowPress = false;
                mCar.rotation = 0;
            }
        }
        if(isRightArrowPress == true){
            mCar.rotation += 0.2;
            if(mCar.rotation >= 6){
                mCar.rotation = 0;
                mScore+= 1000;
                scoreText.text = mScore;
                createScoreText.call(this,1000);
                isRightArrowPress = false;
            }
        }
        if(isLeftArrowPress == true){
            mCar.rotation -= 0.2;
            if(mCar.rotation <= -6){
                mCar.rotation = 0;
                mScore+= 1000;
                scoreText.text = mScore;
                createScoreText.call(this,1000);
                isLeftArrowPress = false;
            }
        }
        mJump.press = function() {
            jumpButtonClick.call(this);
        };
        mRotateForward.press = function() {
            if(isCarJumped == true && isLeftArrowPress == false){
                rightArrowButtonClick.call(this);
            }
        };
        mRotateBackward.press = function() {
            if(isCarJumped == true && isRightArrowPress == false){
                leftArrowButtonClick.call(this);
            }
        };

    };

    GameScene.prototype.resume = function  () {
        _super.prototype.resume.call(this);
        if(!mRestartGame){
            return;
        }

        var bgTreeTexture = PIXI.Texture.fromFrame('gameSceneOneBg_4');
        bgTreeOne.texture = bgTreeTexture;
        bgTreeTwo.texture = bgTreeTexture;
        mSeaBgOne.visible = true;
        mSeaBgTwo.visible = true;
        var floorTexture = PIXI.Texture.fromFrame('flooorOne');
        mFloorOne.texture = floorTexture;
        mFloorTwo.texture = floorTexture;
        var cloudTexture = PIXI.Texture.fromFrame('clouds');
        mcloudOne.texture = cloudTexture;
        mcloudTwo.texture = cloudTexture;
        mFloorOne.position.y = 350;
        mFloorTwo.position.y = 350;
        bgTreeOne.position.x = 640;
        bgTreeOne.position.y = 180;
        bgTreeTwo.position.x = 1200;
        bgTreeTwo.position.y = 180;
        mSeaBgOne.position.y = 250;
        mSeaBgOne.position.x = 0;
        mSeaBgTwo.position.x = 640;
        mSeaBgTwo.position.y = 250;
        mcloudOne.position.y = 30;
        mcloudTwo.position.y = 30;
        floorSpeed = 6;
		mCharClicked = 0;
        mTimer = 0;
        isCrashed = false;
        mObstacles.mObstacle.texture = PIXI.Texture.fromFrame('obstacles_1');
        mObstacles.mObstacleSpeed = floorSpeed;
        resetObstacle.call(mObstacles);
        resetCar.call(this);
        mScore = 0;
        scoreText.text = mScore;
        var pLen = mScoreTxtArr.length;
        for(var i = 0; i < pLen; i++){
            gameBackground.removeChild(mScoreTxtArr[i]);
        }
        mScoreTxtArr = [];
        pLen = mCollectibleArr.length;
        for(i = 0; i < pLen; i++){
            gameBackground.removeChild(mCollectibleArr[i].mCollectible);
        }
        mCollectibleArr = [];
        mLevel = 1;
        damageMeter.width = 235;
        isPauseBtnClick = false;
        isInvokeStop = false;
        isLevelUp = false;
        isGameOver = false;
        mPlayButton.buttonMode = false;
        mPlayButton.interactive = false;
        playerSelectionPopUP.call(this);
    };

    function playerSelectionPopUP(){

        var plyrSelectbgTexture = PIXI.Texture.fromFrame('generalBg');
        plyrSelectbg = new PIXI.Sprite(plyrSelectbgTexture);
        oScope.addChild(plyrSelectbg);

        var bheemfaceTexture = PIXI.Texture.fromFrame('bheemFace');
        var bheemface = new PIXI.Sprite(bheemfaceTexture);
        bheemface.position.x = 75;
        bheemface.position.y = 70;
        bheemface.interactive = true;
        bheemface.buttonMode = true;
        bheemface.on('mousedown', bheemFaceClick)
                 .on('touchstart', bheemFaceClick);

        var frameTexture = PIXI.Texture.fromFrame('selectionframe');
        var frame_01 = new PIXI.Sprite(frameTexture);
        frame_01.position.x = 50;
        frame_01.position.y = 110;
        frame_01.addChild(bheemface);
        plyrSelectbg.addChild(frame_01);

        var rajufaceTexture = PIXI.Texture.fromFrame('rajuFace');
        var rajuface = new PIXI.Sprite(rajufaceTexture);
        rajuface.position.x = 80;
        rajuface.position.y = 70;
        rajuface.interactive = true;
        rajuface.buttonMode = true;
        rajuface.on('mousedown', rajuFaceClick)
            .on('touchstart', rajuFaceClick);

        var frame_02 = new PIXI.Sprite(frameTexture);
        frame_02.position.x = 350;
        frame_02.position.y = 110;
        frame_02.addChild(rajuface);
        plyrSelectbg.addChild(frame_02);

        var selectionHtTexture = PIXI.Texture.fromFrame('selectionHighlight');
        mSelectionHighlight = new PIXI.Sprite(selectionHtTexture);
        mSelectionHighlight.visible = false;
        plyrSelectbg.addChild(mSelectionHighlight);

        mStyle = {
            font : 'bold italic 25px Arial',
            fill : '#000000'
        };

        var playButtonText = new PIXI.Text('Start Race',mStyle);
        playButtonText.x = -60;
        playButtonText.y = -15;

        var playbuttontexture = PIXI.Texture.fromFrame('playbutton_1');
        mPlayButton = new PIXI.Sprite(playbuttontexture);
        mPlayButton.position.x = 315;
        mPlayButton.position.y = 400;
        mPlayButton.anchor.set(0.5);
        mPlayButton
            // set the mousedown and touchstart callback...
            .on('mousedown', onPlayButtonDown)
            .on('touchstart', onPlayButtonDown)
            .on('mouseup', onPlayButtonUp)
            .on('touchend', onPlayButtonUp)
            .on('mouseupoutside', onPlayButtonUp)
            .on('touchendoutside', onPlayButtonUp)
            .on('mouseover', onPlayButtonOver)
            .on('mouseout', onPlayButtonOut);
        mPlayButton.addChild(playButtonText);
        plyrSelectbg.addChild(mPlayButton);

        var selectionButtonText = new PIXI.Text('Select Player',mStyle);
        selectionButtonText.x = 15;
        selectionButtonText.y = 10;

        var selectPlayerImage = new PIXI.Sprite(playbuttontexture);
        selectPlayerImage.position.x = 225;
        selectPlayerImage.position.y = 10;
        selectPlayerImage.addChild(selectionButtonText);
        plyrSelectbg.addChild(selectPlayerImage);
    }
    function onAssetsLoaded()
    {
        var backgroundTexture = PIXI.Texture.fromFrame('gameSceneOneBg');
        gameBackground = new PIXI.Sprite(backgroundTexture);
        oScope.addChild(gameBackground);

        var bgTreeTexture = PIXI.Texture.fromFrame('gameSceneOneBg_4');
        bgTreeOne = new PIXI.Sprite(bgTreeTexture);
        bgTreeOne.position.x = 640;
        bgTreeOne.position.y = 180;
        gameBackground.addChild(bgTreeOne);

        bgTreeTwo = new PIXI.Sprite(bgTreeTexture);
        bgTreeTwo.position.x = 1200;
        bgTreeTwo.position.y = 180;
        gameBackground.addChild(bgTreeTwo);

        var seaBgTexture = PIXI.Texture.fromFrame('gameSceneOneBg_1');
        mSeaBgOne = new PIXI.Sprite(seaBgTexture);
        mSeaBgOne.position.y = 250;
        gameBackground.addChild(mSeaBgOne);

        mSeaBgTwo = new PIXI.Sprite(seaBgTexture);
        mSeaBgTwo.position.x = 640;
        mSeaBgTwo.position.y = 250;
        gameBackground.addChild(mSeaBgTwo);

        var floorTexture = PIXI.Texture.fromFrame('flooorOne');
        mFloorOne = new PIXI.Sprite(floorTexture);
        mFloorOne.position.y = 350;
        gameBackground.addChild(mFloorOne);

        mFloorTwo = new PIXI.Sprite(floorTexture);
        mFloorTwo.scale.x = -1;
        mFloorTwo.position.x = 1410;
        mFloorTwo.position.y = 350;
        gameBackground.addChild(mFloorTwo);

        var cloudTexture = PIXI.Texture.fromFrame('clouds');
        mcloudOne = new PIXI.Sprite(cloudTexture);
        mcloudOne.position.y = 30;
        gameBackground.addChild(mcloudOne);

        mcloudTwo = new PIXI.Sprite(cloudTexture);
        mcloudTwo.position.x = 640;
        mcloudTwo.position.y = 30;
        gameBackground.addChild(mcloudTwo);

        var bheemTexture = PIXI.Texture.fromFrame('bheemBody');
        bheemBody = new PIXI.Sprite(bheemTexture);
        bheemBody.position.x = -25;
        bheemBody.position.y = -35;

        var commonBodyTexture = PIXI.Texture.fromFrame('commonBody');
        var commonBody = new PIXI.Sprite(commonBodyTexture);
        commonBody.position.x = -15;
        commonBody.position.y = -23;

        var rajuTexture = PIXI.Texture.fromFrame('rajuBody');
        rajuBody = new PIXI.Sprite(rajuTexture);
        rajuBody.position.x = -22;
        rajuBody.position.y = -39;

        mCarTexture = PIXI.Texture.fromFrame('carShape');
        mCrashCarTexture = PIXI.Texture.fromFrame('carCrashShape');
        mCar = new PIXI.Sprite(mCarTexture);
        mCar.position.x = 100;
        mCar.position.y = mCarBasePosition;
        mCar.anchor.set(0.5);
        mCar.addChild(commonBody);
        mCar.addChild(bheemBody);
        mCar.addChild(rajuBody);
        gameBackground.addChild(mCar);

        mObstacles = new Obstacles();
        gameBackground.addChild(mObstacles.mObstacle);

        var wheelTexture = PIXI.Texture.fromFrame('wheels');
        mFrontWheel = new PIXI.Sprite(wheelTexture);
        mRearWheel = new PIXI.Sprite(wheelTexture);
        mRearWheel.anchor.set(0.5);
        mFrontWheel.anchor.set(0.5);
        mFrontWheel.position.x = 54;
        mFrontWheel.position.y = 28;
        mRearWheel.position.x = -58;
        mRearWheel.position.y = 28;
        mCar.addChild(mRearWheel);
        mCar.addChild(mFrontWheel);

        var damageMeterBgTexture = PIXI.Texture.fromFrame('damageMeterBg');
        var damageMeterBg = new PIXI.Sprite(damageMeterBgTexture);
        damageMeterBg.position.x = 6;
        damageMeterBg.position.y = 5;

        var damageMeterTexture = PIXI.Texture.fromFrame('damageMeter');
        damageMeter = new PIXI.Sprite(damageMeterTexture);
        damageMeter.position.x = 2;
        damageMeter.position.y = 25;
        damageMeter.width = 235;
        damageMeterBg.addChild(damageMeter);
        gameBackground.addChild(damageMeterBg);

        var pausebtnTexture = PIXI.Texture.fromFrame('pauseBtn');
        mPauseBtn = new PIXI.Sprite(pausebtnTexture);
        mPauseBtn.position.x = 550;
        mPauseBtn.position.y = 80;
        mPauseBtn.buttonMode = true;
        mPauseBtn.interactive = true;
        mPauseBtn.on('mousedown', pauseBtnClick)
                 .on('touchstart', pauseBtnClick);
        gameBackground.addChild(mPauseBtn);

        var scoreTextStyle = {
            font : 'bold 25px Arial',
            fill : '#4c0000'
        };

        scoreText = new PIXI.Text(mScore,scoreTextStyle);
        scoreText.x = 100;
        scoreText.y = 28;

        var scoreBgTexture = PIXI.Texture.fromFrame('scoreIndicator');
        var scoreBg = new PIXI.Sprite(scoreBgTexture);
        scoreBg.position.x = 400;
        scoreBg.position.y = 5;
        scoreBg.addChild(scoreText);
        gameBackground.addChild(scoreBg);

        PopUpTextStyle = {
            font : 'bold 40px Arial',
            fill : '#ff0000',
            align : 'center'
        };
        var PopUpText = new PIXI.Text('Game Paused',PopUpTextStyle);
        PopUpText.x = 100;
        PopUpText.y = 100;

        var emptyPxlTexture = PIXI.Texture.fromFrame('emptyPixel');
        emptyPxl = new PIXI.Sprite(emptyPxlTexture);
        emptyPxl.width = 640;
        emptyPxl.height = 480;

        var pausePopUpTexture = PIXI.Texture.fromFrame('pausePopUp');
        pausePopUp = new PIXI.Sprite(pausePopUpTexture);
        pausePopUp.x = 100;
        pausePopUp.y = 50;
        pausePopUp.addChild(PopUpText);

        var continuebtnText = new PIXI.Text('Continue',mStyle);
        continuebtnText.x = 28;
        continuebtnText.y = 13;

        var continuebtnTexture = PIXI.Texture.fromFrame('playbutton_1');
        var mContinuebtn = new PIXI.Sprite(continuebtnTexture);
        mContinuebtn.position.x = 150;
        mContinuebtn.position.y = 300;
        mContinuebtn.buttonMode = true;
        mContinuebtn.interactive = true;
        mContinuebtn.on('mousedown', continueBtnClick)
                    .on('touchstart', continueBtnClick);
        pausePopUp.addChild(mContinuebtn);
        mContinuebtn.addChild(continuebtnText);

        var LevelUpText = new PIXI.Text('Level Up',PopUpTextStyle);
        LevelUpText.x = 150;
        LevelUpText.y = 100;

        var levelContinuebtnText = new PIXI.Text('Continue',mStyle);
        levelContinuebtnText.x = 32;
        levelContinuebtnText.y = 10;

        levelUpPop = new PIXI.Sprite(pausePopUpTexture);
        levelUpPop.x = 100;
        levelUpPop.y = 50;
        levelUpPop.addChild(LevelUpText);

        var mlevelContinuebtn = new PIXI.Sprite(continuebtnTexture);
        mlevelContinuebtn.position.x = 150;
        mlevelContinuebtn.position.y = 300;
        mlevelContinuebtn.buttonMode = true;
        mlevelContinuebtn.interactive = true;
        mlevelContinuebtn.on('mousedown', levelcontinueBtnClick)
                         .on('touchstart', levelcontinueBtnClick);
        levelUpPop.addChild(mlevelContinuebtn);
        levelUpPop.addChild(LevelUpText);
        mlevelContinuebtn.addChild(levelContinuebtnText);

        var youLostTextStyle = {
            font : 'bold 50px Arial',
            fill : '#ff0000',
            align : 'center'
        };

        var youLostText =  new PIXI.Text('You Lost!',youLostTextStyle);
        youLostText.x = 135;
        youLostText.y = 35;

        var youScoredText =  new PIXI.Text('You Scored!',{font : 'bold 40px Arial', fill : '#ff0000', align : 'center'});
        youScoredText.x = 135;
        youScoredText.y = 130;

        finalScoredText =  new PIXI.Text(mScore,{font : 'bold 40px Arial', fill : '#ff0000', align : 'center'});
        finalScoredText.x = 250;
        finalScoredText.anchor.set(0.5);
        finalScoredText.y = 220;

        var playAgainbtn = new PIXI.Sprite(continuebtnTexture);
        playAgainbtn.position.x = 40;
        playAgainbtn.position.y = 300;
        playAgainbtn.buttonMode = true;
        playAgainbtn.interactive = true;
        playAgainbtn.on('mousedown', playAgainBtnClick)
                    .on('touchstart', playAgainBtnClick);


        var playAgainText =  new PIXI.Text('Play Again',mStyle);
        playAgainText.x = 18;
        playAgainText.y = 10;
        playAgainbtn.addChild(playAgainText);

        /*var submitBtn = new PIXI.Sprite(continuebtnTexture);
        submitBtn.position.x = 250;
        submitBtn.position.y = 300;
        submitBtn.buttonMode = true;
        submitBtn.interactive = true;
        submitBtn.on('mousedown', submitScore)
                 .on('touchstart', submitScore);


        var submitbtnText =  new PIXI.Text('Submit',mStyle);
        submitbtnText.x = 40;
        submitbtnText.y = 10;
        submitBtn.addChild(submitbtnText);*/

        gameOverPopUp = new PIXI.Sprite(pausePopUpTexture);
        gameOverPopUp.x = 100;
        gameOverPopUp.y = 50;
        gameOverPopUp.addChild(youLostText);
        gameOverPopUp.addChild(youScoredText);
        gameOverPopUp.addChild(finalScoredText);
        gameOverPopUp.addChild(playAgainbtn);
        //gameOverPopUp.addChild(submitBtn);

        var jumpButtonTexture = PIXI.Texture.fromFrame('jumpBtn');
        jumpButton = new PIXI.Sprite(jumpButtonTexture);
        jumpButton.position.x = 25;
        jumpButton.position.y = 380;
        jumpButton.buttonMode = true;
        jumpButton.interactive = true;
        jumpButton.on('mousedown', jumpButtonClick)
                  .on('touchstart', jumpButtonClick);
        gameBackground.addChild(jumpButton);

        var rightArrowTexture = PIXI.Texture.fromFrame('flipRight');
        rightArrowButton = new PIXI.Sprite(rightArrowTexture);
        rightArrowButton.position.x = 520;
        rightArrowButton.position.y = 370;
        rightArrowButton.buttonMode = true;
        rightArrowButton.interactive = true;
        rightArrowButton.on('mousedown', rightArrowButtonClick)
                        .on('touchstart', rightArrowButtonClick);
        gameBackground.addChild(rightArrowButton);

         leftArrowButton = new PIXI.Sprite(rightArrowTexture);
         leftArrowButton.position.x = 485;
         leftArrowButton.position.y = 370;
         leftArrowButton.scale.x = -1;
         leftArrowButton.buttonMode = true;
         leftArrowButton.interactive = true;
         leftArrowButton.on('mousedown', leftArrowButtonClick)
         .on('touchstart', leftArrowButtonClick);
         gameBackground.addChild(leftArrowButton);

        var mSoundButtonTextureOne = PIXI.Texture.fromFrame('musicBtn');
        mSoundButton = new PIXI.Sprite(mSoundButtonTextureOne);
        mSoundButton.position.x = 39;
        mSoundButton.position.y = 95;
        mSoundButton.interactive = true;
        mSoundButton.buttonMode = true;
        mSoundButton.anchor.set(0.5);
        mSoundButton.on('mousedown', onMute)
                    .on('touchstart', onMute);
        oScope.addChild(mSoundButton);
        playerSelectionPopUP.call(this);
        mIsAssetsLoaded = true;
    }
    function onMute()
    {
        MenuScene.Mute(mSoundButton);
    }
    function visibleGameScene(pChar){
        bheemBody.visible = false;
        rajuBody.visible = false;
        pChar.visible = true;
        mTimerVariable = setInterval(increaseTimer, 1000);
        plyrSelectbg.visible = false;
    }
    function increaseTimer(){
        if(!mIsAssetsLoaded || !mPlaybuttonClicked || isPauseBtnClick || isLevelUp || isGameOver){
            return;
        }
        if(mTimer >= 30){
            ShowlevelUpPop.call(this);
            clearInterval(mTimerVariable);
            mTimer = 0;
        }
        mTimer += 1;
    }
    // start animating
    function hitTestRectangle(sprite1, sprite2) {

        //Define the variables we'll need to calculate
        var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

        //hit will determine whether there's a collision
        hit = false;

        //Find the center points of each sprite
        if(sprite1 == mCar){
            sprite1.centerX = sprite1.x;
            sprite1.centerY = sprite1.y;
        } else {
            sprite1.centerX = sprite1.x + sprite1.width / 2;
            sprite1.centerY = sprite1.y + sprite1.height / 2;
        }
        sprite2.centerX = sprite2.x + sprite2.width / 2;
        sprite2.centerY = sprite2.y + sprite2.height / 2;

        //Find the half-widths and half-heights of each sprite
        sprite1.halfWidth = sprite1.width / 2;
        sprite1.halfHeight = sprite1.height / 2;
        sprite2.halfWidth = sprite2.width / 2;
        sprite2.halfHeight = sprite2.height / 2;

        //Calculate the distance vector between the sprites
        vx = sprite1.centerX - sprite2.centerX;
        vy = sprite1.centerY - sprite2.centerY;

        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = sprite1.halfWidth + sprite2.halfWidth;
        combinedHalfHeights = sprite1.halfHeight + sprite2.halfHeight;

        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {

            //A collision might be occuring. Check for a collision on the y axis
            if (Math.abs(vy) < combinedHalfHeights) {

                //There's definitely a collision happening
                hit = true;
            } else {

                //There's no collision on the y axis
                hit = false;
            }
        } else {

            //There's no collision on the x axis
            hit = false;
        }

        //`hit` will be either `true` or `false`
        return hit;
    }
    function keyboard(keyCode) {
		var realWindow = window.parent || window;
        var key = {};
        key.code = keyCode;
        key.isDown = false;
        key.isUp = true;
        key.press = undefined;
        key.release = undefined;
        //The `downHandler`
        key.downHandler = function(event) {
            if (event.keyCode === key.code) {
                if (key.isUp && key.press) key.press();
                key.isDown = true;
                key.isUp = false;
            }
            event.preventDefault();
        };

        //The `upHandler`
        key.upHandler = function(event) {
            if (event.keyCode === key.code) {
                if (key.isDown && key.release) key.release();
                key.isDown = false;
                key.isUp = true;
            }
            event.preventDefault();
        };

        //Attach event listeners
        realWindow.addEventListener(
            "keydown", key.downHandler.bind(key), false
        );
        realWindow.addEventListener(
            "keyup", key.upHandler.bind(key), false
        );
        return key;
    }

    function onPlayButtonDown()
    {
        this.isdown = true;
        mPlaybuttonClicked = true;
        if(mCharClicked == 0){
            return;
        }
        else if(mCharClicked == 1){
            visibleGameScene.call(this,bheemBody );
        }
        else if(mCharClicked == 2){
            visibleGameScene.call(this,rajuBody );
        }
    }

    function onPlayButtonUp()
    {
        this.isdown = false;

        if (this.isOver)
        {
            mPlayButton.scale.set(1.1);
        }
        else
        {
            mPlayButton.scale.set(1);
        }
    }

    function onPlayButtonOver()
    {
        this.isOver = true;

        if (this.isdown)
        {
            return;
        }
        mPlayButton.scale.set(1.1);
    }

    function onPlayButtonOut()
    {
        this.isOver = false;

        if (this.isdown)
        {
            return;
        }
        mPlayButton.scale.set(1);
    }

    function bheemFaceClick(){
        mSelectionHighlight.position.x = 100;
        mSelectionHighlight.position.y = 150;
        mSelectionHighlight.visible = true;
        mPlayButton.buttonMode = true;
        mPlayButton.interactive = true;
        mCharClicked = 1;
    }
    function rajuFaceClick(){
        mSelectionHighlight.position.x = 400;
        mSelectionHighlight.position.y = 150;
        mSelectionHighlight.visible = true;
        mPlayButton.buttonMode = true;
        mPlayButton.interactive = true;
        mCharClicked = 2;
    }

    function createScoreText(pScore){
        var pColor;
        switch(pScore){
            case 100:
                pColor = '#0000ff';
                break;
            case 200:
                pColor = '#ff0000';
                break;
            case 500:
                pColor = '#ffff00';
                break;
            case 1000:
                pColor = '#f418eb';
                break;
        }
        var animateScoreText = {
            font : 'bold 32px Arial',
            fill : pColor
        };

        var pScoreTxt = new PIXI.Text('+'+pScore,animateScoreText);
        pScoreTxt.x = mCar.x-mCar.width;
        pScoreTxt.position.y = mCar.y;
        mScoreTxtArr.push(pScoreTxt);
        gameBackground.addChild(pScoreTxt);
    }

    function ScoreTextAnim(){
        var pLen = mScoreTxtArr.length;
        for(var i = 0; i < pLen; i++){
            mScoreTxtArr[i].visible = true;
            mScoreTxtArr[i].position.x = mCar.position.x;
            mScoreTxtArr[i].position.y -= 3;
            if(mScoreTxtArr[i].position.y + mScoreTxtArr[i].height <= 0){
                mScoreTxtArr[i].visible = false;
                gameBackground.removeChild(mScoreTxtArr[i]);
                mScoreTxtArr.splice(i,1);
                i--;
                pLen--;
            }
        }
    }

    function pauseBtnClick(){
        isPauseBtnClick = true;
        enableAllBtns.call(this, false);
        gameBackground.addChild(emptyPxl);
        gameBackground.addChild(pausePopUp);
    }

    function continueBtnClick(){
        isPauseBtnClick = false;
        enableAllBtns.call(this, true);
        gameBackground.removeChild(emptyPxl);
        gameBackground.removeChild(pausePopUp);
    }

    function enableAllBtns(p_enable){
        mPauseBtn.interactive = p_enable;
        jumpButton.interactive = p_enable;
        rightArrowButton.interactive = p_enable;
        leftArrowButton.interactive = p_enable;
    }

    function ShowlevelUpPop(){
        resetCar.call(this);
        isLevelUp = true;
        enableAllBtns.call(this, false);
        gameBackground.addChild(emptyPxl);
        gameBackground.addChild(levelUpPop);
    }

    function levelcontinueBtnClick(){
        isLevelUp = false;
        mLevel = 2;
        clearInterval(mTimerVariable);
        enableAllBtns.call(this, true);
        gameBackground.removeChild(emptyPxl);
        gameBackground.removeChild(levelUpPop);
        damageMeter.width = 235;
        floorSpeed = 8;
        mFloorOne.texture = PIXI.Texture.fromFrame('image394');
        mFloorOne.position.y = 300;
        mFloorTwo.texture = PIXI.Texture.fromFrame('image398');
        mFloorTwo.position.y = 300;
        mcloudOne.texture = PIXI.Texture.fromFrame('trees');
        mcloudOne.y = -70;
        mcloudTwo.texture = PIXI.Texture.fromFrame('trees2');
        mcloudTwo.y = -70;
        bgTreeOne.texture = PIXI.Texture.fromFrame('backTree1');
        bgTreeOne.y = 100;
        bgTreeTwo.texture = PIXI.Texture.fromFrame('backTree2');
        bgTreeTwo.y = 100;
        mSeaBgOne.visible = false;
        mSeaBgTwo.visible = false;
        mObstacles.mObstacleSpeed = floorSpeed;
        var pLen = mCollectibleArr.length;
        for(var i = 0; i < pLen; i++) {
            var pCol = mCollectibleArr[i];
            pCol.mCollectibleSpeed = floorSpeed;
        }
        resetAfterCrash.call(this);
    }
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function changeCarCrashTexture(){
        mCar.texture = mCrashCarTexture;
        isCrashed = true;
        if(isInvokeStop == false) {
            mInvoke = setInterval(changeCarNormalTexture, 200);
        }
        setTimeout(resetAfterCrash, 700);
    }

    function changeCarNormalTexture(){
        if(isPauseBtnClick == false){
            mCar.visible = false;
            setInterval(changeCarTexture, 180);
        }
    }

    function changeCarTexture(){
        mCar.visible = true;
    }

    function resetAfterCrash(){
        if(mLevel == 1){
            mObstacles.mObstacle.texture = PIXI.Texture.fromFrame('obstacles_1');
        } else if(mLevel == 2){
            mObstacles.mObstacle.texture = PIXI.Texture.fromFrame('obstacles_2');
        }
        resetObstacle.call(mObstacles);
        clearInterval(mInvoke);
        isCrashed = false;
        mCar.texture = mCarTexture;
        isInvokeStop = false;
    }

    function showGameOverPopUp(){
        isGameOver = true;
        enableAllBtns.call(this, false);
        finalScoredText.text = mScore;
        damageMeter.width = 1;
        gameBackground.addChild(emptyPxl);
        gameBackground.addChild(gameOverPopUp);
    }

   function jumpButtonClick(){
        mCar.rotation = -0.1;
        isCarJumped = true;
    }
    function rightArrowButtonClick(){
        if(isCarJumped == true && isLeftArrowPress == false){
            isRightArrowPress = true;
        }
    }
    function leftArrowButtonClick(){
        if(isCarJumped == true && isRightArrowPress == false){
            isLeftArrowPress = true;
        }
    }

    function resetCar(){
        mCar.position.y = mCarBasePosition;
        mCar.rotation = 0;
        isCarJumped = false;
        mCarJumpUp = true;
        isRightArrowPress = false;
        isLeftArrowPress = false;
    }
    function submitScore(){
        submit_on_game_click(mScore);
		playAgainBtnClick.call(oScope, true);
    }
	 function playAgainBtnClick(eventData){
        enableAllBtns.call(this, true);
        gameBackground.removeChild(emptyPxl);
        gameBackground.removeChild(gameOverPopUp);
        mRestartGame = true;
        scenesManager.goToScene('menu');
		if(eventData != true){
			updatePlayAgain();
        }
    }
    return GameScene;
})(Scene);
