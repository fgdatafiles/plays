define([], function() {
  /**
   * Sets a cookie
   *
   * @param {String} cname The name of the cookie
   * @param {*} cvalue The value to set the cookie
   * @param {Number} [exdays=1] The days until the cookie is expired
   */
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    if (exdays == null) {
      exdays = 1;
    }
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + '; ' + expires;
  }

  /**
   * Gets a cookie by the given name
   * @param {String} cname The cookie name
   * @returns {String} The cookie value as a string
   */
  function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return '';
  }
  return {
    getCookie: getCookie,
    setCookie: setCookie
  };
});