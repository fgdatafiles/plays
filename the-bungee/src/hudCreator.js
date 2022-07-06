/* global define, _, game, createjs, data, stageWidth, stageHeight*/
define([
  'common/gameText',
  'common/audioManager',
  'common/spriteSheetManager',
  'common/util',
  'pauseMenu',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(gameTextHelper, am, ssm, util, pauseMenu) {

  function makeDollText() {
    var padding = 0.01 * stageWidth; //as percentage of stageWidth
    var cont = new createjs.Container();
    var dollIcon = new createjs.Sprite(ssm.get('uiSheet'), 'itemCounter');
    dollIcon.x = -dollIcon.getBounds().width - (padding * 2);
    var text = gameTextHelper.createTextForLocale('0', {
      width: 0.2 * stageWidth,
      height: 0.2 * stageHeight
    }, {
      color: '#fff',
      size: 80
    }, {
      color: '#fff',
      size: 0
    }, {
      color: '#3d2228',
      offsetX: -5,
      offsetY: 10
    });
    text.y = font === 'fred' ? 0.05 * stageHeight : 0.02 * stageHeight;
    if (font === 'gumball' && navigator.userAgent.indexOf("Firefox") > 0) {
      text.y += 20;
    }
    text.regY = text.getBounds().height / 2;
    cont.x = stageWidth * 0.5;
    cont.y = stageHeight * 0.01;
    cont.updateDollCount = function(count, goingUp) {
      text.setText(count);
      //createjs.Tween.removeTweens(cont);
      //text.scaleX = text.scaleY = 1;
      //text.rotation = 0;
      if(goingUp) {
        createjs.Tween.get(cont)
          .to({scaleX: 1.1, scaleY: 1.1}, 100, createjs.Ease.cubicInOut)
          .to({scaleX: 1, scaleY: 1}, 100, createjs.Ease.cubicInOut);
      } else {
        createjs.Tween.get(cont)
          .to({rotation: -10}, 110, createjs.Ease.cubicInOut)
          .to({rotation: 8}, 200, createjs.Ease.cubicInOut)
          .to({rotation: -6}, 160, createjs.Ease.cubicInOut)
          .to({rotation: 4}, 105, createjs.Ease.cubicInOut)
          .to({rotation: -2}, 70, createjs.Ease.cubicInOut)
          .to({rotation: 0}, 50, createjs.Ease.cubicInOut);
      }
    };
    cont.addChild(dollIcon, text);
    return cont;
  }

  function createPauseButton(sceneManager, container, anais) {
    var pauseButton = new createjs.Sprite(ssm.get('uiSheet'), 'pause');
    var bounds = _.pick(pauseButton.getBounds(), 'width', 'height');
    pauseButton = util.createButton({
        width: bounds.width * 2,
        height: bounds.height * 2
      }, true,
      {
        onMouseDown: function() {
          am.playSfx(data.audio.buttonClick || {},
            {volume: data.buttonClickVolume});
        },
        onMouseUp: function() {
          if (!createjs.Ticker.paused) {
            var windVol = _.get(windSfx, 'volume');
            var flameVol = _.get(flameSfx, 'volume');
            pauseMenu.togglePauseMenu(sceneManager, container, function onResume() {
              if (!am.isSfxMuted()) {
                createjs.Tween.get(windSfx || {}, {ignoreGlobalPause: true})
                  .to({volume: windVol}, 300);
                createjs.Tween.get(flameSfx || {}, {ignoreGlobalPause: true})
                  .to({volume: flameVol}, 300);
              }
            }, function onLeaveScene() {
              _.set(windSfx, 'volume', 0);
              _.set(flameSfx, 'volume', 0);
              windSfx = flameSfx = null;
              phase = 0;
              anais.toggleFlames(false);
              hasBegunFlames = false;
              currentGameplaySong = null;
            });
            am.playSfx(data.audio.whoosh || {},
              {volume: data.volumes.whooshVolume});
            am.adjustMusicTrackVolume(currentGameplaySong,
              data.volumes.pauseMusicVolume, 400);
            createjs.Tween.get(windSfx || {}, {ignoreGlobalPause: true})
              .to({volume: 0}, 300);
            createjs.Tween.get(flameSfx || {}, {ignoreGlobalPause: true})
              .to({volume: 0}, 300);
          }
        }
      }, {
        target: pauseButton
      });
    pauseButton.regX = bounds.width /2;
    pauseButton.regY = bounds.height / 2;
    pauseButton.x = stageWidth * 0.95;
    pauseButton.y = stageHeight * 0.13;
    return pauseButton;
  }

  return function createHud(sceneManager, container, anais) {
    return {
      dollCount: makeDollText(),
      pauseButton: createPauseButton(sceneManager, container, anais)
    };
  };
});