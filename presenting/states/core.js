GAME.Main = function (game) {};

var blast = false;
var gameStop = false;
var enemiesDestroyed = 0;

// Setup the example
GAME.Main.prototype = {
    create: function () {
        // Set stage background color
        game.stage.backgroundColor = 0x121212;
        game.add.image(0, 0, "BG");

        if (!this.game.device.desktop) {

        }

        // Simulate a pointer click/tap input at the center of the stage
        // when the example begins running.
        game.input.activePointer.x = this.game.width / 2;
        game.input.activePointer.y = this.game.height / 2;

        // GARBAGE COLLECTION //
        utils.garbageCollect();
        reg.score = 0;
        gameStop = false;

        // Show FPS
        game.time.advancedTiming = true;


        this.game.world.setBounds(-10, -10, this.game.width + 20, this.game.height + 20);

        /////////////////////
        // HUD
        createHUD();

        createExplosion();
        if (!this.game.device.desktop) {

        } else {
            createSnow();
        }

        createElves();
        createPresents();

        this.fpsText = this.game.add.text(
            20, 20, '', {
                font: '18px Arial',
                fill: '#000000'
            }
        );
        //// controls ////
        game.input.onDown.add(onInputDown);
        game.input.onUp.add(onInputUp);


        // create modals
        // createModal("game-over");
        //createModal("level");

    },
    update: function () {
        if (this.game.time.fps !== 0) {
           // this.fpsText.setText(this.game.time.fps + ' FPS');
        }

        // UPDATE SOMETHING EACH FRAME
        if (reg.snowActive === true) {
            if (!this.game.device.desktop) {

            } else {
                updateSnow();
            }
        }

        var presents = reg.presents.children.filter(function (e) {
            return e.alive;
        });

        game.physics.arcade.overlap(reg.leftClickGroup.children, presents, handlePresentCatch);
        game.physics.arcade.overlap(reg.noClickGroup.children, presents, handlePresentCatch);

    },
    sampleFunction: function (blast) {

        if (gameStop === true) {
            return false;
        }

    },
    render: function () {
        if (reg.noClickGroup.children.length > 0) {
            /*game.debug.body(reg.noClickGroup.children[0]);
            game.debug.body(reg.leftClickGroup.children[0]);
            game.debug.body(reg.leftClickGroup.children[1]);*/
        }
    }
};

/**
 * [createElves description]
 * @return {[type]} [description]
 */
function createElves() {
    var leftClickGroup = game.add.group();
    var noClickGroup = game.add.group();

    /// center one
    var elfCenter = game.add.sprite(0, 0, "elfCenter");
    elfCenter.x = game.width / 2 - elfCenter.width / 2;
    elfCenter.y = game.height - (elfCenter.height + 120);
    game.physics.enable(elfCenter, Phaser.Physics.ARCADE);
    elfCenter.body.collideWorldBounds = false;
    elfCenter.body.allowGravity = false;
    elfCenter.body.immovable = true;

    //// left one
    var elfLeft = game.add.sprite(0, 0, "elfLeft");
    elfLeft.x = -elfLeft.width; // outside of viewport
    elfLeft.y = game.height - (elfLeft.height + 120);
    game.physics.enable(elfLeft, Phaser.Physics.ARCADE);
    elfLeft.body.collideWorldBounds = false;
    elfLeft.body.allowGravity = false;
    elfLeft.body.immovable = true;

    //// right one
    var elfRight = game.add.sprite(0, 0, "elfRight");
    elfRight.x = game.width + elfRight.width; // outside of viewport
    elfRight.y = game.height - (elfRight.height + 120);
    game.physics.enable(elfRight, Phaser.Physics.ARCADE);
    elfRight.body.collideWorldBounds = false;
    elfRight.body.allowGravity = false;
    elfRight.body.immovable = true;

    leftClickGroup.add(elfLeft);
    leftClickGroup.add(elfRight);
    noClickGroup.add(elfCenter);

    reg.leftClickGroup = leftClickGroup;
    reg.noClickGroup = noClickGroup;
}

function onInputDown(e) {
    //window.console.log("down pressed");
    if (reg.startMsg.alpha === 1) {
        dismissStartMessage();
        initTimer(1400);
        return true;
    }
    var leftElf = reg.leftClickGroup.children[0];
    var rightElf = reg.leftClickGroup.children[1];
    var centerElf = reg.noClickGroup.children[0];

    var tweenObj = tweenProperty(centerElf, "y", {
        "y": game.height + 150
    }, 200, 0);
    //centerElf.tweenObj = tweenObj;

    var tweenObj2 = tweenProperty(leftElf, "x", {
        "x": 50
    }, 200, 0.1);
    //leftElf.tweenObj = tweenObj2;

    var tweenObj3 = tweenProperty(rightElf, "x", {
        "x": game.width - (rightElf.width + 50)
    }, 200, 0.1);
    //rightElf.tweenObj = tweenObj3;
}

function onInputUp(e) {
    var leftElf = reg.leftClickGroup.children[0];
    var rightElf = reg.leftClickGroup.children[1];
    var centerElf = reg.noClickGroup.children[0];

    var tweenObj = tweenProperty(centerElf, "y", {
        "y": game.height - centerElf.height - 120
    }, 200, 0.1);
    //centerElf.tweenObj = tweenObj;

    var tweenObj2 = tweenProperty(leftElf, "x", {
        "x": -leftElf.width
    }, 200, 0);
    //leftElf.tweenObj = tweenObj2;

    var tweenObj3 = tweenProperty(rightElf, "x", {
        "x": game.width
    }, 200, 0);
    //rightElf.tweenObj = tweenObj3;
}


function createPresents() {
    reg.presents = game.add.group();
    reg.presents.enableBody = true;
    reg.presents.physicsBodyType = Phaser.Physics.ARCADE;
    makePresents(100);
    reg.presents.setAll('body.collideWorldBounds', false);
    reg.presents.setAll('body.checkWorldBounds', true);
    reg.presents.setAll('body.outOfBoundsKill', true);
    reg.presents.setAll('body.immovable', false);
}

function makePresents(amount) {

    var present;
    var index;
    var posIndex;
    for (var i = 0; i < amount; i++) {
        index = game.rnd.integerInRange(1, 11);
        present = game.add.sprite(0, 0, String("present" + index));
        present.health = 1;
        present.id = "present";
        present._class = String("present" + index);
        present.x = 0;
        game.physics.enable(present, Phaser.Physics.ARCADE);
        present.body.collideWorldBounds = false;
        present.body.allowGravity = true;
        present.body.immovable = false;
        present.body.velocity.x = 0;
        present.body.velocity.y = game.rnd.integerInRange(90, 190);
        present.checkWorldBounds = true;
        present.outOfBoundsKill = true;

        present.events.onKilled.add(function (e) {
            if (this.health === 0) {
                increaseScore();
                getExplosion(this.x + 20, this.y + 20, 1);
            } else {
                // means game hasn't started yet
                if (reg.startMsg.alpha === 0) {
                    gameOver();
                }
            }

        }, present);

        present.kill();
        reg.presents.add(present);
    }
}

function launchPresent() {
    posIndex = game.rnd.integerInRange(0, 2); // 0 left, 1 center, 2 right
    var posY = 0;

    // Get a present
    var present = reg.presents.getFirstDead();
    var index;
    if (present === null || present === undefined) return;

    index = game.rnd.integerInRange(1, 11);
    present.loadTexture("present" + index);
    posY = present.height + 1;
    if (posIndex === 0) {
        present.x = 50 + 110;
    } else if (posIndex === 1) {
        present.x = game.width / 2 - present.width / 2;
    } else if (posIndex === 2) {
        present.x = game.width - (140 + 50);
    } else {
        present.x = game.width / 2 - present.width / 2;
    }

    present.y = posY;
    present.reset(present.x, present.y);
    present.body.velocity.y = game.rnd.integerInRange(860, 950);


    present.revive(1);
    present.health = 1;
}

function handlePresentCatch(elf, present) {

    if (gameStop === false) {
        if (elf.id === "present") {
            var b = {
                temp: present
            };
            present = elf;
            elf = b.temp;
        }

        if (reg.sound === true) {
            reg.ding.play();
        }

        present.health = 0;
        if (present.health === 0) {
            present.kill();
        }
    }
}


/////////////////////////////// MAIN FILES END /////////////////////////////////////////

/**
 * [shockAndAwe Shakes the camera and flashes the stage]
 * @return {[type]} [description]
 */
function shockAndAwe() {
    // Create the flash
    reg.flash.alpha = 1;
    game.add.tween(reg.flash)
        .to({
            alpha: 0
        }, 180, Phaser.Easing.Cubic.In)
        .start();

    // Shake the camera by moving it up and down 5 times really fast
    game.camera.y = 0;
    game.add.tween(game.camera)
        .to({
            y: -10
        }, 80, Phaser.Easing.Sinusoidal.InOut, false, 0, 5, true)
        .start();
}

function createHUD() {

    var hudGroup = game.add.group();
    var posX = (game.width / 2) - (322 / 2);
    var posY = game.height - 117;

    // standalone gui //
    createStartMessage();
    createScoreLabel();
    createCancel();
    createGameOver();
    /////////////////////
    reg.hudGroup = hudGroup;
}

function createStartMessage() {
    var startMsg = game.add.bitmapText(0, 0, "redFont", "Click/tap and hold\nto gather\nleft/right presents\n\nRelease\n to gather\nmiddle presents\n\n", 52);
    startMsg.x = game.width / 2 - startMsg.width / 2;
    startMsg.y = (game.height / 2 - startMsg.height / 2) - 240;
    startMsg.align = "center";

    /////////////////////////
    //Tap Anywhere to\nstart!\n
    var startMsg2 = game.add.bitmapText(0, 0, "redFont", "Tap Anywhere to\nstart!", 62);
    startMsg2.x = game.width / 2 - startMsg2.width / 2;
    startMsg2.y = startMsg.y + startMsg.height + 50; //(game.height / 2 - startMsg2.height / 2) - 100;
    startMsg2.align = "center";

    reg.startMsg = startMsg;
    reg.startMsg2 = startMsg2;
}

function dismissStartMessage() {
    reg.startMsg.alpha = 0;
    reg.startMsg2.alpha = 0;
}

function createScoreLabel() {
    var scoreLabel = game.add.bitmapText(0, 0, "redFont", "0 x Pts", 54);
    scoreLabel.x = game.width - (scoreLabel.width + 20);
    scoreLabel.y = 20;

    reg.scoreLabel = scoreLabel;
}

function increaseScore() {
    var value = Number(String(reg.scoreLabel.text).replace(" x Pts", ""));
    value = value + 1;
    reg.scoreLabel.text = value + " x Pts";
    reg.scoreLabel.update();
    reg.scoreLabel.updateText();
    reg.scoreLabel.x = game.width - (reg.scoreLabel.width + 20);

    reg.score = value;
}

function createCancel() {
    var cancel = game.add.button(0, 0, "cancel", cancelGame, this);
    cancel.scale.setTo(0.8, 0.8);
    cancel.x = 20;
    cancel.y = 20;
}


function pauseGame() {
    removeTimer();
}

function resumeGame() {
    initTimer();
}

function cancelGame(item) {
    game.state.start('MainMenu');
}

function restartGame(item) {
    game.state.start("Game");
}

function createGameOver() {
    var gameOverGroup = game.add.group();
    gameOverGroup.y = 200;
    var gameOverLabel;
    var restartButton;
    var menuButton;

    gameOverLabel = game.add.bitmapText(0, 0, "redFont", "Game is Over but...\nwe wish you\na Merry Christmas!", 62);
    gameOverLabel.x = game.width / 2 - gameOverLabel.width / 2;
    gameOverLabel.y = 0;

    ///////////////

    restartButton = game.add.button(0, 0, "buttons", restartGame, this, "replay", "replay", "small_pr_replay", "replay");
    restartButton.x = 100;
    restartButton.y = gameOverLabel.y + gameOverLabel.height + 100;
    restartButton.input.useHandCursor = true;
    restartButton.inputEnabled = false;


    //////////////

    menuButton = game.add.button(0, 0, "cancel", cancelGame, this);
    menuButton.x = game.width - (menuButton.width + 100);
    menuButton.y = gameOverLabel.y + gameOverLabel.height + 100;
    menuButton.input.useHandCursor = true;
    menuButton.inputEnabled = false;


    gameOverGroup.add(gameOverLabel);
    gameOverGroup.add(restartButton);
    gameOverGroup.add(menuButton);
    gameOverGroup.enabled = false;
    gameOverGroup.alpha = 0;

    reg.gameOverGroup = gameOverGroup;
}

/**
 * [createModal description]
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function createModal(type) {


}

/**
 * [createExplosion description]
 * @return {[type]} [description]
 */
function createExplosion() {
    reg.explosionGroup = game.add.group();
}

/**
 * [getExplosion Create explosion]
 * @param  {[type]} x     [description]
 * @param  {[type]} y     [description]
 * @param  {[type]} scale [description]
 * @return {[type]}       [description]
 *
 * Search Tag: #explosion, #explode
 */
function getExplosion(x, y, scale) {
    // Try to get a used explosion from the explosionGroup.
    // If an explosion isn't available, create a new one and add it to the group.
    // Setup new explosions so that they animate and kill themselves when the
    // animation is complete.
    // Get the first dead explosion from the explosionGroup
    var explosion;
    explosion = reg.explosionGroup.getFirstDead();

    // If there aren't any available, create a new one
    if (explosion === null) {

        var animation;

        explosion = game.add.sprite(0, 0, 'explosion', 'Frame-1');
        explosion.anchor.setTo(0.5, 0.5);

        // Add an animation for the explosion that kills the sprite when the
        // animation is complete
        animation = explosion.animations.add('boom', Phaser.Animation.generateFrameNames('Frame-', 1, 5, '', 0), 12, false);


        animation.killOnComplete = true;

        // Add the explosion sprite to the group
        reg.explosionGroup.add(explosion);
    }

    // Revive the explosion (set it's alive property to true)
    // You can also define a onRevived event handler in your explosion objects
    // to do stuff when they are revived.
    explosion.revive();

    scale = scale || 1;

    // Move the explosion to the given coordinates
    explosion.x = x;
    explosion.y = y;
    explosion.scale.x = scale;
    explosion.scale.y = scale;

    // Set rotation of the explosion at random for a little variety
    //explosion.angle = game.rnd.integerInRange(0, 360);
    game.world.bringToTop(reg.explosionGroup);
    // Play the animation
    explosion.animations.play('boom');

    // Return the explosion itself in case we want to do anything else with it
    return explosion;
}

function gameOver() {
    saveScore();
    removeTimer();
    reg.gameOverGroup.enabled = true;
    reg.gameOverGroup.children[0].inputEnabled = true;
    reg.gameOverGroup.children[1].inputEnabled = true;
    reg.gameOverGroup.alpha = 1;
}

/**
 * [showModal description]
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function showModal(type) {

}

/**
 * [hideModal description]
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function hideModal(type) {

}

/**
 * [saveScore description]
 * @return {[type]} [description]
 */
function saveScore() {
    var score = Number(localStorage.getItem("presenting_score"));
    if (score > reg.score) {
    } else {
        localStorage.setItem("presenting_score", JSON.stringify(reg.score));
    }
}


/**
 * [tweenProperty description]
 * @param  {[type]} item     [description]
 * @param  {[type]} property [description]
 * @param  {[type]} obj      [description]
 * @param  {[type]} duration [description]
 * @return {[type]}          [description]
 */
function tweenProperty(item, property, obj, duration, delay, easing) {

    delay = delay || {};
    easing = easing || Phaser.Easing.Linear.None;

    var tween = game.add.tween(item).to(obj, duration, easing, true, delay, 0, false);

    return tween;
}



/// EVENT LISTENERS


/**
 * [resetAchievements description]
 * @return {[type]} [description]
 */
function resetScore() {
    localStorage.setItem("presenting_score", 0);
}

// Setup game
var game = new Phaser.Game(640, 1136, Phaser.CANVAS, '');
game.state.add('Boot', GAME.Boot);
game.state.add('Preloader', GAME.Preloader);
game.state.add('Scores', GAME.Scores);
game.state.add('Info', GAME.Info);
game.state.add('MainMenu', GAME.Menu);
game.state.add("Credits", GAME.Credits);
game.state.add('Game', GAME.Main);

game.state.start('Boot');