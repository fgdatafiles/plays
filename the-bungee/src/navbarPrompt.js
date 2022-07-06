/* global define, _, game, createjs, data, stageWidth, stageHeight*/
define([
  'common/gameText',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(gameTextHelper) {
  return function createnavbarPrompt(sceneManager) {
    var promptContainer = new createjs.Container();
    var text = gameTextHelper.createTextForLocale('rotateMessage',{
      width: stageWidth * 0.91,
      height: stageHeight * 0.18
    }, {
      size: 60,
      color: '#ffffff',
      textAlign: 'center'
    });
    text.x = stageWidth / 2;
    text.y = stageHeight * 0.185;

    //Rotate back in image
    var rotatePath = 'assets/images/rotateOutBack.png';
    var rotate = new createjs.Bitmap(rotatePath);
    rotate.regX = data.rotateOutBack.width / 2;
    rotate.regY = data.rotateOutBack.height / 2;
    rotate.scaleX = rotate.scaleY = 0.7;
    rotate.x = stageWidth / 2;
    rotate.y = stageHeight * 0.575;

    promptContainer.addChild(rotate, text);
    promptContainer.hitArea = new createjs.Shape();
    promptContainer.hitArea.graphics.beginFill('#f00')
      .drawRect(0, 0, stageWidth, stageHeight);
    promptContainer.on('mousedown', function() {
      promptContainer.removeAllEventListeners();
      fadeOutOf(promptContainer, function() {
        promptContainer.parent.removeChild(promptContainer);
        sceneManager.gotoTitle();
      });
    });
    return promptContainer;
  };
});