/* global define, _, game, createjs, data*/
define([
  'common/util',
  './navbarPrompt',
  './titleSceneCreator',
  './storySceneCreator',
  './gameSceneCreator',
  './resultsSceneCreator'
], function(util, nav, tsc, ssc, gsc, rsc) {
  function switchTo(sceneManager, method, args) {
    function goIntoScene() {
      game.gameContainer = method(sceneManager, args);
      game.stage.addChild(game.gameContainer);
      util.sortConByZ(game.gameContainer);
      fadeInTo(game.gameContainer);
    }
    createjs.Tween.removeAllTweens();
    if (game.gameContainer) {
      fadeOutOf(game.gameContainer, function() {
        game.stage.removeChild(game.gameContainer);
        goIntoScene();
      });
    } else {
      goIntoScene();
    }
  }
  var seenStory = false;
  var seenPrompt = false;
  return {
    gotoGame: function() {
      if (!seenStory) {
        seenStory = true;
        switchTo(this, ssc, arguments);
      } else {
        switchTo(this, gsc, arguments);
      }
    },
    gotoResults: function() {
      switchTo(this, rsc, arguments);
    },
    gotoTitle: function() {
      var isSafari = navigator.userAgent.match(/Safari/) &&
        !navigator.userAgent.match(/CriOS/);
      if (!seenPrompt && util.isMobile() && isSafari) {
        seenPrompt = true;
        switchTo(this, nav, arguments);
      } else {
        switchTo(this, tsc, arguments);
      }
    }
  };
});