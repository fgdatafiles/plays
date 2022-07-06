CuriousJS.Activity = {};
CuriousJS.Activity.Scene = function(config) {
    var that = new CuriousJS.Scene(config);

    that._init = function(config) {
        var mainSpriteSheet = cm.game.mainQueue.getResult('activitySpriteSheet');

        this.background = new createjs.Bitmap(cm.game.mainQueue.getResult('activityBackground'));
        this.background.x = -cm.game.targetWidth / 2;
        this.background.y = -cm.game.targetHeight / 2;

        this.closeButton = new createjs.Sprite(mainSpriteSheet, 'close-button');
        this.closeButton.regX = this.closeButton.getBounds().width/2;
        this.closeButton.regY = this.closeButton.getBounds().height/2;
        this.closeButton.x = 400 + this.closeButton.regX;
        this.closeButton.y = -240 + this.closeButton.regY;
        this.closeButton.on('click', this.closeClicked, this);

        this.sideTray = new createjs.Sprite(mainSpriteSheet, 'side-tray');
        this.sideTray.x = -cm.game.targetWidth / 2;
        this.sideTray.y = -cm.game.targetHeight / 2;

        this.xylophoneButton = new createjs.Sprite(mainSpriteSheet, 'side-tray-xylophone');
        this.xylophoneButton.x = -465;
        this.xylophoneButton.y = -170;
        this.xylophoneButton.on('click', this.xylophoneButtonClicked, this);
        this.xylophoneButton.visible = false;

        this.drumSetButton = new createjs.Sprite(mainSpriteSheet, 'side-tray-drum-set');
        this.drumSetButton.x = -465;
        this.drumSetButton.y = -65;
        this.drumSetButton.on('click', this.drumSetButtonClicked, this);

        this.guitarButton = new createjs.Sprite(mainSpriteSheet, 'side-tray-guitar');
        this.guitarButton.x = -461;
        this.guitarButton.y = 78;
        this.guitarButton.on('click', this.guitarButtonClicked, this);

        this.xylophone = new CuriousJS.Activity.Xylophone(this);
        this.xylophone.visible = false;
        this.drumSet = new CuriousJS.Activity.DrumSet(this);
        this.drumSet.visible = false;
        this.guitar = new CuriousJS.Activity.Guitar(this);
        this.guitar.visible = false;

        this.currentInstrument = 'xylophone';

        this.addChild(this.background, this.xylophone, this.drumSet, this.guitar, this.sideTray, 
            this.xylophoneButton, this.drumSetButton, this.guitarButton, this.closeButton);
    };

    that.enter = function() {
        this.xylophone.visible = true;
        this.xylophoneButton.visible = false;
        this.drumSetButton.visible = true;
        this.guitarButton.visible = true;
    };

    that.update = function() {
        
    };

    that.exit = function() {
        this.xylophone.visible = false;
        this.drumSet.visible = false;
        this.guitar.visible = false;
    };

    that.closeClicked = function() {
        createjs.Sound.play('activityButtonSound2');
        createjs.Tween.get(this.closeButton, {override: true})
            .to({scaleX: 0.9, scaleY: 0.9}, 100)
            .to({scaleX: 1.1, scaleY: 1.1}, 100)
            .to({scaleX: 1, scaleY: 1}, 100)
            .call(function() {
                cm.game.loadScene('musicShop');
            }, null, this);
    };

    that.xylophoneButtonClicked = function() {
        createjs.Sound.play('activityButtonSound2');
        this.xylophoneButton.visible = false;
        this.xylophone.visible = true;
        this.drumSetButton.visible = true;
        this.drumSet.visible = false;
        this.guitarButton.visible = true;
        this.guitar.visible = false;
    };

    that.drumSetButtonClicked = function() {
        createjs.Sound.play('activityButtonSound2');
        this.xylophoneButton.visible = true;
        this.xylophone.visible = false;
        this.drumSetButton.visible = false;
        this.drumSet.visible = true;
        this.guitarButton.visible = true;
        this.guitar.visible = false;
        cm.game.stage.off('stagemousemove', this.xylophone.stageMouseMoveListener);
    };

    that.guitarButtonClicked = function() {
        createjs.Sound.play('activityButtonSound2');
        this.xylophoneButton.visible = true;
        this.xylophone.visible = false;
        this.drumSetButton.visible = true;
        this.drumSet.visible = false;
        this.guitarButton.visible = false;
        this.guitar.visible = true;
        cm.game.stage.off('stagemousemove', this.xylophone.stageMouseMoveListener);
    };

    that._init(config);
    return that;
};

CuriousJS.Activity.Xylophone = function(parent) {
    var that = new createjs.Container();

    that._init = function(parent) {
        this._parent = parent;
        var mainSpriteSheet = cm.game.mainQueue.getResult('activitySpriteSheet');

        this.wood = new createjs.Sprite(mainSpriteSheet, 'xylophone/wood');
        this.wood.x = -185;
        this.wood.y = 50;

        this.pink = new createjs.Sprite(mainSpriteSheet, 'xylophone/pink');
        this.pink.regX = 81/2;
        this.pink.regY = 399/2;
        this.pink.x = -182 + this.pink.regX;
        this.pink.y = -238 + this.pink.regY;
        this.pink.on('mousedown', this.pinkMouseDown, this);

        this.purple = new createjs.Sprite(mainSpriteSheet, 'xylophone/purple');
        this.purple.regX = 81/2;
        this.purple.regY = 399/2;
        this.purple.x = -101 + this.purple.regX;
        this.purple.y = -238 + this.purple.regY;
        this.purple.on('mousedown', this.purpleMouseDown, this);

        this.blue = new createjs.Sprite(mainSpriteSheet, 'xylophone/blue');
        this.blue.regX = 81/2;
        this.blue.regY = 399/2;
        this.blue.x = -20 + this.blue.regX;
        this.blue.y = -238 + this.blue.regY;
        this.blue.on('mousedown', this.blueMouseDown, this);

        this.green = new createjs.Sprite(mainSpriteSheet, 'xylophone/green');
        this.green.regX = 81/2;
        this.green.regY = 399/2;
        this.green.x = 61 + this.green.regX;
        this.green.y = -238 + this.green.regY;
        this.green.on('mousedown', this.greenMouseDown, this);

        this.yellow = new createjs.Sprite(mainSpriteSheet, 'xylophone/yellow');
        this.yellow.regX = 81/2;
        this.yellow.regY = 399/2;
        this.yellow.x = 142 + this.yellow.regX;
        this.yellow.y = -238 + this.yellow.regY;
        this.yellow.on('mousedown', this.yellowMouseDown, this);

        this.orange= new createjs.Sprite(mainSpriteSheet, 'xylophone/orange');
        this.orange.regX = 81/2;
        this.orange.regY = 399/2;
        this.orange.x = 223 + this.orange.regX;
        this.orange.y = -238 + this.orange.regY;
        this.orange.on('mousedown', this.orangeMouseDown, this);

        cm.game.stage.on('stagemousedown', this.stageMouseDown, this);
        cm.game.stage.on('stagemouseup', this.stageMouseUp, this);

        this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;

        this.addChild(this.wood, this.pink, this.purple, this.blue, this.green, this.yellow, this.orange);
    };

    that.pinkMouseDown = function(event) {
        this.pinkPlayed = true;
        createjs.Sound.play('xylophone1');
        this.spawnTouchRings(this.globalToLocal(event.stageX, event.stageY));
        this.animatePink();
    };

    that.purpleMouseDown = function(event) {
        this.purplePlayed = true;
        createjs.Sound.play('xylophone2');
        this.spawnTouchRings(this.globalToLocal(event.stageX, event.stageY));
        this.animatePurple();
    };

    that.blueMouseDown = function(event) {
        this.bluePlayed = true;
        createjs.Sound.play('xylophone3');
        this.spawnTouchRings(this.globalToLocal(event.stageX, event.stageY));
        this.animateBlue();
    };

    that.greenMouseDown = function(event) {
        this.greenPlayed = true;
        createjs.Sound.play('xylophone4');
        this.spawnTouchRings(this.globalToLocal(event.stageX, event.stageY));
        this.animateGreen();
    };

    that.yellowMouseDown = function(event) {
        this.yellowPlayed = true;
        createjs.Sound.play('xylophone5');
        this.spawnTouchRings(this.globalToLocal(event.stageX, event.stageY));
        this.animateYellow();
    };

    that.orangeMouseDown = function(event) {
        this.orangePlayed = true;
        createjs.Sound.play('xylophone6');
        this.spawnTouchRings(this.globalToLocal(event.stageX, event.stageY));
        this.animateOrange();
    };

    that.stageMouseDown = function() {
        if(this.visible) {
            this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;
            this.stageMouseMoveListener = cm.game.stage.on('stagemousemove', this.stageMouseMove, this);
        }
    };

    that.stageMouseMove = function(event) {
        if(this.visible) {
            var localPoint = this.globalToLocal(event.stageX, event.stageY);
            if(localPoint.y >= this.pink.y - 199.5 && localPoint.y <= this.pink.y + 199.5) {
                if(localPoint.x >= this.pink.x - 40.5 && localPoint.x <= this.pink.x + 40.5 && !this.pinkPlayed) {
                    this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;
                    this.pinkPlayed=true;
                    createjs.Sound.play('xylophone1');
                    this.spawnTouchRings(localPoint);
                    this.animatePink();
                } else if(localPoint.x >= this.purple.x - 40.5 && localPoint.x <= this.purple.x + 40.5 && !this.purplePlayed) {
                    this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;
                    this.purplePlayed=true;
                    createjs.Sound.play('xylophone2');
                    this.spawnTouchRings(localPoint);
                    this.animatePurple();
                } else if(localPoint.x >= this.blue.x - 40.5 && localPoint.x <= this.blue.x + 40.5 && !this.bluePlayed) {
                    this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;
                    this.bluePlayed=true;
                    createjs.Sound.play('xylophone3');
                    this.spawnTouchRings(localPoint);
                    this.animateBlue();
                } else if(localPoint.x >= this.green.x - 40.5 && localPoint.x <= this.green.x + 40.5 && !this.greenPlayed) {
                    this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;
                    this.greenPlayed=true;
                    createjs.Sound.play('xylophone4');
                    this.spawnTouchRings(localPoint);
                    this.animateGreen();
                } else if(localPoint.x >= this.yellow.x - 40.5 && localPoint.x <= this.yellow.x + 40.5 && !this.yellowPlayed) {
                    this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;
                    this.yellowPlayed=true;
                    createjs.Sound.play('xylophone5');
                    this.spawnTouchRings(localPoint);
                    this.animateYellow();
                } else if(localPoint.x >= this.orange.x - 40.5 && localPoint.x <= this.orange.x + 40.5 && !this.orangePlayed) {
                    this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;
                    this.orangePlayed=true;
                    createjs.Sound.play('xylophone6');
                    this.spawnTouchRings(localPoint);
                    this.animateOrange();
                } else if(localPoint.x <= this.pink.x - 40.5 || localPoint.x >= this.orange.x + 40.5) {
                    this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;
                }
            }
        }
    };

    that.stageMouseUp = function() {
        if(this.visible) {
            this.pinkPlayed=this.purplePlayed=this.bluePlayed=this.greenPlayed=this.yellowPlayed=this.orangePlayed=false;
            cm.game.stage.off('stagemousemove', this.stageMouseMoveListener);
        }
    };

    that.animatePink = function() {
        createjs.Tween.get(this.pink)
            .to({scaleX: 0.99, scaleY: 0.975}, 125)
            .to({scaleX: 1, scaleY: 1}, 125);
    };

    that.animatePurple = function() {
        createjs.Tween.get(this.purple)
            .to({scaleX: 0.99, scaleY: 0.975}, 125)
            .to({scaleX: 1, scaleY: 1}, 125);
    };

    that.animateBlue = function() {
        createjs.Tween.get(this.blue)
            .to({scaleX: 0.99, scaleY: 0.975}, 125)
            .to({scaleX: 1, scaleY: 1}, 125);
    };

    that.animateGreen = function() {
        createjs.Tween.get(this.green)
            .to({scaleX: 0.99, scaleY: 0.975}, 125)
            .to({scaleX: 1, scaleY: 1}, 125);
    };

    that.animateYellow = function() {
        createjs.Tween.get(this.yellow)
            .to({scaleX: 0.99, scaleY: 0.975}, 125)
            .to({scaleX: 1, scaleY: 1}, 125);
    };

    that.animateOrange = function() {
        createjs.Tween.get(this.orange)
            .to({scaleX: 0.99, scaleY: 0.975}, 125)
            .to({scaleX: 1, scaleY: 1}, 125);
    };

    that.spawnTouchRings = function(point) {
        var mainSpriteSheet = cm.game.mainQueue.getResult('activitySpriteSheet');
        var touchRing1 = new createjs.Sprite(mainSpriteSheet, 'xylophone/touch');
        touchRing1.regX = touchRing1.regY = 152.5;
        touchRing1.scaleX = touchRing1.scaleY = 0.15;
        touchRing1.x = point.x;
        touchRing1.y = point.y;
        this.addChild(touchRing1);
        createjs.Tween.get(touchRing1)
            .to({scaleX: 0.9, scaleY: 0.9}, 300)
            .to({scaleX: 1, scaleY: 1, alpha: 0, visible: false}, 75);

        var touchRing2 = new createjs.Sprite(mainSpriteSheet, 'xylophone/touch');
        touchRing2.regX = touchRing2.regY = 152.5;
        touchRing2.scaleX = touchRing2.scaleY = 0.15;
        touchRing2.x = point.x;
        touchRing2.y = point.y;
        touchRing2.visible = false;
        this.addChild(touchRing2);
        createjs.Tween.get(touchRing2).wait(150)
            .to({visible: true}, 1)
            .to({scaleX: 0.9, scaleY: 0.9}, 300)
            .to({scaleX: 1, scaleY: 1, alpha: 0, visible: false}, 75);

        var touchRing3 = new createjs.Sprite(mainSpriteSheet, 'xylophone/touch');
        touchRing3.regX = touchRing3.regY = 152.5;
        touchRing3.scaleX = touchRing3.scaleY = 0.15;
        touchRing3.x = point.x;
        touchRing3.y = point.y;
        touchRing3.visible = false;
        this.addChild(touchRing3);
        createjs.Tween.get(touchRing3).wait(300)
            .to({visible: true}, 1)
            .to({scaleX: 0.9, scaleY: 0.9}, 300)
            .to({scaleX: 1, scaleY: 1, alpha: 0, visible: false}, 75);
    };

    that._init(parent);
    return that;
};

CuriousJS.Activity.DrumSet = function(parent) {
    var that = new createjs.Container();

    that._init = function(parent) {
        this._parent = parent;
        var mainSpriteSheet = cm.game.mainQueue.getResult('activitySpriteSheet');

        this.stand = new createjs.Sprite(mainSpriteSheet, 'drum-set/stand');
        this.stand.x = -243;
        this.stand.y = -215;

        this.snare = new createjs.Sprite(mainSpriteSheet, 'drum-set/snare');
        this.snare.x = -213;
        this.snare.y = 0;

        this.snareShadow = new createjs.Sprite(mainSpriteSheet, 'drum-set/drum-shadow');
        this.snareShadow.x = -215;
        this.snareShadow.y = 10;
        this.snareShadow.visible = false;
        this.snare.on('mousedown', this.snareMouseDown, this);
        this.snare.on('pressup', function() {this.snareShadow.visible = false;}, this);

        this.kickDrum = new createjs.Sprite(mainSpriteSheet, 'drum-set/kick-drum');
        this.kickDrum.x = -40;
        this.kickDrum.y = -85;

        this.kickDrumPedal = new createjs.Sprite(mainSpriteSheet, 'drum-set/pedal');
        this.kickDrumPedal.regX = this.kickDrumPedal.getBounds().width/2;
        this.kickDrumPedal.regY = this.kickDrumPedal.getBounds().height;
        this.kickDrumPedal.x = 91 + this.kickDrumPedal.regX;
        this.kickDrumPedal.y = 195 + this.kickDrumPedal.regY;

        this.kickDrumNob = new createjs.Sprite(mainSpriteSheet, 'drum-set/nob');
        this.kickDrumNob.x = 105;
        this.kickDrumNob.y = 160;

        this.kickDrumShadow = new createjs.Sprite(mainSpriteSheet, 'drum-set/drum-shadow');
        this.kickDrumShadow.scaleY = 0.5;
        this.kickDrumShadow.x = 30;
        this.kickDrumShadow.y = 115;
        this.kickDrumShadow.visible = false;
        this.kickDrum.on('mousedown', this.kickDrumMouseDown, this);
        this.kickDrum.on('pressup', function() {
            this.kickDrumShadow.visible = false;
        }, this);

        this.tom = new createjs.Sprite(mainSpriteSheet, 'drum-set/tom');
        this.tom.x = 125;
        this.tom.y = -140;

        this.tomShadow = new createjs.Sprite(mainSpriteSheet, 'drum-set/drum-shadow');
        this.tomShadow.x = 155;
        this.tomShadow.y = -125;
        this.tomShadow.visible = false;
        this.tom.on('mousedown', this.tomMouseDown, this);
        this.tom.on('pressup', function() {this.tomShadow.visible = false;}, this);

        this.rightCymbol = new createjs.Sprite(mainSpriteSheet, 'drum-set/right-cymbol');
        this.rightCymbol.regX = 120;
        this.rightCymbol.regY = 13;
        this.rightCymbol.x = 55 + this.rightCymbol.regX;
        this.rightCymbol.y = -250 + this.rightCymbol.regY;
        this.rightCymbol.on('click', this.rightCymbolClicked, this);

        this.rightCymbolNob = new createjs.Sprite(mainSpriteSheet, 'drum-set/right-cymbol-nob');
        this.rightCymbolNob.x = 161;
        this.rightCymbolNob.y = -257;

        this.leftCymbol = new createjs.Sprite(mainSpriteSheet, 'drum-set/left-cymbol');
        this.leftCymbol.regX = 90;
        this.leftCymbol.regY = 64;
        this.leftCymbol.x = -185 + this.leftCymbol.regX;
        this.leftCymbol.y = -250 + this.leftCymbol.regY;
        this.leftCymbol.on('click', this.leftCymbolClicked, this);

        this.leftCymbolNob = new createjs.Sprite(mainSpriteSheet, 'drum-set/left-cymbol-nob');
        this.leftCymbolNob.x = -102;
        this.leftCymbolNob.y = -206;

        this.noteContainer = new createjs.Container();

        this.addChild(this.stand, this.snare, this.snareShadow, this.kickDrum, this.kickDrumShadow, this.kickDrumPedal, 
            this.kickDrumNob, this.tom, this.tomShadow, this.rightCymbol, this.rightCymbolNob, this.leftCymbol, 
            this.leftCymbolNob, this.noteContainer);
    };

    that.snareMouseDown = function() {
        this.snareShadow.visible = true;
        createjs.Sound.play('drum-snare');
        this.spawnNotes({x: -125, y: 100});
    };

    that.kickDrumMouseDown = function(event) {
        this.kickDrumShadow.visible = true;
        createjs.Sound.play('drum-kick');
        this.spawnNotes({x: 135, y: 160});
        createjs.Tween.get(this.kickDrumPedal, {override: true})
            .to({scaleY: 0.925, scaleX: 0.98}, 120)
            .to({scaleY: 1, scaleX: 1}, 120);
        createjs.Tween.get(this.kickDrumNob, {override: true})
            .to({y: 150}, 120)
            .to({y: 160}, 120);
        createjs.Tween.get(this)
            .to();
    };

    that.tomMouseDown = function() {
        this.tomShadow.visible = true;
        createjs.Sound.play('drum-tom');
        this.spawnNotes({x: 255, y: -25});
    };

    that.rightCymbolClicked = function() {
        createjs.Sound.play('drum-right-cymbol');
        this.spawnNotes({x: 165, y: -215});
        createjs.Tween.get(this.rightCymbol, {override: true})
            .to({scaleX: 1.05, scaleY: 1.05}, 40)
            .to({scaleX: 0.98, scaleY: 0.98}, 40)
            .to({scaleX: 1.05, scaleY: 1.05}, 40)
            .to({scaleX: 0.98, scaleY: 0.98}, 40)
            .to({scaleX: 1, scaleY: 1}, 40);
    };

    that.leftCymbolClicked = function() {
        createjs.Sound.play('drum-left-cymbol');
        this.spawnNotes({x: -97, y: -185});
        createjs.Tween.get(this.leftCymbol, {override: true})
            .to({scaleX: 1.05, scaleY: 1.05}, 40)
            .to({scaleX: 0.98, scaleY: 0.98}, 40)
            .to({scaleX: 1.05, scaleY: 1.05}, 40)
            .to({scaleX: 0.98, scaleY: 0.98}, 40)
            .to({scaleX: 1, scaleY: 1}, 40);
    };

    that.spawnNotes = function(point) {
        var mainSpriteSheet = cm.game.mainQueue.getResult('activitySpriteSheet');
        for(var i = 0; i < 15; i++) {
            if(this.noteContainer.children.length < 90) {
                var note = Math.random() > 0.5 ? new createjs.Sprite(mainSpriteSheet, 'drum-set/single-note') : new createjs.Sprite(mainSpriteSheet, 'drum-set/double-note');
                note.x = point.x;
                note.y = point.y;
                note.regX = note.getBounds().width/2;
                note.regY = note.getBounds().height/2;
                note.scaleX = 0.35;
                note.scaleY = 0.35;
                note.visible = false;

                var negativeX = Math.random() > 0.5 ? 1 : -1;
                var negativeY = Math.random() > 0.5 ? 1 : -1;
                var randomX = (Math.random() * negativeX * 50) + (25 * negativeX);
                var randomY = (Math.random() * negativeY * 50) + (25 * negativeY);
                var randomRotation = Math.random() * 360;
                note.x += randomX * 0.5;
                note.y += randomY * 0.5;
                this.noteContainer.addChild(note);

                createjs.Tween.get(note).wait(75*i)
                    .to({visible: true},1)
                    .to({x: note.x + randomX * 0.75, y: note.y + randomY * 0.75, scaleX: 1, scaleY: 1, rotation: randomRotation * 0.75}, 650)
                    .to({x: note.x + randomX, y: note.y + randomY, alpha: 0, visible: false, rotation: randomRotation}, 150)
                    .call(function(params) {
                        this.noteContainer.removeChild(params);
                    }, [note], this);
            }
        }
    };

    that._init(parent);
    return that;
};

CuriousJS.Activity.Guitar = function(parent) {
    var that = new createjs.Container();

    that._init = function(parent) {
        this._parent = parent;
        var mainSpriteSheet = cm.game.mainQueue.getResult('activitySpriteSheet');

        this.base = new createjs.Sprite(mainSpriteSheet, 'guitar/base');
        this.base.x = -385;
        this.base.y = -251;

        this.string1 = new createjs.Sprite(mainSpriteSheet, 'guitar/string');
        var stringBounds = this.string1.getBounds();
        this.string1.x = -231;
        this.string1.y = -90;
        this.string1.hitArea = new createjs.Shape();
        this.string1.hitArea.graphics.beginFill('#ffffff')
            .drawRect(0, -5, stringBounds.width, stringBounds.height + 10);

        this.string2 = new createjs.Sprite(mainSpriteSheet, 'guitar/string');
        this.string2.x = -231;
        this.string2.y = -48;
        this.string2.hitArea = new createjs.Shape();
        this.string2.hitArea.graphics.beginFill('#ffffff')
            .drawRect(0, -5, stringBounds.width, stringBounds.height + 10);
        
        this.string3 = new createjs.Sprite(mainSpriteSheet, 'guitar/string');
        this.string3.x = -230.5;
        this.string3.y = -4;
        this.string3.hitArea = new createjs.Shape();
        this.string3.hitArea.graphics.beginFill('#ffffff')
            .drawRect(0, -5, stringBounds.width, stringBounds.height + 10);

        this.string4 = new createjs.Sprite(mainSpriteSheet, 'guitar/string');
        this.string4.x = -230.5;
        this.string4.y = 37;
        this.string4.hitArea = new createjs.Shape();
        this.string4.hitArea.graphics.beginFill('#ffffff')
            .drawRect(0, -5, stringBounds.width, stringBounds.height + 10);

        cm.game.stage.on('stagemousedown', this.stageMouseDown, this);
        cm.game.stage.on('stagemouseup', this.stageMouseUp, this);

        this.string1.on('mousedown', this.string1MouseDown, this);
        this.string2.on('mousedown', this.string2MouseDown, this);
        this.string3.on('mousedown', this.string3MouseDown, this);
        this.string4.on('mousedown', this.string4MouseDown, this);

        this.string1Played=this.string2Played=this.string3Played=this.string4Played=false;

        this.addChild(this.base, this.string1Color1, this.string1, this.string1Color2, this.string2Color1, this.string2, 
            this.string2Color2, this.string3Color1, this.string3, this.string3Color2, this.string4Color1, this.string4, 
            this.string4Color2);
    };

    that.string1MouseDown = function(event) {
        createjs.Sound.play('guitar1');
        this.animateString(this.string1, 'red', event.stageX, event.stageY);
    };

    that.string2MouseDown = function(event) {
        createjs.Sound.play('guitar2');
        this.animateString(this.string2, 'yellow', event.stageX, event.stageY);
    };

    that.string3MouseDown = function(event) {
        createjs.Sound.play('guitar3');
        this.animateString(this.string3, 'green', event.stageX, event.stageY);
    };

    that.string4MouseDown = function(event) {
        createjs.Sound.play('guitar4');
        this.animateString(this.string4, 'blue', event.stageX, event.stageY);
    };

    that.stageMouseDown = function() {
        if(this.visible)
            this.stageMouseMoveListener = cm.game.stage.on('stagemousemove', this.stageMouseMove, this);
    };

    that.stageMouseMove = function(event) {
        var localPoint = this.globalToLocal(event.stageX, event.stageY);
        if(localPoint.x >= this.string1.x && localPoint.x <= this.string1.x + 747) {
            if(localPoint.y >= this.string1.y && localPoint.y <= this.string1.y + 5) {
                if(!this.string1Played) {
                    this.string1Played=this.string2Played=this.string3Played=this.string4Played=false;
                    this.string1Played=true;
                    createjs.Sound.play('guitar1');
                    this.animateString(this.string1, 'red', event.stageX, event.stageY);
                }
            } else if(localPoint.y >= this.string2.y && localPoint.y <= this.string2.y + 5) {
                if(!this.string2Played) {
                    this.string1Played=this.string2Played=this.string3Played=this.string4Played=false;
                    this.string2Played=true;
                    createjs.Sound.play('guitar2');
                    this.animateString(this.string2, 'yellow', event.stageX, event.stageY);
                }
            } else if(localPoint.y >= this.string3.y && localPoint.y <= this.string3.y + 5) {
                if(!this.string3Played) {
                    this.string1Played=this.string2Played=this.string3Played=this.string4Played=false;
                    this.string3Played=true;
                    createjs.Sound.play('guitar3');
                    this.animateString(this.string3, 'green', event.stageX, event.stageY);
                }
            } else if(localPoint.y >= this.string4.y && localPoint.y <= this.string4.y + 5) {
                if(!this.string4Played) {
                    this.string1Played=this.string2Played=this.string3Played=this.string4Played=false;
                    this.string4Played=true;
                    createjs.Sound.play('guitar4');
                    this.animateString(this.string4, 'blue', event.stageX, event.stageY);
                }
            } else {
                this.string1Played=this.string2Played=this.string3Played=this.string4Played=false;
            }
        }
    };

    that.animateString = function(string, stringColor, globalX, globalY) {
        var mainSpriteSheet = cm.game.mainQueue.getResult('activitySpriteSheet');
        var localPoint = this.globalToLocal(globalX, globalY);
        var stringBounds = string.getBounds();
        var stringLocalPoint = string.localToLocal(stringBounds.x, stringBounds.y, this);

        createjs.Tween.get(string, {override: true})
            .to({scaleY: 1.25}, 50)
            .to({scaleY: 0.75}, 50)
            .to({scaleY: 1.25}, 50)
            .to({scaleY: 0.75}, 50)
            .to({scaleY: 1.25}, 50)
            .to({scaleY: 0.75}, 50)
            .to({scaleY: 1.25}, 50)
            .to({scaleY: 0.75}, 50)
            .to({scaleY: 1.25}, 50)
            .to({scaleY: 0.75}, 50)
            .to({scaleY: 1.25}, 50)
            .to({scaleY: 1}, 50);

        var stringColor1 = new createjs.Sprite(mainSpriteSheet, 'guitar/guitar-vibe-'+stringColor);
        stringColor1.regX = stringColor1.getBounds().width/2;
        stringColor1.regY = stringColor1.getBounds().height/2;
        stringColor1.x = localPoint.x;
        stringColor1.y = string.y + 4;
        stringColor1.scaleX = 0.2;
        stringColor1.mask = new createjs.Shape();
        stringColor1.mask.graphics.beginFill('#ffffff')
            .drawRect(stringLocalPoint.x, stringLocalPoint.y - 50, stringBounds.width, stringBounds.height + 100);
        this.addChildAt(stringColor1, this.getChildIndex(string));

        createjs.Tween.get(stringColor1)
            .to({scaleX: 5, scaleY: 0, alpha: 0}, 1000, createjs.Ease.cubicInOut);

        var stringColor2 = new createjs.Sprite(mainSpriteSheet, 'guitar/guitar-vibe-'+stringColor+'-white');
        stringColor2.regX = stringColor2.getBounds().width/2;
        stringColor2.regY = stringColor2.getBounds().height/2;
        stringColor2.x = localPoint.x;
        stringColor2.y = string.y + 4;
        stringColor2.scaleX = 0.2;
        stringColor2.scaleY = 2;
        stringColor2.mask = new createjs.Shape();
        stringColor2.mask.graphics.beginFill('#ffffff')
            .drawRect(stringLocalPoint.x, stringLocalPoint.y - 50, stringBounds.width, stringBounds.height + 100);
        this.addChildAt(stringColor2, this.getChildIndex(string)+1);

        createjs.Tween.get(stringColor2)
            .to({scaleX: 10, scaleY: 0, alpha: 0}, 1000, createjs.Ease.cubicInOut);
    };

    that.stageMouseUp = function() {
        if(this.visible)
            cm.game.stage.off('stagemousemove', this.stageMouseMoveListener);
    };

    that._init(parent);
    return that;
};

