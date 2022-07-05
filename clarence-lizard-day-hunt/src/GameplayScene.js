//--------------------------------------------------------------------------------------------------------------------------------------------------------

var g_action = null;
var ActionLayer = cc.Layer.extend({
	lizards:null,
	masks:null,
    character:null,
    easterEggs:null,
    puffs:null,

    spawnTimer:null,

    ctor:function () {
        this._super();

        g_action = this;

        this.setCascadeColorEnabled(true);

        var stage = gg.gameplay.stage;
        //stage = 2; // debug stage

        // Background
        var background = new cc.Sprite("res/bg_stage" + stage + ".png");
        background.setPosition(gg.anchor.center);
        this.addChild(background, 0);

        // Lizards
        var lizardBatchNode = new cc.SpriteBatchNode("res/lizards.png");
        lizardBatchNode.setCascadeColorEnabled(true);
        this.addChild(lizardBatchNode, 2);

        this.lizards = [];
        for (var i = 0; i < sd[stage].lizards.length; i++) {
            var lizardData = sd[stage].lizards[i];
            var lizard = null;
            switch (lizardData.type) {
                case gg.lizard.type.holezard:
                lizard = new Holezard(lizardData);
                break;
                case gg.lizard.type.groundzard:
                lizard = new Groundzard(lizardData);
                break;
                case gg.lizard.type.wallzard:
                lizard = new Wallzard(lizardData);
                break;
            }
            lizard.hide();
            this.lizards.push(lizard);
            lizardBatchNode.addChild(lizard);
        }

        // Masks
        var maskBatchNode = new cc.SpriteBatchNode("res/masks.png");
        maskBatchNode.setCascadeColorEnabled(true);
        this.addChild(maskBatchNode, 3);

        this.masks = [];
        for (var i = 0; i < sd[stage].masks.length; i++) {
            var mask = new Mask(stage, i + 1, sd[stage].masks[i]);
            this.masks.push(mask);
            maskBatchNode.addChild(mask);
        }

        // Character
        this.character = new Character(stage, sd[stage].character);
        this.addChild(this.character, 4);

        // Easter Egg
        this.easterEggs = [];
        switch (stage) {
            case 0:
            var chips = new Chips();
            chips.setPosition(960, 154);
            this.addChild(chips, 1);
            this.easterEggs.push(chips);

            var flies = new Flies();
            flies.setPosition(1070, 342);
            flies.visible = false;
            this.addChild(flies, 4);
            this.easterEggs.push(flies);
            break;
            case 1:
            var crack = new Crack();
            crack.setPosition(844, 300);
            crack.visible = false;
            this.addChild(crack, 4);
            this.easterEggs.push(crack);

            var tail = new Tail();
            tail.setPosition(920, 60);
            this.addChild(tail, 4);
            this.easterEggs.push(tail);
            break;
            case 2:
            var pinwheel = new Pinwheel();
            pinwheel.setPosition(878, 105);
            this.addChild(pinwheel, 4);
            this.easterEggs.push(pinwheel);

            var sprinkle = new Sprinkle();
            sprinkle.setPosition(1000, 60);
            sprinkle.visible = false;
            this.addChild(sprinkle, 4);
            this.easterEggs.push(sprinkle);
            break;
        }

        // Puff
        var puffBatchNode = new cc.SpriteBatchNode("res/fx.png");
        this.addChild(puffBatchNode, 5);

        this.puffs = [];
        for (var i = 0; i < 6; i++) {
            var puff = new Puff();
            puff.hide();
            puffBatchNode.addChild(puff);
            this.puffs.push(puff);
        }

        // Event Manager
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan
        }, this);
    },

    init:function () {
        this.runAction(cc.tintTo(60, gg.gameplay.tint.night.r, gg.gameplay.tint.night.g, gg.gameplay.tint.night.b).easing(cc.easeSineIn()));

        this.character.idle();

        this.spawnTimer = 0;
    },

    onTouchBegan:function (touch, event) {
        var target = event.getCurrentTarget();

        target.touchOnEasterEgg(touch.getLocation());

        // debug mask blocking
        if (target.touchOnMask(touch.getLocation())) {
            return;
        }

        target.touchOnLizard(touch.getLocation());

    	return true;
    },

    touchOnEasterEgg:function (touchPos) {
        for (var i in this.easterEggs) {
            var easterEgg = this.easterEggs[i];
            if (easterEgg.active && cc.rectContainsPoint(easterEgg.collideRect, touchPos)) {
                easterEgg.trigger();
            }
        }
    },

    touchOnMask:function (touchPos) {
        for (var i in this.masks) {
            var mask = this.masks[i];
            if (cc.rectContainsPoint(mask.collideRect, touchPos)) {
                 return true;
            }
        }

        return false;
    },

    touchOnLizard:function (touchPos) {
        for (var i in this.lizards) {
            var lizard = this.lizards[i];
            if (lizard.active && cc.rectContainsPoint(lizard.collideRect(), touchPos)) {
                lizard.hide();

                this.createPuff(lizard.getPosition());

                g_gameplay.increaseCounter();

                gg.gameplay.totalCounter++;

                return;
            }
        }
    },

    spawnLizard:function () {
    	var spawnCount = gg.gameplay.spawnCounts[g_gameplay.dayTimer <= gg.gameplay.day.half ? 0 : 1];
    	for (var i = 0; i < spawnCount; i++) {
    		var lizard = null;
    		do {
    			var random = Tools.random(0, 9);
                //random = 1; // debug random lizard
    			lizard = this.lizards[random];
    		} while (lizard.active);

    		lizard.spawn();
    	}
    },

    catchLizard:function (lizard) {
    	lizard.hit();
    	g_gameplay.increaseCounter();
    },

    createPuff:function (pos) {
        for (var i in this.puffs) {
            var puff = this.puffs[i];
            if (!puff.active) {
                puff.setPosition(pos);
                puff.show();
                return;
            }
        }
    },

    update:function (dt) {
        // Spawn Timer
        if (this.spawnTimer < 3) {
            this.spawnTimer += dt;
        } else {
            this.spawnTimer = 0;
            this.spawnLizard();
        }

        // Lizards
        for (var i in this.lizards) {
            var lizard = this.lizards[i];
            if (lizard.active) {
                lizard.update(dt);
            }
        }
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var g_hud = null;
var HudLayer = cc.Layer.extend({
    balloon:null,
    balloonLabel:null,
	counterLabel:null,
	dayLabel:null,
	timerFill:null,

	ctor:function () {
		this._super();

		g_hud = this;

        this.balloon = new Balloon("#balloon2.png");
        this.balloon.setPosition(sd[gg.gameplay.stage].balloon.pos);
        this.balloon.setFlippedX(sd[gg.gameplay.stage].balloon.flipped);
        this.balloon.visible = false;
        this.addChild(this.balloon);
        
        this.balloonLabel = new BalloonLabel("", 0.5, this.balloon.width);
        this.balloonLabel.setPosition(this.balloon.width/2, this.balloon.height/2 + 40);
        this.balloon.addChild(this.balloonLabel);

		var counterPanel = new cc.Sprite("#panel_counter.png");
		counterPanel.setPosition(278, 690);
		this.addChild(counterPanel);

		this.counterLabel = new cc.LabelBMFont("99/99", "res/fnt_comiquita.fnt");
		this.counterLabel.setPosition(110, 93);
		this.counterLabel.setScale(0.5, 0.5);
		counterPanel.addChild(this.counterLabel);

		var dayLabel = new cc.LabelBMFont("DAY " + gg.gameplay.level, "res/fnt_comiquita.fnt");
        dayLabel.setColor(cc.color(255, 255, 255));
		dayLabel.setPosition(105, 36);
		dayLabel.setScale(0.4, 0.4);
		counterPanel.addChild(dayLabel);

		var timerBg = new cc.Sprite("#bar_bg.png");
		timerBg.setPosition(683, 708);
		this.addChild(timerBg);

		this.timerFill = new ccui.LoadingBar();
		this.timerFill.loadTexture("bar_fill.png", ccui.Widget.PLIST_TEXTURE);
		this.timerFill.setAnchorPoint(0, 0.5);
		this.timerFill.setPosition(557, 707);
		this.addChild(this.timerFill);

		// debug safe zone
        // var safeZone = Tools.createSafeZone();
        // this.addChild(safeZone, 10);
	},

    init:function () {
        this.updateCounter();
        this.updateTimer();
    },

	updateCounter:function () {
        this.counterLabel.setString(g_gameplay.counter + "/" + gg.gameplay.goal);
	},

	updateTimer:function () {
        this.timerFill.setPercent((g_gameplay.dayTimer/60) * 100);
	},

    goalReached:function () {
        this.counterLabel.setColor(cc.color(255, 200, 0));
        this.cheer();
    },

    cheer:function () {
        this.balloonLabel.setString(sd[gg.gameplay.stage].cheerDialog);
        this.runAction(cc.sequence(
                            cc.callFunc(this.balloon.show, this.balloon),
                            cc.delayTime(2),
                            cc.callFunc(this.balloon.hide, this.balloon)
                            ));
    },

    nag:function () {
        this.balloonLabel.setString(sd[gg.gameplay.stage].nagDialog);
        this.runAction(cc.sequence(
                            cc.callFunc(this.balloon.show, this.balloon),
                            cc.delayTime(2),
                            cc.callFunc(this.balloon.hide, this.balloon)
                            ));
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var g_gameplay = null;
var GameplayScene = cc.Scene.extend({
	counter:null,
	spawnTimer:null,
	dayTimer:null,
    nearEndReached:null,

    onEnter:function () {
        this._super();

        g_gameplay = this;

        this.addChild(new ActionLayer());
        this.addChild(new HudLayer());

        this.init();
    },

    init:function () {
        this.counter = 0;
        this.spawnTimer = 0;
        this.dayTimer = 0;
        this.nearEndReached = false;

        g_action.init();
        g_hud.init();

        this.scheduleUpdate();
    },

    increaseCounter:function () {
    	this.counter++;
        if (this.counter === gg.gameplay.goal) {
            this.goalReached();
        } else if (this.counter === Math.ceil(gg.gameplay.goal * 0.25) ||
                   this.counter === Math.ceil(gg.gameplay.goal * 0.5) ||
                   this.counter === Math.ceil(gg.gameplay.goal * 0.75)) {
            g_action.character.cheer();
            g_hud.cheer();
        }
    	g_hud.updateCounter();
    },

    goalReached:function () {
        g_action.character.goalReached();
        g_hud.goalReached();
    },

    endDay:function () {
    	this.unscheduleUpdate();

        if (this.counter >= gg.gameplay.goal) {
            this.levelSuccessful();
        } else {
            this.levelFailed();
        }
    },

    levelSuccessful:function () {
        gg.gameplay.level++;

        gg.gameplay.stage = (gg.gameplay.level - 1) % 3;

        if (gg.gameplay.stage === 0 && gg.gameplay.spawnCounts[gg.gameplay.spawnCountIndex] < gg.gameplay.maxSpawn) {
            gg.gameplay.spawnCounts[gg.gameplay.spawnCountIndex]++;
        }

        gg.gameplay.spawnCountIndex ^= 1;

        if (gg.gameplay.goal < gg.gameplay.maxGoal) {
            gg.gameplay.goal += gg.gameplay.stage === 2 ? 3 : 2;
        }

        cc.director.runScene(new TransitionScene());
    },

    levelFailed:function () {
        cc.director.runScene(new ResultsScene());
    },

    update:function (dt) {
        // Timer
    	if (this.dayTimer < gg.gameplay.day.full) {
    		this.dayTimer += dt;
            if (!this.nearEndReached &&
                this.dayTimer >= gg.gameplay.day.nearEnd &&
                this.counter < gg.gameplay.goal) {
                this.nearEndReached = true;
                g_action.character.nag();
                g_hud.nag();
            }
    		g_hud.updateTimer();
    	} else {
    		this.endDay();
    	}

        // Action Layer
        g_action.update(dt);
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------