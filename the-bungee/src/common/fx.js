/* global define, console, stageWidth, stageHeight, data, createjs, _ */

/**
 * Contains functions that create effects for CreateJS.
 */
define([
    './util',
    './ObjectPool',
    '../lib/lodash',
    '../lib/createjs-2015.11.26.combined'
  ], function(util, ObjectPool) {
    'use strict';
    return {
      /**
       * Creates a createjs.Bitmap, centered and filling the stage.
       *
       * @param {string} src
       * @param {number=} [forceScale]
       * @param {Object=} [bounds] An option bounds to use for centering
       * @param {Number=} bounds.width The width of the image
       * @param {Number=} bounds.height The height of the image
       * @returns {*}
       */
      createCenteredBg: function(src, forceScale, bounds) {
        var bg = new createjs.Bitmap(src);
        bounds = _.defaults({}, bounds, {
          width: bg.image.width,
          height: bg.image.height
        });
        var hdScale = stageHeight / bounds.height;
        var scale = (forceScale || 1) * hdScale;
        bg.scaleX = scale;
        bg.scaleY = scale;
        bg.x = stageWidth / 2;
        bg.y = stageHeight / 2;
        bg.regX = bounds.width / 2;
        bg.regY = bounds.height / 2;
        return bg;
      },

      /**
       * Create a bitmap that scoots itself over when it goes off screen left.
       * Does not automatically move.
       * Info has {src, width, height, x, y, tileCount}
       * and optionally {fitVertical}.
       *
       * @param {{}} info
       * @returns {*}
       */
      createLeftScrollableBackground: function(info) {
        var sane = util.isSaneData([
          info.src, info.width, info.height, info.x, info.y, info.tileCount
        ]);
        if (!sane) {
          console.error('createLeftScrollableBackground: bad input info');
          console.log(info);
        }

        var _scrollableHandleTick = function() {
          var rightEdge = this.parent.x + this.x + (this.info.width *
            this.scaleX);
          if (rightEdge < 0) {
            this.x += (this.info.width * this.scaleX) * this.info.tileCount;
          }
        };

        var bmp = new createjs.Bitmap(info.src);

        var scale = 1;
        if (info.fitVertical) {
          scale = stageHeight / info.height;
          bmp.scaleX = scale;
          bmp.scaleY = scale;
        }

        bmp.x = ((stageWidth - info.width) / 2 + info.x) * scale;
        bmp.y = info.y;

        bmp.info = info;
        bmp.on('tick', _scrollableHandleTick, bmp);

        return bmp;
      },

      /**
       * Creates a pool of one-shot sprite animation effects.
       *
       * Example:
       * this.explosionPool = createSpriteEffectPool({
       *   sheet: new createjs.SpriteSheet(queue.getResult('explosionSheet')),
       *   anim: 'explode',
       *   game: this,
       *   gameKey: 'explosionPool',
       *   z: ZLayer.explosion
       * });
       * this.explosionPool.acquire({x: screenWidth / 2, y: screenHeight / 2});
       *
       * @param {{}} poolParams
       * @returns {ObjectPool}
       */
      createSpriteEffectPool: function(poolParams) {
        // poolParams needed:
        // sheet, anim, game, gameKey, z

        poolParams.rotation = poolParams.rotation || 0;
        poolParams.z = poolParams.z || 0;

        function create() {
          if (!data.debug.hideSprites) {
            var sprite = new createjs.Sprite(poolParams.sheet, poolParams.anim);
            sprite.visible = false;
            sprite.z = poolParams.z;

            poolParams.game.gameContainer.addChild(sprite);

            if (sprite.z !== 0) {
              util.sortConByZ(poolParams.game.gameContainer);
            }

            return sprite;
          }
        }

        function init(sprite, params) {

          params.rotation = params.rotation || 0;

          if (!data.debug.hideSprites) {
            sprite.visible = true;
            sprite.x = params.x;
            sprite.y = params.y;
            sprite.rotation = poolParams.rotation + params.rotation;
            sprite.stop();
            sprite.gotoAndPlay(poolParams.anim);

            sprite.on('animationend', function() {
              this.visible = false;
              poolParams.game[poolParams.gameKey].release(this);
            }, sprite, true);
          }
        }

        return new ObjectPool(create, init);
      },
      /**
       * Returns an object that can show a full-screen, single color flash.
       *
       * @param {{}} container
       * @param {{
       *  duration: Number,
       *  color: String,
       *  z: Number,
       *  alpha: Number
       * }} params The params has that has the duration of flash (in
       * milliseconds), the color of the flash (in #RRGGBB) and the ZLayer
       * of the flash
       * @returns {{
       *  timeLeft: number,
       *  flashShape: null,
       *  tick: function,
       *  init: function,
       *  show: function,
       *  hide: function
       * }}
       */
      makeFlash: function(container, params) {
        return {
          duration: params.duration,
          flashShape: null,

          init: function() {
            var shape = new createjs.Shape();
            var color = params.color || 'white';

            shape.graphics
              .beginFill(color)
              .rect(0, 0, stageWidth, stageHeight);
            shape.z = params.z || 0;
            shape.alpha = 0;
            container.addChild(shape);
            this.flashShape = shape;
            this.flashShape.visible = true;
          },

          show: function() {
            this.flashShape.alpha = params.alpha || 1;
            createjs.Tween.get(this.flashShape)
              .to({alpha: 0}, this.duration)
              .call(this.hide, null, this);
          },

          hide: function() {
            createjs.Tween.removeTweens(this.flashShape);
            this.flashShape.alpha = 0;
          }
        };
      },
      /**
       * Adds a tween to a target that bobs that target up and down.
       *
       * @param {Object} target The object to bob
       * @param {{yVariation: Number, period: Number, delay: Number}} params
       * The params hash that holds information about the bob.
       *
       * yVariation is the amount of vertical distance you want
       * to bob the target. The target will go up <c>yVariation / 2 </c> and
       * down <c>yVariation / 2 </c> from the original position.
       * NOTE: your target should be in the desired y position before bobbing.
       *
       * period is the time, in milliseconds, it takes to go from the
       * original position back to the original position (one full cycle)
       *
       * delay is the amount of time, in milliseconds, before starting the bob
       * target
       */
      createBob: function(target, params) {
        var originalY = target.y;
        var halfDist = params.yVariation / 2;
        var chunkTime = params.period / 4;

        function startTween() {
          createjs.Tween.get(target, {loop: true})
            .to({y: originalY + halfDist}, chunkTime, createjs.Ease.sineOut)
            .to({y: originalY}, chunkTime, createjs.Ease.sineIn)
            .to({y: originalY - halfDist}, chunkTime, createjs.Ease.sineOut)
            .to({y: originalY}, chunkTime, createjs.Ease.sineIn);
        }

        if (_.isNumber(params.delay) && params.delay > 0) {
          _.delay(startTween, params.delay);
        } else {
          startTween();
        }
      }
    };
  }
);
