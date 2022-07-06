CuriousJS.MusicShop.UI = function(parent) {
    var that = new createjs.Container();

    that._init = function(parent) {
        this._parent = parent;

        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.leftArrow = new createjs.Sprite(mainSpriteSheet, 'ui/left-arrow');
        this.leftArrow.regX = 23;
        this.leftArrow.regY = 28;
        this.leftArrow.x = (-cm.game.targetWidth/2) + 25 + 23;
        this.leftArrow.y = (-this.leftArrow.getBounds().height/2) + 28;
        this.leftArrow.on('mousedown', this.leftArrowMouseDown, this);
        this.leftArrow.on('pressup', this.leftArrowPressUp, this);
        this.leftArrow.cursor = "pointer";

        this.rightArrow = new createjs.Sprite(mainSpriteSheet, 'ui/right-arrow');
        this.rightArrow.regX = 19;
        this.rightArrow.regY = 27;
        this.rightArrow.x = (cm.game.targetWidth/2) - this.rightArrow.getBounds().width - 25 + 19;
        this.rightArrow.y = (-this.rightArrow.getBounds().height/2) + 27;
        this.rightArrow.on('mousedown', this.rightArrowMouseDown, this);
        this.rightArrow.on('pressup', this.rightArrowPressUp, this);
        this.rightArrow.cursor = "pointer";
        this.rightArrow.alpha = 0;

        if(!CuriousJS.Game.IsMobile.any()) {
            this.leftArrow.on('mouseover', this.leftArrowMouseOver, this);
            this.leftArrow.on('mouseout', this.leftArrowMouseOut, this);
            this.rightArrow.on('mouseover', this.rightArrowMouseOver, this);
            this.rightArrow.on('mouseout', this.rightArrowMouseOut, this);
        }

        this.pullOutButton = new createjs.Sprite(mainSpriteSheet, 'ui/pull-out-button');
        this.pullOutButton.regX = 44;
        this.pullOutButton.regY = 43;
        this.pullOutButton.x = (cm.game.targetWidth/2) - this.pullOutButton.getBounds().width - 10 + 44;
        this.pullOutButton.y = (-cm.game.targetHeight/2) + 10 + 43;
        this.pullOutButton.cursor = "pointer";
        this.pullOutButton.on('click', this.pullOutButtonClick, this);

        if(!CuriousJS.Game.IsMobile.any()) {
            this.pullOutButton.on('mouseover', this.pullOutButtonMouseOver, this);
            this.pullOutButton.on('mouseout', this.pullOutButtonMouseOut, this);
        }

        this.pullOutTrayContainer = new createjs.Container();
        this.pullOutTray = new createjs.Sprite(mainSpriteSheet, 'ui/pull-out-tray');
        this.pullOutTrayContainer.x = this.pullOutButton.x - 44 - this.pullOutTray.getBounds().width + 16;
        this.pullOutTrayContainer.y = this.pullOutButton.y - 43 + this.pullOutTray.getBounds().height/2 - 16;

        this.pullOutTrayMask = new createjs.Shape();
        this.pullOutTrayMask.graphics.beginFill('#ffffff')
            .drawRect(this.pullOutTrayContainer.x, this.pullOutTrayContainer.y - 25, 
                        this.pullOutTray.getBounds().width, this.pullOutTray.getBounds().height + 50);
        this.pullOutTrayContainer.mask = this.pullOutTrayMask;

        this.pullOutArrowIn = new createjs.Sprite(mainSpriteSheet, 'ui/pull-out-arrow-in');
        this.pullOutArrowIn.x = 25;
        this.pullOutArrowIn.y = 15;
        this.pullOutArrowIn.hitArea = new createjs.Shape();
        this.pullOutArrowIn.hitArea.graphics.beginFill('#fff').drawRect(-10, -10, 30, 45);
        this.pullOutArrowIn.cursor = 'pointer';

        this.pullOutArrowOut = new createjs.Sprite(mainSpriteSheet, 'ui/pull-out-arrow-out');
        this.pullOutArrowOut.x = 25;
        this.pullOutArrowOut.y = 15;
        this.pullOutArrowOut.visible = false;
        this.pullOutArrowOut.hitArea = new createjs.Shape();
        this.pullOutArrowOut.hitArea.graphics.beginFill('#fff').drawRect(-10, -10, 30, 45);
        this.pullOutArrowOut.cursor = 'pointer';

        this.pullOutArrowIn.on('click', this.pullOutArrowInClick, this);
        this.pullOutArrowOut.on('click', this.pullOutArrowOutClick, this);

        this.pullOutTrayCharacterContainer1 = new createjs.Container();
        this.pullOutTrayCharacterContainer2 = new createjs.Container();
        this.pullOutTrayCharacterContainer2.visible = false;

        this.pullOutTrayContainer.addChild(this.pullOutTray, this.pullOutArrowIn, this.pullOutArrowOut, 
            this.pullOutTrayCharacterContainer1, this.pullOutTrayCharacterContainer2);

        //Add variables
        this.leftArrowTicked = false;
        this.rightArrowTicked = false;

        this.addChild(this.leftArrow, this.rightArrow, this.pullOutTrayContainer, this.pullOutButton);
    };

    that.leftArrowMouseDown = function(event) {
        createjs.Tween.get(this.leftArrow).wait(250).call(function() {
            this.leftArrow.on('tick', this.leftArrowTick, this);
        }, null, this);
        createjs.Tween.get(this.leftArrow)
            .to({scaleX: 0.9, scaleY: 0.9}, 120);
    };

    that.rightArrowMouseDown = function(event) {
        createjs.Tween.get(this.rightArrow).wait(250).call(function() {
            this.rightArrow.on('tick', this.rightArrowTick, this);
        }, null, this);
        createjs.Tween.get(this.rightArrow)
            .to({scaleX: 0.9, scaleY: 0.9}, 120);
    };

    that.leftArrowTick = function(event) {
        this.leftArrowTicked = true;
        if(this._parent.panableContainer.x + 20 > this._parent.maxPanableX) {
            this._parent.panableContainer.x = this._parent.maxPanableX;
        } else {
            createjs.Tween.get(this._parent.panableContainer, {override: true})
                .to({x: this._parent.panableContainer.x + 20}, 100);
        }
    };

    that.rightArrowTick = function(event) {
        this.rightArrowTicked = true;
        if(this._parent.panableContainer.x - 20 < this._parent.minPanableX) {
            this._parent.panableContainer.x = this._parent.minPanableX;
        } else {
            createjs.Tween.get(this._parent.panableContainer, {override: true})
                .to({x: this._parent.panableContainer.x - 20}, 100);
        }
    };

    that.leftArrowPressUp = function(event) {
        createjs.Tween.removeTweens(this.leftArrow);
        this.leftArrow.removeAllEventListeners('tick');
        createjs.Tween.get(this.leftArrow)
            .to({scaleX: 1.1, scaleY: 1.1}, 120)
            .to({scaleX: 1, scaleY: 1}, 120)
            .call(this.arrowsShowHide, null, this);
        if(!this.leftArrowTicked) {
            //No tick occured, thus we jump
            if(this._parent.panableContainer.x + 400 > this._parent.maxPanableX) {
                createjs.Tween.get(this._parent.panableContainer, {override: true})
                    .to({x: this._parent.maxPanableX}, 250, createjs.Ease.quadOut);
            } else {
                createjs.Tween.get(this._parent.panableContainer, {override: true})
                    .to({x: this._parent.panableContainer.x + 400}, 250, createjs.Ease.quadOut);
            }
        }
        this.leftArrowTicked = false;
    };

    that.arrowsShowHide = function() {
        if(this._parent.panableContainer.x >= this._parent.maxPanableX - 10) {
            createjs.Tween.get(this.leftArrow, {override: true})
                .to({alpha: 0}, 60);
        } else {
            createjs.Tween.get(this.leftArrow, {override: true})
                .to({alpha: 1}, 60);
        }
        if(this._parent.panableContainer.x <= this._parent.minPanableX + 10) {
            createjs.Tween.get(this.rightArrow, {override: true})
                .to({alpha: 0}, 60);
        } else {
            createjs.Tween.get(this.rightArrow, {override: true})
                .to({alpha: 1}, 60);
        }
    };

    that.rightArrowPressUp = function(event) {
        createjs.Tween.removeTweens(this.rightArrow);
        this.rightArrow.removeAllEventListeners('tick');
        createjs.Tween.get(this.rightArrow)
            .to({scaleX: 1.1, scaleY: 1.1}, 120)
            .to({scaleX: 1, scaleY: 1}, 120)
            .call(this.arrowsShowHide, null, this);
        if(!this.rightArrowTicked) {
            //No tick occured, thus we jump
            if(this._parent.panableContainer.x - 400 < this._parent.minPanableX) {
                createjs.Tween.get(this._parent.panableContainer, {override: true})
                    .to({x: this._parent.minPanableX}, 250, createjs.Ease.quadOut);
            } else {
                createjs.Tween.get(this._parent.panableContainer, {override: true})
                    .to({x: this._parent.panableContainer.x - 400}, 250, createjs.Ease.quadOut);
            }
        }
        this.rightArrowTicked = false;
    };

    that.leftArrowMouseOver = function() {
        createjs.Tween.get(this.leftArrow)
            .to({scaleX: 1.1, scaleY: 1.1}, 120);
    };

    that.leftArrowMouseOut = function() {
        createjs.Tween.get(this.leftArrow)
            .to({scaleX: 1, scaleY: 1}, 120);
    };

    that.rightArrowMouseOver = function() {
        createjs.Tween.get(this.rightArrow)
            .to({scaleX: 1.1, scaleY: 1.1}, 120);
    };

    that.rightArrowMouseOut = function() {
        createjs.Tween.get(this.rightArrow)
            .to({scaleX: 1, scaleY: 1}, 120);
    };

    that.pullOutArrowInClick = function(event) {
        this.pullOutArrowIn.visible = false;
        this.pullOutArrowOut.visible = true;
        createjs.Tween.get(this.pullOutTrayContainer)
            .to({x: this.pullOutTrayContainer.x + 395}, 250, createjs.Ease.quadOut);
        createjs.Tween.get(this.pullOutTrayMask)
            .to({x: this.pullOutTrayMask.x}, 250, createjs.Ease.quadOut);
    };

    that.pullOutArrowOutClick = function(event) {
        this.pullOutArrowIn.visible = true;
        this.pullOutArrowOut.visible = false;
        createjs.Tween.get(this.pullOutTrayContainer)
            .to({x: this.pullOutTrayContainer.x - 395}, 250, createjs.Ease.quadOut);
        createjs.Tween.get(this.pullOutTrayMask)
            .to({x: this.pullOutTrayMask.x}, 250, createjs.Ease.quadOut);
    };

    that.pullOutButtonClick = function() {
        createjs.Tween.get(this.pullOutButton)
            .to({scaleX: 0.9, scaleY: 0.9}, 120)
            .to({scaleX: 1.1, scaleY: 1.1}, 120)
            .to({scaleX: 1, scaleY: 1}, 120);
        this.pullOutTrayCharacterContainer1.visible = !this.pullOutTrayCharacterContainer1.visible;
        this.pullOutTrayCharacterContainer2.visible = !this.pullOutTrayCharacterContainer2.visible;
    };

    that.pullOutButtonMouseOver = function() {
        createjs.Tween.get(this.pullOutButton)
            .to({scaleX: 1.1, scaleY: 1.1}, 120);
    };

    that.pullOutButtonMouseOut = function() {
        createjs.Tween.get(this.pullOutButton)
            .to({scaleX: 1, scaleY: 1}, 120);
    };

    that._init(parent);
    return that;
};

