/* global define, console, createjs, _ */

define(['./random', '../lib/lodash', '../lib/createjs-2015.11.26.combined'],
function(random) {
  'use strict';

  // we only want one shake a time.
  // However, subsequent shakes can interrupt an existing shake
  var shakeInstance = null;
  return {
    /**
     * Returns an object that can apply a camera shake effect to the
     * container.
     * params: x, y
     *
     * @param {Object} container The createjs container to shake
     * @param {{x: Number, y: Number}} params
     */
    createShaker: function(container, params) {
      return {
        container: container,
        listener: null,
        shakeVector: _.pick(params, 'x', 'y'),

        _originalPosition: _.pick(container, 'x', 'y'),
        _tick: function() {
          // prevent phantom shaking caused by tick firing one more time
          // as it is removed.
          if (this.listener === null) {
            return;
          }
          var offset = {
            x: this._originalPosition.x +
              random.getBinomial(this.shakeVector.x),
            y: this._originalPosition.y +
              random.getBinomial(this.shakeVector.y)
          };

          this.container.x = offset.x;
          this.container.y = offset.y;
        },

        start: function() {
          this.listener = createjs.Ticker.on('tick', this._tick, this);
        },

        stop: function() {
          _.extend(this.container, this._originalPosition);
          createjs.Ticker.removeEventListener('tick', this.listener);
          this.listener = null;
        }
      };
    },
    /**
     * shakes the camera a specified amount for a specified duration
     *
     * @param {Object} container The createjs container to shake
     * @param {{x: Number, y: Number}} shakeVector The max amount of shaking
     *  in any direction [-x, x] and [-y, y]
     * @param {{
     *  duration: Number,
     *  diminish: Boolean | Object,
     *  diminishEase: Function
     * }} params The params hash for duration of shake (in milliseconds) and
     * diminishing effects.
     *
     * If <c>true</c> is supplied for diminish, the shake will diminish to
     *  [0,0].
     * If an object is provided, the shake will diminish to the <c>x</c> and
     *  <c>y</c> properties in the object.
     * The ease function is a createjs ease function (defaults to createjs's
     *  default).
     */
    customShake: function(container, shakeVector, params) {
      if (_.isObject(shakeInstance) && _.isFunction(shakeInstance.stop)) {
        shakeInstance.stop();
        createjs.Tween.removeTweens(shakeInstance.shakeVector);
        createjs.Tween.removeTweens(shakeInstance);
      }
      shakeInstance = this.createShaker(container, shakeVector);
      shakeInstance.start();
      if (params.diminish) {
        var diminishTo = _.extend({
          x: 0,
          y: 0
        }, params.diminish);
        createjs.Tween.get(shakeInstance.shakeVector, {
          ignoreGlobalPause: true
        }).to(diminishTo, params.duration, params.diminishEase);
      }
      createjs.Tween.get(shakeInstance, {
        ignoreGlobalPause: true
      }).wait(params.duration)
        .call(function() {
          shakeInstance.stop();
          shakeInstance = null;
        });
    },
    /**
     * A predefined shake method that is used for big impacts
     *
     * @param {Object} container The createjs container to shake
     */
    bigShake: function(container) {
      this.customShake(container, {
        x: 50,
        y: 50
      }, {
        duration: 1000,
        diminish: true,
        diminishEase: createjs.Ease.sineOut
      });
    },
    /**
     * A predefined shake method that is used for medium impacts
     *
     * @param {Object} container The createjs container to shake
     */
    mediumShake: function(container) {
      this.customShake(container, {
        x: 25,
        y: 25
      }, {
        duration: 500,
        diminish: true,
        diminishEase: createjs.Ease.sineOut
      });
    },
    /**
     * A predefined shake method that is used for small impacts
     *
     * @param {Object} container The createjs container to shake
     */
    smallShake: function(container) {
      this.customShake(container, {
        x: 15,
        y: 15
      }, {
        duration: 200,
        diminish: true,
        diminishEase: createjs.Ease.sineOut
      });
    }
  };
});
