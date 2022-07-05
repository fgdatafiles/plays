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
            this.load.json('strings', './locale/' + F84.Game.Instance.locale + '/strings.json');
            console.log(F84.Game.Instance.locale);
            this.load.json('gameConfig', './assets/json/game-config.json');
            this.load.image('rotateDevice', './assets/images/system/orientation.png');
            this.load.image('loadBackground', './assets/images/ui/dcshg-burrito-loading-bg.png');
            this.load.image('loadLogo', './locale/' + F84.Game.Instance.locale + '/images/dcg-burrito-loading-logo.png');
            this.load.image('loadEmpty', './assets/images/menu/dcg-burrito-loading-bar-empty.png');
            this.load.image('loadFull', './assets/images/menu/dcg-burrito-loading-bar-full.png');
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
            _this.playerData = new F84.PlayerData("BurritoBlitz");
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
        GameColors.ORANGE = "#bf5416";
        GameColors.BROWN = "#63534D";
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
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            this._background = this.add.image(0, 0, 'splashBackground');
            this._popupBackground = this.add.image(0, 0, 'popupSmall');
            this._popupLogo = this.add.image(0, 0, 'birthdayLogoSmall');
            this._mysteryGang = this.add.image(0, 0, 'scoobyGameComplete');
            this._nextButton = this.add.button(0, 0, 'playButton', this.continue, this);
            this._headerText = this.add.text(0, 0, F84.Strings.get("GameCompleteHeader"), { fill: 'white', fontSize: 52, font: F84.Fonts.BoldFont });
            var hundredPercent = true;
            var body = hundredPercent ? F84.Strings.get("Game100%Message") : F84.Strings.get("GameCompleteMessage");
            this._bodyText = this.add.text(0, 0, body, { fill: 'white', fontSize: 24, font: F84.Fonts.BoldFont, align: 'center', wordWrap: true, wordWrapWidth: 400 });
            this.resize();
        };
        GameComplete.prototype.resize = function () {
            _super.prototype.resize.call(this);
            F84.SpriteUtils.aspectFill(this._background, this.world.bounds);
            this._mysteryGang.anchor.set(1, 1);
            this._mysteryGang.alignIn(this.world.bounds, Phaser.BOTTOM_RIGHT, 20, 0);
            this._popupBackground.anchor.set(0, 0.5);
            this._popupBackground.alignIn(this.world.bounds, Phaser.LEFT_CENTER, -20, 0);
            this._popupLogo.scale.set(0.8);
            this._popupLogo.anchor.set(0.5);
            this._popupLogo.alignIn(this._popupBackground, Phaser.TOP_CENTER, 0, 60);
            this._nextButton.anchor.set(0.5);
            this._nextButton.alignIn(this._popupBackground, Phaser.BOTTOM_CENTER, 0, 50);
            this._headerText.anchor.set(0.5, 0);
            this._headerText.alignIn(this._popupLogo, Phaser.BOTTOM_CENTER, 0, 60);
            this._bodyText.anchor.set(0.5);
            this._bodyText.alignIn(this._popupBackground, Phaser.CENTER);
        };
        GameComplete.prototype.continue = function () {
            this.game.state.start('MainMenu');
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
    var GameState = (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameState.prototype.create = function () {
            var _this = this;
            GameState.Instance = this;
            var width = Math.min(this.world.bounds.width, 1024);
            var boundsX = this.world.bounds.centerX - width / 2;
            var bounds = this.bounds = new Phaser.Rectangle(boundsX, 0, width, 576);
            this.rounds = this.cache.getJSON('rounds');
            this.currentRoundIndex = 0;
            this.currentRound = this.rounds[this.currentRoundIndex];
            var bg = this.add.sprite(0, 0, 'bg');
            bg.alignIn(bounds, Phaser.CENTER);
            this.customers = this.add.group();
            this.customers.y = 340;
            this.customerLine = new F84.CustomerLine();
            this.customerLine.onRemove.add(this.onCustomerRemoved, this);
            var counter = this.add.sprite(0, 0, 'counter');
            counter.alignIn(bounds, Phaser.BOTTOM_CENTER);
            var prepAreaPos = [{ x: -145, y: 120 }, { x: -52.5, y: 120 }, { x: -137.5, y: 60 }, { x: -50, y: 60 }];
            this.prepAreas = [];
            for (var i = 0; i < 4; i++) {
                this.prepAreas[i] = new F84.PrepArea(this.game, this, 0, 0);
                this.add.existing(this.prepAreas[i]);
                var buttonGroup = this.prepAreas[i].createGroup();
                buttonGroup.alignIn(counter, Phaser.CENTER, prepAreaPos[i].x, prepAreaPos[i].y);
            }
            var ingredientBins = [
                { ingredient: F84.IngredientType.Taco, sprite: 'tacoLit', x: -260, y: 67.5 },
                { ingredient: F84.IngredientType.Burrito, sprite: 'burritoLit', x: -275, y: 142 },
                { ingredient: F84.IngredientType.Steak, sprite: 'steakLit', x: -292.5, y: 228 },
                { ingredient: F84.IngredientType.Cheese, sprite: 'cheeseLit', x: -176, y: 228 },
                { ingredient: F84.IngredientType.Lettuce, sprite: 'lettuceLit', x: -62.5, y: 228 },
                { ingredient: F84.IngredientType.Tomatoes, sprite: 'tomatoesLit', x: 52.5, y: 228 },
                { ingredient: F84.IngredientType.Guac, sprite: 'guacLit', x: 165, y: 228 },
                { ingredient: F84.IngredientType.HotSauce, sprite: 'hotSauceLit', x: 50, y: 140 },
                { ingredient: F84.IngredientType.SourCream, sprite: 'sourCreamLit', x: 160, y: 140 },
            ];
            var _loop_1 = function (i) {
                var bin = ingredientBins[i];
                var button = new F84.IngredientButton(this_1.game, 0, 0, bin.sprite, function () {
                    _this.addIngredient(bin.ingredient);
                    var particle = new F84.ParticleEffect(_this.game, button.centerX, button.centerY, 'smoke11');
                    _this.add.existing(particle);
                });
                button.alignIn(counter, Phaser.CENTER, bin.x, bin.y);
                this_1.add.existing(button);
            };
            var this_1 = this;
            for (var i = 0; i < ingredientBins.length; i++) {
                _loop_1(i);
            }
            var batgirl = this.batgirl = new F84.Batgirl(this.game);
            this.add.existing(batgirl);
            var exitButton = this.add.button(0, 0, 'btnPause', this.pause, this);
            exitButton.alignIn(bounds, Phaser.TOP_RIGHT, -10, -10);
            var healthContainer = this.add.sprite(0, 0, 'uiHealthContainer');
            healthContainer.scale.set(0.5);
            healthContainer.alignIn(bounds, Phaser.TOP_RIGHT, -90, -18);
            this.lifeSprites = [];
            for (var i = 0; i < 3; i++) {
                var life = this.add.sprite(0, 0, 'uiHealthGreen');
                life.scale.set(0.5);
                life.alignIn(healthContainer, Phaser.CENTER, 36 * (i - 1), 0);
                this.lifeSprites.push(life);
            }
            var scoreContainer = this.add.sprite(0, 0, 'uiHealthContainer');
            scoreContainer.scale.set(0.5);
            scoreContainer.alignIn(bounds, Phaser.TOP_LEFT, -10, -18);
            var style = { fill: '#ffc71e', fontSize: 32, font: F84.Fonts.BoldFont, align: 'center' };
            var scoreText = this.scoreText = this.add.text(0, 0, '0', style);
            scoreText.anchor.set(0.5, 0.5);
            scoreText.alignIn(scoreContainer, Phaser.CENTER, 2, 2);
            scoreText.textBounds = new Phaser.Rectangle(0, 0, 100, 70);
            scoreText.setShadow(0, 2);
            var leftWall = this.add.sprite(0, 0, 'bgWall');
            leftWall.alignTo(bounds, Phaser.LEFT_CENTER);
            var rightWall = this.add.sprite(0, 0, 'bgWall');
            rightWall.width *= -1;
            rightWall.anchor.set(1, 0);
            rightWall.alignTo(bounds, Phaser.RIGHT_CENTER, -rightWall.width);
            this.isPaused = true;
            var tutorial = new F84.HelpScreen(this.game, true, this.endTutorial, this);
            this.game.add.existing(tutorial);
        };
        GameState.prototype.restart = function () {
            this.lives = 3;
            this.updateLifeSprites();
            this.customerLine.clear();
            for (var _i = 0, _a = this.prepAreas; _i < _a.length; _i++) {
                var prepArea = _a[_i];
                prepArea.clear();
            }
            this.score = 0;
            this.scoreText.text = '' + this.score;
            this.currentRoundIndex = 0;
            this.burritosServed = 0;
            this.tacosServed = 0;
            this.currentRound = this.rounds[this.currentRoundIndex];
            this.createRoundCount();
        };
        GameState.prototype.loadRound = function () {
            this.customersSpawned = 0;
            this.isPaused = false;
            this.customerSpawnTime = this.currentRound.timeBetweenCustomers;
            this.customerSpawnTimer = this.customerSpawnTime;
            this.spawnCustomer();
        };
        GameState.prototype.nextRound = function () {
            for (var _i = 0, _a = this.prepAreas; _i < _a.length; _i++) {
                var prepArea = _a[_i];
                prepArea.clear();
            }
            this.isPaused = true;
            this.currentRoundIndex++;
            this.currentRound = this.rounds[this.currentRoundIndex];
            this.createRoundCount();
        };
        GameState.prototype.createRoundCount = function () {
            var roundCount = new F84.RoundCounterGroup(this.game, this.currentRoundIndex + 1, this.startRound, this);
            this.game.add.existing(roundCount);
        };
        GameState.prototype.startRound = function () {
            this.isPaused = false;
            if (this.currentRound != null)
                this.loadRound();
            else
                this.gameOver();
        };
        GameState.prototype.update = function () {
            if (!this.isPaused) {
                this.customerSpawnTimer -= this.time.physicsElapsed;
                if (this.customerSpawnTimer <= 0 && this.customersSpawned < this.currentRound.customers) {
                    this.spawnCustomer();
                }
                else if (this.lives > 0 && this.customersSpawned >= this.currentRound.customers && this.customerLine.customers.length == 0) {
                    this.roundComplete();
                }
            }
        };
        GameState.prototype.spawnCustomer = function () {
            var order = new F84.Order();
            order.populate(this.currentRound.minIngredients, this.currentRound.maxIngredients);
            var sprites = ['girl3', 'boy3', 'boy4', 'boy5', 'boy6'];
            F84.ArrayUtils.remove(sprites, this.lastCustomer);
            for (var _i = 0, _a = this.customerLine.customers; _i < _a.length; _i++) {
                var customer_1 = _a[_i];
                F84.ArrayUtils.remove(sprites, customer_1.spriteName);
            }
            if (sprites.length == 0)
                sprites = ['girl3', 'boy3', 'boy4', 'boy5', 'boy6'];
            var sprite = this.rnd.pick(sprites);
            this.lastCustomer = sprite;
            var customer = new F84.Customer(this.game, sprite, order, this.currentRound.waitTime, this.onCustomerLeave, this);
            customer.onTimeUp.add(this.onCustomerTimeUp, this);
            this.customers.add(customer);
            this.customerLine.add(customer);
            this.customersSpawned++;
            this.customerSpawnTimer = this.customerSpawnTime;
        };
        GameState.prototype.onCustomerTimeUp = function () {
            this.batgirl.setSprite('OhNo', 2.5);
        };
        GameState.prototype.onCustomerLeave = function (satisfied) {
            if (!satisfied)
                this.loseLife();
            if (this.lives > 0 && this.customersSpawned >= this.currentRound.customers && this.customerLine.customers.length == 0 && !this.isPaused) {
                this.roundComplete();
            }
        };
        GameState.prototype.onCustomerRemoved = function () {
            if (this.lives > 0 && this.customersSpawned >= this.currentRound.customers && this.customerLine.customers.length == 0 && !this.isPaused) {
                this.roundComplete();
            }
            else if (this.customerLine.customers.length == 0 && !this.isPaused) {
                this.spawnCustomer();
            }
        };
        GameState.prototype.loseLife = function () {
            this.lives--;
            var particle = new F84.ParticleEffect(this.game, 0, 0, 'smoke12');
            this.add.existing(particle);
            particle.alignIn(this.lifeSprites[this.lives], Phaser.CENTER);
            if (this.lives <= 0)
                this.gameOver();
            this.updateLifeSprites();
        };
        GameState.prototype.updateLifeSprites = function () {
            for (var i = 0; i < 3; i++) {
                if (i < this.lives)
                    this.lifeSprites[i].loadTexture('uiHealthGreen');
                else
                    this.lifeSprites[i].loadTexture('uiHealthRed');
            }
        };
        GameState.prototype.roundComplete = function () {
            this.nextRound();
        };
        GameState.prototype.gameOver = function () {
            var _this = this;
            this.isPaused = true;
            this.sound.play('failure');
            if (this.score > F84.PlayerData.Instance.saveData.highScore) {
                F84.PlayerData.Instance.saveData.highScore = this.score;
                F84.PlayerData.Instance.save();
            }
            var popup = new F84.RoundCompleteGroup(this.game, this.burritosServed, this.tacosServed, this.score);
            this.add.existing(popup);
            popup.onRestart.add(this.restart, this);
            popup.onContinue.add(function () { return _this.game.state.start('MainMenu'); });
        };
        GameState.prototype.addIngredient = function (ingredient) {
            for (var _i = 0, _a = this.customerLine.customers; _i < _a.length; _i++) {
                var customer = _a[_i];
                if (customer.acceptsFood && customer.order.contains(ingredient)) {
                    for (var _b = 0, _c = this.prepAreas; _b < _c.length; _b++) {
                        var prepArea = _c[_b];
                        if (prepArea.order.ingredients[0] == customer.order.ingredients[0]) {
                            if (prepArea.addIngredient(ingredient))
                                return;
                        }
                    }
                }
            }
            for (var _d = 0, _e = this.prepAreas; _d < _e.length; _d++) {
                var prepArea = _e[_d];
                if (prepArea.addIngredient(ingredient))
                    return;
            }
        };
        GameState.prototype.shutdown = function () {
            F84.Orientation.matchBoundsToGameSize();
        };
        GameState.prototype.serveFood = function (order) {
            for (var _i = 0, _a = this.customerLine.customers; _i < _a.length; _i++) {
                var customer = _a[_i];
                if (customer.giveOrder(order)) {
                    this.score += order.getScore() + customer.getScore();
                    this.scoreText.text = '' + this.score;
                    if (order.contains(F84.IngredientType.Burrito))
                        this.burritosServed++;
                    if (order.contains(F84.IngredientType.Taco))
                        this.tacosServed++;
                    this.batgirl.setSprite('Awesome', 2);
                    return true;
                }
            }
            return false;
        };
        GameState.prototype.pause = function () {
            this.game.sound.play('button');
            this.isPaused = true;
            var pauseMenu = new F84.PauseMenu(this.game, this.unpause, this);
            this.add.existing(pauseMenu);
        };
        GameState.prototype.unpause = function () {
            this.isPaused = false;
            if (this.customersSpawned < this.currentRound.customers && this.customerLine.customers.length == 0) {
                this.spawnCustomer();
            }
            else if (this.lives > 0 && this.customersSpawned >= this.currentRound.customers && this.customerLine.customers.length == 0) {
                this.roundComplete();
            }
        };
        GameState.prototype.endTutorial = function () {
            this.unpause();
            this.restart();
        };
        return GameState;
    }(F84.ResizableState));
    F84.GameState = GameState;
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
            var background = this.add.image(0, 0, 'menuBG');
            var dcLogo = this.add.image(0, 0, 'menuLogoDC');
            var gameLogo = this.add.image(0, 0, 'menuLogo');
            var style = { fill: 'white', fontSize: 26, font: F84.Fonts.DefaultFont, align: 'center', wordWrap: true, wordWrapWidth: 400 };
            var text = this.add.text(0, 0, F84.Strings.get('SplashHeader'), style);
            var heroImage = this.add.image(0, 0, 'menuCharacter');
            var playButton = this.add.button(0, 0, 'btnPlay', this.play, this);
            playButton.anchor.set(0.5, 0.5);
            var highscore = this.add.image(0, 0, 'menuHighscore');
            var highscoreStyle = { fill: 'white', fontSize: 48, font: F84.Fonts.BoldFont, align: 'center' };
            if (F84.PlayerData.Instance.saveData.highScore == null)
                F84.PlayerData.Instance.saveData.highScore = 0;
            var highscoreText = this.add.text(0, 0, F84.PlayerData.Instance.saveData.highScore + '', highscoreStyle);
            this._onResize = function () {
                F84.SpriteUtils.aspectFill(background, _this.world.bounds);
                background.alignIn(_this.world.bounds, Phaser.CENTER);
                dcLogo.alignIn(_this.world.bounds, Phaser.TOP_LEFT, -20, -20);
                gameLogo.alignIn(_this.world.bounds, Phaser.TOP_CENTER, -48, 0);
                heroImage.alignTo(gameLogo, Phaser.RIGHT_CENTER, -100, 100);
                text.alignIn(gameLogo, Phaser.TOP_CENTER, 12, -34);
                playButton.alignIn(_this.world.bounds, Phaser.BOTTOM_CENTER, 0, -20);
                highscore.alignIn(_this.world.bounds, Phaser.BOTTOM_RIGHT, -24, -20);
                highscoreText.alignIn(highscore, Phaser.CENTER, 20, 5);
            };
            this.resize();
        };
        MainMenu.prototype.resize = function () {
            this._onResize();
        };
        MainMenu.prototype.play = function () {
            this.game.sound.play('button');
            this.game.state.start('StoryIntro');
            F84.PlayerData.Instance.saveData.gameStarted = true;
            F84.PlayerData.Instance.save();
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
            this.highScore = 0;
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
                this._saveData = (JSON.parse(jsonText));
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
            _super.prototype.preload.call(this);
            this._background = this.add.image(0, 0, 'loadBackground');
            this._loadGraphic = this.add.image(0, 0, 'loadEmpty');
            this._loadFill = this.add.sprite(0, 0, 'loadFull');
            this._loadMask = this.add.graphics(0, 0);
            this._loadFill.mask = this._loadMask;
            this._loadLogo = this.add.image(0, 0, 'loadLogo');
            this.resize();
            this.loadImages('./assets/images/temp/', {
                whiteSquare: 'white-square',
                loadBar: 'F84-loading-bar',
                loadBarBG: 'F84-loading-bar-bg',
            });
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/images/', {
                menuLogo: 'dcg-burrito-splash-logo',
                menuLogoSmall: 'dcg-burrito-splash-logo-small'
            });
            this.loadImages('./assets/images/menu/dcg-burrito-splash-', {
                menuBG: 'bg',
                menuCharacter: 'character',
                menuLogoDC: 'logo-dc',
                menuHighscore: 'highscore',
            });
            this.loadImages('./assets/images/story/dcg-burrito-story-', {
                storyBG: 'bg',
                storyCharacter1: 'character-1',
            });
            this.loadImages('./assets/images/ui/dcg-burrito-splash-', {
                btnExit: 'btn-exit',
                btnHelp: 'btn-help',
                btnPlay: 'btn-play',
                btnPause: 'btn-pause',
                btnReplay: 'btn-replay',
                btnSoundOff: 'btn-sound-off',
                btnSoundOn: 'btn-sound-on',
                uiPopup: 'popup',
                uiStoryPopup: 'story',
            });
            this.loadImages('./assets/images/ui/dcg-ui-', {
                uiPopup2: 'container-popup',
                uiBackdrop: 'container-backing',
                uiFill: 'fill-tutorial',
                uiHeader: 'header-banner-brown',
                uiRoundCount: 'round-count',
            });
            this.loadImages('./assets/images/ui/dcg-burrito-recap-', {
                uiRecapCharacter: 'character',
                uiRecapContainer: 'container',
            });
            this.loadImages('./assets/images/ui/dcg-burrito-', {
                uiHealthContainer: 'gameplay-ui-container',
                uiHealthGreen: 'gameplay-ui-life-1',
                uiHealthRed: 'gameplay-ui-life-2',
            });
            this.loadImages('./assets/images/game/dcg-game-burrito-', {
                batgirlAwesome: 'batgirl-awesome',
                batgirlGoodJob: 'batgirl-goodjob',
                batgirlNormal: 'batgirl-normal',
                batgirlOhNo: 'batgirl-whatareyoudoing',
                bg: 'bg',
                bgWall: 'bg-wall',
                burritoLit: 'brightbotton-burrito',
                cheeseLit: 'brightbotton-cheese',
                hotSauceLit: 'brightbotton-hotsauce',
                lettuceLit: 'brightbotton-lettuce',
                steakLit: 'brightbotton-meat',
                guacLit: 'brightbotton-quac',
                sourCreamLit: 'brightbotton-sourcream',
                tacoLit: 'brightbotton-taco',
                tomatoesLit: 'brightbotton-tomatoes',
                burrito0: 'burrito',
                burrito1: 'burrito-oneingreients',
                burrito2: 'burrito-twongreients',
                burrito3: 'burrito-threeingreients',
                burrito4: 'burrito-fouringreients',
                burrito5: 'burrito-fiveingreients',
                burrito6a: 'burrito-sourcream',
                burrito6b: 'burrito-hotsauce',
                burrito7: 'burrito-all',
                taco0: 'taco',
                taco1: 'taco-oneingreients',
                taco2: 'taco-twoingreients',
                taco3: 'taco-threeingreients',
                taco4: 'taco-fouringreients',
                taco5: 'taco-fiveingreients',
                taco6a: 'taco-sourcream',
                taco6b: 'taco-hotsauce',
                taco7: 'taco-all',
                boy1: 'character-boy1-happy',
                boy1Angry: 'character-boy1-angry',
                boy1Happy: 'character-boy1-awesome',
                boy2: 'character-boy2-happy',
                boy2Angry: 'character-boy2-angry',
                boy2Happy: 'character-boy2-awesome',
                boy3: 'character-boy3-happy',
                boy3Angry: 'character-boy3-angry',
                boy3Happy: 'character-boy3-awesome',
                boy4: 'character-boy4-happy',
                boy4Angry: 'character-boy4-angry',
                boy4Happy: 'character-boy4-awesome',
                boy5: 'character-boy5-happy',
                boy5Angry: 'character-boy5-angry',
                boy5Happy: 'character-boy5-awesome',
                boy6: 'character-boy6-happy',
                boy6Angry: 'character-boy6-angry',
                boy6Happy: 'character-boy6-awesome',
                girl1: 'character-girl-happy',
                girl1Angry: 'character-girl-angry',
                girl1Happy: 'character-girl-awesome',
                girl2: 'character-girl2-happy',
                girl2Angry: 'character-girl2-angry',
                girl2Happy: 'character-girl2-awesome',
                girl3: 'character-girl3-happy',
                girl3Angry: 'character-girl3-angry',
                girl3Happy: 'character-girl3-awesome',
                cupEmpty: 'emptycup',
                cupFull: 'fullcup',
                meatUncooked: 'meat-uncook',
                meatCooked: 'meat-cooked',
                meatOvercooked: 'meat-overcooked',
                meatSteam: 'meat-steam',
                orderBubble: 'orderspace',
                counter: 'table',
                timer1: 'timer-green-1',
                timer2: 'timer-green-2',
                timer3: 'timer-green-3',
                timer4: 'timer-green-4',
                timer5: 'timer-green-5',
                timer6: 'timer-red-6',
                timer7: 'timer-red-7',
                timer8: 'timer-red-8',
                timer9: 'timer-red-9',
                timer10: 'timer-red-10',
                tutorial1: 'tutorial-1',
                tutorial2: 'tutorial-2',
                tutorial3: 'tutorial-3',
                tutorial4: 'tutorial-4',
            });
            this.load.atlasJSONArray('smoke11', './assets/images/game/dcg-game-smoke-11.png', './assets/images/game/dcg-game-smoke-11.json');
            this.load.atlasJSONArray('smoke12', './assets/images/game/dcg-game-smoke-12.png', './assets/images/game/dcg-game-smoke-12.json');
            this.load.json('rounds', './assets/json/rounds.json');
            this.loadImages('./locale/' + F84.Game.Instance.locale + '/images/', {});
            this.load.webfont('defaultFont', 'angostura');
            this.load.webfont('defaultFontBlack', 'angosturablack');
            this.loadAudio('./assets/audio/', {
                menuMusic: 'music_home_screen',
                cheese: 'cheese_tomato',
                ketchup: 'ketchup_squirt',
                lettuce: 'lettuce',
                Guac: 'sour_cream_guac',
                meat: 'taco_meat',
                shell: 'taco_shell',
                tortilla: 'tortilla',
                enters: 'walking_in_burrito_blitz',
                stepInLine: 'step_in_line_burrito_blitz',
                bell: 'customer_rings_bell',
                served: 'serve_taco_+_points_counting_up',
                leaves: 'customer_leaves',
                failure: 'round_failure_sound',
                success: 'round_success_sound',
                button: 'ui_click_1',
            });
        };
        Preloader.prototype.loadImages = function (prefix, map, suffix) {
            if (suffix === void 0) { suffix = '.png'; }
            for (var name_1 in map) {
                this.load.image(name_1, prefix + map[name_1] + suffix);
            }
        };
        Preloader.prototype.loadAnimation = function (name, path, img, json) {
            this.load.atlasJSONHash(name, path + img + '.png', path + json + '.json');
        };
        Preloader.prototype.loadAudio = function (prefix, map, suffix) {
            if (suffix === void 0) { suffix = '.ogg'; }
            if (this._audioKeys == null)
                this._audioKeys = [];
            for (var name_2 in map) {
                this.load.audio(name_2, [prefix + map[name_2] + suffix, prefix + map[name_2] + '.mp3']);
                this._audioKeys.push(name_2);
            }
        };
        Preloader.prototype.loadUpdate = function (game) {
            _super.prototype.loadUpdate.call(this, game);
            var totalFiles = this.load.totalQueuedFiles() + this.load.totalLoadedFiles();
            var filesLoaded = this.load.totalLoadedFiles();
            var percentComplete = filesLoaded / totalFiles;
            this._loadMask.beginFill(0x00000, 1);
            this._loadMask.drawRect(this._loadFill.x, this._loadFill.y + (this._loadFill.height * (1 - percentComplete)), this._loadFill.width, this._loadFill.height * percentComplete);
            this._loadMask.endFill();
            this._loadFill.mask = this._loadMask;
        };
        Preloader.prototype.resize = function () {
            _super.prototype.resize.call(this);
            F84.SpriteUtils.aspectFill(this._background, F84.Game.Instance.getBounds());
            this._background.alignIn(this.world.bounds, Phaser.CENTER);
            this._loadGraphic.alignIn(F84.Game.Instance.getBounds(), Phaser.CENTER);
            this._loadFill.alignIn(this._loadGraphic, Phaser.CENTER);
            this._loadLogo.alignIn(this._loadGraphic, Phaser.CENTER);
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
    var ResetGameGroup = (function (_super) {
        __extends(ResetGameGroup, _super);
        function ResetGameGroup(game) {
            var _this = _super.call(this, game) || this;
            _this._overlay = _this.game.add.graphics(0, 0, _this);
            _this._overlay.inputEnabled = true;
            _this._overlay.beginFill(0x000000, 0.7);
            _this._overlay.drawRect(0, 0, F84.Game.Instance.width, F84.Game.Instance.height);
            _this._overlay.endFill();
            _this._background = _this.game.add.image(0, 0, 'popupSmall', null, _this);
            _this._logo = _this.game.add.image(0, 0, 'logoScooby', null, _this);
            _this._header = _this.game.add.text(0, 0, F84.Strings.get("ResetGameHeader"), { fill: 'white', fontSize: 52, font: F84.Fonts.BoldFont }, _this);
            _this._message = _this.game.add.text(0, 0, F84.Strings.get("ResetGameMessage"), { fill: 'white', fontSize: 24, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 500, align: "center" }, _this);
            _this._yesButton = _this.game.add.button(0, 0, 'confirmButton', _this.reset, _this, null, null, null, null, _this);
            _this._noButton = _this.game.add.button(0, 0, 'quitButton', _this.return, _this, null, null, null, null, _this);
            _this.resize();
            return _this;
        }
        ResetGameGroup.prototype.resize = function () {
            F84.SpriteUtils.aspectFill(this._overlay, this.game.world.bounds);
            this._background.alignIn(this.game.world.bounds, Phaser.CENTER);
            this._logo.alignTo(this._background, Phaser.TOP_CENTER, 0, -50);
            this._header.alignIn(this._background, Phaser.TOP_CENTER, 0, -65);
            this._message.alignTo(this._header, Phaser.BOTTOM_CENTER, 0, 25);
            this._yesButton.alignTo(this._message, Phaser.BOTTOM_CENTER, 100, 50);
            this._noButton.alignTo(this._message, Phaser.BOTTOM_CENTER, -100, 50);
        };
        ResetGameGroup.prototype.reset = function () {
            F84.PlayerData.Instance.reset();
            this.game.state.start('MainMenu');
        };
        ResetGameGroup.prototype.return = function () {
            this.game.state.start('MainMenu');
        };
        return ResetGameGroup;
    }(F84.ResizableGroup));
    F84.ResetGameGroup = ResetGameGroup;
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
    var StoryIntro = (function (_super) {
        __extends(StoryIntro, _super);
        function StoryIntro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StoryIntro.prototype.create = function () {
            var _this = this;
            this.game.input.onDown.add(function () { return F84.Fullscreen.startFullscreen(_this.game); });
            this._background = this.add.image(0, 0, 'storyBG');
            this._popupBackground = this.add.image(0, 0, 'uiStoryPopup');
            this._character = this.add.image(0, 0, 'storyCharacter1');
            this._nextButton = this.add.button(0, 0, 'btnPlay', this.startGame, this);
            this._headerText = this.add.text(0, 0, F84.Strings.get("StoryHeader"), { fill: 'white', fontSize: 48, font: F84.Fonts.BoldFont });
            this._storyText = this.add.text(0, 0, F84.Strings.get("StoryMessage"), { fill: F84.GameColors.ORANGE, fontSize: 30, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 400 });
            this.resize();
        };
        StoryIntro.prototype.resize = function () {
            _super.prototype.resize.call(this);
            F84.SpriteUtils.aspectFill(this._background, this.world.bounds);
            this._background.alignIn(this.world.bounds, Phaser.CENTER);
            this._popupBackground.alignIn(this.world.bounds, Phaser.CENTER, 80, 0);
            this._nextButton.alignIn(this.world.bounds, Phaser.BOTTOM_RIGHT, -10, -10);
            this._character.alignIn(this.world.bounds, Phaser.BOTTOM_CENTER, -280, 0);
            this._headerText.alignIn(this._popupBackground, Phaser.TOP_CENTER, 0, -4);
            this._storyText.alignIn(this._popupBackground, Phaser.TOP_LEFT, -200, -160);
        };
        StoryIntro.prototype.startGame = function () {
            this.game.state.start('GameState');
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
            return this._json[id];
        };
        Strings._json = null;
        return Strings;
    }());
    F84.Strings = Strings;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Batgirl = (function (_super) {
        __extends(Batgirl, _super);
        function Batgirl(game) {
            var _this = _super.call(this, game, 0, 0, 'batgirlNormal') || this;
            _this.anchor.set(0.5, 1);
            _this.alignIn(F84.GameState.Instance.bounds, Phaser.BOTTOM_RIGHT, -20, 0);
            return _this;
        }
        Batgirl.prototype.update = function () {
            if (this.timer > 0) {
                this.timer -= this.game.time.physicsElapsed;
                if (this.timer <= 0) {
                    this.loadTexture('batgirlNormal');
                }
            }
        };
        Batgirl.prototype.setSprite = function (key, timeout) {
            this.loadTexture('batgirl' + key);
            this.timer = timeout;
        };
        return Batgirl;
    }(Phaser.Sprite));
    F84.Batgirl = Batgirl;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ConfirmQuit = (function (_super) {
        __extends(ConfirmQuit, _super);
        function ConfirmQuit(game, onClosed, onClosedContext) {
            var _this = _super.call(this, game) || this;
            _this.onPauseMenuClosed = onClosed;
            _this.onPauseMenuClosedContext = onClosedContext;
            var overlay = F84.Overlay.create(game);
            _this.add(overlay);
            var bg = game.add.sprite(0, 0, 'uiPopup', null, _this);
            bg.alignIn(game.world.bounds, Phaser.CENTER);
            var logo = game.add.sprite(0, 0, 'menuLogoSmall', null, _this);
            logo.alignIn(bg, Phaser.TOP_CENTER, 0, 60);
            var style = { fill: F84.GameColors.ORANGE, fontSize: 36, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 400, align: 'center' };
            var text = new Phaser.Text(_this.game, 0, 0, F84.Strings.get("ConfirmQuit"), style);
            _this.add(text);
            text.alignIn(bg, Phaser.CENTER, 0, -40);
            var noButton = game.add.button(0, 0, 'btnExit', _this.noButtonPressed, _this);
            _this.add(noButton);
            noButton.alignIn(bg, Phaser.CENTER, -100, 80);
            var yesButton = game.add.button(0, 0, 'btnPlay', _this.yesButtonPressed, _this);
            _this.add(yesButton);
            yesButton.scale.set(0.65);
            yesButton.alignIn(bg, Phaser.CENTER, 100, 80);
            return _this;
        }
        ConfirmQuit.prototype.noButtonPressed = function () {
            this.game.sound.play('button');
            var prompt = new F84.PauseMenu(this.game, this.onPauseMenuClosed, this.onPauseMenuClosedContext);
            this.game.add.existing(prompt);
            this.destroy();
        };
        ConfirmQuit.prototype.yesButtonPressed = function () {
            this.game.sound.play('button');
            this.game.state.start('MainMenu');
        };
        return ConfirmQuit;
    }(Phaser.Group));
    F84.ConfirmQuit = ConfirmQuit;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var Customer = (function (_super) {
        __extends(Customer, _super);
        function Customer(game, sprite, order, waitTime, onLeave, onLeaveContext) {
            var _this = _super.call(this, game) || this;
            _this.x = F84.GameState.Instance.bounds.centerX;
            _this.targetPosition = new Phaser.Point(0, 0);
            _this.sprite = game.add.sprite(1000, 0, sprite, null, _this);
            _this.sprite.anchor.set(0.5, 1);
            _this.spriteName = sprite;
            _this.order = order;
            _this.onLeave = onLeave;
            _this.onLeaveContext = onLeaveContext;
            _this.onTimeUp = new Phaser.Signal();
            var bubble = _this.bubble = game.add.group();
            bubble.x = -96;
            bubble.y = -195;
            bubble.visible = false;
            _this.addChild(bubble);
            var bg = game.add.sprite(0, 0, 'orderBubble');
            bg.anchor.set(0.5);
            bg.scale.set(0.4);
            bubble.add(bg);
            var orderSprite = game.add.sprite(0, 0, order.getSpriteKey(), null, bubble);
            orderSprite.scale.set(0.8);
            orderSprite.alignIn(bg, Phaser.CENTER, -6, 0);
            var timer = _this.timer = game.add.sprite(0, 0, 'timer1', null, bubble);
            timer.alignIn(bg, Phaser.TOP_RIGHT, 0, 10);
            _this.acceptsFood = false;
            _this.waitTime = waitTime;
            _this.timeWaited = 0;
            var walkTween = game.add.tween(_this.sprite);
            walkTween.to({ y: -10 }, 200, Phaser.Easing.Quadratic.Out, true, 0, -1, true);
            var tween = game.add.tween(_this.sprite);
            tween.to({ x: 0 }, 1200, Phaser.Easing.Quadratic.Out, true);
            tween.onComplete.add(function () {
                _this.bubble.visible = true;
                _this.acceptsFood = true;
                walkTween.stop();
                _this.game.sound.play('bell');
            });
            return _this;
        }
        Customer.prototype.update = function () {
            this.position.x -= (this.position.x - this.targetPosition.x) * 6 * this.game.time.physicsElapsed;
            if (!F84.GameState.Instance.isPaused && this.acceptsFood) {
                this.timeWaited += this.game.time.physicsElapsed;
                var i = Math.ceil((this.timeWaited / this.waitTime) * 10);
                if (i > 10)
                    i = 10;
                this.timer.loadTexture('timer' + i);
                if (this.timeWaited >= this.waitTime)
                    this.timeUp();
            }
        };
        Customer.prototype.timeUp = function () {
            var _this = this;
            this.acceptsFood = false;
            this.bubble.destroy();
            this.setSprite('Angry');
            this.onTimeUp.dispatch();
            this.game.sound.play('leaves');
            var timer = this.game.time.create();
            timer.add(800, function () { return _this.leave(false); });
            timer.start();
        };
        Customer.prototype.giveOrder = function (order) {
            var _this = this;
            if (order.equals(this.order) && this.acceptsFood) {
                this.acceptsFood = false;
                this.bubble.destroy();
                this.setSprite('Happy');
                this.game.sound.play('served');
                var timer = this.game.time.create();
                timer.add(800, function () { return _this.leave(true); });
                timer.start();
                return true;
            }
            return false;
        };
        Customer.prototype.leave = function (satisfied) {
            var _this = this;
            var walkTween = this.game.add.tween(this.sprite);
            walkTween.to({ y: -8 }, 200, Phaser.Easing.Quadratic.Out, true, 0, -1, true);
            var tween = this.game.add.tween(this.sprite);
            tween.to({ x: -1000 }, 1000, Phaser.Easing.Quadratic.In, true);
            tween.onComplete.add(function () {
                _this.line.remove(_this);
                walkTween.stop();
                _this.destroy();
            });
            if (this.onLeave)
                this.onLeave.call(this.onLeaveContext, satisfied);
        };
        Customer.prototype.setSprite = function (emotion) {
            this.sprite.loadTexture(this.spriteName + emotion);
        };
        Customer.prototype.getScore = function () {
            return this.timeWaited <= (this.waitTime * 0.25) ? 50 : 0;
        };
        Customer.sprites = ['girl1', 'girl2', 'boy1', 'boy2'];
        return Customer;
    }(Phaser.Group));
    F84.Customer = Customer;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var CustomerLine = (function () {
        function CustomerLine() {
            this.customers = [];
            this.onRemove = new Phaser.Signal();
        }
        CustomerLine.prototype.add = function (customer) {
            this.customers.push(customer);
            customer.line = this;
            this.alignCustomers();
        };
        CustomerLine.prototype.remove = function (customer) {
            F84.ArrayUtils.remove(this.customers, customer);
            this.alignCustomers();
            this.onRemove.dispatch();
        };
        CustomerLine.prototype.clear = function () {
            for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
                var customer = _a[_i];
                customer.destroy();
            }
            this.customers = [];
        };
        CustomerLine.prototype.alignCustomers = function () {
            var numCustomers = this.customers.length;
            var cx = F84.GameState.Instance.bounds.centerX;
            var customerSpacing = 190;
            var width = customerSpacing * numCustomers;
            var x = cx + (-width / 2) + (customerSpacing / 2);
            for (var i = 0; i < numCustomers; i++) {
                this.customers[i].targetPosition.x = x;
                x += customerSpacing;
            }
        };
        return CustomerLine;
    }());
    F84.CustomerLine = CustomerLine;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var HelpScreen = (function (_super) {
        __extends(HelpScreen, _super);
        function HelpScreen(game, tutorial, onClosed, onClosedContext) {
            var _this = _super.call(this, game) || this;
            _this.pageNum = 1;
            _this.tutorial = tutorial;
            _this.onPauseMenuClosed = onClosed;
            _this.onPauseMenuClosedContext = onClosedContext;
            var overlay = F84.Overlay.create(game);
            _this.add(overlay);
            var bg = game.add.sprite(0, 0, 'uiBackdrop', null, _this);
            bg.alignIn(game.world.bounds, Phaser.CENTER, 0, -20);
            var uiHeader = game.add.sprite(0, 0, 'uiHeader', null, _this);
            uiHeader.alignIn(bg, Phaser.TOP_CENTER, 0, -15);
            var imageBg = game.add.sprite(0, 0, 'uiFill', null, _this);
            imageBg.alignIn(bg, Phaser.CENTER, 0, 45);
            _this.image = game.add.sprite(0, 0, 'tutorial' + _this.pageNum, null, _this);
            _this.image.alignIn(imageBg, Phaser.CENTER, 0, 0);
            var fontSize = 36;
            var headerStyle = { fill: '#faf3e8', fontSize: 36, font: F84.Fonts.DefaultFont, wordWrap: true, wordWrapWidth: 400 };
            _this.header = game.add.text(0, 0, F84.Strings.get("TutorialHeader" + _this.pageNum), headerStyle);
            _this.add(_this.header);
            _this.header.anchor.set(0.5);
            _this.header.alignIn(uiHeader, Phaser.CENTER, 0, 3);
            while (_this.header.width >= uiHeader.width - 30) {
                _this.header.fontSize = --fontSize;
                console.log(fontSize);
            }
            var messageStyle = { fill: '#5f4e48', fontSize: 22, font: F84.Fonts.DefaultFont, wordWrap: true, wordWrapWidth: 500, boundsAlignV: 'middle' };
            _this.message = game.add.text(0, 0, F84.Strings.get('TutorialMessage' + _this.pageNum), messageStyle);
            _this.add(_this.message);
            _this.message.anchor.set(0.5, 0.5);
            _this.message.align = "center";
            var dist = (imageBg.top - uiHeader.bottom) / 2 + uiHeader.bottom;
            _this.message.alignTo(imageBg, Phaser.TOP_CENTER, 0, 0);
            _this.message.y = dist;
            var continueButton = game.add.button(0, 0, 'btnPlay', _this.continueButtonPressed, _this);
            continueButton.scale.set(0.68);
            _this.add(continueButton);
            continueButton.alignIn(bg, Phaser.BOTTOM_CENTER, 0, 60);
            var exitButton = game.add.button(0, 0, 'btnExit', _this.exitButtonPressed, _this);
            _this.add(exitButton);
            exitButton.scale.set(0.5);
            exitButton.anchor.set(0.5);
            exitButton.alignIn(bg, Phaser.TOP_RIGHT, 20, -40);
            return _this;
        }
        HelpScreen.prototype.continueButtonPressed = function () {
            this.game.sound.play('button');
            if (this.pageNum >= 4) {
                this.exit();
                return;
            }
            this.pageNum++;
            this.header.text = F84.Strings.get('TutorialHeader' + this.pageNum);
            this.message.text = F84.Strings.get('TutorialMessage' + this.pageNum);
            this.image.loadTexture('tutorial' + this.pageNum);
        };
        HelpScreen.prototype.exitButtonPressed = function () {
            this.game.sound.play('button');
            this.exit();
        };
        HelpScreen.prototype.exit = function () {
            if (this.tutorial)
                this.onPauseMenuClosed.call(this.onPauseMenuClosedContext);
            else {
                var prompt_1 = new F84.PauseMenu(this.game, this.onPauseMenuClosed, this.onPauseMenuClosedContext);
                this.game.add.existing(prompt_1);
            }
            this.destroy();
        };
        return HelpScreen;
    }(Phaser.Group));
    F84.HelpScreen = HelpScreen;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var IngredientButton = (function (_super) {
        __extends(IngredientButton, _super);
        function IngredientButton(game, x, y, key, onPress, onPressContext) {
            var _this = _super.call(this, game, x, y, key, onPress, onPressContext) || this;
            _this.alpha = 0;
            _this.events.onInputOver.add(_this.mouseOver, _this);
            _this.events.onInputOut.add(_this.mouseOut, _this);
            return _this;
        }
        IngredientButton.prototype.mouseOver = function () {
            this.alpha = 1;
        };
        IngredientButton.prototype.mouseOut = function () {
            this.alpha = 0;
        };
        return IngredientButton;
    }(Phaser.Button));
    F84.IngredientButton = IngredientButton;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var IngredientType;
    (function (IngredientType) {
        IngredientType[IngredientType["Burrito"] = 0] = "Burrito";
        IngredientType[IngredientType["Taco"] = 1] = "Taco";
        IngredientType[IngredientType["Steak"] = 2] = "Steak";
        IngredientType[IngredientType["Cheese"] = 3] = "Cheese";
        IngredientType[IngredientType["Lettuce"] = 4] = "Lettuce";
        IngredientType[IngredientType["Tomatoes"] = 5] = "Tomatoes";
        IngredientType[IngredientType["Guac"] = 6] = "Guac";
        IngredientType[IngredientType["SourCream"] = 7] = "SourCream";
        IngredientType[IngredientType["HotSauce"] = 8] = "HotSauce";
    })(IngredientType = F84.IngredientType || (F84.IngredientType = {}));
    var Order = (function () {
        function Order() {
            this.ingredients = [];
        }
        Order.prototype.populate = function (min, max) {
            var rnd = F84.Game.Instance.rnd;
            if (rnd.frac() > 0.5)
                this.ingredients.push(IngredientType.Taco);
            else
                this.ingredients.push(IngredientType.Burrito);
            this.ingredients.push(IngredientType.Steak);
            var numItems = rnd.between(min, max + 1);
            if (numItems >= 3)
                this.ingredients.push(IngredientType.Cheese);
            if (numItems >= 4)
                this.ingredients.push(IngredientType.Lettuce);
            if (numItems >= 5)
                this.ingredients.push(IngredientType.Tomatoes);
            if (numItems >= 6)
                this.ingredients.push(IngredientType.Guac);
            if (numItems >= 7) {
                var item = rnd.pick([IngredientType.SourCream, IngredientType.HotSauce]);
                this.ingredients.push(item);
            }
        };
        Order.prototype.equals = function (other) {
            if (this.ingredients.length != other.ingredients.length)
                return false;
            for (var i = 0; i < this.ingredients.length; i++) {
                if (!other.contains(this.ingredients[i]))
                    return false;
            }
            return true;
        };
        Order.prototype.lastIngredient = function () {
            if (this.ingredients.length == 0)
                return null;
            return this.ingredients[this.ingredients.length - 1];
        };
        Order.prototype.add = function (ingredient) {
            this.ingredients.push(ingredient);
        };
        Order.prototype.contains = function (item) {
            return this.ingredients.indexOf(item) >= 0;
        };
        Order.prototype.reset = function () {
            this.ingredients = [];
        };
        Order.prototype.getSpriteKey = function () {
            var key = '';
            var numIngredients = this.ingredients.length - 1;
            if (this.contains(IngredientType.Taco))
                key += 'taco';
            if (this.contains(IngredientType.Burrito))
                key += 'burrito';
            key += numIngredients;
            if (numIngredients == 6) {
                if (this.contains(IngredientType.SourCream))
                    key += 'a';
                if (this.contains(IngredientType.HotSauce))
                    key += 'b';
            }
            return key;
        };
        Order.prototype.getScore = function () {
            return 100 + (this.ingredients.length * 25);
        };
        Order.getSoundKey = function (ingredient) {
            var string = '';
            switch (ingredient) {
                case IngredientType.Burrito:
                    {
                        string = 'tortilla';
                        break;
                    }
                case IngredientType.Lettuce:
                    {
                        string = 'lettuce';
                        break;
                    }
                case IngredientType.SourCream:
                case IngredientType.Guac:
                    {
                        string = 'Guac';
                        break;
                    }
                case IngredientType.Tomatoes:
                case IngredientType.Cheese:
                    {
                        string = 'cheese';
                        break;
                    }
                case IngredientType.HotSauce:
                    {
                        string = 'ketchup';
                        break;
                    }
                case IngredientType.Steak:
                    {
                        string = 'meat';
                        break;
                    }
                case IngredientType.Taco:
                    {
                        string = 'shell';
                        break;
                    }
            }
            return string;
        };
        return Order;
    }());
    F84.Order = Order;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var ParticleEffect = (function (_super) {
        __extends(ParticleEffect, _super);
        function ParticleEffect(game, x, y, key) {
            var _this = _super.call(this, game, x, y, key) || this;
            _this.anchor.set(0.5);
            _this.scale.set(0.75);
            var anim = _this.animations.add('anim', null, 80);
            anim.reverse();
            anim.play(80, false, true);
            return _this;
        }
        return ParticleEffect;
    }(Phaser.Sprite));
    F84.ParticleEffect = ParticleEffect;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var PauseMenu = (function (_super) {
        __extends(PauseMenu, _super);
        function PauseMenu(game, onClosed, onClosedContext) {
            var _this = _super.call(this, game) || this;
            var overlay = F84.Overlay.create(game);
            _this.add(overlay);
            var bg = game.add.sprite(0, 0, 'uiPopup', null, _this);
            bg.alignIn(game.world.bounds, Phaser.CENTER);
            var logo = game.add.sprite(0, 0, 'menuLogoSmall', null, _this);
            logo.alignIn(bg, Phaser.TOP_CENTER, 0, 60);
            var quitButton = game.add.button(0, 0, 'btnExit', _this.quitButtonPressed, _this);
            _this.add(quitButton);
            quitButton.alignIn(bg, Phaser.CENTER, -160, 0);
            var helpButton = game.add.button(0, 0, 'btnHelp', _this.helpButtonPressed, _this);
            _this.add(helpButton);
            helpButton.alignIn(bg, Phaser.CENTER, 0, 0);
            var key = _this.game.sound.mute ? 'btnSoundOff' : 'btnSoundOn';
            var volumeButton = game.add.button(0, 0, key, function () {
                _this.game.sound.mute = !_this.game.sound.mute;
                var key = _this.game.sound.mute ? 'btnSoundOff' : 'btnSoundOn';
                volumeButton.loadTexture(key);
                _this.game.sound.play('button');
            });
            _this.add(volumeButton);
            volumeButton.alignIn(bg, Phaser.CENTER, 160, 0);
            var continueButton = game.add.button(0, 0, 'btnPlay', _this.continueButtonPressed, _this);
            _this.add(continueButton);
            continueButton.alignIn(bg, Phaser.BOTTOM_CENTER, 0, 80);
            _this.onClosed = onClosed;
            _this.onClosedContext = onClosedContext;
            return _this;
        }
        PauseMenu.prototype.quitButtonPressed = function () {
            this.game.sound.play('button');
            var prompt = new F84.ConfirmQuit(this.game, this.onClosed, this.onClosedContext);
            this.game.add.existing(prompt);
            this.destroy();
        };
        PauseMenu.prototype.helpButtonPressed = function () {
            this.game.sound.play('button');
            var prompt = new F84.HelpScreen(this.game, false, this.onClosed, this.onClosedContext);
            this.game.add.existing(prompt);
            this.destroy();
        };
        PauseMenu.prototype.continueButtonPressed = function () {
            this.game.sound.play('button');
            this.destroy();
            this.onClosed.call(this.onClosedContext);
        };
        return PauseMenu;
    }(Phaser.Group));
    F84.PauseMenu = PauseMenu;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var PrepArea = (function (_super) {
        __extends(PrepArea, _super);
        function PrepArea(game, gameState, x, y) {
            var _this = _super.call(this, game, x, y, 'whiteSquare') || this;
            _this.gameState = gameState;
            _this.width = 80;
            _this.height = 50;
            _this.tint = 0x0000FF;
            _this.alpha = 0;
            _this.foodSprite = game.add.sprite(0, 0, 'burrito3');
            _this.foodSprite.scale.set(0.8);
            _this.foodSprite.visible = false;
            _this.alignIn(_this, Phaser.CENTER);
            _this.order = new F84.Order();
            _this.timeSinceTap = 9999;
            _this.doubleTapThreshold = 0.3;
            _this.events.onInputUp.add(_this.onClick, _this);
            return _this;
        }
        PrepArea.prototype.update = function () {
            this.timeSinceTap += this.game.time.physicsElapsed;
        };
        PrepArea.prototype.onClick = function () {
            if (this.gameState.serveFood(this.order)) {
                var particle = new F84.ParticleEffect(this.game, this.group.x + this.foodSprite.centerX, this.group.y + this.foodSprite.centerY, 'smoke12');
                this.game.add.existing(particle);
                this.clear();
            }
            else {
                if (this.timeSinceTap < this.doubleTapThreshold)
                    this.clear();
                this.timeSinceTap = 0;
            }
        };
        PrepArea.prototype.addIngredient = function (ingredient) {
            if (this.canAddIngredient(ingredient)) {
                this.order.add(ingredient);
                this.foodSprite.visible = true;
                this.foodSprite.loadTexture(this.order.getSpriteKey());
                this.game.sound.play(F84.Order.getSoundKey(ingredient));
                return true;
            }
            return false;
        };
        PrepArea.prototype.canAddIngredient = function (ingredient) {
            var requirements = this.getIngredientRequirements(ingredient);
            var last = this.order.lastIngredient();
            return requirements(last);
        };
        PrepArea.prototype.getIngredientRequirements = function (ingredient) {
            switch (ingredient) {
                case F84.IngredientType.Taco: return function (prev) { return prev == null; };
                case F84.IngredientType.Burrito: return function (prev) { return prev == null; };
                case F84.IngredientType.Steak: return function (prev) { return prev == F84.IngredientType.Taco || prev == F84.IngredientType.Burrito; };
                case F84.IngredientType.Cheese: return function (prev) { return prev == F84.IngredientType.Steak; };
                case F84.IngredientType.Lettuce: return function (prev) { return prev == F84.IngredientType.Cheese; };
                case F84.IngredientType.Tomatoes: return function (prev) { return prev == F84.IngredientType.Lettuce; };
                case F84.IngredientType.Guac: return function (prev) { return prev == F84.IngredientType.Tomatoes; };
                case F84.IngredientType.SourCream: return function (prev) { return prev == F84.IngredientType.Guac; };
                case F84.IngredientType.HotSauce: return function (prev) { return prev == F84.IngredientType.Guac; };
            }
        };
        PrepArea.prototype.clear = function () {
            this.order = new F84.Order();
            this.foodSprite.visible = false;
        };
        PrepArea.prototype.createGroup = function () {
            var group = this.group = this.game.add.group();
            group.add(this);
            group.add(this.foodSprite);
            return group;
        };
        return PrepArea;
    }(Phaser.Button));
    F84.PrepArea = PrepArea;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var RoundCompleteGroup = (function (_super) {
        __extends(RoundCompleteGroup, _super);
        function RoundCompleteGroup(game, numBurritos, numTacos, score) {
            var _this = _super.call(this, game) || this;
            _this.onRestart = new Phaser.Signal();
            _this.onContinue = new Phaser.Signal();
            var overlay = F84.Overlay.create(game);
            _this.add(overlay);
            var bg = game.add.sprite(0, 0, 'uiPopup2', null, _this);
            bg.scale.set(0.7, 0.6);
            bg.alignIn(game.world.bounds, Phaser.CENTER);
            var logo = game.add.sprite(0, 0, 'menuLogoSmall', null, _this);
            logo.alignIn(bg, Phaser.TOP_LEFT, -50, 40);
            var container = game.add.sprite(0, 0, 'uiRecapContainer', null, _this);
            container.alignIn(bg, Phaser.TOP_RIGHT, -50, 50);
            var style = { fill: 'white', fontSize: 32, font: F84.Fonts.BoldFont, align: 'center', wordWrap: true, wordWrapWidth: 400 };
            var niceWork = game.add.text(0, 0, F84.Strings.get('NiceWork'), style, _this);
            niceWork.alignIn(container, Phaser.TOP_CENTER, 0, -96);
            var burritoIcon = game.add.sprite(0, 0, 'burrito7', null, _this);
            burritoIcon.alignIn(container, Phaser.CENTER, -60, 15);
            var burritoText = game.add.text(0, 0, 'x' + numBurritos, style, _this);
            burritoText.alignTo(burritoIcon, Phaser.BOTTOM_CENTER, 0, 8);
            var tacoIcon = game.add.sprite(0, 0, 'taco7', null, _this);
            tacoIcon.alignIn(container, Phaser.CENTER, 60, 15);
            var tacoText = game.add.text(0, 0, 'x' + numTacos, style, _this);
            tacoText.alignTo(tacoIcon, Phaser.BOTTOM_CENTER, 0, 8);
            var scoreText = game.add.text(0, 0, '' + score, style, _this);
            scoreText.alignIn(container, Phaser.BOTTOM_CENTER, 0, -16);
            var batgirl = game.add.sprite(0, 0, 'uiRecapCharacter', null, _this);
            batgirl.alignIn(game.world.bounds, Phaser.BOTTOM_LEFT);
            var restartButton = game.add.button(0, 0, 'btnReplay', _this.restart, _this);
            _this.add(restartButton);
            restartButton.alignIn(bg, Phaser.BOTTOM_RIGHT, -270, 15);
            var continueButton = game.add.button(0, 0, 'btnPlay', _this.continue, _this);
            _this.add(continueButton);
            continueButton.scale.set(0.8);
            continueButton.alignIn(bg, Phaser.BOTTOM_RIGHT, -110, 30);
            return _this;
        }
        RoundCompleteGroup.prototype.restart = function () {
            this.game.sound.play('button');
            this.destroy();
            this.onRestart.dispatch();
        };
        RoundCompleteGroup.prototype.continue = function () {
            this.game.sound.play('button');
            this.destroy();
            this.onContinue.dispatch();
        };
        return RoundCompleteGroup;
    }(Phaser.Group));
    F84.RoundCompleteGroup = RoundCompleteGroup;
})(F84 || (F84 = {}));
var F84;
(function (F84) {
    var RoundCounterGroup = (function (_super) {
        __extends(RoundCounterGroup, _super);
        function RoundCounterGroup(game, roundNum, onComplete, onCompleteContext) {
            var _this = _super.call(this, game) || this;
            _this.onFinished = onComplete;
            _this.onFinishedContext = onCompleteContext;
            _this.alignIn(game.world.bounds, Phaser.CENTER, 0, 0);
            var overlay = F84.Overlay.create(game);
            overlay.anchor.set(0.5);
            _this.add(overlay);
            _this.add(_this.fade = game.add.group());
            var bg = game.add.sprite(0, 0, 'uiRoundCount', null, _this);
            _this.fade.add(bg);
            bg.alignIn(overlay, Phaser.CENTER, 0, 0);
            var headerStyle = { fill: F84.GameColors.WHITE, fontSize: 24, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 200 };
            var header = game.add.text(0, 0, F84.Strings.get("RoundHeader"), headerStyle, _this);
            _this.fade.add(header);
            header.align = 'center';
            header.alignIn(bg, Phaser.TOP_CENTER, 0, -20);
            var roundStyle = { fill: F84.GameColors.WHITE, fontSize: 120, font: F84.Fonts.BoldFont, wordWrap: true, wordWrapWidth: 200 };
            var roundCount = game.add.text(0, 0, roundNum.toString(), roundStyle, _this);
            _this.fade.add(roundCount);
            roundCount.align = 'center';
            roundCount.alignIn(bg, Phaser.CENTER, 0, 20);
            var properties = { x: _this.scale.x + 0.15, y: _this.scale.y + 0.15 };
            var tween = game.add.tween(_this.scale);
            tween.to(properties, 3000);
            tween.onComplete.add(_this.startTransition, _this);
            tween.start();
            return _this;
        }
        RoundCounterGroup.prototype.startTransition = function () {
            var time = 500;
            var scale = { x: this.scale.x + 0.9, y: this.scale.y + 0.9 };
            var tweenScale = this.game.add.tween(this.scale);
            tweenScale.to(scale, time);
            var tweenAlpha = this.game.add.tween(this.fade);
            tweenAlpha.to({ alpha: 0 }, time);
            tweenAlpha.onComplete.add(this.startRound, this);
            tweenScale.start();
            tweenAlpha.start();
        };
        RoundCounterGroup.prototype.startRound = function () {
            this.onFinished.call(this.onFinishedContext);
            this.destroy();
        };
        return RoundCounterGroup;
    }(Phaser.Group));
    F84.RoundCounterGroup = RoundCounterGroup;
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
        Object.defineProperty(Fonts, "BoldFont", {
            get: function () {
                return "angosturablack";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Fonts, "DefaultFont", {
            get: function () {
                return "angostura";
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
            this.currentMusic = game.sound.play(key, 0.35, true);
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
                currentWidth = F84.Game.Instance.DefaultWidth / window.devicePixelRatio;
                currentHeight = F84.Game.Instance.DefaultHeight / window.devicePixelRatio;
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
            if (alpha === void 0) { alpha = 0.7; }
            var overlay = game.add.sprite(0, 0, 'whiteSquare');
            overlay.width = game.world.bounds.width;
            overlay.height = game.world.bounds.height;
            overlay.tint = 0;
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
//# sourceMappingURL=game.js.map