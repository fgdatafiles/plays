/* global _, createjs, stageWidth, stageHeight*/
define([
  'common/audioManager',
  'common/util',
  'common/gameText',
  'common/spriteSheetManager',
  'lib/createjs-2015.11.26.combined'
], function(am, util, gt, sm) {
  function makeBGs(container) {
    _.each([1, 2, 3], function(num) {
      var bg = new createjs
        .Bitmap(queue.getResult('assets/images/EMEA_TB_Opener_0' +
          num + '.jpg'));
      bg.alpha = 0;
      container.addChild(bg);
    });
  }
  function makeSpeechBubble() {
    var bubble = new createjs.Sprite(sm.get('propsSheet'), 'speechBubble1');
    bubble.alpha = 0;
    return bubble;
  }

  function makeNextButton(sceneManager) {
    var nextButton = new createjs.Sprite(sm.get('uiSheet'), 'next');
    nextButton = util.createButton(_.pick(nextButton.getBounds(), 'width', 'height'), true, {
      onMouseUp: _.once(function() {
        am.playSfx(data.audio.buttonClick,
          {volume: data.buttonClickVolume});
        _.each([0 , 1, 2], function(id) {
          queue.remove('assets/images/EMEA_TB_Opener_0' + id);
        });
        sceneManager.gotoGame();
        am.transitionTo('storyMusic', 'gameplayMusic', data.audio.gameplayMusic, {
          interrupt: true,
          volume: data.volumes.gameplayMusicVolume
        });
        currentSpeechCont = null;
      })
    }, {
      target: nextButton
    });
    nextButton.x = stageWidth * 0.9;
    nextButton.y = stageHeight * 0.8;

    return nextButton;
  }
  function makeText(index) {
    var info = [
      {
        xOffset: 0,
        yOffset: -0.11 * stageHeight,
        width: (data.language === 'ar' ? 0.34 : 0.38) * stageWidth,
        height: (data.language === 'ar' ? 0.36 : 0.4) * stageHeight,
        size: 50,
        lineHeight: data.language === 'ar' ? 70 : 60,
        textAlign: 'center'
      },
      {
        xOffset: 0.004 * stageWidth,
        yOffset: -0.1 * stageHeight,
        width: 0.24 * stageWidth,
        height: 0.2 * stageHeight,
        size: 80,
        textAlign: 'center'
      },
      {
        xOffset: 0,
        yOffset: -0.1 * stageHeight,
        width: 0.24 * stageWidth,
        height: 0.25 * stageHeight,
        size: 50,
        textAlign: 'center',
        lineHeight: data.language === 'ar' ? 70 : undefined
      }
    ];
    var text = gt.createTextForLocale('story' + index,
      info[index -1], info[index - 1]);
    text.x += info[index - 1].xOffset;
    text.y += info[index - 1].yOffset;
    text.rotation = index === 2 ? 3 : 0;
    text.regY = text.getBounds().height / 2;
    return text;
  }
  function positionSpeechContainer(container, index) {
    if(index === 1){
      container.x = stageWidth * 0.23;
      container.y = stageHeight * 0.55;
    } else if(index === 2) {
      container.x = stageWidth * 0.82;
      container.y = stageHeight * 0.35;
    } else if(index === 3) {
      container.x = stageWidth * 0.47;
      container.y = stageHeight * 0.26;
    }
  }
  var currentSpeechCont;
  function enableBubbleAtLocation(bubble, index, container) {
    bubble.alpha = 1;
    bubble.scaleX = bubble.scaleY = 1 / 0.7;
    bubble.gotoAndPlay('speechBubble' + index);
    bubble.regX = (bubble.getBounds().width) / 2;
    bubble.regY = (bubble.getBounds().height) / 2;
    var text = makeText(index);
    var speechCont = new createjs.Container();
    speechCont.addChild(bubble, text);
    positionSpeechContainer(speechCont, index);
    speechCont.alpha = speechCont.scaleX = speechCont.scaleY = 0;
    createjs.Tween.get(speechCont)
      .wait(index === 1 ? 600 : 0)
      .to({alpha: 1, scaleX: 1, scaleY: 1}, 350, createjs.Ease.backOut);
    currentSpeechCont = speechCont;
    container.addChild(speechCont);
  }
  var bubble1Delay = 0;
  var bubble1HangTime = 5000;
  var bubble2Delay = 0;
  var bubble2HangTime = 2800;
  var bubble3Delay = 100;
  var bubble3HangTime = 3000;

  return function createStory(sceneManager) {
    am.transitionTo('gameplayMusic', 'storyMusic', data.audio.storyMusic, {
      loopCount: 0,
      interrupt: false,
      volume: data.volumes.storyMusicVolume
    });
    var mainContainer = new createjs.Container();
    var container = new createjs.Container();
    mainContainer.addChild(container);
    container.regX = container.x = stageWidth / 2;
    container.regY = container.y = stageHeight / 2;
    makeBGs(container);
    var bubble = makeSpeechBubble();
    var nextButton = makeNextButton(sceneManager);
    mainContainer.addChild(nextButton);
    _.first(container.children).alpha = 1;
    createjs.Tween.get(container)
      .wait(bubble1Delay)
      .call(_.partial(enableBubbleAtLocation, bubble, 1, container))
      .wait(bubble1HangTime)
      .call(function() {
        container.removeChild(currentSpeechCont);
        bubble.alpha = 0;
        container.children[0].alpha = 0;
        container.children[1].alpha = 1;
      })
      .wait(bubble2Delay)
      .call(_.partial(enableBubbleAtLocation, bubble, 2, container))
      .wait(bubble2HangTime * 0.7)
      .call(function() {
        am.playSfx(data.audio.storyMusicPt2, {volume: 1});
      })
      .wait(bubble2HangTime * 0.1)
      .call(function () {
        var whiteTrans = new createjs.Shape();
        whiteTrans.graphics
          .beginFill('#fff')
          .rect(0, 0, stageWidth, stageHeight);
        whiteTrans.alpha = 0;
        mainContainer.addChild(whiteTrans);
        createjs.Tween.get(whiteTrans)
          .to({alpha: 1}, bubble2HangTime * 0.2)
          .to({alpha: 0}, bubble2HangTime * 0.2)
          .call(function(){
            mainContainer.removeChild(whiteTrans);
          });
      })
      .wait(bubble2HangTime * 0.2)
      .call(function() {
        container.removeChild(currentSpeechCont);
        bubble.alpha = 0;
        container.children[1].alpha = 0;
        container.children[2].alpha = 1;
        createjs.Tween.get(container)
          .to({scaleX: 1.2, scaleY: 1.2}, 10000);
      })
      .wait(bubble3Delay)
      .call(_.partial(enableBubbleAtLocation, bubble, 3, container))
      .wait(bubble3HangTime)
      .call(function () {
        createjs.Tween.get(nextButton, {loop: true})
          .to({scaleX: 1.1, scaleY: 1.1}, 500, createjs.Ease.sineInOut)
          .to({scaleX: 1, scaleY: 1}, 500, createjs.Ease.sineInOut);
      });
    return mainContainer;
  };
});