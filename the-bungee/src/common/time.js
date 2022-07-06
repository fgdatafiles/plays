/* global define, console, createjs, _, data */

define(['./math', 'lib/createjs-2015.11.26.combined', 'lib/lodash'],
function(math) {
  'use strict';
  var inHitStop = null;
  var inTimeScale = null;

  function realTimeEase(object, key, startVal, endVal, timing, onComplete,
                        easeFn) {
    setTimeout(function() {
      timing.cumlTime += timing.dt;
      var fraction = timing.cumlTime / timing.duration;
      easeFn = easeFn || createjs.Ease.linear;
      onComplete = onComplete || _.noop;
      object[key] = math.lerp(startVal, endVal, easeFn(fraction));
      object[key] = math.clamp(object[key], startVal, endVal);
      if (timing.cumlTime < timing.duration) {
        realTimeEase(object, key, startVal, endVal, timing, onComplete, easeFn);
      } else {
        object[key] = endVal;
        onComplete();
      }
    }, timing.dt);
  }

  return {
    /**
     * Pauses the game for a specified amount of time.
     *
     * @param {Number} duration The time, in milliseconds, to pause the game
     */
    hitStop: function(duration) {
      if (inHitStop === null) {
        if (!_.isNumber(duration) || _.isNaN(duration)) {
          throw 'you must provide "hitStop" with an actual number.';
        }
        inHitStop = true;
        createjs.Ticker.paused = true;
        _.delay(function() {
          createjs.Ticker.paused = false;
          inHitStop = null;
        }, duration);
      }
    },
    /**
     * Adds a time scaling effect for a set duration
     *
     * @param {Object} [params=] A params hash that has the following keys
     * {
     *    easeInTime: <Number>,
     *    scale: <Number>,
     *    duration: <Number>,
     *    easeOutTime: <Number
     * } easeInTime, duration, and easeOutTime are in milliseconds
     */
    changeTimeScale: function(params) {
      if (inTimeScale === null) {
        inTimeScale = true;
        var oldScale = createjs.Tween.timeScale;
        params = _.extend({
          easeInTime: 100,
          scale: 0.5,
          duration: 1000,
          easeOutTime: 100
        }, params);

        var onEaseOutEnded = function() {
          createjs.Ticker.framerate = data.fps;
          inTimeScale = null;
        };

        var onEaseInEnded = function() {
          createjs.Ticker.framerate = data.fps * params.scale;
          if (params.duration >= 0) {
            _.delay(function() {
              realTimeEase(createjs.Tween, 'timeScale', params.scale, oldScale,
                {
                  dt: createjs.Ticker.interval,
                  cumlTime: 0,
                  duration: params.easeOutTime
                }, onEaseOutEnded);
            }, params.duration);
          } else {
            inTimeScale = null;
          }
        };

        realTimeEase(createjs.Tween, 'timeScale', oldScale, params.scale, {
          dt: createjs.Ticker.interval,
          cumlTime: 0,
          duration: params.easeInTime
        }, onEaseInEnded);
      }
    }
  };
});
