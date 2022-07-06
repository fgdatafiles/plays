! function(t) {
    function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports } var n = {};
    e.m = t, e.c = n, e.i = function(t) { return t }, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 117) }([function(t, e, n) { var r = n(45)("wks"),
        o = n(30),
        i = n(2).Symbol,
        s = "function" == typeof i;
    (t.exports = function(t) { return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t)) }).store = r }, function(t, e, n) { "use strict";
    (function(e) {
        function r(t) { return "[object Array]" === S.call(t) }

        function o(t) { return void 0 !== e && e.isBuffer && e.isBuffer(t) }

        function i(t) { return "[object ArrayBuffer]" === S.call(t) }

        function s(t) { return "undefined" != typeof FormData && t instanceof FormData }

        function a(t) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer }

        function u(t) { return "string" == typeof t }

        function c(t) { return "number" == typeof t }

        function f(t) { return void 0 === t }

        function h(t) { return null !== t && "object" == typeof t }

        function l(t) { return "[object Date]" === S.call(t) }

        function p(t) { return "[object File]" === S.call(t) }

        function d(t) { return "[object Blob]" === S.call(t) }

        function g(t) { return "[object Function]" === S.call(t) }

        function v(t) { return h(t) && g(t.pipe) }

        function y(t) { return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams }

        function m(t) { return t.replace(/^\s*/, "").replace(/\s*$/, "") }

        function w() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) }

        function b(t, e) { if (null !== t && void 0 !== t)
                if ("object" == typeof t || r(t) || (t = [t]), r(t))
                    for (var n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
                else
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t) }

        function _() {
            function t(t, n) { "object" == typeof e[n] && "object" == typeof t ? e[n] = _(e[n], t) : e[n] = t } for (var e = {}, n = 0, r = arguments.length; n < r; n++) b(arguments[n], t); return e }

        function x(t, e, n) { return b(e, function(e, r) { t[r] = n && "function" == typeof e ? P(e, n) : e }), t } var P = n(37),
            S = Object.prototype.toString;
        t.exports = { isArray: r, isArrayBuffer: i, isBuffer: o, isFormData: s, isArrayBufferView: a, isString: u, isNumber: c, isObject: h, isUndefined: f, isDate: l, isFile: p, isBlob: d, isFunction: g, isStream: v, isURLSearchParams: y, isStandardBrowserEnv: w, forEach: b, merge: _, extend: x, trim: m } }).call(e, n(73).Buffer) }, function(t, e) { var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(t, e, n) { "use strict";

    function r() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) } var o = this && this.__assign || Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++) { e = arguments[n]; for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]) } return t };
    Object.defineProperty(e, "__esModule", { value: !0 }); var i = n(8),
        s = n(50),
        a = n(31);
    e.shimEnv = function(t) { return Object.assign(t, { _gzpDefProp: Object.defineProperty, _gzpDefProps: Object.defineProperties }) }; var u = function(t) { t = t.replace(/[\[\]]/g, "\\$&"); var e = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)", "i"),
            n = e.exec(window.location.href); return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : void 0 };
    e.Device = { isApp: function() { var t = window.gzp_android_bridge; return !!t && t.getAccessToken() == e.Params.accessToken }, block: function(t) { t && i.info.browser !== s.Browser.Opera && (e.Device.isApp() || (document.documentElement.style.height = "100%", document.documentElement.style.width = "100%", document.body.style.display = "absolute", document.body.style.height = "100%", document.body.style.width = "100%", document.body.innerHTML = '<iframe style="width:100%;height:100%;" src="' + t + '"></iframe>')) } }, e.Params = { mode: u("mode") || "default", pubId: "HyvZ83s6ADZ", subId: u("sub"), environment: function() { return "app" === u("src") ? "alpha-dog" : "wild-west" }(), accessToken: u("accessToken"), challengeContext: u("context"), testMode: u("testMode"), src: u("src"), shareCode: u("shareCode"), queryParams: window.location.href.split("?")[1] || "", platform: u("platform") }; var c = function() { try { var t = "__storage_test__"; return localStorage.setItem(t, t), localStorage.removeItem(t), !0 } catch (t) { return !1 } },
        f = function() {
            function t(n, r) { var o = this;
                this.setUserId = function(n) {!o.available || e.Params.accessToken || void 0 === typeof t || localStorage.getItem(o.userIdKey) || localStorage.setItem(o.userIdKey, n) }, this.getUserId = function() { return o.available && !e.Params.accessToken && void 0 !== typeof t && localStorage.getItem(o.userIdKey) ? localStorage.getItem(o.userIdKey) : "" }, this.gameCode = r, this.storageKey = "_gzp-" + n, this.paramsKey = "_gzp-params", this.userIdKey = "_gzp_userId", this.sessionKey = "_gzp_sessionKey", this.available = c() } return t.prototype.getSession = function() { return this.available && localStorage.getItem(this.storageKey) ? JSON.parse(localStorage.getItem(this.storageKey))[this.gameCode] || null : null }, t.prototype.saveSession = function(t) { this.available && localStorage.setItem(this.storageKey, JSON.stringify((e = {}, e[this.gameCode] = t, e))); var e }, t.prototype.getParams = function() { if (this.available && localStorage.getItem(this.storageKey)) { var t = JSON.parse(localStorage.getItem(this.paramsKey)); return t && Object.assign(e.Params, t), e.Params } return null }, t.prototype.saveParams = function() { this.available && localStorage.setItem(this.paramsKey, JSON.stringify(e.Params)) }, t }();
    e.Storage = f, e.randomId = function() { for (var t = [], e = 0; e < 8; e++) t.push(r()), 1 != e && 2 != e && 3 != e && 4 != e || t.push("-"); return t.join("") }, e.broadcast = function(t, n) { void 0 === n && (n = "*"); var r = "B12b-eh0irl" === e.Params.pubId ? JSON.stringify(t) : t,
            o = function() { window.postMessage(r, n), window.parent.postMessage(r, n), window.top.postMessage(r, n) }; "IzOy-bf4Hf" === e.Params.pubId ? setTimeout(o, 1e3) : "B12b-eh0irl" === e.Params.pubId ? setTimeout(o, 0) : o() }, e.getBroadcastData = function(t, e, n) { var r = null; return r = n && n.length > 1 ? n.filter(function(n) { return n.leaderboardId.replace(e + "_", "") === t.leaderboard })[0] : n && 1 == n.length ? n[0] : { name: null, description: null, leaderboardId: null }, { leaderboard: { name: r.name, description: r.description, id: r.leaderboardId }, metadata: t.metadata, score: t.score, state: t.state, gameCode: e } }, e.FullScreen = { shouldEnableFS: function() { return "kikBot" !== e.Params.src && -1 === window.navigator.userAgent.indexOf("UCBrowser") && null === document.querySelector(".gzp-nofs") }, getElem: function() { return document.querySelector(".gzpgame") || document.getElementById("c2canvas") || document.getElementsByTagName("canvas")[0] || document.body || document.documentElement }, enableFS: function() { if (e.FullScreen.shouldEnableFS()) { var t = "ontouchend" in window ? "touchend" : "click",
                    n = e.FullScreen.getElem(),
                    r = function(e) { var o = n.requestFullScreen || n.webkitRequestFullScreen || n.mozRequestFullScreen;
                        o && o.call(n), n.removeEventListener(t, r) };
                n.addEventListener(t, r) } } }, e.screenShot = function() { var t = document.querySelector("canvas"),
            e = t.toDataURL("png"),
            n = document.createElement("div");
        n.innerText = e, n.id = "ids", n.style.display = "none", document.body.appendChild(n) }, e.safelyCallBridge = function(t) { try { return t(), !0 } catch (t) { return !1 } }; var h = function(t) { return Object.keys(t).map(function(e) { return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]) }).join("&") };
    e.Collector = { collect: function(t, n) { var r = e.Params.pubId || "not_set",
                i = document.createElement("img");
            i.style.display = "none", i.src = a.BASE_URL + "?" + h(o({}, n || {}, { id: r, event: t })), document.body.appendChild(i) } } }, function(t, e, n) { var r = n(16);
    t.exports = function(t) { if (!r(t)) throw TypeError(t + " is not an object!"); return t } }, function(t, e) { var n = t.exports = { version: "2.4.0" }; "number" == typeof __e && (__e = n) }, function(t, e, n) { var r = n(17),
        o = n(44);
    t.exports = n(9) ? function(t, e, n) { return r.f(t, e, o(1, n)) } : function(t, e, n) { return t[e] = n, t } }, function(t, e, n) {! function(n, r) { t.exports = e = r() }(0, function() { var t = t || function(t, e) { var n = Object.create || function() {
                    function t() {} return function(e) { var n; return t.prototype = e, n = new t, t.prototype = null, n } }(),
                r = {},
                o = r.lib = {},
                i = o.Base = function() { return { extend: function(t) { var e = n(this); return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() { e.$super.init.apply(this, arguments) }), e.init.prototype = e, e.$super = this, e }, create: function() { var t = this.extend(); return t.init.apply(t, arguments), t }, init: function() {}, mixIn: function(t) { for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString) }, clone: function() { return this.init.prototype.extend(this) } } }(),
                s = o.WordArray = i.extend({ init: function(t, e) { t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length }, toString: function(t) { return (t || u).stringify(this) }, concat: function(t) { var e = this.words,
                            n = t.words,
                            r = this.sigBytes,
                            o = t.sigBytes; if (this.clamp(), r % 4)
                            for (var i = 0; i < o; i++) { var s = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                e[r + i >>> 2] |= s << 24 - (r + i) % 4 * 8 } else
                                for (var i = 0; i < o; i += 4) e[r + i >>> 2] = n[i >>> 2]; return this.sigBytes += o, this }, clamp: function() { var e = this.words,
                            n = this.sigBytes;
                        e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4) }, clone: function() { var t = i.clone.call(this); return t.words = this.words.slice(0), t }, random: function(e) { for (var n, r = [], o = 0; o < e; o += 4) { var i = function(e) { var e = e,
                                    n = 987654321,
                                    r = 4294967295; return function() { n = 36969 * (65535 & n) + (n >> 16) & r, e = 18e3 * (65535 & e) + (e >> 16) & r; var o = (n << 16) + e & r; return o /= 4294967296, (o += .5) * (t.random() > .5 ? 1 : -1) } }(4294967296 * (n || t.random()));
                            n = 987654071 * i(), r.push(4294967296 * i() | 0) } return new s.init(r, e) } }),
                a = r.enc = {},
                u = a.Hex = { stringify: function(t) { for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) { var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16)) } return r.join("") }, parse: function(t) { for (var e = t.length, n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4; return new s.init(n, e / 2) } },
                c = a.Latin1 = { stringify: function(t) { for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) { var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            r.push(String.fromCharCode(i)) } return r.join("") }, parse: function(t) { for (var e = t.length, n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8; return new s.init(n, e) } },
                f = a.Utf8 = { stringify: function(t) { try { return decodeURIComponent(escape(c.stringify(t))) } catch (t) { throw new Error("Malformed UTF-8 data") } }, parse: function(t) { return c.parse(unescape(encodeURIComponent(t))) } },
                h = o.BufferedBlockAlgorithm = i.extend({ reset: function() { this._data = new s.init, this._nDataBytes = 0 }, _append: function(t) { "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes }, _process: function(e) { var n = this._data,
                            r = n.words,
                            o = n.sigBytes,
                            i = this.blockSize,
                            a = 4 * i,
                            u = o / a;
                        u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0); var c = u * i,
                            f = t.min(4 * c, o); if (c) { for (var h = 0; h < c; h += i) this._doProcessBlock(r, h); var l = r.splice(0, c);
                            n.sigBytes -= f } return new s.init(l, f) }, clone: function() { var t = i.clone.call(this); return t._data = this._data.clone(), t }, _minBufferSize: 0 }),
                l = (o.Hasher = h.extend({ cfg: i.extend(), init: function(t) { this.cfg = this.cfg.extend(t), this.reset() }, reset: function() { h.reset.call(this), this._doReset() }, update: function(t) { return this._append(t), this._process(), this }, finalize: function(t) { return t && this._append(t), this._doFinalize() }, blockSize: 16, _createHelper: function(t) { return function(e, n) { return new t.init(n).finalize(e) } }, _createHmacHelper: function(t) { return function(e, n) { return new l.HMAC.init(t, n).finalize(e) } } }), r.algo = {}); return r }(Math); return t }) }, function(t, e, n) { "use strict"; var r = this && this.__assign || Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++) { e = arguments[n]; for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]) } return t };
    Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(3),
        i = n(18),
        s = n(51),
        a = n(116),
        u = n(118),
        c = n(50),
        f = n(119),
        h = n(3),
        l = n(18),
        p = n(31),
        d = n(32),
        g = n(13),
        v = { loaded: !1, notified: { loaded: !1 } };
    e.isPubFailed = !1; var y = !1,
        m = "";
    e.info = c.default(), e.visibilityFlag = !0; var w, b = function(t, e, n, r) { if (!v.notified.loaded) { var i = 0; "loaded" != n.state && (i = 3e3); var s = window.gzp_android_bridge; if (s && s.onGameLoaded) { o.safelyCallBridge(function() { return s.onGameLoaded() }) || o.safelyCallBridge(function() { return s.onGameLoaded(e) }) } _(); var a = Object.assign({}, n, { state: "loaded" });
                v.loaded = !0, t && (s && s.onPubRequest && s.onPubRequest(e, 200), v.notified.loaded = !0, setTimeout(function() { o.broadcast(o.getBroadcastData(a, e, r)) }, i), o.Collector.collect("game-loaded", {}), g.sendPreLoaded(a, t)) } },
        _ = function() { window.gtag && window.gtag("event", "not_set", { event_category: "game-event", event_label: "loaded" }) },
        x = function(t, e) { "over" !== t.state && "playing" !== t.state && "levelup" !== t.state || o.broadcast(o.getBroadcastData(t, m, e)); var n = window.gzp_android_bridge; "over" === t.state && n && n.onGameOver && n.onGameOver(m) },
        P = function(t, e) { o.broadcast({ gameCode: t, message: e, type: "auth", status: !1 }) },
        S = function() {
            function t() { this.subscribers = [], this.soundEnabled = !1 } return t.prototype.checkAdStatus = function() { try { if (Object.keys(window.top).indexOf("gzpMsg") > -1) { var t = window.top.gzpMsg;
                        t && "ad" === t.type && setTimeout(function() { console.log("Ad visible: " + t.visible + " " + (t.visible ? "muting" : "unmuting") + " sound") }, 50) } } catch (t) { console.log("Caught", t) } }, t.prototype.Initialize = function(n) { var a = this;
                this.warnDeprecation(n.debug), this.debug = n.debug || !1, this.data = { state: "start" }, m = n.gameCode; var c = window,
                    _ = c._gzpDefProp;
                (0, c._gzpDefProps)(this, { _play: t.getPrivateProp(n.play), _pause: t.getPrivateProp(n.pause), _mute: t.getPrivateProp(n.mute), _unmute: t.getPrivateProp(n.unmute), _start: t.getPrivateProp(n.start), mode: t.getPrivateProp(o.Params.mode), apiKey: t.getPrivateProp(n.apiKey), gameCode: t.getPrivateProp(n.gameCode), environment: t.getPrivateProp(o.Params.environment) }), this.checkAdStatus(); var x = document.title.replace("Gamezop - ", "");
                this.shareMessage = "Try " + x + " on Gamezop! Tap and start playing without installing any apps: https://play.forestrygames.com/" + n.gameCode + "?id=" + (o.Params.pubId || "share") + "&medium=" + this.environment; var S = function(e) { s.checkResponse(e, "auth", function() { _(a, "config", t.getPrivateProp(e.data.config)), _(a, "context", t.getPrivateProp(e.data.context)), _(a, "shareMessage", t.getPrivateProp(e.data.message)), _(a, "fbMessage", t.getPrivateProp(e.data.fbMessage)), _(a, "twMessage", t.getPrivateProp(e.data.twMessage)), _(a, "scripts", t.getPrivateProp(e.data.scripts || [])), _(a, "expiry", t.getPrivateProp(Date.now() + 72e5)), _(a, "publisherName", t.getPrivateProp(e.data.publisherName)), _(a, "isVisible", t.getPrivateProp(e.data.isVisible)), _(a, "leaderboards", t.getPrivateProp(e.data.leaderboards)), _(a, "blockUrl", t.getPrivateProp(e.data.blockUrl)) }, function() { return a.error(u.sdkFail(JSON.stringify(e))) }) },
                    E = function() { a.debug && (a.log("Gamezop SDK has initialized"), console.group(), a.log(JSON.stringify(t.info())), a.log("Environment: " + a.environment), console.groupEnd()) };
                this.storage = new o.Storage(n.apiKey, n.gameCode); var A = {}; return o.Params.pubId || this.storage.getParams(), this.storage.saveParams(),
                    function() { var t = { context: "", apiKey: n.apiKey, gameCode: n.gameCode, accessToken: o.Params.accessToken, mode: a.mode, challengeContext: o.Params.challengeContext, environment: a.environment, source: o.Device.isApp() ? "https://play.forestrygames.com" : location.host, src: o.Params.src, pubId: o.Params.pubId, subId: o.Params.subId, browser: e.info.browser, device: e.info.device, os: e.info.os, referrer: document.referrer, gzpUserId: a.storage.getUserId(), queryParams: o.Params.queryParams, sessionId: l.sessionId, time: new Date, isAdBlocked: y, isAnalyticsBlocked: !window.gtag, version: "1.16.38turner" }; return A = t, i.default.pubAuth(d.encrypt(t)).then(function(t) { return o.Collector.collect("game-pub-response-received", {}), a.storage.setUserId(t.data.context), a.data = a.getMetaData(JSON.parse(t.data.metaData).metadata), t }).then(S) }().then(function() { return a.storage.saveSession({ data: a.data, scripts: a.scripts, expiry: a.expiry, config: a.config, publisherName: a.publisherName, context: a.context, fbMessage: a.fbMessage, twMessage: a.twMessage, shareMessage: a.shareMessage }) }).then(function() { w = "false" !== a.isVisible && void 0 }).then(function() { return f.default.attach(a.scripts) }).then(E).then(function() {!v.notified.loaded && v.loaded && b(a.context, a.gameCode, Object.assign({}, a.data, { state: "loaded" }), a.leaderboards) }).then(function() { document.addEventListener("visibilitychange", function() { document.hidden ? (a.logIfDebug("[onHostPause]"), a.onHostPause()) : (a.logIfDebug("[onHostResume]"), a.onHostResume()) }) }).then(function() { window.gtag && (window.gtag("event", "not_set", { event_category: "publisher", event_label: a.publisherName }), window.gtag("event", "not_set", { send_to: "UA-73915025-7", event_category: "games-publisher", event_label: a.publisherName }), window.gtag("event", "not-set", { event_category: "src", event_label: o.Params.src })), i.default.session(a.context, w), setInterval(function() { return i.default.session(a.context, w) }, 5e3) }).then(function() { return a }).catch(function(n) { o.Collector.collect("game-pub-response-received", {}); var s = window.gzp_android_bridge; if (s && s.onPubRequest) { var c = n.response ? n.response.status : 0;
                            s.onPubRequest(m, c) } if (!n.response) { var f = h.randomId();
                            A.context = f, A.sessionId = l.sessionId, A.pubId = o.Params.pubId; var y = d.encrypt(A);
                            _(a, "context", t.getPrivateProp(f)), a.storage.setUserId(f), a.data = a.getMetaData([]), b(a.context, a.gameCode, {}, a.leaderboards), v.notified.loaded = !0, e.isPubFailed = !0, g.updateAndroid(1, y), i.default.session(a.context, w), setInterval(function() { return i.default.session(a.context, w) }, 5e3) } return o.Device.isApp() ? a.error(u.sdkFail(n)) : (o.Collector.collect("game-loaded", {}), o.broadcast(r({ gameCode: a.gameCode }, a.data, { state: "loaded" }), "*"), P(a.gameCode, p.FAIL_MESSAGE), !n.response || 401 !== n.response.status && 400 !== n.response.status ? n.response && 502 !== n.response.status || o.Device.block("") : o.Device.block(n.response.data.blockUrl)), a }) }, t.info = function() { return { release: "1.16.38turner", apiVersion: 1 } }, t.getPrivateProp = function(t) { return { value: t, writable: !1, enumerable: !1, configurable: !1 } }, t.prototype.getMetaData = function(t) { try { return t.length > 0 ? { metadata: t[t.length - 1].metadata || t[t.length - 1].Metadata, score: t[t.length - 1].score || t[t.length - 1].Score, leaderboard: t[t.length - 1].leaderboard || t[t.length - 1].Leaderboard, state: "start" } : { metadata: {}, score: 0, leaderboard: "default", state: "start" } } catch (t) { return { metadata: {}, score: 0, leaderboard: "default", state: "start" } } }, t.prototype.log = function(t) { console.log("🎮 " + t) }, t.prototype.error = function(t) { console.error("🕹 " + t) }, t.prototype.logIfDebug = function(t) { this.debug && this.log(t) }, t.prototype.getScreenshot = function(t) { requestAnimationFrame(o.screenShot), setTimeout(function() { var e = { type: "screenshot", gameCode: m, url: document.getElementById("ids").innerHTML };
                    window.postMessage(e, "*"), window.parent.postMessage(e, "*"), window.top.postMessage(e, "*"), window.parent.cb ? window.parent.cb(e) : window.top.cb ? window.top.cb(e) : t && t(e) }, 2e3) }, t.prototype.play = function() { this.data && (this.data.state = "playing"), this.ex("_play") }, t.prototype.pause = function() { this.data && (this.data.state = "paused"), this.ex("_pause") }, t.prototype.mute = function() { this.soundEnabled = !1, this.ex("_mute") }, t.prototype.unmute = function() { this.soundEnabled = !0, this.ex("_unmute") }, t.prototype.start = function() { this.ex("_start") }, t.prototype.ex = function(t) { this[t] && this[t]() }, t.prototype.subscribe = function(t) { this.subscribers = this.subscribers.concat(t) }, t.prototype.notifySubscribers = function(t) { this.subscribers.forEach(function(e) { return e(t) }) }, t.prototype.setMetadata = function(t) { JSON.stringify(this.data.metadata) !== JSON.stringify(t) && (this.data.metadata = Object.assign({}, t), this.data.time = new Date, this.sendUpdate()) }, t.prototype.sendUpdate = function() { var t = this,
                    e = t.config,
                    n = t.context,
                    r = t.shareMessage,
                    o = t.expiry,
                    i = t.publisherName,
                    s = t.scripts;
                this.notifySubscribers(Object.assign({ config: e, context: n, shareMessage: r, sessionId: l.sessionId, expiry: o, publisherName: i, scripts: s }, this)) }, t.prototype.setState = function(t, e) { if (!t) return this.error(new Error("Parameter data is missing")); if (t.state && !a.isValidGameState(t.state)) return this.error(new Error(t.state + " is not a legal gameState")); var n = Object.assign({}, this.data, t, { time: this.data.time }),
                    o = JSON.stringify(this.data),
                    i = JSON.stringify(n);
                b(this.context, this.gameCode, n, this.leaderboards), x(n, this.leaderboards), o !== i && (this.data = r({}, n, { time: new Date, metadata: Object.assign({}, this.data.metadata, t.metadata) }), this.sendUpdate(), e && e()) }, t.prototype.getPlatform = function() { var t = []; switch (o.Params.platform) {
                    case "dth":
                        t.push("dth"); break;
                    case "fb-messenger":
                        t.push("facebook") } return void 0 !== window.orientation ? t.push("mobile") : t.push("desktop"), t }, t.prototype.isSoundEnabled = function() { return this.soundEnabled }, t.prototype.onHostPause = function() { if (this.context) try { this.pause(), this.mute() } catch (t) { console.log("onHostPause:", t) } }, t.prototype.onHostResume = function() { if (this.context) try { this.play(), this.unmute() } catch (t) { console.log("onHostResume:", t) } }, t.prototype.showAd = function() {}, t.prototype.warnDeprecation = function(t) { console.warn("FG.Initialize has been deprecated and will be removed in the next major version. Use gamezop.Init instead") }, t }();
    e.default = S, e.checkAdBlocker = function() { var t = document.createElement("div");
        t.innerHTML = "&nbsp;", t.className = "adsbox", document.body.appendChild(t), 0 === t.offsetHeight && (y = !0), t.remove() } }, function(t, e, n) { t.exports = !n(25)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(t, e) { var n = {}.hasOwnProperty;
    t.exports = function(t, e) { return n.call(t, e) } }, function(t, e) { t.exports = {} }, function(t, e, n) { var r = n(2),
        o = n(6),
        i = n(10),
        s = n(30)("src"),
        a = Function.toString,
        u = ("" + a).split("toString");
    n(5).inspectSource = function(t) { return a.call(t) }, (t.exports = function(t, e, n, a) { var c = "function" == typeof n;
        c && (i(n, "name") || o(n, "name", e)), t[e] !== n && (c && (i(n, s) || o(n, s, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n))) })(Function.prototype, "toString", function() { return "function" == typeof this && this[s] || a.call(this) }) }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(120),
        o = null,
        i = null,
        s = function(t) { t && t.context && (o || (o = new r.default(t.context)), i || (i = setInterval(function() { return o.process() }, 5e3)), o.enqueue(t.data)) };
    e.sendPreLoaded = function(t, e) { t.time = new Date, !o && e && (o = new r.default(e)), o.enqueue(t) }; var a = function(t) { return t.storage.saveSession({ context: t.context, data: t.data, shareMessage: t.shareMessage, publisherName: t.publisherName, fbMessage: t.fbMessage, twMessage: t.twMessage, config: t.config, scripts: t.scripts, expiry: t.expiry }) };
    e.updateAndroid = function(t, e) { var n = u(t),
            r = window.gzp_android_bridge;
        r && r.saveSession(JSON.stringify({ data: e }), n) }; var u = function(t) { switch (t) {
                case 1:
                    return 10;
                case 2:
                    return 20;
                case 3:
                    return 30 } },
        c = [s, a];
    e.default = c }, function(t, e) { var n = {}.toString;
    t.exports = function(t) { return n.call(t).slice(8, -1) } }, function(t, e, n) { var r = n(20);
    t.exports = function(t, e, n) { if (r(t), void 0 === e) return t; switch (n) {
            case 1:
                return function(n) { return t.call(e, n) };
            case 2:
                return function(n, r) { return t.call(e, n, r) };
            case 3:
                return function(n, r, o) { return t.call(e, n, r, o) } } return function() { return t.apply(e, arguments) } } }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e, n) { var r = n(4),
        o = n(78),
        i = n(98),
        s = Object.defineProperty;
    e.f = n(9) ? Object.defineProperty : function(t, e, n) { if (r(t), e = i(e, !0), r(n), o) try { return s(t, e, n) } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (t[e] = n.value), t } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(8),
        o = n(3),
        i = n(51),
        s = n(32),
        a = n(13),
        u = n(8);
    e.sessionId = o.randomId(); var c = Date.now(),
        f = !0;
    e.default = { pubAuth: function(t) { return Promise.resolve(i.default({ url: "/pub", method: "post", data: { data: t } })) }, session: function(t, n) { var h = Date.now(); if (h - c < 1e4) return void(f = !1); if (h - c > 3e5) return e.sessionId = o.randomId(), void(f = !1);
            f = !0; var l = document.visibilityState || document.webkitVisibilityState; if ((void 0 !== n ? document.hidden ? n && !document.hidden : n : "visible" === l || !document.hidden && (r.visibilityFlag || !!document.hasFocus())) && f)
                if (e.sessionId || t) { var p = s.encrypt({ sessionId: e.sessionId, contextId: t, time: new Date });
                    u.isPubFailed ? a.updateAndroid(3, p) : i.default({ url: "/session", method: "post", data: { data: p } }) } else console.log("ERROR WHILE SENDING SESSION CONTEXT: ", t, " SESSIONID: ", e.sessionId) }, state: function(t, n) { if (c = Date.now(), e.sessionId || t) return Promise.resolve(i.default({ url: "/games/state", method: "post", data: { data: s.encrypt({ context: t, instances: n, sessionId: e.sessionId, shareCode: o.Params.shareCode, accessToken: o.Params.accessToken }) } }));
            console.log("ERROR WHILE SENDING STATE CONTEXT: ", t, " SESSIONID: ", e.sessionId) } } }, function(t, e, n) { "use strict";
    (function(e) {
        function r(t, e) {!o.isUndefined(t) && o.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e) } var o = n(1),
            i = n(69),
            s = { "Content-Type": "application/x-www-form-urlencoded" },
            a = { adapter: function() { var t; return "undefined" != typeof XMLHttpRequest ? t = n(33) : void 0 !== e && (t = n(33)), t }(), transformRequest: [function(t, e) { return i(e, "Content-Type"), o.isFormData(t) || o.isArrayBuffer(t) || o.isBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t) ? t : o.isArrayBufferView(t) ? t.buffer : o.isURLSearchParams(t) ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : o.isObject(t) ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t }], transformResponse: [function(t) { if ("string" == typeof t) try { t = JSON.parse(t) } catch (t) {}
                    return t }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function(t) { return t >= 200 && t < 300 } };
        a.headers = { common: { Accept: "application/json, text/plain, */*" } }, o.forEach(["delete", "get", "head"], function(t) { a.headers[t] = {} }), o.forEach(["post", "put", "patch"], function(t) { a.headers[t] = o.merge(s) }), t.exports = a }).call(e, n(115)) }, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, e, n) { var r = n(14),
        o = n(0)("toStringTag"),
        i = "Arguments" == r(function() { return arguments }()),
        s = function(t, e) { try { return t[e] } catch (t) {} };
    t.exports = function(t) { var e, n, a; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a } }, function(t, e) { t.exports = function(t) { if (void 0 == t) throw TypeError("Can't call method on  " + t); return t } }, function(t, e, n) { var r = n(16),
        o = n(2).document,
        i = r(o) && r(o.createElement);
    t.exports = function(t) { return i ? o.createElement(t) : {} } }, function(t, e, n) { var r = n(2),
        o = n(5),
        i = n(6),
        s = n(12),
        a = n(15),
        u = function(t, e, n) { var c, f, h, l, p = t & u.F,
                d = t & u.G,
                g = t & u.S,
                v = t & u.P,
                y = t & u.B,
                m = d ? r : g ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                w = d ? o : o[e] || (o[e] = {}),
                b = w.prototype || (w.prototype = {});
            d && (n = e); for (c in n) f = !p && m && void 0 !== m[c], h = (f ? m : n)[c], l = y && f ? a(h, r) : v && "function" == typeof h ? a(Function.call, h) : h, m && s(m, c, h, t & u.U), w[c] != h && i(w, c, l), v && b[c] != h && (b[c] = h) };
    r.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e, n) { var r = n(17).f,
        o = n(10),
        i = n(0)("toStringTag");
    t.exports = function(t, e, n) { t && !o(t = n ? t : t.prototype, i) && r(t, i, { configurable: !0, value: e }) } }, function(t, e, n) { var r = n(45)("keys"),
        o = n(30);
    t.exports = function(t) { return r[t] || (r[t] = o(t)) } }, function(t, e) { var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t) } }, function(t, e, n) { var r = n(40),
        o = n(22);
    t.exports = function(t) { return r(o(t)) } }, function(t, e) { var n = 0,
        r = Math.random();
    t.exports = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36)) } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BLOCK_URL = "https://play.forestrygames.com", e.JWT_SECRET = "", e.BASE_URL = "https://play.forestrygames.com", e.FAIL_MESSAGE = "Permission denied." }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(31),
        o = n(3),
        i = n(114);
    i.init("HS512", r.JWT_SECRET), e.encrypt = function(t) { return o.Params.testMode ? t : i.encode(t) } }, function(t, e, n) { "use strict"; var r = n(1),
        o = n(61),
        i = n(64),
        s = n(70),
        a = n(68),
        u = n(36),
        c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(63);
    t.exports = function(t) { return new Promise(function(e, f) { var h = t.data,
                l = t.headers;
            r.isFormData(h) && delete l["Content-Type"]; var p = new XMLHttpRequest,
                d = "onreadystatechange",
                g = !1; if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || a(t.url) || (p = new window.XDomainRequest, d = "onload", g = !0, p.onprogress = function() {}, p.ontimeout = function() {}), t.auth) { var v = t.auth.username || "",
                    y = t.auth.password || "";
                l.Authorization = "Basic " + c(v + ":" + y) } if (p.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0), p.timeout = t.timeout, p[d] = function() { if (p && (4 === p.readyState || g) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) { var n = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
                            r = t.responseType && "text" !== t.responseType ? p.response : p.responseText,
                            i = { data: r, status: 1223 === p.status ? 204 : p.status, statusText: 1223 === p.status ? "No Content" : p.statusText, headers: n, config: t, request: p };
                        o(e, f, i), p = null } }, p.onerror = function() { f(u("Network Error", t)), p = null }, p.ontimeout = function() { f(u("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED")), p = null }, r.isStandardBrowserEnv()) { var m = n(66),
                    w = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? m.read(t.xsrfCookieName) : void 0;
                w && (l[t.xsrfHeaderName] = w) } if ("setRequestHeader" in p && r.forEach(l, function(t, e) { void 0 === h && "content-type" === e.toLowerCase() ? delete l[e] : p.setRequestHeader(e, t) }), t.withCredentials && (p.withCredentials = !0), t.responseType) try { p.responseType = t.responseType } catch (e) { if ("json" !== t.responseType) throw e }
            "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(t) { p && (p.abort(), f(t), p = null) }), void 0 === h && (h = null), p.send(h) }) } }, function(t, e, n) { "use strict";

    function r(t) { this.message = t } r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, t.exports = r }, function(t, e, n) { "use strict";
    t.exports = function(t) { return !(!t || !t.__CANCEL__) } }, function(t, e, n) { "use strict"; var r = n(60);
    t.exports = function(t, e, n, o) { var i = new Error(t); return r(i, e, n, o) } }, function(t, e, n) { "use strict";
    t.exports = function(t, e) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return t.apply(e, n) } } }, function(t, e) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(t, e, n) { t.exports = n(2).document && document.documentElement }, function(t, e, n) { var r = n(14);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == r(t) ? t.split("") : Object(t) } }, function(t, e, n) { "use strict"; var r = n(42),
        o = n(24),
        i = n(12),
        s = n(6),
        a = n(10),
        u = n(11),
        c = n(82),
        f = n(26),
        h = n(90),
        l = n(0)("iterator"),
        p = !([].keys && "next" in [].keys()),
        d = function() { return this };
    t.exports = function(t, e, n, g, v, y, m) { c(n, e, g); var w, b, _, x = function(t) { if (!p && t in A) return A[t]; switch (t) {
                    case "keys":
                    case "values":
                        return function() { return new n(this, t) } } return function() { return new n(this, t) } },
            P = e + " Iterator",
            S = "values" == v,
            E = !1,
            A = t.prototype,
            O = A[l] || A["@@iterator"] || v && A[v],
            B = O || x(v),
            T = v ? S ? x("entries") : B : void 0,
            I = "Array" == e ? A.entries || O : O; if (I && (_ = h(I.call(new t))) !== Object.prototype && (f(_, P, !0), r || a(_, l) || s(_, l, d)), S && O && "values" !== O.name && (E = !0, B = function() { return O.call(this) }), r && !m || !p && !E && A[l] || s(A, l, B), u[e] = B, u[P] = d, v)
            if (w = { values: S ? B : x("values"), keys: y ? B : x("keys"), entries: T }, m)
                for (b in w) b in A || i(A, b, w[b]);
            else o(o.P + o.F * (p || E), e, w); return w } }, function(t, e) { t.exports = !1 }, function(t, e, n) { var r = n(91),
        o = n(38);
    t.exports = Object.keys || function(t) { return r(t, o) } }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, n) { var r = n(2),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function(t) { return o[t] || (o[t] = {}) } }, function(t, e, n) { var r, o, i, s = n(15),
        a = n(79),
        u = n(39),
        c = n(23),
        f = n(2),
        h = f.process,
        l = f.setImmediate,
        p = f.clearImmediate,
        d = f.MessageChannel,
        g = 0,
        v = {},
        y = function() { var t = +this; if (v.hasOwnProperty(t)) { var e = v[t];
                delete v[t], e() } },
        m = function(t) { y.call(t.data) };
    l && p || (l = function(t) { for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]); return v[++g] = function() { a("function" == typeof t ? t : Function(t), e) }, r(g), g }, p = function(t) { delete v[t] }, "process" == n(14)(h) ? r = function(t) { h.nextTick(s(y, t, 1)) } : d ? (o = new d, i = o.port2, o.port1.onmessage = m, r = s(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) { f.postMessage(t + "", "*") }, f.addEventListener("message", m, !1)) : r = "onreadystatechange" in c("script") ? function(t) { u.appendChild(c("script")).onreadystatechange = function() { u.removeChild(this), y.call(t) } } : function(t) { setTimeout(s(y, t, 1), 0) }), t.exports = { set: l, clear: p } }, function(t, e, n) { var r = n(28),
        o = Math.min;
    t.exports = function(t) { return t > 0 ? o(r(t), 9007199254740991) : 0 } }, function(t, e, n) { var r = n(22);
    t.exports = function(t) { return Object(r(t)) } }, function(t, e, n) {! function(r, o) { t.exports = e = o(n(7)) }(0, function(t) { return function(e) { var n = t,
                r = n.lib,
                o = r.Base,
                i = r.WordArray,
                s = n.x64 = {};
            s.Word = o.extend({ init: function(t, e) { this.high = t, this.low = e } }), s.WordArray = o.extend({ init: function(t, e) { t = this.words = t || [], this.sigBytes = void 0 != e ? e : 8 * t.length }, toX32: function() { for (var t = this.words, e = t.length, n = [], r = 0; r < e; r++) { var o = t[r];
                        n.push(o.high), n.push(o.low) } return i.create(n, this.sigBytes) }, clone: function() { for (var t = o.clone.call(this), e = t.words = this.words.slice(0), n = e.length, r = 0; r < n; r++) e[r] = e[r].clone(); return t } }) }(), t }) }, function(t, e, n) { "use strict";

    function r(t, n) { var r = s,
            o = t.split(")")[0].split("(")[1].split(";"); switch (n) {
            case e.Browser.Chrome:
                r = 2 === o.length ? o[1] : o[2]; break;
            case e.Browser.Safari:
            case e.Browser.IE:
            case e.Browser.Firefox:
            case e.Browser.Edge:
                r = o[0]; break;
            case e.Browser.UCBrowser:
                r = o[4]; break;
            case e.Browser.Xiaomi:
                r = 4 === o.length ? o[3] : s; break;
            default:
                r = s } return r }

    function o(t) { var e = s,
            n = t.toLowerCase(); return -1 !== n.indexOf("win") ? e = "Windows" : -1 !== n.indexOf("mac") ? e = "MacOS" : -1 !== n.indexOf("x11") ? e = "UNIX" : -1 !== n.indexOf("android") ? e = "Android" : -1 !== n.indexOf("linux") ? e = "Linux" : -1 !== n.indexOf("webos") ? e = "webOS" : -1 !== n.indexOf("iphone") ? e = "iOS" : -1 !== n.indexOf("ipad") ? e = "iOS" : -1 !== n.indexOf("ipod") ? e = "iOS" : -1 !== n.indexOf("blackberry") ? e = "BlackBerry" : -1 !== n.indexOf("windows phone") && (e = "Windows Phone"), e }

    function i(t) { var n = s,
            r = t.toLowerCase(); return -1 !== (-1 !== r.indexOf("opera") || r.indexOf("opr")) ? n = e.Browser.Opera : -1 !== r.indexOf("xiaomi") ? n = e.Browser.Xiaomi : -1 !== r.indexOf("ucbrowser") ? n = e.Browser.UCBrowser : -1 !== r.indexOf("chrome") ? n = e.Browser.Chrome : -1 !== r.indexOf("safari") || r.indexOf("iphone") || r.indexOf("ipad") ? n = e.Browser.Safari : -1 !== r.indexOf("firefox") ? n = e.Browser.Firefox : -1 !== r.indexOf("msie") ? n = e.Browser.IE : window.styleMedia && (n = e.Browser.Edge), n } Object.defineProperty(e, "__esModule", { value: !0 }); var s = "unknown";
    e.Browser = { Chrome: "Chrome", Firefox: "Firefox", Safari: "Safari", IE: "IE", Opera: "Opera", UCBrowser: "UCBrowser", Edge: "Edge", Xiaomi: "Xiaomi" }, e.default = function() { var t = window.navigator.userAgent,
            e = o(t),
            n = i(t); return { os: e, browser: n, device: r(t, n) } } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(54),
        o = n(3),
        i = "http:" === location.protocol && ["Hyp-bsXHlKe", "ByQrnh8Xg"].indexOf(o.Params.pubId) > -1,
        s = o.Params.testMode ? "madara" : "play",
        a = (i ? "http" : "https") + "://" + s + ".forestrygames.com",
        u = r.create({ baseURL: a });
    e.default = function(t) { return u(t).then(function(t) { return t.data }) }, e.checkResponse = function(t, e, n, r) { t.data && t.data[e] ? n() : r && r() } }, function(t, e, n) { n(101), t.exports = n(5).Object.assign }, function(t, e, n) { n(102), n(104), n(105), n(103), t.exports = n(5).Promise }, function(t, e, n) { t.exports = n(55) }, function(t, e, n) { "use strict";

    function r(t) { var e = new s(t),
            n = i(s.prototype.request, e); return o.extend(n, s.prototype, e), o.extend(n, e), n } var o = n(1),
        i = n(37),
        s = n(57),
        a = n(19),
        u = r(a);
    u.Axios = s, u.create = function(t) { return r(o.merge(a, t)) }, u.Cancel = n(34), u.CancelToken = n(56), u.isCancel = n(35), u.all = function(t) { return Promise.all(t) }, u.spread = n(71), t.exports = u, t.exports.default = u }, function(t, e, n) { "use strict";

    function r(t) { if ("function" != typeof t) throw new TypeError("executor must be a function."); var e;
        this.promise = new Promise(function(t) { e = t }); var n = this;
        t(function(t) { n.reason || (n.reason = new o(t), e(n.reason)) }) } var o = n(34);
    r.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, r.source = function() { var t; return { token: new r(function(e) { t = e }), cancel: t } }, t.exports = r }, function(t, e, n) { "use strict";

    function r(t) { this.defaults = t, this.interceptors = { request: new s, response: new s } } var o = n(19),
        i = n(1),
        s = n(58),
        a = n(59),
        u = n(67),
        c = n(65);
    r.prototype.request = function(t) { "string" == typeof t && (t = i.merge({ url: arguments[0] }, arguments[1])), t = i.merge(o, this.defaults, { method: "get" }, t), t.baseURL && !u(t.url) && (t.url = c(t.baseURL, t.url)); var e = [a, void 0],
            n = Promise.resolve(t); for (this.interceptors.request.forEach(function(t) { e.unshift(t.fulfilled, t.rejected) }), this.interceptors.response.forEach(function(t) { e.push(t.fulfilled, t.rejected) }); e.length;) n = n.then(e.shift(), e.shift()); return n }, i.forEach(["delete", "get", "head", "options"], function(t) { r.prototype[t] = function(e, n) { return this.request(i.merge(n || {}, { method: t, url: e })) } }), i.forEach(["post", "put", "patch"], function(t) { r.prototype[t] = function(e, n, r) { return this.request(i.merge(r || {}, { method: t, url: e, data: n })) } }), t.exports = r }, function(t, e, n) { "use strict";

    function r() { this.handlers = [] } var o = n(1);
    r.prototype.use = function(t, e) { return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1 }, r.prototype.eject = function(t) { this.handlers[t] && (this.handlers[t] = null) }, r.prototype.forEach = function(t) { o.forEach(this.handlers, function(e) { null !== e && t(e) }) }, t.exports = r }, function(t, e, n) { "use strict";

    function r(t) { t.cancelToken && t.cancelToken.throwIfRequested() } var o = n(1),
        i = n(62),
        s = n(35),
        a = n(19);
    t.exports = function(t) { return r(t), t.headers = t.headers || {}, t.data = i(t.data, t.headers, t.transformRequest), t.headers = o.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) { delete t.headers[e] }), (t.adapter || a.adapter)(t).then(function(e) { return r(t), e.data = i(e.data, e.headers, t.transformResponse), e }, function(e) { return s(e) || (r(t), e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e) }) } }, function(t, e, n) { "use strict";
    t.exports = function(t, e, n, r) { return t.config = e, n && (t.code = n), t.response = r, t } }, function(t, e, n) { "use strict"; var r = n(36);
    t.exports = function(t, e, n) { var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n)) : t(n) } }, function(t, e, n) { "use strict"; var r = n(1);
    t.exports = function(t, e, n) { return r.forEach(n, function(n) { t = n(t, e) }), t } }, function(t, e, n) { "use strict";

    function r() { this.message = "String contains an invalid character" }

    function o(t) { for (var e, n, o = String(t), s = "", a = 0, u = i; o.charAt(0 | a) || (u = "=", a % 1); s += u.charAt(63 & e >> 8 - a % 1 * 8)) { if ((n = o.charCodeAt(a += .75)) > 255) throw new r;
            e = e << 8 | n } return s } var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", t.exports = o }, function(t, e, n) { "use strict";

    function r(t) { return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") } var o = n(1);
    t.exports = function(t, e, n) { if (!e) return t; var i; if (n) i = n(e);
        else if (o.isURLSearchParams(e)) i = e.toString();
        else { var s = [];
            o.forEach(e, function(t, e) { null !== t && void 0 !== t && (o.isArray(t) && (e += "[]"), o.isArray(t) || (t = [t]), o.forEach(t, function(t) { o.isDate(t) ? t = t.toISOString() : o.isObject(t) && (t = JSON.stringify(t)), s.push(r(e) + "=" + r(t)) })) }), i = s.join("&") } return i && (t += (-1 === t.indexOf("?") ? "?" : "&") + i), t } }, function(t, e, n) { "use strict";
    t.exports = function(t, e) { return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t } }, function(t, e, n) { "use strict"; var r = n(1);
    t.exports = r.isStandardBrowserEnv() ? function() { return { write: function(t, e, n, o, i, s) { var a = [];
                a.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ") }, read: function(t) { var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return e ? decodeURIComponent(e[3]) : null }, remove: function(t) { this.write(t, "", Date.now() - 864e5) } } }() : function() { return { write: function() {}, read: function() { return null }, remove: function() {} } }() }, function(t, e, n) { "use strict";
    t.exports = function(t) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t) } }, function(t, e, n) { "use strict"; var r = n(1);
    t.exports = r.isStandardBrowserEnv() ? function() {
        function t(t) { var e = t; return n && (o.setAttribute("href", e), e = o.href), o.setAttribute("href", e), { href: o.href, protocol: o.protocol ? o.protocol.replace(/:$/, "") : "", host: o.host, search: o.search ? o.search.replace(/^\?/, "") : "", hash: o.hash ? o.hash.replace(/^#/, "") : "", hostname: o.hostname, port: o.port, pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname } } var e, n = /(msie|trident)/i.test(navigator.userAgent),
            o = document.createElement("a"); return e = t(window.location.href),
            function(n) { var o = r.isString(n) ? t(n) : n; return o.protocol === e.protocol && o.host === e.host } }() : function() { return function() { return !0 } }() }, function(t, e, n) { "use strict"; var r = n(1);
    t.exports = function(t, e) { r.forEach(t, function(n, r) { r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r]) }) } }, function(t, e, n) { "use strict"; var r = n(1);
    t.exports = function(t) { var e, n, o, i = {}; return t ? (r.forEach(t.split("\n"), function(t) { o = t.indexOf(":"), e = r.trim(t.substr(0, o)).toLowerCase(), n = r.trim(t.substr(o + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n) }), i) : i } }, function(t, e, n) { "use strict";
    t.exports = function(t) { return function(e) { return t.apply(null, e) } } }, function(t, e, n) { "use strict";

    function r(t) { var e = t.length; if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0 }

    function o(t) { return 3 * t.length / 4 - r(t) }

    function i(t) { var e, n, o, i, s, a, u = t.length;
        s = r(t), a = new h(3 * u / 4 - s), o = s > 0 ? u - 4 : u; var c = 0; for (e = 0, n = 0; e < o; e += 4, n += 3) i = f[t.charCodeAt(e)] << 18 | f[t.charCodeAt(e + 1)] << 12 | f[t.charCodeAt(e + 2)] << 6 | f[t.charCodeAt(e + 3)], a[c++] = i >> 16 & 255, a[c++] = i >> 8 & 255, a[c++] = 255 & i; return 2 === s ? (i = f[t.charCodeAt(e)] << 2 | f[t.charCodeAt(e + 1)] >> 4, a[c++] = 255 & i) : 1 === s && (i = f[t.charCodeAt(e)] << 10 | f[t.charCodeAt(e + 1)] << 4 | f[t.charCodeAt(e + 2)] >> 2, a[c++] = i >> 8 & 255, a[c++] = 255 & i), a }

    function s(t) { return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t] }

    function a(t, e, n) { for (var r, o = [], i = e; i < n; i += 3) r = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2], o.push(s(r)); return o.join("") }

    function u(t) { for (var e, n = t.length, r = n % 3, o = "", i = [], s = 0, u = n - r; s < u; s += 16383) i.push(a(t, s, s + 16383 > u ? u : s + 16383)); return 1 === r ? (e = t[n - 1], o += c[e >> 2], o += c[e << 4 & 63], o += "==") : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], o += c[e >> 10], o += c[e >> 4 & 63], o += c[e << 2 & 63], o += "="), i.push(o), i.join("") } e.byteLength = o, e.toByteArray = i, e.fromByteArray = u; for (var c = [], f = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, d = l.length; p < d; ++p) c[p] = l[p], f[l.charCodeAt(p)] = p;
    f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63 }, function(t, e, n) {
    "use strict";
    (function(t) {
        function r() { return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

        function o(t, e) { if (r() < e) throw new RangeError("Invalid typed array length"); return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = i.prototype) : (null === t && (t = new i(e)), t.length = e), t }

        function i(t, e, n) { if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i)) return new i(t, e, n); if ("number" == typeof t) { if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string"); return c(this, t) } return s(this, t, e, n) }

        function s(t, e, n, r) { if ("number" == typeof e) throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? l(t, e, n, r) : "string" == typeof e ? f(t, e, n) : p(t, e) }

        function a(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be a number'); if (t < 0) throw new RangeError('"size" argument must not be negative') }

        function u(t, e, n, r) { return a(e), e <= 0 ? o(t, e) : void 0 !== n ? "string" == typeof r ? o(t, e).fill(n, r) : o(t, e).fill(n) : o(t, e) }

        function c(t, e) { if (a(e), t = o(t, e < 0 ? 0 : 0 | d(e)), !i.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < e; ++n) t[n] = 0; return t }

        function f(t, e, n) { if ("string" == typeof n && "" !== n || (n = "utf8"), !i.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding'); var r = 0 | v(e, n);
            t = o(t, r); var s = t.write(e, n); return s !== r && (t = t.slice(0, s)), t }

        function h(t, e) { var n = e.length < 0 ? 0 : 0 | d(e.length);
            t = o(t, n); for (var r = 0; r < n; r += 1) t[r] = 255 & e[r]; return t }

        function l(t, e, n, r) { if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds"); return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), i.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = i.prototype) : t = h(t, e), t }

        function p(t, e) { if (i.isBuffer(e)) { var n = 0 | d(e.length); return t = o(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t) } if (e) { if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || G(e.length) ? o(t, 0) : h(t, e); if ("Buffer" === e.type && $(e.data)) return h(t, e.data) } throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }

        function d(t) { if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes"); return 0 | t }

        function g(t) { return +t != t && (t = 0), i.alloc(+t) }

        function v(t, e) { if (i.isBuffer(t)) return t.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength; "string" != typeof t && (t = "" + t); var n = t.length; if (0 === n) return 0; for (var r = !1;;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return q(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return Q(t).length;
                default:
                    if (r) return q(t).length;
                    e = ("" + e).toLowerCase(), r = !0 } }

        function y(t, e, n) { var r = !1; if ((void 0 === e || e < 0) && (e = 0), e > this.length) return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return ""; if (n >>>= 0, e >>>= 0, n <= e) return ""; for (t || (t = "utf8");;) switch (t) {
                case "hex":
                    return C(this, e, n);
                case "utf8":
                case "utf-8":
                    return B(this, e, n);
                case "ascii":
                    return I(this, e, n);
                case "latin1":
                case "binary":
                    return R(this, e, n);
                case "base64":
                    return O(this, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return U(this, e, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), r = !0 } }

        function m(t, e, n) { var r = t[e];
            t[e] = t[n], t[n] = r }

        function w(t, e, n, r, o) { if (0 === t.length) return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) { if (o) return -1;
                n = t.length - 1 } else if (n < 0) { if (!o) return -1;
                n = 0 } if ("string" == typeof e && (e = i.from(e, r)), i.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, n, r, o); if ("number" == typeof e) return e &= 255, i.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [e], n, r, o); throw new TypeError("val must be string, number or Buffer") }

        function b(t, e, n, r, o) {
            function i(t, e) { return 1 === s ? t[e] : t.readUInt16BE(e * s) } var s = 1,
                a = t.length,
                u = e.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) { if (t.length < 2 || e.length < 2) return -1;
                s = 2, a /= 2, u /= 2, n /= 2 } var c; if (o) { var f = -1; for (c = n; c < a; c++)
                    if (i(t, c) === i(e, -1 === f ? 0 : c - f)) { if (-1 === f && (f = c), c - f + 1 === u) return f * s } else -1 !== f && (c -= c - f), f = -1 } else
                for (n + u > a && (n = a - u), c = n; c >= 0; c--) { for (var h = !0, l = 0; l < u; l++)
                        if (i(t, c + l) !== i(e, l)) { h = !1; break } if (h) return c }
            return -1 }

        function _(t, e, n, r) { n = Number(n) || 0; var o = t.length - n;
            r ? (r = Number(r)) > o && (r = o) : r = o; var i = e.length; if (i % 2 != 0) throw new TypeError("Invalid hex string");
            r > i / 2 && (r = i / 2); for (var s = 0; s < r; ++s) { var a = parseInt(e.substr(2 * s, 2), 16); if (isNaN(a)) return s;
                t[n + s] = a } return s }

        function x(t, e, n, r) { return X(q(e, t.length - n), t, n, r) }

        function P(t, e, n, r) { return X(K(e), t, n, r) }

        function S(t, e, n, r) { return P(t, e, n, r) }

        function E(t, e, n, r) { return X(Q(e), t, n, r) }

        function A(t, e, n, r) { return X(J(e, t.length - n), t, n, r) }

        function O(t, e, n) { return 0 === e && n === t.length ? W.fromByteArray(t) : W.fromByteArray(t.slice(e, n)) }

        function B(t, e, n) { n = Math.min(t.length, n); for (var r = [], o = e; o < n;) { var i = t[o],
                    s = null,
                    a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1; if (o + a <= n) { var u, c, f, h; switch (a) {
                        case 1:
                            i < 128 && (s = i); break;
                        case 2:
                            u = t[o + 1], 128 == (192 & u) && (h = (31 & i) << 6 | 63 & u) > 127 && (s = h); break;
                        case 3:
                            u = t[o + 1], c = t[o + 2], 128 == (192 & u) && 128 == (192 & c) && (h = (15 & i) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (h < 55296 || h > 57343) && (s = h); break;
                        case 4:
                            u = t[o + 1], c = t[o + 2], f = t[o + 3], 128 == (192 & u) && 128 == (192 & c) && 128 == (192 & f) && (h = (15 & i) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & f) > 65535 && h < 1114112 && (s = h) } } null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), o += a } return T(r) }

        function T(t) { var e = t.length; if (e <= Z) return String.fromCharCode.apply(String, t); for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += Z)); return n }

        function I(t, e, n) { var r = "";
            n = Math.min(t.length, n); for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]); return r }

        function R(t, e, n) { var r = "";
            n = Math.min(t.length, n); for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]); return r }

        function C(t, e, n) { var r = t.length;
            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r); for (var o = "", i = e; i < n; ++i) o += Y(t[i]); return o }

        function U(t, e, n) { for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o }

        function k(t, e, n) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + e > n) throw new RangeError("Trying to access beyond buffer length") }

        function M(t, e, n, r, o, s) { if (!i.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > o || e < s) throw new RangeError('"value" argument is out of bounds'); if (n + r > t.length) throw new RangeError("Index out of range") }

        function j(t, e, n, r) { e < 0 && (e = 65535 + e + 1); for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o) }

        function D(t, e, n, r) { e < 0 && (e = 4294967295 + e + 1); for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255 }

        function L(t, e, n, r, o, i) { if (n + r > t.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

        function N(t, e, n, r, o) { return o || L(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), V.write(t, e, n, r, 23, 4), n + 4 }

        function F(t, e, n, r, o) { return o || L(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), V.write(t, e, n, r, 52, 8), n + 8 }

        function z(t) { if (t = H(t).replace(tt, ""), t.length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }

        function H(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }

        function Y(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

        function q(t, e) { e = e || 1 / 0; for (var n, r = t.length, o = null, i = [], s = 0; s < r; ++s) { if ((n = t.charCodeAt(s)) > 55295 && n < 57344) { if (!o) { if (n > 56319) {
                            (e -= 3) > -1 && i.push(239, 191, 189); continue } if (s + 1 === r) {
                            (e -= 3) > -1 && i.push(239, 191, 189); continue } o = n; continue } if (n < 56320) {
                        (e -= 3) > -1 && i.push(239, 191, 189), o = n; continue } n = 65536 + (o - 55296 << 10 | n - 56320) } else o && (e -= 3) > -1 && i.push(239, 191, 189); if (o = null, n < 128) { if ((e -= 1) < 0) break;
                    i.push(n) } else if (n < 2048) { if ((e -= 2) < 0) break;
                    i.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((e -= 3) < 0) break;
                    i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((e -= 4) < 0) break;
                    i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return i }

        function K(t) { for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n)); return e }

        function J(t, e) { for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, o = n % 256, i.push(o), i.push(r); return i }

        function Q(t) { return W.toByteArray(z(t)) }

        function X(t, e, n, r) { for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o]; return o }

        function G(t) { return t !== t }
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var W = n(72),
            V = n(111),
            $ = n(112);
        e.Buffer = i, e.SlowBuffer = g, e.INSPECT_MAX_BYTES = 50, i.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (t) { return !1 } }(), e.kMaxLength = r(), i.poolSize = 8192, i._augment = function(t) { return t.__proto__ = i.prototype, t }, i.from = function(t, e, n) { return s(null, t, e, n) }, i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, { value: null, configurable: !0 })), i.alloc = function(t, e, n) { return u(null, t, e, n) }, i.allocUnsafe = function(t) { return c(null, t) }, i.allocUnsafeSlow = function(t) { return c(null, t) }, i.isBuffer = function(t) { return !(null == t || !t._isBuffer) }, i.compare = function(t, e) { if (!i.isBuffer(t) || !i.isBuffer(e)) throw new TypeError("Arguments must be Buffers"); if (t === e) return 0; for (var n = t.length, r = e.length, o = 0, s = Math.min(n, r); o < s; ++o)
                if (t[o] !== e[o]) { n = t[o], r = e[o]; break } return n < r ? -1 : r < n ? 1 : 0 }, i.isEncoding = function(t) { switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1 } }, i.concat = function(t, e) { if (!$(t)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length) return i.alloc(0); var n; if (void 0 === e)
                for (e = 0, n = 0; n < t.length; ++n) e += t[n].length; var r = i.allocUnsafe(e),
                o = 0; for (n = 0; n < t.length; ++n) { var s = t[n]; if (!i.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(r, o), o += s.length } return r }, i.byteLength = v, i.prototype._isBuffer = !0, i.prototype.swap16 = function() { var t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var e = 0; e < t; e += 2) m(this, e, e + 1); return this }, i.prototype.swap32 = function() { var t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2); return this }, i.prototype.swap64 = function() { var t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4); return this }, i.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? B(this, 0, t) : y.apply(this, arguments) }, i.prototype.equals = function(t) { if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t || 0 === i.compare(this, t) }, i.prototype.inspect = function() { var t = "",
                n = e.INSPECT_MAX_BYTES; return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">" }, i.prototype.compare = function(t, e, n, r, o) { if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index"); if (r >= o && e >= n) return 0; if (r >= o) return -1; if (e >= n) return 1; if (e >>>= 0, n >>>= 0, r >>>= 0, o >>>= 0, this === t) return 0; for (var s = o - r, a = n - e, u = Math.min(s, a), c = this.slice(r, o), f = t.slice(e, n), h = 0; h < u; ++h)
                if (c[h] !== f[h]) { s = c[h], a = f[h]; break } return s < a ? -1 : a < s ? 1 : 0 }, i.prototype.includes = function(t, e, n) { return -1 !== this.indexOf(t, e, n) }, i.prototype.indexOf = function(t, e, n) { return w(this, t, e, n, !0) }, i.prototype.lastIndexOf = function(t, e, n) { return w(this, t, e, n, !1) }, i.prototype.write = function(t, e, n, r) { if (void 0 === e) r = "utf8", n = this.length, e = 0;
            else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
            else { if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0) } var o = this.length - e; if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8"); for (var i = !1;;) switch (r) {
                case "hex":
                    return _(this, t, e, n);
                case "utf8":
                case "utf-8":
                    return x(this, t, e, n);
                case "ascii":
                    return P(this, t, e, n);
                case "latin1":
                case "binary":
                    return S(this, t, e, n);
                case "base64":
                    return E(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return A(this, t, e, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), i = !0 } }, i.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
        var Z = 4096;
        i.prototype.slice = function(t, e) { var n = this.length;
            t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t); var r; if (i.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = i.prototype;
            else { var o = e - t;
                r = new i(o, void 0); for (var s = 0; s < o; ++s) r[s] = this[s + t] } return r }, i.prototype.readUIntLE = function(t, e, n) { t |= 0, e |= 0, n || k(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return r }, i.prototype.readUIntBE = function(t, e, n) { t |= 0, e |= 0, n || k(t, e, this.length); for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o; return r }, i.prototype.readUInt8 = function(t, e) { return e || k(t, 1, this.length), this[t] }, i.prototype.readUInt16LE = function(t, e) { return e || k(t, 2, this.length), this[t] | this[t + 1] << 8 }, i.prototype.readUInt16BE = function(t, e) { return e || k(t, 2, this.length), this[t] << 8 | this[t + 1] }, i.prototype.readUInt32LE = function(t, e) { return e || k(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, i.prototype.readUInt32BE = function(t, e) { return e || k(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, i.prototype.readIntLE = function(t, e, n) { t |= 0, e |= 0, n || k(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return o *= 128, r >= o && (r -= Math.pow(2, 8 * e)), r }, i.prototype.readIntBE = function(t, e, n) { t |= 0, e |= 0, n || k(t, e, this.length); for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o; return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i }, i.prototype.readInt8 = function(t, e) { return e || k(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, i.prototype.readInt16LE = function(t, e) { e || k(t, 2, this.length); var n = this[t] | this[t + 1] << 8; return 32768 & n ? 4294901760 | n : n }, i.prototype.readInt16BE = function(t, e) { e || k(t, 2, this.length); var n = this[t + 1] | this[t] << 8; return 32768 & n ? 4294901760 | n : n }, i.prototype.readInt32LE = function(t, e) { return e || k(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, i.prototype.readInt32BE = function(t, e) { return e || k(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, i.prototype.readFloatLE = function(t, e) { return e || k(t, 4, this.length), V.read(this, t, !0, 23, 4) }, i.prototype.readFloatBE = function(t, e) { return e || k(t, 4, this.length), V.read(this, t, !1, 23, 4) }, i.prototype.readDoubleLE = function(t, e) { return e || k(t, 8, this.length), V.read(this, t, !0, 52, 8) }, i.prototype.readDoubleBE = function(t, e) { return e || k(t, 8, this.length), V.read(this, t, !1, 52, 8) }, i.prototype.writeUIntLE = function(t, e, n, r) { if (t = +t, e |= 0, n |= 0, !r) { M(this, t, e, n, Math.pow(2, 8 * n) - 1, 0) } var o = 1,
                i = 0; for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255; return e + n }, i.prototype.writeUIntBE = function(t, e, n, r) { if (t = +t, e |= 0, n |= 0, !r) { M(this, t, e, n, Math.pow(2, 8 * n) - 1, 0) } var o = n - 1,
                i = 1; for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255; return e + n }, i.prototype.writeUInt8 = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1 }, i.prototype.writeUInt16LE = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2 }, i.prototype.writeUInt16BE = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2 }, i.prototype.writeUInt32LE = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : D(this, t, e, !0), e + 4 }, i.prototype.writeUInt32BE = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : D(this, t, e, !1), e + 4 }, i.prototype.writeIntLE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
                M(this, t, e, n, o - 1, -o) } var i = 0,
                s = 1,
                a = 0; for (this[e] = 255 & t; ++i < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255; return e + n }, i.prototype.writeIntBE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
                M(this, t, e, n, o - 1, -o) } var i = n - 1,
                s = 1,
                a = 0; for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255; return e + n }, i.prototype.writeInt8 = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1 }, i.prototype.writeInt16LE = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2 }, i.prototype.writeInt16BE = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2 }, i.prototype.writeInt32LE = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : D(this, t, e, !0), e + 4 }, i.prototype.writeInt32BE = function(t, e, n) { return t = +t, e |= 0, n || M(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : D(this, t, e, !1), e + 4 }, i.prototype.writeFloatLE = function(t, e, n) { return N(this, t, e, !0, n) }, i.prototype.writeFloatBE = function(t, e, n) { return N(this, t, e, !1, n) }, i.prototype.writeDoubleLE = function(t, e, n) { return F(this, t, e, !0, n) }, i.prototype.writeDoubleBE = function(t, e, n) { return F(this, t, e, !1, n) }, i.prototype.copy = function(t, e, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0; if (0 === t.length || 0 === this.length) return 0; if (e < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds"); if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n); var o, s = r - n; if (this === t && n < e && e < r)
                for (o = s - 1; o >= 0; --o) t[o + e] = this[o + n];
            else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < s; ++o) t[o + e] = this[o + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e); return s }, i.prototype.fill = function(t, e, n, r) { if ("string" == typeof t) { if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) { var o = t.charCodeAt(0);
                    o < 256 && (t = o) } if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string"); if ("string" == typeof r && !i.isEncoding(r)) throw new TypeError("Unknown encoding: " + r) } else "number" == typeof t && (t &= 255); if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index"); if (n <= e) return this;
            e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0); var s; if ("number" == typeof t)
                for (s = e; s < n; ++s) this[s] = t;
            else { var a = i.isBuffer(t) ? t : q(new i(t, r).toString()),
                    u = a.length; for (s = 0; s < n - e; ++s) this[s + e] = a[s % u] } return this };
        var tt = /[^+\/0-9A-Za-z-_]/g
    }).call(e, n(121))
}, function(t, e, n) { var r = n(0)("unscopables"),
        o = Array.prototype;
    void 0 == o[r] && n(6)(o, r, {}), t.exports = function(t) { o[r][t] = !0 } }, function(t, e) { t.exports = function(t, e, n, r) { if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!"); return t } }, function(t, e, n) { var r = n(29),
        o = n(47),
        i = n(97);
    t.exports = function(t) { return function(e, n, s) { var a, u = r(e),
                c = o(u.length),
                f = i(s, c); if (t && n != n) { for (; c > f;)
                    if ((a = u[f++]) != a) return !0 } else
                for (; c > f; f++)
                    if ((t || f in u) && u[f] === n) return t || f || 0; return !t && -1 } } }, function(t, e, n) { var r = n(15),
        o = n(81),
        i = n(80),
        s = n(4),
        a = n(47),
        u = n(99),
        c = {},
        f = {},
        e = t.exports = function(t, e, n, h, l) { var p, d, g, v, y = l ? function() { return t } : u(t),
                m = r(n, h, e ? 2 : 1),
                w = 0; if ("function" != typeof y) throw TypeError(t + " is not iterable!"); if (i(y)) { for (p = a(t.length); p > w; w++)
                    if ((v = e ? m(s(d = t[w])[0], d[1]) : m(t[w])) === c || v === f) return v } else
                for (g = y.call(t); !(d = g.next()).done;)
                    if ((v = o(g, m, d.value, e)) === c || v === f) return v };
    e.BREAK = c, e.RETURN = f }, function(t, e, n) { t.exports = !n(9) && !n(25)(function() { return 7 != Object.defineProperty(n(23)("div"), "a", { get: function() { return 7 } }).a }) }, function(t, e) { t.exports = function(t, e, n) { var r = void 0 === n; switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]) } return t.apply(n, e) } }, function(t, e, n) { var r = n(11),
        o = n(0)("iterator"),
        i = Array.prototype;
    t.exports = function(t) { return void 0 !== t && (r.Array === t || i[o] === t) } }, function(t, e, n) { var r = n(4);
    t.exports = function(t, e, n, o) { try { return o ? e(r(n)[0], n[1]) : e(n) } catch (e) { var i = t.return; throw void 0 !== i && r(i.call(t)), e } } }, function(t, e, n) { "use strict"; var r = n(87),
        o = n(44),
        i = n(26),
        s = {};
    n(6)(s, n(0)("iterator"), function() { return this }), t.exports = function(t, e, n) { t.prototype = r(s, { next: o(1, n) }), i(t, e + " Iterator") } }, function(t, e, n) { var r = n(0)("iterator"),
        o = !1; try { var i = [7][r]();
        i.return = function() { o = !0 }, Array.from(i, function() { throw 2 }) } catch (t) {} t.exports = function(t, e) { if (!e && !o) return !1; var n = !1; try { var i = [7],
                s = i[r]();
            s.next = function() { return { done: n = !0 } }, i[r] = function() { return s }, t(i) } catch (t) {} return n } }, function(t, e) { t.exports = function(t, e) { return { value: e, done: !!t } } }, function(t, e, n) { var r = n(2),
        o = n(46).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        s = r.process,
        a = r.Promise,
        u = "process" == n(14)(s);
    t.exports = function() { var t, e, n, c = function() { var r, o; for (u && (r = s.domain) && r.exit(); t;) { o = t.fn, t = t.next; try { o() } catch (r) { throw t ? n() : e = void 0, r } } e = void 0, r && r.enter() }; if (u) n = function() { s.nextTick(c) };
        else if (i) { var f = !0,
                h = document.createTextNode("");
            new i(c).observe(h, { characterData: !0 }), n = function() { h.data = f = !f } } else if (a && a.resolve) { var l = a.resolve();
            n = function() { l.then(c) } } else n = function() { o.call(r, c) }; return function(r) { var o = { fn: r, next: void 0 };
            e && (e.next = o), t || (t = o, n()), e = o } } }, function(t, e, n) { "use strict"; var r = n(43),
        o = n(89),
        i = n(92),
        s = n(48),
        a = n(40),
        u = Object.assign;
    t.exports = !u || n(25)(function() { var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst"; return t[n] = 7, r.split("").forEach(function(t) { e[t] = t }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r }) ? function(t, e) { for (var n = s(t), u = arguments.length, c = 1, f = o.f, h = i.f; u > c;)
            for (var l, p = a(arguments[c++]), d = f ? r(p).concat(f(p)) : r(p), g = d.length, v = 0; g > v;) h.call(p, l = d[v++]) && (n[l] = p[l]); return n } : u }, function(t, e, n) { var r = n(4),
        o = n(88),
        i = n(38),
        s = n(27)("IE_PROTO"),
        a = function() {},
        u = function() { var t, e = n(23)("iframe"),
                r = i.length; for (e.style.display = "none", n(39).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[i[r]]; return u() };
    t.exports = Object.create || function(t, e) { var n; return null !== t ? (a.prototype = r(t), n = new a, a.prototype = null, n[s] = t) : n = u(), void 0 === e ? n : o(n, e) } }, function(t, e, n) { var r = n(17),
        o = n(4),
        i = n(43);
    t.exports = n(9) ? Object.defineProperties : function(t, e) { o(t); for (var n, s = i(e), a = s.length, u = 0; a > u;) r.f(t, n = s[u++], e[n]); return t } }, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, n) { var r = n(10),
        o = n(48),
        i = n(27)("IE_PROTO"),
        s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) { return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null } }, function(t, e, n) { var r = n(10),
        o = n(29),
        i = n(76)(!1),
        s = n(27)("IE_PROTO");
    t.exports = function(t, e) { var n, a = o(t),
            u = 0,
            c = []; for (n in a) n != s && r(a, n) && c.push(n); for (; e.length > u;) r(a, n = e[u++]) && (~i(c, n) || c.push(n)); return c } }, function(t, e) { e.f = {}.propertyIsEnumerable }, function(t, e, n) { var r = n(12);
    t.exports = function(t, e, n) { for (var o in e) r(t, o, e[o], n); return t } }, function(t, e, n) { "use strict"; var r = n(2),
        o = n(17),
        i = n(9),
        s = n(0)("species");
    t.exports = function(t) { var e = r[t];
        i && e && !e[s] && o.f(e, s, { configurable: !0, get: function() { return this } }) } }, function(t, e, n) { var r = n(4),
        o = n(20),
        i = n(0)("species");
    t.exports = function(t, e) { var n, s = r(t).constructor; return void 0 === s || void 0 == (n = r(s)[i]) ? e : o(n) } }, function(t, e, n) { var r = n(28),
        o = n(22);
    t.exports = function(t) { return function(e, n) { var i, s, a = String(o(e)),
                u = r(n),
                c = a.length; return u < 0 || u >= c ? t ? "" : void 0 : (i = a.charCodeAt(u), i < 55296 || i > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : i : t ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536) } } }, function(t, e, n) { var r = n(28),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, e) { return t = r(t), t < 0 ? o(t + e, 0) : i(t, e) } }, function(t, e, n) { var r = n(16);
    t.exports = function(t, e) { if (!r(t)) return t; var n, o; if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o; if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o; if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function(t, e, n) { var r = n(21),
        o = n(0)("iterator"),
        i = n(11);
    t.exports = n(5).getIteratorMethod = function(t) { if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)] } }, function(t, e, n) { "use strict"; var r = n(74),
        o = n(84),
        i = n(11),
        s = n(29);
    t.exports = n(41)(Array, "Array", function(t, e) { this._t = s(t), this._i = 0, this._k = e }, function() { var t = this._t,
            e = this._k,
            n = this._i++; return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]]) }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries") }, function(t, e, n) { var r = n(24);
    r(r.S + r.F, "Object", { assign: n(86) }) }, function(t, e, n) { "use strict"; var r = n(21),
        o = {};
    o[n(0)("toStringTag")] = "z", o + "" != "[object z]" && n(12)(Object.prototype, "toString", function() { return "[object " + r(this) + "]" }, !0) }, function(t, e, n) { "use strict"; var r, o, i, s = n(42),
        a = n(2),
        u = n(15),
        c = n(21),
        f = n(24),
        h = n(16),
        l = n(20),
        p = n(75),
        d = n(77),
        g = n(95),
        v = n(46).set,
        y = n(85)(),
        m = a.TypeError,
        w = a.process,
        b = a.Promise,
        w = a.process,
        _ = "process" == c(w),
        x = function() {},
        P = !! function() { try { var t = b.resolve(1),
                    e = (t.constructor = {})[n(0)("species")] = function(t) { t(x, x) }; return (_ || "function" == typeof PromiseRejectionEvent) && t.then(x) instanceof e } catch (t) {} }(),
        S = function(t, e) { return t === e || t === b && e === i },
        E = function(t) { var e; return !(!h(t) || "function" != typeof(e = t.then)) && e },
        A = function(t) { return S(b, t) ? new O(t) : new o(t) },
        O = o = function(t) { var e, n;
            this.promise = new t(function(t, r) { if (void 0 !== e || void 0 !== n) throw m("Bad Promise constructor");
                e = t, n = r }), this.resolve = l(e), this.reject = l(n) },
        B = function(t) { try { t() } catch (t) { return { error: t } } },
        T = function(t, e) { if (!t._n) { t._n = !0; var n = t._c;
                y(function() { for (var r = t._v, o = 1 == t._s, i = 0; n.length > i;) ! function(e) { var n, i, s = o ? e.ok : e.fail,
                            a = e.resolve,
                            u = e.reject,
                            c = e.domain; try { s ? (o || (2 == t._h && C(t), t._h = 1), !0 === s ? n = r : (c && c.enter(), n = s(r), c && c.exit()), n === e.promise ? u(m("Promise-chain cycle")) : (i = E(n)) ? i.call(n, a, u) : a(n)) : u(r) } catch (t) { u(t) } }(n[i++]);
                    t._c = [], t._n = !1, e && !t._h && I(t) }) } },
        I = function(t) { v.call(a, function() { var e, n, r, o = t._v; if (R(t) && (e = B(function() { _ ? w.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({ promise: t, reason: o }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o) }), t._h = _ || R(t) ? 2 : 1), t._a = void 0, e) throw e.error }) },
        R = function(t) { if (1 == t._h) return !1; for (var e, n = t._a || t._c, r = 0; n.length > r;)
                if (e = n[r++], e.fail || !R(e.promise)) return !1; return !0 },
        C = function(t) { v.call(a, function() { var e;
                _ ? w.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({ promise: t, reason: t._v }) }) },
        U = function(t) { var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), T(e, !0)) },
        k = function(t) { var e, n = this; if (!n._d) { n._d = !0, n = n._w || n; try { if (n === t) throw m("Promise can't be resolved itself");
                    (e = E(t)) ? y(function() { var r = { _w: n, _d: !1 }; try { e.call(t, u(k, r, 1), u(U, r, 1)) } catch (t) { U.call(r, t) } }): (n._v = t, n._s = 1, T(n, !1)) } catch (t) { U.call({ _w: n, _d: !1 }, t) } } };
    P || (b = function(t) { p(this, b, "Promise", "_h"), l(t), r.call(this); try { t(u(k, this, 1), u(U, this, 1)) } catch (t) { U.call(this, t) } }, r = function(t) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }, r.prototype = n(93)(b.prototype, { then: function(t, e) { var n = A(g(this, b)); return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = _ ? w.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && T(this, !1), n.promise }, catch: function(t) { return this.then(void 0, t) } }), O = function() { var t = new r;
        this.promise = t, this.resolve = u(k, t, 1), this.reject = u(U, t, 1) }), f(f.G + f.W + f.F * !P, { Promise: b }), n(26)(b, "Promise"), n(94)("Promise"), i = n(5).Promise, f(f.S + f.F * !P, "Promise", { reject: function(t) { var e = A(this); return (0, e.reject)(t), e.promise } }), f(f.S + f.F * (s || !P), "Promise", { resolve: function(t) { if (t instanceof b && S(t.constructor, this)) return t; var e = A(this); return (0, e.resolve)(t), e.promise } }), f(f.S + f.F * !(P && n(83)(function(t) { b.all(t).catch(x) })), "Promise", { all: function(t) { var e = this,
                n = A(e),
                r = n.resolve,
                o = n.reject,
                i = B(function() { var n = [],
                        i = 0,
                        s = 1;
                    d(t, !1, function(t) { var a = i++,
                            u = !1;
                        n.push(void 0), s++, e.resolve(t).then(function(t) { u || (u = !0, n[a] = t, --s || r(n)) }, o) }), --s || r(n) }); return i && o(i.error), n.promise }, race: function(t) { var e = this,
                n = A(e),
                r = n.reject,
                o = B(function() { d(t, !1, function(t) { e.resolve(t).then(n.resolve, r) }) }); return o && r(o.error), n.promise } }) }, function(t, e, n) { "use strict"; var r = n(96)(!0);
    n(41)(String, "String", function(t) { this._t = String(t), this._i = 0 }, function() { var t, e = this._t,
            n = this._i; return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 }) }) }, function(t, e, n) { for (var r = n(100), o = n(12), i = n(2), s = n(6), a = n(11), u = n(0), c = u("iterator"), f = u("toStringTag"), h = a.Array, l = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], p = 0; p < 5; p++) { var d, g = l[p],
            v = i[g],
            y = v && v.prototype; if (y) { y[c] || s(y, c, h), y[f] || s(y, f, g), a[g] = h; for (d in r) y[d] || o(y, d, r[d], !0) } } }, function(t, e, n) {! function(r, o) { t.exports = e = o(n(7)) }(0, function(t) { return function() {
            function e(t, e, n) { for (var r = [], i = 0, s = 0; s < e; s++)
                    if (s % 4) { var a = n[t.charCodeAt(s - 1)] << s % 4 * 2,
                            u = n[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                        r[i >>> 2] |= (a | u) << 24 - i % 4 * 8, i++ } return o.create(r, i) } var n = t,
                r = n.lib,
                o = r.WordArray,
                i = n.enc;
            i.Base64 = { stringify: function(t) { var e = t.words,
                        n = t.sigBytes,
                        r = this._map;
                    t.clamp(); for (var o = [], i = 0; i < n; i += 3)
                        for (var s = e[i >>> 2] >>> 24 - i % 4 * 8 & 255, a = e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255, u = e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, c = s << 16 | a << 8 | u, f = 0; f < 4 && i + .75 * f < n; f++) o.push(r.charAt(c >>> 6 * (3 - f) & 63)); var h = r.charAt(64); if (h)
                        for (; o.length % 4;) o.push(h); return o.join("") }, parse: function(t) { var n = t.length,
                        r = this._map,
                        o = this._reverseMap; if (!o) { o = this._reverseMap = []; for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i } var s = r.charAt(64); if (s) { var a = t.indexOf(s); - 1 !== a && (n = a) } return e(t, n, o) }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } }(), t.enc.Base64 }) }, function(t, e, n) {! function(r, o) { t.exports = e = o(n(7)) }(0, function(t) { return t.enc.Utf8 }) }, function(t, e, n) {! function(r, o, i) { t.exports = e = o(n(7), n(49), n(110), n(109)) }(0, function(t) { return t.HmacSHA512 }) }, function(t, e, n) {! function(r, o) { t.exports = e = o(n(7)) }(0, function(t) {! function() { var e = t,
                n = e.lib,
                r = n.Base,
                o = e.enc,
                i = o.Utf8,
                s = e.algo;
            s.HMAC = r.extend({ init: function(t, e) { t = this._hasher = new t.init, "string" == typeof e && (e = i.parse(e)); var n = t.blockSize,
                        r = 4 * n;
                    e.sigBytes > r && (e = t.finalize(e)), e.clamp(); for (var o = this._oKey = e.clone(), s = this._iKey = e.clone(), a = o.words, u = s.words, c = 0; c < n; c++) a[c] ^= 1549556828, u[c] ^= 909522486;
                    o.sigBytes = s.sigBytes = r, this.reset() }, reset: function() { var t = this._hasher;
                    t.reset(), t.update(this._iKey) }, update: function(t) { return this._hasher.update(t), this }, finalize: function(t) { var e = this._hasher,
                        n = e.finalize(t); return e.reset(), e.finalize(this._oKey.clone().concat(n)) } }) }() }) }, function(t, e, n) {! function(r, o, i) { t.exports = e = o(n(7), n(49)) }(0, function(t) { return function() {
            function e() { return s.create.apply(s, arguments) } var n = t,
                r = n.lib,
                o = r.Hasher,
                i = n.x64,
                s = i.Word,
                a = i.WordArray,
                u = n.algo,
                c = [e(1116352408, 3609767458), e(1899447441, 602891725), e(3049323471, 3964484399), e(3921009573, 2173295548), e(961987163, 4081628472), e(1508970993, 3053834265), e(2453635748, 2937671579), e(2870763221, 3664609560), e(3624381080, 2734883394), e(310598401, 1164996542), e(607225278, 1323610764), e(1426881987, 3590304994), e(1925078388, 4068182383), e(2162078206, 991336113), e(2614888103, 633803317), e(3248222580, 3479774868), e(3835390401, 2666613458), e(4022224774, 944711139), e(264347078, 2341262773), e(604807628, 2007800933), e(770255983, 1495990901), e(1249150122, 1856431235), e(1555081692, 3175218132), e(1996064986, 2198950837), e(2554220882, 3999719339), e(2821834349, 766784016), e(2952996808, 2566594879), e(3210313671, 3203337956), e(3336571891, 1034457026), e(3584528711, 2466948901), e(113926993, 3758326383), e(338241895, 168717936), e(666307205, 1188179964), e(773529912, 1546045734), e(1294757372, 1522805485), e(1396182291, 2643833823), e(1695183700, 2343527390), e(1986661051, 1014477480), e(2177026350, 1206759142), e(2456956037, 344077627), e(2730485921, 1290863460), e(2820302411, 3158454273), e(3259730800, 3505952657), e(3345764771, 106217008), e(3516065817, 3606008344), e(3600352804, 1432725776), e(4094571909, 1467031594), e(275423344, 851169720), e(430227734, 3100823752), e(506948616, 1363258195), e(659060556, 3750685593), e(883997877, 3785050280), e(958139571, 3318307427), e(1322822218, 3812723403), e(1537002063, 2003034995), e(1747873779, 3602036899), e(1955562222, 1575990012), e(2024104815, 1125592928), e(2227730452, 2716904306), e(2361852424, 442776044), e(2428436474, 593698344), e(2756734187, 3733110249), e(3204031479, 2999351573), e(3329325298, 3815920427), e(3391569614, 3928383900), e(3515267271, 566280711), e(3940187606, 3454069534), e(4118630271, 4000239992), e(116418474, 1914138554), e(174292421, 2731055270), e(289380356, 3203993006), e(460393269, 320620315), e(685471733, 587496836), e(852142971, 1086792851), e(1017036298, 365543100), e(1126000580, 2618297676), e(1288033470, 3409855158), e(1501505948, 4234509866), e(1607167915, 987167468), e(1816402316, 1246189591)],
                f = [];! function() { for (var t = 0; t < 80; t++) f[t] = e() }(); var h = u.SHA512 = o.extend({ _doReset: function() { this._hash = new a.init([new s.init(1779033703, 4089235720), new s.init(3144134277, 2227873595), new s.init(1013904242, 4271175723), new s.init(2773480762, 1595750129), new s.init(1359893119, 2917565137), new s.init(2600822924, 725511199), new s.init(528734635, 4215389547), new s.init(1541459225, 327033209)]) }, _doProcessBlock: function(t, e) { for (var n = this._hash.words, r = n[0], o = n[1], i = n[2], s = n[3], a = n[4], u = n[5], h = n[6], l = n[7], p = r.high, d = r.low, g = o.high, v = o.low, y = i.high, m = i.low, w = s.high, b = s.low, _ = a.high, x = a.low, P = u.high, S = u.low, E = h.high, A = h.low, O = l.high, B = l.low, T = p, I = d, R = g, C = v, U = y, k = m, M = w, j = b, D = _, L = x, N = P, F = S, z = E, H = A, Y = O, q = B, K = 0; K < 80; K++) { var J = f[K]; if (K < 16) var Q = J.high = 0 | t[e + 2 * K],
                            X = J.low = 0 | t[e + 2 * K + 1];
                        else { var G = f[K - 15],
                                W = G.high,
                                V = G.low,
                                $ = (W >>> 1 | V << 31) ^ (W >>> 8 | V << 24) ^ W >>> 7,
                                Z = (V >>> 1 | W << 31) ^ (V >>> 8 | W << 24) ^ (V >>> 7 | W << 25),
                                tt = f[K - 2],
                                et = tt.high,
                                nt = tt.low,
                                rt = (et >>> 19 | nt << 13) ^ (et << 3 | nt >>> 29) ^ et >>> 6,
                                ot = (nt >>> 19 | et << 13) ^ (nt << 3 | et >>> 29) ^ (nt >>> 6 | et << 26),
                                it = f[K - 7],
                                st = it.high,
                                at = it.low,
                                ut = f[K - 16],
                                ct = ut.high,
                                ft = ut.low,
                                X = Z + at,
                                Q = $ + st + (X >>> 0 < Z >>> 0 ? 1 : 0),
                                X = X + ot,
                                Q = Q + rt + (X >>> 0 < ot >>> 0 ? 1 : 0),
                                X = X + ft,
                                Q = Q + ct + (X >>> 0 < ft >>> 0 ? 1 : 0);
                            J.high = Q, J.low = X } var ht = D & N ^ ~D & z,
                            lt = L & F ^ ~L & H,
                            pt = T & R ^ T & U ^ R & U,
                            dt = I & C ^ I & k ^ C & k,
                            gt = (T >>> 28 | I << 4) ^ (T << 30 | I >>> 2) ^ (T << 25 | I >>> 7),
                            vt = (I >>> 28 | T << 4) ^ (I << 30 | T >>> 2) ^ (I << 25 | T >>> 7),
                            yt = (D >>> 14 | L << 18) ^ (D >>> 18 | L << 14) ^ (D << 23 | L >>> 9),
                            mt = (L >>> 14 | D << 18) ^ (L >>> 18 | D << 14) ^ (L << 23 | D >>> 9),
                            wt = c[K],
                            bt = wt.high,
                            _t = wt.low,
                            xt = q + mt,
                            Pt = Y + yt + (xt >>> 0 < q >>> 0 ? 1 : 0),
                            xt = xt + lt,
                            Pt = Pt + ht + (xt >>> 0 < lt >>> 0 ? 1 : 0),
                            xt = xt + _t,
                            Pt = Pt + bt + (xt >>> 0 < _t >>> 0 ? 1 : 0),
                            xt = xt + X,
                            Pt = Pt + Q + (xt >>> 0 < X >>> 0 ? 1 : 0),
                            St = vt + dt,
                            Et = gt + pt + (St >>> 0 < vt >>> 0 ? 1 : 0);
                        Y = z, q = H, z = N, H = F, N = D, F = L, L = j + xt | 0, D = M + Pt + (L >>> 0 < j >>> 0 ? 1 : 0) | 0, M = U, j = k, U = R, k = C, R = T, C = I, I = xt + St | 0, T = Pt + Et + (I >>> 0 < xt >>> 0 ? 1 : 0) | 0 } d = r.low = d + I, r.high = p + T + (d >>> 0 < I >>> 0 ? 1 : 0), v = o.low = v + C, o.high = g + R + (v >>> 0 < C >>> 0 ? 1 : 0), m = i.low = m + k, i.high = y + U + (m >>> 0 < k >>> 0 ? 1 : 0), b = s.low = b + j, s.high = w + M + (b >>> 0 < j >>> 0 ? 1 : 0), x = a.low = x + L, a.high = _ + D + (x >>> 0 < L >>> 0 ? 1 : 0), S = u.low = S + F, u.high = P + N + (S >>> 0 < F >>> 0 ? 1 : 0), A = h.low = A + H, h.high = E + z + (A >>> 0 < H >>> 0 ? 1 : 0), B = l.low = B + q, l.high = O + Y + (B >>> 0 < q >>> 0 ? 1 : 0) }, _doFinalize: function() { var t = this._data,
                        e = t.words,
                        n = 8 * this._nDataBytes,
                        r = 8 * t.sigBytes; return e[r >>> 5] |= 128 << 24 - r % 32, e[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296), e[31 + (r + 128 >>> 10 << 5)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32() }, clone: function() { var t = o.clone.call(this); return t._hash = this._hash.clone(), t }, blockSize: 32 });
            n.SHA512 = o._createHelper(h), n.HmacSHA512 = o._createHmacHelper(h) }(), t.SHA512 }) }, function(t, e) { e.read = function(t, e, n, r, o) { var i, s, a = 8 * o - r - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            f = -7,
            h = n ? o - 1 : 0,
            l = n ? -1 : 1,
            p = t[e + h]; for (h += l, i = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; i = 256 * i + t[e + h], h += l, f -= 8); for (s = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; s = 256 * s + t[e + h], h += l, f -= 8); if (0 === i) i = 1 - c;
        else { if (i === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
            s += Math.pow(2, r), i -= c } return (p ? -1 : 1) * s * Math.pow(2, i - r) }, e.write = function(t, e, n, r, o, i) { var s, a, u, c = 8 * i - o - 1,
            f = (1 << c) - 1,
            h = f >> 1,
            l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : i - 1,
            d = r ? 1 : -1,
            g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), e += s + h >= 1 ? l / u : l * Math.pow(2, 1 - h), e * u >= 2 && (s++, u /= 2), s + h >= f ? (a = 0, s = f) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, o), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + p] = 255 & a, p += d, a /= 256, o -= 8); for (s = s << o | a, c += o; c > 0; t[n + p] = 255 & s, p += d, s /= 256, c -= 8);
        t[n + p - d] |= 128 * g } }, function(t, e) { var n = {}.toString;
    t.exports = Array.isArray || function(t) { return "[object Array]" == n.call(t) } }, function(t, e, n) { "use strict"; var r = n(106),
        o = n(107),
        i = n(108),
        s = function(t) { var e = r.stringify(t); return e = e.replace(/=+$/, ""), e = e.replace(/\+/g, "-"), e = e.replace(/\//g, "_") },
        a = { alg: "HS512", typ: "JWT" },
        u = void 0;
    e.init = function(t, e) { c ? (a.alg = t, u = e) : console.log("invalid algorithm") }, e.encode = function(t, e) { try { if (e) u = e;
            else if (!u) return void console.log("secret key can not be null"); var n = o.parse(JSON.stringify(a)),
                r = s(n),
                i = o.parse(JSON.stringify(t)),
                c = s(i),
                h = r + "." + c,
                l = f(h, a.alg, u); return h + "." + s(l) } catch (t) { console.log(t) } }; var c = function(t) { return ["HS512"].forEach(function(e) { if (e === t) return !0 }), !1 },
        f = function(t, e, n) { switch (e) {
                case "HS512":
                    return i(t, n);
                default:
                    return console.log("Invalid algo"), !1 } } }, function(t, e, n) {
    /*!
     * js-jwt
     * Copyright(c) 2013 Prabodh Tiwari <prabodhtiwari@outlook.com>
     * MIT Licensed
     */
    t.exports = n(113)
}, function(t, e) {
    function n() { throw new Error("setTimeout has not been defined") }

    function r() { throw new Error("clearTimeout has not been defined") }

    function o(t) { if (f === setTimeout) return setTimeout(t, 0); if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0); try { return f(t, 0) } catch (e) { try { return f.call(null, t, 0) } catch (e) { return f.call(this, t, 0) } } }

    function i(t) { if (h === clearTimeout) return clearTimeout(t); if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t); try { return h(t) } catch (e) { try { return h.call(null, t) } catch (e) { return h.call(this, t) } } }

    function s() { g && p && (g = !1, p.length ? d = p.concat(d) : v = -1, d.length && a()) }

    function a() { if (!g) { var t = o(s);
            g = !0; for (var e = d.length; e;) { for (p = d, d = []; ++v < e;) p && p[v].run();
                v = -1, e = d.length } p = null, g = !1, i(t) } }

    function u(t, e) { this.fun = t, this.array = e }

    function c() {} var f, h, l = t.exports = {};! function() { try { f = "function" == typeof setTimeout ? setTimeout : n } catch (t) { f = n } try { h = "function" == typeof clearTimeout ? clearTimeout : r } catch (t) { h = r } }(); var p, d = [],
        g = !1,
        v = -1;
    l.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new u(t, e)), 1 !== d.length || g || o(a) }, u.prototype.run = function() { this.fun.apply(null, this.array) }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = c, l.addListener = c, l.once = c, l.off = c, l.removeListener = c, l.removeAllListeners = c, l.emit = c, l.binding = function(t) { throw new Error("process.binding is not supported") }, l.cwd = function() { return "/" }, l.chdir = function(t) { throw new Error("process.chdir is not supported") }, l.umask = function() { return 0 } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isValidGameState = function(t) { switch (t) {
            case "start":
            case "loaded":
            case "playing":
            case "paused":
            case "levelup":
            case "over":
                return !0;
            default:
                return !1 } } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), n(52), n(53); var r = n(8),
        o = n(13),
        i = n(3);! function(t) { try { document.domain = "forestrygames.com" } catch (t) { console.log(t) } var e = new r.default;
        o.default.forEach(function(t) { return e.subscribe(t) }), i.shimEnv(t), Object.assign(t, { gamezop: e }) }(window), r.checkAdBlocker(), i.FullScreen.enableFS() }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sdkFail = function(t) { return new Error("Could not initialize FG SDK " + (t || "")) } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = { attach: function(t) { t && t.forEach(function(t) { var e = document.createElement("script");
                e.setAttribute("src", t), document.body.appendChild(e) }) } };
    e.default = r }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(18),
        o = n(13),
        i = n(32),
        s = n(18),
        a = n(3),
        u = n(8),
        c = function() {
            function t(t) { this.context = t, this.serverUpdateQ = [], this.backupQ = [], this.isUpdating = !1 } return t.prototype.onSuccess = function() { this.serverUpdateQ = this.backupQ.slice(), this.backupQ = [] }, t.prototype.onFail = function() { this.serverUpdateQ = this.serverUpdateQ.concat(this.backupQ), this.backupQ = [] }, t.prototype.lock = function() { this.isUpdating = !0 }, t.prototype.unlock = function() { this.isUpdating = !1 }, t.prototype.checkTime = function(t, e) { if (void 0 !== t) { var n = t.time.getTime() + 6e5; return e.time.getTime() < n } return !0 }, t.prototype.enqueue = function(t) { var e; if (this.isUpdating)
                    if (e = this.backupQ[this.backupQ.length - 1], this.checkTime(e, t)) { if (JSON.stringify(t) === JSON.stringify(e)) return;
                        this.backupQ.push(t) } else this.backupQ = [], this.backupQ.push(t);
                else if (e = this.serverUpdateQ[this.serverUpdateQ.length - 1], this.checkTime(e, t)) { if (JSON.stringify(t) === JSON.stringify(e)) return;
                    this.serverUpdateQ.push(t) } else this.serverUpdateQ = [], this.serverUpdateQ.push(t) }, t.prototype.process = function() { var t = this; if (this.isUpdating) return Promise.resolve(!1);
                this.lock(); var e = this.serverUpdateQ.slice(); return 0 === e.length ? (this.unlock(), Promise.resolve(!0)) : u.isPubFailed ? void o.updateAndroid(2, i.encrypt({ context: this.context, instances: e, sessionId: s.sessionId, shareCode: a.Params.shareCode, accessToken: a.Params.accessToken })) : r.default.state(this.context, e).then(function(e) { return t.onSuccess(), t.unlock(), !0 }).catch(function(e) { return t.onFail(), t.unlock(), !1 }) }, t }();
    e.default = c }, function(t, e) { var n;
    n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) } t.exports = n }]);