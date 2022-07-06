/* global define, _, game, createjs, data, stageWidth*/
define([
  'common/audioManager',
  'common/util',
  'common/gameText',
  'common/spriteSheetManager',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(am, util, gameTextHelper, ssm) {

  var ignoreGlobalPause = {
    ignoreGlobalPause: true
  };

  function makeHeader(textKey) {
    //Header
    var instructionText = gameTextHelper.createTextForLocale(textKey, {
      width: stageWidth * 0.6,
      height: stageHeight * 0.2
    }, {
      color: '#fff',
      size: 100,
      textAlign: 'center'
    }, {
      color: '#fff',
      size: 0
    }, {
      color: '#3d2228',
      offsetX: -6,
      offsetY: 10
    });
    instructionText.regY = instructionText.getBounds().height / 2;
    instructionText.y = stageHeight * 0.1;
    instructionText.x = stageWidth / 2;
    return instructionText;
  }

  function makeBody(textKey, x, y) {
    //Body string
    var instructionText = gameTextHelper.createTextForLocale(textKey, {
      width: stageWidth * 0.7,
      height: stageHeight * 0.2
    }, {
      color: '#fff',
      size: 50
    });
    instructionText.regY = instructionText.getBounds().height / 2;
    instructionText.y = y;
    instructionText.x = x;
    return instructionText;
  }

  function makePhase1Text(menu) {
    var instructionText = makeHeader('tutorial1Header');
    var body1Text = makeBody('tutorial1Line1', stageWidth * 0.2, stageHeight * 0.4);
    var body2Text = makeBody('tutorial1Line2', stageWidth * 0.2, stageHeight * 0.65);
    menu.addChild(instructionText, body1Text, body2Text);
  }
  function makePhase2Text(menu) {
    var instructionText = makeHeader('tutorial2Header');
    var body1Text = makeBody('tutorial2Line1', stageWidth * 0.2, stageHeight * 0.4);
    var body2Text = makeBody('tutorial2Line2', stageWidth * 0.2, stageHeight * 0.65);
    menu.addChild(instructionText, body1Text, body2Text);
  }
  function makePhase1Images(menu) {
    var daisy = new createjs.Sprite(ssm.get('propsSheet'), 'daisy1');
    daisy.regX = daisy.getBounds().width / 2;
    daisy.regY = daisy.getBounds().height / 2;
    daisy.x = stageWidth * 0.13;
    daisy.y = stageHeight * 0.4;

    var obs = new createjs.Sprite(ssm.get('propsSheet'), 'slow');
    obs.regX = obs.getBounds().width / 2;
    obs.regY = obs.getBounds().height / 2;
    obs.x = stageWidth * 0.13;
    obs.y = stageHeight * 0.65;
    obs.scaleX = obs.scaleY = 0.6;

    menu.addChild(daisy, obs);
  }
  function makePhase2Images(menu) {
    var boost = new createjs.Sprite(ssm.get('propsSheet'), 'boost');
    boost.regX = boost.getBounds().width / 2;
    boost.regY = boost.getBounds().height / 2;
    boost.x = stageWidth * 0.09;
    boost.y = stageHeight * 0.4;
    boost.scaleX = boost.scaleY = 0.7;

    var obs = new createjs.Sprite(ssm.get('propsSheet'), 'slow');
    obs.regX = obs.getBounds().width / 2;
    obs.regY = obs.getBounds().height / 2;
    obs.x = stageWidth * 0.13;
    obs.y = stageHeight * 0.65;
    obs.scaleX = obs.scaleY = 0.6;

    menu.addChild(boost, obs);
  }
  var initTutorialOverlay = function(container, textGetter, imageGetter, onComplete) {
    var menu = new createjs.Container();
    menu.alpha = 0;
    var backdrop = new createjs.Shape();
    backdrop.graphics
      .beginFill('rgba(32,32,32, 0.85)')
      .rect(0, 0, stageWidth, stageHeight);
    backdrop.visible = true;
    menu.addChild(backdrop);
    textGetter(menu);
    imageGetter(menu);
    //Quit
    var quitImage = new createjs.Sprite(ssm.get('uiSheet'), 'quitYes');
    var quitBounds = _.pick(quitImage.getBounds(), 'width', 'height');
    var quitButton = util.createButton(quitBounds, true, {
      onMouseDown: function(){
        createjs.Tween.get(menu, ignoreGlobalPause)
          .to({alpha: 0}, 200)
          .call(function() {
            createjs.Ticker.paused = false;
            _.attempt(onComplete);
          });
        am.playSfx(data.audio.buttonClick,
          {volume: data.buttonClickVolume});
        am.playSfx(data.audio.whoosh || {},
          {volume: data.volumes.whooshVolume});
      }
    }, {
      target: quitImage
    });
    quitButton.scaleX = quitButton.scaleY = 0.8;
    quitButton.regY = quitButton.getBounds().height;
    quitButton.x = stageWidth * 0.9;
    quitButton.y = stageHeight * 0.85;
    menu.addChild(quitButton);

    container.addChild(menu);
    return menu;
  };
  return {
    createOverlayForPhase1: function(container, onComplete) {
      var menu = initTutorialOverlay(container, makePhase1Images, makePhase1Text, onComplete);
      createjs.Ticker.paused = true;
      createjs.Tween.get(menu, ignoreGlobalPause)
        .to({alpha: 1}, 200);
    },
    createOverlayForPhase2: function(container, onComplete) {
      var menu = initTutorialOverlay(container, makePhase2Images, makePhase2Text, onComplete);
      createjs.Ticker.paused = true;
      createjs.Tween.get(menu, ignoreGlobalPause)
        .to({alpha: 1}, 200);
    }
  };
});