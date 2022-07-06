/* global define, _, game, createjs, data, stageWidth, stageHeight */
define([
  'common/spriteSheetManager',
  'common/random',
  'common/gameText',
  'common/audioManager',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(ssm, random, gth, am) {

  function playAndGoBack() {
    this.children[anaisZLayer.anais].removeAllEventListeners();
    this.children[anaisZLayer.anais].on('animationend', function() {
      this.isPlayingUnique = false;
      this.children[anaisZLayer.anais].removeAllEventListeners();
      this[this.previouslyPlaying]();
    }.bind(this));
  }

  function playIdle() {
    this.children[anaisZLayer.anais].gotoAndPlay('idle');
  }

  function playIdleToStand() {
    this.children[anaisZLayer.anais].gotoAndPlay('idleToStand');
  }

  function playHit() {
    if (!this.isPlayingUnique) {
      this.isPlayingUnique = true;
      this.children[anaisZLayer.anais].gotoAndPlay('hit');
      playAndGoBack.call(this);
    }
  }

  function playCollect() {
    if (!this.isPlayingUnique) {
      this.isPlayingUnique = true;
      this.children[anaisZLayer.anais].gotoAndPlay('pickup');
      playAndGoBack.call(this);
    }
  }

  function playPhase11() {
    this.children[anaisZLayer.anais].gotoAndPlay('phase1-1');
    this.previouslyPlaying = 'playPhase11';
  }

  function playPhase12() {
    this.children[anaisZLayer.anais].gotoAndPlay('phase1-2');
    this.previouslyPlaying = 'playPhase12';
  }

  function playPhase13() {
    this.children[anaisZLayer.anais].gotoAndPlay('phase1-3');
    this.previouslyPlaying = 'playPhase13';
  }

  function playPhase1Stretching() {
    this.children[anaisZLayer.anais].gotoAndPlay('phase1-stretching');
    this.previouslyPlaying = 'playPhase1Stretching';
  }

  function playYankBack() {
    this.children[anaisZLayer.anais].gotoAndPlay('yankBack');
    createjs.Tween.get(this)
      .wait(500)
      .call(function() {
        yankBackCloud.gotoAndPlay('yankBackCloud');
        yankBackCloud.visible = true;
        yankBackCloud.on('animationend', function() {
          yankBackCloud.visible = false
        });
      });
  }

  function playPhase21() {
    this.children[anaisZLayer.anais].gotoAndPlay('phase2-1');
    this.previouslyPlaying = 'playPhase21';
  }

  function playPhase22() {
    this.children[anaisZLayer.anais].gotoAndPlay('phase2-2');
    this.previouslyPlaying = 'playPhase22';
    speedLines.visible = true;
  }
  function playPhase23() {
    this.children[anaisZLayer.anais].gotoAndPlay('phase2-3');
    this.previouslyPlaying = 'playPhase23';
  }
  function toggleFlames(on) {
    if(on) {
      flames.visible = true;
      if (!am.isSfxMuted()) {
        createjs.Tween.get(flameSfx || {})
          .to({volume: data.volumes.flameVolume}, 500);
        am.playSfx('flameBurst', {volume: data.volumes.flameVolume});
      }
    } else {
      flames.visible = false;
      hasBegunFlames = false;
      createjs.Tween.get(flameSfx || {}).to({volume: 0}, 200);
    }
  }
  function playVictory() {
    this.children[anaisZLayer.anais].gotoAndPlay('victory');
    toggleFlames(false);
    speedLines.visible = false;
  }

  function doRopeMath(rope, stroke, color, parent, anais, deltaY, interval,
                      specialYPlacement) {
    var foreground = parent.parent;
    if (foreground == null) {
      return;
    }
    var startX = anais.getBounds().width * 0.2;
    var startY = _.isNumber(specialYPlacement) ?
      specialYPlacement : anais.getBounds().height * 0.7;
    rope.cumlInterval = 0;
    rope.removeAllEventListeners();
    rope.on('tick', function() {
      if (createjs.Ticker.paused) {
        return;
      }
      var target = _.find(foreground.children, {type: 'control' + parent.row});
      var targetGlobalPos = target.parent.localToGlobal(target.x, target.y);
      var parentGlobalPos = parent.parent.localToGlobal(parent.x, parent.y);
      var dest = rope.parent.globalToLocal(Math.max(targetGlobalPos.x,
        -0.1 * stageWidth), parentGlobalPos.y - parent.regY);
      var deltaX = Math.abs(startX - dest.x);
      rope.graphics.clear().setStrokeStyle(stroke, 'round').beginStroke(color)
        .moveTo(startX, startY)
        .bezierCurveTo(
        startX - (0.33 * deltaX),
        (-deltaY * Math.sin(rope.cumlInterval)) + startY,
        startX - (0.66 * deltaX),
        (deltaY * Math.sin(rope.cumlInterval)) + startY,
        dest.x /*- 0.01 * stageWidth*/, startY /*- 0.01 * stageHeight*/);
      rope.cumlInterval += interval;
    });
  }
  function _shakeRopeWithHeightAndInterval(deltaY, interval,
                                           specialYPlacement) {
    doRopeMath(this.children[anaisZLayer.rope], 6, '#fff', this,
      this.children[anaisZLayer.anais], deltaY, interval, specialYPlacement);
    doRopeMath(this.children[anaisZLayer.ropeOutline], 8, '#000', this,
      this.children[anaisZLayer.anais], deltaY, interval, specialYPlacement);
  }

  function shakePhase1String(specialYPlacement) {
    var deltaY = 0.02 * stageHeight;
    var interval = 0.5;
    _shakeRopeWithHeightAndInterval.call(this, deltaY, interval,
      specialYPlacement);
  }
  function makeRopeWhileStarting(specialYPlacement) {
    var deltaY = 0;
    var interval = 10;
    _shakeRopeWithHeightAndInterval.call(this, deltaY, interval,
      specialYPlacement);
  }
  function makeString(specialYPlacement) {
    var deltaY = 0;
    var interval = 10;
    _shakeRopeWithHeightAndInterval.call(this, deltaY, interval,
      specialYPlacement);
  }
  //Builds the actual pile
  function collectDollsInPile(doll, dollCount, specialPoints) {
    for (var i = doll.children.length - 1; i >= 0; --i) {
      if (doll.children[i].type !== 'mainImage') {
        //remove shadow (and maybe ray)
        doll.removeChildAt(i);
      } else {
        //adjust reg points for easy tweening but make sure doll doesn't
        // snap around
        var image = doll.children[i];
        image.regX = image.getBounds().width;
        image.regY = image.getBounds().height / 2;
        image.x = image.y = 0;
        doll.x = this.width * 2;
        doll.y = this.height * 0.6;
      }
    }
    var offset = 0.03 * stageWidth;
    var toAdd = [doll];
    if (doll.special) {
      toAdd = _.map(_.range(specialPoints), function() {
        var copy = doll.clone();
        _.extend(copy, _.pick(doll, 'regX', 'regY', 'x', 'y', 'scaleX', 'scaleY'));
        copy.type = 'doll';
        var image = new createjs.Sprite(ssm.get('propsSheet'),
          'daisy' + random.getRandomInt(0, 3));
        _.extend(image, _.pick(doll.children[0],'regX', 'regY', 'x', 'y', 'scaleX', 'scaleY'));
        copy.addChild(image);
        copy.removeSelf = _.bind(doll.removeSelf, copy);
        copy.alpha = 0;
        return copy;
      });
      doll.removeSelf();
    }
    _.each(toAdd, function(item, i) {
      var newDollCount = Math.min(dollCount + 1 + i, 50);
      var localTargetX = -Math.log(newDollCount + 1) * 0.04 * stageWidth;
      var yVariance = 0.0025 * newDollCount;
      var minYRange = 0.5 - yVariance;
      var maxYRange = 1 + yVariance;
      this.children[anaisZLayer.doll].addChild(item);
      createjs.Tween.get(item)
        .wait(i * 100)
        .to({alpha: 1}, item.special ? 150 : 1)
        .to({
          x: localTargetX + offset,
          y: random.getRandomFloat(minYRange, maxYRange) * this.height
        }, 300, createjs.Ease.quadOut)
        .to({scaleX: 0.6, scaleY: 0.6}, 200, createjs.Ease.quadIn)
        .call(function() {
          if (newDollCount <= data.gameFeel.dollsAllowedToFollow) {
            addShakeToDoll(random, item);
          } else {
            item.parent.removeChild(item);
          }
        });
    }.bind(this));
    playCollect.call(this);
  }

  function dropDoll(createNewDollOnTheFly, targetContainer) {
    var parentCont = this.parent;
    var dolls = this.children[anaisZLayer.doll].children;
    var lastChild = createNewDollOnTheFly ?
      new createjs.Sprite(ssm.get('propsSheet'), 'daisy0') :
      _.last(dolls);
    if (createNewDollOnTheFly) {
      this.addChild(lastChild);
      lastChild.scaleX = lastChild.scaleY = 0.7;
    }
    if(!lastChild) {
      return;
    }
    var globalStartPos = {
      x: parentCont.localToGlobal(this.x, 0).x,
      y: this.children[anaisZLayer.doll].localToGlobal(0, lastChild.y).y
    };
    targetContainer.addChild(lastChild);
    _.extend(lastChild, targetContainer.globalToLocal(globalStartPos.x, globalStartPos.y));
    var dir = random.getCoinFlip(-1, 1);
    var randX = lastChild.x + random.getRandomFloat(0, 0.1) * stageWidth * dir;
    var randY = lastChild.y + random.getRandomFloat(-0.05, -0.15) * stageHeight;
    createjs.Tween.get(lastChild, {override: true})
      .to({
        x: randX,
        y: randY,
        rotation: 10 * dir
      }, 300, createjs.Ease.sineOut)
      .to({
        y: randY + random.getRandomFloat(0.6, 0.9) * stageHeight,
        x: randX + 0.1 * stageWidth * dir,
        alpha: 0,
        rotation: 89 * dir
      }, 700, createjs.Ease.sineIn)
      .call(function() {
        lastChild.parent.removeChild(lastChild);
      });
  }

  function hitBoost(newBoostCount) {
    var fontSize;
    var fontColor;
    if(newBoostCount >= data.gameFeel.boostCountForFlames * 2) {
      fontSize = 110;
      fontColor = '#ff0000';
    } else if(newBoostCount >= data.gameFeel.boostCountForFlames) {
      fontSize = 95;
      fontColor = '#ff7e00';
    } else {
      fontSize = 80;
      fontColor = '#0f0';
    }
    var text = gth.createTextForLocale('x' + newBoostCount,{
      width: 0.2 * stageWidth,
      height: 0.2 * stageHeight
    }, {
      size: fontSize,
      color: fontColor,
      textAlign: 'center'
    }, {
      size: 5,
      color: '#fff'
    });
    text.type = 'boostVisual';
    text.alpha = 0;
    text.x = stageWidth * 0.04;
    createjs.Tween.get(text)
      .to({alpha: 1, y: -text.getMeasuredHeight() * 1.2}, 800,
        createjs.Ease.bounceOut)
      .wait(100)
      .to({alpha: 0}, 100)
      .call(function() {
        text.parent.removeChild(text);
      });
    this.addChild(text);
  }
  function ensureDollCountActualMatchesChildrenLength(dollCountActual) {
    var dollsParent = this.children[anaisZLayer.doll];
    //if too many, remove till exact
    while (dollsParent.children.length > dollCountActual) {
      dollsParent.removeChildAt(dollsParent.children.length - 1);
    }
    //if too few, add till exact
    while (dollsParent.children.length < dollCountActual) {
      var copy = _.last(dollsParent.children).clone();
      _.extend(copy,
        _.pick(_.last(dollsParent.children), 'x', 'y', 'scaleX', 'scaleY', 'regX', 'regY'));
      dollsParent.addChild(copy);
    }
  }
  var speedLines;
  var flames;
  var yankBackCloud;
  return function anaisCreator() {
    var anais = new createjs.Container();
    anais.row = 2;
    //rope
    var rope = new createjs.Shape();
    //rope outline
    var ropeOutline = new createjs.Shape();
    //anais sprite
    var image = new createjs.Sprite(ssm.get('anaisSheet'), 'idle');
    image.scaleX = -1;
    image.x += image.getBounds().width;
    image.regY = image.getBounds().height * 0.4;
    game.anaisSprite = image;
    anais.width = image.getBounds().width * 0.7; //this 0.7 is to
    anais.height = image.getBounds().height;
    //shadow
    var shadow = new createjs.Sprite(ssm.get('propsSheet'), 'shadow');
    shadow.y = stageHeight * -0.08;
    shadow.x = stageWidth * -0.05;
    //speedLines
    speedLines = new createjs.Sprite(ssm.get('propsSheet'), 'speedLines');
    speedLines.y = stageHeight * -0.04;
    speedLines.x = stageWidth * 0.16;
    speedLines.scaleX = speedLines.scaleY = 1.2;
    speedLines.scaleX *= -1;
    speedLines.visible = false;
    //flames
    if(flames == null) {
      flames = new createjs.Sprite(ssm.get('propsSheet'), 'flame');
      flames.y = stageHeight * -0.04;
      flames.x = stageWidth * 0.32;
      flames.scaleX = flames.scaleY = 1.2;
      flames.scaleX *= -1;
      flames.visible = false;
    }
    if (flameSfx == null) {
      flameSfx = am.playSfx('flameLoop', {
        loopCount: -1,
        volume: 0
      });
    }
    //smokeburst
    yankBackCloud = new createjs.Sprite(ssm.get('propsSheet'), 'yankBackCloud');
    yankBackCloud.y = stageHeight * -0.04;
    yankBackCloud.x = stageWidth * 0.22;
    yankBackCloud.scaleX = yankBackCloud.scaleY = 1.2;
    yankBackCloud.scaleX *= -1;
    yankBackCloud.visible = false;

    var dollContainer = new createjs.Container();
    dollContainer.regX = anais.width;
    dollContainer.x += anais.width;
    anais.type = 'anais';
    anais.addChild(shadow, flames, ropeOutline, rope, dollContainer, image, speedLines,
      yankBackCloud);
    // account for alpha padding

    anais.playIdle = playIdle;
    anais.playIdleToStand = playIdleToStand;
    anais.playHit = playHit;
    anais.playPhase11 = playPhase11;
    anais.playPhase12 = playPhase12;
    anais.playPhase13 = playPhase13;
    anais.playPhase1Stretching = playPhase1Stretching;
    anais.playYankBack = playYankBack;
    anais.playPhase21 = playPhase21;
    anais.playPhase22 = playPhase22;
    anais.playPhase23 = playPhase23;
    anais.toggleFlames = toggleFlames;
    anais.playVictory = playVictory;

    anais.shakePhase1String = shakePhase1String;
    anais.makeRopeWhileStarting = makeRopeWhileStarting;
    anais.makeString = makeString;
    anais.collectDollsInPile = collectDollsInPile;
    anais.dropDoll = dropDoll;
    anais.hitBoost = hitBoost;
    anais.ensureDollCountActualMatchesChildrenLength =
      ensureDollCountActualMatchesChildrenLength;
    anais.removeEvents = function() {
      anais.removeAllEventListeners();
      rope.removeAllEventListeners();
      ropeOutline.removeAllEventListeners();
    };

    //the "140" here comes from looking at the game and lining up the rope
    // in the sprite to the actual line rendered with createjs...it's magic
    _shakeRopeWithHeightAndInterval.call(anais, 0, 100000, 140);

    return anais;
  };
});