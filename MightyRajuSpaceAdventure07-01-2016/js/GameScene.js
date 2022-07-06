var __extends = this.__extends || function (d, b) {
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };

var GameScene = (function (_super) {
    __extends(GameScene, _super);

    var oScope;
    var mRestartGame = false;
    var mIsAssetsLoaded = false;
    var mStarBgSpeed = 14;
    var mDistance = 0;
    var mAstPos = 30;
    var mScore = 0;
    var mShootCount = 0;
    var mHitCount = 0;
    var mAsteroidsArr = [];
    var mBulletsArr = [];
    var mScoreTextArray = [];
    var isGameOver = false;
    var mHeartArr =[];
    var isPauseClick = false;
    var isScaleDown = false;
    var isGameStart = false;
    var isRocketDeploy = false;
    var mCountDownNum = 3;
    var mCountDownNumText;
    var mShieldCounter = 0;
    var mCountDownNumInterval;
    var mBackgroundStarOne;
    var mBackgroundStarTwo;
    var mForegroundStarOne;
    var mForegroundStarTwo;
    var gameBackground;
    var mPlanet;
    var mSpaceShip;
    var mScoreText;
    var mRocket;
    var mDistanceText;
    var mAstHitText;
    var mHeartLife;
    var mWaveUpOne;
    var mWaveUpTwo;
    var mWaveDwnOne;
    var mWaveDwnTwo;
    var mPausePopUp;
    var mResumeBtn;
    var mPopupTexture;
    var mGameOverPopUp;
    var mFinalScoretext;
    var mHeartTexture;
    var mContainer;
    var mStarOne;
    var mStarTwo;
    var mStarThree;
    var mPausebtn;
    var mFirebtn;
    var mShield;
    var mLastPointerY;
    var mProton;
    var mSpaceShipRotationInterval;
	var mBgSound;

    function GameScene() {
        _super.call(this);

        oScope = this;
        PIXI.loader
            .add('images/gameSceneDisplay_0.json')
            .add('images/gameSceneDisplay_1.json')
            .add('images/gameSceneDisplay_2.json')
            .load(onAssetsLoaded);

         mBgSound = new Howl({
         urls: ['sounds/rajuBgSound.mp3'],
         autoplay: true,
         loop: true,
         volume: 0.5
         });

    }

    GameScene.prototype.update = function () {
        _super.prototype.update.call(this);
        if (!mIsAssetsLoaded || isPauseClick || isGameOver || !isGameStart) {
            return;
        }
        mDistance += 0.2;
        mScore += 0.2;
        mShieldCounter += 0.2;
        mScoreText.text = parseInt(mScore);
        mDistanceText.text = parseInt(mDistance);
        mPlanet.position.x -= mStarBgSpeed - 13;
        mBackgroundStarOne.position.x -= mStarBgSpeed-3;
        mBackgroundStarTwo.position.x -= mStarBgSpeed-3;
        mForegroundStarOne.position.x -= mStarBgSpeed;
        mForegroundStarTwo.position.x -= mStarBgSpeed;
        mWaveUpOne.position.x -= mStarBgSpeed + 8;
        mWaveUpTwo.position.x -= mStarBgSpeed + 8;
        mWaveDwnOne.position.x -= mStarBgSpeed + 8;
        mWaveDwnTwo.position.x -= mStarBgSpeed + 8;
        mStarOne.rotation -= 0.05;
        mStarTwo.rotation -= 0.08;
        mStarThree.rotation -= 0.01;
        mContainer.position.x -= 2;

        if(mShieldCounter >= 500){
            mShieldCounter = 0;
            mShield.visible = true;
            setTimeout(hideShield, 8000);
        }

        if(isRocketDeploy == true){
            mRocket.position.y -= 5;
            mRocket.position.x += 1;
        }
        if(mRocket.position.y +  mRocket.height <= 0){
            mRocket.position.y = 500;
            mRocket.position.x = getRandom(10, 600);
            isRocketDeploy = false;
            setTimeout(deployRocket, 5000);
        }
        if(isScaleDown == false){
            mStarOne.scale.x -= 0.02;
            mStarOne.scale.y -= 0.02;
            mStarTwo.scale.x -= 0.02;
            mStarTwo.scale.y -= 0.02;
            mStarThree.scale.x -= 0.02;
            mStarThree.scale.y -= 0.02;
        }
        if(mStarOne.scale.x <= 0.4 || mStarOne.scale.y <= 0.4){
            isScaleDown = true;
        }
        if(isScaleDown == true){
            mStarOne.scale.x += 0.02;
            mStarOne.scale.y += 0.02;
            mStarTwo.scale.x += 0.02;
            mStarTwo.scale.y += 0.02;
            mStarThree.scale.x += 0.02;
            mStarThree.scale.y += 0.02;
        }
        if(mStarOne.scale.x >= 1 || mStarOne.scale.y >= 1){
            isScaleDown = false;
        }
        if(mHeartLife.parent != null) {
            mHeartLife.position.x -= mStarBgSpeed - 9;
        }
        if(mPlanet.position.x + mPlanet.width <= 0){
            mPlanet.position.x = 640;
            changePlanetTexture.call(this);
        }
        if(mHeartLife.parent != null) {
            var hitHeart = hitTestRectangle(mSpaceShip, mHeartLife);
            if (hitHeart || mHeartLife.position.x + mHeartLife.width <= 0) {
                gameBackground.removeChild(mHeartLife);
                setTimeout(resetHeart, 12000);
                if (hitHeart && mHitCount > 0) {
                    mHitCount--;
                    increaseHearts.call(this);
                }
            }
        }
        if(mContainer.position.x + mContainer.width <= 0){
            mContainer.position.x = getRandom(500, 600);
            mContainer.position.y = getRandom(100, 400);
        }
        if(mWaveUpOne.position.x + mWaveUpOne.width <= 0){
            mWaveUpOne.position.x = mWaveUpTwo.position.x + mWaveUpOne.width;
        }
        if(mWaveUpTwo.position.x + mWaveUpTwo.width <= 0){
            mWaveUpTwo.position.x = mWaveUpOne.position.x + mWaveUpTwo.width;
        }
        if(mWaveDwnOne.position.x + mWaveDwnOne.width <= 0){
            mWaveDwnOne.position.x = mWaveUpTwo.position.x + mWaveDwnOne.width;
        }
        if(mWaveDwnTwo.position.x + mWaveDwnTwo.width <= 0){
            mWaveDwnTwo.position.x = mWaveDwnOne.position.x + mWaveDwnTwo.width;
        }
        if(mBackgroundStarOne.position.x + mBackgroundStarOne.width <= 0){
            mBackgroundStarOne.position.x = mBackgroundStarTwo.position.x + mBackgroundStarOne.width;
        }
        if(mBackgroundStarTwo.position.x + mBackgroundStarTwo.width <= 0){
            mBackgroundStarTwo.position.x = mBackgroundStarOne.position.x + mBackgroundStarTwo.width;
        }
        if(mForegroundStarOne.position.x + mForegroundStarOne.width <= 0){
            mForegroundStarOne.position.x = mForegroundStarTwo.position.x + mForegroundStarOne.width;
        }
        if(mForegroundStarTwo.position.x + mForegroundStarTwo.width <= 0){
            mForegroundStarTwo.position.x = mForegroundStarOne.position.x + mForegroundStarTwo.width;
        }

        if(mDistance >= mAstPos) {
            mAstPos += getRandom(5,15);
            var astr = new Asteroids();
            mAsteroidsArr.push(astr);
            gameBackground.addChild(astr.mAsteroids);
        }
        var pLen = mAsteroidsArr.length;
        for(var i = 0; i < pLen; i++){
            var pAstr = mAsteroidsArr[i];
            if(hitTestRectangle(mSpaceShip, pAstr.mAsteroids)){
                if(mShield.visible == false){
                    var emit = createEmitter.call(this, pAstr.mAsteroids);
                    setTimeout(stopEmiter, 200, emit);
                    if(pAstr.mType == 1 || pAstr.mType == 2){
                        pAstr.mAsteroids.texture = PIXI.Texture.fromFrame('asteroid_blast');
                    }else if(pAstr.mType == 3 || pAstr.mType == 4){
                        pAstr.mAsteroids.texture = PIXI.Texture.fromFrame('asteroid_blast');
                    }
                    gameBackground.removeChild(pAstr.mAsteroids);
                    mAsteroidsArr.splice(i,1);
                    i--;
                    pLen--;
                    mHitCount++;
                    if(mHitCount >= 10){
                        showGameOverPopUp.call(this);
                        return;
                    }
                    decreaseHearts.call(this);
                    backgroundShake.call(this);
                }else{
                    updateAsteroids.call(pAstr);
                }
            }
            else if(pAstr.mAsteroids.position.x + pAstr.mAsteroids.width < 0){
                gameBackground.removeChild(pAstr.mAsteroids);
                mAsteroidsArr.splice(i,1);
                i--;
                pLen--;
            } else {
                updateAsteroids.call(pAstr);
            }
        }
        pLen = mBulletsArr.length;
        for(i = 0; i < pLen; i++ ){
            updateBullet.call(mBulletsArr[i]);
        }
        for(i = 0; i < pLen; i++ ){
            for(var j = 0; j < mAsteroidsArr.length; j++){
                if(mBulletsArr[i].mBulletSpr.visible && hitTestRectangle(mBulletsArr[i].mBulletSpr, mAsteroidsArr[j].mAsteroids)){
                    mScore += 100;
                    createScoreText.call(this, mAsteroidsArr[j].mAsteroids);
                    gameBackground.removeChild(mAsteroidsArr[j].mAsteroids);
                    mAsteroidsArr.splice(j,1);
                    j--;
                }
            }
        }
    };

    GameScene.prototype.resume = function  () {
        _super.prototype.resume.call(this);
        mCountDownNum = 3;
        mCountDownNumText.visible = true;
        mCountDownNumText.text = mCountDownNum;
        mCountDownNumInterval = setInterval(startCountDown, 1000);
        if(!mRestartGame){
            return;
        }
        mRestartGame = false;
        isGameStart = false;
        mDistance = 0;
        mScore = 0;
        gameBackground.interactive = false;
        mScoreText.text = parseInt(mScore);
        mDistanceText.text =  parseInt(mDistance);
        mBackgroundStarOne.position.x = 0;
        mBackgroundStarTwo.position.x = 640;
        mSpaceShip.position.x = 0;
        mSpaceShip.position.y = ScenesManager.defaultHeight/2;
        mWaveUpOne.position.x = 0;
        mWaveUpOne.position.y = 150;
        mWaveUpTwo.position.x = 752;
        mWaveUpTwo.position.y = 150;
        mWaveDwnOne.position.x = 0;
        mWaveDwnOne.position.y = 300;
        mWaveDwnTwo.position.y = 300;
        mWaveDwnTwo.position.x = 752;
        mHitCount = 0;
        mShootCount = 0;
        mAstPos = 30;
        mStarBgSpeed = 14;
        mShieldCounter = 0;
        isGameOver = false;
        mPlanet.position.x = 640;
        mPlanet.position.y = getRandom(100, 400);
        isScaleDown = false;
        mRocket.position.x = ScenesManager.defaultWidth/2;
        mRocket.position.y = 500;
        mFirebtn.interactive = false;
        mFirebtn.buttonMode = false;
        mPausebtn.interactive = false;
        mPausebtn.buttonMode = false;
        mShield.visible = false;
        stopBgShake.call(this);

        var hLen = mHeartArr.length;
        for(var i = 0; i < hLen; i++){
            mHeartArr[i].texture = mHeartTexture;
            mHeartArr[i].visible = true;
        }
        var sLen = mScoreTextArray.length;
        for(var j = 0; j < sLen; j++){
            gameBackground.removeChild(mScoreTextArray[j]);
        }
        mScoreTextArray = [];
        var pLen = mBulletsArr.length;
        for(var i = 0; i < pLen; i++){
            resetBullets.call(mBulletsArr[i]);
        }

        var aLen = mAsteroidsArr.length;
        for(var i = 0; i < aLen; i++){
            gameBackground.removeChild(mAsteroidsArr[i].mAsteroids);
        }
        mAsteroidsArr = [];
    };
    function isTouchDevice() {
        return ((('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)));
    };
    function onAssetsLoaded()
    {
        var backgroundTexture = PIXI.Texture.fromFrame('spaceBg');
        gameBackground = new PIXI.Sprite(backgroundTexture);
        gameBackground
                    .on('mousemove', onMouseDevice)
                    .on('touchmove', onTouchDevice)
                    .on('mousedown', shootBullets);
        oScope.addChild(gameBackground);

        mContainer = new PIXI.Container();
        mContainer.width = ScenesManager.defaultWidth;
        mContainer.height = ScenesManager.defaultHeight;

        var starOneTxture = PIXI.Texture.fromFrame('star_0');
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
        gameBackground.addChild(mContainer);

        var planetTexture = PIXI.Texture.fromFrame('saturn');
        mPlanet = new PIXI.Sprite(planetTexture);
        mPlanet.position.x = 640;
        mPlanet.position.y = getRandom(100, 400);
        gameBackground.addChild(mPlanet);

        var wavetexture =  PIXI.Texture.fromFrame('wave');
        mWaveUpOne = new PIXI.Sprite(wavetexture);
        mWaveUpOne.position.y = 150;
        mWaveUpTwo = new PIXI.Sprite(wavetexture);
        mWaveUpTwo.position.y = 150;
        mWaveUpTwo.position.x = 752;
        mWaveUpOne.alpha = 0.05;
        mWaveUpTwo.alpha = 0.05;
        gameBackground.addChild(mWaveUpOne);
        gameBackground.addChild(mWaveUpTwo);

        mWaveDwnOne = new PIXI.Sprite(wavetexture);
        mWaveDwnOne.position.y = 300;
        mWaveDwnTwo = new PIXI.Sprite(wavetexture);
        mWaveDwnTwo.position.y = 300;
        mWaveDwnTwo.position.x = 752;
        mWaveDwnOne.alpha = 0.05;
        mWaveDwnTwo.alpha = 0.05;
        gameBackground.addChild(mWaveDwnOne);
        gameBackground.addChild(mWaveDwnTwo);

        var starBgTextureOne = PIXI.Texture.fromFrame('star_bgTwo');
        mBackgroundStarOne = new PIXI.Sprite(starBgTextureOne);
        mBackgroundStarTwo = new PIXI.Sprite(starBgTextureOne);
        mBackgroundStarTwo.position.x = 640;
        gameBackground.addChild(mBackgroundStarOne);
        gameBackground.addChild(mBackgroundStarTwo);

        var starFgTextureOne = PIXI.Texture.fromFrame('star_bgOne');
        mForegroundStarOne = new PIXI.Sprite(starFgTextureOne);
        mForegroundStarTwo = new PIXI.Sprite(starFgTextureOne);
        mForegroundStarTwo.position.x = 640;
        gameBackground.addChild(mForegroundStarOne);
        gameBackground.addChild(mForegroundStarTwo);

        for(var i = 0; i < 5; i++ ){
            var pBullets = new Bullets();
            mBulletsArr.push(pBullets);
            gameBackground.addChild(mBulletsArr[i].mBulletSpr);
        }

        var rocketTexture = PIXI.Texture.fromFrame('rocketFinal');
        mRocket = new PIXI.Sprite(rocketTexture);
        mRocket.position.x = ScenesManager.defaultWidth/2;
        mRocket.position.y = 500;
        mRocket.rotation = 0.2;
        gameBackground.addChild(mRocket);

        var spaceShipTexture = PIXI.Texture.fromFrame('spaceShip');
        mSpaceShip = new PIXI.Sprite(spaceShipTexture);
        mSpaceShip.position.y = ScenesManager.defaultHeight/2;
        mSpaceShip.rotation = 0.1;
        if(isTouchDevice.call(this) == true){
            mSpaceShip.scale.set(1.3);
        }
        gameBackground.addChild(mSpaceShip);

        var shieldTexture = PIXI.Texture.fromFrame('shield');
        mShield = new PIXI.Sprite(shieldTexture);
        mShield.position.x = mSpaceShip.position.x - 40;
        mShield.position.y = mSpaceShip.position.y - 280;
        mShield.visible = false;
        mSpaceShip.addChild(mShield);

        var scoreBgTexture = PIXI.Texture.fromFrame('scoreBackground');
        var scoreBg = new PIXI.Sprite(scoreBgTexture);
        scoreBg.position.x = 3;
        gameBackground.addChild(scoreBg);

        var scoreTextStyle = {
            font : 'bold 15px Arial',
            fill : '#ffffff',
            align : 'center'
        };

        mScoreText = new PIXI.Text('000',scoreTextStyle);
        mScoreText.x = 585;
        mScoreText.y = 52;
        mScoreText.anchor.set(0.5);
        gameBackground.addChild(mScoreText);

        mDistanceText = new PIXI.Text('000',scoreTextStyle);
        mDistanceText.x = 590;
        mDistanceText.y = 20;
        mDistanceText.anchor.set(0.5);
        gameBackground.addChild(mDistanceText);

        var healthBarBgTexture = PIXI.Texture.fromFrame('healthBar');
        var healthBarBg = new PIXI.Sprite(healthBarBgTexture);
        healthBarBg.position.x = 8;
        healthBarBg.position.y = 5;
        gameBackground.addChild(healthBarBg);

        mHeartTexture = PIXI.Texture.fromFrame('heart');
        var  mHeart_1 = new PIXI.Sprite(mHeartTexture);
        mHeart_1.position.x = 135;
        mHeart_1.position.y = 20;
        mHeart_1.visible = true;
        gameBackground.addChild(mHeart_1);
        mHeartArr.push(mHeart_1);

        var mHeart_2 = new PIXI.Sprite(mHeartTexture);
        mHeart_2.position.x = 115;
        mHeart_2.position.y = 20;
        mHeart_2.visible = true;
        gameBackground.addChild(mHeart_2);
        mHeartArr.push(mHeart_2);

        var mHeart_3 = new PIXI.Sprite(mHeartTexture);
        mHeart_3.position.x = 95;
        mHeart_3.position.y = 20;
        mHeart_3.visible = true;
        gameBackground.addChild(mHeart_3);
        mHeartArr.push(mHeart_3);

        var mHeart_4 = new PIXI.Sprite(mHeartTexture);
        mHeart_4.position.x = 75;
        mHeart_4.position.y = 20;
        mHeart_4.visible = true;
        gameBackground.addChild(mHeart_4);
        mHeartArr.push(mHeart_4);

        var  mHeart_5 = new PIXI.Sprite(mHeartTexture);
        mHeart_5.position.x = 55;
        mHeart_5.position.y = 20;
        mHeart_5.visible = true;
        gameBackground.addChild(mHeart_5);
        mHeartArr.push(mHeart_5);

        mHeartLife = new PIXI.Sprite(mHeartTexture);
        mHeartLife.anchor.set(0.5);
        setTimeout(resetHeart, 12000);

        mPopupTexture = PIXI.Texture.fromFrame('pausePopUpBg');
        mPausePopUp = new PIXI.Sprite(mPopupTexture);

        var resumebtnTexture = PIXI.Texture.fromFrame('play_button1');
        mResumeBtn = new PIXI.Sprite(resumebtnTexture);
        mResumeBtn.position.x = 250;
        mResumeBtn.position.y = 200;
        mResumeBtn.interactive = true;
        mResumeBtn.buttonMode = true;
        mResumeBtn
            .on('mousedown', resumeBtnClick)
            .on('touchstart', resumeBtnClick);
        mPausePopUp.addChild(mResumeBtn);

        mGameOverPopUp = new PIXI.Sprite(mPopupTexture);
        var gameOverScreenTxtr = PIXI.Texture.fromFrame('game_over');
        var gameOverScreen = new PIXI.Sprite(gameOverScreenTxtr);
        gameOverScreen.position.x = 160;
        gameOverScreen.position.y = 30;
        mGameOverPopUp.addChild(gameOverScreen);

        var scoreTextStyle = {
            font : 'bold 23px Arial',
            fill : '#f6eb14',
            align : 'center'
        };

        mFinalScoretext = new PIXI.Text('000', scoreTextStyle);
        mFinalScoretext.anchor.set(0.5);
        mFinalScoretext.position.x = 340;
        mFinalScoretext.position.y = 368;
        mGameOverPopUp.addChild(mFinalScoretext);

        var playAgainBtnTxtr = PIXI.Texture.fromFrame('playAgain');
        var playAgainBtn =  new PIXI.Sprite(playAgainBtnTxtr);
        playAgainBtn.position.x = 100;
        playAgainBtn.position.y = 400;
        playAgainBtn.interactive = true;
        playAgainBtn.buttonMode = true;
        playAgainBtn.anchor.set(0.5);
        playAgainBtn.on('mousedown', playAgainBtnClick)
                    .on('touchstart', playAgainBtnClick)
                    .on('mouseup', onButtonUp)
                    .on('touchend', onButtonUp)
                    .on('mouseupoutside', onButtonUp)
                    .on('touchendoutside', onButtonUp)
                    .on('mouseover', onButtonOver)
                    .on('mouseout', onButtonOut);


        mGameOverPopUp.addChild(playAgainBtn);
        /*var submitBtnTxtr = PIXI.Texture.fromFrame('submitBtn');
        var submitBtn =  new PIXI.Sprite(submitBtnTxtr);
        submitBtn.position.x = 540;
        submitBtn.position.y = 400;
        submitBtn.interactive = true;
        submitBtn.buttonMode = true;
        submitBtn.anchor.set(0.5);
        submitBtn.on('mousedown', submitScore)
            .on('touchstart', submitScore)
            .on('mouseup', onButtonUp)
            .on('touchend', onButtonUp)
            .on('mouseupoutside', onButtonUp)
            .on('touchendoutside', onButtonUp)
            .on('mouseover', onButtonOver)
            .on('mouseout', onButtonOut);
        mGameOverPopUp.addChild(submitBtn);*/

        var gmOvrPopUPSpaceShipTxtr = PIXI.Texture.fromFrame('spaceShip');
        var gmoSpaceShip = new PIXI.Sprite(gmOvrPopUPSpaceShipTxtr);
        gmoSpaceShip.position.x = 220;
        gmoSpaceShip.position.y = 230;
        mGameOverPopUp.addChild(gmoSpaceShip);
        setTimeout(deployRocket, 1000);

        var countDownNumTextStyle = {
            font : 'bold 150px Arial',
            fill : '#ff0000',
            align : 'center'
        };

        mCountDownNumText = new PIXI.Text(mCountDownNum, countDownNumTextStyle);
        mCountDownNumText.anchor.set(0.5);
        mCountDownNumText.position.x = ScenesManager.defaultWidth/2;
        mCountDownNumText.position.y = ScenesManager.defaultHeight/2;
        gameBackground.addChild(mCountDownNumText);

        var pausebtnTexture = PIXI.Texture.fromFrame('pauseBtn');
        mPausebtn = new PIXI.Sprite(pausebtnTexture);
        mPausebtn.position.x = 430;
        mPausebtn.position.y = 415;
        mPausebtn
            .on('mousedown', pauseBtnClick)
            .on('touchstart', pauseBtnClick);
        oScope.addChild(mPausebtn);

        var firebtnTexture = PIXI.Texture.fromFrame('fireButton');
        mFirebtn = new PIXI.Sprite(firebtnTexture);
        mFirebtn.position.x = 505;
        mFirebtn.position.y = 365;
        mFirebtn
            .on('mousedown', shootBullets)
            .on('touchstart', shootBullets);
        oScope.addChild(mFirebtn);

        createProton.call(this);
        tick.call(this);

        mIsAssetsLoaded = true;
    }

    function onTouchDevice(eventData){
        onPointerMove.call(oScope, eventData, true)
    }
    function onMouseDevice(eventData){
        onPointerMove.call(oScope, eventData, false)
    }
    function onPointerMove(eventData, isTouch)
    {
        if(isTouch == true){
            var pOffset = 120;
        }else{
            pOffset = 0;
        }
        var posX = eventData.data.global.x*ScenesManager.defaultWidth/ScenesManager.width - mSpaceShip.width/2;
        var posY = eventData.data.global.y*ScenesManager.defaultHeight/ScenesManager.height - mSpaceShip.height/2 - pOffset;
        if(posX < ScenesManager.defaultWidth-mSpaceShip.width && posY > 60
            && !hitTestPoint(mPausebtn, eventData.data.global)
            && !hitTestPoint(mFirebtn, eventData.data.global)
            && isPauseClick == false && isGameOver == false){
            mSpaceShip.position.x = posX;
            mSpaceShip.position.y = posY;
            clearInterval(mSpaceShipRotationInterval);
            if(mLastPointerY > mSpaceShip.position.y){
                mSpaceShipRotationInterval = setInterval(spaceShipRotationUp);
            }else{
                mSpaceShipRotationInterval = setInterval(spaceShipRotationDown);
            }
            mLastPointerY = mSpaceShip.position.y;
        }
    }
    function spaceShipRotationUp(){
        if(mSpaceShip.rotation > -0.1){
            mSpaceShip.rotation -= 0.01;
        } else {
            clearInterval(mSpaceShipRotationInterval);
        }
    }
    function spaceShipRotationDown(){
        if(mSpaceShip.rotation < 0.1){
            mSpaceShip.rotation += 0.01;
        } else {
            clearInterval(mSpaceShipRotationInterval);
        }
    }

    function shootBullets(){
        if(isPauseClick == true && isGameOver == true && isGameStart == false) {
            return;
        }else{
            if(mShootCount >= 5){
                mShootCount = 0;
            }
            mBulletsArr[mShootCount].mBulletSpr.position.x = mSpaceShip.position.x + mSpaceShip.width - 30;
            mBulletsArr[mShootCount].mBulletSpr.position.y = mSpaceShip.position.y + mSpaceShip.height/2;
            mBulletsArr[mShootCount].mBulletSpr.visible = true;
            mShootCount++;
        }

    }
    function backgroundShake(){
        startbgShake.call(this);
        setTimeout(stopBgShake, 60);
    }

    function startbgShake(){
        gameBackground.x -= getRandom(-8,8);
        gameBackground.y -= getRandom(-8,8);
    }
    function stopBgShake(){
        gameBackground.x = 0;
        gameBackground.y = 0;
    }
    function createScoreText(position){
        var astHitTextStyle = {
            font : 'bold 50px Arial',
            fill : '#00FF00',
            align : 'center'
        };

        mAstHitText = new PIXI.Text('+100',astHitTextStyle);
        mAstHitText.x = position.x;
        mAstHitText.y = position.y;
        mScoreTextArray.push(mAstHitText);
        gameBackground.addChild(mAstHitText);
        setTimeout(hideScoreText, 400);
    }
    function pauseBtnClick(){
        oScope.addChild(mPausePopUp);
        mFirebtn.interactive = false;
        mFirebtn.buttonMode = false;
        mPausebtn.interactive = false;
        mPausebtn.buttonMode = false;
        isPauseClick = true;
    }

    function resumeBtnClick(){
        oScope.removeChild(mPausePopUp);
        mFirebtn.interactive = true;
        mFirebtn.buttonMode = true;
        mPausebtn.interactive = true;
        mPausebtn.buttonMode = true;
        isPauseClick = false;
    }
    function playAgainBtnClick(){
        mRestartGame = true;
        oScope.removeChild(mGameOverPopUp);
        scenesManager.goToScene('menu');
        updatePlayAgain();
    }
    function showGameOverPopUp(){
        isGameOver = true;
        mFirebtn.interactive = false;
        mFirebtn.buttonMode = false;
        mPausebtn.interactive = false;
        mPausebtn.buttonMode = false;
        mFinalScoretext.text = parseInt(mScore);
        var aLen = mAsteroidsArr.length;
        for(var i = 0; i < aLen; i++){
            gameBackground.removeChild(mAsteroidsArr[i].mAsteroids);
        }
        oScope.addChild(mGameOverPopUp);
    }
    function decreaseHearts(){
        if(mHitCount > 10){
            showGameOverPopUp.call(this);
            return;
        }
        if(mHitCount%2 == 0){
            mHeartArr[(mHitCount/2)-1].visible = false;
        }else{
            mHeartArr[(mHitCount-1)/2].texture = PIXI.Texture.fromFrame('heartLefthalf');
        }
    }
    function resetHeart(){
        mHeartLife.position.x = getRandom(700, 800);
        mHeartLife.position.y = getRandom(100, 400);
        gameBackground.addChild(mHeartLife);
    }
    function increaseHearts(){
        if(mHitCount%2 == 0){
            mHeartArr[mHitCount/2].texture = mHeartTexture;
            mHeartArr[mHitCount/2].visible = true;
        }else{
            mHeartArr[(mHitCount-1)/2].texture = PIXI.Texture.fromFrame('heartLefthalf');
            mHeartArr[(mHitCount-1)/2].visible = true;
        }
    }
    function hideScoreText(){
        var pScr = mScoreTextArray.length;
        for(var i = 0; i < pScr; i++){
            gameBackground.removeChild(mScoreTextArray[i]);
        }
    }
    function deployRocket(){
        isRocketDeploy = true;
    }
    function changePlanetTexture(){
        var textureNumber = getRandom(1, 5);
        var newTexure;
        var posY;
        switch(textureNumber){
            case 1:
                newTexure = 'jupiter';
                posY = getRandom(100, 400);
                break;
            case 2:
                newTexure = 'sturn';
                posY = getRandom(100, 400);
                break;
            case 3:
                newTexure = 'saturn';
                posY = getRandom(100, 400);
                break;
            case 4:
                newTexure = 'venus';
                posY = getRandom(100, 400);
                break;
            case 5:
                newTexure = 'venus_1';
                posY = getRandom(100, 400);
                break;
            case 6:
                newTexure = 'jupiter_1';
                posY = getRandom(100, 400);
                break;
        }
        var pTexture = PIXI.Texture.fromFrame(newTexure);
        mPlanet.texture = pTexture;
        mPlanet.position.y = posY;

    }


    function hitTestRectangle(sprite1, sprite2) {

        //Define the variables we'll need to calculate
        var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

        //hit will determine whether there's a collision
        hit = false;

        //Find the center points of each sprite
        sprite1.centerX = sprite1.x + sprite1.width / 2;
        sprite1.centerY = sprite1.y + sprite1.height / 2;
        sprite2.centerX = sprite2.x;
        sprite2.centerY = sprite2.y;

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

    function hitTestPoint(sprite1, point1) {
        return (point1.x >= sprite1.x  && point1.x <= sprite1.x + sprite1.width
        && point1.y >= sprite1.y  && point1.y <= sprite1.y + sprite1.height);
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
    function hideShield(){
        mShield.visible = false;
    }
    function startCountDown(){
        if(mCountDownNum <= 1){
            isGameStart = true;
            clearInterval(mCountDownNumInterval);
            mFirebtn.interactive = true;
            mFirebtn.buttonMode = true;
            mPausebtn.interactive = true;
            mPausebtn.buttonMode = true;
            mCountDownNumText.visible = false;
            gameBackground.interactive = true;
            mCountDownNum = 3;
            return;
        }
        mCountDownNum--;
        mCountDownNumText.visible = true;
        mCountDownNumText.text = mCountDownNum;
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
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function submitScore(){		
        submit_on_game_click(mScore);
        playAgainBtnClick.call(oScope);
    }
    function createProton() {
        mProton = new Proton();
        var renderer = new Proton.Renderer('other', mProton);
        renderer.onProtonUpdate = function() {

        };
        renderer.onParticleCreated = function(particle) {
            particle.sprite = new PIXI.Sprite(particle.target);
            gameBackground.addChild(particle.sprite);
        };

        renderer.onParticleUpdate = function(particle) {
            particle.sprite.position.x = particle.p.x;
            particle.sprite.position.y = particle.p.y;
            particle.sprite.scale.x = particle.scale;
            particle.sprite.scale.y = particle.scale;
            particle.sprite.anchor.x = 0.5;
            particle.sprite.anchor.y = 0.5;
            particle.sprite.alpha = particle.alpha;
            particle.sprite.rotation = particle.rotation*Math.PI/180;
        };

        renderer.onParticleDead = function(particle) {
            gameBackground.removeChild(particle.sprite);
            //emitter.stopEmit();
        };
        renderer.start();
    }

    function createEmitter(sprite1){
        var texture = new PIXI.Texture.fromFrame('fireball');
        var emitter = new Proton.BehaviourEmitter();
        emitter.rate = new Proton.Rate(new Proton.Span(15, 30), new Proton.Span(.0, .09));
        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.ImageTarget(texture));
        emitter.addInitialize(new Proton.Life(0,0.3));
        emitter.addInitialize(new Proton.Velocity(new Proton.Span(-2, 3), new Proton.Span(0, 30, true), 'polar'));

        emitter.addBehaviour(new Proton.Gravity(1));
        emitter.addBehaviour(new Proton.Scale(new Proton.Span(1.5, 2), 1.5));
        emitter.addBehaviour(new Proton.Alpha(1, 0.9));
        emitter.addBehaviour(new Proton.Rotate(0, Proton.getSpan(-8, 9), 'add'));
        emitter.p.x = sprite1.x - 5;
        emitter.p.y = sprite1.y;
        emitter.emit();
        mProton.addEmitter(emitter);

        emitter.addSelfBehaviour(new Proton.Gravity(5));
        emitter.addSelfBehaviour(new Proton.RandomDrift(30, 30, .1));
        emitter.addSelfBehaviour(new Proton.CrossZone(new Proton.RectZone(50, 0, 953, 610), 'bound'));
        return emitter;
    }

    function tick() {
        requestAnimationFrame(tick);
        mProton.update();
    }
    function stopEmiter(emit){
        emit.stopEmit();
    }

    return GameScene;
})(Scene);
