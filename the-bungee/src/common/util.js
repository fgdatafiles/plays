/* global define, _, console, data, stageWidth, stageHeight, queue, createjs */

/**
 * Contains utility functions to make interacting with CreateJS easier.
 */
define([
    './geom',
    '../lib/accounting',
    '../lib/lodash',
    '../lib/createjs-2015.11.26.combined'],
  function(geom, accounting) {
    'use strict';

    function sortConByZ(con) {
      var sortFunction = function(obj1, obj2) {
        // handle cases where one or both z values are undefined.
        if (obj1.z === undefined) {
          if (obj2.z === undefined) {
            return 0;
          } else {
            return -1;
          }
        } else {
          if (obj2.z === undefined) {
            return 1;
          }
        }

        if (obj1.z > obj2.z) {
          return 1;
        }
        if (obj1.z < obj2.z) {
          return -1;
        }
        return 0;
      };
      con.sortChildren(sortFunction);
    }

    return {
      /**
       * Returns the delta time in milliseconds contained in the tick event.
       *
       * @param {{}} tickEvent
       * @param {Boolean} [forceTrueDt=false]
       * @returns {Number} Time between this frame and the last in milliseconds
       */
      getDMS: function(tickEvent, forceTrueDt) {
        return this.getDS(tickEvent, forceTrueDt) * 1000;
      },
      /**
       * Returns the delta time in seconds contained in the tick event.
       *
       * @param {{}} tickEvent
       * @param {Boolean} [forceTrueDt=false]
       * @returns {Number} Time between this frame and the last in seconds
       */
      getDS: function(tickEvent, forceTrueDt) {
        if (tickEvent === undefined) {
          console.warn('Passed undefined into getDS.');
          return 0;
        }
        forceTrueDt = forceTrueDt || false;

        var dt;

        if (tickEvent.delta) {
          dt = tickEvent.delta / 1000.0;
        } else if (tickEvent.params && tickEvent.params.delta) {
          dt = tickEvent.params.delta / 1000.0;
        } else if (tickEvent.params && tickEvent.params[0] &&
          tickEvent.params[0].delta) {
          dt = tickEvent.params[0].delta / 1000.0;
        } else if (tickEvent.type === 'tick') {
          // this is some kind of tick, but we can't measure it.
          // assume it's a duration of 0.
          dt = 0;
        } else {
          console.error('Could not get dt from event object: ' + tickEvent);
          console.log(tickEvent);
          dt = 0;
        }

        if (forceTrueDt) {
          return dt;
        }

        var targetFps = data.fps || 30;
        var minFps = data.minFps || 1;
        if (dt > (1 / minFps)) {
          return (1 / targetFps);
        } else {
          return dt;
        }
      },

      /**
       * Creates an int enum object from an array of values.
       *
       * @param {String[]} valuesArray
       * @returns {{}}
       */
      newEnum: function(valuesArray) {
        var ret = {};
        ret.array = valuesArray;

        for (var ii = 0; ii < valuesArray.length; ii++) {
          ret[valuesArray[ii]] = (ii);
        }

        return ret;
      },

      /**
       * Creates a string enum object from an array of values.
       *
       * @param {String[]}  valuesArray
       * @returns {{}}
       */
      newStringyEnum: function(valuesArray) {
        var ret = {};
        ret.array = valuesArray;

        for (var ii = 0; ii < valuesArray.length; ii++) {
          ret[valuesArray[ii]] = valuesArray[ii];
        }

        return ret;
      },

      /**
       * Draws outlines of iPhone 5 and iPad device aspect ratios.
       *
       * @param {Number} zLayer
       * @returns {*}
       */
      createDeviceFrame: function(zLayer) {
        var deviceFrame = new createjs.Shape();
        deviceFrame.z = zLayer || 0;

        var w1 = 1136;
        var w2 = 960;
        var h = 640;

        var padW = 1136;
        var padH = 852;

        var halfWidth = stageWidth / 2;

        deviceFrame.graphics
          .setStrokeStyle(2)
          .beginStroke('magenta')
          .rect(halfWidth - w1 / 2, (stageHeight - h) / 2, w1, h)
          .rect(halfWidth - w2 / 2, (stageHeight - h) / 2, w2, h)
          .setStrokeStyle(4)
          .beginStroke('blue')
          .rect(halfWidth - padW / 2, (stageHeight - padH) / 2, padW, padH);
        return deviceFrame;
      },

      /**
       * Adds the files defined in the jsonData struct to the loadQueue.
       *
       * @param {{}} loadQueue
       * @param {{}} jsonData
       */
      addJsonDataToLoadQueue: function(loadQueue, jsonData) {
        for (var key in jsonData) {
          if (jsonData.hasOwnProperty(key)) {
            var file = {
              id: key,
              src: jsonData[key],
              type: createjs.LoadQueue.JSONP,
              callback: key + '_jsonLoaded_'
            };
            loadQueue.loadFile(file, false);
          }
        }
      },

      /**
       * Returns the speed needed to make an animation last the specified
       * duration.
       *
       * @param {number} duration
       * @param {number} fps
       * @param {number} frameCount
       * @returns {number}
       */
      getSpeedForAnimation: function(duration, fps, frameCount) {
        return (1.0 / fps) * frameCount * (1.0 / duration);
      },

      /**
       * Returns the duration of an animation with the specified speed and
       * frameCount.
       *
       * @param {number} fps
       * @param {number} frameCount
       * @param {number} speed
       * @returns {number}
       */
      getDurationOfAnimation: function(fps, frameCount, speed) {
        return (1.0 / fps) * frameCount * (1.0 / speed);
      },

      /**
       * Returns true if you're in a known mobile environment, false otherwise.
       */
      isMobile: function() {
        return Boolean(navigator.userAgent.match(/Android|iPhone|iPad|iPad/i));
      },
      isIOS: function() {
        return Boolean(navigator.userAgent.match(/iPhone|iPad|iPad/i));
      },
      /**
       * Creates a text object formatted to display the current FPS.
       * Call its refresh method to update the display.
       *
       * @returns {*}
       */
      createFpsText: function() {
        var color = '#ff0000';
        var fpsText = new createjs.Text('-- fps', '40px Arial', color);

        fpsText.refresh = function(event) {
          if (event === undefined) {
            return;
          }

          var dt = (event.delta) / 1000.0;
          var fps = (1.0 / dt);

          this.text = (dt * 1000).toFixed(0) + 'ms (' + fps.toFixed(2) +
            ' fps)';
        };

        return fpsText;
      },

      /**
       * Formats a number with proper thousand and decimal place punctuation,
       * based on the locale specified in data.json.
       * Relies on the accounting.js library.
       *
       * @param {number} number The number to format.
       * @return {string} The formatted number.
       */
      formatNumberForLoc: function(number) {
        if (_.includes(['de','it','tr','ru'], data.language)) {
          return accounting.formatNumber(number, 0, '.', ',');
        } else if (_.includes(['es','fr', 'pl'], data.language)) {
          return accounting.formatNumber(number, 0, ' ', ',');
        } else {
          return accounting.formatNumber(number);
        }
      },

      sortConByZ: sortConByZ,

      addDataToLoadQueue: function(loadQueue, dataToLoad) {
        if (Array.isArray(dataToLoad)) {
          for (var ii = 0; ii < dataToLoad.length; ii++) {
            loadQueue.loadFile(dataToLoad[ii], false);
          }
        } else {
          for (var key in dataToLoad) {
            if (dataToLoad.hasOwnProperty(key) &&
              typeof dataToLoad[key] === 'string') {
              loadQueue.loadFile({id: key, src: dataToLoad[key]}, false);
            }
          }
        }
      },

      /**
       * Creates a button out of the given graphics containers.
       *
       * @example
       *  // creates a rectangular button with the default scaling options.
       *  var bounds = {
       *    width: 250,
       *    height: 250
       *  };
       *  var shape = new createjs.Shape();
       *  shape.graphics.beginFill('red')
       *    .drawRect(0, 0, bounds.width, bounds.height);
       *  var callbacks = {
       *    onMouseUpTarget: shape
       *    onMouseUp: function() { console.log('clicked!'); }
       *  };
       *  var button = util.createButton(bounds, true, callbacks,
       *    {target: shape});
       *
       * @param {Object} bounds The bounds for the button. Must have `width`
       *    and `height` keys
       * @param {Number} bounds.width
       * @param {Number} bounds.height
       *
       * @param {Boolean} shouldCenter If true, the returned button will have
       *  its reg points centered using the provided bounds.
       *
       * @param {Object} callbacks An object containing callback functions and
       *  their 'this' targets.
       * @param {Function} [callbacks.onMouseUp=] A function called when the
       *  user releases a mouse click over the button. If you only use one
       *  callback, it should be this. Defaults to <c>_.noop</c>
       * @param {Object} [callbacks.onMouseUpTarget=null] Target for the
       *  <c>onMouseUp</c> function.
       * @param {Function} [callbacks.onMouseDown=] A function called when the
       *  user presses the mouse down over the button. Defaults to <c>_.noop</c>
       * @param {Object} [callbacks.onMouseDownTarget=null] Target for the
       *  <c>onMouseDown</c> function.
       *
       * @param {Object} [scaleOptions=] An object describing how the scaling
       *  tween should work.
       * @param {Object} [scaleOptions.target=] A display object that will have
       *  its scale adjusted over time in response to mouse events. If it has no
       *  parent, it will be added to the returned button container.
       * @param {Number} [scaleOptions.activeScale=1.1] The mouseover target
       *  scale.
       * @param {Number} [scaleOptions.pressedScale=0.9] The mousedown target
       *  scale.
       * @param {Number} [scaleOptions.transitionTimeMs=200] The time in
       *  milliseconds it takes a scale tween to complete.
       *
       * @param {Object} [colorOptions=] An object describing how the
       *  color-shift tween should work. Works with all kinds of valid CSS
       *  colors.
       * @param {Object} [colorOptions.target=] A display object that will have
       *  its color adjusted in response to mouse events. This target should be
       *  something that repects the 'color' property, like a Text instance. If
       *  it has no parent, it will be added to the returned button container.
       * @param {String} [colorOptions.activeColor=] The mouseover target color.
       * @param {String} [colorOptions.pressedColor=] The mousedown target
       *  color.
       * @param {Number} [colorOptions.transitionTimeMs=200] The time in
       *  milliseconds it takes a color tween to complete.
       *
       * @returns {Object} A createjs container responding to mouse events like
       *  a button, with the scale target and color target added as child
       *  elements.
       */
      createButton: function(bounds, shouldCenter, callbacks, scaleOptions,
                             colorOptions) {
        // throw an error if missing either width or height
        if (!_.has(bounds, 'width') || !_.has(bounds, 'height')) {
          throw 'A bounding region with width and height MUST be specified';
        }

        var isMobile = this.isMobile();
        //set initial state

        var buttonCon = new createjs.Container();
        buttonCon.pressing = false;

        // assign hitArea to buttonCon
        var hitArea = new createjs.Shape();
        var fillColor = data.debug.drawButtonHitAreas ?
          'rgba(0, 255, 0, 0.25)' :
          'rgba(0, 0, 0, 1)';
        hitArea.graphics
          .beginFill(fillColor)
          .drawRect(0, 0, bounds.width, bounds.height);
        buttonCon.hitArea = hitArea;
        if (data.debug.drawButtonHitAreas) {
          buttonCon.addChild(hitArea);
        }

        // if we're in mobile, don't worry about the hover state.
        buttonCon.inZone = isMobile;

        // default values
        callbacks = _.defaults({}, callbacks, {
          onMouseUp: _.noop,
          onMouseDown: _.noop,
          onMouseUpTarget: null,
          onMouseDownTarget: null
        });

        scaleOptions = _.defaults({}, scaleOptions, {
          target: null,
          activeScale: 1.05,
          pressedScale: 0.95,
          transitionTimeMs: 200,
          oldScale: null
        });

        colorOptions = _.defaults({}, colorOptions, {
          target: null,
          transitionTimeMs: 200,
          oldColor: null
        });

        if (shouldCenter) {
          buttonCon.regX = bounds.width / 2;
          buttonCon.regY = bounds.height / 2;

          if (scaleOptions.target) {
            scaleOptions.target.x += bounds.width / 2;
            scaleOptions.target.y += bounds.height / 2;
            scaleOptions.target.regX = bounds.width / 2;
            scaleOptions.target.regY = bounds.height / 2;
          }

          if (colorOptions.target) {
            colorOptions.target.x += bounds.width / 2;
            colorOptions.target.y += bounds.height / 2;
            colorOptions.target.regX = bounds.width / 2;
            colorOptions.target.regY = bounds.height / 2;
          }
        }

        if (scaleOptions.target) {
          scaleOptions.oldScale = _.pick(scaleOptions.target, 'scaleX',
            'scaleY');
        }

        if (colorOptions.target) {
          colorOptions.oldColor = colorOptions.target.color;
        }

        // rollover events
        if (!isMobile) {
          buttonCon.on('rollover', function() {
            var needsOverride = true;
            if (scaleOptions.target) {
              var s = buttonCon.pressing ?
                scaleOptions.pressedScale :
                scaleOptions.activeScale;
              var scale = {scaleX: s, scaleY: s};
              createjs.Tween.get(scaleOptions.target, {override: needsOverride,
                ignoreGlobalPause: true})
                .to(scale, scaleOptions.transitionTimeMs,
                  createjs.Ease.backOut);

              // also override color if the targets are different.
              needsOverride = scaleOptions.target !== colorOptions.target;
            }

            if (colorOptions.target) {
              var c = buttonCon.pressing ?
                colorOptions.pressedColor :
                colorOptions.activeColor;
              createjs.Tween.get(colorOptions.target, {override: needsOverride,
                ignoreGlobalPause: true})
                .to({color: c}, colorOptions.transitionTimeMs);
            }
          });

          buttonCon.on('rollout', function() {
            var needsOverride = true;
            if (scaleOptions.target) {
              var scaleTarget = scaleOptions.target;
              createjs.Tween.get(scaleTarget, {override: needsOverride,
                  ignoreGlobalPause: true})
                .to(scaleOptions.oldScale, scaleOptions.transitionTimeMs,
                  createjs.Ease.backOut);
              needsOverride = scaleOptions.target !== colorOptions.target;
            }

            if (colorOptions.target) {
              createjs.Tween.get(colorOptions.target, {override: needsOverride,
                  ignoreGlobalPause: true})
                .to({color: colorOptions.oldColor},
                  colorOptions.transitionTimeMs);
            }
          });
        }

        // click events
        buttonCon.on('mousedown', function() {
          callbacks.onMouseDown.call(callbacks.onMouseDownTarget);
          buttonCon.pressing = true;

          var needsOverride = true;
          if (scaleOptions.target) {

            createjs.Tween.get(scaleOptions.target, {override: needsOverride,
                ignoreGlobalPause: true})
              .to({
                scaleX: scaleOptions.pressedScale,
                scaleY: scaleOptions.pressedScale
              }, scaleOptions.transitionTimeMs, createjs.Ease.backOut);

            needsOverride = scaleOptions.target !== colorOptions.target;
          }

          if (colorOptions.target) {
            createjs.Tween.get(colorOptions.target, {override: needsOverride,
                ignoreGlobalPause: true})
              .to({color: colorOptions.pressedColor},
                colorOptions.transitionTimeMs);
          }
        });

        buttonCon.on('pressup', function(event) {
          var localPos = buttonCon.globalToLocal(event.stageX, event.stageY);

          var localBounds = {
            x: 0,
            y: 0,
            width: bounds.width,
            height: bounds.height
          };
          var stillInBounds = geom.rectangleHitTest(localBounds, localPos);
          if (buttonCon.pressing && stillInBounds) {
            callbacks.onMouseUp.call(callbacks.onMouseUpTarget);
          }
          buttonCon.pressing = false;

          var needsOverride = true;
          if (scaleOptions.target) {
            var scale = isMobile ?
              scaleOptions.oldScale :
              {
                scaleX: scaleOptions.activeScale,
                scaleY: scaleOptions.activeScale
              };

            createjs.Tween.get(scaleOptions.target, {override: needsOverride,
                ignoreGlobalPause: true})
              .to(scale, scaleOptions.transitionTimeMs, createjs.Ease.backOut);

            needsOverride = scaleOptions.target !== colorOptions.target;
          }

          if (colorOptions.target) {
            var c = isMobile ? colorOptions.oldColor : colorOptions.activeColor;

            createjs.Tween.get(colorOptions.target, {override: needsOverride,
                ignoreGlobalPause: true})
              .to({color: c}, colorOptions.transitionTimeMs);
          }
        });

        if (scaleOptions.target && scaleOptions.target.parent === null) {
          buttonCon.addChild(scaleOptions.target);
        }

        if (colorOptions.target && colorOptions.target.parent === null) {
          buttonCon.addChild(colorOptions.target);
        }

        sortConByZ(buttonCon);
        return buttonCon;
      }
    };
  }
);
