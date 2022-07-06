/* global define, _, game, createjs, data, stageWidth, stageHeight*/
define([
  'common/fx',
  'common/util',
  'common/spriteSheetManager',
  'common/audioManager',
  'common/cookieManager',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(fx, util, ssm, am, cookie) {

  var title;
  var makeBackground = function() {
    var bgContainer = new createjs.Container();
    var bg = new createjs.Bitmap(queue.getResult('assets/images/logo.jpg'));
    var rope = new createjs.Sprite(ssm.get('uiSheet'), 'titleRope');
    rope.regY = rope.getBounds().height / 2;
    rope.x = stageWidth * 0.295;
    rope.y = stageHeight * 0.255;
    var ropeRot = rope.rotation = 8;
    var downwardTime = 500;
    var upwardTime1 = 400;
    var upwardTime2 = 600;
    var easeInType = createjs.Ease.quadIn;
    var easeOutType = createjs.Ease.quadOut;
    createjs.Tween.get(rope, {loop: true})
      .to({rotation: 18}, downwardTime, easeInType)
      .to({rotation: ropeRot}, upwardTime1, easeOutType)
      .to({rotation: 18}, downwardTime, easeInType)
      .to({rotation: ropeRot}, upwardTime2, easeOutType);
    var anais = new createjs.Sprite(ssm.get('uiSheet'), 'anaisTitle');
    anais.x = stageWidth * 0.55;
    var anaisHeight = anais.y = stageHeight * 0.15;
    createjs.Tween.get(anais, {loop: true})
      .to({y: stageHeight * 0.24}, downwardTime, easeInType)
      .to({y: anaisHeight}, upwardTime1, easeOutType)
      .to({y: stageHeight * 0.24}, downwardTime, easeInType)
      .to({y: anaisHeight}, upwardTime2, easeOutType);
    var anaisShadow = new createjs.Sprite(ssm.get('uiSheet'), 'anaisShadowTitle');
    anaisShadow.x = stageWidth * 0.63;
    anaisShadow.y = stageHeight * 0.73;
    anaisShadow.regX = anaisShadow.getBounds().width / 2;
    anaisShadow.regY = anaisShadow.getBounds().height / 2;
    var shadAlpha = anaisShadow.alpha = 0.6;
    var shadScale = anaisShadow.scaleX = anaisShadow.scaleY = 0.9;
    createjs.Tween.get(anaisShadow, {loop: true})
      .to({alpha: 1, scaleX: 1, scaleY: 1}, downwardTime, easeInType)
      .to({alpha: shadAlpha, scaleX: shadScale, scaleY: shadScale}, upwardTime1, easeOutType)
      .to({alpha: 1, scaleX: 1, scaleY: 1}, downwardTime, easeInType)
      .to({alpha: shadAlpha, scaleX: shadScale, scaleY: shadScale}, upwardTime2, easeOutType);
    var daisy = new createjs.Sprite(ssm.get('uiSheet'), 'daisyTitle');
    daisy.x = stageWidth * 0.735;
    var daisyHeight = stageHeight * 0.62;
    daisy.y = stageHeight * 0.65;
    createjs.Tween.get(daisy)
      .wait(downwardTime)
      .call(function () {
        createjs.Tween.get(daisy, {loop: true})
          .to({y: daisyHeight}, (downwardTime + upwardTime1) * 0.2, createjs.Ease.circOut)
          .to({y: stageHeight * 0.65}, (downwardTime + upwardTime1) * 0.6, createjs.Ease.bounceOut)
          .wait((downwardTime + upwardTime1) * 0.2)
          .to({y: daisyHeight}, (downwardTime + upwardTime2) * 0.15, createjs.Ease.circOut)
          .to({y: stageHeight * 0.65}, (downwardTime + upwardTime2) * 0.55, createjs.Ease.bounceOut)
          .wait((downwardTime + upwardTime2) * 0.3);
      });
    var daisyShadow = new createjs.Sprite(ssm.get('uiSheet'), 'daisyShadowTitle');
    daisyShadow.x = stageWidth * 0.7;
    daisyShadow.y = stageHeight * 0.79;
    var daisyShadScale = 0.95;
    createjs.Tween.get(daisyShadow)
      .wait(downwardTime)
      .call(function () {
        createjs.Tween.get(daisyShadow, {loop: true})
          .to({scaleX: daisyShadScale, scaleY: daisyShadScale}, (downwardTime + upwardTime1) * 0.2, createjs.Ease.circOut)
          .to({scaleX: 1, scaleY: 1}, (downwardTime + upwardTime1) * 0.6, createjs.Ease.bounceOut)
          .wait((downwardTime + upwardTime1) * 0.2)
          .to({scaleX: daisyShadScale, scaleY: daisyShadScale}, (downwardTime + upwardTime2) * 0.15, createjs.Ease.circOut)
          .to({scaleX: 1, scaleY: 1}, (downwardTime + upwardTime2) * 0.55, createjs.Ease.bounceOut)
          .wait((downwardTime + upwardTime2) * 0.3);
      });
    bgContainer.addChild(bg, rope, anaisShadow, daisyShadow, anais, daisy);
    title.addChild(bgContainer);
  };
  var makePlayButton = function(sceneManager) {
    var button = new createjs.Sprite(ssm.get('uiSheet'), 'playTitle');
    var width = button.getBounds().width;
    var height = button.getBounds().height;
    button = util.createButton({
      width: width,
      height: height
    }, true, {
      onMouseUp: function() {
        sceneManager.gotoGame();
        am.playSfx(data.audio.buttonClick,
          {volume: data.buttonClickVolume});
      }
    }, {
      target: button
    });
    button.rotation = -20;
    button.regX = button.getBounds().width / 2;
    button.regY = button.getBounds().height / 2;
    button.x = stageWidth * 0.33;
    button.y = stageHeight * 0.74;
    createjs.Tween.get(button, {loop: true})
      .to({rotation: -10}, 1000, createjs.Ease.sineInOut)
      .to({rotation: -20}, 1000, createjs.Ease.sineInOut);
    var buttonShadow = new createjs.Sprite(ssm.get('uiSheet'), 'playShadowTitle');
    buttonShadow.regX = buttonShadow.getBounds().width / 2;
    buttonShadow.x = stageWidth * 0.355;
    buttonShadow.y = stageHeight * 0.81;
    createjs.Tween.get(buttonShadow, {loop: true})
      .to({x: stageWidth * 0.345}, 1000, createjs.Ease.sineInOut)
      .to({x: stageWidth * 0.355}, 1000, createjs.Ease.sineInOut);
    title.addChild(buttonShadow, button);
  };
  var makeSoundButtons = function() {
    //Music button
    var musicButton = new createjs.Sprite(ssm.get('uiSheet'), 'music');
    musicButton = util.createButton(_.pick(musicButton.getBounds(), 'width', 'height'), true,
      {
        onMouseDown: function() {
          am.playSfx(data.audio.buttonClick,
            {volume: data.buttonClickVolume});
        },
        onMouseUp: function() {
          am.toggleMusicMuted();
          if (am.isMusicMuted()) {
            cookie.setCookie('tb-mute-music', 'true');
            musicButton.alpha = 0.5;
          } else {
            cookie.setCookie('tb-mute-music', 'false');
            musicButton.alpha = 1;
          }
        }
      }, {
        target: musicButton
      });
    var musicMuted = cookie.getCookie('tb-mute-music') === 'true';
    am.setMuteMusic(musicMuted);
    musicButton.alpha = musicMuted ? 0.5 : 1;
    musicButton.regX = musicButton.getBounds().width;
    musicButton.regY = 0;
    musicButton.x = stageWidth * 0.89;

    //SFX button
    var sfxButton = new createjs.Sprite(ssm.get('uiSheet'), 'sfx');
    sfxButton = util.createButton(_.pick(sfxButton.getBounds(), 'width', 'height'), true,
      {
        onMouseDown: function() {
          am.toggleSfxMuted();
          if (am.isSfxMuted()) {
            cookie.setCookie('tb-mute-sfx', 'true');
            sfxButton.alpha = 0.5;
          } else {
            cookie.setCookie('tb-mute-sfx', 'false');
            sfxButton.alpha = 1;
          }
          am.playSfx(data.audio.buttonClick,
            {volume: data.buttonClickVolume});
        }
      }, {
        target: sfxButton
      });
    var sfxMuted = cookie.getCookie('tb-mute-sfx') === 'true';
    am.setMuteSfx(sfxMuted);
    sfxButton.alpha = sfxMuted ? 0.5 : 1;
    sfxButton.regX = sfxButton.getBounds().width;
    sfxButton.regY = 0;
    sfxButton.x = stageWidth * 0.97;

    musicButton.scaleY = musicButton.scaleX =
      sfxButton.scaleY = sfxButton.scaleX = 0.7;
    musicButton.y = sfxButton.y = stageHeight * 0.03;
    title.addChild(musicButton, sfxButton);
  };
  return function createGameScene(sceneManager) {
    title = new createjs.Container();
    makeBackground();
    makePlayButton(sceneManager);
    makeSoundButtons();
    return title;
  };
});