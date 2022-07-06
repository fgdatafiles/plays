/* global define, _, game, createjs, data, stageWidth, stageHeight */
define([
  'common/spriteSheetManager',
  'common/math',
  'common/random',
  'ObstaclePool'
], function(ssm, math, random, Pool) {
  var seenTutorialPhase1 = false;
  var seenTutorialPhase2 = false;

  var emptyItem = {
    x: 0,
    dispatchEvent: _.noop,
    isVisible: _.constant(false)
  };

  var spawnData = {
    chunks: {
      nothing: [
        [0]
      ],
      //Phase 1
      tutorialPhase1: [
        [0,0,0,0,0,0],
        [1,0,0,0,3,0],
        [0,0,0,0,0,0]
      ],
      rangeGood: [
        [{type: 1, min: 3, max: 5}]
      ],
      rangeGoodDangerous1: [
        [{type: 1, min: 3, max: 5}, 3]
      ],
      rangeGoodDangerous2: [
        [3, {type: 1, min: 3, max: 5}, 3]
      ],
      special1: [
        [2, 3]
      ],
      special2: [
        [3, 2, 0]
      ],
      tunnelDoll: [
        [3, 3, 3],
        [1, 1, 1],
        [3, 3, 3]
      ],
      dividedDoll1: [
        [1, 1, 1, 1, 1],
        [3, 3, 3, 3, 3],
        [1, 1, 0, 0, 0]
      ],
      dividedDoll2: [
        [1, 1, 0, 0, 0],
        [3, 3, 3, 3, 3],
        [1, 1, 1, 1, 1]
      ],
      wallToTunnelDoll1: [
        [3,0,0,0,0],
        [3,0,0,0,0],
        [3,0,0,0,0],
        [1,1,1,1,0],
        [3,0,0,0,0]
      ],
      wallToTunnelDoll2: [
        [3, 0, 0, 0, 0],
        [3, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [3, 0, 0, 0, 0],
        [3, 0, 0, 0, 0]
      ],
      wallToTunnelDoll3: [
        [3, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [3, 0, 0, 0, 0],
        [3, 0, 0, 0, 0],
        [3, 0, 0, 0, 0]
      ],
      wallToTunnelDollStretch1: [
        [0, 3,0,0,0,0],
        [0, 3,0,0,0,0],
        [0, 3,0,0,0,0],
        [0, 1,1,1,1,0],
        [0, 3, 0, 0, 0, 0]
      ],
      wallToTunnelDollStretch2: [
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0]
      ],
      wallToTunnelDollStretch3: [
        [0, 3, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0]
      ],
      //Phase 2
      singleBoost: [
        [0, 1, 0]
      ],
      singleBoostDangerous1: [
        [0, 1, 0, 3]
      ],
      singleBoostDangerous2: [
        [0, 3, 0, 1]
      ],
      tunnelBoost: [
        [0, 3, 3, 3],
        [0, 1, 0, 0],
        [0, 3, 3, 3]
      ],
      tunnel2Boost: [
        [0, 0, 0, 3, 3, 3],
        [0, 3, 0, 1, 0, 0],
        [0, 0, 0, 3, 3, 3]
      ],
      tunnel3Boost: [
        [0, 3, 3, 3, 0, 0, 0],
        [0, 1, 0, 0, 0, 3, 0],
        [0, 3, 3, 3, 0, 0, 0]
      ],
      //Obstacles
      singleBad: [
        [0, 3, 0]
      ],
      wall1: [
        [0, 3],
        [0, 0],
        [0, 3],
        [0, 3],
        [0, 3]
      ],
      wall2: [
        [0, 3],
        [0, 3],
        [0, 0],
        [0, 3],
        [0, 3]
      ],
      wall3: [
        [0, 3],
        [0, 3],
        [0, 3],
        [0, 0],
        [0, 3]
      ],
      wallStretch1: [
        [0, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0]
      ],
      wallStretch2: [
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0]
      ],
      wallStretch3: [
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0]
      ]
    },
    stats: {
      phase1: [
        [
          {chunk: 'tunnelDoll', weight: 2},
          {chunk: 'rangeGood', weight: 2},
          {chunk: 'rangeGoodDangerous1', weight: 2},
          {chunk: 'rangeGoodDangerous2', weight: 2},
          {chunk: 'dividedDoll1', weight: 2},
          {chunk: 'dividedDoll2', weight: 2},
          {chunk: 'singleBad', weight: 2},
          {chunk: 'special1', weight: 2},
          {chunk: 'special2', weight: 2},
          {chunk: 'nothing', weight: 2}
        ],
        [
          {chunk: 'wallToTunnelDoll1', weight: 2},
          {chunk: 'wallToTunnelDoll2', weight: 2},
          {chunk: 'wallToTunnelDoll3', weight: 2},
          {chunk: 'wall1', weight: 2},
          {chunk: 'wall2', weight: 2},
          {chunk: 'wall3', weight: 2},
          {chunk: 'tunnelDoll', weight: 2},
          {chunk: 'rangeGoodDangerous1', weight: 2},
          {chunk: 'rangeGoodDangerous2', weight: 2},
          {chunk: 'dividedDoll1', weight: 2},
          {chunk: 'dividedDoll2', weight: 2},
          {chunk: 'special1', weight: 2},
          {chunk: 'special2', weight: 2},
          {chunk: 'nothing', weight: 1}
        ]
      ],
      phase1Stretch: [
        [
          {chunk: 'rangeGood', weight: 1},
          {chunk: 'rangeGoodDangerous1', weight: 2},
          {chunk: 'rangeGoodDangerous2', weight: 2},
          {chunk: 'wallToTunnelDollStretch1', weight: 2},
          {chunk: 'wallToTunnelDollStretch2', weight: 2},
          {chunk: 'wallToTunnelDollStretch3', weight: 2},
          {chunk: 'special1', weight: 1},
          {chunk: 'special2', weight: 1},
          {chunk: 'wallStretch1', weight: 2},
          {chunk: 'wallStretch2', weight: 3},
          {chunk: 'wallStretch3', weight: 2},
          {chunk: 'nothing', weight: 1}
        ]
      ],
      phase2: [
        [
          {chunk: 'singleBoost', weight: 3},
          {chunk: 'singleBoostDangerous1', weight: 1},
          {chunk: 'singleBoostDangerous2', weight: 1},
          {chunk: 'singleBad', weight: 2},
          {chunk: 'tunnelBoost', weight: 1},
          {chunk: 'nothing', weight: 1}
        ],
        [
          {chunk: 'singleBoostDangerous1', weight: 3},
          {chunk: 'singleBoostDangerous2', weight: 3},
          {chunk: 'tunnelBoost', weight: 3},
          {chunk: 'singleBoost', weight: 2},
          {chunk: 'singleBad', weight: 4},
          {chunk: 'nothing', weight: 1}
        ]
      ]
    }
  };

  function getItemsFromPhase(phaseData, distancePercent, fromRight, goodItemKehy) {
    distancePercent = math.clamp(Math.abs(distancePercent), 0, 0.999);
    var difficultyData = phaseData[Math.floor(distancePercent * phaseData.length)];
    var chunkKey;
    if (!seenTutorialPhase1 && fromRight) {
      seenTutorialPhase1 = true;
      chunkKey = 'tutorialPhase1';
    } else if (!seenTutorialPhase2 && !fromRight) {
      seenTutorialPhase2 = true;
      chunkKey = 'singleBoost';
    } else {
      chunkKey = _.chain(difficultyData).map(function(data) {
        return _.times(data.weight, _.constant(data.chunk));
      }).flatten().sample().value();
    }
    var chunk = _.cloneDeep(spawnData.chunks[chunkKey]);
    var items = _.chain(chunk)
      //This tap fills up until there it is 5 rows
      .tap(function(chunk) {
        while (chunk.length < 5) {
          chunk[random.getCoinFlip('push', 'unshift')](null);
        }
      })
      //This loop normalizes any variadic items
      .each(function(rowData, index, array) {
        _.each(rowData, function(columnInfo) {
          if (_.isObject(columnInfo)) {
            array.splice(index, 1,
              _.times(random.getRandomInt(columnInfo.min, columnInfo.max),
                _.constant(columnInfo.type)));
            array[index] = _.flatten(array[index]);
          }
        });
      })
      .map(function(rowData, rowIndex) {
        var depthOffset = rowIndex * gridColumnWidth  * 0.4;
        var sign = fromRight ? 1 : -1;
        var startX = (fromRight ? stageWidth : -gridColumnWidth) +
          (sign * depthOffset);
        //make sure it's a row with actual information (i.e. not a padding row)
        if (_.get(rowData, 'length')) {
          return _.map(rowData, function(columnInfo, index) {
            //if non-zero, make an item
            if (columnInfo > 0) {
              return Pool.acquire({
                x: startX + (sign * index * gridColumnWidth),
                row: rowIndex,
                type: columnInfo == 3 ? 'slow' : goodItemKehy,
                special: columnInfo === 2,
                specialIndex: columnInfo == 2 ? random.getRandomInt(1,4) : 0
              });
            } else if (columnInfo === 0 && columnInfo === _.last(rowData)) {
              var ret = _.clone(emptyItem);
              ret.x = startX + (sign * index * gridColumnWidth);
              return ret;
            }
          });
        }
      }).flatten().without(undefined).value();
    items.itemColumnCount = _.chain(chunk).map('length').max().value();
    return items;
  }

  return {
    getItemsForPhase1: function(distancePercent) {
      return getItemsFromPhase(distancePercent > 1 ?
          spawnData.stats.phase1Stretch : spawnData.stats.phase1,
        distancePercent, true, 'doll');
    },
    getItemsForPhase2: function(distancePercent) {
      return getItemsFromPhase(spawnData.stats.phase2,
        distancePercent, false, 'boost');
    }
  };
});