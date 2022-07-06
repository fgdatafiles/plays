CuriousJS.MusicShop.Instruments = function(parent) {
    var that = new createjs.Container();

    that._init = function(parent) {
        this._parent = parent;

        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');
        
        this.tambourine = new CuriousJS.MusicShop.Instrument(this, 'tambourine', 239, -112);
        this.purpleHorn = new CuriousJS.MusicShop.Instrument(this, 'purple-horn', 219, -61);
        this.trombone = new CuriousJS.MusicShop.Instrument(this, 'trombone', 171, 0);
        this.maracas = new CuriousJS.MusicShop.Instrument(this, 'maracas', 121, 56);
        this.acousticGuitar = new CuriousJS.MusicShop.Instrument(this, 'acoustic-guitar', 114, -63);
        this.bugle = new CuriousJS.MusicShop.Instrument(this, 'bugle', 37, -110);
        this.violin = new CuriousJS.MusicShop.Instrument(this, 'violin', 16, -11);
        this.sax = new CuriousJS.MusicShop.Instrument(this, 'sax', -45, -53);
        this.triangle = new CuriousJS.MusicShop.Instrument(this, 'triangle', -95, -17);
        this.snare = new CuriousJS.MusicShop.Instrument(this, 'snare', -160, -23);
        this.mandolin = new CuriousJS.MusicShop.Instrument(this, 'mandolin', -213, -86);
        this.trumpet = new CuriousJS.MusicShop.Instrument(this, 'trumpet', -350, 120);
        this.guitar = new CuriousJS.MusicShop.Instrument(this, 'guitar', -588, 92);

        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.doorbell1 = new CuriousJS.MusicShop.Doorbell(this, 'doorbell1', 425, -115);
        this.doorbell2 = new CuriousJS.MusicShop.Doorbell(this, 'doorbell2', 398, -127);
        this.doorbell3 = new CuriousJS.MusicShop.Doorbell(this, 'doorbell3', 362, -124);
        this.doorbell4 = new CuriousJS.MusicShop.Doorbell(this, 'doorbell4', 338, -109);

        this.piano = new CuriousJS.MusicShop.Piano(this, 'piano', 210, 20);

        this.clock = new CuriousJS.MusicShop.Clock(this, 'clock', -111, -98);

        this.speaker = new CuriousJS.MusicShop.Speaker(this, 'speaker', -755, -124);

        this.cashRegister = new CuriousJS.MusicShop.CashRegister(this, 'cash-register', 260, 135);

        this.stool = new CuriousJS.MusicShop.Stool(this, 'stool', 169, 93);

        this.xylophone = new CuriousJS.MusicShop.Xylophone(this, 'xylophone', -140, 100);

        this.bongos = new CuriousJS.MusicShop.Bongos(this, 'bongos', -260, 50);

        this.addChild(this.tambourine, this.purpleHorn, this.trombone, this.maracas, this.acousticGuitar, 
            this.bugle, this.violin, this.sax, this.triangle, this.snare, this.mandolin, this.trumpet, 
            this.guitar, this.doorbell1, this.doorbell2, this.doorbell3, this.doorbell4, this.piano, 
            this.clock, this.speaker, this.cashRegister, this.xylophone, this.bongos, this.stool);
    };

    that._init(parent);
    return that;
};

CuriousJS.MusicShop.Instrument = function(parent, name, x, y) {
    var that = new createjs.Container();

    that._init = function(parent, name, x, y) {
        this._parent = parent;
        this.name = name;
        this.x = this.originalX = x;
        this.y = this.originalY = y;
        this.newPoint = new createjs.Point();
        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.dragging = this.sticking = false;

        this.sprite = new createjs.Sprite(mainSpriteSheet, 'instruments/' + this.name);
        if(typeof mainSpriteSheet.getAnimation('instruments/' + this.name + '-hitbox') !== 'undefined') {
            this.sprite.hitArea = new createjs.Sprite(mainSpriteSheet, 'instruments/' + this.name + '-hitbox');
        }

        this.addChild(this.sprite);

        this.setMidPoint();

        this.on('mousedown', this.mouseDown, this);
        this.on('pressmove', this.pressMove, this);
        this.on('pressup', this.pressUp, this);
        this.on('tick', this.update, this);
    };

    that.update = function() {
        if(this.sticking) {
            this.parent.globalToLocal(cm.game.stage.mouseX, cm.game.stage.mouseY, this.newPoint);
            createjs.Tween.get(this, {override: true})
                .to({x: this.newPoint.x, y: this.newPoint.y}, 120);
        }
    };

    that.setMidPoint = function() {
        var bounds = this.sprite.getBounds();
        this.regX = bounds.width/2;
        this.regY = bounds.height/2;
    };

    that.mouseDown = function(event) {
        this.sticking = false;
        if(this.parent.rightInstrument === this) {
            this.parent.rightInstrument = null;
        } else if(this.parent.leftInstrument === this) {
            this.parent.leftInstrument = null;
        }
        var newPoint = this.parent.localToLocal(this.x, this.y, this._parent._parent.topContainer);
        this._parent._parent.topContainer.addChild(this);
        this.x = newPoint.x;
        this.y = newPoint.y;
        createjs.Tween.get(this)
            .to({scaleX: 1.1, scaleY: 1.1}, 120)
            .call(this.setMidPoint, null, this);
    };

    that.pressMove = function(event) {
        this.dragging = true;
        this.parent.globalToLocal(event.stageX, event.stageY, this.newPoint);
        createjs.Tween.get(this, {override: true})
            .to({x: this.newPoint.x, y: this.newPoint.y}, 120);
    };

    that.pressUp = function (event) {
        if(this.dragging || CuriousJS.Game.IsMobile.any()) {
            this.dragging = false;
            this.sticking = false;
            var firstPoint = this.parent.localToLocal(this.x, this.y, this._parent);
            this._parent.addChildAt(this, this._parent.children.length - 1);
            this.x = firstPoint.x;
            this.y = firstPoint.y;
            if(this.checkIfOverWallSlot()) {
                
            } else if(this.checkIfOverCharacter()){
                createjs.Tween.get(this)
                    .to({scaleX: 0.8, scaleY: 0.8}, 120)
                    .call(this.setMidPoint, null, this);
            } else if(this.checkIfOverStage()){

            } else {
                var newPoint = this.parent.localToLocal(this.x, this.y, this._parent._parent.floor);
                this.x = newPoint.x;
                this.y = newPoint.y;
                this._parent._parent.floor.customAddChild(this);
                if(this.y < this.parent.lowestFloorY) {
                    createjs.Tween.get(this, {override: true})
                        .to({scaleX: 1, scaleY: 1, y: this.parent.lowestFloorY}, 120)
                        .call(this.setMidPoint, null, this);
                } else {
                    createjs.Tween.get(this, {override: true})
                        .to({scaleX: 1, scaleY: 1}, 120)
                        .call(this.setMidPoint, null, this);
                }
            }
        } else {
            this.sticking = this.dragging = true;
        }
    };

    that.checkIfOverWallSlot = function() {
        if(this.originalX - this.x <= 40 && this.originalX - this.x >= -40 && 
           this.originalY - this.y <= 40 && this.originalY - this.y >= -40) {
            createjs.Tween.get(this, {override: true})
                .to({x: this.originalX, y: this.originalY, scaleX: 1, scaleY: 1}, 120);
            return true;
        }
        return false;
    };

    that.checkIfOverCharacter = function() {
        for(var i = this._parent._parent.floor.children.length-1; i >= 0; i--) {
            if(typeof this._parent._parent.floor.children[i].slotIntoTray != 'undefined') {
                var character = this._parent._parent.floor.children[i];
                var instrumentGlobalPoint = this.localToGlobal(this.x, this.y);
                var instrumentLocalPoint = this.globalToLocal(instrumentGlobalPoint.x, instrumentGlobalPoint.y);
                var characterBounds = character.getBounds();

                var rightX = character.x + characterBounds.width - character.regX;
                var leftX = character.x - character.regX;
                var topY = character.y - character.regY;
                var bottomY = character.y + characterBounds.height - character.regY;

                if(instrumentLocalPoint.x <= rightX && instrumentLocalPoint.x >= leftX && 
                   instrumentLocalPoint.y <= bottomY && instrumentLocalPoint.y >= topY) {
                    this.playSound();
                    character.slotInstrument(this);
                    return true;
                }
            }
        }
        for(var i = this._parent._parent.musicStage.innerContainer.children.length - 1; i >= 0; i--) {
            if(typeof this._parent._parent.musicStage.innerContainer.children[i].slotIntoTray != 'undefined') {
                var character = this._parent._parent.musicStage.innerContainer.children[i];
                var instrumentGlobalPoint = this.localToGlobal(this.x, this.y);
                var instrumentLocalPoint = this.globalToLocal(instrumentGlobalPoint.x, instrumentGlobalPoint.y);
                var characterBounds = character.getBounds();

                var rightX = character.x + characterBounds.width - character.regX;
                var leftX = character.x - character.regX;
                var topY = character.y - character.regY;
                var bottomY = character.y + characterBounds.height - character.regY;

                if(instrumentLocalPoint.x <= rightX && instrumentLocalPoint.x >= leftX && 
                   instrumentLocalPoint.y <= bottomY && instrumentLocalPoint.y >= topY) {
                    this.playSound();
                    character.slotInstrument(this);
                    return true;
                }
            }
        }
        return false;
    };

    that.checkIfOverStage = function() {
        var musicStage = this._parent._parent.musicStage;
        var stagePoint = this.parent.localToLocal(this.x, this.y, musicStage);
        if(stagePoint.x < -340 && stagePoint.x > -600 && stagePoint.y < 100 && stagePoint.y > -150) {
            musicStage.slotInstrument(this);
            return true;
        }
        return false;
    };

    that.unslotFromCharacter = function() {
        var newPoint = this.parent.localToLocal(this.x, this.y, this._parent._parent.floor);
        this._parent._parent.floor.customAddChild(this);
        this.x = newPoint.x;
        this.y = newPoint.y;
        createjs.Tween.get(this, {override: true})
            .to({scaleX: 1, scaleY: 1, y: this._parent._parent.floor.instrumentDropY}, 120)
            .call(this.setMidPoint, null, this);
    };

    that.playSound = function() {
        createjs.Sound.play(this.name);
    };

    that._init(parent, name, x, y);
    return that;
};

CuriousJS.MusicShop.Piano = function(parent, name, x, y) {
    var that = new createjs.Container();

    that._init = function(parent, name, x, y) {
        this._parent = parent;
        this.name = name;
        this.x = x;
        this.y = y;

        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.hitArea = new createjs.Shape();
        this.hitArea.graphics.beginFill('#ffffff')
            .drawRect(0, 0, 115, 65);
        this.cursor = 'pointer';

        this.musicPage = new createjs.Sprite(cm.game.mainQueue.getResult('musicPageTurn'), "stop");
        this.musicPage.x = 39;
        this.musicPage.y = -5;

        var keyPositions = [
            {x: 0, y: 57},
            {x: 6, y: 57},
            {x: 12, y: 57},
            {x: 18, y: 57},
            {x: 24, y: 57},
            {x: 30, y: 57},
            {x: 36, y: 57},
            {x: 42, y: 57.5},
            {x: 48, y: 58},
            {x: 54, y: 58},
            {x: 60, y: 58},
            {x: 66, y: 58},
            {x: 72, y: 58}
        ]
        this.pianoKeys = [];

        for(var i = 0; i < keyPositions.length; i++) {
            var pianoKey = new createjs.Sprite(mainSpriteSheet, 'piano-key-down');
            pianoKey.x = keyPositions[i].x;
            pianoKey.y = keyPositions[i].y;
            pianoKey.visible = false;
            this.addChild(pianoKey);
            this.pianoKeys.push(pianoKey);
        }

        this.soundIndex = 1;
        this.soundInstance = null;
        this.playAnimation = false;

        this.on('click', this.clicked, this);

        this.keyTimer = createjs.Tween.get(this, {loop: true}).wait(750).call(this.animateKeys, null, this);

        this.addChild(this.musicPage);
    };

    that.clicked = function(event) {
        if(this.soundInstance != null) {
            this.soundInstance.stop();
            this.soundInstance = null;
            this.playAnimation = false;
        } else {
            this.soundInstance = createjs.Sound.play(this.name + this.soundIndex);
            this.soundInstance.on('complete', function() {
                this.soundInstance = null;
                this.playAnimation = false;
            }, this);
            this.soundIndex++;
            if(this.soundIndex > 3) {
                this.soundIndex = 1;
            }
            this.playAnimation = true;
            this.musicPage.gotoAndPlay('turn');
        }
    };

    that.animateKeys = function() {
        for(var i = 0; i < this.pianoKeys.length; i++) {
            this.pianoKeys[i].visible = false;
        }
        if(this.playAnimation) {
            var randNumKeys = Math.round(Math.random() * (this.pianoKeys.length / 2));
            for(var j = 0; j < randNumKeys; j++) {
                var randIndex = Math.round(Math.random() * (this.pianoKeys.length - 1));
                this.pianoKeys[randIndex].visible = true;
            }
        }
    };

    that._init(parent, name, x, y);
    return that;
};

CuriousJS.MusicShop.CashRegister = function(parent, name, x, y) {
    var that = new createjs.Container();

    that._init = function(parent, name, x, y) {
        this._parent = parent;
        this.name = name;
        this.x = x;
        this.y = y;
        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.table = new createjs.Sprite(mainSpriteSheet, 'front-desk');
        this.table.x = 0;
        this.table.y = 74;

        this.cashRegister = new createjs.Sprite(mainSpriteSheet, 'cash-register');
        this.cashRegister.x = 110;
        this.cashRegister.y = 8;

        this.cashRegisterArm = new createjs.Sprite(mainSpriteSheet, 'cash-register-lever');
        this.cashRegisterArm.regX = 23;
        this.cashRegisterArm.regY = 63;
        this.cashRegisterArm.x = 121;
        this.cashRegisterArm.y = 63;

        this.hitArea = new createjs.Shape();
        this.hitArea.graphics.beginFill('#ffffff')
            .drawRect(this.cashRegisterArm.x - 25 - this.cashRegisterArm.regX, 
                this.cashRegisterArm.y - 5 - this.cashRegisterArm.regY, 
                this.cashRegisterArm.getBounds().width + 75, this.cashRegisterArm.getBounds().height + 10);
        this.cursor = 'pointer';

        this.on('mousedown', this.mouseDown, this);
        this.on('pressmove', this.pressMove, this);
        this.on('pressup', this.pressUp, this);

        this.addChild(this.table, this.cashRegister, this.cashRegisterArm);
    };

    that.mouseDown = function(event) {
        this.startX = event.stageX;
        this.startY = event.stageY;
    };

    that.pressMove = function(event) {
        var distX = Math.abs(this.startX - event.stageX);
        var distY = Math.abs(this.startY - event.stageY);
        var percentage = (distX + distY) / 100;
        var newRotation = 90 * percentage;
        if(newRotation > 90) {
            newRotation = 90;
        } else if(newRotation < 0) {
            newRotation = 0;
        }
        createjs.Tween.get(this.cashRegisterArm, {override: true})
            .to({rotation: newRotation}, 30);
    };

    that.pressUp = function(event) {
        createjs.Sound.play(this.name);
        createjs.Tween.get(this.cashRegisterArm, {override: true})
            .to({rotation: 0}, 250);
    };

    that._init(parent, name, x, y);
    return that;
};

CuriousJS.MusicShop.Xylophone = function(parent, name, x, y) {
    var that = new createjs.Container();

    that._init = function(parent, name, x, y) {
        this._parent = parent;
        this.name = name;
        this.x = x;
        this.y = y;

        this.hitArea = new createjs.Shape();
        this.hitArea.graphics.beginFill('#A9FF8C')
            .drawRect(0, 0, 150, 65);
        this.cursor = 'pointer';

        this.soundInstance = null;

        this.on('click', this._parent._parent.activitySign.signClicked, this._parent._parent.activitySign);
    };

    that.clicked = function(event) {
        if(this.soundInstance != null) {
            this.soundInstance.stop();
            this.soundInstance = null;
        } else {
            this.soundInstance = createjs.Sound.play(this.name);
            this.soundInstance.on('complete', function() {
                this.soundInstance = null;
            }, this);
        }
    };

    that._init(parent, name, x, y);
    return that;
};

CuriousJS.MusicShop.Bongos = function(parent, name, x, y) {
    var that = new createjs.Container();

    that._init = function(parent, name, x, y) {
        this._parent = parent;
        this.name = name;
        this.x = x;
        this.y = y;

        this.hitArea = new createjs.Shape();
        this.hitArea.graphics.beginFill('#A9FF8C')
            .drawRect(0, 0, 70, 105);
        this.cursor = 'pointer';

        this.soundInstance = null;

        this.on('click', this.clicked, this);
    };

    that.clicked = function(event) {
        if(this.soundInstance != null) {
            this.soundInstance.stop();
            this.soundInstance = null;
        } else {
            this.soundInstance = createjs.Sound.play(this.name);
            this.soundInstance.on('complete', function() {
                this.soundInstance = null;
            }, this);
        }
    };

    that._init(parent, name, x, y);
    return that;
};

CuriousJS.MusicShop.Speaker = function(parent, name, x, y) {
    var that = new createjs.Container();

    that._init = function(parent, name, x, y) {
        this._parent = parent;
        this.name = name;
        this.x = x;
        this.y = y;

        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');
        this.sprite = new createjs.Sprite(mainSpriteSheet, this.name);
        this.addChild(this.sprite);
        this.sprite.cursor = 'pointer';

        // this.sprite.regX = 71;
        this.sprite.regY = 65;

        this.soundInstance = null;
        this.soundIndex = 1;

        this.sprite.on('click', this.clicked, this);
    };

    that.clicked = function(event) {
        if(this.soundInstance != null) {
            this.soundInstance.stop();
            this.soundInstance = null;
            this.stopAnimation();
        } else {
            this.soundInstance = createjs.Sound.play(this.name + this.soundIndex, {loop: -1});
            this.anmiateSpeaker();
            this.soundIndex++;
            if(this.soundIndex > 3) {
                this.soundIndex = 1;
            }
        }
    };

    that.anmiateSpeaker = function() {
        createjs.Tween.get(this.sprite, {override: true, loop: true})
            .to({scaleY: 1.06}, 100)
            .to({scaleY: 0.94}, 100);
    };

    that.stopAnimation = function() {
        createjs.Tween.get(this.sprite, {override: true})
            .to({scaleY: 1}, 120);
    };

    that._init(parent, name, x, y);
    return that;
};

CuriousJS.MusicShop.Doorbell = function(parent, name, x, y) {
    var that = new createjs.Container();

    that._init = function(parent, name, x, y) {
        this._parent = parent;
        this.name = name;
        this.x = x;
        this.y = y;
        this.regX = 12;
        this.regY = 4;

        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');
        this.sprite = new createjs.Sprite(mainSpriteSheet, 'instruments/doorbell');
        this.addChild(this.sprite);

        this.soundInstance = null;

        // this.sprite.on('mouseover', this.mouseOver, this);
        cm.game.stage.on('stagemousemove', this.stageMouseMove, this);
        this.sprite.on('click', this.mouseOver, this);
    };

    that.mouseOver = function(event) {
        this.soundInstance = createjs.Sound.play(this.name);
        this.soundInstance.on('complete', function() {
            this.soundInstance = null;
        }, this);
        this.animateBell();
    };

    that.stageMouseMove = function(event) {
        var localPoint = this.parent.globalToLocal(event.stageX, event.stageY);
        if( this.soundInstance == null &&
            localPoint.x >= this.x &&
            localPoint.x <= this.x + (this.sprite.getBounds().width - this.regX) &&
            localPoint.y >= this.y &&
            localPoint.y <= this.y + (this.sprite.getBounds().height - this.regY)
          ) {
            this.soundInstance = createjs.Sound.play(this.name);
            this.soundInstance.on('complete', function() {
                this.soundInstance = null;
            }, this);
            this.animateBell();
        }
    };

    that.animateBell = function() {
        createjs.Tween.get(this, {override: true})
            .to({rotation: 30}, 150)
            .to({rotation: -30}, 150)
            .to({rotation: 30}, 150)
            .to({rotation: -30}, 150)
            .to({rotation: 30}, 150)
            .to({rotation: -30}, 150)
            .to({rotation: 0}, 150);
    };

    that._init(parent, name, x, y);
    return that;
};

CuriousJS.MusicShop.Clock = function(parent, name, x, y) {
    var that = new createjs.Container();

    that._init = function(parent, name, x, y) {
        this._parent = parent;
        this.name = name;
        this.x = x;
        this.y = y;
        this.cursor = 'pointer';

        this.hitArea = new createjs.Shape();
        this.hitArea.graphics.beginFill('#ffffff')
            .drawRect(-25, -25, 50, 50);

        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.clockHand1 = new createjs.Sprite(mainSpriteSheet, 'clock-arrow');
        this.clockHand1.regX = this.clockHand1.getBounds().width / 2;
        this.clockHand1.regY = this.clockHand1.getBounds().height - 1;
        this.clockHand1.scaleY = 1.25;

        this.clockHand2 = new createjs.Sprite(mainSpriteSheet, 'clock-arrow');
        this.clockHand2.regX = this.clockHand2.getBounds().width / 2;
        this.clockHand2.regY = this.clockHand2.getBounds().height - 1;
        this.clockHand2.rotation = 90;

        this.on('click', this.clicked, this);

        this.addChild(this.clockHand1, this.clockHand2);
    };

    that.clicked = function() {
        createjs.Sound.play('clockSound');
        createjs.Tween.get(this.clockHand1, {override:true})
            .to({rotation: 360}, 500)
            .call(function() {
                this.clockHand1.rotation = 0;
            }, null, this);
        createjs.Tween.get(this.clockHand2)
            .to({rotation: this.clockHand2.rotation + 30}, 500);
    };

    that._init(parent, name, x, y);
    return that;
};

CuriousJS.MusicShop.Stool = function(parent, name, x, y) {
    var that = new createjs.Container();
    that.name = name;
    that.x = x;
    that.y = y;

    that._init = function(parent) {
        this._parent = parent;
        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.sprite = new createjs.Sprite(mainSpriteSheet, 'stool');

        this.sprite.on('pressmove', this.spritePressMove, this);

        this.sitPoint = {x: 34, y: 6};
        this.minX = 25;
        this.maxX = this.x;

        this.addChild(this.sprite);
    };

    that.spriteMouseDown = function() {

    };

    that.spritePressMove = function(event) {
        var newPoint = this.parent.globalToLocal(event.stageX, event.stageY);
        if(newPoint.x > this.maxX) {
            newPoint.x = this.maxX;
        } else if(newPoint.x < this.minX) {
            newPoint.x = this.minX;
        }
        createjs.Tween.get(this, {override: true})
            .to({x: newPoint.x}, 120);
    };

    that.spritePressUp = function() {

    };

    that.slotCharacter = function(character) {
        var newPoint = character.parent.localToLocal(character.x, character.y, this);
        this.addChild(character);
        character.x = newPoint.x;
        character.y = newPoint.y;

        createjs.Tween.get(character, {override: true})
            .to({x: this.sitPoint.x + character.sitPoint.x, y: this.sitPoint.y + character.sitPoint.y}, 250);
    };

    that._init(parent);
    return that;
};

