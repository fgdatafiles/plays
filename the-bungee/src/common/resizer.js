/* global define, console, data, stageWidth, stageHeight, window */

define(['./util'], function(util) {
  'use strict';
  return {
    hasResized: false,
    /**
     Proportionally resizes the canvas contents to fill the available space in
     the browser window.
     */
    doResize: function(stage, forcedDimension) {
      forcedDimension = _.defaults({}, forcedDimension, {
        width: window.innerWidth,
        height: window.innerHeight
      });

      if (data.debug.logResizerInput) {
        console.log('resizer input');
        for (var deviceKey in forcedDimension) {
          if (forcedDimension.hasOwnProperty(deviceKey)) {
            console.log('' + deviceKey + ':' + forcedDimension[deviceKey]);
          }
        }
      }

      var outValues = this._getResizeValues(forcedDimension);

      if (data.debug.overrideResizerValues) {
        for (var overrideKey in data.debug.overrideResizerValues) {
          if (data.debug.overrideResizerValues.hasOwnProperty(overrideKey)) {
            outValues[overrideKey] =
              data.debug.overrideResizerValues[overrideKey];
          }
        }
      }

      if (data.debug.logResizerOutput) {
        console.log('resizer output');
        for (var outKey in outValues) {
          if (outValues.hasOwnProperty(outKey)) {
            console.log('' + outKey + ':' + outValues[outKey]);
          }
        }
      }

      stage.canvas.width = stageWidth;
      stage.canvas.height = stageHeight;
      stage.canvas.style.width = outValues.canvasStyleWidth;
      stage.canvas.style.height = outValues.canvasStyleHeight;

      this.hasResized = true;
    },

    /**
     *  Private helper that returns values we want to apply without changing
     *  anything. Separated for testing purposes.
     */
    _getResizeValues: function(osValues) {
      var widthToHeight = stageWidth / stageHeight;
      var newWidth = osValues.width;
      var newHeight = osValues.height;
      var newWidthToHeight = newWidth / newHeight;
      if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
      } else {
        newHeight = newWidth / widthToHeight;
      }

      return {
        canvasStyleWidth: newWidth + 'px',
        canvasStyleHeight: newHeight + 'px'
      };
    }
  };
});
