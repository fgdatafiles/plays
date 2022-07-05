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
            this.load.json('chunks', './assets/json/chunks.json');
            this.load.image('rotateDevice', './assets/images/system/orientation.png');
            this.load.image('loadBG', './assets/images/ui/bb-80-loading-bg.png');
            this.load.image('splashLogo', './locale/' + 'en-us' + '/bb-80-splash-game-logo.png');
            this.load.image('loadBar', './assets/images/ui/bb-80-loading-meter.png');
            this.load.image('loadFill', './assets/images/ui/bb-80-loading-meter-fill.png');
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
            _this.playerData = new F84.PlayerData("BugsBunnyHopper");
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
            _this.state.add('Shop', F84.Shop);
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
        GameColors.ORANGE = "#ffaa00";
        GameColors.BROWN = "#746356";
        GameColors.TAN = "#fcf8e6";
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
            this.game.sound.play('sfxButtonClick');
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
            this.game.sound.play('sfxButtonClick');
            this.game.state.start('GameState', true, false, this.level);
        };
        LevelCompletePopup.prototype.continue = function () {
            this.game.sound.play('sfxButtonClick');
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
        function LevelFailPopup(game, state, score, carrots) {
            var _this = _super.call(this, game) || this;
            _this.fixedToCamera = true;
            _this.state = state;
            _this.y = F84.GameState.Instance.camController.bounds.top;
            var newHighScore = false;
            var saveData = F84.PlayerData.Instance.saveData;
            if (score > saveData.highScore) {
                saveData.highScore = score;
                F84.PlayerData.Instance.save();
                newHighScore = true;
            }
            var overlay = F84.Overlay.create(game, 0.7);
            _this.add(overlay);
            var popupGroup = game.add.group(_this);
            var scale = state.camController.bounds.height / 576;
            if (scale > 1)
                scale = 1;
            popupGroup.scale.set(scale);
            var bg = game.add.sprite(0, 0, 'popupBG', null, popupGroup);
            var bugs = game.add.sprite(0, 0, 'recapBugs', null, _this);
            var header = game.add.image(0, 0, 'recapGameOver', null, popupGroup);
            var leftBox = game.add.image(0, 0, 'popupRect', null, popupGroup);
            var rightBox = game.add.image(0, 0, 'popupRect', null, popupGroup);
            var scoreHeaderStyle = { fill: F84.GameColors.ORANGE, fontSize: 40, font: F84.Fonts.DefaultFont };
            var scoreHeaderText = game.add.text(0, 0, '', scoreHeaderStyle, popupGroup);
            scoreHeaderText.setText(F84.Strings.get('Score'));
            var scoreStyle = { fill: F84.GameColors.TAN, fontSize: 65, font: F84.Fonts.BoldFont };
            var scoreText = game.add.text(0, 0, '', scoreStyle, popupGroup);
            scoreText.setText(score + '');
            scoreText.padding.set(2);
            scoreText.setShadow(2, 2);
            var xStyle = { fill: F84.GameColors.TAN, fontSize: 35, font: F84.Fonts.BoldFont };
            var xText = game.add.text(0, 0, 'x', xStyle, popupGroup);
            xText.padding.set(2);
            xText.setShadow(2, 2);
            var carrotIcon = game.add.image(0, 0, 'recapCarrot', null, popupGroup);
            var carrotsText = game.add.text(0, 0, '', scoreStyle, popupGroup);
            carrotsText.setText(carrots + '');
            carrotsText.padding.set(2);
            carrotsText.setShadow(2, 2);
            var highScoreLabelStyle = { fill: F84.GameColors.BROWN, fontSize: 40, font: F84.Fonts.DefaultFont, align: 'left' };
            var highScoreLabel = game.add.text(0, 0, '', highScoreLabelStyle, popupGroup);
            var str = F84.Strings.get('HighScore');
            if (str.length > 15)
                str = "<font size='36px'>" + str + "</font>";
            highScoreLabel.setText(str);
            var highScoreStyle = { fill: F84.GameColors.BROWN, fontSize: 40, font: F84.Fonts.BoldFont, align: 'left' };
            var highScore = game.add.text(0, 0, F84.PlayerData.Instance.saveData.highScore + ' ', highScoreStyle, popupGroup);
            var arrow = game.add.image(0, 0, 'recapNewHighScore', null, popupGroup);
            arrow.visible = newHighScore;
            var newHighScoreStyle = { fill: F84.GameColors.WHITE, fontSize: 25, font: F84.Fonts.BoldFont, align: 'left' };
            var newText = game.add.text(0, 0, '', newHighScoreStyle, popupGroup);
            newText.setText(F84.Strings.get('NewHighScore'));
            newText.visible = newHighScore;
            var replay = game.add.button(0, 0, 'btnRestart', _this.replay, _this, null, null, null, null, popupGroup);
            F84.GameFactory.addButtonBounce(_this.game, replay);
            var home = game.add.button(0, 0, 'btnBack', _this.continue, _this, null, null, null, null, popupGroup);
            F84.GameFactory.addButtonBounce(_this.game, home);
            var carrotBG = game.add.image(0, 0, 'uiBG', null, popupGroup);
            var totalCarrotsGroup = game.add.group(popupGroup);
            var totalCarrotsStyle = { fill: 'white', fontSize: 36, font: F84.Fonts.BoldFont, align: 'right' };
            var totalCarrotsText = game.add.text(0, 0, '' + F84.PlayerData.Instance.saveData.carrots, totalCarrotsStyle, totalCarrotsGroup);
            totalCarrotsText.setShadow(2, 2);
            var x2Style = { fill: 'white', fontSize: 20, font: F84.Fonts.BoldFont, align: 'center' };
            var x2Text = game.add.text(0, 0, 'x ', x2Style, totalCarrotsGroup);
            x2Text.setShadow(2, 2);
            var totalCarrotsIcon = game.add.image(0, 0, 'uiCarrot', null, totalCarrotsGroup);
            x2Text.alignTo(totalCarrotsText, Phaser.LEFT_CENTER, 0, 7);
            totalCarrotsIcon.alignTo(totalCarrotsText, Phaser.LEFT_CENTER, 20, 0);
            var shop = game.add.button(0, 0, 'btnShop', _this.shop, _this, null, null, null, null, popupGroup);
            F84.GameFactory.addButtonBounce(_this.game, shop);
            var shopAlert = game.add.image(0, 0, 'shopAlert', null, popupGroup);
            shopAlert.visible = F84.Shop.canAffordItem(game);
            var space = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
            space.onDown.add(_this.replay, _this);
            _this._onResize = function () {
                var bounds = new Phaser.Rectangle(0, 0, game.camera.width / game.camera.scale.y, game.camera.height / game.camera.scale.y);
                overlay.width = bounds.width;
                overlay.height = bounds.height;
                overlay.alignIn(bounds, Phaser.CENTER);
                popupGroup.alignIn(bounds, Phaser.CENTER, -33, 24);
                bugs.alignIn(overlay, Phaser.BOTTOM_CENTER, 342, 0);
                header.alignIn(bg, Phaser.TOP_CENTER, -3, 22);
                leftBox.alignIn(bg, Phaser.CENTER, -110 - 5, -42);
                scoreHeaderText.alignIn(leftBox, Phaser.CENTER, 0, -25);
                scoreText.alignIn(leftBox, Phaser.CENTER, 0, 25);
                rightBox.alignIn(bg, Phaser.CENTER, 110 - 5, -42);
                carrotIcon.alignIn(rightBox, Phaser.CENTER, 0, -45);
                carrotsText.alignIn(rightBox, Phaser.CENTER, 6, 25);
                xText.alignTo(carrotsText, Phaser.LEFT_CENTER, 0, 12);
                highScoreLabel.alignIn(bg, Phaser.RIGHT_CENTER, -285, 95);
                highScore.alignIn(bg, Phaser.LEFT_CENTER, -314, 95);
                arrow.alignTo(highScoreLabel, Phaser.LEFT_CENTER, 8, 0);
                newText.alignIn(arrow, Phaser.CENTER, -4, 0);
                replay.alignIn(bg, Phaser.BOTTOM_CENTER, 13, 54);
                shop.alignIn(bg, Phaser.BOTTOM_CENTER, -141, 48);
                shopAlert.alignIn(shop, Phaser.TOP_RIGHT, 10, 10);
                home.alignIn(bg, Phaser.BOTTOM_CENTER, 166, 48);
                carrotBG.alignTo(shop, Phaser.LEFT_CENTER, -20, 3);
                totalCarrotsGroup.alignIn(carrotBG, Phaser.CENTER, -10, 0);
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
            this.game.sound.play('sfxButtonClick');
            this.state.restart();
        };
        LevelFailPopup.prototype.continue = function () {
            this.game.sound.play('sfxButtonClick');
            this.state.exit();
        };
        LevelFailPopup.prototype.shop = function () {
            this.game.sound.play('sfxButtonClick');
            this.state.shop();
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
        };
        LevelSelect.prototype.createLevelButton = function (levelIndex, parent) {
            var group = this.add.group(parent);
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
            this.game.sound.play('sfxButtonClick');
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
            this.game.sound.play('sfxButtonClick');
            this.game.state.start('GameState', true, false, level);
        };
        LevelSelect.prototype.back = function () {
            this.game.sound.play('sfxButtonClick');
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
            this.carrots = 0;
            this.highScore = 0;
            this.ownedPlayers = ['player'];
            this.selectedPlayer = 'player';
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
            loadLogo.scale.set(0.75);
            var loadBar = this.add.sprite(0, 0, 'loadBar');
            var loadFill = this._loadFill = this.add.sprite(0, 0, 'loadFill');
            var loadMask = this._loadMask = this.add.graphics(0, 0);
            loadFill.mask = loadMask;
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(loadBG, _this.world.bounds);
                loadLogo.alignIn(_this.world.bounds, Phaser.CENTER, 0, -27);
                loadBar.alignIn(_this.world.bounds, Phaser.CENTER, 0, 130);
                loadFill.alignIn(loadBar, Phaser.CENTER, 0, 0);
            };
            this.resize();
            this.load.webfont('curse-casual', 'curse-casual');
            this.load.webfont('luckiestguy', 'luckiestguy');
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/', {});
            this.loadImages('./assets/images/temp/', {
                whiteSquare: 'white-square',
                playerA: 'player-a',
                playerB: 'player-b',
                playerC: 'player-c',
                shrub: 'shrub',
                water: 'water',
                mole2: 'mole-2',
                tracks: 'tracks',
                lightOn: 'light-on',
                lightOff: 'light-off',
                arrowButton: 'arrow-button',
            });
            this.loadImages('./assets/images/game/bb-80-', {
                carrot: 'collect-carrot',
                carrotShadow: 'collect-carrot-shadow',
                bush: 'ob-bush-1',
                rock: 'ob-rock-1',
                stump: 'ob-stump',
                tree: 'ob-tree-pine',
                border: 'tile-border-1',
                grass: 'tile-grass',
                grass2: 'tile-grass-2',
                dirt: 'tile-dirt',
                gridOverlay: 'tile-grid-overlay',
                log: 'tile-river-log',
                curtain1: 'curtain-1',
                curtain2: 'curtain-2',
                holeIn: 'tile-hole-in',
                holeOut: 'tile-hole-out',
                rockWeak: 'tile-river-weak-rocks',
                trainTrack: 'tile-train-track',
                train: 'tile-train-cars',
                trainWarningGlow: 'warning-taz-train-glow',
                btnDown: 'btn-mobile-down',
                btnSide: 'btn-mobile-side',
                btnCheck: 'btn-check',
                tutPop: 'tut-pop',
                tutPopMobile: 'tut-pop-mobile',
                headerGreen: 'header-green'
            });
            this.loadImages('./assets/images/game/', {
                'bb-80-tile-river': 'bb-80-tile-river'
            });
            this.loadImages('./assets/images/ui/bb-80-', {
                btnPause: 'hud-btn-pause',
                uiCarrot: 'hud-carrot',
                uiBG: 'hud-score-carrot-bg',
                uiShadow: 'hud-shadow',
                btnShop: 'btn-carrot-store',
                shopAlert: 'btn-carrot-store-alert',
                btnPlay: 'btn-play',
                btnSplashRestart: 'btn-restart',
                btnSound: 'btn-sound',
                btnRestart: 'btn-play-again',
                btnBack: 'btn-home',
                splashBG: 'splash-bg',
                splashBugs: 'splash-bugs',
                splashHighScore: 'splash-high-score-bg',
                splashLogoLT: 'splash-lt-logo',
                popupBG: 'pop-box',
                popupRect: 'pop-box-rectangle',
                recapBugs: 'recap-bugs',
                recapCarrot: 'recap-carrot',
                recapGameOver: 'recap-game-over',
                recapNewHighScore: 'recap-new-high',
                popup: 'pop-box-small',
            });
            this.loadImages('./assets/images/ui/lt-bts-ui-', {
                btnSoundOff: 'popup-btn-sound-off',
                btnSoundOn: 'popup-btn-sound-on',
                btnHelp: 'popup-btn-help',
                btnConfirm: 'popup-btn-confirm',
                btnQuit: 'popup-btn-exit',
                btnHome: 'popup-btn-home',
            });
            this.loadImages('./assets/images/shop/bb-80-store-', {
                shopBox: 'box',
                shopBtnBuy: 'btn-buy',
                shopBtnLocked: 'btn-locked',
                shopBtnSelected: 'btn-selected',
                player2020: 'bugs-2020',
                player2011: 'bugs-2011',
                player1948: 'bugs-1948',
                player1942: 'bugs-1942',
                player1940: 'bugs-1940',
                player1939: 'bugs-1939',
                shopLogo: 'bugs-logo',
                shopOverlay: 'bugs-overlay',
                shopSelected: 'bugs-selected',
            });
            this.loadImages('./assets/images/story/bb-80-story-', {
                storyBugs: 'bugs',
                storyPaper: 'paper',
                storyTaz: 'taz',
                storyBox: 'text-box',
            });
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/', {});
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/images/', {});
            this.load.json('gameConfig', './assets/json/game-config.json');
            this.load.json('tutorials', './assets/json/tutorials.json');
            this.load.json("tileset", './assets/json/bugs_tileset.json');
            this.load.json("players", './assets/json/players.json');
            var chunkData = this.cache.getJSON('chunks');
            var groups = chunkData.groups;
            for (var type in groups) {
                for (var _i = 0, _a = groups[type].chunks; _i < _a.length; _i++) {
                    var name_1 = _a[_i];
                    this.load.json("chunk_" + name_1, './assets/json/chunks/' + name_1 + '.json');
                }
            }
            this.loadAudio('./assets/audio/', {
                'menuMusic': 'music_look_busy',
                'gameplayMusic': 'music_pixelland',
                'sfxRiverLoop': 'sfx_river_loop',
                'sfxTrainLoop': 'sfx_train_loop',
                'sfxTrainHornLoop': 'sfx_train_horn_loop',
                'sfxMoleAppear': 'sfx_mole_appear',
                'sfxCarrotCollect': 'sfx_carrot_collect',
                'sfxFootstep1': 'sfx_footstep_1',
                'sfxFootstep2': 'sfx_footstep_2',
                'sfxFootstep3': 'sfx_footstep_3',
                'sfxFootstep4': 'sfx_footstep_4',
                'sfxTazLoop': 'sfx_taz_loop',
                'sfxTazVo': 'sfx_taz_vo',
                'sfxRockCollapse': 'sfx_rock_collapse',
                'sfxButtonClick': 'sfx_button_click',
                'sfxCharacterPurchased': 'sfx_character_purchased',
                'sfxRailroadCrossing': 'sfx_railroad_crossing'
            });
            this.loadAnimation('player', './assets/images/game/', 'bugs-anim', 'bugs-anim');
            this.loadAnimation('playerA', './assets/images/game/', 'bugs-2011-anim', 'bugs-2011-anim');
            this.loadAnimation('playerB', './assets/images/game/', 'bugs-1948-anim', 'bugs-1948-anim');
            this.loadAnimation('playerC', './assets/images/game/', 'bugs-1942-anim', 'bugs-1942-anim');
            this.loadAnimation('playerD', './assets/images/game/', 'bugs-1940-anim', 'bugs-1940-anim');
            this.loadAnimation('sparkle', './assets/images/game/', 'sparkle', 'sparkle');
            this.loadAnimation('taz', './assets/images/game/', 'taz', 'taz');
            this.loadAnimation('mole', './assets/images/game/', 'mole-anim', 'mole-anim');
            this.loadAnimation('trainWarning', './assets/images/game/', 'train-warning', 'train-warning');
            this.loadAnimation('trainSmoke', './assets/images/game/', 'train-smoke', 'train-smoke');
        };
        Preloader.prototype.loadImages = function (prefix, map, suffix) {
            if (suffix === void 0) { suffix = '.png'; }
            for (var name_2 in map) {
                this.load.image(name_2, prefix + map[name_2] + suffix);
            }
        };
        Preloader.prototype.loadImagesVerbatim = function (prefix, names, suffix) {
            if (suffix === void 0) { suffix = '.png'; }
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name_3 = names_1[_i];
                this.load.image(name_3, prefix + name_3 + suffix);
            }
        };
        Preloader.prototype.loadAnimation = function (name, path, img, json) {
            this.load.atlasJSONHash(name, path + img + '.png', path + json + '.json');
        };
        Preloader.prototype.loadAudio = function (prefix, map, suffix) {
            if (suffix === void 0) { suffix = '.ogg'; }
            if (this._audioKeys == null)
                this._audioKeys = [];
            for (var name_4 in map) {
                this.load.audio(name_4, [prefix + map[name_4] + '.mp3']);
                this._audioKeys.push(name_4);
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
            F84.Music.pauseMusic();
            _this.game.input.enabled = false;
            var graphics = _this.game.add.graphics(0, 0, _this);
            graphics.beginFill(0x000000, 1);
            graphics.drawRect(0, 0, F84.Game.Instance.width, F84.Game.Instance.height);
            graphics.endFill();
            var rotateImage = _this.game.add.image(0, 0, 'rotateDevice', null, _this);
            var scale = F84.Game.Instance.width / rotateImage.width;
            rotateImage.width *= scale;
            rotateImage.height *= scale;
            rotateImage.alignIn(_this.game.scale.bounds, Phaser.CENTER);
            _this.game.scale.onSizeChange.add(function () {
                if (F84.Game.Instance.width > F84.Game.Instance.height) {
                    _this.destroy(true, false);
                    F84.Music.resumeMusic();
                }
            }, _this);
            return _this;
        }
        RotateDeviceGroup.prototype.update = function () {
            _super.prototype.update.call(this);
            this.game.world.bringToTop(this);
            if (F84.Game.Instance.width > F84.Game.Instance.height) {
                this.destroy(true, false);
                F84.Music.resumeMusic();
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
    var Shop = (function (_super) {
        __extends(Shop, _super);
        function Shop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Shop.prototype.create = function () {
            var _this = this;
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            F84.Music.switchMusic(this.game, 'menuMusic');
            var background = this.add.sprite(0, 0, 'splashBG');
            var overlay = this.add.sprite(0, 0, 'whiteSquare');
            overlay.tint = 0;
            overlay.alpha = 0.7;
            var box = this.add.sprite(0, 0, 'shopBox', null);
            box.anchor.set(0.5);
            this.itemParent = this.add.group();
            box.addChild(this.itemParent);
            this.items = null;
            this.createItems();
            var logo = this.add.image(0, 0, 'shopLogo');
            var backButton = this.add.button(0, 0, 'btnQuit', this.back, this);
            backButton.anchor.set(0.5, 0.5);
            F84.GameFactory.addButtonBounce(this.game, backButton);
            var carrotBG = this.add.image(0, 0, 'uiBG');
            var carrotsGroup = this.add.group();
            var carrotStyle = { fill: 'white', fontSize: 36, font: F84.Fonts.BoldFont, align: 'right' };
            var carrotText = this.carrotText = this.add.text(0, 0, '' + F84.PlayerData.Instance.saveData.carrots, carrotStyle, carrotsGroup);
            carrotText.setShadow(2, 2);
            var xStyle = { fill: 'white', fontSize: 20, font: F84.Fonts.BoldFont, align: 'center' };
            var xText = this.add.text(0, 0, 'x ', xStyle, carrotsGroup);
            xText.setShadow(2, 2);
            var carrotIcon = this.add.image(0, 0, 'uiCarrot', null, carrotsGroup);
            xText.alignTo(carrotText, Phaser.LEFT_CENTER, 0, 7);
            carrotIcon.alignTo(carrotText, Phaser.LEFT_CENTER, 20, 0);
            var headerStyle = { fill: 'white', fontSize: 40, font: F84.Fonts.BoldFont };
            var headerText = this.add.text(0, 0, F84.Strings.get('ShopHeader'), headerStyle);
            var subHeaderStyle = { fill: F84.GameColors.ORANGE, fontSize: 28, font: F84.Fonts.DefaultFont, align: 'center' };
            var subHeaderText = this.add.text(0, 0, '', subHeaderStyle);
            subHeaderText.lineSpacing = -10;
            subHeaderText.setText(F84.Strings.get('ShopSubHeader'));
            this._onResize = function () {
                var width = Math.min(_this.world.bounds.width, 1024);
                var bounds = new Phaser.Rectangle(_this.world.bounds.centerX - width / 2, _this.world.bounds.top, width, 576);
                var scale = Math.min(_this.world.bounds.width / 1024, 1);
                box.scale.set(scale);
                logo.scale.set(scale);
                backButton.scale.set(scale);
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                background.alignIn(_this.world.bounds, Phaser.CENTER);
                overlay.width = _this.world.bounds.width;
                overlay.height = _this.world.bounds.height;
                box.alignIn(_this.world.bounds, Phaser.CENTER, 0, 35);
                for (var i = 0; i < _this.items.length; i++) {
                    var x = ((i % 3) - 1) * 262;
                    var y = (i < 3) ? -105 : 105;
                    if (y > 0)
                        x += 262 / 2;
                    var group = _this.items[i];
                    group.x = x;
                    group.y = y;
                }
                logo.alignIn(box, Phaser.TOP_LEFT, 20, 70);
                backButton.alignIn(box, Phaser.TOP_RIGHT, 30, 30);
                carrotBG.alignIn(bounds, Phaser.TOP_RIGHT, -20, -8);
                carrotsGroup.alignIn(carrotBG, Phaser.CENTER, -10, 0);
                headerText.alignIn(_this.world.bounds, Phaser.TOP_CENTER, 0, -8);
                subHeaderText.alignIn(_this.world.bounds, Phaser.TOP_CENTER, 0, -52);
            };
            this.resize();
        };
        Shop.prototype.createItems = function () {
            var resize = true;
            if (this.items == null) {
                this.items = [];
                resize = false;
            }
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var group = _a[_i];
                group.destroy();
            }
            this.items = [];
            var players = this.cache.getJSON('players');
            for (var _b = 0, players_1 = players; _b < players_1.length; _b++) {
                var player = players_1[_b];
                var group = this.createItem(player);
                this.itemParent.add(group);
                this.items.push(group);
            }
            if (resize)
                this.resize();
        };
        Shop.prototype.createItem = function (player) {
            var _this = this;
            var saveData = F84.PlayerData.Instance.saveData;
            var group = this.add.group();
            var bg = this.add.button(0, 0, player.thumb, function () { return _this.buy(player); });
            bg.anchor.set(0.5);
            group.add(bg);
            var owned = saveData.ownedPlayers.find(function (p) { return p == player.image; }) != null;
            var selected = saveData.selectedPlayer == player.image;
            var canAfford = saveData.carrots >= player.price;
            if (!owned) {
                var buttonImg = 'shopBtnBuy';
                if (!canAfford)
                    buttonImg = 'shopBtnLocked';
                if (!canAfford) {
                    var overlay = this.add.image(0, 0, 'shopOverlay', null, group);
                    overlay.alignIn(bg, Phaser.CENTER);
                }
                var buyButton = this.add.button(0, 0, buttonImg, function () { return _this.buy(player); });
                group.add(buyButton);
                buyButton.width = 150;
                buyButton.height = 50;
                buyButton.tint = 0xEEEEEE;
                buyButton.alignIn(bg, Phaser.BOTTOM_CENTER, 0, 0);
                var priceStyle = { fill: F84.GameColors.WHITE, fontSize: selected ? 26 : 30, font: F84.Fonts.BoldFont };
                var priceText = this.add.text(0, 0, player.price + '', priceStyle, group);
                var icon = this.add.image(0, 0, 'uiCarrot', null, group);
                icon.scale.set(0.75);
                priceText.alignIn(buyButton, Phaser.LEFT_CENTER, -65, 0);
                icon.alignIn(buyButton, Phaser.CENTER, -35, -3);
            }
            if (selected) {
                var overlay = this.add.image(0, 0, 'shopSelected', null, group);
                overlay.alignIn(bg, Phaser.CENTER);
            }
            return group;
        };
        Shop.prototype.select = function (player) {
            var saveData = F84.PlayerData.Instance.saveData;
            if (saveData.ownedPlayers.find(function (p) { return p == player.image; })) {
                saveData.selectedPlayer = player.image;
                F84.PlayerData.Instance.save();
                this.createItems();
            }
        };
        Shop.prototype.buy = function (player) {
            var saveData = F84.PlayerData.Instance.saveData;
            var owned = saveData.ownedPlayers.find(function (p) { return p == player.image; }) != null;
            if (owned) {
                this.game.sound.play('sfxButtonClick');
                this.select(player);
            }
            if (saveData.carrots >= player.price && !owned) {
                this.game.sound.play('sfxCharacterPurchased');
                saveData.carrots -= player.price;
                this.carrotText.text = '' + F84.PlayerData.Instance.saveData.carrots;
                saveData.ownedPlayers.push(player.image);
                this.select(player);
            }
        };
        Shop.prototype.resize = function () {
            this._onResize();
        };
        Shop.prototype.back = function () {
            this.game.sound.play('sfxButtonClick');
            this.game.state.start('SplashScreen');
        };
        Shop.canAffordItem = function (game) {
            var result = false;
            var players = game.cache.getJSON('players');
            var saveData = F84.PlayerData.Instance.saveData;
            var _loop_1 = function (player) {
                var owned = saveData.ownedPlayers.find(function (p) { return p == player.image; }) != null;
                var canAfford = saveData.carrots >= player.price;
                if (!owned && canAfford)
                    result = true;
            };
            for (var _i = 0, players_2 = players; _i < players_2.length; _i++) {
                var player = players_2[_i];
                _loop_1(player);
            }
            return result;
        };
        return Shop;
    }(F84.ResizableState));
    F84.Shop = Shop;
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
            var highScoreBG = this.add.image(0, 0, 'splashHighScore', null);
            var highScoreLabelStyle = { fill: F84.GameColors.BROWN, fontSize: 32, font: F84.Fonts.DefaultFont, align: 'left' };
            var highScoreLabel = this.add.text(0, 0, '', highScoreLabelStyle);
            var str = F84.Strings.get('HighScore');
            if (str.length > 15)
                str = "<font size='26px'>" + str + "</font>";
            highScoreLabel.setText(str);
            var highScoreStyle = { fill: F84.GameColors.BROWN, fontSize: 40, font: F84.Fonts.BoldFont, align: 'left' };
            var highScore = this.add.text(0, 0, F84.PlayerData.Instance.saveData.highScore + ' ', highScoreStyle);
            var splashLogo = this.add.image(0, 0, 'splashLogo', null);
            var bugs = this.add.image(0, 0, 'splashBugs', null);
            var playButton = this.add.button(0, 0, 'btnPlay', this.play, this);
            playButton.anchor.set(0.5, 0.5);
            F84.GameFactory.addButtonBounce(this.game, playButton);
            var carrotBG = this.add.image(0, 0, 'uiBG');
            var shopButton = this.add.button(0, 0, 'btnShop', this.shop, this);
            shopButton.anchor.set(0.5, 0.5);
            F84.GameFactory.addButtonBounce(this.game, shopButton);
            var shopAlert = this.add.image(0, 0, 'shopAlert');
            shopAlert.visible = F84.Shop.canAffordItem(this.game);
            var carrotsGroup = this.add.group();
            var carrotStyle = { fill: 'white', fontSize: 36, font: F84.Fonts.BoldFont, align: 'right' };
            var carrotText = this.add.text(0, 0, '' + F84.PlayerData.Instance.saveData.carrots, carrotStyle, carrotsGroup);
            carrotText.setShadow(2, 2);
            var xStyle = { fill: 'white', fontSize: 20, font: F84.Fonts.BoldFont, align: 'center' };
            var xText = this.add.text(0, 0, 'x ', xStyle, carrotsGroup);
            xText.setShadow(2, 2);
            var carrotIcon = this.add.image(0, 0, 'uiCarrot', null, carrotsGroup);
            xText.alignTo(carrotText, Phaser.LEFT_CENTER, 0, 7);
            carrotIcon.alignTo(carrotText, Phaser.LEFT_CENTER, 20, 0);
            var resetButton;
            if (F84.PlayerData.Instance.saveData.gameStarted) {
                resetButton = this.add.button(-170, -20, 'btnSplashRestart', this.reset, this);
                F84.GameFactory.addButtonBounce(this.game, resetButton);
            }
            var key = 'btnSound';
            var volumeButton = this.add.button(0, 0, key, function () {
                _this.game.sound.mute = !_this.game.sound.mute;
                volumeButton.alpha = (_this.game.sound.mute) ? 0.6 : 1;
                _this.game.sound.play('sfxButtonClick');
            });
            volumeButton.alpha = (this.game.sound.mute) ? 0.6 : 1;
            F84.GameFactory.addButtonBounce(this.game, volumeButton);
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                background.alignIn(_this.world.bounds, Phaser.CENTER);
                var width = Math.min(_this.world.bounds.width, 1024);
                var bounds = new Phaser.Rectangle(_this.world.bounds.centerX - width / 2, _this.world.bounds.top, width, 576);
                highScoreBG.alignIn(_this.world.bounds, Phaser.CENTER, 180, 110);
                highScoreLabel.alignIn(highScoreBG, Phaser.RIGHT_CENTER, -134, 10);
                highScore.alignIn(highScoreBG, Phaser.LEFT_CENTER, -160, 8);
                splashLogo.alignIn(_this.world.bounds, Phaser.CENTER, 180, -85);
                bugs.alignIn(_this.world.bounds, Phaser.CENTER, -180, -40);
                playButton.alignIn(bounds, Phaser.BOTTOM_RIGHT, -18, -15);
                shopButton.alignIn(bounds, Phaser.BOTTOM_RIGHT, -180, -15);
                shopAlert.alignIn(shopButton, Phaser.TOP_RIGHT, 10, 10);
                carrotBG.alignTo(shopButton, Phaser.LEFT_CENTER, -20, 0);
                carrotsGroup.alignIn(carrotBG, Phaser.CENTER, -10, 0);
                if (resetButton)
                    resetButton.alignIn(bounds, Phaser.BOTTOM_LEFT, -22, -16);
                volumeButton.alignIn(bounds, Phaser.TOP_LEFT, -18, -18);
            };
            this.resize();
        };
        SplashScreen.prototype.resize = function () {
            this._onResize();
        };
        SplashScreen.prototype.play = function () {
            this.game.sound.play('sfxButtonClick');
            if (!F84.PlayerData.Instance.saveData.gameStarted) {
                this.game.state.start('StoryIntro');
                F84.PlayerData.Instance.saveData.gameStarted = true;
                F84.PlayerData.Instance.save();
            }
            else {
                this.game.state.start('GameState');
            }
        };
        SplashScreen.prototype.shop = function () {
            this.game.sound.play('sfxButtonClick');
            this.game.state.start('Shop');
        };
        SplashScreen.prototype.reset = function () {
            var _this = this;
            this.game.sound.play('sfxButtonClick');
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
            _this.storyBeats = 0;
            return _this;
        }
        StoryIntro.prototype.create = function () {
            var _this = this;
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            this.index = 0;
            var background = this.add.sprite(0, 0, 'splashBG');
            var overlay = this.overlay = F84.Overlay.create(this.game, 0.3);
            var taz = this.taz = this.add.sprite(0, 0, 'storyTaz');
            var bugs = this.bugs = this.add.sprite(0, 0, 'storyBugs');
            var boxGroup = this.side = this.add.group();
            var bg = this.add.sprite(0, 0, 'storyPaper', null, boxGroup);
            var box = this.add.sprite(0, 0, 'storyBox', null, boxGroup);
            box.alignIn(bg, Phaser.CENTER, 0, 0);
            var playButton = this.add.button(0, 0, 'btnPlay', this.next, this, null, null, null, null, boxGroup);
            F84.GameFactory.addButtonBounce(this.game, playButton);
            var header = this.add.image(0, 0, 'splashLogo', null, boxGroup);
            header.scale.set(0.42);
            header.alignIn(box, Phaser.TOP_CENTER, 0, 65);
            var style = { fill: 'white', fontSize: 30, font: F84.Fonts.DefaultFont, wordWrap: true, wordWrapWidth: 360, align: 'center', boundsAlignH: 'center' };
            var text = this.textfield = this.add.text(0, 0, '', style, boxGroup);
            text.setText(F84.Strings.get('StoryText'));
            if (F84.Game.Instance.locale == "ja-ja" || F84.Game.Instance.locale == "zh-cn")
                text.useAdvancedWrap = true;
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                background.alignIn(_this.world.bounds, Phaser.CENTER);
                overlay.alignIn(_this.world.bounds, Phaser.CENTER);
                var scaleFactor = Math.min(1, F84.Game.Instance.scale.scaleFactor.y);
                boxGroup.scale.set(scaleFactor, scaleFactor);
                bugs.alignIn(_this.world.bounds, Phaser.LEFT_CENTER, 20, 0);
                taz.alignIn(_this.world.bounds, Phaser.LEFT_CENTER, 0, 0);
                boxGroup.alignIn(_this.world.bounds, Phaser.RIGHT_CENTER, 0, 0);
                _this.textfield.alignIn(bg, Phaser.CENTER, 0, 5);
                playButton.alignIn(bg, Phaser.BOTTOM_CENTER, 0, -5);
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
            this.bugs.alpha = 1;
            this.bugs.angle = 0;
            this.textfield.alpha = 1;
            this.add.tween(this.bugs).from({ alpha: 0, x: -300 }, 250, Phaser.Easing.Quadratic.Out, true);
            this.add.tween(this.taz).from({ alpha: 0, x: -300 }, 250, Phaser.Easing.Quadratic.Out, true);
            this.add.tween(this.textfield).from({ alpha: 0 }, 250, Phaser.Easing.Quadratic.Out, true);
            this.add.tween(this.overlay).from({ alpha: 0 }, 250, Phaser.Easing.Quadratic.Out, true);
            this.add.tween(this.side).from({ x: this.side.x + 200 }, 250, Phaser.Easing.Quadratic.Out, true);
        };
        StoryIntro.prototype.next = function () {
            this.game.sound.play('sfxButtonClick');
            this.index++;
            if (this.index <= this.storyBeats) {
                this.bugs.loadTexture('storyImage' + (this.index + 1));
                this.runTweens();
                this.textfield.setText(F84.Strings.get('StoryText' + (this.index + 1)));
                this.resize();
            }
            else {
                this.game.state.start('GameState');
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
            _this.fixedToCamera = true;
            F84.UIScale.scaleWithCamera(_this, game.camera);
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
            var logo = _this._logo = game.add.image(0, 0, 'splashLogo', null, _this._popupGroup);
            logo.scale.set(0.4);
            _this._message = _this.game.add.text(0, 0, config.messageText, { fill: F84.GameColors.BROWN, fontSize: 32, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 400, align: "center" }, _this._popupGroup);
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
            this._popupGroup.alignIn(this._overlay, Phaser.CENTER, 0, -20);
            this._logo.alignIn(this._background, Phaser.TOP_CENTER, 0, 100);
            this._message.alignIn(this._background, Phaser.CENTER, 0, -12);
            this._yesButton.alignIn(this._background, Phaser.CENTER, 75, 140);
            this._noButton.alignIn(this._background, Phaser.CENTER, -75, 140);
        };
        YesNoDialogueGroup.prototype.noButtonPressed = function () {
            this.game.sound.play('sfxButtonClick');
            if (this._onNo) {
                this._onNo();
            }
            this.destroy();
        };
        YesNoDialogueGroup.prototype.yesButtonPressed = function () {
            this.game.sound.play('sfxButtonClick');
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
    var AudioListener = (function (_super) {
        __extends(AudioListener, _super);
        function AudioListener(worldObject, asChild) {
            if (asChild === void 0) { asChild = true; }
            var _this = _super.call(this, worldObject.game, 0, 0) || this;
            _this._worldObject = worldObject;
            _this._asChild = asChild;
            _this._audioSources = new Array();
            if (AudioListener._instance != null) {
                AudioListener._instance.destroy();
            }
            AudioListener._instance = _this;
            if (_this._asChild) {
                _this._worldObject.addChild(_this);
                _this.position.set(0, 0);
            }
            return _this;
        }
        AudioListener.getInstance = function () { return this._instance; };
        AudioListener.prototype.add = function (audioSource) {
            if (this._audioSources.indexOf(audioSource) == -1) {
                this._audioSources.push(audioSource);
                audioSource.events.onDestroy.add(this.onAudioSourceDestroyed, this, 0, audioSource);
            }
        };
        AudioListener.prototype.remove = function (audioSource) {
            var index = this._audioSources.indexOf(audioSource);
            if (index != -1) {
                this._audioSources.splice(index, 1);
            }
        };
        AudioListener.prototype.onAudioSourceDestroyed = function (audioSource) {
            audioSource.events.onDestroy.remove(this.onAudioSourceDestroyed, this);
            this.remove(audioSource);
        };
        AudioListener.prototype.update = function () {
            _super.prototype.update.call(this);
            if (this._paused)
                return;
            if (this._asChild == false) {
                if (this._worldObject == null) {
                    this.destroy();
                    return;
                }
                this.worldPosition = this._worldObject.position;
            }
            var highlanders = {};
            var numSources = this._audioSources.length;
            for (var i = 0; i < numSources; i++) {
                var audioSource = this._audioSources[i];
                if (audioSource.getHighlander()) {
                    if (highlanders[audioSource.getSoundKey()] == null) {
                        highlanders[audioSource.getSoundKey()] = new Array();
                    }
                    highlanders[audioSource.getSoundKey()].push(audioSource);
                }
                var distance = audioSource.getDistance(this.worldPosition);
                var rolloff = audioSource.getRolloff();
                if (rolloff > 0) {
                    if (distance <= rolloff) {
                        var percent = this.linearEase(1.0 - distance / rolloff, 0.0, 1.0, 1.0);
                        audioSource.setVolumePercent(percent);
                    }
                    else {
                        audioSource.setVolumePercent(0.0);
                    }
                }
                else {
                    audioSource.setVolumePercent(1.0);
                }
            }
            for (var key in highlanders) {
                var sources = highlanders[key];
                sources.sort(function (a, b) {
                    if (a.getVolume() > b.getVolume())
                        return -1;
                    if (a.getVolume() < b.getVolume())
                        return 1;
                    return 0;
                });
                for (var i = 0; i < sources.length; i++) {
                    if (i != 0) {
                        sources[i].setVolumePercent(0);
                    }
                }
            }
        };
        AudioListener.prototype.pause = function () {
            this._paused = true;
            var numSources = this._audioSources.length;
            for (var i = 0; i < numSources; i++) {
                this._audioSources[i].setVolumePercent(0);
            }
        };
        AudioListener.prototype.unpause = function () {
            this._paused = false;
        };
        AudioListener.prototype.destroy = function () {
            this._worldObject = null;
            if (AudioListener._instance == this) {
                AudioListener._instance = null;
            }
        };
        AudioListener.prototype.linearEase = function (t, b, c, d) {
            return b + (c * (t / d));
        };
        return AudioListener;
    }(Phaser.Sprite));
    F84.AudioListener = AudioListener;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var AudioSourceDistanceMethod;
    (function (AudioSourceDistanceMethod) {
        AudioSourceDistanceMethod[AudioSourceDistanceMethod["XY"] = 0] = "XY";
        AudioSourceDistanceMethod[AudioSourceDistanceMethod["X"] = 1] = "X";
        AudioSourceDistanceMethod[AudioSourceDistanceMethod["Y"] = 2] = "Y";
    })(AudioSourceDistanceMethod = F84.AudioSourceDistanceMethod || (F84.AudioSourceDistanceMethod = {}));
    var AudioSource = (function (_super) {
        __extends(AudioSource, _super);
        function AudioSource(worldObject, asChild, rolloff, maxVolume, distanceMethod, highlander) {
            if (asChild === void 0) { asChild = true; }
            if (rolloff === void 0) { rolloff = 0; }
            if (maxVolume === void 0) { maxVolume = 1; }
            if (distanceMethod === void 0) { distanceMethod = AudioSourceDistanceMethod.XY; }
            if (highlander === void 0) { highlander = false; }
            var _this = _super.call(this, worldObject.game, 0, 0) || this;
            _this._volume = 1.0;
            _this._worldObject = worldObject;
            _this._asChild = asChild;
            _this._rolloff = rolloff;
            _this._maxVolume = maxVolume;
            _this._distanceMethod = distanceMethod;
            _this._highlander = highlander;
            if (_this._asChild) {
                _this._worldObject.addChild(_this);
                _this.position.set(0, 0);
            }
            return _this;
        }
        AudioSource.prototype.setMaxVolume = function (value) { this._maxVolume = value; };
        AudioSource.prototype.getMaxVolume = function () { return this._maxVolume; };
        AudioSource.prototype.getVolume = function () { return this._volume; };
        AudioSource.prototype.getRolloff = function () { return this._rolloff; };
        AudioSource.prototype.getSoundKey = function () {
            return this._sound.key;
        };
        AudioSource.prototype.getHighlander = function () { return this._highlander; };
        AudioSource.prototype.getDistance = function (worldPoint) {
            switch (this._distanceMethod) {
                case AudioSourceDistanceMethod.XY:
                    return Phaser.Point.distance(this.worldPosition, worldPoint);
                case AudioSourceDistanceMethod.X:
                    return Math.abs(this.worldPosition.x - worldPoint.x);
                case AudioSourceDistanceMethod.Y:
                    return Math.abs(this.worldPosition.y - worldPoint.y);
            }
        };
        AudioSource.prototype.update = function () {
            _super.prototype.update.call(this);
            if (this._asChild == false) {
                if (this._worldObject == null) {
                    this.destroy();
                    return;
                }
                this.worldPosition = this._worldObject.position;
            }
        };
        AudioSource.prototype.playSound = function (key, loop) {
            if (F84.AudioListener.getInstance() == null) {
                console.log("No instance of Audio Listener exists");
                return;
            }
            F84.AudioListener.getInstance().add(this);
            if (this._sound != null) {
                this.stop(true);
            }
            this._sound = this.game.state.getCurrentState().add.sound(key, 0.0, loop);
            this._sound.play();
        };
        AudioSource.prototype.setVolumePercent = function (value) {
            this.setVolume(this._maxVolume * value);
        };
        AudioSource.prototype.setVolume = function (value) {
            this._volume = value;
            if (this._sound != null) {
                this._sound.volume = this._volume;
            }
        };
        AudioSource.prototype.stop = function (destroy) {
            if (destroy === void 0) { destroy = false; }
            if (this._sound != null) {
                this._sound.stop();
                this._sound.destroy();
            }
        };
        AudioSource.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.stop(true);
        };
        return AudioSource;
    }(Phaser.Sprite));
    F84.AudioSource = AudioSource;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(game, state, data) {
            var _this = _super.call(this, game, data.x, data.y, data.image) || this;
            _this.name = "gameObject";
            _this.layer = "sort";
            _this.destroyOffscreen = true;
            _this.state = state;
            if (data.width)
                _this.width = data.width;
            if (data.height)
                _this.height = data.height;
            _this.layer = data.layer ? data.layer : "sort";
            return _this;
        }
        GameObject.prototype.enableBody = function (w, h, ox, oy) {
            if (w === void 0) { w = this.width; }
            if (h === void 0) { h = this.height; }
            if (ox === void 0) { ox = 0; }
            if (oy === void 0) { oy = 0; }
            this.game.physics.enable(this, Phaser.Physics.ARCADE, true);
            this.body.setSize(w, h, ox, oy);
        };
        GameObject.prototype.sortPoint = function () {
            return this.bottom;
        };
        GameObject.create = function (game, state, data) {
            return new GameObject(game, state, data);
        };
        GameObject.prototype.getBodyBounds = function () {
            return {
                left: this.x + this.body.offset.x,
                right: this.x + this.body.offset.x + this.body.width,
                top: this.y + this.body.offset.y,
                bottom: this.y + this.body.offset.y + this.body.height
            };
        };
        GameObject.createData = function (obj, chunk, chunkID) {
            var left = obj.x;
            var top = obj.y;
            var width = obj.width;
            var height = obj.height;
            if (obj.gid != null) {
                var bottom = obj.y;
                top = bottom - obj.height;
            }
            else {
                width = obj.width;
                height = obj.height;
            }
            var linkedObjects = [];
            if (obj.name != null && obj.name != "") {
                for (var _i = 0, _a = chunk.layers; _i < _a.length; _i++) {
                    var layer = _a[_i];
                    if (layer.type == "objectgroup") {
                        for (var _b = 0, _c = layer.objects; _b < _c.length; _b++) {
                            var obj2 = _c[_b];
                            if (obj.name == obj2.name && obj != obj2) {
                                linkedObjects.push(obj2);
                            }
                        }
                    }
                }
            }
            var data = {
                x: left, y: top,
                width: width, height: height,
                mapObject: obj, id: chunkID + "-" + obj.name
            };
            return data;
        };
        return GameObject;
    }(Phaser.Sprite));
    F84.GameObject = GameObject;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var BackgroundSpawner = (function () {
        function BackgroundSpawner(game, state, cam) {
            this.bottom = 0;
            this.gridBottom = 0;
            this.gridRow = 0;
            this.game = game;
            this.state = state;
            this.cam = cam;
            this.addChunk();
            while (this.cam.bounds.bottom > this.gridBottom)
                this.addGridRow();
        }
        BackgroundSpawner.prototype.update = function () {
            if (this.cam.bounds.bottom > this.bottom - 50) {
                this.addChunk();
            }
            while (this.cam.bounds.bottom > this.gridBottom)
                this.addGridRow();
        };
        BackgroundSpawner.prototype.addChunk = function () {
            var bg = new Background(this.game, this.state, this.bottom);
            bg.height += 2;
            this.state.addGameObject(bg);
            this.bottom += bg.height;
        };
        BackgroundSpawner.prototype.addGridRow = function () {
            var height = 0;
            for (var i = 0; i < 12; i++) {
                if ((i + this.gridRow) % 2 == 0) {
                    var x = F84.GameState.gridOffset + (F84.GameState.tileSize * i);
                    var overlay = new GridOverlay(this.game, this.state, x, this.gridBottom);
                    this.state.addGameObject(overlay);
                    height = overlay.height;
                }
            }
            this.gridBottom += height;
            this.gridRow++;
        };
        return BackgroundSpawner;
    }());
    F84.BackgroundSpawner = BackgroundSpawner;
    var Background = (function (_super) {
        __extends(Background, _super);
        function Background(game, state, y) {
            var _this = this;
            var img = game.rnd.pick(['grass', 'grass2']);
            var data = {
                x: 0, y: y, image: img, layer: 'background'
            };
            _this = _super.call(this, game, state, data) || this;
            return _this;
        }
        return Background;
    }(F84.GameObject));
    var GridOverlay = (function (_super) {
        __extends(GridOverlay, _super);
        function GridOverlay(game, state, x, y, layer) {
            if (layer === void 0) { layer = 'grid'; }
            var _this = this;
            var data = {
                x: x, y: y, image: 'gridOverlay', layer: layer
            };
            _this = _super.call(this, game, state, data) || this;
            return _this;
        }
        return GridOverlay;
    }(F84.GameObject));
    F84.GridOverlay = GridOverlay;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var CameraController = (function (_super) {
        __extends(CameraController, _super);
        function CameraController(game) {
            var _this = _super.call(this, game) || this;
            _this.game = game;
            _this.gameWidth = game.world.bounds.width;
            _this.gameHeight = game.world.bounds.height;
            _this.camera = game.camera;
            _this.targetScale = 1;
            _this.accel = 1;
            return _this;
        }
        CameraController.prototype.update = function () {
            var scaleFactor = Math.log(this.camScale);
            var targetFactor = Math.log(this.targetScale);
            scaleFactor -= (scaleFactor - targetFactor) * this.accel * this.game.time.physicsElapsed;
            this.setScale(Math.pow(Math.E, scaleFactor));
            this.camera.x = 0;
        };
        CameraController.prototype.postUpdate = function () {
            if (this.debugPts) {
                var bounds = this.bounds;
                this.debugPts[0].position.set(bounds.x, bounds.y);
                this.debugPts[1].position.set(bounds.x + bounds.width, bounds.y);
                this.debugPts[2].position.set(bounds.x, bounds.y + bounds.height);
                this.debugPts[3].position.set(bounds.x + bounds.width, bounds.y + bounds.height);
            }
        };
        CameraController.prototype.setScale = function (scale) {
            this.camera.scale.set(scale);
        };
        CameraController.prototype.setTargetScale = function (scale, accel) {
            if (accel === void 0) { accel = 1; }
            this.targetScale = scale;
            this.accel = accel;
        };
        Object.defineProperty(CameraController.prototype, "bounds", {
            get: function () {
                var width = this.gameWidth / this.camera.scale.x;
                var height = this.gameHeight / this.camera.scale.y;
                return new Phaser.Rectangle(this.camera.x / this.camScale, this.camera.y / this.camScale, width, height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CameraController.prototype, "camScale", {
            get: function () {
                return this.camera.scale.y;
            },
            enumerable: true,
            configurable: true
        });
        CameraController.prototype.createDebugPoints = function () {
            this.debugPts = [];
            for (var i = 0; i < 4; i++) {
                this.debugPts[i] = this.game.add.sprite(0, 0, 'whiteSquare');
                var pt = this.debugPts[i];
                pt.width = 20;
                pt.height = 20;
                pt.anchor.set(0.5);
                pt.tint = 0xFF0000;
            }
        };
        return CameraController;
    }(Phaser.Group));
    F84.CameraController = CameraController;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var CameraTarget = (function (_super) {
        __extends(CameraTarget, _super);
        function CameraTarget(game, player) {
            var _this = _super.call(this, game, player.x, F84.GameState.Instance.camController.bounds.centerY - 100, 'whiteSquare') || this;
            _this.player = player;
            _this.alpha = 0;
            _this.targetY = _this.y;
            _this.moving = true;
            return _this;
        }
        CameraTarget.prototype.setScreenShake = function (amt) {
            this.screenShake = amt;
        };
        CameraTarget.prototype.postUpdate = function () {
            _super.prototype.postUpdate.call(this);
            if (this.moving)
                this.position.y -= (this.position.y - (this.targetY)) * 8 * F84.GameState.Instance.deltaTime;
            if (this.player.centerY - this.targetY > 0) {
                this.targetY = this.player.centerY;
            }
            if (this.screenShake > 0) {
                this.screenShake -= F84.GameState.Instance.deltaTime;
                this.position.y += this.game.rnd.realInRange(-this.screenShake * 5, this.screenShake * 5);
            }
        };
        return CameraTarget;
    }(Phaser.Sprite));
    F84.CameraTarget = CameraTarget;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Carrot = (function (_super) {
        __extends(Carrot, _super);
        function Carrot(game, state, data) {
            var _this = this;
            data.layer = (data.layer == null) ? 'bottom' : data.layer;
            var shadowData = { x: data.x, y: data.y, image: 'carrotShadow', layer: data.layer };
            var shadow = new F84.GameObject(game, state, shadowData);
            state.addGameObject(shadow);
            data.image = 'carrot';
            _this = _super.call(this, game, state, data) || this;
            _this.name = 'carrot';
            _this.x += (F84.GameState.tileSize - _this.width) / 2;
            _this.y += (F84.GameState.tileSize - _this.height) / 2;
            var width = 20;
            var height = 20;
            _this.enableBody(width, height, (_this.width - width) / 2, (_this.height - height) / 2);
            _this.baseY = _this.y;
            _this.timer = game.rnd.realInRange(0, 20);
            _this.events.onDestroy.add(function () { return shadow.destroy(); });
            return _this;
        }
        Carrot.create = function (game, state, data) {
            return new Carrot(game, state, data);
        };
        Carrot.prototype.update = function () {
            this.timer += F84.GameState.Instance.deltaTime;
            this.y = this.baseY + (Math.sin(this.timer * 4) - 1) * 5;
        };
        return Carrot;
    }(F84.GameObject));
    F84.Carrot = Carrot;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ChunkSpawner = (function () {
        function ChunkSpawner(game, state, cam) {
            this.bottom = 240;
            this.chunkID = 0;
            this.game = game;
            this.state = state;
            this.cam = cam;
            this.addChunk();
            this.spawnBorders(0);
            this.chunkID = 0;
        }
        ChunkSpawner.prototype.update = function () {
            if (this.cam.bounds.bottom > this.bottom - 50) {
                this.addChunk();
            }
        };
        ChunkSpawner.prototype.addChunk = function () {
            var chunkData = this.game.cache.getJSON('chunks');
            var points = chunkData.points;
            var startPoint = points[0];
            var endPoint = points[points.length - 1];
            for (var i = 0; i < points.length; i++) {
                if (points[i].time < this.state.timer)
                    startPoint = points[i];
                if (points[i].time > this.state.timer) {
                    endPoint = points[i];
                    break;
                }
            }
            var t = (this.state.timer - startPoint.time) / (endPoint.time - startPoint.time);
            if (t > 1)
                t = 1;
            var b = [];
            for (var group in chunkData.groups) {
                var weight = Phaser.Math.linear(startPoint.groups[group], endPoint.groups[group], t);
                b.push([chunkData.groups[group], weight]);
            }
            var chunkType = F84.ArrayUtils.weightedRandom(b, this.game.rnd);
            var chunkName = this.game.rnd.pick(chunkType.chunks);
            var chunk = this.game.cache.getJSON("chunk_" + chunkName);
            var prevBottom = this.bottom;
            this.loadChunk(chunk);
            this.spawnBorders(prevBottom);
        };
        ChunkSpawner.prototype.loadChunk = function (chunk) {
            var chunkWidth = chunk.width * chunk.tilewidth;
            var xOffset = (chunkWidth - 1024) / 2;
            for (var _i = 0, _a = chunk.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                if (layer.type == "tilelayer") {
                    var data = layer.data;
                    var _loop_2 = function (i) {
                        var tileIndex = data[i] - 1;
                        if (tileIndex < 0)
                            return "continue";
                        var ty = Math.floor(i / layer.width);
                        var tx = i - (ty * layer.width);
                        var tileset = this_1.game.cache.getJSON('tileset');
                        var tile = tileset.tiles.find(function (t) { return t.id == tileIndex; });
                        var imgPath = tile.image;
                        var slashIndex = imgPath.lastIndexOf('/');
                        var name_5 = imgPath.substring(slashIndex + 1, imgPath.length - 4);
                        var x = (F84.GameState.tileSize * tx) - xOffset;
                        var y = (F84.GameState.tileSize * ty) + this_1.bottom;
                        var obj = new BackgroundTile(this_1.game, this_1.state, x, y, name_5);
                        this_1.state.addGameObject(obj);
                    };
                    var this_1 = this;
                    for (var i = 0; i < data.length; i++) {
                        _loop_2(i);
                    }
                }
            }
            var objectLayer = chunk.layers.find(function (l) { return l.name == "objects"; });
            for (var _b = 0, _c = objectLayer.objects; _b < _c.length; _b++) {
                var obj = _c[_b];
                var clone = {};
                for (var thing in obj)
                    clone[thing] = obj[thing];
                clone.x -= xOffset;
                clone.y += this.bottom;
                this.state.addMapObject(clone, chunk, this.chunkID);
            }
            this.bottom += chunk.height * chunk.tileheight;
            this.chunkID++;
        };
        ChunkSpawner.prototype.spawnBorders = function (top) {
            for (var y = top + this.game.rnd.realInRange(0, 80); y <= this.bottom - 120; y += this.game.rnd.realInRange(160, 200)) {
                this.spawnBorderShrub(-1, y);
            }
            for (var y = top + this.game.rnd.realInRange(0, 80); y <= this.bottom - 120; y += this.game.rnd.realInRange(160, 200)) {
                this.spawnBorderShrub(1, y);
            }
        };
        ChunkSpawner.prototype.spawnBorderShrub = function (side, y) {
            var obj = new BackgroundTile(this.game, this.state, (side < 0) ? 0 : this.state.camController.bounds.right, y, 'border');
            if (side < 0) {
                obj.anchor.set(1, 0);
                obj.width *= -1;
            }
            else {
                obj.x -= obj.width;
            }
            obj.layer = 'foreground';
            this.state.addGameObject(obj);
        };
        return ChunkSpawner;
    }());
    F84.ChunkSpawner = ChunkSpawner;
    var BackgroundTile = (function (_super) {
        __extends(BackgroundTile, _super);
        function BackgroundTile(game, state, x, y, image) {
            var _this = this;
            var data = {
                x: x, y: y, image: image, layer: 'tiledBackground'
            };
            _this = _super.call(this, game, state, data) || this;
            return _this;
        }
        return BackgroundTile;
    }(F84.GameObject));
    F84.BackgroundTile = BackgroundTile;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Curtain = (function (_super) {
        __extends(Curtain, _super);
        function Curtain(game, state) {
            var _this = _super.call(this, game, 0, 0, 'curtain2') || this;
            _this.state = state;
            _this.speed = 70;
            _this.x = 0;
            _this.y = state.camController.bounds.top - _this.height;
            _this.falling = false;
            _this.vy = 0;
            _this.onFall = new Phaser.Signal();
            return _this;
        }
        Curtain.prototype.update = function () {
            if (!this.falling) {
                var speed = this.speed;
                if (this.bottom < this.state.camController.bounds.top - 15)
                    speed *= 5;
                this.y += speed * this.state.deltaTime;
            }
            else {
                if (this.top > (this.state.camera.view.top / this.state.camera.scale.y) + 50) {
                    this.top = (this.state.camera.view.top / this.state.camera.scale.y) + 50;
                    this.onFall.dispatch();
                }
                else {
                    this.y += this.vy * this.state.deltaTime;
                    this.vy += 1500 * this.state.deltaTime;
                }
            }
        };
        Curtain.prototype.fall = function () {
            this.falling = true;
        };
        return Curtain;
    }(Phaser.Sprite));
    F84.Curtain = Curtain;
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
            _this.objectMap = {
                "obstacle": F84.Obstacle,
                "water": F84.Water,
                "carrot": F84.Carrot,
                "rock-weak": F84.WeakRock,
                'mole': F84.Mole,
                'hole-in': F84.HoleIn,
                'hole-out': F84.HoleOut,
                'taz': F84.Taz,
                'log': F84.LogSpawner,
                'train': F84.TrainTracks,
            };
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
        GameState.prototype.create = function () {
            var _this = this;
            GameState.Instance = this;
            F84.Music.switchMusic(this.game, 'gameplayMusic');
            F84.Orientation.onRotateDevicePopup = new Phaser.Signal();
            F84.Orientation.onRotateDevicePopup.add(this.pause, this);
            this.gameConfig = this.cache.getJSON('gameConfig');
            this.isPaused = false;
            this.oldWorldBounds = this.world.bounds.clone();
            var width = this.world.bounds.width;
            var scale = width / 1024;
            var centerX = this.world.bounds.width / 2;
            var boundsX = centerX - width / 2;
            var boundsY = 0;
            var bounds = new Phaser.Rectangle(boundsX, boundsY, width, F84.Game.Instance.DefaultHeight);
            var camController = this.camController = new F84.CameraController(this.game);
            camController.setScale(scale);
            camController.setTargetScale(scale);
            var worldWidth = 1024;
            var worldHeight = 1024 * 500;
            this.world.setBounds(0, 0, worldWidth, worldHeight);
            this.scaleLayer = this.add.group();
            this.backgroundLayer = this.add.group(this.scaleLayer);
            this.tiledBackgroundLayer = this.add.group(this.scaleLayer);
            this.gridLayer = this.add.group(this.scaleLayer);
            this.bottomLayer = this.add.group(this.scaleLayer);
            this.sortLayer = this.add.group(this.scaleLayer);
            this.foregroundLayer = this.add.group(this.scaleLayer);
            this.tunnelLayer = this.add.group(this.scaleLayer);
            this.uiLayer = this.add.group(this.scaleLayer);
            this.curtainLayer = this.add.group(this.scaleLayer);
            this.tileset = this.cache.getJSON('tileset');
            this.gameObjects = [];
            this.tunnelObjects = [];
            this.spawnedCurtain = false;
            this.curtain = null;
            this.score = 0;
            this.carrots = 0;
            this.timer = 0;
            this.spawnPlayer();
            var chunkSpawner = this.chunkSpawner = new F84.ChunkSpawner(this.game, this, camController);
            var backgroundSpawner = this.backgroundSpawner = new F84.BackgroundSpawner(this.game, this, camController);
            var camTarget = this.camTarget = new F84.CameraTarget(this.game, this.player);
            this.add.existing(camTarget);
            this.camera.focusOn(camTarget);
            this.camera.follow(camTarget, null, 0, 1);
            var scoreBG = this.add.image(0, 0, 'uiBG', null, this.uiLayer);
            var scoreLabelStyle = { fill: F84.GameColors.ORANGE, fontSize: 26, font: F84.Fonts.DefaultFont, align: 'left' };
            var scoreLabel = this.add.text(0, 0, '', scoreLabelStyle, this.uiLayer);
            var scoreHeader = F84.Strings.get('Score');
            if (scoreHeader.length >= 10 || F84.Game.Instance.locale == 'pl-pl') {
                scoreHeader = "<font size='20px'>" + scoreHeader + "</font>";
            }
            scoreLabel.setText(scoreHeader);
            var scoreStyle = { fill: 'white', fontSize: 40, font: F84.Fonts.BoldFont, align: 'left' };
            var scoreText = this.scoreText = this.add.text(0, 0, '0 ', scoreStyle, this.uiLayer);
            scoreText.setShadow(2, 2);
            var carrotBG = this.add.image(0, 0, 'uiBG', null, this.uiLayer);
            var carrotIcon = this.add.image(0, 0, 'uiCarrot', null, this.uiLayer);
            var carrotTextGroup = this.carrotTextGroup = this.add.group(this.uiLayer);
            var xStyle = { fill: 'white', fontSize: 20, font: F84.Fonts.BoldFont, align: 'center' };
            var xText = this.add.text(0, 0, 'x ', xStyle, this.carrotTextGroup);
            xText.setShadow(2, 2);
            var carrotStyle = { fill: 'white', fontSize: 40, font: F84.Fonts.BoldFont, align: 'left' };
            var carrotText = this.carrotText = this.add.text(-5, 0, '0 ', carrotStyle, this.carrotTextGroup);
            carrotText.anchor.set(0, 0.5);
            carrotText.setShadow(2, 2);
            xText.alignTo(carrotText, Phaser.LEFT_CENTER, 0, 7);
            var tapTarget = null;
            if (!F84.Game.Instance.device.desktop) {
                tapTarget = this.add.button(0, 0, 'whiteSquare');
                tapTarget.alpha = 0;
                this.uiLayer.add(tapTarget);
                tapTarget.events.onInputDown.add(this.onPointerDown, this);
                tapTarget.events.onInputUp.add(this.onPointerUp, this);
            }
            var pauseButton = this.add.button(0, 0, 'btnPause', this.pause, this);
            this.uiLayer.add(pauseButton);
            if (!this.game.device.desktop) {
                this.input.addMoveCallback(this.onPointerMove, this);
            }
            this.isPointerDown = false;
            this._onResize = function () {
                var width = _this.camera.view.width;
                var scale = width / 1024;
                camController.setScale(scale);
                camController.setTargetScale(scale);
                bounds = new Phaser.Rectangle(0, 0, _this.camera.view.width, F84.Game.Instance.DefaultHeight);
                scoreBG.alignIn(bounds, Phaser.TOP_LEFT, -25, -18);
                scoreLabel.alignIn(scoreBG, Phaser.RIGHT_CENTER, -120, 2);
                scoreText.alignIn(scoreBG, Phaser.LEFT_CENTER, -75, 0);
                carrotBG.alignIn(bounds, Phaser.TOP_CENTER, 0, -18);
                carrotTextGroup.alignIn(carrotBG, Phaser.LEFT_CENTER, -79, 0);
                carrotIcon.alignIn(carrotBG, Phaser.LEFT_CENTER, -26, 0);
                if (tapTarget) {
                    tapTarget.width = bounds.width;
                    tapTarget.height = bounds.height;
                    tapTarget.alignIn(bounds, Phaser.CENTER);
                }
                pauseButton.alignIn(bounds, Phaser.TOP_RIGHT, -10, -10);
                if (_this.curtain) {
                    _this.curtain.top = (_this.camera.view.top / _this.camera.scale.y) + 50;
                }
            };
            this.resize();
            this.fixToCamera(this.uiLayer);
            if (F84.PlayerData.Instance.saveData.gameStarted == false) {
                F84.PlayerData.Instance.saveData.gameStarted = true;
                F84.PlayerData.Instance.save();
                this.showTutorial();
            }
        };
        GameState.prototype.onPointerDown = function (thing, pointer) {
            if (!this.isPaused) {
                this.isPointerDown = true;
                this.pointerDown = pointer.position.clone();
            }
        };
        GameState.prototype.onPointerMove = function (pointer, x, y, clickEvent, domEvent) {
            if (clickEvent || !this.isPointerDown)
                return;
            var distance = new Phaser.Point();
            distance.x = pointer.position.x - this.pointerDown.x;
            distance.y = pointer.position.y - this.pointerDown.y;
            var minDistance = 40;
            if (distance.getMagnitude() < minDistance)
                return;
            if (Math.abs(distance.x) > Math.abs(distance.y)) {
                if (distance.x > 0)
                    this.player.move({ x: 1, y: 0 });
                else
                    this.player.move({ x: -1, y: 0 });
            }
            else {
            }
            this.isPointerDown = false;
        };
        GameState.prototype.onPointerUp = function (pointer, event) {
            if (this.isPointerDown)
                this.player.move({ x: 0, y: 1 });
            this.isPointerDown = false;
        };
        GameState.prototype.moveForward = function () {
            if (this.isPointerDown)
                this.player.move({ x: 0, y: 1 });
        };
        GameState.prototype.fixToCamera = function (obj) {
            obj.fixedToCamera = true;
            F84.UIScale.scaleWithCamController(obj, this.camController);
        };
        GameState.prototype.addMapObject = function (obj, chunk, chunkID) {
            var tile = this.tileset.tiles[obj.gid];
            if (obj.type == 'rock') {
                obj.type = 'obstacle';
                obj.properties = [{ name: 'image', type: 'string', value: 'rock' }];
            }
            var Type = this.objectMap[obj.type];
            if (Type != null) {
                var data = F84.GameObject.createData(obj, chunk, chunkID);
                var gameObject = Type.create(this.game, this, data);
                this.addGameObject(gameObject);
            }
            else {
                console.log("attempting to create invalid type " + obj.type);
            }
        };
        GameState.prototype.spawnPlayer = function () {
            var player = F84.Player.create(this.game, this, { x: 100, y: 100, image: F84.PlayerData.Instance.saveData.selectedPlayer, layer: "sort" });
            this.addGameObject(player);
            this.player = player;
            this.audioListener = new F84.AudioListener(player, true);
        };
        GameState.prototype.addGameObject = function (obj) {
            if (obj.layer == "background")
                this.backgroundLayer.add(obj);
            if (obj.layer == "tiledBackground")
                this.tiledBackgroundLayer.add(obj);
            if (obj.layer == "grid")
                this.gridLayer.add(obj);
            if (obj.layer == "bottom")
                this.bottomLayer.add(obj);
            if (obj.layer == "sort")
                this.sortLayer.add(obj);
            if (obj.layer == "foreground")
                this.foregroundLayer.add(obj);
            if (obj.layer == "tunnel")
                this.tunnelLayer.add(obj);
            if (obj.layer == "curtain")
                this.curtainLayer.add(obj);
            this.gameObjects.push(obj);
        };
        GameState.prototype.removeGameObject = function (obj) {
            F84.ArrayUtils.remove(this.gameObjects, obj);
            obj.pendingDestroy = true;
        };
        GameState.prototype.resize = function () {
            this._onResize();
        };
        GameState.prototype.update = function () {
            this.chunkSpawner.update();
            this.backgroundSpawner.update();
            this.audioListener.update();
            for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
                var obj = _a[_i];
                if (obj.bottom < this.camController.bounds.top - 100 && obj.destroyOffscreen)
                    this.removeGameObject(obj);
            }
            this.timer += this.deltaTime;
            var config = this.gameConfig;
            var t = Phaser.Math.clamp(this.timer / config.scrollEndTime, 0, 1);
            var scrollSpeed = Phaser.Math.linear(config.scrollStart, config.scrollEnd, t);
            this.camTarget.targetY += scrollSpeed * this.deltaTime;
            this.sortLayer.customSort(function (a, b) {
                return a.sortPoint() - b.sortPoint();
            });
            var carrotTextScale = this.carrotTextGroup.scale.x;
            carrotTextScale -= (carrotTextScale - 1) * 8 * this.time.physicsElapsed;
            this.carrotTextGroup.scale.set(carrotTextScale);
        };
        GameState.prototype.playerCollisions = function () {
            for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
                var obj = _a[_i];
                if (obj != this.player && this.overlap(this.player, obj))
                    this.player.onOverlap(obj);
            }
        };
        GameState.prototype.overlap = function (o1, o2) {
            if (o2.body == null)
                return false;
            var a = o1.getBodyBounds();
            var b = o2.getBodyBounds();
            return (a.right > b.left && a.left < b.right && a.bottom > b.top && a.top < b.bottom);
        };
        GameState.prototype.findOverlap = function (rect) {
            var results = [];
            for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
                var obj = _a[_i];
                if (obj.body == null)
                    continue;
                var r2 = obj.getBodyBounds();
                if (rect.right > r2.left && rect.left < r2.right && rect.bottom > r2.top && rect.top < r2.bottom)
                    results.push(obj);
            }
            return results;
        };
        GameState.prototype.collectCarrot = function () {
            F84.PlayerData.Instance.saveData.carrots++;
            this.carrots++;
            this.carrotText.text = this.carrots + ' ';
            this.carrotTextGroup.scale.set(1.25);
            F84.PlayerData.Instance.save();
            this.sound.play('sfxCarrotCollect');
        };
        GameState.prototype.addPoints = function (num) {
            this.score += num;
            this.scoreText.text = this.score + ' ';
        };
        GameState.prototype.spawnTaz = function () {
            var taz = F84.Taz.create(this.game, this, { x: this.camController.bounds.centerX, y: this.camController.bounds.bottom + 50, layer: "sort" });
            this.addGameObject(taz);
        };
        GameState.prototype.spawnCurtain = function (die) {
            this.camTarget.moving = false;
            var curtain = new F84.Curtain(this.game, this);
            this.curtainLayer.add(curtain);
            this.curtain = curtain;
            this.spawnedCurtain = true;
            var curtainOverlay = this.curtainOverlay = this.add.image(0, this.camera.view.top / this.camera.scale.y, 'curtain1', null, this.curtainLayer);
            curtainOverlay.y -= curtainOverlay.height;
            var tween = this.add.tween(this.curtainOverlay);
            tween.to({ y: this.camController.bounds.top - 10 }, die ? 400 : 1600, Phaser.Easing.Quadratic.Out, true);
        };
        GameState.prototype.enterHole = function (entrance, exit) {
            var _this = this;
            var data = { x: 0, y: this.camController.bounds.top, image: 'whiteSquare', layer: 'tunnel' };
            var overlay = F84.GameObject.create(this.game, this, data);
            this.addGameObject(overlay);
            this.tunnelObjects.push(overlay);
            overlay.width = this.camController.bounds.width;
            overlay.height = 8000;
            overlay.tint = 0;
            overlay.alpha = 0.7;
            var x = entrance.x;
            var y = entrance.y;
            var addTile = function () {
                data = { x: x, y: y, layer: 'tunnel' };
                var tile = F84.TunnelTile.create(_this.game, _this, data);
                _this.addGameObject(tile);
                _this.tunnelObjects.push(tile);
                var i = (x - GameState.gridOffset) + y;
                if (i % (GameState.tileSize * 2) == 0) {
                    var overlay_1 = new F84.GridOverlay(_this.game, _this, x, y, 'tunnel');
                    _this.addGameObject(overlay_1);
                    _this.tunnelObjects.push(overlay_1);
                }
            };
            while (x != exit.x || y != exit.y) {
                addTile();
                var carrot = F84.Carrot.create(this.game, this, data);
                this.addGameObject(carrot);
                if (y < exit.y)
                    y += GameState.tileSize;
                else if (x < exit.x)
                    x += GameState.tileSize;
                else if (x > exit.x)
                    x -= GameState.tileSize;
            }
            addTile();
            var holeOut = F84.HoleOut.create(this.game, this, data);
            this.addGameObject(holeOut);
            this.tunnelObjects.push(holeOut);
            this.tunnelLayer.add(this.player);
        };
        GameState.prototype.exitHole = function () {
            this.sortLayer.add(this.player);
            for (var _i = 0, _a = this.tunnelObjects; _i < _a.length; _i++) {
                var obj = _a[_i];
                this.removeGameObject(obj);
            }
            this.tunnelObjects = [];
        };
        GameState.prototype.showTutorial = function () {
            var _this = this;
            this.isPaused = true;
            var popup = new F84.TutorialPrompt(this.game, function () { return _this.isPaused = false; }, this);
            this.game.add.existing(popup);
        };
        GameState.prototype.pause = function () {
            this.game.sound.play('sfxButtonClick');
            this.isPaused = true;
            var popup = new F84.PauseMenu(this.game, this.unpause, this);
            this.add.existing(popup);
            this.audioListener.pause();
        };
        GameState.prototype.unpause = function () {
            this.isPaused = false;
            this.audioListener.unpause();
        };
        GameState.prototype.lose = function () {
            var _this = this;
            this.camTarget.screenShake = 0;
            if (this.curtain == null)
                this.spawnCurtain(true);
            this.curtain.fall();
            var onFall = function () {
                _this.isPaused = true;
                var popup = new F84.LevelFailPopup(_this.game, _this, _this.score, _this.carrots);
                _this.add.existing(popup);
                _this.audioListener.pause();
                _this.curtain.onFall.remove(onFall);
                _this.curtain.addChild(_this.curtainOverlay);
                _this.curtainOverlay.y = -50;
            };
            this.curtain.onFall.add(onFall);
        };
        GameState.prototype.exit = function () {
            this.world.setBounds(0, 0, this.oldWorldBounds.width, this.oldWorldBounds.height);
            this.camController.setScale(1);
            this.camController.setTargetScale(1);
            this.game.state.start('SplashScreen');
        };
        GameState.prototype.shop = function () {
            this.world.setBounds(0, 0, this.oldWorldBounds.width, this.oldWorldBounds.height);
            this.camController.setScale(1);
            this.camController.setTargetScale(1);
            this.game.state.start('Shop');
        };
        GameState.prototype.restart = function () {
            this.world.setBounds(0, 0, this.oldWorldBounds.width, this.oldWorldBounds.height);
            this.game.state.start('GameState');
        };
        GameState.tileSize = 80;
        GameState.gridOffset = (1024 - 960) / 2;
        return GameState;
    }(F84.ResizableState));
    F84.GameState = GameState;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var HoleIn = (function (_super) {
        __extends(HoleIn, _super);
        function HoleIn(game, state, data) {
            var _this = this;
            data.image = "holeIn";
            data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "hole-in";
            _this.enableBody();
            _this.holeID = data.id;
            return _this;
        }
        HoleIn.create = function (game, state, data) {
            return new HoleIn(game, state, data);
        };
        return HoleIn;
    }(F84.GameObject));
    F84.HoleIn = HoleIn;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var HoleOut = (function (_super) {
        __extends(HoleOut, _super);
        function HoleOut(game, state, data) {
            var _this = this;
            data.image = "holeOut";
            if (data.layer == null)
                data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "hole-out";
            _this.enableBody();
            _this.holeID = data.id;
            _this.linked = false;
            _this.link();
            return _this;
        }
        HoleOut.create = function (game, state, data) {
            return new HoleOut(game, state, data);
        };
        HoleOut.prototype.update = function () {
            if (!this.linked)
                this.link();
        };
        HoleOut.prototype.link = function () {
            for (var _i = 0, _a = this.state.gameObjects; _i < _a.length; _i++) {
                var obj = _a[_i];
                if (obj instanceof F84.HoleIn && obj.holeID == this.holeID) {
                    obj.linkedHole = this;
                    this.linked = true;
                }
            }
        };
        return HoleOut;
    }(F84.GameObject));
    F84.HoleOut = HoleOut;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Log = (function (_super) {
        __extends(Log, _super);
        function Log(game, state, data, speed) {
            var _this = this;
            data.image = "log";
            data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "log";
            _this.enableBody();
            _this.speed = speed;
            return _this;
        }
        Log.create = function (game, state, data) {
            return new Log(game, state, data, 0);
        };
        Log.prototype.update = function () {
            this.x += this.speed * this.state.deltaTime;
            if (this.left > this.state.camController.bounds.right + 200)
                this.destroy();
            if (this.right < this.state.camController.bounds.left - 200)
                this.destroy();
        };
        return Log;
    }(F84.GameObject));
    F84.Log = Log;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var LogSpawner = (function (_super) {
        __extends(LogSpawner, _super);
        function LogSpawner(game, state, data) {
            var _this = this;
            data.image = "whiteSquare";
            data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "log-spawner";
            _this.enableBody(_this.texture.width, _this.texture.height);
            _this.alpha = 0;
            var properties = data.mapObject.properties;
            if (properties == null) {
                _this.speed = 200;
                _this.rate = 2.5;
            }
            else {
                var speedProperty = properties.find(function (p) { return p.name == "speed"; });
                _this.speed = (speedProperty == null) ? 200 : speedProperty.value;
                var rateProperty = properties.find(function (p) { return p.name == "spawnTime"; });
                _this.rate = (rateProperty == null) ? 2.5 : rateProperty.value;
                _this.timer = _this.rate;
            }
            for (var i = 0; i < 5; i++) {
                var x = _this.getSpawnLocation() + (_this.rate * i) * _this.speed;
                _this.spawnLog(x);
            }
            return _this;
        }
        LogSpawner.create = function (game, state, data) {
            return new LogSpawner(game, state, data);
        };
        LogSpawner.prototype.update = function () {
            if (this.timer > 0) {
                this.timer -= this.state.deltaTime;
                if (this.timer <= 0) {
                    this.timer += this.rate;
                    if (this.timer < 0)
                        this.timer = 2.5;
                    this.spawnLog(this.getSpawnLocation());
                }
            }
        };
        LogSpawner.prototype.getSpawnLocation = function () {
            return (this.speed > 0) ? this.x - 150 : this.right;
        };
        LogSpawner.prototype.spawnLog = function (x) {
            var data = {
                x: x, y: this.y
            };
            var log = new F84.Log(this.game, this.state, data, this.speed);
            this.state.addGameObject(log);
        };
        return LogSpawner;
    }(F84.GameObject));
    F84.LogSpawner = LogSpawner;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Mole = (function (_super) {
        __extends(Mole, _super);
        function Mole(game, state, data) {
            var _this = this;
            data.image = "mole";
            data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "mole";
            _this.anim = _this.animations.add('f', null, 35);
            _this.anchor.set(0.5);
            _this.x += _this.width / 2;
            _this.y += _this.height / 2;
            _this.enableBody(80, 80, -_this.width / 2, -_this.height / 2);
            _this.alpha = 0;
            _this.timer = 0;
            _this.spawned = false;
            return _this;
        }
        Mole.create = function (game, state, data) {
            return new Mole(game, state, data);
        };
        Mole.prototype.update = function () {
            var _this = this;
            var player = this.state.player;
            var c1 = new Phaser.Point(player.centerX, player.centerY);
            var c2 = new Phaser.Point(this.centerX, this.centerY);
            var dist = c1.distance(c2);
            if (dist < 200 && !this.spawned && this.timer <= 0) {
                this.alpha = 1;
                this.anim.play();
                this.anim.onComplete.add(function () { return _this.animFinished(); });
                this.timer = this.game.rnd.realInRange(0.5, 1.25);
                var audioSource = new F84.AudioSource(this, true, 500, 0.65);
                audioSource.playSound('sfxMoleAppear', false);
            }
        };
        Mole.prototype.animFinished = function () {
            this.spawned = true;
        };
        return Mole;
    }(F84.GameObject));
    F84.Mole = Mole;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Obstacle = (function (_super) {
        __extends(Obstacle, _super);
        function Obstacle(game, state, data) {
            var _this = this;
            if (data.mapObject != null) {
                var imageProperty = data.mapObject.properties.find(function (p) { return p.name == "image"; });
                data.image = imageProperty.value;
            }
            _this = _super.call(this, game, state, data) || this;
            _this.name = "obstacle";
            var size = F84.GameState.tileSize;
            _this.enableBody(size, size, (_this.width - size) / 2, (_this.height - size));
            return _this;
        }
        Obstacle.create = function (game, state, data) {
            return new Obstacle(game, state, data);
        };
        return Obstacle;
    }(F84.GameObject));
    F84.Obstacle = Obstacle;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var PauseMenu = (function (_super) {
        __extends(PauseMenu, _super);
        function PauseMenu(game, onClosed, onClosedContext) {
            var _this = _super.call(this, game) || this;
            _this.fixedToCamera = true;
            F84.UIScale.scaleWithCamera(_this, game.camera);
            _this.y = F84.GameState.Instance.camController.bounds.top;
            var overlay = F84.Overlay.create(game);
            _this.add(overlay);
            var popupGroup = game.add.group(_this);
            var bg = game.add.sprite(0, 0, 'popup', null, popupGroup);
            var logo = game.add.image(0, 0, 'splashLogo', null, popupGroup);
            logo.scale.set(0.4);
            var quitButton = game.add.button(0, 0, 'btnHome', _this.quitButtonPressed, _this);
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
                _this.game.sound.play('sfxButtonClick');
            });
            popupGroup.add(volumeButton);
            F84.GameFactory.addButtonBounce(_this.game, volumeButton);
            var continueButton = game.add.button(0, 0, 'btnPlay', _this.continueButtonPressed, _this);
            popupGroup.add(continueButton);
            F84.GameFactory.addButtonBounce(_this.game, continueButton);
            _this.onClosed = onClosed;
            _this.onClosedContext = onClosedContext;
            _this.fixedToCamera = true;
            var scale = F84.GameState.Instance.camController.bounds.height / 576;
            _this._onResize = function () {
                var bounds = new Phaser.Rectangle(0, 0, _this.game.camera.width, _this.game.camera.height);
                overlay.width = bounds.width / scale;
                overlay.height = bounds.height / scale;
                overlay.alignIn(bounds, Phaser.CENTER);
                logo.alignIn(bg, Phaser.TOP_CENTER, 0, 100);
                quitButton.alignIn(bg, Phaser.CENTER, -140, -15);
                helpButton.alignIn(bg, Phaser.CENTER, 0, -15);
                volumeButton.alignIn(bg, Phaser.CENTER, 140, -15);
                continueButton.alignIn(bg, Phaser.BOTTOM_CENTER, 0, 51);
                popupGroup.alignIn(overlay, Phaser.CENTER, 0, -20);
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
            this.game.sound.play('sfxButtonClick');
            var game = this.game;
            var config = {
                headerText: F84.Strings.get('ConfirmQuitHeader'),
                messageText: F84.Strings.get('ConfirmQuit'),
                yesFunction: function () {
                    F84.GameState.Instance.exit();
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
            this.game.sound.play('sfxButtonClick');
            this.visible = false;
            this.ignoreChildInput = false;
            var popup = new F84.TutorialPrompt(this.game, function () {
                _this.visible = true;
                _this.ignoreChildInput = true;
            }, this);
            this.game.add.existing(popup);
        };
        PauseMenu.prototype.continueButtonPressed = function () {
            this.game.sound.play('sfxButtonClick');
            this.destroy();
            this.onClosed.call(this.onClosedContext);
        };
        return PauseMenu;
    }(F84.ResizableGroup));
    F84.PauseMenu = PauseMenu;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, state, data) {
            var _this = _super.call(this, game, state, data) || this;
            _this.name = "player";
            _this.animations.add('idle', [1], 16, false).play();
            _this.stepLeft = _this.animations.add('stepLeft', [6, 7, 8, 9, 1], 16, false);
            _this.stepRight = _this.animations.add('stepRight', [10, 11, 12, 13, 1], 16, false);
            _this.stepForward = _this.animations.add('stepForward', [2, 3, 4, 5, 1], 16, false);
            _this.hitAnim = _this.animations.add('hit', [0], 16, false);
            var keys = _this.game.input.keyboard.createCursorKeys();
            keys.down.onDown.add(function () { return _this.move({ x: 0, y: 1 }); });
            keys.left.onDown.add(function () { return _this.move({ x: -1, y: 0 }); });
            keys.right.onDown.add(function () { return _this.move({ x: 1, y: 0 }); });
            var size = F84.GameState.tileSize;
            _this.enableBody(size, size, (_this.width - size) / 2, (_this.height - size));
            _this.setPosition(6 * size + F84.GameState.gridOffset, 2 * size);
            _this.stepTime = 0.15;
            _this.startPosition = _this.getPosition();
            _this.lastSafePosition = _this.getPosition();
            _this.moving = false;
            _this.tween = 0;
            _this.dead = false;
            _this.onGround = false;
            _this.onWater = false;
            _this.onLog = null;
            _this.onMole = false;
            _this.inHole = false;
            return _this;
        }
        Player.create = function (game, state, data) {
            return new Player(game, state, data);
        };
        Player.prototype.setPosition = function (x, y) {
            if (x != null)
                this.x = x - this.body.offset.x;
            if (y != null)
                this.y = y - this.body.offset.y;
        };
        Player.prototype.getPosition = function () {
            return new Phaser.Point(this.x + this.body.offset.x, this.y + this.body.offset.y);
        };
        Player.prototype.move = function (dir) {
            if (this.dead)
                return;
            if (this.moving) {
                this.queuedMove = dir;
                return;
            }
            var pos = this.getPosition();
            var currentRect = new Phaser.Rectangle(pos.x, pos.y, this.body.width, this.body.height);
            var overlap = this.state.findOverlap(currentRect);
            var currentLog = overlap.find(function (o) { return o instanceof F84.Log; });
            pos.x += dir.x * F84.GameState.tileSize;
            pos.y += dir.y * F84.GameState.tileSize;
            var snapOffset = F84.GameState.gridOffset;
            if (!this.inHole) {
                var destRect = new Phaser.Rectangle(pos.x, pos.y, this.body.width, this.body.height);
                var overlap2 = this.state.findOverlap(destRect);
                var destLog = overlap2.find(function (o) { return o instanceof F84.Log; });
                if (dir.x != 0 && currentLog != null)
                    destLog = currentLog;
                if (destLog != null) {
                    snapOffset = destLog.x + (this.stepTime * destLog.speed);
                    pos.x += (this.stepTime * destLog.speed);
                }
            }
            else {
                var destRect = new Phaser.Rectangle(pos.x, pos.y, this.body.width, this.body.height);
                var overlap2 = this.state.findOverlap(destRect);
                if (!overlap2.find(function (o) { return o instanceof F84.TunnelTile; }))
                    return;
            }
            pos.x = Math.round((pos.x - snapOffset) / F84.GameState.tileSize) * F84.GameState.tileSize + snapOffset;
            if (!this.inHole) {
                var destRect = new Phaser.Rectangle(pos.x, pos.y, this.body.width, this.body.height);
                var overlap3 = this.state.findOverlap(destRect);
                var obstacleHit = overlap3.find(function (o) { return o instanceof F84.Obstacle; });
                if (obstacleHit != null)
                    return;
            }
            if (pos.x < 1 * F84.GameState.gridOffset)
                return;
            if (pos.x > 11 * F84.GameState.tileSize + F84.GameState.gridOffset)
                return;
            this.startPosition = this.getPosition();
            this.endPosition = pos.clone();
            this.moving = true;
            this.moveDir = dir;
            this.tween = 0;
            if (dir.x < 0)
                this.stepLeft.restart();
            if (dir.x > 0)
                this.stepRight.restart();
            if (dir.y > 0)
                this.stepForward.restart();
            this.game.state.getCurrentState().sound.play(F84.ArrayUtils.getRandom(['sfxFootstep1', 'sfxFootstep2', 'sfxFootstep3', 'sfxFootstep4']), 0.25);
        };
        Player.prototype.update = function () {
            if (this.moving) {
                this.tween += this.state.deltaTime / this.stepTime;
                var value = Phaser.Easing.Quadratic.Out(this.tween);
                if (this.tween > 1) {
                    value = 1;
                    this.moving = false;
                    if (!this.onWater)
                        this.lastSafePosition = this.endPosition.clone();
                }
                var x = this.lerp(this.startPosition.x, this.endPosition.x, value);
                var y = this.lerp(this.startPosition.y, this.endPosition.y, value);
                this.setPosition(x, y);
                this.state.playerCollisions();
                if (!this.moving) {
                    if (this.moveDir && this.moveDir.y > 0)
                        this.state.addPoints(1);
                    if (this.checkStanding() && this.queuedMove != null) {
                        this.move(this.queuedMove);
                        this.queuedMove = null;
                    }
                }
            }
            else {
                this.state.playerCollisions();
                this.checkStanding();
                if (this.onLog != null) {
                    this.x += this.onLog.speed * this.state.deltaTime;
                }
            }
            if (this.getBodyBounds().left < F84.GameState.gridOffset)
                this.setPosition(F84.GameState.gridOffset, null);
            if (this.getBodyBounds().right > 12 * F84.GameState.tileSize + F84.GameState.gridOffset)
                this.setPosition(12 * F84.GameState.tileSize + F84.GameState.gridOffset - this.body.width, null);
            if (this.bottom < F84.GameState.Instance.camController.bounds.top) {
                this.takeDamage();
            }
            this.onWater = false;
            this.onGround = false;
            this.onLog = null;
            this.onMole = false;
        };
        Player.prototype.checkStanding = function () {
            if ((this.onWater && !this.onGround) || this.onMole) {
                this.takeDamage();
                return false;
            }
            return true;
        };
        Player.prototype.lerp = function (a, b, t) {
            return a + ((b - a) * t);
        };
        Player.prototype.onOverlap = function (obj) {
            var _this = this;
            if (this.dead)
                return;
            if (this.inHole && obj.layer != 'tunnel')
                return;
            if (obj instanceof F84.Carrot) {
                var data = {
                    x: obj.centerX - 10, y: obj.centerY,
                    image: 'sparkle',
                    layer: 'curtain'
                };
                var sparkle_1 = F84.GameObject.create(this.game, this.state, data);
                sparkle_1.anchor.set(0.5);
                this.state.addGameObject(sparkle_1);
                var anim = sparkle_1.animations.add('', null, 60, false);
                anim.onComplete.add(function () { return _this.state.removeGameObject(sparkle_1); });
                anim.play();
                obj.destroy();
                this.state.collectCarrot();
            }
            if (obj instanceof F84.Rock) {
                this.onGround = true;
            }
            if (obj instanceof F84.Water) {
                this.onWater = true;
            }
            if (obj instanceof F84.WeakRock) {
                this.onGround = true;
                obj.onTouched();
            }
            if (obj instanceof F84.Mole && obj.spawned) {
                this.onMole = true;
            }
            if (obj instanceof F84.HoleIn) {
                this.state.enterHole(obj, obj.linkedHole);
                this.inHole = true;
            }
            if (obj instanceof F84.HoleOut && this.inHole && !this.moving) {
                this.state.exitHole();
                this.inHole = false;
            }
            if (obj instanceof F84.TazTrigger) {
                obj.destroy();
                this.state.spawnTaz();
            }
            if (obj instanceof F84.Taz) {
                this.takeDamage();
            }
            if (obj instanceof F84.Train) {
                if (!this.moving)
                    this.takeDamage();
            }
            if (obj instanceof F84.Curtain) {
                if (this.bottom < obj.bottom)
                    this.takeDamage();
            }
            if (obj instanceof F84.Log) {
                var o1 = this.getBodyBounds();
                var center = new Phaser.Point((o1.left + o1.right) / 2, (o1.top + o1.bottom) / 2);
                var o2 = obj.getBodyBounds();
                if (center.x > o2.left && center.x < o2.right) {
                    this.onGround = true;
                    this.onLog = obj;
                }
            }
        };
        Player.prototype.takeDamage = function () {
            if (this.dead)
                return;
            this.animations.play('hit');
            this.dead = true;
            this.state.lose();
        };
        return Player;
    }(F84.GameObject));
    F84.Player = Player;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Rock = (function (_super) {
        __extends(Rock, _super);
        function Rock(game, state, data) {
            var _this = this;
            data.image = "rock";
            data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "rock";
            _this.enableBody();
            return _this;
        }
        Rock.create = function (game, state, data) {
            return new Rock(game, state, data);
        };
        return Rock;
    }(F84.GameObject));
    F84.Rock = Rock;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Taz = (function (_super) {
        __extends(Taz, _super);
        function Taz(game, state, data) {
            var _this = this;
            data.layer = 'sort';
            data.image = 'taz';
            _this = _super.call(this, game, state, data) || this;
            _this.name = "taz";
            _this.anchor.set(0.7, 0.5);
            _this.speed = 400;
            _this.moveState = 'move';
            var size = 2;
            _this.enableBody(size, size, -size / 2, -size / 2);
            _this.x += _this.width / 2;
            _this.y += _this.height / 2;
            _this.vx = _this.game.rnd.sign();
            _this.moveAnim = _this.animations.add('move', [12, 13, 14, 15], 60, true).play();
            _this.waitAnim = _this.animations.add('wait', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 20, false);
            _this.whirlwind = new F84.AudioSource(_this, true, 650, 1);
            _this.whirlwind.playSound('sfxTazLoop', true);
            _this.vo = new F84.AudioSource(_this, true, 650, 1);
            _this.vo.playSound('sfxTazVo', true);
            return _this;
        }
        Taz.create = function (game, state, data) {
            return new Taz(game, state, data);
        };
        Taz.prototype.update = function () {
            var _this = this;
            if (this.moveState == "move") {
                this.x += this.speed * this.vx * this.state.deltaTime;
                this.width = (this.vx < 0) ? -220 : 220;
                var bounds = this.state.camController.bounds;
                if (this.x + this.width / 2 < bounds.left && this.vx == -1) {
                    this.moveState = "wait";
                    this.waitAnim.play();
                    this.waitAnim.onComplete.addOnce(function () {
                        _this.vx = 1;
                        _this.x = bounds.left + -_this.width / 2;
                        _this.moveState = "move";
                        _this.moveAnim.play();
                    });
                }
                if (this.x + this.width / 2 > bounds.right && this.vx == 1) {
                    this.moveState = "wait";
                    this.waitAnim.play();
                    this.waitAnim.onComplete.addOnce(function () {
                        _this.vx = -1;
                        _this.x = bounds.right - _this.width / 2;
                        _this.moveState = "move";
                        _this.moveAnim.play();
                    });
                }
            }
            this.vo.setMaxVolume(this.moveState == "move" ? 1 : 0);
            this.whirlwind.setMaxVolume(this.moveState == "move" ? 1 : 0);
        };
        return Taz;
    }(F84.GameObject));
    F84.Taz = Taz;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var TazTrigger = (function (_super) {
        __extends(TazTrigger, _super);
        function TazTrigger(game, state, data) {
            var _this = this;
            data.image = "whiteSquare";
            data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "taz-trigger";
            _this.enableBody(_this.texture.width, _this.texture.height);
            _this.alpha = 0;
            return _this;
        }
        TazTrigger.create = function (game, state, data) {
            return new TazTrigger(game, state, data);
        };
        return TazTrigger;
    }(F84.GameObject));
    F84.TazTrigger = TazTrigger;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Train = (function (_super) {
        __extends(Train, _super);
        function Train(game, state, data, side) {
            var _this = this;
            data.image = 'train';
            _this = _super.call(this, game, state, data) || this;
            var img = new Phaser.Image(game, -_this.width / 2, -50, 'trainSmoke');
            _this.addChild(img);
            img.scale.set(2);
            img.alpha = 0.7;
            img.animations.add('', null, 30, true).play();
            _this.name = "train";
            _this.anchor.set(0.5, 0);
            if (side < 0) {
                _this.x = -_this.width / 2;
                _this.width *= -1;
            }
            else {
                _this.x = state.camController.bounds.right + _this.width / 2;
            }
            var offset = (_this.height - 80) / 2;
            _this.y -= offset;
            _this.speed = -2500 * side;
            var width = Math.abs(_this.width);
            _this.enableBody(width, 80, -width / 2, offset);
            var horn = new F84.AudioSource(_this, true, 1500, 1);
            horn.playSound('sfxTrainHornLoop', true);
            var wheels = new F84.AudioSource(_this, true, 1500, 1);
            wheels.playSound('sfxTrainLoop', true);
            return _this;
        }
        Train.create = function (game, state, data) {
            return new Train(game, state, data, 0);
        };
        Train.prototype.update = function () {
            this.x += this.speed * this.state.deltaTime;
            if (this.x - Math.abs(this.width / 2) > this.state.camController.bounds.right + 200) {
                this.destroy();
            }
            if (this.x + Math.abs(this.width / 2) < this.state.camController.bounds.left - 200) {
                this.destroy();
            }
        };
        return Train;
    }(F84.GameObject));
    F84.Train = Train;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var TrainTracks = (function (_super) {
        __extends(TrainTracks, _super);
        function TrainTracks(game, state, data) {
            var _this = this;
            data.image = "whiteSquare";
            data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "train-tracks";
            _this.width = 1100;
            _this.height = 80;
            _this.alpha = 0;
            _this.side = game.rnd.sign();
            for (var x = _this.x; x < state.camController.bounds.right; x += 80) {
                var track = new F84.BackgroundTile(_this.game, _this.state, x, _this.y, 'trainTrack');
                _this.state.addGameObject(track);
            }
            _this.lightsSwitchedOn = false;
            _this.timer = 0;
            _this.startDist = _this.game.rnd.between(220, 310);
            _this.spawnTime = _this.game.rnd.realInRange(0.6, 1.5);
            return _this;
        }
        TrainTracks.create = function (game, state, data) {
            return new TrainTracks(game, state, data);
        };
        TrainTracks.prototype.update = function () {
            var dist = Math.abs(this.y - this.state.player.y);
            if (dist < this.startDist && !this.lightsSwitchedOn)
                this.lightsOn();
            if (this.timer > 0) {
                this.timer -= this.state.deltaTime;
                if (this.timer <= 0) {
                    this.spawnTrain();
                }
            }
        };
        TrainTracks.prototype.lightsOn = function () {
            this.timer = this.spawnTime;
            this.lightsSwitchedOn = true;
            var x = (this.side < 0) ? F84.GameState.Instance.camController.bounds.left : F84.GameState.Instance.camController.bounds.right;
            var data = { x: x, y: this.y + 40, image: 'trainWarningGlow', layer: 'foreground' };
            var glow = new F84.GameObject(this.game, this.state, data);
            this.state.addGameObject(glow);
            glow.anchor.set(1, 0.5);
            if (this.side < 0)
                glow.width *= -1;
            glow.alpha = 0;
            var glowTween = this.game.add.tween(glow);
            glowTween.to({ alpha: 1 }, 250, Phaser.Easing.Linear.None, true);
            data.x = 40 + F84.GameState.gridOffset;
            if (this.side > 0)
                data.x += 11 * F84.GameState.tileSize;
            data.image = 'trainWarning';
            var warning = new F84.GameObject(this.game, this.state, data);
            warning.animations.add('', null, 6, true).play();
            this.state.addGameObject(warning);
            warning.anchor.set(0.5);
            this.warning = warning;
            this.glow = glow;
            this.railroadCrossing = new F84.AudioSource(this, true, 500, 1, F84.AudioSourceDistanceMethod.Y, true);
            this.railroadCrossing.playSound('sfxRailroadCrossing', true);
        };
        TrainTracks.prototype.spawnTrain = function () {
            var data = { x: 0, y: this.y };
            var train = new F84.Train(this.game, this.state, data, this.side);
            this.state.addGameObject(train);
            train.events.onDestroy.add(this.lightsOff, this);
            if (this.warning != null)
                this.warning.destroy();
            if (this.glow != null)
                this.glow.destroy();
            if (this.railroadCrossing != null)
                this.railroadCrossing.destroy();
            F84.GameState.Instance.camTarget.setScreenShake(1.5);
        };
        TrainTracks.prototype.lightsOff = function () {
        };
        return TrainTracks;
    }(F84.GameObject));
    F84.TrainTracks = TrainTracks;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var TunnelTile = (function (_super) {
        __extends(TunnelTile, _super);
        function TunnelTile(game, state, data) {
            var _this = this;
            data.image = "dirt";
            data.layer = "tunnel";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "tunnelTile";
            _this.width = F84.GameState.tileSize + 1;
            _this.height = F84.GameState.tileSize + 1;
            _this.enableBody(F84.GameState.tileSize * (F84.GameState.tileSize / _this.width), F84.GameState.tileSize * (F84.GameState.tileSize / _this.width), 0, 0);
            return _this;
        }
        TunnelTile.create = function (game, state, data) {
            return new TunnelTile(game, state, data);
        };
        return TunnelTile;
    }(F84.GameObject));
    F84.TunnelTile = TunnelTile;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var TutorialPrompt = (function (_super) {
        __extends(TutorialPrompt, _super);
        function TutorialPrompt(game, onClosed, onClosedContext) {
            var _this = _super.call(this, game) || this;
            _this.fixedToCamera = true;
            F84.UIScale.scaleWithCamera(_this, game.camera);
            _this.y = F84.GameState.Instance.camController.bounds.top;
            _this._pageIndex = 0;
            _this._onClosed = onClosed;
            _this._onClosedContext = onClosedContext;
            var overlay = F84.Overlay.create(_this.game, 0.7);
            _this.add(overlay);
            var fadeTween = game.add.tween(overlay);
            fadeTween.from({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
            var popupGroup = game.add.group(_this);
            var img = (F84.Game.Instance.device.desktop) ? 'tutPop' : 'tutPopMobile';
            var popup = _this.game.add.sprite(0, 0, img, null, popupGroup);
            popup.alignIn(_this.game.world.bounds, Phaser.CENTER, 0, -30);
            var sideSwipe;
            var downTap;
            if (!F84.Game.Instance.device.desktop) {
                var style_1 = { font: F84.Fonts.DefaultFont, fill: '#945828', fontSize: 32, align: 'center' };
                sideSwipe = _this.game.add.text(0, 0, F84.Strings.get('SideSwipe'), style_1, popupGroup);
                sideSwipe.lineSpacing = -6;
                downTap = _this.game.add.text(0, 0, F84.Strings.get('DownTap'), style_1, popupGroup);
                downTap.lineSpacing = -6;
            }
            var headerBG = game.add.sprite(0, 0, 'headerGreen', null, popupGroup);
            var headerStyle = { fill: '#fff0d2', fontSize: 48, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 400, align: 'center' };
            var headerText = game.add.text(0, 0, '', headerStyle, popupGroup);
            headerText.setText(F84.Strings.get('TutorialHeader'));
            var style = { font: F84.Fonts.BoldFont, fill: '#945828', fontSize: 35, wordWrap: true, wordWrapWidth: 550, align: 'center' };
            var move = _this.game.add.text(0, 0, '', style, popupGroup);
            move.setText(F84.Strings.get('TutorialMove'));
            var collect = _this.game.add.text(0, 0, '', style, popupGroup);
            collect.setText(F84.Strings.get('TutorialCollect'));
            var avoid = _this.game.add.text(0, 0, '', style, popupGroup);
            avoid.setText(F84.Strings.get('TutorialAvoid'));
            var button = _this.game.add.button(0, 0, 'btnCheck', _this.next, _this);
            F84.GameFactory.addButtonBounce(_this.game, button);
            popupGroup.add(button);
            _this._onResize = function () {
                overlay.width = F84.Game.Instance.width;
                overlay.height = F84.Game.Instance.height;
                var scale = Math.min(F84.Game.Instance.width / 1024, 1);
                popupGroup.scale.set(scale);
                popupGroup.alignIn(overlay, Phaser.CENTER, 2, 1);
                headerBG.alignIn(popup, Phaser.CENTER, 1, -231);
                headerText.alignIn(headerBG, Phaser.CENTER);
                move.alignIn(popup, Phaser.CENTER, -236, -145.5);
                collect.alignIn(popup, Phaser.CENTER, 0, -145.5);
                avoid.alignIn(popup, Phaser.CENTER, 233, -145.5);
                if (sideSwipe) {
                    sideSwipe.alignIn(popup, Phaser.BOTTOM_CENTER, -236 - 50, -150);
                    downTap.alignIn(popup, Phaser.BOTTOM_CENTER, -236 + 50, -150);
                }
                button.alignIn(popup, Phaser.CENTER, -0.14, 211.71);
            };
            _this.resize();
            _this.resize();
            return _this;
        }
        TutorialPrompt.prototype.next = function () {
            this.game.sound.play('sfxButtonClick');
            this.destroy();
            if (this._onClosed)
                this._onClosed.call(this._onClosedContext);
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
    var Water = (function (_super) {
        __extends(Water, _super);
        function Water(game, state, data) {
            var _this = this;
            data.image = "water";
            data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "water";
            _this.alpha = 0;
            _this.enableBody(_this.texture.width, _this.texture.height);
            var audioSource = new F84.AudioSource(_this, true, 350, 0.75, F84.AudioSourceDistanceMethod.Y, true);
            audioSource.playSound('sfxRiverLoop', true);
            return _this;
        }
        Water.create = function (game, state, data) {
            return new Water(game, state, data);
        };
        return Water;
    }(F84.GameObject));
    F84.Water = Water;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var WeakRock = (function (_super) {
        __extends(WeakRock, _super);
        function WeakRock(game, state, data) {
            var _this = this;
            data.image = "rockWeak";
            data.layer = "bottom";
            _this = _super.call(this, game, state, data) || this;
            _this.name = "rock-weak";
            _this.enableBody();
            _this.timer = 0.5;
            _this.sinking = false;
            _this.baseX = _this.x;
            return _this;
        }
        WeakRock.create = function (game, state, data) {
            return new WeakRock(game, state, data);
        };
        WeakRock.prototype.onTouched = function () {
            if (this.sinking == false) {
                new F84.AudioSource(this, true, 250, 0.5).playSound('sfxRockCollapse', false);
            }
            this.sinking = true;
        };
        WeakRock.prototype.update = function () {
            if (this.sinking) {
                this.timer -= F84.GameState.Instance.deltaTime;
                this.x = this.baseX + Math.sin(this.timer * 40);
                if (this.timer < 0.1)
                    this.alpha = this.timer / 0.1;
                if (this.timer <= 0) {
                    this.destroy();
                }
            }
        };
        return WeakRock;
    }(F84.GameObject));
    F84.WeakRock = WeakRock;
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
        ArrayUtils.getRandom = function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
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
        Music.pauseMusic = function () {
            this.currentMusic.pause();
        };
        Music.resumeMusic = function () {
            this.currentMusic.resume();
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
                if (this.onRotateDevicePopup != null)
                    this.onRotateDevicePopup.dispatch();
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
var F84;
(function (F84) {
    var UIScale = (function () {
        function UIScale() {
        }
        UIScale.scaleWithCamController = function (uiObject, camera) {
            var postUpdate = uiObject.postUpdate;
            var scale = uiObject.scale.clone();
            var baseScale = new Phaser.Point(1, 1);
            if (uiObject.data && uiObject.data.baseScale)
                baseScale = uiObject.data.baseScale;
            uiObject.postUpdate = function () {
                postUpdate.call(uiObject);
                uiObject.scale.set((baseScale.x * scale.x) / camera.camScale, (baseScale.y * scale.y) / camera.camScale);
            };
        };
        UIScale.scaleWithCamera = function (uiObject, camera) {
            var postUpdate = uiObject.postUpdate;
            var scale = uiObject.scale.clone();
            var baseScale = new Phaser.Point(1, 1);
            if (uiObject.data && uiObject.data.baseScale)
                baseScale = uiObject.data.baseScale;
            uiObject.postUpdate = function () {
                postUpdate.call(uiObject);
                uiObject.scale.set((baseScale.x * scale.x) / camera.scale.y, (baseScale.y * scale.y) / camera.scale.y);
            };
        };
        return UIScale;
    }());
    F84.UIScale = UIScale;
})(F84 || (F84 = {}));
//# sourceMappingURL=game.js.map