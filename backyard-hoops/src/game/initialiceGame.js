var ASPECT_LANDSCAPE   = 'landscape';
var ASPECT_PORTRAIT    = 'portrait';

var game;
var aspect;
var config;
var soundList = {};
var ratioAspect;
var devicePixelRatio;
var callbackResizeWindow;
var flagGameReady = false;

window.addEventListener('load', (event) => {
    initialiceGame();
});

function initialiceGame(){
    window.addEventListener('resize', function () {  
        if(flagGameReady){
            if(callbackResizeWindow!=null && callbackResizeWindow.resize!=null){
                callbackResizeWindow.resize();
            }
        }else{
            createGame();
        }
    });

    if(window.innerWidth==0 || window.innerHeight==0){
        return;
    }
    createGame();
}

function createGame(){
    flagGameReady = true;
    ratioAspect = window.innerWidth/window.innerHeight;
    devicePixelRatio = window.devicePixelRatio;

    if(window.innerWidth>window.innerHeight){
        //Landscape 
        aspect = ASPECT_PORTRAIT;
        config = configSprites;
        game = new Phaser.Game (768, 1024, Phaser.CANVAS);
    }else{
        //Portrait
        aspect = ASPECT_PORTRAIT;
        config = configSprites;
        game = new Phaser.Game (window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS);
        //game = new Phaser.Game (480, 760, Phaser.CANVAS);
    }

    J2DM_ConsoleLog('ASPECT:'+aspect);
    J2DM_ConsoleLog('ASPECT GAME:'+configGame.getAspect());
    J2DM_ConsoleLog('width:'+window.innerWidth);
    J2DM_ConsoleLog('height:'+window.innerHeight);
    J2DM_ConsoleLog('ratioAspect:'+ratioAspect);
    J2DM_ConsoleLog('devicePixelRatio:'+devicePixelRatio);

    SettingsGame.initSettings();
    game.state.add(StatesGame.preloadAssets, State_PreloadAssets);
    game.state.add(StatesGame.splash, State_Splash);
    game.state.add(StatesGame.gameplay, State_Gameplay);
    game.state.add(StatesGame.tutorial, State_Tutorial);
    game.state.add(StatesGame.preloadLoader, State_PreloadLoader);
    
    game.state.start(StatesGame.preloadLoader);
}

function playSound(soundId){
    if(SettingsGame.flagSoundState){
        if(soundList[soundId]!=null){
            soundList[soundId].play();
        }
    }
}

function playMusic(soundId){
    if(SettingsGame.flagMusicState){
        if(soundList[soundId]!=null){
            soundList[soundId].loop = true;
            soundList[soundId].play();
        }
    }
}

function stopMusic(soundId){
    if(soundList[soundId]!=null){
        soundList[soundId].stop();
    }
}

function handleCorrect(){
    if(!game.device.desktop){
        document.getElementById("turn").style.display="none";
    }
}

function handleIncorrect(){
    if(!game.device.desktop){
        document.getElementById("turn").style.display="block";
        SettingsGame.setPauseOn();
    }
}

var StatesGame = {
    preloadAssets:'preloadAssets',
    preloadLoader:'preloadLoader',
    splash:'splashScreen',
    tutorial:'tutorial',
    gameplay:'gameplay',
    finalScreen:'finalScreen'
};