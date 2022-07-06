var Alvin =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./js/timer.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./js/item.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var LEVELS = [// Level 1
{
  collectible_lists: 1,
  not_collectible: [],
  used_items: [1, 2, 3, 4, 5, 6],
  speed: 1,
  density: 1,
  time: 40
}, // Level 2
{
  collectible_lists: 2,
  not_collectible: [],
  used_items: [1, 2, 3, 4, 5, 6],
  speed: 1.05,
  density: 1,
  time: 60
}, // Level 3
{
  collectible_lists: 3,
  not_collectible: [7],
  used_items: [1, 2, 3, 4, 5, 6, 7],
  speed: 1.1,
  density: 1,
  time: 80
}, // Level 4
{
  collectible_lists: 1,
  not_collectible: [7, 8],
  used_items: [1, 2, 3, 4, 5, 6, 7, 8],
  speed: 1.15,
  density: 0.85,
  time: 40
}, // Level 5
{
  collectible_lists: 2,
  not_collectible: [7, 8],
  used_items: [1, 2, 3, 4, 5, 6, 7, 8],
  speed: 1.2,
  density: 0.85,
  time: 60
}, // Level 6
{
  collectible_lists: 3,
  not_collectible: [7, 8],
  used_items: [1, 2, 3, 4, 5, 6, 7, 8],
  speed: 1.25,
  density: 0.85,
  time: 80
}, // Level 7
{
  collectible_lists: 2,
  not_collectible: [7, 8],
  used_items: [1, 2, 3, 4, 5, 6, 7, 8],
  speed: 1.3,
  density: 0.85,
  time: 50
}, // Level 8
{
  collectible_lists: 3,
  not_collectible: [8],
  used_items: [1, 2, 3, 4, 5, 7, 8],
  speed: 1.35,
  density: 0.8,
  time: 70
}, // Level 9
{
  collectible_lists: 4,
  not_collectible: [7, 8],
  used_items: [1, 2, 3, 4, 5, 7, 8],
  speed: 1.4,
  density: 0.8,
  time: 60
}, // Level 10
{
  collectible_lists: 4,
  not_collectible: [7, 8],
  used_items: [1, 2, 3, 4, 5, 7, 8],
  speed: 1.45,
  density: 0.7,
  time: 80
}];
var ITEMS = {
  1: 'balloon.png',
  2: 'ball.png',
  3: 'shield.png',
  4: 'hat.png',
  5: 'bear.png'
};
var CHARACTERS = {
  1: 'alvin.png',
  2: 'simon.png',
  3: 'theadore.png'
};
var DROP_INTERVAL = 750;
var SCORE_PER_ROUND = 50;
var SCORE_PER_SECOND = 2;
var LAST_LEVEL = 10;
var LAST_LEVEL_COMPETITION = 1;
var CLOCK_ID = 6;
var ICE_ID = 7;
var PAINT_ID = 8;
var clickSound = 'ClickSound';
var backgroundSound = 'BackgroundSound';
createjs.Sound.registerSound('sounds/click.mp3', clickSound);
createjs.Sound.on('fileload', loadHandler);
createjs.Sound.registerSound('sounds/background.mp3', backgroundSound);

function loadHandler(event) {
  if (event.id === backgroundSound) {
    createjs.Sound.play(backgroundSound, {
      volume: 0.1,
      loop: -1
    });
  }
}

var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // Sets "font-size" of "<html>" to the width of it, in pixels. All other elements get their dimensions
//relative to this font-size, in rems;

function mobileDimension() {
  document.documentElement.style.width = '100%';
  document.documentElement.style.fontSize = document.documentElement.clientWidth;
} // If mobile, resize elements;


if (window.innerWidth < 562) {
  mobileDimension();
}

var _gameStarted = new WeakMap();

var _itemsCount = new WeakMap();

var _lastDroppedItemId = new WeakMap();

var Game = /*#__PURE__*/function () {
  /**
   * Timer instance.
   */

  /**
   * True if the game has started.
   */

  /**
   * Dropped items count.
   */

  /**
   * Last dropped item id.
   */

  /**
   * Current character id of the level.
   */

  /**
   * Current level running.
   */

  /**
   * Current items order arrays.
   */

  /**
   * Current collected items.
   */

  /**
   * Current collected rounds count.
   */

  /**
   * Current score.
   */

  /**
   * Game mode (classic/competition).
   */

  /**
   * Last level.
   */

  /**
   * Highest score.
   */

  /**
   * Drop items interval.
   */

  /**
   * Game wrapper height.
   */

  /**
   * Game wrapper width.
   */

  /**
   * Suitcase width.
   */

  /**
   * Correct animation timeout.
   */

  /**
   * Incorrect animation timeout.
   */

  /**
   * Splash animation timeout.
   */

  /**
   * True if the window is currently focused.
   */

  /**
   * True if the level is running.
   */

  /**
   * True if the suitcase is frozen by ice item.
   */
  function Game(gameMode) {
    var _this = this;

    _classCallCheck(this, Game);

    _gameStarted.set(this, {
      writable: true,
      value: void 0
    });

    _itemsCount.set(this, {
      writable: true,
      value: void 0
    });

    _lastDroppedItemId.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _itemsCount, 0);

    _classPrivateFieldSet(this, _lastDroppedItemId, 0);

    var level = Game.getUrlParameter('level');
    Game.currentCharacterId = 1;
    Game.timer = new _timer__WEBPACK_IMPORTED_MODULE_0__["default"]();
    Game.currentLevel = level || 1;
    Game.currentCollectedRounds = 0;
    Game.currentCollected = [];
    Game.currentItems = [];
    Game.currentScore = 0;
    Game.gameMode = gameMode;

    if (gameMode === 'classic') {
      Game.lastLevel = LAST_LEVEL;
    } else {
      Game.lastLevel = LAST_LEVEL_COMPETITION;
    }

    Game.windowFocused = true;
    Game.levelIsRunning = false;
    Game.suitcaseFrozen = false;
    Game.highScore = parseInt(window.localStorage.getItem('high_score')) || 0;
    $('.start-game-button').on('click', function () {
      return _this.startGame();
    });
    mobile ? $('.game').on('touchmove', function (event) {
      return _this.onMouseMove(event);
    }) : $('.game').on('mousemove', function (event) {
      return _this.onMouseMove(event);
    });
    $('.play-button').on('click', function () {
      return _this.startNewLevel();
    });
    $('.try-again-button').on('click', function () {
      return _this.tryAgain();
    });
    $('.next-level-button').on('click', function () {
      return _this.nextLevel();
    });
    $('.sound-button').on('click', function () {
      return _this.toggleSound();
    });
    $(window).focus(function () {
      Game.timer.resumeOnFocus();
      Game.windowFocused = true;
    });
    $(window).blur(function () {
      Game.windowFocused = false;
      Game.timer.pauseOnBlur();
    });
    $(window).on('resize', mobileDimension);

    if (mobile) {
      // on mobile, remove default dragging from certain elements;
      var removeDrag = [document, $('.suitcase')[0], $('.level-ui')[0]];
      removeDrag.forEach(function (element) {
        element.addEventListener('touchmove', function (e) {
          e.preventDefault();
        }, {
          passive: false
        });
      });
    }

    this.showNewLevel();
  }
  /**
   * Method user to hide the splash screen and show the game screen.
   */


  _createClass(Game, [{
    key: "startGame",
    value: function startGame() {
      createjs.Sound.play(clickSound);
      ga('send', 'event', {
        eventCategory: 'Start Game',
        eventAction: 'Games',
        eventLabel: 'Alvin and the Chipmunks'
      });
      $('.splash').addClass('hidden');
      $('.splash-competition').addClass('hidden');
      $('.wrapper').removeClass('hidden');
      Game.gameHeight = $('.game').height();
      Game.gameWidth = $('.game').width();
      Game.suitcaseWidth = $('.game .suitcase').width();
    }
    /**
     * Method used to show the new level info.
     */

  }, {
    key: "showNewLevel",
    value: function showNewLevel() {
      $('.timer-bar').removeClass('show');
      $('.new-level-ui').addClass('show');
      $('#newLevel').text(Game.currentLevel);
      $('#highScore').text(Game.highScore);
      $('.level-ui').removeClass('show');
      $('.dark-background').addClass('show');
      Game.currentCharacterId = Game.getRandomArbitrary(1, 3);
      Game.currentItems = [];

      for (var i = 0; i < LEVELS[Game.currentLevel - 1].collectible_lists; i++) {
        Game.currentItems.push(Game.shuffleArray([1, 2, 3, 4, 5]));
      }

      Game.generateNewLevelItems();
    }
    /**
     * Method used to start a new level.
     */

  }, {
    key: "startNewLevel",
    value: function startNewLevel() {
      var _this2 = this;

      createjs.Sound.play(clickSound);
      ga('send', 'event', {
        eventCategory: 'Play Level',
        eventAction: 'Games',
        eventLabel: 'Alvin and the Chipmunks'
      });
      $('.timer-bar').addClass('show');
      $('.level-ui').addClass('show');
      $('.dark-background').removeClass('show');
      $('.new-level-ui').removeClass('show');
      Game.generateLevelItems();

      _classPrivateFieldSet(this, _gameStarted, true);

      $('.game').addClass('game-running');
      $('.game .suitcase, .game .suitcase-front').removeClass('hidden'); // Start dropping items after a slight delay.

      setTimeout(function () {
        Game.levelIsRunning = true;

        _this2.dropItems(); // Start the timer of the level.


        Game.timer.start(LEVELS[Game.currentLevel - 1].time);
      }, 500);
    }
    /**
     * Method called on try again button click.
     */

  }, {
    key: "tryAgain",
    value: function tryAgain() {
      createjs.Sound.play(clickSound);
      ga('send', 'event', {
        eventCategory: 'Try Again',
        eventAction: 'Games',
        eventLabel: 'Alvin and the Chipmunks'
      });
      Game.currentLevel = 1;
      Game.currentCollectedRounds = 0;
      Game.currentCollected = [];
      Game.currentItems = [];
      Game.currentScore = 0;
      $('#badLuckUi').removeClass('show');
      $('#highScoreUi').removeClass('show');
      $('.current-level').removeClass('hidden');
      $('.current-level-label').text(" ".concat(Game.currentLevel));
      this.showNewLevel();

      if (Game.gameMode === 'competition') {
        $('.splash-competition').removeClass('hidden');
        $('.wrapper').addClass('hidden');
      }
    }
    /**
     * Method called on next level button click.
     */

  }, {
    key: "nextLevel",
    value: function nextLevel() {
      createjs.Sound.play(clickSound);
      ga('send', 'event', {
        eventCategory: 'Next Level',
        eventAction: 'Games',
        eventLabel: 'Alvin and the Chipmunks'
      });

      if (Game.currentLevel === Game.lastLevel) {
        Game.showEnterCompetitionScreen();
      } else {
        $('#endLevelUi').removeClass('show');
        var newPoints = SCORE_PER_ROUND * Game.currentCollectedRounds;
        var timeBonus = SCORE_PER_SECOND * Game.timer.getCurrentSeconds();
        Game.currentScore += newPoints + timeBonus;
        $('#currentScore').text(Game.currentScore);
        Game.currentLevel++;
        $('.current-level').removeClass('hidden');
        $('.current-level-label').text(" ".concat(Game.currentLevel));
        Game.currentCollectedRounds = 0;
        Game.currentCollected = [];
        Game.currentItems = [];
        this.showNewLevel();
      }
    }
  }, {
    key: "toggleSound",
    value: function toggleSound() {
      if ($('.sound-button').hasClass('sound-on')) {
        $('.sound-button').removeClass('sound-on').addClass('sound-off');
        createjs.Sound.stop(backgroundSound);
      } else {
        $('.sound-button').removeClass('sound-off').addClass('sound-on');
        createjs.Sound.play(backgroundSound, {
          volume: 0.1,
          loop: -1
        });
      }
    }
    /**
     * Method used to drop the items in the interval.
     */

  }, {
    key: "dropItems",
    value: function dropItems() {
      var _this3 = this;

      Game.dropItemsIntervalInstance = setInterval(function () {
        if (Game.windowFocused) {
          var _this$itemsCount;

          var newItem = _this3.getNewItem();

          $('.game').append(newItem);
          new _item__WEBPACK_IMPORTED_MODULE_1__["default"]('collectible', '#item' + _classPrivateFieldGet(_this3, _itemsCount), newItem.data('id'), LEVELS[Game.currentLevel - 1].speed);
          _classPrivateFieldSet(_this3, _itemsCount, (_this$itemsCount = +_classPrivateFieldGet(_this3, _itemsCount)) + 1), _this$itemsCount;
        }
      }, DROP_INTERVAL * LEVELS[Game.currentLevel - 1].density);
    }
    /**
     * Method used to get a new random item.
     */

  }, {
    key: "getNewItem",
    value: function getNewItem() {
      var usedItemsLength = LEVELS[Game.currentLevel - 1].used_items.length;
      var item = $('<div class="item"></div>');
      var itemId = Game.getRandomArbitrary(LEVELS[Game.currentLevel - 1].used_items[0], LEVELS[Game.currentLevel - 1].used_items[usedItemsLength - 1]);

      while (itemId === _classPrivateFieldGet(this, _lastDroppedItemId) || (itemId === 7 || itemId === 8) && $('.item-7, .item-8').length >= 2) {
        itemId = Game.getRandomArbitrary(LEVELS[Game.currentLevel - 1].used_items[0], LEVELS[Game.currentLevel - 1].used_items[usedItemsLength - 1]);
      } // remove clock item from level 8, 9 and 10;


      while (Game.currentLevel > 7 && itemId === 6) {
        itemId = Game.getRandomArbitrary(LEVELS[Game.currentLevel - 1].used_items[0], LEVELS[Game.currentLevel - 1].used_items[usedItemsLength - 1]);
      }

      _classPrivateFieldSet(this, _lastDroppedItemId, itemId);

      item.addClass('item-' + itemId);
      item.prop('id', 'item' + _classPrivateFieldGet(this, _itemsCount));
      item.data('id', itemId);
      return item;
    }
    /**
     * Methods called on mouse move event and set position of the suitcase.
     *
     * @param {*} event
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      // If the game has started.
      if (_classPrivateFieldGet(this, _gameStarted) && !Game.suitcaseFrozen) {
        var offset = $(event.currentTarget).offset();
        var width = $('.game .suitcase').width();
        var totalWidth = $('.game').width();
        var x = mobile ? event.changedTouches[0].pageX - offset.left : event.pageX - offset.left;
        var xOffset = x - width / 2; // If the offset is within the game boundaries.

        if (xOffset > 0 && xOffset + width < totalWidth) {
          $('.game .suitcase, .game .suitcase-front').css('left', x - width / 2);
        }
      }
    }
    /**
     * Method used to generate the level items elements.
     */

  }], [{
    key: "generateLevelItems",
    value: function generateLevelItems() {
      $('.level-ui .ui-items-list').html('');

      for (var i = 0; i < Game.currentItems[Game.currentCollectedRounds].length; i++) {
        $('.ui-items-list').append('<div class="ui-item"><img src="img/collect-' + ITEMS[Game.currentItems[Game.currentCollectedRounds][i]] + '" alt="item" class="ui-item-icon"/></div>');
      }
    }
    /**
     * Method used to generate the new level items elements.
     */

  }, {
    key: "generateNewLevelItems",
    value: function generateNewLevelItems() {
      $('.new-level-ui .character, .level-ui .character, .end-game-ui .character').prop('src', 'img/' + CHARACTERS[Game.currentCharacterId]);
      $('.new-level-ui .ui-items-lists').html('');

      for (var i = 0; i < Game.currentItems.length; i++) {
        var newList = $('<div class="ui-items-list"></div>');

        for (var j = 0; j < Game.currentItems[i].length; j++) {
          newList.append('<div class="ui-item"><img src="img/collect-' + ITEMS[Game.currentItems[i][j]] + '" alt="item" class="ui-item-icon"/></div>');
        }

        $('.new-level-ui .ui-items-lists').append(newList);
      }

      $('.ui-wrong-items-list').addClass('hidden');

      if (LEVELS[Game.currentLevel - 1].not_collectible.length > 0) {
        $('.ui-wrong-items-list').removeClass('hidden');

        if (LEVELS[Game.currentLevel - 1].not_collectible.indexOf(ICE_ID) !== -1) {
          $('.ui-wrong-items-list img[data-id="' + ICE_ID + '"]').removeClass('hidden');
        }

        if (LEVELS[Game.currentLevel - 1].not_collectible.indexOf(PAINT_ID) !== -1) {
          $('.ui-wrong-items-list img[data-id="' + PAINT_ID + '"]').removeClass('hidden');
        }
      }
    }
    /**
     * Method used to check if the given element is the right one in the correct position.
     *
     * @param {*} item
     */

  }, {
    key: "isTheRightItem",
    value: function isTheRightItem(item) {
      return item === Game.currentItems[Game.currentCollectedRounds][Game.currentCollected.length - 1] || item === 6;
    }
    /**
     * Method used to check if item is clock.
     */

  }, {
    key: "checkClock",
    value: function checkClock(item) {
      return item === CLOCK_ID;
    }
    /**
     * Method used to check if the collected are are 5.
     */

  }, {
    key: "isTheItemsOrderDone",
    value: function isTheItemsOrderDone() {
      return Game.currentCollected.length === 5;
    }
    /**
     * Method used to check if the level is completed.
     */

  }, {
    key: "isTheLevelDone",
    value: function isTheLevelDone() {
      return Game.currentCollectedRounds === LEVELS[Game.currentLevel - 1].collectible_lists;
    }
    /**
     * Method used to show the end level screen.
     */

  }, {
    key: "showEndLevelScreen",
    value: function showEndLevelScreen() {
      ga('send', 'event', {
        eventCategory: 'End Level <' + Game.currentLevel + '>',
        eventAction: 'Games',
        eventLabel: 'Alvin and the Chipmunks'
      });
      $('.game').removeClass('game-running');
      Game.levelIsRunning = false; // Stop the timer.

      Game.timer.stop(); // Clear the drop items interval.

      clearInterval(Game.dropItemsIntervalInstance); // Remove remaining items.

      $('.game .item').remove(); // Prepare and show end level data.

      var newPoints = SCORE_PER_ROUND * Game.currentCollectedRounds;
      var timeBonus = SCORE_PER_SECOND * Game.timer.getCurrentSeconds();
      $('#levelNumber').text(Game.currentLevel);
      $('#currentScoreValue').text(Game.currentScore);
      $('#newPointsValue').text(newPoints);
      $('#timeBonusValue').text(timeBonus);
      $('#totalValue').text(Game.currentScore + newPoints + timeBonus); // Show the UI and hide the not needed elements.

      $('#endLevelUi').addClass('show');
      $('.level-ui').removeClass('show');
      $('.dark-background').addClass('show');
      $('.timer-bar').removeClass('show');
      $('.game .suitcase, .game .suitcase-front').addClass('hidden');
      $('.current-level').addClass('hidden');

      if (Game.gameMode === 'competition') {
        Game.showEnterCompetitionScreen();
      }
    }
    /**
     * Method used to show the bad luck screen.
     */

  }, {
    key: "showBadLuckScreen",
    value: function showBadLuckScreen() {
      $('.game').removeClass('game-running');
      Game.levelIsRunning = false; // Stop the timer.

      Game.timer.stop(); // Clear the drop items interval.

      clearInterval(Game.dropItemsIntervalInstance); // Remove remaining items.

      $('.game .item').remove(); // Show the UI and hide the not needed elements.

      $('#badLuckUi').addClass('show');
      $('.level-ui').removeClass('show');
      $('.dark-background').addClass('show');
      $('.timer-bar').removeClass('show');
      $('.game .suitcase, .game .suitcase-front').addClass('hidden');
      $('.current-level').addClass('hidden');
    }
    /**
     * Method used to show the high score screen.
     */

  }, {
    key: "showHighScoreScreen",
    value: function showHighScoreScreen() {
      $('.game').removeClass('game-running');
      Game.levelIsRunning = false;
      $('#highScoreValue').text(Game.currentScore); // Stop the timer.

      Game.timer.stop(); // Clear the drop items interval.

      clearInterval(Game.dropItemsIntervalInstance); // Remove remaining items.

      $('.game .item').remove(); // Show the UI and hide the not needed elements.

      $('#highScoreUi').addClass('show');
      $('.level-ui').removeClass('show');
      $('.dark-background').addClass('show');
      $('.timer-bar').removeClass('show');
      $('.game .suitcase, .game .suitcase-front').addClass('hidden');
    }
    /**
     * Method used to show the enter competition screen.
     */

  }, {
    key: "showEnterCompetitionScreen",
    value: function showEnterCompetitionScreen() {
      $('.game').removeClass('game-running'); // Show the UI and hide the not needed elements.

      $('#endLevelUi').removeClass('show');
      $('#enterCompetitionUi').addClass('show');
    }
    /**
     * Method used to refresh the collected items
     */

  }, {
    key: "refreshCollectedItems",
    value: function refreshCollectedItems() {
      Game.generateLevelItems();

      for (var i = 0; i < Game.currentCollected.length; i++) {
        var src = 'img/collected-' + ITEMS[Game.currentCollected[i]];
        $('.level-ui .ui-items-list .ui-item').eq(i).find('.ui-item-icon').prop('src', src).addClass('collected');
      }
    }
    /**
     * Method used to get a random number in the given interval.
     *
     * @param {*} min
     * @param {*} max
     */

  }, {
    key: "getRandomArbitrary",
    value: function getRandomArbitrary(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * Method used to shuffle a given array.
     *
     * @param {*} array
     */

  }, {
    key: "shuffleArray",
    value: function shuffleArray(array) {
      var currentIndex = array.length,
          temporaryValue,
          randomIndex; // While there remain elements to shuffle...

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  }, {
    key: "getUrlParameter",
    value: function getUrlParameter(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
  }]);

  return Game;
}();

_defineProperty(Game, "timer", void 0);

_defineProperty(Game, "currentCharacterId", void 0);

_defineProperty(Game, "currentLevel", void 0);

_defineProperty(Game, "currentItems", void 0);

_defineProperty(Game, "currentCollected", void 0);

_defineProperty(Game, "currentCollectedRounds", void 0);

_defineProperty(Game, "currentScore", void 0);

_defineProperty(Game, "gameMode", void 0);

_defineProperty(Game, "lastLevel", void 0);

_defineProperty(Game, "highScore", void 0);

_defineProperty(Game, "dropItemsIntervalInstance", void 0);

_defineProperty(Game, "gameHeight", void 0);

_defineProperty(Game, "gameWidth", void 0);

_defineProperty(Game, "suitcaseWidth", void 0);

_defineProperty(Game, "correctAnimationTimeout", void 0);

_defineProperty(Game, "incorrectAnimationTimeout", void 0);

_defineProperty(Game, "splashAnimationTimeout", void 0);

_defineProperty(Game, "windowFocused", void 0);

_defineProperty(Game, "levelIsRunning", void 0);

_defineProperty(Game, "suitcaseFrozen", void 0);



/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./js/game.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./js/item.js":
/*!********************!*\
  !*** ./js/item.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./js/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }


var DROP_SPEED = 2;
var DROPPING_STATE = 'dropping';
var COLLECTING_STATE = 'collecting';
var COLLECTED_STATE = 'collected';
var INSIDE_STATE = 'inside';
var GOING_LEFT_STATE = 'going_left';
var GOING_RIGHT_STATE = 'going_right';
var MISSED_STATE = 'missed';
var CORRECT_ANIMATION_DURATION = 500;
var INCORRECT_ANIMATION_DURATION = 500;
var SPLASH_ANIMATION_DURATION = 500;
var SUITCASE_FROZEN_DURATION = 4000;
var CLOCK_ID = 6;
var ICE_ID = 7;
var PAINT_ID = 8;
var badCollectSound = 'BadCollectSound';
var goodCollectSound = 'GoodCollectSound';
var penaltyFreezeSound = 'PenaltyFreezeSound';
var penaltySplatSound = 'PenaltySplatSound';
createjs.Sound.registerSound('sounds/bad_collect.mp3', badCollectSound);
createjs.Sound.registerSound('sounds/good_collect.mp3', goodCollectSound);
createjs.Sound.registerSound('sounds/penalty_freeze.mp3', penaltyFreezeSound);
createjs.Sound.registerSound('sounds/penalty_splat.mp3', penaltySplatSound);

var _type = new WeakMap();

var _id = new WeakMap();

var _itemId = new WeakMap();

var _currentSpeed = new WeakMap();

var _inSuitcaseSpeed = new WeakMap();

var _outSuitcaseSpeed = new WeakMap();

var _currentX = new WeakMap();

var _currentY = new WeakMap();

var _currentHeight = new WeakMap();

var _currentWidth = new WeakMap();

var _currentState = new WeakMap();

var _isCollected = new WeakMap();

var _animationShown = new WeakMap();

var _soundPlayed = new WeakMap();

var Item = /*#__PURE__*/function () {
  // Collectible or not.
  // Id of the element.
  // The type id of the item.
  // Current x position relative to the game container.
  // Current y position relative to the game container.
  // Current height of the element.
  // Current width of the element.
  // Current state of the item.
  function Item(type, id, itemId, speed) {
    _classCallCheck(this, Item);

    _type.set(this, {
      writable: true,
      value: void 0
    });

    _id.set(this, {
      writable: true,
      value: void 0
    });

    _itemId.set(this, {
      writable: true,
      value: void 0
    });

    _currentSpeed.set(this, {
      writable: true,
      value: void 0
    });

    _inSuitcaseSpeed.set(this, {
      writable: true,
      value: void 0
    });

    _outSuitcaseSpeed.set(this, {
      writable: true,
      value: void 0
    });

    _currentX.set(this, {
      writable: true,
      value: void 0
    });

    _currentY.set(this, {
      writable: true,
      value: void 0
    });

    _currentHeight.set(this, {
      writable: true,
      value: void 0
    });

    _currentWidth.set(this, {
      writable: true,
      value: void 0
    });

    _currentState.set(this, {
      writable: true,
      value: void 0
    });

    _isCollected.set(this, {
      writable: true,
      value: void 0
    });

    _animationShown.set(this, {
      writable: true,
      value: void 0
    });

    _soundPlayed.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _type, type);

    _classPrivateFieldSet(this, _id, id);

    _classPrivateFieldSet(this, _itemId, itemId);

    _classPrivateFieldSet(this, _currentState, DROPPING_STATE);

    _classPrivateFieldSet(this, _currentHeight, $(_classPrivateFieldGet(this, _id)).height());

    _classPrivateFieldSet(this, _currentWidth, $(_classPrivateFieldGet(this, _id)).width());

    _classPrivateFieldSet(this, _animationShown, false);

    _classPrivateFieldSet(this, _isCollected, false);

    _classPrivateFieldSet(this, _soundPlayed, false);

    _classPrivateFieldSet(this, _currentY, 0);

    _classPrivateFieldSet(this, _currentX, _game__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArbitrary(0, _game__WEBPACK_IMPORTED_MODULE_0__["default"].gameWidth - _classPrivateFieldGet(this, _currentWidth))); // Setting speed of items dynamically so it's available for mobile;


    var wrapperHeight = document.querySelector('.wrapper').clientHeight;
    var droppingSpeed = wrapperHeight * 0.0013333333333333333;
    var droppingInSuitcaseSpeed = wrapperHeight * 0.0024000000000000002;
    var droppingOutSpeed = wrapperHeight * 0.0031999999999999995;

    _classPrivateFieldSet(this, _currentSpeed, droppingSpeed * speed);

    _classPrivateFieldSet(this, _inSuitcaseSpeed, droppingInSuitcaseSpeed * speed);

    _classPrivateFieldSet(this, _outSuitcaseSpeed, droppingOutSpeed * speed);

    $(_classPrivateFieldGet(this, _id)).css('left', _classPrivateFieldGet(this, _currentX));
    this.startDropping();
  }

  _createClass(Item, [{
    key: "startDropping",
    value: function startDropping() {
      var _this = this;

      if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].windowFocused) {
        if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].levelIsRunning) {
          // Set collision state.
          this.detectCollision();

          if (_classPrivateFieldGet(this, _currentState) === COLLECTING_STATE || _classPrivateFieldGet(this, _currentState) === COLLECTED_STATE) {
            if (!_classPrivateFieldGet(this, _isCollected)) {
              _classPrivateFieldSet(this, _isCollected, true);

              if (_classPrivateFieldGet(this, _itemId) !== ICE_ID && _classPrivateFieldGet(this, _itemId) !== PAINT_ID) {
                // if item is clock prevent adding it to current collected items and update timer bar;
                if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].checkClock(_classPrivateFieldGet(this, _itemId))) {
                  _game__WEBPACK_IMPORTED_MODULE_0__["default"].timer.updateTimer(true);
                } else {
                  _game__WEBPACK_IMPORTED_MODULE_0__["default"].currentCollected.push(_classPrivateFieldGet(this, _itemId));
                } // Show the animation.


                if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].isTheRightItem(_classPrivateFieldGet(this, _itemId))) {
                  ga('send', 'event', {
                    eventCategory: 'Right Order',
                    eventAction: 'Games',
                    eventLabel: 'Alvin and the Chipmunks'
                  });
                  this.showCorrectAnimation();

                  if (!_classPrivateFieldGet(this, _soundPlayed)) {
                    _classPrivateFieldSet(this, _soundPlayed, true);

                    createjs.Sound.play(goodCollectSound);
                  }

                  if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].isTheItemsOrderDone()) {
                    _game__WEBPACK_IMPORTED_MODULE_0__["default"].currentCollectedRounds++;
                    _game__WEBPACK_IMPORTED_MODULE_0__["default"].currentCollected = [];

                    if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].isTheLevelDone()) {
                      _game__WEBPACK_IMPORTED_MODULE_0__["default"].showEndLevelScreen();
                    } else {
                      _game__WEBPACK_IMPORTED_MODULE_0__["default"].generateLevelItems();
                    } // Remove the item and end function.


                    $(_classPrivateFieldGet(this, _id)).remove();
                    return;
                  }
                } else {
                  ga('send', 'event', {
                    eventCategory: 'Wrong Order',
                    eventAction: 'Games',
                    eventLabel: 'Alvin and the Chipmunks'
                  });
                  this.showIncorrectAnimation();

                  if (!_classPrivateFieldGet(this, _soundPlayed)) {
                    _classPrivateFieldSet(this, _soundPlayed, true);

                    createjs.Sound.play(badCollectSound);
                  } // If the item is not right, reset the current collected items array.


                  _game__WEBPACK_IMPORTED_MODULE_0__["default"].currentCollected = [];
                } // if clock item collected, then prevent refreshing collected items and update timer bar;


                if (_classPrivateFieldGet(this, _itemId) !== CLOCK_ID) {
                  _game__WEBPACK_IMPORTED_MODULE_0__["default"].refreshCollectedItems();
                } else {
                  _game__WEBPACK_IMPORTED_MODULE_0__["default"].timer.updateTimer();
                }
              } else if (_classPrivateFieldGet(this, _itemId) === ICE_ID) {
                _game__WEBPACK_IMPORTED_MODULE_0__["default"].suitcaseFrozen = true;
                $('.game .suitcase').addClass('suitcase-frozen'); // Play the sound.

                createjs.Sound.play(penaltyFreezeSound);
                setTimeout(function () {
                  _game__WEBPACK_IMPORTED_MODULE_0__["default"].suitcaseFrozen = false;
                  $('.game .suitcase').removeClass('suitcase-frozen');
                }, SUITCASE_FROZEN_DURATION);
              } else if (_classPrivateFieldGet(this, _itemId) === PAINT_ID) {
                // Show the animation.
                this.showSplashAnimation(); // Play the sound.

                createjs.Sound.play(penaltySplatSound); // Show the bad luck screen.

                setTimeout(function () {
                  if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].currentScore > _game__WEBPACK_IMPORTED_MODULE_0__["default"].highScore) {
                    _game__WEBPACK_IMPORTED_MODULE_0__["default"].showHighScoreScreen();
                    window.localStorage.setItem('high_score', _game__WEBPACK_IMPORTED_MODULE_0__["default"].currentScore);
                  } else {
                    _game__WEBPACK_IMPORTED_MODULE_0__["default"].showBadLuckScreen();
                  }
                }, 750);
              }
            } // Increase speed.


            _classPrivateFieldSet(this, _currentSpeed, _classPrivateFieldGet(this, _inSuitcaseSpeed)); // "Stick" the item to the suitcase while it goes inside.


            $(_classPrivateFieldGet(this, _id)).css('left', parseInt($('.game .suitcase').css('left')) + _game__WEBPACK_IMPORTED_MODULE_0__["default"].suitcaseWidth / 2 - _classPrivateFieldGet(this, _currentWidth) / 2);

            if (_classPrivateFieldGet(this, _currentState) === COLLECTED_STATE) {
              _classPrivateFieldSet(this, _currentHeight, _classPrivateFieldGet(this, _currentHeight) - DROP_SPEED * _classPrivateFieldGet(this, _currentSpeed));

              $(_classPrivateFieldGet(this, _id)).css('height', _classPrivateFieldGet(this, _currentHeight));
            }

            if (_classPrivateFieldGet(this, _currentHeight) <= 0) {
              _classPrivateFieldSet(this, _currentState, INSIDE_STATE);
            }
          }

          if (_classPrivateFieldGet(this, _currentState) === INSIDE_STATE || _classPrivateFieldGet(this, _currentY) > _game__WEBPACK_IMPORTED_MODULE_0__["default"].gameHeight && (_classPrivateFieldGet(this, _currentState) === MISSED_STATE || _classPrivateFieldGet(this, _currentState) === GOING_LEFT_STATE || _classPrivateFieldGet(this, _currentState) == GOING_RIGHT_STATE)) {
            // Remove the item and end function.
            $(_classPrivateFieldGet(this, _id)).remove();
            return;
          }

          if (_classPrivateFieldGet(this, _currentState) === MISSED_STATE || _classPrivateFieldGet(this, _currentState) === GOING_LEFT_STATE || _classPrivateFieldGet(this, _currentState) === GOING_RIGHT_STATE) {
            _classPrivateFieldSet(this, _currentSpeed, _classPrivateFieldGet(this, _outSuitcaseSpeed));
          }

          if (_classPrivateFieldGet(this, _currentState) === GOING_LEFT_STATE) {
            if (!_classPrivateFieldGet(this, _animationShown)) {
              _classPrivateFieldSet(this, _animationShown, true);

              $(_classPrivateFieldGet(this, _id)).addClass('going-left-animation');
            }
          }

          if (_classPrivateFieldGet(this, _currentState) === GOING_RIGHT_STATE) {
            if (!_classPrivateFieldGet(this, _animationShown)) {
              _classPrivateFieldSet(this, _animationShown, true);

              $(_classPrivateFieldGet(this, _id)).addClass('going-right-animation');
            }
          }

          _classPrivateFieldSet(this, _currentY, _classPrivateFieldGet(this, _currentY) + DROP_SPEED * _classPrivateFieldGet(this, _currentSpeed));

          $(_classPrivateFieldGet(this, _id)).css('top', _classPrivateFieldGet(this, _currentY));
        } else {
          return;
        }
      }

      requestAnimationFrame(function () {
        return _this.startDropping();
      });
    }
  }, {
    key: "detectCollision",
    value: function detectCollision() {
      var itemRect = $(_classPrivateFieldGet(this, _id))[0].getBoundingClientRect();
      var suitcaseRect = $('.game .suitcase')[0].getBoundingClientRect(); // If the item is in missed state, ignore further calculations.

      if (_classPrivateFieldGet(this, _currentState) === MISSED_STATE) {
        if (itemRect.bottom > suitcaseRect.top + DROP_SPEED) {
          $(_classPrivateFieldGet(this, _id)).css('z-index', '98');
        }

        return;
      }

      if (itemRect.bottom < suitcaseRect.top - DROP_SPEED) {// If the item is above the hit line (Hit line = +/- the DROP_SPEED).
      } else if (itemRect.bottom >= suitcaseRect.top - DROP_SPEED && itemRect.bottom <= suitcaseRect.top + DROP_SPEED) {
        // If the item is on the hit line.
        if (itemRect.right < suitcaseRect.left || itemRect.left > suitcaseRect.right) {
          // If it's outside the suitcase hitbox.
          _classPrivateFieldSet(this, _currentState, MISSED_STATE);
        } else {
          if (itemRect.right < suitcaseRect.left + _game__WEBPACK_IMPORTED_MODULE_0__["default"].suitcaseWidth / 2) {
            if (_classPrivateFieldGet(this, _currentState) !== GOING_LEFT_STATE) {
              _classPrivateFieldSet(this, _currentState, GOING_LEFT_STATE);
            }
          } else if (itemRect.left > suitcaseRect.right - _game__WEBPACK_IMPORTED_MODULE_0__["default"].suitcaseWidth / 2) {
            if (_classPrivateFieldGet(this, _currentState) !== GOING_RIGHT_STATE) {
              _classPrivateFieldSet(this, _currentState, GOING_RIGHT_STATE);
            }
          } else {
            if (_classPrivateFieldGet(this, _currentState) === DROPPING_STATE) {
              _classPrivateFieldSet(this, _currentState, COLLECTING_STATE);
            }
          }
        }
      } else {
        // If the item is under the hit line.
        var frontSuitcaseRect = $('.game .suitcase-front')[0].getBoundingClientRect();

        if (itemRect.bottom >= frontSuitcaseRect.top && _classPrivateFieldGet(this, _currentState) === COLLECTING_STATE) {
          _classPrivateFieldSet(this, _currentState, COLLECTED_STATE);
        }

        if (_classPrivateFieldGet(this, _currentState) === MISSED_STATE) {}
      }
    }
  }, {
    key: "showCorrectAnimation",
    value: function showCorrectAnimation() {
      if (!_classPrivateFieldGet(this, _animationShown)) {
        _classPrivateFieldSet(this, _animationShown, true);

        var correctAnimation = $('.game .correct-animation').clone(true);
        $('.game .correct-animation').remove();
        correctAnimation.removeClass('hidden');
        $('.game .suitcase').append(correctAnimation);
        clearTimeout(_game__WEBPACK_IMPORTED_MODULE_0__["default"].correctAnimationTimeout);
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].correctAnimationTimeout = setTimeout(function () {
          $('.game .correct-animation').addClass('hidden');
        }, CORRECT_ANIMATION_DURATION);
      }
    }
  }, {
    key: "showIncorrectAnimation",
    value: function showIncorrectAnimation() {
      if (!_classPrivateFieldGet(this, _animationShown)) {
        _classPrivateFieldSet(this, _animationShown, true);

        var incorrectAnimation = $('.game .incorrect-animation').clone(true);
        $('.game .incorrect-animation').remove();
        incorrectAnimation.removeClass('hidden');
        $('.game .suitcase').append(incorrectAnimation);
        clearTimeout(_game__WEBPACK_IMPORTED_MODULE_0__["default"].incorrectAnimationTimeout);
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].incorrectAnimationTimeout = setTimeout(function () {
          $('.game .incorrect-animation').addClass('hidden');
        }, INCORRECT_ANIMATION_DURATION);
      }
    }
  }, {
    key: "showSplashAnimation",
    value: function showSplashAnimation() {
      if (!_classPrivateFieldGet(this, _animationShown)) {
        _classPrivateFieldSet(this, _animationShown, true);

        var splashAnimation = $('.game .splash-animation').clone(true);
        $('.game .splash-animation').remove();
        splashAnimation.removeClass('hidden');
        $('.game .suitcase').append(splashAnimation);
        clearTimeout(_game__WEBPACK_IMPORTED_MODULE_0__["default"].splashAnimationTimeout);
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].splashAnimationTimeout = setTimeout(function () {
          $('.game .splash-animation').addClass('hidden');
        }, SPLASH_ANIMATION_DURATION);
      }
    }
  }]);

  return Item;
}();



/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./js/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }


var GAINED_SECONDS = 2.5;
var YELLOW_LIMIT = 20;
var RED_LIMIT = 10;

var _initialTimeInSeconds = new WeakMap();

var _timeInSeconds = new WeakMap();

var _currentTimeInSeconds = new WeakMap();

var _intervalInstance = new WeakMap();

var _timeoutInstance = new WeakMap();

var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);

    _initialTimeInSeconds.set(this, {
      writable: true,
      value: void 0
    });

    _timeInSeconds.set(this, {
      writable: true,
      value: void 0
    });

    _currentTimeInSeconds.set(this, {
      writable: true,
      value: void 0
    });

    _intervalInstance.set(this, {
      writable: true,
      value: void 0
    });

    _timeoutInstance.set(this, {
      writable: true,
      value: void 0
    });
  }

  _createClass(Timer, [{
    key: "start",
    value: function start(timeInSeconds) {
      var _this = this;

      _classPrivateFieldSet(this, _timeInSeconds, timeInSeconds);

      _classPrivateFieldSet(this, _initialTimeInSeconds, timeInSeconds);

      _classPrivateFieldSet(this, _currentTimeInSeconds, timeInSeconds);

      this.refresh();

      _classPrivateFieldSet(this, _intervalInstance, setInterval(function () {
        var _this$currentTimeInSe;

        _classPrivateFieldSet(_this, _currentTimeInSeconds, (_this$currentTimeInSe = +_classPrivateFieldGet(_this, _currentTimeInSeconds)) - 1), _this$currentTimeInSe;

        _this.updateTimer();
      }, 1000)); // separated the "setTimeout" function so that it can be called in 2 places, here and in "updateTimer()";


      this.setCountdownTimer();
    }
  }, {
    key: "stop",
    value: function stop() {
      clearTimeout(_classPrivateFieldGet(this, _timeoutInstance));
      clearInterval(_classPrivateFieldGet(this, _intervalInstance));
    }
  }, {
    key: "pauseOnBlur",
    value: function pauseOnBlur() {
      if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].levelIsRunning) return;
      clearTimeout(_classPrivateFieldGet(this, _timeoutInstance));
      clearInterval(_classPrivateFieldGet(this, _intervalInstance));

      _classPrivateFieldSet(this, _timeInSeconds, _classPrivateFieldGet(this, _currentTimeInSeconds));
    }
  }, {
    key: "resumeOnFocus",
    value: function resumeOnFocus() {
      var _this2 = this;

      if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].levelIsRunning) return;

      _classPrivateFieldSet(this, _intervalInstance, setInterval(function () {
        var _this$currentTimeInSe2;

        _classPrivateFieldSet(_this2, _currentTimeInSeconds, (_this$currentTimeInSe2 = +_classPrivateFieldGet(_this2, _currentTimeInSeconds)) - 1), _this$currentTimeInSe2;

        _this2.updateTimer();
      }, 1000));

      this.setCountdownTimer();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      $('.timer-bar .timer').css('width', '100%');
      $('.timer-bar .timer').removeClass('yellow-timer red-timer').addClass('blue-timer');
    }
  }, {
    key: "updateTimer",
    value: function updateTimer(gainedSeconds) {
      // "gainedSeconds" parameter is only available when user catches "clock" item. So when it's available
      //update the timer bar;
      if (gainedSeconds) {
        // if adding number of seconds to current exceeds maximum seconds allowed per level
        _classPrivateFieldGet(this, _currentTimeInSeconds) + GAINED_SECONDS > _classPrivateFieldGet(this, _initialTimeInSeconds) ? // then make it maximum;
        _classPrivateFieldSet(this, _currentTimeInSeconds, _classPrivateFieldGet(this, _initialTimeInSeconds)) : // else add number of seconds to current time;
        _classPrivateFieldSet(this, _currentTimeInSeconds, _classPrivateFieldGet(this, _currentTimeInSeconds) + GAINED_SECONDS);

        _classPrivateFieldSet(this, _timeInSeconds, _classPrivateFieldGet(this, _currentTimeInSeconds)); // update countdown of timer bar;


        this.setCountdownTimer();
      }

      var width = _classPrivateFieldGet(this, _currentTimeInSeconds) / _classPrivateFieldGet(this, _initialTimeInSeconds) * 100;
      $('.timer-bar .timer').css('width', width + '%');

      if (width < RED_LIMIT) {
        $('.timer-bar .timer').removeClass('blue-timer yellow-timer').addClass('red-timer');
      } else if (width < YELLOW_LIMIT) {
        $('.timer-bar .timer').removeClass('blue-timer red-timer').addClass('yellow-timer');
      }
    }
  }, {
    key: "getCurrentSeconds",
    value: function getCurrentSeconds() {
      return _classPrivateFieldGet(this, _currentTimeInSeconds);
    }
  }, {
    key: "setCountdownTimer",
    value: function setCountdownTimer() {
      var _this3 = this;

      clearTimeout(_classPrivateFieldGet(this, _timeoutInstance));

      _classPrivateFieldSet(this, _timeoutInstance, setTimeout(function () {
        clearInterval(_classPrivateFieldGet(_this3, _intervalInstance));

        if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].currentScore > _game__WEBPACK_IMPORTED_MODULE_0__["default"].highScore) {
          _game__WEBPACK_IMPORTED_MODULE_0__["default"].showHighScoreScreen();
          window.localStorage.setItem('high_score', _game__WEBPACK_IMPORTED_MODULE_0__["default"].currentScore);
        } else {
          _game__WEBPACK_IMPORTED_MODULE_0__["default"].showBadLuckScreen();
        }
      }, _classPrivateFieldGet(this, _timeInSeconds) * 1000));
    }
  }]);

  return Timer;
}();



/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map