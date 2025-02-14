! function(t) { var e = {};

    function i(n) { if (e[n]) return e[n].exports; var r = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports } i.m = t, i.c = e, i.d = function(t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, i.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function(t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) { return t[e] }.bind(null, r)); return n }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i(i.s = 74) }([function(t, e, i) {
    "use strict";
    (function(t, n) {
        i.d(e, "e", function() { return r }), i.d(e, "g", function() { return a }), i.d(e, "f", function() { return o }), i.d(e, "c", function() { return h }), i.d(e, "a", function() { return c }), i.d(e, "b", function() { return l }), i.d(e, "d", function() { return u });
        /*!
         * VERSION: 2.0.2
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        var r = "undefined" != typeof window ? window : t.exports && void 0 !== n ? n : {},
            o = function(t, e) { var i = {},
                    n = t.document,
                    r = t.GreenSockGlobals = t.GreenSockGlobals || t; if (r.TweenLite) return r.TweenLite; var o, a, s, h, c, l, u, p = function(t) { var e, i = t.split("."),
                            n = r; for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {}; return n },
                    f = p("com.greensock"),
                    d = function(t) { var e, i = [],
                            n = t.length; for (e = 0; e !== n; i.push(t[e++])); return i },
                    m = function() {},
                    g = (l = Object.prototype.toString, u = l.call([]), function(t) { return null != t && (t instanceof Array || "object" == typeof t && !!t.push && l.call(t) === u) }),
                    v = {},
                    y = function(t, e, n, o) { this.sc = v[t] ? v[t].sc : [], v[t] = this, this.gsClass = null, this.func = n; var a = [];
                        this.check = function(s) { for (var h, c, l, u, f = e.length, d = f; --f > -1;)(h = v[e[f]] || new y(e[f], [])).gsClass ? (a[f] = h.gsClass, d--) : s && h.sc.push(this); if (0 === d && n)
                                for (l = (c = ("com.greensock." + t).split(".")).pop(), u = p(c.join("."))[l] = this.gsClass = n.apply(n, a), o && (r[l] = i[l] = u), f = 0; f < this.sc.length; f++) this.sc[f].check() }, this.check(!0) },
                    _ = t._gsDefine = function(t, e, i, n) { return new y(t, e, i, n) },
                    x = f._class = function(t, e, i) { return e = e || function() {}, _(t, [], function() { return e }, i), e };
                _.globals = r; var b = [0, 0, 1, 1],
                    w = x("easing.Ease", function(t, e, i, n) { this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? b.concat(e) : b }, !0),
                    T = w.map = {},
                    E = w.register = function(t, e, i, n) { for (var r, o, a, s, h = e.split(","), c = h.length, l = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                            for (o = h[c], r = n ? x("easing." + o, null, !0) : f.easing[o] || {}, a = l.length; --a > -1;) s = l[a], T[o + "." + s] = T[s + o] = r[s] = t.getRatio ? t : t[s] || new t }; for ((s = w.prototype)._calcEnd = !1, s.getRatio = function(t) { if (this._func) return this._params[0] = t, this._func.apply(null, this._params); var e = this._type,
                            i = this._power,
                            n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t); return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2 }, a = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) s = o[a] + ",Power" + a, E(new w(null, null, 1, a), s, "easeOut", !0), E(new w(null, null, 2, a), s, "easeIn" + (0 === a ? ",easeNone" : "")), E(new w(null, null, 3, a), s, "easeInOut");
                T.linear = f.easing.Linear.easeIn, T.swing = f.easing.Quad.easeInOut; var S = x("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
                (s = S.prototype).addEventListener = function(t, e, i, n, r) { r = r || 0; var o, a, s = this._listeners[t],
                        l = 0; for (this !== h || c || h.wake(), null == s && (this._listeners[t] = s = []), a = s.length; --a > -1;)(o = s[a]).c === e && o.s === i ? s.splice(a, 1) : 0 === l && o.pr < r && (l = a + 1);
                    s.splice(l, 0, { c: e, s: i, up: n, pr: r }) }, s.removeEventListener = function(t, e) { var i, n = this._listeners[t]; if (n)
                        for (i = n.length; --i > -1;)
                            if (n[i].c === e) return void n.splice(i, 1) }, s.dispatchEvent = function(t) { var e, i, n, r = this._listeners[t]; if (r)
                        for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, { type: t, target: i }) : n.c.call(n.s || i)) }; var M = t.requestAnimationFrame,
                    A = t.cancelAnimationFrame,
                    L = Date.now || function() { return (new Date).getTime() },
                    C = L(); for (a = (o = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !M;) M = t[o[a] + "RequestAnimationFrame"], A = t[o[a] + "CancelAnimationFrame"] || t[o[a] + "CancelRequestAnimationFrame"];
                x("Ticker", function(t, e) { var i, r, o, a, s, l = this,
                        u = L(),
                        p = !(!1 === e || !M) && "auto",
                        f = 500,
                        d = 33,
                        g = function(t) { var e, n, h = L() - C;
                            h > f && (u += h - d), C += h, l.time = (C - u) / 1e3, e = l.time - s, (!i || e > 0 || !0 === t) && (l.frame++, s += e + (e >= a ? .004 : a - e), n = !0), !0 !== t && (o = r(g)), n && l.dispatchEvent("tick") };
                    S.call(l), l.time = l.frame = 0, l.tick = function() { g(!0) }, l.lagSmoothing = function(t, e) { if (!arguments.length) return f < 1e10;
                        f = t || 1e10, d = Math.min(e, f, 0) }, l.sleep = function() { null != o && (p && A ? A(o) : clearTimeout(o), r = m, o = null, l === h && (c = !1)) }, l.wake = function(t) { null !== o ? l.sleep() : t ? u += -C + (C = L()) : l.frame > 10 && (C = L() - f + 5), r = 0 === i ? m : p && M ? M : function(t) { return setTimeout(t, 1e3 * (s - l.time) + 1 | 0) }, l === h && (c = !0), g(2) }, l.fps = function(t) { if (!arguments.length) return i;
                        a = 1 / ((i = t) || 60), s = this.time + a, l.wake() }, l.useRAF = function(t) { if (!arguments.length) return p;
                        l.sleep(), p = t, l.fps(i) }, l.fps(t), setTimeout(function() { "auto" === p && l.frame < 5 && "hidden" !== (n || {}).visibilityState && l.useRAF(!1) }, 1500) }), (s = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker; var O = x("core.Animation", function(t, e) { if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) { c || h.wake(); var i = this.vars.useFrames ? q : Z;
                        i.add(this, i._time), this.vars.paused && this.paused(!0) } });
                h = O.ticker = new f.Ticker, (s = O.prototype)._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1; var P = function() { c && L() - C > 2e3 && ("hidden" !== (n || {}).visibilityState || !h.lagSmoothing()) && h.wake(); var t = setTimeout(P, 2e3);
                    t.unref && t.unref() };
                P(), s.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, s.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, s.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, s.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, s.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, s.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, s.render = function(t, e, i) {}, s.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this }, s.isActive = function() { var t, e = this._timeline,
                        i = this._startTime; return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7 }, s._enabled = function(t, e) { return c || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, s._kill = function(t, e) { return this._enabled(!1, !1) }, s.kill = function(t, e) { return this._kill(t, e), this }, s._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, s._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, s._callback = function(t) { var e = this.vars,
                        i = e[t],
                        n = e[t + "Params"],
                        r = e[t + "Scope"] || e.callbackScope || this; switch (n ? n.length : 0) {
                        case 0:
                            i.call(r); break;
                        case 1:
                            i.call(r, n[0]); break;
                        case 2:
                            i.call(r, n[0], n[1]); break;
                        default:
                            i.apply(r, n) } }, s.eventCallback = function(t, e, i, n) { if ("on" === (t || "").substr(0, 2)) { var r = this.vars; if (1 === arguments.length) return r[t];
                        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = g(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e) } return this }, s.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, s.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, s.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, s.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, s.totalTime = function(t, e, i) { if (c || h.wake(), !arguments.length) return this._totalTime; if (this._timeline) { if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration(); var n = this._totalDuration,
                                r = this._timeline; if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline } this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (D.length && $(), this.render(t, e, !1), D.length && $()) } return this }, s.progress = s.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, s.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, s.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, s.timeScale = function(t) { if (!arguments.length) return this._timeScale; var e, i; for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline; return this }, s.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, s.paused = function(t) { if (!arguments.length) return this._paused; var e, i, n = this._timeline; return t != this._paused && n && (c || t || h.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this }; var R = x("core.SimpleTimeline", function(t) { O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
                (s = R.prototype = new O).constructor = R, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e, i, n) { var r, o; if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                        for (o = t._startTime; r && r._startTime > o;) r = r._prev; return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this }, s._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, s.render = function(t, e, i) { var n, r = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n }, s.rawTime = function() { return c || h.wake(), this._totalTime }; var I = x("TweenLite", function(e, i, n) { if (O.call(this, i, n), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                        this.target = e = "string" != typeof e ? e : I.selector(e) || e; var r, o, a, s = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                            h = this.vars.overwrite; if (this._overwrite = h = null == h ? Y[I.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (s || e instanceof Array || e.push && g(e)) && "number" != typeof e[0])
                            for (this._targets = a = d(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)(o = a[r]) ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(d(o))) : (this._siblings[r] = K(o, this, !1), 1 === h && this._siblings[r].length > 1 && tt(o, this, null, 1, this._siblings[r])) : "string" == typeof(o = a[r--] = I.selector(o)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                        else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === h && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay))) }, !0),
                    N = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) };
                (s = I.prototype = new O).constructor = I, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, I.version = "2.0.2", I.defaultEase = s._ease = new w(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = h, I.autoSleep = 120, I.lagSmoothing = function(t, e) { h.lagSmoothing(t, e) }, I.selector = t.$ || t.jQuery || function(e) { var i = t.$ || t.jQuery; return i ? (I.selector = i, i(e)) : (n || (n = t.document), n ? n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e) }; var D = [],
                    G = {},
                    k = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    H = /[\+-]=-?[\.\d]/,
                    F = function(t) { for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
                    U = function(t, e, i, n) { var r, o, a, s, h, c, l, u = [],
                            p = 0,
                            f = "",
                            d = 0; for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(k) || [], o = e.match(k) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), h = o.length, s = 0; s < h; s++) l = o[s], f += (c = e.substr(p, e.indexOf(l, p) - p)) || !s ? c : ",", p += c.length, d ? d = (d + 1) % 5 : "rgba(" === c.substr(-5) && (d = 1), l === r[s] || r.length <= s ? f += l : (f && (u.push(f), f = ""), a = parseFloat(r[s]), u.push(a), u._firstPT = { _next: u._firstPT, t: u, p: u.length - 1, s: a, c: ("=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * parseFloat(l.substr(2)) : parseFloat(l) - a) || 0, f: 0, m: d && d < 4 ? Math.round : 0 }), p += l.length; return (f += e.substr(p)) && u.push(f), u.setRatio = F, H.test(e) && (u.end = null), u },
                    B = function(t, e, i, n, r, o, a, s, h) { "function" == typeof n && (n = n(h || 0, t)); var c = typeof t[e],
                            l = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                            u = "get" !== i ? i : l ? a ? t[l](a) : t[l]() : t[e],
                            p = "string" == typeof n && "=" === n.charAt(1),
                            f = { t: t, p: e, s: u, f: "function" === c, pg: 0, n: r || e, m: o ? "function" == typeof o ? o : Math.round : 0, pr: 0, c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0 }; if (("number" != typeof u || "number" != typeof n && !p) && (a || isNaN(u) || !p && isNaN(n) || "boolean" == typeof u || "boolean" == typeof n ? (f.fp = a, f = { t: U(u, p ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : n, s || I.defaultStringFilter, f), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || e, pr: 0, m: 0 }) : (f.s = parseFloat(u), p || (f.c = parseFloat(n) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f },
                    z = I._internals = { isArray: g, isSelector: N, lazyTweens: D, blobDif: U },
                    j = I._plugins = {},
                    V = z.tweenLookup = {},
                    W = 0,
                    X = z.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 },
                    Y = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                    q = O._rootFramesTimeline = new R,
                    Z = O._rootTimeline = new R,
                    J = 30,
                    $ = z.lazyRender = function() { var t, e = D.length; for (G = {}; --e > -1;)(t = D[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                        D.length = 0 };
                Z._startTime = h.time, q._startTime = h.frame, Z._active = q._active = !0, setTimeout($, 1), O._updateRoot = I.render = function() { var t, e, i; if (D.length && $(), Z.render((h.time - Z._startTime) * Z._timeScale, !1, !1), q.render((h.frame - q._startTime) * q._timeScale, !1, !1), D.length && $(), h.frame >= J) { for (i in J = h.frame + (parseInt(I.autoSleep, 10) || 120), V) { for (t = (e = V[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete V[i] } if ((!(i = Z._first) || i._paused) && I.autoSleep && !q._first && 1 === h._listeners.tick.length) { for (; i && i._paused;) i = i._next;
                            i || h.sleep() } } }, h.addEventListener("tick", O._updateRoot); var K = function(t, e, i) { var n, r, o = t._gsTweenID; if (V[o || (t._gsTweenID = o = "t" + W++)] || (V[o] = { target: t, tweens: [] }), e && ((n = V[o].tweens)[r = n.length] = e, i))
                            for (; --r > -1;) n[r] === e && n.splice(r, 1); return V[o].tweens },
                    Q = function(t, e, i, n) { var r, o, a = t.vars.onOverwrite; return a && (r = a(t, e, i, n)), (a = I.onOverwrite) && (o = a(t, e, i, n)), !1 !== r && !1 !== o },
                    tt = function(t, e, i, n, r) { var o, a, s, h; if (1 === n || n >= 4) { for (h = r.length, o = 0; o < h; o++)
                                if ((s = r[o]) !== e) s._gc || s._kill(null, t, e) && (a = !0);
                                else if (5 === n) break; return a } var c, l = e._startTime + 1e-10,
                            u = [],
                            p = 0,
                            f = 0 === e._duration; for (o = r.length; --o > -1;)(s = r[o]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (c = c || et(e, 0, f), 0 === et(s, c, f) && (u[p++] = s)) : s._startTime <= l && s._startTime + s.totalDuration() / s._timeScale > l && ((f || !s._initted) && l - s._startTime <= 2e-10 || (u[p++] = s))); for (o = p; --o > -1;)
                            if (h = (s = u[o])._firstPT, 2 === n && s._kill(i, t, e) && (a = !0), 2 !== n || !s._firstPT && s._initted && h) { if (2 !== n && !Q(s, e)) continue;
                                s._enabled(!1, !1) && (a = !0) } return a },
                    et = function(t, e, i) { for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) { if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                            n = n._timeline } return (o /= r) > e ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : o - e - 1e-10 };
                s._init = function() { var t, e, i, n, r, o, a = this.vars,
                        s = this._overwrittenProps,
                        h = this._duration,
                        c = !!a.immediateRender,
                        l = a.ease; if (a.startAt) { for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, a.startAt) r[n] = a.startAt[n]; if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = I.to(this.target || {}, 0, r), c)
                            if (this._time > 0) this._startAt = null;
                            else if (0 !== h) return } else if (a.runBackwards && 0 !== h)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                        else { for (n in 0 !== this._time && (c = !1), i = {}, a) X[n] && "autoCSS" !== n || (i[n] = a[n]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== a.lazy, i.immediateRender = c, this._startAt = I.to(this.target, 0, i), c) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) } if (this._ease = l = l ? l instanceof w ? l : "function" == typeof l ? new w(l, a.easeParams) : T[l] || I.defaultEase : I.defaultEase, a.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null, t) && (e = !0);
                    else e = this._initProps(this.target, this._propLookup, this._siblings, s, 0); if (e && I._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                        for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                    this._onUpdate = a.onUpdate, this._initted = !0 }, s._initProps = function(e, i, n, r, o) { var a, s, h, c, l, u; if (null == e) return !1; for (a in G[e._gsTweenID] && $(), this.vars.css || e.style && e !== t && e.nodeType && j.css && !1 !== this.vars.autoCSS && function(t, e) { var i, n = {}; for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                            t.css = n }(this.vars, e), this.vars)
                        if (u = this.vars[a], X[a]) u && (u instanceof Array || u.push && g(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                        else if (j[a] && (c = new j[a])._onInitTween(e, this.vars[a], this, o)) { for (this._firstPT = l = { _next: this._firstPT, t: c, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: c._priority, m: 0 }, s = c._overwriteProps.length; --s > -1;) i[c._overwriteProps[s]] = this._firstPT;
                        (c._priority || c._onInitAllProps) && (h = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l) } else i[a] = B.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, o); return r && this._kill(r, e) ? this._initProps(e, i, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && tt(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (G[e._gsTweenID] = !0), h) }, s.render = function(t, e, i) { var n, r, o, a, s = this._time,
                        h = this._duration,
                        c = this._rawPrevTime; if (t >= h - 1e-7 && t >= 0) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (c < 0 || t <= 0 && t >= -1e-7 || 1e-10 === c && "isPause" !== this.data) && c !== t && (i = !0, c > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || c === t ? t : 1e-10);
                    else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === h && c > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-10 !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || c === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                    else if (this._totalTime = this._time = t, this._easeType) { var l = t / h,
                            u = this._easeType,
                            p = this._easePower;
                        (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : t / h < .5 ? l / 2 : 1 - l / 2 } else this.ratio = this._ease.getRatio(t / h); if (this._time !== s || i) { if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = c, D.push(this), void(this._lazy = [t, e]);
                            this._time && !n ? this.ratio = this._ease.getRatio(this._time / h) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== h || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                        this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== s || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === h && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0))) } }, s._kill = function(t, e, i) { if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e; var n, r, o, a, s, h, c, l, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                        f = this._firstPT; if ((g(e) || N(e)) && "number" != typeof e[0])
                        for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (h = !0);
                    else { if (this._targets) { for (n = this._targets.length; --n > -1;)
                                if (e === this._targets[n]) { s = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all"; break } } else { if (e !== this.target) return !1;
                            s = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all" } if (s) { if (c = t || s, l = t !== r && "all" !== r && t !== s && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) { for (o in c) s[o] && (u || (u = []), u.push(o)); if ((u || !t) && !Q(this, i, e, u)) return !1 } for (o in c)(a = s[o]) && (p && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, h = !0), a.pg && a.t._kill(c) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[o]), l && (r[o] = 1);!this._firstPT && this._initted && f && this._enabled(!1, !1) } } return h }, s.invalidate = function() { return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this }, s._enabled = function(t, e) { if (c || h.wake(), t && this._gc) { var i, n = this._targets; if (n)
                            for (i = n.length; --i > -1;) this._siblings[i] = K(n[i], this, !0);
                        else this._siblings = K(this.target, this, !0) } return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) }, I.to = function(t, e, i) { return new I(t, e, i) }, I.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i) }, I.fromTo = function(t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new I(t, e, n) }, I.delayedCall = function(t, e, i, n, r) { return new I(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 }) }, I.set = function(t, e) { return new I(t, 0, e) }, I.getTweensOf = function(t, e) { if (null == t) return []; var i, n, r, o; if (t = "string" != typeof t ? t : I.selector(t) || t, (g(t) || N(t)) && "number" != typeof t[0]) { for (i = t.length, n = []; --i > -1;) n = n.concat(I.getTweensOf(t[i], e)); for (i = n.length; --i > -1;)
                            for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1) } else if (t._gsTweenID)
                        for (i = (n = K(t).concat()).length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1); return n || [] }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var n = I.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t) }; var it = x("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype }, !0); if (s = it.prototype, it.version = "1.19.0", it.API = 2, s._firstPT = null, s._addTween = B, s.setRatio = F, s._kill = function(t) { var e, i = this._overwriteProps,
                            n = this._firstPT; if (null != t[this._propName]) this._overwriteProps = [];
                        else
                            for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1); for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next; return !1 }, s._mod = s._roundProps = function(t) { for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next }, I._onPluginEvent = function(t, e) { var i, n, r, o, a, s = e._firstPT; if ("_onInitAllProps" === t) { for (; s;) { for (a = s._next, n = r; n && n.pr > s.pr;) n = n._next;
                                (s._prev = n ? n._prev : o) ? s._prev._next = s: r = s, (s._next = n) ? n._prev = s : o = s, s = a } s = e._firstPT = r } for (; s;) s.pg && "function" == typeof s.t[t] && s.t[t]() && (i = !0), s = s._next; return i }, it.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === it.API && (j[(new t[e])._propName] = t[e]); return !0 }, _.plugin = function(t) { if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition."; var e, i = t.propName,
                            n = t.priority || 0,
                            r = t.overwriteProps,
                            o = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                            a = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { it.call(this, i, n), this._overwriteProps = r || [] }, !0 === t.global),
                            s = a.prototype = new it(i); for (e in s.constructor = a, a.API = t.API, o) "function" == typeof t[e] && (s[o[e]] = t[e]); return a.version = t.version, it.activate([a]), a }, o = t._gsQueue) { for (a = 0; a < o.length; a++) o[a](); for (s in v) v[s].func || t.console.log("GSAP encountered missing dependency: " + s) } return c = !1, I }(r),
            a = r.GreenSockGlobals,
            s = a.com.greensock,
            h = s.core.SimpleTimeline,
            c = s.core.Animation,
            l = a.Ease,
            u = (a.Linear, a.Power1, a.Power2, a.Power3, a.Power4, a.TweenPlugin);
        s.events.EventDispatcher
    }).call(this, i(85)(t), i(86))
}, function(t, e) { var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = i) }, function(t, e, i) { var n = i(36)("wks"),
        r = i(16),
        o = i(1).Symbol,
        a = "function" == typeof o;
    (t.exports = function(t) { return n[t] || (n[t] = a && o[t] || (a ? o : r)("Symbol." + t)) }).store = n }, function(t, e) {
    function i() {} i.prototype = { on: function(t, e, i) { var n = this.e || (this.e = {}); return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this }, once: function(t, e, i) { var n = this;

            function r() { n.off(t, r), e.apply(i, arguments) } return r._ = e, this.on(t, r, i) }, emit: function(t) { for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, e); return this }, off: function(t, e) { var i = this.e || (this.e = {}),
                n = i[t],
                r = []; if (n && e)
                for (var o = 0, a = n.length; o < a; o++) n[o].fn !== e && n[o].fn._ !== e && r.push(n[o]); return r.length ? i[t] = r : delete i[t], this } }, t.exports = i }, function(t, e, i) { var n = i(9),
        r = i(47),
        o = i(24),
        a = Object.defineProperty;
    e.f = i(6) ? Object.defineProperty : function(t, e, i) { if (n(t), e = o(e, !0), n(i), r) try { return a(t, e, i) } catch (t) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!"); return "value" in i && (t[e] = i.value), t } }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e, i) { t.exports = !i(12)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(t, e, i) { var n = i(4),
        r = i(25);
    t.exports = i(6) ? function(t, e, i) { return n.f(t, e, r(1, i)) } : function(t, e, i) { return t[e] = i, t } }, function(t, e, i) { i(45)("asyncIterator") }, function(t, e, i) { var n = i(5);
    t.exports = function(t) { if (!n(t)) throw TypeError(t + " is not an object!"); return t } }, function(t, e, i) { "use strict"; var n = i(1),
        r = i(11),
        o = i(6),
        a = i(19),
        s = i(20),
        h = i(76).KEY,
        c = i(12),
        l = i(36),
        u = i(26),
        p = i(16),
        f = i(2),
        d = i(46),
        m = i(45),
        g = i(77),
        v = i(52),
        y = i(9),
        _ = i(5),
        x = i(21),
        b = i(24),
        w = i(25),
        T = i(34),
        E = i(79),
        S = i(35),
        M = i(4),
        A = i(32),
        L = S.f,
        C = M.f,
        O = E.f,
        P = n.Symbol,
        R = n.JSON,
        I = R && R.stringify,
        N = f("_hidden"),
        D = f("toPrimitive"),
        G = {}.propertyIsEnumerable,
        k = l("symbol-registry"),
        H = l("symbols"),
        F = l("op-symbols"),
        U = Object.prototype,
        B = "function" == typeof P,
        z = n.QObject,
        j = !z || !z.prototype || !z.prototype.findChild,
        V = o && c(function() { return 7 != T(C({}, "a", { get: function() { return C(this, "a", { value: 7 }).a } })).a }) ? function(t, e, i) { var n = L(U, e);
            n && delete U[e], C(t, e, i), n && t !== U && C(U, e, n) } : C,
        W = function(t) { var e = H[t] = T(P.prototype); return e._k = t, e },
        X = B && "symbol" == typeof P.iterator ? function(t) { return "symbol" == typeof t } : function(t) { return t instanceof P },
        Y = function(t, e, i) { return t === U && Y(F, e, i), y(t), e = b(e, !0), y(i), r(H, e) ? (i.enumerable ? (r(t, N) && t[N][e] && (t[N][e] = !1), i = T(i, { enumerable: w(0, !1) })) : (r(t, N) || C(t, N, w(1, {})), t[N][e] = !0), V(t, e, i)) : C(t, e, i) },
        q = function(t, e) { y(t); for (var i, n = g(e = x(e)), r = 0, o = n.length; o > r;) Y(t, i = n[r++], e[i]); return t },
        Z = function(t) { var e = G.call(this, t = b(t, !0)); return !(this === U && r(H, t) && !r(F, t)) && (!(e || !r(this, t) || !r(H, t) || r(this, N) && this[N][t]) || e) },
        J = function(t, e) { if (t = x(t), e = b(e, !0), t !== U || !r(H, e) || r(F, e)) { var i = L(t, e); return !i || !r(H, e) || r(t, N) && t[N][e] || (i.enumerable = !0), i } },
        $ = function(t) { for (var e, i = O(x(t)), n = [], o = 0; i.length > o;) r(H, e = i[o++]) || e == N || e == h || n.push(e); return n },
        K = function(t) { for (var e, i = t === U, n = O(i ? F : x(t)), o = [], a = 0; n.length > a;) !r(H, e = n[a++]) || i && !r(U, e) || o.push(H[e]); return o };
    B || (s((P = function() { if (this instanceof P) throw TypeError("Symbol is not a constructor!"); var t = p(arguments.length > 0 ? arguments[0] : void 0),
            e = function(i) { this === U && e.call(F, i), r(this, N) && r(this[N], t) && (this[N][t] = !1), V(this, t, w(1, i)) }; return o && j && V(U, t, { configurable: !0, set: e }), W(t) }).prototype, "toString", function() { return this._k }), S.f = J, M.f = Y, i(28).f = E.f = $, i(41).f = Z, i(51).f = K, o && !i(15) && s(U, "propertyIsEnumerable", Z, !0), d.f = function(t) { return W(f(t)) }), a(a.G + a.W + a.F * !B, { Symbol: P }); for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Q.length > tt;) f(Q[tt++]); for (var et = A(f.store), it = 0; et.length > it;) m(et[it++]);
    a(a.S + a.F * !B, "Symbol", { for: function(t) { return r(k, t += "") ? k[t] : k[t] = P(t) }, keyFor: function(t) { if (!X(t)) throw TypeError(t + " is not a symbol!"); for (var e in k)
                if (k[e] === t) return e }, useSetter: function() { j = !0 }, useSimple: function() { j = !1 } }), a(a.S + a.F * !B, "Object", { create: function(t, e) { return void 0 === e ? T(t) : q(T(t), e) }, defineProperty: Y, defineProperties: q, getOwnPropertyDescriptor: J, getOwnPropertyNames: $, getOwnPropertySymbols: K }), R && a(a.S + a.F * (!B || c(function() { var t = P(); return "[null]" != I([t]) || "{}" != I({ a: t }) || "{}" != I(Object(t)) })), "JSON", { stringify: function(t) { for (var e, i, n = [t], r = 1; arguments.length > r;) n.push(arguments[r++]); if (i = e = n[1], (_(e) || void 0 !== t) && !X(t)) return v(e) || (e = function(t, e) { if ("function" == typeof i && (e = i.call(this, t, e)), !X(e)) return e }), n[1] = e, I.apply(R, n) } }), P.prototype[D] || i(7)(P.prototype, D, P.prototype.valueOf), u(P, "Symbol"), u(Math, "Math", !0), u(n.JSON, "JSON", !0) }, function(t, e) { var i = {}.hasOwnProperty;
    t.exports = function(t, e) { return i.call(t, e) } }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e, i) { var n = i(27),
        r = Math.min;
    t.exports = function(t) { return t > 0 ? r(n(t), 9007199254740991) : 0 } }, function(t, e, i) { var n = i(19);
    n(n.S, "Object", { setPrototypeOf: i(56).set }) }, function(t, e) { t.exports = !1 }, function(t, e) { var i = 0,
        n = Math.random();
    t.exports = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36)) } }, function(t, e, i) { var n = i(31);
    t.exports = function(t, e, i) { if (n(t), void 0 === e) return t; switch (i) {
            case 1:
                return function(i) { return t.call(e, i) };
            case 2:
                return function(i, n) { return t.call(e, i, n) };
            case 3:
                return function(i, n, r) { return t.call(e, i, n, r) } } return function() { return t.apply(e, arguments) } } }, function(t, e) { var i = t.exports = { version: "2.6.2" }; "number" == typeof __e && (__e = i) }, function(t, e, i) { var n = i(1),
        r = i(18),
        o = i(7),
        a = i(20),
        s = i(17),
        h = function(t, e, i) { var c, l, u, p, f = t & h.F,
                d = t & h.G,
                m = t & h.S,
                g = t & h.P,
                v = t & h.B,
                y = d ? n : m ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
                _ = d ? r : r[e] || (r[e] = {}),
                x = _.prototype || (_.prototype = {}); for (c in d && (i = e), i) u = ((l = !f && y && void 0 !== y[c]) ? y : i)[c], p = v && l ? s(u, n) : g && "function" == typeof u ? s(Function.call, u) : u, y && a(y, c, u, t & h.U), _[c] != u && o(_, c, p), g && x[c] != u && (x[c] = u) };
    n.core = r, h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, h.U = 64, h.R = 128, t.exports = h }, function(t, e, i) { var n = i(1),
        r = i(7),
        o = i(11),
        a = i(16)("src"),
        s = Function.toString,
        h = ("" + s).split("toString");
    i(18).inspectSource = function(t) { return s.call(t) }, (t.exports = function(t, e, i, s) { var c = "function" == typeof i;
        c && (o(i, "name") || r(i, "name", e)), t[e] !== i && (c && (o(i, a) || r(i, a, t[e] ? "" + t[e] : h.join(String(e)))), t === n ? t[e] = i : s ? t[e] ? t[e] = i : r(t, e, i) : (delete t[e], r(t, e, i))) })(Function.prototype, "toString", function() { return "function" == typeof this && this[a] || s.call(this) }) }, function(t, e, i) { var n = i(49),
        r = i(38);
    t.exports = function(t) { return n(r(t)) } }, function(t, e) { var i = {}.toString;
    t.exports = function(t) { return i.call(t).slice(8, -1) } }, function(t, e) { t.exports = {} }, function(t, e, i) { var n = i(5);
    t.exports = function(t, e) { if (!n(t)) return t; var i, r; if (e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r; if ("function" == typeof(i = t.valueOf) && !n(r = i.call(t))) return r; if (!e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r; throw TypeError("Can't convert object to primitive value") } }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, i) { var n = i(4).f,
        r = i(11),
        o = i(2)("toStringTag");
    t.exports = function(t, e, i) { t && !r(t = i ? t : t.prototype, o) && n(t, o, { configurable: !0, value: e }) } }, function(t, e) { var i = Math.ceil,
        n = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t) } }, function(t, e, i) { var n = i(48),
        r = i(40).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) { return n(t, r) } }, function(t, e, i) { var n = i(38);
    t.exports = function(t) { return Object(n(t)) } }, function(t, e, i) { var n, r, o;! function(i) { var a = /iPhone/i,
            s = /iPod/i,
            h = /iPad/i,
            c = /\bAndroid(?:.+)Mobile\b/i,
            l = /Android/i,
            u = /\bAndroid(?:.+)SD4930UR\b/i,
            p = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
            f = /Windows Phone/i,
            d = /\bWindows(?:.+)ARM\b/i,
            m = /BlackBerry/i,
            g = /BB10/i,
            v = /Opera Mini/i,
            y = /\b(CriOS|Chrome)(?:.+)Mobile/i,
            _ = /\Mobile(?:.+)Firefox\b/i;

        function x(t, e) { return t.test(e) }

        function b(t) { var e = t || ("undefined" != typeof navigator ? navigator.userAgent : ""),
                i = e.split("[FBAN");
            void 0 !== i[1] && (e = i[0]), void 0 !== (i = e.split("Twitter"))[1] && (e = i[0]); var n = { apple: { phone: x(a, e) && !x(f, e), ipod: x(s, e), tablet: !x(a, e) && x(h, e) && !x(f, e), device: (x(a, e) || x(s, e) || x(h, e)) && !x(f, e) }, amazon: { phone: x(u, e), tablet: !x(u, e) && x(p, e), device: x(u, e) || x(p, e) }, android: { phone: !x(f, e) && x(u, e) || !x(f, e) && x(c, e), tablet: !x(f, e) && !x(u, e) && !x(c, e) && (x(p, e) || x(l, e)), device: !x(f, e) && (x(u, e) || x(p, e) || x(c, e) || x(l, e)) }, windows: { phone: x(f, e), tablet: x(d, e), device: x(f, e) || x(d, e) }, other: { blackberry: x(m, e), blackberry10: x(g, e), opera: x(v, e), firefox: x(_, e), chrome: x(y, e), device: x(m, e) || x(g, e) || x(v, e) || x(_, e) || x(y, e) } }; return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n } t.exports && "undefined" == typeof window ? t.exports = b : t.exports && "undefined" != typeof window ? t.exports = b() : (r = [], n = i.isMobile = b(), void 0 === (o = "function" == typeof n ? n.apply(e, r) : n) || (t.exports = o)) }(this) }, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, e, i) { var n = i(48),
        r = i(40);
    t.exports = Object.keys || function(t) { return n(t, r) } }, function(t, e, i) { var n = i(27),
        r = Math.max,
        o = Math.min;
    t.exports = function(t, e) { return (t = n(t)) < 0 ? r(t + e, 0) : o(t, e) } }, function(t, e, i) { var n = i(9),
        r = i(78),
        o = i(40),
        a = i(39)("IE_PROTO"),
        s = function() {},
        h = function() { var t, e = i(37)("iframe"),
                n = o.length; for (e.style.display = "none", i(53).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), h = t.F; n--;) delete h.prototype[o[n]]; return h() };
    t.exports = Object.create || function(t, e) { var i; return null !== t ? (s.prototype = n(t), i = new s, s.prototype = null, i[a] = t) : i = h(), void 0 === e ? i : r(i, e) } }, function(t, e, i) { var n = i(41),
        r = i(25),
        o = i(21),
        a = i(24),
        s = i(11),
        h = i(47),
        c = Object.getOwnPropertyDescriptor;
    e.f = i(6) ? c : function(t, e) { if (t = o(t), e = a(e, !0), h) try { return c(t, e) } catch (t) {}
        if (s(t, e)) return r(!n.f.call(t, e), t[e]) } }, function(t, e, i) { var n = i(18),
        r = i(1),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (t.exports = function(t, e) { return o[t] || (o[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: n.version, mode: i(15) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(t, e, i) { var n = i(5),
        r = i(1).document,
        o = n(r) && n(r.createElement);
    t.exports = function(t) { return o ? r.createElement(t) : {} } }, function(t, e) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on  " + t); return t } }, function(t, e, i) { var n = i(36)("keys"),
        r = i(16);
    t.exports = function(t) { return n[t] || (n[t] = r(t)) } }, function(t, e) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(t, e) { e.f = {}.propertyIsEnumerable }, function(t, e, i) { var n = i(22),
        r = i(2)("toStringTag"),
        o = "Arguments" == n(function() { return arguments }());
    t.exports = function(t) { var e, i, a; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) { try { return t[e] } catch (t) {} }(e = Object(t), r)) ? i : o ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments" : a } }, function(t, e) { t.exports = function(t, e, i, n) { if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!"); return t } }, function(t, e, i) { var n = i(20);
    t.exports = function(t, e, i) { for (var r in e) n(t, r, e[r], i); return t } }, function(t, e, i) { var n = i(1),
        r = i(18),
        o = i(15),
        a = i(46),
        s = i(4).f;
    t.exports = function(t) { var e = r.Symbol || (r.Symbol = o ? {} : n.Symbol || {}); "_" == t.charAt(0) || t in e || s(e, t, { value: a.f(t) }) } }, function(t, e, i) { e.f = i(2) }, function(t, e, i) { t.exports = !i(6) && !i(12)(function() { return 7 != Object.defineProperty(i(37)("div"), "a", { get: function() { return 7 } }).a }) }, function(t, e, i) { var n = i(11),
        r = i(21),
        o = i(50)(!1),
        a = i(39)("IE_PROTO");
    t.exports = function(t, e) { var i, s = r(t),
            h = 0,
            c = []; for (i in s) i != a && n(s, i) && c.push(i); for (; e.length > h;) n(s, i = e[h++]) && (~o(c, i) || c.push(i)); return c } }, function(t, e, i) { var n = i(22);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == n(t) ? t.split("") : Object(t) } }, function(t, e, i) { var n = i(21),
        r = i(13),
        o = i(33);
    t.exports = function(t) { return function(e, i, a) { var s, h = n(e),
                c = r(h.length),
                l = o(a, c); if (t && i != i) { for (; c > l;)
                    if ((s = h[l++]) != s) return !0 } else
                for (; c > l; l++)
                    if ((t || l in h) && h[l] === i) return t || l || 0; return !t && -1 } } }, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, i) { var n = i(22);
    t.exports = Array.isArray || function(t) { return "Array" == n(t) } }, function(t, e, i) { var n = i(1).document;
    t.exports = n && n.documentElement }, function(t, e, i) { "use strict"; var n = i(81),
        r = i(82),
        o = i(23),
        a = i(21);
    t.exports = i(83)(Array, "Array", function(t, e) { this._t = a(t), this._i = 0, this._k = e }, function() { var t = this._t,
            e = this._k,
            i = this._i++; return !t || i >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]]) }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries") }, function(t, e, i) { var n = i(11),
        r = i(29),
        o = i(39)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) { return t = r(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null } }, function(t, e, i) { var n = i(5),
        r = i(9),
        o = function(t, e) { if (r(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!") };
    t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, n) { try {
                (n = i(17)(Function.call, i(35).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array) } catch (t) { e = !0 } return function(t, i) { return o(t, i), e ? t.__proto__ = i : n(t, i), t } }({}, !1) : void 0), check: o } }, function(t, e, i) { var n = i(23),
        r = i(2)("iterator"),
        o = Array.prototype;
    t.exports = function(t) { return void 0 !== t && (n.Array === t || o[r] === t) } }, function(t, e, i) { var n = i(42),
        r = i(2)("iterator"),
        o = i(23);
    t.exports = i(18).getIteratorMethod = function(t) { if (null != t) return t[r] || t["@@iterator"] || o[n(t)] } }, function(t, e, i) { var n = i(9),
        r = i(31),
        o = i(2)("species");
    t.exports = function(t, e) { var i, a = n(t).constructor; return void 0 === a || null == (i = n(a)[o]) ? e : r(i) } }, function(t, e, i) { var n, r, o, a = i(17),
        s = i(94),
        h = i(53),
        c = i(37),
        l = i(1),
        u = l.process,
        p = l.setImmediate,
        f = l.clearImmediate,
        d = l.MessageChannel,
        m = l.Dispatch,
        g = 0,
        v = {},
        y = function() { var t = +this; if (v.hasOwnProperty(t)) { var e = v[t];
                delete v[t], e() } },
        _ = function(t) { y.call(t.data) };
    p && f || (p = function(t) { for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]); return v[++g] = function() { s("function" == typeof t ? t : Function(t), e) }, n(g), g }, f = function(t) { delete v[t] }, "process" == i(22)(u) ? n = function(t) { u.nextTick(a(y, t, 1)) } : m && m.now ? n = function(t) { m.now(a(y, t, 1)) } : d ? (o = (r = new d).port2, r.port1.onmessage = _, n = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function(t) { l.postMessage(t + "", "*") }, l.addEventListener("message", _, !1)) : n = "onreadystatechange" in c("script") ? function(t) { h.appendChild(c("script")).onreadystatechange = function() { h.removeChild(this), y.call(t) } } : function(t) { setTimeout(a(y, t, 1), 0) }), t.exports = { set: p, clear: f } }, function(t, e, i) { "use strict"; var n = i(31);

    function r(t) { var e, i;
        this.promise = new t(function(t, n) { if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
            e = t, i = n }), this.resolve = n(e), this.reject = n(i) } t.exports.f = function(t) { return new r(t) } }, function(t, e, i) { "use strict"; var n = i(1),
        r = i(4),
        o = i(6),
        a = i(2)("species");
    t.exports = function(t) { var e = n[t];
        o && e && !e[a] && r.f(e, a, { configurable: !0, get: function() { return this } }) } }, function(t, e, i) { var n = i(2)("iterator"),
        r = !1; try { var o = [7][n]();
        o.return = function() { r = !0 }, Array.from(o, function() { throw 2 }) } catch (t) {} t.exports = function(t, e) { if (!e && !r) return !1; var i = !1; try { var o = [7],
                a = o[n]();
            a.next = function() { return { done: i = !0 } }, o[n] = function() { return a }, t(o) } catch (t) {} return i } }, function(t, e, i) { "use strict"; var n = i(100).EventEmitter;

    function r() { n.call(this), this.setMaxListeners(20) } r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.prototype.off = function(t, e) { return e ? this.removeListener(t, e) : t ? this.removeAllListeners(t) : this.removeAllListeners() }, t.exports = r }, function(t, e, i) { "use strict";
    t.exports = { mbs: 0, secs: 0, update: function(t, e, i, n) { var r, o = t.getAllResponseHeaders(); if (o) { var a = o.match(/content-length: (\d+)/i);
                a && a.length && (r = a[1]) } if (r) { var s = (r = parseInt(r, 10)) / 1024 / 1024,
                    h = (Date.now() - e) / 1e3;
                this.secs += h, this.mbs += s, n && this.log(i, s, h) } else n && console.warn.call(console, "Can't get Content-Length:", i) }, log: function(t, e, i) { if (t) { var n = "File loaded: " + t.substr(t.lastIndexOf("/") + 1) + " size:" + e.toFixed(2) + "mb time:" + i.toFixed(2) + "s speed:" + (e / i).toFixed(2) + "mbps";
                console.log.call(console, n) } var r = "Total loaded: " + this.mbs.toFixed(2) + "mb time:" + this.secs.toFixed(2) + "s speed:" + this.getMbps().toFixed(2) + "mbps";
            console.log.call(console, r) }, getMbps: function() { return this.mbs / this.secs } } }, function(t, e, i) { for (var n, r = i(1), o = i(7), a = i(16), s = a("typed_array"), h = a("view"), c = !(!r.ArrayBuffer || !r.DataView), l = c, u = 0, p = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); u < 9;)(n = r[p[u++]]) ? (o(n.prototype, s, !0), o(n.prototype, h, !0)) : l = !1;
    t.exports = { ABV: c, CONSTR: l, TYPED: s, VIEW: h } }, function(t, e, i) { var n = i(27),
        r = i(13);
    t.exports = function(t) { if (void 0 === t) return 0; var e = n(t),
            i = r(e); if (e !== i) throw RangeError("Wrong length!"); return i } }, function(t, e, i) { "use strict"; var n = i(29),
        r = i(33),
        o = i(13);
    t.exports = function(t) { for (var e = n(this), i = o(e.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, i), h = a > 2 ? arguments[2] : void 0, c = void 0 === h ? i : r(h, i); c > s;) e[s++] = t; return e } }, function(t, e, i) {
    var n, r;
    r = this, void 0 === (n = function() {
        return r.svg4everybody = function() {
            /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
            function t(t, e, i) { if (i) { var n = document.createDocumentFragment(),
                        r = !e.hasAttribute("viewBox") && i.getAttribute("viewBox");
                    r && e.setAttribute("viewBox", r); for (var o = i.cloneNode(!0); o.childNodes.length;) n.appendChild(o.firstChild);
                    t.appendChild(n) } }

            function e(e) { e.onreadystatechange = function() { if (4 === e.readyState) { var i = e._cachedDocument;
                        i || ((i = e._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(function(n) { var r = e._cachedTarget[n.id];
                            r || (r = e._cachedTarget[n.id] = i.getElementById(n.id)), t(n.parent, n.svg, r) }) } }, e.onreadystatechange() }

            function i(t) { for (var e = t;
                    "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode);); return e }
            return function(n) { var r, o = Object(n),
                    a = window.top !== window.self;
                r = "polyfill" in o ? o.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && a; var s = {},
                    h = window.requestAnimationFrame || setTimeout,
                    c = document.getElementsByTagName("use"),
                    l = 0;
                r && function n() { for (var a = 0; a < c.length;) { var u = c[a],
                            p = u.parentNode,
                            f = i(p),
                            d = u.getAttribute("xlink:href") || u.getAttribute("href"); if (!d && o.attributeName && (d = u.getAttribute(o.attributeName)), f && d) { if (r)
                                if (!o.validate || o.validate(d, f, u)) { p.removeChild(u); var m = d.split("#"),
                                        g = m.shift(),
                                        v = m.join("#"); if (g.length) { var y = s[g];
                                        y || ((y = s[g] = new XMLHttpRequest).open("GET", g), y.send(), y._embeds = []), y._embeds.push({ parent: p, svg: f, id: v }), e(y) } else t(p, f, document.getElementById(v)) } else ++a, ++l } else ++a }(!c.length || c.length - l > 0) && h(n, 67) }() }
        }()
    }.apply(e, [])) || (t.exports = n)
}, function(t, e, i) { "use strict";
    /*! npm.im/object-fit-images 3.2.3 */
    var n = "bfred-it:object-fit-images",
        r = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        o = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image,
        a = "object-fit" in o.style,
        s = "object-position" in o.style,
        h = "background-size" in o.style,
        c = "string" == typeof o.currentSrc,
        l = o.getAttribute,
        u = o.setAttribute,
        p = !1;

    function f(t, e, i) { var n = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E";
        l.call(t, "src") !== n && u.call(t, "src", n) }

    function d(t, e) { t.naturalWidth ? e(t) : setTimeout(d, 100, t, e) }

    function m(t) { var e = function(t) { for (var e, i = getComputedStyle(t).fontFamily, n = {}; null !== (e = r.exec(i));) n[e[1]] = e[2]; return n }(t),
            i = t[n]; if (e["object-fit"] = e["object-fit"] || "fill", !i.img) { if ("fill" === e["object-fit"]) return; if (!i.skipTest && a && !e["object-position"]) return } if (!i.img) { i.img = new Image(t.width, t.height), i.img.srcset = l.call(t, "data-ofi-srcset") || t.srcset, i.img.src = l.call(t, "data-ofi-src") || t.src, u.call(t, "data-ofi-src", t.src), t.srcset && u.call(t, "data-ofi-srcset", t.srcset), f(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = ""); try {! function(t) { var e = { get: function(e) { return t[n].img[e || "src"] }, set: function(e, i) { return t[n].img[i || "src"] = e, u.call(t, "data-ofi-" + i, e), m(t), e } };
                    Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", { get: function() { return e.get("currentSrc") } }), Object.defineProperty(t, "srcset", { get: function() { return e.get("srcset") }, set: function(t) { return e.set(t, "srcset") } }) }(t) } catch (t) { window.console && console.warn("https://bit.ly/ofi-old-browser") } }! function(t) { if (t.srcset && !c && window.picturefill) { var e = window.picturefill._;
                t[e.ns] && t[e.ns].evaled || e.fillImg(t, { reselect: !0 }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, { reselect: !0 })), t.currentSrc = t[e.ns].curSrc || t.src } }(i.img), t.style.backgroundImage = 'url("' + (i.img.currentSrc || i.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = e["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(e["object-fit"]) ? d(i.img, function() { i.img.naturalWidth > t.width || i.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto" }) : t.style.backgroundSize = e["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), d(i.img, function(e) { f(t, e.naturalWidth, e.naturalHeight) }) }

    function g(t, e) { var i = !p && !t; if (e = e || {}, t = t || "img", s && !e.skipTest || !h) return !1; "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]); for (var r = 0; r < t.length; r++) t[r][n] = t[r][n] || { skipTest: e.skipTest }, m(t[r]);
        i && (document.body.addEventListener("load", function(t) { "IMG" === t.target.tagName && g(t.target, { skipTest: e.skipTest }) }, !0), p = !0, t = "img"), e.watchMQ && window.addEventListener("resize", g.bind(null, t, { skipTest: e.skipTest })) } g.supportsObjectFit = a, g.supportsObjectPosition = s,
        function() {
            function t(t, e) { return t[n] && t[n].img && ("src" === e || "srcset" === e) ? t[n].img : t } s || (HTMLImageElement.prototype.getAttribute = function(e) { return l.call(t(this, e), e) }, HTMLImageElement.prototype.setAttribute = function(e, i) { return u.call(t(this, e), e, String(i)) }) }(), t.exports = g }, function(t, e) { t.exports = function() { navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? window.console.log.apply(console, ["\n %c Made with ♥ by ForestryGames %c %c %c https://www.forestrygames.com %c %c \n", "color: #fff; background: #e43333; padding:5px 0;", "background: #131419; padding:5px 0;", "background: #131419; padding:5px 0;", "color: #fff; background: #1c1c1c; padding:5px 0;", "background: #fff; padding:5px 0;", "color: #e43333; background: #fff; padding:5px 0;"]) : window.console && window.console.log("Made with love ♥ Forestry Games - http://www.forestrygames.com") } }, function(t, e, i) { "use strict"; var n = i(99);
    n.stats = i(65), t.exports = n }, function(t, e, i) { var n, r;
    r = "undefined" != typeof window ? window : this, void 0 === (n = function() { return function(t, e) { "use strict";

            function i(i) { if (this.hasDeviceMotion = "ondevicemotion" in t, this.options = { threshold: 15, timeout: 1e3 }, "object" == typeof i)
                    for (var n in i) i.hasOwnProperty(n) && (this.options[n] = i[n]); if (this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null, "function" == typeof e.CustomEvent) this.event = new e.CustomEvent("shake", { bubbles: !0, cancelable: !0 });
                else { if ("function" != typeof e.createEvent) return !1;
                    this.event = e.createEvent("Event"), this.event.initEvent("shake", !0, !0) } } return i.prototype.reset = function() { this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null }, i.prototype.start = function() { this.reset(), this.hasDeviceMotion && t.addEventListener("devicemotion", this, !1) }, i.prototype.stop = function() { this.hasDeviceMotion && t.removeEventListener("devicemotion", this, !1), this.reset() }, i.prototype.devicemotion = function(e) { var i, n, r, o = e.accelerationIncludingGravity; if (null === this.lastX && null === this.lastY && null === this.lastZ) return this.lastX = o.x, this.lastY = o.y, void(this.lastZ = o.z);
                i = Math.abs(this.lastX - o.x), n = Math.abs(this.lastY - o.y), r = Math.abs(this.lastZ - o.z), (i > this.options.threshold && n > this.options.threshold || i > this.options.threshold && r > this.options.threshold || n > this.options.threshold && r > this.options.threshold) && (new Date).getTime() - this.lastTime.getTime() > this.options.timeout && (t.dispatchEvent(this.event), this.lastTime = new Date), this.lastX = o.x, this.lastY = o.y, this.lastZ = o.z }, i.prototype.handleEvent = function(t) { if ("function" == typeof this[t.type]) return this[t.type](t) }, i }(r, r.document) }.call(e, i, e, t)) || (t.exports = n) }, function(t, e, i) { t.exports = i(111) }, function(t, e) {! function(t) { "use strict"; if (!t.fetch) { var e = { searchParams: "URLSearchParams" in t, iterable: "Symbol" in t && "iterator" in Symbol, blob: "FileReader" in t && "Blob" in t && function() { try { return new Blob, !0 } catch (t) { return !1 } }(), formData: "FormData" in t, arrayBuffer: "ArrayBuffer" in t }; if (e.arrayBuffer) var i = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                n = function(t) { return t && DataView.prototype.isPrototypeOf(t) },
                r = ArrayBuffer.isView || function(t) { return t && i.indexOf(Object.prototype.toString.call(t)) > -1 };
            l.prototype.append = function(t, e) { t = s(t), e = h(e); var i = this.map[t];
                this.map[t] = i ? i + "," + e : e }, l.prototype.delete = function(t) { delete this.map[s(t)] }, l.prototype.get = function(t) { return t = s(t), this.has(t) ? this.map[t] : null }, l.prototype.has = function(t) { return this.map.hasOwnProperty(s(t)) }, l.prototype.set = function(t, e) { this.map[s(t)] = h(e) }, l.prototype.forEach = function(t, e) { for (var i in this.map) this.map.hasOwnProperty(i) && t.call(e, this.map[i], i, this) }, l.prototype.keys = function() { var t = []; return this.forEach(function(e, i) { t.push(i) }), c(t) }, l.prototype.values = function() { var t = []; return this.forEach(function(e) { t.push(e) }), c(t) }, l.prototype.entries = function() { var t = []; return this.forEach(function(e, i) { t.push([i, e]) }), c(t) }, e.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries); var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            g.prototype.clone = function() { return new g(this, { body: this._bodyInit }) }, m.call(g.prototype), m.call(y.prototype), y.prototype.clone = function() { return new y(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new l(this.headers), url: this.url }) }, y.error = function() { var t = new y(null, { status: 0, statusText: "" }); return t.type = "error", t }; var a = [301, 302, 303, 307, 308];
            y.redirect = function(t, e) { if (-1 === a.indexOf(e)) throw new RangeError("Invalid status code"); return new y(null, { status: e, headers: { location: t } }) }, t.Headers = l, t.Request = g, t.Response = y, t.fetch = function(t, i) { return new Promise(function(n, r) { var o = new g(t, i),
                        a = new XMLHttpRequest;
                    a.onload = function() { var t, e, i = { status: a.status, statusText: a.statusText, headers: (t = a.getAllResponseHeaders() || "", e = new l, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) { var i = t.split(":"),
                                    n = i.shift().trim(); if (n) { var r = i.join(":").trim();
                                    e.append(n, r) } }), e) };
                        i.url = "responseURL" in a ? a.responseURL : i.headers.get("X-Request-URL"); var r = "response" in a ? a.response : a.responseText;
                        n(new y(r, i)) }, a.onerror = function() { r(new TypeError("Network request failed")) }, a.ontimeout = function() { r(new TypeError("Network request failed")) }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && e.blob && (a.responseType = "blob"), o.headers.forEach(function(t, e) { a.setRequestHeader(e, t) }), a.send(void 0 === o._bodyInit ? null : o._bodyInit) }) }, t.fetch.polyfill = !0 }

        function s(t) { if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name"); return t.toLowerCase() }

        function h(t) { return "string" != typeof t && (t = String(t)), t }

        function c(t) { var i = { next: function() { var e = t.shift(); return { done: void 0 === e, value: e } } }; return e.iterable && (i[Symbol.iterator] = function() { return i }), i }

        function l(t) { this.map = {}, t instanceof l ? t.forEach(function(t, e) { this.append(e, t) }, this) : Array.isArray(t) ? t.forEach(function(t) { this.append(t[0], t[1]) }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) { this.append(e, t[e]) }, this) }

        function u(t) { if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0 }

        function p(t) { return new Promise(function(e, i) { t.onload = function() { e(t.result) }, t.onerror = function() { i(t.error) } }) }

        function f(t) { var e = new FileReader,
                i = p(e); return e.readAsArrayBuffer(t), i }

        function d(t) { if (t.slice) return t.slice(0); var e = new Uint8Array(t.byteLength); return e.set(new Uint8Array(t)), e.buffer }

        function m() { return this.bodyUsed = !1, this._initBody = function(t) { if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (e.arrayBuffer && e.blob && n(t)) this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else { if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !r(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = d(t) } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, e.blob && (this.blob = function() { var t = u(this); if (t) return t; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(f) }), this.text = function() { var t, e, i, n = u(this); if (n) return n; if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, i = p(e), e.readAsText(t), i; if (this._bodyArrayBuffer) return Promise.resolve(function(t) { for (var e = new Uint8Array(t), i = new Array(e.length), n = 0; n < e.length; n++) i[n] = String.fromCharCode(e[n]); return i.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, e.formData && (this.formData = function() { return this.text().then(v) }), this.json = function() { return this.text().then(JSON.parse) }, this }

        function g(t, e) { var i, n, r = (e = e || {}).body; if (t instanceof g) { if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new l(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0) } else this.url = String(t); if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new l(e.headers)), this.method = (i = e.method || this.method || "GET", n = i.toUpperCase(), o.indexOf(n) > -1 ? n : i), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r) }

        function v(t) { var e = new FormData; return t.trim().split("&").forEach(function(t) { if (t) { var i = t.split("="),
                        n = i.shift().replace(/\+/g, " "),
                        r = i.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(r)) } }), e }

        function y(t, e) { e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new l(e.headers), this.url = e.url || "", this._initBody(t) } }("undefined" != typeof self ? self : this) }, function(t, e, i) { var n = i(16)("meta"),
        r = i(5),
        o = i(11),
        a = i(4).f,
        s = 0,
        h = Object.isExtensible || function() { return !0 },
        c = !i(12)(function() { return h(Object.preventExtensions({})) }),
        l = function(t) { a(t, n, { value: { i: "O" + ++s, w: {} } }) },
        u = t.exports = { KEY: n, NEED: !1, fastKey: function(t, e) { if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!o(t, n)) { if (!h(t)) return "F"; if (!e) return "E";
                    l(t) } return t[n].i }, getWeak: function(t, e) { if (!o(t, n)) { if (!h(t)) return !0; if (!e) return !1;
                    l(t) } return t[n].w }, onFreeze: function(t) { return c && u.NEED && h(t) && !o(t, n) && l(t), t } } }, function(t, e, i) { var n = i(32),
        r = i(51),
        o = i(41);
    t.exports = function(t) { var e = n(t),
            i = r.f; if (i)
            for (var a, s = i(t), h = o.f, c = 0; s.length > c;) h.call(t, a = s[c++]) && e.push(a); return e } }, function(t, e, i) { var n = i(4),
        r = i(9),
        o = i(32);
    t.exports = i(6) ? Object.defineProperties : function(t, e) { r(t); for (var i, a = o(e), s = a.length, h = 0; s > h;) n.f(t, i = a[h++], e[i]); return t } }, function(t, e, i) { var n = i(21),
        r = i(28).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) { return a && "[object Window]" == o.call(t) ? function(t) { try { return r(t) } catch (t) { return a.slice() } }(t) : r(n(t)) } }, function(t, e, i) { for (var n = i(54), r = i(32), o = i(20), a = i(1), s = i(7), h = i(23), c = i(2), l = c("iterator"), u = c("toStringTag"), p = h.Array, f = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, d = r(f), m = 0; m < d.length; m++) { var g, v = d[m],
            y = f[v],
            _ = a[v],
            x = _ && _.prototype; if (x && (x[l] || s(x, l, p), x[u] || s(x, u, v), h[v] = p, y))
            for (g in n) x[g] || o(x, g, n[g], !0) } }, function(t, e, i) { var n = i(2)("unscopables"),
        r = Array.prototype;
    null == r[n] && i(7)(r, n, {}), t.exports = function(t) { r[n][t] = !0 } }, function(t, e) { t.exports = function(t, e) { return { value: e, done: !!t } } }, function(t, e, i) { "use strict"; var n = i(15),
        r = i(19),
        o = i(20),
        a = i(7),
        s = i(23),
        h = i(84),
        c = i(26),
        l = i(55),
        u = i(2)("iterator"),
        p = !([].keys && "next" in [].keys()),
        f = function() { return this };
    t.exports = function(t, e, i, d, m, g, v) { h(i, e, d); var y, _, x, b = function(t) { if (!p && t in S) return S[t]; switch (t) {
                    case "keys":
                    case "values":
                        return function() { return new i(this, t) } } return function() { return new i(this, t) } },
            w = e + " Iterator",
            T = "values" == m,
            E = !1,
            S = t.prototype,
            M = S[u] || S["@@iterator"] || m && S[m],
            A = M || b(m),
            L = m ? T ? b("entries") : A : void 0,
            C = "Array" == e && S.entries || M; if (C && (x = l(C.call(new t))) !== Object.prototype && x.next && (c(x, w, !0), n || "function" == typeof x[u] || a(x, u, f)), T && M && "values" !== M.name && (E = !0, A = function() { return M.call(this) }), n && !v || !p && !E && S[u] || a(S, u, A), s[e] = A, s[w] = f, m)
            if (y = { values: T ? A : b("values"), keys: g ? A : b("keys"), entries: L }, v)
                for (_ in y) _ in S || o(S, _, y[_]);
            else r(r.P + r.F * (p || E), e, y); return y } }, function(t, e, i) { "use strict"; var n = i(34),
        r = i(25),
        o = i(26),
        a = {};
    i(7)(a, i(2)("iterator"), function() { return this }), t.exports = function(t, e, i) { t.prototype = n(a, { next: r(1, i) }), o(t, e + " Iterator") } }, function(t, e) { t.exports = function(t) { if (!t.webpackPolyfill) { var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), Object.defineProperty(e, "exports", { enumerable: !0 }), e.webpackPolyfill = 1 } return e } }, function(t, e) { var i;
    i = function() { return this }(); try { i = i || new Function("return this")() } catch (t) { "object" == typeof window && (i = window) } t.exports = i }, function(t, e, i) { "use strict"; var n = i(1),
        r = i(11),
        o = i(22),
        a = i(88),
        s = i(24),
        h = i(12),
        c = i(28).f,
        l = i(35).f,
        u = i(4).f,
        p = i(89).trim,
        f = n.Number,
        d = f,
        m = f.prototype,
        g = "Number" == o(i(34)(m)),
        v = "trim" in String.prototype,
        y = function(t) { var e = s(t, !1); if ("string" == typeof e && e.length > 2) { var i, n, r, o = (e = v ? e.trim() : p(e, 3)).charCodeAt(0); if (43 === o || 45 === o) { if (88 === (i = e.charCodeAt(2)) || 120 === i) return NaN } else if (48 === o) { switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            n = 2, r = 49; break;
                        case 79:
                        case 111:
                            n = 8, r = 55; break;
                        default:
                            return +e } for (var a, h = e.slice(2), c = 0, l = h.length; c < l; c++)
                        if ((a = h.charCodeAt(c)) < 48 || a > r) return NaN; return parseInt(h, n) } } return +e }; if (!f(" 0o1") || !f("0b1") || f("+0x1")) { f = function(t) { var e = arguments.length < 1 ? 0 : t,
                i = this; return i instanceof f && (g ? h(function() { m.valueOf.call(i) }) : "Number" != o(i)) ? a(new d(y(e)), i, f) : y(e) }; for (var _, x = i(6) ? c(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; x.length > b; b++) r(d, _ = x[b]) && !r(f, _) && u(f, _, l(d, _));
        f.prototype = m, m.constructor = f, i(20)(n, "Number", f) } }, function(t, e, i) { var n = i(5),
        r = i(56).set;
    t.exports = function(t, e, i) { var o, a = e.constructor; return a !== i && "function" == typeof a && (o = a.prototype) !== i.prototype && n(o) && r && r(t, o), t } }, function(t, e, i) { var n = i(19),
        r = i(38),
        o = i(12),
        a = i(90),
        s = "[" + a + "]",
        h = RegExp("^" + s + s + "*"),
        c = RegExp(s + s + "*$"),
        l = function(t, e, i) { var r = {},
                s = o(function() { return !!a[t]() || "​" != "​" [t]() }),
                h = r[t] = s ? e(u) : a[t];
            i && (r[i] = h), n(n.P + n.F * s, "String", r) },
        u = l.trim = function(t, e) { return t = String(r(t)), 1 & e && (t = t.replace(h, "")), 2 & e && (t = t.replace(c, "")), t };
    t.exports = l }, function(t, e) { t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff" }, function(t, e, i) { "use strict"; var n, r, o, a, s = i(15),
        h = i(1),
        c = i(17),
        l = i(42),
        u = i(19),
        p = i(5),
        f = i(31),
        d = i(43),
        m = i(92),
        g = i(59),
        v = i(60).set,
        y = i(95)(),
        _ = i(61),
        x = i(96),
        b = i(97),
        w = i(98),
        T = h.TypeError,
        E = h.process,
        S = E && E.versions,
        M = S && S.v8 || "",
        A = h.Promise,
        L = "process" == l(E),
        C = function() {},
        O = r = _.f,
        P = !! function() { try { var t = A.resolve(1),
                    e = (t.constructor = {})[i(2)("species")] = function(t) { t(C, C) }; return (L || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof e && 0 !== M.indexOf("6.6") && -1 === b.indexOf("Chrome/66") } catch (t) {} }(),
        R = function(t) { var e; return !(!p(t) || "function" != typeof(e = t.then)) && e },
        I = function(t, e) { if (!t._n) { t._n = !0; var i = t._c;
                y(function() { for (var n = t._v, r = 1 == t._s, o = 0, a = function(e) { var i, o, a, s = r ? e.ok : e.fail,
                                h = e.resolve,
                                c = e.reject,
                                l = e.domain; try { s ? (r || (2 == t._h && G(t), t._h = 1), !0 === s ? i = n : (l && l.enter(), i = s(n), l && (l.exit(), a = !0)), i === e.promise ? c(T("Promise-chain cycle")) : (o = R(i)) ? o.call(i, h, c) : h(i)) : c(n) } catch (t) { l && !a && l.exit(), c(t) } }; i.length > o;) a(i[o++]);
                    t._c = [], t._n = !1, e && !t._h && N(t) }) } },
        N = function(t) { v.call(h, function() { var e, i, n, r = t._v,
                    o = D(t); if (o && (e = x(function() { L ? E.emit("unhandledRejection", r, t) : (i = h.onunhandledrejection) ? i({ promise: t, reason: r }) : (n = h.console) && n.error && n.error("Unhandled promise rejection", r) }), t._h = L || D(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v }) },
        D = function(t) { return 1 !== t._h && 0 === (t._a || t._c).length },
        G = function(t) { v.call(h, function() { var e;
                L ? E.emit("rejectionHandled", t) : (e = h.onrejectionhandled) && e({ promise: t, reason: t._v }) }) },
        k = function(t) { var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0)) },
        H = function(t) { var e, i = this; if (!i._d) { i._d = !0, i = i._w || i; try { if (i === t) throw T("Promise can't be resolved itself");
                    (e = R(t)) ? y(function() { var n = { _w: i, _d: !1 }; try { e.call(t, c(H, n, 1), c(k, n, 1)) } catch (t) { k.call(n, t) } }): (i._v = t, i._s = 1, I(i, !1)) } catch (t) { k.call({ _w: i, _d: !1 }, t) } } };
    P || (A = function(t) { d(this, A, "Promise", "_h"), f(t), n.call(this); try { t(c(H, this, 1), c(k, this, 1)) } catch (t) { k.call(this, t) } }, (n = function(t) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = i(44)(A.prototype, { then: function(t, e) { var i = O(g(this, A)); return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = L ? E.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && I(this, !1), i.promise }, catch: function(t) { return this.then(void 0, t) } }), o = function() { var t = new n;
        this.promise = t, this.resolve = c(H, t, 1), this.reject = c(k, t, 1) }, _.f = O = function(t) { return t === A || t === a ? new o(t) : r(t) }), u(u.G + u.W + u.F * !P, { Promise: A }), i(26)(A, "Promise"), i(62)("Promise"), a = i(18).Promise, u(u.S + u.F * !P, "Promise", { reject: function(t) { var e = O(this); return (0, e.reject)(t), e.promise } }), u(u.S + u.F * (s || !P), "Promise", { resolve: function(t) { return w(s && this === a ? A : this, t) } }), u(u.S + u.F * !(P && i(63)(function(t) { A.all(t).catch(C) })), "Promise", { all: function(t) { var e = this,
                i = O(e),
                n = i.resolve,
                r = i.reject,
                o = x(function() { var i = [],
                        o = 0,
                        a = 1;
                    m(t, !1, function(t) { var s = o++,
                            h = !1;
                        i.push(void 0), a++, e.resolve(t).then(function(t) { h || (h = !0, i[s] = t, --a || n(i)) }, r) }), --a || n(i) }); return o.e && r(o.v), i.promise }, race: function(t) { var e = this,
                i = O(e),
                n = i.reject,
                r = x(function() { m(t, !1, function(t) { e.resolve(t).then(i.resolve, n) }) }); return r.e && n(r.v), i.promise } }) }, function(t, e, i) { var n = i(17),
        r = i(93),
        o = i(57),
        a = i(9),
        s = i(13),
        h = i(58),
        c = {},
        l = {};
    (e = t.exports = function(t, e, i, u, p) { var f, d, m, g, v = p ? function() { return t } : h(t),
            y = n(i, u, e ? 2 : 1),
            _ = 0; if ("function" != typeof v) throw TypeError(t + " is not iterable!"); if (o(v)) { for (f = s(t.length); f > _; _++)
                if ((g = e ? y(a(d = t[_])[0], d[1]) : y(t[_])) === c || g === l) return g } else
            for (m = v.call(t); !(d = m.next()).done;)
                if ((g = r(m, y, d.value, e)) === c || g === l) return g }).BREAK = c, e.RETURN = l }, function(t, e, i) { var n = i(9);
    t.exports = function(t, e, i, r) { try { return r ? e(n(i)[0], i[1]) : e(i) } catch (e) { var o = t.return; throw void 0 !== o && n(o.call(t)), e } } }, function(t, e) { t.exports = function(t, e, i) { var n = void 0 === i; switch (e.length) {
            case 0:
                return n ? t() : t.call(i);
            case 1:
                return n ? t(e[0]) : t.call(i, e[0]);
            case 2:
                return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
            case 3:
                return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
            case 4:
                return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3]) } return t.apply(i, e) } }, function(t, e, i) { var n = i(1),
        r = i(60).set,
        o = n.MutationObserver || n.WebKitMutationObserver,
        a = n.process,
        s = n.Promise,
        h = "process" == i(22)(a);
    t.exports = function() { var t, e, i, c = function() { var n, r; for (h && (n = a.domain) && n.exit(); t;) { r = t.fn, t = t.next; try { r() } catch (n) { throw t ? i() : e = void 0, n } } e = void 0, n && n.enter() }; if (h) i = function() { a.nextTick(c) };
        else if (!o || n.navigator && n.navigator.standalone)
            if (s && s.resolve) { var l = s.resolve(void 0);
                i = function() { l.then(c) } } else i = function() { r.call(n, c) };
        else { var u = !0,
                p = document.createTextNode("");
            new o(c).observe(p, { characterData: !0 }), i = function() { p.data = u = !u } } return function(n) { var r = { fn: n, next: void 0 };
            e && (e.next = r), t || (t = r, i()), e = r } } }, function(t, e) { t.exports = function(t) { try { return { e: !1, v: t() } } catch (t) { return { e: !0, v: t } } } }, function(t, e, i) { var n = i(1).navigator;
    t.exports = n && n.userAgent || "" }, function(t, e, i) { var n = i(9),
        r = i(5),
        o = i(61);
    t.exports = function(t, e) { if (n(t), r(e) && e.constructor === t) return e; var i = o.f(t); return (0, i.resolve)(e), i.promise } }, function(t, e, i) { "use strict"; var n = i(64),
        r = i(101),
        o = 0;
    t.exports = function t(e) { var i, a = {},
            s = [],
            h = [],
            c = 0,
            l = 0,
            u = {},
            p = function(n) { return Array.isArray(n) ? (n.forEach(p), i) : ((o = !!n.assets && Array.isArray(n.assets) ? t(d(n, e)) : r(d(n, e))).once("destroy", y), h.push(o), u[o.id] = o, i); var o },
            f = function(t) { return arguments.length ? a[t] ? a[t] : u[t] : s },
            d = function(t, e) { "string" == typeof t && (t = { url: t }); return void 0 === t.isTouchLocked && (t.isTouchLocked = e.isTouchLocked), void 0 === t.blob && (t.blob = e.blob), void 0 === t.basePath && (t.basePath = e.basePath), t.id = t.id || t.url || String(++o), t.type = t.type || function(t) { return t && t.split("?")[0].split(".").pop().toLowerCase() }(t.url), t.crossOrigin = t.crossOrigin || e.crossOrigin, t.webAudioContext = t.webAudioContext || e.webAudioContext, t.log = e.log, t },
            m = function(t) { var e = c + t;
                i.emit("progress", e / l) },
            g = function(t, e, n) { Array.isArray(t) && (t = { id: e, file: t, type: n }), c++, i.emit("progress", c / l), a[t.id] = t.file, s.push(t), i.emit("childcomplete", t), _() },
            v = function(t) { l--, i.listeners("error").length ? i.emit("error", t) : console.error(t), _() },
            y = function(t) { u[t] = null, delete u[t], a[t] = null, delete a[t], s.some(function(e, i) { if (e.id === t) return s.splice(i, 1), !0 }) },
            _ = function() { c >= l && i.emit("complete", s, a, e.id, "group") }; return i = Object.create(n.prototype, { _events: { value: {} }, id: { get: function() { return e.id } }, add: { value: p }, start: { value: function() { return l = h.length, h.forEach(function(t) { t.on("progress", m).once("complete", g).once("error", v).start() }), h = [], i } }, get: { value: f }, find: { value: function(t) { if (f(t)) return f(t); var e = null; return Object.keys(u).some(function(i) { return !!(e = u[i].find && u[i].find(t)) }), e } }, getLoader: { value: function(t) { return u[t] } }, loaded: { get: function() { return c >= l } }, file: { get: function() { return s } }, destroy: { value: function() { for (; h.length;) h.pop().destroy(); return i.off("error"), i.off("progress"), i.off("complete"), s = [], a = {}, e.webAudioContext = null, l = 0, c = 0, Object.keys(u).forEach(function(t) { u[t].destroy() }), u = {}, i.emit("destroy", i.id), i } } }), e = d(e || {}, { basePath: "", blob: !1, touchLocked: !1, crossOrigin: null, webAudioContext: null, log: !1 }), Array.isArray(e.assets) && p(e.assets), Object.freeze(i) } }, function(t, e) {
    function i() { this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0 }

    function n(t) { return "function" == typeof t }

    function r(t) { return "object" == typeof t && null !== t }

    function o(t) { return void 0 === t } t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(t) { if ("number" != typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number"); return this._maxListeners = t, this }, i.prototype.emit = function(t) { var e, i, a, s, h, c; if (this._events || (this._events = {}), "error" === t && (!this._events.error || r(this._events.error) && !this._events.error.length)) { if ((e = arguments[1]) instanceof Error) throw e; var l = new Error('Uncaught, unspecified "error" event. (' + e + ")"); throw l.context = e, l } if (o(i = this._events[t])) return !1; if (n(i)) switch (arguments.length) {
            case 1:
                i.call(this); break;
            case 2:
                i.call(this, arguments[1]); break;
            case 3:
                i.call(this, arguments[1], arguments[2]); break;
            default:
                s = Array.prototype.slice.call(arguments, 1), i.apply(this, s) } else if (r(i))
            for (s = Array.prototype.slice.call(arguments, 1), a = (c = i.slice()).length, h = 0; h < a; h++) c[h].apply(this, s); return !0 }, i.prototype.addListener = function(t, e) { var a; if (!n(e)) throw TypeError("listener must be a function"); return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, n(e.listener) ? e.listener : e), this._events[t] ? r(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, r(this._events[t]) && !this._events[t].warned && (a = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[t].length > a && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this }, i.prototype.on = i.prototype.addListener, i.prototype.once = function(t, e) { if (!n(e)) throw TypeError("listener must be a function"); var i = !1;

        function r() { this.removeListener(t, r), i || (i = !0, e.apply(this, arguments)) } return r.listener = e, this.on(t, r), this }, i.prototype.removeListener = function(t, e) { var i, o, a, s; if (!n(e)) throw TypeError("listener must be a function"); if (!this._events || !this._events[t]) return this; if (a = (i = this._events[t]).length, o = -1, i === e || n(i.listener) && i.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
        else if (r(i)) { for (s = a; s-- > 0;)
                if (i[s] === e || i[s].listener && i[s].listener === e) { o = s; break } if (o < 0) return this;
            1 === i.length ? (i.length = 0, delete this._events[t]) : i.splice(o, 1), this._events.removeListener && this.emit("removeListener", t, e) } return this }, i.prototype.removeAllListeners = function(t) { var e, i; if (!this._events) return this; if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this; if (0 === arguments.length) { for (e in this._events) "removeListener" !== e && this.removeAllListeners(e); return this.removeAllListeners("removeListener"), this._events = {}, this } if (n(i = this._events[t])) this.removeListener(t, i);
        else if (i)
            for (; i.length;) this.removeListener(t, i[i.length - 1]); return delete this._events[t], this }, i.prototype.listeners = function(t) { return this._events && this._events[t] ? n(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [] }, i.prototype.listenerCount = function(t) { if (this._events) { var e = this._events[t]; if (n(e)) return 1; if (e) return e.length } return 0 }, i.listenerCount = function(t, e) { return t.listenerCount(e) } }, function(t, e, i) { "use strict"; var n = i(64),
        r = i(102),
        o = i(65);
    t.exports = function(t) { var e, i, a, s, h, c, l = t.id,
            u = t.basePath || "",
            p = t.url,
            f = t.type,
            d = t.crossOrigin,
            m = t.isTouchLocked,
            g = t.blob && r,
            v = t.webAudioContext,
            y = t.log,
            _ = function(t) { t && (c = { id: l, file: t, type: f }, e.emit("progress", 1), e.emit("complete", c, l, f), D()) },
            x = function(t, e) { i = e || w, (a = new XMLHttpRequest).open("GET", u + p, !0), a.responseType = t, a.addEventListener("progress", b), a.addEventListener("load", i), a.addEventListener("error", N), a.send() },
            b = function(t) { t.lengthComputable && e.emit("progress", t.loaded / t.total) },
            w = function() { T() && _(a.response) },
            T = function() { return a && a.status < 400 ? (o.update(a, s, p, y), !0) : (N(a && a.statusText), !1) },
            E = function() { x("json", function() { if (T()) { var t = a.response; "string" == typeof t && (t = JSON.parse(t)), _(t) } }) },
            S = function() { g ? L() : M() },
            M = function() { a = new Image, d && (a.crossOrigin = "anonymous"), a.addEventListener("error", N, !1), a.addEventListener("load", A, !1), a.src = u + p },
            A = function(t) { window.clearTimeout(h), t || !a.error && a.readyState ? _(a) : N() },
            L = function() { x("blob", function() { T() && ((a = new Image).addEventListener("error", N, !1), a.addEventListener("load", C, !1), a.src = window.URL.createObjectURL(a.response)) }) },
            C = function() { window.URL.revokeObjectURL(a.src), _(a) },
            O = function() { v ? R() : I("audio") },
            P = function() { g ? x("blob") : I("video") },
            R = function() { x("arraybuffer", function() { T() && v.decodeAudioData(a.response, function(t) { a = null, _(t) }, function(t) { N(t) }) }) },
            I = function(t) { a = document.createElement(t), m || (window.clearTimeout(h), h = window.setTimeout(A, 2e3), a.addEventListener("canplaythrough", A, !1)), a.addEventListener("error", N, !1), a.preload = "auto", a.src = u + p, a.load(), m && _(a) },
            N = function(t) { window.clearTimeout(h); var i = t; if (a && a.tagName && a.error) { i = "MediaError: " + ["", "ABORTED", "NETWORK", "DECODE", "SRC_NOT_SUPPORTED"][a.error.code] + " " + a.src } else a && a.statusText ? i = a.statusText : t && t.message ? i = t.message : t && t.type && (i = t.type);
                e.emit("error", 'Error loading "' + u + p + '" ' + i), G() },
            D = function() { e.off("error"), e.off("progress"), e.off("complete"), a && (a.removeEventListener("progress", b), a.removeEventListener("load", i), a.removeEventListener("error", N), a.removeEventListener("load", A), a.removeEventListener("canplaythrough", A), a.removeEventListener("load", C)) },
            G = function() { D(), a && a.abort && a.readyState < 4 && a.abort(), a = null, v = null, c = null, window.clearTimeout(h), e.emit("destroy", l) }; return e = Object.create(n.prototype, { _events: { value: {} }, id: { value: t.id }, start: { value: function() { switch (s = Date.now(), f) {
                        case "json":
                            E(); break;
                        case "jpg":
                        case "png":
                        case "gif":
                        case "webp":
                        case "svg":
                            S(); break;
                        case "mp3":
                        case "ogg":
                        case "opus":
                        case "wav":
                        case "m4a":
                            O(); break;
                        case "ogv":
                        case "mp4":
                        case "webm":
                        case "hls":
                            P(); break;
                        case "bin":
                        case "binary":
                            x("arraybuffer"); break;
                        case "txt":
                        case "text":
                            x("text"); break;
                        default:
                            throw "AssetsLoader ERROR: Unknown type for file with URL: " + u + p + " (" + f + ")" } } }, loaded: { get: function() { return !!c } }, file: { get: function() { return c } }, destroy: { value: G } }), Object.freeze(e) } }, function(t, e, i) { "use strict";
    t.exports = function() { try { return !!new Blob } catch (t) { return !1 } }() }, function(t, e, i) { var n = i(4).f,
        r = Function.prototype,
        o = /^\s*function ([^ (]*)/; "name" in r || i(6) && n(r, "name", { configurable: !0, get: function() { try { return ("" + this).match(o)[1] } catch (t) { return "" } } }) }, function(t, e, i) { i(105)("Float32", 4, function(t) { return function(e, i, n) { return t(this, e, i, n) } }) }, function(t, e, i) { "use strict"; if (i(6)) { var n = i(15),
            r = i(1),
            o = i(12),
            a = i(19),
            s = i(66),
            h = i(106),
            c = i(17),
            l = i(43),
            u = i(25),
            p = i(7),
            f = i(44),
            d = i(27),
            m = i(13),
            g = i(67),
            v = i(33),
            y = i(24),
            _ = i(11),
            x = i(42),
            b = i(5),
            w = i(29),
            T = i(57),
            E = i(34),
            S = i(55),
            M = i(28).f,
            A = i(58),
            L = i(16),
            C = i(2),
            O = i(107),
            P = i(50),
            R = i(59),
            I = i(54),
            N = i(23),
            D = i(63),
            G = i(62),
            k = i(68),
            H = i(110),
            F = i(4),
            U = i(35),
            B = F.f,
            z = U.f,
            j = r.RangeError,
            V = r.TypeError,
            W = r.Uint8Array,
            X = Array.prototype,
            Y = h.ArrayBuffer,
            q = h.DataView,
            Z = O(0),
            J = O(2),
            $ = O(3),
            K = O(4),
            Q = O(5),
            tt = O(6),
            et = P(!0),
            it = P(!1),
            nt = I.values,
            rt = I.keys,
            ot = I.entries,
            at = X.lastIndexOf,
            st = X.reduce,
            ht = X.reduceRight,
            ct = X.join,
            lt = X.sort,
            ut = X.slice,
            pt = X.toString,
            ft = X.toLocaleString,
            dt = C("iterator"),
            mt = C("toStringTag"),
            gt = L("typed_constructor"),
            vt = L("def_constructor"),
            yt = s.CONSTR,
            _t = s.TYPED,
            xt = s.VIEW,
            bt = O(1, function(t, e) { return Mt(R(t, t[vt]), e) }),
            wt = o(function() { return 1 === new W(new Uint16Array([1]).buffer)[0] }),
            Tt = !!W && !!W.prototype.set && o(function() { new W(1).set({}) }),
            Et = function(t, e) { var i = d(t); if (i < 0 || i % e) throw j("Wrong offset!"); return i },
            St = function(t) { if (b(t) && _t in t) return t; throw V(t + " is not a typed array!") },
            Mt = function(t, e) { if (!(b(t) && gt in t)) throw V("It is not a typed array constructor!"); return new t(e) },
            At = function(t, e) { return Lt(R(t, t[vt]), e) },
            Lt = function(t, e) { for (var i = 0, n = e.length, r = Mt(t, n); n > i;) r[i] = e[i++]; return r },
            Ct = function(t, e, i) { B(t, e, { get: function() { return this._d[i] } }) },
            Ot = function(t) { var e, i, n, r, o, a, s = w(t),
                    h = arguments.length,
                    l = h > 1 ? arguments[1] : void 0,
                    u = void 0 !== l,
                    p = A(s); if (null != p && !T(p)) { for (a = p.call(s), n = [], e = 0; !(o = a.next()).done; e++) n.push(o.value);
                    s = n } for (u && h > 2 && (l = c(l, arguments[2], 2)), e = 0, i = m(s.length), r = Mt(this, i); i > e; e++) r[e] = u ? l(s[e], e) : s[e]; return r },
            Pt = function() { for (var t = 0, e = arguments.length, i = Mt(this, e); e > t;) i[t] = arguments[t++]; return i },
            Rt = !!W && o(function() { ft.call(new W(1)) }),
            It = function() { return ft.apply(Rt ? ut.call(St(this)) : St(this), arguments) },
            Nt = { copyWithin: function(t, e) { return H.call(St(this), t, e, arguments.length > 2 ? arguments[2] : void 0) }, every: function(t) { return K(St(this), t, arguments.length > 1 ? arguments[1] : void 0) }, fill: function(t) { return k.apply(St(this), arguments) }, filter: function(t) { return At(this, J(St(this), t, arguments.length > 1 ? arguments[1] : void 0)) }, find: function(t) { return Q(St(this), t, arguments.length > 1 ? arguments[1] : void 0) }, findIndex: function(t) { return tt(St(this), t, arguments.length > 1 ? arguments[1] : void 0) }, forEach: function(t) { Z(St(this), t, arguments.length > 1 ? arguments[1] : void 0) }, indexOf: function(t) { return it(St(this), t, arguments.length > 1 ? arguments[1] : void 0) }, includes: function(t) { return et(St(this), t, arguments.length > 1 ? arguments[1] : void 0) }, join: function(t) { return ct.apply(St(this), arguments) }, lastIndexOf: function(t) { return at.apply(St(this), arguments) }, map: function(t) { return bt(St(this), t, arguments.length > 1 ? arguments[1] : void 0) }, reduce: function(t) { return st.apply(St(this), arguments) }, reduceRight: function(t) { return ht.apply(St(this), arguments) }, reverse: function() { for (var t, e = St(this).length, i = Math.floor(e / 2), n = 0; n < i;) t = this[n], this[n++] = this[--e], this[e] = t; return this }, some: function(t) { return $(St(this), t, arguments.length > 1 ? arguments[1] : void 0) }, sort: function(t) { return lt.call(St(this), t) }, subarray: function(t, e) { var i = St(this),
                        n = i.length,
                        r = v(t, n); return new(R(i, i[vt]))(i.buffer, i.byteOffset + r * i.BYTES_PER_ELEMENT, m((void 0 === e ? n : v(e, n)) - r)) } },
            Dt = function(t, e) { return At(this, ut.call(St(this), t, e)) },
            Gt = function(t) { St(this); var e = Et(arguments[1], 1),
                    i = this.length,
                    n = w(t),
                    r = m(n.length),
                    o = 0; if (r + e > i) throw j("Wrong length!"); for (; o < r;) this[e + o] = n[o++] },
            kt = { entries: function() { return ot.call(St(this)) }, keys: function() { return rt.call(St(this)) }, values: function() { return nt.call(St(this)) } },
            Ht = function(t, e) { return b(t) && t[_t] && "symbol" != typeof e && e in t && String(+e) == String(e) },
            Ft = function(t, e) { return Ht(t, e = y(e, !0)) ? u(2, t[e]) : z(t, e) },
            Ut = function(t, e, i) { return !(Ht(t, e = y(e, !0)) && b(i) && _(i, "value")) || _(i, "get") || _(i, "set") || i.configurable || _(i, "writable") && !i.writable || _(i, "enumerable") && !i.enumerable ? B(t, e, i) : (t[e] = i.value, t) };
        yt || (U.f = Ft, F.f = Ut), a(a.S + a.F * !yt, "Object", { getOwnPropertyDescriptor: Ft, defineProperty: Ut }), o(function() { pt.call({}) }) && (pt = ft = function() { return ct.call(this) }); var Bt = f({}, Nt);
        f(Bt, kt), p(Bt, dt, kt.values), f(Bt, { slice: Dt, set: Gt, constructor: function() {}, toString: pt, toLocaleString: It }), Ct(Bt, "buffer", "b"), Ct(Bt, "byteOffset", "o"), Ct(Bt, "byteLength", "l"), Ct(Bt, "length", "e"), B(Bt, mt, { get: function() { return this[_t] } }), t.exports = function(t, e, i, h) { var c = t + ((h = !!h) ? "Clamped" : "") + "Array",
                u = "get" + t,
                f = "set" + t,
                d = r[c],
                v = d || {},
                y = d && S(d),
                _ = !d || !s.ABV,
                w = {},
                T = d && d.prototype,
                A = function(t, i) { B(t, i, { get: function() { return function(t, i) { var n = t._d; return n.v[u](i * e + n.o, wt) }(this, i) }, set: function(t) { return function(t, i, n) { var r = t._d;
                                h && (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), r.v[f](i * e + r.o, n, wt) }(this, i, t) }, enumerable: !0 }) };
            _ ? (d = i(function(t, i, n, r) { l(t, d, c, "_d"); var o, a, s, h, u = 0,
                    f = 0; if (b(i)) { if (!(i instanceof Y || "ArrayBuffer" == (h = x(i)) || "SharedArrayBuffer" == h)) return _t in i ? Lt(d, i) : Ot.call(d, i);
                    o = i, f = Et(n, e); var v = i.byteLength; if (void 0 === r) { if (v % e) throw j("Wrong length!"); if ((a = v - f) < 0) throw j("Wrong length!") } else if ((a = m(r) * e) + f > v) throw j("Wrong length!");
                    s = a / e } else s = g(i), o = new Y(a = s * e); for (p(t, "_d", { b: o, o: f, l: a, e: s, v: new q(o) }); u < s;) A(t, u++) }), T = d.prototype = E(Bt), p(T, "constructor", d)) : o(function() { d(1) }) && o(function() { new d(-1) }) && D(function(t) { new d, new d(null), new d(1.5), new d(t) }, !0) || (d = i(function(t, i, n, r) { var o; return l(t, d, c), b(i) ? i instanceof Y || "ArrayBuffer" == (o = x(i)) || "SharedArrayBuffer" == o ? void 0 !== r ? new v(i, Et(n, e), r) : void 0 !== n ? new v(i, Et(n, e)) : new v(i) : _t in i ? Lt(d, i) : Ot.call(d, i) : new v(g(i)) }), Z(y !== Function.prototype ? M(v).concat(M(y)) : M(v), function(t) { t in d || p(d, t, v[t]) }), d.prototype = T, n || (T.constructor = d)); var L = T[dt],
                C = !!L && ("values" == L.name || null == L.name),
                O = kt.values;
            p(d, gt, !0), p(T, _t, c), p(T, xt, !0), p(T, vt, d), (h ? new d(1)[mt] == c : mt in T) || B(T, mt, { get: function() { return c } }), w[c] = d, a(a.G + a.W + a.F * (d != v), w), a(a.S, c, { BYTES_PER_ELEMENT: e }), a(a.S + a.F * o(function() { v.of.call(d, 1) }), c, { from: Ot, of: Pt }), "BYTES_PER_ELEMENT" in T || p(T, "BYTES_PER_ELEMENT", e), a(a.P, c, Nt), G(c), a(a.P + a.F * Tt, c, { set: Gt }), a(a.P + a.F * !C, c, kt), n || T.toString == pt || (T.toString = pt), a(a.P + a.F * o(function() { new d(1).slice() }), c, { slice: Dt }), a(a.P + a.F * (o(function() { return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString() }) || !o(function() { T.toLocaleString.call([1, 2]) })), c, { toLocaleString: It }), N[c] = C ? L : O, n || C || p(T, dt, O) } } else t.exports = function() {} }, function(t, e, i) { "use strict"; var n = i(1),
        r = i(6),
        o = i(15),
        a = i(66),
        s = i(7),
        h = i(44),
        c = i(12),
        l = i(43),
        u = i(27),
        p = i(13),
        f = i(67),
        d = i(28).f,
        m = i(4).f,
        g = i(68),
        v = i(26),
        y = "prototype",
        _ = "Wrong index!",
        x = n.ArrayBuffer,
        b = n.DataView,
        w = n.Math,
        T = n.RangeError,
        E = n.Infinity,
        S = x,
        M = w.abs,
        A = w.pow,
        L = w.floor,
        C = w.log,
        O = w.LN2,
        P = r ? "_b" : "buffer",
        R = r ? "_l" : "byteLength",
        I = r ? "_o" : "byteOffset";

    function N(t, e, i) { var n, r, o, a = new Array(i),
            s = 8 * i - e - 1,
            h = (1 << s) - 1,
            c = h >> 1,
            l = 23 === e ? A(2, -24) - A(2, -77) : 0,
            u = 0,
            p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for ((t = M(t)) != t || t === E ? (r = t != t ? 1 : 0, n = h) : (n = L(C(t) / O), t * (o = A(2, -n)) < 1 && (n--, o *= 2), (t += n + c >= 1 ? l / o : l * A(2, 1 - c)) * o >= 2 && (n++, o /= 2), n + c >= h ? (r = 0, n = h) : n + c >= 1 ? (r = (t * o - 1) * A(2, e), n += c) : (r = t * A(2, c - 1) * A(2, e), n = 0)); e >= 8; a[u++] = 255 & r, r /= 256, e -= 8); for (n = n << e | r, s += e; s > 0; a[u++] = 255 & n, n /= 256, s -= 8); return a[--u] |= 128 * p, a }

    function D(t, e, i) { var n, r = 8 * i - e - 1,
            o = (1 << r) - 1,
            a = o >> 1,
            s = r - 7,
            h = i - 1,
            c = t[h--],
            l = 127 & c; for (c >>= 7; s > 0; l = 256 * l + t[h], h--, s -= 8); for (n = l & (1 << -s) - 1, l >>= -s, s += e; s > 0; n = 256 * n + t[h], h--, s -= 8); if (0 === l) l = 1 - a;
        else { if (l === o) return n ? NaN : c ? -E : E;
            n += A(2, e), l -= a } return (c ? -1 : 1) * n * A(2, l - e) }

    function G(t) { return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0] }

    function k(t) { return [255 & t] }

    function H(t) { return [255 & t, t >> 8 & 255] }

    function F(t) { return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255] }

    function U(t) { return N(t, 52, 8) }

    function B(t) { return N(t, 23, 4) }

    function z(t, e, i) { m(t[y], e, { get: function() { return this[i] } }) }

    function j(t, e, i, n) { var r = f(+i); if (r + e > t[R]) throw T(_); var o = t[P]._b,
            a = r + t[I],
            s = o.slice(a, a + e); return n ? s : s.reverse() }

    function V(t, e, i, n, r, o) { var a = f(+i); if (a + e > t[R]) throw T(_); for (var s = t[P]._b, h = a + t[I], c = n(+r), l = 0; l < e; l++) s[h + l] = c[o ? l : e - l - 1] } if (a.ABV) { if (!c(function() { x(1) }) || !c(function() { new x(-1) }) || c(function() { return new x, new x(1.5), new x(NaN), "ArrayBuffer" != x.name })) { for (var W, X = (x = function(t) { return l(this, x), new S(f(t)) })[y] = S[y], Y = d(S), q = 0; Y.length > q;)(W = Y[q++]) in x || s(x, W, S[W]);
            o || (X.constructor = x) } var Z = new b(new x(2)),
            J = b[y].setInt8;
        Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || h(b[y], { setInt8: function(t, e) { J.call(this, t, e << 24 >> 24) }, setUint8: function(t, e) { J.call(this, t, e << 24 >> 24) } }, !0) } else x = function(t) { l(this, x, "ArrayBuffer"); var e = f(t);
        this._b = g.call(new Array(e), 0), this[R] = e }, b = function(t, e, i) { l(this, b, "DataView"), l(t, x, "DataView"); var n = t[R],
            r = u(e); if (r < 0 || r > n) throw T("Wrong offset!"); if (r + (i = void 0 === i ? n - r : p(i)) > n) throw T("Wrong length!");
        this[P] = t, this[I] = r, this[R] = i }, r && (z(x, "byteLength", "_l"), z(b, "buffer", "_b"), z(b, "byteLength", "_l"), z(b, "byteOffset", "_o")), h(b[y], { getInt8: function(t) { return j(this, 1, t)[0] << 24 >> 24 }, getUint8: function(t) { return j(this, 1, t)[0] }, getInt16: function(t) { var e = j(this, 2, t, arguments[1]); return (e[1] << 8 | e[0]) << 16 >> 16 }, getUint16: function(t) { var e = j(this, 2, t, arguments[1]); return e[1] << 8 | e[0] }, getInt32: function(t) { return G(j(this, 4, t, arguments[1])) }, getUint32: function(t) { return G(j(this, 4, t, arguments[1])) >>> 0 }, getFloat32: function(t) { return D(j(this, 4, t, arguments[1]), 23, 4) }, getFloat64: function(t) { return D(j(this, 8, t, arguments[1]), 52, 8) }, setInt8: function(t, e) { V(this, 1, t, k, e) }, setUint8: function(t, e) { V(this, 1, t, k, e) }, setInt16: function(t, e) { V(this, 2, t, H, e, arguments[2]) }, setUint16: function(t, e) { V(this, 2, t, H, e, arguments[2]) }, setInt32: function(t, e) { V(this, 4, t, F, e, arguments[2]) }, setUint32: function(t, e) { V(this, 4, t, F, e, arguments[2]) }, setFloat32: function(t, e) { V(this, 4, t, B, e, arguments[2]) }, setFloat64: function(t, e) { V(this, 8, t, U, e, arguments[2]) } });
    v(x, "ArrayBuffer"), v(b, "DataView"), s(b[y], a.VIEW, !0), e.ArrayBuffer = x, e.DataView = b }, function(t, e, i) { var n = i(17),
        r = i(49),
        o = i(29),
        a = i(13),
        s = i(108);
    t.exports = function(t, e) { var i = 1 == t,
            h = 2 == t,
            c = 3 == t,
            l = 4 == t,
            u = 6 == t,
            p = 5 == t || u,
            f = e || s; return function(e, s, d) { for (var m, g, v = o(e), y = r(v), _ = n(s, d, 3), x = a(y.length), b = 0, w = i ? f(e, x) : h ? f(e, 0) : void 0; x > b; b++)
                if ((p || b in y) && (g = _(m = y[b], b, v), t))
                    if (i) w[b] = g;
                    else if (g) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return m;
                case 6:
                    return b;
                case 2:
                    w.push(m) } else if (l) return !1; return u ? -1 : c || l ? l : w } } }, function(t, e, i) { var n = i(109);
    t.exports = function(t, e) { return new(n(t))(e) } }, function(t, e, i) { var n = i(5),
        r = i(52),
        o = i(2)("species");
    t.exports = function(t) { var e; return r(t) && ("function" != typeof(e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), n(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e } }, function(t, e, i) { "use strict"; var n = i(29),
        r = i(33),
        o = i(13);
    t.exports = [].copyWithin || function(t, e) { var i = n(this),
            a = o(i.length),
            s = r(t, a),
            h = r(e, a),
            c = arguments.length > 2 ? arguments[2] : void 0,
            l = Math.min((void 0 === c ? a : r(c, a)) - h, a - s),
            u = 1; for (h < s && s < h + l && (u = -1, h += l - 1, s += l - 1); l-- > 0;) h in i ? i[s] = i[h] : delete i[s], s += u, h += u; return i } }, function(t, e, i) {
    "use strict";
    i.r(e);
    i(75);
    var n = i(69),
        r = i.n(n),
        o = i(70),
        a = i.n(o),
        s = i(71),
        h = i.n(s);
    i(8), i(10), i(80);

    function c() {} void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t }), void 0 === Math.sign && (Math.sign = function(t) { return t < 0 ? -1 : t > 0 ? 1 : +t }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", { get: function() { return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1] } }), void 0 === Object.assign && (Object.assign = function(t) { if (null == t) throw new TypeError("Cannot convert undefined or null to object"); for (var e = Object(t), i = 1; i < arguments.length; i++) { var n = arguments[i]; if (null != n)
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }), Object.assign(c.prototype, { addEventListener: function(t, e) { void 0 === this._listeners && (this._listeners = {}); var i = this._listeners;
            void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e) }, hasEventListener: function(t, e) { if (void 0 === this._listeners) return !1; var i = this._listeners; return void 0 !== i[t] && -1 !== i[t].indexOf(e) }, removeEventListener: function(t, e) { if (void 0 !== this._listeners) { var i = this._listeners[t]; if (void 0 !== i) { var n = i.indexOf(e); - 1 !== n && i.splice(n, 1) } } }, dispatchEvent: function(t) { if (void 0 !== this._listeners) { var e = this._listeners[t.type]; if (void 0 !== e) { t.target = this; for (var i = e.slice(0), n = 0, r = i.length; n < r; n++) i[n].call(this, t) } } } });
    var l, u, p, f, d, m, g, v, y, _, x, b, w = "99",
        T = 0,
        E = 1,
        S = 2,
        M = 1,
        A = 2,
        L = 0,
        C = 1,
        O = 2,
        P = 0,
        R = 1,
        I = 2,
        N = 0,
        D = 1,
        G = 2,
        k = 3,
        H = 4,
        F = 5,
        U = 100,
        B = 101,
        z = 102,
        j = 103,
        V = 104,
        W = 200,
        X = 201,
        Y = 202,
        q = 203,
        Z = 204,
        J = 205,
        $ = 206,
        K = 207,
        Q = 208,
        tt = 209,
        et = 210,
        it = 0,
        nt = 1,
        rt = 2,
        ot = 3,
        at = 4,
        st = 5,
        ht = 6,
        ct = 7,
        lt = 0,
        ut = 1,
        pt = 2,
        ft = 0,
        dt = 1,
        mt = 2,
        gt = 3,
        vt = 4,
        yt = 5,
        _t = 301,
        xt = 302,
        bt = 303,
        wt = 304,
        Tt = 305,
        Et = 306,
        St = 307,
        Mt = 1e3,
        At = 1001,
        Lt = 1002,
        Ct = 1003,
        Ot = 1004,
        Pt = 1005,
        Rt = 1006,
        It = 1007,
        Nt = 1008,
        Dt = 1009,
        Gt = 1010,
        kt = 1011,
        Ht = 1012,
        Ft = 1013,
        Ut = 1014,
        Bt = 1015,
        zt = 1016,
        jt = 1017,
        Vt = 1018,
        Wt = 1019,
        Xt = 1020,
        Yt = 1021,
        qt = 1022,
        Zt = 1023,
        Jt = 1024,
        $t = 1025,
        Kt = 1026,
        Qt = 1027,
        te = 1028,
        ee = 33776,
        ie = 33777,
        ne = 33778,
        re = 33779,
        oe = 35840,
        ae = 35841,
        se = 35842,
        he = 35843,
        ce = 36196,
        le = 37808,
        ue = 37809,
        pe = 37810,
        fe = 37811,
        de = 37812,
        me = 37813,
        ge = 37814,
        ve = 37815,
        ye = 37816,
        _e = 37817,
        xe = 37818,
        be = 37819,
        we = 37820,
        Te = 37821,
        Ee = 2201,
        Se = 2400,
        Me = 0,
        Ae = 1,
        Le = 2,
        Ce = 3e3,
        Oe = 3001,
        Pe = 3007,
        Re = 3002,
        Ie = 3004,
        Ne = 3005,
        De = 3006,
        Ge = 3200,
        ke = 3201,
        He = 0,
        Fe = 1,
        Ue = { DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, generateUUID: function() { for (var t = [], e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16); return function() { var e = 4294967295 * Math.random() | 0,
                        i = 4294967295 * Math.random() | 0,
                        n = 4294967295 * Math.random() | 0,
                        r = 4294967295 * Math.random() | 0; return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & i] + t[i >> 8 & 255] + "-" + t[i >> 16 & 15 | 64] + t[i >> 24 & 255] + "-" + t[63 & n | 128] + t[n >> 8 & 255] + "-" + t[n >> 16 & 255] + t[n >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255]).toUpperCase() } }(), clamp: function(t, e, i) { return Math.max(e, Math.min(i, t)) }, euclideanModulo: function(t, e) { return (t % e + e) % e }, mapLinear: function(t, e, i, n, r) { return n + (t - e) * (r - n) / (i - e) }, lerp: function(t, e, i) { return (1 - i) * t + i * e }, smoothstep: function(t, e, i) { return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t) }, smootherstep: function(t, e, i) { return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10) }, randInt: function(t, e) { return t + Math.floor(Math.random() * (e - t + 1)) }, randFloat: function(t, e) { return t + Math.random() * (e - t) }, randFloatSpread: function(t) { return t * (.5 - Math.random()) }, degToRad: function(t) { return t * Ue.DEG2RAD }, radToDeg: function(t) { return t * Ue.RAD2DEG }, isPowerOfTwo: function(t) { return 0 == (t & t - 1) && 0 !== t }, ceilPowerOfTwo: function(t) { return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2)) }, floorPowerOfTwo: function(t) { return Math.pow(2, Math.floor(Math.log(t) / Math.LN2)) } };

    function Be(t, e) { this.x = t || 0, this.y = e || 0 }

    function ze() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.") }

    function je(t, e, i, n) { this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1 }

    function Ve(t, e, i) { this.x = t || 0, this.y = e || 0, this.z = i || 0 }

    function We() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.") } Object.defineProperties(Be.prototype, { width: { get: function() { return this.x }, set: function(t) { this.x = t } }, height: { get: function() { return this.y }, set: function(t) { this.y = t } } }), Object.assign(Be.prototype, { isVector2: !0, set: function(t, e) { return this.x = t, this.y = e, this }, setScalar: function(t) { return this.x = t, this.y = t, this }, setX: function(t) { return this.x = t, this }, setY: function(t) { return this.y = t, this }, setComponent: function(t, e) { switch (t) {
                case 0:
                    this.x = e; break;
                case 1:
                    this.y = e; break;
                default:
                    throw new Error("index is out of range: " + t) } return this }, getComponent: function(t) { switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t) } }, clone: function() { return new this.constructor(this.x, this.y) }, copy: function(t) { return this.x = t.x, this.y = t.y, this }, add: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this) }, addScalar: function(t) { return this.x += t, this.y += t, this }, addVectors: function(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this }, addScaledVector: function(t, e) { return this.x += t.x * e, this.y += t.y * e, this }, sub: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this) }, subScalar: function(t) { return this.x -= t, this.y -= t, this }, subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this }, multiply: function(t) { return this.x *= t.x, this.y *= t.y, this }, multiplyScalar: function(t) { return this.x *= t, this.y *= t, this }, divide: function(t) { return this.x /= t.x, this.y /= t.y, this }, divideScalar: function(t) { return this.multiplyScalar(1 / t) }, applyMatrix3: function(t) { var e = this.x,
                i = this.y,
                n = t.elements; return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this }, min: function(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this }, max: function(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this }, clamp: function(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this }, clampScalar: (l = new Be, u = new Be, function(t, e) { return l.set(t, t), u.set(e, e), this.clamp(l, u) }), clampLength: function(t, e) { var i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i))) }, floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }, ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }, round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this }, roundToZero: function() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this }, negate: function() { return this.x = -this.x, this.y = -this.y, this }, dot: function(t) { return this.x * t.x + this.y * t.y }, cross: function(t) { return this.x * t.y - this.y * t.x }, lengthSq: function() { return this.x * this.x + this.y * this.y }, length: function() { return Math.sqrt(this.x * this.x + this.y * this.y) }, manhattanLength: function() { return Math.abs(this.x) + Math.abs(this.y) }, normalize: function() { return this.divideScalar(this.length() || 1) }, angle: function() { var t = Math.atan2(this.y, this.x); return t < 0 && (t += 2 * Math.PI), t }, distanceTo: function(t) { return Math.sqrt(this.distanceToSquared(t)) }, distanceToSquared: function(t) { var e = this.x - t.x,
                i = this.y - t.y; return e * e + i * i }, manhattanDistanceTo: function(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) }, setLength: function(t) { return this.normalize().multiplyScalar(t) }, lerp: function(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this }, lerpVectors: function(t, e, i) { return this.subVectors(e, t).multiplyScalar(i).add(t) }, equals: function(t) { return t.x === this.x && t.y === this.y }, fromArray: function(t, e) { return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t }, fromBufferAttribute: function(t, e, i) { return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this }, rotateAround: function(t, e) { var i = Math.cos(e),
                n = Math.sin(e),
                r = this.x - t.x,
                o = this.y - t.y; return this.x = r * i - o * n + t.x, this.y = r * n + o * i + t.y, this } }), Object.assign(ze.prototype, { isMatrix4: !0, set: function(t, e, i, n, r, o, a, s, h, c, l, u, p, f, d, m) { var g = this.elements; return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = o, g[9] = a, g[13] = s, g[2] = h, g[6] = c, g[10] = l, g[14] = u, g[3] = p, g[7] = f, g[11] = d, g[15] = m, this }, identity: function() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }, clone: function() { return (new ze).fromArray(this.elements) }, copy: function(t) { var e = this.elements,
                i = t.elements; return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this }, copyPosition: function(t) { var e = this.elements,
                i = t.elements; return e[12] = i[12], e[13] = i[13], e[14] = i[14], this }, extractBasis: function(t, e, i) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this }, makeBasis: function(t, e, i) { return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this }, extractRotation: (_ = new Ve, function(t) { var e = this.elements,
                i = t.elements,
                n = 1 / _.setFromMatrixColumn(t, 0).length(),
                r = 1 / _.setFromMatrixColumn(t, 1).length(),
                o = 1 / _.setFromMatrixColumn(t, 2).length(); return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * o, e[9] = i[9] * o, e[10] = i[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this }), makeRotationFromEuler: function(t) { t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."); var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z,
                o = Math.cos(i),
                a = Math.sin(i),
                s = Math.cos(n),
                h = Math.sin(n),
                c = Math.cos(r),
                l = Math.sin(r); if ("XYZ" === t.order) { var u = o * c,
                    p = o * l,
                    f = a * c,
                    d = a * l;
                e[0] = s * c, e[4] = -s * l, e[8] = h, e[1] = p + f * h, e[5] = u - d * h, e[9] = -a * s, e[2] = d - u * h, e[6] = f + p * h, e[10] = o * s } else if ("YXZ" === t.order) { var m = s * c,
                    g = s * l,
                    v = h * c,
                    y = h * l;
                e[0] = m + y * a, e[4] = v * a - g, e[8] = o * h, e[1] = o * l, e[5] = o * c, e[9] = -a, e[2] = g * a - v, e[6] = y + m * a, e[10] = o * s } else if ("ZXY" === t.order) { m = s * c, g = s * l, v = h * c, y = h * l;
                e[0] = m - y * a, e[4] = -o * l, e[8] = v + g * a, e[1] = g + v * a, e[5] = o * c, e[9] = y - m * a, e[2] = -o * h, e[6] = a, e[10] = o * s } else if ("ZYX" === t.order) { u = o * c, p = o * l, f = a * c, d = a * l;
                e[0] = s * c, e[4] = f * h - p, e[8] = u * h + d, e[1] = s * l, e[5] = d * h + u, e[9] = p * h - f, e[2] = -h, e[6] = a * s, e[10] = o * s } else if ("YZX" === t.order) { var _ = o * s,
                    x = o * h,
                    b = a * s,
                    w = a * h;
                e[0] = s * c, e[4] = w - _ * l, e[8] = b * l + x, e[1] = l, e[5] = o * c, e[9] = -a * c, e[2] = -h * c, e[6] = x * l + b, e[10] = _ - w * l } else if ("XZY" === t.order) { _ = o * s, x = o * h, b = a * s, w = a * h;
                e[0] = s * c, e[4] = -l, e[8] = h * c, e[1] = _ * l + w, e[5] = o * c, e[9] = x * l - b, e[2] = b * l - x, e[6] = a * c, e[10] = w * l + _ } return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this }, makeRotationFromQuaternion: (v = new Ve(0, 0, 0), y = new Ve(1, 1, 1), function(t) { return this.compose(v, t, y) }), lookAt: (d = new Ve, m = new Ve, g = new Ve, function(t, e, i) { var n = this.elements; return g.subVectors(t, e), 0 === g.lengthSq() && (g.z = 1), g.normalize(), d.crossVectors(i, g), 0 === d.lengthSq() && (1 === Math.abs(i.z) ? g.x += 1e-4 : g.z += 1e-4, g.normalize(), d.crossVectors(i, g)), d.normalize(), m.crossVectors(g, d), n[0] = d.x, n[4] = m.x, n[8] = g.x, n[1] = d.y, n[5] = m.y, n[9] = g.y, n[2] = d.z, n[6] = m.z, n[10] = g.z, this }), multiply: function(t, e) { return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t) }, premultiply: function(t) { return this.multiplyMatrices(t, this) }, multiplyMatrices: function(t, e) { var i = t.elements,
                n = e.elements,
                r = this.elements,
                o = i[0],
                a = i[4],
                s = i[8],
                h = i[12],
                c = i[1],
                l = i[5],
                u = i[9],
                p = i[13],
                f = i[2],
                d = i[6],
                m = i[10],
                g = i[14],
                v = i[3],
                y = i[7],
                _ = i[11],
                x = i[15],
                b = n[0],
                w = n[4],
                T = n[8],
                E = n[12],
                S = n[1],
                M = n[5],
                A = n[9],
                L = n[13],
                C = n[2],
                O = n[6],
                P = n[10],
                R = n[14],
                I = n[3],
                N = n[7],
                D = n[11],
                G = n[15]; return r[0] = o * b + a * S + s * C + h * I, r[4] = o * w + a * M + s * O + h * N, r[8] = o * T + a * A + s * P + h * D, r[12] = o * E + a * L + s * R + h * G, r[1] = c * b + l * S + u * C + p * I, r[5] = c * w + l * M + u * O + p * N, r[9] = c * T + l * A + u * P + p * D, r[13] = c * E + l * L + u * R + p * G, r[2] = f * b + d * S + m * C + g * I, r[6] = f * w + d * M + m * O + g * N, r[10] = f * T + d * A + m * P + g * D, r[14] = f * E + d * L + m * R + g * G, r[3] = v * b + y * S + _ * C + x * I, r[7] = v * w + y * M + _ * O + x * N, r[11] = v * T + y * A + _ * P + x * D, r[15] = v * E + y * L + _ * R + x * G, this }, multiplyScalar: function(t) { var e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this }, applyToBufferAttribute: function() { var t = new Ve; return function(e) { for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z); return e } }(), determinant: function() { var t = this.elements,
                e = t[0],
                i = t[4],
                n = t[8],
                r = t[12],
                o = t[1],
                a = t[5],
                s = t[9],
                h = t[13],
                c = t[2],
                l = t[6],
                u = t[10],
                p = t[14]; return t[3] * (+r * s * l - n * h * l - r * a * u + i * h * u + n * a * p - i * s * p) + t[7] * (+e * s * p - e * h * u + r * o * u - n * o * p + n * h * c - r * s * c) + t[11] * (+e * h * l - e * a * p - r * o * l + i * o * p + r * a * c - i * h * c) + t[15] * (-n * a * c - e * s * l + e * a * u + n * o * l - i * o * u + i * s * c) }, transpose: function() { var t, e = this.elements; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this }, setPosition: function(t) { var e = this.elements; return e[12] = t.x, e[13] = t.y, e[14] = t.z, this }, getInverse: function(t, e) { var i = this.elements,
                n = t.elements,
                r = n[0],
                o = n[1],
                a = n[2],
                s = n[3],
                h = n[4],
                c = n[5],
                l = n[6],
                u = n[7],
                p = n[8],
                f = n[9],
                d = n[10],
                m = n[11],
                g = n[12],
                v = n[13],
                y = n[14],
                _ = n[15],
                x = f * y * u - v * d * u + v * l * m - c * y * m - f * l * _ + c * d * _,
                b = g * d * u - p * y * u - g * l * m + h * y * m + p * l * _ - h * d * _,
                w = p * v * u - g * f * u + g * c * m - h * v * m - p * c * _ + h * f * _,
                T = g * f * l - p * v * l - g * c * d + h * v * d + p * c * y - h * f * y,
                E = r * x + o * b + a * w + s * T; if (0 === E) { var S = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"; if (!0 === e) throw new Error(S); return console.warn(S), this.identity() } var M = 1 / E; return i[0] = x * M, i[1] = (v * d * s - f * y * s - v * a * m + o * y * m + f * a * _ - o * d * _) * M, i[2] = (c * y * s - v * l * s + v * a * u - o * y * u - c * a * _ + o * l * _) * M, i[3] = (f * l * s - c * d * s - f * a * u + o * d * u + c * a * m - o * l * m) * M, i[4] = b * M, i[5] = (p * y * s - g * d * s + g * a * m - r * y * m - p * a * _ + r * d * _) * M, i[6] = (g * l * s - h * y * s - g * a * u + r * y * u + h * a * _ - r * l * _) * M, i[7] = (h * d * s - p * l * s + p * a * u - r * d * u - h * a * m + r * l * m) * M, i[8] = w * M, i[9] = (g * f * s - p * v * s - g * o * m + r * v * m + p * o * _ - r * f * _) * M, i[10] = (h * v * s - g * c * s + g * o * u - r * v * u - h * o * _ + r * c * _) * M, i[11] = (p * c * s - h * f * s - p * o * u + r * f * u + h * o * m - r * c * m) * M, i[12] = T * M, i[13] = (p * v * a - g * f * a + g * o * d - r * v * d - p * o * y + r * f * y) * M, i[14] = (g * c * a - h * v * a - g * o * l + r * v * l + h * o * y - r * c * y) * M, i[15] = (h * f * a - p * c * a + p * o * l - r * f * l - h * o * d + r * c * d) * M, this }, scale: function(t) { var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z; return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this }, getMaxScaleOnAxis: function() { var t = this.elements,
                e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]; return Math.sqrt(Math.max(e, i, n)) }, makeTranslation: function(t, e, i) { return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this }, makeRotationX: function(t) { var e = Math.cos(t),
                i = Math.sin(t); return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this }, makeRotationY: function(t) { var e = Math.cos(t),
                i = Math.sin(t); return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this }, makeRotationZ: function(t) { var e = Math.cos(t),
                i = Math.sin(t); return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }, makeRotationAxis: function(t, e) { var i = Math.cos(e),
                n = Math.sin(e),
                r = 1 - i,
                o = t.x,
                a = t.y,
                s = t.z,
                h = r * o,
                c = r * a; return this.set(h * o + i, h * a - n * s, h * s + n * a, 0, h * a + n * s, c * a + i, c * s - n * o, 0, h * s - n * a, c * s + n * o, r * s * s + i, 0, 0, 0, 0, 1), this }, makeScale: function(t, e, i) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this }, makeShear: function(t, e, i) { return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this }, compose: function(t, e, i) { var n = this.elements,
                r = e._x,
                o = e._y,
                a = e._z,
                s = e._w,
                h = r + r,
                c = o + o,
                l = a + a,
                u = r * h,
                p = r * c,
                f = r * l,
                d = o * c,
                m = o * l,
                g = a * l,
                v = s * h,
                y = s * c,
                _ = s * l,
                x = i.x,
                b = i.y,
                w = i.z; return n[0] = (1 - (d + g)) * x, n[1] = (p + _) * x, n[2] = (f - y) * x, n[3] = 0, n[4] = (p - _) * b, n[5] = (1 - (u + g)) * b, n[6] = (m + v) * b, n[7] = 0, n[8] = (f + y) * w, n[9] = (m - v) * w, n[10] = (1 - (u + d)) * w, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this }, decompose: (p = new Ve, f = new ze, function(t, e, i) { var n = this.elements,
                r = p.set(n[0], n[1], n[2]).length(),
                o = p.set(n[4], n[5], n[6]).length(),
                a = p.set(n[8], n[9], n[10]).length();
            this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], f.copy(this); var s = 1 / r,
                h = 1 / o,
                c = 1 / a; return f.elements[0] *= s, f.elements[1] *= s, f.elements[2] *= s, f.elements[4] *= h, f.elements[5] *= h, f.elements[6] *= h, f.elements[8] *= c, f.elements[9] *= c, f.elements[10] *= c, e.setFromRotationMatrix(f), i.x = r, i.y = o, i.z = a, this }), makePerspective: function(t, e, i, n, r, o) { void 0 === o && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."); var a = this.elements,
                s = 2 * r / (e - t),
                h = 2 * r / (i - n),
                c = (e + t) / (e - t),
                l = (i + n) / (i - n),
                u = -(o + r) / (o - r),
                p = -2 * o * r / (o - r); return a[0] = s, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = h, a[9] = l, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this }, makeOrthographic: function(t, e, i, n, r, o) { var a = this.elements,
                s = 1 / (e - t),
                h = 1 / (i - n),
                c = 1 / (o - r),
                l = (e + t) * s,
                u = (i + n) * h,
                p = (o + r) * c; return a[0] = 2 * s, a[4] = 0, a[8] = 0, a[12] = -l, a[1] = 0, a[5] = 2 * h, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this }, equals: function(t) { for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
                if (e[n] !== i[n]) return !1; return !0 }, fromArray: function(t, e) { void 0 === e && (e = 0); for (var i = 0; i < 16; i++) this.elements[i] = t[i + e]; return this }, toArray: function(t, e) { void 0 === t && (t = []), void 0 === e && (e = 0); var i = this.elements; return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t } }), Object.assign(je, { slerp: function(t, e, i, n) { return i.copy(t).slerp(e, n) }, slerpFlat: function(t, e, i, n, r, o, a) { var s = i[n + 0],
                h = i[n + 1],
                c = i[n + 2],
                l = i[n + 3],
                u = r[o + 0],
                p = r[o + 1],
                f = r[o + 2],
                d = r[o + 3]; if (l !== d || s !== u || h !== p || c !== f) { var m = 1 - a,
                    g = s * u + h * p + c * f + l * d,
                    v = g >= 0 ? 1 : -1,
                    y = 1 - g * g; if (y > Number.EPSILON) { var _ = Math.sqrt(y),
                        x = Math.atan2(_, g * v);
                    m = Math.sin(m * x) / _, a = Math.sin(a * x) / _ } var b = a * v; if (s = s * m + u * b, h = h * m + p * b, c = c * m + f * b, l = l * m + d * b, m === 1 - a) { var w = 1 / Math.sqrt(s * s + h * h + c * c + l * l);
                    s *= w, h *= w, c *= w, l *= w } } t[e] = s, t[e + 1] = h, t[e + 2] = c, t[e + 3] = l } }), Object.defineProperties(je.prototype, { x: { get: function() { return this._x }, set: function(t) { this._x = t, this.onChangeCallback() } }, y: { get: function() { return this._y }, set: function(t) { this._y = t, this.onChangeCallback() } }, z: { get: function() { return this._z }, set: function(t) { this._z = t, this.onChangeCallback() } }, w: { get: function() { return this._w }, set: function(t) { this._w = t, this.onChangeCallback() } } }), Object.assign(je.prototype, { isQuaternion: !0, set: function(t, e, i, n) { return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this }, clone: function() { return new this.constructor(this._x, this._y, this._z, this._w) }, copy: function(t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this }, setFromEuler: function(t, e) { if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."); var i = t._x,
                n = t._y,
                r = t._z,
                o = t.order,
                a = Math.cos,
                s = Math.sin,
                h = a(i / 2),
                c = a(n / 2),
                l = a(r / 2),
                u = s(i / 2),
                p = s(n / 2),
                f = s(r / 2); return "XYZ" === o ? (this._x = u * c * l + h * p * f, this._y = h * p * l - u * c * f, this._z = h * c * f + u * p * l, this._w = h * c * l - u * p * f) : "YXZ" === o ? (this._x = u * c * l + h * p * f, this._y = h * p * l - u * c * f, this._z = h * c * f - u * p * l, this._w = h * c * l + u * p * f) : "ZXY" === o ? (this._x = u * c * l - h * p * f, this._y = h * p * l + u * c * f, this._z = h * c * f + u * p * l, this._w = h * c * l - u * p * f) : "ZYX" === o ? (this._x = u * c * l - h * p * f, this._y = h * p * l + u * c * f, this._z = h * c * f - u * p * l, this._w = h * c * l + u * p * f) : "YZX" === o ? (this._x = u * c * l + h * p * f, this._y = h * p * l + u * c * f, this._z = h * c * f - u * p * l, this._w = h * c * l - u * p * f) : "XZY" === o && (this._x = u * c * l - h * p * f, this._y = h * p * l - u * c * f, this._z = h * c * f + u * p * l, this._w = h * c * l + u * p * f), !1 !== e && this.onChangeCallback(), this }, setFromAxisAngle: function(t, e) { var i = e / 2,
                n = Math.sin(i); return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this.onChangeCallback(), this }, setFromRotationMatrix: function(t) { var e, i = t.elements,
                n = i[0],
                r = i[4],
                o = i[8],
                a = i[1],
                s = i[5],
                h = i[9],
                c = i[2],
                l = i[6],
                u = i[10],
                p = n + s + u; return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (l - h) * e, this._y = (o - c) * e, this._z = (a - r) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u), this._w = (l - h) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (o + c) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (o - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (h + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s), this._w = (a - r) / e, this._x = (o + c) / e, this._y = (h + l) / e, this._z = .25 * e), this.onChangeCallback(), this }, setFromUnitVectors: function() { var t, e = new Ve; return function(i, n) { return void 0 === e && (e = new Ve), (t = i.dot(n) + 1) < 1e-6 ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize() } }(), angleTo: function(t) { return 2 * Math.acos(Math.abs(Ue.clamp(this.dot(t), -1, 1))) }, rotateTowards: function(t, e) { var i = this.angleTo(t); if (0 === i) return this; var n = Math.min(1, e / i); return this.slerp(t, n), this }, inverse: function() { return this.conjugate() }, conjugate: function() { return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this }, dot: function(t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w }, lengthSq: function() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w }, length: function() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) }, normalize: function() { var t = this.length(); return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this }, multiply: function(t, e) { return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t) }, premultiply: function(t) { return this.multiplyQuaternions(t, this) }, multiplyQuaternions: function(t, e) { var i = t._x,
                n = t._y,
                r = t._z,
                o = t._w,
                a = e._x,
                s = e._y,
                h = e._z,
                c = e._w; return this._x = i * c + o * a + n * h - r * s, this._y = n * c + o * s + r * a - i * h, this._z = r * c + o * h + i * s - n * a, this._w = o * c - i * a - n * s - r * h, this.onChangeCallback(), this }, slerp: function(t, e) { if (0 === e) return this; if (1 === e) return this.copy(t); var i = this._x,
                n = this._y,
                r = this._z,
                o = this._w,
                a = o * t._w + i * t._x + n * t._y + r * t._z; if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = i, this._y = n, this._z = r, this; var s = 1 - a * a; if (s <= Number.EPSILON) { var h = 1 - e; return this._w = h * o + e * this._w, this._x = h * i + e * this._x, this._y = h * n + e * this._y, this._z = h * r + e * this._z, this.normalize() } var c = Math.sqrt(s),
                l = Math.atan2(c, a),
                u = Math.sin((1 - e) * l) / c,
                p = Math.sin(e * l) / c; return this._w = o * u + this._w * p, this._x = i * u + this._x * p, this._y = n * u + this._y * p, this._z = r * u + this._z * p, this.onChangeCallback(), this }, equals: function(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w }, fromArray: function(t, e) { return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t }, onChange: function(t) { return this.onChangeCallback = t, this }, onChangeCallback: function() {} }), Object.assign(Ve.prototype, { isVector3: !0, set: function(t, e, i) { return this.x = t, this.y = e, this.z = i, this }, setScalar: function(t) { return this.x = t, this.y = t, this.z = t, this }, setX: function(t) { return this.x = t, this }, setY: function(t) { return this.y = t, this }, setZ: function(t) { return this.z = t, this }, setComponent: function(t, e) { switch (t) {
                case 0:
                    this.x = e; break;
                case 1:
                    this.y = e; break;
                case 2:
                    this.z = e; break;
                default:
                    throw new Error("index is out of range: " + t) } return this }, getComponent: function(t) { switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t) } }, clone: function() { return new this.constructor(this.x, this.y, this.z) }, copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this }, add: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this) }, addScalar: function(t) { return this.x += t, this.y += t, this.z += t, this }, addVectors: function(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this }, addScaledVector: function(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this }, sub: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this) }, subScalar: function(t) { return this.x -= t, this.y -= t, this.z -= t, this }, subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this }, multiply: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this) }, multiplyScalar: function(t) { return this.x *= t, this.y *= t, this.z *= t, this }, multiplyVectors: function(t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this }, applyEuler: (x = new je, function(t) { return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(x.setFromEuler(t)) }), applyAxisAngle: function() { var t = new je; return function(e, i) { return this.applyQuaternion(t.setFromAxisAngle(e, i)) } }(), applyMatrix3: function(t) { var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements; return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this }, applyMatrix4: function(t) { var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements,
                o = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]); return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * o, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * o, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * o, this }, applyQuaternion: function(t) { var e = this.x,
                i = this.y,
                n = this.z,
                r = t.x,
                o = t.y,
                a = t.z,
                s = t.w,
                h = s * e + o * n - a * i,
                c = s * i + a * e - r * n,
                l = s * n + r * i - o * e,
                u = -r * e - o * i - a * n; return this.x = h * s + u * -r + c * -a - l * -o, this.y = c * s + u * -o + l * -r - h * -a, this.z = l * s + u * -a + h * -o - c * -r, this }, project: function(t) { return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix) }, unproject: function() { var t = new ze; return function(e) { return this.applyMatrix4(t.getInverse(e.projectionMatrix)).applyMatrix4(e.matrixWorld) } }(), transformDirection: function(t) { var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements; return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize() }, divide: function(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this }, divideScalar: function(t) { return this.multiplyScalar(1 / t) }, min: function(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this }, max: function(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this }, clamp: function(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this }, clampScalar: function() { var t = new Ve,
                e = new Ve; return function(i, n) { return t.set(i, i, i), e.set(n, n, n), this.clamp(t, e) } }(), clampLength: function(t, e) { var i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i))) }, floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this }, ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this }, round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this }, roundToZero: function() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this }, negate: function() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this }, dot: function(t) { return this.x * t.x + this.y * t.y + this.z * t.z }, lengthSq: function() { return this.x * this.x + this.y * this.y + this.z * this.z }, length: function() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) }, manhattanLength: function() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) }, normalize: function() { return this.divideScalar(this.length() || 1) }, setLength: function(t) { return this.normalize().multiplyScalar(t) }, lerp: function(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this }, lerpVectors: function(t, e, i) { return this.subVectors(e, t).multiplyScalar(i).add(t) }, cross: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t) }, crossVectors: function(t, e) { var i = t.x,
                n = t.y,
                r = t.z,
                o = e.x,
                a = e.y,
                s = e.z; return this.x = n * s - r * a, this.y = r * o - i * s, this.z = i * a - n * o, this }, projectOnVector: function(t) { var e = t.dot(this) / t.lengthSq(); return this.copy(t).multiplyScalar(e) }, projectOnPlane: function() { var t = new Ve; return function(e) { return t.copy(this).projectOnVector(e), this.sub(t) } }(), reflect: function() { var t = new Ve; return function(e) { return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e))) } }(), angleTo: function(t) { var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq()); return Math.acos(Ue.clamp(e, -1, 1)) }, distanceTo: function(t) { return Math.sqrt(this.distanceToSquared(t)) }, distanceToSquared: function(t) { var e = this.x - t.x,
                i = this.y - t.y,
                n = this.z - t.z; return e * e + i * i + n * n }, manhattanDistanceTo: function(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z) }, setFromSpherical: function(t) { return this.setFromSphericalCoords(t.radius, t.phi, t.theta) }, setFromSphericalCoords: function(t, e, i) { var n = Math.sin(e) * t; return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this }, setFromCylindrical: function(t) { return this.setFromCylindricalCoords(t.radius, t.theta, t.y) }, setFromCylindricalCoords: function(t, e, i) { return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this }, setFromMatrixPosition: function(t) { var e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this }, setFromMatrixScale: function(t) { var e = this.setFromMatrixColumn(t, 0).length(),
                i = this.setFromMatrixColumn(t, 1).length(),
                n = this.setFromMatrixColumn(t, 2).length(); return this.x = e, this.y = i, this.z = n, this }, setFromMatrixColumn: function(t, e) { return this.fromArray(t.elements, 4 * e) }, equals: function(t) { return t.x === this.x && t.y === this.y && t.z === this.z }, fromArray: function(t, e) { return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t }, fromBufferAttribute: function(t, e, i) { return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this } }), Object.assign(We.prototype, { isMatrix3: !0, set: function(t, e, i, n, r, o, a, s, h) { var c = this.elements; return c[0] = t, c[1] = n, c[2] = a, c[3] = e, c[4] = r, c[5] = s, c[6] = i, c[7] = o, c[8] = h, this }, identity: function() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this }, clone: function() { return (new this.constructor).fromArray(this.elements) }, copy: function(t) { var e = this.elements,
                i = t.elements; return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this }, setFromMatrix4: function(t) { var e = t.elements; return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this }, applyToBufferAttribute: function() { var t = new Ve; return function(e) { for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix3(this), e.setXYZ(i, t.x, t.y, t.z); return e } }(), multiply: function(t) { return this.multiplyMatrices(this, t) }, premultiply: function(t) { return this.multiplyMatrices(t, this) }, multiplyMatrices: function(t, e) { var i = t.elements,
                n = e.elements,
                r = this.elements,
                o = i[0],
                a = i[3],
                s = i[6],
                h = i[1],
                c = i[4],
                l = i[7],
                u = i[2],
                p = i[5],
                f = i[8],
                d = n[0],
                m = n[3],
                g = n[6],
                v = n[1],
                y = n[4],
                _ = n[7],
                x = n[2],
                b = n[5],
                w = n[8]; return r[0] = o * d + a * v + s * x, r[3] = o * m + a * y + s * b, r[6] = o * g + a * _ + s * w, r[1] = h * d + c * v + l * x, r[4] = h * m + c * y + l * b, r[7] = h * g + c * _ + l * w, r[2] = u * d + p * v + f * x, r[5] = u * m + p * y + f * b, r[8] = u * g + p * _ + f * w, this }, multiplyScalar: function(t) { var e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this }, determinant: function() { var t = this.elements,
                e = t[0],
                i = t[1],
                n = t[2],
                r = t[3],
                o = t[4],
                a = t[5],
                s = t[6],
                h = t[7],
                c = t[8]; return e * o * c - e * a * h - i * r * c + i * a * s + n * r * h - n * o * s }, getInverse: function(t, e) { t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument."); var i = t.elements,
                n = this.elements,
                r = i[0],
                o = i[1],
                a = i[2],
                s = i[3],
                h = i[4],
                c = i[5],
                l = i[6],
                u = i[7],
                p = i[8],
                f = p * h - c * u,
                d = c * l - p * s,
                m = u * s - h * l,
                g = r * f + o * d + a * m; if (0 === g) { var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"; if (!0 === e) throw new Error(v); return console.warn(v), this.identity() } var y = 1 / g; return n[0] = f * y, n[1] = (a * u - p * o) * y, n[2] = (c * o - a * h) * y, n[3] = d * y, n[4] = (p * r - a * l) * y, n[5] = (a * s - c * r) * y, n[6] = m * y, n[7] = (o * l - u * r) * y, n[8] = (h * r - o * s) * y, this }, transpose: function() { var t, e = this.elements; return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this }, getNormalMatrix: function(t) { return this.setFromMatrix4(t).getInverse(this).transpose() }, transposeIntoArray: function(t) { var e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this }, setUvTransform: function(t, e, i, n, r, o, a) { var s = Math.cos(r),
                h = Math.sin(r);
            this.set(i * s, i * h, -i * (s * o + h * a) + o + t, -n * h, n * s, -n * (-h * o + s * a) + a + e, 0, 0, 1) }, scale: function(t, e) { var i = this.elements; return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this }, rotate: function(t) { var e = Math.cos(t),
                i = Math.sin(t),
                n = this.elements,
                r = n[0],
                o = n[3],
                a = n[6],
                s = n[1],
                h = n[4],
                c = n[7]; return n[0] = e * r + i * s, n[3] = e * o + i * h, n[6] = e * a + i * c, n[1] = -i * r + e * s, n[4] = -i * o + e * h, n[7] = -i * a + e * c, this }, translate: function(t, e) { var i = this.elements; return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this }, equals: function(t) { for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
                if (e[n] !== i[n]) return !1; return !0 }, fromArray: function(t, e) { void 0 === e && (e = 0); for (var i = 0; i < 9; i++) this.elements[i] = t[i + e]; return this }, toArray: function(t, e) { void 0 === t && (t = []), void 0 === e && (e = 0); var i = this.elements; return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t } });
    var Xe, Ye, qe, Ze, Je, $e = { getDataURL: function(t) { var e; if ("undefined" == typeof HTMLCanvasElement) return t.src; if (t instanceof HTMLCanvasElement) e = t;
                else { void 0 === b && (b = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), b.width = t.width, b.height = t.height; var i = b.getContext("2d");
                    t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = b } return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png") } },
        Ke = 0;

    function Qe(t, e, i, n, r, o, a, s, h, c) { Object.defineProperty(this, "id", { value: Ke++ }), this.uuid = Ue.generateUUID(), this.name = "", this.image = void 0 !== t ? t : Qe.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : Qe.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : At, this.wrapT = void 0 !== n ? n : At, this.magFilter = void 0 !== r ? r : Rt, this.minFilter = void 0 !== o ? o : Nt, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== a ? a : Zt, this.type = void 0 !== s ? s : Dt, this.offset = new Be(0, 0), this.repeat = new Be(1, 1), this.center = new Be(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new We, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== c ? c : Ce, this.version = 0, this.onUpdate = null }

    function ti(t, e, i, n) { this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1 }

    function ei(t, e, i) { this.width = t, this.height = e, this.scissor = new ti(0, 0, t, e), this.scissorTest = !1, this.viewport = new ti(0, 0, t, e), i = i || {}, this.texture = new Qe(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : Rt, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null }

    function ii(t, e, i) { ei.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0 }

    function ni(t, e, i, n, r, o, a, s, h, c, l, u) { Qe.call(this, null, o, a, s, h, c, n, r, l, u), this.image = { data: t, width: e, height: i }, this.magFilter = void 0 !== h ? h : Ct, this.minFilter = void 0 !== c ? c : Ct, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 }

    function ri(t, e) { this.min = void 0 !== t ? t : new Ve(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new Ve(-1 / 0, -1 / 0, -1 / 0) }

    function oi(t, e) { this.center = void 0 !== t ? t : new Ve, this.radius = void 0 !== e ? e : 0 }

    function ai(t, e) { this.normal = void 0 !== t ? t : new Ve(1, 0, 0), this.constant = void 0 !== e ? e : 0 }

    function si(t, e, i, n, r, o) { this.planes = [void 0 !== t ? t : new ai, void 0 !== e ? e : new ai, void 0 !== i ? i : new ai, void 0 !== n ? n : new ai, void 0 !== r ? r : new ai, void 0 !== o ? o : new ai] } Qe.DEFAULT_IMAGE = void 0, Qe.DEFAULT_MAPPING = 300, Qe.prototype = Object.assign(Object.create(c.prototype), { constructor: Qe, isTexture: !0, updateMatrix: function() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this }, toJSON: function(t) { var e = void 0 === t || "string" == typeof t; if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid]; var i = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY }; if (void 0 !== this.image) { var n = this.image; if (void 0 === n.uuid && (n.uuid = Ue.generateUUID()), !e && void 0 === t.images[n.uuid]) { var r; if (Array.isArray(n)) { r = []; for (var o = 0, a = n.length; o < a; o++) r.push($e.getDataURL(n[o])) } else r = $e.getDataURL(n);
                    t.images[n.uuid] = { uuid: n.uuid, url: r } } i.image = n.uuid } return e || (t.textures[this.uuid] = i), i }, dispose: function() { this.dispatchEvent({ type: "dispose" }) }, transformUv: function(t) { if (300 !== this.mapping) return t; if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
                case Mt:
                    t.x = t.x - Math.floor(t.x); break;
                case At:
                    t.x = t.x < 0 ? 0 : 1; break;
                case Lt:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x) }
            if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                case Mt:
                    t.y = t.y - Math.floor(t.y); break;
                case At:
                    t.y = t.y < 0 ? 0 : 1; break;
                case Lt:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y) }
            return this.flipY && (t.y = 1 - t.y), t } }), Object.defineProperty(Qe.prototype, "needsUpdate", { set: function(t) {!0 === t && this.version++ } }), Object.assign(ti.prototype, { isVector4: !0, set: function(t, e, i, n) { return this.x = t, this.y = e, this.z = i, this.w = n, this }, setScalar: function(t) { return this.x = t, this.y = t, this.z = t, this.w = t, this }, setX: function(t) { return this.x = t, this }, setY: function(t) { return this.y = t, this }, setZ: function(t) { return this.z = t, this }, setW: function(t) { return this.w = t, this }, setComponent: function(t, e) { switch (t) {
                case 0:
                    this.x = e; break;
                case 1:
                    this.y = e; break;
                case 2:
                    this.z = e; break;
                case 3:
                    this.w = e; break;
                default:
                    throw new Error("index is out of range: " + t) } return this }, getComponent: function(t) { switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t) } }, clone: function() { return new this.constructor(this.x, this.y, this.z, this.w) }, copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this }, add: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this) }, addScalar: function(t) { return this.x += t, this.y += t, this.z += t, this.w += t, this }, addVectors: function(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this }, addScaledVector: function(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this }, sub: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this) }, subScalar: function(t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this }, subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this }, multiplyScalar: function(t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this }, applyMatrix4: function(t) { var e = this.x,
                i = this.y,
                n = this.z,
                r = this.w,
                o = t.elements; return this.x = o[0] * e + o[4] * i + o[8] * n + o[12] * r, this.y = o[1] * e + o[5] * i + o[9] * n + o[13] * r, this.z = o[2] * e + o[6] * i + o[10] * n + o[14] * r, this.w = o[3] * e + o[7] * i + o[11] * n + o[15] * r, this }, divideScalar: function(t) { return this.multiplyScalar(1 / t) }, setAxisAngleFromQuaternion: function(t) { this.w = 2 * Math.acos(t.w); var e = Math.sqrt(1 - t.w * t.w); return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this }, setAxisAngleFromRotationMatrix: function(t) { var e, i, n, r, o = t.elements,
                a = o[0],
                s = o[4],
                h = o[8],
                c = o[1],
                l = o[5],
                u = o[9],
                p = o[2],
                f = o[6],
                d = o[10]; if (Math.abs(s - c) < .01 && Math.abs(h - p) < .01 && Math.abs(u - f) < .01) { if (Math.abs(s + c) < .1 && Math.abs(h + p) < .1 && Math.abs(u + f) < .1 && Math.abs(a + l + d - 3) < .1) return this.set(1, 0, 0, 0), this;
                e = Math.PI; var m = (a + 1) / 2,
                    g = (l + 1) / 2,
                    v = (d + 1) / 2,
                    y = (s + c) / 4,
                    _ = (h + p) / 4,
                    x = (u + f) / 4; return m > g && m > v ? m < .01 ? (i = 0, n = .707106781, r = .707106781) : (n = y / (i = Math.sqrt(m)), r = _ / i) : g > v ? g < .01 ? (i = .707106781, n = 0, r = .707106781) : (i = y / (n = Math.sqrt(g)), r = x / n) : v < .01 ? (i = .707106781, n = .707106781, r = 0) : (i = _ / (r = Math.sqrt(v)), n = x / r), this.set(i, n, r, e), this } var b = Math.sqrt((f - u) * (f - u) + (h - p) * (h - p) + (c - s) * (c - s)); return Math.abs(b) < .001 && (b = 1), this.x = (f - u) / b, this.y = (h - p) / b, this.z = (c - s) / b, this.w = Math.acos((a + l + d - 1) / 2), this }, min: function(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this }, max: function(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this }, clamp: function(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this }, clampScalar: function() { var t, e; return function(i, n) { return void 0 === t && (t = new ti, e = new ti), t.set(i, i, i, i), e.set(n, n, n, n), this.clamp(t, e) } }(), clampLength: function(t, e) { var i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i))) }, floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this }, ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this }, round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this }, roundToZero: function() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this }, negate: function() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this }, dot: function(t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w }, lengthSq: function() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w }, length: function() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) }, manhattanLength: function() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) }, normalize: function() { return this.divideScalar(this.length() || 1) }, setLength: function(t) { return this.normalize().multiplyScalar(t) }, lerp: function(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this }, lerpVectors: function(t, e, i) { return this.subVectors(e, t).multiplyScalar(i).add(t) }, equals: function(t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w }, fromArray: function(t, e) { return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t }, fromBufferAttribute: function(t, e, i) { return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this } }), ei.prototype = Object.assign(Object.create(c.prototype), { constructor: ei, isWebGLRenderTarget: !0, setSize: function(t, e) { this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e) }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), ii.prototype = Object.create(ei.prototype), ii.prototype.constructor = ii, ii.prototype.isWebGLRenderTargetCube = !0, ni.prototype = Object.create(Qe.prototype), ni.prototype.constructor = ni, ni.prototype.isDataTexture = !0, Object.assign(ri.prototype, { isBox3: !0, set: function(t, e) { return this.min.copy(t), this.max.copy(e), this }, setFromArray: function(t) { for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, h = t.length; s < h; s += 3) { var c = t[s],
                    l = t[s + 1],
                    u = t[s + 2];
                c < e && (e = c), l < i && (i = l), u < n && (n = u), c > r && (r = c), l > o && (o = l), u > a && (a = u) } return this.min.set(e, i, n), this.max.set(r, o, a), this }, setFromBufferAttribute: function(t) { for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, h = t.count; s < h; s++) { var c = t.getX(s),
                    l = t.getY(s),
                    u = t.getZ(s);
                c < e && (e = c), l < i && (i = l), u < n && (n = u), c > r && (r = c), l > o && (o = l), u > a && (a = u) } return this.min.set(e, i, n), this.max.set(r, o, a), this }, setFromPoints: function(t) { this.makeEmpty(); for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]); return this }, setFromCenterAndSize: function() { var t = new Ve; return function(e, i) { var n = t.copy(i).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } }(), setFromObject: function(t) { return this.makeEmpty(), this.expandByObject(t) }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.min.copy(t.min), this.max.copy(t.max), this }, makeEmpty: function() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this }, isEmpty: function() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z }, getCenter: function(t) { return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new Ve), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) }, getSize: function(t) { return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new Ve), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min) }, expandByPoint: function(t) { return this.min.min(t), this.max.max(t), this }, expandByVector: function(t) { return this.min.sub(t), this.max.add(t), this }, expandByScalar: function(t) { return this.min.addScalar(-t), this.max.addScalar(t), this }, expandByObject: function() { var t, e, i, n = new Ve;

            function r(r) { var o = r.geometry; if (void 0 !== o)
                    if (o.isGeometry) { var a = o.vertices; for (e = 0, i = a.length; e < i; e++) n.copy(a[e]), n.applyMatrix4(r.matrixWorld), t.expandByPoint(n) } else if (o.isBufferGeometry) { var s = o.attributes.position; if (void 0 !== s)
                        for (e = 0, i = s.count; e < i; e++) n.fromBufferAttribute(s, e).applyMatrix4(r.matrixWorld), t.expandByPoint(n) } } return function(e) { return t = this, e.updateMatrixWorld(!0), e.traverse(r), this } }(), containsPoint: function(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z) }, containsBox: function(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z }, getParameter: function(t, e) { return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new Ve), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)) }, intersectsBox: function(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z) }, intersectsSphere: (Ye = new Ve, function(t) { return this.clampPoint(t.center, Ye), Ye.distanceToSquared(t.center) <= t.radius * t.radius }), intersectsPlane: function(t) { var e, i; return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant }, intersectsTriangle: function() { var t = new Ve,
                e = new Ve,
                i = new Ve,
                n = new Ve,
                r = new Ve,
                o = new Ve,
                a = new Ve,
                s = new Ve,
                h = new Ve,
                c = new Ve;

            function l(n) { var r, o; for (r = 0, o = n.length - 3; r <= o; r += 3) { a.fromArray(n, r); var s = h.x * Math.abs(a.x) + h.y * Math.abs(a.y) + h.z * Math.abs(a.z),
                        c = t.dot(a),
                        l = e.dot(a),
                        u = i.dot(a); if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > s) return !1 } return !0 } return function(a) { if (this.isEmpty()) return !1;
                this.getCenter(s), h.subVectors(this.max, s), t.subVectors(a.a, s), e.subVectors(a.b, s), i.subVectors(a.c, s), n.subVectors(e, t), r.subVectors(i, e), o.subVectors(t, i); var u = [0, -n.z, n.y, 0, -r.z, r.y, 0, -o.z, o.y, n.z, 0, -n.x, r.z, 0, -r.x, o.z, 0, -o.x, -n.y, n.x, 0, -r.y, r.x, 0, -o.y, o.x, 0]; return !!l(u) && (!!l(u = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (c.crossVectors(n, r), l(u = [c.x, c.y, c.z]))) } }(), clampPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new Ve), e.copy(t).clamp(this.min, this.max) }, distanceToPoint: function() { var t = new Ve; return function(e) { return t.copy(e).clamp(this.min, this.max).sub(e).length() } }(), getBoundingSphere: function() { var t = new Ve; return function(e) { return void 0 === e && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), e = new oi), this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e } }(), intersect: function(t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this }, union: function(t) { return this.min.min(t.min), this.max.max(t.max), this }, applyMatrix4: (Xe = [new Ve, new Ve, new Ve, new Ve, new Ve, new Ve, new Ve, new Ve], function(t) { return this.isEmpty() ? this : (Xe[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Xe[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Xe[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Xe[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Xe[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Xe[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Xe[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Xe[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Xe), this) }), translate: function(t) { return this.min.add(t), this.max.add(t), this }, equals: function(t) { return t.min.equals(this.min) && t.max.equals(this.max) } }), Object.assign(oi.prototype, { set: function(t, e) { return this.center.copy(t), this.radius = e, this }, setFromPoints: (qe = new ri, function(t, e) { var i = this.center;
            void 0 !== e ? i.copy(e) : qe.setFromPoints(t).getCenter(i); for (var n = 0, r = 0, o = t.length; r < o; r++) n = Math.max(n, i.distanceToSquared(t[r])); return this.radius = Math.sqrt(n), this }), clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.center.copy(t.center), this.radius = t.radius, this }, empty: function() { return this.radius <= 0 }, containsPoint: function(t) { return t.distanceToSquared(this.center) <= this.radius * this.radius }, distanceToPoint: function(t) { return t.distanceTo(this.center) - this.radius }, intersectsSphere: function(t) { var e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e }, intersectsBox: function(t) { return t.intersectsSphere(this) }, intersectsPlane: function(t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius }, clampPoint: function(t, e) { var i = this.center.distanceToSquared(t); return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new Ve), e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e }, getBoundingBox: function(t) { return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new ri), t.set(this.center, this.center), t.expandByScalar(this.radius), t }, applyMatrix4: function(t) { return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this }, translate: function(t) { return this.center.add(t), this }, equals: function(t) { return t.center.equals(this.center) && t.radius === this.radius } }), Object.assign(ai.prototype, { set: function(t, e) { return this.normal.copy(t), this.constant = e, this }, setComponents: function(t, e, i, n) { return this.normal.set(t, e, i), this.constant = n, this }, setFromNormalAndCoplanarPoint: function(t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this }, setFromCoplanarPoints: function() { var t = new Ve,
                e = new Ve; return function(i, n, r) { var o = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize(); return this.setFromNormalAndCoplanarPoint(o, i), this } }(), clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.normal.copy(t.normal), this.constant = t.constant, this }, normalize: function() { var t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this }, negate: function() { return this.constant *= -1, this.normal.negate(), this }, distanceToPoint: function(t) { return this.normal.dot(t) + this.constant }, distanceToSphere: function(t) { return this.distanceToPoint(t.center) - t.radius }, projectPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new Ve), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t) }, intersectLine: function() { var t = new Ve; return function(e, i) { void 0 === i && (console.warn("THREE.Plane: .intersectLine() target is now required"), i = new Ve); var n = e.delta(t),
                    r = this.normal.dot(n); if (0 === r) return 0 === this.distanceToPoint(e.start) ? i.copy(e.start) : void 0; var o = -(e.start.dot(this.normal) + this.constant) / r; return o < 0 || o > 1 ? void 0 : i.copy(n).multiplyScalar(o).add(e.start) } }(), intersectsLine: function(t) { var e = this.distanceToPoint(t.start),
                i = this.distanceToPoint(t.end); return e < 0 && i > 0 || i < 0 && e > 0 }, intersectsBox: function(t) { return t.intersectsPlane(this) }, intersectsSphere: function(t) { return t.intersectsPlane(this) }, coplanarPoint: function(t) { return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new Ve), t.copy(this.normal).multiplyScalar(-this.constant) }, applyMatrix4: function() { var t = new Ve,
                e = new We; return function(i, n) { var r = n || e.getNormalMatrix(i),
                    o = this.coplanarPoint(t).applyMatrix4(i),
                    a = this.normal.applyMatrix3(r).normalize(); return this.constant = -o.dot(a), this } }(), translate: function(t) { return this.constant -= t.dot(this.normal), this }, equals: function(t) { return t.normal.equals(this.normal) && t.constant === this.constant } }), Object.assign(si.prototype, { set: function(t, e, i, n, r, o) { var a = this.planes; return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(n), a[4].copy(r), a[5].copy(o), this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]); return this }, setFromMatrix: function(t) { var e = this.planes,
                i = t.elements,
                n = i[0],
                r = i[1],
                o = i[2],
                a = i[3],
                s = i[4],
                h = i[5],
                c = i[6],
                l = i[7],
                u = i[8],
                p = i[9],
                f = i[10],
                d = i[11],
                m = i[12],
                g = i[13],
                v = i[14],
                y = i[15]; return e[0].setComponents(a - n, l - s, d - u, y - m).normalize(), e[1].setComponents(a + n, l + s, d + u, y + m).normalize(), e[2].setComponents(a + r, l + h, d + p, y + g).normalize(), e[3].setComponents(a - r, l - h, d - p, y - g).normalize(), e[4].setComponents(a - o, l - c, d - f, y - v).normalize(), e[5].setComponents(a + o, l + c, d + f, y + v).normalize(), this }, intersectsObject: (Je = new oi, function(t) { var e = t.geometry; return null === e.boundingSphere && e.computeBoundingSphere(), Je.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Je) }), intersectsSprite: function() { var t = new oi; return function(e) { return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t) } }(), intersectsSphere: function(t) { for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) { if (e[r].distanceToPoint(i) < n) return !1 } return !0 }, intersectsBox: (Ze = new Ve, function(t) { for (var e = this.planes, i = 0; i < 6; i++) { var n = e[i]; if (Ze.x = n.normal.x > 0 ? t.max.x : t.min.x, Ze.y = n.normal.y > 0 ? t.max.y : t.min.y, Ze.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(Ze) < 0) return !1 } return !0 }), containsPoint: function(t) { for (var e = this.planes, i = 0; i < 6; i++)
                if (e[i].distanceToPoint(t) < 0) return !1; return !0 } });
    var hi = { alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", begin_vertex: "vec3 transformed = vec3( position );", beginnormal_vertex: "vec3 objectNormal = vec3( normal );", bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif", color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif", color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif", color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif", common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif", encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif", envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif", envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif", gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif", lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif", lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif", map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif", map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif", map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif", normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif", normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif", shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif", shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}", uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif", uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif", uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif", uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif", background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}", meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}", normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}", shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}" };

    function ci(t) { var e = {}; for (var i in t)
            for (var n in e[i] = {}, t[i]) { var r = t[i][n];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r }
        return e }

    function li(t) { for (var e = {}, i = 0; i < t.length; i++) { var n = ci(t[i]); for (var r in n) e[r] = n[r] } return e }
    var ui, pi, fi, di = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };

    function mi(t, e, i) { return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i) } Object.assign(mi.prototype, { isColor: !0, r: 1, g: 1, b: 1, set: function(t) { return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this }, setScalar: function(t) { return this.r = t, this.g = t, this.b = t, this }, setHex: function(t) { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this }, setRGB: function(t, e, i) { return this.r = t, this.g = e, this.b = i, this }, setHSL: function() {
            function t(t, e, i) { return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t } return function(e, i, n) { if (e = Ue.euclideanModulo(e, 1), i = Ue.clamp(i, 0, 1), n = Ue.clamp(n, 0, 1), 0 === i) this.r = this.g = this.b = n;
                else { var r = n <= .5 ? n * (1 + i) : n + i - n * i,
                        o = 2 * n - r;
                    this.r = t(o, r, e + 1 / 3), this.g = t(o, r, e), this.b = t(o, r, e - 1 / 3) } return this } }(), setStyle: function(t) {
            function e(e) { void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.") } var i; if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) { var n, r = i[1],
                    o = i[2]; switch (r) {
                    case "rgb":
                    case "rgba":
                        if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this; if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this; break;
                    case "hsl":
                    case "hsla":
                        if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) { var a = parseFloat(n[1]) / 360,
                                s = parseInt(n[2], 10) / 100,
                                h = parseInt(n[3], 10) / 100; return e(n[5]), this.setHSL(a, s, h) } } } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) { var c, l = (c = i[1]).length; if (3 === l) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this; if (6 === l) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this } t && t.length > 0 && (void 0 !== (c = di[t]) ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + t)); return this }, clone: function() { return new this.constructor(this.r, this.g, this.b) }, copy: function(t) { return this.r = t.r, this.g = t.g, this.b = t.b, this }, copyGammaToLinear: function(t, e) { return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this }, copyLinearToGamma: function(t, e) { void 0 === e && (e = 2); var i = e > 0 ? 1 / e : 1; return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this }, convertGammaToLinear: function(t) { return this.copyGammaToLinear(this, t), this }, convertLinearToGamma: function(t) { return this.copyLinearToGamma(this, t), this }, copySRGBToLinear: function() {
            function t(t) { return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4) } return function(e) { return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this } }(), copyLinearToSRGB: function() {
            function t(t) { return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055 } return function(e) { return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this } }(), convertSRGBToLinear: function() { return this.copySRGBToLinear(this), this }, convertLinearToSRGB: function() { return this.copyLinearToSRGB(this), this }, getHex: function() { return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0 }, getHexString: function() { return ("000000" + this.getHex().toString(16)).slice(-6) }, getHSL: function(t) { void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = { h: 0, s: 0, l: 0 }); var e, i, n = this.r,
                r = this.g,
                o = this.b,
                a = Math.max(n, r, o),
                s = Math.min(n, r, o),
                h = (s + a) / 2; if (s === a) e = 0, i = 0;
            else { var c = a - s; switch (i = h <= .5 ? c / (a + s) : c / (2 - a - s), a) {
                    case n:
                        e = (r - o) / c + (r < o ? 6 : 0); break;
                    case r:
                        e = (o - n) / c + 2; break;
                    case o:
                        e = (n - r) / c + 4 } e /= 6 } return t.h = e, t.s = i, t.l = h, t }, getStyle: function() { return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")" }, offsetHSL: (fi = {}, function(t, e, i) { return this.getHSL(fi), fi.h += t, fi.s += e, fi.l += i, this.setHSL(fi.h, fi.s, fi.l), this }), add: function(t) { return this.r += t.r, this.g += t.g, this.b += t.b, this }, addColors: function(t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this }, addScalar: function(t) { return this.r += t, this.g += t, this.b += t, this }, sub: function(t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this }, multiply: function(t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this }, multiplyScalar: function(t) { return this.r *= t, this.g *= t, this.b *= t, this }, lerp: function(t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this }, lerpHSL: (ui = { h: 0, s: 0, l: 0 }, pi = { h: 0, s: 0, l: 0 }, function(t, e) { this.getHSL(ui), t.getHSL(pi); var i = Ue.lerp(ui.h, pi.h, e),
                n = Ue.lerp(ui.s, pi.s, e),
                r = Ue.lerp(ui.l, pi.l, e); return this.setHSL(i, n, r), this }), equals: function(t) { return t.r === this.r && t.g === this.g && t.b === this.b }, fromArray: function(t, e) { return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t }, toJSON: function() { return this.getHex() } });
    var gi, vi = { common: { diffuse: { value: new mi(15658734) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new We }, alphaMap: { value: null } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: .98 }, maxMipLevel: { value: 0 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new Be(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new mi(16777215) } }, lights: { ambientLightColor: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } } }, points: { diffuse: { value: new mi(15658734) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, uvTransform: { value: new We } }, sprite: { diffuse: { value: new mi(15658734) }, opacity: { value: 1 }, center: { value: new Be(.5, .5) }, rotation: { value: 0 }, map: { value: null }, uvTransform: { value: new We } } },
        yi = { basic: { uniforms: li([vi.common, vi.specularmap, vi.envmap, vi.aomap, vi.lightmap, vi.fog]), vertexShader: hi.meshbasic_vert, fragmentShader: hi.meshbasic_frag }, lambert: { uniforms: li([vi.common, vi.specularmap, vi.envmap, vi.aomap, vi.lightmap, vi.emissivemap, vi.fog, vi.lights, { emissive: { value: new mi(0) } }]), vertexShader: hi.meshlambert_vert, fragmentShader: hi.meshlambert_frag }, phong: { uniforms: li([vi.common, vi.specularmap, vi.envmap, vi.aomap, vi.lightmap, vi.emissivemap, vi.bumpmap, vi.normalmap, vi.displacementmap, vi.gradientmap, vi.fog, vi.lights, { emissive: { value: new mi(0) }, specular: { value: new mi(1118481) }, shininess: { value: 30 } }]), vertexShader: hi.meshphong_vert, fragmentShader: hi.meshphong_frag }, standard: { uniforms: li([vi.common, vi.envmap, vi.aomap, vi.lightmap, vi.emissivemap, vi.bumpmap, vi.normalmap, vi.displacementmap, vi.roughnessmap, vi.metalnessmap, vi.fog, vi.lights, { emissive: { value: new mi(0) }, roughness: { value: .5 }, metalness: { value: .5 }, envMapIntensity: { value: 1 } }]), vertexShader: hi.meshphysical_vert, fragmentShader: hi.meshphysical_frag }, matcap: { uniforms: li([vi.common, vi.bumpmap, vi.normalmap, vi.displacementmap, vi.fog, { matcap: { value: null } }]), vertexShader: hi.meshmatcap_vert, fragmentShader: hi.meshmatcap_frag }, points: { uniforms: li([vi.points, vi.fog]), vertexShader: hi.points_vert, fragmentShader: hi.points_frag }, dashed: { uniforms: li([vi.common, vi.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: hi.linedashed_vert, fragmentShader: hi.linedashed_frag }, depth: { uniforms: li([vi.common, vi.displacementmap]), vertexShader: hi.depth_vert, fragmentShader: hi.depth_frag }, normal: { uniforms: li([vi.common, vi.bumpmap, vi.normalmap, vi.displacementmap, { opacity: { value: 1 } }]), vertexShader: hi.normal_vert, fragmentShader: hi.normal_frag }, sprite: { uniforms: li([vi.sprite, vi.fog]), vertexShader: hi.sprite_vert, fragmentShader: hi.sprite_frag }, background: { uniforms: { uvTransform: { value: new We }, t2D: { value: null } }, vertexShader: hi.background_vert, fragmentShader: hi.background_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: hi.cube_vert, fragmentShader: hi.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: hi.equirect_vert, fragmentShader: hi.equirect_frag }, distanceRGBA: { uniforms: li([vi.common, vi.displacementmap, { referencePosition: { value: new Ve }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: hi.distanceRGBA_vert, fragmentShader: hi.distanceRGBA_frag }, shadow: { uniforms: li([vi.lights, vi.fog, { color: { value: new mi(0) }, opacity: { value: 1 } }]), vertexShader: hi.shadow_vert, fragmentShader: hi.shadow_frag } };

    function _i() { var t = null,
            e = !1,
            i = null;

        function n(r, o) {!1 !== e && (i(r, o), t.requestAnimationFrame(n)) } return { start: function() {!0 !== e && null !== i && (t.requestAnimationFrame(n), e = !0) }, stop: function() { e = !1 }, setAnimationLoop: function(t) { i = t }, setContext: function(e) { t = e } } }

    function xi(t) { var e = new WeakMap; return { get: function(t) { return t.isInterleavedBufferAttribute && (t = t.data), e.get(t) }, remove: function(i) { i.isInterleavedBufferAttribute && (i = i.data); var n = e.get(i);
                n && (t.deleteBuffer(n.buffer), e.delete(i)) }, update: function(i, n) { i.isInterleavedBufferAttribute && (i = i.data); var r = e.get(i);
                void 0 === r ? e.set(i, function(e, i) { var n = e.array,
                        r = e.dynamic ? 35048 : 35044,
                        o = t.createBuffer();
                    t.bindBuffer(i, o), t.bufferData(i, n, r), e.onUploadCallback(); var a = 5126; return n instanceof Float32Array ? a = 5126 : n instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : n instanceof Uint16Array ? a = 5123 : n instanceof Int16Array ? a = 5122 : n instanceof Uint32Array ? a = 5125 : n instanceof Int32Array ? a = 5124 : n instanceof Int8Array ? a = 5120 : n instanceof Uint8Array && (a = 5121), { buffer: o, type: a, bytesPerElement: n.BYTES_PER_ELEMENT, version: e.version } }(i, n)) : r.version < i.version && (function(e, i, n) { var r = i.array,
                        o = i.updateRange;
                    t.bindBuffer(n, e), !1 === i.dynamic ? t.bufferData(n, r, 35044) : -1 === o.count ? t.bufferSubData(n, 0, r) : 0 === o.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(n, o.offset * r.BYTES_PER_ELEMENT, r.subarray(o.offset, o.offset + o.count)), o.count = -1) }(r.buffer, i, n), r.version = i.version) } } }

    function bi(t, e, i, n, r, o) { this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new Ve, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new mi, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== o ? o : 0 }

    function wi(t, e, i, n) { this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || wi.DefaultOrder }

    function Ti() { this.mask = 1 } yi.physical = { uniforms: li([yi.standard.uniforms, { clearCoat: { value: 0 }, clearCoatRoughness: { value: 0 } }]), vertexShader: hi.meshphysical_vert, fragmentShader: hi.meshphysical_frag }, Object.assign(bi.prototype, { clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex; for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone(); for (e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone(); return this } }), wi.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], wi.DefaultOrder = "XYZ", Object.defineProperties(wi.prototype, { x: { get: function() { return this._x }, set: function(t) { this._x = t, this.onChangeCallback() } }, y: { get: function() { return this._y }, set: function(t) { this._y = t, this.onChangeCallback() } }, z: { get: function() { return this._z }, set: function(t) { this._z = t, this.onChangeCallback() } }, order: { get: function() { return this._order }, set: function(t) { this._order = t, this.onChangeCallback() } } }), Object.assign(wi.prototype, { isEuler: !0, set: function(t, e, i, n) { return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this }, clone: function() { return new this.constructor(this._x, this._y, this._z, this._order) }, copy: function(t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this }, setFromRotationMatrix: function(t, e, i) { var n = Ue.clamp,
                r = t.elements,
                o = r[0],
                a = r[4],
                s = r[8],
                h = r[1],
                c = r[5],
                l = r[9],
                u = r[2],
                p = r[6],
                f = r[10]; return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(p, c), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, f), this._z = Math.atan2(h, c)) : (this._y = Math.atan2(-u, o), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(h, o))) : "ZYX" === e ? (this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, f), this._z = Math.atan2(h, o)) : (this._x = 0, this._z = Math.atan2(-a, c))) : "YZX" === e ? (this._z = Math.asin(n(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, o)) : (this._x = 0, this._y = Math.atan2(s, f))) : "XZY" === e ? (this._z = Math.asin(-n(a, -1, 1)), Math.abs(a) < .99999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(s, o)) : (this._x = Math.atan2(-l, f), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== i && this.onChangeCallback(), this }, setFromQuaternion: function() { var t = new ze; return function(e, i, n) { return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, n) } }(), setFromVector3: function(t, e) { return this.set(t.x, t.y, t.z, e || this._order) }, reorder: (gi = new je, function(t) { return gi.setFromEuler(this), this.setFromQuaternion(gi, t) }), equals: function(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order }, fromArray: function(t) { return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this }, toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t }, toVector3: function(t) { return t ? t.set(this._x, this._y, this._z) : new Ve(this._x, this._y, this._z) }, onChange: function(t) { return this.onChangeCallback = t, this }, onChangeCallback: function() {} }), Object.assign(Ti.prototype, { set: function(t) { this.mask = 1 << t | 0 }, enable: function(t) { this.mask |= 1 << t | 0 }, toggle: function(t) { this.mask ^= 1 << t | 0 }, disable: function(t) { this.mask &= ~(1 << t | 0) }, test: function(t) { return 0 != (this.mask & t.mask) } });
    var Ei, Si, Mi, Ai, Li = 0;

    function Ci() { Object.defineProperty(this, "id", { value: Li++ }), this.uuid = Ue.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ci.DefaultUp.clone(); var t = new Ve,
            e = new wi,
            i = new je,
            n = new Ve(1, 1, 1);
        e.onChange(function() { i.setFromEuler(e, !1) }), i.onChange(function() { e.setFromQuaternion(i, void 0, !1) }), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: e }, quaternion: { configurable: !0, enumerable: !0, value: i }, scale: { configurable: !0, enumerable: !0, value: n }, modelViewMatrix: { value: new ze }, normalMatrix: { value: new We } }), this.matrix = new ze, this.matrixWorld = new ze, this.matrixAutoUpdate = Ci.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Ti, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {} } Ci.DefaultUp = new Ve(0, 1, 0), Ci.DefaultMatrixAutoUpdate = !0, Ci.prototype = Object.assign(Object.create(c.prototype), { constructor: Ci, isObject3D: !0, onBeforeRender: function() {}, onAfterRender: function() {}, applyMatrix: function(t) { this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale) }, applyQuaternion: function(t) { return this.quaternion.premultiply(t), this }, setRotationFromAxisAngle: function(t, e) { this.quaternion.setFromAxisAngle(t, e) }, setRotationFromEuler: function(t) { this.quaternion.setFromEuler(t, !0) }, setRotationFromMatrix: function(t) { this.quaternion.setFromRotationMatrix(t) }, setRotationFromQuaternion: function(t) { this.quaternion.copy(t) }, rotateOnAxis: (Ai = new je, function(t, e) { return Ai.setFromAxisAngle(t, e), this.quaternion.multiply(Ai), this }), rotateOnWorldAxis: function() { var t = new je; return function(e, i) { return t.setFromAxisAngle(e, i), this.quaternion.premultiply(t), this } }(), rotateX: function() { var t = new Ve(1, 0, 0); return function(e) { return this.rotateOnAxis(t, e) } }(), rotateY: function() { var t = new Ve(0, 1, 0); return function(e) { return this.rotateOnAxis(t, e) } }(), rotateZ: function() { var t = new Ve(0, 0, 1); return function(e) { return this.rotateOnAxis(t, e) } }(), translateOnAxis: function() { var t = new Ve; return function(e, i) { return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this } }(), translateX: function() { var t = new Ve(1, 0, 0); return function(e) { return this.translateOnAxis(t, e) } }(), translateY: function() { var t = new Ve(0, 1, 0); return function(e) { return this.translateOnAxis(t, e) } }(), translateZ: function() { var t = new Ve(0, 0, 1); return function(e) { return this.translateOnAxis(t, e) } }(), localToWorld: function(t) { return t.applyMatrix4(this.matrixWorld) }, worldToLocal: (Mi = new ze, function(t) { return t.applyMatrix4(Mi.getInverse(this.matrixWorld)) }), lookAt: function() { var t = new je,
                e = new ze,
                i = new Ve,
                n = new Ve; return function(r, o, a) { r.isVector3 ? i.copy(r) : i.set(r, o, a); var s = this.parent;
                this.updateWorldMatrix(!0, !1), n.setFromMatrixPosition(this.matrixWorld), this.isCamera ? e.lookAt(n, i, this.up) : e.lookAt(i, n, this.up), this.quaternion.setFromRotationMatrix(e), s && (e.extractRotation(s.matrixWorld), t.setFromRotationMatrix(e), this.quaternion.premultiply(t.inverse())) } }(), add: function(t) { if (arguments.length > 1) { for (var e = 0; e < arguments.length; e++) this.add(arguments[e]); return this } return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({ type: "added" }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this) }, remove: function(t) { if (arguments.length > 1) { for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]); return this } var i = this.children.indexOf(t); return -1 !== i && (t.parent = null, t.dispatchEvent({ type: "removed" }), this.children.splice(i, 1)), this }, getObjectById: function(t) { return this.getObjectByProperty("id", t) }, getObjectByName: function(t) { return this.getObjectByProperty("name", t) }, getObjectByProperty: function(t, e) { if (this[t] === e) return this; for (var i = 0, n = this.children.length; i < n; i++) { var r = this.children[i].getObjectByProperty(t, e); if (void 0 !== r) return r } }, getWorldPosition: function(t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new Ve), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld) }, getWorldQuaternion: (Ei = new Ve, Si = new Ve, function(t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new je), this.updateMatrixWorld(!0), this.matrixWorld.decompose(Ei, t, Si), t }), getWorldScale: function() { var t = new Ve,
                e = new je; return function(i) { return void 0 === i && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), i = new Ve), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, i), i } }(), getWorldDirection: function(t) { void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new Ve), this.updateMatrixWorld(!0); var e = this.matrixWorld.elements; return t.set(e[8], e[9], e[10]).normalize() }, raycast: function() {}, traverse: function(t) { t(this); for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t) }, traverseVisible: function(t) { if (!1 !== this.visible) { t(this); for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t) } }, traverseAncestors: function(t) { var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t)) }, updateMatrix: function() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 }, updateMatrixWorld: function(t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0); for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t) }, updateWorldMatrix: function(t, e) { var i = this.parent; if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
                for (var n = this.children, r = 0, o = n.length; r < o; r++) n[r].updateWorldMatrix(!1, !0) }, toJSON: function(t) { var e = void 0 === t || "string" == typeof t,
                i = {};
            e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {} }, i.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }); var n = {};

            function r(e, i) { return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid } if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isMesh || this.isLine || this.isPoints) { n.geometry = r(t.geometries, this.geometry); var o = this.geometry.parameters; if (void 0 !== o && void 0 !== o.shapes) { var a = o.shapes; if (Array.isArray(a))
                        for (var s = 0, h = a.length; s < h; s++) { var c = a[s];
                            r(t.shapes, c) } else r(t.shapes, a) } } if (void 0 !== this.material)
                if (Array.isArray(this.material)) { var l = []; for (s = 0, h = this.material.length; s < h; s++) l.push(r(t.materials, this.material[s]));
                    n.material = l } else n.material = r(t.materials, this.material); if (this.children.length > 0) { n.children = []; for (s = 0; s < this.children.length; s++) n.children.push(this.children[s].toJSON(t).object) } if (e) { var u = m(t.geometries),
                    p = m(t.materials),
                    f = m(t.textures),
                    d = m(t.images);
                a = m(t.shapes);
                u.length > 0 && (i.geometries = u), p.length > 0 && (i.materials = p), f.length > 0 && (i.textures = f), d.length > 0 && (i.images = d), a.length > 0 && (i.shapes = a) } return i.object = n, i;

            function m(t) { var e = []; for (var i in t) { var n = t[i];
                    delete n.metadata, e.push(n) } return e } }, clone: function(t) { return (new this.constructor).copy(this, t) }, copy: function(t, e) { if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                for (var i = 0; i < t.children.length; i++) { var n = t.children[i];
                    this.add(n.clone()) }
            return this } });
    var Oi, Pi, Ri = 0;

    function Ii() { Object.defineProperty(this, "id", { value: Ri += 2 }), this.uuid = Ue.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1 }

    function Ni(t, e, i) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = { offset: 0, count: -1 }, this.version = 0 }

    function Di(t, e, i) { Ni.call(this, new Int8Array(t), e, i) }

    function Gi(t, e, i) { Ni.call(this, new Uint8Array(t), e, i) }

    function ki(t, e, i) { Ni.call(this, new Uint8ClampedArray(t), e, i) }

    function Hi(t, e, i) { Ni.call(this, new Int16Array(t), e, i) }

    function Fi(t, e, i) { Ni.call(this, new Uint16Array(t), e, i) }

    function Ui(t, e, i) { Ni.call(this, new Int32Array(t), e, i) }

    function Bi(t, e, i) { Ni.call(this, new Uint32Array(t), e, i) }

    function zi(t, e, i) { Ni.call(this, new Float32Array(t), e, i) }

    function ji(t, e, i) { Ni.call(this, new Float64Array(t), e, i) }

    function Vi() { this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1 }

    function Wi(t) { if (0 === t.length) return -1 / 0; for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]); return e } Ii.prototype = Object.assign(Object.create(c.prototype), { constructor: Ii, isGeometry: !0, applyMatrix: function(t) { for (var e = (new We).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) { this.vertices[i].applyMatrix4(t) } for (i = 0, n = this.faces.length; i < n; i++) { var r = this.faces[i];
                r.normal.applyMatrix3(e).normalize(); for (var o = 0, a = r.vertexNormals.length; o < a; o++) r.vertexNormals[o].applyMatrix3(e).normalize() } return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this }, rotateX: function() { var t = new ze; return function(e) { return t.makeRotationX(e), this.applyMatrix(t), this } }(), rotateY: function() { var t = new ze; return function(e) { return t.makeRotationY(e), this.applyMatrix(t), this } }(), rotateZ: function() { var t = new ze; return function(e) { return t.makeRotationZ(e), this.applyMatrix(t), this } }(), translate: function() { var t = new ze; return function(e, i, n) { return t.makeTranslation(e, i, n), this.applyMatrix(t), this } }(), scale: function() { var t = new ze; return function(e, i, n) { return t.makeScale(e, i, n), this.applyMatrix(t), this } }(), lookAt: (Pi = new Ci, function(t) { Pi.lookAt(t), Pi.updateMatrix(), this.applyMatrix(Pi.matrix) }), fromBufferGeometry: function(t) { var e = this,
                i = null !== t.index ? t.index.array : void 0,
                n = t.attributes,
                r = n.position.array,
                o = void 0 !== n.normal ? n.normal.array : void 0,
                a = void 0 !== n.color ? n.color.array : void 0,
                s = void 0 !== n.uv ? n.uv.array : void 0,
                h = void 0 !== n.uv2 ? n.uv2.array : void 0;
            void 0 !== h && (this.faceVertexUvs[1] = []); for (var c = 0, l = 0; c < r.length; c += 3, l += 2) e.vertices.push((new Ve).fromArray(r, c)), void 0 !== a && e.colors.push((new mi).fromArray(a, c));

            function u(t, i, n, r) { var c = void 0 === a ? [] : [e.colors[t].clone(), e.colors[i].clone(), e.colors[n].clone()],
                    l = new bi(t, i, n, void 0 === o ? [] : [(new Ve).fromArray(o, 3 * t), (new Ve).fromArray(o, 3 * i), (new Ve).fromArray(o, 3 * n)], c, r);
                e.faces.push(l), void 0 !== s && e.faceVertexUvs[0].push([(new Be).fromArray(s, 2 * t), (new Be).fromArray(s, 2 * i), (new Be).fromArray(s, 2 * n)]), void 0 !== h && e.faceVertexUvs[1].push([(new Be).fromArray(h, 2 * t), (new Be).fromArray(h, 2 * i), (new Be).fromArray(h, 2 * n)]) } var p = t.groups; if (p.length > 0)
                for (c = 0; c < p.length; c++)
                    for (var f = p[c], d = f.start, m = (l = d, d + f.count); l < m; l += 3) void 0 !== i ? u(i[l], i[l + 1], i[l + 2], f.materialIndex) : u(l, l + 1, l + 2, f.materialIndex);
            else if (void 0 !== i)
                for (c = 0; c < i.length; c += 3) u(i[c], i[c + 1], i[c + 2]);
            else
                for (c = 0; c < r.length / 3; c += 3) u(c, c + 1, c + 2); return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this }, center: (Oi = new Ve, function() { return this.computeBoundingBox(), this.boundingBox.getCenter(Oi).negate(), this.translate(Oi.x, Oi.y, Oi.z), this }), normalize: function() { this.computeBoundingSphere(); var t = this.boundingSphere.center,
                e = this.boundingSphere.radius,
                i = 0 === e ? 1 : 1 / e,
                n = new ze; return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(n), this }, computeFaceNormals: function() { for (var t = new Ve, e = new Ve, i = 0, n = this.faces.length; i < n; i++) { var r = this.faces[i],
                    o = this.vertices[r.a],
                    a = this.vertices[r.b],
                    s = this.vertices[r.c];
                t.subVectors(s, a), e.subVectors(o, a), t.cross(e), t.normalize(), r.normal.copy(t) } }, computeVertexNormals: function(t) { var e, i, n, r, o, a; for (void 0 === t && (t = !0), a = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) a[e] = new Ve; if (t) { var s, h, c, l = new Ve,
                    u = new Ve; for (n = 0, r = this.faces.length; n < r; n++) o = this.faces[n], s = this.vertices[o.a], h = this.vertices[o.b], c = this.vertices[o.c], l.subVectors(c, h), u.subVectors(s, h), l.cross(u), a[o.a].add(l), a[o.b].add(l), a[o.c].add(l) } else
                for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) a[(o = this.faces[n]).a].add(o.normal), a[o.b].add(o.normal), a[o.c].add(o.normal); for (e = 0, i = this.vertices.length; e < i; e++) a[e].normalize(); for (n = 0, r = this.faces.length; n < r; n++) { var p = (o = this.faces[n]).vertexNormals;
                3 === p.length ? (p[0].copy(a[o.a]), p[1].copy(a[o.b]), p[2].copy(a[o.c])) : (p[0] = a[o.a].clone(), p[1] = a[o.b].clone(), p[2] = a[o.c].clone()) } this.faces.length > 0 && (this.normalsNeedUpdate = !0) }, computeFlatVertexNormals: function() { var t, e, i; for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) { var n = (i = this.faces[t]).vertexNormals;
                3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone()) } this.faces.length > 0 && (this.normalsNeedUpdate = !0) }, computeMorphNormals: function() { var t, e, i, n, r; for (i = 0, n = this.faces.length; i < n; i++)
                for ((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone(); var o = new Ii; for (o.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) { if (!this.morphNormals[t]) { this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = []; var a = this.morphNormals[t].faceNormals,
                        s = this.morphNormals[t].vertexNormals; for (i = 0, n = this.faces.length; i < n; i++) h = new Ve, c = { a: new Ve, b: new Ve, c: new Ve }, a.push(h), s.push(c) } var h, c, l = this.morphNormals[t]; for (o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o.computeVertexNormals(), i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], h = l.faceNormals[i], c = l.vertexNormals[i], h.copy(r.normal), c.a.copy(r.vertexNormals[0]), c.b.copy(r.vertexNormals[1]), c.c.copy(r.vertexNormals[2]) } for (i = 0, n = this.faces.length; i < n; i++)(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals }, computeBoundingBox: function() { null === this.boundingBox && (this.boundingBox = new ri), this.boundingBox.setFromPoints(this.vertices) }, computeBoundingSphere: function() { null === this.boundingSphere && (this.boundingSphere = new oi), this.boundingSphere.setFromPoints(this.vertices) }, merge: function(t, e, i) { if (t && t.isGeometry) { var n, r = this.vertices.length,
                    o = this.vertices,
                    a = t.vertices,
                    s = this.faces,
                    h = t.faces,
                    c = this.faceVertexUvs[0],
                    l = t.faceVertexUvs[0],
                    u = this.colors,
                    p = t.colors;
                void 0 === i && (i = 0), void 0 !== e && (n = (new We).getNormalMatrix(e)); for (var f = 0, d = a.length; f < d; f++) { var m = a[f].clone();
                    void 0 !== e && m.applyMatrix4(e), o.push(m) } for (f = 0, d = p.length; f < d; f++) u.push(p[f].clone()); for (f = 0, d = h.length; f < d; f++) { var g, v, y, _ = h[f],
                        x = _.vertexNormals,
                        b = _.vertexColors;
                    (g = new bi(_.a + r, _.b + r, _.c + r)).normal.copy(_.normal), void 0 !== n && g.normal.applyMatrix3(n).normalize(); for (var w = 0, T = x.length; w < T; w++) v = x[w].clone(), void 0 !== n && v.applyMatrix3(n).normalize(), g.vertexNormals.push(v);
                    g.color.copy(_.color); for (w = 0, T = b.length; w < T; w++) y = b[w], g.vertexColors.push(y.clone());
                    g.materialIndex = _.materialIndex + i, s.push(g) } for (f = 0, d = l.length; f < d; f++) { var E = l[f],
                        S = []; if (void 0 !== E) { for (w = 0, T = E.length; w < T; w++) S.push(E[w].clone());
                        c.push(S) } } } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t) }, mergeMesh: function(t) { t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t) }, mergeVertices: function() { var t, e, i, n, r, o, a, s, h = {},
                c = [],
                l = [],
                u = Math.pow(10, 4); for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], void 0 === h[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (h[e] = i, c.push(this.vertices[i]), l[i] = c.length - 1) : l[i] = l[h[e]]; var p = []; for (i = 0, n = this.faces.length; i < n; i++) {
                (r = this.faces[i]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], o = [r.a, r.b, r.c]; for (var f = 0; f < 3; f++)
                    if (o[f] === o[(f + 1) % 3]) { p.push(i); break } } for (i = p.length - 1; i >= 0; i--) { var d = p[i]; for (this.faces.splice(d, 1), a = 0, s = this.faceVertexUvs.length; a < s; a++) this.faceVertexUvs[a].splice(d, 1) } var m = this.vertices.length - c.length; return this.vertices = c, m }, setFromPoints: function(t) { this.vertices = []; for (var e = 0, i = t.length; e < i; e++) { var n = t[e];
                this.vertices.push(new Ve(n.x, n.y, n.z || 0)) } return this }, sortFacesByMaterialIndex: function() { for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
            t.sort(function(t, e) { return t.materialIndex - e.materialIndex }); var n, r, o = this.faceVertexUvs[0],
                a = this.faceVertexUvs[1];
            o && o.length === e && (n = []), a && a.length === e && (r = []); for (i = 0; i < e; i++) { var s = t[i]._id;
                n && n.push(o[s]), r && r.push(a[s]) } n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r) }, toJSON: function() { var t = { metadata: { version: 4.5, type: "Geometry", generator: "Geometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) { var e = this.parameters; for (var i in e) void 0 !== e[i] && (t[i] = e[i]); return t } for (var n = [], r = 0; r < this.vertices.length; r++) { var o = this.vertices[r];
                n.push(o.x, o.y, o.z) } var a = [],
                s = [],
                h = {},
                c = [],
                l = {},
                u = [],
                p = {}; for (r = 0; r < this.faces.length; r++) { var f = this.faces[r],
                    d = void 0 !== this.faceVertexUvs[0][r],
                    m = f.normal.length() > 0,
                    g = f.vertexNormals.length > 0,
                    v = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b,
                    y = f.vertexColors.length > 0,
                    _ = 0; if (_ = T(_, 0, 0), _ = T(_, 1, !0), _ = T(_, 2, !1), _ = T(_, 3, d), _ = T(_, 4, m), _ = T(_, 5, g), _ = T(_, 6, v), _ = T(_, 7, y), a.push(_), a.push(f.a, f.b, f.c), a.push(f.materialIndex), d) { var x = this.faceVertexUvs[0][r];
                    a.push(M(x[0]), M(x[1]), M(x[2])) } if (m && a.push(E(f.normal)), g) { var b = f.vertexNormals;
                    a.push(E(b[0]), E(b[1]), E(b[2])) } if (v && a.push(S(f.color)), y) { var w = f.vertexColors;
                    a.push(S(w[0]), S(w[1]), S(w[2])) } }

            function T(t, e, i) { return i ? t | 1 << e : t & ~(1 << e) }

            function E(t) { var e = t.x.toString() + t.y.toString() + t.z.toString(); return void 0 !== h[e] ? h[e] : (h[e] = s.length / 3, s.push(t.x, t.y, t.z), h[e]) }

            function S(t) { var e = t.r.toString() + t.g.toString() + t.b.toString(); return void 0 !== l[e] ? l[e] : (l[e] = c.length, c.push(t.getHex()), l[e]) }

            function M(t) { var e = t.x.toString() + t.y.toString(); return void 0 !== p[e] ? p[e] : (p[e] = u.length / 2, u.push(t.x, t.y), p[e]) } return t.data = {}, t.data.vertices = n, t.data.normals = s, c.length > 0 && (t.data.colors = c), u.length > 0 && (t.data.uvs = [u]), t.data.faces = a, t }, clone: function() { return (new Ii).copy(this) }, copy: function(t) { var e, i, n, r, o, a;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name; var s = t.vertices; for (e = 0, i = s.length; e < i; e++) this.vertices.push(s[e].clone()); var h = t.colors; for (e = 0, i = h.length; e < i; e++) this.colors.push(h[e].clone()); var c = t.faces; for (e = 0, i = c.length; e < i; e++) this.faces.push(c[e].clone()); for (e = 0, i = t.faceVertexUvs.length; e < i; e++) { var l = t.faceVertexUvs[e]; for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = l.length; n < r; n++) { var u = l[n],
                        p = []; for (o = 0, a = u.length; o < a; o++) { var f = u[o];
                        p.push(f.clone()) } this.faceVertexUvs[e].push(p) } } var d = t.morphTargets; for (e = 0, i = d.length; e < i; e++) { var m = {}; if (m.name = d[e].name, void 0 !== d[e].vertices)
                    for (m.vertices = [], n = 0, r = d[e].vertices.length; n < r; n++) m.vertices.push(d[e].vertices[n].clone()); if (void 0 !== d[e].normals)
                    for (m.normals = [], n = 0, r = d[e].normals.length; n < r; n++) m.normals.push(d[e].normals[n].clone());
                this.morphTargets.push(m) } var g = t.morphNormals; for (e = 0, i = g.length; e < i; e++) { var v = {}; if (void 0 !== g[e].vertexNormals)
                    for (v.vertexNormals = [], n = 0, r = g[e].vertexNormals.length; n < r; n++) { var y = g[e].vertexNormals[n],
                            _ = {};
                        _.a = y.a.clone(), _.b = y.b.clone(), _.c = y.c.clone(), v.vertexNormals.push(_) }
                if (void 0 !== g[e].faceNormals)
                    for (v.faceNormals = [], n = 0, r = g[e].faceNormals.length; n < r; n++) v.faceNormals.push(g[e].faceNormals[n].clone());
                this.morphNormals.push(v) } var x = t.skinWeights; for (e = 0, i = x.length; e < i; e++) this.skinWeights.push(x[e].clone()); var b = t.skinIndices; for (e = 0, i = b.length; e < i; e++) this.skinIndices.push(b[e].clone()); var w = t.lineDistances; for (e = 0, i = w.length; e < i; e++) this.lineDistances.push(w[e]); var T = t.boundingBox;
            null !== T && (this.boundingBox = T.clone()); var E = t.boundingSphere; return null !== E && (this.boundingSphere = E.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), Object.defineProperty(Ni.prototype, "needsUpdate", { set: function(t) {!0 === t && this.version++ } }), Object.assign(Ni.prototype, { isBufferAttribute: !0, onUploadCallback: function() {}, setArray: function(t) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this }, setDynamic: function(t) { return this.dynamic = t, this }, copy: function(t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this }, copyAt: function(t, e, i) { t *= this.itemSize, i *= e.itemSize; for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n]; return this }, copyArray: function(t) { return this.array.set(t), this }, copyColorsArray: function(t) { for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) { var o = t[n];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), o = new mi), e[i++] = o.r, e[i++] = o.g, e[i++] = o.b } return this }, copyVector2sArray: function(t) { for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) { var o = t[n];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), o = new Be), e[i++] = o.x, e[i++] = o.y } return this }, copyVector3sArray: function(t) { for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) { var o = t[n];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), o = new Ve), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z } return this }, copyVector4sArray: function(t) { for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) { var o = t[n];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), o = new ti), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z, e[i++] = o.w } return this }, set: function(t, e) { return void 0 === e && (e = 0), this.array.set(t, e), this }, getX: function(t) { return this.array[t * this.itemSize] }, setX: function(t, e) { return this.array[t * this.itemSize] = e, this }, getY: function(t) { return this.array[t * this.itemSize + 1] }, setY: function(t, e) { return this.array[t * this.itemSize + 1] = e, this }, getZ: function(t) { return this.array[t * this.itemSize + 2] }, setZ: function(t, e) { return this.array[t * this.itemSize + 2] = e, this }, getW: function(t) { return this.array[t * this.itemSize + 3] }, setW: function(t, e) { return this.array[t * this.itemSize + 3] = e, this }, setXY: function(t, e, i) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this }, setXYZ: function(t, e, i, n) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this }, setXYZW: function(t, e, i, n, r) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this }, onUpload: function(t) { return this.onUploadCallback = t, this }, clone: function() { return new this.constructor(this.array, this.itemSize).copy(this) } }), Di.prototype = Object.create(Ni.prototype), Di.prototype.constructor = Di, Gi.prototype = Object.create(Ni.prototype), Gi.prototype.constructor = Gi, ki.prototype = Object.create(Ni.prototype), ki.prototype.constructor = ki, Hi.prototype = Object.create(Ni.prototype), Hi.prototype.constructor = Hi, Fi.prototype = Object.create(Ni.prototype), Fi.prototype.constructor = Fi, Ui.prototype = Object.create(Ni.prototype), Ui.prototype.constructor = Ui, Bi.prototype = Object.create(Ni.prototype), Bi.prototype.constructor = Bi, zi.prototype = Object.create(Ni.prototype), zi.prototype.constructor = zi, ji.prototype = Object.create(Ni.prototype), ji.prototype.constructor = ji, Object.assign(Vi.prototype, { computeGroups: function(t) { for (var e, i = [], n = void 0, r = t.faces, o = 0; o < r.length; o++) { var a = r[o];
                a.materialIndex !== n && (n = a.materialIndex, void 0 !== e && (e.count = 3 * o - e.start, i.push(e)), e = { start: 3 * o, materialIndex: n }) } void 0 !== e && (e.count = 3 * o - e.start, i.push(e)), this.groups = i }, fromGeometry: function(t) { var e, i = t.faces,
                n = t.vertices,
                r = t.faceVertexUvs,
                o = r[0] && r[0].length > 0,
                a = r[1] && r[1].length > 0,
                s = t.morphTargets,
                h = s.length; if (h > 0) { e = []; for (var c = 0; c < h; c++) e[c] = { name: s[c].name, data: [] };
                this.morphTargets.position = e } var l, u = t.morphNormals,
                p = u.length; if (p > 0) { l = []; for (c = 0; c < p; c++) l[c] = { name: u[c].name, data: [] };
                this.morphTargets.normal = l } var f = t.skinIndices,
                d = t.skinWeights,
                m = f.length === n.length,
                g = d.length === n.length;
            n.length > 0 && 0 === i.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported."); for (c = 0; c < i.length; c++) { var v = i[c];
                this.vertices.push(n[v.a], n[v.b], n[v.c]); var y = v.vertexNormals; if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
                else { var _ = v.normal;
                    this.normals.push(_, _, _) } var x, b = v.vertexColors; if (3 === b.length) this.colors.push(b[0], b[1], b[2]);
                else { var w = v.color;
                    this.colors.push(w, w, w) } if (!0 === o) void 0 !== (x = r[0][c]) ? this.uvs.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new Be, new Be, new Be)); if (!0 === a) void 0 !== (x = r[1][c]) ? this.uvs2.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new Be, new Be, new Be)); for (var T = 0; T < h; T++) { var E = s[T].vertices;
                    e[T].data.push(E[v.a], E[v.b], E[v.c]) } for (T = 0; T < p; T++) { var S = u[T].vertexNormals[c];
                    l[T].data.push(S.a, S.b, S.c) } m && this.skinIndices.push(f[v.a], f[v.b], f[v.c]), g && this.skinWeights.push(d[v.a], d[v.b], d[v.c]) } return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this } });
    var Xi = 1;

    function Yi() { Object.defineProperty(this, "id", { value: Xi += 2 }), this.uuid = Ue.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} }

    function qi(t, e, i, n, r, o) { Ii.call(this), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: i, widthSegments: n, heightSegments: r, depthSegments: o }, this.fromBufferGeometry(new Zi(t, e, i, n, r, o)), this.mergeVertices() }

    function Zi(t, e, i, n, r, o) { Yi.call(this), this.type = "BoxBufferGeometry", this.parameters = { width: t, height: e, depth: i, widthSegments: n, heightSegments: r, depthSegments: o }; var a = this;
        t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, o = Math.floor(o) || 1; var s = [],
            h = [],
            c = [],
            l = [],
            u = 0,
            p = 0;

        function f(t, e, i, n, r, o, f, d, m, g, v) { var y, _, x = o / m,
                b = f / g,
                w = o / 2,
                T = f / 2,
                E = d / 2,
                S = m + 1,
                M = g + 1,
                A = 0,
                L = 0,
                C = new Ve; for (_ = 0; _ < M; _++) { var O = _ * b - T; for (y = 0; y < S; y++) { var P = y * x - w;
                    C[t] = P * n, C[e] = O * r, C[i] = E, h.push(C.x, C.y, C.z), C[t] = 0, C[e] = 0, C[i] = d > 0 ? 1 : -1, c.push(C.x, C.y, C.z), l.push(y / m), l.push(1 - _ / g), A += 1 } } for (_ = 0; _ < g; _++)
                for (y = 0; y < m; y++) { var R = u + y + S * _,
                        I = u + y + S * (_ + 1),
                        N = u + (y + 1) + S * (_ + 1),
                        D = u + (y + 1) + S * _;
                    s.push(R, I, D), s.push(I, N, D), L += 6 } a.addGroup(p, L, v), p += L, u += A } f("z", "y", "x", -1, -1, i, e, t, o, r, 0), f("z", "y", "x", 1, -1, i, e, -t, o, r, 1), f("x", "z", "y", 1, 1, t, i, e, n, o, 2), f("x", "z", "y", 1, -1, t, i, -e, n, o, 3), f("x", "y", "z", 1, -1, t, e, i, n, r, 4), f("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(s), this.addAttribute("position", new zi(h, 3)), this.addAttribute("normal", new zi(c, 3)), this.addAttribute("uv", new zi(l, 2)) }

    function Ji(t, e, i, n) { Ii.call(this), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: i, heightSegments: n }, this.fromBufferGeometry(new $i(t, e, i, n)), this.mergeVertices() }

    function $i(t, e, i, n) { Yi.call(this), this.type = "PlaneBufferGeometry", this.parameters = { width: t, height: e, widthSegments: i, heightSegments: n }; var r, o, a = (t = t || 1) / 2,
            s = (e = e || 1) / 2,
            h = Math.floor(i) || 1,
            c = Math.floor(n) || 1,
            l = h + 1,
            u = c + 1,
            p = t / h,
            f = e / c,
            d = [],
            m = [],
            g = [],
            v = []; for (o = 0; o < u; o++) { var y = o * f - s; for (r = 0; r < l; r++) { var _ = r * p - a;
                m.push(_, -y, 0), g.push(0, 0, 1), v.push(r / h), v.push(1 - o / c) } } for (o = 0; o < c; o++)
            for (r = 0; r < h; r++) { var x = r + l * o,
                    b = r + l * (o + 1),
                    w = r + 1 + l * (o + 1),
                    T = r + 1 + l * o;
                d.push(x, b, T), d.push(b, w, T) } this.setIndex(d), this.addAttribute("position", new zi(m, 3)), this.addAttribute("normal", new zi(g, 3)), this.addAttribute("uv", new zi(v, 2)) } Yi.prototype = Object.assign(Object.create(c.prototype), { constructor: Yi, isBufferGeometry: !0, getIndex: function() { return this.index }, setIndex: function(t) { Array.isArray(t) ? this.index = new(Wi(t) > 65535 ? Bi : Fi)(t, 1) : this.index = t }, addAttribute: function(t, e) { return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : (this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new Ni(arguments[1], arguments[2]))) }, getAttribute: function(t) { return this.attributes[t] }, removeAttribute: function(t) { return delete this.attributes[t], this }, addGroup: function(t, e, i) { this.groups.push({ start: t, count: e, materialIndex: void 0 !== i ? i : 0 }) }, clearGroups: function() { this.groups = [] }, setDrawRange: function(t, e) { this.drawRange.start = t, this.drawRange.count = e }, applyMatrix: function(t) { var e = this.attributes.position;
            void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0); var i = this.attributes.normal;
            void 0 !== i && ((new We).getNormalMatrix(t).applyToBufferAttribute(i), i.needsUpdate = !0); return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this }, rotateX: function() { var t = new ze; return function(e) { return t.makeRotationX(e), this.applyMatrix(t), this } }(), rotateY: function() { var t = new ze; return function(e) { return t.makeRotationY(e), this.applyMatrix(t), this } }(), rotateZ: function() { var t = new ze; return function(e) { return t.makeRotationZ(e), this.applyMatrix(t), this } }(), translate: function() { var t = new ze; return function(e, i, n) { return t.makeTranslation(e, i, n), this.applyMatrix(t), this } }(), scale: function() { var t = new ze; return function(e, i, n) { return t.makeScale(e, i, n), this.applyMatrix(t), this } }(), lookAt: function() { var t = new Ci; return function(e) { t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix) } }(), center: function() { var t = new Ve; return function() { return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this } }(), setFromObject: function(t) { var e = t.geometry; if (t.isPoints || t.isLine) { var i = new zi(3 * e.vertices.length, 3),
                    n = new zi(3 * e.colors.length, 3); if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) { var r = new zi(e.lineDistances.length, 1);
                    this.addAttribute("lineDistance", r.copyArray(e.lineDistances)) } null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()) } else t.isMesh && e && e.isGeometry && this.fromGeometry(e); return this }, setFromPoints: function(t) { for (var e = [], i = 0, n = t.length; i < n; i++) { var r = t[i];
                e.push(r.x, r.y, r.z || 0) } return this.addAttribute("position", new zi(e, 3)), this }, updateFromObject: function(t) { var e, i = t.geometry; if (t.isMesh) { var n = i.__directGeometry; if (!0 === i.elementsNeedUpdate && (n = void 0, i.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(i);
                n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n } return !0 === i.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(i.vertices), e.needsUpdate = !0), i.verticesNeedUpdate = !1), !0 === i.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(i.normals), e.needsUpdate = !0), i.normalsNeedUpdate = !1), !0 === i.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(i.colors), e.needsUpdate = !0), i.colorsNeedUpdate = !1), i.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(i.uvs), e.needsUpdate = !0), i.uvsNeedUpdate = !1), i.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(i.lineDistances), e.needsUpdate = !0), i.lineDistancesNeedUpdate = !1), i.groupsNeedUpdate && (i.computeGroups(t.geometry), this.groups = i.groups, i.groupsNeedUpdate = !1), this }, fromGeometry: function(t) { return t.__directGeometry = (new Vi).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry) }, fromDirectGeometry: function(t) { var e = new Float32Array(3 * t.vertices.length); if (this.addAttribute("position", new Ni(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) { var i = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new Ni(i, 3).copyVector3sArray(t.normals)) } if (t.colors.length > 0) { var n = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new Ni(n, 3).copyColorsArray(t.colors)) } if (t.uvs.length > 0) { var r = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new Ni(r, 2).copyVector2sArray(t.uvs)) } if (t.uvs2.length > 0) { var o = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new Ni(o, 2).copyVector2sArray(t.uvs2)) } for (var a in this.groups = t.groups, t.morphTargets) { for (var s = [], h = t.morphTargets[a], c = 0, l = h.length; c < l; c++) { var u = h[c],
                        p = new zi(3 * u.data.length, 3);
                    p.name = u.name, s.push(p.copyVector3sArray(u.data)) } this.morphAttributes[a] = s } if (t.skinIndices.length > 0) { var f = new zi(4 * t.skinIndices.length, 4);
                this.addAttribute("skinIndex", f.copyVector4sArray(t.skinIndices)) } if (t.skinWeights.length > 0) { var d = new zi(4 * t.skinWeights.length, 4);
                this.addAttribute("skinWeight", d.copyVector4sArray(t.skinWeights)) } return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this }, computeBoundingBox: function() { null === this.boundingBox && (this.boundingBox = new ri); var t = this.attributes.position;
            void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) }, computeBoundingSphere: function() { var t = new ri,
                e = new Ve; return function() { null === this.boundingSphere && (this.boundingSphere = new oi); var i = this.attributes.position; if (i) { var n = this.boundingSphere.center;
                    t.setFromBufferAttribute(i), t.getCenter(n); for (var r = 0, o = 0, a = i.count; o < a; o++) e.x = i.getX(o), e.y = i.getY(o), e.z = i.getZ(o), r = Math.max(r, n.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } }(), computeFaceNormals: function() {}, computeVertexNormals: function() { var t = this.index,
                e = this.attributes; if (e.position) { var i = e.position.array; if (void 0 === e.normal) this.addAttribute("normal", new Ni(new Float32Array(i.length), 3));
                else
                    for (var n = e.normal.array, r = 0, o = n.length; r < o; r++) n[r] = 0; var a, s, h, c = e.normal.array,
                    l = new Ve,
                    u = new Ve,
                    p = new Ve,
                    f = new Ve,
                    d = new Ve; if (t) { var m = t.array; for (r = 0, o = t.count; r < o; r += 3) a = 3 * m[r + 0], s = 3 * m[r + 1], h = 3 * m[r + 2], l.fromArray(i, a), u.fromArray(i, s), p.fromArray(i, h), f.subVectors(p, u), d.subVectors(l, u), f.cross(d), c[a] += f.x, c[a + 1] += f.y, c[a + 2] += f.z, c[s] += f.x, c[s + 1] += f.y, c[s + 2] += f.z, c[h] += f.x, c[h + 1] += f.y, c[h + 2] += f.z } else
                    for (r = 0, o = i.length; r < o; r += 9) l.fromArray(i, r), u.fromArray(i, r + 3), p.fromArray(i, r + 6), f.subVectors(p, u), d.subVectors(l, u), f.cross(d), c[r] = f.x, c[r + 1] = f.y, c[r + 2] = f.z, c[r + 3] = f.x, c[r + 4] = f.y, c[r + 5] = f.z, c[r + 6] = f.x, c[r + 7] = f.y, c[r + 8] = f.z;
                this.normalizeNormals(), e.normal.needsUpdate = !0 } }, merge: function(t, e) { if (t && t.isBufferGeometry) { void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")); var i = this.attributes; for (var n in i)
                    if (void 0 !== t.attributes[n])
                        for (var r = i[n].array, o = t.attributes[n], a = o.array, s = 0, h = o.itemSize * e; s < a.length; s++, h++) r[h] = a[s]; return this } console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t) }, normalizeNormals: function() { var t = new Ve; return function() { for (var e = this.attributes.normal, i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.normalize(), e.setXYZ(i, t.x, t.y, t.z) } }(), toNonIndexed: function() { if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this; var t = new Yi,
                e = this.index.array,
                i = this.attributes; for (var n in i) { for (var r = i[n], o = r.array, a = r.itemSize, s = new o.constructor(e.length * a), h = 0, c = 0, l = 0, u = e.length; l < u; l++) { h = e[l] * a; for (var p = 0; p < a; p++) s[c++] = o[h++] } t.addAttribute(n, new Ni(s, a)) } var f = this.groups; for (l = 0, u = f.length; l < u; l++) { var d = f[l];
                t.addGroup(d.start, d.count, d.materialIndex) } return t }, toJSON: function() { var t = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) { var e = this.parameters; for (var i in e) void 0 !== e[i] && (t[i] = e[i]); return t } t.data = { attributes: {} }; var n = this.index; if (null !== n) { var r = Array.prototype.slice.call(n.array);
                t.data.index = { type: n.array.constructor.name, array: r } } var o = this.attributes; for (var i in o) { var a = o[i];
                r = Array.prototype.slice.call(a.array);
                t.data.attributes[i] = { itemSize: a.itemSize, type: a.array.constructor.name, array: r, normalized: a.normalized } } var s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s))); var h = this.boundingSphere; return null !== h && (t.data.boundingSphere = { center: h.center.toArray(), radius: h.radius }), t }, clone: function() { return (new Yi).copy(this) }, copy: function(t) { var e, i, n;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name; var r = t.index;
            null !== r && this.setIndex(r.clone()); var o = t.attributes; for (e in o) { var a = o[e];
                this.addAttribute(e, a.clone()) } var s = t.morphAttributes; for (e in s) { var h = [],
                    c = s[e]; for (i = 0, n = c.length; i < n; i++) h.push(c[i].clone());
                this.morphAttributes[e] = h } var l = t.groups; for (i = 0, n = l.length; i < n; i++) { var u = l[i];
                this.addGroup(u.start, u.count, u.materialIndex) } var p = t.boundingBox;
            null !== p && (this.boundingBox = p.clone()); var f = t.boundingSphere; return null !== f && (this.boundingSphere = f.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), qi.prototype = Object.create(Ii.prototype), qi.prototype.constructor = qi, Zi.prototype = Object.create(Yi.prototype), Zi.prototype.constructor = Zi, Ji.prototype = Object.create(Ii.prototype), Ji.prototype.constructor = Ji, $i.prototype = Object.create(Yi.prototype), $i.prototype.constructor = $i;
    var Ki, Qi, tn, en, nn, rn, on, an, sn, hn, cn, ln, un = 0;

    function pn() { Object.defineProperty(this, "id", { value: un++ }), this.uuid = Ue.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = D, this.side = L, this.flatShading = !1, this.vertexColors = P, this.opacity = 1, this.transparent = !1, this.blendSrc = Z, this.blendDst = J, this.blendEquation = U, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = ot, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.userData = {}, this.needsUpdate = !0 }

    function fn(t) { pn.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t)) }

    function dn(t, e) { this.origin = void 0 !== t ? t : new Ve, this.direction = void 0 !== e ? e : new Ve }

    function mn(t, e, i) { this.a = void 0 !== t ? t : new Ve, this.b = void 0 !== e ? e : new Ve, this.c = void 0 !== i ? i : new Ve }

    function gn(t) { pn.call(this), this.type = "MeshBasicMaterial", this.color = new mi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = lt, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t) }

    function vn(t, e) { Ci.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new Yi, this.material = void 0 !== e ? e : new gn({ color: 16777215 * Math.random() }), this.drawMode = Me, this.updateMorphTargets() }

    function yn(t, e, i, n) { var r, o, a = new mi(0),
            s = 0,
            h = null,
            c = 0;

        function l(t, i) { e.buffers.color.setClear(t.r, t.g, t.b, i, n) } return { getClearColor: function() { return a }, setClearColor: function(t, e) { a.set(t), l(a, s = void 0 !== e ? e : 1) }, getClearAlpha: function() { return s }, setClearAlpha: function(t) { l(a, s = t) }, render: function(e, n, u, p) { var f = n.background; if (null === f ? (l(a, s), h = null, c = 0) : f && f.isColor && (l(f, 1), p = !0, h = null, c = 0), (t.autoClear || p) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), f && (f.isCubeTexture || f.isWebGLRenderTargetCube)) { void 0 === o && ((o = new vn(new Zi(1, 1, 1), new fn({ type: "BackgroundCubeMaterial", uniforms: ci(yi.cube.uniforms), vertexShader: yi.cube.vertexShader, fragmentShader: yi.cube.fragmentShader, side: C, depthTest: !0, depthWrite: !1, fog: !1 }))).geometry.removeAttribute("normal"), o.geometry.removeAttribute("uv"), o.onBeforeRender = function(t, e, i) { this.matrixWorld.copyPosition(i.matrixWorld) }, Object.defineProperty(o.material, "map", { get: function() { return this.uniforms.tCube.value } }), i.update(o)); var d = f.isWebGLRenderTargetCube ? f.texture : f;
                    o.material.uniforms.tCube.value = d, o.material.uniforms.tFlip.value = f.isWebGLRenderTargetCube ? 1 : -1, h === f && c === d.version || (o.material.needsUpdate = !0, h = f, c = d.version), e.unshift(o, o.geometry, o.material, 0, null) } else f && f.isTexture && (void 0 === r && ((r = new vn(new $i(2, 2), new fn({ type: "BackgroundMaterial", uniforms: ci(yi.background.uniforms), vertexShader: yi.background.vertexShader, fragmentShader: yi.background.fragmentShader, side: L, depthTest: !1, depthWrite: !1, fog: !1 }))).geometry.removeAttribute("normal"), Object.defineProperty(r.material, "map", { get: function() { return this.uniforms.t2D.value } }), i.update(r)), r.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), r.material.uniforms.uvTransform.value.copy(f.matrix), h === f && c === f.version || (r.material.needsUpdate = !0, h = f, c = f.version), e.unshift(r, r.geometry, r.material, 0, null)) } } }

    function _n(t, e, i, n) { var r;
        this.setMode = function(t) { r = t }, this.render = function(e, n) { t.drawArrays(r, e, n), i.update(n, r) }, this.renderInstances = function(o, a, s) { var h; if (n.isWebGL2) h = t;
            else if (null === (h = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[n.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](r, a, s, o.maxInstancedCount), i.update(s, r, o.maxInstancedCount) } }

    function xn(t, e, i) { var n;

        function r(e) { if ("highp" === e) { if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                e = "mediump" } return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp" } var o = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext,
            a = void 0 !== i.precision ? i.precision : "highp",
            s = r(a);
        s !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", s, "instead."), a = s); var h = !0 === i.logarithmicDepthBuffer,
            c = t.getParameter(34930),
            l = t.getParameter(35660),
            u = t.getParameter(3379),
            p = t.getParameter(34076),
            f = t.getParameter(34921),
            d = t.getParameter(36347),
            m = t.getParameter(36348),
            g = t.getParameter(36349),
            v = l > 0,
            y = o || !!e.get("OES_texture_float"); return { isWebGL2: o, getMaxAnisotropy: function() { if (void 0 !== n) return n; var i = e.get("EXT_texture_filter_anisotropic"); return n = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0 }, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: h, maxTextures: c, maxVertexTextures: l, maxTextureSize: u, maxCubemapSize: p, maxAttributes: f, maxVertexUniforms: d, maxVaryings: m, maxFragmentUniforms: g, vertexTextures: v, floatFragmentTextures: y, floatVertexTextures: v && y } }

    function bn() { var t = this,
            e = null,
            i = 0,
            n = !1,
            r = !1,
            o = new ai,
            a = new We,
            s = { value: null, needsUpdate: !1 };

        function h() { s.value !== e && (s.value = e, s.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0 }

        function c(e, i, n, r) { var h = null !== e ? e.length : 0,
                c = null; if (0 !== h) { if (c = s.value, !0 !== r || null === c) { var l = n + 4 * h,
                        u = i.matrixWorldInverse;
                    a.getNormalMatrix(u), (null === c || c.length < l) && (c = new Float32Array(l)); for (var p = 0, f = n; p !== h; ++p, f += 4) o.copy(e[p]).applyMatrix4(u, a), o.normal.toArray(c, f), c[f + 3] = o.constant } s.value = c, s.needsUpdate = !0 } return t.numPlanes = h, c } this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, r, o) { var a = 0 !== t.length || r || 0 !== i || n; return n = r, e = c(t, o, 0), i = t.length, a }, this.beginShadows = function() { r = !0, c(null) }, this.endShadows = function() { r = !1, h() }, this.setState = function(t, o, a, l, u, p) { if (!n || null === t || 0 === t.length || r && !a) r ? c(null) : h();
            else { var f = r ? 0 : i,
                    d = 4 * f,
                    m = u.clippingState || null;
                s.value = m, m = c(t, l, d, p); for (var g = 0; g !== d; ++g) m[g] = e[g];
                u.clippingState = m, this.numIntersection = o ? this.numPlanes : 0, this.numPlanes += f } } }

    function wn(t) { var e = {}; return { get: function(i) { if (void 0 !== e[i]) return e[i]; var n; switch (i) {
                    case "WEBGL_depth_texture":
                        n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture"); break;
                    case "EXT_texture_filter_anisotropic":
                        n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break;
                    case "WEBGL_compressed_texture_s3tc":
                        n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break;
                    case "WEBGL_compressed_texture_pvrtc":
                        n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break;
                    default:
                        n = t.getExtension(i) } return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), e[i] = n, n } } }

    function Tn(t, e, i) { var n = {},
            r = {};

        function o(t) { var a = t.target,
                s = n[a.id]; for (var h in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[h]);
            a.removeEventListener("dispose", o), delete n[a.id]; var c = r[s.id];
            c && (e.remove(c), delete r[s.id]), i.memory.geometries-- } return { get: function(t, e) { var r = n[e.id]; return r || (e.addEventListener("dispose", o), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new Yi).setFromObject(t)), r = e._bufferGeometry), n[e.id] = r, i.memory.geometries++, r) }, update: function(t) { var i = t.index,
                    n = t.attributes; for (var r in null !== i && e.update(i, 34963), n) e.update(n[r], 34962); var o = t.morphAttributes; for (var r in o)
                    for (var a = o[r], s = 0, h = a.length; s < h; s++) e.update(a[s], 34962) }, getWireframeAttribute: function(t) { var i = r[t.id]; if (i) return i; var n, o = [],
                    a = t.index,
                    s = t.attributes; if (null !== a)
                    for (var h = 0, c = (n = a.array).length; h < c; h += 3) { var l = n[h + 0],
                            u = n[h + 1],
                            p = n[h + 2];
                        o.push(l, u, u, p, p, l) } else
                        for (h = 0, c = (n = s.position.array).length / 3 - 1; h < c; h += 3) l = h + 0, u = h + 1, p = h + 2, o.push(l, u, u, p, p, l); return i = new(Wi(o) > 65535 ? Bi : Fi)(o, 1), e.update(i, 34963), r[t.id] = i, i } } }

    function En(t, e, i, n) { var r, o, a;
        this.setMode = function(t) { r = t }, this.setIndex = function(t) { o = t.type, a = t.bytesPerElement }, this.render = function(e, n) { t.drawElements(r, n, o, e * a), i.update(n, r) }, this.renderInstances = function(s, h, c) { var l; if (n.isWebGL2) l = t;
            else if (null === (l = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[n.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](r, c, o, h * a, s.maxInstancedCount), i.update(c, r, s.maxInstancedCount) } }

    function Sn(t) { var e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; return { memory: { geometries: 0, textures: 0 }, render: e, programs: null, autoReset: !0, reset: function() { e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0 }, update: function(t, i, n) { switch (n = n || 1, e.calls++, i) {
                    case 4:
                        e.triangles += n * (t / 3); break;
                    case 5:
                    case 6:
                        e.triangles += n * (t - 2); break;
                    case 1:
                        e.lines += n * (t / 2); break;
                    case 3:
                        e.lines += n * (t - 1); break;
                    case 2:
                        e.lines += n * t; break;
                    case 0:
                        e.points += n * t; break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", i) } } } }

    function Mn(t, e) { return Math.abs(e[1]) - Math.abs(t[1]) }

    function An(t) { var e = {},
            i = new Float32Array(8); return { update: function(n, r, o, a) { var s = n.morphTargetInfluences,
                    h = s.length,
                    c = e[r.id]; if (void 0 === c) { c = []; for (var l = 0; l < h; l++) c[l] = [l, 0];
                    e[r.id] = c } var u = o.morphTargets && r.morphAttributes.position,
                    p = o.morphNormals && r.morphAttributes.normal; for (l = 0; l < h; l++) 0 !== (f = c[l])[1] && (u && r.removeAttribute("morphTarget" + l), p && r.removeAttribute("morphNormal" + l)); for (l = 0; l < h; l++)(f = c[l])[0] = l, f[1] = s[l]; for (c.sort(Mn), l = 0; l < 8; l++) { var f; if (f = c[l]) { var d = f[0],
                            m = f[1]; if (m) { u && r.addAttribute("morphTarget" + l, u[d]), p && r.addAttribute("morphNormal" + l, p[d]), i[l] = m; continue } } i[l] = 0 } a.getUniforms().setValue(t, "morphTargetInfluences", i) } } }

    function Ln(t, e) { var i = {}; return { update: function(n) { var r = e.render.frame,
                    o = n.geometry,
                    a = t.get(n, o); return i[a.id] !== r && (o.isGeometry && a.updateFromObject(n), t.update(a), i[a.id] = r), a }, dispose: function() { i = {} } } }

    function Cn(t, e, i, n, r, o, a, s, h, c) { t = void 0 !== t ? t : [], e = void 0 !== e ? e : _t, Qe.call(this, t, e, i, n, r, o, a, s, h, c), this.flipY = !1 }

    function On(t, e, i, n) { Qe.call(this, null), this.image = { data: t, width: e, height: i, depth: n }, this.magFilter = Ct, this.minFilter = Ct, this.generateMipmaps = !1, this.flipY = !1 } pn.prototype = Object.assign(Object.create(c.prototype), { constructor: pn, isMaterial: !0, onBeforeCompile: function() {}, setValues: function(t) { if (void 0 !== t)
                for (var e in t) { var i = t[e]; if (void 0 !== i)
                        if ("shading" !== e) { var n = this[e];
                            void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.") } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
                    else console.warn("THREE.Material: '" + e + "' parameter is undefined.") } }, toJSON: function(t) { var e = void 0 === t || "string" == typeof t;
            e && (t = { textures: {}, images: {} }); var i = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };

            function n(t) { var e = []; for (var i in t) { var n = t[i];
                    delete n.metadata, e.push(n) } return e } if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearCoat && (i.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (i.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, i.reflectivity = this.reflectivity, void 0 !== this.combine && (i.combine = this.combine), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== D && (i.blending = this.blending), !0 === this.flatShading && (i.flatShading = this.flatShading), this.side !== L && (i.side = this.side), this.vertexColors !== P && (i.vertexColors = this.vertexColors), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (i.morphTargets = !0), !0 === this.skinning && (i.skinning = !0), !1 === this.visible && (i.visible = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e) { var r = n(t.textures),
                    o = n(t.images);
                r.length > 0 && (i.textures = r), o.length > 0 && (i.images = o) } return i }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection; var e = t.clippingPlanes,
                i = null; if (null !== e) { var n = e.length;
                i = new Array(n); for (var r = 0; r !== n; ++r) i[r] = e[r].clone() } return this.clippingPlanes = i, this.shadowSide = t.shadowSide, this }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), fn.prototype = Object.create(pn.prototype), fn.prototype.constructor = fn, fn.prototype.isShaderMaterial = !0, fn.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = ci(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this }, fn.prototype.toJSON = function(t) { var e = pn.prototype.toJSON.call(this, t); for (var i in e.uniforms = {}, this.uniforms) { var n = this.uniforms[i].value;
            n.isTexture ? e.uniforms[i] = { type: "t", value: n.toJSON(t).uuid } : n.isColor ? e.uniforms[i] = { type: "c", value: n.getHex() } : n.isVector2 ? e.uniforms[i] = { type: "v2", value: n.toArray() } : n.isVector3 ? e.uniforms[i] = { type: "v3", value: n.toArray() } : n.isVector4 ? e.uniforms[i] = { type: "v4", value: n.toArray() } : n.isMatrix4 ? e.uniforms[i] = { type: "m4", value: n.toArray() } : e.uniforms[i] = { value: n } } return Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e }, Object.assign(dn.prototype, { set: function(t, e) { return this.origin.copy(t), this.direction.copy(e), this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this }, at: function(t, e) { return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new Ve), e.copy(this.direction).multiplyScalar(t).add(this.origin) }, lookAt: function(t) { return this.direction.copy(t).sub(this.origin).normalize(), this }, recast: function() { var t = new Ve; return function(e) { return this.origin.copy(this.at(e, t)), this } }(), closestPointToPoint: function(t, e) { void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new Ve), e.subVectors(t, this.origin); var i = e.dot(this.direction); return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin) }, distanceToPoint: function(t) { return Math.sqrt(this.distanceSqToPoint(t)) }, distanceSqToPoint: function() { var t = new Ve; return function(e) { var i = t.subVectors(e, this.origin).dot(this.direction); return i < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e)) } }(), distanceSqToSegment: (Qi = new Ve, tn = new Ve, en = new Ve, function(t, e, i, n) { Qi.copy(t).add(e).multiplyScalar(.5), tn.copy(e).sub(t).normalize(), en.copy(this.origin).sub(Qi); var r, o, a, s, h = .5 * t.distanceTo(e),
                c = -this.direction.dot(tn),
                l = en.dot(this.direction),
                u = -en.dot(tn),
                p = en.lengthSq(),
                f = Math.abs(1 - c * c); if (f > 0)
                if (o = c * l - u, s = h * f, (r = c * u - l) >= 0)
                    if (o >= -s)
                        if (o <= s) { var d = 1 / f;
                            a = (r *= d) * (r + c * (o *= d) + 2 * l) + o * (c * r + o + 2 * u) + p } else o = h, a = -(r = Math.max(0, -(c * o + l))) * r + o * (o + 2 * u) + p;
            else o = -h, a = -(r = Math.max(0, -(c * o + l))) * r + o * (o + 2 * u) + p;
            else o <= -s ? a = -(r = Math.max(0, -(-c * h + l))) * r + (o = r > 0 ? -h : Math.min(Math.max(-h, -u), h)) * (o + 2 * u) + p : o <= s ? (r = 0, a = (o = Math.min(Math.max(-h, -u), h)) * (o + 2 * u) + p) : a = -(r = Math.max(0, -(c * h + l))) * r + (o = r > 0 ? h : Math.min(Math.max(-h, -u), h)) * (o + 2 * u) + p;
            else o = c > 0 ? -h : h, a = -(r = Math.max(0, -(c * o + l))) * r + o * (o + 2 * u) + p; return i && i.copy(this.direction).multiplyScalar(r).add(this.origin), n && n.copy(tn).multiplyScalar(o).add(Qi), a }), intersectSphere: function() { var t = new Ve; return function(e, i) { t.subVectors(e.center, this.origin); var n = t.dot(this.direction),
                    r = t.dot(t) - n * n,
                    o = e.radius * e.radius; if (r > o) return null; var a = Math.sqrt(o - r),
                    s = n - a,
                    h = n + a; return s < 0 && h < 0 ? null : s < 0 ? this.at(h, i) : this.at(s, i) } }(), intersectsSphere: function(t) { return this.distanceSqToPoint(t.center) <= t.radius * t.radius }, distanceToPlane: function(t) { var e = t.normal.dot(this.direction); if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null; var i = -(this.origin.dot(t.normal) + t.constant) / e; return i >= 0 ? i : null }, intersectPlane: function(t, e) { var i = this.distanceToPlane(t); return null === i ? null : this.at(i, e) }, intersectsPlane: function(t) { var e = t.distanceToPoint(this.origin); return 0 === e || t.normal.dot(this.direction) * e < 0 }, intersectBox: function(t, e) { var i, n, r, o, a, s, h = 1 / this.direction.x,
                c = 1 / this.direction.y,
                l = 1 / this.direction.z,
                u = this.origin; return h >= 0 ? (i = (t.min.x - u.x) * h, n = (t.max.x - u.x) * h) : (i = (t.max.x - u.x) * h, n = (t.min.x - u.x) * h), c >= 0 ? (r = (t.min.y - u.y) * c, o = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, o = (t.min.y - u.y) * c), i > o || r > n ? null : ((r > i || i != i) && (i = r), (o < n || n != n) && (n = o), l >= 0 ? (a = (t.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (a = (t.max.z - u.z) * l, s = (t.min.z - u.z) * l), i > s || a > n ? null : ((a > i || i != i) && (i = a), (s < n || n != n) && (n = s), n < 0 ? null : this.at(i >= 0 ? i : n, e))) }, intersectsBox: (Ki = new Ve, function(t) { return null !== this.intersectBox(t, Ki) }), intersectTriangle: function() { var t = new Ve,
                e = new Ve,
                i = new Ve,
                n = new Ve; return function(r, o, a, s, h) { e.subVectors(o, r), i.subVectors(a, r), n.crossVectors(e, i); var c, l = this.direction.dot(n); if (l > 0) { if (s) return null;
                    c = 1 } else { if (!(l < 0)) return null;
                    c = -1, l = -l } t.subVectors(this.origin, r); var u = c * this.direction.dot(i.crossVectors(t, i)); if (u < 0) return null; var p = c * this.direction.dot(e.cross(t)); if (p < 0) return null; if (u + p > l) return null; var f = -c * t.dot(n); return f < 0 ? null : this.at(f / l, h) } }(), applyMatrix4: function(t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this }, equals: function(t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction) } }), Object.assign(mn, { getNormal: (rn = new Ve, function(t, e, i, n) { void 0 === n && (console.warn("THREE.Triangle: .getNormal() target is now required"), n = new Ve), n.subVectors(i, e), rn.subVectors(t, e), n.cross(rn); var r = n.lengthSq(); return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0) }), getBarycoord: function() { var t = new Ve,
                e = new Ve,
                i = new Ve; return function(n, r, o, a, s) { t.subVectors(a, r), e.subVectors(o, r), i.subVectors(n, r); var h = t.dot(t),
                    c = t.dot(e),
                    l = t.dot(i),
                    u = e.dot(e),
                    p = e.dot(i),
                    f = h * u - c * c; if (void 0 === s && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new Ve), 0 === f) return s.set(-2, -1, -1); var d = 1 / f,
                    m = (u * l - c * p) * d,
                    g = (h * p - c * l) * d; return s.set(1 - m - g, g, m) } }(), containsPoint: function() { var t = new Ve; return function(e, i, n, r) { return mn.getBarycoord(e, i, n, r, t), t.x >= 0 && t.y >= 0 && t.x + t.y <= 1 } }(), getUV: (nn = new Ve, function(t, e, i, n, r, o, a, s) { return this.getBarycoord(t, e, i, n, nn), s.set(0, 0), s.addScaledVector(r, nn.x), s.addScaledVector(o, nn.y), s.addScaledVector(a, nn.z), s }) }), Object.assign(mn.prototype, { set: function(t, e, i) { return this.a.copy(t), this.b.copy(e), this.c.copy(i), this }, setFromPointsAndIndices: function(t, e, i, n) { return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this }, getArea: function() { var t = new Ve,
                e = new Ve; return function() { return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length() } }(), getMidpoint: function(t) { return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new Ve), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) }, getNormal: function(t) { return mn.getNormal(this.a, this.b, this.c, t) }, getPlane: function(t) { return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Ve), t.setFromCoplanarPoints(this.a, this.b, this.c) }, getBarycoord: function(t, e) { return mn.getBarycoord(t, this.a, this.b, this.c, e) }, containsPoint: function(t) { return mn.containsPoint(t, this.a, this.b, this.c) }, getUV: function(t, e, i, n, r) { return mn.getUV(t, this.a, this.b, this.c, e, i, n, r) }, intersectsBox: function(t) { return t.intersectsTriangle(this) }, closestPointToPoint: (on = new Ve, an = new Ve, sn = new Ve, hn = new Ve, cn = new Ve, ln = new Ve, function(t, e) { void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new Ve); var i, n, r = this.a,
                o = this.b,
                a = this.c;
            on.subVectors(o, r), an.subVectors(a, r), hn.subVectors(t, r); var s = on.dot(hn),
                h = an.dot(hn); if (s <= 0 && h <= 0) return e.copy(r);
            cn.subVectors(t, o); var c = on.dot(cn),
                l = an.dot(cn); if (c >= 0 && l <= c) return e.copy(o); var u = s * l - c * h; if (u <= 0 && s >= 0 && c <= 0) return i = s / (s - c), e.copy(r).addScaledVector(on, i);
            ln.subVectors(t, a); var p = on.dot(ln),
                f = an.dot(ln); if (f >= 0 && p <= f) return e.copy(a); var d = p * h - s * f; if (d <= 0 && h >= 0 && f <= 0) return n = h / (h - f), e.copy(r).addScaledVector(an, n); var m = c * f - p * l; if (m <= 0 && l - c >= 0 && p - f >= 0) return sn.subVectors(a, o), n = (l - c) / (l - c + (p - f)), e.copy(o).addScaledVector(sn, n); var g = 1 / (m + d + u); return i = d * g, n = u * g, e.copy(r).addScaledVector(on, i).addScaledVector(an, n) }), equals: function(t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c) } }), gn.prototype = Object.create(pn.prototype), gn.prototype.constructor = gn, gn.prototype.isMeshBasicMaterial = !0, gn.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this }, vn.prototype = Object.assign(Object.create(Ci.prototype), { constructor: vn, isMesh: !0, setDrawMode: function(t) { this.drawMode = t }, copy: function(t) { return Ci.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this }, updateMorphTargets: function() { var t, e, i, n = this.geometry; if (n.isBufferGeometry) { var r = n.morphAttributes,
                    o = Object.keys(r); if (o.length > 0) { var a = r[o[0]]; if (void 0 !== a)
                        for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = a.length; t < e; t++) i = a[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t } } else { var s = n.morphTargets; if (void 0 !== s && s.length > 0)
                    for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) i = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t } }, raycast: function() { var t = new ze,
                e = new dn,
                i = new oi,
                n = new Ve,
                r = new Ve,
                o = new Ve,
                a = new Ve,
                s = new Ve,
                h = new Ve,
                c = new Be,
                l = new Be,
                u = new Be,
                p = new Ve,
                f = new Ve;

            function d(t, e, i, n, r, o, a, s) { if (null === (e.side === C ? n.intersectTriangle(a, o, r, !0, s) : n.intersectTriangle(r, o, a, e.side !== O, s))) return null;
                f.copy(s), f.applyMatrix4(t.matrixWorld); var h = i.ray.origin.distanceTo(f); return h < i.near || h > i.far ? null : { distance: h, point: f.clone(), object: t } }

            function m(t, e, i, a, s, h, f, m, g) { n.fromBufferAttribute(s, f), r.fromBufferAttribute(s, m), o.fromBufferAttribute(s, g); var v = d(t, e, i, a, n, r, o, p); if (v) { h && (c.fromBufferAttribute(h, f), l.fromBufferAttribute(h, m), u.fromBufferAttribute(h, g), v.uv = mn.getUV(p, n, r, o, c, l, u, new Be)); var y = new bi(f, m, g);
                    mn.getNormal(n, r, o, y.normal), v.face = y } return v } return function(f, g) { var v, y = this.geometry,
                    _ = this.material,
                    x = this.matrixWorld; if (void 0 !== _ && (null === y.boundingSphere && y.computeBoundingSphere(), i.copy(y.boundingSphere), i.applyMatrix4(x), !1 !== f.ray.intersectsSphere(i) && (t.getInverse(x), e.copy(f.ray).applyMatrix4(t), null === y.boundingBox || !1 !== e.intersectsBox(y.boundingBox))))
                    if (y.isBufferGeometry) { var b, w, T, E, S, M, A, L, C, O = y.index,
                            P = y.attributes.position,
                            R = y.attributes.uv,
                            I = y.groups,
                            N = y.drawRange; if (null !== O)
                            if (Array.isArray(_))
                                for (E = 0, M = I.length; E < M; E++)
                                    for (C = _[(L = I[E]).materialIndex], S = Math.max(L.start, N.start), A = Math.min(L.start + L.count, N.start + N.count); S < A; S += 3) b = O.getX(S), w = O.getX(S + 1), T = O.getX(S + 2), (v = m(this, C, f, e, P, R, b, w, T)) && (v.faceIndex = Math.floor(S / 3), g.push(v));
                            else
                                for (E = Math.max(0, N.start), M = Math.min(O.count, N.start + N.count); E < M; E += 3) b = O.getX(E), w = O.getX(E + 1), T = O.getX(E + 2), (v = m(this, _, f, e, P, R, b, w, T)) && (v.faceIndex = Math.floor(E / 3), g.push(v));
                        else if (void 0 !== P)
                            if (Array.isArray(_))
                                for (E = 0, M = I.length; E < M; E++)
                                    for (C = _[(L = I[E]).materialIndex], S = Math.max(L.start, N.start), A = Math.min(L.start + L.count, N.start + N.count); S < A; S += 3)(v = m(this, C, f, e, P, R, b = S, w = S + 1, T = S + 2)) && (v.faceIndex = Math.floor(S / 3), g.push(v));
                            else
                                for (E = Math.max(0, N.start), M = Math.min(P.count, N.start + N.count); E < M; E += 3)(v = m(this, _, f, e, P, R, b = E, w = E + 1, T = E + 2)) && (v.faceIndex = Math.floor(E / 3), g.push(v)) } else if (y.isGeometry) { var D, G, k, H, F = Array.isArray(_),
                        U = y.vertices,
                        B = y.faces,
                        z = y.faceVertexUvs[0];
                    z.length > 0 && (H = z); for (var j = 0, V = B.length; j < V; j++) { var W = B[j],
                            X = F ? _[W.materialIndex] : _; if (void 0 !== X) { if (D = U[W.a], G = U[W.b], k = U[W.c], !0 === X.morphTargets) { var Y = y.morphTargets,
                                    q = this.morphTargetInfluences;
                                n.set(0, 0, 0), r.set(0, 0, 0), o.set(0, 0, 0); for (var Z = 0, J = Y.length; Z < J; Z++) { var $ = q[Z]; if (0 !== $) { var K = Y[Z].vertices;
                                        n.addScaledVector(a.subVectors(K[W.a], D), $), r.addScaledVector(s.subVectors(K[W.b], G), $), o.addScaledVector(h.subVectors(K[W.c], k), $) } } n.add(D), r.add(G), o.add(k), D = n, G = r, k = o } if (v = d(this, X, f, e, D, G, k, p)) { if (H && H[j]) { var Q = H[j];
                                    c.copy(Q[0]), l.copy(Q[1]), u.copy(Q[2]), v.uv = mn.getUV(p, D, G, k, c, l, u, new Be) } v.face = W, v.faceIndex = j, g.push(v) } } } } } }(), clone: function() { return new this.constructor(this.geometry, this.material).copy(this) } }), Cn.prototype = Object.create(Qe.prototype), Cn.prototype.constructor = Cn, Cn.prototype.isCubeTexture = !0, Object.defineProperty(Cn.prototype, "images", { get: function() { return this.image }, set: function(t) { this.image = t } }), On.prototype = Object.create(Qe.prototype), On.prototype.constructor = On, On.prototype.isDataTexture3D = !0;
    var Pn = new Qe,
        Rn = new On,
        In = new Cn;

    function Nn() { this.seq = [], this.map = {} }
    var Dn = [],
        Gn = [],
        kn = new Float32Array(16),
        Hn = new Float32Array(9),
        Fn = new Float32Array(4);

    function Un(t, e, i) { var n = t[0]; if (n <= 0 || n > 0) return t; var r = e * i,
            o = Dn[r]; if (void 0 === o && (o = new Float32Array(r), Dn[r] = o), 0 !== e) { n.toArray(o, 0); for (var a = 1, s = 0; a !== e; ++a) s += i, t[a].toArray(o, s) } return o }

    function Bn(t, e) { if (t.length !== e.length) return !1; for (var i = 0, n = t.length; i < n; i++)
            if (t[i] !== e[i]) return !1; return !0 }

    function zn(t, e) { for (var i = 0, n = e.length; i < n; i++) t[i] = e[i] }

    function jn(t, e) { var i = Gn[e];
        void 0 === i && (i = new Int32Array(e), Gn[e] = i); for (var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit(); return i }

    function Vn(t, e) { var i = this.cache;
        i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e) }

    function Wn(t, e) { var i = this.cache;
        i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e) }

    function Xn(t, e) { var i = this.cache; if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
        else { if (Bn(i, e)) return;
            t.uniform2fv(this.addr, e), zn(i, e) } }

    function Yn(t, e) { var i = this.cache; if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
        else if (void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
        else { if (Bn(i, e)) return;
            t.uniform3fv(this.addr, e), zn(i, e) } }

    function qn(t, e) { var i = this.cache; if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
        else { if (Bn(i, e)) return;
            t.uniform4fv(this.addr, e), zn(i, e) } }

    function Zn(t, e) { var i = this.cache,
            n = e.elements; if (void 0 === n) { if (Bn(i, e)) return;
            t.uniformMatrix2fv(this.addr, !1, e), zn(i, e) } else { if (Bn(i, n)) return;
            Fn.set(n), t.uniformMatrix2fv(this.addr, !1, Fn), zn(i, n) } }

    function Jn(t, e) { var i = this.cache,
            n = e.elements; if (void 0 === n) { if (Bn(i, e)) return;
            t.uniformMatrix3fv(this.addr, !1, e), zn(i, e) } else { if (Bn(i, n)) return;
            Hn.set(n), t.uniformMatrix3fv(this.addr, !1, Hn), zn(i, n) } }

    function $n(t, e) { var i = this.cache,
            n = e.elements; if (void 0 === n) { if (Bn(i, e)) return;
            t.uniformMatrix4fv(this.addr, !1, e), zn(i, e) } else { if (Bn(i, n)) return;
            kn.set(n), t.uniformMatrix4fv(this.addr, !1, kn), zn(i, n) } }

    function Kn(t, e, i) { var n = this.cache,
            r = i.allocTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || Pn, r) }

    function Qn(t, e, i) { var n = this.cache,
            r = i.allocTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(e || Rn, r) }

    function tr(t, e, i) { var n = this.cache,
            r = i.allocTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || In, r) }

    function er(t, e) { var i = this.cache;
        Bn(i, e) || (t.uniform2iv(this.addr, e), zn(i, e)) }

    function ir(t, e) { var i = this.cache;
        Bn(i, e) || (t.uniform3iv(this.addr, e), zn(i, e)) }

    function nr(t, e) { var i = this.cache;
        Bn(i, e) || (t.uniform4iv(this.addr, e), zn(i, e)) }

    function rr(t, e) { var i = this.cache;
        Bn(i, e) || (t.uniform1fv(this.addr, e), zn(i, e)) }

    function or(t, e) { var i = this.cache;
        Bn(i, e) || (t.uniform1iv(this.addr, e), zn(i, e)) }

    function ar(t, e) { var i = this.cache,
            n = Un(e, this.size, 2);
        Bn(i, n) || (t.uniform2fv(this.addr, n), this.updateCache(n)) }

    function sr(t, e) { var i = this.cache,
            n = Un(e, this.size, 3);
        Bn(i, n) || (t.uniform3fv(this.addr, n), this.updateCache(n)) }

    function hr(t, e) { var i = this.cache,
            n = Un(e, this.size, 4);
        Bn(i, n) || (t.uniform4fv(this.addr, n), this.updateCache(n)) }

    function cr(t, e) { var i = this.cache,
            n = Un(e, this.size, 4);
        Bn(i, n) || (t.uniformMatrix2fv(this.addr, !1, n), this.updateCache(n)) }

    function lr(t, e) { var i = this.cache,
            n = Un(e, this.size, 9);
        Bn(i, n) || (t.uniformMatrix3fv(this.addr, !1, n), this.updateCache(n)) }

    function ur(t, e) { var i = this.cache,
            n = Un(e, this.size, 16);
        Bn(i, n) || (t.uniformMatrix4fv(this.addr, !1, n), this.updateCache(n)) }

    function pr(t, e, i) { var n = this.cache,
            r = e.length,
            o = jn(i, r);!1 === Bn(n, o) && (t.uniform1iv(this.addr, o), zn(n, o)); for (var a = 0; a !== r; ++a) i.setTexture2D(e[a] || Pn, o[a]) }

    function fr(t, e, i) { var n = this.cache,
            r = e.length,
            o = jn(i, r);!1 === Bn(n, o) && (t.uniform1iv(this.addr, o), zn(n, o)); for (var a = 0; a !== r; ++a) i.setTextureCube(e[a] || In, o[a]) }

    function dr(t, e, i) { this.id = t, this.addr = i, this.cache = [], this.setValue = function(t) { switch (t) {
                case 5126:
                    return Vn;
                case 35664:
                    return Xn;
                case 35665:
                    return Yn;
                case 35666:
                    return qn;
                case 35674:
                    return Zn;
                case 35675:
                    return Jn;
                case 35676:
                    return $n;
                case 35678:
                case 36198:
                    return Kn;
                case 35679:
                    return Qn;
                case 35680:
                    return tr;
                case 5124:
                case 35670:
                    return Wn;
                case 35667:
                case 35671:
                    return er;
                case 35668:
                case 35672:
                    return ir;
                case 35669:
                case 35673:
                    return nr } }(e.type) }

    function mr(t, e, i) { this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) { switch (t) {
                case 5126:
                    return rr;
                case 35664:
                    return ar;
                case 35665:
                    return sr;
                case 35666:
                    return hr;
                case 35674:
                    return cr;
                case 35675:
                    return lr;
                case 35676:
                    return ur;
                case 35678:
                    return pr;
                case 35680:
                    return fr;
                case 5124:
                case 35670:
                    return or;
                case 35667:
                case 35671:
                    return er;
                case 35668:
                case 35672:
                    return ir;
                case 35669:
                case 35673:
                    return nr } }(e.type) }

    function gr(t) { this.id = t, Nn.call(this) } mr.prototype.updateCache = function(t) { var e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), zn(e, t) }, gr.prototype.setValue = function(t, e, i) { for (var n = this.seq, r = 0, o = n.length; r !== o; ++r) { var a = n[r];
            a.setValue(t, e[a.id], i) } };
    var vr = /([\w\d_]+)(\])?(\[|\.)?/g;

    function yr(t, e) { t.seq.push(e), t.map[e.id] = e }

    function _r(t, e, i) { var n = t.name,
            r = n.length; for (vr.lastIndex = 0;;) { var o = vr.exec(n),
                a = vr.lastIndex,
                s = o[1],
                h = "]" === o[2],
                c = o[3]; if (h && (s |= 0), void 0 === c || "[" === c && a + 2 === r) { yr(i, void 0 === c ? new dr(s, t, e) : new mr(s, t, e)); break } var l = i.map[s];
            void 0 === l && yr(i, l = new gr(s)), i = l } }

    function xr(t, e, i) { Nn.call(this), this.renderer = i; for (var n = t.getProgramParameter(e, 35718), r = 0; r < n; ++r) { var o = t.getActiveUniform(e, r);
            _r(o, t.getUniformLocation(e, o.name), this) } }

    function br(t, e, i) { var n = t.createShader(e); return t.shaderSource(n, i), t.compileShader(n), !1 === t.getShaderParameter(n, 35713) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", 35633 === e ? "vertex" : "fragment", t.getShaderInfoLog(n), function(t) { for (var e = t.split("\n"), i = 0; i < e.length; i++) e[i] = i + 1 + ": " + e[i]; return e.join("\n") }(i)), n } xr.prototype.setValue = function(t, e, i) { var n = this.map[e];
        void 0 !== n && n.setValue(t, i, this.renderer) }, xr.prototype.setOptional = function(t, e, i) { var n = e[i];
        void 0 !== n && this.setValue(t, i, n) }, xr.upload = function(t, e, i, n) { for (var r = 0, o = e.length; r !== o; ++r) { var a = e[r],
                s = i[a.id];!1 !== s.needsUpdate && a.setValue(t, s.value, n) } }, xr.seqWithValue = function(t, e) { for (var i = [], n = 0, r = t.length; n !== r; ++n) { var o = t[n];
            o.id in e && i.push(o) } return i };
    var wr = 0;

    function Tr(t) { switch (t) {
            case Ce:
                return ["Linear", "( value )"];
            case Oe:
                return ["sRGB", "( value )"];
            case Re:
                return ["RGBE", "( value )"];
            case Ie:
                return ["RGBM", "( value, 7.0 )"];
            case Ne:
                return ["RGBM", "( value, 16.0 )"];
            case De:
                return ["RGBD", "( value, 256.0 )"];
            case Pe:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw new Error("unsupported encoding: " + t) } }

    function Er(t, e) { var i = Tr(e); return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }" }

    function Sr(t, e) { var i; switch (e) {
            case dt:
                i = "Linear"; break;
            case mt:
                i = "Reinhard"; break;
            case gt:
                i = "Uncharted2"; break;
            case vt:
                i = "OptimizedCineon"; break;
            case yt:
                i = "ACESFilmic"; break;
            default:
                throw new Error("unsupported toneMapping: " + e) } return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }" }

    function Mr(t) { return "" !== t }

    function Ar(t, e) { return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights) }

    function Lr(t, e) { return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) }

    function Cr(t) { return t.replace(/^[ \t]*#include +<([\w\d.\/]+)>/gm, function(t, e) { var i = hi[e]; if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">"); return Cr(i) }) }

    function Or(t) { return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, i, n) { for (var r = "", o = parseInt(e); o < parseInt(i); o++) r += n.replace(/\[ i \]/g, "[ " + o + " ]"); return r }) }

    function Pr(t, e, i, n, r, o, a) { var s = t.context,
            h = n.defines,
            c = r.vertexShader,
            l = r.fragmentShader,
            u = "SHADOWMAP_TYPE_BASIC";
        o.shadowMapType === M ? u = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === A && (u = "SHADOWMAP_TYPE_PCF_SOFT"); var p = "ENVMAP_TYPE_CUBE",
            f = "ENVMAP_MODE_REFLECTION",
            d = "ENVMAP_BLENDING_MULTIPLY"; if (o.envMap) { switch (n.envMap.mapping) {
                case _t:
                case xt:
                    p = "ENVMAP_TYPE_CUBE"; break;
                case Et:
                case St:
                    p = "ENVMAP_TYPE_CUBE_UV"; break;
                case bt:
                case wt:
                    p = "ENVMAP_TYPE_EQUIREC"; break;
                case Tt:
                    p = "ENVMAP_TYPE_SPHERE" } switch (n.envMap.mapping) {
                case xt:
                case wt:
                    f = "ENVMAP_MODE_REFRACTION" } switch (n.combine) {
                case lt:
                    d = "ENVMAP_BLENDING_MULTIPLY"; break;
                case ut:
                    d = "ENVMAP_BLENDING_MIX"; break;
                case pt:
                    d = "ENVMAP_BLENDING_ADD" } } var m, g, v, y, _, x = t.gammaFactor > 0 ? t.gammaFactor : 1,
            b = a.isWebGL2 ? "" : function(t, e, i) { return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap && !e.objectSpaceNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Mr).join("\n") }(n.extensions, o, e),
            w = function(t) { var e = []; for (var i in t) { var n = t[i];!1 !== n && e.push("#define " + i + " " + n) } return e.join("\n") }(h),
            T = s.createProgram(); if (n.isRawShaderMaterial ? ((m = [w].filter(Mr).join("\n")).length > 0 && (m += "\n"), (g = [b, w].filter(Mr).join("\n")).length > 0 && (g += "\n")) : (m = ["precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + r.name, w, o.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + x, "#define MAX_BONES " + o.maxBones, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + f : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.normalMap && o.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", o.displacementMap && o.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.skinning ? "#define USE_SKINNING" : "", o.useVertexTexture ? "#define BONE_TEXTURE" : "", o.morphTargets ? "#define USE_MORPHTARGETS" : "", o.morphNormals && !1 === o.flatShading ? "#define USE_MORPHNORMALS" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + u : "", o.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && (a.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Mr).join("\n"), g = [b, "precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + r.name, w, o.alphaTest ? "#define ALPHATEST " + o.alphaTest + (o.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + x, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.matcap ? "#define USE_MATCAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + p : "", o.envMap ? "#define " + f : "", o.envMap ? "#define " + d : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.normalMap && o.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.gradientMap ? "#define USE_GRADIENTMAP" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + u : "", o.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", o.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && (a.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", o.envMap && (a.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", o.toneMapping !== ft ? "#define TONE_MAPPING" : "", o.toneMapping !== ft ? hi.tonemapping_pars_fragment : "", o.toneMapping !== ft ? Sr("toneMapping", o.toneMapping) : "", o.dithering ? "#define DITHERING" : "", o.outputEncoding || o.mapEncoding || o.matcapEncoding || o.envMapEncoding || o.emissiveMapEncoding ? hi.encodings_pars_fragment : "", o.mapEncoding ? Er("mapTexelToLinear", o.mapEncoding) : "", o.matcapEncoding ? Er("matcapTexelToLinear", o.matcapEncoding) : "", o.envMapEncoding ? Er("envMapTexelToLinear", o.envMapEncoding) : "", o.emissiveMapEncoding ? Er("emissiveMapTexelToLinear", o.emissiveMapEncoding) : "", o.outputEncoding ? (v = "linearToOutputTexel", y = o.outputEncoding, _ = Tr(y), "vec4 " + v + "( vec4 value ) { return LinearTo" + _[0] + _[1] + "; }") : "", o.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Mr).join("\n")), c = Lr(c = Ar(c = Cr(c), o), o), l = Lr(l = Ar(l = Cr(l), o), o), c = Or(c), l = Or(l), a.isWebGL2 && !n.isRawShaderMaterial) { var E = !1,
                S = /^\s*#version\s+300\s+es\s*\n/;
            n.isShaderMaterial && null !== c.match(S) && null !== l.match(S) && (E = !0, c = c.replace(S, ""), l = l.replace(S, "")), m = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + m, g = ["#version 300 es\n", "#define varying in", E ? "" : "out highp vec4 pc_fragColor;", E ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + g } var L = g + l,
            C = br(s, 35633, m + c),
            O = br(s, 35632, L);
        s.attachShader(T, C), s.attachShader(T, O), void 0 !== n.index0AttributeName ? s.bindAttribLocation(T, 0, n.index0AttributeName) : !0 === o.morphTargets && s.bindAttribLocation(T, 0, "position"), s.linkProgram(T); var P, R, I = s.getProgramInfoLog(T).trim(),
            N = s.getShaderInfoLog(C).trim(),
            D = s.getShaderInfoLog(O).trim(),
            G = !0,
            k = !0; return !1 === s.getProgramParameter(T, 35714) ? (G = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "35715", s.getProgramParameter(T, 35715), "gl.getProgramInfoLog", I, N, D)) : "" !== I ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", I) : "" !== N && "" !== D || (k = !1), k && (this.diagnostics = { runnable: G, material: n, programLog: I, vertexShader: { log: N, prefix: m }, fragmentShader: { log: D, prefix: g } }), s.deleteShader(C), s.deleteShader(O), this.getUniforms = function() { return void 0 === P && (P = new xr(s, T, t)), P }, this.getAttributes = function() { return void 0 === R && (R = function(t, e) { for (var i = {}, n = t.getProgramParameter(e, 35721), r = 0; r < n; r++) { var o = t.getActiveAttrib(e, r).name;
                    i[o] = t.getAttribLocation(e, o) } return i }(s, T)), R }, this.destroy = function() { s.deleteProgram(T), this.program = void 0 }, Object.defineProperties(this, { uniforms: { get: function() { return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms() } }, attributes: { get: function() { return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes() } } }), this.name = r.name, this.id = wr++, this.code = i, this.usedTimes = 1, this.program = T, this.vertexShader = C, this.fragmentShader = O, this }

    function Rr(t, e, i) { var n = [],
            r = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "phong", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" },
            o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

        function a(t, e) { var i; return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = t.texture.encoding) : i = Ce, i === Ce && e && (i = Pe), i } this.getParameters = function(e, n, o, s, h, c, l) { var u = r[e.type],
                p = l.isSkinnedMesh ? function(t) { var e = t.skeleton.bones; if (i.floatVertexTextures) return 1024; var n = i.maxVertexUniforms,
                        r = Math.floor((n - 20) / 4),
                        o = Math.min(r, e.length); return o < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + o + "."), 0) : o }(l) : 0,
                f = i.precision;
            null !== e.precision && (f = i.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", f, "instead."); var d = t.getRenderTarget(); return { shaderID: u, precision: f, supportsVertexTextures: i.vertexTextures, outputEncoding: a(d ? d.texture : null, t.gammaOutput), map: !!e.map, mapEncoding: a(e.map, t.gammaInput), matcap: !!e.matcap, matcapEncoding: a(e.matcap, t.gammaInput), envMap: !!e.envMap, envMapMode: e.envMap && e.envMap.mapping, envMapEncoding: a(e.envMap, t.gammaInput), envMapCubeUV: !!e.envMap && (e.envMap.mapping === Et || e.envMap.mapping === St), lightMap: !!e.lightMap, aoMap: !!e.aoMap, emissiveMap: !!e.emissiveMap, emissiveMapEncoding: a(e.emissiveMap, t.gammaInput), bumpMap: !!e.bumpMap, normalMap: !!e.normalMap, objectSpaceNormalMap: e.normalMapType === Fe, displacementMap: !!e.displacementMap, roughnessMap: !!e.roughnessMap, metalnessMap: !!e.metalnessMap, specularMap: !!e.specularMap, alphaMap: !!e.alphaMap, gradientMap: !!e.gradientMap, combine: e.combine, vertexColors: e.vertexColors, fog: !!s, useFog: e.fog, fogExp: s && s.isFogExp2, flatShading: e.flatShading, sizeAttenuation: e.sizeAttenuation, logarithmicDepthBuffer: i.logarithmicDepthBuffer, skinning: e.skinning && p > 0, maxBones: p, useVertexTexture: i.floatVertexTextures, morphTargets: e.morphTargets, morphNormals: e.morphNormals, maxMorphTargets: t.maxMorphTargets, maxMorphNormals: t.maxMorphNormals, numDirLights: n.directional.length, numPointLights: n.point.length, numSpotLights: n.spot.length, numRectAreaLights: n.rectArea.length, numHemiLights: n.hemi.length, numClippingPlanes: h, numClipIntersection: c, dithering: e.dithering, shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && o.length > 0, shadowMapType: t.shadowMap.type, toneMapping: t.toneMapping, physicallyCorrectLights: t.physicallyCorrectLights, premultipliedAlpha: e.premultipliedAlpha, alphaTest: e.alphaTest, doubleSided: e.side === O, flipSided: e.side === C, depthPacking: void 0 !== e.depthPacking && e.depthPacking } }, this.getProgramCode = function(e, i) { var n = []; if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
                for (var r in e.defines) n.push(r), n.push(e.defines[r]); for (var a = 0; a < o.length; a++) n.push(i[o[a]]); return n.push(e.onBeforeCompile.toString()), n.push(t.gammaOutput), n.push(t.gammaFactor), n.join() }, this.acquireProgram = function(r, o, a, s) { for (var h, c = 0, l = n.length; c < l; c++) { var u = n[c]; if (u.code === s) {++(h = u).usedTimes; break } } return void 0 === h && (h = new Pr(t, e, s, r, o, a, i), n.push(h)), h }, this.releaseProgram = function(t) { if (0 == --t.usedTimes) { var e = n.indexOf(t);
                n[e] = n[n.length - 1], n.pop(), t.destroy() } }, this.programs = n }

    function Ir() { var t = new WeakMap; return { get: function(e) { var i = t.get(e); return void 0 === i && (i = {}, t.set(e, i)), i }, remove: function(e) { t.delete(e) }, update: function(e, i, n) { t.get(e)[i] = n }, dispose: function() { t = new WeakMap } } }

    function Nr(t, e) { return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id }

    function Dr(t, e) { return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id }

    function Gr() { var t = [],
            e = 0,
            i = [],
            n = [];

        function r(i, n, r, o, a) { var s = t[e]; return void 0 === s ? (s = { id: i.id, object: i, geometry: n, material: r, program: r.program, renderOrder: i.renderOrder, z: o, group: a }, t[e] = s) : (s.id = i.id, s.object = i, s.geometry = n, s.material = r, s.program = r.program, s.renderOrder = i.renderOrder, s.z = o, s.group = a), e++, s } return { opaque: i, transparent: n, init: function() { e = 0, i.length = 0, n.length = 0 }, push: function(t, e, o, a, s) { var h = r(t, e, o, a, s);
                (!0 === o.transparent ? n : i).push(h) }, unshift: function(t, e, o, a, s) { var h = r(t, e, o, a, s);
                (!0 === o.transparent ? n : i).unshift(h) }, sort: function() { i.length > 1 && i.sort(Nr), n.length > 1 && n.sort(Dr) } } }

    function kr() { var t = {}; return { get: function(e, i) { var n, r = t[e.id]; return void 0 === r ? (n = new Gr, t[e.id] = {}, t[e.id][i.id] = n) : void 0 === (n = r[i.id]) && (n = new Gr, r[i.id] = n), n }, dispose: function() { t = {} } } }

    function Hr() { var t = {}; return { get: function(e) { if (void 0 !== t[e.id]) return t[e.id]; var i; switch (e.type) {
                    case "DirectionalLight":
                        i = { direction: new Ve, color: new mi, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new Be }; break;
                    case "SpotLight":
                        i = { position: new Ve, direction: new Ve, color: new mi, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new Be }; break;
                    case "PointLight":
                        i = { position: new Ve, color: new mi, distance: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new Be, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break;
                    case "HemisphereLight":
                        i = { direction: new Ve, skyColor: new mi, groundColor: new mi }; break;
                    case "RectAreaLight":
                        i = { color: new mi, position: new Ve, halfWidth: new Ve, halfHeight: new Ve } } return t[e.id] = i, i } } }
    var Fr = 0;

    function Ur() { var t = new Hr,
            e = { id: Fr++, hash: { stateID: -1, directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, shadowsLength: -1 }, ambient: [0, 0, 0], directional: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], point: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] },
            i = new Ve,
            n = new ze,
            r = new ze; return { setup: function(o, a, s) { for (var h = 0, c = 0, l = 0, u = 0, p = 0, f = 0, d = 0, m = 0, g = s.matrixWorldInverse, v = 0, y = o.length; v < y; v++) { var _ = o[v],
                        x = _.color,
                        b = _.intensity,
                        w = _.distance,
                        T = _.shadow && _.shadow.map ? _.shadow.map.texture : null; if (_.isAmbientLight) h += x.r * b, c += x.g * b, l += x.b * b;
                    else if (_.isDirectionalLight) { if ((S = t.get(_)).color.copy(_.color).multiplyScalar(_.intensity), S.direction.setFromMatrixPosition(_.matrixWorld), i.setFromMatrixPosition(_.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(g), S.shadow = _.castShadow, _.castShadow) { var E = _.shadow;
                            S.shadowBias = E.bias, S.shadowRadius = E.radius, S.shadowMapSize = E.mapSize } e.directionalShadowMap[u] = T, e.directionalShadowMatrix[u] = _.shadow.matrix, e.directional[u] = S, u++ } else if (_.isSpotLight)(S = t.get(_)).position.setFromMatrixPosition(_.matrixWorld), S.position.applyMatrix4(g), S.color.copy(x).multiplyScalar(b), S.distance = w, S.direction.setFromMatrixPosition(_.matrixWorld), i.setFromMatrixPosition(_.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(g), S.coneCos = Math.cos(_.angle), S.penumbraCos = Math.cos(_.angle * (1 - _.penumbra)), S.decay = _.decay, S.shadow = _.castShadow, _.castShadow && (E = _.shadow, S.shadowBias = E.bias, S.shadowRadius = E.radius, S.shadowMapSize = E.mapSize), e.spotShadowMap[f] = T, e.spotShadowMatrix[f] = _.shadow.matrix, e.spot[f] = S, f++;
                    else if (_.isRectAreaLight)(S = t.get(_)).color.copy(x).multiplyScalar(b), S.position.setFromMatrixPosition(_.matrixWorld), S.position.applyMatrix4(g), r.identity(), n.copy(_.matrixWorld), n.premultiply(g), r.extractRotation(n), S.halfWidth.set(.5 * _.width, 0, 0), S.halfHeight.set(0, .5 * _.height, 0), S.halfWidth.applyMatrix4(r), S.halfHeight.applyMatrix4(r), e.rectArea[d] = S, d++;
                    else if (_.isPointLight)(S = t.get(_)).position.setFromMatrixPosition(_.matrixWorld), S.position.applyMatrix4(g), S.color.copy(_.color).multiplyScalar(_.intensity), S.distance = _.distance, S.decay = _.decay, S.shadow = _.castShadow, _.castShadow && (E = _.shadow, S.shadowBias = E.bias, S.shadowRadius = E.radius, S.shadowMapSize = E.mapSize, S.shadowCameraNear = E.camera.near, S.shadowCameraFar = E.camera.far), e.pointShadowMap[p] = T, e.pointShadowMatrix[p] = _.shadow.matrix, e.point[p] = S, p++;
                    else if (_.isHemisphereLight) { var S;
                        (S = t.get(_)).direction.setFromMatrixPosition(_.matrixWorld), S.direction.transformDirection(g), S.direction.normalize(), S.skyColor.copy(_.color).multiplyScalar(b), S.groundColor.copy(_.groundColor).multiplyScalar(b), e.hemi[m] = S, m++ } } e.ambient[0] = h, e.ambient[1] = c, e.ambient[2] = l, e.directional.length = u, e.spot.length = f, e.rectArea.length = d, e.point.length = p, e.hemi.length = m, e.hash.stateID = e.id, e.hash.directionalLength = u, e.hash.pointLength = p, e.hash.spotLength = f, e.hash.rectAreaLength = d, e.hash.hemiLength = m, e.hash.shadowsLength = a.length }, state: e } }

    function Br() { var t = new Ur,
            e = [],
            i = []; return { init: function() { e.length = 0, i.length = 0 }, state: { lightsArray: e, shadowsArray: i, lights: t }, setupLights: function(n) { t.setup(e, i, n) }, pushLight: function(t) { e.push(t) }, pushShadow: function(t) { i.push(t) } } }

    function zr() { var t = {}; return { get: function(e, i) { var n; return void 0 === t[e.id] ? (n = new Br, t[e.id] = {}, t[e.id][i.id] = n) : void 0 === t[e.id][i.id] ? (n = new Br, t[e.id][i.id] = n) : n = t[e.id][i.id], n }, dispose: function() { t = {} } } }

    function jr(t) { pn.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Ge, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t) }

    function Vr(t) { pn.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new Ve, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t) }

    function Wr(t, e, i) { for (var n = new si, r = new ze, o = new Be, a = new Be(i, i), s = new Ve, h = new Ve, c = 1, l = 2, u = 1 + (c | l), p = new Array(u), f = new Array(u), d = {}, m = { 0: C, 1: L, 2: O }, g = [new Ve(1, 0, 0), new Ve(-1, 0, 0), new Ve(0, 0, 1), new Ve(0, 0, -1), new Ve(0, 1, 0), new Ve(0, -1, 0)], v = [new Ve(0, 1, 0), new Ve(0, 1, 0), new Ve(0, 1, 0), new Ve(0, 1, 0), new Ve(0, 0, 1), new Ve(0, 0, -1)], y = [new ti, new ti, new ti, new ti, new ti, new ti], _ = 0; _ !== u; ++_) { var x = 0 != (_ & c),
                b = 0 != (_ & l),
                w = new jr({ depthPacking: ke, morphTargets: x, skinning: b });
            p[_] = w; var T = new Vr({ morphTargets: x, skinning: b });
            f[_] = T } var E = this;

        function S(e, i, n, r, o, a) { var s = e.geometry,
                h = null,
                u = p,
                g = e.customDepthMaterial; if (n && (u = f, g = e.customDistanceMaterial), g) h = g;
            else { var v = !1;
                i.morphTargets && (s && s.isBufferGeometry ? v = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (v = s.morphTargets && s.morphTargets.length > 0)), e.isSkinnedMesh && !1 === i.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e); var y = e.isSkinnedMesh && i.skinning,
                    _ = 0;
                v && (_ |= c), y && (_ |= l), h = u[_] } if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) { var x = h.uuid,
                    b = i.uuid,
                    w = d[x];
                void 0 === w && (w = {}, d[x] = w); var T = w[b];
                void 0 === T && (T = h.clone(), w[b] = T), h = T } return h.visible = i.visible, h.wireframe = i.wireframe, h.side = null != i.shadowSide ? i.shadowSide : m[i.side], h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, n && h.isMeshDistanceMaterial && (h.referencePosition.copy(r), h.nearDistance = o, h.farDistance = a), h }

        function A(i, r, o, a) { if (!1 !== i.visible) { if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && i.castShadow && (!i.frustumCulled || n.intersectsObject(i))) { i.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, i.matrixWorld); var s = e.update(i),
                        c = i.material; if (Array.isArray(c))
                        for (var l = s.groups, u = 0, p = l.length; u < p; u++) { var f = l[u],
                                d = c[f.materialIndex]; if (d && d.visible) { var m = S(i, d, a, h, o.near, o.far);
                                t.renderBufferDirect(o, null, s, m, i, f) } } else if (c.visible) { m = S(i, c, a, h, o.near, o.far);
                            t.renderBufferDirect(o, null, s, m, i, null) } } for (var g = i.children, v = 0, y = g.length; v < y; v++) A(g[v], r, o, a) } } this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = M, this.render = function(e, i, c) { if (!1 !== E.enabled && (!1 !== E.autoUpdate || !1 !== E.needsUpdate) && 0 !== e.length) { t.context; var l, u = t.state;
                u.disable(3042), u.buffers.color.setClear(1, 1, 1, 1), u.buffers.depth.setTest(!0), u.setScissorTest(!1); for (var p = 0, f = e.length; p < f; p++) { var d = e[p],
                        m = d.shadow,
                        _ = d && d.isPointLight; if (void 0 !== m) { var x = m.camera; if (o.copy(m.mapSize), o.min(a), _) { var b = o.x,
                                w = o.y;
                            y[0].set(2 * b, w, b, w), y[1].set(0, w, b, w), y[2].set(3 * b, w, b, w), y[3].set(b, w, b, w), y[4].set(3 * b, 0, b, w), y[5].set(b, 0, b, w), o.x *= 4, o.y *= 2 } if (null === m.map) { var T = { minFilter: Ct, magFilter: Ct, format: Zt };
                            m.map = new ei(o.x, o.y, T), m.map.texture.name = d.name + ".shadowMap", x.updateProjectionMatrix() } m.isSpotLightShadow && m.update(d); var S = m.map,
                            M = m.matrix;
                        h.setFromMatrixPosition(d.matrixWorld), x.position.copy(h), _ ? (l = 6, M.makeTranslation(-h.x, -h.y, -h.z)) : (l = 1, s.setFromMatrixPosition(d.target.matrixWorld), x.lookAt(s), x.updateMatrixWorld(), M.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), M.multiply(x.projectionMatrix), M.multiply(x.matrixWorldInverse)), t.setRenderTarget(S), t.clear(); for (var L = 0; L < l; L++) { if (_) { s.copy(x.position), s.add(g[L]), x.up.copy(v[L]), x.lookAt(s), x.updateMatrixWorld(); var C = y[L];
                                u.viewport(C) } r.multiplyMatrices(x.projectionMatrix, x.matrixWorldInverse), n.setFromMatrix(r), A(i, c, x, _) } } else console.warn("THREE.WebGLShadowMap:", d, "has no shadow.") } E.needsUpdate = !1 } } }

    function Xr(t, e, i, n) { var r = new function() { var e = !1,
                    i = new ti,
                    n = null,
                    r = new ti(0, 0, 0, 0); return { setMask: function(i) { n === i || e || (t.colorMask(i, i, i, i), n = i) }, setLocked: function(t) { e = t }, setClear: function(e, n, o, a, s) {!0 === s && (e *= a, n *= a, o *= a), i.set(e, n, o, a), !1 === r.equals(i) && (t.clearColor(e, n, o, a), r.copy(i)) }, reset: function() { e = !1, n = null, r.set(-1, 0, 0, 0) } } },
            o = new function() { var e = !1,
                    i = null,
                    n = null,
                    r = null; return { setTest: function(t) { t ? $(2929) : K(2929) }, setMask: function(n) { i === n || e || (t.depthMask(n), i = n) }, setFunc: function(e) { if (n !== e) { if (e) switch (e) {
                                case it:
                                    t.depthFunc(512); break;
                                case nt:
                                    t.depthFunc(519); break;
                                case rt:
                                    t.depthFunc(513); break;
                                case ot:
                                    t.depthFunc(515); break;
                                case at:
                                    t.depthFunc(514); break;
                                case st:
                                    t.depthFunc(518); break;
                                case ht:
                                    t.depthFunc(516); break;
                                case ct:
                                    t.depthFunc(517); break;
                                default:
                                    t.depthFunc(515) } else t.depthFunc(515);
                            n = e } }, setLocked: function(t) { e = t }, setClear: function(e) { r !== e && (t.clearDepth(e), r = e) }, reset: function() { e = !1, i = null, n = null, r = null } } },
            a = new function() { var e = !1,
                    i = null,
                    n = null,
                    r = null,
                    o = null,
                    a = null,
                    s = null,
                    h = null,
                    c = null; return { setTest: function(t) { t ? $(2960) : K(2960) }, setMask: function(n) { i === n || e || (t.stencilMask(n), i = n) }, setFunc: function(e, i, a) { n === e && r === i && o === a || (t.stencilFunc(e, i, a), n = e, r = i, o = a) }, setOp: function(e, i, n) { a === e && s === i && h === n || (t.stencilOp(e, i, n), a = e, s = i, h = n) }, setLocked: function(t) { e = t }, setClear: function(e) { c !== e && (t.clearStencil(e), c = e) }, reset: function() { e = !1, i = null, n = null, r = null, o = null, a = null, s = null, h = null, c = null } } },
            s = t.getParameter(34921),
            h = new Uint8Array(s),
            c = new Uint8Array(s),
            l = new Uint8Array(s),
            u = {},
            p = null,
            f = null,
            d = null,
            m = null,
            g = null,
            v = null,
            y = null,
            _ = null,
            x = null,
            b = null,
            w = !1,
            M = null,
            A = null,
            L = null,
            P = null,
            R = null,
            I = t.getParameter(35661),
            B = !1,
            z = 0,
            j = t.getParameter(7938); - 1 !== j.indexOf("WebGL") ? (z = parseFloat(/^WebGL\ ([0-9])/.exec(j)[1]), B = z >= 1) : -1 !== j.indexOf("OpenGL ES") && (z = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(j)[1]), B = z >= 2); var V = null,
            W = {},
            X = new ti,
            Y = new ti;

        function q(e, i, n) { var r = new Uint8Array(4),
                o = t.createTexture();
            t.bindTexture(e, o), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728); for (var a = 0; a < n; a++) t.texImage2D(i + a, 0, 6408, 1, 1, 0, 6408, 5121, r); return o } var Z = {};

        function J(i, r) {
            (h[i] = 1, 0 === c[i] && (t.enableVertexAttribArray(i), c[i] = 1), l[i] !== r) && ((n.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), l[i] = r) }

        function $(e) {!0 !== u[e] && (t.enable(e), u[e] = !0) }

        function K(e) {!1 !== u[e] && (t.disable(e), u[e] = !1) }

        function Q(e, n, r, o, a, s, h, c) { if (e !== N) { if (d || ($(3042), d = !0), e === F) a = a || n, s = s || r, h = h || o, n === g && a === _ || (t.blendEquationSeparate(i.convert(n), i.convert(a)), g = n, _ = a), r === v && o === y && s === x && h === b || (t.blendFuncSeparate(i.convert(r), i.convert(o), i.convert(s), i.convert(h)), v = r, y = o, x = s, b = h), m = e, w = null;
                else if (e !== m || c !== w) { if (g === U && _ === U || (t.blendEquation(32774), g = U, _ = U), c) switch (e) {
                        case D:
                            t.blendFuncSeparate(1, 771, 1, 771); break;
                        case G:
                            t.blendFunc(1, 1); break;
                        case k:
                            t.blendFuncSeparate(0, 0, 769, 771); break;
                        case H:
                            t.blendFuncSeparate(0, 768, 0, 770); break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e) } else switch (e) {
                        case D:
                            t.blendFuncSeparate(770, 771, 1, 771); break;
                        case G:
                            t.blendFunc(770, 1); break;
                        case k:
                            t.blendFunc(0, 769); break;
                        case H:
                            t.blendFunc(0, 768); break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e) } v = null, y = null, x = null, b = null, m = e, w = c } } else d && (K(3042), d = !1) }

        function tt(e) { M !== e && (e ? t.frontFace(2304) : t.frontFace(2305), M = e) }

        function et(e) { e !== T ? ($(2884), e !== A && (e === E ? t.cullFace(1029) : e === S ? t.cullFace(1028) : t.cullFace(1032))) : K(2884), A = e }

        function lt(e, i, n) { e ? ($(32823), P === i && R === n || (t.polygonOffset(i, n), P = i, R = n)) : K(32823) }

        function ut(e) { void 0 === e && (e = 33984 + I - 1), V !== e && (t.activeTexture(e), V = e) } return Z[3553] = q(3553, 3553, 1), Z[34067] = q(34067, 34069, 6), r.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), $(2929), o.setFunc(ot), tt(!1), et(E), $(2884), Q(N), { buffers: { color: r, depth: o, stencil: a }, initAttributes: function() { for (var t = 0, e = h.length; t < e; t++) h[t] = 0 }, enableAttribute: function(t) { J(t, 0) }, enableAttributeAndDivisor: J, disableUnusedAttributes: function() { for (var e = 0, i = c.length; e !== i; ++e) c[e] !== h[e] && (t.disableVertexAttribArray(e), c[e] = 0) }, enable: $, disable: K, getCompressedTextureFormats: function() { if (null === p && (p = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1") || e.get("WEBGL_compressed_texture_astc")))
                    for (var i = t.getParameter(34467), n = 0; n < i.length; n++) p.push(i[n]); return p }, useProgram: function(e) { return f !== e && (t.useProgram(e), f = e, !0) }, setBlending: Q, setMaterial: function(t, e) { t.side === O ? K(2884) : $(2884); var i = t.side === C;
                e && (i = !i), tt(i), t.blending === D && !1 === t.transparent ? Q(N) : Q(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), r.setMask(t.colorWrite), lt(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits) }, setFlipSided: tt, setCullFace: et, setLineWidth: function(e) { e !== L && (B && t.lineWidth(e), L = e) }, setPolygonOffset: lt, setScissorTest: function(t) { t ? $(3089) : K(3089) }, activeTexture: ut, bindTexture: function(e, i) { null === V && ut(); var n = W[V];
                void 0 === n && (n = { type: void 0, texture: void 0 }, W[V] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || Z[e]), n.type = e, n.texture = i) }, compressedTexImage2D: function() { try { t.compressedTexImage2D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, texImage2D: function() { try { t.texImage2D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, texImage3D: function() { try { t.texImage3D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, scissor: function(e) {!1 === X.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), X.copy(e)) }, viewport: function(e) {!1 === Y.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), Y.copy(e)) }, reset: function() { for (var e = 0; e < c.length; e++) 1 === c[e] && (t.disableVertexAttribArray(e), c[e] = 0);
                u = {}, p = null, V = null, W = {}, f = null, m = null, M = null, A = null, r.reset(), o.reset(), a.reset() } } }

    function Yr(t, e, i, n, r, o, a) { var s, h = {};

        function c(t, e) { if (t.width > e || t.height > e) { if ("data" in t) return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + t.width + "x" + t.height + ")."); var i = e / Math.max(t.width, t.height),
                    n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"); return n.width = Math.floor(t.width * i), n.height = Math.floor(t.height * i), n.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + n.width + "x" + n.height), n } return t }

        function l(t) { return Ue.isPowerOfTwo(t.width) && Ue.isPowerOfTwo(t.height) }

        function u(t, e) { return t.generateMipmaps && e && t.minFilter !== Ct && t.minFilter !== Rt }

        function p(e, i, r, o) { t.generateMipmap(e), n.get(i).__maxMipLevel = Math.log(Math.max(r, o)) * Math.LOG2E }

        function f(t, e) { if (!r.isWebGL2) return t; if (6403 === t) { if (5126 === e) return 33326; if (5131 === e) return 33325; if (5121 === e) return 33321 } if (6407 === t) { if (5126 === e) return 34837; if (5131 === e) return 34843; if (5121 === e) return 32849 } if (6408 === t) { if (5126 === e) return 34836; if (5131 === e) return 34842; if (5121 === e) return 32856 } return t }

        function d(t) { return t === Ct || t === Ot || t === Pt ? 9728 : 9729 }

        function m(e) { var i = e.target;
            i.removeEventListener("dispose", m),
                function(e) { var i = n.get(e); if (e.image && i.__image__webglTextureCube) t.deleteTexture(i.__image__webglTextureCube);
                    else { if (void 0 === i.__webglInit) return;
                        t.deleteTexture(i.__webglTexture) } n.remove(e) }(i), i.isVideoTexture && delete h[i.id], a.memory.textures-- }

        function g(e) { var i = e.target;
            i.removeEventListener("dispose", g),
                function(e) { var i = n.get(e),
                        r = n.get(e.texture); if (!e) return;
                    void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture);
                    e.depthTexture && e.depthTexture.dispose(); if (e.isWebGLRenderTargetCube)
                        for (var o = 0; o < 6; o++) t.deleteFramebuffer(i.__webglFramebuffer[o]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[o]);
                    else t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer);
                    n.remove(e.texture), n.remove(e) }(i), a.memory.textures-- }

        function v(t, e) { var r = n.get(t); if (t.isVideoTexture && function(t) { var e = t.id,
                        i = a.render.frame;
                    h[e] !== i && (h[e] = i, t.update()) }(t), t.version > 0 && r.__version !== t.version) { var o = t.image; if (void 0 === o) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else { if (!1 !== o.complete) return void _(r, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete") } } i.activeTexture(33984 + e), i.bindTexture(3553, r.__webglTexture) }

        function y(i, a, s) { var h; if (s ? (t.texParameteri(i, 10242, o.convert(a.wrapS)), t.texParameteri(i, 10243, o.convert(a.wrapT)), t.texParameteri(i, 10240, o.convert(a.magFilter)), t.texParameteri(i, 10241, o.convert(a.minFilter))) : (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071), a.wrapS === At && a.wrapT === At || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(i, 10240, d(a.magFilter)), t.texParameteri(i, 10241, d(a.minFilter)), a.minFilter !== Ct && a.minFilter !== Rt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), h = e.get("EXT_texture_filter_anisotropic")) { if (a.type === Bt && null === e.get("OES_texture_float_linear")) return; if (a.type === zt && null === (r.isWebGL2 || e.get("OES_texture_half_float_linear"))) return;
                (a.anisotropy > 1 || n.get(a).__currentAnisotropy) && (t.texParameterf(i, h.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), n.get(a).__currentAnisotropy = a.anisotropy) } }

        function _(e, n, h) { var d;
            d = n.isDataTexture3D ? 32879 : 3553, void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", m), e.__webglTexture = t.createTexture(), a.memory.textures++), i.activeTexture(33984 + h), i.bindTexture(d, e.__webglTexture), t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment); var g = c(n.image, r.maxTextureSize);
            (function(t) { return !r.isWebGL2 && (t.wrapS !== At || t.wrapT !== At || t.minFilter !== Ct && t.minFilter !== Rt) })(n) && !1 === l(g) && (g = function(t) { return t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap ? (void 0 === s && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), s.width = Ue.floorPowerOfTwo(t.width), s.height = Ue.floorPowerOfTwo(t.height), s.getContext("2d").drawImage(t, 0, 0, s.width, s.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + s.width + "x" + s.height), s) : t }(g)); var v = l(g),
                _ = o.convert(n.format),
                x = o.convert(n.type),
                b = f(_, x);
            y(d, n, v); var w, T = n.mipmaps; if (n.isDepthTexture) { if (b = 6402, n.type === Bt) { if (!r.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
                    b = 36012 } else r.isWebGL2 && (b = 33189);
                n.format === Kt && 6402 === b && n.type !== Ht && n.type !== Ut && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = Ht, x = o.convert(n.type)), n.format === Qt && (b = 34041, n.type !== Xt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = Xt, x = o.convert(n.type))), i.texImage2D(3553, 0, b, g.width, g.height, 0, _, x, null) } else if (n.isDataTexture)
                if (T.length > 0 && v) { for (var E = 0, S = T.length; E < S; E++) w = T[E], i.texImage2D(3553, E, b, w.width, w.height, 0, _, x, w.data);
                    n.generateMipmaps = !1, e.__maxMipLevel = T.length - 1 } else i.texImage2D(3553, 0, b, g.width, g.height, 0, _, x, g.data), e.__maxMipLevel = 0;
            else if (n.isCompressedTexture) { for (E = 0, S = T.length; E < S; E++) w = T[E], n.format !== Zt && n.format !== qt ? i.getCompressedTextureFormats().indexOf(_) > -1 ? i.compressedTexImage2D(3553, E, b, w.width, w.height, 0, w.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(3553, E, b, w.width, w.height, 0, _, x, w.data);
                e.__maxMipLevel = T.length - 1 } else if (n.isDataTexture3D) i.texImage3D(32879, 0, b, g.width, g.height, g.depth, 0, _, x, g.data), e.__maxMipLevel = 0;
            else if (T.length > 0 && v) { for (E = 0, S = T.length; E < S; E++) w = T[E], i.texImage2D(3553, E, b, _, x, w);
                n.generateMipmaps = !1, e.__maxMipLevel = T.length - 1 } else i.texImage2D(3553, 0, b, _, x, g), e.__maxMipLevel = 0;
            u(n, v) && p(3553, n, g.width, g.height), e.__version = n.version, n.onUpdate && n.onUpdate(n) }

        function x(e, r, a, s) { var h = o.convert(r.texture.format),
                c = o.convert(r.texture.type),
                l = f(h, c);
            i.texImage2D(s, 0, l, r.width, r.height, 0, h, c, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, a, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null) }

        function b(e, i) { t.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer ? (t.renderbufferStorage(36161, 33189, i.width, i.height), t.framebufferRenderbuffer(36160, 36096, 36161, e)) : i.depthBuffer && i.stencilBuffer ? (t.renderbufferStorage(36161, 34041, i.width, i.height), t.framebufferRenderbuffer(36160, 33306, 36161, e)) : t.renderbufferStorage(36161, 32854, i.width, i.height), t.bindRenderbuffer(36161, null) }

        function w(e) { var i = n.get(e),
                r = !0 === e.isWebGLRenderTargetCube; if (e.depthTexture) { if (r) throw new Error("target.depthTexture not supported in Cube render targets");! function(e, i) { if (i && i.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(36160, e), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), v(i.depthTexture, 0); var r = n.get(i.depthTexture).__webglTexture; if (i.depthTexture.format === Kt) t.framebufferTexture2D(36160, 36096, 3553, r, 0);
                    else { if (i.depthTexture.format !== Qt) throw new Error("Unknown depthTexture format");
                        t.framebufferTexture2D(36160, 33306, 3553, r, 0) } }(i.__webglFramebuffer, e) } else if (r) { i.__webglDepthbuffer = []; for (var o = 0; o < 6; o++) t.bindFramebuffer(36160, i.__webglFramebuffer[o]), i.__webglDepthbuffer[o] = t.createRenderbuffer(), b(i.__webglDepthbuffer[o], e) } else t.bindFramebuffer(36160, i.__webglFramebuffer), i.__webglDepthbuffer = t.createRenderbuffer(), b(i.__webglDepthbuffer, e);
            t.bindFramebuffer(36160, null) } this.setTexture2D = v, this.setTexture3D = function(t, e) { var r = n.get(t);
            t.version > 0 && r.__version !== t.version ? _(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(32879, r.__webglTexture)) }, this.setTextureCube = function(e, s) { var h = n.get(e); if (6 === e.image.length)
                if (e.version > 0 && h.__version !== e.version) { h.__image__webglTextureCube || (e.addEventListener("dispose", m), h.__image__webglTextureCube = t.createTexture(), a.memory.textures++), i.activeTexture(33984 + s), i.bindTexture(34067, h.__image__webglTextureCube), t.pixelStorei(37440, e.flipY); for (var d = e && e.isCompressedTexture, g = e.image[0] && e.image[0].isDataTexture, v = [], _ = 0; _ < 6; _++) v[_] = d || g ? g ? e.image[_].image : e.image[_] : c(e.image[_], r.maxCubemapSize); var x = v[0],
                        b = l(x),
                        w = o.convert(e.format),
                        T = o.convert(e.type),
                        E = f(w, T); for (y(34067, e, b), _ = 0; _ < 6; _++)
                        if (d)
                            for (var S, M = v[_].mipmaps, A = 0, L = M.length; A < L; A++) S = M[A], e.format !== Zt && e.format !== qt ? i.getCompressedTextureFormats().indexOf(w) > -1 ? i.compressedTexImage2D(34069 + _, A, E, S.width, S.height, 0, S.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(34069 + _, A, E, S.width, S.height, 0, w, T, S.data);
                        else g ? i.texImage2D(34069 + _, 0, E, v[_].width, v[_].height, 0, w, T, v[_].data) : i.texImage2D(34069 + _, 0, E, w, T, v[_]);
                    h.__maxMipLevel = d ? M.length - 1 : 0, u(e, b) && p(34067, e, x.width, x.height), h.__version = e.version, e.onUpdate && e.onUpdate(e) } else i.activeTexture(33984 + s), i.bindTexture(34067, h.__image__webglTextureCube) }, this.setTextureCubeDynamic = function(t, e) { i.activeTexture(33984 + e), i.bindTexture(34067, n.get(t).__webglTexture) }, this.setupRenderTarget = function(e) { var r = n.get(e),
                o = n.get(e.texture);
            e.addEventListener("dispose", g), o.__webglTexture = t.createTexture(), a.memory.textures++; var s = !0 === e.isWebGLRenderTargetCube,
                h = l(e); if (s) { r.__webglFramebuffer = []; for (var c = 0; c < 6; c++) r.__webglFramebuffer[c] = t.createFramebuffer() } else r.__webglFramebuffer = t.createFramebuffer(); if (s) { for (i.bindTexture(34067, o.__webglTexture), y(34067, e.texture, h), c = 0; c < 6; c++) x(r.__webglFramebuffer[c], e, 36064, 34069 + c);
                u(e.texture, h) && p(34067, e.texture, e.width, e.height), i.bindTexture(34067, null) } else i.bindTexture(3553, o.__webglTexture), y(3553, e.texture, h), x(r.__webglFramebuffer, e, 36064, 3553), u(e.texture, h) && p(3553, e.texture, e.width, e.height), i.bindTexture(3553, null);
            e.depthBuffer && w(e) }, this.updateRenderTargetMipmap = function(t) { var e = t.texture; if (u(e, l(t))) { var r = t.isWebGLRenderTargetCube ? 34067 : 3553,
                    o = n.get(e).__webglTexture;
                i.bindTexture(r, o), p(r, e, t.width, t.height), i.bindTexture(r, null) } } }

    function qr(t, e, i) { return { convert: function(t) { var n; if (t === Mt) return 10497; if (t === At) return 33071; if (t === Lt) return 33648; if (t === Ct) return 9728; if (t === Ot) return 9984; if (t === Pt) return 9986; if (t === Rt) return 9729; if (t === It) return 9985; if (t === Nt) return 9987; if (t === Dt) return 5121; if (t === jt) return 32819; if (t === Vt) return 32820; if (t === Wt) return 33635; if (t === Gt) return 5120; if (t === kt) return 5122; if (t === Ht) return 5123; if (t === Ft) return 5124; if (t === Ut) return 5125; if (t === Bt) return 5126; if (t === zt) { if (i.isWebGL2) return 5131; if (null !== (n = e.get("OES_texture_half_float"))) return n.HALF_FLOAT_OES } if (t === Yt) return 6406; if (t === qt) return 6407; if (t === Zt) return 6408; if (t === Jt) return 6409; if (t === $t) return 6410; if (t === Kt) return 6402; if (t === Qt) return 34041; if (t === te) return 6403; if (t === U) return 32774; if (t === B) return 32778; if (t === z) return 32779; if (t === W) return 0; if (t === X) return 1; if (t === Y) return 768; if (t === q) return 769; if (t === Z) return 770; if (t === J) return 771; if (t === $) return 772; if (t === K) return 773; if (t === Q) return 774; if (t === tt) return 775; if (t === et) return 776; if ((t === ee || t === ie || t === ne || t === re) && null !== (n = e.get("WEBGL_compressed_texture_s3tc"))) { if (t === ee) return n.COMPRESSED_RGB_S3TC_DXT1_EXT; if (t === ie) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (t === ne) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (t === re) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT } if ((t === oe || t === ae || t === se || t === he) && null !== (n = e.get("WEBGL_compressed_texture_pvrtc"))) { if (t === oe) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (t === ae) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (t === se) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (t === he) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } if (t === ce && null !== (n = e.get("WEBGL_compressed_texture_etc1"))) return n.COMPRESSED_RGB_ETC1_WEBGL; if ((t === le || t === ue || t === pe || t === fe || t === de || t === me || t === ge || t === ve || t === ye || t === _e || t === xe || t === be || t === we || t === Te) && null !== (n = e.get("WEBGL_compressed_texture_astc"))) return t; if (t === j || t === V) { if (i.isWebGL2) { if (t === j) return 32775; if (t === V) return 32776 } if (null !== (n = e.get("EXT_blend_minmax"))) { if (t === j) return n.MIN_EXT; if (t === V) return n.MAX_EXT } } if (t === Xt) { if (i.isWebGL2) return 34042; if (null !== (n = e.get("WEBGL_depth_texture"))) return n.UNSIGNED_INT_24_8_WEBGL } return 0 } } }

    function Zr() { Ci.call(this), this.type = "Group" }

    function Jr() { Ci.call(this), this.type = "Camera", this.matrixWorldInverse = new ze, this.projectionMatrix = new ze, this.projectionMatrixInverse = new ze }

    function $r(t, e, i, n) { Jr.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() }

    function Kr(t) { $r.call(this), this.cameras = t || [] } jr.prototype = Object.create(pn.prototype), jr.prototype.constructor = jr, jr.prototype.isMeshDepthMaterial = !0, jr.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this }, Vr.prototype = Object.create(pn.prototype), Vr.prototype.constructor = Vr, Vr.prototype.isMeshDistanceMaterial = !0, Vr.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this }, Zr.prototype = Object.assign(Object.create(Ci.prototype), { constructor: Zr, isGroup: !0 }), Jr.prototype = Object.assign(Object.create(Ci.prototype), { constructor: Jr, isCamera: !0, copy: function(t, e) { return Ci.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this }, getWorldDirection: function(t) { void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new Ve), this.updateMatrixWorld(!0); var e = this.matrixWorld.elements; return t.set(-e[8], -e[9], -e[10]).normalize() }, updateMatrixWorld: function(t) { Ci.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld) }, clone: function() { return (new this.constructor).copy(this) } }), $r.prototype = Object.assign(Object.create(Jr.prototype), { constructor: $r, isPerspectiveCamera: !0, copy: function(t, e) { return Jr.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this }, setFocalLength: function(t) { var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * Ue.RAD2DEG * Math.atan(e), this.updateProjectionMatrix() }, getFocalLength: function() { var t = Math.tan(.5 * Ue.DEG2RAD * this.fov); return .5 * this.getFilmHeight() / t }, getEffectiveFOV: function() { return 2 * Ue.RAD2DEG * Math.atan(Math.tan(.5 * Ue.DEG2RAD * this.fov) / this.zoom) }, getFilmWidth: function() { return this.filmGauge * Math.min(this.aspect, 1) }, getFilmHeight: function() { return this.filmGauge / Math.max(this.aspect, 1) }, setViewOffset: function(t, e, i, n, r, o) { this.aspect = t / e, null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() }, clearViewOffset: function() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() }, updateProjectionMatrix: function() { var t = this.near,
                e = t * Math.tan(.5 * Ue.DEG2RAD * this.fov) / this.zoom,
                i = 2 * e,
                n = this.aspect * i,
                r = -.5 * n,
                o = this.view; if (null !== this.view && this.view.enabled) { var a = o.fullWidth,
                    s = o.fullHeight;
                r += o.offsetX * n / a, e -= o.offsetY * i / s, n *= o.width / a, i *= o.height / s } var h = this.filmOffset;
            0 !== h && (r += t * h / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix) }, toJSON: function(t) { var e = Ci.prototype.toJSON.call(this, t); return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e } }), Kr.prototype = Object.assign(Object.create($r.prototype), { constructor: Kr, isArrayCamera: !0 });
    var Qr, to, eo, io, no, ro, oo = new Ve,
        ao = new Ve;

    function so(t, e, i) { oo.setFromMatrixPosition(e.matrixWorld), ao.setFromMatrixPosition(i.matrixWorld); var n = oo.distanceTo(ao),
            r = e.projectionMatrix.elements,
            o = i.projectionMatrix.elements,
            a = r[14] / (r[10] - 1),
            s = r[14] / (r[10] + 1),
            h = (r[9] + 1) / r[5],
            c = (r[9] - 1) / r[5],
            l = (r[8] - 1) / r[0],
            u = (o[8] + 1) / o[0],
            p = a * l,
            f = a * u,
            d = n / (-l + u),
            m = d * -l;
        e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(d), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.getInverse(t.matrixWorld); var g = a + d,
            v = s + d,
            y = p - m,
            _ = f + (n - m),
            x = h * s / v * g,
            b = c * s / v * g;
        t.projectionMatrix.makePerspective(y, _, x, b, g, v) }

    function ho(t) { var e = this,
            i = null,
            n = null,
            r = null,
            o = [],
            a = new ze,
            s = new ze,
            h = 1,
            c = "stage"; "undefined" != typeof window && "VRFrameData" in window && (n = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", _, !1)); var l = new ze,
            u = new je,
            p = new Ve,
            f = new $r;
        f.bounds = new ti(0, 0, .5, 1), f.layers.enable(1); var d = new $r;
        d.bounds = new ti(.5, 0, .5, 1), d.layers.enable(2); var m, g, v = new Kr([f, d]);

        function y() { return null !== i && !0 === i.isPresenting }

        function _() { if (y()) { var n = i.getEyeParameters("left"),
                    r = n.renderWidth * h,
                    o = n.renderHeight * h;
                g = t.getPixelRatio(), m = t.getSize(), t.setDrawingBufferSize(2 * r, o, 1), w.start() } else e.enabled && t.setDrawingBufferSize(m.width, m.height, g), w.stop() } v.layers.enable(1), v.layers.enable(2); var x = [];

        function b(t) { for (var e = navigator.getGamepads && navigator.getGamepads(), i = 0, n = 0, r = e.length; i < r; i++) { var o = e[i]; if (o && ("Daydream Controller" === o.id || "Gear VR Controller" === o.id || "Oculus Go Controller" === o.id || "OpenVR Gamepad" === o.id || o.id.startsWith("Oculus Touch") || o.id.startsWith("Spatial Controller"))) { if (n === t) return o;
                    n++ } } } this.enabled = !1, this.getController = function(t) { var e = o[t]; return void 0 === e && ((e = new Zr).matrixAutoUpdate = !1, e.visible = !1, o[t] = e), e }, this.getDevice = function() { return i }, this.setDevice = function(t) { void 0 !== t && (i = t), w.setContext(t) }, this.setFramebufferScaleFactor = function(t) { h = t }, this.setFrameOfReferenceType = function(t) { c = t }, this.setPoseTarget = function(t) { void 0 !== t && (r = t) }, this.getCamera = function(t) { var e = "stage" === c ? 1.6 : 0; if (null === i) return t.position.set(0, e, 0), t; if (i.depthNear = t.near, i.depthFar = t.far, i.getFrameData(n), "stage" === c) { var h = i.stageParameters;
                h ? a.fromArray(h.sittingToStandingTransform) : a.makeTranslation(0, e, 0) } var m = n.pose,
                g = null !== r ? r : t; if (g.matrix.copy(a), g.matrix.decompose(g.position, g.quaternion, g.scale), null !== m.orientation && (u.fromArray(m.orientation), g.quaternion.multiply(u)), null !== m.position && (u.setFromRotationMatrix(a), p.fromArray(m.position), p.applyQuaternion(u), g.position.add(p)), g.updateMatrixWorld(), !1 === i.isPresenting) return t;
            f.near = t.near, d.near = t.near, f.far = t.far, d.far = t.far, f.matrixWorldInverse.fromArray(n.leftViewMatrix), d.matrixWorldInverse.fromArray(n.rightViewMatrix), s.getInverse(a), "stage" === c && (f.matrixWorldInverse.multiply(s), d.matrixWorldInverse.multiply(s)); var y = g.parent;
            null !== y && (l.getInverse(y.matrixWorld), f.matrixWorldInverse.multiply(l), d.matrixWorldInverse.multiply(l)), f.matrixWorld.getInverse(f.matrixWorldInverse), d.matrixWorld.getInverse(d.matrixWorldInverse), f.projectionMatrix.fromArray(n.leftProjectionMatrix), d.projectionMatrix.fromArray(n.rightProjectionMatrix), so(v, f, d); var _ = i.getLayers(); if (_.length) { var w = _[0];
                null !== w.leftBounds && 4 === w.leftBounds.length && f.bounds.fromArray(w.leftBounds), null !== w.rightBounds && 4 === w.rightBounds.length && d.bounds.fromArray(w.rightBounds) } return function() { for (var t = 0; t < o.length; t++) { var e = o[t],
                        i = b(t); if (void 0 !== i && void 0 !== i.pose) { if (null === i.pose) return; var n = i.pose;!1 === n.hasPosition && e.position.set(.2, -.6, -.05), null !== n.position && e.position.fromArray(n.position), null !== n.orientation && e.quaternion.fromArray(n.orientation), e.matrix.compose(e.position, e.quaternion, e.scale), e.matrix.premultiply(a), e.matrix.decompose(e.position, e.quaternion, e.scale), e.matrixWorldNeedsUpdate = !0, e.visible = !0; var r = "Daydream Controller" === i.id ? 0 : 1;
                        x[t] !== i.buttons[r].pressed && (x[t] = i.buttons[r].pressed, !0 === x[t] ? e.dispatchEvent({ type: "selectstart" }) : (e.dispatchEvent({ type: "selectend" }), e.dispatchEvent({ type: "select" }))) } else e.visible = !1 } }(), v }, this.getStandingMatrix = function() { return a }, this.isPresenting = y; var w = new _i;
        this.setAnimationLoop = function(t) { w.setAnimationLoop(t) }, this.submitFrame = function() { y() && i.submitFrame() }, this.dispose = function() { "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", _) } }

    function co(t) { var e = t.context,
            i = null,
            n = null,
            r = 1,
            o = null,
            a = "stage",
            s = null,
            h = [],
            c = [];

        function l() { return null !== n && null !== o } var u = new $r;
        u.layers.enable(1), u.viewport = new ti; var p = new $r;
        p.layers.enable(2), p.viewport = new ti; var f = new Kr([u, p]);

        function d(t) { var e = h[c.indexOf(t.inputSource)];
            e && e.dispatchEvent({ type: t.type }) }

        function m() { t.setFramebuffer(null), y.stop() }

        function g(t, e) { null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld) } f.layers.enable(1), f.layers.enable(2), this.enabled = !1, this.getController = function(t) { var e = h[t]; return void 0 === e && ((e = new Zr).matrixAutoUpdate = !1, e.visible = !1, h[t] = e), e }, this.getDevice = function() { return i }, this.setDevice = function(t) { void 0 !== t && (i = t), t instanceof XRDevice && e.setCompatibleXRDevice(t) }, this.setFramebufferScaleFactor = function(t) { r = t }, this.setFrameOfReferenceType = function(t) { a = t }, this.setSession = function(i) { null !== (n = i) && (n.addEventListener("select", d), n.addEventListener("selectstart", d), n.addEventListener("selectend", d), n.addEventListener("end", m), n.baseLayer = new XRWebGLLayer(n, e, { framebufferScaleFactor: r }), n.requestFrameOfReference(a).then(function(e) { o = e, t.setFramebuffer(n.baseLayer.framebuffer), y.setContext(n), y.start() }), c = n.getInputSources(), n.addEventListener("inputsourceschange", function() { c = n.getInputSources(), console.log(c); for (var t = 0; t < h.length; t++) { h[t].userData.inputSource = c[t] } })) }, this.getCamera = function(t) { if (l()) { var e = t.parent,
                    i = f.cameras;
                g(f, e); for (var n = 0; n < i.length; n++) g(i[n], e);
                t.matrixWorld.copy(f.matrixWorld); for (var r = t.children, o = (n = 0, r.length); n < o; n++) r[n].updateMatrixWorld(!0); return so(f, u, p), f } return t }, this.isPresenting = l; var v = null; var y = new _i;
        y.setAnimationLoop(function(t, e) { if (null !== (s = e.getDevicePose(o)))
                for (var i = n.baseLayer, r = e.views, a = 0; a < r.length; a++) { var l = r[a],
                        u = i.getViewport(l),
                        p = s.getViewMatrix(l),
                        d = f.cameras[a];
                    d.matrix.fromArray(p).getInverse(d.matrix), d.projectionMatrix.fromArray(l.projectionMatrix), d.viewport.set(u.x, u.y, u.width, u.height), 0 === a && f.matrix.copy(d.matrix) }
            for (a = 0; a < h.length; a++) { var m = h[a],
                    g = c[a]; if (g) { var y = e.getInputPose(g, o); if (null !== y) { "targetRay" in y ? m.matrix.elements = y.targetRay.transformMatrix : "pointerMatrix" in y && (m.matrix.elements = y.pointerMatrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.visible = !0; continue } } m.visible = !1 } v && v(t) }), this.setAnimationLoop = function(t) { v = t }, this.dispose = function() {}, this.getStandingMatrix = function() { return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4 }, this.submitFrame = function() {} }

    function lo(t) { console.log("THREE.WebGLRenderer", w); var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            i = void 0 !== t.context ? t.context : null,
            n = void 0 !== t.alpha && t.alpha,
            r = void 0 === t.depth || t.depth,
            o = void 0 === t.stencil || t.stencil,
            a = void 0 !== t.antialias && t.antialias,
            s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            h = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            c = void 0 !== t.powerPreference ? t.powerPreference : "default",
            l = null,
            u = null;
        this.domElement = e, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = dt, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4; var p, f, d, m, g, v, y, _, x, b, T, E, S, M, A, L, O, P, R = this,
            I = !1,
            N = null,
            D = null,
            G = null,
            k = -1,
            H = { geometry: null, program: null, wireframe: !1 },
            F = null,
            U = null,
            B = new ti,
            z = new ti,
            j = null,
            V = 0,
            W = e.width,
            X = e.height,
            Y = 1,
            q = new ti(0, 0, W, X),
            Z = new ti(0, 0, W, X),
            J = !1,
            $ = new si,
            K = new bn,
            Q = !1,
            tt = !1,
            et = new ze,
            it = new Ve;

        function nt() { return null === D ? Y : 1 } try { var rt = { alpha: n, depth: r, stencil: o, antialias: a, premultipliedAlpha: s, preserveDrawingBuffer: h, powerPreference: c }; if (e.addEventListener("webglcontextlost", ht, !1), e.addEventListener("webglcontextrestored", ct, !1), null === (p = i || e.getContext("webgl", rt) || e.getContext("experimental-webgl", rt))) throw null !== e.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            void 0 === p.getShaderPrecisionFormat && (p.getShaderPrecisionFormat = function() { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (t) { console.error("THREE.WebGLRenderer: " + t.message) }

        function ot() { f = new wn(p), (d = new xn(p, f, t)).isWebGL2 || (f.get("WEBGL_depth_texture"), f.get("OES_texture_float"), f.get("OES_texture_half_float"), f.get("OES_texture_half_float_linear"), f.get("OES_standard_derivatives"), f.get("OES_element_index_uint"), f.get("ANGLE_instanced_arrays")), f.get("OES_texture_float_linear"), P = new qr(p, f, d), (m = new Xr(p, f, P, d)).scissor(z.copy(Z).multiplyScalar(Y)), m.viewport(B.copy(q).multiplyScalar(Y)), g = new Sn(p), v = new Ir, y = new Yr(p, f, m, v, d, P, g), _ = new xi(p), x = new Tn(p, _, g), b = new Ln(x, g), A = new An(p), T = new Rr(R, f, d), E = new kr, S = new zr, M = new yn(R, m, b, s), L = new _n(p, f, g, d), O = new En(p, f, g, d), g.programs = T.programs, R.context = p, R.capabilities = d, R.extensions = f, R.properties = v, R.renderLists = E, R.state = m, R.info = g } ot(); var at = null; "undefined" != typeof navigator && (at = "xr" in navigator ? new co(R) : new ho(R)), this.vr = at; var st = new Wr(R, b, d.maxTextureSize);

        function ht(t) { t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = !0 }

        function ct() { console.log("THREE.WebGLRenderer: Context Restored."), I = !1, ot() }

        function lt(t) { var e = t.target;
            e.removeEventListener("dispose", lt),
                function(t) { ut(t), v.remove(t) }(e) }

        function ut(t) { var e = v.get(t).program;
            t.program = void 0, void 0 !== e && T.releaseProgram(e) } this.shadowMap = st, this.getContext = function() { return p }, this.getContextAttributes = function() { return p.getContextAttributes() }, this.forceContextLoss = function() { var t = f.get("WEBGL_lose_context");
            t && t.loseContext() }, this.forceContextRestore = function() { var t = f.get("WEBGL_lose_context");
            t && t.restoreContext() }, this.getPixelRatio = function() { return Y }, this.setPixelRatio = function(t) { void 0 !== t && (Y = t, this.setSize(W, X, !1)) }, this.getSize = function() { return { width: W, height: X } }, this.setSize = function(t, i, n) { at.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (W = t, X = i, e.width = t * Y, e.height = i * Y, !1 !== n && (e.style.width = t + "px", e.style.height = i + "px"), this.setViewport(0, 0, t, i)) }, this.getDrawingBufferSize = function() { return { width: W * Y, height: X * Y } }, this.setDrawingBufferSize = function(t, i, n) { W = t, X = i, Y = n, e.width = t * n, e.height = i * n, this.setViewport(0, 0, t, i) }, this.getCurrentViewport = function() { return B }, this.setViewport = function(t, e, i, n) { q.set(t, X - e - n, i, n), m.viewport(B.copy(q).multiplyScalar(Y)) }, this.setScissor = function(t, e, i, n) { Z.set(t, X - e - n, i, n), m.scissor(z.copy(Z).multiplyScalar(Y)) }, this.setScissorTest = function(t) { m.setScissorTest(J = t) }, this.getClearColor = function() { return M.getClearColor() }, this.setClearColor = function() { M.setClearColor.apply(M, arguments) }, this.getClearAlpha = function() { return M.getClearAlpha() }, this.setClearAlpha = function() { M.setClearAlpha.apply(M, arguments) }, this.clear = function(t, e, i) { var n = 0;
            (void 0 === t || t) && (n |= 16384), (void 0 === e || e) && (n |= 256), (void 0 === i || i) && (n |= 1024), p.clear(n) }, this.clearColor = function() { this.clear(!0, !1, !1) }, this.clearDepth = function() { this.clear(!1, !0, !1) }, this.clearStencil = function() { this.clear(!1, !1, !0) }, this.dispose = function() { e.removeEventListener("webglcontextlost", ht, !1), e.removeEventListener("webglcontextrestored", ct, !1), E.dispose(), S.dispose(), v.dispose(), b.dispose(), at.dispose(), mt.stop() }, this.renderBufferImmediate = function(t, e) { m.initAttributes(); var i = v.get(t);
            t.hasPositions && !i.position && (i.position = p.createBuffer()), t.hasNormals && !i.normal && (i.normal = p.createBuffer()), t.hasUvs && !i.uv && (i.uv = p.createBuffer()), t.hasColors && !i.color && (i.color = p.createBuffer()); var n = e.getAttributes();
            t.hasPositions && (p.bindBuffer(34962, i.position), p.bufferData(34962, t.positionArray, 35048), m.enableAttribute(n.position), p.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)), t.hasNormals && (p.bindBuffer(34962, i.normal), p.bufferData(34962, t.normalArray, 35048), m.enableAttribute(n.normal), p.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (p.bindBuffer(34962, i.uv), p.bufferData(34962, t.uvArray, 35048), m.enableAttribute(n.uv), p.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)), t.hasColors && (p.bindBuffer(34962, i.color), p.bufferData(34962, t.colorArray, 35048), m.enableAttribute(n.color), p.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)), m.disableUnusedAttributes(), p.drawArrays(4, 0, t.count), t.count = 0 }, this.renderBufferDirect = function(t, e, i, n, r, o) { var a = r.isMesh && r.normalMatrix.determinant() < 0;
            m.setMaterial(n, a); var s = _t(t, e, n, r),
                h = !1;
            H.geometry === i.id && H.program === s.id && H.wireframe === (!0 === n.wireframe) || (H.geometry = i.id, H.program = s.id, H.wireframe = !0 === n.wireframe, h = !0), r.morphTargetInfluences && (A.update(r, i, n, s), h = !0); var c, l = i.index,
                u = i.attributes.position,
                g = 1;!0 === n.wireframe && (l = x.getWireframeAttribute(i), g = 2); var v = L;
            null !== l && (c = _.get(l), (v = O).setIndex(c)), h && (! function(t, e, i) { if (i && i.isInstancedBufferGeometry & !d.isWebGL2 && null === f.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                m.initAttributes(); var n = i.attributes,
                    r = e.getAttributes(),
                    o = t.defaultAttributeValues; for (var a in r) { var s = r[a]; if (s >= 0) { var h = n[a]; if (void 0 !== h) { var c = h.normalized,
                                l = h.itemSize,
                                u = _.get(h); if (void 0 === u) continue; var g = u.buffer,
                                v = u.type,
                                y = u.bytesPerElement; if (h.isInterleavedBufferAttribute) { var x = h.data,
                                    b = x.stride,
                                    w = h.offset;
                                x && x.isInstancedInterleavedBuffer ? (m.enableAttributeAndDivisor(s, x.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = x.meshPerAttribute * x.count)) : m.enableAttribute(s), p.bindBuffer(34962, g), p.vertexAttribPointer(s, l, v, c, b * y, w * y) } else h.isInstancedBufferAttribute ? (m.enableAttributeAndDivisor(s, h.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = h.meshPerAttribute * h.count)) : m.enableAttribute(s), p.bindBuffer(34962, g), p.vertexAttribPointer(s, l, v, c, 0, 0) } else if (void 0 !== o) { var T = o[a]; if (void 0 !== T) switch (T.length) {
                                case 2:
                                    p.vertexAttrib2fv(s, T); break;
                                case 3:
                                    p.vertexAttrib3fv(s, T); break;
                                case 4:
                                    p.vertexAttrib4fv(s, T); break;
                                default:
                                    p.vertexAttrib1fv(s, T) } } } } m.disableUnusedAttributes() }(n, s, i), null !== l && p.bindBuffer(34963, c.buffer)); var y = 1 / 0;
            null !== l ? y = l.count : void 0 !== u && (y = u.count); var b = i.drawRange.start * g,
                w = i.drawRange.count * g,
                T = null !== o ? o.start * g : 0,
                E = null !== o ? o.count * g : 1 / 0,
                S = Math.max(b, T),
                M = Math.min(y, b + w, T + E) - 1,
                C = Math.max(0, M - S + 1); if (0 !== C) { if (r.isMesh)
                    if (!0 === n.wireframe) m.setLineWidth(n.wireframeLinewidth * nt()), v.setMode(1);
                    else switch (r.drawMode) {
                        case Me:
                            v.setMode(4); break;
                        case Ae:
                            v.setMode(5); break;
                        case Le:
                            v.setMode(6) } else if (r.isLine) { var P = n.linewidth;
                        void 0 === P && (P = 1), m.setLineWidth(P * nt()), r.isLineSegments ? v.setMode(1) : r.isLineLoop ? v.setMode(2) : v.setMode(3) } else r.isPoints ? v.setMode(0) : r.isSprite && v.setMode(4);
                i && i.isInstancedBufferGeometry ? i.maxInstancedCount > 0 && v.renderInstances(i, S, C) : v.render(S, C) } }, this.compile = function(t, e) {
            (u = S.get(t, e)).init(), t.traverse(function(t) { t.isLight && (u.pushLight(t), t.castShadow && u.pushShadow(t)) }), u.setupLights(e), t.traverse(function(e) { if (e.material)
                    if (Array.isArray(e.material))
                        for (var i = 0; i < e.material.length; i++) yt(e.material[i], t.fog, e);
                    else yt(e.material, t.fog, e) }) }; var pt = null; var ft, mt = new _i;

        function gt(t, e, i, n) { for (var r = 0, o = t.length; r < o; r++) { var a = t[r],
                    s = a.object,
                    h = a.geometry,
                    c = void 0 === n ? a.material : n,
                    l = a.group; if (i.isArrayCamera) { U = i; for (var p = i.cameras, f = 0, d = p.length; f < d; f++) { var g = p[f]; if (s.layers.test(g.layers)) { if ("viewport" in g) m.viewport(B.copy(g.viewport));
                            else { var v = g.bounds,
                                    y = v.x * W,
                                    _ = v.y * X,
                                    x = v.z * W,
                                    b = v.w * X;
                                m.viewport(B.set(y, _, x, b).multiplyScalar(Y)) } u.setupLights(g), vt(s, e, g, h, c, l) } } } else U = null, vt(s, e, i, h, c, l) } }

        function vt(t, e, i, n, r, o) { if (t.onBeforeRender(R, e, i, n, r, o), u = S.get(e, U || i), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) { m.setMaterial(r); var a = _t(i, e.fog, r, t);
                H.geometry = null, H.program = null, H.wireframe = !1,
                    function(t, e) { t.render(function(t) { R.renderBufferImmediate(t, e) }) }(t, a) } else R.renderBufferDirect(i, e.fog, n, r, t, o);
            t.onAfterRender(R, e, i, n, r, o), u = S.get(e, U || i) }

        function yt(t, e, i) { var n = v.get(t),
                r = u.state.lights,
                o = u.state.shadowsArray,
                a = n.lightsHash,
                s = r.state.hash,
                h = T.getParameters(t, r.state, o, e, K.numPlanes, K.numIntersection, i),
                c = T.getProgramCode(t, h),
                l = n.program,
                p = !0; if (void 0 === l) t.addEventListener("dispose", lt);
            else if (l.code !== c) ut(t);
            else if (a.stateID !== s.stateID || a.directionalLength !== s.directionalLength || a.pointLength !== s.pointLength || a.spotLength !== s.spotLength || a.rectAreaLength !== s.rectAreaLength || a.hemiLength !== s.hemiLength || a.shadowsLength !== s.shadowsLength) a.stateID = s.stateID, a.directionalLength = s.directionalLength, a.pointLength = s.pointLength, a.spotLength = s.spotLength, a.rectAreaLength = s.rectAreaLength, a.hemiLength = s.hemiLength, a.shadowsLength = s.shadowsLength, p = !1;
            else { if (void 0 !== h.shaderID) return;
                p = !1 } if (p) { if (h.shaderID) { var f = yi[h.shaderID];
                    n.shader = { name: t.type, uniforms: ci(f.uniforms), vertexShader: f.vertexShader, fragmentShader: f.fragmentShader } } else n.shader = { name: t.type, uniforms: t.uniforms, vertexShader: t.vertexShader, fragmentShader: t.fragmentShader };
                t.onBeforeCompile(n.shader, R), c = T.getProgramCode(t, h), l = T.acquireProgram(t, n.shader, h, c), n.program = l, t.program = l } var d = l.getAttributes(); if (t.morphTargets) { t.numSupportedMorphTargets = 0; for (var m = 0; m < R.maxMorphTargets; m++) d["morphTarget" + m] >= 0 && t.numSupportedMorphTargets++ } if (t.morphNormals) { t.numSupportedMorphNormals = 0; for (m = 0; m < R.maxMorphNormals; m++) d["morphNormal" + m] >= 0 && t.numSupportedMorphNormals++ } var g = n.shader.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = K.numPlanes, n.numIntersection = K.numIntersection, g.clippingPlanes = K.uniform), n.fog = e, void 0 === a && (n.lightsHash = a = {}), a.stateID = s.stateID, a.directionalLength = s.directionalLength, a.pointLength = s.pointLength, a.spotLength = s.spotLength, a.rectAreaLength = s.rectAreaLength, a.hemiLength = s.hemiLength, a.shadowsLength = s.shadowsLength, t.lights && (g.ambientLightColor.value = r.state.ambient, g.directionalLights.value = r.state.directional, g.spotLights.value = r.state.spot, g.rectAreaLights.value = r.state.rectArea, g.pointLights.value = r.state.point, g.hemisphereLights.value = r.state.hemi, g.directionalShadowMap.value = r.state.directionalShadowMap, g.directionalShadowMatrix.value = r.state.directionalShadowMatrix, g.spotShadowMap.value = r.state.spotShadowMap, g.spotShadowMatrix.value = r.state.spotShadowMatrix, g.pointShadowMap.value = r.state.pointShadowMap, g.pointShadowMatrix.value = r.state.pointShadowMatrix); var y = n.program.getUniforms(),
                _ = xr.seqWithValue(y.seq, g);
            n.uniformsList = _ }

        function _t(t, e, i, n) { V = 0; var r = v.get(i),
                o = u.state.lights,
                a = r.lightsHash,
                s = o.state.hash; if (Q && (tt || t !== F)) { var h = t === F && i.id === k;
                K.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, h) }!1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : (!i.lights || a.stateID === s.stateID && a.directionalLength === s.directionalLength && a.pointLength === s.pointLength && a.spotLength === s.spotLength && a.rectAreaLength === s.rectAreaLength && a.hemiLength === s.hemiLength && a.shadowsLength === s.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === K.numPlanes && r.numIntersection === K.numIntersection) || (i.needsUpdate = !0)), i.needsUpdate && (yt(i, e, n), i.needsUpdate = !1); var c, l, f = !1,
                g = !1,
                y = !1,
                _ = r.program,
                x = _.getUniforms(),
                b = r.shader.uniforms; if (m.useProgram(_.program) && (f = !0, g = !0, y = !0), i.id !== k && (k = i.id, g = !0), f || F !== t) { if (x.setValue(p, "projectionMatrix", t.projectionMatrix), d.logarithmicDepthBuffer && x.setValue(p, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), F !== t && (F = t, g = !0, y = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) { var w = x.map.cameraPosition;
                    void 0 !== w && w.setValue(p, it.setFromMatrixPosition(t.matrixWorld)) }(i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && x.setValue(p, "viewMatrix", t.matrixWorldInverse) } if (i.skinning) { x.setOptional(p, n, "bindMatrix"), x.setOptional(p, n, "bindMatrixInverse"); var T = n.skeleton; if (T) { var E = T.bones; if (d.floatVertexTextures) { if (void 0 === T.boneTexture) { var S = Math.sqrt(4 * E.length);
                            S = Ue.ceilPowerOfTwo(S), S = Math.max(S, 4); var M = new Float32Array(S * S * 4);
                            M.set(T.boneMatrices); var A = new ni(M, S, S, Zt, Bt);
                            A.needsUpdate = !0, T.boneMatrices = M, T.boneTexture = A, T.boneTextureSize = S } x.setValue(p, "boneTexture", T.boneTexture), x.setValue(p, "boneTextureSize", T.boneTextureSize) } else x.setOptional(p, T, "boneMatrices") } } return g && (x.setValue(p, "toneMappingExposure", R.toneMappingExposure), x.setValue(p, "toneMappingWhitePoint", R.toneMappingWhitePoint), i.lights && (l = y, (c = b).ambientLightColor.needsUpdate = l, c.directionalLights.needsUpdate = l, c.pointLights.needsUpdate = l, c.spotLights.needsUpdate = l, c.rectAreaLights.needsUpdate = l, c.hemisphereLights.needsUpdate = l), e && i.fog && function(t, e) { t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density) }(b, e), i.isMeshBasicMaterial ? xt(b, i) : i.isMeshLambertMaterial ? (xt(b, i), function(t, e) { e.emissiveMap && (t.emissiveMap.value = e.emissiveMap) }(b, i)) : i.isMeshPhongMaterial ? (xt(b, i), i.isMeshToonMaterial ? function(t, e) { bt(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap) }(b, i) : bt(b, i)) : i.isMeshStandardMaterial ? (xt(b, i), i.isMeshPhysicalMaterial ? function(t, e) { wt(t, e), t.reflectivity.value = e.reflectivity, t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness }(b, i) : wt(b, i)) : i.isMeshMatcapMaterial ? (xt(b, i), function(t, e) { e.matcap && (t.matcap.value = e.matcap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === C && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === C && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias) }(b, i)) : i.isMeshDepthMaterial ? (xt(b, i), function(t, e) { e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias) }(b, i)) : i.isMeshDistanceMaterial ? (xt(b, i), function(t, e) { e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance }(b, i)) : i.isMeshNormalMaterial ? (xt(b, i), function(t, e) { e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === C && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === C && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias) }(b, i)) : i.isLineBasicMaterial ? (function(t, e) { t.diffuse.value = e.color, t.opacity.value = e.opacity }(b, i), i.isLineDashedMaterial && function(t, e) { t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale }(b, i)) : i.isPointsMaterial ? function(t, e) { t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * Y, t.scale.value = .5 * X, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix)) }(b, i) : i.isSpriteMaterial ? function(t, e) { t.diffuse.value = e.color, t.opacity.value = e.opacity, t.rotation.value = e.rotation, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix)) }(b, i) : i.isShadowMaterial && (b.color.value = i.color, b.opacity.value = i.opacity), void 0 !== b.ltc_1 && (b.ltc_1.value = vi.LTC_1), void 0 !== b.ltc_2 && (b.ltc_2.value = vi.LTC_2), xr.upload(p, r.uniformsList, b, R)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (xr.upload(p, r.uniformsList, b, R), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && x.setValue(p, "center", n.center), x.setValue(p, "modelViewMatrix", n.modelViewMatrix), x.setValue(p, "normalMatrix", n.normalMatrix), x.setValue(p, "modelMatrix", n.matrixWorld), _ }

        function xt(t, e) { var i;
            t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = v.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix)) }

        function bt(t, e) { t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === C && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === C && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias) }

        function wt(t, e) { t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === C && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === C && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity) } mt.setAnimationLoop(function(t) { at.isPresenting() || pt && pt(t) }), "undefined" != typeof window && mt.setContext(window), this.setAnimationLoop = function(t) { pt = t, at.setAnimationLoop(t), mt.start() }, this.render = function(t, e, i, n) { if (e && e.isCamera) { if (!I) { H.geometry = null, H.program = null, H.wireframe = !1, k = -1, F = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), at.enabled && (e = at.getCamera(e)), (u = S.get(t, e)).init(), t.onBeforeRender(R, t, e, i), et.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), $.setFromMatrix(et), tt = this.localClippingEnabled, Q = K.init(this.clippingPlanes, tt, e), (l = E.get(t, e)).init(),
                        function t(e, i, n) { if (!1 === e.visible) return; var r = e.layers.test(i.layers); if (r)
                                if (e.isLight) u.pushLight(e), e.castShadow && u.pushShadow(e);
                                else if (e.isSprite) { if (!e.frustumCulled || $.intersectsSprite(e)) { n && it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(et); var o = b.update(e),
                                        a = e.material;
                                    l.push(e, o, a, it.z, null) } } else if (e.isImmediateRenderObject) n && it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(et), l.push(e, null, e.material, it.z, null);
                            else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || $.intersectsObject(e))) { n && it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(et); var o = b.update(e),
                                    a = e.material; if (Array.isArray(a))
                                    for (var s = o.groups, h = 0, c = s.length; h < c; h++) { var p = s[h],
                                            f = a[p.materialIndex];
                                        f && f.visible && l.push(e, o, f, it.z, p) } else a.visible && l.push(e, o, a, it.z, null) } var d = e.children; for (var h = 0, c = d.length; h < c; h++) t(d[h], i, n) }(t, e, R.sortObjects), !0 === R.sortObjects && l.sort(), Q && K.beginShadows(); var r = u.state.shadowsArray;
                    st.render(r, t, e), u.setupLights(e), Q && K.endShadows(), this.info.autoReset && this.info.reset(), void 0 === i && (i = null), this.setRenderTarget(i), M.render(l, t, e, n); var o = l.opaque,
                        a = l.transparent; if (t.overrideMaterial) { var s = t.overrideMaterial;
                        o.length && gt(o, t, e, s), a.length && gt(a, t, e, s) } else o.length && gt(o, t, e), a.length && gt(a, t, e);
                    i && y.updateRenderTargetMipmap(i), m.buffers.depth.setTest(!0), m.buffers.depth.setMask(!0), m.buffers.color.setMask(!0), m.setPolygonOffset(!1), t.onAfterRender(R, t, e), at.enabled && at.submitFrame(), l = null, u = null } } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.") }, this.allocTextureUnit = function() { var t = V; return t >= d.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + d.maxTextures), V += 1, t }, this.setTexture2D = (ft = !1, function(t, e) { t && t.isWebGLRenderTarget && (ft || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), ft = !0), t = t.texture), y.setTexture2D(t, e) }), this.setTexture3D = function(t, e) { y.setTexture3D(t, e) }, this.setTexture = function() { var t = !1; return function(e, i) { t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), y.setTexture2D(e, i) } }(), this.setTextureCube = function() { var t = !1; return function(e, i) { e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? y.setTextureCube(e, i) : y.setTextureCubeDynamic(e, i) } }(), this.setFramebuffer = function(t) { N = t }, this.getRenderTarget = function() { return D }, this.setRenderTarget = function(t) { D = t, t && void 0 === v.get(t).__webglFramebuffer && y.setupRenderTarget(t); var e = N,
                i = !1; if (t) { var n = v.get(t).__webglFramebuffer;
                t.isWebGLRenderTargetCube ? (e = n[t.activeCubeFace], i = !0) : e = n, B.copy(t.viewport), z.copy(t.scissor), j = t.scissorTest } else B.copy(q).multiplyScalar(Y), z.copy(Z).multiplyScalar(Y), j = J; if (G !== e && (p.bindFramebuffer(36160, e), G = e), m.viewport(B), m.scissor(z), m.setScissorTest(j), i) { var r = v.get(t.texture);
                p.framebufferTexture2D(36160, 36064, 34069 + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel) } }, this.readRenderTargetPixels = function(t, e, i, n, r, o) { if (t && t.isWebGLRenderTarget) { var a = v.get(t).__webglFramebuffer; if (a) { var s = !1;
                    a !== G && (p.bindFramebuffer(36160, a), s = !0); try { var h = t.texture,
                            c = h.format,
                            l = h.type; if (c !== Zt && P.convert(c) !== p.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); if (!(l === Dt || P.convert(l) === p.getParameter(35738) || l === Bt && (d.isWebGL2 || f.get("OES_texture_float") || f.get("WEBGL_color_buffer_float")) || l === zt && (d.isWebGL2 ? f.get("EXT_color_buffer_float") : f.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        36053 === p.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && p.readPixels(e, i, n, r, P.convert(c), P.convert(l), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") } finally { s && p.bindFramebuffer(36160, G) } } } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.") }, this.copyFramebufferToTexture = function(t, e, i) { var n = e.image.width,
                r = e.image.height,
                o = P.convert(e.format);
            this.setTexture2D(e, 0), p.copyTexImage2D(3553, i || 0, o, t.x, t.y, n, r, 0) }, this.copyTextureToTexture = function(t, e, i, n) { var r = e.image.width,
                o = e.image.height,
                a = P.convert(i.format),
                s = P.convert(i.type);
            this.setTexture2D(i, 0), e.isDataTexture ? p.texSubImage2D(3553, n || 0, t.x, t.y, r, o, a, s, e.image.data) : p.texSubImage2D(3553, n || 0, t.x, t.y, a, s, e.image) } }

    function uo(t, e) { this.name = "", this.color = new mi(t), this.density = void 0 !== e ? e : 25e-5 }

    function po(t, e, i) { this.name = "", this.color = new mi(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3 }

    function fo() { Ci.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0 }

    function mo(t, e) { this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = { offset: 0, count: -1 }, this.version = 0 }

    function go(t, e, i, n) { this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n }

    function vo(t) { pn.call(this), this.type = "SpriteMaterial", this.color = new mi(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.lights = !1, this.transparent = !0, this.setValues(t) }

    function yo(t) { if (Ci.call(this), this.type = "Sprite", void 0 === Qr) { Qr = new Yi; var e = new mo(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
            Qr.setIndex([0, 1, 2, 0, 2, 3]), Qr.addAttribute("position", new go(e, 3, 0, !1)), Qr.addAttribute("uv", new go(e, 2, 3, !1)) } this.geometry = Qr, this.material = void 0 !== t ? t : new vo, this.center = new Be(.5, .5) }

    function _o() { Ci.call(this), this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }) }

    function xo(t, e) { t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), vn.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ze, this.bindMatrixInverse = new ze }

    function bo(t, e) { if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else { console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = []; for (var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new ze) } }

    function wo() { Ci.call(this), this.type = "Bone" }

    function To(t) { pn.call(this), this.type = "LineBasicMaterial", this.color = new mi(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t) }

    function Eo(t, e, i) { 1 === i && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), Ci.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new Yi, this.material = void 0 !== e ? e : new To({ color: 16777215 * Math.random() }) }

    function So(t, e) { Eo.call(this, t, e), this.type = "LineSegments" }

    function Mo(t, e) { Eo.call(this, t, e), this.type = "LineLoop" }

    function Ao(t) { pn.call(this), this.type = "PointsMaterial", this.color = new mi(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(t) }

    function Lo(t, e) { Ci.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new Yi, this.material = void 0 !== e ? e : new Ao({ color: 16777215 * Math.random() }) }

    function Co(t, e, i, n, r, o, a, s, h) { Qe.call(this, t, e, i, n, r, o, a, s, h), this.format = void 0 !== a ? a : qt, this.minFilter = void 0 !== o ? o : Rt, this.magFilter = void 0 !== r ? r : Rt, this.generateMipmaps = !1 }

    function Oo(t, e, i, n, r, o, a, s, h, c, l, u) { Qe.call(this, null, o, a, s, h, c, n, r, l, u), this.image = { width: e, height: i }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1 }

    function Po(t, e, i, n, r, o, a, s, h) { Qe.call(this, t, e, i, n, r, o, a, s, h), this.needsUpdate = !0 }

    function Ro(t, e, i, n, r, o, a, s, h, c) { if ((c = void 0 !== c ? c : Kt) !== Kt && c !== Qt) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === i && c === Kt && (i = Ht), void 0 === i && c === Qt && (i = Xt), Qe.call(this, null, n, r, o, a, s, c, i, h), this.image = { width: t, height: e }, this.magFilter = void 0 !== a ? a : Ct, this.minFilter = void 0 !== s ? s : Ct, this.flipY = !1, this.generateMipmaps = !1 }

    function Io(t) { Yi.call(this), this.type = "WireframeGeometry"; var e, i, n, r, o, a, s, h, c, l, u = [],
            p = [0, 0],
            f = {},
            d = ["a", "b", "c"]; if (t && t.isGeometry) { var m = t.faces; for (e = 0, n = m.length; e < n; e++) { var g = m[e]; for (i = 0; i < 3; i++) s = g[d[i]], h = g[d[(i + 1) % 3]], p[0] = Math.min(s, h), p[1] = Math.max(s, h), void 0 === f[c = p[0] + "," + p[1]] && (f[c] = { index1: p[0], index2: p[1] }) } for (c in f) a = f[c], l = t.vertices[a.index1], u.push(l.x, l.y, l.z), l = t.vertices[a.index2], u.push(l.x, l.y, l.z) } else if (t && t.isBufferGeometry) { var v, y, _, x, b, w, T; if (l = new Ve, null !== t.index) { for (v = t.attributes.position, y = t.index, 0 === (_ = t.groups).length && (_ = [{ start: 0, count: y.count, materialIndex: 0 }]), r = 0, o = _.length; r < o; ++r)
                    for (e = b = (x = _[r]).start, n = b + x.count; e < n; e += 3)
                        for (i = 0; i < 3; i++) s = y.getX(e + i), h = y.getX(e + (i + 1) % 3), p[0] = Math.min(s, h), p[1] = Math.max(s, h), void 0 === f[c = p[0] + "," + p[1]] && (f[c] = { index1: p[0], index2: p[1] }); for (c in f) a = f[c], l.fromBufferAttribute(v, a.index1), u.push(l.x, l.y, l.z), l.fromBufferAttribute(v, a.index2), u.push(l.x, l.y, l.z) } else
                for (e = 0, n = (v = t.attributes.position).count / 3; e < n; e++)
                    for (i = 0; i < 3; i++) w = 3 * e + i, l.fromBufferAttribute(v, w), u.push(l.x, l.y, l.z), T = 3 * e + (i + 1) % 3, l.fromBufferAttribute(v, T), u.push(l.x, l.y, l.z) } this.addAttribute("position", new zi(u, 3)) }

    function No(t, e, i) { Ii.call(this), this.type = "ParametricGeometry", this.parameters = { func: t, slices: e, stacks: i }, this.fromBufferGeometry(new Do(t, e, i)), this.mergeVertices() }

    function Do(t, e, i) { Yi.call(this), this.type = "ParametricBufferGeometry", this.parameters = { func: t, slices: e, stacks: i }; var n, r, o = [],
            a = [],
            s = [],
            h = [],
            c = new Ve,
            l = new Ve,
            u = new Ve,
            p = new Ve,
            f = new Ve;
        t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter."); var d = e + 1; for (n = 0; n <= i; n++) { var m = n / i; for (r = 0; r <= e; r++) { var g = r / e;
                t(g, m, l), a.push(l.x, l.y, l.z), g - 1e-5 >= 0 ? (t(g - 1e-5, m, u), p.subVectors(l, u)) : (t(g + 1e-5, m, u), p.subVectors(u, l)), m - 1e-5 >= 0 ? (t(g, m - 1e-5, u), f.subVectors(l, u)) : (t(g, m + 1e-5, u), f.subVectors(u, l)), c.crossVectors(p, f).normalize(), s.push(c.x, c.y, c.z), h.push(g, m) } } for (n = 0; n < i; n++)
            for (r = 0; r < e; r++) { var v = n * d + r,
                    y = n * d + r + 1,
                    _ = (n + 1) * d + r + 1,
                    x = (n + 1) * d + r;
                o.push(v, y, x), o.push(y, _, x) } this.setIndex(o), this.addAttribute("position", new zi(a, 3)), this.addAttribute("normal", new zi(s, 3)), this.addAttribute("uv", new zi(h, 2)) }

    function Go(t, e, i, n) { Ii.call(this), this.type = "PolyhedronGeometry", this.parameters = { vertices: t, indices: e, radius: i, detail: n }, this.fromBufferGeometry(new ko(t, e, i, n)), this.mergeVertices() }

    function ko(t, e, i, n) { Yi.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = { vertices: t, indices: e, radius: i, detail: n }, i = i || 1; var r = [],
            o = [];

        function a(t, e, i, n) { var r, o, a = Math.pow(2, n),
                h = []; for (r = 0; r <= a; r++) { h[r] = []; var c = t.clone().lerp(i, r / a),
                    l = e.clone().lerp(i, r / a),
                    u = a - r; for (o = 0; o <= u; o++) h[r][o] = 0 === o && r === a ? c : c.clone().lerp(l, o / u) } for (r = 0; r < a; r++)
                for (o = 0; o < 2 * (a - r) - 1; o++) { var p = Math.floor(o / 2);
                    o % 2 == 0 ? (s(h[r][p + 1]), s(h[r + 1][p]), s(h[r][p])) : (s(h[r][p + 1]), s(h[r + 1][p + 1]), s(h[r + 1][p])) } }

        function s(t) { r.push(t.x, t.y, t.z) }

        function h(e, i) { var n = 3 * e;
            i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2] }

        function c(t, e, i, n) { n < 0 && 1 === t.x && (o[e] = t.x - 1), 0 === i.x && 0 === i.z && (o[e] = n / 2 / Math.PI + .5) }

        function l(t) { return Math.atan2(t.z, -t.x) }! function(t) { for (var i = new Ve, n = new Ve, r = new Ve, o = 0; o < e.length; o += 3) h(e[o + 0], i), h(e[o + 1], n), h(e[o + 2], r), a(i, n, r, t) }(n = n || 0),
        function(t) { for (var e = new Ve, i = 0; i < r.length; i += 3) e.x = r[i + 0], e.y = r[i + 1], e.z = r[i + 2], e.normalize().multiplyScalar(t), r[i + 0] = e.x, r[i + 1] = e.y, r[i + 2] = e.z }(i),
        function() { for (var t = new Ve, e = 0; e < r.length; e += 3) { t.x = r[e + 0], t.y = r[e + 1], t.z = r[e + 2]; var i = l(t) / 2 / Math.PI + .5,
                    n = (a = t, Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5);
                o.push(i, 1 - n) } var a;
            (function() { for (var t = new Ve, e = new Ve, i = new Ve, n = new Ve, a = new Be, s = new Be, h = new Be, u = 0, p = 0; u < r.length; u += 9, p += 6) { t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), i.set(r[u + 6], r[u + 7], r[u + 8]), a.set(o[p + 0], o[p + 1]), s.set(o[p + 2], o[p + 3]), h.set(o[p + 4], o[p + 5]), n.copy(t).add(e).add(i).divideScalar(3); var f = l(n);
                    c(a, p + 0, t, f), c(s, p + 2, e, f), c(h, p + 4, i, f) } })(),
            function() { for (var t = 0; t < o.length; t += 6) { var e = o[t + 0],
                        i = o[t + 2],
                        n = o[t + 4],
                        r = Math.max(e, i, n),
                        a = Math.min(e, i, n);
                    r > .9 && a < .1 && (e < .2 && (o[t + 0] += 1), i < .2 && (o[t + 2] += 1), n < .2 && (o[t + 4] += 1)) } }() }(), this.addAttribute("position", new zi(r, 3)), this.addAttribute("normal", new zi(r.slice(), 3)), this.addAttribute("uv", new zi(o, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals() }

    function Ho(t, e) { Ii.call(this), this.type = "TetrahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new Fo(t, e)), this.mergeVertices() }

    function Fo(t, e) { ko.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

    function Uo(t, e) { Ii.call(this), this.type = "OctahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new Bo(t, e)), this.mergeVertices() }

    function Bo(t, e) { ko.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

    function zo(t, e) { Ii.call(this), this.type = "IcosahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new jo(t, e)), this.mergeVertices() }

    function jo(t, e) { var i = (1 + Math.sqrt(5)) / 2,
            n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
        ko.call(this, n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

    function Vo(t, e) { Ii.call(this), this.type = "DodecahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new Wo(t, e)), this.mergeVertices() }

    function Wo(t, e) { var i = (1 + Math.sqrt(5)) / 2,
            n = 1 / i,
            r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n];
        ko.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

    function Xo(t, e, i, n, r, o) { Ii.call(this), this.type = "TubeGeometry", this.parameters = { path: t, tubularSegments: e, radius: i, radialSegments: n, closed: r }, void 0 !== o && console.warn("THREE.TubeGeometry: taper has been removed."); var a = new Yo(t, e, i, n, r);
        this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals, this.fromBufferGeometry(a), this.mergeVertices() }

    function Yo(t, e, i, n, r) { Yi.call(this), this.type = "TubeBufferGeometry", this.parameters = { path: t, tubularSegments: e, radius: i, radialSegments: n, closed: r }, e = e || 64, i = i || 1, n = n || 8, r = r || !1; var o = t.computeFrenetFrames(e, r);
        this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals; var a, s, h = new Ve,
            c = new Ve,
            l = new Be,
            u = new Ve,
            p = [],
            f = [],
            d = [],
            m = [];

        function g(r) { u = t.getPointAt(r / e, u); var a = o.normals[r],
                l = o.binormals[r]; for (s = 0; s <= n; s++) { var d = s / n * Math.PI * 2,
                    m = Math.sin(d),
                    g = -Math.cos(d);
                c.x = g * a.x + m * l.x, c.y = g * a.y + m * l.y, c.z = g * a.z + m * l.z, c.normalize(), f.push(c.x, c.y, c.z), h.x = u.x + i * c.x, h.y = u.y + i * c.y, h.z = u.z + i * c.z, p.push(h.x, h.y, h.z) } }! function() { for (a = 0; a < e; a++) g(a);
            g(!1 === r ? e : 0),
                function() { for (a = 0; a <= e; a++)
                        for (s = 0; s <= n; s++) l.x = a / e, l.y = s / n, d.push(l.x, l.y) }(),
                function() { for (s = 1; s <= e; s++)
                        for (a = 1; a <= n; a++) { var t = (n + 1) * (s - 1) + (a - 1),
                                i = (n + 1) * s + (a - 1),
                                r = (n + 1) * s + a,
                                o = (n + 1) * (s - 1) + a;
                            m.push(t, i, o), m.push(i, r, o) } }() }(), this.setIndex(m), this.addAttribute("position", new zi(p, 3)), this.addAttribute("normal", new zi(f, 3)), this.addAttribute("uv", new zi(d, 2)) }

    function qo(t, e, i, n, r, o, a) { Ii.call(this), this.type = "TorusKnotGeometry", this.parameters = { radius: t, tube: e, tubularSegments: i, radialSegments: n, p: r, q: o }, void 0 !== a && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Zo(t, e, i, n, r, o)), this.mergeVertices() }

    function Zo(t, e, i, n, r, o) { Yi.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = { radius: t, tube: e, tubularSegments: i, radialSegments: n, p: r, q: o }, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, o = o || 3; var a, s, h = [],
            c = [],
            l = [],
            u = [],
            p = new Ve,
            f = new Ve,
            d = new Ve,
            m = new Ve,
            g = new Ve,
            v = new Ve,
            y = new Ve; for (a = 0; a <= i; ++a) { var _ = a / i * r * Math.PI * 2; for (A(_, r, o, t, d), A(_ + .01, r, o, t, m), v.subVectors(m, d), y.addVectors(m, d), g.crossVectors(v, y), y.crossVectors(g, v), g.normalize(), y.normalize(), s = 0; s <= n; ++s) { var x = s / n * Math.PI * 2,
                    b = -e * Math.cos(x),
                    w = e * Math.sin(x);
                p.x = d.x + (b * y.x + w * g.x), p.y = d.y + (b * y.y + w * g.y), p.z = d.z + (b * y.z + w * g.z), c.push(p.x, p.y, p.z), f.subVectors(p, d).normalize(), l.push(f.x, f.y, f.z), u.push(a / i), u.push(s / n) } } for (s = 1; s <= i; s++)
            for (a = 1; a <= n; a++) { var T = (n + 1) * (s - 1) + (a - 1),
                    E = (n + 1) * s + (a - 1),
                    S = (n + 1) * s + a,
                    M = (n + 1) * (s - 1) + a;
                h.push(T, E, M), h.push(E, S, M) }

        function A(t, e, i, n, r) { var o = Math.cos(t),
                a = Math.sin(t),
                s = i / e * t,
                h = Math.cos(s);
            r.x = n * (2 + h) * .5 * o, r.y = n * (2 + h) * a * .5, r.z = n * Math.sin(s) * .5 } this.setIndex(h), this.addAttribute("position", new zi(c, 3)), this.addAttribute("normal", new zi(l, 3)), this.addAttribute("uv", new zi(u, 2)) }

    function Jo(t, e, i, n, r) { Ii.call(this), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: i, tubularSegments: n, arc: r }, this.fromBufferGeometry(new $o(t, e, i, n, r)), this.mergeVertices() }

    function $o(t, e, i, n, r) { Yi.call(this), this.type = "TorusBufferGeometry", this.parameters = { radius: t, tube: e, radialSegments: i, tubularSegments: n, arc: r }, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI; var o, a, s = [],
            h = [],
            c = [],
            l = [],
            u = new Ve,
            p = new Ve,
            f = new Ve; for (o = 0; o <= i; o++)
            for (a = 0; a <= n; a++) { var d = a / n * r,
                    m = o / i * Math.PI * 2;
                p.x = (t + e * Math.cos(m)) * Math.cos(d), p.y = (t + e * Math.cos(m)) * Math.sin(d), p.z = e * Math.sin(m), h.push(p.x, p.y, p.z), u.x = t * Math.cos(d), u.y = t * Math.sin(d), f.subVectors(p, u).normalize(), c.push(f.x, f.y, f.z), l.push(a / n), l.push(o / i) }
        for (o = 1; o <= i; o++)
            for (a = 1; a <= n; a++) { var g = (n + 1) * o + a - 1,
                    v = (n + 1) * (o - 1) + a - 1,
                    y = (n + 1) * (o - 1) + a,
                    _ = (n + 1) * o + a;
                s.push(g, v, _), s.push(v, y, _) } this.setIndex(s), this.addAttribute("position", new zi(h, 3)), this.addAttribute("normal", new zi(c, 3)), this.addAttribute("uv", new zi(l, 2)) } uo.prototype.isFogExp2 = !0, uo.prototype.clone = function() { return new uo(this.color, this.density) }, uo.prototype.toJSON = function() { return { type: "FogExp2", color: this.color.getHex(), density: this.density } }, po.prototype.isFog = !0, po.prototype.clone = function() { return new po(this.color, this.near, this.far) }, po.prototype.toJSON = function() { return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far } }, fo.prototype = Object.assign(Object.create(Ci.prototype), { constructor: fo, copy: function(t, e) { return Ci.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this }, toJSON: function(t) { var e = Ci.prototype.toJSON.call(this, t); return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e } }), Object.defineProperty(mo.prototype, "needsUpdate", { set: function(t) {!0 === t && this.version++ } }), Object.assign(mo.prototype, { isInterleavedBuffer: !0, onUploadCallback: function() {}, setArray: function(t) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this }, setDynamic: function(t) { return this.dynamic = t, this }, copy: function(t) { return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this }, copyAt: function(t, e, i) { t *= this.stride, i *= e.stride; for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n]; return this }, set: function(t, e) { return void 0 === e && (e = 0), this.array.set(t, e), this }, clone: function() { return (new this.constructor).copy(this) }, onUpload: function(t) { return this.onUploadCallback = t, this } }), Object.defineProperties(go.prototype, { count: { get: function() { return this.data.count } }, array: { get: function() { return this.data.array } } }), Object.assign(go.prototype, { isInterleavedBufferAttribute: !0, setX: function(t, e) { return this.data.array[t * this.data.stride + this.offset] = e, this }, setY: function(t, e) { return this.data.array[t * this.data.stride + this.offset + 1] = e, this }, setZ: function(t, e) { return this.data.array[t * this.data.stride + this.offset + 2] = e, this }, setW: function(t, e) { return this.data.array[t * this.data.stride + this.offset + 3] = e, this }, getX: function(t) { return this.data.array[t * this.data.stride + this.offset] }, getY: function(t) { return this.data.array[t * this.data.stride + this.offset + 1] }, getZ: function(t) { return this.data.array[t * this.data.stride + this.offset + 2] }, getW: function(t) { return this.data.array[t * this.data.stride + this.offset + 3] }, setXY: function(t, e, i) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this }, setXYZ: function(t, e, i, n) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this }, setXYZW: function(t, e, i, n, r) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this } }), vo.prototype = Object.create(pn.prototype), vo.prototype.constructor = vo, vo.prototype.isSpriteMaterial = !0, vo.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this }, yo.prototype = Object.assign(Object.create(Ci.prototype), { constructor: yo, isSprite: !0, raycast: function() { var t = new Ve,
                e = new Ve,
                i = new Ve,
                n = new Be,
                r = new Be,
                o = new ze,
                a = new Ve,
                s = new Ve,
                h = new Ve,
                c = new Be,
                l = new Be,
                u = new Be;

            function p(t, e, i, a, s, h) { n.subVectors(t, i).addScalar(.5).multiply(a), void 0 !== s ? (r.x = h * n.x - s * n.y, r.y = s * n.x + h * n.y) : r.copy(n), t.copy(e), t.x += r.x, t.y += r.y, t.applyMatrix4(o) } return function(n, r) { e.setFromMatrixScale(this.matrixWorld), o.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), i.setFromMatrixPosition(this.modelViewMatrix); var f, d, m = this.material.rotation;
                0 !== m && (d = Math.cos(m), f = Math.sin(m)); var g = this.center;
                p(a.set(-.5, -.5, 0), i, g, e, f, d), p(s.set(.5, -.5, 0), i, g, e, f, d), p(h.set(.5, .5, 0), i, g, e, f, d), c.set(0, 0), l.set(1, 0), u.set(1, 1); var v = n.ray.intersectTriangle(a, s, h, !1, t); if (null !== v || (p(s.set(-.5, .5, 0), i, g, e, f, d), l.set(0, 1), null !== (v = n.ray.intersectTriangle(a, h, s, !1, t)))) { var y = n.ray.origin.distanceTo(t);
                    y < n.near || y > n.far || r.push({ distance: y, point: t.clone(), uv: mn.getUV(t, a, s, h, c, l, u, new Be), face: null, object: this }) } } }(), clone: function() { return new this.constructor(this.material).copy(this) }, copy: function(t) { return Ci.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this } }), _o.prototype = Object.assign(Object.create(Ci.prototype), { constructor: _o, copy: function(t) { Ci.prototype.copy.call(this, t, !1); for (var e = t.levels, i = 0, n = e.length; i < n; i++) { var r = e[i];
                this.addLevel(r.object.clone(), r.distance) } return this }, addLevel: function(t, e) { void 0 === e && (e = 0), e = Math.abs(e); for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
            i.splice(n, 0, { distance: e, object: t }), this.add(t) }, getObjectForDistance: function(t) { for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++); return e[i - 1].object }, raycast: (to = new Ve, function(t, e) { to.setFromMatrixPosition(this.matrixWorld); var i = t.ray.origin.distanceTo(to);
            this.getObjectForDistance(i).raycast(t, e) }), update: function() { var t = new Ve,
                e = new Ve; return function(i) { var n = this.levels; if (n.length > 1) { t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this.matrixWorld); var r = t.distanceTo(e);
                    n[0].object.visible = !0; for (var o = 1, a = n.length; o < a && r >= n[o].distance; o++) n[o - 1].object.visible = !1, n[o].object.visible = !0; for (; o < a; o++) n[o].object.visible = !1 } } }(), toJSON: function(t) { var e = Ci.prototype.toJSON.call(this, t);
            e.object.levels = []; for (var i = this.levels, n = 0, r = i.length; n < r; n++) { var o = i[n];
                e.object.levels.push({ object: o.object.uuid, distance: o.distance }) } return e } }), xo.prototype = Object.assign(Object.create(vn.prototype), { constructor: xo, isSkinnedMesh: !0, bind: function(t, e) { this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e) }, pose: function() { this.skeleton.pose() }, normalizeSkinWeights: function() { for (var t = new ti, e = this.geometry.attributes.skinWeight, i = 0, n = e.count; i < n; i++) { t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.w = e.getW(i); var r = 1 / t.manhattanLength();
                r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w) } }, updateMatrixWorld: function(t) { vn.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) }, clone: function() { return new this.constructor(this.geometry, this.material).copy(this) } }), Object.assign(bo.prototype, { calculateInverses: function() { this.boneInverses = []; for (var t = 0, e = this.bones.length; t < e; t++) { var i = new ze;
                this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i) } }, pose: function() { var t, e, i; for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]); for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale)) }, update: (eo = new ze, io = new ze, function() { for (var t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, o = t.length; r < o; r++) { var a = t[r] ? t[r].matrixWorld : io;
                eo.multiplyMatrices(a, e[r]), eo.toArray(i, 16 * r) } void 0 !== n && (n.needsUpdate = !0) }), clone: function() { return new bo(this.bones, this.boneInverses) }, getBoneByName: function(t) { for (var e = 0, i = this.bones.length; e < i; e++) { var n = this.bones[e]; if (n.name === t) return n } } }), wo.prototype = Object.assign(Object.create(Ci.prototype), { constructor: wo, isBone: !0 }), To.prototype = Object.create(pn.prototype), To.prototype.constructor = To, To.prototype.isLineBasicMaterial = !0, To.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this }, Eo.prototype = Object.assign(Object.create(Ci.prototype), { constructor: Eo, isLine: !0, computeLineDistances: (no = new Ve, ro = new Ve, function() { var t = this.geometry; if (t.isBufferGeometry)
                if (null === t.index) { for (var e = t.attributes.position, i = [0], n = 1, r = e.count; n < r; n++) no.fromBufferAttribute(e, n - 1), ro.fromBufferAttribute(e, n), i[n] = i[n - 1], i[n] += no.distanceTo(ro);
                    t.addAttribute("lineDistance", new zi(i, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (t.isGeometry) { var o = t.vertices; for ((i = t.lineDistances)[0] = 0, n = 1, r = o.length; n < r; n++) i[n] = i[n - 1], i[n] += o[n - 1].distanceTo(o[n]) } return this }), raycast: function() { var t = new ze,
                e = new dn,
                i = new oi; return function(n, r) { var o = n.linePrecision,
                    a = this.geometry,
                    s = this.matrixWorld; if (null === a.boundingSphere && a.computeBoundingSphere(), i.copy(a.boundingSphere), i.applyMatrix4(s), i.radius += o, !1 !== n.ray.intersectsSphere(i)) { t.getInverse(s), e.copy(n.ray).applyMatrix4(t); var h = o / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        c = h * h,
                        l = new Ve,
                        u = new Ve,
                        p = new Ve,
                        f = new Ve,
                        d = this && this.isLineSegments ? 2 : 1; if (a.isBufferGeometry) { var m = a.index,
                            g = a.attributes.position.array; if (null !== m)
                            for (var v = m.array, y = 0, _ = v.length - 1; y < _; y += d) { var x = v[y],
                                    b = v[y + 1]; if (l.fromArray(g, 3 * x), u.fromArray(g, 3 * b), !(e.distanceSqToSegment(l, u, f, p) > c)) f.applyMatrix4(this.matrixWorld), (E = n.ray.origin.distanceTo(f)) < n.near || E > n.far || r.push({ distance: E, point: p.clone().applyMatrix4(this.matrixWorld), index: y, face: null, faceIndex: null, object: this }) } else
                                for (y = 0, _ = g.length / 3 - 1; y < _; y += d) { if (l.fromArray(g, 3 * y), u.fromArray(g, 3 * y + 3), !(e.distanceSqToSegment(l, u, f, p) > c)) f.applyMatrix4(this.matrixWorld), (E = n.ray.origin.distanceTo(f)) < n.near || E > n.far || r.push({ distance: E, point: p.clone().applyMatrix4(this.matrixWorld), index: y, face: null, faceIndex: null, object: this }) } } else if (a.isGeometry) { var w = a.vertices,
                            T = w.length; for (y = 0; y < T - 1; y += d) { var E; if (!(e.distanceSqToSegment(w[y], w[y + 1], f, p) > c)) f.applyMatrix4(this.matrixWorld), (E = n.ray.origin.distanceTo(f)) < n.near || E > n.far || r.push({ distance: E, point: p.clone().applyMatrix4(this.matrixWorld), index: y, face: null, faceIndex: null, object: this }) } } } } }(), copy: function(t) { return Ci.prototype.copy.call(this, t), this.geometry.copy(t.geometry), this.material.copy(t.material), this }, clone: function() { return (new this.constructor).copy(this) } }), So.prototype = Object.assign(Object.create(Eo.prototype), { constructor: So, isLineSegments: !0, computeLineDistances: function() { var t = new Ve,
                e = new Ve; return function() { var i = this.geometry; if (i.isBufferGeometry)
                    if (null === i.index) { for (var n = i.attributes.position, r = [], o = 0, a = n.count; o < a; o += 2) t.fromBufferAttribute(n, o), e.fromBufferAttribute(n, o + 1), r[o] = 0 === o ? 0 : r[o - 1], r[o + 1] = r[o] + t.distanceTo(e);
                        i.addAttribute("lineDistance", new zi(r, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else if (i.isGeometry) { var s = i.vertices; for (r = i.lineDistances, o = 0, a = s.length; o < a; o += 2) t.copy(s[o]), e.copy(s[o + 1]), r[o] = 0 === o ? 0 : r[o - 1], r[o + 1] = r[o] + t.distanceTo(e) } return this } }() }), Mo.prototype = Object.assign(Object.create(Eo.prototype), { constructor: Mo, isLineLoop: !0 }), Ao.prototype = Object.create(pn.prototype), Ao.prototype.constructor = Ao, Ao.prototype.isPointsMaterial = !0, Ao.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this }, Lo.prototype = Object.assign(Object.create(Ci.prototype), { constructor: Lo, isPoints: !0, raycast: function() { var t = new ze,
                e = new dn,
                i = new oi; return function(n, r) { var o = this,
                    a = this.geometry,
                    s = this.matrixWorld,
                    h = n.params.Points.threshold; if (null === a.boundingSphere && a.computeBoundingSphere(), i.copy(a.boundingSphere), i.applyMatrix4(s), i.radius += h, !1 !== n.ray.intersectsSphere(i)) { t.getInverse(s), e.copy(n.ray).applyMatrix4(t); var c = h / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        l = c * c,
                        u = new Ve,
                        p = new Ve; if (a.isBufferGeometry) { var f = a.index,
                            d = a.attributes.position.array; if (null !== f)
                            for (var m = f.array, g = 0, v = m.length; g < v; g++) { var y = m[g];
                                u.fromArray(d, 3 * y), b(u, y) } else { g = 0; for (var _ = d.length / 3; g < _; g++) u.fromArray(d, 3 * g), b(u, g) } } else { var x = a.vertices; for (g = 0, _ = x.length; g < _; g++) b(x[g], g) } }

                function b(t, i) { var a = e.distanceSqToPoint(t); if (a < l) { e.closestPointToPoint(t, p), p.applyMatrix4(s); var h = n.ray.origin.distanceTo(p); if (h < n.near || h > n.far) return;
                        r.push({ distance: h, distanceToRay: Math.sqrt(a), point: p.clone(), index: i, face: null, object: o }) } } } }(), clone: function() { return new this.constructor(this.geometry, this.material).copy(this) } }), Co.prototype = Object.assign(Object.create(Qe.prototype), { constructor: Co, isVideoTexture: !0, update: function() { var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0) } }), Oo.prototype = Object.create(Qe.prototype), Oo.prototype.constructor = Oo, Oo.prototype.isCompressedTexture = !0, Po.prototype = Object.create(Qe.prototype), Po.prototype.constructor = Po, Po.prototype.isCanvasTexture = !0, Ro.prototype = Object.create(Qe.prototype), Ro.prototype.constructor = Ro, Ro.prototype.isDepthTexture = !0, Io.prototype = Object.create(Yi.prototype), Io.prototype.constructor = Io, No.prototype = Object.create(Ii.prototype), No.prototype.constructor = No, Do.prototype = Object.create(Yi.prototype), Do.prototype.constructor = Do, Go.prototype = Object.create(Ii.prototype), Go.prototype.constructor = Go, ko.prototype = Object.create(Yi.prototype), ko.prototype.constructor = ko, Ho.prototype = Object.create(Ii.prototype), Ho.prototype.constructor = Ho, Fo.prototype = Object.create(ko.prototype), Fo.prototype.constructor = Fo, Uo.prototype = Object.create(Ii.prototype), Uo.prototype.constructor = Uo, Bo.prototype = Object.create(ko.prototype), Bo.prototype.constructor = Bo, zo.prototype = Object.create(Ii.prototype), zo.prototype.constructor = zo, jo.prototype = Object.create(ko.prototype), jo.prototype.constructor = jo, Vo.prototype = Object.create(Ii.prototype), Vo.prototype.constructor = Vo, Wo.prototype = Object.create(ko.prototype), Wo.prototype.constructor = Wo, Xo.prototype = Object.create(Ii.prototype), Xo.prototype.constructor = Xo, Yo.prototype = Object.create(Yi.prototype), Yo.prototype.constructor = Yo, qo.prototype = Object.create(Ii.prototype), qo.prototype.constructor = qo, Zo.prototype = Object.create(Yi.prototype), Zo.prototype.constructor = Zo, Jo.prototype = Object.create(Ii.prototype), Jo.prototype.constructor = Jo, $o.prototype = Object.create(Yi.prototype), $o.prototype.constructor = $o;
    var Ko = function(t, e, i) { i = i || 2; var n, r, o, a, s, h, c, l = e && e.length,
            u = l ? e[0] * i : t.length,
            p = Qo(t, 0, u, i, !0),
            f = []; if (!p) return f; if (l && (p = function(t, e, i, n) { var r, o, a, s, h, c = []; for (r = 0, o = e.length; r < o; r++) a = e[r] * n, s = r < o - 1 ? e[r + 1] * n : t.length, (h = Qo(t, a, s, n, !1)) === h.next && (h.steiner = !0), c.push(ca(h)); for (c.sort(aa), r = 0; r < c.length; r++) sa(c[r], i), i = ta(i, i.next); return i }(t, e, p, i)), t.length > 80 * i) { n = o = t[0], r = a = t[1]; for (var d = i; d < u; d += i)(s = t[d]) < n && (n = s), (h = t[d + 1]) < r && (r = h), s > o && (o = s), h > a && (a = h);
            c = 0 !== (c = Math.max(o - n, a - r)) ? 1 / c : 0 } return ea(p, f, i, n, r, c), f };

    function Qo(t, e, i, n, r) { var o, a; if (r === function(t, e, i, n) { for (var r = 0, o = e, a = i - n; o < i; o += n) r += (t[a] - t[o]) * (t[o + 1] + t[a + 1]), a = o; return r }(t, e, i, n) > 0)
            for (o = e; o < i; o += n) a = va(o, t[o], t[o + 1], a);
        else
            for (o = i - n; o >= e; o -= n) a = va(o, t[o], t[o + 1], a); return a && fa(a, a.next) && (ya(a), a = a.next), a }

    function ta(t, e) { if (!t) return t;
        e || (e = t); var i, n = t;
        do { if (i = !1, n.steiner || !fa(n, n.next) && 0 !== pa(n.prev, n, n.next)) n = n.next;
            else { if (ya(n), (n = e = n.prev) === n.next) break;
                i = !0 } } while (i || n !== e); return e }

    function ea(t, e, i, n, r, o, a) { if (t) {!a && o && function(t, e, i, n) { var r = t;
                do { null === r.z && (r.z = ha(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next } while (r !== t);
                r.prevZ.nextZ = null, r.prevZ = null,
                    function(t) { var e, i, n, r, o, a, s, h, c = 1;
                        do { for (i = t, t = null, o = null, a = 0; i;) { for (a++, n = i, s = 0, e = 0; e < c && (s++, n = n.nextZ); e++); for (h = c; s > 0 || h > 0 && n;) 0 !== s && (0 === h || !n || i.z <= n.z) ? (r = i, i = i.nextZ, s--) : (r = n, n = n.nextZ, h--), o ? o.nextZ = r : t = r, r.prevZ = o, o = r;
                                i = n } o.nextZ = null, c *= 2 } while (a > 1) }(r) }(t, n, r, o); for (var s, h, c = t; t.prev !== t.next;)
                if (s = t.prev, h = t.next, o ? na(t, n, r, o) : ia(t)) e.push(s.i / i), e.push(t.i / i), e.push(h.i / i), ya(t), t = h.next, c = h.next;
                else if ((t = h) === c) { a ? 1 === a ? ea(t = ra(t, e, i), e, i, n, r, o, 2) : 2 === a && oa(t, e, i, n, r, o) : ea(ta(t), e, i, n, r, o, 1); break } } }

    function ia(t) { var e = t.prev,
            i = t,
            n = t.next; if (pa(e, i, n) >= 0) return !1; for (var r = t.next.next; r !== t.prev;) { if (la(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && pa(r.prev, r, r.next) >= 0) return !1;
            r = r.next } return !0 }

    function na(t, e, i, n) { var r = t.prev,
            o = t,
            a = t.next; if (pa(r, o, a) >= 0) return !1; for (var s = r.x < o.x ? r.x < a.x ? r.x : a.x : o.x < a.x ? o.x : a.x, h = r.y < o.y ? r.y < a.y ? r.y : a.y : o.y < a.y ? o.y : a.y, c = r.x > o.x ? r.x > a.x ? r.x : a.x : o.x > a.x ? o.x : a.x, l = r.y > o.y ? r.y > a.y ? r.y : a.y : o.y > a.y ? o.y : a.y, u = ha(s, h, e, i, n), p = ha(c, l, e, i, n), f = t.nextZ; f && f.z <= p;) { if (f !== t.prev && f !== t.next && la(r.x, r.y, o.x, o.y, a.x, a.y, f.x, f.y) && pa(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ } for (f = t.prevZ; f && f.z >= u;) { if (f !== t.prev && f !== t.next && la(r.x, r.y, o.x, o.y, a.x, a.y, f.x, f.y) && pa(f.prev, f, f.next) >= 0) return !1;
            f = f.prevZ } return !0 }

    function ra(t, e, i) { var n = t;
        do { var r = n.prev,
                o = n.next.next;!fa(r, o) && da(r, n, n.next, o) && ma(r, o) && ma(o, r) && (e.push(r.i / i), e.push(n.i / i), e.push(o.i / i), ya(n), ya(n.next), n = t = o), n = n.next } while (n !== t); return n }

    function oa(t, e, i, n, r, o) { var a = t;
        do { for (var s = a.next.next; s !== a.prev;) { if (a.i !== s.i && ua(a, s)) { var h = ga(a, s); return a = ta(a, a.next), h = ta(h, h.next), ea(a, e, i, n, r, o), void ea(h, e, i, n, r, o) } s = s.next } a = a.next } while (a !== t) }

    function aa(t, e) { return t.x - e.x }

    function sa(t, e) { if (e = function(t, e) { var i, n = e,
                    r = t.x,
                    o = t.y,
                    a = -1 / 0;
                do { if (o <= n.y && o >= n.next.y && n.next.y !== n.y) { var s = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y); if (s <= r && s > a) { if (a = s, s === r) { if (o === n.y) return n; if (o === n.next.y) return n.next } i = n.x < n.next.x ? n : n.next } } n = n.next } while (n !== e); if (!i) return null; if (r === a) return i.prev; var h, c = i,
                    l = i.x,
                    u = i.y,
                    p = 1 / 0;
                n = i.next; for (; n !== c;) r >= n.x && n.x >= l && r !== n.x && la(o < u ? r : a, o, l, u, o < u ? a : r, o, n.x, n.y) && ((h = Math.abs(o - n.y) / (r - n.x)) < p || h === p && n.x > i.x) && ma(n, t) && (i = n, p = h), n = n.next; return i }(t, e)) { var i = ga(e, t);
            ta(i, i.next) } }

    function ha(t, e, i, n, r) { return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1 }

    function ca(t) { var e = t,
            i = t;
        do { e.x < i.x && (i = e), e = e.next } while (e !== t); return i }

    function la(t, e, i, n, r, o, a, s) { return (r - a) * (e - s) - (t - a) * (o - s) >= 0 && (t - a) * (n - s) - (i - a) * (e - s) >= 0 && (i - a) * (o - s) - (r - a) * (n - s) >= 0 }

    function ua(t, e) { return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) { var i = t;
            do { if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && da(i, i.next, t, e)) return !0;
                i = i.next } while (i !== t); return !1 }(t, e) && ma(t, e) && ma(e, t) && function(t, e) { var i = t,
                n = !1,
                r = (t.x + e.x) / 2,
                o = (t.y + e.y) / 2;
            do { i.y > o != i.next.y > o && i.next.y !== i.y && r < (i.next.x - i.x) * (o - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next } while (i !== t); return n }(t, e) }

    function pa(t, e, i) { return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y) }

    function fa(t, e) { return t.x === e.x && t.y === e.y }

    function da(t, e, i, n) { return !!(fa(t, e) && fa(i, n) || fa(t, n) && fa(i, e)) || pa(t, e, i) > 0 != pa(t, e, n) > 0 && pa(i, n, t) > 0 != pa(i, n, e) > 0 }

    function ma(t, e) { return pa(t.prev, t, t.next) < 0 ? pa(t, e, t.next) >= 0 && pa(t, t.prev, e) >= 0 : pa(t, e, t.prev) < 0 || pa(t, t.next, e) < 0 }

    function ga(t, e) { var i = new _a(t.i, t.x, t.y),
            n = new _a(e.i, e.x, e.y),
            r = t.next,
            o = e.prev; return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, o.next = n, n.prev = o, n }

    function va(t, e, i, n) { var r = new _a(t, e, i); return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r }

    function ya(t) { t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ) }

    function _a(t, e, i) { this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1 }
    var xa = { area: function(t) { for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y; return .5 * i }, isClockWise: function(t) { return xa.area(t) < 0 }, triangulateShape: function(t, e) { var i = [],
                n = [],
                r = [];
            ba(t), wa(i, t); var o = t.length;
            e.forEach(ba); for (var a = 0; a < e.length; a++) n.push(o), o += e[a].length, wa(i, e[a]); var s = Ko(i, n); for (a = 0; a < s.length; a += 3) r.push(s.slice(a, a + 3)); return r } };

    function ba(t) { var e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop() }

    function wa(t, e) { for (var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y) }

    function Ta(t, e) { Ii.call(this), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, this.fromBufferGeometry(new Ea(t, e)), this.mergeVertices() }

    function Ea(t, e) { Yi.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t]; for (var i = this, n = [], r = [], o = 0, a = t.length; o < a; o++) { s(t[o]) }

        function s(t) { var o = [],
                a = void 0 !== e.curveSegments ? e.curveSegments : 12,
                s = void 0 !== e.steps ? e.steps : 1,
                h = void 0 !== e.depth ? e.depth : 100,
                c = void 0 === e.bevelEnabled || e.bevelEnabled,
                l = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                u = void 0 !== e.bevelSize ? e.bevelSize : l - 2,
                p = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
                f = e.extrudePath,
                d = void 0 !== e.UVGenerator ? e.UVGenerator : Sa;
            void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), h = e.amount); var m, g, v, y, _, x, b, w, T = !1;
            f && (m = f.getSpacedPoints(s), T = !0, c = !1, g = f.computeFrenetFrames(s, !1), v = new Ve, y = new Ve, _ = new Ve), c || (p = 0, l = 0, u = 0); var E = t.extractPoints(a),
                S = E.shape,
                M = E.holes; if (!xa.isClockWise(S))
                for (S = S.reverse(), b = 0, w = M.length; b < w; b++) x = M[b], xa.isClockWise(x) && (M[b] = x.reverse()); var A = xa.triangulateShape(S, M),
                L = S; for (b = 0, w = M.length; b < w; b++) x = M[b], S = S.concat(x);

            function C(t, e, i) { return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t) } var O, P, R, I, N, D, G = S.length,
                k = A.length;

            function H(t, e, i) { var n, r, o, a = t.x - e.x,
                    s = t.y - e.y,
                    h = i.x - t.x,
                    c = i.y - t.y,
                    l = a * a + s * s,
                    u = a * c - s * h; if (Math.abs(u) > Number.EPSILON) { var p = Math.sqrt(l),
                        f = Math.sqrt(h * h + c * c),
                        d = e.x - s / p,
                        m = e.y + a / p,
                        g = ((i.x - c / f - d) * c - (i.y + h / f - m) * h) / (a * c - s * h),
                        v = (n = d + a * g - t.x) * n + (r = m + s * g - t.y) * r; if (v <= 2) return new Be(n, r);
                    o = Math.sqrt(v / 2) } else { var y = !1;
                    a > Number.EPSILON ? h > Number.EPSILON && (y = !0) : a < -Number.EPSILON ? h < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(c) && (y = !0), y ? (n = -s, r = a, o = Math.sqrt(l)) : (n = a, r = s, o = Math.sqrt(l / 2)) } return new Be(n / o, r / o) } for (var F = [], U = 0, B = L.length, z = B - 1, j = U + 1; U < B; U++, z++, j++) z === B && (z = 0), j === B && (j = 0), F[U] = H(L[U], L[z], L[j]); var V, W, X = [],
                Y = F.concat(); for (b = 0, w = M.length; b < w; b++) { for (x = M[b], V = [], U = 0, z = (B = x.length) - 1, j = U + 1; U < B; U++, z++, j++) z === B && (z = 0), j === B && (j = 0), V[U] = H(x[U], x[z], x[j]);
                X.push(V), Y = Y.concat(V) } for (O = 0; O < p; O++) { for (R = O / p, I = l * Math.cos(R * Math.PI / 2), P = u * Math.sin(R * Math.PI / 2), U = 0, B = L.length; U < B; U++) Z((N = C(L[U], F[U], P)).x, N.y, -I); for (b = 0, w = M.length; b < w; b++)
                    for (x = M[b], V = X[b], U = 0, B = x.length; U < B; U++) Z((N = C(x[U], V[U], P)).x, N.y, -I) } for (P = u, U = 0; U < G; U++) N = c ? C(S[U], Y[U], P) : S[U], T ? (y.copy(g.normals[0]).multiplyScalar(N.x), v.copy(g.binormals[0]).multiplyScalar(N.y), _.copy(m[0]).add(y).add(v), Z(_.x, _.y, _.z)) : Z(N.x, N.y, 0); for (W = 1; W <= s; W++)
                for (U = 0; U < G; U++) N = c ? C(S[U], Y[U], P) : S[U], T ? (y.copy(g.normals[W]).multiplyScalar(N.x), v.copy(g.binormals[W]).multiplyScalar(N.y), _.copy(m[W]).add(y).add(v), Z(_.x, _.y, _.z)) : Z(N.x, N.y, h / s * W); for (O = p - 1; O >= 0; O--) { for (R = O / p, I = l * Math.cos(R * Math.PI / 2), P = u * Math.sin(R * Math.PI / 2), U = 0, B = L.length; U < B; U++) Z((N = C(L[U], F[U], P)).x, N.y, h + I); for (b = 0, w = M.length; b < w; b++)
                    for (x = M[b], V = X[b], U = 0, B = x.length; U < B; U++) N = C(x[U], V[U], P), T ? Z(N.x, N.y + m[s - 1].y, m[s - 1].x + I) : Z(N.x, N.y, h + I) }

            function q(t, e) { var i, n; for (U = t.length; --U >= 0;) { i = U, (n = U - 1) < 0 && (n = t.length - 1); var r = 0,
                        o = s + 2 * p; for (r = 0; r < o; r++) { var a = G * r,
                            h = G * (r + 1);
                        $(e + i + a, e + n + a, e + n + h, e + i + h) } } }

            function Z(t, e, i) { o.push(t), o.push(e), o.push(i) }

            function J(t, e, r) { K(t), K(e), K(r); var o = n.length / 3,
                    a = d.generateTopUV(i, n, o - 3, o - 2, o - 1);
                Q(a[0]), Q(a[1]), Q(a[2]) }

            function $(t, e, r, o) { K(t), K(e), K(o), K(e), K(r), K(o); var a = n.length / 3,
                    s = d.generateSideWallUV(i, n, a - 6, a - 3, a - 2, a - 1);
                Q(s[0]), Q(s[1]), Q(s[3]), Q(s[1]), Q(s[2]), Q(s[3]) }

            function K(t) { n.push(o[3 * t + 0]), n.push(o[3 * t + 1]), n.push(o[3 * t + 2]) }

            function Q(t) { r.push(t.x), r.push(t.y) }! function() { var t = n.length / 3; if (c) { var e = 0,
                        r = G * e; for (U = 0; U < k; U++) J((D = A[U])[2] + r, D[1] + r, D[0] + r); for (r = G * (e = s + 2 * p), U = 0; U < k; U++) J((D = A[U])[0] + r, D[1] + r, D[2] + r) } else { for (U = 0; U < k; U++) J((D = A[U])[2], D[1], D[0]); for (U = 0; U < k; U++) J((D = A[U])[0] + G * s, D[1] + G * s, D[2] + G * s) } i.addGroup(t, n.length / 3 - t, 0) }(),
            function() { var t = n.length / 3,
                    e = 0; for (q(L, e), e += L.length, b = 0, w = M.length; b < w; b++) q(x = M[b], e), e += x.length;
                i.addGroup(t, n.length / 3 - t, 1) }() } this.addAttribute("position", new zi(n, 3)), this.addAttribute("uv", new zi(r, 2)), this.computeVertexNormals() } Ta.prototype = Object.create(Ii.prototype), Ta.prototype.constructor = Ta, Ta.prototype.toJSON = function() { var t = Ii.prototype.toJSON.call(this); return Ma(this.parameters.shapes, this.parameters.options, t) }, Ea.prototype = Object.create(Yi.prototype), Ea.prototype.constructor = Ea, Ea.prototype.toJSON = function() { var t = Yi.prototype.toJSON.call(this); return Ma(this.parameters.shapes, this.parameters.options, t) };
    var Sa = { generateTopUV: function(t, e, i, n, r) { var o = e[3 * i],
                a = e[3 * i + 1],
                s = e[3 * n],
                h = e[3 * n + 1],
                c = e[3 * r],
                l = e[3 * r + 1]; return [new Be(o, a), new Be(s, h), new Be(c, l)] }, generateSideWallUV: function(t, e, i, n, r, o) { var a = e[3 * i],
                s = e[3 * i + 1],
                h = e[3 * i + 2],
                c = e[3 * n],
                l = e[3 * n + 1],
                u = e[3 * n + 2],
                p = e[3 * r],
                f = e[3 * r + 1],
                d = e[3 * r + 2],
                m = e[3 * o],
                g = e[3 * o + 1],
                v = e[3 * o + 2]; return Math.abs(s - l) < .01 ? [new Be(a, 1 - h), new Be(c, 1 - u), new Be(p, 1 - d), new Be(m, 1 - v)] : [new Be(s, 1 - h), new Be(l, 1 - u), new Be(f, 1 - d), new Be(g, 1 - v)] } };

    function Ma(t, e, i) { if (i.shapes = [], Array.isArray(t))
            for (var n = 0, r = t.length; n < r; n++) { var o = t[n];
                i.shapes.push(o.uuid) } else i.shapes.push(t.uuid); return void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()), i }

    function Aa(t, e) { Ii.call(this), this.type = "TextGeometry", this.parameters = { text: t, parameters: e }, this.fromBufferGeometry(new La(t, e)), this.mergeVertices() }

    function La(t, e) { var i = (e = e || {}).font; if (!i || !i.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new Ii; var n = i.generateShapes(t, e.size);
        e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), Ea.call(this, n, e), this.type = "TextBufferGeometry" }

    function Ca(t, e, i, n, r, o, a) { Ii.call(this), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: i, phiStart: n, phiLength: r, thetaStart: o, thetaLength: a }, this.fromBufferGeometry(new Oa(t, e, i, n, r, o, a)), this.mergeVertices() }

    function Oa(t, e, i, n, r, o, a) { Yi.call(this), this.type = "SphereBufferGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: i, phiStart: n, phiLength: r, thetaStart: o, thetaLength: a }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI; var s, h, c = (o = void 0 !== o ? o : 0) + (a = void 0 !== a ? a : Math.PI),
            l = 0,
            u = [],
            p = new Ve,
            f = new Ve,
            d = [],
            m = [],
            g = [],
            v = []; for (h = 0; h <= i; h++) { var y = [],
                _ = h / i; for (s = 0; s <= e; s++) { var x = s / e;
                p.x = -t * Math.cos(n + x * r) * Math.sin(o + _ * a), p.y = t * Math.cos(o + _ * a), p.z = t * Math.sin(n + x * r) * Math.sin(o + _ * a), m.push(p.x, p.y, p.z), f.set(p.x, p.y, p.z).normalize(), g.push(f.x, f.y, f.z), v.push(x, 1 - _), y.push(l++) } u.push(y) } for (h = 0; h < i; h++)
            for (s = 0; s < e; s++) { var b = u[h][s + 1],
                    w = u[h][s],
                    T = u[h + 1][s],
                    E = u[h + 1][s + 1];
                (0 !== h || o > 0) && d.push(b, w, E), (h !== i - 1 || c < Math.PI) && d.push(w, T, E) } this.setIndex(d), this.addAttribute("position", new zi(m, 3)), this.addAttribute("normal", new zi(g, 3)), this.addAttribute("uv", new zi(v, 2)) }

    function Pa(t, e, i, n, r, o) { Ii.call(this), this.type = "RingGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: i, phiSegments: n, thetaStart: r, thetaLength: o }, this.fromBufferGeometry(new Ra(t, e, i, n, r, o)), this.mergeVertices() }

    function Ra(t, e, i, n, r, o) { Yi.call(this), this.type = "RingBufferGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: i, phiSegments: n, thetaStart: r, thetaLength: o }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, o = void 0 !== o ? o : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8; var a, s, h, c = [],
            l = [],
            u = [],
            p = [],
            f = t,
            d = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1),
            m = new Ve,
            g = new Be; for (s = 0; s <= n; s++) { for (h = 0; h <= i; h++) a = r + h / i * o, m.x = f * Math.cos(a), m.y = f * Math.sin(a), l.push(m.x, m.y, m.z), u.push(0, 0, 1), g.x = (m.x / e + 1) / 2, g.y = (m.y / e + 1) / 2, p.push(g.x, g.y);
            f += d } for (s = 0; s < n; s++) { var v = s * (i + 1); for (h = 0; h < i; h++) { var y = a = h + v,
                    _ = a + i + 1,
                    x = a + i + 2,
                    b = a + 1;
                c.push(y, _, b), c.push(_, x, b) } } this.setIndex(c), this.addAttribute("position", new zi(l, 3)), this.addAttribute("normal", new zi(u, 3)), this.addAttribute("uv", new zi(p, 2)) }

    function Ia(t, e, i, n) { Ii.call(this), this.type = "LatheGeometry", this.parameters = { points: t, segments: e, phiStart: i, phiLength: n }, this.fromBufferGeometry(new Na(t, e, i, n)), this.mergeVertices() }

    function Na(t, e, i, n) { Yi.call(this), this.type = "LatheBufferGeometry", this.parameters = { points: t, segments: e, phiStart: i, phiLength: n }, e = Math.floor(e) || 12, i = i || 0, n = n || 2 * Math.PI, n = Ue.clamp(n, 0, 2 * Math.PI); var r, o, a, s = [],
            h = [],
            c = [],
            l = 1 / e,
            u = new Ve,
            p = new Be; for (o = 0; o <= e; o++) { var f = i + o * l * n,
                d = Math.sin(f),
                m = Math.cos(f); for (a = 0; a <= t.length - 1; a++) u.x = t[a].x * d, u.y = t[a].y, u.z = t[a].x * m, h.push(u.x, u.y, u.z), p.x = o / e, p.y = a / (t.length - 1), c.push(p.x, p.y) } for (o = 0; o < e; o++)
            for (a = 0; a < t.length - 1; a++) { var g = r = a + o * t.length,
                    v = r + t.length,
                    y = r + t.length + 1,
                    _ = r + 1;
                s.push(g, v, _), s.push(v, y, _) }
        if (this.setIndex(s), this.addAttribute("position", new zi(h, 3)), this.addAttribute("uv", new zi(c, 2)), this.computeVertexNormals(), n === 2 * Math.PI) { var x = this.attributes.normal.array,
                b = new Ve,
                w = new Ve,
                T = new Ve; for (r = e * t.length * 3, o = 0, a = 0; o < t.length; o++, a += 3) b.x = x[a + 0], b.y = x[a + 1], b.z = x[a + 2], w.x = x[r + a + 0], w.y = x[r + a + 1], w.z = x[r + a + 2], T.addVectors(b, w).normalize(), x[a + 0] = x[r + a + 0] = T.x, x[a + 1] = x[r + a + 1] = T.y, x[a + 2] = x[r + a + 2] = T.z } }

    function Da(t, e) { Ii.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = { shapes: t, curveSegments: e }, this.fromBufferGeometry(new Ga(t, e)), this.mergeVertices() }

    function Ga(t, e) { Yi.call(this), this.type = "ShapeBufferGeometry", this.parameters = { shapes: t, curveSegments: e }, e = e || 12; var i = [],
            n = [],
            r = [],
            o = [],
            a = 0,
            s = 0; if (!1 === Array.isArray(t)) c(t);
        else
            for (var h = 0; h < t.length; h++) c(t[h]), this.addGroup(a, s, h), a += s, s = 0;

        function c(t) { var a, h, c, l = n.length / 3,
                u = t.extractPoints(e),
                p = u.shape,
                f = u.holes; if (!1 === xa.isClockWise(p))
                for (p = p.reverse(), a = 0, h = f.length; a < h; a++) c = f[a], !0 === xa.isClockWise(c) && (f[a] = c.reverse()); var d = xa.triangulateShape(p, f); for (a = 0, h = f.length; a < h; a++) c = f[a], p = p.concat(c); for (a = 0, h = p.length; a < h; a++) { var m = p[a];
                n.push(m.x, m.y, 0), r.push(0, 0, 1), o.push(m.x, m.y) } for (a = 0, h = d.length; a < h; a++) { var g = d[a],
                    v = g[0] + l,
                    y = g[1] + l,
                    _ = g[2] + l;
                i.push(v, y, _), s += 3 } } this.setIndex(i), this.addAttribute("position", new zi(n, 3)), this.addAttribute("normal", new zi(r, 3)), this.addAttribute("uv", new zi(o, 2)) }

    function ka(t, e) { if (e.shapes = [], Array.isArray(t))
            for (var i = 0, n = t.length; i < n; i++) { var r = t[i];
                e.shapes.push(r.uuid) } else e.shapes.push(t.uuid); return e }

    function Ha(t, e) { Yi.call(this), this.type = "EdgesGeometry", this.parameters = { thresholdAngle: e }, e = void 0 !== e ? e : 1; var i, n, r, o, a = [],
            s = Math.cos(Ue.DEG2RAD * e),
            h = [0, 0],
            c = {},
            l = ["a", "b", "c"];
        t.isBufferGeometry ? (o = new Ii).fromBufferGeometry(t) : o = t.clone(), o.mergeVertices(), o.computeFaceNormals(); for (var u = o.vertices, p = o.faces, f = 0, d = p.length; f < d; f++)
            for (var m = p[f], g = 0; g < 3; g++) i = m[l[g]], n = m[l[(g + 1) % 3]], h[0] = Math.min(i, n), h[1] = Math.max(i, n), void 0 === c[r = h[0] + "," + h[1]] ? c[r] = { index1: h[0], index2: h[1], face1: f, face2: void 0 } : c[r].face2 = f; for (r in c) { var v = c[r]; if (void 0 === v.face2 || p[v.face1].normal.dot(p[v.face2].normal) <= s) { var y = u[v.index1];
                a.push(y.x, y.y, y.z), y = u[v.index2], a.push(y.x, y.y, y.z) } } this.addAttribute("position", new zi(a, 3)) }

    function Fa(t, e, i, n, r, o, a, s) { Ii.call(this), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: i, radialSegments: n, heightSegments: r, openEnded: o, thetaStart: a, thetaLength: s }, this.fromBufferGeometry(new Ua(t, e, i, n, r, o, a, s)), this.mergeVertices() }

    function Ua(t, e, i, n, r, o, a, s) { Yi.call(this), this.type = "CylinderBufferGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: i, radialSegments: n, heightSegments: r, openEnded: o, thetaStart: a, thetaLength: s }; var h = this;
        t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, i = i || 1, n = Math.floor(n) || 8, r = Math.floor(r) || 1, o = void 0 !== o && o, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : 2 * Math.PI; var c = [],
            l = [],
            u = [],
            p = [],
            f = 0,
            d = [],
            m = i / 2,
            g = 0;

        function v(i) { var r, o, d, v = new Be,
                y = new Ve,
                _ = 0,
                x = !0 === i ? t : e,
                b = !0 === i ? 1 : -1; for (o = f, r = 1; r <= n; r++) l.push(0, m * b, 0), u.push(0, b, 0), p.push(.5, .5), f++; for (d = f, r = 0; r <= n; r++) { var w = r / n * s + a,
                    T = Math.cos(w),
                    E = Math.sin(w);
                y.x = x * E, y.y = m * b, y.z = x * T, l.push(y.x, y.y, y.z), u.push(0, b, 0), v.x = .5 * T + .5, v.y = .5 * E * b + .5, p.push(v.x, v.y), f++ } for (r = 0; r < n; r++) { var S = o + r,
                    M = d + r;!0 === i ? c.push(M, M + 1, S) : c.push(M + 1, M, S), _ += 3 } h.addGroup(g, _, !0 === i ? 1 : 2), g += _ }! function() { var o, v, y = new Ve,
                _ = new Ve,
                x = 0,
                b = (e - t) / i; for (v = 0; v <= r; v++) { var w = [],
                    T = v / r,
                    E = T * (e - t) + t; for (o = 0; o <= n; o++) { var S = o / n,
                        M = S * s + a,
                        A = Math.sin(M),
                        L = Math.cos(M);
                    _.x = E * A, _.y = -T * i + m, _.z = E * L, l.push(_.x, _.y, _.z), y.set(A, b, L).normalize(), u.push(y.x, y.y, y.z), p.push(S, 1 - T), w.push(f++) } d.push(w) } for (o = 0; o < n; o++)
                for (v = 0; v < r; v++) { var C = d[v][o],
                        O = d[v + 1][o],
                        P = d[v + 1][o + 1],
                        R = d[v][o + 1];
                    c.push(C, O, R), c.push(O, P, R), x += 6 } h.addGroup(g, x, 0), g += x }(), !1 === o && (t > 0 && v(!0), e > 0 && v(!1)), this.setIndex(c), this.addAttribute("position", new zi(l, 3)), this.addAttribute("normal", new zi(u, 3)), this.addAttribute("uv", new zi(p, 2)) }

    function Ba(t, e, i, n, r, o, a) { Fa.call(this, 0, t, e, i, n, r, o, a), this.type = "ConeGeometry", this.parameters = { radius: t, height: e, radialSegments: i, heightSegments: n, openEnded: r, thetaStart: o, thetaLength: a } }

    function za(t, e, i, n, r, o, a) { Ua.call(this, 0, t, e, i, n, r, o, a), this.type = "ConeBufferGeometry", this.parameters = { radius: t, height: e, radialSegments: i, heightSegments: n, openEnded: r, thetaStart: o, thetaLength: a } }

    function ja(t, e, i, n) { Ii.call(this), this.type = "CircleGeometry", this.parameters = { radius: t, segments: e, thetaStart: i, thetaLength: n }, this.fromBufferGeometry(new Va(t, e, i, n)), this.mergeVertices() }

    function Va(t, e, i, n) { Yi.call(this), this.type = "CircleBufferGeometry", this.parameters = { radius: t, segments: e, thetaStart: i, thetaLength: n }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI; var r, o, a = [],
            s = [],
            h = [],
            c = [],
            l = new Ve,
            u = new Be; for (s.push(0, 0, 0), h.push(0, 0, 1), c.push(.5, .5), o = 0, r = 3; o <= e; o++, r += 3) { var p = i + o / e * n;
            l.x = t * Math.cos(p), l.y = t * Math.sin(p), s.push(l.x, l.y, l.z), h.push(0, 0, 1), u.x = (s[r] / t + 1) / 2, u.y = (s[r + 1] / t + 1) / 2, c.push(u.x, u.y) } for (r = 1; r <= e; r++) a.push(r, r + 1, 0);
        this.setIndex(a), this.addAttribute("position", new zi(s, 3)), this.addAttribute("normal", new zi(h, 3)), this.addAttribute("uv", new zi(c, 2)) } Aa.prototype = Object.create(Ii.prototype), Aa.prototype.constructor = Aa, La.prototype = Object.create(Ea.prototype), La.prototype.constructor = La, Ca.prototype = Object.create(Ii.prototype), Ca.prototype.constructor = Ca, Oa.prototype = Object.create(Yi.prototype), Oa.prototype.constructor = Oa, Pa.prototype = Object.create(Ii.prototype), Pa.prototype.constructor = Pa, Ra.prototype = Object.create(Yi.prototype), Ra.prototype.constructor = Ra, Ia.prototype = Object.create(Ii.prototype), Ia.prototype.constructor = Ia, Na.prototype = Object.create(Yi.prototype), Na.prototype.constructor = Na, Da.prototype = Object.create(Ii.prototype), Da.prototype.constructor = Da, Da.prototype.toJSON = function() { var t = Ii.prototype.toJSON.call(this); return ka(this.parameters.shapes, t) }, Ga.prototype = Object.create(Yi.prototype), Ga.prototype.constructor = Ga, Ga.prototype.toJSON = function() { var t = Yi.prototype.toJSON.call(this); return ka(this.parameters.shapes, t) }, Ha.prototype = Object.create(Yi.prototype), Ha.prototype.constructor = Ha, Fa.prototype = Object.create(Ii.prototype), Fa.prototype.constructor = Fa, Ua.prototype = Object.create(Yi.prototype), Ua.prototype.constructor = Ua, Ba.prototype = Object.create(Fa.prototype), Ba.prototype.constructor = Ba, za.prototype = Object.create(Ua.prototype), za.prototype.constructor = za, ja.prototype = Object.create(Ii.prototype), ja.prototype.constructor = ja, Va.prototype = Object.create(Yi.prototype), Va.prototype.constructor = Va;
    var Wa = Object.freeze({ WireframeGeometry: Io, ParametricGeometry: No, ParametricBufferGeometry: Do, TetrahedronGeometry: Ho, TetrahedronBufferGeometry: Fo, OctahedronGeometry: Uo, OctahedronBufferGeometry: Bo, IcosahedronGeometry: zo, IcosahedronBufferGeometry: jo, DodecahedronGeometry: Vo, DodecahedronBufferGeometry: Wo, PolyhedronGeometry: Go, PolyhedronBufferGeometry: ko, TubeGeometry: Xo, TubeBufferGeometry: Yo, TorusKnotGeometry: qo, TorusKnotBufferGeometry: Zo, TorusGeometry: Jo, TorusBufferGeometry: $o, TextGeometry: Aa, TextBufferGeometry: La, SphereGeometry: Ca, SphereBufferGeometry: Oa, RingGeometry: Pa, RingBufferGeometry: Ra, PlaneGeometry: Ji, PlaneBufferGeometry: $i, LatheGeometry: Ia, LatheBufferGeometry: Na, ShapeGeometry: Da, ShapeBufferGeometry: Ga, ExtrudeGeometry: Ta, ExtrudeBufferGeometry: Ea, EdgesGeometry: Ha, ConeGeometry: Ba, ConeBufferGeometry: za, CylinderGeometry: Fa, CylinderBufferGeometry: Ua, CircleGeometry: ja, CircleBufferGeometry: Va, BoxGeometry: qi, BoxBufferGeometry: Zi });

    function Xa(t) { pn.call(this), this.type = "ShadowMaterial", this.color = new mi(0), this.transparent = !0, this.setValues(t) }

    function Ya(t) { fn.call(this, t), this.type = "RawShaderMaterial" }

    function qa(t) { pn.call(this), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new mi(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new mi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = He, this.normalScale = new Be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t) }

    function Za(t) { qa.call(this), this.defines = { PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t) }

    function Ja(t) { pn.call(this), this.type = "MeshPhongMaterial", this.color = new mi(16777215), this.specular = new mi(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new mi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = He, this.normalScale = new Be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = lt, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t) }

    function $a(t) { Ja.call(this), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t) }

    function Ka(t) { pn.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = He, this.normalScale = new Be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t) }

    function Qa(t) { pn.call(this), this.type = "MeshLambertMaterial", this.color = new mi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new mi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = lt, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t) }

    function ts(t) { pn.call(this), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new mi(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = He, this.normalScale = new Be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.lights = !1, this.setValues(t) }

    function es(t) { To.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t) } Xa.prototype = Object.create(pn.prototype), Xa.prototype.constructor = Xa, Xa.prototype.isShadowMaterial = !0, Xa.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.color.copy(t.color), this }, Ya.prototype = Object.create(fn.prototype), Ya.prototype.constructor = Ya, Ya.prototype.isRawShaderMaterial = !0, qa.prototype = Object.create(pn.prototype), qa.prototype.constructor = qa, qa.prototype.isMeshStandardMaterial = !0, qa.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, Za.prototype = Object.create(qa.prototype), Za.prototype.constructor = Za, Za.prototype.isMeshPhysicalMaterial = !0, Za.prototype.copy = function(t) { return qa.prototype.copy.call(this, t), this.defines = { PHYSICAL: "" }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this }, Ja.prototype = Object.create(pn.prototype), Ja.prototype.constructor = Ja, Ja.prototype.isMeshPhongMaterial = !0, Ja.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, $a.prototype = Object.create(Ja.prototype), $a.prototype.constructor = $a, $a.prototype.isMeshToonMaterial = !0, $a.prototype.copy = function(t) { return Ja.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this }, Ka.prototype = Object.create(pn.prototype), Ka.prototype.constructor = Ka, Ka.prototype.isMeshNormalMaterial = !0, Ka.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, Qa.prototype = Object.create(pn.prototype), Qa.prototype.constructor = Qa, Qa.prototype.isMeshLambertMaterial = !0, Qa.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, ts.prototype = Object.create(pn.prototype), ts.prototype.constructor = ts, ts.prototype.isMeshMatcapMaterial = !0, ts.prototype.copy = function(t) { return pn.prototype.copy.call(this, t), this.defines = { MATCAP: "" }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, es.prototype = Object.create(To.prototype), es.prototype.constructor = es, es.prototype.isLineDashedMaterial = !0, es.prototype.copy = function(t) { return To.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this };
    var is = Object.freeze({ ShadowMaterial: Xa, SpriteMaterial: vo, RawShaderMaterial: Ya, ShaderMaterial: fn, PointsMaterial: Ao, MeshPhysicalMaterial: Za, MeshStandardMaterial: qa, MeshPhongMaterial: Ja, MeshToonMaterial: $a, MeshNormalMaterial: Ka, MeshLambertMaterial: Qa, MeshDepthMaterial: jr, MeshDistanceMaterial: Vr, MeshBasicMaterial: gn, MeshMatcapMaterial: ts, LineDashedMaterial: es, LineBasicMaterial: To, Material: pn }),
        ns = { arraySlice: function(t, e, i) { return ns.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i) }, convertArray: function(t, e, i) { return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t) }, isTypedArray: function(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }, getKeyframeOrder: function(t) { for (var e = t.length, i = new Array(e), n = 0; n !== e; ++n) i[n] = n; return i.sort(function(e, i) { return t[e] - t[i] }), i }, sortedArray: function(t, e, i) { for (var n = t.length, r = new t.constructor(n), o = 0, a = 0; a !== n; ++o)
                    for (var s = i[o] * e, h = 0; h !== e; ++h) r[a++] = t[s + h]; return r }, flattenJSON: function(t, e, i, n) { for (var r = 1, o = t[0]; void 0 !== o && void 0 === o[n];) o = t[r++]; if (void 0 !== o) { var a = o[n]; if (void 0 !== a)
                        if (Array.isArray(a))
                            do { void 0 !== (a = o[n]) && (e.push(o.time), i.push.apply(i, a)), o = t[r++] } while (void 0 !== o);
                        else if (void 0 !== a.toArray)
                        do { void 0 !== (a = o[n]) && (e.push(o.time), a.toArray(i, i.length)), o = t[r++] } while (void 0 !== o);
                    else
                        do { void 0 !== (a = o[n]) && (e.push(o.time), i.push(a)), o = t[r++] } while (void 0 !== o) } } };

    function rs(t, e, i, n) { this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i }

    function os(t, e, i, n) { rs.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0 }

    function as(t, e, i, n) { rs.call(this, t, e, i, n) }

    function ss(t, e, i, n) { rs.call(this, t, e, i, n) }

    function hs(t, e, i, n) { if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t, this.times = ns.convertArray(e, this.TimeBufferType), this.values = ns.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation) }

    function cs(t, e, i) { hs.call(this, t, e, i) }

    function ls(t, e, i, n) { hs.call(this, t, e, i, n) }

    function us(t, e, i, n) { hs.call(this, t, e, i, n) }

    function ps(t, e, i, n) { rs.call(this, t, e, i, n) }

    function fs(t, e, i, n) { hs.call(this, t, e, i, n) }

    function ds(t, e, i, n) { hs.call(this, t, e, i, n) }

    function ms(t, e, i, n) { hs.call(this, t, e, i, n) }

    function gs(t, e, i) { this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = Ue.generateUUID(), this.duration < 0 && this.resetDuration() }

    function vs(t) { if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); var e = function(t) { switch (t.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return us;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return ms;
                case "color":
                    return ls;
                case "quaternion":
                    return fs;
                case "bool":
                case "boolean":
                    return cs;
                case "string":
                    return ds } throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t) }(t.type); if (void 0 === t.times) { var i = [],
                n = [];
            ns.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n } return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation) } Object.assign(rs.prototype, { evaluate: function(t) { var e = this.parameterPositions,
                    i = this._cachedIndex,
                    n = e[i],
                    r = e[i - 1];
                t: { e: { var o;i: { n: if (!(t < n)) { for (var a = i + 2;;) { if (void 0 === n) { if (t < r) break n; return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r) } if (i === a) break; if (r = n, t < (n = e[++i])) break e } o = e.length; break i } if (t >= r) break t; var s = e[1];t < s && (i = 2, r = s); for (a = i - 2;;) { if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n); if (i === a) break; if (n = r, t >= (r = e[--i - 1])) break e } o = i, i = 0 } for (; i < o;) { var h = i + o >>> 1;
                            t < e[h] ? o = h : i = h + 1 } if (n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, n); if (void 0 === n) return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, r, t) } this._cachedIndex = i, this.intervalChanged_(i, r, n) }
                return this.interpolate_(i, r, t, n) }, settings: null, DefaultSettings_: {}, getSettings_: function() { return this.settings || this.DefaultSettings_ }, copySampleValue_: function(t) { for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, o = 0; o !== n; ++o) e[o] = i[r + o]; return e }, interpolate_: function() { throw new Error("call to abstract method") }, intervalChanged_: function() {} }),
        //!\ DECLARE ALIAS AFTER assign prototype !
        Object.assign(rs.prototype, { beforeStart_: rs.prototype.copySampleValue_, afterEnd_: rs.prototype.copySampleValue_ }), os.prototype = Object.assign(Object.create(rs.prototype), { constructor: os, DefaultSettings_: { endingStart: Se, endingEnd: Se }, intervalChanged_: function(t, e, i) { var n = this.parameterPositions,
                    r = t - 2,
                    o = t + 1,
                    a = n[r],
                    s = n[o]; if (void 0 === a) switch (this.getSettings_().endingStart) {
                    case 2401:
                        r = t, a = 2 * e - i; break;
                    case 2402:
                        a = e + n[r = n.length - 2] - n[r + 1]; break;
                    default:
                        r = t, a = i }
                if (void 0 === s) switch (this.getSettings_().endingEnd) {
                    case 2401:
                        o = t, s = 2 * i - e; break;
                    case 2402:
                        o = 1, s = i + n[1] - n[0]; break;
                    default:
                        o = t - 1, s = e }
                var h = .5 * (i - e),
                    c = this.valueSize;
                this._weightPrev = h / (e - a), this._weightNext = h / (s - i), this._offsetPrev = r * c, this._offsetNext = o * c }, interpolate_: function(t, e, i, n) { for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, h = s - a, c = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, f = (i - e) / (n - e), d = f * f, m = d * f, g = -u * m + 2 * u * d - u * f, v = (1 + u) * m + (-1.5 - 2 * u) * d + (-.5 + u) * f + 1, y = (-1 - p) * m + (1.5 + p) * d + .5 * f, _ = p * m - p * d, x = 0; x !== a; ++x) r[x] = g * o[c + x] + v * o[h + x] + y * o[s + x] + _ * o[l + x]; return r } }), as.prototype = Object.assign(Object.create(rs.prototype), { constructor: as, interpolate_: function(t, e, i, n) { for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, h = s - a, c = (i - e) / (n - e), l = 1 - c, u = 0; u !== a; ++u) r[u] = o[h + u] * l + o[s + u] * c; return r } }), ss.prototype = Object.assign(Object.create(rs.prototype), { constructor: ss, interpolate_: function(t) { return this.copySampleValue_(t - 1) } }), Object.assign(hs, { toJSON: function(t) { var e, i = t.constructor; if (void 0 !== i.toJSON) e = i.toJSON(t);
                else { e = { name: t.name, times: ns.convertArray(t.times, Array), values: ns.convertArray(t.values, Array) }; var n = t.getInterpolation();
                    n !== t.DefaultInterpolation && (e.interpolation = n) } return e.type = t.ValueTypeName, e } }), Object.assign(hs.prototype, { constructor: hs, TimeBufferType: Float32Array, ValueBufferType: Float32Array, DefaultInterpolation: 2301, InterpolantFactoryMethodDiscrete: function(t) { return new ss(this.times, this.values, this.getValueSize(), t) }, InterpolantFactoryMethodLinear: function(t) { return new as(this.times, this.values, this.getValueSize(), t) }, InterpolantFactoryMethodSmooth: function(t) { return new os(this.times, this.values, this.getValueSize(), t) }, setInterpolation: function(t) { var e; switch (t) {
                    case 2300:
                        e = this.InterpolantFactoryMethodDiscrete; break;
                    case 2301:
                        e = this.InterpolantFactoryMethodLinear; break;
                    case 2302:
                        e = this.InterpolantFactoryMethodSmooth } if (void 0 === e) { var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (void 0 === this.createInterpolant) { if (t === this.DefaultInterpolation) throw new Error(i);
                        this.setInterpolation(this.DefaultInterpolation) } return console.warn("THREE.KeyframeTrack:", i), this } return this.createInterpolant = e, this }, getInterpolation: function() { switch (this.createInterpolant) {
                    case this.InterpolantFactoryMethodDiscrete:
                        return 2300;
                    case this.InterpolantFactoryMethodLinear:
                        return 2301;
                    case this.InterpolantFactoryMethodSmooth:
                        return 2302 } }, getValueSize: function() { return this.values.length / this.times.length }, shift: function(t) { if (0 !== t)
                    for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t; return this }, scale: function(t) { if (1 !== t)
                    for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t; return this }, trim: function(t, e) { for (var i = this.times, n = i.length, r = 0, o = n - 1; r !== n && i[r] < t;) ++r; for (; - 1 !== o && i[o] > e;) --o; if (++o, 0 !== r || o !== n) { r >= o && (r = (o = Math.max(o, 1)) - 1); var a = this.getValueSize();
                    this.times = ns.arraySlice(i, r, o), this.values = ns.arraySlice(this.values, r * a, o * a) } return this }, validate: function() { var t = !0,
                    e = this.getValueSize();
                e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1); var i = this.times,
                    n = this.values,
                    r = i.length;
                0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1); for (var o = null, a = 0; a !== r; a++) { var s = i[a]; if ("number" == typeof s && isNaN(s)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, s), t = !1; break } if (null !== o && o > s) { console.error("THREE.KeyframeTrack: Out of order keys.", this, a, s, o), t = !1; break } o = s } if (void 0 !== n && ns.isTypedArray(n)) { a = 0; for (var h = n.length; a !== h; ++a) { var c = n[a]; if (isNaN(c)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), t = !1; break } } } return t }, optimize: function() { for (var t = this.times, e = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, o = t.length - 1, a = 1; a < o; ++a) { var s = !1,
                        h = t[a]; if (h !== t[a + 1] && (1 !== a || h !== h[0]))
                        if (n) s = !0;
                        else
                            for (var c = a * i, l = c - i, u = c + i, p = 0; p !== i; ++p) { var f = e[c + p]; if (f !== e[l + p] || f !== e[u + p]) { s = !0; break } }
                    if (s) { if (a !== r) { t[r] = t[a]; var d = a * i,
                                m = r * i; for (p = 0; p !== i; ++p) e[m + p] = e[d + p] }++r } } if (o > 0) { t[r] = t[o]; for (d = o * i, m = r * i, p = 0; p !== i; ++p) e[m + p] = e[d + p];++r } return r !== t.length && (this.times = ns.arraySlice(t, 0, r), this.values = ns.arraySlice(e, 0, r * i)), this } }), cs.prototype = Object.assign(Object.create(hs.prototype), { constructor: cs, ValueTypeName: "bool", ValueBufferType: Array, DefaultInterpolation: 2300, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0 }), ls.prototype = Object.assign(Object.create(hs.prototype), { constructor: ls, ValueTypeName: "color" }), us.prototype = Object.assign(Object.create(hs.prototype), { constructor: us, ValueTypeName: "number" }), ps.prototype = Object.assign(Object.create(rs.prototype), { constructor: ps, interpolate_: function(t, e, i, n) { for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, h = (i - e) / (n - e), c = s + a; s !== c; s += 4) je.slerpFlat(r, 0, o, s - a, o, s, h); return r } }), fs.prototype = Object.assign(Object.create(hs.prototype), { constructor: fs, ValueTypeName: "quaternion", DefaultInterpolation: 2301, InterpolantFactoryMethodLinear: function(t) { return new ps(this.times, this.values, this.getValueSize(), t) }, InterpolantFactoryMethodSmooth: void 0 }), ds.prototype = Object.assign(Object.create(hs.prototype), { constructor: ds, ValueTypeName: "string", ValueBufferType: Array, DefaultInterpolation: 2300, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0 }), ms.prototype = Object.assign(Object.create(hs.prototype), { constructor: ms, ValueTypeName: "vector" }), Object.assign(gs, { parse: function(t) { for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, o = i.length; r !== o; ++r) e.push(vs(i[r]).scale(n)); return new gs(t.name, t.duration, e) }, toJSON: function(t) { for (var e = [], i = t.tracks, n = { name: t.name, duration: t.duration, tracks: e, uuid: t.uuid }, r = 0, o = i.length; r !== o; ++r) e.push(hs.toJSON(i[r])); return n }, CreateFromMorphTargetSequence: function(t, e, i, n) { for (var r = e.length, o = [], a = 0; a < r; a++) { var s = [],
                        h = [];
                    s.push((a + r - 1) % r, a, (a + 1) % r), h.push(0, 1, 0); var c = ns.getKeyframeOrder(s);
                    s = ns.sortedArray(s, 1, c), h = ns.sortedArray(h, 1, c), n || 0 !== s[0] || (s.push(r), h.push(h[0])), o.push(new us(".morphTargetInfluences[" + e[a].name + "]", s, h).scale(1 / i)) } return new gs(t, -1, o) }, findByName: function(t, e) { var i = t; if (!Array.isArray(t)) { var n = t;
                    i = n.geometry && n.geometry.animations || n.animations } for (var r = 0; r < i.length; r++)
                    if (i[r].name === e) return i[r]; return null }, CreateClipsFromMorphTargetSequences: function(t, e, i) { for (var n = {}, r = /^([\w-]*?)([\d]+)$/, o = 0, a = t.length; o < a; o++) { var s = t[o],
                        h = s.name.match(r); if (h && h.length > 1) { var c = n[u = h[1]];
                        c || (n[u] = c = []), c.push(s) } } var l = []; for (var u in n) l.push(gs.CreateFromMorphTargetSequence(u, n[u], e, i)); return l }, parseAnimation: function(t, e) { if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; for (var i = function(t, e, i, n, r) { if (0 !== i.length) { var o = [],
                                a = [];
                            ns.flattenJSON(i, o, a, n), 0 !== o.length && r.push(new t(e, o, a)) } }, n = [], r = t.name || "default", o = t.length || -1, a = t.fps || 30, s = t.hierarchy || [], h = 0; h < s.length; h++) { var c = s[h].keys; if (c && 0 !== c.length)
                        if (c[0].morphTargets) { for (var l = {}, u = 0; u < c.length; u++)
                                if (c[u].morphTargets)
                                    for (var p = 0; p < c[u].morphTargets.length; p++) l[c[u].morphTargets[p]] = -1; for (var f in l) { var d = [],
                                    m = []; for (p = 0; p !== c[u].morphTargets.length; ++p) { var g = c[u];
                                    d.push(g.time), m.push(g.morphTarget === f ? 1 : 0) } n.push(new us(".morphTargetInfluence[" + f + "]", d, m)) } o = l.length * (a || 1) } else { var v = ".bones[" + e[h].name + "]";
                            i(ms, v + ".position", c, "pos", n), i(fs, v + ".quaternion", c, "rot", n), i(ms, v + ".scale", c, "scl", n) } } return 0 === n.length ? null : new gs(r, o, n) } }), Object.assign(gs.prototype, { resetDuration: function() { for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) { var n = this.tracks[e];
                    t = Math.max(t, n.times[n.times.length - 1]) } return this.duration = t, this }, trim: function() { for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration); return this }, validate: function() { for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate(); return t }, optimize: function() { for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize(); return this } });
    var ys = { enabled: !1, files: {}, add: function(t, e) {!1 !== this.enabled && (this.files[t] = e) }, get: function(t) { if (!1 !== this.enabled) return this.files[t] }, remove: function(t) { delete this.files[t] }, clear: function() { this.files = {} } };

    function _s(t, e, i) { var n = this,
            r = !1,
            o = 0,
            a = 0,
            s = void 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) { a++, !1 === r && void 0 !== n.onStart && n.onStart(t, o, a), r = !0 }, this.itemEnd = function(t) { o++, void 0 !== n.onProgress && n.onProgress(t, o, a), o === a && (r = !1, void 0 !== n.onLoad && n.onLoad()) }, this.itemError = function(t) { void 0 !== n.onError && n.onError(t) }, this.resolveURL = function(t) { return s ? s(t) : t }, this.setURLModifier = function(t) { return s = t, this } }
    var xs = new _s,
        bs = {};

    function ws(t) { this.manager = void 0 !== t ? t : xs }

    function Ts(t) { this.manager = void 0 !== t ? t : xs, this._parser = null }

    function Es(t) { this.manager = void 0 !== t ? t : xs }

    function Ss(t) { this.manager = void 0 !== t ? t : xs }

    function Ms(t) { this.manager = void 0 !== t ? t : xs }

    function As() { this.type = "Curve", this.arcLengthDivisions = 200 }

    function Ls(t, e, i, n, r, o, a, s) { As.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = o || 2 * Math.PI, this.aClockwise = a || !1, this.aRotation = s || 0 }

    function Cs(t, e, i, n, r, o) { Ls.call(this, t, e, i, i, n, r, o), this.type = "ArcCurve" }

    function Os() { var t = 0,
            e = 0,
            i = 0,
            n = 0;

        function r(r, o, a, s) { t = r, e = a, i = -3 * r + 3 * o - 2 * a - s, n = 2 * r - 2 * o + a + s } return { initCatmullRom: function(t, e, i, n, o) { r(e, i, o * (i - t), o * (n - e)) }, initNonuniformCatmullRom: function(t, e, i, n, o, a, s) { var h = (e - t) / o - (i - t) / (o + a) + (i - e) / a,
                    c = (i - e) / a - (n - e) / (a + s) + (n - i) / s;
                r(e, i, h *= a, c *= a) }, calc: function(r) { var o = r * r; return t + e * r + i * o + n * (o * r) } } } Object.assign(ws.prototype, { load: function(t, e, i, n) { void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); var r = this,
                o = ys.get(t); if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() { e && e(o), r.manager.itemEnd(t) }, 0), o; if (void 0 === bs[t]) { var a = t.match(/^data:(.*?)(;base64)?,(.*)$/); if (a) { var s = a[1],
                        h = !!a[2],
                        c = a[3];
                    c = decodeURIComponent(c), h && (c = atob(c)); try { var l, u = (this.responseType || "").toLowerCase(); switch (u) {
                            case "arraybuffer":
                            case "blob":
                                for (var p = new Uint8Array(c.length), f = 0; f < c.length; f++) p[f] = c.charCodeAt(f);
                                l = "blob" === u ? new Blob([p.buffer], { type: s }) : p.buffer; break;
                            case "document":
                                var d = new DOMParser;
                                l = d.parseFromString(c, s); break;
                            case "json":
                                l = JSON.parse(c); break;
                            default:
                                l = c } setTimeout(function() { e && e(l), r.manager.itemEnd(t) }, 0) } catch (e) { setTimeout(function() { n && n(e), r.manager.itemError(t), r.manager.itemEnd(t) }, 0) } } else { bs[t] = [], bs[t].push({ onLoad: e, onProgress: i, onError: n }); var m = new XMLHttpRequest; for (var g in m.open("GET", t, !0), m.addEventListener("load", function(e) { var i = this.response;
                            ys.add(t, i); var n = bs[t]; if (delete bs[t], 200 === this.status || 0 === this.status) { 0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."); for (var o = 0, a = n.length; o < a; o++) {
                                    (s = n[o]).onLoad && s.onLoad(i) } r.manager.itemEnd(t) } else { for (o = 0, a = n.length; o < a; o++) { var s;
                                    (s = n[o]).onError && s.onError(e) } r.manager.itemError(t), r.manager.itemEnd(t) } }, !1), m.addEventListener("progress", function(e) { for (var i = bs[t], n = 0, r = i.length; n < r; n++) { var o = i[n];
                                o.onProgress && o.onProgress(e) } }, !1), m.addEventListener("error", function(e) { var i = bs[t];
                            delete bs[t]; for (var n = 0, o = i.length; n < o; n++) { var a = i[n];
                                a.onError && a.onError(e) } r.manager.itemError(t), r.manager.itemEnd(t) }, !1), m.addEventListener("abort", function(e) { var i = bs[t];
                            delete bs[t]; for (var n = 0, o = i.length; n < o; n++) { var a = i[n];
                                a.onError && a.onError(e) } r.manager.itemError(t), r.manager.itemEnd(t) }, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(g, this.requestHeader[g]);
                    m.send(null) } return r.manager.itemStart(t), m } bs[t].push({ onLoad: e, onProgress: i, onError: n }) }, setPath: function(t) { return this.path = t, this }, setResponseType: function(t) { return this.responseType = t, this }, setWithCredentials: function(t) { return this.withCredentials = t, this }, setMimeType: function(t) { return this.mimeType = t, this }, setRequestHeader: function(t) { return this.requestHeader = t, this } }), Object.assign(function(t) { this.manager = void 0 !== t ? t : xs }.prototype, { load: function(t, e, i, n) { var r = this,
                o = new ws(r.manager);
            o.setPath(r.path), o.load(t, function(t) { e(r.parse(JSON.parse(t))) }, i, n) }, parse: function(t, e) { for (var i = [], n = 0; n < t.length; n++) { var r = gs.parse(t[n]);
                i.push(r) } e(i) }, setPath: function(t) { return this.path = t, this } }), Object.assign(function(t) { this.manager = void 0 !== t ? t : xs, this._parser = null }.prototype, { load: function(t, e, i, n) { var r = this,
                o = [],
                a = new Oo;
            a.image = o; var s = new ws(this.manager);

            function h(h) { s.load(t[h], function(t) { var i = r._parser(t, !0);
                    o[h] = { width: i.width, height: i.height, format: i.format, mipmaps: i.mipmaps }, 6 === (c += 1) && (1 === i.mipmapCount && (a.minFilter = Rt), a.format = i.format, a.needsUpdate = !0, e && e(a)) }, i, n) } if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
                for (var c = 0, l = 0, u = t.length; l < u; ++l) h(l);
            else s.load(t, function(t) { var i = r._parser(t, !0); if (i.isCubemap)
                    for (var n = i.mipmaps.length / i.mipmapCount, s = 0; s < n; s++) { o[s] = { mipmaps: [] }; for (var h = 0; h < i.mipmapCount; h++) o[s].mipmaps.push(i.mipmaps[s * i.mipmapCount + h]), o[s].format = i.format, o[s].width = i.width, o[s].height = i.height } else a.image.width = i.width, a.image.height = i.height, a.mipmaps = i.mipmaps;
                1 === i.mipmapCount && (a.minFilter = Rt), a.format = i.format, a.needsUpdate = !0, e && e(a) }, i, n); return a }, setPath: function(t) { return this.path = t, this } }), Object.assign(Ts.prototype, { load: function(t, e, i, n) { var r = this,
                o = new ni,
                a = new ws(this.manager); return a.setResponseType("arraybuffer"), a.setPath(this.path), a.load(t, function(t) { var i = r._parser(t);
                i && (void 0 !== i.image ? o.image = i.image : void 0 !== i.data && (o.image.width = i.width, o.image.height = i.height, o.image.data = i.data), o.wrapS = void 0 !== i.wrapS ? i.wrapS : At, o.wrapT = void 0 !== i.wrapT ? i.wrapT : At, o.magFilter = void 0 !== i.magFilter ? i.magFilter : Rt, o.minFilter = void 0 !== i.minFilter ? i.minFilter : Nt, o.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (o.format = i.format), void 0 !== i.type && (o.type = i.type), void 0 !== i.mipmaps && (o.mipmaps = i.mipmaps), 1 === i.mipmapCount && (o.minFilter = Rt), o.needsUpdate = !0, e && e(o, i)) }, i, n), o }, setPath: function(t) { return this.path = t, this } }), Object.assign(Es.prototype, { crossOrigin: "anonymous", load: function(t, e, i, n) { void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); var r = this,
                o = ys.get(t); if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() { e && e(o), r.manager.itemEnd(t) }, 0), o; var a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

            function s() { a.removeEventListener("load", s, !1), a.removeEventListener("error", h, !1), ys.add(t, this), e && e(this), r.manager.itemEnd(t) }

            function h(e) { a.removeEventListener("load", s, !1), a.removeEventListener("error", h, !1), n && n(e), r.manager.itemError(t), r.manager.itemEnd(t) } return a.addEventListener("load", s, !1), a.addEventListener("error", h, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a }, setCrossOrigin: function(t) { return this.crossOrigin = t, this }, setPath: function(t) { return this.path = t, this } }), Object.assign(Ss.prototype, { crossOrigin: "anonymous", load: function(t, e, i, n) { var r = new Cn,
                o = new Es(this.manager);
            o.setCrossOrigin(this.crossOrigin), o.setPath(this.path); var a = 0;

            function s(i) { o.load(t[i], function(t) { r.images[i] = t, 6 === ++a && (r.needsUpdate = !0, e && e(r)) }, void 0, n) } for (var h = 0; h < t.length; ++h) s(h); return r }, setCrossOrigin: function(t) { return this.crossOrigin = t, this }, setPath: function(t) { return this.path = t, this } }), Object.assign(Ms.prototype, { crossOrigin: "anonymous", load: function(t, e, i, n) { var r = new Qe,
                o = new Es(this.manager); return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function(i) { r.image = i; var n = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                r.format = n ? qt : Zt, r.needsUpdate = !0, void 0 !== e && e(r) }, i, n), r }, setCrossOrigin: function(t) { return this.crossOrigin = t, this }, setPath: function(t) { return this.path = t, this } }), Object.assign(As.prototype, { getPoint: function() { return console.warn("THREE.Curve: .getPoint() not implemented."), null }, getPointAt: function(t, e) { var i = this.getUtoTmapping(t); return this.getPoint(i, e) }, getPoints: function(t) { void 0 === t && (t = 5); for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t)); return e }, getSpacedPoints: function(t) { void 0 === t && (t = 5); for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t)); return e }, getLength: function() { var t = this.getLengths(); return t[t.length - 1] }, getLengths: function(t) { if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1; var e, i, n = [],
                r = this.getPoint(0),
                o = 0; for (n.push(0), i = 1; i <= t; i++) o += (e = this.getPoint(i / t)).distanceTo(r), n.push(o), r = e; return this.cacheArcLengths = n, n }, updateArcLengths: function() { this.needsUpdate = !0, this.getLengths() }, getUtoTmapping: function(t, e) { var i, n = this.getLengths(),
                r = 0,
                o = n.length;
            i = e || t * n[o - 1]; for (var a, s = 0, h = o - 1; s <= h;)
                if ((a = n[r = Math.floor(s + (h - s) / 2)] - i) < 0) s = r + 1;
                else { if (!(a > 0)) { h = r; break } h = r - 1 } if (n[r = h] === i) return r / (o - 1); var c = n[r]; return (r + (i - c) / (n[r + 1] - c)) / (o - 1) }, getTangent: function(t) { var e = t - 1e-4,
                i = t + 1e-4;
            e < 0 && (e = 0), i > 1 && (i = 1); var n = this.getPoint(e); return this.getPoint(i).clone().sub(n).normalize() }, getTangentAt: function(t) { var e = this.getUtoTmapping(t); return this.getTangent(e) }, computeFrenetFrames: function(t, e) { var i, n, r, o = new Ve,
                a = [],
                s = [],
                h = [],
                c = new Ve,
                l = new ze; for (i = 0; i <= t; i++) n = i / t, a[i] = this.getTangentAt(n), a[i].normalize();
            s[0] = new Ve, h[0] = new Ve; var u = Number.MAX_VALUE,
                p = Math.abs(a[0].x),
                f = Math.abs(a[0].y),
                d = Math.abs(a[0].z); for (p <= u && (u = p, o.set(1, 0, 0)), f <= u && (u = f, o.set(0, 1, 0)), d <= u && o.set(0, 0, 1), c.crossVectors(a[0], o).normalize(), s[0].crossVectors(a[0], c), h[0].crossVectors(a[0], s[0]), i = 1; i <= t; i++) s[i] = s[i - 1].clone(), h[i] = h[i - 1].clone(), c.crossVectors(a[i - 1], a[i]), c.length() > Number.EPSILON && (c.normalize(), r = Math.acos(Ue.clamp(a[i - 1].dot(a[i]), -1, 1)), s[i].applyMatrix4(l.makeRotationAxis(c, r))), h[i].crossVectors(a[i], s[i]); if (!0 === e)
                for (r = Math.acos(Ue.clamp(s[0].dot(s[t]), -1, 1)), r /= t, a[0].dot(c.crossVectors(s[0], s[t])) > 0 && (r = -r), i = 1; i <= t; i++) s[i].applyMatrix4(l.makeRotationAxis(a[i], r * i)), h[i].crossVectors(a[i], s[i]); return { tangents: a, normals: s, binormals: h } }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this }, toJSON: function() { var t = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t }, fromJSON: function(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this } }), Ls.prototype = Object.create(As.prototype), Ls.prototype.constructor = Ls, Ls.prototype.isEllipseCurve = !0, Ls.prototype.getPoint = function(t, e) { for (var i = e || new Be, n = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, o = Math.abs(r) < Number.EPSILON; r < 0;) r += n; for (; r > n;) r -= n;
        r < Number.EPSILON && (r = o ? 0 : n), !0 !== this.aClockwise || o || (r === n ? r = -n : r -= n); var a = this.aStartAngle + t * r,
            s = this.aX + this.xRadius * Math.cos(a),
            h = this.aY + this.yRadius * Math.sin(a); if (0 !== this.aRotation) { var c = Math.cos(this.aRotation),
                l = Math.sin(this.aRotation),
                u = s - this.aX,
                p = h - this.aY;
            s = u * c - p * l + this.aX, h = u * l + p * c + this.aY } return i.set(s, h) }, Ls.prototype.copy = function(t) { return As.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this }, Ls.prototype.toJSON = function() { var t = As.prototype.toJSON.call(this); return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t }, Ls.prototype.fromJSON = function(t) { return As.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this }, Cs.prototype = Object.create(Ls.prototype), Cs.prototype.constructor = Cs, Cs.prototype.isArcCurve = !0;
    var Ps = new Ve,
        Rs = new Os,
        Is = new Os,
        Ns = new Os;

    function Ds(t, e, i, n) { As.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = i || "centripetal", this.tension = n || .5 }

    function Gs(t, e, i, n, r) { var o = .5 * (n - e),
            a = .5 * (r - i),
            s = t * t; return (2 * i - 2 * n + o + a) * (t * s) + (-3 * i + 3 * n - 2 * o - a) * s + o * t + i }

    function ks(t, e, i, n) { return function(t, e) { var i = 1 - t; return i * i * e }(t, e) + function(t, e) { return 2 * (1 - t) * t * e }(t, i) + function(t, e) { return t * t * e }(t, n) }

    function Hs(t, e, i, n, r) { return function(t, e) { var i = 1 - t; return i * i * i * e }(t, e) + function(t, e) { var i = 1 - t; return 3 * i * i * t * e }(t, i) + function(t, e) { return 3 * (1 - t) * t * t * e }(t, n) + function(t, e) { return t * t * t * e }(t, r) }

    function Fs(t, e, i, n) { As.call(this), this.type = "CubicBezierCurve", this.v0 = t || new Be, this.v1 = e || new Be, this.v2 = i || new Be, this.v3 = n || new Be }

    function Us(t, e, i, n) { As.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new Ve, this.v1 = e || new Ve, this.v2 = i || new Ve, this.v3 = n || new Ve }

    function Bs(t, e) { As.call(this), this.type = "LineCurve", this.v1 = t || new Be, this.v2 = e || new Be }

    function zs(t, e) { As.call(this), this.type = "LineCurve3", this.v1 = t || new Ve, this.v2 = e || new Ve }

    function js(t, e, i) { As.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new Be, this.v1 = e || new Be, this.v2 = i || new Be }

    function Vs(t, e, i) { As.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new Ve, this.v1 = e || new Ve, this.v2 = i || new Ve }

    function Ws(t) { As.call(this), this.type = "SplineCurve", this.points = t || [] } Ds.prototype = Object.create(As.prototype), Ds.prototype.constructor = Ds, Ds.prototype.isCatmullRomCurve3 = !0, Ds.prototype.getPoint = function(t, e) { var i, n, r, o, a = e || new Ve,
            s = this.points,
            h = s.length,
            c = (h - (this.closed ? 0 : 1)) * t,
            l = Math.floor(c),
            u = c - l; if (this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / h) + 1) * h : 0 === u && l === h - 1 && (l = h - 2, u = 1), this.closed || l > 0 ? i = s[(l - 1) % h] : (Ps.subVectors(s[0], s[1]).add(s[0]), i = Ps), n = s[l % h], r = s[(l + 1) % h], this.closed || l + 2 < h ? o = s[(l + 2) % h] : (Ps.subVectors(s[h - 1], s[h - 2]).add(s[h - 1]), o = Ps), "centripetal" === this.curveType || "chordal" === this.curveType) { var p = "chordal" === this.curveType ? .5 : .25,
                f = Math.pow(i.distanceToSquared(n), p),
                d = Math.pow(n.distanceToSquared(r), p),
                m = Math.pow(r.distanceToSquared(o), p);
            d < 1e-4 && (d = 1), f < 1e-4 && (f = d), m < 1e-4 && (m = d), Rs.initNonuniformCatmullRom(i.x, n.x, r.x, o.x, f, d, m), Is.initNonuniformCatmullRom(i.y, n.y, r.y, o.y, f, d, m), Ns.initNonuniformCatmullRom(i.z, n.z, r.z, o.z, f, d, m) } else "catmullrom" === this.curveType && (Rs.initCatmullRom(i.x, n.x, r.x, o.x, this.tension), Is.initCatmullRom(i.y, n.y, r.y, o.y, this.tension), Ns.initCatmullRom(i.z, n.z, r.z, o.z, this.tension)); return a.set(Rs.calc(u), Is.calc(u), Ns.calc(u)), a }, Ds.prototype.copy = function(t) { As.prototype.copy.call(this, t), this.points = []; for (var e = 0, i = t.points.length; e < i; e++) { var n = t.points[e];
            this.points.push(n.clone()) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this }, Ds.prototype.toJSON = function() { var t = As.prototype.toJSON.call(this);
        t.points = []; for (var e = 0, i = this.points.length; e < i; e++) { var n = this.points[e];
            t.points.push(n.toArray()) } return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t }, Ds.prototype.fromJSON = function(t) { As.prototype.fromJSON.call(this, t), this.points = []; for (var e = 0, i = t.points.length; e < i; e++) { var n = t.points[e];
            this.points.push((new Ve).fromArray(n)) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this }, Fs.prototype = Object.create(As.prototype), Fs.prototype.constructor = Fs, Fs.prototype.isCubicBezierCurve = !0, Fs.prototype.getPoint = function(t, e) { var i = e || new Be,
            n = this.v0,
            r = this.v1,
            o = this.v2,
            a = this.v3; return i.set(Hs(t, n.x, r.x, o.x, a.x), Hs(t, n.y, r.y, o.y, a.y)), i }, Fs.prototype.copy = function(t) { return As.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this }, Fs.prototype.toJSON = function() { var t = As.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t }, Fs.prototype.fromJSON = function(t) { return As.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this }, Us.prototype = Object.create(As.prototype), Us.prototype.constructor = Us, Us.prototype.isCubicBezierCurve3 = !0, Us.prototype.getPoint = function(t, e) { var i = e || new Ve,
            n = this.v0,
            r = this.v1,
            o = this.v2,
            a = this.v3; return i.set(Hs(t, n.x, r.x, o.x, a.x), Hs(t, n.y, r.y, o.y, a.y), Hs(t, n.z, r.z, o.z, a.z)), i }, Us.prototype.copy = function(t) { return As.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this }, Us.prototype.toJSON = function() { var t = As.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t }, Us.prototype.fromJSON = function(t) { return As.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this }, Bs.prototype = Object.create(As.prototype), Bs.prototype.constructor = Bs, Bs.prototype.isLineCurve = !0, Bs.prototype.getPoint = function(t, e) { var i = e || new Be; return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i }, Bs.prototype.getPointAt = function(t, e) { return this.getPoint(t, e) }, Bs.prototype.getTangent = function() { return this.v2.clone().sub(this.v1).normalize() }, Bs.prototype.copy = function(t) { return As.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, Bs.prototype.toJSON = function() { var t = As.prototype.toJSON.call(this); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, Bs.prototype.fromJSON = function(t) { return As.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, zs.prototype = Object.create(As.prototype), zs.prototype.constructor = zs, zs.prototype.isLineCurve3 = !0, zs.prototype.getPoint = function(t, e) { var i = e || new Ve; return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i }, zs.prototype.getPointAt = function(t, e) { return this.getPoint(t, e) }, zs.prototype.copy = function(t) { return As.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, zs.prototype.toJSON = function() { var t = As.prototype.toJSON.call(this); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, zs.prototype.fromJSON = function(t) { return As.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, js.prototype = Object.create(As.prototype), js.prototype.constructor = js, js.prototype.isQuadraticBezierCurve = !0, js.prototype.getPoint = function(t, e) { var i = e || new Be,
            n = this.v0,
            r = this.v1,
            o = this.v2; return i.set(ks(t, n.x, r.x, o.x), ks(t, n.y, r.y, o.y)), i }, js.prototype.copy = function(t) { return As.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, js.prototype.toJSON = function() { var t = As.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, js.prototype.fromJSON = function(t) { return As.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, Vs.prototype = Object.create(As.prototype), Vs.prototype.constructor = Vs, Vs.prototype.isQuadraticBezierCurve3 = !0, Vs.prototype.getPoint = function(t, e) { var i = e || new Ve,
            n = this.v0,
            r = this.v1,
            o = this.v2; return i.set(ks(t, n.x, r.x, o.x), ks(t, n.y, r.y, o.y), ks(t, n.z, r.z, o.z)), i }, Vs.prototype.copy = function(t) { return As.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, Vs.prototype.toJSON = function() { var t = As.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, Vs.prototype.fromJSON = function(t) { return As.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, Ws.prototype = Object.create(As.prototype), Ws.prototype.constructor = Ws, Ws.prototype.isSplineCurve = !0, Ws.prototype.getPoint = function(t, e) { var i = e || new Be,
            n = this.points,
            r = (n.length - 1) * t,
            o = Math.floor(r),
            a = r - o,
            s = n[0 === o ? o : o - 1],
            h = n[o],
            c = n[o > n.length - 2 ? n.length - 1 : o + 1],
            l = n[o > n.length - 3 ? n.length - 1 : o + 2]; return i.set(Gs(a, s.x, h.x, c.x, l.x), Gs(a, s.y, h.y, c.y, l.y)), i }, Ws.prototype.copy = function(t) { As.prototype.copy.call(this, t), this.points = []; for (var e = 0, i = t.points.length; e < i; e++) { var n = t.points[e];
            this.points.push(n.clone()) } return this }, Ws.prototype.toJSON = function() { var t = As.prototype.toJSON.call(this);
        t.points = []; for (var e = 0, i = this.points.length; e < i; e++) { var n = this.points[e];
            t.points.push(n.toArray()) } return t }, Ws.prototype.fromJSON = function(t) { As.prototype.fromJSON.call(this, t), this.points = []; for (var e = 0, i = t.points.length; e < i; e++) { var n = t.points[e];
            this.points.push((new Be).fromArray(n)) } return this };
    var Xs = Object.freeze({ ArcCurve: Cs, CatmullRomCurve3: Ds, CubicBezierCurve: Fs, CubicBezierCurve3: Us, EllipseCurve: Ls, LineCurve: Bs, LineCurve3: zs, QuadraticBezierCurve: js, QuadraticBezierCurve3: Vs, SplineCurve: Ws });

    function Ys() { As.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1 }

    function qs(t) { Ys.call(this), this.type = "Path", this.currentPoint = new Be, t && this.setFromPoints(t) }

    function Zs(t) { qs.call(this, t), this.uuid = Ue.generateUUID(), this.type = "Shape", this.holes = [] }

    function Js(t, e) { Ci.call(this), this.type = "Light", this.color = new mi(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0 }

    function $s(t, e, i) { Js.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(Ci.DefaultUp), this.updateMatrix(), this.groundColor = new mi(e) }

    function Ks(t) { this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new Be(512, 512), this.map = null, this.matrix = new ze }

    function Qs() { Ks.call(this, new $r(50, 1, .5, 500)) }

    function th(t, e, i, n, r, o) { Js.call(this, t, e), this.type = "SpotLight", this.position.copy(Ci.DefaultUp), this.updateMatrix(), this.target = new Ci, Object.defineProperty(this, "power", { get: function() { return this.intensity * Math.PI }, set: function(t) { this.intensity = t / Math.PI } }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== o ? o : 1, this.shadow = new Qs }

    function eh(t, e, i, n) { Js.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", { get: function() { return 4 * this.intensity * Math.PI }, set: function(t) { this.intensity = t / (4 * Math.PI) } }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new Ks(new $r(90, 1, .5, 500)) }

    function ih(t, e, i, n, r, o) { Jr.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== t ? t : -1, this.right = void 0 !== e ? e : 1, this.top = void 0 !== i ? i : 1, this.bottom = void 0 !== n ? n : -1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix() }

    function nh() { Ks.call(this, new ih(-5, 5, 5, -5, .5, 500)) }

    function rh(t, e) { Js.call(this, t, e), this.type = "DirectionalLight", this.position.copy(Ci.DefaultUp), this.updateMatrix(), this.target = new Ci, this.shadow = new nh }

    function oh(t, e) { Js.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0 }

    function ah(t, e, i, n) { Js.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10 }

    function sh(t) { this.manager = void 0 !== t ? t : xs, this.textures = {} } Ys.prototype = Object.assign(Object.create(As.prototype), { constructor: Ys, add: function(t) { this.curves.push(t) }, closePath: function() { var t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new Bs(e, t)) }, getPoint: function(t) { for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) { if (i[n] >= e) { var r = i[n] - e,
                        o = this.curves[n],
                        a = o.getLength(),
                        s = 0 === a ? 0 : 1 - r / a; return o.getPointAt(s) } n++ } return null }, getLength: function() { var t = this.getCurveLengths(); return t[t.length - 1] }, updateArcLengths: function() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() }, getCurveLengths: function() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e); return this.cacheLengths = t, t }, getSpacedPoints: function(t) { void 0 === t && (t = 40); for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t)); return this.autoClose && e.push(e[0]), e }, getPoints: function(t) { t = t || 12; for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
                for (var o = r[n], a = o && o.isEllipseCurve ? 2 * t : o && (o.isLineCurve || o.isLineCurve3) ? 1 : o && o.isSplineCurve ? t * o.points.length : t, s = o.getPoints(a), h = 0; h < s.length; h++) { var c = s[h];
                    e && e.equals(c) || (i.push(c), e = c) }
            return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i }, copy: function(t) { As.prototype.copy.call(this, t), this.curves = []; for (var e = 0, i = t.curves.length; e < i; e++) { var n = t.curves[e];
                this.curves.push(n.clone()) } return this.autoClose = t.autoClose, this }, toJSON: function() { var t = As.prototype.toJSON.call(this);
            t.autoClose = this.autoClose, t.curves = []; for (var e = 0, i = this.curves.length; e < i; e++) { var n = this.curves[e];
                t.curves.push(n.toJSON()) } return t }, fromJSON: function(t) { As.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = []; for (var e = 0, i = t.curves.length; e < i; e++) { var n = t.curves[e];
                this.curves.push((new Xs[n.type]).fromJSON(n)) } return this } }), qs.prototype = Object.assign(Object.create(Ys.prototype), { constructor: qs, setFromPoints: function(t) { this.moveTo(t[0].x, t[0].y); for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y) }, moveTo: function(t, e) { this.currentPoint.set(t, e) }, lineTo: function(t, e) { var i = new Bs(this.currentPoint.clone(), new Be(t, e));
            this.curves.push(i), this.currentPoint.set(t, e) }, quadraticCurveTo: function(t, e, i, n) { var r = new js(this.currentPoint.clone(), new Be(t, e), new Be(i, n));
            this.curves.push(r), this.currentPoint.set(i, n) }, bezierCurveTo: function(t, e, i, n, r, o) { var a = new Fs(this.currentPoint.clone(), new Be(t, e), new Be(i, n), new Be(r, o));
            this.curves.push(a), this.currentPoint.set(r, o) }, splineThru: function(t) { var e = new Ws([this.currentPoint.clone()].concat(t));
            this.curves.push(e), this.currentPoint.copy(t[t.length - 1]) }, arc: function(t, e, i, n, r, o) { var a = this.currentPoint.x,
                s = this.currentPoint.y;
            this.absarc(t + a, e + s, i, n, r, o) }, absarc: function(t, e, i, n, r, o) { this.absellipse(t, e, i, i, n, r, o) }, ellipse: function(t, e, i, n, r, o, a, s) { var h = this.currentPoint.x,
                c = this.currentPoint.y;
            this.absellipse(t + h, e + c, i, n, r, o, a, s) }, absellipse: function(t, e, i, n, r, o, a, s) { var h = new Ls(t, e, i, n, r, o, a, s); if (this.curves.length > 0) { var c = h.getPoint(0);
                c.equals(this.currentPoint) || this.lineTo(c.x, c.y) } this.curves.push(h); var l = h.getPoint(1);
            this.currentPoint.copy(l) }, copy: function(t) { return Ys.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this }, toJSON: function() { var t = Ys.prototype.toJSON.call(this); return t.currentPoint = this.currentPoint.toArray(), t }, fromJSON: function(t) { return Ys.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this } }), Zs.prototype = Object.assign(Object.create(qs.prototype), { constructor: Zs, getPointsHoles: function(t) { for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t); return e }, extractPoints: function(t) { return { shape: this.getPoints(t), holes: this.getPointsHoles(t) } }, copy: function(t) { qs.prototype.copy.call(this, t), this.holes = []; for (var e = 0, i = t.holes.length; e < i; e++) { var n = t.holes[e];
                this.holes.push(n.clone()) } return this }, toJSON: function() { var t = qs.prototype.toJSON.call(this);
            t.uuid = this.uuid, t.holes = []; for (var e = 0, i = this.holes.length; e < i; e++) { var n = this.holes[e];
                t.holes.push(n.toJSON()) } return t }, fromJSON: function(t) { qs.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = []; for (var e = 0, i = t.holes.length; e < i; e++) { var n = t.holes[e];
                this.holes.push((new qs).fromJSON(n)) } return this } }), Js.prototype = Object.assign(Object.create(Ci.prototype), { constructor: Js, isLight: !0, copy: function(t) { return Ci.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this }, toJSON: function(t) { var e = Ci.prototype.toJSON.call(this, t); return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e } }), $s.prototype = Object.assign(Object.create(Js.prototype), { constructor: $s, isHemisphereLight: !0, copy: function(t) { return Js.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this } }), Object.assign(Ks.prototype, { copy: function(t) { return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this }, clone: function() { return (new this.constructor).copy(this) }, toJSON: function() { var t = {}; return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t } }), Qs.prototype = Object.assign(Object.create(Ks.prototype), { constructor: Qs, isSpotLightShadow: !0, update: function(t) { var e = this.camera,
                i = 2 * Ue.RAD2DEG * t.angle,
                n = this.mapSize.width / this.mapSize.height,
                r = t.distance || e.far;
            i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix()) } }), th.prototype = Object.assign(Object.create(Js.prototype), { constructor: th, isSpotLight: !0, copy: function(t) { return Js.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } }), eh.prototype = Object.assign(Object.create(Js.prototype), { constructor: eh, isPointLight: !0, copy: function(t) { return Js.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this } }), ih.prototype = Object.assign(Object.create(Jr.prototype), { constructor: ih, isOrthographicCamera: !0, copy: function(t, e) { return Jr.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this }, setViewOffset: function(t, e, i, n, r, o) { null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() }, clearViewOffset: function() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() }, updateProjectionMatrix: function() { var t = (this.right - this.left) / (2 * this.zoom),
                e = (this.top - this.bottom) / (2 * this.zoom),
                i = (this.right + this.left) / 2,
                n = (this.top + this.bottom) / 2,
                r = i - t,
                o = i + t,
                a = n + e,
                s = n - e; if (null !== this.view && this.view.enabled) { var h = this.zoom / (this.view.width / this.view.fullWidth),
                    c = this.zoom / (this.view.height / this.view.fullHeight),
                    l = (this.right - this.left) / this.view.width,
                    u = (this.top - this.bottom) / this.view.height;
                o = (r += l * (this.view.offsetX / h)) + l * (this.view.width / h), s = (a -= u * (this.view.offsetY / c)) - u * (this.view.height / c) } this.projectionMatrix.makeOrthographic(r, o, a, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix) }, toJSON: function(t) { var e = Ci.prototype.toJSON.call(this, t); return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e } }), nh.prototype = Object.assign(Object.create(Ks.prototype), { constructor: nh }), rh.prototype = Object.assign(Object.create(Js.prototype), { constructor: rh, isDirectionalLight: !0, copy: function(t) { return Js.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } }), oh.prototype = Object.assign(Object.create(Js.prototype), { constructor: oh, isAmbientLight: !0 }), ah.prototype = Object.assign(Object.create(Js.prototype), { constructor: ah, isRectAreaLight: !0, copy: function(t) { return Js.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this }, toJSON: function(t) { var e = Js.prototype.toJSON.call(this, t); return e.object.width = this.width, e.object.height = this.height, e } }), Object.assign(sh.prototype, { load: function(t, e, i, n) { var r = this,
                o = new ws(r.manager);
            o.setPath(r.path), o.load(t, function(t) { e(r.parse(JSON.parse(t))) }, i, n) }, parse: function(t) { var e = this.textures;

            function i(t) { return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t] } var n = new is[t.type]; if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && n.specular.setHex(t.specular), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearCoat && (n.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (n.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.combine && (n.combine = t.combine), void 0 !== t.side && (n.side = t.side), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (n.skinning = t.skinning), void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.uniforms)
                for (var r in t.uniforms) { var o = t.uniforms[r]; switch (n.uniforms[r] = {}, o.type) {
                        case "t":
                            n.uniforms[r].value = i(o.value); break;
                        case "c":
                            n.uniforms[r].value = (new mi).setHex(o.value); break;
                        case "v2":
                            n.uniforms[r].value = (new Be).fromArray(o.value); break;
                        case "v3":
                            n.uniforms[r].value = (new Ve).fromArray(o.value); break;
                        case "v4":
                            n.uniforms[r].value = (new ti).fromArray(o.value); break;
                        case "m4":
                            n.uniforms[r].value = (new ze).fromArray(o.value); break;
                        default:
                            n.uniforms[r].value = o.value } }
            if (void 0 !== t.defines && (n.defines = t.defines), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = i(t.map)), void 0 !== t.alphaMap && (n.alphaMap = i(t.alphaMap), n.transparent = !0), void 0 !== t.bumpMap && (n.bumpMap = i(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = i(t.normalMap)), void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType), void 0 !== t.normalScale) { var a = t.normalScale;!1 === Array.isArray(a) && (a = [a, a]), n.normalScale = (new Be).fromArray(a) } return void 0 !== t.displacementMap && (n.displacementMap = i(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = i(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = i(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = i(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = i(t.specularMap)), void 0 !== t.envMap && (n.envMap = i(t.envMap)), void 0 !== t.envMapIntensity && (n.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.lightMap && (n.lightMap = i(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = i(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = i(t.gradientMap)), n }, setPath: function(t) { return this.path = t, this }, setTextures: function(t) { return this.textures = t, this } });
    var hh = function(t) { var e = t.lastIndexOf("/"); return -1 === e ? "./" : t.substr(0, e + 1) };

    function ch(t) { this.manager = void 0 !== t ? t : xs } Object.assign(ch.prototype, { load: function(t, e, i, n) { var r = this,
                o = new ws(r.manager);
            o.setPath(r.path), o.load(t, function(t) { e(r.parse(JSON.parse(t))) }, i, n) }, parse: function(t) { var e = new Yi,
                i = t.data.index; if (void 0 !== i) { var n = new lh[i.type](i.array);
                e.setIndex(new Ni(n, 1)) } var r = t.data.attributes; for (var o in r) { var a = r[o];
                n = new lh[a.type](a.array);
                e.addAttribute(o, new Ni(n, a.itemSize, a.normalized)) } var s = t.data.groups || t.data.drawcalls || t.data.offsets; if (void 0 !== s)
                for (var h = 0, c = s.length; h !== c; ++h) { var l = s[h];
                    e.addGroup(l.start, l.count, l.materialIndex) }
            var u = t.data.boundingSphere; if (void 0 !== u) { var p = new Ve;
                void 0 !== u.center && p.fromArray(u.center), e.boundingSphere = new oi(p, u.radius) } return t.name && (e.name = t.name), t.userData && (e.userData = t.userData), e }, setPath: function(t) { return this.path = t, this } });
    var lh = { Int8Array: Int8Array, Uint8Array: Uint8Array, Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array, Int16Array: Int16Array, Uint16Array: Uint16Array, Int32Array: Int32Array, Uint32Array: Uint32Array, Float32Array: Float32Array, Float64Array: Float64Array };

    function uh(t) { this.manager = void 0 !== t ? t : xs, this.resourcePath = "" } Object.assign(uh.prototype, { crossOrigin: "anonymous", load: function(t, e, i, n) { var r = this,
                o = void 0 === this.path ? hh(t) : this.path;
            this.resourcePath = this.resourcePath || o; var a = new ws(r.manager);
            a.setPath(this.path), a.load(t, function(i) { var o = null; try { o = JSON.parse(i) } catch (e) { return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message) } var a = o.metadata;
                void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(o, e) : console.error("THREE.ObjectLoader: Can't load " + t) }, i, n) }, setPath: function(t) { return this.path = t, this }, setResourcePath: function(t) { return this.resourcePath = t, this }, setCrossOrigin: function(t) { return this.crossOrigin = t, this }, parse: function(t, e) { var i = this.parseShape(t.shapes),
                n = this.parseGeometries(t.geometries, i),
                r = this.parseImages(t.images, function() { void 0 !== e && e(s) }),
                o = this.parseTextures(t.textures, r),
                a = this.parseMaterials(t.materials, o),
                s = this.parseObject(t.object, n, a); return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s }, parseShape: function(t) { var e = {}; if (void 0 !== t)
                for (var i = 0, n = t.length; i < n; i++) { var r = (new Zs).fromJSON(t[i]);
                    e[r.uuid] = r }
            return e }, parseGeometries: function(t, e) { var i = {}; if (void 0 !== t)
                for (var n = new ch, r = 0, o = t.length; r < o; r++) { var a, s = t[r]; switch (s.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            a = new Wa[s.type](s.width, s.height, s.widthSegments, s.heightSegments); break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            a = new Wa[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments); break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            a = new Wa[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength); break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            a = new Wa[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength); break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            a = new Wa[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength); break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            a = new Wa[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength); break;
                        case "DodecahedronGeometry":
                        case "DodecahedronBufferGeometry":
                        case "IcosahedronGeometry":
                        case "IcosahedronBufferGeometry":
                        case "OctahedronGeometry":
                        case "OctahedronBufferGeometry":
                        case "TetrahedronGeometry":
                        case "TetrahedronBufferGeometry":
                            a = new Wa[s.type](s.radius, s.detail); break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            a = new Wa[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength); break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            a = new Wa[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc); break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            a = new Wa[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q); break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            a = new Wa[s.type](s.points, s.segments, s.phiStart, s.phiLength); break;
                        case "PolyhedronGeometry":
                        case "PolyhedronBufferGeometry":
                            a = new Wa[s.type](s.vertices, s.indices, s.radius, s.details); break;
                        case "ShapeGeometry":
                        case "ShapeBufferGeometry":
                            for (var h = [], c = 0, l = s.shapes.length; c < l; c++) { var u = e[s.shapes[c]];
                                h.push(u) } a = new Wa[s.type](h, s.curveSegments); break;
                        case "ExtrudeGeometry":
                        case "ExtrudeBufferGeometry":
                            for (h = [], c = 0, l = s.shapes.length; c < l; c++) { u = e[s.shapes[c]];
                                h.push(u) } var p = s.options.extrudePath;
                            void 0 !== p && (s.options.extrudePath = (new Xs[p.type]).fromJSON(p)), a = new Wa[s.type](h, s.options); break;
                        case "BufferGeometry":
                            a = n.parse(s); break;
                        case "Geometry":
                            if ("THREE" in window && "LegacyJSONLoader" in THREE) a = (new THREE.LegacyJSONLoader).parse(s, this.resourcePath).geometry;
                            else console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".'); break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"'); continue } a.uuid = s.uuid, void 0 !== s.name && (a.name = s.name), !0 === a.isBufferGeometry && void 0 !== s.userData && (a.userData = s.userData), i[s.uuid] = a }
            return i }, parseMaterials: function(t, e) { var i = {},
                n = {}; if (void 0 !== t) { var r = new sh;
                r.setTextures(e); for (var o = 0, a = t.length; o < a; o++) { var s = t[o]; if ("MultiMaterial" === s.type) { for (var h = [], c = 0; c < s.materials.length; c++) { var l = s.materials[c];
                            void 0 === i[l.uuid] && (i[l.uuid] = r.parse(l)), h.push(i[l.uuid]) } n[s.uuid] = h } else n[s.uuid] = r.parse(s), i[s.uuid] = n[s.uuid] } } return n }, parseAnimations: function(t) { for (var e = [], i = 0; i < t.length; i++) { var n = t[i],
                    r = gs.parse(n);
                void 0 !== n.uuid && (r.uuid = n.uuid), e.push(r) } return e }, parseImages: function(t, e) { var i = this,
                n = {};

            function r(t) { return i.manager.itemStart(t), o.load(t, function() { i.manager.itemEnd(t) }, void 0, function() { i.manager.itemError(t), i.manager.itemEnd(t) }) } if (void 0 !== t && t.length > 0) { var o = new Es(new _s(e));
                o.setCrossOrigin(this.crossOrigin); for (var a = 0, s = t.length; a < s; a++) { var h = t[a],
                        c = h.url; if (Array.isArray(c)) { n[h.uuid] = []; for (var l = 0, u = c.length; l < u; l++) { var p = c[l],
                                f = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : i.resourcePath + p;
                            n[h.uuid].push(r(f)) } } else { f = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : i.resourcePath + h.url;
                        n[h.uuid] = r(f) } } } return n }, parseTextures: function(t, e) {
            function i(t, e) { return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]) } var n = {}; if (void 0 !== t)
                for (var r = 0, o = t.length; r < o; r++) { var a, s = t[r];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (a = Array.isArray(e[s.image]) ? new Cn(e[s.image]) : new Qe(e[s.image])).needsUpdate = !0, a.uuid = s.uuid, void 0 !== s.name && (a.name = s.name), void 0 !== s.mapping && (a.mapping = i(s.mapping, vh)), void 0 !== s.offset && a.offset.fromArray(s.offset), void 0 !== s.repeat && a.repeat.fromArray(s.repeat), void 0 !== s.center && a.center.fromArray(s.center), void 0 !== s.rotation && (a.rotation = s.rotation), void 0 !== s.wrap && (a.wrapS = i(s.wrap[0], yh), a.wrapT = i(s.wrap[1], yh)), void 0 !== s.format && (a.format = s.format), void 0 !== s.minFilter && (a.minFilter = i(s.minFilter, _h)), void 0 !== s.magFilter && (a.magFilter = i(s.magFilter, _h)), void 0 !== s.anisotropy && (a.anisotropy = s.anisotropy), void 0 !== s.flipY && (a.flipY = s.flipY), n[s.uuid] = a }
            return n }, parseObject: function(t, e, i) { var n;

            function r(t) { return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t] }

            function o(t) { if (void 0 !== t) { if (Array.isArray(t)) { for (var e = [], n = 0, r = t.length; n < r; n++) { var o = t[n];
                            void 0 === i[o] && console.warn("THREE.ObjectLoader: Undefined material", o), e.push(i[o]) } return e } return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t), i[t] } } switch (t.type) {
                case "Scene":
                    n = new fo, void 0 !== t.background && Number.isInteger(t.background) && (n.background = new mi(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? n.fog = new po(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (n.fog = new uo(t.fog.color, t.fog.density))); break;
                case "PerspectiveCamera":
                    n = new $r(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (n.focus = t.focus), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.filmGauge && (n.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (n.filmOffset = t.filmOffset), void 0 !== t.view && (n.view = Object.assign({}, t.view)); break;
                case "OrthographicCamera":
                    n = new ih(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.view && (n.view = Object.assign({}, t.view)); break;
                case "AmbientLight":
                    n = new oh(t.color, t.intensity); break;
                case "DirectionalLight":
                    n = new rh(t.color, t.intensity); break;
                case "PointLight":
                    n = new eh(t.color, t.intensity, t.distance, t.decay); break;
                case "RectAreaLight":
                    n = new ah(t.color, t.intensity, t.width, t.height); break;
                case "SpotLight":
                    n = new th(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay); break;
                case "HemisphereLight":
                    n = new $s(t.color, t.groundColor, t.intensity); break;
                case "SkinnedMesh":
                    console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                case "Mesh":
                    var a = r(t.geometry),
                        s = o(t.material);
                    n = a.bones && a.bones.length > 0 ? new xo(a, s) : new vn(a, s); break;
                case "LOD":
                    n = new _o; break;
                case "Line":
                    n = new Eo(r(t.geometry), o(t.material), t.mode); break;
                case "LineLoop":
                    n = new Mo(r(t.geometry), o(t.material)); break;
                case "LineSegments":
                    n = new So(r(t.geometry), o(t.material)); break;
                case "PointCloud":
                case "Points":
                    n = new Lo(r(t.geometry), o(t.material)); break;
                case "Sprite":
                    n = new yo(o(t.material)); break;
                case "Group":
                    n = new Zr; break;
                default:
                    n = new Ci } if (n.uuid = t.uuid, void 0 !== t.name && (n.name = t.name), void 0 !== t.matrix ? (n.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (n.matrixAutoUpdate = t.matrixAutoUpdate), n.matrixAutoUpdate && n.matrix.decompose(n.position, n.quaternion, n.scale)) : (void 0 !== t.position && n.position.fromArray(t.position), void 0 !== t.rotation && n.rotation.fromArray(t.rotation), void 0 !== t.quaternion && n.quaternion.fromArray(t.quaternion), void 0 !== t.scale && n.scale.fromArray(t.scale)), void 0 !== t.castShadow && (n.castShadow = t.castShadow), void 0 !== t.receiveShadow && (n.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (n.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (n.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && n.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (n.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.frustumCulled && (n.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (n.renderOrder = t.renderOrder), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.layers && (n.layers.mask = t.layers), void 0 !== t.children)
                for (var h = t.children, c = 0; c < h.length; c++) n.add(this.parseObject(h[c], e, i)); if ("LOD" === t.type)
                for (var l = t.levels, u = 0; u < l.length; u++) { var p = l[u],
                        f = n.getObjectByProperty("uuid", p.object);
                    void 0 !== f && n.addLevel(f, p.distance) }
            return n } });
    var ph, fh, dh, mh, gh, vh = { UVMapping: 300, CubeReflectionMapping: _t, CubeRefractionMapping: xt, EquirectangularReflectionMapping: bt, EquirectangularRefractionMapping: wt, SphericalReflectionMapping: Tt, CubeUVReflectionMapping: Et, CubeUVRefractionMapping: St },
        yh = { RepeatWrapping: Mt, ClampToEdgeWrapping: At, MirroredRepeatWrapping: Lt },
        _h = { NearestFilter: Ct, NearestMipMapNearestFilter: Ot, NearestMipMapLinearFilter: Pt, LinearFilter: Rt, LinearMipMapNearestFilter: It, LinearMipMapLinearFilter: Nt };

    function xh(t) { "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== t ? t : xs, this.options = void 0 }

    function bh() { this.type = "ShapePath", this.color = new mi, this.subPaths = [], this.currentPath = null }

    function wh(t) { this.type = "Font", this.data = t }

    function Th(t, e, i, n, r) { var o = r.glyphs[t] || r.glyphs["?"]; if (o) { var a, s, h, c, l, u, p, f, d = new bh; if (o.o)
                for (var m = o._cachedOutline || (o._cachedOutline = o.o.split(" ")), g = 0, v = m.length; g < v;) { switch (m[g++]) {
                        case "m":
                            a = m[g++] * e + i, s = m[g++] * e + n, d.moveTo(a, s); break;
                        case "l":
                            a = m[g++] * e + i, s = m[g++] * e + n, d.lineTo(a, s); break;
                        case "q":
                            h = m[g++] * e + i, c = m[g++] * e + n, l = m[g++] * e + i, u = m[g++] * e + n, d.quadraticCurveTo(l, u, h, c); break;
                        case "b":
                            h = m[g++] * e + i, c = m[g++] * e + n, l = m[g++] * e + i, u = m[g++] * e + n, p = m[g++] * e + i, f = m[g++] * e + n, d.bezierCurveTo(l, u, p, f, h, c) } }
            return { offsetX: o.ha * e, path: d } } }

    function Eh() {} xh.prototype = { constructor: xh, setOptions: function(t) { return this.options = t, this }, load: function(t, e, i, n) { void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); var r = this,
                o = ys.get(t); if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() { e && e(o), r.manager.itemEnd(t) }, 0), o;
            fetch(t).then(function(t) { return t.blob() }).then(function(t) { return createImageBitmap(t, r.options) }).then(function(i) { ys.add(t, i), e && e(i), r.manager.itemEnd(t) }).catch(function(e) { n && n(e), r.manager.itemError(t), r.manager.itemEnd(t) }) }, setCrossOrigin: function() { return this }, setPath: function(t) { return this.path = t, this } }, Object.assign(bh.prototype, { moveTo: function(t, e) { this.currentPath = new qs, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e) }, lineTo: function(t, e) { this.currentPath.lineTo(t, e) }, quadraticCurveTo: function(t, e, i, n) { this.currentPath.quadraticCurveTo(t, e, i, n) }, bezierCurveTo: function(t, e, i, n, r, o) { this.currentPath.bezierCurveTo(t, e, i, n, r, o) }, splineThru: function(t) { this.currentPath.splineThru(t) }, toShapes: function(t, e) {
            function i(t) { for (var e = [], i = 0, n = t.length; i < n; i++) { var r = t[i],
                        o = new Zs;
                    o.curves = r.curves, e.push(o) } return e }

            function n(t, e) { for (var i = e.length, n = !1, r = i - 1, o = 0; o < i; r = o++) { var a = e[r],
                        s = e[o],
                        h = s.x - a.x,
                        c = s.y - a.y; if (Math.abs(c) > Number.EPSILON) { if (c < 0 && (a = e[o], h = -h, s = e[r], c = -c), t.y < a.y || t.y > s.y) continue; if (t.y === a.y) { if (t.x === a.x) return !0 } else { var l = c * (t.x - a.x) - h * (t.y - a.y); if (0 === l) return !0; if (l < 0) continue;
                            n = !n } } else { if (t.y !== a.y) continue; if (s.x <= t.x && t.x <= a.x || a.x <= t.x && t.x <= s.x) return !0 } } return n } var r = xa.isClockWise,
                o = this.subPaths; if (0 === o.length) return []; if (!0 === e) return i(o); var a, s, h, c = []; if (1 === o.length) return s = o[0], (h = new Zs).curves = s.curves, c.push(h), c; var l = !r(o[0].getPoints());
            l = t ? !l : l; var u, p, f = [],
                d = [],
                m = [],
                g = 0;
            d[g] = void 0, m[g] = []; for (var v = 0, y = o.length; v < y; v++) a = r(u = (s = o[v]).getPoints()), (a = t ? !a : a) ? (!l && d[g] && g++, d[g] = { s: new Zs, p: u }, d[g].s.curves = s.curves, l && g++, m[g] = []) : m[g].push({ h: s, p: u[0] }); if (!d[0]) return i(o); if (d.length > 1) { for (var _ = !1, x = [], b = 0, w = d.length; b < w; b++) f[b] = []; for (b = 0, w = d.length; b < w; b++)
                    for (var T = m[b], E = 0; E < T.length; E++) { for (var S = T[E], M = !0, A = 0; A < d.length; A++) n(S.p, d[A].p) && (b !== A && x.push({ froms: b, tos: A, hole: E }), M ? (M = !1, f[A].push(S)) : _ = !0);
                        M && f[b].push(S) } x.length > 0 && (_ || (m = f)) } v = 0; for (var L = d.length; v < L; v++) { h = d[v].s, c.push(h); for (var C = 0, O = (p = m[v]).length; C < O; C++) h.holes.push(p[C].h) } return c } }), Object.assign(wh.prototype, { isFont: !0, generateShapes: function(t, e) { void 0 === e && (e = 100); for (var i = [], n = function(t, e, i) { for (var n = Array.from ? Array.from(t) : String(t).split(""), r = e / i.resolution, o = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r, a = [], s = 0, h = 0, c = 0; c < n.length; c++) { var l = n[c]; if ("\n" === l) s = 0, h -= o;
                        else { var u = Th(l, r, s, h, i);
                            s += u.offsetX, a.push(u.path) } } return a }(t, e, this.data), r = 0, o = n.length; r < o; r++) Array.prototype.push.apply(i, n[r].toShapes()); return i } }), Object.assign(function(t) { this.manager = void 0 !== t ? t : xs }.prototype, { load: function(t, e, i, n) { var r = this,
                o = new ws(this.manager);
            o.setPath(this.path), o.load(t, function(t) { var i; try { i = JSON.parse(t) } catch (e) { console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(t.substring(65, t.length - 2)) } var n = r.parse(i);
                e && e(n) }, i, n) }, parse: function(t) { return new wh(t) }, setPath: function(t) { return this.path = t, this } }), Eh.Handlers = { handlers: [], add: function(t, e) { this.handlers.push(t, e) }, get: function(t) { for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) { var r = e[i],
                    o = e[i + 1]; if (r.test(t)) return o } return null } }, Object.assign(Eh.prototype, { crossOrigin: "anonymous", onLoadStart: function() {}, onLoadProgress: function() {}, onLoadComplete: function() {}, initMaterials: function(t, e, i) { for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i); return n }, createMaterial: (ph = { NoBlending: N, NormalBlending: D, AdditiveBlending: G, SubtractiveBlending: k, MultiplyBlending: H, CustomBlending: F }, fh = new mi, dh = new Ms, mh = new sh, function(t, e, i) { var n = {};

            function r(t, r, o, a, s) { var h, c = e + t,
                    l = Eh.Handlers.get(c);
                null !== l ? h = l.load(c) : (dh.setCrossOrigin(i), h = dh.load(c)), void 0 !== r && (h.repeat.fromArray(r), 1 !== r[0] && (h.wrapS = Mt), 1 !== r[1] && (h.wrapT = Mt)), void 0 !== o && h.offset.fromArray(o), void 0 !== a && ("repeat" === a[0] && (h.wrapS = Mt), "mirror" === a[0] && (h.wrapS = Lt), "repeat" === a[1] && (h.wrapT = Mt), "mirror" === a[1] && (h.wrapT = Lt)), void 0 !== s && (h.anisotropy = s); var u = Ue.generateUUID(); return n[u] = h, u } var o = { uuid: Ue.generateUUID(), type: "MeshLambertMaterial" }; for (var a in t) { var s = t[a]; switch (a) {
                    case "DbgColor":
                    case "DbgIndex":
                    case "opticalDensity":
                    case "illumination":
                        break;
                    case "DbgName":
                        o.name = s; break;
                    case "blending":
                        o.blending = ph[s]; break;
                    case "colorAmbient":
                    case "mapAmbient":
                        console.warn("THREE.Loader.createMaterial:", a, "is no longer supported."); break;
                    case "colorDiffuse":
                        o.color = fh.fromArray(s).getHex(); break;
                    case "colorSpecular":
                        o.specular = fh.fromArray(s).getHex(); break;
                    case "colorEmissive":
                        o.emissive = fh.fromArray(s).getHex(); break;
                    case "specularCoef":
                        o.shininess = s; break;
                    case "shading":
                        "basic" === s.toLowerCase() && (o.type = "MeshBasicMaterial"), "phong" === s.toLowerCase() && (o.type = "MeshPhongMaterial"), "standard" === s.toLowerCase() && (o.type = "MeshStandardMaterial"); break;
                    case "mapDiffuse":
                        o.map = r(s, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy); break;
                    case "mapDiffuseRepeat":
                    case "mapDiffuseOffset":
                    case "mapDiffuseWrap":
                    case "mapDiffuseAnisotropy":
                        break;
                    case "mapEmissive":
                        o.emissiveMap = r(s, t.mapEmissiveRepeat, t.mapEmissiveOffset, t.mapEmissiveWrap, t.mapEmissiveAnisotropy); break;
                    case "mapEmissiveRepeat":
                    case "mapEmissiveOffset":
                    case "mapEmissiveWrap":
                    case "mapEmissiveAnisotropy":
                        break;
                    case "mapLight":
                        o.lightMap = r(s, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy); break;
                    case "mapLightRepeat":
                    case "mapLightOffset":
                    case "mapLightWrap":
                    case "mapLightAnisotropy":
                        break;
                    case "mapAO":
                        o.aoMap = r(s, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy); break;
                    case "mapAORepeat":
                    case "mapAOOffset":
                    case "mapAOWrap":
                    case "mapAOAnisotropy":
                        break;
                    case "mapBump":
                        o.bumpMap = r(s, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy); break;
                    case "mapBumpScale":
                        o.bumpScale = s; break;
                    case "mapBumpRepeat":
                    case "mapBumpOffset":
                    case "mapBumpWrap":
                    case "mapBumpAnisotropy":
                        break;
                    case "mapNormal":
                        o.normalMap = r(s, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy); break;
                    case "mapNormalFactor":
                        o.normalScale = s; break;
                    case "mapNormalRepeat":
                    case "mapNormalOffset":
                    case "mapNormalWrap":
                    case "mapNormalAnisotropy":
                        break;
                    case "mapSpecular":
                        o.specularMap = r(s, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy); break;
                    case "mapSpecularRepeat":
                    case "mapSpecularOffset":
                    case "mapSpecularWrap":
                    case "mapSpecularAnisotropy":
                        break;
                    case "mapMetalness":
                        o.metalnessMap = r(s, t.mapMetalnessRepeat, t.mapMetalnessOffset, t.mapMetalnessWrap, t.mapMetalnessAnisotropy); break;
                    case "mapMetalnessRepeat":
                    case "mapMetalnessOffset":
                    case "mapMetalnessWrap":
                    case "mapMetalnessAnisotropy":
                        break;
                    case "mapRoughness":
                        o.roughnessMap = r(s, t.mapRoughnessRepeat, t.mapRoughnessOffset, t.mapRoughnessWrap, t.mapRoughnessAnisotropy); break;
                    case "mapRoughnessRepeat":
                    case "mapRoughnessOffset":
                    case "mapRoughnessWrap":
                    case "mapRoughnessAnisotropy":
                        break;
                    case "mapAlpha":
                        o.alphaMap = r(s, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy); break;
                    case "mapAlphaRepeat":
                    case "mapAlphaOffset":
                    case "mapAlphaWrap":
                    case "mapAlphaAnisotropy":
                        break;
                    case "flipSided":
                        o.side = C; break;
                    case "doubleSided":
                        o.side = O; break;
                    case "transparency":
                        console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), o.opacity = s; break;
                    case "depthTest":
                    case "depthWrite":
                    case "colorWrite":
                    case "opacity":
                    case "reflectivity":
                    case "transparent":
                    case "visible":
                    case "wireframe":
                        o[a] = s; break;
                    case "vertexColors":
                        !0 === s && (o.vertexColors = I), "face" === s && (o.vertexColors = R); break;
                    default:
                        console.error("THREE.Loader.createMaterial: Unsupported", a, s) } } return "MeshBasicMaterial" === o.type && delete o.emissive, "MeshPhongMaterial" !== o.type && delete o.specular, o.opacity < 1 && (o.transparent = !0), mh.setTextures(n), mh.parse(o) }) });
    var Sh, Mh, Ah, Lh, Ch, Oh, Ph, Rh, Ih, Nh, Dh = { getContext: function() { return void 0 === gh && (gh = new(window.AudioContext || window.webkitAudioContext)), gh }, setContext: function(t) { gh = t } };

    function Gh(t) { this.manager = void 0 !== t ? t : xs }

    function kh(t, e, i, n) { Ci.call(this), this.type = "CubeCamera"; var r = new $r(90, 1, t, e);
        r.up.set(0, -1, 0), r.lookAt(new Ve(1, 0, 0)), this.add(r); var o = new $r(90, 1, t, e);
        o.up.set(0, -1, 0), o.lookAt(new Ve(-1, 0, 0)), this.add(o); var a = new $r(90, 1, t, e);
        a.up.set(0, 0, 1), a.lookAt(new Ve(0, 1, 0)), this.add(a); var s = new $r(90, 1, t, e);
        s.up.set(0, 0, -1), s.lookAt(new Ve(0, -1, 0)), this.add(s); var h = new $r(90, 1, t, e);
        h.up.set(0, -1, 0), h.lookAt(new Ve(0, 0, 1)), this.add(h); var c = new $r(90, 1, t, e);
        c.up.set(0, -1, 0), c.lookAt(new Ve(0, 0, -1)), this.add(c), n = n || { format: qt, magFilter: Rt, minFilter: Rt }, this.renderTarget = new ii(i, i, n), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) { null === this.parent && this.updateMatrixWorld(); var i = this.renderTarget,
                n = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, r, i), i.activeCubeFace = 1, t.render(e, o, i), i.activeCubeFace = 2, t.render(e, a, i), i.activeCubeFace = 3, t.render(e, s, i), i.activeCubeFace = 4, t.render(e, h, i), i.texture.generateMipmaps = n, i.activeCubeFace = 5, t.render(e, c, i), t.setRenderTarget(null) }, this.clear = function(t, e, i, n) { for (var r = this.renderTarget, o = 0; o < 6; o++) r.activeCubeFace = o, t.setRenderTarget(r), t.clear(e, i, n);
            t.setRenderTarget(null) } }

    function Hh(t) { this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1 }

    function Fh() { Ci.call(this), this.type = "AudioListener", this.context = Dh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0 }

    function Uh(t) { Ci.call(this), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = [] }

    function Bh(t) { Uh.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain) }

    function zh(t, e) { this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser) }

    function jh(t, e, i) { this.binding = t, this.valueSize = i; var n, r = Float64Array; switch (e) {
            case "quaternion":
                n = this._slerp; break;
            case "string":
            case "bool":
                r = Array, n = this._select; break;
            default:
                n = this._lerp } this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0 } Object.assign(Gh.prototype, { load: function(t, e, i, n) { var r = new ws(this.manager);
            r.setResponseType("arraybuffer"), r.setPath(this.path), r.load(t, function(t) { var i = t.slice(0);
                Dh.getContext().decodeAudioData(i, function(t) { e(t) }) }, i, n) }, setPath: function(t) { return this.path = t, this } }), Object.assign(function() { this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new $r, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new $r, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1 }.prototype, { update: (Ih = new ze, Nh = new ze, function(t) { if (Sh !== this || Mh !== t.focus || Ah !== t.fov || Lh !== t.aspect * this.aspect || Ch !== t.near || Oh !== t.far || Ph !== t.zoom || Rh !== this.eyeSep) { Sh = this, Mh = t.focus, Ah = t.fov, Lh = t.aspect * this.aspect, Ch = t.near, Oh = t.far, Ph = t.zoom; var e, i, n = t.projectionMatrix.clone(),
                    r = (Rh = this.eyeSep / 2) * Ch / Mh,
                    o = Ch * Math.tan(Ue.DEG2RAD * Ah * .5) / Ph;
                Nh.elements[12] = -Rh, Ih.elements[12] = Rh, e = -o * Lh + r, i = o * Lh + r, n.elements[0] = 2 * Ch / (i - e), n.elements[8] = (i + e) / (i - e), this.cameraL.projectionMatrix.copy(n), e = -o * Lh - r, i = o * Lh - r, n.elements[0] = 2 * Ch / (i - e), n.elements[8] = (i + e) / (i - e), this.cameraR.projectionMatrix.copy(n) } this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Nh), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Ih) }) }), kh.prototype = Object.create(Ci.prototype), kh.prototype.constructor = kh, Object.assign(Hh.prototype, { start: function() { this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0 }, stop: function() { this.getElapsedTime(), this.running = !1, this.autoStart = !1 }, getElapsedTime: function() { return this.getDelta(), this.elapsedTime }, getDelta: function() { var t = 0; if (this.autoStart && !this.running) return this.start(), 0; if (this.running) { var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t } return t } }), Fh.prototype = Object.assign(Object.create(Ci.prototype), { constructor: Fh, getInput: function() { return this.gain }, removeFilter: function() { return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this }, getFilter: function() { return this.filter }, setFilter: function(t) { return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this }, getMasterVolume: function() { return this.gain.gain.value }, setMasterVolume: function(t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this }, updateMatrixWorld: function() { var t = new Ve,
                e = new je,
                i = new Ve,
                n = new Ve,
                r = new Hh; return function(o) { Ci.prototype.updateMatrixWorld.call(this, o); var a = this.context.listener,
                    s = this.up; if (this.timeDelta = r.getDelta(), this.matrixWorld.decompose(t, e, i), n.set(0, 0, -1).applyQuaternion(e), a.positionX) { var h = this.context.currentTime + this.timeDelta;
                    a.positionX.linearRampToValueAtTime(t.x, h), a.positionY.linearRampToValueAtTime(t.y, h), a.positionZ.linearRampToValueAtTime(t.z, h), a.forwardX.linearRampToValueAtTime(n.x, h), a.forwardY.linearRampToValueAtTime(n.y, h), a.forwardZ.linearRampToValueAtTime(n.z, h), a.upX.linearRampToValueAtTime(s.x, h), a.upY.linearRampToValueAtTime(s.y, h), a.upZ.linearRampToValueAtTime(s.z, h) } else a.setPosition(t.x, t.y, t.z), a.setOrientation(n.x, n.y, n.z, s.x, s.y, s.z) } }() }), Uh.prototype = Object.assign(Object.create(Ci.prototype), { constructor: Uh, getOutput: function() { return this.gain }, setNodeSource: function(t) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this }, setMediaElementSource: function(t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this }, setBuffer: function(t) { return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this }, play: function() { if (!0 !== this.isPlaying) { if (!1 !== this.hasPlaybackControl) { var t = this.context.createBufferSource(); return t.buffer = this.buffer, t.detune.value = this.detune, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.connect() } console.warn("THREE.Audio: this Audio has no playback control.") } else console.warn("THREE.Audio: Audio is already playing.") }, pause: function() { if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.") }, stop: function() { if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.") }, connect: function() { if (this.filters.length > 0) { this.source.connect(this.filters[0]); for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput()) } else this.source.connect(this.getOutput()); return this }, disconnect: function() { if (this.filters.length > 0) { this.source.disconnect(this.filters[0]); for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput()) } else this.source.disconnect(this.getOutput()); return this }, getFilters: function() { return this.filters }, setFilters: function(t) { return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this }, setDetune: function(t) { return this.detune = t, !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this }, getDetune: function() { return this.detune }, getFilter: function() { return this.getFilters()[0] }, setFilter: function(t) { return this.setFilters(t ? [t] : []) }, setPlaybackRate: function(t) { if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.") }, getPlaybackRate: function() { return this.playbackRate }, onEnded: function() { this.isPlaying = !1 }, getLoop: function() { return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop }, setLoop: function(t) { if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.") }, getVolume: function() { return this.gain.gain.value }, setVolume: function(t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this } }), Bh.prototype = Object.assign(Object.create(Uh.prototype), { constructor: Bh, getOutput: function() { return this.panner }, getRefDistance: function() { return this.panner.refDistance }, setRefDistance: function(t) { return this.panner.refDistance = t, this }, getRolloffFactor: function() { return this.panner.rolloffFactor }, setRolloffFactor: function(t) { return this.panner.rolloffFactor = t, this }, getDistanceModel: function() { return this.panner.distanceModel }, setDistanceModel: function(t) { return this.panner.distanceModel = t, this }, getMaxDistance: function() { return this.panner.maxDistance }, setMaxDistance: function(t) { return this.panner.maxDistance = t, this }, setDirectionalCone: function(t, e, i) { return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = i, this }, updateMatrixWorld: function() { var t = new Ve,
                e = new je,
                i = new Ve,
                n = new Ve; return function(r) { Ci.prototype.updateMatrixWorld.call(this, r); var o = this.panner; if (this.matrixWorld.decompose(t, e, i), n.set(0, 0, 1).applyQuaternion(e), o.positionX) { var a = this.context.currentTime + this.listener.timeDelta;
                    o.positionX.linearRampToValueAtTime(t.x, a), o.positionY.linearRampToValueAtTime(t.y, a), o.positionZ.linearRampToValueAtTime(t.z, a), o.orientationX.linearRampToValueAtTime(n.x, a), o.orientationY.linearRampToValueAtTime(n.y, a), o.orientationZ.linearRampToValueAtTime(n.z, a) } else o.setPosition(t.x, t.y, t.z), o.setOrientation(n.x, n.y, n.z) } }() }), Object.assign(zh.prototype, { getFrequencyData: function() { return this.analyser.getByteFrequencyData(this.data), this.data }, getAverageFrequency: function() { for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i]; return t / e.length } }), Object.assign(jh.prototype, { accumulate: function(t, e) { var i = this.buffer,
                n = this.valueSize,
                r = t * n + n,
                o = this.cumulativeWeight; if (0 === o) { for (var a = 0; a !== n; ++a) i[r + a] = i[a];
                o = e } else { var s = e / (o += e);
                this._mixBufferRegion(i, r, 0, s, n) } this.cumulativeWeight = o }, apply: function(t) { var e = this.valueSize,
                i = this.buffer,
                n = t * e + e,
                r = this.cumulativeWeight,
                o = this.binding; if (this.cumulativeWeight = 0, r < 1) { var a = 3 * e;
                this._mixBufferRegion(i, n, a, 1 - r, e) } for (var s = e, h = e + e; s !== h; ++s)
                if (i[s] !== i[s + e]) { o.setValue(i, n); break } }, saveOriginalState: function() { var t = this.binding,
                e = this.buffer,
                i = this.valueSize,
                n = 3 * i;
            t.getValue(e, n); for (var r = i, o = n; r !== o; ++r) e[r] = e[n + r % i];
            this.cumulativeWeight = 0 }, restoreOriginalState: function() { var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t) }, _select: function(t, e, i, n, r) { if (n >= .5)
                for (var o = 0; o !== r; ++o) t[e + o] = t[i + o] }, _slerp: function(t, e, i, n) { je.slerpFlat(t, e, t, e, t, i, n) }, _lerp: function(t, e, i, n, r) { for (var o = 1 - n, a = 0; a !== r; ++a) { var s = e + a;
                t[s] = t[s] * o + t[i + a] * n } } });
    var Vh, Wh, Xh, Yh, qh, Zh, Jh, $h, Kh, Qh, tc, ec, ic, nc, rc;

    function oc(t, e, i) { var n = i || ac.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, n) }

    function ac(t, e, i) { this.path = e, this.parsedPath = i || ac.parseTrackName(e), this.node = ac.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t }

    function sc(t, e, i) { this._mixer = t, this._clip = e, this._localRoot = i || null; for (var n = e.tracks, r = n.length, o = new Array(r), a = { endingStart: Se, endingEnd: Se }, s = 0; s !== r; ++s) { var h = n[s].createInterpolant(null);
            o[s] = h, h.settings = a } this._interpolantSettings = a, this._interpolants = o, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Ee, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0 }

    function hc(t) { this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1 }

    function cc(t) { "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t }

    function lc() { Yi.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0 }

    function uc(t, e, i) { mo.call(this, t, e), this.meshPerAttribute = i || 1 }

    function pc(t, e, i, n) { "number" == typeof i && (n = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Ni.call(this, t, e, i), this.meshPerAttribute = n || 1 }

    function fc(t, e, i, n) { this.ray = new dn(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = { Mesh: {}, Line: {}, LOD: {}, Points: { threshold: 1 }, Sprite: {} }, Object.defineProperties(this.params, { PointCloud: { get: function() { return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points } } }) }

    function dc(t, e) { return t.distance - e.distance }

    function mc(t, e, i, n) { if (!1 !== t.visible && (t.raycast(e, i), !0 === n))
            for (var r = t.children, o = 0, a = r.length; o < a; o++) mc(r[o], e, i, !0) }

    function gc(t, e) { this.min = void 0 !== t ? t : new Be(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new Be(-1 / 0, -1 / 0) }

    function vc(t, e) { this.start = void 0 !== t ? t : new Ve, this.end = void 0 !== e ? e : new Ve }

    function yc(t) { Ci.call(this), this.material = t, this.render = function() {} }

    function _c(t, e, i, n) { this.object = t, this.size = void 0 !== e ? e : 1; var r = void 0 !== i ? i : 16711680,
            o = void 0 !== n ? n : 1,
            a = 0,
            s = this.object.geometry;
        s && s.isGeometry ? a = 3 * s.faces.length : s && s.isBufferGeometry && (a = s.attributes.normal.count); var h = new Yi,
            c = new zi(2 * a * 3, 3);
        h.addAttribute("position", c), So.call(this, h, new To({ color: r, linewidth: o })), this.matrixAutoUpdate = !1, this.update() }

    function xc(t, e) { Ci.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e; for (var i = new Yi, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, o = 1; r < 32; r++, o++) { var a = r / 32 * Math.PI * 2,
                s = o / 32 * Math.PI * 2;
            n.push(Math.cos(a), Math.sin(a), 1, Math.cos(s), Math.sin(s), 1) } i.addAttribute("position", new zi(n, 3)); var h = new To({ fog: !1 });
        this.cone = new So(i, h), this.add(this.cone), this.update() }

    function bc(t) { for (var e = function t(e) { var i = [];
                e && e.isBone && i.push(e); for (var n = 0; n < e.children.length; n++) i.push.apply(i, t(e.children[n])); return i }(t), i = new Yi, n = [], r = [], o = new mi(0, 0, 1), a = new mi(0, 1, 0), s = 0; s < e.length; s++) { var h = e[s];
            h.parent && h.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(o.r, o.g, o.b), r.push(a.r, a.g, a.b)) } i.addAttribute("position", new zi(n, 3)), i.addAttribute("color", new zi(r, 3)); var c = new To({ vertexColors: I, depthTest: !1, depthWrite: !1, transparent: !0 });
        So.call(this, i, c), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1 }

    function wc(t, e, i) { this.light = t, this.light.updateMatrixWorld(), this.color = i; var n = new Oa(e, 4, 2),
            r = new gn({ wireframe: !0, fog: !1 });
        vn.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update() }

    function Tc(t, e) { Ci.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e; var i = new To({ fog: !1 }),
            n = new Yi;
        n.addAttribute("position", new Ni(new Float32Array(15), 3)), this.line = new Eo(n, i), this.add(this.line), this.update() }

    function Ec(t, e, i) { Ci.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i; var n = new Bo(e);
        n.rotateY(.5 * Math.PI), this.material = new gn({ wireframe: !0, fog: !1 }), void 0 === this.color && (this.material.vertexColors = I); var r = n.getAttribute("position"),
            o = new Float32Array(3 * r.count);
        n.addAttribute("color", new Ni(o, 3)), this.add(new vn(n, this.material)), this.update() }

    function Sc(t, e, i, n) { t = t || 10, e = e || 10, i = new mi(void 0 !== i ? i : 4473924), n = new mi(void 0 !== n ? n : 8947848); for (var r = e / 2, o = t / e, a = t / 2, s = [], h = [], c = 0, l = 0, u = -a; c <= e; c++, u += o) { s.push(-a, 0, u, a, 0, u), s.push(u, 0, -a, u, 0, a); var p = c === r ? i : n;
            p.toArray(h, l), l += 3, p.toArray(h, l), l += 3, p.toArray(h, l), l += 3, p.toArray(h, l), l += 3 } var f = new Yi;
        f.addAttribute("position", new zi(s, 3)), f.addAttribute("color", new zi(h, 3)); var d = new To({ vertexColors: I });
        So.call(this, f, d) }

    function Mc(t, e, i, n, r, o) { t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new mi(void 0 !== r ? r : 4473924), o = new mi(void 0 !== o ? o : 8947848); var a, s, h, c, l, u, p, f = [],
            d = []; for (c = 0; c <= e; c++) h = c / e * (2 * Math.PI), a = Math.sin(h) * t, s = Math.cos(h) * t, f.push(0, 0, 0), f.push(a, 0, s), p = 1 & c ? r : o, d.push(p.r, p.g, p.b), d.push(p.r, p.g, p.b); for (c = 0; c <= i; c++)
            for (p = 1 & c ? r : o, u = t - t / i * c, l = 0; l < n; l++) h = l / n * (2 * Math.PI), a = Math.sin(h) * u, s = Math.cos(h) * u, f.push(a, 0, s), d.push(p.r, p.g, p.b), h = (l + 1) / n * (2 * Math.PI), a = Math.sin(h) * u, s = Math.cos(h) * u, f.push(a, 0, s), d.push(p.r, p.g, p.b); var m = new Yi;
        m.addAttribute("position", new zi(f, 3)), m.addAttribute("color", new zi(d, 3)); var g = new To({ vertexColors: I });
        So.call(this, m, g) }

    function Ac(t, e, i, n) { this.object = t, this.size = void 0 !== e ? e : 1; var r = void 0 !== i ? i : 16776960,
            o = void 0 !== n ? n : 1,
            a = 0,
            s = this.object.geometry;
        s && s.isGeometry ? a = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."); var h = new Yi,
            c = new zi(2 * a * 3, 3);
        h.addAttribute("position", c), So.call(this, h, new To({ color: r, linewidth: o })), this.matrixAutoUpdate = !1, this.update() }

    function Lc(t, e, i) { Ci.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1); var n = new Yi;
        n.addAttribute("position", new zi([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3)); var r = new To({ fog: !1 });
        this.lightPlane = new Eo(n, r), this.add(this.lightPlane), (n = new Yi).addAttribute("position", new zi([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Eo(n, r), this.add(this.targetLine), this.update() }

    function Cc(t) { var e = new Yi,
            i = new To({ color: 16777215, vertexColors: R }),
            n = [],
            r = [],
            o = {},
            a = new mi(16755200),
            s = new mi(16711680),
            h = new mi(43775),
            c = new mi(16777215),
            l = new mi(3355443);

        function u(t, e, i) { p(t, i), p(e, i) }

        function p(t, e) { n.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === o[t] && (o[t] = []), o[t].push(n.length / 3 - 1) } u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", h), u("u2", "u3", h), u("u3", "u1", h), u("c", "t", c), u("p", "c", l), u("cn1", "cn2", l), u("cn3", "cn4", l), u("cf1", "cf2", l), u("cf3", "cf4", l), e.addAttribute("position", new zi(n, 3)), e.addAttribute("color", new zi(r, 3)), So.call(this, e, i), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update() }

    function Oc(t, e) { this.object = t, void 0 === e && (e = 16776960); var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            n = new Float32Array(24),
            r = new Yi;
        r.setIndex(new Ni(i, 1)), r.addAttribute("position", new Ni(n, 3)), So.call(this, r, new To({ color: e })), this.matrixAutoUpdate = !1, this.update() }

    function Pc(t, e) { this.type = "Box3Helper", this.box = t; var i = void 0 !== e ? e : 16776960,
            n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            r = new Yi;
        r.setIndex(new Ni(n, 1)), r.addAttribute("position", new zi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), So.call(this, r, new To({ color: i })), this.geometry.computeBoundingSphere() }

    function Rc(t, e, i) { this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e; var n = void 0 !== i ? i : 16776960,
            r = new Yi;
        r.addAttribute("position", new zi([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), Eo.call(this, r, new To({ color: n })); var o = new Yi;
        o.addAttribute("position", new zi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), o.computeBoundingSphere(), this.add(new vn(o, new gn({ color: n, opacity: .2, transparent: !0, depthWrite: !1 }))) }

    function Ic(t, e, i, n, r, o) { Ci.call(this), void 0 === t && (t = new THREE.Vector3(0, 0, 1)), void 0 === e && (e = new THREE.Vector3(0, 0, 0)), void 0 === i && (i = 1), void 0 === n && (n = 16776960), void 0 === r && (r = .2 * i), void 0 === o && (o = .2 * r), void 0 === ec && ((ec = new Yi).addAttribute("position", new zi([0, 0, 0, 0, 1, 0], 3)), (ic = new Ua(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new Eo(ec, new To({ color: n })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new vn(ic, new gn({ color: n })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, o) }

    function Nc(t) { var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
            i = new Yi;
        i.addAttribute("position", new zi(e, 3)), i.addAttribute("color", new zi([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3)); var n = new To({ vertexColors: I });
        So.call(this, i, n) } Object.assign(oc.prototype, { getValue: function(t, e) { this.bind(); var i = this._targetGroup.nCachedObjects_,
                    n = this._bindings[i];
                void 0 !== n && n.getValue(t, e) }, setValue: function(t, e) { for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e) }, bind: function() { for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind() }, unbind: function() { for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind() } }), Object.assign(ac, { Composite: oc, create: function(t, e, i) { return t && t.isAnimationObjectGroup ? new ac.Composite(t, e, i) : new ac(t, e, i) }, sanitizeNodeName: (Kh = new RegExp("[\\[\\]\\.:\\/]", "g"), function(t) { return t.replace(/\s/g, "_").replace(Kh, "") }), parseTrackName: (Vh = "[^\\[\\]\\.:\\/]", Wh = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", Xh = /((?:WC+[\/:])*)/.source.replace("WC", Vh), Yh = /(WCOD+)?/.source.replace("WCOD", Wh), qh = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Vh), Zh = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Vh), Jh = new RegExp("^" + Xh + Yh + qh + Zh + "$"), $h = ["material", "materials", "bones"], function(t) { var e = Jh.exec(t); if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t); var i = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] },
                    n = i.nodeName && i.nodeName.lastIndexOf("."); if (void 0 !== n && -1 !== n) { var r = i.nodeName.substring(n + 1); - 1 !== $h.indexOf(r) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = r) } if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t); return i }), findNode: function(t, e) { if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t; if (t.skeleton) { var i = t.skeleton.getBoneByName(e); if (void 0 !== i) return i } if (t.children) { var n = function(t) { for (var i = 0; i < t.length; i++) { var r = t[i]; if (r.name === e || r.uuid === e) return r; var o = n(r.children); if (o) return o } return null },
                        r = n(t.children); if (r) return r } return null } }), Object.assign(ac.prototype, { _getValue_unavailable: function() {}, _setValue_unavailable: function() {}, BindingType: { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, GetterByBindingType: [function(t, e) { t[e] = this.node[this.propertyName] }, function(t, e) { for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n] }, function(t, e) { t[e] = this.resolvedProperty[this.propertyIndex] }, function(t, e) { this.resolvedProperty.toArray(t, e) }], SetterByBindingTypeAndVersioning: [
                [function(t, e) { this.targetObject[this.propertyName] = t[e] }, function(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0 }, function(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 }],
                [function(t, e) { for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++] }, function(t, e) { for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                    this.targetObject.needsUpdate = !0 }, function(t, e) { for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                    this.targetObject.matrixWorldNeedsUpdate = !0 }],
                [function(t, e) { this.resolvedProperty[this.propertyIndex] = t[e] }, function(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0 }, function(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 }],
                [function(t, e) { this.resolvedProperty.fromArray(t, e) }, function(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0 }, function(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0 }]
            ], getValue: function(t, e) { this.bind(), this.getValue(t, e) }, setValue: function(t, e) { this.bind(), this.setValue(t, e) }, bind: function() { var t = this.node,
                    e = this.parsedPath,
                    i = e.objectName,
                    n = e.propertyName,
                    r = e.propertyIndex; if (t || (t = ac.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) { if (i) { var o = e.objectIndex; switch (i) {
                            case "materials":
                                if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                                t = t.material.materials; break;
                            case "bones":
                                if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                                t = t.skeleton.bones; for (var a = 0; a < t.length; a++)
                                    if (t[a].name === o) { o = a; break } break;
                            default:
                                if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                                t = t[i] } if (void 0 !== o) { if (void 0 === t[o]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                            t = t[o] } } var s = t[n]; if (void 0 !== s) { var h = this.Versioning.None;
                        this.targetObject = t, void 0 !== t.needsUpdate ? h = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate); var c = this.BindingType.Direct; if (void 0 !== r) { if ("morphTargetInfluences" === n) { if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); if (t.geometry.isBufferGeometry) { if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); for (a = 0; a < this.node.geometry.morphAttributes.position.length; a++)
                                        if (t.geometry.morphAttributes.position[a].name === r) { r = a; break } } else { if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this); for (a = 0; a < this.node.geometry.morphTargets.length; a++)
                                        if (t.geometry.morphTargets[a].name === r) { r = a; break } } } c = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r } else void 0 !== s.fromArray && void 0 !== s.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (c = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
                        this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][h] } else { var l = e.nodeName;
                        console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + n + " but it wasn't found.", t) } } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.") }, unbind: function() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } }),
        //!\ DECLARE ALIAS AFTER assign prototype !
        Object.assign(ac.prototype, { _getValue_unbound: ac.prototype.getValue, _setValue_unbound: ac.prototype.setValue }), Object.assign(function() { this.uuid = Ue.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0; var t = {};
            this._indicesByUUID = t; for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {}; var n = this;
            this.stats = { objects: { get total() { return n._objects.length }, get inUse() { return this.total - n.nCachedObjects_ } }, get bindingsPerObject() { return n._bindings.length } } }.prototype, { isAnimationObjectGroup: !0, add: function() { for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, o = this._parsedPaths, a = this._bindings, s = a.length, h = void 0, c = 0, l = arguments.length; c !== l; ++c) { var u = arguments[c],
                        p = u.uuid,
                        f = n[p]; if (void 0 === f) { f = e++, n[p] = f, t.push(u); for (var d = 0, m = s; d !== m; ++d) a[d].push(new ac(u, r[d], o[d])) } else if (f < i) { h = t[f]; var g = --i,
                            v = t[g];
                        n[v.uuid] = f, t[f] = v, n[p] = g, t[g] = u; for (d = 0, m = s; d !== m; ++d) { var y = a[d],
                                _ = y[g],
                                x = y[f];
                            y[f] = _, void 0 === x && (x = new ac(u, r[d], o[d])), y[g] = x } } else t[f] !== h && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.") } this.nCachedObjects_ = i }, remove: function() { for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, o = 0, a = arguments.length; o !== a; ++o) { var s = arguments[o],
                        h = s.uuid,
                        c = i[h]; if (void 0 !== c && c >= e) { var l = e++,
                            u = t[l];
                        i[u.uuid] = c, t[c] = u, i[h] = l, t[l] = s; for (var p = 0, f = r; p !== f; ++p) { var d = n[p],
                                m = d[l],
                                g = d[c];
                            d[c] = m, d[l] = g } } } this.nCachedObjects_ = e }, uncache: function() { for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, o = r.length, a = 0, s = arguments.length; a !== s; ++a) { var h = arguments[a].uuid,
                        c = n[h]; if (void 0 !== c)
                        if (delete n[h], c < i) { var l = --i,
                                u = t[l],
                                p = t[v = --e];
                            n[u.uuid] = c, t[c] = u, n[p.uuid] = l, t[l] = p, t.pop(); for (var f = 0, d = o; f !== d; ++f) { var m = (y = r[f])[l],
                                    g = y[v];
                                y[c] = m, y[l] = g, y.pop() } } else { var v;
                            n[(p = t[v = --e]).uuid] = c, t[c] = p, t.pop(); for (f = 0, d = o; f !== d; ++f) { var y;
                                (y = r[f])[c] = y[v], y.pop() } } } this.nCachedObjects_ = i }, subscribe_: function(t, e) { var i = this._bindingsIndicesByPath,
                    n = i[t],
                    r = this._bindings; if (void 0 !== n) return r[n]; var o = this._paths,
                    a = this._parsedPaths,
                    s = this._objects,
                    h = s.length,
                    c = this.nCachedObjects_,
                    l = new Array(h);
                n = r.length, i[t] = n, o.push(t), a.push(e), r.push(l); for (var u = c, p = s.length; u !== p; ++u) { var f = s[u];
                    l[u] = new ac(f, t, e) } return l }, unsubscribe_: function(t) { var e = this._bindingsIndicesByPath,
                    i = e[t]; if (void 0 !== i) { var n = this._paths,
                        r = this._parsedPaths,
                        o = this._bindings,
                        a = o.length - 1,
                        s = o[a];
                    e[t[a]] = i, o[i] = s, o.pop(), r[i] = r[a], r.pop(), n[i] = n[a], n.pop() } } }), Object.assign(sc.prototype, { play: function() { return this._mixer._activateAction(this), this }, stop: function() { return this._mixer._deactivateAction(this), this.reset() }, reset: function() { return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping() }, isRunning: function() { return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this) }, isScheduled: function() { return this._mixer._isActiveAction(this) }, startAt: function(t) { return this._startTime = t, this }, setLoop: function(t, e) { return this.loop = t, this.repetitions = e, this }, setEffectiveWeight: function(t) { return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading() }, getEffectiveWeight: function() { return this._effectiveWeight }, fadeIn: function(t) { return this._scheduleFading(t, 0, 1) }, fadeOut: function(t) { return this._scheduleFading(t, 1, 0) }, crossFadeFrom: function(t, e, i) { if (t.fadeOut(e), this.fadeIn(e), i) { var n = this._clip.duration,
                        r = t._clip.duration,
                        o = r / n,
                        a = n / r;
                    t.warp(1, o, e), this.warp(a, 1, e) } return this }, crossFadeTo: function(t, e, i) { return t.crossFadeFrom(this, e, i) }, stopFading: function() { var t = this._weightInterpolant; return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this }, setEffectiveTimeScale: function(t) { return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping() }, getEffectiveTimeScale: function() { return this._effectiveTimeScale }, setDuration: function(t) { return this.timeScale = this._clip.duration / t, this.stopWarping() }, syncWith: function(t) { return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping() }, halt: function(t) { return this.warp(this._effectiveTimeScale, 0, t) }, warp: function(t, e, i) { var n = this._mixer,
                    r = n.time,
                    o = this._timeScaleInterpolant,
                    a = this.timeScale;
                null === o && (o = n._lendControlInterpolant(), this._timeScaleInterpolant = o); var s = o.parameterPositions,
                    h = o.sampleValues; return s[0] = r, s[1] = r + i, h[0] = t / a, h[1] = e / a, this }, stopWarping: function() { var t = this._timeScaleInterpolant; return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this }, getMixer: function() { return this._mixer }, getClip: function() { return this._clip }, getRoot: function() { return this._localRoot || this._mixer._root }, _update: function(t, e, i, n) { if (this.enabled) { var r = this._startTime; if (null !== r) { var o = (t - r) * i; if (o < 0 || 0 === i) return;
                        this._startTime = null, e = i * o } e *= this._updateTimeScale(t); var a = this._updateTime(e),
                        s = this._updateWeight(t); if (s > 0)
                        for (var h = this._interpolants, c = this._propertyBindings, l = 0, u = h.length; l !== u; ++l) h[l].evaluate(a), c[l].accumulate(n, s) } else this._updateWeight(t) }, _updateWeight: function(t) { var e = 0; if (this.enabled) { e = this.weight; var i = this._weightInterpolant; if (null !== i) { var n = i.evaluate(t)[0];
                        e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1)) } } return this._effectiveWeight = e, e }, _updateTimeScale: function(t) { var e = 0; if (!this.paused) { e = this.timeScale; var i = this._timeScaleInterpolant; if (null !== i) e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e) } return this._effectiveTimeScale = e, e }, _updateTime: function(t) { var e = this.time + t,
                    i = this._clip.duration,
                    n = this.loop,
                    r = this._loopCount,
                    o = 2202 === n; if (0 === t) return -1 === r ? e : o && 1 == (1 & r) ? i - e : e; if (2200 === n) {-1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                    t: { if (e >= i) e = i;
                        else { if (!(e < 0)) break t;
                            e = 0 } this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t < 0 ? -1 : 1 }) } } else { if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, o)) : this._setEndings(0 === this.repetitions, !0, o)), e >= i || e < 0) { var a = Math.floor(e / i);
                        e -= i * a, r += Math.abs(a); var s = this.repetitions - r; if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t > 0 ? 1 : -1 });
                        else { if (1 === s) { var h = t < 0;
                                this._setEndings(h, !h, o) } else this._setEndings(!1, !1, o);
                            this._loopCount = r, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: a }) } } if (o && 1 == (1 & r)) return this.time = e, i - e } return this.time = e, e }, _setEndings: function(t, e, i) { var n = this._interpolantSettings;
                i ? (n.endingStart = 2401, n.endingEnd = 2401) : (n.endingStart = t ? this.zeroSlopeAtStart ? 2401 : Se : 2402, n.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : Se : 2402) }, _scheduleFading: function(t, e, i) { var n = this._mixer,
                    r = n.time,
                    o = this._weightInterpolant;
                null === o && (o = n._lendControlInterpolant(), this._weightInterpolant = o); var a = o.parameterPositions,
                    s = o.sampleValues; return a[0] = r, s[0] = e, a[1] = r + t, s[1] = i, this } }), hc.prototype = Object.assign(Object.create(c.prototype), { constructor: hc, _bindAction: function(t, e) { var i = t._localRoot || this._root,
                    n = t._clip.tracks,
                    r = n.length,
                    o = t._propertyBindings,
                    a = t._interpolants,
                    s = i.uuid,
                    h = this._bindingsByRootAndName,
                    c = h[s];
                void 0 === c && (c = {}, h[s] = c); for (var l = 0; l !== r; ++l) { var u = n[l],
                        p = u.name,
                        f = c[p]; if (void 0 !== f) o[l] = f;
                    else { if (void 0 !== (f = o[l])) { null === f._cacheIndex && (++f.referenceCount, this._addInactiveBinding(f, s, p)); continue } var d = e && e._propertyBindings[l].binding.parsedPath;++(f = new jh(ac.create(i, p, d), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(f, s, p), o[l] = f } a[l].resultBuffer = f.buffer } }, _activateAction: function(t) { if (!this._isActiveAction(t)) { if (null === t._cacheIndex) { var e = (t._localRoot || this._root).uuid,
                            i = t._clip.uuid,
                            n = this._actionsByClip[i];
                        this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e) } for (var r = t._propertyBindings, o = 0, a = r.length; o !== a; ++o) { var s = r[o];
                        0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState()) } this._lendAction(t) } }, _deactivateAction: function(t) { if (this._isActiveAction(t)) { for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) { var r = e[i];
                        0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r)) } this._takeBackAction(t) } }, _initMemoryManager: function() { this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0; var t = this;
                this.stats = { actions: { get total() { return t._actions.length }, get inUse() { return t._nActiveActions } }, bindings: { get total() { return t._bindings.length }, get inUse() { return t._nActiveBindings } }, controlInterpolants: { get total() { return t._controlInterpolants.length }, get inUse() { return t._nActiveControlInterpolants } } } }, _isActiveAction: function(t) { var e = t._cacheIndex; return null !== e && e < this._nActiveActions }, _addInactiveAction: function(t, e, i) { var n = this._actions,
                    r = this._actionsByClip,
                    o = r[e]; if (void 0 === o) o = { knownActions: [t], actionByRoot: {} }, t._byClipCacheIndex = 0, r[e] = o;
                else { var a = o.knownActions;
                    t._byClipCacheIndex = a.length, a.push(t) } t._cacheIndex = n.length, n.push(t), o.actionByRoot[i] = t }, _removeInactiveAction: function(t) { var e = this._actions,
                    i = e[e.length - 1],
                    n = t._cacheIndex;
                i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null; var r = t._clip.uuid,
                    o = this._actionsByClip,
                    a = o[r],
                    s = a.knownActions,
                    h = s[s.length - 1],
                    c = t._byClipCacheIndex;
                h._byClipCacheIndex = c, s[c] = h, s.pop(), t._byClipCacheIndex = null, delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete o[r], this._removeInactiveBindingsForAction(t) }, _removeInactiveBindingsForAction: function(t) { for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) { var r = e[i];
                    0 == --r.referenceCount && this._removeInactiveBinding(r) } }, _lendAction: function(t) { var e = this._actions,
                    i = t._cacheIndex,
                    n = this._nActiveActions++,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r }, _takeBackAction: function(t) { var e = this._actions,
                    i = t._cacheIndex,
                    n = --this._nActiveActions,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r }, _addInactiveBinding: function(t, e, i) { var n = this._bindingsByRootAndName,
                    r = n[e],
                    o = this._bindings;
                void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = o.length, o.push(t) }, _removeInactiveBinding: function(t) { var e = this._bindings,
                    i = t.binding,
                    n = i.rootNode.uuid,
                    r = i.path,
                    o = this._bindingsByRootAndName,
                    a = o[n],
                    s = e[e.length - 1],
                    h = t._cacheIndex;
                s._cacheIndex = h, e[h] = s, e.pop(), delete a[r];
                t: { for (var c in a) break t;delete o[n] } }, _lendBinding: function(t) { var e = this._bindings,
                    i = t._cacheIndex,
                    n = this._nActiveBindings++,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r }, _takeBackBinding: function(t) { var e = this._bindings,
                    i = t._cacheIndex,
                    n = --this._nActiveBindings,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r }, _lendControlInterpolant: function() { var t = this._controlInterpolants,
                    e = this._nActiveControlInterpolants++,
                    i = t[e]; return void 0 === i && ((i = new as(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = i), i }, _takeBackControlInterpolant: function(t) { var e = this._controlInterpolants,
                    i = t.__cacheIndex,
                    n = --this._nActiveControlInterpolants,
                    r = e[n];
                t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r }, _controlInterpolantsResultBuffer: new Float32Array(1), clipAction: function(t, e) { var i = e || this._root,
                    n = i.uuid,
                    r = "string" == typeof t ? gs.findByName(i, t) : t,
                    o = null !== r ? r.uuid : t,
                    a = this._actionsByClip[o],
                    s = null; if (void 0 !== a) { var h = a.actionByRoot[n]; if (void 0 !== h) return h;
                    s = a.knownActions[0], null === r && (r = s._clip) } if (null === r) return null; var c = new sc(this, r, e); return this._bindAction(c, s), this._addInactiveAction(c, o, n), c }, existingAction: function(t, e) { var i = e || this._root,
                    n = i.uuid,
                    r = "string" == typeof t ? gs.findByName(i, t) : t,
                    o = r ? r.uuid : t,
                    a = this._actionsByClip[o]; return void 0 !== a && a.actionByRoot[n] || null }, stopAllAction: function() { var t = this._actions,
                    e = this._nActiveActions,
                    i = this._bindings,
                    n = this._nActiveBindings;
                this._nActiveActions = 0, this._nActiveBindings = 0; for (var r = 0; r !== e; ++r) t[r].reset(); for (r = 0; r !== n; ++r) i[r].useCount = 0; return this }, update: function(t) { t *= this.timeScale; for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), o = this._accuIndex ^= 1, a = 0; a !== i; ++a) { e[a]._update(n, t, r, o) } var s = this._bindings,
                    h = this._nActiveBindings; for (a = 0; a !== h; ++a) s[a].apply(o); return this }, getRoot: function() { return this._root }, uncacheClip: function(t) { var e = this._actions,
                    i = t.uuid,
                    n = this._actionsByClip,
                    r = n[i]; if (void 0 !== r) { for (var o = r.knownActions, a = 0, s = o.length; a !== s; ++a) { var h = o[a];
                        this._deactivateAction(h); var c = h._cacheIndex,
                            l = e[e.length - 1];
                        h._cacheIndex = null, h._byClipCacheIndex = null, l._cacheIndex = c, e[c] = l, e.pop(), this._removeInactiveBindingsForAction(h) } delete n[i] } }, uncacheRoot: function(t) { var e = t.uuid,
                    i = this._actionsByClip; for (var n in i) { var r = i[n].actionByRoot[e];
                    void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r)) } var o = this._bindingsByRootAndName[e]; if (void 0 !== o)
                    for (var a in o) { var s = o[a];
                        s.restoreOriginalState(), this._removeInactiveBinding(s) } }, uncacheAction: function(t, e) { var i = this.existingAction(t, e);
                null !== i && (this._deactivateAction(i), this._removeInactiveAction(i)) } }), cc.prototype.clone = function() { return new cc(void 0 === this.value.clone ? this.value : this.value.clone()) }, lc.prototype = Object.assign(Object.create(Yi.prototype), { constructor: lc, isInstancedBufferGeometry: !0, copy: function(t) { return Yi.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this }, clone: function() { return (new this.constructor).copy(this) } }), uc.prototype = Object.assign(Object.create(mo.prototype), { constructor: uc, isInstancedInterleavedBuffer: !0, copy: function(t) { return mo.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this } }), pc.prototype = Object.assign(Object.create(Ni.prototype), { constructor: pc, isInstancedBufferAttribute: !0, copy: function(t) { return Ni.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this } }), Object.assign(fc.prototype, { linePrecision: 1, set: function(t, e) { this.ray.set(t, e) }, setFromCamera: function(t, e) { e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.") }, intersectObject: function(t, e, i) { var n = i || []; return mc(t, this, n, e), n.sort(dc), n }, intersectObjects: function(t, e, i) { var n = i || []; if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n; for (var r = 0, o = t.length; r < o; r++) mc(t[r], this, n, e); return n.sort(dc), n } }), Object.assign(function(t, e, i) { return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this }.prototype, { set: function(t, e, i) { return this.radius = t, this.phi = e, this.theta = i, this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this }, makeSafe: function() { return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this }, setFromVector3: function(t) { return this.setFromCartesianCoords(t.x, t.y, t.z) }, setFromCartesianCoords: function(t, e, i) { return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(Ue.clamp(e / this.radius, -1, 1))), this } }), Object.assign(function(t, e, i) { return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this }.prototype, { set: function(t, e, i) { return this.radius = t, this.theta = e, this.y = i, this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this }, setFromVector3: function(t) { return this.setFromCartesianCoords(t.x, t.y, t.z) }, setFromCartesianCoords: function(t, e, i) { return this.radius = Math.sqrt(t * t + i * i), this.theta = Math.atan2(t, i), this.y = e, this } }), Object.assign(gc.prototype, { set: function(t, e) { return this.min.copy(t), this.max.copy(e), this }, setFromPoints: function(t) { this.makeEmpty(); for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]); return this }, setFromCenterAndSize: function() { var t = new Be; return function(e, i) { var n = t.copy(i).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } }(), clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.min.copy(t.min), this.max.copy(t.max), this }, makeEmpty: function() { return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this }, isEmpty: function() { return this.max.x < this.min.x || this.max.y < this.min.y }, getCenter: function(t) { return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new Be), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) }, getSize: function(t) { return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new Be), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min) }, expandByPoint: function(t) { return this.min.min(t), this.max.max(t), this }, expandByVector: function(t) { return this.min.sub(t), this.max.add(t), this }, expandByScalar: function(t) { return this.min.addScalar(-t), this.max.addScalar(t), this }, containsPoint: function(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y) }, containsBox: function(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y }, getParameter: function(t, e) { return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new Be), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y)) }, intersectsBox: function(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y) }, clampPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new Be), e.copy(t).clamp(this.min, this.max) }, distanceToPoint: function() { var t = new Be; return function(e) { return t.copy(e).clamp(this.min, this.max).sub(e).length() } }(), intersect: function(t) { return this.min.max(t.min), this.max.min(t.max), this }, union: function(t) { return this.min.min(t.min), this.max.max(t.max), this }, translate: function(t) { return this.min.add(t), this.max.add(t), this }, equals: function(t) { return t.min.equals(this.min) && t.max.equals(this.max) } }), Object.assign(vc.prototype, { set: function(t, e) { return this.start.copy(t), this.end.copy(e), this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.start.copy(t.start), this.end.copy(t.end), this }, getCenter: function(t) { return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new Ve), t.addVectors(this.start, this.end).multiplyScalar(.5) }, delta: function(t) { return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new Ve), t.subVectors(this.end, this.start) }, distanceSq: function() { return this.start.distanceToSquared(this.end) }, distance: function() { return this.start.distanceTo(this.end) }, at: function(t, e) { return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new Ve), this.delta(e).multiplyScalar(t).add(this.start) }, closestPointToPointParameter: (Qh = new Ve, tc = new Ve, function(t, e) { Qh.subVectors(t, this.start), tc.subVectors(this.end, this.start); var i = tc.dot(tc),
                    n = tc.dot(Qh) / i; return e && (n = Ue.clamp(n, 0, 1)), n }), closestPointToPoint: function(t, e, i) { var n = this.closestPointToPointParameter(t, e); return void 0 === i && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), i = new Ve), this.delta(i).multiplyScalar(n).add(this.start) }, applyMatrix4: function(t) { return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this }, equals: function(t) { return t.start.equals(this.start) && t.end.equals(this.end) } }), yc.prototype = Object.create(Ci.prototype), yc.prototype.constructor = yc, yc.prototype.isImmediateRenderObject = !0, _c.prototype = Object.create(So.prototype), _c.prototype.constructor = _c, _c.prototype.update = function() { var t = new Ve,
                e = new Ve,
                i = new We; return function() { var n = ["a", "b", "c"];
                this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld); var r = this.object.matrixWorld,
                    o = this.geometry.attributes.position,
                    a = this.object.geometry; if (a && a.isGeometry)
                    for (var s = a.vertices, h = a.faces, c = 0, l = 0, u = h.length; l < u; l++)
                        for (var p = h[l], f = 0, d = p.vertexNormals.length; f < d; f++) { var m = s[p[n[f]]],
                                g = p.vertexNormals[f];
                            t.copy(m).applyMatrix4(r), e.copy(g).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), o.setXYZ(c, t.x, t.y, t.z), c += 1, o.setXYZ(c, e.x, e.y, e.z), c += 1 } else if (a && a.isBufferGeometry) { var v = a.attributes.position,
                                y = a.attributes.normal; for (c = 0, f = 0, d = v.count; f < d; f++) t.set(v.getX(f), v.getY(f), v.getZ(f)).applyMatrix4(r), e.set(y.getX(f), y.getY(f), y.getZ(f)), e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), o.setXYZ(c, t.x, t.y, t.z), c += 1, o.setXYZ(c, e.x, e.y, e.z), c += 1 } o.needsUpdate = !0 } }(), xc.prototype = Object.create(Ci.prototype), xc.prototype.constructor = xc, xc.prototype.dispose = function() { this.cone.geometry.dispose(), this.cone.material.dispose() }, xc.prototype.update = function() { var t = new Ve; return function() { this.light.updateMatrixWorld(); var e = this.light.distance ? this.light.distance : 1e3,
                    i = e * Math.tan(this.light.angle);
                this.cone.scale.set(i, i, e), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color) } }(), bc.prototype = Object.create(So.prototype), bc.prototype.constructor = bc, bc.prototype.updateMatrixWorld = function() { var t = new Ve,
                e = new ze,
                i = new ze; return function(n) { var r = this.bones,
                    o = this.geometry,
                    a = o.getAttribute("position");
                i.getInverse(this.root.matrixWorld); for (var s = 0, h = 0; s < r.length; s++) { var c = r[s];
                    c.parent && c.parent.isBone && (e.multiplyMatrices(i, c.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(h, t.x, t.y, t.z), e.multiplyMatrices(i, c.parent.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(h + 1, t.x, t.y, t.z), h += 2) } o.getAttribute("position").needsUpdate = !0, Ci.prototype.updateMatrixWorld.call(this, n) } }(), wc.prototype = Object.create(vn.prototype), wc.prototype.constructor = wc, wc.prototype.dispose = function() { this.geometry.dispose(), this.material.dispose() }, wc.prototype.update = function() { void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color) }, Tc.prototype = Object.create(Ci.prototype), Tc.prototype.constructor = Tc, Tc.prototype.dispose = function() { this.children[0].geometry.dispose(), this.children[0].material.dispose() }, Tc.prototype.update = function() { var t = .5 * this.light.width,
                e = .5 * this.light.height,
                i = this.line.geometry.attributes.position,
                n = i.array;
            n[0] = t, n[1] = -e, n[2] = 0, n[3] = t, n[4] = e, n[5] = 0, n[6] = -t, n[7] = e, n[8] = 0, n[9] = -t, n[10] = -e, n[11] = 0, n[12] = t, n[13] = -e, n[14] = 0, i.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color) }, Ec.prototype = Object.create(Ci.prototype), Ec.prototype.constructor = Ec, Ec.prototype.dispose = function() { this.children[0].geometry.dispose(), this.children[0].material.dispose() }, Ec.prototype.update = function() { var t = new Ve,
                e = new mi,
                i = new mi; return function() { var n = this.children[0]; if (void 0 !== this.color) this.material.color.set(this.color);
                else { var r = n.geometry.getAttribute("color");
                    e.copy(this.light.color), i.copy(this.light.groundColor); for (var o = 0, a = r.count; o < a; o++) { var s = o < a / 2 ? e : i;
                        r.setXYZ(o, s.r, s.g, s.b) } r.needsUpdate = !0 } n.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()) } }(), Sc.prototype = Object.create(So.prototype), Sc.prototype.constructor = Sc, Mc.prototype = Object.create(So.prototype), Mc.prototype.constructor = Mc, Ac.prototype = Object.create(So.prototype), Ac.prototype.constructor = Ac, Ac.prototype.update = function() { var t = new Ve,
                e = new Ve,
                i = new We; return function() { this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld); for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, h = 0, c = 0, l = s.length; c < l; c++) { var u = s[c],
                        p = u.normal;
                    t.copy(a[u.a]).add(a[u.b]).add(a[u.c]).divideScalar(3).applyMatrix4(n), e.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), r.setXYZ(h, t.x, t.y, t.z), h += 1, r.setXYZ(h, e.x, e.y, e.z), h += 1 } r.needsUpdate = !0 } }(), Lc.prototype = Object.create(Ci.prototype), Lc.prototype.constructor = Lc, Lc.prototype.dispose = function() { this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose() }, Lc.prototype.update = function() { var t = new Ve,
                e = new Ve,
                i = new Ve; return function() { t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(e, t), this.lightPlane.lookAt(e), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(e), this.targetLine.scale.z = i.length() } }(), Cc.prototype = Object.create(So.prototype), Cc.prototype.constructor = Cc, Cc.prototype.update = function() { var t, e, i = new Ve,
                n = new Jr;

            function r(r, o, a, s) { i.set(o, a, s).unproject(n); var h = e[r]; if (void 0 !== h)
                    for (var c = t.getAttribute("position"), l = 0, u = h.length; l < u; l++) c.setXYZ(h[l], i.x, i.y, i.z) } return function() { t = this.geometry, e = this.pointMap;
                n.projectionMatrix.copy(this.camera.projectionMatrix), r("c", 0, 0, -1), r("t", 0, 0, 1), r("n1", -1, -1, -1), r("n2", 1, -1, -1), r("n3", -1, 1, -1), r("n4", 1, 1, -1), r("f1", -1, -1, 1), r("f2", 1, -1, 1), r("f3", -1, 1, 1), r("f4", 1, 1, 1), r("u1", .7, 1.1, -1), r("u2", -.7, 1.1, -1), r("u3", 0, 2, -1), r("cf1", -1, 0, 1), r("cf2", 1, 0, 1), r("cf3", 0, -1, 1), r("cf4", 0, 1, 1), r("cn1", -1, 0, -1), r("cn2", 1, 0, -1), r("cn3", 0, -1, -1), r("cn4", 0, 1, -1), t.getAttribute("position").needsUpdate = !0 } }(), Oc.prototype = Object.create(So.prototype), Oc.prototype.constructor = Oc, Oc.prototype.update = function() { var t = new ri; return function(e) { if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) { var i = t.min,
                        n = t.max,
                        r = this.geometry.attributes.position,
                        o = r.array;
                    o[0] = n.x, o[1] = n.y, o[2] = n.z, o[3] = i.x, o[4] = n.y, o[5] = n.z, o[6] = i.x, o[7] = i.y, o[8] = n.z, o[9] = n.x, o[10] = i.y, o[11] = n.z, o[12] = n.x, o[13] = n.y, o[14] = i.z, o[15] = i.x, o[16] = n.y, o[17] = i.z, o[18] = i.x, o[19] = i.y, o[20] = i.z, o[21] = n.x, o[22] = i.y, o[23] = i.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere() } } }(), Oc.prototype.setFromObject = function(t) { return this.object = t, this.update(), this }, Oc.prototype.copy = function(t) { return So.prototype.copy.call(this, t), this.object = t.object, this }, Oc.prototype.clone = function() { return (new this.constructor).copy(this) }, Pc.prototype = Object.create(So.prototype), Pc.prototype.constructor = Pc, Pc.prototype.updateMatrixWorld = function(t) { var e = this.box;
            e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), Ci.prototype.updateMatrixWorld.call(this, t)) }, Rc.prototype = Object.create(Eo.prototype), Rc.prototype.constructor = Rc, Rc.prototype.updateMatrixWorld = function(t) { var e = -this.plane.constant;
            Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? C : L, this.lookAt(this.plane.normal), Ci.prototype.updateMatrixWorld.call(this, t) }, Ic.prototype = Object.create(Ci.prototype), Ic.prototype.constructor = Ic, Ic.prototype.setDirection = (rc = new Ve, function(t) { t.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : t.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (rc.set(t.z, 0, -t.x).normalize(), nc = Math.acos(t.y), this.quaternion.setFromAxisAngle(rc, nc)) }), Ic.prototype.setLength = function(t, e, i) { void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix() }, Ic.prototype.setColor = function(t) { this.line.material.color.copy(t), this.cone.material.color.copy(t) }, Ic.prototype.copy = function(t) { return Ci.prototype.copy.call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this }, Ic.prototype.clone = function() { return (new this.constructor).copy(this) }, Nc.prototype = Object.create(So.prototype), Nc.prototype.constructor = Nc;

    function Dc(t) { console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Ds.call(this, t), this.type = "catmullrom" } As.create = function(t, e) { return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(As.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t }, Object.assign(Ys.prototype, { createPointsGeometry: function(t) { console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."); var e = this.getPoints(t); return this.createGeometry(e) }, createSpacedPointsGeometry: function(t) { console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."); var e = this.getSpacedPoints(t); return this.createGeometry(e) }, createGeometry: function(t) { console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."); for (var e = new Ii, i = 0, n = t.length; i < n; i++) { var r = t[i];
                e.vertices.push(new Ve(r.x, r.y, r.z || 0)) } return e } }), Object.assign(qs.prototype, { fromPoints: function(t) { console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t) } }), Object.create(Ds.prototype), Object.create(Ds.prototype), Dc.prototype = Object.create(Ds.prototype), Object.assign(Dc.prototype, { initFromArray: function() { console.error("THREE.Spline: .initFromArray() has been removed.") }, getControlPointsArray: function() { console.error("THREE.Spline: .getControlPointsArray() has been removed.") }, reparametrizeByArcLength: function() { console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.") } }), Sc.prototype.setColors = function() { console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.") }, bc.prototype.update = function() { console.error("THREE.SkeletonHelper: update() no longer needs to be called.") }, Object.assign(Eh.prototype, { extractUrlBase: function(t) { return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), hh(t) } }), Object.assign(uh.prototype, { setTexturePath: function(t) { return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t) } }), Object.assign(gc.prototype, { center: function(t) { return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t) }, empty: function() { return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, isIntersectionBox: function(t) { return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, size: function(t) { return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t) } }), Object.assign(ri.prototype, { center: function(t) { return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t) }, empty: function() { return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, isIntersectionBox: function(t) { return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, isIntersectionSphere: function(t) { return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t) }, size: function(t) { return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t) } }), vc.prototype.center = function(t) { return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t) }, Object.assign(Ue, { random16: function() { return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random() }, nearestPowerOfTwo: function(t) { return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Ue.floorPowerOfTwo(t) }, nextPowerOfTwo: function(t) { return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Ue.ceilPowerOfTwo(t) } }), Object.assign(We.prototype, { flattenToArrayOffset: function(t, e) { return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e) }, multiplyVector3: function(t) { return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this) }, multiplyVector3Array: function() { console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.") }, applyToBuffer: function(t) { return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t) }, applyToVector3Array: function() { console.error("THREE.Matrix3: .applyToVector3Array() has been removed.") } }), Object.assign(ze.prototype, { extractPosition: function(t) { return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t) }, flattenToArrayOffset: function(t, e) { return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e) }, getPosition: function() { var t; return function() { return void 0 === t && (t = new Ve), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3) } }(), setRotationFromQuaternion: function(t) { return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t) }, multiplyToArray: function() { console.warn("THREE.Matrix4: .multiplyToArray() has been removed.") }, multiplyVector3: function(t) { return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, multiplyVector4: function(t) { return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, multiplyVector3Array: function() { console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.") }, rotateAxis: function(t) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this) }, crossVector: function(t) { return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, translate: function() { console.error("THREE.Matrix4: .translate() has been removed.") }, rotateX: function() { console.error("THREE.Matrix4: .rotateX() has been removed.") }, rotateY: function() { console.error("THREE.Matrix4: .rotateY() has been removed.") }, rotateZ: function() { console.error("THREE.Matrix4: .rotateZ() has been removed.") }, rotateByAxis: function() { console.error("THREE.Matrix4: .rotateByAxis() has been removed.") }, applyToBuffer: function(t) { return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t) }, applyToVector3Array: function() { console.error("THREE.Matrix4: .applyToVector3Array() has been removed.") }, makeFrustum: function(t, e, i, n, r, o) { return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, n, i, r, o) } }), ai.prototype.isIntersectionLine = function(t) { return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t) }, je.prototype.multiplyVector3 = function(t) { return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this) }, Object.assign(dn.prototype, { isIntersectionBox: function(t) { return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, isIntersectionPlane: function(t) { return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t) }, isIntersectionSphere: function(t) { return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t) } }), Object.assign(mn.prototype, { area: function() { return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea() }, barycoordFromPoint: function(t, e) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e) }, midpoint: function(t) { return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t) }, normal: function(t) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t) }, plane: function(t) { return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t) } }), Object.assign(mn, { barycoordFromPoint: function(t, e, i, n, r) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), mn.getBarycoord(t, e, i, n, r) }, normal: function(t, e, i, n) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), mn.getNormal(t, e, i, n) } }), Object.assign(Zs.prototype, { extractAllPoints: function(t) { return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t) }, extrude: function(t) { return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Ta(this, t) }, makeGeometry: function(t) { return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Da(this, t) } }), Object.assign(Be.prototype, { fromAttribute: function(t, e, i) { return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i) }, distanceToManhattan: function(t) { return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t) }, lengthManhattan: function() { return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() } }), Object.assign(Ve.prototype, { setEulerFromRotationMatrix: function() { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.") }, setEulerFromQuaternion: function() { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.") }, getPositionFromMatrix: function(t) { return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t) }, getScaleFromMatrix: function(t) { return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t) }, getColumnFromMatrix: function(t, e) { return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t) }, applyProjection: function(t) { return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t) }, fromAttribute: function(t, e, i) { return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i) }, distanceToManhattan: function(t) { return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t) }, lengthManhattan: function() { return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() } }), Object.assign(ti.prototype, { fromAttribute: function(t, e, i) { return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i) }, lengthManhattan: function() { return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() } }), Object.assign(Ii.prototype, { computeTangents: function() { console.error("THREE.Geometry: .computeTangents() has been removed.") }, computeLineDistances: function() { console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.") } }), Object.assign(Ci.prototype, { getChildByName: function(t) { return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t) }, renderDepth: function() { console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.") }, translate: function(t, e) { return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t) }, getWorldRotation: function() { console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.") } }), Object.defineProperties(Ci.prototype, { eulerOrder: { get: function() { return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order }, set: function(t) { console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t } }, useQuaternion: { get: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") }, set: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") } } }), Object.defineProperties(_o.prototype, { objects: { get: function() { return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels } } }), Object.defineProperty(bo.prototype, "useVertexTexture", { get: function() { console.warn("THREE.Skeleton: useVertexTexture has been removed.") }, set: function() { console.warn("THREE.Skeleton: useVertexTexture has been removed.") } }), xo.prototype.initBones = function() { console.error("THREE.SkinnedMesh: initBones() has been removed.") }, Object.defineProperty(As.prototype, "__arcLengthDivisions", { get: function() { return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions }, set: function(t) { console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t } }), $r.prototype.setLens = function(t, e) { console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t) }, Object.defineProperties(Js.prototype, { onlyShadow: { set: function() { console.warn("THREE.Light: .onlyShadow has been removed.") } }, shadowCameraFov: { set: function(t) { console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t } }, shadowCameraLeft: { set: function(t) { console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t } }, shadowCameraRight: { set: function(t) { console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t } }, shadowCameraTop: { set: function(t) { console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t } }, shadowCameraBottom: { set: function(t) { console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t } }, shadowCameraNear: { set: function(t) { console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t } }, shadowCameraFar: { set: function(t) { console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t } }, shadowCameraVisible: { set: function() { console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.") } }, shadowBias: { set: function(t) { console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t } }, shadowDarkness: { set: function() { console.warn("THREE.Light: .shadowDarkness has been removed.") } }, shadowMapWidth: { set: function(t) { console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t } }, shadowMapHeight: { set: function(t) { console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t } } }), Object.defineProperties(Ni.prototype, { length: { get: function() { return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length } }, copyIndicesArray: function() { console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.") } }), Object.assign(Yi.prototype, { addIndex: function(t) { console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t) }, addDrawCall: function(t, e, i) { void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e) }, clearDrawCalls: function() { console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups() }, computeTangents: function() { console.warn("THREE.BufferGeometry: .computeTangents() has been removed.") }, computeOffsets: function() { console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.") } }), Object.defineProperties(Yi.prototype, { drawcalls: { get: function() { return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups } }, offsets: { get: function() { return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups } } }), Object.assign(Ea.prototype, { getArrays: function() { console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.") }, addShapeList: function() { console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.") }, addShape: function() { console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.") } }), Object.defineProperties(cc.prototype, { dynamic: { set: function() { console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.") } }, onUpdate: { value: function() { return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this } } }), Object.defineProperties(pn.prototype, { wrapAround: { get: function() { console.warn("THREE.Material: .wrapAround has been removed.") }, set: function() { console.warn("THREE.Material: .wrapAround has been removed.") } }, overdraw: { get: function() { console.warn("THREE.Material: .overdraw has been removed.") }, set: function() { console.warn("THREE.Material: .overdraw has been removed.") } }, wrapRGB: { get: function() { return console.warn("THREE.Material: .wrapRGB has been removed."), new mi } }, shading: { get: function() { console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.") }, set: function(t) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t } } }), Object.defineProperties(Ja.prototype, { metal: { get: function() { return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1 }, set: function() { console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead") } } }), Object.defineProperties(fn.prototype, { derivatives: { get: function() { return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives }, set: function(t) { console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t } } }), Object.assign(lo.prototype, { clearTarget: function(t, e, i, n) { console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, i, n) }, animate: function(t) { console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t) }, getCurrentRenderTarget: function() { return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget() }, getMaxAnisotropy: function() { return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy() }, getPrecision: function() { return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision }, resetGLState: function() { return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset() }, supportsFloatTextures: function() { return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float") }, supportsHalfFloatTextures: function() { return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float") }, supportsStandardDerivatives: function() { return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives") }, supportsCompressedTextureS3TC: function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc") }, supportsCompressedTexturePVRTC: function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc") }, supportsBlendMinMax: function() { return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax") }, supportsVertexTextures: function() { return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures }, supportsInstancedArrays: function() { return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays") }, enableScissorTest: function(t) { console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t) }, initMaterial: function() { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.") }, addPrePlugin: function() { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.") }, addPostPlugin: function() { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.") }, updateShadowMap: function() { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.") }, setFaceCulling: function() { console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.") } }), Object.defineProperties(lo.prototype, { shadowMapEnabled: { get: function() { return this.shadowMap.enabled }, set: function(t) { console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t } }, shadowMapType: { get: function() { return this.shadowMap.type }, set: function(t) { console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t } }, shadowMapCullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") } } }), Object.defineProperties(Wr.prototype, { cullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") } }, renderReverseSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") } }, renderSingleSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") } } }), Object.defineProperties(ei.prototype, { wrapS: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t } }, wrapT: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t } }, magFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t } }, minFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t } }, anisotropy: { get: function() { return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t } }, offset: { get: function() { return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t } }, repeat: { get: function() { return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t } }, format: { get: function() { return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t } }, type: { get: function() { return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t } }, generateMipmaps: { get: function() { return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t } } }), Object.defineProperties(ho.prototype, { standing: { set: function() { console.warn("THREE.WebVRManager: .standing has been removed.") } }, userHeight: { set: function() { console.warn("THREE.WebVRManager: .userHeight has been removed.") } } }), Uh.prototype.load = function(t) { console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."); var e = this; return (new Gh).load(t, function(t) { e.setBuffer(t) }), this }, zh.prototype.getData = function() { return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData() }, kh.prototype.updateCubeMap = function(t, e) { return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e) };
    $e.crossOrigin = void 0, $e.loadTexture = function(t, e, i, n) { console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."); var r = new Ms;
        r.setCrossOrigin(this.crossOrigin); var o = r.load(t, i, void 0, n); return e && (o.mapping = e), o }, $e.loadTextureCube = function(t, e, i, n) { console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."); var r = new Ss;
        r.setCrossOrigin(this.crossOrigin); var o = r.load(t, i, void 0, n); return e && (o.mapping = e), o }, $e.loadCompressedTexture = function() { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.") }, $e.loadCompressedTextureCube = function() { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.") };
    var Gc = i(0);
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    Gc.e._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() { var t = function(t) { var e, i = [],
                    n = t.length; for (e = 0; e !== n; i.push(t[e++])); return i },
            e = function(t, e, i) { var n, r, o = t.cycle; for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                delete t.cycle },
            i = function(t, e, n) { Gc.f.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = i.prototype.render },
            n = Gc.f._internals,
            r = n.isSelector,
            o = n.isArray,
            a = i.prototype = Gc.f.to({}, .1, {}),
            s = [];
        i.version = "2.0.2", a.constructor = i, a.kill()._gc = !1, i.killTweensOf = i.killDelayedCallsTo = Gc.f.killTweensOf, i.getTweensOf = Gc.f.getTweensOf, i.lagSmoothing = Gc.f.lagSmoothing, i.ticker = Gc.f.ticker, i.render = Gc.f.render, a.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), Gc.f.prototype.invalidate.call(this) }, a.updateTo = function(t, e) { var i, n = this.ratio,
                r = this.vars.immediateRender || t.immediateRender; for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i]; if (this._initted || r)
                if (e) this._initted = !1, r && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && Gc.f._onPluginEvent("_onDisable", this), this._time / this._duration > .998) { var o = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1) } else if (this._initted = !1, this._init(), this._time > 0 || r)
                for (var a, s = 1 / (1 - n), h = this._firstPT; h;) a = h.s + h.c, h.c *= s, h.s = a - h.c, h = h._next; return this }, a.render = function(t, e, i) { this._initted || 0 === this._duration && this.vars.repeat && this.invalidate(); var r, o, a, s, h, c, l, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                d = this._time,
                m = this._totalTime,
                g = this._cycle,
                v = this._duration,
                y = this._rawPrevTime; if (t >= f - 1e-7 && t >= 0 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (y < 0 || t <= 0 && t >= -1e-7 || 1e-10 === y && "isPause" !== this.data) && y !== t && (i = !0, y > 1e-10 && (o = "onReverseComplete")), this._rawPrevTime = u = !e || t || y === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (o = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = u = !e || t || y === t ? t : 1e-10)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (s = v + this._repeatDelay, this._cycle = this._totalTime / s >> 0, 0 !== this._cycle && this._cycle === this._totalTime / s && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * s, this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Gc.b ? p : Gc.b.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Gc.b ? p : "function" == typeof p ? new Gc.b(p, this.vars.easeParams) : Gc.b.map[p] || Gc.f.defaultEase : Gc.f.defaultEase)), this.ratio = p ? 1 - p.getRatio((v - this._time) / v) : 0)), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType && !p ? (h = this._time / v, (1 === (c = this._easeType) || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === (l = this._easePower) ? h *= h : 2 === l ? h *= h * h : 3 === l ? h *= h * h * h : 4 === l && (h *= h * h * h * h), 1 === c ? this.ratio = 1 - h : 2 === c ? this.ratio = h : this._time / v < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : p || (this.ratio = this._ease.getRatio(this._time / v))), d !== this._time || i || g !== this._cycle) { if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, n.lazyTweens.push(this), void(this._lazy = [t, e]);!this._time || r || p ? r && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v) } for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== m || o) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === v && 1e-10 === this._rawPrevTime && 1e-10 !== u && (this._rawPrevTime = 0))) } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")) }, i.to = function(t, e, n) { return new i(t, e, n) }, i.from = function(t, e, n) { return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new i(t, e, n) }, i.fromTo = function(t, e, n, r) { return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new i(t, e, r) }, i.staggerTo = i.allTo = function(n, a, h, c, l, u, p) { c = c || 0; var f, d, m, g, v = 0,
                y = [],
                _ = function() { h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), l.apply(p || h.callbackScope || this, u || s) },
                x = h.cycle,
                b = h.startAt && h.startAt.cycle; for (o(n) || ("string" == typeof n && (n = Gc.f.selector(n) || n), r(n) && (n = t(n))), n = n || [], c < 0 && ((n = t(n)).reverse(), c *= -1), f = n.length - 1, m = 0; m <= f; m++) { for (g in d = {}, h) d[g] = h[g]; if (x && (e(d, n, m), null != d.duration && (a = d.duration, delete d.duration)), b) { for (g in b = d.startAt = {}, h.startAt) b[g] = h.startAt[g];
                    e(d.startAt, n, m) } d.delay = v + (d.delay || 0), m === f && l && (d.onComplete = _), y[m] = new i(n[m], a, d), v += c } return y }, i.staggerFrom = i.allFrom = function(t, e, n, r, o, a, s) { return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, i.staggerTo(t, e, n, r, o, a, s) }, i.staggerFromTo = i.allFromTo = function(t, e, n, r, o, a, s, h) { return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, i.staggerTo(t, e, r, o, a, s, h) }, i.delayedCall = function(t, e, n, r, o) { return new i(e, 0, { delay: t, onComplete: e, onCompleteParams: n, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: n, immediateRender: !1, useFrames: o, overwrite: 0 }) }, i.set = function(t, e) { return new i(t, 0, e) }, i.isTweening = function(t) { return Gc.f.getTweensOf(t, !0).length > 0 }; var h = function(t, e) { for (var i = [], n = 0, r = t._first; r;) r instanceof Gc.f ? i[n++] = r : (e && (i[n++] = r), n = (i = i.concat(h(r, e))).length), r = r._next; return i },
            c = i.getAllTweens = function(t) { return h(Gc.a._rootTimeline, t).concat(h(Gc.a._rootFramesTimeline, t)) };
        i.killAll = function(t, e, i, n) { null == e && (e = !0), null == i && (i = !0); var r, o, a, s = c(0 != n),
                h = s.length,
                l = e && i && n; for (a = 0; a < h; a++) o = s[a], (l || o instanceof Gc.c || (r = o.target === o.vars.onComplete) && i || e && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1)) }, i.killChildTweensOf = function(e, a) { if (null != e) { var s, h, c, l, u, p = n.tweenLookup; if ("string" == typeof e && (e = Gc.f.selector(e) || e), r(e) && (e = t(e)), o(e))
                    for (l = e.length; --l > -1;) i.killChildTweensOf(e[l], a);
                else { for (c in s = [], p)
                        for (h = p[c].target.parentNode; h;) h === e && (s = s.concat(p[c].tweens)), h = h.parentNode; for (u = s.length, l = 0; l < u; l++) a && s[l].totalTime(s[l].totalDuration()), s[l]._enabled(!1, !1) } } }; var l = function(t, e, i, n) { e = !1 !== e, i = !1 !== i; for (var r, o, a = c(n = !1 !== n), s = e && i && n, h = a.length; --h > -1;) o = a[h], (s || o instanceof Gc.c || (r = o.target === o.vars.onComplete) && i || e && !r) && o.paused(t) }; return i.pauseAll = function(t, e, i) { l(!0, t, e, i) }, i.resumeAll = function(t, e, i) { l(!1, t, e, i) }, i.globalTimeScale = function(t) { var e = Gc.a._rootTimeline,
                i = Gc.f.ticker.time; return arguments.length ? (t = t || 1e-10, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = Gc.a._rootFramesTimeline, i = Gc.f.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = Gc.a._rootTimeline._timeScale = t, t) : e._timeScale }, a.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, a.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, a.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, a.duration = function(t) { return arguments.length ? Gc.a.prototype.duration.call(this, t) : this._duration }, a.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, a.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, a.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, a.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, i }, !0);
    var kc = Gc.g.TweenMax;
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     */
    Gc.e._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function() { var t, e, i, n, r = function() { Gc.d.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio },
            o = Gc.e._gsDefine.globals,
            a = {},
            s = r.prototype = new Gc.d("css");
        s.constructor = r, r.version = "2.0.2", r.API = 2, r.defaultTransformPerspective = 0, r.defaultSkewType = "compensated", r.defaultSmoothOrigin = !0, s = "px", r.suffixMap = { top: s, right: s, bottom: s, left: s, width: s, height: s, fontSize: s, padding: s, margin: s, perspective: s, lineHeight: "" }; var h, c, l, u, p, f, d, m, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            x = /(?:\d|\-|\+|=|#|\.)*/g,
            b = /opacity *= *([^)]*)/i,
            w = /opacity:([^;]*)/i,
            T = /alpha\(opacity *=.+?\)/i,
            E = /^(rgb|hsl)/,
            S = /([A-Z])/g,
            M = /-([a-z])/gi,
            A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            L = function(t, e) { return e.toUpperCase() },
            C = /(?:Left|Right|Width)/i,
            O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            P = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            R = /,(?=[^\)]*(?:\(|$))/gi,
            I = /[\s,\(]/i,
            N = Math.PI / 180,
            D = 180 / Math.PI,
            G = {},
            k = { style: {} },
            H = Gc.e.document || { createElement: function() { return k } },
            F = function(t, e) { return H.createElementNS ? H.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : H.createElement(t) },
            U = F("div"),
            B = F("img"),
            z = r._internals = { _specialProps: a },
            j = (Gc.e.navigator || {}).userAgent || "",
            V = function() { var t = j.indexOf("Android"),
                    e = F("a"); return l = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === t || parseFloat(j.substr(t + 8, 2)) > 3), p = l && parseFloat(j.substr(j.indexOf("Version/") + 8, 2)) < 6, u = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (f = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) }(),
            W = function(t) { return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
            X = function(t) { Gc.e.console && console.log(t) },
            Y = "",
            q = "",
            Z = function(t, e) { var i, n, r = (e = e || U).style; if (void 0 !== r[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];); return n >= 0 ? (Y = "-" + (q = 3 === n ? "ms" : i[n]).toLowerCase() + "-", q + t) : null },
            J = ("undefined" != typeof window ? window : H.defaultView || { getComputedStyle: function() {} }).getComputedStyle,
            $ = r.getStyle = function(t, e, i, n, r) { var o; return V || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || J(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : W(t) },
            K = z.convertToPixels = function(t, e, i, n, o) { if ("px" === n || !n && "lineHeight" !== e) return i; if ("auto" === n || !i) return 0; var a, s, h, c = C.test(e),
                    l = t,
                    u = U.style,
                    p = i < 0,
                    f = 1 === i; if (p && (i = -i), f && (i *= 100), "lineHeight" !== e || n)
                    if ("%" === n && -1 !== e.indexOf("border")) a = i / 100 * (c ? t.clientWidth : t.clientHeight);
                    else { if (u.cssText = "border:0 solid red;position:" + $(t, "position") + ";line-height:0;", "%" !== n && l.appendChild && "v" !== n.charAt(0) && "rem" !== n) u[c ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                        else { if (l = t.parentNode || H.body, -1 !== $(l, "display").indexOf("flex") && (u.position = "absolute"), s = l._gsCache, h = Gc.f.ticker.frame, s && c && s.time === h) return s.width * i / 100;
                            u[c ? "width" : "height"] = i + n } l.appendChild(U), a = parseFloat(U[c ? "offsetWidth" : "offsetHeight"]), l.removeChild(U), c && "%" === n && !1 !== r.cacheWidths && ((s = l._gsCache = l._gsCache || {}).time = h, s.width = a / i * 100), 0 !== a || o || (a = K(t, e, i, n, !0)) } else s = J(t).lineHeight, t.style.lineHeight = i, a = parseFloat(J(t).lineHeight), t.style.lineHeight = s; return f && (a /= 100), p ? -a : a },
            Q = z.calculateOffset = function(t, e, i) { if ("absolute" !== $(t, "position", i)) return 0; var n = "left" === e ? "Left" : "Top",
                    r = $(t, "margin" + n, i); return t["offset" + n] - (K(t, e, parseFloat(r), r.replace(x, "")) || 0) },
            tt = function(t, e) { var i, n, r, o = {}; if (e = e || J(t, null))
                    if (i = e.length)
                        for (; --i > -1;) - 1 !== (r = e[i]).indexOf("-transform") && Pt !== r || (o[r.replace(M, L)] = e.getPropertyValue(r));
                    else
                        for (i in e) - 1 !== i.indexOf("Transform") && Ot !== i || (o[i] = e[i]);
                else if (e = t.currentStyle || t.style)
                    for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(M, L)] = e[i]); return V || (o.opacity = W(t)), n = Vt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, It && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o },
            et = function(t, e, i, n, r) { var o, a, s, h = {},
                    c = t.style; for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (o = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (h[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[a] || "" === e[a].replace(_, "") ? o : 0 : Q(t, a), void 0 !== c[a] && (s = new gt(c, a, c[a], s)))); if (n)
                    for (a in n) "className" !== a && (h[a] = n[a]); return { difs: h, firstMPT: s } },
            it = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            nt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            rt = function(t, e, i) { if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0; if (t.getCTM && Bt(t)) return t.getBBox()[e] || 0; var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    r = it[e],
                    o = r.length; for (i = i || J(t, null); --o > -1;) n -= parseFloat($(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat($(t, "border" + r[o] + "Width", i, !0)) || 0; return n },
            ot = function(t, e) { if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                null != t && "" !== t || (t = "0 0"); var i, n = t.split(" "),
                    r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                    o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1]; if (n.length > 3 && !e) { for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ot(n[i])); return t.join(",") } return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(_, "")), e.oy = parseFloat(o.replace(_, "")), e.v = t), e || t },
            at = function(t, e) { return "function" == typeof t && (t = t(m, d)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
            st = function(t, e) { "function" == typeof t && (t = t(m, d)); var i = "string" == typeof t && "=" === t.charAt(1); return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
            ht = function(t, e, i, n) { var r, o, a, s; return "function" == typeof t && (t = t(m, d)), null == t ? a = e : "number" == typeof t ? a = t : (360, r = t.split("_"), o = ((s = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (s ? 0 : e), r.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= 360) !== o % 180 && (o = o < 0 ? o + 360 : o - 360), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 3599999999640) % 360 - 360 * (o / 360 | 0) : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 3599999999640) % 360 - 360 * (o / 360 | 0))), a = e + o), a < 1e-6 && a > -1e-6 && (a = 0), a },
            ct = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
            lt = function(t, e, i) { return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
            ut = r.parseColor = function(t, e) { var i, n, r, o, a, s, h, c, l, u, p; if (t)
                    if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                    else { if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
                        else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                            if (i = p = t.match(g), e) { if (-1 !== t.indexOf("=")) return t.match(v) } else a = Number(i[0]) % 360 / 360, s = Number(i[1]) / 100, n = 2 * (h = Number(i[2]) / 100) - (r = h <= .5 ? h * (s + 1) : h + s - h * s), i.length > 3 && (i[3] = Number(i[3])), i[0] = lt(a + 1 / 3, n, r), i[1] = lt(a, n, r), i[2] = lt(a - 1 / 3, n, r);
                        else i = t.match(g) || ct.transparent;
                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3])) } else i = ct.black; return e && !p && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, h = ((c = Math.max(n, r, o)) + (l = Math.min(n, r, o))) / 2, c === l ? a = s = 0 : (u = c - l, s = h > .5 ? u / (2 - c - l) : u / (c + l), a = c === n ? (r - o) / u + (r < o ? 6 : 0) : c === r ? (o - n) / u + 2 : (n - r) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * s + .5 | 0, i[2] = 100 * h + .5 | 0), i },
            pt = function(t, e) { var i, n, r, o = t.match(ft) || [],
                    a = 0,
                    s = ""; if (!o.length) return t; for (i = 0; i < o.length; i++) n = o[i], a += (r = t.substr(a, t.indexOf(n, a) - a)).length + n.length, 3 === (n = ut(n, e)).length && n.push(1), s += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")"; return s + t.substr(a) },
            ft = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (s in ct) ft += "|" + s + "\\b";
        ft = new RegExp(ft + ")", "gi"), r.colorStringFilter = function(t) { var e, i = t[0] + " " + t[1];
            ft.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = pt(t[0], e), t[1] = pt(t[1], e)), ft.lastIndex = 0 }, Gc.f.defaultStringFilter || (Gc.f.defaultStringFilter = r.colorStringFilter); var dt = function(t, e, i, n) { if (null == t) return function(t) { return t }; var r, o = e ? (t.match(ft) || [""])[0] : "",
                    a = t.split(o).join("").match(y) || [],
                    s = t.substr(0, t.indexOf(a[0])),
                    h = ")" === t.charAt(t.length - 1) ? ")" : "",
                    c = -1 !== t.indexOf(" ") ? " " : ",",
                    l = a.length,
                    u = l > 0 ? a[0].replace(g, "") : ""; return l ? r = e ? function(t) { var e, p, f, d; if ("number" == typeof t) t += u;
                    else if (n && R.test(t)) { for (d = t.replace(R, "|").split("|"), f = 0; f < d.length; f++) d[f] = r(d[f]); return d.join(",") } if (e = (t.match(ft) || [o])[0], f = (p = t.split(e).join("").match(y) || []).length, l > f--)
                        for (; ++f < l;) p[f] = i ? p[(f - 1) / 2 | 0] : a[f]; return s + p.join(c) + c + e + h + (-1 !== t.indexOf("inset") ? " inset" : "") } : function(t) { var e, o, p; if ("number" == typeof t) t += u;
                    else if (n && R.test(t)) { for (o = t.replace(R, "|").split("|"), p = 0; p < o.length; p++) o[p] = r(o[p]); return o.join(",") } if (p = (e = t.match(y) || []).length, l > p--)
                        for (; ++p < l;) e[p] = i ? e[(p - 1) / 2 | 0] : a[p]; return s + e.join(c) + h } : function(t) { return t } },
            mt = function(t) { return t = t.split(","),
                    function(e, i, n, r, o, a, s) { var h, c = (i + "").split(" "); for (s = {}, h = 0; h < 4; h++) s[t[h]] = c[h] = c[h] || c[(h - 1) / 2 >> 0]; return r.parse(e, s, o, a) } },
            gt = (z._setPluginRatio = function(t) { this.plugin.setRatio(t); for (var e, i, n, r, o, a = this.data, s = a.proxy, h = a.firstMPT; h;) e = s[h.v], h.r ? e = h.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), h.t[h.p] = e, h = h._next; if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, s.rotation, this.t, this._tween) : s.rotation), 1 === t || 0 === t)
                    for (h = a.firstMPT, o = 1 === t ? "e" : "b"; h;) { if ((i = h.t).type) { if (1 === i.type) { for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                i[o] = r } } else i[o] = i.s + i.xs0;
                        h = h._next } }, function(t, e, i, n, r) { this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n) }),
            vt = (z._parseToProxy = function(t, e, i, n, r, o) { var a, s, h, c, l, u = n,
                    p = {},
                    f = {},
                    d = i._transform,
                    m = G; for (i._transform = null, G = e, n = l = i.parse(t, e, n, r), G = m, o && (i._transform = d, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) { if (n.type <= 1 && (f[s = n.p] = n.s + n.c, p[s] = n.s, o || (c = new gt(n, "s", s, c, n.r), n.c = 0), 1 === n.type))
                        for (a = n.l; --a > 0;) h = "xn" + a, f[s = n.p + "_" + h] = n.data[h], p[s] = n[h], o || (c = new gt(n, h, s, c, n.rxp[h]));
                    n = n._next } return { proxy: p, end: f, firstMPT: c, pt: l } }, z.CSSPropTween = function(e, i, r, o, a, s, h, c, l, u, p) { this.t = e, this.p = i, this.s = r, this.c = o, this.n = h || i, e instanceof vt || n.push(this.n), this.r = c ? "function" == typeof c ? c : Math.round : c, this.type = s || 0, l && (this.pr = l, t = !0), this.b = void 0 === u ? r : u, this.e = void 0 === p ? r + o : p, a && (this._next = a, a._prev = this) }),
            yt = function(t, e, i, n, r, o) { var a = new vt(t, e, i, n - i, r, -1, o); return a.b = i, a.e = a.xs0 = n, a },
            _t = r.parseComplex = function(t, e, i, n, o, a, s, c, l, u) { i = i || a || "", "function" == typeof n && (n = n(m, d)), s = new vt(t, e, 0, 0, s, u ? 2 : 1, null, !1, c, i, n), n += "", o && ft.test(n + i) && (n = [i, n], r.colorStringFilter(n), i = n[0], n = n[1]); var p, f, y, _, x, b, w, T, E, S, M, A, L, C = i.split(", ").join(",").split(" "),
                    O = n.split(", ").join(",").split(" "),
                    P = C.length,
                    I = !1 !== h; for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (C = C.join(" ").replace(R, ", ").split(" "), O = O.join(" ").replace(R, ", ").split(" ")) : (C = C.join(" ").split(",").join(", ").split(" "), O = O.join(" ").split(",").join(", ").split(" ")), P = C.length), P !== O.length && (P = (C = (a || "").split(" ")).length), s.plugin = l, s.setRatio = u, ft.lastIndex = 0, p = 0; p < P; p++)
                    if (_ = C[p], x = O[p] + "", (T = parseFloat(_)) || 0 === T) s.appendXtra("", T, at(x, T), x.replace(v, ""), !(!I || -1 === x.indexOf("px")) && Math.round, !0);
                    else if (o && ft.test(_)) A = ")" + ((A = x.indexOf(")") + 1) ? x.substr(A) : ""), L = -1 !== x.indexOf("hsl") && V, S = x, _ = ut(_, L), x = ut(x, L), (E = _.length + x.length > 6) && !V && 0 === x[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(O[p]).join("transparent")) : (V || (E = !1), L ? s.appendXtra(S.substr(0, S.indexOf("hsl")) + (E ? "hsla(" : "hsl("), _[0], at(x[0], _[0]), ",", !1, !0).appendXtra("", _[1], at(x[1], _[1]), "%,", !1).appendXtra("", _[2], at(x[2], _[2]), E ? "%," : "%" + A, !1) : s.appendXtra(S.substr(0, S.indexOf("rgb")) + (E ? "rgba(" : "rgb("), _[0], x[0] - _[0], ",", Math.round, !0).appendXtra("", _[1], x[1] - _[1], ",", Math.round).appendXtra("", _[2], x[2] - _[2], E ? "," : A, Math.round), E && (_ = _.length < 4 ? 1 : _[3], s.appendXtra("", _, (x.length < 4 ? 1 : x[3]) - _, A, !1))), ft.lastIndex = 0;
                else if (b = _.match(g)) { if (!(w = x.match(v)) || w.length !== b.length) return s; for (y = 0, f = 0; f < b.length; f++) M = b[f], S = _.indexOf(M, y), s.appendXtra(_.substr(y, S - y), Number(M), at(w[f], M), "", !(!I || "px" !== _.substr(S + M.length, 2)) && Math.round, 0 === f), y = S + M.length;
                    s["xs" + s.l] += _.substr(y) } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + x : x; if (-1 !== n.indexOf("=") && s.data) { for (A = s.xs0 + s.data.s, p = 1; p < s.l; p++) A += s["xs" + p] + s.data["xn" + p];
                    s.e = A + s["xs" + p] } return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s },
            xt = 9; for ((s = vt.prototype).l = s.pr = 0; --xt > 0;) s["xn" + xt] = 0, s["xs" + xt] = "";
        s.xs0 = "", s._next = s._prev = s.xfirst = s.data = s.plugin = s.setRatio = s.rxp = null, s.appendXtra = function(t, e, i, n, r, o) { var a = this,
                s = a.l; return a["xs" + s] += o && (s || a["xs" + s]) ? " " + t : t || "", i || 0 === s || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", s > 0 ? (a.data["xn" + s] = e + i, a.rxp["xn" + s] = r, a["xn" + s] = e, a.plugin || (a.xfirst = new vt(a, "xn" + s, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + s] += e + (n || ""), a) }; var bt = function(t, e) { e = e || {}, this.p = e.prefix && Z(t) || t, a[t] = a[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
            wt = z._registerComplexSpecialProp = function(t, e, i) { "object" != typeof e && (e = { parser: i }); var n, r = t.split(","),
                    o = e.defaultValue; for (i = i || [o], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, new bt(r[n], e) },
            Tt = z._registerPluginProp = function(t) { if (!a[t]) { var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    wt(t, { parser: function(t, i, n, r, s, h, c) { var l = o.com.greensock.plugins[e]; return l ? (l._cssRegister(), a[n].parse(t, i, n, r, s, h, c)) : (X("Error: " + e + " js file not loaded."), s) } }) } };
        (s = bt.prototype).parseComplex = function(t, e, i, n, r, o) { var a, s, h, c, l, u, p = this.keyword; if (this.multi && (R.test(i) || R.test(e) ? (s = e.replace(R, "|").split("|"), h = i.replace(R, "|").split("|")) : p && (s = [e], h = [i])), h) { for (c = h.length > s.length ? h.length : s.length, a = 0; a < c; a++) e = s[a] = s[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (l = e.indexOf(p)) !== (u = i.indexOf(p)) && (-1 === u ? s[a] = s[a].split(p).join("") : -1 === l && (s[a] += " " + p));
                e = s.join(", "), i = h.join(", ") } return _t(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o) }, s.parse = function(t, e, n, r, o, a, s) { return this.parseComplex(t.style, this.format($(t, this.p, i, !1, this.dflt)), this.format(e), o, a) }, r.registerSpecialProp = function(t, e, i) { wt(t, { parser: function(t, n, r, o, a, s, h) { var c = new vt(t, r, 0, 0, a, 2, r, !1, i); return c.plugin = s, c.setRatio = e(t, n, o._tween, r), c }, priority: i }) }, r.useSVGTransformAttr = !0; var Et, St, Mt, At, Lt, Ct = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Ot = Z("transform"),
            Pt = Y + "transform",
            Rt = Z("transformOrigin"),
            It = null !== Z("perspective"),
            Nt = z.Transform = function() { this.perspective = parseFloat(r.defaultTransformPerspective) || 0, this.force3D = !(!1 === r.defaultForce3D || !It) && (r.defaultForce3D || "auto") },
            Dt = Gc.e.SVGElement,
            Gt = function(t, e, i) { var n, r = H.createElementNS("http://www.w3.org/2000/svg", t),
                    o = /([a-z])([A-Z])/g; for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]); return e.appendChild(r), r },
            kt = H.documentElement || {},
            Ht = (Lt = f || /Android/i.test(j) && !Gc.e.chrome, H.createElementNS && !Lt && (St = Gt("svg", kt), At = (Mt = Gt("rect", St, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, Mt.style[Rt] = "50% 50%", Mt.style[Ot] = "scaleX(0.5)", Lt = At === Mt.getBoundingClientRect().width && !(u && It), kt.removeChild(St)), Lt),
            Ft = function(t, e, i, n, o, a) { var s, h, c, l, u, p, f, d, m, g, v, y, _, x, b = t._gsTransform,
                    w = jt(t, !0);
                b && (_ = b.xOrigin, x = b.yOrigin), (!n || (s = n.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), s = [(-1 !== (e = ot(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = l = parseFloat(s[0]), i.yOrigin = u = parseFloat(s[1]), n && w !== zt && (p = w[0], f = w[1], d = w[2], m = w[3], g = w[4], v = w[5], (y = p * m - f * d) && (h = l * (m / y) + u * (-d / y) + (d * v - m * g) / y, c = l * (-f / y) + u * (p / y) - (p * v - f * g) / y, l = i.xOrigin = s[0] = h, u = i.yOrigin = s[1] = c)), b && (a && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), o || !1 !== o && !1 !== r.defaultSmoothOrigin ? (h = l - _, c = u - x, b.xOffset += h * w[0] + c * w[2] - h, b.yOffset += h * w[1] + c * w[3] - c) : b.xOffset = b.yOffset = 0), a || t.setAttribute("data-svg-origin", s.join(" ")) },
            Ut = function(t) { var e, i = F("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    n = this.parentNode,
                    r = this.nextSibling,
                    o = this.style.cssText; if (kt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ut } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox()); return r ? n.insertBefore(this, r) : n.appendChild(this), kt.removeChild(i), this.style.cssText = o, e },
            Bt = function(t) { return !(!Dt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) { try { return t.getBBox() } catch (e) { return Ut.call(t, !0) } }(t)) },
            zt = [1, 0, 0, 1, 0, 0],
            jt = function(t, e) { var i, n, r, o, a, s, h = t._gsTransform || new Nt,
                    c = t.style; if (Ot ? n = $(t, Pt, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(O)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Ot || !(s = !J(t) || "none" === J(t).display) && t.parentNode || (s && (o = c.display, c.display = "block"), t.parentNode || (a = 1, kt.appendChild(t)), i = !(n = $(t, Pt, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : s && qt(c, "display"), a && kt.removeChild(t)), (h.svg || t.getCTM && Bt(t)) && (i && -1 !== (c[Ot] + "").indexOf("matrix") && (n = c[Ot], i = 0), r = t.getAttribute("transform"), i && r && (n = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", i = 0)), i) return zt; for (r = (n || "").match(g) || [], xt = r.length; --xt > -1;) o = Number(r[xt]), r[xt] = (a = o - (o |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + o : o; return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r },
            Vt = z.getTransform = function(t, e, i, n) { if (t._gsTransform && i && !n) return t._gsTransform; var o, a, s, h, c, l, u = i && t._gsTransform || new Nt,
                    p = u.scaleX < 0,
                    f = It && (parseFloat($(t, Rt, e, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                    d = parseFloat(r.defaultTransformPerspective) || 0; if (u.svg = !(!t.getCTM || !Bt(t)), u.svg && (Ft(t, $(t, Rt, e, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")), Et = r.useSVGTransformAttr || Ht), (o = jt(t)) !== zt) { if (16 === o.length) { var m, g, v, y, _, x = o[0],
                            b = o[1],
                            w = o[2],
                            T = o[3],
                            E = o[4],
                            S = o[5],
                            M = o[6],
                            A = o[7],
                            L = o[8],
                            C = o[9],
                            O = o[10],
                            P = o[12],
                            R = o[13],
                            I = o[14],
                            N = o[11],
                            G = Math.atan2(M, O);
                        u.zOrigin && (P = L * (I = -u.zOrigin) - o[12], R = C * I - o[13], I = O * I + u.zOrigin - o[14]), u.rotationX = G * D, G && (m = E * (y = Math.cos(-G)) + L * (_ = Math.sin(-G)), g = S * y + C * _, v = M * y + O * _, L = E * -_ + L * y, C = S * -_ + C * y, O = M * -_ + O * y, N = A * -_ + N * y, E = m, S = g, M = v), G = Math.atan2(-w, O), u.rotationY = G * D, G && (g = b * (y = Math.cos(-G)) - C * (_ = Math.sin(-G)), v = w * y - O * _, C = b * _ + C * y, O = w * _ + O * y, N = T * _ + N * y, x = m = x * y - L * _, b = g, w = v), G = Math.atan2(b, x), u.rotation = G * D, G && (m = x * (y = Math.cos(G)) + b * (_ = Math.sin(G)), g = E * y + S * _, v = L * y + C * _, b = b * y - x * _, S = S * y - E * _, C = C * y - L * _, x = m, E = g, L = v), u.rotationX && Math.abs(u.rotationX) + Math.abs(u.rotation) > 359.9 && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), G = Math.atan2(E, S), u.scaleX = (1e5 * Math.sqrt(x * x + b * b + w * w) + .5 | 0) / 1e5, u.scaleY = (1e5 * Math.sqrt(S * S + M * M) + .5 | 0) / 1e5, u.scaleZ = (1e5 * Math.sqrt(L * L + C * C + O * O) + .5 | 0) / 1e5, x /= u.scaleX, E /= u.scaleY, b /= u.scaleX, S /= u.scaleY, Math.abs(G) > 2e-5 ? (u.skewX = G * D, E = 0, "simple" !== u.skewType && (u.scaleY *= 1 / Math.cos(G))) : u.skewX = 0, u.perspective = N ? 1 / (N < 0 ? -N : N) : 0, u.x = P, u.y = R, u.z = I, u.svg && (u.x -= u.xOrigin - (u.xOrigin * x - u.yOrigin * E), u.y -= u.yOrigin - (u.yOrigin * b - u.xOrigin * S)) } else if (!It || n || !o.length || u.x !== o[4] || u.y !== o[5] || !u.rotationX && !u.rotationY) { var k = o.length >= 6,
                            H = k ? o[0] : 1,
                            F = o[1] || 0,
                            U = o[2] || 0,
                            B = k ? o[3] : 1;
                        u.x = o[4] || 0, u.y = o[5] || 0, s = Math.sqrt(H * H + F * F), h = Math.sqrt(B * B + U * U), c = H || F ? Math.atan2(F, H) * D : u.rotation || 0, l = U || B ? Math.atan2(U, B) * D + c : u.skewX || 0, u.scaleX = s, u.scaleY = h, u.rotation = c, u.skewX = l, It && (u.rotationX = u.rotationY = u.z = 0, u.perspective = d, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * H + u.yOrigin * U), u.y -= u.yOrigin - (u.xOrigin * F + u.yOrigin * B)) } for (a in Math.abs(u.skewX) > 90 && Math.abs(u.skewX) < 270 && (p ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180)), u.zOrigin = f, u) u[a] < 2e-5 && u[a] > -2e-5 && (u[a] = 0) } return i && (t._gsTransform = u, u.svg && (Et && t.style[Ot] ? Gc.f.delayedCall(.001, function() { qt(t.style, Ot) }) : !Et && t.getAttribute("transform") && Gc.f.delayedCall(.001, function() { t.removeAttribute("transform") }))), u },
            Wt = function(t) { var e, i, n = this.data,
                    r = -n.rotation * N,
                    o = r + n.skewX * N,
                    a = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
                    s = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
                    h = (Math.sin(o) * -n.scaleY * 1e5 | 0) / 1e5,
                    c = (Math.cos(o) * n.scaleY * 1e5 | 0) / 1e5,
                    l = this.t.style,
                    u = this.t.currentStyle; if (u) { i = s, s = -h, h = -i, e = u.filter, l.filter = ""; var p, d, m = this.t.offsetWidth,
                        g = this.t.offsetHeight,
                        v = "absolute" !== u.position,
                        y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + s + ", M21=" + h + ", M22=" + c,
                        _ = n.x + m * n.xPercent / 100,
                        w = n.y + g * n.yPercent / 100; if (null != n.ox && (_ += (p = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (p * a + (d = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2) * s), w += d - (p * h + d * c)), y += v ? ", Dx=" + ((p = m / 2) - (p * a + (d = g / 2) * s) + _) + ", Dy=" + (d - (p * h + d * c) + w) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = e.replace(P, y) : l.filter = y + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === s && 0 === h && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && l.removeAttribute("filter")), !v) { var T, E, S, M = f < 8 ? 1 : -1; for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (s < 0 ? -s : s) * g)) / 2 + _), n.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (h < 0 ? -h : h) * m)) / 2 + w), xt = 0; xt < 4; xt++) S = (i = -1 !== (T = u[E = nt[xt]]).indexOf("px") ? parseFloat(T) : K(this.t, E, parseFloat(T), T.replace(x, "")) || 0) !== n[E] ? xt < 2 ? -n.ieOffsetX : -n.ieOffsetY : xt < 2 ? p - n.ieOffsetX : d - n.ieOffsetY, l[E] = (n[E] = Math.round(i - S * (0 === xt || 2 === xt ? 1 : M))) + "px" } } },
            Xt = z.set3DTransformRatio = z.setTransformRatio = function(t) { var e, i, n, r, o, a, s, h, c, l, p, f, d, m, g, v, y, _, x, b, w = this.data,
                    T = this.t.style,
                    E = w.rotation,
                    S = w.rotationX,
                    M = w.rotationY,
                    A = w.scaleX,
                    L = w.scaleY,
                    C = w.scaleZ,
                    O = w.x,
                    P = w.y,
                    R = w.z,
                    I = w.svg,
                    D = w.perspective,
                    G = w.force3D,
                    k = w.skewY,
                    H = w.skewX; if (k && (H += k, E += k), !((1 !== t && 0 !== t || "auto" !== G || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && G || R || D || M || S || 1 !== C) || Et && I || !It) E || H || I ? (E *= N, b = H * N, 1e5, i = Math.cos(E) * A, o = Math.sin(E) * A, n = Math.sin(E - b) * -L, a = Math.cos(E - b) * L, b && "simple" === w.skewType && (e = Math.tan(b - k * N), n *= e = Math.sqrt(1 + e * e), a *= e, k && (e = Math.tan(k * N), i *= e = Math.sqrt(1 + e * e), o *= e)), I && (O += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset, P += w.yOrigin - (w.xOrigin * o + w.yOrigin * a) + w.yOffset, Et && (w.xPercent || w.yPercent) && (g = this.t.getBBox(), O += .01 * w.xPercent * g.width, P += .01 * w.yPercent * g.height), O < (g = 1e-6) && O > -g && (O = 0), P < g && P > -g && (P = 0)), x = (1e5 * i | 0) / 1e5 + "," + (1e5 * o | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + O + "," + P + ")", I && Et ? this.t.setAttribute("transform", "matrix(" + x) : T[Ot] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + x) : T[Ot] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + L + "," + O + "," + P + ")";
                else { if (u && (A < (g = 1e-4) && A > -g && (A = C = 2e-5), L < g && L > -g && (L = C = 2e-5), !D || w.z || w.rotationX || w.rotationY || (D = 0)), E || H) E *= N, v = i = Math.cos(E), y = o = Math.sin(E), H && (E -= H * N, v = Math.cos(E), y = Math.sin(E), "simple" === w.skewType && (e = Math.tan((H - k) * N), v *= e = Math.sqrt(1 + e * e), y *= e, w.skewY && (e = Math.tan(k * N), i *= e = Math.sqrt(1 + e * e), o *= e))), n = -y, a = v;
                    else { if (!(M || S || 1 !== C || D || I)) return void(T[Ot] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + P + "px," + R + "px)" + (1 !== A || 1 !== L ? " scale(" + A + "," + L + ")" : ""));
                        i = a = 1, n = o = 0 } l = 1, r = s = h = c = p = f = 0, d = D ? -1 / D : 0, m = w.zOrigin, g = 1e-6, ",", "0", (E = M * N) && (v = Math.cos(E), h = -(y = Math.sin(E)), p = d * -y, r = i * y, s = o * y, l = v, d *= v, i *= v, o *= v), (E = S * N) && (e = n * (v = Math.cos(E)) + r * (y = Math.sin(E)), _ = a * v + s * y, c = l * y, f = d * y, r = n * -y + r * v, s = a * -y + s * v, l *= v, d *= v, n = e, a = _), 1 !== C && (r *= C, s *= C, l *= C, d *= C), 1 !== L && (n *= L, a *= L, c *= L, f *= L), 1 !== A && (i *= A, o *= A, h *= A, p *= A), (m || I) && (m && (O += r * -m, P += s * -m, R += l * -m + m), I && (O += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset, P += w.yOrigin - (w.xOrigin * o + w.yOrigin * a) + w.yOffset), O < g && O > -g && (O = "0"), P < g && P > -g && (P = "0"), R < g && R > -g && (R = 0)), x = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < g && i > -g ? "0" : i) + "," + (o < g && o > -g ? "0" : o) + "," + (h < g && h > -g ? "0" : h), x += "," + (p < g && p > -g ? "0" : p) + "," + (n < g && n > -g ? "0" : n) + "," + (a < g && a > -g ? "0" : a), S || M || 1 !== C ? (x += "," + (c < g && c > -g ? "0" : c) + "," + (f < g && f > -g ? "0" : f) + "," + (r < g && r > -g ? "0" : r), x += "," + (s < g && s > -g ? "0" : s) + "," + (l < g && l > -g ? "0" : l) + "," + (d < g && d > -g ? "0" : d) + ",") : x += ",0,0,0,0,1,0,", x += O + "," + P + "," + R + "," + (D ? 1 + -R / D : 1) + ")", T[Ot] = x } };
        (s = Nt.prototype).x = s.y = s.z = s.skewX = s.skewY = s.rotation = s.rotationX = s.rotationY = s.zOrigin = s.xPercent = s.yPercent = s.xOffset = s.yOffset = 0, s.scaleX = s.scaleY = s.scaleZ = 1, wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function(t, e, n, o, a, s, h) { if (o._lastParsedTransform === h) return a;
                o._lastParsedTransform = h; var c, l = h.scale && "function" == typeof h.scale ? h.scale : 0; "function" == typeof h[n] && (c = h[n], h[n] = e), l && (h.scale = l(m, t)); var u, p, f, g, v, y, _, x, b, w = t._gsTransform,
                    T = t.style,
                    E = Ct.length,
                    S = h,
                    M = {},
                    A = Vt(t, i, !0, S.parseTransform),
                    L = S.transform && ("function" == typeof S.transform ? S.transform(m, d) : S.transform); if (A.skewType = S.skewType || A.skewType || r.defaultSkewType, o._transform = A, "rotationZ" in S && (S.rotation = S.rotationZ), L && "string" == typeof L && Ot)(p = U.style)[Ot] = L, p.display = "block", p.position = "absolute", -1 !== L.indexOf("%") && (p.width = $(t, "width"), p.height = $(t, "height")), H.body.appendChild(U), u = Vt(U, null, !1), "simple" === A.skewType && (u.scaleY *= Math.cos(u.skewX * N)), A.svg && (y = A.xOrigin, _ = A.yOrigin, u.x -= A.xOffset, u.y -= A.yOffset, (S.transformOrigin || S.svgOrigin) && (L = {}, Ft(t, ot(S.transformOrigin), L, S.svgOrigin, S.smoothOrigin, !0), y = L.xOrigin, _ = L.yOrigin, u.x -= L.xOffset - A.xOffset, u.y -= L.yOffset - A.yOffset), (y || _) && (x = jt(U, !0), u.x -= y - (y * x[0] + _ * x[2]), u.y -= _ - (y * x[1] + _ * x[3]))), H.body.removeChild(U), u.perspective || (u.perspective = A.perspective), null != S.xPercent && (u.xPercent = st(S.xPercent, A.xPercent)), null != S.yPercent && (u.yPercent = st(S.yPercent, A.yPercent));
                else if ("object" == typeof S) { if (u = { scaleX: st(null != S.scaleX ? S.scaleX : S.scale, A.scaleX), scaleY: st(null != S.scaleY ? S.scaleY : S.scale, A.scaleY), scaleZ: st(S.scaleZ, A.scaleZ), x: st(S.x, A.x), y: st(S.y, A.y), z: st(S.z, A.z), xPercent: st(S.xPercent, A.xPercent), yPercent: st(S.yPercent, A.yPercent), perspective: st(S.transformPerspective, A.perspective) }, null != (v = S.directionalRotation))
                        if ("object" == typeof v)
                            for (p in v) S[p] = v[p];
                        else S.rotation = v; "string" == typeof S.x && -1 !== S.x.indexOf("%") && (u.x = 0, u.xPercent = st(S.x, A.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (u.y = 0, u.yPercent = st(S.y, A.yPercent)), u.rotation = ht("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : A.rotation, A.rotation, "rotation", M), It && (u.rotationX = ht("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", M), u.rotationY = ht("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", M)), u.skewX = ht(S.skewX, A.skewX), u.skewY = ht(S.skewY, A.skewY) } for (It && null != S.force3D && (A.force3D = S.force3D, g = !0), (f = A.force3D || A.z || A.rotationX || A.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == S.scale || (u.scaleZ = 1); --E > -1;)((L = u[b = Ct[E]] - A[b]) > 1e-6 || L < -1e-6 || null != S[b] || null != G[b]) && (g = !0, a = new vt(A, b, A[b], L, a), b in M && (a.e = M[b]), a.xs0 = 0, a.plugin = s, o._overwriteProps.push(a.n)); return L = S.transformOrigin, A.svg && (L || S.svgOrigin) && (y = A.xOffset, _ = A.yOffset, Ft(t, ot(L), u, S.svgOrigin, S.smoothOrigin), a = yt(A, "xOrigin", (w ? A : u).xOrigin, u.xOrigin, a, "transformOrigin"), a = yt(A, "yOrigin", (w ? A : u).yOrigin, u.yOrigin, a, "transformOrigin"), y === A.xOffset && _ === A.yOffset || (a = yt(A, "xOffset", w ? y : A.xOffset, A.xOffset, a, "transformOrigin"), a = yt(A, "yOffset", w ? _ : A.yOffset, A.yOffset, a, "transformOrigin")), L = "0px 0px"), (L || It && f && A.zOrigin) && (Ot ? (g = !0, b = Rt, L = (L || $(t, b, i, !1, "50% 50%")) + "", (a = new vt(T, b, 0, 0, a, -1, "transformOrigin")).b = T[b], a.plugin = s, It ? (p = A.zOrigin, L = L.split(" "), A.zOrigin = (L.length > 2 && (0 === p || "0px" !== L[2]) ? parseFloat(L[2]) : p) || 0, a.xs0 = a.e = L[0] + " " + (L[1] || "50%") + " 0px", (a = new vt(A, "zOrigin", 0, 0, a, -1, a.n)).b = p, a.xs0 = a.e = A.zOrigin) : a.xs0 = a.e = L) : ot(L + "", A)), g && (o._transformType = A.svg && Et || !f && 3 !== this._transformType ? 2 : 3), c && (h[n] = c), l && (h.scale = l), a }, prefix: !0 }), wt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), wt("borderRadius", { defaultValue: "0px", parser: function(t, n, r, o, a, s) { n = this.format(n); var h, c, l, u, p, f, d, m, g, v, y, _, x, b, w, T, E = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    S = t.style; for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), h = n.split(" "), c = 0; c < E.length; c++) this.p.indexOf("border") && (E[c] = Z(E[c])), -1 !== (p = u = $(t, E[c], i, !1, "0px")).indexOf(" ") && (u = p.split(" "), p = u[0], u = u[1]), f = l = h[c], d = parseFloat(p), _ = p.substr((d + "").length), (x = "=" === f.charAt(1)) ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), m *= parseFloat(f), y = f.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f), y = f.substr((m + "").length)), "" === y && (y = e[r] || _), y !== _ && (b = K(t, "borderLeft", d, _), w = K(t, "borderTop", d, _), "%" === y ? (p = b / g * 100 + "%", u = w / v * 100 + "%") : "em" === y ? (p = b / (T = K(t, "borderLeft", 1, "em")) + "em", u = w / T + "em") : (p = b + "px", u = w + "px"), x && (f = parseFloat(p) + m + y, l = parseFloat(u) + m + y)), a = _t(S, E[c], p + " " + u, f + " " + l, !1, "0px", a); return a }, prefix: !0, formatter: dt("0px 0px 0px 0px", !1, !0) }), wt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, n, r, o, a) { return _t(t.style, n, this.format($(t, n, i, !1, "0px 0px")), this.format(e), !1, "0px", o) }, prefix: !0, formatter: dt("0px 0px", !1, !0) }), wt("backgroundPosition", { defaultValue: "0 0", parser: function(t, e, n, r, o, a) { var s, h, c, l, u, p, d = "background-position",
                    m = i || J(t, null),
                    g = this.format((m ? f ? m.getPropertyValue(d + "-x") + " " + m.getPropertyValue(d + "-y") : m.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    v = this.format(e); if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (p = $(t, "backgroundImage").replace(A, "")) && "none" !== p) { for (s = g.split(" "), h = v.split(" "), B.setAttribute("src", p), c = 2; --c > -1;)(l = -1 !== (g = s[c]).indexOf("%")) !== (-1 !== h[c].indexOf("%")) && (u = 0 === c ? t.offsetWidth - B.width : t.offsetHeight - B.height, s[c] = l ? parseFloat(g) / 100 * u + "px" : parseFloat(g) / u * 100 + "%");
                    g = s.join(" ") } return this.parseComplex(t.style, g, v, o, a) }, formatter: ot }), wt("backgroundSize", { defaultValue: "0 0", formatter: function(t) { return "co" === (t += "").substr(0, 2) ? t : ot(-1 === t.indexOf(" ") ? t + " " + t : t) } }), wt("perspective", { defaultValue: "0px", prefix: !0 }), wt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), wt("transformStyle", { prefix: !0 }), wt("backfaceVisibility", { prefix: !0 }), wt("userSelect", { prefix: !0 }), wt("margin", { parser: mt("marginTop,marginRight,marginBottom,marginLeft") }), wt("padding", { parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), wt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, n, r, o, a) { var s, h, c; return f < 9 ? (h = t.currentStyle, c = f < 8 ? " " : ",", s = "rect(" + h.clipTop + c + h.clipRight + c + h.clipBottom + c + h.clipLeft + ")", e = this.format(e).split(",").join(c)) : (s = this.format($(t, this.p, i, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, o, a) } }), wt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), wt("autoRound,strictUnits", { parser: function(t, e, i, n, r) { return r } }), wt("border", { defaultValue: "0px solid #000", parser: function(t, e, n, r, o, a) { var s = $(t, "borderTopWidth", i, !1, "0px"),
                    h = this.format(e).split(" "),
                    c = h[0].replace(x, ""); return "px" !== c && (s = parseFloat(s) / K(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(s + " " + $(t, "borderTopStyle", i, !1, "solid") + " " + $(t, "borderTopColor", i, !1, "#000")), h.join(" "), o, a) }, color: !0, formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(ft) || ["#000"])[0] } }), wt("borderWidth", { parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), wt("float,cssFloat,styleFloat", { parser: function(t, e, i, n, r, o) { var a = t.style,
                    s = "cssFloat" in a ? "cssFloat" : "styleFloat"; return new vt(a, s, 0, 0, r, -1, i, !1, 0, a[s], e) } }); var Yt = function(t) { var e, i = this.t,
                n = i.filter || $(this.data, "filter") || "",
                r = this.s + this.c * t | 0;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !$(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r)) };
        wt("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(t, e, n, r, o, a) { var s = parseFloat($(t, "opacity", i, !1, "1")),
                    h = t.style,
                    c = "autoAlpha" === n; return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), c && 1 === s && "hidden" === $(t, "visibility", i) && 0 !== e && (s = 0), V ? o = new vt(h, "opacity", s, e - s, o) : ((o = new vt(h, "opacity", 100 * s, 100 * (e - s), o)).xn1 = c ? 1 : 0, h.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = a, o.setRatio = Yt), c && ((o = new vt(h, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", r._overwriteProps.push(o.n), r._overwriteProps.push(n)), o } }); var qt = function(t, e) { e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e)) },
            Zt = function(t) { if (this.t._gsClassPT = this, 1 === t || 0 === t) { this.t.setAttribute("class", 0 === t ? this.b : this.e); for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : qt(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) };
        wt("className", { parser: function(e, n, r, o, a, s, h) { var c, l, u, p, f, d = e.getAttribute("class") || "",
                    m = e.style.cssText; if ((a = o._classNamePT = new vt(e, r, 0, 0, a, 2)).setRatio = Zt, a.pr = -11, t = !0, a.b = d, l = tt(e, i), u = e._gsClassPT) { for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                    u.setRatio(1) } return e._gsClassPT = a, a.e = "=" !== n.charAt(1) ? n : d.replace(new RegExp("(?:\\s|^)" + n.substr(2) + "(?![\\w-])"), "") + ("+" === n.charAt(0) ? " " + n.substr(2) : ""), e.setAttribute("class", a.e), c = et(e, l, tt(e), h, p), e.setAttribute("class", d), a.data = c.firstMPT, e.style.cssText = m, a = a.xfirst = o.parse(e, c.difs, a, s) } }); var Jt = function(t) { if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) { var e, i, n, r, o, s = this.t.style,
                    h = a.transform.parse; if ("all" === this.e) s.cssText = "", r = !0;
                else
                    for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1;) i = e[n], a[i] && (a[i].parse === h ? r = !0 : i = "transformOrigin" === i ? Rt : a[i].p), qt(s, i);
                r && (qt(s, Ot), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform)) } }; for (wt("clearProps", { parser: function(e, i, n, r, o) { return (o = new vt(e, n, 0, 0, o, 2)).setRatio = Jt, o.e = i, o.pr = -10, o.data = r._tween, t = !0, o } }), s = "bezier,throwProps,physicsProps,physics2D".split(","), xt = s.length; xt--;) Tt(s[xt]);
        (s = r.prototype)._firstPT = s._lastParsedTransform = s._transform = null, s._onInitTween = function(o, s, u, f) { if (!o.nodeType) return !1;
            this._target = d = o, this._tween = u, this._vars = s, m = f, h = s.autoRound, t = !1, e = s.suffixMap || r.suffixMap, i = J(o, ""), n = this._overwriteProps; var g, v, y, _, x, b, T, E, S, M = o.style; if (c && "" === M.zIndex && ("auto" !== (g = $(o, "zIndex", i)) && "" !== g || this._addLazySet(M, "zIndex", 0)), "string" == typeof s && (_ = M.cssText, g = tt(o, i), M.cssText = _ + ";" + s, g = et(o, g, tt(o)).difs, !V && w.test(s) && (g.opacity = parseFloat(RegExp.$1)), s = g, M.cssText = _), s.className ? this._firstPT = v = a.className.parse(o, s.className, "className", this, null, null, s) : this._firstPT = v = this.parse(o, s, null), this._transformType) { for (S = 3 === this._transformType, Ot ? l && (c = !0, "" === M.zIndex && ("auto" !== (T = $(o, "zIndex", i)) && "" !== T || this._addLazySet(M, "zIndex", 0)), p && this._addLazySet(M, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : M.zoom = 1, y = v; y && y._next;) y = y._next;
                E = new vt(o, "transform", 0, 0, null, 2), this._linkCSSP(E, null, y), E.setRatio = Ot ? Xt : Wt, E.data = this._transform || Vt(o, i, !0), E.tween = u, E.pr = -1, n.pop() } if (t) { for (; v;) { for (b = v._next, y = _; y && y.pr > v.pr;) y = y._next;
                    (v._prev = y ? y._prev : x) ? v._prev._next = v: _ = v, (v._next = y) ? y._prev = v : x = v, v = b } this._firstPT = _ } return !0 }, s.parse = function(t, n, r, o) { var s, c, l, u, p, f, g, v, y, _, b = t.style; for (s in n) { if ("function" == typeof(f = n[s]) && (f = f(m, d)), c = a[s]) r = c.parse(t, f, s, this, r, o, n);
                else { if ("--" === s.substr(0, 2)) { this._tween._propLookup[s] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(s) + "", f + "", s, !1, s); continue } p = $(t, s, i) + "", y = "string" == typeof f, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || y && E.test(f) ? (y || (f = ((f = ut(f)).length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), r = _t(b, s, p, f, !0, "transparent", r, 0, o)) : y && I.test(f) ? r = _t(b, s, p, f, !0, null, r, 0, o) : (g = (l = parseFloat(p)) || 0 === l ? p.substr((l + "").length) : "", "" !== p && "auto" !== p || ("width" === s || "height" === s ? (l = rt(t, s, i), g = "px") : "left" === s || "top" === s ? (l = Q(t, s, i), g = "px") : (l = "opacity" !== s ? 0 : 1, g = "")), (_ = y && "=" === f.charAt(1)) ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), v = f.replace(x, "")) : (u = parseFloat(f), v = y ? f.replace(x, "") : ""), "" === v && (v = s in e ? e[s] : g), f = u || 0 === u ? (_ ? u + l : u) + v : n[s], g !== v && ("" === v && "lineHeight" !== s || (u || 0 === u) && l && (l = K(t, s, l, g), "%" === v ? (l /= K(t, s, 100, "%") / 100, !0 !== n.strictUnits && (p = l + "%")) : "em" === v || "rem" === v || "vw" === v || "vh" === v ? l /= K(t, s, 1, v) : "px" !== v && (u = K(t, s, u, v), v = "px"), _ && (u || 0 === u) && (f = u + l + v))), _ && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== b[s] && (f || f + "" != "NaN" && null != f) ? (r = new vt(b, s, u || l || 0, 0, r, -1, s, !1, 0, p, f)).xs0 = "none" !== f || "display" !== s && -1 === s.indexOf("Style") ? f : p : X("invalid " + s + " tween value: " + n[s]) : (r = new vt(b, s, l, u - l, r, 0, s, !1 !== h && ("px" === v || "zIndex" === s), 0, p, f)).xs0 = v) } o && r && !r.plugin && (r.plugin = o) } return r }, s.setRatio = function(t) { var e, i, n, r = this._firstPT; if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; r;) { if (e = r.c * t + r.s, r.r ? e = r.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                            if (1 === r.type)
                                if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                        else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                        else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                        else { for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                            r.t[r.p] = i } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else r.t[r.p] = e + r.xs0;
                        r = r._next } else
                        for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                else
                    for (; r;) { if (2 !== r.type)
                            if (r.r && -1 !== r.type)
                                if (e = r.r(r.s + r.c), r.type) { if (1 === r.type) { for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                        r.t[r.p] = i } } else r.t[r.p] = e + r.xs0;
                        else r.t[r.p] = r.e;
                        else r.setRatio(t);
                        r = r._next } }, s._enableTransforms = function(t) { this._transform = this._transform || Vt(this._target, i, !0), this._transformType = this._transform.svg && Et || !t && 3 !== this._transformType ? 2 : 3 }; var $t = function(t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
        s._addLazySet = function(t, e, i) { var n = this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = $t, n.data = this }, s._linkCSSP = function(t, e, i, n) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, s._mod = function(t) { for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next }, s._kill = function(t) { var e, i, n, r = t; if (t.autoAlpha || t.alpha) { for (i in r = {}, t) r[i] = t[i];
                r.opacity = 1, r.autoAlpha && (r.visibility = 1) } for (t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next; return Gc.d.prototype._kill.call(this, r) }; var Kt = function(t, e, i) { var n, r, o, a; if (t.slice)
                for (r = t.length; --r > -1;) Kt(t[r], e, i);
            else
                for (r = (n = t.childNodes).length; --r > -1;) a = (o = n[r]).type, o.style && (e.push(tt(o)), i && i.push(o)), 1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || Kt(o, e, i) }; return r.cascadeTo = function(t, e, i) { var n, r, o, a, s = Gc.f.to(t, e, i),
                h = [s],
                c = [],
                l = [],
                u = [],
                p = Gc.f._internals.reservedProps; for (t = s._targets || s.target, Kt(t, c, u), s.render(e, !0, !0), Kt(t, l), s.render(0, !0, !0), s._enabled(!0), n = u.length; --n > -1;)
                if ((r = et(u[n], c[n], l[n])).firstMPT) { for (o in r = r.difs, i) p[o] && (r[o] = i[o]); for (o in a = {}, r) a[o] = c[n][o];
                    h.push(Gc.f.fromTo(u[n], e, a, r)) } return h }, Gc.d.activate([r]), r }, !0);
    var Hc = Gc.g.CSSPlugin,
        Fc = Gc.e._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function(t, e, i, n) { var r, o; if ("function" != typeof t.setAttribute) return !1; for (r in e) "function" == typeof(o = e[r]) && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r); return !0 } }),
        Uc = Gc.e._gsDefine.plugin({ propName: "roundProps", version: "1.7.0", priority: -1, API: 2, init: function(t, e, i) { return this._tween = i, !0 } }),
        Bc = function(t) { var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1; return function(i) { return (Math.round(i / t) * t * e | 0) / e } },
        zc = function(t, e) { for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next },
        jc = Uc.prototype;
    /*!
     * VERSION: 0.6.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     */
    jc._onInitAllProps = function() { var t, e, i, n, r = this._tween,
            o = r.vars.roundProps,
            a = {},
            s = r._propLookup.roundProps; if ("object" != typeof o || o.push)
            for ("string" == typeof o && (o = o.split(",")), i = o.length; --i > -1;) a[o[i]] = Math.round;
        else
            for (n in o) a[n] = Bc(o[n]); for (n in a)
            for (t = r._firstPT; t;) e = t._next, t.pg ? t.t._mod(a) : t.n === n && (2 === t.f && t.t ? zc(t.t._firstPT, a[n]) : (this._add(t.t, n, t.s, t.c, a[n]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : r._firstPT === t && (r._firstPT = e), t._next = t._prev = null, r._propLookup[n] = s)), t = e; return !1 }, jc._add = function(t, e, i, n, r) { this._addTween(t, e, i, i + n, e, r || Math.round), this._overwriteProps.push(e) };
    /*!
     * VERSION: 0.3.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    var Vc = Gc.e._gsDefine.plugin({ propName: "directionalRotation", version: "0.3.1", API: 2, init: function(t, e, i, n) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var r, o, a, s, h, c, l = !0 === e.useRadians ? 2 * Math.PI : 360; for (r in e) "useRadians" !== r && ("function" == typeof(s = e[r]) && (s = s(n, t)), o = (c = (s + "").split("_"))[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), h = (s = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? a + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - a, c.length && (-1 !== (o = c.join("_")).indexOf("short") && (h %= l) !== h % (l / 2) && (h = h < 0 ? h + l : h - l), -1 !== o.indexOf("_cw") && h < 0 ? h = (h + 9999999999 * l) % l - (h / l | 0) * l : -1 !== o.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * l) % l - (h / l | 0) * l)), (h > 1e-6 || h < -1e-6) && (this._addTween(t, r, a, a + h, r), this._overwriteProps.push(r))); return !0 }, set: function(t) { var e; if (1 !== t) this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next } });
    Vc._autoCSS = !0,
        /*!
         * VERSION: 2.0.2
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         */
        Gc.e._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() { var t = function(t) { Gc.c.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate; var e, i, n = this.vars; for (i in n) e = n[i], r(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
                    r(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger) },
                e = Gc.f._internals,
                i = t._internals = {},
                n = e.isSelector,
                r = e.isArray,
                o = e.lazyTweens,
                a = e.lazyRender,
                s = Gc.e._gsDefine.globals,
                h = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
                c = function(t, e, i) { var n, r, o = t.cycle; for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                    delete t.cycle },
                l = i.pauseCallback = function() {},
                u = function(t) { var e, i = [],
                        n = t.length; for (e = 0; e !== n; i.push(t[e++])); return i },
                p = t.prototype = new Gc.c; return t.version = "2.0.2", p.constructor = t, p.kill()._gc = p._forcingPlayhead = p._hasPause = !1, p.to = function(t, e, i, n) { var r = i.repeat && s.TweenMax || Gc.f; return e ? this.add(new r(t, e, i), n) : this.set(t, i, n) }, p.from = function(t, e, i, n) { return this.add((i.repeat && s.TweenMax || Gc.f).from(t, e, i), n) }, p.fromTo = function(t, e, i, n, r) { var o = n.repeat && s.TweenMax || Gc.f; return e ? this.add(o.fromTo(t, e, i, n), r) : this.set(t, n, r) }, p.staggerTo = function(e, i, r, o, a, s, l, p) { var f, d, m = new t({ onComplete: s, onCompleteParams: l, callbackScope: p, smoothChildTiming: this.smoothChildTiming }),
                    g = r.cycle; for ("string" == typeof e && (e = Gc.f.selector(e) || e), n(e = e || []) && (e = u(e)), (o = o || 0) < 0 && ((e = u(e)).reverse(), o *= -1), d = 0; d < e.length; d++)(f = h(r)).startAt && (f.startAt = h(f.startAt), f.startAt.cycle && c(f.startAt, e, d)), g && (c(f, e, d), null != f.duration && (i = f.duration, delete f.duration)), m.to(e[d], i, f, d * o); return this.add(m, a) }, p.staggerFrom = function(t, e, i, n, r, o, a, s) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, a, s) }, p.staggerFromTo = function(t, e, i, n, r, o, a, s, h) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, a, s, h) }, p.call = function(t, e, i, n) { return this.add(Gc.f.delayedCall(0, t, e, i), n) }, p.set = function(t, e, i) { return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new Gc.f(t, 0, e), i) }, t.exportRoot = function(e, i) { null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0); var n, r, o, a, s = new t(e),
                    h = s._timeline; for (null == i && (i = !0), h._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = h._time, o = h._first; o;) a = o._next, i && o instanceof Gc.f && o.target === o.vars.onComplete || ((r = o._startTime - o._delay) < 0 && (n = 1), s.add(o, r)), o = a; return h.add(s, 0), n && s.totalDuration(), s }, p.add = function(e, i, n, o) { var a, s, h, c, l, u; if ("number" != typeof i && (i = this._parseTimeOrLabel(i, 0, !0, e)), !(e instanceof Gc.a)) { if (e instanceof Array || e && e.push && r(e)) { for (n = n || "normal", o = o || 0, a = i, s = e.length, h = 0; h < s; h++) r(c = e[h]) && (c = new t({ tweens: c })), this.add(c, a), "string" != typeof c && "function" != typeof c && ("sequence" === n ? a = c._startTime + c.totalDuration() / c._timeScale : "start" === n && (c._startTime -= c.delay())), a += o; return this._uncache(!0) } if ("string" == typeof e) return this.addLabel(e, i); if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                    e = Gc.f.delayedCall(0, e) } if (Gc.c.prototype.add.call(this, e, i), e._time && (a = Math.max(0, Math.min(e.totalDuration(), (this.rawTime() - e._startTime) * e._timeScale)), Math.abs(a - e._totalTime) > 1e-5 && e.render(a, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (u = (l = this).rawTime() > e._startTime; l._timeline;) u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline; return this }, p.remove = function(t) { if (t instanceof Gc.a) { this._remove(t, !1); var e = t._timeline = t.vars.useFrames ? Gc.a._rootFramesTimeline : Gc.a._rootTimeline; return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this } if (t instanceof Array || t && t.push && r(t)) { for (var i = t.length; --i > -1;) this.remove(t[i]); return this } return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t) }, p._remove = function(t, e) { return Gc.c.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, p.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, p.insert = p.insertMultiple = function(t, e, i, n) { return this.add(t, e || 0, i, n) }, p.appendMultiple = function(t, e, i, n) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n) }, p.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, p.addPause = function(t, e, i, n) { var r = Gc.f.delayedCall(0, l, i, n || this); return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t) }, p.removeLabel = function(t) { return delete this._labels[t], this }, p.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, p._parseTimeOrLabel = function(t, e, i, n) { var o, a; if (n instanceof Gc.a && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && r(n)))
                    for (a = n.length; --a > -1;) n[a] instanceof Gc.a && n[a].timeline === this && this.remove(n[a]); if (o = "number" != typeof t || e ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - o : 0, i); if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = o);
                else { if (-1 === (a = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = o + e : e : this._labels[t] + e;
                    e = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1)), t = a > 1 ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, i) : o } return Number(t) + e }, p.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e) }, p.stop = function() { return this.paused(!0) }, p.gotoAndPlay = function(t, e) { return this.play(t, e) }, p.gotoAndStop = function(t, e) { return this.pause(t, e) }, p.render = function(t, e, i) { this._gc && this._enabled(!0, !1); var n, r, s, h, c, l, u, p = this._time,
                    f = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._startTime,
                    m = this._timeScale,
                    g = this._paused; if (p !== this._time && (t += this._time - p), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (c = !0, this._rawPrevTime > 1e-10 && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
                else if (t < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (h = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                    else { if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                        t = 0, this._initted || (c = !0) } else { if (this._hasPause && !this._forcingPlayhead && !e) { if (t >= p)
                            for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (l = n), n = n._prev;
                        l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)) } this._totalTime = this._time = this._rawPrevTime = t } if (this._time !== p && this._first || i || c || l) { if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (u = this._time) >= p)
                        for (n = this._first; n && (s = n._next, u === this._time && (!this._paused || g));)(n._active || n._startTime <= u && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                    else
                        for (n = this._last; n && (s = n._prev, u === this._time && (!this._paused || g));) { if (n._active || n._startTime <= p && !n._paused && !n._gc) { if (l === n) { for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                    l = null, this.pause() } n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i) } n = s } this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._gc || d !== this._startTime && m === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h))) } }, p._hasPausedChild = function() { for (var e = this._first; e;) { if (e._paused || e instanceof t && e._hasPausedChild()) return !0;
                    e = e._next } return !1 }, p.getChildren = function(t, e, i, n) { n = n || -9999999999; for (var r = [], o = this._first, a = 0; o;) o._startTime < n || (o instanceof Gc.f ? !1 !== e && (r[a++] = o) : (!1 !== i && (r[a++] = o), !1 !== t && (a = (r = r.concat(o.getChildren(!0, e, i))).length))), o = o._next; return r }, p.getTweensOf = function(t, e) { var i, n, r = this._gc,
                    o = [],
                    a = 0; for (r && this._enabled(!0, !0), n = (i = Gc.f.getTweensOf(t)).length; --n > -1;)(i[n].timeline === this || e && this._contains(i[n])) && (o[a++] = i[n]); return r && this._enabled(!1, !0), o }, p.recent = function() { return this._recent }, p._contains = function(t) { for (var e = t.timeline; e;) { if (e === this) return !0;
                    e = e.timeline } return !1 }, p.shiftChildren = function(t, e, i) { i = i || 0; for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next; if (e)
                    for (n in o) o[n] >= i && (o[n] += t); return this._uncache(!0) }, p._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0); return r }, p.clear = function(t) { var e = this.getChildren(!1, !0, !0),
                    i = e.length; for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1); return !1 !== t && (this._labels = {}), this._uncache(!0) }, p.invalidate = function() { for (var t = this._first; t;) t.invalidate(), t = t._next; return Gc.a.prototype.invalidate.call(this) }, p._enabled = function(t, e) { if (t === this._gc)
                    for (var i = this._first; i;) i._enabled(t, !0), i = i._next; return Gc.c.prototype._enabled.call(this, t, e) }, p.totalTime = function(t, e, i) { this._forcingPlayhead = !0; var n = Gc.a.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, n }, p.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, p.totalDuration = function(t) { if (!arguments.length) { if (this._dirty) { for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = e;
                        this._duration = this._totalDuration = n, this._dirty = !1 } return this._totalDuration } return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this }, p.paused = function(t) { if (!t)
                    for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next; return Gc.a.prototype.paused.apply(this, arguments) }, p.usesFrames = function() { for (var t = this._timeline; t._timeline;) t = t._timeline; return t === Gc.a._rootFramesTimeline }, p.rawTime = function(t) { return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale }, t }, !0);
    var Wc = Gc.g.TimelineLite;
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     */
    Gc.e._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function() { var t = function(t) { Wc.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0 },
            e = Gc.f._internals,
            i = e.lazyTweens,
            n = e.lazyRender,
            r = Gc.e._gsDefine.globals,
            o = new Gc.b(null, null, 1, 0),
            a = t.prototype = new Wc; return a.constructor = t, a.kill()._gc = !1, t.version = "2.0.2", a.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), Wc.prototype.invalidate.call(this) }, a.addCallback = function(t, e, i, n) { return this.add(Gc.f.delayedCall(0, t, i, n), e) }, a.removeCallback = function(t, e) { if (t)
                if (null == e) this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1); return this }, a.removePause = function(t) { return this.removeCallback(Wc._internals.pauseCallback, t) }, a.tweenTo = function(t, e) { e = e || {}; var i, n, a, s = { ease: o, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                h = e.repeat && r.TweenMax || Gc.f; for (n in e) s[n] = e[n]; return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, a = new h(this, i, s), s.onStart = function() { a.target.paused(!0), a.vars.time === a.target.time() || i !== a.duration() || a.isFromTo || a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale).render(a.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || a, e.onStartParams || []) }, a }, a.tweenFromTo = function(t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = !1 !== i.immediateRender; var n = this.tweenTo(e, i); return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001) }, a.render = function(t, e, r) { this._gc && this._enabled(!0, !1); var o, a, s, h, c, l, u, p, f = this._time,
                d = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._duration,
                g = this._totalTime,
                v = this._startTime,
                y = this._timeScale,
                _ = this._rawPrevTime,
                x = this._paused,
                b = this._cycle; if (f !== this._time && (t += this._time - f), t >= d - 1e-7 && t >= 0) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || _ < 0 || 1e-10 === _) && _ !== t && this._first && (c = !0, _ > 1e-10 && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
            else if (t < 1e-7)
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === m && 1e-10 !== _ && (_ > 0 || t < 0 && _ >= 0) && !this._locked) && (h = "onReverseComplete", a = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = a = !0, h = "onReverseComplete") : _ >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                else { if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && a)
                        for (o = this._first; o && 0 === o._startTime;) o._duration || (a = !1), o = o._next;
                    t = 0, this._initted || (c = !0) } else if (0 === m && _ < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = m + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) { if ((t = this._time) >= f || this._repeat && b !== this._cycle)
                    for (o = this._first; o && o._startTime <= t && !u;) o._duration || "isPause" !== o.data || o.ratio || 0 === o._startTime && 0 === this._rawPrevTime || (u = o), o = o._next;
                else
                    for (o = this._last; o && o._startTime >= t && !u;) o._duration || "isPause" === o.data && o._rawPrevTime > 0 && (u = o), o = o._prev;
                u && u._startTime < m && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)) } if (this._cycle !== b && !this._locked) { var w = this._yoyo && 0 != (1 & b),
                    T = w === (this._yoyo && 0 != (1 & this._cycle)),
                    E = this._totalTime,
                    S = this._cycle,
                    M = this._rawPrevTime,
                    A = this._time; if (this._totalTime = b * m, this._cycle < b ? w = !w : this._totalTime += m, this._time = f, this._rawPrevTime = 0 === m ? _ - 1e-4 : _, this._cycle = b, this._locked = !0, f = w ? 0 : m, this.render(f, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), f !== this._time) return; if (T && (this._cycle = b, this._locked = !0, f = w ? m + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !x) return;
                this._time = A, this._totalTime = E, this._cycle = S, this._rawPrevTime = M } if (this._time !== f && this._first || r || c || u) { if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= f)
                    for (o = this._first; o && (s = o._next, p === this._time && (!this._paused || x));)(o._active || o._startTime <= this._time && !o._paused && !o._gc) && (u === o && this.pause(), o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (t - o._startTime) * o._timeScale, e, r) : o.render((t - o._startTime) * o._timeScale, e, r)), o = s;
                else
                    for (o = this._last; o && (s = o._prev, p === this._time && (!this._paused || x));) { if (o._active || o._startTime <= f && !o._paused && !o._gc) { if (u === o) { for (u = o._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, r), u = u._prev;
                                u = null, this.pause() } o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (t - o._startTime) * o._timeScale, e, r) : o.render((t - o._startTime) * o._timeScale, e, r) } o = s } this._onUpdate && (e || (i.length && n(), this._callback("onUpdate"))), h && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (a && (i.length && n(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h))) } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")) }, a.getActive = function(t, e, i) { null == t && (t = !0), null == e && (e = !0), null == i && (i = !1); var n, r, o = [],
                a = this.getChildren(t, e, i),
                s = 0,
                h = a.length; for (n = 0; n < h; n++)(r = a[n]).isActive() && (o[s++] = r); return o }, a.getLabelAfter = function(t) { t || 0 !== t && (t = this._time); var e, i = this.getLabelsArray(),
                n = i.length; for (e = 0; e < n; e++)
                if (i[e].time > t) return i[e].name; return null }, a.getLabelBefore = function(t) { null == t && (t = this._time); for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                if (e[i].time < t) return e[i].name; return null }, a.getLabelsArray = function() { var t, e = [],
                i = 0; for (t in this._labels) e[i++] = { time: this._labels[t], name: t }; return e.sort(function(t, e) { return t.time - e.time }), e }, a.invalidate = function() { return this._locked = !1, Wc.prototype.invalidate.call(this) }, a.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0 }, a.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0 }, a.totalDuration = function(t) { return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (Wc.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, a.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, a.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, a.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, a.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, a.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, t }, !0);
    var Xc = Gc.g.TimelineMax,
        Yc = 180 / Math.PI,
        qc = [],
        Zc = [],
        Jc = [],
        $c = {},
        Kc = Gc.e._gsDefine.globals,
        Qc = function(t, e, i, n) { i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t },
        tl = function(t, e, i, n) { var r = { a: t },
                o = {},
                a = {},
                s = { c: n },
                h = (t + e) / 2,
                c = (e + i) / 2,
                l = (i + n) / 2,
                u = (h + c) / 2,
                p = (c + l) / 2,
                f = (p - u) / 8; return r.b = h + (t - h) / 4, o.b = u + f, r.c = o.a = (r.b + o.b) / 2, o.c = a.a = (u + p) / 2, a.b = p - f, s.b = l + (n - l) / 4, a.c = s.a = (a.b + s.b) / 2, [r, o, a, s] },
        el = function(t, e, i, n, r) { var o, a, s, h, c, l, u, p, f, d, m, g, v, y = t.length - 1,
                _ = 0,
                x = t[0].a; for (o = 0; o < y; o++) a = (c = t[_]).a, s = c.d, h = t[_ + 1].d, r ? (m = qc[o], v = ((g = Zc[o]) + m) * e * .25 / (n ? .5 : Jc[o] || .5), p = s - ((l = s - (s - a) * (n ? .5 * e : 0 !== m ? v / m : 0)) + (((u = s + (h - s) * (n ? .5 * e : 0 !== g ? v / g : 0)) - l) * (3 * m / (m + g) + .5) / 4 || 0))) : p = s - ((l = s - (s - a) * e * .5) + (u = s + (h - s) * e * .5)) / 2, l += p, u += p, c.c = f = l, c.b = 0 !== o ? x : x = c.a + .6 * (c.c - c.a), c.da = s - a, c.ca = f - a, c.ba = x - a, i ? (d = tl(a, x, f, s), t.splice(_, 1, d[0], d[1], d[2], d[3]), _ += 4) : _++, x = u;
            (c = t[_]).b = x, c.c = x + .4 * (c.d - x), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = x - c.a, i && (d = tl(c.a, x, c.c, c.d), t.splice(_, 1, d[0], d[1], d[2], d[3])) },
        il = function(t, e, i, n) { var r, o, a, s, h, c, l = []; if (n)
                for (o = (t = [n].concat(t)).length; --o > -1;) "string" == typeof(c = t[o][e]) && "=" === c.charAt(1) && (t[o][e] = n[e] + Number(c.charAt(0) + c.substr(2))); if ((r = t.length - 2) < 0) return l[0] = new Qc(t[0][e], 0, 0, t[0][e]), l; for (o = 0; o < r; o++) a = t[o][e], s = t[o + 1][e], l[o] = new Qc(a, 0, 0, s), i && (h = t[o + 2][e], qc[o] = (qc[o] || 0) + (s - a) * (s - a), Zc[o] = (Zc[o] || 0) + (h - s) * (h - s)); return l[o] = new Qc(t[o][e], 0, 0, t[o + 1][e]), l },
        nl = function(t, e, i, n, r, o) { var a, s, h, c, l, u, p, f, d = {},
                m = [],
                g = o || t[0]; for (s in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) m.push(s); if (t.length > 1) { for (f = t[t.length - 1], p = !0, a = m.length; --a > -1;)
                    if (s = m[a], Math.abs(g[s] - f[s]) > .05) { p = !1; break } p && (t = t.concat(), o && t.unshift(o), t.push(t[1]), o = t[t.length - 3]) } for (qc.length = Zc.length = Jc.length = 0, a = m.length; --a > -1;) s = m[a], $c[s] = -1 !== r.indexOf("," + s + ","), d[s] = il(t, s, $c[s], o); for (a = qc.length; --a > -1;) qc[a] = Math.sqrt(qc[a]), Zc[a] = Math.sqrt(Zc[a]); if (!n) { for (a = m.length; --a > -1;)
                    if ($c[s])
                        for (u = (h = d[m[a]]).length - 1, c = 0; c < u; c++) l = h[c + 1].da / Zc[c] + h[c].da / qc[c] || 0, Jc[c] = (Jc[c] || 0) + l * l; for (a = Jc.length; --a > -1;) Jc[a] = Math.sqrt(Jc[a]) } for (a = m.length, c = i ? 4 : 1; --a > -1;) h = d[s = m[a]], el(h, e, i, n, $c[s]), p && (h.splice(0, c), h.splice(h.length - c, c)); return d },
        rl = function(t, e, i) { for (var n, r, o, a, s, h, c, l, u, p, f, d = 1 / i, m = t.length; --m > -1;)
                for (o = (p = t[m]).a, a = p.d - o, s = p.c - o, h = p.b - o, n = r = 0, l = 1; l <= i; l++) n = r - (r = ((c = d * l) * c * a + 3 * (u = 1 - c) * (c * s + u * h)) * c), e[f = m * i + l - 1] = (e[f] || 0) + n * n },
        ol = Gc.e._gsDefine.plugin({ propName: "bezier", priority: -1, version: "1.3.8", API: 2, global: !0, init: function(t, e, i) { this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10); var n, r, o, a, s, h = e.values || [],
                    c = {},
                    l = h[0],
                    u = e.autoRotate || i.vars.orientToBezier; for (n in this._autoRotate = u ? u instanceof Array ? u : [
                        ["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]
                    ] : null, l) this._props.push(n); for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), s || c[n] !== h[0][n] && (s = c); if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? nl(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, s) : function(t, e, i) { var n, r, o, a, s, h, c, l, u, p, f, d = {},
                            m = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            v = []; if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data"; for (u in t[0]) v.push(u); for (h = v.length; --h > -1;) { for (d[u = v[h]] = s = [], p = 0, l = t.length, c = 0; c < l; c++) n = null == i ? t[c][u] : "string" == typeof(f = t[c][u]) && "=" === f.charAt(1) ? i[u] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && c > 1 && c < l - 1 && (s[p++] = (n + s[p - 2]) / 2), s[p++] = n; for (l = p - m + 1, p = 0, c = 0; c < l; c += m) n = s[c], r = s[c + 1], o = s[c + 2], a = 2 === m ? 0 : s[c + 3], s[p++] = f = 3 === m ? new Qc(n, r, o, a) : new Qc(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                            s.length = p } return d }(h, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) { var p = function(t, e) { var i, n, r, o, a = [],
                            s = [],
                            h = 0,
                            c = 0,
                            l = (e = e >> 0 || 6) - 1,
                            u = [],
                            p = []; for (i in t) rl(t[i], a, e); for (r = a.length, n = 0; n < r; n++) h += Math.sqrt(a[n]), p[o = n % e] = h, o === l && (c += h, u[o = n / e >> 0] = p, s[o] = c, h = 0, p = []); return { length: c, lengths: s, segments: u } }(this._beziers, this._timeRes);
                    this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length } if (u = this._autoRotate)
                    for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), o = u.length; --o > -1;) { for (a = 0; a < 3; a++) n = u[o][a], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = u[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n) }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0 }, set: function(t) { var e, i, n, r, o, a, s, h, c, l, u = this._segCount,
                    p = this._func,
                    f = this._target,
                    d = t !== this._startRatio; if (this._timeRes) { if (c = this._lengths, l = this._curSeg, t *= this._length, n = this._li, t > this._l2 && n < u - 1) { for (h = u - 1; n < h && (this._l2 = c[++n]) <= t;);
                        this._l1 = c[n - 1], this._li = n, this._curSeg = l = this._segments[n], this._s2 = l[this._s1 = this._si = 0] } else if (t < this._l1 && n > 0) { for (; n > 0 && (this._l1 = c[--n]) >= t;);
                        0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = l = this._segments[n], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si] } if (e = n, t -= this._l1, n = this._si, t > this._s2 && n < l.length - 1) { for (h = l.length - 1; n < h && (this._s2 = l[++n]) <= t;);
                        this._s1 = l[n - 1], this._si = n } else if (t < this._s1 && n > 0) { for (; n > 0 && (this._s1 = l[--n]) >= t;);
                        0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = l[n], this._si = n } a = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0 } else a = (t - (e = t < 0 ? 0 : t >= 1 ? u - 1 : u * t >> 0) * (1 / u)) * u; for (i = 1 - a, n = this._props.length; --n > -1;) r = this._props[n], s = (a * a * (o = this._beziers[r][e]).da + 3 * i * (a * o.ca + i * o.ba)) * a + o.a, this._mod[r] && (s = this._mod[r](s, f)), p[r] ? f[r](s) : f[r] = s; if (this._autoRotate) { var m, g, v, y, _, x, b, w = this._autoRotate; for (n = w.length; --n > -1;) r = w[n][2], x = w[n][3] || 0, b = !0 === w[n][4] ? 1 : Yc, o = this._beziers[w[n][0]], m = this._beziers[w[n][1]], o && m && (o = o[e], m = m[e], g = o.a + (o.b - o.a) * a, g += ((y = o.b + (o.c - o.b) * a) - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = m.a + (m.b - m.a) * a, v += ((_ = m.b + (m.c - m.b) * a) - v) * a, _ += (m.c + (m.d - m.c) * a - _) * a, s = d ? Math.atan2(_ - v, y - g) * b + x : this._initialRotations[n], this._mod[r] && (s = this._mod[r](s, f)), p[r] ? f[r](s) : f[r] = s) } } }),
        al = ol.prototype;
    /*!
     * VERSION: 1.3.8
     * DATE: 2018-05-30
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    ol.bezierThrough = nl, ol.cubicToQuadratic = tl, ol._autoCSS = !0, ol.quadraticToCubic = function(t, e, i) { return new Qc(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, ol._cssRegister = function() { var t = Kc.CSSPlugin; if (t) { var e = t._internals,
                    i = e._parseToProxy,
                    n = e._setPluginRatio,
                    r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", { parser: function(t, e, o, a, s, h) { e instanceof Array && (e = { values: e }), h = new ol; var c, l, u, p = e.values,
                            f = p.length - 1,
                            d = [],
                            m = {}; if (f < 0) return s; for (c = 0; c <= f; c++) u = i(t, p[c], a, s, h, f !== c), d[c] = u.end; for (l in e) m[l] = e[l]; return m.values = d, (s = new r(t, "bezier", 0, 0, u.pt, 2)).data = u, s.plugin = h, s.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (c = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                            ["left", "top", "rotation", c, !1]
                        ] : null != u.end.x && [
                            ["x", "y", "rotation", c, !1]
                        ]), m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), h._onInitTween(u.proxy, m, a._tween), s } }) } }, al._mod = function(t) { for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e) }, al._kill = function(t) { var e, i, n = this._props; for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1); if (n = this._autoRotate)
                for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1); return this._super._kill.call(this, t) },
        /*!
         * VERSION: 1.16.1
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        Gc.e._gsDefine("easing.Back", ["easing.Ease"], function() { var t, e, i, n, r = Gc.e.GreenSockGlobals || Gc.e,
                o = r.com.greensock,
                a = 2 * Math.PI,
                s = Math.PI / 2,
                h = o._class,
                c = function(t, e) { var i = h("easing." + t, function() {}, !0),
                        n = i.prototype = new Gc.b; return n.constructor = i, n.getRatio = e, i },
                l = Gc.b.register || function() {},
                u = function(t, e, i, n, r) { var o = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new n }, !0); return l(o, t), o },
                p = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                f = function(t, e) { var i = h("easing." + t, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                        n = i.prototype = new Gc.b; return n.constructor = i, n.getRatio = e, n.config = function(t) { return new i(t) }, i },
                d = u("Back", f("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), f("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), f("BackInOut", function(t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                m = h("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i }, !0),
                g = m.prototype = new Gc.b; return g.constructor = m, g.getRatio = function(t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) { return new m(t, e, i) }, (g = (t = h("easing.SteppedEase", function(t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0 }, !0)).prototype = new Gc.b).constructor = t, g.getRatio = function(t) { return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1 }, g.config = t.config = function(e, i) { return new t(e, i) }, (g = (e = h("easing.ExpoScaleEase", function(t, e, i) { this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i }, !0)).prototype = new Gc.b).constructor = e, g.getRatio = function(t) { return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2 }, g.config = e.config = function(t, i, n) { return new e(t, i, n) }, (g = (i = h("easing.RoughEase", function(t) { for (var e, i, n, r, o, a, s = (t = t || {}).taper || "none", h = [], c = 0, l = 0 | (t.points || 20), u = l, f = !1 !== t.randomize, d = !0 === t.clamp, m = t.template instanceof Gc.b ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --u > -1;) e = f ? Math.random() : 1 / l * u, i = m ? m.getRatio(e) : e, n = "none" === s ? g : "out" === s ? (r = 1 - e) * r * g : "in" === s ? e * e * g : e < .5 ? (r = 2 * e) * r * .5 * g : (r = 2 * (1 - e)) * r * .5 * g, f ? i += Math.random() * n - .5 * n : u % 2 ? i += .5 * n : i -= .5 * n, d && (i > 1 ? i = 1 : i < 0 && (i = 0)), h[c++] = { x: e, y: i }; for (h.sort(function(t, e) { return t.x - e.x }), a = new p(1, 1, null), u = l; --u > -1;) o = h[u], a = new p(o.x, o.y, a);
                this._prev = new p(0, 0, 0 !== a.t ? a : a.next) }, !0)).prototype = new Gc.b).constructor = i, g.getRatio = function(t) { var e = this._prev; if (t > e.t) { for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev } else
                    for (; e.prev && t <= e.t;) e = e.prev; return this._prev = e, e.v + (t - e.t) / e.gap * e.c }, g.config = function(t) { return new i(t) }, i.ease = new i, u("Bounce", c("BounceOut", function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), c("BounceIn", function(t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), c("BounceInOut", function(t) { var e = t < .5; return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), u("Circ", c("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), c("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), c("CircInOut", function(t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), u("Elastic", (n = function(t, e, i) { var n = h("easing." + t, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2 }, !0),
                    r = n.prototype = new Gc.b; return r.constructor = n, r.getRatio = e, r.config = function(t, e) { return new n(t, e) }, n })("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), n("ElasticIn", function(t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) }, .3), n("ElasticInOut", function(t) { return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1 }, .45)), u("Expo", c("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), c("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), c("ExpoInOut", function(t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), u("Sine", c("SineOut", function(t) { return Math.sin(t * s) }), c("SineIn", function(t) { return 1 - Math.cos(t * s) }), c("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), h("easing.EaseLookup", { find: function(t) { return Gc.b.map[t] } }, !0), l(r.SlowMo, "SlowMo", "ease,"), l(i, "RoughEase", "ease,"), l(t, "SteppedEase", "ease,"), d }, !0);
    var sl = Gc.g.Back,
        hl = Gc.g.Elastic,
        cl = Gc.g.Bounce,
        ll = Gc.g.RoughEase,
        ul = Gc.g.SlowMo,
        pl = Gc.g.SteppedEase,
        fl = Gc.g.Circ,
        dl = Gc.g.Expo,
        ml = Gc.g.Sine,
        gl = Gc.g.ExpoScaleEase,
        vl = kc;
    vl._autoActivated = [Wc, Xc, Hc, Fc, ol, Uc, Vc, sl, hl, cl, ll, ul, pl, fl, dl, ml, gl];
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var yl = { DEBUG: !1, ASSETS_TO_LOAD: ["./assets/images/dogs/avatars/beagle-e868d28e74.png", "./assets/images/dogs/avatars/bouvier-d6183a4546.png", "./assets/images/dogs/avatars/bulldog-89fb4dc6b7.png", "./assets/images/dogs/avatars/caniche-18592f6a98.png", "./assets/images/dogs/avatars/chihuahua-187746e1ff.png", "./assets/images/dogs/avatars/dhole-c0452317ea.png", "./assets/images/dogs/avatars/dobermann-3541ccdc6e.png", "./assets/images/dogs/avatars/fox-ca8930b3b6.png", "./assets/images/dogs/avatars/frenchie-370a4293ab.png", "./assets/images/dogs/avatars/jagd-489f6a2d98.png", "./assets/images/dogs/avatars/kingcharles-d3ad6a85e4.png", "./assets/images/dogs/avatars/kishu-0373ee57cc.png", "./assets/images/dogs/avatars/laika-7ff5ab6b40.png", "./assets/images/dogs/avatars/malamute-416134840c.png", "./assets/images/dogs/avatars/pinscher-599300b452.png", "./assets/images/dogs/avatars/pointer-3767cdafe8.png", "./assets/images/dogs/avatars/scottish-8e4e5b36ff.png", "./assets/images/dogs/avatars/sharpei-ed34280e7a.png", "./assets/images/dogs/avatars/shepperd-8bb990a478.png", "./assets/images/dogs/avatars/smoky-d63101756d.png", "./assets/images/dogs/avatars/teckel-b95b92808e.png", "./assets/images/dogs/targets/beagle-b0c8b8cdfe.png", "./assets/images/dogs/targets/bouvier-3cdde5c507.png", "./assets/images/dogs/targets/bulldog-cf7450a0b6.png", "./assets/images/dogs/targets/caniche-eeca7b2720.png", "./assets/images/dogs/targets/chihuahua-7d5201080c.png", "./assets/images/dogs/targets/dhole-14eee89611.png", "./assets/images/dogs/targets/dobermann-65ebe7d56b.png", "./assets/images/dogs/targets/fox-5e9fa4cf68.png", "./assets/images/dogs/targets/frenchie-e4d931ea0b.png", "./assets/images/dogs/targets/jagd-d718629761.png", "./assets/images/dogs/targets/kingcharles-eaf99970de.png", "./assets/images/dogs/targets/kishu-03be604e59.png", "./assets/images/dogs/targets/laika-485f7e3d07.png", "./assets/images/dogs/targets/malamute-a9bede8be9.png", "./assets/images/dogs/targets/pinscher-82da81175d.png", "./assets/images/dogs/targets/pointer-aa927b9974.png", "./assets/images/dogs/targets/scottish-2d81e504ed.png", "./assets/images/dogs/targets/sharpei-d7dbe063f0.png", "./assets/images/dogs/targets/shepperd-b2729c080f.png", "./assets/images/dogs/targets/smoky-f60c287be9.png", "./assets/images/dogs/targets/teckel-3333133936.png", "./assets/images/home/dog@2x-5a1727b451.png", "./assets/images/over/dog@2x-ca3c6821f1.png", "./assets/images/tutorial/tutorial-background-1-7d625bda0b.jpg", "./assets/images/tutorial/tutorial-background-2-773fd8321c.jpg", "./assets/audios/ambient-01e86bda9d.mp3", "./assets/audios/success-475816732a.mp3", "./assets/audios/game_over-ebe110ad48.mp3", "./assets/audios/score_count-803ed10db2.mp3", "./assets/audios/kennel-2c1ad66882.mp3", "./assets/audios/countdown-07fab9881c.mp3", "./assets/audios/battery-dcd08086c5.mp3", "./assets/audios/lost-life-bb211df12b.mp3"], CURSOR_OFFSET_X: -200, CURSOR_OFFSET_Y: -300, BOARD_COLOR: 1179672, BOARD_PADDING_X: 500, BOARD_PADDING_Y: 500, BOARD_DESKTOP_WIDTH: 3e3, BOARD_DESKTOP_HEIGHT: 3e3, BOARD_TABLET_WIDTH: 1800, BOARD_TABLET_HEIGHT: 1800, BOARD_MOBILE_WIDTH: 1250, BOARD_MOBILE_HEIGHT: 1250, AUDIO_AMBIENT: "./assets/audios/ambient-01e86bda9d.mp3", AUDIO_SUCCESS: "./assets/audios/success-475816732a.mp3", AUDIO_GAME_OVER: "./assets/audios/game_over-ebe110ad48.mp3", AUDIO_SCORE_COUNT: "./assets/audios/score_count-803ed10db2.mp3", AUDIO_KENNEL: "./assets/audios/kennel-2c1ad66882.mp3", AUDIO_COUNTDOWN: "./assets/audios/countdown-07fab9881c.mp3", AUDIO_BATTERY: "./assets/audios/battery-dcd08086c5.mp3", AUDIO_LOST_LIFE: "./assets/audios/lost-life-bb211df12b.mp3", AUDIO_MAX_SPEED: 2, CHARACTERS_SPRITE_8K_URL: "./assets/images/sprite-8k-c80981b8ae.png", CHARACTERS_SPRITE_4K_URL: "./assets/images/sprite-4k-7cf3df4329.png", CHARACTERS_SPRITE_FILES: ["malamute", "chihuahua", "kishu", "frenchie", "fox", "dobermann", "beagle", "bouvier", "bulldog", "caniche", "dhole", "jagd", "kingcharles", "laika", "pinscher", "pointer", "scottish", "sharpei", "shepperd", "smoky", "teckel"], TUTORIAL_STEPS: 3, CHARACTERS_SIZE: 256, CHARACTERS_SPRITE_WIDTH: 7680, CHARACTERS_SPRITE_HEIGHT: 7168, CHARACTERS_SPRITE_IMAGE_WIDTH: 512, CHARACTERS_SPRITE_IMAGE_HEIGHT: 512, CHARACTERS_SPRITE_IMAGE_LENGTH: 105, CHARACTERS_SPRITE_ANIMS_LENGTH: 5, CHARACTERS_SPRITE_LINE_NUMBER: 14, CHARACTERS_SPRITE_LINE_LENGTH: 15, CHARACTERS_DESKTOP_MIN_SPACE: 200, CHARACTERS_DESKTOP_MAX_SPACE: 600, CHARACTERS_DESKTOP_SPACE_DELTA: 40, CHARACTERS_TABLET_MIN_SPACE: 200, CHARACTERS_TABLET_MAX_SPACE: 400, CHARACTERS_TABLET_SPACE_DELTA: 25, CHARACTERS_MOBILE_MIN_SPACE: 200, CHARACTERS_MOBILE_MAX_SPACE: 300, CHARACTERS_MOBILE_SPACE_DELTA: 15, AMBIENT_COLOR: 16777215, AMBIENT_INTENSITY: .005, FLASHLIGHT_DECAY: 1, FLASHLIGHT_COLOR: 13421772, FLASHLIGHT_MIN_DISTANCE: 200, FLASHLIGHT_MAX_DISTANCE: 400, FLASHLIGHT_DISTANCE_DELTA: 20, FLASHLIGHT_MIN_LIFETIME: 4e3, FLASHLIGHT_MAX_LIFETIME: 6e3, FLASHLIGHT_LIFETIME_DELTA: 500, FLASHLIGHT_MIN_INTENSITY: 0, FLASHLIGHT_MAX_INTENSITY: 4, FLASHLIGHT_BATTERY_DELTA: 5, FLASHLIGHT_BATTERY_MIN_CHARGE: 5, FLASHLIGHT_BATTERY_MAX_CHARGE: 30, CHRONO_BONUS: 5e3, CHRONO_TRESHOLD: 1e4, SCORE_MIN: 150, SCORE_DELTA: 50, SCORE_MULTIPLIER: 1.5, COUNTDOWN_DURATION: 3e3, GAME_MIN_DURATION: 2e4, GAME_MAX_DURATION: 4e4, GAME_DURATION_DELTA: 2e3, GAME_LIFE: 3, GAME_START_LEVEL: 1 },
        _l = (i(87), i(91), i(72)),
        xl = i.n(_l);

    function bl(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }
    var wl = function() {
            function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.$loader = document.querySelector(".js-loader"), this.$loaderSVG = document.querySelector(".js-loading-circle"), this.$loaderValue = document.querySelector(".js-loading-value"), this.assets = yl.ASSETS_TO_LOAD, this._onLoadError = this.onLoadError.bind(this), this._onLoadProgress = this.onLoadProgress.bind(this), this._onLoadComplete = this.onLoadComplete.bind(this) } var e, i, n; return e = t, (i = [{ key: "load", value: function() { var t = this; return new Promise(function(e) { xl()({ assets: t.assets }).on("error", t._onLoadError).on("progress", t._onLoadProgress).on("complete", function() { t.onLoadComplete(), e() }).start() }) } }, { key: "onLoadProgress", value: function(t) { var e = (100 * t).toFixed();
                    e >= Number(100) && (e = "99"), this.$loaderSVG.setAttribute("style", "stroke-dashoffset: ".concat(-220 - 220 * t, "px")), this.$loaderValue.innerHTML = e } }, { key: "onLoadComplete", value: function() { this.$loader.classList.add("is-complete") } }, { key: "onLoadError", value: function(t) { if (t) throw t } }]) && bl(e.prototype, i), n && bl(e, n), t }(),
        Tl = (i(14), i(103), i(3)),
        El = i.n(Tl),
        Sl = i(30),
        Ml = i.n(Sl);

    function Al(t) { return (Al = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function Ll(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function Cl(t) { return (Cl = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function Ol(t, e) { return (Ol = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

    function Pl(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }
    var Rl = function(t) {
            function e(t) { var i, n, r; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), n = this, (i = !(r = Cl(e).call(this)) || "object" !== Al(r) && "function" != typeof r ? Pl(n) : r).LIFE = yl.GAME_LIFE, i.LEVEL = yl.GAME_START_LEVEL, i.GAME_START = !1, i.GAME_PAUSE = !1, i.MOUSE_POSITION = new Be, i.MOUSE_CLIENT_POSITION = new Be, i.TOUCH_OFFSET = new Be, i.TOUCH_ORIGIN = new Be, i.TOUCH_POSITION = new Be, i.TOUCH_CAMERA_POSITION = new Be, i.TOUCH_CLIENT_POSITION = new Be, i.SCREEN_WIDTH = window.innerWidth, i.SCREEN_HEIGHT = window.innerHeight, i.MOVE_LERP = .1, i.MOVE_FLAG = !1, i.MOVE_EVENT = "mousemove", i.DEVICE_NAME = "DESKTOP", (Ml.a.tablet || Ml.a.phone) && (i.MOVE_EVENT = "touchmove"), Ml.a.tablet && (i.DEVICE_NAME = "TABLET"), Ml.a.phone && (i.DEVICE_NAME = "MOBILE"), i.BOARD_WIDTH = yl["BOARD_".concat(i.DEVICE_NAME, "_WIDTH")], i.BOARD_HEIGHT = yl["BOARD_".concat(i.DEVICE_NAME, "_HEIGHT")], i.$root = t.el, i.GameDogs = t.GameDogs, i.GameScene = t.GameScene, i.GameScore = t.GameScore, i.GameChrono = t.GameChrono, i.GameLights = t.GameLights, i.GameCursor = t.GameCursor, i._loop = i.loop.bind(Pl(Pl(i))), i._raycast = i.raycast.bind(Pl(Pl(i))), i._resizeBoard = i.resizeBoard.bind(Pl(Pl(i))), i._resizeScreen = i.resizeScreen.bind(Pl(Pl(i))), i._touchEnd = i.touchEnd.bind(Pl(Pl(i))), i._touchMove = i.touchMove.bind(Pl(Pl(i))), i._touchStart = i.touchStart.bind(Pl(Pl(i))), i._moveMouse = i.moveMouse.bind(Pl(Pl(i))), i._moveCamera = i.moveCamera.bind(Pl(Pl(i))), i.Scene = new fo, i.Camera = new ih, i.Renderer = new lo, i.Raycaster = new fc, i.Camera.far = 1, i.Camera.near = 1 / Math.pow(2, 53), i.Camera.position.set(0, 0, 0), i.Camera.destination = new Be(0, 0), i.Scene.add(i.Camera), i.$root.appendChild(i.Renderer.domElement), i } var i, n, r; return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Ol(t, e) }(e, El.a), i = e, (n = [{ key: "init", value: function() { this.resizeScreen(), window.addEventListener("resize", this._resizeScreen), window.addEventListener(this.MOVE_EVENT, this._moveMouse), window.requestAnimationFrame(this._loop) } }, { key: "loadGPU", value: function() { var t = new vn(new Ji(.01, .01, 1, 1), new gn({ map: this.Texture }));
                    this.Scene.add(t) } }, { key: "reset", value: function() { this.GAME_START = !1, this.GAME_PAUSE = !1, this.MOUSE_POSITION = new Be(0, 0), this.MOUSE_CLIENT_POSITION = new Be(0, 0), this.TOUCH_ORIGIN = new Be(0, 0), this.TOUCH_OFFSET = new Be(0, 0), this.TOUCH_POSITION = new Be(0, 0), this.TOUCH_CLIENT_POSITION = new Be(0, 0), this.TOUCH_CAMERA_POSITION = new Be(0, 0), this.TOUCH_END_TIME = 0, this.TOUCH_START_TIME = 0, this.LIFE = yl.GAME_LIFE, this.LEVEL = yl.GAME_START_LEVEL, this.GameDogs.reset(), this.GameScore.reset(), this.GameLights.reset(), this.GameChrono.reset(), this.Camera.position.set(0, 0, 0), this.Camera.destination = new Be(0, 0) } }, { key: "start", value: function() { this.GAME_START = !0, this.GAME_PAUSE = !1, this.clock = Date.now(), this.GameDogs.start(), this.GameChrono.reset(), this.resizeBoard(), this.Renderer.domElement.addEventListener("mousedown", this._raycast), "DESKTOP" !== this.DEVICE_NAME && (this.Renderer.domElement.addEventListener("touchend", this._touchEnd), this.Renderer.domElement.addEventListener("touchmove", this._touchMove), this.Renderer.domElement.addEventListener("touchstart", this._touchStart)), this.Renderer.domElement.addEventListener(this.MOVE_EVENT, this._moveCamera), window.addEventListener("resize", this._resizeBoard), this.emit("game-start") } }, { key: "pause", value: function() { var t = this;
                    this.GAME_START = !1, this.GAME_PAUSE = !0, this.GameLights.reset(), this.Renderer.domElement.removeEventListener("mousedown", this._raycast), "DESKTOP" !== this.DEVICE_NAME && (this.Renderer.domElement.removeEventListener("touchend", this._touchEnd), this.Renderer.domElement.removeEventListener("touchmove", this._touchMove), this.Renderer.domElement.removeEventListener("touchstart", this._touchStart)), this.Renderer.domElement.removeEventListener(this.MOVE_EVENT, this._moveCamera), window.removeEventListener("resize", this._resizeBoard), setTimeout(function() { t.GameScore.update(), t.LEVEL += 1, setTimeout(function() { t.GameDogs.reset() }, 400), t.emit("game-pause"), t.emit("level-change", t.LEVEL) }, 800) } }, { key: "stop", value: function() { this.GAME_START = !1, this.Renderer.domElement.removeEventListener("mousedown", this._raycast), "DESKTOP" !== this.DEVICE_NAME && (this.Renderer.domElement.removeEventListener("touchend", this._touchEnd), this.Renderer.domElement.removeEventListener("touchmove", this._touchMove), this.Renderer.domElement.removeEventListener("touchstart", this._touchStart)), this.Renderer.domElement.removeEventListener(this.MOVE_EVENT, this._moveCamera), window.removeEventListener("resize", this._resizeBoard), this.emit("game-over", this.GameScore.SCORE, this.LEVEL) } }, { key: "raycast", value: function(t) { var e = t.changedTouches ? t.changedTouches[0].clientX : t.clientX,
                        i = t.changedTouches ? t.changedTouches[0].clientY : t.clientY,
                        n = new Be(e / this.SCREEN_WIDTH * 2 - 1, -i / this.SCREEN_HEIGHT * 2 + 1);
                    this.Raycaster.setFromCamera(n, this.Camera); var r = this.Raycaster.intersectObjects([this.GameDogs.Target, this.GameDogs.PNJs]);
                    r.length && ("Target" === r[0].object.name ? this.found() : this.miss()) } }, { key: "miss", value: function() { this.LIFE -= 1, this.emit("life-change", this.LIFE), this.LIFE <= 0 && this.stop() } }, { key: "found", value: function() { this.pause(), this.emit("target-found") } }, { key: "touchStart", value: function(t) { t.preventDefault(), this.TOUCH_ORIGIN.x = t.touches[0].clientX, this.TOUCH_ORIGIN.y = t.touches[0].clientY } }, { key: "touchEnd", value: function(t) { var e = Math.abs(this.TOUCH_POSITION.x - this.TOUCH_CAMERA_POSITION.x),
                        i = Math.abs(this.TOUCH_POSITION.y - this.TOUCH_CAMERA_POSITION.y);
                    e < 5 && i < 5 && this.raycast(t), this.TOUCH_CAMERA_POSITION.x = this.TOUCH_POSITION.x, this.TOUCH_CAMERA_POSITION.y = this.TOUCH_POSITION.y } }, { key: "touchMove", value: function(t) { t.preventDefault(), this.MOVE_FLAG = !0 } }, { key: "moveMouse", value: function(t) { "DESKTOP" === this.DEVICE_NAME ? (this.MOUSE_CLIENT_POSITION.x = t.clientX, this.MOUSE_CLIENT_POSITION.y = t.clientY, this.MOUSE_POSITION.x = 1 * (this.MOUSE_CLIENT_POSITION.x - .5 * this.SCREEN_WIDTH), this.MOUSE_POSITION.y = -1 * (this.MOUSE_CLIENT_POSITION.y - .5 * this.SCREEN_HEIGHT), this.GameCursor.move()) : (this.TOUCH_CLIENT_POSITION.x = t.touches[0].clientX, this.TOUCH_CLIENT_POSITION.y = t.touches[0].clientY, this.TOUCH_OFFSET.x = this.TOUCH_CLIENT_POSITION.x - this.TOUCH_ORIGIN.x, this.TOUCH_OFFSET.y = this.TOUCH_CLIENT_POSITION.y - this.TOUCH_ORIGIN.y, this.TOUCH_POSITION.x = this.TOUCH_CAMERA_POSITION.x + 2 * this.TOUCH_OFFSET.x, this.TOUCH_POSITION.y = this.TOUCH_CAMERA_POSITION.y + 2 * this.TOUCH_OFFSET.y, this.TOUCH_POSITION.x = Math.max(-1 * Math.abs(this.BOARD_OFFSET_X), Math.min(this.TOUCH_POSITION.x, Math.abs(this.BOARD_OFFSET_X))), this.TOUCH_POSITION.y = Math.max(-1 * Math.abs(this.BOARD_OFFSET_Y), Math.min(this.TOUCH_POSITION.y, Math.abs(this.BOARD_OFFSET_Y)))) } }, { key: "moveCamera", value: function() { var t = 0,
                        e = 0; if ("DESKTOP" === this.DEVICE_NAME) { var i = this.MOUSE_POSITION.x / (.5 * this.SCREEN_WIDTH),
                            n = this.MOUSE_POSITION.y / (.5 * this.SCREEN_HEIGHT);
                        i = Math.floor(1e3 * i) / 1e3, n = Math.floor(1e3 * n) / 1e3, t = this.MOUSE_POSITION.x + i * this.BOARD_OFFSET_X, e = this.MOUSE_POSITION.y + n * this.BOARD_OFFSET_Y } else t = -1 * this.TOUCH_POSITION.x, e = 1 * this.TOUCH_POSITION.y;
                    this.Camera.destination.x = t, this.Camera.destination.y = e } }, { key: "resizeBoard", value: function() { this.BOARD_DELTA_X = this.BOARD_WIDTH - this.SCREEN_WIDTH + 2 * yl.BOARD_PADDING_X, this.BOARD_DELTA_Y = this.BOARD_HEIGHT - this.SCREEN_HEIGHT + 2 * yl.BOARD_PADDING_Y, this.BOARD_OFFSET_X = Math.floor(.5 * this.BOARD_DELTA_X) - .5 * this.SCREEN_WIDTH, this.BOARD_OFFSET_Y = Math.floor(.5 * this.BOARD_DELTA_Y) - .5 * this.SCREEN_HEIGHT, "DESKTOP" !== this.DEVICE_NAME && (this.BOARD_DELTA_X = this.BOARD_WIDTH, this.BOARD_DELTA_Y = this.BOARD_HEIGHT, this.BOARD_OFFSET_X = Math.floor(.5 * this.BOARD_DELTA_X), this.BOARD_OFFSET_Y = Math.floor(.5 * this.BOARD_DELTA_Y)) } }, { key: "resizeScreen", value: function() { this.SCREEN_WIDTH = window.innerWidth, this.SCREEN_HEIGHT = window.innerHeight, this.Camera.top = this.SCREEN_HEIGHT / 2, this.Camera.left = this.SCREEN_WIDTH / -2, this.Camera.right = this.SCREEN_WIDTH / 2, this.Camera.bottom = this.SCREEN_HEIGHT / -2, this.Camera.updateMatrixWorld(), this.Camera.updateProjectionMatrix(), this.Renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT), this.Renderer.setPixelRatio(window.devicePixelRatio) } }, { key: "loop", value: function() { if ("DESKTOP" === this.DEVICE_NAME && (this.GameLights.move(), this.GameCursor.loop()), this.GAME_START) { var t = Date.now() - this.clock;
                        this.Camera.position.x = Ue.lerp(this.Camera.position.x, this.Camera.destination.x, this.MOVE_LERP), this.Camera.position.y = Ue.lerp(this.Camera.position.y, this.Camera.destination.y, this.MOVE_LERP), !1 === yl.DEBUG && (this.GameChrono.loop(), this.GameLights.loop()), this.GameDogs.Material && this.GameDogs.Material.uniforms && (this.GameDogs.Material.uniforms.uTime.value = t) } this.Renderer.render(this.Scene, this.Camera), window.requestAnimationFrame(this._loop) } }]) && Ll(i.prototype, n), r && Ll(i, r), e }(),
        Il = (i(104), "\nuniform float uTime;\nuniform float uSpriteWidth;\nuniform float uSpriteImageWidth;\nuniform float uSpriteAnimsLength;\n");

    function Nl(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }
    var Dl = function() {
        function t(e, i) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.Shader = e, this.Material = i, this.extendUniforms(), this.extendFragment() } var e, i, n; return e = t, (i = [{ key: "extendUniforms", value: function() { this.Material.uniforms = this.Shader.uniforms, this.Shader.uniforms.uTime = { type: "f", value: 1 }, this.Shader.uniforms.uSpriteWidth = { type: "f", value: yl.CHARACTERS_SPRITE_WIDTH }, this.Shader.uniforms.uSpriteImageWidth = { type: "f", value: yl.CHARACTERS_SPRITE_IMAGE_WIDTH }, this.Shader.uniforms.uSpriteAnimsLength = { type: "f", value: yl.CHARACTERS_SPRITE_ANIMS_LENGTH }, this.Shader.vertexShader = "".concat(Il, "\n").concat(this.Shader.vertexShader), this.Shader.fragmentShader = "".concat(Il, "\n").concat(this.Shader.fragmentShader) } }, { key: "extendFragment", value: function() { this.Shader.fragmentShader = this.Shader.fragmentShader.replace("#include <map_fragment>", "\n#ifdef USE_MAP\n  // Save Transforme UVs \n  vec2 transformedUV = vUv;\n\n  // Calculate Sprite Image Normal\n  float spriteWidthNormal = uSpriteImageWidth / uSpriteWidth;\n\n  // Animate UV\n  transformedUV.x += spriteWidthNormal * floor(fract(uTime * 0.001 * 1.0) * uSpriteAnimsLength);\n\n  // Calculate Color\n  vec4 texelColor = texture2D(map, transformedUV);\n\n  // Map Color\n  texelColor = mapTexelToLinear(texelColor);\n\n  // Update Color\n  diffuseColor *= texelColor;\n#endif\n") } }]) && Nl(e.prototype, i), n && Nl(e, n), t }();

    function Gl(t) { return (Gl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function kl(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function Hl(t, e) { return !e || "object" !== Gl(e) && "function" != typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

    function Fl(t) { return (Fl = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function Ul(t, e) { return (Ul = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }
    var Bl = function(t) {
        function e() { var t; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), (t = Hl(this, Fl(e).call(this))).TEXTURE_INDICES = t.setTextureIndices(), t.PNJS_UV_BUFFER = new Float32Array(4200), t.PNJS_POSITION_BUFFER = new Float32Array(4200), t.WORKER = new Worker("js/worker-d4645920f1.js"), t } var i, n, r; return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Ul(t, e) }(e, El.a), i = e, (n = [{ key: "init", value: function(t) { var e = this;
                this.GameCore = t, this.Material = new Qa({ map: this.GameCore.Texture, emissive: yl.BOARD_COLOR, transparent: !0 }), "DESKTOP" === this.GameCore.DEVICE_NAME && (this.Material.onBeforeCompile = function(t) { new Dl(t, e.Material) }), this.getTargetTexture() } }, { key: "reset", value: function() { this.getTargetTexture(), this.PNJs && this.GameCore.Scene.remove(this.PNJs), this.Target && this.GameCore.Scene.remove(this.Target) } }, { key: "start", value: function() { var t = this;
                this.getRandomXY(function() { t.pnjs(), t.target() }) } }, { key: "pnjs", value: function() { var t = this.getPNJsDatas();
                this.PNJGeometry = new Yi, this.PNJGeometry.addAttribute("uv", new Ni(t.uvs, 2)), this.PNJGeometry.addAttribute("position", new Ni(t.positions, 3)), this.PNJGeometry.computeVertexNormals(), this.PNJs = new vn(this.PNJGeometry, this.Material), this.PNJs.name = "PNJ", this.GameCore.Scene.add(this.PNJs) } }, { key: "target", value: function() { var t = this.getTargetDatas();
                this.TargetGeometry = new Yi, this.TargetGeometry.addAttribute("uv", new Ni(t.uvs, 2)), this.TargetGeometry.addAttribute("position", new Ni(t.positions, 3)), this.TargetGeometry.computeVertexNormals(), this.Target = new vn(this.TargetGeometry, this.Material), this.Target.name = "Target", this.GameCore.Scene.add(this.Target) } }, { key: "setTextureIndices", value: function() { for (var t = yl.CHARACTERS_SPRITE_ANIMS_LENGTH, e = yl.CHARACTERS_SPRITE_IMAGE_LENGTH / yl.CHARACTERS_SPRITE_ANIMS_LENGTH, i = [], n = 0; n < e; n++) i[n] = n * t; return i } }, { key: "getTargetDatas", value: function() { var t = this.TARGET_POSITION[0] - .5 * this.GameCore.BOARD_WIDTH,
                    e = this.TARGET_POSITION[1] - .5 * this.GameCore.BOARD_HEIGHT,
                    i = this.TARGET_TEXTURE_INDEX % yl.CHARACTERS_SPRITE_LINE_LENGTH,
                    n = .5 * yl.CHARACTERS_SPRITE_LINE_NUMBER + Math.floor(this.TARGET_TEXTURE_INDEX / yl.CHARACTERS_SPRITE_LINE_LENGTH); return { uvs: new Float32Array([0 + i, 1 + n, 1 + i, 1 + n, 1 + i, 0 + n, 0 + i, 1 + n, 1 + i, 0 + n, 0 + i, 0 + n]), positions: new Float32Array([-1 * yl.CHARACTERS_SIZE * .5 + t, -1 * yl.CHARACTERS_SIZE * .5 + e, 0, 1 * yl.CHARACTERS_SIZE * .5 + t, -1 * yl.CHARACTERS_SIZE * .5 + e, 0, 1 * yl.CHARACTERS_SIZE * .5 + t, 1 * yl.CHARACTERS_SIZE * .5 + e, 0, -1 * yl.CHARACTERS_SIZE * .5 + t, -1 * yl.CHARACTERS_SIZE * .5 + e, 0, 1 * yl.CHARACTERS_SIZE * .5 + t, 1 * yl.CHARACTERS_SIZE * .5 + e, 0, -1 * yl.CHARACTERS_SIZE * .5 + t, 1 * yl.CHARACTERS_SIZE * .5 + e, 0]) } } }, { key: "getTargetTexture", value: function() { this.TARGET_TEXTURE_KEY = Math.floor(Math.random() * this.TEXTURE_INDICES.length), this.TARGET_TEXTURE_INDEX = this.TEXTURE_INDICES[this.TARGET_TEXTURE_KEY], this.TARGET_TEXTURE_NAME = yl.CHARACTERS_SPRITE_FILES[this.TARGET_TEXTURE_INDEX / yl.CHARACTERS_SPRITE_ANIMS_LENGTH], this.TEXTURE_INDICES_SORTED = this.TEXTURE_INDICES.slice(0), this.TEXTURE_INDICES_SORTED.splice(this.TARGET_TEXTURE_KEY, 1), this.emit("target-change", this.TARGET_TEXTURE_NAME) } }, { key: "getPNJsDatas", value: function() { for (var t = 6 * this.PNJS_POSITIONS.length * 2, e = 6 * this.PNJS_POSITIONS.length * 3, i = new Float32Array(t), n = new Float32Array(e), r = 0; r < this.PNJS_POSITIONS.length; r++) { var o = 6 * r * 2,
                        a = 6 * r * 3,
                        s = this.getPNJsTexture(),
                        h = this.PNJS_POSITIONS[r][0] - .5 * this.GameCore.BOARD_WIDTH,
                        c = this.PNJS_POSITIONS[r][1] - .5 * this.GameCore.BOARD_HEIGHT;
                    n[a + 0] = -1 * yl.CHARACTERS_SIZE * .5 + h, n[a + 1] = -1 * yl.CHARACTERS_SIZE * .5 + c, n[a + 2] = 0, n[a + 3] = 1 * yl.CHARACTERS_SIZE * .5 + h, n[a + 4] = -1 * yl.CHARACTERS_SIZE * .5 + c, n[a + 5] = 0, n[a + 6] = 1 * yl.CHARACTERS_SIZE * .5 + h, n[a + 7] = 1 * yl.CHARACTERS_SIZE * .5 + c, n[a + 8] = 0, n[a + 9] = -1 * yl.CHARACTERS_SIZE * .5 + h, n[a + 10] = -1 * yl.CHARACTERS_SIZE * .5 + c, n[a + 11] = 0, n[a + 12] = 1 * yl.CHARACTERS_SIZE * .5 + h, n[a + 13] = 1 * yl.CHARACTERS_SIZE * .5 + c, n[a + 14] = 0, n[a + 15] = -1 * yl.CHARACTERS_SIZE * .5 + h, n[a + 16] = 1 * yl.CHARACTERS_SIZE * .5 + c, n[a + 17] = 0; var l = s % yl.CHARACTERS_SPRITE_LINE_LENGTH,
                        u = Math.floor(s / yl.CHARACTERS_SPRITE_LINE_LENGTH);
                    i[o + 0] = 0 + l, i[o + 1] = 1 + u, i[o + 2] = 1 + l, i[o + 3] = 1 + u, i[o + 4] = 1 + l, i[o + 5] = 0 + u, i[o + 6] = 0 + l, i[o + 7] = 1 + u, i[o + 8] = 1 + l, i[o + 9] = 0 + u, i[o + 10] = 0 + l, i[o + 11] = 0 + u } return { uvs: i, positions: n } } }, { key: "getPNJsTexture", value: function() { return this.TEXTURE_INDICES_SORTED[Math.floor(Math.random() * this.TEXTURE_INDICES_SORTED.length)] } }, { key: "getRandomXY", value: function(t) { var e = this,
                    i = this.getSpace(),
                    n = this.GameCore.BOARD_WIDTH,
                    r = this.GameCore.BOARD_HEIGHT;
                this.WORKER.postMessage([n, r, i]), this.WORKER.onmessage = function(i) { e.TARGET_POSITION = i.data[0], e.PNJS_POSITIONS = i.data[1], t() } } }, { key: "getSpace", value: function() { return Math.max(yl["CHARACTERS_".concat(this.GameCore.DEVICE_NAME, "_MIN_SPACE")], yl["CHARACTERS_".concat(this.GameCore.DEVICE_NAME, "_MAX_SPACE")] - (this.GameCore.LEVEL - 1) * yl["CHARACTERS_".concat(this.GameCore.DEVICE_NAME, "_SPACE_DELTA")]) } }]) && kl(i.prototype, n), r && kl(i, r), e }();

    function zl(t) { return (zl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function jl(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function Vl(t, e) { return !e || "object" !== zl(e) && "function" != typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

    function Wl(t) { return (Wl = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function Xl(t, e) { return (Xl = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }
    var Yl = function(t) {
            function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), Vl(this, Wl(e).apply(this, arguments)) } var i, n, r; return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Xl(t, e) }(e, El.a), i = e, (n = [{ key: "init", value: function(t) { this.GameCore = t; var e = this.GameCore.BOARD_WIDTH + 2 * yl.BOARD_PADDING_X,
                        i = this.GameCore.BOARD_HEIGHT + 2 * yl.BOARD_PADDING_Y; "DESKTOP" !== this.GameCore.DEVICE_NAME && (e = this.GameCore.BOARD_WIDTH + this.GameCore.SCREEN_WIDTH, i = this.GameCore.BOARD_HEIGHT + this.GameCore.SCREEN_HEIGHT), this.Geometry = new $i(e, i, 1, 1), this.Material = new Ja({ color: yl.BOARD_COLOR, emissive: yl.BOARD_COLOR, shininess: 0 }), this.Back = new vn(this.Geometry, this.Material), this.GameCore.Scene.add(this.Back) } }]) && jl(i.prototype, n), r && jl(i, r), e }(),
        ql = i(73),
        Zl = i.n(ql);

    function Jl(t) { return (Jl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function $l(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function Kl(t) { return (Kl = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function Ql(t, e) { return (Ql = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

    function tu(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }
    var eu = function(t) {
        function e() { var t, i, n; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), i = this, (t = !(n = Kl(e).call(this)) || "object" !== Jl(n) && "function" != typeof n ? tu(i) : n).clock = null, t.FLASHLIGHT_OFF = !1, t.FLASHLIGHT_X = 0, t.FLASHLIGHT_Y = 0, t.FLASHLIGHT_Z = 200, t.FLASHLIGHT_BATTERY_LEVEL = 100, t.FLASHLIGHT_BATTERY_CHARGE = 100, t.Ambient = new oh(yl.AMBIENT_COLOR, yl.AMBIENT_INTENSITY), t.Flashlight = new eh(yl.FLASHLIGHT_COLOR, 0, 0, yl.FLASHLIGHT_DECAY), t._keyup = t.keyup.bind(tu(tu(t))), t._shake = t.charge.bind(tu(tu(t))), t } var i, n, r; return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Ql(t, e) }(e, El.a), i = e, (n = [{ key: "init", value: function(t) {
                (this.GameCore = t, this.GameCore.Scene.add(this.Ambient), this.GameCore.Camera.add(this.Flashlight), this.FLASHLIGHT_LIFETIME = this.getLifetime(), this.FLASHLIGHT_DISTANCE = this.getDistance(), this.FLASHLIGHT_CHARGE_VALUE = this.getBatteryCharge(), this.Flashlight.distance = this.FLASHLIGHT_DISTANCE, this.Flashlight.intensity = yl.FLASHLIGHT_MIN_INTENSITY, this.Flashlight.position.set(this.FLASHLIGHT_X, this.FLASHLIGHT_Y, this.FLASHLIGHT_Z), "DESKTOP" !== this.GameCore.DEVICE_NAME) && (new Zl.a({ threshold: 10, timeout: 200 }).start(), window.addEventListener("shake", this._shake, !1)); "DESKTOP" === this.GameCore.DEVICE_NAME && window.addEventListener("keyup", this._keyup) } }, { key: "reset", value: function() { this.clock = null, this.FLASHLIGHT_OFF = !1, this.FLASHLIGHT_BATTERY_LEVEL = 100, this.FLASHLIGHT_BATTERY_CHARGE = 100, this.FLASHLIGHT_LIFETIME = this.getLifetime(), this.FLASHLIGHT_DISTANCE = this.getDistance(), this.FLASHLIGHT_CHARGE_VALUE = this.getBatteryCharge(), this.emit("light-on"), vl.killTweensOf(this.Flashlight), vl.to(this.Flashlight, .4, { ease: Quart.easeOut, distance: this.FLASHLIGHT_DISTANCE, intensity: yl.FLASHLIGHT_MAX_INTENSITY }) } }, { key: "keyup", value: function(t) { t.preventDefault(), 32 === t.which && this.charge() } }, { key: "charge", value: function() { this.clock = null, "DESKTOP" === this.GameCore.DEVICE_NAME ? this.FLASHLIGHT_BATTERY_CHARGE = Math.min(100, this.FLASHLIGHT_BATTERY_LEVEL + this.FLASHLIGHT_CHARGE_VALUE) : this.FLASHLIGHT_BATTERY_CHARGE = 100, this.FLASHLIGHT_OFF && this.turnOn() } }, { key: "move", value: function() { this.FLASHLIGHT_X = Ue.lerp(this.FLASHLIGHT_X, this.GameCore.MOUSE_POSITION.x, .1), this.FLASHLIGHT_Y = Ue.lerp(this.FLASHLIGHT_Y, this.GameCore.MOUSE_POSITION.y, .1), this.Flashlight.position.set(this.FLASHLIGHT_X, this.FLASHLIGHT_Y, this.FLASHLIGHT_Z) } }, { key: "turnOn", value: function() { this.FLASHLIGHT_OFF = !1, vl.killTweensOf(this.Flashlight), vl.to(this.Flashlight, .4, { ease: Quad.easeOut, intensity: yl.FLASHLIGHT_MAX_INTENSITY }), this.emit("light-on") } }, { key: "firstOn", value: function() { this.FLASHLIGHT_OFF = !1, vl.to(this.Flashlight, .1, { intensity: 1 * yl.FLASHLIGHT_MIN_INTENSITY, delay: 0 }), vl.to(this.Flashlight, .1, { intensity: .3 * yl.FLASHLIGHT_MIN_INTENSITY, delay: .1 }), vl.to(this.Flashlight, .1, { intensity: .8 * yl.FLASHLIGHT_MAX_INTENSITY, delay: .2 }), vl.to(this.Flashlight, .1, { intensity: .6 * yl.FLASHLIGHT_MAX_INTENSITY, delay: .3 }), vl.to(this.Flashlight, .1, { intensity: 1 * yl.FLASHLIGHT_MAX_INTENSITY, delay: .4 }) } }, { key: "turnOff", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.FLASHLIGHT_OFF = !0, vl.killTweensOf(this.Flashlight), vl.to(this.Flashlight, .1, { intensity: .5 * yl.FLASHLIGHT_MAX_INTENSITY, delay: 0 }), vl.to(this.Flashlight, .1, { intensity: 1 * yl.FLASHLIGHT_MAX_INTENSITY, delay: .1 }), vl.to(this.Flashlight, .1, { intensity: .2 * yl.FLASHLIGHT_MAX_INTENSITY, delay: .2 }), vl.to(this.Flashlight, .1, { intensity: .5 * yl.FLASHLIGHT_MAX_INTENSITY, delay: .3 }), vl.to(this.Flashlight, .1, { intensity: 1 * yl.FLASHLIGHT_MIN_INTENSITY, delay: .4 }), t || this.emit("light-off") } }, { key: "loop", value: function() { if (!this.FLASHLIGHT_OFF && this.GameCore.GAME_START) { this.clock || (this.clock = Date.now()); var t = (Date.now() - this.clock) / this.FLASHLIGHT_LIFETIME;
                    this.FLASHLIGHT_BATTERY_LEVEL = this.FLASHLIGHT_BATTERY_CHARGE - Math.floor(100 * t), this.emit("battery-change", this.FLASHLIGHT_BATTERY_LEVEL), this.FLASHLIGHT_BATTERY_LEVEL <= 0 && (this.turnOff(), this.clock = null) } } }, { key: "getBatteryCharge", value: function() { return Math.max(yl.FLASHLIGHT_BATTERY_MIN_CHARGE, yl.FLASHLIGHT_BATTERY_MAX_CHARGE - (this.GameCore.LEVEL - 1) * yl.FLASHLIGHT_BATTERY_DELTA) } }, { key: "getDistance", value: function() { return Math.max(yl.FLASHLIGHT_MIN_DISTANCE, yl.FLASHLIGHT_MAX_DISTANCE - (this.GameCore.LEVEL - 1) * yl.FLASHLIGHT_DISTANCE_DELTA) + this.FLASHLIGHT_Z } }, { key: "getLifetime", value: function() { return Math.max(yl.FLASHLIGHT_MIN_LIFETIME, yl.FLASHLIGHT_MAX_LIFETIME - (this.GameCore.LEVEL - 1) * yl.FLASHLIGHT_LIFETIME_DELTA) } }]) && $l(i.prototype, n), r && $l(i, r), e }();

    function iu(t) { return (iu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function nu(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function ru(t) { return (ru = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function ou(t, e) { return (ou = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

    function au(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }
    var su = function(t) {
        function e() { var t, i, n; for (var r in function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), i = this, (t = !(n = ru(e).call(this)) || "object" !== iu(n) && "function" != typeof n ? au(i) : n).$audioToggler = document.querySelector(".js-game-sound"), t.$audioTrigger = document.querySelectorAll(".js-audio-choice"), t.$audioChoiceWrapper = document.querySelector(".js-audio-choice-wrapper"), t.disabled = !1, t.files = { kennel: new Audio(yl.AUDIO_KENNEL), ambient: new Audio(yl.AUDIO_AMBIENT), success: new Audio(yl.AUDIO_SUCCESS), battery: new Audio(yl.AUDIO_BATTERY), countdown: new Audio(yl.AUDIO_COUNTDOWN), lost_life: new Audio(yl.AUDIO_LOST_LIFE), game_over: new Audio(yl.AUDIO_GAME_OVER), score_count: new Audio(yl.AUDIO_SCORE_COUNT) }, t._audioToggle = t.audioToggle.bind(au(au(t))), t._audioDenied = t.audioDenied.bind(au(au(t))), t._audioAllowed = t.audioAllowed.bind(au(au(t))), t.$audioToggler.addEventListener("click", t._audioToggle), t.files) t.files[r].load(); return t } var i, n, r; return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && ou(t, e) }(e, El.a), i = e, (n = [{ key: "check", value: function(t) { var e = this; if (/Edge/.test(navigator.userAgent)) return this.$audioToggler.classList.add("is-hidden"), alert("Your browser doesn't support audio :("), void t();
                this.play("ambient", !0, 1, .2).then(function() { return e.audioAllowed(t) }).catch(function() { return e.audioDenied(t) }) } }, { key: "audioToggle", value: function() { this.$audioToggler.classList.toggle("is-disabled"), this.$audioToggler.blur(), this.disabled = !this.disabled, this.refresh(), dataLayer.push({ "audio-enabled": this.disabled }) } }, { key: "audioAllowed", value: function(t) { setTimeout(function() { t() }, 700) } }, { key: "audioDenied", value: function(t) { var e = this;
                this.$audioChoiceWrapper.classList.add("is-visible"); for (var i = function(i) { var n = e.$audioTrigger[i];
                        n.addEventListener("click", function() { e.$audioChoiceWrapper.classList.remove("is-visible"), e.play("ambient", !0, 1, .4), n.classList.contains("js-audio-enable") || (e.$audioToggler.classList.add("is-disabled"), e.disabled = !0, e.refresh()), setTimeout(function() { t() }, 700) }) }, n = 0; n < this.$audioTrigger.length; n++) i(n) } }, { key: "play", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1; return i = Math.min(i, yl.AUDIO_MAX_SPEED), this.files[t].loop = e, this.files[t].volume = n, this.files[t].playbackRate = i, this.files[t].play() } }, { key: "stop", value: function(t) { var e = this.files[t];
                vl.killTweensOf(e), vl.to(e, 1, { volume: 0, onComplete: function() { e.pause(), e.volume = 1, e.currentTime = 0 } }) } }, { key: "changeSpeed", value: function(t, e) { this.files[t].playbackRate = e } }, { key: "changeVolume", value: function(t, e) { var i = this.files[t];
                vl.killTweensOf(i), vl.to(i, 1, { volume: Math.min(1, e) }) } }, { key: "interrupt", value: function(t) { var e = this.files[t];
                e.pause(), e.currentTime = 0 } }, { key: "refresh", value: function() { for (var t in this.files) this.files[t].muted = this.disabled } }]) && nu(i.prototype, n), r && nu(i, r), e }();

    function hu(t) { return (hu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function cu(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function lu(t, e) { return !e || "object" !== hu(e) && "function" != typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

    function uu(t) { return (uu = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function pu(t, e) { return (pu = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }
    var fu = function(t) {
        function e() { var t; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), (t = lu(this, uu(e).call(this))).SCORE = 0, t.TIME_SCORE = 0, t.LEVEL_SCORE = 0, t } var i, n, r; return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && pu(t, e) }(e, El.a), i = e, (n = [{ key: "init", value: function(t) { this.GameCore = t, this.TIME_SCORE = this.getTimeScore(), this.LEVEL_SCORE = this.getLevelScore() } }, { key: "reset", value: function() { this.SCORE = 0, this.TIME_SCORE = this.getTimeScore(), this.LEVEL_SCORE = this.getLevelScore() } }, { key: "update", value: function() { this.TIME_SCORE = this.getTimeScore(), this.LEVEL_SCORE = this.getLevelScore(), this.SCORE += this.LEVEL_SCORE + this.TIME_SCORE, this.emit("score-change", this.SCORE, this.LEVEL_SCORE, this.TIME_SCORE) } }, { key: "getLevelScore", value: function() { return yl.SCORE_MIN + yl.SCORE_DELTA * (this.GameCore.LEVEL - 1) } }, { key: "getTimeScore", value: function() { return Math.ceil(yl.SCORE_MULTIPLIER * this.GameCore.GameChrono.CHRONO_SECS) } }]) && cu(i.prototype, n), r && cu(i, r), e }();

    function du(t) { return (du = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function mu(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function gu(t, e) { return !e || "object" !== du(e) && "function" != typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

    function vu(t) { return (vu = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function yu(t, e) { return (yu = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }
    var _u = function(t) {
        function e() { var t; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), (t = gu(this, vu(e).call(this))).clock = null, t.CHRONO_LOW = !1, t.CHRONO_TIME = 0, t.CHRONO_SECS = 0, t } var i, n, r; return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && yu(t, e) }(e, El.a), i = e, (n = [{ key: "init", value: function(t) { this.GameCore = t, this.CHRONO_DURATION = this.getDuration() } }, { key: "reset", value: function() { this.clock = null, this.CHRONO_LOW = !1, this.CHRONO_TIME = 0, this.CHRONO_SECS = 0, this.CHRONO_DURATION = this.getDuration() } }, { key: "loop", value: function() { this.clock || (this.clock = Date.now()), this.CHRONO_TIME = this.CHRONO_DURATION - (Date.now() - this.clock), this.CHRONO_SECS = Math.max(0, this.CHRONO_TIME / 1e3), this.CHRONO_TIME < yl.CHRONO_TRESHOLD && (this.CHRONO_LOW || (this.CHRONO_LOW = !0, this.emit("time-low"))), this.CHRONO_TIME < 1e3 && this.GameCore.stop(), this.emit("time-change", this.CHRONO_SECS.toFixed(2)) } }, { key: "getDuration", value: function() { return Math.max(yl.GAME_MIN_DURATION, yl.GAME_MAX_DURATION - (this.GameCore.LEVEL - 1) * yl.GAME_DURATION_DELTA) } }]) && mu(i.prototype, n), r && mu(i, r), e }();

    function xu(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }
    var bu = function() {
        function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.$cursor = document.querySelector(".cursor"), this.POSITION = {}, this.DESTINATION = {} } var e, i, n; return e = t, (i = [{ key: "init", value: function(t) { this.GameCore = t, "DESKTOP" === this.GameCore.DEVICE_NAME && (this.DESTINATION.x = .5 * this.GameCore.SCREEN_WIDTH + yl.CURSOR_OFFSET_X, this.DESTINATION.y = .5 * this.GameCore.SCREEN_HEIGHT + yl.CURSOR_OFFSET_Y, this.POSITION.x = this.DESTINATION.x, this.POSITION.y = this.DESTINATION.y) } }, { key: "move", value: function() { this.DESTINATION.x = this.GameCore.MOUSE_CLIENT_POSITION.x + yl.CURSOR_OFFSET_X, this.DESTINATION.y = this.GameCore.MOUSE_CLIENT_POSITION.y + yl.CURSOR_OFFSET_Y; var t = 90 * ((this.GameCore.MOUSE_CLIENT_POSITION.x - .5 * this.GameCore.SCREEN_WIDTH) / (.5 * this.GameCore.SCREEN_WIDTH));
                vl.set(this.$cursor, { rotation: t }) } }, { key: "loop", value: function() { this.POSITION.x = Ue.lerp(this.POSITION.x, this.DESTINATION.x, .1), this.POSITION.y = Ue.lerp(this.POSITION.y, this.DESTINATION.y, .1), vl.set(this.$cursor, { x: this.POSITION.x, y: this.POSITION.y }) } }, { key: "show", value: function() { "DESKTOP" === this.GameCore.DEVICE_NAME && this.$cursor.classList.add("is-visible") } }, { key: "hide", value: function() { "DESKTOP" === this.GameCore.DEVICE_NAME && this.$cursor.classList.remove("is-visible") } }]) && xu(e.prototype, i), n && xu(e, n), t }();

    function wu(t) { return (wu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function Tu(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function Eu(t, e) { return !e || "object" !== wu(e) && "function" != typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

    function Su(t) { return (Su = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function Mu(t, e) { return (Mu = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }
    var Au = function(t) {
        function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), Eu(this, Su(e).apply(this, arguments)) } var i, n, r; return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Mu(t, e) }(e, El.a), i = e, (n = [{ key: "start", value: function() { var t = this;
                this.COUNTDOWN_TIME = yl.COUNTDOWN_DURATION, this.COUNTDOWN_INTERVAL = null, this.emit("countdown-start"), this.emit("countdown-change", this.COUNTDOWN_TIME), this.COUNTDOWN_INTERVAL = setInterval(function() { t.COUNTDOWN_TIME = t.COUNTDOWN_TIME - 1e3, t.emit("countdown-change", t.COUNTDOWN_TIME), t.COUNTDOWN_TIME < 1e3 && (t.COUNTDOWN_INTERVAL && clearInterval(t.COUNTDOWN_INTERVAL), t.emit("countdown-over", t.COUNTDOWN_TIME)) }, 1e3) } }]) && Tu(i.prototype, n), r && Tu(i, r), e }();

    function Lu(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }
    var Cu = function() {
        function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.$game = document.querySelector('[template="game"]'), this.$ui = this.$game.querySelector(".game-ui"), this.$life = this.$game.querySelectorAll(".js-game-life"), this.$light = this.$game.querySelector(".js-game-light"), this.$start = this.$game.querySelectorAll(".js-game-start"), this.$chrono = this.$game.querySelector(".js-game-time"), this.$battery = this.$game.querySelector(".js-game-battery"), this.$restart = this.$game.querySelectorAll(".js-game-restart"), this.$tutorialNext = this.$game.querySelectorAll(".js-tutorial-next"), this.$scoreShares = this.$game.querySelectorAll(".js-score-share"), this.$twitterShare = this.$game.querySelectorAll(".js-share-twitter"), this.$facebookShare = this.$game.querySelectorAll(".js-share-facebook"), this.$levelValue = this.$game.querySelectorAll(".js-game-level"), this.$targetName = this.$game.querySelectorAll(".js-game-target-name"), this.$targetImage = this.$game.querySelector(".js-game-target-image"), this.$targetAvatar = this.$game.querySelector(".js-game-target-avatar"), this.$countdownValue = this.$game.querySelector(".js-game-countdown-value"), this.$scoreTime = this.$game.querySelector(".js-game-score-time"), this.$scoreLevel = this.$game.querySelector(".js-game-score-level"), this.$scoreFinal = this.$game.querySelector(".js-game-score-final"), this.$scoreTotal = this.$game.querySelector(".js-game-score"), this.$foundMarker = this.$game.querySelector(".js-game-found-marker"), this.$heartMarker = this.$game.querySelector(".js-game-heart-marker"), this.$timeAlert = this.$game.querySelector(".js-alert-time"), this.$lightAlert = this.$game.querySelector(".js-alert-light"), this._onTimeLow = this.onTimeLow.bind(this), this._onLightOn = this.onLightOn.bind(this), this._onLightOff = this.onLightOff.bind(this), this._onGameOver = this.onGameOver.bind(this), this._onGameStart = this.onGameStart.bind(this), this._onGamePause = this.onGamePause.bind(this), this._onLifeChange = this.onLifeChange.bind(this), this._onTimeChange = this.onTimeChange.bind(this), this._onScoreReset = this.onScoreReset.bind(this), this._onGameRestart = this.onGameRestart.bind(this), this._onTutorialNext = this.onTutorialNext.bind(this), this._onScoreChange = this.onScoreChange.bind(this), this._onLevelChange = this.onLevelChange.bind(this), this._onTargetFound = this.onTargetFound.bind(this), this._onTargetChange = this.onTargetChange.bind(this), this._onBatteryChange = this.onBatteryChange.bind(this), this._onCountdownOver = this.onCountdownOver.bind(this), this._onCountdownStart = this.onCountdownStart.bind(this), this._onCountdownChange = this.onCountdownChange.bind(this), this._onGameBeforeStart = this.onGameBeforeStart.bind(this), this._onShareTwitter = this.onShareTwitter.bind(this), this._onShareFacebook = this.onShareFacebook.bind(this), this.tutorialIndex = 0, (localStorage.getItem("seen_tutorial") || yl.DEBUG) && (this.tutorialIndex = yl.TUTORIAL_STEPS) } var e, i, n; return e = t, (i = [{ key: "init", value: function() { this.GameDogs = new Bl, this.GameAudio = new su, this.GameScene = new Yl, this.GameScore = new fu, this.GameChrono = new _u, this.GameLights = new eu, this.GameCursor = new bu, this.GameCountdown = new Au, this.GameCore = new Rl({ el: this.$game, GameDogs: this.GameDogs, GameScene: this.GameScene, GameScore: this.GameScore, GameChrono: this.GameChrono, GameLights: this.GameLights, GameCursor: this.GameCursor }), this.GameCore.init(), this.GameScene.init(this.GameCore), this.GameLights.init(this.GameCore), this.GameCursor.init(this.GameCore), this.bind(), this.load(), document.body.setAttribute("data-device", this.GameCore.DEVICE_NAME.toLowerCase()) } }, { key: "bind", value: function() { this.GameCore.on("game-over", this._onGameOver), this.GameCore.on("game-start", this._onGameStart), this.GameCore.on("game-pause", this._onGamePause), this.GameCore.on("life-change", this._onLifeChange), this.GameCore.on("level-change", this._onLevelChange), this.GameCore.on("target-found", this._onTargetFound), this.GameDogs.on("target-change", this._onTargetChange), this.GameScore.on("score-change", this._onScoreChange), this.GameChrono.on("time-change", this._onTimeChange), this.GameChrono.on("time-low", this._onTimeLow), this.GameLights.on("light-on", this._onLightOn), this.GameLights.on("light-off", this._onLightOff), this.GameLights.on("battery-change", this._onBatteryChange), this.GameCountdown.on("countdown-over", this._onCountdownOver), this.GameCountdown.on("countdown-start", this._onCountdownStart), this.GameCountdown.on("countdown-change", this._onCountdownChange); var t = !0,
                    e = !1,
                    i = void 0; try { for (var n, r = this.$start[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) { n.value.addEventListener("click", this._onGameBeforeStart) } } catch (t) { e = !0, i = t } finally { try { t || null == r.return || r.return() } finally { if (e) throw i } } var o = !0,
                    a = !1,
                    s = void 0; try { for (var h, c = this.$tutorialNext[Symbol.iterator](); !(o = (h = c.next()).done); o = !0) { h.value.addEventListener("click", this._onTutorialNext) } } catch (t) { a = !0, s = t } finally { try { o || null == c.return || c.return() } finally { if (a) throw s } } var l = !0,
                    u = !1,
                    p = void 0; try { for (var f, d = this.$restart[Symbol.iterator](); !(l = (f = d.next()).done); l = !0) { f.value.addEventListener("click", this._onGameRestart) } } catch (t) { u = !0, p = t } finally { try { l || null == d.return || d.return() } finally { if (u) throw p } } var m = !0,
                    g = !1,
                    v = void 0; try { for (var y, _ = this.$twitterShare[Symbol.iterator](); !(m = (y = _.next()).done); m = !0) { y.value.addEventListener("click", this._onShareTwitter) } } catch (t) { g = !0, v = t } finally { try { m || null == _.return || _.return() } finally { if (g) throw v } } var x = !0,
                    b = !1,
                    w = void 0; try { for (var T, E = this.$facebookShare[Symbol.iterator](); !(x = (T = E.next()).done); x = !0) { T.value.addEventListener("click", this._onShareFacebook) } } catch (t) { b = !0, w = t } finally { try { x || null == E.return || E.return() } finally { if (b) throw w } } } }, { key: "load", value: function() { var t = this;
                this.Loader = new wl; var e = this.GameCore.Renderer.capabilities.maxTextureSize >= 8192 ? yl.CHARACTERS_SPRITE_8K_URL : yl.CHARACTERS_SPRITE_4K_URL;
                this.GameCore.Texture = (new Ms).load(e, function(e) { e.flipY = !1, e.minFilter = Ct, e.magFilter = Ct, e.repeat.set(1 / yl.CHARACTERS_SPRITE_LINE_LENGTH, 1 / yl.CHARACTERS_SPRITE_LINE_NUMBER), t.GameCore.loadGPU(), t.Loader.load().then(function() { t.GameDogs.init(t.GameCore), t.GameScore.init(t.GameCore), t.GameChrono.init(t.GameCore), t.GameCursor.init(t.GameCore), t.GameAudio.check(function() { t.showIntro() }) }) }) } }, { key: "showIntro", value: function() { document.body.setAttribute("data-game-state", "game-wait"), this.GameAudio.play("battery"), this.GameCursor.show(), this.GameLights.firstOn() } }, { key: "onGameStart", value: function() { this.GameAudio.changeSpeed("ambient", 1 + .1 * (this.GameCore.LEVEL - 1)), dataLayer.push({ event: "game-start" }) } }, { key: "onGameOver", value: function(t, e) { var i = this;
                dataLayer.push({ event: "game-over", "game-score": t, "game-level": e }), this.GameAudio.changeSpeed("ambient", 1), this.GameAudio.play("game_over"), 0 !== t && this.GameAudio.play("score_count"); for (var n = 0; n < this.$scoreShares.length; n++) this.$scoreShares[n].setAttribute("data-share-text", "I just scored ".concat(t, " on SnoopDogs : A fast-paced arcade game from @ForestryGames. Challenge me!"));
                this.$timeAlert.classList.remove("is-visible"), this.$lightAlert.classList.remove("is-visible"), clearTimeout(this.lifeMarkerTimeout), this.$heartMarker.classList.remove("is-visible"), this.GameCursor.$cursor.classList.add("is-on"), this.GameCursor.$cursor.classList.remove("is-off"), this.GameCore.reset(); var r = { value: 0 };
                vl.to(r, 1, { value: t, onUpdate: function() { i.$scoreFinal.innerHTML = Math.floor(r.value) } }), document.body.setAttribute("data-game-state", "game-over") } }, { key: "onGamePause", value: function() { this.GameCountdown.start(), this.$foundMarker.classList.remove("is-visible"), document.body.setAttribute("data-game-state", "game-pause"), dataLayer.push({ event: "game-pause" }) } }, { key: "onGameRestart", value: function() { var t = this;
                setTimeout(function() { t.onLifeReset(), t.onScoreReset(), t.onLevelChange(1) }, 200), this.GameCountdown.start() } }, { key: "onGameBeforeStart", value: function() { if (this.tutorialIndex !== yl.TUTORIAL_STEPS) return this.GameLights.turnOff(!0), this.GameCursor.hide(), this.onTutorialNext(), void localStorage.setItem("seen_tutorial", !0);
                this.GameCountdown.start(), this.GameLights.turnOn(), this.GameCursor.show(), document.body.removeAttribute("data-game-tutorial") } }, { key: "onCountdownStart", value: function() { this.GameAudio.play("countdown"), this.GameCore.GAME_PAUSE || document.body.setAttribute("data-game-state", "game-countdown") } }, { key: "onCountdownOver", value: function() { document.body.setAttribute("data-game-state", "game-start"), this.GameCore.start() } }, { key: "onLightOn", value: function() { this.$light.classList.remove("is-off"), this.$lightAlert.classList.remove("is-visible"), this.GameCursor.$cursor.classList.add("is-on"), this.GameCursor.$cursor.classList.remove("is-off") } }, { key: "onLightOff", value: function() { this.GameAudio.play("battery"), this.$light.classList.add("is-off"), this.$lightAlert.classList.add("is-visible"), this.GameCursor.$cursor.classList.add("is-off"), this.GameCursor.$cursor.classList.remove("is-on") } }, { key: "onTargetFound", value: function() { this.GameAudio.play("success"), this.$timeAlert.classList.remove("is-visible"), this.$lightAlert.classList.remove("is-visible"), "DESKTOP" === this.GameCore.DEVICE_NAME ? vl.set(this.$foundMarker, { x: this.GameCore.MOUSE_CLIENT_POSITION.x, y: this.GameCore.MOUSE_CLIENT_POSITION.y }) : vl.set(this.$foundMarker, { x: this.GameCore.TOUCH_ORIGIN.x, y: this.GameCore.TOUCH_ORIGIN.y }), this.$foundMarker.classList.add("is-visible") } }, { key: "onTargetChange", value: function(t) { var e = !0,
                    i = !1,
                    n = void 0; try { for (var r, o = this.$targetName[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) { r.value.innerHTML = t.charAt(0).toUpperCase() + t.substring(1) } } catch (t) { i = !0, n = t } finally { try { e || null == o.return || o.return() } finally { if (i) throw n } } this.$targetImage.setAttribute("data-dog-name", t), this.$targetAvatar.setAttribute("data-dog-name", t) } }, { key: "onLevelChange", value: function(t) { var e = !0,
                    i = !1,
                    n = void 0; try { for (var r, o = this.$levelValue[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) { r.value.innerHTML = t } } catch (t) { i = !0, n = t } finally { try { e || null == o.return || o.return() } finally { if (i) throw n } } } }, { key: "onLifeChange", value: function(t) { var e = this,
                    i = !0,
                    n = !1,
                    r = void 0; try { for (var o, a = this.$life[Symbol.iterator](); !(i = (o = a.next()).done); i = !0) { o.value.querySelectorAll("span")[yl.GAME_LIFE - t - 1].classList.add("is-off") } } catch (t) { n = !0, r = t } finally { try { i || null == a.return || a.return() } finally { if (n) throw r } } "DESKTOP" === this.GameCore.DEVICE_NAME ? vl.set(this.$heartMarker, { x: this.GameCore.MOUSE_CLIENT_POSITION.x, y: this.GameCore.MOUSE_CLIENT_POSITION.y }) : vl.set(this.$heartMarker, { x: this.GameCore.TOUCH_ORIGIN.x, y: this.GameCore.TOUCH_ORIGIN.y }), clearTimeout(this.lifeMarkerTimeout), this.$heartMarker.classList.add("is-visible"), this.lifeMarkerTimeout = setTimeout(function() { e.$heartMarker.classList.remove("is-visible") }, 500), this.GameAudio.interrupt("lost_life"), this.GameAudio.play("lost_life") } }, { key: "onLifeReset", value: function() { var t = !0,
                    e = !1,
                    i = void 0; try { for (var n, r = this.$life[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) { var o = n.value.querySelectorAll("span"),
                            a = !0,
                            s = !1,
                            h = void 0; try { for (var c, l = o[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) { c.value.classList.remove("is-off") } } catch (t) { s = !0, h = t } finally { try { a || null == l.return || l.return() } finally { if (s) throw h } } } } catch (t) { e = !0, i = t } finally { try { t || null == r.return || r.return() } finally { if (e) throw i } } } }, { key: "onTimeLow", value: function() { var t = this;
                this.$timeAlert.classList.add("is-visible"), this.$lightAlert.classList.add("is-hidden"), setTimeout(function() { t.$timeAlert.classList.remove("is-visible"), t.$lightAlert.classList.remove("is-hidden") }, 800) } }, { key: "onTimeChange", value: function(t) { var e = t.split("."),
                    i = parseInt(e[0]) <= 9 ? "0".concat(e[0]) : e[0],
                    n = e[1];
                this.$chrono.innerHTML = "".concat(i, "<sup>.").concat(n, "</sup>") } }, { key: "onCountdownChange", value: function(t) { this.$countdownValue.innerHTML = t / 1e3 } }, { key: "onBatteryChange", value: function(t) { this.$battery.style.width = "".concat(t, "%") } }, { key: "onScoreChange", value: function(t, e, i) { var n = this;
                this.GameAudio.play("score_count"); var r = { value: this.$scoreTotal.innerHTML };
                this.$scoreTime.innerHTML = i, this.$scoreLevel.innerHTML = e, vl.to(r, 1, { value: t, onUpdate: function() { n.$scoreTotal.innerHTML = Math.floor(r.value) } }) } }, { key: "onScoreReset", value: function() { this.$scoreTime.innerHTML = 0, this.$scoreLevel.innerHTML = 0, this.$scoreTotal.innerHTML = 0 } }, { key: "onTutorialNext", value: function() { this.tutorialIndex = this.tutorialIndex + 1, document.body.setAttribute("data-game-state", "game-tutorial"), document.body.setAttribute("data-game-tutorial", this.tutorialIndex) } }, { key: "onShareTwitter", value: function(t) { var e = t.currentTarget.getAttribute("data-gtm-event"),
                    i = t.currentTarget.getAttribute("data-share-text"),
                    n = "http://twitter.com/share?text=".concat(i, "&url=www.forestrygames.com");
                dataLayer.push({ event: e }), window.open(n) } }, { key: "onShareFacebook", value: function(t) { var e = t.currentTarget.getAttribute("data-gtm-event"),
                    i = t.currentTarget.getAttribute("data-share-text");
                dataLayer.push({ event: e }), FB.ui({ method: "share", display: "popup", hashtag: "#SnoopDogs", quote: i, href: "https://www.forestrygames.com" }) } }]) && Lu(e.prototype, i), n && Lu(e, n), t }();
    h()(), r()(), a()(), navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 ? alert("Your browser is outdated, please try again with a modern browser !") : (new Cu).init()
}]);