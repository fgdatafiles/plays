pandaConfig = {
    "system": {
        "width": 1024,
        "height": 672,
        "minWidth": 0,
        "minHeight": 0,
        "scaleMode": "nearest",
        "webGL": true,
        "startScene": "Text",
        "rotateImg": "rotate-screen.png",
        "bgColor": "#000000",
        "resizeToFill": true,
        "scaleToFit": true,
        "stopAudioOnSceneChange": false
    },
    "storage": {
        "id": "com.goodboydigital.grubrunner"
    },
    "ie": {
        "system": {
            "webGL": false
        }
    },
    "mobile": {
        "system": {
            "webGL": false
        }
    },
    "showMoon": true,
    "showSpeedLines": true,
    "showBirds": true,
    "showBackgroundCity": true,
    "iPhone4": {
        "showMoon": false,
        "showSpeedLines": false,
        "showBirds": false,
        "showBackgroundCity": false
    },
    "androidStock": {
        "showMoon": false,
        "showSpeedLines": false,
        "showBirds": false,
        "showBackgroundCity": false
    },
    "lives": 3,
    "startLevel": "1",
    "speedUpTime": 35000,
    "endlessUnlocked": false,
    "skipToLevelEnd": false,
    "skipCountdown": false,
    "forceDay": false,
    "forceNight": false
};
var game = {
    version: "1.8.0",
    config: "undefined" != typeof pandaConfig ? pandaConfig : {},
    coreModules: ["engine.analytics", "engine.audio", "engine.camera", "engine.keyboard", "engine.loader", "engine.particle", "engine.physics", "engine.pixi", "engine.pool", "engine.renderer", "engine.scene", "engine.storage", "engine.system", "engine.timer", "engine.tween"],
    scale: 1,
    scene: null,
    debug: null,
    system: null,
    sound: null,
    pool: null,
    storage: null,
    keyboard: null,
    device: {},
    paths: {},
    plugins: {},
    json: {},
    modules: {},
    renderer: null,
    nocache: "",
    current: null,
    waitForLoad: 0,
    DOMLoaded: !1,
    next: 1,
    anims: {},
    moduleQueue: [],
    assetQueue: [],
    audioQueue: [],
    getJSON: function(e) {
        return this.json[this.paths[e]]
    },
    copy: function(e) {
        var t, i, s;
        if (!e || "object" != typeof e || e instanceof HTMLElement || e instanceof this.Class || this.Container && e instanceof this.Container) return e;
        if (e instanceof Array) {
            for (i = [], s = 0, t = e.length; t > s; s++) i[s] = this.copy(e[s]);
            return i
        }
        i = {};
        for (s in e) i[s] = this.copy(e[s]);
        return i
    },
    merge: function(e, t) {
        for (var i in t) {
            var s = t[i];
            "object" != typeof s || s instanceof HTMLElement || s instanceof this.Class || s instanceof this.Container ? e[i] = s : (e[i] && "object" == typeof e[i] || (e[i] = s instanceof Array ? [] : {}), this.merge(e[i], s))
        }
        return e
    },
    ksort: function(e) {
        if (!e || "object" != typeof e) return !1;
        var t, i = [],
            s = {};
        for (t in e) i.push(t);
        for (i.sort(), t = 0; t < i.length; t++) s[i[t]] = e[i[t]];
        return s
    },
    setVendorAttribute: function(e, t, i) {
        var s = t.ucfirst();
        e[t] = e["ms" + s] = e["moz" + s] = e["webkit" + s] = e["o" + s] = i
    },
    getVendorAttribute: function(e, t) {
        var i = t.ucfirst();
        return e[t] || e["ms" + i] || e["moz" + i] || e["webkit" + i] || e["o" + i]
    },
    normalizeVendorAttribute: function(e, t) {
        var i = this.getVendorAttribute(e, t);
        e[t] || (e[t] = e[t] || i)
    },
    fullscreen: function() {
        this.system.canvas.requestFullscreen && this.system.canvas.requestFullscreen(), this.system.canvas.requestFullScreen && this.system.canvas.requestFullScreen()
    },
    fullscreenSupport: function() {
        return !(!this.system.canvas.requestFullscreen && !this.system.canvas.requestFullScreen)
    },
    addAsset: function(e, t) {
        return this.addFileToQueue(e, t, "assetQueue")
    },
    addAssets: function(e) {
        for (var t = 0; t < e.length; t++) this.addAsset(e[t])
    },
    addAudio: function(e, t) {
        return this.addFileToQueue(e, t, "audioQueue")
    },
    addFileToQueue: function(e, t, i) {
        return t = t || e, e = this.config.mediaFolder + e + this.nocache, this.paths[t] ? t : (this.paths[t] = e, -1 === this[i].indexOf(e) && this[i].push(e), t)
    },
    module: function(e) {
        if (this.current) throw "Module " + this.current.name + " has no body";
        if (this.modules[e] && this.modules[e].body) throw "Module " + e + " is already defined";
        if (this.current = {
                name: e,
                requires: [],
                loaded: !1,
                body: null
            }, "game.main" === e && this.current.requires.push("engine.core"), this.modules[e] = this.current, this.moduleQueue.push(this.current), "engine.core" === this.current.name) {
            if (this.config.ignoreModules)
                for (var t = this.coreModules.length - 1; t >= 0; t--) - 1 !== this.config.ignoreModules.indexOf(this.coreModules[t]) && this.coreModules.splice(t, 1);
            this.current.requires = this.coreModules, this.body(function() {})
        }
        return this
    },
    require: function(e) {
        var t, e = Array.prototype.slice.call(arguments);
        for (t = 0; t < e.length; t++) e[t] && -1 === this.current.requires.indexOf(e[t]) && this.current.requires.push(e[t]);
        return this
    },
    body: function(e) {
        this.current.body = e, this.current = null, this.loadFinished && this.loadModules()
    },
    start: function(e, t, i) {
        if (!(this.moduleQueue.length > 0)) {
            this.system = new this.System(t, i), this.Audio && (this.audio = new this.Audio), game.DebugDraw || (game.DebugDraw = {}), game.Debug || (game.Debug = {}), game.Debug.enabled && (console.log("Panda.js " + game.version), console.log("Pixi.js " + game.PIXI.VERSION.replace("v", "")), console.log((this.system.renderer.gl ? "WebGL" : "Canvas") + " renderer " + this.system.width + "x" + this.system.height), console.log(this.Audio && this.Audio.enabled ? (this.audio.context ? "Web Audio" : "HTML5 Audio") + " engine" : "Audio disabled"), this.config.version && console.log((this.config.name ? this.config.name : "Game") + " " + this.config.version)), this.Pool && (this.pool = new this.Pool), this.DebugDraw && this.DebugDraw.enabled && (this.debugDraw = new this.DebugDraw), this.Storage && this.Storage.id && (this.storage = new this.Storage(this.Storage.id)), this.Analytics && this.Analytics.id && (this.analytics = new this.Analytics(this.Analytics.id)), this.TweenEngine && (this.tweenEngine = new this.TweenEngine);
            for (var s in this.plugins) this.plugins[s] = new this.plugins[s];
            this.loader = new this.Loader(e), this.system.rotateScreenVisible || this.loader.start()
        }
    },
    loadScript: function(e, t) {
        this.modules[e] = !0, this.waitForLoad++;
        var i = this.config.sourceFolder + "/" + e.replace(/\./g, "/") + ".js" + this.nocache,
            s = document.createElement("script");
        s.type = "text/javascript", s.src = i;
        var n = this;
        s.onload = function() {
            n.waitForLoad--, n.loadModules()
        }, s.onerror = function() {
            throw "Failed to load module " + e + " at " + i + " required from " + t
        }, document.getElementsByTagName("head")[0].appendChild(s)
    },
    loadModules: function() {
        var e, t, i, s, n, a;
        for (t = 0; t < this.moduleQueue.length; t++) {
            for (s = this.moduleQueue[t], a = !0, i = 0; i < s.requires.length; i++) n = s.requires[i], this.modules[n] ? this.modules[n].loaded || (a = !1) : (a = !1, this.loadScript(n, s.name));
            if (a && s.body) {
                if (this.moduleQueue.splice(t, 1), 0 === this.moduleQueue.length)
                    for (var r in this.config) {
                        var o = r.ucfirst();
                        if (this[o])
                            for (var h in this.config[r]) this[o][h] = this.config[r][h]
                    }
                s.loaded = !0, s.body(this), e = !0, t--, 0 !== this.moduleQueue.length || this.config.autoStart === !1 || this.system || this.start()
            }
        }
        if (e && this.moduleQueue.length > 0) this.loadModules();
        else {
            if (0 === this.waitForLoad && 0 !== this.moduleQueue.length) {
                var l = [];
                for (t = 0; t < this.moduleQueue.length; t++) {
                    var d = [],
                        u = this.moduleQueue[t].requires;
                    for (i = 0; i < u.length; i++) s = this.modules[u[i]], s && s.loaded || d.push(u[i]);
                    l.push(this.moduleQueue[t].name + " (requires: " + d.join(", ") + ")")
                }
                throw "Unresolved modules:\n" + l.join("\n")
            }
            this.loadFinished = !0
        }
    },
    setGameLoop: function(e, t) {
        if (window.requestAnimationFrame) {
            var i = this.next++;
            this.anims[i] = !0;
            var s = this,
                n = function() {
                    s.anims[i] && (window.requestAnimationFrame(n, t), e())
                };
            return window.requestAnimationFrame(n, t), i
        }
        return window.setInterval(e, 1e3 / 60)
    },
    clearGameLoop: function(e) {
        window.requestAnimationFrame ? delete this.anims[e] : window.clearInterval(e)
    },
    boot: function() {
        if (game.config.noCanvasURL) {
            var e = document.createElement("canvas"),
                t = !(!e.getContext || !e.getContext("2d"));
            t || (window.location = game.config.noCanvasURL)
        }
        Math.distance = function(e, t, i, s) {
            return e = i - e, t = s - t, Math.sqrt(e * e + t * t)
        }, Math._random = Math.random, Math.randomBetween = function(e, t) {
            return Math._random() * (t - e) + e
        }, Math.random = function(e, t) {
            return "number" == typeof t ? Math._random() * (t - e) + e : Math._random(e)
        }, Number.prototype.limit = function(e, t) {
            var i = this;
            return e > i && (i = e), i > t && (i = t), i
        }, Number.prototype.round = function(e) {
            return e = e ? Math.pow(10, e) : 1, Math.round(this * e) / e
        }, Array.prototype.erase = function(e) {
            for (var t = this.length; t >= 0; t--) this[t] === e && this.splice(t, 1);
            return this
        }, Array.prototype.random = function() {
            return this[Math.floor(Math.random() * this.length)]
        }, Array.prototype.shuffle = function() {
            for (var e = this.length, t = e; t--;) {
                var i = parseInt(Math.random() * e),
                    s = this[t];
                this[t] = this[i], this[i] = s
            }
            return this
        }, Function.prototype.bind = function(e) {
            var t = this,
                i = [];
            return Array.prototype.push.apply(i, arguments), i.shift(),
                function() {
                    var s = [];
                    return Array.prototype.push.apply(s, i), Array.prototype.push.apply(s, arguments), t.apply(e, s)
                }
        }, String.prototype.ucfirst = function() {
            return this.charAt(0).toUpperCase() + this.slice(1)
        }, this.coreModules = this.config.coreModules || this.coreModules, this.module("engine.core"), game.normalizeVendorAttribute(window, "requestAnimationFrame"), (document.location.href.match(/\?nocache/) || this.config.disableCache) && (this.nocache = "?" + Date.now()), this.device.pixelRatio = window.devicePixelRatio || 1, this.device.screen = {
            width: window.screen.availWidth * this.device.pixelRatio,
            height: window.screen.availHeight * this.device.pixelRatio
        }, this.device.iPod = /iPod/i.test(navigator.userAgent), this.device.iPhone = /iPhone/i.test(navigator.userAgent), this.device.iPhone4 = this.device.iPhone && 2 === this.device.pixelRatio && 920 === this.device.screen.height, this.device.iPhone5 = this.device.iPhone && 2 === this.device.pixelRatio && 1096 === this.device.screen.height, this.device.iPad = /iPad/i.test(navigator.userAgent), this.device.iPadRetina = this.device.iPad && 2 === this.device.pixelRatio, this.device.iOS = this.device.iPod || this.device.iPhone || this.device.iPad, this.device.iOS5 = this.device.iOS && /OS 5/i.test(navigator.userAgent), this.device.iOS6 = this.device.iOS && /OS 6/i.test(navigator.userAgent), this.device.iOS7 = this.device.iOS && /OS 7/i.test(navigator.userAgent), this.device.iOS71 = this.device.iOS && /OS 7_1/i.test(navigator.userAgent), this.device.iOS8 = this.device.iOS && /OS 8/i.test(navigator.userAgent), this.device.android = /android/i.test(navigator.userAgent), this.device.android2 = /android 2/i.test(navigator.userAgent);
        var i = navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
        if (this.device.androidStock = i && i[1] < 537, this.device.ie9 = /MSIE 9/i.test(navigator.userAgent), this.device.ie10 = /MSIE 10/i.test(navigator.userAgent), this.device.ie11 = /rv:11.0/i.test(navigator.userAgent), this.device.ie = this.device.ie10 || this.device.ie11 || this.device.ie9, this.device.wp7 = /Windows Phone OS 7/i.test(navigator.userAgent), this.device.wp8 = /Windows Phone 8/i.test(navigator.userAgent), this.device.wp = this.device.wp7 || this.device.wp8, this.device.wt = this.device.ie && /Tablet/i.test(navigator.userAgent), this.device.opera = /Opera/i.test(navigator.userAgent), this.device.crosswalk = /Crosswalk/i.test(navigator.userAgent), this.device.cocoonJS = !!navigator.isCocoonJS, this.device.ejecta = /Ejecta/i.test(navigator.userAgent), this.device.facebook = /FB/i.test(navigator.userAgent), this.device.mobile = this.device.iOS || this.device.android || this.device.wp || this.device.wt, "undefined" == typeof navigator.plugins || 0 === navigator.plugins.length) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), this.device.flash = !0
        } catch (s) {
            this.device.flash = !1
        } else this.device.flash = !!navigator.plugins["Shockwave Flash"];
        for (var n in this.device)
            if (this.device[n] && this.config[n])
                for (var a in this.config[n]) "object" == typeof this.config[n][a] ? this.merge(this.config[a], this.config[n][a]) : this.config[a] = this.config[n][a];
        this.config.sourceFolder = this.config.sourceFolder || "src", this.config.mediaFolder = this.config.mediaFolder ? this.config.mediaFolder + "/" : "media/";
        var r = document.getElementsByTagName("meta"),
            o = !1;
        for (n = 0; n < r.length; n++) "viewport" === r[n].name && (o = !0);
        if (!o) {
            var h = document.createElement("meta");
            h.name = "viewport";
            var l = "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no";
            this.device.iOS71 && (l += ",minimal-ui"), h.content = l, document.getElementsByTagName("head")[0].appendChild(h)
        }
        "complete" === document.readyState ? this.DOMReady() : (document.addEventListener("DOMContentLoaded", this.DOMReady.bind(this), !1), window.addEventListener("load", this.DOMReady.bind(this), !1))
    },
    DOMReady: function() {
        if (!this.DOMLoaded) {
            if (!document.body) return setTimeout(this.DOMReady.bind(this), 13);
            this.DOMLoaded = !0, this.loadModules()
        }
    },
    createClass: function(e, t, i) {
        if (game[e]) throw "Class " + e + " already exist";
        return "object" == typeof t && (i = t, t = "Class"), game[e] = game[t].extend(i)
    },
    createScene: function(e, t) {
        return this.createClass("Scene" + e, "Scene", t)
    },
    addAttributes: function(e, t) {
        if (!this[e]) throw "Class " + e + " not found";
        for (var i in t) this[e][i] = t[i]
    }
};
game.initializing = !1, game.fnTest = /xyz/.test(function() {
    var e;
    return e
}) ? /\b_super\b/ : /[\D|\d]*/, game.Class = function() {}, game.Class.extend = function(e) {
    function t() {
        if (!game.initializing) {
            if (this.staticInit) {
                var e = this.staticInit.apply(this, arguments);
                if (e) return e
            }
            for (var t in this) "object" == typeof this[t] && (this[t] = game.copy(this[t]));
            this.init && this.init.apply(this, arguments)
        }
        return this
    }
    var i = this.prototype;
    game.initializing = !0;
    var s = new this;
    game.initializing = !1;
    var n = function(e, t) {
        return function() {
            var s = this._super;
            this._super = i[e];
            var n = t.apply(this, arguments);
            return this._super = s, n
        }
    };
    for (var a in e) s[a] = "function" == typeof e[a] && "function" == typeof i[a] && game.fnTest.test(e[a]) ? n(a, e[a]) : e[a];
    return t.prototype = s, t.prototype.constructor = t, t.extend = game.Class.extend, t.inject = function(e) {
        var t = this.prototype,
            i = {},
            s = function(e, t) {
                return function() {
                    var s = this._super;
                    this._super = i[e];
                    var n = t.apply(this, arguments);
                    return this._super = s, n
                }
            };
        for (var n in e) "function" == typeof e[n] && "function" == typeof t[n] && game.fnTest.test(e[n]) ? (i[n] = t[n], t[n] = s(n, e[n])) : t[n] = e[n]
    }, t
}, "undefined" != typeof exports ? exports = module.exports = game : game.boot(), game.module("engine.analytics").body(function() {
    game.Analytics = game.Class.extend({
        trackId: null,
        userId: null,
        init: function(e) {
            if (navigator.onLine && (!game.device.cocoonJS || game.Analytics.cocoonJS)) {
                if (!e) throw "Analytics id not set.";
                if (this.trackId = e, game.device.cocoonJS && game.Analytics.cocoonJS) {
                    this.userId = this.guid();
                    var t = new XMLHttpRequest,
                        i = "v=1&tid=" + this.trackId + "&cid=" + this.userId + "&t=pageview&dp=%2F";
                    t.open("POST", "http://www.google-analytics.com/collect", !0), t.send(i)
                } else ! function(e, t, i, s, n, a, r) {
                    e.GoogleAnalyticsObject = n, e[n] = e[n] || function() {
                        (e[n].q = e[n].q || []).push(arguments)
                    }, e[n].l = 1 * new Date, a = t.createElement(i), r = t.getElementsByTagName(i)[0], a.async = 1, a.src = s, r.parentNode.insertBefore(a, r)
                }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", e, "auto"), ga("send", "pageview")
            }
        },
        guid: function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        },
        send: function(e, t, i, s) {
            if (navigator.onLine && (!game.device.cocoonJS || game.Analytics.cocoonJS))
                if (game.device.cocoonJS && game.Analytics.cocoonJS) {
                    var n = new XMLHttpRequest,
                        a = "v=1&tid=" + this.trackId + "&cid=" + this.userId + "&t=event&ec=" + e + "&ea=" + t;
                    "undefined" != typeof i && (a += "&el=" + i), "undefined" != typeof s && (a += "&ev=" + s), n.open("POST", "http://www.google-analytics.com/collect", !0), n.send(a)
                } else ga("send", "event", e, t, i, s)
        },
        event: function(e, t, i, s) {
            this.send(e, t, i, s)
        }
    }), game.Analytics.id = "", game.Analytics.cocoonJS = !1
}), game.module("engine.audio").body(function() {
    game.Audio = game.Class.extend({
        audioId: 0,
        audioObjects: {},
        systemPaused: [],
        format: null,
        playingSounds: [],
        pausedSounds: [],
        soundVolume: 1,
        currentMusic: null,
        musicMuted: !1,
        musicVolume: 1,
        sources: {},
        context: null,
        gainNode: null,
        init: function() {
            if (game.normalizeVendorAttribute(window, "AudioContext"), game.device.iOS5 && (game.Audio.enabled = !1), game.device.wp && (game.Audio.enabled = !1), game.device.android2 && (game.Audio.enabled = !1), game.device.cocoonJS || navigator.onLine || !game.device.mobile || (game.Audio.enabled = !1), game.Audio.enabled || (game.Audio.webAudio = !1), game.Audio.webAudio && !window.AudioContext && (game.Audio.webAudio = !1), game.Audio.enabled)
                for (var e = new Audio, t = 0; t < game.Audio.formats.length; t++)
                    if (e.canPlayType(game.Audio.formats[t].type)) {
                        this.format = game.Audio.formats[t].ext;
                        break
                    }
            this.format || (game.Audio.enabled = !1), game.Audio.enabled && game.Audio.webAudio && (this.context = new AudioContext, this.context.createGain ? this.gainNode = this.context.createGain() : this.context.createGainNode && (this.gainNode = this.context.createGainNode()), this.gainNode.connect(this.context.destination))
        },
        decode: function(e, t, i) {
            if (this.context) {
                if (!e.response) throw "Error loading audio: " + t;
                this.context.decodeAudioData(e.response, this.loaded.bind(this, t, i), this.error.bind(this, t))
            }
        },
        load: function(e, t) {
            if (!game.Audio.enabled) return void("function" == typeof t && t());
            var i = e.replace(/[^\.]+$/, this.format + game.nocache);
            if (this.context) {
                var s = new XMLHttpRequest;
                s.open("GET", i, !0), s.responseType = "arraybuffer", s.onload = this.decode.bind(this, s, e, t), s.send()
            } else {
                var n = new Audio(i);
                game.device.ie ? this.loaded(e, t, n) : (n.loadCallback = this.loaded.bind(this, e, t, n), n.addEventListener("canplaythrough", n.loadCallback, !1), n.addEventListener("error", this.error.bind(this, e), !1)), n.preload = "auto", n.load()
            }
        },
        loaded: function(e, t, i) {
            for (var s in game.paths)
                if (game.paths[s] === e) var n = s;
            if (!n) throw "No id found for audio source";
            this.sources[n] = {
                audio: i,
                path: e
            }, i instanceof Audio && (i.removeEventListener("canplaythrough", i.loadCallback, !1), i.addEventListener("ended", function() {
                this.playing = !1
            }, !1)), "function" == typeof t && t(e)
        },
        error: function(e) {
            throw "Error loading: " + e
        },
        onended: function(e) {
            var t = this.playingSounds.indexOf(e); - 1 !== t && this.playingSounds.splice(t, 1), e === this.currentMusic && (this.currentMusic = null);
            var i = this.audioObjects[e];
            return i ? ("function" == typeof i.callback && i.callback(), void delete this.audioObjects[e]) : !1
        },
        play: function(e, t, i, s, n, a, r) {
            if (!game.Audio.enabled) return !1;
            if ("number" != typeof i && (i = 1), "number" != typeof n && (n = 1), r || (this.audioId++, r = this.audioId), this.context) {
                var o = this.context.createBufferSource();
                o.buffer = this.sources[e].audio, o.loop = !!t, o.playbackRate.value = n, o.callback = s, o.onended = this.onended.bind(this, r);
                var h;
                this.context.createGain ? h = this.context.createGain() : this.context.createGainNode && (h = this.context.createGainNode()), h.gain.value = i, h.connect(this.gainNode), o.connect(h), o.gainNode = h;
                var l = a || 0;
                "function" == typeof o.start ? o.start(0, l) : o.noteOn(0, l), o.startTime = this.context.currentTime - l
            } else {
                this.sources[e].audio.volume = i, this.sources[e].audio.loop = t, this.sources[e].audio.playing = !0, this.sources[e].audio.callback = s, this.sources[e].audio.onended = this.onended.bind(this, this.audioId), this.sources[e].audio.play();
                var o = this.sources[e].audio
            }
            return this.audioObjects[r] = o, r
        },
        stop: function(e, t) {
            if (!game.Audio.enabled) return !1;
            var i = this.audioObjects[e];
            return i ? (t && (i.callback = null), this.context ? "function" == typeof i.stop ? i.stop(0) : i.noteOff(0) : (navigator.isCocoonJS ? i.volume = 0 : i.pause(), i.playing = !1), delete this.audioObjects[e], !0) : !1
        },
        pause: function(e) {
            if (!game.Audio.enabled) return !1;
            var t = this.audioObjects[e];
            return t ? (this.context ? (t.onended = null, "function" == typeof t.stop ? t.stop(0) : t.noteOff(0), t.pauseTime = (this.context.currentTime - t.startTime) % t.buffer.duration) : (t.currentTime > 0 && t.currentTime < t.duration || t.loop) && t.pause(), !0) : !1
        },
        resume: function(e) {
            if (!game.Audio.enabled) return !1;
            var t = this.audioObjects[e];
            if (!t) return !1;
            if (this.context) {
                if (!t.pauseTime) return !1;
                var i = this.getNameForAudio(t);
                this.play(i, t.loop, t.gainNode.gain.value, t.callback, t.playbackRate, t.pauseTime, e)
            } else {
                if (!t.playing) return !1;
                t.play()
            }
            return !0
        },
        mute: function(e) {
            if (!game.Audio.enabled) return !1;
            var t = this.audioObjects[e];
            return t ? (this.context ? t.gainNode.gain.value = 0 : t.volume = 0, !0) : !1
        },
        unmute: function(e, t) {
            if (!game.Audio.enabled) return !1;
            var i = this.audioObjects[e];
            return i ? (this.context ? i.gainNode.gain.value = t || 1 : i.volume = t || 1, !0) : !1
        },
        getNameForAudio: function(e) {
            if (this.context) {
                for (var t in this.sources)
                    if (this.sources[t].audio === e.buffer) return t
            } else
                for (var t in this.sources)
                    if (this.sources[t].audio === e) return t; return !1
        },
        playSound: function(e, t, i, s) {
            if (!game.Audio.enabled) return !1;
            var n = this.play(e, t, this.soundVolume, i, s);
            return this.playingSounds.push(n), n
        },
        stopSound: function(e, t) {
            if (!game.Audio.enabled) return !1;
            if (e) return this.stop(e, !!t);
            for (var i = this.playingSounds.length - 1; i >= 0; i--) this.stop(this.playingSounds[i], !!t);
            return !0
        },
        pauseSound: function(e) {
            if (!game.Audio.enabled) return !1;
            if (e) {
                var t = this.playingSounds.indexOf(e);
                if (-1 === t) return !1;
                this.pause(e), this.playingSounds.splice(t, 1), this.pausedSounds.push(e)
            } else {
                for (var i = this.playingSounds.length - 1; i >= 0; i--) this.pause(this.playingSounds[i]), this.pausedSounds.push(this.playingSounds[i]);
                this.playingSounds.length = 0
            }
            return !0
        },
        resumeSound: function(e) {
            if (!game.Audio.enabled) return !1;
            var t = this.pausedSounds.indexOf(e);
            return -1 === t ? !1 : (this.resume(e), this.playingSounds.push(e), this.pausedSounds.splice(t, 1), !0)
        },
        muteSound: function(e) {
            if (!game.Audio.enabled) return !1;
            if (e) return this.mute(e);
            for (var t = this.playingSounds.length - 1; t >= 0; t--) this.mute(this.playingSounds[t]);
            return !0
        },
        unmuteSound: function(e) {
            if (!game.Audio.enabled) return !1;
            if (e) return this.unmute(e, this.soundVolume);
            for (var t = this.playingSounds.length - 1; t >= 0; t--) this.unmute(this.playingSounds[t], this.soundVolume);
            return !0
        },
        playMusic: function(e, t) {
            if (!game.Audio.enabled) return !1;
            var i = this.musicMuted ? 0 : this.musicVolume;
            return "undefined" == typeof t && (t = !0), this.currentMusic && this.stop(this.currentMusic), this.currentMusic = this.play(e, !!t, i), !!this.currentMusic
        },
        stopMusic: function() {
            if (!game.Audio.enabled) return !1;
            if (this.currentMusic) {
                var e = this.stop(this.currentMusic);
                return this.currentMusic = null, !!e
            }
            return !1
        },
        pauseMusic: function() {
            return game.Audio.enabled && this.currentMusic ? this.pause(this.currentMusic) : !1
        },
        resumeMusic: function() {
            return this.resume(this.currentMusic)
        },
        muteMusic: function() {
            return game.Audio.enabled ? (this.musicMuted = !0, void(this.currentMusic && this.mute(this.currentMusic))) : !1
        },
        unmuteMusic: function() {
            return game.Audio.enabled ? (this.musicMuted = !1, void(this.currentMusic && this.unmute(this.currentMusic, this.musicVolume))) : !1
        },
        setSoundVolume: function(e) {
            if (!game.Audio.enabled) return !1;
            this.soundVolume = e;
            for (var t = this.playingSounds.length - 1; t >= 0; t--) this.context ? this.audioObjects[this.playingSounds[t]].gainNode.gain.value = this.soundVolume : this.playingSounds[t].volume = this.soundVolume;
            for (var t = this.pausedSounds.length - 1; t >= 0; t--) this.context ? this.audioObjects[this.pausedSounds[t]].gainNode.gain.value = this.soundVolume : this.pausedSounds[t].volume = this.soundVolume
        },
        setMusicVolume: function(e) {
            return game.Audio.enabled ? (this.musicVolume = e, this.currentMusic ? (this.context ? this.currentMusic.gainNode.gain.value = this.musicVolume : this.currentMusic.volume = this.musicVolume, !0) : !1) : !1
        },
        setPlaybackRate: function(e, t) {
            return game.Audio.enabled ? void(e && this.context && (e.playbackRate.value = t || 1)) : !1
        },
        isSoundPlaying: function(e) {
            return -1 !== this.playingSounds.indexOf(e) ? !0 : !1
        },
        isMusicPlaying: function() {
            return !!this.currentMusic
        },
        systemPause: function() {
            this.pauseMusic();
            for (var e = this.playingSounds.length - 1; e >= 0; e--) this.pause(this.playingSounds[e]), this.systemPaused.push(this.playingSounds[e])
        },
        systemResume: function() {
            this.resumeMusic();
            for (var e = this.systemPaused.length - 1; e >= 0; e--) this.resume(this.systemPaused[e]);
            this.systemPaused.length = 0
        }
    }), game.Audio.enabled = !0, game.Audio.webAudio = !0, game.Audio.formats = [{
        ext: "m4a",
        type: 'audio/mp4; codecs="mp4a.40.5"'
    }, {
        ext: "ogg",
        type: 'audio/ogg; codecs="vorbis"'
    }]
}), game.module("engine.camera").body(function() {
    game.Camera = game.Class.extend({
        maxSpeed: 200,
        acceleration: 3,
        offset: null,
        target: null,
        container: null,
        speed: null,
        sensorPosition: null,
        sensorWidth: 200,
        sensorHeight: 200,
        threshold: 1,
        minX: null,
        maxX: null,
        minY: null,
        maxY: null,
        init: function(e, t) {
            this.position = new game.Point, this.speed = new game.Point, this.offset = new game.Point(game.system.width / 2, game.system.height / 2), this.sensorPosition = new game.Point(this.offset.x, this.offset.y), e && t && this.setPosition(e, t), game.scene.addObject(this), game.debugDraw && game.Camera.debug && (this.debugBox = new game.Graphics, this.debugBox.beginFill(game.Camera.debugColor), this.debugBox.alpha = game.Camera.debugAlpha, this.debugBox.drawRect(-this.sensorWidth / 2, -this.sensorHeight / 2, this.sensorWidth, this.sensorHeight), game.system.stage.addChild(this.debugBox))
        },
        follow: function(e) {
            this.target = e, this.sensorPosition.set(this.target.position.x, this.target.position.y)
        },
        addTo: function(e) {
            return this.container = e, this.container.position.set(-this.position.x, -this.position.y), this
        },
        setPosition: function(e, t) {
            this.position.set(e - this.offset.x, t - this.offset.y), "number" == typeof this.minX && this.position.x < this.minX ? (this.position.x = this.minX, this.speed.x = 0) : "number" == typeof this.maxX && this.position.x > this.maxX && (this.position.x = this.maxX, this.speed.x = 0), "number" == typeof this.minY && this.position.y < this.minY ? (this.position.y = this.minY, this.speed.y = 0) : "number" == typeof this.maxY && this.position.y > this.maxY && (this.position.y = this.maxY, this.speed.y = 0), this.container && (this.container.position.x = ~~-this.position.x, this.container.position.y = ~~-this.position.y)
        },
        moveSensor: function() {
            var e = Math.abs(this.target.width),
                t = Math.abs(this.target.height);
            (this.sensorWidth < e || this.sensorHeight < t) && this.setSensor(e, t), this.target.position.x < this.sensorPosition.x - this.sensorWidth / 2 + e / 2 ? this.sensorPosition.x = this.target.position.x + this.sensorWidth / 2 - e / 2 : this.target.position.x + (this.sensorWidth / 2 + e / 2) > this.sensorPosition.x + this.sensorWidth && (this.sensorPosition.x = this.target.position.x + (this.sensorWidth / 2 + e / 2) - this.sensorWidth), this.target.position.y < this.sensorPosition.y - this.sensorHeight / 2 + t / 2 ? this.sensorPosition.y = this.target.position.y + this.sensorHeight / 2 - t / 2 : this.target.position.y + (this.sensorHeight / 2 + t / 2) > this.sensorPosition.y + this.sensorHeight && (this.sensorPosition.y = this.target.position.y + (this.sensorHeight / 2 + t / 2) - this.sensorHeight)
        },
        setSensor: function(e, t) {
            this.sensorWidth = e, this.sensorHeight = t, this.debugBox && (this.debugBox.clear(), this.debugBox.beginFill(game.Camera.debugColor), this.debugBox.drawRect(-this.sensorWidth / 2, -this.sensorHeight / 2, this.sensorWidth, this.sensorHeight))
        },
        moveCamera: function() {
            this.speed.x = (this.position.x - this.sensorPosition.x + this.offset.x).limit(-this.maxSpeed, this.maxSpeed), this.speed.y = (this.position.y - this.sensorPosition.y + this.offset.y).limit(-this.maxSpeed, this.maxSpeed), this.speed.x > this.threshold || this.speed.x < -this.threshold || this.speed.y > this.threshold || this.speed.y < -this.threshold ? (this.setPosition(this.position.x + this.offset.x - this.speed.x * this.acceleration * game.system.delta, this.position.y + this.offset.y - this.speed.y * this.acceleration * game.system.delta), this.debugBox && (this.debugBox.alpha = 2 * game.Camera.debugAlpha)) : (this.speed.x = 0, this.speed.y = 0, this.debugBox && (this.debugBox.alpha = game.Camera.debugAlpha))
        },
        update: function() {
            this.target && this.moveSensor(), this.moveCamera(), this.debugBox && this.debugBox.position.set(this.sensorPosition.x - this.position.x, this.sensorPosition.y - this.position.y)
        }
    }), game.Camera.debug = !1, game.Camera.debugColor = 16711935, game.Camera.debugAlpha = .2
}), game.module("engine.keyboard").body(function() {
    game.Keyboard = game.Class.extend({
        keys: [],
        keysDown: [],
        init: function() {
            this.keys[8] = "BACKSPACE", this.keys[9] = "TAB", this.keys[13] = "ENTER", this.keys[16] = "SHIFT", this.keys[17] = "CTRL", this.keys[18] = "ALT", this.keys[19] = "PAUSE", this.keys[20] = "CAPS_LOCK", this.keys[27] = "ESC", this.keys[32] = "SPACE", this.keys[33] = "PAGE_UP", this.keys[34] = "PAGE_DOWN", this.keys[35] = "END", this.keys[36] = "HOME", this.keys[37] = "LEFT", this.keys[38] = "UP", this.keys[39] = "RIGHT", this.keys[40] = "DOWN", this.keys[44] = "PRINT_SCREEN", this.keys[45] = "INSERT", this.keys[46] = "DELETE", this.keys[48] = "0", this.keys[49] = "1", this.keys[50] = "2", this.keys[51] = "3", this.keys[52] = "4", this.keys[53] = "5", this.keys[54] = "6", this.keys[55] = "7", this.keys[56] = "8", this.keys[57] = "9", this.keys[65] = "A", this.keys[66] = "B", this.keys[67] = "C", this.keys[68] = "D", this.keys[69] = "E", this.keys[70] = "F", this.keys[71] = "G", this.keys[72] = "H", this.keys[73] = "I", this.keys[74] = "J", this.keys[75] = "K", this.keys[76] = "L", this.keys[77] = "M", this.keys[78] = "N", this.keys[79] = "O", this.keys[80] = "P", this.keys[81] = "Q", this.keys[82] = "R", this.keys[83] = "S", this.keys[84] = "T", this.keys[85] = "U", this.keys[86] = "V", this.keys[87] = "W", this.keys[88] = "X", this.keys[89] = "Y", this.keys[90] = "Z", this.keys[96] = "NUM_ZERO", this.keys[97] = "NUM_ONE", this.keys[98] = "NUM_TWO", this.keys[99] = "NUM_THREE", this.keys[100] = "NUM_FOUR", this.keys[101] = "NUM_FIVE", this.keys[102] = "NUM_SIX", this.keys[103] = "NUM_SEVEN", this.keys[104] = "NUM_EIGHT", this.keys[105] = "NUM_NINE", this.keys[106] = "NUM_MULTIPLY", this.keys[107] = "NUM_PLUS", this.keys[109] = "NUM_MINUS", this.keys[110] = "NUM_PERIOD", this.keys[111] = "NUM_DIVISION", this.keys[112] = "F1", this.keys[113] = "F2", this.keys[114] = "F3", this.keys[115] = "F4", this.keys[116] = "F5", this.keys[117] = "F6", this.keys[118] = "F7", this.keys[119] = "F8", this.keys[120] = "F9", this.keys[121] = "F10", this.keys[122] = "F11", this.keys[123] = "F12", window.addEventListener("keydown", this.keydown.bind(this)), window.addEventListener("keyup", this.keyup.bind(this)), window.addEventListener("blur", this.resetKeys.bind(this))
        },
        resetKeys: function() {
            for (var e in this.keysDown) this.keysDown[e] = !1
        },
        keydown: function(e) {
            if (this.keys[e.keyCode] && !this.keysDown[this.keys[e.keyCode]] && (this.keysDown[this.keys[e.keyCode]] = !0, game.scene)) {
                var t = game.scene.keydown(this.keys[e.keyCode], !!this.keysDown.SHIFT, !!this.keysDown.CTRL, !!this.keysDown.ALT);
                t && e.preventDefault()
            }
        },
        keyup: function(e) {
            if (this.keysDown[this.keys[e.keyCode]] = !1, game.scene) {
                var t = game.scene.keyup(this.keys[e.keyCode]);
                t && e.preventDefault()
            }
        },
        down: function(e) {
            return this.keysDown[e]
        }
    }), game.keyboard = new game.Keyboard
}), game.module("engine.loader").body(function() {
    game.Loader = game.Class.extend({
        scene: null,
        loaded: 0,
        percent: 0,
        assetQueue: [],
        soundQueue: [],
        started: !1,
        dynamic: !0,
        callback: null,
        init: function(e) {
            e && e.prototype.init || game.System.startScene ? (this.scene = e || game[game.System.startScene] || window[game.System.startScene] || game["Scene" + game.System.startScene] || window["Scene" + game.System.startScene], this.dynamic = !1, game.System.startScene = null) : this.callback = e, this.stage = game.system.stage;
            for (var t = 0; t < game.assetQueue.length; t++) game.TextureCache[game.assetQueue[t]] || this.assetQueue.push(this.getPath(game.assetQueue[t]));
            if (game.assetQueue.length = 0, game.Audio.enabled) {
                for (var t = 0; t < game.audioQueue.length; t++) this.soundQueue.push(game.audioQueue[t]);
                game.audioQueue.length = 0
            }
            this.assetQueue.length > 0 && (this.loader = new game.AssetLoader(this.assetQueue, !0), this.loader.onProgress = this.progress.bind(this), this.loader.onComplete = this.loadAudio.bind(this), this.loader.onError = this.error.bind(this)), 0 === this.assetQueue.length && 0 === this.soundQueue.length && (this.percent = 100)
        },
        initStage: function() {
            game.Loader.logo && (this.logo = new game.Sprite(game.Texture.fromImage(game.Loader.logo)), this.logo.anchor.set(.5, 1), this.logo.position.set(game.system.width / 2, game.system.height / 2 + this.logo.height / 2), this.stage.addChild(this.logo)), this.barBg = new game.Graphics, this.barBg.beginFill(game.Loader.barBg), this.barBg.drawRect(0, 0, game.Loader.barWidth, game.Loader.barHeight), this.barBg.position.set(game.system.width / 2 - game.Loader.barWidth / 2, game.system.height / 2 - game.Loader.barHeight / 2), this.logo && (this.barBg.position.y += this.logo.height / 2 + game.Loader.barHeight + game.Loader.barMargin), this.stage.addChild(this.barBg), this.barFg = new game.Graphics, this.barFg.beginFill(game.Loader.barColor), this.barFg.drawRect(0, 0, game.Loader.barWidth + 2, game.Loader.barHeight + 2), this.barFg.position.set(game.system.width / 2 - game.Loader.barWidth / 2 - 1, game.system.height / 2 - game.Loader.barHeight / 2 - 1), this.logo && (this.barFg.position.y += this.logo.height / 2 + game.Loader.barHeight + game.Loader.barMargin), this.barFg.scale.x = this.percent / 100, this.stage.addChild(this.barFg)
        },
        onComplete: function(e) {
            return this.callback = e, this
        },
        start: function() {
            if (this.started = !0, !this.dynamic) {
                if (game.scene) {
                    for (var e = this.stage.children.length - 1; e >= 0; e--) this.stage.removeChild(this.stage.children[e]);
                    this.stage.setBackgroundColor(game.Loader.bgColor), this.stage.interactive = !1, this.stage.mousemove = this.stage.touchmove = null, this.stage.click = this.stage.tap = null, this.stage.mousedown = this.stage.touchstart = null, this.stage.mouseup = this.stage.mouseupoutside = this.stage.touchend = this.stage.touchendoutside = null, this.stage.mouseout = null
                }
                if ("number" == typeof game.Loader.bgColor) {
                    var t = new game.Graphics;
                    t.beginFill(game.Loader.bgColor), t.drawRect(0, 0, game.system.width, game.system.height), this.stage.addChild(t)
                }
                this.initStage(), game.scene ? game.scene = this : this.loopId = game.setGameLoop(this.run.bind(this), game.system.canvas)
            }
            return this.assetQueue.length > 0 ? this.loader.load() : this.soundQueue.length > 0 ? this.loadAudio() : this.ready(), this
        },
        error: function(e) {
            if (e) throw e
        },
        progress: function(e) {
            e && e.json && (game.json[e.url] = e.json), this.loaded++, this.percent = Math.round(this.loaded / (this.assetQueue.length + this.soundQueue.length) * 100), this.onPercentChange(), this.dynamic && this.loaded === this.assetQueue.length + this.soundQueue.length && this.ready()
        },
        onPercentChange: function() {
            this.barFg && (this.barFg.scale.x = this.percent / 100)
        },
        loadAudio: function() {
            for (var e = this.soundQueue.length - 1; e >= 0; e--) game.audio.load(this.soundQueue[e], this.progress.bind(this))
        },
        ready: function() {
            if (game.system.retina || game.system.hires)
                for (var e in game.TextureCache) - 1 !== e.indexOf("@2x") && (game.TextureCache[e.replace("@2x", "")] = game.TextureCache[e], delete game.TextureCache[e]);
            return game.assetQueue.length = 0, game.audioQueue.length = 0, this.dynamic ? void("function" == typeof this.callback && this.callback()) : this.setScene()
        },
        setScene: function() {
            game.system.timer.last = 0, game.Timer.time = Number.MIN_VALUE, this.loopId && game.clearGameLoop(this.loopId), game.system.setScene(this.scene)
        },
        run: function() {
            this.loopId && (this.last = game.Timer.time, game.Timer.update(), game.system.delta = (game.Timer.time - this.last) / 1e3), this.update(), this.render()
        },
        update: function() {
            if (this.startTime || (this.startTime = Date.now()), game.tweenEngine && game.tweenEngine.update(), !this._ready)
                if (this.timer) this.timer.time() >= 0 && (this._ready = !0, this.ready());
                else if (this.loaded === this.assetQueue.length + this.soundQueue.length) {
                var e = Date.now() - this.startTime,
                    t = Math.max(100, game.Loader.timeout - e);
                this.timer = new game.Timer(t)
            }
        },
        render: function() {
            game.system.renderer.render(this.stage)
        },
        getPath: function(e) {
            return game.system.retina || game.system.hires ? e.replace(/\.(?=[^.]*$)/, "@2x.") : e
        }
    }), game.Loader.bgColor = 0, game.Loader.timeout = 200, game.Loader.barBg = 2301728, game.Loader.barColor = 15132648, game.Loader.barWidth = 200, game.Loader.barHeight = 20, game.Loader.barMargin = 10, game.Loader.logo = null
}), game.module("engine.particle").body(function() {
    game.Particle = game.Class.extend({
        position: null,
        velocity: null,
        sprite: null,
        accel: null,
        init: function() {
            this.position = new game.Point, this.velocity = new game.Point, this.accel = new game.Point
        },
        setVeloctity: function(e, t) {
            this.velocity.x = Math.cos(e) * t, this.velocity.y = Math.sin(e) * t
        },
        setAccel: function(e, t) {
            this.accel.x = Math.cos(e) * t, this.accel.y = Math.sin(e) * t
        }
    }), game.Emitter = game.Class.extend({
        poolName: "emitter",
        particles: [],
        textures: [],
        container: null,
        position: null,
        positionVar: null,
        angle: 0,
        angleVar: Math.PI,
        speed: 100,
        speedVar: 0,
        life: 2,
        lifeVar: 0,
        duration: 0,
        durationTimer: 0,
        rate: .1,
        rateTimer: 0,
        count: 10,
        active: !0,
        velRotate: 0,
        velRotateVar: 0,
        rotate: 0,
        rotateVar: 0,
        startAlpha: 1,
        endAlpha: 0,
        startScale: 1,
        startScaleVar: 0,
        endScale: 1,
        endScaleVar: 0,
        target: null,
        targetForce: 0,
        accelAngle: Math.PI / 2,
        accelAngleVar: 0,
        accelSpeed: 0,
        accelSpeedVar: 0,
        spriteSettings: {
            anchor: {
                x: .5,
                y: .5
            }
        },
        velocityLimit: null,
        init: function(e) {
            game.pool.create(this.poolName), this.position = new game.Point, this.positionVar = new game.Point, this.velocityLimit = new game.Point, this.target = new game.Point, game.merge(this, e)
        },
        reset: function(e) {
            for (var t in this) "number" == typeof this[t] && (this[t] = game.Emitter.prototype[t]), this[t] instanceof game.Point && e && this[t].set(0, 0)
        },
        getVariance: function(e) {
            return Math.random() * e * (Math.random() > .5 ? -1 : 1)
        },
        addParticle: function() {
            var e = game.pool.get(this.poolName);
            e || (e = new game.Particle), e.position.x = this.position.x + this.getVariance(this.positionVar.x), e.position.y = this.position.y + this.getVariance(this.positionVar.y);
            var t = this.getVariance(this.angleVar),
                i = this.angle + t,
                s = this.speed + this.getVariance(this.speedVar);
            e.setVeloctity(i, s), this.angleVar !== this.accelAngleVar && (t = this.getVariance(this.accelAngleVar)), i = this.accelAngle + t, s = this.accelSpeed + this.getVariance(this.accelSpeedVar), e.setAccel(i, s), e.life = this.life + this.getVariance(this.lifeVar), e.sprite ? (e.sprite.setTexture(this.textures.random()), e.sprite.position.x = e.position.x, e.sprite.position.y = e.position.y, e.sprite.rotation = 0) : e.sprite = new game.Sprite(this.textures.random(), e.position.x, e.position.y, this.spriteSettings), e.rotate = this.rotate + this.getVariance(this.rotateVar), e.velRotate = this.velRotate + this.getVariance(this.velRotateVar), this.startAlpha !== this.endAlpha ? (e.deltaAlpha = this.endAlpha - this.startAlpha, e.deltaAlpha /= e.life) : e.deltaAlpha = 0, e.sprite.alpha = this.startAlpha;
            var n = this.startScale + this.getVariance(this.startScaleVar);
            this.startScale !== this.endScale ? (e.deltaScale = this.endScale + this.getVariance(this.endScaleVar) - n, e.deltaScale /= e.life) : e.deltaScale = 0, e.sprite.scale.x = e.sprite.scale.y = n, this.container && this.container.addChild(e.sprite), this.particles.push(e)
        },
        updateParticle: function(e) {
            if (e.life > 0 && (e.life -= game.system.delta, e.life <= 0)) return this.removeParticle(e);
            if (this.targetForce > 0) {
                e.accel.set(this.target.x - e.position.x, this.target.y - e.position.y);
                var t = Math.sqrt(e.accel.x * e.accel.x + e.accel.y * e.accel.y);
                e.accel.x /= t || 1, e.accel.y /= t || 1, e.accel.x *= this.targetForce, e.accel.y *= this.targetForce
            }
            if (e.velocity.x += e.accel.x * game.system.delta, e.velocity.y += e.accel.y * game.system.delta, (this.velocityLimit.x > 0 || this.velocityLimit.y > 0) && (e.velocity.x = e.velocity.x.limit(-this.velocityLimit.x, this.velocityLimit.x), e.velocity.y = e.velocity.y.limit(-this.velocityLimit.y, this.velocityLimit.y)), e.velRotate) {
                var i = Math.cos(e.velRotate * game.system.delta),
                    s = Math.sin(e.velRotate * game.system.delta),
                    n = e.velocity.x * i - e.velocity.y * s,
                    a = e.velocity.y * i + e.velocity.x * s;
                e.velocity.set(n, a)
            }
            e.position.x += e.velocity.x * game.scale * game.system.delta, e.position.y += e.velocity.y * game.scale * game.system.delta, e.deltaAlpha && (e.sprite.alpha = Math.max(0, e.sprite.alpha + e.deltaAlpha * game.system.delta)), e.deltaScale && (e.sprite.scale.x = e.sprite.scale.y += e.deltaScale * game.system.delta), e.sprite.rotation += e.rotate * game.system.delta, e.sprite.position.x = e.position.x, e.sprite.position.y = e.position.y
        },
        removeParticle: function(e) {
            e.sprite.parent && e.sprite.parent.removeChild(e.sprite), game.pool.put(this.poolName, e), this.particles.erase(e)
        },
        emit: function(e) {
            e = e || 1;
            for (var t = 0; e > t; t++) this.addParticle()
        },
        update: function() {
            if (this._remove)
                for (var e = this.particles.length - 1; e >= 0; e--) this.removeParticle(this.particles[e]);
            else {
                this.durationTimer += game.system.delta, this.duration > 0 && (this.active = this.durationTimer < this.duration), this.rate && this.active && (this.rateTimer += game.system.delta, this.rateTimer >= this.rate && (this.rateTimer = 0, this.emit(this.count)));
                for (var e = this.particles.length - 1; e >= 0; e--) this.updateParticle(this.particles[e])
            }
        },
        remove: function() {
            this._remove = !0
        },
        addTo: function(e) {
            this.container = e
        }
    })
}), game.module("engine.physics").body(function() {
    game.World = game.Class.extend({
        gravity: null,
        solver: null,
        bodies: [],
        collisionGroups: [],
        init: function(e, t) {
            this.gravity = new game.Vector, this.gravity.x = "number" == typeof e ? e : 0, this.gravity.y = "number" == typeof t ? t : 980, this.solver = new game.CollisionSolver
        },
        addBody: function(e) {
            e.world = this, this.bodies.push(e), "number" == typeof e.collisionGroup && this.addBodyCollision(e, e.collisionGroup), game.debugDraw && e.shape && game.debugDraw.addBody(e)
        },
        removeBody: function(e) {
            e.world && (e.world = null, e._remove = !0)
        },
        removeBodyCollision: function(e) {
            this.collisionGroups[e.collisionGroup].erase(e)
        },
        addBodyCollision: function(e, t) {
            e.collisionGroup = t, this.collisionGroups[e.collisionGroup] = this.collisionGroups[e.collisionGroup] || [], this.collisionGroups[e.collisionGroup].push(e)
        },
        removeCollisionGroup: function(e) {
            this.collisionGroups.erase(this.collisionGroups[e])
        },
        collide: function(e) {
            var t, i, s, n;
            for (t = 0; t < e.collideAgainst.length; t++)
                if (n = this.collisionGroups[e.collideAgainst[t]])
                    for (i = n.length - 1; i >= 0 && n; i--) s = n[i], e !== s && this.solver.solve(e, s)
        },
        update: function() {
            var e, t;
            for (e = this.bodies.length - 1; e >= 0; e--) this.bodies[e]._remove ? ("number" == typeof this.bodies[e].collisionGroup && this.removeBodyCollision(this.bodies[e]), this.bodies.splice(e, 1)) : this.bodies[e].update();
            for (e = this.collisionGroups.length - 1; e >= 0; e--)
                if (this.collisionGroups[e])
                    for (t = this.collisionGroups[e].length - 1; t >= 0; t--) this.collisionGroups[e][t] && this.collisionGroups[e][t].collideAgainst.length > 0 && this.collide(this.collisionGroups[e][t])
        }
    }), game.CollisionSolver = game.Class.extend({
        solve: function(e, t) {
            this.hitTest(e, t) && this.hitResponse(e, t) && e.afterCollide(t)
        },
        hitTest: function(e, t) {
            if (e.shape instanceof game.Rectangle && t.shape instanceof game.Rectangle) return !(e.position.y + e.shape.height / 2 <= t.position.y - t.shape.height / 2 || e.position.y - e.shape.height / 2 >= t.position.y + t.shape.height / 2 || e.position.x - e.shape.width / 2 >= t.position.x + t.shape.width / 2 || e.position.x + e.shape.width / 2 <= t.position.x - t.shape.width / 2);
            if (e.shape instanceof game.Circle && t.shape instanceof game.Circle) return e.shape.radius + t.shape.radius > e.position.distance(t.position);
            if (e.shape instanceof game.Rectangle && t.shape instanceof game.Circle || e.shape instanceof game.Circle && t.shape instanceof game.Rectangle) {
                var i = e.shape instanceof game.Rectangle ? e : t,
                    s = e.shape instanceof game.Circle ? e : t,
                    n = Math.max(i.position.x - i.shape.width / 2, Math.min(i.position.x + i.shape.width / 2, s.position.x)),
                    a = Math.max(i.position.y - i.shape.height / 2, Math.min(i.position.y + i.shape.height / 2, s.position.y)),
                    r = Math.pow(s.position.x - n, 2) + Math.pow(s.position.y - a, 2);
                return r < s.shape.radius * s.shape.radius
            }
            if (e.shape instanceof game.Line && t.shape instanceof game.Line) {
                var o = Math.sin(e.shape.rotation),
                    h = Math.cos(e.shape.rotation),
                    l = Math.sin(t.shape.rotation),
                    d = Math.cos(t.shape.rotation),
                    u = e.position.x - o * (e.shape.length / 2),
                    c = e.position.y - h * (e.shape.length / 2),
                    p = e.position.x + o * (e.shape.length / 2),
                    m = e.position.y + h * (e.shape.length / 2),
                    g = t.position.x - l * (t.shape.length / 2),
                    f = t.position.y - d * (t.shape.length / 2),
                    y = t.position.x + l * (t.shape.length / 2),
                    v = t.position.y + d * (t.shape.length / 2),
                    b = (v - f) * (p - u) - (y - g) * (m - c);
                if (0 !== b) {
                    var x = (y - g) * (c - f) - (v - f) * (u - g),
                        w = (p - u) * (c - f) - (m - c) * (u - g),
                        T = x / b;
                    if (b = w / b, T >= 0 && 1 >= T && b >= 0 && 1 >= b) return !0
                }
                return !1
            }
            if (e.shape instanceof game.Line && t.shape instanceof game.Circle || e.shape instanceof game.Circle && t.shape instanceof game.Line) {
                var S = e.shape instanceof game.Line ? e : t,
                    s = e.shape instanceof game.Circle ? e : t,
                    u = S.position.x - Math.sin(S.shape.rotation - S.rotation) * (S.shape.length / 2),
                    c = S.position.y - Math.cos(S.shape.rotation - S.rotation) * (S.shape.length / 2),
                    p = S.position.x + Math.sin(S.shape.rotation - S.rotation) * (S.shape.length / 2),
                    m = S.position.y + Math.cos(S.shape.rotation - S.rotation) * (S.shape.length / 2),
                    C = p - u,
                    A = m - c,
                    M = s.position.x,
                    E = s.position.y,
                    R = M - u,
                    _ = E - c,
                    L = (C * R + A * _) / (S.shape.length * S.shape.length);
                if (0 > L) {
                    var F = Math.sqrt(R * R + _ * _);
                    if (F < s.shape.radius) return !0
                } else if (L > 1) {
                    var F = this.distance(M, E, p, m);
                    if (F < s.shape.radius) return !0
                } else {
                    var F = this.distance(R, _, C * L, A * L);
                    if (F < s.shape.radius) return !0
                }
                return !1
            }
            return !1
        },
        hitResponse: function(e, t) {
            if (e.shape instanceof game.Rectangle && t.shape instanceof game.Rectangle) {
                if (e.last.y + e.shape.height / 2 <= t.last.y - t.shape.height / 2) {
                    if (e.collide(t, "DOWN")) return e.position.y = t.position.y - t.shape.height / 2 - e.shape.height / 2, !0
                } else if (e.last.y - e.shape.height / 2 >= t.last.y + t.shape.height / 2) {
                    if (e.collide(t, "UP")) return e.position.y = t.position.y + t.shape.height / 2 + e.shape.height / 2, !0
                } else if (e.last.x + e.shape.width / 2 <= t.last.x - t.shape.width / 2) {
                    if (e.collide(t, "RIGHT")) return e.position.x = t.position.x - t.shape.width / 2 - e.shape.width / 2, !0
                } else if (e.last.x - e.shape.width / 2 >= t.last.x + t.shape.width / 2 && e.collide(t, "LEFT")) return e.position.x = t.position.x + t.shape.width / 2 + e.shape.width / 2, !0
            } else if (e.shape instanceof game.Circle && t.shape instanceof game.Circle) {
                var i = t.position.angle(e.position);
                if (e.collide(t, i)) {
                    var s = e.shape.radius + t.shape.radius;
                    return e.position.x = t.position.x + Math.cos(i) * s, e.position.y = t.position.y + Math.sin(i) * s, !0
                }
            } else if (e.shape instanceof game.Rectangle && t.shape instanceof game.Circle) {
                if (e.collide(t)) return
            } else if (e.shape instanceof game.Circle && t.shape instanceof game.Rectangle) {
                if (e.collide(t)) return
            } else if (e.shape instanceof game.Line && t.shape instanceof game.Line) {
                if (e.collide(t)) return
            } else if (e.shape instanceof game.Circle && t.shape instanceof game.Line) {
                if (e.collide(t)) return
            } else if (e.shape instanceof game.Line && t.shape instanceof game.Circle && e.collide(t)) return;
            return !1
        }
    }), game.Body = game.Class.extend({
        world: null,
        shape: null,
        position: null,
        last: null,
        velocity: null,
        velocityLimit: null,
        mass: 0,
        collisionGroup: null,
        collideAgainst: [],
        rotation: 0,
        init: function(e) {
            this.position = new game.Vector, this.velocity = new game.Vector, this.velocityLimit = new game.Vector(500, 500), this.last = new game.Vector, game.merge(this, e)
        },
        addShape: function(e) {
            this.shape = e
        },
        collide: function() {
            return !0
        },
        afterCollide: function() {},
        setCollisionGroup: function(e) {
            this.world && ("number" == typeof this.collisionGroup && this.world.removeBodyCollision(this, this.collisionGroup), this.world.addBodyCollision(this, e))
        },
        update: function() {
            this.last.copy(this.position), this.mass > 0 && (this.velocity.x += this.world.gravity.x * this.mass * game.system.delta, this.velocity.y += this.world.gravity.y * this.mass * game.system.delta, this.velocity.limit(this.velocityLimit)), this.position.multiplyAdd(this.velocity, game.scale * game.system.delta)
        }
    }), game.Rectangle = game.Class.extend({
        width: 50,
        height: 50,
        init: function(e, t) {
            this.width = e || this.width * game.scale, this.height = t || this.height * game.scale
        }
    }), game.Circle = game.Class.extend({
        radius: 50,
        init: function(e) {
            this.radius = e || this.radius * game.scale
        }
    }), game.Line = game.Class.extend({
        length: 50,
        rotation: 0,
        init: function(e, t) {
            this.length = e || this.length * game.scale, this.rotation = t || this.rotation
        }
    }), game.Vector = game.Class.extend({
        x: 0,
        y: 0,
        init: function(e, t) {
            "number" == typeof e && (this.x = e), "number" == typeof t && (this.y = t)
        },
        set: function(e, t) {
            return this.x = e, this.y = t, this
        },
        clone: function() {
            return new game.Vector(this.x, this.y)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this
        },
        add: function(e, t) {
            return this.x += e instanceof game.Vector ? e.x : e, this.y += e instanceof game.Vector ? e.y : t || e, this
        },
        subtract: function(e, t) {
            return this.x -= e instanceof game.Vector ? e.x : e, this.y -= e instanceof game.Vector ? e.y : t || e, this
        },
        multiply: function(e, t) {
            return this.x *= e instanceof game.Vector ? e.x : e, this.y *= e instanceof game.Vector ? e.y : t || e, this
        },
        multiplyAdd: function(e, t) {
            return this.x += e instanceof game.Vector ? e.x * t : e * t, this.y += e instanceof game.Vector ? e.y * t : e * t, this
        },
        divide: function(e, t) {
            return this.x /= e instanceof game.Vector ? e.x : e, this.y /= e instanceof game.Vector ? e.y : t || e, this
        },
        distance: function(e) {
            var t = e.x - this.x,
                i = e.y - this.y;
            return Math.sqrt(t * t + i * i)
        },
        length: function() {
            return Math.sqrt(this.dot())
        },
        dot: function(e) {
            return e instanceof game.Vector ? this.x * e.x + this.y * e.y : this.x * this.x + this.y * this.y
        },
        dotNormalized: function(e) {
            var t = this.length(),
                i = this.x / t,
                s = this.y / t;
            if (e instanceof game.Vector) {
                var n = e.length(),
                    a = e.x / n,
                    r = e.y / n;
                return i * a + s * r
            }
            return i * i + s * s
        },
        rotate: function(e) {
            var t = Math.cos(e),
                i = Math.sin(e),
                s = this.x * t - this.y * i,
                n = this.y * t + this.x * i;
            return this.x = s, this.y = n, this
        },
        normalize: function() {
            var e = this.length();
            return this.x /= e || 1, this.y /= e || 1, this
        },
        limit: function(e) {
            return this.x = this.x.limit(-e.x, e.x), this.y = this.y.limit(-e.y, e.y), this
        },
        angle: function(e) {
            return Math.atan2(e.y - this.y, e.x - this.x)
        },
        angleFromOrigin: function(e) {
            return Math.atan2(e.y, e.x) - Math.atan2(this.y, this.x)
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }
    })
}), game.module("engine.pixi").body(function() {
    (function() {
        var e = game,
            t = t || {};
        t.WEBGL_RENDERER = 0, t.CANVAS_RENDERER = 1, t.VERSION = "v1.6.1", t.blendModes = {
            NORMAL: 0,
            ADD: 1,
            MULTIPLY: 2,
            SCREEN: 3,
            OVERLAY: 4,
            DARKEN: 5,
            LIGHTEN: 6,
            COLOR_DODGE: 7,
            COLOR_BURN: 8,
            HARD_LIGHT: 9,
            SOFT_LIGHT: 10,
            DIFFERENCE: 11,
            EXCLUSION: 12,
            HUE: 13,
            SATURATION: 14,
            COLOR: 15,
            LUMINOSITY: 16
        }, t.scaleModes = {
            DEFAULT: 0,
            LINEAR: 0,
            NEAREST: 1
        }, t._UID = 0, "undefined" != typeof Float32Array ? (t.Float32Array = Float32Array, t.Uint16Array = Uint16Array) : (t.Float32Array = Array, t.Uint16Array = Array), t.INTERACTION_FREQUENCY = 30, t.AUTO_PREVENT_DEFAULT = !0, t.RAD_TO_DEG = 180 / Math.PI, t.DEG_TO_RAD = Math.PI / 180, t.dontSayHello = !1, t.sayHello = function(e) {
            if (!t.dontSayHello) {
                if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                    var i = ["%c %c %c Pixi.js " + t.VERSION + " - " + e + "  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ ", "background: #ff66a5", "background: #ff66a5", "color: #ff66a5; background: #030307;", "background: #ff66a5", "background: #ffc3dc", "background: #ff66a5", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff"];
                    console.log.apply(console, i)
                } else window.console && console.log("Pixi.js " + t.VERSION + " - http://www.pixijs.com/");
                t.dontSayHello = !0
            }
        }, t.Point = function(e, t) {
            this.x = e || 0, this.y = t || 0
        }, t.Point.prototype.clone = function() {
            return new t.Point(this.x, this.y)
        }, t.Point.prototype.set = function(e, t) {
            this.x = e || 0, this.y = t || (0 !== t ? this.x : 0)
        }, t.Point.prototype.constructor = t.Point, t.Rectangle = function(e, t, i, s) {
            this.x = e || 0, this.y = t || 0, this.width = i || 0, this.height = s || 0
        }, t.Rectangle.prototype.clone = function() {
            return new t.Rectangle(this.x, this.y, this.width, this.height)
        }, t.Rectangle.prototype.contains = function(e, t) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var i = this.x;
            if (e >= i && e <= i + this.width) {
                var s = this.y;
                if (t >= s && t <= s + this.height) return !0
            }
            return !1
        }, t.Rectangle.prototype.constructor = t.Rectangle, t.EmptyRectangle = new t.Rectangle(0, 0, 0, 0), t.Polygon = function(e) {
            if (e instanceof Array || (e = Array.prototype.slice.call(arguments)), "number" == typeof e[0]) {
                for (var i = [], s = 0, n = e.length; n > s; s += 2) i.push(new t.Point(e[s], e[s + 1]));
                e = i
            }
            this.points = e
        }, t.Polygon.prototype.clone = function() {
            for (var e = [], i = 0; i < this.points.length; i++) e.push(this.points[i].clone());
            return new t.Polygon(e)
        }, t.Polygon.prototype.contains = function(e, t) {
            for (var i = !1, s = 0, n = this.points.length - 1; s < this.points.length; n = s++) {
                var a = this.points[s].x,
                    r = this.points[s].y,
                    o = this.points[n].x,
                    h = this.points[n].y,
                    l = r > t != h > t && (o - a) * (t - r) / (h - r) + a > e;
                l && (i = !i)
            }
            return i
        }, t.Polygon.prototype.constructor = t.Polygon, t.Circle = function(e, t, i) {
            this.x = e || 0, this.y = t || 0, this.radius = i || 0
        }, t.Circle.prototype.clone = function() {
            return new t.Circle(this.x, this.y, this.radius)
        }, t.Circle.prototype.contains = function(e, t) {
            if (this.radius <= 0) return !1;
            var i = this.x - e,
                s = this.y - t,
                n = this.radius * this.radius;
            return i *= i, s *= s, n >= i + s
        }, t.Circle.prototype.getBounds = function() {
            return new t.Rectangle(this.x - this.radius, this.y - this.radius, this.width, this.height)
        }, t.Circle.prototype.constructor = t.Circle, t.Ellipse = function(e, t, i, s) {
            this.x = e || 0, this.y = t || 0, this.width = i || 0, this.height = s || 0
        }, t.Ellipse.prototype.clone = function() {
            return new t.Ellipse(this.x, this.y, this.width, this.height)
        }, t.Ellipse.prototype.contains = function(e, t) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var i = (e - this.x) / this.width,
                s = (t - this.y) / this.height;
            return i *= i, s *= s, 1 >= i + s
        }, t.Ellipse.prototype.getBounds = function() {
            return new t.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height)
        }, t.Ellipse.prototype.constructor = t.Ellipse, t.Matrix = function() {
            this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
        }, t.Matrix.prototype.fromArray = function(e) {
            this.a = e[0], this.b = e[1], this.c = e[3], this.d = e[4], this.tx = e[2], this.ty = e[5]
        }, t.Matrix.prototype.toArray = function(e) {
            this.array || (this.array = new Float32Array(9));
            var t = this.array;
            return e ? (t[0] = this.a, t[1] = this.c, t[2] = 0, t[3] = this.b, t[4] = this.d, t[5] = 0, t[6] = this.tx, t[7] = this.ty, t[8] = 1) : (t[0] = this.a, t[1] = this.b, t[2] = this.tx, t[3] = this.c, t[4] = this.d, t[5] = this.ty, t[6] = 0, t[7] = 0, t[8] = 1), t
        }, t.identityMatrix = new t.Matrix, t.determineMatrixArrayType = function() {
            return "undefined" != typeof Float32Array ? Float32Array : Array
        }, t.Matrix2 = t.determineMatrixArrayType(), t.DisplayObject = function() {
            this.position = new t.Point, this.scale = new t.Point(1, 1), this.pivot = new t.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.hitArea = null, this.buttonMode = !1, this.renderable = !1, this.parent = null, this.stage = null, this.worldAlpha = 1, this._interactive = !1, this.defaultCursor = "pointer", this.worldTransform = new t.Matrix, this.color = [], this.dynamic = !0, this._sr = 0, this._cr = 1, this.filterArea = null, this._bounds = new t.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cacheIsDirty = !1
        }, t.DisplayObject.prototype.constructor = t.DisplayObject, t.DisplayObject.prototype.setInteractive = function(e) {
            this.interactive = e
        }, Object.defineProperty(t.DisplayObject.prototype, "interactive", {
            get: function() {
                return this._interactive
            },
            set: function(e) {
                this._interactive = e, this.stage && (this.stage.dirty = !0)
            }
        }), Object.defineProperty(t.DisplayObject.prototype, "worldVisible", {
            get: function() {
                var e = this;
                do {
                    if (!e.visible) return !1;
                    e = e.parent
                } while (e);
                return !0
            }
        }), Object.defineProperty(t.DisplayObject.prototype, "mask", {
            get: function() {
                return this._mask
            },
            set: function(e) {
                this._mask && (this._mask.isMask = !1), this._mask = e, this._mask && (this._mask.isMask = !0)
            }
        }), Object.defineProperty(t.DisplayObject.prototype, "filters", {
            get: function() {
                return this._filters
            },
            set: function(e) {
                if (e) {
                    for (var t = [], i = 0; i < e.length; i++)
                        for (var s = e[i].passes, n = 0; n < s.length; n++) t.push(s[n]);
                    this._filterBlock = {
                        target: this,
                        filterPasses: t
                    }
                }
                this._filters = e
            }
        }), Object.defineProperty(t.DisplayObject.prototype, "cacheAsBitmap", {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(e) {
                this._cacheAsBitmap !== e && (e ? this._generateCachedSprite() : this._destroyCachedSprite(), this._cacheAsBitmap = e)
            }
        }), t.DisplayObject.prototype.updateTransform = function() {
            this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation));
            var e = this.parent.worldTransform,
                t = this.worldTransform,
                i = this.pivot.x,
                s = this.pivot.y,
                n = this._cr * this.scale.x,
                a = -this._sr * this.scale.y,
                r = this._sr * this.scale.x,
                o = this._cr * this.scale.y,
                h = this.position.x - n * i - s * a,
                l = this.position.y - o * s - i * r,
                d = e.a,
                u = e.b,
                c = e.c,
                p = e.d;
            t.a = d * n + u * r, t.b = d * a + u * o, t.tx = d * h + u * l + e.tx, t.c = c * n + p * r, t.d = c * a + p * o, t.ty = c * h + p * l + e.ty, this.worldAlpha = this.alpha * this.parent.worldAlpha
        }, t.DisplayObject.prototype.getBounds = function(e) {
            return e = e, t.EmptyRectangle
        }, t.DisplayObject.prototype.getLocalBounds = function() {
            return this.getBounds(t.identityMatrix)
        }, t.DisplayObject.prototype.setStageReference = function(e) {
            this.stage = e, this._interactive && (this.stage.dirty = !0)
        }, t.DisplayObject.prototype.generateTexture = function(e) {
            var i = this.getLocalBounds(),
                s = new t.RenderTexture(0 | i.width, 0 | i.height, e);
            return s.render(this, new t.Point(-i.x, -i.y)), s
        }, t.DisplayObject.prototype.updateCache = function() {
            this._generateCachedSprite()
        }, t.DisplayObject.prototype._renderCachedSprite = function(e) {
            this._cachedSprite.worldAlpha = this.worldAlpha, e.gl ? t.Sprite.prototype._renderWebGL.call(this._cachedSprite, e) : t.Sprite.prototype._renderCanvas.call(this._cachedSprite, e)
        }, t.DisplayObject.prototype._generateCachedSprite = function() {
            this._cacheAsBitmap = !1;
            var e = this.getLocalBounds();
            if (this._cachedSprite) this._cachedSprite.texture.resize(0 | e.width, 0 | e.height);
            else {
                var i = new t.RenderTexture(0 | e.width, 0 | e.height);
                this._cachedSprite = new t.Sprite(i), this._cachedSprite.worldTransform = this.worldTransform
            }
            var s = this._filters;
            this._filters = null, this._cachedSprite.filters = s, this._cachedSprite.texture.render(this, new t.Point(-e.x, -e.y)), this._cachedSprite.anchor.x = -(e.x / e.width), this._cachedSprite.anchor.y = -(e.y / e.height), this._filters = s, this._cacheAsBitmap = !0
        }, t.DisplayObject.prototype._destroyCachedSprite = function() {
            this._cachedSprite && (this._cachedSprite.texture.destroy(!0), this._cachedSprite = null)
        }, t.DisplayObject.prototype._renderWebGL = function(e) {
            e = e
        }, t.DisplayObject.prototype._renderCanvas = function(e) {
            e = e
        }, Object.defineProperty(t.DisplayObject.prototype, "x", {
            get: function() {
                return this.position.x
            },
            set: function(e) {
                this.position.x = e
            }
        }), Object.defineProperty(t.DisplayObject.prototype, "y", {
            get: function() {
                return this.position.y
            },
            set: function(e) {
                this.position.y = e
            }
        }), t.DisplayObjectContainer = function() {
            t.DisplayObject.call(this), this.children = []
        }, t.DisplayObjectContainer.prototype = Object.create(t.DisplayObject.prototype), t.DisplayObjectContainer.prototype.constructor = t.DisplayObjectContainer, Object.defineProperty(t.DisplayObjectContainer.prototype, "width", {
            get: function() {
                return this.scale.x * this.getLocalBounds().width
            },
            set: function(e) {
                var t = this.getLocalBounds().width;
                this.scale.x = 0 !== t ? e / (t / this.scale.x) : 1, this._width = e
            }
        }), Object.defineProperty(t.DisplayObjectContainer.prototype, "height", {
            get: function() {
                return this.scale.y * this.getLocalBounds().height
            },
            set: function(e) {
                var t = this.getLocalBounds().height;
                this.scale.y = 0 !== t ? e / (t / this.scale.y) : 1, this._height = e
            }
        }), t.DisplayObjectContainer.prototype.addChild = function(e) {
            return this.addChildAt(e, this.children.length)
        }, t.DisplayObjectContainer.prototype.addChildAt = function(e, t) {
            if (t >= 0 && t <= this.children.length) return e.parent && e.parent.removeChild(e), e.parent = this, this.children.splice(t, 0, e), this.stage && e.setStageReference(this.stage), e;
            throw new Error(e + " The index " + t + " supplied is out of bounds " + this.children.length)
        }, t.DisplayObjectContainer.prototype.swapChildren = function(e, t) {
            if (e !== t) {
                var i = this.children.indexOf(e),
                    s = this.children.indexOf(t);
                if (0 > i || 0 > s) throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
                this.children[i] = t, this.children[s] = e
            }
        }, t.DisplayObjectContainer.prototype.getChildAt = function(e) {
            if (e >= 0 && e < this.children.length) return this.children[e];
            throw new Error("Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller")
        }, t.DisplayObjectContainer.prototype.removeChild = function(e) {
            return this.removeChildAt(this.children.indexOf(e))
        }, t.DisplayObjectContainer.prototype.removeChildAt = function(e) {
            var t = this.getChildAt(e);
            return this.stage && t.removeStageReference(), t.parent = void 0, this.children.splice(e, 1), t
        }, t.DisplayObjectContainer.prototype.removeChildren = function(e, t) {
            var i = e || 0,
                s = "number" == typeof t ? t : this.children.length,
                n = s - i;
            if (n > 0 && s >= n) {
                for (var a = this.children.splice(i, n), r = 0; r < a.length; r++) {
                    var o = a[r];
                    this.stage && o.removeStageReference(), o.parent = void 0
                }
                return a
            }
            throw new Error("Range Error, numeric values are outside the acceptable range")
        }, t.DisplayObjectContainer.prototype.updateTransform = function() {
            if (this.visible && (t.DisplayObject.prototype.updateTransform.call(this), !this._cacheAsBitmap))
                for (var e = 0, i = this.children.length; i > e; e++) this.children[e].updateTransform()
        }, t.DisplayObjectContainer.prototype.getBounds = function(e) {
            if (0 === this.children.length) return t.EmptyRectangle;
            if (e) {
                var i = this.worldTransform;
                this.worldTransform = e, this.updateTransform(), this.worldTransform = i
            }
            for (var s, n, a, r = 1 / 0, o = 1 / 0, h = -1 / 0, l = -1 / 0, d = !1, u = 0, c = this.children.length; c > u; u++) {
                var p = this.children[u];
                p.visible && (d = !0, s = this.children[u].getBounds(e), r = r < s.x ? r : s.x, o = o < s.y ? o : s.y, n = s.width + s.x, a = s.height + s.y, h = h > n ? h : n, l = l > a ? l : a)
            }
            if (!d) return t.EmptyRectangle;
            var m = this._bounds;
            return m.x = r, m.y = o, m.width = h - r, m.height = l - o, m
        }, t.DisplayObjectContainer.prototype.getLocalBounds = function() {
            var e = this.worldTransform;
            this.worldTransform = t.identityMatrix;
            for (var i = 0, s = this.children.length; s > i; i++) this.children[i].updateTransform();
            var n = this.getBounds();
            return this.worldTransform = e, n
        }, t.DisplayObjectContainer.prototype.setStageReference = function(e) {
            this.stage = e, this._interactive && (this.stage.dirty = !0);
            for (var t = 0, i = this.children.length; i > t; t++) {
                var s = this.children[t];
                s.setStageReference(e)
            }
        }, t.DisplayObjectContainer.prototype.removeStageReference = function() {
            for (var e = 0, t = this.children.length; t > e; e++) {
                var i = this.children[e];
                i.removeStageReference()
            }
            this._interactive && (this.stage.dirty = !0), this.stage = null
        }, t.DisplayObjectContainer.prototype._renderWebGL = function(e) {
            if (this.visible && !(this.alpha <= 0)) {
                if (this._cacheAsBitmap) return void this._renderCachedSprite(e);
                var t, i;
                if (this._mask || this._filters) {
                    for (this._filters && (e.spriteBatch.flush(), e.filterManager.pushFilter(this._filterBlock)), this._mask && (e.spriteBatch.stop(), e.maskManager.pushMask(this.mask, e), e.spriteBatch.start()), t = 0, i = this.children.length; i > t; t++) this.children[t]._renderWebGL(e);
                    e.spriteBatch.stop(), this._mask && e.maskManager.popMask(this._mask, e), this._filters && e.filterManager.popFilter(), e.spriteBatch.start()
                } else
                    for (t = 0, i = this.children.length; i > t; t++) this.children[t]._renderWebGL(e)
            }
        }, t.DisplayObjectContainer.prototype._renderCanvas = function(e) {
            if (this.visible !== !1 && 0 !== this.alpha) {
                if (this._cacheAsBitmap) return void this._renderCachedSprite(e);
                this._mask && e.maskManager.pushMask(this._mask, e.context);
                for (var t = 0, i = this.children.length; i > t; t++) {
                    var s = this.children[t];
                    s._renderCanvas(e)
                }
                this._mask && e.maskManager.popMask(e.context)
            }
        }, t.Sprite = function(e) {
            t.DisplayObjectContainer.call(this), this.anchor = new t.Point, this.texture = e, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = t.blendModes.NORMAL, e.baseTexture.hasLoaded ? this.onTextureUpdate() : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
        }, t.Sprite.prototype = Object.create(t.DisplayObjectContainer.prototype), t.Sprite.prototype.constructor = t.Sprite, Object.defineProperty(t.Sprite.prototype, "width", {
            get: function() {
                return this.scale.x * this.texture.frame.width
            },
            set: function(e) {
                this.scale.x = e / this.texture.frame.width, this._width = e
            }
        }), Object.defineProperty(t.Sprite.prototype, "height", {
            get: function() {
                return this.scale.y * this.texture.frame.height
            },
            set: function(e) {
                this.scale.y = e / this.texture.frame.height, this._height = e
            }
        }), t.Sprite.prototype.setTexture = function(e) {
            this.texture = e, this.cachedTint = 16777215
        }, t.Sprite.prototype.onTextureUpdate = function() {
            this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height)
        }, t.Sprite.prototype.getBounds = function(e) {
            var t = this.texture.frame.width,
                i = this.texture.frame.height,
                s = t * (1 - this.anchor.x),
                n = t * -this.anchor.x,
                a = i * (1 - this.anchor.y),
                r = i * -this.anchor.y,
                o = e || this.worldTransform,
                h = o.a,
                l = o.c,
                d = o.b,
                u = o.d,
                c = o.tx,
                p = o.ty,
                m = h * n + d * r + c,
                g = u * r + l * n + p,
                f = h * s + d * r + c,
                y = u * r + l * s + p,
                v = h * s + d * a + c,
                b = u * a + l * s + p,
                x = h * n + d * a + c,
                w = u * a + l * n + p,
                T = -1 / 0,
                S = -1 / 0,
                C = 1 / 0,
                A = 1 / 0;
            C = C > m ? m : C, C = C > f ? f : C, C = C > v ? v : C, C = C > x ? x : C, A = A > g ? g : A, A = A > y ? y : A, A = A > b ? b : A, A = A > w ? w : A, T = m > T ? m : T, T = f > T ? f : T, T = v > T ? v : T, T = x > T ? x : T, S = g > S ? g : S, S = y > S ? y : S, S = b > S ? b : S, S = w > S ? w : S;
            var M = this._bounds;
            return M.x = C, M.width = T - C, M.y = A, M.height = S - A, this._currentBounds = M, M
        }, t.Sprite.prototype._renderWebGL = function(e) {
            if (this.visible && !(this.alpha <= 0)) {
                var t, i;
                if (this._mask || this._filters) {
                    var s = e.spriteBatch;
                    for (this._filters && (s.flush(), e.filterManager.pushFilter(this._filterBlock)), this._mask && (s.stop(), e.maskManager.pushMask(this.mask, e), s.start()), s.render(this), t = 0, i = this.children.length; i > t; t++) this.children[t]._renderWebGL(e);
                    s.stop(), this._mask && e.maskManager.popMask(this._mask, e), this._filters && e.filterManager.popFilter(), s.start()
                } else
                    for (e.spriteBatch.render(this), t = 0, i = this.children.length; i > t; t++) this.children[t]._renderWebGL(e)
            }
        }, t.Sprite.prototype._renderCanvas = function(e) {
            if (this.visible !== !1 && 0 !== this.alpha) {
                if (this.blendMode !== e.currentBlendMode && (e.currentBlendMode = this.blendMode, e.context.globalCompositeOperation = t.blendModesCanvas[e.currentBlendMode]), this._mask && e.maskManager.pushMask(this._mask, e.context), this.texture.valid) {
                    e.context.globalAlpha = this.worldAlpha, e.roundPixels ? e.context.setTransform(this.worldTransform.a, this.worldTransform.c, this.worldTransform.b, this.worldTransform.d, 0 | this.worldTransform.tx, 0 | this.worldTransform.ty) : e.context.setTransform(this.worldTransform.a, this.worldTransform.c, this.worldTransform.b, this.worldTransform.d, this.worldTransform.tx, this.worldTransform.ty), e.smoothProperty && e.scaleMode !== this.texture.baseTexture.scaleMode && (e.scaleMode = this.texture.baseTexture.scaleMode, e.context[e.smoothProperty] = e.scaleMode === t.scaleModes.LINEAR);
                    var i = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width,
                        s = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height;
                    16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = t.CanvasTinter.getTintedTexture(this, this.tint)), e.context.drawImage(this.tintedTexture, 0, 0, this.texture.crop.width, this.texture.crop.height, i, s, this.texture.crop.width, this.texture.crop.height)) : e.context.drawImage(this.texture.baseTexture.source, this.texture.crop.x, this.texture.crop.y, this.texture.crop.width, this.texture.crop.height, i, s, this.texture.crop.width, this.texture.crop.height)
                }
                for (var n = 0, a = this.children.length; a > n; n++) this.children[n]._renderCanvas(e);
                this._mask && e.maskManager.popMask(e.context)
            }
        }, t.Sprite.fromFrame = function(e) {
            var i = t.TextureCache[e];
            if (!i) throw new Error('The frameId "' + e + '" does not exist in the texture cache' + this);
            return new t.Sprite(i)
        }, t.Sprite.fromImage = function(e, i, s) {
            var n = t.Texture.fromImage(e, i, s);
            return new t.Sprite(n)
        }, t.SpriteBatch = function(e) {
            t.DisplayObjectContainer.call(this), this.textureThing = e, this.ready = !1
        }, t.SpriteBatch.prototype = Object.create(t.DisplayObjectContainer.prototype), t.SpriteBatch.constructor = t.SpriteBatch, t.SpriteBatch.prototype.initWebGL = function(e) {
            this.fastSpriteBatch = new t.WebGLFastSpriteBatch(e), this.ready = !0
        }, t.SpriteBatch.prototype.updateTransform = function() {
            t.DisplayObject.prototype.updateTransform.call(this)
        }, t.SpriteBatch.prototype._renderWebGL = function(e) {
            !this.visible || this.alpha <= 0 || !this.children.length || (this.ready || this.initWebGL(e.gl), e.spriteBatch.stop(), e.shaderManager.setShader(e.shaderManager.fastShader), this.fastSpriteBatch.begin(this, e), this.fastSpriteBatch.render(this), e.spriteBatch.start())
        }, t.SpriteBatch.prototype._renderCanvas = function(e) {
            var i = e.context;
            i.globalAlpha = this.worldAlpha, t.DisplayObject.prototype.updateTransform.call(this);
            for (var s = this.worldTransform, n = !0, a = 0; a < this.children.length; a++) {
                var r = this.children[a];
                if (r.visible) {
                    var o = r.texture,
                        h = o.frame;
                    if (i.globalAlpha = this.worldAlpha * r.alpha, r.rotation % (2 * Math.PI) === 0) n && (i.setTransform(s.a, s.c, s.b, s.d, s.tx, s.ty), n = !1), i.drawImage(o.baseTexture.source, h.x, h.y, h.width, h.height, r.anchor.x * -h.width * r.scale.x + r.position.x + .5 | 0, r.anchor.y * -h.height * r.scale.y + r.position.y + .5 | 0, h.width * r.scale.x, h.height * r.scale.y);
                    else {
                        n || (n = !0), t.DisplayObject.prototype.updateTransform.call(r);
                        var l = r.worldTransform;
                        e.roundPixels ? i.setTransform(l.a, l.c, l.b, l.d, 0 | l.tx, 0 | l.ty) : i.setTransform(l.a, l.c, l.b, l.d, l.tx, l.ty), i.drawImage(o.baseTexture.source, h.x, h.y, h.width, h.height, r.anchor.x * -h.width + .5 | 0, r.anchor.y * -h.height + .5 | 0, h.width, h.height)
                    }
                }
            }
        }, t.MovieClip = function(e) {
            t.Sprite.call(this, e[0]), this.textures = e, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this.currentFrame = 0, this.playing = !1
        }, t.MovieClip.prototype = Object.create(t.Sprite.prototype), t.MovieClip.prototype.constructor = t.MovieClip, Object.defineProperty(t.MovieClip.prototype, "totalFrames", {
            get: function() {
                return this.textures.length
            }
        }), t.MovieClip.prototype.stop = function() {
            this.playing = !1
        }, t.MovieClip.prototype.play = function() {
            this.playing = !0
        }, t.MovieClip.prototype.gotoAndStop = function(e) {
            this.playing = !1, this.currentFrame = e;
            var t = this.currentFrame + .5 | 0;
            this.setTexture(this.textures[t % this.textures.length])
        }, t.MovieClip.prototype.gotoAndPlay = function(e) {
            this.currentFrame = e, this.playing = !0
        }, t.MovieClip.prototype.updateTransform = function() {
            if (t.Sprite.prototype.updateTransform.call(this), this.playing) {
                this.currentFrame += this.animationSpeed;
                var e = this.currentFrame + .5 | 0;
                this.currentFrame = this.currentFrame % this.textures.length, this.loop || e < this.textures.length ? this.setTexture(this.textures[e % this.textures.length]) : e >= this.textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
            }
        }, t.MovieClip.fromFrames = function(e) {
            for (var i = [], s = 0; s < e.length; s++) i.push(new t.Texture.fromFrame(e[s]));
            return new t.MovieClip(i)
        }, t.MovieClip.fromImages = function(e) {
            for (var i = [], s = 0; s < e.length; s++) i.push(new t.Texture.fromImage(e[s]));
            return new t.MovieClip(i)
        }, t.FilterBlock = function() {
            this.visible = !0, this.renderable = !0
        }, t.Text = function(e, i) {
            this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), t.Sprite.call(this, t.Texture.fromCanvas(this.canvas)), this.setText(e), this.setStyle(i)
        }, t.Text.prototype = Object.create(t.Sprite.prototype), t.Text.prototype.constructor = t.Text, Object.defineProperty(t.Text.prototype, "width", {
            get: function() {
                return this.dirty && (this.updateText(), this.dirty = !1), this.scale.x * this.texture.frame.width
            },
            set: function(e) {
                this.scale.x = e / this.texture.frame.width, this._width = e
            }
        }), Object.defineProperty(t.Text.prototype, "height", {
            get: function() {
                return this.dirty && (this.updateText(), this.dirty = !1), this.scale.y * this.texture.frame.height
            },
            set: function(e) {
                this.scale.y = e / this.texture.frame.height, this._height = e
            }
        }), t.Text.prototype.setStyle = function(e) {
            e = e || {}, e.font = e.font || "bold 20pt Arial", e.fill = e.fill || "black", e.align = e.align || "left", e.stroke = e.stroke || "black", e.strokeThickness = e.strokeThickness || 0, e.wordWrap = e.wordWrap || !1, e.wordWrapWidth = e.wordWrapWidth || 100, e.wordWrapWidth = e.wordWrapWidth || 100, e.dropShadow = e.dropShadow || !1, e.dropShadowAngle = e.dropShadowAngle || Math.PI / 6, e.dropShadowDistance = e.dropShadowDistance || 4, e.dropShadowColor = e.dropShadowColor || "black", this.style = e, this.dirty = !0
        }, t.Text.prototype.setText = function(e) {
            this.text = e.toString() || " ", this.dirty = !0
        }, t.Text.prototype.updateText = function() {
            this.context.font = this.style.font;
            var e = this.text;
            this.style.wordWrap && (e = this.wordWrap(this.text));
            for (var t = e.split(/(?:\r\n|\r|\n)/), i = [], s = 0, n = 0; n < t.length; n++) {
                var a = this.context.measureText(t[n]).width;
                i[n] = a, s = Math.max(s, a)
            }
            var r = s + this.style.strokeThickness;
            this.style.dropShadow && (r += this.style.dropShadowDistance), this.canvas.width = r + this.context.lineWidth;
            var o = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness,
                h = o * t.length;
            this.style.dropShadow && (h += this.style.dropShadowDistance), this.canvas.height = h, navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "top";
            var l, d;
            if (this.style.dropShadow) {
                this.context.fillStyle = this.style.dropShadowColor;
                var u = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance,
                    c = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance;
                for (n = 0; n < t.length; n++) l = this.style.strokeThickness / 2, d = this.style.strokeThickness / 2 + n * o, "right" === this.style.align ? l += s - i[n] : "center" === this.style.align && (l += (s - i[n]) / 2), this.style.fill && this.context.fillText(t[n], l + u, d + c)
            }
            for (this.context.fillStyle = this.style.fill, n = 0; n < t.length; n++) l = this.style.strokeThickness / 2, d = this.style.strokeThickness / 2 + n * o, "right" === this.style.align ? l += s - i[n] : "center" === this.style.align && (l += (s - i[n]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(t[n], l, d), this.style.fill && this.context.fillText(t[n], l, d);
            this.updateTexture()
        }, t.Text.prototype.updateTexture = function() {
            this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.crop.width = this.texture.frame.width = this.canvas.width, this.texture.crop.height = this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, this.requiresUpdate = !0
        }, t.Text.prototype._renderWebGL = function(e) {
            this.requiresUpdate && (this.requiresUpdate = !1, t.updateWebGLTexture(this.texture.baseTexture, e.gl)), t.Sprite.prototype._renderWebGL.call(this, e)
        }, t.Text.prototype.updateTransform = function() {
            this.dirty && (this.updateText(), this.dirty = !1), t.Sprite.prototype.updateTransform.call(this)
        }, t.Text.prototype.determineFontHeight = function(e) {
            var i = t.Text.heightCache[e];
            if (!i) {
                var s = document.getElementsByTagName("body")[0],
                    n = document.createElement("div"),
                    a = document.createTextNode("M");
                n.appendChild(a), n.setAttribute("style", e + ";position:absolute;top:0;left:0"), s.appendChild(n), i = n.offsetHeight, t.Text.heightCache[e] = i, s.removeChild(n)
            }
            return i
        }, t.Text.prototype.wordWrap = function(e) {
            for (var t = "", i = e.split("\n"), s = 0; s < i.length; s++) {
                for (var n = this.style.wordWrapWidth, a = i[s].split(" "), r = 0; r < a.length; r++) {
                    var o = this.context.measureText(a[r]).width,
                        h = o + this.context.measureText(" ").width;
                    0 === r || h > n ? (r > 0 && (t += "\n"), t += a[r], n = this.style.wordWrapWidth - o) : (n -= h, t += " " + a[r])
                }
                s < i.length - 1 && (t += "\n")
            }
            return t
        }, t.Text.prototype.destroy = function(e) {
            this.context = null, this.canvas = null, this.texture.destroy(void 0 === e ? !0 : e)
        }, t.Text.heightCache = {}, t.BitmapText = function(e, i) {
            t.DisplayObjectContainer.call(this), this._pool = [], this.setText(e), this.setStyle(i), this.updateText(), this.dirty = !1
        }, t.BitmapText.prototype = Object.create(t.DisplayObjectContainer.prototype), t.BitmapText.prototype.constructor = t.BitmapText, t.BitmapText.prototype.setText = function(e) {
            this.text = e || " ", this.dirty = !0
        }, t.BitmapText.prototype.setStyle = function(e) {
            e = e || {}, e.align = e.align || "left", this.style = e;
            var i = e.font.split(" ");
            this.fontName = i[i.length - 1], this.fontSize = i.length >= 2 ? parseInt(i[i.length - 2], 10) : t.BitmapText.fonts[this.fontName].size, this.dirty = !0, this.tint = e.tint
        }, t.BitmapText.prototype.updateText = function() {
            for (var e = t.BitmapText.fonts[this.fontName], i = new t.Point, s = null, n = [], a = 0, r = [], o = 0, h = this.fontSize / e.size, l = 0; l < this.text.length; l++) {
                var d = this.text.charCodeAt(l);
                if (/(?:\r\n|\r|\n)/.test(this.text.charAt(l))) r.push(i.x), a = Math.max(a, i.x), o++, i.x = 0, i.y += e.lineHeight, s = null;
                else {
                    var u = e.chars[d];
                    u && (s && u[s] && (i.x += u.kerning[s]), n.push({
                        texture: u.texture,
                        line: o,
                        charCode: d,
                        position: new t.Point(i.x + u.xOffset, i.y + u.yOffset)
                    }), i.x += u.xAdvance, s = d)
                }
            }
            r.push(i.x), a = Math.max(a, i.x);
            var c = [];
            for (l = 0; o >= l; l++) {
                var p = 0;
                "right" === this.style.align ? p = a - r[l] : "center" === this.style.align && (p = (a - r[l]) / 2), c.push(p)
            }
            var m = this.children.length,
                g = n.length,
                f = this.tint || 16777215;
            for (l = 0; g > l; l++) {
                var y = m > l ? this.children[l] : this._pool.pop();
                y ? y.setTexture(n[l].texture) : y = new t.Sprite(n[l].texture), y.position.x = (n[l].position.x + c[n[l].line]) * h, y.position.y = n[l].position.y * h, y.scale.x = y.scale.y = h, y.tint = f, y.parent || this.addChild(y)
            }
            for (; this.children.length > g;) {
                var v = this.getChildAt(this.children.length - 1);
                this._pool.push(v), this.removeChild(v)
            }
            this.textWidth = a * h, this.textHeight = (i.y + e.lineHeight) * h
        }, t.BitmapText.prototype.updateTransform = function() {
            this.dirty && (this.updateText(), this.dirty = !1), t.DisplayObjectContainer.prototype.updateTransform.call(this)
        }, t.BitmapText.fonts = {}, t.InteractionData = function() {
            this.global = new t.Point, this.target = null, this.originalEvent = null
        }, t.InteractionData.prototype.getLocalPosition = function(e) {
            var i = e.worldTransform,
                s = this.global,
                n = i.a,
                a = i.b,
                r = i.tx,
                o = i.c,
                h = i.d,
                l = i.ty,
                d = 1 / (n * h + a * -o);
            return new t.Point(h * d * s.x + -a * d * s.y + (l * a - r * h) * d, n * d * s.y + -o * d * s.x + (-l * n + r * o) * d)
        }, t.InteractionData.prototype.constructor = t.InteractionData, t.InteractionManager = function(e) {
            this.stage = e, this.mouse = new t.InteractionData, this.touchs = {}, this.tempPoint = new t.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.interactionDOMElement = null, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this.mouseOut = !1
        }, t.InteractionManager.prototype.constructor = t.InteractionManager, t.InteractionManager.prototype.collectInteractiveSprite = function(e, t) {
            for (var i = e.children, s = i.length, n = s - 1; n >= 0; n--) {
                var a = i[n];
                a._interactive ? (t.interactiveChildren = !0, this.interactiveItems.push(a), a.children.length > 0 && this.collectInteractiveSprite(a, a)) : (a.__iParent = null, a.children.length > 0 && this.collectInteractiveSprite(a, t))
            }
        }, t.InteractionManager.prototype.setTarget = function(e) {
            this.target = e, null === this.interactionDOMElement && this.setTargetDomElement(e.view)
        }, t.InteractionManager.prototype.setTargetDomElement = function(e) {
            this.removeEvents(), window.navigator.msPointerEnabled && (e.style["-ms-content-zooming"] = "none", e.style["-ms-touch-action"] = "none"), this.interactionDOMElement = e, e.addEventListener("mousemove", this.onMouseMove, !0), e.addEventListener("mousedown", this.onMouseDown, !0), e.addEventListener("mouseout", this.onMouseOut, !0), e.addEventListener("touchstart", this.onTouchStart, !0), e.addEventListener("touchend", this.onTouchEnd, !0), e.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0)
        }, t.InteractionManager.prototype.removeEvents = function() {
            this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0))
        }, t.InteractionManager.prototype.update = function() {
            if (this.target) {
                var e = Date.now(),
                    i = e - this.last;
                if (i = i * t.INTERACTION_FREQUENCY / 1e3, !(1 > i)) {
                    this.last = e;
                    var s = 0;
                    this.dirty && this.rebuildInteractiveGraph();
                    var n = this.interactiveItems.length,
                        a = "inherit",
                        r = !1;
                    for (s = 0; n > s; s++) {
                        var o = this.interactiveItems[s];
                        o.__hit = this.hitTest(o, this.mouse), this.mouse.target = o, o.__hit && !r ? (o.buttonMode && (a = o.defaultCursor), o.interactiveChildren || (r = !0), o.__isOver || (o.mouseover && o.mouseover(this.mouse), o.__isOver = !0)) : o.__isOver && (o.mouseout && o.mouseout(this.mouse), o.__isOver = !1)
                    }
                    this.currentCursorStyle !== a && (this.currentCursorStyle = a, this.interactionDOMElement.style.cursor = a)
                }
            }
        }, t.InteractionManager.prototype.rebuildInteractiveGraph = function() {
            this.dirty = !1;
            for (var e = this.interactiveItems.length, t = 0; e > t; t++) this.interactiveItems[t].interactiveChildren = !1;
            this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage)
        }, t.InteractionManager.prototype.onMouseMove = function(e) {
            this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = e || window.event;
            var t = this.interactionDOMElement.getBoundingClientRect();
            this.mouse.global.x = (e.clientX - t.left) * (this.target.width / t.width), this.mouse.global.y = (e.clientY - t.top) * (this.target.height / t.height);
            for (var i = this.interactiveItems.length, s = 0; i > s; s++) {
                var n = this.interactiveItems[s];
                n.mousemove && n.mousemove(this.mouse)
            }
        }, t.InteractionManager.prototype.onMouseDown = function(e) {
            this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = e || window.event, t.AUTO_PREVENT_DEFAULT && this.mouse.originalEvent.preventDefault();
            for (var i = this.interactiveItems.length, s = 0; i > s; s++) {
                var n = this.interactiveItems[s];
                if ((n.mousedown || n.click) && (n.__mouseIsDown = !0, n.__hit = this.hitTest(n, this.mouse), n.__hit && (n.mousedown && n.mousedown(this.mouse), n.__isDown = !0, !n.interactiveChildren))) break
            }
        }, t.InteractionManager.prototype.onMouseOut = function() {
            this.dirty && this.rebuildInteractiveGraph();
            var e = this.interactiveItems.length;
            this.interactionDOMElement.style.cursor = "inherit";
            for (var t = 0; e > t; t++) {
                var i = this.interactiveItems[t];
                i.__isOver && (this.mouse.target = i, i.mouseout && i.mouseout(this.mouse), i.__isOver = !1)
            }
            this.mouseOut = !0, this.mouse.global.x = -1e4, this.mouse.global.y = -1e4
        }, t.InteractionManager.prototype.onMouseUp = function(e) {
            this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = e || window.event;
            for (var t = this.interactiveItems.length, i = !1, s = 0; t > s; s++) {
                var n = this.interactiveItems[s];
                n.__hit = this.hitTest(n, this.mouse), n.__hit && !i ? (n.mouseup && n.mouseup(this.mouse), n.__isDown && n.click && n.click(this.mouse), n.interactiveChildren || (i = !0)) : n.__isDown && n.mouseupoutside && n.mouseupoutside(this.mouse), n.__isDown = !1
            }
        }, t.InteractionManager.prototype.hitTest = function(e, i) {
            var s = i.global;
            if (!e.worldVisible) return !1;
            var n = e instanceof t.Sprite,
                a = e.worldTransform,
                r = a.a,
                o = a.b,
                h = a.tx,
                l = a.c,
                d = a.d,
                u = a.ty,
                c = 1 / (r * d + o * -l),
                p = d * c * s.x + -o * c * s.y + (u * o - h * d) * c,
                m = r * c * s.y + -l * c * s.x + (-u * r + h * l) * c;
            if (i.target = e, e.hitArea && e.hitArea.contains) return e.hitArea.contains(p, m) ? (i.target = e, !0) : !1;
            if (n) {
                var g, f = e.texture.frame.width,
                    y = e.texture.frame.height,
                    v = -f * e.anchor.x;
                if (p > v && v + f > p && (g = -y * e.anchor.y, m > g && g + y > m)) return i.target = e, !0
            }
            for (var b = e.children.length, x = 0; b > x; x++) {
                var w = e.children[x],
                    T = this.hitTest(w, i);
                if (T) return i.target = e, !0
            }
            return !1
        }, t.InteractionManager.prototype.onTouchMove = function(e) {
            this.dirty && this.rebuildInteractiveGraph();
            var t, i = this.interactionDOMElement.getBoundingClientRect(),
                s = e.changedTouches,
                n = 0;
            for (n = 0; n < s.length; n++) {
                var a = s[n];
                t = this.touchs[a.identifier], t.originalEvent = e || window.event, t.global.x = (a.clientX - i.left) * (this.target.width / i.width), t.global.y = (a.clientY - i.top) * (this.target.height / i.height), navigator.isCocoonJS && (t.global.x = a.clientX, t.global.y = a.clientY);
                for (var r = 0; r < this.interactiveItems.length; r++) {
                    var o = this.interactiveItems[r];
                    o.touchmove && o.__touchData && o.__touchData[a.identifier] && o.touchmove(t)
                }
            }
        }, t.InteractionManager.prototype.onTouchStart = function(e) {
            this.dirty && this.rebuildInteractiveGraph();
            var i = this.interactionDOMElement.getBoundingClientRect();
            t.AUTO_PREVENT_DEFAULT && e.preventDefault();
            for (var s = e.changedTouches, n = 0; n < s.length; n++) {
                var a = s[n],
                    r = this.pool.pop();
                r || (r = new t.InteractionData), r.originalEvent = e || window.event, this.touchs[a.identifier] = r, r.global.x = (a.clientX - i.left) * (this.target.width / i.width), r.global.y = (a.clientY - i.top) * (this.target.height / i.height), navigator.isCocoonJS && (r.global.x = a.clientX, r.global.y = a.clientY);
                for (var o = this.interactiveItems.length, h = 0; o > h; h++) {
                    var l = this.interactiveItems[h];
                    if ((l.touchstart || l.tap) && (l.__hit = this.hitTest(l, r), l.__hit && (l.touchstart && l.touchstart(r), l.__isDown = !0, l.__touchData = l.__touchData || {}, l.__touchData[a.identifier] = r, !l.interactiveChildren))) break
                }
            }
        }, t.InteractionManager.prototype.onTouchEnd = function(e) {
            this.dirty && this.rebuildInteractiveGraph();
            for (var t = this.interactionDOMElement.getBoundingClientRect(), i = e.changedTouches, s = 0; s < i.length; s++) {
                var n = i[s],
                    a = this.touchs[n.identifier],
                    r = !1;
                a.global.x = (n.clientX - t.left) * (this.target.width / t.width), a.global.y = (n.clientY - t.top) * (this.target.height / t.height), navigator.isCocoonJS && (a.global.x = n.clientX, a.global.y = n.clientY);
                for (var o = this.interactiveItems.length, h = 0; o > h; h++) {
                    var l = this.interactiveItems[h];
                    l.__touchData && l.__touchData[n.identifier] && (l.__hit = this.hitTest(l, l.__touchData[n.identifier]), a.originalEvent = e || window.event, (l.touchend || l.tap) && (l.__hit && !r ? (l.touchend && l.touchend(a), l.__isDown && l.tap && l.tap(a), l.interactiveChildren || (r = !0)) : l.__isDown && l.touchendoutside && l.touchendoutside(a), l.__isDown = !1), l.__touchData[n.identifier] = null)
                }
                this.pool.push(a), this.touchs[n.identifier] = null
            }
        }, t.Stage = function(e) {
            t.DisplayObjectContainer.call(this), this.worldTransform = new t.Matrix, this.interactive = !0, this.interactionManager = new t.InteractionManager(this), this.dirty = !0, this.stage = this, this.stage.hitArea = new t.Rectangle(0, 0, 1e5, 1e5), this.setBackgroundColor(e)
        }, t.Stage.prototype = Object.create(t.DisplayObjectContainer.prototype), t.Stage.prototype.constructor = t.Stage, t.Stage.prototype.setInteractionDelegate = function(e) {
            this.interactionManager.setTargetDomElement(e)
        }, t.Stage.prototype.updateTransform = function() {
            this.worldAlpha = 1;
            for (var e = 0, t = this.children.length; t > e; e++) this.children[e].updateTransform();
            this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
        }, t.Stage.prototype.setBackgroundColor = function(e) {
            this.backgroundColor = e || 0, this.backgroundColorSplit = t.hex2rgb(this.backgroundColor);
            var i = this.backgroundColor.toString(16);
            i = "000000".substr(0, 6 - i.length) + i, this.backgroundColorString = "#" + i
        }, t.Stage.prototype.getMousePosition = function() {
            return this.interactionManager.mouse.global
        };
        for (var i = 0, s = ["ms", "moz", "webkit", "o"], n = 0; n < s.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[s[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s[n] + "CancelAnimationFrame"] || window[s[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var t = (new Date).getTime(),
                s = Math.max(0, 16 - (t - i)),
                n = window.setTimeout(function() {
                    e(t + s)
                }, s);
            return i = t + s, n
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }), window.requestAnimFrame = window.requestAnimationFrame, t.hex2rgb = function(e) {
            return [(e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (255 & e) / 255]
        }, t.rgb2hex = function(e) {
            return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
        }, "function" != typeof Function.prototype.bind && (Function.prototype.bind = function() {
            var e = Array.prototype.slice;
            return function(t) {
                function i() {
                    var a = n.concat(e.call(arguments));
                    s.apply(this instanceof i ? this : t, a)
                }
                var s = this,
                    n = e.call(arguments, 1);
                if ("function" != typeof s) throw new TypeError;
                return i.prototype = function a(e) {
                    return e && (a.prototype = e), this instanceof a ? void 0 : new a
                }(s.prototype), i
            }
        }()), t.AjaxRequest = function() {
            var e = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
            if (!window.ActiveXObject) return window.XMLHttpRequest ? new window.XMLHttpRequest : !1;
            for (var t = 0; t < e.length; t++) try {
                return new window.ActiveXObject(e[t])
            } catch (i) {}
        }, t.canUseNewCanvasBlendModes = function() {
            var e = document.createElement("canvas");
            e.width = 1, e.height = 1;
            var t = e.getContext("2d");
            return t.fillStyle = "#000", t.fillRect(0, 0, 1, 1), t.globalCompositeOperation = "multiply", t.fillStyle = "#fff", t.fillRect(0, 0, 1, 1), 0 === t.getImageData(0, 0, 1, 1).data[0]
        }, t.getNextPowerOfTwo = function(e) {
            if (e > 0 && 0 === (e & e - 1)) return e;
            for (var t = 1; e > t;) t <<= 1;
            return t
        }, t.EventTarget = function() {
            var e = {};
            this.addEventListener = this.on = function(t, i) {
                void 0 === e[t] && (e[t] = []), -1 === e[t].indexOf(i) && e[t].unshift(i)
            }, this.dispatchEvent = this.emit = function(t) {
                if (e[t.type] && e[t.type].length)
                    for (var i = e[t.type].length - 1; i >= 0; i--) e[t.type][i](t)
            }, this.removeEventListener = this.off = function(t, i) {
                if (void 0 !== e[t]) {
                    var s = e[t].indexOf(i); - 1 !== s && e[t].splice(s, 1)
                }
            }, this.removeAllEventListeners = function(t) {
                var i = e[t];
                i && (i.length = 0)
            }
        }, t.autoDetectRenderer = function(e, i, s, n, a) {
            e || (e = 800), i || (i = 600);
            var r = function() {
                try {
                    var e = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (t) {
                    return !1
                }
            }();
            return r ? new t.WebGLRenderer(e, i, s, n, a) : new t.CanvasRenderer(e, i, s, n)
        }, t.autoDetectRecommendedRenderer = function(e, i, s, n, a) {
            e || (e = 800), i || (i = 600);
            var r = function() {
                    try {
                        var e = document.createElement("canvas");
                        return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                    } catch (t) {
                        return !1
                    }
                }(),
                o = /Android/i.test(navigator.userAgent);
            return r && !o ? new t.WebGLRenderer(e, i, s, n, a) : new t.CanvasRenderer(e, i, s, n)
        }, t.PolyK = {}, t.PolyK.Triangulate = function(e) {
            var i = !0,
                s = e.length >> 1;
            if (3 > s) return [];
            for (var n = [], a = [], r = 0; s > r; r++) a.push(r);
            r = 0;
            for (var o = s; o > 3;) {
                var h = a[(r + 0) % o],
                    l = a[(r + 1) % o],
                    d = a[(r + 2) % o],
                    u = e[2 * h],
                    c = e[2 * h + 1],
                    p = e[2 * l],
                    m = e[2 * l + 1],
                    g = e[2 * d],
                    f = e[2 * d + 1],
                    y = !1;
                if (t.PolyK._convex(u, c, p, m, g, f, i)) {
                    y = !0;
                    for (var v = 0; o > v; v++) {
                        var b = a[v];
                        if (b !== h && b !== l && b !== d && t.PolyK._PointInTriangle(e[2 * b], e[2 * b + 1], u, c, p, m, g, f)) {
                            y = !1;
                            break
                        }
                    }
                }
                if (y) n.push(h, l, d), a.splice((r + 1) % o, 1), o--, r = 0;
                else if (r++ > 3 * o) {
                    if (!i) return window.console.log("PIXI Warning: shape too complex to fill"), [];
                    for (n = [], a = [], r = 0; s > r; r++) a.push(r);
                    r = 0, o = s, i = !1
                }
            }
            return n.push(a[0], a[1], a[2]), n
        }, t.PolyK._PointInTriangle = function(e, t, i, s, n, a, r, o) {
            var h = r - i,
                l = o - s,
                d = n - i,
                u = a - s,
                c = e - i,
                p = t - s,
                m = h * h + l * l,
                g = h * d + l * u,
                f = h * c + l * p,
                y = d * d + u * u,
                v = d * c + u * p,
                b = 1 / (m * y - g * g),
                x = (y * f - g * v) * b,
                w = (m * v - g * f) * b;
            return x >= 0 && w >= 0 && 1 > x + w
        }, t.PolyK._convex = function(e, t, i, s, n, a, r) {
            return (t - s) * (n - i) + (i - e) * (a - s) >= 0 === r
        }, t.initDefaultShaders = function() {}, t.CompileVertexShader = function(e, i) {
            return t._CompileShader(e, i, e.VERTEX_SHADER)
        }, t.CompileFragmentShader = function(e, i) {
            return t._CompileShader(e, i, e.FRAGMENT_SHADER)
        }, t._CompileShader = function(e, t, i) {
            var s = t.join("\n"),
                n = e.createShader(i);
            return e.shaderSource(n, s), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS) ? n : (window.console.log(e.getShaderInfoLog(n)), null)
        }, t.compileProgram = function(e, i, s) {
            var n = t.CompileFragmentShader(e, s),
                a = t.CompileVertexShader(e, i),
                r = e.createProgram();
            return e.attachShader(r, a), e.attachShader(r, n), e.linkProgram(r), e.getProgramParameter(r, e.LINK_STATUS) || window.console.log("Could not initialise shaders"), r
        }, t.PixiShader = function(e) {
            this._UID = t._UID++, this.gl = e, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.textureCount = 0, this.attributes = [], this.init()
        }, t.PixiShader.prototype.init = function() {
            var e = this.gl,
                i = t.compileProgram(e, this.vertexSrc || t.PixiShader.defaultVertexSrc, this.fragmentSrc);
            e.useProgram(i), this.uSampler = e.getUniformLocation(i, "uSampler"), this.projectionVector = e.getUniformLocation(i, "projectionVector"), this.offsetVector = e.getUniformLocation(i, "offsetVector"), this.dimensions = e.getUniformLocation(i, "dimensions"), this.aVertexPosition = e.getAttribLocation(i, "aVertexPosition"), this.aTextureCoord = e.getAttribLocation(i, "aTextureCoord"), this.colorAttribute = e.getAttribLocation(i, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            for (var s in this.uniforms) this.uniforms[s].uniformLocation = e.getUniformLocation(i, s);
            this.initUniforms(), this.program = i
        }, t.PixiShader.prototype.initUniforms = function() {
            this.textureCount = 1;
            var e, t = this.gl;
            for (var i in this.uniforms) {
                e = this.uniforms[i];
                var s = e.type;
                "sampler2D" === s ? (e._init = !1, null !== e.value && this.initSampler2D(e)) : "mat2" === s || "mat3" === s || "mat4" === s ? (e.glMatrix = !0, e.glValueLength = 1, "mat2" === s ? e.glFunc = t.uniformMatrix2fv : "mat3" === s ? e.glFunc = t.uniformMatrix3fv : "mat4" === s && (e.glFunc = t.uniformMatrix4fv)) : (e.glFunc = t["uniform" + s], e.glValueLength = "2f" === s || "2i" === s ? 2 : "3f" === s || "3i" === s ? 3 : "4f" === s || "4i" === s ? 4 : 1)
            }
        }, t.PixiShader.prototype.initSampler2D = function(e) {
            if (e.value && e.value.baseTexture && e.value.baseTexture.hasLoaded) {
                var t = this.gl;
                if (t.activeTexture(t["TEXTURE" + this.textureCount]), t.bindTexture(t.TEXTURE_2D, e.value.baseTexture._glTextures[t.id]), e.textureData) {
                    var i = e.textureData,
                        s = i.magFilter ? i.magFilter : t.LINEAR,
                        n = i.minFilter ? i.minFilter : t.LINEAR,
                        a = i.wrapS ? i.wrapS : t.CLAMP_TO_EDGE,
                        r = i.wrapT ? i.wrapT : t.CLAMP_TO_EDGE,
                        o = i.luminance ? t.LUMINANCE : t.RGBA;
                    if (i.repeat && (a = t.REPEAT, r = t.REPEAT), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !!i.flipY), i.width) {
                        var h = i.width ? i.width : 512,
                            l = i.height ? i.height : 2,
                            d = i.border ? i.border : 0;
                        t.texImage2D(t.TEXTURE_2D, 0, o, h, l, d, o, t.UNSIGNED_BYTE, null)
                    } else t.texImage2D(t.TEXTURE_2D, 0, o, t.RGBA, t.UNSIGNED_BYTE, e.value.baseTexture.source);
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, s), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, n), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, a), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, r)
                }
                t.uniform1i(e.uniformLocation, this.textureCount), e._init = !0, this.textureCount++
            }
        }, t.PixiShader.prototype.syncUniforms = function() {
            this.textureCount = 1;
            var e, i = this.gl;
            for (var s in this.uniforms) e = this.uniforms[s], 1 === e.glValueLength ? e.glMatrix === !0 ? e.glFunc.call(i, e.uniformLocation, e.transpose, e.value) : e.glFunc.call(i, e.uniformLocation, e.value) : 2 === e.glValueLength ? e.glFunc.call(i, e.uniformLocation, e.value.x, e.value.y) : 3 === e.glValueLength ? e.glFunc.call(i, e.uniformLocation, e.value.x, e.value.y, e.value.z) : 4 === e.glValueLength ? e.glFunc.call(i, e.uniformLocation, e.value.x, e.value.y, e.value.z, e.value.w) : "sampler2D" === e.type && (e._init ? (i.activeTexture(i["TEXTURE" + this.textureCount]), i.bindTexture(i.TEXTURE_2D, e.value.baseTexture._glTextures[i.id] || t.createWebGLTexture(e.value.baseTexture, i)), i.uniform1i(e.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(e))
        }, t.PixiShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
        }, t.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec2 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;", "   vColor = vec4(color * aColor.x, aColor.x);", "}"], t.PixiFastShader = function(e) {
            this._UID = t._UID++, this.gl = e, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"], this.textureCount = 0, this.init()
        }, t.PixiFastShader.prototype.init = function() {
            var e = this.gl,
                i = t.compileProgram(e, this.vertexSrc, this.fragmentSrc);
            e.useProgram(i), this.uSampler = e.getUniformLocation(i, "uSampler"), this.projectionVector = e.getUniformLocation(i, "projectionVector"), this.offsetVector = e.getUniformLocation(i, "offsetVector"), this.dimensions = e.getUniformLocation(i, "dimensions"), this.uMatrix = e.getUniformLocation(i, "uMatrix"), this.aVertexPosition = e.getAttribLocation(i, "aVertexPosition"), this.aPositionCoord = e.getAttribLocation(i, "aPositionCoord"), this.aScale = e.getAttribLocation(i, "aScale"), this.aRotation = e.getAttribLocation(i, "aRotation"), this.aTextureCoord = e.getAttribLocation(i, "aTextureCoord"), this.colorAttribute = e.getAttribLocation(i, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute], this.program = i
        }, t.PixiFastShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
        }, t.StripShader = function(e) {
            this._UID = t._UID++, this.gl = e, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"], this.init()
        }, t.StripShader.prototype.init = function() {
            var e = this.gl,
                i = t.compileProgram(e, this.vertexSrc, this.fragmentSrc);
            e.useProgram(i), this.uSampler = e.getUniformLocation(i, "uSampler"), this.projectionVector = e.getUniformLocation(i, "projectionVector"), this.offsetVector = e.getUniformLocation(i, "offsetVector"), this.colorAttribute = e.getAttribLocation(i, "aColor"), this.aVertexPosition = e.getAttribLocation(i, "aVertexPosition"), this.aTextureCoord = e.getAttribLocation(i, "aTextureCoord"), this.attributes = [this.aVertexPosition, this.aTextureCoord], this.translationMatrix = e.getUniformLocation(i, "translationMatrix"), this.alpha = e.getUniformLocation(i, "alpha"), this.program = i
        }, t.PrimitiveShader = function(e) {
            this._UID = t._UID++, this.gl = e, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"], this.init()
        }, t.PrimitiveShader.prototype.init = function() {
            var e = this.gl,
                i = t.compileProgram(e, this.vertexSrc, this.fragmentSrc);
            e.useProgram(i), this.projectionVector = e.getUniformLocation(i, "projectionVector"), this.offsetVector = e.getUniformLocation(i, "offsetVector"), this.tintColor = e.getUniformLocation(i, "tint"), this.aVertexPosition = e.getAttribLocation(i, "aVertexPosition"), this.colorAttribute = e.getAttribLocation(i, "aColor"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = e.getUniformLocation(i, "translationMatrix"), this.alpha = e.getUniformLocation(i, "alpha"), this.program = i
        }, t.PrimitiveShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
        }, t.ComplexPrimitiveShader = function(e) {
            this._UID = t._UID++, this.gl = e, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"], this.init()
        }, t.ComplexPrimitiveShader.prototype.init = function() {
            var e = this.gl,
                i = t.compileProgram(e, this.vertexSrc, this.fragmentSrc);
            e.useProgram(i), this.projectionVector = e.getUniformLocation(i, "projectionVector"), this.offsetVector = e.getUniformLocation(i, "offsetVector"), this.tintColor = e.getUniformLocation(i, "tint"), this.color = e.getUniformLocation(i, "color"), this.aVertexPosition = e.getAttribLocation(i, "aVertexPosition"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = e.getUniformLocation(i, "translationMatrix"), this.alpha = e.getUniformLocation(i, "alpha"), this.program = i
        }, t.ComplexPrimitiveShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
        }, t.WebGLGraphics = function() {}, t.WebGLGraphics.renderGraphics = function(e, i) {
            var s, n = i.gl,
                a = i.projection,
                r = i.offset,
                o = i.shaderManager.primitiveShader;
            e.dirty && t.WebGLGraphics.updateGraphics(e, n);
            for (var h = e._webGL[n.id], l = 0; l < h.data.length; l++) 1 === h.data[l].mode ? (s = h.data[l], i.stencilManager.pushStencil(e, s, i), n.drawElements(n.TRIANGLE_FAN, 4, n.UNSIGNED_SHORT, 2 * (s.indices.length - 4)), i.stencilManager.popStencil(e, s, i), this.last = s.mode) : (s = h.data[l], i.shaderManager.setShader(o), o = i.shaderManager.primitiveShader, n.uniformMatrix3fv(o.translationMatrix, !1, e.worldTransform.toArray(!0)), n.uniform2f(o.projectionVector, a.x, -a.y), n.uniform2f(o.offsetVector, -r.x, -r.y), n.uniform3fv(o.tintColor, t.hex2rgb(e.tint)), n.uniform1f(o.alpha, e.worldAlpha), n.bindBuffer(n.ARRAY_BUFFER, s.buffer), n.vertexAttribPointer(o.aVertexPosition, 2, n.FLOAT, !1, 24, 0), n.vertexAttribPointer(o.colorAttribute, 4, n.FLOAT, !1, 24, 8), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, s.indexBuffer), n.drawElements(n.TRIANGLE_STRIP, s.indices.length, n.UNSIGNED_SHORT, 0))
        }, t.WebGLGraphics.updateGraphics = function(e, i) {
            var s = e._webGL[i.id];
            s || (s = e._webGL[i.id] = {
                lastIndex: 0,
                data: [],
                gl: i
            }), e.dirty = !1;
            var n;
            if (e.clearDirty) {
                for (e.clearDirty = !1, n = 0; n < s.data.length; n++) {
                    var a = s.data[n];
                    a.reset(), t.WebGLGraphics.graphicsDataPool.push(a)
                }
                s.data = [], s.lastIndex = 0
            }
            var r;
            for (n = s.lastIndex; n < e.graphicsData.length; n++) {
                var o = e.graphicsData[n];
                o.type === t.Graphics.POLY ? (o.fill && o.points.length > 6 && (o.points.length > 10 ? (r = t.WebGLGraphics.switchMode(s, 1), t.WebGLGraphics.buildComplexPoly(o, r)) : (r = t.WebGLGraphics.switchMode(s, 0), t.WebGLGraphics.buildPoly(o, r))), o.lineWidth > 0 && (r = t.WebGLGraphics.switchMode(s, 0), t.WebGLGraphics.buildLine(o, r))) : (r = t.WebGLGraphics.switchMode(s, 0), o.type === t.Graphics.RECT ? t.WebGLGraphics.buildRectangle(o, r) : o.type === t.Graphics.CIRC || o.type === t.Graphics.ELIP ? t.WebGLGraphics.buildCircle(o, r) : o.type === t.Graphics.RREC && t.WebGLGraphics.buildRoundedRectangle(o, r)), s.lastIndex++
            }
            for (n = 0; n < s.data.length; n++) r = s.data[n], r.dirty && r.upload()
        }, t.WebGLGraphics.switchMode = function(e, i) {
            var s;
            return e.data.length ? (s = e.data[e.data.length - 1], (s.mode !== i || 1 === i) && (s = t.WebGLGraphics.graphicsDataPool.pop() || new t.WebGLGraphicsData(e.gl), s.mode = i, e.data.push(s))) : (s = t.WebGLGraphics.graphicsDataPool.pop() || new t.WebGLGraphicsData(e.gl), s.mode = i, e.data.push(s)), s.dirty = !0, s
        }, t.WebGLGraphics.buildRectangle = function(e, i) {
            var s = e.points,
                n = s[0],
                a = s[1],
                r = s[2],
                o = s[3];
            if (e.fill) {
                var h = t.hex2rgb(e.fillColor),
                    l = e.fillAlpha,
                    d = h[0] * l,
                    u = h[1] * l,
                    c = h[2] * l,
                    p = i.points,
                    m = i.indices,
                    g = p.length / 6;
                p.push(n, a), p.push(d, u, c, l), p.push(n + r, a), p.push(d, u, c, l), p.push(n, a + o), p.push(d, u, c, l), p.push(n + r, a + o), p.push(d, u, c, l), m.push(g, g, g + 1, g + 2, g + 3, g + 3)
            }
            if (e.lineWidth) {
                var f = e.points;
                e.points = [n, a, n + r, a, n + r, a + o, n, a + o, n, a], t.WebGLGraphics.buildLine(e, i), e.points = f
            }
        }, t.WebGLGraphics.buildRoundedRectangle = function(e, i) {
            var s = e.points,
                n = s[0],
                a = s[1],
                r = s[2],
                o = s[3],
                h = s[4],
                l = [];
            if (l.push(n, a + h), l = l.concat(t.WebGLGraphics.quadraticBezierCurve(n, a + o - h, n, a + o, n + h, a + o)), l = l.concat(t.WebGLGraphics.quadraticBezierCurve(n + r - h, a + o, n + r, a + o, n + r, a + o - h)), l = l.concat(t.WebGLGraphics.quadraticBezierCurve(n + r, a + h, n + r, a, n + r - h, a)), l = l.concat(t.WebGLGraphics.quadraticBezierCurve(n + h, a, n, a, n, a + h)), e.fill) {
                var d = t.hex2rgb(e.fillColor),
                    u = e.fillAlpha,
                    c = d[0] * u,
                    p = d[1] * u,
                    m = d[2] * u,
                    g = i.points,
                    f = i.indices,
                    y = g.length / 6,
                    v = t.PolyK.Triangulate(l),
                    b = 0;
                for (b = 0; b < v.length; b += 3) f.push(v[b] + y), f.push(v[b] + y), f.push(v[b + 1] + y), f.push(v[b + 2] + y), f.push(v[b + 2] + y);
                for (b = 0; b < l.length; b++) g.push(l[b], l[++b], c, p, m, u)
            }
            if (e.lineWidth) {
                var x = e.points;
                e.points = l, t.WebGLGraphics.buildLine(e, i), e.points = x
            }
        }, t.WebGLGraphics.quadraticBezierCurve = function(e, t, i, s, n, a) {
            function r(e, t, i) {
                var s = t - e;
                return e + s * i
            }
            for (var o, h, l, d, u, c, p = 20, m = [], g = 0, f = 0; p >= f; f++) g = f / p, o = r(e, i, g), h = r(t, s, g), l = r(i, n, g), d = r(s, a, g), u = r(o, l, g), c = r(h, d, g), m.push(u, c);
            return m
        }, t.WebGLGraphics.buildCircle = function(e, i) {
            var s = e.points,
                n = s[0],
                a = s[1],
                r = s[2],
                o = s[3],
                h = 40,
                l = 2 * Math.PI / h,
                d = 0;
            if (e.fill) {
                var u = t.hex2rgb(e.fillColor),
                    c = e.fillAlpha,
                    p = u[0] * c,
                    m = u[1] * c,
                    g = u[2] * c,
                    f = i.points,
                    y = i.indices,
                    v = f.length / 6;
                for (y.push(v), d = 0; h + 1 > d; d++) f.push(n, a, p, m, g, c), f.push(n + Math.sin(l * d) * r, a + Math.cos(l * d) * o, p, m, g, c), y.push(v++, v++);
                y.push(v - 1)
            }
            if (e.lineWidth) {
                var b = e.points;
                for (e.points = [], d = 0; h + 1 > d; d++) e.points.push(n + Math.sin(l * d) * r, a + Math.cos(l * d) * o);
                t.WebGLGraphics.buildLine(e, i), e.points = b
            }
        }, t.WebGLGraphics.buildLine = function(e, i) {
            var s = 0,
                n = e.points;
            if (0 !== n.length) {
                if (e.lineWidth % 2)
                    for (s = 0; s < n.length; s++) n[s] += .5;
                var a = new t.Point(n[0], n[1]),
                    r = new t.Point(n[n.length - 2], n[n.length - 1]);
                if (a.x === r.x && a.y === r.y) {
                    n = n.slice(), n.pop(), n.pop(), r = new t.Point(n[n.length - 2], n[n.length - 1]);
                    var o = r.x + .5 * (a.x - r.x),
                        h = r.y + .5 * (a.y - r.y);
                    n.unshift(o, h), n.push(o, h)
                }
                var l, d, u, c, p, m, g, f, y, v, b, x, w, T, S, C, A, M, E, R, _, L, F, P = i.points,
                    k = i.indices,
                    B = n.length / 2,
                    I = n.length,
                    D = P.length / 6,
                    O = e.lineWidth / 2,
                    G = t.hex2rgb(e.lineColor),
                    j = e.lineAlpha,
                    U = G[0] * j,
                    N = G[1] * j,
                    W = G[2] * j;
                for (u = n[0], c = n[1], p = n[2], m = n[3], y = -(c - m), v = u - p, F = Math.sqrt(y * y + v * v), y /= F, v /= F, y *= O, v *= O, P.push(u - y, c - v, U, N, W, j), P.push(u + y, c + v, U, N, W, j), s = 1; B - 1 > s; s++) u = n[2 * (s - 1)], c = n[2 * (s - 1) + 1], p = n[2 * s], m = n[2 * s + 1], g = n[2 * (s + 1)], f = n[2 * (s + 1) + 1], y = -(c - m), v = u - p, F = Math.sqrt(y * y + v * v), y /= F, v /= F, y *= O, v *= O, b = -(m - f), x = p - g, F = Math.sqrt(b * b + x * x), b /= F, x /= F, b *= O, x *= O, S = -v + c - (-v + m), C = -y + p - (-y + u), A = (-y + u) * (-v + m) - (-y + p) * (-v + c), M = -x + f - (-x + m), E = -b + p - (-b + g), R = (-b + g) * (-x + m) - (-b + p) * (-x + f), _ = S * E - M * C, Math.abs(_) < .1 ? (_ += 10.1, P.push(p - y, m - v, U, N, W, j), P.push(p + y, m + v, U, N, W, j)) : (l = (C * R - E * A) / _, d = (M * A - S * R) / _, L = (l - p) * (l - p) + (d - m) + (d - m), L > 19600 ? (w = y - b, T = v - x, F = Math.sqrt(w * w + T * T), w /= F, T /= F, w *= O, T *= O, P.push(p - w, m - T), P.push(U, N, W, j), P.push(p + w, m + T), P.push(U, N, W, j), P.push(p - w, m - T), P.push(U, N, W, j), I++) : (P.push(l, d), P.push(U, N, W, j), P.push(p - (l - p), m - (d - m)), P.push(U, N, W, j)));
                for (u = n[2 * (B - 2)], c = n[2 * (B - 2) + 1], p = n[2 * (B - 1)], m = n[2 * (B - 1) + 1], y = -(c - m), v = u - p, F = Math.sqrt(y * y + v * v), y /= F, v /= F, y *= O, v *= O, P.push(p - y, m - v), P.push(U, N, W, j), P.push(p + y, m + v), P.push(U, N, W, j), k.push(D), s = 0; I > s; s++) k.push(D++);
                k.push(D - 1)
            }
        }, t.WebGLGraphics.buildComplexPoly = function(e, i) {
            var s = e.points.slice();
            if (!(s.length < 6)) {
                var n = i.indices;
                i.points = s, i.alpha = e.fillAlpha, i.color = t.hex2rgb(e.fillColor);
                for (var a, r, o = 1 / 0, h = -1 / 0, l = 1 / 0, d = -1 / 0, u = 0; u < s.length; u += 2) a = s[u], r = s[u + 1], o = o > a ? a : o, h = a > h ? a : h, l = l > r ? r : l, d = r > d ? r : d;
                s.push(o, l, h, l, h, d, o, d);
                var c = s.length / 2;
                for (u = 0; c > u; u++) n.push(u)
            }
        }, t.WebGLGraphics.buildPoly = function(e, i) {
            var s = e.points;
            if (!(s.length < 6)) {
                var n = i.points,
                    a = i.indices,
                    r = s.length / 2,
                    o = t.hex2rgb(e.fillColor),
                    h = e.fillAlpha,
                    l = o[0] * h,
                    d = o[1] * h,
                    u = o[2] * h,
                    c = t.PolyK.Triangulate(s),
                    p = n.length / 6,
                    m = 0;
                for (m = 0; m < c.length; m += 3) a.push(c[m] + p), a.push(c[m] + p), a.push(c[m + 1] + p), a.push(c[m + 2] + p), a.push(c[m + 2] + p);
                for (m = 0; r > m; m++) n.push(s[2 * m], s[2 * m + 1], l, d, u, h)
            }
        }, t.WebGLGraphics.graphicsDataPool = [], t.WebGLGraphicsData = function(e) {
            this.gl = e, this.color = [0, 0, 0], this.points = [], this.indices = [], this.lastIndex = 0, this.buffer = e.createBuffer(), this.indexBuffer = e.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0
        }, t.WebGLGraphicsData.prototype.reset = function() {
            this.points = [], this.indices = [], this.lastIndex = 0
        }, t.WebGLGraphicsData.prototype.upload = function() {
            var e = this.gl;
            this.glPoints = new Float32Array(this.points), e.bindBuffer(e.ARRAY_BUFFER, this.buffer), e.bufferData(e.ARRAY_BUFFER, this.glPoints, e.STATIC_DRAW), this.glIndicies = new Uint16Array(this.indices), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.glIndicies, e.STATIC_DRAW), this.dirty = !1
        }, t.glContexts = [], t.WebGLRenderer = function(e, i, s, n, a, r) {
            t.defaultRenderer || (t.sayHello("webGL"), t.defaultRenderer = this), this.type = t.WEBGL_RENDERER, this.transparent = !!n, this.preserveDrawingBuffer = r, this.width = e || 800, this.height = i || 600, this.view = s || document.createElement("canvas"), this.view.width = this.width, this.view.height = this.height, this.contextLost = this.handleContextLost.bind(this), this.contextRestoredLost = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.contextLost, !1), this.view.addEventListener("webglcontextrestored", this.contextRestoredLost, !1), this.options = {
                alpha: this.transparent,
                antialias: !!a,
                premultipliedAlpha: !!n,
                stencil: !0,
                preserveDrawingBuffer: r
            };
            var o = null;
            if (["experimental-webgl", "webgl"].forEach(function(e) {
                    try {
                        o = o || this.view.getContext(e, this.options)
                    } catch (t) {}
                }, this), !o) throw new Error("This browser does not support webGL. Try using the canvas renderer" + this);
            this.gl = o, this.glContextId = o.id = t.WebGLRenderer.glContextId++, t.glContexts[this.glContextId] = o, t.blendModesWebGL || (t.blendModesWebGL = [], t.blendModesWebGL[t.blendModes.NORMAL] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.ADD] = [o.SRC_ALPHA, o.DST_ALPHA], t.blendModesWebGL[t.blendModes.MULTIPLY] = [o.DST_COLOR, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.SCREEN] = [o.SRC_ALPHA, o.ONE], t.blendModesWebGL[t.blendModes.OVERLAY] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.DARKEN] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.LIGHTEN] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.COLOR_DODGE] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.COLOR_BURN] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.HARD_LIGHT] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.SOFT_LIGHT] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.DIFFERENCE] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.EXCLUSION] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.HUE] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.SATURATION] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.COLOR] = [o.ONE, o.ONE_MINUS_SRC_ALPHA], t.blendModesWebGL[t.blendModes.LUMINOSITY] = [o.ONE, o.ONE_MINUS_SRC_ALPHA]), this.projection = new t.Point, this.projection.x = this.width / 2, this.projection.y = -this.height / 2, this.offset = new t.Point(0, 0), this.resize(this.width, this.height), this.contextLost = !1, this.shaderManager = new t.WebGLShaderManager(o), this.spriteBatch = new t.WebGLSpriteBatch(o), this.maskManager = new t.WebGLMaskManager(o), this.filterManager = new t.WebGLFilterManager(o, this.transparent), this.stencilManager = new t.WebGLStencilManager(o), this.blendModeManager = new t.WebGLBlendModeManager(o), this.renderSession = {}, this.renderSession.gl = this.gl, this.renderSession.drawCount = 0, this.renderSession.shaderManager = this.shaderManager, this.renderSession.maskManager = this.maskManager, this.renderSession.filterManager = this.filterManager, this.renderSession.blendModeManager = this.blendModeManager, this.renderSession.spriteBatch = this.spriteBatch, this.renderSession.stencilManager = this.stencilManager, this.renderSession.renderer = this, o.useProgram(this.shaderManager.defaultShader.program), o.disable(o.DEPTH_TEST), o.disable(o.CULL_FACE), o.enable(o.BLEND), o.colorMask(!0, !0, !0, this.transparent)
        }, t.WebGLRenderer.prototype.constructor = t.WebGLRenderer, t.WebGLRenderer.prototype.render = function(e) {
            if (!this.contextLost) {
                this.__stage !== e && (e.interactive && e.interactionManager.removeEvents(), this.__stage = e), t.WebGLRenderer.updateTextures(), e.updateTransform(), e._interactive && (e._interactiveEventsAdded || (e._interactiveEventsAdded = !0, e.interactionManager.setTarget(this)));
                var i = this.gl;
                i.viewport(0, 0, this.width, this.height), i.bindFramebuffer(i.FRAMEBUFFER, null), this.transparent ? i.clearColor(0, 0, 0, 0) : i.clearColor(e.backgroundColorSplit[0], e.backgroundColorSplit[1], e.backgroundColorSplit[2], 1), i.clear(i.COLOR_BUFFER_BIT), this.renderDisplayObject(e, this.projection), e.interactive ? e._interactiveEventsAdded || (e._interactiveEventsAdded = !0, e.interactionManager.setTarget(this)) : e._interactiveEventsAdded && (e._interactiveEventsAdded = !1, e.interactionManager.setTarget(this))
            }
        }, t.WebGLRenderer.prototype.renderDisplayObject = function(e, i, s) {
            this.renderSession.blendModeManager.setBlendMode(t.blendModes.NORMAL), this.renderSession.drawCount = 0, this.renderSession.currentBlendMode = 9999, this.renderSession.projection = i, this.renderSession.offset = this.offset, this.spriteBatch.begin(this.renderSession), this.filterManager.begin(this.renderSession, s), e._renderWebGL(this.renderSession), this.spriteBatch.end()
        }, t.WebGLRenderer.updateTextures = function() {
            var e = 0;
            for (e = 0; e < t.Texture.frameUpdates.length; e++) t.WebGLRenderer.updateTextureFrame(t.Texture.frameUpdates[e]);
            for (e = 0; e < t.texturesToDestroy.length; e++) t.WebGLRenderer.destroyTexture(t.texturesToDestroy[e]);
            t.texturesToUpdate.length = 0, t.texturesToDestroy.length = 0, t.Texture.frameUpdates.length = 0
        }, t.WebGLRenderer.destroyTexture = function(e) {
            for (var i = e._glTextures.length - 1; i >= 0; i--) {
                var s = e._glTextures[i],
                    n = t.glContexts[i];
                n && s && n.deleteTexture(s)
            }
            e._glTextures.length = 0
        }, t.WebGLRenderer.updateTextureFrame = function(e) {
            e._updateWebGLuvs()
        }, t.WebGLRenderer.prototype.resize = function(e, t) {
            this.width = e, this.height = t, this.view.width = e, this.view.height = t, this.gl.viewport(0, 0, this.width, this.height), this.projection.x = this.width / 2, this.projection.y = -this.height / 2
        }, t.createWebGLTexture = function(e, i) {
            return e.hasLoaded && (e._glTextures[i.id] = i.createTexture(), i.bindTexture(i.TEXTURE_2D, e._glTextures[i.id]), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultipliedAlpha), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, e.source), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, e.scaleMode === t.scaleModes.LINEAR ? i.LINEAR : i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, e.scaleMode === t.scaleModes.LINEAR ? i.LINEAR : i.NEAREST), e._powerOf2 ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.REPEAT), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.REPEAT)) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE)), i.bindTexture(i.TEXTURE_2D, null), e._dirty[i.id] = !1), e._glTextures[i.id]
        }, t.updateWebGLTexture = function(e, i) {
            e._glTextures[i.id] && (i.bindTexture(i.TEXTURE_2D, e._glTextures[i.id]), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultipliedAlpha), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, e.source), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, e.scaleMode === t.scaleModes.LINEAR ? i.LINEAR : i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, e.scaleMode === t.scaleModes.LINEAR ? i.LINEAR : i.NEAREST), e._powerOf2 ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.REPEAT), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.REPEAT)) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE)), e._dirty[i.id] = !1)
        }, t.WebGLRenderer.prototype.handleContextLost = function(e) {
            e.preventDefault(), this.contextLost = !0
        }, t.WebGLRenderer.prototype.handleContextRestored = function() {
            try {
                this.gl = this.view.getContext("experimental-webgl", this.options)
            } catch (e) {
                try {
                    this.gl = this.view.getContext("webgl", this.options)
                } catch (i) {
                    throw new Error(" This browser does not support webGL. Try using the canvas renderer" + this)
                }
            }
            var s = this.gl;
            s.id = t.WebGLRenderer.glContextId++, this.shaderManager.setContext(s), this.spriteBatch.setContext(s), this.primitiveBatch.setContext(s), this.maskManager.setContext(s), this.filterManager.setContext(s), this.renderSession.gl = this.gl, s.disable(s.DEPTH_TEST), s.disable(s.CULL_FACE), s.enable(s.BLEND), s.colorMask(!0, !0, !0, this.transparent), this.gl.viewport(0, 0, this.width, this.height);
            for (var n in t.TextureCache) {
                var a = t.TextureCache[n].baseTexture;
                a._glTextures = []
            }
            this.contextLost = !1
        }, t.WebGLRenderer.prototype.destroy = function() {
            this.view.removeEventListener("webglcontextlost", this.contextLost), this.view.removeEventListener("webglcontextrestored", this.contextRestoredLost), t.glContexts[this.glContextId] = null, this.projection = null, this.offset = null, this.shaderManager.destroy(), this.spriteBatch.destroy(), this.primitiveBatch.destroy(), this.maskManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.spriteBatch = null, this.maskManager = null, this.filterManager = null, this.gl = null, this.renderSession = null
        }, t.WebGLRenderer.glContextId = 0, t.WebGLBlendModeManager = function(e) {
            this.gl = e, this.currentBlendMode = 99999
        }, t.WebGLBlendModeManager.prototype.setBlendMode = function(e) {
            if (this.currentBlendMode === e) return !1;
            this.currentBlendMode = e;
            var i = t.blendModesWebGL[this.currentBlendMode];
            return this.gl.blendFunc(i[0], i[1]), !0
        }, t.WebGLBlendModeManager.prototype.destroy = function() {
            this.gl = null
        }, t.WebGLMaskManager = function(e) {
            this.maskStack = [], this.maskPosition = 0, this.setContext(e), this.reverse = !1, this.count = 0
        }, t.WebGLMaskManager.prototype.setContext = function(e) {
            this.gl = e
        }, t.WebGLMaskManager.prototype.pushMask = function(e, i) {
            var s = i.gl;
            e.dirty && t.WebGLGraphics.updateGraphics(e, s), e._webGL[s.id].data.length && i.stencilManager.pushStencil(e, e._webGL[s.id].data[0], i)
        }, t.WebGLMaskManager.prototype.popMask = function(e, t) {
            var i = this.gl;
            t.stencilManager.popStencil(e, e._webGL[i.id].data[0], t)
        }, t.WebGLMaskManager.prototype.destroy = function() {
            this.maskStack = null, this.gl = null
        }, t.WebGLStencilManager = function(e) {
            this.stencilStack = [], this.setContext(e), this.reverse = !0, this.count = 0
        }, t.WebGLStencilManager.prototype.setContext = function(e) {
            this.gl = e
        }, t.WebGLStencilManager.prototype.pushStencil = function(e, t, i) {
            var s = this.gl;
            this.bindGraphics(e, t, i), 0 === this.stencilStack.length && (s.enable(s.STENCIL_TEST), s.clear(s.STENCIL_BUFFER_BIT), this.reverse = !0, this.count = 0), this.stencilStack.push(t);
            var n = this.count;
            s.colorMask(!1, !1, !1, !1), s.stencilFunc(s.ALWAYS, 0, 255), s.stencilOp(s.KEEP, s.KEEP, s.INVERT), 1 === t.mode ? (s.drawElements(s.TRIANGLE_FAN, t.indices.length - 4, s.UNSIGNED_SHORT, 0), this.reverse ? (s.stencilFunc(s.EQUAL, 255 - n, 255), s.stencilOp(s.KEEP, s.KEEP, s.DECR)) : (s.stencilFunc(s.EQUAL, n, 255), s.stencilOp(s.KEEP, s.KEEP, s.INCR)), s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (t.indices.length - 4)), this.reverse ? s.stencilFunc(s.EQUAL, 255 - (n + 1), 255) : s.stencilFunc(s.EQUAL, n + 1, 255), this.reverse = !this.reverse) : (this.reverse ? (s.stencilFunc(s.EQUAL, n, 255), s.stencilOp(s.KEEP, s.KEEP, s.INCR)) : (s.stencilFunc(s.EQUAL, 255 - n, 255), s.stencilOp(s.KEEP, s.KEEP, s.DECR)), s.drawElements(s.TRIANGLE_STRIP, t.indices.length, s.UNSIGNED_SHORT, 0), this.reverse ? s.stencilFunc(s.EQUAL, n + 1, 255) : s.stencilFunc(s.EQUAL, 255 - (n + 1), 255)), s.colorMask(!0, !0, !0, !0), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), this.count++
        }, t.WebGLStencilManager.prototype.bindGraphics = function(e, i, s) {
            this._currentGraphics = e;
            var n, a = this.gl,
                r = s.projection,
                o = s.offset;
            1 === i.mode ? (n = s.shaderManager.complexPrimativeShader, s.shaderManager.setShader(n), a.uniformMatrix3fv(n.translationMatrix, !1, e.worldTransform.toArray(!0)), a.uniform2f(n.projectionVector, r.x, -r.y), a.uniform2f(n.offsetVector, -o.x, -o.y), a.uniform3fv(n.tintColor, t.hex2rgb(e.tint)), a.uniform3fv(n.color, i.color), a.uniform1f(n.alpha, e.worldAlpha * i.alpha), a.bindBuffer(a.ARRAY_BUFFER, i.buffer), a.vertexAttribPointer(n.aVertexPosition, 2, a.FLOAT, !1, 8, 0), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, i.indexBuffer)) : (n = s.shaderManager.primitiveShader, s.shaderManager.setShader(n), a.uniformMatrix3fv(n.translationMatrix, !1, e.worldTransform.toArray(!0)), a.uniform2f(n.projectionVector, r.x, -r.y), a.uniform2f(n.offsetVector, -o.x, -o.y), a.uniform3fv(n.tintColor, t.hex2rgb(e.tint)), a.uniform1f(n.alpha, e.worldAlpha), a.bindBuffer(a.ARRAY_BUFFER, i.buffer), a.vertexAttribPointer(n.aVertexPosition, 2, a.FLOAT, !1, 24, 0), a.vertexAttribPointer(n.colorAttribute, 4, a.FLOAT, !1, 24, 8), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, i.indexBuffer))
        }, t.WebGLStencilManager.prototype.popStencil = function(e, t, i) {
            var s = this.gl;
            if (this.stencilStack.pop(), this.count--, 0 === this.stencilStack.length) s.disable(s.STENCIL_TEST);
            else {
                var n = this.count;
                this.bindGraphics(e, t, i), s.colorMask(!1, !1, !1, !1), 1 === t.mode ? (this.reverse = !this.reverse, this.reverse ? (s.stencilFunc(s.EQUAL, 255 - (n + 1), 255), s.stencilOp(s.KEEP, s.KEEP, s.INCR)) : (s.stencilFunc(s.EQUAL, n + 1, 255), s.stencilOp(s.KEEP, s.KEEP, s.DECR)), s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (t.indices.length - 4)), s.stencilFunc(s.ALWAYS, 0, 255), s.stencilOp(s.KEEP, s.KEEP, s.INVERT), s.drawElements(s.TRIANGLE_FAN, t.indices.length - 4, s.UNSIGNED_SHORT, 0), this.reverse ? s.stencilFunc(s.EQUAL, n, 255) : s.stencilFunc(s.EQUAL, 255 - n, 255)) : (this.reverse ? (s.stencilFunc(s.EQUAL, n + 1, 255), s.stencilOp(s.KEEP, s.KEEP, s.DECR)) : (s.stencilFunc(s.EQUAL, 255 - (n + 1), 255), s.stencilOp(s.KEEP, s.KEEP, s.INCR)), s.drawElements(s.TRIANGLE_STRIP, t.indices.length, s.UNSIGNED_SHORT, 0), this.reverse ? s.stencilFunc(s.EQUAL, n, 255) : s.stencilFunc(s.EQUAL, 255 - n, 255)), s.colorMask(!0, !0, !0, !0), s.stencilOp(s.KEEP, s.KEEP, s.KEEP)
            }
        }, t.WebGLStencilManager.prototype.destroy = function() {
            this.maskStack = null, this.gl = null
        }, t.WebGLShaderManager = function(e) {
            this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [], this.shaderMap = [];
            for (var t = 0; t < this.maxAttibs; t++) this.attribState[t] = !1;
            this.setContext(e)
        }, t.WebGLShaderManager.prototype.setContext = function(e) {
            this.gl = e, this.primitiveShader = new t.PrimitiveShader(e), this.complexPrimativeShader = new t.ComplexPrimitiveShader(e), this.defaultShader = new t.PixiShader(e), this.fastShader = new t.PixiFastShader(e), this.stripShader = new t.StripShader(e), this.setShader(this.defaultShader)
        }, t.WebGLShaderManager.prototype.setAttribs = function(e) {
            var t;
            for (t = 0; t < this.tempAttribState.length; t++) this.tempAttribState[t] = !1;
            for (t = 0; t < e.length; t++) {
                var i = e[t];
                this.tempAttribState[i] = !0
            }
            var s = this.gl;
            for (t = 0; t < this.attribState.length; t++) this.attribState[t] !== this.tempAttribState[t] && (this.attribState[t] = this.tempAttribState[t], this.tempAttribState[t] ? s.enableVertexAttribArray(t) : s.disableVertexAttribArray(t))
        }, t.WebGLShaderManager.prototype.setShader = function(e) {
            return this._currentId === e._UID ? !1 : (this._currentId = e._UID, this.currentShader = e, this.gl.useProgram(e.program), this.setAttribs(e.attributes), !0)
        }, t.WebGLShaderManager.prototype.destroy = function() {
            this.attribState = null, this.tempAttribState = null, this.primitiveShader.destroy(), this.defaultShader.destroy(), this.fastShader.destroy(), this.stripShader.destroy(), this.gl = null
        }, t.WebGLSpriteBatch = function(e) {
            this.vertSize = 6, this.size = 2e3;
            var t = 4 * this.size * this.vertSize,
                i = 6 * this.size;
            this.vertices = new Float32Array(t), this.indices = new Uint16Array(i), this.lastIndexCount = 0;
            for (var s = 0, n = 0; i > s; s += 6, n += 4) this.indices[s + 0] = n + 0, this.indices[s + 1] = n + 1, this.indices[s + 2] = n + 2, this.indices[s + 3] = n + 0, this.indices[s + 4] = n + 2, this.indices[s + 5] = n + 3;
            this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.setContext(e), this.dirty = !0, this.textures = [], this.blendModes = []
        }, t.WebGLSpriteBatch.prototype.setContext = function(e) {
            this.gl = e, this.vertexBuffer = e.createBuffer(), this.indexBuffer = e.createBuffer(), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.vertices, e.DYNAMIC_DRAW), this.currentBlendMode = 99999
        }, t.WebGLSpriteBatch.prototype.begin = function(e) {
            this.renderSession = e, this.shader = this.renderSession.shaderManager.defaultShader, this.start()
        }, t.WebGLSpriteBatch.prototype.end = function() {
            this.flush()
        }, t.WebGLSpriteBatch.prototype.render = function(e) {
            var t = e.texture;
            this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = t.baseTexture);
            var i = t._uvs;
            if (i) {
                var s, n, a, r, o = e.worldAlpha,
                    h = e.tint,
                    l = this.vertices,
                    d = e.anchor.x,
                    u = e.anchor.y;
                if (t.trim) {
                    var c = t.trim;
                    n = c.x - d * c.width, s = n + t.crop.width, r = c.y - u * c.height, a = r + t.crop.height
                } else s = t.frame.width * (1 - d), n = t.frame.width * -d, a = t.frame.height * (1 - u), r = t.frame.height * -u;
                var p = 4 * this.currentBatchSize * this.vertSize,
                    m = e.worldTransform,
                    g = m.a,
                    f = m.c,
                    y = m.b,
                    v = m.d,
                    b = m.tx,
                    x = m.ty;
                l[p++] = g * n + y * r + b, l[p++] = v * r + f * n + x, l[p++] = i.x0, l[p++] = i.y0, l[p++] = o, l[p++] = h, l[p++] = g * s + y * r + b, l[p++] = v * r + f * s + x, l[p++] = i.x1, l[p++] = i.y1, l[p++] = o, l[p++] = h, l[p++] = g * s + y * a + b, l[p++] = v * a + f * s + x, l[p++] = i.x2, l[p++] = i.y2, l[p++] = o, l[p++] = h, l[p++] = g * n + y * a + b, l[p++] = v * a + f * n + x, l[p++] = i.x3, l[p++] = i.y3, l[p++] = o, l[p++] = h, this.textures[this.currentBatchSize] = e.texture.baseTexture, this.blendModes[this.currentBatchSize] = e.blendMode, this.currentBatchSize++
            }
        }, t.WebGLSpriteBatch.prototype.renderTilingSprite = function(e) {
            var i = e.tilingTexture;
            this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = i.baseTexture), e._uvs || (e._uvs = new t.TextureUvs);
            var s = e._uvs;
            e.tilePosition.x %= i.baseTexture.width * e.tileScaleOffset.x, e.tilePosition.y %= i.baseTexture.height * e.tileScaleOffset.y;
            var n = e.tilePosition.x / (i.baseTexture.width * e.tileScaleOffset.x),
                a = e.tilePosition.y / (i.baseTexture.height * e.tileScaleOffset.y),
                r = e.width / i.baseTexture.width / (e.tileScale.x * e.tileScaleOffset.x),
                o = e.height / i.baseTexture.height / (e.tileScale.y * e.tileScaleOffset.y);
            s.x0 = 0 - n, s.y0 = 0 - a, s.x1 = 1 * r - n, s.y1 = 0 - a, s.x2 = 1 * r - n, s.y2 = 1 * o - a, s.x3 = 0 - n, s.y3 = 1 * o - a;
            var h = e.worldAlpha,
                l = e.tint,
                d = this.vertices,
                u = e.width,
                c = e.height,
                p = e.anchor.x,
                m = e.anchor.y,
                g = u * (1 - p),
                f = u * -p,
                y = c * (1 - m),
                v = c * -m,
                b = 4 * this.currentBatchSize * this.vertSize,
                x = e.worldTransform,
                w = x.a,
                T = x.c,
                S = x.b,
                C = x.d,
                A = x.tx,
                M = x.ty;
            d[b++] = w * f + S * v + A, d[b++] = C * v + T * f + M, d[b++] = s.x0, d[b++] = s.y0, d[b++] = h, d[b++] = l, d[b++] = w * g + S * v + A, d[b++] = C * v + T * g + M, d[b++] = s.x1, d[b++] = s.y1, d[b++] = h, d[b++] = l, d[b++] = w * g + S * y + A, d[b++] = C * y + T * g + M, d[b++] = s.x2, d[b++] = s.y2, d[b++] = h, d[b++] = l, d[b++] = w * f + S * y + A, d[b++] = C * y + T * f + M, d[b++] = s.x3, d[b++] = s.y3, d[b++] = h, d[b++] = l, this.textures[this.currentBatchSize] = i.baseTexture, this.blendModes[this.currentBatchSize] = e.blendMode, this.currentBatchSize++
        }, t.WebGLSpriteBatch.prototype.flush = function() {
            if (0 !== this.currentBatchSize) {
                var e = this.gl;
                if (this.renderSession.shaderManager.setShader(this.renderSession.shaderManager.defaultShader), this.dirty) {
                    this.dirty = !1, e.activeTexture(e.TEXTURE0), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                    var t = this.renderSession.projection;
                    e.uniform2f(this.shader.projectionVector, t.x, t.y);
                    var i = 4 * this.vertSize;
                    e.vertexAttribPointer(this.shader.aVertexPosition, 2, e.FLOAT, !1, i, 0), e.vertexAttribPointer(this.shader.aTextureCoord, 2, e.FLOAT, !1, i, 8), e.vertexAttribPointer(this.shader.colorAttribute, 2, e.FLOAT, !1, i, 16)
                }
                if (this.currentBatchSize > .5 * this.size) e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
                else {
                    var s = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                    e.bufferSubData(e.ARRAY_BUFFER, 0, s)
                }
                for (var n, a, r = 0, o = 0, h = null, l = this.renderSession.blendModeManager.currentBlendMode, d = 0, u = this.currentBatchSize; u > d; d++) n = this.textures[d], a = this.blendModes[d], (h !== n || l !== a) && (this.renderBatch(h, r, o), o = d, r = 0, h = n, l = a, this.renderSession.blendModeManager.setBlendMode(l)), r++;
                this.renderBatch(h, r, o), this.currentBatchSize = 0
            }
        }, t.WebGLSpriteBatch.prototype.renderBatch = function(e, i, s) {
            if (0 !== i) {
                var n = this.gl;
                n.bindTexture(n.TEXTURE_2D, e._glTextures[n.id] || t.createWebGLTexture(e, n)), e._dirty[n.id] && t.updateWebGLTexture(this.currentBaseTexture, n), n.drawElements(n.TRIANGLES, 6 * i, n.UNSIGNED_SHORT, 6 * s * 2), this.renderSession.drawCount++
            }
        }, t.WebGLSpriteBatch.prototype.stop = function() {
            this.flush()
        }, t.WebGLSpriteBatch.prototype.start = function() {
            this.dirty = !0
        }, t.WebGLSpriteBatch.prototype.destroy = function() {
            this.vertices = null, this.indices = null, this.gl.deleteBuffer(this.vertexBuffer), this.gl.deleteBuffer(this.indexBuffer), this.currentBaseTexture = null, this.gl = null
        }, t.WebGLFastSpriteBatch = function(e) {
            this.vertSize = 10, this.maxSize = 6e3, this.size = this.maxSize;
            var t = 4 * this.size * this.vertSize,
                i = 6 * this.maxSize;
            this.vertices = new Float32Array(t), this.indices = new Uint16Array(i), this.vertexBuffer = null, this.indexBuffer = null, this.lastIndexCount = 0;
            for (var s = 0, n = 0; i > s; s += 6, n += 4) this.indices[s + 0] = n + 0, this.indices[s + 1] = n + 1, this.indices[s + 2] = n + 2, this.indices[s + 3] = n + 0, this.indices[s + 4] = n + 2, this.indices[s + 5] = n + 3;
            this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.currentBlendMode = 0, this.renderSession = null, this.shader = null, this.matrix = null, this.setContext(e)
        }, t.WebGLFastSpriteBatch.prototype.setContext = function(e) {
            this.gl = e, this.vertexBuffer = e.createBuffer(), this.indexBuffer = e.createBuffer(), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.vertices, e.DYNAMIC_DRAW)
        }, t.WebGLFastSpriteBatch.prototype.begin = function(e, t) {
            this.renderSession = t, this.shader = this.renderSession.shaderManager.fastShader, this.matrix = e.worldTransform.toArray(!0), this.start()
        }, t.WebGLFastSpriteBatch.prototype.end = function() {
            this.flush()
        }, t.WebGLFastSpriteBatch.prototype.render = function(e) {
            var t = e.children,
                i = t[0];
            if (i.texture._uvs) {
                this.currentBaseTexture = i.texture.baseTexture, i.blendMode !== this.renderSession.blendModeManager.currentBlendMode && (this.flush(), this.renderSession.blendModeManager.setBlendMode(i.blendMode));
                for (var s = 0, n = t.length; n > s; s++) this.renderSprite(t[s]);
                this.flush()
            }
        }, t.WebGLFastSpriteBatch.prototype.renderSprite = function(e) {
            if (e.visible && (e.texture.baseTexture === this.currentBaseTexture || (this.flush(), this.currentBaseTexture = e.texture.baseTexture, e.texture._uvs))) {
                var t, i, s, n, a, r, o, h, l = this.vertices;
                if (t = e.texture._uvs, i = e.texture.frame.width, s = e.texture.frame.height, e.texture.trim) {
                    var d = e.texture.trim;
                    a = d.x - e.anchor.x * d.width, n = a + e.texture.crop.width, o = d.y - e.anchor.y * d.height, r = o + e.texture.crop.height
                } else n = e.texture.frame.width * (1 - e.anchor.x), a = e.texture.frame.width * -e.anchor.x, r = e.texture.frame.height * (1 - e.anchor.y), o = e.texture.frame.height * -e.anchor.y;
                h = 4 * this.currentBatchSize * this.vertSize, l[h++] = a, l[h++] = o, l[h++] = e.position.x, l[h++] = e.position.y, l[h++] = e.scale.x, l[h++] = e.scale.y, l[h++] = e.rotation, l[h++] = t.x0, l[h++] = t.y1, l[h++] = e.alpha, l[h++] = n, l[h++] = o, l[h++] = e.position.x, l[h++] = e.position.y, l[h++] = e.scale.x, l[h++] = e.scale.y, l[h++] = e.rotation, l[h++] = t.x1, l[h++] = t.y1, l[h++] = e.alpha, l[h++] = n, l[h++] = r, l[h++] = e.position.x, l[h++] = e.position.y, l[h++] = e.scale.x, l[h++] = e.scale.y, l[h++] = e.rotation, l[h++] = t.x2, l[h++] = t.y2, l[h++] = e.alpha, l[h++] = a, l[h++] = r, l[h++] = e.position.x, l[h++] = e.position.y, l[h++] = e.scale.x, l[h++] = e.scale.y, l[h++] = e.rotation, l[h++] = t.x3, l[h++] = t.y3, l[h++] = e.alpha, this.currentBatchSize++, this.currentBatchSize >= this.size && this.flush()
            }
        }, t.WebGLFastSpriteBatch.prototype.flush = function() {
            if (0 !== this.currentBatchSize) {
                var e = this.gl;
                if (this.currentBaseTexture._glTextures[e.id] || t.createWebGLTexture(this.currentBaseTexture, e), e.bindTexture(e.TEXTURE_2D, this.currentBaseTexture._glTextures[e.id]), this.currentBatchSize > .5 * this.size) e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
                else {
                    var i = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                    e.bufferSubData(e.ARRAY_BUFFER, 0, i)
                }
                e.drawElements(e.TRIANGLES, 6 * this.currentBatchSize, e.UNSIGNED_SHORT, 0), this.currentBatchSize = 0, this.renderSession.drawCount++
            }
        }, t.WebGLFastSpriteBatch.prototype.stop = function() {
            this.flush()
        }, t.WebGLFastSpriteBatch.prototype.start = function() {
            var e = this.gl;
            e.activeTexture(e.TEXTURE0), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var t = this.renderSession.projection;
            e.uniform2f(this.shader.projectionVector, t.x, t.y), e.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix);
            var i = 4 * this.vertSize;
            e.vertexAttribPointer(this.shader.aVertexPosition, 2, e.FLOAT, !1, i, 0), e.vertexAttribPointer(this.shader.aPositionCoord, 2, e.FLOAT, !1, i, 8), e.vertexAttribPointer(this.shader.aScale, 2, e.FLOAT, !1, i, 16), e.vertexAttribPointer(this.shader.aRotation, 1, e.FLOAT, !1, i, 24), e.vertexAttribPointer(this.shader.aTextureCoord, 2, e.FLOAT, !1, i, 28), e.vertexAttribPointer(this.shader.colorAttribute, 1, e.FLOAT, !1, i, 36)
        }, t.WebGLFilterManager = function(e, t) {
            this.transparent = t, this.filterStack = [], this.offsetX = 0, this.offsetY = 0, this.setContext(e)
        }, t.WebGLFilterManager.prototype.setContext = function(e) {
            this.gl = e, this.texturePool = [], this.initShaderBuffers()
        }, t.WebGLFilterManager.prototype.begin = function(e, t) {
            this.renderSession = e, this.defaultShader = e.shaderManager.defaultShader;
            var i = this.renderSession.projection;
            this.width = 2 * i.x, this.height = 2 * -i.y, this.buffer = t
        }, t.WebGLFilterManager.prototype.pushFilter = function(e) {
            var i = this.gl,
                s = this.renderSession.projection,
                n = this.renderSession.offset;
            e._filterArea = e.target.filterArea || e.target.getBounds(), this.filterStack.push(e);
            var a = e.filterPasses[0];
            this.offsetX += e._filterArea.x, this.offsetY += e._filterArea.y;
            var r = this.texturePool.pop();
            r ? r.resize(this.width, this.height) : r = new t.FilterTexture(this.gl, this.width, this.height), i.bindTexture(i.TEXTURE_2D, r.texture);
            var o = e._filterArea,
                h = a.padding;
            o.x -= h, o.y -= h, o.width += 2 * h, o.height += 2 * h, o.x < 0 && (o.x = 0), o.width > this.width && (o.width = this.width), o.y < 0 && (o.y = 0), o.height > this.height && (o.height = this.height), i.bindFramebuffer(i.FRAMEBUFFER, r.frameBuffer), i.viewport(0, 0, o.width, o.height), s.x = o.width / 2, s.y = -o.height / 2, n.x = -o.x, n.y = -o.y, this.renderSession.shaderManager.setShader(this.defaultShader), i.uniform2f(this.defaultShader.projectionVector, o.width / 2, -o.height / 2), i.uniform2f(this.defaultShader.offsetVector, -o.x, -o.y), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), e._glFilterTexture = r
        }, t.WebGLFilterManager.prototype.popFilter = function() {
            var e = this.gl,
                i = this.filterStack.pop(),
                s = i._filterArea,
                n = i._glFilterTexture,
                a = this.renderSession.projection,
                r = this.renderSession.offset;
            if (i.filterPasses.length > 1) {
                e.viewport(0, 0, s.width, s.height), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = 0, this.vertexArray[1] = s.height, this.vertexArray[2] = s.width, this.vertexArray[3] = s.height, this.vertexArray[4] = 0, this.vertexArray[5] = 0, this.vertexArray[6] = s.width, this.vertexArray[7] = 0, e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertexArray), e.bindBuffer(e.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = s.width / this.width, this.uvArray[5] = s.height / this.height, this.uvArray[6] = s.width / this.width, this.uvArray[7] = s.height / this.height, e.bufferSubData(e.ARRAY_BUFFER, 0, this.uvArray);
                var o = n,
                    h = this.texturePool.pop();
                h || (h = new t.FilterTexture(this.gl, this.width, this.height)), h.resize(this.width, this.height), e.bindFramebuffer(e.FRAMEBUFFER, h.frameBuffer), e.clear(e.COLOR_BUFFER_BIT), e.disable(e.BLEND);
                for (var l = 0; l < i.filterPasses.length - 1; l++) {
                    var d = i.filterPasses[l];
                    e.bindFramebuffer(e.FRAMEBUFFER, h.frameBuffer), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, o.texture), this.applyFilterPass(d, s, s.width, s.height);
                    var u = o;
                    o = h, h = u
                }
                e.enable(e.BLEND), n = o, this.texturePool.push(h)
            }
            var c = i.filterPasses[i.filterPasses.length - 1];
            this.offsetX -= s.x, this.offsetY -= s.y;
            var p = this.width,
                m = this.height,
                g = 0,
                f = 0,
                y = this.buffer;
            if (0 === this.filterStack.length) e.colorMask(!0, !0, !0, !0);
            else {
                var v = this.filterStack[this.filterStack.length - 1];
                s = v._filterArea, p = s.width, m = s.height, g = s.x, f = s.y, y = v._glFilterTexture.frameBuffer
            }
            a.x = p / 2, a.y = -m / 2, r.x = g, r.y = f, s = i._filterArea;
            var b = s.x - g,
                x = s.y - f;
            e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = b, this.vertexArray[1] = x + s.height, this.vertexArray[2] = b + s.width, this.vertexArray[3] = x + s.height, this.vertexArray[4] = b, this.vertexArray[5] = x, this.vertexArray[6] = b + s.width, this.vertexArray[7] = x, e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertexArray), e.bindBuffer(e.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = s.width / this.width, this.uvArray[5] = s.height / this.height, this.uvArray[6] = s.width / this.width, this.uvArray[7] = s.height / this.height, e.bufferSubData(e.ARRAY_BUFFER, 0, this.uvArray), e.viewport(0, 0, p, m), e.bindFramebuffer(e.FRAMEBUFFER, y), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, n.texture), this.applyFilterPass(c, s, p, m), this.renderSession.shaderManager.setShader(this.defaultShader), e.uniform2f(this.defaultShader.projectionVector, p / 2, -m / 2), e.uniform2f(this.defaultShader.offsetVector, -g, -f), this.texturePool.push(n), i._glFilterTexture = null
        }, t.WebGLFilterManager.prototype.applyFilterPass = function(e, i, s, n) {
            var a = this.gl,
                r = e.shaders[a.id];
            r || (r = new t.PixiShader(a), r.fragmentSrc = e.fragmentSrc, r.uniforms = e.uniforms, r.init(), e.shaders[a.id] = r), this.renderSession.shaderManager.setShader(r), a.uniform2f(r.projectionVector, s / 2, -n / 2), a.uniform2f(r.offsetVector, 0, 0), e.uniforms.dimensions && (e.uniforms.dimensions.value[0] = this.width, e.uniforms.dimensions.value[1] = this.height, e.uniforms.dimensions.value[2] = this.vertexArray[0], e.uniforms.dimensions.value[3] = this.vertexArray[5]), r.syncUniforms(), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.vertexAttribPointer(r.aVertexPosition, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), a.vertexAttribPointer(r.aTextureCoord, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, this.colorBuffer), a.vertexAttribPointer(r.colorAttribute, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0), this.renderSession.drawCount++
        }, t.WebGLFilterManager.prototype.initShaderBuffers = function() {
            var e = this.gl;
            this.vertexBuffer = e.createBuffer(), this.uvBuffer = e.createBuffer(), this.colorBuffer = e.createBuffer(), this.indexBuffer = e.createBuffer(), this.vertexArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.vertexArray, e.STATIC_DRAW), this.uvArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), e.bindBuffer(e.ARRAY_BUFFER, this.uvBuffer), e.bufferData(e.ARRAY_BUFFER, this.uvArray, e.STATIC_DRAW), this.colorArray = new Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]), e.bindBuffer(e.ARRAY_BUFFER, this.colorBuffer), e.bufferData(e.ARRAY_BUFFER, this.colorArray, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), e.STATIC_DRAW)
        }, t.WebGLFilterManager.prototype.destroy = function() {
            var e = this.gl;
            this.filterStack = null, this.offsetX = 0, this.offsetY = 0;
            for (var t = 0; t < this.texturePool.length; t++) this.texturePool[t].destroy();
            this.texturePool = null, e.deleteBuffer(this.vertexBuffer), e.deleteBuffer(this.uvBuffer), e.deleteBuffer(this.colorBuffer), e.deleteBuffer(this.indexBuffer)
        }, t.FilterTexture = function(e, i, s, n) {
            this.gl = e, this.frameBuffer = e.createFramebuffer(), this.texture = e.createTexture(), n = n || t.scaleModes.DEFAULT, e.bindTexture(e.TEXTURE_2D, this.texture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, n === t.scaleModes.LINEAR ? e.LINEAR : e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n === t.scaleModes.LINEAR ? e.LINEAR : e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer), e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture, 0), this.renderBuffer = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, this.renderBuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, this.renderBuffer), this.resize(i, s)
        }, t.FilterTexture.prototype.clear = function() {
            var e = this.gl;
            e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT)
        }, t.FilterTexture.prototype.resize = function(e, t) {
            if (this.width !== e || this.height !== t) {
                this.width = e, this.height = t;
                var i = this.gl;
                i.bindTexture(i.TEXTURE_2D, this.texture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, e, t, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.bindRenderbuffer(i.RENDERBUFFER, this.renderBuffer), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, e, t)
            }
        }, t.FilterTexture.prototype.destroy = function() {
            var e = this.gl;
            e.deleteFramebuffer(this.frameBuffer), e.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
        }, t.CanvasMaskManager = function() {}, t.CanvasMaskManager.prototype.pushMask = function(e, i) {
            i.save();
            var s = e.alpha,
                n = e.worldTransform;
            i.setTransform(n.a, n.c, n.b, n.d, n.tx, n.ty), t.CanvasGraphics.renderGraphicsMask(e, i), i.clip(), e.worldAlpha = s
        }, t.CanvasMaskManager.prototype.popMask = function(e) {
            e.restore()
        }, t.CanvasTinter = function() {}, t.CanvasTinter.getTintedTexture = function(e, i) {
            var s = e.texture;
            i = t.CanvasTinter.roundColor(i);
            var n = "#" + ("00000" + (0 | i).toString(16)).substr(-6);
            if (s.tintCache = s.tintCache || {}, s.tintCache[n]) return s.tintCache[n];
            var a = t.CanvasTinter.canvas || document.createElement("canvas");
            if (t.CanvasTinter.tintMethod(s, i, a), t.CanvasTinter.convertTintToImage) {
                var r = new Image;
                r.src = a.toDataURL(), s.tintCache[n] = r
            } else s.tintCache[n] = a, t.CanvasTinter.canvas = null;
            return a
        }, t.CanvasTinter.tintWithMultiply = function(e, t, i) {
            var s = i.getContext("2d"),
                n = e.frame;
            i.width = n.width, i.height = n.height, s.fillStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), s.fillRect(0, 0, n.width, n.height), s.globalCompositeOperation = "multiply", s.drawImage(e.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), s.globalCompositeOperation = "destination-atop", s.drawImage(e.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
        }, t.CanvasTinter.tintWithOverlay = function(e, t, i) {
            var s = i.getContext("2d"),
                n = e.frame;
            i.width = n.width, i.height = n.height, s.globalCompositeOperation = "copy", s.fillStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), s.fillRect(0, 0, n.width, n.height), s.globalCompositeOperation = "destination-atop", s.drawImage(e.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
        }, t.CanvasTinter.tintWithPerPixel = function(e, i, s) {
            var n = s.getContext("2d"),
                a = e.frame;
            s.width = a.width, s.height = a.height, n.globalCompositeOperation = "copy", n.drawImage(e.baseTexture.source, a.x, a.y, a.width, a.height, 0, 0, a.width, a.height);
            for (var r = t.hex2rgb(i), o = r[0], h = r[1], l = r[2], d = n.getImageData(0, 0, a.width, a.height), u = d.data, c = 0; c < u.length; c += 4) u[c + 0] *= o, u[c + 1] *= h, u[c + 2] *= l;
            n.putImageData(d, 0, 0)
        }, t.CanvasTinter.roundColor = function(e) {
            var i = t.CanvasTinter.cacheStepsPerColorChannel,
                s = t.hex2rgb(e);
            return s[0] = Math.min(255, s[0] / i * i), s[1] = Math.min(255, s[1] / i * i), s[2] = Math.min(255, s[2] / i * i), t.rgb2hex(s)
        }, t.CanvasTinter.cacheStepsPerColorChannel = 8, t.CanvasTinter.convertTintToImage = !1, t.CanvasTinter.canUseMultiply = t.canUseNewCanvasBlendModes(), t.CanvasTinter.tintMethod = t.CanvasTinter.canUseMultiply ? t.CanvasTinter.tintWithMultiply : t.CanvasTinter.tintWithPerPixel, t.CanvasRenderer = function(e, i, s, n) {
            t.defaultRenderer || (t.sayHello("Canvas"), t.defaultRenderer = this), this.type = t.CANVAS_RENDERER, this.clearBeforeRender = !0, this.transparent = !!n, t.blendModesCanvas || (t.blendModesCanvas = [], t.canUseNewCanvasBlendModes() ? (t.blendModesCanvas[t.blendModes.NORMAL] = "source-over", t.blendModesCanvas[t.blendModes.ADD] = "lighter", t.blendModesCanvas[t.blendModes.MULTIPLY] = "multiply", t.blendModesCanvas[t.blendModes.SCREEN] = "screen", t.blendModesCanvas[t.blendModes.OVERLAY] = "overlay", t.blendModesCanvas[t.blendModes.DARKEN] = "darken", t.blendModesCanvas[t.blendModes.LIGHTEN] = "lighten", t.blendModesCanvas[t.blendModes.COLOR_DODGE] = "color-dodge", t.blendModesCanvas[t.blendModes.COLOR_BURN] = "color-burn", t.blendModesCanvas[t.blendModes.HARD_LIGHT] = "hard-light", t.blendModesCanvas[t.blendModes.SOFT_LIGHT] = "soft-light", t.blendModesCanvas[t.blendModes.DIFFERENCE] = "difference", t.blendModesCanvas[t.blendModes.EXCLUSION] = "exclusion", t.blendModesCanvas[t.blendModes.HUE] = "hue", t.blendModesCanvas[t.blendModes.SATURATION] = "saturation", t.blendModesCanvas[t.blendModes.COLOR] = "color", t.blendModesCanvas[t.blendModes.LUMINOSITY] = "luminosity") : (t.blendModesCanvas[t.blendModes.NORMAL] = "source-over", t.blendModesCanvas[t.blendModes.ADD] = "lighter", t.blendModesCanvas[t.blendModes.MULTIPLY] = "source-over", t.blendModesCanvas[t.blendModes.SCREEN] = "source-over", t.blendModesCanvas[t.blendModes.OVERLAY] = "source-over", t.blendModesCanvas[t.blendModes.DARKEN] = "source-over", t.blendModesCanvas[t.blendModes.LIGHTEN] = "source-over", t.blendModesCanvas[t.blendModes.COLOR_DODGE] = "source-over", t.blendModesCanvas[t.blendModes.COLOR_BURN] = "source-over", t.blendModesCanvas[t.blendModes.HARD_LIGHT] = "source-over", t.blendModesCanvas[t.blendModes.SOFT_LIGHT] = "source-over", t.blendModesCanvas[t.blendModes.DIFFERENCE] = "source-over", t.blendModesCanvas[t.blendModes.EXCLUSION] = "source-over", t.blendModesCanvas[t.blendModes.HUE] = "source-over", t.blendModesCanvas[t.blendModes.SATURATION] = "source-over", t.blendModesCanvas[t.blendModes.COLOR] = "source-over", t.blendModesCanvas[t.blendModes.LUMINOSITY] = "source-over")), this.width = e || 800, this.height = i || 600, this.view = s || document.createElement("canvas"), this.context = this.view.getContext("2d", {
                alpha: this.transparent
            }), this.refresh = !0, this.view.width = this.width, this.view.height = this.height, this.count = 0, this.maskManager = new t.CanvasMaskManager, this.renderSession = {
                context: this.context,
                maskManager: this.maskManager,
                scaleMode: null,
                smoothProperty: null,
                roundPixels: !1
            }, "imageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "imageSmoothingEnabled" : "webkitImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "webkitImageSmoothingEnabled" : "mozImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "mozImageSmoothingEnabled" : "oImageSmoothingEnabled" in this.context && (this.renderSession.smoothProperty = "oImageSmoothingEnabled")
        }, t.CanvasRenderer.prototype.constructor = t.CanvasRenderer, t.CanvasRenderer.prototype.render = function(e) {
            t.texturesToUpdate.length = 0, t.texturesToDestroy.length = 0, e.updateTransform(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()), !this.transparent && this.clearBeforeRender ? (this.context.fillStyle = e.backgroundColorString, this.context.fillRect(0, 0, this.width, this.height)) : this.transparent && this.clearBeforeRender && this.context.clearRect(0, 0, this.width, this.height), this.renderDisplayObject(e), e.interactive && (e._interactiveEventsAdded || (e._interactiveEventsAdded = !0, e.interactionManager.setTarget(this))), t.Texture.frameUpdates.length > 0 && (t.Texture.frameUpdates.length = 0)
        }, t.CanvasRenderer.prototype.resize = function(e, t) {
            this.width = e, this.height = t, this.view.width = e, this.view.height = t
        }, t.CanvasRenderer.prototype.renderDisplayObject = function(e, t) {
            this.renderSession.context = t || this.context, e._renderCanvas(this.renderSession)
        }, t.CanvasRenderer.prototype.renderStripFlat = function(e) {
            var t = this.context,
                i = e.verticies,
                s = i.length / 2;
            this.count++, t.beginPath();
            for (var n = 1; s - 2 > n; n++) {
                var a = 2 * n,
                    r = i[a],
                    o = i[a + 2],
                    h = i[a + 4],
                    l = i[a + 1],
                    d = i[a + 3],
                    u = i[a + 5];
                t.moveTo(r, l), t.lineTo(o, d), t.lineTo(h, u)
            }
            t.fillStyle = "#FF0000", t.fill(), t.closePath()
        }, t.CanvasRenderer.prototype.renderStrip = function(e) {
            var t = this.context,
                i = e.verticies,
                s = e.uvs,
                n = i.length / 2;
            this.count++;
            for (var a = 1; n - 2 > a; a++) {
                var r = 2 * a,
                    o = i[r],
                    h = i[r + 2],
                    l = i[r + 4],
                    d = i[r + 1],
                    u = i[r + 3],
                    c = i[r + 5],
                    p = s[r] * e.texture.width,
                    m = s[r + 2] * e.texture.width,
                    g = s[r + 4] * e.texture.width,
                    f = s[r + 1] * e.texture.height,
                    y = s[r + 3] * e.texture.height,
                    v = s[r + 5] * e.texture.height;
                t.save(), t.beginPath(), t.moveTo(o, d), t.lineTo(h, u), t.lineTo(l, c), t.closePath(), t.clip();
                var b = p * y + f * g + m * v - y * g - f * m - p * v,
                    x = o * y + f * l + h * v - y * l - f * h - o * v,
                    w = p * h + o * g + m * l - h * g - o * m - p * l,
                    T = p * y * l + f * h * g + o * m * v - o * y * g - f * m * l - p * h * v,
                    S = d * y + f * c + u * v - y * c - f * u - d * v,
                    C = p * u + d * g + m * c - u * g - d * m - p * c,
                    A = p * y * c + f * u * g + d * m * v - d * y * g - f * m * c - p * u * v;
                t.transform(x / b, S / b, w / b, C / b, T / b, A / b), t.drawImage(e.texture.baseTexture.source, 0, 0), t.restore()
            }
        }, t.CanvasBuffer = function(e, t) {
            this.width = e, this.height = t, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = e, this.canvas.height = t
        }, t.CanvasBuffer.prototype.clear = function() {
            this.context.clearRect(0, 0, this.width, this.height)
        }, t.CanvasBuffer.prototype.resize = function(e, t) {
            this.width = this.canvas.width = e, this.height = this.canvas.height = t
        }, t.CanvasGraphics = function() {}, t.CanvasGraphics.renderGraphics = function(e, i) {
            for (var s = e.worldAlpha, n = "", a = 0; a < e.graphicsData.length; a++) {
                var r = e.graphicsData[a],
                    o = r.points;
                if (i.strokeStyle = n = "#" + ("00000" + (0 | r.lineColor).toString(16)).substr(-6), i.lineWidth = r.lineWidth, r.type === t.Graphics.POLY) {
                    i.beginPath(), i.moveTo(o[0], o[1]);
                    for (var h = 1; h < o.length / 2; h++) i.lineTo(o[2 * h], o[2 * h + 1]);
                    o[0] === o[o.length - 2] && o[1] === o[o.length - 1] && i.closePath(), r.fill && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = n = "#" + ("00000" + (0 | r.fillColor).toString(16)).substr(-6), i.fill()), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.stroke())
                } else if (r.type === t.Graphics.RECT)(r.fillColor || 0 === r.fillColor) && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = n = "#" + ("00000" + (0 | r.fillColor).toString(16)).substr(-6), i.fillRect(o[0], o[1], o[2], o[3])), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.strokeRect(o[0], o[1], o[2], o[3]));
                else if (r.type === t.Graphics.CIRC) i.beginPath(), i.arc(o[0], o[1], o[2], 0, 2 * Math.PI), i.closePath(), r.fill && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = n = "#" + ("00000" + (0 | r.fillColor).toString(16)).substr(-6), i.fill()), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.stroke());
                else if (r.type === t.Graphics.ELIP) {
                    var l = r.points,
                        d = 2 * l[2],
                        u = 2 * l[3],
                        c = l[0] - d / 2,
                        p = l[1] - u / 2;
                    i.beginPath();
                    var m = .5522848,
                        g = d / 2 * m,
                        f = u / 2 * m,
                        y = c + d,
                        v = p + u,
                        b = c + d / 2,
                        x = p + u / 2;
                    i.moveTo(c, x), i.bezierCurveTo(c, x - f, b - g, p, b, p), i.bezierCurveTo(b + g, p, y, x - f, y, x), i.bezierCurveTo(y, x + f, b + g, v, b, v), i.bezierCurveTo(b - g, v, c, x + f, c, x), i.closePath(), r.fill && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = n = "#" + ("00000" + (0 | r.fillColor).toString(16)).substr(-6), i.fill()), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.stroke())
                } else if (r.type === t.Graphics.RREC) {
                    var w = o[0],
                        T = o[1],
                        S = o[2],
                        C = o[3],
                        A = o[4],
                        M = Math.min(S, C) / 2 | 0;
                    A = A > M ? M : A, i.beginPath(), i.moveTo(w, T + A), i.lineTo(w, T + C - A), i.quadraticCurveTo(w, T + C, w + A, T + C), i.lineTo(w + S - A, T + C), i.quadraticCurveTo(w + S, T + C, w + S, T + C - A), i.lineTo(w + S, T + A), i.quadraticCurveTo(w + S, T, w + S - A, T), i.lineTo(w + A, T), i.quadraticCurveTo(w, T, w, T + A), i.closePath(), (r.fillColor || 0 === r.fillColor) && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = n = "#" + ("00000" + (0 | r.fillColor).toString(16)).substr(-6), i.fill()), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.stroke())
                }
            }
        }, t.CanvasGraphics.renderGraphicsMask = function(e, i) {
            var s = e.graphicsData.length;
            if (0 !== s) {
                s > 1 && (s = 1, window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
                for (var n = 0; 1 > n; n++) {
                    var a = e.graphicsData[n],
                        r = a.points;
                    if (a.type === t.Graphics.POLY) {
                        i.beginPath(), i.moveTo(r[0], r[1]);
                        for (var o = 1; o < r.length / 2; o++) i.lineTo(r[2 * o], r[2 * o + 1]);
                        r[0] === r[r.length - 2] && r[1] === r[r.length - 1] && i.closePath()
                    } else if (a.type === t.Graphics.RECT) i.beginPath(), i.rect(r[0], r[1], r[2], r[3]), i.closePath();
                    else if (a.type === t.Graphics.CIRC) i.beginPath(), i.arc(r[0], r[1], r[2], 0, 2 * Math.PI), i.closePath();
                    else if (a.type === t.Graphics.ELIP) {
                        var h = a.points,
                            l = 2 * h[2],
                            d = 2 * h[3],
                            u = h[0] - l / 2,
                            c = h[1] - d / 2;
                        i.beginPath();
                        var p = .5522848,
                            m = l / 2 * p,
                            g = d / 2 * p,
                            f = u + l,
                            y = c + d,
                            v = u + l / 2,
                            b = c + d / 2;
                        i.moveTo(u, b), i.bezierCurveTo(u, b - g, v - m, c, v, c), i.bezierCurveTo(v + m, c, f, b - g, f, b), i.bezierCurveTo(f, b + g, v + m, y, v, y), i.bezierCurveTo(v - m, y, u, b + g, u, b), i.closePath()
                    } else if (a.type === t.Graphics.RREC) {
                        var x = r[0],
                            w = r[1],
                            T = r[2],
                            S = r[3],
                            C = r[4],
                            A = Math.min(T, S) / 2 | 0;
                        C = C > A ? A : C, i.beginPath(), i.moveTo(x, w + C), i.lineTo(x, w + S - C), i.quadraticCurveTo(x, w + S, x + C, w + S), i.lineTo(x + T - C, w + S), i.quadraticCurveTo(x + T, w + S, x + T, w + S - C), i.lineTo(x + T, w + C), i.quadraticCurveTo(x + T, w, x + T - C, w), i.lineTo(x + C, w), i.quadraticCurveTo(x, w, x, w + C), i.closePath()
                    }
                }
            }
        }, t.Graphics = function() {
            t.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = "black", this.graphicsData = [], this.tint = 16777215, this.blendMode = t.blendModes.NORMAL, this.currentPath = {
                points: []
            }, this._webGL = [], this.isMask = !1, this.bounds = null, this.boundsPadding = 10, this.dirty = !0
        }, t.Graphics.prototype = Object.create(t.DisplayObjectContainer.prototype), t.Graphics.prototype.constructor = t.Graphics, Object.defineProperty(t.Graphics.prototype, "cacheAsBitmap", {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(e) {
                this._cacheAsBitmap = e, this._cacheAsBitmap ? this._generateCachedSprite() : (this.destroyCachedSprite(), this.dirty = !0)
            }
        }), t.Graphics.prototype.lineStyle = function(e, i, s) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.lineWidth = e || 0, this.lineColor = i || 0, this.lineAlpha = arguments.length < 3 ? 1 : s, this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [],
                type: t.Graphics.POLY
            }, this.graphicsData.push(this.currentPath), this
        }, t.Graphics.prototype.moveTo = function(e, i) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [],
                type: t.Graphics.POLY
            }, this.currentPath.points.push(e, i), this.graphicsData.push(this.currentPath), this
        }, t.Graphics.prototype.lineTo = function(e, t) {
            return this.currentPath.points.push(e, t), this.dirty = !0, this
        }, t.Graphics.prototype.quadraticCurveTo = function(e, t, i, s) {
            0 === this.currentPath.points.length && this.moveTo(0, 0);
            var n, a, r = 20,
                o = this.currentPath.points;
            0 === o.length && this.moveTo(0, 0);
            for (var h = o[o.length - 2], l = o[o.length - 1], d = 0, u = 1; r >= u; u++) d = u / r, n = h + (e - h) * d, a = l + (t - l) * d, o.push(n + (e + (i - e) * d - n) * d, a + (t + (s - t) * d - a) * d);
            return this.dirty = !0, this
        }, t.Graphics.prototype.bezierCurveTo = function(e, t, i, s, n, a) {
            0 === this.currentPath.points.length && this.moveTo(0, 0);
            for (var r, o, h, l, d, u = 20, c = this.currentPath.points, p = c[c.length - 2], m = c[c.length - 1], g = 0, f = 1; u > f; f++) g = f / u, r = 1 - g, o = r * r, h = o * r, l = g * g, d = l * g, c.push(h * p + 3 * o * g * e + 3 * r * l * i + d * n, h * m + 3 * o * g * t + 3 * r * l * s + d * a);
            return this.dirty = !0, this
        }, t.Graphics.prototype.arcTo = function(e, t, i, s, n) {
            0 === this.currentPath.points.length && this.moveTo(e, t);
            var a = this.currentPath.points,
                r = a[a.length - 2],
                o = a[a.length - 1],
                h = o - t,
                l = r - e,
                d = s - t,
                u = i - e,
                c = Math.abs(h * u - l * d);
            if (1e-8 > c || 0 === n) a.push(e, t);
            else {
                var p = h * h + l * l,
                    m = d * d + u * u,
                    g = h * d + l * u,
                    f = n * Math.sqrt(p) / c,
                    y = n * Math.sqrt(m) / c,
                    v = f * g / p,
                    b = y * g / m,
                    x = f * u + y * l,
                    w = f * d + y * h,
                    T = l * (y + v),
                    S = h * (y + v),
                    C = u * (f + b),
                    A = d * (f + b),
                    M = Math.atan2(S - w, T - x),
                    E = Math.atan2(A - w, C - x);
                this.arc(x + e, w + t, n, M, E, l * d > u * h)
            }
            return this.dirty = !0, this
        }, t.Graphics.prototype.arc = function(e, t, i, s, n, a) {
            var r = e + Math.cos(s) * i,
                o = t + Math.sin(s) * i,
                h = this.currentPath.points;
            if ((0 !== h.length && h[h.length - 2] !== r || h[h.length - 1] !== o) && (this.moveTo(r, o), h = this.currentPath.points), s === n) return this;
            !a && s >= n ? n += 2 * Math.PI : a && n >= s && (s += 2 * Math.PI);
            var l = a ? -1 * (s - n) : n - s,
                d = Math.abs(l) / (2 * Math.PI) * 40;
            if (0 === l) return this;
            for (var u = l / (2 * d), c = 2 * u, p = Math.cos(u), m = Math.sin(u), g = d - 1, f = g % 1 / g, y = 0; g >= y; y++) {
                var v = y + f * y,
                    b = u + s + c * v,
                    x = Math.cos(b),
                    w = -Math.sin(b);
                h.push((p * x + m * w) * i + e, (p * -w + m * x) * i + t)
            }
            return this.dirty = !0, this
        }, t.Graphics.prototype.drawPath = function(e) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [],
                type: t.Graphics.POLY
            }, this.graphicsData.push(this.currentPath), this.currentPath.points = this.currentPath.points.concat(e), this.dirty = !0, this
        }, t.Graphics.prototype.beginFill = function(e, t) {
            return this.filling = !0, this.fillColor = e || 0, this.fillAlpha = arguments.length < 2 ? 1 : t, this
        }, t.Graphics.prototype.endFill = function() {
            return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
        }, t.Graphics.prototype.drawRect = function(e, i, s, n) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [e, i, s, n],
                type: t.Graphics.RECT
            }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
        }, t.Graphics.prototype.drawRoundedRect = function(e, i, s, n, a) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [e, i, s, n, a],
                type: t.Graphics.RREC
            }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
        }, t.Graphics.prototype.drawCircle = function(e, i, s) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [e, i, s, s],
                type: t.Graphics.CIRC
            }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
        }, t.Graphics.prototype.drawEllipse = function(e, i, s, n) {
            return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                lineWidth: this.lineWidth,
                lineColor: this.lineColor,
                lineAlpha: this.lineAlpha,
                fillColor: this.fillColor,
                fillAlpha: this.fillAlpha,
                fill: this.filling,
                points: [e, i, s, n],
                type: t.Graphics.ELIP
            }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
        }, t.Graphics.prototype.clear = function() {
            return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this.bounds = null, this
        }, t.Graphics.prototype.generateTexture = function() {
            var e = this.getBounds(),
                i = new t.CanvasBuffer(e.width, e.height),
                s = t.Texture.fromCanvas(i.canvas);
            return i.context.translate(-e.x, -e.y), t.CanvasGraphics.renderGraphics(this, i.context), s
        }, t.Graphics.prototype._renderWebGL = function(e) {
            if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                if (this._cacheAsBitmap) return this.dirty && (this._generateCachedSprite(), t.updateWebGLTexture(this._cachedSprite.texture.baseTexture, e.gl), this.dirty = !1), this._cachedSprite.alpha = this.alpha, void t.Sprite.prototype._renderWebGL.call(this._cachedSprite, e);
                if (e.spriteBatch.stop(), e.blendModeManager.setBlendMode(this.blendMode), this._mask && e.maskManager.pushMask(this._mask, e), this._filters && e.filterManager.pushFilter(this._filterBlock), this.blendMode !== e.spriteBatch.currentBlendMode) {
                    e.spriteBatch.currentBlendMode = this.blendMode;
                    var i = t.blendModesWebGL[e.spriteBatch.currentBlendMode];
                    e.spriteBatch.gl.blendFunc(i[0], i[1])
                }
                if (t.WebGLGraphics.renderGraphics(this, e), this.children.length) {
                    e.spriteBatch.start();
                    for (var s = 0, n = this.children.length; n > s; s++) this.children[s]._renderWebGL(e);
                    e.spriteBatch.stop()
                }
                this._filters && e.filterManager.popFilter(), this._mask && e.maskManager.popMask(this.mask, e), e.drawCount++, e.spriteBatch.start()
            }
        }, t.Graphics.prototype._renderCanvas = function(e) {
            if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                var i = e.context,
                    s = this.worldTransform;
                this.blendMode !== e.currentBlendMode && (e.currentBlendMode = this.blendMode, i.globalCompositeOperation = t.blendModesCanvas[e.currentBlendMode]), this._mask && e.maskManager.pushMask(this._mask, e.context), i.setTransform(s.a, s.c, s.b, s.d, s.tx, s.ty), t.CanvasGraphics.renderGraphics(this, i);
                for (var n = 0, a = this.children.length; a > n; n++) this.children[n]._renderCanvas(e);
                this._mask && e.maskManager.popMask(e.context)
            }
        }, t.Graphics.prototype.getBounds = function(e) {
            this.bounds || this.updateBounds();
            var t = this.bounds.x,
                i = this.bounds.width + this.bounds.x,
                s = this.bounds.y,
                n = this.bounds.height + this.bounds.y,
                a = e || this.worldTransform,
                r = a.a,
                o = a.c,
                h = a.b,
                l = a.d,
                d = a.tx,
                u = a.ty,
                c = r * i + h * n + d,
                p = l * n + o * i + u,
                m = r * t + h * n + d,
                g = l * n + o * t + u,
                f = r * t + h * s + d,
                y = l * s + o * t + u,
                v = r * i + h * s + d,
                b = l * s + o * i + u,
                x = c,
                w = p,
                T = c,
                S = p;
            T = T > m ? m : T, T = T > f ? f : T, T = T > v ? v : T, S = S > g ? g : S, S = S > y ? y : S, S = S > b ? b : S, x = m > x ? m : x, x = f > x ? f : x, x = v > x ? v : x, w = g > w ? g : w, w = y > w ? y : w, w = b > w ? b : w;
            var C = this._bounds;
            return C.x = T, C.width = x - T, C.y = S, C.height = w - S, C
        }, t.Graphics.prototype.updateBounds = function() {
            for (var e, i, s, n, a, r = 1 / 0, o = -1 / 0, h = 1 / 0, l = -1 / 0, d = 0; d < this.graphicsData.length; d++) {
                var u = this.graphicsData[d],
                    c = u.type,
                    p = u.lineWidth;
                if (e = u.points, c === t.Graphics.RECT) i = e[0] - p / 2, s = e[1] - p / 2, n = e[2] + p, a = e[3] + p, r = r > i ? i : r, o = i + n > o ? i + n : o, h = h > s ? i : h, l = s + a > l ? s + a : l;
                else if (c === t.Graphics.CIRC || c === t.Graphics.ELIP) i = e[0], s = e[1], n = e[2] + p / 2, a = e[3] + p / 2, r = r > i - n ? i - n : r, o = i + n > o ? i + n : o, h = h > s - a ? s - a : h, l = s + a > l ? s + a : l;
                else
                    for (var m = 0; m < e.length; m += 2) i = e[m], s = e[m + 1], r = r > i - p ? i - p : r, o = i + p > o ? i + p : o, h = h > s - p ? s - p : h, l = s + p > l ? s + p : l
            }
            var g = this.boundsPadding;
            this.bounds = new t.Rectangle(r - g, h - g, o - r + 2 * g, l - h + 2 * g)
        }, t.Graphics.prototype._generateCachedSprite = function() {
            var e = this.getLocalBounds();
            if (this._cachedSprite) this._cachedSprite.buffer.resize(e.width, e.height);
            else {
                var i = new t.CanvasBuffer(e.width, e.height),
                    s = t.Texture.fromCanvas(i.canvas);
                this._cachedSprite = new t.Sprite(s), this._cachedSprite.buffer = i, this._cachedSprite.worldTransform = this.worldTransform
            }
            this._cachedSprite.anchor.x = -(e.x / e.width), this._cachedSprite.anchor.y = -(e.y / e.height), this._cachedSprite.buffer.context.translate(-e.x, -e.y), t.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context), this._cachedSprite.alpha = this.alpha
        }, t.Graphics.prototype.destroyCachedSprite = function() {
            this._cachedSprite.texture.destroy(!0), this._cachedSprite = null
        }, t.Graphics.POLY = 0, t.Graphics.RECT = 1, t.Graphics.CIRC = 2, t.Graphics.ELIP = 3, t.Graphics.RREC = 4, t.Strip = function(e) {
            t.DisplayObjectContainer.call(this), this.texture = e, this.uvs = new t.Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.verticies = new t.Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.colors = new t.Float32Array([1, 1, 1, 1]), this.indices = new t.Uint16Array([0, 1, 2, 3]), this.dirty = !0
        }, t.Strip.prototype = Object.create(t.DisplayObjectContainer.prototype), t.Strip.prototype.constructor = t.Strip, t.Strip.prototype._renderWebGL = function(e) {
            !this.visible || this.alpha <= 0 || (e.spriteBatch.stop(), this._vertexBuffer || this._initWebGL(e), e.shaderManager.setShader(e.shaderManager.stripShader), this._renderStrip(e), e.spriteBatch.start())
        }, t.Strip.prototype._initWebGL = function(e) {
            var t = e.gl;
            this._vertexBuffer = t.createBuffer(), this._indexBuffer = t.createBuffer(), this._uvBuffer = t.createBuffer(), this._colorBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this._vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.verticies, t.DYNAMIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this._uvBuffer), t.bufferData(t.ARRAY_BUFFER, this.uvs, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this._colorBuffer), t.bufferData(t.ARRAY_BUFFER, this.colors, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW)
        }, t.Strip.prototype._renderStrip = function(e) {
            var i = e.gl,
                s = e.projection,
                n = e.offset,
                a = e.shaderManager.stripShader;
            i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA), i.uniformMatrix3fv(a.translationMatrix, !1, this.worldTransform.toArray(!0)), i.uniform2f(a.projectionVector, s.x, -s.y), i.uniform2f(a.offsetVector, -n.x, -n.y), i.uniform1f(a.alpha, 1), this.dirty ? (this.dirty = !1, i.bindBuffer(i.ARRAY_BUFFER, this._vertexBuffer), i.bufferData(i.ARRAY_BUFFER, this.verticies, i.STATIC_DRAW), i.vertexAttribPointer(a.aVertexPosition, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, this._uvBuffer), i.bufferData(i.ARRAY_BUFFER, this.uvs, i.STATIC_DRAW), i.vertexAttribPointer(a.aTextureCoord, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, this.texture.baseTexture._glTextures[i.id] || t.createWebGLTexture(this.texture.baseTexture, i)), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this._indexBuffer), i.bufferData(i.ELEMENT_ARRAY_BUFFER, this.indices, i.STATIC_DRAW)) : (i.bindBuffer(i.ARRAY_BUFFER, this._vertexBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.verticies), i.vertexAttribPointer(a.aVertexPosition, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, this._uvBuffer), i.vertexAttribPointer(a.aTextureCoord, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, this.texture.baseTexture._glTextures[i.id] || t.createWebGLTexture(this.texture.baseTexture, i)), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this._indexBuffer)), i.drawElements(i.TRIANGLE_STRIP, this.indices.length, i.UNSIGNED_SHORT, 0)
        }, t.Strip.prototype._renderCanvas = function(e) {
            var t = e.context,
                i = this.worldTransform;
            e.roundPixels ? t.setTransform(i.a, i.c, i.b, i.d, 0 | i.tx, 0 | i.ty) : t.setTransform(i.a, i.c, i.b, i.d, i.tx, i.ty);
            var s = this,
                n = s.verticies,
                a = s.uvs,
                r = n.length / 2;
            this.count++;
            for (var o = 0; r - 2 > o; o++) {
                var h = 2 * o,
                    l = n[h],
                    d = n[h + 2],
                    u = n[h + 4],
                    c = n[h + 1],
                    p = n[h + 3],
                    m = n[h + 5],
                    g = (l + d + u) / 3,
                    f = (c + p + m) / 3,
                    y = l - g,
                    v = c - f,
                    b = Math.sqrt(y * y + v * v);
                l = g + y / b * (b + 3), c = f + v / b * (b + 3), y = d - g, v = p - f, b = Math.sqrt(y * y + v * v), d = g + y / b * (b + 3), p = f + v / b * (b + 3), y = u - g, v = m - f, b = Math.sqrt(y * y + v * v), u = g + y / b * (b + 3), m = f + v / b * (b + 3);
                var x = a[h] * s.texture.width,
                    w = a[h + 2] * s.texture.width,
                    T = a[h + 4] * s.texture.width,
                    S = a[h + 1] * s.texture.height,
                    C = a[h + 3] * s.texture.height,
                    A = a[h + 5] * s.texture.height;
                t.save(), t.beginPath(), t.moveTo(l, c), t.lineTo(d, p), t.lineTo(u, m), t.closePath(), t.clip();
                var M = x * C + S * T + w * A - C * T - S * w - x * A,
                    E = l * C + S * u + d * A - C * u - S * d - l * A,
                    R = x * d + l * T + w * u - d * T - l * w - x * u,
                    _ = x * C * u + S * d * T + l * w * A - l * C * T - S * w * u - x * d * A,
                    L = c * C + S * m + p * A - C * m - S * p - c * A,
                    F = x * p + c * T + w * m - p * T - c * w - x * m,
                    P = x * C * m + S * p * T + c * w * A - c * C * T - S * w * m - x * p * A;
                t.transform(E / M, L / M, R / M, F / M, _ / M, P / M), t.drawImage(s.texture.baseTexture.source, 0, 0), t.restore()
            }
        }, t.Strip.prototype.onTextureUpdate = function() {
            this.updateFrame = !0
        }, t.Rope = function(e, i) {
            t.Strip.call(this, e), this.points = i, this.verticies = new t.Float32Array(4 * i.length), this.uvs = new t.Float32Array(4 * i.length), this.colors = new t.Float32Array(2 * i.length), this.indices = new t.Uint16Array(2 * i.length), this.refresh()
        }, t.Rope.prototype = Object.create(t.Strip.prototype), t.Rope.prototype.constructor = t.Rope, t.Rope.prototype.refresh = function() {
            var e = this.points;
            if (!(e.length < 1)) {
                var t = this.uvs,
                    i = e[0],
                    s = this.indices,
                    n = this.colors;
                this.count -= .2, t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, n[0] = 1, n[1] = 1, s[0] = 0, s[1] = 1;
                for (var a, r, o, h = e.length, l = 1; h > l; l++) a = e[l], r = 4 * l, o = l / (h - 1), l % 2 ? (t[r] = o, t[r + 1] = 0, t[r + 2] = o, t[r + 3] = 1) : (t[r] = o, t[r + 1] = 0, t[r + 2] = o, t[r + 3] = 1), r = 2 * l, n[r] = 1, n[r + 1] = 1, r = 2 * l, s[r] = r, s[r + 1] = r + 1, i = a
            }
        }, t.Rope.prototype.updateTransform = function() {
            var e = this.points;
            if (!(e.length < 1)) {
                var i, s = e[0],
                    n = {
                        x: 0,
                        y: 0
                    };
                this.count -= .2;
                for (var a, r, o, h, l, d = this.verticies, u = e.length, c = 0; u > c; c++) a = e[c], r = 4 * c, i = c < e.length - 1 ? e[c + 1] : a, n.y = -(i.x - s.x), n.x = i.y - s.y, o = 10 * (1 - c / (u - 1)), o > 1 && (o = 1), h = Math.sqrt(n.x * n.x + n.y * n.y), l = this.texture.height / 2, n.x /= h, n.y /= h, n.x *= l, n.y *= l, d[r] = a.x + n.x, d[r + 1] = a.y + n.y, d[r + 2] = a.x - n.x, d[r + 3] = a.y - n.y, s = a;
                t.DisplayObjectContainer.prototype.updateTransform.call(this)
            }
        }, t.Rope.prototype.setTexture = function(e) {
            this.texture = e
        }, t.TilingSprite = function(e, i, s) {
            t.Sprite.call(this, e), this._width = i || 100, this._height = s || 100, this.tileScale = new t.Point(1, 1), this.tileScaleOffset = new t.Point(1, 1), this.tilePosition = new t.Point(0, 0), this.renderable = !0, this.tint = 16777215, this.blendMode = t.blendModes.NORMAL
        }, t.TilingSprite.prototype = Object.create(t.Sprite.prototype), t.TilingSprite.prototype.constructor = t.TilingSprite, Object.defineProperty(t.TilingSprite.prototype, "width", {
            get: function() {
                return this._width
            },
            set: function(e) {
                this._width = e
            }
        }), Object.defineProperty(t.TilingSprite.prototype, "height", {
            get: function() {
                return this._height
            },
            set: function(e) {
                this._height = e
            }
        }), t.TilingSprite.prototype.setTexture = function(e) {
            this.texture !== e && (this.texture = e, this.refreshTexture = !0, this.cachedTint = 16777215)
        }, t.TilingSprite.prototype._renderWebGL = function(e) {
            if (this.visible !== !1 && 0 !== this.alpha) {
                var i, s;
                for (this._mask && (e.spriteBatch.stop(), e.maskManager.pushMask(this.mask, e), e.spriteBatch.start()), this._filters && (e.spriteBatch.flush(), e.filterManager.pushFilter(this._filterBlock)), !this.tilingTexture || this.refreshTexture ? (this.generateTilingTexture(!0), this.tilingTexture && this.tilingTexture.needsUpdate && (t.updateWebGLTexture(this.tilingTexture.baseTexture, e.gl), this.tilingTexture.needsUpdate = !1)) : e.spriteBatch.renderTilingSprite(this), i = 0, s = this.children.length; s > i; i++) this.children[i]._renderWebGL(e);
                e.spriteBatch.stop(), this._filters && e.filterManager.popFilter(), this._mask && e.maskManager.popMask(e), e.spriteBatch.start()
            }
        }, t.TilingSprite.prototype._renderCanvas = function(e) {
            if (this.visible !== !1 && 0 !== this.alpha) {
                var i = e.context;
                this._mask && e.maskManager.pushMask(this._mask, i), i.globalAlpha = this.worldAlpha;
                var s, n, a = this.worldTransform;
                if (i.setTransform(a.a, a.c, a.b, a.d, a.tx, a.ty), !this.__tilePattern || this.refreshTexture) {
                    if (this.generateTilingTexture(!1), !this.tilingTexture) return;
                    this.__tilePattern = i.createPattern(this.tilingTexture.baseTexture.source, "repeat")
                }
                this.blendMode !== e.currentBlendMode && (e.currentBlendMode = this.blendMode, i.globalCompositeOperation = t.blendModesCanvas[e.currentBlendMode]);
                var r = this.tilePosition,
                    o = this.tileScale;
                for (r.x %= this.tilingTexture.baseTexture.width, r.y %= this.tilingTexture.baseTexture.height, i.scale(o.x, o.y), i.translate(r.x, r.y), i.fillStyle = this.__tilePattern, i.fillRect(-r.x + this.anchor.x * -this._width, -r.y + this.anchor.y * -this._height, this._width / o.x, this._height / o.y), i.scale(1 / o.x, 1 / o.y), i.translate(-r.x, -r.y), this._mask && e.maskManager.popMask(e.context), s = 0, n = this.children.length; n > s; s++) this.children[s]._renderCanvas(e)
            }
        }, t.TilingSprite.prototype.getBounds = function() {
            var e = this._width,
                t = this._height,
                i = e * (1 - this.anchor.x),
                s = e * -this.anchor.x,
                n = t * (1 - this.anchor.y),
                a = t * -this.anchor.y,
                r = this.worldTransform,
                o = r.a,
                h = r.c,
                l = r.b,
                d = r.d,
                u = r.tx,
                c = r.ty,
                p = o * s + l * a + u,
                m = d * a + h * s + c,
                g = o * i + l * a + u,
                f = d * a + h * i + c,
                y = o * i + l * n + u,
                v = d * n + h * i + c,
                b = o * s + l * n + u,
                x = d * n + h * s + c,
                w = -1 / 0,
                T = -1 / 0,
                S = 1 / 0,
                C = 1 / 0;
            S = S > p ? p : S, S = S > g ? g : S, S = S > y ? y : S, S = S > b ? b : S, C = C > m ? m : C, C = C > f ? f : C, C = C > v ? v : C, C = C > x ? x : C, w = p > w ? p : w, w = g > w ? g : w, w = y > w ? y : w, w = b > w ? b : w, T = m > T ? m : T, T = f > T ? f : T, T = v > T ? v : T, T = x > T ? x : T;
            var A = this._bounds;
            return A.x = S, A.width = w - S, A.y = C, A.height = T - C, this._currentBounds = A, A
        }, t.TilingSprite.prototype.onTextureUpdate = function() {}, t.TilingSprite.prototype.generateTilingTexture = function(e) {
            if (this.texture.baseTexture.hasLoaded) {
                var i, s, n = this.texture,
                    a = n.frame,
                    r = a.width !== n.baseTexture.width || a.height !== n.baseTexture.height,
                    o = !1;
                if (e ? (i = t.getNextPowerOfTwo(a.width), s = t.getNextPowerOfTwo(a.height), (a.width !== i || a.height !== s) && (o = !0)) : r && (i = a.width, s = a.height, o = !0), o) {
                    var h;
                    this.tilingTexture && this.tilingTexture.isTiling ? (h = this.tilingTexture.canvasBuffer, h.resize(i, s), this.tilingTexture.baseTexture.width = i, this.tilingTexture.baseTexture.height = s, this.tilingTexture.needsUpdate = !0) : (h = new t.CanvasBuffer(i, s), this.tilingTexture = t.Texture.fromCanvas(h.canvas), this.tilingTexture.canvasBuffer = h, this.tilingTexture.isTiling = !0), h.context.drawImage(n.baseTexture.source, n.crop.x, n.crop.y, n.crop.width, n.crop.height, 0, 0, i, s), this.tileScaleOffset.x = a.width / i, this.tileScaleOffset.y = a.height / s
                } else this.tilingTexture && this.tilingTexture.isTiling && this.tilingTexture.destroy(!0), this.tileScaleOffset.x = 1, this.tileScaleOffset.y = 1, this.tilingTexture = n;
                this.refreshTexture = !1, this.tilingTexture.baseTexture._powerOf2 = !0
            }
        };
        var a = {};
        a.BoneData = function(e, t) {
            this.name = e, this.parent = t
        }, a.BoneData.prototype = {
            length: 0,
            x: 0,
            y: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1
        }, a.SlotData = function(e, t) {
            this.name = e, this.boneData = t
        }, a.SlotData.prototype = {
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            attachmentName: null
        }, a.Bone = function(e, t) {
            this.data = e, this.parent = t, this.setToSetupPose()
        }, a.Bone.yDown = !1, a.Bone.prototype = {
            x: 0,
            y: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            m00: 0,
            m01: 0,
            worldX: 0,
            m10: 0,
            m11: 0,
            worldY: 0,
            worldRotation: 0,
            worldScaleX: 1,
            worldScaleY: 1,
            updateWorldTransform: function(e, t) {
                var i = this.parent;
                null != i ? (this.worldX = this.x * i.m00 + this.y * i.m01 + i.worldX, this.worldY = this.x * i.m10 + this.y * i.m11 + i.worldY, this.worldScaleX = i.worldScaleX * this.scaleX, this.worldScaleY = i.worldScaleY * this.scaleY, this.worldRotation = i.worldRotation + this.rotation) : (this.worldX = this.x, this.worldY = this.y, this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY, this.worldRotation = this.rotation);
                var s = this.worldRotation * Math.PI / 180,
                    n = Math.cos(s),
                    r = Math.sin(s);
                this.m00 = n * this.worldScaleX, this.m10 = r * this.worldScaleX, this.m01 = -r * this.worldScaleY, this.m11 = n * this.worldScaleY, e && (this.m00 = -this.m00, this.m01 = -this.m01), t && (this.m10 = -this.m10, this.m11 = -this.m11), a.Bone.yDown && (this.m10 = -this.m10, this.m11 = -this.m11)
            },
            setToSetupPose: function() {
                var e = this.data;
                this.x = e.x, this.y = e.y, this.rotation = e.rotation, this.scaleX = e.scaleX, this.scaleY = e.scaleY
            }
        }, a.Slot = function(e, t, i) {
            this.data = e, this.skeleton = t, this.bone = i, this.setToSetupPose()
        }, a.Slot.prototype = {
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            _attachmentTime: 0,
            attachment: null,
            setAttachment: function(e) {
                this.attachment = e, this._attachmentTime = this.skeleton.time
            },
            setAttachmentTime: function(e) {
                this._attachmentTime = this.skeleton.time - e
            },
            getAttachmentTime: function() {
                return this.skeleton.time - this._attachmentTime
            },
            setToSetupPose: function() {
                var e = this.data;
                this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a;
                for (var t = this.skeleton.data.slots, i = 0, s = t.length; s > i; i++)
                    if (t[i] == e) {
                        this.setAttachment(e.attachmentName ? this.skeleton.getAttachmentBySlotIndex(i, e.attachmentName) : null);
                        break
                    }
            }
        }, a.Skin = function(e) {
            this.name = e, this.attachments = {}
        }, a.Skin.prototype = {
            addAttachment: function(e, t, i) {
                this.attachments[e + ":" + t] = i
            },
            getAttachment: function(e, t) {
                return this.attachments[e + ":" + t]
            },
            _attachAll: function(e, t) {
                for (var i in t.attachments) {
                    var s = i.indexOf(":"),
                        n = parseInt(i.substring(0, s), 10),
                        a = i.substring(s + 1),
                        r = e.slots[n];
                    if (r.attachment && r.attachment.name == a) {
                        var o = this.getAttachment(n, a);
                        o && r.setAttachment(o)
                    }
                }
            }
        }, a.Animation = function(e, t, i) {
            this.name = e, this.timelines = t, this.duration = i
        }, a.Animation.prototype = {
            apply: function(e, t, i) {
                i && this.duration && (t %= this.duration);
                for (var s = this.timelines, n = 0, a = s.length; a > n; n++) s[n].apply(e, t, 1)
            },
            mix: function(e, t, i, s) {
                i && this.duration && (t %= this.duration);
                for (var n = this.timelines, a = 0, r = n.length; r > a; a++) n[a].apply(e, t, s)
            }
        }, a.binarySearch = function(e, t, i) {
            var s = 0,
                n = Math.floor(e.length / i) - 2;
            if (!n) return i;
            for (var a = n >>> 1;;) {
                if (e[(a + 1) * i] <= t ? s = a + 1 : n = a, s == n) return (s + 1) * i;
                a = s + n >>> 1
            }
        }, a.linearSearch = function(e, t, i) {
            for (var s = 0, n = e.length - i; n >= s; s += i)
                if (e[s] > t) return s;
            return -1
        }, a.Curves = function(e) {
            this.curves = [], this.curves.length = 6 * (e - 1)
        }, a.Curves.prototype = {
            setLinear: function(e) {
                this.curves[6 * e] = 0
            },
            setStepped: function(e) {
                this.curves[6 * e] = -1
            },
            setCurve: function(e, t, i, s, n) {
                var a = .1,
                    r = a * a,
                    o = r * a,
                    h = 3 * a,
                    l = 3 * r,
                    d = 6 * r,
                    u = 6 * o,
                    c = 2 * -t + s,
                    p = 2 * -i + n,
                    m = 3 * (t - s) + 1,
                    g = 3 * (i - n) + 1,
                    f = 6 * e,
                    y = this.curves;
                y[f] = t * h + c * l + m * o, y[f + 1] = i * h + p * l + g * o, y[f + 2] = c * d + m * u, y[f + 3] = p * d + g * u, y[f + 4] = m * u, y[f + 5] = g * u
            },
            getCurvePercent: function(e, t) {
                t = 0 > t ? 0 : t > 1 ? 1 : t;
                var i = 6 * e,
                    s = this.curves,
                    n = s[i];
                if (!n) return t;
                if (-1 == n) return 0;
                for (var a = s[i + 1], r = s[i + 2], o = s[i + 3], h = s[i + 4], l = s[i + 5], d = n, u = a, c = 8;;) {
                    if (d >= t) {
                        var p = d - n,
                            m = u - a;
                        return m + (u - m) * (t - p) / (d - p)
                    }
                    if (!c) break;
                    c--, n += r, a += o, r += h, o += l, d += n, u += a
                }
                return u + (1 - u) * (t - d) / (1 - d)
            }
        }, a.RotateTimeline = function(e) {
            this.curves = new a.Curves(e), this.frames = [], this.frames.length = 2 * e
        }, a.RotateTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 2
            },
            setFrame: function(e, t, i) {
                e *= 2, this.frames[e] = t, this.frames[e + 1] = i
            },
            apply: function(e, t, i) {
                var s, n = this.frames;
                if (!(t < n[0])) {
                    var r = e.bones[this.boneIndex];
                    if (t >= n[n.length - 2]) {
                        for (s = r.data.rotation + n[n.length - 1] - r.rotation; s > 180;) s -= 360;
                        for (; - 180 > s;) s += 360;
                        return void(r.rotation += s * i)
                    }
                    var o = a.binarySearch(n, t, 2),
                        h = n[o - 1],
                        l = n[o],
                        d = 1 - (t - l) / (n[o - 2] - l);
                    for (d = this.curves.getCurvePercent(o / 2 - 1, d), s = n[o + 1] - h; s > 180;) s -= 360;
                    for (; - 180 > s;) s += 360;
                    for (s = r.data.rotation + (h + s * d) - r.rotation; s > 180;) s -= 360;
                    for (; - 180 > s;) s += 360;
                    r.rotation += s * i
                }
            }
        }, a.TranslateTimeline = function(e) {
            this.curves = new a.Curves(e), this.frames = [], this.frames.length = 3 * e
        }, a.TranslateTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 3
            },
            setFrame: function(e, t, i, s) {
                e *= 3, this.frames[e] = t, this.frames[e + 1] = i, this.frames[e + 2] = s
            },
            apply: function(e, t, i) {
                var s = this.frames;
                if (!(t < s[0])) {
                    var n = e.bones[this.boneIndex];
                    if (t >= s[s.length - 3]) return n.x += (n.data.x + s[s.length - 2] - n.x) * i, void(n.y += (n.data.y + s[s.length - 1] - n.y) * i);
                    var r = a.binarySearch(s, t, 3),
                        o = s[r - 2],
                        h = s[r - 1],
                        l = s[r],
                        d = 1 - (t - l) / (s[r + -3] - l);
                    d = this.curves.getCurvePercent(r / 3 - 1, d), n.x += (n.data.x + o + (s[r + 1] - o) * d - n.x) * i, n.y += (n.data.y + h + (s[r + 2] - h) * d - n.y) * i
                }
            }
        }, a.ScaleTimeline = function(e) {
            this.curves = new a.Curves(e), this.frames = [], this.frames.length = 3 * e
        }, a.ScaleTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 3
            },
            setFrame: function(e, t, i, s) {
                e *= 3, this.frames[e] = t, this.frames[e + 1] = i, this.frames[e + 2] = s
            },
            apply: function(e, t, i) {
                var s = this.frames;
                if (!(t < s[0])) {
                    var n = e.bones[this.boneIndex];
                    if (t >= s[s.length - 3]) return n.scaleX += (n.data.scaleX - 1 + s[s.length - 2] - n.scaleX) * i, void(n.scaleY += (n.data.scaleY - 1 + s[s.length - 1] - n.scaleY) * i);
                    var r = a.binarySearch(s, t, 3),
                        o = s[r - 2],
                        h = s[r - 1],
                        l = s[r],
                        d = 1 - (t - l) / (s[r + -3] - l);
                    d = this.curves.getCurvePercent(r / 3 - 1, d), n.scaleX += (n.data.scaleX - 1 + o + (s[r + 1] - o) * d - n.scaleX) * i, n.scaleY += (n.data.scaleY - 1 + h + (s[r + 2] - h) * d - n.scaleY) * i
                }
            }
        }, a.ColorTimeline = function(e) {
            this.curves = new a.Curves(e), this.frames = [], this.frames.length = 5 * e
        }, a.ColorTimeline.prototype = {
            slotIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 5
            },
            setFrame: function(e, t, i, s, n, a) {
                e *= 5, this.frames[e] = t, this.frames[e + 1] = i, this.frames[e + 2] = s, this.frames[e + 3] = n, this.frames[e + 4] = a
            },
            apply: function(e, t, i) {
                var s = this.frames;
                if (!(t < s[0])) {
                    var n = e.slots[this.slotIndex];
                    if (t >= s[s.length - 5]) {
                        var r = s.length - 1;
                        return n.r = s[r - 3], n.g = s[r - 2], n.b = s[r - 1], void(n.a = s[r])
                    }
                    var o = a.binarySearch(s, t, 5),
                        h = s[o - 4],
                        l = s[o - 3],
                        d = s[o - 2],
                        u = s[o - 1],
                        c = s[o],
                        p = 1 - (t - c) / (s[o - 5] - c);
                    p = this.curves.getCurvePercent(o / 5 - 1, p);
                    var m = h + (s[o + 1] - h) * p,
                        g = l + (s[o + 2] - l) * p,
                        f = d + (s[o + 3] - d) * p,
                        y = u + (s[o + 4] - u) * p;
                    1 > i ? (n.r += (m - n.r) * i, n.g += (g - n.g) * i, n.b += (f - n.b) * i, n.a += (y - n.a) * i) : (n.r = m, n.g = g, n.b = f, n.a = y)
                }
            }
        }, a.AttachmentTimeline = function(e) {
            this.curves = new a.Curves(e), this.frames = [], this.frames.length = e, this.attachmentNames = [], this.attachmentNames.length = e
        }, a.AttachmentTimeline.prototype = {
            slotIndex: 0,
            getFrameCount: function() {
                return this.frames.length
            },
            setFrame: function(e, t, i) {
                this.frames[e] = t, this.attachmentNames[e] = i
            },
            apply: function(e, t) {
                var i = this.frames;
                if (!(t < i[0])) {
                    var s;
                    s = t >= i[i.length - 1] ? i.length - 1 : a.binarySearch(i, t, 1) - 1;
                    var n = this.attachmentNames[s];
                    e.slots[this.slotIndex].setAttachment(n ? e.getAttachmentBySlotIndex(this.slotIndex, n) : null)
                }
            }
        }, a.SkeletonData = function() {
            this.bones = [], this.slots = [], this.skins = [], this.animations = []
        }, a.SkeletonData.prototype = {
            defaultSkin: null,
            findBone: function(e) {
                for (var t = this.bones, i = 0, s = t.length; s > i; i++)
                    if (t[i].name == e) return t[i];
                return null
            },
            findBoneIndex: function(e) {
                for (var t = this.bones, i = 0, s = t.length; s > i; i++)
                    if (t[i].name == e) return i;
                return -1
            },
            findSlot: function(e) {
                for (var t = this.slots, i = 0, s = t.length; s > i; i++)
                    if (t[i].name == e) return slot[i];
                return null
            },
            findSlotIndex: function(e) {
                for (var t = this.slots, i = 0, s = t.length; s > i; i++)
                    if (t[i].name == e) return i;
                return -1
            },
            findSkin: function(e) {
                for (var t = this.skins, i = 0, s = t.length; s > i; i++)
                    if (t[i].name == e) return t[i];
                return null
            },
            findAnimation: function(e) {
                for (var t = this.animations, i = 0, s = t.length; s > i; i++)
                    if (t[i].name == e) return t[i];
                return null
            }
        }, a.Skeleton = function(e) {
            this.data = e, this.bones = [];
            for (var t = 0, i = e.bones.length; i > t; t++) {
                var s = e.bones[t],
                    n = s.parent ? this.bones[e.bones.indexOf(s.parent)] : null;
                this.bones.push(new a.Bone(s, n))
            }
            for (this.slots = [], this.drawOrder = [], t = 0, i = e.slots.length; i > t; t++) {
                var r = e.slots[t],
                    o = this.bones[e.bones.indexOf(r.boneData)],
                    h = new a.Slot(r, this, o);
                this.slots.push(h), this.drawOrder.push(h)
            }
        }, a.Skeleton.prototype = {
            x: 0,
            y: 0,
            skin: null,
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            time: 0,
            flipX: !1,
            flipY: !1,
            updateWorldTransform: function() {
                for (var e = this.flipX, t = this.flipY, i = this.bones, s = 0, n = i.length; n > s; s++) i[s].updateWorldTransform(e, t)
            },
            setToSetupPose: function() {
                this.setBonesToSetupPose(), this.setSlotsToSetupPose()
            },
            setBonesToSetupPose: function() {
                for (var e = this.bones, t = 0, i = e.length; i > t; t++) e[t].setToSetupPose()
            },
            setSlotsToSetupPose: function() {
                for (var e = this.slots, t = 0, i = e.length; i > t; t++) e[t].setToSetupPose(t)
            },
            getRootBone: function() {
                return this.bones.length ? this.bones[0] : null
            },
            findBone: function(e) {
                for (var t = this.bones, i = 0, s = t.length; s > i; i++)
                    if (t[i].data.name == e) return t[i];
                return null
            },
            findBoneIndex: function(e) {
                for (var t = this.bones, i = 0, s = t.length; s > i; i++)
                    if (t[i].data.name == e) return i;
                return -1
            },
            findSlot: function(e) {
                for (var t = this.slots, i = 0, s = t.length; s > i; i++)
                    if (t[i].data.name == e) return t[i];
                return null
            },
            findSlotIndex: function(e) {
                for (var t = this.slots, i = 0, s = t.length; s > i; i++)
                    if (t[i].data.name == e) return i;
                return -1
            },
            setSkinByName: function(e) {
                var t = this.data.findSkin(e);
                if (!t) throw "Skin not found: " + e;
                this.setSkin(t)
            },
            setSkin: function(e) {
                this.skin && e && e._attachAll(this, this.skin), this.skin = e
            },
            getAttachmentBySlotName: function(e, t) {
                return this.getAttachmentBySlotIndex(this.data.findSlotIndex(e), t)
            },
            getAttachmentBySlotIndex: function(e, t) {
                if (this.skin) {
                    var i = this.skin.getAttachment(e, t);
                    if (i) return i
                }
                return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(e, t) : null
            },
            setAttachment: function(e, t) {
                for (var i = this.slots, s = 0, n = i.size; n > s; s++) {
                    var a = i[s];
                    if (a.data.name == e) {
                        var r = null;
                        if (t && (r = this.getAttachment(s, t), null == r)) throw "Attachment not found: " + t + ", for slot: " + e;
                        return void a.setAttachment(r)
                    }
                }
                throw "Slot not found: " + e
            },
            update: function(e) {
                time += e
            }
        }, a.AttachmentType = {
            region: 0
        }, a.RegionAttachment = function() {
            this.offset = [], this.offset.length = 8, this.uvs = [], this.uvs.length = 8
        }, a.RegionAttachment.prototype = {
            x: 0,
            y: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            width: 0,
            height: 0,
            rendererObject: null,
            regionOffsetX: 0,
            regionOffsetY: 0,
            regionWidth: 0,
            regionHeight: 0,
            regionOriginalWidth: 0,
            regionOriginalHeight: 0,
            setUVs: function(e, t, i, s, n) {
                var a = this.uvs;
                n ? (a[2] = e, a[3] = s, a[4] = e, a[5] = t, a[6] = i, a[7] = t, a[0] = i, a[1] = s) : (a[0] = e, a[1] = s, a[2] = e, a[3] = t, a[4] = i, a[5] = t, a[6] = i, a[7] = s)
            },
            updateOffset: function() {
                var e = this.width / this.regionOriginalWidth * this.scaleX,
                    t = this.height / this.regionOriginalHeight * this.scaleY,
                    i = -this.width / 2 * this.scaleX + this.regionOffsetX * e,
                    s = -this.height / 2 * this.scaleY + this.regionOffsetY * t,
                    n = i + this.regionWidth * e,
                    a = s + this.regionHeight * t,
                    r = this.rotation * Math.PI / 180,
                    o = Math.cos(r),
                    h = Math.sin(r),
                    l = i * o + this.x,
                    d = i * h,
                    u = s * o + this.y,
                    c = s * h,
                    p = n * o + this.x,
                    m = n * h,
                    g = a * o + this.y,
                    f = a * h,
                    y = this.offset;
                y[0] = l - c, y[1] = u + d, y[2] = l - f, y[3] = g + d, y[4] = p - f, y[5] = g + m, y[6] = p - c, y[7] = u + m
            },
            computeVertices: function(e, t, i, s) {
                e += i.worldX, t += i.worldY;
                var n = i.m00,
                    a = i.m01,
                    r = i.m10,
                    o = i.m11,
                    h = this.offset;
                s[0] = h[0] * n + h[1] * a + e, s[1] = h[0] * r + h[1] * o + t, s[2] = h[2] * n + h[3] * a + e, s[3] = h[2] * r + h[3] * o + t, s[4] = h[4] * n + h[5] * a + e, s[5] = h[4] * r + h[5] * o + t, s[6] = h[6] * n + h[7] * a + e, s[7] = h[6] * r + h[7] * o + t
            }
        }, a.AnimationStateData = function(e) {
            this.skeletonData = e, this.animationToMixTime = {}
        }, a.AnimationStateData.prototype = {
            defaultMix: 0,
            setMixByName: function(e, t, i) {
                var s = this.skeletonData.findAnimation(e);
                if (!s) throw "Animation not found: " + e;
                var n = this.skeletonData.findAnimation(t);
                if (!n) throw "Animation not found: " + t;
                this.setMix(s, n, i)
            },
            setMix: function(e, t, i) {
                this.animationToMixTime[e.name + ":" + t.name] = i
            },
            getMix: function(e, t) {
                var i = this.animationToMixTime[e.name + ":" + t.name];
                return i ? i : this.defaultMix
            }
        }, a.AnimationState = function(e) {
            this.data = e, this.queue = []
        }, a.AnimationState.prototype = {
            animationSpeed: 1,
            current: null,
            previous: null,
            currentTime: 0,
            previousTime: 0,
            currentLoop: !1,
            previousLoop: !1,
            mixTime: 0,
            mixDuration: 0,
            update: function(e) {
                if (this.currentTime += e * this.animationSpeed, this.previousTime += e, this.mixTime += e, this.queue.length > 0) {
                    var t = this.queue[0];
                    this.currentTime >= t.delay && (this._setAnimation(t.animation, t.loop), this.queue.shift())
                }
            },
            apply: function(e) {
                if (this.current)
                    if (this.previous) {
                        this.previous.apply(e, this.previousTime, this.previousLoop);
                        var t = this.mixTime / this.mixDuration;
                        t >= 1 && (t = 1, this.previous = null), this.current.mix(e, this.currentTime, this.currentLoop, t)
                    } else this.current.apply(e, this.currentTime, this.currentLoop)
            },
            clearAnimation: function() {
                this.previous = null, this.current = null, this.queue.length = 0
            },
            _setAnimation: function(e, t) {
                this.previous = null, e && this.current && (this.mixDuration = this.data.getMix(this.current, e), this.mixDuration > 0 && (this.mixTime = 0, this.previous = this.current, this.previousTime = this.currentTime, this.previousLoop = this.currentLoop)), this.current = e, this.currentLoop = t, this.currentTime = 0
            },
            setAnimationByName: function(e, t) {
                var i = this.data.skeletonData.findAnimation(e);
                if (!i) throw "Animation not found: " + e;
                this.setAnimation(i, t)
            },
            setAnimation: function(e, t) {
                this.queue.length = 0, this._setAnimation(e, t)
            },
            addAnimationByName: function(e, t, i) {
                var s = this.data.skeletonData.findAnimation(e);
                if (!s) throw "Animation not found: " + e;
                this.addAnimation(s, t, i)
            },
            addAnimation: function(e, t, i) {
                var s = {};
                if (s.animation = e, s.loop = t, !i || 0 >= i) {
                    var n = this.queue.length ? this.queue[this.queue.length - 1].animation : this.current;
                    i = null != n ? n.duration - this.data.getMix(n, e) + (i || 0) : 0
                }
                s.delay = i, this.queue.push(s)
            },
            isComplete: function() {
                return !this.current || this.currentTime >= this.current.duration
            }
        }, a.SkeletonJson = function(e) {
            this.attachmentLoader = e
        }, a.SkeletonJson.prototype = {
            scale: 1,
            readSkeletonData: function(e) {
                for (var t, i = new a.SkeletonData, s = e.bones, n = 0, r = s.length; r > n; n++) {
                    var o = s[n],
                        h = null;
                    if (o.parent && (h = i.findBone(o.parent), !h)) throw "Parent bone not found: " + o.parent;
                    t = new a.BoneData(o.name, h), t.length = (o.length || 0) * this.scale, t.x = (o.x || 0) * this.scale, t.y = (o.y || 0) * this.scale, t.rotation = o.rotation || 0, t.scaleX = o.scaleX || 1, t.scaleY = o.scaleY || 1, i.bones.push(t)
                }
                var l = e.slots;
                for (n = 0, r = l.length; r > n; n++) {
                    var d = l[n];
                    if (t = i.findBone(d.bone), !t) throw "Slot bone not found: " + d.bone;
                    var u = new a.SlotData(d.name, t),
                        c = d.color;
                    c && (u.r = a.SkeletonJson.toColor(c, 0), u.g = a.SkeletonJson.toColor(c, 1), u.b = a.SkeletonJson.toColor(c, 2), u.a = a.SkeletonJson.toColor(c, 3)), u.attachmentName = d.attachment, i.slots.push(u)
                }
                var p = e.skins;
                for (var m in p)
                    if (p.hasOwnProperty(m)) {
                        var g = p[m],
                            f = new a.Skin(m);
                        for (var y in g)
                            if (g.hasOwnProperty(y)) {
                                var v = i.findSlotIndex(y),
                                    b = g[y];
                                for (var x in b)
                                    if (b.hasOwnProperty(x)) {
                                        var w = this.readAttachment(f, x, b[x]);
                                        null != w && f.addAttachment(v, x, w)
                                    }
                            }
                        i.skins.push(f), "default" == f.name && (i.defaultSkin = f)
                    }
                var T = e.animations;
                for (var S in T) T.hasOwnProperty(S) && this.readAnimation(S, T[S], i);
                return i
            },
            readAttachment: function(e, t, i) {
                t = i.name || t;
                var s = a.AttachmentType[i.type || "region"];
                if (s == a.AttachmentType.region) {
                    var n = new a.RegionAttachment;
                    return n.x = (i.x || 0) * this.scale, n.y = (i.y || 0) * this.scale, n.scaleX = i.scaleX || 1, n.scaleY = i.scaleY || 1, n.rotation = i.rotation || 0, n.width = (i.width || 32) * this.scale, n.height = (i.height || 32) * this.scale, n.updateOffset(), n.rendererObject = {}, n.rendererObject.name = t, n.rendererObject.scale = {}, n.rendererObject.scale.x = n.scaleX, n.rendererObject.scale.y = n.scaleY, n.rendererObject.rotation = -n.rotation * Math.PI / 180, n
                }
                throw "Unknown attachment type: " + s
            },
            readAnimation: function(e, t, i) {
                var s, n, r, o, h, l, d, u = [],
                    c = 0,
                    p = t.bones;
                for (var m in p)
                    if (p.hasOwnProperty(m)) {
                        var g = i.findBoneIndex(m);
                        if (-1 == g) throw "Bone not found: " + m;
                        var f = p[m];
                        for (r in f)
                            if (f.hasOwnProperty(r))
                                if (h = f[r], "rotate" == r) {
                                    for (n = new a.RotateTimeline(h.length), n.boneIndex = g, s = 0, l = 0, d = h.length; d > l; l++) o = h[l], n.setFrame(s, o.time, o.angle), a.SkeletonJson.readCurve(n, s, o), s++;
                                    u.push(n), c = Math.max(c, n.frames[2 * n.getFrameCount() - 2])
                                } else {
                                    if ("translate" != r && "scale" != r) throw "Invalid timeline type for a bone: " + r + " (" + m + ")";
                                    var y = 1;
                                    for ("scale" == r ? n = new a.ScaleTimeline(h.length) : (n = new a.TranslateTimeline(h.length), y = this.scale), n.boneIndex = g, s = 0, l = 0, d = h.length; d > l; l++) {
                                        o = h[l];
                                        var v = (o.x || 0) * y,
                                            b = (o.y || 0) * y;
                                        n.setFrame(s, o.time, v, b), a.SkeletonJson.readCurve(n, s, o), s++
                                    }
                                    u.push(n), c = Math.max(c, n.frames[3 * n.getFrameCount() - 3])
                                }
                    }
                var x = t.slots;
                for (var w in x)
                    if (x.hasOwnProperty(w)) {
                        var T = x[w],
                            S = i.findSlotIndex(w);
                        for (r in T)
                            if (T.hasOwnProperty(r))
                                if (h = T[r], "color" == r) {
                                    for (n = new a.ColorTimeline(h.length), n.slotIndex = S, s = 0, l = 0, d = h.length; d > l; l++) {
                                        o = h[l];
                                        var C = o.color,
                                            A = a.SkeletonJson.toColor(C, 0),
                                            M = a.SkeletonJson.toColor(C, 1),
                                            E = a.SkeletonJson.toColor(C, 2),
                                            R = a.SkeletonJson.toColor(C, 3);
                                        n.setFrame(s, o.time, A, M, E, R), a.SkeletonJson.readCurve(n, s, o), s++
                                    }
                                    u.push(n), c = Math.max(c, n.frames[5 * n.getFrameCount() - 5])
                                } else {
                                    if ("attachment" != r) throw "Invalid timeline type for a slot: " + r + " (" + w + ")";
                                    for (n = new a.AttachmentTimeline(h.length), n.slotIndex = S, s = 0, l = 0, d = h.length; d > l; l++) o = h[l], n.setFrame(s++, o.time, o.name);
                                    u.push(n), c = Math.max(c, n.frames[n.getFrameCount() - 1])
                                }
                    }
                i.animations.push(new a.Animation(e, u, c))
            }
        }, a.SkeletonJson.readCurve = function(e, t, i) {
            var s = i.curve;
            s && ("stepped" == s ? e.curves.setStepped(t) : s instanceof Array && e.curves.setCurve(t, s[0], s[1], s[2], s[3]))
        }, a.SkeletonJson.toColor = function(e, t) {
            if (8 != e.length) throw "Color hexidecimal length must be 8, recieved: " + e;
            return parseInt(e.substr(2 * t, 2), 16) / 255
        }, a.Atlas = function(e, t) {
            this.textureLoader = t, this.pages = [], this.regions = [];
            var i = new a.AtlasReader(e),
                s = [];
            s.length = 4;
            for (var n = null;;) {
                var r = i.readLine();
                if (null == r) break;
                if (r = i.trim(r), r.length)
                    if (n) {
                        var o = new a.AtlasRegion;
                        o.name = r, o.page = n, o.rotate = "true" == i.readValue(), i.readTuple(s);
                        var h = parseInt(s[0], 10),
                            l = parseInt(s[1], 10);
                        i.readTuple(s);
                        var d = parseInt(s[0], 10),
                            u = parseInt(s[1], 10);
                        o.u = h / n.width, o.v = l / n.height, o.rotate ? (o.u2 = (h + u) / n.width, o.v2 = (l + d) / n.height) : (o.u2 = (h + d) / n.width, o.v2 = (l + u) / n.height), o.x = h, o.y = l, o.width = Math.abs(d), o.height = Math.abs(u), 4 == i.readTuple(s) && (o.splits = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10), parseInt(s[3], 10)], 4 == i.readTuple(s) && (o.pads = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10), parseInt(s[3], 10)], i.readTuple(s))), o.originalWidth = parseInt(s[0], 10), o.originalHeight = parseInt(s[1], 10), i.readTuple(s), o.offsetX = parseInt(s[0], 10), o.offsetY = parseInt(s[1], 10), o.index = parseInt(i.readValue(), 10), this.regions.push(o)
                    } else {
                        n = new a.AtlasPage, n.name = r, n.format = a.Atlas.Format[i.readValue()], i.readTuple(s), n.minFilter = a.Atlas.TextureFilter[s[0]], n.magFilter = a.Atlas.TextureFilter[s[1]];
                        var c = i.readValue();
                        n.uWrap = a.Atlas.TextureWrap.clampToEdge, n.vWrap = a.Atlas.TextureWrap.clampToEdge, "x" == c ? n.uWrap = a.Atlas.TextureWrap.repeat : "y" == c ? n.vWrap = a.Atlas.TextureWrap.repeat : "xy" == c && (n.uWrap = n.vWrap = a.Atlas.TextureWrap.repeat), t.load(n, r), this.pages.push(n)
                    } else n = null
            }
        }, a.Atlas.prototype = {
            findRegion: function(e) {
                for (var t = this.regions, i = 0, s = t.length; s > i; i++)
                    if (t[i].name == e) return t[i];
                return null
            },
            dispose: function() {
                for (var e = this.pages, t = 0, i = e.length; i > t; t++) this.textureLoader.unload(e[t].rendererObject)
            },
            updateUVs: function(e) {
                for (var t = this.regions, i = 0, s = t.length; s > i; i++) {
                    var n = t[i];
                    n.page == e && (n.u = n.x / e.width, n.v = n.y / e.height, n.rotate ? (n.u2 = (n.x + n.height) / e.width, n.v2 = (n.y + n.width) / e.height) : (n.u2 = (n.x + n.width) / e.width, n.v2 = (n.y + n.height) / e.height))
                }
            }
        }, a.Atlas.Format = {
            alpha: 0,
            intensity: 1,
            luminanceAlpha: 2,
            rgb565: 3,
            rgba4444: 4,
            rgb888: 5,
            rgba8888: 6
        }, a.Atlas.TextureFilter = {
            nearest: 0,
            linear: 1,
            mipMap: 2,
            mipMapNearestNearest: 3,
            mipMapLinearNearest: 4,
            mipMapNearestLinear: 5,
            mipMapLinearLinear: 6
        }, a.Atlas.TextureWrap = {
            mirroredRepeat: 0,
            clampToEdge: 1,
            repeat: 2
        }, a.AtlasPage = function() {}, a.AtlasPage.prototype = {
            name: null,
            format: null,
            minFilter: null,
            magFilter: null,
            uWrap: null,
            vWrap: null,
            rendererObject: null,
            width: 0,
            height: 0
        }, a.AtlasRegion = function() {}, a.AtlasRegion.prototype = {
            page: null,
            name: null,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            u: 0,
            v: 0,
            u2: 0,
            v2: 0,
            offsetX: 0,
            offsetY: 0,
            originalWidth: 0,
            originalHeight: 0,
            index: 0,
            rotate: !1,
            splits: null,
            pads: null
        }, a.AtlasReader = function(e) {
            this.lines = e.split(/\r\n|\r|\n/)
        }, a.AtlasReader.prototype = {
            index: 0,
            trim: function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            readLine: function() {
                return this.index >= this.lines.length ? null : this.lines[this.index++]
            },
            readValue: function() {
                var e = this.readLine(),
                    t = e.indexOf(":");
                if (-1 == t) throw "Invalid line: " + e;
                return this.trim(e.substring(t + 1))
            },
            readTuple: function(e) {
                var t = this.readLine(),
                    i = t.indexOf(":");
                if (-1 == i) throw "Invalid line: " + t;
                for (var s = 0, n = i + 1; 3 > s; s++) {
                    var a = t.indexOf(",", n);
                    if (-1 == a) {
                        if (!s) throw "Invalid line: " + t;
                        break
                    }
                    e[s] = this.trim(t.substr(n, a - n)), n = a + 1
                }
                return e[s] = this.trim(t.substring(n)), s + 1
            }
        }, a.AtlasAttachmentLoader = function(e) {
            this.atlas = e
        }, a.AtlasAttachmentLoader.prototype = {
            newAttachment: function(e, t, i) {
                switch (t) {
                    case a.AttachmentType.region:
                        var s = this.atlas.findRegion(i);
                        if (!s) throw "Region not found in atlas: " + i + " (" + t + ")";
                        var n = new a.RegionAttachment(i);
                        return n.rendererObject = s, n.setUVs(s.u, s.v, s.u2, s.v2, s.rotate), n.regionOffsetX = s.offsetX, n.regionOffsetY = s.offsetY, n.regionWidth = s.width, n.regionHeight = s.height, n.regionOriginalWidth = s.originalWidth, n.regionOriginalHeight = s.originalHeight, n
                }
                throw "Unknown attachment type: " + t
            }
        }, a.Bone.yDown = !0, t.AnimCache = {}, t.Spine = function(e) {
            if (t.DisplayObjectContainer.call(this), this.spineData = t.AnimCache[e], !this.spineData) throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + e);
            this.skeleton = new a.Skeleton(this.spineData), this.skeleton.updateWorldTransform(), this.stateData = new a.AnimationStateData(this.spineData), this.state = new a.AnimationState(this.stateData), this.slotContainers = [];
            for (var i = 0, s = this.skeleton.drawOrder.length; s > i; i++) {
                var n = this.skeleton.drawOrder[i],
                    r = n.attachment,
                    o = new t.DisplayObjectContainer;
                if (this.slotContainers.push(o), this.addChild(o), r instanceof a.RegionAttachment) {
                    var h = r.rendererObject.name,
                        l = this.createSprite(n, r.rendererObject);
                    n.currentSprite = l, n.currentSpriteName = h, o.addChild(l)
                }
            }
        }, t.Spine.prototype = Object.create(t.DisplayObjectContainer.prototype), t.Spine.prototype.constructor = t.Spine, t.Spine.prototype.updateTransform = function() {
            this.lastTime = this.lastTime || Date.now();
            var e = .001 * (Date.now() - this.lastTime);
            this.lastTime = Date.now(), this.state.update(e), this.state.apply(this.skeleton), this.skeleton.updateWorldTransform();
            for (var i = this.skeleton.drawOrder, s = 0, n = i.length; n > s; s++) {
                var r = i[s],
                    o = r.attachment,
                    h = this.slotContainers[s];
                if (o instanceof a.RegionAttachment) {
                    if (o.rendererObject && (!r.currentSpriteName || r.currentSpriteName != o.name)) {
                        var l = o.rendererObject.name;
                        if (void 0 !== r.currentSprite && (r.currentSprite.visible = !1), r.sprites = r.sprites || {}, void 0 !== r.sprites[l]) r.sprites[l].visible = !0;
                        else {
                            var d = this.createSprite(r, o.rendererObject);
                            h.addChild(d)
                        }
                        r.currentSprite = r.sprites[l], r.currentSpriteName = l
                    }
                    h.visible = !0;
                    var u = r.bone;
                    h.position.x = u.worldX + o.x * u.m00 + o.y * u.m01, h.position.y = u.worldY + o.x * u.m10 + o.y * u.m11, h.scale.x = u.worldScaleX, h.scale.y = u.worldScaleY, h.rotation = -(r.bone.worldRotation * Math.PI / 180), h.alpha = r.a, r.currentSprite.tint = t.rgb2hex([r.r, r.g, r.b])
                } else h.visible = !1
            }
            t.DisplayObjectContainer.prototype.updateTransform.call(this)
        }, t.Spine.prototype.createSprite = function(e, i) {
            var s = t.TextureCache[i.name] ? i.name : i.name + ".png",
                n = new t.Sprite(t.Texture.fromFrame(s));
            return n.scale = i.scale, n.rotation = i.rotation, n.anchor.x = n.anchor.y = .5, e.sprites = e.sprites || {}, e.sprites[i.name] = n, n
        }, t.BaseTextureCache = {}, t.texturesToUpdate = [], t.texturesToDestroy = [], t.BaseTextureCacheIdGenerator = 0, t.BaseTexture = function(e, i) {
            if (t.EventTarget.call(this), this.width = 100, this.height = 100, this.scaleMode = i || t.scaleModes.DEFAULT, this.hasLoaded = !1, this.source = e, this.id = t.BaseTextureCacheIdGenerator++, this.premultipliedAlpha = !0, this._glTextures = [], this._dirty = [], e) {
                if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, t.texturesToUpdate.push(this);
                else {
                    var s = this;
                    this.source.onload = function() {
                        s.hasLoaded = !0, s.width = s.source.width, s.height = s.source.height;
                        for (var e = 0; e < s._glTextures.length; e++) s._dirty[e] = !0;
                        s.dispatchEvent({
                            type: "loaded",
                            content: s
                        })
                    }, this.source.onerror = function() {
                        s.dispatchEvent({
                            type: "error",
                            content: s
                        })
                    }
                }
                this.imageUrl = null, this._powerOf2 = !1
            }
        }, t.BaseTexture.prototype.constructor = t.BaseTexture, t.BaseTexture.prototype.destroy = function() {
            this.imageUrl ? (delete t.BaseTextureCache[this.imageUrl], delete t.TextureCache[this.imageUrl], this.imageUrl = null, this.source.src = null) : this.source && this.source._pixiId && delete t.BaseTextureCache[this.source._pixiId], this.source = null, t.texturesToDestroy.push(this)
        }, t.BaseTexture.prototype.updateSourceImage = function(e) {
            this.hasLoaded = !1, this.source.src = null, this.source.src = e
        }, t.BaseTexture.fromImage = function(e, i, s) {
            var n = t.BaseTextureCache[e];
            if (void 0 === i && -1 === e.indexOf("data:") && (i = !0), !n) {
                var a = new Image;
                i && (a.crossOrigin = ""), a.src = e, n = new t.BaseTexture(a, s), n.imageUrl = e, t.BaseTextureCache[e] = n
            }
            return n
        }, t.BaseTexture.fromCanvas = function(e, i) {
            e._pixiId || (e._pixiId = "canvas_" + t.TextureCacheIdGenerator++);
            var s = t.BaseTextureCache[e._pixiId];
            return s || (s = new t.BaseTexture(e, i), t.BaseTextureCache[e._pixiId] = s), s
        }, t.TextureCache = {}, t.FrameCache = {}, t.TextureCacheIdGenerator = 0, t.Texture = function(e, i) {
            if (t.EventTarget.call(this), this.noFrame = !1, i || (this.noFrame = !0, i = new t.Rectangle(0, 0, 1, 1)), e instanceof t.Texture && (e = e.baseTexture), this.baseTexture = e, this.frame = i, this.trim = null, this.valid = !1, this.scope = this, this._uvs = null, this.width = 0, this.height = 0, this.crop = new t.Rectangle(0, 0, 1, 1), e.hasLoaded) this.noFrame && (i = new t.Rectangle(0, 0, e.width, e.height)), this.setFrame(i);
            else {
                var s = this;
                e.addEventListener("loaded", function() {
                    s.onBaseTextureLoaded()
                })
            }
        }, t.Texture.prototype.constructor = t.Texture, t.Texture.prototype.onBaseTextureLoaded = function() {
            var e = this.baseTexture;
            e.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new t.Rectangle(0, 0, e.width, e.height)), this.setFrame(this.frame), this.scope.dispatchEvent({
                type: "update",
                content: this
            })
        }, t.Texture.prototype.destroy = function(e) {
            e && this.baseTexture.destroy(), this.valid = !1
        }, t.Texture.prototype.setFrame = function(e) {
            if (this.noFrame = !1, this.frame = e, this.width = e.width, this.height = e.height, this.crop.x = e.x, this.crop.y = e.y, this.crop.width = e.width, this.crop.height = e.height, !this.trim && (e.x + e.width > this.baseTexture.width || e.y + e.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
            this.valid = e && e.width && e.height && this.baseTexture.source && this.baseTexture.hasLoaded, this.trim && (this.width = this.trim.width, this.height = this.trim.height, this.frame.width = this.trim.width, this.frame.height = this.trim.height), this.valid && t.Texture.frameUpdates.push(this)
        }, t.Texture.prototype._updateWebGLuvs = function() {
            this._uvs || (this._uvs = new t.TextureUvs);
            var e = this.crop,
                i = this.baseTexture.width,
                s = this.baseTexture.height;
            this._uvs.x0 = e.x / i, this._uvs.y0 = e.y / s, this._uvs.x1 = (e.x + e.width) / i, this._uvs.y1 = e.y / s, this._uvs.x2 = (e.x + e.width) / i, this._uvs.y2 = (e.y + e.height) / s, this._uvs.x3 = e.x / i, this._uvs.y3 = (e.y + e.height) / s
        }, t.Texture.fromImage = function(e, i, s) {
            var n = t.TextureCache[e];
            return n || (n = new t.Texture(t.BaseTexture.fromImage(e, i, s)), t.TextureCache[e] = n), n
        }, t.Texture.fromFrame = function(e) {
            var i = t.TextureCache[e];
            if (!i) throw new Error('The frameId "' + e + '" does not exist in the texture cache ');
            return i
        }, t.Texture.fromCanvas = function(e, i) {
            var s = t.BaseTexture.fromCanvas(e, i);
            return new t.Texture(s)
        }, t.Texture.addTextureToCache = function(e, i) {
            t.TextureCache[i] = e
        }, t.Texture.removeTextureFromCache = function(e) {
            var i = t.TextureCache[e];
            return delete t.TextureCache[e], delete t.BaseTextureCache[e], i
        }, t.Texture.frameUpdates = [], t.TextureUvs = function() {
            this.x0 = 0, this.y0 = 0, this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.x3 = 0, this.y3 = 0
        }, t.RenderTexture = function(e, i, s, n) {
            if (t.EventTarget.call(this), this.width = e || 100, this.height = i || 100, this.frame = new t.Rectangle(0, 0, this.width, this.height), this.crop = new t.Rectangle(0, 0, this.width, this.height), this.baseTexture = new t.BaseTexture, this.baseTexture.width = this.width, this.baseTexture.height = this.height, this.baseTexture._glTextures = [], this.baseTexture.scaleMode = n || t.scaleModes.DEFAULT, this.baseTexture.hasLoaded = !0, this.renderer = s || t.defaultRenderer, this.renderer.type === t.WEBGL_RENDERER) {
                var a = this.renderer.gl;
                this.textureBuffer = new t.FilterTexture(a, this.width, this.height, this.baseTexture.scaleMode), this.baseTexture._glTextures[a.id] = this.textureBuffer.texture, this.render = this.renderWebGL, this.projection = new t.Point(this.width / 2, -this.height / 2)
            } else this.render = this.renderCanvas, this.textureBuffer = new t.CanvasBuffer(this.width, this.height), this.baseTexture.source = this.textureBuffer.canvas;
            this.valid = !0, t.Texture.frameUpdates.push(this)
        }, t.RenderTexture.prototype = Object.create(t.Texture.prototype), t.RenderTexture.prototype.constructor = t.RenderTexture, t.RenderTexture.prototype.resize = function(e, i, s) {
            (e !== this.width || i !== this.height) && (this.width = this.frame.width = this.crop.width = e, this.height = this.frame.height = this.crop.height = i, s && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.renderer.type === t.WEBGL_RENDERER && (this.projection.x = this.width / 2, this.projection.y = -this.height / 2), this.textureBuffer.resize(this.width, this.height))
        }, t.RenderTexture.prototype.clear = function() {
            this.renderer.type === t.WEBGL_RENDERER && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear()
        }, t.RenderTexture.prototype.renderWebGL = function(e, i, s) {
            var n = this.renderer.gl;
            n.colorMask(!0, !0, !0, !0), n.viewport(0, 0, this.width, this.height), n.bindFramebuffer(n.FRAMEBUFFER, this.textureBuffer.frameBuffer), s && this.textureBuffer.clear();
            var a = e.children,
                r = e.worldTransform;
            e.worldTransform = t.RenderTexture.tempMatrix, e.worldTransform.d = -1, e.worldTransform.ty = -2 * this.projection.y, i && (e.worldTransform.tx = i.x, e.worldTransform.ty -= i.y);
            for (var o = 0, h = a.length; h > o; o++) a[o].updateTransform();
            t.WebGLRenderer.updateTextures(), this.renderer.spriteBatch.dirty = !0, this.renderer.renderDisplayObject(e, this.projection, this.textureBuffer.frameBuffer), e.worldTransform = r, this.renderer.spriteBatch.dirty = !0
        }, t.RenderTexture.prototype.renderCanvas = function(e, i, s) {
            var n = e.children,
                a = e.worldTransform;
            e.worldTransform = t.RenderTexture.tempMatrix, i ? (e.worldTransform.tx = i.x, e.worldTransform.ty = i.y) : (e.worldTransform.tx = 0, e.worldTransform.ty = 0);
            for (var r = 0, o = n.length; o > r; r++) n[r].updateTransform();
            s && this.textureBuffer.clear();
            var h = this.textureBuffer.context;
            this.renderer.renderDisplayObject(e, h), h.setTransform(1, 0, 0, 1, 0, 0), e.worldTransform = a
        }, t.RenderTexture.tempMatrix = new t.Matrix, t.AssetLoader = function(e, i) {
            t.EventTarget.call(this), this.assetURLs = e, this.crossorigin = i, this.loadersByType = {
                jpg: t.ImageLoader,
                jpeg: t.ImageLoader,
                png: t.ImageLoader,
                gif: t.ImageLoader,
                webp: t.ImageLoader,
                json: t.JsonLoader,
                atlas: t.AtlasLoader,
                anim: t.SpineLoader,
                xml: t.BitmapFontLoader,
                fnt: t.BitmapFontLoader
            }
        }, t.AssetLoader.prototype.constructor = t.AssetLoader, t.AssetLoader.prototype._getDataType = function(e) {
            var t = "data:",
                i = e.slice(0, t.length).toLowerCase();
            if (i === t) {
                var s = e.slice(t.length),
                    n = s.indexOf(",");
                if (-1 === n) return null;
                var a = s.slice(0, n).split(";")[0];
                return a && "text/plain" !== a.toLowerCase() ? a.split("/").pop().toLowerCase() : "txt"
            }
            return null
        }, t.AssetLoader.prototype.load = function() {
            function e(e) {
                t.onAssetLoaded(e.content)
            }
            var t = this;
            this.loadCount = this.assetURLs.length;
            for (var i = 0; i < this.assetURLs.length; i++) {
                var s = this.assetURLs[i],
                    n = this._getDataType(s);
                n || (n = s.split("?").shift().split(".").pop().toLowerCase());
                var a = this.loadersByType[n];
                if (!a) throw new Error(n + " is an unsupported file type");
                var r = new a(s, this.crossorigin);
                r.addEventListener("loaded", e), r.load()
            }
        }, t.AssetLoader.prototype.onAssetLoaded = function(e) {
            this.loadCount--, this.dispatchEvent({
                type: "onProgress",
                content: this,
                loader: e
            }), this.onProgress && this.onProgress(e), this.loadCount || (this.dispatchEvent({
                type: "onComplete",
                content: this
            }), this.onComplete && this.onComplete())
        }, t.JsonLoader = function(e, i) {
            t.EventTarget.call(this), this.url = e, this.crossorigin = i, this.baseUrl = e.replace(/[^\/]*$/, ""), this.loaded = !1
        }, t.JsonLoader.prototype.constructor = t.JsonLoader, t.JsonLoader.prototype.load = function() {
            var e = this;
            window.XDomainRequest && e.crossorigin ? (this.ajaxRequest = new window.XDomainRequest, this.ajaxRequest.timeout = 3e3, this.ajaxRequest.onerror = function() {
                e.onError()
            }, this.ajaxRequest.ontimeout = function() {
                e.onError()
            }, this.ajaxRequest.onprogress = function() {}) : this.ajaxRequest = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP"), this.ajaxRequest.onload = function() {
                e.onJSONLoaded()
            }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.send()
        }, t.JsonLoader.prototype.onJSONLoaded = function() {
            if (!this.ajaxRequest.responseText) return void this.onError();
            if (this.json = JSON.parse(this.ajaxRequest.responseText), this.json.frames) {
                var e = this,
                    i = this.baseUrl + this.json.meta.image,
                    s = new t.ImageLoader(i, this.crossorigin),
                    n = this.json.frames;
                this.texture = s.texture.baseTexture, s.addEventListener("loaded", function() {
                    e.onLoaded()
                });
                for (var r in n) {
                    var o = n[r].frame;
                    if (o && (t.TextureCache[r] = new t.Texture(this.texture, {
                            x: o.x,
                            y: o.y,
                            width: o.w,
                            height: o.h
                        }), t.TextureCache[r].crop = new t.Rectangle(o.x, o.y, o.w, o.h), n[r].trimmed)) {
                        var h = n[r].sourceSize,
                            l = n[r].spriteSourceSize;
                        t.TextureCache[r].trim = new t.Rectangle(l.x, l.y, h.w, h.h)
                    }
                }
                s.load()
            } else if (this.json.bones) {
                var d = new a.SkeletonJson,
                    u = d.readSkeletonData(this.json);
                t.AnimCache[this.url] = u, this.onLoaded()
            } else this.onLoaded()
        }, t.JsonLoader.prototype.onLoaded = function() {
            this.loaded = !0, this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, t.JsonLoader.prototype.onError = function() {
            this.dispatchEvent({
                type: "error",
                content: this
            })
        }, t.AtlasLoader = function(e, i) {
            t.EventTarget.call(this), this.url = e, this.baseUrl = e.replace(/[^\/]*$/, ""), this.crossorigin = i, this.loaded = !1
        }, t.AtlasLoader.constructor = t.AtlasLoader, t.AtlasLoader.prototype.load = function() {
            this.ajaxRequest = new t.AjaxRequest, this.ajaxRequest.onreadystatechange = this.onAtlasLoaded.bind(this), this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json"), this.ajaxRequest.send(null)
        }, t.AtlasLoader.prototype.onAtlasLoaded = function() {
            if (4 === this.ajaxRequest.readyState)
                if (200 === this.ajaxRequest.status || -1 === window.location.href.indexOf("http")) {
                    this.atlas = {
                        meta: {
                            image: []
                        },
                        frames: []
                    };
                    var e = this.ajaxRequest.responseText.split(/\r?\n/),
                        i = -3,
                        s = 0,
                        n = null,
                        a = !1,
                        r = 0,
                        o = 0,
                        h = this.onLoaded.bind(this);
                    for (r = 0; r < e.length; r++)
                        if (e[r] = e[r].replace(/^\s+|\s+$/g, ""), "" === e[r] && (a = r + 1), e[r].length > 0) {
                            if (a === r) this.atlas.meta.image.push(e[r]), s = this.atlas.meta.image.length - 1, this.atlas.frames.push({}), i = -3;
                            else if (i > 0)
                                if (i % 7 === 1) null != n && (this.atlas.frames[s][n.name] = n), n = {
                                    name: e[r],
                                    frame: {}
                                };
                                else {
                                    var l = e[r].split(" ");
                                    if (i % 7 === 3) n.frame.x = Number(l[1].replace(",", "")), n.frame.y = Number(l[2]);
                                    else if (i % 7 === 4) n.frame.w = Number(l[1].replace(",", "")), n.frame.h = Number(l[2]);
                                    else if (i % 7 === 5) {
                                        var d = {
                                            x: 0,
                                            y: 0,
                                            w: Number(l[1].replace(",", "")),
                                            h: Number(l[2])
                                        };
                                        d.w > n.frame.w || d.h > n.frame.h ? (n.trimmed = !0, n.realSize = d) : n.trimmed = !1
                                    }
                                }
                            i++
                        }
                    if (null != n && (this.atlas.frames[s][n.name] = n), this.atlas.meta.image.length > 0) {
                        for (this.images = [], o = 0; o < this.atlas.meta.image.length; o++) {
                            var u = this.baseUrl + this.atlas.meta.image[o],
                                c = this.atlas.frames[o];
                            this.images.push(new t.ImageLoader(u, this.crossorigin));
                            for (r in c) {
                                var p = c[r].frame;
                                p && (t.TextureCache[r] = new t.Texture(this.images[o].texture.baseTexture, {
                                    x: p.x,
                                    y: p.y,
                                    width: p.w,
                                    height: p.h
                                }), c[r].trimmed && (t.TextureCache[r].realSize = c[r].realSize, t.TextureCache[r].trim.x = 0, t.TextureCache[r].trim.y = 0))
                            }
                        }
                        for (this.currentImageId = 0, o = 0; o < this.images.length; o++) this.images[o].addEventListener("loaded", h);
                        this.images[this.currentImageId].load()
                    } else this.onLoaded()
                } else this.onError()
        }, t.AtlasLoader.prototype.onLoaded = function() {
            this.images.length - 1 > this.currentImageId ? (this.currentImageId++, this.images[this.currentImageId].load()) : (this.loaded = !0, this.dispatchEvent({
                type: "loaded",
                content: this
            }))
        }, t.AtlasLoader.prototype.onError = function() {
            this.dispatchEvent({
                type: "error",
                content: this
            })
        }, t.SpriteSheetLoader = function(e, i) {
            t.EventTarget.call(this), this.url = e, this.crossorigin = i, this.baseUrl = e.replace(/[^\/]*$/, ""), this.texture = null, this.frames = {}
        }, t.SpriteSheetLoader.prototype.constructor = t.SpriteSheetLoader, t.SpriteSheetLoader.prototype.load = function() {
            var e = this,
                i = new t.JsonLoader(this.url, this.crossorigin);
            i.addEventListener("loaded", function(t) {
                e.json = t.content.json, e.onLoaded()
            }), i.load()
        }, t.SpriteSheetLoader.prototype.onLoaded = function() {
            this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, t.ImageLoader = function(e, i) {
            t.EventTarget.call(this), this.texture = t.Texture.fromImage(e, i), this.frames = []
        }, t.ImageLoader.prototype.constructor = t.ImageLoader, t.ImageLoader.prototype.load = function() {
            if (this.texture.baseTexture.hasLoaded) this.onLoaded();
            else {
                var e = this;
                this.texture.baseTexture.addEventListener("loaded", function() {
                    e.onLoaded()
                })
            }
        }, t.ImageLoader.prototype.onLoaded = function() {
            this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, t.ImageLoader.prototype.loadFramedSpriteSheet = function(e, i, s) {
            this.frames = [];
            for (var n = Math.floor(this.texture.width / e), a = Math.floor(this.texture.height / i), r = 0, o = 0; a > o; o++)
                for (var h = 0; n > h; h++, r++) {
                    var l = new t.Texture(this.texture, {
                        x: h * e,
                        y: o * i,
                        width: e,
                        height: i
                    });
                    this.frames.push(l), s && (t.TextureCache[s + "-" + r] = l)
                }
            if (this.texture.baseTexture.hasLoaded) this.onLoaded();
            else {
                var d = this;
                this.texture.baseTexture.addEventListener("loaded", function() {
                    d.onLoaded()
                })
            }
        }, t.BitmapFontLoader = function(e, i) {
            t.EventTarget.call(this), this.url = e, this.crossorigin = i, this.baseUrl = e.replace(/[^\/]*$/, ""), this.texture = null
        }, t.BitmapFontLoader.prototype.constructor = t.BitmapFontLoader, t.BitmapFontLoader.prototype.load = function() {
            this.ajaxRequest = new t.AjaxRequest;
            var e = this;
            this.ajaxRequest.onreadystatechange = function() {
                e.onXMLLoaded()
            }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/xml"), this.ajaxRequest.send(null)
        }, t.BitmapFontLoader.prototype.onXMLLoaded = function() {
            if (4 === this.ajaxRequest.readyState && (200 === this.ajaxRequest.status || -1 === window.location.protocol.indexOf("http"))) {
                var e = this.ajaxRequest.responseXML;
                if (!e || /MSIE/i.test(navigator.userAgent) || navigator.isCocoonJS)
                    if ("function" == typeof window.DOMParser) {
                        var i = new DOMParser;
                        e = i.parseFromString(this.ajaxRequest.responseText, "text/xml")
                    } else {
                        var s = document.createElement("div");
                        s.innerHTML = this.ajaxRequest.responseText, e = s
                    }
                var n = this.baseUrl + e.getElementsByTagName("page")[0].getAttribute("file"),
                    a = new t.ImageLoader(n, this.crossorigin);
                this.texture = a.texture.baseTexture;
                var r = {},
                    o = e.getElementsByTagName("info")[0],
                    h = e.getElementsByTagName("common")[0];
                r.font = o.getAttribute("face"), r.size = parseInt(o.getAttribute("size"), 10), r.lineHeight = parseInt(h.getAttribute("lineHeight"), 10), r.chars = {};
                for (var l = e.getElementsByTagName("char"), d = 0; d < l.length; d++) {
                    var u = parseInt(l[d].getAttribute("id"), 10),
                        c = new t.Rectangle(parseInt(l[d].getAttribute("x"), 10), parseInt(l[d].getAttribute("y"), 10), parseInt(l[d].getAttribute("width"), 10), parseInt(l[d].getAttribute("height"), 10));
                    r.chars[u] = {
                        xOffset: parseInt(l[d].getAttribute("xoffset"), 10),
                        yOffset: parseInt(l[d].getAttribute("yoffset"), 10),
                        xAdvance: parseInt(l[d].getAttribute("xadvance"), 10),
                        kerning: {},
                        texture: t.TextureCache[u] = new t.Texture(this.texture, c)
                    }
                }
                var p = e.getElementsByTagName("kerning");
                for (d = 0; d < p.length; d++) {
                    var m = parseInt(p[d].getAttribute("first"), 10),
                        g = parseInt(p[d].getAttribute("second"), 10),
                        f = parseInt(p[d].getAttribute("amount"), 10);
                    r.chars[g].kerning[m] = f
                }
                t.BitmapText.fonts[r.font] = r;
                var y = this;
                a.addEventListener("loaded", function() {
                    y.onLoaded()
                }), a.load()
            }
        }, t.BitmapFontLoader.prototype.onLoaded = function() {
            this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, t.SpineLoader = function(e, i) {
            t.EventTarget.call(this), this.url = e, this.crossorigin = i, this.loaded = !1
        }, t.SpineLoader.prototype.constructor = t.SpineLoader, t.SpineLoader.prototype.load = function() {
            var e = this,
                i = new t.JsonLoader(this.url, this.crossorigin);
            i.addEventListener("loaded", function(t) {
                e.json = t.content.json, e.onLoaded()
            }), i.load()
        }, t.SpineLoader.prototype.onLoaded = function() {
            this.loaded = !0, this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, t.AbstractFilter = function(e, t) {
            this.passes = [this], this.shaders = [], this.dirty = !0, this.padding = 0, this.uniforms = t || {}, this.fragmentSrc = e || []
        }, t.AlphaMaskFilter = function(e) {
            t.AbstractFilter.call(this), this.passes = [this], e.baseTexture._powerOf2 = !0, this.uniforms = {
                mask: {
                    type: "sampler2D",
                    value: e
                },
                mapDimensions: {
                    type: "2f",
                    value: {
                        x: 1,
                        y: 5112
                    }
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, e.baseTexture.hasLoaded ? (this.uniforms.mask.value.x = e.width, this.uniforms.mask.value.y = e.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), e.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D mask;", "uniform sampler2D uSampler;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   mapCords *= dimensions.xy / mapDimensions;", "   vec4 original =  texture2D(uSampler, vTextureCoord);", "   float maskAlpha =  texture2D(mask, mapCords).r;", "   original *= maskAlpha;", "   gl_FragColor =  original;", "}"]
        }, t.AlphaMaskFilter.prototype = Object.create(t.AbstractFilter.prototype), t.AlphaMaskFilter.prototype.constructor = t.AlphaMaskFilter, t.AlphaMaskFilter.prototype.onTextureLoaded = function() {
            this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height, this.uniforms.mask.value.baseTexture.off("loaded", this.boundLoadedFunction)
        }, Object.defineProperty(t.AlphaMaskFilter.prototype, "map", {
            get: function() {
                return this.uniforms.mask.value
            },
            set: function(e) {
                this.uniforms.mask.value = e
            }
        }), t.ColorMatrixFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                matrix: {
                    type: "mat4",
                    value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform mat4 matrix;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;", "}"]
        }, t.ColorMatrixFilter.prototype = Object.create(t.AbstractFilter.prototype), t.ColorMatrixFilter.prototype.constructor = t.ColorMatrixFilter, Object.defineProperty(t.ColorMatrixFilter.prototype, "matrix", {
            get: function() {
                return this.uniforms.matrix.value
            },
            set: function(e) {
                this.uniforms.matrix.value = e
            }
        }), t.GrayFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                gray: {
                    type: "1f",
                    value: 1
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float gray;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);", "}"]
        }, t.GrayFilter.prototype = Object.create(t.AbstractFilter.prototype), t.GrayFilter.prototype.constructor = t.GrayFilter, Object.defineProperty(t.GrayFilter.prototype, "gray", {
            get: function() {
                return this.uniforms.gray.value
            },
            set: function(e) {
                this.uniforms.gray.value = e
            }
        }), t.DisplacementFilter = function(e) {
            t.AbstractFilter.call(this), this.passes = [this], e.baseTexture._powerOf2 = !0, this.uniforms = {
                displacementMap: {
                    type: "sampler2D",
                    value: e
                },
                scale: {
                    type: "2f",
                    value: {
                        x: 30,
                        y: 30
                    }
                },
                offset: {
                    type: "2f",
                    value: {
                        x: 0,
                        y: 0
                    }
                },
                mapDimensions: {
                    type: "2f",
                    value: {
                        x: 1,
                        y: 5112
                    }
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, e.baseTexture.hasLoaded ? (this.uniforms.mapDimensions.value.x = e.width, this.uniforms.mapDimensions.value.y = e.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), e.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D displacementMap;", "uniform sampler2D uSampler;", "uniform vec2 scale;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   vec2 matSample = texture2D(displacementMap, mapCords).xy;", "   matSample -= 0.5;", "   matSample *= scale;", "   matSample /= mapDimensions;", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);", "   vec2 cord = vTextureCoord;", "}"]
        }, t.DisplacementFilter.prototype = Object.create(t.AbstractFilter.prototype), t.DisplacementFilter.prototype.constructor = t.DisplacementFilter, t.DisplacementFilter.prototype.onTextureLoaded = function() {
            this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height, this.uniforms.displacementMap.value.baseTexture.off("loaded", this.boundLoadedFunction)
        }, Object.defineProperty(t.DisplacementFilter.prototype, "map", {
            get: function() {
                return this.uniforms.displacementMap.value
            },
            set: function(e) {
                this.uniforms.displacementMap.value = e
            }
        }), Object.defineProperty(t.DisplacementFilter.prototype, "scale", {
            get: function() {
                return this.uniforms.scale.value
            },
            set: function(e) {
                this.uniforms.scale.value = e
            }
        }), Object.defineProperty(t.DisplacementFilter.prototype, "offset", {
            get: function() {
                return this.uniforms.offset.value
            },
            set: function(e) {
                this.uniforms.offset.value = e
            }
        }), t.PixelateFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                invert: {
                    type: "1f",
                    value: 0
                },
                dimensions: {
                    type: "4fv",
                    value: new Float32Array([1e4, 100, 10, 10])
                },
                pixelSize: {
                    type: "2f",
                    value: {
                        x: 10,
                        y: 10
                    }
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 testDim;", "uniform vec4 dimensions;", "uniform vec2 pixelSize;", "uniform sampler2D uSampler;", "void main(void) {", "   vec2 coord = vTextureCoord;", "   vec2 size = dimensions.xy/pixelSize;", "   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;", "   gl_FragColor = texture2D(uSampler, color);", "}"]
        }, t.PixelateFilter.prototype = Object.create(t.AbstractFilter.prototype), t.PixelateFilter.prototype.constructor = t.PixelateFilter, Object.defineProperty(t.PixelateFilter.prototype, "size", {
            get: function() {
                return this.uniforms.pixelSize.value
            },
            set: function(e) {
                this.dirty = !0, this.uniforms.pixelSize.value = e
            }
        }), t.BlurXFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                blur: {
                    type: "1f",
                    value: 1 / 512
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;", "   gl_FragColor = sum;", "}"]
        }, t.BlurXFilter.prototype = Object.create(t.AbstractFilter.prototype), t.BlurXFilter.prototype.constructor = t.BlurXFilter, Object.defineProperty(t.BlurXFilter.prototype, "blur", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(e) {
                this.dirty = !0, this.uniforms.blur.value = 1 / 7e3 * e
            }
        }), t.BlurYFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                blur: {
                    type: "1f",
                    value: 1 / 512
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;", "   gl_FragColor = sum;", "}"]
        }, t.BlurYFilter.prototype = Object.create(t.AbstractFilter.prototype), t.BlurYFilter.prototype.constructor = t.BlurYFilter, Object.defineProperty(t.BlurYFilter.prototype, "blur", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(e) {
                this.uniforms.blur.value = 1 / 7e3 * e
            }
        }), t.BlurFilter = function() {
            this.blurXFilter = new t.BlurXFilter, this.blurYFilter = new t.BlurYFilter, this.passes = [this.blurXFilter, this.blurYFilter]
        }, Object.defineProperty(t.BlurFilter.prototype, "blur", {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(e) {
                this.blurXFilter.blur = this.blurYFilter.blur = e
            }
        }), Object.defineProperty(t.BlurFilter.prototype, "blurX", {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(e) {
                this.blurXFilter.blur = e
            }
        }), Object.defineProperty(t.BlurFilter.prototype, "blurY", {
            get: function() {
                return this.blurYFilter.blur
            },
            set: function(e) {
                this.blurYFilter.blur = e
            }
        }), t.InvertFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                invert: {
                    type: "1f",
                    value: 1
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);", "}"]
        }, t.InvertFilter.prototype = Object.create(t.AbstractFilter.prototype), t.InvertFilter.prototype.constructor = t.InvertFilter, Object.defineProperty(t.InvertFilter.prototype, "invert", {
            get: function() {
                return this.uniforms.invert.value
            },
            set: function(e) {
                this.uniforms.invert.value = e
            }
        }), t.SepiaFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                sepia: {
                    type: "1f",
                    value: 1
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float sepia;", "uniform sampler2D uSampler;", "const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);", "}"]
        }, t.SepiaFilter.prototype = Object.create(t.AbstractFilter.prototype), t.SepiaFilter.prototype.constructor = t.SepiaFilter, Object.defineProperty(t.SepiaFilter.prototype, "sepia", {
            get: function() {
                return this.uniforms.sepia.value
            },
            set: function(e) {
                this.uniforms.sepia.value = e
            }
        }), t.TwistFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                radius: {
                    type: "1f",
                    value: .5
                },
                angle: {
                    type: "1f",
                    value: 5
                },
                offset: {
                    type: "2f",
                    value: {
                        x: .5,
                        y: .5
                    }
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float radius;", "uniform float angle;", "uniform vec2 offset;", "void main(void) {", "   vec2 coord = vTextureCoord - offset;", "   float distance = length(coord);", "   if (distance < radius) {", "       float ratio = (radius - distance) / radius;", "       float angleMod = ratio * ratio * angle;", "       float s = sin(angleMod);", "       float c = cos(angleMod);", "       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);", "   }", "   gl_FragColor = texture2D(uSampler, coord+offset);", "}"]
        }, t.TwistFilter.prototype = Object.create(t.AbstractFilter.prototype), t.TwistFilter.prototype.constructor = t.TwistFilter, Object.defineProperty(t.TwistFilter.prototype, "offset", {
            get: function() {
                return this.uniforms.offset.value
            },
            set: function(e) {
                this.dirty = !0, this.uniforms.offset.value = e
            }
        }), Object.defineProperty(t.TwistFilter.prototype, "radius", {
            get: function() {
                return this.uniforms.radius.value
            },
            set: function(e) {
                this.dirty = !0, this.uniforms.radius.value = e
            }
        }), Object.defineProperty(t.TwistFilter.prototype, "angle", {
            get: function() {
                return this.uniforms.angle.value
            },
            set: function(e) {
                this.dirty = !0, this.uniforms.angle.value = e
            }
        }), t.ColorStepFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                step: {
                    type: "1f",
                    value: 5
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float step;", "void main(void) {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   color = floor(color * step) / step;", "   gl_FragColor = color;", "}"]
        }, t.ColorStepFilter.prototype = Object.create(t.AbstractFilter.prototype), t.ColorStepFilter.prototype.constructor = t.ColorStepFilter, Object.defineProperty(t.ColorStepFilter.prototype, "step", {
            get: function() {
                return this.uniforms.step.value
            },
            set: function(e) {
                this.uniforms.step.value = e
            }
        }), t.DotScreenFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                scale: {
                    type: "1f",
                    value: 1
                },
                angle: {
                    type: "1f",
                    value: 5
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float angle;", "uniform float scale;", "float pattern() {", "   float s = sin(angle), c = cos(angle);", "   vec2 tex = vTextureCoord * dimensions.xy;", "   vec2 point = vec2(", "       c * tex.x - s * tex.y,", "       s * tex.x + c * tex.y", "   ) * scale;", "   return (sin(point.x) * sin(point.y)) * 4.0;", "}", "void main() {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   float average = (color.r + color.g + color.b) / 3.0;", "   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);", "}"]
        }, t.DotScreenFilter.prototype = Object.create(t.AbstractFilter.prototype), t.DotScreenFilter.prototype.constructor = t.DotScreenFilter, Object.defineProperty(t.DotScreenFilter.prototype, "scale", {
            get: function() {
                return this.uniforms.scale.value
            },
            set: function(e) {
                this.dirty = !0, this.uniforms.scale.value = e
            }
        }), Object.defineProperty(t.DotScreenFilter.prototype, "angle", {
            get: function() {
                return this.uniforms.angle.value
            },
            set: function(e) {
                this.dirty = !0, this.uniforms.angle.value = e
            }
        }), t.CrossHatchFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                blur: {
                    type: "1f",
                    value: 1 / 512
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);", "    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);", "    if (lum < 1.00) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.75) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.50) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.3) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "}"]
        }, t.CrossHatchFilter.prototype = Object.create(t.AbstractFilter.prototype), t.CrossHatchFilter.prototype.constructor = t.BlurYFilter, Object.defineProperty(t.CrossHatchFilter.prototype, "blur", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(e) {
                this.uniforms.blur.value = 1 / 7e3 * e
            }
        }), t.RGBSplitFilter = function() {
            t.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                red: {
                    type: "2f",
                    value: {
                        x: 20,
                        y: 20
                    }
                },
                green: {
                    type: "2f",
                    value: {
                        x: -20,
                        y: 20
                    }
                },
                blue: {
                    type: "2f",
                    value: {
                        x: 20,
                        y: -20
                    }
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 red;", "uniform vec2 green;", "uniform vec2 blue;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;", "   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;", "   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;", "   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;", "}"]
        }, t.RGBSplitFilter.prototype = Object.create(t.AbstractFilter.prototype), t.RGBSplitFilter.prototype.constructor = t.RGBSplitFilter, Object.defineProperty(t.RGBSplitFilter.prototype, "angle", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(e) {
                this.uniforms.blur.value = 1 / 7e3 * e
            }
        }), "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = t), exports.PIXI = t) : "undefined" != typeof define && define.amd ? define(t) : e.PIXI = t
    }).call(this)
}), game.module("engine.pool").body(function() {
    game.Pool = game.Class.extend({
        create: function(e) {
            return this[e] ? !1 : (this[e] = [], !0)
        },
        get: function(e) {
            return this[e] && 0 !== this[e].length ? this[e].pop() : !1
        },
        put: function(e, t) {
            return this[e] ? (this[e].push(t), !0) : !1
        }
    })
}), game.module("engine.renderer").require("engine.pixi").body(function() {
    game.PIXI.dontSayHello = !0, game.PIXI.extend = function(e) {
        function t() {
            var t;
            this.init ? this.init.apply(this, arguments) : this.base.apply(this, arguments);
            for (t in s) "function" == typeof s[t] || this[t] || (this[t] = game.copy(s[t]));
            for (t in e) "function" == typeof e[t] || this[t] || (this[t] = game.copy(e[t]))
        }
        var i, s = this.prototype,
            n = this.prototype.base || this;
        t.prototype = Object.create(n.prototype);
        var a = function(e, t) {
            var i = s[e];
            return "init" !== e || i || (i = n),
                function() {
                    var e = this._super;
                    this._super = i;
                    var s = t.apply(this, arguments);
                    return this._super = e, s
                }
        };
        for (i in s) t.prototype[i] = "function" == typeof s[i] ? a(i, s[i]) : s[i];
        for (i in e) t.prototype[i] = "function" == typeof e[i] ? a(i, e[i]) : e[i];
        return t.prototype.constructor = t, t.prototype.base = n, t.extend = game.PIXI.extend, t
    };
    for (var e in game.PIXI) game.PIXI[e].prototype instanceof Object && (game.PIXI[e].extend = game.PIXI.extend);
    game.AssetLoader = game.PIXI.AssetLoader, game.Text = game.PIXI.Text, game.HitRectangle = game.PIXI.Rectangle, game.HitCircle = game.PIXI.Circle, game.HitEllipse = game.PIXI.Ellipse, game.HitPolygon = game.PIXI.Polygon, game.TextureCache = game.PIXI.TextureCache, game.RenderTexture = game.PIXI.RenderTexture, game.Point = game.PIXI.Point, game.CanvasRenderer = game.PIXI.CanvasRenderer, game.autoDetectRenderer = game.PIXI.autoDetectRenderer, game.Stage = game.PIXI.Stage, game.blendModes = game.PIXI.blendModes, game.BaseTexture = game.PIXI.BaseTexture, game.Sprite = game.PIXI.Sprite.extend({
        debugDraw: !0,
        init: function(e, t, i, s) {
            "string" == typeof e && (e = game.paths[e] || e, e = game.Texture.fromFrame(e)), this._super(e), game.merge(this, s), "number" == typeof t && (this.position.x = t), "number" == typeof i && (this.position.y = i), game.device.mobile && !this.tap && this.click && (this.tap = this.click), game.device.mobile && !this.touchmove && this.mousemove && (this.touchmove = this.mousemove), game.device.mobile && !this.touchstart && this.mousedown && (this.touchstart = this.mousedown), game.device.mobile && !this.touchend && this.mouseup && (this.touchend = this.mouseup), game.device.mobile && !this.touchendoutside && this.mouseupoutside && (this.touchendoutside = this.mouseupoutside)
        },
        setTexture: function(e) {
            "string" == typeof e && (e = game.paths[e] || e, e = game.Texture.fromFrame(e)), this._super(e)
        },
        crop: function(e, t, i, s) {
            var n = new game.PIXI.Texture(this.texture, new game.HitRectangle(e, t, i, s));
            return this.setTexture(n), this
        },
        center: function(e, t) {
            return this.position.x = game.system.width / 2 - this.width / 2 + this.width * this.anchor.x, this.position.y = game.system.height / 2 - this.height / 2 + this.height * this.anchor.y, this.position.x += e || 0, this.position.y += t || 0, this
        },
        remove: function() {
            this.parent && this.parent.removeChild(this)
        },
        addChild: function(e) {
            this._super(e), game.debugDraw && e.interactive && e.debugDraw && game.debugDraw.addSprite(e)
        },
        addTo: function(e) {
            return e.addChild(this), this
        }
    }), game.SpriteSheet = game.Class.extend({
        init: function(e, t, i) {
            this.width = t, this.height = i, this.texture = game.TextureCache[game.paths[e]], this.sx = Math.floor(this.texture.width / this.width), this.sy = Math.floor(this.texture.height / this.height), this.frames = this.sx * this.sy
        },
        frame: function(e) {
            e = e.limit(0, this.frames - 1);
            for (var t = 0, i = 0; i < this.sy; i++)
                for (var s = 0; s < this.sx; s++) {
                    if (t === e) {
                        var n = new game.Sprite(this.texture);
                        return n.crop(s * this.width, i * this.height, this.width, this.height), n
                    }
                    t++
                }
        },
        anim: function(e, t) {
            t = t || 0, e = e || this.frames;
            for (var i = [], s = 0; e > s; s++) i.push(this.frame(t + s).texture);
            return new game.Animation(i)
        }
    }), game.Graphics = game.PIXI.Graphics.extend({
        addTo: function(e) {
            return e.addChild(this), this
        }
    }), game.BitmapText = game.PIXI.BitmapText.extend({
        addTo: function(e) {
            return e.addChild(this), this
        }
    }), game.Spine = game.PIXI.Spine.extend({
        init: function(e, t) {
            this._super(game.paths[e] || e), game.merge(this, t)
        },
        play: function(e, t, i) {
            i ? this.state.addAnimationByName(e, !!t) : this.state.setAnimationByName(e, !!t)
        },
        mix: function(e, t, i) {
            this.stateData.setMixByName(e, t, i / 100)
        }
    }), game.Container = game.PIXI.DisplayObjectContainer.extend({
        debugDraw: !0,
        remove: function() {
            this.parent && this.parent.removeChild(this)
        },
        addChild: function(e) {
            this._super(e), game.debugDraw && e.interactive && e.debugDraw && game.debugDraw.addSprite(e)
        },
        addTo: function(e) {
            return e.addChild(this), this
        }
    }), game.Texture = game.PIXI.Texture.extend(), game.Texture.fromImage = function(e, t) {
        return e = game.paths[e] || e, game.PIXI.Texture.fromImage(e, t)
    }, game.Texture.fromCanvas = game.PIXI.Texture.fromCanvas, game.Texture.fromFrame = game.PIXI.Texture.fromFrame, game.TilingSprite = game.PIXI.TilingSprite.extend({
        speed: null,
        init: function(e, t, i, s) {
            this.speed = new game.Point, e = game.paths[e] || e;
            var n = e instanceof game.Texture ? e : e instanceof game.RenderTexture ? e : game.Texture.fromFrame(this.path || e);
            this._super(n, t || n.width, i || n.height), game.merge(this, s)
        },
        update: function() {
            this.tilePosition.x += this.speed.x * game.system.delta, this.tilePosition.y += this.speed.y * game.system.delta
        },
        addTo: function(e) {
            return e.addChild(this), this
        }
    }), game.Animation = game.PIXI.MovieClip.extend({
        init: function(e) {
            if ("string" == typeof e)
                for (var t = Array.prototype.slice.call(arguments), e = [], i = 0; i < t.length; i++) e.push(game.Texture.fromImage(t[i]));
            this._super(e)
        },
        addTo: function(e) {
            return e.addChild(this), this
        },
        remove: function() {
            this.parent && this.parent.removeChild(this)
        },
        updateTransform: function() {
            this.currentFrame -= this.animationSpeed, this.currentFrame += 60 * this.animationSpeed * game.system.delta, this._super()
        }
    })
}), game.module("engine.scene").body(function() {
    game.Scene = game.Class.extend({
        backgroundColor: 0,
        objects: [],
        timers: [],
        emitters: [],
        stage: null,
        swipeDist: 100,
        swipeTime: 500,
        staticInit: function() {
            game.scene = this;
            for (var e = game.system.stage.children.length - 1; e >= 0; e--) game.system.stage.removeChild(game.system.stage.children[e]);
            game.system.stage.setBackgroundColor(this.backgroundColor), game.system.stage.mousemove = game.system.stage.touchmove = this._mousemove.bind(this), game.system.stage.click = game.system.stage.tap = this.click.bind(this), game.system.stage.mousedown = game.system.stage.touchstart = this._mousedown.bind(this), game.system.stage.mouseup = game.system.stage.mouseupoutside = game.system.stage.touchend = game.system.stage.touchendoutside = this.mouseup.bind(this), game.system.stage.mouseout = this.mouseout.bind(this), this.stage = new game.Container, game.system.stage.addChild(this.stage), game.audio && game.System.stopAudioOnSceneChange && (game.audio.stopMusic(), game.audio.stopSound(), game.audio.pausedSounds.length = 0, game.audio.playingSounds.length = 0), game.debugDraw && game.debugDraw.reset()
        },
        update: function() {
            var e;
            for (this.world && this.world.update(), e = this.timers.length - 1; e >= 0; e--) this.timers[e].time() >= 0 && ("function" == typeof this.timers[e].callback && this.timers[e].callback(), this.timers[e].repeat ? this.timers[e].reset() : this.timers.splice(e, 1));
            for (e = this.emitters.length - 1; e >= 0; e--) this.emitters[e].update(), this.emitters[e]._remove && this.emitters.splice(e, 1);
            for (game.tweenEngine && game.tweenEngine.update(), e = this.objects.length - 1; e >= 0; e--) "function" == typeof this.objects[e].update && this.objects[e].update(), this.objects[e]._remove && this.objects.splice(e, 1)
        },
        addObject: function(e) {
            e._remove && (e._remove = !1), this.objects.push(e)
        },
        removeObject: function(e) {
            e._remove = !0
        },
        addEmitter: function(e) {
            this.emitters.push(e)
        },
        removeEmitter: function(e) {
            e.remove()
        },
        addTimer: function(e, t, i) {
            var s = new game.Timer(e);
            return s.repeat = !!i, s.callback = t, this.timers.push(s), s
        },
        removeTimer: function(e, t) {
            t || (e.callback = null), e.repeat = !1, e.set(0)
        },
        addTween: function(e, t, i, s) {
            var n = new game.Tween(e);
            n.to(t, i);
            for (var a in s) n[a](s[a]);
            return n
        },
        click: function() {},
        mousedown: function() {},
        mouseup: function() {},
        mousemove: function() {},
        mouseout: function() {},
        keydown: function() {},
        keyup: function() {},
        _mousedown: function(e) {
            e.startTime = Date.now(), e.swipeX = e.global.x, e.swipeY = e.global.y, this.mousedown(e)
        },
        _mousemove: function(e) {
            this.mousemove(e), e.startTime && (e.global.x - e.swipeX >= this.swipeDist ? this._swipe(e, "right") : e.global.x - e.swipeX <= -this.swipeDist ? this._swipe(e, "left") : e.global.y - e.swipeY >= this.swipeDist ? this._swipe(e, "down") : e.global.y - e.swipeY <= -this.swipeDist && this._swipe(e, "up"))
        },
        _swipe: function(e, t) {
            var i = Date.now() - e.startTime;
            e.startTime = null, i <= this.swipeTime && this.swipe(t)
        },
        swipe: function() {},
        run: function() {
            this.update(), game.debugDraw && game.debugDraw.update(), this.render()
        },
        render: function() {
            game.renderer.render(game.system.stage)
        },
        pause: function() {
            game.audio && game.audio.systemPause()
        },
        resume: function() {
            game.audio && game.audio.systemResume()
        }
    })
}), game.module("engine.storage").body(function() {
    game.Storage = game.Class.extend({
        id: null,
        init: function(e) {
            this.id = e
        },
        set: function(e, t) {
            localStorage.setItem(this.id + "." + e, this.encode(t))
        },
        get: function(e, t) {
            var i = localStorage.getItem(this.id + "." + e);
            if (null === i) return t;
            try {
                return this.decode(i)
            } catch (s) {
                return i
            }
        },
        has: function(e) {
            return null !== localStorage.getItem(this.id + "." + e)
        },
        remove: function(e) {
            localStorage.removeItem(this.id + "." + e)
        },
        reset: function() {
            for (var e = localStorage.length - 1; e >= 0; e--) {
                var t = localStorage.key(e); - 1 !== t.indexOf(this.id + ".") && localStorage.removeItem(t)
            }
        },
        encode: function(e) {
            return JSON.stringify(e)
        },
        decode: function(e) {
            return JSON.parse(e)
        }
    }), game.Storage.id = ""
}), game.module("engine.system").body(function() {
    game.System = game.Class.extend({
        width: null,
        height: null,
        delta: 0,
        timer: null,
        canvas: null,
        canvasId: "canvas",
        paused: !1,
        hires: !1,
        retina: !1,
        rotateScreenVisible: !1,
        gameLoopId: 0,
        newSceneClass: null,
        running: !1,
        init: function(e, t, i) {
            if (e = e || game.System.width, t = t || game.System.height, "window" === e && (e = window.innerWidth), "window" === t && (t = window.innerHeight), game.System.resizeToFill && navigator.isCocoonJS && window.innerWidth / window.innerHeight !== e / t && (e > t ? e = t * (window.innerWidth / window.innerHeight) : t = e * (window.innerHeight / window.innerWidth)), game.System.hires && ("number" == typeof game.System.hiresWidth && "number" == typeof game.System.hiresHeight ? window.innerWidth >= game.System.hiresWidth && window.innerHeight >= game.System.hiresHeight && (this.hires = !0) : window.innerWidth >= e * game.System.hiresFactor && window.innerHeight >= t * game.System.hiresFactor && (this.hires = !0)), game.System.retina && 2 === game.device.pixelRatio && (this.retina = !0), (this.hires || this.retina) && (e *= 2, t *= 2, game.scale = 2), this.width = e, this.height = t, this.canvasId = i || game.System.canvasId || this.canvasId, this.timer = new game.Timer, !document.getElementById(this.canvasId)) {
                var s = document.createElement(navigator.isCocoonJS && game.System.screenCanvas ? "screencanvas" : "canvas");
                s.id = this.canvasId, document.body.appendChild(s)
            }
            if (game.PIXI.scaleModes.DEFAULT = game.PIXI.scaleModes[game.System.scaleMode.toUpperCase()] || 0, this.renderer = game.System.webGL ? new game.autoDetectRenderer(e, t, document.getElementById(this.canvasId), game.System.transparent, game.System.antialias) : new game.CanvasRenderer(e, t, document.getElementById(this.canvasId), game.System.transparent), this.canvas = this.renderer.view, this.stage = new game.Stage, game.normalizeVendorAttribute(this.canvas, "requestFullscreen"), game.normalizeVendorAttribute(this.canvas, "requestFullScreen"), game.normalizeVendorAttribute(navigator, "vibrate"), document.body.style.margin = 0, this.retina ? (this.canvas.style.width = e / 2 + "px", this.canvas.style.height = t / 2 + "px") : (this.canvas.style.width = e + "px", this.canvas.style.height = t + "px"), window.addEventListener("devicemotion", function(e) {
                    game.accelerometer = game.accel = e.accelerationIncludingGravity
                }, !1), game.renderer = this.renderer, navigator.isCocoonJS) this.canvas.style.cssText = "idtkscale:" + game.System.idtkScale + ";";
            else {
                var n;
                "undefined" != typeof document.hidden ? n = "visibilitychange" : "undefined" != typeof document.mozHidden ? n = "mozvisibilitychange" : "undefined" != typeof document.msHidden ? n = "msvisibilitychange" : "undefined" != typeof document.webkitHidden && (n = "webkitvisibilitychange"), document.addEventListener(n, function() {
                    if (game.System.pauseOnHide) {
                        var e = !!game.getVendorAttribute(document, "hidden");
                        e ? game.system.pause(!0) : game.system.resume(!0)
                    }
                }, !1), game.System.bgColor && !game.System.bgColorMobile && (game.System.bgColorMobile = game.System.bgColor), game.System.bgColorMobile && !game.System.bgColorRotate && (game.System.bgColorRotate = game.System.bgColorMobile), game.System.bgImage && !game.System.bgImageMobile && (game.System.bgImageMobile = game.System.bgImage), game.System.bgImageMobile && !game.System.bgImageRotate && (game.System.bgImageRotate = game.System.bgImageMobile), game.device.mobile || (game.System.bgColor && (document.body.style.backgroundColor = game.System.bgColor), game.System.bgImage && (document.body.style.backgroundImage = "url(" + game.config.mediaFolder + game.System.bgImage + ")")), game.System.bgPosition && (document.body.style.backgroundPosition = game.System.bgPosition), this.initResize()
            }
        },
        vibrate: function(e) {
            return navigator.vibrate ? navigator.vibrate(e) : !1
        },
        pause: function(e) {
            this.paused || (e ? this.pausedOnHide = !0 : this.paused = !0, game.scene && game.scene.pause())
        },
        resume: function(e) {
            e && this.paused || (e || this.paused) && (e ? this.pausedOnHide = !1 : this.paused = !1, game.Timer.last = Date.now(), game.scene && game.scene.resume())
        },
        setScene: function(e) {
            "string" == typeof e && (e = game["Scene" + e]), this.running ? this.newSceneClass = e : this.setSceneNow(e)
        },
        setSceneNow: function(e) {
            game.tweenEngine && (game.tweenEngine.tweens.length = 0), game.scene = new e, game.Debug && game.Debug.enabled && !navigator.isCocoonJS && !this.debug && (this.debug = new game.Debug), this.newSceneClass = null, this.startRunLoop()
        },
        startRunLoop: function() {
            this.gameLoopId && this.stopRunLoop(), this.gameLoopId = game.setGameLoop(this.run.bind(this), this.canvas), this.running = !0
        },
        stopRunLoop: function() {
            game.clearGameLoop(this.gameLoopId), this.running = !1
        },
        run: function() {
            this.paused || this.pausedOnHide || (game.Timer.update(), this.delta = this.timer.delta() / 1e3, game.scene.run(), this.debug && this.debug.update(), this.newSceneClass && this.setSceneNow(this.newSceneClass))
        },
        resize: function(e, t) {
            this.width = this.canvas.width = e, this.height = this.canvas.height = t, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.renderer.resize(this.width, this.height)
        },
        initResize: function() {
            if (this.ratio = this.width > this.height ? this.width / this.height : this.height / this.width, game.System.center && (this.canvas.style.margin = "auto"), game.device.mobile) {
                if (game.System.center || (this.canvas.style.position = "absolute", this.canvas.style.left = game.System.left + "px", this.canvas.style.top = game.System.top + "px"), document.addEventListener("touchstart", function(e) {
                        e.preventDefault()
                    }, !1), game.System.rotateScreen) {
                    var e = document.createElement("div");
                    if (e.innerHTML = game.System.rotateImg ? "" : game.System.rotateMsg, e.style.position = "absolute", e.style.height = "12px", e.style.textAlign = "center", e.style.left = 0, e.style.right = 0, e.style.top = 0, e.style.bottom = 0, e.style.margin = "auto", e.style.display = "none", e.id = "panda-rotate", game.System.rotateDiv = e, document.body.appendChild(game.System.rotateDiv), game.System.rotateImg) {
                        var t = new Image,
                            i = this;
                        t.onload = function() {
                            e.image = t, e.style.height = t.height + "px", e.appendChild(t), i.resizeRotateImage()
                        }, t.src = 0 === game.System.rotateImg.indexOf("data:") ? game.System.rotateImg : game.config.mediaFolder + game.System.rotateImg, t.style.position = "relative", t.style.maxWidth = "100%"
                    }
                }
            } else if ((game.System.center || game.System.left || game.System.top) && (this.canvas.style.position = "absolute"), game.System.center ? (this.canvas.style.top = 0, this.canvas.style.left = 0, this.canvas.style.bottom = 0, this.canvas.style.right = 0) : (game.System.left || game.System.top) && (this.canvas.style.left = game.System.left + "px", this.canvas.style.top = game.System.top + "px"), game.System.scale) {
                var s = "auto" === game.System.minWidth ? this.retina ? this.width / 4 : this.width / 2 : game.System.minWidth,
                    n = "auto" === game.System.minHeight ? this.retina ? this.height / 4 : this.height / 2 : game.System.minHeight,
                    a = "auto" === game.System.maxWidth ? this.retina ? this.width / 2 : this.width : game.System.maxWidth,
                    r = "auto" === game.System.maxHeight ? this.retina ? this.height / 2 : this.height : game.System.maxHeight;
                game.System.minWidth && (this.canvas.style.minWidth = s + "px"), game.System.minHeight && (this.canvas.style.minHeight = n + "px"), game.System.maxWidth && !game.System.scaleToFit && (this.canvas.style.maxWidth = a + "px"), game.System.maxHeight && !game.System.scaleToFit && (this.canvas.style.maxHeight = r + "px")
            }
            "undefined" == typeof window.onorientationchange || game.device.android ? window.onresize = this.onResize.bind(this) : window.onorientationchange = this.onResize.bind(this), this.onResize()
        },
        checkOrientation: function() {
            this.orientation = window.innerWidth < window.innerHeight ? "portrait" : "landscape", game.device.android2 && 320 === window.innerWidth && 251 === window.innerHeight && (this.orientation = "portrait"), this.rotateScreenVisible = this.width > this.height && "landscape" !== this.orientation ? !0 : this.width < this.height && "portrait" !== this.orientation ? !0 : !1, game.System.rotateScreen || (this.rotateScreenVisible = !1), this.canvas.style.display = this.rotateScreenVisible ? "none" : "block", game.System.rotateDiv && (game.System.rotateDiv.style.display = this.rotateScreenVisible ? "block" : "none"), this.rotateScreenVisible && game.System.bgColorRotate && (document.body.style.backgroundColor = game.System.bgColorRotate), !this.rotateScreenVisible && game.System.bgColorMobile && (document.body.style.backgroundColor = game.System.bgColorMobile), this.rotateScreenVisible && game.System.bgImageRotate && (document.body.style.backgroundImage = "url(" + game.config.mediaFolder + game.System.bgImageRotate + ")"), !this.rotateScreenVisible && game.System.bgImageMobile && (document.body.style.backgroundImage = "url(" + game.config.mediaFolder + game.System.bgImageMobile + ")"), this.rotateScreenVisible && game.system && "function" == typeof game.system.pause && game.system.pause(), !this.rotateScreenVisible && game.system && "function" == typeof game.system.resume && game.system.resume(), this.rotateScreenVisible && this.resizeRotateImage()
        },
        resizeRotateImage: function() {
            this.rotateScreenVisible && game.System.rotateDiv.image && window.innerHeight < game.System.rotateDiv.image.height && (game.System.rotateDiv.image.style.height = window.innerHeight + "px", game.System.rotateDiv.image.style.width = "auto", game.System.rotateDiv.style.height = window.innerHeight + "px", game.System.rotateDiv.style.bottom = "auto")
        },
        onResize: function() {
            if (game.device.mobile && this.checkOrientation(), game.System.scale)
                if (game.device.mobile) {
                    this.ratio = "landscape" === this.orientation ? this.width / this.height : this.height / this.width;
                    var e = window.innerWidth,
                        t = window.innerHeight;
                    game.device.iOS7 && 256 === window.innerHeight && (t = 320), game.device.iOS7 && 319 === window.innerHeight && (t = 320), game.device.iOS7 && 2 === game.device.pixelRatio && "landscape" === this.orientation && (t += 2), game.device.iPad && 671 === t && (t = 672), game.System.resizeToFill && !this.rotateScreenVisible && game.System.rotateScreen && e / t !== this.width / this.height && ("landscape" === this.orientation ? this.width = Math.ceil(this.height * (e / t)) : this.height = Math.ceil(this.width * (t / e)), this.renderer.resize(this.width, this.height)), this.width > this.height ? "landscape" === this.orientation && t * this.ratio <= e ? (this.canvas.style.height = t + "px", this.canvas.style.width = t * this.width / this.height + "px") : (this.canvas.style.width = e + "px", this.canvas.style.height = e * this.height / this.width + "px") : "portrait" === this.orientation && e * this.ratio <= t ? (this.canvas.style.width = e + "px", this.canvas.style.height = e * this.height / this.width + "px") : (this.canvas.style.height = t + "px", this.canvas.style.width = t * this.width / this.height + "px"), game.device.ejecta || window.scroll(0, 1), this.rotateScreenVisible || !game.loader || game.loader.started || game.loader.start()
                } else {
                    if (0 === window.innerWidth) return;
                    window.innerWidth < this.width || window.innerHeight < this.height || game.System.scaleToFit ? window.innerWidth / this.width < window.innerHeight / this.height ? (this.canvas.style.width = window.innerWidth + "px", this.canvas.style.height = window.innerWidth * (this.height / this.width) + "px") : (this.canvas.style.height = window.innerHeight + "px", this.canvas.style.width = window.innerHeight * (this.width / this.height) + "px") : (this.canvas.style.width = this.width + "px", this.canvas.style.height = this.height + "px")
                }
        }
    }), game.System.center = !0, game.System.left = 0, game.System.top = 0, game.System.scale = !0, game.System.minWidth = "auto", game.System.minHeight = "auto", game.System.maxWidth = "auto", game.System.maxHeight = "auto", game.System.idtkScale = "ScaleAspectFit", game.System.screenCanvas = !0, game.System.hires = !1, game.System.hiresFactor = 1.5, game.System.hiresWidth = null, game.System.hiresHeight = null, game.System.retina = !1, game.System.pauseOnHide = !0, game.System.rotateScreen = !0, game.System.width = 1024, game.System.height = 768, game.System.bgColor = null, game.System.bgColorMobile = null, game.System.bgColorRotate = null, game.System.bgImage = null, game.System.bgImageMobile = null, game.System.bgImageRotate = null, game.System.bgPosition = null, game.System.rotateMsg = "Please rotate your device", game.System.rotateImg = null, game.System.webGL = !1, game.System.transparent = !1, game.System.antialias = !1, game.System.resizeToFill = !1, game.System.startScene = "Main", game.System.scaleToFit = !1, game.System.canvasId = null, game.System.scaleMode = "linear", game.System.stopAudioOnSceneChange = !0
}), game.module("engine.timer").body(function() {
    game.Timer = game.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pauseTime: 0,
        init: function(e) {
            this.last = game.Timer.time, this.set(e)
        },
        set: function(e) {
            "number" != typeof e && (e = 0), this.target = e || 0, this.reset()
        },
        reset: function() {
            this.base = game.Timer.time, this.pauseTime = 0
        },
        delta: function() {
            var e = game.Timer.time - this.last;
            return this.last = game.Timer.time, this.pauseTime ? 0 : e
        },
        time: function() {
            var e = (this.pauseTime || game.Timer.time) - this.base - this.target;
            return e
        },
        pause: function() {
            this.pauseTime || (this.pauseTime = game.Timer.time)
        },
        resume: function() {
            this.pauseTime && (this.base += game.Timer.time - this.pauseTime, this.pauseTime = 0)
        }
    }), game.Timer.last = 0, game.Timer.time = Number.MIN_VALUE, game.Timer.speedFactor = 1, game.Timer.maxStep = 50, game.Timer.update = function() {
        var e = Date.now();
        game.Timer.last || (game.Timer.last = e), game.Timer.time += Math.min(e - game.Timer.last, game.Timer.maxStep) * game.Timer.speedFactor, game.Timer.last = e
    }
}), game.module("engine.tween").body(function() {
    game.TweenEngine = game.Class.extend({
        tweens: [],
        removeAll: function() {
            for (var e = 0; e < this.tweens.length; e++) this.tweens[e].shouldRemove = !0
        },
        stopTweensForObject: function(e) {
            for (var t = this.tweens.length - 1; t >= 0; t--) this.tweens[t].object === e && this.tweens[t].stop()
        },
        getTweenForObject: function(e) {
            for (var t = this.tweens.length - 1; t >= 0; t--)
                if (this.tweens[t].object === e) return this.tweens[t];
            return !1
        },
        add: function(e) {
            this.tweens.push(e)
        },
        remove: function(e) {
            var t = this.tweens.indexOf(e); - 1 !== t && (this.tweens[t].shouldRemove = !0)
        },
        update: function() {
            if (0 === this.tweens.length) return !1;
            for (var e = this.tweens.length - 1; e >= 0; e--) this.tweens[e].update() || this.tweens.splice(e, 1);
            return !0
        }
    }), game.Tween = game.Class.extend({
        playing: !1,
        paused: !1,
        object: null,
        valuesStart: {},
        valuesEnd: null,
        valuesStartRepeat: {},
        duration: 1e3,
        repeatCount: 0,
        repeats: 0,
        yoyoEnabled: !1,
        reversed: !1,
        delayTime: 0,
        delayRepeat: !1,
        startTime: null,
        originalStartTime: null,
        easingFunction: null,
        interpolationFunction: null,
        chainedTweens: [],
        onStartCallback: null,
        onStartCallbackFired: !1,
        onUpdateCallback: null,
        onCompleteCallback: null,
        onRepeatCallback: null,
        currentTime: 0,
        shouldRemove: !1,
        init: function(e) {
            if (!e) throw "No object defined for tween";
            if ("object" != typeof e) throw "Tween parameter must be object";
            this.object = e, this.easingFunction = game.Tween.Easing.Linear.None, this.interpolationFunction = game.Tween.Interpolation.Linear;
            for (var t in e) this.valuesStart[t] = parseFloat(e[t], 10)
        },
        to: function(e, t) {
            return this.duration = t || this.duration, this.valuesEnd = e, this
        },
        start: function() {
            game.tweenEngine.add(this), this.playing = !0, this.onStartCallbackFired = !1, this.startTime = this.delayTime, this.originalStartTime = this.startTime;
            for (var e in this.valuesEnd) {
                if (this.valuesEnd[e] instanceof Array) {
                    if (0 === this.valuesEnd[e].length) continue;
                    this.valuesEnd[e] = [this.object[e]].concat(this.valuesEnd[e])
                }
                this.valuesStart[e] = this.object[e], this.valuesStart[e] instanceof Array == !1 && (this.valuesStart[e] *= 1), this.valuesStartRepeat[e] = this.valuesStart[e] || 0
            }
            return this
        },
        stop: function() {
            return this.playing ? (game.tweenEngine.remove(this), this.playing = !1, this.stopChainedTweens(), this) : this
        },
        pause: function() {
            this.paused = !0
        },
        resume: function() {
            this.paused = !1
        },
        stopChainedTweens: function() {
            for (var e = 0, t = this.chainedTweens.length; t > e; e++) this.chainedTweens[e].stop()
        },
        delay: function(e, t) {
            return this.delayTime = e, this.delayRepeat = !!t, this
        },
        repeat: function(e) {
            return "undefined" == typeof e && (e = 1 / 0), this.repeatCount = e, this
        },
        yoyo: function(e) {
            return "undefined" == typeof e && (e = !0), this.yoyoEnabled = e, this
        },
        easing: function(e) {
            return "string" == typeof e ? (e = e.split("."), this.easingFunction = game.Tween.Easing[e[0]][e[1]]) : this.easingFunction = e, this
        },
        interpolation: function(e) {
            return this.interpolationFunction = e, this
        },
        chain: function() {
            return this.chainedTweens = arguments, this
        },
        onStart: function(e) {
            return this.onStartCallback = e, this
        },
        onUpdate: function(e) {
            return this.onUpdateCallback = e, this
        },
        onComplete: function(e) {
            return this.onCompleteCallback = e, this
        },
        onRepeat: function(e) {
            return this.onRepeatCallback = e, this
        },
        update: function() {
            if (this.shouldRemove) return !1;
            if (this.paused) return !0;
            if (this.currentTime += 1e3 * game.system.delta, this.currentTime < this.startTime) return !0;
            this.onStartCallbackFired === !1 && (null !== this.onStartCallback && this.onStartCallback.call(this.object), this.onStartCallbackFired = !0);
            var e = (this.currentTime - this.startTime) / this.duration;
            e = e > 1 ? 1 : e;
            var t, i = this.easingFunction(e);
            for (t in this.valuesEnd) {
                var s = this.valuesStart[t] || 0,
                    n = this.valuesEnd[t];
                n instanceof Array ? this.object[t] = this.interpolationFunction(n, i) : ("string" == typeof n && (n = s + parseFloat(n, 10)), "number" == typeof n && (this.object[t] = s + (n - s) * i))
            }
            if (null !== this.onUpdateCallback && this.onUpdateCallback.call(this.object, i), 1 === e) {
                if (this.repeatCount > 0) {
                    isFinite(this.repeatCount) && this.repeatCount--, this.repeats += 1;
                    for (t in this.valuesStartRepeat) {
                        if ("string" == typeof this.valuesEnd[t] && (this.valuesStartRepeat[t] = this.valuesStartRepeat[t] + parseFloat(this.valuesEnd[t], 10)), this.yoyoEnabled) {
                            var a = this.valuesStartRepeat[t];
                            this.valuesStartRepeat[t] = this.valuesEnd[t], this.valuesEnd[t] = a, this.reversed = !this.reversed
                        }
                        this.valuesStart[t] = this.valuesStartRepeat[t]
                    }
                    return this.delayRepeat || (this.delayTime = 0), this.startTime = this.originalStartTime + this.repeats * (this.duration + this.delayTime), null !== this.onRepeatCallback && this.onRepeatCallback.call(this.object), !0
                }
                this.playing = !1, null !== this.onCompleteCallback && this.onCompleteCallback.call(this.object);
                for (var r = 0, o = this.chainedTweens.length; o > r; r++) this.chainedTweens[r].start();
                return !1
            }
            return !0
        }
    }), game.Tween.Easing = {
        Linear: {
            None: function(e) {
                return e
            }
        },
        Quadratic: {
            In: function(e) {
                return e * e
            },
            Out: function(e) {
                return e * (2 - e)
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            }
        },
        Cubic: {
            In: function(e) {
                return e * e * e
            },
            Out: function(e) {
                return --e * e * e + 1
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            }
        },
        Quartic: {
            In: function(e) {
                return e * e * e * e
            },
            Out: function(e) {
                return 1 - --e * e * e * e
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            }
        },
        Quintic: {
            In: function(e) {
                return e * e * e * e * e
            },
            Out: function(e) {
                return --e * e * e * e * e + 1
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            }
        },
        Sinusoidal: {
            In: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Out: function(e) {
                return Math.sin(e * Math.PI / 2)
            },
            InOut: function(e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }
        },
        Exponential: {
            In: function(e) {
                return 0 === e ? 0 : Math.pow(1024, e - 1)
            },
            Out: function(e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            },
            InOut: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
            }
        },
        Circular: {
            In: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Out: function(e) {
                return Math.sqrt(1 - --e * e)
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }
        },
        Elastic: {
            In: function(e) {
                var t, i = .1,
                    s = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || 1 > i ? (i = 1, t = s / 4) : t = s * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / s)))
            },
            Out: function(e) {
                var t, i = .1,
                    s = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || 1 > i ? (i = 1, t = s / 4) : t = s * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * e) * Math.sin(2 * (e - t) * Math.PI / s) + 1)
            },
            InOut: function(e) {
                var t, i = .1,
                    s = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || 1 > i ? (i = 1, t = s / 4) : t = s * Math.asin(1 / i) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / s) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / s) * .5 + 1)
            }
        },
        Back: {
            In: function(e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            },
            Out: function(e) {
                var t = 1.70158;
                return --e * e * ((t + 1) * e + t) + 1
            },
            InOut: function(e) {
                var t = 2.5949095;
                return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }
        },
        Bounce: {
            In: function(e) {
                return 1 - game.Tween.Easing.Bounce.Out(1 - e)
            },
            Out: function(e) {
                return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            },
            InOut: function(e) {
                return .5 > e ? .5 * game.Tween.Easing.Bounce.In(2 * e) : .5 * game.Tween.Easing.Bounce.Out(2 * e - 1) + .5
            }
        }
    }, game.Tween.Interpolation = {
        Linear: function(e, t) {
            var i = e.length - 1,
                s = i * t,
                n = Math.floor(s),
                a = game.Tween.Interpolation.Utils.Linear;
            return 0 > t ? a(e[0], e[1], s) : t > 1 ? a(e[i], e[i - 1], i - s) : a(e[n], e[n + 1 > i ? i : n + 1], s - n)
        },
        Bezier: function(e, t) {
            var i, s = 0,
                n = e.length - 1,
                a = Math.pow,
                r = game.Tween.Interpolation.Utils.Bernstein;
            for (i = 0; n >= i; i++) s += a(1 - t, n - i) * a(t, i) * e[i] * r(n, i);
            return s
        },
        CatmullRom: function(e, t) {
            var i = e.length - 1,
                s = i * t,
                n = Math.floor(s),
                a = game.Tween.Interpolation.Utils.CatmullRom;
            return e[0] === e[i] ? (0 > t && (n = Math.floor(s = i * (1 + t))), a(e[(n - 1 + i) % i], e[n], e[(n + 1) % i], e[(n + 2) % i], s - n)) : 0 > t ? e[0] - (a(e[0], e[0], e[1], e[1], -s) - e[0]) : t > 1 ? e[i] - (a(e[i], e[i], e[i - 1], e[i - 1], s - i) - e[i]) : a(e[n ? n - 1 : 0], e[n], e[n + 1 > i ? i : n + 1], e[n + 2 > i ? i : n + 2], s - n)
        },
        Utils: {
            Linear: function(e, t, i) {
                return (t - e) * i + e
            },
            Bernstein: function(e, t) {
                var i = game.Tween.Interpolation.Utils.Factorial;
                return i(e) / i(t) / i(e - t)
            },
            Factorial: function() {
                var e = [1];
                return function(t) {
                    var i, s = 1;
                    if (e[t]) return e[t];
                    for (i = t; i > 1; i--) s *= i;
                    return e[t] = s
                }
            }(),
            CatmullRom: function(e, t, i, s, n) {
                var a = .5 * (i - e),
                    r = .5 * (s - t),
                    o = n * n,
                    h = n * o;
                return (2 * t - 2 * i + a + r) * h + (-3 * t + 3 * i - 2 * a - r) * o + a * n + t
            }
        }
    }, game.TweenGroup = game.Class.extend({
        tweens: [],
        onComplete: null,
        complete: !1,
        init: function(e) {
            this.onComplete = e
        },
        add: function(e) {
            return e.onComplete(this.tweenComplete.bind(this)), this.tweens.push(e), e
        },
        tweenComplete: function() {
            if (!this.complete) {
                for (var e = 0; e < this.tweens.length; e++)
                    if (this.tweens[e].playing) return;
                this.complete = !0, "function" == typeof this.onComplete && this.onComplete()
            }
        },
        remove: function(e) {
            this.tweens.erase(e)
        },
        start: function() {
            for (var e = 0; e < this.tweens.length; e++) this.tweens[e].start()
        },
        pause: function() {
            for (var e = 0; e < this.tweens.length; e++) this.tweens[e].pause()
        },
        resume: function() {
            for (var e = 0; e < this.tweens.length; e++) this.tweens[e].resume()
        },
        stop: function(e, t) {
            if (!this.complete) {
                for (var i = 0; i < this.tweens.length; i++) this.tweens[i].stop(t);
                !this.complete && e && this.tweenComplete(), this.complete = !0
            }
        }
    })
}), game.module("game.main").require("game.assets", "game.player", "game.ui", "game.objects", "game.scenes.text", "game.scenes.title", "game.scenes.mainmenu", "game.scenes.game", "game.camera", "game.loader").body(function() {
    game.db = new GBAPI, game.db.setSharedKey("s#YAcheFAz*5weGUnu-H2@UprU"), game.reset = function() {
        game.SceneGame.lives = game.config.lives, game.SceneGame.level = game.config.startLevel
    }, game.SceneGame.endlessUnlocked = game.config.endlessUnlocked, game.reset()
}), game.module("game.assets").body(function() {
    game.addAsset("bg-brick.png"), game.addAsset("bg-day.jpg"), game.addAsset("bg-night.jpg"), game.addAsset("font1.fnt"), game.addAsset("font2.fnt"), game.addAsset("sprites.json"), game.addAsset("sprites_night.json"), game.addAsset("sprites_day.json"), game.addAsset("characters.json"), game.addAsset("titlescreen.json"), game.addAsset("ui.json"), game.addAsset("speedlines.json"), game.addAsset("level1.json"), game.addAsset("level2.json"), game.addAsset("level3.json"), game.addAsset("level4.json"), game.addAsset("level5.json"), game.addAsset("endless0.json"), game.addAsset("endless1.json"), game.addAsset("endless2.json"), game.addAsset("endless3.json"), game.addAsset("endless4.json"), game.addAsset("endless5.json"), game.addAsset("endless6.json"), game.addAsset("endless7.json"), game.addAsset("endless8.json"), game.addAsset("endless9.json"), game.addAsset("endless10.json"), game.addAsset("keyboard.json"), game.addAsset("intro_van.json"), game.addAudio("audio/321GO_8bit.m4a", "321GO_8bit"), game.addAudio("audio/buttonPress.m4a", "buttonPress"), game.addAudio("audio/buttonRollover.m4a", "buttonRollover"), game.addAudio("audio/exsplode.m4a", "exsplode"), game.addAudio("audio/falldown_siren.m4a", "falldown_siren"), game.addAudio("audio/fallDown.m4a", "fallDown"), game.addAudio("audio/gameover.m4a", "gameover"), game.addAudio("audio/hiFive_takeoff.m4a", "hiFive_takeoff"), game.addAudio("audio/hiFive.m4a", "hiFive"), game.addAudio("audio/jetpackLoop.m4a", "jetpackLoop"), game.addAudio("audio/jetpackPress.m4a", "jetpackPress"), game.addAudio("audio/jump1.m4a", "jump1"), game.addAudio("audio/jump2.m4a", "jump2"), game.addAudio("audio/levelFinish2.m4a", "levelFinish2"), game.addAudio("audio/music_game.m4a", "music_game"), game.addAudio("audio/music_game2.m4a", "music_game2"), game.addAudio("audio/music_game3.m4a", "music_game3"), game.addAudio("audio/music_title.m4a", "music_title"), game.addAudio("audio/pickup1.m4a", "pickup1"), game.addAudio("audio/pickup2.m4a", "pickup2"), game.addAudio("audio/powerUp.m4a", "powerUp"), game.addAudio("audio/textTicker2.m4a", "textTicker2"), game.addAudio("audio/v8_rev8bit.m4a", "v8_rev8bit")
}), game.module("game.player").body(function() {
    Player = game.Class.extend({
        onGround: !1,
        width: 50,
        height: 128,
        jetpackTimeout: 0,
        magnetTimeout: 0,
        doubleJump: !1,
        flyUpPower: 0,
        init: function(e, t) {
            game.config.skipToLevelEnd && (e = game.scene.level.width - 2 * game.system.width - 220, t = 0), game.merge(this, Player.settings[Player.character]), this.runAnim = [game.Texture.fromFrame(this.anim + "-run01.png"), game.Texture.fromFrame(this.anim + "-run02.png"), game.Texture.fromFrame(this.anim + "-run03.png"), game.Texture.fromFrame(this.anim + "-run04.png"), game.Texture.fromFrame(this.anim + "-run05.png"), game.Texture.fromFrame(this.anim + "-run06.png"), game.Texture.fromFrame(this.anim + "-run07.png"), game.Texture.fromFrame(this.anim + "-run08.png"), game.Texture.fromFrame(this.anim + "-run09.png"), game.Texture.fromFrame(this.anim + "-run10.png"), game.Texture.fromFrame(this.anim + "-run11.png"), game.Texture.fromFrame(this.anim + "-run12.png"), game.Texture.fromFrame(this.anim + "-run13.png"), game.Texture.fromFrame(this.anim + "-run14.png")], this.jumpAnim = [game.Texture.fromFrame(this.anim + "-jump01.png"), game.Texture.fromFrame(this.anim + "-jump02.png"), game.Texture.fromFrame(this.anim + "-jump03.png"), game.Texture.fromFrame(this.anim + "-jump04.png"), game.Texture.fromFrame(this.anim + "-jump05.png"), game.Texture.fromFrame(this.anim + "-jump06.png")], this.sprite = new game.Animation(this.runAnim), this.sprite.animationSpeed = .25, this.sprite.anchor.set(.5, .5), this.sprite.position.set(e + this.width / 2, t + this.height / 4), this.sprite.visible = !1;
            var i = new game.Animation("jetpack02.png", "jetpack03.png", "jetpack04.png", "jetpack05.png");
            i.animationSpeed = .25, i.anchor.set(.5, .5), i.play(), i.visible = !1, game.scene.playerContainer.addChild(i), this.jetpackAnim = i, game.scene.playerContainer.addChild(this.sprite), this.body = new game.Body({
                position: {
                    x: this.sprite.position.x,
                    y: this.sprite.position.y
                },
                mass: 1,
                collideAgainst: [0],
                collisionGroup: 1
            }), this.body.velocityLimit.y = this.jumpPower, this.body.collide = this.collide.bind(this), this.body.parent = this;
            var s = new game.Rectangle(this.width, this.height);
            this.body.addShape(s), game.scene.world.addBody(this.body), game.scene.addObject(this), this.startGame()
        },
        startGame: function() {
            this.sprite.play(), game.scene.addTween(this.body.velocity, {
                x: this.runSpeed
            }, 500).start()
        },
        finish: function() {
            game.scene.finish(), game.scene.addTween(this.body.velocity, {
                x: 0
            }, 200).start()
        },
        gameOver: function() {
            game.scene.finish(!0)
        },
        explode: function() {
            this.exploded = !0, this.sprite.textures = this.jumpAnim, this.sprite.gotoAndStop(this.sprite.textures.length - 1), game.scene.addTween(this.sprite.scale, {
                x: 4,
                y: 4
            }, 400, {
                easing: "Quadratic.Out"
            }).start(), game.scene.addTween(this.sprite.position, {
                x: game.scene.camera.position.x + game.system.width / 2,
                y: game.scene.camera.position.y + game.system.height / 2
            }, 400, {
                easing: "Quadratic.Out"
            }).start(), game.scene.addTween(this.sprite, {
                rotation: 2 * Math.PI + .7
            }, 400, {
                easing: "Quadratic.Out"
            }).start(), game.scene.addTween(this.sprite.position, {
                y: "+" + game.system.height
            }, 800, {
                delay: 700,
                easing: "Quadratic.In"
            }).start(), game.scene.addTimer(1500, this.gameOver.bind(this)), game.scene.world.removeBodyCollision(this.body)
        },
        slowdown: function() {
            this._slowmo || this._jetpack || (this.body.velocity.x /= 4, game.tweenEngine.stopTweensForObject(this.body.velocity), game.scene.addTween(this.body.velocity, {
                x: this.runSpeed
            }, 1500).start())
        },
        collide: function(e) {
            return game.scene.started ? e.oneway && this.body.last.y + this.body.shape.height / 2 >= e.last.y + e.shape.height / 2 || e.oneway && this.body.last.x + this.body.shape.width / 2 <= e.last.x - e.shape.width / 2 ? !1 : this.body.last.x + this.body.shape.width / 2 < e.last.x - e.shape.width / 2 && this.body.last.y >= e.last.y - e.shape.height / 2 && this.body.last.y <= e.last.y + e.shape.height / 2 ? (this.body.velocity.x = 0, !0) : (this.onGround || (this.sprite.textures = this.runAnim, this.sprite.loop = !0, this.sprite.gotoAndPlay(0), this.allowDoubleJump = !1, this.allowFallingJump = !1, this.doubleJump = !1), this.jumpedFallingJump = !1, this.onGround = !0, this.jumped = !1, this.body.velocity.y = 0, !0) : !0
        },
        jump: function() {
            return !this.exploded && game.scene.started ? this._jetpack ? (this.flyUp || game.audio.playSound("jetpackPress"), void(this.flyUp = !0)) : void((!this.doubleJump || this.allowDoubleJump) && (this.jumping && this.body.velocity.y > -this.jumpPower && (this.body.velocity.y -= 7e3 * game.system.delta, this.body.velocity.y <= -this.jumpPower && (this.body.velocity.y = -this.jumpPower, this.jumping = !1)), (this.onGround || this.allowDoubleJump || this.allowFallingJump) && (this.allowFallingJump && (this.jumpedFallingJump = !0, this.allowFallingJump = !1), game.audio.playSound("jump" + (Math.random() > .5 ? "1" : "2")), this.jumped = !0, this.jumping = !0, this.sprite.textures = this.jumpAnim, this.sprite.loop = !1, this.sprite.gotoAndPlay(0), this.onGround = !1, this.allowDoubleJump ? (this.doubleJump = !0, this.allowDoubleJump = !1, this.body.velocity.y = -this.jumpPower) : this.allowFallingJump || (this.body.velocity.y -= 29e3 * game.system.delta)))) : void 0
        },
        mouseup: function() {
            this.onGround || this.doubleJump || !this.jumped || this.jumpedFallingJump || (this.allowDoubleJump = !0), this.jumping = !1, this._jetpack && (this.flyUp = !1)
        },
        kill: function() {
            this.killed || (this.killed = !0, this._jetpack && game.audio.stopSound(this.jetpackLoop), game.audio.playSound("fallDown"), this.remove())
        },
        exit: function() {
            this._jetpack && game.audio.stopSound(this.jetpackLoop)
        },
        remove: function() {
            this._jetpack && game.audio.stopSound(this.jetpackLoop), game.scene.world.removeBody(this.body), this.sprite.parent && this.sprite.parent.removeChild(this.sprite), game.scene.removeObject(this)
        },
        jetpack: function() {
            this.jetpackTimeout += 5e3, this.jetpackFlashing && (game.tweenEngine.stopTweensForObject(this.jetpackAnim), this.jetpackAnim.visible = !0, this.jetpackAnim.alpha = 1), this._jetpack || (this._jetpack = !0, this.body.velocityLimit.y /= 2, this.jetpackLoop = game.audio.playSound("jetpackLoop", !0), this.jetpackTimer ? this.jetpackTimer.reset() : this.jetpackTimer = new game.Timer, this.sprite.textures = this.runAnim, this.sprite.loop = !0, this.sprite.gotoAndStop(0), this.jetpackAnim.visible = !0, this.jetpackAnim.alpha = 1, this.onGround = !1, this.allowDoubleJump = this.doubleJump = !1)
        },
        jetpackFlash: function() {
            this.jetpackFlashing = !0, game.scene.addTween(this.jetpackAnim, {
                alpha: 0
            }, 100, {
                repeat: 1 / 0,
                yoyo: !0
            }).start()
        },
        jetpackEnd: function() {
            game.audio.stopSound(this.jetpackLoop), this.jetpackTimeout = 0, this._jetpack = !1, this.flyUp = !1, this.jetpackFlashing = !1, this.sprite.play(), game.tweenEngine.stopTweensForObject(this.jetpackAnim), this.jetpackAnim.visible = !1, this.jetpackAnim.alpha = 1, this.body.collideAgainst = [0], this.body.velocityLimit.y *= 2
        },
        slowmo: function() {
            if (!this._slowmo) {
                this._slowmo = !0, game.Timer.speedFactor = .7, this.sprite.animationSpeed /= 2, game.scene.addTimer(5500, this.slowmoEnd.bind(this));
                var e = new game.Graphics;
                e.beginFill(16777215), e.drawRect(0, 0, game.system.width, game.system.height), game.scene.stage.addChild(e), game.scene.addTween(e, {
                    alpha: 0
                }, 500).start(), this.flashSprite = e
            }
        },
        slowmoEnd: function() {
            this._slowmo = !1, game.scene.stage.removeChild(this.flashSprite), game.Timer.speedFactor = 1, this.sprite.animationSpeed *= 2, game.scene.addTween(game.scene.camera.offset, {
                x: game.system.width / 2 - 450
            }, 500).start()
        },
        magnet: function() {
            if (this.magnetTimeout += 5e3, !this._magnet) {
                this._magnet = !0, this.magnetRadius = 200, this.magnetTimer ? this.magnetTimer.reset() : this.magnetTimer = new game.Timer;
                var e = new game.Animation("shield01.png", "shield02.png", "shield03.png", "shield04.png", "shield05.png", "shield06.png", "shield07.png", "shield08.png");
                e.anchor.set(.5, .5), e.animationSpeed = .2, e.play(), e.blendMode = game.blendModes.ADD, this.sprite.addChild(e)
            }
        },
        magnetEnd: function() {
            this._magnet = !1, this.magnetTimeout = 0, this.sprite.removeChild(this.sprite.children[0])
        },
        bonus: function(e, t) {
            for (var i = 0, s = 10, n = 2 * Math.PI / s, a = 900, r = 0; s > r; r++) {
                var o = new game.Animation("coin01.png", "coin02.png", "coin03.png", "coin04.png", "coin05.png", "coin06.png", "coin07.png");
                o.anchor.set(.5, .5), o.animationSpeed = .6, o.play(), o.position.set(e, t), game.scene.pickupContainer.addChild(o), game.scene.addTween(o.position, {
                    x: o.position.x + 200 * Math.sin(i),
                    y: o.position.y + 200 * Math.cos(i)
                }, a, {
                    easing: game.Tween.Easing.Quadratic.Out,
                    onComplete: this.removeSprite.bind(o)
                }).start(), game.scene.addTween(o, {
                    alpha: 0
                }, a).start(), i += n
            }
            game.scene.addScore(500);
            var h = new SilverText("500", e, t, !0).addTo(game.scene.pickupContainer);
            game.scene.addTween(h.sprite.position, {
                y: "-100"
            }, 1e3, {
                onComplete: function() {
                    game.scene.pickupContainer.removeChild(h.sprite)
                }
            }).start()
        },
        removeSprite: function() {
            game.scene.pickupContainer.removeChild(this)
        },
        update: function() {
            if (!game.scene.paused && !this.exploded) {
                if (this._jetpack && !this.jetpackFlashing && this.jetpackTimer.time() >= this.jetpackTimeout - 1e3 && this.jetpackFlash(), this._jetpack && this.jetpackTimer.time() >= this.jetpackTimeout && this.jetpackEnd(), this._jetpack && this.flyUp && (this.onGround = !1, this.body.velocity.y -= (3e3 + this.flyUpPower) * game.system.delta, this.body.velocity.y < -this.body.velocityLimit.y && (this.body.velocity.y = -this.body.velocityLimit.y), this.body.position.y < 0 && (this.body.position.y = 0, this.body.velocity.y = 0)), this._magnet) {
                    this.magnetTimer.time() >= this.magnetTimeout && this.magnetEnd();
                    for (var e = game.scene.pickupList.length - 1; e >= 0; e--) {
                        var t = game.scene.pickupList[e],
                            i = Math.distance(this.sprite.position.x, this.sprite.position.y, t.sprite.position.x, t.sprite.position.y);
                        i < this.magnetRadius && !t.picked && (t.picked = !0, t.body.collideAgainst.length = 0, game.scene.addTween(t.sprite.position, {
                            x: this.sprite.position.x + 250,
                            y: this.sprite.position.y - 20
                        }, 400, {
                            easing: game.Tween.Easing.Quadratic.In,
                            onComplete: t.collide.bind(t)
                        }).start())
                    }
                }
                if (this.body.velocity.y > 0 && this.onGround && !this.exploded && (this.sprite.gotoAndStop(0), this.onGround = !1, this.allowFallingJump = !0), this.body.position.y - this.sprite.height / 2 > game.scene.level.height || this.body.position.x - this.sprite.width / 2 > game.scene.level.width) return this.gameOver();
                this.sprite.position.x = this.body.position.x, this.sprite.position.y = this.body.position.y, this.jetpackAnim.visible && (this.jetpackAnim.position.x = this.sprite.position.x - 30 + Player.settings[Player.character].jetpackX, this.jetpackAnim.position.y = this.sprite.position.y + Player.settings[Player.character].jetpackY)
            }
        }
    }), Player.character = 2, Player.settings = [{
        name: "Pizza Paul",
        quote: "The all-rounder",
        runSpeed: 475,
        jumpPower: 825,
        vanPosFirst: 0,
        vanPos: 100,
        jetpackX: 7,
        jetpackY: 0,
        anim: "pizza"
    }, {
        name: "Burger Bob",
        quote: "Fastest food in town",
        runSpeed: 500,
        jumpPower: 800,
        vanPosFirst: 100,
        vanPos: 150,
        jetpackX: 0,
        jetpackY: 0,
        anim: "burger"
    }, {
        name: "Sushi Sue",
        quote: "High jump hero",
        runSpeed: 450,
        jumpPower: 850,
        vanPosFirst: -100,
        vanPos: 0,
        jetpackX: 6,
        jetpackY: 6,
        anim: "sushi"
    }]
}), game.module("game.ui").body(function() {
    FadeIn = game.Class.extend({
        init: function(e, t) {
            this.sprite = e, this.sprite.alpha = 0, this.start(t)
        },
        start: function(e) {
            game.scene.addTimer(100 + (e || 0), this.update.bind(this))
        },
        update: function() {
            this.sprite.alpha += .25, this.sprite.alpha < 1 && this.start()
        }
    }), Button = game.Class.extend({
        init: function(e, t, i, s, n, a) {
            this.big = !!a, this.bg = e, this.container = new game.Sprite(e), this.container.anchor.set(.5, .5), this.container.position.set(t, i);
            var s = new game.Sprite(s);
            s.anchor.set(.5, .5), s.position.y = -7, this.container.addChild(s), this.container.interactive = !0, this.container.buttonMode = !0, this.container.click = this.container.tap = n, this.container.mousedown = this.container.touchstart = this.mousedown.bind(this), this.container.mouseup = this.container.mouseupoutside = this.container.touchend = this.container.touchendoutside = this.mouseup.bind(this), this.container.mouseover = this.mouseover.bind(this), this.container.mouseout = this.mouseout.bind(this)
        },
        remove: function() {
            this.container.parent.removeChild(this.container)
        },
        mousedown: function() {
            game.audio.playSound("buttonPress"), this.container.setTexture((this.big ? "big" : "") + "button-down.png"), this.container.children[0].position.y = 0
        },
        mouseup: function() {
            this.container.setTexture(this.bg), this.container.children[0].position.y = -7
        },
        mouseover: function() {
            game.audio.playSound("buttonRollover"), this.container.setTexture((this.big ? "big" : "") + "button-over.png")
        },
        mouseout: function() {
            this.container.setTexture(this.bg), this.container.children[0].position.y = -7
        },
        addTo: function(e) {
            return e.addChild(this.container), this
        },
        activate: function() {
            this.container.interactive = !0
        },
        fadeIn: function(e) {
            return this.container.interactive = !1, this.container.alpha = 0, game.scene.addTween(this.container, {
                alpha: 1
            }, 500, {
                delay: e || 0,
                onComplete: this.activate.bind(this)
            }).start(), this
        },
        fadeOut: function() {
            return this.container.interactive = !1, this.container.alpha = 1, game.scene.addTween(this.container, {
                alpha: 0
            }, 500).start(), this
        }
    }), SubmitButton = game.Class.extend({
        init: function(e, t, i) {
            this.container = new game.Sprite("submitbutton-up.png"), this.container.anchor.set(.5, .5), this.container.position.set(e, t), this.container.interactive = !0, this.container.buttonMode = !0, this.container.click = this.container.tap = i, this.container.mousedown = this.container.touchstart = this.mousedown.bind(this), this.container.mouseup = this.container.mouseupoutside = this.container.touchend = this.container.touchendoutside = this.mouseup.bind(this), this.container.mouseover = this.mouseover.bind(this), this.container.mouseout = this.mouseout.bind(this)
        },
        remove: function() {
            this.container.parent.removeChild(this.container)
        },
        mousedown: function() {
            game.audio.playSound("buttonPress"), this.container.setTexture("submitbutton-down.png")
        },
        mouseup: function() {
            this.container.setTexture("submitbutton-up.png")
        },
        mouseover: function() {
            game.audio.playSound("buttonRollover"), this.container.setTexture("submitbutton-over.png")
        },
        mouseout: function() {
            this.container.setTexture("submitbutton-up.png")
        },
        addTo: function(e) {
            return e.addChild(this.container), this
        },
        activate: function() {
            this.container.interactive = !0
        },
        fadeIn: function(e) {
            return this.container.interactive = !1, this.container.alpha = 0, game.scene.addTween(this.container, {
                alpha: 1
            }, 500, {
                delay: e || 0,
                onComplete: this.activate.bind(this)
            }).start(), this
        },
        fadeOut: function() {
            return this.container.interactive = !1, this.container.alpha = 1, game.scene.addTween(this.container, {
                alpha: 0
            }, 500).start(), this
        }
    }), TweetButton = game.Class.extend({
        init: function(e, t, i) {
            this.container = new game.Sprite("tweetbutton-up.png"), this.container.anchor.set(.5, .5), this.container.position.set(e, t), this.container.interactive = !0, this.container.buttonMode = !0, this.container.click = this.container.tap = i, this.container.mousedown = this.container.touchstart = this.mousedown.bind(this), this.container.mouseup = this.container.mouseupoutside = this.container.touchend = this.container.touchendoutside = this.mouseup.bind(this), this.container.mouseover = this.mouseover.bind(this), this.container.mouseout = this.mouseout.bind(this)
        },
        remove: function() {
            this.container.parent.removeChild(this.container)
        },
        mousedown: function() {
            game.audio.playSound("buttonPress"), this.container.setTexture("tweetbutton-down.png")
        },
        mouseup: function() {
            this.container.setTexture("tweetbutton-up.png")
        },
        mouseover: function() {
            game.audio.playSound("buttonRollover"), this.container.setTexture("tweetbutton-over.png")
        },
        mouseout: function() {
            this.container.setTexture("tweetbutton-up.png")
        },
        addTo: function(e) {
            return e.addChild(this.container), this
        },
        activate: function() {
            this.container.interactive = !0
        },
        fadeIn: function(e) {
            return this.container.interactive = !1, this.container.alpha = 0, game.scene.addTween(this.container, {
                alpha: 1
            }, 500, {
                delay: e || 0,
                onComplete: this.activate.bind(this)
            }).start(), this
        },
        fadeOut: function() {
            return this.container.interactive = !1, this.container.alpha = 1, game.scene.addTween(this.container, {
                alpha: 0
            }, 500).start(), this
        }
    }), ModeButton = game.Class.extend({
        init: function(e, t, i, s) {
            this.name = e, this.container = new game.Sprite(e + "button-up.png"), this.container.anchor.set(.5, .5), this.container.position.set(t, i), this.container.interactive = !0, this.container.buttonMode = !0, this.container.click = this.container.tap = s, this.container.mousedown = this.container.touchstart = this.mousedown.bind(this), this.container.mouseup = this.container.mouseupoutside = this.container.touchend = this.container.touchendoutside = this.mouseup.bind(this), this.container.mouseover = this.mouseover.bind(this), this.container.mouseout = this.mouseout.bind(this)
        },
        remove: function() {
            this.container.parent.removeChild(this.container)
        },
        mousedown: function() {
            game.audio.playSound("buttonPress"), this.container.setTexture(this.name + "button-down.png")
        },
        mouseup: function() {
            this.container.setTexture(this.name + "button-up.png")
        },
        mouseover: function() {
            game.audio.playSound("buttonRollover"), this.container.setTexture(this.name + "button-over.png")
        },
        mouseout: function() {
            this.container.setTexture(this.name + "button-up.png")
        },
        addTo: function(e) {
            return e.addChild(this.container), this
        }
    }), MuteButton = Button.extend({
        init: function(e, t) {
            this.icon = game.audio.musicMuted ? "mute-icon.png" : "sound-icon.png", this.container = new game.Sprite("button-up.png"), this.container.anchor.set(.5, .5), this.container.position.set(e, t);
            var i = new game.Sprite(this.icon);
            i.anchor.set(.5, .5), i.position.y = -7, this.container.addChild(i), this.container.interactive = !0, this.container.buttonMode = !0, this.container.click = this.container.tap = this.click.bind(this), this.container.mousedown = this.container.touchstart = this.mousedown.bind(this), this.container.mouseup = this.container.mouseupoutside = this.container.touchend = this.container.touchendoutside = this.mouseup.bind(this), this.container.mouseover = this.mouseover.bind(this), this.container.mouseout = this.mouseout.bind(this)
        },
        click: function() {
            game.audio.musicMuted ? (game.audio.setSoundVolume(1), game.audio.unmuteMusic()) : (game.audio.setSoundVolume(0), game.audio.muteMusic()), this.container.children[0].setTexture(game.audio.musicMuted ? "mute-icon.png" : "sound-icon.png")
        },
        mousedown: function() {
            game.audio.playSound("buttonPress"), this.container.setTexture("button-down.png"), this.container.children[0].position.y = 0
        },
        mouseup: function() {
            this.container.setTexture("button-up.png"), this.container.children[0].position.y = -7
        },
        mouseover: function() {
            game.audio.playSound("buttonRollover"), this.container.setTexture("button-over.png")
        },
        mouseout: function() {
            this.container.setTexture("button-up.png"), this.container.children[0].position.y = -7
        }
    }), GameText = game.Class.extend({
        swipeIn: function(e, t) {
            return this.sprite.position.x += game.system.width, game.scene.addTween(this.sprite.position, {
                x: this.sprite.position.x - game.system.width
            }, t || 200, {
                delay: e || 0,
                easing: "Quadratic.Out"
            }).start(), this
        },
        swipeOut: function(e, t) {
            return game.scene.addTween(this.sprite.position, {
                x: this.sprite.position.x - game.system.width
            }, t || 200, {
                delay: e || 0,
                easing: "Quadratic.In",
                onComplete: this.remove.bind(this)
            }).start(), this
        },
        setText: function(e) {
            this.sprite.setText(e)
        },
        addTo: function(e) {
            return e.addChild(this.sprite), this
        },
        remove: function() {
            this.sprite.parent && this.sprite.parent.removeChild(this.sprite)
        },
        fadeIn: function(e, t) {
            return this.sprite.alpha = 0, game.scene.addTween(this.sprite, {
                alpha: 1
            }, e || 500, {
                delay: t || 0
            }).start(), this
        },
        fadeOut: function(e, t) {
            return this.sprite.alpha = 1, game.scene.addTween(this.sprite, {
                alpha: 0
            }, e || 500, {
                delay: t || 0
            }).start(), this
        }
    }), SilverText = GameText.extend({
        init: function(e, t, i, s, n, a) {
            this.sprite = new game.BitmapText(e, {
                font: "Pixel",
                align: "center"
            }), s && this.sprite.pivot.set(this.sprite.textWidth / 2, this.sprite.textHeight / 2), n || this.sprite.scale.set(.5, .5), a && this.sprite.scale.set(.25, .25), this.sprite.position.set(t, i)
        }
    }), SilverText2 = GameText.extend({
        init: function(e, t, i, s, n) {
            this.sprite = new game.BitmapText(e, {
                font: "Pixel",
                align: "center"
            }), s && this.sprite.pivot.set(this.sprite.textWidth / 2, this.sprite.textHeight / 2), this.sprite.scale.set(n, n), this.sprite.position.set(t, i)
        }
    }), GoldText = GameText.extend({
        init: function(e, t, i, s, n) {
            this.sprite = new game.BitmapText(e, {
                font: "Gold"
            }), s && this.sprite.pivot.set(this.sprite.textWidth / 2, this.sprite.textHeight / 2), n && this.sprite.scale.set(.5, .5), this.sprite.position.set(t, i)
        }
    }), HowToPlay = game.Class.extend({
        init: function() {
            this.container = new game.Container;
            var e = new game.Sprite("board-frame.png", game.system.width / 2, game.system.height, {
                    anchor: {
                        x: .5,
                        y: 1
                    }
                }).addTo(this.container),
                e = new game.Sprite("popup-billboard.png", game.system.width / 2, game.system.height / 2 + 10, {
                    anchor: {
                        x: .5,
                        y: .5
                    }
                }).addTo(this.container),
                e = new game.Sprite("dark-billboard.png", game.system.width / 2, game.system.height / 2 + 10, {
                    anchor: {
                        x: .5,
                        y: .5
                    }
                }).addTo(this.container),
                t = (new SilverText("HOW TO PLAY", game.system.width / 2, game.system.height / 2 - 130, !0, !0).addTo(this.container), new game.Sprite("hold-jetpack.png", game.system.width / 2 + 50, game.system.height / 2 - 70).addTo(this.container), new SilverText("HOLD TO FLY\nWITH JETPACK", game.system.width / 2 + 20, game.system.height / 2 + 80).addTo(this.container)),
                t = (new game.Sprite("tap-jump.png", game.system.width / 2 - 250, game.system.height / 2 - 70).addTo(this.container), new SilverText("TAP\nTO JUMP", game.system.width / 2 - 220, game.system.height / 2 + 80).addTo(this.container));
            t.sprite.setStyle({
                font: t.sprite.style.font,
                align: "center"
            }), e.interactive = !0, this.backButton = new Button("button-up.png", 60, 68, "back-icon.png", this.remove.bind(this)).addTo(game.scene.stage).fadeIn()
        },
        swipeIn: function(e) {
            return this.container.position.y += game.system.height, game.scene.addTween(this.container.position, {
                y: 0
            }, 400, {
                delay: e || 0,
                easing: "Quadratic.Out"
            }).start(), this
        },
        remove: function() {
            this.swipeOut()
        },
        swipeOut: function(e) {
            return this.backButton.remove(), game.scene.howto = null, game.scene.addTween(this.container.position, {
                y: game.system.height
            }, 400, {
                delay: e || 0,
                easing: "Quadratic.In"
            }).start(), this
        },
        addTo: function(e) {
            return e.addChild(this.container), this
        }
    }), Leaderboard = game.Class.extend({
        data: null,
        pages: null,
        currentPage: 1,
        perPage: 5,
        maxResults: 100,
        init: function(e) {
            this.container = new game.Container, this.backCallback = e;
            var t = new game.Sprite("board-frame.png", game.system.width / 2, game.system.height, {
                    anchor: {
                        x: .5,
                        y: 1
                    }
                }).addTo(this.container),
                t = new game.Sprite("popup-billboard.png", game.system.width / 2, game.system.height / 2 + 10, {
                    anchor: {
                        x: .5,
                        y: .5
                    }
                }).addTo(this.container),
                t = new game.Sprite("leaderboard-bg.png", game.system.width / 2, game.system.height / 2, {
                    anchor: {
                        x: .5,
                        y: .5
                    }
                }).addTo(this.container);
            t.interactive = !0;
            for (var i = -284, s = i, n = -183, a = [], r = 0; 30 > r; r++) {
                for (var o = 0; 47 > o; o++) s += 12, a.push({
                    x: s,
                    y: n
                });
                n += 12, s = i
            }
            a.shuffle(), this.ledPositions = a, this.leds = [];
            for (var r = 0; 20 > r; r++) {
                var h = new game.Sprite("led-add.png", a[r].x, a[r].y).addTo(t);
                h.blendMode = game.blendModes.ADD, this.leds.push(h)
            }
            game.scene.addTimer(200, this.updateLeds.bind(this), !0);
            var l = (new SilverText2("TODAY'S HOT DAWGS", game.system.width / 2, game.system.height / 2 - 150, !0, .65).addTo(this.container), new game.Sprite("scroller-slot.png"));
            l.anchor.set(.5, .5), l.scale.set(1, 26), l.position.set(game.system.width / 2 + 300, game.system.height / 2 + 10), this.track = l, this.container.addChild(l);
            var d = new game.Sprite("scroller-tab.png");
            d.anchor.set(.5, .5), d.position.set(l.position.x + 20, l.position.y - l.height / 2 + d.height / 2), d.interactive = !0, d.buttonMode = !0, d.mousedown = d.touchstart = this.mousedown.bind(this), d.mouseup = d.touchend = d.mouseupoutside = d.touchendoutside = this.mouseup.bind(this), d.mousemove = d.touchmove = this.mousemove.bind(this), this.scroller = d, this.container.addChild(d), this.rowsContainer = new game.Container, this.container.addChild(this.rowsContainer), this.statusText = new game.BitmapText("LOADING...", {
                font: "Pixel"
            }), this.statusText.position.set(game.system.width / 2 - this.statusText.textWidth / 2, game.system.height / 2 - this.statusText.textHeight / 2), this.container.addChild(this.statusText);
            new SilverText("YOUR BEST: " + game.getDottedNumber(game.highScore), game.system.width / 2, game.system.height / 2 + 150, !0).addTo(this.container);
            this.getScores(), this.backButton = new Button("button-up.png", 60, 68, "back-icon.png", this.back.bind(this)).addTo(game.scene.stage).fadeIn()
        },
        back: function() {
            "function" == typeof this.backCallback && this.backCallback()
        },
        remove: function() {
            this.backButton && this.backButton.remove(), this.container.parent && this.container.parent.removeChild(this.container)
        },
        updateLeds: function() {
            this.ledPositions.shuffle();
            for (var e = 0; e < this.leds.length; e++) this.leds[e].position.set(this.ledPositions[e].x, this.ledPositions[e].y)
        },
        mousedown: function() {
            this._mousedown = !0
        },
        mouseup: function() {
            this._mousedown = !1
        },
        mousemove: function(e) {
            if (this.data && this._mousedown) {
                var t = this.scroller.height - 20,
                    i = e.global.y.limit(this.track.position.y - this.track.height / 2 + t / 2, this.track.position.y + this.track.height / 2 - t / 2);
                this.scroller.position.y = i;
                var s = i - (this.track.position.y - this.track.height / 2) - t / 2,
                    n = Math.max(1, Math.ceil(s / ((this.track.height - t) / this.pages)));
                this.currentPage !== n && this.changePage(n)
            }
        },
        swipeIn: function(e) {
            return this.container.visible = !0, this.container.position.y += game.system.height, game.scene.addTween(this.container.position, {
                y: 0
            }, 400, {
                delay: e || 0,
                easing: "Quadratic.Out"
            }).start(), this
        },
        swipeOut: function(e) {
            return game.scene.addTween(this.container.position, {
                y: game.system.height
            }, 400, {
                delay: e || 0,
                easing: "Quadratic.In",
                onComplete: this.hide.bind(this)
            }).start(), this
        },
        hide: function() {
            game.scene.leaderboard = null, this.container.visible = !1
        },
        addTo: function(e) {
            return e.addChild(this.container), this
        },
        getScores: function() {
            var e = {
                perPage: 1e3,
                pageNumber: 1
            };
            game.db.getScores(e, this.dataLoaded.bind(this))
        },
        dataLoaded: function(e) {
            e.error ? (this.statusText.setText("ERROR"), this.statusText.updateTransform(), this.statusText.position.set(game.system.width / 2 - this.statusText.textWidth / 2, game.system.height / 2 - this.statusText.textHeight / 2)) : (this.container.removeChild(this.statusText), this.data = e, this.data.results.length > this.maxResults && (this.data.results.length = this.maxResults), this.pages = Math.ceil(this.data.results.length / this.perPage), this.changePage(this.currentPage))
        },
        changePage: function(e) {
            this.currentPage = e;
            for (var t = this.rowsContainer.children.length - 1; t >= 0; t--) this.rowsContainer.removeChild(this.rowsContainer.children[t]);
            for (var t = 0; t < this.perPage; t++) {
                var i = this.data.results[(this.currentPage - 1) * this.perPage + t];
                if (!i) break;
                var s = new game.BitmapText(((this.currentPage - 1) * this.perPage + (t + 1)).toString(), {
                        font: "Pixel"
                    }),
                    n = new game.BitmapText(i.name_str, {
                        font: "Pixel"
                    }),
                    a = new game.BitmapText(game.getDottedNumber(i.score_int), {
                        font: "Pixel"
                    });
                s.scale.set(.5, .5), n.scale.set(.5, .5), a.scale.set(.5, .5), s.position.x = game.system.width / 2 - 250, n.position.x = game.system.width / 2 - 150, a.position.x = game.system.width / 2 + 80, s.position.y = n.position.y = a.position.y = 237 + 44 * t, this.rowsContainer.addChild(s), this.rowsContainer.addChild(n), this.rowsContainer.addChild(a)
            }
        }
    }), Keyboard = game.Class.extend({
        keys: [
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
            ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
            ["Z", "X", "C", "V", "B", "N", "M", "del"]
        ],
        input: "",
        init: function(e, t, i) {
            this.callback = i, this.container = new game.Container, this.container.position.set(e, t);
            for (var s = 0, n = 5, a = 0; a < this.keys.length; a++) {
                for (var r = 0; r < this.keys[a].length; r++) {
                    var o = this.keys[a][r],
                        h = new game.Sprite("button-up.png");
                    h.scale.set(.5, .5), h.anchor.set(.5, .5), h.interactive = !0, h.buttonMode = !0, h.mousedown = h.touchstart = function() {
                        this.scale.set(.4, .4)
                    }, h.mouseup = h.touchend = h.mouseupoutside = h.touchendoutside = function() {
                        this.scale.set(.5, .5)
                    }, h.click = h.tap = this.click.bind(this, o), h.position.set(r * (h.width + n) - (this.keys[a].length * h.width + n) / 2 + n, s);
                    var l = new game.Sprite("keyboard-" + o.toLowerCase() + ".png");
                    l.anchor.set(.5, .5), l.scale.set(2, 2), l.position.y = -6, h.addChild(l), this.container.addChild(h)
                }
                s += h.height
            }
        },
        click: function(e) {
            "del" === e ? this.input = this.input.substr(0, Math.max(0, this.input.length - 1)) : (3 === this.input.length && (this.input = this.input.substr(0, 2)), this.input += e), this.callback()
        },
        addTo: function(e) {
            return e.addChild(this.container), this
        }
    }), game.getDottedNumber = function(e) {
        for (;
            /(\d+)(\d{3})/.test(e.toString());) e = e.toString().replace(/(\d+)(\d{3})/, "$1,$2");
        return e.toString()
    }
}), game.module("game.objects").body(function() {
    ParseOption = function(e, t) {
        e && -1 !== e.indexOf("flipped") && (-1 !== e.indexOf("x") && (t.sprite.scale.x = -1, t.sprite.position.x -= t.sprite.width), -1 !== e.indexOf("y") && (t.sprite.scale.y = -1, t.sprite.position.y -= t.sprite.height))
    }, game.createClass("Bird", {
        init: function(e, t) {
            this.sprite = new game.Animation("birdy_01.png", "birdy_02.png", "birdy_03.png", "birdy_04.png", "birdy_05.png", "birdy_04.png", "birdy_03.png", "birdy_02.png"), this.sprite.position.x = Math.abs(game.scene.levelContainer.position.x) + e, this.sprite.position.y = Math.abs(game.scene.levelContainer.position.y) + t, this.sprite.animationSpeed = .3, this.sprite.gotoAndPlay(Math.random(0, this.sprite.textures.length - 1)), game.scene.birdContainer.addChild(this.sprite), game.scene.addTween(this.sprite.position, {
                x: "-" + 2 * game.system.width
            }, game.system.width / .1, {
                onComplete: this.remove.bind(this)
            }).start()
        },
        remove: function() {
            this.sprite.remove()
        }
    }), Sprite = game.Class.extend({
        init: function(e, t, i, s) {
            this.sprite = new game.Sprite("sprite" + i + ".png"), this.sprite.position.set(e, t), this.sprite.visible = !1, ParseOption(s, this), game.scene.blockContainer.addChild(this.sprite)
        },
        remove: function() {
            game.scene.blockContainer.removeChild(this.sprite)
        }
    }), Block = game.Class.extend({
        init: function(e, t, i, s) {
            this.sprite = new game.Sprite("block" + i + ".png"), this.sprite.position.set(e, t), this.sprite.visible = !1, game.scene.blockContainer.addChild(this.sprite), this.body = new game.Body({
                position: {
                    x: this.sprite.position.x + this.sprite.width / 2,
                    y: this.sprite.position.y + 10
                },
                collisionGroup: 0
            }), this.body.oneway = !0, ParseOption(s, this);
            var n = new game.Rectangle(Math.abs(this.sprite.width), 20);
            this.body.addShape(n), game.scene.world.addBody(this.body)
        },
        remove: function() {
            game.scene.blockContainer.removeChild(this.sprite), game.scene.world.removeBody(this.body)
        }
    }), SolidBlock = game.Class.extend({
        init: function(e, t, i, s) {
            this.sprite = new game.Sprite("solidblock" + i + ".png"), this.sprite.position.set(e, t), this.sprite.visible = !1, game.scene.blockContainer.addChild(this.sprite), this.body = new game.Body({
                position: {
                    x: this.sprite.position.x + this.sprite.width / 2,
                    y: this.sprite.position.y + this.sprite.height / 2
                },
                collisionGroup: 0
            }), ParseOption(s, this);
            var n = new game.Rectangle(Math.abs(this.sprite.width), Math.abs(this.sprite.height));
            this.body.addShape(n), game.scene.world.addBody(this.body)
        },
        remove: function() {
            game.scene.blockContainer.removeChild(this.sprite), game.scene.world.removeBody(this.body)
        }
    }), Slowdown = game.Class.extend({
        init: function(e, t, i, s) {
            this.sprite = new game.Sprite("slowdown" + i + ".png"), this.sprite.visible = !1, this.sprite.position.set(e, t), ParseOption(s, this), game.scene.blockContainer.addChild(this.sprite), this.body = new game.Body({
                position: {
                    x: this.sprite.position.x + this.sprite.width / 2,
                    y: this.sprite.position.y + this.sprite.height / 2
                },
                collisionGroup: 2,
                collideAgainst: [1]
            }), this.body.collide = this.collide.bind(this);
            var n = new game.Rectangle(this.sprite.width, this.sprite.height);
            this.body.addShape(n), game.scene.world.addBody(this.body)
        },
        collide: function(e) {
            return e.parent.slowdown(), game.scene.world.removeBody(this.body), !1
        },
        remove: function() {
            game.scene.blockContainer.removeChild(this.sprite), game.scene.world.removeBody(this.body)
        }
    }), Finish = game.Class.extend({
        init: function(e, t) {
            this.sprite = new game.Animation("finishman01.png", "finishman02.png", "finishman03.png", "finishman04.png"), this.sprite.animationSpeed = .2, this.sprite.play(), this.sprite.visible = !1, this.sprite.position.set(e, t), game.scene.blockContainer.addChild(this.sprite);
            var i = ["Girl", "Man1", "Man2"];
            this.flagMan = i.random(), game.scene.finishObject = this;
            var s = new game.Sprite("flag_" + this.flagMan + ".png");
            s.anchor.y = 1, s.position.x = 22, s.position.y = this.sprite.height, this.sprite.addChild(s), this.body = new game.Body({
                position: {
                    x: e + 50,
                    y: t + this.sprite.height - game.scene.level.height / 2
                },
                collisionGroup: 2,
                collideAgainst: [1]
            }), this.body.collide = this.collide.bind(this);
            var n = new game.Rectangle(100, game.scene.level.height);
            this.body.addShape(n), game.scene.world.addBody(this.body)
        },
        collide: function(e) {
            return e.parent.finish(), game.scene.world.removeBody(this.body), !1
        }
    }), Powerup = game.Class.extend({
        init: function(e, t, i, s) {
            if (this.type = i, "bonus" === i ? (this.sprite = new game.Animation("baggy_01.png", "baggy_02.png", "baggy_03.png", "baggy_04.png", "baggy_05.png", "baggy_06.png", "baggy_07.png", "baggy_08.png"), this.sprite.animationSpeed = .3, this.sprite.play()) : (this.sprite = new game.Animation("powerup-" + i + "01.png", "powerup-" + i + "02.png", "powerup-" + i + "03.png", "powerup-" + i + "04.png"), this.sprite.animationSpeed = .2, this.sprite.play()), this.sprite.visible = !1, this.sprite.anchor.set(.5, .5), this.sprite.position.set(e + this.sprite.width / 2, t + this.sprite.height / 2), ParseOption(s, this), "bonus" === i && this.resetBagAnim(), "bonus" !== i) {
                var n = new game.Animation("holo-rays01.png", "holo-rays02.png", "holo-rays03.png", "holo-rays04.png");
                n.animationSpeed = .2, n.play(), n.anchor.set(.5, 1), n.position.set(this.sprite.position.x, this.sprite.position.y + this.sprite.height / 2 + 17), this.sprite.rays = n, game.scene.pickupContainer.addChild(n)
            }
            game.scene.pickupContainer.addChild(this.sprite), this.body = new game.Body({
                position: {
                    x: this.sprite.position.x,
                    y: this.sprite.position.y
                },
                collisionGroup: 2,
                collideAgainst: [1]
            }), this.body.collide = this.collide.bind(this);
            var a = new game.Rectangle(this.sprite.width, this.sprite.height);
            this.body.addShape(a), game.scene.world.addBody(this.body), "bonus" !== i && game.scene.addTween(this.sprite.position, {
                y: this.sprite.position.y - 7
            }, 1e3, {
                repeat: 1 / 0,
                yoyo: !0,
                easing: game.Tween.Easing.Quadratic.InOut
            }).start()
        },
        playBagAnim: function() {
            game.scene.addTween(this.sprite.position, {
                y: this.sprite.position.y - 7
            }, 1e3, {
                repeat: 1,
                yoyo: !0,
                onComplete: this.resetBagAnim.bind(this)
            }).start()
        },
        resetBagAnim: function() {
            this.sprite.gotoAndPlay(0), this.sprite.onComplete = this.playBagAnim.bind(this)
        },
        collide: function() {
            return game.audio.playSound("powerUp"), game.scene.player[this.type](this.sprite.position.x, this.sprite.position.y), this.remove(), !1
        },
        remove: function() {
            this.removed || (game.scene.world.removeBody(this.body), this.sprite.rays && game.scene.pickupContainer.removeChild(this.sprite.rays), game.scene.pickupContainer.removeChild(this.sprite), this.removed = !0)
        }
    }), Barrel = game.Class.extend({
        init: function(e, t) {
            this.sprite = new game.Animation("barrel_01.png", "barrel_02.png", "barrel_03.png"), this.sprite.visible = !1, this.sprite.animationSpeed = .2, this.sprite.play(), this.sprite.anchor.set(.5, .5), this.sprite.position.set(e + this.sprite.width / 2, t + this.sprite.height / 2), game.scene.blockContainer.addChild(this.sprite), this.body = new game.Body({
                position: {
                    x: this.sprite.position.x,
                    y: this.sprite.position.y
                },
                collisionGroup: 2,
                collideAgainst: [1]
            }), this.body.collide = this.collide.bind(this);
            var i = new game.Rectangle(this.sprite.width, this.sprite.height);
            this.body.addShape(i), game.scene.world.addBody(this.body)
        },
        removeExplodes: function() {
            for (var e = 0; e < this.explodes.length; e++) this.explodes[e].remove()
        },
        collide: function() {
            this.explodes = [];
            var e = new game.Sprite("explode.png");
            e.blendMode = game.blendModes.ADD, e.anchor.set(.5, .5), e.position.set(this.sprite.position.x, this.sprite.position.y), game.scene.pickupContainer.addChild(e), this.explodes.push(e), game.scene.addTween(e, {
                alpha: 0
            }, 500, {
                delay: 0
            }).start();
            var e = new game.Sprite("explode.png");
            e.blendMode = game.blendModes.ADD, e.anchor.set(.5, .5), e.position.set(this.sprite.position.x - 20, this.sprite.position.y - 20), game.scene.pickupContainer.addChild(e), this.explodes.push(e), game.scene.addTween(e, {
                alpha: 0
            }, 500, {
                delay: 300
            }).start();
            var e = new game.Sprite("explode.png");
            e.blendMode = game.blendModes.ADD, e.anchor.set(.5, .5), e.scale.set(2, 2), e.position.set(this.sprite.position.x + 50, this.sprite.position.y), game.scene.pickupContainer.addChild(e), this.explodes.push(e), game.scene.addTween(e, {
                alpha: 0
            }, 500, {
                delay: 600
            }).start(), game.scene.camera.target = null, game.scene.player.explode(), game.audio.playSound("exsplode");
            var t = new game.Graphics;
            return t.beginFill(16777215), t.drawRect(0, 0, game.system.width, game.system.height), game.scene.uiLayer.addChild(t), game.scene.addTween(t, {
                alpha: 0
            }, 500).start(), this.remove(), !1
        },
        remove: function() {
            this.removed || (this.removed = !0, game.scene.blockContainer.removeChild(this.sprite), game.scene.world.removeBody(this.body))
        }
    }), Pickup = game.Class.extend({
        init: function(e, t, i, s) {
            game.scene.pickups++, this.score = Pickup.scores[i - 1] || 0, this.sprite = new game.Animation("coin01.png", "coin02.png", "coin03.png", "coin04.png", "coin05.png", "coin06.png", "coin07.png"), this.sprite.visible = !1, this.sprite.animationSpeed = .2, this.sprite.play(), this.sprite.anchor.set(.5, .5), this.sprite.position.set(e + this.sprite.width / 2, t + this.sprite.height / 2), ParseOption(s, this), game.scene.pickupContainer.addChild(this.sprite), this.body = new game.Body({
                position: {
                    x: this.sprite.position.x,
                    y: this.sprite.position.y
                },
                collisionGroup: 2,
                collideAgainst: [1]
            }), this.body.collide = this.collide.bind(this);
            var n = new game.Rectangle(this.sprite.width, this.sprite.height);
            this.body.addShape(n), game.scene.world.addBody(this.body), game.scene.pickupList.push(this)
        },
        collide: function() {
            if (this.score) {
                var e = new SilverText(this.score.toString(), this.sprite.position.x, this.sprite.position.y, !0).addTo(game.scene.playerContainer);
                game.scene.addTween(e.sprite.position, {
                    y: "-100"
                }, 1e3, {
                    onComplete: function() {
                        game.scene.playerContainer.removeChild(e.sprite)
                    }
                }).start(), game.scene.addScore(this.score), game.scene.pickups--, game.audio.playSound("pickup" + (Math.random() > .5 ? "1" : "2"))
            }
            return this.remove(), !1
        },
        remove: function() {
            this.removed || (this.removed = !0, game.scene.pickupContainer.removeChild(this.sprite), game.scene.world.removeBody(this.body), game.scene.pickupList.erase(this))
        }
    }), Pickup.scores = [50, 100, 150, 200, 250], ScrollingSprite = game.Class.extend({
        speed: 1,
        init: function(e, t, i, s, n) {
            if (this.container = new game.Container, this.y = t || 0, this.width = s || 0, this.container.position.y = this.y, this.speed = i || this.speed, this.sprite = new game.Sprite(e), this.sprite.position.x = this.width, this.sprite2 = new game.Sprite(e), this.sprite2.position.x = this.sprite.width + 2 * this.width, 1024 === this.sprite.width) {
                var a = new game.Sprite(e);
                a.position.x = this.sprite2.position.x + this.sprite2.width
            }
            this.container.addChild(this.sprite), this.container.addChild(this.sprite2), a && this.container.addChild(a), game.scene[n || "bgLayer"].addChild(this.container), game.scene.addObject(this)
        },
        update: function() {
            if (this.container.position.y = this.y - game.scene.camera.position.y / 2, this.container.position.x = ~~(this.container.position.x + game.scene.camera.speed.x * this.speed * game.system.delta), this.container.position.x < -(this.container.children[0].width + this.width) - this.container.children[0].position.x) {
                var e = this.container.children[0];
                this.container.removeChild(e), e.position.x = this.container.children[this.container.children.length - 1].position.x + e.width + this.width, this.container.addChild(e)
            }
        }
    })
}), game.module("game.scenes.text").require("engine.scene").body(function() {
    game.createScene("Text", {
        textPos: 0,
        init: function() {
            this.textData = "Early in the 21st Century,\nTHE GRUBHUB CORPORATION advanced food\ndelivery into the SEAMLESS phase.\n\nSpecial delivery squads - known as\nGRUBRUNNER UNITS - had orders to\npresent themselves, upon instruction,\nas deliverables.", this.textData = this.textData.toUpperCase(), this.text = new game.BitmapText("", {
                font: "Pixel"
            }), this.text.position.set(20, 20), this.text.scale.set(.5, .5), this.text.addTo(this.stage), this.timer = this.addTimer(60, this.updateText.bind(this), !0)
        },
        updateText: function() {
            return " " !== this.textData[this.textPos] && game.audio.playSound("textTicker2"), this.textPos === this.textData.length ? (this.removeTimer(this.timer), void this.addTimer(1e3, this.textComplete.bind(this))) : (this.textPos++, void this.text.setText(this.textData.substr(0, this.textPos)))
        },
        textComplete: function() {
            var e = new game.Graphics;
            e.beginFill(0), e.drawRect(0, 0, game.system.width, game.system.height), e.alpha = 0, this.stage.addChild(e), this.addTween(e, {
                alpha: 1
            }, 1e3, {
                onComplete: function() {
                    game.system.setScene("Title")
                }
            }).start(), this.fader = e
        },
        mousedown: function() {
            game.Debug.enabled && game.system.setScene("Title"), this.fader || this.textComplete()
        }
    })
}), game.module("game.scenes.title").require("engine.scene").body(function() {
    game.createScene("Title", {
        backgroundColor: 787235,
        init: function() {
            game.audio.playMusic("music_title"), game.Timer.speedFactor = 1, this.speedLinesAnim = new game.Sprite("intro_building_blur.png"), this.speedLinesAnim.anchor.set(.5, 0), this.speedLinesAnim.scale.set(2, 6 * game.system.height / this.speedLinesAnim.height), this.speedLinesAnim.position.set(game.system.width / 2, 0), this.stage.addChild(this.speedLinesAnim), this.starblurLeft = new game.Sprite("starblur_left.png"), this.starblurLeft.scale.set(2, 4), this.stage.addChild(this.starblurLeft), this.starblurRight = new game.Sprite("starblur_right.png"), this.starblurRight.scale.set(2, 4), this.starblurRight.position.x = game.system.width - this.starblurRight.width, this.stage.addChild(this.starblurRight), this.bg = new game.Graphics, this.bg.beginFill(787235), this.bg.drawRect(0, 0, game.system.width, game.system.height), this.stage.addChild(this.bg), this.skyContainer = (new game.Container).addTo(this.stage);
            var e = new game.Sprite("stars.png", 0, 0).addTo(this.skyContainer);
            e.scale.x = e.scale.y = game.system.width / e.width;
            for (var t = 1; 5 > t; t++) {
                var i = new game.Sprite("stars.png", 0, e.height * t).addTo(this.skyContainer);
                i.scale.x = i.scale.y = game.system.width / i.width
            }
            var s = (new game.Sprite("moon.png", 100, 100).addTo(this.skyContainer), new game.Sprite("cloud-small.png", -100, 300).addTo(this.skyContainer));
            this.addTween(s.position, {
                x: "+200"
            }, 4e3).start();
            var s = new game.Sprite("cloud-small.png", 0, 100).addTo(this.skyContainer);
            this.addTween(s.position, {
                x: "+200"
            }, 4e3).start();
            var s = new game.Sprite("cloud-large.png", 230, 300).addTo(this.skyContainer);
            this.addTween(s.position, {
                x: "+200"
            }, 4e3).start();
            var s = new game.Sprite("cloud-large.png", 630, 130).addTo(this.skyContainer);
            this.addTween(s.position, {
                x: "+200"
            }, 4e3).start(), this.logoContainer = new game.Container;
            var n = new game.Sprite("bg-night.jpg", game.system.width / 2, game.system.height);
            n.anchor.set(.5, 1), n.width < game.system.width && (n.scale.x = n.scale.y = game.system.width / n.width), n.addTo(this.logoContainer);
            var e = new game.Sprite("stars.png", 0, 0).addTo(this.logoContainer),
                a = (new game.Sprite("city-silhouette-night.png", game.system.width / 2, game.system.height - 50, {
                    anchor: {
                        x: .5,
                        y: 1
                    }
                }).addTo(this.logoContainer), new game.RenderTexture(game.system.width, game.system.height));
            a.render(this.logoContainer), this.logoContainerSprite = new game.Sprite(a).addTo(this.stage), this.logoContainerSprite.visible = !1, this.cloud1 = new game.Sprite("cloud-small.png", game.system.width - 100, 300).addTo(this.stage), this.cloud2 = new game.Sprite("cloud-large.png", 0, 200).addTo(this.stage), this.cloud1.visible = !1, this.cloud2.visible = !1, this.building = this.renderBuilding(), this.building.anchor.set(.5, 0), this.building.position.x = game.system.width / 2, this.building.position.y = game.system.height, this.stage.addChild(this.building);
            var r = new game.Animation("finishman01.png", "finishman02.png", "finishman03.png", "finishman04.png");
            r.animationSpeed = .2, r.play(), r.position.x = 100, r.position.y = -r.height, this.building.addChild(r);
            var o = ["Girl", "Man1", "Man2"],
                h = new game.Sprite("flag_" + o.random() + ".png");
            h.anchor.y = 1, h.position.x = 22, h.position.y = r.height, r.addChild(h);
            var l = new game.Graphics;
            l.beginFill(0), l.drawRect(0, 0, game.system.width, 70), this.stage.addChild(l), this.addTween(l.position, {
                y: "-70"
            }, 500, {
                delay: 3500
            }).start();
            var l = new game.Graphics;
            l.beginFill(0), l.drawRect(0, 0, game.system.width, 70), l.position.y = game.system.height - 70, this.stage.addChild(l), this.addTween(l.position, {
                y: "+70"
            }, 500, {
                delay: 3500
            }).start();
            var d = new game.Graphics;
            d.beginFill(0), d.drawRect(0, 0, game.system.width, game.system.height), this.stage.addChild(d), this.addTween(d, {
                alpha: 0
            }, 1e3).start(), this.addTween(this.skyContainer.position, {
                y: "-550"
            }, 2300, {
                easing: game.Tween.Easing.Quadratic.In,
                onComplete: this.showSpeedlines.bind(this),
                delay: 2e3
            }).start(), this.addTween(this.building.position, {
                y: "-900"
            }, 2e3, {
                delay: 2300,
                easing: game.Tween.Easing.Quadratic.In
            }).start(), this.flash = new game.Graphics, this.flash.beginFill(16777215), this.flash.drawRect(0, 0, 2 * game.system.width, game.system.height), this.flash.visible = !1, this.stage.addChild(this.flash), this.fader = new game.Graphics, this.fader.beginFill(16777215), this.fader.drawRect(0, 0, game.system.width, game.system.height), this.fader.alpha = 0, this.stage.addChild(this.fader)
        },
        renderBuilding: function() {
            for (var e = game.getJSON("titlescreen.json"), t = new game.Container, i = 0; i < e.objects.length; i++) {
                var s = e.objects[i][2].split("_"),
                    n = s[0].toLowerCase(),
                    a = s[1],
                    r = s[2],
                    o = new game.Sprite(n + a + ".png", e.objects[i][0], e.objects[i][1]).addTo(t);
                r && (o.scale.set(-1, 1), o.position.x -= o.width)
            }
            var h = new game.RenderTexture(t.width, t.height);
            h.render(t);
            var l = new game.Sprite(h),
                d = new game.Animation("grubrunner_logo01.png", "grubrunner_logo02.png", "grubrunner_logo03.png", "grubrunner_logo04.png", "grubrunner_logo05.png", "grubrunner_logo06.png", "grubrunner_logo07.png", "grubrunner_logo08.png");
            return d.position.set(0, t.height - 628), d.anchor.set(.5, .5), d.animationSpeed = .15, d.play(), l.addChild(d), l
        },
        showSpeedlines: function() {
            this.addTween(this.speedLinesAnim.position, {
                y: "-" + 4 * game.system.height
            }, 800).start(), this.addTween(this.starblurLeft.position, {
                y: "-1000"
            }, 800).start(), this.addTween(this.starblurRight.position, {
                y: "-1000"
            }, 800).start(), this.stage.removeChild(this.bg), this.stage.removeChild(this.skyContainer), this.building.visible = !1, this.flash.visible = !0, this.addTween(this.flash, {
                alpha: 0
            }, 200, {
                easing: "Quadratic.Out",
                onComplete: function() {
                    game.scene.flash.visible = !1
                }
            }).start(), this.addTimer(800, this.showLogo.bind(this))
        },
        roundStagePosition: function() {
            this.stage.position.y = Math.round(this.stage.position.y)
        },
        showLogo: function() {
            this.cloud1.visible = this.cloud2.visible = !0, this.addTween(this.cloud1.position, {
                x: "+200"
            }, 12e3).start(), this.addTween(this.cloud2.position, {
                x: "+200"
            }, 12e3).start(), this.building.visible = !0, this.building.position.y = -this.building.height + game.system.height + 150 + 50, this.addTween(this.building.position, {
                y: "-50"
            }, 1e3, {
                easing: "Quadratic.Out"
            }).start(), this.starblurLeft.visible = this.starblurRight.visible = !1, this.speedLinesAnim.visible = !1, this.logoContainerSprite.visible = !0, this.addTween(this.fader, {
                alpha: 1
            }, 200, {
                delay: 1500,
                onComplete: function() {
                    game.scene.mousedown()
                }
            }).start()
        },
        mousedown: function() {
            game.system.setScene("MainMenu")
        }
    })
}), game.module("game.scenes.mainmenu").require("engine.scene").body(function() {
    game.createScene("MainMenu", {
        posters: [],
        init: function() {
            game.highScore = game.storage.get("highScore", 0), game.reset(), game.Timer.speedFactor = 1, game.SceneGame.music = 0, this.wall = (new game.Container).addTo(this.stage);
            var e = new game.Sprite("bg-brick.png", 0, game.system.height);
            e.anchor.set(0, 1), e.width < game.system.width && (e.scale.x = e.scale.y = game.system.width / e.width), e.addTo(this.wall);
            var t = new game.Sprite("bg-brick.png", e.width, game.system.height);
            t.anchor.set(0, 1), t.scale.x = t.scale.y = e.scale.x, t.addTo(this.wall);
            var i = new game.Animation("grubrunner_logo01.png", "grubrunner_logo02.png", "grubrunner_logo03.png", "grubrunner_logo04.png", "grubrunner_logo05.png", "grubrunner_logo06.png", "grubrunner_logo07.png", "grubrunner_logo08.png");
            i.position.set(game.system.width / 2, game.system.height / 2 - 70), i.anchor.set(.5, .5), i.animationSpeed = .15, i.scale.set(2, 2), i.play(), this.wall.addChild(i), this.showButtons();
            new GoldText("@ GRUBRUNNER", game.system.width / 2, game.system.height - 40, !0, !0).addTo(this.wall);
            this.fade = new game.Graphics, this.fade.beginFill(0), this.fade.drawRect(0, 0, 2 * game.system.width, game.system.height), this.fade.alpha = 0, this.fade.visible = !1, this.wall.addChild(this.fade);
            new MuteButton(game.system.width - 60, 68).addTo(this.stage);
            if (game.SceneMainMenu.firstTime) {
                var s = new game.Graphics;
                s.beginFill(16777215), s.drawRect(0, 0, 2 * game.system.width, game.system.height), this.stage.addChild(s), this.addTween(s, {
                    alpha: 0
                }, 500, {
                    easing: "Quadratic.Out",
                    onComplete: function() {
                        game.scene.stage.removeChild(s)
                    }
                }).start()
            } else {
                game.audio.playMusic("music_title");
                var n = new game.Graphics;
                n.beginFill(0), n.drawRect(0, 0, game.system.width, game.system.height / 2), this.stage.addChild(n), this.addTween(n.position, {
                    y: -game.system.height / 2
                }, 500).start();
                var n = new game.Graphics;
                n.beginFill(0), n.drawRect(0, 0, game.system.width, game.system.height / 2), n.position.y = game.system.height / 2, this.stage.addChild(n), this.addTween(n.position, {
                    y: game.system.height
                }, 500).start()
            }
            game.SceneMainMenu.firstTime = !1
        },
        showButtons: function() {
            var e = this,
                t = new Button("bigbutton-up.png", game.system.width / 2 - 50, game.system.height / 2 + 162, "bigplay-icon.png", function() {
                    game.SceneGame.endlessUnlocked ? (t.remove(), i.remove(), s.remove(), e.showModeSelect()) : e.showCharacters()
                }, !0).addTo(this.wall),
                i = new Button("button-up.png", game.system.width / 2 + 105, game.system.height / 2 + 217, "leaderboard-icon.png", this.showLeaderboard.bind(this)).addTo(this.wall),
                s = new Button("button-up.png", game.system.width / 2 + 105, game.system.height / 2 + 107, "help-icon.png", this.showHowToPlay.bind(this)).addTo(this.wall)
        },
        showHowToPlay: function() {
            this.howto || (this.howto = (new HowToPlay).addTo(this.stage).swipeIn())
        },
        showLeaderboard: function() {
            this.tweening || (this.tweening = !0, this.addTween(this.wall.position, {
                x: -this.wall.width / 2
            }, 600, {
                easing: game.Tween.Easing.Quadratic.InOut,
                onComplete: this.tweenComplete.bind(this)
            }).start(), this.leaderboard = new Leaderboard(this.hideLeaderboard.bind(this)).addTo(this.wall), this.leaderboard.container.position.x = game.system.width, this.fade.alpha = 0, this.fade.visible = !0, this.addTween(this.fade, {
                alpha: .5
            }, 200).start())
        },
        hideLeaderboard: function() {
            this.tweening || (this.tweening = !0, this.addTween(this.wall.position, {
                x: 0
            }, 600, {
                easing: "Quadratic.InOut",
                onComplete: this.removeLeaderboard.bind(this)
            }).start(), this.addTween(this.fade, {
                alpha: 0
            }, 200).start(), this.leaderboard.backButton.fadeOut())
        },
        removeLeaderboard: function() {
            this.tweening = !1, this.leaderboard.remove()
        },
        hideCharacters: function() {
            this.playerSelected || this.tweening || (this.tweening = !0, this.addTween(this.wall.position, {
                x: 0
            }, 600, {
                easing: game.Tween.Easing.Quadratic.InOut,
                onComplete: this.removeCharacters.bind(this)
            }).start(), this.backButton.fadeOut())
        },
        removeCharacters: function() {
            this.tweening = !1, this.wall.removeChild(this.charactersContainer), this.backButton.remove()
        },
        showModeSelect: function() {
            var e = new SilverText("CHOOSE PLAY MODE!", game.system.width / 2, game.system.height / 2 + 100, !0, !1).addTo(this.wall),
                t = new ModeButton("levels", game.system.width / 2 - 150, game.system.height / 2 + 200, function() {
                    game.SceneGame.level = "1", game.scene.showCharacters()
                }).addTo(this.wall),
                i = new ModeButton("endless", game.system.width / 2 + 150, game.system.height / 2 + 200, function() {
                    game.SceneGame.level = "endless", game.scene.showCharacters()
                }).addTo(this.wall),
                s = this,
                n = new Button("button-up.png", 60, 68, "back-icon.png", function() {
                    e.remove(), t.remove(), i.remove(), n.remove(), s.showButtons()
                }).addTo(this.stage)
        },
        showCharacters: function() {
            if (!this.tweening) {
                this.tweening = !0, this.backButton = new Button("button-up.png", 60, 68, "back-icon.png", this.hideCharacters.bind(this)).addTo(this.stage).fadeIn(), this.charactersContainer = (new game.Container).addTo(this.wall);
                var e = new GoldText("SELECT A CHARACTER:", game.system.width + game.system.width / 2 + 7, 60, {
                        anchor: {
                            x: .5,
                            y: .5
                        }
                    }).addTo(this.charactersContainer),
                    t = new game.Graphics;
                t.beginFill(0), t.drawRect(0, 0, game.system.width - 58, e.sprite.height), this.charactersContainer.addChild(t), t.position.x = game.system.width + game.system.width / 2 - t.width / 2 + 10, t.position.y = 20, e.sprite.mask = t;
                var i = 60;
                this.addTween(e.sprite.position, {
                    x: e.sprite.position.x - e.sprite.width - i
                }, 5e3, {
                    repeat: 1 / 0
                }).start();
                var e = new GoldText("SELECT A CHARACTER:", game.system.width + game.system.width / 2 + 7 + e.sprite.width + i, 60, {
                    anchor: {
                        x: .5,
                        y: .5
                    }
                }).addTo(this.charactersContainer);
                e.sprite.mask = t, this.addTween(e.sprite.position, {
                    x: e.sprite.position.x - e.sprite.width - i
                }, 5e3, {
                    repeat: 1 / 0
                }).start();
                for (var s = 0; s < Player.settings.length; s++) {
                    var n = new game.Sprite("poster-ears.png");
                    n.anchor.set(.5, .5), n.position.set(game.system.width + game.system.width / 2 - 325 + 325 * s, game.system.height / 2 + 75), n.interactive = !0, n.buttonMode = !0, n.mouseover = this.posterOver.bind(this, n), n.mouseout = this.posterOut.bind(this, n), n.click = n.tap = this.startGame.bind(this, s), this.charactersContainer.addChild(n), this.posters.push(n);
                    var a = new game.Sprite("player" + (s + 1) + ".png");
                    a.anchor.set(.5, .5), a.position.set(game.system.width + game.system.width / 2 - 325 + 325 * s, game.system.height / 2 + 140), this.charactersContainer.addChild(a);
                    var r = new GoldText(Player.settings[s].name.toUpperCase(), game.system.width + game.system.width / 2 - 325 + 325 * s, game.system.height / 2 - 100, !0, !0).addTo(this.charactersContainer),
                        o = new SilverText('"' + Player.settings[s].quote.toUpperCase() + '"', game.system.width + game.system.width / 2 - 325 + 325 * s, game.system.height / 2 - 60, !0, !1, !0).addTo(this.charactersContainer);
                    n.player = a, n.name = r, n.quote = o;
                    var h = (new game.Sprite("billboard-lamp.png", game.system.width + game.system.width / 2 - 325 + 325 * s, game.system.height / 2 - 170, {
                        anchor: {
                            x: .5,
                            y: .5
                        }
                    }).addTo(this.charactersContainer), new game.Sprite("light-add.png", game.system.width + game.system.width / 2 - 325 + 325 * s, game.system.height / 2 - 56, {
                        anchor: {
                            x: .5,
                            y: .5
                        }
                    }).addTo(this.charactersContainer));
                    h.alpha = 0, h.blendMode = game.blendModes.ADD, n.light = h;
                    var l = new game.Graphics;
                    l.beginFill(0), l.drawRect(0, 0, n.width, n.height), l.position.x = n.position.x - n.width / 2, l.position.y = n.position.y - n.height / 2, l.alpha = .3, game.device.mobile && (l.visible = !1), this.charactersContainer.addChild(l), n.dimmer = l
                }
                this.addTween(this.wall.position, {
                    x: -game.system.width
                }, 600, {
                    easing: game.Tween.Easing.Quadratic.InOut,
                    onComplete: this.tweenComplete.bind(this)
                }).start()
            }
        },
        posterOver: function(e) {
            game.audio.playSound("buttonRollover"), e.light.alpha = 1, e.setTexture("poster-select.png"), e.dimmer.visible = !1;
            for (var t = 0; t < this.posters.length; t++) this.posters[t] !== e && (this.posters[t].dimmer.visible = !0)
        },
        posterOut: function(e) {
            e.light.alpha = 0, e.setTexture("poster-ears.png"), e.dimmer.visible = !0
        },
        tweenComplete: function() {
            this.tweening = !1
        },
        backToMainMenu: function() {
            game.system.setScene("Title")
        },
        startGame: function(e) {
            if (!this.playerSelected) {
                game.device.mobile && game.device.android && game.fullscreen(), game.audio.playSound("buttonPress"), this.playerSelected = !0;
                for (var t = 0; t < this.posters.length; t++) t === e ? game.device.mobile && (this.posters[t].setTexture("poster-select.png"), this.posters[t].light.alpha = 1) : game.device.mobile && (this.posters[t].dimmer.visible = !0);
                Player.character = e;
                var i = new game.Graphics;
                i.beginFill(0), i.drawRect(0, 0, game.system.width, game.system.height / 2), i.position.y = -game.system.height / 2, this.stage.addChild(i), this.addTween(i.position, {
                    y: 0
                }, 500, {
                    delay: 0
                }).start();
                var i = new game.Graphics;
                i.beginFill(0), i.drawRect(0, 0, game.system.width, game.system.height / 2), i.position.y = game.system.height, this.stage.addChild(i), this.addTween(i.position, {
                    y: game.system.height / 2
                }, 500, {
                    delay: 0,
                    onComplete: function() {
                        game.audio.stopMusic(), game.system.setScene("Game")
                    }
                }).start()
            }
        }
    }), game.addAttributes("SceneMainMenu", {
        firstTime: !0
    })
}), game.module("game.scenes.game").require("engine.scene").body(function() {
    game.createScene("Game", {
        score: 0,
        countdown: 3,
        pickups: 0,
        totalPickups: 0,
        started: !1,
        paused: !1,
        endlessMode: !1,
        endlessPrerender: 200,
        levelObjects: [],
        dayRatio: 1,
        pickupList: [],
        distance: 0,
        stripes: [],
        dayNightDuration: 28e3,
        dayNightTransition: 3e3,
        musics: ["music_game", "music_game2", "music_game3"],
        init: function() {
            if (game.config.skipCountdown && (this.countdown = 0), this.score += game.SceneGame.score || 0, game.Timer.speedFactor = 1, this.dayRatio = Math.random() > .5 ? 0 : 1, game.config.forceDay && (this.dayRatio = 1), game.config.forceNight && (this.dayRatio = 0), "1" === game.SceneGame.level && (this.dayRatio = 0), this.bg = new game.Sprite("bg-night.jpg", game.system.width / 2, game.system.height), this.bg.anchor.set(.5, 1), (this.bg.width < game.system.width || this.bg.height < game.system.height) && (this.bg.scale.x = game.system.width / this.bg.width, this.bg.scale.y = game.system.height / this.bg.height), this.bg.addTo(this.stage), game.device.mobile) 1 === this.dayRatio && this.bg.setTexture("bg-day.jpg");
            else {
                var e = new game.Sprite("bg-day.jpg");
                e.anchor.set(.5, 1), e.alpha = this.dayRatio, this.bg.addChild(e)
            }
            if ("endless" === game.SceneGame.level ? (this.initEndlessLevel(), this.endlessMode = !0) : this.level = game.getJSON("level" + game.SceneGame.level + ".json"), this.world = new game.World(0, 2e3), this.world.originalGravity = this.world.gravity.y, this.endlessMode || (1 === parseInt(game.SceneGame.level) && (game.SceneGame.music = 0), 2 === parseInt(game.SceneGame.level) && (game.SceneGame.music = 1), 3 === parseInt(game.SceneGame.level) && (game.SceneGame.music = 2), 4 === parseInt(game.SceneGame.level) && (game.SceneGame.music = 0), 5 === parseInt(game.SceneGame.level) && (game.SceneGame.music = 1)), this.musics[game.SceneGame.music] || (game.SceneGame.music = 0), game.audio.playMusic(this.musics[game.SceneGame.music]), this.bgLayer = (new game.Container).addTo(this.stage), this.levelContainer = (new game.Container).addTo(this.stage), this.birdContainer = (new game.Container).addTo(this.levelContainer), this.blockContainer = (new game.Container).addTo(this.levelContainer), this.pickupContainer = (new game.Container).addTo(this.levelContainer), this.playerContainer = (new game.Container).addTo(this.levelContainer), this.fgLayer = (new game.Container).addTo(this.stage), this.touchLayer = (new game.Container).addTo(this.stage), this.touchLayer.interactive = !0, this.touchLayer.hitArea = new game.HitRectangle(0, 0, game.system.width, game.system.height), this.touchLayer.mousedown = this.touchLayer.touchstart = this.onmousedown.bind(this), this.touchLayer.mouseup = this.touchLayer.mouseupoutside = this.touchLayer.touchend = this.touchLayer.touchendoutside = this.onmouseup.bind(this), this.uiLayer = (new game.Container).addTo(this.stage), this.pauseLayer = (new game.Container).addTo(this.stage), game.debugDraw && (game.debugDraw.follow = this.levelContainer), this.initPauseLayer(), this.stars = new game.Sprite("stars.png").addTo(this.bgLayer), this.stars.alpha = 0 === this.dayRatio ? 1 : 0, game.config.showMoon && (this.moon = new game.Sprite(1 === this.dayRatio ? "sun.png" : "moon.png", game.system.width + 500, 200).addTo(this.bgLayer), this.moon.originalX = this.moon.position.x), game.device.mobile && this.moon && (this.moon.position.y = 20, this.moon.position.x = game.system.width - 300), this.moon) {
                var t = new game.Sprite("lensflare_add.png", this.moon.width / 2, this.moon.height / 2, {
                    anchor: {
                        x: .5,
                        y: .5
                    }
                });
                t.scale.set(4), t.addTo(this.fgLayer), t.blendMode = game.blendModes.ADD, this.addTween(t, {
                    rotation: 2 * Math.PI
                }, 5e4, {
                    repeat: 1 / 0
                }).start(), this.moon.flare = t, this.moon.flare.visible = 1 === this.dayRatio ? !0 : !1
            }
            var i = new ScrollingSprite("cloud-small.png", 100, 2, game.system.width + 400),
                s = new ScrollingSprite("cloud-large.png", 200, 2.5, game.system.width);
            if (this.initDayAndNight(), game.config.showBackgroundCity) var n = new ScrollingSprite("city-silhouette-night.png", this.level.height / 2.5, 5);
            for (var a = new ScrollingSprite("truss-night.png", 0, 20, 4 * game.system.width, "fgLayer"), r = 0; r < Math.floor(this.level.height / a.sprite.height); r++) var a = new ScrollingSprite("truss-night.png", a.sprite.height + a.sprite.height * r, 20, 4 * game.system.width, "fgLayer");
            this.pauseButton = new Button("button-up.png", game.system.width - 164, 68, "pause-icon.png", this.pauseGame.bind(this)).addTo(this.uiLayer);
            var o = new MuteButton(game.system.width - 60, 68).addTo(this.uiLayer);
            this.mutebutton = o, this.renderLevel(), game.device.mobile && 1 === this.dayRatio && game.TextureCache[game.config.mediaFolder + "sprites_night.png"].baseTexture.updateSourceImage(game.config.mediaFolder + "sprites_day.png"), game.device.mobile && 0 === this.dayRatio && game.TextureCache[game.config.mediaFolder + "sprites_night.png"].baseTexture.updateSourceImage(game.config.mediaFolder + "sprites_night.png"), this.totalPickups = this.pickups, this.player || (this.player = new Player(100, 100)), this.camera = new game.Camera, this.camera.addTo(this.levelContainer), this.camera.acceleration = 12, this.camera.minX = 0, this.camera.minY = 0, this.endlessMode || (this.camera.maxX = Math.max(0, this.level.width - game.system.width)), this.camera.maxY = Math.max(0, this.level.height - game.system.height), this.camera.maxSpeed = 500, this.camera.offset.x = game.system.width / 2 - 450, this.camera.follow(this.player.sprite), this.camera.setPosition(this.player.sprite.position.x, this.player.sprite.position.y), this.camera.setSensor(this.player.sprite.width, this.player.sprite.height), this.camera.shake(), n && n.update(), i.update(), s.update();
            var h = new GoldText("SCORE:", 16, 11, !1, !0).addTo(this.uiLayer);
            this.scoreText = new SilverText(game.getDottedNumber(this.score), 153, 11).addTo(this.uiLayer);
            var h = new SilverText("x", 92, game.system.height - 56).addTo(this.uiLayer);
            this.endlessMode && (game.SceneGame.lives = 1);
            var l = game.SceneGame.lives;
            10 > l && (l = "0" + l), this.livesText = new SilverText(l.toString(), 121, game.system.height - 56).addTo(this.uiLayer), this.distanceText = new SilverText("0M", 16, 56, !1, !1, !0).addTo(this.uiLayer);
            var d = this.player.anim,
                h = (new game.Sprite("lives-" + d + ".png", 16, game.system.height - 66).addTo(this.uiLayer), new GoldText(Player.settings[Player.character].name.toUpperCase(), 16, game.system.height - 106, !1, !0).addTo(this.uiLayer)),
                u = new game.Graphics;
            u.beginFill(0), u.drawRect(0, 0, game.system.width, game.system.height / 2), this.stage.addChild(u), this.addTween(u.position, {
                y: -game.system.height / 2 + 125
            }, 500).start(), this.stripes.push(u);
            var u = new game.Graphics;
            u.beginFill(0), u.drawRect(0, 0, game.system.width, game.system.height / 2), u.position.y = game.system.height - game.system.height / 2, this.stage.addChild(u), this.stripes.push(u), this.addTween(u.position, {
                y: "+" + (game.system.height / 2 - 125)
            }, 500).start();
            var c = new game.Graphics;
            c.beginFill(0), c.drawRect(0, 0, game.system.width, game.system.height), this.uiLayer.addChild(c), this.addTween(c, {
                alpha: .3
            }, 500).start(), this.fader = c, this.van = new game.Animation("vanFrames_01.png", "vanFrames_02.png", "vanFrames_03.png", "vanFrames_04.png", "vanFrames_05.png"), this.van.animationSpeed = .2, this.van.play(), this.van.position.set(-160, this.player.sprite.position.y - 78), this.van.visible = !1, this.endlessMode && (this.van.position.x -= 200), this.playerContainer.addChild(this.van);
            var p = "1" === game.SceneGame.level;
            if (game.SceneGame.endlessUnlocked && (p = !1), p) {
                var m = 2200,
                    h = new SilverText("Complete all five levels\nto unlock endless-runner mode!".toUpperCase(), game.system.width / 2, game.system.height / 2, !0, !1);
                h.addTo(this.uiLayer), h.swipeOut(m, 600)
            }
            var g = this;
            this.addTween(this.van.position, {
                x: p ? 2500 + Player.settings[Player.character].vanPosFirst : 1700 + Player.settings[Player.character].vanPos
            }, 4300, {
                delay: p ? 1600 : 500,
                easing: "Quadratic.Out",
                onStart: function() {
                    g.van.visible = !0
                }
            }).start(), this.addTimer(p ? m + 300 : 500, this.startCountdown.bind(this))
        },
        speedUp: function() {
            this.firstSpeedUp || this.initSpeedLines(), this.firstSpeedUp = !0, game.tweenEngine.stopTweensForObject(this.player.body.velocity), this.player.runSpeed += 100, this.world.gravity.y += 100, this.player.flyUpPower += 100, this.player.body.velocity.x = this.player.runSpeed, this.player.body.velocityLimit.x = this.player.runSpeed
        },
        initSpeedLines: function() {
            if (game.config.showSpeedLines) {
                this.speedLinesContainer = (new game.Container).addTo(this.fgLayer);
                for (var e = 0; 3 > e; e++)
                    for (var t = 0; 7 > t; t++) {
                        var i = new game.Sprite("pixel-particle.png");
                        i.alpha = .5, i.position.x = Math.random() * game.system.width, i.position.y = Math.random() * game.system.height, i.scale.x = 0, i.speed = 25 + 5 * e, i.addTo(this.speedLinesContainer)
                    }
            }
        },
        initDayAndNight: function() {
            if (!game.device.mobile) {
                var e = game.TextureCache[game.config.mediaFolder + "sprites_day.png"].width,
                    t = game.TextureCache[game.config.mediaFolder + "sprites_day.png"].height;
                this.compositeTexture = new game.RenderTexture(e, t), this.daySprite = new game.Sprite(game.config.mediaFolder + "sprites_day.png"), this.nightSprite = new game.Sprite(game.config.mediaFolder + "sprites_night.png");
                for (var i in game.TextureCache) - 1 === i.indexOf(game.config.mediaFolder) && (-1 !== i.indexOf("sprite") || -1 !== i.indexOf("block") || -1 !== i.indexOf("silhouette") || -1 !== i.indexOf("truss")) && (game.TextureCache[i].baseTexture = this.compositeTexture.baseTexture);
                this.setDayRatio()
            }
        },
        toggleDayNight: function() {
            this.dayRatio > 0 && this.dayRatio < 1 || (this.isDay = 0 === this.dayRatio ? !0 : !1, this.addTween(this, {
                dayRatio: 0 === this.dayRatio ? 1 : 0
            }, this.dayNightTransition, {
                onUpdate: this.setDayRatio.bind(this),
                onComplete: this.resetDayNightTimer.bind(this)
            }).start(), this.addTween(this.stars, {
                alpha: 1 === this.dayRatio ? 1 : 0
            }, this.dayNightTransition).start())
        },
        resetDayNightTimer: function() {
            this.addTimer(this.dayNightDuration, this.toggleDayNight.bind(this))
        },
        changeMoon: function() {
            this.moon.setTexture(this.isDay ? "sun.png" : "moon.png"), this.moon.flare.visible = 1 === this.dayRatio ? !0 : !1
        },
        setDayRatio: function() {
            this.daySprite.worldAlpha = this.dayRatio, this.compositeTexture.render(this.nightSprite, null, !0), this.daySprite.worldAlpha > 0 && this.compositeTexture.render(this.daySprite), this.bg.children[0].alpha = this.dayRatio
        },
        renderLevel: function(e) {
            for (var t = 0; t < this.level.objects.length; t++) {
                var i = this.level.objects[t][0] + (e || 0),
                    s = this.level.objects[t][1],
                    n = this.level.objects[t][2].split("_");
                if ("Player" !== n[0] || !this.player) {
                    var a = new window[n[0]](i, s, n[1], n[2]);
                    "Player" !== n[0] || this.player || (this.player = a), "Player" !== n[0] && a.sprite && this.levelObjects.push(a)
                }
            }
        },
        checkLevelObjects: function() {
            game.DebugDraw.enabled && !this.objectDebugText && (this.objectDebugText = new game.Text("0", {
                fill: "red"
            }), game.system.stage.addChild(this.objectDebugText));
            for (var e = 0, t = this.levelObjects.length - 1; t >= 0; t--) {
                var i = this.levelObjects[t].sprite.width;
                if (0 > i && (i += 2 * -i), this.levelObjects[t].sprite.position.x + i - i * this.levelObjects[t].sprite.anchor.x < this.camera.position.x) this.levelObjects[t].remove(), this.levelObjects.splice(t, 1);
                else {
                    var s = this.levelObjects[t].sprite.height;
                    0 > s && (s += 2 * -s), this.levelObjects[t].sprite.position.y - s - s * this.levelObjects[t].sprite.anchor.y > this.camera.position.y + game.system.height ? this.levelObjects[t].sprite.visible = !1 : this.levelObjects[t].sprite.position.y + s - s * this.levelObjects[t].sprite.anchor.y < this.camera.position.y ? this.levelObjects[t].sprite.visible = !1 : (this.levelObjects[t].sprite.position.x - i - i * this.levelObjects[t].sprite.anchor.x < this.camera.position.x + game.system.width && !this.levelObjects[t].sprite.visible && (this.levelObjects[t].sprite.visible = !0), this.levelObjects[t].sprite.visible && e++)
                }
            }
            this.objectDebugText && this.objectDebugText.setText(e.toString())
        },
        initEndlessLevel: function() {
            this.endlessData = [];
            for (var e in game.json) - 1 !== e.indexOf("endless") && -1 === e.indexOf("endless0") && this.endlessData.push(game.json[e]);
            this.level = game.getJSON("endless0.json")
        },
        initPauseLayer: function() {
            this.pauseShadow = new game.Graphics, this.pauseShadow.beginFill(0), this.pauseShadow.drawRect(0, 0, game.system.width, game.system.height), this.pauseShadow.visible = !1, this.pauseShadow.interactive = !0, this.pauseShadow.hitArea = new game.HitRectangle(0, 0, game.system.width, game.system.height), this.pauseLayer.addChild(this.pauseShadow), this.pauseContainer = (new game.Container).addTo(this.pauseLayer), this.pauseContainer.visible = !1;
            var e = new game.Sprite("popup-billboard.png", game.system.width / 2, game.system.height / 1.889, {
                anchor: {
                    x: .5,
                    y: .5
                }
            }).addTo(this.pauseContainer);
            this.pauseContainer.popup = e;
            new game.Sprite("board-frame.png", -335, 220).addTo(e), new SilverText("PAUSED", 0, -142, !0, !0).addTo(e), new Button("button-up.png", 100, 94, "menu-icon.png", function() {
                game.scene.player.exit(), game.system.setScene("MainMenu")
            }).addTo(e), new Button("button-up.png", 100, -17, "replay-icon.png", function() {
                game.system.setScene("Game")
            }).addTo(e), new Button("bigbutton-up.png", -53, 40, "bigplay-icon.png", this.resumeGame.bind(this), !0).addTo(e), new game.Sprite("billboard-lamp.png", -175, -264).addTo(e), new game.Sprite("billboard-lamp.png", 120, -264).addTo(e), new game.Sprite("cheese.png", 65, 171).addTo(e);
            this.pauseContainer.lights = [];
            var t = new game.Sprite("light-add.png", -280, -224).addTo(e);
            t.visible = !1, t.blendMode = game.blendModes.ADD, t.flickerTimer = new game.Timer, t.flickerTimeOut = 3e3, this.pauseContainer.lights.push(t);
            var t = new game.Sprite("light-add.png", 15, -224).addTo(e);
            t.visible = !1, t.blendMode = game.blendModes.ADD, t.flickerTimer = new game.Timer, t.flickerTimeOut = 2e3, this.pauseContainer.lights.push(t)
        },
        pauseGame: function() {
            this.paused || this.pauseContainer.visible || (this.pauseButton.container.interactive = !1, this.mutebutton.container.interactive = !1, this.paused = !0, this.pauseContainer.visible = !0, this.pauseContainer.position.x = game.system.width, this.addTween(this.pauseContainer.position, {
                x: 0
            }, 400, {
                easing: game.Tween.Easing.Quadratic.Out
            }).start(), this.pauseShadow.alpha = 0, this.pauseShadow.visible = !0, this.addTween(this.pauseShadow, {
                alpha: .5
            }, 200).start(), this.pauseContainer.lights[0].visible = !1, this.pauseContainer.lights[0].flickerTimer.reset(), this.pauseContainer.lights[0].flickerTime = Math.random() * this.pauseContainer.lights[0].flickerTimeOut, this.pauseContainer.lights[1].visible = !1, this.pauseContainer.lights[1].flickerTimer.reset(), this.pauseContainer.lights[1].flickerTime = Math.random() * this.pauseContainer.lights[1].flickerTimeOut)
        },
        resumeGame: function() {
            this.paused = !1, this.pauseButton.container.interactive = !0, this.mutebutton.container.interactive = !0, this.addTween(this.pauseContainer.position, {
                x: -game.system.width
            }, 400, {
                easing: game.Tween.Easing.Quadratic.In,
                onComplete: function() {
                    game.scene.pauseContainer.visible = !1
                }
            }).start();
            var e = this;
            this.addTween(this.pauseShadow, {
                alpha: 0
            }, 200, {
                onComplete: function() {
                    e.pauseShadow.visible = !1
                }
            }).start()
        },
        startCountdown: function() {
            var e = 480;
            3 === this.countdown && (game.audio.playSound("v8_rev8bit"), game.audio.playSound("321GO_8bit"));
            var t = new game.Sprite("countdown0" + (this.countdown + 1) + ".png", game.system.width / 2, game.system.height / 2 - 100, {
                anchor: {
                    x: .5,
                    y: .5
                }
            }).addTo(this.uiLayer);
            this.countdown > 0 ? (this.addTween(t.position, {
                y: "+100"
            }, e).start(), this.addTween(t, {
                alpha: 0
            }, e, {
                delay: e
            }).start()) : (t.position.y += 100, t.scale.set(2, 2), this.addTween(t.scale, {
                x: 1,
                y: 1
            }, e).start(), this.addTween(t, {
                alpha: 0
            }, e / 2, {
                delay: e,
                repeat: 4,
                yoyo: !0,
                onComplete: function() {
                    game.scene.uiLayer.removeChild(t)
                }
            }).start(), t.alpha = 0, this.addTween(t, {
                alpha: 1
            }, e).start(), this.startGame()), game.scene.countdown > 0 && this.addTimer(2 * e, function() {
                game.scene.uiLayer.removeChild(t), game.scene.countdown--, game.scene.startCountdown()
            })
        },
        removeVan: function() {
            this.playerContainer.removeChild(this.van)
        },
        startGame: function() {
            this._mousedown = !1, this.addTween(this.fader, {
                alpha: 0
            }, 200, {
                onComplete: function() {
                    game.scene.uiLayer.removeChild(game.scene.fader)
                }
            }).start(), game.device.mobile || (this.resetDayNightTimer(), this.addTween(this.moon.position, {
                y: -100
            }, (this.dayNightDuration + this.dayNightTransition) / 2, {
                repeat: 1 / 0,
                yoyo: !0,
                easing: game.Tween.Easing.Quadratic.InOut,
                onRepeat: function() {
                    game.scene.moon.position.y > 0 && (game.scene.moon.position.x = game.scene.moon.originalX, game.scene.changeMoon())
                }
            }).start(), this.addTween(this.moon.position, {
                x: -600
            }, this.dayNightDuration + this.dayNightTransition, {
                repeat: 1 / 0
            }).start()), this.endlessMode ? this.addTimer(game.config.speedUpTime, this.speedUp.bind(this), !0) : this.initSpeedLines(), this.addTween(this.stripes[0].position, {
                y: -game.system.height / 2
            }, 400).start(), this.addTween(this.stripes[1].position, {
                y: game.system.height
            }, 400, {
                onComplete: this.removeStripes.bind(this)
            }).start(), this.started = !0, this.startPos = this.player.sprite.position.x, this.player.sprite.textures = this.player.jumpAnim, this.player.sprite.loop = !1, this.player.sprite.gotoAndPlay(0), this.player.body.velocity.y = -this.player.jumpPower, this.player.sprite.visible = !0, this.addTimer(2e3, this.removeVan.bind(this)), game.config.showBirds && this.addTimer(5e3, this.spawnBirds.bind(this), !0)
        },
        spawnBirds: function() {
            for (var e = Math.random(3, 6), t = 0; e > t; t++) {
                new game.Bird(game.system.width + 50 * t, Math.random(100, 200))
            }
        },
        removeStripes: function() {
            this.stage.removeChild(this.stripes[0]), this.stage.removeChild(this.stripes[1])
        },
        addScore: function(e) {
            this.score += e, this.endlessMode || this.scoreText.setText(game.getDottedNumber(this.score))
        },
        flashSiren: function(e) {
            e.visible = !0;
            var t = 70;
            this.addTimer(t, function() {
                e.visible = !1
            }), this.addTimer(2 * t, function() {
                e.visible = !0
            }), this.addTimer(3 * t, function() {
                e.visible = !1
            })
        },
        finish: function(e) {
            if (this.started = !1, this.endlessMode && (this.score += 5 * this.distance), this.endlessMode || e || game.audio.playSound("levelFinish2"), e) {
                game.audio.playSound("gameover"), game.audio.playSound("falldown_siren");
                var t = new game.Sprite("sirenLight_blue.png");
                t.anchor.x = .5, t.anchor.y = 1, t.position.x = game.system.width / 2 - 100, t.position.y = game.system.height, t.scale.set(2, 2), t.visible = !1, t.blendMode = game.blendModes.ADD;
                var i = new game.Sprite("sirenLight_red.png");
                i.anchor.x = .5, i.anchor.y = 1, i.position.x = game.system.width / 2 + 100, i.position.y = game.system.height, i.scale.set(2, 2), i.visible = !1, i.blendMode = game.blendModes.ADD, this.uiLayer.addChild(t), this.uiLayer.addChild(i);
                var s = 600;
                this.addTimer(s, this.flashSiren.bind(this, t), !0), this.addTimer(s / 2, function() {
                    game.scene.addTimer(s, game.scene.flashSiren.bind(game.scene, i), !0)
                })
            }
            if (game.SceneGame.score = this.score, this.score > game.highScore && (game.highScore = this.score, game.storage.set("highScore", game.highScore)), this.player.remove(), this.pauseButton.remove(), this.endlessMode || !e) {
                var n = new game.Animation("speedlines01.png", "speedlines02.png", "speedlines03.png", "speedlines04.png");
                n.animationSpeed = .3, n.anchor.set(.5, .5), n.scale.set(1, 1), n.scale.x = game.system.width / n.width, n.position.set(game.system.width / 2, game.system.height / 2), n.play(), this.uiLayer.addChild(n)
            } else {
                var a = new game.Graphics;
                a.beginFill(0), a.drawRect(0, -200, game.system.width, 400), a.position.y = game.system.height / 2, a.scale.y = 0, this.addTween(a.scale, {
                    y: 1
                }, 400).start(), this.uiLayer.addChild(a)
            }
            this.resultsContainer = (new game.Container).addTo(this.uiLayer);
            var r = new game.Graphics;
            if (r.beginFill(16777215), r.drawRect(0, 0, game.system.width, game.system.height), this.resultsContainer.addChild(r), this.addTween(r, {
                    alpha: 0
                }, 500).start(), e) {
                game.SceneGame.lives > 0 && game.SceneGame.lives--;
                var o = game.SceneGame.lives;
                10 > o && (o = "0" + o), this.livesText.setText(o.toString()), 0 === game.SceneGame.lives && (game.SceneGame.score = 0)
            }
            if (!e && !this.endlessMode) {
                var h = new game.Sprite("hi5_jump_" + this.finishObject.flagMan + ".png");
                h.position.x = game.system.width, h.position.y = game.system.height + h.height / 2, h.anchor.y = .5, this.addTween(h.position, {
                    x: game.system.width / 2 - 20,
                    y: game.system.height / 2 - 50
                }, 500).start(), this.resultsContainer.addChild(h);
                var l = new game.Sprite("hi5_jump_" + Player.settings[Player.character].anim + ".png");
                l.position.x = -l.width, l.position.y = game.system.height + l.height / 2, l.anchor.y = .5, l.anchor.x = 1, this.addTween(l.position, {
                    x: game.system.width / 2 + 20,
                    y: game.system.height / 2 - 60
                }, 500).start(), this.resultsContainer.addChild(l);
                var r = new game.Graphics;
                r.beginFill(16777215), r.drawRect(0, 0, game.system.width, game.system.height), r.visible = !1, this.resultsContainer.addChild(r), this.addTween(r, {
                    alpha: 0
                }, 500, {
                    delay: 500,
                    onStart: function() {
                        game.audio.playSound("hiFive"), r.visible = !0
                    }
                }).start();
                var d = ["FRESH!", "RADICAL!", "EXTREME DELIVERY!", "CRUCIAL!", "TOTES AMAZE!"],
                    u = new SilverText(d.random(), game.system.width / 2, game.system.height / 2 + 100, !0, !0);
                return u.sprite.scale.set(1, 1), this.addTimer(500, function() {
                    u.addTo(game.scene.resultsContainer), u.swipeIn(0, 600)
                }), this.addTimer(2e3, function() {
                    u.swipeOut(0, 600)
                }), this.addTimer(2400, function() {
                    game.scene.addTween(h.position, {
                        y: "-" + game.system.height
                    }, 300, {
                        easing: "Quadratic.In"
                    }).start(), game.scene.addTween(l.position, {
                        y: "-" + game.system.height
                    }, 300, {
                        easing: "Quadratic.In"
                    }).start(), game.audio.playSound("hiFive_takeoff")
                }), void this.addTimer(2700, function() {
                    game.scene.showFinishTexts()
                })
            }
            this.showFinishTexts(e)
        },
        showFinishTexts: function(e) {
            if (this.endlessMode || !e) {
                var t = [game.Texture.fromFrame(this.player.anim + "-run01.png"), game.Texture.fromFrame(this.player.anim + "-run02.png"), game.Texture.fromFrame(this.player.anim + "-run03.png"), game.Texture.fromFrame(this.player.anim + "-run04.png"), game.Texture.fromFrame(this.player.anim + "-run05.png"), game.Texture.fromFrame(this.player.anim + "-run06.png"), game.Texture.fromFrame(this.player.anim + "-run07.png"), game.Texture.fromFrame(this.player.anim + "-run08.png"), game.Texture.fromFrame(this.player.anim + "-run09.png"), game.Texture.fromFrame(this.player.anim + "-run10.png"), game.Texture.fromFrame(this.player.anim + "-run11.png"), game.Texture.fromFrame(this.player.anim + "-run12.png"), game.Texture.fromFrame(this.player.anim + "-run13.png"), game.Texture.fromFrame(this.player.anim + "-run14.png")],
                    i = (new game.Container).addTo(this.resultsContainer),
                    s = new game.Animation(t);
                s.animationSpeed = .25, s.anchor.set(.5, .5), s.scale.set(2, 2), s.position.set(game.system.width / 2 + 250, game.system.height / 2), s.alpha = .3, s.play(), i.addChild(s);
                var s = new game.Animation(t);
                s.animationSpeed = .25, s.anchor.set(.5, .5), s.scale.set(2, 2), s.position.set(game.system.width / 2 + 300, game.system.height / 2), s.alpha = .6, s.play(), i.addChild(s);
                var s = new game.Animation(t);
                s.animationSpeed = .25, s.anchor.set(.5, .5), s.scale.set(2, 2), s.position.set(game.system.width / 2 + 350, game.system.height / 2), s.play(), i.addChild(s), i.position.x = -400, this.addTween(i.position, {
                    x: 0
                }, 200).start()
            }
            var n = new GoldText(Player.settings[Player.character].name.toUpperCase(), game.system.width / 2, game.system.height / 2 - 135, !0).addTo(this.resultsContainer);
            e ? n.fadeIn(500, 500) : n.swipeIn();
            var a = "RAN AS FAR AS THEY COULD!";
            if (!this.endlessMode) {
                var r = game.getJSON("level" + (parseInt(game.SceneGame.level) + 1) + ".json");
                if (a = r ? "GOT THROUGH" : "COMPLETED THE GAME!", e) {
                    var o = "TRY AGAIN?";
                    0 === game.SceneGame.lives ? (a = "LOST THEIR LAST LIFE...", o = "GAME OVER!") : a = "LOST A LIFE..."
                } else o = r ? "LEVEL " + game.SceneGame.level : "WELL DONE!";
                var h = new SilverText(o, game.system.width / 2, game.system.height / 2, !0, !0).addTo(this.resultsContainer);
                e ? h.fadeIn(500, 1500) : h.swipeIn(300)
            }
            var l = new SilverText(a, game.system.width / 2, game.system.height / 2 - 70, !0).addTo(this.resultsContainer);
            if (e ? l.fadeIn(500, 1e3) : l.swipeIn(200), this.endlessMode) {
                new SilverText("FINAL\nSCORE", game.system.width / 2 - 140, game.system.height / 2, !0).addTo(this.resultsContainer).swipeIn(400), new GoldText(this.score.toString(), game.system.width / 2 + 120, game.system.height / 2, !0).addTo(this.resultsContainer).swipeIn(600)
            }
            var d = game.system.width / 2 - 104;
            e && 0 === game.SceneGame.lives && !this.endlessMode ? d -= 40 : e && !this.endlessMode ? d = game.system.width / 2 - 54 : this.endlessMode && (d -= 90);
            new Button("button-up.png", d, game.system.height / 2 + 120, "menu-icon.png", this.backToMainMenu.bind(this)).addTo(this.resultsContainer).fadeIn(800);
            if (this.endlessMode || game.SceneGame.lives > 0) {
                var u = game.system.width / 2;
                !this.endlessMode && e && (u += 56), this.endlessMode && (u -= 85); {
                    new Button("button-up.png", u, game.system.height / 2 + 120, "replay-icon.png", function() {
                        game.SceneGame.music++, game.system.setScene("Game")
                    }).addTo(this.resultsContainer).fadeIn(800)
                }
            }
            if (this.endlessMode || 0 === game.SceneGame.lives) {
                var c = game.system.width / 2 + 50;
                this.endlessMode || (c -= 50);
                var p = new SubmitButton(c, game.system.height / 2 + 120, this.showSubmit.bind(this)).addTo(this.resultsContainer).fadeIn(800);
                this.submitButton = p; {
                    var m = this.score.toString(),
                        g = this.endlessMode ? 135 : 142;
                    new TweetButton(c + g, game.system.height / 2 + 120, function() {
                        console.log(game), window.open("http://twitter.com/home/?status=There's dominance, and then there's my %23GrubRunner score: " + m + "! But really, I’m bad. So, go beat it? grubhub.com", "_blank", "height=300,width=550,resizable=1")
                    }).addTo(this.resultsContainer).fadeIn(800)
                }
            } else if (!e) {
                new Button("button-up.png", game.system.width / 2 + 100, game.system.height / 2 + 120, "play-icon.png", function() {
                    game.SceneGame.level++, r ? game.system.setScene("Game") : !r && game.SceneGame.endlessUnlocked ? (game.SceneGame.music++, game.SceneGame.level = "endless", game.system.setScene("Game")) : game.system.setScene("MainMenu")
                }).addTo(this.resultsContainer).fadeIn(800)
            }
            if (!this.endlessMode && !e && !r) {
                var f = new game.Graphics;
                f.beginFill(0), f.drawRect(0, 0, game.system.width, game.system.height), this.fgLayer.addChild(f);
                var y = new game.Sprite("lensflare_add.png", game.system.width / 2, game.system.height / 2, {
                    anchor: {
                        x: .5,
                        y: .5
                    }
                });
                y.scale.set(4), y.addTo(this.stage), y.blendMode = game.blendModes.ADD, this.addTween(y, {
                    rotation: 2 * Math.PI
                }, 5e4, {
                    repeat: 1 / 0
                }).start()
            }
            if (!this.endlessMode && !r && !e) {
                var v = this;
                game.SceneGame.endlessUnlocked = !0, this.addTimer(3e3, function() {
                    h.fadeOut(), l.fadeOut(), n.fadeOut();
                    new SilverText("Endless mode unlocked!\nClick play to run...".toUpperCase(), game.system.width / 2, game.system.height / 2 - 100, !0, !1).addTo(v.resultsContainer).fadeIn(500, 500), new SilverText("FOREVER!", game.system.width / 2, game.system.height / 2, !0, !0).addTo(v.resultsContainer).fadeIn(500, 500);
                    game.storage.set("endlessUnlocked", !0)
                })
            }
        },
        backToMainMenu: function() {
            var e = new game.Graphics;
            e.beginFill(0), e.drawRect(0, 0, game.system.width, game.system.height / 2), e.position.y = -game.system.height / 2, this.stage.addChild(e), this.addTween(e.position, {
                y: 0
            }, 500).start();
            var e = new game.Graphics;
            e.beginFill(0), e.drawRect(0, 0, game.system.width, game.system.height / 2), e.position.y = game.system.height, this.stage.addChild(e), this.addTween(e.position, {
                y: game.system.height / 2
            }, 500, {
                onComplete: function() {
                    game.audio.stopMusic(), game.system.setScene("MainMenu")
                }
            }).start()
        },
        showSubmit: function() {
            this.uiLayer.removeChild(this.resultsContainer), this.submitContainer = (new game.Container).addTo(this.uiLayer), this.backButton = new Button("button-up.png", 60, 68, "back-icon.png", this.hideSubmit.bind(this)).addTo(this.submitContainer).fadeIn();
            var e = (new GoldText(this.score.toString(), game.system.width / 2, game.system.height / 2 - 220, !0).addTo(this.submitContainer), new SilverText("", game.system.width / 2, game.system.height / 2 - 120, !0, !0).addTo(this.submitContainer)),
                t = (new Button("button-up.png", game.system.width / 2, game.system.height / 2 + 180, "enter-icon.png", this.sendSubmit.bind(this)).addTo(this.submitContainer), new Keyboard(game.system.width / 2, 300, function() {
                    e.setText(t.input), e.sprite.updateTransform(), e.sprite.position.x = game.system.width / 2 - e.sprite.width / 2
                }).addTo(this.submitContainer));
            this.submitKeyboard = t
        },
        hideSubmit: function() {
            this.uiLayer.removeChild(this.submitContainer), this.uiLayer.addChild(this.resultsContainer)
        },
        sendSubmit: function() {
            if (!(this.submitKeyboard.input.length < 3)) {
                this.uiLayer.removeChild(this.submitContainer);
                var e = this.submitKeyboard.input,
                    t = this.score.toString();
                game.db.sendScore({
                    name: e,
                    score: t
                }, function(e) {
                    e.error || game.scene.showLeaderboard()
                })
            }
        },
        showLeaderboard: function() {
            this.leaderContainer = (new game.Container).addTo(this.uiLayer), this.leaderboard = new Leaderboard(this.hideLeaderboard.bind(this)).addTo(this.leaderContainer)
        },
        hideLeaderboard: function() {
            this.leaderboard.backButton.remove(), this.uiLayer.removeChild(this.leaderContainer), this.uiLayer.addChild(this.resultsContainer), this.submitButton.container.interactive = !1, this.submitButton.container.alpha = .3
        },
        onmousedown: function() {
            this._mousedown = !0
        },
        onmouseup: function() {
            this._mousedown = !1, this.player.mouseup()
        },
        keyup: function(e) {
            "SPACE" === e && this.player.mouseup()
        },
        update: function() {
            if (this.paused) return game.tweenEngine && game.tweenEngine.update(), !this.pauseContainer.lights[0].visible && this.pauseContainer.lights[0].flickerTimer.time() >= this.pauseContainer.lights[0].flickerTime ? (this.pauseContainer.lights[0].visible = !0, this.pauseContainer.lights[0].flickerTimer.reset()) : this.pauseContainer.lights[0].visible && this.pauseContainer.lights[0].flickerTimer.time() >= 100 && (this.pauseContainer.lights[0].visible = !1, this.pauseContainer.lights[0].flickerTimer.reset(), this.pauseContainer.lights[0].flickerTime = Math.random() * this.pauseContainer.lights[0].flickerTimeOut), void(!this.pauseContainer.lights[1].visible && this.pauseContainer.lights[1].flickerTimer.time() >= this.pauseContainer.lights[1].flickerTime ? (this.pauseContainer.lights[1].visible = !0, this.pauseContainer.lights[1].flickerTimer.reset()) : this.pauseContainer.lights[1].visible && this.pauseContainer.lights[1].flickerTimer.time() >= 100 && (this.pauseContainer.lights[1].visible = !1, this.pauseContainer.lights[1].flickerTimer.reset(), this.pauseContainer.lights[1].flickerTime = Math.random() * this.pauseContainer.lights[0].flickerTimeOut));
            if ((this._mousedown || game.keyboard.down("SPACE")) && this.player.jump(), this.moon && this.moon.flare.visible && (this.moon.flare.position.x = this.moon.position.x + this.moon.width / 2, this.moon.flare.position.y = this.moon.position.y + this.moon.height / 2), this.speedLinesContainer)
                for (var e = 0; e < this.speedLinesContainer.children.length; e++) {
                    var t = this.speedLinesContainer.children[e],
                        i = this.camera.speed.x;
                    i > 0 && (i = 0), t.scale.x = i, t.position.x += i * t.speed * game.system.delta, t.position.x - t.width < 0 && (t.position.y = Math.random() * game.system.height, t.position.x = game.system.width - t.width)
                }
            if (this.started && (this.distance = Math.round((this.player.sprite.position.x - this.startPos) / 10), this.distanceText.setText(game.getDottedNumber(this.distance) + "M"), this.endlessMode && this.scoreText.setText(game.getDottedNumber(this.score + 5 * this.distance))), this.checkLevelObjects(), this.endlessMode && this.level.width - this.player.sprite.position.x < game.system.width + this.endlessPrerender) {
                var s = this.level.width;
                this.level = game.copy(this.endlessData.random()), this.renderLevel(s), this.level.width += s
            }
            this._super(), game.debugDraw && (game.debugDraw.bodyContainer.position.x = this.levelContainer.position.x, game.debugDraw.bodyContainer.position.y = this.levelContainer.position.y)
        }
    })
}), game.module("game.camera").require("engine.camera").body(function() {
    game.Camera.inject({
        shaking: !1,
        shakeX: 0,
        shakeY: 0,
        shakeAmount: 2,
        shakeSpeed: 500,
        shake: function() {
            this.shaking = !0, this.shakeX = -this.shakeAmount / 2, game.scene.addTween(this, {
                shakeX: this.shakeAmount
            }, this.shakeSpeed / 2, {
                easing: game.Tween.Easing.Quadratic.InOut,
                repeat: 1 / 0,
                yoyo: !0
            }).start(), this.shakeY = -this.shakeAmount, game.scene.addTween(this, {
                shakeY: this.shakeAmount
            }, this.shakeSpeed, {
                easing: game.Tween.Easing.Quadratic.InOut,
                repeat: 1 / 0,
                yoyo: !0
            }).start()
        },
        moveSensor: function() {
            this.sensorPosition.x = this.target.position.x, this.sensorPosition.y = this.target.position.y
        },
        moveCamera: function() {
            this._super(), this.shaking && this.container && (this.container.position.x = ~~(-this.position.x - this.shakeX), this.container.position.y = ~~(-this.position.y + this.shakeY))
        }
    })
}), game.module("game.loader").require("engine.loader").body(function() {
    game.Loader.inject({
        init: function() {},
        start: function() {
            this.started = !0;
            var e = new game.AssetLoader([game.config.mediaFolder + "loader.json"]);
            e.onComplete = this.startLoader.bind(this), e.load()
        },
        startLoader: function(e) {
            this.scene = e || game["Scene" + game.System.startScene], this.dynamic = !1, game.System.startScene = null, this.stage = game.system.stage;
            for (var t = 0; t < game.assetQueue.length; t++) game.TextureCache[game.assetQueue[t]] || this.assetQueue.push(this.getPath(game.assetQueue[t]));
            for (var t = 0; t < game.audioQueue.length; t++) this.soundQueue.push(game.audioQueue[t]);
            this.loader = new game.AssetLoader(this.assetQueue), this.loader.onProgress = this.progress.bind(this), this.loader.onComplete = this.loadAudio.bind(this), this.loader.onError = this.error.bind(this), this.initStage()
        },
        repeatLogo: function() {
            if (this.logo.loopCount++, this.logo.loopCount % 3 !== 0) this.logo.gotoAndPlay(0);
            else {
                this.logo.gotoAndStop(0); {
                    new game.Tween(this.logo).to({
                        visible: !0
                    }, 600).onComplete(this.repeatLogo.bind(this, !0)).start()
                }
            }
        },
        initStage: function() {
            var e = new game.Animation("ghlogo01.png", "ghlogo02.png", "ghlogo03.png", "ghlogo04.png", "ghlogo05.png", "ghlogo06.png", "ghlogo07.png", "ghlogo08.png");
            e.anchor.set(.5, .5), e.position.set(game.system.width / 2, game.system.height / 2 - 120), e.animationSpeed = .3, e.alpha = 0, e.loop = !1, e.loopCount = 1, e.onComplete = this.repeatLogo.bind(this), e.play(), this.logo = e;
            new game.Tween(e).to({
                alpha: 1
            }, 500).start(), new game.Tween(e.position).to({
                y: "+80"
            }, 500).easing(game.Tween.Easing.Quadratic.Out).start();
            this.stage.addChild(e);
            for (var t = new game.Container, i = new game.Sprite("loader-end.png").addTo(t), s = 12, n = 0; s > n; n++) var a = new game.Sprite("loader-middle.png", 20 + 12 * n).addTo(t);
            var r = s * a.width + 2 * i.width,
                i = new game.Sprite("loader-end.png", 40 + 12 * s, 0, {
                    scale: {
                        x: -1,
                        y: 1
                    }
                }).addTo(t),
                o = 10,
                h = 17;
            t.chunks = [];
            for (var n = 0; o > n; n++) {
                var l = 0 === n || n === o - 1 ? "chunk-end.png" : "chunk-mid.png",
                    d = new game.Sprite(l, 10 + n * h, 10).addTo(t);
                0 === n && (d.position.x -= 2), n === o - 1 && (d.scale.set(-1, 1), d.position.x -= d.width), d.visible = !1, t.chunks.push(d)
            }
            if (t.scale.set(1, 1), t.position.set(game.system.width / 2 - r * t.scale.x / 2 + 12, game.system.height / 2), t.alpha = 0, t.addTo(this.stage), this.loaderBar = t, game.Debug.enabled) t.alpha = 1, this.startLoading();
            else {
                new game.Tween(t).to({
                    alpha: 1
                }, 200).delay(300).onComplete(this.startLoading.bind(this)).start()
            }
            this.loopId = game.setGameLoop(this.run.bind(this), game.system.canvas)
        },
        startLoading: function() {
            this.loader.load()
        },
        onPercentChange: function() {
            for (var e = 0; e < this.loaderBar.chunks.length; e++) this.percent >= 100 / this.loaderBar.chunks.length * e && (this.loaderBar.chunks[e].visible = !0)
        },
        setScene: function() {
            if (game.Debug.enabled) return this.showMainMenu();
            new game.Tween(this.logo).to({
                alpha: 0
            }, 500).start(), new game.Tween(this.loaderBar).to({
                alpha: 0
            }, 500).onComplete(this.showMainMenu.bind(this)).start()
        },
        showMainMenu: function() {
            this._showMainMenu = !0
        },
        update: function() {
            this._super(), this._showMainMenu && (game.system.timer.last = 0, game.Timer.time = Number.MIN_VALUE, this.loopId && game.clearGameLoop(this.loopId), game.system.setScene(this.scene))
        }
    })
});
game.build = 1424369236063;