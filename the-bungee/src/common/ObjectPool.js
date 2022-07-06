/* global define, console */

define(function() {
  'use strict';
  /**
   * Constructor for a generic object pool.
   * We use these to save time reallocating objects during gameplay.
   * fnCreateObj takes a single "params" object and returns the created object.
   * fnInitObj takes (obj, params) and modifies the obj in place.
   *
   * @param {function} fnCreateObj
   * @param {function} fnInitObj
   * @constructor
   */
  var ObjectPool = function(fnCreateObj, fnInitObj) {
    if (fnCreateObj.length > 1) {
      console.error('fnCreateObj expects too many arguments');
    }

    if (fnInitObj.length > 2) {
      console.error('fnInitObj expects too many arguments');
    }

    this._createObj = fnCreateObj;
    this._initObj = fnInitObj;
    this._pool = [];
  };

  ObjectPool.prototype = {
    acquire: function(params) {
      var obj;

      if (this._pool.length > 0) {
        obj = this._pool.pop();
      } else {
        obj = this._createObj(params);
      }

      this._initObj(obj, params);
      return obj;
    },
    release: function(obj) {
      this._pool.push(obj);
    },

    /**
     * Adds objects into the pool until it has at least desiredPoolLength items.
     */
    prepare: function(desiredPoolLength, params) {
      while (this._pool.length < desiredPoolLength) {
        this._pool.push(this._createObj(params));
      }
    },

    /**
     * Creates an object and immediately adds it to the pool.
     */
    prepareSingle: function(params) {
      this._pool.push(this._createObj(params));
    }
  };

  return ObjectPool;
});
