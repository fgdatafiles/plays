/* global define, console */

define({

  /**
   * Returns a random integer between two values (inclusive)
   *
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  getRandomInt: function(min, max) {
    'use strict';
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * Returns a random floating point value between two values.
   *
   * @param {number} min - The lower value (inclusive)
   * @param {number} max - The upper value (exclusive)
   * @return {number}
   */
  getRandomFloat: function(min, max) {
    'use strict';
    return Math.random() * (max - min) + min;
  },

  /**
   * Returns one of two values with 50/50 probability, like flipping a coin.
   *
   * @param {*} [heads=true]
   * @param {*} [tails=false]
   * @return {*|boolean} - The heads or tails values.
   */
  getCoinFlip: function(heads, tails) {
    'use strict';
    heads = arguments.length > 0 ? heads : true;
    tails = arguments.length > 1 ? tails : false;

    return (Math.floor(Math.random() * 2) === 0) ? heads : tails;
  },

  /**
   *  Returns a value between -x and x in a binomial distribution centered at 0.
   *
   *  @param {number} x
   */
  getBinomial: function(x) {
    'use strict';
    x = x || 1;
    return x * (Math.random() - Math.random());
  },

  /**
   *  Selects a uniformly random {x, y} position from a circle or ring of the
   *  given radii. See http://stackoverflow.com/a/5838055 for an explanation of
   *  the math behind this.
   */
  getPointInCircle: function(a, b) {
    'use strict';

    // no args: 0 .. 1
    // one arg: 0 .. a
    // two args: a .. b
    var min;
    var max;
    if (arguments.length > 1) {
      min = a;
      max = b;
    } else {
      min = 0;
      max = a || 1;
    }

    if (min > max) {
      console.error('getPointInCircle: min radius is greater than max');
    }

    if (typeof(min) !== 'number' && typeof(max) !== 'number') {
      console.error('getPointInCircle: type error');
    }

    // rest of code
    var t = 2 * Math.PI * Math.random();
    var u = Math.random() + Math.random();
    var r = u > 1 ? 2 - u : u; // 0 <= r <= 1

    var radius = (max - min) * r + min;
    return {
      x: radius * Math.cos(t),
      y: radius * Math.sin(t)
    };
  },

  /**
   * Pick the index of a random element in the array.
   *
   * @param {{}} array
   * @returns {number}
   */
  pickIndex: function(array) {
    'use strict';
    return Math.floor(Math.random() * array.length);
  },

  weightedPickIndex: function(weights) {
    'use strict';
    var sum = weights.reduce(function(prev, current) {
      return prev + current;
    }, 0);

    var normWeights = weights.map(function(value) {
      return value / sum;
    });

    var r = Math.random();

    var runningTotal = 0;
    for (var ii in normWeights) {
      if (normWeights.hasOwnProperty(ii)) {
        if (normWeights[ii] + runningTotal > r) {
          return ii;
        } else {
          runningTotal += normWeights[ii];
        }
      }
    }

    console.error('weighted average error');
    return ii;
  },

  /**
   *  Returns n different random integers between min and max (inclusive),
   *  or an empty array if this isn't possible.
   */
  pickUniqueInts: function(n, min, max) {
    'use strict';
    if (max - min < n) {
      console.warn('pickUniqueInts:' +
        ' Not enough elements between min and max.');
      return [];
    }

    var picked = [];

    // reservoir sampling : fill the picked array, then replace elements in it
    // with gradually decreasing probability.

    // min .. min + n
    for (var ii = 0; ii < n; ii++) {
      picked.push(min + ii);
    }

    // min + n .. max
    for (ii = min + n; ii <= max; ii++) {

      // rand int between 0 and ii, inclusive
      var jj = Math.floor(Math.random() * (ii + 1));
      if (jj < n) {
        picked[jj] = min + ii;
      }
    }

    return picked;
  }

});
