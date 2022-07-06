/* global define, _, game, createjs, data, stageWidth, stageHeight,
 tutSprite, totalTravelDistance */
define([
  'common/util',
  'common/random',
  'common/spriteSheetManager',
  'common/gameText',
  'itemSpawner',
  'tutorialOverlay',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(util, random, ssm, gameTextHelper, itemSpawner, tutorialOverlay) {

  var makeSwipeSprite = _.once(function() {
    var spriteString = util.isMobile() ? 'tutHand' : 'tutKeysNeutral';
    tutSprite = new createjs.Sprite(ssm.get('uiSheet'), spriteString);
    tutSprite.regX = tutSprite.getBounds().width / 2;
    tutSprite.regY = tutSprite.getBounds().height / 2;
    tutSprite.x = stageWidth * 0.5;
    tutSprite.y = stageHeight * 0.55;
    tutSprite.alpha = 0;

    if (util.isMobile()) {
      tutSprite.rotation = -90;
      var startY = tutSprite.y = stageHeight * 0.75;
      createjs.Tween.get(tutSprite)
        .wait(500)
        .to({alpha: 1}, 250)
        .call(function() {
          createjs.Tween.get(tutSprite, {loop: true})
            .to({scaleX: 0.8, scaleY: 0.8}, 200, createjs.Ease.cubicIn)
            .to({y: startY - stageHeight * 0.3}, 350, createjs.Ease.cubicIn)
            .to({scaleX: 1, scaleY: 1}, 200, createjs.Ease.cubicOut)
            .to({alpha: 0}, 250)
            .to({y: startY}, 1)
            .to({alpha: 1}, 250);
        });
    } else {
      createjs.Tween.get(tutSprite)
        .wait(500)
        .to({alpha: 1}, 250)
        .call(function() {
          createjs.Tween.get(tutSprite, {loop: true})
            .wait(500)
            .call(function() {
              tutSprite.gotoAndPlay('tutKeysUp');
            })
            .wait(500)
            .call(function() {
              tutSprite.gotoAndPlay('tutKeysNeutral');
            });
        });
    }
    var uiCont = _.find(game.gameContainer.children, {type: 'uiContainer'});
    uiCont.addChild(tutSprite);
  });
  var markerCount = 0;
  var backgroundMaker = {
    locker: function(useSeam, useBlurry) {
      var locker = new createjs.Sprite(ssm.get('lockerSheet'),
        (useSeam ? 'seam' : 'regular') + (useBlurry ? '-blur' : ''));
      locker.z = ZLayer.background;
      locker.type = 'locker';
      locker.blurry = !!useBlurry;
      locker.seam = !!useSeam;
      return locker;
    },
    ground: function(useSeam, useBlurry) {
      var key = useSeam ? 'seam' : 'regular';
      var markerText;
      var isMarker;
      if (useSeam && seamCount-- === 0) {
        markerCount += 100;
        seamCount = numberOfSeamsBeforeMarking;
        key = 'checkpoint';
        isMarker = true;
        markerText = gameTextHelper.createTextForLocale(markerCount + 'm',{
          width: 0.2 * stageWidth,
          height: 0.08 * stageHeight
        }, {
          size: 50,
          color: '#fff',
          textAlign: 'right'
        }, {
          size: 0,
          color: '#3d2228'
        }, {
          color: '#3d2228',
          offsetX: -1,
          offsetY: 2
        });
      }
      if (useBlurry) {
        key += '-blur';
      }
      var bottom = new createjs.Sprite(ssm.get('bgSheet'), key);
      bottom.scaleX = bottom.scaleY = 2;
      bottom.regY = bottom.getBounds().height;
      bottom.y = stageHeight;
      var bottomContainer = new createjs.Container();
      if(isMarker && phase === 1) {
        markerText.x = stageWidth * 0.48;
        markerText.y = stageHeight * 0.1;
        markerText.z = bottom.z + 1;
        bottomContainer.addChild(bottom, markerText);
      } else {
        bottomContainer.addChild(bottom);
      }
      bottomContainer.z = ZLayer.foreground;
      bottomContainer.type = 'ground';
      bottomContainer.seam = !!useSeam;
      bottomContainer.blurry = !!useBlurry;
      return bottomContainer;
    },
    startEndPiece: function() {
      var board = new createjs.Bitmap(
        queue.getResult('assets/images/EMEA_TB_Bg_StarEndPiece.png')
      );
      board.regY = board.image.height;
      board.type = 'board';
      board.y = stageHeight;
      board.z = ZLayer.foreground + 1;
      return board;
    }
  };

  var seamCount = 3;
  var numberOfSeamsBeforeMarking = 3;

  function scrollWorld(foreground, dx, isPhase1) {
    _.each(foreground.children, function(child) {
      if (!child || child.type === 'anais' || child.type === 'stationary') {
        return;
      }
      var modifier = 1;
      if (child.type === 'locker') {
        modifier = data.gameFeel['lockerScrollRatio' + (isPhase1 ? 1 : 2)];
      }
      child.x += dx * modifier;
    });
  }

  function updateBackground(foreground, isPhase1) {
    //check if chunk is off screen or going offscreen to add a
    // new chunk quickly so it looks continuous
    var sortedArray = _.chain(foreground.children)
      .sortBy('x');
    _.each(['locker', 'ground'], function(type) {
      var trimmedArray = sortedArray.filter({type: type});
      var item = (isPhase1 ? trimmedArray.last() : trimmedArray.first()).value();
      var comparator = (isPhase1 ? _.lte : _.gte);
      if (comparator(item.x, 0)) {
        var second = backgroundMaker[item.type](!item.seam, item.blurry);
        foreground.addChild(second);
        second.x = item.x + (isPhase1 ? 1 : -1) * stageWidth;
        util.sortConByZ(foreground);
      }
    });
  }
  var fullScreenItems = ['ground', 'locker'];
  var collectableItems = ['doll', 'boost', 'slow'];
  function removeOffScreenItems(array, isPhase1) {
    var comparator = isPhase1 ? _.lt : _.gt;
    var direction = isPhase1 ? -1 : 1;
    for(var i = array.length - 1; i >= 0; --i) {
      var item = array[i];
      var fullScreenOutOfBounds = _.includes(fullScreenItems, item.type) &&
        comparator(item.x, direction * stageWidth);
      var obstacleOutOfBounds = _.includes(collectableItems, item.type) &&
        comparator(item.x, isPhase1 ? -gridColumnWidth : stageWidth);
      if (fullScreenOutOfBounds || obstacleOutOfBounds) {
        if (_.isFunction(item.removeSelf)) {
          item.removeSelf();
        } else {
          item.parent.removeChildAt(i);
        }
      }
    }
  }

  function doTransition1toIn(foreground) {
    var sortedChildren = _.chain(foreground.children)
      .sortBy('x');
    var leftMostLocker = sortedChildren
      .filter({type: 'locker'})
      .first().value();
    var leftMostGroundX = sortedChildren
      .filter({type: 'ground'})
      .sortBy('x')
      .first().get('x').value();
    var leftMostLockerX = leftMostLocker.x;
    if (!leftMostLocker.seam) {
      leftMostLocker = backgroundMaker.locker(true);
      leftMostLocker.x = leftMostLockerX - stageWidth;
      foreground.addChild(leftMostLocker);
      leftMostLockerX = leftMostLocker.x;
    }
    leftMostLocker = backgroundMaker.locker(true, true);
    leftMostLocker.gotoAndPlay('transitionStart');
    leftMostLocker.x = leftMostLockerX - stageWidth;
    var leftMostGround = backgroundMaker.ground(true, true);
    leftMostGround.children[0].gotoAndPlay('transition');
    leftMostGround.x = leftMostGroundX - stageWidth;
    foreground.addChild(leftMostLocker, leftMostGround);
    util.sortConByZ(foreground);
  }

  function doFloorTransitionOut(foreground) {
    var sortedChildren = _.chain(foreground.children)
      .sortBy('x');
    var leftMostGround = sortedChildren
      .filter({type: 'ground'})
      .first().value();
    var leftMostLockerX = leftMostGround.x;

    leftMostGround = backgroundMaker.ground(true, false);
    leftMostGround.children[0].gotoAndPlay('transitionEnd');
    leftMostGround.x = leftMostLockerX - stageWidth;
    foreground.addChild(leftMostGround);
    sortedChildren.find({type: 'board'}).value().alpha = 1;
    util.sortConByZ(foreground);
  }

  function addItemIfAboutToBeInView(foreground, itemsToAdd, dx, isPhase1) {
    _.remove(itemsToAdd, function(item) {
      item.x += dx;
      if ((isPhase1 && item.x + dx < stageWidth) ||
        (!isPhase1 && item.x + dx > -gridColumnWidth)) {
        foreground.addChild(item);
        return true;
      }
      return false;
    });
  }

  function moveContainerWithVelocity(foreground, isPhase1, onComplete,
                                     onReachLine) {
    function onPhaseEnd() {
      createjs.Tween.removeTweens(foreground);
      foreground.removeAllEventListeners('tick');
      _.attempt(onComplete);
    }

    var itemsToAdd = [];
    var phase1ItemSpawner = _.throttle(function() {
      var furthestItemX = _.chain(itemsToAdd).sortBy('x')
        .last()
        .get('x', 0)
        .value();
      if (_.isEmpty(itemsToAdd) || furthestItemX - stageWidth >= stageWidth) {
        var percent = Math.abs(foreground.distanceTraveled) /
          (totalTravelDistance);
        _.each(itemSpawner.getItemsForPhase1(percent), function(item) {
          item.x += furthestItemX + gridColumnWidth;
          itemsToAdd.push(item);
        });
      }
    }, 100);
    var phase2ItemSpawner = _.throttle(function() {
      var furthestItemX = _.chain(itemsToAdd).sortBy('x')
        .first()
        .get('x', 0)
        .value();
      if (_.isEmpty(itemsToAdd) || -furthestItemX >= stageWidth) {
        var percent = Math.abs(foreground.distanceTraveled) /
          (foreground.initialDistanceTraveled);
        _.each(itemSpawner.getItemsForPhase2(percent), function(item) {
          item.x += furthestItemX - gridColumnWidth;
          itemsToAdd.push(item);
        });
      }
    }, 100);
    var doneFloorTransitionOut = false;
    foreground.on('tick', function() {
      if (createjs.Ticker.paused) {
        return;
      }
      var dx = foreground.velocity / data.fps;
      //before anything, move the world
      scrollWorld(foreground, dx, isPhase1);
      removeOffScreenItems(foreground.children, isPhase1);
      updateBackground(foreground, isPhase1);

      if (!doneTutorialPhase1) {
        makeSwipeSprite();
        if (hasReachedBottomRowInTutorial && hasReachedTopRowInTutorial && !createjs.Tween.hasActiveTweens(game)) {
          createjs.Tween.get(game)
            .wait(500)
            .call(function() {
              if(doTutorialCards) {
                tutorialOverlay.createOverlayForPhase1(_.find(game.gameContainer.children, {
                  type: 'uiContainer'
                }), function() {
                  doneTutorialPhase1 = true;
                  var board = backgroundMaker.startEndPiece();
                  board.x = 0;
                  board.alpha = 0;
                  foreground.addChild(board);
                });
              } else {
                doneTutorialPhase1 = true;
                var board = backgroundMaker.startEndPiece();
                board.x = 0;
                board.alpha = 0;
                foreground.addChild(board);
              }
            });
        }
      } else {
        //update distance traveled
        foreground.distanceTraveled += dx;
        addItemIfAboutToBeInView(foreground, itemsToAdd, dx, isPhase1);
        if (isPhase1) {
          phase1ItemSpawner();
          var pastLine = Math.abs(foreground.distanceTraveled) >=
            totalTravelDistance;
          if (pastLine && !createjs.Tween.hasActiveTweens(foreground)) {
            foreground.velocity += data.gameFeel.pastLineSlowDownAmount;
            _.attempt(onReachLine);
            if (foreground.velocity >= 0) {
              onPhaseEnd();
              doTransition1toIn(foreground);
            }
          }
        } else {
          var distanceRemaining = foreground.initialDistanceTraveled -
              Math.abs(foreground.distanceTraveled);
          if (distanceRemaining <= 0) {
            onPhaseEnd();
          } else if (distanceRemaining <= stageWidth){
            itemsToAdd = [];
          } else if (distanceRemaining <= 2 * stageWidth){
            if (!doneFloorTransitionOut) {
              doFloorTransitionOut(foreground);
              doneFloorTransitionOut = true;
            }
          } else {
            phase2ItemSpawner();
          }
        }
      }
    });
  }

  function moveToEndBoard(foreground) {
    foreground.on('tick', function() {
      if (createjs.Ticker.paused) {
        return;
      }
      var boardPiece = _.find(foreground.children, {type: 'board'});
      var dx = foreground.velocity / data.fps;
      if (boardPiece.x < 0) {
        scrollWorld(foreground, dx);
        removeOffScreenItems(foreground.children, false);
        updateBackground(foreground, false);
      }
      if (boardPiece.x > 0) {
        boardPiece.x = 0;
        foreground.removeAllEventListeners();
      }
    });
  }

  /**
   * creates a scrollable foreground
   * @param {Object} foreground The createjs.Container to scroll
   * @param {Object} callbacks An object that holds callbacks for when the
   * scroll has reached the on both sides
   * @param {Function} callbacks.onReachedHalf Callback for when anais
   * reaches the first half of the run (before turning around)
   * @param {Function} callbacks.onReachedStart Callback for when anais
   * reaches the finish line after passing the original starting point
   * @param {Function} callbacks.onReachedFinishLine Callback for anais
   * reaches the line and is called while anais is slowing down
   */
  function addScrollMixin(foreground, callbacks) {
    foreground.startScrollLeft = function() {
      foreground.distanceTraveled = 0;
      foreground.velocity = 0;
      foreground.atFullVelocity = false;
      createjs.Tween.get(foreground)
        .to({velocity: util.isMobile() ? -data.gameFeel.scrollSpeedPhase1Mobile
          : -data.gameFeel.scrollSpeedPhase1}, 1000)
        .call(function() {
          foreground.atFullVelocity = true;
        });
      moveContainerWithVelocity(foreground, true, function() {
        _.attempt(callbacks.onReachedHalf).call(function() {
          foreground._startScrollRight();
        });
      }, callbacks.onReachedFinishLine);
    };
    foreground._startScrollRight = function() {
      foreground.initialDistanceTraveled = Math.abs(foreground.distanceTraveled);
      foreground.distanceTraveled = 0;
      foreground.velocity = 0;
      foreground.atFullVelocity = false;
      var startPhase2 = function() {
        doneTutorialPhase2 = true;
        createjs.Tween.get(foreground)
          .to({velocity: util.isMobile() ? data.gameFeel.scrollSpeedPhase2Mobile
            : data.gameFeel.scrollSpeedPhase2}, 1000)
          .call(function() {
            foreground.atFullVelocity = true;
          });
        moveContainerWithVelocity(foreground, false, function() {
          moveToEndBoard(foreground);
          _.attempt(callbacks.onReachedStart);
        });
      };
      if (!doneTutorialPhase2 && doTutorialCards) {
        tutorialOverlay.createOverlayForPhase2(_.find(game.gameContainer.children, {
          type: 'uiContainer'
        }), startPhase2);
      } else {
        startPhase2();
      }
    };
  }

  /**
   * creates a scrollable foreground
   * @param {Object} callbacks An object that holds callbacks for when the
   * scroll has reached the on both sides
   * @param {Function} callbacks.onReachedHalf Callback for when anais
   * reaches the first half of the run (before turning around)
   * @param {Function} callbacks.onReachedFinish Callback for when anais
   * reaches the finish line after passing the original starting piont
   * @returns {Object} an instance of createjs.Container that has a function
   * that initiates the scroll
   */
  function createForeground(callbacks) {
    markerCount = 0;
    seamCount = numberOfSeamsBeforeMarking;
    var foreground = new createjs.Container();
    var ground = backgroundMaker.ground(true, false);
    foreground.addChild(ground);
    var locker = backgroundMaker.locker(true, false);
    foreground.addChild(locker);
    var board = backgroundMaker.startEndPiece();
    if (!doneTutorialPhase1) {
      board.type = 'ground';
    }
    board.x = -0.2 * board.image.width;
    foreground.addChild(board);
    addScrollMixin(foreground, callbacks);
    return foreground;
  }

  return createForeground;
});