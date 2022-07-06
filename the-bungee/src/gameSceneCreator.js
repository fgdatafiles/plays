/* global define, _, game, createjs, data, stageWidth, stageHeight,
 totalTravelDistance, currentGameplaySong, phase */
define([
  'common/gameText',
  'common/math',
  'common/util',
  'common/shaker',
  'common/audioManager',
  'common/spriteSheetManager',
  'common/zoom',
  'common/time',
  'common/random',
  'anaisCreator',
  'scrollableForegroundCreator',
  'hudCreator',
  'EffectsPool',
  'ropeAnchorPoints',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(gameTextHelper, math, util, shaker, am, ssm, zoom, time,
            random, anaisCreator, foregroundCreator, hudCreator, fxp, rap) {

  var dollCountScore;
  var dollCountActual;
  var boostCount;

  var moveUpKeys = [38, 87];
  var moveDownKeys = [40, 83];
  var collisionWidth = gridColumnWidth * 0.5;

  function lessThanInRange(a, b) {
    return b - a > 0 && b - a < collisionWidth;
  }

  function greaterThanInRange(a, b) {
    return a - b > 0 && a - b < collisionWidth;
  }

  var previousRow;

  function doMove(anais, dir, container) {
    if (!createjs.Ticker.paused) {
      anais.row = math.clamp(anais.row + dir, 0, 4);
      var destY = stageHeight * (1 - (data.gameFeel.movementRegionBottomPadding) -
        ((data.gameFeel.movementRegionChunks - anais.row + 1) *
        data.gameFeel.movementRegionYPercent));
      if (dir === 0) {
        anais.y = destY;
      } else if (anais.row != previousRow) {
        previousRow = anais.row;
        am.playSfx('move' + random.getRandomInt(1, 3), {volume: data.volumes.moveVolume});
        am.playSfx('moveWhoosh', {volume: data.volumes.moveWhooshVolume});
        createjs.Tween.get(anais)
          .to({y: destY}, data.gameFeel.verticalMovementTime);
        var doll = anais.children[anaisZLayer.doll];
        createjs.Tween.get(doll, {override: true})
          .to({rotation: (phase === 2 ? -1 : 1) * dir * 7}, 150, createjs.Ease.quadOut)
          .to({rotation: 0}, 100, createjs.Ease.quadIn);
      }
      //We can add the + 1 here because the ZLayers for these values are
      // spaced in 2s. That way anais fits inbetween rows and isn't victim to
      // be stable sorting on the same row
      switch (anais.row) {
        case 0:
          anais.z = ZLayer.topRoad + 1;
          break;
        case 1:
          anais.z = ZLayer.topMiddleRoad + 1;
          break;
        case 2:
          anais.z = ZLayer.middleRoad + 1;
          break;
        case 3:
          anais.z = ZLayer.bottomMiddleRoad + 1;
          break;
        case 4:
          anais.z = ZLayer.bottomRoad + 1;
          break;
      }
      if (!doneTutorialPhase1) {
        if (hasReachedTopRowInTutorial && !hasReachedBottomRowInTutorial && anais.row == 2) {
          hasReachedBottomRowInTutorial = true;
          if (tutSprite) {
            createjs.Tween.removeTweens(tutSprite);
            createjs.Tween.get(tutSprite)
              .to({alpha: 0}, 250)
              .call(function() {
                uiContainer.removeChild(tutSprite);
                tutSprite = null;
              });
          }
        } else if (!hasReachedTopRowInTutorial && anais.row == 1) {
          hasReachedTopRowInTutorial = true;
          if (tutSprite) {
            switchToTutDown();
          }
        }
      }
      util.sortConByZ(container);
    }
  }

  var switchToTutDown = _.once(function() {
    createjs.Tween.removeTweens(tutSprite);
    if (util.isMobile()) {
      createjs.Tween.get(tutSprite)
        .to({alpha: 0}, 250)
        .call(function() {
          var startY = tutSprite.y = stageHeight * 0.45;
          createjs.Tween.get(tutSprite)
            .wait(200)
            .to({alpha: 1}, 250)
            .call(function() {
              createjs.Tween.get(tutSprite, {loop: true})
                .to({scaleX: 0.8, scaleY: 0.8}, 200, createjs.Ease.cubicIn)
                .to({y: startY + stageHeight * 0.3}, 350, createjs.Ease.cubicIn)
                .to({scaleX: 1, scaleY: 1}, 200, createjs.Ease.cubicOut)
                .to({alpha: 0}, 250)
                .to({y: startY}, 1)
                .to({alpha: 1}, 250);
            });
        });
    } else {
      createjs.Tween.get(tutSprite, {loop: true})
        .wait(500)
        .call(function() {
          tutSprite.gotoAndPlay('tutKeysDown');
        })
        .wait(500)
        .call(function() {
          tutSprite.gotoAndPlay('tutKeysNeutral');
        });
    }
  });

  function initTouchControls(anais, container) {
    var inputY = null;
    var doneADragMove = false;
    if (!util.isMobile()) {
      document.onkeydown = function(e) {
        if (_.includes(moveUpKeys, e.keyCode)) {
          doMove(anais, -1, container);
        } else if (_.includes(moveDownKeys, e.keyCode)) {
          doMove(anais, 1, container);
        }
      };
    }
    game.stage.on('stagemousedown', function(e) {
      doneADragMove = false;
      inputY = e.stageY;
    }, game);
    game.stage.on('stagemousemove', function(e) {
      if (inputY != null) {
        if (Math.abs(e.stageY - inputY) >=
          stageHeight * data.gameFeel.dragMovementThreshold) {
          doneADragMove = true;
          doMove(anais, e.stageY > inputY ? 1 : -1, container);
          inputY = e.stageY;
        }
      }
    }, game);
    game.stage.on('stagemouseup', function(e) {
      if (!doneADragMove && Math.abs(e.stageY - inputY) >=
        stageHeight * data.gameFeel.flickMovementThreshold) {
        doMove(anais, e.stageY > inputY ? 1 : -1, container);
      }
      inputY = null;
    }, game);
  }

  function removeInputControls() {
    if (!util.isMobile()) {
      document.onkeydown = _.noop;
    }
    game.stage.removeEventListener('stagemousedown');
    game.stage.removeEventListener('stagemousemove');
    game.stage.removeEventListener('stagemouseup');
  }

  /**
   * This method counts down 3, 2, 1, GO
   * @param {Function=} onTimerExpired The method to call when Raven has entered
   */
  function startCountDownToCollectDolls(onTimerExpired) {
    var bounds = {
      width: stageWidth / 3,
      height: stageHeight / 5
    };
    var props = {
      color: '#fff',
      size: 150
    };
    var outline = {
      color: '#fff',
      size: 0
    };
    var shadow = {
      color: '#3d2228',
      offsetX: -6,
      offsetY: 12
    };
    var timer = gameTextHelper.createTextForLocale('3', bounds, props, outline, shadow);
    var fadeTime = 700;
    var fadeScale = 1.5;
    timer.regX = timer.getMeasuredWidth() / 2;
    timer.regY = timer.getMeasuredHeight() / 2;
    timer.x = stageWidth / 2;
    timer.y = stageHeight * 0.4;
    if (font === 'gumball' && navigator.userAgent.indexOf("Firefox") > 0) {
      timer.y += 80;
    }
    var countdownTween = createjs.Tween.get(timer);
    for (var i = 3; i >= 0; --i) {
      countdownTween.call(function() {
        if (this.val === 0) {
          gameTextHelper.setTextForLocale(timer, 'countdownGo', bounds, props, outline);
          am.playSfx('countdownHigh', {volume: data.volumes.countdownVolume});
        } else {
          timer.setText(this.val);
          am.playSfx('countdownLow', {volume: data.volumes.countdownVolume});
        }
        timer.regX = timer.getMeasuredWidth() / 2;
        timer.regY = timer.getMeasuredHeight() / 2;
      }.bind({val: i})).wait(1000);
    }
    //start the fade out for 3
    createjs.Tween.get(timer, {loop: true})
      .to({scaleX: fadeScale, scaleY: fadeScale, alpha: 0}, fadeTime)
      .wait(1000 - fadeTime)
      .call(function() {
        _.extend(timer, {scaleX: 1, scaleY: 1, alpha: 1});
      });
    countdownTween
      .call(function() {
        createjs.Tween.removeTweens(timer);
        timer.parent.removeChild(timer);
        _.attempt(onTimerExpired);
      });
    return timer;
  }

  var uiContainer;
  return function createGameScene(sceneManager) {
    previousRow = null;
    currentGameplaySong = 'gameplayMusic';
    totalTravelDistance = data.gameFeel.travelDistanceScreenPercent * stageWidth;
    var gameContainer = new createjs.Container();
    var scrollSpeedPhase1 = util.isMobile() ?
      data.gameFeel.scrollSpeedPhase1Mobile : data.gameFeel.scrollSpeedPhase1;
    var phase1VelocityCap = -scrollSpeedPhase1;
    //used for denoting which phase of gameplay we're in
    phase = 0;
    //reset variables
    dollCountScore = 0;
    dollCountActual = 0;
    boostCount = 0;
    //add scrollable ground
    var changeAnaisToStretching = _.once(function() {
      anais.playPhase1Stretching();
    });
    var foreground = foregroundCreator({
      onReachedFinishLine: function() {
        //slowly move anais across the screen once she's reached that
        // minimum distance
        var fraction = Math.abs(
          math.clamp(foreground.velocity, phase1VelocityCap, 0) /
          scrollSpeedPhase1);
        phase1VelocityCap = foreground.velocity;
        changeAnaisToStretching();
        anais.x = math.lerp(
            data.gameFeel.boostPhaseXPercent,
            data.gameFeel.acquirePhaseXPercent, fraction) *
          stageWidth;
      },
      onReachedHalf: function() {
        anais.inTransition = true;
        return createjs.Tween.get(anais)
          .call(function() {
            anais.playYankBack();
          })
          .wait(data.gameFeel.yankBackHangTime)
          .call(function() {
            anais.playPhase21();
            _.each(foreground.children, function(obst) {
              if (_.includes(['doll', 'boost', 'slow'], obst.type)) {
                createjs.Tween.get(obst)
                  .to({alpha: 0}, 1000)
                  .call(function() {
                    obst.removeSelf();
                  });
              }
            });
            var child = anais.children[anaisZLayer.doll];
            createjs.Tween.get(child, {override: true})
              .to({
                x: -child.x + anais.width,
                scaleX: -1 * child.scaleX
              }, 100, createjs.Ease.quadInOut);
            anais.inTransition = false;
            phase = 2;
            am.playSfx('whipBack');
            currentGameplaySong = 'gameplayMusicReturn';
            am.transitionTo('gameplayMusic', currentGameplaySong, data.audio.gameplayMusicReturn, {
              interrupt: true,
              volume: data.volumes.gameplayMusicReturnVolume
            });
            if (windSfx == null) {
              windSfx = am.playSfx('windLoop', {
                loopCount: -1,
                volume: 0
              });
            }
            if (!am.isSfxMuted()) {
              createjs.Tween.get(windSfx || {}).to({volume: data.volumes.windVolume}, 500);
            }
          });
      },
      onReachedStart: function() {
        removeInputControls();
        phase = 3;
        createjs.Tween.get(anais)
          .call(function() {
            am.playSfx('slowDown', {volume: 0.4});
            am.stopMusicTrack('gameplayMusicReturn', true);
            currentGameplaySong = 'gameplayMusicEnding';
            am.playMusic(currentGameplaySong, data.audio.gameplayMusicEnding, {
              interrupt: true,
              volume: data.volumes.gameplayMusicEndingVolume
            });
            var newTimeScale = 0.6;
            time.changeTimeScale({
              duration: 2500,
              scale: newTimeScale
            });
            createjs.Tween.get(windSfx || {}, {ignoreGlobalPause: true}).to({volume: 0}, 250 * newTimeScale);
            zoom.zoom(gameContainer, {
              x: 0.25 * stageWidth,
              y: anais.y
            }, null, {
              scale: 1.5,
              zoomInTime: 1500 * newTimeScale,
              zoomOutTime: 0
            });
          })
          .to({x: 0.2 * stageWidth}, 500)
          .call(function() {
            var dolls = _.filter(anais.children[anaisZLayer.doll].children, function(child) {
              return _.chain(child).get('removeSelf').isFunction().value();
            });
            _.each(dolls, function(doll) {
              createjs.Tween.get(doll, {override: true})
                .to(foreground.globalToLocal(
                  random.getRandomInt(-stageWidth, stageWidth),
                  random.getRandomFloat(-1, 0.5) * stageHeight), 500);
            });
            var smoke = new createjs.Sprite(ssm.get('propsSheet'),
              'explosionCloud');
            smoke.scaleX = smoke.scaleY = 2;
            smoke.regX = smoke.getBounds().width;
            smoke.regY = smoke.getBounds().height;
            _.extend(smoke, _.pick(anais, 'x', 'y'));
            am.stopMusicTrack(currentGameplaySong, true);
            am.playSfx('finalCrash');
            am.playSfx('slamLong');
            shaker.customShake(gameContainer, {
              x: 0,
              y: 50
            }, {
              duration: 1000,
              diminish: true,
              diminishEase: createjs.Ease.sineOut
            });
            foreground.addChild(smoke);
            //foreground.removeChild(anais);
            var whiteTrans = new createjs.Shape();
            whiteTrans.graphics
              .beginFill('#fff')
              .rect(stageWidth * -0.2, stageHeight * -0.2, stageWidth * 1.2, stageHeight * 1.2);
            whiteTrans.alpha = 0;
            gameContainer.addChild(whiteTrans);
            createjs.Tween.get(whiteTrans)
              .to({alpha: 1}, 200);
            anais.playVictory();
            smoke.on('animationend', function() {
              for(var i = foreground.children - 1; i >= 0; --i) {
                foreground.removeChildAt(i);
              }
              game.gameContainer.removeChild(foreground);
              anais.removeEvents();
              smoke.removeAllEventListeners();
              game.anaisSprite = null;//let gc deal with it
              delete game.updateFPS;
              _.set(windSfx, 'volume', 0);
              _.set(flameSfx, 'volume', 0);
              windSfx = flameSfx = null;
              hasBegunFlames = false;
              zoom.instantUnZoom(gameContainer, true);
              sceneManager.gotoResults(dollCountScore, boostCount, dollCountActual);
            });
          });
      }
    });
    gameContainer.addChild(foreground);
    //Effect container
    var effectsContainer = new createjs.Container();
    foreground.addChild(effectsContainer);
    var stationaryEffectsContainer = new createjs.Container();
    stationaryEffectsContainer.type = 'stationary';
    foreground.addChild(stationaryEffectsContainer);
    //Then add anais
    var anais = anaisCreator();
    anais.x = stageWidth * data.gameFeel.acquirePhaseXPercent;
    doMove(anais, 0, foreground);
    foreground.addChild(anais);
    //then add ui
    uiContainer = new createjs.Container();
    uiContainer.type = 'uiContainer';
    var hudConstituents = hudCreator(sceneManager, uiContainer, anais);
    uiContainer.addChild.apply(uiContainer, _.values(hudConstituents));
    var anaisAnimationPhase = 1;
    anais.on('tick', function() {
      if (phase === 0 || phase === 3 || anais.inTransition) {
        return;
      }

      //updateVelocity
      var target = phase === 1 ?
        (totalTravelDistance)
        : foreground.initialDistanceTraveled;
      var fraction = Math.abs(foreground.distanceTraveled) / target;
      fraction = math.clamp(fraction, 0, 1);
      var method = 'playPhase' + phase;
      if (fraction < data.gameFeel.phase2Percent) {
        if (anaisAnimationPhase !== 1) {
          anaisAnimationPhase = 1;
          anais[method + 1]();
        }
      } else if (fraction < data.gameFeel.phase3Percent) {
        if (anaisAnimationPhase !== 2) {
          anaisAnimationPhase = 2;
          anais[method + 2]();
        }
      } else {
        if (anaisAnimationPhase !== 3) {
          anaisAnimationPhase = 3;
          anais[method + 3]();
        }
      }
      if (phase === 2 && boostCount >= data.gameFeel.boostCountForFlames && !hasBegunFlames) {
        anais.toggleFlames(true);
        hasBegunFlames = true;
      }
      var inStretch = phase === 1 && fraction >= 1;
      //collision detection with dolls
      _.chain(foreground.children)
        .each(function(obst) {
          if (!obst || obst.type === 'anais' || obst.type === 'ground') {
            return;
          }
          var inRange = !obst.collided &&
            (obst.x + gridColumnWidth) > 0 &&
            obst.x < stageWidth &&
            obst.row === anais.row;
          var anaisExtent = (phase === 1 ? anais.width : 0) +
            anais.x;
          var obstacleExtent = (phase === 1 ? 0 : gridColumnWidth) +
            obst.x;
          var compare = phase === 1 ? greaterThanInRange : lessThanInRange;

          function addImpulse(baseVelocity, targetVelocity, special) {
            foreground.velocity = baseVelocity *
              (special ? data.gameFeel.specialImpulse : data.gameFeel.impulse) *
              (inStretch ? data.gameFeel.stretchPhaseImpulseMultiplier : 1);
            createjs.Tween.get(foreground, {override: true})
              .to({velocity: targetVelocity || baseVelocity},
              inStretch ? data.gameFeel.stretchImpulseToNormalTime :
                data.gameFeel.impulseToNormalTime);
          }

          if (inRange && foreground.atFullVelocity &&
            compare(anaisExtent, obstacleExtent)) {
            if (obst.type === 'doll') {
              //Doll collision
              var fontSize;
              var fontColor;
              var specialPoints;
              var textString;
              if (obst.special) {
                switch (obst.specialIndex) {
                  case 1:
                    fontSize = 70;
                    fontColor = '#ffa9ec';
                    specialPoints = data.gameFeel.pointsGainedOnCollectSpecial1;
                    break;
                  case 2:
                    fontSize = 72;
                    fontColor = '#ff78e1';
                    specialPoints = data.gameFeel.pointsGainedOnCollectSpecial2;
                    break;
                  case 3:
                    fontSize = 75;
                    fontColor = '#ff47d6';
                    specialPoints = data.gameFeel.pointsGainedOnCollectSpecial3;
                    break;
                  case 4:
                    fontSize = 80;
                    fontColor = '#ff2cd0';
                    specialPoints = data.gameFeel.pointsGainedOnCollectSpecial4;
                    break;
                  default:
                    fontSize = 70;
                    fontColor = '#ffa9ec';
                    specialPoints = data.gameFeel.pointsGainedOnCollectSpecial1;
                    break;
                }
                textString = '+' + specialPoints;
                am.playSfx('itemCollectSpecial', {volume: 0.8});
                if (phase === 1) {
                  totalTravelDistance += data.gameFeel.distanceGainedOnCollectSpecial;
                }
              } else {
                fontSize = 60;
                fontColor = '#fff';
                textString = '+' + data.gameFeel.pointsGainedOnCollect;
                am.playSfx('itemCollect', {volume: 0.5});
                if (phase === 1) {
                  totalTravelDistance += data.gameFeel.distanceGainedOnCollect;
                }
              }
              var globalCollPos = obst.parent.localToGlobal(obst.x, obst.y);
              var collectFx = fxp.getCollectEffect(effectsContainer.globalToLocal(globalCollPos.x, globalCollPos.y), {
                x: stageWidth * 0.03,
                y: stageHeight * -0.07
              });
              effectsContainer.addChild(collectFx);
              effectsContainer.z = anais.z + 1;
              util.sortConByZ(foreground);

              var text = gameTextHelper.createTextForLocale(textString,{
                width: 0.2 * stageWidth,
                height: 0.2 * stageHeight
              }, {
                size: fontSize,
                color: fontColor,
                textAlign: 'center'
              }, {
                size: 0,
                color: '#3d2228'
              }, {
                color: '#3d2228',
                offsetX: -2,
                offsetY: 5
              });
              text.type = 'pointsVisual';
              text.alpha = 0;
              var obstPos = obst.parent.localToGlobal(obst.x, obst.y);
              text.x = obstPos.x + (random.getRandomFloat(0, 0.05) * stageWidth);
              text.y = obstPos.y + (random.getRandomFloat(-0.2, -0.15) * stageHeight);
              createjs.Tween.get(text)
                .to({alpha: 1, y: text.y - stageHeight * 0.1}, 500,
                  createjs.Ease.bounceOut)
                .wait(100)
                .to({
                  x: stageWidth * 0.5,
                  y: stageHeight * 0.02,
                  scaleX: 0.7,
                  scaleY: 0.7,
                  alpha: 0
                }, 300, createjs.Ease.circOut)
                .call(function() {
                  text.parent.removeChild(text);
                  dollCountScore += obst.special ?
                    specialPoints :
                    data.gameFeel.pointsGainedOnCollect;
                  hudConstituents.dollCount.updateDollCount(dollCountScore, true);
                });
              uiContainer.addChild(text);
              addImpulse(-scrollSpeedPhase1, phase1VelocityCap,
                obst.special);
              //do collect before increasing doll count so that we know when
              // to not physically add a doll
              anais.collectDollsInPile(obst, dollCountActual, specialPoints);
              dollCountActual += obst.special ?
                specialPoints :
                data.gameFeel.pointsGainedOnCollect;
            } else if (obst.type === 'boost') {
              //Boost collision
              am.playSfx('speedBoost', {volume: 0.6});
              anais.hitBoost(++boostCount);
              obst.children[0].gotoAndPlay('boostCollide');
              obst.children[0].on('animationend', function() {
                obst.children[0].gotoAndPlay('boost');
              });
              shaker.customShake(gameContainer, {
                x: 30,
                y: 0
              }, {
                duration: 500,
                diminish: true,
                diminishEase: createjs.Ease.sineOut
              });
              addImpulse(util.isMobile() ? data.gameFeel.scrollSpeedPhase2Mobile
                : data.gameFeel.scrollSpeedPhase2);
            } else if (obst.type === 'slow') {
              //Obstacle collision
              if (phase === 1) {
                totalTravelDistance -= data.gameFeel.distanceLostOnHit;
              }
              var globalSmokePos = obst.parent.localToGlobal(obst.x, obst.y);
              var obsSmoke = fxp.getSmokeEffect(effectsContainer.globalToLocal(globalSmokePos.x, globalSmokePos.y), {
                x: stageWidth * -0.02,
                y: stageHeight * -0.25
              });
              effectsContainer.addChild(obsSmoke);
              effectsContainer.z = anais.z + 1;
              util.sortConByZ(foreground);
              obst.removeSelf();
              am.playSfx('obstacleHit' + random.getRandomInt(1, 3), {volume: 0.6});
              anais.playHit();
              shaker.customShake(gameContainer, {
                x: 40,
                y: 0
              }, {
                duration: 600,
                diminish: true,
                diminishEase: createjs.Ease.sineOut
              });
              var oldDollCountScore = dollCountScore;
              for (var i = 0; dollCountActual > 1 && i < data.gameFeel.dollsLostOnCollision; ++i) {
                anais.dropDoll(dollCountActual > data.gameFeel.dollsAllowedToFollow,
                  stationaryEffectsContainer);
                stationaryEffectsContainer.z = anais.z;
                util.sortConByZ(stationaryEffectsContainer);
                if(dollCountActual > 1) {
                  --dollCountActual;
                }
              }
              dollCountScore = dollCountActual;
              if (oldDollCountScore !== dollCountScore) {
                hudConstituents.dollCount.updateDollCount(dollCountScore, false);
              }
            }
            obst.collided = true;
            anais.ensureDollCountActualMatchesChildrenLength(
              Math.min(dollCountActual, data.gameFeel.dollsAllowedToFollow)
            );
            return true;
          }
        }).value();
    });
    //Then add a timer to start the game
    var doCountDown = function() {
      createjs.Tween.get()
        .wait(500)
        .call(function() {
          var timer = startCountDownToCollectDolls(function() {
            foreground.startScrollLeft();
            anais.playIdleToStand();
            createjs.Tween.get(anais)
              .wait(150)
              .call(function() {
                phase = 1;
                anais.playPhase11();
                anais.makeRopeWhileStarting();
              })
              .wait(700)
              .call(function(){
                initTouchControls(anais, foreground);
                anais.shakePhase1String();
              });
          });
          gameContainer.addChild(timer);
        });
    };
    anais.playIdle();
    gameContainer.addChild(uiContainer);
    if (data.debug.showFps) {
      var fpsText = util.createFpsText();
      fpsText.z = 1000;
      gameContainer.addChild(fpsText);
      game.updateFPS = function(event) {
        fpsText.refresh(event);
      };
    }
    doCountDown();
    foreground.addChild.apply(foreground, rap.createPhase1AchorPoints());
    anais.makeString(stageHeight * 0.175);
    return gameContainer;
  };
});