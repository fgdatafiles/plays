var GamePlay = function () {
};
GamePlay.Play = function () {
};

GamePlay.Play.prototype = {
    preload: function () {
        this.soundGameOver = new Audio();
        this.soundGameOver.src = "sound/game_over.mp3";
        this.soundGameOver.preload = "auto";
    },

    create: function () {

        for (var i = -537; i < 4833; i += 537) {
            for (var j = 3840; j > -3840; j -= 960) {
                var background4 = this.game.add.sprite(i, j, 'sprite_background');
                background4.animations.add('sprite_background', [0, 1], 4, true);
                background4.play("sprite_background");
            }
        }

        this.world.setBounds(-180, -1000, 6067, 7680);
        this.camera.setPosition(-180, -100);
        this.map = 0;

        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.setGameFinish("false");

        this.playerPos = 0;
        this.timeTranslate = 0;
        this.gameStart = false;
        this.endTimer = false;
        this.timerInit = false;
        this.animationInitFinish = false;
        this.soundGamePlayFirst = false;
        this.okGameOver = false;
        this.speedGlobal = 0;
        this.rotationGlobal = 0;

        // Scale
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = this.game.width;
        this.scale.maxHeight = this.game.height;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);

        this.pointMove = true;
        this.floorDelete = false;
        this.pennyActive = false;
        this.gumballActive = true;

        this.buttonSpace = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.input.onDown.add(this.unPause, this);

        this.createPlatform();
        this.createPlayer();

        this.buttonPause = this.add.button(this.game.width - 75, 20, "btn_pause");
        this.buttonPause.fixedToCamera = true;
        this.buttonPause.onInputDown.add(this.pauseGame, this);

    },

    update: function () {

        this.pennyImg.x = this.penny.x;
        this.gumball.x = this.gumballPoint.x;

        if (this.endTimer) {
            if (this.gumballActive) {
                game.physics.arcade.overlap(this.gumballPoint, this.platforms, this.movePlayerCollision, null, this);
            }

            if (this.pennyActive) {
                game.physics.arcade.overlap(this.penny, this.platforms, this.movePlayerCollision, null, this);
            }
        }

        if (this.platforms.getAt(this.playerPos).exists) {
            this.platforms.getAt(this.playerPos).animations.play("frameMove");
        }
        if (this.platforms.getAt(this.playerPos - 2).exists) {
            this.platforms.getAt(this.playerPos - 2).animations.play("frameMove");
        }
        if (this.platforms.getAt(this.playerPos - 4).exists) {
            this.platforms.getAt(this.playerPos - 4).animations.play("frameMove");
        }


        if (this.gumballActive && this.animationInitFinish) {
            this.gumball.y = this.gumballPoint.y - (this.gumball.height * 0.6);
            this.pennyImg.y = this.penny.y - this.pennyImg.height * 0.5;

            this.emitterGumball.emitX = this.gumball.x;
            this.emitterGumball.emitY = this.gumball.y + this.gumball.height / 2;

            var targetAngle = this.game.math.angleBetween(
                this.gumballPoint.x, this.gumballPoint.y,
                this.platforms.getAt(this.playerPos).x, this.platforms.getAt(this.playerPos).y
            );

            if (this.gumballPoint.rotation !== targetAngle) {
                // Calculate difference between the current angle and targetAngle
                var delta = targetAngle - this.gumballPoint.rotation;

                if (delta > Math.PI) delta -= Math.PI * 2;
                if (delta < -Math.PI) delta += Math.PI * 2;

                this.gumballPoint.angle -= this.TURN_RATE;

                if (Math.abs(delta) < this.game.math.degToRad(this.TURN_RATE)) {
                    this.gumballPoint.rotation = targetAngle;
                }
            }
            // Calculate velocity player based on this.rotation and this.SPEED
            this.gumballPoint.body.velocity.x = Math.cos(this.gumballPoint.rotation) * this.SPEED;
            this.gumballPoint.body.velocity.y = Math.sin(this.gumballPoint.rotation) * this.SPEED;
        }

        if (this.pennyActive && this.animationInitFinish) {
            this.pennyImg.y = this.penny.y - (this.pennyImg.height * 0.6);
            this.gumball.y = this.gumballPoint.y - this.gumball.height * 0.5;

            this.emitterPenny.emitX = this.pennyImg.x;
            this.emitterPenny.emitY = this.pennyImg.y + this.pennyImg.height / 2;

            var targetAngle = this.game.math.angleBetween(
                this.penny.x, this.penny.y,
                this.platforms.getAt(this.playerPos).x, this.platforms.getAt(this.playerPos).y
            );

            if (this.penny.rotation !== targetAngle) {
                // Calculate difference between the current angle and targetAngle
                var delta = targetAngle - this.penny.rotation;

                if (delta > Math.PI) delta -= Math.PI * 2;
                if (delta < -Math.PI) delta += Math.PI * 2;

                this.penny.angle -= this.TURN_RATE;

                if (Math.abs(delta) < this.game.math.degToRad(this.TURN_RATE)) {
                    this.penny.rotation = targetAngle;
                }
            }

            // Calculate velocity player based on this.rotation and this.SPEED
            this.penny.body.velocity.x = Math.cos(this.penny.rotation) * this.SPEED;
            this.penny.body.velocity.y = Math.sin(this.penny.rotation) * this.SPEED;
        }

        this.touchDown = false;
        this.touchUp = false;

        if (this.gameStart) {
            if (this.buttonSpace.isDown || this.input.pointer1.isDown || this.input.mousePointer.isDown) {
                this.touchDown = true;
            }

            if (this.buttonSpace.isUp && this.input.pointer1.isUp && this.input.mousePointer.isUp) {
                this.touchUp = true;
            }

            //Game Over
            if (this.touchDown && this.pointMove && !this.floorDelete) {
                this.pointMove = false;
                this.gameOver();
            }

            if (this.touchUp && !this.pointMove) {
                this.pointMove = true;
            }
        }

        //nextWorld
        if (this.playerPos == 0 && this.getGameFinish() == "false") {
            this.setGameFinish("true");
            this.timeTranslate = 0;

            //Inicio Penny
            this.game.add.tween(this.pennyImg).to({
                y: this.penny.y - 300
            }, 2300, Phaser.Easing.Linear.Out, true);

            var tweenPlayer2 = this.game.add.tween(this.gumball).to({
                y: this.gumballPoint.y - 300
            }, 2300, Phaser.Easing.Linear.Out, true);

            tweenPlayer2.onComplete.add(function () {
                if (getLevel() < 4) {

                    var proxLvl = parseInt(getLevel()) + 1;

                    if(proxLvl == 1){
                        setLevel2Active("true");
                    }else if (proxLvl == 2){
                         setLevel3Active("true");
                    }else if (proxLvl == 3){
                         setLevel4Active("true");
                    }

                    setLevel(parseInt(getLevel()) + 1);
                    goToGamePlay();

                } else {
                    setLevel5Active("true");
                    goToGameFinish();
                }
            }, 1000, Phaser.Easing.Linear.Out, true);

            this.setQuantityGames(parseInt(this.getQuantityGames()) + 1);
        }
    },

    unPause: function (event) {
        if (this.game.paused) {

            if (event.x >= 273 && event.x <= (273 + this.contentPause.getAt(1).width) &&
                event.y >= 234 && event.y <= (234 + this.contentPause.getAt(1).height)) {

                soundButtonPlay();
                this.game.paused = false;
                this.contentPause.destroy();
            } else if (event.x >= 460 && event.x <= (460 + this.contentPause.getAt(2).width) &&
                event.y >= 265 && event.y <= (265 + this.contentPause.getAt(2).height)) {
                soundButtonPlay();
                this.setGameFinish("true");
                this.game.paused = false;
                goToHome();

            } else if (event.x >= 96 && event.x <= (96 + this.contentPause.getAt(3).width) &&
                event.y >= 269 && event.y <= (269 + this.contentPause.getAt(3).height)) {
                soundButtonPlay();
                this.setGameFinish("true");
                this.game.paused = false;
                this.game.state.restart(true);
            } else if (event.x >= 517 && event.x <= (517 + this.contentPause.getAt(4).width) &&
                event.y >= 63 && event.y <= (63 + this.contentPause.getAt(4).height)) {
                soundButtonPlay();
                if (getEffect() == "true") {
                    setEffect("false");
                    this.contentPause.getAt(4).loadTexture("off_effect");
                } else {
                    this.contentPause.getAt(4).loadTexture("on_effect");
                    setEffect("true");
                }
            } else if (event.x >= 587 && event.x <= (587 + this.contentPause.getAt(5).width) &&
                event.y >= 63 && event.y <= (63 + this.contentPause.getAt(5).height)) {
                soundButtonPlay();
                if (getVolume() == "true") {
                    soundPauseGeneral();
                    setVolume("false");
                    this.contentPause.getAt(5).loadTexture("off_music");
                } else {
                    setVolume("true");
                    this.contentPause.getAt(5).loadTexture("on_music");
                }

            }
        }
    },

    updateCounter: function () {
        if (this.getGameFinish() == "false") {
            this.timeTranslate++;

            if (this.timeTranslate == 1) {
                this.gameOver();
            }
        }
    },
    createPlatform: function () {
        this.indexMap = [];

        this.generateIndex(this.indexMap);

        this.map = getLevel();

        this.myWorld = [
            map_one[this.indexMap[this.map]]
        ];

        this.data = this.myWorld;

        this.posMap = 0;
        this.posNewX = 0;
        this.posNewy = 0;
        this.platforms = this.add.group();
        this.platforms.enableBody = true;
        this.platforms.physicsBodyType = Phaser.Physics.ARCADE;
        var df = false;

        var id = 0;

        for (var i = 0; i < this.data.length; i++) {
            df = false;
            for (var j = 0; j < this.data[i].length; j++) {

                if (i > this.posMap && !df) {
                    df = true;

                    this.posInitMapX = (this.platforms.getAt(this.platforms.length - 1).x + 80);
                    this.posInitMapY = this.platforms.getAt(this.platforms.length - 1).y;

                    this.posMap = i;
                }

                if (i == 0) {
                    if (this.data[i][j].down) {
                        var ground = this.platforms.create(this.data[i][j].x, this.data[i][j].y, 'floor_blue_down');
                        ground.animations.add('frameMove', [0, 1], 1, true);
                        ground.frame = 1;
                    } else {
                        var ground = this.platforms.create(this.data[i][j].x, this.data[i][j].y, assets[this.game.rnd.integerInRange(5, 11)].name);
                        ground.animations.add('frameMove', [0, 1], 1, true);
                        ground.frame = 1;
                    }
                } else if (j == 0) {
                    if (this.data[i][j].down) {
                        var ground = this.platforms.create(this.posInitMapX, this.posInitMapY, 'floor_blue_down');
                        ground.animations.add('frameMove', [0, 1], 1, true);
                        ground.frame = 1;
                    } else {
                        var ground = this.platforms.create(this.posInitMapX, this.posInitMapY, assets[this.game.rnd.integerInRange(5, 11)].name);
                        ground.animations.add('frameMove', [0, 1], 1, true);
                        ground.frame = 0;
                    }
                } else {

                    if (this.data[i][j + 1] != null && this.data[i][j + 1] != null) {
                        this.posNewX = (this.data[i][j].x - this.data[i][j - 1].x);
                        this.posNewy = (this.data[i][j].y - this.data[i][j - 1].y);
                    }

                    if (this.data[i][j].down) {
                        var ground = this.platforms.create(this.platforms.getAt(this.platforms.length - 1).x + this.posNewX, this.platforms.getAt(this.platforms.length - 1).y + this.posNewy, 'floor_blue_down');
                        ground.animations.add('frameMove', [0, 1], 1, true);
                        ground.frame = 1;
                    } else {
                        var ground = this.platforms.create(this.platforms.getAt(this.platforms.length - 1).x + this.posNewX, this.platforms.getAt(this.platforms.length - 1).y + this.posNewy, assets[this.game.rnd.integerInRange(5, 11)].name);
                        ground.animations.add('frameMove', [0, 1], 1, true);
                        ground.frame = 1;
                    }
                }

                ground.down = this.data[i][j].down;
                ground.id = id;
                ground.segment = this.data[i][j].segment;
                ground.type = this.data[i][j].type;
                ground.move = this.data[i][j].move;
                ground.moveHorizontal = this.data[i][j].moveHorizontal;
                ground.moveVertical = this.data[i][j].moveVertical;

                id = id + 1;
            }
        }
        for (var x = this.platforms.length - 1; x >= 0; x--) {
            this.platforms.getAt(x).bringToTop();
        }

        this.spriteLastFloor = this.add.sprite(this.platforms.getAt(0).x - 160, this.platforms.getAt(0).y - 390, 'sprite_level_up');
        this.spriteLastFloor.animations.add('playLevelUp', null, 10, true);

        this.spriteLastFloor.play("playLevelUp");

    },
    generateIndex: function (x) {
        for (var x in map_one) {
            this.indexMap.push(x);
        }

        this.indexMap.sort(function (a, b) {
            return a == b ? 0 : (a > b ? 1 : -1);
        });
    },

    createPlayer: function () {
        this.playerPos = this.platforms.length - 1;

        this.playerPosX = this.platforms.getAt(this.playerPos).x + this.platforms.getAt(this.playerPos).width * 0.5;
        this.playerPosY = this.platforms.getAt(this.playerPos).y + this.platforms.getAt(this.playerPos).height * 0.45;

        this.penny = this.add.sprite(this.playerPosX, this.playerPosY, 'tp');
        this.penny.anchor.setTo(0.5, 0.5);
        game.physics.enable(this.penny, Phaser.Physics.ARCADE);

        this.pennyImg = this.add.sprite(this.penny.x, this.camera.y - 200, 'penny_center');
        this.pennyImg.animations.add("dance_center", null, 28, true);
        this.pennyImg.animations.add("dance_rotation", null, 12, true);
        this.pennyImg.animations.play("dance_center");
        this.pennyImg.anchor.setTo(0.5, 0.5);

        this.gumballPoint = this.add.sprite(this.platforms.getAt(this.playerPos).x + 40, this.platforms.getAt(this.playerPos).y - 40, 'tp');
        this.gumballPoint.anchor.setTo(0.5, 0.5);
        game.physics.enable(this.gumballPoint, Phaser.Physics.ARCADE);

        this.gumball = this.add.sprite(this.gumballPoint.x, this.camera.y - 200, 'gumball_rotation');
        this.gumball.animations.add("dance_gumball_center", null, 18, true);
        this.gumball.animations.add("dance_gumball_rotation", null, 14, true);
        this.gumball.animations.play("dance_gumball_rotation");
        this.gumball.anchor.setTo(0.5, 0.5);

        this.penny.body.setSize(30, 30, 0, 0);
        this.gumballPoint.body.setSize(30, 30, 0, 0);

        this.gumballPoint.angle = 180;

        this.penny.xInitial = this.penny.x;
        this.penny.yInitial = this.penny.y;
        this.penny.xChange = 0;
        this.penny.yChange = 0;

        this.speedGlobal = -460;
        this.rotationGlobal = -5.515;

        this.animationInit();

        // Define constants that affect motion
        this.SPEED = this.speedGlobal; // player speed pixels/second
        this.TURN_RATE = this.rotationGlobal; // turn rate in degrees/frame

        this.emitterGumballPlay();

    },
    animationInit: function () {

        this.textLevel = this.add.text(this.camera.x + this.camera.width / 2, this.camera.y - 300, lang.levelx + " " + parseInt(parseInt(getLevel()) + 1), {
            font: '100px fred_burger_bold',
            fill: '#fff'
        });

        if (getLevel() == 4) {
            this.textLevel.text = lang.levelfinish;
            this.textLevel.scale.set(0.8);
        }

        this.textOne = this.add.text(this.camera.x + this.camera.width / 2, this.camera.y + this.camera.height / 2, "3", {
            font: '320px fred_burger_bold',
            fill: '#fff'
        });

        this.textLevel.anchor.set(0.5);
        this.textOne.anchor.set(0.5);
        this.textOne.alpha = 0;

        var that = this;

        var tweenLevel = this.game.add.tween(this.textLevel).to({
            y: this.camera.y + 100
        }, 1000, Phaser.Easing.Linear.Out, true);

        tweenLevel.onComplete.add(function () {

            var tweenLevel = that.game.add.tween(that.textLevel).to({
                alpha: 0
            }, 1000, Phaser.Easing.Linear.Out, true);

            //Inicio Penny
            that.game.add.tween(that.pennyImg).to({
                y: that.penny.y
            }, 1300, Phaser.Easing.Linear.Out, true);

            var tweenPlayer2 = that.game.add.tween(that.gumball).to({
                y: that.gumballPoint.y
            }, 1300, Phaser.Easing.Linear.Out, true);

            tweenPlayer2.onComplete.add(function () {

                that.animationInitFinish = true;

                var textTweeOne = that.game.add.tween(that.textOne).to({
                    alpha: 1
                }, 720, Phaser.Easing.Linear.Out, true);

                textTweeOne.onComplete.add(function () {
                    that.textOne.setText("2");
                    that.textOne.alpha = 0;
                    timerOnePlay();
                    var textTweeTwo = that.game.add.tween(that.textOne).to({
                        alpha: 1
                    }, 720, Phaser.Easing.Linear.Out, true);

                    textTweeTwo.onComplete.add(function () {
                        that.textOne.setText("1");
                        that.textOne.alpha = 0;

                        var textTweeThree = that.game.add.tween(that.textOne).to({
                            alpha: 1
                        }, 720, Phaser.Easing.Linear.Out, true);

                        timerTwoPlay();

                        textTweeThree.onComplete.add(function () {
                            that.textOne.alpha = 0;

                            timerThreePlay();
                            that.endTimer = true;

                            that.game.time.events.add(Phaser.Timer.SECOND * 1.1, function () {
                                if (!that.gameStart) {
                                    that.backspaceInit = that.game.add.sprite(that.camera.x + that.camera.width - 220, that.camera.y + 280, 'sprite_space_bar');
                                    that.backspaceInit.animations.add('sprite_space_bar', null, 3, true);
                                    that.backspaceInit.play("sprite_space_bar");
                                }
                            }, this);

                        }, this);

                    }, this);

                }, this);
            });
        });

    },
    movePlayerCollision: function (player, floor) {

        if (this.buttonSpace.isDown || this.input.pointer1.isDown || this.input.mousePointer.isDown) {
            this.touchDown = true;
            if (!this.timerInit) {
                this.timeLimited = game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
                this.gameStart = true;
                this.timerInit = true;
                if (this.backspaceInit != null) {
                    this.backspaceInit.kill();
                }
            }
        }

        if (this.buttonSpace.isUp && this.input.pointer1.isUp && this.input.mousePointer.isUp) {
            this.touchUp = true;
        }

        if (this.touchDown && this.pointMove && !this.floorDelete) {

            if (floor.id > this.platforms.getAt(this.playerPos).id) {

                if (floor.id - this.platforms.getAt(this.playerPos).id > 1) {
                    this.gameOver();
                }

                if (getVolume() == "true") {
                    if (!this.soundGamePlayFirst) {
                        this.soundGamePlayFirst = true;
                    }

                    var segment = this.platforms.getAt(this.playerPos - 1).segment;

                    if (this.platforms.getAt(this.playerPos - 1).segment != 0) {

                        if (this.map == 0) {
                            level1Play(parseInt(segment));
                        } else if (this.map == 1) {
                            level2Play(parseInt(segment));
                        } else if (this.map == 2) {
                            level3Play(parseInt(segment));
                        } else if (this.map == 3) {
                            level4Play(parseInt(segment));
                        } else if (this.map == 4) {
                            level5Play(parseInt(segment));
                        }
                    }
                }

                this.timeTranslate = 0;
                game.time.events.remove(this.timeLimited);
                this.timeLimited = game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

                this.floorDelete = true;
                this.positionNewY = 0;
                this.floorX = 0;
                this.floorY = 0;
                this.floorType = 0;
                this.floorWidth = 80;
                this.floorHeight = 88;

                player.x = this.platforms.getAt(this.playerPos - 1).x + (this.floorWidth * 0.5);
                this.positionNewY = this.platforms.getAt(this.playerPos - 1).y + (this.floorHeight * 0.4);
                this.floorX = this.platforms.getAt(this.playerPos - 1).x;
                this.floorY = this.platforms.getAt(this.playerPos - 1).y;
                this.floorType = this.platforms.getAt(this.playerPos - 1).type;

                if (this.pennyActive) {
                    this.penny.y = this.positionNewY;

                    this.gumball.loadTexture("gumball_rotation");
                    this.pennyImg.loadTexture("penny_center");
                    this.pennyImg.animations.play("dance_center");
                    this.gumball.animations.play("dance_gumball_rotation");
                    this.pennyImg.scale.set(1);

                    if (this.spriteFeet != null) {
                        this.spriteFeet.destroy();
                    }

                    this.emitterPenny.destroy();
                    this.emitterGumballPlay();

                    this.spriteFeet = this.add.sprite(this.floorX - 70, this.floorY - 80, 'sprite_feet');
                    this.spriteFeet.scale.set(2.8);
                    this.spriteFeet.animations.add("playFeet", null, 16, false);
                    this.spriteFeet.play("playFeet");

                    this.gumball.bringToTop();
                }

                if (this.gumballActive) {
                    this.gumballPoint.y = this.positionNewY;

                    this.gumball.loadTexture("gumball_center");
                    this.pennyImg.loadTexture("penny_rotation");
                    this.gumball.animations.play("dance_gumball_center");
                    this.pennyImg.animations.play("dance_rotation");
                    this.pennyImg.scale.set(0.8);

                    if (this.spriteFeet != null) {
                        this.spriteFeet.destroy();
                    }

                    this.emitterGumball.destroy();
                    this.emitterPennyPlay();

                    this.spriteFeet = this.add.sprite(this.floorX - 70, this.floorY - 80, 'sprite_feet');
                    this.spriteFeet.scale.set(2.8);
                    this.spriteFeet.animations.add("playFeet", null, 15, false);
                    this.spriteFeet.play("playFeet");

                    this.pennyImg.bringToTop();
                }

                player.angle = 0;
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;

                if (this.floorType == 0) { //Velocidad constante
                    this.SPEED = this.speedGlobal; // player speed pixels/second
                    this.TURN_RATE = this.rotationGlobal; // turn rate in degrees/frame
                } else if (this.floorType == 1) { //Acelerar
                    this.SPEED = -550;
                    this.TURN_RATE = -6.594;
                } else { //Relentizar
                    this.SPEED = -206;
                    this.TURN_RATE = -2.47;
                }

                this.pennyActive = !this.pennyActive;
                this.gumballActive = !this.gumballActive;

                if (!floor.moveVertical) {

                    if (this.floorX > this.platforms.getAt(this.playerPos).x && this.floorY == this.platforms.getAt(this.playerPos).y) {
                        if (this.pennyActive) {
                            this.penny.angle = 90;
                            this.penny.y = this.floorY + (this.floorHeight * 0.5);
                        } else {
                            this.gumballPoint.angle = 90;
                        }
                    } else if (this.floorX < this.platforms.getAt(this.playerPos).x && this.floorY == this.platforms.getAt(this.playerPos).y) {
                        if (this.pennyActive) {
                            this.penny.angle = -90;
                        } else {
                            this.gumballPoint.angle = -90;
                        }
                    } else if (this.floorY < this.platforms.getAt(this.playerPos).y) {
                        if (this.pennyActive) {
                            this.penny.angle = 0;
                        } else {
                            this.gumballPoint.angle = 0;
                        }
                    } else if (this.floorY > this.platforms.getAt(this.playerPos).y) {
                        if (this.pennyActive) {
                            this.penny.angle = 180;
                            this.gumballPoint.y = this.floorY + (this.floorHeight * 0.5);
                        } else {
                            this.gumballPoint.angle = 180;
                            this.penny.y = this.floorY + (this.floorHeight * 0.5);
                        }
                    }

                    if (this.floorX == this.platforms.getAt(this.playerPos).x &&
                        this.floorY > this.platforms.getAt(this.playerPos).y) {
                        if (this.pennyActive) {
                            this.penny.angle = 180;
                        } else {
                            this.gumballPoint.angle = 180;
                        }
                    }

                    if (this.floorX > this.platforms.getAt(this.playerPos).x &&
                        this.floorY > this.platforms.getAt(this.playerPos).y) {
                        if (this.pennyActive) {
                            this.penny.angle = 0;
                        } else {
                            this.gumballPoint.angle = 0;
                        }
                    } else if (this.floorX > this.platforms.getAt(this.playerPos).x &&
                        this.floorY < this.platforms.getAt(this.playerPos).y) {
                        if (this.pennyActive) {
                            this.penny.angle = 0;
                        } else {
                            this.gumballPoint.angle = 0;
                        }
                    }

                }

                if (floor.down) {
                    this.add.tween(this.camera).to({
                        x: this.platforms.getAt(this.playerPos - 1).x - 250,
                        y: this.platforms.getAt(this.playerPos - 1).y - 100
                    }, 1300, Phaser.Easing.Linear.Out, true);
                } else if (floor.move == "up") {
                    this.add.tween(this.camera).to({
                        x: this.platforms.getAt(this.playerPos - 1).x - 210,
                        y: this.platforms.getAt(this.playerPos - 1).y - 340
                    }, 1500, Phaser.Easing.Linear.Out, true);
                } else if (floor.move == "left") {
                    this.add.tween(this.camera).to({
                        x: this.platforms.getAt(this.playerPos - 1).x - 260,
                        y: this.platforms.getAt(this.playerPos - 1).y - 300
                    }, 1300, Phaser.Easing.Linear.Out, true);
                } else {
                    this.add.tween(this.camera).to({
                        x: this.platforms.getAt(this.playerPos - 1).x - 210,
                        y: this.platforms.getAt(this.playerPos - 1).y - 300
                    }, 1300, Phaser.Easing.Linear.Out, true);
                }


                /************ ELIMINAR PLATAFORMA ***************/

                if (this.platforms.getAt(this.playerPos).down) {
                    var newPlatform = this.game.add.sprite(this.platforms.getAt(this.playerPos).x - 90, this.platforms.getAt(this.playerPos).y + 80, "floor_yellow");
                } else {
                    var newPlatform = this.game.add.sprite(this.platforms.getAt(this.playerPos).x, this.platforms.getAt(this.playerPos).y + 80, "floor_yellow");
                }
                newPlatform.loadTexture(this.platforms.getAt(this.playerPos).texture);

                if (this.platforms.getAt(this.playerPos).down) {
                    var tweenNewPlatform = this.add.tween(newPlatform).to({
                        y: this.camera.y + this.camera.height + 300,
                        x: this.camera.x + 10
                    }, 2100, Phaser.Easing.Linear.Out, true);
                } else {
                    var tweenNewPlatform = this.add.tween(newPlatform).to({
                        y: this.camera.y + this.camera.height + 300
                    }, 2000, Phaser.Easing.Linear.Out, true);
                }

                if (this.platforms.getAt(this.playerPos).down) {
                    this.add.tween(newPlatform.scale).to({
                        x: 0.3,
                        y: 0.3
                    }, 1500, Phaser.Easing.Linear.Out, true);
                } else {
                    this.add.tween(newPlatform.scale).to({
                        x: 0.4,
                        y: 0.4
                    }, 2000, Phaser.Easing.Linear.Out, true);
                }

                tweenNewPlatform.onComplete.add(function () {
                    newPlatform.destroy();
                });

                var tweenPlatform = this.add.tween(this.platforms.getAt(this.playerPos)).to({
                    alpha: 0
                }, 185, Phaser.Easing.Linear.Out, true);

                this.posicionPreview = this.playerPos;

                tweenPlatform.onComplete.add(function () {
                    this.platforms.getAt(this.posicionPreview).destroy();
                    this.floorDelete = false;
                }, this);

                this.playerPos -= 1;
            }
        }
    },

    gameOver: function () {
        if (!this.okGameOver) {
            this.okGameOver = true;

            if (getVolume() == "true") {
                this.soundGameOver.play();
                this.soundGameOver.volume = 1;
                soundPauseGeneral();
            }

            this.setQuantityGames(parseInt(this.getQuantityGames()) + 1);
            this.setGameFinish("true");

            if (this.pennyActive) {
                this.newPenny = this.add.sprite(this.pennyImg.x - 30, this.pennyImg.y, 'penny_rotation');
            } else {
                this.newPenny = this.add.sprite(this.pennyImg.x - 30, this.pennyImg.y, 'penny_center');
            }

            if (this.gumballActive) {
                this.newGumball = this.add.sprite(this.gumball.x - 30, this.gumball.y, 'gumball_rotation');
            } else {
                this.newGumball = this.add.sprite(this.gumball.x - 30, this.gumball.y, 'gumball_center');
                this.newGumball.scale.set(1.2);
            }

            this.newPenny.animations.add("pos1", [0], false, false);
            this.newGumball.animations.add("pos1", [0], false, false);

            game.physics.enable(this.newPenny, Phaser.Physics.ARCADE);
            game.physics.enable(this.newGumball, Phaser.Physics.ARCADE);

            this.pennyImg.kill();
            this.gumball.kill();
            this.gumballPoint.kill();
            this.penny.kill();

            this.emitterGumball.destroy();
            this.emitterPenny.destroy();

            var tweenPenny = this.add.tween(this.newPenny).to({
                y: this.newPenny.y - 80
            }, 1000, Phaser.Easing.Bounce.Out, true);

            tweenPenny.onComplete.add(function () {
                this.add.tween(this.newPenny).to({
                    y: this.newPenny.y + 1000
                }, 600, Phaser.Easing.Linear.Out, true);
            }, this);


            var tweenGumball = this.add.tween(this.newGumball).to({
                y: this.newGumball.y - 80
            }, 1000, Phaser.Easing.Bounce.Out, true);

            tweenGumball.onComplete.add(function () {
                this.add.tween(this.newGumball).to({
                    y: this.newGumball.y + 1000
                }, 600, Phaser.Easing.Linear.Out, true);
            }, this);

            setTimeout(function () {
                goToGameOver();
            }, 1500);

        }
    },

    shuffle: function (o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },
    emitterGumballPlay: function () {
        this.emitterGumball = game.add.emitter(this.gumball.x, this.gumball.y + this.gumball.height / 2, 400);
        this.emitterGumball.makeParticles(['particle_gumball', 'particle_gumball_two']);

        this.emitterGumball.setXSpeed(0, 0);
        this.emitterGumball.setYSpeed(0, 0);
        this.emitterGumball.setAlpha(1, 0, 2000);
        this.emitterGumball.setScale(1.5, 0.8, 1.5, 0.8, 2000);
        this.emitterGumball.gravity = 0;
        this.emitterGumball.start(false, 2000, 0);
    },
    emitterPennyPlay: function () {
        this.emitterPenny = game.add.emitter(this.pennyImg.x, this.pennyImg.y + this.pennyImg.height / 2, 400);
        this.emitterPenny.makeParticles(['effect_penny', 'effect_two']);

        this.emitterPenny.setXSpeed(0, 0);
        this.emitterPenny.setYSpeed(0, 0);
        this.emitterPenny.setAlpha(1, 0, 2000);
        this.emitterPenny.setScale(1.5, 0.8, 1.5, 0.8, 2000);
        this.emitterPenny.gravity = 0;
        this.emitterPenny.start(false, 2000, 0);
    },
    pauseGame: function () {
        if (this.gameStart) {
            soundButtonPlay();

            this.contentPause = this.game.add.group();

            this.bar_1 = this.add.tileSprite(this.camera.x, this.camera.y, this.world.width, 45, "bar_finish");
            this.bar_2 = this.add.tileSprite(this.camera.x, this.camera.y + this.camera.height - 45, this.world.width, 45, "bar_finish");

            this.textPause = this.add.text(this.camera.x + this.camera.width / 2, this.camera.y + 160, lang.pause, {
                align: 'center',
                font: '60px fred_burger_bold',
                fill: '#ffffff'
            });
            this.textPause.anchor.set(0.5);

            this.contentPause.create(this.camera.x, this.camera.y, "background_black");
            var btnReplay = this.contentPause.create(this.camera.x + this.camera.width / 2, this.camera.y + 300, "play");
            btnReplay.anchor.set(0.5);

            var btnMenu = this.contentPause.create(btnReplay.x + 170, btnReplay.y, "btn_menu");
            btnMenu.anchor.set(0.5);

            var btnRepeat = this.contentPause.create(btnReplay.x - 190, btnReplay.y, "btn_repeat");
            btnRepeat.anchor.set(0.5);

            //Textos de botones


            if (getEffect() == "true") {
                var btnEffect = this.contentPause.create(this.camera.x + 510, this.camera.y + 60, "on_effect");
            } else {
                var btnEffect = this.contentPause.create(this.camera.x + 510, this.camera.y + 60, "off_effect");
            }

            if (getVolume() == "true") {
                var btnMusic = this.contentPause.create(this.camera.x + 580, this.camera.y + 60, "on_music");
            } else {
                var btnMusic = this.contentPause.create(this.camera.x + 580, this.camera.y + 60, "off_music");
            }

            this.contentPause.add(this.bar_1);
            this.contentPause.add(this.bar_2);
            this.contentPause.add(this.textPause);
            this.contentPause.fixedToCamera = true;

            this.game.paused = true;
        }
    },
    //Logros Cantidad de Juegos
    getQuantityGames: function () {
        var quantityGames = 0;

        if (localStorage.getItem('quantityGames') != undefined) {
            quantityGames = localStorage.getItem("quantityGames");
        }

        return quantityGames;
    },
    setQuantityGames: function (quantityGames) {
        window.localStorage.setItem("quantityGames", quantityGames);
    },

    //Validar si el Juego ya finalizo
    getGameFinish: function () {
        var gameFinish = "false";

        if (localStorage.getItem("game_finish") != undefined) {
            gameFinish = localStorage.getItem("game_finish");
        }

        return gameFinish;
    },
    setGameFinish: function (game_finish) {
        window.localStorage.setItem("game_finish", game_finish);
    }
};

