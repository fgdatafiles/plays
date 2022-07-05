(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "+m+m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Text = __webpack_require__("NfmA");

var _utils = __webpack_require__("hDA+");

var _AppConstants = __webpack_require__("zgbH");

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var WarningDisplay =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(WarningDisplay, _Phaser$Group);

  function WarningDisplay(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Group.call(this, game) || this;
    _this.game = game;
    _this.container = _this.game.make.group();
    _this.fixedToCamera = true;
    _this.background = new _BackgroundColourFill.default({
      game: _this.game,
      colour: '#000000',
      alpha: 0.7,
      blockInput: true
    });

    _this.add(_this.background);

    _this.panel = _this.game.make.image(0, 0, 'ui', 'panel_warning');

    _this.panel.scale.set(0.8); // play again button


    _this.btnPlay = new _ButtonSimple.default({
      game: _this.game,
      id: 'btn_play',
      skin: 'btn_play',
      defaultScale: 0.5
    });

    _this.btnPlay.scale.set(0.5);

    _this.btnPlay.position.set(_this.panel.width * 0.5, _this.panel.height * 0.5); // this.btnPlay.onInputDown.add(this.handlePlayGame, this);


    _this.titleCopy = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 84, _AppConstants.FONT_COLOUR_LEVEL_WIN, 0, 0, {
      align: 'center',
      stroke: _AppConstants.FONT_COLOUR_STROKE,
      strokeThickness: 6
    });
    _this.titleCopy.text = _this.game.copy.getCopy('warning');

    _this.titleCopy.anchor.set(0.5);

    _this.titleCopy.position.set(_this.panel.width * 0.5, _this.panel.y);

    _this.titleCopy.setShadow(3, 3, 'rgba(0,0,0,0.5)', 0);

    _this.bodyCopy = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 32, _AppConstants.FONT_COLOUR_PAUSED, 0, 0, {
      align: 'center',
      stroke: _AppConstants.FONT_COLOUR_STROKE,
      strokeThickness: 6,
      wordWrap: true,
      wordWrapWidth: _this.panel.width * 0.9
    });
    _this.bodyCopy.text = _this.game.copy.getCopy('warning_body');

    _this.bodyCopy.anchor.set(0.5);

    _this.bodyCopy.position.set(_this.panel.width * 0.5, _this.panel.y + _this.panel.height * 0.2);

    _this.bodyCopy.setShadow(3, 3, 'rgba(0,0,0,0.5)', 0);

    _this.container.add(_this.panel);

    _this.container.add(_this.btnPlay);

    _this.container.add(_this.titleCopy);

    _this.container.add(_this.bodyCopy);

    _this.add(_this.container); // positioning


    _this.game.scale.onSizeChange.add(_this.handleScreenResize, (0, _assertThisInitialized2.default)(_this));

    _this.handleScreenResize();

    return _this;
  }

  var _proto = WarningDisplay.prototype;

  _proto.handleScreenResize = function handleScreenResize() {
    this.container.x = this.game.width * 0.5 - this.width * 0.5;
    this.container.y = this.game.height * 0.5 - this.height * 0.5;
    this.background.width = this.game.width;
    this.background.height = this.game.height;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    this.btnPlay.onInputDown.removeAll();
    this.game.scale.onSizeChange.remove(this.handleScreenResize, this);

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(WarningDisplay, [{
    key: "height",
    get: function get() {
      return this.panel.height + this.panel.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.panel.width;
    }
  }]);
  return WarningDisplay;
}(Phaser.Group);

exports.default = WarningDisplay;

/***/ }),

/***/ "//WO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _TimeDisplay = _interopRequireDefault(__webpack_require__("C5Gj"));

var _ScoreDisplay = _interopRequireDefault(__webpack_require__("OiSF"));

var HudGamePlay =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudGamePlay, _Phaser$Group);

  function HudGamePlay(_ref) {
    var _this;

    var game = _ref.game,
        levelData = _ref.levelData;
    _this = _Phaser$Group.call(this, game) || this;
    _this.fixedToCamera = true;
    _this.backing = _this.game.make.graphics();

    _this.backing.beginFill(0x000000, 1);

    _this.backing.drawRect(0, 0, _this.game.defaultWidth, 85);

    _this.add(_this.backing);

    _this.timeDisplay = new _TimeDisplay.default({
      game: game
    });

    _this.timeDisplay.scale.set(50 / _this.timeDisplay.height);

    _this.timeDisplay.x = _this.game.width * 0.5 - _this.timeDisplay.width * _this.timeDisplay.scale.x - 25;
    _this.timeDisplay.y = 20;

    _this.add(_this.timeDisplay);

    _this.scoreDisplay = new _ScoreDisplay.default({
      game: game,
      target: levelData.collectTarget
    });
    _this.scoreDisplay.x = _this.game.width * 0.5 + 25;
    _this.scoreDisplay.y = 20;

    _this.scoreDisplay.scale.set(60 / _this.scoreDisplay.height);

    _this.add(_this.scoreDisplay);

    return _this;
  }

  var _proto = HudGamePlay.prototype;

  _proto.updateStats = function updateStats(time, score) {
    this.timeDisplay.setTime(time);
    this.scoreDisplay.setScore(score);
  };

  return HudGamePlay;
}(Phaser.Group);

exports.default = HudGamePlay;

/***/ }),

/***/ "/46n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("GFHg");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var LoadBar =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(LoadBar, _Phaser$Group);

  function LoadBar(game) {
    var _this;

    _this = _Phaser$Group.call(this, game) || this; // create load bar

    _this.track = _this.game.make.image();

    _this.track.loadTexture('loader', 'cn_preloader_bar.png');

    _this.track.x = -(_this.track.width * 0.5); // this.track.anchor.set(0.5);

    _this.fill = _this.game.make.image(0, 10);

    _this.fill.loadTexture('loader', 'cn_preloader_pattern.jpg');

    _this.track.addChild(_this.fill);

    _this.masker = _this.game.make.graphics();

    _this.masker.beginFill(0x000000);

    _this.masker.drawRect(0, 0, _this.fill.width, _this.fill.height);

    _this.masker.x = _this.fill.x - _this.fill.width * 0.5;
    _this.masker.y = _this.fill.y;

    _this.add(_this.fill);

    _this.add(_this.masker);

    _this.add(_this.track);

    _this.loadPosition = -128;
    _this.loadOffset = 0; // this.temp = 50 / 100;

    return _this;
  }

  var _proto = LoadBar.prototype;

  _proto.update = function update() {
    // this.temp += 0.0001;
    this.loadOffset += 5; // this.setProgress(this.temp);

    this.fill.x = this.loadOffset % 128 + this.loadPosition - this.fill.width * 0.4;
  };

  _proto.setProgress = function setProgress(value) {
    this.masker.x = this.fill.width * value - this.fill.width * 0.5; // value = value === 0 ? 0.001 : value;
    //this.masker.scale.x = value;
  };

  return LoadBar;
}(Phaser.Group);

var _default = LoadBar;
exports.default = _default;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vGYV");


/***/ }),

/***/ "07gj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _AppConstants = __webpack_require__("zgbH");

var _Text = __webpack_require__("NfmA");

var Utils = _interopRequireWildcard(__webpack_require__("hDA+"));

var HighScoreDisplay =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HighScoreDisplay, _Phaser$Group);

  function HighScoreDisplay(_ref) {
    var _this;

    var game = _ref.game,
        _ref$score = _ref.score,
        score = _ref$score === void 0 ? 0 : _ref$score;
    _this = _Phaser$Group.call(this, game) || this;
    _this.frame = _this.game.make.sprite(0, 0, 'ui', 'frame_highscore');

    _this.add(_this.frame);

    _this.frameCenterY = _this.frame.height * 0.5;
    _this.starIcon = _this.game.make.sprite(0, 0, 'ui', 'icon_highscore');

    _this.starIcon.scale.set(30 / _this.starIcon.height);

    _this.starIcon.x = 40;
    _this.starIcon.y = _this.frame.height * 0.5 - _this.starIcon.height * 0.5;

    _this.add(_this.starIcon); //  add copy


    _this.copyDisplay = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 38, _AppConstants.FONT_COLOUR_SCORE_HIGH);
    _this.copyDisplay.text = _this.game.copy.getCopy('best').toUpperCase();
    _this.copyDisplay.x = _this.starIcon.x + _this.starIcon.width + 20;
    _this.copyDisplay.y = _this.frameCenterY - _this.copyDisplay.height * 0.5;

    _this.add(_this.copyDisplay);

    _this.paperIcon = _this.game.make.image(0, 0, 'ui', 'icon_paper');

    _this.paperIcon.anchor.set(0, 0.5);

    _this.paperIcon.x = _this.frame.width * 0.5;
    _this.paperIcon.y = _this.frame.height * 0.5;

    _this.paperIcon.scale.set(45 / _this.paperIcon.height);

    _this.add(_this.paperIcon); // // add main score


    _this.scoreDisplay = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 54, _AppConstants.FONT_COLOUR_SCORE_HIGH);
    _this.scoreDisplay.x = _this.paperIcon.x + _this.paperIcon.width + 20;
    _this.scoreDisplay.y = _this.frame.height * 0.15;
    _this.scoreDisplay.text = Utils.commaNumber(score);

    _this.add(_this.scoreDisplay);

    return _this;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */


  var _proto = HighScoreDisplay.prototype;

  /*
  ============================================================================================
    SETTER
  ============================================================================================
  */
  _proto.setScore = function setScore(value) {
    this.scoreDisplay.text = value;
    this.scoreTargetDisplay.x = this.scoreDisplay.x + this.scoreDisplay.width + 10;
  }
  /*
  ============================================================================================
    DESTROY
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    // destroy stuff - it's therapudic
    this.frame.destroy(true);
    this.starIcon.destroy(true);
    this.paperIcon.destroy(true);
    this.copyDisplay.destroy(true);
    this.scoreDisplay.destroy(true); // nullify it - GC flag :)

    this.frame = null;
    this.starIcon = null;
    this.paperIcon = null;
    this.copyDisplay = null;
    this.scoreDisplay = null; // super!!!!!

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(HighScoreDisplay, [{
    key: "width",
    get: function get() {
      return this.frame.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.frame.height;
    }
  }]);
  return HighScoreDisplay;
}(Phaser.Group);

exports.default = HighScoreDisplay;

/***/ }),

/***/ "0kin":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var Title =
/*#__PURE__*/
function (_Phaser$Image) {
  (0, _inheritsLoose2.default)(Title, _Phaser$Image);

  function Title(_ref) {
    var _this;

    var game = _ref.game,
        title = _ref.title;
    _this = _Phaser$Image.call(this, game) || this;

    _this.loadTexture(Title.SPRITESHEET, title);

    return _this;
  }

  return Title;
}(Phaser.Image);

exports.default = Title;
Title.SPRITESHEET = 'titles';
Title.HELLO = 'title_hello';
Title.HOWTOPLAY = 'title_howtoplay';
Title.JOINED_GNASHER = 'title_joined_gnasher';
Title.JOINED_GNIPPER = 'title_joined_gnipper';
Title.JOINED_ROBOTODOG = 'title_joined_robotdog';
Title.JOINED_RUBI = 'title_joined_rubi';
Title.OHNO = 'title_ohno';
Title.WELLDONE = 'title_welldone';
Title.YOUDIDIT = 'title_youdidit';

/***/ }),

/***/ "1ene":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getiPhoneModel = exports.getIsOldiPhone = void 0;

var getIsOldiPhone = function getIsOldiPhone() {
  var model = getiPhoneModel();
  return model === iPHONE1_3 || model === iPHONE4_4S || model === iPHONE5_5C_5S;
}; // iPhone model checks.
// https://51degrees.com/blog/device-detection-for-apple-iphone-and-ipad
// https://analytical42.com/2017/detect-and-track-iphone-models-in-google-analytics/


exports.getIsOldiPhone = getIsOldiPhone;

var getiPhoneModel = function getiPhoneModel() {
  if (/iPhone/.test(navigator.userAgent) && !window.MSStream) {
    var width = window.screen.width > window.screen.height ? window.screen.height : window.screen.width;
    var height = window.screen.width > window.screen.height ? window.screen.width : window.screen.height;
    var wh = width / height;
    var ratio = window.devicePixelRatio;

    if (wh == 320 / 480 && ratio == 1) {
      return iPHONE1_3;
    }

    if (wh == 640 / 960 && ratio == 2) {
      return iPHONE4_4S;
    }

    if (wh == 640 / 1136 && ratio == 2) {
      return iPHONE5_5C_5S;
    }

    if (wh == 750 / 1334 && ratio == 2) {
      return iPHONE6_6S_7_8;
    }

    if (wh == 640 / 1136 && ratio == 2) {
      return iPHONE6_6S_7_8_DZ;
    }

    if (wh == 1242 / 2208 && ratio == 3) {
      return iPHONE6_6S_7P_8P;
    }

    if (wh == 1125 / 2001 && ratio == 3) {
      return iPHONE6_6S_7P_8P_DZ;
    }

    if (wh == 375 / 812 && ratio == 3) {
      return iPHONEX;
    }

    return '';
  } else {
    return '';
  }
};

exports.getiPhoneModel = getiPhoneModel;
var iPHONE1_3 = 'iPhone 1/3g/3gs';
var iPHONE4_4S = 'iPhone 4/4s';
var iPHONE5_5C_5S = 'iPhone 5/5c/5s';
var iPHONE6_6S_7_8 = 'iPhone 6/6s/7/8';
var iPHONE6_6S_7_8_DZ = 'iPhone 6/6s/7/8 (Display Zoom)';
var iPHONE6_6S_7P_8P = 'iPhone 6/6s/7 Plus/8 Plus';
var iPHONE6_6S_7P_8P_DZ = 'iPhone 6/6s/7 Plus/8 Plus (Display Zoom)';
var iPHONEX = 'iPhone X';

/***/ }),

/***/ "5awZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("I/QC");

__webpack_require__("q4B+");

__webpack_require__("LBAN");

__webpack_require__("ocEJ");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppConstants = __webpack_require__("zgbH");

var _AppleDeviceDetection = __webpack_require__("1ene");

var DeviceController =
/*#__PURE__*/
function () {
  /**
   * Paul - Ive added iphone device type detection. My thinking was the small screen check is a
   * bit unfair for iphone 7 + users who have the RAM and power necessary to play the whole game.
   */
  function DeviceController() {
    var w = screen.width;
    var h = screen.height;
    this.isOldIpad = window.devicePixelRatio == 1 && (w == 1024 && h == 768 || w == 768 && h == 1024) && typeof window.androidBridge === 'undefined';
    this.isOldIphone = (0, _AppleDeviceDetection.getIsOldiPhone)();
    this.isKindle = this.isKindle();
    this.isNexus7 = navigator.userAgent.indexOf('Nexus 7') > -1;
    this.isGalaxyTab4 = navigator.userAgent.indexOf('SM-T530') > -1 || navigator.userAgent.indexOf('SM-T330') > -1 || navigator.userAgent.indexOf('GT-N8010') > -1;
    this.isSmallScreen = w <= 768 || h <= 768;
    this.requiresLightVersion = Phaser.Device.desktop ? false : this.doesRequireLightVersion();

    if (Phaser.Device.desktop === true) {
      this.gameLoadType = _AppConstants.GAME_LOAD_LAZY;
    } else {
      this.gameLoadType = this.requiresLightVersion ? _AppConstants.GAME_LOAD_BATCH : _AppConstants.GAME_LOAD_LAZY;
    } // seperated these out so we can experiment easier with simple toggles


    this.allowTransitionTweens = this.requiresLightVersion == false; // check for query string overrides

    var loadTypeQuery = this.getParameterByName('loadtype');

    switch (loadTypeQuery) {
      case _AppConstants.GAME_LOAD_BATCH:
        this.gameLoadType = _AppConstants.GAME_LOAD_BATCH;
        break;

      case _AppConstants.GAME_LOAD_LAZY:
        this.gameLoadType = _AppConstants.GAME_LOAD_LAZY;
        break;

      case _AppConstants.GAME_LOAD_FULL:
        this.gameLoadType = _AppConstants.GAME_LOAD_FULL;
        break;
    }
  }

  var _proto = DeviceController.prototype;

  _proto.getAppRenderTpye = function getAppRenderTpye() {
    /*
     *  NOTE : Determine Render type based off of info in this class
     */
    var type = Phaser.AUTO;

    if (this.isOldAppleDevice() || this.isIE()) {
      type = Phaser.CANVAS;
    }

    return type;
  };

  _proto.getAppTransitionType = function getAppTransitionType() {
    //REMOVE THIS TO GET TRANSITIONS BACK
    var type = DeviceController.TRANSITIONS_NONE;
    return type; // let type = DeviceController.TRANSITIONS_FULL;
    // if (this.isOldAppleDevice()) {
    //   type = DeviceController.TRANSITIONS_LOWFI;
    // }
    // // type = DeviceController.TRANSITIONS_LOWFI;
    // return type;
  };

  _proto.getParameterByName = function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  _proto.doesRequireLightVersion = function doesRequireLightVersion() {
    // light version for some devices detection
    if (this.isOldIpad || this.isOldIphone || this.isKindle || this.isGalaxyTab4 || this.isNexus7) {
      return true;
    }

    return false;
  };

  _proto.isOldAppleDevice = function isOldAppleDevice() {
    return false; //this.isOldIpad || this.isOldIphone;
  };

  _proto.isIE = function isIE() {
    return navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/));
  };

  _proto.isKindle = function isKindle() {
    var devices = ['KFSUWI', 'KFAUWI', 'KFDOWI', 'KFGIWI', 'KFFOWI', 'KFMEWI', 'KFTBWI', 'KFARWI', 'KFASWI', 'KFSAWA', 'KFSAWI', 'KFAPWA', 'KFAPWI', 'KFAPWA', 'KFAPWI', 'KFSOWI', 'KFJWA', 'KFJWI', 'KFTT', 'KFOT', 'Kindle Fire'];

    for (var i = 0; i < devices.length; i++) {
      if (navigator.userAgent.indexOf(devices[i]) > -1) {
        return true;
      }
    }

    return false;
  };

  _proto.applyLightSettings = function applyLightSettings(value) {
    this.requiresLightVersion = value;
  };

  return DeviceController;
}();

DeviceController.TRANSITIONS_FULL = 'TRANSITIONS_FULL';
DeviceController.TRANSITIONS_LOWFI = 'TRANSITIONS_LOWFI';
DeviceController.TRANSITIONS_NONE = 'TRANSITIONS_NONE';
var _default = DeviceController;
exports.default = _default;

/***/ }),

/***/ "5jEF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("AaIv");

__webpack_require__("j3Ef");

__webpack_require__("mizm");

__webpack_require__("pkSX");

__webpack_require__("3Ipg");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("fKPv"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LevelDataController = function LevelDataController(game, levelData) {
  this.game = game;
  this.levelData = _objectSpread({}, levelData);
};

exports.default = LevelDataController;

/***/ }),

/***/ "6R9f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("wiMi");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Transitions = _interopRequireDefault(__webpack_require__("nTxy"));

var _DeviceController = _interopRequireDefault(__webpack_require__("5awZ"));

var StateController =
/*#__PURE__*/
function () {
  function StateController(_ref) {
    var game = _ref.game,
        _ref$transitionType = _ref.transitionType,
        transitionType = _ref$transitionType === void 0 ? _DeviceController.default.TRANSITIONS_FULL : _ref$transitionType;
    this.game = game;
    this.transitionType = transitionType;
    this.transitionToState = false;
    this.transitionToParams = false;
    this.onTransitionComplete = new Phaser.Signal();
    this.isStateTransition = false;
  }

  var _proto = StateController.prototype;

  _proto.clearCurrentState = function clearCurrentState() {
    this.game.state.clearCurrentState();
  };

  _proto.switchStates = function switchStates() {
    var _this$game$state;

    (_this$game$state = this.game.state).start.apply(_this$game$state, [this.transitionToState].concat(this.transitionToParams));

    this.game.state.onStateChange.addOnce(this.handleStateChanged, this);
  };

  _proto.handleStateChanged = function handleStateChanged() {
    this.game.camera.x = 0;
    this.game.camera.y = 0; // this.game.time.events.add(300, this.transitionOut, this).autoDestroy = true;

    this.game.hud.show(); // show hud when covered with transition
  };

  _proto.transitionOut = function transitionOut() {
    this.transitions.transitionEnd();
  };

  _proto.onTransitionInComplete = function onTransitionInComplete() {
    this.switchStates();
  };

  _proto.onTransitionOutComplete = function onTransitionOutComplete() {
    this.onTransitionComplete.dispatch();
    this.transitions.destroy();
    this.transitions = null;
    this.isStateTransition = false;
  };

  _proto.startState = function startState(_ref2) {
    var nextState = _ref2.nextState,
        nextStateParams = _ref2.nextStateParams;
    // if (this.isStateTransition) {
    //   console.log('stuck in transition');
    //   return;
    //
    this.transitionToState = nextState;
    this.transitionToParams = nextStateParams;
    this.isStateTransition = true;
    this.switchStates(); // let type = Transitions.POLY_MASK;
    // let enabled = true;
    // switch (this.transitionType) {
    //   case DeviceController.TRANSITIONS_FULL:
    //     type = Transitions.POLY_MASK;
    //     break;
    //   case DeviceController.TRANSITIONS_LOWFI:
    //     type = Transitions.LOW_FI;
    //     break;
    //   case DeviceController.TRANSITIONS_NONE:
    //     type = '';
    //     enabled = false;
    //     break;
    // }
    // this.transitions = new Transitions({ game: this.game, type, enabled });
    // this.transitions.onTransitionInComplete.add(this.onTransitionInComplete, this);
    // this.transitions.onTransitionOutComplete.add(this.onTransitionOutComplete, this);
    // this.transitions.startTransition({ type });
  };

  return StateController;
}();

var _default = StateController;
exports.default = _default;

/***/ }),

/***/ "6ehC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Title = _interopRequireDefault(__webpack_require__("0kin"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var HudLevelWin =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudLevelWin, _Phaser$Group);

  function HudLevelWin(_ref) {
    var _this;

    var game = _ref.game,
        isLastLevel = _ref.isLastLevel;
    _this = _Phaser$Group.call(this, game) || this;
    _this.isLastLevel = isLastLevel;
    _this.background = new _BackgroundColourFill.default({
      game: game,
      colour: '#000000',
      alpha: 0.5
    });

    _this.add(_this.background); // container to house and position contents


    _this.container = _this.game.make.group();

    _this.add(_this.container); // baking panel


    _this.panel = _this.game.make.image(0, 0, 'ui', 'panel_generic');

    _this.container.add(_this.panel); // display Gnasher if player completed the level, display dennis if player did not
    // this.character = this.game.make.image(0, 0, 'modal_characters', 'modal_char_levelwin');
    // this.character.y = 0;
    // this.character.anchor.set(0.5, 0);
    // this.character.x = this.panel.width * 0.6;
    // this.container.addAt(this.character, 0);
    // add title, positiing would depend on what character is being displayed


    _this.title = new _Title.default({
      game: game,
      title: _Title.default.WELLDONE
    });
    _this.title.x = _this.panel.width * 0.5 - _this.title.width * 0.5;

    _this.container.add(_this.title); // adjust panel positon based on title position


    _this.panel.y = _this.title.y + _this.title.height * 0.3;

    if (isLastLevel) {
      // next level button
      _this.btnContinue = new _ButtonSimple.default({
        game: _this.game,
        id: 'btn_continue',
        skin: 'btn_continue'
      });
      _this.btnContinue.x = _this.panel.width * 0.5;
      _this.btnContinue.y = _this.btnReplay.y - _this.btnReplay.height - _this.btnContinue.height * 0.25;

      _this.btnContinue.onInputDown.add(_this.handleNextLevel, (0, _assertThisInitialized2.default)(_this));
    } else {
      // next level button
      _this.btnContinue = new _ButtonSimple.default({
        game: _this.game,
        id: 'btn_nextlevel',
        skin: 'btn_nextlevel'
      });
      _this.btnContinue.x = _this.panel.width * 0.5;
      _this.btnContinue.y = _this.btnReplay.y - _this.btnReplay.height - _this.btnContinue.height * 0.25;

      _this.btnContinue.onInputDown.add(_this.handleNextLevel, (0, _assertThisInitialized2.default)(_this));
    } // positioning


    _this.game.scale.onSizeChange.add(_this.handleScreenResize, (0, _assertThisInitialized2.default)(_this));

    _this.fixedToCamera = true;

    _this.handleScreenResize();

    return _this;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */


  var _proto = HudLevelWin.prototype;

  /*
  ============================================================================================
    EVENT HANDLERS
  ============================================================================================
  */
  _proto.handleScreenResize = function handleScreenResize() {
    this.container.x = this.game.width * 0.5 - this.width * 0.5;
    this.container.y = this.game.height * 0.5 - this.height * 0.5;
  };

  _proto.handleReplay = function handleReplay() {
    this.game.controller.replayLevel();
    this.destroy();
  };

  _proto.handleNextLevel = function handleNextLevel() {
    this.game.controller.nextLevel();
    this.destroy();
  };

  _proto.handleTryAgain = function handleTryAgain() {
    this.game.controller.replayLevel();
    this.destroy();
  }
  /*
  ============================================================================================
    TOODLES!
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    this.game.scale.onSizeChange.remove(this.handleScreenResize, this);

    if (this.btnTryAgain) {
      this.btnTryAgain.onInputDown.remove(this.handleTryAgain, this);
      this.btnTryAgain.destroy(true);
    }

    if (this.btnContinue) {
      this.btnContinue.onInputDown.remove(this.handleNextLevel, this);
      this.btnContinue.destroy(true);
    }

    if (this.btnReplay) {
      this.btnReplay.onInputDown.remove(this.handleReplay, this);
      this.btnReplay.destroy(true);
    }

    this.title.destroy(true);
    this.panel.destroy(true);
    this.container.destroy(true); // nullify

    this.btnTryAgain = null;
    this.btnContinue = null;
    this.btnReplay = null;
    this.highScoreDisplay = null;
    this.scoreDisplay = null;
    this.title = null;
    this.character = null;
    this.panel = null;
    this.container = null; // super dupa

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(HudLevelWin, [{
    key: "height",
    get: function get() {
      return this.panel.height + this.panel.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.panel.width;
    }
  }]);
  return HudLevelWin;
}(Phaser.Group);

exports.default = HudLevelWin;

/***/ }),

/***/ "7NoF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _AppConstants = __webpack_require__("zgbH");

var _Text = __webpack_require__("NfmA");

var Utils = _interopRequireWildcard(__webpack_require__("hDA+"));

var LevelScoreDisplay =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(LevelScoreDisplay, _Phaser$Group);

  function LevelScoreDisplay(_ref) {
    var _this;

    var game = _ref.game,
        _ref$score = _ref.score,
        score = _ref$score === void 0 ? 0 : _ref$score,
        labelCopy = _ref.labelCopy,
        _ref$scoreColour = _ref.scoreColour,
        scoreColour = _ref$scoreColour === void 0 ? _AppConstants.FONT_COLOUR_SCORE : _ref$scoreColour,
        _ref$scoreFontSize = _ref.scoreFontSize,
        scoreFontSize = _ref$scoreFontSize === void 0 ? 75 : _ref$scoreFontSize;
    _this = _Phaser$Group.call(this, game) || this;
    _this.score = score; // // add main score

    _this.label = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 50, _AppConstants.COPY_WHITE);
    _this.label.text = labelCopy || '';

    _this.add(_this.label); // // add main score


    _this.scoreDisplay = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, scoreFontSize, scoreColour);
    _this.scoreDisplay.text = Utils.commaNumber(score);
    _this.scoreDisplay.x = _this.label.width + 20;

    _this.add(_this.scoreDisplay);

    _this.label.y = _this.scoreDisplay.height * 0.5 - _this.label.height * 0.5;
    _this.onUpdate = new Phaser.Signal();
    _this.onAnimatedScoreComplete = new Phaser.Signal();
    _this.onAnimatedScoreUpdated = new Phaser.Signal();
    return _this;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */


  var _proto = LevelScoreDisplay.prototype;

  /*
  ============================================================================================
    SETTER
  ============================================================================================
  */
  _proto.setScore = function setScore(value) {
    this.score = value;
    this.setScoreDisplayText(this.score);
  };

  _proto.animateScore = function animateScore(from, targetScore, duration) {
    if (this.animatedTween) {
      this.animatedTween.stop();
    }

    this.animatedScoreTarget = from;
    this.animatedTween = this.game.add.tween(this).to({
      animatedScoreTarget: targetScore
    }, duration || 1000, Phaser.Easing.Exponential.Out, true);
    this.animatedTween.onUpdateCallback(this.handleAnimatedScoreUpdate, this);
    this.animatedTween.onComplete.addOnce(this.handleAnimatedScoreComplete, this);
  };

  _proto.handleAnimatedScoreUpdate = function handleAnimatedScoreUpdate() {
    this.setScoreDisplayText(Math.ceil(this.animatedScoreTarget));
    this.onAnimatedScoreUpdated.dispatch();
  };

  _proto.handleAnimatedScoreComplete = function handleAnimatedScoreComplete() {
    this.setScoreDisplayText(Math.ceil(this.animatedScoreTarget));
    this.onAnimatedScoreComplete.dispatch();
  };

  _proto.setScoreDisplayText = function setScoreDisplayText(value) {
    this.scoreDisplay.text = Utils.commaNumber(value); // this.scoreTargetDisplay.x = this.scoreDisplay.x + this.scoreDisplay.width + 10;
  }
  /*
  ============================================================================================
    TOODLES
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    // destroy stuff - it's therapudic
    this.scoreDisplay.destroy(true); // nullify it - GC flag :)

    this.scoreDisplay = null; // super!!!!!

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(LevelScoreDisplay, [{
    key: "width",
    get: function get() {
      return this.scoreDisplay.x + this.scoreDisplay.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.scoreDisplay.height;
    }
  }]);
  return LevelScoreDisplay;
}(Phaser.Group);

exports.default = LevelScoreDisplay;

/***/ }),

/***/ "BHXi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("AaIv");

__webpack_require__("j3Ef");

__webpack_require__("3Ss1");

__webpack_require__("mizm");

__webpack_require__("pkSX");

__webpack_require__("3Ipg");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("fKPv"));

var _AppConstants = __webpack_require__("zgbH");

var _utils = __webpack_require__("hDA+");

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var _CharacterIntro = _interopRequireDefault(__webpack_require__("ELGz"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 */
var GameModel =
/*#__PURE__*/
function () {
  function GameModel(_ref) {
    var settings = _ref.settings,
        data = _ref.gameData;
    this.settings = settings;
    this.data = _objectSpread({}, data);
    /**
     * parse data
     */

    this.id = _AppConstants.DEFAULT_PLAYER_ID;
    this.forceInstructions = true;
    this.tutorialComplete = false;
    this.warningComplete = false;
    this.selectedCharacter = '';
    this.isCharacterAvailable = true;
    this.level = 1;
    this.reset();
    this.init();
  }

  var _proto = GameModel.prototype;

  _proto.init = function init() {
    this.saveSlots = this.loadSlotsData();

    if (!this.saveSlots) {
      this.initSaveSlots();
    }

    var savedData = this.loadSimpleSave(this.id);

    if (!savedData) {
      this.createNewSaveSlot(this.id);
      this.savePlayerData(this.id, this.serialize());
    } else {
      this.deserialize(savedData);
    }
  };

  _proto.reset = function reset() {
    this.level = 1;
    this.currentLevelScores = [];
  }
  /**
   * Used to toggle first play forced Instructions
   */
  ;

  _proto.setInstructionsViewed = function setInstructionsViewed() {
    this.forceInstructions = false;
    this.savePlayerData(this.id, this.serialize());
  }
  /**
   * Used to toggle help off after first play
   */
  ;

  _proto.setTutorialIsComplete = function setTutorialIsComplete() {
    this.tutorialComplete = true;
    this.savePlayerData(this.id, this.serialize());
  };

  _proto.setChosenCharacter = function setChosenCharacter(selectedCharacter) {
    switch (selectedCharacter) {
      case _CharacterIntro.default.SELECTED_APPLE:
        this.selectedCharacter = 'apple';
        break;

      case _CharacterIntro.default.SELECTED_ONION:
        this.selectedCharacter = 'onion';
        break;

      default:
        console.log('CHARACTER SELECTED IS INVALID');
    }
  };

  _proto.getChosenCharacter = function getChosenCharacter() {
    return this.selectedCharacter;
  };

  _proto.getCurrentLevelTimeResults = function getCurrentLevelTimeResults() {
    return {
      current: this.levelTimes[this.level - 1],
      best: this.bestLevelTimes[this.level - 1]
    };
  };

  _proto.getCurrentLevel = function getCurrentLevel() {
    return this.level;
  };

  _proto.getCurrentLevelID = function getCurrentLevelID() {
    return _AppConstants.GAME_LEVEL_IDS[this.level - 1];
  };

  _proto.getGameIsComplete = function getGameIsComplete() {
    return this.level === _AppConstants.GAME_LEVEL_IDS.length;
  };

  _proto.getIsTutorialMode = function getIsTutorialMode() {
    return !this.tutorialComplete;
  };

  _proto.getGameScore = function getGameScore() {
    return this.currentLevelScores.reduce(function (i, score) {
      return i + score;
    }, 0);
  };

  _proto.getBestScore = function getBestScore() {
    return this.bestGameScore;
  };

  _proto.levelUp = function levelUp() {
    this.level++;
    return this.level;
  };

  _proto.saveLevelScore = function saveLevelScore(level, score) {
    this.currentLevelScores[level - 1] = score;
    this.bestLevelScores[level - 1] = Math.max(this.bestLevelScores[level - 1], score);
    this.savePlayerData(this.id, this.serialize());
  };

  _proto.saveGameScore = function saveGameScore(score) {
    this.bestGameScore = Math.max(this.bestGameScore, score);
    this.savePlayerData(this.id, this.serialize());
  };

  _proto.saveLevelTime = function saveLevelTime(time) {
    var currentBest = this.bestLevelTimes[this.level - 1] || time;
    var isBest = time < currentBest;
    var bestLevelTime = Math.min(time, currentBest);
    this.bestLevelTimes[this.level - 1] = bestLevelTime;
    this.levelTimes[this.level - 1] = time;
    this.savePlayerData(this.id, this.serialize());
    return isBest;
  }
  /*
  ====================================================================================================
    DATA SERIALIZATION
  ====================================================================================================
  */
  ;

  _proto.deserialize = function deserialize(data) {
    var json = JSON.parse(data);

    for (var i in json) {
      if (this[i] != null || this[i] != undefined) {
        this[i] = json[i];
      }
    }
  };

  _proto.serialize = function serialize() {
    var data = {
      id: this.id,
      forceInstructions: this.forceInstructions,
      bestLevelTimes: this.bestLevelTimes,
      tutorialComplete: this.tutorialComplete
    };
    return JSON.stringify(data);
  }
  /*
  ====================================================================================================
    S A V E S
  ====================================================================================================
  */
  ;

  _proto.initSaveSlots = function initSaveSlots() {
    // create save slots if it doesn't exist
    var dataSlots = this.loadSlotsData();

    if (!dataSlots) {
      var data = {
        slots: []
      };
      var dataString = JSON.stringify(data);
      this.settings.setGameData(_AppConstants.SAVED_PLAYER_DATA_ID, dataString);
    }
  };

  _proto.loadSlotsData = function loadSlotsData() {
    /*jshint sub:true*/
    var dataString = this.settings.getAllSettings().gameData[_AppConstants.SAVED_PLAYER_DATA_ID];

    if (dataString) {
      return JSON.parse(dataString);
    }

    return false;
  };

  _proto.createNewSaveSlot = function createNewSaveSlot(saveId) {
    //read slots data
    var dataSlots = this.loadSlotsData(); //add to existing slots

    dataSlots.slots.push(saveId); //save updated data

    var dataString = JSON.stringify(dataSlots);
    this.settings.setGameData(_AppConstants.SAVED_PLAYER_DATA_ID, dataString);
  };

  _proto.deleteSaveSlot = function deleteSaveSlot(saveId) {
    //read slots data
    var dataSlots = this.loadSlotsData(); //remove slot

    var ind = dataSlots.slots.indexOf(saveId);
    dataSlots.slots.splice(ind, 1); //save updated data

    var dataString = JSON.stringify(dataSlots);
    this.settings.setGameData(_AppConstants.SAVED_PLAYER_DATA_ID, dataString); //remove game save

    this.settings.setGameData(_AppConstants.SAVED_PLAYER_DATA_PREFIX + saveId, null);
  };

  _proto.savePlayerData = function savePlayerData(saveId, data) {
    this.settings.setGameData(_AppConstants.SAVED_PLAYER_DATA_PREFIX + saveId, data);
  };

  _proto.loadSimpleSave = function loadSimpleSave(saveId) {
    var dataString = this.settings.getAllSettings().gameData[_AppConstants.SAVED_PLAYER_DATA_PREFIX + saveId];
    return dataString;
  };

  return GameModel;
}();

exports.default = GameModel;

/***/ }),

/***/ "BKU+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _GameSFX = __webpack_require__("QklZ");

var ButtonFixedPosition =
/*#__PURE__*/
function (_Phaser$Button) {
  (0, _inheritsLoose2.default)(ButtonFixedPosition, _Phaser$Button);

  function ButtonFixedPosition(_ref) {
    var _this;

    var game = _ref.game,
        id = _ref.id,
        x = _ref.x,
        y = _ref.y,
        sfxID = _ref.sfxID,
        skin = _ref.skin,
        ariaLabelID = _ref.ariaLabelID;
    _this = _Phaser$Button.call(this, game, x, y, 'buttons') || this;

    _this.setFrames(skin, skin, skin, skin);

    _this.id = id;
    _this.input.useHandCursor = true;

    _this.game.time.events.add(1, _this.init, (0, _assertThisInitialized2.default)(_this));

    _this.anchor.set(0.5);

    _this.enable();

    return _this;
  }

  var _proto = ButtonFixedPosition.prototype;

  _proto.init = function init() {
    this.enable();
  };

  _proto.enable = function enable() {
    this.onInputDown.add(this.onDown, this);
  };

  _proto.disable = function disable() {
    this.onInputDown.forget();
    this.onInputDown.dispose();
    this.onInputDown.removeAll();
  };

  _proto.onDown = function onDown() {
    this.game.sounds.playSFX(_GameSFX.GAME_SFX_CLICK_SELECT);
  };

  _proto.destroy = function destroy(destroyChildren) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    this.disable();

    _Phaser$Button.prototype.destroy.call(this, destroyChildren);
  };

  return ButtonFixedPosition;
}(Phaser.Button);

var _default = ButtonFixedPosition;
exports.default = _default;

/***/ }),

/***/ "C5Gj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("9P18");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _AppConstants = __webpack_require__("zgbH");

var _Text = __webpack_require__("NfmA");

var _utils = __webpack_require__("hDA+");

var TimeDisplay =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(TimeDisplay, _Phaser$Group);

  function TimeDisplay(_ref) {
    var _this;

    var game = _ref.game,
        _ref$score = _ref.score,
        score = _ref$score === void 0 ? 0 : _ref$score,
        _ref$target = _ref.target,
        target = _ref$target === void 0 ? 100 : _ref$target;
    _this = _Phaser$Group.call(this, game) || this; // add paper icon

    _this.icon = _this.game.make.sprite(0, 0, 'ui', 'icon_clock');
    _this.icon.x = 0;
    _this.icon.y = 0;

    _this.add(_this.icon); // // add main score


    _this.timeDisplay = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 150, _AppConstants.FONT_COLOUR_SCORE);
    _this.timeDisplay.y = _this.icon.height * 0.5 - 100;
    _this.timeDisplay.x = _this.icon.width + 20;
    _this.timeDisplay.text = score;

    _this.add(_this.timeDisplay);

    _this.setTime(0);

    return _this;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */


  var _proto = TimeDisplay.prototype;

  /*
  ============================================================================================
    SETTER
  ============================================================================================
  */
  _proto.setTime = function setTime(milliseconds) {
    var minutes = Math.floor(milliseconds / 60000);
    var seconds = (milliseconds % 60000 / 1000).toFixed(0);
    this.timeDisplay.text = (0, _utils.zeroPad)(minutes, 2) + ':' + (0, _utils.zeroPad)(seconds, 2);
  }
  /*
  ============================================================================================
    TOODLES
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    // destroy stuff - it's therapudic
    this.icon.destroy(true);
    this.timeDisplay.destroy(true); // nullify it - GC flag :)

    this.icon = null;
    this.timeDisplay = null; // super!!!!!

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(TimeDisplay, [{
    key: "width",
    get: function get() {
      return this.timeDisplay.x + this.timeDisplay.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.timeDisplay.height;
    }
  }]);
  return TimeDisplay;
}(Phaser.Group);

exports.default = TimeDisplay;

/***/ }),

/***/ "CDWU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("AaIv");

__webpack_require__("45zI");

__webpack_require__("hE1C");

__webpack_require__("a/rO");

__webpack_require__("vw/H");

__webpack_require__("GPcm");

__webpack_require__("3mz+");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameSFX = __webpack_require__("QklZ");

var _AppConstants = __webpack_require__("zgbH");

var SoundController =
/*#__PURE__*/
function () {
  function SoundController(_ref) {
    var game = _ref.game,
        _ref$isMuted = _ref.isMuted,
        isMuted = _ref$isMuted === void 0 ? false : _ref$isMuted;
    this.game = game;
    this.sounds = {};
    this.sprites = {};
    this._allowMusic = !isMuted;
    this._allowEffects = !isMuted;
    this.backgroundMusic = {
      id: _GameSFX.BACKGROUND_MUSIC,
      volume: SoundController.TITLEMUSIC_VOLUME
    };
    this.gameMusic = {
      id: _GameSFX.GAME_MUSIC,
      volume: SoundController.GAMEMUSIC_VOLUME
    };
    Object.defineProperty(this, 'allowMusic', {
      get: function get() {
        return this._allowMusic;
      },
      set: function set(value) {
        this._allowMusic = value;

        if (this._allowMusic) {
          if (this.game.state.current === _AppConstants.STATE_GAME || this.game.state.current === _AppConstants.STATE_LEVELLOSE || this.game.state.current === _AppConstants.STATE_LEVELEND) {
            this.playGameMusic();
          } else {
            this.playBackgroundMusic();
          }
        } else {
          this.pauseBackgroundMusic();
        }
      }
    });
    Object.defineProperty(this, 'allowEffects', {
      get: function get() {
        return this._allowEffects;
      },
      set: function set(value) {
        this._allowEffects = value;

        for (var i in this.sounds) {
          if (i != this.backgroundMusic.id) this.sounds[i].mute = this._allowEffects == false;
        }
      }
    });
  }
  /**
   * Touchlock and AudioContext handling
   */


  var _proto = SoundController.prototype;

  _proto.touchLock = function touchLock() {
    /**
     * Called from load state. Will handle touch locking here
     */
    if (this.game.sound.usingWebAudio && this.game.sound.context.state === 'suspended') {
      console.log('AudioContext is suspended');
      this.game.sound.setTouchLock(); // doesn't seem to do anything

      this.isTouchLocked = true;
    }
  };

  _proto.checkAudioContext = function checkAudioContext() {}
  /*
  if (this.isTouchLocked && this.game.sound.usingWebAudio) {
    console.log('AudioContext attempting resume');
    this.game.sound.context.resume().then(() => {
      console.log('AudioContext resumed successfully');
      this.isTouchLocked = this.game.sound.context.state === 'suspended';
    });
  }
  */

  /**
   * End Touchlock and AudioContext handling
   */
  ;

  _proto.addSounds = function addSounds(sounds) {
    for (var _iterator = sounds, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var sound = _ref2;
      this.addSound(sound, sound);
    }
  };

  _proto.addSound = function addSound(id, assetKey) {
    this.sounds[id] = this.game.add.audio(assetKey);
    this.sounds[id].allowMultiple = true;
  };

  _proto.addAudioSprites = function addAudioSprites(audioSprites) {
    for (var _iterator2 = audioSprites, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref3 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref3 = _i2.value;
      }

      var id = _ref3;
      this.addAudioSprite({
        id: id
      });
    }
  };

  _proto.addAudioSprite = function addAudioSprite(_ref4) {
    var id = _ref4.id;
    this.sprites[id] = this.game.add.audioSprite(id);
    this.sprites[id].allowMultiple = true;
  };

  _proto.audioSpritesAreDecoded = function audioSpritesAreDecoded() {
    for (var _iterator3 = this.sprites, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref5 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref5 = _i3.value;
      }

      var sprite = _ref5;

      for (var _iterator4 = sprite.sounds, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref6 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref6 = _i4.value;
        }

        var s = _ref6;

        if (!s.isDecoded) {
          return false;
        }
      }
    }

    return true;
  };

  _proto.sfxExists = function sfxExists(id, spriteID) {
    var exists = this.sprites[spriteID] && this.sprites[spriteID].sounds[id];

    if (!exists) {
      console.warn('Cant find ' + id + ' in audiosprite ' + spriteID + ', has it been added? (config.json and assetpack)');
    }

    return exists;
  };

  _proto.soundExists = function soundExists(id) {
    var exists = this.sounds[id];

    if (!exists) {
      console.warn('Cant find ' + id + ', has it been added? (config.json and assetpack)');
    }

    return exists;
  };

  _proto.playSFX = function playSFX(id, opts) {
    if (opts === void 0) {
      opts = {
        volume: 1,
        loop: false,
        delay: null,
        onComplete: null,
        onCompleteScope: null,
        spriteID: _GameSFX.GAME_SFX_BASE
      };
    }

    var _opts = opts,
        volume = _opts.volume,
        _opts$loop = _opts.loop,
        loop = _opts$loop === void 0 ? false : _opts$loop,
        _opts$ignoreIfPlaying = _opts.ignoreIfPlaying,
        ignoreIfPlaying = _opts$ignoreIfPlaying === void 0 ? false : _opts$ignoreIfPlaying,
        _opts$delay = _opts.delay,
        delay = _opts$delay === void 0 ? null : _opts$delay,
        _opts$onComplete = _opts.onComplete,
        onComplete = _opts$onComplete === void 0 ? null : _opts$onComplete,
        _opts$onCompleteScope = _opts.onCompleteScope,
        onCompleteScope = _opts$onCompleteScope === void 0 ? null : _opts$onCompleteScope,
        _opts$spriteID = _opts.spriteID,
        spriteID = _opts$spriteID === void 0 ? _GameSFX.GAME_SFX_BASE : _opts$spriteID; //this.checkAudioContext();

    if (this.game.device.ie || this.game.deviceController.isOldAppleDevice()) {
      this.playSound(id, opts);
      return true;
    }

    if (this.sprites[spriteID]) {
      if (spriteID === _GameSFX.GAME_SFX_BASE) {
        if (!this.sprites[spriteID].sounds[id]) {// spriteID = GAME_SFX_EXTRA;
        }
      }
    }

    if (delay) {
      opts.delay = null;
      this.game.time.events.add(delay, this.playSFX, this, id, opts).autoDestroy = true;
      return true;
    } // if (this.isTouchLocked) {
    //     // console.log('playSFX : touch is locked ', id, opts);
    // }


    if (this._allowEffects) {
      //} && !this.isTouchLocked) {
      if (this.sfxExists(id, spriteID)) {
        if (ignoreIfPlaying && this.sprites[spriteID].get(id).isPlaying) {
          return false;
        }

        this.sprites[spriteID].get(id).loop = loop;
        this.sprites[spriteID].get(id).markers[id].loop = loop; // need to set loop in markers also

        this.sprites[spriteID].play(id, volume);

        if (onComplete) {
          var soundObj = this.sprites[spriteID].sounds[id];
          soundObj.onStop.addOnce(onComplete, onCompleteScope);
        }
      } else {
        return false;
      }
    } else if (onComplete) {
      /**
       * Fire the Signal immediately
       */
      var completeSignal = new Phaser.Signal();
      completeSignal.addOnce(onComplete, onCompleteScope);
      completeSignal.dispatch();
    } else {
      return false;
    }

    return true;
  } // used to stop looping audio : loop is defined in audiosprite json now!!
  ;

  _proto.stopSFX = function stopSFX(id, opts) {
    if (opts === void 0) {
      opts = {
        spriteID: _GameSFX.GAME_SFX_BASE
      };
    }

    var _opts2 = opts,
        _opts2$spriteID = _opts2.spriteID,
        spriteID = _opts2$spriteID === void 0 ? _GameSFX.GAME_SFX_BASE : _opts2$spriteID;

    if (this.sprites[spriteID]) {
      if (spriteID === _GameSFX.GAME_SFX_BASE) {
        if (!this.sprites[spriteID].sounds[id]) {
          spriteID = GAME_SFX_EXTRA;
        }
      }
    }

    if (this.sfxExists(id, spriteID)) {
      this.sprites[spriteID].stop(id);
    }
  };

  _proto.stopAllSFX = function stopAllSFX() {
    for (var i in this.sprites) {
      this.sprites[i].stop();
    }
  }
  /**
   * End audiosprites
   */

  /**
   * Background Music
   */
  ;

  _proto.stopBackgroundMusic = function stopBackgroundMusic() {
    var id = this.backgroundMusic.id;
    this.stopSound(id);
  };

  _proto.playBackgroundMusic = function playBackgroundMusic() {
    //this.checkAudioContext();
    //if (!this.isTouchLocked) {
    var _this$backgroundMusic = this.backgroundMusic,
        id = _this$backgroundMusic.id,
        volume = _this$backgroundMusic.volume;
    var snd = this.sounds[id];
    this.stopGameMusic();

    if (snd && this.game.hud.isWelcomeScreen()) {
      if (this._allowMusic) {
        if (!snd.paused && !snd.isPlaying) {
          this.backgroundAudio = snd.play('', 0, 0, true);
          snd.volume = volume; // snd.fadeTo(1000, volume); <-- for some reason is failing on first load
        } else if (snd.paused) {
          snd.volume = 0;
          snd.resume();
          snd.fadeTo(500, volume);
        }
      }
    } //}

  };

  _proto.stopGameMusic = function stopGameMusic() {
    var id = this.gameMusic.id;
    this.stopSound(id);
  };

  _proto.setGameMusicVolume = function setGameMusicVolume(volume) {
    var id = this.gameMusic.id;
    this.setVolume(id, volume);
  };

  _proto.playGameMusic = function playGameMusic() {
    //this.checkAudioContext();
    //if (!this.isTouchLocked) {
    var _this$gameMusic = this.gameMusic,
        id = _this$gameMusic.id,
        volume = _this$gameMusic.volume;
    var snd = this.sounds[id];
    this.stopBackgroundMusic();

    if (snd) {
      if (this._allowMusic) {
        if (!snd.paused && !snd.isPlaying) {
          this.backgroundAudio = snd.play('', 0, 0, true);
          snd.volume = volume; // snd.fadeTo(1000, volume); <-- for some reason is failing on first load
        } else if (snd.paused) {
          snd.volume = 0;
          snd.resume();
          snd.fadeTo(500, volume);
        }
      }
    } //}

  };

  _proto.dimBackgroundMusic = function dimBackgroundMusic(value) {
    var _this$backgroundMusic2 = this.backgroundMusic,
        id = _this$backgroundMusic2.id,
        volume = _this$backgroundMusic2.volume;
    var snd = this.sounds[id];

    if (value) {
      snd.volume = volume / 4;
    } else {
      snd.volume = volume;
    }
  };

  _proto.pauseBackgroundMusic = function pauseBackgroundMusic() {
    var id = this.backgroundMusic.id;

    if (this.game.hud.isWelcomeScreen()) {
      var snd = this.sounds[id];

      if (snd) {
        snd.pause();
      }
    }
  };

  _proto.playSound = function playSound(id, opts) {
    if (opts === void 0) {
      opts = {
        volume: 1,
        loop: false,
        delay: null,
        onComplete: null,
        onCompleteScope: null
      };
    }

    var _opts3 = opts,
        volume = _opts3.volume,
        _opts3$loop = _opts3.loop,
        loop = _opts3$loop === void 0 ? false : _opts3$loop,
        _opts3$ignoreIfPlayin = _opts3.ignoreIfPlaying,
        ignoreIfPlaying = _opts3$ignoreIfPlayin === void 0 ? false : _opts3$ignoreIfPlayin,
        _opts3$delay = _opts3.delay,
        delay = _opts3$delay === void 0 ? null : _opts3$delay,
        _opts3$onComplete = _opts3.onComplete,
        onComplete = _opts3$onComplete === void 0 ? null : _opts3$onComplete,
        _opts3$onCompleteScop = _opts3.onCompleteScope,
        onCompleteScope = _opts3$onCompleteScop === void 0 ? null : _opts3$onCompleteScop;

    if (this._allowEffects) {
      //} && !this.isTouchLocked) {
      if (this.soundExists(id)) {
        if (ignoreIfPlaying && this.sounds[id].isPlaying) {
          return false;
        }

        this.sounds[id].play();
      } else {
        return false;
      }
    } else {
      return false;
    }

    return true;
  };

  _proto.stopSound = function stopSound(id) {
    if (this.sounds[id]) {
      this.sounds[id].pausedPosition = 0;
      this.sounds[id].stop();
    }
  };

  _proto.isSoundPlaying = function isSoundPlaying(id) {
    if (this.sounds[id]) {
      return this.sounds[id].isPlaying;
    }

    return false;
  };

  _proto.stopAllSounds = function stopAllSounds() {
    for (var i in this.sounds) {
      this.sounds[i].stop();
    }
  };

  _proto.setVolume = function setVolume(id, volume) {
    if (this.backgroundMusic.id == id) {
      this.backgroundMusic.volume = volume;
      this.sounds[id].fadeTo(1000, volume);
    } else {
      this.sounds[id].volume = volume;
    }
  };

  return SoundController;
}();

exports.default = SoundController;
SoundController.TITLEMUSIC_VOLUME = 0.2;
SoundController.GAMEMUSIC_VOLUME = 1;

/***/ }),

/***/ "CJ8M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var ShopEnd =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(ShopEnd, _Phaser$Group);

  function ShopEnd(game) {
    var _this;

    _this = _Phaser$Group.call(this, game) || this;
    _this.wall = _this.game.make.sprite(0, 0, 'shop_end');

    _this.addChild(_this.wall);

    _this.patty = _this.game.make.spine(790, 240, 'patty');

    _this.patty.anchor.set(0.5, 1);

    _this.patty.setAnimationByName(0, 'IdleBlink', true);

    _this.addChild(_this.patty);

    _this.desk = _this.game.make.image(840, 300, 'shop_end_desk');

    _this.desk.anchor.set(0.5, 1);

    _this.addChild(_this.desk);

    return _this;
  }

  var _proto = ShopEnd.prototype;

  _proto.playPattyEnd = function playPattyEnd() {
    this.patty.setAnimationByName(0, 'Dance', true);
  };

  _proto.destroy = function destroy() {
    this.wall = null;
    this.patty = null;
    this.desk = null;

    _Phaser$Group.prototype.destroy.call(this);
  };

  return ShopEnd;
}(Phaser.Group);

exports.default = ShopEnd;

/***/ }),

/***/ "CJWn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _AppConstants = __webpack_require__("zgbH");

var _GameSFX = __webpack_require__("QklZ");

var Hero =
/*#__PURE__*/
function (_Phaser$Sprite) {
  (0, _inheritsLoose2.default)(Hero, _Phaser$Sprite);

  function Hero(_ref) {
    var _this;

    var game = _ref.game,
        gameState = _ref.gameState,
        _ref$character = _ref.character,
        character = _ref$character === void 0 ? 'apple' : _ref$character;
    _this = _Phaser$Sprite.call(this, game, 0, 0) || this;
    _this.character = character;
    _this.costume = _this.game.make.spine(0, 0, character + 'Walks');

    _this.costume.setAnimationByName(0, 'idle', true);

    _this.game = game;
    _this.gameState = gameState;
    _this.WALK_TIME = 250;

    _this.costume.anchor.set(0.5, 1);

    _this.addChild(_this.costume);

    _this.onPosition = true;
    _this.state = Hero.STATE_START;
    _this.currentRow = 0;
    _this.currentColumn = 0;
    return _this;
  }

  var _proto = Hero.prototype;

  _proto.goto = function goto(x, y) {
    if (this.onPosition && this.state !== Hero.STATE_LOSE && this.state !== Hero.STATE_WIN) {
      if (y < this.y) {
        // go up
        this.tween = this.game.add.tween(this).to({
          y: y
        }, this.WALK_TIME, Phaser.Easing.None, true); // Quadratic.InOut

        this.tween.onComplete.add(this.onWalkEnd, this);
        this.costume.setAnimationByName(0, 'walk_fwd', true);
        this.game.sounds.playSFX(_GameSFX.GAME_SFX_FOOTSTEPS);
        this.currentRow++;
      } else if (x < this.x) {
        // go left
        this.tween = this.game.add.tween(this).to({
          x: x
        }, this.WALK_TIME, Phaser.Easing.None, true);
        this.tween.onComplete.add(this.onWalkEnd, this);
        this.costume.setAnimationByName(0, 'walk_left', true);
        this.game.sounds.playSFX(_GameSFX.GAME_SFX_FOOTSTEPS);
        this.currentColumn--;
      } else {
        // go right
        this.tween = this.game.add.tween(this).to({
          x: x
        }, this.WALK_TIME, Phaser.Easing.None, true);
        this.tween.onComplete.add(this.onWalkEnd, this);
        this.costume.setAnimationByName(0, 'walk_right', true);
        this.game.sounds.playSFX(_GameSFX.GAME_SFX_FOOTSTEPS);
        this.costume.scale.x = -1;
        this.costume.update();
        this.costume.updateTransform();
        this.currentColumn++;
      }

      this.onPosition = false;
      this.state = Hero.STATE_WALK;
    }
  };

  _proto.onWalkEnd = function onWalkEnd() {
    if (this.state == Hero.STATE_WALK) {
      this.state = Hero.STATE_LAND;
      this.onPosition = true;
      this.costume.scale.x = 1;
      this.costume.setAnimationByName(0, 'idle', true);
      this.tween = null;
      this.gameState.checkLanding(this.currentRow);
      this.game.sounds.stopSFX(_GameSFX.GAME_SFX_FOOTSTEPS);
    }
  };

  _proto.getWorldBounds = function getWorldBounds() {
    var bounds = this.costume.getBounds(); // change height

    var h = bounds.height;
    var y = bounds.y;
    var btm = y + h;
    bounds.height = 40;
    bounds.y = btm - bounds.height; // fix position

    bounds.x += this.game.camera.view.x;
    bounds.y += this.game.camera.view.y;
    return bounds;
  };

  _proto.updatePauseStatus = function updatePauseStatus(paused) {
    if (paused) {
      this.costume.state.getCurrent(0).timeScale = 0;
      if (this.tween) this.tween.pause();
    } else {
      this.costume.state.getCurrent(0).timeScale = 1;
      if (this.tween) this.tween.resume();
    }
  };

  _proto.handleLose = function handleLose() {
    this.state = Hero.STATE_LOSE;
    this.costume.setAnimationByName(0, 'hit', true); // stop walk tween if exist

    if (this.tween) this.tween.stop();
    this.game.sounds.playSFX(this.character + '_lose');
    this.game.sounds.playSFX(_GameSFX.GAME_SFX_COLLISION); // animate character

    var tween = this.game.add.tween(this).to({
      y: '-200'
    }, 300, Phaser.Easing.Quadratic.Out, true);
    tween.onComplete.add(this.goDown, this);
  };

  _proto.goDown = function goDown() {
    var tween = this.game.add.tween(this).to({
      y: '+700'
    }, 800, Phaser.Easing.Quadratic.In, true);
    tween.onComplete.add(this.onLoseEnd, this);
  };

  _proto.onLoseEnd = function onLoseEnd() {
    this.game.controller.showLevelEnd({
      win: false
    });
  };

  _proto.handleWin = function handleWin() {
    this.state = Hero.STATE_WIN;
  };

  _proto.update = function update() {
    _Phaser$Sprite.prototype.update.call(this);

    this.costume.update();
  };

  _proto.destroy = function destroy() {
    this.costume.destroy(true);
    this.costume = null;
    this.state = null;

    _Phaser$Sprite.prototype.destroy.call(this, true);
  };

  return Hero;
}(Phaser.Sprite);

exports.default = Hero;
Hero.STATE_START = 'Hero.STATE_START';
Hero.STATE_WALK = 'Hero.STATE_WALK';
Hero.STATE_LAND = 'Hero.STATE_LAND';
Hero.STATE_LOSE = 'Hero.STATE_LOSE';
Hero.STATE_WIN = 'Hero.STATE_WIN';

/***/ }),

/***/ "Doot":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var LowFi =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(LowFi, _Phaser$Group);

  function LowFi(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Group.call(this, game) || this;
    _this.maskp = _this.game.add.graphics();

    _this.maskp.beginFill(0xffffff, 1);

    _this.maskp.drawRect(0, 0, _this.game.width, _this.game.height);

    _this.maskp.endFill();

    _this.maskp.anchor.set(0.5);

    _this.maskp.position.set(0, 0);

    _this.maskp.alpha = 0;

    _this.addChild(_this.maskp);

    _this.onInComplete = new Phaser.Signal();
    _this.onOutComplete = new Phaser.Signal();
    return _this;
  }

  var _proto = LowFi.prototype;

  _proto.init = function init() {};

  _proto.startIn = function startIn() {
    var fade = this.game.add.tween(this.maskp).to({
      alpha: 1
    }, 200, 'Cubic.easeInOut', false);
    fade.onComplete.addOnce(this.startInComplete, this);
    fade.start();
  };

  _proto.startInComplete = function startInComplete() {
    this.onInComplete.dispatch(this);
  };

  _proto.startOut = function startOut() {
    var fade = this.game.add.tween(this.maskp).to({
      alpha: 0
    }, 200, 'Cubic.easeInOut', false);
    fade.onComplete.addOnce(this.startOutComplete, this);
    fade.start();
  };

  _proto.startOutComplete = function startOutComplete() {
    this.onOutComplete.dispatch(this);
  };

  _proto.destroy = function destroy(destroyChildren, soft) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    this.onInComplete.forget();
    this.onInComplete.dispose();
    this.onInComplete.removeAll();
    this.onOutComplete.forget();
    this.onOutComplete.dispose();
    this.onOutComplete.removeAll();
    this.maskp = null;

    _Phaser$Group.prototype.destroy.call(this, destroyChildren);
  };

  return LowFi;
}(Phaser.Group);

var _default = LowFi;
exports.default = _default;

/***/ }),

/***/ "ELGz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var _AppConstants = __webpack_require__("zgbH");

var _TapArea = _interopRequireDefault(__webpack_require__("gz72"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _Text = __webpack_require__("NfmA");

var _Hud = _interopRequireDefault(__webpack_require__("d0OL"));

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var _GameSFX = __webpack_require__("QklZ");

var CharacterIntro =
/*#__PURE__*/
function (_Phaser$State) {
  (0, _inheritsLoose2.default)(CharacterIntro, _Phaser$State);

  function CharacterIntro() {
    return _Phaser$State.apply(this, arguments) || this;
  }

  var _proto = CharacterIntro.prototype;

  _proto.init = function init() {};

  _proto.create = function create(game) {
    this.game = game;
    this.background = this.game.make.image(0, 0, 'bg_character_select');
    this.background.anchor.set(0.5, 0.5);
    this.game.add.existing(this.background);
    this.container = this.game.add.group();
    this.createCharacters();
    this.createButton();
    this.createPanel();
    this.game.hud.activate({
      id: _Hud.default.WELCOME
    });
    this.logo = this.game.make.image(0, 0, 'logo_game');
    this.logo.anchor.set(1);
    this.logo.scale.set(0.33);
    this.logo.position.set(this.game.defaultWidth - (this.game.defaultWidth - this.game.width) / 2 - 30, this.game.defaultHeight - 60);
    this.container.addChild(this.logo);
    this.selectedCharacter = '';
    this.btnPlay.visible = false;
    this.selectedCharacterArrow = this.game.make.image(0, 0, 'ui', 'arrow');
    this.selectedCharacterArrow.anchor.set(0.5);
    this.selectedCharacterArrow.visible = false;
    this.game.world.bringToTop(this.container);
    this.game.add.existing(this.selectedCharacterArrow);
    this.game.sounds.playBackgroundMusic();
    game.windowEventController.handleWindowResize();
    game.scale.onSizeChange.add(this.positionContainer, this);
    this.positionContainer();
  };

  _proto.createCharacters = function createCharacters() {
    this.onion = this.game.make.spine(0, 0, 'onionSelect');
    this.onion.setAnimationByName(0, 'idle', true);
    this.onion.anchor.set(0.5, 1);
    var box = this.game.make.image(0, 0, 'ui', 'arrow');
    box.width = 150;
    box.height = 370;
    box.anchor.set(0.5, 1);
    box.alpha = 0;
    this.onion.addChild(box);
    this.onion.inputEnabled = true;
    this.onion.events.onInputDown.add(this.handleSelectOnion, this);
    this.onion.events.onInputOver.add(this.changeCursorPointer, this);
    this.onion.events.onInputOut.add(this.changeCursorNormal, this);
    this.onion.position.set(this.game.defaultWidth * 0.65, this.game.defaultHeight * 0.9);
    this.game.add.existing(this.onion); //

    this.apple = this.game.make.spine(0, 0, 'appleSelect');
    this.apple.setAnimationByName(0, 'idle', true);
    this.apple.anchor.set(0.5, 1);
    this.apple.inputEnabled = true;
    this.apple.events.onInputDown.add(this.handleSelectApple, this);
    this.apple.events.onInputOver.add(this.changeCursorPointer, this);
    this.apple.events.onInputOut.add(this.changeCursorNormal, this);
    this.apple.position.set(this.game.defaultWidth * 0.25, this.game.defaultHeight * 0.9);
    this.game.add.existing(this.apple);
  };

  _proto.createButton = function createButton() {
    // try again button
    this.btnPlay = new _ButtonSimple.default({
      game: this.game,
      id: 'btn_play',
      skin: 'btn_play'
    });
    this.btnPlay.x = this.game.defaultWidth * 0.5;
    this.btnPlay.y = this.game.defaultHeight * 0.75;
    this.btnPlay.anchor.set(0.5);
    this.btnPlay.onInputDown.add(this.handlePlayGame, this);
    this.game.add.existing(this.btnPlay);
  };

  _proto.createPanel = function createPanel() {
    this.mainCopy = (0, _Text.createTextField)(this.game, _AppConstants.FONT_TITLE, 78, _AppConstants.FONT_COLOUR_LEVEL_WIN, 0, 0, {
      align: 'center',
      stroke: _AppConstants.FONT_COLOUR_STROKE,
      strokeThickness: 6
    });
    this.mainCopy.text = this.game.copy.getCopy('character_select');
    this.mainCopy.anchor.set(0.5);
    this.mainCopy.setShadow(3, 3, 'rgba(0,0,0,0.5)', 0);
    this.game.add.existing(this.mainCopy);
  };

  _proto.handleSelectOnion = function handleSelectOnion() {
    if (this.selectedCharacter !== CharacterIntro.SELECTED_ONION) {
      if (!this.btnPlay.visible) {
        this.btnPlay.visible = true; //this.selectedCharacterArrow.visible = true;
      }

      this.selectedCharacter = CharacterIntro.SELECTED_ONION; //this.selectedCharacterArrow.position.set(this.onion.x, this.onion.y - this.onion.height * 1.1);

      this.onion.setAnimationByName(0, 'selected', false);
      this.onion.addAnimationByName(0, 'selected_loop', true);
      this.apple.setAnimationByName(0, 'idle', true);
      this.game.sounds.playSFX(_GameSFX.GAME_SFX_ONION_SELECT);
    }
  };

  _proto.handleSelectApple = function handleSelectApple() {
    if (this.selectedCharacter !== CharacterIntro.SELECTED_APPLE) {
      if (!this.btnPlay.visible) {
        this.btnPlay.visible = true; //this.selectedCharacterArrow.visible = true;
      }

      this.selectedCharacter = CharacterIntro.SELECTED_APPLE; //this.selectedCharacterArrow.position.set(this.apple.x, this.apple.y - this.apple.height * 1.25);

      this.apple.setAnimationByName(0, 'selected', false);
      this.apple.addAnimationByName(0, 'selected_loop', true);
      this.onion.setAnimationByName(0, 'idle', true);
      this.game.sounds.playSFX(_GameSFX.GAME_SFX_APPLE_SELECT);
    }
  };

  _proto.handlePlayGame = function handlePlayGame() {
    this.game.controller.gameModel.setChosenCharacter(this.selectedCharacter);

    switch (this.selectedCharacter) {
      case CharacterIntro.SELECTED_APPLE:
        this.game.track(AppTrackingEvents.CHARACTER_SELECT_APPLE);
        break;

      case CharacterIntro.SELECTED_ONION:
        this.game.track(AppTrackingEvents.CHARACTER_SELECT_ONION);
        break;
    }

    this.game.controller.startNewGame(); // this.game.controller.showGameEnd({ win: true, character: this.selectedCharacter });
  };

  _proto.positionContainer = function positionContainer() {
    var x = (this.game.width - this.game.defaultWidth) * 0.5;
    var y = 0;
    var scale = Math.max(this.game.height / this.game.defaultHeight, this.game.width / this.game.defaultWidth);
    this.background.scale.set(scale);
    this.background.position.set(this.game.width * 0.5, this.game.height * 0.5);
    var yOffset = 1 - scale;
    yOffset /= 4;
    this.onion.position.set(this.game.width * 0.75, this.game.height * (0.9 - yOffset));
    this.apple.position.set(this.game.width * 0.25, this.game.height * (0.9 - yOffset));
    this.selectedCharacterArrow.position.set(this.selectedCharacter == CharacterIntro.SELECTED_APPLE ? this.apple.x : this.onion.x, this.selectedCharacter == CharacterIntro.SELECTED_APPLE ? this.apple.y - this.apple.height * 1.25 : this.onion.y - this.onion.height * 1.1);
    this.mainCopy.position.set(this.game.width * 0.5, this.game.height * (0.3 + yOffset));
    this.btnPlay.position.set(this.game.width * 0.5, this.game.height * 0.75);
    this.logo.position.set(this.game.defaultWidth - (this.game.defaultWidth - this.game.width) / 2 - 30, this.game.defaultHeight - 60);
    this.container.position.set(x, y);
  };

  _proto.changeCursorNormal = function changeCursorNormal() {
    this.game.canvas.style.cursor = 'default';
  };

  _proto.changeCursorPointer = function changeCursorPointer() {
    this.game.canvas.style.cursor = 'pointer';
  };

  _proto.shutDown = function shutDown() {
    // remove listeners
    game.scale.onSizeChange.remove(this.positionContainer, this);
    this.apple.events.onInputDown.remove(this.handleSelectApple, this);
    this.onion.events.onInputDown.remove(this.handleSelectOnion, this);
    this.apple.events.onInputOver.remove(this.changeCursorPointer, this);
    this.apple.events.onInputOut.remove(this.changeCursorNormal, this);
    this.onion.events.onInputOver.remove(this.changeCursorPointer, this);
    this.onion.events.onInputOut.remove(this.changeCursorNormal, this); //destroy

    this.background.destroy(true);
    this.container.destroy(true);
    this.apple.destroy(true);
    this.onion.destroy(true);
    this.mainCopy.destroy(true);
    this.btnPlay.destroy(true);
    this.logo.destroy(true);
    this.selectedCharacterArrow.destroy(true); //nullify

    this.background = null;
    this.container = null;
    this.apple = null;
    this.onion = null;
    this.mainCopy = null;
    this.btnPlay = null;
    this.logo = null;
    this.selectedCharacterArrow = true;
    this.selectedCharacter = null;
  };

  return CharacterIntro;
}(Phaser.State);

CharacterIntro.SELECTED_ONION = 'CharacterIntro.SELECTED_ONION';
CharacterIntro.SELECTED_APPLE = 'CharacterIntro.SELECTED_APPLE';
var _default = CharacterIntro;
exports.default = _default;

/***/ }),

/***/ "F9ow":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var _AppConstants = __webpack_require__("zgbH");

var _Text = __webpack_require__("NfmA");

var HudLevelCountdown =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudLevelCountdown, _Phaser$Group);

  function HudLevelCountdown(game) {
    var _this;

    _this = _Phaser$Group.call(this, game) || this;
    _this.background = new _BackgroundColourFill.default({
      game: game,
      colour: '#000000',
      alpha: 0.5
    });

    _this.add(_this.background); // container to house and position contents


    _this.container = _this.game.make.group();

    _this.add(_this.container); // baking panel


    _this.panel = _this.game.make.image(0, 0, 'ui', 'panel_generic');

    _this.container.add(_this.panel);

    _this.count = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 350, _AppConstants.FONT_COLOUR_SCORE_TARGET);
    _this.count.y = 50;
    _this.count.x = _this.panel.width / 2;
    _this.count.text = 3;

    _this.container.add(_this.count); // adjust panel height to match content


    _this.panel.height = _this.count.y + 500; // positioning

    _this.game.scale.onSizeChange.add(_this.handleScreenResize, (0, _assertThisInitialized2.default)(_this));

    _this.fixedToCamera = true;

    _this.handleScreenResize();

    _this.duration = 0;
    _this.onComplete = new Phaser.Signal();
    return _this;
  }

  var _proto = HudLevelCountdown.prototype;

  _proto.handleScreenResize = function handleScreenResize() {
    this.container.x = this.game.width * 0.5 - this.width * 0.5;
    this.container.y = this.game.height * 0.5 - this.height * 0.5;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */
  ;

  _proto.update = function update() {
    this.count.x = this.panel.width * 0.5 - this.count.width * 0.5;

    if (this.duration < 3000) {
      this.duration += this.game.time.elapsedMS;
      this.count.text = 3 - Math.floor(this.duration / 1000);
    } else if (!this.dispatchedComplete) {
      this.count.text = 0;
      this.dispatchedComplete = true;
      this.onComplete.dispatch();
    }
  }
  /*
  ============================================================================================
    TOODLES!
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    // super dupa
    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(HudLevelCountdown, [{
    key: "height",
    get: function get() {
      return this.panel.height + this.panel.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.panel.width;
    }
  }]);
  return HudLevelCountdown;
}(Phaser.Group);

exports.default = HudLevelCountdown;

/***/ }),

/***/ "FyYt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var Shelf =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(Shelf, _Phaser$Group);

  function Shelf(_ref) {
    var _this;

    var game = _ref.game,
        gx = _ref.gx,
        size = _ref.size,
        row = _ref.row,
        shelfType = _ref.shelfType;
    _this = _Phaser$Group.call(this, game) || this;
    _this.row = row;

    if (size == 1) {
      _this.costume = _this.game.make.image(0, 0, 'shelves', 'shelf_1');
      _this.row.cells[gx] = 1;
    } else {
      _this.costume = _this.game.make.image(0, 0, 'shelves', shelfType);

      if (gx >= 0 && gx < _this.row.cellsInRow) {
        _this.row.cells[gx] = 1;
      }

      if (gx > 0) {
        _this.row.cells[gx - 1] = 1;
      }

      if (gx < _this.row.cellsInRow - 1) {
        _this.row.cells[gx + 1] = 1;
      }
    }

    _this.costume.anchor.set(0.5, 1);

    _this.costume.y = 44;

    _this.addChild(_this.costume); // customise content

    /*if (size == 3) {
      let type = this.game.rnd.integerInRange(1, 2);
      let boxesSmall = this.game.make.image(0, -136, 'shelves', 'boxes_small_' + type);
      boxesSmall.anchor.set(0.5, 1);
      this.costume.addChild(boxesSmall);
       type = this.game.rnd.integerInRange(1, 2);
      let bottles = this.game.make.image(0, -91, 'shelves', 'bottles_' + type);
      bottles.anchor.set(0.5, 1);
      this.costume.addChild(bottles);
       type = this.game.rnd.integerInRange(1, 2);
      let boxesBig = this.game.make.image(0, -53, 'shelves', 'boxes_big_' + type);
      boxesBig.anchor.set(0.5, 1);
      this.costume.addChild(boxesBig);
       type = this.game.rnd.integerInRange(1, 2);
      let shirts = this.game.make.image(0, -20, 'shelves', 'shirts_' + type);
      shirts.anchor.set(0.5, 1);
      this.costume.addChild(shirts);
    }*/


    return _this;
  }

  var _proto = Shelf.prototype;

  _proto.addRandomItem = function addRandomItem(item) {
    var randomItem = this.game.make.image(0, 0, 'shelves', item);
    var itemWidth = randomItem.width + 20;
    var shelfWidth = this.costume.width - itemWidth;
    randomItem.anchor.set(0.5, 1);
    randomItem.x = itemWidth / 2 + (Math.random() * shelfWidth - shelfWidth * 0.5 - itemWidth / 2);
    randomItem.y = -this.costume.height + 50;
    this.costume.addChild(randomItem);
  };

  _proto.getWorldBounds = function getWorldBounds() {
    var bounds = this.costume.getBounds();
    bounds.width = bounds.width * 0.9;
    bounds.x += bounds.width * 0.05;
    bounds.height = bounds.height * 0.5;
    bounds.y += bounds.height * 0.25;
    bounds.y += this.game.camera.view.y;
    return bounds;
  };

  return Shelf;
}(Phaser.Group);

exports.default = Shelf;

/***/ }),

/***/ "GEMp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var WebFont = _interopRequireWildcard(__webpack_require__("tp+U"));

var _AppConstants = __webpack_require__("zgbH");

var _Text = __webpack_require__("NfmA");

var _LoadBar = _interopRequireDefault(__webpack_require__("/46n"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var Load =
/*#__PURE__*/
function (_Phaser$State) {
  (0, _inheritsLoose2.default)(Load, _Phaser$State);

  function Load() {
    return _Phaser$State.apply(this, arguments) || this;
  }

  var _proto = Load.prototype;

  _proto.preload = function preload(game) {
    this.container = game.add.group();
    this.background = new _BackgroundColourFill.default({
      game: game,
      colour: '#000000',
      alpha: 1,
      blockInput: false
    });
    this.background.anchor.set(0.5);
    this.container.add(this.background);
    this.loadComplete = false;
    this.fontsReady = false;
    this.assetsReady = false;
    this.state = 0;
    WebFont.load({
      custom: {
        families: [_AppConstants.FONT_COPY],
        urls: [game.urls.getFontsDirectory(_AppConstants.FONT_COPY_CSS)]
      },
      active: this.fontsLoaded.bind(this),
      inactive: this.fontsLoaded.bind(this)
    });
    game.load.baseURL = game.urls.getAssetsDirectory();
    game.load.crossOrigin = 'anonymous';
    game.load.pack('load', 'assetpack.json', null, this);
    game.load.pack('audio', 'assetpack_audio.json', null, this);

    if (game.device.ie || game.deviceController.isOldAppleDevice()) {
      game.load.pack('audioIE', 'assetpack_audio.json', null, this);
    } else {
      game.load.pack('sprites_64', 'assetpack_audio.json', null, this);
    } // load spine files


    this.game.load.spine('appleWalks', 'characters/Apple_Walks.json');
    this.game.load.spine('appleSelect', 'characters/AppleCselect.json');
    this.game.load.spine('onionWalks', 'characters/Onion_Walks.json');
    this.game.load.spine('onionSelect', 'characters/OnionCselect.json');
    this.game.load.spine('patty', 'characters/MsPatty.json');
    this.game.load.spine('trolleyDashers', 'levels/TrolleyDashers.json');
    this.game.load.spine('trolley', 'levels/Trolley.json'); // create loading assets

    this.panel = this.game.make.group();
    this.panel.position.set(this.game.defaultWidth * 0.5, this.game.defaultHeight * 0.5);
    this.container.addChild(this.panel);
    this.loadBar = new _LoadBar.default(this.game);
    this.loadBar.position.set(0, this.game.defaultHeight * 0.25);
    this.panel.add(this.loadBar);
    this.loadImage = this.game.make.sprite(0, 0, 'loader', 'cn_preloader_bg.jpg');
    this.loadImage.anchor.set(0.5);
    this.loadImage.position.set(0, -this.game.defaultHeight * 0.15);
    this.panel.add(this.loadImage); //

    this.positionContainer();
    game.windowEventController.handleWindowResize();
    game.scale.onSizeChange.add(this.positionContainer, this);
  };

  _proto.positionContainer = function positionContainer() {
    var x = (this.game.width - this.game.defaultWidth) * 0.5;
    var y = (this.game.height - this.game.defaultHeight) * 0.5;
    this.background.scale.set(Math.max(this.game.height / this.game.defaultHeight, this.game.width / this.game.defaultWidth));
    this.background.x = -(this.game.width - this.game.defaultWidth) * 0.5;
    var sx = this.game.width / this.game.defaultWidth;
    var scale = Math.min(1, sx);
    this.panel.scale.set(scale);
    this.container.position.set(x, y);
  };

  _proto.loadUpdate = function loadUpdate(game) {
    this.loadBar.update();
    this.loadBar.setProgress(this.game.load.progress / 100);
  };

  _proto.create = function create(game) {
    this.assetsReady = true;
    this.game.sounds.touchLock(); //this.checkLoading();
  };

  _proto.fontsLoaded = function fontsLoaded() {
    this.fontsReady = true;
    this.checkLoading();
  };

  _proto.update = function update(game) {
    this.checkLoading(game);
  };

  _proto.checkLoading = function checkLoading(game) {
    if (!this.loadComplete && this.assetsReady && this.fontsReady) {
      var config = this.game.cache.getJSON('app_config');

      if (config) {
        this.loadBar.setProgress(1);
        this.game.controller.init({
          config: config
        });
        this.game.controller.showWelcomeScreen();
        this.loadComplete = true;
      }
    }
  };

  _proto.shutdown = function shutdown(game) {
    game.scale.onSizeChange.remove(this.positionContainer, this); // destroy
    // this.background.destroy(true);

    this.container.destroy(true); // clear up
    // this.background = null;

    this.container = null;
  };

  return Load;
}(Phaser.State);

var _default = Load;
exports.default = _default;

/***/ }),

/***/ "J1sN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Title = _interopRequireDefault(__webpack_require__("0kin"));

var _ScoreDisplay = _interopRequireDefault(__webpack_require__("OiSF"));

var _HighScoreDisplay = _interopRequireDefault(__webpack_require__("07gj"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var AppConstants = _interopRequireWildcard(__webpack_require__("zgbH"));

var _Text = __webpack_require__("NfmA");

var HudGameIntro =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudGameIntro, _Phaser$Group);

  function HudGameIntro(_ref) {
    var _this;

    var game = _ref.game,
        message = _ref.message,
        _ref$onClose = _ref.onClose,
        onClose = _ref$onClose === void 0 ? false : _ref$onClose,
        _ref$onCloseScope = _ref.onCloseScope,
        onCloseScope = _ref$onCloseScope === void 0 ? false : _ref$onCloseScope;
    _this = _Phaser$Group.call(this, game) || this;

    var messageData = _this.game.controller.config.getIntroMessageById(message);

    _this.background = new _BackgroundColourFill.default({
      game: game,
      colour: '#000000',
      alpha: 0.3
    });

    _this.add(_this.background); // container to house and position contents


    _this.container = _this.game.make.group();

    _this.add(_this.container); // baking panel


    _this.panel = _this.game.make.image(0, 0, 'ui', 'panel_generic');

    _this.container.add(_this.panel); // display Gnasher if player completed the level, display dennis if player did not


    _this.character = _this.game.make.image(0, 0, messageData.image.spritesheet, messageData.image.frame);
    _this.character.y = 0;
    _this.character.x = _this.panel.width * 0.5 - _this.character.width * 0.5;

    _this.container.addAt(_this.character, 0); // add title, positiing would depend on what character is being displayed


    _this.title = new _Title.default({
      game: game,
      title: _Title.default[messageData.title]
    });
    _this.title.x = _this.panel.width * 0.5 - _this.title.width * 0.5;
    _this.title.y = _this.character.height * 0.7;

    _this.container.add(_this.title);

    _this.copy = (0, _Text.createTextField)(_this.game, AppConstants.FONT_COPY, 33, AppConstants.COPY_WHITE, 60, 0, {
      wordWrap: true,
      wordWrapWidth: _this.panel.width * 0.8
    });
    _this.copy.angle = -2.5;
    _this.copy.text = _this.game.copy.getCopy(messageData.copy);
    _this.copy.y = _this.title.y + _this.title.height + 40;

    _this.container.add(_this.copy); // adjust panel positon based on title position


    _this.panel.y = _this.title.y + _this.title.height * 0.25; // continue button

    _this.btnContinue = new _ButtonSimple.default({
      game: _this.game,
      id: 'btn_continue',
      skin: 'btn_continue'
    });
    _this.btnContinue.x = _this.panel.width * 0.5;
    _this.btnContinue.y = _this.panel.y + _this.panel.height - _this.btnContinue.height;

    _this.btnContinue.onInputDown.add(_this.handleContinue, (0, _assertThisInitialized2.default)(_this));

    _this.container.addChild(_this.btnContinue); // and we adjust the height of the panel to suit


    _this.panel.height = _this.btnContinue.y - _this.panel.y; // closed callbacks

    _this.onClose = onClose;
    _this.onCloseScope = onCloseScope; // positioning

    _this.game.scale.onSizeChange.add(_this.handleScreenResize, (0, _assertThisInitialized2.default)(_this));

    _this.fixedToCamera = true;

    _this.handleScreenResize();

    return _this;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */


  var _proto = HudGameIntro.prototype;

  /*
  ============================================================================================
    EVENT HANDLERS
  ============================================================================================
  */
  _proto.handleScreenResize = function handleScreenResize() {
    this.container.x = this.game.width * 0.5 - this.width * 0.5;
    this.container.y = this.game.height * 0.5 - this.height * 0.5;
  };

  _proto.handleContinue = function handleContinue() {
    if (this.onClose) {
      this.onClose.apply(this.onCloseScope);
    }

    this.destroy();
  }
  /*
  ============================================================================================
    TOODLES!
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    // clean up listeners
    this.btnContinue.onInputDown.remove(this.handleContinue, this);
    this.game.scale.onSizeChange.remove(this.handleScreenResize, this); // destroy stuff

    this.btnContinue.destroy(true);
    this.title.destroy(true);
    this.character.destroy(true);
    this.panel.destroy(true);
    this.container.destroy(true); // nullify

    this.btnContinue = null;
    this.title = null;
    this.character = null;
    this.panel = null;
    this.container = null; // super dupa

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(HudGameIntro, [{
    key: "height",
    get: function get() {
      return this.panel.height + this.panel.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.panel.width;
    }
  }]);
  return HudGameIntro;
}(Phaser.Group);

exports.default = HudGameIntro;

/***/ }),

/***/ "JWFg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _Hud = _interopRequireDefault(__webpack_require__("d0OL"));

var _Text = __webpack_require__("NfmA");

var _AppConstants = __webpack_require__("zgbH");

var _GameSFX = __webpack_require__("QklZ");

var _AppConstants2 = __webpack_require__("zgbH");

var LevelEnd =
/*#__PURE__*/
function (_Phaser$State) {
  (0, _inheritsLoose2.default)(LevelEnd, _Phaser$State);

  function LevelEnd() {
    return _Phaser$State.apply(this, arguments) || this;
  }

  var _proto = LevelEnd.prototype;

  _proto.init = function init(_ref) {
    var character = _ref.character;
    this.character = character;
  };

  _proto.preload = function preload(game) {};

  _proto.create = function create(game) {
    this.game = game;
    this.background = game.make.image(0, 0, 'bg_level_complete');
    this.background.anchor.set(0, 1);
    this.game.add.existing(this.background);
    this.container = game.add.group();
    this.game.hud.activate({
      id: _Hud.default.LEVELEND
    });
    this.game.hud.fadeIn();
    this.game.sounds.playSFX(_GameSFX.GAME_SFX_MUSICAL_MOMENT);

    if (this.character == 'apple') {
      this.game.sounds.playSFX(_GameSFX.GAME_SFX_APPLE_WIN);
    } else {
      this.game.sounds.playSFX(_GameSFX.GAME_SFX_ONION_WIN);
    }

    this.createCharacters();
    this.createText(); // play again button

    this.btnPlay = new _ButtonSimple.default({
      game: this.game,
      id: 'btn_play',
      skin: 'btn_play'
    });
    this.btnPlay.x = this.game.defaultWidth * 0.5;
    this.btnPlay.y = this.game.defaultHeight * 0.75;
    this.btnPlay.onInputDown.add(this.handlePlayGame, this);
    this.container.add(this.btnPlay);
    this.logo = this.game.make.image(0, 0, 'logo_game');
    this.logo.anchor.set(1);
    this.logo.scale.set(0.33);
    this.logo.position.set(this.game.defaultWidth - (this.game.defaultWidth - this.game.width) / 2 - 30, this.game.defaultHeight - 60);
    this.container.addChild(this.logo);
    this.game.sounds.playGameMusic();
    this.game.windowEventController.handleWindowResize();
    this.game.scale.onSizeChange.add(this.positionContainer, this);
    this.positionContainer();
  };

  _proto.createCharacters = function createCharacters() {
    switch (this.character) {
      case 'apple':
        this.winCostume = this.game.make.sprite(0, 0, 'apple_endings', 'apple_complete_0001');
        this.winCostume.animations.add('win', Phaser.Animation.generateFrameNames('apple_complete_', 0, 29, '', 4), 24, true);
        this.winCostume.anchor.set(0.5, 1);
        this.winCostume.position.set(this.game.defaultWidth * 0.3, this.game.defaultHeight * 0.9);
        break;

      case 'onion':
        this.winCostume = this.game.make.sprite(0, 0, 'onion_endings', 'onion_complete_0001');
        this.winCostume.animations.add('win', Phaser.Animation.generateFrameNames('onion_complete_', 0, 30, '', 4), 24, true);
        this.winCostume.anchor.set(0.5, 1);
        this.winCostume.position.set(this.game.defaultWidth * 0.3, this.game.defaultHeight * 0.9);
        break;
    }

    this.winCostume.play('win');
    this.game.add.existing(this.winCostume);
  };

  _proto.createText = function createText() {
    this.mainCopy = (0, _Text.createTextField)(this.game, _AppConstants.FONT_TITLE, 78, _AppConstants.FONT_COLOUR_LEVEL_WIN, 0, 0, {
      align: 'center',
      stroke: _AppConstants.FONT_COLOUR_STROKE,
      strokeThickness: 6
    });
    this.mainCopy.text = this.game.copy.getCopy('level') + ' ' + this.game.controller.gameModel.getCurrentLevel() + ' ' + this.game.copy.getCopy('complete');
    this.mainCopy.anchor.set(0.5);
    this.mainCopy.angle = -5;
    this.mainCopy.setShadow(3, 3, 'rgba(0,0,0,0.5)', 0);
    this.mainCopy.scale.set(100);
    this.game.add.existing(this.mainCopy);
    this.tweenText();
  };

  _proto.tweenText = function tweenText() {
    this.scaleTweenDown = this.game.add.tween(this.mainCopy.scale).to({
      x: 0.7,
      y: 0.7
    }, 500, Phaser.Easing.Quartic.Out, true);
    this.scaleTweenUp = this.game.add.tween(this.mainCopy.scale).to({
      x: 1,
      y: 1
    }, 150, Phaser.Easing.Quartic.Out, false);
    this.scaleTweenDown.chain(this.scaleTweenUp);
    this.scaleTweenDown.onComplete.add(this.playStampSound, this);
  };

  _proto.playStampSound = function playStampSound() {
    this.game.sounds.playSFX('stamp');
  };

  _proto.positionContainer = function positionContainer() {
    var x = (this.game.width - this.game.defaultWidth) * 0.5;
    var y = (this.game.height - this.game.defaultHeight) * 0.5;
    this.container.position.set(x, y);
    this.logo.position.set(this.game.defaultWidth - (this.game.defaultWidth - this.game.width) / 2 - 30, this.game.defaultHeight - 60);
    var scale = Math.max(this.game.height / this.game.defaultHeight, this.game.width / this.game.defaultWidth);
    this.background.scale.set(scale);
    this.background.position.set(0, this.game.height);
    var yOffset = 1 - scale;
    yOffset /= 4;
    this.winCostume.position.set(this.game.width * 0.3, this.game.height * (0.9 + yOffset));
    this.mainCopy.position.set(this.game.width * 0.5, this.game.height * 0.21);
  };

  _proto.handlePlayGame = function handlePlayGame() {
    this.game.controller.gameModel.levelUp();
    this.game.controller.startLevel(this.game.controller.gameModel.getCurrentLevel());
  };

  _proto.shutdown = function shutdown(game) {
    game.scale.onSizeChange.remove(this.positionContainer, this);
    this.btnPlay.onInputDown.remove(this.handlePlayGame, this);
    this.scaleTweenDown.onComplete.remove(this.playStampSound, this); // destroy

    this.background.destroy(true);
    this.container.destroy(true);
    this.winCostume.destroy(true);
    this.mainCopy.destroy(true);
    this.btnPlay.destroy(true); // clear up

    this.background = null;
    this.container = null;
    this.posterMain = null;
    this.posterSmall = null;
    this.winCostume = null;
    this.mainCopy = null;
    this.smallCopy = null;
    this.btnPlay = null;
  };

  return LevelEnd;
}(Phaser.State);

var _default = LevelEnd;
exports.default = _default;

/***/ }),

/***/ "JjYy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var BackgroundColourFill =
/*#__PURE__*/
function (_Phaser$Graphics) {
  (0, _inheritsLoose2.default)(BackgroundColourFill, _Phaser$Graphics);

  function BackgroundColourFill(_ref) {
    var _this;

    var game = _ref.game,
        colour = _ref.colour,
        alpha = _ref.alpha,
        _ref$blockInput = _ref.blockInput,
        blockInput = _ref$blockInput === void 0 ? true : _ref$blockInput;
    _this = _Phaser$Graphics.call(this, game) || this;

    _this.beginFill(colour, alpha);

    _this.drawRect(0, 0, _this.game.defaultWidth, _this.game.defaultHeight);

    _this.inputEnabled = blockInput;
    return _this;
  }

  return BackgroundColourFill;
}(Phaser.Graphics);

exports.default = BackgroundColourFill;

/***/ }),

/***/ "KL6g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Row2 = _interopRequireDefault(__webpack_require__("U3nP"));

var _Dasher = _interopRequireDefault(__webpack_require__("Y3q/"));

var _AppConstants = __webpack_require__("zgbH");

var RowDashers =
/*#__PURE__*/
function (_Row) {
  (0, _inheritsLoose2.default)(RowDashers, _Row);

  function RowDashers(_ref) {
    var _this;

    var game = _ref.game,
        rowNum = _ref.rowNum,
        _ref$dasherCount = _ref.dasherCount,
        dasherCount = _ref$dasherCount === void 0 ? 2 : _ref$dasherCount,
        minMoveSpeed = _ref.minMoveSpeed,
        maxMoveSpeed = _ref.maxMoveSpeed,
        _ref$dasherVariations = _ref.dasherVariations,
        dasherVariations = _ref$dasherVariations === void 0 ? 4 : _ref$dasherVariations,
        dasherType = _ref.dasherType;
    _this = _Row.call(this, {
      game: game,
      rowNum: rowNum
    }) || this;
    _this.rowNum = rowNum;
    _this.dasherType = dasherType;
    _this.dashers = [];
    _this.dasherCount = dasherCount;
    _this.dasherVariations = dasherVariations;
    _this.MIN_MOVE_SPEED = minMoveSpeed;
    _this.MAX_MOVE_SPEED = maxMoveSpeed;
    var dir = 1;

    if (rowNum !== 0) {
      //If it's odd
      if ((rowNum - 1) / 2 % 2 === 1) {
        //Flip the direction
        dir = -1;
      }
    } //Get a random movespeed inbetween constant values but offset by the row (so higher rows get faster)


    _this.dir = dir;
    _this.MOVE_SPEED = _this.game.rnd.integerInRange(_this.MIN_MOVE_SPEED + (rowNum + 1) * 10, _this.MAX_MOVE_SPEED + (rowNum + 1) * 10);

    _this.game.log('MOVE SPEED', 'Lane : ' + _this.rowNum, 'Move Speed : ' + _this.MOVE_SPEED, 'Direction : ' + _this.dir, 'Dasher count : ' + _this.dasherCount); //Spawn the dashers within the row


    _this.createDashers();

    return _this;
  } //Spawns the dashers at the start of the level


  var _proto = RowDashers.prototype;

  _proto.createDashers = function createDashers() {
    var lastSpawnPos = 0; //Loop through the amount of dashers to be spawned

    for (var index = 0; index < this.dasherCount; index++) {
      //Spawn a new dasher
      var dasher = new _Dasher.default({
        game: this.game,
        dir: this.dir,
        moveSpeed: this.MOVE_SPEED,
        variations: this.dasherVariations,
        rowInd: this.rowNum,
        id: index,
        dasherType: this.dasherType
      }); //Push it into the car aray

      this.dashers.push(dasher); //TODO - Create better random spawning algorithm as this only works for 2 dashers

      var randX = 0;

      if (index === 0) {
        randX = this.game.rnd.integerInRange(0, this.game.defaultWidth / 3);
      } else {
        randX = this.game.rnd.integerInRange(this.game.defaultWidth / 3 * 2, this.game.defaultWidth);
      }

      randX += this.game.rnd.integerInRange(200, 300); // //Position the dasher

      dasher.position.x = randX;
      dasher.position.y = 0; //this.rowPosY;

      this.addChild(dasher);
    }
  } //Updates the movement of each dasher in the row every frame
  ;

  _proto.step = function step(timeStep) {
    var _this2 = this;

    this.dashers.forEach(function (element) {
      element.move(timeStep, _this2.MOVE_SPEED);
    });
  };

  _proto.stopAnims = function stopAnims() {
    this.dashers.forEach(function (element) {
      element.stopAnimation();
    });
  };

  _proto.startAnims = function startAnims() {
    this.dashers.forEach(function (element) {
      element.startAnimation();
    });
  };

  _proto.getColliders = function getColliders() {
    return this.dashers;
  };

  return RowDashers;
}(_Row2.default);

exports.default = RowDashers;

/***/ }),

/***/ "KTG7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _GameSFX = __webpack_require__("QklZ");

var ButtonSound =
/*#__PURE__*/
function (_Phaser$Button) {
  (0, _inheritsLoose2.default)(ButtonSound, _Phaser$Button);

  function ButtonSound(_ref) {
    var _this;

    var game = _ref.game,
        id = _ref.id,
        sfxID = _ref.sfxID,
        position = _ref.position,
        skins = _ref.skins,
        ariaLabelID = _ref.ariaLabelID;
    _this = _Phaser$Button.call(this, game, 0, 0, 'buttons') || this;
    _this.id = id;
    _this.skins = skins;
    _this.input.useHandCursor = true;

    _this.game.time.events.add(10, _this.init, (0, _assertThisInitialized2.default)(_this));

    _this.game.controller.uiModel.onAudioIsChanged.add(_this.updateDisplayStatus, (0, _assertThisInitialized2.default)(_this));

    _this.grouped = position.grouped;

    if (!_this.grouped) {
      _this.xpos = position.x;
      _this.ypos = position.y;

      _this.anchor.set(0.5);

      _this.updatePosition();
    }

    _this.updateDisplayStatus({
      isMuted: _this.game.controller.uiModel.getIsMuted(),
      updateController: false
    });

    _this.enable();

    return _this;
  }

  var _proto = ButtonSound.prototype;

  _proto.init = function init() {// this.enable();
  };

  _proto.enable = function enable() {
    this.onInputDown.add(this.onDown, this);
    this.onInputOver.add(this.onOver, this);
    this.onInputOut.add(this.onOut, this);
  };

  _proto.disable = function disable() {
    this.onInputDown.forget();
    this.onInputDown.dispose();
    this.onInputDown.removeAll();
    this.onInputOver.forget();
    this.onInputOver.dispose();
    this.onInputOver.removeAll();
    this.onInputOut.forget();
    this.onInputOut.dispose();
    this.onInputOut.removeAll();
  };

  _proto.onOver = function onOver() {
    this.scale.set(1.2);
  };

  _proto.onOut = function onOut() {
    this.scale.set(1);
  };

  _proto.onDown = function onDown() {
    this.game.sounds.playSFX(_GameSFX.GAME_SFX_CLICK_SELECT);
  };

  _proto.updatePosition = function updatePosition() {
    this.position.set(this.game.width * this.xpos, this.game.height * this.ypos);
  };

  _proto.updateDisplayStatus = function updateDisplayStatus(_ref2) {
    var isMuted = _ref2.isMuted,
        _ref2$updateControlle = _ref2.updateController,
        updateController = _ref2$updateControlle === void 0 ? true : _ref2$updateControlle;
    console.log('isMuted: ' + isMuted);
    var skin = isMuted ? this.skins.muted : this.skins.unmuted;
    this.setFrames(skin, skin, skin, skin);
    this.game.sound.mute = isMuted;

    if (updateController) {
      this.game.sounds.allowMusic = this.game.sounds.allowEffects = !isMuted;
    }
  };

  _proto.destroy = function destroy(destroyChildren) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    this.disable();
    this.game.controller.uiModel.onAudioIsChanged.remove(this.updateDisplayStatus, this);

    _Phaser$Button.prototype.destroy.call(this, destroyChildren);
  };

  return ButtonSound;
}(Phaser.Button);

var _default = ButtonSound;
exports.default = _default;

/***/ }),

/***/ "LKd1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var InstructionsPanel =
/*#__PURE__*/
function (_Phaser$Sprite) {
  (0, _inheritsLoose2.default)(InstructionsPanel, _Phaser$Sprite);

  function InstructionsPanel(_ref) {
    var _this;

    var id = _ref.id,
        game = _ref.game,
        sheet = _ref.sheet,
        index = _ref.index,
        hasRays = _ref.hasRays;
    _this = _Phaser$Sprite.call(this, game) || this;
    _this.sheet = sheet;

    _this.loadTexture(_this.sheet, id);

    return _this;
  }

  var _proto = InstructionsPanel.prototype;

  _proto.init = function init(_ref2) {
    var position = _ref2.position;
    this.position.set(position.x, position.y);
    this.alpha = 0;
  };

  _proto.show = function show() {
    this.scale.set(0.5);
    this.game.add.tween(this.scale).to({
      x: 1,
      y: 1
    }, InstructionsPanel.ANIM_DURATION, 'Cubic.easeOut', true);
    this.game.add.tween(this).to({
      alpha: 1
    }, InstructionsPanel.ANIM_DURATION * 0.75, 'Cubic.easeIn', true);
  };

  _proto.destroy = function destroy() {
    _Phaser$Sprite.prototype.destroy.call(this, true);
  };

  return InstructionsPanel;
}(Phaser.Sprite);

InstructionsPanel.ANIM_DURATION = 500;
var _default = InstructionsPanel;
exports.default = _default;

/***/ }),

/***/ "LwBu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var TimeController =
/*#__PURE__*/
function () {
  function TimeController(game) {
    this.game = game;
    this.timePrev = 0;
    this.timeStep = 0;
    this.timeStart = 0;
    this.timeTotal = 0;
    this.active = false;
    this.game.onPause.add(this.handleGamePaused, this);
    this.game.onResume.add(this.handleGameResumed, this);
    this.reset();
  }

  var _proto = TimeController.prototype;

  _proto.handleGamePaused = function handleGamePaused() {
    if (this.active) {
      this.timePaused = this.game.time.now;
    }
  };

  _proto.handleGameResumed = function handleGameResumed() {
    if (this.active) {
      this.timePrev += this.game.time.now - this.timePaused;
    }
  };

  _proto.reset = function reset() {
    this.timePrev = this.game.time.now;
    this.timeStep = 0;
    this.timeTotal = 0;
    this.active = false;
  };

  _proto.start = function start() {
    this.reset();
    this.active = true;
    this.timeStart = this.game.time.now;
  };

  _proto.stop = function stop() {
    this.active = false;
  };

  _proto.update = function update() {
    if (this.active === false) {
      return 0;
    } else {
      this.timeStep = this.game.time.now - this.timePrev;
      this.timePrev = this.game.time.now;
      this.timeTotal += this.timeStep;
      return this.timeStep;
    }
  } // CLEAN UP
  ;

  _proto.destroy = function destroy() {
    this.game.onPause.remove(this.handleGamePaused, this);
    this.game.onResume.remove(this.handleGameResumed, this);
    this.game = null;
    this.timePrev = null;
    this.timeStep = null;
    this.timeStart = null;
    this.timeTotal = null;
    this.active = false;
  };

  return TimeController;
}();

exports.default = TimeController;

/***/ }),

/***/ "MDgj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Title = _interopRequireDefault(__webpack_require__("0kin"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var AppConstants = _interopRequireWildcard(__webpack_require__("zgbH"));

var _Text = __webpack_require__("NfmA");

var HudRotateScreen =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudRotateScreen, _Phaser$Group);

  function HudRotateScreen(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Group.call(this, game) || this;
    _this.game = game;
    _this.background = _this.game.make.sprite(0, 0, 'rotate', 'rotate_screen_bg.jpg');
    _this.background.inputEnabled = true;

    _this.add(_this.background);

    _this.iconNo = _this.game.make.sprite(0, 0, 'rotate', 'icon_no.png');

    _this.iconNo.anchor.set(0.5);

    _this.iconNo.scale.set(0.5);

    _this.add(_this.iconNo);

    _this.iconRotate = _this.game.make.sprite(0, 0, 'rotate', 'icon_rotate.png');

    _this.iconRotate.anchor.set(0.5, 0);

    _this.iconRotate.scale.set(0.5);

    _this.add(_this.iconRotate);

    _this.iconYes = _this.game.make.sprite(0, 0, 'rotate', 'icon_yes.png');

    _this.iconYes.anchor.set(0.5);

    _this.iconYes.scale.set(0.5);

    _this.add(_this.iconYes);

    _this.apple = _this.game.make.sprite(0, 0, 'rotate', 'rotate_apple.png');

    _this.apple.anchor.set(1, 0.5);

    _this.apple.scale.set(0.5);

    _this.add(_this.apple);

    _this.onion = _this.game.make.sprite(0, 0, 'rotate', 'rotate_onion.png');

    _this.onion.anchor.set(0, 0.5);

    _this.onion.scale.set(0.5);

    _this.add(_this.onion); // positioning


    _this.game.scale.onSizeChange.add(_this.handleScreenResize, (0, _assertThisInitialized2.default)(_this));

    _this.handleScreenResize();

    return _this;
  }

  var _proto = HudRotateScreen.prototype;

  _proto.handleScreenResize = function handleScreenResize() {
    // this.container.x = this.game.width * 0.5 - this.background.width;
    // this.container.y = this.game.height * 0.5 - this.background.height;
    this.iconNo.position.set(this.game.width * 0.5, this.game.height * 0.25);
    this.iconRotate.position.set(this.game.width * 0.5, this.game.height * 0.5);
    this.iconYes.position.set(this.game.width * 0.5, this.game.height * 0.75);
    this.apple.position.set(this.game.width, this.game.height * 0.25);
    this.onion.position.set(0, this.game.height * 0.6);
    this.background.width = this.game.width;
    this.background.height = this.game.height;
  };

  /*
  ============================================================================================
    TOODLES!
  ============================================================================================
  */
  _proto.destroy = function destroy() {
    this.background.destroy(true);
    this.game.scale.onSizeChange.remove(this.handleScreenResize, this); // // nullify

    this.background = null; // // super dupa

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(HudRotateScreen, [{
    key: "height",
    get: function get() {
      return this.background.height;
    }
  }, {
    key: "width",
    get: function get() {
      return this.background.width;
    }
  }]);
  return HudRotateScreen;
}(Phaser.Group);

exports.default = HudRotateScreen;

/***/ }),

/***/ "MOQ2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Hud = _interopRequireDefault(__webpack_require__("d0OL"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var _GameSFX = __webpack_require__("QklZ");

var _AppConstants = __webpack_require__("zgbH");

var _Text = __webpack_require__("NfmA");

var CutScene =
/*#__PURE__*/
function (_Phaser$State) {
  (0, _inheritsLoose2.default)(CutScene, _Phaser$State);

  function CutScene() {
    return _Phaser$State.apply(this, arguments) || this;
  }

  var _proto = CutScene.prototype;

  _proto.init = function init() {};

  _proto.preload = function preload(game) {};

  _proto.create = function create(game) {
    this.game = game;
    this.background = this.game.make.image(0, 0, 'bg_laptop_screen');
    this.container = this.game.add.group();
    this.container.add(this.background);
    this.game.hud.activate({
      id: _Hud.default.CUTSCENE
    });
    this.createVideo();
    this.game.sounds.stopBackgroundMusic();
    this.btnSkip = new _ButtonSimple.default({
      game: this.game,
      id: 'btn_play',
      skin: 'btn_play'
    });
    this.btnSkip.anchor.set(0.5, 1);
    this.btnSkip.onInputDown.add(this.skipVideo, this);
    this.game.add.existing(this.btnSkip);
    this.game.windowEventController.handleWindowResize();
    this.game.scale.onSizeChange.add(this.positionContainer, this);
    this.positionContainer();
  };

  _proto.skipVideo = function skipVideo() {
    this.game.controller.startCharacterSelect();
    this.game.track(AppTrackingEvents.SKIP_CUTSCENE);
  };

  _proto.createVideo = function createVideo() {
    this.video = this.game.add.video('cat_intro');
    this.video.play(false);
    this.video.onComplete.add(this.onVideoEnd, this);
    this.videoImage = this.video.addToWorld(250, 89, 0, 0, 435 / 540, 435 / 540);
    this.container.addChildAt(this.videoImage, 0);
  };

  _proto.onVideoEnd = function onVideoEnd() {
    this.game.time.events.add(500, this.skipVideo, this).autoDestroy = true;
  };

  _proto.positionContainer = function positionContainer() {
    var targetScale = this.game.width / this.background.width;
    this.container.scale.set(Math.max(1, targetScale));

    if (targetScale > 1) {
      this.container.x = (this.game.width - this.background.width * targetScale) / 2;
      this.container.y = 0;
    } else {
      this.container.x = (this.game.width - this.background.width) / 2;
      this.container.y = 0;
    }

    this.btnSkip.position.set(this.game.width * 0.5, this.game.height * 0.95); // this.background.scale.set(Math.max(this.game.height / this.game.defaultHeight, this.game.width / this.game.defaultWidth));
    // this.background.position.set(0, 0);
  }
  /*
  ======================================================================================================
     START CUTSCENE
  ======================================================================================================
  */
  ;

  _proto.start = function start() {}
  /*
  ==========================================================================================================
  UPDATE
  ==========================================================================================================
  */
  ;

  _proto.update = function update(game) {}
  /*
  ======================================================================================================
     END CUTSCENE
  ======================================================================================================
  */
  ;

  _proto.shutdown = function shutdown(game) {
    this.game.scale.onSizeChange.remove(this.positionContainer, this);
    this.video.onComplete.remove(this.onVideoEnd, this);
    this.btnSkip.onInputDown.remove(this.skipVideo, this);
    this.video.destroy();
    this.videoImage.destroy();
    this.container.destroy();
    this.background.destroy();
  };

  return CutScene;
}(Phaser.State);

var _default = CutScene;
exports.default = _default;

/***/ }),

/***/ "NfmA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("AaIv");

__webpack_require__("j3Ef");

__webpack_require__("mizm");

__webpack_require__("pkSX");

__webpack_require__("3Ipg");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextField = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("fKPv"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createFontStyle = function createFontStyle(_ref) {
  var font = _ref.font,
      size = _ref.size,
      clr = _ref.clr,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  return _objectSpread({
    font: size + 'px ' + font,
    fill: clr,
    boundsAlignH: options.boundsAlignH || 'center',
    boundsAlignV: options.boundsAlignV || 'middle'
  }, options);
};

var createTextField = function createTextField(game, font, size, clr, x, y, options) {
  if (options === void 0) {
    options = {};
  }

  var style = createFontStyle({
    font: font,
    size: size,
    clr: clr,
    options: options
  });
  return game.make.text(x, y, '', style);
};

exports.createTextField = createTextField;

/***/ }),

/***/ "OiSF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _AppConstants = __webpack_require__("zgbH");

var _Text = __webpack_require__("NfmA");

var Utils = _interopRequireWildcard(__webpack_require__("hDA+"));

var ScoreDisplay =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(ScoreDisplay, _Phaser$Group);

  function ScoreDisplay(_ref) {
    var _this;

    var game = _ref.game,
        _ref$score = _ref.score,
        score = _ref$score === void 0 ? 0 : _ref$score,
        _ref$target = _ref.target,
        target = _ref$target === void 0 ? 100 : _ref$target,
        _ref$scoreColour = _ref.scoreColour,
        scoreColour = _ref$scoreColour === void 0 ? _AppConstants.FONT_COLOUR_SCORE : _ref$scoreColour,
        _ref$targetColour = _ref.targetColour,
        targetColour = _ref$targetColour === void 0 ? _AppConstants.FONT_COLOUR_SCORE_TARGET : _ref$targetColour;
    _this = _Phaser$Group.call(this, game) || this;
    _this.score = score; // add paper icon

    _this.icon = _this.game.make.sprite(0, 0, 'ui', 'icon_paper');
    _this.icon.x = 0;
    _this.icon.y = 0;

    _this.add(_this.icon); // // add main score


    _this.scoreDisplay = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 150, scoreColour);
    _this.scoreDisplay.y = _this.icon.height * 0.5 - 100;
    _this.scoreDisplay.x = _this.icon.width + 10;
    _this.scoreDisplay.text = Utils.commaNumber(score);

    _this.add(_this.scoreDisplay); //  add target score in relation to main score


    _this.scoreTargetDisplay = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 55, targetColour);
    _this.scoreTargetDisplay.text = '/ ' + target;
    _this.scoreTargetDisplay.x = _this.scoreDisplay.x + _this.scoreDisplay.width + 10;
    _this.scoreTargetDisplay.y = _this.scoreDisplay.y + 70;

    _this.add(_this.scoreTargetDisplay);

    _this.onUpdate = new Phaser.Signal();
    _this.onAnimatedScoreComplete = new Phaser.Signal();
    _this.onAnimatedScoreUpdated = new Phaser.Signal();
    return _this;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */


  var _proto = ScoreDisplay.prototype;

  /*
  ============================================================================================
    SETTER
  ============================================================================================
  */
  _proto.setScore = function setScore(value) {
    this.score = value;
    this.setScoreDisplayText(this.score);
  };

  _proto.animateScore = function animateScore(from, targetScore) {
    this.animatedScoreTarget = from;
    var tween = this.game.add.tween(this).to({
      animatedScoreTarget: targetScore
    }, 1000, Phaser.Easing.Exponential.Out, true);
    tween.onUpdateCallback(this.handleAnimatedScoreUpdate, this);
    tween.onComplete.addOnce(this.handleAnimatedScoreComplete, this);
  };

  _proto.handleAnimatedScoreUpdate = function handleAnimatedScoreUpdate() {
    this.setScoreDisplayText(Math.ceil(this.animatedScoreTarget));
    this.onAnimatedScoreUpdated.dispatch();
  };

  _proto.handleAnimatedScoreComplete = function handleAnimatedScoreComplete() {
    this.setScoreDisplayText(Math.ceil(this.animatedScoreTarget));
    this.onAnimatedScoreComplete.dispatch();
  };

  _proto.setScoreDisplayText = function setScoreDisplayText(value) {
    this.scoreDisplay.text = Utils.commaNumber(value);
    this.scoreTargetDisplay.x = this.scoreDisplay.x + this.scoreDisplay.width + 10;
  }
  /*
  ============================================================================================
    TOODLES
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    // destroy stuff - it's therapudic
    this.icon.destroy(true);
    this.scoreDisplay.destroy(true);
    this.scoreTargetDisplay.destroy(true); // nullify it - GC flag :)

    this.icon = null;
    this.scoreDisplay = null;
    this.scoreTargetDisplay = null; // super!!!!!

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(ScoreDisplay, [{
    key: "width",
    get: function get() {
      return this.scoreTargetDisplay.x + this.scoreTargetDisplay.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.scoreDisplay.height;
    }
  }]);
  return ScoreDisplay;
}(Phaser.Group);

exports.default = ScoreDisplay;

/***/ }),

/***/ "PC9B":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var CircleMaskReveal =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(CircleMaskReveal, _Phaser$Group);

  function CircleMaskReveal(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Group.call(this, game) || this;
    _this.background = _this.game.make.image(0, 0, 'bg_generic');

    _this.add(_this.background);

    _this.maskp = _this.game.add.graphics();

    _this.maskp.beginFill(0x000000, 1);

    _this.maskp.drawCircle(0, 0, 10);

    _this.maskp.endFill();

    _this.maskp.anchor.set(0.5);

    _this.maskp.position.set(_this.game.width * 0.5, _this.game.height * 0.5);

    _this.addChild(_this.maskp);

    _this.background.mask = _this.maskp;
    _this.maskp.diameter = 1;
    _this.onInComplete = new Phaser.Signal();
    _this.onOutComplete = new Phaser.Signal();
    return _this;
  }

  var _proto = CircleMaskReveal.prototype;

  _proto.init = function init() {};

  _proto.startIn = function startIn() {
    var _this2 = this;

    var track = {
      step: 0
    };
    var tween = this.game.add.tween(track).to({
      step: 1280
    }, 1250, Phaser.Easing.Circular.Out);
    tween.onUpdateCallback(function () {
      _this2.maskp.beginFill(0x000000, 0);

      _this2.maskp.drawCircle(0, 0, track.step);

      _this2.maskp.endFill();
    });
    tween.start();
    tween.onComplete.addOnce(this.startInComplete, this); //
    // this.tween = this.game.add
    //   .tween(this.maskp)
    //   .to({ diameter: 1280 }, 1250, Phaser.Easing.Circular.Out, true);
    // this.tween.onComplete.addOnce(this.startInComplete, this);
  };

  _proto.startInComplete = function startInComplete() {
    this.onInComplete.dispatch(this);
  };

  _proto.startOut = function startOut() {
    var _this3 = this;

    var track = {
      step: 0
    };
    var tween = this.game.add.tween(track).to({
      step: 1280
    }, 1250, Phaser.Easing.Circular.In);
    tween.onUpdateCallback(function () {
      _this3.maskp.clear();

      _this3.maskp.beginFill(0x000000, 0);

      _this3.maskp.drawCircle(0, 0, 1280 - track.step);

      _this3.maskp.endFill();
    });
    tween.start();
    tween.onComplete.addOnce(this.startOutComplete, this); // this.tween = this.game.add
    //   .tween(this.maskp)
    //   .to({ diameter: 1 }, 1250, Phaser.Easing.Circular.In, true);
    // this.tween.onComplete.addOnce(this.startOutComplete, this);
  };

  _proto.startOutComplete = function startOutComplete() {
    this.onOutComplete.dispatch(this);
  };

  _proto.destroy = function destroy(destroyChildren, soft) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    this.onInComplete.forget();
    this.onInComplete.dispose();
    this.onInComplete.removeAll();
    this.onOutComplete.forget();
    this.onOutComplete.dispose();
    this.onOutComplete.removeAll();
    this.background = null;
    this.maskp = null;

    _Phaser$Group.prototype.destroy.call(this, destroyChildren);
  };

  return CircleMaskReveal;
}(Phaser.Group);

var _default = CircleMaskReveal;
exports.default = _default;

/***/ }),

/***/ "Pqsl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppConstants = __webpack_require__("zgbH");

var _default = {
  type: Phaser.CANVAS,
  parent: _AppConstants.GAME_DIV_ID,
  width: _AppConstants.GAME_WIDTH_DEFAULT,
  height: _AppConstants.GAME_HEIGHT_DEFAULT
};
exports.default = _default;

/***/ }),

/***/ "QklZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GAME_SFX_INSTRUCTION_WOOSH = exports.GAME_SFX_CLICK_SELECT = exports.GAME_SFX_GAME_COMPLETE = exports.GAME_SFX_MUSICAL_MOMENT = exports.GAME_SFX_PATTY = exports.GAME_SFX_ONION_WIN = exports.GAME_SFX_APPLE_WIN = exports.GAME_SFX_COLLISION = exports.GAME_SFX_FOOTSTEPS = exports.GAME_SFX_ONION_LOSE = exports.GAME_SFX_APPLE_LOSE = exports.GAME_SFX_ONION_SELECT = exports.GAME_SFX_APPLE_SELECT = exports.UI_SFX_BUTTON = exports.GAME_MUSIC = exports.BACKGROUND_MUSIC = exports.GAME_SFX_BASE = void 0;

/**
 * AUDIOSPRITE DEFINITIONS
 */
var GAME_SFX_BASE = 'games_sfx_base';
exports.GAME_SFX_BASE = GAME_SFX_BASE;
var BACKGROUND_MUSIC = 'title_music';
exports.BACKGROUND_MUSIC = BACKGROUND_MUSIC;
var GAME_MUSIC = 'bg_music';
/**
 * UI SFX
 */

exports.GAME_MUSIC = GAME_MUSIC;
var UI_SFX_BUTTON = 'click_mouse_over';
exports.UI_SFX_BUTTON = UI_SFX_BUTTON;
var GAME_SFX_APPLE_SELECT = 'apple_chosen';
exports.GAME_SFX_APPLE_SELECT = GAME_SFX_APPLE_SELECT;
var GAME_SFX_ONION_SELECT = 'onion_chosen';
exports.GAME_SFX_ONION_SELECT = GAME_SFX_ONION_SELECT;
var GAME_SFX_APPLE_LOSE = 'apple_lose';
exports.GAME_SFX_APPLE_LOSE = GAME_SFX_APPLE_LOSE;
var GAME_SFX_ONION_LOSE = 'onion_lose';
exports.GAME_SFX_ONION_LOSE = GAME_SFX_ONION_LOSE;
var GAME_SFX_FOOTSTEPS = 'footsteps';
exports.GAME_SFX_FOOTSTEPS = GAME_SFX_FOOTSTEPS;
var GAME_SFX_COLLISION = 'collision_trolley';
exports.GAME_SFX_COLLISION = GAME_SFX_COLLISION;
var GAME_SFX_APPLE_WIN = 'apple_yeah';
exports.GAME_SFX_APPLE_WIN = GAME_SFX_APPLE_WIN;
var GAME_SFX_ONION_WIN = 'onion_chaching';
exports.GAME_SFX_ONION_WIN = GAME_SFX_ONION_WIN;
var GAME_SFX_PATTY = 'patty_soproud';
exports.GAME_SFX_PATTY = GAME_SFX_PATTY;
var GAME_SFX_MUSICAL_MOMENT = 'musical_moment';
exports.GAME_SFX_MUSICAL_MOMENT = GAME_SFX_MUSICAL_MOMENT;
var GAME_SFX_GAME_COMPLETE = 'game_complete';
exports.GAME_SFX_GAME_COMPLETE = GAME_SFX_GAME_COMPLETE;
var GAME_SFX_CLICK_SELECT = 'click_mouse_over';
exports.GAME_SFX_CLICK_SELECT = GAME_SFX_CLICK_SELECT;
var GAME_SFX_INSTRUCTION_WOOSH = 'INSTRUCTION_WOOSH';
exports.GAME_SFX_INSTRUCTION_WOOSH = GAME_SFX_INSTRUCTION_WOOSH;

/***/ }),

/***/ "ReeY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("AaIv");

__webpack_require__("j3Ef");

__webpack_require__("mizm");

__webpack_require__("pkSX");

__webpack_require__("3Ipg");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("fKPv"));

var _LevelModel = _interopRequireDefault(__webpack_require__("ut2f"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ConfigModel =
/*#__PURE__*/
function () {
  function ConfigModel(_ref) {
    var game = _ref.game,
        data = _ref.config;
    this.data = _objectSpread({}, data); // phaser has it's own config
    // for (let i in this.game.config) {
    //   this[i] = this.game.config[i];
    // }

    this.allow_game_logs = true;
    this.game = this.data.game;
    this.show_rotate_screen = this.game.show_rotate_screen;
    this.start_at_level = this.game.start_at_level;
    this.invincible_mode = false;
    this.audio = this.data.audio;
    this.audioIE = this.data.audioIE;
    this.audioSprites = this.data.audioSprites;
    this.screenhud = this.data.screenhud;
    this.buttons = this.data.buttons;
    this.levels = [];
    this.levels = this.data.game_levels.reduce(function (arr, level) {
      arr.push(new _LevelModel.default({
        game: game,
        config: level
      }));
      return arr;
    }, []);
    this.vehicleBounds = [];
    this.vehicleBounds = this.data.vehicleBounds.reduce(function (arr, vehicle) {
      var bounds = _objectSpread({}, vehicle);

      arr.push(bounds);
      return arr;
    }, []);

    if (false) {}
  }

  var _proto = ConfigModel.prototype;

  _proto.getIntroMessageById = function getIntroMessageById(id) {
    return this.introMessages[id];
  };

  _proto.getLevelData = function getLevelData(level) {
    return this.levels[level - 1];
  };

  _proto.getLevelCount = function getLevelCount() {
    return this.levels.length;
  };

  _proto.getVehicleBounds = function getVehicleBounds(vehicleID) {
    var bounds = {};
    this.vehicleBounds.forEach(function (element) {
      if (element.id === vehicleID) {
        bounds = element['bounds'];
      }
    });
    return bounds;
  };

  return ConfigModel;
}();

var _default = ConfigModel;
exports.default = _default;

/***/ }),

/***/ "TSJq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppConstants = __webpack_require__("zgbH");

var AppUrls =
/*#__PURE__*/
function () {
  function AppUrls(game) {
    this.game = game;
  } // get main directory


  var _proto = AppUrls.prototype;

  _proto.getBaseDirectory = function getBaseDirectory() {
    return _AppConstants.PATH_BASE;
  } // resolves relativly given url
  ;

  _proto.resolveRelatveUrl = function resolveRelatveUrl(path) {
    return this.getBaseDirectory() + path;
  } // get the root of the assets folder, pass in relative url for extended path
  ;

  _proto.getAssetsDirectory = function getAssetsDirectory(url_suffix) {
    return url_suffix ? this.resolveRelatveUrl(_AppConstants.PATH_ASSETS + url_suffix) : this.resolveRelatveUrl(_AppConstants.PATH_ASSETS);
  };

  _proto.getFontsDirectory = function getFontsDirectory(url_suffix) {
    return this.getAssetsDirectory('fonts/' + url_suffix);
  };

  return AppUrls;
}();

exports.default = AppUrls;

/***/ }),

/***/ "U3nP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _AppConstants = __webpack_require__("zgbH");

var Row =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(Row, _Phaser$Group);

  function Row(_ref) {
    var _this;

    var game = _ref.game,
        rowNum = _ref.rowNum;
    _this = _Phaser$Group.call(this, game) || this;
    _this.game = game;
    _this.cellsInRow = _AppConstants.GAME_ROAD_WIDTH / _AppConstants.GAME_GRID_SIZE | 0;
    _this.cells = [];

    for (var i = 0; i < _this.cellsInRow; i++) {
      _this.cells[i] = 0;
    }

    _this.rowNum = rowNum;
    _this.rowPosY = _this.game.sceneHeight - 44;
    _this.rowPosY -= _this.rowNum * _AppConstants.GAME_LANE_HEIGHT;
    _this.y = _this.rowPosY;
    return _this;
  } //Updates the movement of each car in the row every frame


  var _proto = Row.prototype;

  _proto.step = function step(timeStep) {};

  _proto.stopAnims = function stopAnims() {};

  _proto.startAnims = function startAnims() {};

  _proto.gridToPos = function gridToPos(x) {
    var x1 = _AppConstants.GAME_GRID_START_X + (x + 0.5) * _AppConstants.GAME_GRID_SIZE;
    var y1 = this.rowPosY;
    return {
      x: x1,
      y: y1
    };
  };

  _proto.posToGrid = function posToGrid() {
    var x1 = Math.floor((x - _AppConstants.GAME_GRID_START_X) / _AppConstants.GAME_GRID_SIZE - 0.5);
    var y1 = this.rowNum;
    return {
      x: x1,
      y: y1
    };
  };

  _proto.getMidGrid = function getMidGrid() {
    return Math.floor(this.cellsInRow / 2);
  };

  _proto.gridPosMiddle = function gridPosMiddle() {
    var x1 = _AppConstants.GAME_GRID_START_X + (this.getMidGrid() + 0.5) * _AppConstants.GAME_GRID_SIZE;

    var y1 = this.rowPosY;
    return {
      x: x1,
      y: y1
    };
  };

  _proto.getColliders = function getColliders() {
    return [];
  };

  return Row;
}(Phaser.Group);

exports.default = Row;

/***/ }),

/***/ "U8x9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var ScrollingTiledSprites =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(ScrollingTiledSprites, _Phaser$Group);

  function ScrollingTiledSprites(_ref) {
    var _this;

    var game = _ref.game,
        spritesheet = _ref.spritesheet,
        tiles = _ref.tiles,
        offset = _ref.offset,
        decorations = _ref.decorations,
        minHeight = _ref.minHeight,
        maxHeight = _ref.maxHeight,
        _ref$flipTile = _ref.flipTile,
        flipTile = _ref$flipTile === void 0 ? false : _ref$flipTile,
        _ref$anchor = _ref.anchor,
        anchor = _ref$anchor === void 0 ? {
      x: 0,
      y: 0
    } : _ref$anchor;
    _this = _Phaser$Group.call(this, game) || this;
    _this.spritesheet = spritesheet;
    _this.decorations = decorations;
    _this.tiles = tiles;
    _this.offset = offset || {
      x: 0,
      y: 0
    };
    _this.minHeight = minHeight;
    _this.maxHeight = maxHeight;
    _this.tilesActive = [];
    _this.tilesPool = [];
    _this.decorationPool = [];
    _this.tileAnchor = anchor;
    _this.flipTile = flipTile;

    _this.fillContent(_this.maxHeight);

    return _this;
  }

  var _proto = ScrollingTiledSprites.prototype;

  _proto.fillContent = function fillContent(startY) {
    // rab the starting position
    var initY = startY; //  we build upward

    while (initY > 0) {
      // generate a random tile
      var tile = this.generateTile(); // position the tile, offsetting by tileheight

      tile.y = initY + this.offset.y - tile.height;
      tile.x = this.offset.x;

      if (this.flipTile) {
        tile.scale.set(-1, 1);
        tile.x += Math.abs(tile.width);
      } // add to active array


      this.tilesActive.push(tile); // add to display - force to back layer

      this.addAt(tile, 0); // update position

      initY = tile.y;
    }
  };

  _proto.generateTile = function generateTile() {
    // grab an pooled tile if possible, else create a new one
    var tile = this.tilesPool.shift() || this.game.make.image(); // apply random texture

    this.randomlyDecorateSprite(tile, this.tiles); // anchor tile to requirements

    tile.anchor.set(this.tileAnchor.x, this.tileAnchor.y); // if tile decorations are an option

    if (this.decorations && this.decorations.length > 0 && Math.random() > 0.5) {
      // grab from pool or generate new
      var decorationSprite = this.decorationPool.shift() || this.game.make.image(); // apply random texture

      this.randomlyDecorateSprite(decorationSprite, this.decorations); // position in semi-random oplace on tile

      decorationSprite.y = Math.random() > 0.5 ? tile.height * 0.25 : tile.y * 0.75;
      decorationSprite.x = tile.width * (tile.anchor.x * -1); // add decoration to tile

      tile.decoration = decorationSprite;
      tile.addChild(decorationSprite);
    } // return result


    return tile;
  };

  _proto.randomlyDecorateSprite = function randomlyDecorateSprite(sprite, options) {
    var option = options[Math.floor(Math.random() * options.length)];
    sprite.loadTexture(this.spritesheet, option);
    return sprite;
  };

  _proto.updateScoll = function updateScoll(distance) {
    var _this2 = this;

    // track where the top tile lies
    var minY = false; // reduce tiles active, taing out any expired tiles

    this.tilesActive = this.tilesActive.reduce(function (arr, tile) {
      // increment tile position
      tile.y += distance; // if tile is out of view

      if (tile.y > _this2.maxHeight) {
        // remove and pool tile
        _this2.clearTile(tile);
      } else {
        // otherwise push back into array for return
        arr.push(tile);
      } // update min Y


      if (minY === false || tile.y < minY) {
        minY = tile.y;
      }

      return arr;
    }, []); // populate content

    if (minY) {
      this.fillContent(minY);
    }
  };

  _proto.clearTile = function clearTile(tile) {
    if (tile.decoration) {
      // clean up tile decoration if it exists
      this.decorationPool.push(tile.decoration);
      tile.removeChild(tile.decoration);
      tile.decoration = false;
    } // clean up tile


    this.remove(tile);
    this.tilesPool.push(tile);
  };

  return ScrollingTiledSprites;
}(Phaser.Group);

exports.default = ScrollingTiledSprites;

/***/ }),

/***/ "VawD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _AppConstants = __webpack_require__("zgbH");

var WebFont = _interopRequireWildcard(__webpack_require__("tp+U"));

var Boot =
/*#__PURE__*/
function (_Phaser$State) {
  (0, _inheritsLoose2.default)(Boot, _Phaser$State);

  function Boot() {
    return _Phaser$State.apply(this, arguments) || this;
  }

  var _proto = Boot.prototype;

  _proto.preload = function preload(game) {
    this.fontsReady = false;
    this.loadComplete = false; // game assets

    game.load.baseURL = this.game.urls.getAssetsDirectory();
    game.load.crossOrigin = 'anonymous';
    game.load.pack('boot', 'assetpack.json', null, this);
    WebFont.load({
      custom: {
        families: [_AppConstants.FONT_TITLE],
        urls: [this.game.urls.getFontsDirectory(_AppConstants.FONT_TITLE_CSS)]
      },
      active: this.fontsLoaded.bind(this),
      inactive: this.fontsLoaded.bind(this)
    });
    this.game = game;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.disableVisibilityChange = true;
    game.scale.forceOrientation(true, false);
    this.firstRunPortrait = game.scale.isGamePortrait;
    game.add.plugin(PhaserSpine.SpinePlugin);
  };

  _proto.fontsLoaded = function fontsLoaded() {
    this.fontsReady = true;
  };

  _proto.create = function create(game) {
    this.stage.backgroundColor = _AppConstants.GAME_BACKGROUND_COLOR;
    this.loadComplete = true;
  };

  _proto.update = function update(game) {
    this.checkLoading(game);
  };

  _proto.checkLoading = function checkLoading(game) {
    if (this.loadComplete && this.fontsReady) {
      game.addCopy(this.game.cache.getXML('copy_xml'));
      game.controller.startLoad();
    }
  };

  return Boot;
}(Phaser.State);

var _default = Boot;
exports.default = _default;

/***/ }),

/***/ "Vzqp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Title = _interopRequireDefault(__webpack_require__("0kin"));

var _ScoreDisplay = _interopRequireDefault(__webpack_require__("OiSF"));

var _HighScoreDisplay = _interopRequireDefault(__webpack_require__("07gj"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var AppConstants = _interopRequireWildcard(__webpack_require__("zgbH"));

var _Text = __webpack_require__("NfmA");

var HudGameIntro =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudGameIntro, _Phaser$Group);

  function HudGameIntro(_ref) {
    var _this;

    var game = _ref.game,
        message = _ref.message,
        _ref$onClose = _ref.onClose,
        onClose = _ref$onClose === void 0 ? false : _ref$onClose,
        _ref$onCloseScope = _ref.onCloseScope,
        onCloseScope = _ref$onCloseScope === void 0 ? false : _ref$onCloseScope;
    _this = _Phaser$Group.call(this, game) || this;

    var messageData = _this.game.controller.config.getIntroMessageById(message);

    _this.background = new _BackgroundColourFill.default({
      game: game,
      colour: '#000000',
      alpha: 0.3
    });

    _this.add(_this.background); // container to house and position contents


    _this.container = _this.game.make.group();

    _this.add(_this.container); // baking panel


    _this.panel = _this.game.make.image(0, 0, 'ui', 'panel_generic');

    _this.container.add(_this.panel); // // add main score


    _this.copy = (0, _Text.createTextField)(_this.game, AppConstants.FONT_COPY, 27, AppConstants.FONT_COLOUR_CREDITS);
    _this.copy.text = _this.game.copy.getCopy('developed_by').toUpperCase();
    _this.copy.y = 50;
    _this.copy.x = _this.panel.width * 0.5 - _this.copy.width * 0.5;

    _this.container.add(_this.copy); // add logo


    _this.logo = _this.game.make.image(0, 0, 'logo_jollywise');

    _this.logo.anchor.set(0.5, 0);

    _this.logo.x = _this.panel.width / 2;
    _this.logo.y = _this.copy.y + _this.copy.height;

    _this.container.add(_this.logo); // credits button


    _this.btnClose = new _ButtonSimple.default({
      game: _this.game,
      id: 'btn_continue',
      skin: 'btn_close'
    });
    _this.btnClose.y = 0;
    _this.btnClose.x = _this.panel.width * 0.92;

    _this.btnClose.onInputDown.add(_this.handleClose, (0, _assertThisInitialized2.default)(_this));

    _this.container.addChild(_this.btnClose); // and we adjust the height of the panel to suit


    _this.panel.height = _this.logo.y + _this.logo.height + 100; // positioning

    _this.game.scale.onSizeChange.add(_this.handleScreenResize, (0, _assertThisInitialized2.default)(_this));

    _this.fixedToCamera = true;

    _this.handleScreenResize();

    return _this;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */


  var _proto = HudGameIntro.prototype;

  /*
  ============================================================================================
    EVENT HANDLERS
  ============================================================================================
  */
  _proto.handleScreenResize = function handleScreenResize() {
    this.container.x = this.game.width * 0.5 - this.width * 0.5;
    this.container.y = this.game.height * 0.5 - this.height * 0.5;
  };

  _proto.handleClose = function handleClose() {
    this.game.controller.closeGameCredits();
  }
  /*
  ============================================================================================
    TOODLES!
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    // clear listeners
    this.game.scale.onSizeChange.remove(this.handleScreenResize, this);
    this.btnClose.onInputDown.remove(this.handleClose, this); // destroy stuff

    this.btnClose.destroy(true);
    this.logo.destroy(true);
    this.panel.destroy(true);
    this.container.destroy(true); // nullify

    this.btnClose = null;
    this.logo = null;
    this.panel = null;
    this.container = null; // super dupa

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(HudGameIntro, [{
    key: "height",
    get: function get() {
      return this.panel.height + this.panel.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.panel.width;
    }
  }]);
  return HudGameIntro;
}(Phaser.Group);

exports.default = HudGameIntro;

/***/ }),

/***/ "WlCB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("3Ss1");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Row2 = _interopRequireDefault(__webpack_require__("U3nP"));

var _Shelf = _interopRequireDefault(__webpack_require__("FyYt"));

var _Obstacle = _interopRequireDefault(__webpack_require__("nD4D"));

var _AppConstants = __webpack_require__("zgbH");

var RowShelves =
/*#__PURE__*/
function (_Row) {
  (0, _inheritsLoose2.default)(RowShelves, _Row);

  function RowShelves(_ref) {
    var _this;

    var game = _ref.game,
        rowNum = _ref.rowNum,
        shelfGroup = _ref.shelfGroup;
    _this = _Row.call(this, {
      game: game,
      rowNum: rowNum
    }) || this; //

    _this.obstacles = []; // add shelves

    _this.createShelves(shelfGroup);

    return _this;
  }
  /*
  ====================================================================================
    SHELVES
  ====================================================================================
  */


  var _proto = RowShelves.prototype;

  _proto.addRandomItem = function addRandomItem(item) {
    console.log('RowShelves.addRandomItem', item);
    var shelf = this.shelfs[this.game.rnd.integerInRange(0, this.shelfs.length - 1)];
    shelf.addRandomItem(item);
  };

  _proto.createShelves = function createShelves(shelfGroup) {
    var type = this.game.rnd.integerInRange(0, 3);

    switch (type) {
      case 0:
        this.createShelvesBB(shelfGroup);
        break;

      case 1:
        this.createShelvesBSB(shelfGroup);
        break;

      case 2:
        this.createShelvesBBB(shelfGroup);
        break;

      case 3:
        this.createShelvesBBCenter(shelfGroup);
        break;
    }
  };

  _proto.createShelvesBBCenter = function createShelvesBBCenter(shelfGroup) {
    var gx1 = this.game.rnd.integerInRange(3, 4);
    var shelf1 = new _Shelf.default({
      game: this.game,
      gx: gx1,
      size: 3,
      row: this,
      shelfType: shelfGroup[0]
    });
    shelf1.x = this.gridToPos(gx1).x;
    this.addChild(shelf1);
    var gx2 = gx1 + 3;
    var shelf2 = new _Shelf.default({
      game: this.game,
      gx: gx2,
      size: 3,
      row: this,
      shelfType: shelfGroup[1]
    });
    shelf2.x = this.gridToPos(gx2).x;
    this.addChild(shelf2);
    this.shelfs = [shelf1, shelf2]; //

    this.createObstacles(1);
  };

  _proto.createShelvesBB = function createShelvesBB(shelfGroup) {
    var gx1 = this.game.rnd.integerInRange(2, 3);
    var shelf1 = new _Shelf.default({
      game: this.game,
      gx: gx1,
      size: 3,
      row: this,
      shelfType: shelfGroup[0]
    });
    shelf1.x = this.gridToPos(gx1).x;
    this.addChild(shelf1);
    var gx2 = this.game.rnd.integerInRange(gx1 + 4, this.cellsInRow - 3);
    var shelf2 = new _Shelf.default({
      game: this.game,
      gx: gx2,
      size: 3,
      row: this,
      shelfType: shelfGroup[1]
    });
    shelf2.x = this.gridToPos(gx2).x;
    this.addChild(shelf2);
    this.shelfs = [shelf1, shelf2]; //

    this.createObstacles(2);
  };

  _proto.createShelvesBSB = function createShelvesBSB(shelfGroup) {
    var gx1 = this.game.rnd.integerInRange(-1, 0);
    var shelf1 = new _Shelf.default({
      game: this.game,
      gx: gx1,
      size: 3,
      row: this,
      shelfType: shelfGroup[0]
    });
    shelf1.x = this.gridToPos(gx1).x;
    this.addChild(shelf1);
    var gx2 = this.game.rnd.integerInRange(gx1 + 3, gx1 + 5);
    var shelf2 = new _Shelf.default({
      game: this.game,
      gx: gx2,
      size: 1,
      row: this,
      shelfType: shelfGroup[1]
    });
    shelf2.x = this.gridToPos(gx2).x;
    this.addChild(shelf2);
    var gx3 = this.game.rnd.integerInRange(gx2 + 3, this.cellsInRow);
    var shelf3 = new _Shelf.default({
      game: this.game,
      gx: gx3,
      size: 3,
      row: this,
      shelfType: shelfGroup[2]
    });
    shelf3.x = this.gridToPos(gx3).x;
    this.addChild(shelf3);
    this.shelfs = [shelf1, shelf2, shelf3]; //

    this.createObstacles(1);
  };

  _proto.createShelvesBBB = function createShelvesBBB(shelfGroup) {
    var gx1 = this.game.rnd.integerInRange(-1, 0);
    var shelf1 = new _Shelf.default({
      game: this.game,
      gx: gx1,
      size: 3,
      row: this,
      shelfType: shelfGroup[0]
    });
    shelf1.x = this.gridToPos(gx1).x;
    this.addChild(shelf1);
    var gx2 = this.game.rnd.integerInRange(gx1 + 4, gx1 + 6);
    var shelf2 = new _Shelf.default({
      game: this.game,
      gx: gx2,
      size: 3,
      row: this,
      shelfType: shelfGroup[1]
    });
    shelf2.x = this.gridToPos(gx2).x;
    this.addChild(shelf2);
    var gx3 = this.game.rnd.integerInRange(this.cellsInRow - 1, this.cellsInRow);
    var shelf3 = new _Shelf.default({
      game: this.game,
      gx: gx3,
      size: 3,
      row: this,
      shelfType: shelfGroup[2]
    });
    shelf3.x = this.gridToPos(gx3).x;
    this.addChild(shelf3);
    this.shelfs = [shelf1, shelf2, shelf3]; //

    this.createObstacles(1);
  }
  /*
  ====================================================================================
    OBSTACLES
  ====================================================================================
  */
  ;

  _proto.createObstacles = function createObstacles(amount) {
    if (amount === void 0) {
      amount = 1;
    }

    // find all free places
    var free = [];

    for (var i = 0; i < this.cellsInRow; i++) {
      if (this.cells[i] == 0) {
        free.push(i);
      }
    } // draw free place and place obstacle


    for (var _i = 0; _i < amount; _i++) {
      var ind = this.game.rnd.integerInRange(0, free.length - 1);
      var gx = free.splice(ind, 1)[0];
      var type = this.game.rnd.integerInRange(0, 6);
      var obstacle = new _Obstacle.default({
        game: this.game,
        type: type,
        row: this
      });
      obstacle.x = this.gridToPos(gx).x;
      this.addChild(obstacle);
      this.obstacles.push(obstacle); // mark as full cell

      this.cells[gx] = 1;
    }
  }
  /*
  ====================================================================================
    OVERLOAD
  ====================================================================================
  */
  ;

  _proto.getColliders = function getColliders() {
    return []; //this.obstacles;
  };

  return RowShelves;
}(_Row2.default);

exports.default = RowShelves;

/***/ }),

/***/ "WtpM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Hud = _interopRequireDefault(__webpack_require__("d0OL"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _AppConstants = __webpack_require__("zgbH");

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var Welcome =
/*#__PURE__*/
function (_Phaser$State) {
  (0, _inheritsLoose2.default)(Welcome, _Phaser$State);

  function Welcome() {
    return _Phaser$State.apply(this, arguments) || this;
  }

  var _proto = Welcome.prototype;

  _proto.init = function init(game) {};

  _proto.preload = function preload(game) {};

  _proto.create = function create(game) {
    this.game = game;
    this.background = this.game.make.image(0, 0, 'bg_welcome');
    this.background.anchor.set(0.5, 0.5);
    this.game.add.existing(this.background);
    this.container = this.game.add.group();
    this.logo = this.game.make.image(0, 0, 'logo_game');
    this.logo.anchor.set(0.5);
    this.logo.position.set(this.game.defaultWidth * 0.5, 87);

    if (settings.tune_in_image != '') {
      this.tunein = this.game.make.image(0, 0, 'ui', settings.tune_in_image);
      this.tunein.anchor.set(1);
      this.tunein.position.set(this.game.defaultWidth - (this.game.defaultWidth - this.game.width) / 2 - 40, this.game.defaultHeight - 70);
    }

    this.createCharacters();
    this.bgFront = this.game.make.image(0, this.background.height / 2, 'bg_welcome_front');
    this.bgFront.anchor.set(0.5, 1);
    this.background.addChild(this.bgFront);
    this.btnPlay = new _ButtonSimple.default({
      game: this.game,
      id: 'btn_play',
      skin: 'btn_play'
    });
    this.btnPlay.anchor.set(0.5);
    this.btnPlay.x = this.game.defaultWidth * 0.5;
    this.btnPlay.y = this.game.defaultHeight * 0.75;
    this.btnPlay.onInputDown.add(this.handlePlayGame, this);
    this.container.add(this.btnPlay);
    this.game.windowEventController.handleWindowResize();
    this.game.scale.onSizeChange.add(this.positionContainer, this);
    this.positionContainer();
    this.game.add.existing(this.container);
    this.game.hud.activate({
      id: _Hud.default.WELCOME
    });
    this.game.hud.fadeIn();
    this.container.add(this.logo);

    if (this.tunein) {
      this.container.add(this.tunein);
    }

    this.game.sounds.playBackgroundMusic();
    this.state = Welcome.STATE_SPAWN;
    this.waitTime = 0;
    this.timer = 0;
    this.paused = false;
    this.game.controller.gameModel.warningComplete = false;
    this.game.controller.gameModel.tutorialComplete = false;

    if (!Phaser.Device.desktop) {//this.bindedHandleFullscreenRequest = this.handleRequestFullscreen.bind(this);
      //this.game.canvas.addEventListener('click', this.bindedHandleFullscreenRequest);
    }
  };

  _proto.handleRequestFullscreen = function handleRequestFullscreen() {
    this.game.scale.startFullScreen(false);
    this.game.aspectController.updateGameSize();
    this.game.canvas.removeEventListener('click', this.bindedHandleFullscreenRequest);
  };

  _proto.createCharacters = function createCharacters() {
    this.apple = this.game.make.spine(0, 0, 'appleWalks');
    this.apple.anchor.set(0.5, 1);
    this.apple.setAnimationByName(0, 'run_side', true);
    this.apple.position.set(-this.background.width / 2 - 500, 575 - this.background.height / 2);
    this.background.addChild(this.apple);
    this.onion = this.game.add.spine(0, 0, 'onionWalks');
    this.onion.anchor.set(0.5, 1);
    this.onion.setAnimationByName(0, 'run_side', true);
    this.onion.position.set(-this.background.width / 2 - 500, 565 - this.background.height / 2);
    this.background.addChild(this.onion); // PhaserSpine.SpinePlugin.DEBUG = true;
  };

  _proto.positionContainer = function positionContainer() {
    var x = (this.game.width - this.game.defaultWidth) * 0.5;
    var y = 0;
    var sx = this.game.width / this.game.defaultWidth;
    var sy = this.game.height / this.game.defaultHeight;
    var scale = Math.max(sx, sy);
    this.background.scale.set(scale);
    this.background.position.set(this.game.width / 2, this.game.height / 2);

    if (this.tunein) {
      this.tunein.position.set(this.game.defaultWidth - (this.game.defaultWidth - this.game.width) / 2 - 40, this.game.defaultHeight - 70);
    } // let scale = this.game.width * 0.5 / this.container.width;
    // this.logo.scale.set(Math.min(0.5, scale));


    this.container.position.set(x, y);
  };

  _proto.cartoonSiteLink = function cartoonSiteLink() {
    window.open(this.game.copy.getCopy('cn_site_link'), '_blank');
  };

  _proto.update = function update() {
    this.apple.update();
    this.onion.update();

    if (!this.game.controller.gamePaused) {
      if (this.state === Welcome.STATE_SPAWN) {
        this.spawnRandomCharacter();
      }
    }
  };

  _proto.spawnRandomCharacter = function spawnRandomCharacter() {
    var rand = this.game.rnd.integerInRange(0, 1);
    var character = this.apple;

    switch (rand) {
      case 0:
        character = this.apple;
        break;

      case 1:
        character = this.onion;
        break;
    } //spawn apple for now


    var randDir = this.game.rnd.integerInRange(0, 1);
    var dir = -1;

    switch (randDir) {
      case 0:
        dir = -1;
        break;

      case 1:
        dir = 1;
        break;
    }

    var tween;

    if (dir === -1) {
      character.x = this.background.width / 2 + 500;
      tween = this.game.add.tween(character).to({
        x: -this.background.width / 2 - 500
      }, 4000, Phaser.Easing.Linear.None, true);
      character.scale.x = 1;
    }

    if (dir === 1) {
      character.x = -this.background.width / 2 - 500;
      tween = this.game.add.tween(character).to({
        x: this.background.width + 500
      }, 4000, Phaser.Easing.Linear.None, true);
      character.scale.x = -1;
    }

    tween.onComplete.add(this.randomWaitTime, this);
    this.state = Welcome.STATE_RUN;
  };

  _proto.randomWaitTime = function randomWaitTime() {
    var _this = this;

    var randomTime = this.game.rnd.integerInRange(_AppConstants.SCREEN_WELCOME_WAIT_TIME_MIN, _AppConstants.SCREEN_WELCOME_WAIT_TIME_MAX);
    this.game.time.events.add(randomTime, function () {
      _this.state = Welcome.STATE_SPAWN;
    }, this).autoDestroy = true;
  };

  _proto.handlePlayGame = function handlePlayGame() {
    this.game.controller.startCharacterSelect();
  };

  _proto.shutdown = function shutdown(game) {
    // remove listeners
    game.scale.onSizeChange.remove(this.positionContainer, this);
    this.btnPlay.onInputDown.remove(this.handlePlayGame, this); // destroy

    this.background.destroy(true);
    this.container.destroy(true);
    this.logo.destroy(true);
    this.apple.destroy(true);
    this.onion.destroy(true);
    this.btnPlay.destroy(true); // clear up

    this.background = null;
    this.container = null;
    this.logo = null;
    this.apple = null;
    this.onion = null;
    this.cat = null;
    this.btnPlay = null;
  };

  return Welcome;
}(Phaser.State);

Welcome.STATE_SPAWN = 'Welcome.STATE_SPAWN';
Welcome.STATE_RUN = 'Welcome.STATE_RUN';
Welcome.STATE_WAIT = 'Welcome.STATE_WAIT';
var _default = Welcome;
exports.default = _default;

/***/ }),

/***/ "XIrw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("/TzG");

__webpack_require__("3Ss1");

__webpack_require__("3Ipg");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _ButtonSound = _interopRequireDefault(__webpack_require__("KTG7"));

var UNGROUPED = 'UNGROUPED';
var CENTER = 'CENTER';
var TOP_LEFT = 'TOP_LEFT';
var TOP_RIGHT = 'TOP_RIGHT';
var TOP_RIGHT_2 = 'TOP_RIGHT_2';
var BOTTOM_LEFT = 'BOTTOM_LEFT';
var BOTTOM_RIGHT = 'BOTTOM_RIGHT';
var BOTTOM_CENTER = 'BOTTOM_CENTER';

var HudButtons =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudButtons, _Phaser$Group);

  function HudButtons(game) {
    var _this;

    _this = _Phaser$Group.call(this, game) || this;
    _this.state = null;
    _this.buttons = {};
    return _this;
  }

  var _proto = HudButtons.prototype;

  _proto.init = function init(buttonsConfig) {
    this.buttonsConfig = buttonsConfig;
    this.createButtonGroups();
  };

  _proto.positionElements = function positionElements() {
    var paddingX = this.game.screenPaddingX;
    var paddingY = this.game.screenPaddingY;
    this.positionButtonGroups(paddingX, paddingY);
  }
  /*
  ====================================================================================
    BUTTONS
  ====================================================================================
  */
  ;

  _proto.positionButtonGroups = function positionButtonGroups(paddingX, paddingY) {
    var _this2 = this;

    var w = this.game.width;
    var h = this.game.height;
    this.buttonGroups.forEach(function (group) {
      _this2.positionButtonGroupButtons(group, paddingY);

      var RIGHT = w - paddingX - group.groupWidth;
      var BOTTOM = h - group.groupHeight - paddingY;
      var CENTER_X = w / 2 - group.groupWidth / 2;
      var CENTER_Y = h / 2 - group.groupHeight / 2;

      switch (group.screenPosition) {
        case TOP_LEFT:
          group.x = paddingX;
          group.y = paddingY;
          break;

        case TOP_RIGHT:
          group.x = RIGHT;
          group.y = paddingY;
          break;

        case BOTTOM_LEFT:
          group.x = paddingX;
          group.y = BOTTOM;
          break;

        case BOTTOM_RIGHT:
          group.x = RIGHT;
          group.y = BOTTOM;
          break;

        case BOTTOM_CENTER:
          group.x = CENTER_X;
          group.y = BOTTOM;
          break;

        case CENTER:
          group.x = CENTER_X;
          group.y = CENTER_Y;
          break;
      }
    });
  };

  _proto.positionButtonGroupButtons = function positionButtonGroupButtons(btnGroup, padding) {
    var _this3 = this;

    btnGroup.groupWidth = 0;
    btnGroup.groupHeight = 0;
    btnGroup.buttons.forEach(function (btn, index) {
      if (btnGroup.screenPosition === UNGROUPED) {
        btn.updatePosition();
      } else {
        btn.x = index === 0 ? btn.x : btnGroup.groupWidth + padding;
        btnGroup.groupWidth = btn.x + btn.width;
        btnGroup.groupHeight = Math.max(btnGroup.groupHeight, btn.height);

        if (btn.padding_left) {
          var pad = _this3.game.defaultWidth * btn.padding_left;
          btn.x += pad;
          btnGroup.groupWidth += pad;
        }

        if (btn.padding_bottom) {
          var _pad = _this3.game.defaultHeight * btn.padding_bottom;

          btn.y -= _pad;
          btnGroup.groupHeight += _pad;
        }
      }
    });
  };

  _proto.createButtonGroups = function createButtonGroups() {
    this.btnsTopLeft = this.createButtonGroup(TOP_LEFT);
    this.btnsTopRight = this.createButtonGroup(TOP_RIGHT);
    this.btnsBottomLeft = this.createButtonGroup(BOTTOM_LEFT);
    this.btnsBottomRight = this.createButtonGroup(BOTTOM_RIGHT);
    this.btnsBottomCenter = this.createButtonGroup(BOTTOM_CENTER);
    this.btnsCenter = this.createButtonGroup(CENTER);
    this.btnsUngrouped = this.createButtonGroup(UNGROUPED);
    this.buttonGroups = [this.btnsTopLeft, this.btnsTopRight, this.btnsBottomLeft, this.btnsBottomRight, this.btnsBottomCenter, this.btnsCenter, this.btnsUngrouped];
    this.buttonGroupLookup = {
      TOP_LEFT: this.btnsTopLeft,
      TOP_RIGHT: this.btnsTopRight,
      TOP_RIGHT_2: this.btnsTopRight,
      BOTTOM_LEFT: this.btnsBottomLeft,
      BOTTOM_RIGHT: this.btnsBottomRight,
      BOTTOM_CENTER: this.btnsBottomCenter,
      CENTER: this.btnsCenter,
      UNGROUPED: this.btnsUngrouped
    };
  };

  _proto.createButtonGroup = function createButtonGroup(position) {
    var group = this.game.make.group();
    group.groupWidth = 0;
    group.groupHeight = 0;
    group.buttons = [];
    group.screenPosition = position;
    this.add(group);
    return group;
  };

  _proto.addToButtonGroup = function addToButtonGroup(position, btn) {
    var btnGroup = this.buttonGroupLookup[position];
    btnGroup.add(btn);
    btn.buttonGroup = btnGroup;
    btnGroup.buttons.push(btn);
  };

  _proto.destroyButtons = function destroyButtons() {
    var _this4 = this;

    Object.keys(this.buttons).map(function (id, i) {
      var button = _this4.buttons[id];
      button.buttonGroup.buttons.splice(button.buttonGroup.buttons.indexOf(button), 1);
      button.onInputDown.remove(_this4.handleButtonInteraction, _this4);
      button.destroy(true);
      button = null;
      return button;
    });
    this.buttons = {};
  };

  _proto.createButtons = function createButtons(screenConfig) {
    var _this5 = this;

    this.buttons = {};
    screenConfig.forEach(function (option) {
      _this5.createButton(option);
    });
  };

  _proto.createButton = function createButton(option) {
    var data = this.buttonsConfig[option];

    if (data) {
      var id = data.id,
          sfx_id = data.sfx_id,
          skin = data.skin,
          position = data.position,
          ariaLabelID = data.ariaLabelID,
          skins = data.skins;
      console.log('creating button : ' + id);
      var opts = {
        game: this.game,
        id: id,
        position: position,
        sfx_id: sfx_id,
        skin: skin,
        ariaLabelID: ariaLabelID
      };
      var btn;

      if (id === 'btn_sound') {
        opts.skins = skins;
        btn = new _ButtonSound.default(opts);
      } else {
        btn = new _ButtonSimple.default(opts);
      }

      this.buttons[id] = btn;
      btn.onInputDown.add(this.handleButtonInteraction, this);

      if (position.grouped) {
        this.addToButtonGroup(position.id, btn);
      } else {
        this.addToButtonGroup(UNGROUPED, btn);
      }

      return btn;
    }
  };

  _proto.renderButtons = function renderButtons(opts, handleButtonInteraction) {
    this.handleButtonInteraction = handleButtonInteraction;
    this.destroyButtons();
    this.createButtons(opts);
  }
  /*
  ====================================================================================
    CLEANUP
  ====================================================================================
  */
  ;

  _proto.destroy = function destroy(destroyChildren, soft) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    /*
     *  TODO : cleanup
     */
    _Phaser$Group.prototype.destroy.call(this, true);
  };

  return HudButtons;
}(Phaser.Group);

var _default = HudButtons;
exports.default = _default;

/***/ }),

/***/ "Y3q/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _AppConstants = __webpack_require__("zgbH");

var Dasher =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(Dasher, _Phaser$Group);

  function Dasher(_ref) {
    var _this;

    var game = _ref.game,
        _ref$dir = _ref.dir,
        dir = _ref$dir === void 0 ? 1 : _ref$dir,
        _ref$moveSpeed = _ref.moveSpeed,
        moveSpeed = _ref$moveSpeed === void 0 ? 0 : _ref$moveSpeed,
        variations = _ref.variations,
        rowInd = _ref.rowInd,
        id = _ref.id,
        dasherType = _ref.dasherType;
    _this = _Phaser$Group.call(this, game, 0, 0) || this;
    _this.game = game;
    _this.variations = variations;
    _this.game = game;
    _this.dir = dir;
    _this.rowInd = rowInd;
    _this.id = id;
    _this.dasherType = (dasherType + id) % 4;
    _this.hasCharacter = false;
    _this.trolley = _this.game.make.spine(0, 0, 'trolley');
    _this.trolleyAnim = _this.trolley.setAnimationByName(0, 'run', true);

    _this.trolley.anchor.set(0.5, 1);

    _this.dasher = _this.game.make.spine(0, 0, 'trolleyDashers');
    _this.dasherAnim = _this.dasher.setAnimationByName(0, 'run', true);

    _this.dasher.anchor.set(0.5, 1);

    _this.chooseRandomDasher();

    _this.addChild(_this.trolley);

    _this.addChild(_this.dasher);

    _this.trolley.scale.x = _this.dir;
    _this.dasher.scale.x = _this.dir;
    _this.moveSpeed = moveSpeed;
    return _this;
  }

  var _proto = Dasher.prototype;

  //Update the cars movement and check whether it's out of bounds
  _proto.move = function move(timeStep) {
    var dx = this.moveSpeed * timeStep;
    this.position.x += dx * this.dir;
    this.checkOutOfBounds();
  };

  _proto.getWorldBounds = function getWorldBounds() {
    var bounds = this.getBounds(); // change width

    var w = bounds.width;
    var xc = bounds.x + w / 2; // center of rect

    bounds.width = 200;
    bounds.x = xc - bounds.width / 2 + 10; // change height

    var h = bounds.height;
    var y = bounds.y;
    var btm = y + h;
    bounds.height = 60;
    bounds.y = btm - bounds.height; // fix position

    bounds.x += this.game.camera.view.x;
    bounds.y += this.game.camera.view.y;
    return bounds;
  };

  _proto.stopAnimation = function stopAnimation() {
    this.trolleyAnim.timeScale = 0;
    this.dasherAnim.timeScale = 0;
  };

  _proto.startAnimation = function startAnimation() {
    this.dasherAnim.timeScale = 1;
  };

  _proto.chooseRandomDasher = function chooseRandomDasher() {
    // release character
    if (this.hasCharacter) {
      this.hasCharacter = false;
      this.game.controller.gameModel.isCharacterAvailable = true;
    } //


    var dasherSkins = ['burger', 'chip', 'falafel', 'hotdog']; //let randDasher = (this.rowInd + this.id + this.level) % 4; //this.game.rnd.integerInRange(0, this.variations - 1);

    this.dasher.setSkinByName(dasherSkins[this.dasherType]); // set trolley skin

    var trolleySkin = 'full_' + this.game.rnd.integerInRange(1, 7); // try to place character to trolley

    if (this.game.hero && this.game.controller.gameModel.isCharacterAvailable && (this.rowInd == this.game.hero.currentRow - 1 || this.rowInd == this.game.hero.currentRow + 1)) {
      this.game.controller.gameModel.isCharacterAvailable = false;
      this.hasCharacter = true;
      trolleySkin = this.game.hero.character == 'apple' ? 'onion' : 'apple'; // play audio
      //this.playGiggle();
    } //


    this.trolley.setSkinByName(trolleySkin);
  }
  /*
  playGiggle() {
    if (this.hasCharacter && this.game) {
      let delay = this.game.rnd.integerInRange(1000, 2000);
      let character = this.game.hero.character == 'apple' ? 'onion' : 'apple';
      this.game.sounds.playSFX('giggle_' + character, { delay: delay, onComplete: this.playGiggle, onCompleteScope: this });
    }
  }
  */
  ;

  _proto.getInnerVehicleBounds = function getInnerVehicleBounds() {
    var _this2 = this;

    var bounds = [];
    bounds = this.game.controller.config.getVehicleBounds(this.vehicleType);
    var newBounds = [];
    bounds.forEach(function (element, indx) {
      var x = element.x + _this2.position.x;
      newBounds.push({
        x: x,
        y: element.y + _this2.position.y,
        width: element.width,
        height: element.height,
        fixPosition: element.y + +_this2.position.y + element.fixPosition
      });
    });

    if (this.dir === -1) {
      newBounds.forEach(function (element, indx) {
        var x = element.x;

        if (indx !== 0) {
          x = newBounds[indx - 1].x - bounds[indx - 1].width;
        }

        element.x = x;
      });
    }

    return newBounds;
  };

  _proto.checkOutOfBounds = function checkOutOfBounds() {
    //If car is moving to the right
    if (this.dir === 1) {
      if (this.position.x - this.width / 2 - 25 > _AppConstants.GAME_ROAD_WIDTH) {
        this.position.x = -this.width / 2 - this.game.rnd.integerInRange(5, 40);
        this.chooseRandomDasher();
      } //If the car is moving to the left

    } else {
      if (this.position.x + this.width / 2 - 25 < 0) {
        this.position.x = _AppConstants.GAME_ROAD_WIDTH * 1.25 + this.width / 2 + this.game.rnd.integerInRange(5, 40);
        this.chooseRandomDasher();
      }
    }
  };

  _proto.destroy = function destroy() {
    _Phaser$Group.prototype.destroy.call(this);
  };

  (0, _createClass2.default)(Dasher, [{
    key: "width",
    get: function get() {
      return 200;
    }
  }]);
  return Dasher;
}(Phaser.Group);

exports.default = Dasher;

/***/ }),

/***/ "ZZqx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _Hud = _interopRequireDefault(__webpack_require__("d0OL"));

var _Text = __webpack_require__("NfmA");

var _AppConstants = __webpack_require__("zgbH");

var LevelLose =
/*#__PURE__*/
function (_Phaser$State) {
  (0, _inheritsLoose2.default)(LevelLose, _Phaser$State);

  function LevelLose() {
    return _Phaser$State.apply(this, arguments) || this;
  }

  var _proto = LevelLose.prototype;

  _proto.init = function init(_ref) {
    var character = _ref.character;
    this.character = character;
  };

  _proto.preload = function preload(game) {};

  _proto.create = function create(game) {
    this.game = game;
    this.background = game.make.image(0, 0, 'bg_level_failed');
    this.background.anchor.set(0, 1);
    this.game.add.existing(this.background);
    this.container = game.add.group();
    this.game.hud.activate({
      id: _Hud.default.LEVELEND
    });
    this.game.hud.fadeIn();
    this.createCharacters();
    this.createText(); // play again button

    this.btnPlay = new _ButtonSimple.default({
      game: this.game,
      id: 'btn_play',
      skin: 'btn_replay'
    });
    this.btnPlay.x = this.game.defaultWidth * 0.5;
    this.btnPlay.y = this.game.defaultHeight * 0.75;
    this.btnPlay.onInputDown.add(this.handlePlayGame, this);
    this.container.add(this.btnPlay);
    this.logo = this.game.make.image(0, 0, 'logo_game');
    this.logo.anchor.set(1);
    this.logo.scale.set(0.33);
    this.logo.position.set(this.game.defaultWidth - (this.game.defaultWidth - this.game.width) / 2 - 30, this.game.defaultHeight - 60);
    this.container.addChild(this.logo);
    this.game.sounds.playGameMusic();
    this.game.windowEventController.handleWindowResize();
    this.game.scale.onSizeChange.add(this.positionContainer, this);
    this.positionContainer();
  };

  _proto.createCharacters = function createCharacters() {
    switch (this.character) {
      case 'apple':
        this.winCostume = this.game.make.sprite(0, 0, 'apple_endings', 'apple_failed_0001');
        this.winCostume.animations.add('win', Phaser.Animation.generateFrameNames('apple_failed_', 0, 10, '', 4), 24, true);
        this.winCostume.anchor.set(0.5, 1);
        this.winCostume.position.set(this.game.defaultWidth * 0.25, this.game.defaultHeight * 0.9);
        break;

      case 'onion':
        this.winCostume = this.game.make.sprite(0, 0, 'onion_endings', 'onion_failed_0001');
        this.winCostume.animations.add('win', Phaser.Animation.generateFrameNames('onion_failed_', 0, 10, '', 4), 24, true);
        this.winCostume.anchor.set(0.5, 1);
        this.winCostume.position.set(this.game.defaultWidth * 0.25, this.game.defaultHeight * 0.9);
        break;
    }

    this.winCostume.play('win');
    this.game.add.existing(this.winCostume);
  };

  _proto.createText = function createText() {
    this.mainCopy = (0, _Text.createTextField)(this.game, _AppConstants.FONT_TITLE, 78, _AppConstants.FONT_COLOUR_LEVEL_WIN, 0, 0, {
      align: 'center',
      stroke: _AppConstants.FONT_COLOUR_STROKE,
      strokeThickness: 6
    });
    this.mainCopy.text = this.game.copy.getCopy('level') + ' ' + this.game.controller.gameModel.getCurrentLevel() + ' ' + this.game.copy.getCopy('failed');
    this.mainCopy.anchor.set(0.5);
    this.mainCopy.angle = -5;
    this.mainCopy.setShadow(3, 3, 'rgba(0,0,0,0.5)', 0);
    this.mainCopy.scale.set(100);
    this.game.add.existing(this.mainCopy);
    this.tweenText();
  };

  _proto.tweenText = function tweenText() {
    this.scaleTweenDown = this.game.add.tween(this.mainCopy.scale).to({
      x: 0.7,
      y: 0.7
    }, 500, Phaser.Easing.Quartic.Out, true);
    this.scaleTweenUp = this.game.add.tween(this.mainCopy.scale).to({
      x: 1,
      y: 1
    }, 150, Phaser.Easing.Quartic.Out, false);
    this.scaleTweenDown.chain(this.scaleTweenUp);
    this.scaleTweenDown.onComplete.add(this.playStampSound, this);
  };

  _proto.playStampSound = function playStampSound() {
    this.game.sounds.playSFX('stamp');
  };

  _proto.positionContainer = function positionContainer() {
    var x = (this.game.width - this.game.defaultWidth) * 0.5;
    var y = (this.game.height - this.game.defaultHeight) * 0.5;
    this.container.position.set(x, y);
    this.logo.position.set(this.game.defaultWidth - (this.game.defaultWidth - this.game.width) / 2 - 30, this.game.defaultHeight - 60);
    var scale = Math.max(this.game.height / this.game.defaultHeight, this.game.width / this.game.defaultWidth);
    this.background.scale.set(scale);
    this.background.position.set(0, this.game.height);
    var yOffset = 1 - scale;
    yOffset /= 4;
    this.winCostume.position.set(this.game.width * 0.25, this.game.height * (0.9 + yOffset));
    this.mainCopy.position.set(this.game.width * 0.5, this.game.height * 0.21);
  };

  _proto.handlePlayGame = function handlePlayGame() {
    this.game.controller.startLevel(this.game.controller.gameModel.getCurrentLevel());
  };

  _proto.shutdown = function shutdown(game) {
    game.scale.onSizeChange.remove(this.positionContainer, this);
    this.btnPlay.onInputDown.remove(this.handlePlayGame, this);
    this.scaleTweenDown.onComplete.remove(this.playStampSound, this); // destroy

    this.background.destroy(true);
    this.container.destroy(true);
    this.winCostume.destroy(true);
    this.mainCopy.destroy(true);
    this.btnPlay.destroy(true); // clear up

    this.background = null;
    this.container = null;
    this.posterMain = null;
    this.posterSmall = null;
    this.winCostume = null;
    this.mainCopy = null;
    this.smallCopy = null;
    this.btnPlay = null;
  };

  return LevelLose;
}(Phaser.State);

var _default = LevelLose;
exports.default = _default;

/***/ }),

/***/ "cuN4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Title = _interopRequireDefault(__webpack_require__("0kin"));

var _ScoreDisplay = _interopRequireDefault(__webpack_require__("OiSF"));

var _LevelScoreDisplay = _interopRequireDefault(__webpack_require__("7NoF"));

var _Starburst = _interopRequireDefault(__webpack_require__("noS8"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var AppConstants = _interopRequireWildcard(__webpack_require__("zgbH"));

var HudLevelFail =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudLevelFail, _Phaser$Group);

  function HudLevelFail(_ref) {
    var _this;

    var game = _ref.game,
        totalLevelScore = _ref.totalLevelScore,
        newGameScore = _ref.newGameScore,
        collectTarget = _ref.collectTarget;
    _this = _Phaser$Group.call(this, game) || this;
    _this.totalLevelScore = totalLevelScore;
    _this.newGameScore = newGameScore;
    _this.collectTarget = collectTarget;
    _this.background = new _BackgroundColourFill.default({
      game: game,
      colour: '#000000',
      alpha: 0.5
    });

    _this.add(_this.background); // container to house and position contents


    _this.container = _this.game.make.group();

    _this.add(_this.container); // baking panel


    _this.panel = _this.game.make.image(0, 0, 'ui', 'panel_generic');

    _this.container.add(_this.panel); // display Gnasher if player completed the level, display dennis if player did not


    _this.character = _this.game.make.image(0, 0, 'modal_characters', 'modal_char_levelfail');
    _this.character.y = 0;
    _this.character.x = _this.panel.width * 0.5 - _this.character.width * 0.5;

    _this.container.addAt(_this.character, 0); // add title, positiing would depend on what character is being displayed


    _this.title = new _Title.default({
      game: game,
      title: _Title.default.OHNO
    });
    _this.title.x = _this.panel.width * 0.5 - _this.title.width * 0.5;
    _this.title.y = _this.character.height * 0.75;

    _this.container.add(_this.title); // adjust panel positon based on title position


    _this.panel.y = _this.title.y + _this.title.height * 0.3; // score displays

    _this.scoreDisplay = new _ScoreDisplay.default({
      game: game,
      score: 0,
      target: _this.collectTarget,
      scoreColour: AppConstants.FONT_COLOUR_SCORE_FAIL
    });
    _this.scoreDisplay.x = _this.panel.width * 0.5 - _this.scoreDisplay.width * 0.5;
    _this.scoreDisplay.y = _this.title.y + _this.title.height + 50;

    _this.container.addChild(_this.scoreDisplay); // total score display


    _this.totalScoreDisplay = new _LevelScoreDisplay.default({
      game: _this.game,
      score: _this.newGameScore,
      labelCopy: _this.game.copy.getCopy('total_score') + ' : '
    });
    _this.totalScoreDisplay.x = _this.panel.width * 0.5 - _this.totalScoreDisplay.width * 0.5;
    _this.totalScoreDisplay.y = _this.scoreDisplay.y + _this.scoreDisplay.height + 20; // try again button

    _this.btnTryAgain = new _ButtonSimple.default({
      game: _this.game,
      id: 'btn_tryagain',
      skin: 'btn_tryagain'
    });
    _this.btnTryAgain.x = _this.panel.width * 0.5;
    _this.btnTryAgain.y = _this.totalScoreDisplay.y + _this.totalScoreDisplay.height + _this.btnTryAgain.height * 0.75;

    _this.btnTryAgain.onInputDown.add(_this.handleTryAgain, (0, _assertThisInitialized2.default)(_this)); // adjust panel height to match content


    _this.panel.height = _this.btnTryAgain.y - _this.panel.y; // positioning

    _this.game.scale.onSizeChange.add(_this.handleScreenResize, (0, _assertThisInitialized2.default)(_this));

    _this.fixedToCamera = true;

    _this.handleScreenResize();

    _this.scoreDisplay.onAnimatedScoreUpdated.add(_this.handleAnimatedScoreUpdate, (0, _assertThisInitialized2.default)(_this));

    _this.scoreDisplay.onAnimatedScoreComplete.add(_this.handleAnimatedScoreComplete, (0, _assertThisInitialized2.default)(_this));

    _this.scoreDisplay.animateScore(0, _this.totalLevelScore);

    return _this;
  }

  var _proto = HudLevelFail.prototype;

  _proto.handleScreenResize = function handleScreenResize() {
    this.container.x = this.game.width * 0.5 - this.width * 0.5;
    this.container.y = this.game.height * 0.5 - this.height * 0.5;
  };

  _proto.handleAnimatedScoreUpdate = function handleAnimatedScoreUpdate() {
    this.scoreDisplay.x = this.panel.width * 0.5 - this.scoreDisplay.width * 0.5;
  };

  _proto.handleAnimatedScoreComplete = function handleAnimatedScoreComplete() {
    this.handleAnimatedScoreUpdate();
    this.container.add(this.totalScoreDisplay);
    this.addStarBurst(this.panel.width / 2, this.totalScoreDisplay.y);
    this.container.add(this.btnTryAgain);
  };

  _proto.addStarBurst = function addStarBurst(x, y) {
    var starBurst = new _Starburst.default({
      game: this.game
    });
    starBurst.scale.set(2);
    starBurst.position.set(x, y);
    this.container.add(starBurst);
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */
  ;

  /*
  ============================================================================================
    EVENT HANDLERS
  ============================================================================================
  */
  _proto.handleTryAgain = function handleTryAgain() {
    this.game.controller.replayLevel();
    this.destroy();
  }
  /*
  ============================================================================================
    TOODLES!
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    this.game.scale.onSizeChange.remove(this.handleScreenResize, this);
    this.btnTryAgain.onInputDown.remove(this.handleTryAgain, this);
    this.btnTryAgain.destroy(true);
    this.scoreDisplay.destroy(true);
    this.title.destroy(true);
    this.character.destroy(true);
    this.panel.destroy(true);
    this.container.destroy(true); // nullify

    this.btnTryAgain = null;
    this.btnNextLevel = null;
    this.btnReplay = null;
    this.highScoreDisplay = null;
    this.scoreDisplay = null;
    this.title = null;
    this.character = null;
    this.panel = null;
    this.container = null; // super dupa

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(HudLevelFail, [{
    key: "height",
    get: function get() {
      return this.panel.height + this.panel.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.panel.width;
    }
  }]);
  return HudLevelFail;
}(Phaser.Group);

exports.default = HudLevelFail;

/***/ }),

/***/ "d0OL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("AaIv");

__webpack_require__("j3Ef");

__webpack_require__("mizm");

__webpack_require__("pkSX");

__webpack_require__("3Ipg");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("fKPv"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _HudTimer = _interopRequireDefault(__webpack_require__("kt8K"));

var _HudButtons = _interopRequireDefault(__webpack_require__("XIrw"));

var _HudGameIntro = _interopRequireDefault(__webpack_require__("J1sN"));

var _HudGamePlay = _interopRequireDefault(__webpack_require__("//WO"));

var _HudHowToPlay = _interopRequireDefault(__webpack_require__("ksl4"));

var _HudLevelWin = _interopRequireDefault(__webpack_require__("6ehC"));

var _HudLevelFail = _interopRequireDefault(__webpack_require__("cuN4"));

var _HudGamePause = _interopRequireDefault(__webpack_require__("rcv9"));

var _HudGameCredits = _interopRequireDefault(__webpack_require__("Vzqp"));

var _HudRotateScreen = _interopRequireDefault(__webpack_require__("MDgj"));

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var _AppConstants = __webpack_require__("zgbH");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Hud =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(Hud, _Phaser$Group);

  function Hud(game) {
    var _this;

    _this = _Phaser$Group.call(this, game) || this;
    _this.previousStates = [];
    _this.state = null;
    _this.enabled = false;
    _this.active = true;
    _this.visible = false;
    _this.screenIsRotated = false;
    _this.alpha = 0;
    _this.bindedHandleButtonInteraction = _this.handleButtonInteraction.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = Hud.prototype;

  _proto.init = function init(buttonsConfig) {
    this.hudButtons = new _HudButtons.default(this.game);
    this.hudButtons.init(buttonsConfig); // this.timer = new HudTimer({ game: this.game, sheet: 'ui' });
    // this.add(this.timer);
    // this.timer.visible = false;

    this.createModal();
    this.add(this.hudButtons);
    this.sendToBack(this.hudButtons);
    this.enable();
  };

  _proto.fadeIn = function fadeIn() {
    this.alpha = 0;
    this.visible = true;
    this.game.add.tween(this).to({
      alpha: 1
    }, 250).start();
  };

  _proto.isWelcomeScreen = function isWelcomeScreen() {
    return this.state === null || this.state.id === Hud.WELCOME;
  };

  _proto.setScreenIsRotated = function setScreenIsRotated(val) {
    this.screenIsRotated = val;
  };

  _proto.show = function show() {
    this.visible = true;
  };

  _proto.hide = function hide() {
    this.visible = true;
  };

  _proto.enable = function enable() {
    this.enabled = true;
  };

  _proto.disable = function disable() {
    this.enabled = false;
  };

  _proto.activate = function activate(_ref) {
    var _ref$id = _ref.id,
        id = _ref$id === void 0 ? Hud.PLAYING : _ref$id,
        _ref$isModal = _ref.isModal,
        isModal = _ref$isModal === void 0 ? false : _ref$isModal;
    // console.log('Hud.activate', id);
    var numberOfChildren = this.game.stage.children.length;
    var childIndex = this.screenIsRotated ? numberOfChildren - 2 : numberOfChildren - 1;
    this.game.stage.addChildAt(this, childIndex);
    this.active = true;
    this.configure({
      id: id,
      isModal: isModal
    });
    this.visible = true;
    this.game.scale.onSizeChange.add(this.positionElements, this);
  };

  _proto.deactivate = function deactivate() {
    this.reset();
    this.active = false;
    this.visible = false;
    this.game.scale.onSizeChange.remove(this.positionElements, this);
    this.game.stage.removeChild(this);
  };

  _proto.configure = function configure(_ref2) {
    var _ref2$id = _ref2.id,
        id = _ref2$id === void 0 ? Hud.PLAYING : _ref2$id,
        _ref2$isModal = _ref2.isModal,
        isModal = _ref2$isModal === void 0 ? false : _ref2$isModal,
        _ref2$isVisible = _ref2.isVisible,
        isVisible = _ref2$isVisible === void 0 ? true : _ref2$isVisible;
    // console.log('Hud.configure', id, isModal);
    this.saveState(this.state);
    this.state = {
      id: id,
      isModal: isModal
    }; // id === Hud.PLAYING || id === Hud.PAUSE || id === Hud.CREDITS ? this.showTimer() : this.hideTimer();

    var opts = Hud.STATES[this.state.id];
    this.hudButtons.renderButtons(opts, this.bindedHandleButtonInteraction);
    this.showModal(this.state.isModal);
    this.visible = isVisible;
    this.positionElements();
  };

  _proto.reset = function reset() {
    this.state = null;
    this.previousStates = [];
  };

  _proto.createModal = function createModal() {// this.modalBG = this.game.make.image(0, 0, 'bg_fade');
    // this.modalBG.anchor.set(0, 0);
    // this.add(this.modalBG);
    // this.modalBG.visible = false;
  };

  _proto.showModal = function showModal(isVisible) {} // this.modalBG.visible = isVisible;

  /*
  ======================================================================================================
    LEVEL END
  ======================================================================================================
  */
  ;

  _proto.showLevelWin = function showLevelWin(_ref3) {
    var isLastLevel = _ref3.isLastLevel;
    this.levelEnd = new _HudLevelWin.default({
      game: this.game,
      isLastLevel: isLastLevel
    });
    this.add(this.levelEnd);
  };

  _proto.showLevelFail = function showLevelFail(_ref4) {
    var totalLevelScore = _ref4.totalLevelScore,
        newGameScore = _ref4.newGameScore,
        collectTarget = _ref4.collectTarget;
    this.levelEnd = new _HudLevelFail.default({
      game: this.game,
      totalLevelScore: totalLevelScore,
      newGameScore: newGameScore,
      collectTarget: collectTarget
    });
    this.add(this.levelEnd);
  };

  _proto.closeLevelEnd = function closeLevelEnd() {
    if (this.levelEnd) {
      this.levelEnd.destroy();
    }
  }
  /*
  ======================================================================================================
    PAUSE / RESUME
  ======================================================================================================
  */
  ;

  _proto.showGamePause = function showGamePause() {
    this.hudGamePause = new _HudGamePause.default({
      game: this.game
    });
    this.addChild(this.hudGamePause);
  };

  _proto.closeGamePause = function closeGamePause() {
    if (this.hudGamePause) {
      this.hudGamePause.destroy(true);
    }
  };

  _proto.showGameIntro = function showGameIntro(onClose, onCloseScope) {
    this.gameIntro = new _HudGameIntro.default({
      game: this.game,
      onClose: onClose,
      onCloseScope: onCloseScope
    });
    this.add(this.gameIntro);
  };

  _proto.showGameIntroMessage = function showGameIntroMessage(message, onClose, onCloseScope) {
    this.gameIntro = new _HudGameIntro.default({
      game: this.game,
      message: message,
      onClose: onClose,
      onCloseScope: onCloseScope
    });
    this.add(this.gameIntro);
  };

  _proto.closeGameIntro = function closeGameIntro() {
    if (this.gameIntro) {
      this.gameIntro.destroy();
    }
  };

  _proto.showRotateScreen = function showRotateScreen() {
    if (!this.hudRotateScreen) {
      if (this.game.state.current !== _AppConstants.STATE_BOOT) {
        this.hudRotateScreen = new _HudRotateScreen.default({
          game: this.game
        });
        this.addChild(this.hudRotateScreen);
      }
    }
  };

  _proto.closeRotateScreen = function closeRotateScreen() {
    if (this.hudRotateScreen) {
      if (this.game.state.current === _AppConstants.STATE_WELCOME) {
        this.game.controller.gamePaused = false;
      }

      if (this.game.state.current !== _AppConstants.STATE_BOOT) {
        this.hudRotateScreen.destroy(true);
        this.hudRotateScreen = null;
      }
    }
  }
  /*
  ======================================================================================================
    CREDITS
  ======================================================================================================
  */
  ;

  _proto.showGameCredits = function showGameCredits() {
    this.hudGameCredits = new _HudGameCredits.default({
      game: this.game
    });
    this.add(this.hudGameCredits);
  };

  _proto.closeGameCredits = function closeGameCredits() {
    if (this.hudGameCredits) {
      this.hudGameCredits.destroy(true);
    }
  };

  _proto.showGamePlayHud = function showGamePlayHud(levelData) {
    if (!this.gamePlayHud) {
      this.gamePlayHud = new _HudGamePlay.default({
        game: this.game,
        levelData: levelData
      });
      this.addAt(this.gamePlayHud, 0);
    }
  };

  _proto.hideGamePlayHud = function hideGamePlayHud() {
    if (this.gamePlayHud) {
      this.gamePlayHud.destroy();
      this.gamePlayHud = null;
    }
  };

  _proto.updateGamePlayHud = function updateGamePlayHud(time, score) {
    if (this.gamePlayHud) {
      this.gamePlayHud.updateStats(time, score);
    }
  };

  _proto.showInstructions = function showInstructions() {
    if (!this.gameInstructions) {
      this.gameInstructions = new _HudHowToPlay.default({
        game: this.game
      });
      this.gameInstructions.onClose.add(this.handleInstructionClose, this);
      this.add(this.gameInstructions);
    }
  };

  _proto.handleInstructionClose = function handleInstructionClose() {
    this.gameInstructions.onClose.remove(this.handleInstructionClose, this);
    this.gameInstructions = null;
  }
  /*
  ====================================================================================
    TIMER
  ====================================================================================
  */
  ;

  _proto.updateTimeProgress = function updateTimeProgress(value) {// this.timer.setTime(value);
  };

  _proto.showTimer = function showTimer() {// this.timer.visible = true;
  };

  _proto.hideTimer = function hideTimer() {} // this.timer.visible = false;

  /*
  ====================================================================================
    LAYOUT
  ====================================================================================
  */
  ;

  _proto.positionElements = function positionElements() {
    var paddingX = this.game.screenPaddingX;
    var paddingY = this.game.screenPaddingY;
    this.hudButtons.positionButtonGroups(paddingX, paddingY);

    if (this.modalBG) {
      this.modalBG.width = this.game.width;
      this.modalBG.height = this.game.height;
      this.modalBG.position.set(0);
    }

    if (this.timer) {
      this.timer.position.set((this.game.width - this.timer.width) * 0.5, paddingY);
    }
  }
  /*
  ====================================================================================
    BUTTON INPUT
  ====================================================================================
  */
  ;

  _proto.handleButtonInteraction = function handleButtonInteraction(e) {
    this.handleSelectedButton(e.id);
  };

  _proto.handleSelectedButton = function handleSelectedButton(id) {
    this.game.sounds.checkAudioContext();

    if (!this.enabled || this.screenIsRotated) {
      console.info('HUD DISABLED : ignoring button', id);
      return;
    } // console.info('>> handleSelectedButton', id);


    switch (id) {
      case 'btn_pause':
        this.game.track(AppTrackingEvents.GAME_PAUSE);
        this.game.controller.pauseGame();
        break;

      case 'btn_levelend_continue':
        this.configure({
          id: Hud.EMPTY
        });
        this.game.controller.nextLevel();
        break;

      case 'btn_paused_continue':
        this.game.track(AppTrackingEvents.GAME_RESUME);
        this.configure({
          id: Hud.PLAYING
        });
        this.game.controller.resumeGame();
        break;

      case 'btn_paused_restart':
        this.configure({
          id: Hud.EMPTY
        });
        this.game.controller.restartGame();
        this.game.track(AppTrackingEvents.GAME_RESTART);
        break;

      case 'btn_home':
        this.game.track(AppTrackingEvents.GAME_EXIT);
        this.game.controller.quitGame();
        break;

      case 'btn_help':
        this.game.track(AppTrackingEvents.VIEW_SCREEN_INSTRUCTIONS);
        this.showInstructions();
        break;

      case 'btn_sound':
        {
          this.game.track(this.game.controller.uiModel.getIsMuted() ? AppTrackingEvents.AUDIO_ON : AppTrackingEvents.AUDIO_OFF);
          this.game.controller.uiModel.toggleAudio();
          break;
        }

      default:
    }
  }
  /**
   * state stack
   */
  ;

  _proto.saveState = function saveState(state) {
    if (state) {
      this.previousStates.push(_objectSpread({}, state));
    }
  };

  _proto.retrievePreviousState = function retrievePreviousState() {
    var previousState = this.previousStates.pop();
    return previousState || null;
  }
  /*
  ====================================================================================
    CLEANUP
  ====================================================================================
  */
  ;

  _proto.destroy = function destroy(destroyChildren, soft) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  return Hud;
}(Phaser.Group);

Hud.EMPTY = 'EMPTY';
Hud.WELCOME = 'WELCOME';
Hud.PAUSE = 'PAUSE';
Hud.CREDITS = 'CREDITS';
Hud.PLAYING = 'PLAYING';
Hud.LEVELEND = 'LEVELEND';
Hud.GAMEEND = 'GAMEEND';
Hud.CUTSCENE = 'GAMEEND';
Hud.STATES = {
  EMPTY: [],
  WELCOME: ['help', 'sound'],
  PAUSE: ['back', 'sound'],
  CREDITS: ['home', 'sound'],
  PLAYING: ['pause', 'sound'],
  LEVELEND: ['home', 'sound'],
  GAMEEND: ['home', 'sound'],
  GAMEOVER: ['home', 'sound'],
  CUTSCENE: ['sound'],
  GAMEOVER_BILLY: ['home', 'sound']
};
var _default = Hud;
exports.default = _default;

/***/ }),

/***/ "dD3M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _GameSFX = __webpack_require__("QklZ");

var ButtonSimple =
/*#__PURE__*/
function (_Phaser$Button) {
  (0, _inheritsLoose2.default)(ButtonSimple, _Phaser$Button);

  function ButtonSimple(_ref) {
    var _this;

    var game = _ref.game,
        id = _ref.id,
        sfxID = _ref.sfxID,
        position = _ref.position,
        skin = _ref.skin,
        ariaLabelID = _ref.ariaLabelID,
        spritesheet = _ref.spritesheet,
        defaultScale = _ref.defaultScale;
    _this = _Phaser$Button.call(this, game, 0, 0, spritesheet || 'buttons') || this;

    _this.setFrames(skin, skin, skin, skin);

    _this.id = id;
    _this.input.useHandCursor = true;

    _this.game.time.events.add(10, _this.init, (0, _assertThisInitialized2.default)(_this));

    _this.grouped = position ? position.grouped : false;
    _this.defaultScale = defaultScale || 1;

    if (!_this.grouped) {
      if (position) {
        _this.xpos = position.x;
        _this.ypos = position.y;
      }

      _this.anchor.set(0.5);

      _this.updatePosition();
    }

    _this.enable();

    return _this;
  }

  var _proto = ButtonSimple.prototype;

  _proto.init = function init() {// this.enable();
  };

  _proto.updatePosition = function updatePosition() {
    this.position.set(this.game.width * this.xpos, this.game.height * this.ypos);
  };

  _proto.enable = function enable() {
    this.onInputDown.add(this.onDown, this);
    this.onInputOver.add(this.onOver, this);
    this.onInputOut.add(this.onOut, this);
  };

  _proto.disable = function disable() {
    this.onInputDown.forget();
    this.onInputDown.dispose();
    this.onInputDown.removeAll();
    this.onInputOver.forget();
    this.onInputOver.dispose();
    this.onInputOver.removeAll();
    this.onInputOut.forget();
    this.onInputOut.dispose();
    this.onInputOut.removeAll();
  };

  _proto.onOver = function onOver() {
    this.scale.set(this.defaultScale * 1.2);
  };

  _proto.onOut = function onOut() {
    this.scale.set(this.defaultScale * 1);
  };

  _proto.onDown = function onDown() {
    this.game.sounds.playSFX(_GameSFX.GAME_SFX_CLICK_SELECT);
  };

  _proto.destroy = function destroy(destroyChildren) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    this.disable();

    _Phaser$Button.prototype.destroy.call(this, destroyChildren);
  };

  return ButtonSimple;
}(Phaser.Button);

var _default = ButtonSimple;
exports.default = _default;

/***/ }),

/***/ "eQiv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _simplestorage = _interopRequireDefault(__webpack_require__("gqAu"));

var instance = null;
var UI_STORAGE_KEY = 'dennisUI';
var GAME_STORAGE_KEY = 'dennisGAME';
/**
 * Storage looks like:
 *
 * {
 *   dennisGAME: {
 *     slots: { slots: ['PLAYER_ONE'] },
 *     savePLAYER_ONE: { id: 'PLAYER_ONE', bestLevelTimes: [533, 433, 483] },
 *   },
 *   dennisUI: {
 *     muted: false,
 *   },
 *
 */

var Settings =
/*#__PURE__*/
function () {
  function Settings() {
    if (!instance) {
      this._storageIsAllowed = _simplestorage.default.canUse();

      if (!this._storageIsAllowed) {
        console.warn('LOCAL STORAGE DISABLED');
      }

      this._loadLocalData();

      instance = this;
    }

    return instance;
  }

  var _proto = Settings.prototype;

  _proto.destroy = function destroy() {
    instance = null;
  };

  _proto.toggleAudio = function toggleAudio() {
    var state = !this.getAudio();

    this._setAudio(state);

    return {
      isMuted: !state
    };
  };

  _proto.setAudio = function setAudio(value) {
    this._setAudio(value);
  };

  _proto.getAudio = function getAudio() {
    return this.getAllSettings().audio;
  };

  _proto.getIsMuted = function getIsMuted() {
    return !this.getAllSettings().audio;
  }
  /**
   * LOCAL STORAGE API
   */
  ;

  _proto.getAllSettings = function getAllSettings() {
    var settings = JSON.parse(JSON.stringify(this.globalSettings));
    settings.audio = !settings.muted;

    if (this._isStorageAllowed()) {
      settings.gameData = this.gameSettings;
    } else {
      console.warn('getAllSettings : storage disabled');
    }

    return settings;
  };

  _proto.setGameData = function setGameData(key, value) {
    if (this._isStorageAllowed()) {
      this.gameSettings[key] = value;

      _simplestorage.default.set(GAME_STORAGE_KEY, JSON.stringify(this.gameSettings));
    } else {
      console.warn('setGameData : storage disabled');
    }
  }
  /**
   * LOCAL STORAGE PRIVATE
   */
  ;

  _proto._setAudio = function _setAudio(state) {
    this.globalSettings.muted = !state;

    this._saveGlobalSettings();
  };

  _proto._loadLocalData = function _loadLocalData() {
    if (this._isStorageAllowed()) {
      this.globalSettings = this._parseLocalStorage(UI_STORAGE_KEY);
      this.gameSettings = this._parseLocalStorage(GAME_STORAGE_KEY) || {};

      if (!this.globalSettings) {
        this.globalSettings = this._getDefaultSettings();

        this._saveGlobalSettings();
      }
    }
  };

  _proto._saveGlobalSettings = function _saveGlobalSettings() {
    if (this._isStorageAllowed()) {
      _simplestorage.default.set(UI_STORAGE_KEY, JSON.stringify(this.globalSettings));
    }
  };

  _proto._isStorageAllowed = function _isStorageAllowed() {
    return this._storageIsAllowed;
  };

  _proto._getDefaultSettings = function _getDefaultSettings() {
    var defaults = {};
    defaults.muted = false;
    return defaults;
  };

  _proto._parseLocalStorage = function _parseLocalStorage(key) {
    var data = _simplestorage.default.get(key);

    try {
      return JSON.parse(data);
    } catch (e) {}

    return null;
  };

  return Settings;
}();

var _default = Settings;
exports.default = _default;

/***/ }),

/***/ "eWNr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("AaIv");

__webpack_require__("45zI");

__webpack_require__("hE1C");

__webpack_require__("wiMi");

__webpack_require__("j3Ef");

__webpack_require__("a/rO");

__webpack_require__("QQAp");

__webpack_require__("mizm");

__webpack_require__("pkSX");

__webpack_require__("3Ipg");

__webpack_require__("vw/H");

__webpack_require__("GPcm");

__webpack_require__("J5eo");

__webpack_require__("3mz+");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("fKPv"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _LevelDataController = _interopRequireDefault(__webpack_require__("5jEF"));

var _ScrollingTiledSprites = _interopRequireDefault(__webpack_require__("U8x9"));

var _Row = _interopRequireDefault(__webpack_require__("U3nP"));

var _RowDashers = _interopRequireDefault(__webpack_require__("KL6g"));

var _RowShelves = _interopRequireDefault(__webpack_require__("WlCB"));

var _ShopEnd = _interopRequireDefault(__webpack_require__("CJ8M"));

var _AppConstants = __webpack_require__("zgbH");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RANDOM_ITEMS = ['balls', 'cap', 'flowerpot', 'phone', 'sock'];
var SHELF_GROUPS = [['shelf_3_3', 'shelf_3_1', 'shelf_3_6'], ['shelf_3_7', 'shelf_3_9', 'shelf_3_5'], ['shelf_3_8', 'shelf_3_4', 'shelf_3_2']];

var MapController =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(MapController, _Phaser$Group);

  /*
  ====================================================================================
    INIT
  ====================================================================================
  */
  function MapController(_ref) {
    var _this;

    var game = _ref.game,
        levelData = _ref.levelData,
        playerLevel = _ref.playerLevel;
    _this = _Phaser$Group.call(this, game) || this;
    _this.game = game; // grab the data required

    _this.levelData = _objectSpread({}, levelData);
    _this.playerLevel = playerLevel;
    _this.randomItems = Phaser.ArrayUtils.shuffle([].concat(RANDOM_ITEMS));
    _this.rows = [];
    _this.fastLaneCount = _this.levelData.fastLaneCount;
    _this.fastLanesSpawned = 0;

    _this.createLevel(); //pd this.startRoad = this.game.make.sprite(0, 0, 'road_start');
    //pd this.startRoad.position.set(0, game.sceneHeight - this.startRoad.height);
    // this.roadLanes = this.game.make.tileSprite(0, GAME_END_HEIGHT, this.game.defaultWidth, this.game.sceneHeight - 120, 'road_lane_tile');
    //pd this.roadLanes = this.game.make.sprite(0, 0, 'road_lane_tile');


    _this.createTiles(); // this.addChild(this.roadLanes);
    //pd this.addChild(this.startRoad);


    _this.endRoad = new _ShopEnd.default(_this.game);

    _this.addChild(_this.endRoad);

    _this.addChild(_this.laneContainer);

    _this.objects = _this.game.make.group();

    _this.objects.addMultiple(_this.rows); //this.addChild(this.objects);


    _this.updateSorting();

    return _this;
  }
  /*
  ====================================================================================
   MAP CREATION
  ====================================================================================
  */


  var _proto = MapController.prototype;

  _proto.createTiles = function createTiles() {
    var startY = _AppConstants.GAME_END_HEIGHT;
    this.laneContainer = this.game.make.group();

    for (var yInd = startY; yInd < this.game.sceneHeight - 120; yInd += _AppConstants.GAME_ROAD_HEIGHT) {
      var tile = this.game.make.sprite(0, yInd, 'shop_row');
      this.laneContainer.add(tile);
    }
  };

  _proto.createLevel = function createLevel() {
    this.createRows();
    /*
     * Add Random Objects
     */

    for (var _iterator = this.rows, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var row = _ref2;

      if (row instanceof _RowShelves.default) {
        if (Math.random() > 0.5) {
          Phaser.ArrayUtils.rotateRight(this.randomItems);
          var item = this.randomItems[0];
          row.addRandomItem(item);
        }
      }
    }
  };

  _proto.createRows = function createRows() {
    var pattern = [1, 2, 1];
    var dasherType = this.playerLevel % 4;

    for (var index = 0; index < this.levelData.laneCount + 1; index++) {
      var row = void 0;
      var sg = index % 3;
      var shelfGroup = Phaser.ArrayUtils.shuffle([].concat(SHELF_GROUPS[sg])); // console.log('shelfGroup', shelfGroup);

      if (index == this.levelData.laneCount || index == 0) {
        // last row - add empty
        row = new _Row.default({
          game: this.game,
          rowNum: index
        });
      } else if (index % 2 === 0) {
        // add row with shelves and obstacles
        row = new _RowShelves.default({
          game: this.game,
          rowNum: index,
          shelfGroup: shelfGroup
        });
      } else {
        // add row with dashers
        var ind = (index - 1) / 2 % 3;
        var dashers = pattern[ind];

        if (this.fastLanesSpawned < this.fastLaneCount && dashers == 1) {
          // fast row
          //Get a random value and spawn if greater than a 3 (70% chance)
          var rand = this.game.rnd.integerInRange(0, 10);

          if (rand > 3) {
            var _row = new _RowDashers.default({
              game: this.game,
              rowNum: index,
              dasherCount: dashers,
              minMoveSpeed: this.levelData.fastLaneMinSpeed,
              maxMoveSpeed: this.levelData.fastLaneMaxSpeed,
              vehicleVariations: this.levelData.vehicleVariations,
              dasherType: dasherType
            });

            this.rows.push(_row);
            this.fastLanesSpawned++;
            dasherType = (dasherType + dashers) % 4;
            continue;
          }
        } // add normal row with dashers


        row = new _RowDashers.default({
          game: this.game,
          rowNum: index,
          dasherCount: dashers,
          minMoveSpeed: this.levelData.minMoveSpeed,
          maxMoveSpeed: this.levelData.maxMoveSpeed,
          vehicleVariations: this.levelData.vehicleVariations,
          dasherType: dasherType
        });
        dasherType = (dasherType + dashers) % 4;
      }

      this.rows.push(row);
    }
  }
  /*
  ====================================================================================
    UPDATE
  ====================================================================================
  */
  ;

  _proto.updateMap = function updateMap(timeStep) {
    this.rows.forEach(function (element) {
      element.step(timeStep);
    });
  };

  _proto.stopAnimations = function stopAnimations() {
    this.rows.forEach(function (element) {
      element.stopAnims();
    });
  };

  _proto.startAnimations = function startAnimations() {
    this.rows.forEach(function (element) {
      element.startAnims();
    });
  };

  _proto.updateSorting = function updateSorting() {
    this.objects.sort('y', Phaser.Group.SORT_ASCENDING);
  }
  /*
  ====================================================================================
    GET
  ====================================================================================
  */
  ;

  _proto.getRowPosY = function getRowPosY(rowNum) {
    return this.rows[rowNum].rowPosY;
  };

  _proto.gridToPos = function gridToPos(x, y) {
    return this.rows[y].gridToPos(x);
  };

  _proto.gridToPosMiddle = function gridToPosMiddle(y) {
    return this.rows[y].gridPosMiddle();
  };

  _proto.getMidGrid = function getMidGrid(y) {
    return this.rows[y].getMidGrid();
  };

  _proto.canGoto = function canGoto(x, y) {
    var value = this.rows[y].cells[x];
    return value != 1;
  };

  _proto.getColliders = function getColliders(y) {
    var colliders = this.rows[y].getColliders();

    if (y < this.rows.length - 1) {
      colliders = colliders.concat(this.rows[y + 1].getColliders());
    }

    return colliders;
  }
  /*
  ====================================================================================
    SHUTDOWN
  ====================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    this.rows.forEach(function (element) {
      element.destroy(true);
    });
    this.rows = null;
    this.laneContainer.destroy(true);
    this.endRoad.destroy();

    _Phaser$Group.prototype.destroy.call(this);
  };

  return MapController;
}(Phaser.Group);

exports.default = MapController;

/***/ }),

/***/ "fY54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("AaIv");

__webpack_require__("j3Ef");

__webpack_require__("mizm");

__webpack_require__("pkSX");

__webpack_require__("3Ipg");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("fKPv"));

var _AppConstants = __webpack_require__("zgbH");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CopyController =
/*#__PURE__*/
function () {
  function CopyController(xml) {
    this.copy = {};
    var nodes = xml.getElementsByTagName('item');

    for (var i = 0; i < nodes.length; i++) {
      this.copy[nodes[i].getAttribute('id')] = nodes[i].childNodes[0].nodeValue;
    }
  }

  var _proto = CopyController.prototype;

  _proto.getCopy = function getCopy(copy_id) {
    return this.copy[copy_id] || 'copy not found [ ' + copy_id + ' ]';
  };

  _proto.getCopyNoDefault = function getCopyNoDefault(copy_id) {
    return this.copy[copy_id] || null;
  };

  _proto.createFontStyle = function createFontStyle(_ref) {
    var font = _ref.font,
        font_size = _ref.font_size,
        font_colour = _ref.font_colour,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;
    return _objectSpread({
      font: font_size + 'px ' + font,
      fill: font_colour,
      boundsAlignH: options.boundsAlignH || 'center',
      boundsAlignV: options.boundsAlignV || 'middle'
    }, options);
  };

  return CopyController;
}();

exports.default = CopyController;

/***/ }),

/***/ "gz72":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var TapArea =
/*#__PURE__*/
function (_Phaser$Sprite) {
  (0, _inheritsLoose2.default)(TapArea, _Phaser$Sprite);

  function TapArea(_ref) {
    var _this;

    var game = _ref.game,
        width = _ref.width,
        height = _ref.height,
        _ref$debug = _ref.debug,
        debug = _ref$debug === void 0 ? false : _ref$debug;
    _this = _Phaser$Sprite.call(this, game) || this;
    _this.inputEnabled = true;
    _this.hitArea = new Phaser.Rectangle(0, 0, width || _this.game.defaultWidth, height || _this.game.defaultHeight);
    _this.onSwipeLeft = new Phaser.Signal();
    _this.onSwipeRight = new Phaser.Signal();
    _this.onSwipeUp = new Phaser.Signal();

    if (debug) {
      _this.debugGraphic = _this.game.make.graphics();

      _this.debugGraphic.beginFill(0xff0000, 0.25);

      _this.debugGraphic.drawRect(0, 0, _this.hitArea.width, _this.hitArea.height);

      _this.addChild(_this.debugGraphic);
    }

    return _this;
  }

  var _proto = TapArea.prototype;

  _proto.activate = function activate() {
    this.events.onInputDown.add(this.handleDown, this);
  };

  _proto.deactivate = function deactivate() {
    this.events.onInputDown.remove(this.handleDown, this);
  };

  _proto.handleDown = function handleDown(e, b) {
    // swipe control
    // this.x0 = this.game.input.activePointer.x;
    // this.y0 = this.game.input.activePointer.y;
    //
    // this.game.time.events.add(100, this.tryAutoSwipe, this);
    // this.events.onInputUp.add(this.handleUp, this);
    // tap control
    var x0 = this.game.hero.worldPosition.x;
    var y0 = this.game.hero.worldPosition.y;
    var x1 = this.game.input.activePointer.x;
    var y1 = this.game.input.activePointer.y;
    var dx = x1 - x0;
    var dy = y1 - y0;

    if (Math.abs(dx) > Math.abs(dy) || dy > 0) {
      // horizontal move
      if (dx > 0) {
        this.onSwipeRight.dispatch();
      } else if (dx < 0) {
        this.onSwipeLeft.dispatch();
      }
    } else {
      this.onSwipeUp.dispatch();
    }
  };

  _proto.handleUp = function handleUp(e, b) {
    this.events.onInputUp.remove(this.handleUp, this);
    var dx = this.game.input.activePointer.x - this.x0;
    var dy = this.game.input.activePointer.y - this.y0;

    if (Math.abs(dx) > Math.abs(dy)) {
      // horizontal move
      if (dx > 0) {
        this.onSwipeRight.dispatch();
      } else if (dx < 0) {
        this.onSwipeLeft.dispatch();
      }
    } else if (dy < 0) {
      this.onSwipeUp.dispatch();
    } //this.onTap.dispatch({ taps_registered: this.tapsRegistered, x: x, y: y });

  };

  _proto.tryAutoSwipe = function tryAutoSwipe() {
    var dx = this.game.input.activePointer.x - this.x0;
    var dy = this.game.input.activePointer.y - this.y0;

    if (Math.abs(dx) > 20 || Math.abs(dy) > 20) {
      this.handleUp();
    }
  };

  _proto.destroy = function destroy() {
    this.deactivate();

    _Phaser$Sprite.prototype.destroy.call(this, true);
  };

  return TapArea;
}(Phaser.Sprite);

exports.default = TapArea;

/***/ }),

/***/ "h2Zx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("wiMi");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var RectMaskReveal =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(RectMaskReveal, _Phaser$Group);

  function RectMaskReveal(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Group.call(this, game) || this;
    _this.background = _this.game.make.image(0, 0, 'bg_generic');

    _this.add(_this.background);

    _this.render = _this.render.bind((0, _assertThisInitialized2.default)(_this));
    _this.w = _this.game.defaultWidth * 0.5;
    _this.h = _this.game.defaultHeight * 0.5;
    _this.outer = _this.generateOuter();
    _this.maskp = _this.game.add.graphics();

    _this.maskp.anchor.set(0.5);

    _this.maskp.position.set(_this.w, _this.h);

    _this.addChild(_this.maskp);

    _this.background.mask = _this.maskp;

    _this.render(10);

    _this.onInComplete = new Phaser.Signal();
    _this.onOutComplete = new Phaser.Signal();
    _this.game.input.enabled = false;
    return _this;
  }

  var _proto = RectMaskReveal.prototype;

  _proto.generateOuter = function generateOuter() {
    var x1 = -this.w;
    var y1 = -this.h;
    var x2 = this.w;
    var y2 = this.h;
    return [x1, y1, x2, y1, x2, y2, x1, y2, x1, y1]; // outer coords of rect mask
  };

  _proto.render = function render(step) {
    var ratio = this.w / this.h;
    var xx1 = Math.min(0, -(this.w - step * ratio));
    var yy1 = Math.min(0, -(this.h - step));
    var xx2 = Math.max(0, this.w - step * ratio);
    var yy2 = Math.max(0, this.h - step);
    var inner = [];

    if (yy1 !== 0 && yy2 !== 0) {
      inner = [xx1, yy1, xx2, yy1, xx2, yy2, xx1, yy2, xx1, yy1];
    }

    var ps = [].concat(this.outer, inner);
    var poly = new Phaser.Polygon(ps);
    this.maskp.clear();
    this.maskp.beginFill(0x000000, 1);
    this.maskp.drawPolygon(poly.points);
    this.maskp.endFill();
  };

  _proto.init = function init() {};

  _proto.startIn = function startIn() {
    var _this2 = this;

    var track = {
      step: 0
    };
    var tween = this.game.add.tween(track).to({
      step: this.h + 1
    }, RectMaskReveal.DURATION, Phaser.Easing.Circular.Out);
    tween.onUpdateCallback(function () {
      _this2.render(track.step);
    });
    tween.start();
    tween.onComplete.addOnce(this.startInComplete, this);
  };

  _proto.startInComplete = function startInComplete() {
    this.onInComplete.dispatch(this);
  };

  _proto.startOut = function startOut() {
    var _this3 = this;

    var track = {
      step: this.h + 1
    };
    var tween = this.game.add.tween(track).to({
      step: 0
    }, RectMaskReveal.DURATION, Phaser.Easing.Circular.In);
    tween.onUpdateCallback(function () {
      _this3.render(track.step);
    });
    tween.start();
    tween.onComplete.addOnce(this.startOutComplete, this);
  };

  _proto.startOutComplete = function startOutComplete() {
    this.game.input.enabled = true;
    this.onOutComplete.dispatch(this);
  };

  _proto.destroy = function destroy(destroyChildren, soft) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    this.game.tweens.removeFrom(this, true);
    this.game.tweens.removeFrom(this);
    this.onInComplete.forget();
    this.onInComplete.dispose();
    this.onInComplete.removeAll();
    this.onOutComplete.forget();
    this.onOutComplete.dispose();
    this.onOutComplete.removeAll();
    this.background = null;
    this.maskp = null;

    _Phaser$Group.prototype.destroy.call(this, destroyChildren);
  };

  return RectMaskReveal;
}(Phaser.Group);

RectMaskReveal.DURATION = 500;
var _default = RectMaskReveal;
exports.default = _default;

/***/ }),

/***/ "hDA+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Zero pad
 */

__webpack_require__("vw/H");

__webpack_require__("q4B+");

__webpack_require__("ocEJ");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easeOutQuad = exports.easeInQuad = exports.commaNumber = exports.zeroPad = void 0;

var zeroPad = function zeroPad(num, length) {
  var n = Math.abs(num);
  var zeros = Math.max(0, length - Math.floor(n).toString().length);
  var zeroString = Math.pow(10, zeros).toString().substr(1);

  if (num < 0) {
    zeroString = '-' + zeroString;
  }

  return zeroString + n;
};

exports.zeroPad = zeroPad;

var commaNumber = function commaNumber(num) {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(num)) {
    num = num.replace(pattern, '$1,$2');
  }

  return num;
};
/*
=================================================================================================
  EASING // t = time, b = start value, c = end value, d = duration
=================================================================================================
*/


exports.commaNumber = commaNumber;

var easeInQuad = function easeInQuad(t, b, c, d) {
  return c * (t /= d) * t + b;
};

exports.easeInQuad = easeInQuad;

var easeOutQuad = function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
};

exports.easeOutQuad = easeOutQuad;

/***/ }),

/***/ "hvFc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "jTTx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("AaIv");

__webpack_require__("45zI");

__webpack_require__("hE1C");

__webpack_require__("wiMi");

__webpack_require__("a/rO");

__webpack_require__("vw/H");

__webpack_require__("q4B+");

__webpack_require__("GPcm");

__webpack_require__("pXic");

__webpack_require__("3mz+");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prettyLog = void 0;

/**
 * Pretty print name/value pairs in console
 */
var prettyLog = function prettyLog(messages) {
  var allLabels = messages.reduce(function (acc, val, ind) {
    acc.push(val.label);
    return acc;
  }, []);
  var allOutput = messages.reduce(function (acc, val, ind) {
    return [].concat(acc, val.output);
  }, []);

  var limits = _getMaxLength(allOutput); // get longest string values


  limits.labelMax = _getMaxLabelLength(allLabels);

  for (var _iterator = messages, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var msg = _ref;
    msg.limits = limits;

    _prettyLog(msg);
  }
};

exports.prettyLog = prettyLog;

var _prettyLog = function _prettyLog(_ref2) {
  var _console;

  var label = _ref2.label,
      output = _ref2.output,
      limits = _ref2.limits;

  /**
   * console formatting via css
   *    font-family: monospace;
   src: local('Menlo');
   */
  var font = 'font-family: monospace; src: local("Menlo");';
  var lbl = font + 'background-color:red; font-weight: bold; padding:3px 10px; color:white';
  var tpl1 = font + 'background-color:gainsboro; padding:3px 6px 3px 12px; color:black';
  var tpl2 = font + 'background-color:palegreen; font-weight: bold; padding:3px 6px; color:black';
  var template = [tpl1, tpl2];

  var maxLength = limits || _getMaxLength(output);

  var labelPadded = _rightPad(label, limits.labelMax);

  var f = "%c" + labelPadded + _formatLog(output, maxLength);
  /**
   * Generate message formatting
   */


  var css = output.reduce(function (acc, val, ind) {
    return [].concat(acc, template);
  }, []);

  (_console = console).info.apply(_console, [f, lbl].concat(css));
};
/**
 * calc max length for all keys and all values
 */


var _getMaxLabelLength = function _getMaxLabelLength(ary) {
  return ary.reduce(function (acc, val, ind) {
    acc = Math.max(acc, val.toString().length);
    return acc;
  }, 0);
};

var _getMaxLength = function _getMaxLength(ary) {
  return ary.reduce(function (acc, val, ind) {
    acc.key = Math.max(acc.key, val.key.toString().length);
    acc.val = Math.max(acc.val, val.val.toString().length);
    return acc;
  }, {
    key: 0,
    val: 0
  });
};
/**
 * Pad and format each name/value pair
 */


var _formatLog = function _formatLog(ary, maxLength) {
  return ary.reduce(function (acc, val, ind) {
    var key = _leftPad(val.key, maxLength.key);

    var value = _rightPad(val.val, maxLength.val);

    acc += "%c" + key + "%c" + value;
    return acc;
  }, '');
};

var _leftPad = function _leftPad(str, length) {
  if (length === void 0) {
    length = 10;
  }

  return "" + ' '.repeat(Math.max(length - str.toString().length, 0)) + str;
};

var _rightPad = function _rightPad(str, length) {
  if (length === void 0) {
    length = 10;
  }

  return "" + str + ' '.repeat(Math.max(length - str.toString().length, 0));
};

/***/ }),

/***/ "jVHN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("wiMi");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var PolygonMaskReveal =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(PolygonMaskReveal, _Phaser$Group);

  function PolygonMaskReveal(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Group.call(this, game) || this;
    _this.background = _this.game.make.image(0, 0, 'bg_generic');

    _this.add(_this.background);

    _this.render = _this.render.bind((0, _assertThisInitialized2.default)(_this));
    _this.w = _this.game.defaultWidth * 0.5;
    _this.h = _this.game.defaultHeight * 0.5;
    _this.max = _this.w + 100;
    _this.outer = _this.generateOuter();
    _this.maskp = _this.game.add.graphics();

    _this.addChild(_this.maskp);

    _this.background.mask = _this.maskp;

    _this.render(_this.max);

    _this.onInComplete = new Phaser.Signal();
    _this.onOutComplete = new Phaser.Signal();
    _this.game.input.enabled = false;
    return _this;
  }

  var _proto = PolygonMaskReveal.prototype;

  _proto.generateOuter = function generateOuter() {
    var x1 = 0;
    var y1 = 0;
    var x2 = this.game.defaultWidth;
    var y2 = this.game.defaultHeight;
    return [x1, y1, x2, y1, x2, y2, x1, y2, x1, y1]; // outer coords of rect mask
  };

  _proto.generatePolygon = function generatePolygon(size) {
    /**
     * https://stackoverflow.com/questions/4839993/how-to-draw-polygons-on-an-html5-canvas?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
     * https://dustinpfister.github.io/2017/10/22/phaser-graphics-polygon/
     */
    var p = []; // points array to be returned

    var i;

    for (i = 1; i <= PolygonMaskReveal.NUMBER_SIDES; i++) {
      p.push(this.w + size * Math.cos(i * 2 * Math.PI / PolygonMaskReveal.NUMBER_SIDES));
      p.push(this.h + size * Math.sin(i * 2 * Math.PI / PolygonMaskReveal.NUMBER_SIDES));
    }

    p.push(p[0]); // add first point to end to close polygon

    p.push(p[1]);
    return p;
  };

  _proto.render = function render(step) {
    var inner = this.generatePolygon(step);
    var ps = [].concat(this.outer, inner);
    var poly = new Phaser.Polygon(ps);
    this.maskp.clear();
    this.maskp.beginFill(0x000000, 1);
    this.maskp.drawPolygon(poly.points);
    this.maskp.endFill();
  };

  _proto.init = function init() {};

  _proto.startIn = function startIn() {
    var _this2 = this;

    var track = {
      step: this.max
    };
    var tween = this.game.add.tween(track).to({
      step: 0
    }, PolygonMaskReveal.DURATION, Phaser.Easing.Circular.Out);
    tween.onUpdateCallback(function () {
      _this2.render(track.step);
    });
    tween.start();
    tween.onComplete.addOnce(this.startInComplete, this);
  };

  _proto.startInComplete = function startInComplete() {
    this.onInComplete.dispatch(this);
  };

  _proto.startOut = function startOut() {
    var _this3 = this;

    var track = {
      step: 0
    };
    var tween = this.game.add.tween(track).to({
      step: this.max
    }, PolygonMaskReveal.DURATION, Phaser.Easing.Circular.In);
    tween.onUpdateCallback(function () {
      _this3.render(track.step);
    });
    tween.start();
    tween.onComplete.addOnce(this.startOutComplete, this);
  };

  _proto.startOutComplete = function startOutComplete() {
    this.game.input.enabled = true;
    this.onOutComplete.dispatch(this);
  };

  _proto.destroy = function destroy(destroyChildren, soft) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    this.game.tweens.removeFrom(this, true);
    this.game.tweens.removeFrom(this);
    this.onInComplete.forget();
    this.onInComplete.dispose();
    this.onInComplete.removeAll();
    this.onOutComplete.forget();
    this.onOutComplete.dispose();
    this.onOutComplete.removeAll();
    this.background = null;
    this.maskp = null;

    _Phaser$Group.prototype.destroy.call(this, destroyChildren);
  };

  return PolygonMaskReveal;
}(Phaser.Group);

PolygonMaskReveal.DURATION = 1000;
PolygonMaskReveal.NUMBER_SIDES = 16;
var _default = PolygonMaskReveal;
exports.default = _default;

/***/ }),

/***/ "ksl4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Title = _interopRequireDefault(__webpack_require__("0kin"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var AppConstants = _interopRequireWildcard(__webpack_require__("zgbH"));

var _Text = __webpack_require__("NfmA");

var HudLevelEnd =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudLevelEnd, _Phaser$Group);

  function HudLevelEnd(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Group.call(this, game) || this;
    _this.background = new _BackgroundColourFill.default({
      game: game,
      colour: '#000000',
      alpha: 0.3
    });
    _this.background.width = _this.game.width;
    _this.background.height = _this.game.height;

    _this.add(_this.background); // container to house and position contents


    _this.container = _this.game.make.group();

    _this.add(_this.container); // baking panel


    _this.panel = _this.game.make.image(0, 0, 'ui', 'panel_generic');

    _this.container.add(_this.panel); // close button


    _this.btnClose = new _ButtonSimple.default({
      game: _this.game,
      id: 'btn_close',
      skin: 'btn_close'
    });
    _this.btnClose.x = _this.panel.width * 0.95;
    _this.btnClose.y = _this.btnClose.height / 4;

    _this.btnClose.onInputDown.add(_this.closePopup, (0, _assertThisInitialized2.default)(_this));

    _this.container.addChild(_this.btnClose); // add upper instruction text


    _this.upperText = (0, _Text.createTextField)(_this.game, AppConstants.FONT_COPY, 80, AppConstants.COPY_WHITE, 60, 0, {
      wordWrap: true,
      wordWrapWidth: _this.panel.width * 0.9,
      boundsAlignH: 'center',
      boundsAlignV: 'middle',
      align: 'center'
    });

    _this.upperText.anchor.set(0.5);

    _this.upperText.text = _this.game.copy.getCopy('how_to_play');
    _this.upperText.x = _this.panel.x + _this.panel.width * 0.5;
    _this.upperText.y = _this.panel.y + 75;

    _this.container.add(_this.upperText);

    _this.instructionImage = _this.game.make.image(0, 0, 'ui', 'instructions');

    _this.instructionImage.anchor.set(0.5);

    _this.instructionImage.x = _this.panel.width * 0.5;
    _this.instructionImage.y = 230;

    _this.container.add(_this.instructionImage);

    _this.lowerText = (0, _Text.createTextField)(_this.game, AppConstants.FONT_COPY, 33, AppConstants.COPY_WHITE, 60, 0, {
      wordWrap: true,
      wordWrapWidth: _this.panel.width * 0.9,
      align: 'center'
    });
    _this.lowerText.lineSpacing = -5;

    _this.lowerText.anchor.set(0.5);

    _this.lowerText.text = _this.game.copy.getCopy('how_to_play_' + (Phaser.Device.desktop ? 'desktop' : 'mobile'));
    _this.lowerText.x = _this.panel.width * 0.5;
    _this.lowerText.y = _this.instructionImage.y + _this.instructionImage.height / 2 + 125;

    _this.container.add(_this.lowerText); // adjust panel positon based on title position
    // this.panel.y = this;


    _this.onClose = new Phaser.Signal(); // positioning

    _this.game.scale.onSizeChange.add(_this.handleScreenResize, (0, _assertThisInitialized2.default)(_this)); // this.fixedToCamera = true;


    _this.handleScreenResize();

    return _this;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */


  var _proto = HudLevelEnd.prototype;

  /*
  ============================================================================================
    EVENT HANDLERS
  ============================================================================================
  */
  _proto.handleScreenResize = function handleScreenResize() {
    this.container.x = this.game.width * 0.5 - this.width * 0.5;
    this.container.y = this.game.height * 0.5 - this.height * 0.5;
    this.background.width = this.game.width;
    this.background.height = this.game.height;
  };

  _proto.handleReplay = function handleReplay() {
    this.game.controller.replayLevel();
    this.destroy();
  };

  _proto.handleNextLevel = function handleNextLevel() {
    this.game.controller.nextLevel();
    this.destroy();
  };

  _proto.handleTryAgain = function handleTryAgain() {
    this.game.controller.replayLevel();
    this.destroy();
  };

  _proto.closePopup = function closePopup() {
    this.onClose.dispatch();
    this.destroy(true);
  }
  /*
  ============================================================================================
    TOODLES!
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    this.game.scale.onSizeChange.remove(this.handleScreenResize, this);
    this.btnClose.onInputDown.remove(this.closePopup, this);
    this.btnClose.destroy(true);
    this.panel.destroy(true);
    this.container.destroy(true); // nullify

    this.btnClose = null;
    this.panel = null;
    this.container = null; // super dupa

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(HudLevelEnd, [{
    key: "height",
    get: function get() {
      return this.panel.height + this.panel.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.panel.width;
    }
  }]);
  return HudLevelEnd;
}(Phaser.Group);

exports.default = HudLevelEnd;

/***/ }),

/***/ "kt8K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _utils = __webpack_require__("hDA+");

var _AppConstants = __webpack_require__("zgbH");

var _Text = __webpack_require__("NfmA");

var HudTimer =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudTimer, _Phaser$Group);

  function HudTimer(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Group.call(this, game) || this;
    _this.bg = _this.game.make.image(0, 0, 'ui', 'timerbg');
    /**
     * Create textfields
     */

    _this.minutesDisplay = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 42, _AppConstants.TIMER_TEXT_COLOUR, 78, -12);
    _this.minutesDisplay.stroke = _AppConstants.TIMER_SHADOW_COLOUR;
    _this.minutesDisplay.strokeThickness = 9;

    _this.minutesDisplay.setShadow(3, 3, _AppConstants.TIMER_SHADOW_COLOUR, 0);

    var y = _this.minutesDisplay.y + 9;
    _this.secondsDisplay = (0, _Text.createTextField)(_this.game, _AppConstants.FONT_TITLE, 32, _AppConstants.TIMER_TEXT_COLOUR, 170, y);
    _this.secondsDisplay.stroke = _AppConstants.TIMER_SHADOW_COLOUR;
    _this.secondsDisplay.strokeThickness = 9;

    _this.secondsDisplay.setShadow(3, 3, _AppConstants.TIMER_SHADOW_COLOUR, 0);

    _this.add(_this.bg);

    _this.add(_this.minutesDisplay);

    _this.add(_this.secondsDisplay);

    _this.reset();

    return _this;
  }

  var _proto = HudTimer.prototype;

  _proto.reset = function reset() {
    this.setTime(0);
  };

  _proto.setTime = function setTime(value) {
    var seconds = Math.floor(value / 1000) % 60;
    var minutes = Math.floor(value / 60000) % 60;
    this.render(minutes, seconds);
  };

  _proto.render = function render(minutes, seconds) {
    this.minutesDisplay.text = (0, _utils.zeroPad)(minutes, 2);
    this.secondsDisplay.text = (0, _utils.zeroPad)(seconds, 2);
  };

  _proto.destroy = function destroy(destroyChildren, soft) {
    if (destroyChildren === void 0) {
      destroyChildren = true;
    }

    this.minutesDisplay = null;
    this.secondsDisplay = null;

    _Phaser$Group.prototype.destroy.call(this, destroyChildren);
  };

  return HudTimer;
}(Phaser.Group);

var _default = HudTimer;
exports.default = _default;

/***/ }),

/***/ "l3L8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _InstructionHand = _interopRequireDefault(__webpack_require__("n58B"));

var _HudLevelCountdown = _interopRequireDefault(__webpack_require__("F9ow"));

var GameTutorialController =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(GameTutorialController, _Phaser$Group);

  function GameTutorialController(_ref) {
    var _this;

    var game = _ref.game,
        mapController = _ref.mapController,
        dennis = _ref.dennis;
    _this = _Phaser$Group.call(this, game) || this;
    _this.onComplete = new Phaser.Signal();
    _this.active = true;
    _this.control = _this.game.make.image(0, 0, '');
    return _this;
  }

  var _proto = GameTutorialController.prototype;

  _proto.nextStep = function nextStep() {
    switch (this.state) {
      case GameTutorialController.STATE_IDLE:
        break;
    }
  };

  _proto.dispatchComplete = function dispatchComplete() {
    this.active = false;
    this.countdown.onComplete.remove(this.dispatchComplete, this);
    this.onComplete.dispatch();
  };

  _proto.update = function update() {
    switch (this.state) {}
  };

  _proto.destroy = function destroy() {
    this.countdown.destroy();

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  return GameTutorialController;
}(Phaser.Group);

exports.default = GameTutorialController;

/***/ }),

/***/ "l3Se":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _Hud = _interopRequireDefault(__webpack_require__("d0OL"));

var _Text = __webpack_require__("NfmA");

var _AppConstants = __webpack_require__("zgbH");

var _GameSFX = __webpack_require__("QklZ");

var GameEnd =
/*#__PURE__*/
function (_Phaser$State) {
  (0, _inheritsLoose2.default)(GameEnd, _Phaser$State);

  function GameEnd() {
    return _Phaser$State.apply(this, arguments) || this;
  }

  var _proto = GameEnd.prototype;

  _proto.init = function init(_ref) {
    var character = _ref.character;
    this.character = character;
  };

  _proto.preload = function preload(game) {};

  _proto.create = function create(game) {
    this.game = game;
    this.background = game.make.sprite(0, 0, 'bg_game_complete');
    this.background.anchor.set(0.5, 0.5);
    this.background.position.set(0, this.game.height);
    this.game.add.existing(this.background);
    this.container = game.add.group();
    this.createCharacters();
    this.copy = (0, _Text.createTextField)(this.game, _AppConstants.FONT_TITLE, 84, _AppConstants.FONT_COLOUR_LEVEL_WIN);
    this.copy.stroke = _AppConstants.FONT_COLOUR_STROKE;
    this.copy.strokeThickness = 6;
    this.copy.text = this.game.copy.getCopy('game') + ' ' + this.game.copy.getCopy('complete');
    this.copy.anchor.set(0.5);
    this.copy.setShadow(3, 3, 'rgba(0,0,0,0.5)', 0);
    this.copy.position.set(this.game.width * 0.5, this.game.height * 0.2);
    this.game.add.existing(this.copy);
    this.game.windowEventController.handleWindowResize();
    this.game.scale.onSizeChange.add(this.positionContainer, this);
    this.positionContainer();
    this.game.hud.activate({
      id: _Hud.default.GAMEEND
    });
    this.game.hud.fadeIn();
    this.game.sounds.playSFX(_GameSFX.GAME_SFX_GAME_COMPLETE, {
      delay: 2600
    });
    this.game.sounds.playSFX(_GameSFX.GAME_SFX_PATTY);
  };

  _proto.createCharacters = function createCharacters() {
    this.apple = this.game.make.sprite(0, 0, 'apple_endings', 'apple_complete_0001');
    this.apple.animations.add('win', Phaser.Animation.generateFrameNames('apple_complete_', 0, 29, '', 4), 24, true);
    this.apple.anchor.set(0.5, 1);
    this.apple.position.set(800 - this.background.width / 2, 480 - this.background.height / 2);
    this.apple.scale.set(0.54);
    this.apple.play('win');
    this.onion = this.game.make.sprite(0, 0, 'onion_endings', 'onion_complete_0001');
    this.onion.animations.add('win', Phaser.Animation.generateFrameNames('onion_complete_', 0, 30, '', 4), 24, true);
    this.onion.anchor.set(0.5, 1);
    this.onion.position.set(465 - this.background.width / 2, 480 - this.background.height / 2);
    this.onion.scale.set(0.54);
    this.onion.play('win'); //ms patty

    this.patty = this.game.make.spine(0, 0, 'patty');
    this.patty.setAnimationByName(0, 'Dance', true);
    this.patty.anchor.set(0.5, 1);
    this.patty.position.set(620 - this.background.width / 2, 480 - this.background.height / 2); //

    this.background.addChild(this.onion);
    this.background.addChild(this.patty);
    this.background.addChild(this.apple);
  };

  _proto.positionContainer = function positionContainer() {
    var x = 0;
    var y = 0;
    this.container.position.set(x, y);
    this.background.scale.set(Math.max(this.game.height / this.game.defaultHeight, this.game.width / this.game.defaultWidth));
    this.background.position.set(this.game.width * 0.5, this.game.height * 0.5);
    var scale = Math.max(this.game.height / this.game.defaultHeight, this.game.width / this.game.defaultWidth);
    var yOffset = 1 - scale;
    yOffset /= 4;
    this.copy.position.set(this.game.width * 0.5, this.game.height * (0.2 + yOffset));
  };

  _proto.update = function update() {
    this.patty.update();
  };

  _proto.shutdown = function shutdown(game) {
    game.scale.onSizeChange.remove(this.positionContainer, this); // destroy

    this.background.destroy(true);
    this.container.destroy(true);
    this.apple.destroy(true);
    this.onion.destroy(true);
    this.patty.destroy(true);
    this.copy.destroy(true); // clear up

    this.background = null;
    this.container = null;
    this.apple = null;
    this.onion = null;
    this.patty = null;
    this.copy = null;
  };

  return GameEnd;
}(Phaser.State);

var _default = GameEnd;
exports.default = _default;

/***/ }),

/***/ "lWI5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("AaIv");

__webpack_require__("45zI");

__webpack_require__("hE1C");

__webpack_require__("a/rO");

__webpack_require__("vw/H");

__webpack_require__("GPcm");

__webpack_require__("pXic");

__webpack_require__("UUvd");

__webpack_require__("3mz+");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _InstructionsPanel = _interopRequireDefault(__webpack_require__("LKd1"));

var _ButtonFixedPosition = _interopRequireDefault(__webpack_require__("BKU+"));

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var _GameSFX = __webpack_require__("QklZ");

var Instructions =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(Instructions, _Phaser$Group);

  function Instructions(_ref) {
    var _this;

    var game = _ref.game,
        closeBtnData = _ref.closeBtnData;
    _this = _Phaser$Group.call(this, game) || this;

    _this.game.track(AppTrackingEvents.VIEW_SCREEN_INSTRUCTIONS);

    var sheet = 'instructions';
    _this.panels = [new _InstructionsPanel.default({
      id: 'instructions01',
      game: _this.game,
      sheet: sheet,
      index: 0
    }), new _InstructionsPanel.default({
      id: 'instructions02',
      game: _this.game,
      sheet: sheet,
      index: 1
    }), new _InstructionsPanel.default({
      id: 'instructions03',
      game: _this.game,
      sheet: sheet,
      index: 2
    }), new _InstructionsPanel.default({
      id: 'instructions04',
      game: _this.game,
      sheet: sheet,
      index: 3
    })];
    _this.background = _this.game.make.image(0, 0, 'bg_fade');

    _this.background.anchor.set(0);

    _this.add(_this.background);

    _this.background.inputEnabled = true;
    _this.background.input.priorityID = 0;
    _this.background.input.useHandCursor = false;
    _this.panelContainer = _this.game.make.group();

    _this.add(_this.panelContainer);

    _this.addPanels();

    _this.createCloseButton(closeBtnData);

    _this.positionElements();

    return _this;
  }

  var _proto = Instructions.prototype;

  _proto.createCloseButton = function createCloseButton(data) {
    if (data) {
      var id = data.id,
          sfx_id = data.sfx_id,
          skin = data.skin,
          ariaLabelID = data.ariaLabelID;
      var opts = {
        game: this.game,
        id: id,
        x: 0,
        y: 0,
        sfx_id: sfx_id,
        skin: skin,
        ariaLabelID: ariaLabelID
      };
      this.closeButton = new _ButtonFixedPosition.default(opts);
      this.closeButton.onInputDown.add(this.handleClose, this);
      var x = this.panels[0].width + 100;
      var y = this.panels[this.panels.length - 1].y + this.panels[this.panels.length - 1].height + 40;
      this.closeButton.position.set(x, y);
    }
  };

  _proto.handleClose = function handleClose() {
    this.game.controller.closeInstructions();
  };

  _proto.positionElements = function positionElements() {
    this.background.width = this.game.width;
    this.background.height = this.game.height;
    this.panelContainer.position.set((this.game.width - this.panelContainer.width) * 0.5, this.game.height * 0.04);
  };

  _proto.activate = function activate() {
    this.game.scale.onSizeChange.add(this.positionElements, this);
    var childIndex = this.game.stage.children.length;
    this.game.stage.addChildAt(this, childIndex);
    this.cnt = 0;
    this.timer = this.game.time.events.repeat(Instructions.ANIM_DURATION, this.panels.length, this.showPanel, this);
    this.showPanel();
  };

  _proto.deactivate = function deactivate() {
    this.game.scale.onSizeChange.remove(this.positionElements, this);
    this.game.world.remove(this);
  };

  _proto.addPanels = function addPanels() {
    for (var _iterator = this.panels.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var _ref3 = _ref2,
          index = _ref3[0],
          panel = _ref3[1];
      var content = Instructions.content[index];
      panel.init(content);
      this.panelContainer.add(panel);
    }
  };

  _proto.showPanel = function showPanel() {
    this.game.sounds.playSFX(_GameSFX.GAME_SFX_INSTRUCTION_WOOSH);

    if (this.cnt < this.panels.length) {
      this.panels[this.cnt].show();
      this.cnt++;
    } else {
      this.panelContainer.add(this.closeButton);
    }
  };

  _proto.destroy = function destroy() {
    if (this.timer) {
      this.game.time.events.remove(this.timer);
    }

    this.panelContainer.destroy(true);
    this.panelContainer = null;

    for (var _iterator2 = this.panels, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref4 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref4 = _i2.value;
      }

      var panel = _ref4;
      panel.destroy();
      panel = null;
    }

    this.closeButton.destroy(true);
    this.closeButton = null;
    this.background = null;
    this.deactivate();

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  return Instructions;
}(Phaser.Group);

Instructions.content = [{
  position: {
    x: 0,
    y: 0
  }
}, {
  position: {
    x: 75,
    y: 165
  }
}, {
  position: {
    x: 265,
    y: 220
  }
}, {
  position: {
    x: 75,
    y: 400
  }
}];
Instructions.ANIM_DURATION = 1000;
var _default = Instructions;
exports.default = _default;

/***/ }),

/***/ "ltll":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var AppConstants = _interopRequireWildcard(__webpack_require__("zgbH"));

var _TimeController = _interopRequireDefault(__webpack_require__("LwBu"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _MapController = _interopRequireDefault(__webpack_require__("eWNr"));

var _CollisionController = _interopRequireDefault(__webpack_require__("oIC/"));

var _TapArea = _interopRequireDefault(__webpack_require__("gz72"));

var _GameTutorialController = _interopRequireDefault(__webpack_require__("l3L8"));

var _Hero = _interopRequireDefault(__webpack_require__("CJWn"));

var _HudLevelCountdown = _interopRequireDefault(__webpack_require__("F9ow"));

var _Row = _interopRequireDefault(__webpack_require__("U3nP"));

var _AppConstants2 = __webpack_require__("zgbH");

var _GameSFX = __webpack_require__("QklZ");

var _WarningDisplay = _interopRequireDefault(__webpack_require__("+m+m"));

var Game =
/*#__PURE__*/
function (_Phaser$State) {
  (0, _inheritsLoose2.default)(Game, _Phaser$State);

  function Game() {
    return _Phaser$State.apply(this, arguments) || this;
  }

  var _proto = Game.prototype;

  _proto.init = function init(_ref) {
    var levelData = _ref.levelData,
        showTutorial = _ref.showTutorial,
        playerLevel = _ref.playerLevel;
    this.levelData = levelData;
    this.playerLevel = playerLevel;
    this.game.log('Start Level', 'level : ' + this.playerLevel, this.levelData);
    this.laneCount = this.levelData.laneCount;
    this.rowGap = 120;
    this.rows = [];
    this.currentLane = 0;
    this.controlsBuffer = [];
    this.game.controller.gameModel.isCharacterAvailable = true; // used to check if 2nd character can be placed in trolley

    this.game.sounds.playGameMusic();
    this.gameContainer = this.game.add.group();
  };

  _proto.create = function create(game) {
    this.game = game;
    this.game.sceneHeight = _AppConstants2.GAME_END_HEIGHT + _AppConstants2.GAME_START_HEIGHT + this.laneCount / 2 * _AppConstants2.GAME_ROAD_HEIGHT;
    this.game.rowCount = this.laneCount; //Create all controllers needed for the game

    this.createControllers(); //Create all the listeners needed

    this.createListeners();
    this.createScene(); // show tutorial first time

    if (this.game.controller.gameModel.tutorialComplete == false) {
      this.game.hud.showInstructions();
      this.game.hud.gameInstructions.onClose.add(this.handleTutorialComplete, this, 1);
      this.updatePauseStatus({
        paused: true,
        fromUI: false,
        stopMusic: false
      });
    }

    this.handleStartGame();
  };

  _proto.createControllers = function createControllers() {
    //Create a collision controller
    this.collisionController = new _CollisionController.default({
      game: this.game,
      debug: false
    }); //If the collision debugger is active, add it to the scene

    if (this.collisionController.debugger) this.game.add.existing(this.collisionController.debugger); // Create a time controller

    this.timeController = new _TimeController.default(this.game);
    this.mapController = new _MapController.default({
      game: this.game,
      levelData: this.levelData,
      playerLevel: this.playerLevel
    }); //this.gameContainer.add(this.mapController.roadLanes);

    this.gameContainer.addChild(this.mapController);
    this.gameContainer.addChild(this.mapController.objects);
  };

  _proto.createListeners = function createListeners() {
    //Create pause game listener
    this.game.controller.uiModel.onPauseIsChanged.add(this.updatePauseStatus, this);
    this.isPaused = false; //Create an area to listen for tap input

    this.tapArea = new _TapArea.default({
      game: this.game,
      width: this.game.width,
      height: this.game.height,
      debug: false
    }); // add listeners

    this.tapArea.onSwipeUp.add(this.handleUserInputUp, this);
    this.tapArea.onSwipeLeft.add(this.handleUserInputLeft, this);
    this.tapArea.onSwipeRight.add(this.handleUserInputRight, this); //Fix to camera so it's always on screen

    this.tapArea.fixedToCamera = true;
    this.game.add.existing(this.tapArea);
    this.bindedWindowBlur = this.handleWindowBlur.bind(this);
    window.addEventListener('blur', this.bindedWindowBlur); // keyboards

    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.upKey.onDown.add(this.handleUserInputUp, this);
    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.leftKey.onDown.add(this.handleUserInputLeft, this);
    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.rightKey.onDown.add(this.handleUserInputRight, this); //Create window resizing listener

    this.game.windowEventController.handleWindowResize();
    this.game.scale.onSizeChange.add(this.handleSizeChange, this);
    this.handleSizeChange();
  };

  _proto.disableControls = function disableControls() {
    this.tapArea.onSwipeUp.remove(this.handleUserInputUp, this);
    this.tapArea.onSwipeLeft.remove(this.handleUserInputLeft, this);
    this.tapArea.onSwipeRight.remove(this.handleUserInputRight, this);
    this.upKey.onDown.remove(this.handleUserInputUp, this);
    this.leftKey.onDown.remove(this.handleUserInputLeft, this);
    this.rightKey.onDown.remove(this.handleUserInputRight, this);
  };

  _proto.createScene = function createScene() {
    var character = this.game.controller.gameModel.getChosenCharacter(); //Create the hero character

    this.game.hero = new _Hero.default({
      game: this.game,
      gameState: this,
      character: character
    }, this); //Set it's position to be in the middle of the screen

    var pos = this.mapController.gridToPosMiddle(0);
    this.game.hero.position.set(pos.x, pos.y);
    this.game.hero.currentColumn = this.mapController.getMidGrid(0); // add to group with all sorted objects

    this.mapController.objects.addChild(this.game.hero); //

    this.createCamera();
  };

  _proto.createCamera = function createCamera() {
    //Set the camera's bounds
    this.game.world.setBounds((this.game.width - _AppConstants2.GAME_ROAD_WIDTH) / 2, 0, _AppConstants2.GAME_ROAD_WIDTH, this.game.sceneHeight); //Set the camera to follow the hero character with a lerping function

    this.game.camera.follow(this.game.hero, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1); //Create a deadzone to stop the camera from always moving (Keeps hero character locked to the bottom of the screen)
    //pd this.game.camera.deadzone = new Phaser.Rectangle(0, 600, GAME_ROAD_WIDTH, 1);
  }
  /*
  ====================================================================================
    HANDLERS / EVENTS
  ====================================================================================
  */
  ;

  _proto.handleStartGame = function handleStartGame() {
    this.gameActive = true;
    this.tapArea.activate();
    this.timeController.start();
  };

  _proto.handleIntroComplete = function handleIntroComplete() {
    this.handleStartGame();
  };

  _proto.handleUserInputUp = function handleUserInputUp() {
    if (!this.gameActive || this.isPaused) return;
    if (this.game.hero.currentRow === this.mapController.rows.length - 1) return;
    this.tryMove('up');
  };

  _proto.handleUserInputLeft = function handleUserInputLeft() {
    if (!this.gameActive || this.isPaused) return;
    if (this.game.hero.currentColumn === 0) return;
    this.tryMove('left');
  };

  _proto.handleUserInputRight = function handleUserInputRight() {
    if (!this.gameActive || this.isPaused) return;
    if (this.game.hero.currentColumn === this.mapController.rows[0].cellsInRow - 1) return;
    this.tryMove('right');
  };

  _proto.handleRestart = function handleRestart() {
    this.game.hero.currentRow = 0;
    this.game.controller.restartLevel();
  };

  _proto.handleLose = function handleLose() {
    if (!this.game.deviceController.isOldAppleDevice()) {//this.game.sounds.playSFX('lose');
    }

    this.disableControls();
    this.game.camera.follow(null);
    this.mapController.objects.bringToTop(this.game.hero);
    this.game.hero.handleLose();
    this.mapController.stopAnimations();
  };

  _proto.handleLevelComplete = function handleLevelComplete() {
    this.disableControls();
    this.game.hero.handleWin();
    this.mapController.endRoad.playPattyEnd();
    this.game.sounds.playSFX(_GameSFX.GAME_SFX_PATTY);
    this.game.time.events.add(2600, this.handleWinAnimEnd, this);
  };

  _proto.handleWinAnimEnd = function handleWinAnimEnd() {
    this.game.hero.state = _Hero.default.STATE_WIN;
    this.game.controller.showLevelEnd({
      win: true,
      character: this.game.hero.character
    });
  };

  _proto.handleWindowBlur = function handleWindowBlur() {
    this.game.controller.pauseGame();
  };

  _proto.handleSizeChange = function handleSizeChange() {
    var scale = this.game.width / this.game.defaultWidth; //this.gameContainer.scale.set(Math.max(1, scale));

    this.gameContainer.x = (this.game.width - _AppConstants2.GAME_ROAD_WIDTH) / 2;
    this.gameContainer.y = this.game.height - this.game.defaultHeight;
    this.game.world.setBounds((this.game.width - _AppConstants2.GAME_ROAD_WIDTH) / 2, 0, _AppConstants2.GAME_ROAD_WIDTH, this.game.sceneHeight);
    this.tapArea.hitArea.width = this.game.width;
    this.tapArea.hitArea.height = this.game.height;
  };

  _proto.handleWarningComplete = function handleWarningComplete() {
    this.updatePauseStatus({
      paused: false
    });
    this.game.controller.gameModel.warningComplete = true;
    this.warningPanel.destroy();
    this.warningPanel = null;
  };

  _proto.handleTutorialComplete = function handleTutorialComplete() {
    this.updatePauseStatus({
      paused: false
    });
    this.game.controller.gameModel.tutorialComplete = true;
    this.game.hud.gameInstructions.onClose.remove(this.handleTutorialComplete, this);
  }
  /*
  ====================================================================================
    movement
  ====================================================================================
  */
  ;

  _proto.tryMove = function tryMove(dir) {
    if (this.game.hero.state == _Hero.default.STATE_WALK) {
      if (this.controlsBuffer.length == 0) {
        this.controlsBuffer.push(dir);
      }
    } else {
      this.performMove(dir);
    }
  };

  _proto.performMove = function performMove(dir) {
    var x, y, pos;

    switch (dir) {
      case 'up':
        x = this.game.hero.currentColumn;
        y = this.game.hero.currentRow + 1; // check if there is no shelf in destination

        if (this.mapController.canGoto(x, y)) {
          pos = this.mapController.gridToPos(x, y);
          this.game.hero.goto(pos.x, pos.y);
        }

        break;

      case 'left':
        x = this.game.hero.currentColumn - 1;
        y = this.game.hero.currentRow; // check if there is no shelf in destination

        if (this.mapController.canGoto(x, y)) {
          pos = this.mapController.gridToPos(x, y);
          this.game.hero.goto(pos.x, pos.y);
        }

        break;

      case 'right':
        x = this.game.hero.currentColumn + 1;
        y = this.game.hero.currentRow; // check if there is no shelf in destination

        if (this.mapController.canGoto(x, y)) {
          pos = this.mapController.gridToPos(x, y);
          this.game.hero.goto(pos.x, pos.y);
        }

        break;
    }
  }
  /*
  ====================================================================================
    LOOP
  ====================================================================================
  */
  ;

  _proto.update = function update() {
    if (this.isPaused || !this.gameActive) {
      return;
    } // update clock


    this.timeStep = this.timeController.update() / 1000;

    if (this.game.hero.state !== _Hero.default.STATE_LOSE) {
      this.mapController.updateSorting();
      this.checkCollisions();
      this.mapController.updateMap(this.timeStep);
    }
  };

  _proto.checkCollisions = function checkCollisions() {
    if (this.game.hero.state == _Hero.default.STATE_WALK || this.game.hero.state == _Hero.default.STATE_LAND) {
      var collision = this.collisionController.checkCollisions(this.game.hero, this.mapController.getColliders(this.currentLane));

      if (collision.length > 0) {
        // lost
        this.handleLose();
      }
    }
  };

  _proto.checkLanding = function checkLanding(currentLane) {
    this.currentLane = currentLane; //If the player is still jumping across traffic

    if (currentLane == this.laneCount) {
      //Player has won this level!
      this.handleLevelComplete();
    } else {
      // check if there is a move in buffer
      if (this.controlsBuffer.length > 0) {
        this.performMove(this.controlsBuffer.shift());
      }
    }
  }
  /*
  ======================================================================================================
    DEBUG RENDER
  ======================================================================================================
  */
  ;

  _proto.render = function render() {} // this.game.debug.cameraInfo(this.game.camera, 32, 256);

  /*
  ======================================================================================================
    PAUSE / RESUME
  ======================================================================================================
  */
  ;

  _proto.updatePauseStatus = function updatePauseStatus(_ref2) {
    var paused = _ref2.paused,
        fromUI = _ref2.fromUI,
        _ref2$stopMusic = _ref2.stopMusic,
        stopMusic = _ref2$stopMusic === void 0 ? true : _ref2$stopMusic;

    if (fromUI && paused == false && this.warningPanel) {
      return;
    }

    this.isPaused = paused;
    console.log('PAUSED: ' + this.isPaused);

    if (this.isPaused) {
      this.timeController.handleGamePaused();
      this.mapController.stopAnimations();
      this.game.hero.updatePauseStatus(true);

      if (stopMusic) {//this.game.sounds.stopGameMusic();
      }
    } else {
      this.timeController.start();

      if (this.game.hero.state != _Hero.default.STATE_LOSE) {
        this.mapController.startAnimations();
      }

      this.game.hero.updatePauseStatus(false);
      this.game.sounds.playGameMusic();
    }
  }
  /*
  ======================================================================================================
     END GAME
  ======================================================================================================
  */
  ;

  _proto.shutdown = function shutdown(game) {
    //remove listeneres
    this.game.scale.onSizeChange.remove(this.handleSizeChange, this);
    window.removeEventListener('blur', this.bindedWindowBlur);
    this.game.controller.uiModel.onPauseIsChanged.remove(this.updatePauseStatus, this);
    this.disableControls();
    this.game.hud.hideGamePlayHud(); // easy destroy

    this.timeController.destroy(true);
    this.mapController.destroy(true);
    this.tapArea.destroy(true);
    this.game.hero.destroy(true);
    this.gameContainer.destroy(true); // nullify

    this.gameActive = false;
    this.collisionController = null;
    this.timeController = null;
    this.mapController = null;
    this.tapArea = null;
    this.jumpKey = null;
    this.game.hero = null;
    this.gameContainer = null;
  };

  return Game;
}(Phaser.State);

var _default = Game;
exports.default = _default;

/***/ }),

/***/ "m/lz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("wiMi");

__webpack_require__("388n");

__webpack_require__("J5eo");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Boot = _interopRequireDefault(__webpack_require__("VawD"));

var _Load = _interopRequireDefault(__webpack_require__("GEMp"));

var _Welcome = _interopRequireDefault(__webpack_require__("WtpM"));

var _Game = _interopRequireDefault(__webpack_require__("ltll"));

var _CharacterIntro = _interopRequireDefault(__webpack_require__("ELGz"));

var _LevelEnd = _interopRequireDefault(__webpack_require__("JWFg"));

var _LevelLose = _interopRequireDefault(__webpack_require__("ZZqx"));

var _GameEnd = _interopRequireDefault(__webpack_require__("l3Se"));

var _CutScene = _interopRequireDefault(__webpack_require__("MOQ2"));

var _GameController = _interopRequireDefault(__webpack_require__("x1tP"));

var _AppUrls = _interopRequireDefault(__webpack_require__("TSJq"));

var _SoundController = _interopRequireDefault(__webpack_require__("CDWU"));

var _CopyController = _interopRequireDefault(__webpack_require__("fY54"));

var _AspectController = _interopRequireDefault(__webpack_require__("v2oV"));

var _WindowEventController = _interopRequireDefault(__webpack_require__("tVDu"));

var _Hud = _interopRequireDefault(__webpack_require__("d0OL"));

var _AppConstants = __webpack_require__("zgbH");

var _prettyLog = __webpack_require__("jTTx");

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

var App =
/*#__PURE__*/
function (_Phaser$Game) {
  (0, _inheritsLoose2.default)(App, _Phaser$Game);

  function App(_ref) {
    var _this;

    var width = _ref.width,
        height = _ref.height,
        renderer = _ref.type,
        _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? _AppConstants.GAME_DIV_ID : _ref$parent,
        settings = _ref.settings,
        deviceController = _ref.deviceController;
    //renderer = 1;
    _this = _Phaser$Game.call(this, width, height, renderer, parent, null, true) || this;
    var gameContainer = document.getElementById(parent);

    if (gameContainer) {
      gameContainer.className = _AppConstants.GAME_DIV_CLASSNAME;
    }

    _this.defaultWidth = _AppConstants.GAME_WIDTH_DEFAULT;
    _this.defaultHeight = _AppConstants.GAME_HEIGHT_DEFAULT;
    _this.offsetWidth = 0;
    _this.offsetHeight = 0;
    _this._screenPaddingY = Math.max(_this.width, _this.height) * _AppConstants.Y_PAD_SCALE;
    _this._screenPaddingX = Math.max(_this.width, _this.height) * _AppConstants.X_PAD_SCALE;
    _this._hud = new _Hud.default((0, _assertThisInitialized2.default)(_this));
    _this._controller = new _GameController.default({
      game: (0, _assertThisInitialized2.default)(_this),
      settings: settings,
      hud: _this._hud,
      deviceController: deviceController
    });
    _this._sounds = new _SoundController.default({
      game: (0, _assertThisInitialized2.default)(_this),
      isMuted: settings.getIsMuted()
    });
    _this._aspectController = new _AspectController.default({
      game: (0, _assertThisInitialized2.default)(_this)
    });
    _this._windowEventController = new _WindowEventController.default({
      game: (0, _assertThisInitialized2.default)(_this),
      activate: true
    });
    _this._urls = new _AppUrls.default((0, _assertThisInitialized2.default)(_this));
    _this._settings = settings;
    _this._deviceController = deviceController;

    _this.state.add(_AppConstants.STATE_BOOT, _Boot.default, false);

    _this.state.add(_AppConstants.STATE_LOAD, _Load.default, false);

    _this.state.add(_AppConstants.STATE_WELCOME, _Welcome.default, false);

    _this.state.add(_AppConstants.STATE_GAME, _Game.default, false);

    _this.state.add(_AppConstants.STATE_CHARACTER_INTRO, _CharacterIntro.default, false);

    _this.state.add(_AppConstants.STATE_LEVELEND, _LevelEnd.default, false);

    _this.state.add(_AppConstants.STATE_LEVELLOSE, _LevelLose.default, false);

    _this.state.add(_AppConstants.STATE_GAMEEND, _GameEnd.default, false);

    _this.state.add(_AppConstants.STATE_CUTSCENE, _CutScene.default, false);

    var rendererLabel = ['AUTO', 'CANVAS', 'WEBGL', 'WEBGL_MULTI', 'HEADLESS'][_this.renderType] || 'UNKNOWN';
    var webpackInfo = [{
      key: 'DEBUG:',
      val: true
    }, {
      key: 'WATCH:',
      val: false
    }, {
      key: 'SHORTCUTS:',
      val: true
    }, {
      key: 'Node Env:',
      val: "production"
    }];
    var deviceInfo = [{
      key: 'Is old:',
      val: deviceController.requiresLightVersion
    }, {
      key: 'Transitions:',
      val: deviceController.allowTransitionTweens
    }, {
      key: 'Load type:',
      val: deviceController.gameLoadType
    }, {
      key: 'Renderer:',
      val: rendererLabel
    }];
    (0, _prettyLog.prettyLog)([{
      label: 'Webpack',
      output: webpackInfo
    }, {
      label: 'Device',
      output: deviceInfo
    }]);

    _this.controller.startBoot(); //**********/
    //WISETRACK /
    //**********/


  }

  var _proto = App.prototype;

  _proto.wisetrackLoadedHandler = function wisetrackLoadedHandler() {
    var iframe = parent !== window;
    var url = null;

    if (iframe) {
      url = document.referrer; // console.log('URL : ' + url);
      // console.log('REFERER : ' + this.extractHostName(url));

      var event = AppTrackingEvents.getReferrerString(url);
      console.log(event); // this.track();
    }
  };

  _proto.extractHostName = function extractHostName(url) {
    var hostname;

    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
  };

  _proto.extractRootDomain = function extractRootDomain(url) {}
  /*
  ====================================================================================
    GETTERS/SETTERS
  ====================================================================================
  */
  ;

  _proto.handleWindowBlur = function handleWindowBlur() {
    if (this.state.current != _AppConstants.STATE_GAME) {
      this.focusLost = true;
      this.paused = true;
    } else {
      this.sounds.setGameMusicVolume(0);
    }
  };

  _proto.handleWindowFocus = function handleWindowFocus() {
    if (this.state.current != _AppConstants.STATE_GAME) {
      this.focusLost = false;
      this.paused = false;
    } else {
      this.sounds.setGameMusicVolume(1);
    }
  }
  /*
  ====================================================================================
    GETTERS/SETTERS
  ====================================================================================
  */
  ;

  _proto.addCopy = function addCopy(xml) {
    this._copy = new _CopyController.default(xml);
  };

  _proto.track = function track(evt) {
  };

  _proto.log = function log(message) {
    if (true) {
      var styl = 'color: orange; font-weight: bold';

      if (message.indexOf('Starting Game') !== -1) {
        console.log("\n%c" + message, styl, '\n ');
      } else {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (args) {
          var _console;

          var a = [];
          args.forEach(function (arg) {
            a.push(arg);
            a.push('\n');
          });

          (_console = console).log.apply(_console, ["\n%c" + message, styl, '\n\n'].concat(a, ['\n '])); // console.log('\n' + message + '\n\n  ', ...args, '\n ');

        } else {
          console.log("\n%c" + message, styl, '\n ');
        }
      }
    }
  };

  (0, _createClass2.default)(App, [{
    key: "settings",
    get: function get() {
      return this._settings;
    }
  }, {
    key: "deviceController",
    get: function get() {
      return this._deviceController;
    }
  }, {
    key: "hud",
    get: function get() {
      return this._hud;
    }
  }, {
    key: "copy",
    get: function get() {
      return this._copy;
    }
  }, {
    key: "controller",
    get: function get() {
      return this._controller;
    }
  }, {
    key: "sounds",
    get: function get() {
      return this._sounds;
    }
  }, {
    key: "aspectController",
    get: function get() {
      return this._aspectController;
    }
  }, {
    key: "windowEventController",
    get: function get() {
      return this._windowEventController;
    }
  }, {
    key: "urls",
    get: function get() {
      return this._urls;
    }
  }, {
    key: "screenPaddingY",
    set: function set(val) {
      this._screenPaddingY = val;
    },
    get: function get() {
      return this._screenPaddingY;
    }
  }, {
    key: "screenPaddingX",
    set: function set(val) {
      this._screenPaddingX = val;
    },
    get: function get() {
      return this._screenPaddingX;
    }
  }]);
  return App;
}(Phaser.Game);

var _default = App;
exports.default = _default;

/***/ }),

/***/ "n58B":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var InstructionHand =
/*#__PURE__*/
function (_Phaser$Sprite) {
  (0, _inheritsLoose2.default)(InstructionHand, _Phaser$Sprite);

  function InstructionHand(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Sprite.call(this, game) || this;

    _this.loadTexture('instructions', 'finger_tap_icon');

    _this.duration = 0;
    return _this;
  }

  var _proto = InstructionHand.prototype;

  _proto.update = function update() {
    this.duration += this.game.time.elapsedMS;
    var targetAlpha = Math.sin(this.duration * 0.01) + 1;
    this.alpha = targetAlpha / 2;
  };

  return InstructionHand;
}(Phaser.Sprite);

exports.default = InstructionHand;

/***/ }),

/***/ "nD4D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var scale = 1.25;

var Obstacle =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(Obstacle, _Phaser$Group);

  function Obstacle(_ref) {
    var _this;

    var game = _ref.game,
        type = _ref.type;
    _this = _Phaser$Group.call(this, game) || this;
    _this.type = type;
    _this.costume = _this.game.make.image(0, -30, 'obstacles', 'obstacle_' + type);

    _this.costume.anchor.set(0.5);

    _this.costume.scale.set(scale);

    _this.addChild(_this.costume);

    return _this;
  }

  var _proto = Obstacle.prototype;

  _proto.getWorldBounds = function getWorldBounds() {
    var bounds = this.costume.getBounds();
    var bw = bounds.width * scale;
    bw = bw * 0.95;
    bounds.x += bw * 0.025;
    bounds.x += this.game.camera.view.x;
    bounds.y += this.game.camera.view.y;
    return bounds;
  };

  return Obstacle;
}(Phaser.Group);

exports.default = Obstacle;

/***/ }),

/***/ "nTxy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _CircleMaskReveal = _interopRequireDefault(__webpack_require__("PC9B"));

var _PolygonMaskReveal = _interopRequireDefault(__webpack_require__("jVHN"));

var _RectMaskReveal = _interopRequireDefault(__webpack_require__("h2Zx"));

var _LowFi = _interopRequireDefault(__webpack_require__("Doot"));

var Transitions =
/*#__PURE__*/
function (_Phaser$Sprite) {
  (0, _inheritsLoose2.default)(Transitions, _Phaser$Sprite);

  function Transitions(_ref) {
    var _this;

    var game = _ref.game,
        enabled = _ref.enabled;
    _this = _Phaser$Sprite.call(this, game) || this;
    _this.enabled = enabled;
    _this.onTransitionInComplete = new Phaser.Signal();
    _this.onTransitionOutComplete = new Phaser.Signal();
    return _this;
  }
  /*
  ===========================================================================
      START
  ===========================================================================
  */


  var _proto = Transitions.prototype;

  _proto.startTransition = function startTransition(_ref2) {
    var _ref2$type = _ref2.type,
        type = _ref2$type === void 0 ? Transitions.POLY_MASK : _ref2$type;
    this.game.stage.addChild(this);

    if (this.enabled) {
      switch (type) {
        case Transitions.CIRCLE_MASK:
          this.transition = new _CircleMaskReveal.default({
            game: this.game
          });
          break;

        case Transitions.POLY_MASK:
          this.transition = new _PolygonMaskReveal.default({
            game: this.game
          });
          break;

        case Transitions.RECT_MASK:
          this.transition = new _RectMaskReveal.default({
            game: this.game
          });
          break;

        case Transitions.LOW_FI:
          this.transition = new _LowFi.default({
            game: this.game
          });
          break;

        default:
          this.transition = new _LowFi.default({
            game: this.game
          });
      }

      this.addChild(this.transition);
    }

    if (this.transition) {
      this.transitionStart();
      this.game.scale.onSizeChange.add(this.positionElements, this);
      this.positionElements();
    } else {
      // this triggers a state switch
      this.onTransitionInComplete.dispatch();
    }
  };

  _proto.positionElements = function positionElements() {
    // this.scale.set(this.game.aspectScale);
    // this.x = this.game.width / 2 - this.game.defaultWidth * this.game.aspectScale / 2;
    var x = (this.game.width - this.game.defaultWidth) * 0.5;
    var y = (this.game.height - this.game.defaultHeight) * 0.5;
    this.position.set(x, y);
  }
  /*
  ===========================================================================
      Tweening
  ===========================================================================
  */
  ;

  _proto.transitionStart = function transitionStart() {
    this.transition.onInComplete.addOnce(this.transitionInComplete, this);
    this.transition.onOutComplete.addOnce(this.transitionOutComplete, this);
    this.transition.init();
    this.transition.startIn(0);
  };

  _proto.transitionInComplete = function transitionInComplete(tran) {
    if (tran) {
      tran.onInComplete.removeAll();
    }

    this.onTransitionInComplete.dispatch();
  } // transition screen has entered and waiting to be told to exit
  ;

  _proto.transitionEnd = function transitionEnd() {
    if (this.transition) {
      this.transition.startOut();
    } else {
      this.transitionOutComplete();
    }
  };

  _proto.transitionOutComplete = function transitionOutComplete(tran) {
    if (tran) {
      tran.onOutComplete.removeAll();
    }

    this.game.scale.onSizeChange.remove(this.positionElements, this);
    this.onTransitionOutComplete.dispatch();
  }
  /*
  ===========================================================================
      Clean Up
  ===========================================================================
  */
  ;

  _proto.destroy = function destroy() {
    this.game.scale.onSizeChange.remove(this.positionElements, this);
    this.game.tweens.removeFrom(this, true);
    this.game.tweens.removeFrom(this); //clear signal

    this.onTransitionOutComplete.forget();
    this.onTransitionOutComplete.dispose();
    this.onTransitionOutComplete.removeAll();
    this.onTransitionInComplete.forget();
    this.onTransitionInComplete.dispose();
    this.onTransitionInComplete.removeAll();

    if (this.transition) {
      this.transition.destroy();
    }

    this.transition = null; // bye bye

    _Phaser$Sprite.prototype.destroy.call(this, true);
  };

  return Transitions;
}(Phaser.Sprite);

Transitions.CIRCLE_MASK = 'CIRCLE_MASK'; // doesnt work!!! Using POLY_MASK instaed

Transitions.POLY_MASK = 'POLY_MASK';
Transitions.RECT_MASK = 'RECT_MASK';
Transitions.LOW_FI = 'LOW_FI';
var _default = Transitions;
exports.default = _default;

/***/ }),

/***/ "noS8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var Starburst =
/*#__PURE__*/
function (_Phaser$Sprite) {
  (0, _inheritsLoose2.default)(Starburst, _Phaser$Sprite);

  function Starburst(_ref) {
    var _this;

    var game = _ref.game;
    _this = _Phaser$Sprite.call(this, game) || this;

    _this.anchor.set(0.5);

    _this.loadTexture('starburst');

    _this.anim = _this.animations.add('play');

    _this.animations.play('play', 24, false);

    _this.anim.onComplete.add(_this.handleAnimationComplete, (0, _assertThisInitialized2.default)(_this));

    return _this;
  }

  var _proto = Starburst.prototype;

  _proto.handleAnimationComplete = function handleAnimationComplete() {
    this.destroy(true);
  };

  return Starburst;
}(Phaser.Sprite);

exports.default = Starburst;

/***/ }),

/***/ "oIC/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var CollisionController =
/*#__PURE__*/
function () {
  function CollisionController(_ref) {
    var game = _ref.game,
        debug = _ref.debug;
    this.game = game;

    if (debug) {
      this.debugger = this.game.make.graphics();
    }
  }

  var _proto = CollisionController.prototype;

  _proto.clearDebugger = function clearDebugger() {
    if (this.debugger) {
      this.debugger.clear();
    }
  };

  _proto.checkCollisions = function checkCollisions(target, group) {
    var _this = this;

    this.clearDebugger();
    var charBounds = target.getWorldBounds();
    this.renderBounds(charBounds, false);
    var colliding = group.reduce(function (arr, item) {
      var itemBounds = item.getWorldBounds();

      if (charBounds.intersects(itemBounds)) {
        _this.renderBounds(itemBounds, true);

        arr.push(item);
      } else {
        _this.renderBounds(itemBounds, false);
      }

      return arr;
    }, []);
    return colliding;
  };

  _proto.renderBounds = function renderBounds(bounds, collision) {
    if (this.debugger) {
      this.debugger.lineStyle(3, collision ? 0xff0000 : 0xffff00);
      this.debugger.beginFill(collision ? 0xff0000 : 0xffff00, 0.25);
      this.debugger.drawRect(bounds.x, bounds.y, bounds.width, bounds.height);
    }
  };

  return CollisionController;
}();

exports.default = CollisionController;

/***/ }),

/***/ "rcv9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("M1I4"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _Title = _interopRequireDefault(__webpack_require__("0kin"));

var _ScoreDisplay = _interopRequireDefault(__webpack_require__("OiSF"));

var _HighScoreDisplay = _interopRequireDefault(__webpack_require__("07gj"));

var _ButtonSimple = _interopRequireDefault(__webpack_require__("dD3M"));

var _BackgroundColourFill = _interopRequireDefault(__webpack_require__("JjYy"));

var AppConstants = _interopRequireWildcard(__webpack_require__("zgbH"));

var _Text = __webpack_require__("NfmA");

var HudGameIntro =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(HudGameIntro, _Phaser$Group);

  function HudGameIntro(_ref) {
    var _this;

    var game = _ref.game,
        message = _ref.message,
        _ref$onClose = _ref.onClose,
        onClose = _ref$onClose === void 0 ? false : _ref$onClose,
        _ref$onCloseScope = _ref.onCloseScope,
        onCloseScope = _ref$onCloseScope === void 0 ? false : _ref$onCloseScope;
    _this = _Phaser$Group.call(this, game) || this;
    _this.background = new _BackgroundColourFill.default({
      game: game,
      colour: '#000000',
      alpha: 0.3
    });
    _this.background.width = _this.game.width;
    _this.background.height = _this.game.height;

    _this.add(_this.background); // container to house and position contents


    _this.container = _this.game.make.group();

    _this.add(_this.container); // baking panel


    _this.panel = _this.game.make.image(0, 0, 'ui', 'panel_generic');

    _this.container.add(_this.panel); // continue button


    _this.btnContinue = new _ButtonSimple.default({
      game: _this.game,
      id: 'btn_play',
      skin: 'btn_play',
      defaultScale: 0.7
    });
    _this.btnContinue.x = _this.panel.width * 0.5;
    _this.btnContinue.y = _this.panel.y + _this.panel.height * 0.4;

    _this.btnContinue.scale.set(0.7);

    _this.btnContinue.onInputDown.add(_this.handleContinue, (0, _assertThisInitialized2.default)(_this));

    _this.container.addChild(_this.btnContinue); // restart button


    _this.btnRestart = new _ButtonSimple.default({
      game: _this.game,
      id: 'btn_replay',
      skin: 'btn_replay',
      defaultScale: 0.7
    });
    _this.btnRestart.y = _this.panel.y + _this.panel.height * 0.65;
    _this.btnRestart.x = _this.panel.width * 0.5;

    _this.btnRestart.scale.set(0.7);

    _this.btnRestart.onInputDown.add(_this.handleRestart, (0, _assertThisInitialized2.default)(_this));

    _this.container.addChild(_this.btnRestart); //copy


    _this.mainCopy = (0, _Text.createTextField)(_this.game, AppConstants.FONT_TITLE, 62, AppConstants.FONT_COLOUR_PAUSED, 0, 0, {
      wordWrap: true,
      wordWrapWidth: _this.panel.width * 0.9,
      align: 'center'
    });
    _this.mainCopy.text = _this.game.copy.getCopy('pause');

    _this.mainCopy.anchor.set(0.5);

    _this.mainCopy.position.set(_this.panel.x + _this.panel.width * 0.5, _this.panel.y + _this.panel.height * 0.1);

    _this.container.addChild(_this.mainCopy);

    _this.onion = _this.game.make.image(0, 0, 'ui', 'onion_pause');

    _this.onion.anchor.set(0, 1);

    _this.onion.scale.set(1);

    _this.onion.position.set(_this.panel.x + _this.onion.width * 0.4, _this.panel.y + _this.panel.height * 0.74);

    _this.container.addChild(_this.onion);

    _this.apple = _this.game.make.image(0, 0, 'ui', 'apple_pause');

    _this.apple.anchor.set(1, 1);

    _this.apple.scale.set(1);

    _this.apple.position.set(_this.panel.x + _this.panel.width - _this.apple.width * 0.15, _this.panel.y + _this.panel.height * 0.7);

    _this.container.addChild(_this.apple); // and we adjust the height of the panel to suit


    _this.panel.height = _this.btnRestart.y + _this.btnRestart.height; // positioning

    _this.game.scale.onSizeChange.add(_this.handleScreenResize, (0, _assertThisInitialized2.default)(_this));

    _this.handleScreenResize();

    return _this;
  }
  /*
  ============================================================================================
    GETTERS
  ============================================================================================
  */


  var _proto = HudGameIntro.prototype;

  /*
  ============================================================================================
    EVENT HANDLERS
  ============================================================================================
  */
  _proto.handleScreenResize = function handleScreenResize() {
    this.container.x = this.game.width * 0.5 - this.width * 0.5;
    this.container.y = this.game.height * 0.5 - this.height * 0.5;
    this.background.width = this.game.width;
    this.background.height = this.game.height;
  };

  _proto.handleCredits = function handleCredits() {
    this.game.controller.showGameCredits();
  };

  _proto.handleRestart = function handleRestart() {
    this.game.controller.restartLevel();
  };

  _proto.handleContinue = function handleContinue() {
    this.game.controller.resumeGame();
  }
  /*
  ============================================================================================
    TOODLES!
  ============================================================================================
  */
  ;

  _proto.destroy = function destroy() {
    // clear listeners
    this.game.scale.onSizeChange.remove(this.handleScreenResize, this);
    this.btnContinue.onInputDown.remove(this.handleContinue, this);
    this.btnRestart.onInputDown.remove(this.handleContinue, this); // destroy stuff

    this.btnRestart.destroy(true);
    this.btnContinue.destroy(true);
    this.panel.destroy(true);
    this.container.destroy(true); // nullify

    this.btnContinue = null;
    this.btnRestart = null;
    this.panel = null;
    this.container = null; // super dupa

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  (0, _createClass2.default)(HudGameIntro, [{
    key: "height",
    get: function get() {
      return this.panel.height + this.panel.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.panel.width;
    }
  }]);
  return HudGameIntro;
}(Phaser.Group);

exports.default = HudGameIntro;

/***/ }),

/***/ "t5SB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReferrerString = exports.getLevelLoseString = exports.getLevelString = exports.getLevelCompleteString = exports.SKIP_CUTSCENE = exports.VIEW_SCREEN_CREDITS = exports.VIEW_SCREEN_PAUSE = exports.VIEW_SCREEN_GAME_COMPLETE = exports.VIEW_SCREEN_LEVEL_LOSE = exports.VIEW_SCREEN_LEVEL_WIN = exports.VIEW_SCREEN_CHARACTER_SELECT = exports.VIEW_SCREEN_CUTSCENE = exports.VIEW_SCREEN_INSTRUCTIONS = exports.VIEW_SCREEN_WELCOME = exports.GAME_EXIT = exports.GAME_RESTART = exports.GAME_RESUME = exports.GAME_PAUSE = exports.GAME_PLAY_LEVEL_ = exports.CHARACTER_SELECT_ONION = exports.CHARACTER_SELECT_APPLE = exports.AUDIO_ON = exports.AUDIO_OFF = void 0;
var AUDIO_OFF = 'AUDIO_OFF';
exports.AUDIO_OFF = AUDIO_OFF;
var AUDIO_ON = 'AUDIO_ON';
exports.AUDIO_ON = AUDIO_ON;
var CHARACTER_SELECT_APPLE = 'CHARACTER_SELECT_APPLE';
exports.CHARACTER_SELECT_APPLE = CHARACTER_SELECT_APPLE;
var CHARACTER_SELECT_ONION = 'CHARACTER_SELECT_ONION';
exports.CHARACTER_SELECT_ONION = CHARACTER_SELECT_ONION;
var GAME_PLAY_LEVEL_ = 'GAME_PLAY_LEVEL_';
exports.GAME_PLAY_LEVEL_ = GAME_PLAY_LEVEL_;
var GAME_PAUSE = 'GAME_PAUSE';
exports.GAME_PAUSE = GAME_PAUSE;
var GAME_RESUME = 'GAME_RESUME';
exports.GAME_RESUME = GAME_RESUME;
var GAME_RESTART = 'GAME_RESTART';
exports.GAME_RESTART = GAME_RESTART;
var GAME_EXIT = 'GAME_EXIT';
exports.GAME_EXIT = GAME_EXIT;
var VIEW_SCREEN_WELCOME = 'VIEW_SCREEN_WELCOME';
exports.VIEW_SCREEN_WELCOME = VIEW_SCREEN_WELCOME;
var VIEW_SCREEN_INSTRUCTIONS = 'VIEW_SCREEN_INSTRUCTIONS';
exports.VIEW_SCREEN_INSTRUCTIONS = VIEW_SCREEN_INSTRUCTIONS;
var VIEW_SCREEN_CUTSCENE = 'VIEW_SCREEN_CUTSCENE';
exports.VIEW_SCREEN_CUTSCENE = VIEW_SCREEN_CUTSCENE;
var VIEW_SCREEN_CHARACTER_SELECT = 'VIEW_SCREEN_CHARACTER_SELECT';
exports.VIEW_SCREEN_CHARACTER_SELECT = VIEW_SCREEN_CHARACTER_SELECT;
var VIEW_SCREEN_LEVEL_WIN = 'VIEW_SCREEN_LEVEL_WIN';
exports.VIEW_SCREEN_LEVEL_WIN = VIEW_SCREEN_LEVEL_WIN;
var VIEW_SCREEN_LEVEL_LOSE = 'VIEW_SCREEN_LEVEL_LOSE';
exports.VIEW_SCREEN_LEVEL_LOSE = VIEW_SCREEN_LEVEL_LOSE;
var VIEW_SCREEN_GAME_COMPLETE = 'VIEW_SCREEN_GAME_COMPLETE';
exports.VIEW_SCREEN_GAME_COMPLETE = VIEW_SCREEN_GAME_COMPLETE;
var VIEW_SCREEN_PAUSE = 'VIEW_SCREEN_PAUSE';
exports.VIEW_SCREEN_PAUSE = VIEW_SCREEN_PAUSE;
var VIEW_SCREEN_CREDITS = 'VIEW_SCREEN_CREDITS';
exports.VIEW_SCREEN_CREDITS = VIEW_SCREEN_CREDITS;
var SKIP_CUTSCENE = 'SKIP_CUTSCENE';
exports.SKIP_CUTSCENE = SKIP_CUTSCENE;

var getLevelCompleteString = function getLevelCompleteString(level) {
  return 'GAME_PLAY_LEVEL_' + level + '_COMPLETE';
};

exports.getLevelCompleteString = getLevelCompleteString;

var getLevelString = function getLevelString(level) {
  return 'GAME_PLAY_LEVEL_' + level;
};

exports.getLevelString = getLevelString;

var getLevelLoseString = function getLevelLoseString(level) {
  return 'GAME_LOSE_LEVEL_' + level;
};

exports.getLevelLoseString = getLevelLoseString;

var getReferrerString = function getReferrerString(url) {
  return 'REFERRER_URL_' + url;
};

exports.getReferrerString = getReferrerString;

/***/ }),

/***/ "tVDu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var tController =
/*#__PURE__*/
function () {
  function tController(_ref) {
    var game = _ref.game,
        activate = _ref.activate;
    this.game = game;
    this.bindedHandleWindowResize = this.handleWindowResize.bind(this);
    this.bindedWindowBlur = this.handleWindowBlur.bind(this);
    this.bindedWindowFocus = this.handleWindowFocus.bind(this);
    this.bindedVisibilityChange = this.handleVisibilityChange.bind(this);

    if (activate) {
      this.activate();
    }
  }

  var _proto = tController.prototype;

  _proto.activate = function activate() {
    window.addEventListener('resize', this.bindedHandleWindowResize);
    window.addEventListener('blur', this.bindedWindowBlur);
    window.addEventListener('focus', this.bindedWindowFocus);
    window.addEventListener('visibilitychange', this.bindedVisibilityChange);
  };

  _proto.deactivate = function deactivate() {
    window.removeEventListener('resize', this.bindedHandleWindowResize);
    window.removeEventListener('blur', this.bindedWindowBlur);
    window.removeEventListener('focus', this.bindedWindowFocus);
    window.removeEventListener('visibilitychange', this.bindedVisibilityChange);
  };

  _proto.handleWindowBlur = function handleWindowBlur() {};

  _proto.handleWindowFocus = function handleWindowFocus() {};

  _proto.handleVisibilityChange = function handleVisibilityChange() {};

  _proto.handleWindowResize = function handleWindowResize() {
    this.game.aspectController.updateGameSize();
  };

  return tController;
}();

exports.default = tController;

/***/ }),

/***/ "tp+U":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

__webpack_require__("a/rO");

__webpack_require__("oLfA");

__webpack_require__("96V2");

__webpack_require__("YY9M");

__webpack_require__("vw/H");

__webpack_require__("5fJT");

__webpack_require__("q4B+");

__webpack_require__("GPcm");

__webpack_require__("LBAN");

__webpack_require__("ocEJ");

__webpack_require__("388n");

__webpack_require__("3mz+");

/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */

/* jshint ignore:start */
(function () {
  function aa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }

  function ba(a, b, c) {
    if (!a) throw Error();

    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }

    return function () {
      return a.apply(b, arguments);
    };
  }

  function p(a, b, c) {
    p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
    return p.apply(null, arguments);
  }

  var q = Date.now || function () {
    return +new Date();
  };

  function ca(a, b) {
    this.a = a;
    this.m = b || a;
    this.c = this.m.document;
  }

  var da = !!window.FontFace;

  function t(a, b, c, d) {
    b = a.c.createElement(b);
    if (c) for (var e in c) {
      c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
    }
    d && b.appendChild(a.c.createTextNode(d));
    return b;
  }

  function u(a, b, c) {
    a = a.c.getElementsByTagName(b)[0];
    a || (a = document.documentElement);
    a.insertBefore(c, a.lastChild);
  }

  function v(a) {
    a.parentNode && a.parentNode.removeChild(a);
  }

  function w(a, b, c) {
    b = b || [];
    c = c || [];

    for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
      for (var f = !1, g = 0; g < d.length; g += 1) {
        if (b[e] === d[g]) {
          f = !0;
          break;
        }
      }

      f || d.push(b[e]);
    }

    b = [];

    for (e = 0; e < d.length; e += 1) {
      f = !1;

      for (g = 0; g < c.length; g += 1) {
        if (d[e] === c[g]) {
          f = !0;
          break;
        }
      }

      f || b.push(d[e]);
    }

    a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
  }

  function y(a, b) {
    for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) {
      if (c[d] == b) return !0;
    }

    return !1;
  }

  function z(a) {
    if ("string" === typeof a.f) return a.f;
    var b = a.m.location.protocol;
    "about:" == b && (b = a.a.location.protocol);
    return "https:" == b ? "https:" : "http:";
  }

  function ea(a) {
    return a.m.location.hostname || a.a.location.hostname;
  }

  function A(a, b, c) {
    function d() {
      k && e && f && (k(g), k = null);
    }

    b = t(a, "link", {
      rel: "stylesheet",
      href: b,
      media: "all"
    });
    var e = !1,
        f = !0,
        g = null,
        k = c || null;
    da ? (b.onload = function () {
      e = !0;
      d();
    }, b.onerror = function () {
      e = !0;
      g = Error("Stylesheet failed to load");
      d();
    }) : setTimeout(function () {
      e = !0;
      d();
    }, 0);
    u(a, "head", b);
  }

  function B(a, b, c, d) {
    var e = a.c.getElementsByTagName("head")[0];

    if (e) {
      var f = t(a, "script", {
        src: b
      }),
          g = !1;

      f.onload = f.onreadystatechange = function () {
        g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
      };

      e.appendChild(f);
      setTimeout(function () {
        g || (g = !0, c && c(Error("Script load timeout")));
      }, d || 5E3);
      return f;
    }

    return null;
  }

  ;

  function C() {
    this.a = 0;
    this.c = null;
  }

  function D(a) {
    a.a++;
    return function () {
      a.a--;
      E(a);
    };
  }

  function F(a, b) {
    a.c = b;
    E(a);
  }

  function E(a) {
    0 == a.a && a.c && (a.c(), a.c = null);
  }

  ;

  function G(a) {
    this.a = a || "-";
  }

  G.prototype.c = function (a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
    }

    return b.join(this.a);
  };

  function H(a, b) {
    this.c = a;
    this.f = 4;
    this.a = "n";
    var c = (b || "n4").match(/^([nio])([1-9])$/i);
    c && (this.a = c[1], this.f = parseInt(c[2], 10));
  }

  function fa(a) {
    return I(a) + " " + (a.f + "00") + " 300px " + J(a.c);
  }

  function J(a) {
    var b = [];
    a = a.split(/,\s*/);

    for (var c = 0; c < a.length; c++) {
      var d = a[c].replace(/['"]/g, "");
      -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
    }

    return b.join(",");
  }

  function K(a) {
    return a.a + a.f;
  }

  function I(a) {
    var b = "normal";
    "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
    return b;
  }

  function ga(a) {
    var b = 4,
        c = "n",
        d = null;
    a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
    return c + b;
  }

  ;

  function ha(a, b) {
    this.c = a;
    this.f = a.m.document.documentElement;
    this.h = b;
    this.a = new G("-");
    this.j = !1 !== b.events;
    this.g = !1 !== b.classes;
  }

  function ia(a) {
    a.g && w(a.f, [a.a.c("wf", "loading")]);
    L(a, "loading");
  }

  function M(a) {
    if (a.g) {
      var b = y(a.f, a.a.c("wf", "active")),
          c = [],
          d = [a.a.c("wf", "loading")];
      b || c.push(a.a.c("wf", "inactive"));
      w(a.f, c, d);
    }

    L(a, "inactive");
  }

  function L(a, b, c) {
    if (a.j && a.h[b]) if (c) a.h[b](c.c, K(c));else a.h[b]();
  }

  ;

  function ja() {
    this.c = {};
  }

  function ka(a, b, c) {
    var d = [],
        e;

    for (e in b) {
      if (b.hasOwnProperty(e)) {
        var f = a.c[e];
        f && d.push(f(b[e], c));
      }
    }

    return d;
  }

  ;

  function N(a, b) {
    this.c = a;
    this.f = b;
    this.a = t(this.c, "span", {
      "aria-hidden": "true"
    }, this.f);
  }

  function O(a) {
    u(a.c, "body", a.a);
  }

  function P(a) {
    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + J(a.c) + ";" + ("font-style:" + I(a) + ";font-weight:" + (a.f + "00") + ";");
  }

  ;

  function Q(a, b, c, d, e, f) {
    this.g = a;
    this.j = b;
    this.a = d;
    this.c = c;
    this.f = e || 3E3;
    this.h = f || void 0;
  }

  Q.prototype.start = function () {
    var a = this.c.m.document,
        b = this,
        c = q(),
        d = new Promise(function (d, e) {
      function k() {
        q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
          1 <= a.length ? d() : setTimeout(k, 25);
        }, function () {
          e();
        });
      }

      k();
    }),
        e = new Promise(function (a, d) {
      setTimeout(d, b.f);
    });
    Promise.race([e, d]).then(function () {
      b.g(b.a);
    }, function () {
      b.j(b.a);
    });
  };

  function R(a, b, c, d, e, f, g) {
    this.v = a;
    this.B = b;
    this.c = c;
    this.a = d;
    this.s = g || "BESbswy";
    this.f = {};
    this.w = e || 3E3;
    this.u = f || null;
    this.o = this.j = this.h = this.g = null;
    this.g = new N(this.c, this.s);
    this.h = new N(this.c, this.s);
    this.j = new N(this.c, this.s);
    this.o = new N(this.c, this.s);
    a = new H(this.a.c + ",serif", K(this.a));
    a = P(a);
    this.g.a.style.cssText = a;
    a = new H(this.a.c + ",sans-serif", K(this.a));
    a = P(a);
    this.h.a.style.cssText = a;
    a = new H("serif", K(this.a));
    a = P(a);
    this.j.a.style.cssText = a;
    a = new H("sans-serif", K(this.a));
    a = P(a);
    this.o.a.style.cssText = a;
    O(this.g);
    O(this.h);
    O(this.j);
    O(this.o);
  }

  var S = {
    D: "serif",
    C: "sans-serif"
  },
      T = null;

  function U() {
    if (null === T) {
      var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
      T = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
    }

    return T;
  }

  R.prototype.start = function () {
    this.f.serif = this.j.a.offsetWidth;
    this.f["sans-serif"] = this.o.a.offsetWidth;
    this.A = q();
    la(this);
  };

  function ma(a, b, c) {
    for (var d in S) {
      if (S.hasOwnProperty(d) && b === a.f[S[d]] && c === a.f[S[d]]) return !0;
    }

    return !1;
  }

  function la(a) {
    var b = a.g.a.offsetWidth,
        c = a.h.a.offsetWidth,
        d;
    (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = U() && ma(a, b, c));
    d ? q() - a.A >= a.w ? U() && ma(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : na(a) : V(a, a.v);
  }

  function na(a) {
    setTimeout(p(function () {
      la(this);
    }, a), 50);
  }

  function V(a, b) {
    setTimeout(p(function () {
      v(this.g.a);
      v(this.h.a);
      v(this.j.a);
      v(this.o.a);
      b(this.a);
    }, a), 0);
  }

  ;

  function W(a, b, c) {
    this.c = a;
    this.a = b;
    this.f = 0;
    this.o = this.j = !1;
    this.s = c;
  }

  var X = null;

  W.prototype.g = function (a) {
    var b = this.a;
    b.g && w(b.f, [b.a.c("wf", a.c, K(a).toString(), "active")], [b.a.c("wf", a.c, K(a).toString(), "loading"), b.a.c("wf", a.c, K(a).toString(), "inactive")]);
    L(b, "fontactive", a);
    this.o = !0;
    oa(this);
  };

  W.prototype.h = function (a) {
    var b = this.a;

    if (b.g) {
      var c = y(b.f, b.a.c("wf", a.c, K(a).toString(), "active")),
          d = [],
          e = [b.a.c("wf", a.c, K(a).toString(), "loading")];
      c || d.push(b.a.c("wf", a.c, K(a).toString(), "inactive"));
      w(b.f, d, e);
    }

    L(b, "fontinactive", a);
    oa(this);
  };

  function oa(a) {
    0 == --a.f && a.j && (a.o ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), L(a, "active")) : M(a.a));
  }

  ;

  function pa(a) {
    this.j = a;
    this.a = new ja();
    this.h = 0;
    this.f = this.g = !0;
  }

  pa.prototype.load = function (a) {
    this.c = new ca(this.j, a.context || this.j);
    this.g = !1 !== a.events;
    this.f = !1 !== a.classes;
    qa(this, new ha(this.c, a), a);
  };

  function ra(a, b, c, d, e) {
    var f = 0 == --a.h;
    (a.f || a.g) && setTimeout(function () {
      var a = e || null,
          k = d || null || {};
      if (0 === c.length && f) M(b.a);else {
        b.f += c.length;
        f && (b.j = f);
        var h,
            m = [];

        for (h = 0; h < c.length; h++) {
          var l = c[h],
              n = k[l.c],
              r = b.a,
              x = l;
          r.g && w(r.f, [r.a.c("wf", x.c, K(x).toString(), "loading")]);
          L(r, "fontloading", x);
          r = null;
          null === X && (X = window.FontFace ? (x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(x[1], 10) : !0 : !1);
          X ? r = new Q(p(b.g, b), p(b.h, b), b.c, l, b.s, n) : r = new R(p(b.g, b), p(b.h, b), b.c, l, b.s, a, n);
          m.push(r);
        }

        for (h = 0; h < m.length; h++) {
          m[h].start();
        }
      }
    }, 0);
  }

  function qa(a, b, c) {
    var d = [],
        e = c.timeout;
    ia(b);
    var d = ka(a.a, c, a.c),
        f = new W(a.c, b, e);
    a.h = d.length;
    b = 0;

    for (c = d.length; b < c; b++) {
      d[b].load(function (b, d, c) {
        ra(a, f, b, d, c);
      });
    }
  }

  ;

  function sa(a, b) {
    this.c = a;
    this.a = b;
  }

  function ta(a, b, c) {
    var d = z(a.c);
    a = (a.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
    return d + "//" + a + "/" + b + ".js" + (c ? "?v=" + c : "");
  }

  sa.prototype.load = function (a) {
    function b() {
      if (f["__mti_fntLst" + d]) {
        var c = f["__mti_fntLst" + d](),
            e = [],
            h;
        if (c) for (var m = 0; m < c.length; m++) {
          var l = c[m].fontfamily;
          void 0 != c[m].fontStyle && void 0 != c[m].fontWeight ? (h = c[m].fontStyle + c[m].fontWeight, e.push(new H(l, h))) : e.push(new H(l));
        }
        a(e);
      } else setTimeout(function () {
        b();
      }, 50);
    }

    var c = this,
        d = c.a.projectId,
        e = c.a.version;

    if (d) {
      var f = c.c.m;
      B(this.c, ta(c, d, e), function (e) {
        e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
          return c.a;
        }, b());
      }).id = "__MonotypeAPIScript__" + d;
    } else a([]);
  };

  function ua(a, b) {
    this.c = a;
    this.a = b;
  }

  ua.prototype.load = function (a) {
    var b,
        c,
        d = this.a.urls || [],
        e = this.a.families || [],
        f = this.a.testStrings || {},
        g = new C();
    b = 0;

    for (c = d.length; b < c; b++) {
      A(this.c, d[b], D(g));
    }

    var k = [];
    b = 0;

    for (c = e.length; b < c; b++) {
      if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), m = 0; m < h.length; m += 1) {
        k.push(new H(d[0], h[m]));
      } else k.push(new H(d[0]));
    }

    F(g, function () {
      a(k, f);
    });
  };

  function va(a, b, c) {
    a ? this.c = a : this.c = b + wa;
    this.a = [];
    this.f = [];
    this.g = c || "";
  }

  var wa = "//fonts.googleapis.com/css";

  function xa(a, b) {
    for (var c = b.length, d = 0; d < c; d++) {
      var e = b[d].split(":");
      3 == e.length && a.f.push(e.pop());
      var f = "";
      2 == e.length && "" != e[1] && (f = ":");
      a.a.push(e.join(f));
    }
  }

  function ya(a) {
    if (0 == a.a.length) throw Error("No fonts to load!");
    if (-1 != a.c.indexOf("kit=")) return a.c;

    for (var b = a.a.length, c = [], d = 0; d < b; d++) {
      c.push(a.a[d].replace(/ /g, "+"));
    }

    b = a.c + "?family=" + c.join("%7C");
    0 < a.f.length && (b += "&subset=" + a.f.join(","));
    0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
    return b;
  }

  ;

  function za(a) {
    this.f = a;
    this.a = [];
    this.c = {};
  }

  var Aa = {
    latin: "BESbswy",
    "latin-ext": "\xE7\xF6\xFC\u011F\u015F",
    cyrillic: "\u0439\u044F\u0416",
    greek: "\u03B1\u03B2\u03A3",
    khmer: "\u1780\u1781\u1782",
    Hanuman: "\u1780\u1781\u1782"
  },
      Ba = {
    thin: "1",
    extralight: "2",
    "extra-light": "2",
    ultralight: "2",
    "ultra-light": "2",
    light: "3",
    regular: "4",
    book: "4",
    medium: "5",
    "semi-bold": "6",
    semibold: "6",
    "demi-bold": "6",
    demibold: "6",
    bold: "7",
    "extra-bold": "8",
    extrabold: "8",
    "ultra-bold": "8",
    ultrabold: "8",
    black: "9",
    heavy: "9",
    l: "3",
    r: "4",
    b: "7"
  },
      Ca = {
    i: "i",
    italic: "i",
    n: "n",
    normal: "n"
  },
      Da = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

  function Ea(a) {
    for (var b = a.f.length, c = 0; c < b; c++) {
      var d = a.f[c].split(":"),
          e = d[0].replace(/\+/g, " "),
          f = ["n4"];

      if (2 <= d.length) {
        var g;
        var k = d[1];
        g = [];
        if (k) for (var k = k.split(","), h = k.length, m = 0; m < h; m++) {
          var l;
          l = k[m];

          if (l.match(/^[\w-]+$/)) {
            var n = Da.exec(l.toLowerCase());
            if (null == n) l = "";else {
              l = n[2];
              l = null == l || "" == l ? "n" : Ca[l];
              n = n[1];
              if (null == n || "" == n) n = "4";else var r = Ba[n],
                  n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
              l = [l, n].join("");
            }
          } else l = "";

          l && g.push(l);
        }
        0 < g.length && (f = g);
        3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = Aa[d[0]]) && (a.c[e] = d));
      }

      a.c[e] || (d = Aa[e]) && (a.c[e] = d);

      for (d = 0; d < f.length; d += 1) {
        a.a.push(new H(e, f[d]));
      }
    }
  }

  ;

  function Fa(a, b) {
    this.c = a;
    this.a = b;
  }

  var Ga = {
    Arimo: !0,
    Cousine: !0,
    Tinos: !0
  };

  Fa.prototype.load = function (a) {
    var b = new C(),
        c = this.c,
        d = new va(this.a.api, z(c), this.a.text),
        e = this.a.families;
    xa(d, e);
    var f = new za(e);
    Ea(f);
    A(c, ya(d), D(b));
    F(b, function () {
      a(f.a, f.c, Ga);
    });
  };

  function Ha(a, b) {
    this.c = a;
    this.a = b;
  }

  Ha.prototype.load = function (a) {
    var b = this.a.id,
        c = this.c.m;
    b ? B(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
      if (b) a([]);else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
        b = c.Typekit.config.fn;

        for (var e = [], f = 0; f < b.length; f += 2) {
          for (var g = b[f], k = b[f + 1], h = 0; h < k.length; h++) {
            e.push(new H(g, k[h]));
          }
        }

        try {
          c.Typekit.load({
            events: !1,
            classes: !1,
            async: !0
          });
        } catch (m) {}

        a(e);
      }
    }, 2E3) : a([]);
  };

  function Ia(a, b) {
    this.c = a;
    this.f = b;
    this.a = [];
  }

  Ia.prototype.load = function (a) {
    var b = this.f.id,
        c = this.c.m,
        d = this;
    b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
      for (var g = 0, k = c.fonts.length; g < k; ++g) {
        var h = c.fonts[g];
        d.a.push(new H(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
      }

      a(d.a);
    }, B(this.c, z(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
      b && a([]);
    })) : a([]);
  };

  var Y = new pa(window);

  Y.a.c.custom = function (a, b) {
    return new ua(b, a);
  };

  Y.a.c.fontdeck = function (a, b) {
    return new Ia(b, a);
  };

  Y.a.c.monotype = function (a, b) {
    return new sa(b, a);
  };

  Y.a.c.typekit = function (a, b) {
    return new Ha(b, a);
  };

  Y.a.c.google = function (a, b) {
    return new Fa(b, a);
  };

  var Z = {
    load: p(Y.load, Y)
  };
   true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return Z;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})();

/***/ }),

/***/ "ut2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var LevelModel = function LevelModel(_ref) {
  var config = _ref.config;
  this.spritesheet = config.spritesheet;
  this.vehicleVariations = config.vehicleVariations;
  this.laneCount = config.laneCount;
  this.minMoveSpeed = config.minMoveSpeed;
  this.maxMoveSpeed = config.maxMoveSpeed;
  this.fastLaneCount = config.fastLaneCount;
  this.fastLaneMinSpeed = config.fastLaneMinSpeed;
  this.fastLaneMaxSpeed = config.fastLaneMaxSpeed;
};

exports.default = LevelModel;

/***/ }),

/***/ "v2oV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppConstants = __webpack_require__("zgbH");

var AspectController =
/*#__PURE__*/
function () {
  function AspectController(_ref) {
    var game = _ref.game;
    this.game = game;
    this.rotateScreenDisabled = false;
  }

  var _proto = AspectController.prototype;

  _proto.disableRotateScreen = function disableRotateScreen() {
    console.log('AspectController.disableRotateScreen');
    this.rotateScreenDisabled = true;

    if (this.game.hud.hudRotateScreen) {
      this.game.hud.closeRotateScreen();
    }
  };

  _proto.updateGameSize = function updateGameSize() {
    if (this.game.scale) {
      var aspect = window.innerWidth / window.innerHeight;
      var maxAspect = 7 / 3;
      var minAspect = 4 / 3;

      if (!this.rotateScreenDisabled) {
        if (window.innerWidth < window.innerHeight) {
          this.displayRotateScreen();
        } else {
          if (this.game.hud.hudRotateScreen) {
            this.game.hud.closeRotateScreen();
          }

          aspect = Math.min(maxAspect, Math.max(minAspect, aspect));
        }
      }

      var targetWidth = Math.min(this.game.defaultHeight * aspect);
      this.game.scale.setGameSize(targetWidth, this.game.defaultHeight); // this.game.scale.setUserScale(window.innerHeight / this.game.defaultHeight);

      this.game.scale.setUserScale(1 / aspect);
    }
  };

  _proto.displayRotateScreen = function displayRotateScreen() {
    if (this.game.state.current === _AppConstants.STATE_GAME || this.game.state.current === _AppConstants.STATE_WELCOME) {
      this.game.controller.pauseGame();
    }

    this.game.hud.showRotateScreen();
    this.game.world.bringToTop(this.game.hud.hudRotateScreen);
  };

  return AspectController;
}();

var _default = AspectController;
exports.default = _default;

/***/ }),

/***/ "vGYV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __DEBUG__:false, __WATCH__:false, __SHORTCUTS_ENABLED__:false */

/**
 * Import stylesheets
 */

var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("hvFc");

var _pixi = _interopRequireDefault(__webpack_require__("a8kN"));

var _p = _interopRequireDefault(__webpack_require__("LQdk"));

var _phaserSplit = _interopRequireDefault(__webpack_require__("GhOu"));

var _config = _interopRequireDefault(__webpack_require__("Pqsl"));

var _App = _interopRequireDefault(__webpack_require__("m/lz"));

var _Settings = _interopRequireDefault(__webpack_require__("eQiv"));

var _DeviceController = _interopRequireDefault(__webpack_require__("5awZ"));

var checkExists = function checkExists(lib, id) {
  if (typeof lib === 'undefined') {
    console.error('Library Missing :\t', id);
  }
};

checkExists(_pixi.default, 'PIXI');
checkExists(_p.default, 'p2');
checkExists(_phaserSplit.default, 'Phaser');
var deviceController = new _DeviceController.default();
var shouldDisableWebAudio = deviceController.isOldAppleDevice();
window.PhaserGlobal = {
  disableWebAudio: shouldDisableWebAudio
};
_config.default.settings = new _Settings.default({});
_config.default.deviceController = deviceController;
_config.default.type = deviceController.getAppRenderTpye();
window.app = new _App.default(_config.default);

/***/ }),

/***/ "x1tP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("IfHf");

var _interopRequireDefault = __webpack_require__("R6lU");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("C9uT"));

var _AppConstants = __webpack_require__("zgbH");

var _UIModel = _interopRequireDefault(__webpack_require__("yvwP"));

var _Instructions = _interopRequireDefault(__webpack_require__("lWI5"));

var _GameModel = _interopRequireDefault(__webpack_require__("BHXi"));

var _Hud = _interopRequireDefault(__webpack_require__("d0OL"));

var _Credits = _interopRequireDefault(__webpack_require__("zgV8"));

var _ConfigModel = _interopRequireDefault(__webpack_require__("ReeY"));

var _AppConstants2 = __webpack_require__("zgbH");

var _StateController = _interopRequireDefault(__webpack_require__("6R9f"));

var _LevelModel = _interopRequireDefault(__webpack_require__("ut2f"));

var _utils = __webpack_require__("hDA+");

var AppTrackingEvents = _interopRequireWildcard(__webpack_require__("t5SB"));

// import CheatController from 'app/controller/CheatController';
// import ShortcutController from 'app/controller/ShortcutController';
var GameController =
/*#__PURE__*/
function () {
  function GameController(_ref) {
    var game = _ref.game,
        settings = _ref.settings,
        hud = _ref.hud,
        deviceController = _ref.deviceController;
    this.game = game;
    this.settings = settings;
    this.hud = hud;
    this.deviceController = deviceController;
  }

  var _proto = GameController.prototype;

  _proto.init = function init(_ref2) {
    var config = _ref2.config;

    /**
     * Models
     */
    this.config = new _ConfigModel.default({
      game: this.game,
      config: config
    });

    if (!this.config.show_rotate_screen) {
      this.game.aspectController.disableRotateScreen();
    }

    this._gameModel = new _GameModel.default({
      settings: this.settings,
      gameData: this.config.game
    });
    this.stateController = new _StateController.default({
      game: this.game,
      transitionType: this.deviceController.getAppTransitionType()
    }); // this.cheatController = new CheatController(this.game);
    // this.shortcutController = new ShortcutController(this.game);

    this.game.sounds.addSounds(this.config.audio);

    if (this.game.device.ie || this.game.deviceController.isOldAppleDevice()) {
      console.log('SEPERATE SFX LOADED');
      this.game.sounds.addSounds(this.config.audioIE);
    } else {
      this.game.sounds.addAudioSprites(this.config.audioSprites);
    }

    this.uiModel = new _UIModel.default({
      settings: this.settings
    });
    this.hud.init(this.config.screenhud);
    this.gamePaused = false;
  }
  /*
  ====================================================================================
    STATES
  ====================================================================================
  */
  ;

  _proto.startBoot = function startBoot() {
    this.game.state.start(_AppConstants.STATE_BOOT, true, false);
  };

  _proto.startLoad = function startLoad() {
    this.game.state.start(_AppConstants.STATE_LOAD, true, false);
  };

  _proto.startCharacterSelect = function startCharacterSelect() {
    // this.game.sounds.dimBackgroundMusic(false);
    this.game.track(AppTrackingEvents.VIEW_SCREEN_CHARACTER_SELECT);
    this.game.state.start(_AppConstants.STATE_CHARACTER_INTRO, true, false);
  };

  _proto.startCutscene = function startCutscene() {
    this.game.track(AppTrackingEvents.VIEW_SCREEN_CUTSCENE);
    this.game.state.start(_AppConstants.STATE_CUTSCENE, true, false);
  };

  _proto.showWelcomeScreen = function showWelcomeScreen() {
    this.game.sounds.dimBackgroundMusic(false);
    this.game.track(AppTrackingEvents.VIEW_SCREEN_WELCOME);
    this.stateController.startState({
      nextState: _AppConstants.STATE_WELCOME,
      nextStateParams: [true, false]
    });
  };

  _proto.showInstructions = function showInstructions() {
    var instructionsClose = this.config.buttons.instructionsClose;
    this.instructions = new _Instructions.default({
      game: this.game,
      closeBtnData: instructionsClose
    });
    this.gameModel.setInstructionsViewed(); // don't force them if they have viewed them

    this.instructions.activate();
  };

  _proto.closeInstructions = function closeInstructions() {
    this.instructions.destroy();
  };

  _proto.showGameIntro = function showGameIntro() {
    this.hud.configure({
      id: _Hud.default.EMPTY
    });
    this.stateController.startState({
      nextState: _AppConstants.STATE_GAME_INTRO,
      nextStateParams: [true, false]
    });
  };

  _proto.setTutorialIsComplete = function setTutorialIsComplete() {
    this.gameModel.setTutorialIsComplete();
  };

  _proto.showCredits = function showCredits() {
    var creditsBack = this.config.buttons.creditsBack;
    this.credits = new _Credits.default({
      game: this.game,
      closeBtnData: creditsBack
    });
    this.credits.activate();
  };

  _proto.closeCredits = function closeCredits() {
    this.hud.configure({
      id: _Hud.default.PAUSE,
      isModal: true
    });
    this.credits.destroy();
  }
  /*
  ====================================================================================
    END GAME LEVEL
  ====================================================================================
  */

  /*
  ====================================================================================
    PLAYER LEVEL CONTROL
  ====================================================================================
  */
  ;

  _proto.startNewGame = function startNewGame() {
    this.gameModel.reset();
    this.startLevel();
  };

  _proto.startLevel = function startLevel(playerLevel) {
    this.game.sounds.dimBackgroundMusic(true);

    if (playerLevel) {
      this.gameModel.level = playerLevel;
    }

    var levelData = this.config.levels[this.gameModel.level - 1];
    this.game.track(AppTrackingEvents.getLevelString(this.gameModel.level));
    this.stateController.startState({
      nextState: _AppConstants.STATE_GAME,
      nextStateParams: [true, false, {
        levelData: levelData,
        playerLevel: this.gameModel.level,
        showTutorial: this.gameModel.getIsTutorialMode()
      }]
    });
    this.hud.configure({
      id: _Hud.default.PLAYING,
      isVisible: false
    });
  };

  _proto.replayLevel = function replayLevel() {
    this.stateController.startState({
      nextState: _AppConstants.STATE_GAME,
      nextStateParams: [true, false]
    });
  };

  _proto.nextLevel = function nextLevel() {
    if (this.gameModel.level === this.config.levels.length) {
      this.showGameComplete();
    } else {
      this.gameModel.levelUp();
      this.playLevel();
    }
  }
  /*
  ====================================================================================
    GAME PLAY
  ====================================================================================
  */
  ;

  _proto.showGameEnd = function showGameEnd(_ref3) {
    var win = _ref3.win;
    this.stateController.startState({
      nextState: _AppConstants2.STATE_GAMEEND,
      nextStateParams: [true, false, {
        win: win,
        character: this.gameModel.selectedCharacter
      }]
    });
  };

  _proto.showLevelEnd = function showLevelEnd(_ref4) {
    var win = _ref4.win;

    // if (this.hud.hudGamePause) this.hud.closeGamePause();
    if (win) {
      if (this.gameModel.getCurrentLevel() === this.configModel.getLevelCount()) {
        this.game.track(AppTrackingEvents.VIEW_SCREEN_GAME_COMPLETE);
        this.stateController.startState({
          nextState: _AppConstants2.STATE_GAMEEND,
          nextStateParams: [true, false, {
            win: win,
            character: this.gameModel.selectedCharacter
          }]
        });
      } else {
        this.game.track(AppTrackingEvents.getLevelCompleteString(this.gameModel.getCurrentLevel()));
        this.game.track(AppTrackingEvents.VIEW_SCREEN_LEVEL_WIN);
        this.stateController.startState({
          nextState: _AppConstants.STATE_LEVELEND,
          nextStateParams: [true, false, {
            win: win,
            character: this.gameModel.selectedCharacter
          }]
        });
      }
    } else {
      this.game.track(AppTrackingEvents.getLevelLoseString(this.gameModel.getCurrentLevel()));
      this.game.track(AppTrackingEvents.VIEW_SCREEN_LEVEL_LOSE);
      this.stateController.startState({
        nextState: _AppConstants.STATE_LEVELLOSE,
        nextStateParams: [true, false, {
          character: this.gameModel.selectedCharacter
        }]
      });
    }
  } // is time being used here?
  ;

  _proto.showGameOver = function showGameOver() {
    // this.game.sounds.dimBackgroundMusic(false);
    this.stateController.startState({
      nextState: _AppConstants2.STATE_GAMEEND,
      nextStateParams: [true, false]
    });
    this.hud.configure({
      id: _Hud.default.GAMEEND,
      isVisible: false
    });
  };

  _proto.quitGame = function quitGame() {
    this.hud.deactivate();
    this.gameModel.reset();
    this.showWelcomeScreen();
  };

  _proto.restartGame = function restartGame() {
    this.gameModel.reset();
    this.startLevel();
  }
  /*
  ====================================================================================
    PAUSE / RESUME
  ====================================================================================
  */
  ;

  _proto.pauseGame = function pauseGame() {
    if (!this.gamePaused) {
      this.gamePaused = true;

      if (this.game.state.current === _AppConstants.STATE_GAME) {
        this.hud.disable();
        this.showPauseScreenHud();
      } // setTimeout(this.showPauseScreenHud.bind(this), 0);

    }
  };

  _proto.showPauseScreenHud = function showPauseScreenHud() {
    this.uiModel.setPaused(true);
    this.hud.enable();
    this.hud.activate({
      id: _Hud.default.PAUSE,
      isModal: true
    });
    this.game.track(AppTrackingEvents.VIEW_SCREEN_PAUSE);
    this.hud.showGamePause();
  };

  _proto.resumeGame = function resumeGame() {
    this.gamePaused = false;

    if (this.game.state.current === _AppConstants.STATE_GAME) {
      this.hud.configure({
        id: _Hud.default.PLAYING
      });
      this.hud.closeGamePause();
      this.uiModel.setPaused(false);
    }
  };

  _proto.restartLevel = function restartLevel() {
    console.log(this);
    this.resumeGame();
    this.startLevel();
  };

  _proto.showGameCredits = function showGameCredits() {
    this.hud.closeGamePause();
    this.hud.activate({
      id: _Hud.default.PAUSE,
      isModal: true
    });
    this.hud.showGameCredits();
  };

  _proto.closeGameCredits = function closeGameCredits() {
    this.hud.closeGameCredits();
    this.hud.activate({
      id: _Hud.default.PAUSE,
      isModal: true
    });
    this.hud.showGamePause();
  }
  /*
  ====================================================================================
    GETTERS/SETTERS
  ====================================================================================
  */
  ;

  (0, _createClass2.default)(GameController, [{
    key: "configModel",
    get: function get() {
      return this.config;
    }
  }, {
    key: "gameModel",
    get: function get() {
      return this._gameModel;
    }
  }]);
  return GameController;
}();

exports.default = GameController;

/***/ }),

/***/ "yvwP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var UIModel =
/*#__PURE__*/
function () {
  /**
   * UIModel saves mute state to LocalStorage via utils/Settings
   */
  function UIModel(_ref) {
    var settings = _ref.settings;
    this.settings = settings;
    this.paused = false;
    this.onAudioIsChanged = new Phaser.Signal();
    this.onPauseIsChanged = new Phaser.Signal();
  }
  /**
   * AUDIO
   */


  var _proto = UIModel.prototype;

  _proto.toggleAudio = function toggleAudio() {
    var result = this.settings.toggleAudio();

    if (result.isMuted) {}

    this.onAudioIsChanged.dispatch(result);
  };

  _proto.getAudio = function getAudio() {
    return this.settings.getAudio();
  };

  _proto.getIsMuted = function getIsMuted() {
    return this.settings.getIsMuted();
  }
  /**
   * Pause
   */
  ;

  _proto.setPaused = function setPaused(value) {
    this.paused = value;
    this.onPauseIsChanged.dispatch({
      paused: this.paused,
      fromUI: true
    });
  };

  _proto.destroy = function destroy() {
    this.onAudioIsChanged.forget();
    this.onAudioIsChanged.dispose();
    this.onAudioIsChanged.removeAll();
    this.onPauseIsChanged.forget();
    this.onPauseIsChanged.dispose();
    this.onPauseIsChanged.removeAll();
    Object.prototype.destroy.call(this);
  };

  return UIModel;
}();

exports.default = UIModel;

/***/ }),

/***/ "zgV8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

__webpack_require__("UUvd");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("86MP"));

var _ButtonFixedPosition = _interopRequireDefault(__webpack_require__("BKU+"));

var Credits =
/*#__PURE__*/
function (_Phaser$Group) {
  (0, _inheritsLoose2.default)(Credits, _Phaser$Group);

  function Credits(_ref) {
    var _this;

    var game = _ref.game,
        closeBtnData = _ref.closeBtnData;
    _this = _Phaser$Group.call(this, game) || this;
    var sheet = 'ui';
    _this.background = _this.game.make.image(0, 0, 'bg_fade');

    _this.background.anchor.set(0);

    _this.add(_this.background);

    _this.background.inputEnabled = true;
    _this.background.input.priorityID = 0;
    _this.background.input.useHandCursor = false;
    _this.panelContainer = _this.game.make.group();

    _this.add(_this.panelContainer);

    _this.panel = _this.game.make.image(0, 0, sheet, 'credits');

    _this.panel.anchor.set(0, 0.5);

    _this.panelContainer.add(_this.panel);

    _this.createCloseButton(closeBtnData);

    _this.positionElements();

    return _this;
  }

  var _proto = Credits.prototype;

  _proto.createCloseButton = function createCloseButton(data) {
    if (data) {
      var id = data.id,
          sfx_id = data.sfx_id,
          skin = data.skin,
          ariaLabelID = data.ariaLabelID;
      var opts = {
        game: this.game,
        id: id,
        x: 0,
        y: 0,
        sfx_id: sfx_id,
        skin: skin,
        ariaLabelID: ariaLabelID
      };
      this.closeButton = new _ButtonFixedPosition.default(opts);
      this.closeButton.onInputDown.add(this.handleClose, this);
      this.panelContainer.add(this.closeButton);
      var x = this.panel.width * 0.5;
      var y = this.panel.height * 0.5 + 60;
      this.closeButton.position.set(x, y);
    }
  };

  _proto.handleClose = function handleClose() {
    this.game.controller.closeCredits();
  };

  _proto.positionElements = function positionElements() {
    this.background.width = this.game.width;
    this.background.height = this.game.height;
    this.panelContainer.position.set((this.game.width - this.panelContainer.width) * 0.5, this.game.height * 0.48);
  };

  _proto.activate = function activate() {
    this.game.scale.onSizeChange.add(this.positionElements, this);
    var childIndex = this.game.stage.children.length;
    this.game.stage.addChildAt(this, childIndex);
  };

  _proto.deactivate = function deactivate() {
    this.game.scale.onSizeChange.remove(this.positionElements, this);
    this.game.world.remove(this);
  };

  _proto.destroy = function destroy() {
    this.panelContainer.destroy(true);
    this.panelContainer = null;
    this.panel = null;
    this.closeButton.destroy(true);
    this.closeButton = null;
    this.background = null;
    this.deactivate();

    _Phaser$Group.prototype.destroy.call(this, true);
  };

  return Credits;
}(Phaser.Group);

var _default = Credits;
exports.default = _default;

/***/ }),

/***/ "zgbH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WISETRACK_COUNTRY = exports.WISETRACK_ID = exports.SCREEN_LOSE_WAIT_TIME_MAX = exports.SCREEN_LOSE_WAIT_TIME_MIN = exports.SCREEN_WELCOME_WAIT_TIME_MAX = exports.SCREEN_WELCOME_WAIT_TIME_MIN = exports.GAME_GRID_START_X = exports.GAME_GRID_SIZE = exports.GAME_END_HEIGHT = exports.GAME_START_HEIGHT = exports.GAME_LANE_HEIGHT = exports.GAME_ROAD_WIDTH = exports.GAME_ROAD_HEIGHT = exports.GAME_LOAD_BATCH = exports.GAME_LOAD_LAZY = exports.GAME_LOAD_FULL = exports.FONT_COLOUR_BLACK = exports.FONT_COLOUR_STROKE = exports.FONT_COLOUR_PAUSED = exports.FONT_COLOUR_LEVEL_WIN = exports.FONT_COLOUR_CREDITS = exports.FONT_COLOUR_COPYRIGHT = exports.FONT_COLOUR_SCORE_FAIL = exports.FONT_COLOUR_SCORE_TARGET = exports.FONT_COLOUR_SCORE_HIGH = exports.FONT_COLOUR_SCORE = exports.COPY_WHITE = exports.COPY_BLACK = exports.COPY_BLUE = exports.TIMER_SHADOW_COLOUR = exports.TIMER_TEXT_COLOUR = exports.FONT_COPY_CSS = exports.FONT_COPY = exports.FONT_BUTTON_CSS = exports.FONT_BUTTON = exports.FONT_TITLE_CSS = exports.FONT_TITLE = exports.SAVED_PLAYER_DATA_PREFIX = exports.SAVED_PLAYER_DATA_ID = exports.DEFAULT_PLAYER_ID = exports.STATE_CUTSCENE = exports.STATE_GAME_COMPLETE = exports.STATE_GAMEOVER = exports.STATE_GAMEEND = exports.STATE_LEVELLOSE = exports.STATE_LEVELEND = exports.STATE_WELCOME = exports.STATE_CHARACTER_INTRO = exports.STATE_GAME_INTRO = exports.STATE_GAME = exports.STATE_LOAD = exports.STATE_BOOT = exports.PATH_BASE = exports.PATH_ASSETS = exports.GAME_BACKGROUND_COLOR = exports.GAME_LEVEL_IDS = exports.Y_PAD_SCALE = exports.X_PAD_SCALE = exports.GAME_HEIGHT_DEFAULT = exports.GAME_WIDTH_DEFAULT = exports.GAME_DIV_CLASSNAME = exports.GAME_DIV_ID = void 0;

/**
 * GAME
 */
var GAME_DIV_ID = 'game-holder';
exports.GAME_DIV_ID = GAME_DIV_ID;
var GAME_DIV_CLASSNAME = 'canvas_container absolute_center page_background trap';
exports.GAME_DIV_CLASSNAME = GAME_DIV_CLASSNAME;
var GAME_WIDTH_DEFAULT = 1280;
exports.GAME_WIDTH_DEFAULT = GAME_WIDTH_DEFAULT;
var GAME_HEIGHT_DEFAULT = 720;
exports.GAME_HEIGHT_DEFAULT = GAME_HEIGHT_DEFAULT;
var X_PAD_SCALE = 0.03;
exports.X_PAD_SCALE = X_PAD_SCALE;
var Y_PAD_SCALE = 0.02;
exports.Y_PAD_SCALE = Y_PAD_SCALE;
var GAME_LEVEL_IDS = ['1'];
exports.GAME_LEVEL_IDS = GAME_LEVEL_IDS;
var GAME_BACKGROUND_COLOR = '0x000000';
/**
export const PATH_BASE = './';
 * PATHS
 */

exports.GAME_BACKGROUND_COLOR = GAME_BACKGROUND_COLOR;
var PATH_ASSETS = 'assets/';
exports.PATH_ASSETS = PATH_ASSETS;
var PATH_BASE = './';
/**
 * STATES
 */

exports.PATH_BASE = PATH_BASE;
var STATE_BOOT = 'STATE_BOOT';
exports.STATE_BOOT = STATE_BOOT;
var STATE_LOAD = 'STATE_LOAD';
exports.STATE_LOAD = STATE_LOAD;
var STATE_GAME = 'STATE_GAME';
exports.STATE_GAME = STATE_GAME;
var STATE_GAME_INTRO = 'STATE_GAME_INTRO';
exports.STATE_GAME_INTRO = STATE_GAME_INTRO;
var STATE_CHARACTER_INTRO = 'STATE_CHARACTER_INTRO';
exports.STATE_CHARACTER_INTRO = STATE_CHARACTER_INTRO;
var STATE_WELCOME = 'STATE_WELCOME';
exports.STATE_WELCOME = STATE_WELCOME;
var STATE_LEVELEND = 'STATE_LEVELEND';
exports.STATE_LEVELEND = STATE_LEVELEND;
var STATE_LEVELLOSE = 'STATE_LEVELLOSE';
exports.STATE_LEVELLOSE = STATE_LEVELLOSE;
var STATE_GAMEEND = 'STATE_GAMEEND';
exports.STATE_GAMEEND = STATE_GAMEEND;
var STATE_GAMEOVER = 'STATE_GAMEOVER';
exports.STATE_GAMEOVER = STATE_GAMEOVER;
var STATE_GAME_COMPLETE = 'STATE_GAME_COMPLETE';
exports.STATE_GAME_COMPLETE = STATE_GAME_COMPLETE;
var STATE_CUTSCENE = 'STATE_CUTSCENE';
/**
 * SAVE DATA
 */

exports.STATE_CUTSCENE = STATE_CUTSCENE;
var DEFAULT_PLAYER_ID = 'PLAYER_ONE';
exports.DEFAULT_PLAYER_ID = DEFAULT_PLAYER_ID;
var SAVED_PLAYER_DATA_ID = 'slots';
exports.SAVED_PLAYER_DATA_ID = SAVED_PLAYER_DATA_ID;
var SAVED_PLAYER_DATA_PREFIX = 'save';
/**
 * FONTS
 */

exports.SAVED_PLAYER_DATA_PREFIX = SAVED_PLAYER_DATA_PREFIX;
var FONT_TITLE = 'superstarregular';
exports.FONT_TITLE = FONT_TITLE;
var FONT_TITLE_CSS = 'superstar_memesbruh03.css';
exports.FONT_TITLE_CSS = FONT_TITLE_CSS;
var FONT_BUTTON = 'superstarregular';
exports.FONT_BUTTON = FONT_BUTTON;
var FONT_BUTTON_CSS = 'superstar_memesbruh03.css';
exports.FONT_BUTTON_CSS = FONT_BUTTON_CSS;
var FONT_COPY = 'superstarregular';
exports.FONT_COPY = FONT_COPY;
var FONT_COPY_CSS = 'superstar_memesbruh03.css';
/**
 * COLOURS
 */

exports.FONT_COPY_CSS = FONT_COPY_CSS;
var TIMER_TEXT_COLOUR = '#ed1c24';
exports.TIMER_TEXT_COLOUR = TIMER_TEXT_COLOUR;
var TIMER_SHADOW_COLOUR = '#2d3467';
exports.TIMER_SHADOW_COLOUR = TIMER_SHADOW_COLOUR;
var COPY_BLUE = '#2c3468';
exports.COPY_BLUE = COPY_BLUE;
var COPY_BLACK = '#000000';
exports.COPY_BLACK = COPY_BLACK;
var COPY_WHITE = '#ffffff';
exports.COPY_WHITE = COPY_WHITE;
var FONT_COLOUR_SCORE = '#ffd700';
exports.FONT_COLOUR_SCORE = FONT_COLOUR_SCORE;
var FONT_COLOUR_SCORE_HIGH = '#34bbf7';
exports.FONT_COLOUR_SCORE_HIGH = FONT_COLOUR_SCORE_HIGH;
var FONT_COLOUR_SCORE_TARGET = '#ffffff';
exports.FONT_COLOUR_SCORE_TARGET = FONT_COLOUR_SCORE_TARGET;
var FONT_COLOUR_SCORE_FAIL = '#f62e21';
exports.FONT_COLOUR_SCORE_FAIL = FONT_COLOUR_SCORE_FAIL;
var FONT_COLOUR_COPYRIGHT = 'rgba(135,136,138,1)';
exports.FONT_COLOUR_COPYRIGHT = FONT_COLOUR_COPYRIGHT;
var FONT_COLOUR_CREDITS = 'rgba(135,136,138,1)';
exports.FONT_COLOUR_CREDITS = FONT_COLOUR_CREDITS;
var FONT_COLOUR_LEVEL_WIN = '#fe9901';
exports.FONT_COLOUR_LEVEL_WIN = FONT_COLOUR_LEVEL_WIN;
var FONT_COLOUR_PAUSED = '#ffffff';
exports.FONT_COLOUR_PAUSED = FONT_COLOUR_PAUSED;
var FONT_COLOUR_STROKE = '#000000';
exports.FONT_COLOUR_STROKE = FONT_COLOUR_STROKE;
var FONT_COLOUR_BLACK = '#000000';
/**
 * OTHER
 */

exports.FONT_COLOUR_BLACK = FONT_COLOUR_BLACK;
var GAME_LOAD_FULL = 'GAME_LOAD_FULL';
exports.GAME_LOAD_FULL = GAME_LOAD_FULL;
var GAME_LOAD_LAZY = 'GAME_LOAD_LAZY';
exports.GAME_LOAD_LAZY = GAME_LOAD_LAZY;
var GAME_LOAD_BATCH = 'GAME_LOAD_BATCH';
/**
 * GAME
 */

exports.GAME_LOAD_BATCH = GAME_LOAD_BATCH;
var GAME_ROAD_HEIGHT = 288;
exports.GAME_ROAD_HEIGHT = GAME_ROAD_HEIGHT;
var GAME_ROAD_WIDTH = 1680;
exports.GAME_ROAD_WIDTH = GAME_ROAD_WIDTH;
var GAME_LANE_HEIGHT = 144;
exports.GAME_LANE_HEIGHT = GAME_LANE_HEIGHT;
var GAME_START_HEIGHT = 0;
exports.GAME_START_HEIGHT = GAME_START_HEIGHT;
var GAME_END_HEIGHT = 430;
exports.GAME_END_HEIGHT = GAME_END_HEIGHT;
var GAME_GRID_SIZE = 144;
exports.GAME_GRID_SIZE = GAME_GRID_SIZE;
var GAME_GRID_START_X = 48;
/**
 * SCREENS
 */

exports.GAME_GRID_START_X = GAME_GRID_START_X;
var SCREEN_WELCOME_WAIT_TIME_MIN = 500;
exports.SCREEN_WELCOME_WAIT_TIME_MIN = SCREEN_WELCOME_WAIT_TIME_MIN;
var SCREEN_WELCOME_WAIT_TIME_MAX = 2000;
exports.SCREEN_WELCOME_WAIT_TIME_MAX = SCREEN_WELCOME_WAIT_TIME_MAX;
var SCREEN_LOSE_WAIT_TIME_MIN = 400;
exports.SCREEN_LOSE_WAIT_TIME_MIN = SCREEN_LOSE_WAIT_TIME_MIN;
var SCREEN_LOSE_WAIT_TIME_MAX = 2000;
/**
 * WISETRACK
 */

exports.SCREEN_LOSE_WAIT_TIME_MAX = SCREEN_LOSE_WAIT_TIME_MAX;
var WISETRACK_ID = 'WISETRACK_2956_a50b592e82';
exports.WISETRACK_ID = WISETRACK_ID;
var WISETRACK_COUNTRY = 'en_GB';
exports.WISETRACK_COUNTRY = WISETRACK_COUNTRY;

/***/ })

},[[0,2,1]]]);
//# sourceMappingURL=../sourcemaps/js/main.e5090944.js.map