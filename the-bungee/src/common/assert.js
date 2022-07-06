/* global define, console */

define({
  true: function(condition, message) {
    'use strict';
    if (!condition) {
      console.error('assert failed: ' + (message || ''));
    }
  },
  false: function(condition, message) {
    'use strict';
    if (condition) {
      console.error('assert failed: ' + (message || ''));
    }
  },
  /**
   * Returns true if the data object is sane.
   *
   * @param {object} data
   * @returns {boolean}
   */
  saneData: function _isSaneData(data) {
    'use strict';
    if (data === null || data === undefined) {
      return false;
    } else if (typeof data === 'object') {
      // if any part of an object is not sane, then the object is not sane.
      for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
          if (!_isSaneData(data[prop])) {
            return false;
          }
        }
      }

      return true;
    } else if (typeof data === 'number') {
      return !(isNaN(data));
    } else {
      return (typeof data === 'string' || typeof data === 'boolean');
    }
  }
});
