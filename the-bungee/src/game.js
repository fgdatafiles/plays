/* global createjs, console, commonGameNS, scorecardNS, require*/
// globals
var canvasId = 'demoCanvas';
var queue;
var data;
var game;
var stageWidth = 1344;
var stageHeight = 756; // This must be remain static/constrained
var gridColumnWidth = stageWidth * 0.12;
var gameText;
var phase;
var font;
var totalTravelDistance;
var windSfx;
var flameSfx;
var hasBegunFlames = false;
var currentGameplaySong;

var doTutorialCards = false;
var doneTutorialPhase1 = false;
var hasReachedTopRowInTutorial = false;
var hasReachedBottomRowInTutorial = false;
var tutSprite;
var doneTutorialPhase2 = false;

function fadeInTo(container, onComplete) {
  var sh = new createjs.Shape();
  sh.graphics.beginFill('#000')
    .drawRect(0, 0, stageWidth, stageHeight);
  sh.z = ZLayer.uiControls;
  container.addChild(sh);
  createjs.Tween.get(sh)
    .to({alpha: 0}, data.transitionFadeTime)
    .wait(data.transitionFadeHangTime)
    .call(function() {
      container.removeChild(sh);
      if (onComplete) {
        onComplete();
      }
    });
}

function fadeOutOf(container, onComplete) {
  var sh = new createjs.Shape();
  sh.graphics.beginFill('#000')
    .drawRect(stageWidth * -0.2, stageHeight * -0.2, stageWidth * 1.2, stageHeight * 1.2);
  sh.z = ZLayer.uiControls;
  sh.alpha = 0;
  container.addChild(sh);
  createjs.Tween.get(sh)
    .to({alpha: 1}, data.transitionFadeTime)
    .call(function() {
      container.removeChild(sh);
      if (onComplete) {
        onComplete();
      }
    });
}

function getFontSheetForLocale() {
  if (data.language === 'ar') {
    font = 'fred';
    return 'Fredburger-Regular-Ara';
  } else if (data.language === 'ru' || data.language === 'tr' || data.language === 'pl') {
    font = 'fred';
    return 'Fredburger-Regular';
  } else {
    font = 'gumball';
    return 'Gumball';
  }
}

/**
 ZLayer enum for sorting DisplayObjects.
 */
var ZLayer = {
  background: 0,
  foreground: 1,
  topRoad: 2,
  topMiddleRoad: 4,
  middleRoad: 6,
  bottomMiddleRoad: 8,
  bottomRoad: 10,
  ui: 20,
  debugControls: 30
};
var anaisZLayer = {
  shadow: 0,
  fire: 1,
  ropeOutline: 2,
  rope: 3,
  doll: 4,
  anais: 5,
  speed: 6,
  cloud: 7
};
function addShakeToDoll(random, doll) {
  var rotationAmount = random.getRandomInt(-15, -5);
  rotationAmount *= random.getCoinFlip(-1, 1);
  doll.rotation = rotationAmount;
  createjs.Tween.get(doll, {loop: true})
    .to({
      rotation: -rotationAmount
    }, 120, createjs.Ease.sineInOut)
    .to({
      rotation: rotationAmount
    }, 120, createjs.Ease.sineInOut);
}
// Load the code reqs, then listen for a domReady event to init the game.
require([
  'common/audioManager',
  'common/cookieManager',
  'common/gameText',
  'common/resizer',
  'common/util',
  'sceneManager',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(audioManager, cookie, gameTextHelper, resizer, util, sceneManager) {
  'use strict';
  var rotatePromptDiv;
  var createRotatePrompt = _.once(function() {
    var div = rotatePromptDiv = document.createElement('div');
    div.id = 'rotate';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.backgroundColor = '#a44198';
    div.style.overflow = 'hidden';

    var rotate = document.createElement('img');
    rotate.src = 'assets/images/RotateFullScreen.jpg';
    rotate.style.width = '100%';
    rotate.style.height = 'auto';
    rotate.style.display = 'block';
    rotate.style['margin-left'] = 'auto';
    rotate.style['margin-right'] = 'auto';
    div.appendChild(rotate);

    document.body.appendChild(div);
  });
  function waitUntilLandscape() {
    var dim = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    if (dim.width / dim.height < 1) {
      createRotatePrompt();
      setTimeout(waitUntilLandscape, 200);
    } else {
      var rotate = document.getElementById('rotate');
      if (rotate) {
        document.body.removeChild(rotate);
      }
      var canvas = document.createElement('canvas');
      canvas.id = canvasId;
      if (util.isIOS()) {
        var wrapper = document.createElement('div');
        wrapper.style.width = window.innerWidth + 'px';
        wrapper.style.height = (window.innerHeight + 1) + 'px';
        wrapper.appendChild(canvas);
        document.body.appendChild(wrapper);
      } else {
        document.body.appendChild(canvas);
      }
      game = new Game();
    }
  }

  // listen for a domReady event to init the game.
  require(['lib/domReady'], function(domReady) {
    domReady(function() {
      waitUntilLandscape();
    });
  });

  // Listen for orientation changes
  window.addEventListener("orientationchange", function() {
    var landscape = Math.abs(_.get(window, 'orientation')) === 90;
    var newDim = {
      width: (landscape ? screen.height : screen.availWidth),
      height: (landscape ? window.innerHeight : screen.availHeight)
    };
    resizer.doResize(game.stage, util.isIOS() ? newDim : null);
    var elem = document.getElementById(canvasId);
    elem.style.position = 'absolute';
    elem.style.top = elem.style.left = 0;
    if (landscape) {
      elem.style.right = 0;
    } else {
      elem.style.right = 'auto';
    }
  }, false);

  var minLoadTime = 1000;
  // ---------------------------------------------------------------------------

  function Game() {
    this.init();
  }

  Game.prototype = {
    /**
     Preloads all assets for this game, then calls
     handlePreloadFinished() once ready.
     */
    init: function() {
      queue = new createjs.LoadQueue();
      queue.installPlugin(createjs.Sound);

      queue.on('complete', this.handleDataLoaded, this, true);
      queue.loadFile('data.json', true);
    },
    handleDataLoaded: function() {
      data = queue.getResult('data.json');

      // instantiate stage and other objects
      this.stage = new createjs.Stage(canvasId);
      this.stage.enableMouseOver(20);
      createjs.Touch.enable(this.stage);
      var dimensions = util.isMobile() ? null : data.desktopViewPort;
      resizer.doResize(this.stage, dimensions);

      var loader = new createjs.Bitmap('assets/images/EMEA_Loader_Logo.png');
      loader.regX = data.preLoaderLogo.width / 2;
      loader.regY = data.preLoaderLogo.height;
      loader.x = stageWidth / 2;
      loader.y = stageHeight / 2;

      var fillCont =
        new createjs.Bitmap('assets/images/EMEA_CNLoader_Container.png');
      fillCont.y = stageHeight / 1.75;
      var fillBar =
        new createjs.Bitmap('assets/images/EMEA_CNLoader_Fill.png');
      fillBar.y = stageHeight / 1.72;
      var dx = stageWidth * 0.3125;

      this.stage.addChild(fillBar, fillCont, loader);
      createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
      createjs.Ticker.framerate = data.fps;
      createjs.Ticker.on('tick', this.handleTick, this);

      // preload sounds and json data
      queue.on('complete', this.handlePreloadFinished, this, true);

      // other preloads go here
      util.addJsonDataToLoadQueue(queue, data.jsonData);
      util.addDataToLoadQueue(queue, data.audio);
      util.addDataToLoadQueue(queue, data.images);
      queue.load();
      queue.on('progress', function(event) {
        fillBar.x = dx * event.progress;
      });
    },
    handlePreloadFinished: function() {
      queue.removeAllEventListeners('progress');
      _.delay(function() {
        while (this.stage.children.length) {
          var ind = this.stage.children.length - 1;
          createjs.Tween.removeTweens(this.stage.children[ind]);
          this.stage.removeChildAt(ind);
        }
        gameText = gameTextHelper.getLocaleGameTextData();
        gameTextHelper.setFontSheetForLocale(getFontSheetForLocale);

        // draw the stage once to make sure everything
        // gets loaded into memory.
        this.stage.update();
        //Mute audio on mobile
        if(util.isMobile()){
          audioManager.setMuteSfx(true);
          cookie.setCookie('tb-mute-sfx', 'true');
          audioManager.setMuteMusic(true);
          cookie.setCookie('tb-mute-music', 'true');
        }
        // ready!
        sceneManager.gotoTitle();
        _.delay(function() {
          audioManager.playMusic('gameplayMusic', data.audio.gameplayMusic, {
            interrupt: true,
            volume: data.volumes.titleMusicVolume
          });
        }, 100);
      }.bind(this), minLoadTime);
    },
    handleTick: function(event) {
      if (this.updateFPS) {
        this.updateFPS(event);
      }
      // tick any non-easelJS game objects you're using before the stage.
      // then the stage...
      this.stage.update(event);
    }
  };
});
