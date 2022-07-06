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
        };
        Boot.prototype.preload = function () {
            console.log(F84.Game.Instance.locale);
            this.load.json('strings', './locale/strings.json');
            this.load.json('gameConfig', './assets/json/game-config.json');
            this.load.image('rotateDevice', './assets/images/system/orientation.png');
            this.load.image('loadBG', './assets/images/ui/lt-bts-game-start-bg.png');
            this.load.image('loadBar', './assets/images/ui/lt-bts-loading-bg.png');
            this.load.image('loadFill', './assets/images/ui/lt-bts-loading-meter.png');
            this.load.audio('menuMusic', './assets/audio/music-hyperfun.mp3');
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
    var CharacterDialogue = (function (_super) {
        __extends(CharacterDialogue, _super);
        function CharacterDialogue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CharacterDialogue.prototype.init = function (minigame) {
            this.minigame = minigame;
        };
        CharacterDialogue.prototype.create = function () {
            var _this = this;
            var bg = this.add.sprite(0, 0, 'introBG');
            var group = this.add.group();
            var card = this.add.sprite(0, 0, 'introCard' + this.minigame, null, group);
            var cardHeader = this.add.sprite(0, 0, 'intro' + this.minigame, null, group);
            cardHeader.anchor.set(0.5);
            cardHeader.position.set(card.centerX, card.top);
            var style = { font: F84.Fonts.BoldFont, fill: F84.GameColors.WHITE, fontSize: 24 };
            var reportCard = this.add.text(0, 0, F84.Strings.get(this.minigame), style, group);
            reportCard.alignIn(card, Phaser.CENTER, -10, -122);
            var highScoreHeader, highScoreText;
            var stars = F84.PlayerData.Instance.saveData.stars[this.minigame];
            var starCount = stars.reduce(function (i, star) { return star ? i + 1 : i; }, 0);
            var starBack1 = this.add.sprite(0, 0, 'uiStar2', null, group);
            starBack1.alignIn(card, Phaser.BOTTOM_CENTER, 85 - 55, -32);
            var starBack2 = this.add.sprite(0, 0, 'uiStar2', null, group);
            starBack2.alignIn(card, Phaser.BOTTOM_CENTER, 85, -32);
            var starBack3 = this.add.sprite(0, 0, 'uiStar2', null, group);
            starBack3.alignIn(card, Phaser.BOTTOM_CENTER, 85 + 55, -32);
            var addStar = function (back) {
                var star = _this.add.sprite(0, 0, 'uiStar', null, group);
                star.alignIn(back, Phaser.CENTER, 2, 1);
            };
            if (starCount > 0)
                addStar(starBack1);
            if (starCount > 1)
                addStar(starBack2);
            if (starCount > 2)
                addStar(starBack3);
            style = { font: F84.Fonts.DefaultFont, fill: F84.GameColors.TAN, fontSize: 28 };
            highScoreHeader = this.add.text(0, 0, F84.Strings.get('HighScore'), style, group);
            style = { font: F84.Fonts.BoldFont, fill: F84.GameColors.TAN, fontSize: 28 };
            highScoreText = this.add.text(0, 0, F84.PlayerData.Instance.saveData.highScore[this.minigame] + '', style, group);
            highScoreText.alignIn(card, Phaser.BOTTOM_CENTER, -60, -35);
            highScoreHeader.alignTo(highScoreText, Phaser.LEFT_CENTER);
            var characterOffset = this.cache.getJSON('dialogueData')[this.minigame].characterOffset;
            var character = this.add.sprite(0, 0, 'introCharacter' + this.minigame, null, group);
            character.alignTo(card, Phaser.RIGHT_CENTER, characterOffset[0], characterOffset[1]);
            var lineOffset = this.cache.getJSON('dialogueData')[this.minigame].lineOffset;
            var dialogueLine = this.add.sprite(0, 0, 'introSpeakline', null, group);
            dialogueLine.alignTo(character, Phaser.RIGHT_CENTER, lineOffset[0], lineOffset[1]);
            var dialogueOffset = this.cache.getJSON('dialogueData')[this.minigame].dialogueOffset;
            style = { font: F84.Fonts.DefaultFont, fill: F84.GameColors.WHITE, fontSize: 48, wordWrap: true, wordWrapWidth: 250, align: 'center' };
            var dialogue = this.add.text(0, 0, F84.Strings.get('Intro' + this.minigame), style, group);
            dialogue.alignTo(dialogueLine, Phaser.RIGHT_CENTER, dialogueOffset[0], dialogueOffset[1]);
            var backButton = this.add.button(0, 0, 'backButton', this.back);
            F84.GameFactory.addButtonBounce(this.game, backButton);
            backButton.alignIn(this.world.bounds, Phaser.TOP_LEFT, -22, -18);
            var playButton = this.add.button(0, 0, 'playButton', this.play, this);
            F84.GameFactory.addButtonBounce(this.game, playButton);
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(bg, _this.world.bounds);
                bg.alignIn(_this.world.bounds, Phaser.CENTER);
                playButton.alignIn(_this.world.bounds, Phaser.BOTTOM_RIGHT, -31, -20);
                var aspectRatio = window.innerWidth / window.innerHeight;
                if (!_this.game.device.desktop) {
                    if (window.innerWidth / window.innerHeight < 1.65) {
                        group.scale.set(aspectRatio / 1.65);
                    }
                    else {
                        group.scale.set(1);
                    }
                }
                group.alignIn(_this.world.bounds, Phaser.CENTER, 0, 0);
            };
            this.resize();
        };
        CharacterDialogue.prototype.resize = function () {
            this._onResize();
        };
        CharacterDialogue.prototype.play = function () {
            this.game.sound.play('button');
            this.game.state.start(this.minigame);
        };
        CharacterDialogue.prototype.back = function () {
            this.game.sound.play('button');
            this.game.state.start('LevelSelect');
        };
        CharacterDialogue.dialogOffset = {
            'TicTacToe': new Phaser.Point(0, 0),
            'Basketball': new Phaser.Point(-35, -70)
        };
        return CharacterDialogue;
    }(F84.ResizableState));
    F84.CharacterDialogue = CharacterDialogue;
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
    var DraggableGroup = (function (_super) {
        __extends(DraggableGroup, _super);
        function DraggableGroup(game, horizontalScroll, verticalScroll) {
            var _this = _super.call(this, game) || this;
            _this.vx = 0;
            _this.vy = 0;
            _this.horizontalScroll = horizontalScroll ? 1 : 0;
            _this.verticalScroll = verticalScroll ? 1 : 0;
            _this.dragPoints = [];
            _this.dragDistance = 0;
            _this.inputEnabled = true;
            _this.dragObjects = [];
            _this.autoScrolling = false;
            _this.autoScrollSpeed = 8;
            _this.minX = -Number.MAX_VALUE;
            _this.maxX = Number.MAX_VALUE;
            _this.minY = -Number.MAX_VALUE;
            _this.maxY = Number.MAX_VALUE;
            _this.softBounds = false;
            _this.onDragEnd = new Phaser.Signal();
            return _this;
        }
        DraggableGroup.prototype.update = function () {
            _super.prototype.update.call(this);
            var dt = this.game.time.physicsElapsed;
            this.x += this.vx * dt;
            this.y += this.vy * dt;
            this.vx -= this.vx * 8 * dt;
            this.vy -= this.vy * 8 * dt;
            if (this.autoScrolling) {
                this.x -= (this.x - this.autoScrollPoint.x) * this.autoScrollSpeed * dt;
                this.y -= (this.y - this.autoScrollPoint.y) * this.autoScrollSpeed * dt;
            }
            if (this.softBounds) {
                if (this.x < this.minX)
                    this.x += (this.minX - this.x) * 15 * dt;
                if (this.x > this.maxX)
                    this.x += (this.maxX - this.x) * 15 * dt;
                if (this.y < this.minY)
                    this.y += (this.minY - this.y) * 15 * dt;
                if (this.y > this.maxY)
                    this.y += (this.maxY - this.y) * 15 * dt;
            }
            else {
                if (this.x < this.minX)
                    this.x = this.minX;
                if (this.x > this.maxX)
                    this.x = this.maxX;
                if (this.y < this.minY)
                    this.y = this.minY;
                if (this.y > this.maxY)
                    this.y = this.maxY;
            }
            this.dragPoints.pop();
        };
        DraggableGroup.prototype.enable = function () {
            for (var _i = 0, _a = this.dragObjects; _i < _a.length; _i++) {
                var obj = _a[_i];
                obj.input.enableDrag();
            }
        };
        DraggableGroup.prototype.disable = function () {
            for (var _i = 0, _a = this.dragObjects; _i < _a.length; _i++) {
                var obj = _a[_i];
                obj.input.disableDrag();
            }
        };
        DraggableGroup.prototype.dragStart = function (obj, ptr, x, y) {
            this.dragStartPoint = new Phaser.Point(ptr.x, ptr.y);
            this.vx = 0;
            this.vy = 0;
            this.dragDistance = 0;
            this.stopScrolling();
        };
        DraggableGroup.prototype.dragUpdate = function (obj, ptr, x, y) {
            if (this.game.input.totalActivePointers > 1)
                return;
            if (this.inputEnabled) {
                if (this.dragStartPoint === undefined)
                    this.dragStartPoint = new Phaser.Point(ptr.x, ptr.y);
                var dragUpdatePoint = new Phaser.Point(ptr.x, ptr.y);
                var delta = dragUpdatePoint.subtract(this.dragStartPoint.x, this.dragStartPoint.y);
                this.position = this.position.add(delta.x * this.horizontalScroll, delta.y * this.verticalScroll);
                if (this.softBounds) {
                    if (this.x < this.minX) {
                        this.x += (this.minX - this.x) * 0.1;
                        delta.x *= 0.4;
                    }
                    if (this.x > this.maxX) {
                        this.x += (this.maxX - this.x) * 0.1;
                        delta.x *= 0.4;
                    }
                    if (this.y < this.minY) {
                        this.y += (this.minY - this.y) * 0.1;
                        delta.y *= 0.4;
                    }
                    if (this.y > this.maxY) {
                        this.y += (this.maxY - this.y) * 0.1;
                        delta.y *= 0.4;
                    }
                }
                else {
                    if (this.x < this.minX)
                        this.x = this.minX;
                    if (this.x > this.maxX)
                        this.x = this.maxX;
                    if (this.y < this.minY)
                        this.y = this.minY;
                    if (this.y > this.maxY)
                        this.y = this.maxY;
                }
                this.dragDistance += Math.abs(delta.x * this.horizontalScroll);
                this.dragDistance += Math.abs(delta.y * this.verticalScroll);
                this.dragPoints.unshift(delta);
                this.dragPoints.unshift(delta);
                if (this.dragPoints.length > 8)
                    this.dragPoints.pop();
                this.dragStartPoint.x = ptr.x;
                this.dragStartPoint.y = ptr.y;
            }
        };
        DraggableGroup.prototype.dragStop = function () {
            this.dragStartPoint = undefined;
            if (this.dragPoints.length > 0 && this.inputEnabled) {
                var avgX = 0;
                var avgY = 0;
                for (var _i = 0, _a = this.dragPoints; _i < _a.length; _i++) {
                    var delta = _a[_i];
                    avgX += delta.x;
                    avgY += delta.y;
                }
                avgX /= this.dragPoints.length;
                avgY /= this.dragPoints.length;
                this.vx = avgX * this.horizontalScroll / this.game.time.physicsElapsed;
                this.vy = avgY * this.verticalScroll / this.game.time.physicsElapsed;
            }
            this.dragPoints = [];
            this.onDragEnd.dispatch();
        };
        DraggableGroup.prototype.scrollTo = function (x, y) {
            this.autoScrolling = true;
            this.autoScrollPoint = new Phaser.Point(x, y);
        };
        DraggableGroup.prototype.stopScrolling = function () {
            this.autoScrolling = false;
        };
        DraggableGroup.prototype.enableDragging = function (obj) {
            obj.inputEnabled = true;
            obj.input.draggable = true;
            obj.input.allowHorizontalDrag = false;
            obj.input.allowVerticalDrag = false;
            obj.events.onDragStart.add(this.dragStart, this);
            obj.events.onDragUpdate.add(this.dragUpdate, this);
            obj.events.onDragStop.add(this.dragStop, this);
            this.dragObjects.push(obj);
        };
        DraggableGroup.prototype.destroy = function (destroyChildren, soft) {
            this.dragObjects.forEach(function (element) {
                element.events.destroy();
                element.destroy(true);
            });
            _super.prototype.destroy.call(this, destroyChildren, soft);
            this.onDragEnd.dispose();
            this.dragObjects = null;
            this.dragPoints = null;
        };
        return DraggableGroup;
    }(Phaser.Group));
    F84.DraggableGroup = DraggableGroup;
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
            F84.PlayerData.Instance.saveData.seenEnding = true;
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
            this.game.state.start('MainMenu');
        };
        return FinalGameComplete;
    }(F84.ResizableState));
    F84.FinalGameComplete = FinalGameComplete;
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
            _this.playerData = new F84.PlayerData("LooneyTunesRecess");
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
            _this.state.add('MainMenu', F84.MainMenu);
            _this.state.add('StoryIntro', F84.StoryIntro);
            _this.state.add('LevelSelect', F84.LevelSelect);
            _this.state.add('CharacterDialogue', F84.CharacterDialogue);
            _this.state.add('TicTacToe', F84.TicTacToe);
            _this.state.add('FootRace', F84.FootRace);
            _this.state.add('JumpRope', F84.JumpRope);
            _this.state.add('Dodgeball', F84.Dodgeball);
            _this.state.add('Basketball', F84.Basketball);
            _this.state.add('GameComplete', F84.GameComplete);
            _this.state.add('FinalGameComplete', F84.FinalGameComplete);
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
    var GameComplete = (function (_super) {
        __extends(GameComplete, _super);
        function GameComplete() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameComplete.prototype.init = function (minigame, score, conditionMet) {
            this.minigame = minigame;
            this.score = score;
            this.conditionMet = conditionMet;
        };
        GameComplete.prototype.create = function () {
            var _this = this;
            var saveData = F84.PlayerData.Instance.saveData;
            var scoreThreshold = this.cache.getJSON('minigameData')[this.minigame].scoreThreshold;
            var starsEarned = [true, this.conditionMet, this.score >= scoreThreshold];
            for (var i = 0; i < 3; i++) {
                saveData.stars[this.minigame][i] = saveData.stars[this.minigame][i] || starsEarned[i];
            }
            var oldHighScore = this._previousHighScore = saveData.highScore[this.minigame];
            if (this.score > saveData.highScore[this.minigame])
                saveData.highScore[this.minigame] = this.score;
            F84.PlayerData.Instance.save();
            var bg = this.add.sprite(0, 0, 'introBG');
            var card = this.add.sprite(0, 0, 'recapCard');
            var cardHeader = this.add.sprite(0, 0, 'intro' + this.minigame);
            cardHeader.anchor.set(0.5);
            var style = { font: F84.Fonts.DefaultFont, fill: F84.GameColors.TAN, fontSize: 40 };
            var goal1 = this.add.text(0, 0, F84.Strings.get('Goal1' + this.minigame), style);
            var goal2 = this.add.text(0, 0, F84.Strings.get('Goal2' + this.minigame), style);
            var goal3Text = F84.Strings.get('Goal3');
            var minigameData = this.cache.getJSON('minigameData');
            goal3Text = goal3Text.replace('%pts', minigameData[this.minigame].scoreThreshold + '');
            var goal3 = this.add.text(0, 0, goal3Text, style);
            var stars = [];
            for (var i = 0; i < 3; i++) {
                var star = this.add.sprite(0, 0, 'uiStar');
                star.anchor.set(0.5);
                star.visible = false;
                stars.push(star);
            }
            var highScore = this.add.group();
            style = { font: F84.Fonts.DefaultFont, fill: F84.GameColors.TAN, fontSize: 28 };
            var highScoreHeader = this.add.text(0, 0, F84.Strings.get('HighScore'), style, highScore);
            style = { font: F84.Fonts.BoldFont, fill: F84.GameColors.TAN, fontSize: 28 };
            var highScoreText = this._highScoreField = this.add.text(0, 0, '' + Phaser.Math.max(oldHighScore, this.score), style, highScore);
            highScoreText.anchor.set(0.5, 0.5);
            highScoreHeader.alignTo(highScoreText, Phaser.LEFT_CENTER, 6, 0);
            var score = this.add.group();
            style = { font: F84.Fonts.DefaultFont, fill: F84.GameColors.ORANGE, fontSize: 28 };
            var scoreHeader = this.add.text(0, 0, F84.Strings.get('Score'), style, score);
            style = { font: F84.Fonts.BoldFont, fill: F84.GameColors.WHITE, fontSize: 48 };
            var scoreText = this._scoreField = this.add.text(0, 0, '' + this.score, style, score);
            scoreText.anchor.set(0.5, 0.5);
            scoreText.alignTo(scoreHeader, Phaser.RIGHT_CENTER, 10, 0);
            var character = this.add.sprite(0, 0, 'recapCharacter' + this.minigame);
            if (!this.cache.checkImageKey('recapCharacter' + this.minigame)) {
                character.alpha = 0;
            }
            var playButton = this.add.button(0, 0, 'playButton', this.play, this);
            F84.GameFactory.addButtonBounce(this.game, playButton);
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(bg, _this.world.bounds);
                card.alignIn(_this.world.bounds, Phaser.CENTER, -190, 30);
                cardHeader.position.set(card.centerX, card.top);
                goal1.alignIn(card, Phaser.LEFT_CENTER, -180, -60 - 48);
                goal2.alignIn(card, Phaser.LEFT_CENTER, -180, 0 - 48);
                goal3.alignIn(card, Phaser.LEFT_CENTER, -180, 60 - 48);
                stars[0].alignIn(card, Phaser.LEFT_CENTER, -103, -64 - 49);
                stars[1].alignIn(card, Phaser.LEFT_CENTER, -103, 0 - 49);
                stars[2].alignIn(card, Phaser.LEFT_CENTER, -103, 64 - 49);
                highScore.alignIn(card, Phaser.CENTER, 0, 80);
                score.alignTo(card, Phaser.BOTTOM_CENTER, 0, -95);
                var charOffset = GameComplete.characterOffset[_this.minigame];
                character.alignIn(_this.world.bounds, Phaser.BOTTOM_CENTER, charOffset.x, charOffset.y);
                playButton.alignIn(_this.world.bounds, Phaser.BOTTOM_RIGHT, -10, -10);
            };
            this.resize();
            var tweenDuration = 350;
            var starsGained = 0;
            for (var i = 0; i < starsEarned.length; i++) {
                if (starsEarned[i]) {
                    this.tweenStar(this.game, stars[i], tweenDuration, 250 + starsGained * tweenDuration / 2, starsGained);
                    starsGained++;
                }
            }
            this._timeElapsed = 0;
            this._scoreIncrementDuration = 1.25;
            this._scoreIncrementDelay = 0.3 * starsGained;
            this._displayedScore = 0;
            this._highScoreField.text = oldHighScore.toString();
            this._scoreField.text = "0";
        };
        GameComplete.prototype.tweenStar = function (game, star, duration, delay, index) {
            var _this = this;
            if (delay === void 0) { delay = 0; }
            var fade = game.add.tween(star).from({ alpha: 0 }, duration / 3, Phaser.Easing.Quadratic.Out, true, delay);
            var scale = game.add.tween(star.scale).from({ x: 4, y: 4 }, duration, Phaser.Easing.Back.Out, true, delay);
            var spin = game.add.tween(star).from({ angle: star.angle + 30 }, duration, Phaser.Easing.Quadratic.Out, true, delay);
            spin.onStart.add(function () {
                _this.game.sound.play('star' + (index + 1), 0.35);
            }, this);
            star.visible = true;
        };
        GameComplete.prototype.update = function () {
            var prevTimeElapsed = this._timeElapsed;
            this._timeElapsed += this.game.time.physicsElapsed;
            if (this._timeElapsed > this._scoreIncrementDelay) {
                if (prevTimeElapsed <= this._scoreIncrementDelay) {
                    if (this.score > 0) {
                        this._scoreSound = this.game.sound.play('scoreCount', 1, true);
                        this._scoreBounceTween = this.addBounceTween(this._scoreField);
                    }
                }
                if (this._displayedScore < this.score) {
                    this._displayedScore = Phaser.Math.linear(0, this.score, (this._timeElapsed - this._scoreIncrementDelay) / this._scoreIncrementDuration);
                    this._displayedScore = Phaser.Math.min(Math.round(this._displayedScore), this.score);
                    this._scoreField.text = this._displayedScore.toString();
                    if (this._displayedScore > this._previousHighScore) {
                        this._highScoreField.text = this._displayedScore.toString();
                        if (this._highScoreBounceTween == null) {
                            this._highScoreBounceTween = this.addBounceTween(this._highScoreField);
                        }
                    }
                    if (this._displayedScore == this.score) {
                        this._scoreSound.stop();
                        this._scoreBounceTween.stop();
                        if (this._highScoreBounceTween != null)
                            this._highScoreBounceTween.stop();
                        this._scoreField.scale.set(1);
                        this._highScoreField.scale.set(1);
                    }
                }
            }
        };
        GameComplete.prototype.addBounceTween = function (sprite) {
            var tween = this.game.add.tween(sprite.scale);
            tween.to({ x: 1.35, y: 1.35 }, 200, Phaser.Easing.Quadratic.Out, true, 0, -1, true);
            return tween;
        };
        GameComplete.prototype.resize = function () {
            this._onResize();
        };
        GameComplete.prototype.play = function () {
            this.game.sound.play('button');
            var saveData = F84.PlayerData.Instance.saveData;
            var finishedAllGames = true;
            for (var game in saveData.stars) {
                if (!(saveData.stars[game][0] && saveData.stars[game][1] && saveData.stars[game][2])) {
                    finishedAllGames = false;
                }
            }
            if (finishedAllGames && !saveData.seenEnding)
                this.game.state.start('FinalGameComplete');
            else
                this.game.state.start('LevelSelect');
        };
        GameComplete.prototype.shutdown = function () {
            if (this._scoreSound) {
                this._scoreSound.stop();
                this._scoreSound = null;
            }
            this._highScoreBounceTween = null;
            this._scoreBounceTween = null;
        };
        GameComplete.characterOffset = {
            'JumpRope': new Phaser.Point(150 + 20, -10),
            'Dodgeball': new Phaser.Point(150 + 50, 0),
            'TicTacToe': new Phaser.Point(150 + 84, 0),
            'Basketball': new Phaser.Point(150 + 20, 0),
            'FootRace': new Phaser.Point(150 + 160, 0),
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
    var LevelSelect = (function (_super) {
        __extends(LevelSelect, _super);
        function LevelSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LevelSelect.prototype.create = function () {
            var _this = this;
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            var dragGroup = this.dragGroup = new F84.DraggableGroup(this.game, true, false);
            this.add.existing(dragGroup);
            if (LevelSelect.dragPosition)
                dragGroup.x = LevelSelect.dragPosition;
            var bg1 = this.add.sprite(0, 0, 'mapBG1', null, dragGroup);
            dragGroup.enableDragging(bg1);
            var bg2 = this.add.sprite(bg1.right, 0, 'mapBG2', null, dragGroup);
            dragGroup.enableDragging(bg2);
            dragGroup.minX = -(bg2.right - this.world.bounds.width);
            dragGroup.maxX = 0;
            if (LevelSelect.firstTime) {
                dragGroup.x = dragGroup.minX;
                var tween = this.add.tween(dragGroup);
                tween.to({ x: dragGroup.maxX }, 2200, Phaser.Easing.Cubic.InOut, true);
            }
            var mapData = this.cache.getJSON('mapData');
            var popups = [];
            for (var _i = 0, mapData_1 = mapData; _i < mapData_1.length; _i++) {
                var game = mapData_1[_i];
                var group = this.createGroup(game);
                popups.push(group.getByName('popup'));
            }
            var arrow = this.add.sprite(800, 420, 'mapArrow', null, dragGroup);
            var backButton = this.add.button(0, 0, 'backButton', this.back);
            F84.GameFactory.addButtonBounce(this.game, backButton);
            this._onResize = function () {
                backButton.alignIn(_this.world.bounds, Phaser.TOP_LEFT, -10, -10);
            };
            var animatedBuild = function () {
                if (LevelSelect.firstTime)
                    popups = popups.reverse();
                for (var i = 0; i < popups.length; i++) {
                    var popup = popups[i];
                    _this.add.tween(popup).from({ alpha: 0, y: popup.y + 100 }, 500, Phaser.Easing.Quadratic.Out, true, i * 150);
                }
            };
            animatedBuild();
            this.resize();
            LevelSelect.firstTime = false;
        };
        LevelSelect.prototype.createGroup = function (game) {
            var _this = this;
            var group = this.add.group(this.dragGroup);
            group.x = game.x;
            group.y = game.y;
            var popupGroup = this.add.group(group, 'popup');
            var box = this.add.sprite(0, -40, 'mapBox' + game.name, null, popupGroup);
            box.anchor.set(0.5, 1);
            var style = { font: F84.Fonts.BoldFont, fill: 'white', fontSize: 26 };
            var label = this.add.text(0, 0, F84.Strings.get(game.name), style, popupGroup);
            label.alignIn(box, Phaser.TOP_CENTER, 0, -game.headerOffset + 1);
            var stars = F84.PlayerData.Instance.saveData.stars[game.name];
            var starCount = stars.reduce(function (i, star) { return star ? i + 1 : i; }, 0);
            var star1 = this.add.sprite(0, 0, 'uiStarSmall', null, popupGroup);
            star1.anchor.set(0.5);
            star1.scale.set(1.09);
            star1.alignIn(box, Phaser.BOTTOM_CENTER, -49, -12);
            if (!(starCount > 0))
                star1.visible = false;
            var star2 = this.add.sprite(0, 0, 'uiStarBig', null, popupGroup);
            star2.anchor.set(0.5);
            star2.scale.set(1.09);
            star2.alignIn(box, Phaser.BOTTOM_CENTER, 4, -32);
            if (!(starCount > 1))
                star2.visible = false;
            var star3 = this.add.sprite(0, 0, 'uiStarSmall', null, popupGroup);
            star3.anchor.set(0.5);
            star3.scale.set(1.09);
            star3.angle = 20;
            star3.alignIn(box, Phaser.BOTTOM_CENTER, 54, -12);
            if (!(starCount > 2))
                star3.visible = false;
            var button = this.add.button(0, 0, 'playButton', function () { return _this.play(game.name); });
            button.anchor.set(0.5);
            F84.GameFactory.addButtonBounce(this.game, button);
            popupGroup.add(button);
            var character = this.add.sprite(60, -100, 'mapCharacter' + game.name, null, group);
            character.anchor.set(0, 0.5);
            return group;
        };
        LevelSelect.prototype.resize = function () {
            this._onResize();
        };
        LevelSelect.prototype.play = function (game) {
            this.game.sound.play('button');
            this.game.state.start('CharacterDialogue', true, false, game);
        };
        LevelSelect.prototype.back = function () {
            this.game.sound.play('button');
            this.game.state.start('MainMenu');
        };
        LevelSelect.prototype.shutdown = function () {
            LevelSelect.dragPosition = this.dragGroup.x;
        };
        LevelSelect.firstTime = true;
        return LevelSelect;
    }(F84.ResizableState));
    F84.LevelSelect = LevelSelect;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainMenu.prototype.create = function () {
            var _this = this;
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            F84.Music.switchMusic(this.game, 'menuMusic');
            var background = this.add.sprite(0, 0, 'splashBg');
            var roadrunner = this.add.sprite(0, 0, 'splashRoadrunner');
            var elmer = this.add.sprite(0, 0, 'splashElmer');
            elmer.anchor.set(0.5, 0.9);
            var daffy = this.add.sprite(0, 0, 'splashDaffy');
            var rightPanel = this.add.group();
            var blackboard = this.add.sprite(0, 0, 'splashBlackboard', null, rightPanel);
            var bugs = this.add.sprite(0, 0, 'splashBugs');
            var buttonGroup = this.add.group(rightPanel);
            var playButton = this.add.button(0, 0, 'playButton', this.play, this);
            playButton.anchor.set(0.5, 0.5);
            F84.GameFactory.addButtonBounce(this.game, playButton);
            buttonGroup.add(playButton);
            if (F84.PlayerData.Instance.saveData.gameStarted) {
                var resetButton = this.add.button(-170, -20, 'restartButton', this.reset, this);
                F84.GameFactory.addButtonBounce(this.game, resetButton);
                buttonGroup.add(resetButton);
            }
            var muteButton = this.add.button(0, 0, 'soundOn', function () {
                _this.game.sound.mute = !_this.game.sound.mute;
                var key = _this.game.sound.mute ? 'soundOff' : 'soundOn';
                muteButton.loadTexture(key);
                _this.game.sound.play('button');
            });
            rightPanel.add(muteButton);
            muteButton.anchor.set(0.5);
            F84.GameFactory.addButtonBounce(this.game, muteButton);
            var splashLogo = this.add.image(0, 0, 'splashLogo', null, rightPanel);
            var tweety = this.add.sprite(0, 0, 'tweetyJump');
            tweety.scale.set(0.4);
            tweety.animations.add('jump', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0]).play(20, true);
            var rightPanelTween = this.add.tween(rightPanel);
            rightPanelTween.from({ x: rightPanel.x + 400 }, 500, Phaser.Easing.Cubic.Out, true);
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                background.alignIn(_this.world.bounds, Phaser.CENTER);
                roadrunner.alignIn(_this.world.bounds, Phaser.CENTER, -500, 140);
                elmer.alignIn(_this.world.bounds, Phaser.CENTER, -230, -80);
                daffy.alignIn(_this.world.bounds, Phaser.BOTTOM_CENTER, -245, 190);
                blackboard.alignIn(_this.world.bounds, Phaser.CENTER, 456, 0);
                bugs.alignIn(_this.world.bounds, Phaser.CENTER, 0, 20);
                var width = Math.min(_this.world.bounds.width, 1024);
                var bounds = new Phaser.Rectangle(_this.world.bounds.centerX - width / 2, _this.world.bounds.top, width, 576);
                if (F84.Game.Instance.width / F84.Game.Instance.height < 1.61) {
                    splashLogo.alignIn(_this.world.bounds, Phaser.RIGHT_CENTER, -10, -10);
                }
                else {
                    splashLogo.alignIn(_this.world.bounds, Phaser.CENTER, 310, -10);
                }
                tweety.alignTo(splashLogo, Phaser.TOP_CENTER, 0, -8);
                buttonGroup.alignIn(bounds, Phaser.BOTTOM_RIGHT, -18, -18);
                muteButton.alignIn(bounds, Phaser.TOP_RIGHT, -22, -16);
            };
            this.resize();
            var characterTween = function (character, xOffset, yOffset, delay) {
                var tween = _this.add.tween(character);
                tween.from({ x: character.x + xOffset, y: character.y + yOffset }, 600, Phaser.Easing.Cubic.Out, true, delay);
                var fade = _this.add.tween(character);
                fade.from({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true, delay);
            };
            characterTween(bugs, 600, 0, 300);
            characterTween(roadrunner, -600, 0, 350);
            characterTween(daffy, 0, 200, 460);
            var elmerTween = this.add.tween(elmer.scale);
            elmerTween.from({ x: 0.1, y: 0.1 }, 500, Phaser.Easing.Back.Out, true, 510);
            var elmerFade = this.add.tween(elmer);
            elmerFade.from({ alpha: 0 }, 200, Phaser.Easing.Linear.None, true, 510);
            characterTween(tweety, 0, -100, 600);
        };
        MainMenu.prototype.resize = function () {
            this._onResize();
        };
        MainMenu.prototype.play = function () {
            this.game.sound.play('button');
            F84.PlayerData.Instance.saveData.gameStarted = true;
            F84.PlayerData.Instance.save();
            this.game.state.start('LevelSelect');
        };
        MainMenu.prototype.reset = function () {
            var _this = this;
            this.game.sound.play('button');
            var config = {
                messageText: F84.Strings.get('ResetGameMessage'),
                yesFunction: function () {
                    F84.PlayerData.Instance.reset();
                    _this.game.state.start('MainMenu');
                },
                yesContext: this
            };
            var yesNoDialogueGroup = new F84.YesNoDialogueGroup(this.game, config);
            this.add.existing(yesNoDialogueGroup);
        };
        return MainMenu;
    }(F84.ResizableState));
    F84.MainMenu = MainMenu;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var SaveData = (function () {
        function SaveData() {
            this.gameStarted = false;
            this.stars = {
                JumpRope: [false, false, false],
                Dodgeball: [false, false, false],
                TicTacToe: [false, false, false],
                Basketball: [false, false, false],
                FootRace: [false, false, false],
            };
            this.highScore = {
                JumpRope: 0,
                Dodgeball: 0,
                TicTacToe: 0,
                Basketball: 0,
                FootRace: 0,
            };
            this.seenEnding = false;
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
            var loadBar = this.add.sprite(0, 0, 'loadBar');
            var loadFill = this._loadFill = this.add.sprite(0, 0, 'loadFill');
            var loadMask = this._loadMask = this.add.graphics(0, 0);
            loadFill.mask = loadMask;
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(loadBG, _this.world.bounds);
                loadBar.alignIn(_this.world.bounds, Phaser.CENTER, 0, 0);
                loadFill.alignIn(loadBar, Phaser.CENTER, 0, 86);
            };
            this.resize();
            this.load.webfont('curse-casual', 'curse-casual');
            this.load.webfont('luckiestguy', 'luckiestguy');
            this.loadImages('./assets/images/temp/', {
                whiteSquare: 'white-square',
                arrowButton: 'arrow-button',
                quitButton: 'gray-quitButton',
                textButton: 'text-button',
                soundButtonOn: 'gray-bigSoundOn',
                soundButtonOff: 'gray-bigSoundOff'
            });
            this.loadImages('./assets/images/ui/', {
                restartButton: 'game-button-again',
                playButton: 'game-button-play',
                backButton: 'game-button-goback',
                wbLogo: 'game-logo-wb',
                splashBg: 'lt-bts-splash-bg',
                splashBlackboard: 'lt-bts-splash-blackboard',
                splashBugs: 'lt-bts-splash-bunny',
                splashDaffy: 'lt-bts-splash-daffy',
                splashElmer: 'lt-bts-splash-elmer',
                splashRoadrunner: 'lt-bts-splash-runner',
                soundOn: 'game-button-sound',
                soundOff: 'game-button-sound-off',
                gradeA: 'lt-bts-game-grade-a',
                gradeASmall: 'lt-bts-game-best-grade-a',
                'gradeA+': 'lt-bts-game-grade-a+',
                'gradeA+Small': 'lt-bts-game-best-grade-a+',
                gradeUnknown: 'lt-bts-game-grade-questionmark',
                gradeUnknownSmall: 'lt-bts-game-best-grade-questionmark',
                gradeB: 'lt-bts-game-grade-b',
                gradeBSmall: 'lt-bts-game-best-grade-b',
                clock: 'game-button-clock',
                pauseButton: 'game-button-stop',
                confirmButton: 'lt-bts-ui-popup-btn-confirm',
                exitButton: 'lt-bts-ui-popup-btn-exit',
                helpButton: 'lt-bts-ui-popup-btn-help',
                homeButton: 'lt-bts-ui-popup-btn-home',
                bigSoundOff: 'lt-bts-ui-popup-btn-sound-off',
                bigSoundOn: 'lt-bts-ui-popup-btn-sound-on',
                popupContainer: 'lt-bts-ui-popup-container',
                finalBG: 'game-final-screen-bg',
                timesUpGlow: 'lt-bts-game-timeout-glow',
                countdownGlow: 'lt-bts-game-pacing-glow',
                points20: 'lt-bts-game-point-1',
                points50: 'lt-bts-game-point-2',
                points100: 'lt-bts-game-point-3',
                points200: 'lt-bts-game-point-4',
                points300: 'lt-bts-game-point-5',
                pointsMinus50: 'lt-bts-game-point-6',
                pointsMinus100: 'lt-bts-game-point-7'
            });
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/', {
                splashLogo: 'game-logo-looney-tunes'
            });
            this.loadImages('./assets/images/map/game-', {
                mapArrow: 'arrow',
                mapBG1: 'map-bg01',
                mapBG2: 'map-bg02',
                mapBoxBasketball: 'ui-bunny',
                mapCharacterBasketball: 'ui-bunny-character',
                mapBoxTicTacToe: 'ui-daffy',
                mapCharacterTicTacToe: 'ui-daffy-character',
                mapBoxDodgeball: 'ui-elmer',
                mapCharacterDodgeball: 'ui-elme-character',
                mapBoxFootRace: 'ui-runner',
                mapCharacterFootRace: 'ui-runner-character',
                mapBoxJumpRope: 'ui-tweety',
                mapCharacterJumpRope: 'ui-tweety-character',
                uiStarBig: 'ui-star-big',
                uiStarSmall: 'ui-star-small',
            });
            this.loadImages('./assets/images/ui/lt-bts-game-', {
                introBasketball: 'logo-bunny',
                introCharacterBasketball: 'start-bunny',
                introTicTacToe: 'logo-daffy',
                introCharacterTicTacToe: 'start-daffy',
                introDodgeball: 'logo-elmer',
                introCharacterDodgeball: 'start-elmer',
                introFootRace: 'logo-runner',
                introCharacterFootRace: 'start-runner',
                introJumpRope: 'logo-tweety',
                introCharacterJumpRope: 'start-tweety',
                introBG: 'start-bg',
                introCard: 'start-card',
                introSpeakline: 'start-speakline',
                introCardBasketball: 'start-image-bugs',
                introCardDodgeball: 'start-image-elmer',
                introCardFootRace: 'start-image-foot-race',
                introCardJumpRope: 'start-image-jumprope',
                introCardTicTacToe: 'start-image-tic-tac-toe',
                recapCard: 'recap-card',
                uiStar: 'grade-star',
                uiStar2: 'grade-star-2',
                recapCharacterBasketball: 'recap-bugs',
                recapCharacterDodgeball: 'recap-elmer',
                recapCharacterFootRace: 'recap-runner',
                recapCharacterJumpRope: 'recap-tweety',
                recapCharacterTicTacToe: 'recap-daffy',
            });
            this.loadImages('./assets/images/ui/', {
                uiGoalBasketball: 'lt-goal-description-basketball',
                uiGoalDodgeball: 'lt-goal-description-dodgball',
                uiGoalFootRace: 'lt-goal-description-footrace',
                uiGoalJumpRope: 'lt-goal-description-jumprope',
                uiGoalTicTacToe: 'lt-goal-description-tictactoe',
            });
            this.loadImages('./assets/images/tutorial/lt-goal-tutorial-', {
                tutorialDodgeball: 'dodgeball',
                tutorialFootRace: 'foot-race',
                tutorialBasketball: 'jump-basketball',
                tutorialJumpRope: 'jump-rope',
                tutorialTicTacToe: 'tic-tac-toe',
            });
            this.loadImages('./assets/images/tutorial/lt-control-tutorial-', {
                tutorialFingerClick: 'finger-click',
                tutorialFingerHover: 'finger-hover',
                tutorialMouseClick: 'mouse-click',
                tutorialMouseHover: 'mouse-hover',
                tutorialArrow: 'dodgeball-arrow',
            });
            this.loadImages('./assets/images/game/tic-tac-toe/game-bg-', {
                ticCircle: 'circle',
                ticYellowCircle: 'circle-yellow',
                ticCross: 'cross',
                ticYellowCross: 'cross-yellow',
                ticLine: 'win-line',
                ticGlow: 'tic-tac-toe-glow',
                ticDaffyNormal: 'daffy-general',
                ticDaffyHappy: 'daffy-happy',
                ticDaffyNo: 'daffy-no',
                ticDaffyRematch: 'daffy-onemoretime',
                ticPound: 'pound',
                ticBG: 'tic-tac-toe',
                horizontalMark: 'scoreboard-horizontal',
                verticalMark: 'scoreboard-vertical'
            });
            this.loadImages('./assets/images/game/foot-race/game-bg-', {
                raceCoyote1: 'coyote01',
                raceCoyote2: 'coyote02',
                raceCoyote3: 'coyote03',
                raceCoyote4: 'coyote04',
                raceCoyoteReaction1: 'coyote-popup01',
                raceCoyoteReaction2: 'coyote-popup02',
                raceExplosion: 'explode',
                raceObstacle1: 'obstacles01',
                raceObstacle1Broken: 'obstacles-explode01',
                raceObstacle2: 'obstacles02',
                raceObstacle2Broken: 'obstacles-explode02',
                raceObstacle3: 'obstacles03',
                raceObstacle3Broken: 'obstacles-explode03',
                raceObstacle4: 'obstacles04',
                raceObstacle4Broken: 'obstacles-explode04',
                raceObstacle5: 'obstacles05',
                raceObstacle5Broken: 'obstacles-explode05',
                raceObstacle6: 'obstacles06',
                raceObstacle6Broken: 'obstacles-explode06',
                raceObstacle7: 'obstacles07',
                raceObstacle7Broken: 'obstacles-explode07',
                raceBGStart: 'roadrace-start',
                raceBG0: 'roadrace01',
                raceBG1: 'roadrace02',
                raceBG2: 'roadrace03',
                raceBG3: 'roadrace04',
                roadrunnerStand: 'roadrunner-stand'
            });
            this.load.atlasJSONArray('roadrunner', './assets/images/game/foot-race/roadrunner.png', './assets/images/game/foot-race/roadrunner.json');
            this.load.atlasJSONArray('roadrunnerStop', './assets/images/game/foot-race/roadrunner-stop.png', './assets/images/game/foot-race/roadrunner-stop.json');
            this.load.atlasJSONArray('dustTrail', './assets/images/game/foot-race/dust-trail.png', './assets/images/game/foot-race/dust-trail.json');
            this.loadImages('./assets/images/game/jump-rope/lt-jump-', {
                jumpBG: 'background',
            });
            this.load.atlasJSONArray('jumpRope', './assets/images/game/jump-rope/jumprope.png', './assets/images/game/jump-rope/jumprope.json');
            this.load.atlasJSONArray('tweetyJump', './assets/images/game/jump-rope/tweety-jump.png', './assets/images/game/jump-rope/tweety-jump.json');
            this.load.atlasJSONArray('tweetyJumpMove', './assets/images/game/jump-rope/tweety-jump-move.png', './assets/images/game/jump-rope/tweety-jump-move.json');
            this.loadImages('./assets/images/game/dodgeball/lt19-dodge-', {
                dodgeBall: 'ball',
                dodgeBG1: 'bg-base',
                dodgeBG2: 'wall-1',
                dodgeBG3: 'wall-2',
                dodgeBG4: 'wall-3',
                dodgeElmerHit: 'character-hit-1',
                dodgeShadow: 'character-shadow',
                dodgeBurst: 'character-temp-burst',
                dodgeHandPull: 'sling-pull-back',
                dodgeHandRelease: 'sling-pull-release',
                dodgeSlingshot: 'sling-shot',
                dodgeSlingshotBand: 'sling-shot-band',
            });
            this.load.atlasJSONArray('dodgeElmerWalk', './assets/images/game/dodgeball/elmer-walk.png', './assets/images/game/dodgeball/elmer-walk.json');
            this.loadImages('./assets/images/game/basketball/lt-bball-', {
                bballDot: 'aimer',
                bballBG: 'background',
                bballBall: 'ball',
                bballBugsFail: 'bugs-bunny-fail',
                bballBugsWin: 'bugs-bunny-success',
                bballBackboard: 'hoop-backboard',
                bballBase: 'hoop-base',
                bballNet1: 'hoop-net-1',
                bballNet2: 'hoop-net-2',
                bballRing: 'hoop-ring',
                bballRiser: 'hoop-riser',
                bballOverlay: 'hud-stretch',
                bballGlow: 'glow',
            });
            this.load.atlasJSONArray('bballBugsShoot', './assets/images/game/basketball/bugs-shoot.png', './assets/images/game/basketball/bugs-shoot.json');
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/', {});
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/images/', {});
            this.load.json('mapData', './assets/json/map-data.json');
            this.load.json('minigameData', './assets/json/minigame-data.json');
            this.load.json('elmerSpawns', './assets/json/elmer-spawns.json');
            this.load.json('dialogueData', './assets/json/dialogue-offset-data.json');
            this.loadAudio('./assets/audio/sfx-', {
                button: 'button',
                scoreCount: 'score-count',
                star1: 'star-1',
                star2: 'star-2',
                star3: 'star-3',
                countdown: 'countdown',
                points: 'points',
                bballHitFloor1: 'basketball-floor-1',
                bballHitFloor2: 'basketball-floor-2',
                bballHitFloor3: 'basketball-floor-3',
                bballNet1: 'basketball-net-1',
                bballNet2: 'basketball-net-2',
                bballRim1: 'basketball-rim-1',
                bballRim2: 'basketball-rim-2',
                bballShot: 'basketball-shot',
                dodgeball1: 'dodgeball-1',
                dodgeball2: 'dodgeball-2',
                dodgeball3: 'dodgeball-3',
                dodgeball4: 'dodgeball-4',
                footstep1: 'footstep-1',
                footstep2: 'footstep-2',
                footstep3: 'footstep-3',
                footstep4: 'footstep-4',
                footstep5: 'footstep-5',
                changeLane: 'change-lane',
                impact1: 'impact-1',
                impact2: 'impact-2',
                impact3: 'impact-3',
                jump: 'jump',
                jumpRope: 'jump-rope',
                jumpRopeHit: 'jump-rope-hit',
                ticCircle: 'o',
                ticCross: 'x',
                slingshot: 'slingshot-pull',
                slingshotRelease: 'slingshot-release'
            });
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
            this.game.state.start('MainMenu');
        };
        return Preloader;
    }(F84.ResizableState));
    F84.Preloader = Preloader;
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
    var StoryIntro = (function (_super) {
        __extends(StoryIntro, _super);
        function StoryIntro() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.storyBeats = 4;
            return _this;
        }
        StoryIntro.prototype.create = function () {
            var _this = this;
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            this.index = 0;
            var background = this.add.sprite(0, 0, 'storyBG');
            var image = this.image = this.add.sprite(0, 0, 'story1');
            var box = this.add.sprite(0, 0, 'storyTextBox');
            var playButton = this.add.button(0, 0, 'levelPlayBtn', this.next, this);
            F84.GameFactory.addButtonBounce(this.game, playButton);
            var style = { fill: 'white', fontSize: 26, font: F84.Fonts.DefaultFont, wordWrap: true, wordWrapWidth: 650, align: 'center', boundsAlignH: 'center' };
            var text = this.textfield = this.add.text(0, 0, F84.Strings.get('StoryText1'), style);
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                background.alignIn(_this.world.bounds, Phaser.CENTER);
                image.alignIn(_this.world.bounds, Phaser.CENTER, 0, -60);
                box.alignIn(_this.world.bounds, Phaser.BOTTOM_CENTER, 0, 0);
                _this.textfield.alignIn(box, Phaser.CENTER, -10, 0);
                playButton.alignIn(_this.world.bounds, Phaser.BOTTOM_RIGHT, -20, -20);
            };
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
                this.image.loadTexture('story' + (this.index + 1));
                this.runTweens();
                this.textfield.text = F84.Strings.get('StoryText' + (this.index + 1));
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
            _this._background = _this.game.add.image(0, 0, 'popupContainer', null, _this._popupGroup);
            _this._message = _this.game.add.text(0, 0, config.messageText, { fill: F84.GameColors.TAN, fontSize: 52, font: F84.Fonts.DefaultFont, wordWrap: true, wordWrapWidth: 450, align: "center" }, _this._popupGroup);
            _this._yesButton = _this.game.add.button(0, 0, 'confirmButton', _this.yesButtonPressed, _this, null, null, null, null, _this._popupGroup);
            F84.GameFactory.addButtonBounce(_this.game, _this._yesButton);
            _this._noButton = _this.game.add.button(0, 0, 'exitButton', _this.noButtonPressed, _this, null, null, null, null, _this._popupGroup);
            F84.GameFactory.addButtonBounce(_this.game, _this._noButton);
            _this._logo = game.add.image(0, 0, 'splashLogo', null, _this);
            _this._logo.anchor.set(0.5, 0.5);
            _this._logo.scale.set(0.6);
            _this.resize();
            _this.fixedToCamera = config.fixedToCamera;
            var animatedBuild = function () {
                _this.resize();
                _this.game.add.tween(_this._overlay).from({ alpha: 0 }, 150, Phaser.Easing.Quadratic.Out, true);
                _this.game.add.tween(_this._logo).from({ y: -150 }, 275, Phaser.Easing.Back.Out, true, 50);
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
            this._popupGroup.alignIn(bounds, Phaser.CENTER, 0, 75);
            this._message.alignIn(this._background, Phaser.TOP_CENTER, 0, -45);
            this._logo.alignIn(F84.Game.Instance.getBounds(), Phaser.TOP_CENTER, 0, -45);
            this._yesButton.alignIn(this._background, Phaser.BOTTOM_CENTER, 71, 37);
            this._noButton.alignIn(this._background, Phaser.BOTTOM_CENTER, -76, 37);
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
    var DepthObject = (function (_super) {
        __extends(DepthObject, _super);
        function DepthObject(game, state, image, position, depthWorld, alwaysBehind) {
            var _this = _super.call(this, game, position.x, position.y, image) || this;
            _this.alwaysBehind = false;
            _this.fixedPosition = false;
            _this.state = state;
            _this.anchor = new Phaser.Point(0.5, 1);
            _this.depthWorld = depthWorld;
            _this.position3 = position;
            _this.baseWidth = _this.width;
            _this.baseHeight = _this.height;
            _this.components = [];
            _this.onRemove = new Phaser.Signal();
            if (alwaysBehind != null)
                _this.alwaysBehind = alwaysBehind;
            _this.updateSpritePosition();
            return _this;
        }
        DepthObject.prototype.update = function () {
            for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                var comp = _a[_i];
                comp.update();
            }
            if (!this.fixedPosition)
                this.updateSpritePosition();
        };
        DepthObject.prototype.updateSpritePosition = function () {
            var worldFalloff = this.depthWorld.falloff;
            var falloffPoint = this.depthWorld.falloffPoint;
            var n = 1 / (1 - worldFalloff);
            var falloff = Math.pow(worldFalloff, Math.log(this.position3.z + 1) * n);
            var xOffset = (this.position3.x - falloffPoint.x) * falloff;
            var yOffset = (this.position3.y - falloffPoint.y) * falloff;
            this.position.x = falloffPoint.x + xOffset;
            this.position.y = falloffPoint.y + yOffset;
            this.width = this.baseWidth * falloff;
            this.height = this.baseHeight * falloff;
        };
        DepthObject.prototype.remove = function () {
            this.destroy();
            for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                var comp = _a[_i];
                comp.destroy();
            }
            this.onRemove.dispatch(this);
        };
        DepthObject.prototype.destroy = function (destroyChildren) {
            _super.prototype.destroy.call(this, destroyChildren);
            this.depthWorld.remove(this);
        };
        DepthObject.prototype.addComponent = function (comp) {
            this.components.push(comp);
            return comp;
        };
        DepthObject.prototype.getComponent = function (type) {
            for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                var comp = _a[_i];
                if (comp.type === type)
                    return comp;
            }
        };
        return DepthObject;
    }(Phaser.Sprite));
    F84.DepthObject = DepthObject;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var DepthObjectComponent = (function () {
        function DepthObjectComponent(game, parent) {
            this.game = game;
            this.parent = parent;
        }
        DepthObjectComponent.prototype.update = function () {
        };
        DepthObjectComponent.prototype.destroy = function () {
        };
        DepthObjectComponent.prototype.getComponent = function (type) {
            return this.parent.getComponent(type);
        };
        return DepthObjectComponent;
    }());
    F84.DepthObjectComponent = DepthObjectComponent;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var DepthWorld = (function () {
        function DepthWorld(state, falloffPoint) {
            this.falloff = 1.5;
            this.zScale = 0.002;
            this.state = state;
            this.objects = [];
            this.falloffPoint = falloffPoint;
            this.bottom = this.state.world.bounds.height;
        }
        DepthWorld.prototype.update = function () {
        };
        DepthWorld.prototype.sortGroup = function (group) {
            group.customSort(function (a, b) {
                if (!(a instanceof F84.DepthObject))
                    return -1;
                if (!(b instanceof F84.DepthObject))
                    return 1;
                if (a.alwaysBehind)
                    return -1;
                else if (b.alwaysBehind)
                    return 1;
                return b.position3.z - a.position3.z;
            });
        };
        DepthWorld.prototype.add = function (obj) {
            this.objects.push(obj);
        };
        DepthWorld.prototype.remove = function (obj) {
            F84.ArrayUtils.remove(this.objects, obj);
        };
        DepthWorld.prototype.getDistanceSquared = function (p1, p2) {
            var dx = p1.x - p2.x;
            var dz = (p1.z - p2.z) / this.zScale;
            return dx * dx + dz * dz;
        };
        DepthWorld.prototype.worldToScreenPoint = function (pt) {
            var worldFalloff = this.falloff;
            var falloffPoint = this.falloffPoint;
            var n = 1 / (1 - worldFalloff);
            var falloff = Math.pow(worldFalloff, Math.log(pt.z + 1) * n);
            var xOffset = (pt.x - falloffPoint.x) * falloff;
            var yOffset = (pt.y - falloffPoint.y) * falloff;
            var x = falloffPoint.x + xOffset;
            var y = falloffPoint.y + yOffset;
            return new Phaser.Point(x, y);
        };
        DepthWorld.prototype.screenToWorldPoint = function (screenX, screenY) {
            var worldFalloff = this.falloff;
            var n = 1 / (1 - worldFalloff);
            var falloffPoint = this.falloffPoint;
            var xOffset = screenX - falloffPoint.x;
            var yOffset = screenY - falloffPoint.y;
            var worldY = this.bottom;
            var falloff = yOffset / (worldY - falloffPoint.y);
            var worldX = (xOffset / falloff) + falloffPoint.x;
            var worldZ = Math.pow(Math.E, (Math.log(falloff) / Math.log(worldFalloff)) / n) - 1;
            return { x: worldX, y: worldY, z: worldZ };
        };
        return DepthWorld;
    }());
    F84.DepthWorld = DepthWorld;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var HomingComponent = (function (_super) {
        __extends(HomingComponent, _super);
        function HomingComponent(game, parent, startEnabled, homingForce, homingDistance) {
            var _this = _super.call(this, game, parent) || this;
            _this.type = 'HomingComponent';
            _this.homingObjects = [];
            _this.homingEnabled = startEnabled;
            _this.homingForce = homingForce;
            _this.homingDistance = homingDistance;
            _this.phys = _this.getComponent('PhysicsComponent');
            return _this;
        }
        HomingComponent.prototype.update = function () {
            _super.prototype.update.call(this);
            var dt = this.game.time.physicsElapsed;
            if (this.homingEnabled && this.homingObjects.length > 0) {
                var phys = this.phys;
                var movementModifier = Math.max(phys.vy / 4000, 0);
                var homingForce = this.homingForce * movementModifier;
                var homingDistance = this.homingDistance;
                var _a = this.getClosestHomingObject(this.parent.position3), closest = _a.closest, dist = _a.distSquared;
                var mult = Math.max((homingDistance * homingDistance) - dist, 0) / (homingDistance * homingDistance);
                var dx = (this.parent.position3.x - closest.position3.x) * homingForce * mult * dt;
                var dz = (this.parent.position3.z - closest.position3.z) * 5 * homingForce * mult * dt;
                this.parent.position3.x -= dx;
                if (dx > 0 && phys.vx > 0)
                    phys.vx -= 12 * homingForce * dx;
                if (dx < 0 && phys.vx < 0)
                    phys.vx -= 12 * homingForce * dx;
                this.parent.position3.z -= dz;
                if (dz > 0 && phys.vz > 0)
                    phys.vz -= 12 * homingForce * dz;
                if (dz < 0 && phys.vz < 0)
                    phys.vz -= 12 * homingForce * dz;
            }
        };
        HomingComponent.prototype.addHomingObject = function (obj) {
            this.homingObjects.push(obj);
        };
        HomingComponent.prototype.setHomingObjects = function (list) {
            this.homingObjects = list;
        };
        HomingComponent.prototype.getClosestHomingObject = function (pos) {
            var closest = this.homingObjects[0];
            var minDist = Number.MAX_VALUE;
            for (var _i = 0, _a = this.homingObjects; _i < _a.length; _i++) {
                var obj = _a[_i];
                var dist = this.parent.depthWorld.getDistanceSquared(pos, obj.position3);
                if (dist < minDist) {
                    minDist = dist;
                    closest = obj;
                }
            }
            return { closest: closest, distSquared: minDist };
        };
        return HomingComponent;
    }(F84.DepthObjectComponent));
    F84.HomingComponent = HomingComponent;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var PhysicsComponent = (function (_super) {
        __extends(PhysicsComponent, _super);
        function PhysicsComponent(game, parent) {
            var _this = _super.call(this, game, parent) || this;
            _this.gravity = 12800;
            _this.bounce = 0.3;
            _this.type = 'PhysicsComponent';
            _this._depthWorld = _this.parent.depthWorld;
            _this.vx = 0;
            _this.vy = 0;
            _this.vz = 0;
            _this.onGround = false;
            _this.gravityEnabled = true;
            _this.onHitGround = new Phaser.Signal();
            _this.onHitGroundEnabled = true;
            _this.yOffset = 0;
            return _this;
        }
        PhysicsComponent.prototype.update = function () {
            _super.prototype.update.call(this);
            var dt = this.game.time.physicsElapsed;
            this.parent.position3.x += this.vx * dt;
            this.parent.position3.y += this.vy * dt;
            this.parent.position3.z += this.vz * dt;
            if (!this.onGround && this.gravityEnabled)
                this.vy += this.gravity * dt;
            this.onGround = false;
            if (this.onHitGroundEnabled) {
                if (this.parent.position3.y > this._depthWorld.bottom && this.vy >= 0) {
                    this.hitGround();
                }
                else if (this.parent.position3.y > this._depthWorld.bottom - this.yOffset && this.vy > 0) {
                    this.hitGround();
                }
            }
        };
        PhysicsComponent.prototype.hitGround = function () {
            this.parent.position3.y = this._depthWorld.bottom - this.yOffset;
            this.onGround = true;
            var vx = this.vx, vy = this.vy, vz = this.vz;
            this.vx = 0;
            this.vy = 0;
            this.vz = 0;
            this.onHitGround.dispatch(vx, vy, vz);
        };
        return PhysicsComponent;
    }(F84.DepthObjectComponent));
    F84.PhysicsComponent = PhysicsComponent;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ShadowComponent = (function (_super) {
        __extends(ShadowComponent, _super);
        function ShadowComponent(game, parent, bottom) {
            var _this = _super.call(this, game, parent) || this;
            _this.type = 'ShadowComponent';
            _this._depthWorld = _this.parent.depthWorld;
            if (!bottom)
                bottom = _this._depthWorld.bottom;
            _this.bottom = bottom;
            _this.updateEnabled = true;
            return _this;
        }
        ShadowComponent.prototype.update = function () {
            _super.prototype.update.call(this);
            if (this.shadow) {
                if (this.updateEnabled) {
                    this.shadow.position3 = {
                        x: this.parent.position3.x,
                        y: this.bottom,
                        z: this.parent.position3.z + 0.001
                    };
                }
                this.shadow.updateSpritePosition();
            }
        };
        ShadowComponent.prototype.addShadow = function (shadow) {
            this.shadow = shadow;
        };
        ShadowComponent.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.shadow.destroy();
        };
        return ShadowComponent;
    }(F84.DepthObjectComponent));
    F84.ShadowComponent = ShadowComponent;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ThrowableComponent = (function (_super) {
        __extends(ThrowableComponent, _super);
        function ThrowableComponent(game, parent, throwScale, invert) {
            var _this = _super.call(this, game, parent) || this;
            _this._invert = false;
            _this.type = 'ThrowableComponent';
            _this.dragPoints = [];
            _this.thrown = false;
            _this.throwScale = throwScale;
            _this.onPickedUp = new Phaser.Signal();
            _this.onThrown = new Phaser.Signal();
            var pos = _this.parent.position3;
            _this.startPosition = { x: pos.x, y: pos.y, z: pos.z };
            _this.parent.inputEnabled = true;
            _this.parent.input.draggable = true;
            _this.parent.events.onDragStart.add(_this.dragStart, _this);
            _this.parent.events.onDragUpdate.add(_this.dragUpdate, _this);
            _this.parent.events.onDragStop.add(_this.dragStop, _this);
            _this.phys = _this.getComponent('PhysicsComponent');
            if (invert)
                _this._invert = true;
            return _this;
        }
        ThrowableComponent.prototype.reset = function () {
            this.thrown = false;
            this.parent.inputEnabled = true;
            this.parent.input.draggable = true;
        };
        ThrowableComponent.prototype.dragStart = function () {
            this.phys.gravityEnabled = false;
            this.phys.vx = 0;
            this.phys.vy = 0;
            this.phys.vz = 0;
            this.dragPoints = [];
            this.onPickedUp.dispatch();
        };
        ThrowableComponent.prototype.dragUpdate = function (obj, ptr, x, y) {
            var newX = x;
            var newY = y;
            if (this._invert) {
                newX = this.game.height - ptr.y;
                newY = ptr.x;
            }
            var parent = this.parent;
            parent.position3.z = (this.startPosition.y - newY) * this.throwScale.z;
            var cx = this.startPosition.x;
            parent.position3.x = (newX - cx) * this.throwScale.x + cx;
            var cy = this.startPosition.y;
            parent.position3.y = (newY - cy) * this.throwScale.y + cy;
            this.dragPoints.unshift({ x: parent.position3.x, y: parent.position3.y, z: parent.position3.z });
            if (this.dragPoints.length > 6)
                this.dragPoints.pop();
        };
        ThrowableComponent.prototype.dragStop = function (obj, ptr) {
            var dt = this.game.time.physicsElapsed;
            var phys = this.phys;
            phys.gravityEnabled = true;
            if (this.dragPoints.length == 0)
                return;
            var lastPoint = this.dragPoints[this.dragPoints.length - 1];
            var thisPoint = this.dragPoints[0];
            phys.vx = (1 / this.dragPoints.length) * (thisPoint.x - lastPoint.x) / dt;
            if (phys.vx < -2500)
                phys.vx = -2500;
            if (phys.vx > 2500)
                phys.vx = 2500;
            phys.vy = (1 / this.dragPoints.length) * (thisPoint.y - lastPoint.y) / dt;
            if (phys.vy < -5000)
                phys.vy = -5000;
            phys.vz = (1 / this.dragPoints.length) * (thisPoint.z - lastPoint.z) / dt;
            this.parent.inputEnabled = false;
            this.thrown = true;
            this.onThrown.dispatch();
        };
        ThrowableComponent.prototype.accelerometerThrow = function (velocity) {
            if (!this.thrown) {
                var phys = this.phys;
                phys.gravityEnabled = true;
                phys.vx = velocity.x;
                phys.vy = velocity.y;
                phys.vz = velocity.z;
                this.parent.inputEnabled = false;
                this.thrown = true;
                this.onThrown.dispatch();
            }
        };
        return ThrowableComponent;
    }(F84.DepthObjectComponent));
    F84.ThrowableComponent = ThrowableComponent;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball(game, depthWorld, pos) {
            var _this = _super.call(this, game, depthWorld.state, 'dodgeBall', pos, depthWorld) || this;
            _this.anchor.set(0.5);
            var phys = _this.phys = new F84.PhysicsComponent(_this.game, _this);
            _this.addComponent(phys);
            phys.gravity = 0;
            _this.phys.onHitGround.add(_this.hitGround, _this);
            _this.phys.onHitGround.addOnce(_this.fadeOut, _this);
            var shadow = new F84.DepthObject(_this.game, _this.state, 'dodgeShadow', { x: 0, y: 0, z: 0 }, depthWorld);
            _this.game.add.existing(shadow);
            depthWorld.add(shadow);
            var shadowComp = new F84.ShadowComponent(_this.game, _this);
            shadowComp.addShadow(shadow);
            _this.inputEnabled = true;
            _this.events.onInputDown.add(_this.onInputDown, _this);
            _this.events.onInputUp.add(_this.onInputUp, _this);
            _this.dragging = false;
            _this.thrown = false;
            _this.active = false;
            _this.successfulHit = false;
            _this.onHitGround = new Phaser.Signal();
            _this.onThrown = new Phaser.Signal();
            _this.onDrag = new Phaser.Signal();
            _this.onRebound = new Phaser.Signal();
            return _this;
        }
        Ball.prototype.update = function () {
            _super.prototype.update.call(this);
            if (this.dragging) {
                var _a = this.getPullPosition(), xOffset = _a[0], yOffset = _a[1];
                this.position3.x = this.game.world.bounds.centerX + xOffset;
                this.position3.z = yOffset;
            }
            if (this.position3.z > 5.5)
                this.rebound(0.5, 5.5);
            if (this.position3.z < -0.9)
                this.rebound(0.25, 0);
        };
        Ball.prototype.rebound = function (bounce, position) {
            if (bounce === void 0) { bounce = 0.5; }
            this.onRebound.dispatch();
            if (position != null)
                this.position3.z = position;
            this.phys.vz = -this.phys.vz * bounce;
        };
        Ball.prototype.getPullPosition = function () {
            var pos = this.dragPointer.position;
            var dx = pos.x - this.dragStart.x;
            var dy = pos.y - this.dragStart.y;
            if (dy < 0)
                dy = 0;
            var diff = new Phaser.Point(dx, dy);
            var dist = diff.getMagnitude();
            dist = Math.log(dist + 0.001);
            diff = diff.normalize().multiply(dist * 10, dist * 10);
            var xOffset = diff.x * 0.75;
            var yOffset = -diff.y / 200;
            return [xOffset, yOffset];
        };
        Ball.prototype.onInputDown = function (us, ptr) {
            if (this.thrown)
                return;
            this.dragging = true;
            this.dragStart = ptr.position.clone();
            this.dragPointer = ptr;
            this.onDrag.dispatch();
        };
        Ball.prototype.onInputUp = function () {
            if (this.thrown)
                return;
            this.dragging = false;
            this.thrown = true;
            this.active = true;
            var _a = this.getPullPosition(), xOffset = _a[0], yOffset = _a[1];
            this.phys.vx = -xOffset * 50;
            this.phys.vz = -yOffset * 50;
            this.phys.gravity = 1600;
            this.phys.vy = -175;
            var aimAssist = 0.3;
            var otherPart = 1 - aimAssist;
            var elmer = this.depthWorld.objects.find(function (o) { return o instanceof F84.Elmer; });
            if (elmer) {
                var dz = elmer.position3.z - this.position3.z;
                var time = dz / this.phys.vz;
                var dx = elmer.position3.x - this.position3.x + 80;
                var correctAim = dx / time;
                this.phys.vx = correctAim * aimAssist + this.phys.vx * otherPart;
            }
            this.depthWorld.add(this);
            this.input.enabled = false;
            this.onThrown.dispatch();
        };
        Ball.prototype.hitGround = function (vx, vy, vz) {
            this.phys.vx = vx * 0.5;
            this.phys.vy = vy * -0.5;
            if (Math.abs(this.phys.vy) < 100)
                this.phys.vy = 0;
            this.phys.vz = vz * 0.5;
            this.active = false;
            this.onHitGround.dispatch();
        };
        Ball.prototype.fadeOut = function () {
            var _this = this;
            var fadeTween = this.game.add.tween(this);
            fadeTween.to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            fadeTween.onComplete.add(function () { return _this.remove(); });
        };
        return Ball;
    }(F84.DepthObject));
    F84.Ball = Ball;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var GameState = (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            return _super !== null && _super.apply(this, arguments) || this;
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
            this.isPaused = false;
            this.timescale = new F84.Timescale(this.game, 60);
            this.score = 0;
            this.scoreCounter = 0;
            this.timer = 45;
            this.starConditionMet = false;
        };
        GameState.prototype.createTutorialPrompt = function (onClosed, onClosedContext) {
            var _this = this;
            new F84.TutorialPrompt(this.game, function () {
                new F84.GoalPrompt(_this.game, onClosed, onClosedContext, _this.unpause, _this);
            });
            this.pause();
        };
        GameState.prototype.createTutorialCursor = function () {
            var cursor;
            var setCursorDown;
            if (this.game.device.desktop) {
                cursor = this.game.add.sprite(0, 0, 'tutorialMouseHover');
                setCursorDown = function (down) { return cursor.loadTexture(down ? 'tutorialMouseClick' : 'tutorialMouseHover'); };
            }
            else {
                cursor = this.game.add.sprite(0, 0, 'tutorialFingerHover');
                setCursorDown = function (down) { return cursor.loadTexture(down ? 'tutorialFingerClick' : 'tutorialFingerHover'); };
            }
            return [cursor, setCursorDown];
        };
        GameState.prototype.createHUD = function () {
            var overlay = this.add.sprite(0, 0, 'bballOverlay');
            overlay.width = this.world.bounds.width;
            this.createTimer();
            this.createScore();
            this.createPauseButton();
        };
        GameState.prototype.createTimer = function () {
            var group = this.add.group();
            var icon = this.add.sprite(0, 0, 'clock', null, group);
            var style = { font: F84.Fonts.BoldFont, fill: 'white', fontSize: 40 };
            var timerText = this.timerText = this.game.add.text(0, 0, F84.TimeFormat.format(this.timer), style, group);
            timerText.padding.set(5, 5);
            timerText.setShadow(3, 3, 'black', 0);
            timerText.alignTo(icon, Phaser.RIGHT_CENTER, 5, 0);
            group.alignIn(this.world.bounds, Phaser.TOP_LEFT, -10, -5);
        };
        GameState.prototype.createScore = function () {
            var group = this.add.group();
            var style = { font: F84.Fonts.DefaultFont, fill: F84.GameColors.ORANGE, fontSize: 28 };
            var header = this.add.text(0, 0, F84.Strings.get('Score'), style, group);
            style = { font: F84.Fonts.BoldFont, fill: F84.GameColors.WHITE, fontSize: 52 };
            var score = this.scoreText = this.add.text(0, 0, '0', style, group);
            score.alignTo(header, Phaser.RIGHT_CENTER, 2, 0);
            score.padding.set(5, 5);
            score.setShadow(3, 3, 'black', 0);
            group.alignIn(this.world.bounds, Phaser.TOP_CENTER, 0, 0);
        };
        GameState.prototype.createPauseButton = function () {
            var button = this.add.button(0, 0, 'pauseButton', this.openPauseMenu, this);
            F84.GameFactory.addButtonBounce(this.game, button);
            button.alignIn(this.world.bounds, Phaser.TOP_RIGHT, -10, -5);
        };
        GameState.prototype.createCountdown = function (onComplete, onCompleteContext) {
            var _this = this;
            this.pause();
            var overlay = F84.Overlay.create(this.game, 0.7);
            var group = this.game.add.group();
            var glow = this.game.add.sprite(0, 0, 'countdownGlow', null, group);
            glow.anchor.set(0.5);
            this.createCountdownNumber('3', glow, group);
            group.alignIn(this.world.bounds, Phaser.CENTER);
            var timer = this.time.create();
            timer.add(1000, function () { return _this.createCountdownNumber('2', glow, group); });
            timer.add(2000, function () { return _this.createCountdownNumber('1', glow, group); });
            timer.add(3000, function () {
                overlay.destroy();
                group.destroy();
                _this.unpause();
                if (onComplete)
                    onComplete.call(onCompleteContext);
            });
            timer.start();
        };
        GameState.prototype.createCountdownNumber = function (text, bg, group) {
            var style = { font: F84.Fonts.BoldFont, fill: F84.GameColors.WHITE, fontSize: 150, align: 'center' };
            var number = this.game.add.text(0, 0, text, style, group);
            number.anchor.set(0.5);
            number.alignIn(bg, Phaser.CENTER);
            var rotateTween = this.add.tween(number);
            rotateTween.from({ angle: 90 }, 100, Phaser.Easing.Linear.None, true);
            var scaleTween = this.add.tween(number.scale);
            scaleTween.from({ x: 0.1, y: 0.1 }, 100, Phaser.Easing.Linear.None, true);
            var bounceTween = this.add.tween(number.scale);
            bounceTween.to({ x: 1.2, y: 1.4 }, 60, Phaser.Easing.Quadratic.Out, false, 0, 0, true);
            scaleTween.onComplete.add(function () { return bounceTween.start(); });
            var rotateOutTween = this.add.tween(number);
            rotateOutTween.to({ angle: -90 }, 100, Phaser.Easing.Linear.None, false, 800);
            rotateTween.onComplete.add(function () { return rotateOutTween.start(); });
            var scaleOutTween = this.add.tween(number.scale);
            scaleOutTween.to({ x: 0.1, y: 0.1 }, 100, Phaser.Easing.Linear.None, false, 800);
            rotateTween.onComplete.add(function () { return scaleOutTween.start(); });
            scaleOutTween.onComplete.add(function () { return number.destroy(); });
            this.game.sound.play('countdown');
            return number;
        };
        GameState.prototype.createPointsPopup = function (x, y, amt) {
            var _this = this;
            var key = 'points' + (amt > 0 ? amt : ('Minus' + Math.abs(amt)));
            var pts = this.add.sprite(x, y, key);
            pts.anchor.set(0.5);
            pts.update = function () { return pts.y -= 20 * _this.deltaTime; };
            var tween = this.add.tween(pts.scale);
            tween.from({ x: 0.1, y: 0.1 }, 500, Phaser.Easing.Back.Out, true);
            var tweenOut = this.add.tween(pts.scale);
            tweenOut.to({ x: 0.1, y: 0.1 }, 500, Phaser.Easing.Quadratic.In, false, 100);
            var fadeOut = this.add.tween(pts);
            fadeOut.to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, false, 100);
            tween.onComplete.add(function () { return tweenOut.start(); });
            tween.onComplete.add(function () { return fadeOut.start(); });
            tweenOut.onComplete.add(function () { return pts.destroy(); });
            this.game.sound.play('points');
            return pts;
        };
        GameState.prototype.checkTimesUp = function () {
            if (!this.isPaused && this.timer < 0) {
                this.createTimesUpPopup();
                return true;
            }
            return false;
        };
        GameState.prototype.createTimesUpPopup = function () {
            var _this = this;
            var group = this.game.add.group();
            var glow = this.game.add.sprite(0, 0, 'timesUpGlow', null, group);
            glow.anchor.set(0.5);
            var style = { font: F84.Fonts.BoldFont, fill: F84.GameColors.WHITE, fontSize: 56, align: 'center' };
            var text = this.game.add.text(0, 0, F84.Strings.get('TimesUp'), style, group);
            text.alignIn(glow, Phaser.CENTER);
            group.alignIn(this.world.bounds, Phaser.CENTER);
            this.input.enabled = false;
            this.pause();
            var duration = 500;
            var fadeTween = this.game.add.tween(group).from({ alpha: 0 }, duration, Phaser.Easing.Quadratic.Out, true);
            var scaleTween = this.game.add.tween(group.scale).from({ x: 0.5, y: 0.5 }, duration, Phaser.Easing.Quadratic.Out, true);
            var timer = this.game.time.create(true);
            timer.add(duration + 2000, function () {
                _this.finish();
                _this.input.enabled = true;
            }, this);
            timer.start();
        };
        GameState.prototype.update = function () {
            if (!this.isPaused) {
                this.timer -= this.deltaTime;
                this.timerText.text = F84.TimeFormat.format(Math.ceil(Math.max(this.timer, 0)));
            }
        };
        GameState.prototype.updateScore = function (points) {
            var _this = this;
            this.scoreCounter += points;
            var increment = Math.round(this.scoreCounter / 5);
            var max = this.score + this.scoreCounter;
            var gain = increment > 0;
            var UpdateScore = function () {
                if (gain) {
                    _this.scoreCounter = Math.max(_this.scoreCounter - increment, 0);
                    _this.score = Math.min(_this.score + increment, max);
                }
                else {
                    _this.scoreCounter = Math.min(_this.scoreCounter - increment, 0);
                    _this.score = Math.max(_this.score + increment, max);
                }
                _this.score = Math.max(_this.score, 0);
                _this.scoreText.setText('' + _this.score);
                if (_this.score == 0 && increment < 0)
                    _this.scoreCounter = 0;
            };
            if (this.scoreTimer)
                this.scoreTimer.destroy();
            var timer = this.scoreTimer = this.game.time.create();
            timer.loop(100, function () {
                if (_this.scoreCounter != 0)
                    UpdateScore();
                else
                    timer.destroy();
            });
            timer.start();
        };
        GameState.prototype.openPauseMenu = function () {
            this.game.sound.play('button');
            this.pause();
            var menu = new F84.PauseMenu(this.game, this.unpause, this);
            this.add.existing(menu);
        };
        GameState.prototype.pause = function () {
            this.isPaused = true;
            this.game.physics.arcade.isPaused = true;
            if (this.game.physics.p2)
                this.game.physics.p2.pause();
            this.pauseAnimations(true);
            this.pauseTimers(true);
            this.game.tweens.pauseAll();
        };
        GameState.prototype.unpause = function () {
            this.isPaused = false;
            this.game.physics.arcade.isPaused = false;
            if (this.game.physics.p2)
                this.game.physics.p2.resume();
            this.pauseAnimations(false);
            this.pauseTimers(false);
            this.game.tweens.resumeAll();
        };
        GameState.prototype.pauseAnimations = function (value) {
            for (var _i = 0, _a = F84.AnimationList.animations; _i < _a.length; _i++) {
                var animation = _a[_i];
                animation.paused = value;
            }
        };
        GameState.prototype.pauseTimers = function (value) {
            for (var _i = 0, _a = F84.TimerList.timers; _i < _a.length; _i++) {
                var timer = _a[_i];
                timer.paused = value;
            }
        };
        GameState.prototype.finish = function () {
            this.score += this.scoreCounter;
            this.game.state.start('GameComplete', true, false, this.game.state.current, Math.round(this.score), this.starConditionMet);
        };
        return GameState;
    }(Phaser.State));
    F84.GameState = GameState;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Basketball = (function (_super) {
        __extends(Basketball, _super);
        function Basketball() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Basketball.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var bg = this.add.sprite(0, 0, 'bballBG');
            bg.alignIn(this.world.bounds, Phaser.CENTER);
            this.physics.startSystem(Phaser.Physics.P2JS);
            var physics = this.physics.p2;
            physics.gravity.y = 800;
            var worldMaterial = physics.createMaterial('worldMaterial');
            var ballMaterial = this.ballMaterial = physics.createMaterial('ballMaterial');
            var hoopMaterial = physics.createMaterial('ballMaterial');
            physics.setWorldMaterial(worldMaterial);
            var material = this.physics.p2.createContactMaterial(worldMaterial, ballMaterial);
            material.restitution = 0.6;
            var hoopContact = this.physics.p2.createContactMaterial(hoopMaterial, ballMaterial);
            hoopContact.restitution = 0.3;
            var bugs = this.bugs = this.add.sprite(20, 290, 'bballBugsShoot');
            bugs.animations.add('shoot', null, 30);
            bugs.animations.add('wait', [0]);
            bugs.animations.play('wait');
            var riser = this.riser = this.add.sprite(0, 0, 'bballRiser');
            var base = this.base = this.add.sprite(500, 470, 'bballBase');
            base.anchor.set(0.5, 1);
            riser.position.set(base.x + 4, base.y - 120);
            riser.anchor.set(0.5, 1);
            riser.postUpdate = function () { return riser.position.set(base.x + 4, base.y - 120); };
            var backboard = this.add.sprite(riser.x, riser.top, 'bballBackboard');
            backboard.anchor.set(0.5);
            backboard.postUpdate = function () { return backboard.position.set(riser.x, riser.top); };
            this.ballGroup = this.add.group();
            this.spawnBall();
            var hoop = this.add.sprite(backboard.x, backboard.y + 70, 'bballRing');
            hoop.anchor.set(0.5);
            hoop.postUpdate = function () { return hoop.position.set(backboard.x, backboard.y + 70); };
            var hoopLeft = this.add.sprite(hoop.left, hoop.top + 5, 'whiteSquare');
            hoopLeft.width = 4;
            hoopLeft.height = 5;
            hoopLeft.alpha = 0;
            physics.enable(hoopLeft);
            hoopLeft.body.static = true;
            hoopLeft.body.setMaterial(hoopMaterial);
            hoopLeft.update = function () { hoopLeft.body.x = hoop.left; hoopLeft.body.y = hoop.top + 5; };
            hoopLeft.body.onBeginContact.add(function () { _this.touchedHoop = true; _this.hitRimSfx[_this.rnd.between(0, 1)].play(); });
            var hoopRight = this.add.sprite(hoop.right - 8, hoop.top + 5, 'whiteSquare');
            hoopRight.width = 4;
            hoopRight.height = 5;
            hoopRight.alpha = 0;
            physics.enable(hoopRight);
            hoopRight.body.static = true;
            hoopRight.body.setMaterial(hoopMaterial);
            hoopRight.update = function () { hoopRight.body.x = hoop.right - 8; hoopRight.body.y = hoop.top + 5; };
            hoopRight.body.onBeginContact.add(function () { _this.touchedHoop = true; _this.hitRimSfx[_this.rnd.between(0, 1)].play(); });
            var net = this.add.sprite(hoop.x, hoop.y, 'bballNet1');
            net.anchor.set(0.5);
            net.postUpdate = function () { return net.position.set(hoop.x, hoop.y); };
            net.update = function () {
                if (_this.ball) {
                    var ball = _this.ball;
                    if (ball.y > net.top && ball.y < net.y && ball.right > net.left + 20 && ball.left < net.right - 20) {
                        if (net.key == 'bballNet1')
                            _this.onScored(net);
                    }
                }
            };
            var floor = this.add.sprite(0, 470, 'whiteSquare');
            floor.width = 2000;
            floor.height = 100;
            floor.alpha = 0;
            physics.enable(floor);
            var floorBody = floor.body;
            floorBody.x += floor.width / 2;
            floor.body.y += floor.height / 2;
            floorBody.setMaterial(worldMaterial);
            floorBody.static = true;
            floorBody.onBeginContact.add(this.hitGround, this);
            this.dots = [];
            for (var i = 0; i < 10; i++) {
                var dot = this.add.sprite(0, 0, 'bballDot');
                dot.anchor.set(0.5);
                dot.alpha = 0;
                this.dots.push(dot);
            }
            this.hitFloorSfx = [];
            this.hitNetSfx = [];
            this.hitRimSfx = [];
            for (var i = 1; i < 4; i++) {
                this.hitFloorSfx.push(this.add.audio('bballHitFloor' + i));
                if (i != 3) {
                    this.hitNetSfx.push(this.add.audio('bballNet' + i));
                    this.hitRimSfx.push(this.add.audio('bballRim' + i));
                }
            }
            this.shooting = false;
            this.touchedHoop = false;
            this.scored = false;
            this.mouseDown = false;
            this.consecutiveShots = 0;
            var clicker = F84.Overlay.create(this.game, 0);
            clicker.inputEnabled = true;
            clicker.events.onInputDown.add(this.inputDown, this);
            clicker.events.onInputUp.add(this.inputUp, this);
            this.createHUD();
            this.createTutorialPrompt(function () { return _this.createCountdown(_this.startTutorial, _this); });
        };
        Basketball.prototype.startTutorial = function () {
            var _this = this;
            this.shooting = true;
            var _a = this.createTutorialCursor(), cursor = _a[0], setCursorDown = _a[1];
            cursor.position.set(this.ball.x + 30, this.ball.y - 30);
            setCursorDown(true);
            this.tutorialCursor = cursor;
            var tween = this.add.tween(cursor);
            tween.to({ x: cursor.x + 500, y: cursor.y - 300 }, 1500, Phaser.Easing.Quadratic.Out, true, 0, -1);
            this.input.onDown.addOnce(function () {
                cursor.destroy();
                _this.tutorialCursor = null;
            });
        };
        Basketball.prototype.spawnBall = function () {
            var ball = this.ball = this.add.sprite(0, 0, 'bballBall', null, this.ballGroup);
            ball.position.set(this.bugs.x + 146, this.bugs.y + 77);
            ball.alpha = 0;
            this.physics.p2.enable(ball);
            var body = ball.body;
            body.setCircle(ball.width / 2);
            body.setMaterial(this.ballMaterial);
            body.static = true;
            return ball;
        };
        Basketball.prototype.update = function () {
            _super.prototype.update.call(this);
            var ptr = this.input.activePointer;
            var pos = ptr.position;
            if (this.tutorialCursor)
                pos = this.tutorialCursor.position;
            if (this.shooting)
                this.checkTimesUp();
            if ((this.mouseDown || this.tutorialCursor) && this.shooting) {
                var x = (pos.x / this.world.bounds.width) * 600;
                var y = -((this.world.bounds.height - pos.y) / this.world.bounds.height) * 770;
                this.dragPos = new Phaser.Point(x, y);
                for (var _i = 0, _a = this.dots; _i < _a.length; _i++) {
                    var dot = _a[_i];
                    dot.alpha = 1;
                }
                var pt = this.ball.position.clone();
                var vx = this.dragPos.x * 0.97;
                var vy = this.dragPos.y * 0.97;
                for (var i = 0; i < this.dots.length * 100; i++) {
                    if (i % 100 == 0)
                        this.dots[i / 100].position.set(pt.x, pt.y);
                    pt.x += vx * 0.001;
                    pt.y += vy * 0.001;
                    vy += 800 * 0.001;
                }
            }
        };
        Basketball.prototype.inputDown = function () {
            this.mouseDown = true;
        };
        Basketball.prototype.inputUp = function (ptr) {
            var _this = this;
            this.mouseDown = false;
            if (!this.shooting)
                return;
            this.bugs.animations.play('shoot');
            for (var _i = 0, _a = this.dots; _i < _a.length; _i++) {
                var dot = _a[_i];
                dot.alpha = 0;
            }
            this.shooting = false;
            var timer = this.time.create();
            timer.add(400, function () {
                var body = _this.ball.body;
                _this.ball.alpha = 1;
                body.velocity.x = _this.dragPos.x;
                body.velocity.y = _this.dragPos.y;
                body.angularVelocity = _this.rnd.between(2, 10);
                body.static = false;
                _this.game.sound.play('bballShot');
            });
            timer.start();
        };
        Basketball.prototype.onScored = function (net) {
            var _this = this;
            net.loadTexture('bballNet2');
            var timer = this.time.create();
            timer.add(500, function () {
                net.loadTexture('bballNet1');
                _this.moveHoop();
            }, this);
            timer.start();
            this.hitNetSfx[this.rnd.between(0, 1)].play();
            this.bugs.loadTexture('bballBugsWin');
            this.scored = true;
            this.consecutiveShots++;
            if (this.consecutiveShots >= 5)
                this.starConditionMet = true;
            var points = this.touchedHoop ? 100 : 300;
            this.updateScore(points);
            this.createPointsPopup(net.centerX, net.top - 50, points);
            if (!this.touchedHoop)
                this.createNiceShot();
        };
        Basketball.prototype.hitGround = function (other) {
            var _this = this;
            if (other.sprite == this.ball) {
                var ball_1 = this.ball;
                var fade = this.add.tween(ball_1);
                fade.to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
                fade.onComplete.add(function () { return ball_1.destroy(); });
                this.ball = null;
                this.hitFloorSfx[this.rnd.between(0, 2)].play();
                if (!this.scored) {
                    this.consecutiveShots = 0;
                    this.bugs.loadTexture('bballBugsFail');
                }
                var timer = this.time.create();
                timer.add(this.scored ? 500 : 800, function () {
                    _this.bugs.loadTexture('bballBugsShoot');
                    _this.bugs.animations.play('wait');
                    _this.spawnBall();
                    _this.shooting = true;
                });
                timer.start();
                this.touchedHoop = false;
                this.scored = false;
            }
        };
        Basketball.prototype.moveHoop = function () {
            var baseX = this.rnd.between(300, 700);
            var baseTween = this.add.tween(this.base);
            baseTween.to({ x: baseX }, 1500, Phaser.Easing.Quadratic.InOut, true);
            var height = this.rnd.between(50, 177);
            var heightTween = this.add.tween(this.riser);
            heightTween.to({ height: height }, 1500, Phaser.Easing.Quadratic.InOut, true);
        };
        Basketball.prototype.createNiceShot = function () {
            var group = this.add.group();
            var glow = this.add.sprite(0, 0, 'bballGlow', null, group);
            glow.anchor.set(0.5);
            var style = { font: F84.Fonts.BoldFont, fill: 'white', fontSize: 48 };
            var text = this.add.text(0, 0, F84.Strings.get('NiceShot'), style, group);
            text.alignIn(glow, Phaser.CENTER);
            group.alignIn(this.world.bounds, Phaser.TOP_CENTER, 0, 25);
            var tween = this.add.tween(group.scale);
            tween.from({ x: 0.1, y: 0.1 }, 800, Phaser.Easing.Back.Out, true);
            var tween2 = this.add.tween(group.scale);
            tween2.to({ x: 0.1, y: 0.1 }, 500, Phaser.Easing.Quadratic.In, false, 1200);
            tween.onComplete.add(function () { return tween2.start(); });
            tween2.onComplete.add(function () { return group.destroy(); });
        };
        return Basketball;
    }(F84.GameState));
    F84.Basketball = Basketball;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Dodgeball = (function (_super) {
        __extends(Dodgeball, _super);
        function Dodgeball() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dodgeball.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var layer1 = this.layer1 = this.add.group();
            var bg1 = this.game.add.sprite(0, 0, 'dodgeBG1', null, layer1);
            bg1.alignIn(this.world.bounds, Phaser.CENTER);
            var layer2 = this.layer2 = this.add.group();
            var bg2 = this.game.add.sprite(0, 0, 'dodgeBG2', null, layer2);
            bg2.alignIn(this.world.bounds, Phaser.CENTER);
            var layer3 = this.layer3 = this.add.group();
            var bg3 = this.game.add.sprite(0, 0, 'dodgeBG3', null, layer3);
            bg3.alignIn(this.world.bounds, Phaser.CENTER);
            var layer4 = this.layer4 = this.add.group();
            var bg4 = this.game.add.sprite(0, 0, 'dodgeBG4', null, layer4);
            bg4.alignIn(this.world.bounds, Phaser.CENTER);
            var depthWorld = this.depthWorld = new F84.DepthWorld(this, new Phaser.Point(this.world.bounds.centerX, 0));
            depthWorld.bottom = this.world.bounds.bottom + 100;
            this.spawnData = this.cache.getJSON('elmerSpawns');
            this.spawnPool = [];
            for (var _i = 0, _a = this.spawnData; _i < _a.length; _i++) {
                var s = _a[_i];
                this.spawnPool.push(s);
            }
            var slingshot = this.game.add.sprite(0, 0, 'dodgeSlingshot');
            slingshot.alignIn(this.world.bounds, Phaser.BOTTOM_CENTER);
            this.ballGroup = this.add.group();
            this.spawnDodgeball();
            var band = this.leftBand = this.game.add.sprite(slingshot.x + 50, slingshot.y + 55, 'dodgeSlingshotBand');
            band.anchor.set(0, 0.5);
            var rightBand = this.rightBand = this.game.add.sprite(slingshot.right - 50, slingshot.y + 55, 'dodgeSlingshotBand');
            rightBand.anchor.set(0, 0.5);
            var hand = this.hand = this.game.add.sprite(0, 0, 'dodgeHandRelease');
            hand.anchor.set(0.5, 0.65);
            this.hitSfx = [];
            for (var i = 1; i < 5; i++) {
                this.hitSfx.push(this.add.audio('dodgeball' + 1));
            }
            this.slingshotSfx = this.add.audio('slingshot');
            this.createHUD();
            this.createTutorialPrompt(function () { return _this.createCountdown(_this.startTutorial, _this); });
            this.starConditionMet = true;
        };
        Dodgeball.prototype.startTutorial = function () {
            this.hand.alpha = 0;
            var arrow = this.add.sprite(this.ball.x, this.ball.y - 75, 'tutorialArrow');
            arrow.anchor.set(0.5, 0);
            arrow.scale.set(0.75);
            var _a = this.createTutorialCursor(), cursor = _a[0], setCursorDown = _a[1];
            setCursorDown(true);
            cursor.position.set(this.ball.x - 35, this.ball.y - 70);
            var tween = this.add.tween(cursor);
            tween.to({ y: cursor.y + 100 }, 1000, Phaser.Easing.Quadratic.Out, true, 0, -1);
            this.ball.onThrown.add(function () {
                arrow.destroy();
                cursor.destroy();
            });
            this.spawnElmer();
        };
        Dodgeball.prototype.update = function () {
            _super.prototype.update.call(this);
            for (var _i = 0, _a = this.depthWorld.objects; _i < _a.length; _i++) {
                var obj = _a[_i];
                if (obj.position3.z >= 3.78)
                    this.layer1.add(obj);
                if (obj.position3.z < 3.78 && obj.position3.z >= 2.2)
                    this.layer2.add(obj);
                if (obj.position3.z < 2.2 && obj.position3.z >= 1.05)
                    this.layer3.add(obj);
                if (obj.position3.z < 1.05)
                    this.layer4.add(obj);
            }
            this.depthWorld.sortGroup(this.layer1);
            this.depthWorld.sortGroup(this.layer2);
            this.depthWorld.sortGroup(this.layer3);
            this.depthWorld.sortGroup(this.layer4);
            if (this.ball && !this.ball.thrown) {
                this.checkTimesUp();
                var pt = this.ball.position.clone();
                pt.y += this.ball.height / 3;
                for (var _b = 0, _c = [this.leftBand, this.rightBand]; _b < _c.length; _b++) {
                    var band = _c[_b];
                    band.alpha = 1;
                    var dist = band.position.distance(pt);
                    band.width = dist;
                    band.height = 60 - (dist * 0.25);
                    var ang = band.position.angle(pt);
                    band.rotation = ang;
                }
                var prevPos = this.hand.position.clone();
                this.hand.position.set(pt.x, pt.y);
                if (this.ball.dragging) {
                    if (Phaser.Point.distance(prevPos, pt) > 2 && !this.slingshotSfx.isPlaying)
                        this.slingshotSfx.play();
                    this.hand.loadTexture('dodgeHandPull');
                    this.hand.alpha = 1;
                }
                else
                    this.hand.loadTexture('dodgeHandRelease');
            }
            else {
                this.leftBand.alpha = 0;
                this.rightBand.alpha = 0;
            }
        };
        Dodgeball.prototype.spawnDodgeball = function () {
            var _this = this;
            var pos = { x: this.world.bounds.centerX, y: this.depthWorld.bottom - 267, z: 0 };
            var ball = this.ball = new F84.Ball(this.game, this.depthWorld, pos);
            this.ballGroup.add(ball);
            ball.onRebound.addOnce(function () { return _this.hitSfx[_this.rnd.between(0, 3)].play(); });
            ball.onHitGround.addOnce(function () { return _this.ballHitGround(ball); });
            if (this.hand)
                this.hand.alpha = 1;
            ball.onThrown.add(function () { _this.hand.alpha = 0; _this.slingshotSfx.stop(); _this.game.sound.play('slingshotRelease'); });
            ball.onDrag.addOnce(function () { return _this.slingshotSfx.play(); });
        };
        Dodgeball.prototype.ballHitGround = function (ball) {
            if (!ball.successfulHit)
                this.starConditionMet = false;
            this.spawnDodgeball();
        };
        Dodgeball.prototype.spawnElmer = function () {
            var _this = this;
            var data = this.rnd.pick(this.spawnPool);
            F84.ArrayUtils.remove(this.spawnPool, data);
            if (this.spawnPool.length == 0) {
                for (var _i = 0, _a = this.spawnData; _i < _a.length; _i++) {
                    var s = _a[_i];
                    this.spawnPool.push(s);
                }
            }
            var elmer = new F84.Elmer(this.game, this.depthWorld, data);
            this.game.add.existing(elmer);
            elmer.onHit.addOnce(this.onHitElmer, this);
            elmer.onHit.addOnce(function () { return _this.hitSfx[_this.rnd.between(0, 3)].play(); });
            elmer.onRemove.addOnce(function () { if (_this.timer > 0)
                _this.spawnElmer(); });
        };
        Dodgeball.prototype.onHitElmer = function (elmer, score) {
            this.createPointsPopup(elmer.centerX, elmer.top, score);
            this.updateScore(score);
            this.checkTimesUp();
        };
        return Dodgeball;
    }(F84.GameState));
    F84.Dodgeball = Dodgeball;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Elmer = (function (_super) {
        __extends(Elmer, _super);
        function Elmer(game, depthWorld, data) {
            var _this = _super.call(this, game, depthWorld.state, 'dodgeElmerWalk', { x: game.world.bounds.centerX + data.startX, y: depthWorld.bottom, z: data.z }, depthWorld) || this;
            _this.elmerScale = 1 / 0.62542;
            _this.data = data;
            var dir = _this.dir = (data.startX < data.endX) ? 1 : -1;
            _this.baseWidth *= _this.elmerScale * dir;
            _this.baseHeight *= _this.elmerScale;
            _this.anchor.set(0.5, 0.95);
            depthWorld.add(_this);
            _this.animations.add('').play(16, true);
            _this.targetY = _this.position3.y;
            _this.position3.y += 100;
            _this.speed = data.speed * dir * game.rnd.realInRange(1.0, 2.0);
            _this.active = false;
            var timer = game.time.create();
            timer.add(500, function () { _this.active = true; });
            timer.start();
            _this.onHit = new Phaser.Signal();
            return _this;
        }
        Elmer.prototype.update = function () {
            var _this = this;
            _super.prototype.update.call(this);
            var dt = this.state.deltaTime;
            var _loop_1 = function (obj) {
                if (obj instanceof F84.Ball && obj.active && this_1.active && this_1.depthWorld.getDistanceSquared(this_1.position3, obj.position3) < 150 * 150) {
                    obj.rebound(0.2);
                    obj.successfulHit = true;
                    var pos = obj.position3;
                    var hitMarker_1 = new F84.DepthObject(this_1.game, this_1.state, 'dodgeBurst', { x: pos.x, y: pos.y, z: pos.z }, this_1.depthWorld);
                    hitMarker_1.anchor.set(0.5);
                    this_1.game.add.existing(hitMarker_1);
                    this_1.depthWorld.add(hitMarker_1);
                    var tween = this_1.game.add.tween(hitMarker_1);
                    tween.to({ baseWidth: hitMarker_1.baseWidth * 2, baseHeight: hitMarker_1.baseHeight * 2 }, 150, Phaser.Easing.Quadratic.Out, true);
                    hitMarker_1.baseWidth *= 0.5;
                    hitMarker_1.baseHeight *= 0.5;
                    var fadeTween = this_1.game.add.tween(hitMarker_1);
                    fadeTween.to({ alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 300);
                    fadeTween.onComplete.add(function () { return hitMarker_1.remove(); });
                    this_1.hit();
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.depthWorld.objects; _i < _a.length; _i++) {
                var obj = _a[_i];
                _loop_1(obj);
            }
            this.position3.x += this.speed * dt;
            this.position3.y -= (this.position3.y - this.targetY) * 8 * dt;
            var cond;
            if (this.dir == 1)
                cond = (this.position3.x > this.game.world.bounds.centerX + this.data.endX);
            else
                cond = (this.position3.x < this.game.world.bounds.centerX + this.data.endX);
            if (this.active && cond) {
                this.active = false;
                this.targetY += 250;
                var timer = this.game.time.create();
                timer.add(400, function () { return _this.remove(); });
                timer.start();
            }
        };
        Elmer.prototype.hit = function () {
            var _this = this;
            this.active = false;
            this.speed = 0;
            this.loadTexture('dodgeElmerHit');
            this.baseWidth = 114 * this.elmerScale * this.dir;
            this.baseHeight = 281 * this.elmerScale;
            var on = true;
            var flash = this.game.time.create();
            flash.repeat(100, 99, function () {
                _this.alpha = on ? 1 : 0;
                on = !on;
            });
            flash.start();
            this.onRemove.add(function () { return flash.stop(); });
            var timer = this.game.time.create();
            timer.add(1000, function () { return _this.remove(); });
            timer.start();
            this.onHit.dispatch(this, this.data.score);
        };
        return Elmer;
    }(F84.DepthObject));
    F84.Elmer = Elmer;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var FootRace = (function (_super) {
        __extends(FootRace, _super);
        function FootRace() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.startTime = 60;
            _this.startSpeedModifier = 1.0;
            _this.endSpeedModifier = 2.0;
            _this.runningSpeed = 500;
            return _this;
        }
        FootRace.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            this.worldGroup = this.add.group();
            this.background = this.add.group(this.worldGroup);
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.backgrounds = [];
            this.bgIndex = 0;
            var bg = this.add.sprite(0, 0, 'raceBGStart', null, this.worldGroup);
            this.backgrounds.push(bg);
            this.spawnBackground();
            var coyote = this.coyote = this.add.sprite(2000, 230, 'raceCoyote2', null, this.worldGroup);
            coyote.anchor.set(0.5, 1);
            this.coyoteSprite = 0;
            this.coyoteReaction = 0;
            this.player = new F84.Roadrunner(this.game, 170, 350, this);
            this.add.existing(this.player);
            this.foreground = this.add.group();
            var pu = this.foreground.postUpdate;
            this.foreground.postUpdate = function () {
                pu.call(_this.foreground);
                _this.foreground.position.set(_this.worldGroup.x, _this.worldGroup.y);
            };
            this.spawnThreshold = -100;
            this.obstacles = [];
            this.startTime = this.timer;
            var clicker = F84.Overlay.create(this.game, 0);
            clicker.inputEnabled = true;
            clicker.events.onInputDown.add(function () { return _this.switchLane(); });
            this.createHUD();
            this.createTutorialPrompt(function () { return _this.createCountdown(_this.onCountdownComplete, _this); });
            this.shownTutorial = false;
            this.onInput = new Phaser.Signal();
            this.rnd.sow(['........']);
            this.starConditionMet = true;
        };
        FootRace.prototype.onCountdownComplete = function () {
            this.player.playRunAnimation();
        };
        FootRace.prototype.startTutorial = function () {
            var _this = this;
            this.shownTutorial = true;
            this.timescale.setTimescale(0.2);
            var _a = this.createTutorialCursor(), cursor = _a[0], setCursorDown = _a[1];
            var on = true;
            var clickTimer = this.time.create();
            clickTimer.repeat(250, 99, function () {
                on = !on;
                setCursorDown(on);
            });
            clickTimer.start();
            cursor.position.set(this.world.bounds.centerX, 300);
            this.onInput.addOnce(function () {
                clickTimer.stop();
                cursor.destroy();
                _this.timescale.setTimescale(1);
            });
        };
        FootRace.prototype.getSpeedModifier = function () {
            var percent = (this.startTime - Math.max(this.timer, 0)) / this.startTime;
            return Phaser.Math.linear(this.startSpeedModifier, this.endSpeedModifier, percent);
        };
        FootRace.prototype.update = function () {
            _super.prototype.update.call(this);
            this.checkTimesUp();
            var dt = this.deltaTime;
            var speedModifier = this.getSpeedModifier();
            if (!this.shownTutorial) {
                for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    if (Math.abs(obj.y - this.player.y) < 100 && obj.x + this.worldGroup.x < this.player.x + 500) {
                        this.startTutorial();
                    }
                }
            }
            this.runningSpeed -= (this.runningSpeed - 500) * 2 * dt;
            this.worldGroup.x -= this.runningSpeed * speedModifier * dt;
            var lastBG = this.backgrounds[this.backgrounds.length - 1];
            if (this.worldGroup.x + lastBG.right < this.world.bounds.width + 20)
                this.spawnBackground();
            if (this.worldGroup.x < this.spawnThreshold) {
                this.spawnObstacle();
                this.spawnThreshold -= this.rnd.between(400, 600);
            }
            for (var _b = 0, _c = this.backgrounds; _b < _c.length; _b++) {
                var bg = _c[_b];
                if (bg.right + this.worldGroup.x < 0) {
                    bg.destroy();
                    F84.ArrayUtils.remove(this.backgrounds, bg);
                }
            }
            for (var _d = 0, _e = this.obstacles; _d < _e.length; _d++) {
                var obj = _e[_d];
                if (obj.right + this.worldGroup.x < 0) {
                    obj.destroy();
                    F84.ArrayUtils.remove(this.obstacles, obj);
                }
            }
            if (this.coyote.right + this.worldGroup.x < 0) {
                this.coyote.x += 3600;
                var key = 'raceCoyote' + (this.coyoteSprite + 1);
                this.coyoteSprite = (this.coyoteSprite + 1) % 4;
                this.coyote.loadTexture(key);
            }
            var _loop_2 = function (obj) {
                if (this_2.physics.arcade.overlap(this_2.player.hitbox, obj)) {
                    this_2.starConditionMet = false;
                    this_2.runningSpeed = 0;
                    this_2.player.hitObstacle();
                    this_2.spawnCoyoteReaction();
                    obj.loadTexture(obj.key + 'Broken');
                    var body = obj.body;
                    body.enable = false;
                    var explosion_1 = this_2.add.sprite(obj.centerX, obj.centerY, 'raceExplosion');
                    this_2.foreground.add(explosion_1);
                    explosion_1.anchor.set(0.5);
                    var timer = this_2.time.create();
                    timer.add(300, function () { return explosion_1.destroy(); });
                    timer.start();
                    this_2.updateScore(-100);
                    var pts = this_2.createPointsPopup(obj.centerX, obj.top, -100);
                    this_2.worldGroup.add(pts);
                    obj.health = 0;
                }
                else {
                    if (this_2.player.centerX > this_2.worldGroup.x + obj.left && !obj.data.passed && obj.health > 0) {
                        obj.data.passed = true;
                        this_2.updateScore(20);
                        var pts = this_2.createPointsPopup(obj.centerX, obj.top, 20);
                        this_2.worldGroup.add(pts);
                    }
                }
            };
            var this_2 = this;
            for (var _f = 0, _g = this.obstacles; _f < _g.length; _f++) {
                var obj = _g[_f];
                _loop_2(obj);
            }
        };
        FootRace.prototype.switchLane = function () {
            this.player.switchLane();
            this.onInput.dispatch();
        };
        FootRace.prototype.overlap = function (a, b) {
            return (a.right > b.left && a.left < b.right && a.bottom > b.top && a.top < b.bottom);
        };
        FootRace.prototype.spawnBackground = function () {
            var lastBG = this.backgrounds[this.backgrounds.length - 1];
            var bg = this.add.sprite(lastBG.right, 0, 'raceBG' + this.bgIndex, null, this.background);
            this.backgrounds.push(bg);
            this.bgIndex = (this.bgIndex + 1) % 4;
        };
        FootRace.prototype.spawnObstacle = function () {
            var obstacle = this.add.sprite(this.world.bounds.width + 500 - this.worldGroup.x, 0, 'raceObstacle' + this.rnd.between(1, 7));
            obstacle.data.passed = false;
            this.worldGroup.add(obstacle);
            this.obstacles.push(obstacle);
            obstacle.anchor.set(0.5);
            obstacle.y = this.rnd.pick([330, 500]);
            this.physics.enable(obstacle);
            var body = obstacle.body;
            body.setSize(obstacle.width / 2, 50, 0, -25 + obstacle.height / 2);
        };
        FootRace.prototype.spawnCoyoteReaction = function () {
            var key = 'raceCoyoteReaction' + (this.coyoteReaction + 1);
            this.coyoteReaction = (this.coyoteReaction + 1) % 2;
            var popup = this.add.sprite(0, 0, key);
            popup.alignIn(this.world.bounds, Phaser.BOTTOM_CENTER, 300, 0);
            var tweenIn = this.add.tween(popup);
            tweenIn.from({ y: popup.y + 450 }, 400, Phaser.Easing.Quadratic.Out, true);
            var tweenOut = this.add.tween(popup);
            tweenOut.to({ y: popup.y + 450 }, 400, Phaser.Easing.Quadratic.In, false, 500);
            tweenIn.onComplete.add(function () { return tweenOut.start(); });
        };
        return FootRace;
    }(F84.GameState));
    F84.FootRace = FootRace;
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
    var GoalPrompt = (function (_super) {
        __extends(GoalPrompt, _super);
        function GoalPrompt(game, onClosed, onClosedContext, unpause, unPauseContext) {
            var _this = _super.call(this, game) || this;
            var overlay = F84.Overlay.create(_this.game, 0.7);
            _this.add(overlay);
            var minigame = _this.game.state.current;
            var boxGroup = game.add.group(_this);
            var box = _this.game.add.sprite(0, 0, 'uiGoal' + minigame, null, boxGroup);
            box.alignIn(_this.game.world.bounds, Phaser.CENTER, 0, -30);
            var style = { font: F84.Fonts.BoldFont, fill: 'white', fontSize: 48 };
            var label = _this.game.add.text(0, 0, F84.Strings.get(minigame), style, boxGroup);
            label.alignIn(box, Phaser.TOP_CENTER, 0, -10);
            style = { font: F84.Fonts.DefaultFont, fill: F84.GameColors.TAN, fontSize: 48, wordWrap: true, wordWrapWidth: 550, align: 'center' };
            var desc1 = _this.game.add.text(0, 0, F84.Strings.get('Goal1' + minigame), style, boxGroup);
            desc1.alignIn(box, Phaser.LEFT_CENTER, -200, -95 + 25);
            var desc2 = _this.game.add.text(0, 0, F84.Strings.get('Goal2' + minigame), style, boxGroup);
            desc2.alignIn(box, Phaser.LEFT_CENTER, -200, 0 + 25);
            var goal3 = F84.Strings.get('Goal3');
            var minigameData = game.cache.getJSON('minigameData');
            goal3 = goal3.replace('%pts', minigameData[minigame].scoreThreshold + '');
            var desc3 = _this.game.add.text(0, 0, goal3, style, boxGroup);
            desc3.alignIn(box, Phaser.LEFT_CENTER, -200, 95 + 25);
            var button = _this.game.add.button(0, 0, 'playButton', function () {
                _this.game.sound.play('button');
                _this.destroy();
                if (unpause)
                    unpause.call(unPauseContext);
                if (onClosed)
                    onClosed.call(onClosedContext);
            }, _this);
            F84.GameFactory.addButtonBounce(_this.game, button);
            boxGroup.add(button);
            button.alignIn(box, Phaser.BOTTOM_CENTER, 0, button.height / 2 + 40);
            var moveTween = game.add.tween(boxGroup);
            moveTween.from({ y: boxGroup.y + 400 }, 600, Phaser.Easing.Back.Out, true);
            var angleTween = game.add.tween(boxGroup);
            angleTween.from({ angle: 15 }, 600, Phaser.Easing.Quadratic.Out, true);
            var character = game.add.sprite(0, 0, 'recapCharacter' + minigame, null, _this);
            character.alignIn(game.world.bounds, Phaser.BOTTOM_CENTER, 350, 0);
            var characterMove = game.add.tween(character);
            characterMove.from({ x: character.x + 300 }, 600, Phaser.Easing.Quadratic.Out, true);
            var characterFade = game.add.tween(character);
            characterFade.from({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);
            return _this;
        }
        return GoalPrompt;
    }(F84.ResizableGroup));
    F84.GoalPrompt = GoalPrompt;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var JumpRope = (function (_super) {
        __extends(JumpRope, _super);
        function JumpRope() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.startSpeed = 15;
            _this.prevRopeOnGround = false;
            return _this;
        }
        JumpRope.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var bg = this.add.sprite(0, 0, 'jumpBG');
            bg.alignIn(this.world.bounds, Phaser.CENTER);
            this.background = this.add.group();
            var tweety = this.tweety = this.add.sprite(0, 0, 'tweetyJump');
            tweety.alignIn(bg, Phaser.CENTER);
            tweety.animations.add('jump', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0]);
            tweety.animations.add('jump2', [0, 1, 2, 3, 4, 5, 12, 13, 14, 15, 10, 11, 0]);
            tweety.animations.add('idle', [0]);
            tweety.animations.add('angry', [16]);
            this.foreground = this.add.group();
            this.ropes = [];
            for (var i = 0; i < 2; i++) {
                var rope = this.ropes[i] = this.add.sprite(0, 0, 'jumpRope', null, this.foreground);
                rope.scale.set(Math.max(this.world.bounds.width / rope.width, 1));
                rope.alignIn(bg, Phaser.CENTER);
                rope.animations.add('idle', [11]);
                rope.animations.play('idle');
            }
            this.ropes[0].animations.add('loop', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30, true);
            this.ropes[1].animations.add('loop', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 30, true);
            this.ropes[1].alpha = 0.001;
            var clicker = F84.Overlay.create(this.game, 0);
            clicker.inputEnabled = true;
            clicker.events.onInputDown.add(function () { return _this.jump(); });
            this.createHUD();
            this.jumping = false;
            this.queuedJump = 0;
            this.consecutiveJumps = 0;
            this.inTutorial = true;
            this.waiting = true;
            this.waitTimer = 9999;
            this.speed = this.startSpeed;
            this.onJump = new Phaser.Signal();
            this.createTutorialPrompt(function () { return _this.createCountdown(_this.startTutorial, _this); });
        };
        JumpRope.prototype.startTutorial = function () {
            var _this = this;
            for (var i = 0; i < 2; i++)
                this.ropes[i].animations.play('loop', this.startSpeed);
            var timer = this.time.create();
            timer.add(1100, function () {
                for (var i = 0; i < 2; i++)
                    _this.ropes[i].animations.currentAnim.speed = 1;
                var _a = _this.createTutorialCursor(), cursor = _a[0], setCursorDown = _a[1];
                var on = true;
                var clickTimer = _this.time.create();
                clickTimer.repeat(250, 99, function () {
                    on = !on;
                    setCursorDown(on);
                });
                clickTimer.start();
                cursor.x = _this.world.bounds.centerX + 200;
                cursor.y = 300;
                _this.waitTimer = 0;
                _this.waiting = false;
                _this.onJump.addOnce(function () {
                    _this.inTutorial = false;
                    for (var i = 0; i < 2; i++) {
                        _this.ropes[i].animations.currentAnim.speed = _this.speed;
                        _this.ropes[i].animations.paused = true;
                        _this.ropes[i].animations.paused = false;
                    }
                    clickTimer.stop();
                    cursor.destroy();
                });
            });
            timer.start();
        };
        JumpRope.prototype.update = function () {
            var _this = this;
            _super.prototype.update.call(this);
            if (!this.jumping)
                this.checkTimesUp();
            var dt = this.deltaTime;
            for (var i = 0; i < 2; i++) {
                if (this.ropes[i].frame > 10)
                    this.background.add(this.ropes[i]);
                else
                    this.foreground.add(this.ropes[i]);
            }
            if (!this.waiting && !this.inTutorial) {
                this.speed += 0.5 * dt;
                if (this.speed > 50)
                    this.speed = 50;
                for (var i = 0; i < 2; i++)
                    this.ropes[i].animations.currentAnim.speed = this.speed;
                var onGround = [0, 1, 2].find(function (f) { return f == _this.tweety.frame; }) != null;
                var ropeOnGround = [9, 10].find(function (f) { return f == _this.ropes[0].frame; }) != null;
                if (this.ropes[1].alpha == 1)
                    ropeOnGround = ropeOnGround || [9, 10].find(function (f) { return f == _this.ropes[1].frame; }) != null;
                if (onGround && ropeOnGround) {
                    this.hit();
                    this.game.sound.play('jumpRopeHit');
                }
                if (this.prevRopeOnGround != ropeOnGround && ropeOnGround && !onGround) {
                    this.game.sound.play('jumpRope');
                }
                this.prevRopeOnGround = ropeOnGround;
            }
            this.queuedJump -= dt;
            if (this.waitTimer > 0) {
                this.waitTimer -= dt;
                if (this.waitTimer <= 0)
                    this.restart();
            }
        };
        JumpRope.prototype.jump = function () {
            var _this = this;
            if (this.waiting)
                return;
            if (this.jumping) {
                this.queuedJump = 0.1;
                return;
            }
            var key = this.rnd.pick(['jump', 'jump2']);
            var anim = this.tweety.animations.play(key, 24);
            anim.onComplete.addOnce(function () {
                var score = 20;
                if (_this.speed * 2 >= 50)
                    score = 50;
                _this.updateScore(score);
                _this.createPointsPopup(_this.tweety.centerX, _this.tweety.top + 190, score);
                _this.jumping = false;
                _this.consecutiveJumps++;
                if (_this.consecutiveJumps >= 20)
                    _this.starConditionMet = true;
                if (_this.queuedJump > 0)
                    _this.jump();
            });
            this.jumping = true;
            this.onJump.dispatch();
        };
        JumpRope.prototype.hit = function () {
            var _this = this;
            var hitMarker = this.game.add.sprite(this.tweety.centerX, this.tweety.bottom - 80, 'dodgeBurst');
            hitMarker.anchor.set(0.5);
            hitMarker.scale.set(1.5);
            this.game.add.existing(hitMarker);
            var tween = this.game.add.tween(hitMarker.scale);
            tween.from({ x: 0.1, y: 0.1 }, 150, Phaser.Easing.Quadratic.Out, true);
            var fadeTween = this.game.add.tween(hitMarker);
            fadeTween.to({ alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 300);
            fadeTween.onComplete.add(function () { return hitMarker.destroy(); });
            var on = false;
            var flash = this.game.time.create();
            flash.repeat(100, 6, function () {
                _this.tweety.alpha = on ? 1 : 0;
                on = !on;
            });
            flash.start();
            this.tweety.animations.play('angry');
            for (var i = 0; i < 2; i++)
                this.ropes[i].animations.play('idle');
            var score = -50;
            this.jumping = false;
            this.consecutiveJumps = 0;
            this.waiting = true;
            this.waitTimer = 0.01;
            this.createPointsPopup(this.tweety.centerX, this.tweety.top + 190, score);
            this.updateScore(score);
        };
        JumpRope.prototype.restart = function () {
            this.waiting = false;
            this.speed = this.startSpeed;
            this.ropes[0].animations.play('loop');
            this.ropes[0].frame = 11;
            this.ropes[1].animations.play('loop');
            this.ropes[1].frame = 0;
        };
        return JumpRope;
    }(F84.GameState));
    F84.JumpRope = JumpRope;
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
            var bg = game.add.sprite(0, 0, 'popupContainer', null, popupGroup);
            var logo = game.add.sprite(0, 0, 'splashLogo', null, _this);
            logo.scale.set(0.6);
            var quitButton = game.add.button(0, 0, 'exitButton', _this.quitButtonPressed, _this);
            popupGroup.add(quitButton);
            F84.GameFactory.addButtonBounce(_this.game, quitButton);
            var helpButton = game.add.button(0, 0, 'helpButton', _this.helpButtonPressed, _this);
            popupGroup.add(helpButton);
            F84.GameFactory.addButtonBounce(_this.game, helpButton);
            var key = _this.game.sound.mute ? 'bigSoundOff' : 'bigSoundOn';
            var volumeButton = game.add.button(0, 0, key, function () {
                _this.game.sound.mute = !_this.game.sound.mute;
                var key = _this.game.sound.mute ? 'bigSoundOff' : 'bigSoundOn';
                volumeButton.loadTexture(key);
                _this.game.sound.play('button');
            });
            popupGroup.add(volumeButton);
            F84.GameFactory.addButtonBounce(_this.game, volumeButton);
            var continueButton = game.add.button(0, 0, 'playButton', _this.continueButtonPressed, _this);
            popupGroup.add(continueButton);
            F84.GameFactory.addButtonBounce(_this.game, continueButton);
            _this.onClosed = onClosed;
            _this.onClosedContext = onClosedContext;
            _this.fixedToCamera = true;
            _this._onResize = function () {
                overlay.width = F84.Game.Instance.width;
                overlay.height = F84.Game.Instance.height;
                popupGroup.alignIn(F84.Game.Instance.getBounds(), Phaser.CENTER, 0, 55);
                logo.alignIn(F84.Game.Instance.getBounds(), Phaser.TOP_CENTER, 0, -45);
                quitButton.alignIn(bg, Phaser.CENTER, -140, -20);
                helpButton.alignIn(bg, Phaser.CENTER, 0, -20);
                volumeButton.alignIn(bg, Phaser.CENTER, 140, -20);
                continueButton.alignIn(bg, Phaser.BOTTOM_CENTER, 0, 51);
            };
            _this.resize();
            var animatedBuild = function () {
                _this.resize();
                _this.game.add.tween(overlay).from({ alpha: 0 }, 150, Phaser.Easing.Quadratic.Out, true);
                _this.game.add.tween(logo).from({ y: -150 }, 275, Phaser.Easing.Back.Out, true, 50);
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
            new F84.TutorialPrompt(this.game, function () {
                _this.visible = true;
                _this.ignoreChildInput = true;
            }, this);
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
    var Roadrunner = (function (_super) {
        __extends(Roadrunner, _super);
        function Roadrunner(game, x, y, race) {
            var _this = _super.call(this, game, x, y, 'roadrunnerStand') || this;
            _this.playerFrameRate = 24;
            _this.dustTrailFrameRate = 16;
            _this.laneChangeSpeed = 8;
            _this.prevFrame = 0;
            _this.race = race;
            _this.anchor.set(0.5, 1);
            _this.target = _this.y;
            var dustTrail = _this.dustTrail = _this.game.add.sprite(-130, -50, 'dustTrail', 0);
            _this.addChild(dustTrail);
            dustTrail.animations.add('').play(_this.dustTrailFrameRate, true);
            dustTrail.alpha = 0;
            var hitbox = _this.hitbox = _this.game.add.sprite(0, 0, 'whiteSquare');
            hitbox.width = 40;
            hitbox.height = 40;
            hitbox.alpha = 0;
            hitbox.alignIn(_this, Phaser.BOTTOM_CENTER);
            hitbox.postUpdate = function () { return hitbox.alignIn(_this, Phaser.BOTTOM_CENTER); };
            _this.game.physics.enable(hitbox);
            _this.stunned = false;
            return _this;
        }
        Roadrunner.prototype.playRunAnimation = function () {
            this.dustTrail.alpha = 1;
            this.loadTexture('roadrunner');
            this.animations.add('').play(this.playerFrameRate, true);
        };
        Roadrunner.prototype.update = function () {
            var speedModifier = this.race.getSpeedModifier();
            if (this.animations.currentAnim != null) {
                if (!this.stunned) {
                    this.animations.currentAnim.speed = this.playerFrameRate * speedModifier;
                    this.dustTrail.animations.currentAnim.speed = this.dustTrailFrameRate * speedModifier;
                }
                var frame = this.animations.currentFrame.index;
                if (frame != this.prevFrame && !this.stunned) {
                    if (frame == 3 || frame == 10) {
                        this.game.sound.play(Phaser.ArrayUtils.getRandomItem(['footstep1', 'footstep2', 'footstep3', 'footstep4', 'footstep5']), 0.25);
                    }
                }
                this.prevFrame = this.animations.currentFrame.index;
            }
            this.y -= (this.y - this.target) * this.laneChangeSpeed * speedModifier * this.race.deltaTime;
        };
        Roadrunner.prototype.switchLane = function () {
            if (this.stunned)
                return;
            if (this.target == 350)
                this.target = 520;
            else
                this.target = 350;
            this.game.sound.play('changeLane');
        };
        Roadrunner.prototype.hitObstacle = function () {
            var _this = this;
            this.stunned = true;
            this.dustTrail.alpha = 0;
            this.loadTexture('roadrunnerStop');
            this.animations.add('').play(10);
            var restartTimer = this.game.time.create();
            restartTimer.add(300, function () {
                _this.stunned = false;
                _this.dustTrail.alpha = 1;
                _this.playRunAnimation();
            });
            restartTimer.start();
            this.game.sound.play(Phaser.ArrayUtils.getRandomItem(['impact1', 'impact2', 'impact3']));
        };
        return Roadrunner;
    }(Phaser.Sprite));
    F84.Roadrunner = Roadrunner;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var TicTacToe = (function (_super) {
        __extends(TicTacToe, _super);
        function TicTacToe() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.playerMarker = 'x';
            _this.daffyMarker = 'o';
            return _this;
        }
        TicTacToe.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var bg = this.game.add.sprite(0, 0, 'ticBG');
            bg.alignIn(this.world.bounds, Phaser.CENTER);
            var pound = this.game.add.sprite(0, 0, 'ticPound');
            pound.alignIn(bg, Phaser.CENTER, -5, -5);
            var glow = this.glow = this.game.add.sprite(0, 0, 'ticGlow');
            var daffy = this.daffy = this.game.add.sprite(0, 0, 'ticDaffyNormal');
            daffy.alignIn(bg, Phaser.CENTER, 220, 70);
            glow.alignIn(daffy, Phaser.CENTER);
            glow.visible = false;
            this.buttons = [[], [], []];
            var _loop_3 = function (x) {
                var _loop_4 = function (y) {
                    var button = this_3.add.button(0, 0, 'whiteSquare', function () { return _this.clickSquare(x, y); });
                    button.width = 120;
                    button.height = 120;
                    button.alignIn(pound, Phaser.CENTER, (x - 1) * 160 - 20, (y - 1) * 140 - 20);
                    button.alpha = 0;
                    this_3.buttons[x][y] = button;
                };
                for (var y = 0; y < 3; y++) {
                    _loop_4(y);
                }
            };
            var this_3 = this;
            for (var x = 0; x < 3; x++) {
                _loop_3(x);
            }
            this.markers = [[null, null, null], [null, null, null], [null, null, null]];
            this.spaces = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
            this.playerStarts = true;
            this.isPlayerTurn = this.playerStarts;
            var _a = this.createScoreBoardGroup(5), daffyGroup = _a[0], daffyScoreBoard = _a[1];
            daffyGroup.alignIn(bg, Phaser.CENTER, 310, -160);
            this.daffyWins = 0;
            this.daffyScoreBoard = daffyScoreBoard;
            var _b = this.createScoreBoardGroup(2), playerGroup = _b[0], playerScoreBoard = _b[1];
            playerGroup.alignIn(bg, Phaser.CENTER, -412, 5);
            this.playerWins = 0;
            this.playerScoreBoard = playerScoreBoard;
            var style = { font: F84.Fonts.BoldFont, fill: '#831b12', fontSize: 48, align: 'center' };
            var turnText = this.turnText = this.game.add.text(0, 0, F84.Strings.get('YourTurn'), style);
            turnText.anchor.set(0.5);
            turnText.alignIn(this.world.bounds, Phaser.BOTTOM_CENTER, 0, -10);
            this.createHUD();
            this.createTutorialPrompt(function () { return _this.createCountdown(_this.startTutorial, _this); });
            this.starConditionMet = true;
        };
        TicTacToe.prototype.startTutorial = function () {
            var _a = this.createTutorialCursor(), curser = _a[0], setCurserDown = _a[1];
            var centerButton = this.buttons[1][1];
            curser.anchor.set(0.25);
            curser.position.set(centerButton.centerX, centerButton.centerY);
            var down = false;
            setCurserDown(down);
            var timer = this.game.time.create();
            timer.loop(250, function () {
                down = !down;
                setCurserDown(down);
            });
            timer.start();
            this.endTutorial = new Phaser.Signal;
            this.endTutorial.addOnce(function () {
                curser.destroy();
                timer.destroy();
            });
        };
        TicTacToe.prototype.restart = function () {
            for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
                var markers = _a[_i];
                for (var _b = 0, markers_1 = markers; _b < markers_1.length; _b++) {
                    var marker = markers_1[_b];
                    if (marker)
                        marker.destroy();
                }
            }
            if (this.winningLine)
                this.winningLine.destroy();
            this.spaces = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
            this.playerStarts = !this.playerStarts;
            this.isPlayerTurn = this.playerStarts;
            this.isDaffySmart = this.rnd.frac() < 0.33;
            if (!this.isPlayerTurn)
                this.daffyTurn();
            else
                this.turnText.setText(F84.Strings.get('YourTurn'));
        };
        TicTacToe.prototype.clickSquare = function (x, y) {
            if (this.isPlayerTurn) {
                this.endTutorial.dispatch();
                if (this.spaces[x][y] != ' ')
                    return;
                this.placeMarker(this.playerMarker, x, y);
                this.isPlayerTurn = false;
                if (!this.checkForCompletion())
                    this.daffyTurn();
            }
        };
        TicTacToe.prototype.daffyTurn = function (wait) {
            var _this = this;
            if (wait === void 0) { wait = 1000; }
            this.turnText.setText(F84.Strings.get('DaffysTurn'));
            this.glow.visible = true;
            var timer = this.time.create();
            timer.add(wait, function () {
                var x, y;
                if (_this.isDaffySmart || _this.rnd.frac() < 0.5) {
                    var _a = _this.minimax(_this.spaces, _this.daffyMarker), score = _a[0], move = _a[1];
                    x = move[0];
                    y = move[1];
                }
                else {
                    do {
                        x = _this.rnd.between(0, 2);
                        y = _this.rnd.between(0, 2);
                    } while (_this.spaces[x][y] != ' ');
                }
                _this.placeMarker(_this.daffyMarker, x, y);
                if (!_this.checkForCompletion()) {
                    _this.isPlayerTurn = true;
                    _this.glow.visible = false;
                    _this.turnText.setText(F84.Strings.get('YourTurn'));
                }
            });
            timer.start();
        };
        TicTacToe.prototype.minimax = function (board, player) {
            if (player === void 0) { player = 'o'; }
            var winner = this.getWinner(board);
            if (winner) {
                return [winner == player ? 1 : -1, [-1, -1]];
            }
            var score = -2;
            var move = [-1, -1];
            for (var x = 0; x < 3; x++) {
                for (var y = 0; y < 3; y++) {
                    if (board[x][y] == ' ') {
                        var boardWithNewMove = this.copyBoard(board);
                        boardWithNewMove[x][y] = player;
                        var opponent = (player == 'o') ? 'x' : 'o';
                        var _a = this.minimax(boardWithNewMove, opponent), scoreForTheMove = _a[0], _m = _a[1];
                        scoreForTheMove = -scoreForTheMove;
                        if (scoreForTheMove > score) {
                            score = scoreForTheMove;
                            move = [x, y];
                        }
                    }
                }
            }
            if (move[0] == -1) {
                return [0, move];
            }
            return [score, move];
        };
        TicTacToe.prototype.copyBoard = function (board) {
            var newBoard = [[], [], []];
            for (var x = 0; x < 3; x++) {
                for (var y = 0; y < 3; y++) {
                    newBoard[x][y] = board[x][y];
                }
            }
            return newBoard;
        };
        TicTacToe.prototype.getWinner = function (board) {
            var check = function (a, b, c) {
                if (a == ' ')
                    return false;
                if (a == b && b == c) {
                    return a;
                }
            };
            for (var x = 0; x < 3; x++) {
                var val_1 = check(board[x][0], board[x][1], board[x][2]);
                if (val_1)
                    return val_1;
            }
            for (var y = 0; y < 3; y++) {
                var val_2 = check(board[0][y], board[1][y], board[2][y]);
                if (val_2)
                    return val_2;
            }
            var val = check(board[0][0], board[1][1], board[2][2]);
            if (val)
                return val;
            val = check(board[0][2], board[1][1], board[2][0]);
            if (val)
                return val;
            return null;
        };
        TicTacToe.prototype.placeMarker = function (key, x, y) {
            var marker = this.add.sprite(0, 0, (key == 'x') ? 'ticCross' : 'ticCircle');
            this.markers[x][y] = marker;
            marker.alignIn(this.buttons[x][y], Phaser.CENTER);
            this.spaces[x][y] = key;
            this.game.sound.play(key == 'x' ? 'ticCross' : 'ticCircle', 0.75);
        };
        TicTacToe.prototype.checkForCompletion = function () {
            var _this = this;
            var check = function (a, b, c, row, type) {
                if (a == ' ')
                    return false;
                if (a == b && b == c) {
                    _this.showThreeInARow(row, a, type);
                    _this.finishRound((a == _this.playerMarker) ? 'player' : 'daffy');
                    return true;
                }
            };
            for (var x = 0; x < 3; x++) {
                if (check(this.spaces[x][0], this.spaces[x][1], this.spaces[x][2], x, 'column'))
                    return true;
            }
            for (var y = 0; y < 3; y++) {
                if (check(this.spaces[0][y], this.spaces[1][y], this.spaces[2][y], y, 'row'))
                    return true;
            }
            if (check(this.spaces[0][0], this.spaces[1][1], this.spaces[2][2], 0, 'diaginal'))
                return true;
            if (check(this.spaces[0][2], this.spaces[1][1], this.spaces[2][0], 2, 'diaginal'))
                return true;
            var boardFilled = true;
            for (var x = 0; x < 3; x++) {
                for (var y = 0; y < 3; y++) {
                    if (this.spaces[x][y] == ' ')
                        boardFilled = false;
                }
            }
            if (boardFilled) {
                this.finishRound('draw');
                return true;
            }
            return false;
        };
        TicTacToe.prototype.showThreeInARow = function (row, markType, type) {
            switch (type) {
                case 'row':
                    for (var i = 0; i < 3; i++) {
                        this.markers[i][row].destroy();
                        var newMarker = this.game.add.sprite(0, 0, 'ticYellow' + (markType == 'x' ? 'Cross' : 'Circle'));
                        this.markers[i][row] = newMarker;
                        newMarker.alignIn(this.buttons[i][row], Phaser.CENTER);
                    }
                    var rline = this.game.add.sprite(0, 0, 'ticLine');
                    rline.alignIn(this.buttons[1][row], Phaser.CENTER);
                    this.winningLine = rline;
                    break;
                case 'column':
                    for (var i = 0; i < 3; i++) {
                        this.markers[row][i].destroy();
                        var newMarker = this.game.add.sprite(0, 0, 'ticYellow' + (markType == 'x' ? 'Cross' : 'Circle'));
                        this.markers[row][i] = newMarker;
                        newMarker.alignIn(this.buttons[row][i], Phaser.CENTER);
                    }
                    var cline = this.game.add.sprite(0, 0, 'ticLine');
                    cline.anchor.set(0.5);
                    cline.angle = 90;
                    cline.alignIn(this.buttons[row][1], Phaser.CENTER);
                    this.winningLine = cline;
                    break;
                case 'diaginal':
                    var iterator = (row == 0 ? 1 : -1);
                    for (var i = 0; i < 3; i++) {
                        this.markers[row][i].destroy();
                        var newMarker = this.game.add.sprite(0, 0, 'ticYellow' + (markType == 'x' ? 'Cross' : 'Circle'));
                        this.markers[row][i] = newMarker;
                        newMarker.alignIn(this.buttons[row][i], Phaser.CENTER);
                        row += iterator;
                    }
                    var line = this.game.add.sprite(0, 0, 'ticLine');
                    line.anchor.set(0.5);
                    line.angle = (iterator == 1 ? 45 : -45);
                    line.alignIn(this.buttons[1][1], Phaser.CENTER);
                    this.winningLine = line;
                    break;
            }
        };
        TicTacToe.prototype.finishRound = function (winner) {
            var _this = this;
            if (winner == 'player') {
                this.daffy.loadTexture('ticDaffyNo');
                this.playerScoreBoard[Math.min(this.playerWins, 9)].visible = true;
                this.playerWins++;
                this.updateScore(300);
                this.createPointsPopup(this.buttons[1][1].centerX, this.buttons[1][1].centerY, 300);
            }
            else if (winner == 'daffy') {
                this.daffy.loadTexture('ticDaffyHappy');
                this.daffyScoreBoard[Math.min(this.playerWins, 9)].visible = true;
                this.daffyWins++;
                this.starConditionMet = false;
            }
            else if (winner == 'draw') {
                this.daffy.loadTexture('ticDaffyRematch');
                this.updateScore(50);
                this.createPointsPopup(this.buttons[1][1].centerX, this.buttons[1][1].centerY, 50);
            }
            var group = this.add.group();
            var glow = this.add.sprite(0, 0, 'bballGlow', null, group);
            var style = { font: F84.Fonts.BoldFont, fill: 'white', fontSize: 48 };
            var text = this.add.text(0, 0, F84.Strings.get(winner + 'Win'), style, group);
            text.alignIn(glow, Phaser.CENTER);
            group.pivot.set(group.width / 2, group.height / 2);
            group.alignIn(this.world.bounds, Phaser.CENTER);
            var duration = 250;
            var waitTime = 1500;
            var fadetween = this.add.tween(group).from({ alpha: 0 }, duration, Phaser.Easing.Quadratic.Out, true);
            fadetween.onComplete.addOnce(function () {
                var disappear = _this.game.add.tween(group).to({ alpha: 0 }, duration, Phaser.Easing.Quadratic.In, true, waitTime);
            });
            var scaleTween = this.add.tween(group.scale).from({ x: 0.8, y: 0.8 }, duration, Phaser.Easing.Quadratic.Out, true);
            var timer = this.time.create();
            timer.add(duration * 2 + waitTime, function () {
                _this.daffy.loadTexture('ticDaffyNormal');
                group.destroy();
                if (!_this.checkTimesUp())
                    _this.restart();
            });
            timer.start();
        };
        TicTacToe.prototype.pause = function () {
            _super.prototype.pause.call(this);
            this.enableTicTacToeInput(false);
        };
        TicTacToe.prototype.unpause = function () {
            _super.prototype.unpause.call(this);
            this.enableTicTacToeInput(true);
        };
        TicTacToe.prototype.enableTicTacToeInput = function (enable) {
            this.buttons.forEach(function (buttonRow) {
                buttonRow.forEach(function (button) {
                    button.input.enabled = enable;
                });
            });
        };
        TicTacToe.prototype.createScoreBoardGroup = function (padding) {
            var group = this.add.group();
            var sprites = [];
            for (var i = 1; i <= 10; i++) {
                var horizontal = i % 5 == 0;
                var mark = this.game.add.sprite(0, 0, (horizontal ? 'horizontal' : 'vertical') + 'Mark');
                mark.anchor.set(0.5);
                if (horizontal) {
                    var ref = sprites[i - 3];
                    mark.alignIn(ref, Phaser.CENTER, -10, 0);
                }
                else if (i != 1) {
                    var newSet = i == 6;
                    var ref = sprites[i - (newSet ? 3 : 2)];
                    mark.height += this.game.rnd.between(-12, 12);
                    if (newSet)
                        mark.alignTo(ref, Phaser.BOTTOM_RIGHT, mark.width + padding, padding);
                    else
                        mark.alignTo(ref, Phaser.RIGHT_CENTER, padding, 0);
                }
                mark.visible = false;
                sprites.push(mark);
                group.add(mark);
            }
            return [group, sprites];
        };
        return TicTacToe;
    }(F84.GameState));
    F84.TicTacToe = TicTacToe;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var TutorialPrompt = (function (_super) {
        __extends(TutorialPrompt, _super);
        function TutorialPrompt(game, onClosed, onClosedContext, unpause, unPauseContext) {
            var _this = _super.call(this, game) || this;
            var overlay = F84.Overlay.create(_this.game, 0.7);
            _this.add(overlay);
            var fadeTween = game.add.tween(overlay);
            fadeTween.from({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
            var minigame = _this.game.state.current;
            var boxGroup = game.add.group(_this);
            var box = _this.game.add.sprite(0, 0, 'tutorial' + minigame, null, boxGroup);
            box.alignIn(_this.game.world.bounds, Phaser.CENTER, 0, -30);
            var style = { font: F84.Fonts.BoldFont, fill: 'white', fontSize: 48 };
            var label = _this.game.add.text(0, 0, F84.Strings.get(minigame), style, boxGroup);
            label.alignIn(box, Phaser.TOP_CENTER, 0, -10);
            style = { font: F84.Fonts.DefaultFont, fill: F84.GameColors.TAN, fontSize: 48, wordWrap: true, wordWrapWidth: 550, align: 'center' };
            var desc = _this.game.add.text(0, 0, F84.Strings.get('Tutorial' + minigame), style, boxGroup);
            desc.lineSpacing = -10;
            desc.alignIn(box, Phaser.CENTER, 0, 125);
            var button = _this.game.add.button(0, 0, 'playButton', function () {
                _this.game.sound.play('button');
                _this.destroy();
                if (unpause)
                    unpause.call(unPauseContext);
                if (onClosed)
                    onClosed.call(onClosedContext);
            }, _this);
            F84.GameFactory.addButtonBounce(_this.game, button);
            boxGroup.add(button);
            button.alignIn(box, Phaser.BOTTOM_CENTER, 0, button.height / 2);
            var moveTween = game.add.tween(boxGroup);
            moveTween.from({ y: boxGroup.y + 400 }, 600, Phaser.Easing.Back.Out, true);
            var angleTween = game.add.tween(boxGroup);
            angleTween.from({ angle: 15 }, 600, Phaser.Easing.Quadratic.Out, true);
            return _this;
        }
        return TutorialPrompt;
    }(F84.ResizableGroup));
    F84.TutorialPrompt = TutorialPrompt;
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
                return "20pt curse-casual";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Fonts, "BoldFont", {
            get: function () {
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