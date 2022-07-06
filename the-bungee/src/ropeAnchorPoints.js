/* global define, _, game, createjs, data, stageWidth*/
define([
  'lib/createjs-2015.11.26.combined',
  'lib/lodash'
], function() {

  var phase1Points = [
    {
      x: stageWidth * 0.21,
      y: stageHeight * 0.11
    },
    {
      x: stageWidth * 0.16,
      y: stageHeight * 0.25
    },
    {
      x: stageWidth * 0.11,
      y: stageHeight * 0.38
    },
    {
      x: stageWidth * 0.055,
      y: stageHeight * 0.53
    },
    {
      x: stageWidth * 0.045,
      y: stageHeight * 0.62
    }
  ];

  return {
    createPhase1AchorPoints: function() {
      return _.map(phase1Points, function(pts, index) {
        var sh = new createjs.Container();
        _.extend(sh, pts);
        sh.type = 'control' + index;
        sh.z = 100;
        return sh;
      });
    }
  };
});