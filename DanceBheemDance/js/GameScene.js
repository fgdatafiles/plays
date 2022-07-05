var __extends = this.__extends || function (d, b)
    {
        function __()
        {
            this.constructor = d;
        }
        __.prototype = b.prototype;
        d.prototype = new __();
    };

var GameScene = (function (_super)
{
    __extends(GameScene, _super);

    var oScope;
    var mBackground_1;
    var ReqBombVal=0;
    var style = {
        font : 'bold 25px Arial',
        fill : '##FFFFFF',
        stroke : '#4a1850',
        strokeThickness : 0,
        dropShadow : false,
        dropShadowColor : '#000000',
        dropShadowAngle : 0,
        dropShadowDistance : 0,
        wordWrap : false,
        wordWrapWidth : 440
    };

    var ScoreText=new PIXI.Text(" 0", style);
    var LeftKeyObject = keyboard(37);
    var UpKeyObject = keyboard(38);
    var RightKeyObject = keyboard(39);
    var DownKeyObject = keyboard(40);
    var EnterKeyObject = keyboard(13);
    var InputTypes={Left:0,Right:1,Up:2,Down:3,Enter:4,Null:5};
    var currentInput;
    //var PauseKeyObject = keyboard(112);

    var Timer=0;
    var AllGeneratedKeys=[];
    var HitTestTexture;
    var HitTestSprite;
    var BombMeter=0,Score=0;
    var healthBar = new PIXI.DisplayObjectContainer();
    var healthInnerContainer = new PIXI.DisplayObjectContainer();
    var KeyContainer = new PIXI.DisplayObjectContainer();
    var Pause_Container;
    var GameOverContainer;
    var PauseButtonTexture,PlayButtonTexture,HelpButtonTexture,LeftBtnTexture,RightBtnTexture,UpBtnTexture,DownBtnTexture,BtnHudTexture;
    var PauseButtonSprite,PlayButtonSprite,HelpButtonSprite,LeftBtnSprite,RightBtnSprite,UpBtnSprite,DownBtnSprite,BtnHudSprite,EnterBtnSprite;
    var PauseGame;
    var isStarted;
    var menu_container,Story_container,Instr_container;
    //var isLeft,isRight,isUp,isDown,isEnter,correctKey=false;
    //var correctKey;
    var OriginalHitTest;
    var BaseTexture;
    var forgetTexture;
    var BaseSprite;
    //var oneTime=false;
    var DanceTextures = [];
   // var timeAnim=0;
    var isSetDone = true;
    var mFrameNum = -1;
    var mActiveSet = -1;
    var isGameOver=false;
    var newKeyInputs;
    var destroy=false;
    var movie;
    var isPlayed=false;
    var bgm;
    var keyMissed=false;
    var hitDetected=false;
    var mFinalScoreText;
    var mute;
    var MuteButtonTexture,UnMuteButtonTexture;
    var MuteSprite;
    var GameplayMuteButton;
    function GameScene()
    {
        _super.call(this);
        oScope = this;
        PIXI.loader
            .add('images/spriteSheet_0.json')
            .add('images/spriteSheet_1.json')
            //.add('images/spriteSheet_2.json')
            //.add('images/spriteSheet_3.json')
            .add('images/spriteSheet_4.json')
            .add('images/bheemAnim_0.json')
            .add('images/bheemAnim_1.json')
            //.add('images/bheemAnim_2.json')
            .add('images/extras.json')
            .add('images/gameOverPopUp.json')
            .add('images/extra_Sprites.json')
            .add('images/closebtn.json')
            .add('images/musicButton.json')
            .load(onAssetsLoaded);


        bgm = new Howl({
            urls: ['sounds/bgm.mp3'],
            autoplay: true,
            loop: true,
            volume: 0.5});
    }
    GameScene.prototype.update = function ()
    {
        _super.prototype.update.call(this);
        if(isStarted&&!PauseGame)
        {

            Timer += 1;
           //timeAnim+=0.005;
            if (Timer == 75&&!destroy)
            {
                Timer = 0;
                newKeyInputs = new KeyInputs();
                AllGeneratedKeys.push(newKeyInputs);
                oScope.addChild(newKeyInputs.keyElement);

            }
            var Length = AllGeneratedKeys.length;
            for (var i = 0; i < Length; i++)
            {
                newKeyInputs = AllGeneratedKeys[i];
                KeyUpdate.call(newKeyInputs);
                CheckKeyValues(newKeyInputs);

                if (newKeyInputs.keyElement.position.x > 800)
                {
                    oScope.removeChild(newKeyInputs.keyElement);

                }

            }
        }
    };

    function onAssetsLoaded()
    {
        //bgm.loop().play();
        /**
         * Main Gameplay Buttons and Background Loop
         **/
        //Textures
        var backgroundTexture = PIXI.Texture.fromImage('images/bGHUd.png');
        HitTestTexture=PIXI.Texture.fromFrame('Detection');
        PauseButtonTexture = PIXI.Texture.fromFrame('Pause_Btn');
        var BarTexture = PIXI.Texture.fromFrame('bar');
        var GroundTexture = PIXI.Texture.fromFrame('rings');
        BaseTexture=PIXI.Texture.fromFrame("base");
        forgetTexture=PIXI.Texture.fromFrame("baseIncorrect");
        MuteButtonTexture = PIXI.Texture.fromFrame('musicBtn');
        UnMuteButtonTexture = PIXI.Texture.fromFrame('musicBtnClosed');
        //Sprites
        mBackground_1 = new PIXI.Sprite(backgroundTexture);
        HitTestSprite= new PIXI.Sprite(HitTestTexture);
        PauseButtonSprite = new PIXI.Sprite(PauseButtonTexture);
        OriginalHitTest= new PIXI.Sprite(HitTestTexture);
        var BarSprite = new PIXI.Sprite(BarTexture);
        var GroundSprite = new PIXI.Sprite(GroundTexture);
        BaseSprite=new PIXI.Sprite(BaseTexture);
        GameplayMuteButton=new PIXI.Sprite(MuteButtonTexture);
        GameplayMuteButton.buttonMode = true;
        GameplayMuteButton.interactive=true;
        GameplayMuteButton.on('mousedown', Mute);
        GameplayMuteButton.on('touchstart', Mute);

        //Positions and Events
        HitTestSprite.position.x=330;
        HitTestSprite.position.y=7;
        HitTestSprite.scale.set(0.8);
        OriginalHitTest.position.x=365;
        OriginalHitTest.position.y=40;
        OriginalHitTest.scale.set(0.4);
        OriginalHitTest.tint=0xFFFFFF;
        PauseButtonSprite.position.set(685,160);
        PauseButtonSprite.interactive=true;
        PauseButtonSprite.buttonMode = true;
        PauseButtonSprite.on('mousedown', onDown);
        PauseButtonSprite.on('touchstart', onDown);
        BarSprite.position.x = 0;
        BarSprite.position.y = 50;
        GroundSprite.scale.set(0.8);
        GroundSprite.position.set(220,420);
        BaseSprite.position.set(240,125);
        GameplayMuteButton.position.set(20,145);
        //Add to Stage
        oScope.addChild(mBackground_1);
        oScope.addChild(BarSprite);
        oScope.addChild(GroundSprite);
        oScope.addChild(HitTestSprite);
        oScope.addChild(OriginalHitTest);
        oScope.addChild(GameplayMuteButton);
        oScope.addChild(PauseButtonSprite);
        oScope.addChild(BaseSprite);
        OriginalHitTest.visible=false;
        /**
         * Gameplay Buttons Loop
         **/
        //Textures
        LeftBtnTexture=PIXI.Texture.fromFrame('Left_Btn');
        RightBtnTexture=PIXI.Texture.fromFrame('Right_Btn');
        UpBtnTexture=PIXI.Texture.fromFrame('Up_Btn');
        DownBtnTexture=PIXI.Texture.fromFrame('Down_Btn');
        BtnHudTexture=PIXI.Texture.fromFrame('Special_Btn');
        var BtnHudTexture2=PIXI.Texture.fromFrame('flashyBtn');

        //Sprites
        LeftBtnSprite= new PIXI.Sprite(LeftBtnTexture);
        RightBtnSprite= new PIXI.Sprite(RightBtnTexture);
        UpBtnSprite= new PIXI.Sprite(UpBtnTexture);
        DownBtnSprite= new PIXI.Sprite(DownBtnTexture);
        BtnHudSprite= new PIXI.Sprite(BtnHudTexture);
        EnterBtnSprite= new PIXI.Sprite(BtnHudTexture2);

        //Positions
        LeftBtnSprite.position.set(0,50);
        UpBtnSprite.position.set(80,-30);
        DownBtnSprite.position.set(80,100);
        RightBtnSprite.position.set(130,50);
        BtnHudSprite.position.set(60,30);
        EnterBtnSprite.position.set(840 ,30);
        KeyContainer.position.set(10,450);
        KeyContainer.scale.set(0.8);

        //Add Event Listeners
        LeftBtnSprite.interactive=true;
        LeftBtnSprite.buttonMode = true;
        RightBtnSprite.interactive=true;
        RightBtnSprite.buttonMode = true;
        UpBtnSprite.interactive=true;
        UpBtnSprite.buttonMode = true;
        DownBtnSprite.interactive=true;
        DownBtnSprite.buttonMode = true;
        EnterBtnSprite.interactive=true;
        EnterBtnSprite.buttonMode = true;		
        LeftBtnSprite.on('mousedown', LeftArrowUp).on('touchstart', LeftArrowUp);
        RightBtnSprite.on('mousedown', RightArrowUp).on('touchstart', RightArrowUp);
        UpBtnSprite.on('mousedown', UpArrowUp).on('touchstart', UpArrowUp);
        DownBtnSprite.on('mousedown', DownArrowUp).on('touchstart', DownArrowUp);
        EnterBtnSprite.on('mousedown', EnterInputUp).on('touchstart', EnterInputUp);

        //Add to Stage
        KeyContainer.addChild(BtnHudSprite);
        KeyContainer.addChild(LeftBtnSprite);
        KeyContainer.addChild(UpBtnSprite);
        KeyContainer.addChild(DownBtnSprite);
        KeyContainer.addChild(RightBtnSprite);
        KeyContainer.addChild(EnterBtnSprite);
        oScope.addChild(KeyContainer);

        /**
         * Score Label
         **/
        var ScoreTexture=PIXI.Texture.fromFrame('Score_Panel');
        var ScoreSprite=new PIXI.Sprite(ScoreTexture);
        ScoreSprite.position.set(300,500);
        ScoreText.position.set(425,525);
        ScoreText.anchor.set(0.5,0.5);
        oScope.addChild(ScoreSprite);
        oScope.addChild(ScoreText);



        /**
         * Bomb meter Loop
         **/
        //Textures
        var HealthOuterBarTexture=PIXI.Texture.fromFrame('Yellow_Bar');
        var HealthInnerBarTexture=PIXI.Texture.fromFrame('Red_Bar');

        //Sprites
        var HealthOuterBarSprite= new PIXI.Sprite(HealthOuterBarTexture);
        var HealthInnerBarSprite= new PIXI.Sprite(HealthInnerBarTexture);

        //Positions
        healthBar.position.set(700,260);
        healthBar.scale.set(0.7);
        healthInnerContainer.position.set(7,232);
        healthInnerContainer.addChild(HealthInnerBarSprite);
        healthBar.outer = healthInnerContainer;
        healthBar.outer.height=-225;
        healthBar.outer.height = -(BombMeter * 2);

        //Add to Stage
        oScope.addChild(healthBar);
        oScope.addChild(healthInnerContainer);
        healthBar.addChild(HealthOuterBarSprite);
        healthBar.addChild(healthInnerContainer);

        /**
         * Main Menu Loop
         **/
        /*var upperbody = new PIXI.extras.MovieClip(getFramesFromSpriteSheet(resources.upperbody.texture, 42, 51));
        upperbody.gotoAndPlay(0);
        oScope.addChild(upperbody)*/
        /**
         * Main Menu Loop
        **/

        //Textures
        var MenuBG = PIXI.Texture.fromFrame('mainMenuWithoutButtons');

        PlayButtonTexture = PIXI.Texture.fromFrame('Play_Btn');
        HelpButtonTexture = PIXI.Texture.fromFrame('Help_btn');
        var Instructions_Texture = PIXI.Texture.fromFrame('Instructions');
        var BlackFilm_Texture = PIXI.Texture.fromFrame('Black_Tint');
        var StryScene_Texture = PIXI.Texture.fromImage('images/spriteSheet_3.png');
        var PauseTexture = PIXI.Texture.fromFrame('Pause_Screen');
        var GOBG_Texture = PIXI.Texture.fromFrame('gameOver');
        var playAgain_Texture = PIXI.Texture.fromFrame('playAgainBtn');
      //  var submit_Texture = PIXI.Texture.fromFrame('submitScore');
        //Sprites
        var MenuSprite= new PIXI.Sprite(MenuBG);
        PlayButtonSprite = new PIXI.Sprite(PlayButtonTexture);
        HelpButtonSprite = new PIXI.Sprite(HelpButtonTexture);
        var Instructions_Sprite= new PIXI.Sprite(Instructions_Texture);
        var BlackFilm_Sprite= new PIXI.Sprite(BlackFilm_Texture);
        var PlayButton=new PIXI.Sprite(PlayButtonTexture);
        var StoryScene_Sprite=new PIXI.Sprite(StryScene_Texture);
        var StoryBtn_Sprite=new PIXI.Sprite(PlayButtonTexture);
        var PauseSprite = new PIXI.Sprite(PauseTexture);
        var ResumeSprite=new PIXI.Sprite(PlayButtonTexture);
        var BFGameOver_Sprite= new PIXI.Sprite(BlackFilm_Texture);
        var GOBG_Sprite = new PIXI.Sprite(GOBG_Texture);
        var playAgain_Sprite = new PIXI.Sprite(playAgain_Texture);
        //var submit_Sprite = new PIXI.Sprite(submit_Texture);
        MuteSprite=new PIXI.Sprite(MuteButtonTexture);
        var finalScoreStyle  = {
            font : 'bold 25px Arial',
            fill : '#000000',
            align : 'center'
        };

        mFinalScoreText = new PIXI.Text('Score',finalScoreStyle);

        //DisplayContainer
        menu_container=new PIXI.DisplayObjectContainer();
        Story_container=new PIXI.DisplayObjectContainer();
        Instr_container=new PIXI.DisplayObjectContainer();
        Pause_Container=new PIXI.DisplayObjectContainer();
        GameOverContainer = new PIXI.DisplayObjectContainer();
        //Positions and Properties
        //BFGameOver_Sprite.position.set(550,450);

        GOBG_Sprite.position.set(100,100);
        playAgain_Sprite.position.set(100,450);
        playAgain_Sprite.buttonMode = true;
        playAgain_Sprite.interactive=true;
        playAgain_Sprite.on('mousedown', PlayAgain);
        playAgain_Sprite.on('touchstart', PlayAgain);


       /* submit_Sprite.position.set(450,450);
        submit_Sprite.buttonMode = true;
        submit_Sprite.interactive=true;
        submit_Sprite.on('mousedown', submitScore);
        submit_Sprite.on('touchstart', submitScore);*/

        MuteSprite.position.set(720,10);
        MuteSprite.buttonMode = true;
        MuteSprite.interactive=true;
        MuteSprite.on('mousedown', Mute);
        MuteSprite.on('touchstart', Mute);


        PlayButtonSprite.position.x=325;
        PlayButtonSprite.position.y=350;
        PlayButtonSprite.buttonMode = true;
        PlayButtonSprite.interactive=true;
        PlayButtonSprite.on('mousedown', Help);
        PlayButtonSprite.on('touchstart', Help);
        HelpButtonSprite.position.x=325;
        HelpButtonSprite.position.y=450;
        HelpButtonSprite.on('mousedown', Help);
        HelpButtonSprite.on('touchstart', Help);
        HelpButtonSprite.buttonMode = true;
        HelpButtonSprite.interactive=true;
        Instructions_Sprite.position.set(75,75);
        PlayButton.position.set(550,450);
        PlayButton.buttonMode = true;
        PlayButton.interactive=true;
        PlayButton.on('mousedown', Play);
        PlayButton.on('touchstart', Play);
        StoryBtn_Sprite.position.set(525,430);
        StoryBtn_Sprite.buttonMode = true;
        StoryBtn_Sprite.interactive=true;
        StoryBtn_Sprite.on('mousedown', Continue);
        StoryBtn_Sprite.on('touchstart', Continue);
        PauseSprite.position.set(125,100);
        ResumeSprite.position.set(325,350);
        ResumeSprite.buttonMode = true;
        ResumeSprite.interactive=true;
        ResumeSprite.on('mousedown', onDown);
        ResumeSprite.on('touchstart', onDown);
        mFinalScoreText.position.set(345,430);

        //Add to Stage
        menu_container.addChild(MenuSprite);
        menu_container.addChild(PlayButtonSprite);
        menu_container.addChild(HelpButtonSprite);
        menu_container.addChild(MuteSprite);


        Instr_container.addChild(BlackFilm_Sprite);
        Instr_container.addChild(Instructions_Sprite);
        Instr_container.addChild(PlayButton);

        Story_container.addChild(StoryScene_Sprite);
        Story_container.addChild(StoryBtn_Sprite);

        Pause_Container.addChild(PauseSprite);
        Pause_Container.addChild(ResumeSprite);

        GameOverContainer.addChild(BFGameOver_Sprite);
        GameOverContainer.addChild(GOBG_Sprite);
        GameOverContainer.addChild(playAgain_Sprite);
      //  GameOverContainer.addChild(submit_Sprite);
        GameOverContainer.addChild(mFinalScoreText);


        oScope.addChild(menu_container);
        oScope.addChild(Instr_container);
        oScope.addChild(Story_container);
        oScope.addChild(Pause_Container);

        Instr_container.visible=false;
        Story_container.visible=false;
        Pause_Container.visible=false;
        getFramesFromSpriteSheet();
        movie = new PIXI.extras.MovieClip(DanceTextures);
        oScope.removeChild(movie);
    }
    function getFramesFromSpriteSheet() {
        var frameArr = [2, 2, 2, 1, 1, 3, 1, 1, 2, 2, 3, 3, 2, 2];
        for (var i = 0; i < 14; i++)
        {
            for (var j = 0; j < frameArr[i]; j++)
            {
                var texture = PIXI.Texture.fromFrame("set" + ( i + 1 ) + "_" + (j + 1));
                //console.log("set" + ( i + 1 ) + "_" + (j + 1));
                DanceTextures.push(texture);
                console.log("set" + ( i + 1 ) + "_" + (j + 1));
            }
        }
    }
    function DanceAnim(RandomPoses)
    {
        //console.log("TimeAnim"+timeAnim);
        switch (RandomPoses)
        {
            case 1:
                if(mFrameNum != 0){
                    mFrameNum = 0;
                } else {
                    mFrameNum = 1;
                    isSetDone = true;
                }
                break;
            case 2:
                if(mFrameNum != 2){
                    mFrameNum = 2;
                } else {
                    mFrameNum = 3;
                    isSetDone = true;
                }
                break;
            case 3:
                if(mFrameNum != 4){
                    mFrameNum = 4;
                } else {
                    mFrameNum = 5;
                    isSetDone = true;
                }
                break;
            case 4:
                if(mFrameNum != 6){
                    mFrameNum = 6;
                    isSetDone = true;
                }
                break;
            case 5:
                if(mFrameNum != 7){
                    mFrameNum = 7;
                    isSetDone = true;
                }
                break;
            case 6:
                if(mFrameNum != 8 && mFrameNum != 9){
                    mFrameNum = 8;
                } else if(mFrameNum != 9){
                    mFrameNum = 9;
                } else {
                    mFrameNum = 10;
                    isSetDone = true;
                }
                break;
            case 7:
                if(mFrameNum != 11){
                    mFrameNum = 11;
                    isSetDone = true;
                }
                break;
            case 8:
                if(mFrameNum != 12){
                    mFrameNum = 12;
                    isSetDone = true;
                }
                break;
            case 9:
                if(mFrameNum != 13){
                    mFrameNum = 13;
                } else {
                    mFrameNum = 14;
                    isSetDone = true;
                }
                break;
            case 10:
                if(mFrameNum != 15){
                    mFrameNum = 15;
                } else {
                    mFrameNum = 16;
                    isSetDone = true;
                }
                break;
            case 11:
                if(mFrameNum != 17 && mFrameNum != 18){
                    mFrameNum = 17;
                } else if(mFrameNum != 18){
                    mFrameNum = 18;
                } else {
                    mFrameNum = 19;
                    isSetDone = true;
                }
                break;
            case 12:
                if(mFrameNum != 20 && mFrameNum != 21){
                    mFrameNum = 20;
                } else if(mFrameNum != 21){
                    mFrameNum = 21;
                } else {
                    mFrameNum = 22;
                    isSetDone = true;
                }
                break;
            case 13:
                if(mFrameNum != 23){
                    mFrameNum = 23;
                } else {
                    mFrameNum = 24;
                    isSetDone = true;
                }
                break;
            case 14:
                if(mFrameNum != 25){
                    mFrameNum = 25;
                } else {
                    mFrameNum = 26;
                    isSetDone = true;
                }
                break;
        }
        BaseSprite.texture = DanceTextures[mFrameNum];
    }
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function Get_Keys(Detected)
    {
        //Press
        if(Detected)
        {
            LeftKeyObject.press = function () {
                currentInput=InputTypes.Left;
            };
            RightKeyObject.press = function () {
                currentInput=InputTypes.Right;
            };
            UpKeyObject.press = function () {
                currentInput=InputTypes.Up;
            };
            DownKeyObject.press = function () {
                currentInput=InputTypes.Down;
            };
            EnterKeyObject.press = function () {
                currentInput=InputTypes.Enter;
            };

       }
        else
            currentInput=InputTypes.Null;
        return currentInput;


    }
    function LeftArrowUp()
    {
        currentInput=InputTypes.Left;
    }
    function RightArrowUp()
    {
        currentInput=InputTypes.Right;

    }
    function UpArrowUp()
    {
        currentInput=InputTypes.Up;
    }
    function DownArrowUp()
    {
        currentInput=InputTypes.Down;
    }
    function EnterInputUp()
    {
        currentInput=InputTypes.Enter;
    }
	function submitScore(){
        submit_on_game_click(Score);
		PlayAgain.call(oScope, true);
	}
	
    function PlayAgain(eventData)
    {
        if(isGameOver)
        {
            if(destroy)
            {
                Timer = 0;
                for(var i=0;i<AllGeneratedKeys.length;i++)
                {
                    oScope.removeChild(AllGeneratedKeys[i].keyElement);
                }
                AllGeneratedKeys=[];
            }
            PauseGame = false;
			enableAllBtns.call(oScope, true);
            oScope.removeChild(GameOverContainer);
            oScope.removeChild(movie);
            BaseSprite.texture = BaseTexture;
            BombMeter=0;
            Score=0;
            ScoreText.text = " " + Score;
            healthBar.outer.height = -(BombMeter * 2);
            isPlayed=false;
            menu_container.visible=true;
            isStarted=false;
            destroy=false;
            isGameOver=false;

        }
        scenesManager.goToScene('game');
		if(eventData != true){
			updatePlayAgain();
        }
    }
    function Play ()
    {
        Instr_container.visible=false;
        Story_container.visible=true;
    }
    function Continue ()
    {
        menu_container.visible=false;
        Instr_container.visible=false;
        Story_container.visible=false;
        isStarted=true;
    }
    function Help ()
    {
        Instr_container.visible=true;
    }
    function Mute ()
    {
        mute=!mute;
        if(mute) {
            bgm.mute();
            MuteSprite.texture=UnMuteButtonTexture;
            GameplayMuteButton.texture=UnMuteButtonTexture;
        }
        else {
            bgm.unmute();
            MuteSprite.texture=MuteButtonTexture;
            GameplayMuteButton.texture=MuteButtonTexture;

        }
    }
    function onDown ()
    {
        PauseGame=!PauseGame;
        Pause_Container.visible=PauseGame;		
		enableAllBtns.call(oScope, !PauseGame);
        if(!mute) {
            if (PauseGame)
                bgm.mute();
            else
                bgm.unmute();
        }

    }
    function CheckKeyValues(keyInput)
    {
        healthBar.outer.height = -(BombMeter * 2);
        if(!keyInput.isPressed&&keyInput.keyElement.position.x>450&&keyInput.KeyValue<5)
        {
            BombMeter+=10;
            keyInput.isPressed = true;
            keyMissed=true;
        }


        if ( hitTestRectangle(keyInput.keyElement,OriginalHitTest))
        {

            hitDetected=true;
           /* if(!keyInput.isPressed&&keyInput.keyElement.position.x>350&&keyInput.keyElement.position.x<450)
            {
                hitDetected=true;*/
                Get_Keys(keyInput.isCollided);
            //}
            //else
            //{
            //    hitDetected=false;
            //    Get_Keys(hitDetected);
            //}
            if(!keyInput.isCollided&&!keyInput.isPressed&&!keyMissed)
            {
                keyInput.isCollided = true;
                if (isSetDone == true)
                {
                    isSetDone = false;
                    BaseSprite.texture = BaseTexture;
                    var randNum = getRandom(1, 14);
                    while (mActiveSet == randNum) {
                        randNum = getRandom(1, 14);
                    }
                    mActiveSet = randNum;
                }
                else
                {
                    DanceAnim(mActiveSet);
                }
            }
            if(keyMissed)
            {
                BaseSprite.texture = forgetTexture;
                keyInput.isCollided = true;
                keyMissed=false;
            }
            if(BombMeter>=100)
            {
                if(!isGameOver) {
                    BombMeter = 112;
                    PauseGame = true;					
					enableAllBtns.call(oScope, false);
                    oScope.addChild(GameOverContainer);
                    mFinalScoreText.text = 'Score\n'+Score;
                    if(!isPlayed)
                    {
                        oScope.addChild(movie);
                        movie.position.x=380;
                        movie.position.y=320;
                        movie.scale.set(0.5);
                        movie.anchor.set(0.5);
                        movie.animationSpeed = 0.05;
                        movie.play();
                        isPlayed=true;
                    }
                    isGameOver=true;
                    destroy=true;
                }
            }

            if(!keyInput.isPressed&&!keyInput.isCorrect&&currentInput!=InputTypes.Null) {

                if(currentInput==InputTypes.Left)
                {
                    if (keyInput.KeyValue == 1) {
                        keyInput.isCorrect = true;
                        keyInput.isPressed = true;
                        Score += 5;
                        ScoreText.text = " " + Score;
                    }
                    else if (keyInput.KeyValue == 5)
                    {
                        BombMeter=100;
                    }
                    else {
                        BombMeter+=10;
                        keyInput.isWrong = true;
                        keyInput.isPressed = true;
                    }
                    currentInput=InputTypes.Null;
                }
                if(currentInput==InputTypes.Right) {
                    if (keyInput.KeyValue == 3) {
                        keyInput.isCorrect = true;
                        keyInput.isPressed = true;
                        Score += 5;
                        ScoreText.text = " " + Score;
                    }
                    else if (keyInput.KeyValue == 5)
                    {
                        BombMeter=100;
                    }
                    else {
                        BombMeter+=10;
                        keyInput.isWrong = true;
                        keyInput.isPressed = true;

                    }
                    currentInput=InputTypes.Null;

                }
                if(currentInput==InputTypes.Up) {
                    if (keyInput.KeyValue == 2) {
                        keyInput.isCorrect = true;
                        keyInput.isPressed = true;
                        Score += 5;
                        ScoreText.text = " " + Score;
                    }
                    else if (keyInput.KeyValue == 5)
                    {
                        BombMeter=100;
                    }
                    else {
                        BombMeter+=10;
                        keyInput.isWrong = true;
                        keyInput.isPressed = true;

                    }
                    currentInput=InputTypes.Null;


                }
                if(currentInput==InputTypes.Down) {
                    if (keyInput.KeyValue == 4) {
                        keyInput.isCorrect = true;
                        keyInput.isPressed = true;
                        Score += 5;
                        ScoreText.text = " " + Score;
                    }
                    else if (keyInput.KeyValue == 5)
                    {
                        BombMeter=100;
                    }
                    else
                    {
                        BombMeter+=10;
                        keyInput.isWrong = true;
                        keyInput.isPressed = true;

                    }
                    currentInput=InputTypes.Null;

                }
                if(currentInput==InputTypes.Enter)
                {
                    if (keyInput.KeyValue == 5)
                    {
                        ReqBombVal = 100 - BombMeter;
                        BombMeter += ReqBombVal;
                        keyInput.isPressed = true;
                        Score += 5;
                        ScoreText.text = " " + Score;
                    }
                    else if (keyInput.KeyValue == 6)
                    {
                        keyInput.isCorrect = true;
                        BombMeter = 0;
                        keyInput.isPressed = true;
                    }
                    else if (keyInput.KeyValue <= 4)
                    {
                        BombMeter+=10;
                        keyInput.isWrong = true;
                        keyInput.isPressed = true;
                    }
                    currentInput=InputTypes.Null;
                }
                }
            }
    }


    // start animating
    function hitTestRectangle(sprite1, sprite2) {

        //Define the variables we'll need to calculate
        var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

        //hit will determine whether there's a collision
        hit = false;

        //Find the center points of each sprite
        sprite1.centerX = sprite1.x + sprite1.width / 2;
        sprite1.centerY = sprite1.y + sprite1.height / 2;
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
        var realwindow = window.parent || window;
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
        realwindow.addEventListener(
            "keydown", key.downHandler.bind(key), false
        );
        realwindow.addEventListener(
            "keyup", key.upHandler.bind(key), false
        );
        return key;
    }

    function enableAllBtns(p_enable){
        PauseButtonSprite.interactive = p_enable;
        LeftBtnSprite.interactive = p_enable;
        RightBtnSprite.interactive = p_enable;
        UpBtnSprite.interactive = p_enable;
        DownBtnSprite.interactive = p_enable;
        EnterBtnSprite.interactive = p_enable;
    }
    return GameScene;
})(Scene);
