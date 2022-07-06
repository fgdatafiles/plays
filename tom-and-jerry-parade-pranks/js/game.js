var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var F84;
(function (F84) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.init = function () {
            this.input.maxPointers = 2;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.USER_SCALE;
            F84.PhaserText.override();
        };
        Boot.prototype.preload = function () {
            console.log(F84.Game.Instance.locale);
            this.load.json('strings', './locale/strings.json');
            this.load.image('rotateDevice', './assets/images/system/orientation.png');
            this.load.image('loadBG', './assets/images/ui/tnj-cny-loading-bg.png');
            this.load.image('splashLogo', './locale/' + F84.Game.Instance.locale + '/tnj-cny-ui-splash-logo.png');
            this.load.image('loadBar', './assets/images/ui/tnj-cny-loading-bar-container.png');
            this.load.image('loadFill', './assets/images/ui/tnj-cny-loading-bar-fill.png');
        };
        Boot.prototype.create = function () {
            F84.Orientation.rescale(this, F84.OrientationType.LANDSCAPE, F84.ScaleBy.HEIGHT);
            F84.GameConfig.loadConfigFile(this.cache, "gameConfig");
            console.log(F84.Strings.get("GameTitle"));
            this.game.state.start('Preloader');
        };
        return Boot;
    }(Phaser.State));
    F84.Boot = Boot;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var CustomLoader = (function (_super) {
        __extends(CustomLoader, _super);
        function CustomLoader(game) {
            return _super.call(this, game) || this;
        }
        CustomLoader.prototype.webfont = function (key, fontName, overwrite) {
            if (overwrite === void 0) { overwrite = false; }
            this.addToFileList('webfont', key, fontName);
            return this;
        };
        CustomLoader.prototype.loadFile = function (file) {
            _super.prototype.loadFile.call(this, file);
            if (file.type == 'webfont') {
                var _this = this;
                var font = new FontFaceObserver(file.url);
                font.load(null, 10000).then(function () {
                    _this.asyncComplete(file);
                }, function () {
                    _this.asyncComplete(file, 'Error loading font ' + file.url);
                });
            }
        };
        return CustomLoader;
    }(Phaser.Loader));
    F84.CustomLoader = CustomLoader;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this, 1024, 576, Phaser.CANVAS, "", null, true) || this;
            _this._locale = "en-us";
            _this._defaultWidth = 1024;
            _this._defaultHeight = 576;
            Game._instance = _this;
            _this.playerData = new F84.PlayerData("TomAndJerryChineseNewYear");
            var net = new Phaser.Net(_this);
            var localeQuery = net.getQueryString("locale");
            if (!F84.ObjectUtils.isEmpty(localeQuery)) {
                _this._locale = localeQuery;
            }
            else {
                if (window.frameElement != null) {
                    var attribute = window.frameElement.attributes.getNamedItem("data-locale");
                    if (attribute != null) {
                        _this._locale = attribute.value.toLowerCase();
                    }
                }
            }
            _this.preserveDrawingBuffer = true;
            _this.state.add('Boot', F84.Boot);
            _this.state.add('Preloader', F84.Preloader);
            _this.state.add('SplashScreen', F84.SplashScreen);
            _this.state.add('StoryIntro', F84.StoryIntro);
            _this.state.add('LevelSelect', F84.LevelSelect);
            _this.state.add('GameState', F84.GameState);
            _this.state.add('GameComplete', F84.GameComplete);
            _this.state.start('Boot');
            return _this;
        }
        Object.defineProperty(Game.prototype, "DefaultWidth", {
            get: function () {
                return this._defaultWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Game.prototype, "DefaultHeight", {
            get: function () {
                return this._defaultHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Game, "Instance", {
            get: function () {
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Game.prototype, "locale", {
            get: function () {
                return this._locale;
            },
            enumerable: true,
            configurable: true
        });
        Game.prototype.getBounds = function () {
            return new Phaser.Rectangle(0, 0, this.width, this.height);
        };
        Game.prototype.boot = function () {
            _super.prototype.boot.call(this);
            this.load = new F84.CustomLoader(this);
        };
        return Game;
    }(Phaser.Game));
    F84.Game = Game;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var GameColors = (function () {
        function GameColors() {
        }
        GameColors.WHITE = "#ffffff";
        GameColors.OFF_WHITE = "#fdf1e3";
        GameColors.BROWN = "#63534D";
        GameColors.YELLOW = "#f9e34b";
        GameColors.TAN = "#746356";
        GameColors.ORANGE = "#ffa800";
        GameColors.GREEN = "#7fc701";
        return GameColors;
    }());
    F84.GameColors = GameColors;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ResizableState = (function (_super) {
        __extends(ResizableState, _super);
        function ResizableState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ResizableState.prototype.preload = function () {
            var _this = this;
            _super.prototype.preload.call(this, this.game);
            this.scale.setResizeCallback(function (scale, parentBounds) {
                if (_this._lastResizeBounds == null
                    || parentBounds.x != _this._lastResizeBounds.x
                    || parentBounds.y != _this._lastResizeBounds.y
                    || parentBounds.width != _this._lastResizeBounds.width
                    || parentBounds.height != _this._lastResizeBounds.height) {
                    _this._lastResizeBounds = parentBounds.clone();
                    F84.Orientation.rescale(_this, F84.OrientationType.LANDSCAPE, F84.ScaleBy.HEIGHT);
                }
            }, this);
            this.scale.onSizeChange.add(function () {
                _this.resize();
            }, this);
        };
        ResizableState.prototype.resize = function () {
            _super.prototype.resize.call(this, F84.Game.Instance.width, F84.Game.Instance.height);
        };
        ResizableState.prototype.shutdown = function () {
            this.scale.onSizeChange.removeAll(this);
        };
        return ResizableState;
    }(Phaser.State));
    F84.ResizableState = ResizableState;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var GameComplete = (function (_super) {
        __extends(GameComplete, _super);
        function GameComplete() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameComplete.prototype.create = function () {
            var _this = this;
            F84.Music.switchMusic(this.game, 'menuMusic');
            F84.PlayerData.Instance.save();
            var numStars = 0;
            for (var i = 0; i < F84.PlayerData.Instance.saveData.stars.length; i++) {
                numStars += F84.PlayerData.Instance.saveData.stars[i];
            }
            var earnedAllStars = numStars == 60;
            var background = this.add.sprite(0, 0, 'loadBG');
            var scaleGroup = this.add.group();
            var popup = this.add.sprite(0, 0, 'storyPopup', null, scaleGroup);
            var nextButton = this.add.button(0, 0, 'btnPlay', this.next, this, null, null, null, null, scaleGroup);
            F84.GameFactory.addButtonBounce(this.game, nextButton);
            var headerStyle = { fill: 'white', fontSize: 50, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 370, align: 'center', boundsAlignH: 'center' };
            var headerText = this.add.text(0, 0, F84.Strings.get('GameCompleteHeader'), headerStyle, scaleGroup);
            var style = { fill: 'white', fontSize: 42, font: F84.Fonts.DefaultFont, wordWrap: true, wordWrapWidth: 370, align: 'center', boundsAlignH: 'center' };
            var text = this.add.text(0, 0, '', style, scaleGroup);
            text.setText(F84.Strings.get('GameComplete'));
            if (F84.Game.Instance.locale == "ja-ja" || F84.Game.Instance.locale == "zh-cn")
                text.useAdvancedWrap = true;
            var substyle = { fill: 'white', fontSize: 36, font: F84.Fonts.DefaultFont, wordWrap: true, wordWrapWidth: 370, align: 'center', boundsAlignH: 'center' };
            var subtext = this.add.text(0, 0, '', substyle, scaleGroup);
            subtext.setText(F84.Strings.get(earnedAllStars ? 'GameCompleteAllStars' : 'GameCompleteMoreStars'));
            if (F84.Game.Instance.locale == "ja-ja" || F84.Game.Instance.locale == "zh-cn")
                subtext.useAdvancedWrap = true;
            var image = this.add.image(0, 0, 'gameCompleteImage', null, scaleGroup);
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                var scaleFactor = Math.min(1, F84.Game.Instance.scale.scaleFactor.y);
                scaleGroup.scale.set(scaleFactor, scaleFactor);
                headerText.alignIn(popup, Phaser.TOP_CENTER, 5, -10);
                text.alignIn(popup, Phaser.TOP_CENTER, 0, -125);
                subtext.alignTo(text, Phaser.BOTTOM_CENTER, 0, 20);
                nextButton.alignIn(popup, Phaser.BOTTOM_CENTER, 0, 30);
                image.alignTo(popup, Phaser.LEFT_CENTER, -80, 25);
                scaleGroup.alignIn(_this.world.bounds, Phaser.CENTER);
            };
            this.resize();
        };
        GameComplete.prototype.resize = function () {
            this._onResize();
        };
        GameComplete.prototype.next = function () {
            this.game.sound.play('button');
            this.game.state.start('SplashScreen');
        };
        return GameComplete;
    }(F84.ResizableState));
    F84.GameComplete = GameComplete;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var GameConfig = (function () {
        function GameConfig() {
        }
        GameConfig.loadConfigFile = function (cache, key) {
            this.json = cache.getJSON(key);
        };
        GameConfig.get = function (id) {
            if (this.json === undefined)
                throw new Error('Config file not loaded');
            if (this.json[id] === undefined)
                throw new Error("Key '" + id + "' does not exist in config file");
            return this.json[id];
        };
        return GameConfig;
    }());
    F84.GameConfig = GameConfig;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ResizableGroup = (function (_super) {
        __extends(ResizableGroup, _super);
        function ResizableGroup(game, parent, name, addToStage, enableBody, physicsBodyType) {
            var _this = _super.call(this, game, parent, name, addToStage, enableBody, physicsBodyType) || this;
            game.scale.onSizeChange.add(function () {
                _this.resize();
            }, _this);
            return _this;
        }
        ResizableGroup.prototype.resize = function () {
        };
        ResizableGroup.prototype.destroy = function (destroyChildren, soft) {
            if (this.game) {
                this.game.scale.onSizeChange.removeAll(this);
            }
            _super.prototype.destroy.call(this, destroyChildren, soft);
        };
        return ResizableGroup;
    }(Phaser.Group));
    F84.ResizableGroup = ResizableGroup;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var LevelCompletePopup = (function (_super) {
        __extends(LevelCompletePopup, _super);
        function LevelCompletePopup(game, level, stars, steps, starRequirements) {
            var _this = _super.call(this, game) || this;
            _this.level = level;
            var overlay = F84.Overlay.create(game, 0.7);
            _this.add(overlay);
            var popupGroup = game.add.group(_this);
            var bg = game.add.sprite(0, 0, 'recapPopup', null, popupGroup);
            var art = game.add.sprite(0, 0, 'recapJerry', null, popupGroup);
            var headerStyle = { fill: F84.GameColors.WHITE, fontSize: 48, font: F84.Fonts.BoldFont };
            var headerText = game.add.text(0, 0, '', headerStyle, popupGroup);
            headerText.setText(F84.Strings.get('RecapWinHeader'));
            var textStyle = { fill: 'white', fontSize: 40, font: F84.Fonts.BoldFont };
            var stepsText = game.add.text(0, 0, F84.Strings.get('RecapWinSteps').replace("%N", steps.toString()), textStyle, popupGroup);
            var starBG = game.add.sprite(0, 0, 'recapStarContainer', null, popupGroup);
            var starSprites = [];
            for (var i = 1; i <= stars; i++) {
                var star = game.add.sprite(0, 0, 'recapStar' + i, null, popupGroup);
                star.anchor.set(0.5, 0.5);
                starSprites.push(star);
            }
            var nextButton = game.add.button(0, 0, 'btnPlay', _this.continue, _this);
            popupGroup.add(nextButton);
            var restartButton = game.add.button(0, 0, 'btnSplashRestart', _this.replay, _this);
            popupGroup.add(restartButton);
            F84.GameFactory.addButtonBounce(_this.game, nextButton);
            var starTrackGroup = game.add.group(popupGroup);
            var recapTrack = game.add.image(0, 0, 'recapStarTrack', null, starTrackGroup);
            recapTrack.anchor.set(0.5, 0.5);
            var trackLength = recapTrack.width - 18;
            if (stars > 0) {
                var jerryRun = game.add.sprite(0, 0, 'recapStarJerryRun', null, starTrackGroup);
                jerryRun.anchor.set(0.5, 0.5);
                var jerryStartX = -trackLength / 2;
                var stepPercentage = 0;
                if (stars == 3)
                    stepPercentage = 1;
                if (stars == 2)
                    stepPercentage = 0.5 + (1.0 - ((steps - starRequirements[2]) / (starRequirements[1] - starRequirements[2]))) * 0.5;
                if (stars == 1)
                    stepPercentage = 0.0 + (1.0 - ((steps - starRequirements[1]) / (starRequirements[0] - starRequirements[1]))) * 0.5;
                var jerryEndX = -trackLength / 2 + trackLength * stepPercentage;
                jerryRun.x = jerryStartX;
                _this.game.add.tween(jerryRun).to({ x: jerryEndX }, 1250, Phaser.Easing.Quadratic.Out, true, 350);
            }
            for (var i = 0; i < starRequirements.length; i++) {
                var marker = _this.createStarTrackRequirement(starTrackGroup, i + 1, starRequirements[i]);
                var percentage = i / (starRequirements.length - 1);
                var x = -trackLength / 2 + trackLength * percentage;
                marker.alignIn(recapTrack, Phaser.CENTER, x, 45);
                marker.alpha = stars > i ? 1 : 0.7;
            }
            _this._onResize = function () {
                overlay.width = F84.Game.Instance.width;
                overlay.height = F84.Game.Instance.height;
                var scaleFactor = Math.min(1, F84.Game.Instance.scale.scaleFactor.y);
                popupGroup.scale.set(scaleFactor, scaleFactor);
                popupGroup.alignIn(overlay, Phaser.CENTER, -10, -5);
                art.alignIn(bg, Phaser.BOTTOM_CENTER, -270, 35);
                headerText.alignIn(bg, Phaser.TOP_CENTER, 15, -56);
                stepsText.alignIn(bg, Phaser.CENTER, 0, 40);
                starBG.alignIn(bg, Phaser.CENTER, 0, -50);
                for (var i = 0; i < starSprites.length; i++) {
                    starSprites[i].alignIn(starBG, Phaser.CENTER, 0, 0);
                }
                nextButton.alignIn(bg, Phaser.BOTTOM_CENTER, 0, 50);
                restartButton.alignTo(nextButton, Phaser.RIGHT_CENTER, 8, 0);
                starTrackGroup.alignIn(bg, Phaser.CENTER, 3, 110);
            };
            _this.resize();
            _this.resize();
            game.add.tween(overlay).from({ alpha: 0 }, 250, Phaser.Easing.Quadratic.Out, true);
            _this.game.add.tween(popupGroup).from({ y: 500, angle: -10 }, 350, Phaser.Easing.Back.Out, true);
            var starCount = 1;
            for (var i = 0; i < starSprites.length; i++) {
                var star = starSprites[i];
                var delay = 175;
                _this.game.add.tween(star.scale).from({ x: 3, y: 3 }, 350, Phaser.Easing.Back.Out, true, 500 + delay * i);
                _this.game.add.tween(star).from({ alpha: 0, angle: 10 }, 250, Phaser.Easing.Quadratic.Out, true, 500 + delay * i);
                _this.game.time.events.add(500 + i * delay, function () {
                    _this.game.sound.play('star' + starCount, 0.5);
                    starCount++;
                }, _this);
            }
            return _this;
        }
        LevelCompletePopup.prototype.resize = function () {
            this._onResize();
        };
        LevelCompletePopup.prototype.replay = function () {
            this.game.sound.play('button');
            this.game.state.start('GameState', true, false, this.level);
        };
        LevelCompletePopup.prototype.continue = function () {
            this.game.sound.play('button');
            console.log(this.level);
            if (this.level == 19) {
                this.game.state.start('GameComplete', true, false);
            }
            else {
                this.game.state.start('LevelSelect', true, false);
            }
        };
        LevelCompletePopup.prototype.createStarTrackRequirement = function (parent, stars, requirement) {
            var group = this.game.add.group(parent);
            var bg = this.game.add.image(0, 0, 'recapStarMarker' + stars, null, group);
            bg.anchor.set(0.5, 0.5);
            var style = { fill: F84.GameColors.WHITE, fontSize: 16, font: F84.Fonts.BoldFont };
            var textfield = this.game.add.text(0, 0, requirement.toString(), style, group);
            textfield.alignIn(bg, Phaser.CENTER, 0, 10);
            return group;
        };
        return LevelCompletePopup;
    }(F84.ResizableGroup));
    F84.LevelCompletePopup = LevelCompletePopup;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var LevelFailPopup = (function (_super) {
        __extends(LevelFailPopup, _super);
        function LevelFailPopup(game, level) {
            var _this = _super.call(this, game) || this;
            _this.level = level;
            var overlay = F84.Overlay.create(game, 0.7);
            _this.add(overlay);
            var popupGroup = game.add.group(_this);
            var bg = game.add.sprite(0, 0, 'popup', null, popupGroup);
            var characters = game.add.sprite(0, 0, 'recapFail', null, popupGroup);
            var headerStyle = { fill: F84.GameColors.WHITE, fontSize: 48, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 400, align: 'center' };
            var headerText = game.add.text(0, 0, '', headerStyle, popupGroup);
            headerText.setText(F84.Strings.get('RecapFailHeader'));
            var bodyStyle = { fill: F84.GameColors.WHITE, fontSize: 40, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 350, align: 'center' };
            var text = game.add.text(0, 0, '', bodyStyle, popupGroup);
            text.lineSpacing = -5;
            text.setText(F84.Strings.get('RecapFailText'));
            var replay = game.add.button(0, 0, 'btnRestart', _this.replay, _this, null, null, null, null, popupGroup);
            F84.GameFactory.addButtonBounce(_this.game, replay);
            var home = game.add.button(0, 0, 'btnBack', _this.continue, _this, null, null, null, null, popupGroup);
            F84.GameFactory.addButtonBounce(_this.game, home);
            var space = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
            space.onDown.add(_this.replay, _this);
            _this._onResize = function () {
                overlay.width = F84.Game.Instance.width;
                overlay.height = F84.Game.Instance.height;
                var scaleFactor = Math.min(1, F84.Game.Instance.scale.scaleFactor.y);
                popupGroup.scale.set(scaleFactor, scaleFactor);
                popupGroup.alignIn(overlay, Phaser.CENTER, -75, 0);
                characters.alignIn(bg, Phaser.CENTER, -80, 30);
                headerText.alignIn(bg, Phaser.TOP_CENTER, 10, -10);
                text.alignIn(bg, Phaser.CENTER, 10, -20);
                replay.alignIn(bg, Phaser.BOTTOM_CENTER, 5, 30);
                home.alignIn(bg, Phaser.BOTTOM_CENTER, -135, 30);
            };
            _this.resize();
            _this.resize();
            _this.game.add.tween(overlay).from({ alpha: 0 }, 250, Phaser.Easing.Quadratic.Out, true);
            _this.game.add.tween(popupGroup).from({ y: 500, angle: -10 }, 350, Phaser.Easing.Back.Out, true);
            _this.game.sound.play('levelFail');
            return _this;
        }
        LevelFailPopup.prototype.resize = function () {
            this._onResize();
        };
        LevelFailPopup.prototype.replay = function () {
            this.game.sound.play('button');
            this.game.state.start('GameState', true, false, this.level);
        };
        LevelFailPopup.prototype.continue = function () {
            this.game.sound.play('button');
            this.game.state.start('LevelSelect');
        };
        return LevelFailPopup;
    }(F84.ResizableGroup));
    F84.LevelFailPopup = LevelFailPopup;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var LevelSelect = (function (_super) {
        __extends(LevelSelect, _super);
        function LevelSelect() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.numLevels = 20;
            return _this;
        }
        LevelSelect.prototype.create = function () {
            var _this = this;
            F84.Music.switchMusic(this.game, 'menuMusic');
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            var background = this.add.sprite(0, 0, 'loadBG');
            var header = this.add.sprite(0, 0, 'levelHeader');
            var style = { fill: F84.GameColors.WHITE, fontSize: 42, font: F84.Fonts.BoldFont };
            var headerText = this.add.text(0, 0, F84.Strings.get('LevelSelectHeader'), style);
            var backButton = this.add.button(0, 0, 'btnLevelBack', this.back, this);
            F84.GameFactory.addButtonBounce(this.game, backButton);
            var tom = this.add.sprite(0, 0, 'levelTom');
            var jerry = this.add.sprite(0, 0, 'levelJerry');
            var pages = this.pages = this.add.group();
            this.targetX = 0;
            var page;
            var pageNum = 0;
            for (var i = 0; i < this.numLevels; i++) {
                if (i % 8 == 0) {
                    if (page) {
                        page.align(4, 2, 165, 200, Phaser.TOP_CENTER);
                        pages.add(page);
                        page.alignIn(this.world.bounds, Phaser.CENTER, this.world.bounds.width * pageNum, 20);
                        pageNum++;
                    }
                    page = this.add.group();
                }
                this.createLevelButton(i, page);
            }
            page.align(4, 2, 165, 175, Phaser.TOP_CENTER);
            pages.add(page);
            page.alignIn(this.world.bounds, Phaser.CENTER, this.world.bounds.width * pageNum, 20);
            this.currentPage = 0;
            var leftArrow = this.leftArrow = this.add.button(0, 0, 'levelArrow', function () { return _this.switchPage(-1); });
            leftArrow.anchor.set(0.5);
            leftArrow.scale.x = -1;
            var rightArrow = this.rightArrow = this.add.button(0, 0, 'levelArrow', function () { return _this.switchPage(1); });
            rightArrow.anchor.set(0.5);
            this.dots = [];
            var dots = this.add.group();
            for (var i = 0; i < Math.ceil(this.numLevels / 8); i++) {
                var dot = this.add.sprite(0, 0, 'levelDotInactive', null, dots);
                this.dots.push(dot);
            }
            dots.align(-1, 1, 25, 25, Phaser.CENTER);
            this.dots[0].loadTexture('levelDotActive');
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                background.alignIn(_this.world.bounds, Phaser.CENTER);
                backButton.alignIn(_this.world.bounds, Phaser.TOP_LEFT, -15, -15);
                header.alignIn(_this.world.bounds, Phaser.TOP_CENTER, 0, -2);
                headerText.alignIn(header, Phaser.TOP_CENTER, 0, -12);
                leftArrow.alignIn(_this.world.bounds, Phaser.LEFT_CENTER, -100, 0);
                rightArrow.alignIn(_this.world.bounds, Phaser.RIGHT_CENTER, -30, 0);
                dots.alignIn(_this.world.bounds, Phaser.BOTTOM_CENTER, 0, -20);
                var scaleFactor = Math.min(1, F84.Game.Instance.scale.scaleFactor.y);
                tom.scale.set(scaleFactor, scaleFactor);
                jerry.scale.set(scaleFactor, scaleFactor);
                tom.alignIn(_this.world.bounds, Phaser.BOTTOM_LEFT, 4, 0);
                jerry.alignIn(_this.world.bounds, Phaser.BOTTOM_RIGHT, 40, 0);
            };
            this.resize();
            var saveData = F84.PlayerData.Instance.saveData;
            var pageIndex = Math.ceil(saveData.unlockedLevels / 8) - 1;
            this.setPage(pageIndex);
        };
        LevelSelect.prototype.createLevelButton = function (levelIndex, parent) {
            var _this = this;
            var group = this.add.group(parent);
            var saveData = F84.PlayerData.Instance.saveData;
            var unlocked = levelIndex < saveData.unlockedLevels;
            var complete = saveData.unlockedLevels > (levelIndex + 1);
            var stars = saveData.stars[levelIndex];
            var button;
            if (unlocked) {
                button = this.add.button(0, 0, 'levelButtonGreen', function () { return _this.play(levelIndex); });
            }
            else {
                button = this.add.button(0, 0, 'levelButtonLocked');
            }
            group.add(button);
            button.anchor.set(0.5);
            var odd = levelIndex % 2 == 0;
            button.scale.set(odd ? -1 : 1, 1);
            button.angle = odd ? -3 : 3;
            F84.GameFactory.addButtonBounce(this.game, button);
            var style = { fill: F84.GameColors.WHITE, fontSize: 52, font: F84.Fonts.BoldFont };
            var number = this.add.text(0, 0, (levelIndex + 1).toString(), style, group);
            number.alignIn(button, Phaser.CENTER, odd ? -2 : 2, -5);
            if (!unlocked) {
                var lock = this.add.sprite(0, 0, 'levelLock', null, group);
                lock.alignIn(button, Phaser.BOTTOM_CENTER, 10, -15);
            }
            if (unlocked && complete) {
                button.loadTexture('levelButtonRed');
                var starContainer = this.add.sprite(0, 0, 'levelStarContainer', null, group);
                starContainer.alignIn(button, Phaser.BOTTOM_CENTER, 0, -15);
                for (var i = 1; i <= stars; i++) {
                    var star = this.add.sprite(0, 0, 'levelStar' + i, null, group);
                    star.alignIn(starContainer, Phaser.CENTER);
                }
            }
            return group;
        };
        LevelSelect.prototype.switchPage = function (dir) {
            if (this.currentPage + dir < 0)
                return;
            if ((this.currentPage + dir + 1) * 8 > this.numLevels + 7)
                return;
            this.targetX -= dir * this.world.bounds.width;
            this.currentPage += dir;
            this.updateDots();
            this.updateButtons();
            this.game.sound.play('button');
        };
        LevelSelect.prototype.setPage = function (pageIndex) {
            this.pages.x -= this.world.bounds.width * pageIndex;
            this.targetX = this.pages.x;
            this.currentPage = pageIndex;
            this.updateDots();
            this.updateButtons();
        };
        LevelSelect.prototype.updateButtons = function () {
            this.leftArrow.visible = this.currentPage != 0;
            this.rightArrow.visible = this.currentPage != 2;
        };
        LevelSelect.prototype.updateDots = function () {
            for (var _i = 0, _a = this.dots; _i < _a.length; _i++) {
                var dot = _a[_i];
                dot.loadTexture('levelDotInactive');
            }
            this.dots[this.currentPage].loadTexture('levelDotActive');
        };
        LevelSelect.prototype.update = function () {
            this.pages.x -= (this.pages.x - this.targetX) * 10 * this.time.physicsElapsed;
        };
        LevelSelect.prototype.play = function (level) {
            this.game.sound.play('button');
            this.game.state.start('GameState', true, false, level);
        };
        LevelSelect.prototype.back = function () {
            this.game.sound.play('button');
            this.game.state.start('SplashScreen');
        };
        LevelSelect.prototype.resize = function () {
            this._onResize();
        };
        return LevelSelect;
    }(F84.ResizableState));
    F84.LevelSelect = LevelSelect;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var SaveData = (function () {
        function SaveData() {
            this.gameStarted = false;
            this.unlockedLevels = 1;
            this.stars = [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ];
        }
        return SaveData;
    }());
    F84.SaveData = SaveData;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var PlayerData = (function () {
        function PlayerData(gameId) {
            this._gameId = gameId;
            this.load();
            PlayerData.Instance = this;
        }
        Object.defineProperty(PlayerData.prototype, "localStorageKey", {
            get: function () {
                return this._gameId + "_SaveData";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerData.prototype, "saveData", {
            get: function () {
                return this._saveData;
            },
            enumerable: true,
            configurable: true
        });
        PlayerData.prototype.load = function () {
            var base64String = localStorage.getItem(this.localStorageKey);
            if (base64String != '' && base64String != null) {
                var jsonText = window.atob(base64String);
                this._saveData = new F84.SaveData();
                var saveData = (JSON.parse(jsonText));
                for (var key in saveData)
                    this._saveData[key] = saveData[key];
            }
            else {
                this._saveData = new F84.SaveData();
            }
        };
        PlayerData.prototype.save = function () {
            var jsonString = JSON.stringify(this._saveData);
            var base64String = window.btoa(jsonString);
            localStorage.setItem(this.localStorageKey, base64String);
        };
        PlayerData.prototype.reset = function () {
            localStorage.removeItem(this.localStorageKey);
            this._saveData = new F84.SaveData();
        };
        return PlayerData;
    }());
    F84.PlayerData = PlayerData;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Preloader.prototype, "load", {
            get: function () {
                return this.game.load;
            },
            enumerable: true,
            configurable: true
        });
        Preloader.prototype.preload = function () {
            var _this = this;
            _super.prototype.preload.call(this);
            var loadBG = this.add.sprite(0, 0, 'loadBG');
            var loadLogo = this.add.sprite(0, 0, 'splashLogo');
            var loadBar = this.add.sprite(0, 0, 'loadBar');
            var loadFill = this._loadFill = this.add.sprite(0, 0, 'loadFill');
            var loadMask = this._loadMask = this.add.graphics(0, 0);
            loadFill.mask = loadMask;
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(loadBG, _this.world.bounds);
                loadLogo.alignIn(_this.world.bounds, Phaser.CENTER, 0, -20);
                loadBar.alignIn(_this.world.bounds, Phaser.CENTER, 0, 155);
                loadFill.alignIn(loadBar, Phaser.CENTER, 0, 0);
            };
            this.resize();
            this.load.webfont('curse-casual', 'curse-casual');
            this.load.webfont('luckiestguy', 'luckiestguy');
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/', {});
            this.loadImages('./assets/images/ui/tnj-cny-ui-', {
                btnBack: 'btn-back',
                btnConfirm: 'btn-confirm',
                btnHelp: 'btn-help',
                btnQuit: 'btn-quit',
                btnRestart: 'btn-recap-restart',
                btnSoundOff: 'btn-sound-off',
                btnSoundOn: 'btn-sound-on',
                btnPlay: 'btn-splash-play',
                btnSplashRestart: 'btn-splash-restart',
                btnLevelBack: 'level-select-btn-back',
                btnPause: 'btn-pause',
                levelButtonGreen: 'level-select-green',
                levelButtonRed: 'level-select-red',
                levelButtonLocked: 'level-select-lock',
                levelHeader: 'level-select-header',
                levelJerry: 'level-select-img-jerry',
                levelTom: 'level-select-img-tom',
                levelLock: 'level-select-lock-icon',
                levelArrow: 'level-select-page-next',
                levelDotActive: 'level-select-pagination-active',
                levelDotInactive: 'level-select-pagination-inactive',
                levelStar1: 'level-star-1',
                levelStar2: 'level-star-2',
                levelStar3: 'level-star-3',
                levelStarContainer: 'level-star-container',
                popup: 'pop-up',
                recapPopup: 'pop-up-recap',
                recapFail: 'recap-fail',
                recapJerry: 'recap-image-jerry',
                splashBG: 'splash-bg',
                recapStar1: 'star-1',
                recapStar2: 'star-2',
                recapStar3: 'star-3',
                recapStarContainer: 'star-container',
                recapStarTrack: 'level-star-track',
                recapStarMarker1: 'level-star-marker-1',
                recapStarMarker2: 'level-star-marker-2',
                recapStarMarker3: 'level-star-marker-3',
                recapStarJerryRun: 'level-star-jerry-run',
                storyImage1: 'story-image-1',
                storyImage2: 'story-image-2',
                storyImage3: 'story-image-3',
                storyPopup: 'story-popup',
                hudCheese: 'hud-cheese',
                gameCompleteImage: 'game-complete-image'
            });
            this.loadImages('./assets/images/game/tnj-cny-game-', {
                bg1: 'bg-1',
                bg2: 'bg-2',
                bg3: 'bg-3',
                bg4: 'bg-4',
                bg5: 'bg-5',
                dragonArm: 'dragon-arm',
                dragonCorner: 'dragon-corner',
                dragonHead: 'dragon-head',
                dragonHorizontal: 'dragon-horizontal',
                dragonVertical: 'dragon-straight',
                dragonTail: 'dragon-tail',
                objCheese: 'cheese',
                objStatic1: 'obs-static-1',
                objStatic2: 'obs-static-2',
                objFirecracker: 'obs-tom-firecracker',
                objFirework: 'obs-tom-firework',
                objMouseTrap: 'obs-tom-mousetrap',
                objWeak1: 'obs-weak-flower-start',
                objWeak1Broken: 'obs-weak-flower-resolve',
                objWeak2: 'obs-weak-lilly-start',
                objWeak2Broken: 'obs-weak-lilly-resolve',
                firecrackerWarningSquare: 'warning-firecracker',
                firecrackerDangerSquare: 'hit-firecracker',
                edgeCover: 'edge-cover',
                edgeCoverHorizontal: 'edge-cover-horizontal'
            });
            this.loadImages('./assets/images/tutorial/tnj-cny-tut-image-', {
                tutAvoidFalseFloor: 'avoid-false-floor',
                tutAvoidFirecracker: 'avoid-firecracker',
                tutAvoidFirework: 'avoid-firework',
                tutAvoidStatic: 'avoid-static',
                tutAvoidTrap: 'avoid-trap',
                tutAvoidWall: 'avoid-wall',
                tutGoal: 'goal',
                tutMove: 'move-web',
                tutMoveMobile: 'move-mob'
            });
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/', {});
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/images/', {});
            this.load.json('levels', './assets/json/levels.json');
            this.load.json('tutorials', './assets/json/tutorials.json');
            this.loadAudio('./assets/audio/', {
                menuMusic: 'music-shenyang',
                gameplayMusic: 'music-ishikari-lore',
                button: 'sfx-button',
                eatCheese1: 'sfx-eat-cheese-1',
                eatCheese2: 'sfx-eat-cheese-2',
                eatCheese3: 'sfx-eat-cheese-3',
                lilypad1: 'sfx-lilypad-1',
                lilypad2: 'sfx-lilypad-2',
                lilypad3: 'sfx-lilypad-3',
                lilypad4: 'sfx-lilypad-4',
                waterSplash: 'sfx-water-splash',
                fail: 'sfx-fail',
                mousetrap: 'sfx-mousetrap',
                firecrackerLoop: 'sfx-firecracker-loop',
                firecrackerExplode: 'sfx-firecracker-explode',
                fireworkLaunch: 'sfx-firework-launch',
                fireworkLight: 'sfx-firework-light',
                levelFail: 'sfx-level-fail',
                star1: 'sfx-star-1',
                star2: 'sfx-star-2',
                star3: 'sfx-star-3'
            });
            this.loadAnimation('fireworkTrail', './assets/images/game/', 'firework-trail', 'firework-trail');
            this.loadAnimation('fireworkWarning', './assets/images/game/', 'firework-warning', 'firework-warning');
            this.loadAnimation('fireworkExplosion', './assets/images/game/', 'firework-explosion', 'firework-explosion');
            this.loadAnimation('firecrackerExplosion', './assets/images/game/', 'firecracker-explosion', 'firecracker-explosion');
        };
        Preloader.prototype.loadImages = function (prefix, map, suffix) {
            if (suffix === void 0) { suffix = '.png'; }
            for (var name_1 in map) {
                this.load.image(name_1, prefix + map[name_1] + suffix);
            }
        };
        Preloader.prototype.loadImagesVerbatim = function (prefix, names, suffix) {
            if (suffix === void 0) { suffix = '.png'; }
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name_2 = names_1[_i];
                this.load.image(name_2, prefix + name_2 + suffix);
            }
        };
        Preloader.prototype.loadAnimation = function (name, path, img, json) {
            this.load.atlasJSONHash(name, path + img + '.png', path + json + '.json');
        };
        Preloader.prototype.loadAudio = function (prefix, map, suffix) {
            if (suffix === void 0) { suffix = '.ogg'; }
            if (this._audioKeys == null)
                this._audioKeys = [];
            for (var name_3 in map) {
                this.load.audio(name_3, [prefix + map[name_3] + '.mp3']);
                this._audioKeys.push(name_3);
            }
        };
        Preloader.prototype.loadUpdate = function (game) {
            _super.prototype.loadUpdate.call(this, game);
            var totalFiles = this.load.totalQueuedFiles() + this.load.totalLoadedFiles();
            var filesLoaded = this.load.totalLoadedFiles();
            var percentComplete = filesLoaded / totalFiles;
            this._loadMask.beginFill(0x00000, 1);
            this._loadMask.drawRect(this._loadFill.x, this._loadFill.y, this._loadFill.width * percentComplete, this._loadFill.height);
            this._loadMask.endFill();
            this._loadFill.mask = this._loadMask;
        };
        Preloader.prototype.resize = function () {
            _super.prototype.resize.call(this);
            this._onResize();
        };
        Preloader.prototype.create = function () {
            this.game.state.start('SplashScreen');
        };
        return Preloader;
    }(F84.ResizableState));
    F84.Preloader = Preloader;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var RotateDeviceGroup = (function (_super) {
        __extends(RotateDeviceGroup, _super);
        function RotateDeviceGroup(game) {
            var _this = _super.call(this, game, game.stage.stage) || this;
            _this.game.input.enabled = false;
            var graphics = _this.game.add.graphics(0, 0, _this);
            graphics.beginFill(0x000000, 1);
            graphics.drawRect(0, 0, F84.Game.Instance.width, F84.Game.Instance.height);
            graphics.endFill();
            var rotateImage = _this.game.add.image(0, 0, 'rotateDevice', null, _this);
            var scale = F84.Game.Instance.width / rotateImage.width;
            rotateImage.width *= scale;
            rotateImage.height *= scale;
            rotateImage.alignIn(_this.game.world.bounds, Phaser.CENTER);
            _this.game.scale.onSizeChange.add(function () {
                if (F84.Game.Instance.width > F84.Game.Instance.height) {
                    _this.destroy(true, false);
                }
            }, _this);
            return _this;
        }
        RotateDeviceGroup.prototype.update = function () {
            _super.prototype.update.call(this);
            this.game.world.bringToTop(this);
            if (F84.Game.Instance.width > F84.Game.Instance.height) {
                this.destroy(true, false);
            }
        };
        RotateDeviceGroup.prototype.destroy = function (destroyChildren, soft) {
            if (this.game) {
                this.game.input.enabled = true;
                this.game.scale.onSizeChange.removeAll(this);
            }
            _super.prototype.destroy.call(this, destroyChildren, soft);
        };
        return RotateDeviceGroup;
    }(Phaser.Group));
    F84.RotateDeviceGroup = RotateDeviceGroup;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var SplashScreen = (function (_super) {
        __extends(SplashScreen, _super);
        function SplashScreen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SplashScreen.prototype.create = function () {
            var _this = this;
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            F84.Music.switchMusic(this.game, 'menuMusic');
            var background = this.add.sprite(0, 0, 'splashBG');
            var playButton = this.add.button(0, 0, 'btnPlay', this.play, this);
            playButton.anchor.set(0.5, 0.5);
            F84.GameFactory.addButtonBounce(this.game, playButton);
            var resetButton;
            if (F84.PlayerData.Instance.saveData.gameStarted) {
                resetButton = this.add.button(-170, -20, 'btnSplashRestart', this.reset, this);
                F84.GameFactory.addButtonBounce(this.game, resetButton);
            }
            var splashLogo = this.add.image(0, 0, 'splashLogo', null);
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                background.alignIn(_this.world.bounds, Phaser.CENTER);
                var width = Math.min(_this.world.bounds.width, 1024);
                var bounds = new Phaser.Rectangle(_this.world.bounds.centerX - width / 2, _this.world.bounds.top, width, 576);
                splashLogo.alignIn(_this.world.bounds, Phaser.LEFT_CENTER, -25, -100);
                playButton.alignIn(bounds, Phaser.BOTTOM_RIGHT, -18, -18);
                if (resetButton)
                    resetButton.alignIn(bounds, Phaser.BOTTOM_LEFT, -22, -16);
            };
            this.resize();
        };
        SplashScreen.prototype.resize = function () {
            this._onResize();
        };
        SplashScreen.prototype.play = function () {
            this.game.sound.play('button');
            if (!F84.PlayerData.Instance.saveData.gameStarted) {
                this.game.state.start('StoryIntro');
                F84.PlayerData.Instance.saveData.gameStarted = true;
                F84.PlayerData.Instance.save();
            }
            else {
                this.game.state.start('LevelSelect');
            }
        };
        SplashScreen.prototype.reset = function () {
            var _this = this;
            this.game.sound.play('button');
            var config = {
                headerText: F84.Strings.get('ResetGameHeader'),
                messageText: F84.Strings.get('ResetGameMessage'),
                yesFunction: function () {
                    F84.PlayerData.Instance.reset();
                    _this.game.state.start('SplashScreen');
                },
                yesContext: this
            };
            var yesNoDialogueGroup = new F84.YesNoDialogueGroup(this.game, config);
            this.add.existing(yesNoDialogueGroup);
        };
        return SplashScreen;
    }(F84.ResizableState));
    F84.SplashScreen = SplashScreen;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var StoryIntro = (function (_super) {
        __extends(StoryIntro, _super);
        function StoryIntro() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.storyBeats = 2;
            return _this;
        }
        StoryIntro.prototype.create = function () {
            var _this = this;
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            this.index = 0;
            var background = this.add.sprite(0, 0, 'loadBG');
            var boxGroup = this.add.group();
            var box = this.add.sprite(0, 0, 'storyPopup', null, boxGroup);
            var image = this.image = this.add.sprite(0, 0, 'storyImage1', null, boxGroup);
            var playButton = this.add.button(0, 0, 'btnPlay', this.next, this, null, null, null, null, boxGroup);
            F84.GameFactory.addButtonBounce(this.game, playButton);
            var headerStyle = { fill: 'white', fontSize: 50, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 370, align: 'center', boundsAlignH: 'center' };
            var headerText = this.add.text(0, 0, '', headerStyle, boxGroup);
            headerText.setText(F84.Strings.get('StoryHeader'));
            var style = { fill: 'white', fontSize: 36, font: F84.Fonts.DefaultFont, wordWrap: true, wordWrapWidth: 370, align: 'center', boundsAlignH: 'center' };
            var text = this.textfield = this.add.text(0, 0, '', style, boxGroup);
            text.setText(F84.Strings.get('StoryText1'));
            if (F84.Game.Instance.locale == "ja-ja" || F84.Game.Instance.locale == "zh-cn")
                text.useAdvancedWrap = true;
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                background.alignIn(_this.world.bounds, Phaser.CENTER);
                var scaleFactor = Math.min(1, F84.Game.Instance.scale.scaleFactor.y);
                boxGroup.scale.set(scaleFactor, scaleFactor);
                image.alignTo(box, Phaser.LEFT_CENTER, -100, 0);
                boxGroup.alignIn(_this.world.bounds, Phaser.CENTER, 0, 0);
                headerText.alignIn(box, Phaser.TOP_CENTER, 5, -10);
                _this.textfield.alignIn(box, Phaser.CENTER, 0, 0);
                playButton.alignIn(box, Phaser.BOTTOM_CENTER, 0, 30);
            };
            this.resize();
            this.resize();
            this.runTweens();
        };
        StoryIntro.prototype.resize = function () {
            this._onResize();
        };
        StoryIntro.prototype.runTweens = function () {
            this.tweens.removeAll();
            this.resize();
            this.image.alpha = 1;
            this.image.angle = 0;
            this.textfield.alpha = 1;
            this.add.tween(this.image).from({ alpha: 0, x: -300 }, 250, Phaser.Easing.Quadratic.Out, true);
            this.add.tween(this.textfield).from({ alpha: 0 }, 250, Phaser.Easing.Quadratic.Out, true);
        };
        StoryIntro.prototype.next = function () {
            this.game.sound.play('button');
            this.index++;
            if (this.index <= this.storyBeats) {
                this.image.loadTexture('storyImage' + (this.index + 1));
                this.runTweens();
                this.textfield.setText(F84.Strings.get('StoryText' + (this.index + 1)));
                this.resize();
            }
            else {
                this.game.state.start('LevelSelect');
            }
        };
        return StoryIntro;
    }(F84.ResizableState));
    F84.StoryIntro = StoryIntro;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Strings = (function () {
        function Strings() {
        }
        Strings.get = function (id) {
            if (this._json == null) {
                this._json = F84.Game.Instance.cache.getJSON("strings");
            }
            if (this._json[id] === undefined) {
                return 'MISSING';
            }
            return this._json[id][F84.Game.Instance.locale];
        };
        Strings._json = null;
        return Strings;
    }());
    F84.Strings = Strings;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var YesNoDialogueGroup = (function (_super) {
        __extends(YesNoDialogueGroup, _super);
        function YesNoDialogueGroup(game, config) {
            var _this = _super.call(this, game) || this;
            _this._onYes = config.yesFunction.bind(config.yesContext);
            if (config.noFunction)
                _this._onNo = config.noFunction.bind(config.noContext);
            _this._overlay = _this.game.add.graphics(0, 0, _this);
            _this._overlay.inputEnabled = true;
            _this._overlay.beginFill(0x000000, 0.8);
            _this._overlay.drawRect(0, 0, F84.Game.Instance.width, F84.Game.Instance.height);
            _this._overlay.endFill();
            _this._popupGroup = _this.game.add.group(_this);
            _this._background = _this.game.add.image(0, 0, 'popup', null, _this._popupGroup);
            _this._header = _this.game.add.text(0, 0, '', { fill: F84.GameColors.WHITE, fontSize: 48, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 450, align: "center" }, _this._popupGroup);
            _this._header.setText(config.headerText);
            _this._message = _this.game.add.text(0, 0, config.messageText, { fill: F84.GameColors.WHITE, fontSize: 32, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 500, align: "center" }, _this._popupGroup);
            _this._yesButton = _this.game.add.button(0, 0, 'btnConfirm', _this.yesButtonPressed, _this, null, null, null, null, _this._popupGroup);
            F84.GameFactory.addButtonBounce(_this.game, _this._yesButton);
            _this._noButton = _this.game.add.button(0, 0, 'btnQuit', _this.noButtonPressed, _this, null, null, null, null, _this._popupGroup);
            F84.GameFactory.addButtonBounce(_this.game, _this._noButton);
            _this.resize();
            _this.fixedToCamera = config.fixedToCamera;
            var animatedBuild = function () {
                _this.resize();
                _this.game.add.tween(_this._overlay).from({ alpha: 0 }, 150, Phaser.Easing.Quadratic.Out, true);
                _this.game.add.tween(_this._popupGroup).from({ y: 650 }, 275, Phaser.Easing.Back.Out, true, 50).onComplete.add(function () {
                    _this.resize();
                });
            };
            animatedBuild();
            return _this;
        }
        YesNoDialogueGroup.prototype.resize = function () {
            var bounds = F84.Game.Instance.getBounds();
            F84.SpriteUtils.aspectFill(this._overlay, bounds);
            this._popupGroup.alignIn(bounds, Phaser.CENTER, 0, 0);
            this._header.alignIn(this._background, Phaser.TOP_CENTER, 12, -10);
            this._message.alignIn(this._background, Phaser.CENTER, 12, -45);
            this._yesButton.alignIn(this._background, Phaser.CENTER, 75, 100);
            this._noButton.alignIn(this._background, Phaser.CENTER, -75, 100);
        };
        YesNoDialogueGroup.prototype.noButtonPressed = function () {
            this.game.sound.play('button');
            if (this._onNo) {
                this._onNo();
            }
            this.destroy();
        };
        YesNoDialogueGroup.prototype.yesButtonPressed = function () {
            this.game.sound.play('button');
            if (this._onYes) {
                this._onYes();
            }
        };
        return YesNoDialogueGroup;
    }(F84.ResizableGroup));
    F84.YesNoDialogueGroup = YesNoDialogueGroup;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Blocker = (function (_super) {
        __extends(Blocker, _super);
        function Blocker(game, grid, gridX, gridY) {
            var _this = _super.call(this, game, 0, 0, 'objMouseTrap') || this;
            _this.name = 'blocker';
            _this.game = game;
            _this.grid = grid;
            _this.grid.add(gridX, gridY, _this);
            _this.anchor.set(0.5, 1);
            var bounds = _this.grid.getCellBounds(_this.gridX, _this.gridY);
            _this.alignIn(bounds, Phaser.BOTTOM_CENTER);
            var tween = _this.game.add.tween(_this.scale);
            tween.from({ x: 0, y: 0 }, 250, Phaser.Easing.Back.Out, true);
            return _this;
        }
        return Blocker;
    }(Phaser.Sprite));
    F84.Blocker = Blocker;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Bomb = (function (_super) {
        __extends(Bomb, _super);
        function Bomb(game, state, grid, gridX, gridY) {
            var _this = _super.call(this, game, 0, 0, 'objFirecracker') || this;
            _this.name = 'bomb';
            _this.state = state;
            _this.game = game;
            _this.grid = grid;
            _this.grid.add(gridX, gridY, _this);
            _this.anchor.set(0.5, 1);
            var bounds = _this.grid.getCellBounds(_this.gridX, _this.gridY);
            _this.alignIn(bounds, Phaser.BOTTOM_CENTER);
            var tween = _this.game.add.tween(_this.scale);
            tween.from({ x: _this.scale.x / 2, y: _this.scale.y / 2 }, 500, Phaser.Easing.Back.Out, true);
            _this.startTime = 4;
            _this.timer = _this.startTime;
            _this.startPosition = _this.position.clone();
            _this.loopSfx = _this.game.sound.play('firecrackerLoop', 0.5, true);
            _this.warnings = [];
            var dangerCells = grid.getCells(gridX, gridY, 1);
            dangerCells.forEach(function (cell) {
                var warning = new F84.WarningIndicator(_this.game, state, grid, cell.x, cell.y);
                _this.warnings.push(warning);
            });
            return _this;
        }
        Bomb.prototype.update = function () {
            var _this = this;
            this.timer -= this.state.deltaTime;
            if (this.timer <= 0) {
                var explodedSnake = false;
                for (var x = this.gridX - 1; x <= this.gridX + 1; x++) {
                    for (var y = this.gridY - 1; y <= this.gridY + 1; y++) {
                        var explosion = new F84.Explosion(this.game, this.state, this.grid, x, y);
                        this.game.add.existing(explosion);
                        var occupants = this.grid.getOccupants(x, y);
                        var snakeSegment = occupants.find(function (o) { return o instanceof F84.SnakeSegment; });
                        if (snakeSegment) {
                            var validSnakeSegment = snakeSegment.SegmentType == F84.SnakeSegmentType.HEAD;
                            if (!explodedSnake && validSnakeSegment) {
                                explodedSnake = true;
                                snakeSegment.snake.takeDamage(this);
                            }
                        }
                    }
                }
                this.game.sound.play('firecrackerExplode');
                this.loopSfx.stop();
                this.warnings.forEach(function (warning) {
                    var dangerIndicator = new F84.DangerIndicator(_this.game, _this.state, _this.grid, warning.gridX, warning.gridY);
                    warning.destroy();
                });
                this.grid.removeItem(this);
            }
            else {
                var shake = 2 * ((this.startTime - this.timer) / this.startTime);
                this.position.set(this.startPosition.x + this.game.rnd.between(-shake, shake), this.startPosition.y + this.game.rnd.between(-shake, shake));
            }
            this.loopSfx.volume = this.state.isPaused ? 0 : 0.25;
        };
        return Bomb;
    }(Phaser.Sprite));
    F84.Bomb = Bomb;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var BreakableFloor = (function (_super) {
        __extends(BreakableFloor, _super);
        function BreakableFloor(game, grid, gridX, gridY, image) {
            var _this = _super.call(this, game, 0, 0, image) || this;
            _this.name = 'breakableFloor';
            _this.game = game;
            _this.grid = grid;
            _this.grid.add(gridX, gridY, _this);
            _this.imgKey = image;
            _this.anchor.set(0.5, 1);
            var bounds = _this.grid.getCellBounds(_this.gridX, _this.gridY);
            _this.alignIn(bounds, Phaser.BOTTOM_CENTER);
            _this.broken = false;
            return _this;
        }
        BreakableFloor.prototype.update = function () {
            if (this.grid.getOccupants(this.gridX, this.gridY).find(function (o) { return o.name == 'snake'; }) && !this.broken) {
                this.broken = true;
                this.loadTexture(this.imgKey + 'Broken');
                var sound = this.game.rnd.pick(['lilypad1', 'lilypad2', 'lilypad3', 'lilypad4']);
                this.game.sound.play(sound);
            }
        };
        return BreakableFloor;
    }(Phaser.Sprite));
    F84.BreakableFloor = BreakableFloor;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var DangerIndicator = (function (_super) {
        __extends(DangerIndicator, _super);
        function DangerIndicator(game, state, grid, gridX, gridY) {
            var _this = _super.call(this, game, 0, 0, 'firecrackerDangerSquare') || this;
            _this.name = 'danger';
            _this.state = state;
            _this.game = game;
            _this.grid = grid;
            _this.gridX = gridX;
            _this.gridY = gridY;
            state.gameBackLayer.addChild(_this);
            _this.anchor.set(0.5, 0.5);
            var bounds = _this.grid.getCellBounds(_this.gridX, _this.gridY);
            _this.alignIn(bounds, Phaser.CENTER);
            var startingAlpha = 1;
            var endingAlpha = 0.15;
            if ((gridX + gridY) % 2 == 0) {
                startingAlpha = 0.15;
                endingAlpha = 1;
            }
            _this.alpha = startingAlpha;
            _this.game.add.tween(_this).to({ alpha: endingAlpha }, 75, Phaser.Easing.Linear.None, true, 0, 3, true).onComplete.add(function () {
                _this.destroy();
            }, _this);
            return _this;
        }
        return DangerIndicator;
    }(Phaser.Sprite));
    F84.DangerIndicator = DangerIndicator;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        function Explosion(game, state, grid, gridX, gridY, explosionName, framerate) {
            if (explosionName === void 0) { explosionName = 'firecrackerExplosion'; }
            if (framerate === void 0) { framerate = 24; }
            var _this = _super.call(this, game, 0, 0, explosionName) || this;
            _this.animations.add(explosionName);
            _this.animations.play(explosionName, framerate, false, true);
            _this.state = state;
            _this.game = game;
            _this.grid = grid;
            _this.gridX = gridX;
            _this.gridY = gridY;
            _this.anchor.set(0.5, 0.5);
            _this.width = grid.tileWidth;
            _this.height = grid.tileHeight;
            var bounds = _this.grid.getCellBounds(_this.gridX, _this.gridY);
            _this.alignIn(bounds, Phaser.CENTER);
            return _this;
        }
        return Explosion;
    }(Phaser.Sprite));
    F84.Explosion = Explosion;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Firework = (function (_super) {
        __extends(Firework, _super);
        function Firework(game, state, grid, gridY) {
            var _this = _super.call(this, game, 0, 0, 'objFirework') || this;
            _this.name = 'firework';
            _this.state = state;
            _this.game = game;
            _this.grid = grid;
            _this.gridX = _this.game.rnd.pick([-1, _this.grid.width]);
            _this.gridY = gridY;
            _this.dir = (_this.gridX < 0) ? 1 : -1;
            _this.anchor.set(0.5, 1);
            _this.scale.x = _this.dir;
            var bounds = _this.grid.getCellBounds(_this.gridX, _this.gridY);
            _this.alignIn(bounds, Phaser.BOTTOM_CENTER);
            var tween = _this.game.add.tween(_this.scale);
            tween.from({ x: _this.scale.x / 2, y: _this.scale.y / 2 }, 500, Phaser.Easing.Back.Out, true);
            _this.timer = 3;
            _this.moving = false;
            _this.vx = 0;
            _this.warning = _this.addWarning();
            _this.loopSfx = _this.game.sound.play('firecrackerLoop', 0.15, true);
            return _this;
        }
        Firework.prototype.update = function () {
            var _this = this;
            if (this.timer > 0) {
                this.timer -= this.state.deltaTime;
                if (this.timer <= 0) {
                    this.game.sound.play('fireworkLight');
                    this.game.sound.play('fireworkLaunch');
                    this.moving = true;
                    var scale = this.scale.x * 0.35;
                    this.game.add.tween(this.scale).to({ x: scale, y: 1.2 }, 250, Phaser.Easing.Quadratic.InOut, true, 0, 0, true).onComplete.add(function () {
                        _this.loopSfx.stop();
                        _this.warning.destroy();
                        _this.addTrail();
                    }, this);
                }
            }
            if (this.moving) {
                this.vx += this.dir * 300 * this.state.deltaTime;
                var y = this.grid.getCellBounds(0, this.gridY).centerY;
                var queryRect = new Phaser.Rectangle(this.x - 2, y - 2, 4, 4);
                var cells = this.grid.getOverlapCells(queryRect);
                for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
                    var cell = cells_1[_i];
                    var occupants = this.grid.getOccupants(cell.x, this.gridY);
                    var snakeSegment = occupants.find(function (o) { return o instanceof F84.SnakeSegment; });
                    if (snakeSegment != null) {
                        if (snakeSegment.SegmentType == F84.SnakeSegmentType.HEAD) {
                            var explosion = new F84.Explosion(this.game, this.state, this.grid, snakeSegment.gridX, snakeSegment.gridY, 'fireworkExplosion', 60);
                            explosion.scale.set(2.0, 2.0);
                            this.game.add.existing(explosion);
                            snakeSegment.snake.takeDamage(this);
                            this.destroy();
                            return;
                        }
                    }
                }
            }
            this.x += this.vx * this.state.deltaTime;
            var bounds = this.game.world.bounds;
            if (this.left + 100 < bounds.left)
                this.destroy();
            if (this.right - 100 > bounds.right)
                this.destroy();
            this.loopSfx.volume = this.state.isPaused ? 0 : 0.15;
        };
        Firework.prototype.addTrail = function () {
            var trail = this.game.add.sprite(0, 0, 'fireworkTrail', 0);
            trail.animations.add('trail');
            trail.animations.play('trail', 24, true);
            trail.scale.set(-1, 1);
            trail.x = 10;
            trail.y = -56;
            this.addChild(trail);
        };
        Firework.prototype.addWarning = function () {
            var warning = this.game.add.sprite(0, 0, 'fireworkWarning', 0);
            warning.animations.add('warning');
            warning.animations.play('warning', 24, true);
            warning.x = 25;
            warning.y = -58;
            this.addChild(warning);
            return warning;
        };
        Firework.prototype.destroy = function (destroyChildren) {
            this.loopSfx.stop();
            _super.prototype.destroy.call(this, destroyChildren);
        };
        return Firework;
    }(Phaser.Sprite));
    F84.Firework = Firework;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var GameFactory = (function () {
        function GameFactory() {
        }
        GameFactory.addButtonBounce = function (game, button) {
            var w = button.width;
            var h = button.height;
            if (!button.anchor.equals(new Phaser.Point(0.5, 0.5))) {
                button.x += (0.5 - button.anchor.x) * w;
                button.y += (0.5 - button.anchor.y) * h;
                button.anchor.set(0.5);
            }
            var tween = game.add.tween(button);
            tween.to({ width: w * 0.9, height: h * 0.9 }, 50, Phaser.Easing.Quadratic.Out);
            tween.yoyo(true);
            button.onInputDown.add(function () { tween.start(); });
        };
        return GameFactory;
    }());
    F84.GameFactory = GameFactory;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var GameState = (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.gridWidth = 14;
            _this.gridHeight = 8;
            _this.tileWidth = 63;
            _this.tileHeight = 63;
            _this.cheeseTime = [3, 8];
            _this.trapTime = [3, 8];
            _this.blockerChance = 1;
            _this.bombChance = 1;
            _this.fireworkChance = 1;
            return _this;
        }
        Object.defineProperty(GameState.prototype, "deltaTime", {
            get: function () {
                if (this.isPaused)
                    return 0;
                return this.game.time.physicsElapsed;
            },
            enumerable: true,
            configurable: true
        });
        GameState.prototype.init = function (level) {
            this.level = level;
        };
        GameState.prototype.create = function () {
            var _this = this;
            F84.Music.switchMusic(this.game, 'gameplayMusic');
            this.isPaused = false;
            var levels = this.cache.getJSON('levels');
            var level = this.levelData = levels[this.level];
            this.scaleLayer = this.add.group();
            this.backgroundLayer = this.add.group(this.scaleLayer);
            this.gameBackLayer = this.add.group(this.scaleLayer);
            this.gameLayer = this.add.group(this.scaleLayer);
            this.foregroundLayer = this.add.group(this.scaleLayer);
            var background = this.backgroundLayer.create(0, 0, 'bg' + level.background);
            background.anchor = new Phaser.Point(0.5, 0.5);
            background.alignIn(this.world.bounds, Phaser.CENTER);
            if (!this.game.device.desktop) {
                var rightEdge = this.game.add.image(0, 0, 'edgeCover', null, this.backgroundLayer);
                rightEdge.scale.set(-1, 1);
                rightEdge.alignTo(background, Phaser.LEFT_CENTER, -rightEdge.width - 47);
                var leftEdge = this.game.add.image(0, 0, 'edgeCover', null, this.backgroundLayer);
                leftEdge.alignTo(background, Phaser.RIGHT_CENTER, -47);
                var topEdge = this.game.add.image(0, 0, 'edgeCoverHorizontal', null, this.backgroundLayer);
                topEdge.alignTo(background, Phaser.TOP_CENTER, 0, -20);
                var bottomEdge = this.game.add.image(0, 0, 'edgeCoverHorizontal', null, this.backgroundLayer);
                bottomEdge.scale.set(1, -1);
                bottomEdge.alignTo(background, Phaser.BOTTOM_CENTER, 0, -bottomEdge.height - 20);
            }
            var keys = this.input.keyboard.createCursorKeys();
            keys.up.onDown.add(function () { return _this.move({ x: 0, y: -1 }); });
            keys.down.onDown.add(function () { return _this.move({ x: 0, y: 1 }); });
            keys.left.onDown.add(function () { return _this.move({ x: -1, y: 0 }); });
            keys.right.onDown.add(function () { return _this.move({ x: 1, y: 0 }); });
            if (!this.game.device.desktop) {
                this.input.onDown.add(this.onPointerDown, this);
                this.input.onUp.add(this.onPointerUp, this);
                this.input.addMoveCallback(this.onPointerMove, this);
            }
            this.cheeseSpawns = [];
            this.totalCheese = 0;
            this.collectedCheese = 0;
            this.cheeseTimer = 0;
            this.blockerSpawns = [];
            this.trapTime[0] = level.minTrapTime;
            this.trapTime[1] = level.maxTrapTime;
            this.trapTimer = this.rnd.between(this.trapTime[0], this.trapTime[1]);
            this.blockerChance = level.spawnBlockers ? 1 : 0;
            this.fireworkChance = level.spawnFireworks ? 1 : 0;
            this.bombChance = level.spawnBombs ? 1 : 0;
            var gridX = this.world.bounds.centerX - (this.gridWidth / 2) * this.tileWidth;
            var gridY = (this.world.bounds.centerY - (this.gridHeight / 2) * this.tileHeight) + 30;
            this.grid = new F84.SnakeGrid(gridX, gridY - 10, this.gridWidth, this.gridHeight, this.tileWidth, this.tileHeight);
            this.spawnLevel(level.layout);
            this.spawnSnake();
            this.snake.moving = true;
            this.scoreGroup = this.add.group();
            var scoreBackground = this.add.image(0, 0, 'hudCheese', null, this.scoreGroup);
            scoreBackground.anchor.set(0.5, 0.5);
            var style = { fill: F84.GameColors.WHITE, fontSize: 32, font: F84.Fonts.BoldFont };
            this.score = this.add.text(50, 0, this.collectedCheese + '/' + this.totalCheese, style, this.scoreGroup);
            this.score.anchor.set(0.5, 0.5);
            var pauseButton = this.add.button(0, 0, 'btnPause', this.pause, this);
            this.playing = true;
            this.steps = 0;
            var key = this.input.keyboard.addKey(Phaser.KeyCode.P);
            key.onDown.add(function () { return _this.win(); });
            this.spawnTutorials();
            this._onResize = function () {
                var scaleFactor = Math.min(1, F84.Game.Instance.scale.scaleFactor.y);
                _this.scaleLayer.scale.set(scaleFactor, scaleFactor);
                _this.scaleLayer.alignIn(_this.world.bounds, Phaser.CENTER);
                pauseButton.alignIn(_this.world.bounds, Phaser.TOP_RIGHT, -10, -10);
                _this.scoreGroup.alignIn(_this.world.bounds, Phaser.TOP_CENTER, -10, -5);
            };
            this.resize();
        };
        GameState.prototype.resize = function () {
            this._onResize();
        };
        GameState.prototype.onPointerDown = function (pointer, event) {
            this.isPointerDown = true;
            this.pointerDown = pointer.position.clone();
        };
        GameState.prototype.onPointerMove = function (pointer, x, y, clickEvent, domEvent) {
            if (clickEvent || !this.isPointerDown)
                return;
            var distance = new Phaser.Point();
            distance.x = pointer.position.x - this.pointerDown.x;
            distance.y = pointer.position.y - this.pointerDown.y;
            var minDistance = 15.0;
            if (distance.getMagnitude() < minDistance)
                return;
            if (Math.abs(distance.x) > Math.abs(distance.y)) {
                if (distance.x > 0) {
                    this.move({ x: 1, y: 0 });
                    this.pointerDown = pointer.position.clone();
                }
                else {
                    this.move({ x: -1, y: 0 });
                    this.pointerDown = pointer.position.clone();
                }
            }
            else {
                if (distance.y > 0) {
                    this.move({ x: 0, y: 1 });
                    this.pointerDown = pointer.position.clone();
                }
                else {
                    this.move({ x: 0, y: -1 });
                    this.pointerDown = pointer.position.clone();
                }
            }
        };
        GameState.prototype.onPointerUp = function (pointer, event) {
            this.isPointerDown = false;
        };
        GameState.prototype.spawnTutorials = function () {
            var _this = this;
            var tutorials = this.cache.getJSON('tutorials');
            var activeTutorials = [];
            for (var i = 0; i < tutorials.length; i++) {
                var tutorial = tutorials[i];
                if (tutorial.level - 1 == this.level) {
                    activeTutorials.push(tutorial);
                }
            }
            if (activeTutorials.length > 0) {
                this.playing = false;
                this.isPaused = true;
                var popup = new F84.TutorialPrompt(this.game, activeTutorials, null, null, function () {
                    _this.playing = true;
                    _this.isPaused = false;
                }, this);
                this.add.existing(popup);
            }
        };
        GameState.prototype.tailDebug = function () {
            var i = 0;
            for (var ang = 0; ang < Math.PI * 2; ang += Math.PI / 2) {
                for (var dir = -1; dir <= 1; dir += 2) {
                    var mesh = F84.SnakeMesh.curve(this.game, this, 100 + 100 * i, 300, ang, dir, 10, this.tileWidth);
                    this.add.existing(mesh);
                    for (var j = 0; j < mesh.points.length; j++) {
                        var pt = mesh.points[j];
                        var sq = this.add.sprite(pt.x - 1, pt.y - 1, 'whiteSquare');
                        sq.width = 2;
                        sq.height = 2;
                        if (j == 0)
                            sq.tint = 0x0000FF;
                    }
                    i++;
                }
            }
        };
        GameState.prototype.spawnSnake = function () {
            var _this = this;
            this.snake = new F84.Snake(this.game, this, this.grid, 4, 3);
            this.gameLayer.add(this.snake);
            this.snake.onChangeDirection.add(function () { return _this.steps++; });
            this.snake.onGetCheese.add(this.getCheese, this);
            this.snake.onDeath.addOnce(this.lose, this);
            return this.snake;
        };
        GameState.prototype.move = function (dir) {
            this.snake.changeDirection(dir);
        };
        GameState.prototype.spawnLevel = function (level) {
            for (var y = 0; y < level.length; y++) {
                var line = level[y];
                for (var x = 0; x < line.length; x++) {
                    var char = line[x];
                    if (char == 'x')
                        this.spawnObstacle(x, y, 'objStatic1');
                    if (char == 'o')
                        this.spawnObstacle(x, y, 'objStatic2');
                    if (char == '&')
                        this.cheeseSpawns.push(new Phaser.Point(x, y));
                    if (char == '#')
                        this.blockerSpawns.push(new Phaser.Point(x, y));
                    if (char == '-')
                        this.spawnBreakableFloor(x, y, 'objWeak1');
                    if (char == '=')
                        this.spawnBreakableFloor(x, y, 'objWeak2');
                }
            }
            this.totalCheese = this.cheeseSpawns.length;
        };
        GameState.prototype.spawnObstacle = function (x, y, image) {
            var obstacle = this.gameLayer.create(0, 0, image);
            obstacle.name = 'obstacle';
            obstacle.anchor.set(0.5, 1);
            var bounds = this.grid.getCellBounds(x, y);
            obstacle.alignIn(bounds, Phaser.BOTTOM_CENTER);
            this.grid.add(x, y, obstacle);
        };
        GameState.prototype.spawnBreakableFloor = function (x, y, image) {
            var floor = new F84.BreakableFloor(this.game, this.grid, x, y, image);
            this.gameBackLayer.add(floor);
        };
        GameState.prototype.update = function () {
            if (this.playing) {
                if (this.levelData.spawnTraps) {
                    this.trapTimer -= this.deltaTime;
                    if (this.trapTimer <= 0)
                        this.activateTrap();
                }
                this.cheeseTimer -= this.deltaTime;
                if (this.cheeseTimer <= 0 && this.grid.getAll('cheese').length < 3)
                    this.spawnCheese();
            }
            this.gameLayer.customSort(function (a, b) {
                if (a.gridY != null && b.gridY != null) {
                    return a.gridY - b.gridY;
                }
                return 0;
            });
        };
        GameState.prototype.spawnCheese = function () {
            if (this.cheeseSpawns.length == 0)
                return;
            this.cheeseTimer = this.rnd.between(this.cheeseTime[0], this.cheeseTime[1]);
            var randomSpawns = F84.ArrayUtils.clone(this.cheeseSpawns);
            var pt = null;
            do {
                pt = this.rnd.pick(randomSpawns);
                F84.ArrayUtils.remove(randomSpawns, pt);
                console.log(pt);
            } while (this.grid.getOccupants(pt.x, pt.y).length != 0 && randomSpawns.length > 0);
            if (pt != null && this.grid.getOccupants(pt.x, pt.y).length == 0) {
                F84.ArrayUtils.remove(this.cheeseSpawns, pt);
                var cheese = this.gameLayer.create(0, 0, 'objCheese');
                cheese.name = 'cheese';
                cheese.anchor.setTo(0.5, 0.5);
                var bounds = this.grid.getCellBounds(pt.x, pt.y);
                cheese.alignIn(bounds, Phaser.CENTER);
                this.grid.add(pt.x, pt.y, cheese);
                cheese.scale.set(0.5);
                var tween = this.add.tween(cheese.scale);
                tween.to({ x: 1, y: 1 }, 500, Phaser.Easing.Back.Out, true);
            }
        };
        GameState.prototype.activateTrap = function () {
            if (this.blockerSpawns.length == 0)
                this.blockerChance = 0;
            var choice = F84.ArrayUtils.weightedRandom([
                ['blocker', this.blockerChance],
                ['bomb', this.bombChance],
                ['firework', this.fireworkChance],
            ], this.rnd);
            if (choice == 'blocker')
                this.spawnBlocker();
            if (choice == 'bomb')
                this.spawnBomb();
            if (choice == 'firework')
                this.spawnFirework();
            this.trapTimer = this.rnd.between(this.trapTime[0], this.trapTime[1]);
        };
        GameState.prototype.spawnBlocker = function () {
            if (this.blockerSpawns.length == 0)
                return;
            var radius = 2;
            var pt = null;
            var randomSpawns = F84.ArrayUtils.clone(this.blockerSpawns);
            do {
                pt = this.rnd.pick(randomSpawns);
                F84.ArrayUtils.remove(randomSpawns, pt);
            } while (this.grid.isSnakeNearby(pt.x, pt.y, radius) && randomSpawns.length > 0);
            if (pt != null && !this.grid.isSnakeNearby(pt.x, pt.y, radius)) {
                var blocker = new F84.Blocker(this.game, this.grid, pt.x, pt.y);
                this.gameLayer.add(blocker);
                F84.ArrayUtils.remove(this.blockerSpawns, pt);
            }
        };
        GameState.prototype.spawnBomb = function () {
            var pt = null;
            do {
                pt = new Phaser.Point(this.rnd.between(0, this.gridWidth - 1), this.rnd.between(0, this.gridHeight - 1));
            } while (this.grid.getOccupants(pt.x, pt.y).length != 0);
            var bomb = new F84.Bomb(this.game, this, this.grid, pt.x, pt.y);
            this.gameLayer.add(bomb);
        };
        GameState.prototype.spawnFirework = function () {
            var y = 0;
            var i = 0;
            do {
                y = this.rnd.between(0, this.gridHeight - 1);
                i++;
                if (i > 50)
                    return;
            } while (this.grid.getRowOccupants(y).find(function (o) { return o.name == 'snake'; }));
            var firework = new F84.Firework(this.game, this, this.grid, y);
            this.foregroundLayer.add(firework);
        };
        GameState.prototype.getCheese = function (cheese) {
            this.grid.removeItem(cheese);
            this.collectedCheese++;
            this.score.text = this.collectedCheese + '/' + this.totalCheese;
            if (this.collectedCheese >= this.totalCheese)
                this.win();
        };
        GameState.prototype.win = function () {
            this.snake.destroy();
            this.grid.removeAll('snake');
            this.playing = false;
            this.isPaused = true;
            var stars = 0;
            var reqs = this.levelData.starRequirements;
            for (var _i = 0, reqs_1 = reqs; _i < reqs_1.length; _i++) {
                var req = reqs_1[_i];
                if (this.steps <= req)
                    stars++;
            }
            var saveData = F84.PlayerData.Instance.saveData;
            saveData.stars[this.level] = Math.max(saveData.stars[this.level], stars);
            saveData.unlockedLevels = Math.max(saveData.unlockedLevels, this.level + 2);
            F84.PlayerData.Instance.save();
            var popup = new F84.LevelCompletePopup(this.game, this.level, stars, this.steps, this.levelData.starRequirements);
            this.add.existing(popup);
        };
        GameState.prototype.lose = function () {
            this.playing = false;
            this.isPaused = true;
            var popup = new F84.LevelFailPopup(this.game, this.level);
            this.add.existing(popup);
        };
        GameState.prototype.pause = function () {
            this.game.sound.play('button');
            this.isPaused = true;
            var popup = new F84.PauseMenu(this.game, this.unpause, this);
            this.add.existing(popup);
        };
        GameState.prototype.unpause = function () {
            this.isPaused = false;
        };
        return GameState;
    }(F84.ResizableState));
    F84.GameState = GameState;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var PauseMenu = (function (_super) {
        __extends(PauseMenu, _super);
        function PauseMenu(game, onClosed, onClosedContext) {
            var _this = _super.call(this, game) || this;
            var overlay = F84.Overlay.create(game);
            _this.add(overlay);
            var popupGroup = game.add.group(_this);
            var bg = game.add.sprite(0, 0, 'popup', null, popupGroup);
            var headerStyle = { fill: F84.GameColors.WHITE, fontSize: 56, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 400, align: 'center' };
            var headerText = game.add.text(0, 0, F84.Strings.get('Pause'), headerStyle);
            popupGroup.add(headerText);
            var quitButton = game.add.button(0, 0, 'btnBack', _this.quitButtonPressed, _this);
            popupGroup.add(quitButton);
            F84.GameFactory.addButtonBounce(_this.game, quitButton);
            var helpButton = game.add.button(0, 0, 'btnHelp', _this.helpButtonPressed, _this);
            popupGroup.add(helpButton);
            F84.GameFactory.addButtonBounce(_this.game, helpButton);
            var key = _this.game.sound.mute ? 'btnSoundOff' : 'btnSoundOn';
            var volumeButton = game.add.button(0, 0, key, function () {
                _this.game.sound.mute = !_this.game.sound.mute;
                var key = _this.game.sound.mute ? 'btnSoundOff' : 'btnSoundOn';
                volumeButton.loadTexture(key);
                _this.game.sound.play('button');
            });
            popupGroup.add(volumeButton);
            F84.GameFactory.addButtonBounce(_this.game, volumeButton);
            var continueButton = game.add.button(0, 0, 'btnPlay', _this.continueButtonPressed, _this);
            popupGroup.add(continueButton);
            F84.GameFactory.addButtonBounce(_this.game, continueButton);
            _this.onClosed = onClosed;
            _this.onClosedContext = onClosedContext;
            _this.fixedToCamera = true;
            _this._onResize = function () {
                overlay.width = F84.Game.Instance.width;
                overlay.height = F84.Game.Instance.height;
                popupGroup.alignIn(F84.Game.Instance.getBounds(), Phaser.CENTER, 0, 20);
                headerText.alignIn(bg, Phaser.TOP_CENTER, 0, -3);
                quitButton.alignIn(bg, Phaser.CENTER, -140, 0);
                helpButton.alignIn(bg, Phaser.CENTER, 0, 0);
                volumeButton.alignIn(bg, Phaser.CENTER, 140, 0);
                continueButton.alignIn(bg, Phaser.BOTTOM_CENTER, 0, 51);
            };
            _this.resize();
            var animatedBuild = function () {
                _this.resize();
                _this.game.add.tween(overlay).from({ alpha: 0 }, 150, Phaser.Easing.Quadratic.Out, true);
                _this.game.add.tween(popupGroup).from({ y: 650 }, 275, Phaser.Easing.Back.Out, true, 50).onComplete.add(function () {
                    _this.resize();
                });
            };
            animatedBuild();
            return _this;
        }
        PauseMenu.prototype.resize = function () {
            this._onResize();
        };
        PauseMenu.prototype.quitButtonPressed = function () {
            var _this = this;
            this.game.sound.play('button');
            var game = this.game;
            var config = {
                headerText: F84.Strings.get('ConfirmQuitHeader'),
                messageText: F84.Strings.get('ConfirmQuit'),
                yesFunction: function () {
                    F84.Game.Instance.state.start('LevelSelect');
                },
                noFunction: function () {
                    var menu = new PauseMenu(game, _this.onClosed, _this.onClosedContext);
                    game.add.existing(menu);
                },
                fixedToCamera: true
            };
            var confirmQuit = new F84.YesNoDialogueGroup(this.game, config);
            this.game.add.existing(confirmQuit);
            this.destroy();
        };
        PauseMenu.prototype.helpButtonPressed = function () {
            var _this = this;
            this.game.sound.play('button');
            this.visible = false;
            this.ignoreChildInput = false;
            var tutorials = this.game.cache.getJSON('tutorials');
            var activeTutorials = [];
            for (var i = 0; i < tutorials.length; i++) {
                var tutorial = tutorials[i];
                if (tutorial.level <= F84.PlayerData.Instance.saveData.unlockedLevels) {
                    activeTutorials.push(tutorial);
                }
            }
            var popup = new F84.TutorialPrompt(this.game, activeTutorials, function () {
                _this.visible = true;
                _this.ignoreChildInput = true;
            }, this);
            this.game.add.existing(popup);
        };
        PauseMenu.prototype.continueButtonPressed = function () {
            this.game.sound.play('button');
            this.destroy();
            this.onClosed.call(this.onClosedContext);
        };
        return PauseMenu;
    }(F84.ResizableGroup));
    F84.PauseMenu = PauseMenu;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(game, state, grid, x, y) {
            var _this = _super.call(this, game) || this;
            _this.onChangeDirection = new Phaser.Signal();
            _this.onStep = new Phaser.Signal();
            _this.onGetCheese = new Phaser.Signal();
            _this.onDeath = new Phaser.Signal();
            _this.state = state;
            _this._segments = [];
            _this._intendedDirection = { x: 1, y: 0 };
            _this._direction = _this._intendedDirection;
            _this._grid = grid;
            _this.moving = true;
            _this._timeToMove = 0.5;
            _this._growing = 0;
            _this.flashing = false;
            _this._flashTimer = 0.5;
            _this._dying = false;
            _this._deathTimer = 0.5;
            _this.addSegment(x, y, false);
            _this.addSegment(x + 1, y, false);
            _this.addSegment(x + 2, y, true);
            _this._head.setHead();
            _this._tail.setTail();
            return _this;
        }
        Object.defineProperty(Snake.prototype, "_head", {
            get: function () {
                return this._segments[this._segments.length - 1];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Snake.prototype, "_tail", {
            get: function () {
                return this._segments[0];
            },
            enumerable: true,
            configurable: true
        });
        Snake.prototype.changeDirection = function (dir) {
            if ((this._direction.x !== -dir.x || dir.x == 0) && (this._direction.y !== -dir.y || dir.y == 0)) {
                this._intendedDirection = dir;
                this.onChangeDirection.dispatch();
            }
        };
        Snake.prototype.addSegment = function (x, y, head) {
            if (head === void 0) { head = false; }
            var prevHead = this._head;
            var segment = new F84.SnakeSegment(this.game, this.state, this, this._grid, x, y, prevHead);
            segment.next = null;
            if (prevHead)
                prevHead.next = segment;
            this._segments.push(segment);
            this._grid.add(x, y, segment);
            return segment;
        };
        Snake.prototype.removeSegment = function (segment) {
            segment.next.prev = null;
            F84.ArrayUtils.remove(this._segments, segment);
            this._grid.removeItem(segment);
        };
        Snake.prototype.move = function () {
            if (this._dying)
                return;
            var x = this._head.gridX + this._intendedDirection.x;
            var y = this._head.gridY + this._intendedDirection.y;
            this._direction = this._intendedDirection;
            if (!this._grid.isInBounds(x, y)) {
                return this.takeDamage();
            }
            var occupants = this._grid.getOccupants(x, y);
            for (var _i = 0, occupants_1 = occupants; _i < occupants_1.length; _i++) {
                var item = occupants_1[_i];
                if (item.name == 'obstacle') {
                    this.game.sound.play('fail');
                    return this.takeDamage(item);
                }
                if (item instanceof F84.Blocker) {
                    this.game.sound.play('mousetrap');
                    this.takeDamage(item);
                }
                if (item.name == 'snake' && (item !== this._tail || this._growing > 0)) {
                    return this.takeDamage();
                }
                if (item instanceof F84.BreakableFloor && item.broken) {
                    this.takeDamage(item);
                    this.game.sound.play('waterSplash');
                }
            }
            this.addSegment(x, y, true);
            for (var i = this._segments.length - 1; i >= 0; i--) {
                var segment = this._segments[i];
                segment.updateShape();
                segment.move(this._growing > 0);
            }
            if (this._growing === 0)
                this.removeSegment(this._tail);
            else
                this._growing--;
            for (var _a = 0, occupants_2 = occupants; _a < occupants_2.length; _a++) {
                var item = occupants_2[_a];
                if (item.name === 'cheese')
                    this.getCheese(item);
            }
            this.onStep.dispatch();
        };
        Snake.prototype.grow = function () {
            this._growing += 1;
        };
        Snake.prototype.getCheese = function (cheese) {
            var sound = this.game.rnd.pick(['eatCheese1', 'eatCheese2', 'eatCheese3']);
            this.game.sound.play(sound);
            this._head.getCheese();
            this.grow();
            this.onGetCheese.dispatch(cheese);
        };
        Snake.prototype.takeDamage = function (obstacle) {
            this.moving = false;
            this.flashing = true;
            this._flashTimer = 0.5;
            this._dying = true;
            if (obstacle) {
            }
            else {
                this.game.sound.play('fail');
            }
        };
        Snake.prototype.die = function () {
            this._grid.removeAll('snake');
            this.onDeath.dispatch();
        };
        Snake.prototype.setVisible = function (on) {
            for (var _i = 0, _a = this._segments; _i < _a.length; _i++) {
                var segment = _a[_i];
                segment.setAlpha(on ? 1 : 0);
            }
        };
        Snake.prototype.update = function () {
            var dt = this.state.deltaTime;
            if (this.moving) {
                this._timeToMove -= dt;
                if (this._timeToMove <= 0.0) {
                    this._timeToMove = 0.5;
                    this.move();
                }
            }
            if (this.flashing) {
                this._flashTimer -= dt;
                this.setVisible(Math.floor(this._flashTimer * 15) % 2 == 0);
                if (this._flashTimer <= 0) {
                    this.flashing = false;
                    this.setVisible(true);
                }
            }
            if (this._dying) {
                this._deathTimer -= dt;
                if (this._deathTimer <= 0)
                    this.die();
            }
        };
        return Snake;
    }(Phaser.Group));
    F84.Snake = Snake;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var SnakeGrid = (function () {
        function SnakeGrid(x, y, width, height, tileWidth, tileHeight) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.tileWidth = tileWidth;
            this.tileHeight = tileHeight;
            this._items = [];
        }
        SnakeGrid.prototype.isInBounds = function (x, y) {
            return !(x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1);
        };
        SnakeGrid.prototype.gridToWorld = function (x, y) {
            x = this.x + x * this.tileWidth;
            y = this.y + y * this.tileWidth;
            return new Phaser.Point(x, y);
        };
        SnakeGrid.prototype.getOverlapCells = function (rect) {
            var cells = [];
            var _loop_1 = function (pt) {
                var gridX = Math.floor(Math.round((pt.x - this_1.x) / this_1.tileWidth + 0.5) - 0.5);
                var gridY = Math.floor(Math.round((pt.x - this_1.x) / this_1.tileWidth + 0.5) - 0.5);
                if (!cells.find(function (p) { return p.x == gridX && p.y == gridY; })) {
                    cells.push(new Phaser.Point(gridX, gridY));
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = [rect.topLeft, rect.bottomLeft, rect.topRight, rect.bottomRight]; _i < _a.length; _i++) {
                var pt = _a[_i];
                _loop_1(pt);
            }
            return cells;
        };
        SnakeGrid.prototype.getCellBounds = function (x, y) {
            var pt = this.gridToWorld(x, y);
            return new Phaser.Rectangle(pt.x, pt.y, this.tileWidth, this.tileHeight);
        };
        SnakeGrid.prototype.add = function (x, y, item) {
            this._items.push(item);
            item.gridX = x;
            item.gridY = y;
        };
        SnakeGrid.prototype.removeItem = function (item) {
            F84.ArrayUtils.remove(this._items, item);
            item.destroy();
        };
        SnakeGrid.prototype.getAll = function (name) {
            var items = [];
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name == name)
                    items.push(item);
            }
            return items;
        };
        SnakeGrid.prototype.removeAll = function (name) {
            var items = this.getAll(name);
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                this.removeItem(item);
            }
        };
        SnakeGrid.prototype.getOccupants = function (x, y) {
            var occupants = [];
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.gridX == x && item.gridY == y)
                    occupants.push(item);
            }
            return occupants;
        };
        SnakeGrid.prototype.getCells = function (centerX, centerY, radius) {
            var cells = [];
            var minX = Math.max(0, centerX - radius);
            var minY = Math.max(0, centerY - radius);
            var maxX = Math.min(this.width - 1, centerX + radius);
            var maxY = Math.min(this.height - 1, centerY + radius);
            for (var i = minX; i <= maxX; i++) {
                for (var j = minY; j <= maxY; j++) {
                    cells.push(new Phaser.Point(i, j));
                }
            }
            return cells;
        };
        SnakeGrid.prototype.getNearbyOccupants = function (x, y, radius) {
            var totalOccupants = [];
            var minX = Math.max(0, x - radius);
            var minY = Math.max(0, y - radius);
            var maxX = Math.min(this.width - 1, x + radius);
            var maxY = Math.min(this.height - 1, y + radius);
            for (var i = minX; i <= maxX; i++) {
                for (var j = minY; j <= maxY; j++) {
                    var occupants = this.getOccupants(i, j);
                    totalOccupants = totalOccupants.concat(occupants);
                }
            }
            return totalOccupants;
        };
        SnakeGrid.prototype.isSnakeNearby = function (x, y, radius) {
            var occupants = this.getNearbyOccupants(x, y, radius);
            var occupant = occupants.find(function (o) { return o instanceof F84.SnakeSegment; });
            if (occupant !== null && occupant !== undefined) {
                return true;
            }
            return false;
        };
        SnakeGrid.prototype.getRowOccupants = function (y) {
            var all = [];
            for (var x = 0; x < this.width; x++) {
                var occupants = this.getOccupants(x, y);
                all.push.apply(all, occupants);
            }
            return all;
        };
        return SnakeGrid;
    }());
    F84.SnakeGrid = SnakeGrid;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var SnakeMesh = (function (_super) {
        __extends(SnakeMesh, _super);
        function SnakeMesh(game, state, points) {
            var _this = _super.call(this, game, 0, 0, 'dragonHorizontal', null, points) || this;
            _this.state = state;
            _this.renderCanvas = _this._renderCanvas;
            _this.canvasPadding = 2;
            _this.alpha = 0;
            _this.updateAnimation = _this.updateAnim;
            return _this;
        }
        SnakeMesh.line = function (game, state, sx, sy, dx, dy, segments, cellSize) {
            var points = SnakeMesh.linePoints(sx, sy, dx, dy, segments, cellSize);
            return new SnakeMesh(game, state, points);
        };
        SnakeMesh.curve = function (game, state, sx, sy, startAngle, direction, segments, cellSize) {
            var points = SnakeMesh.curvePoints(sx, sy, startAngle, direction, segments, cellSize);
            return new SnakeMesh(game, state, points);
        };
        Object.defineProperty(SnakeMesh.prototype, "show", {
            set: function (on) {
                if (on) {
                    this._renderCanvas = this.renderCanvas;
                }
                else {
                    this._renderCanvas = function () { };
                }
            },
            enumerable: true,
            configurable: true
        });
        SnakeMesh.prototype.updateAnim = function () {
            for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
                var point = _a[_i];
                point.update(this.state.deltaTime);
            }
        };
        SnakeMesh.prototype.setPoints = function (points) {
            this.points = [];
            for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                var point = points_1[_i];
                this.points.push(new F84.SnakePoint(point.x, point.y));
            }
            this.points[0].setFirst();
            this.points[this.points.length - 1].setLast();
        };
        SnakeMesh.linePoints = function (sx, sy, dx, dy, segments, cellSize) {
            var points = [];
            for (var i = 0; i <= segments; i++) {
                var pt = new F84.SnakePoint(sx + dx * cellSize * (i / segments), sy + dy * cellSize * (i / segments));
                if (i == 0)
                    pt.setFirst();
                if (i == segments)
                    pt.setLast();
                points.push(pt);
            }
            return points;
        };
        SnakeMesh.curvePoints = function (sx, sy, startAngle, direction, segments, cellSize) {
            var cx = sx += (direction) * Math.sin(startAngle) * cellSize / 2;
            var cy = sy += (-direction) * Math.cos(startAngle) * cellSize / 2;
            var points = [];
            for (var i = 0; i <= segments; i++) {
                var a = startAngle + (Math.PI / 2 * direction) - direction * (Math.PI / 2) * (i / segments);
                var pt = new F84.SnakePoint(cx + Math.cos(a) * cellSize / 2, cy + Math.sin(a) * cellSize / 2);
                if (i == 0)
                    pt.setFirst();
                if (i == segments)
                    pt.setLast();
                points.push(pt);
            }
            var startHoriz = true;
            if (Math.abs(Math.cos(startAngle)) < 0.05)
                startHoriz = false;
            if (startHoriz) {
                points[1].y = points[0].y;
                points[points.length - 2].x = points[points.length - 1].x;
            }
            else {
                points[1].x = points[0].x;
                points[points.length - 2].y = points[points.length - 1].y;
            }
            return points;
        };
        return SnakeMesh;
    }(Phaser.Rope));
    F84.SnakeMesh = SnakeMesh;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var SnakePoint = (function (_super) {
        __extends(SnakePoint, _super);
        function SnakePoint(x, y) {
            var _this = _super.call(this, x, y) || this;
            _this._offsetMagnitude = 0.12;
            _this._tweenSpeed = 1.8;
            _this.offset = 0;
            return _this;
        }
        SnakePoint.prototype.tweenThrough = function (points) {
            var _this = this;
            this.tweenPoints = [];
            points.forEach(function (point) {
                if (!_this.tweenPoints.find(function (o) { return o.x === point.x && o.y === point.y; })) {
                    _this.tweenPoints.push(point);
                }
            });
            this.tween = 0;
        };
        SnakePoint.prototype.getTargetPoint = function () {
            if (this.tweenPoints == null)
                return this;
            return this.tweenPoints[this.tweenPoints.length - 1];
        };
        SnakePoint.prototype.setOffset = function (i) {
            var amt = i;
            this.offset = this._offsetMagnitude * amt;
        };
        SnakePoint.prototype.setFirst = function () {
            this.offset = -this._offsetMagnitude;
        };
        SnakePoint.prototype.setLast = function () {
            this.offset = this._offsetMagnitude;
        };
        SnakePoint.prototype.update = function (dt) {
            if (this.tweenPoints != null) {
                this.tween += this._tweenSpeed * dt;
                var tween = this.tween + this.offset;
                if (tween > 1)
                    tween = 1;
                if (tween < 0)
                    tween = 0;
                var pointIndex = Math.floor(tween * (this.tweenPoints.length - 1));
                var progress = tween * (this.tweenPoints.length - 1) - pointIndex;
                var dx = 0;
                var dy = 0;
                if (pointIndex < this.tweenPoints.length - 1) {
                    dx = this.tweenPoints[pointIndex + 1].x - this.tweenPoints[pointIndex].x;
                    dy = this.tweenPoints[pointIndex + 1].y - this.tweenPoints[pointIndex].y;
                }
                this.x = this.tweenPoints[pointIndex].x + dx * progress;
                this.y = this.tweenPoints[pointIndex].y + dy * progress;
            }
        };
        return SnakePoint;
    }(Phaser.Point));
    F84.SnakePoint = SnakePoint;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var SnakeSegmentType;
    (function (SnakeSegmentType) {
        SnakeSegmentType[SnakeSegmentType["HEAD"] = 0] = "HEAD";
        SnakeSegmentType[SnakeSegmentType["MIDDLE"] = 1] = "MIDDLE";
        SnakeSegmentType[SnakeSegmentType["TAIL"] = 2] = "TAIL";
    })(SnakeSegmentType = F84.SnakeSegmentType || (F84.SnakeSegmentType = {}));
    var SnakeSegment = (function () {
        function SnakeSegment(game, state, snake, grid, gridX, gridY, prev) {
            this.numPoints = 10;
            this.game = game;
            this.state = state;
            this.snake = snake;
            this.name = 'snake';
            this._grid = grid;
            this.gridX = gridX;
            this.gridY = gridY;
            this.prev = prev;
            this.setPoints();
            this.createMesh();
        }
        Object.defineProperty(SnakeSegment.prototype, "SegmentType", {
            get: function () { return this._segmentType; },
            enumerable: true,
            configurable: true
        });
        SnakeSegment.prototype.setHead = function () {
            var _this = this;
            this._mesh.show = false;
            var sprite = this.game.add.sprite(0, 0, 'dragonHead');
            this.state.gameLayer.add(sprite);
            sprite.anchor = new Phaser.Point(0.5, 0.95);
            sprite.scale = new Phaser.Point(1.06, 1.06);
            this._sprite = sprite;
            var setPosition = function () {
                var followPoint = _this.prev._mesh.points[_this.prev._mesh.points.length - 1];
                sprite.position = followPoint;
                var prevPoint = _this.prev._mesh.points[_this.prev._mesh.points.length - 2];
                var dx = followPoint.x - prevPoint.x;
                var dy = followPoint.y - prevPoint.y;
                var angle = Math.atan2(dy, dx);
                sprite.rotation = angle + Math.PI / 2;
            };
            setPosition();
            var followPoint = this.prev.prev._mesh.points[this.prev._mesh.points.length - 1];
            sprite.position = followPoint;
            sprite.postUpdate = setPosition;
            this._segmentType = SnakeSegmentType.HEAD;
        };
        SnakeSegment.prototype.setMiddle = function () {
            this._mesh.show = true;
            if (this._sprite)
                this._sprite.destroy();
            this._segmentType = SnakeSegmentType.MIDDLE;
        };
        SnakeSegment.prototype.setTail = function () {
            var _this = this;
            this._mesh.show = false;
            var sprite = this.game.add.sprite(0, 0, 'dragonTail');
            this.state.gameLayer.add(sprite);
            sprite.anchor = new Phaser.Point(0.95, 0.5);
            sprite.scale = new Phaser.Point(1.0, 1.0);
            this._sprite = sprite;
            var setPosition = function () {
                var followPoint = _this.next._mesh.points[0];
                sprite.position = followPoint;
                var nextPoint = _this.next._mesh.points[1];
                var dx = nextPoint.x - followPoint.x;
                var dy = nextPoint.y - followPoint.y;
                var angle = Math.atan2(dy, dx);
                sprite.rotation = angle;
            };
            var followPoint = this.next.prev._mesh.points[0];
            sprite.position = followPoint;
            setPosition();
            sprite.update = setPosition;
            this._segmentType = SnakeSegmentType.TAIL;
        };
        SnakeSegment.prototype.setPoints = function () {
            if (this.prev == null)
                this.setStraightPoints(this.next, -1);
            else if (this.next == null)
                this.setStraightPoints(this.prev, 1);
            else {
                if (this.prev.gridX == this.next.gridX || this.prev.gridY == this.next.gridY)
                    this.setStraightPoints(this.prev, 1);
                else {
                    this.setCornerPoints();
                }
            }
        };
        SnakeSegment.prototype.setTailPoints = function () {
            if (this.next.gridX > this.gridX) {
            }
        };
        SnakeSegment.prototype.setCornerPoints = function () {
            var _a = this.getStartPosition(), sx = _a.x, sy = _a.y, startAngle = _a.angle;
            var dir;
            if (this.prev.gridX < this.gridX) {
                dir = this.next.gridY < this.gridY ? 1 : -1;
            }
            else if (this.prev.gridX > this.gridX) {
                dir = this.next.gridY < this.gridY ? -1 : 1;
            }
            else if (this.prev.gridY < this.gridY) {
                dir = this.next.gridX < this.gridX ? -1 : 1;
            }
            else if (this.prev.gridY > this.gridY) {
                dir = this.next.gridX < this.gridX ? 1 : -1;
            }
            this._points = F84.SnakeMesh.curvePoints(sx, sy, startAngle, dir, this.numPoints, this._grid.tileWidth);
        };
        SnakeSegment.prototype.getStartPosition = function () {
            var bounds = this._grid.getCellBounds(this.gridX, this.gridY);
            if (this.prev) {
                if (this.prev.gridX < this.gridX)
                    return { x: bounds.left, y: bounds.centerY, angle: 0 };
                if (this.prev.gridX > this.gridX)
                    return { x: bounds.right, y: bounds.centerY, angle: Math.PI };
                if (this.prev.gridY < this.gridY)
                    return { x: bounds.centerX, y: bounds.top, angle: Math.PI / 2 };
                if (this.prev.gridY > this.gridY)
                    return { x: bounds.centerX, y: bounds.bottom, angle: 3 * Math.PI / 2 };
            }
            else if (this.next) {
                if (this.next.gridX > this.gridX)
                    return { x: bounds.left, y: bounds.centerY, angle: 0 };
                if (this.next.gridX < this.gridX)
                    return { x: bounds.right, y: bounds.centerY, angle: Math.PI };
                if (this.next.gridY > this.gridY)
                    return { x: bounds.centerX, y: bounds.top, angle: Math.PI / 2 };
                if (this.next.gridY < this.gridY)
                    return { x: bounds.centerX, y: bounds.bottom, angle: 3 * Math.PI / 2 };
            }
            return { x: bounds.left, y: bounds.centerY, angle: 0 };
        };
        SnakeSegment.prototype.setStraightPoints = function (neighbor, asdfgh) {
            var _a, _b, _c, _d;
            var _e = this.getStartPosition(), sx = _e.x, sy = _e.y;
            var dx = 1;
            var dy = 0;
            if (neighbor != null) {
                if (neighbor.gridX < this.gridX)
                    _a = [1 * asdfgh, 0], dx = _a[0], dy = _a[1];
                else if (neighbor.gridX > this.gridX)
                    _b = [-1 * asdfgh, 0], dx = _b[0], dy = _b[1];
                else if (neighbor.gridY < this.gridY)
                    _c = [0, 1 * asdfgh], dx = _c[0], dy = _c[1];
                else if (neighbor.gridY > this.gridY)
                    _d = [0, -1 * asdfgh], dx = _d[0], dy = _d[1];
            }
            this._points = F84.SnakeMesh.linePoints(sx, sy, dx, dy, this.numPoints, this._grid.tileWidth);
        };
        SnakeSegment.prototype.createMesh = function () {
            this._mesh = F84.SnakeMesh.line(this.game, this.state, 0, 0, 1, 0, this.numPoints, this._grid.tileWidth);
            this._mesh.setPoints(this._points);
            this.game.add.existing(this._mesh);
            this.state.gameLayer.add(this._mesh);
        };
        SnakeSegment.prototype.move = function (growing) {
            if (this.next == null)
                this.setHead();
            else
                this.setMiddle();
            if (this.next != null && this.prev == null) {
                if (!growing)
                    this.next.setTail();
                else
                    this.setTail();
            }
            else if (this.next != null) {
                var mesh = this.next._mesh;
                if (this.prev == null && !growing)
                    mesh.loadTexture('dragonTail');
                if (this.prev == null && growing) {
                    var startPoints = [];
                    for (var i = 0; i < this._points.length; i++) {
                        startPoints.push(this._points[this._points.length - 1]);
                    }
                    mesh.setPoints(startPoints);
                }
                else {
                    mesh.setPoints(this._points);
                }
                for (var i = 0; i < mesh.points.length; i++) {
                    var point = mesh.points[i];
                    var nextPoints = this.getNextPoints(mesh.points, i, this.next._points, mesh.points.length + 1);
                    if (growing) {
                        if (this.next.next && this.next.next.next != null) {
                            var finalPoint = nextPoints[nextPoints.length - 1];
                            point.set(finalPoint.x, finalPoint.y);
                            point.tweenThrough(nextPoints);
                            point.tween = 0.99;
                        }
                        else {
                            this.prev._mesh.bringToTop();
                            point.tweenThrough(nextPoints);
                        }
                    }
                    else
                        point.tweenThrough(nextPoints);
                }
            }
        };
        SnakeSegment.prototype.getNextPoints = function (segment, index, nextSegment, count) {
            var points = [];
            for (var i = index; i < segment.length; i++) {
                var pt = segment[i].clone();
                points.push(pt);
                if (points.length == count)
                    return points;
            }
            for (var i = 0; i < nextSegment.length; i++) {
                var pt = nextSegment[i].clone();
                points.push(pt);
                if (points.length == count)
                    return points;
            }
            return points;
        };
        SnakeSegment.prototype.updateShape = function () {
            if (this.next != null && this.next.next == null) {
                this.setPoints();
            }
        };
        SnakeSegment.prototype.destroy = function () {
            this._mesh.destroy();
            if (this._sprite)
                this._sprite.destroy();
        };
        SnakeSegment.prototype.getCheese = function () {
        };
        SnakeSegment.prototype.setAlpha = function (value) {
            if (this.next != null && this.prev != null)
                this._mesh.show = (value > 0);
            if (this._sprite)
                this._sprite.alpha = value;
        };
        return SnakeSegment;
    }());
    F84.SnakeSegment = SnakeSegment;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var TutorialPrompt = (function (_super) {
        __extends(TutorialPrompt, _super);
        function TutorialPrompt(game, tutorials, onClosed, onClosedContext, unpause, unPauseContext) {
            var _this = _super.call(this, game) || this;
            _this._pageIndex = 0;
            _this._tutorials = tutorials;
            _this._onClosed = onClosed;
            _this._onClosedContext = onClosedContext;
            _this._unpause = unpause;
            _this._unPauseContext = unPauseContext;
            var overlay = F84.Overlay.create(_this.game, 0.7);
            _this.add(overlay);
            var fadeTween = game.add.tween(overlay);
            fadeTween.from({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
            _this._popupGroup = game.add.group(_this);
            var popup = _this.game.add.sprite(0, 0, 'popup', null, _this._popupGroup);
            popup.alignIn(_this.game.world.bounds, Phaser.CENTER, 0, -30);
            var headerStyle = { fill: F84.GameColors.WHITE, fontSize: 48, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 400, align: 'center' };
            _this._headerText = game.add.text(0, 0, '', headerStyle, _this._popupGroup);
            _this._image = _this.game.add.image(0, 0, '', null, _this._popupGroup);
            var style = { font: F84.Fonts.BoldFont, fill: F84.GameColors.WHITE, fontSize: 26, wordWrap: true, wordWrapWidth: 550, align: 'center' };
            _this._descriptionText = _this.game.add.text(0, 0, '', style, _this._popupGroup);
            _this._descriptionText.lineSpacing = -10;
            if (F84.Game.Instance.locale == "ja-ja" || F84.Game.Instance.locale == "zh-cn")
                _this._descriptionText.useAdvancedWrap = true;
            var button = _this.game.add.button(0, 0, 'btnPlay', _this.next, _this);
            F84.GameFactory.addButtonBounce(_this.game, button);
            _this.add(button);
            _this._onResize = function () {
                overlay.width = F84.Game.Instance.width;
                overlay.height = F84.Game.Instance.height;
                _this._popupGroup.alignIn(overlay, Phaser.CENTER, 0, -25);
                _this._headerText.alignIn(popup, Phaser.TOP_CENTER, 14, -12);
                _this._image.alignIn(popup, Phaser.CENTER, 0, -20);
                _this._descriptionText.alignTo(_this._image, Phaser.BOTTOM_CENTER, 0, -20);
                button.alignIn(overlay, Phaser.BOTTOM_RIGHT, -15, -15);
            };
            _this.resize();
            _this.resize();
            _this.setPageIndex(0);
            return _this;
        }
        TutorialPrompt.prototype.next = function () {
            this.game.sound.play('button');
            this.setPageIndex(this._pageIndex + 1);
        };
        TutorialPrompt.prototype.setPageIndex = function (pageIndex) {
            this._pageIndex = pageIndex;
            if (this._pageIndex >= this._tutorials.length) {
                this.destroy();
                if (this._unpause)
                    this._unpause.call(this._unPauseContext);
                if (this._onClosed)
                    this._onClosed.call(this._onClosedContext);
            }
            else {
                var tutorial = this._tutorials[this._pageIndex];
                var tutorialId = tutorial.id;
                this._headerText.setText(F84.Strings.get('Tutorial' + tutorialId + 'Header'));
                var showMobileVariant = !this.game.device.desktop && tutorial.hasMobileVariant === true;
                var descriptionId = 'Tutorial' + tutorialId + 'Description' + (showMobileVariant ? 'Mobile' : '');
                this._descriptionText.setText(F84.Strings.get(descriptionId));
                this._image.loadTexture('tut' + tutorialId + (showMobileVariant ? 'Mobile' : ''));
                this.resize();
                this.resize();
                var moveTween = this.game.add.tween(this._popupGroup);
                moveTween.from({ y: this._popupGroup.y + 400 }, 450, Phaser.Easing.Back.Out, true);
            }
        };
        TutorialPrompt.prototype.resize = function () {
            this._onResize();
        };
        return TutorialPrompt;
    }(F84.ResizableGroup));
    F84.TutorialPrompt = TutorialPrompt;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var WarningIndicator = (function (_super) {
        __extends(WarningIndicator, _super);
        function WarningIndicator(game, state, grid, gridX, gridY) {
            var _this = _super.call(this, game, 0, 0, 'firecrackerWarningSquare') || this;
            _this.name = 'warning';
            _this.state = state;
            _this.game = game;
            _this.grid = grid;
            _this.gridX = gridX;
            _this.gridY = gridY;
            state.gameBackLayer.addChild(_this);
            _this.anchor.set(0.5, 0.5);
            var bounds = _this.grid.getCellBounds(_this.gridX, _this.gridY);
            _this.alignIn(bounds, Phaser.CENTER);
            var startingAlpha = 1;
            var endingAlpha = 0.5;
            if ((gridX + gridY) % 2 == 0) {
                startingAlpha = 0.5;
                endingAlpha = 1;
            }
            _this.alpha = startingAlpha;
            _this.game.add.tween(_this).to({ alpha: endingAlpha }, 350, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);
            return _this;
        }
        return WarningIndicator;
    }(Phaser.Sprite));
    F84.WarningIndicator = WarningIndicator;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var FinalGameComplete = (function (_super) {
        __extends(FinalGameComplete, _super);
        function FinalGameComplete() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FinalGameComplete.prototype.create = function () {
            var _this = this;
            F84.PlayerData.Instance.save();
            var bg = this.add.sprite(0, 0, 'finalBG');
            var logo = this.add.sprite(0, 0, 'splashLogo');
            logo.scale.set(0.75);
            var style = { font: F84.Fonts.BoldFont, fill: F84.GameColors.GREEN, fontSize: 48 };
            var greatJob = this.add.text(0, 0, F84.Strings.get('GreatJob'), style);
            style = { font: F84.Fonts.DefaultFont, fill: F84.GameColors.WHITE, fontSize: 32, wordWrap: true, wordWrapWidth: 300, align: 'center' };
            var body = this.add.text(0, 0, F84.Strings.get('FinalGameComplete'), style);
            body.lineSpacing = -10;
            var playButton = this.add.button(0, 0, 'playButton', this.play, this);
            F84.GameFactory.addButtonBounce(this.game, playButton);
            this._onResize = function () {
                bg.alignIn(_this.world.bounds, Phaser.CENTER);
                logo.alignIn(_this.world.bounds, Phaser.CENTER, -250, -160);
                greatJob.alignIn(_this.world.bounds, Phaser.CENTER, -250, -10);
                body.alignIn(_this.world.bounds, Phaser.CENTER, -250, 70);
                playButton.alignIn(_this.world.bounds, Phaser.BOTTOM_CENTER, -250, -10);
            };
            this.resize();
        };
        FinalGameComplete.prototype.resize = function () {
            this._onResize();
        };
        FinalGameComplete.prototype.play = function () {
            this.game.sound.play('button');
            this.game.state.start('SplashScreen');
        };
        return FinalGameComplete;
    }(F84.ResizableState));
    F84.FinalGameComplete = FinalGameComplete;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var GameUI = (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameUI.prototype.createDirectionalButtons = function (createTutorial) {
            var _this = this;
            if (createTutorial === void 0) { createTutorial = false; }
            var _a = this.directionalButton(Phaser.TOP_RIGHT, Math.PI / 2), topRight = _a[0], topRightTween = _a[1];
            var _b = this.directionalButton(Phaser.BOTTOM_RIGHT, 3 * Math.PI / 2), bottomRight = _b[0], bottomRightTween = _b[1];
            var _c = this.directionalButton(Phaser.TOP_LEFT, 0), topLeft = _c[0], topLeftTween = _c[1];
            var _d = this.directionalButton(Phaser.BOTTOM_LEFT, Math.PI), bottomLeft = _d[0], bottomLeftTween = _d[1];
            if (createTutorial) {
                this._onCountdownFinished.add(function () {
                    var rightTutorialSeen = false;
                    var leftTutorialSeen = false;
                    var tutorialSeen = false;
                    var _a = _this.DirectionalButtonTutorial(), leftContainer = _a.leftContainer, rightContainer = _a.rightContainer;
                    var removeTutorial = function (container) {
                        var tweens = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            tweens[_i - 1] = arguments[_i];
                        }
                        container.destroy();
                        tweens.forEach(function (tween) { return tween.stop(); });
                    };
                    var removeRight = function () {
                        if (!rightTutorialSeen) {
                            rightTutorialSeen = true;
                            removeTutorial(rightContainer, topRightTween, bottomRightTween);
                            topRight.scale.set(1);
                            bottomRight.scale.set(1);
                        }
                    };
                    var removeLeft = function () {
                        if (!leftTutorialSeen) {
                            leftTutorialSeen = true;
                            removeTutorial(leftContainer, topLeftTween, bottomLeftTween);
                            topLeft.scale.set(1);
                            bottomLeft.scale.set(1);
                        }
                    };
                    if (true) {
                        leftContainer.destroy();
                        rightContainer.destroy();
                        leftContainer = rightContainer = _this.SinglePlayerDirectionalButtonTutorial();
                        removeLeft = removeRight = function () {
                            if (!tutorialSeen) {
                                tutorialSeen = true;
                                removeTutorial(leftContainer, topLeftTween, bottomLeftTween, topRightTween, bottomRightTween);
                            }
                        };
                    }
                    var timer = _this.time.create();
                    timer.add(20000, function () { removeLeft(); removeRight(); });
                    timer.start();
                    topRight.events.onInputDown.addOnce(function () { return removeRight(); });
                    bottomRight.events.onInputDown.addOnce(function () { return removeRight(); });
                    topLeft.events.onInputDown.addOnce(function () { return removeLeft(); });
                    bottomLeft.events.onInputDown.addOnce(function () { return removeLeft(); });
                    leftContainer.update = function () {
                        leftContainer.bringToTop();
                    };
                    rightContainer.update = function () {
                        rightContainer.bringToTop();
                    };
                });
            }
            return {
                topRight: topRight,
                bottomRight: bottomRight,
                topLeft: topLeft,
                bottomLeft: bottomLeft
            };
        };
        GameUI.prototype.directionalButton = function (align, rotation) {
            var back = this.directionalButtonBack(align);
            var front = this.directionalButtonFront(rotation);
            back.addChild(front);
            var tween = this.add.tween(back.scale);
            tween.to({ x: 1.05, y: 1.05 }, 800, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            return [back, tween];
        };
        GameUI.prototype.directionalButtonBack = function (location) {
            var button = this.add.button(0, 0, 'btnBack');
            button.anchor.set(0.5, 0.5);
            button.alignIn(this.world.bounds, location, 30, 0);
            return button;
        };
        GameUI.prototype.directionalButtonShine = function () {
            var _this = this;
            var glow = this.add.sprite(0, 0, 'tutorialGlow');
            glow.anchor.set(0.5);
            var timer = 0;
            glow.update = function () {
                timer += _this.game.time.physicsElapsed;
                glow.angle = Math.sin(timer) * 5;
            };
            glow.alpha = 0;
            return glow;
        };
        GameUI.prototype.directionalButtonFront = function (rotation) {
            var button = this.add.sprite(0, 0, 'btnBlue');
            button.anchor.set(0.5);
            var arrow = this.add.sprite(0, 0, 'btnIconUp');
            arrow.anchor.set(0.5);
            arrow.rotation = rotation;
            button.addChild(arrow);
            return button;
        };
        GameUI.prototype.nullFunc = function () { };
        GameUI.prototype.SinglePlayerDirectionalButtonTutorial = function () {
            var style = { font: '80px chowderheadmedium', fill: '#ffffff', align: 'center', wordWrap: true, wordWrapWidth: 720 };
            var container = this.add.sprite(0, 0, 'uiOverlayContainer');
            container.anchor.set(0.5);
            container.alignIn(this.world.bounds, Phaser.BOTTOM_CENTER, 0, -100);
            var text = this.add.text(0, 0, 'Tap the buttons to move!', style);
            text.anchor.set(0.5);
            container.addChild(text);
            return container;
        };
        GameUI.prototype.DirectionalButtonTutorial = function () {
            var style = { font: '80px chowderheadmedium', fill: '#ffffff', align: 'center', wordWrap: true, wordWrapWidth: 720 };
            var rightContainer = this.add.sprite(0, 0, 'uiOverlayContainer');
            rightContainer.anchor.set(0.5);
            rightContainer.rotation = -Math.PI / 2;
            rightContainer.alignIn(this.world.bounds, Phaser.RIGHT_CENTER, 150);
            var rightText = this.add.text(0, 0, 'Tap the buttons to move!', style);
            rightText.anchor.set(0.5);
            rightContainer.addChild(rightText);
            var leftContainer = this.add.sprite(0, 0, 'uiOverlayContainer');
            leftContainer.anchor.set(0.5);
            leftContainer.rotation = Math.PI / 2;
            leftContainer.alignIn(this.world.bounds, Phaser.LEFT_CENTER, 150);
            var leftText = this.add.text(0, 0, 'Tap the buttons to move!', style);
            leftText.anchor.set(0.5);
            leftContainer.addChild(leftText);
            return { leftContainer: leftContainer, rightContainer: rightContainer };
        };
        return GameUI;
    }(Phaser.State));
    F84.GameUI = GameUI;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ScreenTransition = (function (_super) {
        __extends(ScreenTransition, _super);
        function ScreenTransition(game, onMidpointCallback, onMidpointContext) {
            var _this = _super.call(this, game, null, null, true) || this;
            _this._shake = 7.0;
            _this._imageGroup = game.add.group(_this);
            var leftImage = game.add.image(0, 0, 'transitionLeft', null, _this._imageGroup);
            leftImage.anchor.set(1.0, 0.5);
            var rightImage = game.add.image(0, 0, 'transitionRight', null, _this._imageGroup);
            rightImage.anchor.set(0.0, 0.5);
            var scaleModifier = Math.max(1.1, F84.Game.Instance.width / 1040);
            _this._imageGroup.scale.set(scaleModifier, scaleModifier);
            _this._imageGroup.x -= _this._imageGroup.width / 2;
            _this._imageGroup.y = F84.Game.Instance.height / 2;
            var enterTween = game.add.tween(_this._imageGroup).to({ x: F84.Game.Instance.width / 2.0 }, 250, Phaser.Easing.Quadratic.Out);
            enterTween.onComplete.add(function () {
                _this.onMidpoint.dispatch();
                _this._atMidpoint = true;
            });
            enterTween.start();
            _this.onMidpoint = new Phaser.Signal();
            _this.onComplete = new Phaser.Signal();
            if (onMidpointCallback != null) {
                _this.onMidpoint.add(onMidpointCallback, onMidpointContext);
            }
            return _this;
        }
        ScreenTransition.prototype.update = function () {
            var _this = this;
            this.game.world.bringToTop(this);
            if (this._atMidpoint) {
                var exitTween = this.game.add.tween(this._imageGroup).to({ x: F84.Game.Instance.width + this._imageGroup.width / 2 }, 250, Phaser.Easing.Quadratic.Out, false, 250);
                exitTween.onComplete.add(function () {
                    _this.onComplete.dispatch();
                    _this.game.stage.removeChild(_this);
                    _this.destroy(true, false);
                });
                exitTween.start();
                this._atMidpoint = false;
            }
            this._imageGroup.y = F84.Game.Instance.height / 2 + Math.sin(F84.Game.Instance.time.time) * this._shake;
        };
        return ScreenTransition;
    }(Phaser.Group));
    F84.ScreenTransition = ScreenTransition;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var PhaserText = (function () {
        function PhaserText() {
        }
        PhaserText.override = function () {
            Phaser.Text.prototype.setText = function (text, immediate) {
                if (immediate === undefined) {
                    immediate = false;
                }
                var fontTagIndex = text.indexOf('<font');
                if (fontTagIndex != -1) {
                    var endingIndex = text.indexOf('>', fontTagIndex);
                    var fontTag = text.slice(fontTagIndex, endingIndex);
                    var sizeString = fontTag.split('=')[1];
                    sizeString = sizeString.replace(new RegExp('[\'"]', 'g'), '');
                    this.style.fontSize = sizeString;
                    this.fontSize = sizeString;
                    text = text.replace(new RegExp('<[^>]*>'), '');
                    text = text.replace('</font>', '');
                }
                text = text.toString() || '';
                if (text === this._text) {
                    return this;
                }
                this.text = text;
                if (immediate) {
                    this.updateText();
                }
                else {
                    this.dirty = true;
                }
                return this;
            };
        };
        PhaserText._superSetText = Phaser.Text.prototype.setText;
        return PhaserText;
    }());
    F84.PhaserText = PhaserText;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var AnimationList = (function () {
        function AnimationList() {
        }
        AnimationList.add = function (animation) {
            this.animations.push(animation);
        };
        AnimationList.remove = function (animation) {
            F84.ArrayUtils.remove(this.animations, animation);
        };
        AnimationList.animations = [];
        return AnimationList;
    }());
    F84.AnimationList = AnimationList;
    var Animation = (function (_super) {
        __extends(Animation, _super);
        function Animation(game, parent, name, frameData, frames, frameRate, loop) {
            var _this = _super.call(this, game, parent, name, frameData, frames, frameRate, loop) || this;
            AnimationList.add(_this);
            return _this;
        }
        Animation.prototype.destroy = function () {
            AnimationList.remove(this);
            _super.prototype.destroy.call(this);
        };
        return Animation;
    }(Phaser.Animation));
    Phaser.Animation = Animation;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ArrayUtils = (function () {
        function ArrayUtils() {
        }
        ArrayUtils.shuffle = function (array) {
            var currentIndex = array.length;
            var temporaryValue;
            var randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        };
        ArrayUtils.remove = function (array, item) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] == item) {
                    return array.splice(i, 1);
                }
            }
            return array;
        };
        ArrayUtils.clone = function (array) {
            var clone = new Array();
            for (var i = 0; i < array.length; i++) {
                clone.push(array[i]);
            }
            return clone;
        };
        ArrayUtils.weightedRandom = function (fields, rnd) {
            var total = 0;
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                total += field[1];
            }
            var rand = rnd.realInRange(0, total);
            for (var _a = 0, fields_2 = fields; _a < fields_2.length; _a++) {
                var field = fields_2[_a];
                rand -= field[1];
                if (rand <= 0)
                    return field[0];
            }
        };
        return ArrayUtils;
    }());
    F84.ArrayUtils = ArrayUtils;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Fonts = (function () {
        function Fonts() {
        }
        Object.defineProperty(Fonts, "DefaultFont", {
            get: function () {
                if (F84.Game.Instance.locale == "pl-pl")
                    return "20pt arial";
                return "20pt curse-casual";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Fonts, "BoldFont", {
            get: function () {
                if (F84.Game.Instance.locale == "pl-pl")
                    return "20pt arial";
                return "20pt luckiestguy";
            },
            enumerable: true,
            configurable: true
        });
        return Fonts;
    }());
    F84.Fonts = Fonts;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Fullscreen = (function () {
        function Fullscreen() {
        }
        Fullscreen.startFullscreen = function (game) {
            if (!game.device.desktop) {
                game.scale.startFullScreen(false);
            }
        };
        return Fullscreen;
    }());
    F84.Fullscreen = Fullscreen;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Music = (function () {
        function Music() {
        }
        Music.switchMusic = function (game, key) {
            if (key == this.currentKey)
                return;
            if (this.currentMusic)
                this.currentMusic.destroy();
            this.currentMusic = game.sound.play(key, 0.4, true);
            this.currentKey = key;
        };
        Music.stopMusic = function () {
            if (this.currentMusic)
                this.currentMusic.destroy();
            this.currentKey = '';
        };
        return Music;
    }());
    F84.Music = Music;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ObjectUtils = (function () {
        function ObjectUtils() {
        }
        ObjectUtils.isEmpty = function (object) {
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        };
        return ObjectUtils;
    }());
    F84.ObjectUtils = ObjectUtils;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ScaleBy;
    (function (ScaleBy) {
        ScaleBy[ScaleBy["WIDTH"] = 0] = "WIDTH";
        ScaleBy[ScaleBy["HEIGHT"] = 1] = "HEIGHT";
    })(ScaleBy = F84.ScaleBy || (F84.ScaleBy = {}));
    var OrientationType;
    (function (OrientationType) {
        OrientationType[OrientationType["PORTRAIT"] = 0] = "PORTRAIT";
        OrientationType[OrientationType["LANDSCAPE"] = 1] = "LANDSCAPE";
    })(OrientationType = F84.OrientationType || (F84.OrientationType = {}));
    var Orientation = (function () {
        function Orientation() {
        }
        Orientation.startPortrait = function (state, scaleBy) {
            var _a;
            this.rescale(state, OrientationType.PORTRAIT, scaleBy);
            state.world.rotation = -Math.PI / 2;
            var bounds = state.world.bounds;
            _a = [bounds.height, bounds.width], bounds.width = _a[0], bounds.height = _a[1];
            state.camera.bounds = new Phaser.Rectangle(0, -bounds.width, bounds.height, bounds.width);
        };
        Orientation.endPortrait = function (state) {
            this.rescale(state, OrientationType.LANDSCAPE, ScaleBy.HEIGHT);
            state.world.rotation = 0;
            state.camera.bounds = state.world.bounds;
        };
        Orientation.rescale = function (state, orientation, scaleBy) {
            var desiredWidth = F84.Game.Instance.DefaultWidth;
            var desiredHeight = F84.Game.Instance.DefaultHeight;
            var currentWidth = window.innerWidth;
            var currentHeight = window.innerHeight;
            if (F84.Game.Instance.device.desktop) {
                currentWidth = F84.Game.Instance.DefaultWidth;
                currentHeight = F84.Game.Instance.DefaultHeight;
            }
            var widthRatio = currentWidth / desiredWidth;
            var heightRatio = currentHeight / desiredHeight;
            if (orientation == OrientationType.LANDSCAPE && scaleBy === ScaleBy.HEIGHT) {
                state.game.scale.setGameSize(currentWidth / heightRatio, desiredHeight);
                state.scale.setUserScale(heightRatio, heightRatio);
            }
            else {
                state.game.scale.setGameSize(desiredWidth, currentHeight / widthRatio);
                state.scale.setUserScale(widthRatio, widthRatio);
            }
            if (state.game.scale.width < state.game.scale.height) {
                if (this._rotateDeviceGroup != null) {
                    this._rotateDeviceGroup.destroy();
                }
                this._rotateDeviceGroup = new F84.RotateDeviceGroup(state.game);
            }
        };
        Orientation.matchBoundsToGameSize = function () {
            var bounds = F84.Game.Instance.getBounds();
            F84.Game.Instance.world.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
        };
        Orientation.portraitToLandscapePoint = function (game, point) {
            return new Phaser.Point(game.height - point.y, point.x + game.camera.x);
        };
        Orientation._rotateDeviceGroup = null;
        return Orientation;
    }());
    F84.Orientation = Orientation;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Overlay = (function () {
        function Overlay() {
        }
        Overlay.create = function (game, alpha) {
            if (alpha === void 0) { alpha = 0.8; }
            var overlay = game.add.sprite(0, 0, 'whiteSquare');
            overlay.width = game.world.bounds.width;
            overlay.height = game.world.bounds.height;
            overlay.tint = 0x000000;
            overlay.alpha = alpha;
            overlay.inputEnabled = true;
            return overlay;
        };
        return Overlay;
    }());
    F84.Overlay = Overlay;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var SpriteUtils = (function () {
        function SpriteUtils() {
        }
        SpriteUtils.aspectFill = function (sprite, bounds) {
            var x = bounds.width / sprite.width;
            var y = bounds.height / sprite.height;
            var scale = Math.max(x, y);
            sprite.width *= scale;
            sprite.height *= scale;
        };
        SpriteUtils.getAspectFill = function (sprite, bounds) {
            var x = bounds.width / sprite.width;
            var y = bounds.height / sprite.height;
            return Math.max(x, y);
        };
        SpriteUtils.intersects = function (sprite1, sprite2) {
            return !(sprite2.left > sprite1.right
                || sprite2.right < sprite1.left
                || sprite2.top > sprite1.bottom
                || sprite2.bottom < sprite1.top);
        };
        SpriteUtils.queryRect = function (objects, rect) {
            var cols = [];
            for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
                var obj = objects_1[_i];
                var intersect = !(rect.left > obj.right
                    || rect.right < obj.left
                    || rect.top > obj.bottom
                    || rect.bottom < obj.top);
                if (intersect)
                    cols.push(obj);
            }
            return cols;
        };
        return SpriteUtils;
    }());
    F84.SpriteUtils = SpriteUtils;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var TimeFormat = (function () {
        function TimeFormat() {
        }
        TimeFormat.format = function (seconds) {
            var minutes = Math.floor(seconds / 60);
            var remainder = seconds - (60 * minutes);
            var time = ((minutes > 0) ? minutes : '') + ':' + (remainder < 10 ? '0' : '') + remainder;
            return time;
        };
        return TimeFormat;
    }());
    F84.TimeFormat = TimeFormat;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var TimerList = (function () {
        function TimerList() {
        }
        TimerList.add = function (timer) {
            this.timers.push(timer);
        };
        TimerList.remove = function (timer) {
            F84.ArrayUtils.remove(this.timers, timer);
        };
        TimerList.timers = [];
        return TimerList;
    }());
    F84.TimerList = TimerList;
    var Timer = (function (_super) {
        __extends(Timer, _super);
        function Timer(game, autoDestroy) {
            var _this = _super.call(this, game, autoDestroy) || this;
            TimerList.add(_this);
            return _this;
        }
        Timer.prototype.destroy = function () {
            TimerList.remove(this);
            _super.prototype.destroy.call(this);
        };
        return Timer;
    }(Phaser.Timer));
    Phaser.Timer = Timer;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Timescale = (function () {
        function Timescale(game, baseFPS, timescale) {
            if (timescale === void 0) { timescale = 1; }
            this.game = game;
            this.baseFPS = baseFPS;
            this.timescale = timescale;
            this.update();
        }
        Timescale.prototype.setTimescale = function (scale) {
            this.timescale = scale;
            this.update();
        };
        Timescale.prototype.setBaseFPS = function (fps) {
            this.baseFPS = fps;
            this.update();
        };
        Timescale.prototype.update = function () {
            this.game.time.slowMotion = 1 / this.timescale;
            this.game.time.desiredFps = this.baseFPS / this.timescale;
        };
        return Timescale;
    }());
    F84.Timescale = Timescale;
})(F84 || (F84 = {}));
//# sourceMappingURL=game.js.map