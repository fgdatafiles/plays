/* global define, console, createjs, _, data */

define(['lib/createjs-2015.11.26.combined', 'lib/lodash'],
  function() {
    'use strict';
    var music = {};
    var mutedState = {
      sfx: false,
      music: false
    };
    /**
     * Plays Audio
     *
     * @param {Object} source The mapping of keys to audio sources
     * @param {String} key The semantic name for this audio source
     * @param {String} path The path to the audio source
     * @param {Object} properties
     * @param {Number} [properties.loopCount=0] The number of times to
     * loop the audio
     * @param {Number} [properties.interrupt=false] Whether to interrupt
     * an existing audio
     * @param {Number} [properties.volume=1] The volume of this sfx
     * @returns {Object} The audio instance
     * @private
     */
    var createSource = function(source, key, path, properties) {
      if (source && _.has(source, key)) {
        source[key].stop();
      }
      properties = _.defaults({}, properties, {
        loopCount: 0,
        interrupt: false,
        volume: 1
      });
      var instance = createjs.Sound.play(path, {
        loop: properties.loopCount,
        interrupt: properties.interrupt
      });
      if (source) {
        source[key] = instance;
      }
      instance.volume = data.debug.disableSound ? 0 : properties.volume;
      return instance;
    };
    return {
      /**
       * Plays music track
       *
       * @param {String} key The semantic name for this audio source
       * @param {String} path The path to the audio source
       * @param {Object=} properties
       * @param {Number} [properties.loopCount=-1] The number of times to
       * loop the audio. -1 loops forever.
       * @param {Number} [properties.interrupt=false] Whether to interrupt
       * an existing audio
       * @param {Number} [properties.volume=1] The volume of this sfx
       * @return {Object} The audio instance
       */
      playMusic: function(key, path, properties) {

        if (!_.has(properties, 'loopCount')) {
          properties.loopCount = -1;
        }

        var instance = createSource(music, key, path, properties);
        instance.muted = mutedState.music;
        return instance;
      },
      /**
       * Plays a sound effect
       *
       * @param {String} path The path to the audio source
       * @param {Object=} properties
       * @param {Number} [properties.loopCount=0] The number of times to
       * loop the audio
       * @param {Number} [properties.interrupt=false] Whether to interrupt
       * an existing audio
       * @param {Number} [properties.volume=1] The volume of this sfx
       * @return {Object} The audio instance
       */
      playSfx: function(path, properties) {
        var instance;
        if (!mutedState.sfx) {
          instance = createSource(null, null, path, properties);
        }
        return instance;
      },
      /**
       * Sets the mute state of the sfx audio
       *
       * @param {Boolean} shouldMute Whether the audio should be muted or not
       */
      setMuteSfx: function(shouldMute) {
        mutedState.sfx = !!shouldMute;
      },
      /**
       * Returns whether the sfx audio is muted
       *
       * @returns {boolean} Returns true if the sfx audio is muted
       */
      isSfxMuted: function() {
        return mutedState.sfx;
      },
      /**
       * Toggles the mute state of sfx.
       */
      toggleSfxMuted: function() {
        this.setMuteSfx(!this.isSfxMuted());
      },
      /**
       * Sets the mute state of the music audio
       *
       * @param {Boolean} shouldMute Whether the audio should be muted or not
       */
      setMuteMusic: function(shouldMute) {
        mutedState.music = !!shouldMute;
        _.each(music, function(instance) {
          instance.muted = mutedState.music;
        });
      },
      /**
       * Returns whether the music audio is muted
       *
       * @returns {boolean} Returns true if the music audio is muted
       */
      isMusicMuted: function() {
        return mutedState.music;
      },
      /**
       * Toggles the mute state of music.
       */
      toggleMusicMuted: function() {
        this.setMuteMusic(!this.isMusicMuted());
      },
      /**
       * Stops the specified music track
       *
       * @param {String} key The semantic name of the music to stop
       * @param {Boolean} [remove=false] Whether to clean-up the music instance
       */
      stopMusicTrack: function(key, remove) {
        if (_.has(music, key)) {
          music[key].stop();
          if (remove) {
            delete music[key];
          }
        }
      },
      /**
       * Stops the specified music track
       *
       * @param {String} key The semantic name of the music to stop
       * @param {Number} The volume of this track
       */
      adjustMusicTrackVolume: function (key, volume, tweenTime) {
        if (_.has(music, key)) {
          createjs.Tween.get(music[key], {ignoreGlobalPause: true})
            .to({volume: volume}, tweenTime);
        }
      },
      /**
       *
       * @param {String} fromKey
       * @param {String} toKey
       * @param {String} path
       * @param {Object=} properties
       * @param {Number} [properties.loopCount=0] The number of times to
       * loop the audio
       * @param {Number} [properties.interrupt=false] Whether to interrupt
       * an existing audio
       * @param {Number} [properties.volume=1] The volume of this sfx
       */
      transitionTo: function(fromKey, toKey, path, properties) {
        var transitionProps = {
          musicCrossFadeStartPercent: data.musicCrossFadeStartPercent || 1,
          musicFadeOutTime: _.isNumber(data.musicFadeOutTime) ?
            data.musicFadeOutTime : 100
        };
        var deltaVolume = 0.01;
        var step;
        var i;
        var tween;
        if (_.has(music, fromKey)) {
          var instance = music[fromKey];
          tween = createjs.Tween.get(instance);
          step =
            transitionProps.musicFadeOutTime / (instance.volume / deltaVolume);
          for (i = instance.volume; i > 0; i -= deltaVolume ) {
            tween = tween.call(function() {
              instance.setVolume(this.val);
            }.bind({val: i})).wait(step);
          }
          tween.call(function() {
            this.stopMusicTrack(fromKey, true);
          }.bind(this));
        } else {
          transitionProps.musicCrossFadeStartPercent = 0;//if the from
          // doesn't exist, start right away
        }
        createjs.Tween.get()
          .wait(transitionProps.musicCrossFadeStartPercent *
          transitionProps.musicFadeOutTime)
          .call(function() {
            this.playMusic(toKey, path, properties);
          }.bind(this));
      }
    };
  });