if (navigator.isCocoonJS) { window.ext.IDTK_APP.makeCall("setWebGLEnabled", true); }
var pc = {
        version: "0.186.4",
        revision: "8423c7c",
        config: {},
        common: {},
        apps: {},
        data: {},
        unpack: function() { console.warn("pc.unpack has been deprecated and will be removed shortly. Please update your code.") },
        makeArray: function(d) {
            var a, b = [],
                c = d.length;
            for (a = 0; a < c; ++a) b.push(d[a]);
            return b
        },
        type: function(d) { if (null === d) return "null"; var a = typeof d; return "undefined" == a || "number" == a || "string" == a || "boolean" == a ? a : _typeLookup[Object.prototype.toString.call(d)] },
        extend: function(d, a) { var b, c; for (b in a) c = a[b], "object" == pc.type(c) ? d[b] = pc.extend({}, c) : "array" == pc.type(c) ? d[b] = pc.extend([], c) : d[b] = c; return d },
        isDefined: function(d) { return void 0 !== d }
    },
    _typeLookup = function() {
        var d = {},
            a, b = "Array Object Function Date RegExp Float32Array".split(" ");
        for (a = 0; a < b.length; ++a) d["[object " + b[a] + "]"] = b[a].toLowerCase();
        return d
    }();
"undefined" !== typeof exports && (exports.pc = pc);
(function() {
    for (var d = 0, a = ["ms", "moz", "webkit", "o"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) window.requestAnimationFrame = window[a[b] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a[b] + "CancelAnimationFrame"] || window[a[b] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(a, b) {
        var f = (new Date).getTime(),
            g = Math.max(0, 16 - (f - d)),
            h = window.setTimeout(function() { a(f + g) }, g);
        d = f + g;
        return h
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) { clearTimeout(a) })
})();
String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function(d) {
        for (var a = 0, b = d.length; a < b; a++)
            if (this[a] !== d[a]) return !1;
        return !0
    }
});
String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function(d) {
        for (var a = 0, b = d.length; a < b; a++)
            if (this[a + this.length - b] !== d[a]) return !1;
        return !0
    }
});
String.prototype.includes || (String.prototype.includes = function(d, a) { "number" !== typeof a && (a = 0); return a + d.length > this.length ? !1 : -1 !== this.indexOf(d, a) });
(function() {
    if ("undefined" !== typeof document) {
        var d = function() {
                var a = document.createEvent("CustomEvent");
                a.initCustomEvent("fullscreenchange", !0, !1, null);
                document.dispatchEvent(a)
            },
            a = function() {
                var a = document.createEvent("CustomEvent");
                a.initCustomEvent("fullscreenerror", !0, !1, null);
                document.dispatchEvent(a)
            };
        document.addEventListener("webkitfullscreenchange", d, !1);
        document.addEventListener("mozfullscreenchange", d, !1);
        document.addEventListener("MSFullscreenChange", d, !1);
        document.addEventListener("webkitfullscreenerror", a, !1);
        document.addEventListener("mozfullscreenerror", a, !1);
        document.addEventListener("MSFullscreenError", a, !1);
        Element.prototype.requestFullscreen = Element.prototype.mozRequestFullScreen ? function() { this.mozRequestFullScreen() } : Element.prototype.requestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen || function() {};
        document.exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
        document.hasOwnProperty("fullscreenElement") || Object.defineProperty(document, "fullscreenElement", { enumerable: !0, configurable: !1, get: function() { return document.webkitCurrentFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement } });
        document.hasOwnProperty("fullscreenEnabled") || Object.defineProperty(document, "fullscreenEnabled", { enumerable: !0, configurable: !1, get: function() { return document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled } })
    }
})();
pc.extend(pc, function() {
    var d = function() {
        this.data = new Float32Array(4);
        3 <= arguments.length ? (this.data[0] = arguments[0], this.data[1] = arguments[1], this.data[2] = arguments[2], this.data[3] = 4 <= arguments.length ? arguments[3] : 1) : (this.data[0] = 0, this.data[1] = 0, this.data[2] = 0, this.data[3] = 1)
    };
    d.prototype = {
        clone: function() { return new pc.Color(this.r, this.g, this.b, this.a) },
        copy: function(a) {
            var b = this.data;
            a = a.data;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            return this
        },
        set: function(a, b, c, e) {
            var f = this.data;
            f[0] = a;
            f[1] = b;
            f[2] = c;
            f[3] = void 0 === e ? 1 : e;
            return this
        },
        fromString: function(a) {
            var b = parseInt(a.replace("#", "0x"));
            7 < a.length ? a = pc.math.intToBytes32(b) : (a = pc.math.intToBytes24(b), a[3] = 255);
            this.set(a[0] / 255, a[1] / 255, a[2] / 255, a[3] / 255);
            return this
        },
        toString: function(a) { var b = "#" + (16777216 + (parseInt(255 * this.r) << 16) + (parseInt(255 * this.g) << 8) + parseInt(255 * this.b)).toString(16).slice(1);!0 === a && (a = parseInt(255 * this.a).toString(16), b = this.a < 16 / 255 ? b + ("0" + a) : b + a); return b }
    };
    Object.defineProperty(d.prototype, "r", { get: function() { return this.data[0] }, set: function(a) { this.data[0] = a } });
    Object.defineProperty(d.prototype, "g", { get: function() { return this.data[1] }, set: function(a) { this.data[1] = a } });
    Object.defineProperty(d.prototype, "b", { get: function() { return this.data[2] }, set: function(a) { this.data[2] = a } });
    Object.defineProperty(d.prototype, "a", { get: function() { return this.data[3] }, set: function(a) { this.data[3] = a } });
    return { Color: d }
}());
pc.guid = function() { return { create: function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(d) { var a = 16 * Math.random() | 0; return ("x" == d ? a : a & 3 | 8).toString(16) }) } } }();
pc.extend(pc, function() {
    var d = function() {
        this._isRunning = !1;
        this._b = this._a = 0
    };
    d.prototype = {
        start: function() {
            this._isRunning = !0;
            this._a = (new Date).getTime()
        },
        stop: function() {
            this._isRunning = !1;
            this._b = (new Date).getTime()
        },
        getMilliseconds: function() { return this._b - this._a }
    };
    return { Timer: d, now: window.performance && window.performance.now && window.performance.timing ? function() { return window.performance.now() } : Date.now }
}());
pc.extend(pc, function() {
    return {
        createURI: function(d) {
            var a = "";
            if ((d.authority || d.scheme) && (d.host || d.hostpath)) throw Error("Can't have 'scheme' or 'authority' and 'host' or 'hostpath' option");
            if (d.host && d.hostpath) throw Error("Can't have 'host' and 'hostpath' option");
            if (d.path && d.hostpath) throw Error("Can't have 'path' and 'hostpath' option");
            d.scheme && (a += d.scheme + ":");
            d.authority && (a += "//" + d.authority);
            d.host && (a += d.host);
            d.path && (a += d.path);
            d.hostpath && (a += d.hostpath);
            d.query && (a += "?" + d.query);
            d.fragment && (a += "#" + d.fragment);
            return a
        },
        URI: function(d) {
            d = d.match(/^(([^:\/?\#]+):)?(\/\/([^\/?\#]*))?([^?\#]*)(\?([^\#]*))?(\#(.*))?/);
            this.scheme = d[2];
            this.authority = d[4];
            this.path = d[5];
            this.query = d[7];
            this.fragment = d[9];
            this.toString = function() {
                var a = "";
                this.scheme && (a += this.scheme + ":");
                this.authority && (a += "//" + this.authority);
                a += this.path;
                this.query && (a += "?" + this.query);
                this.fragment && (a += "#" + this.fragment);
                return a
            };
            this.getQuery = function() {
                var a, b, c = {};
                this.query && (a = decodeURIComponent(this.query).split("&"), a.forEach(function(a, f, g) {
                    b = a.split("=");
                    c[b[0]] = b[1]
                }, this));
                return c
            };
            this.setQuery = function(a) {
                var b = "",
                    c;
                for (c in a) a.hasOwnProperty(c) && ("" !== b && (b += "&"), b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
                this.query = b
            }
        }
    }
}());
pc.extend(pc, function() {
    return {
        log: {
            write: function(d) { console.log(d) },
            open: function(d) { pc.log.write("Powered by PlayCanvas " + pc.version + " " + pc.revision) },
            info: function(d) { console.info("INFO:    " + d) },
            debug: function(d) { console.debug("DEBUG:   " + d) },
            error: function(d) { console.error("ERROR:   " + d) },
            warning: function(d) { console.warn("WARNING: " + d) },
            alert: function(d) {
                pc.log.write("ALERT:   " + d);
                alert(d)
            },
            assert: function(d, a) {!1 === d && (pc.log.write("ASSERT:  " + a), alert("ASSERT failed: " + a)) }
        }
    }
}());
var logINFO = pc.log.info,
    logDEBUG = pc.log.debug,
    logWARNING = pc.log.warning,
    logERROR = pc.log.error,
    logALERT = pc.log.alert,
    logASSERT = pc.log.assert;
Function.prototype.extendsFrom = function(d) {
    var a, b, c = function() {};
    a = this;
    b = function() {
        d.apply(this, arguments);
        a.apply(this, arguments);
        this.constructor = a
    };
    b._super = d.prototype;
    c.prototype = d.prototype;
    b.prototype = new c;
    return b
};
pc.extend(pc, function() {
    return {
        inherits: function(d, a) {
            var b = function() {},
                c = function() {
                    a.apply(this, arguments);
                    d.apply(this, arguments)
                };
            c._super = a.prototype;
            b.prototype = a.prototype;
            c.prototype = new b;
            return c
        }
    }
}());
Function.prototype.bind || (Function.prototype.bind = function(d) {
    if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be fBound is not callable");
    var a = Array.prototype.slice.call(arguments, 1),
        b = this,
        c = function() {},
        e = function() { return b.apply(this instanceof c ? this : d || window, a.concat(Array.prototype.slice.call(arguments))) };
    c.prototype = this.prototype;
    e.prototype = new c;
    return e
});
pc.path = function() {
    return {
        delimiter: "/",
        join: function() {
            var d, a = arguments.length,
                b = arguments[0];
            for (d = 0; d < a - 1; ++d) {
                var c = arguments[d],
                    e = arguments[d + 1];
                if (!pc.isDefined(c) || !pc.isDefined(e)) throw Error("undefined argument to pc.path.join");
                b = e[0] === pc.path.delimiter ? e : c && e && c[c.length - 1] !== pc.path.delimiter && e[0] !== pc.path.delimiter ? b + (pc.path.delimiter + e) : b + e
            }
            return b
        },
        split: function(d) { d = d.split(pc.path.delimiter); var a = d.slice(d.length - 1)[0]; return [d.slice(0, d.length - 1).join(pc.path.delimiter), a] },
        getBasename: function(d) { return pc.path.split(d)[1] },
        getDirectory: function(d) { d = d.split(pc.path.delimiter); return d.slice(0, d.length - 1).join(pc.path.delimiter) },
        getExtension: function(d) { var a = d.split("?")[0].split(".").pop(); return a !== d ? "." + a : "" },
        isRelativePath: function(d) { return "/" !== d.charAt(0) && null === d.match(/:\/\//) },
        extractPath: function(d) {
            var a = ".",
                b = d.split("/");
            if (1 < b.length)
                for (!1 === pc.path.isRelativePath(d) && (a = ""), d = 0; d < b.length - 1; ++d) a += "/" + b[d];
            return a
        }
    }
}();
pc.string = function() {
    return {
        ASCII_LOWERCASE: "abcdefghijklmnopqrstuvwxyz",
        ASCII_UPPERCASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        ASCII_LETTERS: this.ASCII_LOWERCASE + this.ASCII_UPPERCASE,
        format: function(d) {
            var a, b, c = pc.makeArray(arguments);
            c.shift();
            for (a = 0; a < c.length; a++) b = new RegExp("\\{" + a + "\\}", "gi"), d = d.replace(b, c[a]);
            return d
        },
        startsWith: function(d, a) { console.warn("WARNING: startsWith: Function is deprecated. Use String.startsWith instead."); return d.startsWith(a) },
        endsWith: function(d, a) { console.warn("WARNING: endsWith: Function is deprecated. Use String.endsWith instead."); return d.endsWith(a) },
        toBool: function(d, a) { if ("true" === d) return !0; if (a) { if ("false" === d) return !1; throw Error("Not a boolean string"); } return !1 }
    }
}();
pc.extend(pc, function() { return { json: { parse: function(d, a) { return JSON.parse(d, a) }, stringify: function(d, a, b) { return JSON.stringify(d, function(b, e) { this[b] instanceof Float32Array && (e = pc.makeArray(this[b])); return a ? a(b, e) : e }, b) } } } }());
pc.cookie = function() {
    return {
        set: function(d, a, b) {
            b = b || {};
            d = d + "=" + a;
            b.path && (d += ";path=" + b.path);
            b.domain && (d += ";domain=" + b.domain);
            b.path && (d += ";path=" + b.path);
            b.secure && (d += ";secure");
            d = b.lifetime ? d + (";max-age=" + 86400 * b.lifetime) : d + ";max-age=86400";
            document.cookie = d
        },
        get: function(d) {
            var a, b = document.cookie.split(";"),
                c, e = b.length;
            for (c = 0; c < e; c++)
                if (a = b[c].trim(), a.startsWith(d)) return a.split("=")[1]
        },
        remove: function(d, a) {
            a.lifetime = 0;
            pc.cookie.set(d, "", a)
        }
    }
}();
pc.debug = function() {
    var d = null,
        a = null,
        b = null,
        c = null;
    return {
        display: function(e) {
            d || (d = document.createElement("table"), a = document.createElement("tr"), b = document.createElement("td"), c = document.createElement("td"), d.style.cssText = "position:absolute;font-family:sans-serif;font-size:12px;color:#cccccc", d.style.top = "0px", d.style.left = "0px", d.style.border = "thin solid #cccccc", document.body.appendChild(d));
            d.innerHTML = "";
            for (var f in e) {
                var g = a.cloneNode(),
                    h = b.cloneNode(),
                    m = c.cloneNode();
                h.textContent = f;
                m.textContent = e[f];
                g.appendChild(h);
                g.appendChild(m);
                d.appendChild(g)
            }
        }
    }
}();
pc.events = function() {
    var d = {
        attach: function(a) {
            var b = pc.events;
            a.on = b.on;
            a.off = b.off;
            a.fire = b.fire;
            a.once = b.once;
            a.hasEvent = b.hasEvent;
            a.bind = b.on;
            a.unbind = b.off;
            return a
        },
        on: function(a, b, c) {
            if ("string" != pc.type(a)) throw new TypeError("Event name must be a string");
            var e = this._callbacks || (this._callbacks = {});
            (e[a] || (e[a] = [])).push({ callback: b, scope: c || this });
            return this
        },
        off: function(a, b, c) { var e = this._callbacks; if (e) { if (b) { a = e[a]; if (!a) return this; for (e = 0; e < a.length; e++) a[e].callback !== b || c && c !== a[e].scope || (a.splice(e, 1), e--) } else e[a] = []; return this } },
        fire: function(a, b, c, e, f, g, h, d, l) { var p, k, q; if (this._callbacks && this._callbacks[a] && (k = this._callbacks[a].length)) { q = this._callbacks[a].slice(); var r = 0; for (p = 0; p < k; ++p) q[p].callback.call(q[p].scope, b, c, e, f, g, h, d, l), q[p].callback.once ? this._callbacks[a].splice(r, 1) : r++ } return this },
        once: function(a, b, c) {
            b.once = !0;
            this.on(a, b, c)
        },
        hasEvent: function(a) { return void 0 !== this._callbacks && void 0 !== this._callbacks[a] && 0 < this._callbacks[a].length }
    };
    d.bind = d.on;
    d.unbind = d.off;
    return d
}();
pc.extend(pc, function() {
    var d = function(a) {
        this._index = {};
        this._key = a || null
    };
    d.prototype = {
        addItem: function(a) { for (var c = a.tags._list, e = 0; e < c.length; e++) this.add(c[e], a) },
        removeItem: function(a) { for (var c = a.tags._list, e = 0; e < c.length; e++) this.remove(c[e], a) },
        add: function(a, c) { this._index[a] && -1 !== this._index[a].list.indexOf(c) || (this._index[a] || (this._index[a] = { list: [] }, this._key && (this._index[a].keys = {})), this._index[a].list.push(c), this._key && (this._index[a].keys[c[this._key]] = c)) },
        remove: function(a, c) { if (this._index[a] && (!this._key || this._index[a].keys[c[this._key]])) { var e = this._index[a].indexOf(c); - 1 !== e && (this._index[a].list.splice(e, 1), this._key && delete this._index[a].keys[c[this._key]], 0 === this._index[a].list.length && delete this._index[a]) } },
        find: function(a) {
            var c = this,
                e = {},
                f = [],
                g, h, d, l, p, k = function(a, b) { return c._index[a].list.length - c._index[b].list.length };
            for (g = 0; g < a.length; g++) {
                l = a[g];
                if (l instanceof Array) {
                    if (0 === l.length) continue;
                    if (1 === l.length) l = l[0];
                    else {
                        d = !1;
                        for (h = 0; h < l.length; h++)
                            if (!this._index[l[h]]) { d = !0; break } if (d) continue;
                        l = l.slice(0).sort(k);
                        p = l.slice(1);
                        1 === p.length && (p = p[0]);
                        for (h = 0; h < this._index[l[0]].list.length; h++) d = this._index[l[0]].list[h], (this._key ? !e[d[this._key]] : -1 === f.indexOf(d)) && d.tags.has(p) && (this._key && (e[d[this._key]] = !0), f.push(d));
                        continue
                    }
                }
                if (l && "string" === typeof l && this._index[l])
                    for (h = 0; h < this._index[l].list.length; h++) d = this._index[l].list[h], this._key ? e[d[this._key]] || (e[d[this._key]] = !0, f.push(d)) : -1 === f.indexOf(d) && f.push(d)
            }
            return f
        }
    };
    var a = function(a) {
        this._index = {};
        this._list = [];
        this._parent = a;
        pc.events.attach(this)
    };
    a.prototype = {
        add: function() {
            var a = !1,
                c = this._processArguments(arguments, !0);
            if (!c.length) return a;
            for (var e = 0; e < c.length; e++) this._index[c[e]] || (a = !0, this._index[c[e]] = !0, this._list.push(c[e]), this.fire("add", c[e], this._parent));
            a && this.fire("change", this._parent);
            return a
        },
        remove: function() {
            var a = !1;
            if (!this._list.length) return a;
            var c = this._processArguments(arguments, !0);
            if (!c.length) return a;
            for (var e = 0; e < c.length; e++) this._index[c[e]] && (a = !0, delete this._index[c[e]], this._list.splice(this._list.indexOf(c[e]), 1), this.fire("remove", c[e], this._parent));
            a && this.fire("change", this._parent);
            return a
        },
        clear: function() {
            if (this._list.length) {
                var a = this._list.slice(0);
                this._list = [];
                this._index = {};
                for (var c = 0; c < a.length; c++) this.fire("remove", a[c], this._parent);
                this.fire("change", this._parent)
            }
        },
        has: function() {
            if (!this._list.length) return !1;
            var a = this._processArguments(arguments);
            if (!a.length) return !1;
            for (var c = 0; c < a.length; c++)
                if (1 === a[c].length) { if (this._index[a[c][0]]) return !0 } else {
                    for (var e = !0, f = 0; f < a[c].length; f++)
                        if (!this._index[a[c][f]]) { e = !1; break } if (e) return !0
                } return !1
        },
        list: function() { return this._list.slice(0) },
        _processArguments: function(a, c) {
            var e = [],
                f = [];
            if (!a || !a.length) return e;
            for (var g = 0; g < a.length; g++)
                if (a[g] instanceof Array) { c || (f = []); for (var h = 0; h < a[g].length; h++) "string" === typeof a[g][h] && (c ? e.push(a[g][h]) : f.push(a[g][h]));!c && f.length && e.push(f) } else "string" === typeof a[g] && (c ? e.push(a[g]) : e.push([a[g]]));
            return e
        }
    };
    Object.defineProperty(a.prototype, "size", { get: function() { return this._list.length } });
    return { TagsCache: d, Tags: a }
}());
pc.dom = function() { return { getWidth: function(d) { return d.offsetWidth }, getHeight: function(d) { return d.offsetHeight }, setText: function(d, a) { d.textContent ? d.textContent = a : d.innerText && (d.innerText = a) }, getText: function(d) { return d.textContent || d.innerText } } }();
pc.extend(pc, function() {
    var d = function(a, c) {
        this.objects = [];
        this.ctor = a;
        this.name = c.name;
        this.useNew = void 0 === c.useNew || c.useNew;
        if (this.metrics = c.metrics) this.used = this.total = 0
    };
    d.prototype = {
        _construct: function(a, c) {
            function e() { return a.apply(this, c) } e.prototype = a.prototype;
            return new e
        },
        allocate: function() {
            var a;
            this.objects.length ? (a = this.objects.pop(), this.ctor.apply(a, arguments), this.metrics && this.used++) : (a = this.useNew ? this._construct(this.ctor, arguments) : this.ctor.apply(this, arguments), this.metrics && (this.total++, this.used++));
            return a
        },
        free: function(a) {
            this.objects.push(a);
            this.metrics && this.used--;
            if (a.onFree) a.onFree()
        },
        usage: function() { return pc.string.format("{0} - total: {1}, used: {2}", this.name, this.total, this.used) }
    };
    var a = function(a, c) {
        this._constructor = a;
        this._pool = [];
        this._count = 0;
        this._resize(c)
    };
    a.prototype = {
        _resize: function(a) {
            if (a > this._pool.length)
                for (var c = this._pool.length; c < a; c++) this._pool[c] = new this._constructor
        },
        allocate: function() { this._count >= this._pool.length && this._resize(2 * this._pool.length); return this._pool[this._count++] },
        freeAll: function() { this._count = 0 }
    };
    return { AllocatePool: a, ObjectPool: d }
}());
pc.math = {
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI,
    INV_LOG2: 1 / Math.log(2),
    clamp: function(d, a, b) { return d >= b ? b : d <= a ? a : d },
    intToBytes24: function(d) { return [d >> 16 & 255, d >> 8 & 255, d & 255] },
    intToBytes32: function(d) { return [d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255] },
    bytesToInt24: function(d, a, b) { d.length && (b = d[2], a = d[1], d = d[0]); return d << 16 | a << 8 | b },
    bytesToInt32: function(d, a, b, c) { d.length && (c = d[3], b = d[2], a = d[1], d = d[0]); return (d << 24 | a << 16 | b << 8 | c) >>> 32 },
    lerp: function(d, a, b) { return d + (a - d) * pc.math.clamp(b, 0, 1) },
    lerpAngle: function(d, a, b) { 180 < a - d && (a -= 360); - 180 > a - d && (a += 360); return pc.math.lerp(d, a, pc.math.clamp(b, 0, 1)) },
    powerOfTwo: function(d) { return 0 !== d && !(d & d - 1) },
    nextPowerOfTwo: function(d) {
        d--;
        d |= d >> 1;
        d |= d >> 2;
        d |= d >> 4;
        d |= d >> 8;
        d |= d >> 16;
        d++;
        return d
    },
    random: function(d, a) { return Math.random() * (a - d) + d },
    smoothstep: function(d, a, b) {
        if (b <= d) return 0;
        if (b >= a) return 1;
        b = (b - d) / (a - d);
        return b * b * (3 - 2 * b)
    },
    smootherstep: function(d, a, b) {
        if (b <= d) return 0;
        if (b >= a) return 1;
        b = (b - d) / (a - d);
        return b * b * b * (b * (6 * b - 15) + 10)
    }
};
pc.math.intToBytes = pc.math.intToBytes32;
pc.math.bytesToInt = pc.math.bytesToInt32;
Math.log2 || (Math.log2 = function(d) { return Math.log(d) * pc.math.INV_LOG2 });
pc.extend(pc, function() {
    var d = function() {
        this.data = new Float32Array(2);
        2 === arguments.length ? this.data.set(arguments) : (this.data[0] = 0, this.data[1] = 0)
    };
    d.prototype = {
        add: function(a) {
            var b = this.data;
            a = a.data;
            b[0] += a[0];
            b[1] += a[1];
            return this
        },
        add2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] + e[0];
            f[1] = c[1] + e[1];
            return this
        },
        clone: function() { return (new d).copy(this) },
        copy: function(a) {
            var b = this.data;
            a = a.data;
            b[0] = a[0];
            b[1] = a[1];
            return this
        },
        dot: function(a) {
            var b = this.data;
            a = a.data;
            return b[0] * a[0] + b[1] * a[1]
        },
        equals: function(a) {
            var b = this.data;
            a = a.data;
            return b[0] === a[0] && b[1] === a[1]
        },
        length: function() { var a = this.data; return Math.sqrt(a[0] * a[0] + a[1] * a[1]) },
        lengthSq: function() { var a = this.data; return a[0] * a[0] + a[1] * a[1] },
        lerp: function(a, b, c) {
            a = a.data;
            b = b.data;
            var e = this.data;
            e[0] = a[0] + c * (b[0] - a[0]);
            e[1] = a[1] + c * (b[1] - a[1]);
            return this
        },
        mul: function(a) {
            var b = this.data;
            a = a.data;
            b[0] *= a[0];
            b[1] *= a[1];
            return this
        },
        mul2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] * e[0];
            f[1] = c[1] * e[1];
            return this
        },
        normalize: function() { return this.scale(1 / this.length()) },
        scale: function(a) {
            var b = this.data;
            b[0] *= a;
            b[1] *= a;
            return this
        },
        set: function(a, b) {
            var c = this.data;
            c[0] = a;
            c[1] = b;
            return this
        },
        sub: function(a) {
            var b = this.data;
            a = a.data;
            b[0] -= a[0];
            b[1] -= a[1];
            return this
        },
        sub2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] - e[0];
            f[1] = c[1] - e[1];
            return this
        },
        toString: function() { return "[" + this.data[0] + ", " + this.data[1] + "]" }
    };
    Object.defineProperty(d.prototype, "x", { get: function() { return this.data[0] }, set: function(a) { this.data[0] = a } });
    Object.defineProperty(d.prototype, "y", { get: function() { return this.data[1] }, set: function(a) { this.data[1] = a } });
    Object.defineProperty(d, "ONE", { get: function() { var a = new d(1, 1); return function() { return a } }() });
    Object.defineProperty(d, "RIGHT", { get: function() { var a = new d(1, 0); return function() { return a } }() });
    Object.defineProperty(d, "UP", { get: function() { var a = new d(0, 1); return function() { return a } }() });
    Object.defineProperty(d, "ZERO", { get: function() { var a = new d(0, 0); return function() { return a } }() });
    return { Vec2: d }
}());
pc.extend(pc, function() {
    var d = function() {
        this.data = new Float32Array(3);
        3 === arguments.length ? this.data.set(arguments) : (this.data[0] = 0, this.data[1] = 0, this.data[2] = 0)
    };
    d.prototype = {
        add: function(a) {
            var b = this.data;
            a = a.data;
            b[0] += a[0];
            b[1] += a[1];
            b[2] += a[2];
            return this
        },
        add2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] + e[0];
            f[1] = c[1] + e[1];
            f[2] = c[2] + e[2];
            return this
        },
        clone: function() { return (new d).copy(this) },
        copy: function(a) {
            var b = this.data;
            a = a.data;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            return this
        },
        cross: function(a, b) {
            var c, e, f, g, h, d, l;
            c = a.data;
            e = b.data;
            f = this.data;
            g = c[0];
            h = c[1];
            c = c[2];
            d = e[0];
            l = e[1];
            e = e[2];
            f[0] = h * e - l * c;
            f[1] = c * d - e * g;
            f[2] = g * l - d * h;
            return this
        },
        dot: function(a) {
            var b = this.data;
            a = a.data;
            return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
        },
        equals: function(a) {
            var b = this.data;
            a = a.data;
            return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
        },
        length: function() { var a = this.data; return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]) },
        lengthSq: function() { var a = this.data; return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] },
        lerp: function(a, b, c) {
            a = a.data;
            b = b.data;
            var e = this.data;
            e[0] = a[0] + c * (b[0] - a[0]);
            e[1] = a[1] + c * (b[1] - a[1]);
            e[2] = a[2] + c * (b[2] - a[2]);
            return this
        },
        mul: function(a) {
            var b = this.data;
            a = a.data;
            b[0] *= a[0];
            b[1] *= a[1];
            b[2] *= a[2];
            return this
        },
        mul2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] * e[0];
            f[1] = c[1] * e[1];
            f[2] = c[2] * e[2];
            return this
        },
        normalize: function() { return this.scale(1 / this.length()) },
        project: function(a) {
            var b = this.data;
            a = a.data;
            var c = (b[0] * a[0] + b[1] * a[1] + b[2] * a[2]) / (a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
            b[0] = a[0] * c;
            b[1] = a[1] * c;
            b[2] = a[2] * c;
            return this
        },
        scale: function(a) {
            var b = this.data;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            return this
        },
        set: function(a, b, c) {
            var e = this.data;
            e[0] = a;
            e[1] = b;
            e[2] = c;
            return this
        },
        sub: function(a) {
            var b = this.data;
            a = a.data;
            b[0] -= a[0];
            b[1] -= a[1];
            b[2] -= a[2];
            return this
        },
        sub2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] - e[0];
            f[1] = c[1] - e[1];
            f[2] = c[2] - e[2];
            return this
        },
        toString: function() { return "[" + this.data[0] + ", " + this.data[1] + ", " + this.data[2] + "]" }
    };
    Object.defineProperty(d.prototype, "x", { get: function() { return this.data[0] }, set: function(a) { this.data[0] = a } });
    Object.defineProperty(d.prototype, "y", { get: function() { return this.data[1] }, set: function(a) { this.data[1] = a } });
    Object.defineProperty(d.prototype, "z", { get: function() { return this.data[2] }, set: function(a) { this.data[2] = a } });
    Object.defineProperty(d, "BACK", { get: function() { var a = new d(0, 0, 1); return function() { return a } }() });
    Object.defineProperty(d, "DOWN", { get: function() { var a = new d(0, -1, 0); return function() { return a } }() });
    Object.defineProperty(d, "FORWARD", { get: function() { var a = new d(0, 0, -1); return function() { return a } }() });
    Object.defineProperty(d, "LEFT", { get: function() { var a = new d(-1, 0, 0); return function() { return a } }() });
    Object.defineProperty(d, "ONE", { get: function() { var a = new d(1, 1, 1); return function() { return a } }() });
    Object.defineProperty(d, "RIGHT", { get: function() { var a = new d(1, 0, 0); return function() { return a } }() });
    Object.defineProperty(d, "UP", { get: function() { var a = new d(0, 1, 0); return function() { return a } }() });
    Object.defineProperty(d, "ZERO", { get: function() { var a = new d(0, 0, 0); return function() { return a } }() });
    return { Vec3: d }
}());
pc.extend(pc, function() {
    var d = function() {
        this.data = new Float32Array(4);
        4 === arguments.length ? this.data.set(arguments) : (this.data[0] = 0, this.data[1] = 0, this.data[2] = 0, this.data[3] = 0)
    };
    d.prototype = {
        add: function(a) {
            var b = this.data;
            a = a.data;
            b[0] += a[0];
            b[1] += a[1];
            b[2] += a[2];
            b[3] += a[3];
            return this
        },
        add2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] + e[0];
            f[1] = c[1] + e[1];
            f[2] = c[2] + e[2];
            f[3] = c[3] + e[3];
            return this
        },
        clone: function() { return (new d).copy(this) },
        copy: function(a) {
            var b = this.data;
            a = a.data;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            return this
        },
        dot: function(a) {
            var b = this.data;
            a = a.data;
            return b[0] * a[0] + b[1] * a[1] + b[2] * a[2] + b[3] * a[3]
        },
        equals: function(a) {
            var b = this.data;
            a = a.data;
            return b[0] === a[0] && b[1] === a[1] && b[2] === a[2] && b[3] === a[3]
        },
        length: function() { var a = this.data; return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]) },
        lengthSq: function() { var a = this.data; return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] },
        lerp: function(a, b, c) {
            a = a.data;
            b = b.data;
            var e = this.data;
            e[0] = a[0] + c * (b[0] - a[0]);
            e[1] = a[1] + c * (b[1] - a[1]);
            e[2] = a[2] + c * (b[2] - a[2]);
            e[3] = a[3] + c * (b[3] - a[3]);
            return this
        },
        mul: function(a) {
            var b = this.data;
            a = a.data;
            b[0] *= a[0];
            b[1] *= a[1];
            b[2] *= a[2];
            b[3] *= a[3];
            return this
        },
        mul2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] * e[0];
            f[1] = c[1] * e[1];
            f[2] = c[2] * e[2];
            f[3] = c[3] * e[3];
            return this
        },
        normalize: function() { return this.scale(1 / this.length()) },
        scale: function(a) {
            var b = this.data;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            b[3] *= a;
            return this
        },
        set: function(a, b, c, e) {
            var f = this.data;
            f[0] = a;
            f[1] = b;
            f[2] = c;
            f[3] = e;
            return this
        },
        sub: function(a) {
            var b = this.data;
            a = a.data;
            b[0] -= a[0];
            b[1] -= a[1];
            b[2] -= a[2];
            b[3] -= a[3];
            return this
        },
        sub2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] - e[0];
            f[1] = c[1] - e[1];
            f[2] = c[2] - e[2];
            f[3] = c[3] - e[3];
            return this
        },
        toString: function() { return "[" + this.data[0] + ", " + this.data[1] + ", " + this.data[2] + ", " + this.data[3] + "]" }
    };
    Object.defineProperty(d.prototype, "x", { get: function() { return this.data[0] }, set: function(a) { this.data[0] = a } });
    Object.defineProperty(d.prototype, "y", { get: function() { return this.data[1] }, set: function(a) { this.data[1] = a } });
    Object.defineProperty(d.prototype, "z", { get: function() { return this.data[2] }, set: function(a) { this.data[2] = a } });
    Object.defineProperty(d.prototype, "w", { get: function() { return this.data[3] }, set: function(a) { this.data[3] = a } });
    Object.defineProperty(d, "ONE", { get: function() { var a = new d(1, 1, 1, 1); return function() { return a } }() });
    Object.defineProperty(d, "ZERO", { get: function() { var a = new d(0, 0, 0, 0); return function() { return a } }() });
    return { Vec4: d }
}());
pc.extend(pc, function() {
    var d = function() {
        this.data = new Float32Array(9);
        9 === arguments.length ? this.data.set(arguments) : this.setIdentity()
    };
    d.prototype = {
        clone: function() { return (new pc.Mat3).copy(this) },
        copy: function(a) {
            a = a.data;
            var b = this.data;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            return this
        },
        equals: function(a) {
            var b = this.data;
            a = a.data;
            return b[0] === a[0] && b[1] === a[1] && b[2] === a[2] && b[3] === a[3] && b[4] === a[4] && b[5] === a[5] && b[6] === a[6] && b[7] === a[7] && b[8] === a[8]
        },
        isIdentity: function() { var a = this.data; return 1 === a[0] && 0 === a[1] && 0 === a[2] && 0 === a[3] && 1 === a[4] && 0 === a[5] && 0 === a[6] && 0 === a[7] && 1 === a[8] },
        setIdentity: function() {
            var a = this.data;
            a[0] = 1;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 1;
            a[5] = 0;
            a[6] = 0;
            a[7] = 0;
            a[8] = 1;
            return this
        },
        toString: function() { for (var a = "[", b = 0; 9 > b; b++) a += this.data[b], a += 9 !== b ? ", " : ""; return a + "]" },
        transpose: function() {
            var a = this.data,
                b;
            b = a[1];
            a[1] = a[3];
            a[3] = b;
            b = a[2];
            a[2] = a[6];
            a[6] = b;
            b = a[5];
            a[5] = a[7];
            a[7] = b;
            return this
        }
    };
    Object.defineProperty(d, "IDENTITY", { get: function() { var a = new d; return function() { return a } }() });
    Object.defineProperty(d, "ZERO", { get: function() { var a = new d(0, 0, 0, 0, 0, 0, 0, 0, 0); return function() { return a } }() });
    return { Mat3: d }
}());
pc.extend(pc, function() {
    var d = function() {
        this.data = new Float32Array(16);
        16 === arguments.length ? this.data.set(arguments) : this.setIdentity()
    };
    d.prototype = {
        add2: function(a, b) {
            var c = a.data,
                e = b.data,
                f = this.data;
            f[0] = c[0] + e[0];
            f[1] = c[1] + e[1];
            f[2] = c[2] + e[2];
            f[3] = c[3] + e[3];
            f[4] = c[4] + e[4];
            f[5] = c[5] + e[5];
            f[6] = c[6] + e[6];
            f[7] = c[7] + e[7];
            f[8] = c[8] + e[8];
            f[9] = c[9] + e[9];
            f[10] = c[10] + e[10];
            f[11] = c[11] + e[11];
            f[12] = c[12] + e[12];
            f[13] = c[13] + e[13];
            f[14] = c[14] + e[14];
            f[15] = c[15] + e[15];
            return this
        },
        add: function(a) { return this.add2(this, a) },
        clone: function() { return (new pc.Mat4).copy(this) },
        copy: function(a) {
            a = a.data;
            var b = this.data;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            b[9] = a[9];
            b[10] = a[10];
            b[11] = a[11];
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            b[15] = a[15];
            return this
        },
        equals: function(a) {
            var b = this.data;
            a = a.data;
            return b[0] === a[0] && b[1] === a[1] && b[2] === a[2] && b[3] === a[3] && b[4] === a[4] && b[5] === a[5] && b[6] === a[6] && b[7] === a[7] && b[8] === a[8] && b[9] === a[9] && b[10] === a[10] && b[11] === a[11] && b[12] === a[12] && b[13] === a[13] && b[14] === a[14] && b[15] === a[15]
        },
        isIdentity: function() { var a = this.data; return 1 === a[0] && 0 === a[1] && 0 === a[2] && 0 === a[3] && 0 === a[4] && 1 === a[5] && 0 === a[6] && 0 === a[7] && 0 === a[8] && 0 === a[9] && 1 === a[10] && 0 === a[11] && 0 === a[12] && 0 === a[13] && 0 === a[14] && 1 === a[15] },
        mul2: function(a, b) {
            var c, e, f, g, h, d, l, p, k, q, r, n, t, w, y, x, v, z, u, A;
            x = a.data;
            var B = b.data,
                C = this.data;
            c = x[0];
            e = x[1];
            f = x[2];
            g = x[3];
            h = x[4];
            d = x[5];
            l = x[6];
            p = x[7];
            k = x[8];
            q = x[9];
            r = x[10];
            n = x[11];
            t = x[12];
            w = x[13];
            y = x[14];
            x = x[15];
            v = B[0];
            z = B[1];
            u = B[2];
            A = B[3];
            C[0] = c * v + h * z + k * u + t * A;
            C[1] = e * v + d * z + q * u + w * A;
            C[2] = f * v + l * z + r * u + y * A;
            C[3] = g * v + p * z + n * u + x * A;
            v = B[4];
            z = B[5];
            u = B[6];
            A = B[7];
            C[4] = c * v + h * z + k * u + t * A;
            C[5] = e * v + d * z + q * u + w * A;
            C[6] = f * v + l * z + r * u + y * A;
            C[7] = g * v + p * z + n * u + x * A;
            v = B[8];
            z = B[9];
            u = B[10];
            A = B[11];
            C[8] = c * v + h * z + k * u + t * A;
            C[9] = e * v + d * z + q * u + w * A;
            C[10] = f * v + l * z + r * u + y * A;
            C[11] = g * v + p * z + n * u + x * A;
            v = B[12];
            z = B[13];
            u = B[14];
            A = B[15];
            C[12] = c * v + h * z + k * u + t * A;
            C[13] = e * v + d * z + q * u + w * A;
            C[14] = f * v + l * z + r * u + y * A;
            C[15] = g * v + p * z + n * u + x * A;
            return this
        },
        mul: function(a) { return this.mul2(this, a) },
        transformPoint: function(a, b) {
            var c = this.data,
                e = a.data;
            b = void 0 === b ? new pc.Vec3 : b;
            return b.set(e[0] * c[0] + e[1] * c[4] + e[2] * c[8] + c[12], e[0] * c[1] + e[1] * c[5] + e[2] * c[9] + c[13], e[0] * c[2] + e[1] * c[6] + e[2] * c[10] + c[14])
        },
        transformVector: function(a, b) {
            var c = this.data,
                e = a.data;
            b = void 0 === b ? new pc.Vec3 : b;
            return b.set(e[0] * c[0] + e[1] * c[4] + e[2] * c[8], e[0] * c[1] + e[1] * c[5] + e[2] * c[9], e[0] * c[2] + e[1] * c[6] + e[2] * c[10])
        },
        setLookAt: function() {
            var a, b, c;
            a = new pc.Vec3;
            b = new pc.Vec3;
            c = new pc.Vec3;
            return function(e, f, g) {
                c.sub2(e, f).normalize();
                b.copy(g).normalize();
                a.cross(b, c).normalize();
                b.cross(c, a);
                f = this.data;
                f[0] = a.x;
                f[1] = a.y;
                f[2] = a.z;
                f[3] = 0;
                f[4] = b.x;
                f[5] = b.y;
                f[6] = b.z;
                f[7] = 0;
                f[8] = c.x;
                f[9] = c.y;
                f[10] = c.z;
                f[11] = 0;
                f[12] = e.x;
                f[13] = e.y;
                f[14] = e.z;
                f[15] = 1;
                return this
            }
        }(),
        setFrustum: function(a, b, c, e, f, g) {
            var h, d, l, p, k;
            h = 2 * f;
            d = b - a;
            l = e - c;
            p = g - f;
            k = this.data;
            k[0] = h / d;
            k[1] = 0;
            k[2] = 0;
            k[3] = 0;
            k[4] = 0;
            k[5] = h / l;
            k[6] = 0;
            k[7] = 0;
            k[8] = (b + a) / d;
            k[9] = (e + c) / l;
            k[10] = (-g - f) / p;
            k[11] = -1;
            k[12] = 0;
            k[13] = 0;
            k[14] = -h * g / p;
            k[15] = 0;
            return this
        },
        setPerspective: function(a, b, c, e, f) { f ? (a = c * Math.tan(a * Math.PI / 360), f = a / b) : (f = c * Math.tan(a * Math.PI / 360), a = f * b); return this.setFrustum(-a, a, -f, f, c, e) },
        setOrtho: function(a, b, c, e, f, g) {
            var h = this.data;
            h[0] = 2 / (b - a);
            h[1] = 0;
            h[2] = 0;
            h[3] = 0;
            h[4] = 0;
            h[5] = 2 / (e - c);
            h[6] = 0;
            h[7] = 0;
            h[8] = 0;
            h[9] = 0;
            h[10] = -2 / (g - f);
            h[11] = 0;
            h[12] = -(b + a) / (b - a);
            h[13] = -(e + c) / (e - c);
            h[14] = -(g + f) / (g - f);
            h[15] = 1;
            return this
        },
        setFromAxisAngle: function(a, b) {
            var c, e, f, g, h, d, l, p, k;
            b *= pc.math.DEG_TO_RAD;
            c = a.x;
            e = a.y;
            f = a.z;
            g = Math.cos(b);
            h = Math.sin(b);
            d = 1 - g;
            l = d * c;
            p = d * e;
            k = this.data;
            k[0] = l * c + g;
            k[1] = l * e + h * f;
            k[2] = l * f - h * e;
            k[3] = 0;
            k[4] = l * e - h * f;
            k[5] = p * e + g;
            k[6] = p * f + h * c;
            k[7] = 0;
            k[8] = l * f + h * e;
            k[9] = p * f - c * h;
            k[10] = d * f * f + g;
            k[11] = 0;
            k[12] = 0;
            k[13] = 0;
            k[14] = 0;
            k[15] = 1;
            return this
        },
        setTranslate: function(a, b, c) {
            var e = this.data;
            e[0] = 1;
            e[1] = 0;
            e[2] = 0;
            e[3] = 0;
            e[4] = 0;
            e[5] = 1;
            e[6] = 0;
            e[7] = 0;
            e[8] = 0;
            e[9] = 0;
            e[10] = 1;
            e[11] = 0;
            e[12] = a;
            e[13] = b;
            e[14] = c;
            e[15] = 1;
            return this
        },
        setScale: function(a, b, c) {
            var e = this.data;
            e[0] = a;
            e[1] = 0;
            e[2] = 0;
            e[3] = 0;
            e[4] = 0;
            e[5] = b;
            e[6] = 0;
            e[7] = 0;
            e[8] = 0;
            e[9] = 0;
            e[10] = c;
            e[11] = 0;
            e[12] = 0;
            e[13] = 0;
            e[14] = 0;
            e[15] = 1;
            return this
        },
        invert: function() {
            var a, b, c, e, f, g, h, d, l, p, k, q, r, n, t, w, y, x, v, z, u, A, B, C, E, O, K, M, H, D;
            D = this.data;
            a = D[0];
            b = D[1];
            c = D[2];
            e = D[3];
            f = D[4];
            g = D[5];
            h = D[6];
            d = D[7];
            l = D[8];
            p = D[9];
            k = D[10];
            q = D[11];
            r = D[12];
            n = D[13];
            t = D[14];
            w = D[15];
            y = a * g - b * f;
            x = a * h - c * f;
            v = a * d - e * f;
            z = b * h - c * g;
            u = b * d - e * g;
            A = c * d - e * h;
            B = l * n - p * r;
            C = l * t - k * r;
            E = l * w - q * r;
            O = p * t - k * n;
            K = p * w - q * n;
            M = k * w - q * t;
            H = 1 / (y * M - x * K + v * O + z * E - u * C + A * B);
            D[0] = (g * M - h * K + d * O) * H;
            D[1] = (-b * M + c * K - e * O) * H;
            D[2] = (n * A - t * u + w * z) * H;
            D[3] = (-p * A + k * u - q * z) * H;
            D[4] = (-f * M + h * E - d * C) * H;
            D[5] = (a * M - c * E + e * C) * H;
            D[6] = (-r * A + t * v - w * x) * H;
            D[7] = (l * A - k * v + q * x) * H;
            D[8] = (f * K - g * E + d * B) * H;
            D[9] = (-a * K + b * E - e * B) * H;
            D[10] = (r * u - n * v + w * y) * H;
            D[11] = (-l * u + p * v - q * y) * H;
            D[12] = (-f * O + g * C - h * B) * H;
            D[13] = (a * O - b * C + c * B) * H;
            D[14] = (-r * z + n * x - t * y) * H;
            D[15] = (l * z - p * x + k * y) * H;
            return this
        },
        setIdentity: function() {
            var a = this.data;
            a[0] = 1;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = 1;
            a[6] = 0;
            a[7] = 0;
            a[8] = 0;
            a[9] = 0;
            a[10] = 1;
            a[11] = 0;
            a[12] = 0;
            a[13] = 0;
            a[14] = 0;
            a[15] = 1;
            return this
        },
        setTRS: function(a, b, c) {
            var e, f, g, h, d, l, p, k, q, r, n, t, w;
            e = a.x;
            f = a.y;
            a = a.z;
            g = b.x;
            h = b.y;
            d = b.z;
            l = b.w;
            b = c.x;
            p = c.y;
            c = c.z;
            k = g + g;
            q = h + h;
            r = d + d;
            n = g * k;
            t = g * q;
            g *= r;
            w = h * q;
            h *= r;
            d *= r;
            k *= l;
            q *= l;
            l *= r;
            r = this.data;
            r[0] = (1 - (w + d)) * b;
            r[1] = (t + l) * b;
            r[2] = (g - q) * b;
            r[3] = 0;
            r[4] = (t - l) * p;
            r[5] = (1 - (n + d)) * p;
            r[6] = (h + k) * p;
            r[7] = 0;
            r[8] = (g + q) * c;
            r[9] = (h - k) * c;
            r[10] = (1 - (n + w)) * c;
            r[11] = 0;
            r[12] = e;
            r[13] = f;
            r[14] = a;
            r[15] = 1;
            return this
        },
        transpose: function() {
            var a, b = this.data;
            a = b[1];
            b[1] = b[4];
            b[4] = a;
            a = b[2];
            b[2] = b[8];
            b[8] = a;
            a = b[3];
            b[3] = b[12];
            b[12] = a;
            a = b[6];
            b[6] = b[9];
            b[9] = a;
            a = b[7];
            b[7] = b[13];
            b[13] = a;
            a = b[11];
            b[11] = b[14];
            b[14] = a;
            return this
        },
        invertTo3x3: function(a) {
            var b, c, e, f, g, h, d, l, p, k;
            b = this.data;
            a = a.data;
            k = b[0];
            var q = b[1],
                r = b[2];
            p = b[4];
            var n = b[5];
            h = b[6];
            l = b[8];
            var t = b[9];
            g = b[10];
            b = g * n - h * t;
            c = -g * q + r * t;
            e = h * q - r * n;
            f = -g * p + h * l;
            g = g * k - r * l;
            h = -h * k + r * p;
            d = t * p - n * l;
            l = -t * k + q * l;
            p = n * k - q * p;
            k = k * b + q * f + r * d;
            if (0 === k) return console.warn("pc.Mat4#invertTo3x3: Matrix not invertible"), this;
            k = 1 / k;
            a[0] = k * b;
            a[1] = k * c;
            a[2] = k * e;
            a[3] = k * f;
            a[4] = k * g;
            a[5] = k * h;
            a[6] = k * d;
            a[7] = k * l;
            a[8] = k * p;
            return this
        },
        getTranslation: function(a) { a = void 0 === a ? new pc.Vec3 : a; return a.set(this.data[12], this.data[13], this.data[14]) },
        getX: function(a) { a = void 0 === a ? new pc.Vec3 : a; return a.set(this.data[0], this.data[1], this.data[2]) },
        getY: function(a) { a = void 0 === a ? new pc.Vec3 : a; return a.set(this.data[4], this.data[5], this.data[6]) },
        getZ: function(a) { a = void 0 === a ? new pc.Vec3 : a; return a.set(this.data[8], this.data[9], this.data[10]) },
        getScale: function() {
            var a, b, c;
            a = new pc.Vec3;
            b = new pc.Vec3;
            c = new pc.Vec3;
            return function(e) {
                e = void 0 === e ? new pc.Vec3 : e;
                this.getX(a);
                this.getY(b);
                this.getZ(c);
                e.set(a.length(), b.length(), c.length());
                return e
            }
        }(),
        setFromEulerAngles: function(a, b, c) {
            var e, f, g, h;
            a *= pc.math.DEG_TO_RAD;
            b *= pc.math.DEG_TO_RAD;
            c *= pc.math.DEG_TO_RAD;
            e = Math.sin(-a);
            a = Math.cos(-a);
            f = Math.sin(-b);
            b = Math.cos(-b);
            g = Math.sin(-c);
            c = Math.cos(-c);
            h = this.data;
            h[0] = b * c;
            h[1] = -b * g;
            h[2] = f;
            h[3] = 0;
            h[4] = a * g + c * e * f;
            h[5] = a * c - e * f * g;
            h[6] = -b * e;
            h[7] = 0;
            h[8] = e * g - a * c * f;
            h[9] = c * e + a * f * g;
            h[10] = a * b;
            h[11] = 0;
            h[12] = 0;
            h[13] = 0;
            h[14] = 0;
            h[15] = 1;
            return this
        },
        getEulerAngles: function() {
            var a = new pc.Vec3;
            return function(b) {
                var c, e, f, g, h, d;
                b = void 0 === b ? new pc.Vec3 : b;
                this.getScale(a);
                f = a.x;
                c = a.y;
                g = a.z;
                h = this.data;
                e = Math.asin(-h[2] / f);
                d = .5 * Math.PI;
                e < d ? e > -d ? (c = Math.atan2(h[6] / c, h[10] / g), f = Math.atan2(h[1] / f, h[0] / f)) : (f = 0, c = -Math.atan2(h[4] / c, h[5] / c)) : (f = 0, c = Math.atan2(h[4] / c, h[5] / c));
                return b.set(c, e, f).scale(pc.math.RAD_TO_DEG)
            }
        }(),
        toString: function() {
            var a, b;
            b = "[";
            for (a = 0; 16 > a; a += 1) b += this.data[a], b += 15 !== a ? ", " : "";
            return b + "]"
        }
    };
    Object.defineProperty(d, "IDENTITY", { get: function() { var a = new d; return function() { return a } }() });
    Object.defineProperty(d, "ZERO", { get: function() { var a = new d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); return function() { return a } }() });
    return { Mat4: d }
}());
pc.extend(pc, function() {
    var d = function(a, b, c, e) {
        this.x = void 0 === a ? 0 : a;
        this.y = void 0 === b ? 0 : b;
        this.z = void 0 === c ? 0 : c;
        this.w = void 0 === e ? 1 : e
    };
    d.prototype = {
        clone: function() { return new pc.Quat(this.x, this.y, this.z, this.w) },
        conjugate: function() {
            this.x *= -1;
            this.y *= -1;
            this.z *= -1;
            return this
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.w = a.w;
            return this
        },
        equals: function(a) { return this.x === a.x && this.y === a.y && this.z === a.z && this.w === a.w },
        getEulerAngles: function(a) {
            var b, c, e, f, g, h;
            a = void 0 === a ? new pc.Vec3 : a;
            e = this.x;
            f = this.y;
            g = this.z;
            h = this.w;
            c = 2 * (h * f - e * g); - .99999 >= c ? (b = 2 * Math.atan2(e, h), c = -Math.PI / 2, e = 0) : .99999 <= c ? (b = 2 * Math.atan2(e, h), c = Math.PI / 2, e = 0) : (b = Math.atan2(2 * (h * e + f * g), 1 - 2 * (e * e + f * f)), c = Math.asin(c), e = Math.atan2(2 * (h * g + e * f), 1 - 2 * (f * f + g * g)));
            return a.set(b, c, e).scale(pc.math.RAD_TO_DEG)
        },
        invert: function() { return this.conjugate().normalize() },
        length: function() {
            var a, b, c, e;
            a = this.x;
            b = this.y;
            c = this.z;
            e = this.w;
            return Math.sqrt(a * a + b * b + c * c + e * e)
        },
        lengthSq: function() { return NaN },
        mul: function(a) {
            var b, c, e, f, g, h, d;
            b = this.x;
            c = this.y;
            e = this.z;
            f = this.w;
            g = a.x;
            h = a.y;
            d = a.z;
            a = a.w;
            this.x = f * g + b * a + c * d - e * h;
            this.y = f * h + c * a + e * g - b * d;
            this.z = f * d + e * a + b * h - c * g;
            this.w = f * a - b * g - c * h - e * d;
            return this
        },
        mul2: function(a, b) {
            var c, e, f, g, h, d, l, p;
            c = a.x;
            e = a.y;
            f = a.z;
            g = a.w;
            h = b.x;
            d = b.y;
            l = b.z;
            p = b.w;
            this.x = g * h + c * p + e * l - f * d;
            this.y = g * d + e * p + f * h - c * l;
            this.z = g * l + f * p + c * d - e * h;
            this.w = g * p - c * h - e * d - f * l;
            return this
        },
        normalize: function() {
            var a = this.length();
            0 === a ? (this.x = this.y = this.z = 0, this.w = 1) : (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a);
            return this
        },
        set: function(a, b, c, e) {
            this.x = a;
            this.y = b;
            this.z = c;
            this.w = e;
            return this
        },
        setFromAxisAngle: function(a, b) {
            var c, e;
            b *= .5 * pc.math.DEG_TO_RAD;
            c = Math.sin(b);
            e = Math.cos(b);
            this.x = c * a.x;
            this.y = c * a.y;
            this.z = c * a.z;
            this.w = e;
            return this
        },
        setFromEulerAngles: function(a, b, c) {
            var e, f, g;
            e = .5 * pc.math.DEG_TO_RAD;
            a *= e;
            b *= e;
            c *= e;
            e = Math.sin(a);
            a = Math.cos(a);
            f = Math.sin(b);
            b = Math.cos(b);
            g = Math.sin(c);
            c = Math.cos(c);
            this.x = e * b * c - a * f * g;
            this.y = a * f * c + e * b * g;
            this.z = a * b * g - e * f * c;
            this.w = a * b * c + e * f * g;
            return this
        },
        setFromMat4: function(a) {
            var b, c, e, f, g, h, d, l, p, k, q;
            a = a.data;
            b = a[0];
            c = a[1];
            e = a[2];
            f = a[4];
            g = a[5];
            h = a[6];
            d = a[8];
            l = a[9];
            a = a[10];
            p = 1 / Math.sqrt(b * b + c * c + e * e);
            k = 1 / Math.sqrt(f * f + g * g + h * h);
            q = 1 / Math.sqrt(d * d + l * l + a * a);
            b *= p;
            c *= p;
            e *= p;
            f *= k;
            g *= k;
            h *= k;
            d *= q;
            l *= q;
            a *= q;
            p = b + g + a;
            0 <= p ? (b = Math.sqrt(p + 1), this.w = .5 * b, b = .5 / b, this.x = (h - l) * b, this.y = (d - e) * b, this.z = (c - f) * b) : b > g ? b > a ? (b = Math.sqrt(b - (g + a) + 1), this.x = .5 * b, b = .5 / b, this.w = (h - l) * b, this.y = (c + f) * b, this.z = (e + d) * b) : (b = Math.sqrt(a - (b + g) + 1), this.z = .5 * b, b = .5 / b, this.w = (c - f) * b, this.x = (d + e) * b, this.y = (l + h) * b) : g > a ? (b = Math.sqrt(g - (a + b) + 1), this.y = .5 * b, b = .5 / b, this.w = (d - e) * b, this.z = (h + l) * b, this.x = (f + c) * b) : (b = Math.sqrt(a - (b + g) + 1), this.z = .5 * b, b = .5 / b, this.w = (c - f) * b, this.x = (d + e) * b, this.y = (l + h) * b);
            return this
        },
        slerp: function(a, b, c) {
            var e, f, g, h, d, l;
            e = a.x;
            f = a.y;
            g = a.z;
            a = a.w;
            h = b.x;
            d = b.y;
            l = b.z;
            b = b.w;
            var p = a * b + e * h + f * d + g * l;
            0 > p && (b = -b, h = -h, d = -d, l = -l, p = -p);
            if (1 <= Math.abs(p)) return this.w = a, this.x = e, this.y = f, this.z = g, this;
            var k = Math.acos(p),
                q = Math.sqrt(1 - p * p);
            if (.001 > Math.abs(q)) return this.w = .5 * a + .5 * b, this.x = .5 * e + .5 * h, this.y = .5 * f + .5 * d, this.z = .5 * g + .5 * l, this;
            p = Math.sin((1 - c) * k) / q;
            c = Math.sin(c * k) / q;
            this.w = a * p + b * c;
            this.x = e * p + h * c;
            this.y = f * p + d * c;
            this.z = g * p + l * c;
            return this
        },
        transformVector: function(a, b) {
            void 0 === b && (b = new pc.Vec3);
            var c = a.x,
                e = a.y,
                f = a.z,
                g = this.x,
                h = this.y,
                d = this.z,
                l = this.w,
                p = l * c + h * f - d * e,
                k = l * e + d * c - g * f,
                q = l * f + g * e - h * c,
                c = -g * c - h * e - d * f;
            b.x = p * l + c * -g + k * -d - q * -h;
            b.y = k * l + c * -h + q * -g - p * -d;
            b.z = q * l + c * -d + p * -h - k * -g;
            return b
        },
        toString: function() { return "[" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + "]" }
    };
    Object.defineProperty(d, "IDENTITY", { get: function() { var a = new d; return function() { return a } }() });
    Object.defineProperty(d, "ZERO", { get: function() { var a = new d(0, 0, 0, 0); return function() { return a } }() });
    return { Quat: d }
}());
pc.extend(pc, function() {
    var d = function(a) {
        this.keys = [];
        this.type = 1;
        this.tension = .5;
        if (a)
            for (var b = 0; b < a.length - 1; b += 2) this.keys.push([a[b], a[b + 1]]);
        this.sort()
    };
    d.prototype = {
        add: function(a, b) {
            for (var c = this.keys, e = c.length, f = 0; f < e && !(c[f][0] > a); f++);
            c = [a, b];
            this.keys.splice(f, 0, c);
            return c
        },
        get: function(a) { return this.keys[a] },
        sort: function() { this.keys.sort(function(a, b) { return a[0] - b[0] }) },
        value: function(a) {
            var b = this.keys;
            if (!b.length) return 0;
            if (a < b[0][0]) return b[0][1];
            if (a > b[b.length - 1][0]) return b[b.length -
                1][1];
            for (var c = 0, e = b.length ? b[0][1] : 0, f = 1, g = 0, h = 0, d = b.length; h < d; h++) {
                if (b[h][0] === a) return b[h][1];
                g = b[h][1];
                if (a < b[h][0]) { f = b[h][0]; break } c = b[h][0];
                e = b[h][1]
            }
            d = f - c;
            a = 0 === d ? 0 : (a - c) / d;
            if (1 === this.type) a *= a * (3 - 2 * a);
            else if (2 === this.type || 3 === this.type) {
                var d = e + (e - g),
                    l = g + (g - e),
                    p = f = c = f - c;
                0 < h && --h;
                0 < h && (d = b[h - 1][1], f = b[h][0] - b[h - 1][0]);
                b.length > h + 1 && (c = b[h + 1][0] - b[h][0]);
                b.length > h + 2 && (p = b[h + 2][0] - b[h + 1][0], l = b[h + 2][1]);
                d = e + (d - e) * c / f;
                l = g + (l - g) * c / p;
                return 2 === this.type ? this._interpolateCatmullRom(d, e, g, l, a) : this._interpolateCardinal(d, e, g, l, a, this.tension)
            }
            return pc.math.lerp(e, g, a)
        },
        _interpolateHermite: function(a, b, c, e, f) {
            var g = f * f,
                h = f * f * f;
            return a * (2 * h - 3 * g + 1) + b * (-2 * h + 3 * g) + c * (h - 2 * g + f) + e * (h - g)
        },
        _interpolateCardinal: function(a, b, c, e, f, g) { return this._interpolateHermite(b, c, g * (c - a), g * (e - b), f) },
        _interpolateCatmullRom: function(a, b, c, e, f) { return this._interpolateCardinal(a, b, c, e, f, .5) },
        closest: function(a) {
            for (var b = this.keys, c = b.length, e = 2, f = null, g = 0; g < c; g++) {
                var h = Math.abs(a - b[g][0]);
                if (e >= h) e = h, f = b[g];
                else break
            }
            return f
        },
        clone: function() {
            var a = new pc.Curve;
            a.keys = pc.extend(a.keys, this.keys);
            a.type = this.type;
            return a
        },
        quantize: function(a) {
            a = Math.max(a, 2);
            for (var b = new Float32Array(a), c = 1 / (a - 1), e = 0; e < a; e++) {
                var f = this.value(c * e);
                b[e] = f
            }
            return b
        }
    };
    Object.defineProperty(d.prototype, "length", { get: function() { return this.keys.length } });
    return { Curve: d, CURVE_LINEAR: 0, CURVE_SMOOTHSTEP: 1, CURVE_CATMULL: 2, CURVE_CARDINAL: 3 }
}());
pc.extend(pc, function() {
    var d = function() {
        var a;
        this.curves = [];
        this._type = pc.CURVE_SMOOTHSTEP;
        if (1 < arguments.length)
            for (a = 0; a < arguments.length; a++) this.curves.push(new pc.Curve(arguments[a]));
        else if (0 === arguments.length) this.curves.push(new pc.Curve);
        else {
            var b = arguments[0];
            if ("number" === pc.type(b))
                for (a = 0; a < b; a++) this.curves.push(new pc.Curve);
            else
                for (a = 0; a < b.length; a++) this.curves.push(new pc.Curve(b[a]))
        }
    };
    d.prototype = {
        get: function(a) { return this.curves[a] },
        value: function(a, b) {
            var c = this.curves.length;
            b = b || [];
            b.length = c;
            for (var e = 0; e < c; e++) b[e] = this.curves[e].value(a);
            return b
        },
        clone: function() {
            var a = new pc.CurveSet;
            a.curves = [];
            for (var b = 0; b < this.curves.length; b++) a.curves.push(this.curves[b].clone());
            a._type = this._type;
            return a
        },
        quantize: function(a) {
            a = Math.max(a, 2);
            for (var b = this.curves.length, c = new Float32Array(a * b), e = 1 / (a - 1), f = [], g = 0; g < a; g++) {
                var h = this.value(e * g, f);
                if (1 == b) c[g] = h[0];
                else
                    for (var d = 0; d < b; d++) c[g * b + d] = h[d]
            }
            return c
        }
    };
    Object.defineProperty(d.prototype, "length", { get: function() { return this.curves.length } });
    Object.defineProperty(d.prototype, "type", { get: function() { return this._type }, set: function(a) { this._type = a; for (var b = 0; b < this.curves.length; b++) this.curves[b].type = a } });
    return { CurveSet: d }
}());
pc.extend(pc, function() {
    var d = new pc.Vec3,
        a = new pc.Vec3,
        b = new pc.Vec3,
        c = new pc.Vec3,
        e = new pc.Vec3,
        f = new pc.Vec3,
        g = function(a, b) {
            this.center = a || new pc.Vec3(0, 0, 0);
            this.halfExtents = b || new pc.Vec3(.5, .5, .5);
            this._min = new pc.Vec3;
            this._max = new pc.Vec3
        };
    g.prototype = {
        add: function(a) {
            var b = this.center.data,
                c = b[0],
                e = b[1],
                f = b[2],
                g = this.halfExtents.data,
                d = g[0],
                n = g[1],
                t = g[2],
                w = c - d,
                c = c + d,
                d = e - n,
                e = e + n,
                n = f - t,
                f = f + t,
                t = a.center.data,
                y = t[0],
                x = t[1],
                t = t[2];
            a = a.halfExtents.data;
            var v = a[0],
                z = a[1],
                u = a[2];
            a = y - v;
            y += v;
            v = x -
                z;
            x += z;
            z = t - u;
            t += u;
            a < w && (w = a);
            y > c && (c = y);
            v < d && (d = v);
            x > e && (e = x);
            z < n && (n = z);
            t > f && (f = t);
            b[0] = .5 * (w + c);
            b[1] = .5 * (d + e);
            b[2] = .5 * (n + f);
            g[0] = .5 * (c - w);
            g[1] = .5 * (e - d);
            g[2] = .5 * (f - n)
        },
        copy: function(a) {
            this.center.copy(a.center);
            this.halfExtents.copy(a.halfExtents);
            this.type = a.type
        },
        intersects: function(a) {
            var b = this.getMax(),
                c = this.getMin(),
                e = a.getMax();
            a = a.getMin();
            return c.x <= e.x && b.x >= a.x && c.y <= e.y && b.y >= a.y && c.z <= e.z && b.z >= a.z
        },
        intersectsRay: function(g) {
            var m = f.copy(g.direction).normalize();
            d.sub2(g.origin, this.center);
            c.set(Math.abs(d.x), Math.abs(d.y), Math.abs(d.z));
            b.mul2(d, m);
            if (c.x > this.halfExtents.x && 0 <= b.x || c.y > this.halfExtents.y && 0 <= b.y || c.z > this.halfExtents.z && 0 <= b.z) return !1;
            e.set(Math.abs(m.x), Math.abs(m.y), Math.abs(m.z));
            a.cross(m, d);
            a.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z));
            return a.x > this.halfExtents.y * e.z + this.halfExtents.z * e.y || a.y > this.halfExtents.x * e.z + this.halfExtents.z * e.x || a.z > this.halfExtents.x * e.y + this.halfExtents.y * e.x ? !1 : !0
        },
        setMinMax: function(a, b) {
            this.center.add2(b, a).scale(.5);
            this.halfExtents.sub2(b, a).scale(.5)
        },
        getMin: function() { return this._min.copy(this.center).sub(this.halfExtents) },
        getMax: function() { return this._max.copy(this.center).add(this.halfExtents) },
        containsPoint: function(a) {
            var b = this.getMin(),
                c = this.getMax(),
                e;
            for (e = 0; 3 > e; ++e)
                if (a.data[e] < b.data[e] || a.data[e] > c.data[e]) return !1;
            return !0
        },
        setFromTransformedAabb: function(a, b) {
            var c = this.center,
                e = this.halfExtents,
                f = a.center.data,
                g = a.halfExtents.data;
            b = b.data;
            var d = b[0],
                n = b[4],
                t = b[8],
                w = b[1],
                y = b[5],
                x = b[9],
                v = b[2],
                z = b[6],
                u = b[10],
                A = Math.abs(d),
                B = Math.abs(n),
                C = Math.abs(t),
                E = Math.abs(w),
                O = Math.abs(y),
                K = Math.abs(x),
                M = Math.abs(v),
                H = Math.abs(z),
                D = Math.abs(u);
            c.set(b[12] + d * f[0] + n * f[1] + t * f[2], b[13] + w * f[0] + y * f[1] + x * f[2], b[14] + v * f[0] + z * f[1] + u * f[2]);
            e.set(A * g[0] + B * g[1] + C * g[2], E * g[0] + O * g[1] + K * g[2], M * g[0] + H * g[1] + D * g[2])
        },
        compute: function(b) {
            for (var c = d.set(b[0], b[1], b[2]), e = a.set(b[0], b[1], b[2]), f = b.length / 3, g = 1; g < f; g++) {
                var q = b[3 * g + 0],
                    r = b[3 * g + 1],
                    n = b[3 * g + 2];
                q < c.x && (c.x = q);
                r < c.y && (c.y = r);
                n < c.z && (c.z = n);
                q > e.x && (e.x = q);
                r > e.y && (e.y = r);
                n > e.z && (e.z = n)
            }
            this.setMinMax(c, e)
        }
    };
    return { BoundingBox: g }
}());
pc.extend(pc, function() {
    function d(a, b) {
        this.center = a || new pc.Vec3(0, 0, 0);
        this.radius = void 0 === b ? .5 : b
    }
    var a = new pc.Vec3,
        b = new pc.Vec3,
        c = new pc.Vec3,
        e = new pc.Vec3;
    d.prototype = {
        containsPoint: function(b) { b = a.sub2(b, this.center).lengthSq(); var c = this.radius; return b < c * c },
        compute: function(f) {
            var g, d = f.length / 3;
            for (g = 0; g < d; g++) a.set(f[3 * g], f[3 * g + 1], f[3 * g + 2]), c.addSelf(a), 0 === g % 100 && (c.scale(1 / d), b.add(c), c.set(0, 0, 0));
            c.scale(1 / d);
            b.add(c);
            this.center.copy(b);
            var m = 0;
            for (g = 0; g < d; g++) a.set(f[3 * g], f[3 * g +
                1], f[3 * g + 2]), e.sub2(a, this.center), m = Math.max(e.lengthSq(), m);
            this.radius = Math.sqrt(m)
        },
        intersectRay: function(c) {
            var e = a.copy(c.origin).sub(this.center),
                d = e.dot(b.copy(c.direction).normalize()),
                e = e.dot(e) - this.radius * this.radius;
            if (0 < e && 0 < d) return null;
            e = d * d - e;
            if (0 > e) return null;
            d = Math.abs(-d - Math.sqrt(e));
            return c.direction.clone().scale(d).add(c.origin)
        }
    };
    return { BoundingSphere: d }
}());
pc.extend(pc, function() {
    var d = new pc.Mat4,
        a = function(a, c) {
            a = a || (new pc.Mat4).setPerspective(90, 16 / 9, .1, 1E3);
            c = c || new pc.Mat4;
            this.planes = [];
            for (var e = 0; 6 > e; e++) this.planes[e] = [];
            this.update(a, c)
        };
    a.prototype = {
        update: function(a, c) {
            d.mul2(a, c);
            var e = d.data;
            this.planes[0][0] = e[3] - e[0];
            this.planes[0][1] = e[7] - e[4];
            this.planes[0][2] = e[11] - e[8];
            this.planes[0][3] = e[15] - e[12];
            var f = Math.sqrt(this.planes[0][0] * this.planes[0][0] + this.planes[0][1] * this.planes[0][1] + this.planes[0][2] * this.planes[0][2]);
            this.planes[0][0] /= f;
            this.planes[0][1] /= f;
            this.planes[0][2] /= f;
            this.planes[0][3] /= f;
            this.planes[1][0] = e[3] + e[0];
            this.planes[1][1] = e[7] + e[4];
            this.planes[1][2] = e[11] + e[8];
            this.planes[1][3] = e[15] + e[12];
            f = Math.sqrt(this.planes[1][0] * this.planes[1][0] + this.planes[1][1] * this.planes[1][1] + this.planes[1][2] * this.planes[1][2]);
            this.planes[1][0] /= f;
            this.planes[1][1] /= f;
            this.planes[1][2] /= f;
            this.planes[1][3] /= f;
            this.planes[2][0] = e[3] + e[1];
            this.planes[2][1] = e[7] + e[5];
            this.planes[2][2] = e[11] + e[9];
            this.planes[2][3] = e[15] + e[13];
            f = Math.sqrt(this.planes[2][0] * this.planes[2][0] + this.planes[2][1] * this.planes[2][1] + this.planes[2][2] * this.planes[2][2]);
            this.planes[2][0] /= f;
            this.planes[2][1] /= f;
            this.planes[2][2] /= f;
            this.planes[2][3] /= f;
            this.planes[3][0] = e[3] - e[1];
            this.planes[3][1] = e[7] - e[5];
            this.planes[3][2] = e[11] - e[9];
            this.planes[3][3] = e[15] - e[13];
            f = Math.sqrt(this.planes[3][0] * this.planes[3][0] + this.planes[3][1] * this.planes[3][1] + this.planes[3][2] * this.planes[3][2]);
            this.planes[3][0] /= f;
            this.planes[3][1] /= f;
            this.planes[3][2] /= f;
            this.planes[3][3] /= f;
            this.planes[4][0] = e[3] - e[2];
            this.planes[4][1] = e[7] - e[6];
            this.planes[4][2] = e[11] - e[10];
            this.planes[4][3] = e[15] - e[14];
            f = Math.sqrt(this.planes[4][0] * this.planes[4][0] + this.planes[4][1] * this.planes[4][1] + this.planes[4][2] * this.planes[4][2]);
            this.planes[4][0] /= f;
            this.planes[4][1] /= f;
            this.planes[4][2] /= f;
            this.planes[4][3] /= f;
            this.planes[5][0] = e[3] + e[2];
            this.planes[5][1] = e[7] + e[6];
            this.planes[5][2] = e[11] + e[10];
            this.planes[5][3] = e[15] + e[14];
            f = Math.sqrt(this.planes[5][0] * this.planes[5][0] +
                this.planes[5][1] * this.planes[5][1] + this.planes[5][2] * this.planes[5][2]);
            this.planes[5][0] /= f;
            this.planes[5][1] /= f;
            this.planes[5][2] /= f;
            this.planes[5][3] /= f
        },
        containsPoint: function(a) {
            for (var c = 0; 6 > c; c++)
                if (0 >= this.planes[c][0] * a.x + this.planes[c][1] * a.y + this.planes[c][2] * a.z + this.planes[c][3]) return !1;
            return !0
        },
        containsSphere: function(a) {
            var c = 0,
                e, f, g = a.radius;
            f = a.center.data;
            a = f[0];
            var d = f[1],
                m = f[2],
                l = this.planes;
            for (f = 0; 6 > f; f++) {
                e = l[f];
                e = e[0] * a + e[1] * d + e[2] * m + e[3];
                if (e <= -g) return 0;
                e > g && c++
            }
            return 6 === c ? 2 : 1
        }
    };
    return { Frustum: a }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
        this.normal = b || new pc.Vec3(0, 0, 1);
        this.point = a || new pc.Vec3(0, 0, 0);
        this.d = -this.normal.dot(this.point)
    };
    d.prototype = {
        distance: function(a) { return this.normal.dot(a) + this.d },
        intersect: function(a, b) {
            var c = this.distance(a),
                e = this.distance(b);
            return c / (c - e)
        },
        intersectPosition: function(a, b) {
            var c = this.intersect(a, b),
                e = new pc.Vec3;
            e.lerp(a, b, c);
            return e
        }
    };
    return { Plane: d }
}());
pc.extend(pc, function() {
    return {
        Ray: function(d, a) {
            this.origin = d || new pc.Vec3(0, 0, 0);
            this.direction = a || new pc.Vec3(0, 0, -1)
        }
    }
}());
(function() {
    var d = { ADDRESS_REPEAT: 0, ADDRESS_CLAMP_TO_EDGE: 1, ADDRESS_MIRRORED_REPEAT: 2, BLENDMODE_ZERO: 0, BLENDMODE_ONE: 1, BLENDMODE_SRC_COLOR: 2, BLENDMODE_ONE_MINUS_SRC_COLOR: 3, BLENDMODE_DST_COLOR: 4, BLENDMODE_ONE_MINUS_DST_COLOR: 5, BLENDMODE_SRC_ALPHA: 6, BLENDMODE_SRC_ALPHA_SATURATE: 7, BLENDMODE_ONE_MINUS_SRC_ALPHA: 8, BLENDMODE_DST_ALPHA: 9, BLENDMODE_ONE_MINUS_DST_ALPHA: 10, BLENDEQUATION_ADD: 0, BLENDEQUATION_SUBTRACT: 1, BLENDEQUATION_REVERSE_SUBTRACT: 2, BUFFER_STATIC: 0, BUFFER_DYNAMIC: 1, BUFFER_STREAM: 2, CLEARFLAG_COLOR: 1, CLEARFLAG_DEPTH: 2, CLEARFLAG_STENCIL: 4, CUBEFACE_POSX: 0, CUBEFACE_NEGX: 1, CUBEFACE_POSY: 2, CUBEFACE_NEGY: 3, CUBEFACE_POSZ: 4, CUBEFACE_NEGZ: 5, CULLFACE_NONE: 0, CULLFACE_BACK: 1, CULLFACE_FRONT: 2, CULLFACE_FRONTANDBACK: 3, ELEMENTTYPE_INT8: 0, ELEMENTTYPE_UINT8: 1, ELEMENTTYPE_INT16: 2, ELEMENTTYPE_UINT16: 3, ELEMENTTYPE_INT32: 4, ELEMENTTYPE_UINT32: 5, ELEMENTTYPE_FLOAT32: 6, FILTER_NEAREST: 0, FILTER_LINEAR: 1, FILTER_NEAREST_MIPMAP_NEAREST: 2, FILTER_NEAREST_MIPMAP_LINEAR: 3, FILTER_LINEAR_MIPMAP_NEAREST: 4, FILTER_LINEAR_MIPMAP_LINEAR: 5, INDEXFORMAT_UINT8: 0, INDEXFORMAT_UINT16: 1, INDEXFORMAT_UINT32: 2, PIXELFORMAT_A8: 0, PIXELFORMAT_L8: 1, PIXELFORMAT_L8_A8: 2, PIXELFORMAT_R5_G6_B5: 3, PIXELFORMAT_R5_G5_B5_A1: 4, PIXELFORMAT_R4_G4_B4_A4: 5, PIXELFORMAT_R8_G8_B8: 6, PIXELFORMAT_R8_G8_B8_A8: 7, PIXELFORMAT_DXT1: 8, PIXELFORMAT_DXT3: 9, PIXELFORMAT_DXT5: 10, PIXELFORMAT_RGB16F: 11, PIXELFORMAT_RGBA16F: 12, PIXELFORMAT_RGB32F: 13, PIXELFORMAT_RGBA32F: 14, PIXELFORMAT_ETC1: 15, PIXELFORMAT_PVRTC_2BPP_RGB_1: 16, PIXELFORMAT_PVRTC_2BPP_RGBA_1: 17, PIXELFORMAT_PVRTC_4BPP_RGB_1: 18, PIXELFORMAT_PVRTC_4BPP_RGBA_1: 19, PRIMITIVE_POINTS: 0, PRIMITIVE_LINES: 1, PRIMITIVE_LINELOOP: 2, PRIMITIVE_LINESTRIP: 3, PRIMITIVE_TRIANGLES: 4, PRIMITIVE_TRISTRIP: 5, PRIMITIVE_TRIFAN: 6, SEMANTIC_POSITION: "POSITION", SEMANTIC_NORMAL: "NORMAL", SEMANTIC_TANGENT: "TANGENT", SEMANTIC_BLENDWEIGHT: "BLENDWEIGHT", SEMANTIC_BLENDINDICES: "BLENDINDICES", SEMANTIC_COLOR: "COLOR", SEMANTIC_TEXCOORD0: "TEXCOORD0", SEMANTIC_TEXCOORD1: "TEXCOORD1", SEMANTIC_TEXCOORD2: "TEXCOORD2", SEMANTIC_TEXCOORD3: "TEXCOORD3", SEMANTIC_TEXCOORD4: "TEXCOORD4", SEMANTIC_TEXCOORD5: "TEXCOORD5", SEMANTIC_TEXCOORD6: "TEXCOORD6", SEMANTIC_TEXCOORD7: "TEXCOORD7", SEMANTIC_ATTR0: "ATTR0", SEMANTIC_ATTR1: "ATTR1", SEMANTIC_ATTR2: "ATTR2", SEMANTIC_ATTR3: "ATTR3", SEMANTIC_ATTR4: "ATTR4", SEMANTIC_ATTR5: "ATTR5", SEMANTIC_ATTR6: "ATTR6", SEMANTIC_ATTR7: "ATTR7", SEMANTIC_ATTR8: "ATTR8", SEMANTIC_ATTR9: "ATTR9", SEMANTIC_ATTR10: "ATTR10", SEMANTIC_ATTR11: "ATTR11", SEMANTIC_ATTR12: "ATTR12", SEMANTIC_ATTR13: "ATTR13", SEMANTIC_ATTR14: "ATTR14", SEMANTIC_ATTR15: "ATTR15", TEXTURELOCK_READ: 1, TEXTURELOCK_WRITE: 2, UNIFORMTYPE_BOOL: 0, UNIFORMTYPE_INT: 1, UNIFORMTYPE_FLOAT: 2, UNIFORMTYPE_VEC2: 3, UNIFORMTYPE_VEC3: 4, UNIFORMTYPE_VEC4: 5, UNIFORMTYPE_IVEC2: 6, UNIFORMTYPE_IVEC3: 7, UNIFORMTYPE_IVEC4: 8, UNIFORMTYPE_BVEC2: 9, UNIFORMTYPE_BVEC3: 10, UNIFORMTYPE_BVEC4: 11, UNIFORMTYPE_MAT2: 12, UNIFORMTYPE_MAT3: 13, UNIFORMTYPE_MAT4: 14, UNIFORMTYPE_TEXTURE2D: 15, UNIFORMTYPE_TEXTURECUBE: 16, UNIFORMTYPE_FLOATARRAY: 17, SHADERTAG_MATERIAL: 1 };
    pc.extend(pc, d);
    pc.gfx = {};
    pc.extend(pc.gfx, d)
})();
pc.extend(pc, function() {
    var d = function(a) {
        this.name = a;
        this.value = null;
        this.versionObject = new pc.VersionedObject
    };
    d.prototype = {
        setValue: function(a) {
            this.value = a;
            this.versionObject.increment()
        },
        getValue: function(a) { return this.value }
    };
    return { ScopeId: d }
}());
pc.extend(pc, function() {
    var d = function(a) {
        this.name = a;
        this.variables = {};
        this.namespaces = {}
    };
    d.prototype = { resolve: function(a) {!1 === this.variables.hasOwnProperty(a) && (this.variables[a] = new pc.ScopeId(a)); return this.variables[a] }, getSubSpace: function(a) {!1 === this.namespaces.hasOwnProperty(a) && (this.namespaces[a] = new pc.ScopeSpace(a), logDEBUG("Added ScopeSpace: " + a)); return this.namespaces[a] } };
    return { ScopeSpace: d }
}());
pc.extend(pc, function() {
    var d = function() { this.revision = this.globalId = 0 };
    d.prototype = {
        equals: function(a) { return this.globalId === a.globalId && this.revision === a.revision },
        notequals: function(a) { return this.globalId !== a.globalId || this.revision !== a.revision },
        copy: function(a) {
            this.globalId = a.globalId;
            this.revision = a.revision
        },
        reset: function() { this.revision = this.globalId = 0 }
    };
    return { Version: d }
}());
pc.extend(pc, function() {
    var d = 0,
        a = function() {
            d++;
            this.version = new pc.Version;
            this.version.globalId = d
        };
    a.prototype = { increment: function() { this.version.revision++ } };
    return { VersionedObject: a }
}());
pc.extend(pc, function() {
    function d(f, d) {
        this.index = 0;
        switch (d.dataType) {
            case pc.ELEMENTTYPE_INT8:
                this.array = new Int8Array(f, d.offset);
                break;
            case pc.ELEMENTTYPE_UINT8:
                this.array = new Uint8Array(f, d.offset);
                break;
            case pc.ELEMENTTYPE_INT16:
                this.array = new Int16Array(f, d.offset);
                break;
            case pc.ELEMENTTYPE_UINT16:
                this.array = new Uint16Array(f, d.offset);
                break;
            case pc.ELEMENTTYPE_INT32:
                this.array = new Int32Array(f, d.offset);
                break;
            case pc.ELEMENTTYPE_UINT32:
                this.array = new Uint32Array(f, d.offset);
                break;
            case pc.ELEMENTTYPE_FLOAT32:
                this.array = new Float32Array(f, d.offset)
        }
        switch (d.numComponents) {
            case 1:
                this.set = a;
                break;
            case 2:
                this.set = b;
                break;
            case 3:
                this.set = c;
                break;
            case 4:
                this.set = e
        }
    }

    function a(a) { this.array[this.index] = a }

    function b(a, b) {
        this.array[this.index] = a;
        this.array[this.index + 1] = b
    }

    function c(a, b, c) {
        this.array[this.index] = a;
        this.array[this.index + 1] = b;
        this.array[this.index + 2] = c
    }

    function e(a, b, c, e) {
        this.array[this.index] = a;
        this.array[this.index + 1] = b;
        this.array[this.index + 2] = c;
        this.array[this.index + 3] = e
    }

    function f(a) {
        this.vertexBuffer = a;
        this.buffer = this.vertexBuffer.lock();
        this.setters = [];
        this.element = {};
        a = this.vertexBuffer.getFormat();
        for (var b = 0; b < a.elements.length; b++) {
            var c = a.elements[b];
            this.setters[b] = new d(this.buffer, c);
            this.element[c.name] = this.setters[b]
        }
    }
    f.prototype = {
        next: function() {
            for (var a = 0, b = this.setters, c = this.setters.length, e = this.vertexBuffer.getFormat(); a < c;) {
                var f = b[a++];
                f.index += e.size / f.array.constructor.BYTES_PER_ELEMENT
            }
        },
        end: function() { this.vertexBuffer.unlock() }
    };
    return { VertexIterator: f }
}());
pc.extend(pc, function() {
    var d = [];
    d[pc.ELEMENTTYPE_INT8] = 1;
    d[pc.ELEMENTTYPE_UINT8] = 1;
    d[pc.ELEMENTTYPE_INT16] = 2;
    d[pc.ELEMENTTYPE_UINT16] = 2;
    d[pc.ELEMENTTYPE_INT32] = 4;
    d[pc.ELEMENTTYPE_UINT32] = 4;
    d[pc.ELEMENTTYPE_FLOAT32] = 4;
    return {
        VertexFormat: function(a, b) {
            var c, e, f;
            this.elements = [];
            this.hasColor = this.hasUv1 = this.hasUv0 = !1;
            c = this.size = 0;
            for (e = b.length; c < e; c++) {
                var g = b[c];
                f = { name: g.semantic, offset: 0, stride: 0, stream: -1, scopeId: a.scope.resolve(g.semantic), dataType: g.type, numComponents: g.components, normalize: void 0 === g.normalize ? !1 : g.normalize, size: g.components * d[g.type] };
                this.elements.push(f);
                this.size += f.size;
                g.semantic === pc.SEMANTIC_TEXCOORD0 ? this.hasUv0 = !0 : g.semantic === pc.SEMANTIC_TEXCOORD1 ? this.hasUv1 = !0 : g.semantic === pc.SEMANTIC_COLOR && (this.hasColor = !0)
            }
            c = g = 0;
            for (e = this.elements.length; c < e; c++) f = this.elements[c], f.offset = g, f.stride = this.size, g += f.size
        }
    }
}());
pc.extend(pc, function() {
    var d = function(a, b, c, e, f) {
        this.usage = e || pc.BUFFER_STATIC;
        this.format = b;
        this.numVertices = c;
        this.numBytes = b.size * c;
        a._vram.vb += this.numBytes;
        this.device = a;
        this.bufferId = this.device.gl.createBuffer();
        f && this.setData(f) || (this.storage = new ArrayBuffer(this.numBytes))
    };
    d.prototype = {
        destroy: function() {
            this.device.gl.deleteBuffer(this.bufferId);
            this.device._vram.vb -= this.storage.byteLength
        },
        getFormat: function() { return this.format },
        getUsage: function() { return this.usage },
        getNumVertices: function() { return this.numVertices },
        lock: function() { return this.storage },
        unlock: function() {
            var a = this.device.gl,
                b;
            switch (this.usage) {
                case pc.BUFFER_STATIC:
                    b = a.STATIC_DRAW;
                    break;
                case pc.BUFFER_DYNAMIC:
                    b = a.DYNAMIC_DRAW;
                    break;
                case pc.BUFFER_STREAM:
                    b = a.STREAM_DRAW
            }
            a.bindBuffer(a.ARRAY_BUFFER, this.bufferId);
            a.bufferData(a.ARRAY_BUFFER, this.storage, b)
        },
        setData: function(a) {
            if (a.byteLength !== this.numBytes) return console.error("VertexBuffer: wrong initial data size: expected " + this.numBytes + ", got " + a.byteLength), !1;
            this.storage = a;
            this.unlock();
            return !0
        }
    };
    return { VertexBuffer: d }
}());
pc.extend(pc, function() {
    var d = function(a, b, c, e) {
        this.usage = e || pc.BUFFER_STATIC;
        this.format = b;
        this.numIndices = c;
        this.device = a;
        c = this.device.gl;
        this.bufferId = c.createBuffer();
        var f;
        b === pc.INDEXFORMAT_UINT8 ? (f = 1, this.glFormat = c.UNSIGNED_BYTE) : b === pc.INDEXFORMAT_UINT16 ? (f = 2, this.glFormat = c.UNSIGNED_SHORT) : b === pc.INDEXFORMAT_UINT32 && (f = 4, this.glFormat = c.UNSIGNED_INT);
        this.bytesPerIndex = f;
        b = this.numIndices * f;
        this.storage = new ArrayBuffer(b);
        a._vram.ib += b
    };
    d.prototype = {
        destroy: function() {
            this.device.gl.deleteBuffer(this.bufferId);
            this.device._vram.ib -= this.storage.byteLength
        },
        getFormat: function() { return this.format },
        getNumIndices: function() { return this.numIndices },
        lock: function() { return this.storage },
        unlock: function() {
            var a = this.device.gl,
                b;
            switch (this.usage) {
                case pc.BUFFER_STATIC:
                    b = a.STATIC_DRAW;
                    break;
                case pc.BUFFER_DYNAMIC:
                    b = a.DYNAMIC_DRAW;
                    break;
                case pc.BUFFER_STREAM:
                    b = a.STREAM_DRAW
            }
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.bufferId);
            a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.storage, b)
        }
    };
    return { IndexBuffer: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
        this.device = a;
        var c = 4,
            e = 4,
            f = pc.PIXELFORMAT_R8_G8_B8_A8,
            g = !1,
            d = !0,
            m = !1,
            l = !1;
        void 0 !== b && (c = void 0 !== b.width ? b.width : c, e = void 0 !== b.height ? b.height : e, f = void 0 !== b.format ? b.format : f, g = void 0 !== b.cubemap ? b.cubemap : g, d = void 0 !== b.autoMipmap ? b.autoMipmap : d, m = void 0 !== b.rgbm ? b.rgbm : m, l = void 0 !== b.fixCubemapSeams ? b.fixCubemapSeams : l);
        this.name = null;
        this.autoMipmap = d;
        this.rgbm = m;
        this.fixCubemapSeams = l;
        this._cubemap = g;
        this._format = f;
        this._compressed = f === pc.PIXELFORMAT_DXT1 || f === pc.PIXELFORMAT_DXT3 || f === pc.PIXELFORMAT_DXT5 || f >= pc.PIXELFORMAT_ETC1;
        this._width = c || 4;
        this._height = e || 4;
        this._addressV = this._addressU = pc.ADDRESS_REPEAT;
        pc.math.powerOfTwo(this._width) && pc.math.powerOfTwo(this._height) ? this._minFilter = pc.FILTER_LINEAR_MIPMAP_LINEAR : this._minFilter = pc.FILTER_LINEAR;
        this._magFilter = pc.FILTER_LINEAR;
        this._anisotropy = 1;
        this._invalid = !1;
        this._levels = g ? [
            [null, null, null, null, null, null]
        ] : [null];
        this._levelsUpdated = g ? [
            [!0, !0, !0, !0, !0, !0]
        ] : [!0];
        this._lockedLevel = -1;
        this._anisotropyDirty = this._addressVDirty = this._addressUDirty = this._magFilterDirty = this._minFilterDirty = this._needsUpload = !0;
        this._gpuSize = 0
    };
    Object.defineProperty(d.prototype, "minFilter", {
        get: function() { return this._minFilter },
        set: function(a) {
            pc.math.powerOfTwo(this._width) && pc.math.powerOfTwo(this._height) || a === pc.FILTER_NEAREST || a === pc.FILTER_LINEAR || (a = pc.FILTER_LINEAR);
            a !== this._minFilter && (this._minFilter = a, this._minFilterDirty = !0)
        }
    });
    Object.defineProperty(d.prototype, "magFilter", {
        get: function() { return this._magFilter },
        set: function(a) {
            a !== pc.FILTER_NEAREST && a !== pc.FILTER_LINEAR && logWARNING("Invalid magnification filter mode. Must be set to FILTER_NEAREST or FILTER_LINEAR.");
            a !== this._magFilter && (this._magFilter = a, this._magFilterDirty = !0)
        }
    });
    Object.defineProperty(d.prototype, "addressU", {
        get: function() { return this._addressU },
        set: function(a) {
            pc.math.powerOfTwo(this._width) && pc.math.powerOfTwo(this._height) || a === pc.ADDRESS_CLAMP_TO_EDGE || (a = pc.ADDRESS_CLAMP_TO_EDGE);
            a !== this._addressU && (this._addressU = a, this._addressUDirty = !0)
        }
    });
    Object.defineProperty(d.prototype, "addressV", {
        get: function() { return this._addressV },
        set: function(a) {
            pc.math.powerOfTwo(this._width) && pc.math.powerOfTwo(this._height) || a === pc.ADDRESS_CLAMP_TO_EDGE || (a = pc.ADDRESS_CLAMP_TO_EDGE);
            a !== this._addressV && (this._addressV = a, this._addressVDirty = !0)
        }
    });
    Object.defineProperty(d.prototype, "anisotropy", {
        get: function() { return this._anisotropy },
        set: function(a) {
            a = pc.math.clamp(a, 1, this.device.maxAnisotropy);
            a !== this._anisotropy && (this._anisotropy = a, this._anisotropyDirty = !0)
        }
    });
    Object.defineProperty(d.prototype, "width", { get: function() { return this._width } });
    Object.defineProperty(d.prototype, "height", { get: function() { return this._height } });
    Object.defineProperty(d.prototype, "format", { get: function() { return this._format } });
    Object.defineProperty(d.prototype, "cubemap", { get: function() { return this._cubemap } });
    pc.extend(d.prototype, {
        bind: function() {},
        destroy: function() { this._glTextureId && (this.device.gl.deleteTexture(this._glTextureId), this.device._vram.tex -= this._gpuSize, this._glTextureId = null) },
        lock: function(a) {
            a = a || { level: 0, face: 0, mode: pc.TEXTURELOCK_WRITE };
            void 0 === a.level && (a.level = 0);
            void 0 === a.face && (a.face = 0);
            void 0 === a.mode && (a.mode = pc.TEXTURELOCK_WRITE);
            this._lockedLevel = a.level;
            if (null === this._levels[a.level]) switch (this._format) {
                case pc.PIXELFORMAT_A8:
                case pc.PIXELFORMAT_L8:
                    this._levels[a.level] = new Uint8Array(this._width * this._height);
                    break;
                case pc.PIXELFORMAT_L8_A8:
                    this._levels[a.level] = new Uint8Array(this._width * this._height * 2);
                    break;
                case pc.PIXELFORMAT_R5_G6_B5:
                case pc.PIXELFORMAT_R5_G5_B5_A1:
                case pc.PIXELFORMAT_R4_G4_B4_A4:
                    this._levels[a.level] = new Uint16Array(this._width * this._height);
                    break;
                case pc.PIXELFORMAT_R8_G8_B8:
                    this._levels[a.level] = new Uint8Array(this._width * this._height * 3);
                    break;
                case pc.PIXELFORMAT_R8_G8_B8_A8:
                    this._levels[a.level] = new Uint8Array(this._width * this._height * 4);
                    break;
                case pc.PIXELFORMAT_DXT1:
                    this._levels[a.level] = new Uint8Array(Math.floor((this._width + 3) / 4) * Math.floor((this._height + 3) / 4) * 8);
                    break;
                case pc.PIXELFORMAT_DXT3:
                case pc.PIXELFORMAT_DXT5:
                    this._levels[a.level] = new Uint8Array(Math.floor((this._width + 3) / 4) * Math.floor((this._height + 3) / 4) * 16);
                    break;
                case pc.PIXELFORMAT_RGB16F:
                    this._levels[a.level] = new Uint16Array(this._width * this._height * 3);
                    break;
                case pc.PIXELFORMAT_RGB32F:
                    this._levels[a.level] = new Float32Array(this._width * this._height * 3);
                    break;
                case pc.PIXELFORMAT_RGBA16F:
                    this._levels[a.level] = new Uint16Array(this._width * this._height * 4);
                    break;
                case pc.PIXELFORMAT_RGBA32F:
                    this._levels[a.level] = new Float32Array(this._width * this._height * 4)
            }
            return this._levels[a.level]
        },
        recover: function() {},
        setSource: function(a) {
            var b, c = !1,
                e, f;
            if (this._cubemap) {
                e = a[0] && a[0].width || 0;
                f = a[0] && a[0].height || 0;
                if (a[0])
                    for (b = 0; 6 > b; b++) a[b] && a[b].width === e && a[b].height === f && (a[b] instanceof HTMLImageElement || a[b] instanceof HTMLCanvasElement || a[b] instanceof HTMLVideoElement) || (c = !0);
                else c = !0;
                for (b = 0; 6 > b; b++)
                    if (c || this._levels[0][b] !== a[b]) this._levelsUpdated[0][b] = !0
            } else {
                a instanceof HTMLImageElement || a instanceof HTMLCanvasElement || a instanceof HTMLVideoElement || (c = !0);
                if (c || a !== this._levels[0]) this._levelsUpdated[0] = !0;
                e = a.width;
                f = a.height
            }
            if (c)
                if (this._height = this._width = 4, this._cubemap)
                    for (b = 0; 6 > b; b++) this._levels[0][b] = null, this._levelsUpdated[0][b] = !0;
                else this._levels[0] = null, this._levelsUpdated[0] = !0;
            else this._width = e, this._height = f, this._levels[0] = a;
            this._invalid === c && c || (this._invalid = c, this.upload(), this.minFilter = this._minFilter, this.magFilter = this._magFilter, this.addressU = this._addressU, this.addressV = this._addressV)
        },
        getSource: function() { return this._levels[0] },
        unlock: function() {
            logASSERT(-1 !== this._lockedLevel, "Attempting to unlock a texture that is not locked");
            this.upload();
            this._lockedLevel = -1
        },
        upload: function() { this._needsUpload = !0 },
        getDds: function() {
            this.format !== pc.PIXELFORMAT_R8_G8_B8_A8 && console.error("This format is not implemented yet");
            for (var a = 128, b = 0, c, e; this._levels[b];) {
                if (this.cubemap)
                    for (e = 0; 6 > e; e++) { if (!this._levels[b][e]) { console.error("No level data for mip " + b + ", face " + e); return } c = this._levels[b][e].length; if (!c) { console.error("No byte array for mip " + b + ", face " + e); return } a += c } else { c = this._levels[b].length; if (!c) { console.error("No byte array for mip " + b); return } a += c } a += this._levels[b].length;
                b++
            }
            a = new ArrayBuffer(a);
            e = new Uint32Array(a, 0, 32);
            b = 528391;
            1 < this._levels.length && (b |= 131072);
            c = 4096;
            1 < this._levels.length && (c |= 4194304);
            if (1 < this._levels.length || this.cubemap) c |= 8;
            var f = this.cubemap ? 65024 : 0;
            e[0] = 542327876;
            e[1] = 124;
            e[2] = b;
            e[3] = this.height;
            e[4] = this.width;
            e[5] = this.width * this.height * 4;
            e[6] = 0;
            e[7] = this._levels.length;
            for (b = 0; 11 > b; b++) e[8 + b] = 0;
            e[19] = 32;
            e[20] = 65;
            e[21] = 0;
            e[22] = 32;
            e[23] = 16711680;
            e[24] = 65280;
            e[25] = 255;
            e[26] = 4278190080;
            e[27] = c;
            e[28] = f;
            e[29] = 0;
            e[30] = 0;
            e[31] = 0;
            var f = 128,
                g, d;
            if (this.cubemap)
                for (e = 0; 6 > e; e++)
                    for (b = 0; b < this._levels.length; b++) {
                        g = this._levels[b][e];
                        d = new Uint8Array(a, f, g.length);
                        for (c = 0; c < g.length; c++) d[c] = g[c];
                        f += g.length
                    } else
                        for (b = 0; b < this._levels.length; b++) {
                            g = this._levels[b];
                            d = new Uint8Array(a, f, g.length);
                            for (c = 0; c < g.length; c++) d[c] = g[c];
                            f += g.length
                        }
            return a
        }
    });
    return { Texture: d }
}());
pc.extend(pc, function() {
    var d = { depth: !0, face: 0 },
        a = function(a, c, e) {
            this._device = a;
            this._colorBuffer = c;
            e = void 0 !== e ? e : d;
            this._face = void 0 !== e.face ? e.face : 0;
            this._depth = void 0 !== e.depth ? e.depth : !0
        };
    a.prototype = {
        destroy: function() {
            var a = this._device.gl;
            a.deleteFramebuffer(this._frameBuffer);
            this._depthBuffer && a.deleteRenderbuffer(this._depthBuffer)
        }
    };
    Object.defineProperty(a.prototype, "colorBuffer", { get: function() { return this._colorBuffer } });
    Object.defineProperty(a.prototype, "face", { get: function() { return this._face } });
    Object.defineProperty(a.prototype, "width", { get: function() { return this._colorBuffer.width } });
    Object.defineProperty(a.prototype, "height", { get: function() { return this._colorBuffer.height } });
    return { RenderTarget: a }
}());
pc.extend(pc, function() {
    return {
        ShaderInput: function(d, a, b, c) {
            this.locationId = c;
            this.scopeId = d.scope.resolve(a);
            this.version = new pc.Version;
            b === pc.UNIFORMTYPE_FLOAT && "[0]" === a.substr(a.length - 3) && (b = pc.UNIFORMTYPE_FLOATARRAY);
            this.dataType = b;
            this.value = [null, null, null, null];
            this.array = []
        }
    }
}());
pc.extend(pc, function() {
    function d(a) { a = a.split("\n"); for (var b = 0, f = a.length; b < f; b++) a[b] = b + 1 + ":\t" + a[b]; return a.join("\n") }

    function a(a, b, f) {
        b = a.createShader(b);
        a.shaderSource(b, f);
        a.compileShader(b);
        return b
    }
    var b = function(b, e) {
        this.device = b;
        this.definition = e;
        this.ready = !1;
        var f = this.device.gl;
        this.vshader = a(f, f.VERTEX_SHADER, e.vshader);
        this.fshader = a(f, f.FRAGMENT_SHADER, e.fshader);
        var d = this.vshader,
            h = this.fshader,
            m = f.createProgram();
        f.attachShader(m, d);
        f.attachShader(m, h);
        this.program = m;
        b._shaderStats.vsCompiled++;
        b._shaderStats.fsCompiled++;
        b._shaderStats.linked++;
        e.tag === pc.SHADERTAG_MATERIAL && b._shaderStats.materialShaders++
    };
    b.prototype = {
        link: function() {
            var a = this.device.gl;
            a.linkProgram(this.program);
            a.getShaderParameter(this.vshader, a.COMPILE_STATUS) || logERROR("Failed to compile vertex shader:\n\n" + d(this.definition.vshader) + "\n\n" + a.getShaderInfoLog(this.vshader));
            a.getShaderParameter(this.fshader, a.COMPILE_STATUS) || logERROR("Failed to compile fragment shader:\n\n" + d(this.definition.fshader) + "\n\n" +
                a.getShaderInfoLog(this.fshader));
            a.getProgramParameter(this.program, a.LINK_STATUS) || logERROR("Failed to link shader program. Error: " + a.getProgramInfoLog(this.program));
            a.deleteShader(this.vshader);
            a.deleteShader(this.fshader);
            this.attributes = [];
            this.uniforms = [];
            this.samplers = [];
            var b = 0,
                f, g, h = {};
            h[a.BOOL] = pc.UNIFORMTYPE_BOOL;
            h[a.INT] = pc.UNIFORMTYPE_INT;
            h[a.FLOAT] = pc.UNIFORMTYPE_FLOAT;
            h[a.FLOAT_VEC2] = pc.UNIFORMTYPE_VEC2;
            h[a.FLOAT_VEC3] = pc.UNIFORMTYPE_VEC3;
            h[a.FLOAT_VEC4] = pc.UNIFORMTYPE_VEC4;
            h[a.INT_VEC2] = pc.UNIFORMTYPE_IVEC2;
            h[a.INT_VEC3] = pc.UNIFORMTYPE_IVEC3;
            h[a.INT_VEC4] = pc.UNIFORMTYPE_IVEC4;
            h[a.BOOL_VEC2] = pc.UNIFORMTYPE_BVEC2;
            h[a.BOOL_VEC3] = pc.UNIFORMTYPE_BVEC3;
            h[a.BOOL_VEC4] = pc.UNIFORMTYPE_BVEC4;
            h[a.FLOAT_MAT2] = pc.UNIFORMTYPE_MAT2;
            h[a.FLOAT_MAT3] = pc.UNIFORMTYPE_MAT3;
            h[a.FLOAT_MAT4] = pc.UNIFORMTYPE_MAT4;
            h[a.SAMPLER_2D] = pc.UNIFORMTYPE_TEXTURE2D;
            h[a.SAMPLER_CUBE] = pc.UNIFORMTYPE_TEXTURECUBE;
            for (var m = a.getProgramParameter(this.program, a.ACTIVE_ATTRIBUTES); b < m;) f = a.getActiveAttrib(this.program, b++), g = a.getAttribLocation(this.program, f.name), void 0 === this.definition.attributes[f.name] && console.error('Vertex shader attribute "' + f.name + '" is not mapped to a semantic in shader definition.'), f = new pc.ShaderInput(this.device, this.definition.attributes[f.name], h[f.type], g), this.attributes.push(f);
            b = 0;
            for (m = a.getProgramParameter(this.program, a.ACTIVE_UNIFORMS); b < m;) f = a.getActiveUniform(this.program, b++), g = a.getUniformLocation(this.program, f.name), f.type === a.SAMPLER_2D || f.type === a.SAMPLER_CUBE ? this.samplers.push(new pc.ShaderInput(this.device, f.name, h[f.type], g)) : this.uniforms.push(new pc.ShaderInput(this.device, f.name, h[f.type], g));
            this.ready = !0
        },
        destroy: function() { this.device.gl.deleteProgram(this.program) }
    };
    return { Shader: b }
}());
pc.extend(pc, function() {
    var d = function(a) {
        this._device = a;
        this._cache = {};
        this._generators = {}
    };
    d.prototype.register = function(a, b) { this.isRegistered(a) || (this._generators[a] = b) };
    d.prototype.unregister = function(a) { this.isRegistered(a) && delete this._generators[a] };
    d.prototype.isRegistered = function(a) { return void 0 !== this._generators[a] };
    d.prototype.getProgram = function(a, b) {
        var c = this._generators[a];
        if (void 0 === c) return logERROR("No program library functions registered for: " + a), null;
        var e = this._device,
            f = c.generateKey(e, b),
            d = this._cache[f];
        d || (c = c.createShaderDefinition(e, b), d = this._cache[f] = new pc.Shader(e, c));
        return d
    };
    return { ProgramLibrary: d }
}());
pc.extend(pc, function() {
    function d(a) {
        this.name = "UnsupportedBrowserError";
        this.message = a || ""
    }

    function a(a) {
        this.name = "ContextCreationError";
        this.message = a || ""
    }

    function b() {
        var a = window.navigator.userAgent.indexOf("MSIE "),
            b = navigator.userAgent.match(/Trident.*rv\:11\./);
        return 0 < a || !!b
    }

    function c(a, b, c) {
        b = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, b);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, 2, 2, 0, a.RGBA, c, null);
        c = a.createFramebuffer();
        a.bindFramebuffer(a.FRAMEBUFFER, c);
        a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, b, 0);
        a.bindTexture(a.TEXTURE_2D, null);
        if (a.checkFramebufferStatus(a.FRAMEBUFFER) != a.FRAMEBUFFER_COMPLETE) return a.deleteTexture(b), !1;
        a.deleteTexture(b);
        return !0
    }
    var e, f, g, h, m;
    d.prototype = Error.prototype;
    a.prototype = Error.prototype;
    var l = function() { logWARNING("Context lost.") },
        p = function() { logINFO("Context restored.") },
        k = function(a, b) { for (var c = ["webgl", "experimental-webgl"], e = null, f = 0; f < c.length; f++) { try { e = a.getContext(c[f], b) } catch (d) {} if (e) break } return e },
        q = function(a, b) {
            var c = a.width,
                e = a.height;
            if (c > b || e > b) {
                var f = b / Math.max(c, e),
                    d = Math.floor(c * f),
                    f = Math.floor(e * f);
                console.warn("Image dimensions larger than max supported texture size of " + b + ". Resizing from " + c + ", " + e + " to " + d + ", " + f + ".");
                var g = document.createElement("canvas");
                g.width = d;
                g.height = f;
                g.getContext("2d").drawImage(a, 0, 0, c, e, 0, 0, d, f);
                return g
            }
            return a
        },
        r = null,
        n = function(a, d) {
            this.gl = void 0;
            this.canvas = a;
            this.indexBuffer = this.shader = null;
            this.vertexBuffers = [];
            this.precision = "highp";
            this.enableAutoInstancing = !1;
            this.autoInstancingMaxObjects = 16384;
            this.attributesInvalidated = !0;
            this.boundBuffer = null;
            this.instancedAttribs = {};
            this.enabledAttributes = {};
            this.textureUnits = [];
            this.commitFunction = {};
            this._maxPixelRatio = 1;
            this._height = this._width = 0;
            this.updateClientRect();
            if (!window.WebGLRenderingContext) throw new pc.UnsupportedBrowserError;
            a && (this.gl = k(a, d));
            if (!this.gl) throw new pc.ContextCreationError;
            var n = this.gl;
            (function() {
                var d;
                a.addEventListener("webglcontextlost", l, !1);
                a.addEventListener("webglcontextrestored", p, !1);
                this.canvas = a;
                this.indexBuffer = this.shader = null;
                this.vertexBuffers = [];
                this.precision = "highp";
                this.maxTextureSize = n.getParameter(n.MAX_TEXTURE_SIZE);
                this.maxCubeMapSize = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE);
                this.maxRenderBufferSize = n.getParameter(n.MAX_RENDERBUFFER_SIZE);
                if (n.getShaderPrecisionFormat) {
                    d = n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT);
                    var k = n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT);
                    n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.LOW_FLOAT);
                    var r = n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT),
                        q = n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT);
                    n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.LOW_FLOAT);
                    n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_INT);
                    n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_INT);
                    n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.LOW_INT);
                    n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_INT);
                    n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_INT);
                    n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.LOW_INT);
                    k = 0 < k.precision && 0 < q.precision;
                    0 < d.precision && 0 < r.precision || (k ? (this.precision = "mediump", console.warn("WARNING: highp not supported, using mediump")) : (this.precision = "lowp", console.warn("WARNING: highp and mediump not supported, using lowp")))
                }
                this.maxPrecision = this.precision;
                this.defaultClearOptions = { color: [0, 0, 0, 1], depth: 1, flags: pc.CLEARFLAG_COLOR | pc.CLEARFLAG_DEPTH };
                this.glAddress = [n.REPEAT, n.CLAMP_TO_EDGE, n.MIRRORED_REPEAT];
                this.glBlendEquation = [n.FUNC_ADD, n.FUNC_SUBTRACT, n.FUNC_REVERSE_SUBTRACT];
                this.glBlendFunction = [n.ZERO, n.ONE, n.SRC_COLOR, n.ONE_MINUS_SRC_COLOR, n.DST_COLOR, n.ONE_MINUS_DST_COLOR, n.SRC_ALPHA, n.SRC_ALPHA_SATURATE, n.ONE_MINUS_SRC_ALPHA, n.DST_ALPHA, n.ONE_MINUS_DST_ALPHA];
                this.glClearFlag = [0, n.COLOR_BUFFER_BIT, n.DEPTH_BUFFER_BIT, n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT, n.STENCIL_BUFFER_BIT, n.STENCIL_BUFFER_BIT | n.COLOR_BUFFER_BIT, n.STENCIL_BUFFER_BIT | n.DEPTH_BUFFER_BIT, n.STENCIL_BUFFER_BIT | n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT];
                this.glFilter = [n.NEAREST, n.LINEAR, n.NEAREST_MIPMAP_NEAREST, n.NEAREST_MIPMAP_LINEAR, n.LINEAR_MIPMAP_NEAREST, n.LINEAR_MIPMAP_LINEAR];
                this.glPrimitive = [n.POINTS, n.LINES, n.LINE_LOOP, n.LINE_STRIP, n.TRIANGLES, n.TRIANGLE_STRIP, n.TRIANGLE_FAN];
                this.glType = [n.BYTE, n.UNSIGNED_BYTE, n.SHORT, n.UNSIGNED_SHORT, n.INT, n.UNSIGNED_INT, n.FLOAT];
                this.unmaskedVendor = this.unmaskedRenderer = null;
                if (this.extRendererInfo = n.getExtension("WEBGL_debug_renderer_info")) this.unmaskedRenderer = n.getParameter(this.extRendererInfo.UNMASKED_RENDERER_WEBGL), this.unmaskedVendor = n.getParameter(this.extRendererInfo.UNMASKED_VENDOR_WEBGL);
                this.extTextureFloat = n.getExtension("OES_texture_float");
                this.extTextureFloatLinear = n.getExtension("OES_texture_float_linear");
                this.extTextureFloat && (this.extTextureFloatRenderable = c(n, this.extTextureFloat, n.FLOAT));
                this.extTextureHalfFloat = n.getExtension("OES_texture_half_float");
                this.extTextureHalfFloatLinear = n.getExtension("OES_texture_half_float_linear");
                this.extTextureHalfFloat && (this.extTextureHalfFloatRenderable = c(n, this.extTextureHalfFloat, this.extTextureHalfFloat.HALF_FLOAT_OES));
                this.extUintElement = n.getExtension("OES_element_index_uint");
                this.maxVertexTextures = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
                this.supportsBoneTextures = this.extTextureFloat && 0 < this.maxVertexTextures;
                this.maxShadowType = pc.SHADOW_VSM8;
                this.extTextureFloatRenderable ? this.maxShadowType = pc.SHADOW_VSM32 : this.extTextureHalfFloatRenderable && (this.maxShadowType = pc.SHADOW_VSM16);
                this.extTextureLod = n.getExtension("EXT_shader_texture_lod");
                this.fragmentUniformsCount = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS);
                this.samplerCount = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS);
                this.useTexCubeLod = this.extTextureLod && 16 > this.samplerCount;
                this.extDepthTexture = null;
                (this.extStandardDerivatives = n.getExtension("OES_standard_derivatives")) && n.hint(this.extStandardDerivatives.FRAGMENT_SHADER_DERIVATIVE_HINT_OES, n.NICEST);
                this.extTextureFilterAnisotropic = n.getExtension("EXT_texture_filter_anisotropic");
                this.extTextureFilterAnisotropic || (this.extTextureFilterAnisotropic = n.getExtension("WEBKIT_EXT_texture_filter_anisotropic"));
                this.extCompressedTextureS3TC = n.getExtension("WEBGL_compressed_texture_s3tc");
                this.extCompressedTextureS3TC || (this.extCompressedTextureS3TC = n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"));
                this.extCompressedTextureS3TC && b() && (this.extCompressedTextureS3TC = !1);
                if (this.extCompressedTextureS3TC)
                    for (r = n.getParameter(n.COMPRESSED_TEXTURE_FORMATS), d = 0; d < r.length; d++);
                this.extInstancing = n.getExtension("ANGLE_instanced_arrays");
                this.extCompressedTextureETC1 = n.getExtension("WEBGL_compressed_texture_etc1");
                this.extCompressedTexturePVRTC = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                this.maxDrawBuffers = (this.extDrawBuffers = n.getExtension("EXT_draw_buffers")) ? n.getParameter(this.extDrawBuffers.MAX_DRAW_BUFFERS_EXT) : 1;
                this.maxColorAttachments = this.extDrawBuffers ? n.getParameter(this.extDrawBuffers.MAX_COLOR_ATTACHMENTS_EXT) : 1;
                this.renderTarget = null;
                this.scope = new pc.ScopeSpace("Device");
                this.commitFunction = {};
                this.commitFunction[pc.UNIFORMTYPE_BOOL] = function(a, b) { a.value !== b && (n.uniform1i(a.locationId, b), a.value = b) };
                this.commitFunction[pc.UNIFORMTYPE_INT] = this.commitFunction[pc.UNIFORMTYPE_BOOL];
                this.commitFunction[pc.UNIFORMTYPE_FLOAT] = function(a, b) { a.value !== b && (n.uniform1f(a.locationId, b), a.value = b) };
                this.commitFunction[pc.UNIFORMTYPE_VEC2] = function(a, b) {
                    e = a.value;
                    f = b[0];
                    g = b[1];
                    if (e[0] !== f || e[1] !== g) n.uniform2fv(a.locationId, b), e[0] = f, e[1] = g
                };
                this.commitFunction[pc.UNIFORMTYPE_VEC3] = function(a, b) {
                    e = a.value;
                    f = b[0];
                    g = b[1];
                    h = b[2];
                    if (e[0] !== f || e[1] !== g || e[2] !== h) n.uniform3fv(a.locationId, b), e[0] = f, e[1] = g, e[2] = h
                };
                this.commitFunction[pc.UNIFORMTYPE_VEC4] = function(a, b) {
                    e = a.value;
                    f = b[0];
                    g = b[1];
                    h = b[2];
                    m = b[3];
                    if (e[0] !== f || e[1] !== g || e[2] !== h || e[3] !== m) n.uniform4fv(a.locationId, b), e[0] = f, e[1] = g, e[2] = h, e[3] = m
                };
                this.commitFunction[pc.UNIFORMTYPE_IVEC2] = function(a, b) {
                    e = a.value;
                    f = b[0];
                    g = b[1];
                    if (e[0] !== f || e[1] !== g) n.uniform2iv(a.locationId, b), e[0] = f, e[1] = g
                };
                this.commitFunction[pc.UNIFORMTYPE_BVEC2] = this.commitFunction[pc.UNIFORMTYPE_IVEC2];
                this.commitFunction[pc.UNIFORMTYPE_IVEC3] = function(a, b) {
                    e = a.value;
                    f = b[0];
                    g = b[1];
                    h = b[2];
                    if (e[0] !== f || e[1] !== g || e[2] !== h) n.uniform3iv(a.locationId, b), e[0] = f, e[1] = g, e[2] = h
                };
                this.commitFunction[pc.UNIFORMTYPE_BVEC3] = this.commitFunction[pc.UNIFORMTYPE_IVEC3];
                this.commitFunction[pc.UNIFORMTYPE_IVEC4] = function(a, b) {
                    e = a.value;
                    f = b[0];
                    g = b[1];
                    h = b[2];
                    m = b[3];
                    if (e[0] !== f || e[1] !== g || e[2] !== h || e[3] !== m) n.uniform4iv(a.locationId, b), e[0] = f, e[1] = g, e[2] = h, e[3] = m
                };
                this.commitFunction[pc.UNIFORMTYPE_BVEC4] = this.commitFunction[pc.UNIFORMTYPE_IVEC4];
                this.commitFunction[pc.UNIFORMTYPE_MAT2] = function(a, b) { n.uniformMatrix2fv(a.locationId, !1, b) };
                this.commitFunction[pc.UNIFORMTYPE_MAT3] = function(a, b) { n.uniformMatrix3fv(a.locationId, !1, b) };
                this.commitFunction[pc.UNIFORMTYPE_MAT4] = function(a, b) { n.uniformMatrix4fv(a.locationId, !1, b) };
                this.commitFunction[pc.UNIFORMTYPE_FLOATARRAY] = function(a, b) { n.uniform1fv(a.locationId, b) };
                this.setBlending(!1);
                this.setBlendFunction(pc.BLENDMODE_ONE, pc.BLENDMODE_ZERO);
                this.setBlendEquation(pc.BLENDEQUATION_ADD);
                this.setColorWrite(!0, !0, !0, !0);
                this.setCullMode(pc.CULLFACE_BACK);
                this.setDepthTest(!0);
                this.setDepthWrite(!0);
                this.setClearDepth(1);
                this.setClearColor(0, 0, 0, 0);
                n.enable(n.SCISSOR_TEST);
                this.programLib = new pc.ProgramLibrary(this);
                for (var w in pc.programlib) this.programLib.register(w, pc.programlib[w]);
                w = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS);
                this.boneLimit = Math.floor((w - 16 - 8 - 1 - 16) / 4);
                this.boneLimit = Math.min(this.boneLimit, 128);
                "Mali-450 MP" === this.unmaskedRenderer ? this.boneLimit = 34 : "Apple A8 GPU" === this.unmaskedRenderer && (this.forceCpuParticles = !0);
                pc.events.attach(this);
                this.boundBuffer = null;
                this.instancedAttribs = {};
                this.activeTexture = 0;
                this.textureUnits = [];
                this.attributesInvalidated = !0;
                this.enabledAttributes = {};
                this._shaderSwitchesPerFrame = this._drawCallsPerFrame = 0;
                this._primsPerFrame = [];
                for (d = pc.PRIMITIVE_POINTS; d <= pc.PRIMITIVE_TRIFAN; d++) this._primsPerFrame[d] = 0;
                this._renderTargetCreationTime = 0;
                this._vram = { tex: 0, vb: 0, ib: 0 };
                this._shaderStats = { vsCompiled: 0, fsCompiled: 0, linked: 0, materialShaders: 0, compileTime: 0 };
                w = n.createBuffer();
                d = new ArrayBuffer(16);
                n.bindBuffer(n.ARRAY_BUFFER, w);
                n.bufferData(n.ARRAY_BUFFER, d, n.STATIC_DRAW);
                n.getError();
                n.vertexAttribPointer(0, 4, n.UNSIGNED_BYTE, !1, 4, 0);
                this.supportsUnsignedByte = 0 === n.getError();
                n.deleteBuffer(w)
            }).call(this)
        };
    n.prototype = {
        updateClientRect: function() { this.clientRect = this.canvas.getBoundingClientRect() },
        setViewport: function(a, b, c, e) { this.gl.viewport(a, b, c, e) },
        setScissor: function(a, b, c, e) { this.gl.scissor(a, b, c, e) },
        getProgramLibrary: function() { return this.programLib },
        setProgramLibrary: function(a) { this.programLib = a },
        updateBegin: function() {
            var a = this.gl;
            this.indexBuffer = this.boundBuffer = null;
            var b = this.renderTarget;
            if (b)
                if (b._glFrameBuffer) a.bindFramebuffer(a.FRAMEBUFFER, b._glFrameBuffer);
                else {
                    b._glFrameBuffer = a.createFramebuffer();
                    a.bindFramebuffer(a.FRAMEBUFFER, b._glFrameBuffer);
                    var c = b._colorBuffer;
                    c._glTextureId || (c._width = Math.min(c.width, this.maxRenderBufferSize), c._height = Math.min(c.height, this.maxRenderBufferSize), this.setTexture(c, 0));
                    a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, c._cubemap ? a.TEXTURE_CUBE_MAP_POSITIVE_X + b._face : a.TEXTURE_2D, c._glTextureId, 0);
                    b._depth && (b._glDepthBuffer || (b._glDepthBuffer = a.createRenderbuffer()), a.bindRenderbuffer(a.RENDERBUFFER, b._glDepthBuffer), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, b.width, b.height), a.bindRenderbuffer(a.RENDERBUFFER, null), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, b._glDepthBuffer));
                    switch (a.checkFramebufferStatus(a.FRAMEBUFFER)) {
                        case a.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                            console.error("ERROR: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
                            break;
                        case a.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                            console.error("ERROR: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
                            break;
                        case a.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                            console.error("ERROR: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
                            break;
                        case a.FRAMEBUFFER_UNSUPPORTED:
                            console.error("ERROR: FRAMEBUFFER_UNSUPPORTED")
                    }
                }
            else a.bindFramebuffer(a.FRAMEBUFFER, null);
            for (a = 0; 16 > a; a++) this.textureUnits[a] = null
        },
        updateEnd: function() {
            var a = this.gl,
                b = this.renderTarget;
            b && (a.bindFramebuffer(a.FRAMEBUFFER, null), b = b._colorBuffer, b._glTextureId && b.autoMipmap && pc.math.powerOfTwo(b._width) && pc.math.powerOfTwo(b._height) && (a.bindTexture(b._glTarget, b._glTextureId), a.generateMipmap(b._glTarget)))
        },
        initializeTexture: function(a) {
            var b = this.gl,
                c;
            a._glTextureId = b.createTexture();
            a._glTarget = a._cubemap ? b.TEXTURE_CUBE_MAP : b.TEXTURE_2D;
            switch (a._format) {
                case pc.PIXELFORMAT_A8:
                    a._glFormat = b.ALPHA;
                    a._glInternalFormat = b.ALPHA;
                    a._glPixelType = b.UNSIGNED_BYTE;
                    break;
                case pc.PIXELFORMAT_L8:
                    a._glFormat = b.LUMINANCE;
                    a._glInternalFormat = b.LUMINANCE;
                    a._glPixelType = b.UNSIGNED_BYTE;
                    break;
                case pc.PIXELFORMAT_L8_A8:
                    a._glFormat = b.LUMINANCE_ALPHA;
                    a._glInternalFormat = b.LUMINANCE_ALPHA;
                    a._glPixelType = b.UNSIGNED_BYTE;
                    break;
                case pc.PIXELFORMAT_R5_G6_B5:
                    a._glFormat = b.RGB;
                    a._glInternalFormat = b.RGB;
                    a._glPixelType = b.UNSIGNED_SHORT_5_6_5;
                    break;
                case pc.PIXELFORMAT_R5_G5_B5_A1:
                    a._glFormat = b.RGBA;
                    a._glInternalFormat = b.RGBA;
                    a._glPixelType = b.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case pc.PIXELFORMAT_R4_G4_B4_A4:
                    a._glFormat = b.RGBA;
                    a._glInternalFormat = b.RGBA;
                    a._glPixelType = b.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case pc.PIXELFORMAT_R8_G8_B8:
                    a._glFormat = b.RGB;
                    a._glInternalFormat = b.RGB;
                    a._glPixelType = b.UNSIGNED_BYTE;
                    break;
                case pc.PIXELFORMAT_R8_G8_B8_A8:
                    a._glFormat = b.RGBA;
                    a._glInternalFormat = b.RGBA;
                    a._glPixelType = b.UNSIGNED_BYTE;
                    break;
                case pc.PIXELFORMAT_DXT1:
                    c = this.extCompressedTextureS3TC;
                    a._glFormat = b.RGB;
                    a._glInternalFormat = c.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    break;
                case pc.PIXELFORMAT_DXT3:
                    c = this.extCompressedTextureS3TC;
                    a._glFormat = b.RGBA;
                    a._glInternalFormat = c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    break;
                case pc.PIXELFORMAT_DXT5:
                    c = this.extCompressedTextureS3TC;
                    a._glFormat = b.RGBA;
                    a._glInternalFormat = c.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    break;
                case pc.PIXELFORMAT_ETC1:
                    c = this.extCompressedTextureETC1;
                    a._glFormat = b.RGB;
                    a._glInternalFormat = c.COMPRESSED_RGB_ETC1_WEBGL;
                    break;
                case pc.PIXELFORMAT_PVRTC_2BPP_RGB_1:
                    c = this.extCompressedTexturePVRTC;
                    a._glFormat = b.RGB;
                    a._glInternalFormat = c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    break;
                case pc.PIXELFORMAT_PVRTC_2BPP_RGBA_1:
                    c = this.extCompressedTexturePVRTC;
                    a._glFormat = b.RGBA;
                    a._glInternalFormat = c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                    break;
                case pc.PIXELFORMAT_PVRTC_4BPP_RGB_1:
                    c = this.extCompressedTexturePVRTC;
                    a._glFormat = b.RGB;
                    a._glInternalFormat = c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    break;
                case pc.PIXELFORMAT_PVRTC_4BPP_RGBA_1:
                    c = this.extCompressedTexturePVRTC;
                    a._glFormat = b.RGBA;
                    a._glInternalFormat = c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    break;
                case pc.PIXELFORMAT_RGB16F:
                    c = this.extTextureHalfFloat;
                    a._glFormat = b.RGB;
                    a._glInternalFormat = b.RGB;
                    a._glPixelType = c.HALF_FLOAT_OES;
                    break;
                case pc.PIXELFORMAT_RGBA16F:
                    c = this.extTextureHalfFloat;
                    a._glFormat = b.RGBA;
                    a._glInternalFormat = b.RGBA;
                    a._glPixelType = c.HALF_FLOAT_OES;
                    break;
                case pc.PIXELFORMAT_RGB32F:
                    a._glFormat = b.RGB;
                    a._glInternalFormat = b.RGB;
                    a._glPixelType = b.FLOAT;
                    break;
                case pc.PIXELFORMAT_RGBA32F:
                    a._glFormat = b.RGBA, a._glInternalFormat = b.RGBA, a._glPixelType = b.FLOAT
            }
        },
        uploadTexture: function(a) {
            for (var b = this.gl, c = 0, e, f; a._levels[c] || 0 === c;) {
                e = a._levels[c];
                1 != c || a._compressed || b.generateMipmap(a._glTarget);
                if (a._cubemap) {
                    var d;
                    b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
                    b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1);
                    if (e[0] instanceof HTMLCanvasElement || e[0] instanceof HTMLImageElement || e[0] instanceof HTMLVideoElement)
                        for (d = 0; 6 > d; d++) a._levelsUpdated[0][d] && (f = e[d], f instanceof HTMLImageElement && (f.width > this.maxCubeMapSize || f.height > this.maxCubeMapSize) && (f = q(f, this.maxCubeMapSize), 0 === c && (a.width = f.width, a.height = f.height)), b.texImage2D(b.TEXTURE_CUBE_MAP_POSITIVE_X +
                            d, c, a._glInternalFormat, a._glFormat, a._glPixelType, f));
                    else
                        for (f = 1 / Math.pow(2, c), d = 0; 6 > d; d++)
                            if (a._levelsUpdated[0][d]) {
                                var g = e[d];
                                a._compressed ? b.compressedTexImage2D(b.TEXTURE_CUBE_MAP_POSITIVE_X + d, c, a._glInternalFormat, Math.max(a._width * f, 1), Math.max(a._height * f, 1), 0, g) : b.texImage2D(b.TEXTURE_CUBE_MAP_POSITIVE_X + d, c, a._glInternalFormat, Math.max(a._width * f, 1), Math.max(a._height * f, 1), 0, a._glFormat, a._glPixelType, g)
                            }
                } else e instanceof HTMLCanvasElement || e instanceof HTMLImageElement || e instanceof
                HTMLVideoElement ? (e instanceof HTMLImageElement && (e.width > this.maxTextureSize || e.height > this.maxTextureSize) && (e = q(e, this.maxTextureSize), 0 === c && (a.width = e.width, a.height = e.height)), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), b.texImage2D(b.TEXTURE_2D, c, a._glInternalFormat, a._glFormat, a._glPixelType, e)) : (b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1), f = 1 / Math.pow(2, c), a._compressed ? b.compressedTexImage2D(b.TEXTURE_2D, c, a._glInternalFormat, Math.max(a._width * f, 1), Math.max(a._height * f, 1), 0, e) : b.texImage2D(b.TEXTURE_2D, c, a._glInternalFormat, Math.max(a._width * f, 1), Math.max(a._height * f, 1), 0, a._glFormat, a._glPixelType, e));
                c++
            }
            if (a._cubemap)
                for (c = 0; 6 > c; c++) a._levelsUpdated[0][c] = !1;
            else a._levelsUpdated[0] = !1;
            a.autoMipmap && pc.math.powerOfTwo(a._width) && pc.math.powerOfTwo(a._height) && 1 === a._levels.length && !a._compressed && b.generateMipmap(a._glTarget);
            a._gpuSize && (this._vram.tex -= a._gpuSize);
            r || (r = {}, r[pc.PIXELFORMAT_A8] = 1, r[pc.PIXELFORMAT_L8] = 1, r[pc.PIXELFORMAT_L8_A8] = 1, r[pc.PIXELFORMAT_R5_G6_B5] = 2, r[pc.PIXELFORMAT_R5_G5_B5_A1] = 2, r[pc.PIXELFORMAT_R4_G4_B4_A4] = 2, r[pc.PIXELFORMAT_R8_G8_B8] = 4, r[pc.PIXELFORMAT_R8_G8_B8_A8] = 4, r[pc.PIXELFORMAT_RGB16F] = 8, r[pc.PIXELFORMAT_RGBA16F] = 8, r[pc.PIXELFORMAT_RGB32F] = 16, r[pc.PIXELFORMAT_RGBA32F] = 16);
            c = 1;
            if (a.autoMipmap || a._minFilter === b.NEAREST_MIPMAP_NEAREST || a._minFilter === b.NEAREST_MIPMAP_LINEAR || a._minFilter === b.LINEAR_MIPMAP_NEAREST || a._minFilter === b.LINEAR_MIPMAP_LINEAR) c = Math.round(Math.log2(Math.max(a._width, a._height)) +
                1);
            b = a._width;
            e = a._height;
            for (f = d = 0; f < c; f++) d = a._compressed ? a._format === pc.PIXELFORMAT_ETC1 ? d + Math.floor((b + 3) / 4) * Math.floor((e + 3) / 4) * 8 : a._format === pc.PIXELFORMAT_PVRTC_2BPP_RGB_1 || a._format === pc.PIXELFORMAT_PVRTC_2BPP_RGBA_1 ? d + Math.max(b, 16) * Math.max(e, 8) / 4 : a._format === pc.PIXELFORMAT_PVRTC_4BPP_RGB_1 || a._format === pc.PIXELFORMAT_PVRTC_4BPP_RGBA_1 ? d + Math.max(b, 8) * Math.max(e, 8) / 2 : d + Math.floor((b + 4 - 1) / 4) * Math.floor((e + 4 - 1) / 4) * (a._format === pc.PIXELFORMAT_DXT1 ? 8 : 16) : d + b * e * r[a._format], b = Math.max(.5 * b, 1), e = Math.max(.5 * e, 1);
            a._cubemap && (d *= 6);
            a._gpuSize = d;
            this._vram.tex += a._gpuSize
        },
        setTexture: function(a, b) {
            var c = this.gl;
            a._glTextureId || this.initializeTexture(a);
            var e = a._minFilterDirty || a._magFilterDirty || a._addressUDirty || a._addressVDirty || a._anisotropyDirty;
            if (this.textureUnits[b] !== a || e) this.activeTexture !== b && (c.activeTexture(c.TEXTURE0 + b), this.activeTexture = b), c.bindTexture(a._glTarget, a._glTextureId), this.textureUnits[b] = a;
            if (e && (a._minFilterDirty && (c.texParameteri(a._glTarget, c.TEXTURE_MIN_FILTER, this.glFilter[a._minFilter]), a._minFilterDirty = !1), a._magFilterDirty && (c.texParameteri(a._glTarget, c.TEXTURE_MAG_FILTER, this.glFilter[a._magFilter]), a._magFilterDirty = !1), a._addressUDirty && (c.texParameteri(a._glTarget, c.TEXTURE_WRAP_S, this.glAddress[a._addressU]), a._addressUDirty = !1), a._addressVDirty && (c.texParameteri(a._glTarget, c.TEXTURE_WRAP_T, this.glAddress[a._addressV]), a._addressVDirty = !1), a._anisotropyDirty)) {
                if (e = this.extTextureFilterAnisotropic) {
                    var f = a.anisotropy,
                        f = Math.min(f, this.maxAnisotropy);
                    c.texParameterf(a._glTarget, e.TEXTURE_MAX_ANISOTROPY_EXT, f)
                }
                a._anisotropyDirty = !1
            }
            a._needsUpload && (this.uploadTexture(a), a._needsUpload = !1)
        },
        draw: function(a, b) {
            var c = this.gl,
                e, f, d, g, h, l, k, n;
            e = this.shader;
            n = e.samplers;
            var m = e.uniforms;
            1 < b && (this.boundBuffer = null, this.attributesInvalidated = !0);
            if (this.attributesInvalidated) {
                g = e.attributes;
                e = 0;
                for (d = g.length; e < d; e++) h = g[e], f = h.scopeId.value, null !== f && (l = this.vertexBuffers[f.stream], l = l.bufferId, this.boundBuffer !== l && (c.bindBuffer(c.ARRAY_BUFFER, l), this.boundBuffer = l), h = h.locationId, this.enabledAttributes[h] || (c.enableVertexAttribArray(h), this.enabledAttributes[h] = !0), c.vertexAttribPointer(h, f.numComponents, this.glType[f.dataType], f.normalize, f.stride, f.offset), 1 === f.stream && 1 < b ? this.instancedAttribs[h] || (this.extInstancing.vertexAttribDivisorANGLE(h, 1), this.instancedAttribs[h] = !0) : this.instancedAttribs[h] && (this.extInstancing.vertexAttribDivisorANGLE(h, 0), this.instancedAttribs[h] = !1));
                this.attributesInvalidated = !1
            }
            var p = 0;
            e = 0;
            for (d = n.length; e < d; e++)
                if (g = n[e], h = g.scopeId.value)
                    if (h instanceof pc.Texture) l = h, this.setTexture(l, p), g.slot !== p && (c.uniform1i(g.locationId, p), g.slot = p), p++;
                    else {
                        g.array.length = 0;
                        k = h.length;
                        for (f = 0; f < k; f++) l = h[f], this.setTexture(l, p), g.array[f] = p, p++;
                        c.uniform1iv(g.locationId, g.array)
                    } e = 0;
            for (d = m.length; e < d; e++)
                if (n = m[e], f = n.scopeId, g = n.version, h = f.versionObject.version, g.globalId !== h.globalId || g.revision !== h.revision)
                    if (g.globalId = h.globalId, g.revision = h.revision, null !== f.value) this.commitFunction[n.dataType](n, f.value);
            this._drawCallsPerFrame++;
            this._primsPerFrame[a.type] += a.count * (1 < b ? b : 1);
            a.indexed ? 1 < b ? (this.extInstancing.drawElementsInstancedANGLE(this.glPrimitive[a.type], a.count, this.indexBuffer.glFormat, 2 * a.base, b), this.boundBuffer = null, this.attributesInvalidated = !0) : c.drawElements(this.glPrimitive[a.type], a.count, this.indexBuffer.glFormat, a.base * this.indexBuffer.bytesPerIndex) : 1 < b ? (this.extInstancing.drawArraysInstancedANGLE(this.glPrimitive[a.type], a.base, a.count, b), this.boundBuffer = null, this.attributesInvalidated = !0) : c.drawArrays(this.glPrimitive[a.type], a.base, a.count)
        },
        clear: function(a) {
            var b = this.defaultClearOptions;
            a = a || b;
            var c = void 0 === a.flags ? b.flags : a.flags;
            if (0 !== c) {
                var e = this.gl;
                if (c & pc.CLEARFLAG_COLOR) {
                    var f = void 0 === a.color ? b.color : a.color;
                    this.setClearColor(f[0], f[1], f[2], f[3])
                }
                c & pc.CLEARFLAG_DEPTH && (this.setClearDepth(void 0 === a.depth ? b.depth : a.depth), this.depthWrite || e.depthMask(!0));
                e.clear(this.glClearFlag[c]);
                c & pc.CLEARFLAG_DEPTH && (this.depthWrite || e.depthMask(!1))
            }
        },
        readPixels: function(a, b, c, e, f) {
            var d = this.gl;
            d.readPixels(a, b, c, e, d.RGBA, d.UNSIGNED_BYTE, f)
        },
        setClearDepth: function(a) { a !== this.clearDepth && (this.gl.clearDepth(a), this.clearDepth = a) },
        setClearColor: function(a, b, c, e) { if (a !== this.clearRed || b !== this.clearGreen || c !== this.clearBlue || e !== this.clearAlpha) this.gl.clearColor(a, b, c, e), this.clearRed = a, this.clearGreen = b, this.clearBlue = c, this.clearAlpha = e },
        setRenderTarget: function(a) { this.renderTarget = a },
        getRenderTarget: function() { return this.renderTarget },
        getDepthTest: function() { return this.depthTest },
        setDepthTest: function(a) {
            if (this.depthTest !== a) {
                var b = this.gl;
                a ? b.enable(b.DEPTH_TEST) : b.disable(b.DEPTH_TEST);
                this.depthTest = a
            }
        },
        getDepthWrite: function() { return this.depthWrite },
        setDepthWrite: function(a) { this.depthWrite !== a && (this.gl.depthMask(a), this.depthWrite = a) },
        setColorWrite: function(a, b, c, e) { if (this.writeRed !== a || this.writeGreen !== b || this.writeBlue !== c || this.writeAlpha !== e) this.gl.colorMask(a, b, c, e), this.writeRed = a, this.writeGreen = b, this.writeBlue = c, this.writeAlpha = e },
        getBlending: function() { return this.blending },
        setBlending: function(a) {
            if (this.blending !== a) {
                var b = this.gl;
                a ? b.enable(b.BLEND) : b.disable(b.BLEND);
                this.blending = a
            }
        },
        setBlendFunction: function(a, b) { if (this.blendSrc !== a || this.blendDst !== b) this.gl.blendFunc(this.glBlendFunction[a], this.glBlendFunction[b]), this.blendSrc = a, this.blendDst = b },
        setBlendEquation: function(a) { this.blendEquation !== a && (this.gl.blendEquation(this.glBlendEquation[a]), this.blendEquation = a) },
        setCullMode: function(a) {
            if (this.cullMode !== a) {
                var b = this.gl;
                switch (a) {
                    case pc.CULLFACE_NONE:
                        b.disable(b.CULL_FACE);
                        break;
                    case pc.CULLFACE_FRONT:
                        b.enable(b.CULL_FACE);
                        b.cullFace(b.FRONT);
                        break;
                    case pc.CULLFACE_BACK:
                        b.enable(b.CULL_FACE);
                        b.cullFace(b.BACK);
                        break;
                    case pc.CULLFACE_FRONTANDBACK:
                        b.enable(b.CULL_FACE), b.cullFace(b.FRONT_AND_BACK)
                }
                this.cullMode = a
            }
        },
        getCullMode: function() { return this.cullMode },
        setIndexBuffer: function(a) {
            if (this.indexBuffer !== a) {
                this.indexBuffer = a;
                var b = this.gl;
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, a ? a.bufferId : null)
            }
        },
        setVertexBuffer: function(a, b) {
            if (this.vertexBuffers[b] !== a) {
                this.vertexBuffers[b] = a;
                for (var c = 0, e = a.getFormat().elements, f = e.length; c < f;) {
                    var d = e[c++];
                    d.stream = b;
                    d.scopeId.setValue(d)
                }
                this.attributesInvalidated = !0
            }
        },
        setShader: function(a) { a !== this.shader && (this.shader = a, a.ready || a.link(), this._shaderSwitchesPerFrame++, this.gl.useProgram(a.program), this.attributesInvalidated = !0) },
        getHdrFormat: function() { return this.extTextureHalfFloatRenderable ? pc.PIXELFORMAT_RGB16F : this.extTextureFloatRenderable ? pc.PIXELFORMAT_RGB32F : pc.PIXELFORMAT_R8_G8_B8_A8 },
        getBoneLimit: function() { return this.boneLimit },
        setBoneLimit: function(a) { this.boneLimit = a },
        enableValidation: function(a) { console.warn("enableValidation: This function is deprecated and will be removed shortly.") },
        validate: function() { console.warn("validate: This function is deprecated and will be removed shortly.") },
        resizeCanvas: function(a, b) {
            this._width = a;
            this._height = b;
            var c = Math.min(this._maxPixelRatio, window.devicePixelRatio);
            a *= c;
            b *= c;
            this.canvas.width = a;
            this.canvas.height = b;
            this.fire("resizecanvas", a, b)
        }
    };
    Object.defineProperty(n.prototype, "width", { get: function() { return this.gl.drawingBufferWidth || this.canvas.width } });
    Object.defineProperty(n.prototype, "height", { get: function() { return this.gl.drawingBufferHeight || this.canvas.height } });
    Object.defineProperty(n.prototype, "fullscreen", { get: function() { return !!document.fullscreenElement }, set: function(a) { a ? this.gl.canvas.requestFullscreen() : document.exitFullscreen() } });
    Object.defineProperty(n.prototype, "maxAnisotropy", {
        get: function() {
            var a;
            return function() {
                if (void 0 === a) {
                    a = 1;
                    var b = this.gl,
                        c = this.extTextureFilterAnisotropic;
                    c && (a = b.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT))
                }
                return a
            }
        }()
    });
    Object.defineProperty(n.prototype, "maxPixelRatio", {
        get: function() { return this._maxPixelRatio },
        set: function(a) {
            this._maxPixelRatio = a;
            this.resizeCanvas(this._width, this._height)
        }
    });
    return { UnsupportedBrowserError: d, ContextCreationError: a, GraphicsDevice: n, precalculatedTangents: !0 }
}());
pc.extend(pc, function() {
    var d = {},
        a = {};
    d.collectAttribs = function(a) {
        for (var c = {}, e = 0, f = a.indexOf("attribute"); 0 <= f;) {
            var d = a.indexOf(";", f),
                h = a.lastIndexOf(" ", d),
                d = a.substr(h + 1, d - (h + 1));
            "aPosition" == d ? c.aPosition = pc.SEMANTIC_POSITION : (c[d] = "ATTR" + e, e++);
            f = a.indexOf("attribute", f + 1)
        }
        return c
    };
    d.createShader = function(a, c, e) {
        c = d[c];
        e = pc.programlib.getSnippet(a, "fs_precision") + "\n" + d[e];
        var f = this.collectAttribs(c);
        return new pc.Shader(a, { attributes: f, vshader: c, fshader: e })
    };
    d.createShaderFromCode = function(b, c, e, f) {
        var d = a[f];
        if (void 0 !== d) return d;
        e = pc.programlib.getSnippet(b, "fs_precision") + "\n" + e;
        d = this.collectAttribs(c);
        a[f] = new pc.Shader(b, { attributes: d, vshader: c, fshader: e });
        return a[f]
    };
    return { shaderChunks: d }
}());
pc.extend(pc, function() {
    var d = null;
    return {
        drawQuadWithShader: function(a, b, c, e, f) {
            if (null === d) {
                var g = new pc.VertexFormat(a, [{ semantic: pc.SEMANTIC_POSITION, components: 2, type: pc.ELEMENTTYPE_FLOAT32 }]);
                d = new pc.VertexBuffer(a, g, 4);
                g = new pc.VertexIterator(d);
                g.element[pc.SEMANTIC_POSITION].set(-1, -1);
                g.next();
                g.element[pc.SEMANTIC_POSITION].set(1, -1);
                g.next();
                g.element[pc.SEMANTIC_POSITION].set(-1, 1);
                g.next();
                g.element[pc.SEMANTIC_POSITION].set(1, 1);
                g.end()
            }
            a.setRenderTarget(b);
            a.updateBegin();
            var h, m, l, p;
            e ? (b = e.x, h = e.y, g = e.z, e = e.w) : (g = null !== b ? b.width : a.width, e = null !== b ? b.height : a.height, h = b = 0);
            f ? (m = f.x, l = f.y, p = f.z, f = f.w) : (m = b, l = h, p = g, f = e);
            a.setViewport(b, h, g, e);
            a.setScissor(m, l, p, f);
            f = a.getDepthTest();
            g = a.getDepthWrite();
            a.setDepthTest(!1);
            a.setDepthWrite(!1);
            a.setBlending(!1);
            a.setVertexBuffer(d, 0);
            a.setShader(c);
            a.draw({ type: pc.PRIMITIVE_TRISTRIP, base: 0, count: 4, indexed: !1 });
            a.setDepthTest(f);
            a.setDepthWrite(g);
            a.updateEnd()
        }
    }
}());
pc.extend(pc, function() {
    function d() { for (var a = Date.now() + 10; Date.now() < a;); }

    function a(a, b, f) {
        var d = b._colorBuffer;
        if (d.format == pc.PIXELFORMAT_R8_G8_B8_A8) {
            var h = new Uint8Array(d.width * d.height * 4);
            a = a.gl;
            a.bindFramebuffer(a.FRAMEBUFFER, b._glFrameBuffer);
            a.readPixels(0, 0, d.width, d.height, a.RGBA, a.UNSIGNED_BYTE, h);
            d._levels || (d._levels = []);
            d._levels[0] || (d._levels[0] = []);
            d._levels[0][f] = h
        }
    }

    function b(a, b) { return Math.atan2(a * b, Math.sqrt(a * a + b * b + 1)) }
    return {
        prefilterCubemap: function(b) {
            var e = b.device,
                f = b.sourceCubemap,
                g = b.method,
                h = b.samples,
                m = b.cpuSync,
                l = b.chromeFix;
            if (m && !f._levels[0]) console.error("ERROR: prefilter: cubemap must have _levels");
            else {
                var p = pc.shaderChunks,
                    k = f.rgbm,
                    h = p.createShaderFromCode(e, p.fullscreenQuadVS, p.rgbmPS + p.prefilterCubemapPS.replace(/\$METHOD/g, 0 === g ? "cos" : "phong").replace(/\$NUMSAMPLES/g, h).replace(/\$textureCube/g, k ? "textureCubeRGBM" : "textureCube"), "prefilter" + g + "" + h + "" + k),
                    q = p.createShaderFromCode(e, p.fullscreenQuadVS, p.outputCubemapPS, "outputCubemap"),
                    r = e.scope.resolve("source"),
                    n = e.scope.resolve("params"),
                    t = new pc.Vec4,
                    w = f.width,
                    p = f.format,
                    y = [
                        [], b.filteredFixed, b.filteredRgbm, b.filteredFixedRgbm
                    ],
                    x = 0 === g ? [.9, .85, .7, .4, .25] : [512, 128, 32, 8, 2],
                    v = [64, 32, 16, 8, 4],
                    z, u, A;
                u = p === pc.PIXELFORMAT_R8_G8_B8;
                z = !1;
                var B;
                m && (z = f._levels[0][0] instanceof HTMLImageElement);
                if ((u || z) && m) {
                    p = pc.PIXELFORMAT_R8_G8_B8_A8;
                    B = new pc.gfx.Texture(e, { cubemap: !0, rgbm: k, format: p, width: w, height: w, autoMipmap: !1 });
                    B.minFilter = pc.FILTER_LINEAR;
                    B.magFilter = pc.FILTER_LINEAR;
                    B.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                    B.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                    for (A = 0; 6 > A; A++) z = new pc.RenderTarget(e, B, { face: A, depth: !1 }), t.x = A, t.y = 0, r.setValue(f), n.setValue(t.data), l && d(), pc.drawQuadWithShader(e, z, q), a(e, z, A);
                    f = B
                }
                if (128 < w) {
                    var C = Math.round(Math.log2(w)) - Math.round(Math.log2(128));
                    for (u = 0; u < C; u++) {
                        var w = .5 * f.width,
                            E = 0 === g ? 1 : Math.pow(2, Math.round(Math.log2(x[0]) + 2 * (C - u)));
                        B = new pc.gfx.Texture(e, { cubemap: !0, rgbm: k, format: p, width: w, height: w, autoMipmap: !1 });
                        B.minFilter = pc.FILTER_LINEAR;
                        B.magFilter = pc.FILTER_LINEAR;
                        B.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                        B.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                        for (A = 0; 6 > A; A++) z = new pc.RenderTarget(e, B, { face: A, depth: !1 }), t.x = A, t.y = E, t.z = w, t.w = k ? 3 : 0, r.setValue(f), n.setValue(t.data), l && d(), pc.drawQuadWithShader(e, z, q), u === C - 1 && m && a(e, z, A);
                        f = B
                    }
                }
                b.sourceCubemap = f;
                B = null;
                if (!k && b.filteredFixedRgbm)
                    for (B = new pc.gfx.Texture(e, { cubemap: !0, rgbm: !0, format: pc.PIXELFORMAT_R8_G8_B8_A8, width: w, height: w, autoMipmap: !1 }), B.minFilter = pc.FILTER_LINEAR, B.magFilter = pc.FILTER_LINEAR, B.addressU = pc.ADDRESS_CLAMP_TO_EDGE, B.addressV = pc.ADDRESS_CLAMP_TO_EDGE, A = 0; 6 > A; A++) z = new pc.RenderTarget(e, B, { face: A, depth: !1 }), t.x = A, t.w = 2, r.setValue(f), n.setValue(t.data), l && d(), pc.drawQuadWithShader(e, z, q), a(e, z, A);
                w = 0 === g ? 1 : 2048;
                z = 0 === g ? 0 : -1;
                y[z] = [];
                for (u = 0; 5 > u; u++)
                    for (q = z; q < y.length; q++) null != y[q] && (y[q][u] = new pc.gfx.Texture(e, { cubemap: !0, rgbm: 2 > q ? k : !0, format: 2 > q ? p : pc.PIXELFORMAT_R8_G8_B8_A8, fixCubemapSeams: 1 === q || 3 === q, width: v[u], height: v[u], autoMipmap: !1 }), y[q][u].minFilter = pc.FILTER_LINEAR, y[q][u].magFilter = pc.FILTER_LINEAR, y[q][u].addressU = pc.ADDRESS_CLAMP_TO_EDGE, y[q][u].addressV = pc.ADDRESS_CLAMP_TO_EDGE);
                for (q = z; q < y.length; q++)
                    if (null != y[q])
                        if (1 < q && k) y[q] = y[q - 2];
                        else
                            for (u = 0; 5 > u; u++)
                                for (A = 0; 6 > A; A++) z = new pc.RenderTarget(e, y[q][u], { face: A, depth: !1 }), t.x = A, t.y = 0 > q ? w : x[u], t.z = v[u], t.w = k ? 3 : q, r.setValue(0 === u ? f : 0 === g ? y[0][u - 1] : y[-1][u - 1]), n.setValue(t.data), l && d(), pc.drawQuadWithShader(e, z, h), m && a(e, z, A);
                b.filtered = y[0];
                if (m && b.singleFilteredFixed) {
                    f = [f, b.filteredFixed[0], b.filteredFixed[1], b.filteredFixed[2], b.filteredFixed[3], b.filteredFixed[4], b.filteredFixed[5]];
                    k = new pc.gfx.Texture(e, { cubemap: !0, rgbm: k, fixCubemapSeams: !0, format: p, width: 128, height: 128, autoMipmap: !1 });
                    for (u = 0; 6 > u; u++) k._levels[u] = f[u]._levels[0];
                    k.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                    k.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                    k.upload();
                    k.minFilter = pc.FILTER_LINEAR_MIPMAP_LINEAR;
                    k.magFilter = pc.FILTER_LINEAR;
                    k._prefilteredMips = !0;
                    b.singleFilteredFixed = k
                }
                if (m && b.singleFilteredFixedRgbm && b.filteredFixedRgbm) {
                    f = [B, b.filteredFixedRgbm[0], b.filteredFixedRgbm[1], b.filteredFixedRgbm[2], b.filteredFixedRgbm[3], b.filteredFixedRgbm[4], b.filteredFixedRgbm[5]];
                    k = new pc.gfx.Texture(e, { cubemap: !0, rgbm: !0, fixCubemapSeams: !0, format: pc.PIXELFORMAT_R8_G8_B8_A8, width: 128, height: 128, autoMipmap: !1 });
                    for (u = 0; 6 > u; u++) k._levels[u] = f[u]._levels[0];
                    k.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                    k.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                    k.upload();
                    k.minFilter = pc.FILTER_LINEAR_MIPMAP_LINEAR;
                    k.magFilter = pc.FILTER_LINEAR;
                    k._prefilteredMips = !0;
                    b.singleFilteredFixedRgbm = k
                }
            }
        },
        shFromCubemap: function(a, e) {
            var f, d = a.width,
                h, m;
            if (a.format != pc.PIXELFORMAT_R8_G8_B8_A8) console.error("ERROR: SH: cubemap must be RGBA8");
            else {
                if (a._levels[0]) {
                    if (!a._levels[0][0].length)
                        if (a._levels[0][0] instanceof HTMLImageElement) {
                            h = pc.Application.getApplication().graphicsDevice;
                            m = h.gl;
                            f = pc.shaderChunks;
                            var l = f.createShaderFromCode(h, f.fullscreenQuadVS, f.fullscreenQuadPS, "fsQuadSimple"),
                                p = h.scope.resolve("source");
                            for (f = 0; 6 > f; f++) {
                                var k = a._levels[0][f],
                                    q = new pc.gfx.Texture(h, { cubemap: !1, rgbm: !1, format: a.format, width: d, height: d, autoMipmap: !1 });
                                q.minFilter = pc.FILTER_NEAREST;
                                q.magFilter = pc.FILTER_NEAREST;
                                q.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                                q.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                                q._levels[0] = k;
                                q.upload();
                                k = new pc.gfx.Texture(h, { cubemap: !1, rgbm: !1, format: a.format, width: d, height: d, autoMipmap: !1 });
                                k.minFilter = pc.FILTER_NEAREST;
                                k.magFilter = pc.FILTER_NEAREST;
                                k.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                                k.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                                k = new pc.RenderTarget(h, k, { depth: !1 });
                                p.setValue(q);
                                pc.drawQuadWithShader(h, k, l);
                                var r = new Uint8Array(d * d * 4);
                                m.bindFramebuffer(m.FRAMEBUFFER, k._glFrameBuffer);
                                m.readPixels(0, 0, q.width, q.height, m.RGBA, m.UNSIGNED_BYTE, r);
                                a._levels[0][f] = r
                            }
                        } else { console.error("ERROR: SH: cubemap must be composed of arrays or images"); return } l = [];
                    for (m = 0; m < d; m++)
                        for (h = 0; h < d; h++) l[m * d + h] = (new pc.Vec3(h / (d - 1) * 2 - 1, m / (d - 1) * 2 - 1, 1)).normalize();
                    var p = new Float32Array(27),
                        n, t, w, y, x, v, z, u, A, B, C;
                    for (f = k = 0; 6 > f; f++)
                        for (m = 0; m < d; m++)
                            for (h = 0; h < d; h++) {
                                q = m * d + h;
                                r = h;
                                z = m;
                                u = d;
                                t = (2 * (r + .5) / u - 1) * (1 - 1 / u);
                                C = (2 * (z + .5) / u - 1) * (1 - 1 / u);
                                n = 1 / u;
                                A = t - n;
                                B = C - n;
                                t += n;
                                C += n;
                                A = b(A, B) - b(A, C) - b(t, B) + b(t, C);
                                if (0 === r && 0 === z || r === u - 1 && 0 === z || 0 === r && z === u - 1 || r === u - 1 && z === u - 1) A /= 3;
                                else if (0 === r || 0 === z || r === u - 1 || z === u - 1) A *= .5;
                                r = A;
                                z = 4 * r / 17;
                                u = 8 * r / 17;
                                A = 15 * r / 17;
                                B = 5 * r / 68;
                                C = 15 * r / 68;
                                n = l[q];
                                0 == f ? (y = n.z, x = -n.y, v = -n.x) : 1 == f ? (y = -n.z, x = -n.y, v = n.x) : 2 == f ? (y = n.x, x = n.z, v = n.y) : 3 == f ? (y = n.x, x = -n.z, v = -n.y) : 4 == f ? (y = n.x, x = -n.y, v = n.z) : 5 == f && (y = -n.x, x = -n.y, v = -n.z);
                                e || (y = -y);
                                t = a._levels[0][f][4 * q + 3] / 255;
                                for (n = 0; 3 > n; n++) w = a._levels[0][f][4 * q + n] / 255, a.rgbm ? (w *= 8 * t, w *= w) : w = Math.pow(w, 2.2), p[0 + n] += w * z, p[3 + n] += w * u * y, p[6 + n] += w * u * x, p[9 + n] += w * u * v, p[12 + n] += w * A * y * v, p[15 + n] += w * A * v * x, p[18 + n] += w * A * x * y, p[21 + n] += w * B * (3 * v * v - 1), p[24 + n] += w * C * (y * y - x * x), k += r
                            }
                    for (n = 0; n < p.length; n++) p[n] *= 4 * Math.PI / k;
                    return p
                }
                console.error("ERROR: SH: cubemap must be synced to CPU")
            }
        }
    }
}());
pc.extend(pc, function() {
    return {
        paraboloidFromCubemap: function(d, a, b, c) {
            var e = pc.shaderChunks,
                e = e.createShaderFromCode(d, e.fullscreenQuadVS, (a.fixCubemapSeams ? e.fixCubemapSeamsStretchPS : e.fixCubemapSeamsNonePS) + e.genParaboloidPS, "genParaboloid"),
                f = d.scope.resolve("source"),
                g = d.scope.resolve("params"),
                h = new pc.Vec4,
                m = a.width,
                l = a.rgbm,
                p = a.format,
                m = 2 * Math.max(m, 8),
                m = new pc.gfx.Texture(d, { rgbm: l, format: p, width: 2 * m, height: m, autoMipmap: !1 });
            m.minFilter = pc.FILTER_LINEAR;
            m.magFilter = pc.FILTER_LINEAR;
            m.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
            m.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
            l = new pc.RenderTarget(d, m, { depth: !1 });
            h.x = b;
            h.y = c ? -1 : 1;
            f.setValue(a);
            g.setValue(h.data);
            pc.drawQuadWithShader(d, l, e);
            return m
        },
        generateDpAtlas: function(d, a, b) {
            var c, e;
            e = new pc.Vec4;
            var f = new pc.Vec4,
                g = 4 * a[0].width,
                h = pc.shaderChunks,
                h = h.createShaderFromCode(d, h.fullscreenQuadVS, h.dpAtlasQuadPS, "dpAtlasQuad"),
                m = d.scope.resolve("source"),
                l = d.scope.resolve("params"),
                p = new pc.gfx.Texture(d, { rgbm: a[0].rgbm, format: a[0].format, width: g, height: g, autoMipmap: !1 });
            p.minFilter = pc.FILTER_LINEAR;
            p.magFilter = pc.FILTER_LINEAR;
            p.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
            p.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
            for (var k = new pc.RenderTarget(d, p, { depth: !1 }), q = (g + 2) / g - 1, r = 0; 6 > r; r++) {
                c = pc.paraboloidFromCubemap(d, a[r], r, b);
                m.setValue(c);
                c = e;
                var n = r;
                c.x = .5 * pc.math.clamp(n - 2, 0, 1);
                var n = n - 6 * c.x,
                    t = 1 - c.x;
                c.y = Math.min(.5 * n, .75) * t + c.x;
                c.z = (1 - .5 * pc.math.clamp(n, 0, 1)) * t;
                c.w = .5 * c.z;
                c = 1 / c.z;
                f.x = c * q;
                f.y = 2 * f.x;
                f.x += 1;
                f.y += 1;
                l.setValue(f.data);
                e.x *= g;
                e.y *= g;
                e.z *= g;
                e.w *= g;
                pc.drawQuadWithShader(d, k, h, e)
            }
            return p
        }
    }
}());
pc.shaderChunks.TBNPS = "void getTBN() {\n    dTBN = mat3(normalize(vTangentW), normalize(vBinormalW), normalize(vNormalW));\n}\n\n";
pc.shaderChunks.TBNfastPS = "void getTBN() {\n    dTBN = mat3((vTangentW), (vBinormalW), (vNormalW));\n}\n\n";
pc.shaderChunks.ambientConstantPS = "\nvoid addAmbient() {\n    dDiffuseLight += light_globalAmbient;\n}\n";
pc.shaderChunks.ambientPrefilteredCubePS = "void addAmbient() {\n    vec3 fixedReflDir = fixSeamsStatic(dNormalW, 1.0 - 1.0 / 4.0);\n    fixedReflDir.x *= -1.0;\n    dDiffuseLight += processEnvironment($DECODE(textureCube(texture_prefilteredCubeMap4, fixedReflDir)).rgb);\n}\n\n";
pc.shaderChunks.ambientPrefilteredCubeLodPS = "void addAmbient() {\n    vec3 fixedReflDir = fixSeamsStatic(dNormalW, 1.0 - 1.0 / 4.0);\n    fixedReflDir.x *= -1.0;\n    dDiffuseLight += processEnvironment($DECODE( textureCubeLodEXT(texture_prefilteredCubeMap128, fixedReflDir, 5.0) ).rgb);\n}\n\n";
pc.shaderChunks.ambientSHPS = "uniform vec3 ambientSH[9];\nvoid addAmbient() {\n    vec3 n = dNormalW;\n\n    vec3 color =\n                        ambientSH[0] +\n                        ambientSH[1] * n.x +\n                        ambientSH[2] * n.y +\n                        ambientSH[3] * n.z +\n                        ambientSH[4] * n.x * n.z +\n                        ambientSH[5] * n.z * n.y +\n                        ambientSH[6] * n.y * n.x +\n                        ambientSH[7] * (3.0 * n.z * n.z - 1.0) +\n                        ambientSH[8] * (n.x * n.x - n.y * n.y);\n\n    dDiffuseLight += processEnvironment(max(color, vec3(0.0)));\n}\n\n";
pc.shaderChunks.aoSpecOccPS = "uniform float material_occludeSpecularIntensity;\nvoid occludeSpecular() {\n    // approximated specular occlusion from AO\n    float specPow = exp2(dGlossiness * 11.0);\n    // http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx\n    float specOcc = saturate(pow(dot(dNormalW, dViewDirW) + dAo, 0.01*specPow) - 1.0 + dAo);\n    specOcc = mix(1.0, specOcc, material_occludeSpecularIntensity);\n\n    dSpecularLight *= specOcc;\n    dReflection *= specOcc;\n}\n\n";
pc.shaderChunks.aoSpecOccConstPS = "void occludeSpecular() {\n    // approximated specular occlusion from AO\n    float specPow = exp2(dGlossiness * 11.0);\n    // http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx\n    float specOcc = saturate(pow(dot(dNormalW, dViewDirW) + dAo, 0.01*specPow) - 1.0 + dAo);\n\n    dSpecularLight *= specOcc;\n    dReflection *= specOcc;\n}\n\n";
pc.shaderChunks.aoSpecOccConstSimplePS = "void occludeSpecular() {\n    float specOcc = dAo;\n    dSpecularLight *= specOcc;\n    dReflection *= specOcc;\n}\n\n";
pc.shaderChunks.aoSpecOccSimplePS = "uniform float material_occludeSpecularIntensity;\nvoid occludeSpecular() {\n    float specOcc = mix(1.0, dAo, material_occludeSpecularIntensity);\n    dSpecularLight *= specOcc;\n    dReflection *= specOcc;\n}\n\n";
pc.shaderChunks.aoTexPS = "uniform sampler2D texture_aoMap;\nvoid applyAO() {\n    dAo = texture2D(texture_aoMap, $UV).$CH;\n    dDiffuseLight *= dAo;\n}\n\n";
pc.shaderChunks.aoVertPS = "void applyAO() {\n    dAo = saturate(vVertexColor.$CH);\n    dDiffuseLight *= dAo;\n}\n\n";
pc.shaderChunks.bakeLmEndPS = "\ngl_FragColor.rgb = dDiffuseLight;\ngl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(0.5));\ngl_FragColor.rgb /= 8.0;\ngl_FragColor.a = clamp( max( max( gl_FragColor.r, gl_FragColor.g ), max( gl_FragColor.b, 1.0 / 255.0 ) ), 0.0,1.0 );\ngl_FragColor.a = ceil(gl_FragColor.a * 255.0) / 255.0;\ngl_FragColor.rgb /= gl_FragColor.a;\n\n";
pc.shaderChunks.basePS = "\nuniform vec3 view_position;\n\nuniform vec3 light_globalAmbient;\n\nfloat square(float x) {\n    return x*x;\n}\n\nfloat saturate(float x) {\n    return clamp(x, 0.0, 1.0);\n}\n\nvec3 saturate(vec3 x) {\n    return clamp(x, vec3(0.0), vec3(1.0));\n}\n\n";
pc.shaderChunks.baseVS = "\nattribute vec3 vertex_position;\nattribute vec3 vertex_normal;\nattribute vec4 vertex_tangent;\nattribute vec2 vertex_texCoord0;\nattribute vec2 vertex_texCoord1;\nattribute vec4 vertex_color;\n\nuniform mat4 matrix_viewProjection;\nuniform mat4 matrix_model;\nuniform mat3 matrix_normal;\n\nvec3 dPositionW;\nmat4 dModelMatrix;\nmat3 dNormalMatrix;\nvec3 dLightPosW;\nvec3 dLightDirNormW;\nvec3 dNormalW;\n\n";
pc.shaderChunks.blurVSMPS = "\nvarying vec2 vUv0;\nuniform sampler2D source;\nuniform vec2 pixelOffset;\n\n#ifdef GAUSS\nuniform float weight[SAMPLES];\n#endif\n\n#ifdef PACKED\nfloat decodeFloatRG(vec2 rg) {\n    return rg.y*(1.0/255.0) + rg.x;\n}\n\nvec2 encodeFloatRG( float v ) {\n  vec2 enc = vec2(1.0, 255.0) * v;\n  enc = fract(enc);\n  enc -= enc.yy * vec2(1.0/255.0, 1.0/255.0);\n  return enc;\n}\n#endif\n\nvoid main(void) {\n    vec3 moments = vec3(0.0);\n    vec2 uv = vUv0 - pixelOffset * (float(SAMPLES) * 0.5);\n    for(int i=0; i<SAMPLES; i++) {\n        vec4 c = texture2D(source, uv + pixelOffset * float(i));\n\n        #ifdef PACKED\n        c.xy = vec2(decodeFloatRG(c.xy), decodeFloatRG(c.zw));\n        #endif\n\n        #ifdef GAUSS\n        moments += c.xyz * weight[i];\n        #else\n        moments += c.xyz;\n        #endif\n    }\n\n    #ifndef GAUSS\n    moments /= float(SAMPLES);\n    #endif\n\n    #ifdef PACKED\n    gl_FragColor = vec4(encodeFloatRG(moments.x), encodeFloatRG(moments.y));\n    #else\n    gl_FragColor = vec4(moments.x, moments.y, moments.z, 1.0);\n    #endif\n}\n\n";
pc.shaderChunks.combineDiffusePS = "vec3 combineColor() {\n    return dAlbedo * dDiffuseLight;\n}\n\n";
pc.shaderChunks.combineDiffuseSpecularPS = "vec3 combineColor() {\n    return mix(dAlbedo * dDiffuseLight, dSpecularLight + dReflection.rgb * dReflection.a, dSpecularity);\n}\n\n";
pc.shaderChunks.combineDiffuseSpecularNoConservePS = "vec3 combineColor() {\n    return dAlbedo * dDiffuseLight + (dSpecularLight + dReflection.rgb * dReflection.a) * dSpecularity;\n}\n\n";
pc.shaderChunks.combineDiffuseSpecularNoReflPS = "vec3 combineColor() {\n    return dAlbedo * dDiffuseLight + dSpecularLight * dSpecularity;\n}\n\n";
pc.shaderChunks.combineDiffuseSpecularNoReflSeparateAmbientPS = "uniform vec3 material_ambient;\nvec3 combineColor() {\n    return (dDiffuseLight - light_globalAmbient) * dAlbedo + dSpecularLight * dSpecularity + material_ambient * light_globalAmbient;\n}\n\n";
pc.shaderChunks.combineDiffuseSpecularOldPS = "vec3 combineColor() {\n    return mix(dAlbedo * dDiffuseLight + dSpecularLight * dSpecularity, dReflection.rgb, dReflection.a);\n}\n\n";
pc.shaderChunks.cubeMapProjectBoxPS = "uniform vec3 envBoxMin, envBoxMax;\n\nvec3 cubeMapProject(vec3 nrdir) {\n    vec3 rbmax = (envBoxMax - vPositionW) / nrdir;\n    vec3 rbmin = (envBoxMin - vPositionW) / nrdir;\n\n    vec3 rbminmax;\n    rbminmax.x = nrdir.x>0.0? rbmax.x : rbmin.x;\n    rbminmax.y = nrdir.y>0.0? rbmax.y : rbmin.y;\n    rbminmax.z = nrdir.z>0.0? rbmax.z : rbmin.z;\n\n    float fa = min(min(rbminmax.x, rbminmax.y), rbminmax.z);\n\n    vec3 posonbox = vPositionW + nrdir * fa;\n    vec3 envBoxPos = (envBoxMin + envBoxMax) * 0.5;\n    return posonbox - envBoxPos;\n}\n\n";
pc.shaderChunks.cubeMapProjectNonePS = "vec3 cubeMapProject(vec3 dir) {\n    return dir;\n}\n\n";
pc.shaderChunks.diffuseConstPS = "uniform vec3 material_diffuse;\nvoid getAlbedo() {\n    dAlbedo = material_diffuse.rgb;\n}\n\n";
pc.shaderChunks.diffuseTexPS = "uniform sampler2D texture_diffuseMap;\nvoid getAlbedo() {\n    dAlbedo = texture2DSRGB(texture_diffuseMap, $UV).$CH;\n}\n\n";
pc.shaderChunks.diffuseTexConstPS = "uniform sampler2D texture_diffuseMap;\nuniform vec3 material_diffuse;\nvoid getAlbedo() {\n    dAlbedo = texture2DSRGB(texture_diffuseMap, $UV).$CH * material_diffuse;\n}\n\n";
pc.shaderChunks.diffuseVertPS = "void getAlbedo() {\n    dAlbedo = gammaCorrectInput(saturate(vVertexColor.$CH));\n}\n\n";
pc.shaderChunks.diffuseVertConstPS = "uniform vec3 material_diffuse;\nvoid getAlbedo() {\n    dAlbedo = gammaCorrectInput(saturate(vVertexColor.$CH)) * material_diffuse;\n}\n\n";
pc.shaderChunks.dilatePS = "varying vec2 vUv0;\nuniform sampler2D source;\nuniform vec2 pixelOffset;\nvoid main(void) {\n    vec4 c = texture2D(source, vUv0);\n    c = c.a>0.0? c : texture2D(source, vUv0 - pixelOffset);\n    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(0, -pixelOffset.y));\n    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(pixelOffset.x, -pixelOffset.y));\n    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(-pixelOffset.x, 0));\n    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(pixelOffset.x, 0));\n    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(-pixelOffset.x, pixelOffset.y));\n    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(0, pixelOffset.y));\n    c = c.a>0.0? c : texture2D(source, vUv0 + pixelOffset);\n    gl_FragColor = c;\n}\n\n";
pc.shaderChunks.dpAtlasQuadPS = "varying vec2 vUv0;\nuniform sampler2D source;\nuniform vec4 params;\n\nvoid main(void) {\n    vec2 uv = vUv0;\n    uv = uv * 2.0 - vec2(1.0);\n    uv *= params.xy;\n    uv = uv * 0.5 + 0.5;\n    gl_FragColor = texture2D(source, uv);\n}\n";
pc.shaderChunks.emissiveConstPS = "uniform vec3 material_emissive;\nvec3 getEmission() {\n    return material_emissive;\n}\n\n";
pc.shaderChunks.emissiveTexPS = "uniform sampler2D texture_emissiveMap;\nvec3 getEmission() {\n    return $texture2DSAMPLE(texture_emissiveMap, $UV).$CH;\n}\n\n";
pc.shaderChunks.emissiveTexConstPS = "uniform sampler2D texture_emissiveMap;\nuniform vec3 material_emissive;\nvec3 getEmission() {\n    return $texture2DSAMPLE(texture_emissiveMap, $UV).$CH * material_emissive;\n}\n\n";
pc.shaderChunks.emissiveVertPS = "vec3 getEmission() {\n    return gammaCorrectInput(saturate(vVertexColor.$CH));\n}\n\n";
pc.shaderChunks.emissiveVertConstPS = "uniform vec3 material_emissive;\nvec3 getEmission() {\n    return gammaCorrectInput(saturate(vVertexColor.$CH)) * material_emissive;\n}\n\n";
pc.shaderChunks.endPS = "   gl_FragColor.rgb = combineColor();\n   gl_FragColor.rgb += getEmission();\n   gl_FragColor.rgb = addFog(gl_FragColor.rgb);\n   gl_FragColor.rgb = toneMap(gl_FragColor.rgb);\n   gl_FragColor.rgb = gammaCorrectOutput(gl_FragColor.rgb);\n";
pc.shaderChunks.envConstPS = "vec3 processEnvironment(vec3 color) {\n    return color;\n}\n\n";
pc.shaderChunks.envMultiplyPS = "uniform float skyboxIntensity;\nvec3 processEnvironment(vec3 color) {\n    return color * skyboxIntensity;\n}\n\n";
pc.shaderChunks.extensionPS = "\n";
pc.shaderChunks.extensionVS = "\n";
pc.shaderChunks.falloffInvSquaredPS = "float getFalloffInvSquared(float lightRadius) {\n    float sqrDist = dot(dLightDirW, dLightDirW);\n    float falloff = 1.0 / (sqrDist + 1.0);\n    float invRadius = 1.0 / lightRadius;\n\n    falloff *= 16.0;\n    falloff *= square( saturate( 1.0 - square( sqrDist * square(invRadius) ) ) );\n\n    return falloff;\n}\n\n";
pc.shaderChunks.falloffLinearPS = "float getFalloffLinear(float lightRadius) {\n    float d = length(dLightDirW);\n    return max(((lightRadius - d) / lightRadius), 0.0);\n}\n\n";
pc.shaderChunks.fixCubemapSeamsNonePS = "vec3 fixSeams(vec3 vec, float mipmapIndex) {\n    return vec;\n}\n\nvec3 fixSeams(vec3 vec) {\n    return vec;\n}\n\nvec3 fixSeamsStatic(vec3 vec, float invRecMipSize) {\n    return vec;\n}\n";
pc.shaderChunks.fixCubemapSeamsStretchPS = "vec3 fixSeams(vec3 vec, float mipmapIndex) {\n    float scale = 1.0 - exp2(mipmapIndex) / 128.0;\n    float M = max(max(abs(vec.x), abs(vec.y)), abs(vec.z));\n    if (abs(vec.x) != M) vec.x *= scale;\n    if (abs(vec.y) != M) vec.y *= scale;\n    if (abs(vec.z) != M) vec.z *= scale;\n    return vec;\n}\n\nvec3 fixSeams(vec3 vec) {\n    float scale = 1.0 - 1.0 / 128.0;\n    float M = max(max(abs(vec.x), abs(vec.y)), abs(vec.z));\n    if (abs(vec.x) != M) vec.x *= scale;\n    if (abs(vec.y) != M) vec.y *= scale;\n    if (abs(vec.z) != M) vec.z *= scale;\n    return vec;\n}\n\nvec3 fixSeamsStatic(vec3 vec, float invRecMipSize) {\n    float scale = invRecMipSize;\n    float M = max(max(abs(vec.x), abs(vec.y)), abs(vec.z));\n    if (abs(vec.x) != M) vec.x *= scale;\n    if (abs(vec.y) != M) vec.y *= scale;\n    if (abs(vec.z) != M) vec.z *= scale;\n    return vec;\n}\n\n";
pc.shaderChunks.fogExpPS = "uniform vec3 fog_color;\nuniform float fog_density;\nvec3 addFog(vec3 color) {\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = exp(-depth * fog_density);\n    fogFactor = clamp(fogFactor, 0.0, 1.0);\n    return mix(fog_color, color, fogFactor);\n}\n";
pc.shaderChunks.fogExp2PS = "uniform vec3 fog_color;\nuniform float fog_density;\nvec3 addFog(vec3 color) {\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = exp(-depth * depth * fog_density * fog_density);\n    fogFactor = clamp(fogFactor, 0.0, 1.0);\n    return mix(fog_color, color, fogFactor);\n}\n";
pc.shaderChunks.fogLinearPS = "uniform vec3 fog_color;\nuniform float fog_start;\nuniform float fog_end;\nvec3 addFog(vec3 color) {\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = (fog_end - depth) / (fog_end - fog_start);\n    fogFactor = clamp(fogFactor, 0.0, 1.0);\n    fogFactor = gammaCorrectInput(fogFactor);\n    return mix(fog_color, color, fogFactor);\n}\n";
pc.shaderChunks.fogNonePS = "vec3 addFog(vec3 color) {\n    return color;\n}\n\n\n";
pc.shaderChunks.fresnelSchlickPS = "// Schlick's approximation\nuniform float material_fresnelFactor; // unused\nvoid getFresnel() {\n    float fresnel = 1.0 - max(dot(dNormalW, dViewDirW), 0.0);\n    float fresnel2 = fresnel * fresnel;\n    fresnel *= fresnel2 * fresnel2;\n    fresnel *= dGlossiness * dGlossiness;\n    dSpecularity = dSpecularity + (1.0 - dSpecularity) * fresnel;\n}\n\n";
pc.shaderChunks.fullscreenQuadPS = "varying vec2 vUv0;\nuniform sampler2D source;\n\nvoid main(void) {\n    gl_FragColor = texture2D(source, vUv0);\n}\n";
pc.shaderChunks.fullscreenQuadVS = "attribute vec2 aPosition;\n\nvarying vec2 vUv0;\n\nvoid main(void)\n{\n    gl_Position = vec4(aPosition, 0.5, 1.0);\n    vUv0 = aPosition.xy*0.5+0.5;\n}\n\n";
pc.shaderChunks.gamma1_0PS = "vec4 texture2DSRGB(sampler2D tex, vec2 uv) {\n    return texture2D(tex, uv);\n}\n\nvec4 textureCubeSRGB(samplerCube tex, vec3 uvw) {\n    return textureCube(tex, uvw);\n}\n\nvec3 gammaCorrectOutput(vec3 color) {\n    return color;\n}\n\nvec3 gammaCorrectInput(vec3 color) {\n    return color;\n}\n\nfloat gammaCorrectInput(float color) {\n    return color;\n}\n\nvec4 gammaCorrectInput(vec4 color) {\n    return color;\n}\n\n";
pc.shaderChunks.gamma2_2PS = "vec3 gammaCorrectInput(vec3 color) {\n    return pow(color, vec3(2.2));\n}\n\nfloat gammaCorrectInput(float color) {\n    return pow(color, 2.2);\n}\n\nvec4 gammaCorrectInput(vec4 color) {\n    return vec4(pow(color.rgb, vec3(2.2)), color.a);\n}\n\nvec4 texture2DSRGB(sampler2D tex, vec2 uv) {\n    vec4 rgba = texture2D(tex, uv);\n    rgba.rgb = gammaCorrectInput(rgba.rgb);\n    return rgba;\n}\n\nvec4 textureCubeSRGB(samplerCube tex, vec3 uvw) {\n    vec4 rgba = textureCube(tex, uvw);\n    rgba.rgb = gammaCorrectInput(rgba.rgb);\n    return rgba;\n}\n\nvec3 gammaCorrectOutput(vec3 color) {\n    color += vec3(0.0000001);\n    return pow(color, vec3(0.45));\n}\n\n";
pc.shaderChunks.gamma2_2FastPS = "vec3 gammaCorrectInput(vec3 color) {\n    return color * (color * (color * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nfloat gammaCorrectInput(float color) {\n    return color * (color * (color * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nvec4 gammaCorrectInput(vec4 color) {\n    return vec4(gammaCorrectInput(color.rgb), color.a);\n}\n\nvec4 texture2DSRGB(sampler2D tex, vec2 uv) {\n    vec4 rgba = texture2D(tex, uv);\n    rgba.rgb = gammaCorrectInput(rgba.rgb);\n    return rgba;\n}\n\nvec4 textureCubeSRGB(samplerCube tex, vec3 uvw) {\n    vec4 rgba = textureCube(tex, uvw);\n    rgba.rgb = gammaCorrectInput(rgba.rgb);\n    return rgba;\n}\n\nvec3 gammaCorrectOutput(vec3 color) {\n    color += vec3(0.0000001);\n    return pow(color, vec3(0.45));\n}\n\n";
pc.shaderChunks.genParaboloidPS = "varying vec2 vUv0;\n\nuniform samplerCube source;\nuniform vec4 params; // x = mip\n\nvoid main(void) {\n\n    vec2 uv = vUv0;\n\n    float side = uv.x < 0.5? 1.0 : -1.0;\n    vec2 tc;\n    tc.x = fract(uv.x * 2.0) * 2.0 - 1.0;\n    tc.y = uv.y * 2.0 - 1.0;\n\n    // scale projection a bit to have a little overlap for filtering\n    const float scale = 1.1;\n    tc *= scale;\n\n    vec3 dir;\n    dir.y = (dot(tc, tc) - 1.0) * side; // from 1.0 center to 0.0 borders quadratically\n    dir.xz = tc * -2.0;\n\n    dir.x *= -side * params.y; // flip original cubemap x instead of doing it at runtime\n\n    dir = fixSeams(dir, params.x);\n\n    vec4 color = textureCube(source, dir, -100.0);\n    gl_FragColor = color;\n}\n";
pc.shaderChunks.glossConstPS = "uniform float material_shininess;\nvoid getGlossiness() {\n    dGlossiness = material_shininess + 0.0000001;\n}\n\n";
pc.shaderChunks.glossTexPS = "uniform sampler2D texture_glossMap;\nvoid getGlossiness() {\n    dGlossiness = texture2D(texture_glossMap, $UV).$CH + 0.0000001;\n}\n\n";
pc.shaderChunks.glossTexConstPS = "uniform sampler2D texture_glossMap;\nuniform float material_shininess;\nvoid getGlossiness() {\n    dGlossiness = material_shininess * texture2D(texture_glossMap, $UV).$CH + 0.0000001;\n}\n\n";
pc.shaderChunks.glossVertPS = "void getGlossiness() {\n    dGlossiness = saturate(vVertexColor.$CH) + 0.0000001;\n}\n\n";
pc.shaderChunks.glossVertConstPS = "uniform float material_shininess;\nvoid getGlossiness() {\n    dGlossiness = material_shininess * saturate(vVertexColor.$CH) + 0.0000001;\n}\n\n";
pc.shaderChunks.instancingVS = "\nattribute vec4 instance_line1;\nattribute vec4 instance_line2;\nattribute vec4 instance_line3;\nattribute vec4 instance_line4;\n\n";
pc.shaderChunks.lightDiffuseLambertPS = "float getLightDiffuse() {\n    return max(dot(dNormalW, -dLightDirNormW), 0.0);\n}\n\n";
pc.shaderChunks.lightDirPointPS = "void getLightDirPoint(vec3 lightPosW) {\n    dLightDirW = vPositionW - lightPosW;\n    dLightDirNormW = normalize(dLightDirW);\n    dLightPosW = lightPosW;\n}\n\n";
pc.shaderChunks.lightSpecularBlinnPS = "// Energy-conserving (hopefully) Blinn-Phong\nfloat getLightSpecular() {\n    vec3 h = normalize( -dLightDirNormW + dViewDirW );\n    float nh = max( dot( h, dNormalW ), 0.0 );\n\n    float specPow = exp2(dGlossiness * 11.0); // glossiness is linear, power is not; 0 - 2048\n    specPow = antiAliasGlossiness(specPow);\n\n    // Hack: On Mac OS X, calling pow with zero for the exponent generates hideous artifacts so bias up a little\n    specPow = max(specPow, 0.0001);\n\n    return pow(nh, specPow) * (specPow + 2.0) / 8.0;\n}\n\n";
pc.shaderChunks.lightSpecularPhongPS = "float getLightSpecular() {\n    float specPow = dGlossiness;\n\n    specPow = antiAliasGlossiness(specPow);\n\n    // Hack: On Mac OS X, calling pow with zero for the exponent generates hideous artifacts so bias up a little\n    return pow(max(dot(dReflDirW, -dLightDirNormW), 0.0), specPow + 0.0001);\n}\n\n";
pc.shaderChunks.lightmapSinglePS = "uniform sampler2D texture_lightMap;\nvoid addLightMap() {\n    dDiffuseLight += $texture2DSAMPLE(texture_lightMap, $UV).$CH;\n}\n\n";
pc.shaderChunks.lightmapSingleVertPS = "void addLightMap() {\n    dDiffuseLight += saturate(vVertexColor.$CH);\n}\n\n";
pc.shaderChunks.metalnessPS = "void processMetalness(float metalness) {\n    const float dielectricF0 = 0.04;\n    dSpecularity = mix(vec3(dielectricF0), dAlbedo, metalness);\n    dAlbedo *= 1.0 - metalness;\n}\n\n";
pc.shaderChunks.metalnessConstPS = "uniform float material_metalness;\nvoid getSpecularity() {\n    processMetalness(material_metalness);\n}\n\n";
pc.shaderChunks.metalnessTexPS = "uniform sampler2D texture_metalnessMap;\nvoid getSpecularity() {\n    processMetalness(texture2D(texture_metalnessMap, $UV).$CH);\n}\n\n";
pc.shaderChunks.metalnessTexConstPS = "uniform sampler2D texture_metalnessMap;\nuniform float material_metalness;\nvoid getSpecularity() {\n    processMetalness(texture2D(texture_metalnessMap, $UV).$CH * material_metalness);\n}\n\n";
pc.shaderChunks.metalnessVertPS = "void getSpecularity() {\n    processMetalness(saturate(vVertexColor.$CH));\n}\n\n";
pc.shaderChunks.metalnessVertConstPS = "uniform float material_metalness;\nvoid getSpecularity() {\n    processMetalness(saturate(vVertexColor.$CH) * material_metalness);\n}\n\n";
pc.shaderChunks.normalVS = "vec3 getNormal() {\n    dNormalMatrix = matrix_normal;\n    return normalize(dNormalMatrix * vertex_normal);\n}\n\n";
pc.shaderChunks.normalInstancedVS = "vec3 getNormal() {\n    dNormalMatrix = mat3(instance_line1.xyz, instance_line2.xyz, instance_line3.xyz);\n    return normalize(dNormalMatrix * vertex_normal);\n}\n\n";
pc.shaderChunks.normalMapPS = "uniform sampler2D texture_normalMap;\nuniform float material_bumpiness;\nvoid getNormal() {\n    vec3 normalMap = unpackNormal(texture2D(texture_normalMap, $UV));\n    dNormalMap = normalMap;\n    dNormalW = dTBN * normalMap;\n}\n\n";
pc.shaderChunks.normalMapFloatPS = "uniform sampler2D texture_normalMap;\nuniform float material_bumpiness;\nvoid getNormal() {\n    vec3 normalMap = unpackNormal(texture2D(texture_normalMap, $UV));\n    dNormalMap = normalMap;\n    normalMap = normalize(mix(vec3(0.0, 0.0, 1.0), normalMap, material_bumpiness));\n    dNormalW = dTBN * normalMap;\n}\n\n";
pc.shaderChunks.normalMapFloatTBNfastPS = "uniform sampler2D texture_normalMap;\nuniform float material_bumpiness;\nvoid getNormal() {\n    vec3 normalMap = unpackNormal(texture2D(texture_normalMap, $UV));\n    dNormalMap = normalMap;\n    normalMap = mix(vec3(0.0, 0.0, 1.0), normalMap, material_bumpiness);\n    dNormalW = normalize(dTBN * normalMap);\n}\n\n";
pc.shaderChunks.normalSkinnedVS = "vec3 getNormal() {\n    dNormalMatrix = mat3(dModelMatrix[0].xyz, dModelMatrix[1].xyz, dModelMatrix[2].xyz);\n    return normalize(dNormalMatrix * vertex_normal);\n}\n\n";
pc.shaderChunks.normalVertexPS = "void getNormal() {\n    dNormalW = normalize(vNormalW);\n}\n\n";
pc.shaderChunks.normalXYPS = "vec3 unpackNormal(vec4 nmap) {\n    vec3 normal;\n    normal.xy = nmap.wy * 2.0 - 1.0;\n    normal.z = sqrt(1.0 - saturate(dot(normal.xy, normal.xy)));\n    return normal;\n}\n\n";
pc.shaderChunks.normalXYZPS = "vec3 unpackNormal(vec4 nmap) {\n    return nmap.xyz * 2.0 - 1.0;\n}\n\n";
pc.shaderChunks.opacityConstPS = "uniform float material_opacity;\nvoid getOpacity() {\n    dAlpha = material_opacity;\n}\n\n";
pc.shaderChunks.opacityTexPS = "uniform sampler2D texture_opacityMap;\nvoid getOpacity() {\n    dAlpha = texture2D(texture_opacityMap, $UV).$CH;\n}\n\n";
pc.shaderChunks.opacityTexConstPS = "uniform sampler2D texture_opacityMap;\nuniform float material_opacity;\nvoid getOpacity() {\n    dAlpha = texture2D(texture_opacityMap, $UV).$CH * material_opacity;\n}\n\n";
pc.shaderChunks.opacityVertPS = "void getOpacity() {\n    dAlpha = saturate(vVertexColor.$CH);\n}\n\n";
pc.shaderChunks.opacityVertConstPS = "uniform float material_opacity;\nvoid getOpacity() {\n    dAlpha = saturate(vVertexColor.$CH) * material_opacity;\n}\n\n";
pc.shaderChunks.outputAlphaPS = "gl_FragColor.a = dAlpha;\n";
pc.shaderChunks.outputAlphaOpaquePS = "gl_FragColor.a = 1.0;\n";
pc.shaderChunks.outputAlphaPremulPS = "gl_FragColor.rgb *= dAlpha;\ngl_FragColor.a = dAlpha;\n";
pc.shaderChunks.outputCubemapPS = "varying vec2 vUv0;\n\nuniform samplerCube source;\nuniform vec4 params;\n\nfloat saturate(float x) {\n    return clamp(x, 0.0, 1.0);\n}\n\nvec4 encodeRGBM(vec4 color) { // modified RGBM\n    color.rgb = pow(color.rgb, vec3(0.5));\n    color.rgb *= 1.0 / 8.0;\n\n    color.a = saturate( max( max( color.r, color.g ), max( color.b, 1.0 / 255.0 ) ) );\n    color.a = ceil(color.a * 255.0) / 255.0;\n\n    color.rgb /= color.a;\n    return color;\n}\n\nvoid main(void) {\n\n    vec2 st = vUv0 * 2.0 - 1.0;\n    float face = params.x;\n\n    vec3 vec;\n    if (face==0.0) {\n        vec = vec3(1, -st.y, -st.x);\n    } else if (face==1.0) {\n        vec = vec3(-1, -st.y, st.x);\n    } else if (face==2.0) {\n        vec = vec3(st.x, 1, st.y);\n    } else if (face==3.0) {\n        vec = vec3(st.x, -1, -st.y);\n    } else if (face==4.0) {\n        vec = vec3(st.x, -st.y, 1);\n    } else {\n        vec = vec3(-st.x, -st.y, -1);\n    }\n\n    gl_FragColor = textureCube(source, vec);\n    if (params.w >= 2.0) gl_FragColor = encodeRGBM(gl_FragColor);\n}\n\n";
pc.shaderChunks.packDepthPS = "// Packing a float in GLSL with multiplication and mod\n// http://blog.gradientstudios.com/2012/08/23/shadow-map-improvement\nvec4 packFloat(float depth) {\n    const vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);\n    const vec4 bit_mask  = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\n\n    // combination of mod and multiplication and division works better\n    vec4 res = mod(depth * bit_shift * vec4(255), vec4(256) ) / vec4(255);\n    res -= res.xxyz * bit_mask;\n    return res;\n}\n\n\n";
pc.shaderChunks.packDepthMaskPS = "vec4 packFloat(float depth) {\n    const vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);\n    const vec4 bit_mask  = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\n\n    // combination of mod and multiplication and division works better\n    vec4 res = mod(depth * bit_shift * vec4(255), vec4(256) ) / vec4(255);\n    res.x = 0.0;\n    res -= res.xxyz * bit_mask;\n    return res;\n}\n\n";
pc.shaderChunks.parallaxPS = "uniform sampler2D texture_heightMap;\nuniform float material_heightMapFactor;\nvoid getParallax() {\n    float parallaxScale = material_heightMapFactor;\n    const float parallaxBias = 0.01;\n\n    float height = texture2D(texture_heightMap, $UV).$CH * parallaxScale - parallaxBias;\n    vec3 viewDirT = dViewDirW * dTBN;\n\n    dUvOffset = min(height * viewDirT.xy, vec2(parallaxBias));\n}\n\n";
pc.shaderChunks.particlePS = "varying vec4 texCoordsAlphaLife;\n\nuniform sampler2D colorMap;\nuniform sampler2D internalTex3;\nuniform float graphSampleSize;\nuniform float graphNumSamples;\nuniform float camera_far;\nuniform float softening;\nuniform float colorMult;\n\nfloat saturate(float x) {\n    return clamp(x, 0.0, 1.0);\n}\n\nfloat unpackFloat(vec4 rgbaDepth) {\n    const vec4 bitShift = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);\n    float depth = dot(rgbaDepth, bitShift);\n    return depth;\n}\n\nvoid main(void) {\n    vec4 tex         = texture2DSRGB(colorMap, texCoordsAlphaLife.xy);\n    vec4 ramp     = texture2DSRGB(internalTex3, vec2(texCoordsAlphaLife.w, 0.0));\n    ramp.rgb *= colorMult;\n\n    ramp.a += texCoordsAlphaLife.z;\n\n    vec3 rgb =     tex.rgb * ramp.rgb;\n    float a =         tex.a * ramp.a;\n";
pc.shaderChunks.particleVS = "\nvec3 unpack3NFloats(float src) {\n    float r = fract(src);\n    float g = fract(src * 256.0);\n    float b = fract(src * 65536.0);\n    return vec3(r, g, b);\n}\n\nfloat saturate(float x) {\n    return clamp(x, 0.0, 1.0);\n}\n\nvec4 tex1Dlod_lerp(sampler2D tex, vec2 tc) {\n    return mix( texture2D(tex,tc), texture2D(tex,tc + graphSampleSize), fract(tc.x*graphNumSamples) );\n}\n\nvec4 tex1Dlod_lerp(sampler2D tex, vec2 tc, out vec3 w) {\n    vec4 a = texture2D(tex,tc);\n    vec4 b = texture2D(tex,tc + graphSampleSize);\n    float c = fract(tc.x*graphNumSamples);\n\n    vec3 unpackedA = unpack3NFloats(a.w);\n    vec3 unpackedB = unpack3NFloats(b.w);\n    w = mix(unpackedA, unpackedB, c);\n\n    return mix(a, b, c);\n}\n\n\nvec2 rotate(vec2 quadXY, float pRotation, out mat2 rotMatrix) {\n    float c = cos(pRotation);\n    float s = sin(pRotation);\n\n    mat2 m = mat2(c, -s, s, c);\n    rotMatrix = m;\n\n    return m * quadXY;\n}\n\nvec3 billboard(vec3 InstanceCoords, vec2 quadXY, out mat3 localMat) {\n    vec3 viewUp = matrix_viewInverse[1].xyz;\n    vec3 posCam = matrix_viewInverse[3].xyz;\n\n    mat3 billMat;\n    billMat[2] = normalize(InstanceCoords - posCam);\n    billMat[0] = normalize(cross(viewUp, billMat[2]));\n    billMat[1] = -viewUp;\n    vec3 pos = billMat * vec3(quadXY, 0);\n\n    localMat = billMat;\n\n    return pos;\n}\n\n\nvoid main(void) {\n    vec3 meshLocalPos = particle_vertexData.xyz;\n    float id = floor(particle_vertexData.w);\n\n    float rndFactor = fract(sin(id + 1.0 + seed));\n    vec3 rndFactor3 = vec3(rndFactor, fract(rndFactor*10.0), fract(rndFactor*100.0));\n\n    float uv = id / numParticlesPot;\n    readInput(uv);\n\n\n    vec2 velocityV = normalize((mat3(matrix_view) * inVel).xy); // should be removed by compiler if align/stretch is not used\n    float particleLifetime = lifetime;\n\n    if (inLife <= 0.0 || inLife > particleLifetime || !inShow) meshLocalPos = vec3(0.0);\n    vec2 quadXY = meshLocalPos.xy;\n    float nlife = clamp(inLife / particleLifetime, 0.0, 1.0);\n\n    vec3 paramDiv;\n    vec4 params = tex1Dlod_lerp(internalTex2, vec2(nlife, 0), paramDiv);\n    float scale = params.y;\n    float scaleDiv = paramDiv.x;\n    float alphaDiv = paramDiv.z;\n\n    scale += (scaleDiv * 2.0 - 1.0) * scaleDivMult * fract(rndFactor*10000.0);\n\n    texCoordsAlphaLife = vec4(quadXY * -0.5 + 0.5,    (alphaDiv * 2.0 - 1.0) * alphaDivMult * fract(rndFactor*1000.0),    nlife);\n\n    vec3 particlePos = inPos;\n    vec3 particlePosMoved = vec3(0.0);\n\n    mat2 rotMatrix;\n    mat3 localMat;\n\n\n";
pc.shaderChunks.particleAnimFrameClampVS = "\n    float animFrame = min(floor(texCoordsAlphaLife.w * animTexParams.z), animTexParams.w);\n\n";
pc.shaderChunks.particleAnimFrameLoopVS = "\n    float animFrame = floor(texCoordsAlphaLife.w * animTexParams.z);\n\n";
pc.shaderChunks.particleAnimTexVS = "\n    float atlasX = animFrame * animTexParams.x;\n    float atlasY = floor(atlasX) * animTexParams.y;\n    atlasX = fract(atlasX);\n\n    texCoordsAlphaLife.xy *= animTexParams.xy;\n    texCoordsAlphaLife.xy += vec2(atlasX, atlasY);\n    texCoordsAlphaLife.y = 1.0 - texCoordsAlphaLife.y;\n\n";
pc.shaderChunks.particleInputFloatPS = "void readInput(float uv) {\n    vec4 tex = texture2D(particleTexIN, vec2(uv, 0.25));\n    vec4 tex2 = texture2D(particleTexIN, vec2(uv, 0.75));\n\n    inPos = tex.xyz;\n    inVel = tex2.xyz;\n    inAngle = (tex.w < 0.0? -tex.w : tex.w) - 1000.0;\n    inShow = tex.w >= 0.0;\n    inLife = tex2.w;\n}\n\n";
pc.shaderChunks.particleInputRgba8PS = "//RG=X, BA=Y\n//RG=Z, BA=A\n//RGB=V, A=visMode\n//RGBA=life\n\n#define PI2 6.283185307179586\n\nuniform vec3 inBoundsSize;\nuniform vec3 inBoundsCenter;\n\nuniform float maxVel;\n\nfloat decodeFloatRG(vec2 rg) {\n    return rg.y*(1.0/255.0) + rg.x;\n}\n\nfloat decodeFloatRGBA( vec4 rgba ) {\n  return dot( rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/160581375.0) );\n}\n\nvoid readInput(float uv) {\n    vec4 tex0 = texture2D(particleTexIN, vec2(uv, 0.125));\n    vec4 tex1 = texture2D(particleTexIN, vec2(uv, 0.375));\n    vec4 tex2 = texture2D(particleTexIN, vec2(uv, 0.625));\n    vec4 tex3 = texture2D(particleTexIN, vec2(uv, 0.875));\n\n    inPos = vec3(decodeFloatRG(tex0.rg), decodeFloatRG(tex0.ba), decodeFloatRG(tex1.rg));\n    inPos = (inPos - vec3(0.5)) * inBoundsSize + inBoundsCenter;\n\n    inVel = tex2.xyz;\n    inVel = (inVel - vec3(0.5)) * maxVel;\n\n    inAngle = decodeFloatRG(tex1.ba) * PI2;\n    inShow = tex2.a > 0.5;\n\n    inLife = decodeFloatRGBA(tex3);\n    float maxNegLife = max(lifetime, (numParticles - 1.0) * (rate+rateDiv));\n    float maxPosLife = lifetime+1.0;\n    inLife = inLife * (maxNegLife + maxPosLife) - maxNegLife;\n}\n\n";
pc.shaderChunks.particleOutputFloatPS = "void writeOutput() {\n    if (gl_FragCoord.y<1.0) {\n        gl_FragColor = vec4(outPos, (outAngle + 1000.0) * visMode);\n    } else {\n        gl_FragColor = vec4(outVel, outLife);\n    }\n}\n\n";
pc.shaderChunks.particleOutputRgba8PS = "uniform vec3 outBoundsMul;\nuniform vec3 outBoundsAdd;\n\nvec2 encodeFloatRG( float v ) {\n  vec2 enc = vec2(1.0, 255.0) * v;\n  enc = fract(enc);\n  enc -= enc.yy * vec2(1.0/255.0, 1.0/255.0);\n  return enc;\n}\n\nvec4 encodeFloatRGBA( float v ) {\n  vec4 enc = vec4(1.0, 255.0, 65025.0, 160581375.0) * v;\n  enc = fract(enc);\n  enc -= enc.yzww * vec4(1.0/255.0,1.0/255.0,1.0/255.0,0.0);\n  return enc;\n}\n\nvoid writeOutput() {\n    //outPos = (outPos - outBoundsCenter) / outBoundsSize + vec3(0.5);\n\n    outPos = outPos * outBoundsMul + outBoundsAdd;\n    outAngle = fract(outAngle / PI2);\n\n    outVel = (outVel / maxVel) + vec3(0.5); // TODO: mul\n\n    float maxNegLife = max(lifetime, (numParticles - 1.0) * (rate+rateDiv));\n    float maxPosLife = lifetime+1.0;\n    outLife = (outLife + maxNegLife) / (maxNegLife + maxPosLife);\n\n    if (gl_FragCoord.y < 1.0) {\n        gl_FragColor = vec4(encodeFloatRG(outPos.x), encodeFloatRG(outPos.y));\n    } else if (gl_FragCoord.y < 2.0) {\n        gl_FragColor = vec4(encodeFloatRG(outPos.z), encodeFloatRG(outAngle));\n    } else if (gl_FragCoord.y < 3.0) {\n        gl_FragColor = vec4(outVel, visMode*0.5+0.5);\n    } else {\n        gl_FragColor = encodeFloatRGBA(outLife);\n    }\n}\n\n";
pc.shaderChunks.particleUpdaterAABBPS = "uniform mat3 spawnBounds;\nvec3 calcSpawnPosition(vec3 inBounds, float rndFactor) {\n    return emitterPos + spawnBounds * (inBounds - vec3(0.5));\n}\n\nvoid addInitialVelocity(inout vec3 localVelocity, vec3 inBounds) {\n    localVelocity -= vec3(0, 0, initialVelocity);\n}\n\n";
pc.shaderChunks.particleUpdaterEndPS = "\n    writeOutput();\n}\n\n";
pc.shaderChunks.particleUpdaterInitPS = "varying vec2 vUv0;\n\nuniform sampler2D particleTexIN;\nuniform sampler2D internalTex0;\nuniform sampler2D internalTex1;\nuniform sampler2D internalTex2;\n\nuniform mat3 emitterMatrix;\nuniform vec3 emitterScale;\n\nuniform vec3 emitterPos, frameRandom, localVelocityDivMult, velocityDivMult;\nuniform float delta, rate, rateDiv, lifetime, numParticles, rotSpeedDivMult, seed;\nuniform float startAngle, startAngle2;\nuniform float initialVelocity;\n\nuniform float graphSampleSize;\nuniform float graphNumSamples;\n\n\nvec3 inPos;\nvec3 inVel;\nfloat inAngle;\nbool inShow;\nfloat inLife;\nfloat visMode;\n\nvec3 outPos;\nvec3 outVel;\nfloat outAngle;\nbool outShow;\nfloat outLife;\n";
pc.shaderChunks.particleUpdaterNoRespawnPS = "    if (outLife >= lifetime) {\n        outLife -= max(lifetime, (numParticles - 1.0) * particleRate);\n        visMode = -1.0;\n    }\n";
pc.shaderChunks.particleUpdaterOnStopPS = "    visMode = outLife < 0.0? -1.0: visMode;\n\n";
pc.shaderChunks.particleUpdaterRespawnPS = "    if (outLife >= lifetime) {\n        outLife -= max(lifetime, (numParticles - 1.0) * particleRate);\n        visMode = 1.0;\n    }\n    visMode = outLife < 0.0? 1.0: visMode;\n\n";
pc.shaderChunks.particleUpdaterSpherePS = "uniform float spawnBoundsSphere;\nvec3 calcSpawnPosition(vec3 inBounds, float rndFactor) {\n    float rnd4 = fract(rndFactor * 1000.0);\n    return emitterPos + normalize(inBounds.xyz - vec3(0.5)) * rnd4 * spawnBoundsSphere;\n}\n\nvoid addInitialVelocity(inout vec3 localVelocity, vec3 inBounds) {\n    localVelocity += normalize(inBounds - vec3(0.5)) * initialVelocity;\n}\n\n";
pc.shaderChunks.particleUpdaterStartPS = "float saturate(float x) {\n    return clamp(x, 0.0, 1.0);\n}\n\nvec3 unpack3NFloats(float src) {\n    float r = fract(src);\n    float g = fract(src * 256.0);\n    float b = fract(src * 65536.0);\n    return vec3(r, g, b);\n}\n\nvec3 tex1Dlod_lerp(sampler2D tex, vec2 tc, out vec3 w) {\n    vec4 a = texture2D(tex, tc);\n    vec4 b = texture2D(tex, tc + graphSampleSize);\n    float c = fract(tc.x * graphNumSamples);\n\n    vec3 unpackedA = unpack3NFloats(a.w);\n    vec3 unpackedB = unpack3NFloats(b.w);\n    w = mix(unpackedA, unpackedB, c);\n\n    return mix(a.xyz, b.xyz, c);\n}\n\n#define HASHSCALE4 vec4(1031, .1030, .0973, .1099)\nvec4 hash41(float p) {\n    vec4 p4 = fract(vec4(p) * HASHSCALE4);\n    p4 += dot(p4, p4.wzxy+19.19);\n    return fract(vec4((p4.x + p4.y)*p4.z, (p4.x + p4.z)*p4.y, (p4.y + p4.z)*p4.w, (p4.z + p4.w)*p4.x));\n}\n\n\nvoid main(void)\n{\n    if (gl_FragCoord.x > numParticles) discard;\n\n    readInput(vUv0.x);\n    visMode = inShow? 1.0 : -1.0;\n\n    vec4 rndFactor = hash41(gl_FragCoord.x + seed);\n\n    float particleRate = rate + rateDiv * rndFactor.x;\n\n    outLife = inLife + delta;\n    float nlife = clamp(outLife / lifetime, 0.0, 1.0);\n\n    vec3 localVelocityDiv;\n    vec3 velocityDiv;\n    vec3 paramDiv;\n    vec3 localVelocity = tex1Dlod_lerp(internalTex0, vec2(nlife, 0), localVelocityDiv);\n    vec3 velocity =      tex1Dlod_lerp(internalTex1, vec2(nlife, 0), velocityDiv);\n    vec3 params =        tex1Dlod_lerp(internalTex2, vec2(nlife, 0), paramDiv);\n    float rotSpeed = params.x;\n    float rotSpeedDiv = paramDiv.y;\n\n    localVelocity +=    (localVelocityDiv * vec3(2.0) - vec3(1.0)) * localVelocityDivMult * rndFactor.xyz;\n    velocity +=         (velocityDiv * vec3(2.0) - vec3(1.0)) * velocityDivMult * rndFactor.xyz;\n    rotSpeed +=         (rotSpeedDiv * 2.0 - 1.0) * rotSpeedDivMult * rndFactor.y;\n\n    addInitialVelocity(localVelocity, rndFactor.xyz);\n\n\n    outVel = emitterMatrix * localVelocity.xyz + velocity.xyz * emitterScale;\n    outPos = inPos + outVel * delta;\n    outAngle = inAngle + rotSpeed * delta;\n\n    bool respawn = outLife <= 0.0 || outLife >= lifetime;\n    outPos = respawn? calcSpawnPosition(rndFactor.xyz, rndFactor.x) : outPos;\n    outAngle = respawn? mix(startAngle, startAngle2, rndFactor.x) : outAngle;\n    outVel = respawn? vec3(0.0) : outVel;\n\n\n";
pc.shaderChunks.particle_TBNVS = "\n    mat3 rot3 = mat3(rotMatrix[0][0], rotMatrix[0][1], 0.0,        rotMatrix[1][0], rotMatrix[1][1], 0.0,        0.0, 0.0, 1.0);\n    localMat[2] *= -1.0;\n    ParticleMat = localMat * rot3;\n\n\n\n\n";
pc.shaderChunks.particle_billboardVS = "\n    quadXY = rotate(quadXY, inAngle, rotMatrix);\n    vec3 localPos = billboard(particlePos, quadXY, localMat);\n\n";
pc.shaderChunks.particle_blendAddPS = "\n    rgb *= saturate(gammaCorrectInput(a));\n    if ((rgb.r + rgb.g + rgb.b) < 0.000001) discard;\n\n";
pc.shaderChunks.particle_blendMultiplyPS = "\n    rgb = mix(vec3(1.0), rgb, vec3(a));\n    if (rgb.r + rgb.g + rgb.b > 2.99) discard;\n\n";
pc.shaderChunks.particle_blendNormalPS = "\n    if (a < 0.01) discard;\n";
pc.shaderChunks.particle_cpuVS = "attribute vec4 particle_vertexData;     // XYZ = world pos, W = life\nattribute vec4 particle_vertexData2;     // X = angle, Y = scale, Z = alpha, W = velocity.x\nattribute vec4 particle_vertexData3;     // XYZ = particle local pos, W = velocity.y\nattribute vec2 particle_vertexData4;     // X = velocity.z, W = particle ID\n\nuniform mat4 matrix_viewProjection;\nuniform mat4 matrix_model;\nuniform mat4 matrix_view;\nuniform mat3 matrix_normal;\nuniform mat4 matrix_viewInverse;\n\nuniform float numParticles;\nuniform float lifetime;\nuniform float stretch;\n//uniform float graphSampleSize;\n//uniform float graphNumSamples;\nuniform vec3 wrapBounds, emitterScale;\nuniform sampler2D texLifeAndSourcePosOUT;\nuniform sampler2D internalTex0;\nuniform sampler2D internalTex1;\nuniform sampler2D internalTex2;\n\nvarying vec4 texCoordsAlphaLife;\n\n\nvec2 rotate(vec2 quadXY, float pRotation, out mat2 rotMatrix)\n{\n    float c = cos(pRotation);\n    float s = sin(pRotation);\n    //vec4 rotationMatrix = vec4(c, -s, s, c);\n\n    mat2 m = mat2(c, -s, s, c);\n    rotMatrix = m;\n\n    return m * quadXY;\n}\n\nvec3 billboard(vec3 InstanceCoords, vec2 quadXY, out mat3 localMat)\n{\n    vec3 viewUp = matrix_viewInverse[1].xyz;\n    vec3 posCam = matrix_viewInverse[3].xyz;\n\n    mat3 billMat;\n    billMat[2] = normalize(InstanceCoords - posCam);\n    billMat[0] = normalize(cross(viewUp, billMat[2]));\n    billMat[1] = -viewUp;\n    vec3 pos = billMat * vec3(quadXY, 0);\n\n    localMat = billMat;\n\n    return pos;\n}\n\n\nvoid main(void)\n{\n    vec3 particlePos = particle_vertexData.xyz;\n    vec3 inPos = particlePos;\n    vec3 vertPos = particle_vertexData3.xyz;\n    vec3 inVel = vec3(particle_vertexData2.w, particle_vertexData3.w, particle_vertexData4.x);\n    vec2 velocityV = normalize((mat3(matrix_view) * inVel).xy); // should be removed by compiler if align/stretch is not used\n\n    vec2 quadXY = vertPos.xy;\n    texCoordsAlphaLife = vec4(quadXY * -0.5 + 0.5, particle_vertexData2.z, particle_vertexData.w);\n\n    mat2 rotMatrix;\n    mat3 localMat;\n\n    float inAngle = particle_vertexData2.x;\n    vec3 particlePosMoved = vec3(0.0);\n    vec3 meshLocalPos = particle_vertexData3.xyz;\n\n";
pc.shaderChunks.particle_cpu_endVS = "\n    localPos *= particle_vertexData2.y * emitterScale;\n    localPos += particlePos;\n\n    gl_Position = matrix_viewProjection * vec4(localPos, 1.0);\n}\n\n";
pc.shaderChunks.particle_endPS = "    rgb = addFog(rgb);\n    rgb = toneMap(rgb);\n    rgb = gammaCorrectOutput(rgb);\n    gl_FragColor = vec4(rgb, a);\n}\n";
pc.shaderChunks.particle_endVS = "\n    localPos *= scale * emitterScale;\n    localPos += particlePos;\n\n    gl_Position = matrix_viewProjection * vec4(localPos.xyz, 1.0);\n}\n";
pc.shaderChunks.particle_halflambertPS = "\n    vec3 negNormal = normal*0.5+0.5;\n    vec3 posNormal = -normal*0.5+0.5;\n    negNormal *= negNormal;\n    posNormal *= posNormal;\n\n\n";
pc.shaderChunks.particle_initVS = "attribute vec4 particle_vertexData; // XYZ = particle position, W = particle ID + random factor\n\nuniform mat4 matrix_viewProjection;\nuniform mat4 matrix_model;\nuniform mat3 matrix_normal;\nuniform mat4 matrix_viewInverse;\nuniform mat4 matrix_view;\n\nuniform float numParticles, numParticlesPot;\nuniform float graphSampleSize;\nuniform float graphNumSamples;\nuniform float stretch;\nuniform vec3 wrapBounds;\nuniform vec3 emitterScale;\nuniform float rate, rateDiv, lifetime, deltaRandomnessStatic, scaleDivMult, alphaDivMult, seed, delta;\nuniform sampler2D particleTexOUT, particleTexIN;\nuniform sampler2D internalTex0;\nuniform sampler2D internalTex1;\nuniform sampler2D internalTex2;\n\nvarying vec4 texCoordsAlphaLife;\n\nvec3 inPos;\nvec3 inVel;\nfloat inAngle;\nbool inShow;\nfloat inLife;\n\n";
pc.shaderChunks.particle_lambertPS = "\n    vec3 negNormal = max(normal, vec3(0.0));\n    vec3 posNormal = max(-normal, vec3(0.0));\n\n\n";
pc.shaderChunks.particle_lightingPS = "\n    vec3 light = negNormal.x*lightCube[0] + posNormal.x*lightCube[1] +\n                        negNormal.y*lightCube[2] + posNormal.y*lightCube[3] +\n                        negNormal.z*lightCube[4] + posNormal.z*lightCube[5];\n\n\n    rgb *= light;\n\n\n";
pc.shaderChunks.particle_meshVS = "\n    vec3 localPos = meshLocalPos;\n    localPos.xy = rotate(localPos.xy, inAngle, rotMatrix);\n    localPos.yz = rotate(localPos.yz, inAngle, rotMatrix);\n\n    billboard(particlePos, quadXY, localMat);\n\n\n";
pc.shaderChunks.particle_normalVS = "\n    Normal = normalize(localPos - localMat[2]);\n\n\n";
pc.shaderChunks.particle_normalMapPS = "\n    vec3 normalMap         = normalize( texture2D(normalMap, texCoordsAlphaLife.xy).xyz * 2.0 - 1.0 );\n    vec3 normal = ParticleMat * normalMap;\n\n\n\n\n";
pc.shaderChunks.particle_pointAlongVS = "    inAngle = atan(velocityV.x, velocityV.y); // not the fastest way, but easier to plug in; TODO: create rot matrix right from vectors\n\n";
pc.shaderChunks.particle_softPS = "\n    vec2 screenTC = gl_FragCoord.xy * uScreenSize.zw;\n    float depth = unpackFloat( texture2D(uDepthMap, screenTC) ) * camera_far;\n    float particleDepth = gl_FragCoord.z / gl_FragCoord.w;\n    float depthDiff = saturate(abs(particleDepth - depth) * softening);\n    a *= depthDiff;\n\n";
pc.shaderChunks.particle_stretchVS = "    vec3 moveDir = inVel * stretch;\n    vec3 posPrev = inPos - moveDir;\n    posPrev += particlePosMoved;\n\n    vec2 centerToVertexV = normalize((mat3(matrix_view) * localPos).xy);\n\n    float interpolation = dot(-velocityV, centerToVertexV) * 0.5 + 0.5;\n\n    particlePos = mix(particlePos, posPrev, interpolation);\n\n";
pc.shaderChunks.particle_wrapVS = "\n    vec3 origParticlePos = particlePos;\n    particlePos -= matrix_model[3].xyz;\n    particlePos = mod(particlePos, wrapBounds) - wrapBounds * 0.5;\n    particlePos += matrix_model[3].xyz;\n    particlePosMoved = particlePos - origParticlePos;\n\n\n";
pc.shaderChunks.prefilterCubemapPS = "varying vec2 vUv0;\n\nuniform samplerCube source;\nuniform vec4 params;\n\nfloat saturate(float x) {\n    return clamp(x, 0.0, 1.0);\n}\n\nfloat rnd(vec2 uv) {\n    return fract(sin(dot(uv, vec2(12.9898, 78.233) * 2.0)) * 43758.5453);\n}\n\nconst float PI = 3.14159265358979;\nvec3 hemisphereSample_cos(vec2 uv, mat3 vecSpace, vec3 cubeDir, float gloss) { // cos + lerped cone size (better than just lerped)\n    float phi = uv.y * 2.0 * PI;\n    float cosTheta = sqrt(1.0 - uv.x);\n    float sinTheta = sqrt(1.0 - cosTheta * cosTheta);\n    vec3 sampleDir = vec3(cos(phi) * sinTheta, sin(phi) * sinTheta, cosTheta);\n    return normalize(mix(vecSpace * sampleDir, cubeDir, params.y));\n}\n\nvec3 hemisphereSample_phong(vec2 uv, mat3 vecSpace, vec3 cubeDir, float specPow) {\n    float phi = uv.y * 2.0 * PI;\n    float cosTheta = pow(1.0 - uv.x, 1.0 / (specPow + 1.0));\n    float sinTheta = sqrt(1.0 - cosTheta * cosTheta);\n    vec3 sampleDir = vec3(cos(phi) * sinTheta, sin(phi) * sinTheta, cosTheta);\n    return vecSpace * sampleDir;\n}\n\nmat3 matrixFromVector(vec3 n) { // frisvad\n    float a = 1.0 / (1.0 + n.z);\n    float b = -n.x * n.y * a;\n    vec3 b1 = vec3(1.0 - n.x * n.x * a, b, -n.x);\n    vec3 b2 = vec3(b, 1.0 - n.y * n.y * a, -n.y);\n    return mat3(b1, b2, n);\n}\n\nvec4 encodeRGBM(vec3 color) { // modified RGBM\n    vec4 encoded;\n    encoded.rgb = pow(color.rgb, vec3(0.5));\n    encoded.rgb *= 1.0 / 8.0;\n\n    encoded.a = saturate( max( max( encoded.r, encoded.g ), max( encoded.b, 1.0 / 255.0 ) ) );\n    encoded.a = ceil(encoded.a * 255.0) / 255.0;\n\n    encoded.rgb /= encoded.a;\n    return encoded;\n}\n\nvoid main(void) {\n\n    vec2 st = vUv0 * 2.0 - 1.0;\n\n    if (params.w==1.0 || params.w==3.0) {\n        st = 2.0 * floor(gl_FragCoord.xy) / (params.z - 1.0) - 1.0;\n    }\n\n    float face = params.x;\n\n    vec3 vec;\n    if (face==0.0) {\n        vec = vec3(1, -st.y, -st.x);\n    } else if (face==1.0) {\n        vec = vec3(-1, -st.y, st.x);\n    } else if (face==2.0) {\n        vec = vec3(st.x, 1, st.y);\n    } else if (face==3.0) {\n        vec = vec3(st.x, -1, -st.y);\n    } else if (face==4.0) {\n        vec = vec3(st.x, -st.y, 1);\n    } else {\n        vec = vec3(-st.x, -st.y, -1);\n    }\n\n    mat3 vecSpace = matrixFromVector(normalize(vec));\n\n    vec3 color = vec3(0.0);\n    const int samples = $NUMSAMPLES;\n    vec3 vect;\n    for(int i=0; i<samples; i++) {\n        float sini = sin(float(i));\n        float cosi = cos(float(i));\n        float rand = rnd(vec2(sini, cosi));\n\n        vect = hemisphereSample_$METHOD(vec2(float(i) / float(samples), rand), vecSpace, vec, params.y);\n\n        color += $textureCube(source, vect).rgb;\n    }\n    color /= float(samples);\n\n    gl_FragColor = params.w < 2.0? vec4(color, 1.0) : encodeRGBM(color);\n}\n";
pc.shaderChunks.reflDirPS = "void getReflDir() {\n    dReflDirW = normalize(-reflect(dViewDirW, dNormalW));\n}\n\n";
pc.shaderChunks.reflectionCubePS = "uniform samplerCube texture_cubeMap;\nuniform float material_reflectivity;\nvoid addReflection() {\n    vec3 lookupVec = fixSeams(cubeMapProject(dReflDirW));\n    lookupVec.x *= -1.0;\n    dReflection += vec4($textureCubeSAMPLE(texture_cubeMap, lookupVec).rgb, material_reflectivity);\n}\n";
pc.shaderChunks.reflectionDpAtlasPS = "uniform sampler2D texture_sphereMap;\nuniform float material_reflectivity;\n\nvec2 getDpAtlasUv(vec2 uv, float mip) {\n\n    vec4 rect;\n    float sx = saturate(mip - 2.0);\n    rect.x = sx * 0.5;\n\n    float t = mip - rect.x * 6.0;\n    float i = 1.0 - rect.x;\n    rect.y = min(t * 0.5, 0.75) * i + rect.x;\n\n    float st = saturate(t);\n    rect.z = (1.0 - st * 0.5) * i;\n    rect.w = rect.z * 0.5;\n\n    float rcRectZ = 1.0 / rect.z;\n    float scaleFactor = 0.00390625 * rcRectZ; // 0.0078125 = (256 + 2) / 256 - 1, 0.00390625 same for 512\n    vec2 scale = vec2(scaleFactor, scaleFactor * 2.0);\n    uv = uv * (vec2(1.0) - scale) + scale * 0.5;\n\n    uv = uv * rect.zw + rect.xy;\n\n    return uv;\n}\n\nvoid addReflection() {\n\n    vec3 reflDir = normalize(cubeMapProject(dReflDirW));\n\n    // Convert vector to DP coords\n    bool up = reflDir.y > 0.0;\n    float scale = 0.90909090909090909090909090909091;// 1.0 / 1.1;\n    vec3 reflDirWarp = reflDir.xzx * vec3(-0.25, 0.5, 0.25);\n    float reflDirVer = abs(reflDir.y) + 1.0;\n    reflDirWarp /= reflDirVer;\n    reflDirWarp *= scale;\n    reflDirWarp = vec3(0.75, 0.5, 0.25) - reflDirWarp;\n    vec2 tc = up? reflDirWarp.xy : reflDirWarp.zy;\n\n    float bias = saturate(1.0 - dGlossiness) * 5.0; // multiply by max mip level\n\n    float mip = floor(bias);\n    vec3 tex1 = $texture2DSAMPLE(texture_sphereMap, getDpAtlasUv(tc, mip)).rgb;\n\n    mip = min(mip + 1.0, 5.0);\n    vec3 tex2 = $texture2DSAMPLE(texture_sphereMap, getDpAtlasUv(tc, mip)).rgb;\n\n    tex1 = mix(tex1, tex2, fract(bias));\n    tex1 = processEnvironment(tex1);\n\n    dReflection += vec4(tex1, material_reflectivity);\n}\n\n\n";
pc.shaderChunks.reflectionPrefilteredCubePS = "uniform samplerCube texture_prefilteredCubeMap128;\nuniform samplerCube texture_prefilteredCubeMap64;\nuniform samplerCube texture_prefilteredCubeMap32;\nuniform samplerCube texture_prefilteredCubeMap16;\nuniform samplerCube texture_prefilteredCubeMap8;\nuniform samplerCube texture_prefilteredCubeMap4;\nuniform float material_reflectivity;\n\nvoid addReflection() {\n\n    // Unfortunately, WebGL doesn't allow us using textureCubeLod. Therefore bunch of nasty workarounds is required.\n    // We fix mip0 to 128x128, so code is rather static.\n    // Mips smaller than 4x4 aren't great even for diffuse. Don't forget that we don't have bilinear filtering between different faces.\n\n    float bias = saturate(1.0 - dGlossiness) * 5.0; // multiply by max mip level\n    int index1 = int(bias);\n    int index2 = int(min(bias + 1.0, 7.0));\n\n    vec3 fixedReflDir = fixSeams(cubeMapProject(dReflDirW), bias);\n    fixedReflDir.x *= -1.0;\n\n    vec4 cubes[6];\n    cubes[0] = textureCube(texture_prefilteredCubeMap128, fixedReflDir);\n    cubes[1] = textureCube(texture_prefilteredCubeMap64, fixedReflDir);\n    cubes[2] = textureCube(texture_prefilteredCubeMap32, fixedReflDir);\n    cubes[3] = textureCube(texture_prefilteredCubeMap16, fixedReflDir);\n    cubes[4] = textureCube(texture_prefilteredCubeMap8, fixedReflDir);\n    cubes[5] = textureCube(texture_prefilteredCubeMap4, fixedReflDir);\n\n    // Also we don't have dynamic indexing in PS, so...\n    vec4 cube[2];\n    for(int i = 0; i < 6; i++) {\n        if (i == index1) {\n            cube[0] = cubes[i];\n        }\n        if (i == index2) {\n            cube[1] = cubes[i];\n        }\n    }\n\n    // another variant\n    /*if (index1==0){ cube[0]=cubes[0];\n    }else if (index1==1){ cube[0]=cubes[1];\n    }else if (index1==2){ cube[0]=cubes[2];\n    }else if (index1==3){ cube[0]=cubes[3];\n    }else if (index1==4){ cube[0]=cubes[4];\n    }else if (index1==5){ cube[0]=cubes[5];}\n\n    if (index2==0){ cube[1]=cubes[0];\n    }else if (index2==1){ cube[1]=cubes[1];\n    }else if (index2==2){ cube[1]=cubes[2];\n    }else if (index2==3){ cube[1]=cubes[3];\n    }else if (index2==4){ cube[1]=cubes[4];\n    }else if (index2==5){ cube[1]=cubes[5];}*/\n\n    vec4 cubeFinal = mix(cube[0], cube[1], fract(bias));\n    vec3 refl = processEnvironment($DECODE(cubeFinal).rgb);\n\n    dReflection += vec4(refl, material_reflectivity);\n}\n\n";
pc.shaderChunks.reflectionPrefilteredCubeLodPS = "#extension GL_EXT_shader_texture_lod : enable\n\nuniform samplerCube texture_prefilteredCubeMap128;\nuniform float material_reflectivity;\n\nvoid addReflection() {\n\n    float bias = saturate(1.0 - dGlossiness) * 5.0; // multiply by max mip level\n    vec3 fixedReflDir = fixSeams(cubeMapProject(dReflDirW), bias);\n    fixedReflDir.x *= -1.0;\n\n    vec3 refl = processEnvironment($DECODE( textureCubeLodEXT(texture_prefilteredCubeMap128, fixedReflDir, bias) ).rgb);\n\n    dReflection += vec4(refl, material_reflectivity);\n}\n\n";
pc.shaderChunks.reflectionSpherePS = "uniform mat4 matrix_view;\nuniform sampler2D texture_sphereMap;\nuniform float material_reflectivity;\nvoid addReflection() {\n\n    vec3 reflDirV = (mat3(matrix_view) * dReflDirW).xyz;\n\n    float m = 2.0 * sqrt( dot(reflDirV.xy, reflDirV.xy) + (reflDirV.z+1.0)*(reflDirV.z+1.0) );\n    vec2 sphereMapUv = reflDirV.xy / m + 0.5;\n\n    dReflection += vec4($texture2DSAMPLE(texture_sphereMap, sphereMapUv).rgb, material_reflectivity);\n}\n\n\n";
pc.shaderChunks.reflectionSphereLowPS = "uniform sampler2D texture_sphereMap;\nuniform float material_reflectivity;\nvoid addReflection() {\n\n    vec3 reflDirV = vNormalV;\n\n    vec2 sphereMapUv = reflDirV.xy * 0.5 + 0.5;\n    dReflection += vec4($texture2DSAMPLE(texture_sphereMap, sphereMapUv).rgb, material_reflectivity);\n}\n\n";
pc.shaderChunks.refractionPS = "uniform float material_refraction, material_refractionIndex;\n\nvec3 refract2(vec3 viewVec, vec3 Normal, float IOR) {\n    float vn = dot(viewVec, Normal);\n    float k = 1.0 - IOR * IOR * (1.0 - vn * vn);\n    vec3 refrVec = IOR * viewVec - (IOR * vn + sqrt(k)) * Normal;\n    return refrVec;\n}\n\nvoid addRefraction() {\n\n    // use same reflection code with refraction vector\n    vec3 tmp = dReflDirW;\n    vec4 tmp2 = dReflection;\n    dReflection = vec4(0.0);\n    dReflDirW = refract2(-dViewDirW, dNormalW, material_refractionIndex);\n\n    addReflection();\n\n    dDiffuseLight = mix(dDiffuseLight, dReflection.rgb * dAlbedo, material_refraction);\n    dReflDirW = tmp;\n    dReflection = tmp2;\n}\n\n";
pc.shaderChunks.rgbmPS = "vec3 decodeRGBM(vec4 rgbm) {\n    vec3 color = (8.0 * rgbm.a) * rgbm.rgb;\n    return color * color;\n}\n\nvec3 texture2DRGBM(sampler2D tex, vec2 uv) {\n    return decodeRGBM(texture2D(tex, uv));\n}\n\nvec3 textureCubeRGBM(samplerCube tex, vec3 uvw) {\n    return decodeRGBM(textureCube(tex, uvw));\n}\n\n";
pc.shaderChunks.shadowCommonPS = "void normalOffsetPointShadow(vec4 shadowParams) {\n    float distScale = length(dLightDirW);\n    vec3 wPos = vPositionW + vNormalW * shadowParams.y * clamp(1.0 - dot(vNormalW, -dLightDirNormW), 0.0, 1.0) * distScale; //0.02\n    vec3 dir = wPos - dLightPosW;\n    dLightDirW = dir;\n}\n\n";
pc.shaderChunks.shadowCoordPS = "void _getShadowCoordOrtho(mat4 shadowMatrix, vec3 shadowParams, vec3 wPos) {\n    vec4 projPos = shadowMatrix * vec4(wPos, 1.0);\n    projPos.z += shadowParams.z;\n    projPos.z = min(projPos.z, 1.0);\n    dShadowCoord = projPos.xyz;\n}\n\nvoid _getShadowCoordPersp(mat4 shadowMatrix, vec4 shadowParams, vec3 wPos) {\n    vec4 projPos = shadowMatrix * vec4(wPos, 1.0);\n    projPos.xyz /= projPos.w;\n    projPos.z += shadowParams.z;\n    dShadowCoord = projPos.xyz;\n}\n\nvoid getShadowCoordOrtho(mat4 shadowMatrix, vec3 shadowParams) {\n    _getShadowCoordOrtho(shadowMatrix, shadowParams, vPositionW);\n}\n\nvoid getShadowCoordPersp(mat4 shadowMatrix, vec4 shadowParams) {\n    _getShadowCoordPersp(shadowMatrix, shadowParams, vPositionW);\n}\n\nvoid getShadowCoordPerspNormalOffset(mat4 shadowMatrix, vec4 shadowParams) {\n    float distScale = abs(dot(vPositionW - dLightPosW, dLightDirNormW)); // fov?\n    vec3 wPos = vPositionW + vNormalW * shadowParams.y * clamp(1.0 - dot(vNormalW, -dLightDirNormW), 0.0, 1.0) * distScale;\n\n    _getShadowCoordPersp(shadowMatrix, shadowParams, wPos);\n}\n\nvoid getShadowCoordOrthoNormalOffset(mat4 shadowMatrix, vec3 shadowParams) {\n    vec3 wPos = vPositionW + vNormalW * shadowParams.y * clamp(1.0 - dot(vNormalW, -dLightDirNormW), 0.0, 1.0); //0.08\n\n    _getShadowCoordOrtho(shadowMatrix, shadowParams, wPos);\n}\n\n";
pc.shaderChunks.shadowCoordVS = "void getLightDirPoint(vec3 lightPosW) {\n    vec3 lightDirW = vPositionW - lightPosW;\n    dLightDirNormW = normalize(lightDirW);\n    dLightPosW = lightPosW;\n}\n\nvoid _getShadowCoordOrtho(mat4 shadowMatrix, vec3 shadowParams, vec3 wPos) {\n    vec4 projPos = shadowMatrix * vec4(wPos, 1.0);\n    vMainShadowUv = projPos;\n}\n\nvoid _getShadowCoordPersp(mat4 shadowMatrix, vec3 shadowParams, vec3 wPos) {\n    vec4 projPos = shadowMatrix * vec4(wPos, 1.0);\n    vMainShadowUv = projPos;\n}\n\nvoid getShadowCoordOrtho(mat4 shadowMatrix, vec3 shadowParams) {\n    _getShadowCoordOrtho(shadowMatrix, shadowParams, vPositionW);\n}\n\nvoid getShadowCoordPersp(mat4 shadowMatrix, vec3 shadowParams) {\n    _getShadowCoordPersp(shadowMatrix, shadowParams, vPositionW);\n}\n\nvoid getShadowCoordPerspNormalOffset(mat4 shadowMatrix, vec3 shadowParams) {\n    float distScale = abs(dot(vPositionW - dLightPosW, dLightDirNormW)); // fov?\n    vec3 wPos = vPositionW + dNormalW * shadowParams.y * clamp(1.0 - dot(dNormalW, -dLightDirNormW), 0.0, 1.0) * distScale;\n\n    _getShadowCoordPersp(shadowMatrix, shadowParams, wPos);\n}\n\nvoid getShadowCoordOrthoNormalOffset(mat4 shadowMatrix, vec3 shadowParams) {\n    vec3 wPos = vPositionW + dNormalW * shadowParams.y * clamp(1.0 - dot(dNormalW, -dLightDirNormW), 0.0, 1.0); //0.08\n\n    _getShadowCoordOrtho(shadowMatrix, shadowParams, wPos);\n}\n\n";
pc.shaderChunks.shadowEVSMPS = "float VSM$(sampler2D tex, vec2 texCoords, float resolution, float Z, float vsmBias, float exponent) {\n    vec3 moments = texture2D(tex, texCoords).xyz;\n    return calculateEVSM(moments, Z, vsmBias, exponent);\n}\n\nfloat getShadowVSM$(sampler2D shadowMap, vec3 shadowParams, float exponent) {\n    return VSM$(shadowMap, dShadowCoord.xy, shadowParams.x, dShadowCoord.z, shadowParams.y, exponent);\n}\n\nfloat getShadowSpotVSM$(sampler2D shadowMap, vec4 shadowParams, float exponent) {\n    return VSM$(shadowMap, dShadowCoord.xy, shadowParams.x, length(dLightDirW) * shadowParams.w + shadowParams.z, shadowParams.y, exponent);\n}\n\n";
pc.shaderChunks.shadowEVSMnPS = "float VSM$(sampler2D tex, vec2 texCoords, float resolution, float Z, float vsmBias, float exponent) {\n    float pixelSize = 1.0 / resolution;\n    texCoords -= vec2(pixelSize);\n    vec3 s00 = texture2D(tex, texCoords).xyz;\n    vec3 s10 = texture2D(tex, texCoords + vec2(pixelSize, 0)).xyz;\n    vec3 s01 = texture2D(tex, texCoords + vec2(0, pixelSize)).xyz;\n    vec3 s11 = texture2D(tex, texCoords + vec2(pixelSize)).xyz;\n    vec2 fr = fract(texCoords * resolution);\n    vec3 h0 = mix(s00, s10, fr.x);\n    vec3 h1 = mix(s01, s11, fr.x);\n    vec3 moments = mix(h0, h1, fr.y);\n    return calculateEVSM(moments, Z, vsmBias, exponent);\n}\n\nfloat getShadowVSM$(sampler2D shadowMap, vec3 shadowParams, float exponent) {\n    return VSM$(shadowMap, dShadowCoord.xy, shadowParams.x, dShadowCoord.z, shadowParams.y, exponent);\n}\n\nfloat getShadowSpotVSM$(sampler2D shadowMap, vec4 shadowParams, float exponent) {\n    return VSM$(shadowMap, dShadowCoord.xy, shadowParams.x, length(dLightDirW) * shadowParams.w + shadowParams.z, shadowParams.y, exponent);\n}\n\n";
pc.shaderChunks.shadowStandardPS = "float unpackFloat(vec4 rgbaDepth) {\n    const vec4 bitShift = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);\n    return dot(rgbaDepth, bitShift);\n}\n\nvec3 lessThan2(vec3 a, vec3 b) {\n    return clamp((b - a)*1000.0, 0.0, 1.0); // softer version\n}\n\n// ----- Direct/Spot Sampling -----\n\nfloat getShadowHard(sampler2D shadowMap, vec3 shadowParams) {\n    float depth = unpackFloat(texture2D(shadowMap, dShadowCoord.xy));\n    return (depth < dShadowCoord.z) ? 0.0 : 1.0;\n}\n\nfloat getShadowSpotHard(sampler2D shadowMap, vec4 shadowParams) {\n    float depth = unpackFloat(texture2D(shadowMap, dShadowCoord.xy));\n    return (depth < (length(dLightDirW) * shadowParams.w + shadowParams.z)) ? 0.0 : 1.0;\n}\n\nfloat _xgetShadowPCF3x3(mat3 depthKernel, sampler2D shadowMap, vec3 shadowParams) {\n    mat3 shadowKernel;\n    vec3 shadowCoord = dShadowCoord;\n    vec3 shadowZ = vec3(shadowCoord.z);\n    shadowKernel[0] = vec3(greaterThan(depthKernel[0], shadowZ));\n    shadowKernel[1] = vec3(greaterThan(depthKernel[1], shadowZ));\n    shadowKernel[2] = vec3(greaterThan(depthKernel[2], shadowZ));\n\n    vec2 fractionalCoord = fract( shadowCoord.xy * shadowParams.x );\n\n    shadowKernel[0] = mix(shadowKernel[0], shadowKernel[1], fractionalCoord.x);\n    shadowKernel[1] = mix(shadowKernel[1], shadowKernel[2], fractionalCoord.x);\n\n    vec4 shadowValues;\n    shadowValues.x = mix(shadowKernel[0][0], shadowKernel[0][1], fractionalCoord.y);\n    shadowValues.y = mix(shadowKernel[0][1], shadowKernel[0][2], fractionalCoord.y);\n    shadowValues.z = mix(shadowKernel[1][0], shadowKernel[1][1], fractionalCoord.y);\n    shadowValues.w = mix(shadowKernel[1][1], shadowKernel[1][2], fractionalCoord.y);\n\n    return dot( shadowValues, vec4( 1.0 ) ) * 0.25;\n}\n\nfloat _getShadowPCF3x3(sampler2D shadowMap, vec3 shadowParams) {\n    vec3 shadowCoord = dShadowCoord;\n\n    float xoffset = 1.0 / shadowParams.x; // 1/shadow map width\n    float dx0 = -xoffset;\n    float dx1 = xoffset;\n\n    mat3 depthKernel;\n    depthKernel[0][0] = unpackFloat(texture2D(shadowMap, shadowCoord.xy + vec2(dx0, dx0)));\n    depthKernel[0][1] = unpackFloat(texture2D(shadowMap, shadowCoord.xy + vec2(dx0, 0.0)));\n    depthKernel[0][2] = unpackFloat(texture2D(shadowMap, shadowCoord.xy + vec2(dx0, dx1)));\n    depthKernel[1][0] = unpackFloat(texture2D(shadowMap, shadowCoord.xy + vec2(0.0, dx0)));\n    depthKernel[1][1] = unpackFloat(texture2D(shadowMap, shadowCoord.xy));\n    depthKernel[1][2] = unpackFloat(texture2D(shadowMap, shadowCoord.xy + vec2(0.0, dx1)));\n    depthKernel[2][0] = unpackFloat(texture2D(shadowMap, shadowCoord.xy + vec2(dx1, dx0)));\n    depthKernel[2][1] = unpackFloat(texture2D(shadowMap, shadowCoord.xy + vec2(dx1, 0.0)));\n    depthKernel[2][2] = unpackFloat(texture2D(shadowMap, shadowCoord.xy + vec2(dx1, dx1)));\n\n    return _xgetShadowPCF3x3(depthKernel, shadowMap, shadowParams);\n}\n\nfloat getShadowPCF3x3(sampler2D shadowMap, vec3 shadowParams) {\n    return _getShadowPCF3x3(shadowMap, shadowParams);\n}\n\nfloat getShadowSpotPCF3x3(sampler2D shadowMap, vec4 shadowParams) {\n    dShadowCoord.z = length(dLightDirW) * shadowParams.w + shadowParams.z;\n    return _getShadowPCF3x3(shadowMap, shadowParams.xyz);\n}\n\n\n// ----- Point Sampling -----\n\nfloat getShadowPointHard(samplerCube shadowMap, vec4 shadowParams) {\n    float depth = unpackFloat(textureCube(shadowMap, dLightDirNormW));\n    return float(depth > length(dLightDirW) * shadowParams.w + shadowParams.z);\n}\n\nfloat _getShadowPoint(samplerCube shadowMap, vec4 shadowParams, vec3 dir) {\n\n    vec3 tc = normalize(dir);\n    vec3 tcAbs = abs(tc);\n\n    vec4 dirX = vec4(1,0,0, tc.x);\n    vec4 dirY = vec4(0,1,0, tc.y);\n    float majorAxisLength = tc.z;\n    if ((tcAbs.x > tcAbs.y) && (tcAbs.x > tcAbs.z)) {\n        dirX = vec4(0,0,1, tc.z);\n        dirY = vec4(0,1,0, tc.y);\n        majorAxisLength = tc.x;\n    } else if ((tcAbs.y > tcAbs.x) && (tcAbs.y > tcAbs.z)) {\n        dirX = vec4(1,0,0, tc.x);\n        dirY = vec4(0,0,1, tc.z);\n        majorAxisLength = tc.y;\n    }\n\n    float shadowParamsInFaceSpace = ((1.0/shadowParams.x) * 2.0) * abs(majorAxisLength);\n\n    vec3 xoffset = (dirX.xyz * shadowParamsInFaceSpace);\n    vec3 yoffset = (dirY.xyz * shadowParamsInFaceSpace);\n    vec3 dx0 = -xoffset;\n    vec3 dy0 = -yoffset;\n    vec3 dx1 = xoffset;\n    vec3 dy1 = yoffset;\n\n    mat3 shadowKernel;\n    mat3 depthKernel;\n\n    depthKernel[0][0] = unpackFloat(textureCube(shadowMap, tc + dx0 + dy0));\n    depthKernel[0][1] = unpackFloat(textureCube(shadowMap, tc + dx0));\n    depthKernel[0][2] = unpackFloat(textureCube(shadowMap, tc + dx0 + dy1));\n    depthKernel[1][0] = unpackFloat(textureCube(shadowMap, tc + dy0));\n    depthKernel[1][1] = unpackFloat(textureCube(shadowMap, tc));\n    depthKernel[1][2] = unpackFloat(textureCube(shadowMap, tc + dy1));\n    depthKernel[2][0] = unpackFloat(textureCube(shadowMap, tc + dx1 + dy0));\n    depthKernel[2][1] = unpackFloat(textureCube(shadowMap, tc + dx1));\n    depthKernel[2][2] = unpackFloat(textureCube(shadowMap, tc + dx1 + dy1));\n\n    vec3 shadowZ = vec3(length(dir) * shadowParams.w + shadowParams.z);\n\n    shadowKernel[0] = vec3(lessThan2(depthKernel[0], shadowZ));\n    shadowKernel[1] = vec3(lessThan2(depthKernel[1], shadowZ));\n    shadowKernel[2] = vec3(lessThan2(depthKernel[2], shadowZ));\n\n    vec2 uv = (vec2(dirX.w, dirY.w) / abs(majorAxisLength)) * 0.5;\n\n    vec2 fractionalCoord = fract( uv * shadowParams.x );\n\n    shadowKernel[0] = mix(shadowKernel[0], shadowKernel[1], fractionalCoord.x);\n    shadowKernel[1] = mix(shadowKernel[1], shadowKernel[2], fractionalCoord.x);\n\n    vec4 shadowValues;\n    shadowValues.x = mix(shadowKernel[0][0], shadowKernel[0][1], fractionalCoord.y);\n    shadowValues.y = mix(shadowKernel[0][1], shadowKernel[0][2], fractionalCoord.y);\n    shadowValues.z = mix(shadowKernel[1][0], shadowKernel[1][1], fractionalCoord.y);\n    shadowValues.w = mix(shadowKernel[1][1], shadowKernel[1][2], fractionalCoord.y);\n\n    return 1.0 - dot( shadowValues, vec4( 1.0 ) ) * 0.25;\n}\n\nfloat getShadowPointPCF3x3(samplerCube shadowMap, vec4 shadowParams) {\n    return _getShadowPoint(shadowMap, shadowParams, dLightDirW);\n}\n\n";
pc.shaderChunks.shadowStandardVSPS = "float getShadowHardVS(sampler2D shadowMap, vec3 shadowParams) {\n    float depth = unpackFloat(texture2DProj(shadowMap, vMainShadowUv));\n    return (depth < min(vMainShadowUv.z + shadowParams.z, 1.0)) ? 0.0 : 1.0;\n}\n\nfloat getShadowPCF3x3VS(sampler2D shadowMap, vec3 shadowParams) {\n    dShadowCoord = vMainShadowUv.xyz;\n    dShadowCoord.z += shadowParams.z;\n    dShadowCoord.xyz /= vMainShadowUv.w;\n    dShadowCoord.z = min(dShadowCoord.z, 1.0);\n    return _getShadowPCF3x3(shadowMap, shadowParams);\n}\n\n";
pc.shaderChunks.shadowVSM8PS = "float calculateVSM8(vec3 moments, float Z, float vsmBias) {\n    float VSMBias = vsmBias;//0.01 * 0.25;\n    float depthScale = VSMBias * Z;\n    float minVariance1 = depthScale * depthScale;\n    return chebyshevUpperBound(moments.xy, Z, minVariance1, 0.1);\n}\n\nfloat decodeFloatRG(vec2 rg) {\n    return rg.y*(1.0/255.0) + rg.x;\n}\n\nfloat VSM8(sampler2D tex, vec2 texCoords, float resolution, float Z, float vsmBias, float exponent) {\n    vec4 c = texture2D(tex, texCoords);\n    vec3 moments = vec3(decodeFloatRG(c.xy), decodeFloatRG(c.zw), 0.0);\n    return calculateVSM8(moments, Z, vsmBias);\n}\n\nfloat getShadowVSM8(sampler2D shadowMap, vec3 shadowParams, float exponent) {\n    return VSM8(shadowMap, dShadowCoord.xy, shadowParams.x, dShadowCoord.z, shadowParams.y, 0.0);\n}\n\nfloat getShadowSpotVSM8(sampler2D shadowMap, vec4 shadowParams, float exponent) {\n    return VSM8(shadowMap, dShadowCoord.xy, shadowParams.x, length(dLightDirW) * shadowParams.w + shadowParams.z, shadowParams.y, 0.0);\n}\n";
pc.shaderChunks.shadowVSMVSPS = "float getShadowVSM$VS(sampler2D shadowMap, vec3 shadowParams, float exponent) {\n    dShadowCoord = vMainShadowUv.xyz;\n    dShadowCoord.z += shadowParams.z;\n    dShadowCoord.xyz /= vMainShadowUv.w;\n    dShadowCoord.z = min(dShadowCoord.z, 1.0);\n\n    return $VSM(shadowMap, dShadowCoord.xy, shadowParams.x, dShadowCoord.z, shadowParams.y, exponent);\n}\n\n";
pc.shaderChunks.shadowVSM_commonPS = "float linstep(float a, float b, float v) {\n    return saturate((v - a) / (b - a));\n}\n\nfloat reduceLightBleeding(float pMax, float amount) {\n  // Remove the [0, amount] tail and linearly rescale (amount, 1].\n   return linstep(amount, 1.0, pMax);\n}\n\nfloat chebyshevUpperBound(vec2 moments, float mean, float minVariance, float lightBleedingReduction) {\n    // Compute variance\n    float variance = moments.y - (moments.x * moments.x);\n    variance = max(variance, minVariance);\n\n    // Compute probabilistic upper bound\n    float d = mean - moments.x;\n    float pMax = variance / (variance + (d * d));\n\n    pMax = reduceLightBleeding(pMax, lightBleedingReduction);\n\n    // One-tailed Chebyshev\n    return (mean <= moments.x ? 1.0 : pMax);\n}\n\nfloat calculateEVSM(vec3 moments, float Z, float vsmBias, float exponent) {\n    Z = 2.0 * Z - 1.0;\n    float warpedDepth = exp(exponent * Z);\n\n    moments.xy += vec2(warpedDepth, warpedDepth*warpedDepth) * (1.0 - moments.z);\n\n    float VSMBias = vsmBias;//0.01 * 0.25;\n    float depthScale = VSMBias * exponent * warpedDepth;\n    float minVariance1 = depthScale * depthScale;\n    return chebyshevUpperBound(moments.xy, warpedDepth, minVariance1, 0.1);\n}\n\n";
pc.shaderChunks.skyboxPS = "varying vec3 vViewDir;\nuniform samplerCube texture_cubeMap;\n\nvoid main(void) {\n    gl_FragColor = textureCube(texture_cubeMap, fixSeams(vViewDir));\n}\n\n";
pc.shaderChunks.skyboxHDRPS = "varying vec3 vViewDir;\nuniform samplerCube texture_cubeMap;\n\nvoid main(void) {\n    vec3 color = processEnvironment($textureCubeSAMPLE(texture_cubeMap, fixSeamsStatic(vViewDir, $FIXCONST)).rgb);\n    color = toneMap(color);\n    color = gammaCorrectOutput(color);\n    gl_FragColor = vec4(color, 1.0);\n}\n\n";
pc.shaderChunks.skyboxPrefilteredCubePS = "varying vec3 vViewDir;\nuniform samplerCube texture_cubeMap;\n\nvec3 fixSeamsStretch(vec3 vec, float mipmapIndex, float cubemapSize) {\n    float scale = 1.0 - exp2(mipmapIndex) / cubemapSize;\n    float M = max(max(abs(vec.x), abs(vec.y)), abs(vec.z));\n    if (abs(vec.x) != M) vec.x *= scale;\n    if (abs(vec.y) != M) vec.y *= scale;\n    if (abs(vec.z) != M) vec.z *= scale;\n    return vec;\n}\n\nvoid main(void) {\n    vec3 color = textureCubeRGBM(texture_cubeMap, fixSeamsStretch(vViewDir, 0.0, 128.0));\n    color = toneMap(color);\n    color = gammaCorrectOutput(color);\n    gl_FragColor = vec4(color, 1.0);\n}\n\n";
pc.shaderChunks.specularAaNonePS = "float antiAliasGlossiness(float power) {\n    return power;\n}\n\n";
pc.shaderChunks.specularAaToksvigPS = "float antiAliasGlossiness(float power) {\n    float rlen = 1.0 / saturate(length(dNormalMap));\n    float toksvig = 1.0 / (1.0 + power * (rlen - 1.0));\n    return power * toksvig;\n}\n\n";
pc.shaderChunks.specularAaToksvigFloatPS = "float antiAliasGlossiness(float power) {\n    float rlen = 1.0 / saturate(length(dNormalMap));\n    float toksvig = 1.0 / (1.0 + power * (rlen - 1.0));\n    return power * mix(1.0, toksvig, material_bumpiness);\n}\n\n";
pc.shaderChunks.specularConstPS = "uniform vec3 material_specular;\nvoid getSpecularity() {\n    dSpecularity = material_specular;\n}\n\n";
pc.shaderChunks.specularTexPS = "uniform sampler2D texture_specularMap;\nvoid getSpecularity() {\n    dSpecularity = texture2D(texture_specularMap, $UV).$CH;\n}\n\n";
pc.shaderChunks.specularTexConstPS = "uniform sampler2D texture_specularMap;\nuniform vec3 material_specular;\nvoid getSpecularity() {\n    dSpecularity = texture2D(texture_specularMap, $UV).$CH * material_specular;\n}\n\n";
pc.shaderChunks.specularVertPS = "void getSpecularity() {\n    dSpecularity = saturate(vVertexColor.$CH);\n}\n\n";
pc.shaderChunks.specularVertConstPS = "uniform vec3 material_specular;\nvoid getSpecularity() {\n    dSpecularity = saturate(vVertexColor.$CH) * material_specular;\n}\n\n";
pc.shaderChunks.spotPS = "float getSpotEffect(vec3 lightSpotDirW, float lightInnerConeAngle, float lightOuterConeAngle) {\n    float cosAngle = dot(dLightDirNormW, lightSpotDirW);\n    return smoothstep(lightOuterConeAngle, lightInnerConeAngle, cosAngle);\n}\n\n";
pc.shaderChunks.startPS = "\nvoid main(void) {\n\tdDiffuseLight = vec3(0);\n\tdSpecularLight = vec3(0);\n    dReflection = vec4(0);\n    dSpecularity = vec3(0);\n\n\n";
pc.shaderChunks.startVS = "\nvoid main(void) {\n    gl_Position = getPosition();\n";
pc.shaderChunks.storeEVSMPS = "float exponent = VSM_EXPONENT;\n\ndepth = 2.0 * depth - 1.0;\ndepth =  exp(exponent * depth);\ngl_FragColor = vec4(depth, depth*depth, 1.0, 1.0);\n\n";
pc.shaderChunks.tangentBinormalVS = "\nvec3 getTangent() {\n    return normalize(dNormalMatrix * vertex_tangent.xyz);\n}\n\nvec3 getBinormal() {\n    return cross(vNormalW, vTangentW) * vertex_tangent.w;\n}\n\n";
pc.shaderChunks.tonemappingFilmicPS = "const float A =  0.15;\nconst float B =  0.50;\nconst float C =  0.10;\nconst float D =  0.20;\nconst float E =  0.02;\nconst float F =  0.30;\nconst float W =  11.2;\n\nuniform float exposure;\n\nvec3 uncharted2Tonemap(vec3 x) {\n   return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\nvec3 toneMap(vec3 color) {\n    color = uncharted2Tonemap(color * exposure);\n    vec3 whiteScale = 1.0 / uncharted2Tonemap(vec3(W,W,W));\n    color = color * whiteScale;\n\n    return color;\n}\n\n";
pc.shaderChunks.tonemappingLinearPS = "uniform float exposure;\nvec3 toneMap(vec3 color) {\n    return color * exposure;\n}\n\n";
pc.shaderChunks.tonemappingNonePS = "vec3 toneMap(vec3 color) {\n    return color;\n}\n\n";
pc.shaderChunks.transformVS = "mat4 getModelMatrix() {\n    return matrix_model;\n}\n\nvec4 getPosition() {\n    dModelMatrix = getModelMatrix();\n    vec4 posW = dModelMatrix * vec4(vertex_position, 1.0);\n    dPositionW = posW.xyz;\n    return matrix_viewProjection * posW;\n}\n\nvec3 getWorldPosition() {\n    return dPositionW;\n}\n\n";
pc.shaderChunks.transformInstancedVS = "mat4 getModelMatrix() {\n    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);\n}\n\nvec4 getPosition() {\n    dModelMatrix = getModelMatrix();\n    vec4 posW = dModelMatrix * vec4(vertex_position, 1.0);\n    dPositionW = posW.xyz;\n    return matrix_viewProjection * posW;\n}\n\nvec3 getWorldPosition() {\n    return dPositionW;\n}\n\n";
pc.shaderChunks.transformSkinnedVS = "mat4 getModelMatrix() {\n    return getBoneMatrix(vertex_boneIndices.x) * vertex_boneWeights.x +\n           getBoneMatrix(vertex_boneIndices.y) * vertex_boneWeights.y +\n           getBoneMatrix(vertex_boneIndices.z) * vertex_boneWeights.z +\n           getBoneMatrix(vertex_boneIndices.w) * vertex_boneWeights.w;\n}\n\nvec4 getPosition() {\n    dModelMatrix = getModelMatrix();\n    vec4 posW = dModelMatrix * vec4(vertex_position, 1.0);\n    //posW.xyz /= posW.w;\n    posW.xyz += skinPosOffset;\n    dPositionW = posW.xyz;// / posW.w;\n    return matrix_viewProjection * posW;\n}\n\nvec3 getWorldPosition() {\n    return dPositionW;\n}\n\n";
pc.shaderChunks.transformUv1VS = "mat4 getModelMatrix() {\n    return matrix_model;\n}\nvec4 getPosition() {\n    dModelMatrix = getModelMatrix();\n    vec4 posW = dModelMatrix * vec4(vertex_position, 1.0);\n    dPositionW = posW.xyz;\n    return vec4(vertex_texCoord1.xy * 2.0 - 1.0, 0.5, 1);\n}\nvec3 getWorldPosition() {\n    return dPositionW;\n}\n\n";
pc.shaderChunks.uv0VS = "\nvec2 getUv0() {\n    return vertex_texCoord0;\n}\n";
pc.shaderChunks.uv1VS = "\nvec2 getUv1() {\n    return vertex_texCoord1;\n}\n";
pc.shaderChunks.viewDirPS = "void getViewDir() {\n    dViewDirW = normalize(view_position - vPositionW);\n}\n\n";
pc.shaderChunks.viewNormalVS = "\nuniform mat4 matrix_view;\nvec3 getViewNormal() {\n    return mat3(matrix_view) * vNormalW;\n}\n";
pc.programlib = {
    getSnippet: function(d, a) {
        var b = "";
        switch (a) {
            case "common_main_begin":
                b += "void main(void)\n{\n";
                break;
            case "common_main_end":
                b += "}\n";
                break;
            case "fs_alpha_test_decl":
                b += "uniform float alpha_ref;\n";
                break;
            case "fs_alpha_test":
                b += "    if (gl_FragColor.a < alpha_ref) discard;\n\n";
                break;
            case "fs_clamp":
                b += "    gl_FragColor = clamp(gl_FragColor, 0.0, 1.0);\n";
                break;
            case "fs_flat_color_decl":
                b += "uniform vec4 uColor;\n";
                break;
            case "fs_flat_color":
                b += "    gl_FragColor = uColor;\n";
                break;
            case "fs_fog_linear_decl":
            case "fs_fog_exp_decl":
            case "fs_fog_exp2_decl":
                b += "uniform vec3 fog_color;\n";
                b = "fs_fog_linear_decl" === a ? b + "uniform float fog_start;\nuniform float fog_end;\n\n" : b + "uniform float fog_density;\n\n";
                break;
            case "fs_fog_linear":
            case "fs_fog_exp":
            case "fs_fog_exp2":
                b += "    float depth = gl_FragCoord.z / gl_FragCoord.w;\n";
                b = ("fs_fog_linear" === a ? b + "    float fogFactor = (fog_end - depth) / (fog_end - fog_start);\n" : "fs_fog_exp" === a ? b + "    float fogFactor = exp(-depth * fog_density);\n" : b + "    float fogFactor = exp(-depth * depth * fog_density * fog_density);\n") +
                    "    fogFactor = clamp(fogFactor, 0.0, 1.0);\n    gl_FragColor.rgb = mix(fog_color, gl_FragColor.rgb, fogFactor);\n";
                break;
            case "fs_precision":
                b += "precision " + d.precision + " float;\n\n";
                break;
            case "fs_height_map_funcs":
                b += "vec3 perturb_normal( vec3 N, vec3 p, vec2 uv )\n{\n    vec3 dp1 = dFdx( p );\n    vec3 dp2 = dFdy( p );\n    vec2 duv1 = dFdx( uv );\n    vec2 duv2 = dFdy( uv );\n\n    vec3 dp2perp = cross( dp2, N );\n    vec3 dp1perp = cross( N, dp1 );\n\n    const float bumpScale = 0.125;\n    float Hll = bumpScale * texture2D( texture_heightMap, uv ).x;\n    float dBx = bumpScale * texture2D( texture_heightMap, uv + duv1 ).x - Hll;\n    float dBy = bumpScale * texture2D( texture_heightMap, uv + duv2 ).x - Hll;\n\n    float fDet = dot( dp1, dp2perp );\n    vec3 vGrad = sign( fDet ) * ( dBx * dp2perp + dBy * dp1perp );\n    return normalize( abs( fDet ) * N - vGrad );\n}\n\n";
                break;
            case "fs_normal_map_funcs":
                pc.precalculatedTangents || (b += "mat3 cotangent_frame( vec3 N, vec3 p, vec2 uv )\n{\n    vec3 dp1 = dFdx( p );\n    vec3 dp2 = dFdy( p );\n    vec2 duv1 = dFdx( uv );\n    vec2 duv2 = dFdy( uv );\n\n    vec3 dp2perp = cross( dp2, N );\n    vec3 dp1perp = cross( N, dp1 );\n    vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;\n    vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;\n\n    float invmax = inversesqrt( max( dot(T,T), dot(B,B) ) );\n    return mat3( T * invmax, B * invmax, N );\n}\n\nvec3 perturb_normal( vec3 N, vec3 V, vec2 uv )\n{\n    vec3 map = texture2D( texture_normalMap, uv ).xyz;\n    map = map * 255./127. - 128./127.;\n    map.xy = map.xy * material_bumpiness;\n    mat3 TBN = cotangent_frame( N, -V, uv );\n    return normalize( TBN * map );\n}\n\n");
                break;
            case "vs_skin_decl":
                b = d.supportsBoneTextures ? b + "attribute vec4 vertex_boneWeights;\nattribute vec4 vertex_boneIndices;\n\nuniform sampler2D texture_poseMap;\nuniform vec2 texture_poseMapSize;\nuniform vec3 skinPosOffset;\n\nmat4 getBoneMatrix(const in float i)\n{\n    float j = i * 4.0;\n    float x = mod(j, float(texture_poseMapSize.x));\n    float y = floor(j / float(texture_poseMapSize.x));\n\n    float dx = 1.0 / float(texture_poseMapSize.x);\n    float dy = 1.0 / float(texture_poseMapSize.y);\n\n    y = dy * (y + 0.5);\n\n    vec4 v1 = texture2D(texture_poseMap, vec2(dx * (x + 0.5), y));\n    vec4 v2 = texture2D(texture_poseMap, vec2(dx * (x + 1.5), y));\n    vec4 v3 = texture2D(texture_poseMap, vec2(dx * (x + 2.5), y));\n    vec4 v4 = texture2D(texture_poseMap, vec2(dx * (x + 3.5), y));\n\n    mat4 bone = mat4(v1, v2, v3, v4);\n\n    return bone;\n}" : b + ["attribute vec4 vertex_boneWeights;\nattribute vec4 vertex_boneIndices;\n", "uniform mat4 matrix_pose[" + d.getBoneLimit() + "];", "uniform vec3 skinPosOffset;\n\nmat4 getBoneMatrix(const in float i)\n{\n    mat4 bone = matrix_pose[int(i)];\n\n    return bone;\n}"].join("\n");
                b += "\n\n";
                break;
            case "vs_transform_decl":
                b += "attribute vec3 vertex_position;\nuniform mat4 matrix_model;\nuniform mat4 matrix_viewProjection;\n\n"
        }
        return b
    },
    gammaCode: function(d) { return d === pc.GAMMA_NONE ? pc.shaderChunks.gamma1_0PS : d === pc.GAMMA_SRGBFAST ? pc.shaderChunks.gamma2_2FastPS : pc.shaderChunks.gamma2_2PS },
    tonemapCode: function(d) { return d === pc.TONEMAP_FILMIC ? pc.shaderChunks.tonemappingFilmicPS : d === pc.TONEMAP_LINEAR ? pc.shaderChunks.tonemappingLinearPS : pc.shaderChunks.tonemappingNonePS }
};
pc.programlib.basic = {
    generateKey: function(d, a) {
        var b = "basic";
        a.fog && (b += "_fog");
        a.alphaTest && (b += "_atst");
        a.vertexColors && (b += "_vcol");
        a.diffuseMap && (b += "_diff");
        return b
    },
    createShaderDefinition: function(d, a) {
        var b = { vertex_position: pc.SEMANTIC_POSITION };
        a.skin && (b.vertex_boneWeights = pc.SEMANTIC_BLENDWEIGHT, b.vertex_boneIndices = pc.SEMANTIC_BLENDINDICES);
        a.vertexColors && (b.vertex_color = pc.SEMANTIC_COLOR);
        a.diffuseMap && (b.vertex_texCoord0 = pc.SEMANTIC_TEXCOORD0);
        var c = pc.programlib.getSnippet,
            e;
        e = "" +
            c(d, "vs_transform_decl");
        a.skin && (e += c(d, "vs_skin_decl"));
        a.vertexColors && (e += "attribute vec4 vertex_color;\nvarying vec4 vColor;\n");
        a.diffuseMap && (e += "attribute vec2 vertex_texCoord0;\nvarying vec2 vUv0;\n");
        e += c(d, "common_main_begin");
        e = a.skin ? e + "    mat4 modelMatrix = vertex_boneWeights.x * getBoneMatrix(vertex_boneIndices.x) +\n                       vertex_boneWeights.y * getBoneMatrix(vertex_boneIndices.y) +\n                       vertex_boneWeights.z * getBoneMatrix(vertex_boneIndices.z) +\n                       vertex_boneWeights.w * getBoneMatrix(vertex_boneIndices.w);\n    vec4 positionW = modelMatrix * vec4(vertex_position, 1.0);\n    positionW.xyz += skinPosOffset;\n" : e + "    mat4 modelMatrix = matrix_model;\n    vec4 positionW = modelMatrix * vec4(vertex_position, 1.0);\n";
        e += "\n    gl_Position = matrix_viewProjection * positionW;\n\n";
        a.vertexColors && (e += "    vColor = vertex_color;\n");
        a.diffuseMap && (e += "    vUv0 = vertex_texCoord0;\n");
        var f = e += c(d, "common_main_end");
        e = c(d, "fs_precision");
        e = a.vertexColors ? e + "varying vec4 vColor;\n" : e + "uniform vec4 uColor;\n";
        a.diffuseMap && (e += "varying vec2 vUv0;\nuniform sampler2D texture_diffuseMap;\n");
        a.fog && (e += c(d, "fs_fog_decl"));
        a.alphatest && (e += c(d, "fs_alpha_test_decl"));
        e += c(d, "common_main_begin");
        e = a.vertexColors ? e + "    gl_FragColor = vColor;\n" : e + "    gl_FragColor = uColor;\n";
        a.diffuseMap && (e += "    gl_FragColor *= texture2D(texture_diffuseMap, vUv0);\n");
        a.alphatest && (e += c(d, "fs_alpha_test"));
        e += c(d, "fs_clamp");
        a.fog && (e += c(d, "fs_fog"));
        e += c(d, "common_main_end");
        return { attributes: b, vshader: f, fshader: e }
    }
};
pc.programlib.depth = {
    generateKey: function(d, a) {
        var b = "depth";
        a.skin && (b += "_skin");
        a.opacityMap && (b += "_opam");
        return b
    },
    createShaderDefinition: function(d, a) {
        var b = { vertex_position: pc.SEMANTIC_POSITION };
        a.skin && (b.vertex_boneWeights = pc.SEMANTIC_BLENDWEIGHT, b.vertex_boneIndices = pc.SEMANTIC_BLENDINDICES);
        a.opacityMap && (b.vertex_texCoord0 = pc.SEMANTIC_TEXCOORD0);
        var c = pc.programlib.getSnippet,
            e;
        e = "" + c(d, "vs_transform_decl");
        a.skin && (e += c(d, "vs_skin_decl"));
        a.opacityMap && (e += "attribute vec2 vertex_texCoord0;\n\nvarying vec2 vUv0;\n\n");
        e += c(d, "common_main_begin");
        e = a.skin ? e + "    mat4 modelMatrix = vertex_boneWeights.x * getBoneMatrix(vertex_boneIndices.x) +\n                       vertex_boneWeights.y * getBoneMatrix(vertex_boneIndices.y) +\n                       vertex_boneWeights.z * getBoneMatrix(vertex_boneIndices.z) +\n                       vertex_boneWeights.w * getBoneMatrix(vertex_boneIndices.w);\n    vec4 positionW = modelMatrix * vec4(vertex_position, 1.0);\n    positionW.xyz += skinPosOffset;\n" : e + "    mat4 modelMatrix = matrix_model;\n    vec4 positionW = modelMatrix * vec4(vertex_position, 1.0);\n";
        e += "\n    gl_Position = matrix_viewProjection * positionW;\n\n";
        a.opacityMap && (e += "    vUv0 = vertex_texCoord0;\n");
        var f = e += c(d, "common_main_end");
        e = c(d, "fs_precision");
        a.opacityMap && (e += "varying vec2 vUv0;\n\nuniform sampler2D texture_opacityMap;\n\nuniform float alpha_ref;\n\n");
        e = e + "uniform float camera_near;\nuniform float camera_far;\nvec4 packFloat(float depth)\n{\n    const vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);\n    const vec4 bit_mask  = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\n    vec4 res = mod(depth * bit_shift * vec4(255), vec4(256) ) / vec4(255);\n    res -= res.xxyz * bit_mask;\n    return res;\n}\n\n" +
            c(d, "common_main_begin");
        a.opacityMap && (e += "    if (texture2D(texture_opacityMap, vUv0)." + a.opacityChannel + " < alpha_ref) discard;\n\n");
        e = e + "float depth = gl_FragCoord.z / gl_FragCoord.w;\ngl_FragColor = packFloat(depth / camera_far);\n" + c(d, "common_main_end");
        return { attributes: b, vshader: f, fshader: e }
    }
};
pc.programlib.depthrgba = {
    generateKey: function(d, a) {
        var b = "depthrgba";
        a.skin && (b += "_skin");
        a.opacityMap && (b += "_opam" + a.opacityChannel);
        a.point && (b += "_pnt");
        return b += "_" + a.shadowType
    },
    createShaderDefinition: function(d, a) {
        var b = { vertex_position: pc.SEMANTIC_POSITION };
        a.skin && (b.vertex_boneWeights = pc.SEMANTIC_BLENDWEIGHT, b.vertex_boneIndices = pc.SEMANTIC_BLENDINDICES);
        a.opacityMap && (b.vertex_texCoord0 = pc.SEMANTIC_TEXCOORD0);
        var c = pc.programlib.getSnippet,
            e;
        e = "" + c(d, "vs_transform_decl");
        a.skin && (e += c(d, "vs_skin_decl"));
        a.opacityMap && (e += "attribute vec2 vertex_texCoord0;\n\nvarying vec2 vUv0;\n\n");
        a.point && (e += "varying vec3 worldPos;\n\n");
        e += c(d, "common_main_begin");
        e = a.skin ? e + "       mat4 modelMatrix = vertex_boneWeights.x * getBoneMatrix(vertex_boneIndices.x) +\n                       vertex_boneWeights.y * getBoneMatrix(vertex_boneIndices.y) +\n                       vertex_boneWeights.z * getBoneMatrix(vertex_boneIndices.z) +\n                       vertex_boneWeights.w * getBoneMatrix(vertex_boneIndices.w);\n    vec4 positionW = modelMatrix * vec4(vertex_position, 1.0);\n    positionW.xyz += skinPosOffset;\n" : e + "    mat4 modelMatrix = matrix_model;\n    vec4 positionW = modelMatrix * vec4(vertex_position, 1.0);\n";
        e += "\n    gl_Position = matrix_viewProjection * positionW;\n\n";
        a.opacityMap && (e += "    vUv0 = vertex_texCoord0;\n");
        a.point && (e += "    worldPos = positionW.xyz;\n");
        var f = e += c(d, "common_main_end");
        e = c(d, "fs_precision");
        a.shadowType === pc.SHADOW_VSM32 ? e += "#define VSM_EXPONENT 15.0\n\n" : a.shadowType === pc.SHADOW_VSM16 && (e += "#define VSM_EXPONENT 5.54\n\n");
        a.opacityMap && (e += "varying vec2 vUv0;\n\nuniform sampler2D texture_opacityMap;\n\nuniform float alpha_ref;\n\n");
        a.point && (e += "varying vec3 worldPos;\n\nuniform vec3 view_position;\n\nuniform float light_radius;\n\n");
        var g = pc.shaderChunks;
        a.shadowType === pc.SHADOW_DEPTH ? e += g.packDepthPS : a.shadowType === pc.SHADOW_VSM8 && (e += "vec2 encodeFloatRG( float v ) {\n\r\n                     vec2 enc = vec2(1.0, 255.0) * v;\n\r\n                     enc = fract(enc);\n\r\n                     enc -= enc.yy * vec2(1.0/255.0, 1.0/255.0);\n\r\n                     return enc;\n\r\n                    }\n");
        e += c(d, "common_main_begin");
        a.opacityMap && (e += "    if (texture2D(texture_opacityMap, vUv0)." + a.opacityChannel + " < alpha_ref) discard;\n\n");
        e = a.point ? e + "   float depth = min(distance(view_position, worldPos) / light_radius, 0.99999);\n" : e + "   float depth = gl_FragCoord.z;\n";
        e = a.shadowType === pc.SHADOW_DEPTH ? e + "   gl_FragData[0] = packFloat(depth);\n" : a.shadowType === pc.SHADOW_VSM8 ? e + "   gl_FragColor = vec4(encodeFloatRG(depth), encodeFloatRG(depth*depth));\n" : e + g.storeEVSMPS;
        e += c(d, "common_main_end");
        return { attributes: b, vshader: f, fshader: e }
    }
};
pc.programlib.particle = {
    generateKey: function(d, a) {
        var b = "particle",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += a[c]);
        return b
    },
    _animTex: function(d, a) {
        var b;
        b = "" + (d.animTexLoop ? a.particleAnimFrameLoopVS : a.particleAnimFrameClampVS);
        return b += a.particleAnimTexVS
    },
    createShaderDefinition: function(d, a) {
        var b = pc.programlib.getSnippet,
            c = pc.shaderChunks,
            e = "",
            b = b(d, "fs_precision") + "\n";
        a.useCpu ? (a.animTex && (e += "\nuniform vec4 animTexParams;\n"), 2 == a.normal && (e += "\nvarying mat3 ParticleMat;\n"), 1 == a.normal && (e += "\nvarying vec3 Normal;\n"), e += c.particle_cpuVS, a.animTex && (e += this._animTex(a, c)), a.alignToMotion && (e += c.particle_pointAlongVS), e += a.mesh ? c.particle_meshVS : c.particle_billboardVS, 1 == a.normal && (e += c.particle_normalVS), 2 == a.normal && (e += c.particle_TBNVS), 0 < a.stretch && (e += c.particle_stretchVS), e += c.particle_cpu_endVS) : (a.animTex && (e += "\nuniform vec4 animTexParams;\n"), 2 == a.normal && (e += "\nvarying mat3 ParticleMat;\n"), 1 == a.normal && (e += "\nvarying vec3 Normal;\n"), e += c.particle_initVS, e += a.pack8 ? c.particleInputRgba8PS : c.particleInputFloatPS, e += c.particleVS, a.animTex && (e += this._animTex(a, c)), a.wrap && (e += c.particle_wrapVS), a.alignToMotion && (e += c.particle_pointAlongVS), e += a.mesh ? c.particle_meshVS : c.particle_billboardVS, 1 == a.normal && (e += c.particle_normalVS), 2 == a.normal && (e += c.particle_TBNVS), 0 < a.stretch && (e += c.particle_stretchVS), e += c.particle_endVS);
        0 < a.normal && (1 == a.normal ? b += "\nvarying vec3 Normal;\n" : 2 == a.normal && (b += "\nvarying mat3 ParticleMat;\n"), b += "\nuniform vec3 lightCube[6];\n");
        0 === a.normal && "none" === a.fog && (a.srgb = !1);
        b += pc.programlib.gammaCode(a.gamma);
        b += pc.programlib.tonemapCode(a.toneMap);
        b = "linear" === a.fog ? b + c.fogLinearPS : "exp" === a.fog ? b + c.fogExpPS : "exp2" === a.fog ? b + c.fogExp2PS : b + c.fogNonePS;
        2 == a.normal && (b += "\nuniform sampler2D normalMap;\n");
        0 < a.soft && (b += "\nuniform sampler2D uDepthMap;\n uniform vec4 uScreenSize;\n");
        b += c.particlePS;
        0 < a.soft && (b += c.particle_softPS);
        1 == a.normal && (b += "\nvec3 normal = Normal;\n");
        2 == a.normal && (b += c.particle_normalMapPS);
        0 < a.normal && (b += a.halflambert ? c.particle_halflambertPS : c.particle_lambertPS);
        0 < a.normal && (b += c.particle_lightingPS);
        a.blend == pc.BLEND_NORMAL ? b += c.particle_blendNormalPS : a.blend == pc.BLEND_ADDITIVE ? b += c.particle_blendAddPS : a.blend == pc.BLEND_MULTIPLICATIVE && (b += c.particle_blendMultiplyPS);
        b += c.particle_endPS;
        return { attributes: pc.shaderChunks.collectAttribs(e), vshader: e, fshader: b }
    }
};
pc.programlib.standard = {
    hashCode: function(d) {
        var a = 0;
        if (0 === d.length) return a;
        for (var b = 0; b < d.length; b++) var c = d.charCodeAt(b),
            a = (a << 5) - a + c,
            a = a & a;
        return a
    },
    generateKey: function(d, a) {
        var b = [],
            c = "standard",
            e, f;
        for (f in a)
            if ("lights" === f)
                for (var g = 0; g < a.lights.length; g++) e = a.lights[g], b.push(e.getType() + "_" + (e.getCastShadows() ? 1 : 0) + "_" + e.getShadowType() + "_" + e.getFalloffMode() + "_" + !!e.getNormalOffsetBias());
            else if ("chunks" === f)
            for (var h in a[f]) a[f].hasOwnProperty(h) && b.push(h + a.chunks[h]);
        else a[f] && b.push(f);
        b.sort();
        for (f in b) c += b[f] + a[b[f]];
        return this.hashCode(c)
    },
    _correctChannel: function(d, a) { if (0 < pc._matTex2D[d]) { if (pc._matTex2D[d] < a.length) return a.substring(0, pc._matTex2D[d]); if (pc._matTex2D[d] > a.length) { for (var b = a, c = b.charAt(b.length - 1), e = pc._matTex2D[d] - b.length, f = 0; f < e; f++) b += c; return b } return a } },
    _setMapTransform: function(d, a, b, c) {
        d[0] += "uniform vec4 texture_" + a + "MapTransform;\n";
        var e = b + 100 * c;
        d[3][e] || (d[1] += "varying vec2 vUV" + c + "_" + b + ";\n", d[2] += "   vUV" + c + "_" + b + " = uv" + c + " * texture_" +
            a + "MapTransform.xy + texture_" + a + "MapTransform.zw;\n", d[3][e] = !0);
        return d
    },
    _uvSource: function(d, a) { return 0 === d ? "vUv" + a : "vUV" + a + "_" + d },
    _addMap: function(d, a, b, c, e, f) { var g, h = d + "Map"; return a[h + "VertexColor"] ? (e || (e = a[d + "Tint"] ? b[d + "VertConstPS"] : b[d + "VertPS"]), e.replace(/\$CH/g, a[h + "Channel"])) : a[h] ? (g = h + "Channel", c = this._uvSource(a[h + "Transform"], a[h + "Uv"]) + c, e || (e = a[d + "Tint"] ? b[d + "TexConstPS"] : b[d + "TexPS"]), void 0 !== f && (e = e.replace(/\$texture2DSAMPLE/g, 0 === f ? "texture2DSRGB" : 1 === f ? "texture2DRGBM" : "texture2D")), e.replace(/\$UV/g, c).replace(/\$CH/g, a[g])) : b[d + "ConstPS"] },
    _nonPointShadowMapProjection: function(d, a) { return !d.getNormalOffsetBias() || d._shadowType > pc.SHADOW_DEPTH ? d.getType() === pc.LIGHTTYPE_SPOT ? "   getShadowCoordPersp" + a : "   getShadowCoordOrtho" + a : d.getType() == pc.LIGHTTYPE_SPOT ? "   getShadowCoordPerspNormalOffset" + a : "   getShadowCoordOrthoNormalOffset" + a },
    _addVaryingIfNeeded: function(d, a, b) { return 0 <= d.indexOf(b) ? "varying " + a + " " + b + ";\n" : "" },
    createShaderDefinition: function(d, a) {
        var b, c, e = 0 < a.lights.length;
        a.shadingModel === pc.SPECULAR_PHONG ? (a.fresnelModel = 0, a.specularAA = !1, a.prefilteredCubemap = !1, a.dpAtlas = !1, a.ambientSH = !1) : a.fresnelModel = 0 === a.fresnelModel ? pc.FRESNEL_SCHLICK : a.fresnelModel;
        var f = a.cubeMap || a.prefilteredCubemap && a.useSpecular,
            g = a.sphereMap || f || a.dpAtlas,
            h = pc.precalculatedTangents,
            m = a.useTexCubeLod;
        if (a.cubeMap || a.prefilteredCubemap) a.sphereMap = null;
        a.dpAtlas && (a.sphereMap = a.cubeMap = a.prefilteredCubemap = f = null);
        a.useSpecular || (a.specularMap = a.glossMap = null);
        var l = e || g || a.ambientSH || a.prefilteredCubemap;
        this.options = a;
        var p = pc.programlib.getSnippet,
            k = "",
            q = "",
            r = "",
            n = pc.shaderChunks,
            t;
        if (a.chunks) {
            var w = [];
            for (c in n) n.hasOwnProperty(c) && (a.chunks[c] ? (w[c] = a.chunks[c], l || (w[c] = w[c].replace(/vertex_normal/g, "vec3(0)").replace(/vertex_tangent/g, "vec4(0)"))) : w[c] = n[c]);
            n = w
        }
        n.extensionVS && (k += n.extensionVS + "\n");
        var k = k + n.baseVS,
            y = -1;
        if (!a.noShadow) {
            for (b = 0; b < a.lights.length; b++)
                if (t = a.lights[b].getType(), a.lights[b].getCastShadows() && t === pc.LIGHTTYPE_DIRECTIONAL) {
                    k += "uniform mat4 light" + b + "_shadowMatrixVS;\n";
                    k += "uniform vec3 light" + b + "_shadowParamsVS;\n";
                    k += "uniform vec3 light" + b + (t === pc.LIGHTTYPE_DIRECTIONAL ? "_directionVS" : "_positionVS") + ";\n";
                    y = b;
                    break
                } 0 <= y && (k += n.shadowCoordVS)
        }
        w = { vertex_position: pc.SEMANTIC_POSITION };
        q += "   vPositionW    = getWorldPosition();\n";
        a.useInstancing && (w.instance_line1 = pc.SEMANTIC_TEXCOORD2, w.instance_line2 = pc.SEMANTIC_TEXCOORD3, w.instance_line3 = pc.SEMANTIC_TEXCOORD4, w.instance_line4 = pc.SEMANTIC_TEXCOORD5, k += n.instancingVS);
        l && (w.vertex_normal = pc.SEMANTIC_NORMAL, q += "   vNormalW    = dNormalW = getNormal();\n", a.sphereMap && 16 >= d.fragmentUniformsCount && (k += n.viewNormalVS, q += "   vNormalV    = getViewNormal();\n"), (a.heightMap || a.normalMap) && h && (w.vertex_tangent = pc.SEMANTIC_TANGENT, k += n.tangentBinormalVS, q += "   vTangentW   = getTangent();\n   vBinormalW  = getBinormal();\n"), 0 <= y && (t = a.lights[y].getType(), q = t === pc.LIGHTTYPE_DIRECTIONAL ? q + ("   dLightDirNormW = light" + y + "_directionVS;\n") : q + ("   getLightDirPoint(light" + y + "_positionVS);\n"), q += this._nonPointShadowMapProjection(a.lights[y], "(light" + y + "_shadowMatrixVS, light" + y + "_shadowParamsVS);\n")));
        t = [];
        var x = [],
            v, z, u;
        for (c in pc._matTex2D) b = c + "Map", a[b + "VertexColor"] ? (v = b + "Channel", a[v] = this._correctChannel(c, a[v])) : a[b] && (v = b + "Channel", z = b + "Transform", u = b + "Uv", a[u] = Math.min(a[u], 1), a[v] = this._correctChannel(c, a[v]), u = a[u], t[u] = !0, x[u] = x[u] || a[b] && !a[z]);
        a.forceUv1 && (t[1] = !0);
        for (b = 0; 2 > b; b++) t[b] && (w["vertex_texCoord" + b] = pc["SEMANTIC_TEXCOORD" + b], k += n["uv" + b + "VS"], q += "   vec2 uv" +
            b + " = getUv" + b + "();\n"), x[b] && (q += "   vUv" + b + " = uv" + b + ";\n");
        t = [k, r, q, []];
        for (c in pc._matTex2D) b = c + "Map", a[b] && (z = b + "Transform", a[z] && (u = b + "Uv", this._setMapTransform(t, c, a[z], a[u])));
        k = t[0];
        r = t[1];
        q = t[2];
        a.vertexColors && (w.vertex_color = pc.SEMANTIC_COLOR, q += "   vVertexColor = vertex_color;\n");
        a.skin ? (w.vertex_boneWeights = pc.SEMANTIC_BLENDWEIGHT, w.vertex_boneIndices = pc.SEMANTIC_BLENDINDICES, k += p(d, "vs_skin_decl"), k += n.transformSkinnedVS, l && (k += n.normalSkinnedVS)) : a.useInstancing ? (k += n.transformInstancedVS, l && (k += n.normalInstancedVS)) : (k += n.transformVS, l && (k += n.normalVS));
        k = k + "\n" + n.startVS;
        c = k = k + q + "}";
        b = r;
        r = "" + this._addVaryingIfNeeded(k, "vec4", "vMainShadowUv");
        r += this._addVaryingIfNeeded(k, "vec4", "vVertexColor");
        r += this._addVaryingIfNeeded(k, "vec3", "vPositionW");
        r += this._addVaryingIfNeeded(k, "vec3", "vNormalV");
        r += this._addVaryingIfNeeded(k, "vec3", "vNormalW");
        r += this._addVaryingIfNeeded(k, "vec3", "vTangentW");
        r += this._addVaryingIfNeeded(k, "vec3", "vBinormalW");
        r += this._addVaryingIfNeeded(k, "vec2", "vUv0");
        r += this._addVaryingIfNeeded(k, "vec2", "vUv1");
        r += b;
        c = r + c;
        a.forceFragmentPrecision && "highp" != a.forceFragmentPrecision && "mediump" !== a.forceFragmentPrecision && "lowp" !== a.forceFragmentPrecision && (a.forceFragmentPrecision = null);
        a.forceFragmentPrecision && ("highp" === a.forceFragmentPrecision && "highp" !== d.maxPrecision && (a.forceFragmentPrecision = "mediump"), "mediump" === a.forceFragmentPrecision && "lowp" === d.maxPrecision && (a.forceFragmentPrecision = "lowp"));
        k = "";
        n.extensionPS && (k += n.extensionPS + "\n");
        k += a.forceFragmentPrecision ? "precision " + a.forceFragmentPrecision + " float;\n\n" : p(d, "fs_precision");
        if (a.customFragmentShader) return k += a.customFragmentShader, { attributes: w, vshader: c, fshader: k, tag: pc.SHADERTAG_MATERIAL };
        r = k = k + r + n.basePS;
        k = "";
        q = 0;
        x = [];
        z = !1;
        for (b = 0; b < a.lights.length; b++) u = a.lights[b], t = u.getType(), k += "uniform vec3 light" + b + "_color;\n", t === pc.LIGHTTYPE_DIRECTIONAL ? k += "uniform vec3 light" + b + "_direction;\n" : (k += "uniform vec3 light" + b + "_position;\n", k += "uniform float light" + b + "_radius;\n", t === pc.LIGHTTYPE_SPOT && (k += "uniform vec3 light" + b + "_direction;\n", k += "uniform float light" + b + "_innerConeAngle;\n", k += "uniform float light" + b + "_outerConeAngle;\n")), u.getCastShadows() && !a.noShadow && (k += "uniform mat4 light" + b + "_shadowMatrix;\n", k = t !== pc.LIGHTTYPE_DIRECTIONAL ? k + ("uniform vec4 light" + b + "_shadowParams;\n") : k + ("uniform vec3 light" + b + "_shadowParams;\n"), k = t === pc.LIGHTTYPE_POINT ? k + ("uniform samplerCube light" + b + "_shadowMap;\n") : k + ("uniform sampler2D light" + b + "_shadowMap;\n"), q++, x[u._shadowType] = !0, u._shadowType > pc.SHADOW_DEPTH && (z = !0));
        k += "\n";
        t = a.heightMap ? " + dUvOffset" : "";
        b = a.fastTbn ? n.TBNfastPS : n.TBNPS;
        l && (a.normalMap && h ? (k += a.packedNormal ? n.normalXYPS : n.normalXYZPS, h = this._uvSource(a.normalMapTransform, a.normalMapUv) + t, k = a.needsNormalFloat ? k + (a.fastTbn ? n.normalMapFloatTBNfastPS : n.normalMapFloatPS).replace(/\$UV/g, h) : k + n.normalMapPS.replace(/\$UV/g, h), k += b) : k += n.normalVertexPS);
        k += pc.programlib.gammaCode(a.gamma);
        k += pc.programlib.tonemapCode(a.toneMap);
        k = "linear" === a.fog ? k + n.fogLinearPS : "exp" === a.fog ? k + n.fogExpPS : "exp2" === a.fog ? k + n.fogExp2PS : k + n.fogNonePS;
        a.useRgbm && (k += n.rgbmPS);
        if (f || a.prefilteredCubemap) k += a.fixSeams ? n.fixCubemapSeamsStretchPS : n.fixCubemapSeamsNonePS;
        l && (k += 0 < a.cubeMapProjection ? n.cubeMapProjectBoxPS : n.cubeMapProjectNonePS, k += a.skyboxIntensity ? n.envMultiplyPS : n.envConstPS);
        k += this._addMap("diffuse", a, n, t);
        if (a.blendType !== pc.BLEND_NONE || a.alphaTest) k += this._addMap("opacity", a, n, t);
        k += this._addMap("emissive", a, n, t, null, a.emissiveFormat);
        a.useSpecular && (k = a.specularAA && a.normalMap ? a.needsNormalFloat && l ? k + n.specularAaToksvigFloatPS : k + n.specularAaToksvigPS : k + n.specularAaNonePS, a.useMetalness && (k += n.metalnessPS), k += this._addMap(a.useMetalness ? "metalness" : "specular", a, n, t), k += this._addMap("gloss", a, n, t), 0 < a.fresnelModel && (a.fresnelModel === pc.FRESNEL_SIMPLE ? k += n.fresnelSimplePS : a.fresnelModel === pc.FRESNEL_SCHLICK ? k += n.fresnelSchlickPS : a.fresnelModel === pc.FRESNEL_COMPLEX && (k += n.fresnelComplexPS)));
        a.heightMap && (a.normalMap || (k += b), k += this._addMap("height", a, n, "", n.parallaxPS));
        if (h = a.aoMap || a.aoMapVertexColor) k += this._addMap("ao", a, n, t, a.aoMapVertexColor ? n.aoVertPS : n.aoTexPS), a.occludeSpecular && (k = a.occludeSpecular === pc.SPECOCC_AO ? k + (a.occludeSpecularFloat ? n.aoSpecOccSimplePS : n.aoSpecOccConstSimplePS) : k + (a.occludeSpecularFloat ? n.aoSpecOccPS : n.aoSpecOccConstPS));
        u = a.rgbmReflection ? "decodeRGBM" : a.hdrReflection ? "" : "gammaCorrectInput";
        if (f || a.prefilteredCubemap) k = a.prefilteredCubemap ? m ? k + n.reflectionPrefilteredCubeLodPS.replace(/\$DECODE/g, u) : k + n.reflectionPrefilteredCubePS.replace(/\$DECODE/g, u) : k + n.reflectionCubePS.replace(/\$textureCubeSAMPLE/g, a.rgbmReflection ? "textureCubeRGBM" : a.hdrReflection ? "textureCube" : "textureCubeSRGB");
        a.sphereMap && (b = 16 < d.fragmentUniformsCount ? n.reflectionSpherePS : n.reflectionSphereLowPS, b = b.replace(/\$texture2DSAMPLE/g, a.rgbmReflection ? "texture2DRGBM" : a.hdrReflection ? "texture2D" : "texture2DSRGB"), k += b);
        a.dpAtlas && (k += n.reflectionDpAtlasPS.replace(/\$texture2DSAMPLE/g, a.rgbmReflection ? "texture2DRGBM" : a.hdrReflection ? "texture2D" : "texture2DSRGB"));
        (f || a.sphereMap || a.dpAtlas) && a.refraction && (k += n.refractionPS);
        b = !0;
        if (a.lightMap || a.lightMapVertexColor) k += this._addMap("light", a, n, t, a.lightMapVertexColor ? n.lightmapSingleVertPS : n.lightmapSinglePS, a.lightMapFormat), b = a.lightMapWithoutAmbient;
        b && (k = a.ambientSH ? k + n.ambientSHPS : a.prefilteredCubemap ? m ? k + n.ambientPrefilteredCubeLodPS.replace(/\$DECODE/g, u) : k + n.ambientPrefilteredCubePS.replace(/\$DECODE/g, u) : k + n.ambientConstantPS);
        0 < q && (x[pc.SHADOW_DEPTH] && (k += n.shadowStandardPS), z && (k += n.shadowVSM_commonPS, x[pc.SHADOW_VSM8] && (k += n.shadowVSM8PS), x[pc.SHADOW_VSM16] && (k += d.extTextureHalfFloatLinear ? n.shadowEVSMPS.replace(/\$/g, "16") : n.shadowEVSMnPS.replace(/\$/g, "16")), x[pc.SHADOW_VSM32] && (k += d.extTextureFloatLinear ? n.shadowEVSMPS.replace(/\$/g, "32") : n.shadowEVSMnPS.replace(/\$/g, "32"))), k += n.shadowCoordPS + n.shadowCommonPS, 0 <= y && (x[pc.SHADOW_DEPTH] && (k += n.shadowStandardVSPS), z && (x[pc.SHADOW_VSM8] && (k += n.shadowVSMVSPS.replace(/\$VSM/g, "VSM8").replace(/\$/g, "8")), x[pc.SHADOW_VSM16] && (k += n.shadowVSMVSPS.replace(/\$VSM/g, "VSM16").replace(/\$/g, "16")), x[pc.SHADOW_VSM32] && (k += n.shadowVSMVSPS.replace(/\$VSM/g, "VSM32").replace(/\$/g, "32")))));
        e && (k += n.lightDiffuseLambertPS);
        t = !1;
        a.useSpecular ? (k += a.shadingModel === pc.SPECULAR_PHONG ? n.lightSpecularPhongPS : n.lightSpecularBlinnPS, a.sphereMap || f || a.dpAtlas || 0 < a.fresnelModel ? k = 0 < a.fresnelModel ? a.conserveEnergy ? k + n.combineDiffuseSpecularPS : k + n.combineDiffuseSpecularNoConservePS : k + n.combineDiffuseSpecularOldPS : a.diffuseMap ? k += n.combineDiffuseSpecularNoReflPS : (k += n.combineDiffuseSpecularNoReflSeparateAmbientPS, t = !0)) : k += n.combineDiffusePS;
        a.modulateAmbient && !t && (k += "uniform vec3 material_ambient;\n");
        a.alphaTest && (k += "   uniform float alpha_ref;\n");
        l && (k += n.viewDirPS, a.useSpecular && (k += n.reflDirPS));
        z = x = q = m = !1;
        k += n.startPS;
        u = !1;
        a.blendType !== pc.BLEND_NONE || a.alphaTest ? a.heightMap && a.opacityMap ? u = !0 : (k += "   getOpacity();\n", a.alphaTest && (k += "   if (dAlpha < alpha_ref) discard;\n")) : k += "   dAlpha = 1.0;\n";
        if (l) {
            k += "   getViewDir();\n";
            if (a.heightMap || a.normalMap) k += "   getTBN();\n";
            a.heightMap && (k += "   getParallax();\n");
            u && (k += "   getOpacity();\n", a.alphaTest && (k += "   if (dAlpha < alpha_ref) discard;\n"));
            k += "   getNormal();\n";
            a.useSpecular && (k += "   getReflDir();\n")
        }
        k += "   getAlbedo();\n";
        if (e && a.useSpecular || g) k += "   getSpecularity();\n", k += "   getGlossiness();\n", 0 < a.fresnelModel && (k += "   getFresnel();\n");
        b && (k += "   addAmbient();\n");
        a.modulateAmbient && !t && (k += "   dDiffuseLight *= material_ambient;\n");
        h && !a.occludeDirect && (k += "    applyAO();\n");
        if (a.lightMap || a.lightMapVertexColor) k += "   addLightMap();\n";
        if (e || g) {
            if (f || a.sphereMap || a.dpAtlas) k += "   addReflection();\n";
            for (b = 0; b < a.lights.length; b++) {
                u = a.lights[b];
                t = u.getType();
                t === pc.LIGHTTYPE_DIRECTIONAL ? (k += "   dLightDirNormW = light" + b + "_direction;\n", k += "   dAtten = 1.0;\n") : (k += "   getLightDirPoint(light" + b + "_position);\n", m = !0, u.getFalloffMode() == pc.LIGHTFALLOFF_LINEAR ? (k += "   dAtten = getFalloffLinear(light" + b + "_radius);\n", q = !0) : (k += "   dAtten = getFalloffInvSquared(light" + b + "_radius);\n", x = !0), t === pc.LIGHTTYPE_SPOT && (k += "   dAtten *= getSpotEffect(light" + b + "_direction, light" +
                    b + "_innerConeAngle, light" + b + "_outerConeAngle);\n", z = !0));
                k += "   dAtten *= getLightDiffuse();\n";
                if (u.getCastShadows() && !a.noShadow) {
                    var g = null,
                        A;
                    u._shadowType === pc.SHADOW_VSM8 ? (g = "VSM8", A = "0.0") : u._shadowType === pc.SHADOW_VSM16 ? (g = "VSM16", A = "5.54") : u._shadowType === pc.SHADOW_VSM32 ? (g = "VSM32", A = "15.0") : a.shadowSampleType === pc.SHADOWSAMPLE_HARD ? g = "Hard" : a.shadowSampleType === pc.SHADOWSAMPLE_PCF3X3 && (g = "PCF3x3");
                    null !== g && (t === pc.LIGHTTYPE_POINT ? (e = "(light" + b + "_shadowMap, light" + b + "_shadowParams);\n", u.getNormalOffsetBias() && (k += "   normalOffsetPointShadow(light" + b + "_shadowParams);\n"), k += "   dAtten *= getShadowPoint" + g + e) : (y === b ? g += "VS" : (e = "(light" + b + "_shadowMatrix, light" + b + "_shadowParams);\n", k += this._nonPointShadowMapProjection(a.lights[b], e)), t === pc.LIGHTTYPE_SPOT && (g = "Spot" + g), k += "   dAtten *= getShadow" + g + "(light" + b + "_shadowMap, light" + b + "_shadowParams" + (u._shadowType > pc.SHADOW_DEPTH ? ", " + A : "") + ");\n"))
                }
                k += "   dDiffuseLight += dAtten * light" + b + "_color;\n";
                a.useSpecular && (k += "   dAtten *= getLightSpecular();\n", k += "   dSpecularLight += dAtten * light" + b + "_color;\n");
                k += "\n"
            }(f || a.sphereMap || a.dpAtlas) && a.refraction && (k += "   addRefraction();\n")
        }
        k += "\n";
        h && (a.occludeDirect && (k += "    applyAO();\n"), a.occludeSpecular && (k += "    occludeSpecular();\n"));
        k += n.endPS;
        k = a.blendType === pc.BLEND_NORMAL || a.blendType === pc.BLEND_ADDITIVEALPHA ? k + n.outputAlphaPS : a.blendType === pc.BLEND_PREMULTIPLIED ? k + n.outputAlphaPremulPS : k + n.outputAlphaOpaquePS;
        k += "\n";
        k += p(d, "common_main_end");
        m && (k = n.lightDirPointPS + k);
        q && (k = n.falloffLinearPS +
            k);
        x && (k = n.falloffInvSquaredPS + k);
        z && (k = n.spotPS + k);
        f = "";
        k.includes("dReflection") && (f += "vec4 dReflection;\n");
        k.includes("dTBN") && (f += "mat3 dTBN;\n");
        k.includes("dAlbedo") && (f += "vec3 dAlbedo;\n");
        k.includes("dEmission") && (f += "vec3 dEmission;\n");
        k.includes("dNormalW") && (f += "vec3 dNormalW;\n");
        k.includes("dViewDirW") && (f += "vec3 dViewDirW;\n");
        k.includes("dReflDirW") && (f += "vec3 dReflDirW;\n");
        k.includes("dDiffuseLight") && (f += "vec3 dDiffuseLight;\n");
        k.includes("dSpecularLight") && (f += "vec3 dSpecularLight;\n");
        k.includes("dLightDirNormW") && (f += "vec3 dLightDirNormW;\n");
        k.includes("dLightDirW") && (f += "vec3 dLightDirW;\n");
        k.includes("dLightPosW") && (f += "vec3 dLightPosW;\n");
        k.includes("dShadowCoord") && (f += "vec3 dShadowCoord;\n");
        k.includes("dNormalMap") && (f += "vec3 dNormalMap;\n");
        k.includes("dSpecularity") && (f += "vec3 dSpecularity;\n");
        k.includes("dUvOffset") && (f += "vec2 dUvOffset;\n");
        k.includes("dGlossiness") && (f += "float dGlossiness;\n");
        k.includes("dAlpha") && (f += "float dAlpha;\n");
        k.includes("dAtten") && (f += "float dAtten;\n");
        k.includes("dAo") && (f += "float dAo;\n");
        k = r + f + k;
        return { attributes: w, vshader: c, fshader: k, tag: pc.SHADERTAG_MATERIAL }
    }
};
pc.programlib.pick = {
    generateKey: function(d, a) {
        var b = "pick";
        a.skin && (b += "_skin");
        return b
    },
    createShaderDefinition: function(d, a) {
        var b = { vertex_position: pc.SEMANTIC_POSITION };
        a.skin && (b.vertex_boneWeights = pc.SEMANTIC_BLENDWEIGHT, b.vertex_boneIndices = pc.SEMANTIC_BLENDINDICES);
        var c = pc.programlib.getSnippet,
            e;
        e = "" + c(d, "vs_transform_decl");
        a.skin && (e += c(d, "vs_skin_decl"));
        e += c(d, "common_main_begin");
        e = a.skin ? e + "    mat4 modelMatrix = vertex_boneWeights.x * getBoneMatrix(vertex_boneIndices.x) +\n                       vertex_boneWeights.y * getBoneMatrix(vertex_boneIndices.y) +\n                       vertex_boneWeights.z * getBoneMatrix(vertex_boneIndices.z) +\n                       vertex_boneWeights.w * getBoneMatrix(vertex_boneIndices.w);\n    vec4 positionW = modelMatrix * vec4(vertex_position, 1.0);\n    positionW.xyz += skinPosOffset;\n" : e + "    mat4 modelMatrix = matrix_model;\n    vec4 positionW = modelMatrix * vec4(vertex_position, 1.0);\n";
        var f = e = e + "\n    gl_Position = matrix_viewProjection * positionW;\n\n" + c(d, "common_main_end");
        e = c(d, "fs_precision");
        e += c(d, "fs_flat_color_decl");
        e += c(d, "common_main_begin");
        e += c(d, "fs_flat_color");
        e += c(d, "common_main_end");
        return { attributes: b, vshader: f, fshader: e }
    }
};
pc.programlib.skybox = {
    generateKey: function(d, a) { return "skybox" + a.rgbm + " " + a.hdr + " " + a.fixSeams + "" + a.toneMapping + "" + a.gamma + "" + a.useIntensity + "" + a.mip },
    createShaderDefinition: function(d, a) {
        var b = pc.programlib.getSnippet,
            c = pc.shaderChunks;
        return { attributes: { aPosition: pc.SEMANTIC_POSITION }, vshader: "attribute vec3 aPosition;\n\nuniform mat4 matrix_view;\nuniform mat4 matrix_projection;\n\nvarying vec3 vViewDir;\n\nvoid main(void)\n{\n    mat4 view = matrix_view;\n    view[3][0] = view[3][1] = view[3][2] = 0.0;\n    gl_Position = matrix_projection * view * vec4(aPosition, 1.0);\n    gl_Position.z = gl_Position.w - 0.00001;\n    vViewDir = aPosition;\n    vViewDir.x *= -1.0;\n}", fshader: b(d, "fs_precision") + (a.mip ? c.fixCubemapSeamsStretchPS : c.fixCubemapSeamsNonePS) + (a.useIntensity ? c.envMultiplyPS : c.envConstPS) + pc.programlib.gammaCode(a.gamma) + pc.programlib.tonemapCode(a.toneMapping) + c.rgbmPS + c.skyboxHDRPS.replace(/\$textureCubeSAMPLE/g, a.rgbm ? "textureCubeRGBM" : a.hdr ? "textureCube" : "textureCubeSRGB").replace(/\$FIXCONST/g, 1 - 1 / [128, 64, 16, 8, 4, 2][a.mip] + "") }
    }
};
pc.extend(pc, function() {
    var d = { type: pc.PRIMITIVE_TRISTRIP, base: 0, count: 4, indexed: !1 },
        a = function(a) {
            this.device = a;
            this.depthMap = this.shader = null;
            this.vertexBuffer = pc.createFullscreenQuad(a);
            this.needsDepthBuffer = !1
        };
    a.prototype = { render: function(a, c, e) {} };
    return {
        PostEffect: a,
        createFullscreenQuad: function(a) {
            var c = new pc.VertexFormat(a, [{ semantic: pc.SEMANTIC_POSITION, components: 2, type: pc.ELEMENTTYPE_FLOAT32 }]);
            a = new pc.VertexBuffer(a, c, 4);
            c = new pc.VertexIterator(a);
            c.element[pc.SEMANTIC_POSITION].set(-1, -1);
            c.next();
            c.element[pc.SEMANTIC_POSITION].set(1, -1);
            c.next();
            c.element[pc.SEMANTIC_POSITION].set(-1, 1);
            c.next();
            c.element[pc.SEMANTIC_POSITION].set(1, 1);
            c.end();
            return a
        },
        drawFullscreenQuad: function(a, c, e, f, g) {
            a.setRenderTarget(c);
            a.updateBegin();
            var h = null !== c ? c.width : a.width;
            c = null !== c ? c.height : a.height;
            var m = 0,
                l = 0;
            g && (m = g.x * h, l = g.y * c, h *= g.z, c *= g.w);
            a.setViewport(m, l, h, c);
            a.setScissor(m, l, h, c);
            g = a.getBlending();
            h = a.getDepthTest();
            c = a.getDepthWrite();
            var m = a.getCullMode(),
                l = a.writeRed,
                p = a.writeGreen,
                k = a.writeBlue,
                q = a.writeAlpha;
            a.setBlending(!1);
            a.setDepthTest(!1);
            a.setDepthWrite(!1);
            a.setCullMode(pc.CULLFACE_BACK);
            a.setColorWrite(!0, !0, !0, !0);
            a.setVertexBuffer(e, 0);
            a.setShader(f);
            a.draw(d);
            a.setBlending(g);
            a.setDepthTest(h);
            a.setDepthWrite(c);
            a.setCullMode(m);
            a.setColorWrite(l, p, k, q);
            a.updateEnd()
        }
    }
}());
(function() {
    var d = { BLEND_SUBTRACTIVE: 0, BLEND_ADDITIVE: 1, BLEND_NORMAL: 2, BLEND_NONE: 3, BLEND_PREMULTIPLIED: 4, BLEND_MULTIPLICATIVE: 5, BLEND_ADDITIVEALPHA: 6, BLEND_MULTIPLICATIVE2X: 7, BLEND_SCREEN: 8, FOG_NONE: "none", FOG_LINEAR: "linear", FOG_EXP: "exp", FOG_EXP2: "exp2", FRESNEL_NONE: 0, FRESNEL_SCHLICK: 2, LAYER_HUD: 0, LAYER_GIZMO: 1, LAYER_FX: 2, LAYER_WORLD: 3, LIGHTTYPE_DIRECTIONAL: 0, LIGHTTYPE_POINT: 1, LIGHTTYPE_SPOT: 2, LIGHTFALLOFF_LINEAR: 0, LIGHTFALLOFF_INVERSESQUARED: 1, SHADOW_DEPTH: 0, SHADOW_VSM8: 1, SHADOW_VSM16: 2, SHADOW_VSM32: 3, BLUR_BOX: 0, BLUR_GAUSSIAN: 1, SHADOWSAMPLE_HARD: 0, SHADOWSAMPLE_PCF3X3: 1, SHADOWSAMPLE_MASK: 2, PARTICLESORT_NONE: 0, PARTICLESORT_DISTANCE: 1, PARTICLESORT_NEWER_FIRST: 2, PARTICLESORT_OLDER_FIRST: 3, PARTICLEMODE_GPU: 0, PARTICLEMODE_CPU: 1, EMITTERSHAPE_BOX: 0, EMITTERSHAPE_SPHERE: 1, PROJECTION_PERSPECTIVE: 0, PROJECTION_ORTHOGRAPHIC: 1, RENDERSTYLE_SOLID: 0, RENDERSTYLE_WIREFRAME: 1, RENDERSTYLE_POINTS: 2, CUBEPROJ_NONE: 0, CUBEPROJ_BOX: 1, SPECULAR_PHONG: 0, SPECULAR_BLINN: 1, GAMMA_NONE: 0, GAMMA_SRGB: 1, GAMMA_SRGBFAST: 2, TONEMAP_LINEAR: 0, TONEMAP_FILMIC: 1, SPECOCC_NONE: 0, SPECOCC_AO: 1, SPECOCC_GLOSSDEPENDENT: 2, SHADERDEF_NOSHADOW: 1, SHADERDEF_SKIN: 2, SHADERDEF_UV0: 4, SHADERDEF_UV1: 8, SHADERDEF_VCOLOR: 16, SHADERDEF_INSTANCING: 32, SHADERDEF_LM: 64, LINEBATCH_WORLD: 0, LINEBATCH_OVERLAY: 1, LINEBATCH_GIZMO: 2, SHADOWUPDATE_NONE: 0, SHADOWUPDATE_THISFRAME: 1, SHADOWUPDATE_REALTIME: 2 };
    pc.extend(pc, d);
    pc.scene = {};
    pc.extend(pc.scene, d)
})();
pc.extend(pc, function() {
    var d = function() {
        this.root = null;
        this._gravity = new pc.Vec3(0, -9.8, 0);
        this.drawCalls = [];
        this.shadowCasters = [];
        this.immediateDrawCalls = [];
        this.fog = pc.FOG_NONE;
        this.fogColor = new pc.Color(0, 0, 0);
        this.fogStart = 1;
        this.fogEnd = 1E3;
        this.fogDensity = 0;
        this.ambientLight = new pc.Color(0, 0, 0);
        this._gammaCorrection = pc.GAMMA_NONE;
        this._toneMapping = 0;
        this.exposure = 1;
        this._skyboxModel = this._skyboxCubeMap = this._skyboxPrefiltered4 = this._skyboxPrefiltered8 = this._skyboxPrefiltered16 = this._skyboxPrefiltered32 = this._skyboxPrefiltered64 = this._skyboxPrefiltered128 = null;
        this._skyboxIntensity = 1;
        this._skyboxMip = 0;
        this.lightmapSizeMultiplier = 1;
        this.lightmapMaxResolution = 2048;
        this._stats = { meshInstances: 0, lights: 0, dynamicLights: 0, bakedLights: 0 };
        this._models = [];
        this._lights = [];
        this._globalLights = [];
        this._localLights = [
            [],
            []
        ];
        this._updateShaders = !0;
        this._sceneShadersVersion = 0
    };
    Object.defineProperty(d.prototype, "updateShaders", {
        get: function() { return this._updateShaders },
        set: function(a) {
            if (a !== this._updateShaders && (this._updateShaders = a, this._models))
                for (a && this._sceneShadersVersion++, a = 0; a < this._models.length; a++) this._models[a]._shadersVersion = this._sceneShadersVersion
        }
    });
    Object.defineProperty(d.prototype, "fog", { get: function() { return this._fog }, set: function(a) { a !== this._fog && (this._fog = a, this.updateShaders = !0) } });
    Object.defineProperty(d.prototype, "gammaCorrection", { get: function() { return this._gammaCorrection }, set: function(a) { a !== this._gammaCorrection && (this._gammaCorrection = a, this.updateShaders = !0) } });
    Object.defineProperty(d.prototype, "toneMapping", { get: function() { return this._toneMapping }, set: function(a) { a !== this._toneMapping && (this._toneMapping = a, this.updateShaders = !0) } });
    Object.defineProperty(d.prototype, "skybox", {
        get: function() { return this._skyboxCubeMap },
        set: function(a) {
            this._skyboxCubeMap = a;
            this._resetSkyboxModel();
            this.updateShaders = !0
        }
    });
    Object.defineProperty(d.prototype, "skyboxIntensity", {
        get: function() { return this._skyboxIntensity },
        set: function(a) {
            this._skyboxIntensity = a;
            this._resetSkyboxModel();
            this.updateShaders = !0
        }
    });
    Object.defineProperty(d.prototype, "skyboxMip", {
        get: function() { return this._skyboxMip },
        set: function(a) {
            this._skyboxMip = a;
            this._resetSkyboxModel();
            this.updateShaders = !0
        }
    });
    Object.defineProperty(d.prototype, "skyboxPrefiltered128", {
        get: function() { return this._skyboxPrefiltered128 },
        set: function(a) {
            this._skyboxPrefiltered128 = a;
            this.updateShaders = !0
        }
    });
    Object.defineProperty(d.prototype, "skyboxPrefiltered64", {
        get: function() { return this._skyboxPrefiltered64 },
        set: function(a) {
            this._skyboxPrefiltered64 = a;
            this.updateShaders = !0
        }
    });
    Object.defineProperty(d.prototype, "skyboxPrefiltered32", {
        get: function() { return this._skyboxPrefiltered32 },
        set: function(a) {
            this._skyboxPrefiltered32 = a;
            this.updateShaders = !0
        }
    });
    Object.defineProperty(d.prototype, "skyboxPrefiltered16", {
        get: function() { return this._skyboxPrefiltered16 },
        set: function(a) {
            this._skyboxPrefiltered16 = a;
            this.updateShaders = !0
        }
    });
    Object.defineProperty(d.prototype, "skyboxPrefiltered8", {
        get: function() { return this._skyboxPrefiltered8 },
        set: function(a) {
            this._skyboxPrefiltered8 = a;
            this.updateShaders = !0
        }
    });
    Object.defineProperty(d.prototype, "skyboxPrefiltered4", {
        get: function() { return this._skyboxPrefiltered4 },
        set: function(a) {
            this._skyboxPrefiltered4 = a;
            this.updateShaders = !0
        }
    });
    d.prototype.applySettings = function(a) {
        this._gravity.set(a.physics.gravity[0], a.physics.gravity[1], a.physics.gravity[2]);
        var b = a.render.global_ambient;
        this.ambientLight = new pc.Color(b[0], b[1], b[2]);
        this.fog = a.render.fog;
        b = a.render.fog_color;
        this.fogColor = new pc.Color(b[0], b[1], b[2]);
        this.fogStart = a.render.fog_start;
        this.fogEnd = a.render.fog_end;
        this.fogDensity = a.render.fog_density;
        this.gammaCorrection = a.render.gamma_correction;
        this.toneMapping = a.render.tonemapping;
        this.lightmapSizeMultiplier = a.render.lightmapSizeMultiplier;
        this.lightmapMaxResolution = a.render.lightmapMaxResolution;
        this.exposure = a.render.exposure;
        this.skyboxIntensity = void 0 === a.render.skyboxIntensity ? 1 : a.render.skyboxIntensity;
        this.skyboxMip = void 0 === a.render.skyboxMip ? 0 : a.render.skyboxMip
    };
    d.prototype.updateShadersFunc = function(a) {
        var b;
        if (this._skyboxCubeMap && !this._skyboxModel) {
            var c = new pc.Material,
                e = this;
            c.updateShader = function() {
                var b = a.getProgramLibrary().getProgram("skybox", { rgbm: e._skyboxCubeMap.rgbm, hdr: e._skyboxCubeMap.rgbm || e._skyboxCubeMap.format === pc.PIXELFORMAT_RGBA32F, useIntensity: 1 !== e.skyboxIntensity, mip: e._skyboxCubeMap.fixCubemapSeams ? e.skyboxMip : 0, fixSeams: e._skyboxCubeMap.fixCubemapSeams, gamma: e.gammaCorrection, toneMapping: e.toneMapping });
                this.setShader(b)
            };
            c.updateShader();
            this._skyboxCubeMap.fixCubemapSeams && e._skyboxMip ? (b = this["skyboxPrefiltered" + [null, "64", "16", "8", "4"][e._skyboxMip]]) && c.setParameter("texture_cubeMap", b) : c.setParameter("texture_cubeMap", this._skyboxCubeMap);
            c.cull = pc.CULLFACE_NONE;
            b = new pc.GraphNode;
            var f = pc.createBox(a),
                c = new pc.MeshInstance(b, f, c);
            c.updateKey = function() { this.key = pc._getDrawcallSortKey(this.layer, this.material.blendType, !1, 0) };
            c.updateKey();
            c.cull = !1;
            c.drawToDepth = !1;
            f = new pc.Model;
            f.graph = b;
            f.meshInstances = [c];
            this._skyboxModel = f;
            this.addModel(f)
        }
        c = [];
        f = this.drawCalls;
        for (b = 0; b < f.length; b++) {
            var d = f[b];
            void 0 !== d.material && -1 === c.indexOf(d.material) && c.push(d.material)
        }
        for (b = 0; b < c.length; b++) f = c[b], f.updateShader !== pc.Material.prototype.updateShader && (f.clearVariants(), f.shader = null)
    };
    d.prototype.getModels = function() { return this._models };
    d.prototype._updateStats = function() {
        this._stats.meshInstances = this.drawCalls.length;
        this._updateLightStats()
    };
    d.prototype._updateLightStats = function() {
        var a = this._stats;
        a.lights = this._lights.length;
        a.dynamicLights = 0;
        a.bakedLights = 0;
        for (var b, c = 0; c < a.lights; c++) b = this._lights[c], b._enabled && ((b.mask & pc.MASK_DYNAMIC || b.mask & pc.MASK_BAKED) && a.dynamicLights++, b.mask & pc.MASK_LIGHTMAP && a.bakedLights++)
    };
    d.prototype.addModel = function(a) {
        var b, c = a._shadersVersion !== this._sceneShadersVersion;
        a._shadersVersion = this._sceneShadersVersion;
        if (-1 === this._models.indexOf(a)) {
            this._models.push(a);
            var e = a.getMaterials();
            for (b = 0; b < e.length; b++) e[b].scene = this;
            var f = a.meshInstances.length;
            for (b = 0; b < f; b++) e = a.meshInstances[b], c && e.material.clearVariants(), -1 === this.drawCalls.indexOf(e) && this.drawCalls.push(e), e.castShadow && -1 === this.shadowCasters.indexOf(e) && this.shadowCasters.push(e);
            c = a.getLights();
            b = 0;
            for (a = c.length; b < a; b++) this.addLight(c[b]);
            this._updateStats()
        }
    };
    d.prototype.removeModel = function(a) {
        var b, c = this._models.indexOf(a);
        if (-1 !== c) {
            this._models.splice(c, 1);
            c = a.getMaterials();
            for (b = 0; b < c.length; b++) c[b].scene = null;
            var e, f = a.meshInstances.length;
            for (b = 0; b < f; b++) e = a.meshInstances[b], c = this.drawCalls.indexOf(e), -1 !== c && this.drawCalls.splice(c, 1), e.castShadow && (c = this.shadowCasters.indexOf(e), -1 !== c && this.shadowCasters.splice(c, 1));
            c = a.getLights();
            b = 0;
            for (a = c.length; b < a; b++) this.removeLight(c[b]);
            this._updateStats()
        }
    };
    d.prototype.containsModel = function(a) { return 0 <= this._models.indexOf(a) };
    d.prototype.addLight = function(a) {
        -1 !== this._lights.indexOf(a) ? console.warn("pc.Scene#addLight: light is already in the scene") : (this._lights.push(a), a._scene = this, this.updateShaders = !0);
        this._updateLightStats()
    };
    d.prototype.removeLight = function(a) {
        var b = this._lights.indexOf(a); - 1 === b ? console.warn("pc.Scene#removeLight: light is not in the scene") : (this._lights.splice(b, 1), a._scene = null, this.updateShaders = !0);
        this._updateLightStats()
    };
    d.prototype._resetSkyboxModel = function() {
        this._skyboxModel && this.containsModel(this._skyboxModel) && this.removeModel(this._skyboxModel);
        this._skyboxModel = null
    };
    d.prototype.setSkybox = function(a) { null !== a ? (this._skyboxPrefiltered128 = a[1], this._skyboxPrefiltered64 = a[2], this._skyboxPrefiltered32 = a[3], this._skyboxPrefiltered16 = a[4], this._skyboxPrefiltered8 = a[5], this._skyboxPrefiltered4 = a[6], this.skybox = a[0]) : this.skybox = this._skyboxPrefiltered4 = this._skyboxPrefiltered8 = this._skyboxPrefiltered16 = this._skyboxPrefiltered32 = this._skyboxPrefiltered64 = this._skyboxPrefiltered128 = null };
    d.prototype.update = function() { for (var a = 0, b = this._models.length; a < b; a++) this._models[a].getGraph().syncHierarchy() };
    d.prototype.destroy = function() {
        var a, b = this.getModels();
        for (a = 0; a < b.length; a++) this.removeModel(b[a]);
        for (a = 0; a < this._lights.length; a++) this.removeLight(this._lights[a]);
        this.skybox = null
    };
    return { Scene: d }
}());
pc.extend(pc, function() {
    function d(a, b) { return a.zdist && b.zdist ? b.zdist - a.zdist : b.key - a.key }

    function a(a) {
        var b = Array(a);
        a = function(a) { return b[a] };
        a.size = 0;
        a.push = function(a) { b[this.size] = a;++this.size };
        a.data = b;
        return a
    }

    function b(a, b, c, e) {
        var f;
        f = e === pc.SHADOW_VSM32 ? pc.PIXELFORMAT_RGBA32F : e === pc.SHADOW_VSM16 ? pc.PIXELFORMAT_RGBA16F : pc.PIXELFORMAT_R8_G8_B8_A8;
        b = new pc.Texture(a, { format: f, width: b, height: c, autoMipmap: !1 });
        e = e === pc.SHADOW_DEPTH ? pc.FILTER_NEAREST : e === pc.SHADOW_VSM32 ? a.extTextureFloatLinear ? pc.FILTER_LINEAR : pc.FILTER_NEAREST : e === pc.SHADOW_VSM16 ? a.extTextureHalfFloatLinear ? pc.FILTER_LINEAR : pc.FILTER_NEAREST : pc.FILTER_LINEAR;
        b.minFilter = e;
        b.magFilter = e;
        b.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
        b.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
        return new pc.RenderTarget(a, b, !0)
    }

    function c(a, b) {
        var c = new pc.Texture(a, { format: pc.PIXELFORMAT_R8_G8_B8_A8, width: b, height: b, cubemap: !0, autoMipmap: !1 });
        c.minFilter = pc.FILTER_NEAREST;
        c.magFilter = pc.FILTER_NEAREST;
        c.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
        c.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
        for (var e = [], f = 0; 6 > f; f++) {
            var d = new pc.RenderTarget(a, c, { face: f, depth: !0 });
            e.push(d)
        }
        return e
    }

    function e(a, c, e, f) {
        f || (f = 0);
        f = 1E4 * f + c;
        var d = u[e][f];
        d || (d = b(a, c, c, e ? e : pc.SHADOW_DEPTH), u[e][f] = d);
        return d
    }

    function f(a, f) {
        var d;
        f.getType() === pc.LIGHTTYPE_POINT ? (f._shadowType > pc.SHADOW_DEPTH && (f._shadowType = pc.SHADOW_DEPTH), f._cacheShadowMap ? (d = A[f._shadowResolution], d || (d = c(a, f._shadowResolution), A[f._shadowResolution] = d)) : d = c(a, f._shadowResolution), f._shadowCamera.setRenderTarget(d[0]), f._shadowCubeMap = d) : (d = f._cacheShadowMap ? e(a, f._shadowResolution, f._shadowType) : b(a, f._shadowResolution, f._shadowResolution, f._shadowType), f._shadowCamera.setRenderTarget(d))
    }

    function g(a) {
        a = this.device = a;
        this._cullTime = this._forwardTime = this._shadowMapTime = this._shadowMapUpdates = this._materialSwitches = this._camerasRendered = this._removedByInstancing = this._immediateRendered = this._instancedDrawCalls = this._skinDrawCalls = this._forwardDrawCalls = this._shadowDrawCalls = this._depthDrawCalls = 0;
        var b = a.getProgramLibrary();
        this.library = b;
        this._depthProgStatic = [];
        this._depthProgSkin = [];
        this._depthProgStaticOp = [];
        this._depthProgSkinOp = [];
        this._depthProgStaticPoint = [];
        this._depthProgSkinPoint = [];
        this._depthProgStaticOpPoint = [];
        this._depthProgSkinOpPoint = [];
        for (var c = 0; c < pc.SHADOW_VSM32 + 1; c++) this._depthProgStaticOp[c] = {}, this._depthProgSkinOp[c] = {}, this._depthProgStaticOpPoint[c] = {}, this._depthProgSkinOpPoint[c] = {};
        this._depthShaderStatic = b.getProgram("depth", { skin: !1 });
        this._depthShaderSkin = b.getProgram("depth", { skin: !0 });
        this._depthShaderStaticOp = {};
        this._depthShaderSkinOp = {};
        for (var c = ["r", "g", "b", "a"], e = 0; 4 > e; e++) this._depthShaderStaticOp[c[e]] = b.getProgram("depth", { skin: !1, opacityMap: !0, opacityChannel: c[e] }), this._depthShaderSkinOp[c[e]] = b.getProgram("depth", { skin: !0, opacityMap: !0, opacityChannel: c[e] }), this._depthShaderStaticOp[c[e]] = b.getProgram("depth", { skin: !1, opacityMap: !0, opacityChannel: c[e] }), this._depthShaderSkinOp[c[e]] = b.getProgram("depth", { skin: !0, opacityMap: !0, opacityChannel: c[e] });
        a = a.scope;
        this.projId = a.resolve("matrix_projection");
        this.viewId = a.resolve("matrix_view");
        this.viewId3 = a.resolve("matrix_view3");
        this.viewInvId = a.resolve("matrix_viewInverse");
        this.viewProjId = a.resolve("matrix_viewProjection");
        this.viewPosId = a.resolve("view_position");
        this.nearClipId = a.resolve("camera_near");
        this.farClipId = a.resolve("camera_far");
        this.shadowMapLightRadiusId = a.resolve("light_radius");
        this.fogColorId = a.resolve("fog_color");
        this.fogStartId = a.resolve("fog_start");
        this.fogEndId = a.resolve("fog_end");
        this.fogDensityId = a.resolve("fog_density");
        this.modelMatrixId = a.resolve("matrix_model");
        this.normalMatrixId = a.resolve("matrix_normal");
        this.poseMatrixId = a.resolve("matrix_pose[0]");
        this.boneTextureId = a.resolve("texture_poseMap");
        this.boneTextureSizeId = a.resolve("texture_poseMapSize");
        this.skinPosOffsetId = a.resolve("skinPosOffset");
        this.alphaTestId = a.resolve("alpha_ref");
        this.opacityMapId = a.resolve("texture_opacityMap");
        this.ambientId = a.resolve("light_globalAmbient");
        this.exposureId = a.resolve("exposure");
        this.skyboxIntensityId = a.resolve("skyboxIntensity");
        this.lightColorId = [];
        this.lightDirId = [];
        this.lightShadowMapId = [];
        this.lightShadowMatrixId = [];
        this.lightShadowParamsId = [];
        this.lightShadowMatrixVsId = [];
        this.lightShadowParamsVsId = [];
        this.lightDirVsId = [];
        this.lightRadiusId = [];
        this.lightPosId = [];
        this.lightInAngleId = [];
        this.lightOutAngleId = [];
        this.lightPosVsId = [];
        this.depthMapId = a.resolve("uDepthMap");
        this.screenSizeId = a.resolve("uScreenSize");
        this._screenSize = new pc.Vec4;
        this.sourceId = a.resolve("source");
        this.pixelOffsetId = a.resolve("pixelOffset");
        this.weightId = a.resolve("weight[0]");
        a = pc.shaderChunks;
        this.blurVsmShaderCode = [a.blurVSMPS, "#define GAUSS\n" + a.blurVSMPS];
        this.blurPackedVsmShaderCode = ["#define PACKED\n" + this.blurVsmShaderCode[0], "#define PACKED\n" + this.blurVsmShaderCode[1]];
        this.blurVsmShader = [{}, {}];
        this.blurPackedVsmShader = [{}, {}];
        this.blurVsmWeights = {};
        this.fogColor = new Float32Array(3);
        this.ambientColor = new Float32Array(3)
    }
    for (var h = (new pc.Mat4).mul2((new pc.Mat4).setTranslate(.5, .5, .5), (new pc.Mat4).setScale(.5, .5, .5)), m = new pc.Vec2, l = { x: 1, y: 1, z: 0, w: 0 }, p = new pc.Mat4, k = new pc.Mat4, q = new pc.Mat4, r = new pc.Mat4, n = new pc.Mat4, t = new pc.Mat3, w = new pc.Mat4, y = new pc.Vec3, x = {}, v, z = new pc.BoundingBox, u = [{}, {}, {}, {}], A = {}, B = [], C = 0; 8 > C; C++) B.push(new pc.Vec3);
    new pc.Vec3;
    new pc.Vec3;
    new pc.Vec3;
    new a(3);
    new a(3);
    new a(3);
    new a(36);
    var E = [new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3];
    pc.extend(g.prototype, {
        _isVisible: function(a, b) {
            if (!b.visible) return !1;
            v = b.aabb.center;
            b.node._dirtyScale && (b._aabb._radius = b._aabb.halfExtents.length(), b.node._dirtyScale = !1);
            x.radius = b._aabb._radius;
            x.center = v;
            return a._frustum.containsSphere(x)
        },
        getShadowCamera: function(a, b) {
            var c = b._shadowCamera,
                e;
            if (null === c) {
                c = b._shadowType;
                e = pc.CLEARFLAG_DEPTH;
                a.extDepthTexture || (e |= pc.CLEARFLAG_COLOR);
                var d = new pc.Camera;
                d.setClearOptions({ color: c > pc.SHADOW_DEPTH ? [0, 0, 0, 0] : [1, 1, 1, 1], depth: 1, flags: e });
                d._node = new pc.GraphNode;
                c = b._shadowCamera = d;
                f(a, b)
            } else e = c.getRenderTarget(), e.width === b._shadowResolution && e.height === b._shadowResolution || f(a, b);
            return c
        },
        updateCameraFrustum: function(a) {
            var b = a.getProjectionMatrix(),
                c = a._node.getPosition(),
                e = a._node.getRotation();
            r.setTRS(c, e, pc.Vec3.ONE);
            this.viewInvId.setValue(r.data);
            n.copy(r).invert();
            a._frustum.update(b, n)
        },
        setCamera: function(a, b) {
            var c = a.getProjectionMatrix();
            this.projId.setValue(c.data);
            var e = a._node.getPosition(),
                f = a._node.getRotation();
            r.setTRS(e, f, pc.Vec3.ONE);
            this.viewInvId.setValue(r.data);
            n.copy(r).invert();
            this.viewId.setValue(n.data);
            t.data[0] = n.data[0];
            t.data[1] = n.data[1];
            t.data[2] = n.data[2];
            t.data[3] = n.data[4];
            t.data[4] = n.data[5];
            t.data[5] = n.data[6];
            t.data[6] = n.data[8];
            t.data[7] = n.data[9];
            t.data[8] = n.data[10];
            this.viewId3.setValue(t.data);
            w.mul2(c, n);
            this.viewProjId.setValue(w.data);
            this.viewPosId.setValue(a._node.getPosition().data);
            this.nearClipId.setValue(a.getNearClip());
            this.farClipId.setValue(a.getFarClip());
            a._frustum.update(c, n);
            var c = this.device,
                d = a.getRenderTarget();
            c.setRenderTarget(d);
            c.updateBegin();
            var f = a.getRect(),
                e = d ? d.width : c.width,
                d = d ? d.height : c.height,
                g = Math.floor(f.x * e),
                h = Math.floor(f.y * d),
                l = Math.floor(f.width * e),
                f = Math.floor(f.height * d);
            c.setViewport(g, h, l, f);
            c.setScissor(g, h, l, f);
            c.clear(a.getClearOptions());
            b && c.setScissor(1, 1, e - 2, d - 2)
        },
        dispatchGlobalLights: function(a) {
            var b;
            this.mainLight = -1;
            this.ambientColor[0] = a.ambientLight.r;
            this.ambientColor[1] = a.ambientLight.g;
            this.ambientColor[2] = a.ambientLight.b;
            if (a.gammaCorrection)
                for (b = 0; 3 > b; b++) this.ambientColor[b] = Math.pow(this.ambientColor[b], 2.2);
            this.ambientId.setValue(this.ambientColor);
            this.exposureId.setValue(a.exposure);
            a._skyboxModel && this.skyboxIntensityId.setValue(a.skyboxIntensity)
        },
        _resolveLight: function(a, b) {
            var c = "light" + b;
            this.lightColorId[b] = a.resolve(c + "_color");
            this.lightDirId[b] = a.resolve(c + "_direction");
            this.lightShadowMapId[b] = a.resolve(c + "_shadowMap");
            this.lightShadowMatrixId[b] = a.resolve(c + "_shadowMatrix");
            this.lightShadowParamsId[b] = a.resolve(c + "_shadowParams");
            this.lightShadowMatrixVsId[b] = a.resolve(c + "_shadowMatrixVS");
            this.lightShadowParamsVsId[b] = a.resolve(c +
                "_shadowParamsVS");
            this.lightDirVsId[b] = a.resolve(c + "_directionVS");
            this.lightRadiusId[b] = a.resolve(c + "_radius");
            this.lightPosId[b] = a.resolve(c + "_position");
            this.lightInAngleId[b] = a.resolve(c + "_innerConeAngle");
            this.lightOutAngleId[b] = a.resolve(c + "_outerConeAngle");
            this.lightPosVsId[b] = a.resolve(c + "_positionVS")
        },
        dispatchDirectLights: function(a, b) {
            var c = a._globalLights,
                e = c.length,
                f, d, g, h = 0,
                l = this.device.scope;
            for (f = 0; f < e; f++)
                if (c[f].mask & b) {
                    d = c[f];
                    g = d._node.getWorldTransform();
                    this.lightColorId[h] || this._resolveLight(l, h);
                    this.lightColorId[h].setValue(a.gammaCorrection ? d._linearFinalColor.data : d._finalColor.data);
                    g.getY(d._direction).scale(-1);
                    this.lightDirId[h].setValue(d._direction.normalize().data);
                    if (d.getCastShadows()) {
                        var k = this.device.extDepthTexture ? d._shadowCamera._renderTarget._depthTexture : d._shadowCamera._renderTarget.colorBuffer;
                        g = d._shadowType > pc.SHADOW_DEPTH ? -2E-4 : d._shadowBias / d._shadowCamera.getFarClip() * 100;
                        var n = d._shadowType > pc.SHADOW_DEPTH ? d._vsmBias / (d._shadowCamera.getFarClip() / 7) : d._normalOffsetBias;
                        this.lightShadowMapId[h].setValue(k);
                        this.lightShadowMatrixId[h].setValue(d._shadowMatrix.data);
                        k = d._rendererParams;
                        3 !== k.length && (k.length = 3);
                        k[0] = d._shadowResolution;
                        k[1] = n;
                        k[2] = g;
                        this.lightShadowParamsId[h].setValue(k);
                        0 > this.mainLight && (this.lightShadowMatrixVsId[h].setValue(d._shadowMatrix.data), this.lightShadowParamsVsId[h].setValue(k), this.lightDirVsId[h].setValue(d._direction.normalize().data), this.mainLight = f)
                    }
                    h++
                } return h
        },
        dispatchLocalLights: function(a, b, c) {
            var e, f, d, g = a._localLights;
            d = g[pc.LIGHTTYPE_POINT - 1];
            var g = g[pc.LIGHTTYPE_SPOT - 1],
                h = d.length,
                l = g.length,
                k = c,
                n = this.device.scope;
            for (c = 0; c < h; c++) d[c].mask & b && (f = d[c], e = f._node.getWorldTransform(), this.lightColorId[k] || this._resolveLight(n, k), this.lightRadiusId[k].setValue(f._attenuationEnd), this.lightColorId[k].setValue(a.gammaCorrection ? f._linearFinalColor.data : f._finalColor.data), e.getTranslation(f._position), this.lightPosId[k].setValue(f._position.data), f.getCastShadows() && (e = this.device.extDepthTexture ? f._shadowCamera._renderTarget._depthTexture : f._shadowCamera._renderTarget.colorBuffer, this.lightShadowMapId[k].setValue(e), this.lightShadowMatrixId[k].setValue(f._shadowMatrix.data), e = f._rendererParams, 4 !== e.length && (e.length = 4), e[0] = f._shadowResolution, e[1] = f._normalOffsetBias, e[2] = f._shadowBias, e[3] = 1 / f.getAttenuationEnd(), this.lightShadowParamsId[k].setValue(e)), k++);
            for (c = 0; c < l; c++) g[c].mask & b && (d = g[c], e = d._node.getWorldTransform(), this.lightColorId[k] || this._resolveLight(n, k), this.lightInAngleId[k].setValue(d._innerConeAngleCos), this.lightOutAngleId[k].setValue(d._outerConeAngleCos), this.lightRadiusId[k].setValue(d._attenuationEnd), this.lightColorId[k].setValue(a.gammaCorrection ? d._linearFinalColor.data : d._finalColor.data), e.getTranslation(d._position), this.lightPosId[k].setValue(d._position.data), e.getY(d._direction).scale(-1), this.lightDirId[k].setValue(d._direction.normalize().data), d.getCastShadows() && (h = d._shadowType > pc.SHADOW_DEPTH ? -2E-4 : 20 * d._shadowBias, f = d._shadowType > pc.SHADOW_DEPTH ? d._vsmBias / (d.getAttenuationEnd() / 7) : d._normalOffsetBias, e = this.device.extDepthTexture ? d._shadowCamera._renderTarget._depthTexture : d._shadowCamera._renderTarget.colorBuffer, this.lightShadowMapId[k].setValue(e), this.lightShadowMatrixId[k].setValue(d._shadowMatrix.data), e = d._rendererParams, 4 !== e.length && (e.length = 4), e[0] = d._shadowResolution, e[1] = f, e[2] = h, e[3] = 1 / d.getAttenuationEnd(), this.lightShadowParamsId[k].setValue(e), 0 > this.mainLight && (this.lightShadowMatrixVsId[k].setValue(d._shadowMatrix.data), this.lightShadowParamsVsId[k].setValue(e), this.lightPosVsId[k].setValue(d._position.data), this.mainLight = c)), k++)
        },
        render: function(a, b) {
            var c, f, g = this.device;
            a._activeCamera = b;
            a.updateShaders && (a.updateShadersFunc(g), a.updateShaders = !1);
            var n = b.getRenderTarget(),
                r = !1,
                t = a._gammaCorrection,
                w = a._toneMapping,
                u = a.exposure;
            if (n) { var A = n.colorBuffer.format; if (A === pc.PIXELFORMAT_RGB16F || A === pc.PIXELFORMAT_RGB32F) r = !0, a._gammaCorrection = pc.GAMMA_NONE, a._toneMapping = pc.TONEMAP_LINEAR, a.exposure = 1 }
            var J, I, za, L, C = a._lights,
                Z = a.drawCalls,
                W = Z.length,
                Ia = a.shadowCasters,
                T, F, ca, N, Ja = null,
                ma, fa;
            a._globalLights.length = 0;
            a._localLights[0].length = 0;
            for (J = a._localLights[1].length = 0; J < C.length; J++) L = C[J], L.getEnabled() && (L.getType() === pc.LIGHTTYPE_DIRECTIONAL ? a._globalLights.push(L) : a._localLights[L.getType() === pc.LIGHTTYPE_POINT ? 0 : 1].push(L));
            var na = [],
                Aa, U, ja, Wa;
            this.updateCameraFrustum(b);
            for (J = 0; J < W; J++) T = Z[J], T.skinInstance && T.skinInstance.updateMatrices();
            var ka = b._node.getPosition(),
                S = b._node.forward;
            for (J = 0; J < W; J++) {
                T = Z[J];
                Aa = !0;
                v = null;
                if (!T.command) {
                    if (!T.visible) continue;
                    F = T;
                    F.layer === pc.LAYER_WORLD && (b.frustumCulling && T.cull && (Aa = this._isVisible(b, F)), Aa && (U = F.material.blendType, U !== pc.BLEND_NONE ? (v || (v = F.aabb.center), F.zdist = (v.x - ka.x) * S.x + (v.y - ka.y) * S.y + (v.z - ka.z) * S.z) : void 0 !== F.zdist && delete F.zdist))
                }
                Aa && na.push(T)
            }
            for (J = 0; J < a.immediateDrawCalls.length; J++) na.push(a.immediateDrawCalls[J]);
            this._immediateRendered += a.immediateDrawCalls.length;
            Z = na;
            W = na.length;
            for (J = 0; J < W; J++) T = Z[J], T.skinInstance && T.skinInstance.updateMatrixPalette();
            Z.sort(d);
            var Y = "r",
                R, ga = this.library;
            if (b._renderDepthRequests) {
                var Ka = b._rect,
                    hb = Math.floor(Ka.width * g.width),
                    ib = Math.floor(Ka.height * g.height);
                !b._depthTarget || b._depthTarget.width === hb && b._depthTarget.height === ib || (b._depthTarget.destroy(), b._depthTarget = null);
                if (!b._depthTarget) {
                    var La = new pc.Texture(g, { format: pc.PIXELFORMAT_R8_G8_B8_A8, width: hb, height: ib });
                    La.minFilter = pc.FILTER_NEAREST;
                    La.magFilter = pc.FILTER_NEAREST;
                    La.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                    La.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                    b._depthTarget = new pc.RenderTarget(g, La, { depth: !0 })
                }
                var vb = b.getRenderTarget();
                b.setRenderTarget(b._depthTarget);
                this.setCamera(b);
                var wb = g.getBlending();
                g.setBlending(!1);
                for (J = 0; J < W; J++) F = Z[J], !F.command && F.drawToDepth && F.material.blendType === pc.BLEND_NONE && (ca = F.mesh, this.modelMatrixId.setValue(F.node.worldTransform.data), N = F.material, N.opacityMap && (this.opacityMapId.setValue(N.opacityMap), this.alphaTestId.setValue(N.alphaTest), N.opacityMapChannel && (Y = N.opacityMapChannel)), F.skinInstance ? (this._skinDrawCalls++, this.skinPosOffsetId.setValue(F.skinInstance.rootNode.getPosition().data), g.supportsBoneTextures ? (fa = F.skinInstance.boneTexture, this.boneTextureId.setValue(fa), this.boneTextureSizeId.setValue([fa.width, fa.height])) : this.poseMatrixId.setValue(F.skinInstance.matrixPalette), g.setShader(N.opacityMap ? this._depthShaderSkinOp[Y] : this._depthShaderSkin)) : g.setShader(N.opacityMap ? this._depthShaderStaticOp[Y] : this._depthShaderStatic), ma = F.renderStyle, g.setVertexBuffer(ca.vertexBuffer, 0), g.setIndexBuffer(ca.indexBuffer[ma]), g.draw(ca.primitive[ma]), this._depthDrawCalls++), b.setRenderTarget(vb);
                g.setBlending(wb)
            } else b._depthTarget && (b._depthTarget.destroy(), b._depthTarget = null);
            var ua, va, Da, Ea, Fa, Ga, Xa, Ya, aa;
            for (J = 0; J < C.length; J++) {
                L = C[J];
                var ra = L.getType();
                if (L.getCastShadows() && L.getEnabled() && L.shadowUpdateMode !== pc.SHADOWUPDATE_NONE) {
                    L.shadowUpdateMode === pc.SHADOWUPDATE_THISFRAME && (L.shadowUpdateMode = pc.SHADOWUPDATE_NONE);
                    var P = this.getShadowCamera(g, L),
                        Za = 1,
                        oa, sa;
                    P._node.setPosition(L._node.getPosition());
                    P._node.setRotation(L._node.getRotation());
                    P._node.rotateLocal(-90, 0, 0);
                    if (ra === pc.LIGHTTYPE_DIRECTIONAL) {
                        var Ma = b,
                            Na = L.getShadowDistance() || b.getFarClip(),
                            V = B,
                            Oa = Ma.getNearClip(),
                            jb = Ma.getFov() * Math.PI / 180,
                            kb = Ma.getAspectRatio(),
                            lb = Ma.getProjection(),
                            pa = void 0,
                            ha = void 0,
                            ha = lb === pc.PROJECTION_PERSPECTIVE ? Math.tan(jb / 2) * Oa : Ma._orthoHeight,
                            pa = ha * kb;
                        V[0].x = pa;
                        V[0].y = -ha;
                        V[0].z = -Oa;
                        V[1].x = pa;
                        V[1].y = ha;
                        V[1].z = -Oa;
                        V[2].x = -pa;
                        V[2].y = ha;
                        V[2].z = -Oa;
                        V[3].x = -pa;
                        V[3].y = -ha;
                        V[3].z = -Oa;
                        lb === pc.PROJECTION_PERSPECTIVE && (ha = Math.tan(jb / 2) * Na, pa = ha * kb);
                        V[4].x = pa;
                        V[4].y = -ha;
                        V[4].z = -Na;
                        V[5].x = pa;
                        V[5].y = ha;
                        V[5].z = -Na;
                        V[6].x = -pa;
                        V[6].y = ha;
                        V[6].z = -Na;
                        V[7].x = -pa;
                        V[7].y = -ha;
                        V[7].z = -Na;
                        sa = y.sub2(B[0], B[6]).length();
                        sa = Math.max(sa, y.sub2(B[4], B[6]).length());
                        p.copy(P._node.getWorldTransform()).invert();
                        q.copy(p).mul(b._node.worldTransform);
                        for (I = 0; 8 > I; I++) q.transformPoint(B[I], B[I]);
                        ua = va = Da = 1E6;
                        Ea = Fa = Ga = -1E6;
                        for (I = 0; 8 > I; I++) {
                            var ia = B[I];
                            ia.x < ua && (ua = ia.x);
                            ia.x > Ea && (Ea = ia.x);
                            ia.y < va && (va = ia.y);
                            ia.y > Fa && (Fa = ia.y);
                            ia.z < Da && (Da = ia.z);
                            ia.z > Ga && (Ga = ia.z)
                        }
                        var Ta = sa / L.getShadowResolution(),
                            $a = .5 * (sa - (Ea -
                                ua));
                        ua = Math.floor((ua - $a) / Ta) * Ta;
                        $a = .5 * (sa - (Fa - va));
                        va = Math.floor((va - $a) / Ta) * Ta;
                        Ea = ua + sa;
                        Fa = va + sa;
                        Xa = .5 * (Ea + ua);
                        Ya = .5 * (Fa + va);
                        P._node.translateLocal(Xa, Ya, 1E5);
                        P.setProjection(pc.PROJECTION_ORTHOGRAPHIC);
                        P.setNearClip(0);
                        P.setFarClip(2E5);
                        P.setAspectRatio(1);
                        P.setOrthoHeight(.5 * sa)
                    } else if (ra === pc.LIGHTTYPE_SPOT) {
                        if (b.frustumCulling && (L._node.getWorldTransform(), L.getBoundingSphere(x), !b._frustum.containsSphere(x))) continue;
                        P.setProjection(pc.PROJECTION_PERSPECTIVE);
                        P.setNearClip(L.getAttenuationEnd() / 1E3);
                        P.setFarClip(L.getAttenuationEnd());
                        P.setAspectRatio(1);
                        P.setFov(2 * L.getOuterConeAngle());
                        this.viewPosId.setValue(P._node.getPosition().data);
                        this.shadowMapLightRadiusId.setValue(L.getAttenuationEnd())
                    } else if (ra === pc.LIGHTTYPE_POINT) {
                        if (b.frustumCulling && (L._node.getWorldTransform(), L.getBoundingSphere(x), !b._frustum.containsSphere(x))) continue;
                        P.setProjection(pc.PROJECTION_PERSPECTIVE);
                        P.setNearClip(L.getAttenuationEnd() / 1E3);
                        P.setFarClip(L.getAttenuationEnd());
                        P.setAspectRatio(1);
                        P.setFov(90);
                        Za = 6;
                        this.viewPosId.setValue(P._node.getPosition().data);
                        this.shadowMapLightRadiusId.setValue(L.getAttenuationEnd())
                    }
                    this._shadowMapUpdates += Za;
                    Y = "r";
                    for (oa = 0; oa < Za; oa++) {
                        ra === pc.LIGHTTYPE_POINT && (0 === oa ? P._node.setEulerAngles(0, 90, 180) : 1 === oa ? P._node.setEulerAngles(0, -90, 180) : 2 === oa ? P._node.setEulerAngles(90, 0, 0) : 3 === oa ? P._node.setEulerAngles(-90, 0, 0) : 4 === oa ? P._node.setEulerAngles(0, 180, 180) : 5 === oa && P._node.setEulerAngles(0, 0, 180), P._node.setPosition(L._node.getPosition()), P.setRenderTarget(L._shadowCubeMap[oa]));
                        this.setCamera(P, ra !== pc.LIGHTTYPE_POINT);
                        na = [];
                        I = 0;
                        for (za = Ia.length; I < za; I++) F = Ia[I], Aa = !0, F.cull && (Aa = this._isVisible(P, F)), Aa && na.push(F);
                        if (ra === pc.LIGHTTYPE_DIRECTIONAL) {
                            ja = !0;
                            for (I = 0; I < na.length; I++) F = na[I], Wa = F.aabb, ja ? (z.copy(Wa), ja = !1) : z.add(Wa);
                            var xb = p,
                                ab = z.getMin(),
                                bb = z.getMax();
                            E[0].x = E[1].x = E[2].x = E[3].x = ab.x;
                            E[1].y = E[3].y = E[7].y = E[5].y = ab.y;
                            E[2].z = E[3].z = E[6].z = E[7].z = ab.z;
                            E[4].x = E[5].x = E[6].x = E[7].x = bb.x;
                            E[0].y = E[2].y = E[4].y = E[6].y = bb.y;
                            E[0].z = E[1].z = E[4].z = E[5].z = bb.z;
                            for (var cb = 9999999999, db = -9999999999, Pa = void 0, Qa = 0; 8 > Qa; ++Qa) xb.transformPoint(E[Qa], E[Qa]), Pa = E[Qa].z, Pa < cb && (cb = Pa), Pa > db && (db = Pa);
                            c = cb;
                            Ga = f = db;
                            c > Da && (Da = c);
                            P._node.setPosition(L._node.getPosition());
                            P._node.translateLocal(Xa, Ya, Ga + .01);
                            P.setFarClip(Ga - Da);
                            this.setCamera(P, !0)
                        }
                        ra !== pc.LIGHTTYPE_POINT && (p.setTRS(P._node.getPosition(), P._node.getRotation(), pc.Vec3.ONE).invert(), k.mul2(P.getProjectionMatrix(), p), L._shadowMatrix.mul2(h, k));
                        g.setBlending(!1);
                        g.setColorWrite(!0, !0, !0, !0);
                        g.setDepthWrite(!0);
                        g.setDepthTest(!0);
                        g.extDepthTexture && g.setColorWrite(!1, !1, !1, !1);
                        R = L._shadowType;
                        I = 0;
                        for (za = na.length; I < za; I++) F = na[I], ca = F.mesh, N = F.material, g.setCullMode(N.cull), this.modelMatrixId.setValue(F.node.worldTransform.data), N.opacityMap && (this.opacityMapId.setValue(N.opacityMap), this.alphaTestId.setValue(N.alphaTest), N.opacityMapChannel && (Y = N.opacityMapChannel)), F.skinInstance ? (this._skinDrawCalls++, this.skinPosOffsetId.setValue(F.skinInstance.rootNode.getPosition().data), g.supportsBoneTextures ? (fa = F.skinInstance.boneTexture, this.boneTextureId.setValue(fa), this.boneTextureSizeId.setValue([fa.width, fa.height])) : this.poseMatrixId.setValue(F.skinInstance.matrixPalette), ra !== pc.LIGHTTYPE_DIRECTIONAL ? N.opacityMap ? (aa = this._depthProgSkinOpPoint[R][Y]) || (aa = this._depthProgSkinOpPoint[R][Y] = ga.getProgram("depthrgba", { skin: !0, opacityMap: !0, point: !0, shadowType: R, opacityChannel: Y })) : (aa = this._depthProgSkinPoint[R]) || (aa = this._depthProgSkinPoint[R] = ga.getProgram("depthrgba", { skin: !0, point: !0, shadowType: R })) : N.opacityMap ? (aa = this._depthProgSkinOp[R][Y]) || (aa = this._depthProgSkinOp[R][Y] = ga.getProgram("depthrgba", { skin: !0, opacityMap: !0, shadowType: R, opacityChannel: Y })) : (aa = this._depthProgSkin[R]) || (aa = this._depthProgSkin[R] = ga.getProgram("depthrgba", { skin: !0, shadowType: R }))) : ra !== pc.LIGHTTYPE_DIRECTIONAL ? N.opacityMap ? (aa = this._depthProgStaticOpPoint[R][Y]) || (aa = this._depthProgStaticOpPoint[R][Y] = ga.getProgram("depthrgba", { opacityMap: !0, point: !0, shadowType: R, opacityChannel: Y })) : (aa = this._depthProgStaticPoint[R]) || (aa = this._depthProgStaticPoint[R] = ga.getProgram("depthrgba", { point: !0, shadowType: R })) : N.opacityMap ? (aa = this._depthProgStaticOp[R][Y]) || (aa = this._depthProgStaticOp[R][Y] = ga.getProgram("depthrgba", { opacityMap: !0, shadowType: R, opacityChannel: Y })) : (aa = this._depthProgStatic[R]) || (aa = this._depthProgStatic[R] = ga.getProgram("depthrgba", { shadowType: R })), g.setShader(aa), ma = F.renderStyle, g.setVertexBuffer(ca.vertexBuffer, 0), g.setIndexBuffer(ca.indexBuffer[ma]), g.draw(ca.primitive[ma]), this._shadowDrawCalls++
                    }
                    if (L._shadowType > pc.SHADOW_DEPTH) {
                        var wa = L._vsmBlurSize;
                        if (1 < wa) {
                            var mb = P.getRenderTarget(),
                                nb = e(g, L._shadowResolution, L._shadowType, 1),
                                Ra = L._vsmBlurMode,
                                Ua = (L._shadowType === pc.SHADOW_VSM8 ? this.blurPackedVsmShader : this.blurVsmShader)[Ra][wa];
                            if (!Ua) {
                                var yb = this.blurVsmWeights,
                                    zb = wa,
                                    Ba = wa;
                                25 < Ba && (Ba = 25);
                                for (var ob = (Ba - 1) / 6, la = void 0, Ha = void 0, eb = void 0, pb = void 0, pb = .5 * (Ba - 1), Ha = Array(Ba), la = eb = 0; la < Ba; ++la) {
                                    var qb = la - pb;
                                    Ha[la] = Math.exp(-(qb * qb) / (2 * ob * ob));
                                    eb += Ha[la]
                                }
                                for (la = 0; la < Ba; ++la) Ha[la] /= eb;
                                yb[zb] = Ha;
                                var rb = pc.shaderChunks;
                                (L._shadowType === pc.SHADOW_VSM8 ? this.blurPackedVsmShader : this.blurVsmShader)[Ra][wa] = Ua = rb.createShaderFromCode(this.device, rb.fullscreenQuadVS, "#define SAMPLES " + wa + "\n" + (L._shadowType === pc.SHADOW_VSM8 ? this.blurPackedVsmShaderCode : this.blurVsmShaderCode)[Ra], "blurVsm" + Ra + "" + wa + "" + (L._shadowType === pc.SHADOW_VSM8))
                            }
                            l.z = L._shadowResolution - 2;
                            l.w = l.z;
                            this.sourceId.setValue(mb.colorBuffer);
                            m.x = 1 / L._shadowResolution;
                            m.y = 0;
                            this.pixelOffsetId.setValue(m.data);
                            Ra === pc.BLUR_GAUSSIAN && this.weightId.setValue(this.blurVsmWeights[wa]);
                            pc.drawQuadWithShader(g, nb, Ua, null, l);
                            this.sourceId.setValue(nb.colorBuffer);
                            m.y = m.x;
                            m.x = 0;
                            this.pixelOffsetId.setValue(m.data);
                            pc.drawQuadWithShader(g, mb, Ua, null, l)
                        }
                    }
                }
            }
            this.setCamera(b);
            this.dispatchGlobalLights(a);
            if (a.fog !== pc.FOG_NONE) {
                this.fogColor[0] = a.fogColor.r;
                this.fogColor[1] = a.fogColor.g;
                this.fogColor[2] = a.fogColor.b;
                if (a.gammaCorrection)
                    for (J = 0; 3 > J; J++) this.fogColor[J] = Math.pow(this.fogColor[J], 2.2);
                this.fogColorId.setValue(this.fogColor);
                a.fog === pc.FOG_LINEAR ? (this.fogStartId.setValue(a.fogStart), this.fogEndId.setValue(a.fogEnd)) : this.fogDensityId.setValue(a.fogDensity)
            }
            pc._instanceVertexFormat || (pc._instanceVertexFormat = new pc.VertexFormat(g, [{ semantic: pc.SEMANTIC_TEXCOORD2, components: 4, type: pc.ELEMENTTYPE_FLOAT32 }, { semantic: pc.SEMANTIC_TEXCOORD3, components: 4, type: pc.ELEMENTTYPE_FLOAT32 }, { semantic: pc.SEMANTIC_TEXCOORD4, components: 4, type: pc.ELEMENTTYPE_FLOAT32 }, { semantic: pc.SEMANTIC_TEXCOORD5, components: 4, type: pc.ELEMENTTYPE_FLOAT32 }]));
            g.enableAutoInstancing && !pc._autoInstanceBuffer && (pc._autoInstanceBuffer = new pc.VertexBuffer(g, pc._instanceVertexFormat, g.autoInstancingMaxObjects, pc.BUFFER_DYNAMIC), pc._autoInstanceBufferData = new Float32Array(pc._autoInstanceBuffer.lock()));
            var ta, Va, qa, sb, Sa, tb, xa, ea, Ca;
            this._screenSize.x = g.width;
            this._screenSize.y = g.height;
            this._screenSize.z = 1 / g.width;
            this._screenSize.w = 1 / g.height;
            this.screenSizeId.setValue(this._screenSize.data);
            b._depthTarget && this.depthMapId.setValue(b._depthTarget.colorBuffer);
            for (J = 0; J < W; J++)
                if (T = Z[J], T.command) T.command();
                else {
                    F = T;
                    ca = F.mesh;
                    N = F.material;
                    qa = F._shaderDefs;
                    Sa = F.mask;
                    if (g.enableAutoInstancing && J !== W - 1 && g.extInstancing && (ta = J + 1, Z[ta].mesh === ca && Z[ta].material === N)) {
                        for (I = 0; 16 > I; I++) pc._autoInstanceBufferData[I] = T.node.worldTransform.data[I];
                        for (Va = 1; ta !== W && Z[ta].mesh === ca && Z[ta].material === N;) {
                            for (I = 0; 16 > I; I++) pc._autoInstanceBufferData[16 * Va + I] = Z[ta].node.worldTransform.data[I];
                            Va++;
                            ta++
                        }
                        F.instancingData = {};
                        F.instancingData.count = Va;
                        F.instancingData._buffer = pc._autoInstanceBuffer;
                        F.instancingData._buffer.unlock();
                        J = ta - 1
                    }
                    if (F.instancingData && g.extInstancing) qa |= pc.SHADERDEF_INSTANCING, F.instancingData._buffer || (F.instancingData._buffer = new pc.VertexBuffer(g, pc._instanceVertexFormat, T.instancingData.count, T.instancingData.usage, F.instancingData.buffer));
                    else {
                        qa &= ~pc.SHADERDEF_INSTANCING;
                        var ub = F.node.worldTransform,
                            fb = F.normalMatrix;
                        ub.invertTo3x3(fb);
                        fb.transpose();
                        this.modelMatrixId.setValue(ub.data);
                        this.normalMatrixId.setValue(fb.data)
                    }
                    F.skinInstance && (this._skinDrawCalls++, this.skinPosOffsetId.setValue(F.skinInstance.rootNode.getPosition().data), g.supportsBoneTextures ? (fa = F.skinInstance.boneTexture, this.boneTextureId.setValue(fa), this.boneTextureSizeId.setValue([fa.width, fa.height])) : this.poseMatrixId.setValue(F.skinInstance.matrixPalette));
                    N && N === Ja && qa !== sb && (Ja = null);
                    if (N !== Ja) {
                        this._materialSwitches++;
                        F._shader && F._shaderDefs === qa || (F._shader = N.variants[qa], F._shader || (N.updateShader(g, a, qa), F._shader = N.variants[qa] = N.shader), F._shaderDefs = qa);
                        g.setShader(F._shader);
                        Ca = N.parameters;
                        for (xa in Ca) ea = Ca[xa], ea.scopeId || (ea.scopeId = g.scope.resolve(xa)), ea.scopeId.setValue(ea.data);
                        if (!Ja || Sa !== tb) {
                            var Ab = this.dispatchDirectLights(a, Sa);
                            this.dispatchLocalLights(a, Sa, Ab)
                        }
                        this.alphaTestId.setValue(N.alphaTest);
                        g.setBlending(N.blend);
                        g.setBlendFunction(N.blendSrc, N.blendDst);
                        g.setBlendEquation(N.blendEquation);
                        g.setColorWrite(N.redWrite, N.greenWrite, N.blueWrite, N.alphaWrite);
                        g.setCullMode(N.cull);
                        g.setDepthWrite(N.depthWrite);
                        g.setDepthTest(N.depthTest)
                    }
                    Ca = F.parameters;
                    for (xa in Ca) ea = Ca[xa], ea.scopeId || (ea.scopeId = g.scope.resolve(xa)), ea.scopeId.setValue(ea.data);
                    g.setVertexBuffer(ca.vertexBuffer, 0);
                    ma = F.renderStyle;
                    g.setIndexBuffer(ca.indexBuffer[ma]);
                    F.instancingData ? (this._instancedDrawCalls++, this._removedByInstancing += T.instancingData.count, g.setVertexBuffer(F.instancingData._buffer, 1), g.draw(ca.primitive[ma], T.instancingData.count), F.instancingData._buffer === pc._autoInstanceBuffer && (F.instancingData = null)) : g.draw(ca.primitive[ma]);
                    this._forwardDrawCalls++;
                    if (J < W - 1 && Z[J + 1].material === N)
                        for (xa in Ca)(ea = N.parameters[xa]) && ea.scopeId.setValue(ea.data);
                    Ja = N;
                    sb = qa;
                    tb = Sa
                } g.setColorWrite(!0, !0, !0, !0);
            0 < a.immediateDrawCalls.length && (a.immediateDrawCalls = []);
            r && (a._gammaCorrection = t, a._toneMapping = w, a.exposure = u);
            this._camerasRendered++
        }
    });
    return { ForwardRenderer: g }
}());
pc.extend(pc, function() {
    var d = function() {
        this.name = "Untitled";
        this._labels = {};
        this.localPosition = new pc.Vec3(0, 0, 0);
        this.localRotation = new pc.Quat(0, 0, 0, 1);
        this.localScale = new pc.Vec3(1, 1, 1);
        this.localEulerAngles = new pc.Vec3(0, 0, 0);
        this.position = new pc.Vec3(0, 0, 0);
        this.rotation = new pc.Quat(0, 0, 0, 1);
        this.eulerAngles = new pc.Vec3(0, 0, 0);
        this.localTransform = new pc.Mat4;
        this.dirtyLocal = !1;
        this._dirtyAabb = this._dirtyScale = !0;
        this.worldTransform = new pc.Mat4;
        this.dirtyWorld = !1;
        this._right = new pc.Vec3;
        this._up = new pc.Vec3;
        this._forward = new pc.Vec3;
        this._parent = null;
        this._children = [];
        this._enabled = !0;
        this._enabledInHierarchy = !1
    };
    Object.defineProperty(d.prototype, "right", { get: function() { return this.getWorldTransform().getX(this._right).normalize() } });
    Object.defineProperty(d.prototype, "up", { get: function() { return this.getWorldTransform().getY(this._up).normalize() } });
    Object.defineProperty(d.prototype, "forward", { get: function() { return this.getWorldTransform().getZ(this._forward).normalize().scale(-1) } });
    Object.defineProperty(d.prototype, "enabled", { get: function() { return this._enabled && this._enabledInHierarchy }, set: function(a) { this._enabled !== a && (this._enabled = a, this._parent && !this._parent.enabled || this._notifyHierarchyStateChanged(this, a)) } });
    pc.extend(d.prototype, {
        _notifyHierarchyStateChanged: function(a, b) { a._onHierarchyStateChanged(b); for (var c = a._children, e = 0, f = c.length; e < f; e++) c[e]._enabled && this._notifyHierarchyStateChanged(c[e], b) },
        _onHierarchyStateChanged: function(a) { this._enabledInHierarchy = a },
        _cloneInternal: function(a) {
            a.name = this.name;
            a._labels = pc.extend(this._labels, {});
            a.localPosition.copy(this.localPosition);
            a.localRotation.copy(this.localRotation);
            a.localScale.copy(this.localScale);
            a.localEulerAngles.copy(this.localEulerAngles);
            a.position.copy(this.position);
            a.rotation.copy(this.rotation);
            a.eulerAngles.copy(this.eulerAngles);
            a.localTransform.copy(this.localTransform);
            a.dirtyLocal = this.dirtyLocal;
            a.worldTransform.copy(this.worldTransform);
            a.dirtyWorld = this.dirtyWorld;
            a._dirtyAabb = this._dirtyAabb;
            a._enabled = this._enabled;
            a._enabledInHierarchy = !1
        },
        clone: function() {
            var a = new pc.GraphNode;
            this._cloneInternal(a);
            return a
        },
        find: function(a, b) {
            var c, e = this.getChildren(),
                f = e.length,
                d = [];
            this[a] && (c = this[a] instanceof Function ? this[a]() : this[a], c === b && d.push(this));
            for (c = 0; c < f; ++c) d = d.concat(e[c].find(a, b));
            return d
        },
        findOne: function(a, b) {
            var c, e = this.getChildren(),
                f = e.length,
                d;
            if (this[a] && (c = this[a] instanceof Function ? this[a]() : this[a], c === b)) return this;
            for (c = 0; c < f; ++c)
                if (d = e[c].findOne(a, b), null !== d) return d;
            return null
        },
        findByName: function(a) { if (this.name === a) return this; for (var b = 0; b < this._children.length; b++) { var c = this._children[b].findByName(a); if (null !== c) return c } return null },
        findByPath: function(a) {
            a = a.split("/");
            for (var b = this, c = null, e = 0, f = a.length; e < f && b; e++) {
                for (var d = a[e], c = null, b = b._children, h = 0, m = b.length; h < m; h++)
                    if (b[h].name == d) { c = b[h]; break } b = c
            }
            return c
        },
        getPath: function() { var a = this._parent; if (a) { for (var b = this.name; a && a._parent;) b = pc.string.format("{0}/{1}", a.name, b), a = a._parent; return b } return "" },
        getRoot: function() { var a = this.getParent(); if (!a) return this; for (; a.getParent();) a = a.getParent(); return a },
        getParent: function() { return this._parent },
        getChildren: function() { return this._children },
        getEulerAngles: function() { this.getWorldTransform().getEulerAngles(this.eulerAngles); return this.eulerAngles },
        getLocalEulerAngles: function() { this.localRotation.getEulerAngles(this.localEulerAngles); return this.localEulerAngles },
        getLocalPosition: function() { return this.localPosition },
        getLocalRotation: function() { return this.localRotation },
        getLocalScale: function() { return this.localScale },
        getLocalTransform: function() { this.dirtyLocal && (this.localTransform.setTRS(this.localPosition, this.localRotation, this.localScale), this.dirtyLocal = !1, this._dirtyAabb = this.dirtyWorld = !0); return this.localTransform },
        getName: function() { return this.name },
        getPosition: function() { this.getWorldTransform().getTranslation(this.position); return this.position },
        getRotation: function() { this.rotation.setFromMat4(this.getWorldTransform()); return this.rotation },
        getWorldTransform: function() { var a = []; return function() { var b = this; for (a.length = 0; null !== b;) a.push(b), b = b._parent; for (b = a.length - 1; 0 <= b; b--) a[b].sync(); return this.worldTransform } }(),
        reparent: function(a, b) {
            var c = this.getParent();
            c && c.removeChild(this);
            a && (0 <= b ? a.insertChild(this, b) : a.addChild(this))
        },
        setLocalEulerAngles: function() {
            var a, b, c;
            switch (arguments.length) {
                case 1:
                    a = arguments[0].x;
                    b = arguments[0].y;
                    c = arguments[0].z;
                    break;
                case 3:
                    a = arguments[0], b = arguments[1], c = arguments[2]
            }
            this.localRotation.setFromEulerAngles(a, b, c);
            this.dirtyLocal = !0
        },
        setLocalPosition: function() {
            1 === arguments.length ? this.localPosition.copy(arguments[0]) : this.localPosition.set(arguments[0], arguments[1], arguments[2]);
            this.dirtyLocal = !0
        },
        setLocalRotation: function(a) {
            1 === arguments.length ? this.localRotation.copy(arguments[0]) : this.localRotation.set(arguments[0], arguments[1], arguments[2], arguments[3]);
            this.dirtyLocal = !0
        },
        setLocalScale: function() {
            1 === arguments.length ? this.localScale.copy(arguments[0]) : this.localScale.set(arguments[0], arguments[1], arguments[2]);
            this._dirtyScale = this.dirtyLocal = !0
        },
        setName: function(a) { this.name = a },
        setPosition: function() {
            var a = new pc.Vec3,
                b = new pc.Mat4;
            return function() {
                1 === arguments.length ? a.copy(arguments[0]) : a.set(arguments[0], arguments[1], arguments[2]);
                null === this._parent ? this.localPosition.copy(a) : (b.copy(this._parent.getWorldTransform()).invert(), b.transformPoint(a, this.localPosition));
                this.dirtyLocal = !0
            }
        }(),
        setRotation: function() {
            var a = new pc.Quat,
                b = new pc.Quat;
            return function() {
                1 === arguments.length ? a.copy(arguments[0]) : a.set(arguments[0], arguments[1], arguments[2], arguments[3]);
                if (null === this._parent) this.localRotation.copy(a);
                else {
                    var c = this._parent.getRotation();
                    b.copy(c).invert();
                    this.localRotation.copy(b).mul(a)
                }
                this.dirtyLocal = !0
            }
        }(),
        setEulerAngles: function() {
            var a = new pc.Quat;
            return function() {
                var b, c, e;
                switch (arguments.length) {
                    case 1:
                        b = arguments[0].x;
                        c = arguments[0].y;
                        e = arguments[0].z;
                        break;
                    case 3:
                        b = arguments[0], c = arguments[1], e = arguments[2]
                }
                this.localRotation.setFromEulerAngles(b, c, e);
                null !== this._parent && (b = this._parent.getRotation(), a.copy(b).invert(), this.localRotation.mul2(a, this.localRotation));
                this.dirtyLocal = !0
            }
        }(),
        addChild: function(a) {
            if (null !== a.getParent()) throw Error("GraphNode is already parented");
            this._children.push(a);
            this._onInsertChild(a)
        },
        addChildAndSaveTransform: function(a) {
            var b = a.getPosition(),
                c = a.getRotation(),
                e = a.getParent();
            e && e.removeChild(a);
            void 0 === this.tmpMat4 && (this.tmpMat4 = new pc.Mat4, this.tmpQuat = new pc.Quat);
            a.setPosition(this.tmpMat4.copy(this.worldTransform).invert().transformPoint(b));
            a.setRotation(this.tmpQuat.copy(this.getRotation()).invert().mul(c));
            this._children.push(a);
            this._onInsertChild(a)
        },
        insertChild: function(a, b) {
            if (null !== a.getParent()) throw Error("GraphNode is already parented");
            this._children.splice(b, 0, a);
            this._onInsertChild(a)
        },
        _onInsertChild: function(a) {
            a._parent = this;
            var b = a._enabled && this.enabled;
            a._enabledInHierarchy !== b && (a._enabledInHierarchy = b, a._notifyHierarchyStateChanged(a, b));
            a.dirtyWorld = !0;
            a._dirtyAabb = !0
        },
        removeChild: function(a) {
            var b, c = this._children.length;
            a._parent = null;
            for (b = 0; b < c; ++b)
                if (this._children[b] === a) { this._children.splice(b, 1); break }
        },
        addLabel: function(a) { this._labels[a] = !0 },
        getLabels: function() { return Object.keys(this._labels) },
        hasLabel: function(a) { return !!this._labels[a] },
        removeLabel: function(a) { delete this._labels[a] },
        findByLabel: function(a, b) {
            var c, e = this._children.length;
            b = b || [];
            this.hasLabel(a) && b.push(this);
            for (c = 0; c < e; ++c) b = this._children[c].findByLabel(a, b);
            return b
        },
        sync: function() {
            this.dirtyLocal && (this.localTransform.setTRS(this.localPosition, this.localRotation, this.localScale), this.dirtyLocal = !1, this._dirtyAabb = this.dirtyWorld = !0);
            if (this.dirtyWorld) {
                null === this._parent ? this.worldTransform.copy(this.localTransform) : this.worldTransform.mul2(this._parent.worldTransform, this.localTransform);
                this.dirtyWorld = !1;
                for (var a, b = 0, c = this._children.length; b < c; b++) a = this._children[b], a.dirtyWorld = !0, a._dirtyAabb = !0
            }
        },
        syncHierarchy: function() { var a = function() { if (this._enabled) { this.sync(); for (var b = this._children, c = 0, e = b.length; c < e; c++) a.call(b[c]) } }; return a }(),
        lookAt: function() {
            var a = new pc.Mat4,
                b = new pc.Vec3,
                c = new pc.Vec3,
                e = new pc.Quat;
            return function() {
                switch (arguments.length) {
                    case 1:
                        b.copy(arguments[0]);
                        c.copy(pc.Vec3.UP);
                        break;
                    case 2:
                        b.copy(arguments[0]);
                        c.copy(arguments[1]);
                        break;
                    case 3:
                        b.set(arguments[0], arguments[1], arguments[2]);
                        c.copy(pc.Vec3.UP);
                        break;
                    case 6:
                        b.set(arguments[0], arguments[1], arguments[2]), c.set(arguments[3], arguments[4], arguments[5])
                }
                a.setLookAt(this.getPosition(), b, c);
                e.setFromMat4(a);
                this.setRotation(e)
            }
        }(),
        translate: function() {
            var a = new pc.Vec3;
            return function() {
                switch (arguments.length) {
                    case 1:
                        a.copy(arguments[0]);
                        break;
                    case 3:
                        a.set(arguments[0], arguments[1], arguments[2])
                }
                a.add(this.getPosition());
                this.setPosition(a)
            }
        }(),
        translateLocal: function() {
            var a = new pc.Vec3;
            return function() {
                switch (arguments.length) {
                    case 1:
                        a.copy(arguments[0]);
                        break;
                    case 3:
                        a.set(arguments[0], arguments[1], arguments[2])
                }
                this.localRotation.transformVector(a, a);
                this.localPosition.add(a);
                this.dirtyLocal = !0
            }
        }(),
        rotate: function() {
            var a = new pc.Quat,
                b = new pc.Quat;
            return function() {
                var c, e, f;
                switch (arguments.length) {
                    case 1:
                        c = arguments[0].x;
                        e = arguments[0].y;
                        f = arguments[0].z;
                        break;
                    case 3:
                        c = arguments[0], e = arguments[1], f = arguments[2]
                }
                a.setFromEulerAngles(c, e, f);
                null === this._parent ? this.localRotation.mul2(a, this.localRotation) : (c = this.getRotation(), e = this._parent.getRotation(), b.copy(e).invert(), a.mul2(b, a), this.localRotation.mul2(a, c));
                this.dirtyLocal = !0
            }
        }(),
        rotateLocal: function() {
            var a = new pc.Quat;
            return function() {
                var b, c, e;
                switch (arguments.length) {
                    case 1:
                        b = arguments[0].x;
                        c = arguments[0].y;
                        e = arguments[0].z;
                        break;
                    case 3:
                        b = arguments[0], c = arguments[1], e = arguments[2]
                }
                a.setFromEulerAngles(b, c, e);
                this.localRotation.mul(a);
                this.dirtyLocal = !0
            }
        }()
    });
    return { GraphNode: d }
}());
pc.extend(pc, function() {
    var d = new pc.Vec3,
        a = new pc.Vec3,
        b = function() {
            this._projection = pc.PROJECTION_PERSPECTIVE;
            this._nearClip = .1;
            this._farClip = 1E4;
            this._fov = 45;
            this._orthoHeight = 10;
            this._aspect = 16 / 9;
            this.frustumCulling = this._horizontalFov = !1;
            this._renderDepthRequests = 0;
            this._projMatDirty = !0;
            this._projMat = new pc.Mat4;
            this._viewMat = new pc.Mat4;
            this._viewProjMat = new pc.Mat4;
            this._rect = { x: 0, y: 0, width: 1, height: 1 };
            this._frustum = new pc.Frustum(this._projMat, this._viewMat);
            this._depthTarget = this._renderTarget = null;
            this._clearOptions = { color: [186 / 255, 186 / 255, 177 / 255, 1], depth: 1, flags: pc.CLEARFLAG_COLOR | pc.CLEARFLAG_DEPTH };
            this._node = null
        };
    b.prototype = {
        clone: function() {
            var a = new pc.Camera;
            a.setProjection(this.getProjection());
            a.setNearClip(this.getNearClip());
            a.setFarClip(this.getFarClip());
            a.setFov(this.getFov());
            a.setAspectRatio(this.getAspectRatio());
            a.setRenderTarget(this.getRenderTarget());
            a.setClearOptions(this.getClearOptions());
            a.frustumCulling = this.frustumCulling;
            return a
        },
        worldToScreen: function(a, b, f, d) {
            void 0 === d && (d = new pc.Vec3);
            var h = this.getProjectionMatrix(),
                m = this._node.getWorldTransform();
            this._viewMat.copy(m).invert();
            this._viewProjMat.mul2(h, this._viewMat);
            this._viewProjMat.transformPoint(a, d);
            a = a.data;
            h = this._viewProjMat.data;
            a = a[0] * h[3] + a[1] * h[7] + a[2] * h[11] + 1 * h[15];
            d.x = .5 * (d.x / a + 1) * b;
            d.y = .5 * (1 - d.y / a) * f;
            return d
        },
        screenToWorld: function(b, e, f, g, h, m) {
            void 0 === m && (m = new pc.Vec3);
            var l = this.getProjectionMatrix(),
                p = this._node.getWorldTransform();
            this._viewMat.copy(p).invert();
            this._viewProjMat.mul2(l, this._viewMat);
            l = this._viewProjMat.clone().invert();
            this._projection === pc.PROJECTION_PERSPECTIVE ? (a.set(b / g * 2 - 1, (h - e) / h * 2 - 1, 1), b = l.transformPoint(a), b.scale(1 / (a.x * l.data[3] + a.y * l.data[7] + a.z * l.data[11] + l.data[15])), f /= this._farClip, m.lerp(this._node.getPosition(), b, f)) : (d.set(b / g * 2 - 1, (h - e) / h * 2 - 1, (this._farClip - f) / (this._farClip - this._nearClip) * 2 - 1), l.transformPoint(d, m));
            return m
        },
        getAspectRatio: function() { return this._aspect },
        getClearOptions: function() { return this._clearOptions },
        getFarClip: function() { return this._farClip },
        getFov: function() { return this._fov },
        getFrustum: function() { return this._frustum },
        getNearClip: function() { return this._nearClip },
        getOrthoHeight: function() { return this._orthoHeight },
        getProjection: function() { return this._projection },
        getProjectionMatrix: function() {
            if (this._projMatDirty) {
                if (this._projection === pc.PROJECTION_PERSPECTIVE) this._projMat.setPerspective(this._fov, this._aspect, this._nearClip, this._farClip, this._horizontalFov);
                else {
                    var a = this._orthoHeight,
                        b = a * this._aspect;
                    this._projMat.setOrtho(-b, b, -a, a, this._nearClip, this._farClip)
                }
                this._projMatDirty = !1
            }
            return this._projMat
        },
        getRect: function() { return this._rect },
        getRenderTarget: function() { return this._renderTarget },
        setAspectRatio: function(a) {
            this._aspect = a;
            this._projMatDirty = !0
        },
        setClearOptions: function(a) { this._clearOptions = a },
        setFarClip: function(a) {
            this._farClip = a;
            this._projMatDirty = !0
        },
        setFov: function(a) {
            this._fov = a;
            this._projMatDirty = !0
        },
        setNearClip: function(a) {
            this._nearClip = a;
            this._projMatDirty = !0
        },
        setOrthoHeight: function(a) {
            this._orthoHeight = a;
            this._projMatDirty = !0
        },
        setHorizontalFov: function(a) {
            this._horizontalFov = a;
            this._projMatDirty = !0
        },
        setProjection: function(a) {
            this._projection = a;
            this._projMatDirty = !0
        },
        setRect: function(a, b, f, d) {
            this._rect.x = a;
            this._rect.y = b;
            this._rect.width = f;
            this._rect.height = d
        },
        setRenderTarget: function(a) { this._renderTarget = a },
        requestDepthMap: function() { this._renderDepthRequests++ },
        releaseDepthMap: function() { this._renderDepthRequests-- }
    };
    return { Camera: b }
}());
pc.extend(pc, function() {
    var d = new pc.Vec3,
        a = new pc.Vec3,
        b = new pc.Vec3,
        c = function() {
            this._type = pc.LIGHTTYPE_DIRECTIONAL;
            this._color = new pc.Color(.8, .8, .8);
            this._intensity = 1;
            this._enabled = this._castShadows = !1;
            this._attenuationEnd = this._attenuationStart = 10;
            this._falloffMode = 0;
            this._shadowType = pc.SHADOW_DEPTH;
            this._vsmBlurSize = 11;
            this._vsmBlurMode = pc.BLUR_GAUSSIAN;
            this._vsmBias = .0025;
            this.mask = 1;
            this._innerConeAngle = 40;
            this._outerConeAngle = 45;
            this._finalColor = new pc.Vec3(.8, .8, .8);
            this._linearFinalColor = new pc.Vec3;
            this._position = new pc.Vec3(0, 0, 0);
            this._direction = new pc.Vec3(0, 0, 0);
            this._innerConeAngleCos = Math.cos(this._innerConeAngle * Math.PI / 180);
            this._outerConeAngleCos = Math.cos(this._outerConeAngle * Math.PI / 180);
            this._shadowCamera = null;
            this._shadowMatrix = new pc.Mat4;
            this._shadowDistance = 40;
            this._shadowResolution = 1024;
            this._shadowBias = -5E-4;
            this._normalOffsetBias = 0;
            this.shadowUpdateMode = pc.SHADOWUPDATE_REALTIME;
            this._node = this._scene = null;
            this._rendererParams = []
        };
    c.prototype = {
        clone: function() {
            var a = new pc.Light;
            a.setType(this.getType());
            a.setColor(this.getColor());
            a.setIntensity(this.getIntensity());
            a.setCastShadows(this.getCastShadows());
            a.setEnabled(this.getEnabled());
            a.setAttenuationStart(this.getAttenuationStart());
            a.setAttenuationEnd(this.getAttenuationEnd());
            a.setFalloffMode(this.getFalloffMode());
            a.setShadowType(this.getShadowType());
            a.setVsmBlurSize(this.getVsmBlurSize());
            a.setVsmBlurMode(this.getVsmBlurMode());
            a.setVsmBias(this.getVsmBias());
            a.shadowUpdateMode = this.shadowUpdateMode;
            a.mask = this.mask;
            a.setInnerConeAngle(this.getInnerConeAngle());
            a.setOuterConeAngle(this.getOuterConeAngle());
            a.setShadowBias(this.getShadowBias());
            a.setNormalOffsetBias(this.getNormalOffsetBias());
            a.setShadowResolution(this.getShadowResolution());
            a.setShadowDistance(this.getShadowDistance());
            return a
        },
        getAttenuationEnd: function() { return this._attenuationEnd },
        getAttenuationStart: function() { return this._attenuationStart },
        getFalloffMode: function() { return this._falloffMode },
        getShadowType: function() { return this._shadowType },
        getVsmBlurSize: function() { return this._vsmBlurSize },
        getVsmBlurMode: function() { return this._vsmBlurMode },
        getVsmBias: function() { return this._vsmBias },
        getCastShadows: function() { return this._castShadows && this.mask !== pc.MASK_LIGHTMAP && 0 !== this.mask },
        getColor: function() { return this._color },
        getEnabled: function() { return this._enabled },
        getInnerConeAngle: function() { return this._innerConeAngle },
        getIntensity: function() { return this._intensity },
        getOuterConeAngle: function() { return this._outerConeAngle },
        getShadowBias: function() { return this._shadowBias },
        getNormalOffsetBias: function() { return this._normalOffsetBias },
        getShadowDistance: function() { return this._shadowDistance },
        getShadowResolution: function() { return this._shadowResolution },
        getType: function() { return this._type },
        setAttenuationEnd: function(a) { this._attenuationEnd = a },
        setAttenuationStart: function(a) { this._attenuationStart = a },
        setFalloffMode: function(a) {
            this._falloffMode = a;
            null !== this._scene && (this._scene.updateShaders = !0)
        },
        setShadowType: function(a) {
            var b = pc.Application.getApplication().graphicsDevice;
            a > b.maxShadowType && (a = b.maxShadowType);
            this._shadowType = a;
            this._destroyShadowMap();
            null !== this._scene && (this._scene.updateShaders = !0)
        },
        setVsmBlurSize: function(a) {
            0 === a % 2 && a++;
            this._vsmBlurSize = a
        },
        setVsmBlurMode: function(a) { this._vsmBlurMode = a },
        setVsmBias: function(a) { this._vsmBias = a },
        setMask: function(a) {
            this.mask = a;
            null !== this._scene && (this._scene.updateShaders = !0)
        },
        getBoundingSphere: function(c) {
            if (this._type === pc.LIGHTTYPE_SPOT) {
                var f = this.getAttenuationEnd(),
                    g = this.getOuterConeAngle(),
                    h = Math.cos(g * pc.math.DEG_TO_RAD);
                d.copy(this._node.up);
                d.scale(.5 * -f * h);
                d.add(this._node.getPosition());
                c.center = d;
                a.copy(this._node.up);
                a.scale(-f);
                b.copy(this._node.right);
                b.scale(Math.sin(g * pc.math.DEG_TO_RAD) * f);
                a.add(b);
                c.radius = .5 * a.length()
            } else this._type === pc.LIGHTTYPE_POINT && (c.center = this._node.getPosition(), c.radius = this.getAttenuationEnd())
        },
        setCastShadows: function(a) {
            this._castShadows = a;
            null !== this._scene && (this._scene.updateShaders = !0)
        },
        setColor: function() {
            var a, b, c;
            1 === arguments.length ? (a = arguments[0].r, b = arguments[0].g, c = arguments[0].b) : 3 === arguments.length && (a = arguments[0], b = arguments[1], c = arguments[2]);
            this._color.set(a, b, c);
            var d = this._intensity;
            this._finalColor.set(a * d, b * d, c * d);
            for (a = 0; 3 > a; a++) this._linearFinalColor.data[a] = 1 <= d ? Math.pow(this._finalColor.data[a] / d, 2.2) * d : Math.pow(this._finalColor.data[a], 2.2)
        },
        setEnabled: function(a) { this._enabled !== a && (this._enabled = a, null !== this._scene && (this._scene.updateShaders = !0)) },
        setInnerConeAngle: function(a) {
            this._innerConeAngle = a;
            this._innerConeAngleCos = Math.cos(a * Math.PI / 180)
        },
        setIntensity: function(a) {
            this._intensity = a;
            var b = this._color;
            a = this._intensity;
            this._finalColor.set(b.r * a, b.g * a, b.b * a);
            for (b = 0; 3 > b; b++) this._linearFinalColor.data[b] = 1 <= a ? Math.pow(this._finalColor.data[b] / a, 2.2) * a : Math.pow(this._finalColor.data[b], 2.2)
        },
        setOuterConeAngle: function(a) {
            this._outerConeAngle = a;
            this._outerConeAngleCos = Math.cos(a * Math.PI / 180)
        },
        setShadowBias: function(a) { this._shadowBias = a },
        setNormalOffsetBias: function(a) {
            if (!this._normalOffsetBias && a || this._normalOffsetBias && !a) this._scene.updateShaders = !0;
            this._normalOffsetBias = a
        },
        setShadowDistance: function(a) { this._shadowDistance = a },
        setShadowResolution: function(a) {
            var b = pc.Application.getApplication().graphicsDevice;
            this._shadowResolution = a = this._type === pc.LIGHTTYPE_POINT ? Math.min(a, b.maxCubeMapSize) : Math.min(a, b.maxTextureSize)
        },
        setType: function(a) {
            this._type = a;
            this._destroyShadowMap()
        },
        _destroyShadowMap: function() {
            if (this._shadowCamera) {
                var a = this._shadowCamera._renderTarget,
                    b;
                if (a)
                    if (a.length)
                        for (b = 0; b < a.length; b++) a[b].colorBuffer && a[b].colorBuffer.destroy(), a[b].destroy();
                    else a.colorBuffer && a.colorBuffer.destroy(), a.destroy();
                this._shadowCubeMap = this._shadowCamera = this._shadowCamera._renderTarget = null;
                this.shadowUpdateMode === pc.SHADOWUPDATE_NONE && (this.shadowUpdateMode = pc.SHADOWUPDATE_THISFRAME)
            }
        },
        updateShadow: function() { this.shadowUpdateMode !== pc.SHADOWUPDATE_REALTIME && (this.shadowUpdateMode = pc.SHADOWUPDATE_THISFRAME) }
    };
    return { Light: c }
}());
pc.extend(pc, function() {
    var d = 0,
        a = function() {
            this.name = "Untitled";
            this.id = d++;
            this.shader = null;
            this.variants = {};
            this.parameters = {};
            this.alphaTest = 0;
            this.blend = !1;
            this.blendSrc = pc.BLENDMODE_ONE;
            this.blendDst = pc.BLENDMODE_ZERO;
            this.blendEquation = pc.BLENDEQUATION_ADD;
            this.cull = pc.CULLFACE_BACK;
            this.alphaWrite = this.blueWrite = this.greenWrite = this.redWrite = this.depthWrite = this.depthTest = !0;
            this.meshInstances = []
        };
    Object.defineProperty(a.prototype, "blendType", {
        get: function() { return this.blend || this.blendSrc !== pc.BLENDMODE_ONE || this.blendDst !== pc.BLENDMODE_ZERO || this.blendEquation !== pc.BLENDEQUATION_ADD ? this.blend && this.blendSrc === pc.BLENDMODE_SRC_ALPHA && this.blendDst === pc.BLENDMODE_ONE_MINUS_SRC_ALPHA && this.blendEquation === pc.BLENDEQUATION_ADD ? pc.BLEND_NORMAL : this.blend && this.blendSrc === pc.BLENDMODE_ONE && this.blendDst === pc.BLENDMODE_ONE && this.blendEquation === pc.BLENDEQUATION_ADD ? pc.BLEND_ADDITIVE : this.blend && this.blendSrc === pc.BLENDMODE_SRC_ALPHA && this.blendDst === pc.BLENDMODE_ONE && this.blendEquation === pc.BLENDEQUATION_ADD ? pc.BLEND_ADDITIVEALPHA : this.blend && this.blendSrc === pc.BLENDMODE_DST_COLOR && this.blendDst === pc.BLENDMODE_SRC_COLOR && this.blendEquation === pc.BLENDEQUATION_ADD ? pc.BLEND_MULTIPLICATIVE2X : this.blend && this.blendSrc === pc.BLENDMODE_ONE_MINUS_DST_COLOR && this.blendDst === pc.BLENDMODE_ONE && this.blendEquation === pc.BLENDEQUATION_ADD ? pc.BLEND_SCREEN : this.blend && this.blendSrc === pc.BLENDMODE_DST_COLOR && this.blendDst === pc.BLENDMODE_ZERO && this.blendEquation === pc.BLENDEQUATION_ADD ? pc.BLEND_MULTIPLICATIVE : this.blend && this.blendSrc === pc.BLENDMODE_ONE && this.blendDst === pc.BLENDMODE_ONE_MINUS_SRC_ALPHA && this.blendEquation === pc.BLENDEQUATION_ADD ? pc.BLEND_PREMULTIPLIED : pc.BLEND_NORMAL : pc.BLEND_NONE },
        set: function(a) {
            switch (a) {
                case pc.BLEND_NONE:
                    this.blend = !1;
                    this.blendSrc = pc.BLENDMODE_ONE;
                    this.blendDst = pc.BLENDMODE_ZERO;
                    this.blendEquation = pc.BLENDEQUATION_ADD;
                    break;
                case pc.BLEND_NORMAL:
                    this.blend = !0;
                    this.blendSrc = pc.BLENDMODE_SRC_ALPHA;
                    this.blendDst = pc.BLENDMODE_ONE_MINUS_SRC_ALPHA;
                    this.blendEquation = pc.BLENDEQUATION_ADD;
                    break;
                case pc.BLEND_PREMULTIPLIED:
                    this.blend = !0;
                    this.blendSrc = pc.BLENDMODE_ONE;
                    this.blendDst = pc.BLENDMODE_ONE_MINUS_SRC_ALPHA;
                    this.blendEquation = pc.BLENDEQUATION_ADD;
                    break;
                case pc.BLEND_ADDITIVE:
                    this.blend = !0;
                    this.blendDst = this.blendSrc = pc.BLENDMODE_ONE;
                    this.blendEquation = pc.BLENDEQUATION_ADD;
                    break;
                case pc.BLEND_ADDITIVEALPHA:
                    this.blend = !0;
                    this.blendSrc = pc.BLENDMODE_SRC_ALPHA;
                    this.blendDst = pc.BLENDMODE_ONE;
                    this.blendEquation = pc.BLENDEQUATION_ADD;
                    break;
                case pc.BLEND_MULTIPLICATIVE2X:
                    this.blend = !0;
                    this.blendSrc = pc.BLENDMODE_DST_COLOR;
                    this.blendDst = pc.BLENDMODE_SRC_COLOR;
                    this.blendEquation = pc.BLENDEQUATION_ADD;
                    break;
                case pc.BLEND_SCREEN:
                    this.blend = !0;
                    this.blendSrc = pc.BLENDMODE_ONE_MINUS_DST_COLOR;
                    this.blendDst = pc.BLENDMODE_ONE;
                    this.blendEquation = pc.BLENDEQUATION_ADD;
                    break;
                case pc.BLEND_MULTIPLICATIVE:
                    this.blend = !0, this.blendSrc = pc.BLENDMODE_DST_COLOR, this.blendDst = pc.BLENDMODE_ZERO, this.blendEquation = pc.BLENDEQUATION_ADD
            }
            this._updateMeshInstanceKeys()
        }
    });
    a.prototype._cloneInternal = function(a) {
        a.name = this.name;
        a.id = d++;
        a.shader = null;
        a.variants = {};
        a.parameters = {};
        a.alphaTest = this.alphaTest;
        a.blend = this.blend;
        a.blendSrc = this.blendSrc;
        a.blendDst = this.blendDst;
        a.blendEquation = this.blendEquation;
        a.cull = this.cull;
        a.depthTest = this.depthTest;
        a.depthWrite = this.depthWrite;
        a.redWrite = this.redWrite;
        a.greenWrite = this.greenWrite;
        a.blueWrite = this.blueWrite;
        a.alphaWrite = this.alphaWrite;
        a.meshInstances = []
    };
    a.prototype.clone = function() {
        var a = new pc.Material;
        this._cloneInternal(a);
        return a
    };
    a.prototype._updateMeshInstanceKeys = function() { var a, c = this.meshInstances; for (a = 0; a < c.length; a++) c[a].updateKey() };
    a.prototype.updateShader = function(a, c, e) {};
    a.prototype.clearParameters = function() { this.parameters = {} };
    a.prototype.getParameters = function() { return this.parameters };
    a.prototype.clearVariants = function() { this.variants = {}; for (var a = 0; a < this.meshInstances.length; a++) this.meshInstances[a]._shader = null };
    a.prototype.getParameter = function(a) { return this.parameters[a] };
    a.prototype.setParameter = function(a, c) {
        var e;
        if (void 0 === c) {
            if (a.length) { for (e = 0; e < a.length; e++) this.setParameter(a[e]); return } e = a.name;
            c = a.value
        } else e = a;
        var f = this.parameters[e];
        f ? f.data = c : this.parameters[e] = { scopeId: null, data: c }
    };
    a.prototype.deleteParameter = function(a) { this.parameters[a] && delete this.parameters[a] };
    a.prototype.setParameters = function() {
        for (var a in this.parameters) {
            var c = this.parameters[a];
            c.scopeId.setValue(c.data)
        }
    };
    a.prototype.update = function() { throw Error("Not Implemented in base class"); };
    a.prototype.init = function(a) { throw Error("Not Implemented in base class"); };
    a.prototype.getName = function() { return this.name };
    a.prototype.setName = function(a) { this.name = a };
    a.prototype.getShader = function() { return this.shader };
    a.prototype.setShader = function(a) { this.shader = a };
    return { Material: a }
}());
pc.extend(pc, function() {
    var d;
    d = pc.inherits(function() {
        this.color = new pc.Color(1, 1, 1, 1);
        this.colorMap = null;
        this.vertexColors = !1;
        this.update()
    }, pc.Material);
    pc.extend(d.prototype, {
        clone: function() {
            var a = new pc.BasicMaterial;
            pc.Material.prototype._cloneInternal.call(this, a);
            a.color.copy(this.color);
            a.colorMap = this.colorMap;
            a.vertexColors = this.vertexColors;
            a.update();
            return a
        },
        update: function() {
            this.clearParameters();
            this.setParameter("uColor", this.color.data);
            this.colorMap && this.setParameter("texture_diffuseMap", this.colorMap)
        },
        updateShader: function(a) {
            var b = { skin: !!this.meshInstances[0].skinInstance, vertexColors: this.vertexColors, diffuseMap: this.colorMap };
            this.shader = a.getProgramLibrary().getProgram("basic", b)
        }
    });
    return { BasicMaterial: d }
}());
pc.extend(pc, function() {
    var d;
    d = pc.inherits(function() {}, pc.Material);
    pc.extend(d.prototype, {
        clone: function() {
            var a = new pc.DepthMaterial;
            pc.Material.prototype._cloneInternal.call(this, a);
            a.update();
            return a
        },
        update: function() {},
        updateShader: function(a) {
            var b = { skin: !!this.meshInstances[0].skinInstance };
            this.shader = a.getProgramLibrary().getProgram("depth", b)
        }
    });
    return { DepthMaterial: d }
}());
pc.extend(pc, function() {
    new pc.Vec3;
    new pc.Vec3;
    var d = function() {
            this.reset();
            this.update()
        },
        a = [],
        b = [],
        c = [],
        e = [],
        f = {},
        g = function(b, e, g, h) {
            var l = "_" + e + "Map",
                k = l + "Tiling",
                m = l + "Offset",
                p = l.substring(1) + "Transform",
                q = l + "Uv",
                A = l + "Channel",
                B = l + "VertexColor";
            b[l] = null;
            b[k] = new pc.Vec2(1, 1);
            b[m] = new pc.Vec2(0, 0);
            b[p] = null;
            b[q] = g;
            0 < h && (b[A] = 1 < h ? "rgb" : "g");
            b[B] = !1;
            pc._matTex2D || (pc._matTex2D = []);
            pc._matTex2D[e] = h;
            Object.defineProperty(d.prototype, l.substring(1), {
                get: function() { return this[l] },
                set: function(a) {
                    var b = this[l];
                    if (!b && a || b && !a) this.dirtyShader = !0;
                    b && a && (b.rgbm !== a.rgbm || b.fixCubemapSeams !== a.fixCubemapSeams || b.format !== a.format) && (this.dirtyShader = !0);
                    this[l] = a
                }
            });
            b = k.substring(1);
            e = m.substring(1);
            Object.defineProperty(d.prototype, b, {
                get: function() { this.dirtyShader = !0; return this[k] },
                set: function(a) {
                    this.dirtyShader = !0;
                    this[k] = a
                }
            });
            f[b] = function(a, b, c) { a = a._updateMapTransform(c ? a[p] : null, b, a[m]); return { name: "texture_" + p, value: a.data } };
            Object.defineProperty(d.prototype, e, {
                get: function() { this.dirtyShader = !0; return this[m] },
                set: function(a) {
                    this.dirtyShader = !0;
                    this[m] = a
                }
            });
            f[e] = function(a, b, c) { a = a._updateMapTransform(c ? a[p] : null, a[k], b); return { name: "texture_" + p, value: a.data } };
            Object.defineProperty(d.prototype, q.substring(1), {
                get: function() { return this[q] },
                set: function(a) {
                    this.dirtyShader = !0;
                    this[q] = a
                }
            });
            Object.defineProperty(d.prototype, A.substring(1), {
                get: function() { return this[A] },
                set: function(a) {
                    this.dirtyShader = !0;
                    this[A] = a
                }
            });
            Object.defineProperty(d.prototype, B.substring(1), {
                get: function() { return this[B] },
                set: function(a) {
                    this.dirtyShader = !0;
                    this[B] = a
                }
            });
            a.push(l.substring(1));
            a.push(k.substring(1));
            a.push(m.substring(1));
            a.push(q.substring(1));
            a.push(A.substring(1));
            a.push(B.substring(1));
            c.push(p)
        },
        h = [],
        m = function(b, c, g, l) {
            var k = "_" + c,
                m = c + "Uniform",
                p = c + "Intensity",
                q = "_" + p;
            b[k] = g;
            b[m] = new Float32Array(3);
            Object.defineProperty(d.prototype, c, {
                get: function() { this.dirtyShader = this.dirtyColor = !0; return this[k] },
                set: function(a) {
                    var b = this[k],
                        c = 0 === a.r && 0 === a.g && 0 === a.b || 1 === a.r && 1 === a.g && 1 === a.b;
                    if (0 === b.r && 0 === b.g && 0 === b.b || 1 === b.r && 1 === b.g && 1 === b.b || c) this.dirtyShader = !0;
                    this.dirtyColor = !0;
                    this[k] = a
                }
            });
            a.push(c);
            e.push(m);
            h.push(c);
            f[c] = function(a, b, e) {
                e = e ? a[m] : new Float32Array(3);
                var f = !1;
                a.useGammaTonemap && (f = (a._scene || pc.Application.getApplication().scene).gammaCorrection);
                for (var d = 0; 3 > d; d++) e[d] = f ? Math.pow(b.data[d], 2.2) : b.data[d], l && (e[d] *= a[q]);
                return { name: "material_" + c, value: e }
            };
            l && (b[q] = 1, Object.defineProperty(d.prototype, p, {
                get: function() { return this[q] },
                set: function(a) {
                    var b = this[q];
                    if (0 === b || 1 === b || 0 === a || 1 === a) this.dirtyShader = !0;
                    this.dirtyColor = !0;
                    this[q] = a
                }
            }), a.push(p), f[p] = function(a, b, e) {
                b = e ? a[m] : new Float32Array(3);
                e = !1;
                a.useGammaTonemap && (e = (a._scene || pc.Application.getApplication().scene).gammaCorrection);
                for (var f = 0; 3 > f; f++) b[f] = e ? Math.pow(a[k].data[f], 2.2) : a[k].data[f], b[f] *= a[q];
                return { name: "material_" + c, value: b }
            })
        },
        l = function(b, c, e, g) {
            var h = "_" + c;
            b[h] = e;
            Object.defineProperty(d.prototype, c, {
                get: function() { return this[h] },
                set: function(a) {
                    var b = this[h];
                    if (0 === b || 1 === b || 0 === a || 1 === a) this.dirtyShader = !0;
                    this[h] = a
                }
            });
            a.push(c);
            f[c] = void 0 !== g ? g : function(a, b, e) { return { name: "material_" + c, value: b } }
        },
        p = function(b, c, e) {
            var g = "_" + c;
            b[g] = null;
            Object.defineProperty(d.prototype, c, {
                get: function() { return this[g] },
                set: function(a) {
                    var b = this[g];
                    if (!b && a || b && !a) this.dirtyShader = !0;
                    this[g] = a
                }
            });
            a.push(c);
            f[c] = e
        },
        k = function(b) {
            this._chunks = null;
            Object.defineProperty(d.prototype, "chunks", {
                get: function() { this.dirtyShader = !0; return this._chunks },
                set: function(a) {
                    this.dirtyShader = !0;
                    this._chunks = a
                }
            });
            a.push("chunks")
        },
        q = function(b, c, e) {
            var f = "_" + c;
            b[f] = e;
            Object.defineProperty(d.prototype, c, {
                get: function() { return this[f] },
                set: function(a) {
                    this.dirtyShader = !0;
                    this[f] = a
                }
            });
            a.push(c)
        },
        d = pc.inherits(d, pc.Material);
    pc.extend(d.prototype, {
        reset: function() {
            this.blendType = pc.BLEND_NONE;
            var f;
            for (f = 0; f < a.length; f++) {
                var d = b[f];
                this[a[f]] = d ? d.clone ? d.clone() : d : d
            }
            for (f = 0; f < c.length; f++) this[c[f]] = null;
            for (f = 0; f < e.length; f++) this[e[f]] = new Float32Array(3);
            this._chunks = {};
            this._chunks.copy = function(a) { for (var b in a) a.hasOwnProperty(b) && "copy" !== b && (this[b] = a[b]) };
            this.cubeMapMinUniform = new Float32Array(3);
            this.cubeMapMaxUniform = new Float32Array(3)
        },
        clone: function() {
            var b = new pc.StandardMaterial;
            pc.Material.prototype._cloneInternal.call(this, b);
            for (var c, e = 0; e < a.length; e++) c = a[e], void 0 !== this[c] && (this[c] && this[c].copy ? b[c] ? b[c].copy(this[c]) : b[c] = this[c].clone() : b[c] = this[c]);
            b.update();
            return b
        },
        init: function(a) {
            this.reset();
            this.name = a.name;
            for (var b = 0; b < a.parameters.length; b++) {
                var c = a.parameters[b];
                if ("vec3" === c.type) this[c.name] = new pc.Color(c.data[0], c.data[1], c.data[2]);
                else if ("vec2" === c.type) this[c.name] = new pc.Vec2(c.data[0], c.data[1]);
                else if ("texture" === c.type) {
                    var e = c.name;
                    c = c.data ? c.data instanceof pc.Texture ? c.data : null : null;
                    this[e] = c
                } else "cubemap" === c.type ? (e = c.name, c = c.data && c.data instanceof pc.Texture ? c.data : null, this[e] = c) : "bumpMapFactor" === c.name ? this.bumpiness = c.data : this[c.name] = c.data
            }
            this.update()
        },
        _updateMapTransform: function(a, b, c) {
            a = a || new pc.Vec4;
            a.set(b.x, b.y, c.x, c.y);
            return 1 === a.x && 1 === a.y && 0 === a.z && 0 === a.w ? null : a
        },
        _collectLights: function(a, b, c, e) { for (var f = 0; f < b.length; f++) b[f].getEnabled() && b[f].mask & e && b[f].getType() == a && c.push(b[f]) },
        _setParameter: function(a, b) {
            this.setParameter(a, b);
            this._propsSet.push(a)
        },
        _clearParameters: function() {
            for (var a = this._propsSet, b = 0; b < a.length; b++) delete this.parameters[a[b]];
            this._propsSet = []
        },
        _updateMap: function(a) {
            a += "Map";
            if (this[a]) {
                this._setParameter("texture_" + a, this[a]);
                var b = a + "Transform";
                this[b] = this._updateMapTransform(this[b], this[a + "Tiling"], this[a + "Offset"]);
                this[b] && this._setParameter("texture_" + b, this[b].data)
            }
        },
        getUniform: function(a, b, c) { return (a = f[a]) ? a(this, b, c) : null },
        update: function() {
            this._clearParameters();
            this._setParameter("material_ambient", this.ambientUniform);
            this.diffuseMap && !this.diffuseMapTint || this._setParameter("material_diffuse", this.diffuseUniform);
            this.useMetalness ? (!this.metalnessMap || 1 > this.metalness) && this._setParameter("material_metalness", this.metalness) : this.specularMap && !this.specularMapTint || this._setParameter("material_specular", this.specularUniform);
            this._setParameter(this.getUniform("shininess", this.shininess, !0));
            this.emissiveMap && !this.emissiveMapTint || this._setParameter("material_emissive", this.emissiveUniform);
            0 < this.refraction && (this._setParameter("material_refraction", this.refraction), this._setParameter("material_refractionIndex", this.refractionIndex));
            this._setParameter("material_opacity", this.opacity);
            this.occludeSpecular && this._setParameter("material_occludeSpecularIntensity", this.occludeSpecularIntensity);
            this.cubeMapProjection === pc.CUBEPROJ_BOX && this._setParameter(this.getUniform("cubeMapProjectionBox", this.cubeMapProjectionBox, !0));
            for (var a in pc._matTex2D) this._updateMap(a);
            this.ambientSH && this._setParameter("ambientSH[0]", this.ambientSH);
            this.normalMap && this._setParameter("material_bumpiness", this.bumpiness);
            this.heightMap && this._setParameter(this.getUniform("heightMapFactor", this.heightMapFactor, !0));
            this.cubeMap && this._setParameter("texture_cubeMap", this.cubeMap);
            this.prefilteredCubeMap128 && this._setParameter("texture_prefilteredCubeMap128", this.prefilteredCubeMap128);
            this.prefilteredCubeMap64 && this._setParameter("texture_prefilteredCubeMap64", this.prefilteredCubeMap64);
            this.prefilteredCubeMap32 && this._setParameter("texture_prefilteredCubeMap32", this.prefilteredCubeMap32);
            this.prefilteredCubeMap16 && this._setParameter("texture_prefilteredCubeMap16", this.prefilteredCubeMap16);
            this.prefilteredCubeMap8 && this._setParameter("texture_prefilteredCubeMap8", this.prefilteredCubeMap8);
            this.prefilteredCubeMap4 && this._setParameter("texture_prefilteredCubeMap4", this.prefilteredCubeMap4);
            this.sphereMap && this._setParameter("texture_sphereMap", this.sphereMap);
            this.dpAtlas && this._setParameter("texture_sphereMap", this.dpAtlas);
            this._setParameter("material_reflectivity", this.reflectivity);
            if (this.dirtyShader || !this._scene) this.shader = null, this.clearVariants();
            this._processColor()
        },
        _processColor: function() {
            if (this.dirtyColor && (this._scene || !this.useGammaTonemap)) {
                var a = !1;
                this.useGammaTonemap && (a = this._scene.gammaCorrection);
                for (var b = 0; b < h.length; b++)
                    for (var c = this["_" + h[b]], e = this[h[b] + "Uniform"], f = 0; 3 > f; f++) e[f] = a ? Math.pow(c.data[f], 2.2) : c.data[f];
                for (f = 0; 3 > f; f++) this.emissiveUniform[f] *= this.emissiveIntensity;
                this.dirtyColor = !1
            }
        },
        _getMapTransformID: function(a, b) {
            if (!a) return 0;
            this._mapXForms[b] || (this._mapXForms[b] = []);
            var c, e, f;
            for (c = 0; c < this._mapXForms[b].length; c++) {
                f = !0;
                for (e = 0; e < a.data.length; e++)
                    if (this._mapXForms[b][c][e] != a.data[e]) { f = !1; break } if (f) return c + 1
            }
            c = this._mapXForms[b].length;
            this._mapXForms[b][c] = [];
            for (e = 0; e < a.data.length; e++) this._mapXForms[b][c][e] = a.data[e];
            return c + 1
        },
        updateShader: function(a, b, c, e) {
            this._scene || (this._scene = b, this._processColor());
            e = b._lights;
            this._mapXForms = [];
            var f = a.useTexCubeLod,
                d = !a.extTextureLod,
                g, h, l, k, m, p;
            this.useSkybox && (g = b.skyboxPrefiltered128, h = b.skyboxPrefiltered64, l = b.skyboxPrefiltered32, k = b.skyboxPrefiltered16, m = b.skyboxPrefiltered8, p = b.skyboxPrefiltered4);
            var q = this.prefilteredCubeMap128 || g;
            h = this.prefilteredCubeMap64 || h;
            l = this.prefilteredCubeMap32 || l;
            k = this.prefilteredCubeMap16 || k;
            m = this.prefilteredCubeMap8 || m;
            p = this.prefilteredCubeMap4 || p;
            if (q) {
                var O = q && h && l && k && m && p;
                d && O ? (q.dpAtlas || (q.dpAtlas = pc.generateDpAtlas(a, [q, h, l, k, m, p]), q.sh = pc.shFromCubemap(k)), this.dpAtlas = q.dpAtlas, this.ambientSH = q.sh, this._setParameter("ambientSH[0]", this.ambientSH), this._setParameter("texture_sphereMap", this.dpAtlas)) : f ? 6 > q._levels.length ? O ? this._setParameter("texture_prefilteredCubeMap128", q) : console.log("Can't use prefiltered cubemap: " + O + ", " + f + ", " + q._levels) : this._setParameter("texture_prefilteredCubeMap128", q) : O ? (this._setParameter("texture_prefilteredCubeMap128", q), this._setParameter("texture_prefilteredCubeMap64", h), this._setParameter("texture_prefilteredCubeMap32", l), this._setParameter("texture_prefilteredCubeMap16", k), this._setParameter("texture_prefilteredCubeMap8", m), this._setParameter("texture_prefilteredCubeMap4", p)) : console.log("Can't use prefiltered cubemap: " + O + ", " + f + ", " + q._levels)
            }
            d = !1;
            (p = (p = (this.useMetalness ? !0 : !!this.specularMap) || !!this.sphereMap || !!this.cubeMap || !!this.dpAtlas) || (this.useMetalness ? !0 : !(0 === this.specular.r && 0 === this.specular.g && 0 === this.specular.b))) && this.specularMapTint && !this.useMetalness && (d = 1 !== this.specular.r || 1 !== this.specular.g || 1 !== this.specular.b);
            h = (q ? q.rgbm : !1) || (this.cubeMap ? this.cubeMap.rgbm : !1) || (this.sphereMap ? this.sphereMap.rgbm : !1) || (this.dpAtlas ? this.dpAtlas.rgbm : !1);
            b = { fog: this.useFog ? b.fog : "none", gamma: this.useGammaTonemap ? b.gammaCorrection : pc.GAMMA_NONE, toneMap: this.useGammaTonemap ? b.toneMapping : -1, blendMapsWithColors: !0, modulateAmbient: this.ambientTint, diffuseTint: (1 != this.diffuse.r || 1 != this.diffuse.g || 1 != this.diffuse.b) && this.diffuseMapTint, specularTint: d, metalnessTint: this.useMetalness && 1 > this.metalness, glossTint: !0, emissiveTint: (1 != this.emissive.r || 1 != this.emissive.g || 1 != this.emissive.b || 1 != this.emissiveIntensity) && this.emissiveMapTint, opacityTint: 1 != this.opacity && this.blendType !== pc.BLEND_NONE, alphaTest: 0 < this.alphaTest, needsNormalFloat: this.normalizeNormalMap, sphereMap: !!this.sphereMap, cubeMap: !!this.cubeMap, dpAtlas: !!this.dpAtlas, ambientSH: !!this.ambientSH, useSpecular: p, rgbmReflection: h, hdrReflection: (q ? q.rgbm || q.format === pc.PIXELFORMAT_RGBA32F : !1) || (this.cubeMap ? this.cubeMap.rgbm || this.cubeMap.format === pc.PIXELFORMAT_RGBA32F : !1) || (this.sphereMap ? this.sphereMap.rgbm || this.sphereMap.format === pc.PIXELFORMAT_RGBA32F : !1) || (this.dpAtlas ? this.dpAtlas.rgbm || this.dpAtlas.format === pc.PIXELFORMAT_RGBA32F : !1), fixSeams: q ? q.fixCubemapSeams : this.cubeMap ? this.cubeMap.fixCubemapSeams : !1, prefilteredCubemap: !!q, emissiveFormat: this.emissiveMap ? this.emissiveMap.rgbm ? 1 : this.emissiveMap.format === pc.PIXELFORMAT_RGBA32F ? 2 : 0 : null, lightMapFormat: this.lightMap ? this.lightMap.rgbm ? 1 : this.lightMap.format === pc.PIXELFORMAT_RGBA32F ? 2 : 0 : null, useRgbm: h || (this.emissiveMap ? this.emissiveMap.rgbm : 0) || (this.lightMap ? this.lightMap.rgbm : 0), specularAA: this.specularAntialias, conserveEnergy: this.conserveEnergy, occludeSpecular: this.occludeSpecular, occludeSpecularFloat: 1 !== this.occludeSpecularIntensity, occludeDirect: this.occludeDirect, shadingModel: this.shadingModel, fresnelModel: this.fresnelModel, packedNormal: this.normalMap ? this.normalMap.format === pc.PIXELFORMAT_DXT5 : !1, shadowSampleType: this.shadowSampleType, forceFragmentPrecision: this.forceFragmentPrecision, fastTbn: this.fastTbn, cubeMapProjection: this.cubeMapProjection, chunks: this.chunks, customFragmentShader: this.customFragmentShader, refraction: !!this.refraction, useMetalness: this.useMetalness, blendType: this.blendType, skyboxIntensity: q === g && q && 1 !== b.skyboxIntensity, forceUv1: this.forceUv1, useTexCubeLod: f };
            q = f = g = !1;
            c && (b.noShadow = 0 !== (c & pc.SHADERDEF_NOSHADOW), b.skin = 0 !== (c & pc.SHADERDEF_SKIN), b.useInstancing = 0 !== (c & pc.SHADERDEF_INSTANCING), 0 !== (c & pc.SHADERDEF_LM) && (b.lightMapFormat = 1, b.lightMap = !0, b.lightMapChannel = "rgb", b.lightMapUv = 1, b.lightMapTransform = 0, b.lightMapWithoutAmbient = !0, b.useRgbm = !0), g = 0 !== (c & pc.SHADERDEF_UV0), f = 0 !== (c & pc.SHADERDEF_UV1), q = 0 !== (c & pc.SHADERDEF_VCOLOR));
            for (var K in pc._matTex2D)
                if ("opacity" !== K || this.blendType !== pc.BLEND_NONE || 0 !== this.alphaTest) d = K + "Map", p = d + "VertexColor", "height" !== K && this[p] ? q && (d += "Channel", b[p] = this[p], b[d] = this[d], b.vertexColors = !0) : this[d] && (p = d + "Uv", h = !0, 0 !== this[p] || g || (h = !1), 1 !== this[p] || f || (h = !1), h && (b[d] = !!this[d], h = d + "Transform", d += "Channel", b[h] = this._getMapTransformID(this[h], this[p]), b[d] = this[d], b[p] = this[p]));
            b.aoMapUv = b.aoMapUv || this.aoUvSet;
            this._mapXForms = null;
            this.useLighting ? (K = [], g = c ? c >> 8 : 1, this._collectLights(pc.LIGHTTYPE_DIRECTIONAL, e, K, g), this._collectLights(pc.LIGHTTYPE_POINT, e, K, g), this._collectLights(pc.LIGHTTYPE_SPOT, e, K, g), b.lights = K) : b.lights = [];
            this.shader = a.getProgramLibrary().getProgram("standard", b);
            c || (this.clearVariants(), this.variants[0] = this.shader);
            this.dirtyShader = !1
        }
    });
    (function(c) {
        c.dirtyShader = !0;
        c.dirtyColor = !0;
        c._scene = null;
        m(c, "ambient", new pc.Color(.7, .7, .7));
        m(c, "diffuse", new pc.Color(1, 1, 1));
        m(c, "specular", new pc.Color(0, 0, 0));
        m(c, "emissive", new pc.Color(0, 0, 0), !0);
        l(c, "shininess", 25, function(a, b) { return { name: "material_shininess", value: a.shadingModel === pc.SPECULAR_PHONG ? Math.pow(2, .11 * b) : .01 * b } });
        l(c, "heightMapFactor", 1, function(a, b) { return { name: "material_heightMapFactor", value: .025 * b } });
        l(c, "opacity", 1);
        l(c, "alphaTest", 0);
        l(c, "bumpiness", 1);
        l(c, "reflectivity", 1);
        l(c, "occludeSpecularIntensity", 1);
        l(c, "refraction", 0);
        l(c, "refractionIndex", 1 / 1.5);
        l(c, "metalness", 1);
        l(c, "aoUvSet", 0, null);
        p(c, "ambientSH", function(a, b, c) { return { name: "ambientSH[0]", value: b } });
        p(c, "cubeMapProjectionBox", function(a, b, c) {
            var e = c ? a.cubeMapMinUniform : new Float32Array(3);
            a = c ? a.cubeMapMaxUniform : new Float32Array(3);
            e[0] = b.center.x - b.halfExtents.x;
            e[1] = b.center.y - b.halfExtents.y;
            e[2] = b.center.z - b.halfExtents.z;
            a[0] = b.center.x + b.halfExtents.x;
            a[1] = b.center.y + b.halfExtents.y;
            a[2] = b.center.z + b.halfExtents.z;
            return [{ name: "envBoxMin", value: e }, { name: "envBoxMax", value: a }]
        });
        k(c);
        q(c, "ambientTint", !1);
        q(c, "diffuseMapTint", !1);
        q(c, "specularMapTint", !1);
        q(c, "emissiveMapTint", !1);
        q(c, "fastTbn", !1);
        q(c, "specularAntialias", !1);
        q(c, "useMetalness", !1);
        q(c, "occludeDirect", !1);
        q(c, "normalizeNormalMap", !0);
        q(c, "conserveEnergy", !0);
        q(c, "occludeSpecular", pc.SPECOCC_AO);
        q(c, "shadingModel", pc.SPECULAR_PHONG);
        q(c, "fresnelModel", pc.FRESNEL_NONE);
        q(c, "cubeMapProjection", pc.CUBEPROJ_NONE);
        q(c, "shadowSampleType", pc.SHADOWSAMPLE_PCF3X3);
        q(c, "customFragmentShader", null);
        q(c, "forceFragmentPrecision", null);
        q(c, "useFog", !0);
        q(c, "useLighting", !0);
        q(c, "useGammaTonemap", !0);
        q(c, "useSkybox", !0);
        q(c, "forceUv1", !1);
        g(c, "diffuse", 0, 3);
        g(c, "specular", 0, 3);
        g(c, "emissive", 0, 3);
        g(c, "normal", 0, -1);
        g(c, "metalness", 0, 1);
        g(c, "gloss", 0, 1);
        g(c, "opacity", 0, 1);
        g(c, "height", 0, 1);
        g(c, "ao", 0, 1);
        g(c, "light", 1, 3);
        p(c, "cubeMap");
        p(c, "sphereMap");
        p(c, "dpAtlas");
        p(c, "prefilteredCubeMap128");
        p(c, "prefilteredCubeMap64");
        p(c, "prefilteredCubeMap32");
        p(c, "prefilteredCubeMap16");
        p(c, "prefilteredCubeMap8");
        p(c, "prefilteredCubeMap4");
        for (var e = 0; e < a.length; e++) b[e] = c[a[e]];
        c._propsSet = []
    })(d.prototype);
    return { StandardMaterial: d }
}());
pc.extend(pc, function() {
    function d(a, b, f, d) { return (a & 7) << 28 | (b & 3) << 26 | (f ? 1 : 0) << 25 | (d & 33554431) << 0 }
    var a = function(a, b, f) {
        this.buffer = new Float32Array(a * (f || 16));
        this.count = a;
        this.usage = b ? pc.BUFFER_DYNAMIC : pc.BUFFER_STATIC;
        this._buffer = null
    };
    a.prototype = { update: function() { this._buffer && this._buffer.setData(this.buffer) } };
    var b = function(a, b, f) {
        this.node = a;
        this.mesh = b;
        this.material = f;
        this._shader = null;
        this._shaderDefs = 256;
        this._shaderDefs |= b.vertexBuffer.format.hasUv0 ? pc.SHADERDEF_UV0 : 0;
        this._shaderDefs |= b.vertexBuffer.format.hasUv1 ? pc.SHADERDEF_UV1 : 0;
        this._shaderDefs |= b.vertexBuffer.format.hasColor ? pc.SHADERDEF_VCOLOR : 0;
        this.visible = !0;
        this.layer = pc.LAYER_WORLD;
        this.renderStyle = pc.RENDERSTYLE_SOLID;
        this.castShadow = !1;
        this._updateAabb = this.pick = this.cull = this.drawToDepth = this._receiveShadow = !0;
        this.key = 0;
        this.updateKey();
        this._skinInstance = null;
        this.aabb = new pc.BoundingBox;
        this.normalMatrix = new pc.Mat3;
        this._boneAabb = null;
        this.parameters = {}
    };
    Object.defineProperty(b.prototype, "aabb", {
        get: function() {
            if (!this._updateAabb) return this._aabb;
            if (this.skinInstance) {
                var a = this.mesh.skin.boneNames.length,
                    b;
                if (!this.mesh.boneAabb) {
                    this.mesh.boneAabb = [];
                    this.mesh.boneUsed = [];
                    var f = this.mesh.vertexBuffer.format.elements,
                        d = this.mesh.vertexBuffer.numVertices,
                        h = this.mesh.vertexBuffer.format.size,
                        m, l, p, k, q;
                    for (b = 0; b < f.length; b++) f[b].name === pc.SEMANTIC_POSITION ? m = f[b].offset : f[b].name === pc.SEMANTIC_BLENDINDICES ? l = f[b].offset : f[b].name === pc.SEMANTIC_BLENDWEIGHT && (p = f[b].offset);
                    var f = new Uint8Array(this.mesh.vertexBuffer.storage),
                        r = new Float32Array(this.mesh.vertexBuffer.storage);
                    m /= 4;
                    var n = p / 4,
                        t = h / 4,
                        w, y, x, v, z;
                    p = [];
                    var u = [],
                        A = this.mesh.boneUsed;
                    for (b = 0; b < a; b++) p[b] = new pc.Vec3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), u[b] = new pc.Vec3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                    for (k = 0; k < d; k++)
                        for (q = 0; 4 > q; q++) 0 < r[k * t + n + q] && (b = f[k * h + l + q], x = r[k * t + m], v = r[k * t + m + 1], z = r[k * t + m + 2], w = u[b], y = p[b], y.x > x && (y.x = x), y.y > v && (y.y = v), y.z > z && (y.z = z), w.x < x && (w.x = x), w.y < v && (w.y = v), w.z < z && (w.z = z), A[b] = !0);
                    for (b = 0; b < a; b++) d = new pc.BoundingBox, d.setMinMax(p[b], u[b]), this.mesh.boneAabb.push(d)
                }
                if (!this._boneAabb)
                    for (this._boneAabb = [], b = 0; b < this.mesh.boneAabb.length; b++) this._boneAabb[b] = new pc.BoundingBox;
                A = this.mesh.boneUsed;
                for (b = 0; b < this.mesh.boneAabb.length; b++) A[b] && (this._boneAabb[b].setFromTransformedAabb(this.mesh.boneAabb[b], this.skinInstance.matrices[b]), this._boneAabb[b].center.add(this.skinInstance.rootNode.getPosition()));
                a = !0;
                for (b = 0; b < this.mesh.boneAabb.length; b++) A[b] && (a ? (this._aabb.center.copy(this._boneAabb[b].center), this._aabb.halfExtents.copy(this._boneAabb[b].halfExtents), a = !1) : this._aabb.add(this._boneAabb[b]))
            } else this.node._dirtyAabb && (this._aabb.setFromTransformedAabb(this.mesh.aabb, this.node.worldTransform), this.node._dirtyAabb = !1);
            return this._aabb
        },
        set: function(a) { this._aabb = a }
    });
    Object.defineProperty(b.prototype, "material", {
        get: function() { return this._material },
        set: function(a) {
            this._shader = null;
            if (this._material) {
                var b = this._material.meshInstances,
                    f = b.indexOf(this); - 1 !== f && b.splice(f, 1)
            }
            this._material = a;
            this._material.meshInstances.push(this);
            this.updateKey()
        }
    });
    Object.defineProperty(b.prototype, "layer", {
        get: function() { return this._layer },
        set: function(a) {
            this._layer = a;
            this.updateKey()
        }
    });
    Object.defineProperty(b.prototype, "receiveShadow", {
        get: function() { return this._receiveShadow },
        set: function(a) {
            this._shaderDefs = (this._receiveShadow = a) ? this._shaderDefs & ~pc.SHADERDEF_NOSHADOW : this._shaderDefs | pc.SHADERDEF_NOSHADOW;
            this._shader = null
        }
    });
    Object.defineProperty(b.prototype, "skinInstance", {
        get: function() { return this._skinInstance },
        set: function(a) {
            this._shaderDefs = (this._skinInstance = a) ? this._shaderDefs | pc.SHADERDEF_SKIN : this._shaderDefs & ~pc.SHADERDEF_SKIN;
            this._shader = null
        }
    });
    Object.defineProperty(b.prototype, "mask", {
        get: function() { return this._shaderDefs >> 8 },
        set: function(a) {
            this._shaderDefs = this._shaderDefs & 255 | a << 8;
            this._shader = null
        }
    });
    pc.extend(b.prototype, {
        syncAabb: function() {},
        updateKey: function() {
            var a = this.material;
            this.key = d(this.layer, a.blendType, !1, a.id)
        },
        setParameter: pc.Material.prototype.setParameter,
        setParameters: pc.Material.prototype.setParameters,
        deleteParameter: pc.Material.prototype.deleteParameter,
        getParameter: pc.Material.prototype.getParameter,
        getParameters: pc.Material.prototype.getParameters,
        clearParameters: pc.Material.prototype.clearParameters
    });
    return {
        Command: function(a, b, f) {
            this.key = d(a, b, !0, 0);
            this.command = f
        },
        Mesh: function() {
            this.vertexBuffer = null;
            this.indexBuffer = [null];
            this.primitive = [{ type: 0, base: 0, count: 0 }];
            this.skin = null;
            this.aabb = new pc.BoundingBox;
            this.boneAabb = null
        },
        MeshInstance: b,
        InstancingData: a,
        _getDrawcallSortKey: d
    }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
        this.skin = a;
        this.rootNode = b;
        this.bones = [];
        var c = a.inverseBindPose.length,
            e = a.device;
        if (e.supportsBoneTextures) {
            var f;
            f = 256 < c ? 64 : 64 < c ? 32 : 16 < c ? 16 : 8;
            this.matrixPalette = new Float32Array(f * f * 4);
            this.boneTexture = new pc.Texture(e, { width: f, height: f, format: pc.PIXELFORMAT_RGBA32F, autoMipmap: !1 });
            this.boneTexture.minFilter = pc.FILTER_NEAREST;
            this.boneTexture.magFilter = pc.FILTER_NEAREST;
            this.matrixPalette = this.boneTexture.lock()
        } else this.matrixPalette = new Float32Array(16 * c);
        this.matrices = [];
        for (e = 0; e < c; e++) this.matrices[e] = new pc.Mat4
    };
    d.prototype = {
        updateMatrices: function() { for (var a = this.rootNode.getPosition(), b = this.bones.length - 1; 0 <= b; b--) this.matrices[b].mul2(this.bones[b].getWorldTransform(), this.skin.inverseBindPose[b]), this.matrices[b].data[12] -= a.x, this.matrices[b].data[13] -= a.y, this.matrices[b].data[14] -= a.z },
        updateMatrixPalette: function() {
            for (var a, b = this.matrixPalette, c, e = this.bones.length - 1; 0 <= e; e--) a = this.matrices[e].data, c = 16 * e, b[c] = a[0], b[c + 1] = a[1], b[c + 2] = a[2], b[c + 3] = a[3], b[c + 4] = a[4], b[c + 5] = a[5], b[c + 6] = a[6], b[c + 7] = a[7], b[c + 8] = a[8], b[c + 9] = a[9], b[c + 10] = a[10], b[c + 11] = a[11], b[c + 12] = a[12], b[c + 13] = a[13], b[c + 14] = a[14], b[c + 15] = a[15];
            this.skin.device.supportsBoneTextures && (this.boneTexture.lock(), this.boneTexture.unlock())
        }
    };
    return {
        Skin: function(a, b, c) {
            this.device = a;
            this.inverseBindPose = b;
            this.boneNames = c
        },
        SkinInstance: d
    }
}());
pc.extend(pc, function() {
    function d() {
        this.index = 0;
        this.boneIndices = [0, 0, 0, 0]
    }

    function a() {
        this.indexCount = this.indexStart = this.vertexCount = this.vertexStart = this.partition = 0;
        this.boneIndices = [];
        this.vertices = [];
        this.indices = [];
        this.indexMap = {}
    }

    function b(a) {
        var b = a.vertices,
            c = a.skins,
            d = a.meshes,
            m = a.meshInstances;
        for (a = 0; a < d.length; a++) d[a].vertices = b[d[a].vertices], void 0 !== d[a].skin && (d[a].skin = c[d[a].skin]);
        for (a = 0; a < m.length; a++) m[a].mesh = d[m[a].mesh]
    }

    function c(a) {
        var b = a.vertices,
            c = a.skins,
            d = a.meshes,
            m = a.meshInstances;
        for (a = 0; a < d.length; a++) d[a].vertices = b.indexOf(d[a].vertices), void 0 !== d[a].skin && (d[a].skin = c.indexOf(d[a].skin));
        for (a = 0; a < m.length; a++) m[a].mesh = d.indexOf(m[a].mesh)
    }
    a.prototype = {
        addVertex: function(a, b, c) {
            if (void 0 !== this.indexMap[b]) c = this.indexMap[b], this.indices.push(c);
            else {
                for (var d = 0; 4 > d; d++) 0 !== c.blendWeight.data[4 * b + d] && (a.boneIndices[d] = this.getBoneRemap(c.blendIndices.data[4 * a.index + d]));
                c = this.vertices.length;
                this.indices.push(c);
                this.vertices.push(a);
                this.indexMap[b] = c
            }
        },
        addPrimitive: function(a, b, c, d) {
            var m, l, p = [],
                k = 0,
                q = a.length;
            for (m = 0; m < q; m++)
                for (var r = a[m].index, n = 0; 4 > n; n++)
                    if (0 < c.blendWeight.data[4 * r + n]) {
                        var t = c.blendIndices.data[4 * r + n],
                            w = !0;
                        for (l = 0; l < k; l++)
                            if (p[l] == t) { w = !1; break } w && (p[k] = t, l = this.getBoneRemap(t), k += -1 === l ? 1 : 0)
                    } if (this.boneIndices.length + k > d) return !1;
            for (m = 0; m < k; m++) this.boneIndices.push(p[m]);
            for (m = 0; m < q; m++) this.addVertex(a[m], b[m], c);
            return !0
        },
        getBoneRemap: function(a) {
            for (var b = 0; b < this.boneIndices.length; b++)
                if (this.boneIndices[b] === a) return b;
            return -1
        }
    };
    return {
        partitionSkin: function(e, f, g) {
            var h, m, l, p;
            b(e);
            var k = e.vertices,
                q = e.skins,
                r, n = e.meshes,
                t = e.meshInstances,
                w = function(a) {
                    var b = new d;
                    b.index = a;
                    return b
                };
            for (h = q.length - 1; 0 <= h; h--)
                if (q[h].boneNames.length > g) {
                    var y = q.splice(h, 1)[0],
                        x = [];
                    for (m = 0; m < n.length; m++) n[m].skin === y && x.push(n[m]);
                    for (m = 0; m < x.length; m++) p = n.indexOf(x[m]), -1 !== p && n.splice(p, 1);
                    if (0 === x.length) throw Error("partitionSkin: There should be at least one mesh that references a skin");
                    var v = x[0].vertices;
                    for (m = 1; m < x.length; m++)
                        if (x[m].vertices !== v) throw Error("partitionSkin: All meshes that share a skin should also share the same vertex buffer");
                    var z = [],
                        u = [];
                    l = [];
                    var A = 0;
                    for (m = 0; m < x.length; m++) {
                        r = x[m];
                        for (var B = r.indices, C = r.base; C < r.base + r.count;) {
                            p = B[C++];
                            u[0] = w(p);
                            l[0] = p;
                            p = B[C++];
                            u[1] = w(p);
                            l[1] = p;
                            p = B[C++];
                            u[2] = w(p);
                            l[2] = p;
                            for (var E = !1, O = A; O < z.length; O++)
                                if (p = z[O], p.addPrimitive(u, l, v, g)) { E = !0; break } E || (p = new a, p.originalMesh = r, p.addPrimitive(u, l, v, g), z.push(p))
                        }
                        A = z.length
                    }
                    r = [];
                    x = [];
                    for (m = 0; m < z.length; m++)
                        if (p = z[m], p.vertices.length && p.indices.length) {
                            u = r.length;
                            l = p.vertices.length;
                            A = x.length;
                            B = p.indices.length;
                            p.partition = m;
                            p.vertexStart = u;
                            p.vertexCount = l;
                            p.indexStart = A;
                            p.indexCount = B;
                            C = 0;
                            for (E = u; C < l;) r[E++] = p.vertices[C++];
                            C = 0;
                            for (E = A; C < B;) x[E++] = p.indices[C++] + u
                        } u = [];
                    for (m = 0; m < z.length; m++) {
                        p = z[m];
                        A = [];
                        B = [];
                        for (l = 0; l < p.boneIndices.length; l++) A.push(y.inverseBindMatrices[p.boneIndices[l]]), B.push(y.boneNames[p.boneIndices[l]]);
                        p = { inverseBindMatrices: A, boneNames: B };
                        u.push(p);
                        q.push(p)
                    }
                    var K, y = {};
                    for (K in v) y[K] = { components: v[K].components, data: [], type: v[K].type };
                    for (K in v)
                        if ("blendIndices" === K)
                            for (p = y[K].data, m = 0; m < r.length; m++) l = r[m].boneIndices, p.push(l[0], l[1], l[2], l[3]);
                        else
                            for (m = v[K], A = m.data, B = m.components, m = 0; m < r.length; m++)
                                for (p = r[m].index, l = 0; l < B; l++) y[K].data.push(A[p * B + l]);
                    k[k.indexOf(v)] = y;
                    for (m = 0; m < z.length; m++)
                        for (p = z[m], r = { aabb: { min: [0, 0, 0], max: [0, 0, 0] }, vertices: y, skin: u[m], indices: x.splice(0, p.indexCount), type: "triangles", base: 0, count: p.indexCount }, n.push(r), l = t.length - 1; 0 <= l; l--) t[l].mesh === p.originalMesh && (t.push({ mesh: r, node: t[l].node }), f && f.push({ material: f[l].material, path: f[l].path }));
                    for (m = 0; m < z.length; m++)
                        for (p = z[m], l = t.length - 1; 0 <= l; l--) t[l].mesh === p.originalMesh && (t.splice(l, 1), f && f.splice(l, 1))
                } c(e)
        }
    }
}());
pc.extend(pc, function() {
    var d = function() {
        this.graph = null;
        this.meshInstances = [];
        this.skinInstances = [];
        this.cameras = [];
        this.lights = [];
        this._shadersVersion = 0
    };
    d.prototype = {
        getGraph: function() { return this.graph },
        setGraph: function(a) { this.graph = a },
        getCameras: function() { return this.cameras },
        setCameras: function(a) { this.cameras = a },
        getLights: function() { return this.lights },
        setLights: function(a) { this.lights = a },
        getMaterials: function() { var a, b = []; for (a = 0; a < this.meshInstances.length; a++) { var c = this.meshInstances[a]; - 1 === b.indexOf(c.material) && b.push(c.material) } return b },
        clone: function() {
            var a, b, c = [],
                e = [],
                f = function(a) {
                    var b = a.clone();
                    c.push(a);
                    e.push(b);
                    a = a.getChildren();
                    for (var d = 0; d < a.length; d++) b.addChild(f(a[d]));
                    return b
                },
                d = f(this.graph),
                h = [],
                m = [];
            for (a = 0; a < this.skinInstances.length; a++) {
                var l = this.skinInstances[a].skin,
                    p = new pc.SkinInstance(l, d),
                    k = [];
                for (b = 0; b < l.boneNames.length; b++) {
                    var q = d.findByName(l.boneNames[b]);
                    k.push(q)
                }
                p.bones = k;
                m.push(p)
            }
            for (a = 0; a < this.meshInstances.length; a++) b = this.meshInstances[a], l = c.indexOf(b.node), l = new pc.MeshInstance(e[l], b.mesh, b.material), b.skinInstance && (b = this.skinInstances.indexOf(b.skinInstance), l.skinInstance = m[b]), h.push(l);
            a = new pc.Model;
            a.graph = d;
            a.meshInstances = h;
            a.skinInstances = m;
            a.getGraph().syncHierarchy();
            return a
        },
        generateWireframe: function() {
            var a, b, c, e, f, d, h, m, l, p, k = [];
            for (a = 0; a < this.meshInstances.length; a++) d = this.meshInstances[a].mesh, -1 === k.indexOf(d) && k.push(d);
            var q = [
                [0, 1],
                [1, 2],
                [2, 0]
            ];
            for (a = 0; a < k.length; a++) {
                d = k[a];
                h = d.primitive[pc.RENDERSTYLE_SOLID].base;
                m = d.primitive[pc.RENDERSTYLE_SOLID].count;
                l = d.indexBuffer[pc.RENDERSTYLE_SOLID];
                p = new Uint16Array(l.lock());
                var r = {},
                    n = [];
                for (b = h; b < h + m; b += 3)
                    for (c = 0; 3 > c; c++) {
                        e = p[b + q[c][0]];
                        f = p[b + q[c][1]];
                        var t = e > f ? f << 16 | e : e << 16 | f;
                        void 0 === r[t] && (r[t] = 0, n.push(e, f))
                    }
                l.unlock();
                b = new pc.IndexBuffer(l.device, pc.INDEXFORMAT_UINT16, n.length);
                c = new Uint16Array(b.lock());
                c.set(n);
                b.unlock();
                d.primitive[pc.RENDERSTYLE_WIREFRAME] = { type: pc.PRIMITIVE_LINES, base: 0, count: n.length, indexed: !0 };
                d.indexBuffer[pc.RENDERSTYLE_WIREFRAME] = b
            }
        }
    };
    return { Model: d }
}());
pc.extend(pc, function() {
    function d(a, b) { return a - b * Math.floor(a / b) }

    function a(a, b) { ya[a] = void 0 !== G[a] && null !== G[a] ? G[a] : b }

    function b(a, b) { for (var c = a.length / 3, e = Array(4 * c), f = 0; f < c; f++) e[4 * f] = a[3 * f], e[4 * f + 1] = a[3 * f + 1], e[4 * f + 2] = a[3 * f + 2], e[4 * f + 3] = (255 * b[3 * f] << 16 | 255 * b[3 * f + 1] << 8 | 255 * b[3 * f + 2]) / 16777216; return e }

    function c(a, b) {
        var c, e, f = b.length,
            d = a.length / f;
        for (c = 0; c < d; c++)
            for (e = 0; e < f; e++) b[e] = Math.max(b[e], Math.abs(a[c * f + e]))
    }

    function e(a, b, e) {
        for (var f = new Float32Array(b.length), d = 0; d < b.length; d++) f[d] = b[d] - a[d];
        c(f, e);
        a = e.length;
        var g = f.length / a;
        for (b = 0; b < g; b++)
            for (d = 0; d < a; d++) f[b * a + d] /= e[d], f[b * a + d] *= .5, f[b * a + d] += .5;
        return f
    }

    function f(a, b) {
        b.data[0] = a.data[0];
        b.data[1] = a.data[1];
        b.data[2] = a.data[2];
        b.data[3] = a.data[4];
        b.data[4] = a.data[5];
        b.data[5] = a.data[6];
        b.data[6] = a.data[8];
        b.data[7] = a.data[9];
        b.data[8] = a.data[10]
    }
    var g = [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1]
        ],
        h = function(a, b, c, e, f, d, g) {
            f || (f = pc.PIXELFORMAT_RGBA32F);
            a = new pc.Texture(a, { width: b, height: c, format: f, cubemap: !1, autoMipmap: !1 });
            a.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
            a.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
            a.minFilter = pc.FILTER_NEAREST;
            a.magFilter = pc.FILTER_NEAREST;
            b = a.lock();
            if (f == pc.PIXELFORMAT_R8_G8_B8_A8) {
                g && (a.minFilter = pc.FILTER_LINEAR, a.magFilter = pc.FILTER_LINEAR);
                f = new Uint8Array(e.length);
                for (g = 0; g < e.length; g++) f[g] = e[g] * d * 255;
                e = f
            }
            b.set(e);
            a.unlock();
            return a
        },
        m = new pc.Curve([0, 0, 1, 0]),
        l = new pc.Curve([0, 1, 1, 1]),
        p = new pc.CurveSet([0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]),
        k = new pc.CurveSet([0, 1, 1, 1], [0, 1, 1, 1], [0, 1, 1, 1]),
        q = 2,
        r = null,
        n = new pc.Vec3,
        t = new pc.Vec3,
        w = new pc.Vec3,
        y = new pc.Vec3,
        x = new pc.Vec3,
        v = new pc.Vec3,
        z = new pc.Vec3,
        u = new pc.Vec3,
        A = new pc.Vec3,
        B = new pc.Mat4,
        C = new pc.Mat3,
        E = new pc.Mat3,
        O = 1,
        K, M = new pc.Mat4,
        H = new pc.Vec3,
        D = new pc.Vec3,
        X = new pc.Vec3;
    new pc.Vec3;
    var da = new pc.Vec3,
        ba = new pc.Vec3,
        ya, G, Q = function(b, c) {
            this.graphicsDevice = b;
            this.precision = 32;
            this._addTimeTime = 0;
            if (!r) {
                var e = new Float32Array(1024),
                    f, d, g, n;
                for (d = 0; 16 > d; d++)
                    for (f = 0; 16 > f; f++) g = f + 1 - 8.5, n = d + 1 - 8.5, n = Math.max(Math.min(1 - Math.max(Math.min(Math.sqrt(g * g + n * n) / 16, 1), 0) - .5, 1), 0), g = 16 * d + f, e[4 * g] = 1, e[4 * g + 1] = 1, e[4 * g + 2] = 1, e[4 * g + 3] = n;
                r = h(b, 16, 16, e, pc.PIXELFORMAT_R8_G8_B8_A8, 1, !0);
                r.minFilter = pc.FILTER_LINEAR;
                r.magFilter = pc.FILTER_LINEAR
            }
            ya = this;
            G = c;
            a("numParticles", 1);
            this.numParticles > b.maxTextureSize && (console.warn("WARNING: can't create more than " + b.maxTextureSize + " particles on this device."), this.numParticles = b.maxTextureSize);
            a("rate", 1);
            a("rate2", this.rate);
            a("lifetime", 50);
            a("emitterExtents", new pc.Vec3(0, 0, 0));
            a("emitterRadius", 0);
            a("emitterShape", pc.EMITTERSHAPE_BOX);
            a("initialVelocity", 1);
            a("wrap", !1);
            a("wrapBounds", null);
            a("colorMap", r);
            a("normalMap", null);
            a("loop", !0);
            a("preWarm", !1);
            a("sort", pc.PARTICLESORT_NONE);
            a("mode", pc.PARTICLEMODE_GPU);
            a("scene", null);
            a("lighting", !1);
            a("halfLambert", !1);
            a("intensity", 1);
            a("stretch", 0);
            a("alignToMotion", !1);
            a("depthSoftening", 0);
            a("mesh", null);
            a("depthWrite", !1);
            a("noFog", !1);
            a("blendType", pc.BLEND_NORMAL);
            a("node", null);
            a("startAngle", 0);
            a("startAngle2", this.startAngle);
            a("animTilesX", 1);
            a("animTilesY", 1);
            a("animNumFrames", 1);
            a("animSpeed", 1);
            a("animLoop", !0);
            this.frameRandom = new pc.Vec3(0, 0, 0);
            a("colorGraph", k);
            a("colorGraph2", this.colorGraph);
            a("scaleGraph", l);
            a("scaleGraph2", this.scaleGraph);
            a("alphaGraph", l);
            a("alphaGraph2", this.alphaGraph);
            a("localVelocityGraph", p);
            a("localVelocityGraph2", this.localVelocityGraph);
            a("velocityGraph", p);
            a("velocityGraph2", this.velocityGraph);
            a("rotationSpeedGraph", m);
            a("rotationSpeedGraph2", this.rotationSpeedGraph);
            this.constantParticleTexIN = b.scope.resolve("particleTexIN");
            this.constantParticleTexOUT = b.scope.resolve("particleTexOUT");
            this.constantEmitterPos = b.scope.resolve("emitterPos");
            this.constantEmitterScale = b.scope.resolve("emitterScale");
            this.constantSpawnBounds = b.scope.resolve("spawnBounds");
            this.constantSpawnBoundsSphere = b.scope.resolve("spawnBoundsSphere");
            this.constantInitialVelocity = b.scope.resolve("initialVelocity");
            this.constantFrameRandom = b.scope.resolve("frameRandom");
            this.constantDelta = b.scope.resolve("delta");
            this.constantRate = b.scope.resolve("rate");
            this.constantRateDiv = b.scope.resolve("rateDiv");
            this.constantLifetime = b.scope.resolve("lifetime");
            this.constantLightCube = b.scope.resolve("lightCube[0]");
            this.constantGraphSampleSize = b.scope.resolve("graphSampleSize");
            this.constantGraphNumSamples = b.scope.resolve("graphNumSamples");
            this.constantInternalTex0 = b.scope.resolve("internalTex0");
            this.constantInternalTex1 = b.scope.resolve("internalTex1");
            this.constantInternalTex2 = b.scope.resolve("internalTex2");
            this.constantEmitterMatrix = b.scope.resolve("emitterMatrix");
            this.constantNumParticles = b.scope.resolve("numParticles");
            this.constantNumParticlesPot = b.scope.resolve("numParticlesPot");
            this.constantLocalVelocityDivMult = b.scope.resolve("localVelocityDivMult");
            this.constantVelocityDivMult = b.scope.resolve("velocityDivMult");
            this.constantRotSpeedDivMult = b.scope.resolve("rotSpeedDivMult");
            this.constantSeed = b.scope.resolve("seed");
            this.constantStartAngle = b.scope.resolve("startAngle");
            this.constantStartAngle2 = b.scope.resolve("startAngle2");
            this.constantOutBoundsMul = b.scope.resolve("outBoundsMul");
            this.constantOutBoundsAdd = b.scope.resolve("outBoundsAdd");
            this.constantInBoundsSize = b.scope.resolve("inBoundsSize");
            this.constantInBoundsCenter = b.scope.resolve("inBoundsCenter");
            this.constantMaxVel = b.scope.resolve("maxVel");
            this.lightCube = new Float32Array(18);
            this.lightCubeDir = Array(6);
            this.lightCubeDir[0] = new pc.Vec3(-1, 0, 0);
            this.lightCubeDir[1] = new pc.Vec3(1, 0, 0);
            this.lightCubeDir[2] = new pc.Vec3(0, -1, 0);
            this.lightCubeDir[3] = new pc.Vec3(0, 1, 0);
            this.lightCubeDir[4] = new pc.Vec3(0, 0, -1);
            this.lightCubeDir[5] = new pc.Vec3(0, 0, 1);
            this.animParams = new pc.Vec4;
            this.camera = this.particleDistance = this.vbOld = this.vbToSort = this.internalTex3 = this.internalTex2 = this.internalTex1 = this.internalTex0 = null;
            this.swapTex = !1;
            this.useMesh = !0;
            this.useCpu = !1;
            this.pack8 = !0;
            this.localBounds = new pc.BoundingBox;
            this.worldBoundsNoTrail = new pc.BoundingBox;
            this.worldBoundsTrail = [new pc.BoundingBox, new pc.BoundingBox];
            this.worldBounds = new pc.BoundingBox;
            this.worldBoundsSize = new pc.Vec3;
            this.prevWorldBoundsSize = new pc.Vec3;
            this.prevWorldBoundsCenter = new pc.Vec3;
            this.worldBoundsMul = new pc.Vec3;
            this.worldBoundsAdd = new pc.Vec3;
            this.timeToSwitchBounds = 0;
            this.shaderParticleUpdateOnStop = this.shaderParticleUpdateNoRespawn = this.shaderParticleUpdateRespawn = null;
            this.numParticleIndices = this.numParticleVerts = 0;
            this.meshInstance = this.material = null;
            this.seed = 0;
            this.fixedTimeStep = 1 / 60;
            this.maxSubSteps = 10;
            this.simTimeTotal = this.simTime = 0;
            this.beenReset = !1;
            this.rebuild()
        };
    Q.prototype = {
        onChangeCamera: function() {
            0 < this.depthSoftening && this.camera && this.camera.requestDepthMap();
            this.regenShader();
            this.resetMaterial()
        },
        calculateBoundsMad: function() {
            this.worldBoundsMul.x = 1 / this.worldBoundsSize.x;
            this.worldBoundsMul.y = 1 / this.worldBoundsSize.y;
            this.worldBoundsMul.z = 1 / this.worldBoundsSize.z;
            this.worldBoundsAdd.copy(this.worldBounds.center).mul(this.worldBoundsMul).scale(-1);
            this.worldBoundsAdd.x += .5;
            this.worldBoundsAdd.y += .5;
            this.worldBoundsAdd.z += .5
        },
        calculateWorldBounds: function() {
            if (this.node) {
                this.node.getPosition();
                this.prevWorldBoundsSize.copy(this.worldBoundsSize);
                this.prevWorldBoundsCenter.copy(this.worldBounds.center);
                this.worldBoundsNoTrail.setFromTransformedAabb(this.localBounds, this.node.getWorldTransform());
                this.worldBoundsTrail[0].add(this.worldBoundsNoTrail);
                var a = this.simTimeTotal;
                if (a > this.timeToSwitchBounds) {
                    var b = this.worldBoundsTrail[0];
                    this.worldBoundsTrail[0] = this.worldBoundsTrail[1];
                    this.worldBoundsTrail[1] = b;
                    this.worldBoundsTrail[0].copy(this.worldBoundsNoTrail);
                    this.timeToSwitchBounds = a + this.lifetime
                }
                this.worldBounds.copy(this.worldBoundsTrail[0]);
                this.worldBounds.add(this.worldBoundsTrail[1]);
                this.worldBoundsSize.copy(this.worldBounds.halfExtents).scale(2);
                this.meshInstance.mesh.aabb = this.worldBounds;
                this.pack8 && this.calculateBoundsMad()
            }
        },
        calculateLocalBounds: function() {
            var a = Number.MAX_VALUE,
                b = Number.MAX_VALUE,
                c = Number.MAX_VALUE,
                e = -Number.MAX_VALUE,
                f = -Number.MAX_VALUE,
                d = -Number.MAX_VALUE,
                g = 0,
                h = this.lifetime / this.precision,
                l = [this.qVelocity, this.qVelocity2, this.qLocalVelocity, this.qLocalVelocity2],
                k = [0, 0, 0, 0],
                m = [0, 0, 0, 0],
                p = [0, 0, 0, 0],
                n, q, r, t, w, u;
            for (n = 0; n < this.precision + 1; n++) {
                r = Math.min(n, this.precision - 1);
                for (q = 0; 4 > q; q++) t = l[q][3 * r] * h + k[q], w = l[q][3 * r + 1] * h + m[q], u = l[q][3 * r + 2] * h + p[q], a > t && (a = t), b > w && (b = w), c > u && (c = u), e < t && (e = t), f < w && (f = w), d < u && (d = u), k[q] = t, m[q] = w, p[q] = u;
                g = Math.max(g, this.qScale[r])
            }
            this.emitterShape === pc.EMITTERSHAPE_BOX ? (t = .5 * this.emitterExtents.x, w = .5 * this.emitterExtents.y, u = .5 * this.emitterExtents.z) : u = w = t = this.emitterRadius;
            e < t && (e = t);
            f < w && (f = w);
            d < u && (d = u);
            t = -t;
            w = -w;
            u = -u;
            a > t && (a = t);
            b > w && (b = w);
            c > u && (c = u);
            da.x = a - g;
            da.y = b - g;
            da.z = c - g;
            ba.x = e + g;
            ba.y = f + g;
            ba.z = d + g;
            this.localBounds.setMinMax(da, ba)
        },
        rebuild: function() {
            var a, b = this.graphicsDevice;
            null === this.colorMap && (this.colorMap = r);
            this.spawnBounds = this.emitterShape === pc.EMITTERSHAPE_BOX ? this.emitterExtents : this.emitterRadius;
            this.useCpu = this.useCpu || this.sort > pc.PARTICLESORT_NONE || 1 >= b.maxVertexTextures || 64 > b.fragmentUniformsCount || b.forceCpuParticles || !b.extTextureFloat;
            this.vertexBuffer = void 0;
            this.pack8 = (this.pack8 || !b.extTextureFloatRenderable) && !this.useCpu;
            q = this.useCpu || this.pack8 ? 4 : 2;
            this.useMesh = !1;
            this.mesh && (65535 < this.numParticles * this.mesh.vertexBuffer.numVertices ? console.warn("WARNING: particle system can't render mesh particles because numParticles * numVertices is more than 65k. Reverting to quad particles.") : this.useMesh = !0);
            this.numParticlesPot = pc.math.nextPowerOfTwo(this.numParticles);
            this.rebuildGraphs();
            this.calculateLocalBounds();
            this.node && (this.worldBounds.setFromTransformedAabb(this.localBounds, this.node.getWorldTransform()), this.worldBoundsTrail[0].copy(this.worldBounds), this.worldBoundsTrail[1].copy(this.worldBounds), this.worldBoundsSize.copy(this.worldBounds.halfExtents).scale(2), this.prevWorldBoundsSize.copy(this.worldBoundsSize), this.prevWorldBoundsCenter.copy(this.worldBounds.center), this.pack8 && this.calculateBoundsMad());
            this.vbToSort = Array(this.numParticles);
            this.particleDistance = new Float32Array(this.numParticles);
            this.frameRandom.x = Math.random();
            this.frameRandom.y = Math.random();
            this.frameRandom.z = Math.random();
            this.particleTex = new Float32Array(this.numParticlesPot * q * 4);
            var c = null === this.node ? pc.Vec3.ZERO : this.node.getPosition();
            this.emitterShape === pc.EMITTERSHAPE_BOX && (null === this.node ? M.setTRS(pc.Vec3.ZERO, pc.Quat.IDENTITY, this.spawnBounds) : M.setTRS(pc.Vec3.ZERO, this.node.getRotation(), X.copy(this.spawnBounds).mul(this.node.getLocalScale())));
            for (a = 0; a < this.numParticles; a++) this.calcSpawnPosition(c, a), this.useCpu && (this.particleTex[4 * a + 3 + 8 * this.numParticlesPot] = 1);
            this.particleTexStart = new Float32Array(this.numParticlesPot * q * 4);
            for (a = 0; a < this.particleTexStart.length; a++) this.particleTexStart[a] = this.particleTex[a];
            this.useCpu || (this.pack8 ? (this.particleTexIN = h(b, this.numParticlesPot, q, this.particleTex, pc.PIXELFORMAT_R8_G8_B8_A8, 1, !1), this.particleTexOUT = h(b, this.numParticlesPot, q, this.particleTex, pc.PIXELFORMAT_R8_G8_B8_A8, 1, !1), this.particleTexStart = h(b, this.numParticlesPot, q, this.particleTexStart, pc.PIXELFORMAT_R8_G8_B8_A8, 1, !1)) : (this.particleTexIN = h(b, this.numParticlesPot, q, this.particleTex), this.particleTexOUT = h(b, this.numParticlesPot, q, this.particleTex), this.particleTexStart = h(b, this.numParticlesPot, q, this.particleTexStart)), this.rtParticleTexIN = new pc.RenderTarget(b, this.particleTexIN, { depth: !1 }), this.rtParticleTexOUT = new pc.RenderTarget(b, this.particleTexOUT, { depth: !1 }), this.swapTex = !1);
            a = pc.shaderChunks;
            var c = a.particleUpdaterInitPS + (this.pack8 ? a.particleInputRgba8PS + a.particleOutputRgba8PS : a.particleInputFloatPS + a.particleOutputFloatPS) + (this.emitterShape === pc.EMITTERSHAPE_BOX ? a.particleUpdaterAABBPS : a.particleUpdaterSpherePS) + a.particleUpdaterStartPS,
                e = c + a.particleUpdaterNoRespawnPS + a.particleUpdaterEndPS,
                f = c + a.particleUpdaterOnStopPS + a.particleUpdaterEndPS;
            this.shaderParticleUpdateRespawn = a.createShaderFromCode(b, a.fullscreenQuadVS, c + a.particleUpdaterRespawnPS + a.particleUpdaterEndPS, "fsQuad0" + this.emitterShape + "" + this.pack8);
            this.shaderParticleUpdateNoRespawn = a.createShaderFromCode(b, a.fullscreenQuadVS, e, "fsQuad1" + this.emitterShape + "" + this.pack8);
            this.shaderParticleUpdateOnStop = a.createShaderFromCode(b, a.fullscreenQuadVS, f, "fsQuad2" + this.emitterShape + "" + this.pack8);
            this.numParticleVerts = this.useMesh ? this.mesh.vertexBuffer.numVertices : 4;
            this.numParticleIndices = this.useMesh ? this.mesh.indexBuffer[0].numIndices : 6;
            this._allocate(this.numParticles);
            b = new pc.Mesh;
            b.vertexBuffer = this.vertexBuffer;
            b.indexBuffer[0] = this.indexBuffer;
            b.primitive[0].type = pc.PRIMITIVE_TRIANGLES;
            b.primitive[0].base = 0;
            b.primitive[0].count = this.numParticles * this.numParticleIndices;
            b.primitive[0].indexed = !0;
            this.material = new pc.Material;
            this.material.cullMode = pc.CULLFACE_NONE;
            this.material.alphaWrite = !1;
            this.material.blend = !0;
            this.material.blendType = this.blendType;
            this.material.depthWrite = this.depthWrite;
            this.material.emitter = this;
            this.regenShader();
            this.resetMaterial();
            this.meshInstance = new pc.MeshInstance(this.node, b, this.material);
            this.meshInstance.updateKey();
            this.meshInstance.drawToDepth = !1;
            this.meshInstance.cull = !0;
            this.meshInstance.aabb = this.worldBounds;
            this.meshInstance._updateAabb = !1;
            this._initializeTextures();
            this.addTime(0);
            this.preWarm && this.prewarm(this.lifetime);
            this.resetTime()
        },
        _isAnimated: function() { return 1 <= this.animNumFrames && (1 < this.animTilesX || 1 < this.animTilesY) && (this.colorMap && this.colorMap !== r || this.normalMap) },
        calcSpawnPosition: function(a, b) {
            var c = Math.random(),
                e = Math.random(),
                f = Math.random(),
                d = Math.random();
            this.useCpu && (this.particleTex[4 * b + 0 + 8 * this.numParticlesPot] = c, this.particleTex[4 * b + 1 + 8 * this.numParticlesPot] = e, this.particleTex[4 * b + 2 + 8 * this.numParticlesPot] = f);
            H.data[0] = c - .5;
            H.data[1] = e - .5;
            H.data[2] = f - .5;
            this.emitterShape === pc.EMITTERSHAPE_BOX ? D.copy(a).add(M.transformPoint(H)) : (H.normalize(), D.copy(a).add(H.scale(d * this.spawnBounds)));
            if (this.pack8) {
                var g = (D.data[0] - this.worldBounds.center.data[0]) / this.worldBoundsSize.data[0] + .5,
                    d = (D.data[1] - this.worldBounds.center.data[1]) / this.worldBoundsSize.data[1] + .5,
                    f = (D.data[2] - this.worldBounds.center.data[2]) / this.worldBoundsSize.data[2] + .5,
                    e = pc.math.lerp(this.startAngle * pc.math.DEG_TO_RAD, this.startAngle2 * pc.math.DEG_TO_RAD, c),
                    e = e % (2 * Math.PI) / (2 * Math.PI),
                    g = encodeFloatRG(g);
                this.particleTex[4 * b] = g[0];
                this.particleTex[4 * b + 1] = g[1];
                d = encodeFloatRG(d);
                this.particleTex[4 * b + 2] = d[0];
                this.particleTex[4 * b + 3] = d[1];
                f = encodeFloatRG(f);
                this.particleTex[4 * b + 0 + 4 * this.numParticlesPot] = f[0];
                this.particleTex[4 * b + 1 + 4 * this.numParticlesPot] = f[1];
                e = encodeFloatRG(e);
                this.particleTex[4 * b + 2 + 4 * this.numParticlesPot] = e[0];
                this.particleTex[4 * b + 3 + 4 * this.numParticlesPot] = e[1];
                this.particleTex[4 * b + 3 + 8 * this.numParticlesPot] = 1;
                c = pc.math.lerp(this.rate, this.rate2, c);
                e = Math.max(this.lifetime, (this.numParticles - 1) * Math.max(this.rate, this.rate2));
                c = encodeFloatRGBA((-c * b + e) / (e +
                    (this.lifetime + 1)));
                this.particleTex[4 * b + 0 + 12 * this.numParticlesPot] = c[0];
                this.particleTex[4 * b + 1 + 12 * this.numParticlesPot] = c[1];
                this.particleTex[4 * b + 2 + 12 * this.numParticlesPot] = c[2];
                this.particleTex[4 * b + 3 + 12 * this.numParticlesPot] = c[3]
            } else this.particleTex[4 * b] = D.data[0], this.particleTex[4 * b + 1] = D.data[1], this.particleTex[4 * b + 2] = D.data[2], this.particleTex[4 * b + 3] = pc.math.lerp(this.startAngle * pc.math.DEG_TO_RAD, this.startAngle2 * pc.math.DEG_TO_RAD, c), c = pc.math.lerp(this.rate, this.rate2, c), this.particleTex[4 * b + 3 + 4 * this.numParticlesPot] = -c * b
        },
        rebuildGraphs: function() {
            var a = this.precision,
                f = this.graphicsDevice,
                d;
            this.qLocalVelocity = this.localVelocityGraph.quantize(a);
            this.qVelocity = this.velocityGraph.quantize(a);
            this.qColor = this.colorGraph.quantize(a);
            this.qRotSpeed = this.rotationSpeedGraph.quantize(a);
            this.qScale = this.scaleGraph.quantize(a);
            this.qAlpha = this.alphaGraph.quantize(a);
            this.qLocalVelocity2 = this.localVelocityGraph2.quantize(a);
            this.qVelocity2 = this.velocityGraph2.quantize(a);
            this.qColor2 = this.colorGraph2.quantize(a);
            this.qRotSpeed2 = this.rotationSpeedGraph2.quantize(a);
            this.qScale2 = this.scaleGraph2.quantize(a);
            this.qAlpha2 = this.alphaGraph2.quantize(a);
            for (d = 0; d < a; d++) this.qRotSpeed[d] *= pc.math.DEG_TO_RAD, this.qRotSpeed2[d] *= pc.math.DEG_TO_RAD;
            this.localVelocityUMax = new pc.Vec3(0, 0, 0);
            this.velocityUMax = new pc.Vec3(0, 0, 0);
            this.colorUMax = new pc.Vec3(0, 0, 0);
            this.rotSpeedUMax = [0];
            this.scaleUMax = [0];
            this.alphaUMax = [0];
            this.qLocalVelocityDiv = e(this.qLocalVelocity, this.qLocalVelocity2, this.localVelocityUMax.data);
            this.qVelocityDiv = e(this.qVelocity, this.qVelocity2, this.velocityUMax.data);
            this.qColorDiv = e(this.qColor, this.qColor2, this.colorUMax.data);
            this.qRotSpeedDiv = e(this.qRotSpeed, this.qRotSpeed2, this.rotSpeedUMax);
            this.qScaleDiv = e(this.qScale, this.qScale2, this.scaleUMax);
            this.qAlphaDiv = e(this.qAlpha, this.qAlpha2, this.alphaUMax);
            if (this.pack8) {
                var g = [0, 0, 0];
                c(this.qVelocity, g);
                var l = [0, 0, 0];
                c(this.qVelocity2, l);
                d = [0, 0, 0];
                c(this.qLocalVelocity, d);
                var k = [0, 0, 0];
                c(this.qLocalVelocity2, k);
                var m = Math.max(g[0], l[0]),
                    m = Math.max(m, g[1]),
                    m = Math.max(m, l[1]),
                    m = Math.max(m, g[2]),
                    m = Math.max(m, l[2]),
                    g = Math.max(d[0], k[0]),
                    g = Math.max(g, d[1]),
                    g = Math.max(g, k[1]),
                    g = Math.max(g, d[2]),
                    g = Math.max(g, k[2]);
                this.maxVel = m + g
            }
            if (!this.useCpu) {
                this.internalTex0 = h(f, a, 1, b(this.qLocalVelocity, this.qLocalVelocityDiv));
                this.internalTex1 = h(f, a, 1, b(this.qVelocity, this.qVelocityDiv));
                d = this.qRotSpeed;
                for (var k = this.qScale, m = this.qScaleDiv, g = this.qRotSpeedDiv, l = this.qAlphaDiv, p = Array(4 * d.length), n = 0; n < d.length; n++) p[4 * n] = d[n], p[4 * n + 1] = k[n], p[4 * n + 2] = 0, p[4 * n + 3] = (255 * m[n] << 16 | 255 * g[n] << 8 | 255 * l[n]) / 16777216;
                this.internalTex2 = h(f, a, 1, p)
            }
            d = this.qColor;
            k = this.qAlpha;
            m = Array(4 * k.length);
            for (g = 0; g < k.length; g++) m[4 * g] = d[3 * g], m[4 * g + 1] = d[3 * g + 1], m[4 * g + 2] = d[3 * g + 2], m[4 * g + 3] = k[g];
            this.internalTex3 = h(f, a, 1, m, pc.PIXELFORMAT_R8_G8_B8_A8, 1, !0)
        },
        _initializeTextures: function() { this.colorMap && (this.material.setParameter("colorMap", this.colorMap), this.lighting && this.normalMap && this.material.setParameter("normalMap", this.normalMap)) },
        regenShader: function() {
            var a = this.graphicsDevice.getProgramLibrary(),
                b = null !== this.normalMap;
            this.normalOption = 0;
            this.lighting && (this.normalOption = b ? 2 : 1);
            this.material.updateShader = function() {
                this.emitter.scene && this.emitter.camera != this.emitter.scene._activeCamera && (this.emitter.camera = this.emitter.scene._activeCamera, this.emitter.onChangeCamera());
                var b = a.getProgram("particle", { useCpu: this.emitter.useCpu, normal: this.emitter.normalOption, halflambert: this.emitter.halfLambert, stretch: this.emitter.stretch, alignToMotion: this.emitter.alignToMotion, soft: this.emitter.depthSoftening, mesh: this.emitter.useMesh, gamma: this.emitter.scene ? this.emitter.scene.gammaCorrection : 0, toneMap: this.emitter.scene ? this.emitter.scene.toneMapping : 0, fog: this.emitter.scene && !this.emitter.noFog ? this.emitter.scene.fog : "none", wrap: this.emitter.wrap && this.emitter.wrapBounds, blend: this.blendType, animTex: this.emitter._isAnimated(), animTexLoop: this.emitter.animLoop, pack8: this.emitter.pack8 });
                this.setShader(b)
            };
            this.material.updateShader()
        },
        resetMaterial: function() {
            var a = this.material;
            a.setParameter("stretch", this.stretch);
            this._isAnimated() && a.setParameter("animTexParams", this.animParams.data);
            a.setParameter("colorMult", this.intensity);
            this.useCpu || (a.setParameter("internalTex0", this.internalTex0), a.setParameter("internalTex1", this.internalTex1), a.setParameter("internalTex2", this.internalTex2));
            a.setParameter("internalTex3", this.internalTex3);
            a.setParameter("numParticles", this.numParticles);
            a.setParameter("numParticlesPot", this.numParticlesPot);
            a.setParameter("lifetime", this.lifetime);
            a.setParameter("rate", this.rate);
            a.setParameter("rateDiv", this.rate2 - this.rate);
            a.setParameter("seed", this.seed);
            a.setParameter("scaleDivMult", this.scaleUMax[0]);
            a.setParameter("alphaDivMult", this.alphaUMax[0]);
            a.setParameter("graphNumSamples", this.precision);
            a.setParameter("graphSampleSize", 1 / this.precision);
            a.setParameter("emitterScale", pc.Vec3.ONE.data);
            this.pack8 && (a.setParameter("inBoundsSize", this.worldBoundsSize.data), a.setParameter("inBoundsCenter", this.worldBounds.center.data), a.setParameter("maxVel", this.maxVel));
            this.wrap && this.wrapBounds && a.setParameter("wrapBounds", this.wrapBounds.data);
            this.colorMap && a.setParameter("colorMap", this.colorMap);
            this.lighting && this.normalMap && a.setParameter("normalMap", this.normalMap);
            0 < this.depthSoftening && a.setParameter("softening", 1 / (this.depthSoftening * this.depthSoftening * 100));
            0 < this.stretch && (a.cull = pc.CULLFACE_NONE)
        },
        _allocate: function(a) {
            var b = a * this.numParticleVerts,
                c = a * this.numParticleIndices,
                e;
            if (void 0 === this.vertexBuffer || this.vertexBuffer.getNumVertices() !== b) {
                e = this.useCpu ? [{ semantic: pc.SEMANTIC_ATTR0, components: 4, type: pc.ELEMENTTYPE_FLOAT32 }, { semantic: pc.SEMANTIC_ATTR1, components: 4, type: pc.ELEMENTTYPE_FLOAT32 }, { semantic: pc.SEMANTIC_ATTR2, components: 4, type: pc.ELEMENTTYPE_FLOAT32 }, { semantic: pc.SEMANTIC_ATTR3, components: 2, type: pc.ELEMENTTYPE_FLOAT32 }] : [{ semantic: pc.SEMANTIC_ATTR0, components: 4, type: pc.ELEMENTTYPE_FLOAT32 }];
                e = new pc.VertexFormat(this.graphicsDevice, e);
                this.vertexBuffer = new pc.VertexBuffer(this.graphicsDevice, e, b, pc.BUFFER_DYNAMIC);
                this.indexBuffer = new pc.IndexBuffer(this.graphicsDevice, pc.INDEXFORMAT_UINT16, c);
                e = new Float32Array(this.vertexBuffer.lock());
                var f, d;
                this.useMesh && (f = new Float32Array(this.mesh.vertexBuffer.lock()), d = f.length / this.mesh.vertexBuffer.numVertices);
                for (var h, c = 0; c < b; c++) {
                    h = Math.floor(c / this.numParticleVerts);
                    if (this.useMesh) {
                        var l = c % this.numParticleVerts;
                        e[4 * c] = f[l * d];
                        e[4 * c + 1] = f[l * d + 1];
                        e[4 * c + 2] = f[l * d + 2]
                    } else l = c % 4, e[4 * c] = g[l][0], e[4 * c + 1] = g[l][1], e[4 * c + 2] = 0;
                    e[4 * c + 3] = h
                }
                this.useCpu && (this.vbCPU = new Float32Array(e), this.vbOld = new Float32Array(this.vbCPU.length));
                this.vertexBuffer.unlock();
                this.useMesh && this.mesh.vertexBuffer.unlock();
                b = 0;
                d = new Uint16Array(this.indexBuffer.lock());
                this.useMesh && (f = new Uint16Array(this.mesh.indexBuffer[0].lock()));
                for (c = 0; c < a; c++)
                    if (this.useMesh)
                        for (e = 0; e < this.numParticleIndices; e++) d[c * this.numParticleIndices + e] = f[e] + c * this.numParticleVerts;
                    else e = 4 * c, d[b++] = e, d[b++] = e + 1, d[b++] = e + 2, d[b++] = e, d[b++] = e + 2, d[b++] = e + 3;
                this.indexBuffer.unlock();
                this.useMesh && this.mesh.indexBuffer[0].unlock()
            }
        },
        reset: function() {
            this.beenReset = !0;
            this.seed = Math.random();
            this.material.setParameter("seed", this.seed);
            if (this.useCpu)
                for (var a = 0; a < this.particleTexStart.length; a++) this.particleTex[a] = this.particleTexStart[a];
            else this._initializeTextures();
            this.resetTime();
            a = this.loop;
            this.loop = !0;
            this.addTime(0);
            this.loop = a;
            this.preWarm && this.prewarm(this.lifetime)
        },
        prewarm: function(a) {
            var b = Math.min(Math.floor(a / this.lifetime * this.precision), this.precision);
            a /= b;
            for (var c = 0; c < b; c++) this.addTime(a)
        },
        resetTime: function() {
            var a = Math.max(this.rate, this.rate2) * this.numParticles + this.lifetime;
            this.endTime = Date.now() + 1E3 * a
        },
        onEnableDepth: function() { 0 < this.depthSoftening && this.camera && this.camera.requestDepthMap() },
        onDisableDepth: function() { 0 < this.depthSoftening && this.camera && this.camera.releaseDepthMap() },
        finishFrame: function() { this.useCpu && this.vertexBuffer.unlock() },
        addTime: function(a, b) {
            var c, e, g = this.graphicsDevice;
            this.simTimeTotal += a;
            this.calculateWorldBounds();
            this._isAnimated() && (c = this.animParams, c.x = 1 / this.animTilesX, c.y = 1 / this.animTilesY, c.z = this.animNumFrames * this.animSpeed, c.w = this.animNumFrames - 1);
            if (this.lighting) {
                if (!this.scene) { console.error("There is no scene defined for lighting particles"); return }
                for (c = 0; 6 > c; c++) this.lightCube[3 * c] = this.scene.ambientLight.r, this.lightCube[3 * c + 1] = this.scene.ambientLight.g, this.lightCube[3 * c + 2] = this.scene.ambientLight.b;
                e = this.scene._globalLights;
                for (c = 0; c < e.length; c++)
                    for (var h = 0; 6 > h; h++) {
                        var l = Math.max(this.lightCubeDir[h].dot(e[c]._direction), 0) * e[c]._intensity;
                        this.lightCube[3 * h] += e[c]._color.r * l;
                        this.lightCube[3 * h + 1] += e[c]._color.g * l;
                        this.lightCube[3 * h + 2] += e[c]._color.b * l
                    }
                this.constantLightCube.setValue(this.lightCube)
            }
            this.scene && this.camera != this.scene._activeCamera && (this.camera = this.scene._activeCamera, this.onChangeCamera());
            this.emitterShape === pc.EMITTERSHAPE_BOX && (null === this.meshInstance.node ? M.setTRS(pc.Vec3.ZERO, pc.Quat.IDENTITY, this.emitterExtents) : M.setTRS(pc.Vec3.ZERO, this.meshInstance.node.getRotation(), X.copy(this.emitterExtents).mul(this.meshInstance.node.getLocalScale())));
            c = null === this.meshInstance.node ? pc.Vec3.ONE.data : this.meshInstance.node.getLocalScale().data;
            this.material.setParameter("emitterScale", c);
            if (this.useCpu) {
                g = new Float32Array(this.vertexBuffer.lock());
                if (this.meshInstance.node) {
                    c = this.meshInstance.node.worldTransform;
                    for (e = 0; 12 > e; e++) B.data[e] = c.data[e];
                    K = this.meshInstance.node.getLocalScale();
                    O = Math.max(Math.max(K.x, K.y), K.z)
                }
                e = null === this.meshInstance.node ? pc.Vec3.ZERO : this.meshInstance.node.getPosition();
                var l = this.camera ? this.camera._node.getPosition() : pc.Vec3.ZERO,
                    k, m, p, q, r, G, D, ya, Q, da = this.precision - 1;
                for (c = 0; c < this.numParticles; c++) {
                    var U = Math.floor(this.vbCPU[c * this.numParticleVerts * 4 + 3]),
                        ja = this.particleTex[4 * U + 0 + 8 * this.numParticlesPot];
                    x.data[0] = ja;
                    x.data[1] = this.particleTex[4 * U + 1 + 8 * this.numParticlesPot];
                    x.data[2] = this.particleTex[4 * U + 2 + 8 * this.numParticlesPot];
                    var ba = this.rate + (this.rate2 - this.rate) * ja,
                        ka = this.lifetime,
                        S = this.particleTex[4 * U + 3 + 4 * this.numParticlesPot] + a,
                        Y = Math.max(Math.min(S / ka, 1), 0),
                        R = 0,
                        h = 0,
                        ga = 0 < S && S < ka;
                    ga ? (h = Y * da, p = Math.floor(h), q = Math.ceil(h), h %= 1, k = this.qRotSpeed[p], m = this.qRotSpeed[q], r = k + (m - k) * h, k = this.qRotSpeed2[p], m = this.qRotSpeed2[q], G = k + (m - k) * h, k = this.qScale[p], m = this.qScale[q], R = k + (m - k) * h, k = this.qScale2[p], m = this.qScale2[q], D = k + (m - k) * h, k = this.qAlpha[p], m = this.qAlpha[q], ya = k + (m - k) * h, k = this.qAlpha2[p], m = this.qAlpha2[q], Q = k + (m - k) * h, p *= 3, q *= 3, k = this.qLocalVelocity[p], m = this.qLocalVelocity[q], t.data[0] = k + (m - k) * h, k = this.qLocalVelocity[p + 1], m = this.qLocalVelocity[q + 1], t.data[1] = k + (m - k) * h, k = this.qLocalVelocity[p + 2], m = this.qLocalVelocity[q +
                        2], t.data[2] = k + (m - k) * h, k = this.qLocalVelocity2[p], m = this.qLocalVelocity2[q], y.data[0] = k + (m - k) * h, k = this.qLocalVelocity2[p + 1], m = this.qLocalVelocity2[q + 1], y.data[1] = k + (m - k) * h, k = this.qLocalVelocity2[p + 2], m = this.qLocalVelocity2[q + 2], y.data[2] = k + (m - k) * h, k = this.qVelocity[p], m = this.qVelocity[q], n.data[0] = k + (m - k) * h, k = this.qVelocity[p + 1], m = this.qVelocity[q + 1], n.data[1] = k + (m - k) * h, k = this.qVelocity[p + 2], m = this.qVelocity[q + 2], n.data[2] = k + (m - k) * h, k = this.qVelocity2[p], m = this.qVelocity2[q], w.data[0] = k + (m - k) * h, k = this.qVelocity2[p +
                        1], m = this.qVelocity2[q + 1], w.data[1] = k + (m - k) * h, k = this.qVelocity2[p + 2], m = this.qVelocity2[q + 2], w.data[2] = k + (m - k) * h, t.data[0] += (y.data[0] - t.data[0]) * x.data[0], t.data[1] += (y.data[1] - t.data[1]) * x.data[1], t.data[2] += (y.data[2] - t.data[2]) * x.data[2], 0 < this.initialVelocity && (this.emitterShape === pc.EMITTERSHAPE_SPHERE ? (H.copy(x).scale(2).sub(pc.Vec3.ONE).normalize(), t.add(H.scale(this.initialVelocity))) : t.add(pc.Vec3.FORWARD.scale(this.initialVelocity))), n.data[0] += (w.data[0] - n.data[0]) * x.data[0], n.data[1] += (w.data[1] - n.data[1]) * x.data[1], n.data[2] += (w.data[2] - n.data[2]) * x.data[2], r += (G - r) * x.data[1], R = (R + 1E4 * ja % 1 * (D - R)) * O, h = 1E3 * ja % 1 * (Q - ya), this.meshInstance.node && B.transformPoint(t, t), t.add(n.mul(K)), A.copy(t), v.data[0] = this.particleTex[4 * U], v.data[1] = this.particleTex[4 * U + 1], v.data[2] = this.particleTex[4 * U + 2], z.copy(v).add(t.scale(a)), u.copy(z), this.particleTex[4 * U] = u.data[0], this.particleTex[4 * U + 1] = u.data[1], this.particleTex[4 * U + 2] = u.data[2], this.particleTex[4 * U + 3] += r * a, this.wrap && this.wrapBounds && (u.sub(e), u.data[0] = d(u.data[0], this.wrapBounds.data[0]) - .5 * this.wrapBounds.data[0], u.data[1] = d(u.data[1], this.wrapBounds.data[1]) - .5 * this.wrapBounds.data[1], u.data[2] = d(u.data[2], this.wrapBounds.data[2]) - .5 * this.wrapBounds.data[2], u.add(e)), 0 < this.sort && (1 === this.sort ? (X.copy(u).sub(l), this.particleDistance[U] = -(X.data[0] * X.data[0] + X.data[1] * X.data[1] + X.data[2] * X.data[2])) : 2 === this.sort ? this.particleDistance[U] = S : 3 === this.sort && (this.particleDistance[U] = -S))) : this.calcSpawnPosition(e, U);
                    b ? 0 > S && (this.particleTex[4 * U + 3 + 8 * this.numParticlesPot] = -1) : (S >= ka && (S -= Math.max(ka, (this.numParticles - 1) * ba), this.particleTex[4 * U + 3 + 8 * this.numParticlesPot] = this.loop ? 1 : -1), 0 > S && this.loop && (this.particleTex[4 * U + 3 + 8 * this.numParticlesPot] = 1));
                    0 > this.particleTex[4 * U + 3 + 8 * this.numParticlesPot] && (ga = !1);
                    this.particleTex[4 * U + 3 + 4 * this.numParticlesPot] = S;
                    for (r = 0; r < this.numParticleVerts; r++) ja = this.vbCPU[c * this.numParticleVerts * 4 + 4 * r], ba = this.vbCPU[c * this.numParticleVerts * 4 + 4 * r + 1], ka = this.vbCPU[c * this.numParticleVerts * 4 + 4 * r + 2], ga || (ja = ba = ka = 0), S = c * this.numParticleVerts * 14 + 14 * r, g[S] = u.data[0], g[S + 1] = u.data[1], g[S + 2] = u.data[2], g[S + 3] = Y, g[S + 4] = this.alignToMotion ? 0 : this.particleTex[4 * U + 3], g[S + 5] = R, g[S + 6] = h, g[S + 7] = A.data[0], g[S + 8] = ja, g[S + 9] = ba, g[S + 10] = ka, g[S + 11] = A.data[1], g[S + 12] = A.data[2]
                }
                if (this.sort > pc.PARTICLESORT_NONE && this.camera) {
                    for (c = 0; c < this.numParticles; c++) this.vbToSort[c] = [c, Math.floor(this.vbCPU[c * this.numParticleVerts * 4 + 3])];
                    for (c = 0; c < this.vbCPU.length; c++) this.vbOld[c] = this.vbCPU[c];
                    var Ka = this.particleDistance;
                    this.vbToSort.sort(function(a, b) { return Ka[a[1]] - Ka[b[1]] });
                    for (c = 0; c < this.numParticles; c++)
                        for (g = this.vbToSort[c][0], l = 0; l < this.numParticleVerts; l++)
                            for (e = 0; 4 > e; e++) this.vbCPU[c * this.numParticleVerts * 4 + 4 * l + e] = this.vbOld[g * this.numParticleVerts * 4 + 4 * l + e]
                }
            } else g.setBlending(!1), g.setColorWrite(!0, !0, !0, !0), g.setCullMode(pc.CULLFACE_NONE), g.setDepthTest(!1), g.setDepthWrite(!1), this.frameRandom.x = Math.random(), this.frameRandom.y = Math.random(), this.frameRandom.z = Math.random(), this.constantGraphSampleSize.setValue(1 / this.precision), this.constantGraphNumSamples.setValue(this.precision), this.constantNumParticles.setValue(this.numParticles), this.constantNumParticlesPot.setValue(this.numParticlesPot), this.constantInternalTex0.setValue(this.internalTex0), this.constantInternalTex1.setValue(this.internalTex1), this.constantInternalTex2.setValue(this.internalTex2), this.pack8 && (this.constantOutBoundsMul.setValue(this.worldBoundsMul.data), this.constantOutBoundsAdd.setValue(this.worldBoundsAdd.data), this.constantInBoundsSize.setValue(this.prevWorldBoundsSize.data), this.constantInBoundsCenter.setValue(this.prevWorldBoundsCenter.data), e = this.maxVel * Math.max(Math.max(c[0], c[1]), c[2]), e = Math.max(e, 1), this.constantMaxVel.setValue(e)), e = null === this.meshInstance.node ? pc.Vec3.ZERO.data : this.meshInstance.node.getPosition().data, l = null === this.meshInstance.node ? pc.Mat4.IDENTITY : this.meshInstance.node.getWorldTransform(), this.emitterShape === pc.EMITTERSHAPE_BOX ? (f(M, C), this.constantSpawnBounds.setValue(C.data)) : this.constantSpawnBoundsSphere.setValue(this.emitterRadius), this.constantInitialVelocity.setValue(this.initialVelocity), f(l, E), this.constantEmitterPos.setValue(e), this.constantFrameRandom.setValue(this.frameRandom.data), this.constantDelta.setValue(a), this.constantRate.setValue(this.rate), this.constantRateDiv.setValue(this.rate2 - this.rate), this.constantStartAngle.setValue(this.startAngle * pc.math.DEG_TO_RAD), this.constantStartAngle2.setValue(this.startAngle2 * pc.math.DEG_TO_RAD), this.constantSeed.setValue(this.seed), this.constantLifetime.setValue(this.lifetime), this.constantEmitterScale.setValue(c), this.constantEmitterMatrix.setValue(E.data), this.constantLocalVelocityDivMult.setValue(this.localVelocityUMax.data), this.constantVelocityDivMult.setValue(this.velocityUMax.data), this.constantRotSpeedDivMult.setValue(this.rotSpeedUMax[0]), c = this.swapTex ? this.particleTexOUT : this.particleTexIN, c = this.beenReset ? this.particleTexStart : c, e = this.swapTex ? this.particleTexIN : this.particleTexOUT, this.constantParticleTexIN.setValue(c), b ? pc.drawQuadWithShader(g, this.swapTex ? this.rtParticleTexIN : this.rtParticleTexOUT, this.shaderParticleUpdateOnStop) : pc.drawQuadWithShader(g, this.swapTex ? this.rtParticleTexIN : this.rtParticleTexOUT, this.loop ? this.shaderParticleUpdateRespawn : this.shaderParticleUpdateNoRespawn), this.constantParticleTexOUT.setValue(e), this.material.setParameter("particleTexOUT", c), this.material.setParameter("particleTexIN", e), this.beenReset = !1, this.swapTex = !this.swapTex, g.setDepthTest(!0), g.setDepthWrite(!0);
            if (!this.loop && Date.now() > this.endTime) {
                if (this.onFinished) this.onFinished();
                this.meshInstance.visible = !1
            }
        }
    };
    return { ParticleEmitter: Q }
}());

function frac(d) { return d - Math.floor(d) }

function encodeFloatRGBA(d) {
    var a = frac(d),
        b = frac(255 * d),
        c = frac(65025 * d);
    d = frac(160581375 * d);
    a -= b / 255;
    b -= c / 255;
    return [a, b, c - d / 255, d - d / 255]
}

function encodeFloatRG(d) {
    var a = frac(d);
    d = frac(255 * d);
    return [a - d / 255, d - d / 255]
};
pc.extend(pc, function() {
    function d(a, c) { return c.key - a.key }
    var a = function(a, c, e) {
        this.device = a;
        a = a.getProgramLibrary();
        this.pickProgStatic = a.getProgram("pick", { skin: !1 });
        this.pickProgSkin = a.getProgram("pick", { skin: !0 });
        this.pickColor = new Float32Array(4);
        this.scene = null;
        this.drawCalls = [];
        this.clearOptions = { color: [1, 1, 1, 1], depth: 1, flags: pc.CLEARFLAG_COLOR | pc.CLEARFLAG_DEPTH };
        this.resize(c, e)
    };
    a.prototype.getSelection = function(a) {
        var c = this.device;
        a.width = a.width || 1;
        a.height = a.height || 1;
        var e = c.getRenderTarget();
        c.setRenderTarget(this._pickBufferTarget);
        c.updateBegin();
        var f = new Uint8Array(4 * a.width * a.height);
        c.readPixels(a.x, a.y, a.width, a.height, f);
        c.updateEnd();
        c.setRenderTarget(e);
        c = [];
        for (e = 0; e < a.width * a.height; e++) {
            var d = f[4 * e + 0] << 16 | f[4 * e + 1] << 8 | f[4 * e + 2];
            16777215 !== d && (d = this.drawCalls[d], -1 === c.indexOf(d) && c.push(d))
        }
        return c
    };
    a.prototype.prepare = function(a, c) {
        var e = this.device;
        this.scene = c;
        var f = e.getRenderTarget();
        e.setRenderTarget(this._pickBufferTarget);
        e.updateBegin();
        e.setViewport(0, 0, this._pickBufferTarget.width, this._pickBufferTarget.height);
        e.setScissor(0, 0, this._pickBufferTarget.width, this._pickBufferTarget.height);
        e.clear(this.clearOptions);
        var g, h, m, l, p;
        h = e.scope;
        var k = h.resolve("matrix_model"),
            q = h.resolve("texture_poseMap"),
            r = h.resolve("texture_poseMapSize"),
            n = h.resolve("skinPosOffset"),
            t = h.resolve("matrix_pose[0]"),
            w = h.resolve("uColor");
        g = h.resolve("matrix_projection");
        h = h.resolve("matrix_viewProjection");
        l = a._node.getWorldTransform();
        m = a.getProjectionMatrix();
        l = l.clone().invert();
        p = new pc.Mat4;
        p.mul2(m, l);
        g.setValue(m.data);
        h.setValue(p.data);
        this.drawCalls = c.drawCalls.slice(0);
        this.drawCalls.sort(d);
        for (g = 0; g < this.drawCalls.length; g++)
            if (this.drawCalls[g].command) this.drawCalls[g].command();
            else if (this.drawCalls[g].pick) {
            m = this.drawCalls[g];
            h = m.mesh;
            l = m.material;
            p = h.primitive[pc.RENDERSTYLE_SOLID].type;
            var y = l instanceof pc.StandardMaterial || l instanceof pc.BasicMaterial;
            p !== pc.PRIMITIVE_TRIANGLES && p !== pc.PRIMITIVE_TRISTRIP && p !== pc.PRIMITIVE_TRIFAN || !y || (e.setBlending(!1), e.setCullMode(l.cull), e.setDepthWrite(l.depthWrite), e.setDepthTest(l.depthTest), k.setValue(m.node.worldTransform.data), m.skinInstance && (n.setValue(m.node.getPosition().data), e.supportsBoneTextures ? (q.setValue(m.skinInstance.boneTexture), r.setValue([m.skinInstance.boneTexture.width, m.skinInstance.boneTexture.height])) : t.setValue(m.skinInstance.matrixPalette)), this.pickColor[0] = (g >> 16 & 255) / 255, this.pickColor[1] = (g >> 8 & 255) / 255, this.pickColor[2] = (g & 255) / 255, this.pickColor[3] = 1, w.setValue(this.pickColor), e.setShader(h.skin ? this.pickProgSkin : this.pickProgStatic), e.setVertexBuffer(h.vertexBuffer, 0), e.setIndexBuffer(h.indexBuffer[pc.RENDERSTYLE_SOLID]), e.draw(h.primitive[pc.RENDERSTYLE_SOLID]))
        }
        e.setViewport(0, 0, e.width, e.height);
        e.setScissor(0, 0, e.width, e.height);
        e.updateEnd();
        e.setRenderTarget(f)
    };
    a.prototype.resize = function(a, c) {
        var e = new pc.Texture(this.device, { format: pc.PIXELFORMAT_R8_G8_B8_A8, width: a, height: c, autoMipmap: !1 });
        e.minFilter = pc.FILTER_NEAREST;
        e.magFilter = pc.FILTER_NEAREST;
        e.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
        e.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
        this._pickBufferTarget = new pc.RenderTarget(this.device, e, { depth: !0 })
    };
    Object.defineProperty(a.prototype, "renderTarget", { get: function() { return this._pickBufferTarget } });
    Object.defineProperty(a.prototype, "width", { get: function() { return this._pickBufferTarget.width } });
    Object.defineProperty(a.prototype, "height", { get: function() { return this._pickBufferTarget.height } });
    return { Picker: a }
}());
var primitiveUv1Padding = .0625,
    primitiveUv1PaddingScale = 1 - 2 * primitiveUv1Padding;
pc.calculateNormals = function(d, a) {
    var b = a.length / 3,
        c = d.length / 3,
        e, f, g, h, m = new pc.Vec3,
        l = new pc.Vec3,
        p = new pc.Vec3,
        k = new pc.Vec3,
        q = new pc.Vec3,
        r = new pc.Vec3;
    new pc.Vec3;
    var n = [];
    for (h = 0; h < d.length; h++) n[h] = 0;
    for (h = 0; h < b; h++) e = a[3 * h], f = a[3 * h + 1], g = a[3 * h + 2], m.set(d[3 * e], d[3 * e + 1], d[3 * e + 2]), l.set(d[3 * f], d[3 * f + 1], d[3 * f + 2]), p.set(d[3 * g], d[3 * g + 1], d[3 * g + 2]), k.sub2(l, m), q.sub2(p, m), r.cross(k, q).normalize(), n[3 * e] += r.x, n[3 * e + 1] += r.y, n[3 * e + 2] += r.z, n[3 * f] += r.x, n[3 * f + 1] += r.y, n[3 * f + 2] += r.z, n[3 * g] += r.x, n[3 * g + 1] += r.y, n[3 * g + 2] += r.z;
    for (h = 0; h < c; h++) b = n[3 * h], e = n[3 * h + 1], f = n[3 * h + 2], b = 1 / Math.sqrt(b * b + e * e + f * f), n[3 * h] *= b, n[3 * h + 1] *= b, n[3 * h + 2] *= b;
    return n
};
pc.calculateTangents = function(d, a, b, c) {
    var e = c.length / 3,
        f = d.length / 3,
        g, h, m, l, p, k, q, r, n, t, w, y, x, v, z = new pc.Vec3,
        u = new pc.Vec3,
        A = new pc.Vec3,
        B = new pc.Vec3,
        C = new pc.Vec3,
        E = new pc.Vec2,
        O = new pc.Vec2,
        K = new pc.Vec2,
        M, H = new Float32Array(3 * f),
        D = new Float32Array(3 * f),
        X = [];
    for (M = 0; M < e; M++) g = c[3 * M], h = c[3 * M + 1], m = c[3 * M + 2], A.set(d[3 * g], d[3 * g + 1], d[3 * g + 2]), B.set(d[3 * h], d[3 * h + 1], d[3 * h + 2]), C.set(d[3 * m], d[3 * m + 1], d[3 * m + 2]), E.set(b[2 * g], b[2 * g + 1]), O.set(b[2 * h], b[2 * h + 1]), K.set(b[2 * m], b[2 * m + 1]), l = B.x - A.x, p = C.x - A.x, k = B.y -
        A.y, q = C.y - A.y, r = B.z - A.z, n = C.z - A.z, t = O.x - E.x, w = K.x - E.x, y = O.y - E.y, x = K.y - E.y, v = 1 / (t * x - w * y), z.set((x * l - y * p) * v, (x * k - y * q) * v, (x * r - y * n) * v), u.set((t * p - w * l) * v, (t * q - w * k) * v, (t * n - w * r) * v), H[3 * g + 0] += z.x, H[3 * g + 1] += z.y, H[3 * g + 2] += z.z, H[3 * h + 0] += z.x, H[3 * h + 1] += z.y, H[3 * h + 2] += z.z, H[3 * m + 0] += z.x, H[3 * m + 1] += z.y, H[3 * m + 2] += z.z, D[3 * g + 0] += u.x, D[3 * g + 1] += u.y, D[3 * g + 2] += u.z, D[3 * h + 0] += u.x, D[3 * h + 1] += u.y, D[3 * h + 2] += u.z, D[3 * m + 0] += u.x, D[3 * m + 1] += u.y, D[3 * m + 2] += u.z;
    y = new pc.Vec3;
    x = new pc.Vec3;
    d = new pc.Vec3;
    b = new pc.Vec3;
    for (M = 0; M < f; M++) d.set(a[3 * M], a[3 * M + 1], a[3 * M + 2]), y.set(H[3 * M], H[3 * M + 1], H[3 * M + 2]), x.set(D[3 * M], D[3 * M + 1], D[3 * M + 2]), c = d.dot(y), b.copy(d).scale(c), b.sub2(y, b).normalize(), X[4 * M] = b.x, X[4 * M + 1] = b.y, X[4 * M + 2] = b.z, b.cross(d, y), X[4 * M + 3] = 0 > b.dot(x) ? -1 : 1;
    return X
};
pc.createMesh = function(d, a, b) {
    var c = b && void 0 !== b.normals ? b.normals : null,
        e = b && void 0 !== b.tangents ? b.tangents : null,
        f = b && void 0 !== b.colors ? b.colors : null,
        g = b && void 0 !== b.uvs ? b.uvs : null,
        h = b && void 0 !== b.uvs1 ? b.uvs1 : null;
    b = b && void 0 !== b.indices ? b.indices : null;
    var m = [{ semantic: pc.SEMANTIC_POSITION, components: 3, type: pc.ELEMENTTYPE_FLOAT32 }];
    null !== c && m.push({ semantic: pc.SEMANTIC_NORMAL, components: 3, type: pc.ELEMENTTYPE_FLOAT32 });
    null !== e && m.push({ semantic: pc.SEMANTIC_TANGENT, components: 4, type: pc.ELEMENTTYPE_FLOAT32 });
    null !== f && m.push({ semantic: pc.SEMANTIC_COLOR, components: 4, type: pc.ELEMENTTYPE_UINT8, normalize: !0 });
    null !== g && m.push({ semantic: pc.SEMANTIC_TEXCOORD0, components: 2, type: pc.ELEMENTTYPE_FLOAT32 });
    null !== h && m.push({ semantic: pc.SEMANTIC_TEXCOORD1, components: 2, type: pc.ELEMENTTYPE_FLOAT32 });
    for (var l = new pc.VertexFormat(d, m), m = a.length / 3, l = new pc.VertexBuffer(d, l, m), p = new pc.VertexIterator(l), k = 0; k < m; k++) p.element[pc.SEMANTIC_POSITION].set(a[3 * k], a[3 * k + 1], a[3 * k + 2]), null !== c && p.element[pc.SEMANTIC_NORMAL].set(c[3 * k], c[3 * k + 1], c[3 * k + 2]), null !== e && p.element[pc.SEMANTIC_TANGENT].set(e[4 * k], e[4 * k + 1], e[4 * k + 2], e[4 * k + 3]), null !== f && p.element[pc.SEMANTIC_COLOR].set(f[4 * k], f[4 * k + 1], f[4 * k + 2], f[4 * k + 3]), null !== g && p.element[pc.SEMANTIC_TEXCOORD0].set(g[2 * k], g[2 * k + 1]), null !== h && p.element[pc.SEMANTIC_TEXCOORD1].set(h[2 * k], h[2 * k + 1]), p.next();
    p.end();
    c = null;
    if (e = null !== b) c = new pc.IndexBuffer(d, pc.INDEXFORMAT_UINT16, b.length), (new Uint16Array(c.lock())).set(b), c.unlock();
    d = new pc.BoundingBox;
    d.compute(a);
    a = new pc.Mesh;
    a.vertexBuffer = l;
    a.indexBuffer[0] = c;
    a.primitive[0].type = pc.PRIMITIVE_TRIANGLES;
    a.primitive[0].base = 0;
    a.primitive[0].count = e ? b.length : m;
    a.primitive[0].indexed = e;
    a.aabb = d;
    return a
};
pc.createTorus = function(d, a) {
    var b = a && void 0 !== a.tubeRadius ? a.tubeRadius : .2,
        c = a && void 0 !== a.ringRadius ? a.ringRadius : .3,
        e = a && void 0 !== a.segments ? a.segments : 30,
        f = a && void 0 !== a.sides ? a.sides : 20,
        g, h, m, l, p, k, q, r, n, t, w = [],
        y = [],
        x = [],
        v = [];
    for (g = 0; g <= f; g++)
        for (h = 0; h <= e; h++) m = Math.cos(2 * Math.PI * h / e) * (c + b * Math.cos(2 * Math.PI * g / f)), l = Math.sin(2 * Math.PI * g / f) * b, p = Math.sin(2 * Math.PI * h / e) * (c + b * Math.cos(2 * Math.PI * g / f)), k = Math.cos(2 * Math.PI * h / e) * Math.cos(2 * Math.PI * g / f), q = Math.sin(2 * Math.PI * g / f), r = Math.sin(2 * Math.PI * h / e) * Math.cos(2 * Math.PI * g / f), n = g / f, t = 1 - h / e, w.push(m, l, p), y.push(k, q, r), x.push(n, t), g < f && h < e && (m = g * (e + 1) + h, l = (g + 1) * (e + 1) + h, p = g * (e + 1) + (h + 1), k = (g + 1) * (e + 1) + (h + 1), v.push(m, l, p), v.push(l, k, p));
    b = { normals: y, uvs: x, indices: v };
    pc.precalculatedTangents && (b.tangents = pc.calculateTangents(w, y, x, v));
    return pc.createMesh(d, w, b)
};
pc._createConeData = function(d, a, b, c, e, f) {
    var g, h, m, l, p, k = new pc.Vec3,
        q = new pc.Vec3;
    m = new pc.Vec3;
    var r, n = [],
        t = [],
        w = [],
        y = [],
        x = [],
        v;
    if (0 < b)
        for (g = 0; g <= c; g++)
            for (h = 0; h <= e; h++) v = h / e * 2 * Math.PI - Math.PI, r = Math.sin(v), v = Math.cos(v), p = new pc.Vec3(r * d, -b / 2, v * d), l = new pc.Vec3(r * a, b / 2, v * a), k.lerp(p, l, g / c), q.sub2(l, p).normalize(), r = new pc.Vec3(v, 0, -r), m.cross(r, q).normalize(), n.push(k.x, k.y, k.z), t.push(m.x, m.y, m.z), l = h / e, p = g / c, w.push(l, p), r = p, p = l, l = r, l /= 3, l = l * primitiveUv1PaddingScale + primitiveUv1Padding, p = p * primitiveUv1PaddingScale +
                primitiveUv1Padding, y.push(l, p), g < c && h < e && (r = g * (e + 1) + h, v = g * (e + 1) + (h + 1), l = (g + 1) * (e + 1) + h, p = (g + 1) * (e + 1) + (h + 1), x.push(r, v, l), x.push(v, p, l));
    if (f) {
        d = Math.floor(e / 2);
        g = b / 2;
        for (b = 0; b <= d; b++)
            for (v = b * Math.PI * .5 / d, r = Math.sin(v), v = Math.cos(v), k = 0; k <= e; k++) f = 2 * k * Math.PI / e - Math.PI / 2, l = Math.sin(f), f = Math.cos(f), f *= r, h = v, m = l * r, l = 1 - k / e, p = 1 - b / d, n.push(f * a, h * a + g, m * a), t.push(f, h, m), w.push(l, p), l /= 3, p /= 3, l = l * primitiveUv1PaddingScale + primitiveUv1Padding, p = p * primitiveUv1PaddingScale + primitiveUv1Padding, l += 1 / 3, y.push(l, p);
        q = (c + 1) * (e + 1);
        for (b = 0; b < d; ++b)
            for (k = 0; k < e; ++k) r = b * (e + 1) + k, v = r + e + 1, x.push(q + r + 1, q + v, q + r), x.push(q + r + 1, q + v + 1, q + v);
        for (b = 0; b <= d; b++)
            for (v = .5 * Math.PI + b * Math.PI * .5 / d, r = Math.sin(v), v = Math.cos(v), k = 0; k <= e; k++) f = 2 * k * Math.PI / e - Math.PI / 2, l = Math.sin(f), f = Math.cos(f), f *= r, h = v, m = l * r, l = 1 - k / e, p = 1 - b / d, n.push(f * a, h * a - g, m * a), t.push(f, h, m), w.push(l, p), l /= 3, p /= 3, l = l * primitiveUv1PaddingScale + primitiveUv1Padding, p = p * primitiveUv1PaddingScale + primitiveUv1Padding, l += 2 / 3, y.push(l, p);
        q = (c + 1) * (e + 1) + (e + 1) * (d + 1);
        for (b = 0; b < d; ++b)
            for (k = 0; k < e; ++k) r = b * (e + 1) + k, v = r + e + 1, x.push(q + r + 1, q + v, q + r), x.push(q + r + 1, q + v + 1, q + v)
    } else {
        q = (c + 1) * (e + 1);
        if (0 < d)
            for (g = 0; g < e; g++) v = g / e * 2 * Math.PI, f = Math.sin(v), h = -b / 2, m = Math.cos(v), l = 1 - (f + 1) / 2, p = (m + 1) / 2, n.push(f * d, h, m * d), t.push(0, -1, 0), w.push(l, p), l /= 3, p /= 3, l = l * primitiveUv1PaddingScale + primitiveUv1Padding, p = p * primitiveUv1PaddingScale + primitiveUv1Padding, l += 1 / 3, y.push(l, p), 1 < g && x.push(q, q + g, q + g - 1);
        q += e;
        if (0 < a)
            for (g = 0; g < e; g++) v = g / e * 2 * Math.PI, f = Math.sin(v), h = b / 2, m = Math.cos(v), l = 1 - (f + 1) / 2, p = (m + 1) / 2, n.push(f * a, h, m * a), t.push(0, 1, 0), w.push(l, p), l /= 3, p /= 3, l = l * primitiveUv1PaddingScale + primitiveUv1Padding, p = p * primitiveUv1PaddingScale + primitiveUv1Padding, l += 2 / 3, y.push(l, p), 1 < g && x.push(q, q + g - 1, q + g)
    }
    return { positions: n, normals: t, uvs: w, uvs1: y, indices: x }
};
pc.createCylinder = function(d, a) {
    var b = a && void 0 !== a.baseRadius ? a.baseRadius : .5,
        b = pc._createConeData(b, b, a && void 0 !== a.height ? a.height : 1, a && void 0 !== a.heightSegments ? a.heightSegments : 5, a && void 0 !== a.capSegments ? a.capSegments : 20, !1);
    pc.precalculatedTangents && (b.tangents = pc.calculateTangents(b.positions, b.normals, b.uvs, b.indices));
    return pc.createMesh(d, b.positions, b)
};
pc.createCapsule = function(d, a) {
    var b = a && void 0 !== a.radius ? a.radius : .3,
        b = pc._createConeData(b, b, (a && void 0 !== a.height ? a.height : 1) - 2 * b, a && void 0 !== a.heightSegments ? a.heightSegments : 1, a && void 0 !== a.sides ? a.sides : 20, !0);
    pc.precalculatedTangents && (b.tangents = pc.calculateTangents(b.positions, b.normals, b.uvs, b.indices));
    return pc.createMesh(d, b.positions, b)
};
pc.createCone = function(d, a) {
    var b = pc._createConeData(a && void 0 !== a.baseRadius ? a.baseRadius : .5, a && void 0 !== a.peakRadius ? a.peakRadius : 0, a && void 0 !== a.height ? a.height : 1, a && void 0 !== a.heightSegments ? a.heightSegments : 5, a && void 0 !== a.capSegments ? a.capSegments : 18, !1);
    pc.precalculatedTangents && (b.tangents = pc.calculateTangents(b.positions, b.normals, b.uvs, b.indices));
    return pc.createMesh(d, b.positions, b)
};
pc.createSphere = function(d, a) {
    var b = a && void 0 !== a.radius ? a.radius : .5,
        c = a && void 0 !== a.latitudeBands ? a.latitudeBands : 16,
        e = a && void 0 !== a.longitudeBands ? a.longitudeBands : 16,
        f, g, h, m, l, p, k, q, r, n = [],
        t = [],
        w = [],
        y = [];
    for (g = 0; g <= c; g++)
        for (f = g * Math.PI / c, h = Math.sin(f), m = Math.cos(f), f = 0; f <= e; f++) l = 2 * f * Math.PI / e - Math.PI / 2, p = Math.sin(l), l = Math.cos(l), l *= h, k = m, p *= h, q = 1 - f / e, r = 1 - g / c, n.push(l * b, k * b, p * b), t.push(l, k, p), w.push(q, r);
    for (g = 0; g < c; ++g)
        for (f = 0; f < e; ++f) b = g * (e + 1) + f, h = b + e + 1, y.push(b + 1, h, b), y.push(b + 1, h + 1, h);
    c = { normals: t, uvs: w, uvs1: w, indices: y };
    pc.precalculatedTangents && (c.tangents = pc.calculateTangents(n, t, w, y));
    return pc.createMesh(d, n, c)
};
pc.createPlane = function(d, a) {
    var b = a && void 0 !== a.halfExtents ? a.halfExtents : new pc.Vec2(.5, .5),
        c = a && void 0 !== a.widthSegments ? a.widthSegments : 5,
        e = a && void 0 !== a.lengthSegments ? a.lengthSegments : 5,
        f, g, h, m, l, p, k = [],
        q = [],
        r = [],
        n = [];
    for (f = 0; f <= c; f++)
        for (g = 0; g <= e; g++) h = -b.x + 2 * b.x * f / c, m = -(-b.y + 2 * b.y * g / e), l = f / c, p = g / e, k.push(h, 0, m), q.push(0, 1, 0), r.push(l, p), f < c && g < e && (n.push(g + f * (c + 1), g + (f + 1) * (c + 1), g + f * (c + 1) + 1), n.push(g + (f + 1) * (c + 1), g + (f + 1) * (c + 1) + 1, g + f * (c + 1) + 1));
    b = { normals: q, uvs: r, uvs1: r, indices: n };
    pc.precalculatedTangents && (b.tangents = pc.calculateTangents(k, q, r, n));
    return pc.createMesh(d, k, b)
};
pc.createBox = function(d, a) {
    var b = a && void 0 !== a.halfExtents ? a.halfExtents : new pc.Vec3(.5, .5, .5),
        c = a && void 0 !== a.widthSegments ? a.widthSegments : 1,
        e = a && void 0 !== a.lengthSegments ? a.lengthSegments : 1,
        f = a && void 0 !== a.heightSegments ? a.heightSegments : 1,
        g = [new pc.Vec3(-b.x, -b.y, b.z), new pc.Vec3(b.x, -b.y, b.z), new pc.Vec3(b.x, b.y, b.z), new pc.Vec3(-b.x, b.y, b.z), new pc.Vec3(b.x, -b.y, -b.z), new pc.Vec3(-b.x, -b.y, -b.z), new pc.Vec3(-b.x, b.y, -b.z), new pc.Vec3(b.x, b.y, -b.z)],
        h = [
            [0, 1, 3],
            [4, 5, 7],
            [3, 2, 6],
            [1, 0, 4],
            [1, 4, 2],
            [5, 0, 6]
        ],
        m = [
            [0, 0, 1],
            [0, 0, -1],
            [0, 1, 0],
            [0, -1, 0],
            [1, 0, 0],
            [-1, 0, 0]
        ],
        l = [],
        p = [],
        k = [],
        q = [],
        r = [],
        b = function(a, b, c) {
            var e, f, d, z, u = l.length / 3;
            for (d = 0; d <= b; d++)
                for (z = 0; z <= c; z++) {
                    e = new pc.Vec3;
                    f = new pc.Vec3;
                    var A = new pc.Vec3,
                        B = new pc.Vec3;
                    e.lerp(g[h[a][0]], g[h[a][1]], d / b);
                    f.lerp(g[h[a][0]], g[h[a][2]], z / c);
                    A.sub2(f, g[h[a][0]]);
                    B.add2(e, A);
                    e = d / b;
                    f = z / c;
                    l.push(B.x, B.y, B.z);
                    p.push(m[a][0], m[a][1], m[a][2]);
                    k.push(e, f);
                    e /= 3;
                    f /= 3;
                    e = e * primitiveUv1PaddingScale + primitiveUv1Padding;
                    f = f * primitiveUv1PaddingScale + primitiveUv1Padding;
                    e += a % 3 / 3;
                    f += Math.floor(a / 3) / 3;
                    q.push(e, f);
                    d < b && z < c && (r.push(u + z + d * (b + 1), u + z + (d + 1) * (b + 1), u + z + d * (b + 1) + 1), r.push(u + z + (d + 1) * (b + 1), u + z + (d + 1) * (b + 1) + 1, u + z + d * (b + 1) + 1))
                }
        };
    b(0, c, f);
    b(1, c, f);
    b(2, c, e);
    b(3, c, e);
    b(4, e, f);
    b(5, e, f);
    c = { normals: p, uvs: k, uvs1: q, indices: r };
    pc.precalculatedTangents && (c.tangents = pc.calculateTangents(l, p, k, r));
    return pc.createMesh(d, l, c)
};
pc.extend(pc, function() {
    var d = function() {
        this._name = "";
        this._duration = 0;
        this._nodes = [];
        this._nodeDict = {}
    };
    d.prototype.getDuration = function() { return this._duration };
    d.prototype.getName = function() { return this._name };
    d.prototype.getNode = function(a) { return this._nodeDict[a] };
    d.prototype.getNodes = function() { return this._nodes };
    d.prototype.setDuration = function(a) { this._duration = a };
    d.prototype.setName = function(a) { this._name = a };
    d.prototype.addNode = function(a) {
        this._nodes.push(a);
        this._nodeDict[a._name] = a
    };
    return {
        Animation: d,
        Key: function(a, b, c, e) {
            this.time = a;
            this.position = b;
            this.rotation = c;
            this.scale = e
        },
        Node: function() {
            this._name = "";
            this._keys = []
        }
    }
}());
pc.extend(pc, function() {
    function d() {
        this._written = !1;
        this._name = "";
        this._keyFrames = [];
        this._quat = new pc.Quat;
        this._pos = new pc.Vec3;
        this._scale = new pc.Vec3;
        this._targetNode = null
    }
    d.prototype = { getTarget: function() { return this._targetNode }, setTarget: function(a) { this._targetNode = a } };
    var a = function(a) {
        function c(a) {
            var b = a.getName(),
                h = new d;
            h._name = b;
            e._interpolatedKeys.push(h);
            e._interpolatedKeyDict[b] = h;
            e._currKeyIndices[b] = 0;
            a = a.getChildren();
            for (b = 0; b < a.length; b++) c(a[b])
        }
        this._animation = null;
        this._time = 0;
        this.looping = !0;
        this._interpolatedKeys = [];
        this._interpolatedKeyDict = {};
        this._currKeyIndices = {};
        this.graph = null;
        var e = this;
        c(a)
    };
    a.prototype.addTime = function(a) {
        if (null !== this._animation) {
            var c, e, f, d, h, m, l = this._animation.getNodes();
            c = this._animation.getDuration();
            if (this._time !== c || this.looping) {
                this._time += a;
                if (this._time > c)
                    for (this._time = this.looping ? 0 : c, c = 0; c < l.length; c++) e = l[c], f = e._name, this._currKeyIndices[f] = 0;
                else if (0 > this._time)
                    for (this._time = this.looping ? c : 0, c = 0; c < l.length; c++) e = l[c], f = e._name, this._currKeyIndices[f] = e._keys.length - 2;
                a = 0 <= a ? 1 : -1;
                for (c = 0; c < l.length; c++)
                    if (e = l[c], f = e._name, d = e._keys, e = this._interpolatedKeyDict[f], 1 === d.length) e._pos.copy(d[0].position), e._quat.copy(d[0].rotation), e._scale(d[0].scale);
                    else
                        for (var p = this._currKeyIndices[f]; p < d.length - 1 && 0 <= p; p += a)
                            if (h = d[p], m = d[p + 1], h.time <= this._time && m.time >= this._time) {
                                d = (this._time - h.time) / (m.time - h.time);
                                e._pos.lerp(h.position, m.position, d);
                                e._quat.slerp(h.rotation, m.rotation, d);
                                e._scale.lerp(h.scale, m.scale, d);
                                e._written = !0;
                                this._currKeyIndices[f] = p;
                                break
                            }
            }
        }
    };
    a.prototype.blend = function(a, c, e) {
        for (var f = this._interpolatedKeys.length, d = 0; d < f; d++) {
            var h = a._interpolatedKeys[d],
                m = c._interpolatedKeys[d],
                l = this._interpolatedKeys[d];
            h._written && m._written ? (l._quat.slerp(h._quat, c._interpolatedKeys[d]._quat, e), l._pos.lerp(h._pos, c._interpolatedKeys[d]._pos, e), l._scale.lerp(h._scale, m._scale, e), l._written = !0) : h._written ? (l._quat.copy(h._quat), l._pos.copy(h._pos), l._scale.copy(h._scale), l._written = !0) : m._written && (l._quat.copy(m._quat), l._pos.copy(m._pos), l._scale.copy(m._scale), l._written = !0)
        }
    };
    a.prototype.getAnimation = function() { return this._animation };
    a.prototype.getCurrentTime = function() { return this._time };
    a.prototype.setCurrentTime = function(a) {
        this._time = a;
        a = this._interpolatedKeys.length;
        for (var c = 0; c < a; c++) this._currKeyIndices[this._interpolatedKeys[c]._name] = 0;
        this.addTime(0);
        this.updateGraph()
    };
    a.prototype.getNumNodes = function() { return this._interpolatedKeys.length };
    a.prototype.setAnimation = function(a) {
        this._animation = a;
        this.setCurrentTime(0)
    };
    a.prototype.setGraph = function(a) {
        var c;
        if (this.graph = a)
            for (c = 0; c < this._interpolatedKeys.length; c++) {
                var e = a.findByName(this._interpolatedKeys[c]._name);
                this._interpolatedKeys[c].setTarget(e)
            } else
                for (c = 0; c < this._interpolatedKeys.length; c++) this._interpolatedKeys[c].setTarget(null)
    };
    a.prototype.updateGraph = function() {
        if (this.graph)
            for (var a = 0; a < this._interpolatedKeys.length; a++) {
                var c = this._interpolatedKeys[a];
                if (c._written) {
                    var e = c.getTarget();
                    e.localPosition.copy(c._pos);
                    e.localRotation.copy(c._quat);
                    e.localScale.copy(c._scale);
                    e.dirtyLocal = !0;
                    c._written = !1
                }
            }
    };
    a.prototype.setLooping = function(a) { this.looping = a };
    a.prototype.getLooping = function() { return this.looping };
    return { Skeleton: a }
}());
pc.extend(pc, function() {
    function d() { return "undefined" !== typeof Audio }

    function a() { return !("undefined" === typeof AudioContext && "undefined" === typeof webkitAudioContext) }
    var b = function() {
        if (a()) {
            if ("undefined" !== typeof AudioContext ? this.context = new AudioContext : "undefined" !== typeof webkitAudioContext && (this.context = new webkitAudioContext), this.context) {
                var b = this.context;
                if (/iPad|iPhone|iPod/.test(navigator.platform)) {
                    var e = function() {
                        var a = b.createBuffer(1, 1, 44100),
                            d = b.createBufferSource();
                        d.buffer = a;
                        d.connect(b.destination);
                        d.start(0);
                        d.disconnect();
                        window.removeEventListener("touchend", e)
                    };
                    window.addEventListener("touchend", e)
                }
            }
        } else console.warn("No support for 3D audio found");
        d() || console.warn("No support for 2D audio found");
        this.listener = new pc.Listener(this);
        this._volume = 1;
        this.suspended = !1;
        pc.events.attach(this)
    };
    b.hasAudio = d;
    b.hasAudioContext = a;
    b.prototype = {
        suspend: function() {
            this.suspended = !0;
            this.fire("suspend")
        },
        resume: function() {
            this.suspended = !1;
            this.fire("resume")
        },
        destroy: function() {
            this.fire("destroy");
            this.context && this.context.close && (this.context.close(), this.context = null)
        },
        getListener: function() { console.warn('DEPRECATED: getListener is deprecated. Get the "listener" field instead.'); return this.listener },
        getVolume: function() { console.warn('DEPRECATED: getVolume is deprecated. Get the "volume" property instead.'); return this.volume },
        setVolume: function(a) {
            console.warn('DEPRECATED: setVolume is deprecated. Set the "volume" property instead.');
            this.volume = a
        },
        playSound: function(a, b) {
            b = b || {};
            var f = null;
            pc.Channel && (f = new pc.Channel(this, a, b), f.play());
            return f
        },
        playSound3d: function(a, b, f) {
            f = f || {};
            var d = null;
            pc.Channel3d && (d = new pc.Channel3d(this, a, f), d.setPosition(b), f.volume && d.setVolume(f.volume), f.loop && d.setLoop(f.loop), f.maxDistance && d.setMaxDistance(f.maxDistance), f.minDistance && d.setMinDistance(f.minDistance), f.rollOffFactor && d.setRollOffFactor(f.rollOffFactor), f.distanceModel && d.setDistanceModel(f.distanceModel), d.play());
            return d
        }
    };
    Object.defineProperty(b.prototype, "volume", {
        get: function() { return this._volume },
        set: function(a) {
            this._volume = a = pc.math.clamp(a, 0, 1);
            this.fire("volumechange", a)
        }
    });
    pc.AudioManager = b;
    return { SoundManager: b }
}());
pc.extend(pc, function() {
    var d = function(a) { a instanceof Audio ? this.audio = a : this.buffer = a };
    Object.defineProperty(d.prototype, "duration", {
        get: function() {
            var a = 0;
            this.buffer ? a = this.buffer.duration : this.audio && (a = this.audio.duration);
            return a || 0
        }
    });
    return { Sound: d }
}());
pc.extend(pc, function() {
    var d = function(a) {
        this.position = new pc.Vec3;
        this.velocity = new pc.Vec3;
        this.orientation = new pc.Mat4;
        pc.AudioManager.hasAudioContext() && (this.listener = a.context.listener)
    };
    d.prototype = {
        getPosition: function() { return this.position },
        setPosition: function(a) {
            this.position.copy(a);
            this.listener && this.listener.setPosition(a.x, a.y, a.z)
        },
        getVelocity: function() { return this.velocity },
        setVelocity: function(a) {
            this.velocity.copy(a);
            this.listener && this.listener.setPosition(a.x, a.y, a.z)
        },
        setOrientation: function(a) {
            this.orientation.copy(a);
            this.listener && this.listener.setOrientation(-a.data[8], -a.data[9], -a.data[10], a.data[4], a.data[5], a.data[6])
        },
        getOrientation: function() { return this.orientation }
    };
    return { Listener: d }
}());
pc.extend(pc, function() {
    var d;
    pc.SoundManager.hasAudioContext() ? (d = function(a, b, c) {
        pc.events.attach(this);
        c = c || {};
        this._volume = void 0 !== c.volume ? pc.math.clamp(Number(c.volume) || 0, 0, 1) : 1;
        this._pitch = void 0 !== c.pitch ? Math.max(.01, Number(c.pitch) || 0) : 1;
        this._loop = !(void 0 === c.loop || !c.loop);
        this._sound = b;
        this._state = 2;
        this._suspendInstanceEvents = this._suspendEndEvent = this._suspended = !1;
        this._startTime = Math.max(0, Number(c.startTime) || 0);
        this._duration = Math.max(0, Number(c.duration) || 0);
        this._startedAt = 0;
        this._startOffset = null;
        this._calculatedCurrentTimeAt = this._currentTime = 0;
        this._playWhenLoaded = !0;
        this._manager = a;
        this._lastNode = this._firstNode = this._connectorNode = this._inputNode = null;
        this._initializeNodes();
        this._endedHandler = this._onEnded.bind(this);
        this.source = null;
        this._createSource()
    }, d.prototype = {
        _initializeNodes: function() {
            this._connectorNode = this._inputNode = this.gain = this._manager.context.createGain();
            this._connectorNode.connect(this._manager.context.destination)
        },
        play: function() {
            2 !== this._state && this.stop();
            if (!this.source) return !1;
            var a = this._startOffset % this.duration || 0,
                a = (this._startTime + a) % this._sound.duration || 0;
            this._startOffset = null;
            this._duration ? this.source.start(0, a, this._duration) : this.source.start(0, a);
            this._startedAt = this._manager.context.currentTime - a;
            this._currentTime = 0;
            this._calculatedCurrentTimeAt = this._manager.context.currentTime;
            this._state = 0;
            this._playWhenLoaded = !1;
            this.volume = this._volume;
            this.loop = this._loop;
            this.pitch = this._pitch;
            this._manager.on("volumechange", this._onManagerVolumeChange, this);
            this._manager.on("suspend", this._onManagerSuspend, this);
            this._manager.on("resume", this._onManagerResume, this);
            this._manager.on("destroy", this._onManagerDestroy, this);
            this._manager.suspended && this._onManagerSuspend();
            this._suspendInstanceEvents || this.fire("play", this);
            return !0
        },
        pause: function() {
            if (0 !== this._state || !this.source) return !1;
            this._state = 1;
            this._currentTime = (this._currentTime + (this._manager.context.currentTime - this._calculatedCurrentTimeAt) * this.pitch) % this.duration || 0;
            this._calculatedCurrentTimeAt = this._manager.context.currentTime;
            this._suspendEndEvent = !0;
            this.source.stop(0);
            this._createSource();
            this._playWhenLoaded = !1;
            this._startOffset = null;
            this._suspendInstanceEvents || this.fire("pause", this);
            return !0
        },
        resume: function() {
            if (1 !== this._state || !this.source) return !1;
            var a = (this._startTime + this._currentTime) % this._sound.duration || 0;
            null !== this._startOffset && (a = this._startOffset % this.duration || 0, a = (this._startTime + a) % this._sound.duration || 0, this._startOffset = null);
            this._duration ? this.source.start(0, a, this._duration) : this.source.start(0, a);
            this._state = 0;
            this.volume = this._volume;
            this.loop = this._loop;
            this.pitch = this._pitch;
            this._playWhenLoaded = !1;
            this._suspendInstanceEvents || this.fire("resume", this);
            return !0
        },
        stop: function() {
            if (2 === this._state || !this.source) return !1;
            this._manager.off("volumechange", this._onManagerVolumeChange, this);
            this._manager.off("suspend", this._onManagerSuspend, this);
            this._manager.off("resume", this._onManagerResume, this);
            this._manager.off("destroy", this._onManagerDestroy, this);
            this._startedAt = 0;
            this._startOffset = null;
            this._playWhenLoaded = !1;
            this._suspendEndEvent = !0;
            0 === this._state && this.source.stop(0);
            this._state = 2;
            this._createSource();
            this._suspendInstanceEvents || this.fire("stop", this);
            return !0
        },
        setExternalNodes: function(a, b) {
            if (a) {
                b || (b = a);
                var c = this._manager.context.destination;
                this._firstNode !== a && (this._firstNode ? this._connectorNode.disconnect(this._firstNode) : this._connectorNode.disconnect(c), this._firstNode = a, this._connectorNode.connect(a));
                this._lastNode !== b && (this._lastNode && this._lastNode.disconnect(c), this._lastNode = b, this._lastNode.connect(c))
            } else console.error("The firstNode must be a valid Audio Node")
        },
        clearExternalNodes: function() {
            var a = this._manager.context.destination;
            this._firstNode && (this._connectorNode.disconnect(this._firstNode), this._firstNode = null);
            this._lastNode && (this._lastNode.disconnect(a), this._lastNode = null);
            this._connectorNode.connect(a)
        },
        getExternalNodes: function() { return [this._firstNode, this._lastNode] },
        _createSource: function() {
            if (!this._sound) return null;
            var a = this._manager.context;
            this._sound.buffer && (this.source = a.createBufferSource(), this.source.buffer = this._sound.buffer, this.source.connect(this._inputNode), this.source.onended = this._endedHandler, this.source.loopStart = this._startTime % this.source.buffer.duration || 0, this._duration && (this.source.loopEnd = Math.max(this.source.loopStart, (this._startTime + this._duration) % this.source.buffer.duration || 0)), this._suspendInstanceEvents || this.fire("ready", this));
            return this.source
        },
        _onEnded: function() { this._suspendEndEvent ? this._suspendEndEvent = !1 : (this.fire("end", this), this.stop()) },
        _onManagerDestroy: function() { this.source && this.isPlaying && (this.source.stop(0), this.source = null) }
    }, Object.defineProperty(d.prototype, "volume", {
        get: function() { return this._volume },
        set: function(a) {
            this._volume = a = pc.math.clamp(a, 0, 1);
            this.gain && (this.gain.gain.value = a * this._manager.volume)
        }
    }), Object.defineProperty(d.prototype, "pitch", {
        get: function() { return this._pitch },
        set: function(a) {
            var b = this._pitch;
            this._calculatedCurrentTimeAt && (this._currentTime = (this._currentTime + (this._manager.context.currentTime - this._calculatedCurrentTimeAt) * b) % this.duration || 0, this._calculatedCurrentTimeAt = this._manager.context.currentTime);
            this._pitch = Math.max(Number(a) || 0, .01);
            this.source && (this.source.playbackRate.value = this._pitch)
        }
    }), Object.defineProperty(d.prototype, "loop", {
        get: function() { return this._loop },
        set: function(a) {
            this._loop = !!a;
            this.source && (this.source.loop = this._loop)
        }
    }), Object.defineProperty(d.prototype, "sound", {
        get: function() { return this._sound },
        set: function(a) {
            this._sound = a;
            this.isStopped ? this._createSource() : this.stop()
        }
    }), Object.defineProperty(d.prototype, "currentTime", {
        get: function() {
            if (null !== this._startOffset) return this._startOffset;
            if (this.isStopped || !this.source) return 0;
            if (this.isPaused) return this._currentTime;
            this._currentTime = (this._currentTime + (this._manager.context.currentTime - this._calculatedCurrentTimeAt) * this.pitch) % this.duration || 0;
            this._calculatedCurrentTimeAt = this._manager.context.currentTime;
            return this._currentTime
        },
        set: function(a) {
            if (!(0 > a))
                if (this.isPlaying) {
                    this.stop();
                    var b = this._suspendInstanceEvents;
                    this._suspendInstanceEvents = !0;
                    this._startOffset = a;
                    this.play();
                    this._suspendInstanceEvents = b
                } else this._currentTime = this._startOffset = a, this._calculatedCurrentTimeAt = this._manager.context.currentTime
        }
    })) : pc.SoundManager.hasAudio() ? (d = function(a, b, c) {
        pc.events.attach(this);
        c = c || {};
        this._volume = void 0 !== c.volume ? pc.math.clamp(Number(c.volume) || 0, 0, 1) : 1;
        this._pitch = void 0 !== c.pitch ? Math.max(.01, Number(c.pitch) || 0) : 1;
        this._loop = !(void 0 === c.loop || !c.loop);
        this._sound = b;
        this._state = 2;
        this._suspendInstanceEvents = this._suspendEndEvent = this._suspended = !1;
        this._playWhenLoaded = !0;
        this._startTime = Math.max(0, Number(c.startTime) || 0);
        this._duration = Math.max(0, Number(c.duration) || 0);
        this._startOffset = null;
        this._isReady = !1;
        this._manager = a;
        this._loadedMetadataHandler = this._onLoadedMetadata.bind(this);
        this._timeUpdateHandler = this._onTimeUpdate.bind(this);
        this._endedHandler = this._onEnded.bind(this);
        this.source = null;
        this._createSource()
    }, d.prototype = {
        play: function() {
            2 !== this._state && this.stop();
            if (!this.source) return !1;
            this.volume = this._volume;
            this.pitch = this._pitch;
            this.loop = this._loop;
            this.source.play();
            this._state = 0;
            this._playWhenLoaded = !1;
            this._manager.on("volumechange", this._onManagerVolumeChange, this);
            this._manager.on("suspend", this._onManagerSuspend, this);
            this._manager.on("resume", this._onManagerResume, this);
            this._manager.on("destroy", this._onManagerDestroy, this);
            this._manager.suspended && this._onManagerSuspend();
            this._suspendInstanceEvents || this.fire("play", this);
            return !0
        },
        pause: function() {
            if (!this.source || 0 !== this._state) return !1;
            this._suspendEndEvent = !0;
            this.source.pause();
            this._playWhenLoaded = !1;
            this._state = 1;
            this._startOffset = null;
            this._suspendInstanceEvents || this.fire("pause", this);
            return !0
        },
        resume: function() {
            if (!this.source || 1 !== this._state) return !1;
            this._state = 0;
            this._playWhenLoaded = !1;
            this.source.paused && (this.source.play(), this._suspendInstanceEvents || this.fire("resume", this));
            return !0
        },
        stop: function() {
            if (!this.source || 2 === this._state) return !1;
            this._manager.off("volumechange", this._onManagerVolumeChange, this);
            this._manager.off("suspend", this._onManagerSuspend, this);
            this._manager.off("resume", this._onManagerResume, this);
            this._manager.off("destroy", this._onManagerDestroy, this);
            this._suspendEndEvent = !0;
            this.source.pause();
            this._playWhenLoaded = !1;
            this._state = 2;
            this._startOffset = null;
            this._suspendInstanceEvents || this.fire("stop", this);
            return !0
        },
        setExternalNodes: function() {},
        clearExternalNodes: function() {},
        getExternalNodes: function() { return [null, null] },
        _onLoadedMetadata: function() {
            this.source.removeEventListener("loadedmetadata", this._loadedMetadataHandler);
            this._isReady = !0;
            var a = this._startOffset % this.duration || 0,
                a = (this._startTime + a) % this._sound.duration || 0;
            this._startOffset = null;
            this.source.currentTime = a
        },
        _createSource: function() { this._sound && this._sound.audio && (this._isReady = !1, this.source = this._sound.audio.cloneNode(!0), this.source.addEventListener("loadedmetadata", this._loadedMetadataHandler), this.source.addEventListener("timeupdate", this._timeUpdateHandler), this.source.onended = this._endedHandler, this._suspendInstanceEvents || this.fire("ready", this.source)); return this.source },
        _onTimeUpdate: function() { this._duration && this.source.currentTime > ((this._startTime + this._duration) % this.source.duration || 0) && (this.loop ? this.source.currentTime = this._startTime % this.source.duration || 0 : (this.source.removeEventListener("timeupdate", this._timeUpdateHandler), this.source.pause(), this._onEnded())) },
        _onEnded: function() { this._suspendEndEvent ? this._suspendEndEvent = !1 : (this.fire("end", this), this.stop()) },
        _onManagerDestroy: function() { this.source && this.source.pause() }
    }, Object.defineProperty(d.prototype, "volume", {
        get: function() { return this._volume },
        set: function(a) {
            this._volume = a = pc.math.clamp(a, 0, 1);
            this.source && (this.source.volume = a * this._manager.volume)
        }
    }), Object.defineProperty(d.prototype, "pitch", {
        get: function() { return this._pitch },
        set: function(a) {
            this._pitch = Math.max(Number(a) || 0, .01);
            this.source && (this.source.playbackRate = this._pitch)
        }
    }), Object.defineProperty(d.prototype, "loop", {
        get: function() { return this._loop },
        set: function(a) {
            this._loop = !!a;
            this.source && (this.source.loop = this._loop)
        }
    }), Object.defineProperty(d.prototype, "sound", {
        get: function() { return this._sound },
        set: function(a) {
            this.stop();
            this._sound = a;
            this._createSource()
        }
    }), Object.defineProperty(d.prototype, "currentTime", { get: function() { return null !== this._startOffset ? this._startOffset : this.isStopped || !this.source ? 0 : this.source.currentTime - this._startTime }, set: function(a) { 0 > a || (this._startOffset = a, this.source && this._isReady && (this.source.currentTime = (this._startTime + (a % this.duration || 0)) % this._sound.duration || 0, this._startOffset = null)) } })) : d = function() {};
    pc.extend(d.prototype, { _onManagerVolumeChange: function() { this.volume = this._volume }, _onManagerSuspend: function() { this.isPlaying && !this._suspended && (this._suspended = !0, this.pause()) }, _onManagerResume: function() { this._suspended && (this._suspended = !1, this.resume()) } });
    Object.defineProperty(d.prototype, "startTime", {
        get: function() { return this._startTime },
        set: function(a) {
            this._startTime = Math.max(0, Number(a) || 0);
            a = this.isPlaying;
            this.stop();
            a && this.play()
        }
    });
    Object.defineProperty(d.prototype, "duration", {
        get: function() { return this._sound ? this._duration ? this._duration % this._sound.duration || 0 : this._sound.duration : 0 },
        set: function(a) {
            this._duration = Math.max(0, Number(a) || 0);
            a = this.isPlaying;
            this.stop();
            a && this.play()
        }
    });
    Object.defineProperty(d.prototype, "isPlaying", { get: function() { return 0 === this._state } });
    Object.defineProperty(d.prototype, "isPaused", { get: function() { return 1 === this._state } });
    Object.defineProperty(d.prototype, "isStopped", { get: function() { return 2 === this._state } });
    Object.defineProperty(d.prototype, "isSuspended", { get: function() { return this._suspended } });
    return { SoundInstance: d }
}());
pc.extend(pc, function() {
    var d;
    if (pc.SoundManager.hasAudioContext()) d = function(a, c, e) {
        e = e || {};
        this._position = new pc.Vec3;
        e.position && (this.position = e.position);
        this._velocity = new pc.Vec3;
        e.velocity && (this.velocity = e.velocity);
        this.maxDistance = void 0 !== e.maxDistance ? Number(e.maxDistance) : 1E4;
        this.refDistance = void 0 !== e.refDistance ? Number(e.refDistance) : 1;
        this.rollOffFactor = void 0 !== e.rollOffFactor ? Number(e.rollOffFactor) : 1;
        this.distanceModel = void 0 !== e.distanceModel ? e.distanceModel : pc.DISTANCE_LINEAR
    }, d = pc.inherits(d, pc.SoundInstance), d.prototype = pc.extend(d.prototype, {
        _initializeNodes: function() {
            this.gain = this._manager.context.createGain();
            this.panner = this._manager.context.createPanner();
            this.panner.connect(this.gain);
            this._inputNode = this.panner;
            this._connectorNode = this.gain;
            this._connectorNode.connect(this._manager.context.destination)
        }
    }), Object.defineProperty(d.prototype, "position", {
        get: function() { return this._position },
        set: function(a) {
            this._position.copy(a);
            this.panner.setPosition(a.x, a.y, a.z)
        }
    }), Object.defineProperty(d.prototype, "velocity", {
        get: function() { return this._velocity },
        set: function(a) {
            this._velocity.copy(a);
            this.panner.setVelocity(a.x, a.y, a.z)
        }
    }), Object.defineProperty(d.prototype, "maxDistance", { get: function() { return this.panner.maxDistance }, set: function(a) { this.panner.maxDistance = a } }), Object.defineProperty(d.prototype, "refDistance", { get: function() { return this.panner.refDistance }, set: function(a) { this.panner.refDistance = a } }), Object.defineProperty(d.prototype, "rollOffFactor", { get: function() { return this.panner.rollOffFactor }, set: function(a) { this.panner.rollOffFactor = a } }), Object.defineProperty(d.prototype, "distanceModel", { get: function() { return this.panner.distanceModel }, set: function(a) { this.panner.distanceModel = a } });
    else if (pc.SoundManager.hasAudio()) {
        var a = new pc.Vec3;
        d = function(a, c, e) {
            e = e || {};
            this._position = new pc.Vec3;
            e.position && (this.position = e.position);
            this._velocity = new pc.Vec3;
            e.velocity && (this.velocity = e.velocity);
            this._maxDistance = void 0 !== e.maxDistance ? Number(e.maxDistance) : 1E4;
            this._refDistance = void 0 !== e.refDistance ? Number(e.refDistance) : 1;
            this._rollOffFactor = void 0 !== e.rollOffFactor ? Number(e.rollOffFactor) : 1;
            this._distanceModel = void 0 !== e.distanceModel ? e.distanceModel : pc.DISTANCE_LINEAR
        };
        d = pc.inherits(d, pc.SoundInstance);
        Object.defineProperty(d.prototype, "position", {
            get: function() { return this._position },
            set: function(b) {
                this._position.copy(b);
                if (this.source) {
                    var c = this._manager.listener.getPosition();
                    b = this.refDistance;
                    var e = this.maxDistance,
                        f = this.rollOffFactor,
                        d = this.distanceModel;
                    a = a.sub2(c, this._position);
                    c = a.length();
                    if (c < b) b = 1;
                    else if (c > e) b = 0;
                    else {
                        var h = 0;
                        d === pc.DISTANCE_LINEAR ? h = 1 - f * (c - b) / (e - b) : d === pc.DISTANCE_INVERSE ? h = b / (b + f * (c - b)) : d === pc.DISTANCE_EXPONENTIAL && (h = Math.pow(c / b, -f));
                        b = pc.math.clamp(h, 0, 1)
                    }
                    this.source.volume = this.volume * b * this._manager.volume
                }
            }
        });
        Object.defineProperty(d.prototype, "velocity", { get: function() { return this._velocity }, set: function(a) { this._velocity.copy(a) } });
        Object.defineProperty(d.prototype, "maxDistance", { get: function() { return this._maxDistance }, set: function(a) { this._maxDistance = a } });
        Object.defineProperty(d.prototype, "refDistance", { get: function() { return this._refDistance }, set: function(a) { this._refDistance = a } });
        Object.defineProperty(d.prototype, "rollOffFactor", { get: function() { return this._rollOffFactor }, set: function(a) { this._rollOffFactor = a } });
        Object.defineProperty(d.prototype, "distanceModel", { get: function() { return this._distanceModel }, set: function(a) { this._distanceModel = a } })
    } else d = function() {};
    return { SoundInstance3d: d }
}());
pc.extend(pc, function() {
    var d;
    pc.AudioManager.hasAudioContext() ? (d = function(a, b, c) {
        c = c || {};
        this.volume = void 0 === c.volume ? 1 : c.volume;
        this.loop = void 0 === c.loop ? !1 : c.loop;
        this.pitch = void 0 === c.pitch ? 1 : c.pitch;
        this.sound = b;
        this.suspended = this.paused = !1;
        this.startOffset = this.startTime = 0;
        this.manager = a;
        this.source = null;
        this.gain = a.context.createGain()
    }, d.prototype = {
        play: function() {
            if (this.source) throw Error("Call stop() before calling play()");
            this._createSource();
            if (this.source && (this.startTime = this.manager.context.currentTime, this.source.start(0, this.startOffset % this.source.buffer.duration), this.setVolume(this.volume), this.setLoop(this.loop), this.setPitch(this.pitch), this.manager.on("volumechange", this.onManagerVolumeChange, this), this.manager.on("suspend", this.onManagerSuspend, this), this.manager.on("resume", this.onManagerResume, this), this.manager.suspended)) this.onManagerSuspend()
        },
        pause: function() { this.source && (this.paused = !0, this.startOffset += this.manager.context.currentTime - this.startTime, this.source.stop(0), this.source = null) },
        unpause: function() { this.source || !this.paused ? console.warn("Call pause() before unpausing.") : (this._createSource(), this.source && (this.startTime = this.manager.context.currentTime, this.source.start(0, this.startOffset % this.source.buffer.duration), this.setVolume(this.volume), this.setLoop(this.loop), this.setPitch(this.pitch), this.paused = !1)) },
        stop: function() {
            this.source && (this.source.stop(0), this.source = null);
            this.manager.off("volumechange", this.onManagerVolumeChange, this);
            this.manager.off("suspend", this.onManagerSuspend, this);
            this.manager.off("resume", this.onManagerResume, this)
        },
        setLoop: function(a) {
            this.loop = a;
            this.source && (this.source.loop = a)
        },
        setVolume: function(a) {
            this.volume = a = pc.math.clamp(a, 0, 1);
            this.gain && (this.gain.gain.value = a * this.manager.volume)
        },
        setPitch: function(a) {
            this.pitch = a;
            this.source && (this.source.playbackRate.value = a)
        },
        isPlaying: function() { return !this.paused && this.source.playbackState === this.source.PLAYING_STATE },
        getDuration: function() { return this.source ? this.source.buffer.duration : 0 },
        _createSource: function() {
            var a = this.manager.context;
            this.sound.buffer && (this.source = a.createBufferSource(), this.source.buffer = this.sound.buffer, this.source.connect(this.gain), this.gain.connect(a.destination), this.loop || (this.source.onended = this.pause.bind(this)))
        }
    }) : pc.AudioManager.hasAudio() ? (d = function(a, b, c) {
        this.volume = c.volume || 1;
        this.loop = c.loop || !1;
        this.sound = b;
        this.pitch = void 0 !== c.pitch ? c.pitch : 1;
        this.suspended = this.paused = !1;
        this.manager = a;
        b.audio && (this.source = b.audio.cloneNode(!1), this.source.pause())
    }, d.prototype = {
        play: function() {
            this.source && (this.paused = !1, this.setVolume(this.volume), this.setLoop(this.loop), this.setPitch(this.pitch), this.source.play());
            this.manager.on("volumechange", this.onManagerVolumeChange, this);
            this.manager.on("suspend", this.onManagerSuspend, this);
            this.manager.on("resume", this.onManagerResume, this);
            if (this.manager.suspended) this.onManagerSuspend()
        },
        pause: function() { this.source && (this.paused = !0, this.source.pause()) },
        unpause: function() { this.source && (this.paused = !1, this.source.play()) },
        stop: function() {
            this.source && this.source.pause();
            this.manager.off("volumechange", this.onManagerVolumeChange, this);
            this.manager.off("suspend", this.onManagerSuspend, this);
            this.manager.off("resume", this.onManagerResume, this)
        },
        setVolume: function(a) {
            this.volume = a = pc.math.clamp(a, 0, 1);
            this.source && (this.source.volume = a * this.manager.volume)
        },
        setLoop: function(a) {
            this.loop = a;
            this.source && (this.source.loop = a)
        },
        setPitch: function(a) {
            this.pitch = a;
            this.source && (this.source.playbackRate = a)
        },
        getDuration: function() { if (this.source) { var a = this.source.duration; if (a === a) return a } return 0 },
        isPlaying: function() { return !this.source.paused }
    }) : d = function() {};
    pc.extend(d.prototype, { getVolume: function() { return this.volume }, getLoop: function() { return this.loop }, getPitch: function() { return this.pitch }, onManagerVolumeChange: function() { this.setVolume(this.getVolume()) }, onManagerSuspend: function() { this.isPlaying() && !this.suspended && (this.suspended = !0, this.pause()) }, onManagerResume: function() { this.suspended && (this.suspended = !1, this.unpause()) } });
    return { Channel: d }
}());
pc.extend(pc, function() {
    var d;
    if (pc.AudioManager.hasAudioContext()) d = function(a, c, e) {
        this.position = new pc.Vec3;
        this.velocity = new pc.Vec3;
        this.panner = a.context.createPanner()
    }, d = pc.inherits(d, pc.Channel), d.prototype = pc.extend(d.prototype, {
        getPosition: function() { return this.position },
        setPosition: function(a) {
            this.position.copy(a);
            this.panner.setPosition(a.x, a.y, a.z)
        },
        getVelocity: function() { return this.velocity },
        setVelocity: function(a) {
            this.velocity.copy(a);
            this.panner.setVelocity(a.x, a.y, a.z)
        },
        getMaxDistance: function() { return this.panner.maxDistance },
        setMaxDistance: function(a) { this.panner.maxDistance = a },
        getMinDistance: function() { return this.panner.refDistance },
        setMinDistance: function(a) { this.panner.refDistance = a },
        getRollOffFactor: function() { return this.panner.rolloffFactor },
        setRollOffFactor: function(a) { this.panner.rolloffFactor = a },
        getDistanceModel: function() { return this.pannel.distanceModel },
        setDistanceModel: function(a) { this.panner.distanceModel = a },
        _createSource: function() {
            var a = this.manager.context;
            this.source = a.createBufferSource();
            this.source.buffer = this.sound.buffer;
            this.source.connect(this.panner);
            this.panner.connect(this.gain);
            this.gain.connect(a.destination);
            this.loop || (this.source.onended = this.pause.bind(this))
        }
    });
    else if (pc.AudioManager.hasAudio()) {
        var a = new pc.Vec3;
        d = function(a, c) {
            this.position = new pc.Vec3;
            this.velocity = new pc.Vec3;
            this.maxDistance = 1E4;
            this.rollOffFactor = this.minDistance = 1;
            this.distanceModel = pc.DISTANCE_INVERSE
        };
        d = pc.inherits(d, pc.Channel);
        d.prototype = pc.extend(d.prototype, {
            getPosition: function() { return this.position },
            setPosition: function(b) {
                this.position.copy(b);
                if (this.source) {
                    var c = this.manager.listener.getPosition();
                    b = this.minDistance;
                    var e = this.maxDistance,
                        f = this.rollOffFactor,
                        d = this.distanceModel;
                    a = a.sub2(c, this.position);
                    c = a.length();
                    if (c < b) b = 1;
                    else if (c > e) b = 0;
                    else {
                        var h = 0;
                        d === pc.DISTANCE_LINEAR ? h = 1 - f * (c - b) / (e - b) : d === pc.DISTANCE_INVERSE ? h = b / (b + f * (c - b)) : d === pc.DISTANCE_EXPONENTIAL && (h = Math.pow(c / b, -f));
                        b = pc.math.clamp(h, 0, 1)
                    }
                    e = this.getVolume();
                    this.source.volume = e * b
                }
            },
            getVelocity: function() { return this.velocity },
            setVelocity: function(a) { this.velocity.copy(a) },
            getMaxDistance: function() { return this.maxDistance },
            setMaxDistance: function(a) { this.maxDistance = a },
            getMinDistance: function() { return this.minDistance },
            setMinDistance: function(a) { this.minDistance = a },
            getRollOffFactor: function() { return this.rolloffFactor },
            setRollOffFactor: function(a) { this.rolloffFactor = a },
            getDistanceModel: function() { return this.distanceModel },
            setDistanceModel: function(a) { this.distanceModel = a }
        })
    } else d = function() {};
    return { Channel3d: d }
}());
(function() {
    var d = { ACTION_MOUSE: "mouse", ACTION_KEYBOARD: "keyboard", ACTION_GAMEPAD: "gamepad", AXIS_MOUSE_X: "mousex", AXIS_MOUSE_Y: "mousey", AXIS_PAD_L_X: "padlx", AXIS_PAD_L_Y: "padly", AXIS_PAD_R_X: "padrx", AXIS_PAD_R_Y: "padry", AXIS_KEY: "key", EVENT_KEYDOWN: "keydown", EVENT_KEYUP: "keyup", EVENT_MOUSEDOWN: "mousedown", EVENT_MOUSEMOVE: "mousemove", EVENT_MOUSEUP: "mouseup", EVENT_MOUSEWHEEL: "mousewheel", EVENT_TOUCHSTART: "touchstart", EVENT_TOUCHEND: "touchend", EVENT_TOUCHMOVE: "touchmove", EVENT_TOUCHCANCEL: "touchcancel", KEY_BACKSPACE: 8, KEY_TAB: 9, KEY_RETURN: 13, KEY_ENTER: 13, KEY_SHIFT: 16, KEY_CONTROL: 17, KEY_ALT: 18, KEY_PAUSE: 19, KEY_CAPS_LOCK: 20, KEY_ESCAPE: 27, KEY_SPACE: 32, KEY_PAGE_UP: 33, KEY_PAGE_DOWN: 34, KEY_END: 35, KEY_HOME: 36, KEY_LEFT: 37, KEY_UP: 38, KEY_RIGHT: 39, KEY_DOWN: 40, KEY_PRINT_SCREEN: 44, KEY_INSERT: 45, KEY_DELETE: 46, KEY_0: 48, KEY_1: 49, KEY_2: 50, KEY_3: 51, KEY_4: 52, KEY_5: 53, KEY_6: 54, KEY_7: 55, KEY_8: 56, KEY_9: 57, KEY_SEMICOLON: 59, KEY_EQUAL: 61, KEY_A: 65, KEY_B: 66, KEY_C: 67, KEY_D: 68, KEY_E: 69, KEY_F: 70, KEY_G: 71, KEY_H: 72, KEY_I: 73, KEY_J: 74, KEY_K: 75, KEY_L: 76, KEY_M: 77, KEY_N: 78, KEY_O: 79, KEY_P: 80, KEY_Q: 81, KEY_R: 82, KEY_S: 83, KEY_T: 84, KEY_U: 85, KEY_V: 86, KEY_W: 87, KEY_X: 88, KEY_Y: 89, KEY_Z: 90, KEY_WINDOWS: 91, KEY_CONTEXT_MENU: 93, KEY_NUMPAD_0: 96, KEY_NUMPAD_1: 97, KEY_NUMPAD_2: 98, KEY_NUMPAD_3: 99, KEY_NUMPAD_4: 100, KEY_NUMPAD_5: 101, KEY_NUMPAD_6: 102, KEY_NUMPAD_7: 103, KEY_NUMPAD_8: 104, KEY_NUMPAD_9: 105, KEY_MULTIPLY: 106, KEY_ADD: 107, KEY_SEPARATOR: 108, KEY_SUBTRACT: 109, KEY_DECIMAL: 110, KEY_DIVIDE: 111, KEY_F1: 112, KEY_F2: 113, KEY_F3: 114, KEY_F4: 115, KEY_F5: 116, KEY_F6: 117, KEY_F7: 118, KEY_F8: 119, KEY_F9: 120, KEY_F10: 121, KEY_F11: 122, KEY_F12: 123, KEY_COMMA: 188, KEY_PERIOD: 190, KEY_SLASH: 191, KEY_OPEN_BRACKET: 219, KEY_BACK_SLASH: 220, KEY_CLOSE_BRACKET: 221, KEY_META: 224, MOUSEBUTTON_NONE: -1, MOUSEBUTTON_LEFT: 0, MOUSEBUTTON_MIDDLE: 1, MOUSEBUTTON_RIGHT: 2, PAD_1: 0, PAD_2: 1, PAD_3: 2, PAD_4: 3, PAD_FACE_1: 0, PAD_FACE_2: 1, PAD_FACE_3: 2, PAD_FACE_4: 3, PAD_L_SHOULDER_1: 4, PAD_R_SHOULDER_1: 5, PAD_L_SHOULDER_2: 6, PAD_R_SHOULDER_2: 7, PAD_SELECT: 8, PAD_START: 9, PAD_L_STICK_BUTTON: 10, PAD_R_STICK_BUTTON: 11, PAD_UP: 12, PAD_DOWN: 13, PAD_LEFT: 14, PAD_RIGHT: 15, PAD_VENDOR: 16, PAD_L_STICK_X: 0, PAD_L_STICK_Y: 1, PAD_R_STICK_X: 2, PAD_R_STICK_Y: 3 };
    pc.extend(pc, d);
    pc.input = {};
    pc.extend(pc.input, d)
})();
pc.extend(pc, function() {
    var d = function(a, c) {
            var e = { x: 0, y: 0 };
            if (c) {
                if (c instanceof d) throw Error("Expected MouseEvent");
                e = a._getTargetCoords(c)
            } else c = {};
            if (e) this.x = e.x, this.y = e.y;
            else if (pc.Mouse.isPointerLocked()) this.y = this.x = 0;
            else return;
            this.wheel = c.detail ? -1 * c.detail : c.wheelDelta ? c.wheelDelta / 120 : 0;
            pc.Mouse.isPointerLocked() ? (this.dx = c.movementX || c.webkitMovementX || c.mozMovementX || 0, this.dy = c.movementY || c.webkitMovementY || c.mozMovementY || 0) : (this.dx = this.x - a._lastX, this.dy = this.y - a._lastY);
            this.button = "mousedown" === c.type || "mouseup" === c.type ? c.button : pc.MOUSEBUTTON_NONE;
            this.buttons = a._buttons.slice(0);
            this.element = c.target;
            this.ctrlKey = c.ctrlKey || !1;
            this.altKey = c.altKey || !1;
            this.shiftKey = c.shiftKey || !1;
            this.metaKey = c.metaKey || !1;
            this.event = c
        },
        a = function(a) {
            this._lastY = this._lastX = 0;
            this._buttons = [!1, !1, !1];
            this._lastbuttons = [!1, !1, !1];
            this._upHandler = this._handleUp.bind(this);
            this._downHandler = this._handleDown.bind(this);
            this._moveHandler = this._handleMove.bind(this);
            this._wheelHandler = this._handleWheel.bind(this);
            this._contextMenuHandler = function(a) { a.preventDefault() };
            this._target = null;
            this._attached = !1;
            this.attach(a);
            pc.events.attach(this)
        };
    a.isPointerLocked = function() { return !!(document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement) };
    a.prototype = {
        attach: function(a) {
            this._target = a;
            this._attached || (this._attached = !0, window.addEventListener("mouseup", this._upHandler, !1), window.addEventListener("mousedown", this._downHandler, !1), window.addEventListener("mousemove", this._moveHandler, !1), window.addEventListener("mousewheel", this._wheelHandler, !1), window.addEventListener("DOMMouseScroll", this._wheelHandler, !1))
        },
        detach: function() { this._attached && (this._attached = !1, window.removeEventListener("mouseup", this._upHandler), window.removeEventListener("mousedown", this._downHandler), window.removeEventListener("mousemove", this._moveHandler), window.removeEventListener("mousewheel", this._wheelHandler), window.removeEventListener("DOMMouseScroll", this._wheelHandler)) },
        disableContextMenu: function() { this._target && this._target.addEventListener("contextmenu", this._contextMenuHandler) },
        enableContextMenu: function() { this._target && this._target.removeEventListener("contextmenu", this._contextMenuHandler) },
        enablePointerLock: function(a, c) {
            if (document.body.requestPointerLock) {
                var e = function() {
                        a();
                        document.removeEventListener("pointerlockchange", e)
                    },
                    f = function() {
                        c();
                        document.removeEventListener("pointerlockerror", f)
                    };
                a && document.addEventListener("pointerlockchange", e, !1);
                c && document.addEventListener("pointerlockerror", f, !1);
                document.body.requestPointerLock()
            } else c && c()
        },
        disablePointerLock: function(a) {
            if (document.exitPointerLock) {
                var c = function() {
                    a();
                    document.removeEventListener("pointerlockchange", c)
                };
                a && document.addEventListener("pointerlockchange", c, !1);
                document.exitPointerLock()
            }
        },
        update: function(a) {
            this._lastbuttons[0] = this._buttons[0];
            this._lastbuttons[1] = this._buttons[1];
            this._lastbuttons[2] = this._buttons[2]
        },
        isPressed: function(a) { return this._buttons[a] },
        wasPressed: function(a) { return this._buttons[a] && !this._lastbuttons[a] },
        wasReleased: function(a) { return !this._buttons[a] && this._lastbuttons[a] },
        _handleUp: function(a) {
            this._buttons[a.button] = !1;
            a = new d(this, a);
            a.event && this.fire(pc.EVENT_MOUSEUP, a)
        },
        _handleDown: function(a) {
            this._buttons[a.button] = !0;
            a = new d(this, a);
            a.event && this.fire(pc.EVENT_MOUSEDOWN, a)
        },
        _handleMove: function(a) {
            a = new d(this, a);
            a.event && (this.fire(pc.EVENT_MOUSEMOVE, a), this._lastX = a.x, this._lastY = a.y)
        },
        _handleWheel: function(a) {
            a = new d(this, a);
            a.event && this.fire(pc.EVENT_MOUSEWHEEL, a)
        },
        _getTargetCoords: function(a) {
            var c = this._target.getBoundingClientRect(),
                e = Math.floor(c.left),
                c = Math.floor(c.top);
            return a.clientX < e || a.clientX >= e + this._target.clientWidth || a.clientY < c || a.clientY >= c + this._target.clientHeight ? null : { x: a.clientX - e, y: a.clientY - c }
        }
    };
    (function() {
        if ("undefined" !== typeof navigator && "undefined" !== typeof document) {
            navigator.pointer = navigator.pointer || navigator.webkitPointer || navigator.mozPointer;
            var a = function() {
                    var a = document.createEvent("CustomEvent");
                    a.initCustomEvent("pointerlockchange", !0, !1, null);
                    document.dispatchEvent(a)
                },
                c = function() {
                    var a = document.createEvent("CustomEvent");
                    a.initCustomEvent("pointerlockerror", !0, !1, null);
                    document.dispatchEvent(a)
                };
            document.addEventListener("webkitpointerlockchange", a, !1);
            document.addEventListener("webkitpointerlocklost", a, !1);
            document.addEventListener("mozpointerlockchange", a, !1);
            document.addEventListener("mozpointerlocklost", a, !1);
            document.addEventListener("webkitpointerlockerror", c, !1);
            document.addEventListener("mozpointerlockerror", c, !1);
            Element.prototype.requestPointerLock = Element.prototype.mozRequestPointerLock ? function() { this.mozRequestPointerLock() } : Element.prototype.requestPointerLock || Element.prototype.webkitRequestPointerLock || Element.prototype.mozRequestPointerLock;
            !Element.prototype.requestPointerLock && navigator.pointer && (Element.prototype.requestPointerLock = function() {
                document.pointerLockElement = this;
                navigator.pointer.lock(this, a, c)
            });
            document.exitPointerLock = document.exitPointerLock || document.webkitExitPointerLock || document.mozExitPointerLock;
            document.exitPointerLock || (document.exitPointerLock = function() { navigator.pointer && (document.pointerLockElement = null, navigator.pointer.unlock()) })
        }
    })();
    return { Mouse: a, MouseEvent: d }
}());
pc.extend(pc, function() {
    function d(a) {
        b.key = a.keyCode;
        b.element = a.target;
        b.event = a;
        return b
    }

    function a(a) { return "string" == typeof a ? a.toUpperCase().charCodeAt(0) : a }
    var b = new function(a, b) { b ? (this.key = b.keyCode, this.element = b.target, this.event = b) : this.event = this.element = this.key = null },
        c = { 9: "Tab", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 27: "Escape", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 46: "Delete", 91: "Win" },
        e = function(a, b) {
            b = b || {};
            this._element = null;
            this._keyDownHandler = this._handleKeyDown.bind(this);
            this._keyUpHandler = this._handleKeyUp.bind(this);
            this._keyPressHandler = this._handleKeyPress.bind(this);
            pc.events.attach(this);
            this._keymap = {};
            this._lastmap = {};
            a && this.attach(a);
            this.preventDefault = b.preventDefault || !1;
            this.stopPropagation = b.stopPropagation || !1
        };
    e.prototype.attach = function(a) {
        this._element && this.detach();
        this._element = a;
        this._element.addEventListener("keydown", this._keyDownHandler, !1);
        this._element.addEventListener("keypress", this._keyPressHandler, !1);
        this._element.addEventListener("keyup", this._keyUpHandler, !1)
    };
    e.prototype.detach = function() {
        this._element.removeEventListener("keydown", this._keyDownHandler);
        this._element.removeEventListener("keypress", this._keyPressHandler);
        this._element.removeEventListener("keyup", this._keyUpHandler);
        this._element = null
    };
    e.prototype.toKeyIdentifier = function(b) {
        b = a(b);
        var e, d;
        if (e = c[b.toString()]) return e;
        e = b.toString(16).toUpperCase();
        d = e.length;
        for (b = 0; b < 4 - d; b++) e = "0" + e;
        return "U+" + e
    };
    e.prototype._handleKeyDown = function(a) {
        var b = this.toKeyIdentifier(a.keyCode || a.charCode);
        this._keymap[b] = !0;
        this.fire("keydown", d(a));
        this.preventDefault && a.preventDefault();
        this.stopPropagation && a.stopPropagation()
    };
    e.prototype._handleKeyUp = function(a) {
        var b = this.toKeyIdentifier(a.keyCode || a.charCode);
        delete this._keymap[b];
        this.fire("keyup", d(a));
        this.preventDefault && a.preventDefault();
        this.stopPropagation && a.stopPropagation()
    };
    e.prototype._handleKeyPress = function(a) {
        this.toKeyIdentifier(a.keyCode || a.charCode);
        this.fire("keypress", d(a));
        this.preventDefault && a.preventDefault();
        this.stopPropagation && a.stopPropagation()
    };
    e.prototype.update = function(a) { for (var b in this._lastmap) delete this._lastmap[b]; for (b in this._keymap) this._keymap.hasOwnProperty(b) && (this._lastmap[b] = this._keymap[b]) };
    e.prototype.isPressed = function(b) {
        b = a(b);
        b = this.toKeyIdentifier(b);
        return !!this._keymap[b]
    };
    e.prototype.wasPressed = function(b) {
        b = a(b);
        b = this.toKeyIdentifier(b);
        return !!this._keymap[b] && !this._lastmap[b]
    };
    e.prototype.wasReleased = function(b) {
        b = a(b);
        b = this.toKeyIdentifier(b);
        return !this._keymap[b] && !!this._lastmap[b]
    };
    return { Keyboard: e }
}());
pc.extend(pc, function() {
    var d = function() {
            this.gamepadsSupported = !!navigator.getGamepads || !!navigator.webkitGetGamepads;
            this.current = [];
            this.previous = [];
            this.deadZone = .25
        },
        a = { DEFAULT: { buttons: "PAD_FACE_1 PAD_FACE_2 PAD_FACE_3 PAD_FACE_4 PAD_L_SHOULDER_1 PAD_R_SHOULDER_1 PAD_L_SHOULDER_2 PAD_R_SHOULDER_2 PAD_SELECT PAD_START PAD_L_STICK_BUTTON PAD_R_STICK_BUTTON PAD_UP PAD_DOWN PAD_LEFT PAD_RIGHT PAD_VENDOR".split(" "), axes: ["PAD_L_STICK_X", "PAD_L_STICK_Y", "PAD_R_STICK_X", "PAD_R_STICK_Y"] }, PS3: { buttons: "PAD_FACE_1 PAD_FACE_2 PAD_FACE_4 PAD_FACE_3 PAD_L_SHOULDER_1 PAD_R_SHOULDER_1 PAD_L_SHOULDER_2 PAD_R_SHOULDER_2 PAD_SELECT PAD_START PAD_L_STICK_BUTTON PAD_R_STICK_BUTTON PAD_UP PAD_DOWN PAD_LEFT PAD_RIGHT PAD_VENDOR".split(" "), axes: ["PAD_L_STICK_X", "PAD_L_STICK_Y", "PAD_R_STICK_X", "PAD_R_STICK_Y"] } },
        b = { "Product: 0268": "PS3" };
    d.prototype = {
        update: function(a) { a = this.poll(); var b, f = a.length; for (b = 0; b < f; b++) this.previous[b] = this.current[b], this.current[b] = a[b] },
        poll: function() {
            var a = [];
            if (this.gamepadsSupported) {
                var b = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads(),
                    f, d = b.length;
                for (f = 0; f < d; f++) b[f] && a.push({ map: this.getMap(b[f]), pad: b[f] })
            }
            return a
        },
        getMap: function(c) {
            for (var e in b)
                if (0 <= c.id.indexOf(e)) return a[b[e]];
            return a.DEFAULT
        },
        isPressed: function(a, b) { return this.current[a] ? this.current[a].pad.buttons[pc[this.current[a].map.buttons[b]]].pressed : !1 },
        wasPressed: function(a, b) { if (!this.current[a]) return !1; var f = pc[this.current[a].map.buttons[b]]; return this.current[a].pad.buttons[f].pressed && !this.previous[a].pad.buttons[f].pressed },
        getAxis: function(a, b) {
            if (!this.current[a]) return !1;
            var f = this.current[a].pad.axes[pc[this.current[a].map.axes[b]]];
            Math.abs(f) < this.deadZone && (f = 0);
            return f
        }
    };
    return { GamePads: d }
}());
pc.extend(pc, function() {
    var d = function(b, e) {
        this.element = e.target;
        this.event = e;
        this.touches = [];
        this.changedTouches = [];
        if (e) {
            var f, d = e.touches.length;
            for (f = 0; f < d; f++) this.touches.push(new a(e.touches[f]));
            d = e.changedTouches.length;
            for (f = 0; f < d; f++) this.changedTouches.push(new a(e.changedTouches[f]))
        }
    };
    d.prototype = {
        getTouchById: function(a, b) {
            var f, d = b.length;
            for (f = 0; f < d; f++)
                if (b[f].id === a) return b[f];
            return null
        }
    };
    var a = function(a) {
            var b = pc.getTouchTargetCoords(a);
            this.id = a.identifier;
            this.x = b.x;
            this.y = b.y;
            this.target = a.target;
            this.touch = a
        },
        b = function(a) {
            this._startHandler = this._handleTouchStart.bind(this);
            this._endHandler = this._handleTouchEnd.bind(this);
            this._moveHandler = this._handleTouchMove.bind(this);
            this._cancelHandler = this._handleTouchCancel.bind(this);
            this.attach(a);
            pc.events.attach(this)
        };
    b.prototype = {
        attach: function(a) {
            this._element && this.detach();
            this._element = a;
            this._element.addEventListener("touchstart", this._startHandler, !1);
            this._element.addEventListener("touchend", this._endHandler, !1);
            this._element.addEventListener("touchmove", this._moveHandler, !1);
            this._element.addEventListener("touchcancel", this._cancelHandler, !1)
        },
        detach: function() {
            this._element && (this._element.removeEventListener("touchstart", this._startHandler, !1), this._element.removeEventListener("touchend", this._endHandler, !1), this._element.removeEventListener("touchmove", this._moveHandler, !1), this._element.removeEventListener("touchcancel", this._cancelHandler, !1));
            this._element = null
        },
        _handleTouchStart: function(a) { this.fire("touchstart", new d(this, a)) },
        _handleTouchEnd: function(a) { this.fire("touchend", new d(this, a)) },
        _handleTouchMove: function(a) {
            a.preventDefault();
            this.fire("touchmove", new d(this, a))
        },
        _handleTouchCancel: function(a) { this.fire("touchcancel", new d(this, a)) }
    };
    return {
        getTouchTargetCoords: function(a) {
            for (var b = 0, f = 0, d = a.target; !(d instanceof HTMLElement);) d = d.parentNode;
            do b += d.offsetLeft - d.scrollLeft, f += d.offsetTop - d.scrollTop, d = d.offsetParent; while (d);
            return { x: a.pageX - b, y: a.pageY - f }
        },
        TouchDevice: b
    }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
        b = b || {};
        this._keyboard = b.keyboard || null;
        this._mouse = b.mouse || null;
        this._gamepads = b.gamepads || null;
        this._element = null;
        this._actions = {};
        this._axes = {};
        this._axesValues = {};
        a && this.attach(a)
    };
    d.prototype.attach = function(a) {
        this._element = a;
        this._keyboard && this._keyboard.attach(a);
        this._mouse && this._mouse.attach(a)
    };
    d.prototype.detach = function() {
        this._keyboard && this._keyboard.detach();
        this._mouse && this._mouse.detach();
        this._element = null
    };
    d.prototype.disableContextMenu = function() {
        this._mouse || this._enableMouse();
        this._mouse.disableContextMenu()
    };
    d.prototype.enableContextMenu = function() {
        this._mouse || this._enableMouse();
        this._mouse.enableContextMenu()
    };
    d.prototype.update = function(a) {
        this._keyboard && this._keyboard.update(a);
        this._mouse && this._mouse.update(a);
        this._gamepads && this._gamepads.update(a);
        this._axesValues = {};
        for (var b in this._axes) this._axesValues[b] = []
    };
    d.prototype.registerKeys = function(a, b) {
        this._keyboard || this._enableKeyboard();
        if (this._actions[a]) throw Error(pc.string.format("Action: {0} already registered", a));
        if (void 0 === b) throw Error("Invalid button");
        b.length || (b = [b]);
        this._actions[a] ? this._actions[a].push({ type: pc.ACTION_KEYBOARD, keys: b }) : this._actions[a] = [{ type: pc.ACTION_KEYBOARD, keys: b }]
    };
    d.prototype.registerMouse = function(a, b) {
        this._mouse || this._enableMouse();
        if (void 0 === b) throw Error("Invalid button");
        this._actions[a] ? this._actions[a].push({ type: pc.ACTION_MOUSE, button: b }) : this._actions[a] = [{ type: pc.ACTION_MOUSE, button: -b }]
    };
    d.prototype.registerPadButton = function(a, b, c) {
        if (void 0 === c) throw Error("Invalid button");
        this._actions[a] ? this._actions[a].push({ type: pc.ACTION_GAMEPAD, button: c, pad: b }) : this._actions[a] = [{ type: pc.ACTION_GAMEPAD, button: c, pad: b }]
    };
    d.prototype.registerAxis = function(a) {
        var b = a.name;
        this._axes[b] || (this._axes[b] = []);
        var c = this._axes[b].push(b);
        a = a || {};
        a.pad = a.pad || pc.PAD_1;
        var e = function(e, d, h, m) {
            switch (d) {
                case "mousex":
                    e._mouse.on(pc.EVENT_MOUSEMOVE, function(a) { e._axesValues[b][c] = a.dx / 10 });
                    break;
                case "mousey":
                    e._mouse.on(pc.EVENT_MOUSEMOVE, function(a) { e._axesValues[b][c] = a.dy / 10 });
                    break;
                case "key":
                    e._axes[b].push(function() { return e._keyboard.isPressed(m) ? h : 0 });
                    break;
                case "padrx":
                    e._axes[b].push(function() { return e._gamepads.getAxis(a.pad, pc.PAD_R_STICK_X) });
                    break;
                case "padry":
                    e._axes[b].push(function() { return e._gamepads.getAxis(a.pad, pc.PAD_R_STICK_Y) });
                    break;
                case "padlx":
                    e._axes[b].push(function() { return e._gamepads.getAxis(a.pad, pc.PAD_L_STICK_X) });
                    break;
                case "padly":
                    e._axes[b].push(function() { return e._gamepads.getAxis(a.pad, pc.PAD_L_STICK_Y) });
                    break;
                default:
                    throw Error("Unknown axis");
            }
        };
        e(this, a.positive, 1, a.positiveKey);
        (a.negativeKey || a.negative !== a.positive) && e(this, a.negative, -1, a.negativeKey)
    };
    d.prototype.isPressed = function(a) {
        if (!this._actions[a]) return !1;
        var b, c, e = this._actions[a].length;
        for (c = 0; c < e; ++c) switch (b = this._actions[a][c], b.type) {
            case pc.ACTION_KEYBOARD:
                if (this._keyboard) {
                    var f, d = b.keys.length;
                    for (f = 0; f < d; f++)
                        if (this._keyboard.isPressed(b.keys[f])) return !0
                }
                break;
            case pc.ACTION_MOUSE:
                if (this._mouse && this._mouse.isPressed(b.button)) return !0;
                break;
            case pc.ACTION_GAMEPAD:
                if (this._gamepads && this._gamepads.isPressed(b.pad, b.button)) return !0
        }
        return !1
    };
    d.prototype.wasPressed = function(a) {
        if (!this._actions[a]) return !1;
        var b, c = this._actions[a].length;
        for (b = 0; b < c; ++b) {
            var e = this._actions[a][b];
            switch (e.type) {
                case pc.ACTION_KEYBOARD:
                    if (this._keyboard) {
                        var f, d = e.keys.length;
                        for (f = 0; f < d; f++)
                            if (this._keyboard.wasPressed(e.keys[f])) return !0
                    }
                    break;
                case pc.ACTION_MOUSE:
                    if (this._mouse && this._mouse.wasPressed(e.button)) return !0;
                    break;
                case pc.ACTION_GAMEPAD:
                    if (this._gamepads && this._gamepads.wasPressed(e.pad, e.button)) return !0
            }
        }
        return !1
    };
    d.prototype.getAxis = function(a) {
        var b = 0;
        if (this._axes[a]) {
            var c, e = this._axes[a].length;
            for (c = 0; c < e; c++)
                if ("function" === pc.type(this._axes[a][c])) {
                    var f = this._axes[a][c]();
                    Math.abs(f) > Math.abs(b) && (b = f)
                } else this._axesValues[a] && Math.abs(this._axesValues[a][c]) > Math.abs(b) && (b = this._axesValues[a][c])
        }
        return b
    };
    d.prototype._enableMouse = function() {
        this._mouse = new pc.Mouse;
        if (!this._element) throw Error("Controller must be attached to an Element");
        this._mouse.attach(this._element)
    };
    d.prototype._enableKeyboard = function() {
        this._keyboard = new pc.Keyboard;
        if (!this._element) throw Error("Controller must be attached to an Element");
        this._keyboard.attach(this._element)
    };
    return { Controller: d }
}());
pc.extend(pc, function() {
    var d = function() {};
    d.ContentType = { FORM_URLENCODED: "application/x-www-form-urlencoded", GIF: "image/gif", JPEG: "image/jpeg", DDS: "image/dds", JSON: "application/json", PNG: "image/png", TEXT: "text/plain", XML: "application/xml", WAV: "audio/x-wav", OGG: "audio/ogg", MP3: "audio/mpeg", MP4: "audio/mp4", AAC: "audio/aac", BIN: "application/octet-stream" };
    d.ResponseType = { TEXT: "text", ARRAY_BUFFER: "arraybuffer", BLOB: "blob", DOCUMENT: "document" };
    d.binaryExtensions = ".model .wav .ogg .mp3 .mp4 .m4a .aac .dds".split(" ");
    d.prototype = {
        ContentType: d.ContentType,
        ResponseType: d.ResponseType,
        binaryExtensions: d.binaryExtensions,
        get: function(a, b, c) { "function" === typeof b && (c = b, b = {}); return this.request("GET", a, b, c) },
        post: function(a, b, c, e) {
            "function" === typeof c && (e = c, c = {});
            c.postdata = b;
            return this.request("POST", a, c, e)
        },
        put: function(a, b, c, e) {
            "function" === typeof c && (e = c, c = {});
            c.postdata = b;
            return this.request("PUT", a, c, e)
        },
        del: function(a, b, c) { "function" === typeof b && (c = b, b = {}); return this.request("DELETE", a, b, c) },
        request: function(a, b, c, e) {
            var f, g, h, m = !1;
            "function" === typeof c && (e = c, c = {});
            c.callback = e;
            null == c.async && (c.async = !0);
            null == c.headers && (c.headers = {});
            if (null != c.postdata)
                if (c.postdata instanceof Document) g = c.postdata;
                else if (c.postdata instanceof FormData) g = c.postdata;
            else if (c.postdata instanceof Object) switch (g = c.headers["Content-Type"], void 0 === g && (c.headers["Content-Type"] = d.ContentType.FORM_URLENCODED, g = c.headers["Content-Type"]), g) {
                case d.ContentType.FORM_URLENCODED:
                    g = "";
                    e = !0;
                    for (f in c.postdata) c.postdata.hasOwnProperty(f) && (e ? e = !1 : g += "&", g += escape(f) + "=" + escape(c.postdata[f]));
                    break;
                default:
                    null == g && (c.headers["Content-Type"] = d.ContentType.JSON), g = JSON.stringify(c.postdata)
            } else g = c.postdata;
            h || (h = new XMLHttpRequest);
            !1 === c.cache && (e = pc.time.now(), f = new pc.URI(b), f.query = f.query ? f.query + "&ts=" + e : "ts=" + e, b = f.toString());
            c.query && (f = new pc.URI(b), e = pc.extend(f.getQuery(), c.query), f.setQuery(e), b = f.toString());
            h.open(a, b, c.async);
            h.withCredentials = void 0 !== c.withCredentials ? c.withCredentials : !1;
            h.responseType = c.responseType || this._guessResponseType(b);
            for (var l in c.headers) c.headers.hasOwnProperty(l) && h.setRequestHeader(l, c.headers[l]);
            h.onreadystatechange = function() { this._onReadyStateChange(a, b, c, h) }.bind(this);
            h.onerror = function() {
                this._onError(a, b, c, h);
                m = !0
            }.bind(this);
            try { h.send(g) } catch (p) { m || c.error(h.status, h, p) }
            return h
        },
        _guessResponseType: function(a) {
            a = new pc.URI(a);
            a = pc.path.getExtension(a.path);
            return 0 <= d.binaryExtensions.indexOf(a) ? d.ResponseType.ARRAY_BUFFER : d.ResponseType.TEXT
        },
        _isBinaryContentType: function(a) { return 0 <= [d.ContentType.MP4, d.ContentType.WAV, d.ContentType.OGG, d.ContentType.MP3, d.ContentType.BIN, d.ContentType.DDS].indexOf(a) ? !0 : !1 },
        _onReadyStateChange: function(a, b, c, e) {
            if (4 === e.readyState) switch (e.status) {
                case 0:
                    "/" != b[0] && this._onSuccess(a, b, c, e);
                    break;
                case 200:
                case 201:
                case 206:
                case 304:
                    this._onSuccess(a, b, c, e);
                    break;
                default:
                    this._onError(a, b, c, e)
            }
        },
        _onSuccess: function(a, b, c, e) {
            var f;
            if (a = e.getResponseHeader("Content-Type")) a = a.split(";"), f = a[0].trim(), a[1] && a[1].trim();
            f === this.ContentType.JSON || b.split("?")[0].endsWith(".json") ? b = JSON.parse(e.responseText) : this._isBinaryContentType(f) ? b = e.response : e.responseType === d.ResponseType.ARRAY_BUFFER ? (logWARNING(pc.string.format("responseType: {0} being served with Content-Type: {1}", d.ResponseType.ARRAY_BUFFER, f)), b = e.response) : b = e.responseType === d.ResponseType.DOCUMENT || f === this.ContentType.XML ? e.responseXML : e.responseText;
            c.callback(null, b)
        },
        _onError: function(a, b, c, e) { c.callback(e.status, null) }
    };
    return { Http: d, http: new d }
}());
pc.extend(pc, function() {
    var d = function(a) {
        pc.events.attach(this);
        this.app = a;
        this._scripts = {};
        this._list = []
    };
    d.prototype.add = function(a) {
        var b = this;
        if (this._scripts.hasOwnProperty(a.__name)) return setTimeout(function() {
            if (a.prototype.swap) {
                var c = b._list.indexOf(b._scripts[a.__name]);
                b._list[c] = a;
                b._scripts[a.__name] = a;
                b.fire("swap", a.__name, a);
                b.fire("swap:" + a.__name, a)
            } else console.warn("script registry already has '" + a.__name + "' script, define 'swap' method for new script type to enable code hot swapping")
        }), !1;
        this._scripts[a.__name] = a;
        this._list.push(a);
        this.fire("add", a.__name, a);
        this.fire("add:" + a.__name, a);
        setTimeout(function() {
            if (b._scripts.hasOwnProperty(a.__name)) {
                var c = b.app.systems.script._components,
                    e, f, d, h = [],
                    m = [];
                for (e = 0; e < c.length; e++) c[e]._scriptsIndex[a.__name] && c[e]._scriptsIndex[a.__name].awaiting && (c[e]._scriptsData && c[e]._scriptsData[a.__name] && (d = c[e]._scriptsData[a.__name].attributes), (f = c[e].create(a.__name, { preloading: !0, ind: c[e]._scriptsIndex[a.__name].ind, attributes: d })) && h.push(f));
                for (e = 0; e < h.length; e++) h[e].__initializeAttributes();
                for (e = 0; e < h.length; e++) h[e].enabled && (h[e]._initialized = !0, m.push(h[e]), h[e].initialize && h[e].initialize());
                for (e = 0; e < m.length; e++) m[e]._postInitialized = !0, m[e].postInitialize && m[e].postInitialize()
            }
        });
        return !0
    };
    d.prototype.remove = function(a) {
        var b = a;
        "function" === typeof a && (b = a.__name);
        if (!this._scripts.hasOwnProperty(b)) return !1;
        a = this._scripts[b];
        delete this._scripts[b];
        var c = this._list.indexOf(a);
        this._list.splice(c, 1);
        this.fire("remove", b, a);
        this.fire("remove:" + b, a);
        return !0
    };
    d.prototype.get = function(a) { return this._scripts[a] || null };
    d.prototype.has = function(a) { return this._scripts.hasOwnProperty(a) };
    d.prototype.list = function() { return this._list };
    return { ScriptRegistry: d }
}());
pc.extend(pc, function() {
    var d = function(a, b, c, e) {
            switch (b.type) {
                case "boolean":
                    return !!c;
                case "number":
                    if ("number" === typeof c) break;
                    else return "string" === typeof c ? (c = parseInt(c, 10), isNaN(c) ? null : c) : "boolean" === typeof c ? 0 + c : null;
                case "json":
                    if ("object" === typeof c) break;
                    else try { return JSON.parse(c) } catch (d) { return null }
                case "asset":
                    if (c instanceof pc.Asset) break;
                    else return "number" === typeof c ? a.assets.get(c) || null : "string" === typeof c ? a.assets.get(parseInt(c, 10)) || null : null;
                case "entity":
                    if (c instanceof pc.GraphNode) break;
                    else return "string" === typeof c ? a.root.findByGuid(c) : null;
                case "rgb":
                case "rgba":
                    if (c instanceof pc.Color) { if (e instanceof pc.Color) return e.copy(c), e; break } else {
                        if (c instanceof Array && 3 <= c.length && 4 >= c.length) {
                            for (a = 0; a < c.length; a++)
                                if ("number" !== typeof c[a]) return null;
                            e || (e = new pc.Color);
                            for (a = 0; 4 > a; a++) e.data[a] = 4 === a && 3 === c.length ? 1 : c[a];
                            return e
                        }
                        return "string" === typeof c && /#([0-9abcdef]{2}){3,4}/i.test(c) ? (e || (e = new pc.Color), e.fromString(c), e) : null
                    }
                case "vec2":
                case "vec3":
                case "vec4":
                    if (b = parseInt(b.type.slice(3), 10), c instanceof pc["Vec" + b]) { if (e instanceof pc["Vec" + b]) return e.copy(c), e } else {
                        if (c instanceof Array && c.length === b) {
                            for (a = 0; a < c.length; a++)
                                if ("number" !== typeof c[a]) return null;
                            e || (e = new pc["Vec" + b]);
                            for (a = 0; a < b; a++) e.data[a] = c[a];
                            return e
                        }
                        return null
                    }
            }
            return c
        },
        a = function(a) {
            this.scriptType = a;
            this.index = {}
        };
    a.prototype.add = function(a, b) {
        this.index[a] ? console.warn("attribute '" + a + "' is already defined for script type '" + this.scriptType.name + "'") : pc.createScript.reservedAttributes[a] ? console.warn("attribute '" + a + "' is a reserved attribute name") : (this.index[a] = b, Object.defineProperty(this.scriptType.prototype, a, {
            get: function() { return this.__attributes[a] },
            set: function(c) {
                var e = this.__attributes[a];
                this.__attributes[a] = d(this.app, b, c, e);
                this.fire("attr", a, this.__attributes[a], e);
                this.fire("attr:" + a, this.__attributes[a], e)
            }
        }))
    };
    a.prototype.remove = function(a) {
        if (!this.index[a]) return !1;
        delete this.index[a];
        delete this.scriptType.prototype[a];
        return !0
    };
    a.prototype.has = function(a) { return !!this.index[a] };
    a.prototype.get = function(a) { return this.index[a] || null };
    var b = function(c, e) {
        if (b.reservedScripts[c]) throw Error("script name: '" + c + "' is reserved, please change script name");
        var d = function(a) {
            a && a.app && a.entity || console.warn("script '" + c + "' has missing arguments in consructor");
            pc.events.attach(this);
            this.app = a.app;
            this.entity = a.entity;
            this._enabled = "boolean" === typeof a.enabled ? a.enabled : !0;
            this._enabledOld = this.enabled;
            this.__attributes = {};
            this.__attributesRaw = a.attributes || null;
            this.__scriptType = d
        };
        d.__name = c;
        d.attributes = new a(d);
        d.prototype.__initializeAttributes = function() {
            if (this.__attributesRaw) {
                for (var a in d.attributes.index) this.__attributesRaw && this.__attributesRaw.hasOwnProperty(a) ? this[a] = this.__attributesRaw[a] : d.attributes.index[a].hasOwnProperty("default") ? this[a] = d.attributes.index[a]["default"] : this[a] = null;
                this.__attributesRaw = null
            }
        };
        d.extend = function(a) { for (var b in a) a.hasOwnProperty(b) && (d.prototype[b] = a[b]) };
        Object.defineProperty(d.prototype, "enabled", {
            get: function() { return this._enabled && this.entity.script.enabled && this.entity.enabled },
            set: function(a) {
                this._enabled !== !!a && (this._enabled = !!a);
                this.enabled !== this._enabledOld && (this._enabledOld = this.enabled, this.fire(this.enabled ? "enabled" : "disabled"), this.fire("state", this.enabled))
            }
        });
        (e ? e.scripts : pc.Application.getApplication().scripts).add(d);
        pc.ScriptHandler._push(d);
        return d
    };
    b.reservedScripts = "system entity create destroy swap move scripts _scripts _scriptsIndex _scriptsData enabled _oldState onEnable onDisable onPostStateChange _onSetEnabled _checkState _onBeforeRemove _onInitializeAttributes _onInitialize _onPostInitialize _onUpdate _onPostUpdate _callbacks has on off fire once hasEvent".split(" ");
    for (var c = {}, e = 0; e < b.reservedScripts.length; e++) c[b.reservedScripts[e]] = 1;
    b.reservedScripts = c;
    b.reservedAttributes = "app entity enabled _enabled _enabledOld __attributes __attributesRaw __scriptType _callbacks has on off fire once hasEvent".split(" ");
    c = {};
    for (e = 0; e < b.reservedAttributes.length; e++) c[b.reservedAttributes[e]] = 1;
    b.reservedAttributes = c;
    return { createScript: b }
}());
pc.script = function() {
    var d = !0,
        a = {
            app: null,
            create: function(a, c) {
                if (d) {
                    var e = c(pc.script.app);
                    e._pcScriptName = a;
                    pc.ScriptHandler._push(e);
                    this.fire("created", a, c)
                }
            },
            attribute: function(a, c, e, f) {},
            createLoadingScreen: function(a) {
                var c = pc.Application.getApplication();
                a(c)
            }
        };
    Object.defineProperty(a, "legacy", { get: function() { return d }, set: function(a) { d = a } });
    pc.events.attach(a);
    return a
}();
pc.extend(pc, function() {
    return {
        ContentFile: function(d) {
            this.packs = d.packs || {};
            this.appProperties = d.application_properties || {};
            this.toc = d.toc || {}
        }
    }
}());
pc.extend(pc, function() {
    return {
        Pack: function(d) {
            this.hierarchy = d.hierarchy;
            this.settings = d.settings
        }
    }
}());
pc.extend(pc, function() {
    var d = function(a, c) {
        c = c || {};
        pc.log.open();
        pc.events.attach(this);
        d._applications[a.id] = this;
        d._currentApplication = this;
        this._time = 0;
        this.timeScale = 1;
        this._librariesLoaded = !1;
        this._fillMode = pc.FILLMODE_KEEP_ASPECT;
        this._resolutionMode = pc.RESOLUTION_FIXED;
        this.context = this;
        this.graphicsDevice = new pc.GraphicsDevice(a, c.graphicsDeviceOptions);
        this.stats = new pc.ApplicationStats(this.graphicsDevice);
        this.systems = new pc.ComponentSystemRegistry;
        this._audioManager = new pc.SoundManager;
        this.loader = new pc.ResourceLoader;
        this.scene = new pc.Scene;
        this.root = new pc.Entity(this);
        this.root._enabledInHierarchy = !0;
        this._enableList = [];
        this._enableList.size = 0;
        this.assets = new pc.AssetRegistry(this.loader);
        this.scriptsOrder = c.scriptsOrder || [];
        this.scripts = new pc.ScriptRegistry(this);
        this.renderer = new pc.ForwardRenderer(this.graphicsDevice);
        this.lightmapper = new pc.Lightmapper(this.graphicsDevice, this.root, this.scene, this.renderer, this.assets);
        this.once("prerender", this._firstBake, this);
        this.keyboard = c.keyboard || null;
        this.mouse = c.mouse || null;
        this.touch = c.touch || null;
        this.gamepads = c.gamepads || null;
        this._inTools = !1;
        this._skyboxLast = 0;
        this._scriptPrefix = c.scriptPrefix || "";
        this.loader.addHandler("animation", new pc.AnimationHandler);
        this.loader.addHandler("model", new pc.ModelHandler(this.graphicsDevice));
        this.loader.addHandler("material", new pc.MaterialHandler(this.assets));
        this.loader.addHandler("texture", new pc.TextureHandler(this.graphicsDevice, this.assets, this.loader));
        this.loader.addHandler("text", new pc.TextHandler);
        this.loader.addHandler("json", new pc.JsonHandler);
        this.loader.addHandler("audio", new pc.AudioHandler(this._audioManager));
        this.loader.addHandler("script", new pc.ScriptHandler(this));
        this.loader.addHandler("scene", new pc.SceneHandler(this));
        this.loader.addHandler("cubemap", new pc.CubemapHandler(this.graphicsDevice, this.assets, this.loader));
        this.loader.addHandler("html", new pc.HtmlHandler);
        this.loader.addHandler("css", new pc.CssHandler);
        this.loader.addHandler("shader", new pc.ShaderHandler);
        this.loader.addHandler("hierarchy", new pc.HierarchyHandler(this));
        this.loader.addHandler("scenesettings", new pc.SceneSettingsHandler(this));
        this.loader.addHandler("folder", new pc.FolderHandler);
        new pc.RigidBodyComponentSystem(this);
        new pc.CollisionComponentSystem(this);
        new pc.AnimationComponentSystem(this);
        new pc.ModelComponentSystem(this);
        new pc.CameraComponentSystem(this);
        new pc.LightComponentSystem(this);
        pc.script.legacy ? new pc.ScriptLegacyComponentSystem(this, c.scriptPrefix) : new pc.ScriptComponentSystem(this);
        new pc.AudioSourceComponentSystem(this, this._audioManager);
        new pc.SoundComponentSystem(this, this._audioManager);
        new pc.AudioListenerComponentSystem(this, this._audioManager);
        new pc.ParticleSystemComponentSystem(this);
        this._visibilityChangeHandler = this.onVisibilityChange.bind(this);
        void 0 !== document.hidden ? (this._hiddenAttr = "hidden", document.addEventListener("visibilitychange", this._visibilityChangeHandler, !1)) : void 0 !== document.mozHidden ? (this._hiddenAttr = "mozHidden", document.addEventListener("mozvisibilitychange", this._visibilityChangeHandler, !1)) : void 0 !== document.msHidden ? (this._hiddenAttr = "msHidden", document.addEventListener("msvisibilitychange", this._visibilityChangeHandler, !1)) : void 0 !== document.webkitHidden && (this._hiddenAttr = "webkitHidden", document.addEventListener("webkitvisibilitychange", this._visibilityChangeHandler, !1));
        this.tick = b(this)
    };
    d._currentApplication = null;
    d._applications = {};
    d.getApplication = function(a) { return a ? d._applications[a] : d._currentApplication };
    var a = function(a) {
        this.length = a;
        this.count = 0;
        this.inc = function() { this.count++ };
        this.done = function() { return this.count === this.length }
    };
    d.prototype = {
        configure: function(a, b) {
            var c = this;
            pc.http.get(a, function(a, e) {
                if (a) b(a);
                else {
                    var d = e.assets;
                    c._parseApplicationProperties(e.application_properties, function(a) {
                        c._parseAssets(d);
                        a ? b(a) : b(null)
                    })
                }
            })
        },
        preload: function(b) {
            var c = this;
            c.fire("preload:start");
            var d = this.assets.list({ preload: !0 }),
                h = new a(d.length),
                m = !1,
                l = function() { c.graphicsDevice && !m && h.done() && (m = !0, c.fire("preload:end"), b()) },
                p = d.length,
                k;
            if (h.length) {
                var q = function(a) {
                        h.inc();
                        c.fire("preload:progress", h.count / p);
                        h.done() && l()
                    },
                    r = function(a, b) {
                        h.inc();
                        c.fire("preload:progress", h.count / p);
                        h.done() && l()
                    };
                if (!pc.script.legacy) {
                    var n = {};
                    for (k = 0; k < this.scriptsOrder.length; k++) n[this.scriptsOrder[k]] = k;
                    d.sort(function(a, b) {
                        if ("script" === a.type && "script" === b.type) {
                            var c = n.hasOwnProperty(a.id) ? n[a.id] : Number.MAX_SAFE_INTEGER,
                                e = n.hasOwnProperty(b.id) ? n[b.id] : Number.MAX_SAFE_INTEGER;
                            return c - e
                        }
                        return "script" !== a.type && "script" !== b.type || a.type === b.type ? 0 : "script" === a.type ? -1 : 1
                    })
                }
                for (k = 0; k < h.length; k++) d[k].loaded ? (h.inc(), c.fire("preload:progress", h.count / p), h.done() && l()) : (d[k].once("load", q), d[k].once("error", r), this.assets.load(d[k]))
            } else l()
        },
        loadSceneHierarchy: function(a, b) {
            var c = this,
                d = this.loader.getHandler("hierarchy");
            d.load(a, function(m, l) {
                this._preloadScripts(l, function() {
                    var p = d.open(a, l);
                    c.loader.clearCache(a, "hierarchy");
                    c.root.addChild(p);
                    pc.ComponentSystem.initialize(p);
                    pc.ComponentSystem.postInitialize(p);
                    b && b(m, p)
                })
            }.bind(this))
        },
        loadSceneSettings: function(a, b) { this.loader.load(a, "scenesettings", function(a, c) { a ? b && b(a) : (this.applySceneSettings(c), b && b(null)) }.bind(this)) },
        loadScene: function(a, b) {
            var c = this,
                d = this.loader.getHandler("scene");
            d.load(a, function(m, l) {
                m ? b && b(m) : this._preloadScripts(l, function() {
                    var m = d.open(a, l);
                    c.loader.clearCache(a, "scene");
                    c.loader.patch({ resource: m, type: "scene" }, c.assets);
                    c.root.addChild(m.root);
                    c.systems.rigidbody && "undefined" !== typeof Ammo && c.systems.rigidbody.setGravity(m._gravity.x, m._gravity.y, m._gravity.z);
                    b && b(null, m)
                })
            }.bind(this))
        },
        _preloadScripts: function(b, c) {
            if (pc.script.legacy) {
                var d = this;
                d.systems.script.preloading = !0;
                var h = this._getScriptReferences(b),
                    m = 0,
                    l = h.length,
                    p = new a(l),
                    k, q = /^http(s)?:\/\//;
                if (l)
                    for (var r = function(a, b) {
                            a && console.error(a);
                            p.inc();
                            p.done() && (d.systems.script.preloading = !1, c())
                        }, m = 0; m < l; m++) k = h[m], !q.test(k.toLowerCase()) && d.systems.script._prefix && (k = pc.path.join(d.systems.script._prefix, h[m])), this.loader.load(k, "script", r);
                else d.systems.script.preloading = !1, c()
            } else c()
        },
        _parseApplicationProperties: function(a, b) {
            this._width = a.width;
            this._height = a.height;
            a.use_device_pixel_ratio && (this.graphicsDevice.maxPixelRatio = window.devicePixelRatio);
            this.setCanvasResolution(a.resolution_mode, this._width, this._height);
            this.setCanvasFillMode(a.fill_mode, this._width, this._height);
            this._loadLibraries(a.libraries, b)
        },
        _loadLibraries: function(a, b) {
            var c = a.length,
                d = c,
                m = this;
            if (c)
                for (var l = function(a, c) {
                        d--;
                        a ? b(a) : 0 === d && (m.onLibrariesLoaded(), b(null))
                    }, p = 0; p < c; ++p) this.loader.load(a[p], "script", l);
            else b(null)
        },
        _parseAssets: function(a) {
            for (var b in a) {
                var c = a[b],
                    d = new pc.Asset(c.name, c.type, c.file, c.data);
                d.id = parseInt(b);
                d.preload = c.preload ? c.preload : !1;
                d.tags.add(c.tags);
                this.assets.add(d)
            }
        },
        _getScriptReferences: function(a) {
            var b, c, d = [];
            a.settings.priority_scripts && (d = a.settings.priority_scripts);
            var m = [],
                l = {};
            for (b = 0; b < d.length; b++) m.push(d[b]), l[d[b]] = !0;
            a = a.entities;
            for (c in a)
                if (a[c].components.script)
                    for (d = a[c].components.script.scripts, b = 0; b < d.length; b++) l[d[b].url] || (m.push(d[b].url), l[d[b].url] = !0);
            return m
        },
        start: function() {
            this.fire("start", { timestamp: pc.now(), target: this });
            if (!this._librariesLoaded) this.onLibrariesLoaded();
            pc.ComponentSystem.initialize(this.root);
            this.fire("initialize");
            pc.ComponentSystem.postInitialize(this.root);
            this.fire("postinitialize");
            this.tick()
        },
        update: function(a) {
            this.graphicsDevice.updateClientRect();
            pc.ComponentSystem.fixedUpdate(1 / 60, this._inTools);
            pc.ComponentSystem.update(a, this._inTools);
            pc.ComponentSystem.postUpdate(a, this._inTools);
            this.controller && this.controller.update(a);
            this.mouse && this.mouse.update(a);
            this.keyboard && this.keyboard.update(a);
            this.gamepads && this.gamepads.update(a);
            this.fire("update", a)
        },
        render: function() {
            this.fire("prerender");
            var a = this.systems.camera.cameras,
                b, c = this.renderer;
            this.root.syncHierarchy();
            for (var d = 0, m = a.length; d < m; d++) b = a[d], b.frameBegin(), c.render(this.scene, b.camera), b.frameEnd()
        },
        _fillFrameStats: function(a, b, c) {
            var d = this.stats.frame;
            d.dt = b;
            d.ms = c;
            a > d._timeToCountFrames ? (d.fps = d._fpsAccum, d._fpsAccum = 0, d._timeToCountFrames = a + 1E3) : d._fpsAccum++;
            d.cameras = this.renderer._camerasRendered;
            d.materials = this.renderer._materialSwitches;
            d.shaders = this.graphicsDevice._shaderSwitchesPerFrame;
            d.shadowMapUpdates = this.renderer._shadowMapUpdates;
            d.shadowMapTime = this.renderer._shadowMapTime;
            d.forwardTime = this.renderer._forwardTime;
            a = this.graphicsDevice._primsPerFrame;
            d.triangles = a[pc.PRIMITIVE_TRIANGLES] / 3 + Math.max(a[pc.PRIMITIVE_TRISTRIP] - 2, 0) + Math.max(a[pc.PRIMITIVE_TRIFAN] - 2, 0);
            d.cullTime = this.renderer._cullTime;
            for (b = d.otherPrimitives = 0; b < a.length; b++) b < pc.PRIMITIVE_TRIANGLES && (d.otherPrimitives += a[b]), a[b] = 0;
            this.renderer._camerasRendered = 0;
            this.renderer._materialSwitches = 0;
            this.renderer._shadowMapUpdates = 0;
            this.graphicsDevice._shaderSwitchesPerFrame = 0;
            this.renderer._cullTime = 0;
            d = this.stats.drawCalls;
            d.forward = this.renderer._forwardDrawCalls;
            d.depth = this.renderer._depthDrawCalls;
            d.shadow = this.renderer._shadowDrawCalls;
            d.skinned = this.renderer._skinDrawCalls;
            d.immediate = this.renderer._immediateRendered;
            d.instanced = this.renderer._instancedDrawCalls;
            d.removedByInstancing = this.renderer._removedByInstancing;
            d.total = this.graphicsDevice._drawCallsPerFrame;
            d.misc = d.total - (d.forward + d.depth + d.shadow);
            this.renderer._depthDrawCalls = 0;
            this.renderer._shadowDrawCalls = 0;
            this.renderer._forwardDrawCalls = 0;
            this.renderer._skinDrawCalls = 0;
            this.renderer._immediateRendered = 0;
            this.renderer._instancedDrawCalls = 0;
            this.renderer._removedByInstancing = 0;
            this.graphicsDevice._drawCallsPerFrame = 0;
            this.stats.misc.renderTargetCreationTime = this.graphicsDevice._renderTargetCreationTime;
            d = this.stats.particles;
            d.updatesPerFrame = d._updatesPerFrame;
            d.frameTime = d._frameTime;
            d._updatesPerFrame = 0;
            d._frameTime = 0
        },
        setCanvasFillMode: function(a, b, c) {
            this._fillMode = a;
            this.resizeCanvas(b, c)
        },
        setCanvasResolution: function(a, b, c) {
            this._resolutionMode = a;
            a === pc.RESOLUTION_AUTO && void 0 === b && (b = this.graphicsDevice.canvas.clientWidth, c = this.graphicsDevice.canvas.clientHeight);
            this.graphicsDevice.resizeCanvas(b, c)
        },
        isFullscreen: function() { return !!document.fullscreenElement },
        enableFullscreen: function(a, b, c) {
            a = a || this.graphicsDevice.canvas;
            var d = function() {
                    b();
                    document.removeEventListener("fullscreenchange", d)
                },
                m = function() {
                    c();
                    document.removeEventListener("fullscreenerror", m)
                };
            b && document.addEventListener("fullscreenchange", d, !1);
            c && document.addEventListener("fullscreenerror", m, !1);
            a.requestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        },
        disableFullscreen: function(a) {
            var b = function() {
                a();
                document.removeEventListener("fullscreenchange", b)
            };
            a && document.addEventListener("fullscreenchange", b, !1);
            document.exitFullscreen()
        },
        isHidden: function() { return document[this._hiddenAttr] },
        onVisibilityChange: function(a) { this.isHidden() ? this._audioManager.suspend() : this._audioManager.resume() },
        resizeCanvas: function(a, b) {
            var c = window.innerWidth,
                d = window.innerHeight;
            if (navigator.isCocoonJS) a = c, b = d, this.graphicsDevice.resizeCanvas(a, b);
            else {
                if (this._fillMode === pc.FILLMODE_KEEP_ASPECT) {
                    var m = this.graphicsDevice.canvas.width / this.graphicsDevice.canvas.height;
                    m > c / d ? (a = c, b = a / m) : (b = d, a = b * m)
                } else this._fillMode === pc.FILLMODE_FILL_WINDOW && (a = c, b = d);
                this.graphicsDevice.canvas.style.width = a + "px";
                this.graphicsDevice.canvas.style.height = b + "px";
                this._resolutionMode === pc.RESOLUTION_AUTO && this.setCanvasResolution(pc.RESOLUTION_AUTO)
            }
            return { width: a, height: b }
        },
        onLibrariesLoaded: function() {
            this._librariesLoaded = !0;
            this.systems.rigidbody.onLibraryLoaded();
            this.systems.collision.onLibraryLoaded()
        },
        applySceneSettings: function(a) {
            var b;
            this.systems.rigidbody && "undefined" !== typeof Ammo && (b = a.physics.gravity, this.systems.rigidbody.setGravity(b[0], b[1], b[2]));
            this.scene.applySettings(a);
            if (a.render.skybox && this._skyboxLast !== a.render.skybox) {
                this._skyboxLast && (this.assets.off("add:" + this._skyboxLast, this._onSkyboxAdd, this), this.assets.off("load:" + this._skyboxLast, this._onSkyBoxLoad, this), this.assets.off("remove:" + this._skyboxLast, this._onSkyboxRemove, this));
                this._skyboxLast = a.render.skybox;
                b = this.assets.get(a.render.skybox);
                this.assets.on("load:" + a.render.skybox, this._onSkyBoxLoad, this);
                this.assets.once("remove:" + a.render.skybox, this._onSkyboxRemove, this);
                if (!b) this.assets.once("add:" + a.render.skybox, this._onSkyboxAdd, this);
                b && (b.resource && this.scene.setSkybox(b.resources), this._onSkyboxAdd(b))
            } else a.render.skybox ? 0 === this.scene.skyboxMip && a.render.skybox && (b = this.assets.get(a.render.skybox)) && this._onSkyboxAdd(b) : this._onSkyboxRemove({ id: this._skyboxLast })
        },
        _onSkyboxAdd: function(a) {
            0 === this.scene.skyboxMip && (a.loadFaces = !0);
            this.assets.load(a)
        },
        _onSkyBoxLoad: function(a) { this.scene.setSkybox(a.resources) },
        _onSkyboxRemove: function(a) {
            this.assets.off("add:" +
                a.id, this._onSkyboxAdd, this);
            this.assets.off("load:" + a.id, this._onSkyBoxLoad, this);
            this.scene.setSkybox(null);
            this._skyboxLast = null
        },
        _firstBake: function() { this.lightmapper.bake() },
        destroy: function() {
            d._applications[this.graphicsDevice.canvas.id] = null;
            this.off("librariesloaded");
            document.removeEventListener("visibilitychange", this._visibilityChangeHandler);
            document.removeEventListener("mozvisibilitychange", this._visibilityChangeHandler);
            document.removeEventListener("msvisibilitychange", this._visibilityChangeHandler);
            document.removeEventListener("webkitvisibilitychange", this._visibilityChangeHandler);
            this.mouse && (this.mouse.off("mouseup"), this.mouse.off("mousedown"), this.mouse.off("mousewheel"), this.mouse.off("mousemove"), this.mouse = null);
            this.keyboard && (this.keyboard.off("keydown"), this.keyboard.off("keyup"), this.keyboard.off("keypress"), this.keyboard = null);
            this.touch && (this.touch.off("touchstart"), this.touch.off("touchend"), this.touch.off("touchmove"), this.touch.off("touchcancel"), this.touch = null);
            this.controller && (this.controller = null);
            this.root.destroy();
            pc.ComponentSystem.destroy();
            this.loader.destroy();
            this.scene = this.loader = null;
            this.systems = [];
            this.renderer = this.graphicsDevice = this.context = null;
            this._audioManager && (this._audioManager.destroy(), this._audioManager = null);
            pc.http = new pc.Http
        }
    };
    var b = function(a) {
            return function() {
                if (a.graphicsDevice) {
                    d._currentApplication = a;
                    pc.app = a;
                    window.requestAnimationFrame(a.tick);
                    var b = pc.now(),
                        g = b - (a._time || b);
                    a._time = b;
                    b = pc.math.clamp(g / 1E3, 0, .1);
                    b *= a.timeScale;
                    a.update(b);
                    a.render();
                    c.timestamp = pc.now();
                    c.target = a;
                    a.fire("frameend", c);
                    a.fire("frameEnd", c)
                }
            }
        },
        c = {};
    return { FILLMODE_NONE: "NONE", FILLMODE_FILL_WINDOW: "FILL_WINDOW", FILLMODE_KEEP_ASPECT: "KEEP_ASPECT", RESOLUTION_AUTO: "AUTO", RESOLUTION_FIXED: "FIXED", Application: d }
}());
pc.ApplicationStats = function(d) {
    this.frame = { fps: 0, ms: 0, dt: 0, updateStart: 0, updateTime: 0, renderStart: 0, renderTime: 0, physicsStart: 0, physicsTime: 0, cullTime: 0, triangles: 0, otherPrimitives: 0, shaders: 0, materials: 0, cameras: 0, shadowMapUpdates: 0, shadowMapTime: 0, forwardTime: 0, _timeToCountFrames: 0, _fpsAccum: 0 };
    this.drawCalls = { forward: 0, depth: 0, shadow: 0, immediate: 0, misc: 0, total: 0, skinned: 0, instanced: 0, removedByInstancing: 0 };
    this.misc = { renderTargetCreationTime: 0 };
    this.particles = { updatesPerFrame: 0, _updatesPerFrame: 0, frameTime: 0, _frameTime: 0 };
    this.vram = d._vram;
    this.shaders = d._shaderStats;
    Object.defineProperty(this.vram, "totalUsed", { get: function() { return this.tex + this.vb + this.ib } });
    Object.defineProperty(this, "scene", { get: function() { return pc.Application._currentApplication.scene._stats } });
    Object.defineProperty(this, "lightmapper", { get: function() { return pc.Application._currentApplication.lightmapper._stats } });
    pc.events.attach(this)
};
pc.extend(pc, function() {
    var d = function() {};
    d.prototype = {
        add: function(a, b) {
            if (this[a]) throw Error(pc.string.format("ComponentSystem name '{0}' already registered or not allowed", a));
            this[a] = b;
            b.name = a
        },
        remove: function(a) {
            if (!this[a]) throw Error(pc.string.format("No ComponentSystem named '{0}' registered", a));
            delete this[a]
        },
        list: function() {
            var a = Object.keys(this),
                b = { collisionrect: .5, collisioncircle: .5 };
            a.sort(function(a, e) {
                var d = b[a] || 1,
                    g = b[e] || 1;
                return d < g ? -1 : d > g ? 1 : 0
            });
            return a.map(function(a) { return this[a] }, this)
        },
        getComponentSystemOrder: function() {
            var a, b = Object.keys(this);
            a = b.indexOf("collisionrect");
            b.splice(a, 1);
            b.unshift("collisionrect");
            a = b.indexOf("collisioncircle");
            b.splice(a, 1);
            b.unshift("collisioncircle");
            return b
        }
    };
    return { ComponentSystemRegistry: d }
}());
pc.extend(pc, function() {
    var d = function(a) {
        this.app = a;
        this.dataStore = {};
        this.schema = [];
        pc.events.attach(this)
    };
    pc.extend(d, { initialize: function(a) { d.fire("initialize", a) }, postInitialize: function(a) { d.fire("postInitialize", a) }, update: function(a, b) { b ? d.fire("toolsUpdate", a) : d.fire("update", a) }, fixedUpdate: function(a, b) { d.fire("fixedUpdate", a) }, postUpdate: function(a, b) { d.fire("postUpdate", a) } });
    d.prototype = {
        get store() { return this.dataStore },
        addComponent: function(a, b) {
            var c = new this.ComponentType(this, a),
                e = new this.DataType;
            b = b || {};
            this.dataStore[a._guid] = { entity: a, data: e };
            a[this.id] = c;
            a.c[this.id] = c;
            this.initializeComponentData(c, b, []);
            this.fire("add", a, c);
            return c
        },
        removeComponent: function(a) {
            var b = this.dataStore[a._guid];
            this.fire("beforeremove", a, a.c[this.id]);
            delete this.dataStore[a._guid];
            delete a[this.id];
            delete a.c[this.id];
            this.fire("remove", a, b.data)
        },
        cloneComponent: function(a, b) { return this.addComponent(b, this.dataStore[a._guid].data) },
        initializeComponentData: function(a, b, c) {
            b = b || {};
            c.forEach(function(c) { a[c] = void 0 !== b[c] ? b[c] : a.data[c] }, this);
            if (a.enabled && a.entity.enabled) a.onEnable()
        }
    };
    pc.events.attach(d);
    d.destroy = function() {
        d.off("initialize");
        d.off("postInitialize");
        d.off("toolsUpdate");
        d.off("update");
        d.off("fixedUpdate");
        d.off("postUpdate")
    };
    return { ComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
        this.system = a;
        this.entity = b;
        pc.events.attach(this);
        this.system.schema && this.buildAccessors(this.system.schema);
        this.on("set", function(a, b, d) { this.fire("set_" + a, a, b, d) });
        this.on("set_enabled", this.onSetEnabled, this)
    };
    d.prototype = {
        get data() { var a = this.system.store[this.entity._guid]; return a ? a.data : null },
        buildAccessors: function(a) {
            var b = this;
            a.forEach(function(a) {
                Object.defineProperty(b, a, {
                    get: function() { return b.data[a] },
                    set: function(e) {
                        var d = b.data,
                            g = d[a];
                        d[a] = e;
                        b.fire("set", a, g, e)
                    },
                    configurable: !0
                })
            })
        },
        onSetEnabled: function(a, b, c) {
            if (b !== c && this.entity.enabled)
                if (c) this.onEnable();
                else this.onDisable()
        },
        onEnable: function() {},
        onDisable: function() {},
        onPostStateChange: function() {}
    };
    return { Component: d }
}());
pc.extend(pc, function() { return { ComponentData: function() {} } }());
pc.extend(pc, function() {
    var d = function(a, b) {
            this.on("set_animations", this.onSetAnimations, this);
            this.on("set_assets", this.onSetAssets, this);
            this.on("set_loop", this.onSetLoop, this)
        },
        d = pc.inherits(d, pc.Component);
    pc.extend(d.prototype, {
        play: function(a, b) {
            if (!this.data.animations[a]) console.error(pc.string.format("Trying to play animation '{0}' which doesn't exist", a));
            else if (this.enabled && this.entity.enabled) {
                b = b || 0;
                var c = this.data;
                c.prevAnim = c.currAnim;
                c.currAnim = a;
                c.model && (c.blending = 0 < b && c.prevAnim, c.blending ? (c.blendTime = b, c.blendTimeRemaining = b, c.fromSkel.setAnimation(c.animations[c.prevAnim]), c.fromSkel.addTime(c.skeleton.getCurrentTime()), c.toSkel.setAnimation(c.animations[c.currAnim])) : c.skeleton.setAnimation(c.animations[c.currAnim]));
                c.playing = !0
            }
        },
        getAnimation: function(a) { return this.data.animations[a] },
        setModel: function(a) {
            var b = this.data;
            if (a) {
                var c = a.getGraph();
                b.fromSkel = new pc.Skeleton(c);
                b.toSkel = new pc.Skeleton(c);
                b.skeleton = new pc.Skeleton(c);
                b.skeleton.setLooping(b.loop);
                b.skeleton.setGraph(c)
            }
            b.model = a;
            b.animations && b.currAnim && b.animations[b.currAnim] && this.play(b.currAnim)
        },
        loadAnimationAssets: function(a) {
            if (a && a.length) {
                var b = this,
                    c = this.system.app.assets,
                    e, d = a.length,
                    g = function(a) {
                        b.animations[a.name] = a.resource;
                        b.animations = b.animations
                    },
                    h = function(a) {
                        a.off("change", b.onAssetChanged, b);
                        a.on("change", b.onAssetChanged, b);
                        a.off("remove", b.onAssetRemoved, b);
                        a.on("remove", b.onAssetRemoved, b);
                        a.resource ? g(a) : (a.once("load", g, b), b.enabled && b.entity.enabled && c.load(a))
                    };
                for (e = 0; e < d; e++) {
                    var m = c.get(a[e]);
                    if (m) h(m);
                    else c.on("add:" + a[e], h)
                }
            }
        },
        onAssetChanged: function(a, b, c, e) { "resource" === b && (c ? (this.animations[a.name] = c, this.data.currAnim === a.name && this.data.playing && this.data.enabled && this.entity.enabled && this.play(a.name, 0)) : delete this.animations[a.name]) },
        onAssetRemoved: function(a) {
            a.off("remove", this.onAssetRemoved, this);
            this.animations && this.animations[a.name] && (delete this.animations[a.name], this.data.currAnim === a.name && this._stopCurrentAnimation())
        },
        _stopCurrentAnimation: function() {
            this.data.currAnim = null;
            this.data.playing = !1;
            this.data.skeleton && (this.data.skeleton.setCurrentTime(0), this.data.skeleton.setAnimation(null))
        },
        onSetAnimations: function(a, b, c) {
            a = this.data;
            (b = this.entity.model) && (b = b.model) && b !== a.model && this.entity.animation.setModel(b);
            if (!a.currAnim && a.activate && a.enabled && this.entity.enabled && !this.system._inTools)
                for (var e in a.animations) { this.play(e, 0); break }
        },
        onSetAssets: function(a, b, c) {
            if (b && b.length)
                for (a = 0; a < b.length; a++)
                    if (b[a]) {
                        var e = this.system.app.assets.get(b[a]);
                        e && (e.off("change", this.onAssetChanged, this), e.off("remove", this.onAssetRemoved, this), this.data.currAnim === e.name && this._stopCurrentAnimation())
                    } b = c.map(function(a) { return a instanceof pc.Asset ? a.id : a });
            this.loadAnimationAssets(b)
        },
        onSetLoop: function(a, b, c) { this.data.skeleton && this.data.skeleton.setLooping(this.data.loop) },
        onSetCurrentTime: function(a, b, c) {
            this.data.skeleton.setCurrentTime(c);
            this.data.skeleton.addTime(0);
            this.data.skeleton.updateGraph()
        },
        onEnable: function() {
            d._super.onEnable.call(this);
            var a = this.data.assets,
                b = this.system.app.assets;
            if (a)
                for (var c = 0, e = a.length; c < e; c++) {
                    var f = a[c];
                    f instanceof pc.Asset || (f = b.get(f));
                    f && !f.resource && b.load(f)
                }
            if (this.data.activate && !this.data.currAnim && !this.system._inTools)
                for (var g in this.data.animations) { this.play(g, 0); break }
        }
    });
    Object.defineProperties(d.prototype, {
        currentTime: {
            get: function() { return this.data.skeleton.getCurrentTime() },
            set: function(a) {
                this.data.skeleton.setCurrentTime(a);
                this.data.skeleton.addTime(0);
                this.data.skeleton.updateGraph()
            }
        },
        duration: { get: function() { return this.data.animations[this.data.currAnim].getDuration() } }
    });
    return { AnimationComponent: d }
}());
pc.extend(pc, function() {
    var d = function(a) {
            this.id = "animation";
            this.description = "Specifies the animation assets that can run on the model specified by the Entity's model Component.";
            a.systems.add(this.id, this);
            this.ComponentType = pc.AnimationComponent;
            this.DataType = pc.AnimationComponentData;
            this.schema = "enabled assets speed loop activate animations skeleton model prevAnim currAnim fromSkel toSkel blending blendTimeRemaining playing".split(" ");
            this.on("remove", this.onRemove, this);
            this.on("update", this.onUpdate, this);
            pc.ComponentSystem.on("update", this.onUpdate, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    pc.extend(d.prototype, {
        initializeComponentData: function(a, b, c) {
            c = ["activate", "enabled", "loop", "speed", "assets"];
            d._super.initializeComponentData.call(this, a, b, c)
        },
        cloneComponent: function(a, b) {
            this.addComponent(b, {});
            b.animation.data.assets = pc.extend([], a.animation.assets);
            b.animation.data.speed = a.animation.speed;
            b.animation.data.loop = a.animation.loop;
            b.animation.data.activate = a.animation.activate;
            b.animation.data.enabled = a.animation.enabled;
            var c = {},
                e = a.animation.animations,
                d;
            for (d in e) e.hasOwnProperty(d) && (c[d] = e[d]);
            b.animation.animations = c
        },
        onRemove: function(a, b) {
            delete b.animation;
            delete b.skeleton;
            delete b.fromSkel;
            delete b.toSkel
        },
        onUpdate: function(a) {
            var b = this.store,
                c;
            for (c in b)
                if (b.hasOwnProperty(c)) {
                    var e = b[c],
                        d = e.data;
                    d.enabled && d.playing && e.entity.enabled && (e = d.skeleton, null !== e && null !== d.model && (d.blending ? (d.blendTimeRemaining -= a, 0 > d.blendTimeRemaining && (d.blendTimeRemaining = 0), e.blend(d.fromSkel, d.toSkel, 1 - d.blendTimeRemaining / d.blendTime)) : (e.addTime(a * d.speed), e.getCurrentTime() !== e.getAnimation().getDuration() || d.loop || (d.playing = !1)), d.blending && 0 === d.blendTimeRemaining && (d.blending = !1, e.setAnimation(d.toSkel.getAnimation())), e.updateGraph()))
                }
        }
    });
    return { AnimationComponentSystem: d }
}());
pc.extend(pc, function() {
    return {
        AnimationComponentData: pc.inherits(function() {
            this.assets = [];
            this.speed = 1;
            this.enabled = this.activate = this.loop = !0;
            this.animations = {};
            this.toSkel = this.fromSkel = this.currAnim = this.prevAnim = this.model = this.skeleton = null;
            this.blending = !1;
            this.blendTimeRemaining = this.blendTime = 0;
            this.playing = !1
        }, pc.ComponentData)
    }
}());
pc.extend(pc, function() {
    var d = function(a) {
            this.id = "model";
            this.description = "Renders a 3D model at the location of the Entity.";
            a.systems.add(this.id, this);
            this.ComponentType = pc.ModelComponent;
            this.DataType = pc.ModelComponentData;
            this.schema = "enabled type asset materialAsset castShadows receiveShadows castShadowsLightmap lightmapped lightmapSizeMultiplier material model mapping".split(" ");
            a = a.graphicsDevice;
            this.box = pc.createBox(a, { halfExtents: new pc.Vec3(.5, .5, .5) });
            this.capsule = pc.createCapsule(a, { radius: .5, height: 2 });
            this.sphere = pc.createSphere(a, { radius: .5 });
            this.cone = pc.createCone(a, { baseRadius: .5, peakRadius: 0, height: 1 });
            this.cylinder = pc.createCylinder(a, { radius: .5, height: 1 });
            this.plane = pc.createPlane(a, { halfExtents: new pc.Vec2(.5, .5), widthSegments: 1, lengthSegments: 1 });
            this.defaultMaterial = new pc.StandardMaterial;
            this.on("beforeremove", this.onRemove, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    pc.extend(d.prototype, {
        initializeComponentData: function(a, b, c) {
            b.material = this.defaultMaterial;
            c = "enabled material materialAsset asset castShadows receiveShadows castShadowsLightmap lightmapped lightmapSizeMultiplier type mapping".split(" ");
            d._super.initializeComponentData.call(this, a, b, c)
        },
        removeComponent: function(a) {
            var b = a.model.data;
            a.model.asset = null;
            "asset" !== b.type && b.model && (this.app.scene.removeModel(b.model), a.removeChild(b.model.getGraph()), b.model = null);
            d._super.removeComponent.call(this, a)
        },
        cloneComponent: function(a, b) {
            var c = { type: a.model.type, asset: a.model.asset, castShadows: a.model.castShadows, receiveShadows: a.model.receiveShadows, castShadowsLightmap: a.model.castShadowsLightmap, lightmapped: a.model.lightmapped, lightmapSizeMultiplier: a.model.lightmapSizeMultiplier, enabled: a.model.enabled, mapping: pc.extend({}, a.model.mapping) },
                e = a.model.materialAsset;
            e instanceof pc.Asset || null == e || (e = this.app.assets.get(e));
            var d = a.model.material;
            d && d !== pc.ModelHandler.DEFAULT_MATERIAL && e && d !== e.resource || (c.materialAsset = e);
            e = this.addComponent(b, c);
            c.materialAsset || (e.material = d);
            c = a.model.model.meshInstances;
            d = e.model.meshInstances;
            for (e = 0; e < c.length; e++) d[e].mask = c[e].mask
        },
        onRemove: function(a, b) { b.remove() }
    });
    return { ModelComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
            this.on("set_type", this.onSetType, this);
            this.on("set_asset", this.onSetAsset, this);
            this.on("set_castShadows", this.onSetCastShadows, this);
            this.on("set_receiveShadows", this.onSetReceiveShadows, this);
            this.on("set_castShadowsLightmap", this.onSetCastShadowsLightmap, this);
            this.on("set_lightmapped", this.onSetLightmapped, this);
            this.on("set_lightmapSizeMultiplier", this.onSetLightmapSizeMultiplier, this);
            this.on("set_model", this.onSetModel, this);
            this.on("set_material", this.onSetMaterial, this);
            this.on("set_mapping", this.onSetMapping, this);
            Object.defineProperty(this, "materialAsset", { set: this.setMaterialAsset.bind(this), get: this.getMaterialAsset.bind(this) });
            this._assetOld = 0;
            this._materialEvents = null;
            this._dirtyMaterialAsset = this._dirtyModelAsset = !1
        },
        d = pc.inherits(d, pc.Component);
    pc.extend(d.prototype, {
        setVisible: function(a) {
            console.warn("WARNING: setVisible: Function is deprecated. Set enabled property instead.");
            this.enabled = a
        },
        _onAssetLoad: function(a) { a.resource && this._onModelLoaded(a.resource.clone()) },
        _onAssetChange: function(a, b, c, e) { "data" === b && (this.mapping = this.data.mapping) },
        _onAssetRemove: function(a) { this.asset === a.id && (this.asset = null) },
        _setModelAsset: function(a) {
            var b = this.system.app.assets,
                c = null !== a ? b.get(a) : null;
            this._dirtyModelAsset = !0;
            this._onModelAsset(c || null);
            if (!c && null !== a) b.once("add:" + a, this._onModelAsset, this)
        },
        _onModelAsset: function(a) {
            var b = this.system.app.assets;
            if (this._assetOld) {
                b.off("add:" + this._assetOld, this._onModelAsset, this);
                var c = b.get(this._assetOld);
                c && (c.off("load", this._onAssetLoad, this), c.off("change", this._onAssetChange, this), c.off("remove", this._onAssetRemove, this))
            }
            this._assetOld = a ? a.id : 0;
            a ? (a.on("load", this._onAssetLoad, this), a.on("change", this._onAssetChange, this), a.on("remove", this._onAssetRemove, this), a.resource ? (this._dirtyModelAsset = !1, this._onModelLoaded(a.resource.clone())) : this.enabled && this.entity.enabled && (this._dirtyModelAsset = !1, b.load(a))) : this._dirtyModelAsset = !1
        },
        remove: function() { this._onModelAsset(null) },
        _onModelLoaded: function(a) { "asset" === this.data.type && (this.model = a) },
        onSetType: function(a, b, c) {
            a = this.data;
            if (c)
                if (this._area = null, "asset" === c) null !== this.data.asset ? this._setModelAsset(this.data.asset) : this.model = null;
                else {
                    switch (c) {
                        case "box":
                            c = this.system.box;
                            this._area = { x: 2, y: 2, z: 2, uv: 2 / 3 };
                            break;
                        case "capsule":
                            c = this.system.capsule;
                            this._area = { x: 2 * Math.PI, y: Math.PI, z: 2 * Math.PI, uv: 1 / 3 + 1 / 3 / 3 * 2 };
                            break;
                        case "sphere":
                            c = this.system.sphere;
                            this._area = { x: Math.PI, y: Math.PI, z: Math.PI, uv: 1 };
                            break;
                        case "cone":
                            c = this.system.cone;
                            this._area = { x: 2.54, y: 2.54, z: 2.54, uv: 1 / 3 + 1 / 3 / 3 };
                            break;
                        case "cylinder":
                            c = this.system.cylinder;
                            this._area = { x: Math.PI, y: 1.58, z: Math.PI, uv: 1 / 3 + 1 / 3 / 3 * 2 };
                            break;
                        case "plane":
                            c = this.system.plane;
                            this._area = { x: 0, y: 1, z: 0, uv: 1 };
                            break;
                        default:
                            throw Error("Invalid model type: " + c);
                    }
                    b = new pc.GraphNode;
                    var e = new pc.Model;
                    e.graph = b;
                    e.meshInstances = [new pc.MeshInstance(b, c, a.material)];
                    this.system._inTools && e.generateWireframe();
                    this.model = e;
                    this.asset = null
                }
        },
        onSetAsset: function(a, b, c) {
            a = null;
            "asset" === this.data.type && (null !== c ? (a = c, c instanceof pc.Asset && (a = this.data.asset = c.id)) : this.model = null);
            null === a && (this.data.asset = null);
            this._setModelAsset(a)
        },
        onSetCastShadows: function(a, b, c) {
            if (a = this.data.model) {
                b = this.system.app.scene;
                var e = b.containsModel(a);
                e && b.removeModel(a);
                for (var d = a.meshInstances, g = 0; g < d.length; g++) d[g].castShadow = c;
                e && b.addModel(a)
            }
        },
        onSetCastShadowsLightmap: function(a, b, c) {},
        onSetLightmapped: function(a, b, c) {
            if (this.data.model)
                if (a = this.data.model.meshInstances, c)
                    for (c = 0; c < a.length; c++) b = a[c], b.mask = pc.MASK_BAKED;
                else
                    for (c = 0; c < a.length; c++) b = a[c], b.deleteParameter("texture_lightMap"), b._shaderDefs &= ~pc.SHADERDEF_LM, b.mask = pc.MASK_DYNAMIC
        },
        onSetLightmapSizeMultiplier: function(a, b, c) { this.data.lightmapSizeMultiplier = c },
        onSetModel: function(a, b, c) {
            b && (this.system.app.scene.removeModel(b), this.entity.removeChild(b.getGraph()), delete b._entity);
            if (c) {
                a = this.data;
                b = c.meshInstances;
                for (var e = 0; e < b.length; e++) b[e].castShadow = a.castShadows, b[e].receiveShadow = a.receiveShadows;
                this.lightmapped = a.lightmapped;
                this.entity.addChild(c.graph);
                this.enabled && this.entity.enabled && this.system.app.scene.addModel(c);
                c._entity = this.entity;
                this.entity.animation && this.entity.animation.setModel(c);
                "asset" === this.data.type ? this.mapping = this.data.mapping : this._unsetMaterialEvents()
            } else this._unsetMaterialEvents()
        },
        _onMaterialAssetRemove: function(a) {
            var b = this.system.app.assets,
                c = isNaN(a) ? a.id : a;
            a && isNaN(a) && a.resource === this.material && (this.material = pc.ModelHandler.DEFAULT_MATERIAL);
            b.off("add:" +
                c, this._onMaterialAsset, this);
            b.off("load:" + c, this._onMaterialAsset, this);
            b.off("remove:" + c, this._onMaterialAssetRemove, this)
        },
        _onMaterialAsset: function(a) {
            var b = this.system.app.assets;
            a.resource ? (this.material = a.resource, this._dirtyMaterialAsset = !1) : this.enabled && this.entity.enabled && (this._dirtyMaterialAsset = !1, b.load(a))
        },
        setMaterialAsset: function(a) {
            this._dirtyMaterialAsset = !0;
            a = "number" !== typeof a && a ? a.id : a;
            var b = this.system.app.assets;
            this.data.materialAsset !== a && (this.data.materialAsset && this._onMaterialAssetRemove(this.data.materialAsset), a && (b.on("load:" + a, this._onMaterialAsset, this), b.on("remove:" + a, this._onMaterialAssetRemove, this)));
            if (void 0 !== a && null !== a) {
                var c = b.get(a);
                c && this._onMaterialAsset(c);
                b.once("add:" + a, this._onMaterialAsset, this)
            } else null === a && (this.material = pc.ModelHandler.DEFAULT_MATERIAL, this._dirtyMaterialAsset = !1);
            b = this.data.materialAsset;
            this.data.materialAsset = a;
            this.fire("set", "materialAsset", b, a)
        },
        getMaterialAsset: function() { return this.system.app.assets.get(this.data.materialAsset) },
        onSetMaterial: function(a, b, c) {
            if (c !== b && (this.data.material = c, this.data.model && "asset" !== this.data.type))
                for (a = this.data.model.meshInstances, b = 0; b < a.length; b++) a[b].material = c
        },
        onSetMapping: function(a, b, c) {
            if ("asset" === this.data.type && this.data.model) {
                this._unsetMaterialEvents();
                c || (c = {});
                a = this.data.model.meshInstances;
                b = (b = this.asset ? this.system.app.assets.get(this.asset) : null) ? b.data.mapping : null;
                for (var e = 0, d = a.length; e < d; e++) void 0 !== c[e] ? c[e] ? this._loadAndSetMeshInstanceMaterial(c[e], a[e], e) : a[e].material = pc.ModelHandler.DEFAULT_MATERIAL : b && (b[e] && (b[e].material || b[e].path) ? this._loadAndSetMeshInstanceMaterial(b[e].material || b[e].path, a[e], e) : a[e].material = pc.ModelHandler.DEFAULT_MATERIAL)
            }
        },
        _setMaterialEvent: function(a, b, c, e) {
            b = b + ":" + c;
            this.system.app.assets.on(b, e, this);
            this._materialEvents || (this._materialEvents = []);
            this._materialEvents[a] || (this._materialEvents[a] = {});
            this._materialEvents[a][b] = { id: c, handler: e }
        },
        _unsetMaterialEvents: function() {
            var a = this.system.app.assets,
                b = this._materialEvents;
            if (b) {
                for (var c = 0, e = b.length; c < e; c++)
                    if (b[c]) {
                        var d = b[c],
                            g;
                        for (g in d) a.off(g, d[g].handler, this)
                    } this._materialEvents = null
            }
        },
        _getAssetByIdOrPath: function(a) {
            var b = null;
            isNaN(parseInt(a, 10)) ? this.asset && (a = this._getMaterialAssetUrl(a)) && (b = this.system.app.assets.getByUrl(a)) : b = this.system.app.assets.get(a);
            return b
        },
        _getMaterialAssetUrl: function(a) {
            if (!this.asset) return null;
            var b = this.system.app.assets.get(this.asset);
            if (!b) return null;
            b = b.getFileUrl();
            b = pc.path.getDirectory(b);
            return pc.path.join(b, a)
        },
        _loadAndSetMeshInstanceMaterial: function(a, b, c) {
            var e = this,
                d = this.system.app.assets,
                g = this._getAssetByIdOrPath(a);
            if (g) {
                var h = function(a) {
                    a.resource ? (b.material = a.resource, e._setMaterialEvent(c, "remove", a.id, function() { b.material = pc.ModelHandler.DEFAULT_MATERIAL })) : (e._setMaterialEvent(c, "load", a.id, function(a) {
                        b.material = a.resource;
                        e._setMaterialEvent(c, "remove", a.id, function() { b.material = pc.ModelHandler.DEFAULT_MATERIAL })
                    }), e.enabled && e.entity.enabled && d.load(a))
                };
                g ? h(g) : (b.material = pc.ModelHandler.DEFAULT_MATERIAL, g = isNaN(parseInt(a, 10)), e._setMaterialEvent(c, g ? "add:url" : "add", a, h))
            }
        },
        onSetReceiveShadows: function(a, b, c) {
            if (void 0 !== c && (a = this.data, a.model))
                for (a = a.model.meshInstances, b = 0; b < a.length; b++) a[b].receiveShadow = c
        },
        onEnable: function() {
            d._super.onEnable.call(this);
            var a = this.data.model,
                b = "asset" === this.data.type;
            if (a) this.system.app.scene.containsModel(a) || this.system.app.scene.addModel(a);
            else if (b && this._dirtyModelAsset) {
                a = this.data.asset;
                if (!a) return;
                (a = this.system.app.assets.get(a)) && this._onModelAsset(a)
            }
            this._dirtyMaterialAsset && (a = this.data.materialAsset) && (a = this.system.app.assets.get(a)) && !a.resource && this._onMaterialAsset(a);
            if (b && (b = this.data.mapping))
                for (var c in b) b[c] && (a = this._getAssetByIdOrPath(b[c])) && !a.resource && this.system.app.assets.load(a)
        },
        onDisable: function() {
            d._super.onDisable.call(this);
            var a = this.data.model;
            a && this.system.app.scene.containsModel(a) && this.system.app.scene.removeModel(a)
        },
        hide: function() {
            var a = this.data.model;
            if (a) {
                var b, c = a.meshInstances,
                    a = 0;
                for (b = c.length; a < b; a++) c[a].visible = !1
            }
        },
        show: function() {
            var a = this.data.model;
            if (a) {
                var b, c = a.meshInstances,
                    a = 0;
                for (b = c.length; a < b; a++) c[a].visible = !0
            }
        }
    });
    return { ModelComponent: d }
}());
pc.extend(pc, function() {
    return {
        ModelComponentData: pc.inherits(function() {
            this.enabled = !0;
            this.type = "asset";
            this.asset = null;
            this.receiveShadows = this.castShadows = !0;
            this.mapping = this.materialAsset = null;
            this.castShadowsLightmap = !0;
            this.lightmapped = !1;
            this.lightmapSizeMultiplier = 1;
            this.model = this.material = null
        }, pc.ComponentData)
    }
}());
pc.extend(pc, function() {
    var d = function(a) {
            this.id = "camera";
            this.description = "Renders the scene from the location of the Entity.";
            a.systems.add(this.id, this);
            this.ComponentType = pc.CameraComponent;
            this.DataType = pc.CameraComponentData;
            this.schema = "enabled clearColorBuffer clearColor clearDepthBuffer frustumCulling projection fov orthoHeight nearClip farClip priority rect camera aspectRatio horizontalFov model renderTarget".split(" ");
            this.cameras = [];
            this.on("beforeremove", this.onBeforeRemove, this);
            this.on("remove", this.onRemove, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    pc.extend(d.prototype, {
        initializeComponentData: function(a, b, c) {
            c = "postEffects enabled model camera aspectRatio horizontalFov renderTarget clearColor fov orthoHeight nearClip farClip projection priority clearColorBuffer clearDepthBuffer frustumCulling rect".split(" ");
            var e = {};
            c.forEach(function(a) { e[a] = b[a] });
            if (e.clearColor && "array" === pc.type(e.clearColor)) {
                var f = e.clearColor;
                e.clearColor = new pc.Color(f[0], f[1], f[2], f[3])
            }
            e.rect && "array" === pc.type(e.rect) && (f = e.rect, e.rect = new pc.Vec4(f[0], f[1], f[2], f[3]));
            e.activate && (console.warn("WARNING: activate: Property is deprecated. Set enabled property instead."), e.enabled = e.activate);
            e.camera = new pc.Camera;
            e._node = a.entity;
            e.postEffects = new pc.PostEffectQueue(this.app, a);
            d._super.initializeComponentData.call(this, a, e, c)
        },
        onBeforeRemove: function(a, b) { this.removeCamera(b) },
        onRemove: function(a, b) { b.camera = null },
        addCamera: function(a) {
            this.cameras.push(a);
            this.sortCamerasByPriority()
        },
        removeCamera: function(a) {
            a = this.cameras.indexOf(a);
            0 <= a && (this.cameras.splice(a, 1), this.sortCamerasByPriority())
        },
        sortCamerasByPriority: function() { this.cameras.sort(function(a, b) { return a.priority - b.priority }) }
    });
    return { CameraComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
            this.on("set_aspectRatio", this.onSetAspectRatio, this);
            this.on("set_camera", this.onSetCamera, this);
            this.on("set_clearColor", this.onSetClearColor, this);
            this.on("set_fov", this.onSetFov, this);
            this.on("set_orthoHeight", this.onSetOrthoHeight, this);
            this.on("set_nearClip", this.onSetNearClip, this);
            this.on("set_farClip", this.onSetFarClip, this);
            this.on("set_projection", this.onSetProjection, this);
            this.on("set_priority", this.onSetPriority, this);
            this.on("set_clearColorBuffer", this.updateClearFlags, this);
            this.on("set_clearDepthBuffer", this.updateClearFlags, this);
            this.on("set_renderTarget", this.onSetRenderTarget, this);
            this.on("set_rect", this.onSetRect, this);
            this.on("set_horizontalFov", this.onSetHorizontalFov, this);
            this.on("set_frustumCulling", this.onSetFrustumCulling, this)
        },
        d = pc.inherits(d, pc.Component);
    Object.defineProperty(d.prototype, "projectionMatrix", { get: function() { return this.data.camera.getProjectionMatrix() } });
    Object.defineProperty(d.prototype, "viewMatrix", { get: function() { return this.data.camera._node.getWorldTransform().clone().invert() } });
    Object.defineProperty(d.prototype, "frustum", { get: function() { return this.data.camera.getFrustum() } });
    pc.extend(d.prototype, {
        screenToWorld: function(a, b, c, e) { var d = this.system.app.graphicsDevice; return this.data.camera.screenToWorld(a, b, c, d.clientRect.width, d.clientRect.height, e) },
        worldToScreen: function(a, b) { var c = this.system.app.graphicsDevice; return this.data.camera.worldToScreen(a, c.clientRect.width, c.clientRect.height, b) },
        onSetAspectRatio: function(a, b, c) { this.data.camera.setAspectRatio(c) },
        onSetCamera: function(a, b, c) {
            b && (b._node = null);
            c._node = this.entity
        },
        onSetClearColor: function(a, b, c) {
            a = this.data.camera.getClearOptions();
            a.color[0] = c.r;
            a.color[1] = c.g;
            a.color[2] = c.b;
            a.color[3] = c.a
        },
        onSetFov: function(a, b, c) { this.data.camera.setFov(c) },
        onSetOrthoHeight: function(a, b, c) { this.data.camera.setOrthoHeight(c) },
        onSetNearClip: function(a, b, c) { this.data.camera.setNearClip(c) },
        onSetFarClip: function(a, b, c) { this.data.camera.setFarClip(c) },
        onSetHorizontalFov: function(a, b, c) { this.data.camera.setHorizontalFov(c) },
        onSetFrustumCulling: function(a, b, c) { this.data.camera.frustumCulling = c },
        onSetProjection: function(a, b, c) { this.data.camera.setProjection(c) },
        onSetPriority: function(a, b, c) { this.system.sortCamerasByPriority() },
        updateClearFlags: function() {
            var a = this.data.camera.getClearOptions(),
                b = 0;
            this.clearColorBuffer && (b |= pc.CLEARFLAG_COLOR);
            this.clearDepthBuffer && (b |= pc.CLEARFLAG_DEPTH);
            a.flags = b
        },
        onSetRenderTarget: function(a, b, c) { this.data.camera.setRenderTarget(c) },
        onSetRect: function(a, b, c) {
            this.data.camera.setRect(c.data[0], c.data[1], c.data[2], c.data[3]);
            this._resetAspectRatio()
        },
        onEnable: function() {
            d._super.onEnable.call(this);
            this.system.addCamera(this);
            this.postEffects.enable()
        },
        onDisable: function() {
            d._super.onDisable.call(this);
            this.postEffects.disable();
            this.system.removeCamera(this)
        },
        _resetAspectRatio: function() {
            var a = this.camera;
            if (a && !a.getRenderTarget()) {
                var b = this.system.app.graphicsDevice,
                    c = this.rect,
                    b = b.width * c.z / (b.height * c.w);
                b !== a.getAspectRatio() && a.setAspectRatio(b)
            }
        },
        frameBegin: function() {
            this._resetAspectRatio();
            this.data.isRendering = !0
        },
        frameEnd: function() { this.data.isRendering = !1 }
    });
    return { CameraComponent: d }
}());
pc.extend(pc, function() {
    return {
        CameraComponentData: pc.inherits(function() {
            this.clearColor = new pc.Color(.722, .722, .722, 1);
            this.clearDepthBuffer = this.clearColorBuffer = !0;
            this.nearClip = .1;
            this.farClip = 1E3;
            this.fov = 45;
            this.orthoHeight = 100;
            this.projection = pc.PROJECTION_PERSPECTIVE;
            this.priority = 0;
            this.rect = new pc.Vec4(0, 0, 1, 1);
            this.enabled = !0;
            this.frustumCulling = !1;
            this.camera = null;
            this.aspectRatio = 16 / 9;
            this.postEffects = this.renderTarget = null;
            this.isRendering = !1
        }, pc.ComponentData)
    }
}());
pc.extend(pc, function() {
    function d(a, b) {
        this.app = a;
        this.camera = b;
        this.effects = [];
        this.enabled = !1;
        this.depthTarget = null;
        this.renderTargetScale = 1;
        this.resizeTimeout = null;
        b.on("set_rect", this.onCameraRectChanged, this)
    }
    d.prototype = {
        _createOffscreenTarget: function(a, b) {
            var c = this.camera.rect,
                e = Math.floor(c.z * this.app.graphicsDevice.width * this.renderTargetScale),
                c = Math.floor(c.w * this.app.graphicsDevice.height * this.renderTargetScale),
                d = this.app.graphicsDevice,
                g = b ? d.getHdrFormat() : pc.PIXELFORMAT_R8_G8_B8_A8,
                e = new pc.Texture(d, { format: g, width: e, height: c });
            e.minFilter = pc.FILTER_NEAREST;
            e.magFilter = pc.FILTER_NEAREST;
            e.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
            e.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
            return new pc.RenderTarget(this.app.graphicsDevice, e, { depth: a })
        },
        setRenderTargetScale: function(a) {
            this.renderTargetScale = a;
            this.resizeRenderTargets()
        },
        addEffect: function(a) {
            var b = 0 === this.effects.length,
                c = this.effects;
            a = { effect: a, inputTarget: this._createOffscreenTarget(b, a.hdr), outputTarget: null };
            b && (this.camera.renderTarget = a.inputTarget);
            c.push(a);
            b = c.length;
            1 < b && (c[b - 2].outputTarget = a.inputTarget);
            this.enable()
        },
        removeEffect: function(a) {
            for (var b = -1, c = 0, e = this.effects.length; c < e; c++)
                if (this.effects[c].effect === a) { b = c; break } 0 <= b && (0 < b ? this.effects[b - 1].outputTarget = b + 1 < this.effects.length ? this.effects[b + 1].inputTarget : null : 1 < this.effects.length && (this.effects[1].inputTarget._depth || (this.effects[1].inputTarget.destroy(), this.effects[1].inputTarget = this._createOffscreenTarget(!0, this.effects[1].hdr)), this.camera.renderTarget = this.effects[1].inputTarget), this.effects[b].inputTarget.destroy(), this.effects.splice(b, 1));
            this.enabled && a.needsDepthBuffer && this.camera.releaseDepthMap();
            0 === this.effects.length && this.disable()
        },
        requestDepthMap: function() { for (var a = 0, b = this.effects.length; a < b; a++) this.effects[a].effect.needsDepthBuffer && this.camera.camera.requestDepthMap() },
        releaseDepthMap: function() { for (var a = 0, b = this.effects.length; a < b; a++) this.effects[a].effect.needsDepthBuffer && this.camera.releaseDepthMap() },
        destroy: function() {
            for (var a = 0, b = this.effects.length; a < b; a++) this.effects[a].inputTarget.destroy();
            this.effects.length = 0;
            this.disable()
        },
        enable: function() {
            if (!this.enabled && this.effects.length) {
                this.enabled = !0;
                var a = this.effects,
                    b = this.camera;
                this.requestDepthMap();
                this.app.graphicsDevice.on("resizecanvas", this._onCanvasResized, this);
                b.camera.setRect(0, 0, 1, 1);
                this.command = new pc.Command(pc.LAYER_FX, pc.BLEND_NONE, function() {
                    if (this.enabled && b.data.isRendering) {
                        var c = null,
                            e = a.length;
                        if (e) {
                            b.renderTarget = a[0].inputTarget;
                            this.depthTarget = this.camera.camera._depthTarget;
                            for (var d = 0; d < e; d++) {
                                var g = a[d];
                                this.depthTarget && (g.effect.depthMap = this.depthTarget.colorBuffer);
                                d === e - 1 && (c = b.rect);
                                g.effect.render(g.inputTarget, g.outputTarget, c)
                            }
                        }
                    }
                }.bind(this));
                this.app.scene.drawCalls.push(this.command)
            }
        },
        disable: function() {
            if (this.enabled) {
                this.enabled = !1;
                this.app.graphicsDevice.off("resizecanvas", this._onCanvasResized, this);
                this.camera.renderTarget = null;
                this.releaseDepthMap();
                var a = this.camera.rect;
                this.camera.camera.setRect(a.x, a.y, a.z, a.w);
                a = this.app.scene.drawCalls.indexOf(this.command);
                0 <= a && this.app.scene.drawCalls.splice(a, 1)
            }
        },
        _onCanvasResized: function(a, b) {
            var c = this.camera.rect,
                e = this.app.graphicsDevice,
                c = e.width * c.z / (e.height * c.w);
            c !== this.camera.camera.getAspectRatio() && this.camera.camera.setAspectRatio(c);
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(this.resizeRenderTargets.bind(this), 500)
        },
        resizeRenderTargets: function() { for (var a = this.camera.rect, b = Math.floor(a.z * this.app.graphicsDevice.width * this.renderTargetScale), a = Math.floor(a.w * this.app.graphicsDevice.height * this.renderTargetScale), c = this.effects, e = 0, d = c.length; e < d; e++) { var g = c[e]; if (g.inputTarget.width !== b || g.inputTarget.height !== a) g.inputTarget.destroy(), g.inputTarget = this._createOffscreenTarget(g.effect.needsDepthBuffer || 0 === e, g.hdr), 0 < e ? c[e - 1].outputTarget = g.inputTarget : this.camera.renderTarget = g.inputTarget } },
        onCameraRectChanged: function(a, b, c) { this.enabled && (this.camera.camera.setRect(0, 0, 1, 1), this.resizeRenderTargets()) }
    };
    return { PostEffectQueue: d }
}());
pc.extend(pc, function() {
    var d = { directional: pc.LIGHTTYPE_DIRECTIONAL, point: pc.LIGHTTYPE_POINT, spot: pc.LIGHTTYPE_SPOT },
        a = function(a) {
            this.id = "light";
            this.description = "Enables the Entity to emit light.";
            a.systems.add(this.id, this);
            this.ComponentType = pc.LightComponent;
            this.DataType = pc.LightComponentData;
            this.schema = "enabled type color intensity castShadows shadowDistance shadowResolution shadowBias normalOffsetBias range falloffMode shadowType vsmBlurSize vsmBlurMode vsmBias shadowUpdateMode mask affectDynamic affectLightmapped bake innerConeAngle outerConeAngle light model".split(" ");
            this.on("remove", this.onRemove, this)
        },
        a = pc.inherits(a, pc.ComponentSystem);
    pc.extend(a.prototype, {
        initializeComponentData: function(b, c, e) {
            e = "type light model enabled color intensity range falloffMode innerConeAngle outerConeAngle castShadows shadowDistance shadowResolution shadowUpdateMode shadowBias normalOffsetBias mask affectDynamic affectLightmapped bake shadowType vsmBlurSize vsmBlurMode vsmBias".split(" ");
            var f = {};
            e.forEach(function(a) { f[a] = c[a] });
            f.type || (f.type = b.data.type);
            b.data.type = f.type;
            f.color && "array" === pc.type(f.color) && (f.color = new pc.Color(f.color[0], f.color[1], f.color[2]));
            f.enable && (console.warn("WARNING: enable: Property is deprecated. Set enabled property instead."), f.enabled = f.enable);
            var g = new pc.Light;
            g.setType(d[f.type]);
            g._node = b.entity;
            this.app.scene.addLight(g);
            b.data.light = g;
            a._super.initializeComponentData.call(this, b, f, e)
        },
        onRemove: function(a, c) { this.app.scene.removeLight(c.light) },
        cloneComponent: function(a, c) {
            var e = a.light;
            this.addComponent(c, { type: e.type, enabled: e.enabled, color: [e.color.r, e.color.g, e.color.b], intensity: e.intensity, range: e.range, innerConeAngle: e.innerConeAngle, outerConeAngle: e.outerConeAngle, castShadows: e.castShadows, shadowDistance: e.shadowDistance, shadowResolution: e.shadowResolution, falloffMode: e.falloffMode, shadowUpdateMode: e.shadowUpdateMode, shadowBias: e.shadowBias, normalOffsetBias: e.normalOffsetBias, mask: e.mask, affectDynamic: e.affectDynamic, affectLightmapped: e.affectLightmapped, bake: e.bake, shadowType: e.shadowType, vsmBlurSize: e.vsmBlurSize, vsmBlurMode: e.vsmBlurMode, vsmBias: e.vsmBias })
        },
        changeType: function(a, c, e) { a.light.setType(d[e]) }
    });
    return { LightComponentSystem: a }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
            this.on("set_type", this.onSetType, this);
            this.on("set_color", this.onSetColor, this);
            this.on("set_intensity", this.onSetIntensity, this);
            this.on("set_castShadows", this.onSetCastShadows, this);
            this.on("set_shadowDistance", this.onSetShadowDistance, this);
            this.on("set_shadowResolution", this.onSetShadowResolution, this);
            this.on("set_shadowBias", this.onSetShadowBias, this);
            this.on("set_normalOffsetBias", this.onSetNormalOffsetBias, this);
            this.on("set_range", this.onSetRange, this);
            this.on("set_innerConeAngle", this.onSetInnerConeAngle, this);
            this.on("set_outerConeAngle", this.onSetOuterConeAngle, this);
            this.on("set_falloffMode", this.onSetFalloffMode, this);
            this.on("set_shadowType", this.onSetShadowType, this);
            this.on("set_vsmBlurSize", this.onSetVsmBlurSize, this);
            this.on("set_vsmBlurMode", this.onSetVsmBlurMode, this);
            this.on("set_vsmBias", this.onSetVsmBias, this);
            this.on("set_shadowUpdateMode", this.onSetShadowUpdateMode, this);
            this.on("set_mask", this.onSetMask, this);
            this.on("set_affectDynamic", this.onSetAffectDynamic, this);
            this.on("set_affectLightmapped", this.onSetAffectLightmapped, this);
            this.on("set_bake", this.onSetBake, this)
        },
        d = pc.inherits(d, pc.Component);
    Object.defineProperty(d.prototype, "enable", {
        get: function() { console.warn("WARNING: enable: Property is deprecated. Query enabled property instead."); return this.enabled },
        set: function(a) {
            console.warn("WARNING: enable: Property is deprecated. Set enabled property instead.");
            this.enabled = a
        }
    });
    pc.extend(d.prototype, {
        onSetType: function(a, b, c) { b !== c && (this.system.changeType(this, b, c), this.refreshProperties()) },
        refreshProperties: function() {
            this.onSetCastShadows("castShadows", this.castShadows, this.castShadows);
            this.onSetColor("color", this.color, this.color);
            this.onSetIntensity("intensity", this.intensity, this.intensity);
            this.onSetShadowDistance("shadowDistance", this.shadowDistance, this.shadowDistance);
            this.onSetShadowResolution("shadowResolution", this.shadowResolution, this.shadowResolution);
            this.onSetShadowBias("shadowBias", this.shadowBias, this.shadowBias);
            this.onSetNormalOffsetBias("normalOffsetBias", this.normalOffsetBias, this.normalOffsetBias);
            this.onSetRange("range", this.range, this.range);
            this.onSetInnerConeAngle("innerConeAngle", this.innerConeAngle, this.innerConeAngle);
            this.onSetOuterConeAngle("outerConeAngle", this.outerConeAngle, this.outerConeAngle);
            this.onSetFalloffMode("falloffMode", this.falloffMode, this.falloffMode);
            this.onSetShadowType("shadowType", this.shadowType, this.shadowType);
            this.onSetVsmBlurSize("vsmBlurSize", this.vsmBlurSize, this.vsmBlurSize);
            this.onSetVsmBlurMode("vsmBlurMode", this.vsmBlurMode, this.vsmBlurMode);
            this.onSetVsmBias("vsmBias", this.vsmBias, this.vsmBias);
            this.onSetShadowUpdateMode("shadowUpdateMode", this.shadowUpdateMode, this.shadowUpdateMode);
            this.onSetMask("mask", this.light.mask, this.light.mask);
            this.onSetAffectDynamic("affectDynamic", this.affectDynamic, this.affectDynamic);
            this.onSetAffectLightmapped("affectLightmapped", this.affectLightmapped, this.affectLightmapped);
            this.onSetBake("bake", this.bake, this.bake);
            if (this.enabled && this.entity.enabled) this.onEnable()
        },
        updateShadow: function() { this.light.updateShadow() },
        onSetCastShadows: function(a, b, c) { this.light.setCastShadows(c) },
        onSetColor: function(a, b, c) { this.light.setColor(c) },
        onSetIntensity: function(a, b, c) { this.light.setIntensity(c) },
        onSetShadowDistance: function(a, b, c) { "directional" === this.data.type && this.light.setShadowDistance(c) },
        onSetShadowResolution: function(a, b, c) { this.light.setShadowResolution(c) },
        onSetShadowBias: function(a, b, c) { this.light.setShadowBias(-.01 * c) },
        onSetNormalOffsetBias: function(a, b, c) { this.light.setNormalOffsetBias(c) },
        onSetRange: function(a, b, c) { "point" !== this.data.type && "spot" !== this.data.type || this.light.setAttenuationEnd(c) },
        onSetInnerConeAngle: function(a, b, c) { "spot" === this.data.type && this.light.setInnerConeAngle(c) },
        onSetOuterConeAngle: function(a, b, c) { "spot" === this.data.type && this.light.setOuterConeAngle(c) },
        onSetFalloffMode: function(a, b, c) { "point" !== this.data.type && "spot" !== this.data.type || this.light.setFalloffMode(c) },
        onSetShadowType: function(a, b, c) { this.light.setShadowType(c) },
        onSetVsmBlurSize: function(a, b, c) { this.light.setVsmBlurSize(c) },
        onSetVsmBlurMode: function(a, b, c) { this.light.setVsmBlurMode(c) },
        onSetVsmBias: function(a, b, c) { this.light.setVsmBias(c) },
        onSetShadowUpdateMode: function(a, b, c) { this.light.shadowUpdateMode = c },
        onSetMask: function(a, b, c) { this.light.setMask(c) },
        onSetAffectDynamic: function(a, b, c) {
            this.light.mask = c ? this.light.mask | pc.MASK_DYNAMIC : this.light.mask & ~pc.MASK_DYNAMIC;
            this.light.setMask(this.light.mask)
        },
        onSetAffectLightmapped: function(a, b, c) {
            c ? (this.light.mask |= pc.MASK_BAKED, this.bake && (this.light.mask &= ~pc.MASK_LIGHTMAP)) : (this.light.mask &= ~pc.MASK_BAKED, this.bake && (this.light.mask |= pc.MASK_LIGHTMAP));
            this.light.setMask(this.light.mask)
        },
        onSetBake: function(a, b, c) {
            c ? (this.light.mask |= pc.MASK_LIGHTMAP, this.affectLightmapped && (this.light.mask &= ~pc.MASK_BAKED)) : (this.light.mask &= ~pc.MASK_LIGHTMAP, this.affectLightmapped && (this.light.mask |= pc.MASK_BAKED));
            this.light.setMask(this.light.mask)
        },
        onEnable: function() {
            d._super.onEnable.call(this);
            this.light.setEnabled(!0);
            var a = this.data.model;
            if (a) {
                var b = this.system.app.scene;
                b.containsModel(a) || b.addModel(a)
            }
        },
        onDisable: function() {
            d._super.onDisable.call(this);
            this.light.setEnabled(!1);
            var a = this.data.model;
            a && this.system.app.scene.removeModel(a)
        }
    });
    return { LightComponent: d }
}());
pc.extend(pc, function() {
    return {
        LightComponentData: pc.inherits(function() {
            this.type = "directional";
            this.enabled = !0;
            this.color = new pc.Color(1, 1, 1);
            this.intensity = 1;
            this.castShadows = !1;
            this.shadowDistance = 40;
            this.shadowResolution = 1024;
            this.shadowBias = .05;
            this.normalOffsetBias = 0;
            this.range = 10;
            this.innerConeAngle = 40;
            this.outerConeAngle = 45;
            this.falloffMode = pc.LIGHTFALLOFF_LINEAR;
            this.shadowType = pc.SHADOW_DEPTH;
            this.vsmBlurSize = 11;
            this.vsmBlurMode = pc.BLUR_GAUSSIAN;
            this.vsmBias = .0025;
            this.shadowUpdateMode = pc.SHADOWUPDATE_REALTIME;
            this.mask = 1;
            this.affectDynamic = !0;
            this.bake = this.affectLightmapped = !1;
            this.model = this.light = null
        }, pc.ComponentData)
    }
}());
pc.extend(pc, function() {
    var d = function(a) {
            this.id = "script";
            this.app = a;
            a.systems.add(this.id, this);
            this.ComponentType = pc.ScriptComponent;
            this.DataType = pc.ScriptComponentData;
            this.schema = ["enabled"];
            this._components = [];
            this.on("beforeremove", this._onBeforeRemove, this);
            pc.ComponentSystem.on("initialize", this._onInitialize, this);
            pc.ComponentSystem.on("postInitialize", this._onPostInitialize, this);
            pc.ComponentSystem.on("update", this._onUpdate, this);
            pc.ComponentSystem.on("postUpdate", this._onPostUpdate, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    pc.extend(d.prototype, {
        initializeComponentData: function(a, b, c) {
            this._components.push(a);
            a.enabled = !!b.enabled;
            if (b.hasOwnProperty("order") && b.hasOwnProperty("scripts"))
                for (a._scriptsData = b.scripts, c = 0; c < b.order.length; c++) a.create(b.order[c], { enabled: b.scripts[b.order[c]].enabled, attributes: b.scripts[b.order[c]].attributes, preloading: !0 })
        },
        cloneComponent: function(a, b) {
            for (var c = [], e = {}, d = 0; d < a.script._scripts.length; d++) {
                var g = a.script._scripts[d],
                    h = g.__scriptType.__name;
                c.push(h);
                var m = {},
                    l;
                for (l in g.__attributes) m[l] = g.__attributes[l];
                e[h] = { enabled: g.enabled, attributes: m }
            }
            for (l in a.script._scriptsIndex) l.awayting && c.splice(l.ind, 0, l);
            return this.addComponent(b, { enabled: a.script.enabled, order: c, scripts: e })
        },
        _callComponentMethod: function(a, b) {
            for (var c = 0; c < this._components.length; c++)
                if (this._components[c].entity.enabled && this._components[c].enabled) this._components[c][a](b)
        },
        _onInitialize: function() {
            for (var a = 0; a < this._components.length; a++) this._components[a]._onInitializeAttributes();
            this._callComponentMethod("_onInitialize")
        },
        _onPostInitialize: function() { this._callComponentMethod("_onPostInitialize") },
        _onUpdate: function(a) { this._callComponentMethod("_onUpdate", a) },
        _onPostUpdate: function(a) { this._callComponentMethod("_onPostUpdate", a) },
        _onBeforeRemove: function(a, b) { var c = this._components.indexOf(b); - 1 !== c && (b._onBeforeRemove(), this._components.splice(c, 1)) }
    });
    return { ScriptComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
            this._scripts = [];
            this._scriptsIndex = {};
            this._scriptsData = null;
            this._oldState = !0;
            this.on("set_enabled", this._onSetEnabled, this)
        },
        d = pc.inherits(d, pc.Component);
    d.scriptMethods = { initialize: "initialize", postInitialize: "postInitialize", update: "update", postUpdate: "postUpdate", swap: "swap" };
    pc.extend(d.prototype, {
        onEnable: function() {
            d._super.onEnable.call(this);
            this._checkState()
        },
        onDisable: function() {
            d._super.onDisable.call(this);
            this._checkState()
        },
        onPostStateChange: function() { for (var a, b = 0; b < this.scripts.length; b++) a = this.scripts[b], a._initialized && !a._postInitialized && (a._postInitialized = !0, a.postInitialize && this._scriptMethod(a, d.scriptMethods.postInitialize)) },
        _onSetEnabled: function(a, b, c) { this._checkState() },
        _checkState: function() {
            var a = this.enabled && this.entity.enabled;
            if (a !== this._oldState) {
                this._oldState = a;
                this.fire("enabled");
                this.fire("state", this.enabled);
                for (var b = 0, c = this.scripts.length; b < c; b++) a = this.scripts[b], a.enabled = a._enabled, !a._initialized && a.enabled && (a._initialized = !0, a.initialize && this._scriptMethod(a, d.scriptMethods.initialize))
            }
        },
        _onBeforeRemove: function() { this.fire("remove"); for (var a = !0; 0 < this.scripts.length && a;) a = this.destroy(this.scripts[0].__scriptType.__name) },
        _onInitializeAttributes: function() { for (var a = 0, b = this.scripts.length; a < b; a++) this.scripts[a].__initializeAttributes() },
        _scriptMethod: function(a, b, c) {
            try { a[b](c) } catch (e) {
                a.enabled = !1, a._callbacks && a._callbacks.error || (console.warn('unhandled exception while calling "' + b + '" for "' + a.__scriptType.__name +
                    '" script: ', e), console.error(e)), a.fire("error", e, b), this.fire("error", a, e, b)
            }
        },
        _onInitialize: function() { for (var a, b = 0, c = this.scripts.length; b < c; b++) a = this.scripts[b], a.enabled && !a._initialized && (a._initialized = !0, a.initialize && this._scriptMethod(a, d.scriptMethods.initialize)) },
        _onPostInitialize: function() { for (var a, b = 0, c = this.scripts.length; b < c; b++) a = this.scripts[b], a.enabled && !a._postInitialized && (a._postInitialized = !0, a.postInitialize && this._scriptMethod(a, d.scriptMethods.postInitialize)) },
        _onUpdate: function(a) { for (var b, c = 0, e = this.scripts.length; c < e; c++) b = this.scripts[c], b.enabled && b.update && this._scriptMethod(b, d.scriptMethods.update, a) },
        _onPostUpdate: function(a) { for (var b, c = 0, e = this.scripts.length; c < e; c++) b = this.scripts[c], b.enabled && b.postUpdate && this._scriptMethod(b, d.scriptMethods.postUpdate, a) },
        has: function(a) { "string" === typeof a && (a = this.system.app.scripts.get(a)); return !!this._scriptsIndex[a.__name] },
        create: function(a, b) {
            var c = this;
            b = b || {};
            var e = a,
                f = a;
            "string" === typeof e ? e = this.system.app.scripts.get(e) : e && (f = e.__name);
            if (e)
                if (this._scriptsIndex[e.__name] && this._scriptsIndex[e.__name].instance) console.warn("script '" + f + "' is already added to entity '" + this.entity.name + "'");
                else {
                    var f = new e({ app: this.system.app, entity: this.entity, enabled: b.hasOwnProperty("enabled") ? b.enabled : !0, attributes: b.attributes || null }),
                        g = -1;
                    "number" === typeof b.ind && -1 !== b.ind && this._scripts.length > b.ind && (g = b.ind); - 1 === g ? this._scripts.push(f) : this._scripts.splice(g, 0, f);
                    this._scriptsIndex[e.__name] = { instance: f, onSwap: function() { c.swap(e.__name) } };
                    this[e.__name] = f;
                    b.preloading || f.__initializeAttributes();
                    this.fire("create", e.__name, f);
                    this.fire("create:" + e.__name, f);
                    this.system.app.scripts.on("swap:" + e.__name, this._scriptsIndex[e.__name].onSwap);
                    !b.preloading && this.enabled && f.enabled && !f._initialized && (f._initialized = !0, f._postInitialized = !0, f.initialize && this._scriptMethod(f, d.scriptMethods.initialize), f.postInitialize && this._scriptMethod(f, d.scriptMethods.postInitialize));
                    return f
                }
            else this._scriptsIndex[f] = { awaiting: !0, ind: this._scripts.length }, console.warn("script '" + f + "' is not found, awaiting it to be added to registry");
            return null
        },
        destroy: function(a) {
            var b = a;
            "string" === typeof a && (a = this.system.app.scripts.get(a)) && (b = a.__name);
            a = this._scriptsIndex[b];
            delete this._scriptsIndex[b];
            if (!a) return !1;
            if (a.instance) {
                var c = this._scripts.indexOf(a.instance);
                this._scripts.splice(c, 1)
            }
            this.system.app.scripts.unbind("swap:" + b, a.onSwap);
            delete this._scriptsIndex[b];
            delete this[b];
            this.fire("destroy", b, a.instance || null);
            this.fire("destroy:" + b, a.instance || null);
            a.instance && a.instance.fire("destroy");
            return !0
        },
        swap: function(a) {
            "string" === typeof a && (a = this.system.app.scripts.get(a));
            var b = this._scriptsIndex[a.__name];
            if (!b || !b.instance) return !1;
            var b = b.instance,
                c = this._scripts.indexOf(b),
                e = new a({ app: this.system.app, entity: this.entity, enabled: b.enabled, attributes: b.__attributes });
            if (!e.swap) return !1;
            e.__initializeAttributes();
            this._scripts[c] = e;
            this._scriptsIndex[a.__name].instance = e;
            this[a.__name] = e;
            this._scriptMethod(e, d.scriptMethods.swap, b);
            this.fire("swap", a.__name, e);
            this.fire("swap:" + a.__name, e);
            return !0
        },
        move: function(a, b) {
            if (b >= this._scripts.length) return !1;
            var c = a;
            "string" !== typeof c && (c = a.__name);
            var e = this._scriptsIndex[c];
            if (!e || !e.instance) return !1;
            var d = this._scripts.indexOf(e.instance);
            if (-1 === d || d === b) return !1;
            this._scripts.splice(b, 0, this._scripts.splice(d, 1)[0]);
            this.fire("move", c, e.instance, b, d);
            this.fire("move:" + c, e.instance, b, d);
            return !0
        }
    });
    Object.defineProperty(d.prototype, "scripts", {
        get: function() { return this._scripts },
        set: function(a) {
            this._scriptsData = a;
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    var c = this._scriptsIndex[b];
                    if (c) {
                        if ("boolean" === typeof a[b].enabled && (c.enabled = !!a[b].enabled), "object" === typeof a[b].attributes)
                            for (var e in a[b].attributes)
                                if (!pc.createScript.reservedAttributes[e]) {
                                    if (!c.__attributes.hasOwnProperty(e)) {
                                        var d = this.system.app.scripts.get(b);
                                        d && d.attributes.add(e, {})
                                    }
                                    c[e] = a[b].attributes[e]
                                }
                    } else console.log(this.order)
                }
        }
    });
    return { ScriptComponent: d }
}());
pc.extend(pc, function() { return { ScriptComponentData: pc.inherits(function() { this.enabled = !0 }, pc.ComponentData) } }());
pc.extend(pc, function() {
    var d = function(a, b) {
            this.id = "script";
            this.description = "Allows the Entity to run JavaScript fragments to implement custom behavior.";
            a.systems.add(this.id, this);
            this.ComponentType = pc.ScriptLegacyComponent;
            this.DataType = pc.ScriptLegacyComponentData;
            this._prefix = b || null;
            this.schema = ["enabled", "scripts", "instances", "runInTools"];
            this.preloading = !1;
            this.instancesWithUpdate = [];
            this.instancesWithFixedUpdate = [];
            this.instancesWithPostUpdate = [];
            this.instancesWithToolsUpdate = [];
            this.on("beforeremove", this.onBeforeRemove, this);
            pc.ComponentSystem.on("initialize", this.onInitialize, this);
            pc.ComponentSystem.on("postInitialize", this.onPostInitialize, this);
            pc.ComponentSystem.on("update", this.onUpdate, this);
            pc.ComponentSystem.on("fixedUpdate", this.onFixedUpdate, this);
            pc.ComponentSystem.on("postUpdate", this.onPostUpdate, this);
            pc.ComponentSystem.on("toolsUpdate", this.onToolsUpdate, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    pc.extend(d.prototype, {
        initializeComponentData: function(a, b, c) {
            c = ["runInTools", "enabled", "scripts"];
            b.scripts && b.scripts.length && b.scripts.forEach(function(a) {
                if (a.attributes && "array" === pc.type(a.attributes)) {
                    for (var b = {}, c = 0; c < a.attributes.length; c++) b[a.attributes[c].name] = a.attributes[c];
                    a.attributes = b
                }
            });
            d._super.initializeComponentData.call(this, a, b, c)
        },
        cloneComponent: function(a, b) {
            for (var c = this.dataStore[a._guid], e = { runInTools: c.data.runInTools, scripts: [], enabled: c.data.enabled }, c = c.data.scripts, d = 0, g = c.length; d < g; d++) {
                var h = c[d].attributes;
                h && delete c[d].attributes;
                e.scripts.push(pc.extend({}, c[d]));
                h && (e.scripts[d].attributes = this._cloneAttributes(h), c[d].attributes = h)
            }
            return this.addComponent(b, e)
        },
        onBeforeRemove: function(a, b) {
            b.enabled && this._disableScriptComponent(b);
            this._destroyScriptComponent(b)
        },
        onInitialize: function(a) {
            this._registerInstances(a);
            if (a.enabled) {
                a.script && a.script.enabled && this._initializeScriptComponent(a.script);
                a = a.getChildren();
                var b, c = a.length;
                for (b = 0; b < c; b++)
                    if (a[b] instanceof pc.Entity) this.onInitialize(a[b])
            }
        },
        onPostInitialize: function(a) {
            if (a.enabled) {
                a.script && a.script.enabled && this._postInitializeScriptComponent(a.script);
                a = a.getChildren();
                var b, c = a.length;
                for (b = 0; b < c; b++)
                    if (a[b] instanceof pc.Entity) this.onPostInitialize(a[b])
            }
        },
        _callInstancesMethod: function(a, b) {
            var c = a.data.instances,
                e;
            for (e in c)
                if (c.hasOwnProperty(e)) {
                    var d = c[e].instance;
                    d[b] && d[b].call(d)
                }
        },
        _initializeScriptComponent: function(a) {
            this._callInstancesMethod(a, "initialize");
            a.data.initialized = !0;
            a.enabled && a.entity.enabled && this._enableScriptComponent(a)
        },
        _enableScriptComponent: function(a) { this._callInstancesMethod(a, "onEnable") },
        _disableScriptComponent: function(a) { this._callInstancesMethod(a, "onDisable") },
        _destroyScriptComponent: function(a) {
            var b, c = a.data.instances,
                e;
            for (e in c)
                if (c.hasOwnProperty(e)) {
                    var d = c[e].instance;
                    d.destroy && d.destroy();
                    d.update && (b = this.instancesWithUpdate.indexOf(d), 0 <= b && this.instancesWithUpdate.splice(b, 1));
                    d.fixedUpdate && (b = this.instancesWithFixedUpdate.indexOf(d), 0 <= b && this.instancesWithFixedUpdate.splice(b, 1));
                    d.postUpdate && (b = this.instancesWithPostUpdate.indexOf(d), 0 <= b && this.instancesWithPostUpdate.splice(b, 1));
                    d.toolsUpdate && (b = this.instancesWithToolsUpdate.indexOf(d), 0 <= b && this.instancesWithToolsUpdate.splice(b, 1));
                    a.instances[e].instance === a[e] && delete a[e];
                    delete a.instances[e]
                }
        },
        _postInitializeScriptComponent: function(a) {
            this._callInstancesMethod(a, "postInitialize");
            a.data.postInitialized = !0
        },
        _updateInstances: function(a, b, c) { for (var e, d = 0, g = b.length; d < g; d++)(e = b[d]) && e.entity && e.entity.enabled && e.entity.script.enabled && e[a].call(e, c) },
        onUpdate: function(a) { this._updateInstances("update", this.instancesWithUpdate, a) },
        onFixedUpdate: function(a) { this._updateInstances("fixedUpdate", this.instancesWithFixedUpdate, a) },
        onPostUpdate: function(a) { this._updateInstances("postUpdate", this.instancesWithPostUpdate, a) },
        onToolsUpdate: function(a) { this._updateInstances("toolsUpdate", this.instancesWithToolsUpdate, a) },
        broadcast: function(a, b) {
            console.warn("DEPRECATED: ScriptLegacyComponentSystem.broadcast() is deprecated and will be removed soon. Please use: http://developer.playcanvas.com/user-manual/scripting/communication/");
            var c = pc.makeArray(arguments).slice(2),
                e, d, g, h = this.store;
            for (e in h) h.hasOwnProperty(e) && (d = h[e].data, d.instances[a] && (g = d.instances[a].instance[b]) && g.apply(d.instances[a].instance, c))
        },
        _preRegisterInstance: function(a, b, c, e) {
            if (a.script) {
                a.script.data._instances = a.script.data._instances || {};
                if (a.script.data._instances[c]) throw Error(pc.string.format("Script name collision '{0}'. Scripts from '{1}' and '{2}' {{3}}", c, b, a.script.data._instances[c].url, a._guid));
                a.script.data._instances[c] = { url: b, name: c, instance: e }
            }
        },
        _registerInstances: function(a) {
            var b, c, e;
            if (a.script && a.script.data._instances) {
                a.script.instances = a.script.data._instances;
                for (e in a.script.instances) {
                    b = a.script.instances[e];
                    c = b.instance;
                    pc.events.attach(c);
                    c.update && this.instancesWithUpdate.push(c);
                    c.fixedUpdate && this.instancesWithFixedUpdate.push(c);
                    c.postUpdate && this.instancesWithPostUpdate.push(c);
                    c.toolsUpdate && this.instancesWithToolsUpdate.push(c);
                    a.script.scripts && this._createAccessors(a, b);
                    if (a.script[e]) throw Error(pc.string.format("Script with name '{0}' is already attached to Script Component", e));
                    a.script[e] = c
                }
                delete a.script.data._instances
            }
            a = a.getChildren();
            c = a.length;
            for (b = 0; b < c; b++) a[b] instanceof pc.Entity && this._registerInstances(a[b])
        },
        _cloneAttributes: function(a) {
            var b = {},
                c;
            for (c in a)
                if (a.hasOwnProperty(c))
                    if ("entity" !== a[c].type) b[c] = pc.extend({}, a[c]);
                    else {
                        var e = a[c].value;
                        delete a[c].value;
                        b[c] = pc.extend({}, a[c]);
                        b[c].value = e;
                        a[c].value = e
                    } return b
        },
        _createAccessors: function(a, b) {
            var c, e = a.script.scripts.length,
                d = b.url;
            for (c = 0; c < e; c++) {
                var g = a.script.scripts[c];
                if (g.url === d) {
                    c = g.attributes;
                    if (g.name && c) {
                        for (var h in c) c.hasOwnProperty(h) && this._createAccessor(c[h], b);
                        a.script.data.attributes[g.name] = this._cloneAttributes(c)
                    }
                    break
                }
            }
        },
        _createAccessor: function(a, b) {
            var c = this;
            a = { name: a.name, value: a.value, type: a.type };
            c._convertAttributeValue(a);
            Object.defineProperty(b.instance, a.name, {
                get: function() { return a.value },
                set: function(e) {
                    var d = a.value;
                    a.value = e;
                    c._convertAttributeValue(a);
                    b.instance.fire("set", a.name, d, a.value)
                },
                configurable: !0
            })
        },
        _updateAccessors: function(a, b) {
            var c, e = a.script.scripts.length,
                d, g = b.url,
                h, m;
            for (c = 0; c < e; c++)
                if (h = a.script, m = h.scripts[c], m.url === g) {
                    c = m.name;
                    m = m.attributes;
                    if (c) {
                        if (m)
                            for (d in m) m.hasOwnProperty(d) && this._createAccessor(m[d], b);
                        if (e = h.data.attributes[c])
                            for (d in e)
                                if (g = e[d], !(d in m)) delete b.instance[g.name];
                                else if (m[d].value !== g.value && b.instance.onAttributeChanged) b.instance.onAttributeChanged(g.name, g.value, m[d].value);
                        m ? h.data.attributes[c] = this._cloneAttributes(m) : delete h.data.attributes[c]
                    }
                    break
                }
        },
        _convertAttributeValue: function(a) {
            if ("rgb" === a.type || "rgba" === a.type) "array" === pc.type(a.value) && (a.value = 3 === a.value.length ? new pc.Color(a.value[0], a.value[1], a.value[2]) : new pc.Color(a.value[0], a.value[1], a.value[2], a.value[3]));
            else if ("vec2" === a.type) "array" === pc.type(a.value) && (a.value = new pc.Vec2(a.value[0], a.value[1]));
            else if ("vec3" === a.type || "vector" === a.type) "array" === pc.type(a.value) && (a.value = new pc.Vec3(a.value[0], a.value[1], a.value[2]));
            else if ("vec4" === a.type) "array" === pc.type(a.value) && (a.value = new pc.Vec4(a.value[0], a.value[1], a.value[2], a.value[3]));
            else if ("entity" === a.type) null !== a.value && "string" === typeof a.value && (a.value = this.app.root.findByGuid(a.value));
            else if ("curve" === a.type || "colorcurve" === a.type) a.value = new(a.value.keys[0] instanceof Array ? pc.CurveSet : pc.Curve)(a.value.keys), a.value.type = a.value.type
        }
    });
    return { ScriptLegacyComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) { this.on("set_scripts", this.onSetScripts, this) },
        d = pc.inherits(d, pc.Component);
    pc.extend(d.prototype, {
        send: function(a, b) {
            console.warn("DEPRECATED: ScriptLegacyComponent.send() is deprecated and will be removed soon. Please use: http://developer.playcanvas.com/user-manual/scripting/communication/");
            var c = pc.makeArray(arguments).slice(2),
                e = this.entity.script.instances,
                d;
            if (e && e[a] && (d = e[a].instance[b])) return d.apply(e[a].instance, c)
        },
        onEnable: function() {
            d._super.onEnable.call(this);
            this.data.areScriptsLoaded && !this.system.preloading && (this.data.initialized ? this.system._enableScriptComponent(this) : this.system._initializeScriptComponent(this), this.data.postInitialized || this.system._postInitializeScriptComponent(this))
        },
        onDisable: function() {
            d._super.onDisable.call(this);
            this.system._disableScriptComponent(this)
        },
        onSetScripts: function(a, b, c) { this.system._inTools && !this.runInTools || this._updateScriptAttributes(b, c) || (this.enabled && this.system._disableScriptComponent(this), this.system._destroyScriptComponent(this), this.data.areScriptsLoaded = !1, a = c.map(function(a) { return a.url }), this._loadFromCache(a) || this._loadScripts(a)) },
        _updateScriptAttributes: function(a, b) {
            var c = !0;
            if (a.length !== b.length) c = !1;
            else {
                var e, d = b.length;
                for (e = 0; e < d; e++)
                    if (a[e].url !== b[e].url) { c = !1; break }
            }
            if (c)
                for (var g in this.instances) this.instances.hasOwnProperty(g) && this.system._updateAccessors(this.entity, this.instances[g]);
            return c
        },
        _loadFromCache: function(a) {
            var b, c, e = [],
                d = this.system._prefix || "",
                g = /^http(s)?:\/\//i;
            b = 0;
            for (c = a.length; b < c; b++) {
                var h = a[b];
                g.test(h) || (h = pc.path.join(d, h));
                if (h = this.system.app.loader.getFromCache(h, "script")) e.push(h);
                else return !1
            }
            b = 0;
            for (c = e.length; b < c; b++) d = e[b], !0 !== d && d && this.entity.script && !this.entity.script.instances[d._pcScriptName] && (g = new d(this.entity), this.system._preRegisterInstance(this.entity, a[b], d._pcScriptName, g));
            this.data && (this.data.areScriptsLoaded = !0);
            this.system.preloading || (this.system.onInitialize(this.entity), this.system.onPostInitialize(this.entity));
            return !0
        },
        _loadScripts: function(a) {
            var b = a.length,
                c = this.system._prefix || "";
            a.forEach(function(a) {
                var d = null,
                    g = null;
                a.toLowerCase().startsWith("http://") || a.toLowerCase().startsWith("https://") ? d = g = a : (g = a, d = pc.path.join(c, a));
                this.system.app.loader.load(d, "script", function(a, c) {
                    b--;
                    if (a) console.error(a);
                    else if (c && this.entity.script && !this.entity.script.instances[c._pcScriptName]) {
                        var e = new c(this.entity);
                        this.system._preRegisterInstance(this.entity, g, c._pcScriptName, e)
                    }
                    0 === b && (this.data.areScriptsLoaded = !0, this.system.preloading || (this.system.onInitialize(this.entity), this.system.onPostInitialize(this.entity)))
                }.bind(this))
            }.bind(this))
        }
    });
    return { ScriptLegacyComponent: d }
}());
pc.extend(pc, function() {
    return {
        ScriptLegacyComponentData: pc.inherits(function() {
            this.scripts = [];
            this.enabled = !0;
            this.instances = {};
            this._instances = {};
            this.runInTools = !1;
            this.attributes = {};
            this.areScriptsLoaded = this.postInitialized = this.initialized = !1
        }, pc.ComponentData)
    }
}());
pc.extend(pc, { DISTANCE_LINEAR: "linear", DISTANCE_INVERSE: "inverse", DISTANCE_EXPONENTIAL: "exponential" });
pc.extend(pc, function() {
    var d = function(a, b, c) {
        c = c || {};
        this._component = a;
        this._assets = a.system.app.assets;
        this._manager = a.system.manager;
        this._name = b || "Untitled";
        this._volume = void 0 !== c.volume ? pc.math.clamp(Number(c.volume) || 0, 0, 1) : 1;
        this._pitch = void 0 !== c.pitch ? Math.max(.01, Number(c.pitch) || 0) : 1;
        this._loop = !(void 0 === c.loop || !c.loop);
        this._duration = 0 < c.duration ? c.duration : null;
        this._startTime = Math.max(0, Number(c.startTime) || 0);
        this._overlap = !!c.overlap;
        this._autoPlay = !!c.autoPlay;
        this._lastNode = this._firstNode = null;
        this._asset = c.asset;
        this._asset instanceof pc.Asset && (this._asset = this._asset.id);
        this.instances = [];
        pc.events.attach(this)
    };
    d.prototype = {
        play: function() {
            this.overlap || !this.isPlaying && !this.isPaused || this.stop();
            var a = this._createInstance();
            this.instances.push(a);
            if (this.isLoaded) a.play();
            else {
                var b = function(b, e) {
                    a.sound = e;
                    a._playWhenLoaded && a.play()
                };
                this.off("load", b);
                this.once("load", b);
                this.load()
            }
            this.fire("play", this, a);
            return a
        },
        pause: function() {
            for (var a = !1, b = this.instances, c = 0, e = b.length; c < e; c++) b[c].pause() && (a = !0);
            a && this.fire("pause", this);
            return a
        },
        resume: function() {
            for (var a = !1, b = this.instances, c = 0, e = b.length; c < e; c++) b[c].resume() && (a = !0);
            a && this.fire("resume", this);
            return a
        },
        stop: function() {
            for (var a = !1, b = this.instances, c = 0, e = b.length; c < e; c++) b[c].stop() && (a = !0);
            b.length = 0;
            a && this.fire("stop", this);
            return a
        },
        load: function() {
            if (this._hasAsset()) {
                var a = this._assets.get(this._asset);
                a ? (a.off("remove", this._onAssetRemoved, this), a.on("remove", this._onAssetRemoved, this), a.resource ? this.fire("load", this, a.resource) : (a.off("load", this._onAssetLoad, this), a.once("load", this._onAssetLoad, this), this._assets.load(a))) : (this._assets.off("add:" + this._asset, this._onAssetAdd, this), this._assets.once("add:" + this._asset, this._onAssetAdd, this))
            }
        },
        setExternalNodes: function(a, b) {
            if (a) {
                if (b || (b = a), this._firstNode = a, this._lastNode = b, !this._overlap)
                    for (var c = this.instances, e = 0, d = c.length; e < d; e++) c[e].setExternalNodes(a, b)
            } else console.error("The firstNode must have a valid AudioNode")
        },
        clearExternalNodes: function() {
            this._lastNode = this._firstNode = null;
            if (!this._overlap)
                for (var a = this.instances, b = 0, c = a.length; b < c; b++) a[b].clearExternalNodes()
        },
        getExternalNodes: function() { return [this._firstNode, this._lastNode] },
        _hasAsset: function() { return null != this._asset },
        _createInstance: function() {
            var a;
            a = this._component;
            var b = null;
            if (this._hasAsset()) {
                var c = this._assets.get(this._asset);
                c && (b = c.resource)
            }
            c = { volume: this._volume * a.volume, pitch: this._pitch * a.pitch, loop: this._loop, startTime: this._startTime, duration: this._duration };
            a.positional ? (c.position = a.entity.getPosition(), c.maxDistance = a.maxDistance, c.refDistance = a.refDistance, c.rollOffFactor = a.rollOffFactor, c.distanceModel = a.distanceModel, a = new pc.SoundInstance3d(this._manager, b, c)) : a = new pc.SoundInstance(this._manager, b, c);
            a.once("end", this._onInstanceEnd, this);
            this._firstNode && a.setExternalNodes(this._firstNode, this._lastNode);
            return a
        },
        _onInstanceEnd: function(a) { a = this.instances.indexOf(a); - 1 !== a && this.instances.splice(a, 1) },
        _onAssetAdd: function(a) { this.load() },
        _onAssetLoad: function(a) { this.load() },
        _onAssetRemoved: function(a) {
            a.off("remove", this._onAssetRemoved, this);
            this._assets.off("add:" + a.id, this._onAssetAdd, this);
            this.stop()
        },
        updatePosition: function(a) { for (var b = this.instances, c = 0, e = b.length; c < e; c++) b[c].position = a }
    };
    Object.defineProperty(d.prototype, "name", { get: function() { return this._name }, set: function(a) { this._name = a } });
    Object.defineProperty(d.prototype, "volume", { get: function() { return this._volume }, set: function(a) { this._volume = pc.math.clamp(Number(a) || 0, 0, 1); if (!this._overlap) { a = this.instances; for (var b = 0, c = a.length; b < c; b++) a[b].volume = this._volume * this._component.volume } } });
    Object.defineProperty(d.prototype, "pitch", { get: function() { return this._pitch }, set: function(a) { this._pitch = Math.max(Number(a) || 0, .01); if (!this._overlap) { a = this.instances; for (var b = 0, c = a.length; b < c; b++) a[b].pitch = this.pitch * this._component.pitch } } });
    Object.defineProperty(d.prototype, "loop", {
        get: function() { return this._loop },
        set: function(a) {
            this._loop = !!a;
            a = this.instances;
            for (var b = 0, c = a.length; b < c; b++) a[b].loop = this._loop
        }
    });
    Object.defineProperty(d.prototype, "autoPlay", { get: function() { return this._autoPlay }, set: function(a) { this._autoPlay = !!a } });
    Object.defineProperty(d.prototype, "overlap", { get: function() { return this._overlap }, set: function(a) { this._overlap = !!a } });
    Object.defineProperty(d.prototype, "startTime", { get: function() { return this._startTime }, set: function(a) { this._startTime = Math.max(0, Number(a) || 0); if (!this._overlap) { a = this.instances; for (var b = 0, c = a.length; b < c; b++) a[b].startTime = this._startTime } } });
    Object.defineProperty(d.prototype, "duration", {
        get: function() {
            var a = 0;
            this._hasAsset() && (a = this._assets.get(this._asset), a = a.resource ? a.resource.duration : 0);
            return null != this._duration ? this._duration % (a || 1) : a
        },
        set: function(a) { this._duration = Math.max(0, Number(a) || 0) || null; if (!this._overlap) { a = this.instances; for (var b = 0, c = a.length; b < c; b++) a[b].duration = this._duration } }
    });
    Object.defineProperty(d.prototype, "asset", {
        get: function() { return this._asset },
        set: function(a) {
            var b = this._asset;
            b && (this._assets.off("add:" + b, this._onAssetAdd, this), (b = this._assets.get(b)) && b.off("remove", this._onAssetRemoved, this));
            this._asset = a;
            this._asset instanceof pc.Asset && (this._asset = this._asset.id);
            this._hasAsset() && this._component.enabled && this._component.entity.enabled && this.load()
        }
    });
    Object.defineProperty(d.prototype, "isLoaded", { get: function() { if (this._hasAsset()) { var a = this._assets.get(this._asset); if (a) return !!a.resource } return !1 } });
    Object.defineProperty(d.prototype, "isPlaying", {
        get: function() {
            for (var a = this.instances, b = 0, c = a.length; b < c; b++)
                if (a[b].isPlaying) return !0;
            return !1
        }
    });
    Object.defineProperty(d.prototype, "isPaused", {
        get: function() {
            var a = this.instances,
                b = a.length;
            if (0 === b) return !1;
            for (var c = 0; c < b; c++)
                if (!a[c].isPaused) return !1;
            return !0
        }
    });
    Object.defineProperty(d.prototype, "isStopped", {
        get: function() {
            for (var a = this.instances, b = 0, c = a.length; b < c; b++)
                if (!a[b].isStopped) return !1;
            return !0
        }
    });
    return { SoundSlot: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
            this.id = "sound";
            this.description = "Allows an Entity to play sounds";
            a.systems.add(this.id, this);
            this.ComponentType = pc.SoundComponent;
            this.DataType = pc.SoundComponentData;
            this.schema = "enabled volume pitch positional refDistance maxDistance rollOffFactor distanceModel slots".split(" ");
            this.manager = b;
            pc.ComponentSystem.on("update", this.onUpdate, this);
            this.on("beforeremove", this.onBeforeRemove, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    pc.extend(d.prototype, {
        initializeComponentData: function(a, b, c) {
            c = "volume pitch positional refDistance maxDistance rollOffFactor distanceModel slots enabled".split(" ");
            d._super.initializeComponentData.call(this, a, b, c)
        },
        cloneComponent: function(a, b) {
            var c = a.sound.data,
                e = {},
                d;
            for (d in c) c.hasOwnProperty(d) && (e[d] = c[d]);
            e.slots = {};
            for (d in c.slots) {
                var g = c.slots[d];
                e.slots[d] = g instanceof pc.SoundSlot ? { name: g.name, volume: g.volume, pitch: g.pitch, loop: g.loop, duration: g.duration, startTime: g.startTime, overlap: g.overlap, autoPlay: g.autoPlay, asset: g.asset } : g
            }
            e.playingBeforeDisable = {};
            return this.addComponent(b, e)
        },
        onUpdate: function(a) {
            a = this.store;
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b],
                        e = c.entity,
                        c = c.data;
                    if (c.enabled && e.enabled && c.positional) {
                        var e = e.getPosition(),
                            c = c.slots,
                            d;
                        for (d in c) c[d].updatePosition(e)
                    }
                }
        },
        onBeforeRemove: function(a, b) {
            var c = b.slots,
                e;
            for (e in c) c[e].overlap || c[e].stop()
        }
    });
    Object.defineProperty(d.prototype, "volume", { get: function() { return this.manager.volume }, set: function(a) { this.manager.volume = a } });
    Object.defineProperty(d.prototype, "context", { get: function() { return pc.SoundManager.hasAudioContext() ? this.manager.context : (console.warn("WARNING: Audio context is not supported on this browser"), null) } });
    return { SoundComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
            this.on("set_slots", this.onSetSlots, this);
            this.on("set_volume", this.onSetVolume, this);
            this.on("set_pitch", this.onSetPitch, this);
            this.on("set_refDistance", this.onSetRefDistance, this);
            this.on("set_maxDistance", this.onSetMaxDistance, this);
            this.on("set_rollOffFactor", this.onSetRollOffFactor, this);
            this.on("set_distanceModel", this.onSetDistanceModel, this);
            this.on("set_positional", this.onSetPositional, this)
        },
        d = pc.inherits(d, pc.Component);
    pc.extend(d.prototype, {
        onSetSlots: function(a, b, c) {
            if (b)
                for (var e in b) b[e].stop();
            a = {};
            for (e in c) c[e] instanceof pc.SoundSlot ? a[c[e].name] = c[e] : c[e].name && (a[c[e].name] = new pc.SoundSlot(this, c[e].name, c[e]));
            this.data.slots = a;
            if (this.enabled && this.entity.enabled) this.onEnable()
        },
        onSetVolume: function(a, b, c) {
            a = this.data.slots;
            for (var e in a)
                if (b = a[e], !b.overlap)
                    for (var d = b.instances, g = 0, h = d.length; g < h; g++) d[g].volume = b.volume * c
        },
        onSetPitch: function(a, b, c) {
            a = this.data.slots;
            for (var e in a)
                if (b = a[e], !b.overlap)
                    for (var d = b.instances, g = 0, h = d.length; g < h; g++) d[g].pitch = b.pitch * c
        },
        onSetRefDistance: function(a, b, c) {
            a = this.data.slots;
            for (var e in a)
                if (b = a[e], !b.overlap) { b = b.instances; for (var d = 0, g = b.length; d < g; d++) b[d].refDistance = c }
        },
        onSetMaxDistance: function(a, b, c) {
            a = this.data.slots;
            for (var e in a)
                if (b = a[e], !b.overlap) { b = b.instances; for (var d = 0, g = b.length; d < g; d++) b[d].maxDistance = c }
        },
        onSetRollOffFactor: function(a, b, c) {
            a = this.data.slots;
            for (var e in a)
                if (b = a[e], !b.overlap) { b = b.instances; for (var d = 0, g = b.length; d < g; d++) b[d].rollOffFactor = c }
        },
        onSetDistanceModel: function(a, b, c) {
            a = this.data.slots;
            for (var e in a)
                if (b = a[e], !b.overlap) { b = b.instances; for (var d = 0, g = b.length; d < g; d++) b[d].distanceModel = c }
        },
        onSetPositional: function(a, b, c) {
            a = this.data.slots;
            for (var e in a)
                if (b = a[e], !b.overlap) {
                    c = b.instances;
                    for (var d = 0, g = c.length; d < g; d++) {
                        var h = c[d].isPlaying || c[d].isSuspended,
                            m = c[d].currentTime;
                        h && c[d].stop();
                        c[d] = b._createInstance();
                        h && (c[d].play(), c[d].currentTime = m)
                    }
                }
        },
        onEnable: function() {
            d._super.onEnable.call(this);
            if (!this.system._inTools) {
                var a = this.data.slots,
                    b = this.data.playingBeforeDisable,
                    c;
                for (c in a) {
                    var e = a[c];
                    e.autoPlay && e.isStopped ? e.play() : b[c] ? e.resume() : e.isLoaded || e.load()
                }
            }
        },
        onDisable: function() {
            d._super.onDisable.call(this);
            var a = this.data.slots,
                b = {},
                c;
            for (c in a) !a[c].overlap && a[c].isPlaying && (a[c].pause(), b[c] = !0);
            this.data.playingBeforeDisable = b
        },
        addSlot: function(a, b) {
            var c = this.data.slots;
            if (c[a]) return logWARNING("A sound slot with name " + a + " already exists on Entity " + this.entity.getPath()), null;
            var e = new pc.SoundSlot(this, a, b);
            c[a] = e;
            e.autoPlay && this.enabled && this.entity.enabled && e.play();
            return e
        },
        removeSlot: function(a) {
            var b = this.data.slots;
            b[a] && (b[a].stop(), delete b[a])
        },
        slot: function(a) { return this.data.slots[a] },
        play: function(a) {
            if (!this.enabled || !this.entity.enabled) return null;
            var b = this.slots[a];
            if (!b) return logWARNING("Trying to play sound slot with name " + a + " which does not exist"), null;
            a = b.play();
            this.fire("play", this, b, a);
            return a
        },
        pause: function(a) {
            var b;
            b = this.data.slots;
            if (a)(b = b[a]) ? (b.pause(), this.fire("pause", this, b)) : logWARNING("Trying to pause sound slot with name " + a + " which does not exist");
            else {
                for (var c in b) b[c].pause();
                this.fire("pause", this)
            }
        },
        resume: function(a) {
            var b;
            b = this.data.slots;
            if (a)(b = b[a]) ? b.isPaused && b.resume() && this.fire("resume", this, b) : logWARNING("Trying to resume sound slot with name " + a + " which does not exist");
            else {
                for (var c in b) b[c].resume();
                this.fire("resume", this)
            }
        },
        stop: function(a) {
            var b;
            b = this.data.slots;
            if (a)(b = b[a]) ? b.stop() && this.fire("stop", this, b) : logWARNING("Trying to stop sound slot with name " +
                a + " which does not exist");
            else {
                for (var c in b) b[c].stop();
                this.fire("stop", this)
            }
        }
    });
    return { SoundComponent: d }
}());
pc.SoundComponentData = function() {
    this.enabled = !0;
    this.pitch = this.volume = 1;
    this.positional = !0;
    this.refDistance = 1;
    this.maxDistance = 1E4;
    this.rollOffFactor = 1;
    this.distanceModel = pc.DISTANCE_LINEAR;
    this.slots = {};
    this.playingBeforeDisable = {}
};
pc.extend(pc, function() {
    var d = function(a, b) {
            this.id = "audiosource";
            this.description = "Specifies audio assets that can be played at the position of the Entity.";
            a.systems.add(this.id, this);
            this.ComponentType = pc.AudioSourceComponent;
            this.DataType = pc.AudioSourceComponentData;
            this.schema = "enabled assets volume pitch loop activate 3d minDistance maxDistance rollOffFactor distanceModel sources currentSource channel".split(" ");
            this.manager = b;
            this.initialized = !1;
            pc.ComponentSystem.on("initialize", this.onInitialize, this);
            pc.ComponentSystem.on("update", this.onUpdate, this);
            this.on("remove", this.onRemove, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    pc.extend(d.prototype, {
        initializeComponentData: function(a, b, c) {
            c = "activate volume pitch loop 3d minDistance maxDistance rollOffFactor distanceModel enabled assets".split(" ");
            d._super.initializeComponentData.call(this, a, b, c);
            a.paused = !(a.enabled && a.activate)
        },
        onInitialize: function(a) {
            a.audiosource && a.enabled && a.audiosource.enabled && a.audiosource.activate && a.audiosource.play(a.audiosource.currentSource);
            a = a.getChildren();
            var b, c = a.length;
            for (b = 0; b < c; b++)
                if (a[b] instanceof pc.Entity) this.onInitialize(a[b]);
            this.initialized = !0
        },
        onUpdate: function(a) {
            a = this.store;
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b],
                        e = c.entity,
                        c = c.data;
                    c.enabled && e.enabled && c.channel instanceof pc.Channel3d && (e = e.getPosition(), c.channel.setPosition(e))
                }
        },
        onRemove: function(a, b) { b.channel && (b.channel.stop(), b.channel = null) },
        setVolume: function(a) { this.manager.setVolume(a) }
    });
    return { AudioSourceComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
            this.on("set_assets", this.onSetAssets, this);
            this.on("set_loop", this.onSetLoop, this);
            this.on("set_volume", this.onSetVolume, this);
            this.on("set_pitch", this.onSetPitch, this);
            this.on("set_minDistance", this.onSetMinDistance, this);
            this.on("set_maxDistance", this.onSetMaxDistance, this);
            this.on("set_rollOffFactor", this.onSetRollOffFactor, this);
            this.on("set_distanceModel", this.onSetDistanceModel, this);
            this.on("set_3d", this.onSet3d, this)
        },
        d = pc.inherits(d, pc.Component);
    pc.extend(d.prototype, {
        play: function(a) {
            if (this.enabled && this.entity.enabled) {
                this.channel && this.stop();
                var b, c = this.data;
                c.sources[a] && (c["3d"] ? (b = this.entity.getPosition(), b = this.system.manager.playSound3d(c.sources[a], b, c)) : b = this.system.manager.playSound(c.sources[a], c), c.currentSource = a, c.channel = b)
            }
        },
        pause: function() { this.channel && this.channel.pause() },
        unpause: function() { this.channel && this.channel.paused && this.channel.unpause() },
        stop: function() { this.channel && (this.channel.stop(), this.channel = null) },
        onSetAssets: function(a, b, c) {
            a = [];
            var e, d = c.length;
            if (b && b.length)
                for (e = 0; e < b.length; e++)
                    if (b[e]) {
                        var g = this.system.app.assets.get(b[e]);
                        g && (g.off("change", this.onAssetChanged, this), g.off("remove", this.onAssetRemoved, this), this.currentSource === g.name && this.stop())
                    } if (d)
                for (e = 0; e < d; e++) 0 > b.indexOf(c[e]) && (c[e] instanceof pc.Asset ? a.push(c[e].id) : a.push(c[e]));
            !this.system._inTools && a.length && this.loadAudioSourceAssets(a)
        },
        onAssetChanged: function(a, b, c, e) { "resource" === b && this.data.sources && (this.data.sources[a.name] = c, this.data.currentSource === a.name && this.channel && (this.channel.paused ? (this.play(a.name), this.pause()) : this.play(a.name))) },
        onAssetRemoved: function(a) {
            a.off("remove", this.onAssetRemoved, this);
            this.data.sources[a.name] && (delete this.data.sources[a.name], this.data.currentSource === a.name && (this.stop(), this.data.currentSource = null))
        },
        onSetLoop: function(a, b, c) { b != c && this.channel && this.channel.setLoop(c) },
        onSetVolume: function(a, b, c) { b != c && this.channel && this.channel.setVolume(c) },
        onSetPitch: function(a, b, c) { b != c && this.channel && this.channel.setPitch(c) },
        onSetMaxDistance: function(a, b, c) { b != c && this.channel instanceof pc.Channel3d && this.channel.setMaxDistance(c) },
        onSetMinDistance: function(a, b, c) { b != c && this.channel instanceof pc.Channel3d && this.channel.setMinDistance(c) },
        onSetRollOffFactor: function(a, b, c) { b != c && this.channel instanceof pc.Channel3d && this.channel.setRollOffFactor(c) },
        onSetDistanceModel: function(a, b, c) { b !== c && this.channel instanceof pc.Channel3d && this.channel.setDistanceModel(c) },
        onSet3d: function(a, b, c) { b !== c && this.system.initialized && this.currentSource && (b = a = !1, this.channel && (a = this.channel.paused, b = this.channel.suspended), this.play(this.currentSource), this.channel && (this.channel.paused = a, this.channel.suspended = b)) },
        onEnable: function() {
            d._super.onEnable.call(this);
            var a = this.data.assets;
            if (a)
                for (var b = this.system.app.assets, c = 0, e = a.length; c < e; c++) {
                    var f = a[c];
                    f instanceof pc.Asset || (f = b.get(f));
                    f && !f.resource && b.load(f)
                }
            this.system.initialized && (this.data.activate && !this.channel ? this.play(this.currentSource) : this.unpause())
        },
        onDisable: function() {
            d._super.onDisable.call(this);
            this.pause()
        },
        loadAudioSourceAssets: function(a) {
            var b = this,
                c = a.map(function(a) { return this.system.app.assets.get(a) }, this),
                e = {},
                d = null,
                g = c.length,
                h = function(a) { g-- },
                m = function() {
                    this.data.sources = e;
                    this.data.currentSource = d;
                    if (this.enabled && this.activate && d) this.onEnable()
                }.bind(this);
            c.forEach(function(c, p) {
                c ? (d = d || c.name, c.off("change", this.onAssetChanged, this), c.on("change", this.onAssetChanged, this), c.off("remove", this.onAssetRemoved, this), c.on("remove", this.onAssetRemoved, this), c.off("error", h, this), c.on("error", h, this), c.ready(function(a) {
                    e[a.name] = a.resource;
                    g--;
                    0 === g && m()
                }), !c.resource && b.enabled && b.entity.enabled && this.system.app.assets.load(c)) : (g--, 0 === g && m(), this.system.app.assets.on("add:" + a[p], function(a) {
                    a.ready(function(a) { b.data.sources[a.name] = a.resource });
                    a.resource || b.system.app.assets.load(a)
                }))
            }, this)
        }
    });
    return { AudioSourceComponent: d }
}());
pc.AudioSourceComponentData = function() {
    this.enabled = !0;
    this.assets = [];
    this.activate = !0;
    this.pitch = this.volume = 1;
    this.loop = !1;
    this["3d"] = !0;
    this.minDistance = 1;
    this.maxDistance = 1E4;
    this.rollOffFactor = 1;
    this.distanceModel = pc.DISTANCE_INVERSE;
    this.paused = !0;
    this.sources = {};
    this.channel = this.currentSource = null
};
pc.extend(pc, function() {
    var d = function(a, b) {
            this.id = "audiolistener";
            this.description = "Specifies the location of the listener for 3D audio playback.";
            a.systems.add(this.id, this);
            this.ComponentType = pc.AudioListenerComponent;
            this.DataType = pc.AudioListenerComponentData;
            this.schema = ["enabled"];
            this.manager = b;
            this.current = null;
            pc.ComponentSystem.on("update", this.onUpdate, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    pc.extend(d.prototype, {
        initializeComponentData: function(a, b, c) {
            c = ["enabled"];
            d._super.initializeComponentData.call(this, a, b, c)
        },
        onUpdate: function(a) { this.current && (a = this.current.getPosition(), this.manager.listener.setPosition(a), a = this.current.getWorldTransform(), this.manager.listener.setOrientation(a)) }
    });
    return { AudioListenerComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {},
        d = pc.inherits(d, pc.Component);
    pc.extend(d.prototype, {
        setCurrentListener: function() {
            if (this.enabled && this.entity.audiolistener && this.entity.enabled) {
                this.system.current = this.entity;
                var a = this.system.current.getPosition();
                this.system.manager.listener.setPosition(a)
            }
        },
        onEnable: function() {
            d._super.onEnable.call(this);
            this.setCurrentListener()
        },
        onDisable: function() {
            d._super.onDisable.call(this);
            this.system.current === this.entity && (this.system.current = null)
        }
    });
    return { AudioListenerComponent: d }
}());
pc.extend(pc, function() { return { AudioListenerComponentData: pc.inherits(function() { this.enabled = !0 }, pc.ComponentData) } }());
pc.extend(pc, { BODYTYPE_STATIC: "static", BODYTYPE_DYNAMIC: "dynamic", BODYTYPE_KINEMATIC: "kinematic", BODYFLAG_STATIC_OBJECT: 1, BODYFLAG_KINEMATIC_OBJECT: 2, BODYFLAG_NORESPONSE_OBJECT: 4, BODYSTATE_ACTIVE_TAG: 1, BODYSTATE_ISLAND_SLEEPING: 2, BODYSTATE_WANTS_DEACTIVATION: 3, BODYSTATE_DISABLE_DEACTIVATION: 4, BODYSTATE_DISABLE_SIMULATION: 5, BODYGROUP_NONE: 0, BODYGROUP_DEFAULT: 1, BODYGROUP_DYNAMIC: 1, BODYGROUP_STATIC: 2, BODYGROUP_KINEMATIC: 4, BODYGROUP_ENGINE_1: 8, BODYGROUP_TRIGGER: 16, BODYGROUP_ENGINE_2: 32, BODYGROUP_ENGINE_3: 64, BODYGROUP_USER_1: 128, BODYGROUP_USER_2: 256, BODYGROUP_USER_3: 512, BODYGROUP_USER_4: 1024, BODYGROUP_USER_5: 2048, BODYGROUP_USER_6: 4096, BODYGROUP_USER_7: 8192, BODYGROUP_USER_8: 16384, BODYMASK_NONE: 0, BODYMASK_ALL: 65535, BODYMASK_STATIC: 2, BODYMASK_NOT_STATIC: 65533, BODYMASK_NOT_STATIC_KINEMATIC: 65529 });
pc.extend(pc, function() {
    new pc.Mat4;
    new pc.Mat4;
    new pc.Vec3;
    new pc.Vec3;
    new pc.Vec3;
    var d, a, b = {},
        c = {},
        e = function(a, b, c) {
            this.entity = a;
            this.point = b;
            this.normal = c
        },
        f = function(a, b, c) { 0 === arguments.length ? (this.b = this.a = null, this.localPointA = new pc.Vec3, this.localPointB = new pc.Vec3, this.pointA = new pc.Vec3, this.pointB = new pc.Vec3, this.normal = new pc.Vec3) : (this.a = a, this.b = b, this.localPointA = c.localPoint, this.localPointB = c.localPointOther, this.pointA = c.point, this.pointB = c.pointOther, this.normal = c.normal) },
        g = function(a, b, c, e, d) { 0 === arguments.length ? (this.localPoint = new pc.Vec3, this.localPointOther = new pc.Vec3, this.point = new pc.Vec3, this.pointOther = new pc.Vec3, this.normal = new pc.Vec3) : (this.localPoint = a, this.localPointOther = b, this.point = c, this.pointOther = e, this.normal = d) },
        h = function(a, b) {
            this.other = a;
            this.contacts = b
        },
        m = function(a) {
            this.id = "rigidbody";
            this.description = "Adds the entity to the scene's physical simulation.";
            a.systems.add(this.id, this);
            this._stats = a.stats.frame;
            this.ComponentType = pc.RigidBodyComponent;
            this.DataType = pc.RigidBodyComponentData;
            this.contactPointPool = new pc.AllocatePool(g, 1);
            this.contactResultPool = new pc.AllocatePool(h, 1);
            this.singleContactResultPool = new pc.AllocatePool(f, 1);
            this.schema = "enabled type mass linearDamping angularDamping linearFactor angularFactor friction restitution group mask body".split(" ");
            this.maxSubSteps = 10;
            this.fixedTimeStep = 1 / 60;
            this.on("remove", this.onRemove, this)
        },
        m = pc.inherits(m, pc.ComponentSystem);
    pc.extend(m.prototype, {
        onLibraryLoaded: function() {
            if ("undefined" !== typeof Ammo) {
                var b = new Ammo.btDefaultCollisionConfiguration,
                    c = new Ammo.btCollisionDispatcher(b),
                    e = new Ammo.btDbvtBroadphase,
                    f = new Ammo.btSequentialImpulseConstraintSolver;
                this.dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(c, e, f, b);
                this._ammoGravity = new Ammo.btVector3(0, -9.82, 0);
                this.dynamicsWorld.setGravity(this._ammoGravity);
                d = new Ammo.btVector3;
                a = new Ammo.btVector3;
                pc.ComponentSystem.on("update", this.onUpdate, this)
            } else pc.ComponentSystem.off("update", this.onUpdate, this)
        },
        initializeComponentData: function(a, b, c) {
            c = "enabled mass linearDamping angularDamping linearFactor angularFactor friction restitution type group mask".split(" ");
            var e = {};
            c.forEach(function(a) { e[a] = b[a] });
            b.bodyType && (e.type = b.bodyType, console.warn("WARNING: rigidbody.bodyType: Property is deprecated. Use type instead."));
            e.linearFactor && "array" === pc.type(e.linearFactor) && (e.linearFactor = new pc.Vec3(e.linearFactor[0], e.linearFactor[1], e.linearFactor[2]));
            e.angularFactor && "array" === pc.type(e.angularFactor) && (e.angularFactor = new pc.Vec3(e.angularFactor[0], e.angularFactor[1], e.angularFactor[2]));
            m._super.initializeComponentData.call(this, a, e, c)
        },
        cloneComponent: function(a, b) { this.addComponent(b, { enabled: a.rigidbody.enabled, mass: a.rigidbody.mass, linearDamping: a.rigidbody.linearDamping, angularDamping: a.rigidbody.angularDamping, linearFactor: [a.rigidbody.linearFactor.x, a.rigidbody.linearFactor.y, a.rigidbody.linearFactor.z], angularFactor: [a.rigidbody.angularFactor.x, a.rigidbody.angularFactor.y, a.rigidbody.angularFactor.z], friction: a.rigidbody.friction, restitution: a.rigidbody.restitution, type: a.rigidbody.type, group: a.rigidbody.group, mask: a.rigidbody.mask }) },
        onRemove: function(a, b) {
            b.body && (this.removeBody(b.body), Ammo.destroy(b.body));
            b.body = null
        },
        addBody: function(a, b, c) { void 0 !== b && void 0 !== c ? this.dynamicsWorld.addRigidBody(a, b, c) : this.dynamicsWorld.addRigidBody(a); return a },
        removeBody: function(a) { this.dynamicsWorld.removeRigidBody(a) },
        addConstraint: function(a) { this.dynamicsWorld.addConstraint(a); return a },
        removeConstraint: function(a) { this.dynamicsWorld.removeConstraint(a) },
        setGravity: function() {
            var a, b, c;
            1 === arguments.length ? (a = arguments[0].x, b = arguments[0].y, c = arguments[0].z) : (a = arguments[0], b = arguments[1], c = arguments[2]);
            this._ammoGravity.setValue(a, b, c);
            this.dynamicsWorld.setGravity(this._ammoGravity)
        },
        raycastFirst: function(b, c, f) {
            d.setValue(b.x, b.y, b.z);
            a.setValue(c.x, c.y, c.z);
            b = new Ammo.ClosestRayResultCallback(d, a);
            this.dynamicsWorld.rayTest(d, a, b);
            if (b.hasHit()) {
                c = b.get_m_collisionObject();
                c = Ammo.castObject(c, Ammo.btRigidBody);
                var g = b.get_m_hitPointWorld(),
                    h = b.get_m_hitNormalWorld();
                c && f(new e(c.entity, new pc.Vec3(g.x(), g.y(), g.z()), new pc.Vec3(h.x(), h.y(), h.z())))
            }
            Ammo.destroy(b)
        },
        _storeCollision: function(a, e) {
            var d = !1,
                f = a._guid;
            b[f] = b[f] || { others: [], entity: a };
            0 > b[f].others.indexOf(e) && (b[f].others.push(e), d = !0);
            c[f] = c[f] || { others: [], entity: a };
            c[f].others.push(e);
            return d
        },
        _createContactPointFromAmmo: function(a) {
            var b = this.contactPointPool.allocate();
            b.localPoint.set(a.get_m_localPointA().x(), a.get_m_localPointA().y(), a.get_m_localPointA().z());
            b.localPointOther.set(a.get_m_localPointB().x(), a.get_m_localPointB().y(), a.get_m_localPointB().z());
            b.point.set(a.getPositionWorldOnA().x(), a.getPositionWorldOnA().y(), a.getPositionWorldOnA().z());
            b.pointOther.set(a.getPositionWorldOnB().x(), a.getPositionWorldOnB().y(), a.getPositionWorldOnB().z());
            b.normal.set(a.get_m_normalWorldOnB().x(), a.get_m_normalWorldOnB().y(), a.get_m_normalWorldOnB().z());
            return b
        },
        _createReverseContactPointFromAmmo: function(a) {
            var b = this.contactPointPool.allocate();
            b.localPointOther.set(a.get_m_localPointA().x(), a.get_m_localPointA().y(), a.get_m_localPointA().z());
            b.localPoint.set(a.get_m_localPointB().x(), a.get_m_localPointB().y(), a.get_m_localPointB().z());
            b.pointOther.set(a.getPositionWorldOnA().x(), a.getPositionWorldOnA().y(), a.getPositionWorldOnA().z());
            b.point.set(a.getPositionWorldOnB().x(), a.getPositionWorldOnB().y(), a.getPositionWorldOnB().z());
            b.normal.set(a.get_m_normalWorldOnB().x(), a.get_m_normalWorldOnB().y(), a.get_m_normalWorldOnB().z());
            return b
        },
        _createSingleContactResult: function(a, b, c) {
            var e = this.singleContactResultPool.allocate();
            e.a = a;
            e.b = b;
            e.localPointA = c.localPoint;
            e.localPointB = c.localPointOther;
            e.pointA = c.point;
            e.pointB = c.pointOther;
            e.normal = c.normal;
            return e
        },
        _createContactResult: function(a, b) {
            var c = this.contactResultPool.allocate();
            c.other = a;
            c.contacts = b;
            return c
        },
        _cleanOldCollisions: function() {
            for (var a in b)
                if (b.hasOwnProperty(a)) { for (var e = b[a].entity, d = e.collision, f = b[a].others, g = f.length; g--;) { var h = f[g]; if (!c[a] || 0 > c[a].others.indexOf(h)) f.splice(g, 1), d && h.collision && (e.rigidbody && h.rigidbody ? d.fire("collisionend", h) : e.trigger && d.fire("triggerleave", h)) } 0 === f.length && delete b[a] }
        },
        onUpdate: function(a) {
            this.dynamicsWorld.stepSimulation(a, this.maxSubSteps, this.fixedTimeStep);
            var b = this.store,
                e;
            for (e in b)
                if (b.hasOwnProperty(e)) {
                    var d = b[e].entity,
                        f = b[e].data;
                    f.body && f.body.isActive() && f.enabled && d.enabled && (f.type === pc.BODYTYPE_DYNAMIC ? d.rigidbody.syncBodyToEntity() : f.type === pc.BODYTYPE_KINEMATIC && d.rigidbody._updateKinematic(a))
                } a = this.dynamicsWorld.getDispatcher();
            var b = a.getNumManifolds(),
                g;
            c = {};
            for (e = 0; e < b; e++) {
                var h = a.getManifoldByIndexInternal(e),
                    m = h.getBody0(),
                    y = h.getBody1(),
                    d = Ammo.castObject(m, Ammo.btRigidBody),
                    f = Ammo.castObject(y, Ammo.btRigidBody),
                    d = d.entity,
                    f = f.entity;
                if (d && f) {
                    g = m.getCollisionFlags();
                    var x = y.getCollisionFlags(),
                        v = h.getNumContacts(),
                        z = [],
                        y = [],
                        u;
                    if (0 < v)
                        if (g & pc.BODYFLAG_NORESPONSE_OBJECT || x & pc.BODYFLAG_NORESPONSE_OBJECT) u = d.collision ? d.collision.hasEvent("triggerenter") || d.collision.hasEvent("triggerleave") : !1, m = f.collision ? f.collision.hasEvent("triggerenter") || f.collision.hasEvent("triggerleave") : !1, u && (h = this._storeCollision(d, f)) && (!d.collision || x & pc.BODYFLAG_NORESPONSE_OBJECT || d.collision.fire("triggerenter", f)), m && (h = this._storeCollision(f, d)) && (!f.collision || g & pc.BODYFLAG_NORESPONSE_OBJECT || f.collision.fire("triggerenter", d));
                        else if (u = d.collision ? d.collision.hasEvent("collisionstart") || d.collision.hasEvent("collisionend") || d.collision.hasEvent("contact") : !1, m = f.collision ? f.collision.hasEvent("collisionstart") || f.collision.hasEvent("collisionend") || f.collision.hasEvent("contact") : !1, (x = this.hasEvent("contact")) || u || m) {
                        for (g = 0; g < v; g++) {
                            var A = h.getContactPoint(g),
                                B = this._createContactPointFromAmmo(A);
                            if (u || m) A = this._createReverseContactPointFromAmmo(A), z.push(B), y.push(A);
                            x && (B = this._createSingleContactResult(d, f, B), this.fire("contact", B))
                        }
                        u && (v = this._createContactResult(f, z), d.collision && d.collision.fire("contact", v), (h = this._storeCollision(d, f)) && d.collision && d.collision.fire("collisionstart", v));
                        m && (y = this._createContactResult(d, y), f.collision && f.collision.fire("contact", y), (h = this._storeCollision(f, d)) && f.collision && f.collision.fire("collisionstart", y))
                    }
                }
            }
            this._cleanOldCollisions();
            this.contactPointPool.freeAll();
            this.contactResultPool.freeAll();
            this.singleContactResultPool.freeAll()
        }
    });
    return { RIGIDBODY_TYPE_STATIC: "static", RIGIDBODY_TYPE_DYNAMIC: "dynamic", RIGIDBODY_TYPE_KINEMATIC: "kinematic", RIGIDBODY_CF_STATIC_OBJECT: 1, RIGIDBODY_CF_KINEMATIC_OBJECT: 2, RIGIDBODY_CF_NORESPONSE_OBJECT: 4, RIGIDBODY_ACTIVE_TAG: 1, RIGIDBODY_ISLAND_SLEEPING: 2, RIGIDBODY_WANTS_DEACTIVATION: 3, RIGIDBODY_DISABLE_DEACTIVATION: 4, RIGIDBODY_DISABLE_SIMULATION: 5, RigidBodyComponentSystem: m }
}());
pc.extend(pc, function() {
    var d, a, b, c, e, f = function(f, h) {
            "undefined" === typeof Ammo || d || (d = new Ammo.btTransform, a = new Ammo.btVector3, b = new Ammo.btVector3, c = new Ammo.btQuaternion, e = new Ammo.btVector3(0, 0, 0));
            this.on("set_mass", this.onSetMass, this);
            this.on("set_linearDamping", this.onSetLinearDamping, this);
            this.on("set_angularDamping", this.onSetAngularDamping, this);
            this.on("set_linearFactor", this.onSetLinearFactor, this);
            this.on("set_angularFactor", this.onSetAngularFactor, this);
            this.on("set_friction", this.onSetFriction, this);
            this.on("set_restitution", this.onSetRestitution, this);
            this.on("set_type", this.onSetType, this);
            this.on("set_group", this.onSetGroupOrMask, this);
            this.on("set_mask", this.onSetGroupOrMask, this);
            this.on("set_body", this.onSetBody, this);
            this._displacement = new pc.Vec3(0, 0, 0);
            this._linearVelocity = new pc.Vec3(0, 0, 0);
            this._angularVelocity = new pc.Vec3(0, 0, 0)
        },
        f = pc.inherits(f, pc.Component);
    Object.defineProperty(f.prototype, "bodyType", {
        get: function() { console.warn("WARNING: bodyType: Function is deprecated. Query type property instead."); return this.type },
        set: function(a) {
            console.warn("WARNING: bodyType: Function is deprecated. Set type property instead.");
            this.type = a
        }
    });
    Object.defineProperty(f.prototype, "linearVelocity", {
        get: function() {
            if (this.isKinematic()) return this._linearVelocity;
            if (this.body) {
                var a = this.body.getLinearVelocity();
                this._linearVelocity.set(a.x(), a.y(), a.z());
                return this._linearVelocity
            }
        },
        set: function(b) {
            this.activate();
            if (this.isKinematic()) this._linearVelocity.copy(b);
            else {
                var c = this.body;
                c && (a.setValue(b.x, b.y, b.z), c.setLinearVelocity(a))
            }
        }
    });
    Object.defineProperty(f.prototype, "angularVelocity", {
        get: function() {
            if (this.isKinematic()) return this._angularVelocity;
            if (this.body) {
                var a = this.body.getAngularVelocity();
                this._angularVelocity.set(a.x(), a.y(), a.z());
                return this._angularVelocity
            }
        },
        set: function(b) {
            this.activate();
            if (this.isKinematic()) this._angularVelocity.copy(b);
            else {
                var c = this.body;
                c && (a.setValue(b.x, b.y, b.z), c.setAngularVelocity(a))
            }
        }
    });
    pc.extend(f.prototype, {
        createBody: function() {
            var b = this.entity,
                e;
            b.collision && (e = b.collision.shape, b.trigger && (b.trigger.destroy(), delete b.trigger));
            if (e) {
                this.body && (this.system.removeBody(this.body), Ammo.destroy(this.body));
                var d = this.isStaticOrKinematic(),
                    f = d ? 0 : this.mass,
                    p = new Ammo.btVector3(0, 0, 0);
                d || e.calculateLocalInertia(f, p);
                var d = b.getPosition(),
                    k = b.getRotation();
                c.setValue(k.x, k.y, k.z, k.w);
                k = new Ammo.btTransform;
                k.setIdentity();
                k.getOrigin().setValue(d.x, d.y, d.z);
                k.setRotation(c);
                d = new Ammo.btDefaultMotionState(k);
                e = new Ammo.btRigidBodyConstructionInfo(f, d, e, p);
                e = new Ammo.btRigidBody(e);
                e.setRestitution(this.restitution);
                e.setFriction(this.friction);
                e.setDamping(this.linearDamping, this.angularDamping);
                f = this.linearFactor;
                a.setValue(f.x, f.y, f.z);
                e.setLinearFactor(a);
                f = this.angularFactor;
                a.setValue(f.x, f.y, f.z);
                e.setAngularFactor(a);
                e.entity = b;
                this.isKinematic() && (e.setCollisionFlags(e.getCollisionFlags() | pc.BODYFLAG_KINEMATIC_OBJECT), e.setActivationState(pc.BODYSTATE_DISABLE_DEACTIVATION));
                b.rigidbody.body = e;
                this.enabled && this.entity.enabled && this.enableSimulation()
            }
        },
        isActive: function() { return this.body ? this.body.isActive() : !1 },
        activate: function() { this.body && this.body.activate() },
        enableSimulation: function() {
            if (this.entity.collision && this.entity.collision.enabled && !this.data.simulationEnabled) {
                var a = this.body;
                a && (this.system.addBody(a, this.group, this.mask), this.isKinematic() ? (a.forceActivationState(pc.BODYSTATE_DISABLE_DEACTIVATION), a.activate()) : (a.forceActivationState(pc.BODYFLAG_ACTIVE_TAG), this.syncEntityToBody()), this.data.simulationEnabled = !0)
            }
        },
        disableSimulation: function() {
            var a = this.body;
            a && this.data.simulationEnabled && (this.system.removeBody(a), a.forceActivationState(pc.BODYSTATE_DISABLE_SIMULATION), this.data.simulationEnabled = !1)
        },
        applyForce: function() {
            var c, d, f, l, p, k;
            switch (arguments.length) {
                case 1:
                    c = arguments[0].x;
                    d = arguments[0].y;
                    f = arguments[0].z;
                    break;
                case 2:
                    c = arguments[0].x;
                    d = arguments[0].y;
                    f = arguments[0].z;
                    l = arguments[1].x;
                    p = arguments[1].y;
                    k = arguments[1].z;
                    break;
                case 3:
                    c = arguments[0];
                    d = arguments[1];
                    f = arguments[2];
                    break;
                case 6:
                    c = arguments[0], d = arguments[1], f = arguments[2], l = arguments[3], p = arguments[4], k = arguments[5]
            }
            var q = this.body;
            q && (q.activate(), a.setValue(c, d, f), void 0 !== l ? (b.setValue(l, p, k), q.applyForce(a, b)) : q.applyForce(a, e))
        },
        applyTorque: function() {
            var b, c, e;
            switch (arguments.length) {
                case 1:
                    b = arguments[0].x;
                    c = arguments[0].y;
                    e = arguments[0].z;
                    break;
                case 3:
                    b = arguments[0];
                    c = arguments[1];
                    e = arguments[2];
                    break;
                default:
                    console.error("ERROR: applyTorque: function takes 1 or 3 arguments");
                    return
            }
            var d = this.body;
            d && (d.activate(), a.setValue(b, c, e), d.applyTorque(a))
        },
        applyImpulse: function() {
            var c, d, f, l, p, k;
            switch (arguments.length) {
                case 1:
                    c = arguments[0].x;
                    d = arguments[0].y;
                    f = arguments[0].z;
                    break;
                case 2:
                    c = arguments[0].x;
                    d = arguments[0].y;
                    f = arguments[0].z;
                    l = arguments[1].x;
                    p = arguments[1].y;
                    k = arguments[1].z;
                    break;
                case 3:
                    c = arguments[0];
                    d = arguments[1];
                    f = arguments[2];
                    break;
                case 6:
                    c = arguments[0], d = arguments[1], f = arguments[2], l = arguments[0], p = arguments[1], k = arguments[2]
            }
            var q = this.body;
            q && (q.activate(), a.setValue(c, d, f), void 0 !== l ? (b.setValue(l, p, k), q.applyImpulse(a, b)) : q.applyImpulse(a, e))
        },
        applyTorqueImpulse: function() {
            var b, c, e;
            switch (arguments.length) {
                case 1:
                    b = arguments[0].x;
                    c = arguments[0].y;
                    e = arguments[0].z;
                    break;
                case 3:
                    b = arguments[0];
                    c = arguments[1];
                    e = arguments[2];
                    break;
                default:
                    console.error("ERROR: applyTorqueImpulse: function takes 1 or 3 arguments");
                    return
            }
            var d = this.body;
            d && (d.activate(), a.setValue(b, c, e), d.applyTorqueImpulse(a))
        },
        isStatic: function() { return this.type === pc.BODYTYPE_STATIC },
        isStaticOrKinematic: function() { return this.type === pc.BODYTYPE_STATIC || this.type === pc.BODYTYPE_KINEMATIC },
        isKinematic: function() { return this.type === pc.BODYTYPE_KINEMATIC },
        syncEntityToBody: function() {
            var a = this.body;
            if (a) {
                var b = this.entity.getPosition(),
                    e = this.entity.getRotation(),
                    d = a.getWorldTransform();
                d.getOrigin().setValue(b.x, b.y, b.z);
                c.setValue(e.x, e.y, e.z, e.w);
                d.setRotation(c);
                this.isKinematic() && (b = this.body.getMotionState()) && b.setWorldTransform(d);
                a.activate()
            }
        },
        syncBodyToEntity: function() {
            var a = this.body;
            if (a.isActive() && (a = a.getMotionState())) {
                a.getWorldTransform(d);
                var a = d.getOrigin(),
                    b = d.getRotation();
                this.entity.setPosition(a.x(), a.y(), a.z());
                this.entity.setRotation(b.x(), b.y(), b.z(), b.w())
            }
        },
        teleport: function() {
            3 > arguments.length ? (arguments[0] && this.entity.setPosition(arguments[0]), arguments[1] && (arguments[1] instanceof pc.Quat ? this.entity.setRotation(arguments[1]) : this.entity.setEulerAngles(arguments[1]))) : (6 === arguments.length && this.entity.setEulerAngles(arguments[3], arguments[4], arguments[5]), this.entity.setPosition(arguments[0], arguments[1], arguments[2]));
            this.syncEntityToBody()
        },
        _updateKinematic: function(a) {
            this._displacement.copy(this._linearVelocity).scale(a);
            this.entity.translate(this._displacement);
            this._displacement.copy(this._angularVelocity).scale(a);
            this.entity.rotate(this._displacement.x, this._displacement.y, this._displacement.z);
            if (this.body.getMotionState()) {
                a = this.entity.getPosition();
                var b = this.entity.getRotation();
                d.getOrigin().setValue(a.x, a.y, a.z);
                c.setValue(b.x, b.y, b.z, b.w);
                d.setRotation(c);
                this.body.getMotionState().setWorldTransform(d)
            }
        },
        onEnable: function() {
            f._super.onEnable.call(this);
            this.body || this.createBody();
            this.enableSimulation()
        },
        onDisable: function() {
            f._super.onDisable.call(this);
            this.disableSimulation()
        },
        onSetMass: function(a, b, c) {
            if (a = this.data.body) {
                (b = this.enabled && this.entity.enabled) && this.disableSimulation();
                var e = new Ammo.btVector3(0, 0, 0);
                a.getCollisionShape().calculateLocalInertia(c, e);
                a.setMassProps(c, e);
                a.updateInertiaTensor();
                b && this.enableSimulation()
            }
        },
        onSetLinearDamping: function(a, b, c) {
            (a = this.data.body) && a.setDamping(c, this.data.angularDamping)
        },
        onSetAngularDamping: function(a, b, c) {
            (a = this.data.body) && a.setDamping(this.data.linearDamping, c)
        },
        onSetLinearFactor: function(b, c, e) { if (b = this.data.body) a.setValue(e.x, e.y, e.z), b.setLinearFactor(a) },
        onSetAngularFactor: function(b, c, e) { if (b = this.data.body) a.setValue(e.x, e.y, e.z), b.setAngularFactor(a) },
        onSetFriction: function(a, b, c) {
            (a = this.data.body) && a.setFriction(c)
        },
        onSetRestitution: function(a, b, c) {
            (a = this.data.body) && a.setRestitution(c)
        },
        onSetType: function(a, b, c) { c !== b && (this.disableSimulation(), c === pc.BODYTYPE_DYNAMIC ? (this.data.group = pc.BODYGROUP_DYNAMIC, this.data.mask = pc.BODYMASK_ALL) : c === pc.BODYTYPE_KINEMATIC ? (this.data.group = pc.BODYGROUP_KINEMATIC, this.data.mask = pc.BODYMASK_ALL) : (this.data.group = pc.BODYGROUP_STATIC, this.data.mask = pc.BODYMASK_NOT_STATIC), this.createBody()) },
        onSetGroupOrMask: function(a, b, c) { c !== b && this.enabled && this.entity.enabled && (this.disableSimulation(), this.enableSimulation()) },
        onSetBody: function(a, b, c) { this.body && this.data.simulationEnabled && this.body.activate() }
    });
    return { RigidBodyComponent: f }
}());
pc.extend(pc, function() {
    return {
        RigidBodyComponentData: pc.inherits(function() {
            this.enabled = !0;
            this.mass = 1;
            this.angularDamping = this.linearDamping = 0;
            this.linearFactor = new pc.Vec3(1, 1, 1);
            this.angularFactor = new pc.Vec3(1, 1, 1);
            this.friction = .5;
            this.restitution = 0;
            this.type = pc.BODYTYPE_STATIC;
            this.group = pc.BODYGROUP_STATIC;
            this.mask = pc.BODYMASK_NOT_STATIC;
            this.body = null;
            this.simulationEnabled = !1
        }, pc.ComponentData)
    }
}());
pc.extend(pc, function() {
    var d, a, b = function(b, e, f) {
        this.entity = e.entity;
        this.component = e;
        this.app = b;
        "undefined" !== typeof Ammo && (d = new Ammo.btVector3, a = new Ammo.btQuaternion);
        this.initialize(f)
    };
    b.prototype = {
        initialize: function(b) {
            var e = this.entity;
            if ((b = b.shape) && "undefined" !== typeof Ammo) {
                e.trigger && e.trigger.destroy();
                var f = new Ammo.btVector3(0, 0, 0);
                b.calculateLocalInertia(1, f);
                var g = e.getPosition(),
                    h = e.getRotation();
                a.setValue(h.x, h.y, h.z, h.w);
                h = new Ammo.btTransform;
                h.setIdentity();
                h.getOrigin().setValue(g.x, g.y, g.z);
                h.setRotation(a);
                g = new Ammo.btDefaultMotionState(h);
                b = new Ammo.btRigidBodyConstructionInfo(1, g, b, f);
                this.body = b = new Ammo.btRigidBody(b);
                b.setRestitution(0);
                b.setFriction(0);
                b.setDamping(0, 0);
                d.setValue(0, 0, 0);
                b.setLinearFactor(d);
                b.setAngularFactor(d);
                b.setCollisionFlags(b.getCollisionFlags() | pc.BODYFLAG_NORESPONSE_OBJECT);
                b.entity = e;
                this.component.enabled && e.enabled && this.enable()
            }
        },
        destroy: function() { this.body && this.app.systems.rigidbody.removeBody(this.body) },
        syncEntityToBody: function() {
            var b = this.body;
            if (b) {
                var e = this.entity.getPosition(),
                    d = this.entity.getRotation(),
                    g = b.getWorldTransform();
                g.getOrigin().setValue(e.x, e.y, e.z);
                a.setValue(d.x, d.y, d.z, d.w);
                g.setRotation(a);
                b.activate()
            }
        },
        enable: function() {
            var a = this.body;
            a && (this.app.systems.rigidbody.addBody(a, pc.BODYGROUP_TRIGGER, pc.BODYMASK_NOT_STATIC ^ pc.BODYGROUP_TRIGGER), a.forceActivationState(pc.BODYSTATE_ACTIVE_TAG), a.activate(), this.syncEntityToBody())
        },
        disable: function() {
            var a = this.body;
            a && (this.app.systems.rigidbody.removeBody(a), a.forceActivationState(pc.BODYSTATE_DISABLE_SIMULATION))
        }
    };
    return { Trigger: b }
}());
pc.extend(pc, function() {
    var d = function(a) {
            this.id = "collision";
            this.description = "Specifies a collision volume.";
            a.systems.add(this.id, this);
            this.ComponentType = pc.CollisionComponent;
            this.DataType = pc.CollisionComponentData;
            this.schema = "enabled type halfExtents radius axis height asset shape model".split(" ");
            this.implementations = {};
            this.on("remove", this.onRemove, this);
            pc.ComponentSystem.on("update", this.onUpdate, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    d.prototype = pc.extend(d.prototype, {
        onLibraryLoaded: function() { "undefined" === typeof Ammo && pc.ComponentSystem.off("update", this.onUpdate, this) },
        initializeComponentData: function(a, b, c) {
            var e = {};
            c = "type halfExtents radius axis height shape model asset enabled".split(" ");
            c.forEach(function(a) { e[a] = b[a] });
            if (b.hasOwnProperty("asset")) { var f = c.indexOf("model"); - 1 !== f && c.splice(f, 1) } else b.hasOwnProperty("model") && (f = c.indexOf("asset"), -1 !== f && c.splice(f, 1));
            e.type || (e.type = a.data.type);
            a.data.type = e.type;
            e.halfExtents && "array" === pc.type(e.halfExtents) && (e.halfExtents = new pc.Vec3(e.halfExtents[0], e.halfExtents[1], e.halfExtents[2]));
            f = this._createImplementation(e.type);
            f.beforeInitialize(a, e);
            d._super.initializeComponentData.call(this.system, a, e, c);
            f.afterInitialize(a, e)
        },
        _createImplementation: function(a) {
            if (void 0 === this.implementations[a]) {
                var d;
                switch (a) {
                    case "box":
                        d = new b(this);
                        break;
                    case "sphere":
                        d = new c(this);
                        break;
                    case "capsule":
                        d = new e(this);
                        break;
                    case "cylinder":
                        d = new f(this);
                        break;
                    case "mesh":
                        d = new g(this);
                        break;
                    default:
                        throw "Invalid collision system type: " + a;
                }
                this.implementations[a] = d
            }
            return this.implementations[a]
        },
        _getImplementation: function(a) { return this.implementations[a.collision.data.type] },
        cloneComponent: function(a, b) { return this._getImplementation(a).clone(a, b) },
        onRemove: function(a, b) { this.implementations[b.type].remove(a, b) },
        onUpdate: function(a) { var b, c, e = this.store; for (b in e) a = e[b].entity, c = e[b].data, c.enabled && a.enabled && !a.rigidbody && a.trigger && a.trigger.syncEntityToBody() },
        onTransformChanged: function(a, b, c, e) { this.implementations[a.data.type].updateTransform(a, b, c, e) },
        changeType: function(a, b, c) {
            this.implementations[b].remove(a.entity, a.data);
            this._createImplementation(c).reset(a, a.data)
        },
        recreatePhysicalShapes: function(a) { this.implementations[a.data.type].recreatePhysicalShapes(a) }
    });
    var a = function(a) { this.system = a };
    a.prototype = {
        beforeInitialize: function(a, b) {
            b.shape = this.createPhysicalShape(a.entity, b);
            b.model = new pc.Model;
            b.model.graph = new pc.GraphNode
        },
        afterInitialize: function(a, b) {
            this.recreatePhysicalShapes(a);
            a.data.initialized = !0
        },
        reset: function(a, b) {
            this.beforeInitialize(a, b);
            this.afterInitialize(a, b)
        },
        recreatePhysicalShapes: function(a) {
            var b = a.entity,
                c = a.data;
            "undefined" !== typeof Ammo && (c.shape = this.createPhysicalShape(a.entity, c), b.rigidbody ? (b.rigidbody.disableSimulation(), b.rigidbody.createBody()) : b.trigger ? b.trigger.initialize(c) : b.trigger = new pc.Trigger(this.system.app, a, c))
        },
        createPhysicalShape: function(a, b) {},
        updateTransform: function(a, b, c, e) { a.entity.trigger && a.entity.trigger.syncEntityToBody() },
        remove: function(a, b) {
            var c = this.system.app;
            a.rigidbody && a.rigidbody.body && (c.systems.rigidbody.removeBody(a.rigidbody.body), a.rigidbody.disableSimulation());
            a.trigger && (a.trigger.destroy(), delete a.trigger);
            c.scene.containsModel(b.model) && (c.root.removeChild(b.model.graph), c.scene.removeModel(b.model))
        },
        clone: function(a, b) { var c = this.system.dataStore[a._guid]; return this.system.addComponent(b, { enabled: c.data.enabled, type: c.data.type, halfExtents: [c.data.halfExtents.x, c.data.halfExtents.y, c.data.halfExtents.z], radius: c.data.radius, axis: c.data.axis, height: c.data.height, asset: c.data.asset, model: c.data.model }) }
    };
    var b = function(a) {},
        b = pc.inherits(b, a);
    b.prototype = pc.extend(b.prototype, {
        createPhysicalShape: function(a, b) {
            if ("undefined" !== typeof Ammo) {
                var c = b.halfExtents,
                    c = new Ammo.btVector3(c.x, c.y, c.z);
                return new Ammo.btBoxShape(c)
            }
        }
    });
    var c = function(a) {},
        c = pc.inherits(c, a);
    c.prototype = pc.extend(c.prototype, { createPhysicalShape: function(a, b) { if ("undefined" !== typeof Ammo) return new Ammo.btSphereShape(b.radius) } });
    var e = function(a) {},
        e = pc.inherits(e, a);
    e.prototype = pc.extend(e.prototype, {
        createPhysicalShape: function(a, b) {
            var c = null,
                e = void 0 !== b.axis ? b.axis : 1,
                d = b.radius || .5,
                f = Math.max((b.height || 2) - 2 * d, 0);
            if ("undefined" !== typeof Ammo) switch (e) {
                case 0:
                    c = new Ammo.btCapsuleShapeX(d, f);
                    break;
                case 1:
                    c = new Ammo.btCapsuleShape(d, f);
                    break;
                case 2:
                    c = new Ammo.btCapsuleShapeZ(d, f)
            }
            return c
        }
    });
    var f = function(a) {},
        f = pc.inherits(f, a);
    f.prototype = pc.extend(f.prototype, {
        createPhysicalShape: function(a, b) {
            var c;
            c = null;
            var e = void 0 !== b.axis ? b.axis : 1,
                d = void 0 !== b.radius ? b.radius : .5,
                f = void 0 !== b.height ? b.height : 1;
            if ("undefined" !== typeof Ammo) switch (e) {
                case 0:
                    c = new Ammo.btVector3(.5 * f, d, d);
                    c = new Ammo.btCylinderShapeX(c);
                    break;
                case 1:
                    c = new Ammo.btVector3(d, .5 * f, d);
                    c = new Ammo.btCylinderShape(c);
                    break;
                case 2:
                    c = new Ammo.btVector3(d, d, .5 * f), c = new Ammo.btCylinderShapeZ(c)
            }
            return c
        }
    });
    var g = function(a) {},
        g = pc.inherits(g, a);
    g.prototype = pc.extend(g.prototype, {
        beforeInitialize: function(a, b) {},
        createPhysicalShape: function(a, b) {
            if ("undefined" !== typeof Ammo && b.model) {
                var c = b.model,
                    e = new Ammo.btCompoundShape,
                    d, f;
                for (d = 0; d < c.meshInstances.length; d++) {
                    var g = c.meshInstances[d],
                        n = g.mesh,
                        t = n.indexBuffer[pc.RENDERSTYLE_SOLID],
                        w = n.vertexBuffer,
                        y = w.getFormat(),
                        x = y.size / 4,
                        v;
                    for (f = 0; f < y.elements.length; f++) {
                        var z = y.elements[f];
                        z.name === pc.SEMANTIC_POSITION && (v = new Float32Array(w.lock(), z.offset))
                    }
                    var t = new Uint16Array(t.lock()),
                        w = n.primitive[0].count / 3,
                        y = new Ammo.btVector3,
                        z = new Ammo.btVector3,
                        u = new Ammo.btVector3,
                        A, B, C = n.primitive[0].base,
                        E = new Ammo.btTriangleMesh;
                    for (f = 0; f < w; f++) n = t[C + 3 * f] * x, A = t[C + 3 * f + 1] * x, B = t[C + 3 * f + 2] * x, y.setValue(v[n], v[n + 1], v[n + 2]), z.setValue(v[A], v[A + 1], v[A + 2]), u.setValue(v[B], v[B + 1], v[B + 2]), E.addTriangle(y, z, u, !0);
                    f = new Ammo.btBvhTriangleMeshShape(E, !0);
                    x = g.node.getWorldTransform().getScale();
                    f.setLocalScaling(new Ammo.btVector3(x.x, x.y, x.z));
                    x = g.node.getPosition();
                    g = g.node.getRotation();
                    t = new Ammo.btTransform;
                    t.setIdentity();
                    t.getOrigin().setValue(x.x, x.y, x.z);
                    x = new Ammo.btQuaternion;
                    x.setValue(g.x, g.y, g.z, g.w);
                    t.setRotation(x);
                    e.addChildShape(t, f)
                }
                c = a.getWorldTransform().getScale();
                d = new Ammo.btVector3;
                d.setValue(c.x, c.y, c.z);
                e.setLocalScaling(d);
                return e
            }
        },
        recreatePhysicalShapes: function(a) { null !== a.data.asset && a.enabled && a.entity.enabled ? this.loadModelAsset(a) : this.doRecreatePhysicalShape(a) },
        loadModelAsset: function(a) {
            var b = this,
                c = a.data.asset,
                e = a.data,
                d = this.system.app.assets,
                f = d.get(c);
            if (f) f.ready(function(c) {
                e.model = c.resource;
                b.doRecreatePhysicalShape(a)
            }), d.load(f);
            else d.once("add:" + c, function(c) {
                c.ready(function(c) {
                    e.model = c.resource;
                    b.doRecreatePhysicalShape(a)
                });
                d.load(c)
            })
        },
        doRecreatePhysicalShape: function(a) {
            var b = a.entity,
                c = a.data;
            c.model ? (c.shape && Ammo.destroy(c.shape), c.shape = this.createPhysicalShape(b, c), b.rigidbody ? b.rigidbody.createBody() : b.trigger ? b.trigger.initialize(c) : b.trigger = new pc.Trigger(this.system.app, a, c)) : this.remove(b, c)
        },
        updateTransform: function(a, b, c, e) {
            if (a.shape) {
                var d = a.entity.getWorldTransform().getScale(),
                    f = a.shape.getLocalScaling();
                d.x === f.x() && d.y === f.y() && d.z === f.z() || this.doRecreatePhysicalShape(a)
            }
            g._super.updateTransform.call(this, a, b, c, e)
        }
    });
    return { CollisionComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = function(a, b) {
            this.on("set_type", this.onSetType, this);
            this.on("set_halfExtents", this.onSetHalfExtents, this);
            this.on("set_radius", this.onSetRadius, this);
            this.on("set_height", this.onSetHeight, this);
            this.on("set_axis", this.onSetAxis, this);
            this.on("set_asset", this.onSetAsset, this);
            this.on("set_model", this.onSetModel, this)
        },
        d = pc.inherits(d, pc.Component);
    pc.extend(d.prototype, {
        onSetType: function(a, b, c) { b !== c && this.system.changeType(this, b, c) },
        onSetHalfExtents: function(a, b, c) { this.data.initialized && "box" === this.data.type && this.system.recreatePhysicalShapes(this) },
        onSetRadius: function(a, b, c) {!this.data.initialized || "sphere" !== this.data.type && "capsule" !== this.data.type && "cylinder" !== this.data.type || this.system.recreatePhysicalShapes(this) },
        onSetHeight: function(a, b, c) {!this.data.initialized || "capsule" !== this.data.type && "cylinder" !== this.data.type || this.system.recreatePhysicalShapes(this) },
        onSetAxis: function(a, b, c) {!this.data.initialized || "capsule" !== this.data.type && "cylinder" !== this.data.type || this.system.recreatePhysicalShapes(this) },
        onSetAsset: function(a, b, c) {
            a = this.system.app.assets;
            b && (b = a.get(b)) && b.off("remove", this.onAssetRemoved, this);
            c && (c instanceof pc.Asset && (this.data.asset = c.id), b = a.get(this.data.asset)) && (b.off("remove", this.onAssetRemoved, this), b.on("remove", this.onAssetRemoved, this));
            this.data.initialized && "mesh" === this.data.type && (c || (this.data.model = null), this.system.recreatePhysicalShapes(this))
        },
        onSetModel: function(a, b, c) { this.data.initialized && "mesh" === this.data.type && this.system.implementations.mesh.doRecreatePhysicalShape(this) },
        onAssetRemoved: function(a) {
            a.off("remove", this.onAssetRemoved, this);
            this.data.asset === a.id && (this.asset = null)
        },
        onEnable: function() { d._super.onEnable.call(this); if ("mesh" === this.data.type && this.data.asset && this.data.initialized) { var a = this.system.app.assets.get(this.data.asset); if (a && (!a.resource || !this.data.shape)) { this.system.recreatePhysicalShapes(this); return } } this.entity.trigger ? this.entity.trigger.enable() : this.entity.rigidbody && this.entity.rigidbody.enabled && this.entity.rigidbody.enableSimulation() },
        onDisable: function() {
            d._super.onDisable.call(this);
            this.entity.trigger ? this.entity.trigger.disable() : this.entity.rigidbody && this.entity.rigidbody.disableSimulation()
        }
    });
    return { CollisionComponent: d }
}());
pc.extend(pc, function() {
    return {
        CollisionComponentData: pc.inherits(function() {
            this.enabled = !0;
            this.type = "box";
            this.halfExtents = new pc.Vec3(.5, .5, .5);
            this.radius = .5;
            this.axis = 1;
            this.height = 2;
            this.model = this.shape = this.asset = null;
            this.initialized = !1
        }, pc.ComponentData)
    }
}());
pc.extend(pc, function() {
    var d = function(a) {
            this.id = "particlesystem";
            this.description = "Updates and renders particle system in the scene.";
            a.systems.add(this.id, this);
            this.ComponentType = pc.ParticleSystemComponent;
            this.DataType = pc.ParticleSystemComponentData;
            this.schema = "enabled autoPlay numParticles lifetime rate rate2 startAngle startAngle2 loop preWarm lighting halfLambert intensity depthWrite noFog depthSoftening sort blendType stretch alignToMotion emitterShape emitterExtents emitterRadius initialVelocity wrap wrapBounds colorMapAsset normalMapAsset mesh localVelocityGraph localVelocityGraph2 velocityGraph velocityGraph2 rotationSpeedGraph rotationSpeedGraph2 scaleGraph scaleGraph2 colorGraph colorGraph2 alphaGraph alphaGraph2 colorMap normalMap animTilesX animTilesY animNumFrames animSpeed animLoop".split(" ");
            this.propertyTypes = { emitterExtents: "vec3", wrapBounds: "vec3", localVelocityGraph: "curveset", localVelocityGraph2: "curveset", velocityGraph: "curveset", velocityGraph2: "curveset", colorGraph: "curveset", colorGraph2: "curveset", alphaGraph: "curve", alphaGraph2: "curve", rotationSpeedGraph: "curve", rotationSpeedGraph2: "curve", scaleGraph: "curve", scaleGraph2: "curve" };
            this.on("remove", this.onRemove, this);
            pc.ComponentSystem.on("update", this.onUpdate, this)
        },
        d = pc.inherits(d, pc.ComponentSystem);
    pc.extend(d.prototype, {
        initializeComponentData: function(a, b, c) {
            var e = {};
            c = [];
            var f = this.propertyTypes,
                g, h;
            for (h in b) b.hasOwnProperty(h) && (c.push(h), e[h] = b[h]), "vec3" === f[h] ? "array" === pc.type(e[h]) && (e[h] = new pc.Vec3(e[h][0], e[h][1], e[h][2])) : "curve" === f[h] ? e[h] instanceof pc.Curve || (g = e[h].type, e[h] = new pc.Curve(e[h].keys), e[h].type = g) : "curveset" !== f[h] || e[h] instanceof pc.CurveSet || (g = e[h].type, e[h] = new pc.CurveSet(e[h].keys), e[h].type = g);
            d._super.initializeComponentData.call(this, a, e, c)
        },
        cloneComponent: function(a, b) {
            for (var c = a.particlesystem.data, e = this.schema, d = {}, g = 0, h = e.length; g < h; g++) {
                var m = e[g],
                    l = c[m];
                l instanceof pc.Vec3 || l instanceof pc.Curve || l instanceof pc.CurveSet ? (l = l.clone(), d[m] = l) : null !== l && void 0 !== l && (d[m] = l)
            }
            return this.addComponent(b, d)
        },
        onUpdate: function(a) {
            var b = this.store,
                c, e, d = this.app.stats.particles,
                g;
            for (g in b)
                if (b.hasOwnProperty(g)) {
                    c = b[g];
                    var h = c.entity;
                    c = c.data;
                    if (c.enabled && h.enabled && (h = c.model.emitter, h.meshInstance.visible && !c.paused)) {
                        h.simTime += a;
                        c = 0;
                        h.simTime > h.fixedTimeStep && (c = Math.floor(h.simTime / h.fixedTimeStep), h.simTime -= c * h.fixedTimeStep);
                        if (c) {
                            c = Math.min(c, h.maxSubSteps);
                            for (e = 0; e < c; e++) h.addTime(h.fixedTimeStep);
                            d._updatesPerFrame += c;
                            d._frameTime += h._addTimeTime;
                            h._addTimeTime = 0
                        }
                        h.finishFrame()
                    }
                }
        },
        onRemove: function(a, b) { b.model && (this.app.scene.removeModel(b.model), a.removeChild(b.model.getGraph()), b.model = null) }
    });
    return { ParticleSystemComponentSystem: d }
}());
pc.extend(pc, function() {
    var d = "emitterExtents emitterRadius loop initialVelocity animSpeed normalMap".split(" "),
        a = "numParticles lifetime rate rate2 startAngle startAngle2 lighting halfLambert intensity wrap wrapBounds depthWrite noFog sort stretch alignToMotion preWarm emitterShape animTilesX animTilesY animFrames animLoop colorMap".split(" "),
        b = "scaleGraph scaleGraph2 colorGraph colorGraph2 alphaGraph alphaGraph2 velocityGraph velocityGraph2 localVelocityGraph localVelocityGraph2 rotationSpeedGraph rotationSpeedGraph2".split(" "),
        c = ["colorMapAsset", "normalMapAsset", "mesh"],
        e = function(c, e) {
            this.on("set_colorMapAsset", this.onSetColorMapAsset, this);
            this.on("set_normalMapAsset", this.onSetNormalMapAsset, this);
            this.on("set_mesh", this.onSetMesh, this);
            this.on("set_loop", this.onSetLoop, this);
            this.on("set_blendType", this.onSetBlendType, this);
            this.on("set_depthSoftening", this.onSetDepthSoftening, this);
            d.forEach(function(a) { this.on("set_" + a, this.onSetSimpleProperty, this) }.bind(this));
            a.forEach(function(a) { this.on("set_" + a, this.onSetComplexProperty, this) }.bind(this));
            b.forEach(function(a) { this.on("set_" + a, this.onSetGraphProperty, this) }.bind(this))
        },
        e = pc.inherits(e, pc.Component);
    pc.extend(e.prototype, {
        onSetColorMapAsset: function(a, b, c) {
            var e = this,
                d = this.system.app.assets;
            b && (a = d.get(b)) && a.off("remove", this.onColorMapRemoved, this);
            if (c)
                if (c instanceof pc.Asset && (c = this.data.colorMapAsset = c.id), a = d.get(c)) a.on("remove", this.onColorMapRemoved, this), a.ready(function(a) { e.colorMap = a.resource }), e.enabled && e.entity.enabled && d.load(a);
                else d.once("add:" +
                    c,
                    function(a) {
                        a.on("remove", this.onColorMapRemoved, this);
                        a.ready(function(a) { e.colorMap = a.resource });
                        e.enabled && e.entity.enabled && d.load(a)
                    });
            else this.colorMap = null
        },
        onColorMapRemoved: function(a) {
            a.off("remove", this.onColorMapRemoved, this);
            this.colorMapAsset = null
        },
        onSetNormalMapAsset: function(a, b, c) {
            var e = this,
                d = this.system.app.assets;
            b && (a = d.get(b)) && a.off("remove", this.onNormalMapRemoved, this);
            if (c)
                if (c instanceof pc.Asset && (c = this.data.normalMapAsset = c.id), a = d.get(c)) a.on("remove", this.onNormalMapRemoved, this), a.ready(function(a) { e.normalMap = a.resource }), e.enabled && e.entity.enabled && d.load(a);
                else d.once("add:" + c, function(a) {
                    a.on("remove", this.onNormalMapRemoved, this);
                    a.ready(function(a) { e.normalMap = a.resource });
                    e.enabled && e.entity.enabled && d.load(a)
                });
            else this.normalMap = null
        },
        onNormalMapRemoved: function(a) {
            a.off("remove", this.onNormalMapRemoved, this);
            this.normalMapAsset = null
        },
        onSetMesh: function(a, b, c) {
            var e = this,
                d = this.system.app.assets;
            b && "number" === typeof b && (a = d.get(b)) && a.off("remove", this.onMeshRemoved, this);
            if (c)
                if (c instanceof pc.Asset && (c = this.data.mesh = c.id), "number" === typeof c)
                    if (a = d.get(c)) a.on("remove", this.onMeshRemoved, this), a.ready(function(a) { e._onMeshChanged(a.resource) }), e.enabled && e.entity.enabled && d.load(a);
                    else d.once("add:" + c, function(a) {
                        a.on("remove", this.onMeshRemoved, this);
                        a.ready(function(a) { e._onMeshChanged(a.resource) });
                        e.enabled && e.entity.enabled && d.load(a)
                    });
            else this._onMeshChanged(c);
            else this._onMeshChanged(null)
        },
        _onMeshChanged: function(a) {
            !a || a instanceof pc.Mesh || (a = a.meshInstances[0] ? a.meshInstances[0].mesh : null);
            this.data.mesh = a;
            this.emitter && (this.emitter.mesh = a, this.emitter.resetMaterial(), this.rebuild())
        },
        onMeshRemoved: function(a) {
            a.off("remove", this.onMeshRemoved, this);
            this.mesh = null
        },
        onSetLoop: function(a, b, c) { this.emitter && (this.emitter[a] = c, this.emitter.resetTime()) },
        onSetBlendType: function(a, b, c) { this.emitter && (this.emitter[a] = c, this.emitter.material.blendType = c, this.emitter.resetMaterial(), this.rebuild()) },
        onSetDepthSoftening: function(a, b, c) {
            if (this.emitter && b !== c) {
                if (c) { if (this.emitter[a] = c, this.enabled) this.emitter.onEnableDepth() } else {
                    if (this.enabled) this.emitter.onDisableDepth();
                    this.emitter[a] = c
                }
                this.reset();
                this.emitter.resetMaterial();
                this.rebuild()
            }
        },
        onSetSimpleProperty: function(a, b, c) { this.emitter && (this.emitter[a] = c, this.emitter.resetMaterial()) },
        onSetComplexProperty: function(a, b, c) { this.emitter && (this.emitter[a] = c, this.reset(), this.emitter.resetMaterial(), this.rebuild()) },
        onSetGraphProperty: function(a, b, c) { this.emitter && (this.emitter[a] = c, this.emitter.rebuildGraphs(), this.emitter.resetMaterial()) },
        onEnable: function() {
            for (var a = 0, b = c.length; a < b; a++) {
                var d = this.data[c[a]];
                if (d) {
                    if (!(d instanceof pc.Asset))
                        if (0 <= parseInt(d, 10)) d = this.system.app.assets.get(d);
                        else continue;
                    d && !d.resource && this.system.app.assets.load(d)
                }
            }
            a = !1;
            this.emitter || this.system._inTools || (b = this.data.mesh, b instanceof pc.Mesh || (b = null), a = !0, this.emitter = new pc.ParticleEmitter(this.system.app.graphicsDevice, { numParticles: this.data.numParticles, emitterExtents: this.data.emitterExtents, emitterRadius: this.data.emitterRadius, emitterShape: this.data.emitterShape, initialVelocity: this.data.initialVelocity, wrap: this.data.wrap, wrapBounds: this.data.wrapBounds, lifetime: this.data.lifetime, rate: this.data.rate, rate2: this.data.rate2, animTilesX: this.data.animTilesX, animTilesY: this.data.animTilesY, animNumFrames: this.data.animNumFrames, animSpeed: this.data.animSpeed, animLoop: this.data.animLoop, startAngle: this.data.startAngle, startAngle2: this.data.startAngle2, scaleGraph: this.data.scaleGraph, scaleGraph2: this.data.scaleGraph2, colorGraph: this.data.colorGraph, colorGraph2: this.data.colorGraph2, alphaGraph: this.data.alphaGraph, alphaGraph2: this.data.alphaGraph2, localVelocityGraph: this.data.localVelocityGraph, localVelocityGraph2: this.data.localVelocityGraph2, velocityGraph: this.data.velocityGraph, velocityGraph2: this.data.velocityGraph2, rotationSpeedGraph: this.data.rotationSpeedGraph, rotationSpeedGraph2: this.data.rotationSpeedGraph2, colorMap: this.data.colorMap, normalMap: this.data.normalMap, loop: this.data.loop, preWarm: this.data.preWarm, sort: this.data.sort, stretch: this.data.stretch, alignToMotion: this.data.alignToMotion, lighting: this.data.lighting, halfLambert: this.data.halfLambert, intensity: this.data.intensity, depthSoftening: this.data.depthSoftening, scene: this.system.app.scene, mesh: b, depthWrite: this.data.depthWrite, noFog: this.data.noFog, node: this.entity, blendType: this.data.blendType }), this.emitter.meshInstance.node = this.entity, this.psys = new pc.Model, this.psys.graph = this.entity, this.psys.emitter = this.emitter, this.psys.meshInstances = [this.emitter.meshInstance], this.data.model = this.psys, this.emitter.psys = this.psys, this.data.autoPlay || (this.pause(), this.emitter.meshInstance.visible = !1));
            if (this.data.model && !this.system.app.scene.containsModel(this.data.model) && this.emitter.colorMap && (this.system.app.scene.addModel(this.data.model), !a)) this.emitter.onEnableDepth();
            e._super.onEnable.call(this)
        },
        onDisable: function() {
            e._super.onDisable.call(this);
            this.data.model && this.system.app.scene.containsModel(this.data.model) && (this.system.app.scene.removeModel(this.data.model), this.emitter.onDisableDepth())
        },
        reset: function() { this.emitter && this.emitter.reset() },
        stop: function() { this.emitter && (this.emitter.loop = !1, this.emitter.resetTime(), this.emitter.addTime(0, !0)) },
        pause: function() { this.data.paused = !0 },
        unpause: function() { this.data.paused = !1 },
        play: function() {
            this.data.paused = !1;
            this.emitter && (this.emitter.meshInstance.visible = !0, this.emitter.loop = this.data.loop, this.emitter.resetTime())
        },
        isPlaying: function() { return this.data.paused ? !1 : this.emitter && this.emitter.loop ? !0 : Date.now() <= this.emitter.endTime },
        rebuild: function() {
            var a = this.enabled;
            this.enabled = !1;
            this.emitter && (this.emitter.rebuild(), this.emitter.meshInstance.node = this.entity, this.data.model.meshInstances = [this.emitter.meshInstance]);
            this.enabled = a
        }
    });
    return { ParticleSystemComponent: e }
}());
pc.extend(pc, function() {
    return {
        ParticleSystemComponentData: pc.inherits(function() {
            this.rate = this.numParticles = 1;
            this.rate2 = null;
            this.startAngle = 0;
            this.startAngle2 = null;
            this.lifetime = 50;
            this.emitterExtents = new pc.Vec3;
            this.emitterRadius = 0;
            this.emitterShape = pc.EMITTERSHAPE_BOX;
            this.initialVelocity = 0;
            this.wrapBounds = new pc.Vec3;
            this.normalMapAsset = this.normalMap = this.colorMapAsset = this.colorMap = null;
            this.loop = !0;
            this.preWarm = !1;
            this.sort = 0;
            this.mode = pc.PARTICLEMODE_GPU;
            this.scene = null;
            this.halfLambert = this.lighting = !1;
            this.intensity = 1;
            this.stretch = 0;
            this.alignToMotion = !1;
            this.depthSoftening = 0;
            this.mesh = null;
            this.noFog = this.depthWrite = !1;
            this.animSpeed = this.animNumFrames = this.animTilesY = this.animTilesX = 1;
            this.animLoop = !0;
            this.rotationSpeedGraph2 = this.rotationSpeedGraph = this.velocityGraph2 = this.velocityGraph = this.localVelocityGraph2 = this.localVelocityGraph = this.alphaGraph2 = this.alphaGraph = this.colorGraph2 = this.colorGraph = this.scaleGraph2 = this.scaleGraph = null;
            this.blendType = pc.BLEND_NORMAL;
            this.model = null;
            this.enabled = !0;
            this.paused = !1;
            this.autoPlay = !0
        }, pc.ComponentData)
    }
}());
pc.extend(pc, function() {
    var d = function(a) {
            this._guid = pc.guid.create();
            this._batchHandle = null;
            this.c = {};
            this._app = a;
            a || (this._app = pc.Application.getApplication()) || console.error("Couldn't find current application");
            pc.events.attach(this)
        },
        d = pc.inherits(d, pc.GraphNode);
    d.prototype.addComponent = function(a, b) {
        var c = this._app.systems[a];
        if (c)
            if (this.c[a]) logERROR(pc.string.format("Entity already has {0} Component", a));
            else return c.addComponent(this, b);
        else return logERROR(pc.string.format("System: '{0}' doesn't exist", a)), null
    };
    d.prototype.removeComponent = function(a) {
        var b = this._app.systems[a];
        b ? this.c[a] ? b.removeComponent(this) : logERROR(pc.string.format("Entity doesn't have {0} Component", a)) : logERROR(pc.string.format("System: '{0}' doesn't exist", a))
    };
    d.prototype.getGuid = function() { return this._guid };
    d.prototype.setGuid = function(a) { this._guid = a };
    d.prototype._notifyHierarchyStateChanged = function(a, b) {
        var c = !1;
        a === this && 0 === this._app._enableList.length && (c = !0);
        a._onHierarchyStateChanged(b);
        a._onHierarchyStatePostChanged && this._app._enableList.push(a);
        var e, d, g = a._children;
        e = 0;
        for (d = g.length; e < d; e++) g[e]._enabled && this._notifyHierarchyStateChanged(g[e], b);
        if (c) {
            e = 0;
            for (d = this._app._enableList.length; e < d; e++) this._app._enableList[e]._onHierarchyStatePostChanged();
            this._app._enableList.length = 0
        }
    };
    d.prototype._onHierarchyStateChanged = function(a) {
        pc.Entity._super._onHierarchyStateChanged.call(this, a);
        var b, c = this.c,
            e;
        for (e in c)
            if (c.hasOwnProperty(e) && (b = c[e], b.enabled))
                if (a) b.onEnable();
                else b.onDisable()
    };
    d.prototype._onHierarchyStatePostChanged = function() {
        var a = this.c,
            b;
        for (b in a)
            if (a.hasOwnProperty(b)) a[b].onPostStateChange()
    };
    d.prototype.setRequest = function(a) { this._request = a };
    d.prototype.getRequest = function() { return this._request };
    d.prototype.addChild = function(a) {
        if (a instanceof pc.Entity && this.getRoot().findOne("getGuid", a._guid)) throw Error("GUID already exists in graph");
        pc.GraphNode.prototype.addChild.call(this, a)
    };
    d.prototype.findByGuid = function(a) {
        if (this._guid === a) return this;
        for (var b = 0; b < this._children.length; b++)
            if (this._children[b].findByGuid) { var c = this._children[b].findByGuid(a); if (null !== c) return c } return null
    };
    d.prototype.destroy = function() {
        var a = this.getParent(),
            b;
        for (b in this.c) this.c[b].enabled = !1;
        for (b in this.c) this.c[b].system.removeComponent(this);
        a && a.removeChild(this);
        a = this.getChildren();
        for (b = a.shift(); b;) b instanceof pc.Entity && b.destroy(), b = a.shift()
    };
    d.prototype.clone = function() {
        var a, b = new pc.Entity(this._app);
        pc.Entity._super._cloneInternal.call(this, b);
        for (a in this.c) this.c[a].system.cloneComponent(this, b);
        for (a = 0; a < this.getChildren().length; a++) {
            var c = this.getChildren()[a];
            c instanceof pc.Entity && b.addChild(c.clone())
        }
        return b
    };
    d.deserialize = function(a) {
        var b = pc.json.parse(a.template),
            c = pc.json.parse(a.parent),
            e = pc.json.parse(a.children),
            d = pc.json.parse(a.transform),
            g = pc.json.parse(a.components),
            h = pc.json.parse(a.labels);
        return { _id: a._id, resource_id: a.resource_id, _rev: a._rev, name: a.name, enabled: a.enabled, labels: h, template: b, parent: c, children: e, transform: d, components: g }
    };
    d.serialize = function(a) {
        var b = { _id: a._id, resource_id: a.resource_id, name: a.name, enabled: a.enabled, labels: pc.json.stringify(a.labels), template: pc.json.stringify(a.template), parent: pc.json.stringify(a.parent), children: pc.json.stringify(a.children), transform: pc.json.stringify(a.transform), components: pc.json.stringify(a.components) };
        a._rev && (b._rev = a._rev);
        return b
    };
    return { Entity: d }
}());
pc.extend(pc, function() {
    var d = function() {
        this._handlers = {};
        this._requests = {};
        this._cache = {}
    };
    d.prototype = {
        addHandler: function(a, b) {
            this._handlers[a] = b;
            b._loader = this
        },
        removeHandler: function(a) { delete this._handlers[a] },
        getHandler: function(a) { return this._handlers[a] },
        load: function(a, b, c) {
            var e = this._handlers[b];
            if (e) {
                var d = a + b;
                void 0 !== this._cache[d] ? c(null, this._cache[d]) : this._requests[d] ? this._requests[d].push(c) : (this._requests[d] = [c], e.load(a, function(b, c, m) {
                    if (this._requests[d]) {
                        var l = this._requests[d].length;
                        if (b)
                            for (c = 0; c < l; c++) this._requests[d][c](b);
                        else
                            for (b = e.open(a, c), this._cache[d] = b, c = 0; c < l; c++) this._requests[d][c](null, b, m);
                        delete this._requests[d]
                    }
                }.bind(this)))
            } else c("No handler for asset type: " + b)
        },
        open: function(a, b) { var c = this._handlers[a]; return c ? c.open(null, b) : (console.warn("No resource handler found for: " + a), b) },
        patch: function(a, b) {
            var c = this._handlers[a.type];
            c ? c.patch && c.patch(a, b) : console.warn("No resource handler found for: " + a.type)
        },
        clearCache: function(a, b) {
            delete this._cache[a +
                b]
        },
        getFromCache: function(a, b) { if (this._cache[a + b]) return this._cache[a + b] },
        destroy: function() {
            this._handlers = {};
            this._requests = {};
            this._cache = {}
        }
    };
    return { ResourceLoader: d }
}());
pc.extend(pc, function() {
    var d = function() {};
    d.prototype = {
        load: function(a, b) { pc.http.get(a, function(c, e) { c ? b(pc.string.format("Error loading animation resource: {0} [{1}]", a, c)) : b(null, e) }.bind(this)) },
        open: function(a, b) { return this["_parseAnimationV" + b.animation.version](b) },
        _parseAnimationV3: function(a) {
            a = a.animation;
            var b = new pc.Animation;
            b.setName(a.name);
            b.setDuration(a.duration);
            for (var c = 0; c < a.nodes.length; c++) {
                var e = new pc.Node,
                    d = a.nodes[c];
                e._name = d.name;
                for (var g = 0; g < d.keys.length; g++) {
                    var h = d.keys[g],
                        m = h.time,
                        l = h.pos,
                        p = h.rot,
                        h = h.scale,
                        l = new pc.Vec3(l[0], l[1], l[2]),
                        p = (new pc.Quat).setFromEulerAngles(p[0], p[1], p[2]),
                        h = new pc.Vec3(h[0], h[1], h[2]),
                        m = new pc.Key(m, l, p, h);
                    e._keys.push(m)
                }
                b.addNode(e)
            }
            return b
        },
        _parseAnimationV4: function(a) {
            a = a.animation;
            var b = new pc.Animation;
            b.setName(a.name);
            b.setDuration(a.duration);
            for (var c = 0; c < a.nodes.length; c++) {
                var e = new pc.Node,
                    d = a.nodes[c];
                e._name = d.name;
                for (var g = d.defaults.p, h = d.defaults.r, m = d.defaults.s, l = 0; l < d.keys.length; l++) {
                    var p = d.keys[l],
                        k = p.t,
                        q = g ? g : p.p,
                        r = h ? h : p.r,
                        p = m ? m : p.s,
                        q = new pc.Vec3(q[0], q[1], q[2]),
                        r = (new pc.Quat).setFromEulerAngles(r[0], r[1], r[2]),
                        p = new pc.Vec3(p[0], p[1], p[2]),
                        k = new pc.Key(k, q, r, p);
                    e._keys.push(k)
                }
                b.addNode(e)
            }
            return b
        }
    };
    return { AnimationHandler: d }
}());
pc.extend(pc, function() {
    var d = function() {
            var a = window.navigator.userAgent,
                c = a.indexOf("MSIE ");
            return 0 < c ? parseInt(a.substring(c + 5, a.indexOf(".", c)), 10) : 0 < a.indexOf("Trident/") ? (c = a.indexOf("rv:"), parseInt(a.substring(c + 3, a.indexOf(".", c)), 10)) : !1
        }(),
        a = function(a) { this.manager = a; try { this._audio = new Audio } catch (c) {} };
    a.prototype = {
        _isSupported: function(a) {
            var c = { ".ogg": "audio/ogg", ".mp3": "audio/mpeg", ".wav": "audio/x-wav", ".mp4a": "audio/mp4", ".m4a": "audio/mp4", ".mp4": "audio/mp4", ".aac": "audio/aac" };
            a = pc.path.getExtension(a);
            return c[a] ? "" !== this._audio.canPlayType(c[a]) : !1
        },
        load: function(a, c) {
            var e = function(a) { c(null, new pc.Sound(a)) },
                d = function(e) {
                    e = e || "Error loading audio url: " + a;
                    console.warn(e);
                    c(e)
                };
            this._createSound ? this._isSupported(a) ? this._createSound(a, e, d) : d(pc.string.format("Audio format for {0} not supported", a)) : d(null)
        },
        open: function(a, c) { return c }
    };
    pc.SoundManager.hasAudioContext() ? a.prototype._createSound = function(a, c, e) {
        var d = this.manager;
        d.context ? pc.http.get(a, function(a, b) {
            a && e();
            d.context.decodeAudioData(b, c, e)
        }) : e("Audio manager has no audio context")
    } : pc.SoundManager.hasAudio() && (a.prototype._createSound = function(a, c, e) {
        var f = null;
        try { f = new Audio } catch (h) { e("No support for Audio element"); return } d && document.body.appendChild(f);
        var g = function() {
            f.removeEventListener("canplaythrough", g);
            d && document.body.removeChild(f);
            c(f)
        };
        f.onerror = function() {
            f.onerror = null;
            d && document.body.removeChild(f);
            e()
        };
        f.addEventListener("canplaythrough", g);
        f.src = a
    });
    return { AudioHandler: a }
}());
pc.extend(pc, function() {
    var d = function(a, b, c) {
        this._device = a;
        this._assets = b;
        this._loader = c
    };
    d.prototype = {
        load: function(a, b) {},
        open: function(a, b) {},
        patch: function(a, b) {
            var c = this,
                e = !1;
            a.resources[0] || (a.resources[0] = new pc.Texture(this._device, { format: pc.PIXELFORMAT_R8_G8_B8_A8, cubemap: !0, autoMipmap: !0, fixCubemapSeams: !!a._dds }), e = !0);
            a.file ? a.file && !a._dds && b._loader.load(a.file.url + "?t=" + a.file.hash, "texture", function(e, d) { e ? (b.fire("error", e, a), b.fire("error:" + a.id, e, a), a.fire("error", e, a)) : (b._loader.patch({ resource: d, type: "texture", data: a.data }, b), a._dds = d, c.patch(a, b)) }) : delete a._dds;
            if ((!a.file || !a._dds) && a.resources[1]) a.resources = [a.resources[0]], e = !0;
            else if (a._dds && !a.resources[1]) {
                a.resources = [a.resources[0]];
                a._dds.fixCubemapSeams = !0;
                a._dds.autoMipmap = this._device.useTexCubeLod ? !1 : !0;
                a._dds.minFilter = this._device.useTexCubeLod ? pc.FILTER_LINEAR_MIPMAP_LINEAR : pc.FILTER_LINEAR;
                a._dds.magFilter = pc.FILTER_LINEAR;
                a._dds.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                a._dds.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                a.resources.push(a._dds);
                for (e = 1; 6 > e; e++) {
                    var d = new pc.gfx.Texture(this._device, { cubemap: !0, fixCubemapSeams: !0, autoMipmap: !0, format: a._dds.format, rgbm: a._dds.rgbm, width: Math.pow(2, 7 - e), height: Math.pow(2, 7 - e) });
                    d.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                    d.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                    d._levels[0] = a._dds._levels[e];
                    d.upload();
                    a.resources.push(d)
                }
                e = !0
            }
            d = a.resource;
            d.name !== a.name && (d.name = a.name);
            a.data.hasOwnProperty("rgbm") && d.rgbm !== !!a.data.rgbm && (d.rgbm = !!a.data.rgbm);
            d.fixCubemapSeams = !!a._dds;
            a.data.hasOwnProperty("minFilter") && d.minFilter !== a.data.minFilter && (d.minFilter = a.data.minFilter);
            a.data.hasOwnProperty("magFilter") && d.magFilter !== a.data.magFilter && (d.magFilter = a.data.magFilter);
            a.data.hasOwnProperty("anisotropy") && d.anisotropy !== a.data.anisotropy && (d.anisotropy = a.data.anisotropy);
            d.addressU !== pc.ADDRESS_CLAMP_TO_EDGE && (d.addressU = pc.ADDRESS_CLAMP_TO_EDGE);
            d.addressV !== pc.ADDRESS_CLAMP_TO_EDGE && (d.addressV = pc.ADDRESS_CLAMP_TO_EDGE);
            this._patchTextureFaces(a, b);
            e && (b.fire("load", a), b.fire("load:" + a.id, a), a.fire("load", a))
        },
        _patchTexture: function() { this.registry._loader._handlers.cubemap._patchTextureFaces(this, this.registry) },
        _patchTextureFaces: function(a, b) {
            if (a.loadFaces || !a.file) {
                var c = a.resource,
                    e = [],
                    d = 0,
                    g = !1,
                    h = this;
                a._levelsEvents || (a._levelsEvents = [null, null, null, null, null, null]);
                a.data.textures.forEach(function(m, l) {
                    var p = function(k) {
                            d++;
                            e[l] = k && k.resource.getSource() || null;
                            var m = a._levelsEvents[l];
                            if (m !== k) {
                                m && m.off("load", h._patchTexture, a);
                                if (k) k.on("load", h._patchTexture, a);
                                a._levelsEvents[l] = k || null
                            }
                            e[l] !== c._levels[0][l] && (g = !0);
                            6 === d && g && (c.setSource(e), b.fire("load", a), b.fire("load:" + a.id, a), a.fire("load", a))
                        },
                        k = b.get(a.data.textures[l]);
                    if (k) k.ready(p), b.load(k);
                    else if (m) b.once("load:" + m, p);
                    else p(null)
                })
            }
        }
    };
    return { CubemapHandler: d }
}());
pc.extend(pc, function() {
    var d = function() {};
    d.prototype = { load: function(a, b) { pc.http.get(a, function(c, e) { c ? b(pc.string.format("Error loading JSON resource: {0} [{1}]", a, c)) : b(null, e) }) }, open: function(a, b) { return b }, patch: function(a, b) {} };
    return { JsonHandler: d }
}());
pc.extend(pc, function() {
    var d = { ambient: "vec3", ambientTnumber: "boolean", aoMap: "texture", aoMapVertexColor: "boolean", aoMapChannel: "string", aoMapUv: "number", aoMapTiling: "vec2", aoMapOffset: "vec2", occludeSpecular: "boolean", diffuse: "vec3", diffuseMap: "texture", diffuseMapVertexColor: "boolean", diffuseMapChannel: "string", diffuseMapUv: "number", diffuseMapTiling: "vec2", diffuseMapOffset: "vec2", diffuseMapTnumber: "boolean", specular: "vec3", specularMapVertexColor: "boolean", specularMapChannel: "string", specularMapUv: "number", specularMap: "texture", specularMapTiling: "vec2", specularMapOffset: "vec2", specularMapTnumber: "boolean", specularAntialias: "boolean", useMetalness: "boolean", metalnessMap: "texture", metalnessMapVertexColor: "boolean", metalnessMapChannel: "string", metalnessMapUv: "number", metalnessMapTiling: "vec2", metalnessMapOffset: "vec2", metalnessMapTnumber: "boolean", metalness: "number", conserveEnergy: "boolean", shininess: "number", glossMap: "texture", glossMapVertexColor: "boolean", glossMapChannel: "string", glossMapUv: "number", glossMapTiling: "vec2", glossMapOffset: "vec2", fresnelModel: "number", fresnelFactor: "float", emissive: "vec3", emissiveMap: "texture", emissiveMapVertexColor: "boolean", emissiveMapChannel: "string", emissiveMapUv: "number", emissiveMapTiling: "vec2", emissiveMapOffset: "vec2", emissiveMapTint: "boolean", emissiveIntensity: "number", normalMap: "texture", normalMapTiling: "vec2", normalMapOffset: "vec2", normalMapUv: "number", bumpMapFactor: "number", heightMap: "texture", heightMapChannel: "string", heightMapUv: "number", heightMapTiling: "vec2", heightMapOffset: "vec2", heightMapFactor: "number", alphaTest: "number", opacity: "number", opacityMap: "texture", opacityMapVertexColor: "boolean", opacityMapChannel: "string", opacityMapUv: "number", opacityMapTiling: "vec2", opacityMapOffset: "vec2", reflectivity: "number", refraction: "number", refractionIndex: "number", sphereMap: "texture", cubeMap: "cubemap", cubeMapProjection: "boolean", lightMap: "texture", lightMapVertexColor: "boolean", lightMapChannel: "string", lightMapUv: "number", lightMapTiling: "vec2", lightMapOffset: "vec2", depthTest: "boolean", depthWrite: "boolean", cull: "number", blendType: "number", shadowSampleType: "number", shadingModel: "number" },
        a = function(a, b, d, g) {
            b = "cubeMap prefilteredCubeMap128 prefilteredCubeMap64 prefilteredCubeMap32 prefilteredCubeMap16 prefilteredCubeMap8 prefilteredCubeMap4".split(" ");
            for (d = 0; d < b.length; d++) this[b[d]] !== a.resources[d] && (this[b[d]] = a.resources[d]);
            this.update()
        },
        b = function(a) { this._assets = a };
    b.prototype = {
        load: function(a, b) { pc.http.get(a, function(d, g) { d ? b && b(pc.string.format("Error loading material: {0} [{1}]", a, d)) : b && b(null, g) }) },
        open: function(a, b) {
            var d = new pc.StandardMaterial;
            b.parameters || this._createParameters(b);
            d.init(b);
            d._data = b;
            return d
        },
        _createParameters: function(a) {
            var b = [];
            a.shadingModel || (a.shadingModel = "blinn" === a.shader ? pc.SPECULAR_BLINN : pc.SPECULAR_PHONG);
            var f = a.shader;
            delete a.shader;
            for (var g in a) a.hasOwnProperty(g) && b.push({ name: g, type: d[g], data: a[g] });
            a.shader = f;
            a.parameters = b
        },
        patch: function(a, b) {
            void 0 === a.data.shader && (a.data = a.resource._data, delete a.resource._data);
            this._updateStandardMaterial(a, a.data, b);
            a.off("change", this._onAssetChange, this);
            a.on("change", this._onAssetChange, this)
        },
        _onAssetChange: function(a, b, d) { "data" === b && this._updateStandardMaterial(a, d, this._assets) },
        _updateStandardMaterial: function(b, e, d) {
            var g = b.resource,
                h;
            b.file && (h = pc.path.getDirectory(b.getFileUrl()));
            e.name = b.name;
            e.parameters || this._createParameters(e);
            var m = "path" === e.mapping_format;
            e.parameters.forEach(function(l, p) {
                var k;
                if ("texture" === l.type) {
                    g._assetHandlers || (g._assetHandlers = {});
                    var q = g._assetHandlers[l.name];
                    if (!l.data || l.data instanceof pc.Texture) q && !l.data && (d.off("load:" + q.id, q.bind), d.off("add:" + q.id, q.add), d.off("remove:" + q.id, q.remove), q.url && (d.off("add:url:" + q.url, q.add), d.off("remove:url:" + q.url, q.remove)), g._assetHandlers[l.name] = null);
                    else if (m ? b = d.getByUrl(pc.path.join(h, l.data)) : (k = l.data, b = d.get(l.data)), q && (d.off("load:" + q.id, q.bind), d.off("add:" + q.id, q.add), d.off("remove:" + q.id, q.remove), q.url && (d.off("add:url:" + q.url, q.add), d.off("remove:url:" + q.url, q.remove)), g._assetHandlers[l.name] = null), q = g._assetHandlers[l.name] = {
                            id: k,
                            url: m ? pc.path.join(h, l.data) : "",
                            bind: function(a) {
                                e.parameters[p].data = a.resource;
                                g[e.parameters[p].name] = a.resource;
                                g.update()
                            },
                            add: function(a) { d.load(a) },
                            remove: function(a) { g[e.parameters[p].name] === a.resource && (e.parameters[p].data = null, g[e.parameters[p].name] = null, g.update()) }
                        }, k ? (d.on("load:" + k, q.bind), d.on("remove:" + k, q.remove)) : m && (d.on("load:url:" + pc.path.join(h, l.data), q.bind), d.on("remove:url:" + pc.path.join(h, l.data), q.remove)), b) b.resource && q.bind(b), d.load(b);
                    else if (k) d.once("add:" + k, q.add);
                    else if (m) d.once("add:url:" + q.url, q.add)
                } else if ("cubemap" === l.type && l.data && !(l.data instanceof pc.Texture)) {
                    m ? b = d.getByUrl(pc.path.join(h, l.data)) : (k = l.data, b = d.get(l.data));
                    var q = function(a) {
                            e.shadingModel === pc.SPECULAR_PHONG && (a.loadFaces = !0);
                            a.ready(r);
                            d.load(a)
                        },
                        r = function(b) {
                            l.data = b.resource;
                            1 < b.resources.length && (e.parameters.push({ name: "prefilteredCubeMap128", data: b.resources[1] }), e.parameters.push({ name: "prefilteredCubeMap64", data: b.resources[2] }), e.parameters.push({ name: "prefilteredCubeMap32", data: b.resources[3] }), e.parameters.push({ name: "prefilteredCubeMap16", data: b.resources[4] }), e.parameters.push({ name: "prefilteredCubeMap8", data: b.resources[5] }), e.parameters.push({ name: "prefilteredCubeMap4", data: b.resources[6] }));
                            g.init(e);
                            b.off("load", a, g);
                            b.on("load", a, g)
                        };
                    if (b) q(b);
                    else if (k) d.once("add:" + k, q);
                    else if (m) d.once("add:url:" + pc.path.join(h, l.data), function(b) {
                        b.ready(function(b) {
                            e.parameters[p].data = b.resource;
                            g.init(e);
                            b.off("load", a, g);
                            b.on("load", a, g)
                        });
                        d.load(b)
                    })
                }
            });
            g.init(e)
        }
    };
    return { MaterialHandler: b, getMaterialParamType: function(a) { return d[a] } }
}());
pc.extend(pc, function() {
    var d = function(a) { this._device = a };
    d.DEFAULT_MATERIAL = new pc.StandardMaterial;
    d.DEFAULT_MATERIAL.shadingModel = pc.SPECULAR_BLINN;
    d.prototype = {
        load: function(a, b) { pc.http.get(a, function(c, e) { c ? b && b(pc.string.format("Error loading model: {0} [{1}]", a, c)) : b && b(null, e) }) },
        open: function(a, b) {
            if (b.model) {
                if (1 >= b.model.version) logERROR(pc.string.format("Asset: {0}, is an old model format. Upload source assets to re-import.", a));
                else if (2 <= b.model.version) return (new pc.JsonModelParser(this._device)).parse(b);
                return null
            }
        },
        patch: function(a, b) {
            if (a.resource) {
                var c = a.data;
                a.resource.meshInstances.forEach(function(e, d) {
                    if (c.mapping) {
                        var g = function(a) {
                            a.resource ? e.material = a.resource : (a.once("load", g), b.load(a));
                            a.once("remove", function(a) { e.material === a.resource && (e.material = pc.ModelHandler.DEFAULT_MATERIAL) })
                        };
                        if (c.mapping[d]) {
                            var h = c.mapping[d].material,
                                m = c.mapping[d].path;
                            if (void 0 !== h)
                                if (h)
                                    if (m = b.get(h)) g(m);
                                    else b.once("add:" + h, g);
                            else e.material = pc.ModelHandler.DEFAULT_MATERIAL;
                            else if (void 0 !== m && m)
                                if (h = a.getFileUrl(), h = pc.path.getDirectory(h), h = pc.path.join(h, c.mapping[d].path), m = b.getByUrl(h)) g(m);
                                else b.once("add:url:" + h, g)
                        } else e.material = pc.ModelHandler.DEFAULT_MATERIAL
                    }
                })
            }
        }
    };
    return { ModelHandler: d }
}());
pc.extend(pc, function() {
    var d = function(a) {
        this._app = a;
        this._scripts = {};
        this._cache = {}
    };
    d._types = [];
    d._push = function(a) { pc.script.legacy && 0 < d._types.length ? console.assert("Script Ordering Error. Contact support@playcanvas.com") : d._types.push(a) };
    d.prototype = {
        load: function(a, b) {
            var c = this;
            pc.script.app = this._app;
            this._loadScript(a, function(a, f, g) {
                if (a) b(a);
                else if (pc.script.legacy) a = null, d._types.length && (a = d._types.pop()), a ? this._scripts[f] = a : a = null, b(null, a, g);
                else {
                    a = {};
                    for (var h = 0; h < d._types.length; h++) a[d._types[h].name] = d._types[h];
                    d._types.length = 0;
                    b(null, a, g);
                    delete c._loader._cache[f + "script"]
                }
            }.bind(this))
        },
        open: function(a, b) { return b },
        patch: function(a, b) {},
        _loadScript: function(a, b) {
            var c = document.head,
                e = document.createElement("script");
            this._cache[a] = e;
            e.async = !1;
            e.addEventListener("error", function(a) { b(pc.string.format("Script: {0} failed to load", a.target.src)) }, !1);
            var d = !1;
            e.onload = e.onreadystatechange = function() { d || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (d = !0, b(null, a, e)) };
            e.src = a;
            c.appendChild(e)
        }
    };
    return { ScriptHandler: d }
}());
pc.extend(pc, function() {
    var d = function() {};
    d.prototype = { load: function(a, b) { pc.http.get(a, function(c, e) { c ? b(pc.string.format("Error loading text resource: {0} [{1}]", a, c)) : b(null, e) }) }, open: function(a, b) { return b }, patch: function(a, b) {} };
    return { TextHandler: d }
}());
pc.extend(pc, function() {
    var d = { repeat: pc.ADDRESS_REPEAT, clamp: pc.ADDRESS_CLAMP_TO_EDGE, mirror: pc.ADDRESS_MIRRORED_REPEAT },
        a = { nearest: pc.FILTER_NEAREST, linear: pc.FILTER_LINEAR, nearest_mip_nearest: pc.FILTER_NEAREST_MIPMAP_NEAREST, linear_mip_nearest: pc.FILTER_LINEAR_MIPMAP_NEAREST, nearest_mip_linear: pc.FILTER_NEAREST_MIPMAP_LINEAR, linear_mip_linear: pc.FILTER_LINEAR_MIPMAP_LINEAR },
        b = function(a, b, d) {
            this._device = a;
            this._assets = b;
            this._loader = d;
            this.crossOrigin = void 0
        };
    b.prototype = {
        load: function(a, b) {
            var d = 0 <= a.indexOf("?") ? a.split("?")[0] : a,
                g = pc.path.getExtension(d).toLowerCase();
            if (".dds" === g || ".crn" === g) pc.http.get(a, { cache: !0, responseType: "arraybuffer" }, function(a, c) { a ? b(a) : b(null, c) });
            else if (".jpg" === g || ".jpeg" === g || ".gif" === g || ".png" === g) {
                var h = new Image;
                void 0 !== this.crossOrigin && (h.crossOrigin = this.crossOrigin);
                h.onload = function() { b(null, h) };
                h.onerror = function(d) { b(pc.string.format("Error loading Texture from: '{0}'", a)) };
                h.src = a
            } else setTimeout(function() { b(pc.string.format("Error loading Texture: format not supported: '{0}'", g)) }, 0)
        },
        open: function(a, b) {
            if (a) {
                var d, g = pc.path.getExtension(a).toLowerCase(),
                    h = null;
                if (b instanceof Image || b instanceof HTMLImageElement) {
                    var m = b,
                        h = ".jpg" === g || ".jpeg" === g ? pc.PIXELFORMAT_R8_G8_B8 : pc.PIXELFORMAT_R8_G8_B8_A8;
                    d = new pc.Texture(this._device, { width: m.width, height: m.height, format: h });
                    d.setSource(m)
                } else if (b instanceof ArrayBuffer) {
                    if (".crn" === g) {
                        var g = b.byteLength,
                            l = new Uint8Array(b),
                            m = Module._malloc(g),
                            p = Module.HEAPU8,
                            k, q = m / 4,
                            r = g % 4,
                            n = new Uint32Array(l.buffer, 0, (g - r) / 4),
                            t = new Uint32Array(p.buffer);
                        for (k = 0; k < n.length; k++) t[q + k] = n[k];
                        for (k = g - r; k < g; k++) p[m + k] = l[k];
                        l = Module._crn_decompress_get_data(m, g);
                        g = Module._crn_decompress_get_size(m, g);
                        b = Module.HEAPU8.buffer.slice(l, l + g)
                    }
                    d = new Uint32Array(b, 0, 32);
                    var g = d[4],
                        m = d[3],
                        l = Math.max(d[7], 1),
                        w = d[21],
                        y = d[22],
                        p = 65024 === d[28],
                        t = n = r = q = k = !1;
                    if (4 === d[20])
                        if (827611204 === w) h = pc.PIXELFORMAT_DXT1, k = !0;
                        else if (894720068 === w) h = pc.PIXELFORMAT_DXT5, k = !0;
                    else if (116 === w) h = pc.PIXELFORMAT_RGBA32F, q = !0;
                    else if (826496069 === w) h = pc.PIXELFORMAT_ETC1, r = k = !0;
                    else if (825438800 === w || 825504336 === w) h = 825438800 === w ? pc.PIXELFORMAT_PVRTC_2BPP_RGB_1 : pc.PIXELFORMAT_PVRTC_2BPP_RGBA_1, n = k = !0;
                    else { if (825439312 === w || 825504848 === w) h = 825439312 === w ? pc.PIXELFORMAT_PVRTC_4BPP_RGB_1 : pc.PIXELFORMAT_PVRTC_4BPP_RGBA_1, t = k = !0 } else 32 === y && (h = pc.PIXELFORMAT_R8_G8_B8_A8);
                    d = Math.round(Math.log2(Math.max(g, m)) + 1);
                    if (!h || l !== d && k) return h ? console.error("DDS has " + l + " mips, but engine requires " + d + " for DXT format. . Empty texture will be created instead.") : console.error("This DDS pixel format is currently unsupported. Empty texture will be created instead."), d = new pc.Texture(this._device, { width: 4, height: 4, format: pc.PIXELFORMAT_R8_G8_B8 });
                    d = new pc.Texture(this._device, { width: g, height: m, format: h, cubemap: p });
                    p && (d.addressU = pc.ADDRESS_CLAMP_TO_EDGE, d.addressV = pc.ADDRESS_CLAMP_TO_EDGE);
                    for (var h = 128, y = p ? 6 : 1, x, w = 827611204 === w ? 8 : 16, v, z = 0; z < y; z++)
                        for (var u = g, A = m, B = 0; B < l; B++) k ? r ? x = Math.floor((u + 3) / 4) * Math.floor((A + 3) / 4) * 8 : n ? x = Math.max(u, 16) * Math.max(A, 8) / 4 : t ? x = Math.max(u, 8) * Math.max(A, 8) / 2 : (x = Math.floor((u + 4 - 1) / 4), v = Math.floor((A + 4 - 1) / 4), x *= v, x *= w) : x = u * A * 4, v = q ? new Float32Array(b, h, x) : new Uint8Array(b, h, x), p ? (d._levels[B] || (d._levels[B] = []), d._levels[B][z] = v) : d._levels[B] = v, h += q ? 4 * x : x, u = Math.max(.5 * u, 1), A = Math.max(.5 * A, 1);
                    d.upload()
                }
                return d
            }
        },
        patch: function(b, e) {
            var f = b.resource;
            f && (f.name !== b.name && (f.name = b.name), b.data.hasOwnProperty("minfilter") && f.minFilter !== a[b.data.minfilter] && (f.minFilter = a[b.data.minfilter]), b.data.hasOwnProperty("magfilter") && f.magFilter !== a[b.data.magfilter] && (f.magFilter = a[b.data.magfilter]), b.data.hasOwnProperty("addressu") && f.addressU !== d[b.data.addressu] && (f.addressU = d[b.data.addressu]), b.data.hasOwnProperty("addressv") && f.addressV !== d[b.data.addressv] && (f.addressV = d[b.data.addressv]), b.data.hasOwnProperty("anisotropy") && f.anisotropy !== b.data.anisotropy && (f.anisotropy = b.data.anisotropy), b.data.hasOwnProperty("rgbm") && f.rgbm !== !!b.data.rgbm && (f.rgbm = !!b.data.rgbm))
        }
    };
    return { TextureHandler: b }
}());
pc.extend(pc, function() {
    var d = function() {};
    d.prototype = { load: function(a, b) { pc.http.get(a, function(c, e) { c ? b(pc.string.format("Error loading html resource: {0} [{1}]", a, c)) : b(null, e) }) }, open: function(a, b) { return b }, patch: function(a, b) {} };
    return { HtmlHandler: d }
}());
pc.extend(pc, function() {
    var d = function() {};
    d.prototype = { load: function(a, b) { pc.http.get(a, function(c, e) { c ? b(pc.string.format("Error loading css resource: {0} [{1}]", a, c)) : b(null, e) }) }, open: function(a, b) { return b }, patch: function(a, b) {} };
    return {
        CssHandler: d,
        createStyle: function(a) {
            var b = document.createElement("style");
            b.type = "text/css";
            b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
            return b
        }
    }
}());
pc.extend(pc, function() {
    var d = function() {};
    d.prototype = { load: function(a, b) { pc.http.get(a, function(c, e) { c ? b(pc.string.format("Error loading shader resource: {0} [{1}]", a, c)) : b(null, e) }) }, open: function(a, b) { return b }, patch: function(a, b) {} };
    return { ShaderHandler: d }
}());
pc.extend(pc, function() {
    var d = function(a) { this._app = a };
    d.prototype = {
        load: function(a, b) { pc.http.get(a, function(c, e) { c ? b("Error requesting scene: " + a) : b(null, e) }) },
        open: function(a, b) {
            this._app.systems.script.preloading = !0;
            var c = (new pc.SceneParser(this._app)).parse(b),
                e = this._app.scene;
            e.root = c;
            this._app.applySceneSettings(b.settings);
            this._app.systems.script.preloading = !1;
            return e
        },
        patch: function(a, b) {}
    };
    return { SceneHandler: d }
}());
pc.extend(pc, function() {
    var d = function(a) { this._app = a };
    d.prototype = {
        load: function(a, b) { pc.http.get(a, function(c, e) { c ? b("Error requesting scene: " + a) : b(null, e) }) },
        open: function(a, b) {
            this._app.systems.script.preloading = !0;
            var c = (new pc.SceneParser(this._app)).parse(b);
            this._app.systems.script.preloading = !1;
            return c
        }
    };
    return { HierarchyHandler: d }
}());
pc.extend(pc, function() {
    var d = function(a) { this._app = a };
    d.prototype = { load: function(a, b) { pc.http.get(a, function(c, e) { c ? b("Error requesting scene: " + a) : b(null, e) }) }, open: function(a, b) { return b.settings } };
    return { SceneSettingsHandler: d }
}());
pc.extend(pc, function() {
    var d = function() {};
    d.prototype = { load: function(a, b) { b(null, null) }, open: function(a, b) { return b } };
    return { FolderHandler: d }
}());
pc.extend(pc, function() {
    var d = { points: pc.PRIMITIVE_POINTS, lines: pc.PRIMITIVE_LINES, lineloop: pc.PRIMITIVE_LINELOOP, linestrip: pc.PRIMITIVE_LINESTRIP, triangles: pc.PRIMITIVE_TRIANGLES, trianglestrip: pc.PRIMITIVE_TRISTRIP, trianglefan: pc.PRIMITIVE_TRIFAN },
        a = { int8: pc.ELEMENTTYPE_INT8, uint8: pc.ELEMENTTYPE_UINT8, int16: pc.ELEMENTTYPE_INT16, uint16: pc.ELEMENTTYPE_UINT16, int32: pc.ELEMENTTYPE_INT32, uint32: pc.ELEMENTTYPE_UINT32, float32: pc.ELEMENTTYPE_FLOAT32 },
        b = function(a) { this._device = a };
    b.prototype = {
        parse: function(a) {
            var b = this._parseNodes(a),
                d = this._parseSkins(a, b),
                g = this._parseVertexBuffers(a),
                h = this._parseIndexBuffers(a, g),
                g = this._parseMeshes(a, d.skins, g, h.buffer, h.data);
            a = this._parseMeshInstances(a, b, g, d.skins, d.instances);
            g = new pc.Model;
            g.graph = b[0];
            g.meshInstances = a;
            g.skinInstances = d.instances;
            g.getGraph().syncHierarchy();
            return g
        },
        _parseNodes: function(a) {
            a = a.model;
            var b = [],
                d;
            for (d = 0; d < a.nodes.length; d++) {
                var g = a.nodes[d],
                    h = new pc.GraphNode;
                h.setName(g.name);
                h.setLocalPosition(g.position[0], g.position[1], g.position[2]);
                h.setLocalEulerAngles(g.rotation[0], g.rotation[1], g.rotation[2]);
                h.setLocalScale(g.scale[0], g.scale[1], g.scale[2]);
                b.push(h)
            }
            for (d = 1; d < a.parents.length; d++) b[a.parents[d]].addChild(b[d]);
            return b
        },
        _parseSkins: function(a, b) {
            var d = a.model,
                g = [],
                h = [],
                m, l;
            !this._device.supportsBoneTextures && 0 < d.skins.length && (m = this._device.getBoneLimit(), pc.partitionSkin(d, null, m));
            for (m = 0; m < d.skins.length; m++) {
                var p = d.skins[m],
                    k = [];
                for (l = 0; l < p.inverseBindMatrices.length; l++) {
                    var q = p.inverseBindMatrices[l];
                    k[l] = new pc.Mat4(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10], q[11], q[12], q[13], q[14], q[15])
                }
                p = new pc.Skin(this._device, k, p.boneNames);
                g.push(p);
                k = new pc.SkinInstance(p, b[0]);
                q = [];
                for (l = 0; l < p.boneNames.length; l++) {
                    var r = b[0].findByName(p.boneNames[l]);
                    q.push(r)
                }
                k.bones = q;
                h.push(k)
            }
            return { skins: g, instances: h }
        },
        _parseVertexBuffers: function(b) {
            b = b.model;
            var e = [],
                d, g, h = { position: pc.SEMANTIC_POSITION, normal: pc.SEMANTIC_NORMAL, tangent: pc.SEMANTIC_TANGENT, blendWeight: pc.SEMANTIC_BLENDWEIGHT, blendIndices: pc.SEMANTIC_BLENDINDICES, color: pc.SEMANTIC_COLOR, texCoord0: pc.SEMANTIC_TEXCOORD0, texCoord1: pc.SEMANTIC_TEXCOORD1, texCoord2: pc.SEMANTIC_TEXCOORD2, texCoord3: pc.SEMANTIC_TEXCOORD3, texCoord4: pc.SEMANTIC_TEXCOORD4, texCoord5: pc.SEMANTIC_TEXCOORD5, texCoord6: pc.SEMANTIC_TEXCOORD6, texCoord7: pc.SEMANTIC_TEXCOORD7 },
                m, l;
            for (m = 0; m < b.vertices.length; m++) {
                var p = b.vertices[m];
                if (p.position && p.normal && p.texCoord0) {
                    d = [];
                    for (l = 0; l < b.meshes.length; l++) b.meshes[l].vertices === m && (d = d.concat(b.meshes[l].indices));
                    d = pc.calculateTangents(p.position.data, p.normal.data, p.texCoord0.data, d);
                    p.tangent = { type: "float32", components: 4, data: d }
                }
                l = [];
                for (g in p) {
                    d = p[g];
                    var k = d.type;
                    this._device.supportsUnsignedByte || ("uint8" === k && (k = "float32"), "int8" === k && (k = "float32"));
                    l.push({ semantic: h[g], components: d.components, type: a[k], normalize: h[g] === pc.SEMANTIC_COLOR })
                }
                d = new pc.VertexFormat(this._device, l);
                var k = p.position.data.length / p.position.components,
                    q = new pc.VertexBuffer(this._device, d, k),
                    r = new pc.VertexIterator(q);
                for (l = 0; l < k; l++) {
                    for (g in p) switch (d = p[g], d.components) {
                        case 1:
                            r.element[h[g]].set(d.data[l]);
                            break;
                        case 2:
                            r.element[h[g]].set(d.data[2 * l], d.data[2 * l + 1]);
                            break;
                        case 3:
                            r.element[h[g]].set(d.data[3 * l], d.data[3 * l + 1], d.data[3 * l + 2]);
                            break;
                        case 4:
                            r.element[h[g]].set(d.data[4 * l], d.data[4 * l + 1], d.data[4 * l + 2], d.data[4 * l + 3])
                    }
                    r.next()
                }
                r.end();
                e.push(q)
            }
            return e
        },
        _parseIndexBuffers: function(a, b) {
            var d = a.model,
                g = null,
                h = null,
                m, l = 0;
            for (m = 0; m < d.meshes.length; m++) {
                var p = d.meshes[m];
                void 0 !== p.indices && (l += p.indices.length)
            }
            for (m = d = 0; m < b.length; m++) d = Math.max(d, b[m].numVertices);
            0 < l && (65535 < d && this._device.extUintElement ? (g = new pc.IndexBuffer(this._device, pc.INDEXFORMAT_UINT32, l), h = new Uint32Array(g.lock())) : (g = new pc.IndexBuffer(this._device, pc.INDEXFORMAT_UINT16, l), h = new Uint16Array(g.lock())));
            return { buffer: g, data: h }
        },
        _parseMeshes: function(a, b, f, g, h) {
            a = a.model;
            var m = [],
                l = 0,
                p;
            for (p = 0; p < a.meshes.length; p++) {
                var k = a.meshes[p],
                    q = k.aabb,
                    r = q.min,
                    q = q.max,
                    r = new pc.BoundingBox(new pc.Vec3(.5 * (q[0] + r[0]), .5 * (q[1] + r[1]), .5 * (q[2] + r[2])), new pc.Vec3(.5 * (q[0] - r[0]), .5 * (q[1] - r[1]), .5 * (q[2] - r[2]))),
                    q = void 0 !== k.indices,
                    n = new pc.Mesh;
                n.vertexBuffer = f[k.vertices];
                n.indexBuffer[0] = q ? g : null;
                n.primitive[0].type = d[k.type];
                n.primitive[0].base = q ? k.base + l : k.base;
                n.primitive[0].count = k.count;
                n.primitive[0].indexed = q;
                n.skin = void 0 !== k.skin ? b[k.skin] : null;
                n.aabb = r;
                q && (h.set(k.indices, l), l += k.indices.length);
                m.push(n)
            }
            null !== g && g.unlock();
            return m
        },
        _parseMeshInstances: function(a, b, d, g, h) {
            a = a.model;
            var m = [],
                l;
            for (l = 0; l < a.meshInstances.length; l++) {
                var p = a.meshInstances[l],
                    k = d[p.mesh],
                    p = new pc.MeshInstance(b[p.node], k, pc.ModelHandler.DEFAULT_MATERIAL);
                if (k.skin) {
                    k = g.indexOf(k.skin);
                    if (-1 === k) throw Error("Mesh's skin does not appear in skin array.");
                    p.skinInstance = h[k]
                }
                m.push(p)
            }
            return m
        }
    };
    return { JsonModelParser: b }
}());
pc.extend(pc, function() {
    var d = function(a) { this._app = a };
    d.prototype = {
        parse: function(a) {
            var b = {},
                c, e, d = null;
            for (c in a.entities) b[c] = this._createEntity(a.entities[c]), null === a.entities[c].parent && (d = b[c]);
            for (c in a.entities) {
                var g = a.entities[c].children.length;
                for (e = 0; e < g; e++) {
                    var h = a.entities[c].children[e];
                    b[h] && b[c].addChild(b[h])
                }
            }
            this._openComponentData(d, a.entities);
            return d
        },
        _createEntity: function(a) {
            var b = new pc.Entity,
                c = a.position,
                e = a.rotation,
                d = a.scale;
            b.setName(a.name);
            b.setGuid(a.resource_id);
            b.setLocalPosition(c[0], c[1], c[2]);
            b.setLocalEulerAngles(e[0], e[1], e[2]);
            b.setLocalScale(d[0], d[1], d[2]);
            b._enabled = void 0 !== a.enabled ? a.enabled : !0;
            b._enabledInHierarchy = b._enabled;
            b.template = a.template;
            a.labels && a.labels.forEach(function(a) { b.addLabel(a) });
            return b
        },
        _openComponentData: function(a, b) {
            var c = this._app.systems.list(),
                e, d = c.length,
                g = b[a.getGuid()];
            for (e = 0; e < d; e++) {
                var h = g.components[c[e].id];
                h && this._app.systems[c[e].id].addComponent(a, h)
            }
            c = g.children.length;
            d = a.getChildren();
            for (e = 0; e < c; e++) d[e] = this._openComponentData(d[e], b);
            return a
        }
    };
    return { SceneParser: d }
}());
pc.extend(pc, function() {
    var d = -1,
        a = function(a, c, e, f) {
            this._id = ++d;
            this.name = a;
            this.type = c;
            this.tags = new pc.Tags(this);
            this._preload = !1;
            this._file = e ? { filename: e.filename, size: e.size, hash: e.hash, url: e.url } : null;
            this._data = f || {};
            this._resources = [];
            this.loading = this.loaded = !1;
            pc.events.attach(this)
        };
    a.prototype = {
        getFileUrl: function() { return this.file ? this.file.url : null },
        ready: function(a, c) {
            c = c || this;
            if (this.resource) a.call(c, this);
            else this.once("load", function(d) { a.call(c, d) })
        },
        unload: function() {
            this.resource = null;
            this.loaded = !1
        }
    };
    Object.defineProperty(a.prototype, "id", {
        get: function() { return this._id },
        set: function(a) {
            this._id = a;
            a > d && (d = a)
        }
    });
    Object.defineProperty(a.prototype, "file", {
        get: function() { return this._file },
        set: function(a) {
            var c = this._file;
            this._file = a;
            if (!a || !c || a && c && a.hash !== c.hash) this.fire("change", this, "file", a, c), this.loaded && ("cubemap" === this.type ? this.registry._loader.patch(this, this.registry) : (this.loaded = !1, this.registry.load(this)))
        }
    });
    Object.defineProperty(a.prototype, "data", {
        get: function() { return this._data },
        set: function(a) {
            var c = this._data;
            this._data = a;
            a !== c && (this.fire("change", this, "data", a, c), this.loaded && this.registry._loader.patch(this, this.registry))
        }
    });
    Object.defineProperty(a.prototype, "resource", {
        get: function() { return this._resources[0] },
        set: function(a) {
            var c = this._resources[0];
            this._resources[0] = a;
            this.fire("change", this, "resource", a, c)
        }
    });
    Object.defineProperty(a.prototype, "resources", {
        get: function() { return this._resources },
        set: function(a) {
            var c = this._resources;
            this._resources = a;
            this.fire("change", this, "resources", a, c)
        }
    });
    Object.defineProperty(a.prototype, "preload", { get: function() { return this._preload }, set: function(a) { this._preload !== !!a && (this._preload = a) && !this.loaded && !this.loading && this.registry && this.registry.load(this) } });
    return { Asset: a, ASSET_ANIMATION: "animation", ASSET_AUDIO: "audio", ASSET_IMAGE: "image", ASSET_JSON: "json", ASSET_MODEL: "model", ASSET_MATERIAL: "material", ASSET_TEXT: "text", ASSET_TEXTURE: "texture", ASSET_CUBEMAP: "cubemap", ASSET_SHADER: "shader", ASSET_CSS: "css", ASSET_HTML: "html", ASSET_SCRIPT: "script" }
}());
pc.extend(pc, function() {
    var d = function(a) {
        this._loader = a;
        this._assets = [];
        this._cache = {};
        this._names = {};
        this._tags = new pc.TagsCache("_id");
        this._urls = {};
        this.prefix = null;
        pc.extend(this, pc.events)
    };
    d.prototype = {
        list: function(a) {
            a = a || {};
            return this._assets.filter(function(b) {
                var c = !0;
                void 0 !== a.preload && (c = b.preload === a.preload);
                return c
            })
        },
        add: function(a) {
            var b = this._assets.push(a) - 1,
                c;
            this._cache[a.id] = b;
            this._names[a.name] || (this._names[a.name] = []);
            this._names[a.name].push(b);
            a.file && (c = a.getFileUrl(), this._urls[c] = b);
            a.registry = this;
            this._tags.addItem(a);
            a.tags.on("add", this._onTagAdd, this);
            a.tags.on("remove", this._onTagRemove, this);
            this.fire("add", a);
            this.fire("add:" + a.id, a);
            c && this.fire("add:url:" + c, a);
            a.preload && this.load(a)
        },
        remove: function(a) {
            delete this._cache[a.id];
            delete this._names[a.name];
            var b = a.getFileUrl();
            b && delete this._urls[b];
            this._tags.removeItem(a);
            a.tags.off("add", this._onTagAdd, this);
            a.tags.off("remove", this._onTagRemove, this);
            a.fire("remove", a);
            this.fire("remove", a);
            this.fire("remove:" +
                a.id, a);
            b && this.fire("remove:url:" + b, a)
        },
        get: function(a) { return this._assets[this._cache[a]] },
        getByUrl: function(a) { return this._assets[this._urls[a]] },
        _compatibleLoad: function(a) {
            var b = this;
            console.warn("DEPRECATED: Loading arrays of assets is deprecated. Call assets.load with single assets.");
            return new pc.promise.Promise(function(c, d) {
                var f = a.length;
                a.forEach(function(d, e) {
                    d.ready(function(b) {
                        f--;
                        0 === f && (b = a.map(function(a) { return a.resource }), c(b))
                    });
                    b.load(d)
                })
            })
        },
        load: function(a) {
            if (a instanceof Array) return this._compatibleLoad(a);
            if (!a.loading) {
                var b = this;
                if (a.loaded) "cubemap" === a.type && b._loader.patch(a, this);
                else {
                    var c = !!a.file,
                        d = function() {
                            var c = a.file.url;
                            b.prefix && (c.startsWith("/") && (c = c.slice(1)), c = pc.path.join(b.prefix, c));
                            if ("script" !== a.type) var d = -1 !== c.indexOf("?") ? "&" : "?",
                                c = c + (d + "t=" + a.file.hash);
                            a.loading = !0;
                            b._loader.load(c, a.type, function(c, d, e) {
                                a.loaded = !0;
                                a.loading = !1;
                                c ? (b.fire("error", c, a), b.fire("error:" + a.id, c, a), a.fire("error", c, a)) : (d instanceof Array ? a.resources = d : a.resource = d, pc.script.legacy || "script" !== a.type || (c = b._loader.getHandler("script"), c._cache[a.id] && document.head.removeChild(c._cache[a.id]), c._cache[a.id] = e), b._loader.patch(a, b), b.fire("load", a), b.fire("load:" + a.id, a), a.file && a.file.url && b.fire("load:url:" + a.file.url, a), a.fire("load", a))
                            })
                        },
                        f = function() {
                            var c = b._loader.open(a.type, a.data);
                            c instanceof Array ? a.resources = c : a.resource = c;
                            a.loaded = !0;
                            b._loader.patch(a, b);
                            b.fire("load", a);
                            b.fire("load:" + a.id, a);
                            a.file && a.file.url && b.fire("load:url:" +
                                a.file.url, a);
                            a.fire("load", a)
                        };
                    if (a.file && "cubemap" === a.type) {
                        var c = !1,
                            g = a.file.url,
                            h = -1 !== g.indexOf("?") ? "&" : "?",
                            g = g + (h + a.file.hash);
                        this._loader.load(g, "texture", function(c, d) { c ? (b.fire("error", c, a), b.fire("error:" + a.id, c, a), a.fire("error", c, a)) : (b._loader.patch({ resource: d, type: "texture", data: a.data }, b), a._dds = d, f()) })
                    }
                    a.file ? c && (this.fire("load:start", a), this.fire("load:" + a.id + ":start", a), d()) : f()
                }
            }
        },
        loadFromUrl: function(a, b, c) {
            var d = pc.path.getBasename(a),
                f = { url: a },
                g = {};
            a = this.getByUrl(a);
            a || (a = new pc.Asset(d, b, f, g), this.add(a));
            "model" === b ? this._loadModel(a, c) : (a.once("load", function(a) { c(null, a) }), a.once("error", function(a) { c(a) }), this.load(a))
        },
        _loadModel: function(a, b) {
            var c = this,
                d = a.getFileUrl(),
                f = pc.path.getDirectory(d),
                d = pc.path.getBasename(d);
            d.replace(".json", "");
            var d = pc.path.join(f, d.replace(".json", ".mapping.json")),
                g = function(a) {
                    a.once("load", function(a) { b(null, a) });
                    a.once("error", function(a) { b(a) });
                    c.load(a)
                };
            this._loader.load(d, "json", function(b, d) {
                b ? (a.data = { mapping: [] }, g(a)) : c._loadMaterials(f, d, function(b, c) {
                    a.data = d;
                    g(a)
                })
            })
        },
        _loadMaterials: function(a, b, c) {
            var d = this,
                f, g = b.mapping.length,
                h = [],
                m = function(a, b) { d._loadTextures(b, function(a, d) { c(null, b) }) };
            0 === g && c(null, h);
            var l = function(a, b) {
                h.push(b);
                g--;
                0 === g && m(null, h)
            };
            for (f = 0; f < b.mapping.length; f++) {
                var p = b.mapping[f].path;
                p ? d.loadFromUrl(pc.path.join(a, p), "material", l) : g--
            }
        },
        _loadTextures: function(a, b) {
            var c, d, f = {},
                g = [],
                h = [],
                m = 0;
            for (c = 0; c < a.length; c++)
                if (a[c].data.parameters) {
                    var l = a[c].data.parameters;
                    for (d = 0; d < l.length; d++)
                        if ("texture" === l[d].type) {
                            var p = pc.path.getDirectory(a[c].getFileUrl()),
                                p = pc.path.join(p, l[d].data);
                            f[p] || (f[p] = !0, g.push(p), m++)
                        }
                } else console.warn("Update material asset loader to support new material format");
            if (m)
                for (d = function(a, c) {
                        h.push(c);
                        m--;
                        a && console.error(a);
                        0 === m && b(null, h)
                    }, c = 0; c < g.length; c++) this.loadFromUrl(g[c], "texture", d);
            else b(null, h)
        },
        findAll: function(a, b) {
            var c = this,
                d = this._names[a];
            return d ? (d = d.map(function(a) { return c._assets[a] }), b ? d.filter(function(a) { return a.type === b }) : d) : []
        },
        _onTagAdd: function(a, b) { this._tags.add(a, b) },
        _onTagRemove: function(a, b) { this._tags.remove(a, b) },
        findByTag: function() { return this._tags.find(arguments) },
        filter: function(a) { for (var b = [], c = 0, d = this._assets.length; c < d; c++) a(this._assets[c]) && b.push(this._assets[c]); return b },
        find: function(a, b) { var c = this.findAll(a, b); return c ? c[0] : null },
        getAssetById: function(a) { console.warn("DEPRECATED: getAssetById() use get() instead"); return this.get(a) }
    };
    return { AssetRegistry: d }
}());
! function(d) {
    var a, b;
    ! function() {
        var c = {},
            d = {};
        a = function(a, b, d) { c[a] = { deps: b, callback: d } };
        b = function(a) {
            function g(b) {
                if ("." !== b.charAt(0)) return b;
                b = b.split("/");
                for (var c = a.split("/").slice(0, -1), d = 0, e = b.length; e > d; d++) { var g = b[d]; ".." === g ? c.pop() : "." !== g && c.push(g) }
                return c.join("/")
            }
            if (d[a]) return d[a];
            if (d[a] = {}, !c[a]) throw Error("Could not find module " + a);
            for (var h, m = c[a], l = m.deps, m = m.callback, p = [], k = 0, q = l.length; q > k; k++) p.push("exports" === l[k] ? h = {} : b(g(l[k])));
            l = m.apply(this, p);
            return d[a] = h || l
        };
        b.entries = c
    }();
    a("rsvp/all-settled", ["./promise", "./utils", "exports"], function(a, b, d) {
        var g = a["default"],
            h = b.isArray,
            m = b.isNonThenable;
        d["default"] = function(a, b) {
            return new g(function(b) {
                function c(a) { return function(b) { e(a, { state: "fulfilled", value: b }) } }

                function d(a) { return function(b) { e(a, { state: "rejected", reason: b }) } }

                function e(a, c) {
                    y[a] = c;
                    0 === --p && b(y)
                }
                if (!h(a)) throw new TypeError("You must pass an array to allSettled.");
                var f, p = a.length;
                if (0 === p) return void b([]);
                for (var y = Array(p), x = 0; x < a.length; x++) f = a[x], m(f) ? e(x, { state: "fulfilled", value: f }) : g.resolve(f).then(c(x), d(x))
            }, b)
        }
    });
    a("rsvp/all", ["./promise", "exports"], function(a, b) {
        var d = a["default"];
        b["default"] = function(a, b) { return d.all(a, b) }
    });
    a("rsvp/asap", ["exports"], function(a) {
        function b() { return function() { process.nextTick(h) } }

        function d() {
            var a = 0,
                b = new l(h),
                c = document.createTextNode("");
            return b.observe(c, { characterData: !0 }),
                function() { c.data = a = ++a % 2 }
        }

        function g() { return function() { setTimeout(h, 1) } }

        function h() {
            for (var a = 0; a < p.length; a++) {
                var b = p[a];
                (0, b[0])(b[1])
            }
            p.length = 0
        }
        a["default"] = function(a, b) { 1 === p.push([a, b]) && m() };
        var m;
        a = "undefined" != typeof window ? window : {};
        var l = a.MutationObserver || a.WebKitMutationObserver,
            p = [];
        m = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? b() : l ? d() : g()
    });
    a("rsvp/config", ["./events", "exports"], function(a, b) {
        var d = { instrument: !1 };
        a["default"].mixin(d);
        b.config = d;
        b.configure = function(a, b) { return "onerror" === a ? void d.on("error", b) : 2 !== arguments.length ? d[a] : void(d[a] = b) }
    });
    a("rsvp/defer", ["./promise", "exports"], function(a, b) {
        var d = a["default"];
        b["default"] = function(a) {
            var b = {};
            return b.promise = new d(function(a, c) {
                b.resolve = a;
                b.reject = c
            }, a), b
        }
    });
    a("rsvp/events", ["exports"], function(a) {
        function b(a, c) {
            for (var d = 0, e = a.length; e > d; d++)
                if (a[d] === c) return d;
            return -1
        }

        function d(a) { var b = a._promiseCallbacks; return b || (b = a._promiseCallbacks = {}), b } a["default"] = {
            mixin: function(a) { return a.on = this.on, a.off = this.off, a.trigger = this.trigger, a._promiseCallbacks = void 0, a },
            on: function(a, c) {
                var m, l = d(this);
                (m = l[a]) || (m = l[a] = []); - 1 === b(m, c) && m.push(c)
            },
            off: function(a, c) { var m, l, p = d(this); return c ? (m = p[a], l = b(m, c), void(-1 !== l && m.splice(l, 1))) : void(p[a] = []) },
            trigger: function(a, b) {
                var c;
                if (c = d(this)[a])
                    for (var e = 0; e < c.length; e++)(0, c[e])(b)
            }
        }
    });
    a("rsvp/filter", ["./promise", "./utils", "exports"], function(a, b, d) {
        var g = a["default"],
            h = b.isFunction;
        d["default"] = function(a, b, c) { return g.all(a, c).then(function(a) { if (!h(b)) throw new TypeError("You must pass a function as filter's second argument."); for (var d = a.length, e = Array(d), f = 0; d > f; f++) e[f] = b(a[f]); return g.all(e, c).then(function(b) { for (var c = Array(d), e = 0, f = 0; d > f; f++) !0 === b[f] && (c[e] = a[f], e++); return c.length = e, c }) }) }
    });
    a("rsvp/hash-settled", ["./promise", "./utils", "exports"], function(a, b, d) {
        var g = a["default"],
            h = b.isNonThenable,
            m = b.keysOf;
        d["default"] = function(a) {
            return new g(function(b) {
                function c(a) { return function(b) { e(a, { state: "fulfilled", value: b }) } }

                function d(a) { return function(b) { e(a, { state: "rejected", reason: b }) } }

                function e(a, c) {
                    w[a] = c;
                    0 === --x && b(w)
                }
                var f, t, w = {},
                    y = m(a),
                    x = y.length;
                if (0 === x) return void b(w);
                for (var v = 0; v < y.length; v++) t = y[v], f = a[t], h(f) ? e(t, { state: "fulfilled", value: f }) : g.resolve(f).then(c(t), d(t))
            })
        }
    });
    a("rsvp/hash", ["./promise", "./utils", "exports"], function(a, b, d) {
        var g = a["default"],
            h = b.isNonThenable,
            m = b.keysOf;
        d["default"] = function(a) {
            return new g(function(b, c) {
                function d(a) {
                    return function(c) {
                        w[a] = c;
                        0 === --x && b(w)
                    }
                }

                function e(a) {
                    x = 0;
                    c(a)
                }
                var f, t, w = {},
                    y = m(a),
                    x = y.length;
                if (0 === x) return void b(w);
                for (var v = 0; v < y.length; v++) t = y[v], f = a[t], h(f) ? (w[t] = f, 0 === --x && b(w)) : g.resolve(f).then(d(t), e)
            })
        }
    });
    a("rsvp/instrument", ["./config", "./utils", "exports"], function(a, b, d) {
        var g = a.config,
            h = b.now;
        d["default"] = function(a, b, c) { try { g.trigger(a, { guid: b._guidKey + b._id, eventName: a, detail: b._detail, childGuid: c && b._guidKey + c._id, label: b._label, timeStamp: h(), stack: Error(b._label).stack }) } catch (d) { setTimeout(function() { throw d; }, 0) } }
    });
    a("rsvp/map", ["./promise", "./utils", "exports"], function(a, b, d) {
        var g = a["default"],
            h = (b.isArray, b.isFunction);
        d["default"] = function(a, b, c) { return g.all(a, c).then(function(a) { if (!h(b)) throw new TypeError("You must pass a function as map's second argument."); for (var d = a.length, e = Array(d), f = 0; d > f; f++) e[f] = b(a[f]); return g.all(e, c) }) }
    });
    a("rsvp/node", ["./promise", "./utils", "exports"], function(a, b, d) {
        var g = a["default"],
            h = b.isArray;
        d["default"] = function(a, b) {
            function c() {
                for (var f = arguments.length, h = Array(f), p = 0; f > p; p++) h[p] = arguments[p];
                var w;
                return d || e || !b ? w = this : (console.warn('Deprecation: RSVP.denodeify() doesn\'t allow setting the "this" binding anymore. Use yourFunction.bind(yourThis) instead.'), w = b), g.all(h).then(function(c) {
                    return new g(function(f, g) {
                        c.push(function() {
                            for (var a = arguments.length, c = Array(a), h = 0; a > h; h++) c[h] = arguments[h];
                            a = c[0];
                            h = c[1];
                            if (a) g(a);
                            else if (d) f(c.slice(1));
                            else if (e) {
                                for (var a = {}, n = c.slice(1), h = 0; h < b.length; h++) c = b[h], a[c] = n[h];
                                f(a)
                            } else f(h)
                        });
                        a.apply(w, c)
                    })
                })
            }
            var d = !0 === b,
                e = h(b);
            return c.__proto__ = a, c
        }
    });
    a("rsvp/promise", "./config ./events ./instrument ./utils ./promise/cast ./promise/all ./promise/race ./promise/resolve ./promise/reject exports".split(" "), function(a, b, d, g, h, m, l, p, k, q) {
        function r() {}

        function n(a, b) {
            if (!M(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            if (!(this instanceof n)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._id = H++;
            this._label = b;
            this._subscribers = [];
            E.instrument && O("created", this);
            r !== a && t(a, this)
        }

        function t(a, b) {
            function c(a) { z(b, a) }

            function d(a) { A(b, a) }
            try { a(c, d) } catch (e) { d(e) }
        }

        function w(a, b, c, d) {
            a = a._subscribers;
            var e = a.length;
            a[e] = b;
            a[e + da] = c;
            a[e + ba] = d
        }

        function y(a, b) {
            var c, d, e = a._subscribers,
                f = a._detail;
            E.instrument && O(b === da ? "fulfilled" : "rejected", a);
            for (var g = 0; g < e.length; g += 3) c = e[g], d = e[g + b], x(b, c, d, f);
            a._subscribers = null
        }

        function x(a, b, c, d) {
            var e, f, g, h, k = M(c);
            if (k) try { e = c(d), g = !0 } catch (l) { h = !0, f = l } else e = d, g = !0;
            v(b, e) || (k && g ? z(b, e) : h ? A(b, f) : a === da ? z(b, e) : a === ba && A(b, e))
        }

        function v(a, b) { var c, d = null; try { if (a === b) throw new TypeError("A promises callback cannot return that same promise."); if (K(b) && (d = b.then, M(d))) return d.call(b, function(d) { return c ? !0 : (c = !0, void(b !== d ? z(a, d) : u(a, d))) }, function(b) { return c ? !0 : (c = !0, void A(a, b)) }, "Settle: " + (a._label || " unknown promise")), !0 } catch (e) { return c ? !0 : (A(a, e), !0) } return !1 }

        function z(a, b) { a === b ? u(a, b) : v(a, b) || u(a, b) }

        function u(a, b) { a._state === D && (a._state = X, a._detail = b, E.async(B, a)) }

        function A(a, b) { a._state === D && (a._state = X, a._detail = b, E.async(C, a)) }

        function B(a) { y(a, a._state = da) }

        function C(a) {
            a._onerror && a._onerror(a._detail);
            y(a, a._state = ba)
        }
        var E = a.config,
            O = (b["default"], d["default"]),
            K = g.objectOrFunction,
            M = g.isFunction;
        a = g.now;
        h = h["default"];
        m = m["default"];
        l = l["default"];
        p = p["default"];
        k = k["default"];
        a = "rsvp_" + a() + "-";
        var H = 0;
        q["default"] = n;
        n.cast = h;
        n.all = m;
        n.race = l;
        n.resolve = p;
        n.reject = k;
        var D = void 0,
            X = 0,
            da = 1,
            ba = 2;
        n.prototype = {
            constructor: n,
            _id: void 0,
            _guidKey: a,
            _label: void 0,
            _state: void 0,
            _detail: void 0,
            _subscribers: void 0,
            _onerror: function(a) { E.trigger("error", a) },
            then: function(a, b, c) {
                var d = this;
                this._onerror = null;
                var e = new this.constructor(r, c);
                if (this._state) {
                    var f = arguments;
                    E.async(function() { x(d._state, e, f[d._state - 1], d._detail) })
                } else w(this, e, a, b);
                return E.instrument && O("chained", d, e), e
            },
            "catch": function(a, b) { return this.then(null, a, b) },
            "finally": function(a, b) { var c = this.constructor; return this.then(function(b) { return c.resolve(a()).then(function() { return b }) }, function(b) { return c.resolve(a()).then(function() { throw b; }) }, b) }
        }
    });
    a("rsvp/promise/all", ["../utils", "exports"], function(a, b) {
        var d = a.isArray,
            g = a.isNonThenable;
        b["default"] = function(a, b) {
            var c = this;
            return new c(function(b, e) {
                function m(a) {
                    return function(c) {
                        w[a] = c;
                        0 === --t && b(w)
                    }
                }

                function r(a) {
                    t = 0;
                    e(a)
                }
                if (!d(a)) throw new TypeError("You must pass an array to all.");
                var n, t = a.length,
                    w = Array(t);
                if (0 === t) return void b(w);
                for (var y = 0; y < a.length; y++) n = a[y], g(n) ? (w[y] = n, 0 === --t && b(w)) : c.resolve(n).then(m(y), r)
            }, b)
        }
    });
    a("rsvp/promise/cast", ["exports"], function(a) { a["default"] = function(a, b) { return a && "object" == typeof a && a.constructor === this ? a : new this(function(b) { b(a) }, b) } });
    a("rsvp/promise/race", ["../utils", "exports"], function(a, b) {
        var d = a.isArray,
            g = (a.isFunction, a.isNonThenable);
        b["default"] = function(a, b) {
            var c, e = this;
            return new e(function(b, m) {
                function r(a) { t && (t = !1, b(a)) }

                function n(a) { t && (t = !1, m(a)) }
                if (!d(a)) throw new TypeError("You must pass an array to race.");
                for (var t = !0, w = 0; w < a.length; w++) {
                    if (c = a[w], g(c)) return t = !1, void b(c);
                    e.resolve(c).then(r, n)
                }
            }, b)
        }
    });
    a("rsvp/promise/reject", ["exports"], function(a) { a["default"] = function(a, b) { return new this(function(b, c) { c(a) }, b) } });
    a("rsvp/promise/resolve", ["exports"], function(a) { a["default"] = function(a, b) { return a && "object" == typeof a && a.constructor === this ? a : new this(function(b) { b(a) }, b) } });
    a("rsvp/race", ["./promise", "exports"], function(a, b) {
        var d = a["default"];
        b["default"] = function(a, b) { return d.race(a, b) }
    });
    a("rsvp/reject", ["./promise", "exports"], function(a, b) {
        var d = a["default"];
        b["default"] = function(a, b) { return d.reject(a, b) }
    });
    a("rsvp/resolve", ["./promise", "exports"], function(a, b) {
        var d = a["default"];
        b["default"] = function(a, b) { return d.resolve(a, b) }
    });
    a("rsvp/rethrow", ["exports"], function(a) { a["default"] = function(a) { throw setTimeout(function() { throw a; }), a; } });
    a("rsvp/utils", ["exports"], function(a) {
        function b(a) { return "function" == typeof a || "object" == typeof a && null !== a } a.objectOrFunction = b;
        a.isFunction = function(a) { return "function" == typeof a };
        a.isNonThenable = function(a) { return !b(a) };
        a.isArray = Array.isArray ? Array.isArray : function(a) { return "[object Array]" === Object.prototype.toString.call(a) };
        a.now = Date.now || function() { return (new Date).getTime() };
        a.keysOf = Object.keys || function(a) {
            var b = [],
                c;
            for (c in a) b.push(c);
            return b
        }
    });
    a("rsvp", "./rsvp/promise ./rsvp/events ./rsvp/node ./rsvp/all ./rsvp/all-settled ./rsvp/race ./rsvp/hash ./rsvp/hash-settled ./rsvp/rethrow ./rsvp/defer ./rsvp/config ./rsvp/map ./rsvp/resolve ./rsvp/reject ./rsvp/filter ./rsvp/asap exports".split(" "), function(a, b, d, g, h, m, l, p, k, q, r, n, t, w, y, x, v) {
        function z() { u.on.apply(u, arguments) } a = a["default"];
        b = b["default"];
        d = d["default"];
        g = g["default"];
        h = h["default"];
        m = m["default"];
        l = l["default"];
        p = p["default"];
        k = k["default"];
        q = q["default"];
        var u = r.config;
        r = r.configure;
        n = n["default"];
        t = t["default"];
        w = w["default"];
        y = y["default"];
        if (u.async = x["default"], "undefined" != typeof window && "object" == typeof window.__PROMISE_INSTRUMENTATION__) {
            x = window.__PROMISE_INSTRUMENTATION__;
            r("instrument", !0);
            for (var A in x) x.hasOwnProperty(A) && z(A, x[A])
        }
        v.Promise = a;
        v.EventTarget = b;
        v.all = g;
        v.allSettled = h;
        v.race = m;
        v.hash = l;
        v.hashSettled = p;
        v.rethrow = k;
        v.defer = q;
        v.denodeify = d;
        v.configure = r;
        v.on = z;
        v.off = function() { u.off.apply(u, arguments) };
        v.resolve = t;
        v.reject = w;
        v.async = function(a, b) { u.async(a, b) };
        v.map = n;
        v.filter = y
    });
    d.RSVP = b("rsvp")
}(window);
pc.promise = { Promise: window.RSVP.Promise, all: window.RSVP.all };
pc.anim = { Animation: pc.Animation, Key: pc.Key, Node: pc.Node, Skeleton: pc.Skeleton };
pc.asset = { ASSET_ANIMATION: "animation", ASSET_AUDIO: "audio", ASSET_IMAGE: "image", ASSET_JSON: "json", ASSET_MODEL: "model", ASSET_MATERIAL: "material", ASSET_TEXT: "text", ASSET_TEXTURE: "texture", ASSET_CUBEMAP: "cubemap", ASSET_SCRIPT: "script" };
pc.audio = { AudioManager: pc.SoundManager, Channel: pc.Channel, Channel3d: pc.Channel3d, Listener: pc.Listener, Sound: pc.Sound };
pc.fw = { Application: pc.Application, Component: pc.Component, ComponentData: pc.ComponentData, ComponentSystem: pc.ComponentSystem, ContentFile: pc.ContentFile, Entity: pc.Entity, FillMode: { NONE: pc.FILLMODE_NONE, FILL_WINDOW: pc.FILLMODE_FILL_WINDOW, KEEP_ASPECT: pc.FILLMODE_KEEP_ASPECT }, Pack: pc.Pack, ResolutionMode: { AUTO: pc.RESOLUTION_AUTO, FIXED: pc.RESOLUTION_FIXED } };
pc.extend(pc.gfx, { drawQuadWithShader: pc.drawQuadWithShader, precalculatedTangents: pc.precalculatedTangents, programlib: pc.programlib, shaderChunks: pc.shaderChunks, ContextCreationError: pc.ContextCreationError, Device: pc.GraphicsDevice, IndexBuffer: pc.IndexBuffer, ProgramLibrary: pc.ProgramLibrary, RenderTarget: pc.RenderTarget, ScopeId: pc.ScopeId, Shader: pc.Shader, ShaderInput: pc.ShaderInput, Texture: pc.Texture, UnsupportedBrowserError: pc.UnsupportedBrowserError, VertexBuffer: pc.VertexBuffer, VertexFormat: pc.VertexFormat, VertexIterator: pc.VertexIterator });
pc.extend(pc.input, { getTouchTargetCoords: pc.getTouchTargetCoords, Controller: pc.Controller, GamePads: pc.GamePads, Keyboard: pc.Keyboard, KeyboardEvent: pc.KeyboardEvent, Mouse: pc.Mouse, MouseEvent: pc.MouseEvent, Touch: pc.Touch, TouchDevice: pc.TouchDevice, TouchEvent: pc.TouchEvent });
pc.posteffect = { createFullscreenQuad: pc.createFullscreenQuad, drawFullscreenQuad: pc.drawFullscreenQuad, PostEffect: pc.PostEffect, PostEffectQueue: pc.PostEffectQueue };
pc.extend(pc.scene, { partitionSkin: pc.partitionSkin, procedural: { calculateTangents: pc.calculateTangents, createMesh: pc.createMesh, createTorus: pc.createTorus, createCylinder: pc.createCylinder, createCapsule: pc.createCapsule, createCone: pc.createCone, createSphere: pc.createSphere, createPlane: pc.createPlane, createBox: pc.createBox }, BasicMaterial: pc.BasicMaterial, DepthMaterial: pc.DepthMaterial, ForwardRenderer: pc.ForwardRenderer, GraphNode: pc.GraphNode, Material: pc.Material, Command: pc.Command, Mesh: pc.Mesh, MeshInstance: pc.MeshInstance, Model: pc.Model, ParticleEmitter: pc.ParticleEmitter, PhongMaterial: pc.StandardMaterial, Picker: pc.Picker, PickMaterial: pc.PickMaterial, Projection: { ORTHOGRAPHIC: pc.PROJECTION_ORTHOGRAPHIC, PERSPECTIVE: pc.PROJECTION_PERSPECTIVE }, Scene: pc.Scene, Skin: pc.Skin, SkinInstance: pc.SkinInstance });
pc.shape = { Aabb: pc.BoundingBox, Sphere: pc.BoundingSphere, Plane: pc.Plane };
pc.time = { now: pc.now, Timer: pc.Timer };
pc.PhongMaterial = pc.StandardMaterial;
pc.extend(pc.Application.prototype, function() {
    var d = null,
        a = [],
        b = null,
        c = null,
        e = null,
        f = function() {
            this.numLinesAllocated = 128;
            this.mesh = this.vbRam = this.vb = null;
            this.linesUsed = 0;
            this.meshInstance = this.material = null
        };
    f.prototype = {
        init: function(a, b) {
            this.mesh || (this.mesh = new pc.Mesh, this.mesh.primitive[0].type = pc.PRIMITIVE_LINES, this.mesh.primitive[0].base = 0, this.mesh.primitive[0].indexed = !1, this.material = new pc.BasicMaterial, this.material.vertexColors = !0, this.material.blend = !0, this.material.blendType = pc.BLEND_NORMAL, this.material.update());
            for (; this.linesUsed + b > this.numLinesAllocated;) this.vb = null, this.numLinesAllocated *= 2;
            this.vb || (this.vb = new pc.VertexBuffer(a, d, 2 * this.numLinesAllocated, pc.BUFFER_DYNAMIC), this.mesh.vertexBuffer = this.vb, this.vbRam = new DataView(this.vb.lock()), this.meshInstance || (this.meshInstance = new pc.MeshInstance({ worldTransform: pc.Mat4.IDENTITY }, this.mesh, this.material)))
        },
        addLines: function(a, b) {
            for (var c = !!b.length, e = 2 * this.linesUsed * d.size, f, k = 0; k < a.length; k++) this.vbRam.setFloat32(e, a[k].x, !0), e += 4, this.vbRam.setFloat32(e, a[k].y, !0), e += 4, this.vbRam.setFloat32(e, a[k].z, !0), e += 4, f = c ? b[k] : b, this.vbRam.setUint8(e, 255 * f.r), e += 1, this.vbRam.setUint8(e, 255 * f.g), e += 1, this.vbRam.setUint8(e, 255 * f.b), e += 1, this.vbRam.setUint8(e, 255 * f.a), e += 1;
            this.linesUsed += a.length / 2
        },
        finalize: function(a) { 0 < this.linesUsed && (this.vb.setData(this.vbRam.buffer), this.mesh.primitive[0].count = 2 * this.linesUsed, a.push(this.meshInstance), this.linesUsed = 0) }
    };
    return {
        renderMeshInstance: function(a) { this.scene.immediateDrawCalls.push(a) },
        renderMesh: function(a, b, c) {
            a = new pc.MeshInstance({ worldTransform: c }, a, b);
            this.scene.immediateDrawCalls.push(a)
        },
        renderLine: function(a, b, c, d, e) {
            var f = c,
                q = pc.LINEBATCH_WORLD;
            d && ("number" === typeof d ? q = d : (f = d, e && (q = e)));
            this._addLines(q, [a, b], [c, f])
        },
        renderLines: function(a, b, c) {
            void 0 === c && (c = pc.LINEBATCH_WORLD);
            b.length && a.length !== b.length ? pc.log.error("renderLines: position/color arrays have different lengths") : 0 !== a.length % 2 ? pc.log.error("renderLines: array length is not divisible by 2") : this._addLines(c, a, b)
        },
        renderQuad: function(a, c, d) {
            if (!b) {
                var e = new pc.VertexFormat(this.graphicsDevice, [{ semantic: pc.SEMANTIC_POSITION, components: 3, type: pc.ELEMENTTYPE_FLOAT32 }]),
                    e = new pc.VertexBuffer(this.graphicsDevice, e, 4),
                    f = new pc.VertexIterator(e);
                f.element[pc.SEMANTIC_POSITION].set(-.5, -.5, 0);
                f.next();
                f.element[pc.SEMANTIC_POSITION].set(.5, -.5, 0);
                f.next();
                f.element[pc.SEMANTIC_POSITION].set(-.5, .5, 0);
                f.next();
                f.element[pc.SEMANTIC_POSITION].set(.5, .5, 0);
                f.end();
                b = new pc.Mesh;
                b.vertexBuffer = e;
                b.primitive[0].type = pc.PRIMITIVE_TRISTRIP;
                b.primitive[0].base = 0;
                b.primitive[0].count = 4;
                b.primitive[0].indexed = !1
            }
            a = new pc.MeshInstance({ worldTransform: a }, b, c);
            d && (a.layer = d);
            this.scene.immediateDrawCalls.push(a)
        },
        renderWireCube: function(a, b, d) {
            void 0 === d && (d = pc.LINEBATCH_WORLD);
            var f;
            c || (c = [new pc.Vec3(-.5, -.5, -.5), new pc.Vec3(-.5, .5, -.5), new pc.Vec3(.5, .5, -.5), new pc.Vec3(.5, -.5, -.5), new pc.Vec3(-.5, -.5, .5), new pc.Vec3(-.5, .5, .5), new pc.Vec3(.5, .5, .5), new pc.Vec3(.5, -.5, .5)], e = [new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3, new pc.Vec3]);
            for (f = 0; 8 > f; f++) a.transformPoint(c[f], e[f]);
            this.renderLines([e[0], e[1], e[1], e[2], e[2], e[3], e[3], e[0], e[4], e[5], e[5], e[6], e[6], e[7], e[7], e[4], e[0], e[4], e[1], e[5], e[2], e[6], e[3], e[7]], b, d)
        },
        _addLines: function(b, c, e) {
            d || (d = new pc.VertexFormat(this.graphicsDevice, [{ semantic: pc.SEMANTIC_POSITION, components: 3, type: pc.ELEMENTTYPE_FLOAT32 }, { semantic: pc.SEMANTIC_COLOR, components: 4, type: pc.ELEMENTTYPE_UINT8, normalize: !0 }]), this.on("prerender", this._preRenderImmediate, this));
            a[b] ? a[b].init(this.graphicsDevice, c.length / 2) : (a[b] = new f, a[b].init(this.graphicsDevice, c.length / 2), b === pc.LINEBATCH_OVERLAY ? (a[b].material.depthTest = !1, a[b].meshInstance.layer = pc.LAYER_GIZMO) : b === pc.LINEBATCH_GIZMO && (a[b].meshInstance.layer = pc.LAYER_GIZMO));
            a[b].addLines(c, e)
        },
        _preRenderImmediate: function() { for (var b = 0; 3 > b; b++) a[b] && a[b].finalize(this.scene.immediateDrawCalls) }
    }
}());
pc.extend(pc, function() {
    function d(a, b, c, e) {
        if (a.enabled) {
            var f;
            if (a.model && a.model.model && a.model.enabled && (e && e.push(a), a.model.data.lightmapped && b)) {
                var g = !0,
                    h = a.model.model.meshInstances;
                for (f = 0; f < h.length; f++)
                    if (!h[f].mesh.vertexBuffer.format.hasUv1) { g = !1; break } if (g) {
                    var l, m = [];
                    for (f = 0; f < h.length; f++) {
                        l = !1;
                        for (g = 0; g < h.length; g++) f !== g && h[f].mesh === h[g].mesh && (l = !0);
                        l ? (b.push(a), c.push([h[f]])) : m.push(h[f])
                    }
                    0 < m.length && (b.push(a), c.push(m))
                }
            }
            a = a.getChildren();
            for (f = 0; f < a.length; f++) d(a[f], b, c, e)
        }
    }
    var a = [],
        b = [],
        c, e = new pc.Vec3,
        f = new pc.BoundingBox,
        g = new pc.BoundingBox,
        h = {},
        m, l = function(a, b, c, d, e) {
            this.device = a;
            this.root = b;
            this.scene = c;
            this.renderer = d;
            this.assets = e;
            this._stats = { renderPasses: 0, lightmapCount: 0, lightmapMem: 0, totalRenderTime: 0, forwardTime: 0, fboTime: 0, shadowMapTime: 0, compileTime: 0, shadersLinked: 0 }
        };
    l.prototype = {
        calculateLightmapSize: function(a, b) {
            var c = this.scene.lightmapSizeMultiplier || 16,
                d, f = 1,
                g = 1,
                h = 1,
                l = 1;
            a.model.asset ? (d = this.assets.get(a.model.asset).data, d.area && (f = d.area.x, g = d.area.y, h = d.area.z, l = d.area.uv)) : a.model._area && (d = a.model, d._area && (f = d._area.x, g = d._area.y, h = d._area.z, l = d._area.uv));
            d = a.model.lightmapSizeMultiplier || 1;
            f *= d;
            g *= d;
            h *= d;
            e.copy(a.getLocalScale());
            for (d = a.getParent(); d;) e.mul(d.getLocalScale()), d = d.getParent();
            f = f * e.y * e.z + g * e.x * e.z + h * e.x * e.y;
            f = Math.sqrt(f / l);
            return Math.min(pc.math.nextPowerOfTwo(f * c), this.scene.lightmapMaxResolution || 2048)
        },
        bake: function(l) {
            var k, q, r = this.device,
                n = this.scene,
                t = this._stats,
                w = [],
                y = [];
            if (l) {
                for (k = 0; k < a.length; k++)
                    for (k = q; q < l.length; q++) b[k] === l[q] && a[k].destroy();
                a = [];
                b = [];
                var x = [];
                for (k = 0; k < l.length; k++) d(l[k], x, y);
                l = x;
                d(this.root, null, null, w)
            } else {
                for (k = 0; k < a.length; k++) a[k].destroy();
                a = [];
                b = [];
                l = [];
                d(this.root, l, y, w)
            }
            if (0 !== l.length) {
                var v = [],
                    x = [],
                    z = {},
                    u, A;
                for (k = 0; k < l.length; k++) u = this.calculateLightmapSize(l[k], y[k]), v.push(u), A = new pc.Texture(r, { width: u, height: u, format: pc.PIXELFORMAT_R8_G8_B8_A8, autoMipmap: !1, rgbm: !0 }), A.addressU = pc.ADDRESS_CLAMP_TO_EDGE, A.addressV = pc.ADDRESS_CLAMP_TO_EDGE, A._minFilter = pc.FILTER_LINEAR, A._magFilter = pc.FILTER_LINEAR, x.push(A), t.lightmapMem += u * u * 4, z[u] || (A = new pc.Texture(r, { width: u, height: u, format: pc.PIXELFORMAT_R8_G8_B8_A8, autoMipmap: !1, rgbm: !0 }), A.addressU = pc.ADDRESS_CLAMP_TO_EDGE, A.addressV = pc.ADDRESS_CLAMP_TO_EDGE, A._minFilter = pc.FILTER_LINEAR, A._magFilter = pc.FILTER_LINEAR, A = new pc.RenderTarget(r, A, { depth: !1 }), z[u] = A);
                v = [];
                u = [];
                A = [];
                var B = [],
                    C = n._lights,
                    E;
                for (k = 0; k < C.length; k++) C[k]._enabled && (E = C[k].mask, 0 !== (E & 4) && (u.push(E), A.push(C[k].shadowUpdateMode), C[k].setMask(4294967295), C[k].shadowUpdateMode = C[k].getType() === pc.LIGHTTYPE_DIRECTIONAL ? pc.SHADOWUPDATE_REALTIME : pc.SHADOWUPDATE_THISFRAME, v.push(C[k]))), B.push(C[k]._enabled), C[k].setEnabled(!1);
                k = pc.shaderChunks;
                var O = k.transformUv1VS,
                    K = k.bakeLmEndPS;
                E = k.createShaderFromCode(r, k.fullscreenQuadVS, k.dilatePS, "lmDilate");
                var M = r.scope.resolve("source"),
                    H = r.scope.resolve("pixelOffset"),
                    D = n.drawCalls;
                for (k = 0; k < D.length; k++) D[k].node && D[k].node.getWorldTransform();
                var D = n.fog,
                    X = n.ambientLight.r,
                    da = n.ambientLight.g,
                    ba = n.ambientLight.b,
                    ya = n.drawCalls;
                n.fog = pc.FOG_NONE;
                n.ambientLight.r = 0;
                n.ambientLight.g = 0;
                n.ambientLight.b = 0;
                c || (c = new pc.Camera, c._node = new pc.GraphNode, c.setClearOptions({ color: [0, 0, 0, 0], depth: 1, flags: pc.CLEARFLAG_COLOR }), c.frustumCulling = !1);
                var G, Q, J, I;
                for (G = 0; G < w.length; G++)
                    for (Q = w[G].model.model.meshInstances, k = 0; k < Q.length; k++) Q[k]._shaderDefs &= ~pc.SHADERDEF_LM;
                var za = [];
                for (G = 0; G < w.length; G++) za[G] = w[G].model.castShadows, w[G].model.castShadows = w[G].model.data.castShadowsLightmap;
                var L = [],
                    gb = [],
                    Z = [],
                    W;
                n.updateShadersFunc(r);
                for (G = 0; G < l.length; G++)
                    for (Q = y[G], k = 0; k < Q.length; k++) J = Q[k].material, L.push(J);
                m || (m = new pc.StandardMaterial, m.chunks.transformVS = O, m.chunks.endPS = K, m.ambient = new pc.Color(0, 0, 0), m.ambientTint = !0, m.chunks.outputAlphaPS = "\n", m.chunks.outputAlphaOpaquePS = "\n", m.chunks.outputAlphaPremulPS = "\n", m.cull = pc.CULLFACE_NONE, m.forceUv1 = !0, m.update(), m.updateShader(r, n));
                for (G = 0; G < l.length; G++) {
                    Q = y[G];
                    O = x[G];
                    if (0 < Q.length)
                        for (f.copy(Q[0].aabb), k = 0; k < Q.length; k++) Q[k].node.getWorldTransform(), f.add(Q[k].aabb);
                    k = new pc.BoundingBox;
                    k.copy(f);
                    gb.push(k);
                    for (k = 0; k < Q.length; k++) I = Q[k], I._shaderDefs &= ~pc.SHADERDEF_LM, I.mask = 4, I.deleteParameter("texture_lightMap"), I.material = m;
                    K = new pc.RenderTarget(r, O, { depth: !1 });
                    Z.push(K)
                }
                for (q = 0; q < v.length; q++) v[q].setEnabled(!1);
                for (k = 0; k < v.length; k++) {
                    v[k].setEnabled(!0);
                    v[k]._cacheShadowMap = !0;
                    v[k].getType() !== pc.LIGHTTYPE_DIRECTIONAL && (v[k]._node.getWorldTransform(), v[k].getBoundingSphere(h), g.center = h.center, g.halfExtents.x = h.radius, g.halfExtents.y = h.radius, g.halfExtents.z = h.radius);
                    v[k].getType() === pc.LIGHTTYPE_SPOT && (G = v[k], W = this.renderer.getShadowCamera(r, G), W._node.setPosition(G._node.getPosition()), W._node.setRotation(G._node.getRotation()), W._node.rotateLocal(-90, 0, 0), W.setProjection(pc.PROJECTION_PERSPECTIVE), W.setNearClip(G.getAttenuationEnd() / 1E3), W.setFarClip(G.getAttenuationEnd()), W.setAspectRatio(1), W.setFov(2 * G.getOuterConeAngle()), this.renderer.updateCameraFrustum(W));
                    for (G = 0; G < l.length; G++) {
                        Q = y[G];
                        O = x[G];
                        f = gb[G];
                        K = Z[G];
                        I = z[O.width];
                        J = I.colorBuffer;
                        n.drawCalls = [];
                        for (q = 0; q < Q.length; q++) n.drawCalls.push(Q[q]);
                        n.updateShaders = !0;
                        if (v[k].getType() === pc.LIGHTTYPE_DIRECTIONAL) e.copy(f.center), e.y += f.halfExtents.y, c._node.setPosition(e), c._node.setEulerAngles(-90, 0, 0), q = Math.max(f.halfExtents.x, f.halfExtents.z), c.setProjection(pc.PROJECTION_ORTHOGRAPHIC), c.setNearClip(0), c.setFarClip(2 * f.halfExtents.y), c.setAspectRatio(1), c.setOrthoHeight(q);
                        else if (!g.intersects(f)) continue;
                        if (v[k].getType() === pc.LIGHTTYPE_SPOT) {
                            var Ia = !1;
                            for (q = 0; q < Q.length; q++)
                                if (this.renderer._isVisible(W, Q[q])) { Ia = !0; break } if (!Ia) continue
                        }
                        c.setRenderTarget(I);
                        this.renderer.render(n, c);
                        t.shadowMapTime += this.renderer._shadowMapTime;
                        t.forwardTime += this.renderer._forwardTime;
                        t.renderPasses++;
                        x[G] = J;
                        Z[G] = I;
                        z[O.width] = K;
                        for (q = 0; q < Q.length; q++) I = Q[q], I.setParameter("texture_lightMap", J), I._shaderDefs |= pc.SHADERDEF_LM
                    }
                    v[k].setEnabled(!1);
                    v[k]._cacheShadowMap = !1
                }
                for (G = t = 0; G < l.length; G++) {
                    Q = y[G];
                    O = x[G];
                    K = Z[G];
                    I = z[O.width];
                    J = I.colorBuffer;
                    W = new pc.Vec2(1 / O.width, 1 / O.height);
                    H.setValue(W.data);
                    for (k = 0; 4 > k; k++) M.setValue(O), pc.drawQuadWithShader(r, I, E), M.setValue(J), pc.drawQuadWithShader(r, K, E);
                    for (k = 0; k < Q.length; k++) I = Q[k], I.mask = 2, Q[k].material = L[t], Q[k].setParameter("texture_lightMap", O), t++;
                    a.push(O);
                    b.push(l[G]);
                    K.destroy()
                }
                for (var T in z) z.hasOwnProperty(T) && (z[T].colorBuffer.destroy(), z[T].destroy());
                for (G = 0; G < w.length; G++) w[G].model.castShadows = za[G];
                for (k = 0; k < v.length; k++) v[k].setMask(u[k]), v[k].shadowUpdateMode = A[k];
                for (k = 0; k < C.length; k++) C[k].setEnabled(B[k]);
                n.drawCalls = ya;
                n.fog = D;
                n.ambientLight.r = X;
                n.ambientLight.g = da;
                n.ambientLight.b = ba
            }
        }
    };
    return { Lightmapper: l, MASK_DYNAMIC: 1, MASK_BAKED: 2, MASK_LIGHTMAP: 4 }
}());
var BASE_PATH;
if (jsembed) { BASE_PATH = jsembed.baseUrl(); } else { BASE_PATH = ""; }
var SCENE_PATH = BASE_PATH + "379005.json";
var windowHeightDifference = 0;
var previousInnerHeight = 0;
(function() {
    var CONFIG_FILENAME = "";
    if (navigator.isCocoonJS) { CONFIG_FILENAME = BASE_PATH + 'config2.json'; } else { CONFIG_FILENAME = BASE_PATH + 'config.json'; }
    var CANVAS_ID = 'application-canvas';
    var canvas, devices, app;
    var createCanvas = function() {
        canvas = document.createElement('canvas');
        canvas.setAttribute('id', CANVAS_ID);
        canvas.setAttribute('tabindex', 0);
        canvas.onselectstart = function() { return false; };
        var target = document.getElementById("embedtarget");
        if (!target) { target = document.getElementById("embedTarget"); }
        target.appendChild(canvas);
        return canvas;
    };
    var createInputDevices = function(canvas) {
        var devices = { keyboard: new pc.Keyboard(window), mouse: new pc.Mouse(canvas), gamepads: new pc.GamePads(), };
        if ('ontouchstart' in window) { devices.touch = new pc.TouchDevice(canvas); }
        return devices;
    };
    var configureCss = function(fillMode, width, height) { if (canvas.classList) { canvas.classList.add('fill-mode-' + fillMode); } };
    var canvasScale = 0;
    var getBrowserWidth = function() {
        if (window.innerWidth) { width = window.innerWidth; } else if (document.documentElement && document.documentElement.clientWidth != 0) { width = document.documentElement.clientWidth; } else if (document.body) { width = document.body.clientWidth; }
        return width;
    };
    var getBrowserHeight = function() {
        if (window.innerHeight) { return window.innerHeight; }
        if (document.documentElement && document.documentElement.clientHeight != 0) { return document.documentElement.clientHeight; }
        if (document.body) { return document.body.clientHeight; }
        return 0;
    };
    var adjustHeight = function() {
        if (!navigator.isCocoonJS && app.touch) {
            var htmlStyle = document.documentElement.style;
            htmlStyle.overflow = "visible";
            window.scrollTo(1, 0);
            setTimeout(function() { htmlStyle.height = window.innerHeight + "px"; }, 100);
        }
    };
    var embedtarget = document.getElementById("embedtarget");
    var reflow = function() {
        setTimeout(function() {
            var canvasScale = jsembed.canvasScale();
            canvas.style.width = 960 * canvasScale + 'px';
            canvas.style.height = 560 * canvasScale + 'px';
            adjustHeight();
        }, 200);
    };
    var displayError = function(html) {
        var div = document.createElement('div');
        div.innerHTML = ['<table style="background-color: #8CE; width: 100%; height: 100%;">', '  <tr>', '      <td align="center">', '          <div style="display: table-cell; vertical-align: middle;">', '              <div style="">' + html + '</div>', '          </div>', '      </td>', '  </tr>', '</table>'].join('\n');
        document.body.appendChild(div);
    };
    canvas = createCanvas();
    devices = createInputDevices(canvas);
    try { app = new pc.Application(canvas, { keyboard: devices.keyboard, mouse: devices.mouse, gamepads: devices.gamepads, touch: devices.touch }); } catch (e) {
        if (e instanceof pc.UnsupportedBrowserError) {
            displayError('This page requires a browser that supports WebGL.<br/>' +
                '<a href="http://get.webgl.org">Click here to find out more.</a>');
        } else if (e instanceof pc.ContextCreationError) {
            displayError("It doesn't appear your computer can support WebGL.<br/>" +
                '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>');
        } else { displayError('Could not initialize application. Error: ' + e); }
        return;
    }
    app.configure(CONFIG_FILENAME, function(err) {
        if (err) { console.error(err); }
        configureCss(app._fillMode, app._width, app._height);
        reflow();
        app.preload(function(err) {
            if (err) { console.error(err); }
            app.loadScene(SCENE_PATH, function(err, scene) {
                if (err) { console.error(err); }
                app.start();
            });
        });
    });
    window.addEventListener('resize', reflow, false);
}());

pc.script.createLoadingScreen(function(app) {
    app.assets.prefix = BASE_PATH.substring(0, BASE_PATH.length - 1);
    app.systems.script._prefix = BASE_PATH.substring(0, BASE_PATH.length - 1);
    var toMIME = { '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.wav': 'audio/x-wav' };
    var audio = new Audio();
    if (audio.canPlayType(toMIME[".ogg"]) !== '') { AUDIO_TYPE = "ogg"; } else { AUDIO_TYPE = "mp3"; }
    var progressBar;
    var fillingBar;
    var bar;
    var container;
    var showSplash = function() {
        var redirectUrl = "#";
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        document.body.appendChild(splash);
        container = document.createElement('img');
        container.id = 'progress-container';
        container.src = BASE_PATH + progressBar.file.url;
        splash.appendChild(container);
        bar = document.createElement('img');
        bar.id = 'progress-bar';
        bar.src = BASE_PATH + fillingBar.file.url;
        splash.appendChild(bar);
    };
    var hideSplash = function() {
        if (window.nick_sdk_client) { nick_sdk_client.GameEventEmitter.sendGameEvent(nick_sdk_client.GameEventEmitter.ON_LOADING_END); }
        var splash = document.getElementById('application-splash');
        splash.parentElement.removeChild(splash);
    };
    var setProgress = function(value) {
        if (!container || !bar) { return; }
        var w = container.width;
        var pw = w / 317;
        value = Math.min(1, Math.max(0, value));
        value *= w;
        var newRect = "rect(0px " + value + "px " + pw * 49 + "px 0px)";
        bar.style.clip = newRect;
    };
    var createCss = function() {
        var css = ['#application-splash {', '    position:absolute;', '    top: 50%;', '    left: 50%;', '    resize: both;', '    width : 50%;', '    height : auto;', '    transform: translate(-50%, -50%);', '}', '#progress-container {', '    width: 100%;', '    height: auto;', '}', '#progress-bar {', '    width: 100%;', '    height: auto;', '    position:absolute;', '    top:22%;', '    left:0%;', '    z-index: 2;', '    clip: Rect(0px, 100px, 49px, 0px);', '}'].join('\n');
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) { style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); }
        document.head.appendChild(style);
    };
    app.on("preload:start", function() {
        var count = 0;
        progressBar = app.assets.get("3443122");
        fillingBar = app.assets.get("3443121");
        progressBar.ready(function() { count += 1; if (count === 2) {} });
        fillingBar.ready(function() { count += 1; if (count === 2) {} });
        var audios = app.assets.findByTag("Title_" + AUDIO_TYPE);
        for (var i = 0; i < audios.length; i++) { audios[i].preload = true; }
        showSplash();
        createCss();
    });
    app.on("preload:end", function() { app.off("preload:progress"); });
    app.on("preload:progress", setProgress);
    app.on("start", hideSplash);
});