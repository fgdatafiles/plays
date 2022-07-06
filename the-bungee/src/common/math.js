/* global define, console */

define(['./assert'], function(assert) {
  'use strict';
  var epsilon = 0.0000000001;

  return {

    /**
     *  Linearly interpolates between a and b. t should be between 0 and 1.
     */
    lerp: function(a, b, t) {
      return a + t * (b - a);
    },

    /**
     *  Returns a number whose value is limited to the given range.
     */
    clamp: function(num, min, max) {
      return Math.min(Math.max(num, min), max);
    },

    /**
     *  Returns x rounded to the nearest multiple of base.
     */
    quantize: function(x, base) {
      if (base === undefined || base === 0) {
        return x;
      }

      return Math.round(x / base) * base;
    },

    /**
     * Uses the quadratic formula to return an array of up to two real solutions
     * for an equation of the form Ax^2 + Bx + C.
     * Returns null if no solution exists.
     *
     * @param {Number} a
     * @param {Number} b
     * @param {Number} c
     * @returns {*} An array of solutions, or null.
     */
    solveRealQuadratic: function(a, b, c) {
      if (!assert.isSaneData([a, b, c])) {
        console.error('solveQuadratic: bad inputs');
      }

      if (a === 0 && b === 0) {
        // there's no x so there are infinitely many solutions.
        return null;
      }

      // if A is zero the solution is simple:
      if (a === 0) {
        return [-c / b];
      }

      // make sure we do have real solutions
      var underRadical = b * b - 4 * a * c;
      if (underRadical < 0) {
        // there are only imaginary solutions.
        return null;
      }

      // having handled trivial cases, we'll now use the whole formula.
      var radical = Math.sqrt(underRadical);
      var solutions = [];
      solutions.push((-b + radical) / (2 * a));
      solutions.push((-b - radical) / (2 * a));

      return solutions;
    },

    /**
     * Epsilon operations for comparing floating point values with an acceptable
     * margin of error.
     */
    Epsilon: {
      eq: function(a, b) {
        /// a === b
        return Math.abs(a - b) <= epsilon;
      },

      lte: function(a, b) {
        /// a <= b
        return (a < b) || this.eq(a, b);
      },

      gte: function(a, b) {
        /// a >= b
        return (a > b) || this.eq(a, b);
      }
    }
  };
});
