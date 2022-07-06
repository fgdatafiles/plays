/* global define, _, game, createjs, data, stageWidth*/
define([
  'common/audioManager',
  'common/util',
  'common/gameText',
  'common/spriteSheetManager',
  'common/cookieManager',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(am, util, gameTextHelper, ssm, cookie) {
  var menu;
  var pausePanelEnterFrom;
  var destination;
  var pausePanelLeaveTo;
  var pauseContainer;
  var confirmPanelEnterFrom;
  var confirmPanelLeaveTo;
  var backdrop;
  var panelTransitionTime = 500;
  var panelTransitionEase = createjs.Ease.backInOut;
  var musicIcon;
  var sfxIcon;
  var tutOverlayOpen = false;
  var ignoreGlobalPause = {
    ignoreGlobalPause: true
  };

  function cleanReferences() {
    menu = pausePanelEnterFrom = destination =
      pausePanelLeaveTo = pauseContainer = confirmPanelEnterFrom =
        confirmPanelLeaveTo = backdrop =
          musicIcon = sfxIcon = null;
  }
  function setPause(newPauseState) {
    createjs.Ticker.paused = newPauseState;
    game.anaisSprite.paused = newPauseState;
    backdrop.visible = newPauseState;
  }
  function togglePauseMenu(sceneManager, container, onResume, onLeaveScene) {
    var target;
    var isPaused = createjs.Ticker.paused;
    if (!isPaused) {
      initPauseMenu(sceneManager, container, onResume, onLeaveScene);
      target = destination;
      _.extend(pauseContainer, pausePanelEnterFrom);
    } else {
      target = pausePanelLeaveTo;
      _.extend(pauseContainer, destination);
    }

    createjs.Tween.get(pauseContainer, ignoreGlobalPause)
      .call(function() {
        if (!isPaused) {
          setPause(true);
        }
      })
      .to(target, panelTransitionTime, panelTransitionEase)
      .call(function() {
        if (isPaused) {
          container.removeChild(menu);
          _.attempt(onResume);
          setPause(false);
          cleanReferences();
        }
      });
  }
  var initQuitMenu = function(sceneManager, container, onLeaveScene) {
    //Make the container that will hold everything. This container will be the animated thing.
    var confirmContainer = new createjs.Container();
    confirmContainer.z = 10;
    var sh = ssm.get('uiSheet');
    //The background panel
    var panel = new createjs.Sprite(sh, 'quitOverlay');
    panel.regX = panel.getBounds().width / 2;
    panel.regY = panel.getBounds().height / 2;
    confirmContainer.addChild(panel);

    //Header
    var pauseTitle = gameTextHelper.createTextForLocale('quitTitle', {
      width: stageWidth * 0.3,
      height: stageHeight * 0.2
    }, {
      color: '#fff',
      size: 130,
      textAlign: 'center'
    }, {
      color: '#fff',
      size: 0
    }, {
      color: '#3d2228',
      offsetX: -6,
      offsetY: 10
    });
    pauseTitle.y = stageHeight * -0.22;
    pauseTitle.x = stageWidth * 0.01;
    confirmContainer.addChild(pauseTitle);

    //Quit No
    var quitImageNo = new createjs.Sprite(sh, 'quitNo');
    var doCancel = _.once(function(){
      am.playSfx(data.audio.buttonClick,
        {volume: data.buttonClickVolume});
      am.playSfx(data.audio.whoosh || {},
        {volume: data.volumes.whooshVolume});
      createjs.Tween.get(confirmContainer, ignoreGlobalPause)
        .set(destination)
        .to(confirmPanelEnterFrom,panelTransitionTime, panelTransitionEase)
        .call(function() {
          confirmContainer.parent.removeChild(confirmContainer);
        });
      createjs.Tween.get(pauseContainer, ignoreGlobalPause)
        .set(pausePanelLeaveTo)
        .to(destination, panelTransitionTime, panelTransitionEase);
    });
    var quitButtonNo = util.createButton({width: quitImageNo.getBounds().width,
      height: quitImageNo.getBounds().height}, true, {
        onMouseDown: doCancel
    }, {
      target: quitImageNo
    });
    quitButtonNo.x = stageHeight * -0.16;
    quitButtonNo.y = 0.12 * stageHeight;
    confirmContainer.addChild(quitButtonNo);
    //Quit Yes
    var quitImageYes = new createjs.Sprite(sh, 'quitYes');
    var doActualQuit = _.once(function(){
      am.playSfx(data.audio.buttonClick,
        {volume: data.buttonClickVolume});
      am.playSfx(data.audio.whoosh || {},
        {volume: data.volumes.whooshVolume});
      game.gameOver = true;
      createjs.Tween.removeAllTweens();
      createjs.Tween.get(confirmContainer, ignoreGlobalPause)
        .set(destination)
        .to(confirmPanelLeaveTo,panelTransitionTime, panelTransitionEase)
        .call(function() {
          setPause(false);
          cleanReferences();
          am.stopMusicTrack(currentGameplaySong);
          am.playMusic('gameplayMusic', data.audio.gameplayMusic, {
            interrupt: true,
            volume: data.volumes.titleMusicVolume
          });
          _.attempt(onLeaveScene);
          sceneManager.gotoTitle();
        });
    });
    var quitButtonYes = util.createButton({width: quitImageYes.getBounds().width,
      height: quitImageYes.getBounds().height}, true, {
        onMouseDown: doActualQuit
    }, {
      target: quitImageYes
    });
    quitButtonYes.x = stageHeight * 0.15;
    quitButtonYes.y = 0.12 * stageHeight;
    confirmContainer.addChild(quitButtonYes);
    confirmPanelEnterFrom = {
      x: -panel.regX,
      y: stageHeight / 2
    };
    confirmPanelLeaveTo = {
      x: stageWidth + panel.regX,
      y: stageHeight / 2
    };
    _.extend(confirmContainer, confirmPanelEnterFrom);
    menu.addChild(confirmContainer);
    return confirmContainer;
  };

  var initPauseMenu = function(sceneManager, container, onResume, onLeaveScene) {
    menu = new createjs.Container();
    backdrop = new createjs.Shape();
    backdrop.graphics
      .beginFill('rgba(32,32,32, 0.5)')
      .rect(0, 0, stageWidth, stageHeight);
    backdrop.visible = false;
    menu.addChild(backdrop);
    var sh = ssm.get('uiSheet');

    //Make the container that will hold everything. This container will be the animated thing.
    pauseContainer = new createjs.Container();
    menu.addChild(pauseContainer);

    //The background panel
    var panel = new createjs.Sprite(sh, 'pauseOverlay');
    panel.regX = panel.getBounds().width / 2;
    panel.regY = panel.getBounds().height / 2;
    panel.z = 10;
    pauseContainer.addChild(panel);

    //Header
    var pauseTitle = gameTextHelper.createTextForLocale('pauseTitle', {
      width: stageWidth * 0.36,
      height: stageHeight * 0.2
    }, {
      color: '#fff',
      size: 130,
      textAlign: 'center'
    }, {
      color: '#fff',
      size: 0
    }, {
      color: '#3d2228',
      offsetX: -6,
      offsetY: 10
    });
    pauseTitle.y = stageHeight * -0.41;
    pauseTitle.x = stageWidth * 0.01;
    pauseContainer.addChild(pauseTitle);
    if (font === 'gumball' && navigator.userAgent.indexOf("Firefox") > 0) {
      pauseTitle.y += 20;
    }
    //Music button
    var musicButton = new createjs.Sprite(ssm.get('uiSheet'), 'music');
    musicButton = util.createButton(_.pick(musicButton.getBounds(), 'width', 'height'), true,
      {
        onMouseDown: function() {
          if(!tutOverlayOpen) {
            am.playSfx(data.audio.buttonClick,
              {volume: data.buttonClickVolume});
          }
        },
        onMouseUp: function() {
          if(!tutOverlayOpen) {
            am.toggleMusicMuted();
            if (am.isMusicMuted()) {
              cookie.setCookie('tb-mute-music', 'true');
              musicButton.alpha = 0.5;
            } else {
              cookie.setCookie('tb-mute-music', 'false');
              musicButton.alpha = 1;
            }
          }
        }
      }, {
        target: musicButton,
        ignoreTimeScale: true
      });
    var musicMuted = cookie.getCookie('tb-mute-music') === 'true';
    am.setMuteMusic(musicMuted);
    musicButton.alpha = musicMuted ? 0.5 : 1;
    musicButton.regX = musicButton.getBounds().width / 2;
    musicButton.regY = musicButton.getBounds().height / 2;
    musicButton.x = stageWidth * -0.06;

    //SFX button
    var sfxButton = new createjs.Sprite(ssm.get('uiSheet'), 'sfx');
    sfxButton = util.createButton(_.pick(sfxButton.getBounds(), 'width', 'height'), true,
      {
        onMouseDown: function() {
          if(!tutOverlayOpen) {
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
        }
      }, {
        target: sfxButton,
        ignoreTimeScale: true
      });
    var sfxMuted = cookie.getCookie('tb-mute-sfx') === 'true';
    am.setMuteSfx(sfxMuted);
    sfxButton.alpha = sfxMuted ? 0.5 : 1;
    sfxButton.regX = sfxButton.getBounds().width / 2;
    sfxButton.regY = sfxButton.getBounds().height / 2;
    sfxButton.x = stageWidth * 0.06;

    musicButton.y = sfxButton.y = stageHeight * -0.12;
    pauseContainer.addChild(musicButton, sfxButton);

    //Resume
    var resumeImage = new createjs.Sprite(ssm.get('uiSheet'), 'playPause');
    var resumeBounds = _.pick(resumeImage.getBounds(), 'width', 'height');
    var doResume = _.once(function() {
      togglePauseMenu(sceneManager, container, onResume);
      am.adjustMusicTrackVolume(currentGameplaySong,
        data.volumes.gameplayMusicVolume, 400);
    });
    var resumeButton = util.createButton(resumeBounds, true, {
      onMouseDown: function() {
        if(!tutOverlayOpen) {
          am.playSfx(data.audio.buttonClick,
            {volume: data.buttonClickVolume});
          am.playSfx(data.audio.whoosh || {},
            {volume: data.volumes.whooshVolume});
        }
      },
      onMouseUp: function() {
        if(!tutOverlayOpen) {
          doResume();
        }
      }
    }, {
      target: resumeImage
    });
    resumeButton.regX = resumeBounds.width * 0.5;
    resumeButton.regY = resumeBounds.height * 0.5;
    resumeButton.y = stageHeight * 0.15;
    resumeButton.x = stageWidth * 0.02;
    pauseContainer.addChild(resumeButton);

    //Restart
    /*var restartImage = new createjs.Sprite(ssm.get('uiSheet'), 'replay');
    var restartBounds = _.pick(restartImage.getBounds(), 'width', 'height');
    var doRestart = _.once(function() {
      setPause(false);
      cleanReferences();
      _.attempt(onLeaveScene);
      am.stopMusicTrack('gameplayMusic');
      am.playMusic('gameplayMusic', data.audio.gameplayMusic, {
        interrupt: true,
        volume: data.gameplayMusicVolume
      });
      sceneManager.gotoGame();
    });
    var restartButton = util.createButton(restartBounds, true, {
      onMouseDown: function() {
        if(!tutOverlayOpen) {
          am.playSfx(data.audio.buttonClick,
            {volume: data.audio.buttonClickVolume});
        }
      },
      onMouseUp: function() {
        if(!tutOverlayOpen) {
          doRestart();
        }
      }
    }, {
      target: restartImage
    });
    restartButton.y = stageHeight * 0.135;
    restartButton.x = stageWidth * -0.09;
    restartButton.scaleX = restartButton.scaleY = 0.7;
    pauseContainer.addChild(restartButton);*/


    //Quit
    var quitImage = new createjs.Sprite(ssm.get('uiSheet'), 'home');
    var quitBounds = _.pick(quitImage.getBounds(), 'width', 'height');
    var quitButton = util.createButton(quitBounds, true, {
      onMouseDown: function(){
        if(!tutOverlayOpen) {
          var confirmContainer = initQuitMenu(sceneManager, container, onLeaveScene);
          am.playSfx(data.audio.buttonClick,
            {volume: data.buttonClickVolume});
          am.playSfx(data.audio.whoosh || {},
            {volume: data.volumes.whooshVolume});
          _.extend(confirmContainer, confirmPanelEnterFrom);
          createjs.Tween.get(confirmContainer, ignoreGlobalPause)
            .to(destination, panelTransitionTime, panelTransitionEase);
          createjs.Tween.get(pauseContainer, ignoreGlobalPause)
            .set(destination)
            .to(pausePanelLeaveTo, panelTransitionTime, panelTransitionEase);
        }
      }
    }, {
      target: quitImage
    });
    quitButton.regY = quitButton.getBounds().height;
    quitButton.x = stageWidth * -0.18;
    quitButton.y = stageHeight * 0.33;
    pauseContainer.addChild(quitButton);

    pausePanelEnterFrom = {
      x: -panel.getBounds().width * 2,
      y: stageHeight / 2
    };
    destination = {
      x: stageWidth / 2,
      y: stageHeight / 2
    };
    pausePanelLeaveTo = {
      x: stageWidth + (panel.getBounds().width * 2),
      y: stageHeight / 2
    };
    _.extend(pauseContainer, pausePanelEnterFrom);
    container.addChild(menu);
  };
  return {
    togglePauseMenu: togglePauseMenu
  };
});