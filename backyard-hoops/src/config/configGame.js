var configGame = {
    nameGame : 'Template Project',
    getAspect: function(){
        return ASPECT_PORTRAIT;
        if(ratioAspect<1){
            return ASPECT_PORTRAIT;
        }else{
            return ASPECT_LANDSCAPE;
        }
    },
    colors:{
        bgColor:"EEEEEE",
    },
    //Tap to Start
    tapToStart:{
        tapCounter1:30,
        tapCounter2:55
    },
    getLoadingAssets: function(){
        var currentAspect = aspect;
        loadingAssets = [
            {type:'image', nameAsset:'loaderBar', path:'assets/images/loaderBar.png'},
            {type:'image', nameAsset:'loaderBarContainer', path:'assets/images/loaderBarContainer.png'},
            {type:'image', nameAsset:'logoBoomerang', path:'assets/images/logoBoomerang.png'},
            {type:'image', nameAsset:'backgroundLoader', path:'assets/images/bg_preloader_pot.jpg'},
        ];
        return loadingAssets;
    },
    getPreloadAssets: function(){
        var currentAspect = aspect;
        preloadAssets = [
            {type:'json', nameAsset:'texts', path:'assets/texts/texts.json'},

            {type:'image', nameAsset:'background_1', path:'assets/images/bg_01.jpg'},
            {type:'image', nameAsset:'background_2', path:'assets/images/bg_02.jpg'},
            {type:'image', nameAsset:'background_3', path:'assets/images/bg_03.jpg'},
            
            {type:'image', nameAsset:'livesOn', path:'assets/images/livesOn.png'},
            {type:'image', nameAsset:'pixel', path:'assets/images/pixel.png'},
            {type:'image', nameAsset:'star', path:'assets/images/star.png'},

            {type:'image', nameAsset:'tutorialPopup', path:'assets/images/tutorialPopUp/tutorial_popup.png'},
            {type:'image', nameAsset:'tutorialManito', path:'assets/images/tutorialPopUp/tutorial_manito.png'},

            {type:'image', nameAsset:'coverBg', path:'assets/images/cover/cover_bg.jpg'},
            {type:'image', nameAsset:'coverJerry', path:'assets/images/cover/cover_jerry.png'},
            {type:'image', nameAsset:'coverTom', path:'assets/images/cover/cover_tom.png'},
            {type:'image', nameAsset:'logoBase', path:'assets/images/cover/logo_base.png'},

            {type:'image', nameAsset:'scorePopUp', path:'assets/images/scorePopUp/score_popup.png'},
            {type:'image', nameAsset:'scoreSpinfx', path:'assets/images/scorePopUp/score_spinfx.png'},
            {type:'image', nameAsset:'scoreCopa', path:'assets/images/scorePopUp/score_copa.png'},
            {type:'image', nameAsset:'scoreConfetti', path:'assets/images/scorePopUp/score_confetti.png'},

            {type:'image', nameAsset:'uiPausePopup', path:'assets/images/pausePopUp/uiPausePopup.png'},
            {type:'image', nameAsset:'bgWinScreen', path:'assets/images/winScreen/bgWinScreen.png'},
            {type:'image', nameAsset:'effectWinScreen', path:'assets/images/winScreen/effectWinScreen.png'},
            {type:'image', nameAsset:'winScreenStar', path:'assets/images/winScreen/winScreenStar.png'},
            {type:'image', nameAsset:'box_alert', path:'assets/images/alertBox/alert_box.png'},
            
            {type:'spritesheet', nameAsset:'uiBtnPlay', path:'assets/images/pausePopUp/uiBtnPlay.png', width:309, height:315, amount:3},
            {type:'spritesheet', nameAsset:'uiBtnRestart', path:'assets/images/pausePopUp/uiBtnRestart.png', width:238, height:251, amount:3},
            {type:'spritesheet', nameAsset:'uiBtnHome', path:'assets/images/pausePopUp/uiBtnHome.png', width:239, height:251, amount:3},

            {type:'atlas', nameAsset:'tomWinScreen', path:'assets/images/winScreen/tomWinScreen.png', jsonPath:'assets/images/winScreen/tomWinScreen.json'},
            {type:'atlas', nameAsset:'tomTripleWinScreen', path:'assets/images/winScreen/tomTripleWinScreen.png', jsonPath:'assets/images/winScreen/tomTripleWinScreen.json'},
            
            {type:'image', nameAsset:'BasketStruct', path:'assets/images/BasketAnim_Struct.png'},
            {type:'atlas', nameAsset:'BasketFrontBack', path:'assets/images/BasketAnim_Front_Back.png', jsonPath:'assets/images/BasketAnim_Front_Back.json'},
            
            {type:'atlas', nameAsset:'TomAnimations', path:'assets/images/TomAnimations.png', jsonPath:'assets/images/TomAnimations.json'},
            {type:'atlas', nameAsset:'JerryAnimations', path:'assets/images/JerryAnimations.png', jsonPath:'assets/images/JerryAnimations.json'},
            {type:'spritesheet', nameAsset:'balls', path:'assets/images/balls.png', width:250, height:250, amount:16},

            {type:'spritesheet', nameAsset:'button_white', path:'assets/images/button_white.png', width:192, height:40, amount:2},
            {type:'spritesheet', nameAsset:'alert_btn_no', path:'assets/images/alertBox/alert_btn_no.png', width:301, height:123, amount:2},
            {type:'spritesheet', nameAsset:'alert_btn_yes', path:'assets/images/alertBox/alert_btn_yes.png', width:303, height:123, amount:2},
            {type:'spritesheet', nameAsset:'uiBtnPause', path:'assets/images/uiBtnPause.png', width:140, height:163, amount:3},
            {type:'spritesheet', nameAsset:'uiBtnCoverPlay', path:'assets/images/cover/btnPlay.png', width:508, height:211, amount:3},
            {type:'spritesheet', nameAsset:'uiBtnMusic', path:'assets/images/btnSound/btnMusic.png', width:200, height:163, amount:6},
            {type:'spritesheet', nameAsset:'uiBtnSound', path:'assets/images/btnSound/btnSound.png', width:180, height:163, amount:6},

            {type:'audio', nameAsset:configGame.soundId.ballGrab, path:'assets/soundsmp3/ball_grab_02.mp3'},
            {type:'audio', nameAsset:configGame.soundId.ballHitRim, path:'assets/soundsmp3/ball_hit_rim_01.mp3'},
            {type:'audio', nameAsset:configGame.soundId.ballThrow, path:'assets/soundsmp3/ball_throw_02.mp3'},
            {type:'audio', nameAsset:configGame.soundId.scoring01, path:'assets/soundsmp3/scoring_01.mp3'},
            {type:'audio', nameAsset:configGame.soundId.scoring02, path:'assets/soundsmp3/scoring_02.mp3'},
            {type:'audio', nameAsset:configGame.soundId.buzzRetry, path:'assets/soundsmp3/buzz_retry_01.mp3'},
            {type:'audio', nameAsset:configGame.soundId.looseOneBall, path:'assets/soundsmp3/lose_one_ball.mp3'},
            {type:'audio', nameAsset:configGame.soundId.boardMove, path:'assets/soundsmp3/board_move.mp3'},
            {type:'audio', nameAsset:configGame.soundId.ballNetSwish01, path:'assets/soundsmp3/ball_net_swish_01.mp3'},
            {type:'audio', nameAsset:configGame.soundId.ballNetSwish02, path:'assets/soundsmp3/ball_net_swish_03.mp3'},
            {type:'audio', nameAsset:configGame.soundId.ballBounce, path:'assets/soundsmp3/ball_bounce_05.mp3'},
            {type:'audio', nameAsset:configGame.soundId.buttonGeneric, path:'assets/soundsmp3/button_generic_01.mp3'},
            {type:'audio', nameAsset:configGame.soundId.stingScorePopup, path:'assets/soundsmp3/sting_score_popup.mp3'},
            {type:'audio', nameAsset:configGame.soundId.jerryAsoma, path:'assets/soundsmp3/jerry_asoma.mp3'},
            {type:'audio', nameAsset:configGame.soundId.jerryBaja, path:'assets/soundsmp3/jerry_baja.mp3'},
            {type:'audio', nameAsset:configGame.soundId.jerryBloquea, path:'assets/soundsmp3/jerry_bloquea.mp3'},
            {type:'audio', nameAsset:configGame.soundId.jerrySube, path:'assets/soundsmp3/jerry_sube.mp3'},
            {type:'audio', nameAsset:configGame.soundId.extra_life, path:'assets/soundsmp3/extra_life.mp3'},
            {type:'audio', nameAsset:configGame.soundId.celebratory, path:'assets/soundsmp3/celebratory.mp3'},
            {type:'audio', nameAsset:configGame.soundId.boo_lose, path:'assets/soundsmp3/boo_lose.mp3'},
            {type:'audio', nameAsset:configGame.soundId.loop, path:'assets/music/music_ingme.mp3'},
            {type:'audio', nameAsset:configGame.soundId.cover, path:'assets/music/music_cover.mp3'}
        ];
        return preloadAssets;
    },
    getText(key){
        if(this.gameTexts==null){
            this.gameTexts = game.cache.getJSON('texts');
        }
        return this.gameTexts[key][this.gameTexts["currentLanguage"]];
    },
    preloadFonts:[
        'Michelin-Black',
        'DigitalDismay-Regular',
        'BebasNeue-Regular',
        'Oswald-SemiBold'
    ],
    texts:{
        tapToContinue:'Tap to Continue',
        btn_throwBall:'Throw',
        btn_moveBasket:'Move',
        pause:'pause',
        gameOver:'gameOver',
        finalScore:'finalScore',
        bestScore:'bestScore',
        nameGame1:'nameGame1',
        nameGame2:'nameGame2',
        play:'play',
        howToPlay:'howToPlay',
        winText1:'winText1',
        winText2:'winText2',
        no:'no',
        yes:'yes',
        wantToLeave:'wantToLeave'
    },
    gameplay:{
        physicsValues:{
            gravityFactor:3,
            ballThroughForceFactor:4,
            ballThroughForceFactorRange:{
                min:0.46,
                max:0.75,
                minResult:4.25,
                maxResult:4
            },
            ballThroughXFactor:10
        },
        basket:{
            limitMovingLeftFactor:0.2,
            limitMovingRightFactor:0.8,
            movingToPositionFactor:0.1,
            scaleFactor:2.4
        },
        ball:{
            scaleBeforeThrowing:1.3
        }
    },
    soundId:{
        ballGrab:'ballGrab',
        ballHitRim:'ballHitRim',
        ballThrow:'ballThrow',
        scoring01:'scoring01',
        scoring02:'scoring02',
        buzzRetry:'buzzRetry',
        looseOneBall:'looseOneBall',
        boardMove:'boardMove',
        ballNetSwish01:'ballNetSwish01',
        ballNetSwish02:'ballNetSwish02',
        ballBounce:'ballBounce',
        buttonGeneric:'buttonGeneric',
        loop:'loop',
        cover:'cover',
        stingScorePopup:'stingScorePopup',
        jerryAsoma:'jerryAsoma',
        jerryBaja:'jerryBaja',
        jerryBloquea:'jerryBloquea',
        jerrySube:'jerrySube',
        extra_life:'extra_life',
        celebratory:'celebratory',
        boo_lose:'boo_lose'
    }
};