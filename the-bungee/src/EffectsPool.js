/* global define, _, game, createjs, data, stageWidth*/
define([
  'common/ObjectPool',
  'common/spriteSheetManager',
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function(ObjectPool, ssm) {
  /**
   * Creates a new instance of an effect
   * @returns {Object} An instance of a createjs.Sprite of the prop sheet
   */
  function create(){
    var sprite = new createjs.Sprite(ssm.get('propsSheet'));
    sprite.type = 'fx';
    return sprite;
  }

  /**
   * Initializes the effect
   *
   * @param {Object} effect The createjs.Sprite
   * @param {Object} params
   * @param {Number} params.scale The x and y scale of the object
   * @param {String} params.key The animation to play
   * @param {Object} params.location
   * @param {Object} params.location.x The screen space x location
   * @param {Object} params.location.y The screen space y location
   * @param {Object} params.offset
   * @param {Number} params.offset.x The x percent in screen space to
   * offset from location
   * @param {Number} params.offset.y The y percent in screen space to
   * offset from location
   */
  function init(effect, params) {
    effect.gotoAndPlay(params.key);
    _.extend(effect, params.location);
    effect.scaleX = effect.scaleY = params.scale;
    effect.regX = (effect.getBounds().width * effect.scaleX) / 2;
    effect.regY = (effect.getBounds().height * effect.scaleY) / 2;
    effect.x += params.offset.x;
    effect.y += params.offset.y;
    effect.removeAllEventListeners();
    effect.on('animationend', function() {
      effect.parent.removeChild(effect);
      effectsPool.release(effect);
    });
  }
  var effectsPool = new ObjectPool(create, init);
  return {
    getCollectEffect: function(location, offset) {
      return effectsPool.acquire({
        scale: 0.5,
        key: 'collectEffect',
        location: location,
        offset: offset
      });
    },
    getSmokeEffect: function(location, offset) {
      return effectsPool.acquire({
        scale: 0.7,
        key: 'explosionCloudFast',
        location: location,
        offset: offset
      });
    }
  };
});