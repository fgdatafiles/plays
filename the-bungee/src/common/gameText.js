/* global _, define, console, data, queue, gameText*/

/**
 * This module is a helper to extract the proper game text from
 * the gameTextData specified in data.json.
 * It also has methods to create locale specific text
 * that fits within a specified region
 */

define([
  '../lib/lodash'
], function() {
  'use strict';
  var getFontSheetForLocale = _.constant('Arial');
  function getMeasuredWidth() {
    return this.children[0].getMeasuredWidth();
  }
  function getMeasuredHeight() {
    return this.children[0].getMeasuredHeight();
  }
  function setText(text) {
    this.children[0].text = text;
    this.children[1].text = text;
  }
  return {
    /**
     * Gets a chunk of data whose keys are semantic names and whose values
     * are unicode characters of the words/phrases in the language specified
     * in data.language. Defaults to english (en).
     *
     * @returns {Object} The game text for the particular language
     */
    getLocaleGameTextData: function() {
      var allLanguageGameText = queue.getResult('gameTextData');

      var language = data.language || null;
      language = typeof(language) === 'string' ?
        language.toLowerCase() : 'en';

      if (!allLanguageGameText.hasOwnProperty(language)) {
        console.error('The language, ' + language +
          ' in data.json isn\'t supported. Defaulting to English');
        language = 'en';
      }
      return allLanguageGameText[language];
    },
    /**
     * Sets the getter for the font sheet selector. The font sheet selector
     * is used to determine which font sheet to use per language
     *
     * @param {Function} fn The function to use as the getter for the font sheet
     */
    setFontSheetForLocale: function(fn) {
      if (_.isFunction(fn)) {
        getFontSheetForLocale = fn;
      }
    },
    /**
     * Converts unicode (in the form \\u####) to human readable text
     * unicode conversion taken from http://stackoverflow.com/questions/7885096/
     * how-do-i-decode-a-string-with-escaped-unicode
     *
     * @param {createjs.Text} text The text object to assign the new decoded
     * text to
     * @param {String} semanticText The semenatic value for the text. This
     * is the key into the global <c>gameText</c> object.
     */
    unescapeUnicode: function(text, semanticText) {
      text.text = gameText[semanticText];
      var r = /\\u([\d\w]{4})/gi;
      text.text = text.text.replace(r, function(match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      });
      text.text = unescape(text.text);
    },
    /**
     * Sets the text of the specified container taking language into
     * consideration
     *
     * @param {Object} container The createjs container that has the text
     * @param {String} semanticText
     * @param {Object} bounds The max width and/or height the text should be
     * @param {Object} props
     * @param {String} props.color Any valid CSS color
     * @param {Number} props.size The font size (subject to change with bounds)
     * @param {String} props.textAlign The alignment for the text
     * @param {String} props.textBaseline The baseline for the text
     * @param {String} props.lineHeight The distance between each line's
     * baseline
     * @param {Object} [outlineProperties=]
     * @param {String} outlineProperties.color Any valid CSS color
     * @param {Number} outlineProperties.size The thickness of the outline
     * @param {Object} [shadowProperties=]
     * @param {String} shadowProperties.color Any valid CSS color
     * @param {Number} shadowProperties.offsetX The x offset of the shadow
     * @param {Number} shadowProperties.offsetY The y offset of the shadow
     * @param {Number} shadowProperties.blur The amount of blur the shadow
     * causes
     *
     */
    setTextForLocale: function(container, semanticText, bounds, props,
                               outlineProperties, shadowProperties) {
      function combineFontSizeAndSheet(size) {
        return size + 'px ' + getFontSheetForLocale();
      }
      var text = container.children[0];
      var outline = container.children[1];
      if (_.has(gameText, semanticText)) {
        this.unescapeUnicode(text, semanticText);
      } else {
        text.text = semanticText;
      }
      //set default values
      props = _.defaults({}, props, {
        color: '#000',
        size: 10,
        textAlign: 'left',
        textBaseline: 'top',
        lineHeight: 0
      });
      //set properties into text fields
      text.color = props.color;
      _.each(['textAlign', 'textBaseline', 'lineHeight'], function(prop) {
        text[prop] = outline[prop] = props[prop];
      });
      text.font = combineFontSizeAndSheet(props.size);
      //set outline if applicable
      _.extend(outline, _.pick(text, 'text', 'font'));
      if (_.isObject(outlineProperties) && data.language != 'ar') {
        outline.visible = true;
        outline.outline = outlineProperties.size || 1;
        outline.color = outlineProperties.color || '#fff';
      } else {
        outline.visible = false;
      }
      //keep text in specified bounds
      var metrics = text.getMetrics();
      var size = props.size - 1;
      if (_.has(bounds, 'width')) {
        text.lineWidth = outline.lineWidth = bounds.width;
        metrics = text.getMetrics();
        while (metrics.width > bounds.width) {
          text.font = outline.font = combineFontSizeAndSheet(size--);
          metrics = text.getMetrics();
        }
      }
      if (_.has(bounds, 'height')) {
        while (metrics.height > bounds.height) {
          text.font = outline.font = combineFontSizeAndSheet(size--);
          metrics = text.getMetrics();
        }
      }
      //set shadow if applicable
      if (_.isObject(shadowProperties)) {
        text.shadow = new createjs.Shadow(
          shadowProperties.color || '#000',
          shadowProperties.offsetX || 0,
          shadowProperties.offsetY || 0,
          shadowProperties.blur || 0
        );
      }
      //set container bounds to be equal to text bounds and add method to
      // bounds querying for text up to the wrapper container
      container.bounds = {
        width: metrics.width,
        height: metrics.height
      };
      if (!_.has(container, 'getMeasuredWidth')) {
        container.getMeasuredWidth = getMeasuredWidth;
      }
      if (!_.has(container, 'getMeasuredHeight')) {
        container.getMeasuredHeight= getMeasuredHeight;
      }
      if (!_.has(container, 'setText')) {
        container.setText = setText;
      }
      if (navigator.userAgent.indexOf("Firefox") > 0) {
        text.regY = -30;
        outline.regY = -30;
      }
    },
    /**
     * Creates a container of text taking language into consideration
     * @param {String} semanticText
     * @param {Object} bounds The max width and/or height the text should be
     * @param {String} props
     * @param {String} props.color Any valid CSS color
     * @param {Number} props.size The font size (subject to change with bounds)
     * @param {String} props.textAlign The alignment for the text
     * @param {Object} [outlineProperties=]
     * @param {String} outlineProperties.color Any valid CSS color
     * @param {Number} outlineProperties.size The thickness of the outline
     * @param {Object} [shadowProperties=]
     * @param {String} shadowProperties.color Any valid CSS color
     * @param {Number} shadowProperties.offsetX The x offset of the shadow
     * @param {Number} shadowProperties.offsetY The y offset of the shadow
     * @param {Number} shadowProperties.blur The amount of blur the shadow
     * causes
     * @returns {Object} A createjs Container
     */
    createTextForLocale: function(semanticText, bounds, props,
                                  outlineProperties, shadowProperties) {
      var container = new createjs.Container();
      container.addChild(new createjs.Text());
      container.addChild(new createjs.Text());
      this.setTextForLocale(container, semanticText, bounds, props,
        outlineProperties, shadowProperties);
      return container;
    }
  };
});