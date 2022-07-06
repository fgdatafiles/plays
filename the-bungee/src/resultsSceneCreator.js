/* global define, _, game, createjs, data, stageWidth, stageHeight*/
define([
  'common/cookieManager',
  'common/gameText',
  'common/util',
  'common/spriteSheetManager',
  'common/audioManager',
  'common/shaker',
  'common/random',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(cookie, gameTextHelper, util, ssm, am, shaker, random) {
  var results;
  var isBest = false;

  function createBackground() {
    var bgContainer = new createjs.Container();
    var scorebg = new createjs.Sprite(ssm.get('uiSheet'), 'resultsLanding');
    scorebg.y = stageHeight * 0.05;
    var anais = new createjs.Sprite(ssm.get('uiSheet'), 'anaisResults');
    anais.x = stageWidth * 0.56;
    var anaisShadow = new createjs.Sprite(ssm.get('uiSheet'), 'anaisShadowResults');
    anaisShadow.x = stageWidth * 0.6;
    anaisShadow.y = stageHeight * 0.3;
    var anaisContainer = new createjs.Container();
    anaisContainer.y = -anais.getBounds().height;
    createjs.Tween.get(anaisContainer)
      .wait(300)
      .to({y: stageHeight * -0.1}, 500, createjs.Ease.cubicOut)
      .call(function () {
        createjs.Tween.get(anaisContainer, {loop: true})
          .to({y: stageHeight * -0.2}, 850, createjs.Ease.sineInOut)
          .to({y: stageHeight * -0.1}, 850, createjs.Ease.sineInOut)
      });
    anaisContainer.addChild(anaisShadow, anais);
    bgContainer.addChild(scorebg, anaisContainer);
    return bgContainer;
  }

  function createScoreFormula(args) {
    var formulaContainer = new createjs.Container();
    //Doll icon & text
    var itemContainer = new createjs.Container();
    var itemIcon = new createjs.Sprite(ssm.get('uiSheet'), 'itemCounter');
    var itemCountText = gameTextHelper.createTextForLocale(args[0], {
      width: stageWidth * 0.15,
      height: stageHeight * 0.2
    }, {
      color: '#ece0d9',
      size: 75,
      textAlign: 'left'
    }, {
      color: '#ece0d9',
      size: 0
    }, {
      color: '#260f15',
      offsetX: -6,
      offsetY: 12
    });
    itemIcon.x = stageWidth * -0.01;
    itemIcon.y = stageHeight * -0.01;
    itemIcon.regX = itemIcon.getBounds().width;
    itemCountText.y = font === 'fred' ? 0.04 * stageHeight : stageHeight * 0.02;
    if (font === 'gumball' && navigator.userAgent.indexOf("Firefox") > 0) {
      itemCountText.y += 20;
    }
    itemCountText.regY = itemCountText.getBounds().height / 2;
    itemContainer.addChild(itemIcon, itemCountText);
    itemContainer.x = 0.1 * stageWidth;
    itemContainer.y = 0.135 * stageHeight;
    //Multiplier icon & text
    var multContainer = new createjs.Container();
    var multIcon = new createjs.Sprite(ssm.get('uiSheet'), 'multCounter');
    var multCountText = gameTextHelper.createTextForLocale(args[1], {
      width: stageWidth * 0.15,
      height: stageHeight * 0.2
    }, {
      color: '#ece0d9',
      size: 75,
      textAlign: 'left'
    }, {
      color: '#ece0d9',
      size: 0
    }, {
      color: '#260f15',
      offsetX: -6,
      offsetY: 12
    });
    multIcon.x = stageWidth * -0.01;
    multIcon.y = stageHeight * -0.015;
    multIcon.regX = multIcon.getBounds().width;
    multCountText.y = font === 'fred' ? 0.04 * stageHeight : stageHeight * 0.02;
    if (font === 'gumball' && navigator.userAgent.indexOf("Firefox") > 0) {
      multCountText.y += 20;
    }
    multCountText.regY = multCountText.getBounds().height / 2;
    multContainer.addChild(multIcon, multCountText);
    multContainer.x = 0.37 * stageWidth;
    multContainer.y = 0.14 * stageHeight;


    //Multiplier icon & text
    //var multSign = new createjs.Sprite(ssm.get('uiSheet'), 'multSign');
    //multSign.regX = multSign.getBounds().width / 2;
    //multSign.y = 0.18 * stageHeight;
    var divider = new createjs.Sprite(ssm.get('uiSheet'), 'divider');
    divider.regX = divider.getBounds().width / 2;
    //multSign.x =
    divider.x = 0.28 * stageWidth;
    divider.y = 0.29 * stageHeight;
    formulaContainer.addChild(itemContainer, multContainer, /*multSign,*/ divider);
    return formulaContainer;
  }

  function createScoreText(args) {
    var scoreContainer = new createjs.Container();
    var scoreLabel = gameTextHelper.createTextForLocale('resultsScore', {
      width: stageWidth * 0.26,
      height: stageHeight * 0.2
    }, {
      color: '#f27fb2',
      size: 80,
      textAlign: 'right'
    }, {
      color: '#f27fb2',
      size: 0
    }, {
      color: '#260f15',
      offsetX: -6,
      offsetY: 12
    });
    scoreLabel.regY = scoreLabel.getBounds().height;
    scoreLabel.x = 0.28 * stageWidth;
    scoreLabel.y = 0.42 * stageHeight;

    var val;
    if(args[0] === 0 && args[1] === 0) {
      val = util.formatNumberForLoc(0);
    } else {
      val = util.formatNumberForLoc((args[0] === 0 ? 1 : args[0]) *
        data.gameFeel.scoreScalar *
        (args[1] === 0 ? 1 : args[1]));
    }

    var score = gameTextHelper.createTextForLocale(val, {
      width: stageWidth * 0.26,
      height: stageHeight * 0.2
    }, {
      color: '#f27fb2',
      size: 80,
      textAlign: 'left'
    }, {
      color: '#f27fb2',
      size: 0
    }, {
      color: '#260f15',
      offsetX: -6,
      offsetY: 12
    });
    score.regY = score.getBounds().height;
    score.x = 0.3 * stageWidth;
    score.y = 0.42 * stageHeight;

    scoreContainer.addChild(scoreLabel, score);
    return scoreContainer;
  }

  function createBestScoreText(args) {
    var bestScoreContainer = new createjs.Container();
    var bestScoreLabel = gameTextHelper.createTextForLocale('resultsBest', {
      width: stageWidth * 0.22,
      height: stageHeight * 0.2
    }, {
      color: '#ece0d9',
      size: 70,
      textAlign: 'right'
    }, {
      color: '#ece0d9',
      size: 0
    }, {
      color: '#260f15',
      offsetX: -6,
      offsetY: 12
    });
    bestScoreLabel.regY = bestScoreLabel.getBounds().height;
    bestScoreLabel.x = 0.28 * stageWidth;
    bestScoreLabel.y = 0.57 * stageHeight;
    var currentScore = args[0] * data.gameFeel.scoreScalar * args[1];
    var val = Number(cookie.getCookie('tb-best-score'));
    if (!_.isNumber(val) ||
      _.isNaN(val) ||
      currentScore > val) {
      cookie.setCookie('tb-best-score', currentScore);
      val = currentScore;
      isBest = true;
    }
    val = util.formatNumberForLoc(val);
    var bestScore = gameTextHelper.createTextForLocale(val, {
      width: stageWidth * 0.22,
      height: stageHeight * 0.2
    }, {
      color: '#ece0d9',
      size: _.includes(['fr', 'es'], data.language) ? 50 : 70,
      textAlign: 'left'
    }, {
      color: '#ece0d9',
      size: 0
    }, {
      color: '#260f15',
      offsetX: -6,
      offsetY: 12
    });
    bestScore.regY = bestScore.getBounds().height;
    bestScore.x = 0.3 * stageWidth;
    bestScore.y = 0.57 * stageHeight;

    bestScoreContainer.addChild(bestScoreLabel, bestScore);
    return bestScoreContainer;
  }

  function createSoundButtons() {
    var soundContainer = new createjs.Container();
    //Music button
    var musicButton = new createjs.Sprite(ssm.get('uiSheet'), 'music');
    musicButton = util.createButton(_.pick(musicButton.getBounds(), 'width', 'height'), true,
      {
        onMouseDown: function() {
          am.playSfx(data.audio.buttonClick,
            {volume: data.volumes.buttonClickVolume});
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
          am.playSfx(data.audio.buttonClick,
            {volume: data.volumes.buttonClickVolume});
        },
        onMouseUp: function() {
          am.toggleSfxMuted();
          if (am.isSfxMuted()) {
            cookie.setCookie('tb-mute-sfx', 'true');
            sfxButton.alpha = 0.5;
          } else {
            cookie.setCookie('tb-mute-sfx', 'false');
            sfxButton.alpha = 1;
          }
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
    soundContainer.addChild(musicButton, sfxButton);
    return soundContainer;
  }
  function createNewRecord() {
    var newRecordContainer = new createjs.Container();

    var newRecordImage = new createjs.Sprite(ssm.get('uiSheet'), 'newRecord');
    newRecordImage.regX = newRecordImage.getBounds().width / 2;
    newRecordImage.regY = newRecordImage.getBounds().height / 2;
    var newText = gameTextHelper.createTextForLocale('resultsNew', {
      width: newRecordImage.getBounds().width * 0.55,
      height: newRecordImage.getBounds().height * 0.3
    }, {
      color: '#fff',
      size: 140,
      textAlign: 'center'
    }, {
      color: '#fff',
      size: 0
    }, {
      color: '#612f56',
      offsetX: -9,
      offsetY: 9
    });
    //newText.regX = newText.getBounds().width / 2;
    newText.regY = newText.getBounds().height / 2;
    newText.y = -0.18 * stageHeight;
    newText.x = 0.01 * stageWidth;

    var recordText = gameTextHelper.createTextForLocale('resultsRecord', {
      width: newRecordImage.getBounds().width * 0.75,
      height: newRecordImage.getBounds().height * 0.5
    }, {
      color: '#fff',
      size: 98,
      textAlign: 'center'
    }, {
      color: '#fff',
      size: 0
    }, {
      color: '#612f56',
      offsetX: -8,
      offsetY: 8
    });
    //recordText.regX = recordText.getBounds().width / 2;
    recordText.regY = recordText.getBounds().height /2;
    recordText.y = -0.06 * stageHeight;
    recordText.x = 0.01 * stageWidth;

    newRecordContainer.x = stageWidth * 0.28;
    newRecordContainer.y = stageHeight * 0.38;
    newRecordContainer.rotation = -10;

    newRecordContainer.addChild(newRecordImage, newText, recordText);
    return newRecordContainer;
  }
  var createReplayButton = function(sceneManager) {
    var replay = new createjs.Sprite(ssm.get('uiSheet'), 'replay');
    replay = util.createButton(_.pick(replay.getBounds(), 'width', 'height'), true, {
      onMouseDown: function() {
        am.playSfx(data.audio.buttonClick,
          {volume: data.volumes.buttonClickVolume});
      },
      onMouseUp: function() {
        createjs.Tween.removeAllTweens();
        sceneManager.gotoGame();
        am.transitionTo('resultsMusic', 'gameplayMusic',
          data.audio.gameplayMusic, {
            interrupt: true,
            volume: data.volumes.gameplayMusicVolume
          });
      }
    }, {
      target: replay
    });
    replay.x = stageWidth * 0.25;
    replay.y = stageHeight * 0.83;
    return replay;
  };

  var createHomeButton = function(sceneManager) {
    var quitImage = new createjs.Sprite(ssm.get('uiSheet'), 'home');
    var quitBounds = _.pick(quitImage.getBounds(), 'width', 'height');
    var quitButton = util.createButton(quitBounds, true, {
      onMouseDown: function() {
        am.playSfx(data.audio.buttonClick,
          {volume: data.volumes.buttonClickVolume});
      },
      onMouseUp: _.once(function(){
        sceneManager.gotoTitle();
        am.transitionTo('resultsMusic', 'gameplayMusic',
          data.audio.gameplayMusic, {
            interrupt: true,
            volume: data.volumes.titleMusicVolume
          });
      })
    }, {
      target: quitImage
    });
    quitButton.regY = quitButton.getBounds().height;
    quitButton.x = 0.05 * stageWidth;
    quitButton.y = 0.85 * stageHeight;
    return quitButton;
  };

  function rainSingleDoll(doll, minDepth, maxDepth) {
    var yOffset = random.getRandomInt(0, 2) * stageHeight;
    var depthOffset = random.getRandomFloat(minDepth, maxDepth);
    var depthRatio = 1 + (1 - (depthOffset - maxDepth) / (maxDepth - minDepth));
    doll.regX = doll.getBounds().width / 2;
    doll.regY = doll.getBounds().height;
    doll.y = -yOffset;
    doll.x = random.getRandomFloat(0, stageWidth);
    doll.scaleX = doll.scaleY = depthOffset * 0.7;
    doll.z = depthOffset;
    doll.rotation = random.getRandomInt(-90, 90);
    doll.visible = true;
    createjs.Tween.get(doll)
      .to({
        y: stageHeight * 2,
        rotation: doll.rotation + random.getRandomInt(-300, 300)
      }, 1500 * depthRatio)
      .call(function() {
        doll.parent.removeChild(doll);
      });
  }

  function startDollRain(rainContainer, dollCount, minDepth, maxDepth) {
    var dollGetter = _.chain([
      _.times(3, _.constant('daisy0')),
      _.times(3, _.constant('daisy1')),
      _.times(3, _.constant('daisy2')),
      _.times(3, _.constant('daisy3')),
      _.times(1, _.constant('cereal')),
      _.times(1, _.constant('candy')),
      _.times(1, _.constant('soda')),
      _.times(1, _.constant('tp'))
    ]).flatten().sample();
    var count = 0;
    var waves = 4;
    var dollsPerWave = dollCount / waves;
    var tween = createjs.Tween.get(rainContainer);
    while(count < dollCount) {
      var doll = new createjs.Sprite(ssm.get('propsSheet'), dollGetter.value());
      tween = tween.wait(count * 50).call(function() {
        rainSingleDoll(this, minDepth, maxDepth);
      }.bind(doll));
      rainContainer.addChild(doll);
      doll.visible = false;
      if (++count % dollsPerWave === 0) {
        //tween = tween.wait(1000);
      }
    }
    util.sortConByZ(rainContainer);
  }
  return function createGameScene(sceneManager, args) {
    am.transitionTo('gameplayMusic', 'resultsMusic', data.audio.resultsMusic, {
      interrupt: true,
      volume: data.volumes.resultsMusicVolume
    });
    results = new createjs.Container();
    var scoreCont = new createjs.Container();
    var rainContainer = new createjs.Container();
    (function() {
      var bg = new createjs
        .Bitmap(queue.getResult('assets/images/EMEA_TB_ScoreCard.jpg'));
      scoreCont.addChild(bg);
    })();
    scoreCont.addChild(rainContainer, createBackground(), createScoreFormula(args), createScoreText(args),
      createBestScoreText(args));
    results.addChild(scoreCont, createSoundButtons(), createHomeButton(sceneManager),
      createReplayButton(sceneManager));

    var newRecord = createNewRecord();
    results.addChild(newRecord);
    newRecord.scaleY = newRecord.scaleX = 1.5;
    newRecord.alpha = 0;
    if(isBest) {
      createjs.Tween.get(newRecord)
        .wait(1000)
        .to({scaleX: 1, scaleY: 1, alpha: 1}, 250, createjs.Ease.sineIn)
        .call(function() {
          shaker.mediumShake(results);
          am.playSfx('scoreCounter',{volume: 0.8});
          am.playSfx('highScore',{volume: 0.3});
          isBest = false;
        })
        .wait(1500)
        .to({y: stageHeight * 2}, 500, createjs.Ease.backIn)
        .to({rotation: -45}, 400, createjs.Ease.sineIn);
    }
    var rainContainer2 = new createjs.Container();
    results.addChild(rainContainer2);
    startDollRain(rainContainer, args[2] * 0.9, 1.5, 2);
    startDollRain(rainContainer2, args[2] * 0.1, 2, 2.5);
    return results;
  };
});