CuriousJS.MusicShop.Characters = function(parent) {
    var that = new createjs.Container();

    that._init = function(parent) {
        this._parent = parent;
        mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');

        this.stan = new CuriousJS.MusicShop.Character(this, 'music-man-stan', 93, 62, 125, 150, 15, 150, {x: 0, y: -73});
        this.stan.sprite.gotoAndStop('characters/music-man-stan');
        this.stan.setMidPoint();
        this._parent.floor.customAddChild(this.stan);

        var dadPoint = this._parent.ui.pullOutTrayCharacterContainer1.globalToLocal(334 - 25, -198.5);
        var margaretPoint = this._parent.ui.pullOutTrayCharacterContainer1.globalToLocal(246 - 25, -220);
        var momPoint = this._parent.ui.pullOutTrayCharacterContainer1.globalToLocal(164 - 25, -205);
        var danielPoint = this._parent.ui.pullOutTrayCharacterContainer1.globalToLocal(79 - 25, -212);

        var elainaPoint = this._parent.ui.pullOutTrayCharacterContainer2.globalToLocal(20, -205); // 60, -205
        var wednesdayPoint = this._parent.ui.pullOutTrayCharacterContainer2.globalToLocal(92, -205); // 325, -205
        var katerinaPoint = this._parent.ui.pullOutTrayCharacterContainer2.globalToLocal(170, -210); // 152, -210
        var owlPoint = this._parent.ui.pullOutTrayCharacterContainer2.globalToLocal(257, -210); // 249, -220
        var jodiPoint = this._parent.ui.pullOutTrayCharacterContainer2.globalToLocal(330, -200); // 70, -205

        this.dad = new CuriousJS.MusicShop.Character(this, 'dad', dadPoint.x, dadPoint.y, 120, 142, 10, 142, {x: 0, y: -65});
        this.margaret = new CuriousJS.MusicShop.Character(this, 'margaret', margaretPoint.x, margaretPoint.y, 80, 72, 5, 72, {x: 0, y: -35});
        this.mom = new CuriousJS.MusicShop.Character(this, 'mom', momPoint.x, momPoint.y, 110, 130, 10, 130, {x: 0, y: -60});
        this.daniel = new CuriousJS.MusicShop.Character(this, 'daniel', danielPoint.x, danielPoint.y, 90, 90, 10, 90, {x: 0, y: -40});
        this.wednesday = new CuriousJS.MusicShop.Character(this, 'wednesday', wednesdayPoint.x, wednesdayPoint.y, 75, 100, 7, 100, {x: 0, y: -40});
        this.owl = new CuriousJS.MusicShop.Character(this, 'owl', owlPoint.x, owlPoint.y, 95, 80, 5, 80, {x: 5, y: -35});
        this.katerina = new CuriousJS.MusicShop.Character(this, 'katerina', katerinaPoint.x, katerinaPoint.y, 85, 80, 5, 80, {x: 0, y: -37});
        this.elaina = new CuriousJS.MusicShop.Character(this, 'elaina', elainaPoint.x, elainaPoint.y, 85, 110, 5, 110, {x: 0, y: -50});
        this.jodi = new CuriousJS.MusicShop.Character(this, 'jodi', jodiPoint.x, jodiPoint.y, 75, 90, 0, 90, {x: 0, y: -60});

        this._parent.ui.pullOutTrayCharacterContainer1.addChild(this.dad.placeHolder, this.margaret.placeHolder, 
            this.mom.placeHolder, this. daniel.placeHolder, this.dad, this.mom, this.daniel, this.margaret);

        this._parent.ui.pullOutTrayCharacterContainer2.addChild(this.wednesday.placeHolder, this.owl.placeHolder, 
            this.katerina.placeHolder, this.elaina.placeHolder, this.jodi.placeHolder, this.wednesday, this.owl, this.katerina, this.elaina, this.jodi);
    };

    that._init(parent);
    return that;
};

CuriousJS.MusicShop.Character = function(parent, name, x, y, rightInstrumentSlotX, rightInstrumentSlotY, leftInstrumentSlotX, leftInstrumentSlotY, sitPoint) {
    var that = new createjs.Container();

    that._init = function(parent, name, x, y, rightInstrumentSlotX, rightInstrumentSlotY, leftInstrumentSlotX, leftInstrumentSlotY, sitPoint) {
        this._parent = parent;
        this.name = name;
        var mainSpriteSheet = cm.game.mainQueue.getResult('musicShopSpriteSheet');
        this.sprite = new createjs.Sprite(mainSpriteSheet, 'characters/'+this.name+'-menu');
        this.addChild(this.sprite);

        this.x = x;
        this.y = y;
        this.rightInstrumentSlotX = rightInstrumentSlotX;
        this.rightInstrumentSlotY = rightInstrumentSlotY;
        this.leftInstrumentSlotX = leftInstrumentSlotX;
        this.leftInstrumentSlotY = leftInstrumentSlotY;
        this.sitPoint = sitPoint;

        this.lastPoint1 = {x: x, y: y};
        this.lastPoint2 = {x: x, y: y};
        this.lastPoint3 = {x: x, y: y};
        this.velocity = {x: 0, y: 0};
        this.maxVelocity = 10;
        this.accel = {x: 0, y: 0};
        this.maxAccel = 1;
        this.resX = 0.25;
        this.gravity = 0.25;

        this.minX = -797;
        this.maxX = 480;
        this.minY = -250;
        this.maxY = 250;
        this.rightInstrument = null;
        this.leftInstrument = null;
        this.sticking = false;

        if(this.name != 'music-man-stan') {
            this.placeHolder = new createjs.Sprite(mainSpriteSheet, 'characters/'+name+'-menu');
            this.placeHolder.regX = this.placeHolder.getBounds().width / 2;
            this.placeHolder.regY = this.placeHolder.getBounds().height / 2;
            this.placeHolder.alpha = 0.4;
            this.placeHolder.visible = false;
            this.placeHolder.x = x;
            this.placeHolder.y = y;
        }

        this.setMidPoint();

        this.sprite.on('mousedown', this.mouseDown, this);
        this.sprite.on('pressmove', this.pressMove, this);
        this.sprite.on('pressup', this.pressUp, this);
        this.on('tick', this.update, this);
    };

    that.update = function(event) {
        if(!this.dragging && !this.inStage && this.sprite.currentAnimation !== 'characters/'+this.name+'-menu') {
            if(this.velocity.x > 0) {
                this.velocity.x = this.velocity.x + this.accel.x > this.maxVelocity ? this.maxVelocity : this.velocity.x + this.accel.x;
                this.accel.x = this.accel.x - this.resX < this.maxAccel * -1 ? this.maxAccel * -1 : this.accel.x - this.resX;
                if(this.velocity.x < 0) {
                    this.velocity.x = 0;
                    this.accel.x = 0;
                }
            } else if(this.velocity.x < 0) {
                this.velocity.x = this.velocity.x + this.accel.x < this.maxVelocity * -1 ? this.maxVelocity * -1 : this.velocity.x + this.accel.x;
                this.accel.x = this.accel.x + this.resX > this.maxAccel ? this.maxAccel : this.accel.x + this.resX;
                if(this.velocity.x > 0) {
                    this.velocity.x = 0;
                    this.accel.x = 0;
                }
            }
            this.accel.y += this.gravity;
            this.velocity.y += this.accel.y;
            
            var nx = this.x + this.velocity.x;
            var ny = this.y + this.velocity.y;
            var spriteBounds = this.sprite.getBounds();
            if(nx > this.maxX - spriteBounds.width/2) {
                nx = this.maxX - spriteBounds.width/2;
                this.velocity.x = 0;
                this.accel.x = 0;
                this.velocity.y = 0.001;
                this.accel.y = 0.001;
            } else if(nx < this.minX + spriteBounds.width/2) {
                nx = this.minX + spriteBounds.width/2;
                this.velocity.x = 0;
                this.accel.x = 0;
                this.velocity.y = 0.001;
                this.accel.y = 0.001;
            }
            if(ny > this.maxY - spriteBounds.height/2 - 40) {
                ny = this.maxY - spriteBounds.height/2 - 40;
                this.velocity.y = 0;
                this.accel.y = 0;
                this.velocity.x = 0;
                this.accel.x = 0;
            } else if(ny < this.minY + spriteBounds.height/2) {
                ny = this.minY + spriteBounds.height/2;
                this.velocity.y = 0.001;
                this.accel.y = 0.001;
            }
            this.x = nx;
            this.y = ny;
        } else if(this.dragging){
            this.lastPoint3 = {x: this.lastPoint2.x, y: this.lastPoint2.y};
            this.lastPoint2 = {x: this.lastPoint1.x, y: this.lastPoint1.y};
            this.lastPoint1 = {x: this.x, y: this.y};
            this.velocity.x = this.lastPoint1.x - this.lastPoint2.x;
            this.velocity.y = this.lastPoint1.y - this.lastPoint2.y;
            this.accel.x = this.velocity.x - (this.lastPoint2.x - this.lastPoint3.x);
            this.accel.y = this.velocity.y - (this.lastPoint2.y - this.lastPoint3.y);
            if(this.sticking) {
                var newPoint = this.parent.globalToLocal(cm.game.stage.mouseX, cm.game.stage.mouseY);
                var spriteBounds = this.sprite.getBounds();
                if(newPoint.x + spriteBounds.width/2 > this.maxX) {
                    newPoint.x = this.maxX - spriteBounds.width/2;
                } else if(newPoint.x - spriteBounds.width/2 < this.minX) {
                    newPoint.x = this.minX + spriteBounds.width/2;
                }
                if(newPoint.y + spriteBounds.height/2 > this.maxY) {
                    newPoint.y = this.maxY - spriteBounds.height/2;
                } else if(newPoint.y - spriteBounds.height/2 < this.minY) {
                    newPoint.y = this.minY + spriteBounds.height/2;
                }
                if(this.scaleX != 1.1) {
                    this.setMidPoint();
                    createjs.Tween.get(this, {override: true})
                        .to({x: newPoint.x, y: newPoint.y, scaleX: 1.1, scaleY: 1.1}, 120)
                        .call(this.setMidPoint, null, this);
                } else {
                    createjs.Tween.get(this, {override: true})
                        .to({x: newPoint.x, y: newPoint.y}, 120);
                }
                this.checkIfOverTray();
            }
        }
    };

    that.setMidPoint = function() {
        var bounds = this.sprite.getBounds();
        this.regX = bounds.width / 2;
        this.regY = bounds.height / 2;
    };

    that.mouseDown = function(event) {
        // this.dragging = true;
        if(this.sprite.currentAnimation == 'characters/'+this.name+'-menu') {
            //currently in the tray
            this.removeFromTray();
        } else {
            createjs.Tween.get(this).to({scaleX: 1.1, scaleY: 1.1}, 120).call(this.setMidPoint, null, this);
            var firstPoint = this.parent.localToLocal(this.x, this.y, this._parent._parent.topContainer);
            this._parent._parent.topContainer.addChild(this);
            this.x = firstPoint.x;
            this.y = firstPoint.y;
            var newPoint = this.parent.globalToLocal(event.stageX, event.stageY);
            
            //Check character position and don't allow outside of view
            if(newPoint.x + this.regX > 480) {
                newPoint.x = 480 - this.regX;
            } else if(newPoint.x - this.regX < -480) {
                newPoint.x = -480 + this.regX;
            }
            if(newPoint.y + this.regY > 250) {
                newPoint.y = 250 - this.regY;
            } else if(newPoint.y - this.regY < -250) {
                newPoint.y = -250 + this.regY;
            }
            createjs.Tween.get(this)
                .to({x: newPoint.x, y: newPoint.y}, 120);
        }
    };

    that.pressMove = function(event) {
        this.dragging = true;
        var newPoint = this.parent.globalToLocal(event.stageX, event.stageY);
        var spriteBounds = this.sprite.getBounds();
        if(newPoint.x + spriteBounds.width/2 > this.maxX) {
            newPoint.x = this.maxX - spriteBounds.width/2;
        } else if(newPoint.x - spriteBounds.width/2 < this.minX) {
            newPoint.x = this.minX + spriteBounds.width/2;
        }
        if(newPoint.y + spriteBounds.height/2 > this.maxY) {
            newPoint.y = this.maxY - spriteBounds.height/2;
        } else if(newPoint.y - spriteBounds.height/2 < this.minY) {
            newPoint.y = this.minY + spriteBounds.height/2;
        }
        if(this.scaleX != 1.1) {
            this.setMidPoint();
            createjs.Tween.get(this, {override: true})
                .to({x: newPoint.x, y: newPoint.y, scaleX: 1.1, scaleY: 1.1}, 120)
                .call(this.setMidPoint, null, this);
        } else {
            createjs.Tween.get(this, {override: true})
                .to({x: newPoint.x, y: newPoint.y}, 120);
        }
        this.checkIfOverTray();
        this.checkIfOverStool();
    };

    that.pressUp = function(event) {
        if(this.dragging  || CuriousJS.Game.IsMobile.any()) {
            this.dragging = false;
            this.sticking = false;
            createjs.Tween.get(this, {override: true})
                .to({scaleX: 1, scaleY: 1}, 120)
                .call(this.setMidPoint, null, this);
            if(this.checkIfOverTray()) {
                this.inStage = false;
                this.slotIntoTray();
            } else if(this.checkIfOverStage()) {
                this.inStage = true;
                this.lowestY = 97;
            } else if(this.checkIfOverStool()) {
                this.inStage = true; //just so the physics don't kick in
                this._parent._parent.instruments.stool.slotCharacter(this);
            } else {
                this.inStage = false;
                this._parent._parent.floor.customAddChild(this);
                this.x -= this._parent._parent.panableContainer.x;
                this.lowestY = this._parent._parent.floor.lowestFloorY;
            }
            this.dragging = false;
        } else {
            //count as a click and thus stick the character to the pointer
            this.sticking = this.dragging = true;
        }
    };

    that.removeFromTray = function() {
        var globalPoint = this.localToGlobal(this.x, this.y);
        this._parent._parent.topContainer.addChild(this);
        var newPoint = this.globalToLocal(globalPoint.x, globalPoint.y);
        this.x = newPoint.x;
        this.y = newPoint.y;
        this.scaleX = this.scaleY = 0.6;
        this.sprite.gotoAndStop('characters/'+this.name);
        createjs.Tween.get(this)
            .to({scaleX: 1.1, scaleY: 1.1}, 120)
            .call(this.setMidPoint, null, this);
    };

    that.checkIfOverTray = function() {
        //Check if character is hovering over tray to be slotted
        if(this.x >= -14 && this.x <= 391 && this.y >= -250 && this.y <= -140 && this._parent._parent.ui.pullOutArrowIn.visible) {
            if(this.placeHolder != undefined && this.placeHolder != null) {
                if(!this.placeHolder.parent.visible) {
                    this._parent._parent.ui.pullOutButtonClick();
                }
                return this.placeHolder.visible = true;
            }
        } else {
            if(this.placeHolder != undefined && this.placeHolder != null) {
                return this.placeHolder.visible = false;
            }
        }
        return false;
    };

    that.checkIfOverStool = function() {
        var stool = this._parent._parent.instruments.stool;
        var stoolBounds = stool.sprite.getBounds();
        var stoolGlobalPoint = stool.localToGlobal(stool.x, stool.y);
        var thisGlobalPoint = this.localToGlobal(this.x, this.y);
        if( thisGlobalPoint.x >= stoolGlobalPoint.x - stool.regX - 35 && 
            thisGlobalPoint.x <= stoolGlobalPoint.x - stool.regX + 35 + stoolBounds.width && 
            thisGlobalPoint.y >= stoolGlobalPoint.y - stool.regY + (this.sitPoint.y*5) && 
            thisGlobalPoint.y <= stoolGlobalPoint.y - stool.regY + stoolBounds.height
            && stool.children.length <= 1
          ) {
            this.sprite.gotoAndStop('characters/'+this.name+'-sit');
            this.setMidPoint();
            return true;
        } else {
            this.sprite.gotoAndStop('characters/'+this.name);
            this.setMidPoint();
            return false;
        }
    };

    that.slotIntoTray = function() {
        if(this.rightInstrument != null) {
            this.rightInstrument.unslotFromCharacter();
            this.rightInstrument = null;
        }
        if(this.leftInstrument != null) {
            this.leftInstrument.unslotFromCharacter();
            this.leftInstrument = null;
        }
        this.sprite.gotoAndStop('characters/'+this.name+'-menu');
        this.placeHolder.visible = false;
        if(this.name === 'dad' || this.name === 'mom' || this.name === 'daniel' || this.name === 'margaret') {
            this._parent._parent.ui.pullOutTrayCharacterContainer1.addChild(this);
        } else {
            this._parent._parent.ui.pullOutTrayCharacterContainer2.addChild(this);
        }
        createjs.Tween.get(this, {override: true})
            .to({x: this.placeHolder.x, y: this.placeHolder.y}, 1).call(this.setMidPoint, null, this);
    };

    that.slotInstrument = function(instrument) {
        var newPoint = instrument.parent.localToLocal(instrument.x, instrument.y, this);
        this.addChild(instrument);
        instrument.x = newPoint.x;
        instrument.y = newPoint.y;
        if(instrument.x > this.regX) {
            if(this.rightInstrument != null) {
                this.rightInstrument.unslotFromCharacter();
                this.rightInstrument = null;
            }
            this.rightInstrument = instrument;
            createjs.Tween.get(instrument, {override: true})
                .to({x: this.rightInstrumentSlotX, y: this.rightInstrumentSlotY}, 120);
        } else {
            if(this.leftInstrument != null) {
                this.leftInstrument.unslotFromCharacter();
                this.leftInstrument = null;
            }
            this.leftInstrument = instrument;
            createjs.Tween.get(instrument, {override: true})
                .to({x: this.leftInstrumentSlotX, y: this.leftInstrumentSlotY}, 120);
        }
    };

    that.checkIfOverStage = function() {
        var musicStage = this._parent._parent.musicStage;
        var stagePoint = this.parent.localToLocal(this.x, this.y, musicStage);
        if(stagePoint.x < -340 && stagePoint.x > -600 && stagePoint.y < 100 && stagePoint.y > -150) {
            musicStage.slotCharacter(this);
            return true;
        }
        return false;
    };

    that._init(parent, name, x, y, rightInstrumentSlotX, rightInstrumentSlotY, leftInstrumentSlotX, leftInstrumentSlotY, sitPoint);
    return that;
};

