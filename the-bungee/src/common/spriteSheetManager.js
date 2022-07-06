/* global define, queue, data, createjs, _ */

/**
 * A singleton-style module that holds a single instance of all sprite sheets
 */
define([
    '../lib/lodash',
    '../lib/createjs-2015.11.26.combined'
  ], function() {
    'use strict';
    var spriteSheets = {};
    return {
      /**
       * Gets a sprite sheet with the given key. Sprite sheets are lazy loaded
       * @param {String} dataKey The key in data.json that holds sprite
       * sheet info
       * @returns {Object|null} The createjs.SpriteSheet or null if no sheet
       * could be created
       */
      get: function(dataKey) {
        if (!_.has(spriteSheets, dataKey)) {
          var data = queue.getResult(dataKey);
          if (!data) {
            console.error('Cannot make sprite sheet for: ' + dataKey);
            return null;
          }

          // pull the sheet's image from the preload queue, if it's there
          var image = queue.getResult(data.images[0]);
          if (image) {
            data.images[0] = image;
          }

          spriteSheets[dataKey] = new createjs.SpriteSheet(data);
        }
        return spriteSheets[dataKey];
      }
    };
  }
);
