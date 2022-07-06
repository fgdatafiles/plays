CuriousJS.MusicShop.Stage = function(parent) {
    var that = new createjs.Container();

    that._init = function(parent) {
        this._parent = parent;

        mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.innerContainer = new createjs.Container();

        this.front = new createjs.Sprite(mainSpriteSheet, 'stage/stage-front');
        this.front.x = -687;
        this.front.y = -230;

        this.curtains = new createjs.Sprite(mainSpriteSheet, 'stage/stage-curtains');
        this.curtains.x = -640;
        this.curtains.y = -182;
        this.curtains.scaleY = 0;

        this.pullRope = new createjs.Sprite(mainSpriteSheet, 'rope-pull');
        this.pullRope.x = -592;
        this.pullRope.y = -210;
        this.pullRope.hitArea = new createjs.Shape();
        this.pullRope.hitArea.graphics.beginFill('#fff').drawRect(-20, 24, 
            this.pullRope.getBounds().width + 40, this.pullRope.getBounds().height + 10);
        this.pullRope.mask = new createjs.Shape();
        this.pullRope.mask.graphics.drawRect(this.pullRope.x, this.pullRope.y + 34, 
            this.pullRope.getBounds().width, this.pullRope.getBounds().height);
        this.pullRope.cursor = 'pointer';
        this.pullRope.on('click', this.pullRopeClicked, this);

        this.lights = new createjs.Sprite(mainSpriteSheet, 'stage/stage-lights');
        this.lights.x = -525;
        this.lights.y = -213;
        this.lights.turnedOn = false;
        this.lights.on('click', this.lightsClicked, this);

        this.light1 = new createjs.Sprite(mainSpriteSheet, 'stage/stage-light-beam');
        this.light1.scaleX = this.light1.scaleY = 0.8;
        this.light1.x = -445;
        this.light1.y = -135;
        this.light1.rotation = -45;
        this.light1.alpha = 0;
        this.light1.visible = false;
        this.light2 = new createjs.Sprite(mainSpriteSheet, 'stage/stage-light-beam');
        this.light2.scaleX = this.light2.scaleY = 0.8;
        this.light2.x = -510;
        this.light2.y = -158;
        this.light2.alpha = 0;
        this.light2.visible = false;
        this.light3 = new createjs.Sprite(mainSpriteSheet, 'stage/stage-light-beam');
        this.light3.scaleX = this.light3.scaleY = 0.8;
        this.light3.x = -541;
        this.light3.y = -215;
        this.light3.rotation = 45;
        this.light3.alpha = 0;
        this.light3.visible = false;

        this.mobileRope = new createjs.Sprite(mainSpriteSheet, 'mobile-rope');
        this.mobileRope.x = -457;
        this.mobileRope.y = -210;

        this.mobile = new CuriousJS.MusicShop.Mobile(this, -512, -149);

        this.floorPoint = 97;

        this.addChild(this.mobileRope, this.mobile, this.innerContainer, this.lights, this.light1, this.light2, 
            this.light3, this.curtains, this.front, this.pullRope);
    };

    that.pullRopeClicked = function() {
        createjs.Tween.get(this.pullRope, {override: true})
            .to({y: -180}, 400)
            .to({y: -210}, 400);
        if(this.curtains.scaleY > 0) {
            createjs.Tween.get(this.curtains, {override: true})
                .to({scaleY: 0}, 800);
        } else {
            createjs.Tween.get(this.curtains, {override: true})
                .to({scaleY: 1}, 800);
        }
    };

    that.lightsClicked = function() {
        if(this.lights.turnedOn) {
            this.lights.turnedOn = false;
            createjs.Tween.get(this.light1, {override: true})
                .to({alpha: 0, visible: false}, 100);
            createjs.Tween.get(this.light2, {override: true})
                .to({alpha: 0, visible: false}, 100);
            createjs.Tween.get(this.light3, {override: true})
                .to({alpha: 0, visible: false}, 100);
        } else {
            this.lights.turnedOn = true;
            createjs.Tween.get(this.light1, {override: true, loop: true})
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500);

            createjs.Tween.get(this.light2, {override: true, loop: true})
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500);

            createjs.Tween.get(this.light3, {override: true, loop: true})
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 0, visible: false}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500)
                .to({alpha: 1, visible: true}, 100)
                .wait(500);
        }
    };

    that.slotInstrument = function(instrument) {
        var newPoint = instrument.parent.localToLocal(instrument.x, instrument.y, this.innerContainer);
        this.innerContainer.addChild(instrument);
        instrument.x = newPoint.x;
        instrument.y = newPoint.y;
        createjs.Tween.get(instrument)
            .to({scaleX: 0.9, scaleY: 0.9, y: this.floorPoint - instrument.regY}, 200);
    };

    that.slotCharacter = function(character) {
        var newPoint = character.parent.localToLocal(character.x, character.y, this.innerContainer);
        this.innerContainer.addChild(character);
        character.x = newPoint.x;
        character.y = newPoint.y;
        createjs.Tween.get(character)
            .to({scaleX: 0.9, scaleY: 0.9, y: this.floorPoint - character.regY}, 200);
    };

    that._init(parent);
    return that;
}

CuriousJS.MusicShop.Mobile = function(parent, x, y) {
    var that = new createjs.Container();
    that.x = x;
    that.y = y;

    that._init = function(parent) {
        this._parent = parent;
        var mobileSpriteSheet = cm.game.mainQueue.getResult('mobileSpriteSheet');

        this.sprite = new createjs.Sprite(mobileSpriteSheet);
        this.sprite.gotoAndStop('stop');
        this.sprite.on('click', this.clicked, this);

        this.sprite.hitArea = new createjs.Shape();
        this.sprite.hitArea.graphics.beginFill('#ffffff')
            .drawRect(0, 0, this.sprite.getBounds().width, this.sprite.getBounds().height + 25);
        this.cursor = 'pointer';

        this.addChild(this.sprite);
    };

    that.clicked = function() {
        this.sprite.gotoAndPlay('bounce');
        createjs.Sound.play('mobileSound');
    };

    that._init(parent);
    return that;
}

