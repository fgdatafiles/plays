/* global define, stageWidth, stageHeight, console, createjs, _*/

define(['../lib/lodash', '../lib/createjs-2015.11.26.combined'],
  function() {
    'use strict';

    var zoomInstance = null;
    return {
      /**
       * Zooms the canvas on a specific target by increasing scale on everything
       *
       * @param {Object} container The createjs container to zoom
       * @param {Object} target The target location to zoom
       *  in on
       * @param {Number} target.x The x location to zoom in on
       * @param {Number} target.y The y location to zoom in on
       * @param {{
     *  xMin: Number,
     *  yMin: Number,
     *  xMax: Number,
     *  yMax: Number
     * }} [zoomBounds] The bounds of the zooming rect. ALl time units in
       * milliseconds
       * @param {{
     *  scale: Number,
     *  zoomInTime: Number,
     *  zoomOutTime: Number
     * }} [params] The params for the zooming
       */
      zoom: function(container, target, zoomBounds, params) {
        if (_.isPlainObject(zoomInstance)) {
          console.warn('you are already zooming. ' +
            'To zoom again, please call "unZoom" first.');
          return;
        }
        zoomBounds = _.defaults({}, zoomBounds, {
          xMin: 0,
          yMin: 0,
          xMax: stageWidth,
          yMax: stageHeight
        });
        params = _.defaults({}, params, {
          zoomInTime: 200,
          scale: 2
        });

        zoomInstance = {
          zoomOutTime: params.zoomOutTime || params.zoomInTime,
          originalPosition: _.pick(container, 'x', 'y')
        };
        var cx = (zoomBounds.xMax - zoomBounds.xMin) / 2;
        var cy = (zoomBounds.yMax - zoomBounds.yMin) / 2;
        container.scaleX = params.scale;
        container.scaleY = params.scale;
        var scaledTarget = container.localToGlobal(target.x, target.y);

        //Get the new edge when scaled in
        var scaledMaxEdge = container.localToGlobal(zoomBounds.xMax,
          zoomBounds.yMax);
        var scaledMinEdge = container.localToGlobal(zoomBounds.xMin,
          zoomBounds.yMin);

        //translate it the same we plan to translate the container
        scaledMaxEdge.x += cx - scaledTarget.x;
        scaledMaxEdge.y += cy - scaledTarget.y;
        scaledMinEdge.x += cx - scaledTarget.x;
        scaledMinEdge.y += cy - scaledTarget.y;

        //see if the new position is less than bounds
        if (scaledMaxEdge.x < zoomBounds.xMax) {
          scaledTarget.x -= zoomBounds.xMax - scaledMaxEdge.x;
        } else if (scaledMinEdge.x > zoomBounds.xMin) {
          scaledTarget.x -= zoomBounds.xMin - scaledMinEdge.x;
        }

        if (scaledMaxEdge.y < zoomBounds.yMax) {
          scaledTarget.y -= zoomBounds.yMax - scaledMaxEdge.y;
        } else if (scaledMinEdge.y > zoomBounds.yMin) {
          scaledTarget.y -= zoomBounds.yMin - scaledMinEdge.y;
        }

        container.scaleX = 1;
        container.scaleY = 1;
        var transform = {
          x: cx - scaledTarget.x,
          y: cy - scaledTarget.y,
          scaleX: params.scale,
          scaleY: params.scale
        };
        createjs.Tween.get(container).to(transform, params.zoomInTime);
      },
      unZoom: function(container) {
        if (!_.isPlainObject(zoomInstance)) {
          console.warn('There is nothing to unZoom. ' +
            'To unZoom, please call "zoom" first.');
          return;
        }
        createjs.Tween.get(container).to({
          x: zoomInstance.originalPosition.x,
          y: zoomInstance.originalPosition.y,
          scaleX: 1,
          scaleY: 1
        }, zoomInstance.zoomOutTime).call(function() {
          zoomInstance = null;
        });
      },
      instantUnZoom: function(container, ignoreZoomOut) {
        if (!ignoreZoomOut) {
          if (!_.isPlainObject(zoomInstance)) {
            console.warn('There is nothing to unZoom. ' +
              'To unZoom, please call "zoom" first.');
            return;
          }
          _.extend(container, {
            x: zoomInstance.originalPosition.x,
            y: zoomInstance.originalPosition.y,
            scaleX: 1,
            scaleY: 1
          });
        }
        zoomInstance = null;
      }
    };
  });
