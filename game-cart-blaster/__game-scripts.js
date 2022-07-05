// playcanvas-spine.min.js
/* Copyright 2015-2019 PlayCanvas Ltd */
var spine, __extends = this && this.__extends || function() {
    var r = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(t, e) {
        t.__proto__ = e
    } || function(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
    };
    return function(t, e) {
        function n() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
}();
! function(D) {
    var L, t, g, e, n, r, Y = (i.prototype.apply = function(t, e, n, r, i, a, s, o) {
        if (null == t) throw new Error("skeleton cannot be null.");
        r && 0 != this.duration && (n %= this.duration, 0 < e && (e %= this.duration));
        for (var h = this.timelines, l = 0, u = h.length; l < u; l++) h[l].apply(t, e, n, i, a, s, o)
    }, i.binarySearch = function(t, e, n) {
        void 0 === n && (n = 1);
        var r = 0,
            i = t.length / n - 2;
        if (0 == i) return n;
        for (var a = i >>> 1;;) {
            if (t[(a + 1) * n] <= e ? r = a + 1 : i = a, r == i) return (r + 1) * n;
            a = r + i >>> 1
        }
    }, i.linearSearch = function(t, e, n) {
        for (var r = 0, i = t.length - n; r <= i; r += n)
            if (t[r] > e) return r;
        return -1
    }, i);

    function i(t, e, n) {
        if (null == t) throw new Error("name cannot be null.");
        if (null == e) throw new Error("timelines cannot be null.");
        this.name = t, this.timelines = e, this.duration = n
    }
    D.Animation = Y, (t = L = D.MixPose || (D.MixPose = {}))[t.setup = 0] = "setup", t[t.current = 1] = "current", t[t.currentLayered = 2] = "currentLayered", (e = g = D.MixDirection || (D.MixDirection = {}))[e.in = 0] = "in", e[e.out = 1] = "out", (r = n = D.TimelineType || (D.TimelineType = {}))[r.rotate = 0] = "rotate", r[r.translate = 1] = "translate", r[r.scale = 2] = "scale", r[r.shear = 3] = "shear", r[r.attachment = 4] = "attachment", r[r.color = 5] = "color", r[r.deform = 6] = "deform", r[r.event = 7] = "event", r[r.drawOrder = 8] = "drawOrder", r[r.ikConstraint = 9] = "ikConstraint", r[r.transformConstraint = 10] = "transformConstraint", r[r.pathConstraintPosition = 11] = "pathConstraintPosition", r[r.pathConstraintSpacing = 12] = "pathConstraintSpacing", r[r.pathConstraintMix = 13] = "pathConstraintMix", r[r.twoColor = 14] = "twoColor";
    var a = (y.prototype.getFrameCount = function() {
        return this.curves.length / y.BEZIER_SIZE + 1
    }, y.prototype.setLinear = function(t) {
        this.curves[t * y.BEZIER_SIZE] = y.LINEAR
    }, y.prototype.setStepped = function(t) {
        this.curves[t * y.BEZIER_SIZE] = y.STEPPED
    }, y.prototype.getCurveType = function(t) {
        var e = t * y.BEZIER_SIZE;
        if (e == this.curves.length) return y.LINEAR;
        var n = this.curves[e];
        return n == y.LINEAR ? y.LINEAR : n == y.STEPPED ? y.STEPPED : y.BEZIER
    }, y.prototype.setCurve = function(t, e, n, r, i) {
        var a = .03 * (2 * -e + r),
            s = .03 * (2 * -n + i),
            o = .006 * (3 * (e - r) + 1),
            h = .006 * (3 * (n - i) + 1),
            l = 2 * a + o,
            u = 2 * s + h,
            p = .3 * e + a + .16666667 * o,
            c = .3 * n + s + .16666667 * h,
            d = t * y.BEZIER_SIZE,
            f = this.curves;
        f[d++] = y.BEZIER;
        for (var m = p, g = c, v = d + y.BEZIER_SIZE - 1; d < v; d += 2) f[d] = m, f[d + 1] = g, p += l, c += u, l += o, u += h, m += p, g += c
    }, y.prototype.getCurvePercent = function(t, e) {
        e = D.MathUtils.clamp(e, 0, 1);
        var n = this.curves,
            r = t * y.BEZIER_SIZE,
            i = n[r];
        if (i == y.LINEAR) return e;
        if (i == y.STEPPED) return 0;
        for (var a = 0, s = ++r, o = r + y.BEZIER_SIZE - 1; r < o; r += 2)
            if (e <= (a = n[r])) {
                var h = void 0,
                    l = void 0;
                return (l = r == s ? h = 0 : (h = n[r - 2], n[r - 1])) + (n[r + 1] - l) * (e - h) / (a - h)
            } var u = n[r - 1];
        return u + (1 - u) * (e - a) / (1 - a)
    }, y.LINEAR = 0, y.STEPPED = 1, y.BEZIER = 2, y.BEZIER_SIZE = 19, y);

    function y(t) {
        if (t <= 0) throw new Error("frameCount must be > 0: " + t);
        this.curves = D.Utils.newFloatArray((t - 1) * y.BEZIER_SIZE)
    }
    D.CurveTimeline = a;
    var s, o = (__extends(v, s = a), v.prototype.getPropertyId = function() {
        return (n.rotate << 24) + this.boneIndex
    }, v.prototype.setFrame = function(t, e, n) {
        t <<= 1, this.frames[t] = e, this.frames[t + v.ROTATION] = n
    }, v.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = this.frames,
            h = t.bones[this.boneIndex];
        if (n < o[0]) switch (a) {
            case L.setup:
                return void(h.rotation = h.data.rotation);
            case L.current:
                var l = h.data.rotation - h.rotation;
                l -= 360 * (16384 - (16384.499999999996 - l / 360 | 0)), h.rotation += l * i
        } else if (n >= o[o.length - v.ENTRIES])
            if (a == L.setup) h.rotation = h.data.rotation + o[o.length + v.PREV_ROTATION] * i;
            else {
                var u = h.data.rotation + o[o.length + v.PREV_ROTATION] - h.rotation;
                u -= 360 * (16384 - (16384.499999999996 - u / 360 | 0)), h.rotation += u * i
            }
        else {
            var p = Y.binarySearch(o, n, v.ENTRIES),
                c = o[p + v.PREV_ROTATION],
                d = o[p],
                f = this.getCurvePercent((p >> 1) - 1, 1 - (n - d) / (o[p + v.PREV_TIME] - d)),
                m = o[p + v.ROTATION] - c;
            m = c + (m -= 360 * (16384 - (16384.499999999996 - m / 360 | 0))) * f, a == L.setup ? (m -= 360 * (16384 - (16384.499999999996 - m / 360 | 0)), h.rotation = h.data.rotation + m * i) : (m = h.data.rotation + m - h.rotation, m -= 360 * (16384 - (16384.499999999996 - m / 360 | 0)), h.rotation += m * i)
        }
    }, v.ENTRIES = 2, v.PREV_TIME = -2, v.PREV_ROTATION = -1, v.ROTATION = 1, v);

    function v(t) {
        var e = s.call(this, t) || this;
        return e.frames = D.Utils.newFloatArray(t << 1), e
    }
    D.RotateTimeline = o;
    var h, l = (__extends(f, h = a), f.prototype.getPropertyId = function() {
        return (n.translate << 24) + this.boneIndex
    }, f.prototype.setFrame = function(t, e, n, r) {
        t *= f.ENTRIES, this.frames[t] = e, this.frames[t + f.X] = n, this.frames[t + f.Y] = r
    }, f.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = this.frames,
            h = t.bones[this.boneIndex];
        if (n < o[0]) switch (a) {
            case L.setup:
                return h.x = h.data.x, void(h.y = h.data.y);
            case L.current:
                h.x += (h.data.x - h.x) * i, h.y += (h.data.y - h.y) * i
        } else {
            var l = 0,
                u = 0;
            if (n >= o[o.length - f.ENTRIES]) l = o[o.length + f.PREV_X], u = o[o.length + f.PREV_Y];
            else {
                var p = Y.binarySearch(o, n, f.ENTRIES);
                l = o[p + f.PREV_X], u = o[p + f.PREV_Y];
                var c = o[p],
                    d = this.getCurvePercent(p / f.ENTRIES - 1, 1 - (n - c) / (o[p + f.PREV_TIME] - c));
                l += (o[p + f.X] - l) * d, u += (o[p + f.Y] - u) * d
            }
            a == L.setup ? (h.x = h.data.x + l * i, h.y = h.data.y + u * i) : (h.x += (h.data.x + l - h.x) * i, h.y += (h.data.y + u - h.y) * i)
        }
    }, f.ENTRIES = 3, f.PREV_TIME = -3, f.PREV_X = -2, f.PREV_Y = -1, f.X = 1, f.Y = 2, f);

    function f(t) {
        var e = h.call(this, t) || this;
        return e.frames = D.Utils.newFloatArray(t * f.ENTRIES), e
    }
    D.TranslateTimeline = l;
    var u, p = (__extends(x, u = l), x.prototype.getPropertyId = function() {
        return (n.scale << 24) + this.boneIndex
    }, x.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = this.frames,
            h = t.bones[this.boneIndex];
        if (n < o[0]) switch (a) {
            case L.setup:
                return h.scaleX = h.data.scaleX, void(h.scaleY = h.data.scaleY);
            case L.current:
                h.scaleX += (h.data.scaleX - h.scaleX) * i, h.scaleY += (h.data.scaleY - h.scaleY) * i
        } else {
            var l = 0,
                u = 0;
            if (n >= o[o.length - x.ENTRIES]) l = o[o.length + x.PREV_X] * h.data.scaleX, u = o[o.length + x.PREV_Y] * h.data.scaleY;
            else {
                var p = Y.binarySearch(o, n, x.ENTRIES);
                l = o[p + x.PREV_X], u = o[p + x.PREV_Y];
                var c = o[p],
                    d = this.getCurvePercent(p / x.ENTRIES - 1, 1 - (n - c) / (o[p + x.PREV_TIME] - c));
                l = (l + (o[p + x.X] - l) * d) * h.data.scaleX, u = (u + (o[p + x.Y] - u) * d) * h.data.scaleY
            }
            if (1 == i) h.scaleX = l, h.scaleY = u;
            else {
                var f = 0,
                    m = 0;
                m = a == L.setup ? (f = h.data.scaleX, h.data.scaleY) : (f = h.scaleX, h.scaleY), s == g.out ? (l = Math.abs(l) * D.MathUtils.signum(f), u = Math.abs(u) * D.MathUtils.signum(m)) : (f = Math.abs(f) * D.MathUtils.signum(l), m = Math.abs(m) * D.MathUtils.signum(u)), h.scaleX = f + (l - f) * i, h.scaleY = m + (u - m) * i
            }
        }
    }, x);

    function x(t) {
        return u.call(this, t) || this
    }
    D.ScaleTimeline = p;
    var c, d = (__extends(m, c = l), m.prototype.getPropertyId = function() {
        return (n.shear << 24) + this.boneIndex
    }, m.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = this.frames,
            h = t.bones[this.boneIndex];
        if (n < o[0]) switch (a) {
            case L.setup:
                return h.shearX = h.data.shearX, void(h.shearY = h.data.shearY);
            case L.current:
                h.shearX += (h.data.shearX - h.shearX) * i, h.shearY += (h.data.shearY - h.shearY) * i
        } else {
            var l = 0,
                u = 0;
            if (n >= o[o.length - m.ENTRIES]) l = o[o.length + m.PREV_X], u = o[o.length + m.PREV_Y];
            else {
                var p = Y.binarySearch(o, n, m.ENTRIES);
                l = o[p + m.PREV_X], u = o[p + m.PREV_Y];
                var c = o[p],
                    d = this.getCurvePercent(p / m.ENTRIES - 1, 1 - (n - c) / (o[p + m.PREV_TIME] - c));
                l += (o[p + m.X] - l) * d, u += (o[p + m.Y] - u) * d
            }
            a == L.setup ? (h.shearX = h.data.shearX + l * i, h.shearY = h.data.shearY + u * i) : (h.shearX += (h.data.shearX + l - h.shearX) * i, h.shearY += (h.data.shearY + u - h.shearY) * i)
        }
    }, m);

    function m(t) {
        return c.call(this, t) || this
    }
    D.ShearTimeline = d;
    var w, M = (__extends(E, w = a), E.prototype.getPropertyId = function() {
        return (n.color << 24) + this.slotIndex
    }, E.prototype.setFrame = function(t, e, n, r, i, a) {
        t *= E.ENTRIES, this.frames[t] = e, this.frames[t + E.R] = n, this.frames[t + E.G] = r, this.frames[t + E.B] = i, this.frames[t + E.A] = a
    }, E.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = t.slots[this.slotIndex],
            h = this.frames;
        if (n < h[0]) switch (a) {
            case L.setup:
                return void o.color.setFromColor(o.data.color);
            case L.current:
                var l = o.color,
                    u = o.data.color;
                l.add((u.r - l.r) * i, (u.g - l.g) * i, (u.b - l.b) * i, (u.a - l.a) * i)
        } else {
            var p = 0,
                c = 0,
                d = 0,
                f = 0;
            if (n >= h[h.length - E.ENTRIES]) {
                var m = h.length;
                p = h[m + E.PREV_R], c = h[m + E.PREV_G], d = h[m + E.PREV_B], f = h[m + E.PREV_A]
            } else {
                var g = Y.binarySearch(h, n, E.ENTRIES);
                p = h[g + E.PREV_R], c = h[g + E.PREV_G], d = h[g + E.PREV_B], f = h[g + E.PREV_A];
                var v = h[g],
                    y = this.getCurvePercent(g / E.ENTRIES - 1, 1 - (n - v) / (h[g + E.PREV_TIME] - v));
                p += (h[g + E.R] - p) * y, c += (h[g + E.G] - c) * y, d += (h[g + E.B] - d) * y, f += (h[g + E.A] - f) * y
            }
            1 == i ? o.color.set(p, c, d, f) : (l = o.color, a == L.setup && l.setFromColor(o.data.color), l.add((p - l.r) * i, (c - l.g) * i, (d - l.b) * i, (f - l.a) * i))
        }
    }, E.ENTRIES = 5, E.PREV_TIME = -5, E.PREV_R = -4, E.PREV_G = -3, E.PREV_B = -2, E.PREV_A = -1, E.R = 1, E.G = 2, E.B = 3, E.A = 4, E);

    function E(t) {
        var e = w.call(this, t) || this;
        return e.frames = D.Utils.newFloatArray(t * E.ENTRIES), e
    }
    D.ColorTimeline = M;
    var A, T = (__extends(b, A = a), b.prototype.getPropertyId = function() {
        return (n.twoColor << 24) + this.slotIndex
    }, b.prototype.setFrame = function(t, e, n, r, i, a, s, o, h) {
        t *= b.ENTRIES, this.frames[t] = e, this.frames[t + b.R] = n, this.frames[t + b.G] = r, this.frames[t + b.B] = i, this.frames[t + b.A] = a, this.frames[t + b.R2] = s, this.frames[t + b.G2] = o, this.frames[t + b.B2] = h
    }, b.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = t.slots[this.slotIndex],
            h = this.frames;
        if (n < h[0]) switch (a) {
            case L.setup:
                return o.color.setFromColor(o.data.color), void o.darkColor.setFromColor(o.data.darkColor);
            case L.current:
                var l = o.color,
                    u = o.darkColor,
                    p = o.data.color,
                    c = o.data.darkColor;
                l.add((p.r - l.r) * i, (p.g - l.g) * i, (p.b - l.b) * i, (p.a - l.a) * i), u.add((c.r - u.r) * i, (c.g - u.g) * i, (c.b - u.b) * i, 0)
        } else {
            var d = 0,
                f = 0,
                m = 0,
                g = 0,
                v = 0,
                y = 0,
                x = 0;
            if (n >= h[h.length - b.ENTRIES]) {
                var w = h.length;
                d = h[w + b.PREV_R], f = h[w + b.PREV_G], m = h[w + b.PREV_B], g = h[w + b.PREV_A], v = h[w + b.PREV_R2], y = h[w + b.PREV_G2], x = h[w + b.PREV_B2]
            } else {
                var M = Y.binarySearch(h, n, b.ENTRIES);
                d = h[M + b.PREV_R], f = h[M + b.PREV_G], m = h[M + b.PREV_B], g = h[M + b.PREV_A], v = h[M + b.PREV_R2], y = h[M + b.PREV_G2], x = h[M + b.PREV_B2];
                var E = h[M],
                    A = this.getCurvePercent(M / b.ENTRIES - 1, 1 - (n - E) / (h[M + b.PREV_TIME] - E));
                d += (h[M + b.R] - d) * A, f += (h[M + b.G] - f) * A, m += (h[M + b.B] - m) * A, g += (h[M + b.A] - g) * A, v += (h[M + b.R2] - v) * A, y += (h[M + b.G2] - y) * A, x += (h[M + b.B2] - x) * A
            }
            1 == i ? (o.color.set(d, f, m, g), o.darkColor.set(v, y, x, 1)) : (l = o.color, u = o.darkColor, a == L.setup && (l.setFromColor(o.data.color), u.setFromColor(o.data.darkColor)), l.add((d - l.r) * i, (f - l.g) * i, (m - l.b) * i, (g - l.a) * i), u.add((v - u.r) * i, (y - u.g) * i, (x - u.b) * i, 0))
        }
    }, b.ENTRIES = 8, b.PREV_TIME = -8, b.PREV_R = -7, b.PREV_G = -6, b.PREV_B = -5, b.PREV_A = -4, b.PREV_R2 = -3, b.PREV_G2 = -2, b.PREV_B2 = -1, b.R = 1, b.G = 2, b.B = 3, b.A = 4, b.R2 = 5, b.G2 = 6, b.B2 = 7, b);

    function b(t) {
        var e = A.call(this, t) || this;
        return e.frames = D.Utils.newFloatArray(t * b.ENTRIES), e
    }
    D.TwoColorTimeline = T;
    var R = (I.prototype.getPropertyId = function() {
        return (n.attachment << 24) + this.slotIndex
    }, I.prototype.getFrameCount = function() {
        return this.frames.length
    }, I.prototype.setFrame = function(t, e, n) {
        this.frames[t] = e, this.attachmentNames[t] = n
    }, I.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = t.slots[this.slotIndex];
        if (s != g.out || a != L.setup) {
            var h = this.frames;
            if (n < h[0]) {
                if (a == L.setup) {
                    var l = o.data.attachmentName;
                    o.setAttachment(null == l ? null : t.getAttachment(this.slotIndex, l))
                }
            } else {
                var u = 0;
                u = n >= h[h.length - 1] ? h.length - 1 : Y.binarySearch(h, n, 1) - 1;
                var p = this.attachmentNames[u];
                t.slots[this.slotIndex].setAttachment(null == p ? null : t.getAttachment(this.slotIndex, p))
            }
        } else {
            var c = o.data.attachmentName;
            o.setAttachment(null == c ? null : t.getAttachment(this.slotIndex, c))
        }
    }, I);

    function I(t) {
        this.frames = D.Utils.newFloatArray(t), this.attachmentNames = new Array(t)
    }
    D.AttachmentTimeline = R;
    var S, C = null,
        P = (__extends(_, S = a), _.prototype.getPropertyId = function() {
            return (n.deform << 27) + +this.attachment.id + this.slotIndex
        }, _.prototype.setFrame = function(t, e, n) {
            this.frames[t] = e, this.frameVertices[t] = n
        }, _.prototype.apply = function(t, e, n, r, i, a, s) {
            var o = t.slots[this.slotIndex],
                h = o.getAttachment();
            if (h instanceof D.VertexAttachment && h.applyDeform(this.attachment)) {
                var l = o.attachmentVertices;
                0 == l.length && (i = 1);
                var u = this.frameVertices,
                    p = u[0].length,
                    c = this.frames;
                if (n < c[0]) {
                    var d = h;
                    switch (a) {
                        case L.setup:
                            return void(l.length = 0);
                        case L.current:
                            if (1 == i) {
                                l.length = 0;
                                break
                            }
                            var f = D.Utils.setArraySize(l, p);
                            if (null == d.bones)
                                for (var m = d.vertices, g = 0; g < p; g++) f[g] += (m[g] - f[g]) * i;
                            else
                                for (i = 1 - i, g = 0; g < p; g++) f[g] *= i
                    }
                } else {
                    var v = D.Utils.setArraySize(l, p);
                    if (n >= c[c.length - 1]) {
                        var y = u[c.length - 1];
                        if (1 == i) D.Utils.arrayCopy(y, 0, v, 0, p);
                        else if (a == L.setup)
                            if (null == (d = h).bones)
                                for (var x = d.vertices, w = 0; w < p; w++) {
                                    var M = x[w];
                                    v[w] = M + (y[w] - M) * i
                                } else
                                    for (var E = 0; E < p; E++) v[E] = y[E] * i;
                            else
                                for (var A = 0; A < p; A++) v[A] += (y[A] - v[A]) * i
                    } else {
                        var T = Y.binarySearch(c, n),
                            b = u[T - 1],
                            R = u[T],
                            I = c[T],
                            S = this.getCurvePercent(T - 1, 1 - (n - I) / (c[T - 1] - I));
                        if (1 == i)
                            for (var C = 0; C < p; C++) {
                                var P = b[C];
                                v[C] = P + (R[C] - P) * S
                            } else if (a == L.setup)
                                if (null == (d = h).bones)
                                    for (var _ = d.vertices, V = 0; V < p; V++) P = b[V], M = _[V], v[V] = M + (P + (R[V] - P) * S - M) * i;
                                else
                                    for (var k = 0; k < p; k++) P = b[k], v[k] = (P + (R[k] - P) * S) * i;
                        else
                            for (var N = 0; N < p; N++) P = b[N], v[N] += (P + (R[N] - P) * S - v[N]) * i
                    }
                }
            }
        }, _);

    function _(t) {
        var e = S.call(this, t) || this;
        return e.frames = D.Utils.newFloatArray(t), e.frameVertices = new Array(t), null == C && (C = D.Utils.newFloatArray(64)), e
    }
    D.DeformTimeline = P;
    var V = (k.prototype.getPropertyId = function() {
        return n.event << 24
    }, k.prototype.getFrameCount = function() {
        return this.frames.length
    }, k.prototype.setFrame = function(t, e) {
        this.frames[t] = e.time, this.events[t] = e
    }, k.prototype.apply = function(t, e, n, r, i, a, s) {
        if (null != r) {
            var o = this.frames,
                h = this.frames.length;
            if (n < e) this.apply(t, e, Number.MAX_VALUE, r, i, a, s), e = -1;
            else if (e >= o[h - 1]) return;
            if (!(n < o[0])) {
                var l = 0;
                if (e < o[0]) l = 0;
                else
                    for (var u = o[l = Y.binarySearch(o, e)]; 0 < l && o[l - 1] == u;) l--;
                for (; l < h && n >= o[l]; l++) r.push(this.events[l])
            }
        }
    }, k);

    function k(t) {
        this.frames = D.Utils.newFloatArray(t), this.events = new Array(t)
    }
    D.EventTimeline = V;
    var N = (U.prototype.getPropertyId = function() {
        return n.drawOrder << 24
    }, U.prototype.getFrameCount = function() {
        return this.frames.length
    }, U.prototype.setFrame = function(t, e, n) {
        this.frames[t] = e, this.drawOrders[t] = n
    }, U.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = t.drawOrder,
            h = t.slots;
        if (s != g.out || a != L.setup) {
            var l = this.frames;
            if (n < l[0]) a == L.setup && D.Utils.arrayCopy(t.slots, 0, t.drawOrder, 0, t.slots.length);
            else {
                var u = 0;
                u = n >= l[l.length - 1] ? l.length - 1 : Y.binarySearch(l, n) - 1;
                var p = this.drawOrders[u];
                if (null == p) D.Utils.arrayCopy(h, 0, o, 0, h.length);
                else
                    for (var c = 0, d = p.length; c < d; c++) o[c] = h[p[c]]
            }
        } else D.Utils.arrayCopy(t.slots, 0, t.drawOrder, 0, t.slots.length)
    }, U);

    function U(t) {
        this.frames = D.Utils.newFloatArray(t), this.drawOrders = new Array(t)
    }
    D.DrawOrderTimeline = N;
    var X, F = (__extends(O, X = a), O.prototype.getPropertyId = function() {
        return (n.ikConstraint << 24) + this.ikConstraintIndex
    }, O.prototype.setFrame = function(t, e, n, r) {
        t *= O.ENTRIES, this.frames[t] = e, this.frames[t + O.MIX] = n, this.frames[t + O.BEND_DIRECTION] = r
    }, O.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = this.frames,
            h = t.ikConstraints[this.ikConstraintIndex];
        if (n < o[0]) switch (a) {
                case L.setup:
                    return h.mix = h.data.mix, void(h.bendDirection = h.data.bendDirection);
                case L.current:
                    h.mix += (h.data.mix - h.mix) * i, h.bendDirection = h.data.bendDirection
            } else if (n >= o[o.length - O.ENTRIES]) a == L.setup ? (h.mix = h.data.mix + (o[o.length + O.PREV_MIX] - h.data.mix) * i, h.bendDirection = s == g.out ? h.data.bendDirection : o[o.length + O.PREV_BEND_DIRECTION]) : (h.mix += (o[o.length + O.PREV_MIX] - h.mix) * i, s == g.in && (h.bendDirection = o[o.length + O.PREV_BEND_DIRECTION]));
            else {
                var l = Y.binarySearch(o, n, O.ENTRIES),
                    u = o[l + O.PREV_MIX],
                    p = o[l],
                    c = this.getCurvePercent(l / O.ENTRIES - 1, 1 - (n - p) / (o[l + O.PREV_TIME] - p));
                a == L.setup ? (h.mix = h.data.mix + (u + (o[l + O.MIX] - u) * c - h.data.mix) * i, h.bendDirection = s == g.out ? h.data.bendDirection : o[l + O.PREV_BEND_DIRECTION]) : (h.mix += (u + (o[l + O.MIX] - u) * c - h.mix) * i, s == g.in && (h.bendDirection = o[l + O.PREV_BEND_DIRECTION]))
            }
    }, O.ENTRIES = 3, O.PREV_TIME = -3, O.PREV_MIX = -2, O.PREV_BEND_DIRECTION = -1, O.MIX = 1, O.BEND_DIRECTION = 2, O);

    function O(t) {
        var e = X.call(this, t) || this;
        return e.frames = D.Utils.newFloatArray(t * O.ENTRIES), e
    }
    D.IkConstraintTimeline = F;
    var B, W = (__extends(q, B = a), q.prototype.getPropertyId = function() {
        return (n.transformConstraint << 24) + this.transformConstraintIndex
    }, q.prototype.setFrame = function(t, e, n, r, i, a) {
        t *= q.ENTRIES, this.frames[t] = e, this.frames[t + q.ROTATE] = n, this.frames[t + q.TRANSLATE] = r, this.frames[t + q.SCALE] = i, this.frames[t + q.SHEAR] = a
    }, q.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = this.frames,
            h = t.transformConstraints[this.transformConstraintIndex];
        if (n < o[0]) {
            var l = h.data;
            switch (a) {
                case L.setup:
                    return h.rotateMix = l.rotateMix, h.translateMix = l.translateMix, h.scaleMix = l.scaleMix, void(h.shearMix = l.shearMix);
                case L.current:
                    h.rotateMix += (l.rotateMix - h.rotateMix) * i, h.translateMix += (l.translateMix - h.translateMix) * i, h.scaleMix += (l.scaleMix - h.scaleMix) * i, h.shearMix += (l.shearMix - h.shearMix) * i
            }
        } else {
            var u = 0,
                p = 0,
                c = 0,
                d = 0;
            if (n >= o[o.length - q.ENTRIES]) {
                var f = o.length;
                u = o[f + q.PREV_ROTATE], p = o[f + q.PREV_TRANSLATE], c = o[f + q.PREV_SCALE], d = o[f + q.PREV_SHEAR]
            } else {
                var m = Y.binarySearch(o, n, q.ENTRIES);
                u = o[m + q.PREV_ROTATE], p = o[m + q.PREV_TRANSLATE], c = o[m + q.PREV_SCALE], d = o[m + q.PREV_SHEAR];
                var g = o[m],
                    v = this.getCurvePercent(m / q.ENTRIES - 1, 1 - (n - g) / (o[m + q.PREV_TIME] - g));
                u += (o[m + q.ROTATE] - u) * v, p += (o[m + q.TRANSLATE] - p) * v, c += (o[m + q.SCALE] - c) * v, d += (o[m + q.SHEAR] - d) * v
            }
            a == L.setup ? (l = h.data, h.rotateMix = l.rotateMix + (u - l.rotateMix) * i, h.translateMix = l.translateMix + (p - l.translateMix) * i, h.scaleMix = l.scaleMix + (c - l.scaleMix) * i, h.shearMix = l.shearMix + (d - l.shearMix) * i) : (h.rotateMix += (u - h.rotateMix) * i, h.translateMix += (p - h.translateMix) * i, h.scaleMix += (c - h.scaleMix) * i, h.shearMix += (d - h.shearMix) * i)
        }
    }, q.ENTRIES = 5, q.PREV_TIME = -5, q.PREV_ROTATE = -4, q.PREV_TRANSLATE = -3, q.PREV_SCALE = -2, q.PREV_SHEAR = -1, q.ROTATE = 1, q.TRANSLATE = 2, q.SCALE = 3, q.SHEAR = 4, q);

    function q(t) {
        var e = B.call(this, t) || this;
        return e.frames = D.Utils.newFloatArray(t * q.ENTRIES), e
    }
    D.TransformConstraintTimeline = W;
    var j, G = (__extends(z, j = a), z.prototype.getPropertyId = function() {
        return (n.pathConstraintPosition << 24) + this.pathConstraintIndex
    }, z.prototype.setFrame = function(t, e, n) {
        t *= z.ENTRIES, this.frames[t] = e, this.frames[t + z.VALUE] = n
    }, z.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = this.frames,
            h = t.pathConstraints[this.pathConstraintIndex];
        if (n < o[0]) switch (a) {
            case L.setup:
                return void(h.position = h.data.position);
            case L.current:
                h.position += (h.data.position - h.position) * i
        } else {
            var l = 0;
            if (n >= o[o.length - z.ENTRIES]) l = o[o.length + z.PREV_VALUE];
            else {
                var u = Y.binarySearch(o, n, z.ENTRIES);
                l = o[u + z.PREV_VALUE];
                var p = o[u],
                    c = this.getCurvePercent(u / z.ENTRIES - 1, 1 - (n - p) / (o[u + z.PREV_TIME] - p));
                l += (o[u + z.VALUE] - l) * c
            }
            a == L.setup ? h.position = h.data.position + (l - h.data.position) * i : h.position += (l - h.position) * i
        }
    }, z.ENTRIES = 2, z.PREV_TIME = -2, z.PREV_VALUE = -1, z.VALUE = 1, z);

    function z(t) {
        var e = j.call(this, t) || this;
        return e.frames = D.Utils.newFloatArray(t * z.ENTRIES), e
    }
    D.PathConstraintPositionTimeline = G;
    var Z, H = (__extends(J, Z = G), J.prototype.getPropertyId = function() {
        return (n.pathConstraintSpacing << 24) + this.pathConstraintIndex
    }, J.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = this.frames,
            h = t.pathConstraints[this.pathConstraintIndex];
        if (n < o[0]) switch (a) {
            case L.setup:
                return void(h.spacing = h.data.spacing);
            case L.current:
                h.spacing += (h.data.spacing - h.spacing) * i
        } else {
            var l = 0;
            if (n >= o[o.length - J.ENTRIES]) l = o[o.length + J.PREV_VALUE];
            else {
                var u = Y.binarySearch(o, n, J.ENTRIES);
                l = o[u + J.PREV_VALUE];
                var p = o[u],
                    c = this.getCurvePercent(u / J.ENTRIES - 1, 1 - (n - p) / (o[u + J.PREV_TIME] - p));
                l += (o[u + J.VALUE] - l) * c
            }
            a == L.setup ? h.spacing = h.data.spacing + (l - h.data.spacing) * i : h.spacing += (l - h.spacing) * i
        }
    }, J);

    function J(t) {
        return Z.call(this, t) || this
    }
    D.PathConstraintSpacingTimeline = H;
    var Q, K = (__extends($, Q = a), $.prototype.getPropertyId = function() {
        return (n.pathConstraintMix << 24) + this.pathConstraintIndex
    }, $.prototype.setFrame = function(t, e, n, r) {
        t *= $.ENTRIES, this.frames[t] = e, this.frames[t + $.ROTATE] = n, this.frames[t + $.TRANSLATE] = r
    }, $.prototype.apply = function(t, e, n, r, i, a, s) {
        var o = this.frames,
            h = t.pathConstraints[this.pathConstraintIndex];
        if (n < o[0]) switch (a) {
            case L.setup:
                return h.rotateMix = h.data.rotateMix, void(h.translateMix = h.data.translateMix);
            case L.current:
                h.rotateMix += (h.data.rotateMix - h.rotateMix) * i, h.translateMix += (h.data.translateMix - h.translateMix) * i
        } else {
            var l = 0,
                u = 0;
            if (n >= o[o.length - $.ENTRIES]) l = o[o.length + $.PREV_ROTATE], u = o[o.length + $.PREV_TRANSLATE];
            else {
                var p = Y.binarySearch(o, n, $.ENTRIES);
                l = o[p + $.PREV_ROTATE], u = o[p + $.PREV_TRANSLATE];
                var c = o[p],
                    d = this.getCurvePercent(p / $.ENTRIES - 1, 1 - (n - c) / (o[p + $.PREV_TIME] - c));
                l += (o[p + $.ROTATE] - l) * d, u += (o[p + $.TRANSLATE] - u) * d
            }
            a == L.setup ? (h.rotateMix = h.data.rotateMix + (l - h.data.rotateMix) * i, h.translateMix = h.data.translateMix + (u - h.data.translateMix) * i) : (h.rotateMix += (l - h.rotateMix) * i, h.translateMix += (u - h.translateMix) * i)
        }
    }, $.ENTRIES = 3, $.PREV_TIME = -3, $.PREV_ROTATE = -2, $.PREV_TRANSLATE = -1, $.ROTATE = 1, $.TRANSLATE = 2, $);

    function $(t) {
        var e = Q.call(this, t) || this;
        return e.frames = D.Utils.newFloatArray(t * $.ENTRIES), e
    }
    D.PathConstraintMixTimeline = K
}(spine = spine || {}),
function(A) {
    var f = (T.prototype.update = function(t) {
        t *= this.timeScale;
        for (var e = this.tracks, n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            if (null != i) {
                i.animationLast = i.nextAnimationLast, i.trackLast = i.nextTrackLast;
                var a = t * i.timeScale;
                if (0 < i.delay) {
                    if (i.delay -= a, 0 < i.delay) continue;
                    a = -i.delay, i.delay = 0
                }
                var s = i.next;
                if (null != s) {
                    var o = i.trackLast - s.delay;
                    if (0 <= o) {
                        for (s.delay = 0, s.trackTime = o + t * s.timeScale, i.trackTime += a, this.setCurrent(n, s, !0); null != s.mixingFrom;) s.mixTime += a, s = s.mixingFrom;
                        continue
                    }
                } else if (i.trackLast >= i.trackEnd && null == i.mixingFrom) {
                    e[n] = null, this.queue.end(i), this.disposeNext(i);
                    continue
                }
                if (null != i.mixingFrom && this.updateMixingFrom(i, t)) {
                    var h = i.mixingFrom;
                    for (i.mixingFrom = null; null != h;) this.queue.end(h), h = h.mixingFrom
                }
                i.trackTime += a
            }
        }
        this.queue.drain()
    }, T.prototype.updateMixingFrom = function(t, e) {
        var n = t.mixingFrom;
        if (null == n) return !0;
        var r = this.updateMixingFrom(n, e);
        return n.animationLast = n.nextAnimationLast, n.trackLast = n.nextTrackLast, 0 < t.mixTime && (t.mixTime >= t.mixDuration || 0 == t.timeScale) ? (0 != n.totalAlpha && 0 != t.mixDuration || (t.mixingFrom = n.mixingFrom, t.interruptAlpha = n.interruptAlpha, this.queue.end(n)), r) : (n.trackTime += e * n.timeScale, t.mixTime += e * t.timeScale, !1)
    }, T.prototype.apply = function(t) {
        if (null == t) throw new Error("skeleton cannot be null.");
        this.animationsChanged && this._animationsChanged();
        for (var e = this.events, n = this.tracks, r = !1, i = 0, a = n.length; i < a; i++) {
            var s = n[i];
            if (!(null == s || 0 < s.delay)) {
                r = !0;
                var o = 0 == i ? A.MixPose.current : A.MixPose.currentLayered,
                    h = s.alpha;
                null != s.mixingFrom ? h *= this.applyMixingFrom(s, t, o) : s.trackTime >= s.trackEnd && null == s.next && (h = 0);
                var l = s.animationLast,
                    u = s.getAnimationTime(),
                    p = s.animation.timelines.length,
                    c = s.animation.timelines;
                if (1 == h)
                    for (var d = 0; d < p; d++) c[d].apply(t, l, u, e, 1, A.MixPose.setup, A.MixDirection.in);
                else {
                    var f = s.timelineData,
                        m = 0 == s.timelinesRotation.length;
                    m && A.Utils.setArraySize(s.timelinesRotation, p << 1, null);
                    var g = s.timelinesRotation;
                    for (d = 0; d < p; d++) {
                        var v = c[d],
                            y = f[d] >= T.FIRST ? A.MixPose.setup : o;
                        v instanceof A.RotateTimeline ? this.applyRotateTimeline(v, t, u, h, y, g, d << 1, m) : (A.Utils.webkit602BugfixHelper(h, y), v.apply(t, l, u, e, h, y, A.MixDirection.in))
                    }
                }
                this.queueEvents(s, u), e.length = 0, s.nextAnimationLast = u, s.nextTrackLast = s.trackTime
            }
        }
        return this.queue.drain(), r
    }, T.prototype.applyMixingFrom = function(t, e, n) {
        var r = t.mixingFrom;
        null != r.mixingFrom && this.applyMixingFrom(r, e, n);
        var i = 0;
        0 == t.mixDuration ? (i = 1, n = A.MixPose.setup) : 1 < (i = t.mixTime / t.mixDuration) && (i = 1);
        var a = i < r.eventThreshold ? this.events : null,
            s = i < r.attachmentThreshold,
            o = i < r.drawOrderThreshold,
            h = r.animationLast,
            l = r.getAnimationTime(),
            u = r.animation.timelines.length,
            p = r.animation.timelines,
            c = r.timelineData,
            d = r.timelineDipMix,
            f = 0 == r.timelinesRotation.length;
        f && A.Utils.setArraySize(r.timelinesRotation, u << 1, null);
        for (var m, g = r.timelinesRotation, v = r.alpha * t.interruptAlpha, y = v * (1 - i), x = 0, w = r.totalAlpha = 0; w < u; w++) {
            var M = p[w];
            switch (c[w]) {
                case T.SUBSEQUENT:
                    if (!s && M instanceof A.AttachmentTimeline) continue;
                    if (!o && M instanceof A.DrawOrderTimeline) continue;
                    m = n, x = y;
                    break;
                case T.FIRST:
                    m = A.MixPose.setup, x = y;
                    break;
                case T.DIP:
                    m = A.MixPose.setup, x = v;
                    break;
                default:
                    m = A.MixPose.setup, x = v;
                    var E = d[w];
                    x *= Math.max(0, 1 - E.mixTime / E.mixDuration)
            }
            r.totalAlpha += x, M instanceof A.RotateTimeline ? this.applyRotateTimeline(M, e, l, x, m, g, w << 1, f) : (A.Utils.webkit602BugfixHelper(x, m), M.apply(e, h, l, a, x, m, A.MixDirection.out))
        }
        return 0 < t.mixDuration && this.queueEvents(r, l), this.events.length = 0, r.nextAnimationLast = l, r.nextTrackLast = r.trackTime, i
    }, T.prototype.applyRotateTimeline = function(t, e, n, r, i, a, s, o) {
        if (o && (a[s] = 0), 1 != r) {
            var h = t,
                l = h.frames,
                u = e.bones[h.boneIndex];
            if (n < l[0]) i == A.MixPose.setup && (u.rotation = u.data.rotation);
            else {
                var p = 0;
                if (n >= l[l.length - A.RotateTimeline.ENTRIES]) p = u.data.rotation + l[l.length + A.RotateTimeline.PREV_ROTATION];
                else {
                    var c = A.Animation.binarySearch(l, n, A.RotateTimeline.ENTRIES),
                        d = l[c + A.RotateTimeline.PREV_ROTATION],
                        f = l[c],
                        m = h.getCurvePercent((c >> 1) - 1, 1 - (n - f) / (l[c + A.RotateTimeline.PREV_TIME] - f));
                    p = l[c + A.RotateTimeline.ROTATION] - d, p = d + (p -= 360 * (16384 - (16384.499999999996 - p / 360 | 0))) * m + u.data.rotation, p -= 360 * (16384 - (16384.499999999996 - p / 360 | 0))
                }
                var g = i == A.MixPose.setup ? u.data.rotation : u.rotation,
                    v = 0,
                    y = p - g;
                if (0 == y) v = a[s];
                else {
                    y -= 360 * (16384 - (16384.499999999996 - y / 360 | 0));
                    var x = 0,
                        w = 0;
                    w = o ? (x = 0, y) : (x = a[s], a[s + 1]);
                    var M = 0 < y,
                        E = 0 <= x;
                    A.MathUtils.signum(w) != A.MathUtils.signum(y) && Math.abs(w) <= 90 && (180 < Math.abs(x) && (x += 360 * A.MathUtils.signum(x)), E = M), v = y + x - x % 360, E != M && (v += 360 * A.MathUtils.signum(x)), a[s] = v
                }
                a[s + 1] = y, g += v * r, u.rotation = g - 360 * (16384 - (16384.499999999996 - g / 360 | 0))
            }
        } else t.apply(e, 0, n, null, 1, i, A.MixDirection.in)
    }, T.prototype.queueEvents = function(t, e) {
        for (var n = t.animationStart, r = t.animationEnd, i = r - n, a = t.trackLast % i, s = this.events, o = 0, h = s.length; o < h; o++) {
            var l = s[o];
            if (l.time < a) break;
            l.time > r || this.queue.event(t, l)
        }
        for ((t.loop ? 0 == i || a > t.trackTime % i : r <= e && t.animationLast < r) && this.queue.complete(t); o < h; o++) s[o].time < n || this.queue.event(t, s[o])
    }, T.prototype.clearTracks = function() {
        var t = this.queue.drainDisabled;
        this.queue.drainDisabled = !0;
        for (var e = 0, n = this.tracks.length; e < n; e++) this.clearTrack(e);
        this.tracks.length = 0, this.queue.drainDisabled = t, this.queue.drain()
    }, T.prototype.clearTrack = function(t) {
        if (!(t >= this.tracks.length)) {
            var e = this.tracks[t];
            if (null != e) {
                this.queue.end(e), this.disposeNext(e);
                for (var n = e;;) {
                    var r = n.mixingFrom;
                    if (null == r) break;
                    this.queue.end(r), n.mixingFrom = null, n = r
                }
                this.tracks[e.trackIndex] = null, this.queue.drain()
            }
        }
    }, T.prototype.setCurrent = function(t, e, n) {
        var r = this.expandToIndex(t);
        this.tracks[t] = e, null != r && (n && this.queue.interrupt(r), e.mixingFrom = r, e.mixTime = 0, null != r.mixingFrom && 0 < r.mixDuration && (e.interruptAlpha *= Math.min(1, r.mixTime / r.mixDuration)), r.timelinesRotation.length = 0), this.queue.start(e)
    }, T.prototype.setAnimation = function(t, e, n) {
        var r = this.data.skeletonData.findAnimation(e);
        if (null == r) throw new Error("Animation not found: " + e);
        return this.setAnimationWith(t, r, n)
    }, T.prototype.setAnimationWith = function(t, e, n) {
        if (null == e) throw new Error("animation cannot be null.");
        var r = !0,
            i = this.expandToIndex(t);
        null != i && (-1 == i.nextTrackLast ? (this.tracks[t] = i.mixingFrom, this.queue.interrupt(i), this.queue.end(i), this.disposeNext(i), i = i.mixingFrom, r = !1) : this.disposeNext(i));
        var a = this.trackEntry(t, e, n, i);
        return this.setCurrent(t, a, r), this.queue.drain(), a
    }, T.prototype.addAnimation = function(t, e, n, r) {
        var i = this.data.skeletonData.findAnimation(e);
        if (null == i) throw new Error("Animation not found: " + e);
        return this.addAnimationWith(t, i, n, r)
    }, T.prototype.addAnimationWith = function(t, e, n, r) {
        if (null == e) throw new Error("animation cannot be null.");
        var i = this.expandToIndex(t);
        if (null != i)
            for (; null != i.next;) i = i.next;
        var a = this.trackEntry(t, e, n, i);
        if (null == i) this.setCurrent(t, a, !0), this.queue.drain();
        else if (i.next = a, r <= 0) {
            var s = i.animationEnd - i.animationStart;
            0 != s ? (i.loop ? r += s * (1 + (i.trackTime / s | 0)) : r += s, r -= this.data.getMix(i.animation, e)) : r = 0
        }
        return a.delay = r, a
    }, T.prototype.setEmptyAnimation = function(t, e) {
        var n = this.setAnimationWith(t, T.emptyAnimation, !1);
        return n.mixDuration = e, n.trackEnd = e, n
    }, T.prototype.addEmptyAnimation = function(t, e, n) {
        n <= 0 && (n -= e);
        var r = this.addAnimationWith(t, T.emptyAnimation, !1, n);
        return r.mixDuration = e, r.trackEnd = e, r
    }, T.prototype.setEmptyAnimations = function(t) {
        var e = this.queue.drainDisabled;
        this.queue.drainDisabled = !0;
        for (var n = 0, r = this.tracks.length; n < r; n++) {
            var i = this.tracks[n];
            null != i && this.setEmptyAnimation(i.trackIndex, t)
        }
        this.queue.drainDisabled = e, this.queue.drain()
    }, T.prototype.expandToIndex = function(t) {
        return t < this.tracks.length ? this.tracks[t] : (A.Utils.ensureArrayCapacity(this.tracks, t - this.tracks.length + 1, null), this.tracks.length = t + 1, null)
    }, T.prototype.trackEntry = function(t, e, n, r) {
        var i = this.trackEntryPool.obtain();
        return i.trackIndex = t, i.animation = e, i.loop = n, i.eventThreshold = 0, i.attachmentThreshold = 0, i.drawOrderThreshold = 0, i.animationStart = 0, i.animationEnd = e.duration, i.animationLast = -1, i.nextAnimationLast = -1, i.delay = 0, i.trackTime = 0, i.trackLast = -1, i.nextTrackLast = -1, i.trackEnd = Number.MAX_VALUE, i.timeScale = 1, i.alpha = 1, i.interruptAlpha = 1, i.mixTime = 0, i.mixDuration = null == r ? 0 : this.data.getMix(r.animation, e), i
    }, T.prototype.disposeNext = function(t) {
        for (var e = t.next; null != e;) this.queue.dispose(e), e = e.next;
        t.next = null
    }, T.prototype._animationsChanged = function() {
        this.animationsChanged = !1;
        var t = this.propertyIDs;
        t.clear();
        for (var e = this.mixingTo, n = 0, r = this.tracks.length; n < r; n++) {
            var i = this.tracks[n];
            null != i && i.setTimelineData(null, e, t)
        }
    }, T.prototype.getCurrent = function(t) {
        return t >= this.tracks.length ? null : this.tracks[t]
    }, T.prototype.addListener = function(t) {
        if (null == t) throw new Error("listener cannot be null.");
        this.listeners.push(t)
    }, T.prototype.removeListener = function(t) {
        var e = this.listeners.indexOf(t);
        0 <= e && this.listeners.splice(e, 1)
    }, T.prototype.clearListeners = function() {
        this.listeners.length = 0
    }, T.prototype.clearListenerNotifications = function() {
        this.queue.clear()
    }, T.emptyAnimation = new A.Animation("<empty>", [], 0), T.SUBSEQUENT = 0, T.FIRST = 1, T.DIP = 2, T.DIP_MIX = 3, T);

    function T(t) {
        this.tracks = new Array, this.events = new Array, this.listeners = new Array, this.queue = new r(this), this.propertyIDs = new A.IntSet, this.mixingTo = new Array, this.animationsChanged = !1, this.timeScale = 1, this.trackEntryPool = new A.Pool(function() {
            return new e
        }), this.data = t
    }
    A.AnimationState = f;
    var e = (t.prototype.reset = function() {
        this.next = null, this.mixingFrom = null, this.animation = null, this.listener = null, this.timelineData.length = 0, this.timelineDipMix.length = 0, this.timelinesRotation.length = 0
    }, t.prototype.setTimelineData = function(t, e, n) {
        null != t && e.push(t);
        var r = null != this.mixingFrom ? this.mixingFrom.setTimelineData(this, e, n) : this;
        null != t && e.pop();
        var i = e,
            a = e.length - 1,
            s = this.animation.timelines,
            o = this.animation.timelines.length,
            h = A.Utils.setArraySize(this.timelineData, o);
        this.timelineDipMix.length = 0;
        var l = A.Utils.setArraySize(this.timelineDipMix, o);
        t: for (var u = 0; u < o; u++) {
            var p = s[u].getPropertyId();
            if (n.add(p))
                if (null != t && t.hasTimeline(p)) {
                    for (var c = a; 0 <= c; c--) {
                        var d = i[c];
                        if (!d.hasTimeline(p) && 0 < d.mixDuration) {
                            h[u] = f.DIP_MIX, l[u] = d;
                            continue t
                        }
                    }
                    h[u] = f.DIP
                } else h[u] = f.FIRST;
            else h[u] = f.SUBSEQUENT
        }
        return r
    }, t.prototype.hasTimeline = function(t) {
        for (var e = this.animation.timelines, n = 0, r = e.length; n < r; n++)
            if (e[n].getPropertyId() == t) return !0;
        return !1
    }, t.prototype.getAnimationTime = function() {
        if (this.loop) {
            var t = this.animationEnd - this.animationStart;
            return 0 == t ? this.animationStart : this.trackTime % t + this.animationStart
        }
        return Math.min(this.trackTime + this.animationStart, this.animationEnd)
    }, t.prototype.setAnimationLast = function(t) {
        this.animationLast = t, this.nextAnimationLast = t
    }, t.prototype.isComplete = function() {
        return this.trackTime >= this.animationEnd - this.animationStart
    }, t.prototype.resetRotationDirections = function() {
        this.timelinesRotation.length = 0
    }, t);

    function t() {
        this.timelineData = new Array, this.timelineDipMix = new Array, this.timelinesRotation = new Array
    }
    A.TrackEntry = e;
    var o, n, r = (i.prototype.start = function(t) {
        this.objects.push(o.start), this.objects.push(t), this.animState.animationsChanged = !0
    }, i.prototype.interrupt = function(t) {
        this.objects.push(o.interrupt), this.objects.push(t)
    }, i.prototype.end = function(t) {
        this.objects.push(o.end), this.objects.push(t), this.animState.animationsChanged = !0
    }, i.prototype.dispose = function(t) {
        this.objects.push(o.dispose), this.objects.push(t)
    }, i.prototype.complete = function(t) {
        this.objects.push(o.complete), this.objects.push(t)
    }, i.prototype.event = function(t, e) {
        this.objects.push(o.event), this.objects.push(t), this.objects.push(e)
    }, i.prototype.drain = function() {
        if (!this.drainDisabled) {
            this.drainDisabled = !0;
            for (var t = this.objects, e = this.animState.listeners, n = 0; n < t.length; n += 2) {
                var r = t[n],
                    i = t[n + 1];
                switch (r) {
                    case o.start:
                        null != i.listener && i.listener.start && i.listener.start(i);
                        for (var a = 0; a < e.length; a++) e[a].start && e[a].start(i);
                        break;
                    case o.interrupt:
                        for (null != i.listener && i.listener.interrupt && i.listener.interrupt(i), a = 0; a < e.length; a++) e[a].interrupt && e[a].interrupt(i);
                        break;
                    case o.end:
                        for (null != i.listener && i.listener.end && i.listener.end(i), a = 0; a < e.length; a++) e[a].end && e[a].end(i);
                    case o.dispose:
                        for (null != i.listener && i.listener.dispose && i.listener.dispose(i), a = 0; a < e.length; a++) e[a].dispose && e[a].dispose(i);
                        this.animState.trackEntryPool.free(i);
                        break;
                    case o.complete:
                        for (null != i.listener && i.listener.complete && i.listener.complete(i), a = 0; a < e.length; a++) e[a].complete && e[a].complete(i);
                        break;
                    case o.event:
                        var s = t[2 + n++];
                        for (null != i.listener && i.listener.event && i.listener.event(i, s), a = 0; a < e.length; a++) e[a].event && e[a].event(i, s)
                }
            }
            this.clear(), this.drainDisabled = !1
        }
    }, i.prototype.clear = function() {
        this.objects.length = 0
    }, i);

    function i(t) {
        this.objects = [], this.drainDisabled = !1, this.animState = t
    }
    A.EventQueue = r, (n = o = A.EventType || (A.EventType = {}))[n.start = 0] = "start", n[n.interrupt = 1] = "interrupt", n[n.end = 2] = "end", n[n.dispose = 3] = "dispose", n[n.complete = 4] = "complete", n[n.event = 5] = "event";
    var a = (s.prototype.start = function(t) {}, s.prototype.interrupt = function(t) {}, s.prototype.end = function(t) {}, s.prototype.dispose = function(t) {}, s.prototype.complete = function(t) {}, s.prototype.event = function(t, e) {}, s);

    function s() {}
    A.AnimationStateAdapter2 = a
}(spine = spine || {}),
function(t) {
    var e = (n.prototype.setMix = function(t, e, n) {
        var r = this.skeletonData.findAnimation(t);
        if (null == r) throw new Error("Animation not found: " + t);
        var i = this.skeletonData.findAnimation(e);
        if (null == i) throw new Error("Animation not found: " + e);
        this.setMixWith(r, i, n)
    }, n.prototype.setMixWith = function(t, e, n) {
        if (null == t) throw new Error("from cannot be null.");
        if (null == e) throw new Error("to cannot be null.");
        var r = t.name + "." + e.name;
        this.animationToMixTime[r] = n
    }, n.prototype.getMix = function(t, e) {
        var n = t.name + "." + e.name,
            r = this.animationToMixTime[n];
        return void 0 === r ? this.defaultMix : r
    }, n);

    function n(t) {
        if (this.animationToMixTime = {}, this.defaultMix = 0, null == t) throw new Error("skeletonData cannot be null.");
        this.skeletonData = t
    }
    t.AnimationStateData = e
}(spine = spine || {}),
function(d) {
    var t = (a.downloadText = function(t, e, n) {
        var r = new XMLHttpRequest;
        r.open("GET", t, !0), r.onload = function() {
            200 == r.status ? e(r.responseText) : n(r.status, r.responseText)
        }, r.onerror = function() {
            n(r.status, r.responseText)
        }, r.send()
    }, a.downloadBinary = function(t, e, n) {
        var r = new XMLHttpRequest;
        r.open("GET", t, !0), r.responseType = "arraybuffer", r.onload = function() {
            200 == r.status ? e(new Uint8Array(r.response)) : n(r.status, r.responseText)
        }, r.onerror = function() {
            n(r.status, r.responseText)
        }, r.send()
    }, a.prototype.loadText = function(n, e, r) {
        var i = this;
        void 0 === e && (e = null), void 0 === r && (r = null), n = this.pathPrefix + n, this.toLoad++, a.downloadText(n, function(t) {
            i.assets[n] = t, e && e(n, t), i.toLoad--, i.loaded++
        }, function(t, e) {
            i.errors[n] = "Couldn't load text " + n + ": status " + status + ", " + e, r && r(n, "Couldn't load text " + n + ": status " + status + ", " + e), i.toLoad--, i.loaded++
        })
    }, a.prototype.loadTexture = function(n, r, e) {
        var i = this;
        void 0 === r && (r = null), void 0 === e && (e = null), n = this.pathPrefix + n, this.toLoad++;
        var a = new Image;
        a.crossOrigin = "anonymous", a.onload = function(t) {
            var e = i.textureLoader(a);
            i.assets[n] = e, i.toLoad--, i.loaded++, r && r(n, a)
        }, a.onerror = function(t) {
            i.errors[n] = "Couldn't load image " + n, i.toLoad--, i.loaded++, e && e(n, "Couldn't load image " + n)
        }, a.src = n
    }, a.prototype.loadTextureData = function(n, t, r, e) {
        var i = this;
        void 0 === r && (r = null), void 0 === e && (e = null), n = this.pathPrefix + n, this.toLoad++;
        var a = new Image;
        a.onload = function(t) {
            var e = i.textureLoader(a);
            i.assets[n] = e, i.toLoad--, i.loaded++, r && r(n, a)
        }, a.onerror = function(t) {
            i.errors[n] = "Couldn't load image " + n, i.toLoad--, i.loaded++, e && e(n, "Couldn't load image " + n)
        }, a.src = t
    }, a.prototype.loadTextureAtlas = function(h, l, u) {
        var p = this;
        void 0 === l && (l = null), void 0 === u && (u = null);
        var c = 0 <= h.lastIndexOf("/") ? h.substring(0, h.lastIndexOf("/")) : "";
        h = this.pathPrefix + h, this.toLoad++, a.downloadText(h, function(a) {
            var s = {
                    count: 0
                },
                o = new Array;
            try {
                new d.TextureAtlas(a, function(t) {
                    o.push(c + "/" + t);
                    var e = document.createElement("img");
                    return e.width = 16, e.height = 16, new d.FakeTexture(e)
                })
            } catch (t) {
                var e = t;
                return p.errors[h] = "Couldn't load texture atlas " + h + ": " + e.message, u && u(h, "Couldn't load texture atlas " + h + ": " + e.message), p.toLoad--, void p.loaded++
            }

            function t(t) {
                var i = !1;
                p.loadTexture(t, function(t, e) {
                    if (s.count++, s.count == o.length)
                        if (i) p.errors[h] = "Couldn't load texture atlas page " + t + "} of atlas " + h, u && u(h, "Couldn't load texture atlas page " + t + " of atlas " + h), p.toLoad--, p.loaded++;
                        else try {
                            var n = new d.TextureAtlas(a, function(t) {
                                return p.get(c + "/" + t)
                            });
                            p.assets[h] = n, l && l(h, n), p.toLoad--, p.loaded++
                        } catch (t) {
                            var r = t;
                            p.errors[h] = "Couldn't load texture atlas " + h + ": " + r.message, u && u(h, "Couldn't load texture atlas " + h + ": " + r.message), p.toLoad--, p.loaded++
                        }
                }, function(t, e) {
                    i = !0, s.count++, s.count == o.length && (p.errors[h] = "Couldn't load texture atlas page " + t + "} of atlas " + h, u && u(h, "Couldn't load texture atlas page " + t + " of atlas " + h), p.toLoad--, p.loaded++)
                })
            }
            for (var n = 0, r = o; n < r.length; n++) t(r[n])
        }, function(t, e) {
            p.errors[h] = "Couldn't load texture atlas " + h + ": status " + status + ", " + e, u && u(h, "Couldn't load texture atlas " + h + ": status " + status + ", " + e), p.toLoad--, p.loaded++
        })
    }, a.prototype.get = function(t) {
        return t = this.pathPrefix + t, this.assets[t]
    }, a.prototype.remove = function(t) {
        t = this.pathPrefix + t;
        var e = this.assets[t];
        e.dispose && e.dispose(), this.assets[t] = null
    }, a.prototype.removeAll = function() {
        for (var t in this.assets) {
            var e = this.assets[t];
            e.dispose && e.dispose()
        }
        this.assets = {}
    }, a.prototype.isLoadingComplete = function() {
        return 0 == this.toLoad
    }, a.prototype.getToLoad = function() {
        return this.toLoad
    }, a.prototype.getLoaded = function() {
        return this.loaded
    }, a.prototype.dispose = function() {
        this.removeAll()
    }, a.prototype.hasErrors = function() {
        return 0 < Object.keys(this.errors).length
    }, a.prototype.getErrors = function() {
        return this.errors
    }, a);

    function a(t, e) {
        void 0 === e && (e = ""), this.assets = {}, this.errors = {}, this.toLoad = 0, this.loaded = 0, this.textureLoader = t, this.pathPrefix = e
    }
    d.AssetManager = t
}(spine = spine || {}),
function(a) {
    var t = (e.prototype.newRegionAttachment = function(t, e, n) {
        var r = this.atlas.findRegion(n);
        if (null == r) throw new Error("Region not found in atlas: " + n + " (region attachment: " + e + ")");
        r.renderObject = r;
        var i = new a.RegionAttachment(e);
        return i.setRegion(r), i
    }, e.prototype.newMeshAttachment = function(t, e, n) {
        var r = this.atlas.findRegion(n);
        if (null == r) throw new Error("Region not found in atlas: " + n + " (mesh attachment: " + e + ")");
        r.renderObject = r;
        var i = new a.MeshAttachment(e);
        return i.region = r, i
    }, e.prototype.newBoundingBoxAttachment = function(t, e) {
        return new a.BoundingBoxAttachment(e)
    }, e.prototype.newPathAttachment = function(t, e) {
        return new a.PathAttachment(e)
    }, e.prototype.newPointAttachment = function(t, e) {
        return new a.PointAttachment(e)
    }, e.prototype.newClippingAttachment = function(t, e) {
        return new a.ClippingAttachment(e)
    }, e);

    function e(t) {
        this.atlas = t
    }
    a.AtlasAttachmentLoader = t
}(spine = spine || {}),
function(t) {
    var e;
    (e = t.BlendMode || (t.BlendMode = {}))[e.Normal = 0] = "Normal", e[e.Additive = 1] = "Additive", e[e.Multiply = 2] = "Multiply", e[e.Screen = 3] = "Screen"
}(spine = spine || {}),
function(C) {
    var t = (e.prototype.update = function() {
        this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
    }, e.prototype.updateWorldTransform = function() {
        this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
    }, e.prototype.updateWorldTransformWith = function(t, e, n, r, i, a, s) {
        this.ax = t, this.ay = e, this.arotation = n, this.ascaleX = r, this.ascaleY = i, this.ashearX = a, this.ashearY = s, this.appliedValid = !0;
        var o = this.parent;
        if (null == o) {
            var h = n + 90 + s,
                l = C.MathUtils.cosDeg(n + a) * r,
                u = C.MathUtils.cosDeg(h) * i,
                p = C.MathUtils.sinDeg(n + a) * r,
                c = C.MathUtils.sinDeg(h) * i,
                d = this.skeleton;
            return d.flipX && (t = -t, l = -l, u = -u), d.flipY && (e = -e, p = -p, c = -c), this.a = l, this.b = u, this.c = p, this.d = c, this.worldX = t + d.x, void(this.worldY = e + d.y)
        }
        var f = o.a,
            m = o.b,
            g = o.c,
            v = o.d;
        switch (this.worldX = f * t + m * e + o.worldX, this.worldY = g * t + v * e + o.worldY, this.data.transformMode) {
            case C.TransformMode.Normal:
                return h = n + 90 + s, l = C.MathUtils.cosDeg(n + a) * r, u = C.MathUtils.cosDeg(h) * i, p = C.MathUtils.sinDeg(n + a) * r, c = C.MathUtils.sinDeg(h) * i, this.a = f * l + m * p, this.b = f * u + m * c, this.c = g * l + v * p, void(this.d = g * u + v * c);
            case C.TransformMode.OnlyTranslation:
                h = n + 90 + s, this.a = C.MathUtils.cosDeg(n + a) * r, this.b = C.MathUtils.cosDeg(h) * i, this.c = C.MathUtils.sinDeg(n + a) * r, this.d = C.MathUtils.sinDeg(h) * i;
                break;
            case C.TransformMode.NoRotationOrReflection:
                var y = 0,
                    x = n + a - (y = 1e-4 < (M = f * f + g * g) ? (m = g * (M = Math.abs(f * v - m * g) / M), v = f * M, Math.atan2(g, f) * C.MathUtils.radDeg) : (g = f = 0, 90 - Math.atan2(v, m) * C.MathUtils.radDeg)),
                    w = n + s - y + 90;
                l = C.MathUtils.cosDeg(x) * r, u = C.MathUtils.cosDeg(w) * i, p = C.MathUtils.sinDeg(x) * r, c = C.MathUtils.sinDeg(w) * i, this.a = f * l - m * p, this.b = f * u - m * c, this.c = g * l + v * p, this.d = g * u + v * c;
                break;
            case C.TransformMode.NoScale:
            case C.TransformMode.NoScaleOrReflection:
                var M, E = C.MathUtils.cosDeg(n),
                    A = C.MathUtils.sinDeg(n),
                    T = f * E + m * A,
                    b = g * E + v * A;
                1e-5 < (M = Math.sqrt(T * T + b * b)) && (M = 1 / M), T *= M, b *= M, M = Math.sqrt(T * T + b * b);
                var R = Math.PI / 2 + Math.atan2(b, T),
                    I = Math.cos(R) * M,
                    S = Math.sin(R) * M;
                return l = C.MathUtils.cosDeg(a) * r, u = C.MathUtils.cosDeg(90 + s) * i, p = C.MathUtils.sinDeg(a) * r, c = C.MathUtils.sinDeg(90 + s) * i, (this.data.transformMode != C.TransformMode.NoScaleOrReflection ? f * v - m * g < 0 : this.skeleton.flipX != this.skeleton.flipY) && (I = -I, S = -S), this.a = T * l + I * p, this.b = T * u + I * c, this.c = b * l + S * p, void(this.d = b * u + S * c)
        }
        this.skeleton.flipX && (this.a = -this.a, this.b = -this.b), this.skeleton.flipY && (this.c = -this.c, this.d = -this.d)
    }, e.prototype.setToSetupPose = function() {
        var t = this.data;
        this.x = t.x, this.y = t.y, this.rotation = t.rotation, this.scaleX = t.scaleX, this.scaleY = t.scaleY, this.shearX = t.shearX, this.shearY = t.shearY
    }, e.prototype.getWorldRotationX = function() {
        return Math.atan2(this.c, this.a) * C.MathUtils.radDeg
    }, e.prototype.getWorldRotationY = function() {
        return Math.atan2(this.d, this.b) * C.MathUtils.radDeg
    }, e.prototype.getWorldScaleX = function() {
        return Math.sqrt(this.a * this.a + this.c * this.c)
    }, e.prototype.getWorldScaleY = function() {
        return Math.sqrt(this.b * this.b + this.d * this.d)
    }, e.prototype.updateAppliedTransform = function() {
        this.appliedValid = !0;
        var t = this.parent;
        if (null == t) return this.ax = this.worldX, this.ay = this.worldY, this.arotation = Math.atan2(this.c, this.a) * C.MathUtils.radDeg, this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c), this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d), this.ashearX = 0, void(this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * C.MathUtils.radDeg);
        var e = t.a,
            n = t.b,
            r = t.c,
            i = t.d,
            a = 1 / (e * i - n * r),
            s = this.worldX - t.worldX,
            o = this.worldY - t.worldY;
        this.ax = s * i * a - o * n * a, this.ay = o * e * a - s * r * a;
        var h = a * i,
            l = a * e,
            u = a * n,
            p = a * r,
            c = h * this.a - u * this.c,
            d = h * this.b - u * this.d,
            f = l * this.c - p * this.a,
            m = l * this.d - p * this.b;
        if (this.ashearX = 0, this.ascaleX = Math.sqrt(c * c + f * f), 1e-4 < this.ascaleX) {
            var g = c * m - d * f;
            this.ascaleY = g / this.ascaleX, this.ashearY = Math.atan2(c * d + f * m, g) * C.MathUtils.radDeg, this.arotation = Math.atan2(f, c) * C.MathUtils.radDeg
        } else this.ascaleX = 0, this.ascaleY = Math.sqrt(d * d + m * m), this.ashearY = 0, this.arotation = 90 - Math.atan2(m, d) * C.MathUtils.radDeg
    }, e.prototype.worldToLocal = function(t) {
        var e = this.a,
            n = this.b,
            r = this.c,
            i = this.d,
            a = 1 / (e * i - n * r),
            s = t.x - this.worldX,
            o = t.y - this.worldY;
        return t.x = s * i * a - o * n * a, t.y = o * e * a - s * r * a, t
    }, e.prototype.localToWorld = function(t) {
        var e = t.x,
            n = t.y;
        return t.x = e * this.a + n * this.b + this.worldX, t.y = e * this.c + n * this.d + this.worldY, t
    }, e.prototype.worldToLocalRotation = function(t) {
        var e = C.MathUtils.sinDeg(t),
            n = C.MathUtils.cosDeg(t);
        return Math.atan2(this.a * e - this.c * n, this.d * n - this.b * e) * C.MathUtils.radDeg
    }, e.prototype.localToWorldRotation = function(t) {
        var e = C.MathUtils.sinDeg(t),
            n = C.MathUtils.cosDeg(t);
        return Math.atan2(n * this.c + e * this.d, n * this.a + e * this.b) * C.MathUtils.radDeg
    }, e.prototype.rotateWorld = function(t) {
        var e = this.a,
            n = this.b,
            r = this.c,
            i = this.d,
            a = C.MathUtils.cosDeg(t),
            s = C.MathUtils.sinDeg(t);
        this.a = a * e - s * r, this.b = a * n - s * i, this.c = s * e + a * r, this.d = s * n + a * i, this.appliedValid = !1
    }, e);

    function e(t, e, n) {
        if (this.children = new Array, this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 0, this.scaleY = 0, this.shearX = 0, this.shearY = 0, this.ax = 0, this.ay = 0, this.arotation = 0, this.ascaleX = 0, this.ascaleY = 0, this.ashearX = 0, this.ashearY = 0, this.appliedValid = !1, this.a = 0, this.b = 0, this.worldX = 0, this.c = 0, this.d = 0, this.worldY = 0, this.sorted = !1, null == t) throw new Error("data cannot be null.");
        if (null == e) throw new Error("skeleton cannot be null.");
        this.data = t, this.skeleton = e, this.parent = n, this.setToSetupPose()
    }
    C.Bone = t
}(spine = spine || {}),
function(t) {
    function e(t, e, n) {
        if (this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.shearX = 0, this.shearY = 0, this.transformMode = r.Normal, t < 0) throw new Error("index must be >= 0.");
        if (null == e) throw new Error("name cannot be null.");
        this.index = t, this.name = e, this.parent = n
    }
    var r, n;
    t.BoneData = e, (n = r = t.TransformMode || (t.TransformMode = {}))[n.Normal = 0] = "Normal", n[n.OnlyTranslation = 1] = "OnlyTranslation", n[n.NoRotationOrReflection = 2] = "NoRotationOrReflection", n[n.NoScale = 3] = "NoScale", n[n.NoScaleOrReflection = 4] = "NoScaleOrReflection"
}(spine = spine || {}), (spine || (spine = {})).Event = function(t, e) {
        if (null == e) throw new Error("data cannot be null.");
        this.time = t, this.data = e
    }, (spine || (spine = {})).EventData = function(t) {
        this.name = t
    },
    function(nt) {
        var t = (e.prototype.getOrder = function() {
            return this.data.order
        }, e.prototype.apply = function() {
            this.update()
        }, e.prototype.update = function() {
            var t = this.target,
                e = this.bones;
            switch (e.length) {
                case 1:
                    this.apply1(e[0], t.worldX, t.worldY, this.mix);
                    break;
                case 2:
                    this.apply2(e[0], e[1], t.worldX, t.worldY, this.bendDirection, this.mix)
            }
        }, e.prototype.apply1 = function(t, e, n, r) {
            t.appliedValid || t.updateAppliedTransform();
            var i = t.parent,
                a = 1 / (i.a * i.d - i.b * i.c),
                s = e - i.worldX,
                o = n - i.worldY,
                h = (s * i.d - o * i.b) * a - t.ax,
                l = (o * i.a - s * i.c) * a - t.ay,
                u = Math.atan2(l, h) * nt.MathUtils.radDeg - t.ashearX - t.arotation;
            t.ascaleX < 0 && (u += 180), 180 < u ? u -= 360 : u < -180 && (u += 360), t.updateWorldTransformWith(t.ax, t.ay, t.arotation + u * r, t.ascaleX, t.ascaleY, t.ashearX, t.ashearY)
        }, e.prototype.apply2 = function(t, e, n, r, i, a) {
            if (0 != a) {
                t.appliedValid || t.updateAppliedTransform(), e.appliedValid || e.updateAppliedTransform();
                var s = t.ax,
                    o = t.ay,
                    h = t.ascaleX,
                    l = t.ascaleY,
                    u = e.ascaleX,
                    p = 0,
                    c = 0,
                    d = 0;
                d = h < 0 ? (h = -h, p = 180, -1) : (p = 0, 1), l < 0 && (l = -l, d = -d), c = u < 0 ? (u = -u, 180) : 0;
                var f = e.ax,
                    m = 0,
                    g = 0,
                    v = 0,
                    y = t.a,
                    x = t.b,
                    w = t.c,
                    M = t.d,
                    E = Math.abs(h - l) <= 1e-4;
                v = E ? (g = y * f + x * (m = e.ay) + t.worldX, w * f + M * m + t.worldY) : (m = 0, g = y * f + t.worldX, w * f + t.worldY);
                var A = t.parent;
                y = A.a, x = A.b, w = A.c;
                var T = 1 / (y * (M = A.d) - x * w),
                    b = n - A.worldX,
                    R = r - A.worldY,
                    I = (b * M - R * x) * T - s,
                    S = (R * y - b * w) * T - o,
                    C = ((b = g - A.worldX) * M - (R = v - A.worldY) * x) * T - s,
                    P = (R * y - b * w) * T - o,
                    _ = Math.sqrt(C * C + P * P),
                    V = e.data.length * u,
                    k = 0,
                    N = 0;
                t: if (E) {
                    var D = (I * I + S * S - _ * _ - (V *= h) * V) / (2 * _ * V);
                    D < -1 ? D = -1 : 1 < D && (D = 1), N = Math.acos(D) * i, y = _ + V * D, x = V * Math.sin(N), k = Math.atan2(S * y - I * x, I * y + S * x)
                } else {
                    var L = (y = h * V) * y,
                        Y = (x = l * V) * x,
                        U = I * I + S * S,
                        X = Math.atan2(S, I),
                        F = -2 * Y * _,
                        O = Y - L;
                    if (0 <= (M = F * F - 4 * O * (w = Y * _ * _ + L * U - L * Y))) {
                        var B = Math.sqrt(M);
                        F < 0 && (B = -B);
                        var W = (B = -(F + B) / 2) / O,
                            q = w / B,
                            j = Math.abs(W) < Math.abs(q) ? W : q;
                        if (j * j <= U) {
                            R = Math.sqrt(U - j * j) * i, k = X - Math.atan2(R, j), N = Math.atan2(R / l, (j - _) / h);
                            break t
                        }
                    }
                    var G = nt.MathUtils.PI,
                        z = _ - y,
                        Z = z * z,
                        H = 0,
                        J = 0,
                        Q = _ + y,
                        K = Q * Q,
                        $ = 0; - 1 <= (w = -y * _ / (L - Y)) && w <= 1 && (w = Math.acos(w), (M = (b = y * Math.cos(w) + _) * b + (R = x * Math.sin(w)) * R) < Z && (G = w, Z = M, z = b, H = R), K < M && (J = w, K = M, Q = b, $ = R)), N = U <= (Z + K) / 2 ? (k = X - Math.atan2(H * i, z), G * i) : (k = X - Math.atan2($ * i, Q), J * i)
                }
                var tt = Math.atan2(m, f) * d,
                    et = t.arotation;
                180 < (k = (k - tt) * nt.MathUtils.radDeg + p - et) ? k -= 360 : k < -180 && (k += 360), t.updateWorldTransformWith(s, o, et + k * a, t.ascaleX, t.ascaleY, 0, 0), et = e.arotation, 180 < (N = ((N + tt) * nt.MathUtils.radDeg - e.ashearX) * d + c - et) ? N -= 360 : N < -180 && (N += 360), e.updateWorldTransformWith(f, m, et + N * a, e.ascaleX, e.ascaleY, e.ashearX, e.ashearY)
            } else e.updateWorldTransform()
        }, e);

        function e(t, e) {
            if (this.mix = 1, this.bendDirection = 0, null == t) throw new Error("data cannot be null.");
            if (null == e) throw new Error("skeleton cannot be null.");
            this.data = t, this.mix = t.mix, this.bendDirection = t.bendDirection, this.bones = new Array;
            for (var n = 0; n < t.bones.length; n++) this.bones.push(e.findBone(t.bones[n].name));
            this.target = e.findBone(t.target.name)
        }
        nt.IkConstraint = t
    }(spine = spine || {}), (spine || (spine = {})).IkConstraintData = function(t) {
        this.order = 0, this.bones = new Array, this.bendDirection = 1, this.mix = 1, this.name = t
    },
    function(Z) {
        var t = (H.prototype.apply = function() {
            this.update()
        }, H.prototype.update = function() {
            var t = this.target.getAttachment();
            if (t instanceof Z.PathAttachment) {
                var e = this.rotateMix,
                    n = this.translateMix,
                    r = 0 < e;
                if (0 < n || r) {
                    var i = this.data,
                        a = i.spacingMode,
                        s = a == Z.SpacingMode.Length,
                        o = i.rotateMode,
                        h = o == Z.RotateMode.Tangent,
                        l = o == Z.RotateMode.ChainScale,
                        u = this.bones.length,
                        p = h ? u : u + 1,
                        c = this.bones,
                        d = Z.Utils.setArraySize(this.spaces, p),
                        f = null,
                        m = this.spacing;
                    if (l || s) {
                        l && (f = Z.Utils.setArraySize(this.lengths, u));
                        for (var g = 0, v = p - 1; g < v;) {
                            var y = (S = c[g]).data.length;
                            if (y < H.epsilon) l && (f[g] = 0), d[++g] = 0;
                            else {
                                var x = y * S.a,
                                    w = y * S.c,
                                    M = Math.sqrt(x * x + w * w);
                                l && (f[g] = M), d[++g] = (s ? y + m : m) * M / y
                            }
                        }
                    } else
                        for (g = 1; g < p; g++) d[g] = m;
                    var E = this.computeWorldPositions(t, p, h, i.positionMode == Z.PositionMode.Percent, a == Z.SpacingMode.Percent),
                        A = E[0],
                        T = E[1],
                        b = i.offsetRotation,
                        R = !1;
                    0 == b ? R = o == Z.RotateMode.Chain : (R = !1, b *= 0 < (I = this.target.bone).a * I.d - I.b * I.c ? Z.MathUtils.degRad : -Z.MathUtils.degRad), g = 0;
                    for (var I = 3; g < u; g++, I += 3) {
                        var S;
                        (S = c[g]).worldX += (A - S.worldX) * n, S.worldY += (T - S.worldY) * n;
                        var C = (x = E[I]) - A,
                            P = (w = E[I + 1]) - T;
                        if (l) {
                            var _ = f[g];
                            if (0 != _) {
                                var V = (Math.sqrt(C * C + P * P) / _ - 1) * e + 1;
                                S.a *= V, S.c *= V
                            }
                        }
                        if (A = x, T = w, r) {
                            var k = S.a,
                                N = S.b,
                                D = S.c,
                                L = S.d,
                                Y = 0,
                                U = 0,
                                X = 0;
                            if (Y = h ? E[I - 1] : 0 == d[g + 1] ? E[I + 2] : Math.atan2(P, C), Y -= Math.atan2(D, k), R) {
                                U = Math.cos(Y), X = Math.sin(Y);
                                var F = S.data.length;
                                A += (F * (U * k - X * D) - C) * e, T += (F * (X * k + U * D) - P) * e
                            } else Y += b;
                            Y > Z.MathUtils.PI ? Y -= Z.MathUtils.PI2 : Y < -Z.MathUtils.PI && (Y += Z.MathUtils.PI2), Y *= e, U = Math.cos(Y), X = Math.sin(Y), S.a = U * k - X * D, S.b = U * N - X * L, S.c = X * k + U * D, S.d = X * N + U * L
                        }
                        S.appliedValid = !1
                    }
                }
            }
        }, H.prototype.computeWorldPositions = function(t, e, n, r, i) {
            var a = this.target,
                s = this.position,
                o = this.spaces,
                h = Z.Utils.setArraySize(this.positions, 3 * e + 2),
                l = null,
                u = t.closed,
                p = t.worldVerticesLength,
                c = p / 6,
                d = H.NONE;
            if (!t.constantSpeed) {
                var f = t.lengths,
                    m = f[c -= u ? 1 : 2];
                if (r && (s *= m), i)
                    for (var g = 0; g < e; g++) o[g] *= m;
                l = Z.Utils.setArraySize(this.world, 8);
                for (var v = g = 0, y = 0; g < e; g++, v += 3) {
                    var x = s += W = o[g];
                    if (u)(x %= m) < 0 && (x += m), y = 0;
                    else {
                        if (x < 0) {
                            d != H.BEFORE && (d = H.BEFORE, t.computeWorldVertices(a, 2, 4, l, 0, 2)), this.addBeforePosition(x, l, 0, h, v);
                            continue
                        }
                        if (m < x) {
                            d != H.AFTER && (d = H.AFTER, t.computeWorldVertices(a, p - 6, 4, l, 0, 2)), this.addAfterPosition(x - m, l, 0, h, v);
                            continue
                        }
                    }
                    for (;; y++) {
                        var w = f[y];
                        if (!(w < x)) {
                            0 == y ? x /= w : x = (x - (z = f[y - 1])) / (w - z);
                            break
                        }
                    }
                    y != d && (d = y, u && y == c ? (t.computeWorldVertices(a, p - 4, 4, l, 0, 2), t.computeWorldVertices(a, 0, 4, l, 4, 2)) : t.computeWorldVertices(a, 6 * y + 2, 8, l, 0, 2)), this.addCurvePosition(x, l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], h, v, n || 0 < g && 0 == W)
                }
                return h
            }
            u ? (p += 2, l = Z.Utils.setArraySize(this.world, p), t.computeWorldVertices(a, 2, p - 4, l, 0, 2), t.computeWorldVertices(a, 0, 2, l, p - 4, 2), l[p - 2] = l[0], l[p - 1] = l[1]) : (c--, p -= 4, l = Z.Utils.setArraySize(this.world, p), t.computeWorldVertices(a, 2, p, l, 0, 2));
            for (var M = Z.Utils.setArraySize(this.curves, c), E = 0, A = l[0], T = l[1], b = 0, R = 0, I = 0, S = 0, C = 0, P = 0, _ = 0, V = 0, k = 0, N = 0, D = 0, L = 0, Y = 0, U = 0, X = (g = 0, 2); g < c; g++, X += 6) b = l[X], R = l[X + 1], I = l[X + 2], S = l[X + 3], D = 2 * (_ = .1875 * (A - 2 * b + I)) + (k = .09375 * (3 * (b - I) - A + (C = l[X + 4]))), L = 2 * (V = .1875 * (T - 2 * R + S)) + (N = .09375 * (3 * (R - S) - T + (P = l[X + 5]))), Y = .75 * (b - A) + _ + .16666667 * k, U = .75 * (R - T) + V + .16666667 * N, E += Math.sqrt(Y * Y + U * U), Y += D, U += L, D += k, L += N, E += Math.sqrt(Y * Y + U * U), Y += D, U += L, E += Math.sqrt(Y * Y + U * U), Y += D + k, U += L + N, E += Math.sqrt(Y * Y + U * U), M[g] = E, A = C, T = P;
            if (r && (s *= E), i)
                for (g = 0; g < e; g++) o[g] *= E;
            for (var F = this.segments, O = 0, B = y = v = g = 0; g < e; g++, v += 3) {
                var W;
                if (x = s += W = o[g], u)(x %= E) < 0 && (x += E), y = 0;
                else {
                    if (x < 0) {
                        this.addBeforePosition(x, l, 0, h, v);
                        continue
                    }
                    if (E < x) {
                        this.addAfterPosition(x - E, l, p - 4, h, v);
                        continue
                    }
                }
                for (;; y++) {
                    var q = M[y];
                    if (!(q < x)) {
                        0 == y ? x /= q : x = (x - (z = M[y - 1])) / (q - z);
                        break
                    }
                }
                if (y != d) {
                    var j = 6 * (d = y);
                    for (A = l[j], T = l[j + 1], b = l[j + 2], R = l[j + 3], I = l[j + 4], S = l[j + 5], D = 2 * (_ = .03 * (A - 2 * b + I)) + (k = .006 * (3 * (b - I) - A + (C = l[j + 6]))), L = 2 * (V = .03 * (T - 2 * R + S)) + (N = .006 * (3 * (R - S) - T + (P = l[j + 7]))), Y = .3 * (b - A) + _ + .16666667 * k, U = .3 * (R - T) + V + .16666667 * N, O = Math.sqrt(Y * Y + U * U), F[0] = O, j = 1; j < 8; j++) Y += D, U += L, D += k, L += N, O += Math.sqrt(Y * Y + U * U), F[j] = O;
                    Y += D, U += L, O += Math.sqrt(Y * Y + U * U), F[8] = O, Y += D + k, U += L + N, O += Math.sqrt(Y * Y + U * U), F[9] = O, B = 0
                }
                for (x *= O;; B++) {
                    var G = F[B];
                    if (!(G < x)) {
                        var z;
                        0 == B ? x /= G : x = B + (x - (z = F[B - 1])) / (G - z);
                        break
                    }
                }
                this.addCurvePosition(.1 * x, A, T, b, R, I, S, C, P, h, v, n || 0 < g && 0 == W)
            }
            return h
        }, H.prototype.addBeforePosition = function(t, e, n, r, i) {
            var a = e[n],
                s = e[n + 1],
                o = e[n + 2] - a,
                h = e[n + 3] - s,
                l = Math.atan2(h, o);
            r[i] = a + t * Math.cos(l), r[i + 1] = s + t * Math.sin(l), r[i + 2] = l
        }, H.prototype.addAfterPosition = function(t, e, n, r, i) {
            var a = e[n + 2],
                s = e[n + 3],
                o = a - e[n],
                h = s - e[n + 1],
                l = Math.atan2(h, o);
            r[i] = a + t * Math.cos(l), r[i + 1] = s + t * Math.sin(l), r[i + 2] = l
        }, H.prototype.addCurvePosition = function(t, e, n, r, i, a, s, o, h, l, u, p) {
            0 != t && !isNaN(t) || (t = 1e-4);
            var c = t * t,
                d = c * t,
                f = 1 - t,
                m = f * f,
                g = m * f,
                v = f * t,
                y = 3 * v,
                x = f * y,
                w = y * t,
                M = e * g + r * x + a * w + o * d,
                E = n * g + i * x + s * w + h * d;
            l[u] = M, l[u + 1] = E, p && (l[u + 2] = Math.atan2(E - (n * m + i * v * 2 + s * c), M - (e * m + r * v * 2 + a * c)))
        }, H.prototype.getOrder = function() {
            return this.data.order
        }, H.NONE = -1, H.BEFORE = -2, H.AFTER = -3, H.epsilon = 1e-5, H);

        function H(t, e) {
            if (this.position = 0, this.spacing = 0, this.rotateMix = 0, this.translateMix = 0, this.spaces = new Array, this.positions = new Array, this.world = new Array, this.curves = new Array, this.lengths = new Array, this.segments = new Array, null == t) throw new Error("data cannot be null.");
            if (null == e) throw new Error("skeleton cannot be null.");
            this.data = t, this.bones = new Array;
            for (var n = 0, r = t.bones.length; n < r; n++) this.bones.push(e.findBone(t.bones[n].name));
            this.target = e.findSlot(t.target.name), this.position = t.position, this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix
        }
        Z.PathConstraint = t
    }(spine = spine || {}),
    function(t) {
        function e(t) {
            this.order = 0, this.bones = new Array, this.name = t
        }
        var n, r, i;
        t.PathConstraintData = e, (n = t.PositionMode || (t.PositionMode = {}))[n.Fixed = 0] = "Fixed", n[n.Percent = 1] = "Percent", (r = t.SpacingMode || (t.SpacingMode = {}))[r.Length = 0] = "Length", r[r.Fixed = 1] = "Fixed", r[r.Percent = 2] = "Percent", (i = t.RotateMode || (t.RotateMode = {}))[i.Tangent = 0] = "Tangent", i[i.Chain = 1] = "Chain", i[i.ChainScale = 2] = "ChainScale"
    }(spine = spine || {}),
    function(t) {
        var i = (e.prototype.loaded = function() {
            var t = 0;
            for (var e in this.assets) t++;
            return t
        }, e);

        function e(t) {
            this.toLoad = new Array, this.assets = {}, this.clientId = t
        }
        var n = (r.prototype.queueAsset = function(t, e, n) {
            var r = this.clientAssets[t];
            return null == r && (r = new i(t), this.clientAssets[t] = r), null !== e && (r.textureLoader = e), r.toLoad.push(n), this.queuedAssets[n] !== n && (this.queuedAssets[n] = n, !0)
        }, r.prototype.loadText = function(t, e) {
            var n = this;
            if (e = this.pathPrefix + e, this.queueAsset(t, null, e)) {
                var r = new XMLHttpRequest;
                r.onreadystatechange = function() {
                    r.readyState == XMLHttpRequest.DONE && (200 <= r.status && r.status < 300 ? n.rawAssets[e] = r.responseText : n.errors[e] = "Couldn't load text " + e + ": status " + r.status + ", " + r.responseText)
                }, r.open("GET", e, !0), r.send()
            }
        }, r.prototype.loadJson = function(t, e) {
            var n = this;
            if (e = this.pathPrefix + e, this.queueAsset(t, null, e)) {
                var r = new XMLHttpRequest;
                r.onreadystatechange = function() {
                    r.readyState == XMLHttpRequest.DONE && (200 <= r.status && r.status < 300 ? n.rawAssets[e] = JSON.parse(r.responseText) : n.errors[e] = "Couldn't load text " + e + ": status " + r.status + ", " + r.responseText)
                }, r.open("GET", e, !0), r.send()
            }
        }, r.prototype.loadTexture = function(t, e, n) {
            var r = this;
            if (n = this.pathPrefix + n, this.queueAsset(t, e, n)) {
                var i = new Image;
                i.src = n, i.crossOrigin = "anonymous", i.onload = function(t) {
                    r.rawAssets[n] = i
                }, i.onerror = function(t) {
                    r.errors[n] = "Couldn't load image " + n
                }
            }
        }, r.prototype.get = function(t, e) {
            e = this.pathPrefix + e;
            var n = this.clientAssets[t];
            return null == n || n.assets[e]
        }, r.prototype.updateClientAssets = function(t) {
            for (var e = 0; e < t.toLoad.length; e++) {
                var n = t.toLoad[e],
                    r = t.assets[n];
                if (null == r) {
                    var i = this.rawAssets[n];
                    if (null == i) continue;
                    i instanceof HTMLImageElement ? t.assets[n] = t.textureLoader(i) : t.assets[n] = i
                }
            }
        }, r.prototype.isLoadingComplete = function(t) {
            var e = this.clientAssets[t];
            return null == e || (this.updateClientAssets(e), e.toLoad.length == e.loaded())
        }, r.prototype.dispose = function() {}, r.prototype.hasErrors = function() {
            return 0 < Object.keys(this.errors).length
        }, r.prototype.getErrors = function() {
            return this.errors
        }, r);

        function r(t) {
            void 0 === t && (t = ""), this.clientAssets = {}, this.queuedAssets = {}, this.rawAssets = {}, this.errors = {}, this.pathPrefix = t
        }
        t.SharedAssetManager = n
    }(spine = spine || {}),
    function(x) {
        var t = (e.prototype.updateCache = function() {
            this._updateCache.length = 0, this.updateCacheReset.length = 0;
            for (var t = this.bones, e = 0, n = t.length; e < n; e++) t[e].sorted = !1;
            var r = this.ikConstraints,
                i = this.transformConstraints,
                a = this.pathConstraints,
                s = r.length,
                o = i.length,
                h = a.length,
                l = s + o + h;
            t: for (e = 0; e < l; e++) {
                for (var u = 0; u < s; u++)
                    if ((p = r[u]).data.order == e) {
                        this.sortIkConstraint(p);
                        continue t
                    } for (u = 0; u < o; u++)
                    if ((p = i[u]).data.order == e) {
                        this.sortTransformConstraint(p);
                        continue t
                    } for (u = 0; u < h; u++) {
                    var p;
                    if ((p = a[u]).data.order == e) {
                        this.sortPathConstraint(p);
                        continue t
                    }
                }
            }
            for (e = 0, n = t.length; e < n; e++) this.sortBone(t[e])
        }, e.prototype.sortIkConstraint = function(t) {
            var e = t.target;
            this.sortBone(e);
            var n = t.bones,
                r = n[0];
            if (this.sortBone(r), 1 < n.length) {
                var i = n[n.length - 1]; - 1 < this._updateCache.indexOf(i) || this.updateCacheReset.push(i)
            }
            this._updateCache.push(t), this.sortReset(r.children), n[n.length - 1].sorted = !0
        }, e.prototype.sortPathConstraint = function(t) {
            var e = t.target,
                n = e.data.index,
                r = e.bone;
            null != this.skin && this.sortPathConstraintAttachment(this.skin, n, r), null != this.data.defaultSkin && this.data.defaultSkin != this.skin && this.sortPathConstraintAttachment(this.data.defaultSkin, n, r);
            for (var i = 0, a = this.data.skins.length; i < a; i++) this.sortPathConstraintAttachment(this.data.skins[i], n, r);
            var s = e.getAttachment();
            s instanceof x.PathAttachment && this.sortPathConstraintAttachmentWith(s, r);
            var o = t.bones,
                h = o.length;
            for (i = 0; i < h; i++) this.sortBone(o[i]);
            for (this._updateCache.push(t), i = 0; i < h; i++) this.sortReset(o[i].children);
            for (i = 0; i < h; i++) o[i].sorted = !0
        }, e.prototype.sortTransformConstraint = function(t) {
            this.sortBone(t.target);
            var e = t.bones,
                n = e.length;
            if (t.data.local)
                for (var r = 0; r < n; r++) {
                    var i = e[r];
                    this.sortBone(i.parent), -1 < this._updateCache.indexOf(i) || this.updateCacheReset.push(i)
                } else
                    for (r = 0; r < n; r++) this.sortBone(e[r]);
            this._updateCache.push(t);
            for (var a = 0; a < n; a++) this.sortReset(e[a].children);
            for (a = 0; a < n; a++) e[a].sorted = !0
        }, e.prototype.sortPathConstraintAttachment = function(t, e, n) {
            var r = t.attachments[e];
            if (r)
                for (var i in r) this.sortPathConstraintAttachmentWith(r[i], n)
        }, e.prototype.sortPathConstraintAttachmentWith = function(t, e) {
            if (t instanceof x.PathAttachment) {
                var n = t.bones;
                if (null == n) this.sortBone(e);
                else
                    for (var r = this.bones, i = 0; i < n.length;)
                        for (var a = n[i++], s = i + a; i < s; i++) {
                            var o = n[i];
                            this.sortBone(r[o])
                        }
            }
        }, e.prototype.sortBone = function(t) {
            if (!t.sorted) {
                var e = t.parent;
                null != e && this.sortBone(e), t.sorted = !0, this._updateCache.push(t)
            }
        }, e.prototype.sortReset = function(t) {
            for (var e = 0, n = t.length; e < n; e++) {
                var r = t[e];
                r.sorted && this.sortReset(r.children), r.sorted = !1
            }
        }, e.prototype.updateWorldTransform = function() {
            for (var t = this.updateCacheReset, e = 0, n = t.length; e < n; e++) {
                var r = t[e];
                r.ax = r.x, r.ay = r.y, r.arotation = r.rotation, r.ascaleX = r.scaleX, r.ascaleY = r.scaleY, r.ashearX = r.shearX, r.ashearY = r.shearY, r.appliedValid = !0
            }
            var i = this._updateCache;
            for (e = 0, n = i.length; e < n; e++) i[e].update()
        }, e.prototype.setToSetupPose = function() {
            this.setBonesToSetupPose(), this.setSlotsToSetupPose()
        }, e.prototype.setBonesToSetupPose = function() {
            for (var t = this.bones, e = 0, n = t.length; e < n; e++) t[e].setToSetupPose();
            var r = this.ikConstraints;
            for (e = 0, n = r.length; e < n; e++)(o = r[e]).bendDirection = o.data.bendDirection, o.mix = o.data.mix;
            var i = this.transformConstraints;
            for (e = 0, n = i.length; e < n; e++) {
                var a = (o = i[e]).data;
                o.rotateMix = a.rotateMix, o.translateMix = a.translateMix, o.scaleMix = a.scaleMix, o.shearMix = a.shearMix
            }
            var s = this.pathConstraints;
            for (e = 0, n = s.length; e < n; e++) {
                var o;
                a = (o = s[e]).data, o.position = a.position, o.spacing = a.spacing, o.rotateMix = a.rotateMix, o.translateMix = a.translateMix
            }
        }, e.prototype.setSlotsToSetupPose = function() {
            var t = this.slots;
            x.Utils.arrayCopy(t, 0, this.drawOrder, 0, t.length);
            for (var e = 0, n = t.length; e < n; e++) t[e].setToSetupPose()
        }, e.prototype.getRootBone = function() {
            return 0 == this.bones.length ? null : this.bones[0]
        }, e.prototype.findBone = function(t) {
            if (null == t) throw new Error("boneName cannot be null.");
            for (var e = this.bones, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.data.name == t) return i
            }
            return null
        }, e.prototype.findBoneIndex = function(t) {
            if (null == t) throw new Error("boneName cannot be null.");
            for (var e = this.bones, n = 0, r = e.length; n < r; n++)
                if (e[n].data.name == t) return n;
            return -1
        }, e.prototype.findSlot = function(t) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var e = this.slots, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.data.name == t) return i
            }
            return null
        }, e.prototype.findSlotIndex = function(t) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var e = this.slots, n = 0, r = e.length; n < r; n++)
                if (e[n].data.name == t) return n;
            return -1
        }, e.prototype.setSkinByName = function(t) {
            var e = this.data.findSkin(t);
            if (null == e) throw new Error("Skin not found: " + t);
            this.setSkin(e)
        }, e.prototype.setSkin = function(t) {
            if (null != t)
                if (null != this.skin) t.attachAll(this, this.skin);
                else
                    for (var e = this.slots, n = 0, r = e.length; n < r; n++) {
                        var i = e[n],
                            a = i.data.attachmentName;
                        if (null != a) {
                            var s = t.getAttachment(n, a);
                            null != s && i.setAttachment(s)
                        }
                    }
            this.skin = t
        }, e.prototype.getAttachmentByName = function(t, e) {
            return this.getAttachment(this.data.findSlotIndex(t), e)
        }, e.prototype.getAttachment = function(t, e) {
            if (null == e) throw new Error("attachmentName cannot be null.");
            if (null != this.skin) {
                var n = this.skin.getAttachment(t, e);
                if (null != n) return n
            }
            return null != this.data.defaultSkin ? this.data.defaultSkin.getAttachment(t, e) : null
        }, e.prototype.setAttachment = function(t, e) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var n = this.slots, r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                if (a.data.name == t) {
                    var s = null;
                    if (null != e && null == (s = this.getAttachment(r, e))) throw new Error("Attachment not found: " + e + ", for slot: " + t);
                    return void a.setAttachment(s)
                }
            }
            throw new Error("Slot not found: " + t)
        }, e.prototype.findIkConstraint = function(t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.ikConstraints, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.data.name == t) return i
            }
            return null
        }, e.prototype.findTransformConstraint = function(t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.transformConstraints, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.data.name == t) return i
            }
            return null
        }, e.prototype.findPathConstraint = function(t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.pathConstraints, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.data.name == t) return i
            }
            return null
        }, e.prototype.getBounds = function(t, e, n) {
            if (null == t) throw new Error("offset cannot be null.");
            if (null == e) throw new Error("size cannot be null.");
            for (var r = this.drawOrder, i = Number.POSITIVE_INFINITY, a = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY, o = Number.NEGATIVE_INFINITY, h = 0, l = r.length; h < l; h++) {
                var u = r[h],
                    p = 0,
                    c = null,
                    d = u.getAttachment();
                if (d instanceof x.RegionAttachment) p = 8, c = x.Utils.setArraySize(n, p, 0), d.computeWorldVertices(u.bone, c, 0, 2);
                else if (d instanceof x.MeshAttachment) {
                    var f = d;
                    p = f.worldVerticesLength, c = x.Utils.setArraySize(n, p, 0), f.computeWorldVertices(u, 0, p, c, 0, 2)
                }
                if (null != c)
                    for (var m = 0, g = c.length; m < g; m += 2) {
                        var v = c[m],
                            y = c[m + 1];
                        i = Math.min(i, v), a = Math.min(a, y), s = Math.max(s, v), o = Math.max(o, y)
                    }
            }
            t.set(i, a), e.set(s - i, o - a)
        }, e.prototype.update = function(t) {
            this.time += t
        }, e);

        function e(t) {
            if (this._updateCache = new Array, this.updateCacheReset = new Array, this.time = 0, this.flipX = !1, this.flipY = !1, this.x = 0, this.y = 0, null == t) throw new Error("data cannot be null.");
            this.data = t, this.bones = new Array;
            for (var e = 0; e < t.bones.length; e++) {
                var n = t.bones[e],
                    r = void 0;
                if (null == n.parent) r = new x.Bone(n, this, null);
                else {
                    var i = this.bones[n.parent.index];
                    r = new x.Bone(n, this, i), i.children.push(r)
                }
                this.bones.push(r)
            }
            this.slots = new Array, this.drawOrder = new Array;
            for (e = 0; e < t.slots.length; e++) {
                var a = t.slots[e],
                    s = (r = this.bones[a.boneData.index], new x.Slot(a, r));
                this.slots.push(s), this.drawOrder.push(s)
            }
            this.ikConstraints = new Array;
            for (e = 0; e < t.ikConstraints.length; e++) {
                var o = t.ikConstraints[e];
                this.ikConstraints.push(new x.IkConstraint(o, this))
            }
            this.transformConstraints = new Array;
            for (e = 0; e < t.transformConstraints.length; e++) {
                var h = t.transformConstraints[e];
                this.transformConstraints.push(new x.TransformConstraint(h, this))
            }
            this.pathConstraints = new Array;
            for (e = 0; e < t.pathConstraints.length; e++) {
                var l = t.pathConstraints[e];
                this.pathConstraints.push(new x.PathConstraint(l, this))
            }
            this.color = new x.Color(1, 1, 1, 1), this.updateCache()
        }
        x.Skeleton = t
    }(spine = spine || {}),
    function(c) {
        var t = (e.prototype.update = function(t, e) {
            if (null == t) throw new Error("skeleton cannot be null.");
            var n = this.boundingBoxes,
                r = this.polygons,
                i = this.polygonPool,
                a = t.slots,
                s = a.length;
            n.length = 0, i.freeAll(r);
            for (var o = r.length = 0; o < s; o++) {
                var h = a[o],
                    l = h.getAttachment();
                if (l instanceof c.BoundingBoxAttachment) {
                    var u = l;
                    n.push(u);
                    var p = i.obtain();
                    p.length != u.worldVerticesLength && (p = c.Utils.newFloatArray(u.worldVerticesLength)), r.push(p), u.computeWorldVertices(h, 0, u.worldVerticesLength, p, 0, 2)
                }
            }
            e ? this.aabbCompute() : (this.minX = Number.POSITIVE_INFINITY, this.minY = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.maxY = Number.NEGATIVE_INFINITY)
        }, e.prototype.aabbCompute = function() {
            for (var t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, r = Number.NEGATIVE_INFINITY, i = this.polygons, a = 0, s = i.length; a < s; a++)
                for (var o = i[a], h = o, l = 0, u = o.length; l < u; l += 2) {
                    var p = h[l],
                        c = h[l + 1];
                    t = Math.min(t, p), e = Math.min(e, c), n = Math.max(n, p), r = Math.max(r, c)
                }
            this.minX = t, this.minY = e, this.maxX = n, this.maxY = r
        }, e.prototype.aabbContainsPoint = function(t, e) {
            return t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
        }, e.prototype.aabbIntersectsSegment = function(t, e, n, r) {
            var i = this.minX,
                a = this.minY,
                s = this.maxX,
                o = this.maxY;
            if (t <= i && n <= i || e <= a && r <= a || s <= t && s <= n || o <= e && o <= r) return !1;
            var h = (r - e) / (n - t),
                l = h * (i - t) + e;
            if (a < l && l < o) return !0;
            if (a < (l = h * (s - t) + e) && l < o) return !0;
            var u = (a - e) / h + t;
            return i < u && u < s || i < (u = (o - e) / h + t) && u < s
        }, e.prototype.aabbIntersectsSkeleton = function(t) {
            return this.minX < t.maxX && this.maxX > t.minX && this.minY < t.maxY && this.maxY > t.minY
        }, e.prototype.containsPoint = function(t, e) {
            for (var n = this.polygons, r = 0, i = n.length; r < i; r++)
                if (this.containsPointPolygon(n[r], t, e)) return this.boundingBoxes[r];
            return null
        }, e.prototype.containsPointPolygon = function(t, e, n) {
            for (var r = t, i = t.length, a = i - 2, s = !1, o = 0; o < i; o += 2) {
                var h = r[o + 1],
                    l = r[a + 1];
                if (h < n && n <= l || l < n && n <= h) {
                    var u = r[o];
                    u + (n - h) / (l - h) * (r[a] - u) < e && (s = !s)
                }
                a = o
            }
            return s
        }, e.prototype.intersectsSegment = function(t, e, n, r) {
            for (var i = this.polygons, a = 0, s = i.length; a < s; a++)
                if (this.intersectsSegmentPolygon(i[a], t, e, n, r)) return this.boundingBoxes[a];
            return null
        }, e.prototype.intersectsSegmentPolygon = function(t, e, n, r, i) {
            for (var a = t, s = t.length, o = e - r, h = n - i, l = e * i - n * r, u = a[s - 2], p = a[s - 1], c = 0; c < s; c += 2) {
                var d = a[c],
                    f = a[c + 1],
                    m = u * f - p * d,
                    g = u - d,
                    v = p - f,
                    y = o * v - h * g,
                    x = (l * g - o * m) / y;
                if ((u <= x && x <= d || d <= x && x <= u) && (e <= x && x <= r || r <= x && x <= e)) {
                    var w = (l * v - h * m) / y;
                    if ((p <= w && w <= f || f <= w && w <= p) && (n <= w && w <= i || i <= w && w <= n)) return !0
                }
                u = d, p = f
            }
            return !1
        }, e.prototype.getPolygon = function(t) {
            if (null == t) throw new Error("boundingBox cannot be null.");
            var e = this.boundingBoxes.indexOf(t);
            return -1 == e ? null : this.polygons[e]
        }, e.prototype.getWidth = function() {
            return this.maxX - this.minX
        }, e.prototype.getHeight = function() {
            return this.maxY - this.minY
        }, e);

        function e() {
            this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.boundingBoxes = new Array, this.polygons = new Array, this.polygonPool = new c.Pool(function() {
                return c.Utils.newFloatArray(16)
            })
        }
        c.SkeletonBounds = t
    }(spine = spine || {}),
    function(H) {
        var t = (l.prototype.clipStart = function(t, e) {
            if (null != this.clipAttachment) return 0;
            var n = (this.clipAttachment = e).worldVerticesLength,
                r = H.Utils.setArraySize(this.clippingPolygon, n);
            e.computeWorldVertices(t, 0, n, r, 0, 2);
            var i = this.clippingPolygon;
            l.makeClockwise(i);
            for (var a = this.clippingPolygons = this.triangulator.decompose(i, this.triangulator.triangulate(i)), s = 0, o = a.length; s < o; s++) {
                var h = a[s];
                l.makeClockwise(h), h.push(h[0]), h.push(h[1])
            }
            return a.length
        }, l.prototype.clipEndWithSlot = function(t) {
            null != this.clipAttachment && this.clipAttachment.endSlot == t.data && this.clipEnd()
        }, l.prototype.clipEnd = function() {
            null != this.clipAttachment && (this.clipAttachment = null, this.clippingPolygons = null, this.clippedVertices.length = 0, this.clippedTriangles.length = 0, this.clippingPolygon.length = 0)
        }, l.prototype.isClipping = function() {
            return null != this.clipAttachment
        }, l.prototype.clipTriangles = function(t, e, n, r, i, a, s, o) {
            var h = this.clipOutput,
                l = this.clippedVertices,
                u = this.clippedTriangles,
                p = this.clippingPolygons,
                c = this.clippingPolygons.length,
                d = o ? 12 : 8,
                f = 0;
            l.length = 0;
            t: for (var m = u.length = 0; m < r; m += 3)
                for (var g = n[m] << 1, v = t[g], y = t[g + 1], x = i[g], w = i[g + 1], M = t[g = n[m + 1] << 1], E = t[g + 1], A = i[g], T = i[g + 1], b = t[g = n[m + 2] << 1], R = t[g + 1], I = i[g], S = i[g + 1], C = 0; C < c; C++) {
                    var P = l.length;
                    if (!this.clip(v, y, M, E, b, R, p[C], h)) {
                        (X = H.Utils.setArraySize(l, P + 3 * d))[P] = v, X[P + 1] = y, X[P + 2] = a.r, X[P + 3] = a.g, X[P + 4] = a.b, X[P + 5] = a.a, o ? (X[P + 6] = x, X[P + 7] = w, X[P + 8] = s.r, X[P + 9] = s.g, X[P + 10] = s.b, X[P + 11] = s.a, X[P + 12] = M, X[P + 13] = E, X[P + 14] = a.r, X[P + 15] = a.g, X[P + 16] = a.b, X[P + 17] = a.a, X[P + 18] = A, X[P + 19] = T, X[P + 20] = s.r, X[P + 21] = s.g, X[P + 22] = s.b, X[P + 23] = s.a, X[P + 24] = b, X[P + 25] = R, X[P + 26] = a.r, X[P + 27] = a.g, X[P + 28] = a.b, X[P + 29] = a.a, X[P + 30] = I, X[P + 31] = S, X[P + 32] = s.r, X[P + 33] = s.g, X[P + 34] = s.b, X[P + 35] = s.a) : (X[P + 6] = x, X[P + 7] = w, X[P + 8] = M, X[P + 9] = E, X[P + 10] = a.r, X[P + 11] = a.g, X[P + 12] = a.b, X[P + 13] = a.a, X[P + 14] = A, X[P + 15] = T, X[P + 16] = b, X[P + 17] = R, X[P + 18] = a.r, X[P + 19] = a.g, X[P + 20] = a.b, X[P + 21] = a.a, X[P + 22] = I, X[P + 23] = S), P = u.length, (Z = H.Utils.setArraySize(u, P + 3))[P] = f, Z[P + 1] = f + 1, Z[P + 2] = f + 2, f += 3;
                        continue t
                    }
                    var _ = h.length;
                    if (0 != _) {
                        for (var V = E - R, k = b - M, N = v - b, D = R - y, L = 1 / (V * N + k * (y - R)), Y = _ >> 1, U = this.clipOutput, X = H.Utils.setArraySize(l, P + Y * d), F = 0; F < _; F += 2) {
                            var O = U[F],
                                B = U[F + 1];
                            X[P] = O, X[P + 1] = B, X[P + 2] = a.r, X[P + 3] = a.g, X[P + 4] = a.b, X[P + 5] = a.a;
                            var W = O - b,
                                q = B - R,
                                j = (V * W + k * q) * L,
                                G = (D * W + N * q) * L,
                                z = 1 - j - G;
                            X[P + 6] = x * j + A * G + I * z, X[P + 7] = w * j + T * G + S * z, o && (X[P + 8] = s.r, X[P + 9] = s.g, X[P + 10] = s.b, X[P + 11] = s.a), P += d
                        }
                        P = u.length;
                        var Z = H.Utils.setArraySize(u, P + 3 * (Y - 2));
                        for (Y--, F = 1; F < Y; F++) Z[P] = f, Z[P + 1] = f + F, Z[P + 2] = f + F + 1, P += 3;
                        f += Y + 1
                    }
                }
        }, l.prototype.clip = function(t, e, n, r, i, a, s, o) {
            var h = o,
                l = !1,
                u = null;
            2 <= s.length % 4 ? (u = o, o = this.scratch) : u = this.scratch, u.length = 0, u.push(t), u.push(e), u.push(n), u.push(r), u.push(i), u.push(a), u.push(t), u.push(e), o.length = 0;
            for (var p = s, c = s.length - 4, d = 0;; d += 2) {
                for (var f = p[d], m = p[d + 1], g = p[d + 2], v = p[d + 3], y = f - g, x = m - v, w = u, M = u.length - 2, E = o.length, A = 0; A < M; A += 2) {
                    var T = w[A],
                        b = w[A + 1],
                        R = w[A + 2],
                        I = w[A + 3],
                        S = 0 < y * (I - v) - x * (R - g);
                    if (0 < y * (b - v) - x * (T - g)) {
                        if (S) {
                            o.push(R), o.push(I);
                            continue
                        }
                        var C = ((_ = R - T) * (m - b) - (P = I - b) * (f - T)) / (P * (g - f) - _ * (v - m));
                        o.push(f + (g - f) * C), o.push(m + (v - m) * C)
                    } else if (S) {
                        var P, _;
                        C = ((_ = R - T) * (m - b) - (P = I - b) * (f - T)) / (P * (g - f) - _ * (v - m)), o.push(f + (g - f) * C), o.push(m + (v - m) * C), o.push(R), o.push(I)
                    }
                    l = !0
                }
                if (E == o.length) return !(h.length = 0);
                if (o.push(o[0]), o.push(o[1]), d == c) break;
                var V = o;
                (o = u).length = 0, u = V
            }
            if (h != o) {
                d = h.length = 0;
                for (var k = o.length - 2; d < k; d++) h[d] = o[d]
            } else h.length = h.length - 2;
            return l
        }, l.makeClockwise = function(t) {
            for (var e = t, n = t.length, r = e[n - 2] * e[1] - e[0] * e[n - 1], i = 0, a = 0, s = 0, o = 0, h = n - 3; o < h; o += 2) i = e[o], a = e[o + 1], s = e[o + 2], r += i * e[o + 3] - s * a;
            if (!(r < 0)) {
                o = 0;
                var l = n - 2;
                for (h = n >> 1; o < h; o += 2) {
                    var u = e[o],
                        p = e[o + 1],
                        c = l - o;
                    e[o] = e[c], e[o + 1] = e[1 + c], e[c] = u, e[1 + c] = p
                }
            }
        }, l);

        function l() {
            this.triangulator = new H.Triangulator, this.clippingPolygon = new Array, this.clipOutput = new Array, this.clippedVertices = new Array, this.clippedTriangles = new Array, this.scratch = new Array
        }
        H.SkeletonClipping = t
    }(spine = spine || {}),
    function(t) {
        var e = (n.prototype.findBone = function(t) {
            if (null == t) throw new Error("boneName cannot be null.");
            for (var e = this.bones, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.name == t) return i
            }
            return null
        }, n.prototype.findBoneIndex = function(t) {
            if (null == t) throw new Error("boneName cannot be null.");
            for (var e = this.bones, n = 0, r = e.length; n < r; n++)
                if (e[n].name == t) return n;
            return -1
        }, n.prototype.findSlot = function(t) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var e = this.slots, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.name == t) return i
            }
            return null
        }, n.prototype.findSlotIndex = function(t) {
            if (null == t) throw new Error("slotName cannot be null.");
            for (var e = this.slots, n = 0, r = e.length; n < r; n++)
                if (e[n].name == t) return n;
            return -1
        }, n.prototype.findSkin = function(t) {
            if (null == t) throw new Error("skinName cannot be null.");
            for (var e = this.skins, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.name == t) return i
            }
            return null
        }, n.prototype.findEvent = function(t) {
            if (null == t) throw new Error("eventDataName cannot be null.");
            for (var e = this.events, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.name == t) return i
            }
            return null
        }, n.prototype.findAnimation = function(t) {
            if (null == t) throw new Error("animationName cannot be null.");
            for (var e = this.animations, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.name == t) return i
            }
            return null
        }, n.prototype.findIkConstraint = function(t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.ikConstraints, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.name == t) return i
            }
            return null
        }, n.prototype.findTransformConstraint = function(t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.transformConstraints, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.name == t) return i
            }
            return null
        }, n.prototype.findPathConstraint = function(t) {
            if (null == t) throw new Error("constraintName cannot be null.");
            for (var e = this.pathConstraints, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.name == t) return i
            }
            return null
        }, n.prototype.findPathConstraintIndex = function(t) {
            if (null == t) throw new Error("pathConstraintName cannot be null.");
            for (var e = this.pathConstraints, n = 0, r = e.length; n < r; n++)
                if (e[n].name == t) return n;
            return -1
        }, n);

        function n() {
            this.bones = new Array, this.slots = new Array, this.skins = new Array, this.events = new Array, this.animations = new Array, this.ikConstraints = new Array, this.transformConstraints = new Array, this.pathConstraints = new Array, this.fps = 0
        }
        t.SkeletonData = e
    }(spine = spine || {}),
    function($) {
        var t = (k.prototype.readSkeletonData = function(t) {
            var e = this.scale,
                n = new $.SkeletonData,
                r = "string" == typeof t ? JSON.parse(t) : t,
                i = r.skeleton;
            if (null != i && (n.hash = i.hash, n.version = i.spine, n.width = i.width, n.height = i.height, n.fps = i.fps, n.imagesPath = i.images), r.bones)
                for (var a = 0; a < r.bones.length; a++) {
                    var s = r.bones[a],
                        o = null,
                        h = this.getValue(s, "parent", null);
                    if (null != h && null == (o = n.findBone(h))) throw new Error("Parent bone not found: " + h);
                    (c = new $.BoneData(n.bones.length, s.name, o)).length = this.getValue(s, "length", 0) * e, c.x = this.getValue(s, "x", 0) * e, c.y = this.getValue(s, "y", 0) * e, c.rotation = this.getValue(s, "rotation", 0), c.scaleX = this.getValue(s, "scaleX", 1), c.scaleY = this.getValue(s, "scaleY", 1), c.shearX = this.getValue(s, "shearX", 0), c.shearY = this.getValue(s, "shearY", 0), c.transformMode = k.transformModeFromString(this.getValue(s, "transform", "normal")), n.bones.push(c)
                }
            if (r.slots)
                for (a = 0; a < r.slots.length; a++) {
                    var l = (A = r.slots[a]).name,
                        u = A.bone,
                        p = n.findBone(u);
                    if (null == p) throw new Error("Slot bone not found: " + u);
                    var c = new $.SlotData(n.slots.length, l, p),
                        d = this.getValue(A, "color", null);
                    null != d && c.color.setFromString(d);
                    var f = this.getValue(A, "dark", null);
                    null != f && (c.darkColor = new $.Color(1, 1, 1, 1), c.darkColor.setFromString(f)), c.attachmentName = this.getValue(A, "attachment", null), c.blendMode = k.blendModeFromString(this.getValue(A, "blend", "normal")), n.slots.push(c)
                }
            if (r.ik)
                for (a = 0; a < r.ik.length; a++) {
                    var m = r.ik[a];
                    (c = new $.IkConstraintData(m.name)).order = this.getValue(m, "order", 0);
                    for (var g = 0; g < m.bones.length; g++) {
                        if (u = m.bones[g], null == (y = n.findBone(u))) throw new Error("IK bone not found: " + u);
                        c.bones.push(y)
                    }
                    var v = m.target;
                    if (c.target = n.findBone(v), null == c.target) throw new Error("IK target bone not found: " + v);
                    c.bendDirection = this.getValue(m, "bendPositive", !0) ? 1 : -1, c.mix = this.getValue(m, "mix", 1), n.ikConstraints.push(c)
                }
            if (r.transform)
                for (a = 0; a < r.transform.length; a++) {
                    for (m = r.transform[a], (c = new $.TransformConstraintData(m.name)).order = this.getValue(m, "order", 0), g = 0; g < m.bones.length; g++) {
                        if (u = m.bones[g], null == (y = n.findBone(u))) throw new Error("Transform constraint bone not found: " + u);
                        c.bones.push(y)
                    }
                    if (v = m.target, c.target = n.findBone(v), null == c.target) throw new Error("Transform constraint target bone not found: " + v);
                    c.local = this.getValue(m, "local", !1), c.relative = this.getValue(m, "relative", !1), c.offsetRotation = this.getValue(m, "rotation", 0), c.offsetX = this.getValue(m, "x", 0) * e, c.offsetY = this.getValue(m, "y", 0) * e, c.offsetScaleX = this.getValue(m, "scaleX", 0), c.offsetScaleY = this.getValue(m, "scaleY", 0), c.offsetShearY = this.getValue(m, "shearY", 0), c.rotateMix = this.getValue(m, "rotateMix", 1), c.translateMix = this.getValue(m, "translateMix", 1), c.scaleMix = this.getValue(m, "scaleMix", 1), c.shearMix = this.getValue(m, "shearMix", 1), n.transformConstraints.push(c)
                }
            if (r.path)
                for (a = 0; a < r.path.length; a++) {
                    for (m = r.path[a], (c = new $.PathConstraintData(m.name)).order = this.getValue(m, "order", 0), g = 0; g < m.bones.length; g++) {
                        var y;
                        if (u = m.bones[g], null == (y = n.findBone(u))) throw new Error("Transform constraint bone not found: " + u);
                        c.bones.push(y)
                    }
                    if (v = m.target, c.target = n.findSlot(v), null == c.target) throw new Error("Path target slot not found: " + v);
                    c.positionMode = k.positionModeFromString(this.getValue(m, "positionMode", "percent")), c.spacingMode = k.spacingModeFromString(this.getValue(m, "spacingMode", "length")), c.rotateMode = k.rotateModeFromString(this.getValue(m, "rotateMode", "tangent")), c.offsetRotation = this.getValue(m, "rotation", 0), c.position = this.getValue(m, "position", 0), c.positionMode == $.PositionMode.Fixed && (c.position *= e), c.spacing = this.getValue(m, "spacing", 0), c.spacingMode != $.SpacingMode.Length && c.spacingMode != $.SpacingMode.Fixed || (c.spacing *= e), c.rotateMix = this.getValue(m, "rotateMix", 1), c.translateMix = this.getValue(m, "translateMix", 1), n.pathConstraints.push(c)
                }
            if (r.skins)
                for (var x in r.skins) {
                    var w = r.skins[x],
                        M = new $.Skin(x);
                    for (var l in w) {
                        var E = n.findSlotIndex(l);
                        if (-1 == E) throw new Error("Slot not found: " + l);
                        var A = w[l];
                        for (var T in A) {
                            var b = this.readAttachment(A[T], M, E, T, n);
                            null != b && M.addAttachment(E, T, b)
                        }
                    }
                    n.skins.push(M), "default" == M.name && (n.defaultSkin = M)
                }
            a = 0;
            for (var R = this.linkedMeshes.length; a < R; a++) {
                var I = this.linkedMeshes[a];
                if (null == (M = null == I.skin ? n.defaultSkin : n.findSkin(I.skin))) throw new Error("Skin not found: " + I.skin);
                var S = M.getAttachment(I.slotIndex, I.parent);
                if (null == S) throw new Error("Parent mesh not found: " + I.parent);
                I.mesh.setParentMesh(S), I.mesh.updateUVs()
            }
            if (this.linkedMeshes.length = 0, r.events)
                for (var C in r.events) {
                    var P = r.events[C];
                    (c = new $.EventData(C)).intValue = this.getValue(P, "int", 0), c.floatValue = this.getValue(P, "float", 0), c.stringValue = this.getValue(P, "string", ""), n.events.push(c)
                }
            if (r.animations)
                for (var _ in r.animations) {
                    var V = r.animations[_];
                    this.readAnimation(V, _, n)
                }
            return n
        }, k.prototype.readAttachment = function(t, e, n, r, i) {
            var a = this.scale;
            switch (r = this.getValue(t, "name", r), this.getValue(t, "type", "region")) {
                case "region":
                    var s = this.getValue(t, "path", r),
                        o = this.attachmentLoader.newRegionAttachment(e, r, s);
                    return null == o ? null : (o.path = s, o.x = this.getValue(t, "x", 0) * a, o.y = this.getValue(t, "y", 0) * a, o.scaleX = this.getValue(t, "scaleX", 1), o.scaleY = this.getValue(t, "scaleY", 1), o.rotation = this.getValue(t, "rotation", 0), o.width = t.width * a, o.height = t.height * a, null != (v = this.getValue(t, "color", null)) && o.color.setFromString(v), o.updateOffset(), o);
                case "boundingbox":
                    var h = this.attachmentLoader.newBoundingBoxAttachment(e, r);
                    return null == h ? null : (this.readVertices(t, h, t.vertexCount << 1), null != (v = this.getValue(t, "color", null)) && h.color.setFromString(v), h);
                case "mesh":
                case "linkedmesh":
                    s = this.getValue(t, "path", r);
                    var l = this.attachmentLoader.newMeshAttachment(e, r, s);
                    if (null == l) return null;
                    l.path = s, null != (v = this.getValue(t, "color", null)) && l.color.setFromString(v);
                    var u = this.getValue(t, "parent", null);
                    if (null != u) return l.inheritDeform = this.getValue(t, "deform", !0), this.linkedMeshes.push(new w(l, this.getValue(t, "skin", null), n, u)), l;
                    var p = t.uvs;
                    return this.readVertices(t, l, p.length), l.triangles = t.triangles, l.regionUVs = p, l.updateUVs(), l.hullLength = 2 * this.getValue(t, "hull", 0), l;
                case "path":
                    if (null == (s = this.attachmentLoader.newPathAttachment(e, r))) return null;
                    s.closed = this.getValue(t, "closed", !1), s.constantSpeed = this.getValue(t, "constantSpeed", !0);
                    var c = t.vertexCount;
                    this.readVertices(t, s, c << 1);
                    for (var d = $.Utils.newArray(c / 3, 0), f = 0; f < t.lengths.length; f++) d[f] = t.lengths[f] * a;
                    return s.lengths = d, null != (v = this.getValue(t, "color", null)) && s.color.setFromString(v), s;
                case "point":
                    var m = this.attachmentLoader.newPointAttachment(e, r);
                    return null == m ? null : (m.x = this.getValue(t, "x", 0) * a, m.y = this.getValue(t, "y", 0) * a, m.rotation = this.getValue(t, "rotation", 0), null != (v = this.getValue(t, "color", null)) && m.color.setFromString(v), m);
                case "clipping":
                    var g = this.attachmentLoader.newClippingAttachment(e, r);
                    if (null == g) return null;
                    var v, y = this.getValue(t, "end", null);
                    if (null != y) {
                        var x = i.findSlot(y);
                        if (null == x) throw new Error("Clipping end slot not found: " + y);
                        g.endSlot = x
                    }
                    return c = t.vertexCount, this.readVertices(t, g, c << 1), null != (v = this.getValue(t, "color", null)) && g.color.setFromString(v), g
            }
            return null
        }, k.prototype.readVertices = function(t, e, n) {
            var r = this.scale;
            e.worldVerticesLength = n;
            var i = t.vertices;
            if (n != i.length) {
                var a = new Array,
                    s = new Array;
                for (u = 0, p = i.length; u < p;) {
                    var o = i[u++];
                    s.push(o);
                    for (var h = u + 4 * o; u < h; u += 4) s.push(i[u]), a.push(i[u + 1] * r), a.push(i[u + 2] * r), a.push(i[u + 3])
                }
                e.bones = s, e.vertices = $.Utils.toFloatArray(a)
            } else {
                var l = $.Utils.toFloatArray(i);
                if (1 != r)
                    for (var u = 0, p = i.length; u < p; u++) l[u] *= r;
                e.vertices = l
            }
        }, k.prototype.readAnimation = function(t, e, n) {
            var r = this.scale,
                i = new Array,
                a = 0;
            if (t.slots)
                for (var s in t.slots) {
                    var o = t.slots[s];
                    if (-1 == (Z = n.findSlotIndex(s))) throw new Error("Slot not found: " + s);
                    for (var h in o) {
                        var l = o[h];
                        if ("attachment" == h) {
                            (x = new $.AttachmentTimeline(l.length)).slotIndex = Z;
                            for (var u = 0, p = 0; p < l.length; p++) {
                                var c = l[p];
                                x.setFrame(u++, c.time, c.name)
                            }
                            i.push(x), a = Math.max(a, x.frames[x.getFrameCount() - 1])
                        } else if ("color" == h) {
                            for ((x = new $.ColorTimeline(l.length)).slotIndex = Z, p = u = 0; p < l.length; p++) {
                                c = l[p];
                                var d = new $.Color;
                                d.setFromString(c.color), x.setFrame(u, c.time, d.r, d.g, d.b, d.a), this.readCurve(c, x, u), u++
                            }
                            i.push(x), a = Math.max(a, x.frames[(x.getFrameCount() - 1) * $.ColorTimeline.ENTRIES])
                        } else {
                            if ("twoColor" != h) throw new Error("Invalid timeline type for a slot: " + h + " (" + s + ")");
                            for ((x = new $.TwoColorTimeline(l.length)).slotIndex = Z, p = u = 0; p < l.length; p++) {
                                c = l[p];
                                var f = new $.Color,
                                    m = new $.Color;
                                f.setFromString(c.light), m.setFromString(c.dark), x.setFrame(u, c.time, f.r, f.g, f.b, f.a, m.r, m.g, m.b), this.readCurve(c, x, u), u++
                            }
                            i.push(x), a = Math.max(a, x.frames[(x.getFrameCount() - 1) * $.TwoColorTimeline.ENTRIES])
                        }
                    }
                }
            if (t.bones)
                for (var g in t.bones) {
                    var v = t.bones[g],
                        y = n.findBoneIndex(g);
                    if (-1 == y) throw new Error("Bone not found: " + g);
                    for (var h in v)
                        if (l = v[h], "rotate" === h) {
                            for ((x = new $.RotateTimeline(l.length)).boneIndex = y, p = u = 0; p < l.length; p++) c = l[p], x.setFrame(u, c.time, c.angle), this.readCurve(c, x, u), u++;
                            i.push(x), a = Math.max(a, x.frames[(x.getFrameCount() - 1) * $.RotateTimeline.ENTRIES])
                        } else {
                            if ("translate" !== h && "scale" !== h && "shear" !== h) throw new Error("Invalid timeline type for a bone: " + h + " (" + g + ")");
                            var x = null,
                                w = 1;
                            for ("scale" === h ? x = new $.ScaleTimeline(l.length) : "shear" === h ? x = new $.ShearTimeline(l.length) : (x = new $.TranslateTimeline(l.length), w = r), x.boneIndex = y, p = u = 0; p < l.length; p++) {
                                c = l[p];
                                var M = this.getValue(c, "x", 0),
                                    E = this.getValue(c, "y", 0);
                                x.setFrame(u, c.time, M * w, E * w), this.readCurve(c, x, u), u++
                            }
                            i.push(x), a = Math.max(a, x.frames[(x.getFrameCount() - 1) * $.TranslateTimeline.ENTRIES])
                        }
                }
            if (t.ik)
                for (var A in t.ik) {
                    var T = t.ik[A],
                        b = n.findIkConstraint(A);
                    for ((x = new $.IkConstraintTimeline(T.length)).ikConstraintIndex = n.ikConstraints.indexOf(b), p = u = 0; p < T.length; p++) c = T[p], x.setFrame(u, c.time, this.getValue(c, "mix", 1), this.getValue(c, "bendPositive", !0) ? 1 : -1), this.readCurve(c, x, u), u++;
                    i.push(x), a = Math.max(a, x.frames[(x.getFrameCount() - 1) * $.IkConstraintTimeline.ENTRIES])
                }
            if (t.transform)
                for (var A in t.transform) {
                    for (T = t.transform[A], b = n.findTransformConstraint(A), (x = new $.TransformConstraintTimeline(T.length)).transformConstraintIndex = n.transformConstraints.indexOf(b), p = u = 0; p < T.length; p++) c = T[p], x.setFrame(u, c.time, this.getValue(c, "rotateMix", 1), this.getValue(c, "translateMix", 1), this.getValue(c, "scaleMix", 1), this.getValue(c, "shearMix", 1)), this.readCurve(c, x, u), u++;
                    i.push(x), a = Math.max(a, x.frames[(x.getFrameCount() - 1) * $.TransformConstraintTimeline.ENTRIES])
                }
            if (t.paths)
                for (var A in t.paths) {
                    T = t.paths[A];
                    var R = n.findPathConstraintIndex(A);
                    if (-1 == R) throw new Error("Path constraint not found: " + A);
                    var I = n.pathConstraints[R];
                    for (var h in T)
                        if (l = T[h], "position" === h || "spacing" === h) {
                            for (x = null, w = 1, "spacing" === h ? (x = new $.PathConstraintSpacingTimeline(l.length), I.spacingMode != $.SpacingMode.Length && I.spacingMode != $.SpacingMode.Fixed || (w = r)) : (x = new $.PathConstraintPositionTimeline(l.length), I.positionMode == $.PositionMode.Fixed && (w = r)), x.pathConstraintIndex = R, p = u = 0; p < l.length; p++) c = l[p], x.setFrame(u, c.time, this.getValue(c, h, 0) * w), this.readCurve(c, x, u), u++;
                            i.push(x), a = Math.max(a, x.frames[(x.getFrameCount() - 1) * $.PathConstraintPositionTimeline.ENTRIES])
                        } else if ("mix" === h) {
                        for ((x = new $.PathConstraintMixTimeline(l.length)).pathConstraintIndex = R, p = u = 0; p < l.length; p++) c = l[p], x.setFrame(u, c.time, this.getValue(c, "rotateMix", 1), this.getValue(c, "translateMix", 1)), this.readCurve(c, x, u), u++;
                        i.push(x), a = Math.max(a, x.frames[(x.getFrameCount() - 1) * $.PathConstraintMixTimeline.ENTRIES])
                    }
                }
            if (t.deform)
                for (var S in t.deform) {
                    var C = t.deform[S],
                        P = n.findSkin(S);
                    if (null == P) throw new Error("Skin not found: " + S);
                    for (var s in C) {
                        if (o = C[s], -1 == (Z = n.findSlotIndex(s))) throw new Error("Slot not found: " + o.name);
                        for (var h in o) {
                            l = o[h];
                            var _ = P.getAttachment(Z, h);
                            if (null == _) throw new Error("Deform attachment not found: " + l.name);
                            var V = null != _.bones,
                                k = _.vertices,
                                N = V ? k.length / 3 * 2 : k.length;
                            (x = new $.DeformTimeline(l.length)).slotIndex = Z, x.attachment = _;
                            for (var D = u = 0; D < l.length; D++) {
                                c = l[D];
                                var L = void 0,
                                    Y = this.getValue(c, "vertices", null);
                                if (null == Y) L = V ? $.Utils.newFloatArray(N) : k;
                                else {
                                    L = $.Utils.newFloatArray(N);
                                    var U = this.getValue(c, "offset", 0);
                                    if ($.Utils.arrayCopy(Y, 0, L, U, Y.length), 1 != r)
                                        for (var X = (p = U) + Y.length; p < X; p++) L[p] *= r;
                                    if (!V)
                                        for (p = 0; p < N; p++) L[p] += k[p]
                                }
                                x.setFrame(u, c.time, L), this.readCurve(c, x, u), u++
                            }
                            i.push(x), a = Math.max(a, x.frames[x.getFrameCount() - 1])
                        }
                    }
                }
            var F = t.drawOrder;
            if (null == F && (F = t.draworder), null != F) {
                x = new $.DrawOrderTimeline(F.length);
                var O = n.slots.length;
                for (D = u = 0; D < F.length; D++) {
                    var B = F[D],
                        W = null,
                        q = this.getValue(B, "offsets", null);
                    if (null != q) {
                        W = $.Utils.newArray(O, -1);
                        var j = $.Utils.newArray(O - q.length, 0),
                            G = 0,
                            z = 0;
                        for (p = 0; p < q.length; p++) {
                            var Z, H = q[p];
                            if (-1 == (Z = n.findSlotIndex(H.slot))) throw new Error("Slot not found: " + H.slot);
                            for (; G != Z;) j[z++] = G++;
                            W[G + H.offset] = G++
                        }
                        for (; G < O;) j[z++] = G++;
                        for (p = O - 1; 0 <= p; p--) - 1 == W[p] && (W[p] = j[--z])
                    }
                    x.setFrame(u++, B.time, W)
                }
                i.push(x), a = Math.max(a, x.frames[x.getFrameCount() - 1])
            }
            if (t.events) {
                for (x = new $.EventTimeline(t.events.length), p = u = 0; p < t.events.length; p++) {
                    var J = t.events[p],
                        Q = n.findEvent(J.name);
                    if (null == Q) throw new Error("Event not found: " + J.name);
                    var K = new $.Event($.Utils.toSinglePrecision(J.time), Q);
                    K.intValue = this.getValue(J, "int", Q.intValue), K.floatValue = this.getValue(J, "float", Q.floatValue), K.stringValue = this.getValue(J, "string", Q.stringValue), x.setFrame(u++, K)
                }
                i.push(x), a = Math.max(a, x.frames[x.getFrameCount() - 1])
            }
            if (isNaN(a)) throw new Error("Error while parsing animation, duration is NaN");
            n.animations.push(new $.Animation(e, i, a))
        }, k.prototype.readCurve = function(t, e, n) {
            if (t.curve)
                if ("stepped" === t.curve) e.setStepped(n);
                else if ("[object Array]" === Object.prototype.toString.call(t.curve)) {
                var r = t.curve;
                e.setCurve(n, r[0], r[1], r[2], r[3])
            }
        }, k.prototype.getValue = function(t, e, n) {
            return void 0 !== t[e] ? t[e] : n
        }, k.blendModeFromString = function(t) {
            if ("normal" == (t = t.toLowerCase())) return $.BlendMode.Normal;
            if ("additive" == t) return $.BlendMode.Additive;
            if ("multiply" == t) return $.BlendMode.Multiply;
            if ("screen" == t) return $.BlendMode.Screen;
            throw new Error("Unknown blend mode: " + t)
        }, k.positionModeFromString = function(t) {
            if ("fixed" == (t = t.toLowerCase())) return $.PositionMode.Fixed;
            if ("percent" == t) return $.PositionMode.Percent;
            throw new Error("Unknown position mode: " + t)
        }, k.spacingModeFromString = function(t) {
            if ("length" == (t = t.toLowerCase())) return $.SpacingMode.Length;
            if ("fixed" == t) return $.SpacingMode.Fixed;
            if ("percent" == t) return $.SpacingMode.Percent;
            throw new Error("Unknown position mode: " + t)
        }, k.rotateModeFromString = function(t) {
            if ("tangent" == (t = t.toLowerCase())) return $.RotateMode.Tangent;
            if ("chain" == t) return $.RotateMode.Chain;
            if ("chainscale" == t) return $.RotateMode.ChainScale;
            throw new Error("Unknown rotate mode: " + t)
        }, k.transformModeFromString = function(t) {
            if ("normal" == (t = t.toLowerCase())) return $.TransformMode.Normal;
            if ("onlytranslation" == t) return $.TransformMode.OnlyTranslation;
            if ("norotationorreflection" == t) return $.TransformMode.NoRotationOrReflection;
            if ("noscale" == t) return $.TransformMode.NoScale;
            if ("noscaleorreflection" == t) return $.TransformMode.NoScaleOrReflection;
            throw new Error("Unknown transform mode: " + t)
        }, k);

        function k(t) {
            this.scale = 1, this.linkedMeshes = new Array, this.attachmentLoader = t
        }
        $.SkeletonJson = t;
        var w = function(t, e, n, r) {
            this.mesh = t, this.skin = e, this.slotIndex = n, this.parent = r
        }
    }(spine = spine || {}),
    function(t) {
        var e = (n.prototype.addAttachment = function(t, e, n) {
            if (null == n) throw new Error("attachment cannot be null.");
            var r = this.attachments;
            t >= r.length && (r.length = t + 1), r[t] || (r[t] = {}), r[t][e] = n
        }, n.prototype.getAttachment = function(t, e) {
            var n = this.attachments[t];
            return n ? n[e] : null
        }, n.prototype.attachAll = function(t, e) {
            for (var n = 0, r = 0; r < t.slots.length; r++) {
                var i = t.slots[r],
                    a = i.getAttachment();
                if (a && n < e.attachments.length) {
                    var s = e.attachments[n];
                    for (var o in s)
                        if (a == s[o]) {
                            var h = this.getAttachment(n, o);
                            null != h && i.setAttachment(h);
                            break
                        }
                }
                n++
            }
        }, n);

        function n(t) {
            if (this.attachments = new Array, null == t) throw new Error("name cannot be null.");
            this.name = t
        }
        t.Skin = e
    }(spine = spine || {}),
    function(n) {
        var t = (e.prototype.getAttachment = function() {
            return this.attachment
        }, e.prototype.setAttachment = function(t) {
            this.attachment != t && (this.attachment = t, this.attachmentTime = this.bone.skeleton.time, this.attachmentVertices.length = 0)
        }, e.prototype.setAttachmentTime = function(t) {
            this.attachmentTime = this.bone.skeleton.time - t
        }, e.prototype.getAttachmentTime = function() {
            return this.bone.skeleton.time - this.attachmentTime
        }, e.prototype.setToSetupPose = function() {
            this.color.setFromColor(this.data.color), null != this.darkColor && this.darkColor.setFromColor(this.data.darkColor), null == this.data.attachmentName ? this.attachment = null : (this.attachment = null, this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName)))
        }, e);

        function e(t, e) {
            if (this.attachmentVertices = new Array, null == t) throw new Error("data cannot be null.");
            if (null == e) throw new Error("bone cannot be null.");
            this.data = t, this.bone = e, this.color = new n.Color, this.darkColor = null == t.darkColor ? null : new n.Color, this.setToSetupPose()
        }
        n.Slot = t
    }(spine = spine || {}),
    function(r) {
        function t(t, e, n) {
            if (this.color = new r.Color(1, 1, 1, 1), t < 0) throw new Error("index must be >= 0.");
            if (null == e) throw new Error("name cannot be null.");
            if (null == n) throw new Error("boneData cannot be null.");
            this.index = t, this.name = e, this.boneData = n
        }
        r.SlotData = t
    }(spine = spine || {}),
    function(t) {
        var e, n, r, i, a = (s.prototype.getImage = function() {
            return this._image
        }, s.filterFromString = function(t) {
            switch (t.toLowerCase()) {
                case "nearest":
                    return e.Nearest;
                case "linear":
                    return e.Linear;
                case "mipmap":
                    return e.MipMap;
                case "mipmapnearestnearest":
                    return e.MipMapNearestNearest;
                case "mipmaplinearnearest":
                    return e.MipMapLinearNearest;
                case "mipmapnearestlinear":
                    return e.MipMapNearestLinear;
                case "mipmaplinearlinear":
                    return e.MipMapLinearLinear;
                default:
                    throw new Error("Unknown texture filter " + t)
            }
        }, s.wrapFromString = function(t) {
            switch (t.toLowerCase()) {
                case "mirroredtepeat":
                    return r.MirroredRepeat;
                case "clamptoedge":
                    return r.ClampToEdge;
                case "repeat":
                    return r.Repeat;
                default:
                    throw new Error("Unknown texture wrap " + t)
            }
        }, s);

        function s(t) {
            this._image = t
        }
        t.Texture = a, (n = e = t.TextureFilter || (t.TextureFilter = {}))[n.Nearest = 9728] = "Nearest", n[n.Linear = 9729] = "Linear", n[n.MipMap = 9987] = "MipMap", n[n.MipMapNearestNearest = 9984] = "MipMapNearestNearest", n[n.MipMapLinearNearest = 9985] = "MipMapLinearNearest", n[n.MipMapNearestLinear = 9986] = "MipMapNearestLinear", n[n.MipMapLinearLinear = 9987] = "MipMapLinearLinear", (i = r = t.TextureWrap || (t.TextureWrap = {}))[i.MirroredRepeat = 33648] = "MirroredRepeat", i[i.ClampToEdge = 33071] = "ClampToEdge", i[i.Repeat = 10497] = "Repeat";

        function o() {
            this.u = 0, this.v = 0, this.u2 = 0, this.v2 = 0, this.width = 0, this.height = 0, this.rotate = !1, this.offsetX = 0, this.offsetY = 0, this.originalWidth = 0, this.originalHeight = 0
        }
        t.TextureRegion = o;
        var h, l = (h = t.Texture, __extends(u, h), u.prototype.setFilters = function(t, e) {}, u.prototype.setWraps = function(t, e) {}, u.prototype.dispose = function() {}, u);

        function u() {
            return null !== h && h.apply(this, arguments) || this
        }
        t.FakeTexture = l
    }(spine = spine || {}),
    function(c) {
        var t = (e.prototype.load = function(t, e) {
            if (null == e) throw new Error("textureLoader cannot be null.");
            for (var n = new d(t), r = new Array(4), i = null;;) {
                var a = n.readLine();
                if (null == a) break;
                if (0 == (a = a.trim()).length) i = null;
                else if (i) {
                    var s = new m;
                    s.name = a, s.page = i, s.rotate = "true" == n.readValue(), n.readTuple(r);
                    var o = parseInt(r[0]),
                        h = parseInt(r[1]);
                    n.readTuple(r);
                    var l = parseInt(r[0]),
                        u = parseInt(r[1]);
                    s.u = o / i.width, s.v = h / i.height, s.rotate ? (s.u2 = (o + u) / i.width, s.v2 = (h + l) / i.height) : (s.u2 = (o + l) / i.width, s.v2 = (h + u) / i.height), s.x = o, s.y = h, s.width = Math.abs(l), s.height = Math.abs(u), 4 == n.readTuple(r) && 4 == n.readTuple(r) && n.readTuple(r), s.originalWidth = parseInt(r[0]), s.originalHeight = parseInt(r[1]), n.readTuple(r), s.offsetX = parseInt(r[0]), s.offsetY = parseInt(r[1]), s.index = parseInt(n.readValue()), s.texture = i.texture, this.regions.push(s)
                } else {
                    (i = new f).name = a, 2 == n.readTuple(r) && (i.width = parseInt(r[0]), i.height = parseInt(r[1]), n.readTuple(r)), n.readTuple(r), i.minFilter = c.Texture.filterFromString(r[0]), i.magFilter = c.Texture.filterFromString(r[1]);
                    var p = n.readValue();
                    i.uWrap = c.TextureWrap.ClampToEdge, i.vWrap = c.TextureWrap.ClampToEdge, "x" == p ? i.uWrap = c.TextureWrap.Repeat : "y" == p ? i.vWrap = c.TextureWrap.Repeat : "xy" == p && (i.uWrap = i.vWrap = c.TextureWrap.Repeat), i.texture = e(a), i.texture.setFilters(i.minFilter, i.magFilter), i.texture.setWraps(i.uWrap, i.vWrap), i.width = i.texture.getImage().width, i.height = i.texture.getImage().height, this.pages.push(i)
                }
            }
        }, e.prototype.findRegion = function(t) {
            for (var e = 0; e < this.regions.length; e++)
                if (this.regions[e].name == t) return this.regions[e];
            return null
        }, e.prototype.dispose = function() {
            for (var t = 0; t < this.pages.length; t++) this.pages[t].texture.dispose()
        }, e);

        function e(t, e) {
            this.pages = new Array, this.regions = new Array, this.load(t, e)
        }
        c.TextureAtlas = t;
        var d = (n.prototype.readLine = function() {
            return this.index >= this.lines.length ? null : this.lines[this.index++]
        }, n.prototype.readValue = function() {
            var t = this.readLine(),
                e = t.indexOf(":");
            if (-1 == e) throw new Error("Invalid line: " + t);
            return t.substring(e + 1).trim()
        }, n.prototype.readTuple = function(t) {
            var e = this.readLine(),
                n = e.indexOf(":");
            if (-1 == n) throw new Error("Invalid line: " + e);
            for (var r = 0, i = n + 1; r < 3; r++) {
                var a = e.indexOf(",", i);
                if (-1 == a) break;
                t[r] = e.substr(i, a - i).trim(), i = a + 1
            }
            return t[r] = e.substring(i).trim(), r + 1
        }, n);

        function n(t) {
            this.index = 0, this.lines = t.split(/\r\n|\r|\n/)
        }
        var f = function() {};
        c.TextureAtlasPage = f;
        var r, m = (r = c.TextureRegion, __extends(i, r), i);

        function i() {
            return null !== r && r.apply(this, arguments) || this
        }
        c.TextureAtlasRegion = m
    }(spine = spine || {}),
    function(S) {
        var t = (e.prototype.apply = function() {
            this.update()
        }, e.prototype.update = function() {
            this.data.local ? this.data.relative ? this.applyRelativeLocal() : this.applyAbsoluteLocal() : this.data.relative ? this.applyRelativeWorld() : this.applyAbsoluteWorld()
        }, e.prototype.applyAbsoluteWorld = function() {
            for (var t = this.rotateMix, e = this.translateMix, n = this.scaleMix, r = this.shearMix, i = this.target, a = i.a, s = i.b, o = i.c, h = i.d, l = 0 < a * h - s * o ? S.MathUtils.degRad : -S.MathUtils.degRad, u = this.data.offsetRotation * l, p = this.data.offsetShearY * l, c = this.bones, d = 0, f = c.length; d < f; d++) {
                var m = c[d],
                    g = !1;
                if (0 != t) {
                    var v = m.a,
                        y = m.b,
                        x = m.c,
                        w = m.d;
                    (R = Math.atan2(o, a) - Math.atan2(x, v) + u) > S.MathUtils.PI ? R -= S.MathUtils.PI2 : R < -S.MathUtils.PI && (R += S.MathUtils.PI2), R *= t;
                    var M = Math.cos(R),
                        E = Math.sin(R);
                    m.a = M * v - E * x, m.b = M * y - E * w, m.c = E * v + M * x, m.d = E * y + M * w, g = !0
                }
                if (0 != e) {
                    var A = this.temp;
                    i.localToWorld(A.set(this.data.offsetX, this.data.offsetY)), m.worldX += (A.x - m.worldX) * e, m.worldY += (A.y - m.worldY) * e, g = !0
                }
                if (0 < n) {
                    var T = Math.sqrt(m.a * m.a + m.c * m.c),
                        b = Math.sqrt(a * a + o * o);
                    1e-5 < T && (T = (T + (b - T + this.data.offsetScaleX) * n) / T), m.a *= T, m.c *= T, T = Math.sqrt(m.b * m.b + m.d * m.d), b = Math.sqrt(s * s + h * h), 1e-5 < T && (T = (T + (b - T + this.data.offsetScaleY) * n) / T), m.b *= T, m.d *= T, g = !0
                }
                if (0 < r) {
                    y = m.b, w = m.d;
                    var R, I = Math.atan2(w, y);
                    (R = Math.atan2(h, s) - Math.atan2(o, a) - (I - Math.atan2(m.c, m.a))) > S.MathUtils.PI ? R -= S.MathUtils.PI2 : R < -S.MathUtils.PI && (R += S.MathUtils.PI2), R = I + (R + p) * r, T = Math.sqrt(y * y + w * w), m.b = Math.cos(R) * T, m.d = Math.sin(R) * T, g = !0
                }
                g && (m.appliedValid = !1)
            }
        }, e.prototype.applyRelativeWorld = function() {
            for (var t = this.rotateMix, e = this.translateMix, n = this.scaleMix, r = this.shearMix, i = this.target, a = i.a, s = i.b, o = i.c, h = i.d, l = 0 < a * h - s * o ? S.MathUtils.degRad : -S.MathUtils.degRad, u = this.data.offsetRotation * l, p = this.data.offsetShearY * l, c = this.bones, d = 0, f = c.length; d < f; d++) {
                var m, g = c[d],
                    v = !1;
                if (0 != t) {
                    var y = g.a,
                        x = g.b,
                        w = g.c,
                        M = g.d;
                    (m = Math.atan2(o, a) + u) > S.MathUtils.PI ? m -= S.MathUtils.PI2 : m < -S.MathUtils.PI && (m += S.MathUtils.PI2), m *= t;
                    var E = Math.cos(m),
                        A = Math.sin(m);
                    g.a = E * y - A * w, g.b = E * x - A * M, g.c = A * y + E * w, g.d = A * x + E * M, v = !0
                }
                if (0 != e) {
                    var T = this.temp;
                    i.localToWorld(T.set(this.data.offsetX, this.data.offsetY)), g.worldX += T.x * e, g.worldY += T.y * e, v = !0
                }
                if (0 < n) {
                    var b = (Math.sqrt(a * a + o * o) - 1 + this.data.offsetScaleX) * n + 1;
                    g.a *= b, g.c *= b, b = (Math.sqrt(s * s + h * h) - 1 + this.data.offsetScaleY) * n + 1, g.b *= b, g.d *= b, v = !0
                }
                if (0 < r)(m = Math.atan2(h, s) - Math.atan2(o, a)) > S.MathUtils.PI ? m -= S.MathUtils.PI2 : m < -S.MathUtils.PI && (m += S.MathUtils.PI2), x = g.b, M = g.d, m = Math.atan2(M, x) + (m - S.MathUtils.PI / 2 + p) * r, b = Math.sqrt(x * x + M * M), g.b = Math.cos(m) * b, g.d = Math.sin(m) * b, v = !0;
                v && (g.appliedValid = !1)
            }
        }, e.prototype.applyAbsoluteLocal = function() {
            var t = this.rotateMix,
                e = this.translateMix,
                n = this.scaleMix,
                r = this.shearMix,
                i = this.target;
            i.appliedValid || i.updateAppliedTransform();
            for (var a = this.bones, s = 0, o = a.length; s < o; s++) {
                var h = a[s];
                h.appliedValid || h.updateAppliedTransform();
                var l = h.arotation;
                if (0 != t) {
                    var u = i.arotation - l + this.data.offsetRotation;
                    l += (u -= 360 * (16384 - (16384.499999999996 - u / 360 | 0))) * t
                }
                var p = h.ax,
                    c = h.ay;
                0 != e && (p += (i.ax - p + this.data.offsetX) * e, c += (i.ay - c + this.data.offsetY) * e);
                var d = h.ascaleX,
                    f = h.ascaleY;
                0 < n && (1e-5 < d && (d = (d + (i.ascaleX - d + this.data.offsetScaleX) * n) / d), 1e-5 < f && (f = (f + (i.ascaleY - f + this.data.offsetScaleY) * n) / f));
                var m = h.ashearY;
                0 < r && (u = i.ashearY - m + this.data.offsetShearY, u -= 360 * (16384 - (16384.499999999996 - u / 360 | 0)), h.shearY += u * r), h.updateWorldTransformWith(p, c, l, d, f, h.ashearX, m)
            }
        }, e.prototype.applyRelativeLocal = function() {
            var t = this.rotateMix,
                e = this.translateMix,
                n = this.scaleMix,
                r = this.shearMix,
                i = this.target;
            i.appliedValid || i.updateAppliedTransform();
            for (var a = this.bones, s = 0, o = a.length; s < o; s++) {
                var h = a[s];
                h.appliedValid || h.updateAppliedTransform();
                var l = h.arotation;
                0 != t && (l += (i.arotation + this.data.offsetRotation) * t);
                var u = h.ax,
                    p = h.ay;
                0 != e && (u += (i.ax + this.data.offsetX) * e, p += (i.ay + this.data.offsetY) * e);
                var c = h.ascaleX,
                    d = h.ascaleY;
                0 < n && (1e-5 < c && (c *= (i.ascaleX - 1 + this.data.offsetScaleX) * n + 1), 1e-5 < d && (d *= (i.ascaleY - 1 + this.data.offsetScaleY) * n + 1));
                var f = h.ashearY;
                0 < r && (f += (i.ashearY + this.data.offsetShearY) * r), h.updateWorldTransformWith(u, p, l, c, d, h.ashearX, f)
            }
        }, e.prototype.getOrder = function() {
            return this.data.order
        }, e);

        function e(t, e) {
            if (this.rotateMix = 0, this.translateMix = 0, this.scaleMix = 0, this.shearMix = 0, this.temp = new S.Vector2, null == t) throw new Error("data cannot be null.");
            if (null == e) throw new Error("skeleton cannot be null.");
            this.data = t, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.scaleMix = t.scaleMix, this.shearMix = t.shearMix, this.bones = new Array;
            for (var n = 0; n < t.bones.length; n++) this.bones.push(e.findBone(t.bones[n].name));
            this.target = e.findBone(t.target.name)
        }
        S.TransformConstraint = t
    }(spine = spine || {}), (spine || (spine = {})).TransformConstraintData = function(t) {
        if (this.order = 0, this.bones = new Array, this.rotateMix = 0, this.translateMix = 0, this.scaleMix = 0, this.shearMix = 0, this.offsetRotation = 0, this.offsetX = 0, this.offsetY = 0, this.offsetScaleX = 0, this.offsetScaleY = 0, this.offsetShearY = 0, this.relative = !1, this.local = !1, null == t) throw new Error("name cannot be null.");
        this.name = t
    },
    function(t) {
        var e = (O.prototype.triangulate = function(t) {
            for (var e = t, n = t.length >> 1, r = this.indicesArray, i = r.length = 0; i < n; i++) r[i] = i;
            for (var a = this.isConcaveArray, s = (i = a.length = 0, n); i < s; ++i) a[i] = O.isConcave(i, n, e, r);
            var o = this.triangles;
            for (o.length = 0; 3 < n;) {
                for (var h = n - 1, l = (i = 0, 1);;) {
                    t: if (!a[i]) {
                        for (var u = r[h] << 1, p = r[i] << 1, c = r[l] << 1, d = e[u], f = e[1 + u], m = e[p], g = e[1 + p], v = e[c], y = e[1 + c], x = (l + 1) % n; x != h; x = (x + 1) % n)
                            if (a[x]) {
                                var w = r[x] << 1,
                                    M = e[w],
                                    E = e[1 + w];
                                if (O.positiveArea(v, y, d, f, M, E) && O.positiveArea(d, f, m, g, M, E) && O.positiveArea(m, g, v, y, M, E)) break t
                            } break
                    }if (0 == l) {
                        do {
                            if (!a[i]) break;
                            i--
                        } while (0 < i);
                        break
                    }
                    h = i,
                    l = ((i = l) + 1) % n
                }
                o.push(r[(n + i - 1) % n]), o.push(r[i]), o.push(r[(i + 1) % n]), r.splice(i, 1), a.splice(i, 1);
                var A = (--n + i - 1) % n,
                    T = i == n ? 0 : i;
                a[A] = O.isConcave(A, n, e, r), a[T] = O.isConcave(T, n, e, r)
            }
            return 3 == n && (o.push(r[2]), o.push(r[0]), o.push(r[1])), o
        }, O.prototype.decompose = function(t, e) {
            var n = t,
                r = this.convexPolygons;
            this.polygonPool.freeAll(r), r.length = 0;
            var i = this.convexPolygonsIndices;
            this.polygonIndicesPool.freeAll(i), i.length = 0;
            var a = this.polygonIndicesPool.obtain();
            a.length = 0;
            for (var s = this.polygonPool.obtain(), o = -1, h = s.length = 0, l = 0, u = e.length; l < u; l += 3) {
                var p = e[l] << 1,
                    c = e[l + 1] << 1,
                    d = e[l + 2] << 1,
                    f = n[p],
                    m = n[1 + p],
                    g = n[c],
                    v = n[1 + c],
                    y = n[d],
                    x = n[1 + d],
                    w = !1;
                if (o == p) {
                    var M = s.length - 4,
                        E = O.winding(s[M], s[M + 1], s[M + 2], s[M + 3], y, x),
                        A = O.winding(y, x, s[0], s[1], s[2], s[3]);
                    E == h && A == h && (s.push(y), s.push(x), a.push(d), w = !0)
                }
                w || (0 < s.length ? (r.push(s), i.push(a)) : (this.polygonPool.free(s), this.polygonIndicesPool.free(a)), (s = this.polygonPool.obtain()).length = 0, s.push(f), s.push(m), s.push(g), s.push(v), s.push(y), s.push(x), (a = this.polygonIndicesPool.obtain()).length = 0, a.push(p), a.push(c), a.push(d), h = O.winding(f, m, g, v, y, x), o = p)
            }
            for (0 < s.length && (r.push(s), i.push(a)), l = 0, u = r.length; l < u; l++)
                if (0 != (a = i[l]).length)
                    for (var T = a[0], b = a[a.length - 1], R = (s = r[l])[M = s.length - 4], I = s[M + 1], S = s[M + 2], C = s[M + 3], P = s[0], _ = s[1], V = s[2], k = s[3], N = O.winding(R, I, S, C, P, _), D = 0; D < u; D++)
                        if (D != l) {
                            var L = i[D];
                            if (3 == L.length) {
                                var Y = L[0],
                                    U = L[1],
                                    X = L[2],
                                    F = r[D];
                                y = F[F.length - 2], x = F[F.length - 1], Y == T && U == b && (E = O.winding(R, I, S, C, y, x), A = O.winding(y, x, P, _, V, k), E == N && A == N && (F.length = 0, L.length = 0, s.push(y), s.push(x), a.push(X), R = S, I = C, S = y, C = x, D = 0))
                            }
                        } for (l = r.length - 1; 0 <= l; l--) 0 == (s = r[l]).length && (r.splice(l, 1), this.polygonPool.free(s), a = i[l], i.splice(l, 1), this.polygonIndicesPool.free(a));
            return r
        }, O.isConcave = function(t, e, n, r) {
            var i = r[(e + t - 1) % e] << 1,
                a = r[t] << 1,
                s = r[(t + 1) % e] << 1;
            return !this.positiveArea(n[i], n[1 + i], n[a], n[1 + a], n[s], n[1 + s])
        }, O.positiveArea = function(t, e, n, r, i, a) {
            return 0 <= t * (a - r) + n * (e - a) + i * (r - e)
        }, O.winding = function(t, e, n, r, i, a) {
            var s = n - t,
                o = r - e;
            return 0 <= i * o - a * s + s * e - t * o ? 1 : -1
        }, O);

        function O() {
            this.convexPolygons = new Array, this.convexPolygonsIndices = new Array, this.indicesArray = new Array, this.isConcaveArray = new Array, this.triangles = new Array, this.polygonPool = new t.Pool(function() {
                return new Array
            }), this.polygonIndicesPool = new t.Pool(function() {
                return new Array
            })
        }
        t.Triangulator = e
    }(spine = spine || {}),
    function(t) {
        var e = (n.prototype.add = function(t) {
            var e = this.contains(t);
            return this.array[0 | t] = 0 | t, !e
        }, n.prototype.contains = function(t) {
            return null != this.array[0 | t]
        }, n.prototype.remove = function(t) {
            this.array[0 | t] = void 0
        }, n.prototype.clear = function() {
            this.array.length = 0
        }, n);

        function n() {
            this.array = new Array
        }
        t.IntSet = e;
        var r = (i.prototype.set = function(t, e, n, r) {
            return this.r = t, this.g = e, this.b = n, this.a = r, this.clamp(), this
        }, i.prototype.setFromColor = function(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this
        }, i.prototype.setFromString = function(t) {
            return t = "#" == t.charAt(0) ? t.substr(1) : t, this.r = parseInt(t.substr(0, 2), 16) / 255, this.g = parseInt(t.substr(2, 2), 16) / 255, this.b = parseInt(t.substr(4, 2), 16) / 255, this.a = (8 != t.length ? 255 : parseInt(t.substr(6, 2), 16)) / 255, this
        }, i.prototype.add = function(t, e, n, r) {
            return this.r += t, this.g += e, this.b += n, this.a += r, this.clamp(), this
        }, i.prototype.clamp = function() {
            return this.r < 0 ? this.r = 0 : 1 < this.r && (this.r = 1), this.g < 0 ? this.g = 0 : 1 < this.g && (this.g = 1), this.b < 0 ? this.b = 0 : 1 < this.b && (this.b = 1), this.a < 0 ? this.a = 0 : 1 < this.a && (this.a = 1), this
        }, i.WHITE = new i(1, 1, 1, 1), i.RED = new i(1, 0, 0, 1), i.GREEN = new i(0, 1, 0, 1), i.BLUE = new i(0, 0, 1, 1), i.MAGENTA = new i(1, 0, 1, 1), i);

        function i(t, e, n, r) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), this.r = t, this.g = e, this.b = n, this.a = r
        }
        t.Color = r;
        var a = (s.clamp = function(t, e, n) {
            return t < e ? e : n < t ? n : t
        }, s.cosDeg = function(t) {
            return Math.cos(t * s.degRad)
        }, s.sinDeg = function(t) {
            return Math.sin(t * s.degRad)
        }, s.signum = function(t) {
            return 0 < t ? 1 : t < 0 ? -1 : 0
        }, s.toInt = function(t) {
            return 0 < t ? Math.floor(t) : Math.ceil(t)
        }, s.cbrt = function(t) {
            var e = Math.pow(Math.abs(t), 1 / 3);
            return t < 0 ? -e : e
        }, s.randomTriangular = function(t, e) {
            return s.randomTriangularWith(t, e, .5 * (t + e))
        }, s.randomTriangularWith = function(t, e, n) {
            var r = Math.random(),
                i = e - t;
            return r <= (n - t) / i ? t + Math.sqrt(r * i * (n - t)) : e - Math.sqrt((1 - r) * i * (e - n))
        }, s.PI2 = 2 * (s.PI = 3.1415927), s.radDeg = s.radiansToDegrees = 180 / s.PI, s.degRad = s.degreesToRadians = s.PI / 180, s);

        function s() {}
        t.MathUtils = a;
        var o = (h.prototype.apply = function(t, e, n) {
            return t + (e - t) * this.applyInternal(n)
        }, h);

        function h() {}
        t.Interpolation = o;
        var l, u = (__extends(p, l = o), p.prototype.applyInternal = function(t) {
            return t <= .5 ? Math.pow(2 * t, this.power) / 2 : Math.pow(2 * (t - 1), this.power) / (this.power % 2 == 0 ? -2 : 2) + 1
        }, p);

        function p(t) {
            var e = l.call(this) || this;
            return e.power = 2, e.power = t, e
        }
        t.Pow = u;
        var c, d = (__extends(f, c = u), f.prototype.applyInternal = function(t) {
            return Math.pow(t - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1
        }, f);

        function f(t) {
            return c.call(this, t) || this
        }
        t.PowOut = d;
        var m = (g.arrayCopy = function(t, e, n, r, i) {
            for (var a = e, s = r; a < e + i; a++, s++) n[s] = t[a]
        }, g.setArraySize = function(t, e, n) {
            void 0 === n && (n = 0);
            var r = t.length;
            if (r == e) return t;
            if (r < (t.length = e))
                for (var i = r; i < e; i++) t[i] = n;
            return t
        }, g.ensureArrayCapacity = function(t, e, n) {
            return void 0 === n && (n = 0), t.length >= e ? t : g.setArraySize(t, e, n)
        }, g.newArray = function(t, e) {
            for (var n = new Array(t), r = 0; r < t; r++) n[r] = e;
            return n
        }, g.newFloatArray = function(t) {
            if (g.SUPPORTS_TYPED_ARRAYS) return new Float32Array(t);
            for (var e = new Array(t), n = 0; n < e.length; n++) e[n] = 0;
            return e
        }, g.newShortArray = function(t) {
            if (g.SUPPORTS_TYPED_ARRAYS) return new Int16Array(t);
            for (var e = new Array(t), n = 0; n < e.length; n++) e[n] = 0;
            return e
        }, g.toFloatArray = function(t) {
            return g.SUPPORTS_TYPED_ARRAYS ? new Float32Array(t) : t
        }, g.toSinglePrecision = function(t) {
            return g.SUPPORTS_TYPED_ARRAYS ? Math.fround(t) : t
        }, g.webkit602BugfixHelper = function(t, e) {}, g.SUPPORTS_TYPED_ARRAYS = "undefined" != typeof Float32Array, g);

        function g() {}
        t.Utils = m;
        var v = (y.logBones = function(t) {
            for (var e = 0; e < t.bones.length; e++) {
                var n = t.bones[e];
                console.log(n.data.name + ", " + n.a + ", " + n.b + ", " + n.c + ", " + n.d + ", " + n.worldX + ", " + n.worldY)
            }
        }, y);

        function y() {}
        t.DebugUtils = v;
        var x = (w.prototype.obtain = function() {
            return 0 < this.items.length ? this.items.pop() : this.instantiator()
        }, w.prototype.free = function(t) {
            t.reset && t.reset(), this.items.push(t)
        }, w.prototype.freeAll = function(t) {
            for (var e = 0; e < t.length; e++) t[e].reset && t[e].reset(), this.items[e] = t[e]
        }, w.prototype.clear = function() {
            this.items.length = 0
        }, w);

        function w(t) {
            this.items = new Array, this.instantiator = t
        }
        t.Pool = x;
        var M = (E.prototype.set = function(t, e) {
            return this.x = t, this.y = e, this
        }, E.prototype.length = function() {
            var t = this.x,
                e = this.y;
            return Math.sqrt(t * t + e * e)
        }, E.prototype.normalize = function() {
            var t = this.length();
            return 0 != t && (this.x /= t, this.y /= t), this
        }, E);

        function E(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
        }
        t.Vector2 = M;
        var A = (T.prototype.update = function() {
            var t = Date.now() / 1e3;
            this.delta = t - this.lastTime, this.frameTime += this.delta, this.totalTime += this.delta, this.delta > this.maxDelta && (this.delta = this.maxDelta), this.lastTime = t, this.frameCount++, 1 < this.frameTime && (this.framesPerSecond = this.frameCount / this.frameTime, this.frameTime = 0, this.frameCount = 0)
        }, T);

        function T() {
            this.maxDelta = .064, this.framesPerSecond = 0, this.delta = 0, this.totalTime = 0, this.lastTime = Date.now() / 1e3, this.frameCount = 0, this.frameTime = 0
        }
        t.TimeKeeper = A;
        var b = (R.prototype.hasEnoughData = function() {
            return this.addedValues >= this.values.length
        }, R.prototype.addValue = function(t) {
            this.addedValues < this.values.length && this.addedValues++, this.values[this.lastValue++] = t, this.lastValue > this.values.length - 1 && (this.lastValue = 0), this.dirty = !0
        }, R.prototype.getMean = function() {
            if (this.hasEnoughData()) {
                if (this.dirty) {
                    for (var t = 0, e = 0; e < this.values.length; e++) t += this.values[e];
                    this.mean = t / this.values.length, this.dirty = !1
                }
                return this.mean
            }
            return 0
        }, R);

        function R(t) {
            void 0 === t && (t = 32), this.addedValues = 0, this.lastValue = 0, this.mean = 0, this.dirty = !0, this.values = new Array(t)
        }
        t.WindowedMean = b
    }(spine = spine || {}),
    function() {
        var e;
        Math.fround || (Math.fround = (e = new Float32Array(1), function(t) {
            return e[0] = t, e[0]
        }))
    }(),
    function(t) {
        function e(t) {
            if (null == t) throw new Error("name cannot be null.");
            this.name = t
        }
        t.Attachment = e;
        var n, r = (__extends(i, n = e), i.prototype.computeWorldVertices = function(t, e, n, r, i, a) {
            n = i + (n >> 1) * a;
            var s = t.bone.skeleton,
                o = t.attachmentVertices,
                h = this.vertices,
                l = this.bones;
            if (null != l) {
                for (var u = 0, p = 0, c = 0; c < e; c += 2) u += (g = l[u]) + 1, p += g;
                var d = s.bones;
                if (0 == o.length)
                    for (S = i, T = 3 * p; S < n; S += a) {
                        var f = 0,
                            m = 0,
                            g = l[u++];
                        for (g += u; u < g; u++, T += 3) {
                            w = d[l[u]], C = h[T], P = h[T + 1];
                            var v = h[T + 2];
                            f += (C * w.a + P * w.b + w.worldX) * v, m += (C * w.c + P * w.d + w.worldY) * v
                        }
                        r[S] = f, r[S + 1] = m
                    } else
                        for (var y = o, x = (S = i, T = 3 * p, p << 1); S < n; S += a) {
                            for (m = f = 0, g = l[u++], g += u; u < g; u++, T += 3, x += 2) w = d[l[u]], C = h[T] + y[x], P = h[T + 1] + y[x + 1], v = h[T + 2], f += (C * w.a + P * w.b + w.worldX) * v, m += (C * w.c + P * w.d + w.worldY) * v;
                            r[S] = f, r[S + 1] = m
                        }
            } else {
                0 < o.length && (h = o);
                for (var w, M = (w = t.bone).worldX, E = w.worldY, A = w.a, T = w.b, b = w.c, R = w.d, I = e, S = i; S < n; I += 2, S += a) {
                    var C = h[I],
                        P = h[I + 1];
                    r[S] = C * A + P * T + M, r[S + 1] = C * b + P * R + E
                }
            }
        }, i.prototype.applyDeform = function(t) {
            return this == t
        }, i.nextID = 0, i);

        function i(t) {
            var e = n.call(this, t) || this;
            return e.id = (65535 & i.nextID++) << 11, e.worldVerticesLength = 0, e
        }
        t.VertexAttachment = r
    }(spine = spine || {}),
    function(t) {
        var e;
        (e = t.AttachmentType || (t.AttachmentType = {}))[e.Region = 0] = "Region", e[e.BoundingBox = 1] = "BoundingBox", e[e.Mesh = 2] = "Mesh", e[e.LinkedMesh = 3] = "LinkedMesh", e[e.Path = 4] = "Path", e[e.Point = 5] = "Point"
    }(spine = spine || {}),
    function(n) {
        var r, t = (r = n.VertexAttachment, __extends(e, r), e);

        function e(t) {
            var e = r.call(this, t) || this;
            return e.color = new n.Color(1, 1, 1, 1), e
        }
        n.BoundingBoxAttachment = t
    }(spine = spine || {}),
    function(n) {
        var r, t = (r = n.VertexAttachment, __extends(e, r), e);

        function e(t) {
            var e = r.call(this, t) || this;
            return e.color = new n.Color(.2275, .2275, .8078, 1), e
        }
        n.ClippingAttachment = t
    }(spine = spine || {}),
    function(h) {
        var n, t = (n = h.VertexAttachment, __extends(e, n), e.prototype.updateUVs = function() {
            var t = 0,
                e = 0,
                n = 0,
                r = 0;
            null == this.region ? (t = e = 0, n = r = 1) : (t = this.region.u, e = this.region.v, n = this.region.u2 - t, r = this.region.v2 - e);
            var i = this.regionUVs;
            null != this.uvs && this.uvs.length == i.length || (this.uvs = h.Utils.newFloatArray(i.length));
            var a = this.uvs;
            if (this.region.rotate)
                for (var s = 0, o = a.length; s < o; s += 2) a[s] = t + i[s + 1] * n, a[s + 1] = e + r - i[s] * r;
            else
                for (s = 0, o = a.length; s < o; s += 2) a[s] = t + i[s] * n, a[s + 1] = e + i[s + 1] * r
        }, e.prototype.applyDeform = function(t) {
            return this == t || this.inheritDeform && this.parentMesh == t
        }, e.prototype.getParentMesh = function() {
            return this.parentMesh
        }, e.prototype.setParentMesh = function(t) {
            null != (this.parentMesh = t) && (this.bones = t.bones, this.vertices = t.vertices, this.worldVerticesLength = t.worldVerticesLength, this.regionUVs = t.regionUVs, this.triangles = t.triangles, this.hullLength = t.hullLength, this.worldVerticesLength = t.worldVerticesLength)
        }, e);

        function e(t) {
            var e = n.call(this, t) || this;
            return e.color = new h.Color(1, 1, 1, 1), e.inheritDeform = !1, e.tempColor = new h.Color(0, 0, 0, 0), e
        }
        h.MeshAttachment = t
    }(spine = spine || {}),
    function(n) {
        var r, t = (r = n.VertexAttachment, __extends(e, r), e);

        function e(t) {
            var e = r.call(this, t) || this;
            return e.closed = !1, e.constantSpeed = !1, e.color = new n.Color(1, 1, 1, 1), e
        }
        n.PathAttachment = t
    }(spine = spine || {}),
    function(a) {
        var n, t = (n = a.VertexAttachment, __extends(e, n), e.prototype.computeWorldPosition = function(t, e) {
            return e.x = this.x * t.a + this.y * t.b + t.worldX, e.y = this.x * t.c + this.y * t.d + t.worldY, e
        }, e.prototype.computeWorldRotation = function(t) {
            var e = a.MathUtils.cosDeg(this.rotation),
                n = a.MathUtils.sinDeg(this.rotation),
                r = e * t.a + n * t.b,
                i = e * t.c + n * t.d;
            return Math.atan2(i, r) * a.MathUtils.radDeg
        }, e);

        function e(t) {
            var e = n.call(this, t) || this;
            return e.color = new a.Color(.38, .94, 0, 1), e
        }
        a.PointAttachment = t
    }(spine = spine || {}),
    function(n) {
        var r, t = (r = n.Attachment, __extends(y, r), y.prototype.updateOffset = function() {
            var t = this.width / this.region.originalWidth * this.scaleX,
                e = this.height / this.region.originalHeight * this.scaleY,
                n = -this.width / 2 * this.scaleX + this.region.offsetX * t,
                r = -this.height / 2 * this.scaleY + this.region.offsetY * e,
                i = n + this.region.width * t,
                a = r + this.region.height * e,
                s = this.rotation * Math.PI / 180,
                o = Math.cos(s),
                h = Math.sin(s),
                l = n * o + this.x,
                u = n * h,
                p = r * o + this.y,
                c = r * h,
                d = i * o + this.x,
                f = i * h,
                m = a * o + this.y,
                g = a * h,
                v = this.offset;
            v[y.OX1] = l - c, v[y.OY1] = p + u, v[y.OX2] = l - g, v[y.OY2] = m + u, v[y.OX3] = d - g, v[y.OY3] = m + f, v[y.OX4] = d - c, v[y.OY4] = p + f
        }, y.prototype.setRegion = function(t) {
            this.region = t;
            var e = this.uvs;
            t.rotate ? (e[2] = t.u, e[3] = t.v2, e[4] = t.u, e[5] = t.v, e[6] = t.u2, e[7] = t.v, e[0] = t.u2, e[1] = t.v2) : (e[0] = t.u, e[1] = t.v2, e[2] = t.u, e[3] = t.v, e[4] = t.u2, e[5] = t.v, e[6] = t.u2, e[7] = t.v2)
        }, y.prototype.computeWorldVertices = function(t, e, n, r) {
            var i = this.offset,
                a = t.worldX,
                s = t.worldY,
                o = t.a,
                h = t.b,
                l = t.c,
                u = t.d,
                p = 0,
                c = 0;
            p = i[y.OX1], c = i[y.OY1], e[n] = p * o + c * h + a, e[n + 1] = p * l + c * u + s, n += r, p = i[y.OX2], c = i[y.OY2], e[n] = p * o + c * h + a, e[n + 1] = p * l + c * u + s, n += r, p = i[y.OX3], c = i[y.OY3], e[n] = p * o + c * h + a, e[n + 1] = p * l + c * u + s, n += r, p = i[y.OX4], c = i[y.OY4], e[n] = p * o + c * h + a, e[n + 1] = p * l + c * u + s
        }, y.OX1 = 0, y.OY1 = 1, y.OX2 = 2, y.OY2 = 3, y.OX3 = 4, y.OY3 = 5, y.OX4 = 6, y.OY4 = 7, y.X1 = 0, y.Y1 = 1, y.C1R = 2, y.C1G = 3, y.C1B = 4, y.C1A = 5, y.U1 = 6, y.V1 = 7, y.X2 = 8, y.Y2 = 9, y.C2R = 10, y.C2G = 11, y.C2B = 12, y.C2A = 13, y.U2 = 14, y.V2 = 15, y.X3 = 16, y.Y3 = 17, y.C3R = 18, y.C3G = 19, y.C3B = 20, y.C3A = 21, y.U3 = 22, y.V3 = 23, y.X4 = 24, y.Y4 = 25, y.C4R = 26, y.C4G = 27, y.C4B = 28, y.C4A = 29, y.U4 = 30, y.V4 = 31, y);

        function y(t) {
            var e = r.call(this, t) || this;
            return e.x = 0, e.y = 0, e.scaleX = 1, e.scaleY = 1, e.rotation = 0, e.width = 0, e.height = 0, e.color = new n.Color(1, 1, 1, 1), e.offset = n.Utils.newFloatArray(8), e.uvs = n.Utils.newFloatArray(8), e.tempColor = new n.Color(1, 1, 1, 1), e
        }
        n.RegionAttachment = t
    }(spine = spine || {}),
    function(i) {
        var t = (e.prototype.begin = function(t) {}, e.prototype.transform = function(t, e, n, r) {
            t.x += i.MathUtils.randomTriangular(-this.jitterX, this.jitterY), t.y += i.MathUtils.randomTriangular(-this.jitterX, this.jitterY)
        }, e.prototype.end = function() {}, e);

        function e(t, e) {
            this.jitterX = 0, this.jitterY = 0, this.jitterX = t, this.jitterY = e
        }
        i.JitterEffect = t
    }(spine = spine || {}),
    function(p) {
        var t = (c.prototype.begin = function(t) {
            this.worldX = t.x + this.centerX, this.worldY = t.y + this.centerY
        }, c.prototype.transform = function(t, e, n, r) {
            var i = this.angle * p.MathUtils.degreesToRadians,
                a = t.x - this.worldX,
                s = t.y - this.worldY,
                o = Math.sqrt(a * a + s * s);
            if (o < this.radius) {
                var h = c.interpolation.apply(0, i, (this.radius - o) / this.radius),
                    l = Math.cos(h),
                    u = Math.sin(h);
                t.x = l * a - u * s + this.worldX, t.y = u * a + l * s + this.worldY
            }
        }, c.prototype.end = function() {}, c.interpolation = new p.PowOut(2), c);

        function c(t) {
            this.centerX = 0, this.centerY = 0, this.radius = 0, this.angle = 0, this.worldX = 0, this.worldY = 0, this.radius = t
        }
        p.SwirlEffect = t
    }(spine = spine || {}), pc.extend(pc, function() {
        function o(t) {
            this._image = {
                width: t.width,
                height: t.height
            }, this.pcTexture = t
        }
        var g = 0,
            v = 1,
            y = 2,
            n = {
                9728: pc.FILTER_NEAREST,
                9729: pc.FILTER_LINEAR,
                9984: pc.FILTER_NEAREST_MIPMAP_NEAREST,
                9985: pc.FILTER_LINEAR_MIPMAP_NEAREST,
                9986: pc.FILTER_NEAREST_MIPMAP_LINEAR,
                9987: pc.FILTER_LINEAR_MIPMAP_LINEAR
            },
            r = {
                33648: pc.ADDRESS_MIRRORED_REPEAT,
                33071: pc.ADDRESS_CLAMP_TO_EDGE,
                10487: pc.ADDRESS_REPEAT
            };
        o.prototype = {
            setFilters: function(t, e) {
                this.pcTexture.minFilter = n[t], this.pcTexture.magFilter = n[e]
            },
            setWraps: function(t, e) {
                this.pcTexture.addressU = r[t], this.pcTexture.addressV = r[e]
            },
            getImage: function() {
                return this._image
            }
        };

        function t(t, e, n, r) {
            this._app = t, this._position = new pc.Vec3;
            var i = new spine.TextureAtlas(e, function(t) {
                    return new o(r[t])
                }),
                a = new spine.SkeletonJson(new spine.AtlasAttachmentLoader(i));
            a.scale *= .01;
            var s = a.readSkeletonData(n);
            this.skeleton = new spine.Skeleton(s), this.skeleton.updateWorldTransform(), this.stateData = new spine.AnimationStateData(this.skeleton.data), this.states = [new spine.AnimationState(this.stateData)], this._node = new pc.GraphNode, this._meshInstances = [], this._materials = {}, this._offset = {}, this._tint = {}, this._priority = 0, this._layers = [pc.LAYERID_UI], this.init(), this.autoUpdate = !0, this._model = new pc.Model, this._model.graph = this._node, this._model.meshInstances = this._meshInstances, this._modelChanged = !0, this._reordered = !0, this._hidden = !1
        }
        t.prototype.destroy = function() {
            this._model && this.removeFromLayers(), this.destroyMeshes(), this._model = null, this._meshInstances = [], this.skeleton = null, this.stateData = null, this.state = null, this._materials = {}, this._node = null
        }, t.prototype.destroyMeshes = function() {
            for (var t = 0, e = this._meshInstances.length; t < e; t++) {
                var n = this._meshInstances[t].mesh;
                if (n) {
                    n.vertexBuffer && (n.vertexBuffer.destroy(), n.vertexBuffer = null);
                    for (var r = 0; r < n.indexBuffer.length; r++) n.indexBuffer[r] && n.indexBuffer[r].destroy();
                    n.indexBuffer.length = 0
                }
                this._meshInstances[t].material = null
            }
        }, t.prototype.hide = function() {
            if (!this._hidden) {
                for (var t = 0, e = this._meshInstances.length; t < e; t++) this._meshInstances[t].visible = !1;
                this._hidden = !0
            }
        }, t.prototype.show = function() {
            if (this._hidden) {
                for (var t = 0, e = this._meshInstances.length; t < e; t++) this._meshInstances[t].visible = !0;
                this._hidden = !1
            }
        }, t.prototype.init = function() {
            for (var t = this.skeleton.drawOrder, e = 0, n = t.length; e < n; e++) this.initSlot(t[e]);
            this.rebuildMeshes()
        }, t.prototype.initSlot = function(t) {
            t.vertices = [], t.positions = [], t.options = {}, t.colorUniforms = {}, t.current = {
                mesh: -1,
                vertices: 0,
                offset: 0
            }, t._active = {
                name: "",
                type: g
            }, this.initAttachment(t)
        };

        function h(t, e) {
            return e % 2 ? 1 - t : t
        }

        function l(t, e) {
            return e % 3 == 1 ? 1 : 0
        }
        t.prototype.initAttachment = function(t) {
            var e = t.attachment;
            if (e) {
                var n = e.name;
                if (t._active.name = n, e instanceof spine.RegionAttachment) t._active.type = y, t.positions = new Array(12), t.options = {
                    normals: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                    uvs: e.uvs.map(h),
                    colors: Array(16),
                    indices: [0, 3, 2, 2, 1, 0]
                };
                else if (e instanceof spine.MeshAttachment) {
                    t._active.type = v;
                    var r = e.worldVerticesLength / 2;
                    t.positions = new Array(3 * r), t.options = {
                        normals: new Array(3 * r).map(l),
                        uvs: e.uvs.map(h),
                        colors: Array(4 * r),
                        indices: e.triangles
                    }
                }
                var i = e.region.texture.pcTexture;
                if (i)
                    if (i instanceof pc.StandardMaterial) this._materials[i.name] = i, t.material = i.name;
                    else {
                        var a = null;
                        if (i.getSource() instanceof Image ? a = i.getSource().getAttribute("src") : i instanceof pc.Texture && (a = i.name), a) {
                            if (void 0 === this._materials[a]) {
                                var s = new pc.StandardMaterial;
                                s.shadingModel = pc.SPECULAR_BLINN, s.diffuse = new pc.Color(0, 0, 0), s.emissiveMap = i, s.emissiveMapChannel = "rgb", s.emissiveVertexColor = !0, s.emissiveVertexColorChannel = "rgb", s.opacityMap = i, s.opacityMapChannel = "a", s.opacityVertexColor = !0, s.opacityVertexColorChannel = "a", s.depthWrite = !1, s.cull = pc.CULLFACE_NONE, s.blendType = pc.BLEND_PREMULTIPLIED, s.update();
                                var o = ["gl_FragColor.rgb *= vVertexColor.a;", "gl_FragColor.a = dAlpha;"].join("\n");
                                s.chunks.outputAlphaPremulPS = o, this._materials[a] = s
                            }
                            t.material = a
                        }
                    } this._modelChanged = !0
            }
        }, t.prototype.rebuildMeshes = function() {
            this.removeFromLayers(), this._meshes = [], this.destroyMeshes(), this._meshInstances.length = 0, this.createMeshes(), this.addToLayers()
        };

        function u(t, e) {
            return e.attachment && (t.curr.mat || (t.curr.mat = e.material), e.material === t.curr.mat ? (t.curr.pos += e.positions.length, t.curr.norm += e.options.normals.length, t.curr.idx += e.options.indices.length, t.curr.uv += e.options.uvs.length, t.curr.col += e.options.colors.length) : (t.batches.push({
                mat: t.curr.mat,
                pos: t.curr.pos,
                norm: t.curr.norm,
                idx: t.curr.idx,
                uv: t.curr.uv,
                col: t.curr.col
            }), t.curr.mat = e.material, t.curr.pos = e.positions.length, t.curr.norm = e.options.normals.length, t.curr.idx = e.options.indices.length, t.curr.uv = e.options.uvs.length, t.curr.col = e.options.colors.length)), t
        }

        function i(t, e, n, r) {
            for (var i = 0, a = t.length; i < a; i++) e[n + i] = t[i], r && (e[n + i] += r);
            return t.length
        }

        function p(t, e) {
            return e.attachment && (t.curr.mat || (t.curr.mat = e.material), e.material !== t.curr.mat && (t.meshes.push(pc.createMesh(t.gd, t.positions[t.batchIdx], t.options[t.batchIdx])), t.batchIdx++, t.curr.mat = e.material, t.curr.pos = 0, t.curr.norm = 0, t.curr.idx = 0, t.curr.uv = 0, t.curr.col = 0), e.current.offset = t.curr.pos / 3, e.current.vertices = e.positions.length / 3, e.current.mesh = t.batchIdx, t.curr.idx += i(e.options.indices, t.options[t.batchIdx].indices, t.curr.idx, e.current.offset), t.curr.pos += i(e.positions, t.positions[t.batchIdx], t.curr.pos, 0), t.curr.norm += i(e.options.normals, t.options[t.batchIdx].normals, t.curr.norm, 0), t.curr.uv += i(e.options.uvs, t.options[t.batchIdx].uvs, t.curr.uv, 0), t.curr.col += i(e.options.colors, t.options[t.batchIdx].colors, t.curr.col, 0)), t
        }
        return t.prototype.createMeshes = function() {
            var t = this.skeleton.drawOrder,
                e = t.reduce(u, {
                    curr: {
                        pos: 0,
                        norm: 0,
                        idx: 0,
                        uv: 0,
                        col: 0
                    },
                    batches: []
                });
            0 < e.curr.pos && e.batches.push(e.curr);
            var n, r = e.batches,
                i = [],
                a = [],
                s = r.length;
            if (0 != s) {
                for (n = 0; n < s; n++) i.push(Array(r[n].pos)), a.push({
                    normals: Array(r[n].norm),
                    uvs: new Float32Array(r[n].uv),
                    indices: Array(r[n].idx),
                    colors: Array(r[n].col)
                });
                var o = t.reduce(p, {
                    meshes: this._meshes,
                    gd: this._app.graphicsDevice,
                    batchIdx: 0,
                    curr: {
                        pos: 0,
                        norm: 0,
                        idx: 0,
                        uv: 0,
                        col: 0
                    },
                    positions: i,
                    options: a
                });
                for (this._meshes.push(pc.createMesh(o.gd, i[o.batchIdx], a[o.batchIdx])), n = 0; n < s; n++) {
                    this._meshes[n].name = r[n].mat;
                    var h = new pc.MeshInstance(this._node, this._meshes[n], this._materials[r[n].mat]);
                    h.drawOrder = n + 1e3 * this.priority, h.visible = !this._hidden, this._meshInstances.push(h)
                }
            }
        }, t.prototype.updateMeshes = function() {
            var t;
            for (t = 0; t < this._meshes.length; t++) this._meshes[t].startUpdate();
            for (var e = this.skeleton.drawOrder, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                i.attachment && 0 <= i.current.mesh && this._meshes[i.current.mesh].updateVertices(i.positions, null, null, null, i.options.colors)
            }
            for (t = 0; t < this._meshes.length; t++) this._meshes[t].finishUpdate()
        }, t.prototype.updateSlot = function(t, e) {
            var n = t.attachment,
                r = n.name,
                i = n instanceof spine.RegionAttachment ? y : n instanceof spine.MeshAttachment ? v : g;
            t._active.name === r && t._active.type == i || this.initAttachment(t);
            var a, s, o = 0,
                h = 0;
            i === y ? (n.computeWorldVertices(t.bone, t.vertices, 0, 2), s = 8) : i === v && (n.computeWorldVertices(t, 0, n.worldVerticesLength, t.vertices, 0, 2), s = n.worldVerticesLength);
            var l = this._tint[r],
                u = Math.round(255 * t.color.r * (l ? l.r : 1)),
                p = Math.round(255 * t.color.g * (l ? l.g : 1)),
                c = Math.round(255 * t.color.b * (l ? l.b : 1)),
                d = Math.round(255 * t.color.a * (l ? l.a : 1));
            for (a = 0; a < s; a += 2, o += 3, h += 4) t.positions[o + 0] = t.vertices[a + 0], t.positions[o + 1] = t.vertices[a + 1], t.positions[o + 2] = 0, t.options.colors[h + 0] = u, t.options.colors[h + 1] = p, t.options.colors[h + 2] = c, t.options.colors[h + 3] = d;
            var f = t.positions.length / 3,
                m = this._offset[e];
            t.current.offset === m && t.current.vertices === f && t.current.mesh === e || (this._reordered = !0), this._offset[e] += f
        }, t.prototype.update = function(t) {
            var e, n;
            if (!this._hidden) {
                for (e = 0, n = this.states.length; e < n; e++) this.states[e].update(t);
                for (e = 0, n = this.states.length; e < n; e++) this.states[e].apply(this.skeleton);
                this.autoUpdate && this.skeleton.updateWorldTransform();
                var r, i = this.skeleton.drawOrder,
                    a = 0,
                    s = (n = i.length) ? i[0].material : "";
                for (e = this._offset[a] = 0; e < n; e++) {
                    (r = i[e]).attachment ? (s !== r.material && (a++, this._offset[a] = 0, s = r.material), this.updateSlot(r, a)) : r._active.type != g && (r.current = {
                        mesh: -1,
                        vertices: 0,
                        offset: 0
                    }, r._active = {
                        name: "",
                        type: g
                    }, this._modelChanged = !0)
                }
                this._modelChanged || this._reordered ? (this.rebuildMeshes(), this._modelChanged = !1, this._reordered = !1) : this.updateMeshes()
            }
        }, t.prototype.setPosition = function(t) {
            this._position.copy(t)
        }, t.prototype.setTint = function(t, e) {
            this._tint[t] = e
        }, t.prototype.removeFromLayers = function() {
            if (this._model)
                for (var t = 0; t < this._layers.length; t++) {
                    var e = this._layers[t],
                        n = this._app.scene.layers.getLayerById(e);
                    n && n.removeMeshInstances(this._model.meshInstances)
                }
        }, t.prototype.addToLayers = function() {
            if (this._model)
                for (var t = 0; t < this._layers.length; t++) {
                    var e = this._layers[t],
                        n = this._app.scene.layers.getLayerById(e);
                    n && n.addMeshInstances(this._model.meshInstances)
                }
        }, Object.defineProperty(t.prototype, "state", {
            get: function() {
                return this.states[0]
            }
        }), Object.defineProperty(t.prototype, "priority", {
            get: function() {
                return this._priority
            },
            set: function(t) {
                this._priority = t, this._reordered = !0
            }
        }), Object.defineProperty(t.prototype, "layers", {
            get: function() {
                return this._layers
            },
            set: function(t) {
                this._model && this.removeFromLayers(), this._layers = t || [], this._model && this.addToLayers()
            }
        }), {
            Spine: t
        }
    }()), pc.extend(pc, function() {
        function t(t) {
            pc.ComponentSystem.call(this, t), this.id = "spine", this.ComponentType = pc.SpineComponent, this.DataType = pc.SpineComponentData, this.schema = ["enabled", "atlasAsset", "textureAssets", "skeletonAsset", "atlasData", "textures", "skeletonData", "speed", "spine"], pc.ComponentSystem.bind("update", this.onUpdate, this)
        }
        return (t.prototype = Object.create(pc.ComponentSystem.prototype)).constructor = t, Object.assign(t.prototype, {
            initializeComponentData: function(t, e, n) {
                n = ["enabled", "atlasAsset", "textureAssets", "skeletonAsset", "atlasData", "textures", "skeletonData", "spine"], pc.ComponentSystem.prototype.initializeComponentData.call(this.system, t, e, n)
            },
            removeComponent: function(t) {
                var e = t.spine.data;
                e.spine && e.spine.destroy(), t.spine.removeComponent()
            },
            onUpdate: function(t) {
                var e = this.store;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = e[n],
                            i = r.data;
                        i.enabled && r.entity.enabled && i.spine && (i.spine.setPosition(r.entity.getPosition()), i.spine.update(i.speed * t))
                    }
            }
        }), {
            SpineComponentSystem: t
        }
    }()), pc.extend(pc, function() {
        function t(t, e) {
            pc.Component.call(this, t, e), this.on("set_atlasAsset", this.onSetAsset, this), this.on("set_textureAssets", this.onSetAssets, this), this.on("set_skeletonAsset", this.onSetAsset, this), this.on("set_atlasData", this.onSetResource, this), this.on("set_textures", this.onSetResource, this), this.on("set_skeletonData", this.onSetResource, this)
        }
        return (t.prototype = Object.create(pc.Component.prototype)).constructor = t, Object.assign(t.prototype, {
            _createSpine: function() {
                this.data.spine && (this.data.spine.destroy(), this.data.spine = null);
                for (var t = {}, e = 0, n = this.textureAssets.length; e < n; e++) {
                    var r = this.system.app.assets.get(this.textureAssets[e]),
                        i = pc.path.getBasename(r.file.url),
                        a = i.indexOf("?"); - 1 !== a && (i = i.substring(0, a)), t[i] = r.resource
                }
                this.data.spine = new pc.Spine(this.system.app, this.atlasData, this.skeletonData, t), this.state = this.data.spine.state, this.states = this.data.spine.states, this.skeleton = this.data.spine.skeleton, this.entity.addChild(this.data.spine._node)
            },
            _onAssetReady: function(t) {
                "texture" === t.type && this.textures.push(t.resource), "json" === t.type && (this.skeletonData = t.resource), "text" === t.type && (this.atlasData = t.resource)
            },
            _onAssetAdd: function(t) {
                t.off("change", this.onAssetChanged, this), t.on("change", this.onAssetChanged, this), t.off("remove", this.onAssetRemoved, this), t.on("remove", this.onAssetRemoved, this), t.ready(this._onAssetReady, this), this.system.app.assets.load(t)
            },
            onSetResource: function() {
                this.data.atlasData && this.data.textures.length && this.data.skeletonData && this._createSpine()
            },
            onSetAsset: function(t, e, n) {
                var r = this.system.app.assets,
                    i = null;
                if (e && (i = r.get(e)) && (i.off("change", this.onAssetChanged), i.off("remove", this.onAssetRemoved)), n) {
                    var a = n;
                    n instanceof pc.Asset && (a = n.id, this.data[t] = a), (i = r.get(a)) ? this._onAssetAdd(i) : r.on("add:" + a)
                }
            },
            onSetAssets: function(t, e, n) {
                var r, i, a = this.system.app.assets,
                    s = null;
                if (e.length)
                    for (r = 0, i = e.length; r < i; r++)(s = a.get(e[r])) && (s.off("change", this.onAssetChanged), s.off("remove", this.onAssetRemoved));
                if (n && n.length) {
                    var o = n.map(function(t) {
                        return t instanceof pc.Asset ? t.id : t
                    });
                    for (r = 0, i = n.length; r < i; r++)(s = a.get(o[r])) ? this._onAssetAdd(s) : a.on("add:" + o[r])
                }
            },
            onAssetChanged: function(t, e, n, r) {},
            onAssetRemoved: function(t) {},
            onEnable: function() {
                pc.Component.prototype.onEnable.call(this);
                var t = this.data.spine;
                t && t.addToLayers()
            },
            onDisable: function() {
                pc.Component.prototype.onDisable.call(this);
                var t = this.data.spine;
                t && t.removeFromLayers()
            },
            hide: function() {
                this.data.spine && this.data.spine.hide()
            },
            show: function() {
                this.data.spine && this.data.spine.show()
            },
            removeComponent: function() {
                var t;
                if (this.atlasAsset && (t = this.system.app.assets.get(this.atlasAsset)) && (t.off("change", this.onAssetChanged), t.off("remove", this.onAssetRemoved)), this.skeletonAsset && (t = this.system.app.assets.get(this.skeletonAsset)) && (t.off("change", this.onAssetChanged), t.off("remove", this.onAssetRemoved)), this.textureAssets && this.textureAssets.length)
                    for (var e = 0; e < this.textureAssets.length; e++)(t = this.system.app.assets.get(this.textureAssets[e])) && (t.off("change", this.onAssetChanged), t.off("remove", this.onAssetRemoved))
            }
        }), {
            SpineComponent: t
        }
    }()), pc.extend(pc, {
        SpineComponentData: function() {
            this.enabled = !0, this.atlasAsset = null, this.textureAssets = [], this.skeletonAsset = null, this.speed = 1, this.spine = null, this.atlasData = null, this.textures = [], this.skeletonData = null
        }
    }),
    function() {
        if (pc.Mesh.prototype.startUpdate = function() {
                this._iterator = new pc.VertexIterator(this.vertexBuffer), this._counter = 0
            }, pc.Mesh.prototype.finishUpdate = function() {
                this._iterator.end(), this._iterator = null
            }, pc.Mesh.prototype.updateVertices = function(t, e, n, r, i) {
                var a = t.length / 3;
                this._counter += a;
                for (var s = 0; s < a; s++) this._iterator.element[pc.SEMANTIC_POSITION].set(t[3 * s], t[3 * s + 1], t[3 * s + 2]), e && this._iterator.element[pc.SEMANTIC_NORMAL].set(e[3 * s], e[3 * s + 1], e[3 * s + 2]), n && this._iterator.element[pc.SEMANTIC_TANGENT].set(n[4 * s], n[4 * s + 1], n[4 * s + 2], n[4 * s + 3]), r && this._iterator.element[pc.SEMANTIC_TEXCOORD0].set(r[2 * s], r[2 * s + 1]), i && this._iterator.element[pc.SEMANTIC_COLOR].set(i[4 * s], i[4 * s + 1], i[4 * s + 2], i[4 * s + 3]), this._iterator.next()
            }, pc.Application.registerPlugin) {
            pc.Application.registerPlugin("spine", function(t) {
                new pc.SpineComponentSystem(t)
            })
        } else {
            var t = pc.Application.getApplication(),
                e = new pc.SpineComponentSystem(t);
            t.systems.add(e)
        }
    }();

var Utils=pc.createScript("utils");Utils.attributes.add("debugCamera",{type:"entity"}),Utils.prototype.initialize=function(){window.addEventListener("contextmenu",function(t){t.preventDefault()});var t=this.app.tween({}).to({},5,pc.Linear).loop(!0).repeat(1/0).on("loop",function requestProfile(){window.DisneyJS&&DisneyJS.nativeCall&&DisneyJS.nativeCall({msg:"requestProfile",payload:{}})}).start();window.onRequestProfile=function(e,o,n){t.stop(),common.profileName=e},this.on("destroy",function(){t.stop()},this),window.P3={utils:this},window.common={testing:!1,difficulty:localStorage.getItem("DSN00962_difficulty")||"easy",paused:!1,muted:!1,skin:sessionStorage.getItem("DSN00962_skin")||"tots",canShoot:!0,theme:localStorage.getItem("theme2"),version:"v6.4.3",cookieVersion:"6",minigame:"corridor",scoreManager:null,profileName:"Me",debugCamera:this.debugCamera,map:["udm","mira","zombies","tots","muppets","mmua","gabby","vampirina","justrollwithit","descendants","bigcitygreens"]},console.log("common initialized"),document.title=common.theme+" | "+common.version,console.log("Disney Cart Blaster "+common.version+" | theme: "+common.theme)},Utils.prototype.delay=function(t,e,o,n){return n=n||window,this.app.tween({}).to({},t,pc.Linear).on("complete",function(){e.apply(n,o)},this).start()},Utils.prototype.shuffleArray=function(t){for(var e=t.length,o=null,n=-1;0!==e;)n=Math.floor(Math.random()*e),o=t[--e],t[e]=t[n],t[n]=o;return t},Utils.prototype.shouldPlayVO=function(){for(var t=["mmua","tots","vampirina","muppets","mira","chickens"],e=0;e<t.length;e++)if(common.skin===t[e])return!0;return!1},Utils.prototype.selectRandom=function(t){return t[Math.floor(Math.random()*t.length)]};Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function flat(){var r=isNaN(arguments[0])?1:Number(arguments[0]);return r?Array.prototype.reduce.call(this,function(t,e){return Array.isArray(e)?t.push.apply(t,flat.call(e,r-1)):t.push(e),t},[]):Array.prototype.slice.call(this)},writable:!0}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function assign(r,t){"use strict";if(null==r)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(r),n=1;n<arguments.length;n++){var a=arguments[n];if(null!=a)for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},writable:!0,configurable:!0}),String.prototype.startsWith||function(){"use strict";var r=function(){try{var r={},t=Object.defineProperty,e=t(r,r,r)&&t}catch(r){}return e}(),t={}.toString,e=function(r){if(null==this)throw TypeError();var e=String(this);if(r&&"[object RegExp]"==t.call(r))throw TypeError();var n=e.length,a=String(r),o=a.length,i=arguments.length>1?arguments[1]:void 0,l=i?Number(i):0;l!=l&&(l=0);var c=Math.min(Math.max(l,0),n);if(o+c>n)return!1;for(var u=-1;++u<o;)if(e.charCodeAt(c+u)!=a.charCodeAt(u))return!1;return!0};r?r(String.prototype,"startsWith",{value:e,configurable:!0,writable:!0}):String.prototype.startsWith=e}();pc.extend(pc,function(){var t=function(t){this._app=t,this._tweens=[],this._add=[]};t.prototype={add:function(t){return this._add.push(t),t},update:function(t){for(var i=0,e=this._tweens.length;i<e;)this._tweens[i].update(t)?i++:(this._tweens.splice(i,1),e--);this._add.length&&(this._tweens=this._tweens.concat(this._add),this._add.length=0)},destroy:function(){for(var t=this._tweens.length-1;t>=0;t--)this._tweens[t].stop(),this._tweens.splice(t,1)}};var i=function(t,i,e){pc.events.attach(this),this.manager=i,e&&(this.entity=null),this.time=0,this.complete=!1,this.playing=!1,this.stopped=!0,this.pending=!1,this.target=t,this.duration=0,this._currentDelay=0,this.timeScale=1,this._reverse=!1,this._delay=0,this._yoyo=!1,this._count=0,this._numRepeats=0,this._repeatDelay=0,this._from=!1,this._slerp=!1,this._fromQuat=new pc.Quat,this._toQuat=new pc.Quat,this._quat=new pc.Quat,this.easing=pc.EASE_LINEAR,this._sv={},this._ev={}},e=function(t){var i;return t instanceof pc.Vec2?i={x:t.x,y:t.y}:t instanceof pc.Vec3?i={x:t.x,y:t.y,z:t.z}:t instanceof pc.Vec4?i={x:t.x,y:t.y,z:t.z,w:t.w}:t instanceof pc.Quat?i={x:t.x,y:t.y,z:t.z,w:t.w}:t instanceof pc.Color?(i={r:t.r,g:t.g,b:t.b},void 0!==t.a&&(i.a=t.a)):i=t,i};i.prototype={to:function(t,i,s,n,r,h){return this._properties=e(t),this.duration=i,s&&(this.easing=s),n&&this.delay(n),r&&this.repeat(r),h&&this.yoyo(h),this},from:function(t,i,s,n,r,h){return this._properties=e(t),this.duration=i,s&&(this.easing=s),n&&this.delay(n),r&&this.repeat(r),h&&this.yoyo(h),this._from=!0,this},rotate:function(t,i,s,n,r,h){return this._properties=e(t),this.duration=i,s&&(this.easing=s),n&&this.delay(n),r&&this.repeat(r),h&&this.yoyo(h),this._slerp=!0,this},start:function(){var t,i,e,s;if(this.playing=!0,this.complete=!1,this.stopped=!1,this._count=0,this.pending=this._delay>0,this._reverse&&!this.pending?this.time=this.duration:this.time=0,this._from){for(t in this._properties)this._properties.hasOwnProperty(t)&&(this._sv[t]=this._properties[t],this._ev[t]=this.target[t]);this._slerp&&(this._toQuat.setFromEulerAngles(this.target.x,this.target.y,this.target.z),i=void 0!==this._properties.x?this._properties.x:this.target.x,e=void 0!==this._properties.y?this._properties.y:this.target.y,s=void 0!==this._properties.z?this._properties.z:this.target.z,this._fromQuat.setFromEulerAngles(i,e,s))}else{for(t in this._properties)this._properties.hasOwnProperty(t)&&(this._sv[t]=this.target[t],this._ev[t]=this._properties[t]);this._slerp&&(this._fromQuat.setFromEulerAngles(this.target.x,this.target.y,this.target.z),i=void 0!==this._properties.x?this._properties.x:this.target.x,e=void 0!==this._properties.y?this._properties.y:this.target.y,s=void 0!==this._properties.z?this._properties.z:this.target.z,this._toQuat.setFromEulerAngles(i,e,s))}return this._currentDelay=this._delay,this.manager.add(this),this},pause:function(){this.playing=!1},resume:function(){this.playing=!0},stop:function(){this.playing=!1,this.stopped=!0},delay:function(t){return this._delay=t,this.pending=!0,this},repeat:function(t,i){return this._count=0,this._numRepeats=t,this._repeatDelay=i||0,this},loop:function(t){return t?(this._count=0,this._numRepeats=1/0):this._numRepeats=0,this},yoyo:function(t){return this._yoyo=t,this},reverse:function(){return this._reverse=!this._reverse,this},chain:function(){for(var t=arguments.length;t--;)t>0?arguments[t-1]._chained=arguments[t]:this._chained=arguments[t];return this},update:function(t){if(this.stopped)return!1;if(!this.playing)return!0;if(!this._reverse||this.pending?this.time+=t*this.timeScale:this.time-=t*this.timeScale,this.pending){if(!(this.time>this._currentDelay))return!0;this._reverse?this.time=this.duration-(this.time-this._currentDelay):this.time=this.time-this._currentDelay,this.pending=!1}var i=0;(!this._reverse&&this.time>this.duration||this._reverse&&this.time<0)&&(this._count++,this.complete=!0,this.playing=!1,this._reverse?(i=this.duration-this.time,this.time=0):(i=this.time-this.duration,this.time=this.duration));var e,s,n=this.time/this.duration,r=this.easing(n);for(var h in this._properties)this._properties.hasOwnProperty(h)&&(e=this._sv[h],s=this._ev[h],this.target[h]=e+(s-e)*r);if(this._slerp&&this._quat.slerp(this._fromQuat,this._toQuat,r),this.entity&&(this.entity._dirtifyLocal(),this.element&&this.entity.element&&(this.entity.element[this.element]=this.target),this._slerp&&this.entity.setLocalRotation(this._quat)),this.fire("update",t),this.complete){var a=this._repeat(i);return a?this.fire("loop"):(this.fire("complete",i),this.entity&&this.entity.off("destroy",this.stop,this),this._chained&&this._chained.start()),a}return!0},_repeat:function(t){if(this._count<this._numRepeats){if(this._reverse?this.time=this.duration-t:this.time=t,this.complete=!1,this.playing=!0,this._currentDelay=this._repeatDelay,this.pending=!0,this._yoyo){for(var i in this._properties)tmp=this._sv[i],this._sv[i]=this._ev[i],this._ev[i]=tmp;this._slerp&&(this._quat.copy(this._fromQuat),this._fromQuat.copy(this._toQuat),this._toQuat.copy(this._quat))}return!0}return!1}};var s=function(t){return 1-n(1-t)},n=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};return{TweenManager:t,Tween:i,Linear:function(t){return t},QuadraticIn:function(t){return t*t},QuadraticOut:function(t){return t*(2-t)},QuadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},CubicIn:function(t){return t*t*t},CubicOut:function(t){return--t*t*t+1},CubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},QuarticIn:function(t){return t*t*t*t},QuarticOut:function(t){return 1- --t*t*t*t},QuarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},QuinticIn:function(t){return t*t*t*t*t},QuinticOut:function(t){return--t*t*t*t*t+1},QuinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},SineIn:function(t){return 0===t?0:1===t?1:1-Math.cos(t*Math.PI/2)},SineOut:function(t){return 0===t?0:1===t?1:Math.sin(t*Math.PI/2)},SineInOut:function(t){return 0===t?0:1===t?1:.5*(1-Math.cos(Math.PI*t))},ExponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},ExponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},ExponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},CircularIn:function(t){return 1-Math.sqrt(1-t*t)},CircularOut:function(t){return Math.sqrt(1- --t*t)},CircularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},BackIn:function(t){return t*t*(2.70158*t-1.70158)},BackOut:function(t){return--t*t*(2.70158*t+1.70158)+1},BackInOut:function(t){var i=2.5949095;return(t*=2)<1?t*t*((i+1)*t-i)*.5:.5*((t-=2)*t*((i+1)*t+i)+2)},BounceIn:s,BounceOut:n,BounceInOut:function(t){return t<.5?.5*s(2*t):.5*n(2*t-1)+.5},ElasticIn:function(t){var i,e=.1;return 0===t?0:1===t?1:(!e||e<1?(e=1,i=.1):i=.4*Math.asin(1/e)/(2*Math.PI),-e*Math.pow(2,10*(t-=1))*Math.sin((t-i)*(2*Math.PI)/.4))},ElasticOut:function(t){var i,e=.1;return 0===t?0:1===t?1:(!e||e<1?(e=1,i=.1):i=.4*Math.asin(1/e)/(2*Math.PI),e*Math.pow(2,-10*t)*Math.sin((t-i)*(2*Math.PI)/.4)+1)},ElasticInOut:function(t){var i,e=.1;return 0===t?0:1===t?1:(!e||e<1?(e=1,i=.1):i=.4*Math.asin(1/e)/(2*Math.PI),(t*=2)<1?e*Math.pow(2,10*(t-=1))*Math.sin((t-i)*(2*Math.PI)/.4)*-.5:e*Math.pow(2,-10*(t-=1))*Math.sin((t-i)*(2*Math.PI)/.4)*.5+1)}}}()),function(){pc.Application.prototype.addTweenManager=function(){this._tweenManager=new pc.TweenManager(this),this.on("update",function(t){this._tweenManager.update(t)})},pc.Application.prototype.tween=function(t){return new pc.Tween(t,this._tweenManager)},pc.Entity.prototype.tween=function(t,i){var e=this._app.tween(t);return e.entity=this,this.once("destroy",e.stop,e),i&&i.element&&(e.element=i.element),e};var t=pc.Application.getApplication();t&&t.addTweenManager()}();var TouchFix=pc.createScript("touchFix");TouchFix.prototype.initialize=function(){var t=this.app.touch;t&&t.on(pc.EVENT_TOUCHEND,function(t){t.event.preventDefault()})};var AssetManager=pc.createScript("assetManager");AssetManager.attributes.add("splash",{type:"boolean",default:!1}),AssetManager.prototype.initialize=function(){console.log("[AssetManager] Initialize"),this.unloadAssets(),this.loadAssets(),this.app.on("AssetManager:loadSplashAssets",this.loadSplashAssets,this),this.on("destroy",this.onDestroy,this)},AssetManager.prototype.onDestroy=function(){console.log("[AssetManager] onDestroy"),this.app.off("AssetManager:loadSplashAssets",this.loadSplashAssets,this),this.off("destroy",this.onDestroy,this)},AssetManager.prototype.loadSplashAssets=function(s,t){console.log("[AssetManager] Loading Splash assets...");for(var a=0,o=this.app.assets.findByTag("loadSplash"),e=0;e<o.length;e++)o[e].ready(function(){++a===o.length&&s.call(t)}),this.app.assets.load(o[e])},AssetManager.prototype.unloadAssets=function(){console.log("[AssetManager] Unloading assets...");var s=common.skin;"bigcitygreens"===common.skin?s="bcg":"justrollwithit"===common.skin&&(s="jrwi");for(var t=this.app.assets.findByTag("unload"),a=0;a<t.length;a++)!t[a].tags.has(s)&&t[a].loaded&&t[a].unload()},AssetManager.prototype.loadAssets=function(){console.log("[AssetManager] Loading assets...");var s=common.skin;"bigcitygreens"===common.skin?s="bcg":"justrollwithit"===common.skin&&(s="jrwi");for(var t=this.app.assets.findByTag([s,"load"]),a=0;a<t.length;a++)t[a].loaded||this.app.assets.load(t[a])};var Spine=pc.createScript("spine");Spine.attributes.add("skin",{type:"string",default:"evergreen"}),Spine.attributes.add("atlas",{type:"asset",assetType:"text"}),Spine.attributes.add("skeleton",{type:"asset",assetType:"json"}),Spine.attributes.add("textures",{type:"asset",array:!0,assetType:"texture"}),Spine.attributes.add("priority",{type:"number",default:1}),Spine.prototype.initialize=function(){if(this._state=null,this._skeleton=null,this.animating=!1,this._spine=null,this.atlas&&this.textures&&this.skeleton){this.entity.addComponent("spine",{atlasAsset:this.atlas.id,textureAssets:this.textures.map(function(t){return t.id}),skeletonAsset:this.skeleton.id}),this._spine=this.entity.spine.spine,this._state=this._spine.state,this._skeleton=this._spine.skeleton,this.skin&&this._skeleton.setSkinByName("evergreen"),this.priority=this.priority?this.priority:0,this.entity.spine.spine.priority=this.priority,this.entity.spine.spine.state.defaultMix=.2,this.entity.spine.spine.skeleton.setSlotsToSetupPose();try{this.playAnimation(0,"idle",!0)}catch(t){}}this.on("attr:priority",function(t){this.entity.spine&&(this.entity.spine.spine.priority=t)},this)},Spine.prototype.playAnimation=function(t,e,i){if(this._state)return this._state.setAnimation(t,e,i)};var SetSpineLayer=pc.createScript("SetSpineLayer");SetSpineLayer.attributes.add("layerNames",{type:"string",array:!0}),SetSpineLayer.prototype.initialize=function(){var e=[],a=this.app.scene.layers;this.layerNames.forEach(function(t){e.push(a.getLayerByName(t).id)}),this.entity.spine.spine.layers=e};var Ccd=pc.createScript("ccd");Ccd.attributes.add("motionThreshold",{type:"number",default:1,title:"Motion Threshold",description:"Number of meters moved in one frame before CCD is enabled"}),Ccd.attributes.add("sweptSphereRadius",{type:"number",default:.2,title:"Swept Sphere Radius",description:"This should be below the half extent of the collision volume. E.g. for and object of dimensions 1 meter, try 0.2"}),Ccd.prototype.initialize=function(){var e=this.entity.rigidbody.body;e.setCcdMotionThreshold(this.motionThreshold),e.setCcdSweptSphereRadius(this.sweptSphereRadius),this.on("attr:motionThreshold",function(e,t){this.entity.rigidbody.body.setCcdMotionThreshold(e)}),this.on("attr:sweptSphereRadius",function(e,t){this.entity.rigidbody.body.setCcdSweptSphereRadius(e)})};var AudioManager=pc.createScript("audioManager");AudioManager.attributes.add("audioEntity",{type:"entity",title:"Audio Entity"}),AudioManager.attributes.add("gameplayLoops",{type:"asset",assetType:"audio",array:!0,title:"Gameplay Music"}),AudioManager.attributes.add("transitionLoops",{type:"asset",assetType:"audio",array:!0,title:"Transition Music"}),AudioManager.attributes.add("endgameLoops",{type:"asset",assetType:"audio",array:!0,title:"End Game Music"}),AudioManager.attributes.add("curtainOpenSound",{type:"asset",assetType:"audio",title:"Curtain Open Sound"}),AudioManager.attributes.add("curtainCloseSound",{type:"asset",assetType:"audio",title:"Curtain Close Sound"}),AudioManager.prototype.initialize=function(){this._audioComponent=this.audioEntity.sound,P3.audio=this},AudioManager.prototype.playSound=function(o,t){var a=this._audioComponent.slot("sound");return a.autoPlay=!1,a.loop=!1,a.asset=o,t&&void 0!==t.loop&&(a.loop=t.loop),t&&void 0!==t.autoPlay&&a.play(),a},AudioManager.prototype.playMusic=function(o,t){var a=this._audioComponent.slot("music");return a.autoPlay=!1,a.loop=!1,a.stop(),a.asset=o,t&&void 0!==t.loop&&(a.loop=t.loop),t&&void 0!==t.autoPlay&&a.play(),a},AudioManager.prototype.playVO=function(o){var t=this._audioComponent.slot("vo");return t.autoPlay=!1,t.loop=!1,t.stop(),t.asset=this.app.assets.find(o).id,t.play(),t},AudioManager.prototype.pause=function(o){var t=this._audioComponent.slot(o);return t.pause(),t},AudioManager.prototype.stop=function(o){var t=this._audioComponent.slot(o);return t.loop=!1,t.autoPlay=!1,t.stop(),t},AudioManager.prototype.resume=function(){var o=this._audioComponent.slot(slotName);return o.resume(),o},AudioManager.prototype.playTransitionMusic=function(){var o=P3.utils.selectRandom(this.transitionLoops).id;if(o)return this.playMusic(o,{autoPlay:!0,loop:!0})},AudioManager.prototype.playGameplayLoop=function(){var o=P3.utils.selectRandom(this.gameplayLoops).id;if(o)return this.playMusic(o,{autoPlay:!0,loop:!0})},AudioManager.prototype.playEndGameMusic=function(){var o=P3.utils.selectRandom(this.endgameLoops);if(o)return this.playSound(o.id,{autoPlay:!0,loop:!0})},AudioManager.prototype.playCurtainSound=function(o){var t=null;if(t="open"===o?this.curtainOpenSound:this.curtainCloseSound)return this.playSound(t.id,{autoPlay:!0,loop:!1})};var GameManager=pc.createScript("gameManager");GameManager.attributes.add("countdownTime",{type:"number",default:3,title:"Countdown Time"}),GameManager.attributes.add("score",{type:"entity",title:"Score Entity"}),GameManager.attributes.add("time",{type:"entity",title:"Time Entity"}),GameManager.attributes.add("franticMode",{type:"entity",title:"Frantic MG"}),GameManager.attributes.add("chaseMode",{type:"entity",title:"Chase MG"}),GameManager.attributes.add("dropMode",{type:"entity",title:"Drop MG"}),GameManager.attributes.add("buildMode",{type:"entity",title:"Build MG"}),GameManager.attributes.add("bubbleMode",{type:"entity",title:"Bubble MG"}),GameManager.attributes.add("lightMode",{type:"entity",title:"Light MG"}),GameManager.attributes.add("corridor",{type:"entity",title:"Corridor"}),GameManager.attributes.add("precisionMode",{type:"entity",title:"Precision MG"}),GameManager.attributes.add("liftMode",{type:"entity",title:"Lift MG"}),GameManager.attributes.add("houseMode",{type:"entity",title:"House MG"}),GameManager.attributes.add("sortMode",{type:"entity",title:"Sort MG"}),GameManager.attributes.add("resultsScreen",{type:"entity",title:"Results"}),GameManager.attributes.add("startUI",{type:"entity",title:"Start UI"}),GameManager.attributes.add("entryDoors",{type:"entity",title:"Entry Doors"}),GameManager.attributes.add("mgEnvironments",{type:"entity",title:"MG Environments"}),GameManager.attributes.add("curtains",{type:"entity",title:"Curtains"}),GameManager.attributes.add("tutorialPanels",{type:"entity",title:"Tutorial Panels"}),GameManager.prototype.initialize=function(){console.log("[GameManager] Init"),this.app.lightmapper.bake(null,pc.BAKE_COLOR),this.scoreHeader=this.score.findByName("HeaderLabel"),this.scoreScreen=this.score.findByName("ValueLabel"),this.score.enabled=!1,this.timeHeader=this.time.findByName("HeaderLabel"),this.timeScreen=this.time.findByName("ValueLabel"),this.time.enabled=!1,this._timeProgressed=0,this._gameData={timed:!1,time:30},this._gameIndex=0,this._skin=null,this._gameTimer=null,this._cartMoved=!1;var e=[];this._gameMap=[],common.testing?(this._gameMap=[this.houseMode,this.sortMode,this.liftMode],e=[this.franticMode,this.chaseMode,this.dropMode,this.bubbleMode,this.lightMode,this.precisionMode,this.buildMode]):(this._gameMap=[this.sortMode,this.liftMode,this.buildMode],e=[this.franticMode,this.chaseMode,this.dropMode,this.bubbleMode,this.lightMode,this.precisionMode]);var t=P3.utils.selectRandom(e);e.splice(e.indexOf(t),1),this._gameMap.push(t);var i=P3.utils.selectRandom(e);e.splice(e.indexOf(i),1),this._gameMap.push(i);var a;for(var n in a=[[0,1,5,2,4,6,7,8],[1,0,5,2,4,6,7,8],[5,0,1,2,4,6,7,8],[0,5,1,2,4,6,7,8],[1,0,5,2,4,6,7,8],[3,0,5,2,4,6,7,8],[3,0,1,4,5,6,7,8],[3,1,5,4,0,6,7,8],[3,0,1,4,5,6,7,8],[3,0,1,2,5,6,7,8],[5,4,1,2,0,6,7,8]],this._combo=P3.utils.selectRandom(a),console.log(common.theme),console.log(this._combo),this._activatedScene=null,this._environmentList=[],this.mgEnvironments.children)this._environmentList.push(this.mgEnvironments.children[n]);this.app.on("manager:setGameData",this.setGameData,this),this.app.on("manager:next",this.progressToNext,this),this.app.on("manager:onMinigameComplete",this.onMinigameComplete,this),this.app.on("manager:activate",this.activateEntity,this),this.app.on("manager:deactivate",this.deactivateEntity,this),this.app.on("skin:setSkin",this.onSetSkin,this),this.app.on("manager:skipGame",this.onSkipButtonClick,this),this.app.on("manager:setTutorialSprites",this.setTutorialSprites,this),this.destroyed=!1,this.on("destroy",this.onDestroy,this)},GameManager.prototype.postInitialize=function(){P3.audio.stop("music"),this.start()},GameManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy,this),this.app.off("manager:setGameData",this.setGameData,this),this.app.off("manager:next",this.progressToNext,this),this.app.off("manager:onMinigameComplete",this.onMinigameComplete,this),this.app.off("manager:activate",this.activateEntity,this),this.app.off("manager:deactivate",this.deactivateEntity,this),this.app.off("skin:setSkin",this.onSetSkin,this),this.app.off("manager:skipGame",this.onSkipButtonClick,this),this.app.off("manager:setTutorialSprites",this.setTutorialSprites,this)},GameManager.prototype.reset=function(){this._timeProgressed=0,this.doCountDown()},GameManager.prototype.onTimerComplete=function(){this.app.fire("game:stopTargets"),this.app.fire("manager:onMinigameComplete")},GameManager.prototype.onSetSkin=function(e){this._skin=e},GameManager.prototype.onTimerUpdate=function(e){this.timeScreen.element.text=Math.ceil(e.time).toString()},GameManager.prototype.setGameData=function(e){this._gameData=e},GameManager.prototype.onSkipButtonClick=function(e){common.testing&&(this.app.fire("game:stopTargets"),this.onMinigameComplete())},GameManager.prototype.doCountDown=function(){this.app.tween({}).to({},this.countdownTime,pc.Linear).on("complete",this.beginGame,this).start(),common.canShoot=!1;var e=this.tutorialPanels.findByName(this._activatedScene.name),t=this.tutorialPanels.children[0].children[this._gameIndex-1];if(e.setPosition(t.getPosition()),e.setRotation(t.getRotation()),P3.utils.shouldPlayVO())switch(this._activatedScene.name){case"Frantic Mode":P3.audio.playVO("vo_blast_everything_28.mp3");break;case"Chase The Target Mode":case"Precision Mode":P3.audio.playVO("vo_make_sure_12.mp3");break;case"Build Mode":"evergreen"===common.theme?P3.audio.playVO("vo_blast_mini_balloons_15.mp3"):"winter"===common.theme?P3.audio.playVO("vo_fill_bag_20.mp3"):"halloween"===common.theme&&P3.audio.playVO("vo_blast_mini_pumpkins_17.mp3");break;case"Bubble Blaster Mode":P3.audio.playVO("vo_blast_specific_23.mp3");break;case"Stop The Drop Mode":P3.audio.playVO("vo_aim_items_only_29.mp3");break;case"Light Mode":P3.audio.playVO("vo_light_lamps_06.mp3");break;case"Lift Mode":P3.audio.playVO("vo_blast_target_ballpit_05.mp3");break;case"House Mode":P3.audio.playVO("vo_blast_targets_windows_03.mp3");break;case"Sort Mode":P3.audio.playVO("vo_blast_targets_bucket_02.mp3");break;default:console.warn("[GameManager] No VO found for scene: "+this._activatedScene.name)}if(("Lift Mode"===this._activatedScene.name&&"bigcitygreens"===this._skin||"zombies"===this._skin||"descendants"===this._skin)&&(this._cartMoved=!0,this.app.fire("camera:lowerCart",new pc.Vec3(0,-1,0))),e){e.enabled=!0;var i=[],a=e.findByName("good");a&&i.push(a);var n=e.findByName("bad");for(var o in n&&i.push(n),i){var s=i[o].findByName(this._skin);s&&(s.enabled=!0)}var r=e.getLocalPosition();e.setLocalPosition(r.x,5,r.z),e.tween(e.getLocalPosition()).to(new pc.Vec3(r.x,1.333,r.z),1,pc.BackOut).start()}},GameManager.prototype.setTutorialSprites=function(e,t){var i=this.tutorialPanels.findByName(this._activatedScene.name);if(i){var a=i.findByPath("targets/good/ip/"+this._skin),n=a.findByName(e),o=a.findByName(t);console.log("Set tutorial sprites: "+e+" / "+t),n.enabled=!0,o.enabled=!0,o.setLocalPosition(.75,0,0)}},GameManager.prototype.beginTimedGame=function(){this.score.enabled=!0,this.time.enabled=!0,this.app.fire("game:beginTargets",this._skin),this.timeHeader.element.text="Time Left",this.scoreHeader.element.text="Score",this.scoreScreen.element.text="0",common.testing&&(this._gameData.time=999);var e={time:this._gameData.time};this._gameTimer=this.app.tween(e).to({time:0},this._gameData.time,pc.Linear).on("update",function(){this.onTimerUpdate(e),this._timeProgressed=this._gameData.time-e.time},this).on("complete",this.onTimerComplete,this).delay(5).start()},GameManager.prototype.beginStandardGame=function(){this.score.enabled=!0,this.time.enabled=!0,this.timeHeader.element.text="Score",this.scoreHeader.element.text="Score",this.scoreScreen.element.text="0",this.timeScreen.element.text="0",this.app.fire("game:beginTargets",this._skin)},GameManager.prototype.onMinigameComplete=function(){this._gameTimer&&this._gameTimer.stop(),this.score.enabled=!1,this.time.enabled=!1,P3.audio.stop("music"),P3.audio.stop("sound"),this._cartMoved&&(this._cartMoved=!1,this.app.fire("camera:lowerCart",new pc.Vec3(0,1,0)));var e=P3.audio.playEndGameMusic();this.app.tween({}).to({},e.duration,pc.Linear).on("complete",this.progressToNext,this).start()},GameManager.prototype.start=function(){this.app.fire("fade:in"),this._gameIndex++,this.startUI.enabled=!0,this.startUI.script.startUI.start(2,2.5,function(){this.openStartDoors(),this.app.fire("camera:next"),P3.audio.playTransitionMusic()},this)},GameManager.prototype.progressToNext=function(){common.minigame="corridor",this.curtains.children[this._gameIndex].script.curtains.close(),this.app.tween({t:0}).to({t:1},2,pc.Linear).on("complete",function(){this.app.fire("camera:next"),P3.audio.playTransitionMusic(),this._gameIndex++},this).delay(1).start()},GameManager.prototype.beginGame=function(){P3.audio.stop("music"),P3.audio.playGameplayLoop(),this.curtains.children[this._gameIndex].script.curtains.open(),this.app.fire("countdown:start");var e=this.tutorialPanels.findByName(this._activatedScene.name);if(e){var t=e.getLocalPosition();e.tween(e.getLocalPosition()).to(new pc.Vec3(t.x,t.y+10,t.z),1,pc.BackIn).on("complete",function(){e.enabled=!1},this).start()}this._gameData.timed?this.beginTimedGame():this.beginStandardGame()},GameManager.prototype.getTimeProgress=function(){return this._timeProgressed},GameManager.prototype.getGameData=function(){return this._gameData},GameManager.prototype.activateEntity=function(e){if("results"!==e){var t=this._gameMap[0];this._activatedScene=t,this._gameMap.splice(0,1);var i=this.app.root.findByName("Minigame Positions").children[this._gameIndex-1];t.setPosition(i.getPosition()),t.setRotation(i.getRotation()),this.setEnvironment(t),this.reset(),t.enabled=!0,this.app.fire("skin:setProjectile","random")}else this.resultsScreen.enabled=!0,this._activatedScene=this.resultsScreen},GameManager.prototype.setEnvironment=function(e){var t=[{id:"Frantic Mode",environment:this._combo[0]},{id:"Lift Mode",environment:this._combo[5]},{id:"House Mode",environment:this._combo[6]},{id:"Sort Mode",environment:this._combo[7]},{id:"Precision Mode",environment:this._combo[0]},{id:"Chase The Target Mode",environment:this._combo[1]},{id:"Build Mode",environment:this._combo[2]},{id:"Light Mode",environment:this._combo[3]},{id:"Bubble Blaster Mode",environment:this._combo[4]},{id:"Stop The Drop Mode",environment:this._combo[4]}],i=null;for(var a in t)e.name===t[a].id&&(i=t[a].environment);var n=this._environmentList[i];n.enabled=!0,n.name="Environment",n.reparent(e)},GameManager.prototype.deactivateEntity=function(e){var t=this._activatedScene,i=t.findByName("Environment");i&&(i.reparent(this.mgEnvironments),i.enabled=!1),t.enabled=!1},GameManager.prototype.openStartDoors=function(){var e=this.entryDoors.children[0],t=this.entryDoors.children[1];e.tween(e.getLocalEulerAngles()).rotate({y:-70},1,pc.QuarticOut).start(),t.tween(t.getLocalEulerAngles()).rotate({y:70},1,pc.QuarticOut).start()};var ProjectileTrigger=pc.createScript("projectileTrigger");ProjectileTrigger.prototype.initialize=function(){this.entity.collision.on("triggerenter",this.onTriggerEnter,this)},ProjectileTrigger.prototype.onTriggerEnter=function(e){"Projectile"===e.name&&e.destroy()};var Target=pc.createScript("target");Target.attributes.add("hittable",{type:"boolean",default:!0}),Target.attributes.add("invincible",{type:"boolean",default:!1}),Target.attributes.add("corridorTarget",{type:"boolean",default:!1}),Target.attributes.add("corridorDest",{type:"number",default:0}),Target.attributes.add("hitSound",{type:"asset",assetType:"audio"}),Target.attributes.add("corridorHitSound",{type:"asset",assetType:"audio"}),Target.attributes.add("spineHitSound",{type:"asset",assetType:"audio"}),Target.attributes.add("appearSound",{type:"asset",assetType:"audio"}),Target.attributes.add("targetScorePrefab",{type:"entity",title:"Target Score Prefab"}),Target.prototype.initialize=function(){this.hit=!1,this.spun=!1,this.state=Target.STATE.UP,this.special=!1,this.spinning=!1,this._spinTween=null,this._spine=this.entity.findByName("spine"),this._savedScale=pc.Vec3.ONE,this._startRotation=this.entity.parent.getLocalEulerAngles().clone(),this.rail=null,this.isPopup=!1,this.hittable&&this.entity.collision.on("collisionstart",this.onCollisionStart,this),this.components={},this.hardCodedRotation=null,this.hardCodedRotationForSpine=null},Target.prototype.playAnimation=function(t,e,i){if(this._spine&&this._spine.script)return this._spine.script.spine.playAnimation(t,e,i)},Target.prototype.onCollisionStart=function(t){var e=t.other;"Projectile"!==e.name||e.script.projectile.getHit()||(e.script.projectile.setHit(!0),this.onHit(e))},Target.prototype.onHit=function(t){if(this.invincible||!this.hit&&this.state!==Target.STATE.DOWN){this._spine&&this.spineHitSound?P3.audio.playSound(this.spineHitSound.id,{autoPlay:!0,loop:!1}):P3.audio.playSound(this.hitSound.id,{autoPlay:!0,loop:!1});var e=this.targetScorePrefab.clone();e.enabled=!1,e.guid=pc.guid.create(),e.setPosition(t.getPosition()),e.setEulerAngles(this.entity.getEulerAngles()),t.parent.addChild(e),this.corridorTarget?this.onCorridorTargetHit(e):this.invincible||this._spine?this.app.fire("target:hit",this,e):(this.hit=!0,e.enabled=!0,this.app.fire("target:hit",this,e))}},Target.prototype.onCorridorTargetHit=function(t){if(this.state!==Target.STATE.DOWN){this.state=Target.STATE.DOWN,P3.audio.playSound(this.corridorHitSound.id,{autoPlay:!0,loop:!1}),this.app.fire("target:onCorridorTargetHit"),this.app.fire("score:addScore",100,"corridor"),this.app.fire("score:addHit",1,"corridor"),t.enabled=!0;var e=this.app.root.findByName("World-Cam");t.lookAt(e.getPosition()),t.setLocalScale(1.5,1.5,1.5),t.script.targetScore.setText("+100",new pc.Color(1,1,1,1)),t.script.targetScore.animate(),common.debugCamera.lookAt(t.getPosition()),this.entity.parent.tween(this.entity.parent.getLocalEulerAngles()).rotate({x:this.corridorDest},.4,pc.ExponentialOut).start()}},Target.prototype.flipCorridorTargetUp=function(){this.state=Target.STATE.UP,this.entity.parent.tween(this.entity.parent.getLocalEulerAngles()).rotate(this._startRotation,.4,pc.ExponentialOut).start()},Target.prototype.setCorridorTargetDown=function(){this.state=Target.STATE.DOWN,this._savedRotation=this.entity.parent.getLocalEulerAngles().clone();var t=this.entity.parent.getLocalEulerAngles();this.entity.parent.setLocalEulerAngles(this.corridorDest,t.y,t.z)},Target.prototype.scaleDown=function(t,e){if(this.state===Target.STATE.DOWN&&!t)return null;e||(e=function(){}),this.spinning&&this._spinTween.stop();var i,n=this.entity.parent;return this._savedScale.copy(n.getLocalScale()),i=n.tween(n.getLocalScale()).to({y:0},.3,pc.BackOut).on("complete",e).start(),this.state=Target.STATE.DOWN,i},Target.prototype.scaleUp=function(){if(this.state===Target.STATE.UP)return null;this.spinning&&this._spinTween.stop();var t=this.entity.parent,e=t.tween(t.getLocalScale()).to({y:this._savedScale.y},.4,pc.BackOut).start();return this.state=Target.STATE.UP,e},Target.prototype.scaleIn=function(t){var e=this.entity.getLocalScale().clone();this.entity.tween(this.entity.getLocalScale()).to(e,2,pc.Linear).start()},Target.prototype.flipDown=function(t,e,i){if(this.state===Target.STATE.DOWN&&!t)return null;if(i||(i=pc.QuarticOut),e||(e=function(){}),this.spinning&&this._spinTween.stop(),this.isPopup)return n&&(n.enabled=!1),void e();var n=this.entity.parent,a=n.tween(n.getLocalEulerAngles()).rotate({x:-90},.4,i).on("complete",function(){n&&(n.enabled=!1),e()},this).start();return this.state=Target.STATE.DOWN,a},Target.prototype.flipDownScale=function(t,e,i){if(this.state===Target.STATE.DOWN&&!t)return null;if(i||(i=pc.QuarticOut),e||(e=function(){}),this.spinning&&this._spinTween.stop(),this.isPopup)return n&&(n.enabled=!1),void e();var n=this.entity.parent,a=n.tween(n.getLocalEulerAngles()).rotate({x:-90},.4,i).on("complete",function(){n&&(n.enabled=!1),e()},this).start();n.tween(n.getLocalScale()).to(pc.Vec3.ZERO,.4,pc.BackIn).start();return this.state=Target.STATE.DOWN,a},Target.prototype.boing=function(){var t=this.entity.parent;return t.tween(t.getLocalEulerAngles()).rotate({x:-20},.2,pc.QuarticOut).yoyo(!0).repeat(2).start()},Target.prototype.twirl=function(t,e){if(!this.spinning){this.spinning=!0,t=void 0===t?1080:t;var i=this.entity.parent.getLocalEulerAngles(),n={r:i.y};return this._spinTween=this.app.tween(n).to({r:t},1.5,pc.QuinticOut).on("update",function(){if(!this.entity.parent)return this._spinTween.stop(),void(e&&e());this.entity.parent.setLocalEulerAngles(i.x,n.r,i.z)},this).on("complete",function(){this.spinning=!1,e&&e()},this).start(),this._spinTween}},Target.prototype.flipUp=function(){if(this.state===Target.STATE.UP)return null;this.spinning&&this._spinTween.stop();var t=this.entity.parent;t.enabled=!0;var e=t.tween(t.getLocalEulerAngles()).rotate({x:0},.2,pc.QuarticOut).start();return P3.audio.playSound(this.appearSound.id,{autoPlay:!0,loop:!1}),this.state=Target.STATE.UP,e},Target.prototype.setUp=function(){this.entity.parent.setLocalEulerAngles(0,0,0),this.state=Target.STATE.UP},Target.prototype.setDown=function(){this.entity.parent.setLocalEulerAngles(-90,0,0),this.state=Target.STATE.DOWN},Target.prototype.reset=function(){this.flipUp().on("complete",function(){this.hit=!1},this),this.playAnimation(0,"move",!0)},Target.prototype.addScore=function(t){var e=this.targetScorePrefab.clone();e.enabled=!0,e.guid=pc.guid.create(),e.setPosition(this.entity.getPosition()),e.setEulerAngles(this.entity.getEulerAngles()),this.entity.parent.addChild(e),e.script.targetScore.setText("+"+t),e.script.targetScore.animate()},Target.prototype.setSpecial=function(t){this.special=t},Target.prototype.getSpecial=function(){return this.special},Target.STATE={UP:"up",DOWN:"down"};var ScoreManager=pc.createScript("scoreManager");ScoreManager.attributes.add("scoreScreenL",{type:"entity",title:"Left Screen"}),ScoreManager.prototype.initialize=function(){this._targetsMissed={frantic:0,chase:0,drop:0,build:0,bubble:0,light:0,precision:0,lift:0,house:0,sort:0,corridor:0},this._targetsHit={frantic:0,chase:0,drop:0,build:0,bubble:0,light:0,precision:0,lift:0,house:0,sort:0,corridor:0},this._scores={frantic:0,chase:0,drop:0,build:0,bubble:0,light:0,precision:0,lift:0,house:0,sort:0,corridor:0},this._totalShots=0,this._totalMisses=0,this.app.on("score:addScore",this.addScore,this),this.app.on("score:addHit",this.addHits,this),this.app.on("score:addMissed",this.addMissed,this),this.app.on("score:addShot",this.addShot,this),this.destroyed=!1,this.on("destroy",this.onDestroy.bind(this)),common.scoreManager=this},ScoreManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("score:addScore",this.addScore,this),this.app.off("score:addMissed",this.addMissed,this)},ScoreManager.prototype.addScore=function(t,e){this._scores[e]+=t,this.updateScoreScreen(e)},ScoreManager.prototype.addHits=function(t,e){this._targetsHit[e]+=t},ScoreManager.prototype.addMissed=function(t,e){this._targetsMissed[e]+=t,this._totalMisses+=t},ScoreManager.prototype.onScoreUpdate=function(t,e){this._scores[e]=t,this.updateScoreScreen()},ScoreManager.prototype.updateScoreScreen=function(t){this.scoreScreenL.element.text=this._scores[t].toString()},ScoreManager.prototype.getScoreFrom=function(t){return this._scores[t]},ScoreManager.prototype.getAllScores=function(){return this._scores},ScoreManager.prototype.getMissedFrom=function(t){return this._targetsMissed[t]},ScoreManager.prototype.getAllMissed=function(){return this._targetsMissed},ScoreManager.prototype.getHitsFrom=function(t){return this._targetsHit[t]},ScoreManager.prototype.getAllHits=function(){return this._targetsHit},ScoreManager.prototype.addShot=function(){this._totalShots++},ScoreManager.prototype.getShots=function(){return this._totalShots},ScoreManager.prototype.getTotalMisses=function(){return this._totalMisses};var SkinManager=pc.createScript("skinManager");SkinManager.attributes.add("cameraEntity",{type:"entity",title:"Camera"}),SkinManager.attributes.add("projectileEntity",{type:"entity",title:"Projectile Prefab"}),SkinManager.attributes.add("genericVehicle",{type:"entity",title:"Generic Vehicle"}),SkinManager.attributes.add("vampirinaVehicle",{type:"entity",title:"Vampirina Vehicle"}),SkinManager.attributes.add("bcgVehicle",{type:"entity",title:"BCG Vehicle"}),SkinManager.attributes.add("d3Vehicle",{type:"entity",title:"D3 Vehicle"}),SkinManager.attributes.add("jrwiVehicle",{type:"entity",title:"JRWI Vehicle"}),SkinManager.attributes.add("gabbyVehicle",{type:"entity",title:"Gabby Duran Vehicle"}),SkinManager.attributes.add("mickeyVehicle",{type:"entity",title:"MMUA Vehicle"}),SkinManager.attributes.add("muppetsVehicle",{type:"entity",title:"muppets Vehicle"}),SkinManager.attributes.add("totsVehicle",{type:"entity",title:"tots Vehicle"}),SkinManager.attributes.add("zombiesVehicle",{type:"entity",title:"zombies Vehicle"}),SkinManager.attributes.add("miraVehicle",{type:"entity",title:"mira Vehicle"}),SkinManager.attributes.add("udmVehicle",{type:"entity",title:"UDM Vehicle"}),SkinManager.attributes.add("genericProjectiles",{type:"asset",assetType:"model",array:!0,title:"Generic Projectiles"}),SkinManager.attributes.add("vampirinaProjectiles",{type:"asset",assetType:"model",array:!0,title:"Vamp Projectiles"}),SkinManager.attributes.add("bcgProjectiles",{type:"asset",assetType:"model",array:!0,title:"BCG Projectiles"}),SkinManager.attributes.add("d3Projectiles",{type:"asset",assetType:"model",array:!0,title:"D3 Projectiles"}),SkinManager.attributes.add("jrwiProjectiles",{type:"asset",assetType:"model",array:!0,title:"JRWI Projectiles"}),SkinManager.attributes.add("gabbyProjectiles",{type:"asset",assetType:"model",array:!0,title:"Gabby Duran Projectiles"}),SkinManager.attributes.add("mickeyProjectiles",{type:"asset",assetType:"model",array:!0,title:"MMUA Projectiles"}),SkinManager.attributes.add("muppetsProjectiles",{type:"asset",assetType:"model",array:!0,title:"muppets Projectiles"}),SkinManager.attributes.add("totsProjectiles",{type:"asset",assetType:"model",array:!0,title:"tots Projectiles"}),SkinManager.attributes.add("zombiesProjectiles",{type:"asset",assetType:"model",array:!0,title:"zombies Projectiles"}),SkinManager.attributes.add("miraProjectiles",{type:"asset",assetType:"model",array:!0,title:"mira Projectiles"}),SkinManager.attributes.add("udmProjectiles",{type:"asset",assetType:"model",array:!0,title:"UDM Projectiles"}),SkinManager.prototype.initialize=function(){this._data={generic:{projectiles:this.genericProjectiles,vehicle:this.genericVehicle},vampirina:{projectiles:this.vampirinaProjectiles,vehicle:this.vampirinaVehicle},bigcitygreens:{projectiles:this.bcgProjectiles,vehicle:this.bcgVehicle},descendants:{projectiles:this.d3Projectiles,vehicle:this.d3Vehicle},justrollwithit:{projectiles:this.jrwiProjectiles,vehicle:this.jrwiVehicle},gabby:{projectiles:this.gabbyProjectiles,vehicle:this.gabbyVehicle},mmua:{projectiles:this.mickeyProjectiles,vehicle:this.mickeyVehicle},muppets:{projectiles:this.muppetsProjectiles,vehicle:this.muppetsVehicle},tots:{projectiles:this.totsProjectiles,vehicle:this.totsVehicle},zombies:{projectiles:this.zombiesProjectiles,vehicle:this.zombiesVehicle},mira:{projectiles:this.miraProjectiles,vehicle:this.miraVehicle},udm:{projectiles:this.udmProjectiles,vehicle:this.udmVehicle}},this._activeData=this._data.generic,this._selectedSkin="generic",this.app.on("skin:setSkin",this.setSkin,this),this.app.on("skin:setProjectile",this.setProjectile,this),this.app.on("skin:showProjectiles",this.displayProjectiles,this),this.destroyed=!1,this.on("destroy",this.onDestroy,this),this._cartOutTween=null,this._cartInTween=null,this._oldCart=null,this._oldCartPosition=new pc.Vec3,this._tweening=!1,this.app.mouse.on(pc.EVENT_MOUSEDOWN,this.onClick,this)},SkinManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy,this),this.app.off("skin:setSkin",this.setSkin,this),this.app.off("skin:setProjectile",this.setProjectile,this),this.app.mouse.off(pc.EVENT_MOUSEDOWN,this.onClick,this)},SkinManager.prototype.setSkin=function(e,t){t=!!t,this._selectedSkin=e,console.log("set skin:",e),common.skin=e;var i=this._activeData.vehicle;this._activeData.vehicle.name="Vehicle-off",this._activeData=this._data[e],this._activeData.vehicle.name="Vehicle",t?this.swapCart(i,this._activeData.vehicle):(i.enabled=!1,this._activeData.vehicle.enabled=!0),this.setProjectile("random"),this.onSkinChange()},SkinManager.prototype.onClick=function(e){var t=this.cameraEntity.camera.screenToWorld(e.x,e.y,this.cameraEntity.camera.nearClip),i=this.cameraEntity.camera.screenToWorld(e.x,e.y,this.cameraEntity.camera.farClip),a=this.app.systems.rigidbody.raycastFirst(t,i);if(a){var s=a.entity;if(s.tags.has("projectile")){s.parent.children.forEach(function(e){e.active=!1});var r=this.app.root.findByName("light-halo");r.enabled=!0,r.setPosition(s.getPosition()),r.translate(0,-.005,-.01),s.active=!0,this.setProjectile(s.index)}}},SkinManager.prototype.swapCart=function(e,t){if(this._tweening){this._cartInTween.stop(),this._cartOutTween.stop();this._oldCart.getLocalPosition();this._oldCart.setLocalPosition(this._oldCartPosition),this._oldCart.enabled=!1,this._oldCart.findByTag("light").forEach(function(e){e.enabled=!0})}this._tweening=!0,t.translate(0,0,1),t.enabled=!0,e.findByTag("light").forEach(function(e){e.enabled=!1}),this._cartInTween=t.tween(t.getLocalPosition()).to({z:0},.25,pc.QuadraticOut).on("complete",function(){e.enabled=!1,e.setLocalPosition(this._oldCartPosition),this._tweening=!1,e.findByTag("light").forEach(function(e){e.enabled=!0})},this),this._cartOutTween=e.tween(e.getLocalPosition()).to({y:-1},.5,pc.Linear).chain(this._cartInTween).start(),this._oldCart=e,this._oldCartPosition.copy(e.getLocalPosition())},SkinManager.prototype.onSkinChange=function(){this.app.fire("skin:onSkinChange",this._activeData)},SkinManager.prototype.setProjectile=function(e){if("number"==typeof e)this.projectileEntity.model.asset=this._activeData.projectiles[e];else{var t=Math.floor(pc.math.random(0,this._activeData.projectiles.length)),i=this._activeData.projectiles[t];this.projectileEntity.model.asset=i.id}};var PhysicalButton=pc.createScript("physicalButton");PhysicalButton.prototype.initialize=function(){this.entity.collision.on("collisionstart",this.onCollision,this),this._originalRotation=this.entity.getRotation().clone(),this._currentRotation=new pc.Quat,this._hit=!1,this._lerpBack=!1},PhysicalButton.prototype.update=function(t){this._hit&&0===this.entity.rigidbody.linearVelocity.length()&&(this._hit=!1,this._lerpBack=!0),this._lerpBack&&(this._currentRotation.copy(this.entity.getRotation()),this._currentRotation.slerp(this._currentRotation,this._originalRotation,1*t),this.entity.rigidbody.teleport(this.entity.getPosition(),this._currentRotation))},PhysicalButton.prototype.tweenReset=function(){this.entity.rigidbody.teleport(this.entity.getPosition(),this._originalRotation)},PhysicalButton.prototype.onCollision=function(t){this._hit=!0,this._lerpBack=!1;var i=this.entity.findByName("Box");i.model.model.meshInstances[0].material.diffuse.set(Math.random(),Math.random(),Math.random()),i.model.model.meshInstances[0].material.update()};var LightHalo=pc.createScript("lightHalo");LightHalo.attributes.add("camera",{type:"entity"}),LightHalo.attributes.add("unidirectional",{type:"boolean",default:!1}),LightHalo.temp=new pc.Vec3,LightHalo.prototype.initialize=function(){this.plane=this.entity.children[0]},LightHalo.prototype.update=function(t){var a=LightHalo.temp;a.copy(this.entity.parent.forward).scale(-1);var e=this.plane.model.meshInstances;if(this.camera)if(this.entity.lookAt(this.camera.getPosition()),this.unidirectional){var i=-1*a.dot(this.camera.forward);i<0&&(i=0),e[0].setParameter("material_opacity",i)}else e[0].setParameter("material_opacity",1)};var CameraController=pc.createScript("cameraController");CameraController.attributes.add("pathRoot",{type:"entity",title:"Path Root"}),CameraController.attributes.add("worldCam",{type:"entity",title:"World Camera"}),CameraController.attributes.add("shakeCamera",{type:"boolean",default:!0,title:"Camera Shake",description:"Camera Shake during transitions"}),CameraController.attributes.add("frequency",{type:"number",default:8,title:"Shake Frequency"}),CameraController.attributes.add("amplitude",{type:"number",default:4,title:"Shake Amplitude"}),CameraController.prototype.initialize=function(){this._cameraPoints=[],this._specialPaths=[],this._pathIndex=-1,this._totalTime=0,this._moving=!1,this.on("destroy",this.onDestroy,this),this.app.on("camera:next",this.gotoNext,this),this.app.on("camera:lowerCart",this.lowerCart,this),this.app.on("camera:gotoIP",this.gotoIP,this),this.app.on("camera:gotoGame1",this.gotoGame1,this),this._cart=this.entity.findByName("Vehicle"),this.cameraShake=null,this.cartShake=null,this.parsePoints(),this.destroyed=!1},CameraController.prototype.onDestroy=function(){this.destroyed=!0,this.worldCam.enabled=!1,this.off("destroy",this.onDestroy,this),this.app.off("camera:next",this.gotoNext,this),this.app.off("camera:lowerCart",this.lowerCart,this),this.app.off("camera:gotoIP",this.gotoIP,this),this.app.off("camera:gotoGame1",this.gotoGame1,this)},CameraController.prototype.lowerCart=function(t){console.log("received event! moving by "+t.toString());var e=this._cart.getLocalPosition();this._cart.tween(this._cart.getLocalPosition()).to({x:e.x+t.x,y:e.y+t.y,z:e.z+t.z},.5,pc.QuadraticOut).start()},CameraController.prototype.parsePoints=function(){for(var t=this.pathRoot.children,e=0;e<t.length;e++){var a=t[e].script.point,i=t[e].children,o=[],s=[],r=[],n=[],h=[],l=[],p=[],c=[],u=t[e].getPosition().clone();i[i.length-1].getPosition().clone();s.push([0,u.x]),r.push([0,u.y]),n.push([0,u.z]);var m=0,d=null,y=null,g=null,C=null,f=null,v=null;for(d=0;d<i.length;d++)y=u,g=i[d].getPosition(),d>0&&(y=i[d-1].getPosition()),C=g.x-y.x,f=g.y-y.y,v=g.z-y.z,m+=new pc.Vec3(C,f,v).length();var x=0;for(d=0;d<i.length;d++){var P=i[d],k=P.getPosition().clone();y=u,d>0&&(y=i[d-1].getPosition()),C=k.x-y.x,f=k.y-y.y,v=k.z-y.z;var _=(x+=new pc.Vec3(C,f,v).length())/m;h.push(_),l.push(P.script.point.easing),p.push(P.script.point.functionName),c.push(P.script.point),P.children[0].enabled=!1,s.push([_,k.x]),r.push([_,k.y]),n.push([_,k.z]),o.push(P.getEulerAngles().clone())}var w={curves:[createLine(s),createLine(r),createLine(n)],functions:p,scopes:c,keys:h,easings:l,rotations:o,speedTo:a.speedToNext};this._cameraPoints.push(w)}function createLine(t){return new LineMapper(t)}},CameraController.prototype.gotoNext=function(){if(this._pathIndex++,!(this._pathIndex>=this._cameraPoints.length)){var t=this._cameraPoints[this._pathIndex],e=t.curves;this._totalTime=t.speedTo,this._moving=!0,this.shakeCamera&&(this.cameraShake=new CameraShake(1e3*t.speedTo,this.frequency),this.cameraShake.start(),this.cartShake=new CameraShake(1e3*t.speedTo,this.frequency),this.cartShake.start()),this._cart=this.entity.findByName("Vehicle");var a={t:0};this.entity.tween(a).to({t:1},t.speedTo,pc.Linear).on("update",function(){var t=0;this.shakeCamera&&(this.cameraShake.update(),t=this.cameraShake.amplitude()*this.amplitude,this.cartShake.update(),this.cartShake.amplitude(),this.amplitude);var i=e[0].value(a.t),o=e[1].value(a.t)+t,s=e[2].value(a.t);this.entity.setPosition(i,o,s),this.worldCam.setPosition(i+-.108,o+-.05,s+-.343)},this).on("complete",function(){this._moving=!1},this).start();for(var i=0,o=this.entity.getEulerAngles().clone(),s=this.worldCam.getEulerAngles().clone(),r=0;r<t.keys.length;r++){var n=t.keys[r]*t.speedTo;r>0&&(n-=t.keys[r-1]*t.speedTo);var h=t.rotations[r];this.entity.tween(o).rotate(h,n,pc[t.easings[r]]).delay(i+.1).start(),this.worldCam.tween(s).rotate(h,n,pc[t.easings[r]]).delay(i).start(),i+=n,o.x=t.rotations[r].x,o.y=t.rotations[r].y,o.z=t.rotations[r].z,s.x=t.rotations[r].x,s.y=t.rotations[r].y,s.z=t.rotations[r].z,t.functions[r]&&callFunction(this.entity,t.functions[r],t.scopes[r],i)}}function callFunction(t,e,a,i){t.tween({t:0}).to({t:1},i,pc.Linear).on("complete",function(){a.callFunction(e)},this).start()}},CameraController.prototype.gotoIP=function(){this.entity.setPosition(-80,0,0),this.entity.setLocalEulerAngles(0,180,0),this._pathIndex=-1,this.app.fire("manager:activate","ippicker"),this.app.fire("manager:deactivate","results")},CameraController.prototype.gotoGame1=function(){this.entity.setPosition(0,0,0),this.entity.setLocalEulerAngles(0,0,0),this._pathIndex=0,this.app.fire("manager:activate","frantic"),this.app.fire("manager:deactivate","results")},CameraController.prototype.update=function(t){this.destroyed};var Point=pc.createScript("point");Point.attributes.add("speedToNext",{type:"number",default:3,title:"Speed To Next Point (s)"}),Point.attributes.add("easing",{type:"string",default:"Linear",title:"Easing (rotations)",description:'Any from: https://github.com/playcanvas/playcanvas-tween#easing-methods - Copy it exactly without "pc."'}),Point.attributes.add("pathEasing",{type:"string",default:"Linear",title:"Easing (movement)",description:'Any from: https://github.com/playcanvas/playcanvas-tween#easing-methods - Copy it exactly without "pc."'}),Point.attributes.add("functionName",{type:"string",default:"",title:"Function",description:"Calls the specified function once the camera has arrived at this point"}),Point.prototype.initialize=function(){this._gameManager=this.app.root.findByName("Root").script.gameManager},Point.prototype.callFunction=function(t){this[t.split(",")[0]](t)},Point.prototype.disable=function(t){var i=t.split(",");this._gameManager.deactivateEntity(i[1])},Point.prototype.enable=function(t){var i=t.split(",");this._gameManager.activateEntity(i[1])},Point.prototype.activateButtons=function(t){this.app.fire("results:activate")};var Projectile=pc.createScript("projectile");Projectile.attributes.add("bounceSounds",{type:"asset",assetType:"audio",array:!0}),Projectile.attributes.add("burstEmitters",{type:"entity",array:!0}),Projectile.prototype.initialize=function(){this._hit=!1,this._hits=0,this._destroyed=!1,this._hitsThreshold=2,this._emitter=P3.utils.selectRandom(this.burstEmitters).clone(),this.app.root.root.addChild(this._emitter),this.cleanup(),this.entity.collision.on("collisionstart",this.onCollisionStart,this),this.app.fire("score:addShot")},Projectile.prototype.cleanup=function(){this.entity.tween({}).to({},5,pc.Linear).on("complete",function(){this.kill()},this).start()},Projectile.prototype.scaleOut=function(t,i){this.entity.tween(this.entity.getLocalScale()).to(pc.Vec3.ZERO,.5,pc.SineOut).on("complete",function(){t&&t.call(i)},this).start()},Projectile.prototype.kill=function(){this._destroyed||(this._hits<=0&&common.scoreManager&&common.scoreManager.addMissed(1,common.minigame),this._destroyed=!0,this.entity.collision.off("collisionstart",this.onCollisionStart,this),this.entity.destroy())},Projectile.prototype.onCollisionStart=function(t){if(this._hits++,this.app.fire("projectile:hit",t),P3.audio.playSound(P3.utils.selectRandom(this.bounceSounds).id,{autoPlay:!0,loop:!1}),1===this._hits&&"mira"===common.skin){var i=this._emitter;i.setPosition(t.contacts[0].pointOther),i.enabled=!0,i.particlesystem.play(),P3.utils.delay(1,function(){i.destroy()},null,this)}if(common.scoreManager&&1===this._hits&&t.other.script&&!t.other.script.target&&(this.app.fire("projectile:miss",this),common.scoreManager.addMissed(1,common.minigame)),this._hits>=this._hitsThreshold)return this.entity.collision.off("collisionstart",this.onCollisionStart,this),void this.scaleOut(function(){this.kill()},this)},Projectile.prototype.update=function(t){},Projectile.prototype.setHit=function(t){this._hit=t},Projectile.prototype.getHit=function(){return this._hit};var Curtains=pc.createScript("curtains");Curtains.attributes.add("curtainLeft",{type:"entity",title:"Left"}),Curtains.attributes.add("curtainRight",{type:"entity",title:"Right"}),Curtains.attributes.add("startOpen",{type:"boolean",default:!1,title:"Start Open"}),Curtains.attributes.add("curtainTime",{type:"number",default:3,title:"Curtain Time"}),Curtains.attributes.add("openX",{type:"number",default:16.526,title:"Open Position (x)"}),Curtains.prototype.initialize=function(){this.startOpen&&(this.curtainLeft.setLocalPosition(-this.openX,0,0),this.curtainRight.setLocalPosition(this.openX,0,0))},Curtains.prototype.open=function(){P3.audio.playCurtainSound("open"),this.curtainLeft.tween(this.curtainLeft.getLocalPosition()).to(new pc.Vec3(-this.openX,0,0),this.curtainTime,pc.QuarticOut).start(),this.curtainRight.tween(this.curtainRight.getLocalPosition()).to(new pc.Vec3(this.openX,0,0),this.curtainTime,pc.QuarticOut).start()},Curtains.prototype.close=function(){P3.audio.playCurtainSound("close"),this.curtainLeft.tween(this.curtainLeft.getLocalPosition()).to(new pc.Vec3(-6,0,0),this.curtainTime,pc.QuarticOut).start(),this.curtainRight.tween(this.curtainRight.getLocalPosition()).to(new pc.Vec3(6,0,0),this.curtainTime,pc.QuarticOut).start()};var PauseButton=pc.createScript("pauseButton");PauseButton.attributes.add("pauseStage",{type:"entity",title:"Pause UI"}),PauseButton.attributes.add("playButton",{type:"entity",title:"Play Button"}),PauseButton.attributes.add("homeButton",{type:"entity",title:"Home Button"}),PauseButton.attributes.add("muteButton",{type:"entity",title:"Mute Button"}),PauseButton.attributes.add("skipButton",{type:"entity",title:"Skip Button"}),PauseButton.prototype.initialize=function(){this._scale=this.entity.getLocalScale().clone(),this._paused=!1,this._tween=null,this.pauseElement=this.entity.findByName("ViewPause"),this.playElement=this.entity.findByName("ViewPlay"),this.entity.element.on("click",this.onPauseClick,this),this.playButton.element.on("click",this.onPauseClick,this),this.homeButton.element.on("click",this.onHomeButtonClick,this),this.muteButton.element.on("click",this.onMuteButtonClick,this),this.skipButton.element.on("click",this.onSkipButtonClick,this),common.testing||(this.skipButton.enabled=!1),this._skin=""},PauseButton.prototype.onMuteButtonClick=function(t){t.stopPropagation();var e=this.muteButton.findByName("ViewMute"),n=this.muteButton.findByName("ViewUnmute");common.muted=!common.muted,e.enabled=!common.muted,n.enabled=common.muted},PauseButton.prototype.onHomeButtonClick=function(t){t.stopPropagation(),this._skin=this.app.root.findByName("Root").script.gameManager._skin,this.togglePause(),this.app.fire("fade:out"),this.app.fire("AssetManager:loadSplashAssets",function(){this.changeScenes("815693")},this)},PauseButton.prototype.onPauseClick=function(t){t.stopPropagation(),this.togglePause()},PauseButton.prototype.onSkipButtonClick=function(){common.testing&&(this.app.fire("manager:skipGame"),this.togglePause())},PauseButton.prototype.togglePause=function(){var t=this.entity.findByName("ViewPause");this._paused=!this._paused,t.enabled=!this._paused,this.playButton.enabled=this._paused,this.pauseStage.enabled=this._paused,this.app.timeScale=this._paused?0:1,pc.app.systems.sound.manager.volume=this._paused?0:common.muted?0:1,this.app.fire("event:pause",this._paused),common.paused=this._paused},PauseButton.prototype.onPointerEnter=function(t){this._tween&&this._tween.stop(),this._tween=this.entity.tween(this.entity.getLocalScale()).to(new pc.Vec3(1,1,1),.4,pc.BackInOut).start()},PauseButton.prototype.onPointerLeave=function(t){this._tween&&this._tween.stop(),this._tween=this.entity.tween(this.entity.getLocalScale()).to(this._scale,.4,pc.BackInOut).start()},PauseButton.prototype.changeScenes=function(t){setTimeout(function(){this.app._tweenManager.destroy();var e=this.app.root.findByName("Root");e&&e.destroy(),this.loadScene(t,function(){setTimeout(function(){this.app.fire("skin:setSkin",this._skin),this.app.timeScale=1}.bind(this),500)}.bind(this))}.bind(this),100)},PauseButton.prototype.loadScene=function(t,e){var n=t+".json";this.app.loadSceneHierarchy(n,function(t,n){t?console.error(t):e(n)})};var IPPickerManager=pc.createScript("ipPickerManager");IPPickerManager.attributes.add("menuSound",{type:"asset",assetType:"audio"}),IPPickerManager.attributes.add("leftButton",{type:"entity",title:"Left Button"}),IPPickerManager.attributes.add("rightButton",{type:"entity",title:"Right Button"}),IPPickerManager.attributes.add("playButton",{type:"entity",title:"Play Button"}),IPPickerManager.attributes.add("selectorBoard",{type:"entity",title:"IP Board"}),IPPickerManager.attributes.add("showLogo",{type:"entity",title:"Show Logo Holder"}),IPPickerManager.attributes.add("showLogoSprites",{type:"asset",assetType:"sprite",array:!0,title:"Show Logos"}),IPPickerManager.attributes.add("showIcon",{type:"entity",title:"Show Icon Holder"}),IPPickerManager.attributes.add("showSprites",{type:"asset",assetType:"sprite",array:!0,title:"Show Icons"}),IPPickerManager.attributes.add("theme",{type:"string",enum:[{halloween:"halloween"},{evergreen:"evergreen"},{winter:"winter"}]}),IPPickerManager.prototype.initialize=function(){this.app.timeScale=1;for(var t=[],e=0;e<t.length;e++)common.map.splice(t[e]-e,1),this.showLogoSprites.splice(t[e]-e,1),this.showSprites.splice(t[e]-e,1);this._currentIndex=0,this._clicked=!1,this._buttonsSpinning=!1,this._zombieHandMoving=!1,this._tombstoneMoving=!1,this.leftButton.collision.on("collisionstart",this.onLeftButtonHit,this),this.rightButton.collision.on("collisionstart",this.onRightButtonHit,this),this.playButton.collision.on("collisionstart",this.onPlayButtonHit,this),this.on("enable",this.onEnable,this),P3.audio.playMusic(this.menuSound.id,{loop:!0,autoPlay:!0}),setTimeout(function(){var t=sessionStorage.getItem("DSN00962_skin");t?(this._currentIndex=common.map.indexOf(t),this.app.fire("skin:setSkin",t)):(this._currentIndex=0,this.app.fire("skin:setSkin","generic")),this.app.fire("skin:setProjectile","random"),this.showIcon.sprite.sprite=this.showSprites[this._currentIndex].resource,this.showLogo.sprite.sprite=this.showLogoSprites[this._currentIndex].resource}.bind(this),50)},IPPickerManager.prototype.onEnable=function(){this._clicked=!1},IPPickerManager.prototype.onPlayButtonHit=function(t){this._clicked||t.other.script.projectile.getHit()||(this._clicked=!0,sessionStorage.setItem("DSN00962_skin",common.map[this._currentIndex]),this.app.fire("manager:next"))},IPPickerManager.prototype.onLeftButtonHit=function(){this._leftButtonTween&&(this._leftButtonTween.stop(),this._leftButtonTween=null),this._leftButtonTween=this.twirlEntity(this.leftButton,1080,1.5),this._currentIndex--,this._currentIndex<=-1&&(this._currentIndex=common.map.length-1),this.onBoardHit(1),this.app.fire("skin:setSkin",common.map[this._currentIndex],!0),this.app.fire("skin:setProjectile","random"),this.showIcon.sprite.sprite=this.showSprites[this._currentIndex].resource,this.showLogo.sprite.sprite=this.showLogoSprites[this._currentIndex].resource},IPPickerManager.prototype.onRightButtonHit=function(){this._rightButtonTween&&(this._rightButtonTween.stop(),this._rightButtonTween=null),this._rightButtonTween=this.twirlEntity(this.rightButton,-1080,1.5),this._currentIndex++,this._currentIndex>=common.map.length&&(this._currentIndex=0),this.onBoardHit(-1),this.app.fire("skin:setSkin",common.map[this._currentIndex],!0),this.app.fire("skin:setProjectile","random"),this.showIcon.sprite.sprite=this.showSprites[this._currentIndex].resource,this.showLogo.sprite.sprite=this.showLogoSprites[this._currentIndex].resource},IPPickerManager.prototype.onBoardHit=function(t){var e=this.selectorBoard.tween(this.selectorBoard.getLocalEulerAngles()).rotate(new pc.Vec3(0,0,0),.1,pc.QuadraticOut);this.selectorBoard.tween(this.selectorBoard.getLocalEulerAngles()).rotate(new pc.Vec3(0,0,5*t),.1,pc.QuadraticOut).chain(e).start()},IPPickerManager.prototype.onZombieHandHit=function(){if(!this._zombieHandMoving){this._zombieHandMoving=!0;var t=this.zombieHand.getLocalPosition().clone(),e=this.zombieHand.tween(this.zombieHand.getLocalPosition()).to({x:t.x,y:t.y},.1,pc.Linear);this.zombieHand.tween(this.zombieHand.getLocalPosition()).to({y:t.y-6},2,pc.CircularOut).on("update",function(){this.zombieHand.translate(pc.math.random(-.2,.2),0,0)},this).on("complete",function(){this._zombieHandMoving=!1},this).chain(e).start()}},IPPickerManager.prototype.twirlEntity=function(t,e,i){this._buttonsSpinning=!0,t.setEulerAngles(0,0,0);var n={r:0};return this.app.tween(n).to({r:e},i,pc.QuinticOut).on("update",function(){t.setEulerAngles(0,n.r,0)},this).on("complete",function(){this._buttonsSpinning=!1,t.setEulerAngles(0,0,0)},this).start()},IPPickerManager.prototype.onEyesHit=function(t,e){e.enabled=!1,this.app.tween({}).to({},1,pc.Linear).on("complete",function(){e.enabled=!0},this).start()},IPPickerManager.prototype.onTombstoneHit=function(){if(!this._tombstoneMoving){this._tombstoneMoving=!0;var t=this.tombstone.tween(this.tombstone.getLocalEulerAngles()).rotate({x:0},.4,pc.BackOut).on("complete",function(){this._tombstoneMoving=!1},this).delay(1);this.tombstone.tween(this.tombstone.getLocalEulerAngles()).rotate({x:-120},.2,pc.Linear).chain(t).start()}};var Rail=pc.createScript("rail");Rail.attributes.add("easing",{type:"string",title:"Movement Easing",default:"pc.Linear"}),Rail.attributes.add("targetInterval",{type:"number",title:"Target Interval (s)",default:1.5}),Rail.attributes.add("interpolation",{type:"string",title:"Curve Interpolation",default:"pc.CURVE_SPLINE"}),Rail.attributes.add("rotate",{type:"boolean",title:"Rotate With Path",default:!0}),Rail.attributes.add("speed",{type:"number",title:"Speed",default:14}),Rail.prototype.initialize=function(){};var TargetScore=pc.createScript("targetScore");TargetScore.attributes.add("scoreTextLeft",{type:"entity",title:"Text"}),TargetScore.attributes.add("scoreTextLeftBack",{type:"entity",title:"Text"}),TargetScore.prototype.initialize=function(){this._spinTween=null,this._defaultPos=this.entity.getLocalPosition().clone()},TargetScore.prototype.update=function(t){},TargetScore.prototype.setText=function(t,e){this.scoreTextLeft.element.text=t,this.scoreTextLeftBack.element.text=t,e?(this.scoreTextLeft.element.color=e,this.scoreTextLeftBack.element.color=e):(this.scoreTextLeft.element.color=new pc.Color(1,1,1,1),this.scoreTextLeftBack.element.color=new pc.Color(1,1,1,1))},TargetScore.prototype.reset=function(){this.entity.setLocalPosition(this._defaultPos)},TargetScore.prototype.animate=function(){this._spinTween&&this._spinTween.stop(),this.reset();var t=this.entity.getLocalPosition(),e={p:4,y:t.y};this._spinTween=this.app.tween(e).to({p:0,y:t.y+3},1.5,pc.QuinticOut).on("update",function(){this.entity.setLocalPosition(t.x,e.y,t.z),this.scoreTextLeft.element.opacity=e.p,this.scoreTextLeftBack.element.opacity=e.p},this).start()};var SplashLogo=pc.createScript("splashLogo");SplashLogo.prototype.initialize=function(){this.entity.collision.on("collisionstart",this.onCollisionStart,this),this._tweenA=null,this._tweenB=null},SplashLogo.prototype.update=function(t){},SplashLogo.prototype.onCollisionStart=function(){this._tweenA&&this._tweenA.stop(),this._tweenB&&this._tweenB.stop();var t=this.entity.parent.getEulerAngles(),n={rotation:t.x},e=this.entity.parent.tween(n).to({rotation:30},.16,pc.SineOut).on("update",function(){this.entity.parent.setEulerAngles(n.rotation,t.y,t.z)},this),i=this.entity.parent.tween(n).to({rotation:0},.74,pc.BackOut).on("update",function(){this.entity.parent.setEulerAngles(n.rotation,t.y,t.z)},this);e.chain(i),e.start(),this._tweenA=e,this._tweenB=i};var SplashAnimation=pc.createScript("splashAnimation");SplashAnimation.attributes.add("ipPicker",{type:"entity",title:"IP Picker"}),SplashAnimation.attributes.add("cameraController",{type:"entity",title:"Camera Controller"}),SplashAnimation.prototype.initialize=function(){},SplashAnimation.prototype.animateIn=function(){var t=this.entity.getLocalPosition();t=new pc.Vec3(t.x,t.y,t.z),this.entity.setLocalPosition(new pc.Vec3(t.x,t.y+8,t.z)),this.entity.tween(this.entity.getLocalPosition()).to(t,.85,pc.ElasticOut).start()},SplashAnimation.prototype.animateOut=function(){var t=this.entity.getLocalPosition();t=new pc.Vec3(t.x,t.y+7.5,t.z),this.entity.tween(this.entity.getLocalPosition()).to(t,.35,pc.BackIn).on("complete",function(){this.entity.enabled=!1}).start(),this.ipPicker.enabled=!0,this.ipPicker.script.selectorAnimation.animateIn(),this.app.fire("skin:showProjectiles",!0),this.cameraController&&this.cameraController.script.splashCameraController.nextLocation()},SplashAnimation.prototype.update=function(t){};var SplashButton=pc.createScript("splashButton");SplashButton.attributes.add("splashLogoCollider",{type:"entity",title:"SplashLogoCollider"}),SplashButton.attributes.add("scripts",{type:"entity",title:"Scripts"}),SplashButton.prototype.initialize=function(){this.entity.collision.on("collisionstart",this.onCollisionStart,this)},SplashButton.prototype.update=function(t){},SplashButton.prototype.onCollisionStart=function(t){if(t.other.rigidbody.linearVelocity.normalize().dot(this.entity.forward.normalize())>.9&&(this.entity.parent.script.splashAnimation.animateOut(),this.splashLogoCollider&&(this.splashLogoCollider.enabled=!1),this.entity.collision.enabled=!1,this.scripts)){var i=sessionStorage.getItem("DSN00962_skin")||common.map[0];this.app.fire("skin:setSkin",i)}};var SelectorAnimation=pc.createScript("selectorAnimation");SelectorAnimation.attributes.add("cameraController",{type:"entity",title:"Camera Controller"}),SelectorAnimation.prototype.initialize=function(){this.collision&&(this.collision.enabled=!1)},SelectorAnimation.prototype.update=function(t){},SelectorAnimation.prototype.onDestroy=function(){this.entity.off("destroy",this.onDestroy,this)},SelectorAnimation.prototype.animateIn=function(){var t=this.entity.getEulerAngles(),e={rotation:-90};this.entity.setEulerAngles(e.rotation,t.y,t.z),this.entity.parent.tween(e).to({rotation:0},.26,pc.BackOut).on("update",function(){this.entity.setEulerAngles(e.rotation,t.y,t.z)},this).on("complete",function(){this.collision&&(this.collision.enabled=!0);var t=this.entity.findByName("Play");t&&(t.collision.enabled=!0),P3.audio.playVO("vo_pick_favourite_02.mp3")},this).delay(1.6).start()},SelectorAnimation.prototype.animateOut=function(){var t=this.entity.getEulerAngles(),e={rotation:0};this.entity.parent.tween(e).to({rotation:-90},.26,pc.CubicInOut).on("update",function(){this.entity.setEulerAngles(e.rotation,t.y,t.z)},this).on("complete",function(){this.entity.enabled=!1,this.animatePlayerOut()},this).start()},SelectorAnimation.prototype.animatePlayerOut=function(){this.cameraController&&this.cameraController.script.splashCameraController.nextLocation()};var PlayButton=pc.createScript("playButton");PlayButton.prototype.initialize=function(){this.entity.collision.on("collisionstart",this.onCollisionStart,this)},PlayButton.prototype.update=function(t){},PlayButton.prototype.onCollisionStart=function(t){if(t.other.rigidbody.linearVelocity.normalize().dot(this.entity.forward.normalize())>.9){this.entity.parent.script.selectorAnimation.animateOut(),this.entity.collision.enabled=!1;var i=this.entity.parent.findByName("Icon");i&&(i.collision.enabled=!1);var n=this.entity.parent.findByName("Left");n&&(n.collision.enabled=!1);var o=this.entity.parent.findByName("Right");o&&(o.collision.enabled=!1)}};var SplashCameraController=pc.createScript("splashCameraController");SplashCameraController.attributes.add("player",{type:"entity",title:"Player"}),SplashCameraController.attributes.add("scripts",{type:"entity",title:"Scripts"}),SplashCameraController.attributes.add("speed",{type:"number",default:10,title:"Speed"}),SplashCameraController.attributes.add("splashEntity",{type:"entity",title:"Splash Entity"}),SplashCameraController.attributes.add("theme",{type:"number",enum:[{halloween:790743},{evergreen:816603},{winter:825017}]}),SplashCameraController.prototype.initialize=function(){document.title={790743:"halloween",816603:"evergreen",825017:"winter"}[this.theme.toString()],this._locations=this.entity.findByTag("cam_location"),this._state=SplashCameraController.STATES.NONE,this._skin=null,this._locationIndex=-1,this._tweenA=null,this._tweenB=null,setTimeout(function(){this.nextLocation(),setTimeout(function(){this.splashEntity&&(this.splashEntity.enabled=!0,this.splashEntity.script.splashAnimation.animateIn())}.bind(this),2200)}.bind(this),400),this.app.on("skin:setSkin",this.onSetSkin,this),this.destroyed=!1,this.on("destroy",this.onDestroy.bind(this))},SplashCameraController.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("skin:setSkin",this.onSetSkin,this)},SplashCameraController.prototype.onSetSkin=function(t){this._skin=t},SplashCameraController.prototype.update=function(t){},SplashCameraController.prototype.nextLocation=function(){this._locationIndex++,this._locationIndex<this._locations.length&&this.setState(SplashCameraController.STATES.BEGIN_MOVE)},SplashCameraController.prototype.setState=function(t){this.onStateEnd(),this._state=t,this.onStateBegin()},SplashCameraController.prototype.onStateBegin=function(){switch(this._state){case SplashCameraController.STATES.BEGIN_MOVE:this._tweenA&&this._tweenA.stop(),this._tweenB&&this._tweenB.stop();var t=this._locations[this._locationIndex].getPosition(),e=(new pc.Vec3).copy(this.player.getPosition()),o=this.entity.tween(e).to({z:e.z+.1},.84,pc.BounceOut).on("update",function(){this.player.setPosition(e)},this).on("complete",function(){this._locationIndex===this._locations.length-1&&setTimeout(function(){this.scripts.script.fadeToblack.fadeOut()}.bind(this),1e3)},this),n=e.distance(t)/this.speed,i=this.entity.tween(e).to(t,n,pc.CubicInOut).on("update",function(){this.player.setPosition(e)},this).on("complete",function(){this.setState(SplashCameraController.STATES.END_MOVE)},this);o.chain(i),o.start(),this._tweenA=o,this._tweenB=i;var a=this.player.getEulerAngles(),s={rotation:a.y},r=Math.round(2*Math.random())-1,l=this.entity.tween(s).to({rotation:1*r},.62,pc.BackIn).on("update",function(){this.player.setEulerAngles(a.x,s.rotation,a.z)},this),h={rotation:1*r},p=this.entity.tween(h).to({rotation:0},.82,pc.BackOut).on("update",function(){this.player.setEulerAngles(a.x,h.rotation,a.z)},this);l.chain(p),l.start();break;case SplashCameraController.STATES.END_MOVE:this._locationIndex>=this._locations.length-1&&(P3.audio.stop("music"),P3.audio.stop("sound"),this.setState(SplashCameraController.STATES.TRACK_COMPLETE));break;case SplashCameraController.STATES.TRACK_COMPLETE:this.changeScenes(this.theme)}},SplashCameraController.prototype.onStateEnd=function(){switch(this._state){case SplashCameraController.STATES.BEGIN_MOVE:case SplashCameraController.STATES.END_MOVE:case SplashCameraController.STATES.TRACK_COMPLETE:}},SplashCameraController.prototype.changeScenes=function(t){localStorage.setItem("theme2",{790743:"halloween",816603:"evergreen",825017:"winter"}[t.toString()]),P3.audio.stop("music"),P3.audio.stop("sound"),setTimeout(function(){this.app._tweenManager.destroy();var e=this.app.root.findByName("Root");e&&e.destroy(),this.loadScene(t,function(){setTimeout(function(){this.app.fire("skin:setSkin",this._skin,!1),this.app.fire("skin:showProjectiles",!0)}.bind(this),500)}.bind(this))}.bind(this),100)},SplashCameraController.prototype.loadScene=function(t,e){var o=t+".json";this.app.loadSceneHierarchy(o,function(t,o){t?console.error(t):e(o)})},SplashCameraController.STATES={},SplashCameraController.STATES.NONE="none",SplashCameraController.STATES.BEGIN_MOVE="begin",SplashCameraController.STATES.END_MOVE="end",SplashCameraController.STATES.TRACK_COMPLETE="complete";var FadeToblack=pc.createScript("fadeToblack");FadeToblack.attributes.add("screen",{type:"entity",title:"Screen"}),FadeToblack.prototype.initialize=function(){this.app.on("fade:in",this.fadeIn,this),this.app.on("fade:out",this.fadeOut,this),this.on("destroy",this.onDestroy,this)},FadeToblack.prototype.onDestroy=function(){this.off("destroy",this.onDestroy,this),this.app.off("fade:in",this.fadeIn,this),this.app.off("fade:out",this.fadeOut,this)},FadeToblack.prototype.update=function(){},FadeToblack.prototype.fadeIn=function(){var t=this.screen.element;t&&(t.opacity=1,this.entity.tween(t).to({opacity:0},1,pc.CubicInOut).on("update",function(){this.screen.children[0].element.opacity=t.opacity},this).start())},FadeToblack.prototype.fadeOut=function(){common.canShoot=!1;var t=this.screen.element;t&&(t.opacity=0,this.entity.tween(t).to({opacity:1},1,pc.CubicInOut).on("update",function(){this.screen.children[0].element.opacity=t.opacity},this).start())};var Tombstone=pc.createScript("tombstone");Tombstone.attributes.add("view",{type:"entity",title:"View"}),Tombstone.attributes.add("collider",{type:"entity",title:"Collider"}),Tombstone.prototype.initialize=function(){this.collider.collision.on("collisionstart",this.onCollisionStart,this)},Tombstone.prototype.update=function(t){},Tombstone.prototype.animateDown=function(t){var o=this.view.getEulerAngles(),e={rotation:0};this.entity.setLocalEulerAngles(e.rotation,o.y,o.z),this.entity.parent.tween(e).to({rotation:-90},.16,pc.Linear).on("update",function(){this.entity.setLocalEulerAngles(e.rotation,o.y,o.z)},this).on("complete",function(){this.animateUp()},this).start()},Tombstone.prototype.animateUp=function(t){var o=this.view.getEulerAngles(),e={rotation:-90};this.entity.setLocalEulerAngles(e.rotation,o.y,o.z),this.entity.parent.tween(e).to({rotation:0},.42,pc.ElasticOut).delay(1).on("update",function(){this.entity.setLocalEulerAngles(e.rotation,o.y,o.z)},this).on("complete",function(){this.collider.enabled=!0},this).start()},Tombstone.prototype.onCollisionStart=function(){this.collider.enabled=!1,this.animateDown()};var CountdownUI=pc.createScript("countdownUI");CountdownUI.attributes.add("seconds",{type:"number",default:3,title:"Seconds"}),CountdownUI.attributes.add("outTween",{type:"string",default:"Linear",title:"Out Tween"}),CountdownUI.attributes.add("inTween",{type:"string",default:"Linear",title:"In Tween"}),CountdownUI.prototype.initialize=function(){this._text=this.entity.findByName("Text"),this._overlay=this.entity.findByName("Overlay"),this._number=this.seconds+1,this.app.on("countdown:start",this.animateIn,this)},CountdownUI.prototype.countdown=function(){return this.app.tween({}).to({},1,pc.Linear).repeat(this.seconds+1).on("loop",function(){this._number--,this.setNumber(),this.slideNumberIn().on("complete",function(){P3.utils.delay(.4,function(){this.slideNumberOut()},null,this)},this)},this).on("complete",function(){this.animateOut().on("complete",function(){common.canShoot=!0})},this).start()},CountdownUI.prototype.animateIn=function(){this._overlay.element&&(this._number=this.seconds+1,this._overlay.tween(this._overlay.element).to({opacity:.4},.5,pc.Linear).on("complete",function(){this.countdown()},this).start())},CountdownUI.prototype.setNumber=function(){this._text.element.text=this._number},CountdownUI.prototype.slideNumberIn=function(){return this._text.setLocalPosition(2e3,0,0),this._text.tween(this._text.getLocalPosition()).to({x:0},.3,pc[this.inTween]).start()},CountdownUI.prototype.slideNumberOut=function(){return this._text.tween(this._text.getLocalPosition()).to({x:-2e3},.3,pc[this.outTween]).start()},CountdownUI.prototype.animateOut=function(){return this._overlay.tween(this._overlay.element).to({opacity:0},.5,pc.Linear).start()},CountdownUI.prototype.update=function(t){};var SplashSpineController=pc.createScript("splashSpineController");SplashSpineController.prototype.initialize=function(){this._spines=this.entity.children,P3.utils.delay(.1,function(){this.start()},null,this)},SplashSpineController.prototype.start=function(){for(var t=0;t<this._spines.length;t++){var i=this._spines[t].script.spine;try{i.playAnimation(0,"menu",!0)}catch(t){i.playAnimation(0,"idle",!0)}i.entity.spine.spine.update(Math.random())}};var BonusRoundUI=pc.createScript("bonusRoundUI");BonusRoundUI.prototype.initialize=function(){},BonusRoundUI.prototype.start=function(t,e,n,o){var i=this.entity.findByName("Overlay"),c=this.entity.findByName("Text"),a=this.entity.findByName("Title");i.tween(i.element).to({opacity:0},.5,pc.Linear).delay(t).start(),a.tween(c.getLocalPosition()).to(new pc.Vec3(0,500,0),.3,pc.BackIn).delay(e).start(),c.tween(c.getLocalPosition()).to(new pc.Vec3(0,500,0),.3,pc.BackIn).delay(e).on("complete",function(){n&&n.call(o),this.onEnd(i,c,a)},this).start()},BonusRoundUI.prototype.onEnd=function(t,e,n){t.element.opacity=.5,n.setLocalPosition(new pc.Vec3(0,170,0)),e.setLocalPosition(pc.Vec3.ZERO),this.entity.enabled=!1};CameraShake=function(t,i){this.duration=parseInt(t),this.frequency=parseInt(i);var e=t/1e3*i;this.samples=[];for(var s=0;s<e;s++)this.samples.push(2*Math.random()-1);this.startTime=0,this.t=0,this.isShaking=!1},CameraShake.prototype.start=function(){this.startTime=(new Date).getTime(),this.t=0,this.isShaking=!0},CameraShake.prototype.update=function(t){this.t=(new Date).getTime()-this.startTime,this.t>this.duration&&(this.isShaking=!1)},CameraShake.prototype.amplitude=function(t){if(void 0===t){if(!this.isShaking)return 0;t=this.t}var i=t/1e3*this.frequency,e=Math.floor(i),s=e+1,a=this.decay(t);return(this.noise(e)+(i-e)*(this.noise(s)-this.noise(e)))*a},CameraShake.prototype.noise=function(t){return t>=this.samples.length?0:this.samples[t]},CameraShake.prototype.decay=function(t){return t>=this.duration?0:(this.duration-t)/this.duration};var EnvironmentHittable=pc.createScript("environmentHittable");EnvironmentHittable.attributes.add("animation",{title:"Hit Animation",type:"string",enum:[{Ping:"Ping"},{Scale:"Scale"}],default:"Scale"}),EnvironmentHittable.prototype.initialize=function(){this._animating=!1,this._hits=0,this.entity.collision.on("collisionstart",this.onCollisionStart,this)},EnvironmentHittable.prototype.onCollisionStart=function(t){"Projectile"===t.other.name&&(this._hits++,this["animate"+this.animation]())},EnvironmentHittable.prototype.animatePing=function(){if(!this._animating){this._animating=!0;var t=this.entity.parent;t.tween(t.getLocalRotation()).rotate({x:-5},.15,pc.QuarticOut).yoyo(!0).repeat(2).on("complete",this.onAnimationComplete,this).start()}},EnvironmentHittable.prototype.animateScale=function(){if(!this._animating){this._animating=!0;var t=this.entity.parent,i=t.getLocalScale().clone().scale(1.025);t.tween(t.getLocalScale()).to(i,.15,pc.QuarticOut).yoyo(!0).repeat(2).on("complete",this.onAnimationComplete,this).start()}},EnvironmentHittable.prototype.onAnimationComplete=function(){this._animating=!1},EnvironmentHittable.prototype.update=function(t){};var SetBatchGroup=pc.createScript("setBatchGroup");SetBatchGroup.attributes.add("batchGroupName",{type:"string"}),SetBatchGroup.prototype.initialize=function(){this.batchGroupName&&(this.entity.sprite.batchGroupId=this.app.batcher.getGroupByName(this.batchGroupName).id)};var HomeButton=pc.createScript("homeButton");HomeButton.prototype.initialize=function(){},HomeButton.prototype.update=function(t){};var WeaponController=pc.createScript("weaponController");WeaponController.attributes.add("cameraEntity",{type:"entity"}),WeaponController.attributes.add("interactionElement",{type:"entity"}),WeaponController.attributes.add("projectileEntity",{type:"entity"}),WeaponController.attributes.add("projectileSpeed",{type:"number",default:20}),WeaponController.attributes.add("launchSounds",{type:"asset",assetType:"audio",array:!0}),WeaponController.prototype.initialize=function(){this._carts=this.app.root.findByTag("cart");for(var t=null,o=0;o<this._carts.length;o++)if("Generic"===this._carts[o].name){t=this._carts[o];break}this._model=t?t.findByName("Launcher"):this.entity.parent.findByPath("BCG-vehicle/Launcher"),this._modelBaseRotation=this._model.getLocalEulerAngles().clone(),this._modelRotation=new pc.Vec3,this.app.touch?(this.interactionElement.element.on("click",this.onTouchStart,this),this.app.touch.on(pc.EVENT_TOUCHMOVE,this.onTouchMove,this)):(this.interactionElement.element.on("click",this.onMouseDown,this),this.app.mouse.on(pc.EVENT_MOUSEMOVE,this.onMouseMove,this)),this._activeCam=this.cameraEntity,this._state=!1,this.firePoint=this.entity.forward.clone(),this.app.on("skin:onSkinChange",this.onSkinChange,this),this.destroyed=!1,this.on("destroy",this.onDestroy.bind(this))},WeaponController.prototype.onDestroy=function(){this.off("destroy",this.onDestroy),this.destroyed=!0,this.app.off("skin:onSkinChange",this.onSkinChange,this),this.app.touch?(this.interactionElement.element&&this.interactionElement.element.off("click",this.onTouchStart,this),this.app.touch.off(pc.EVENT_TOUCHMOVE,this.onTouchMove,this)):(this.interactionElement.element&&this.interactionElement.element.off("click",this.onMouseDown,this),this.app.mouse.off(pc.EVENT_MOUSEMOVE,this.onMouseMove,this))},WeaponController.prototype.onSkinChange=function(t){this._model=t.vehicle.findByName("Launcher"),this._modelBaseRotation=this._model.getLocalEulerAngles().clone()},WeaponController.prototype.onMouseDown=function(t){if(t.stopPropagation(),!this.destroyed&&common.canShoot){var o=this.raycast(t.x,t.y);o&&!o.entity.tags.has("projectile")&&this.fireProjectile(o)}},WeaponController.prototype.onMouseMove=function(t){if(!this.destroyed){var o=this.raycast(t.x,t.y);o&&!o.entity.tags.has("projectile")&&this.lookAtPoint(o)}},WeaponController.prototype.onTouchMove=function(t){if(!this.destroyed){if(1===t.touches.length){var o=this.raycast(t.touches[0].x,t.touches[0].y);if(!o||o.entity.tags.has("projectile"))return void t.event.preventDefault();this.lookAtPoint(o)}t.event.preventDefault()}},WeaponController.prototype.onTouchStart=function(t){if(t.stopPropagation(),!this.destroyed&&common.canShoot){var o=this.raycast(t.x,t.y);o&&!o.entity.tags.has("projectile")?(this.lookAtPoint(o),this.fireProjectile(o),t.event.preventDefault()):t.event.preventDefault()}},WeaponController.prototype.fireProjectile=function(t){if(t&&common.canShoot){this.app.fire("skin:setProjectile","random");var o=this.firePoint;this.firePoint.getPosition&&(o=this.firePoint.getPosition()),o=this.entity.forward,P3.audio.playSound(P3.utils.selectRandom(this.launchSounds).id,{autoPlay:!0,loop:!1});var e=.5*Math.random(),i=this.projectileEntity.clone();i.enabled=!0,i.rotate(pc.math.random(0,360)),i.rigidbody.enabled=!0,i.rigidbody.teleport(this.entity.getPosition().add(o.clone().scale(1.2))),i.lookAt(t.point),i.rigidbody.syncEntityToBody(),i.rigidbody.applyTorqueImpulse(0,0,e),i.rigidbody.applyImpulse(o.clone().scale(this.projectileSpeed)),this.app.root.findByName("Root").addChild(i)}},WeaponController.prototype.lookAtPoint=function(t){t&&!this.destroyed&&(t=t.point,this.entity.lookAt(t),this._model.lookAt(t),this._modelRotation.copy(this._model.getLocalEulerAngles()),this._model.setLocalEulerAngles(0,0,0),this._model.rotateLocal(this._modelBaseRotation.x,0,0),this._model.rotateLocal(0,this._modelRotation.y,0))},WeaponController.prototype.raycast=function(t,o){if(common.paused||this.destroyed)return null;var e=this._activeCam.getPosition(),i=this._activeCam.camera.screenToWorld(t,o,this._activeCam.camera.farClip);return this.app.systems.rigidbody.raycastFirst(e,i)},WeaponController.prototype.update=function(t){};function LineMapper(t){this.points=t}LineMapper.prototype.value=function(t){t=pc.math.clamp(t,0,1);for(var i=0;i<this.points.length;i++)if(this.points[i][0]>=t){var n=this.points[i];if(i>0){var p=this.points[i-1],r=(t-p[0])/(n[0]-p[0]);return p[1]+(n[1]-p[1])*r}return n[1]}};var StartUI=pc.createScript("startUI");StartUI.prototype.initialize=function(){},StartUI.prototype.start=function(t,e,i,n){P3.utils.shouldPlayVO()&&P3.audio.playVO("vo_hold_tight_03.mp3");var a=this.entity.findByName("Overlay"),o=this.entity.findByName("Text");a.tween(a.element).to({opacity:0},.5,pc.Linear).delay(t).start(),o.tween(o.getLocalPosition()).to(new pc.Vec3(0,500,0),.3,pc.BackIn).delay(e).on("complete",function(){i&&i.call(n),this.onEnd(a,o)},this).start()},StartUI.prototype.onEnd=function(t,e){t.element.opacity=.5,e.setLocalPosition(pc.Vec3.ZERO),this.entity.enabled=!1};var Bat=pc.createScript("bat");Bat.attributes.add("view",{type:"entity",title:"View"}),Bat.attributes.add("animateDelay",{type:"number",title:"Animate In Delay"}),Bat.prototype.initialize=function(){this._idleA=null,this._idleB=null,this._tweenA=null,this._tweenB=null,this._tweenC=null,this._tweening=!1,this._savedPosition=new pc.Vec3,this.view.children[1].collision.on("collisionstart",this.onCollisionStart,this),this.animateIn()},Bat.prototype.update=function(t){},Bat.prototype.animateIn=function(){var t=this.view.getLocalPosition();t=new pc.Vec3(t.x,t.y,t.z),this.view.setLocalPosition(new pc.Vec3(t.x,t.y+7.5,t.z));var i=this.animateDelay?this.animateDelay:3*Math.random();this.view.tween(this.view.getLocalPosition()).to(t,.85,pc.ElasticOut).delay(i).on("complete",function(){this.animateIdle()},this).start();var e=this.view.getLocalEulerAngles(),n=Math.random()<.5?-30:30;this.view.setLocalEulerAngles(new pc.Vec3(0,0,n));var o={rotation:n};this.view.tween(o).to({rotation:0},.65,pc.BackOut).delay(i).on("update",function(){this.view.setLocalEulerAngles(e.x,e.y,o.rotation)},this).start()},Bat.prototype.animateIdle=function(){var t=this.view.getLocalPosition();t=new pc.Vec3(t.x,t.y+.1,t.z);var i=this.view.tween(this.view.getLocalPosition()).to({y:t.y},1+Math.random(),pc.CubicInOut).yoyo(!0).loop(!0).repeat(1/0).start(),e=Math.random()<.5?.1:-.1;t=this.view.getLocalPosition(),t=new pc.Vec3(t.x+e,t.y,t.z);var n=this.view.tween(this.view.getLocalPosition()).to({x:t.x},1+Math.random(),pc.CubicInOut).delay(Math.random()).yoyo(!0).loop(!0).repeat(1/0).start();this._idleA=i,this._idleB=n},Bat.prototype.onAnimationComplete=function(){this._tweening=!1,this._idleA&&this._idleA.resume(),this._idleB&&this._idleB.resume()},Bat.prototype.onCollisionStart=function(){if(!this._tweening){this._tweening=!0,this._idleA&&this._idleA.pause(),this._idleB&&this._idleB.pause();var t=this.view.getLocalPosition().y,i=this.view.tween(this.view.getLocalPosition()).to({y:12},.5,pc.BackIn),e=this.view.tween(this.view.getLocalPosition()).to({y:t},2,pc.BounceOut).delay(1).on("complete",this.onAnimationComplete,this);i.chain(e),i.start(),this._tweenA=i,this._tweenB=e}};var BubbleSpawnManager=pc.createScript("bubbleSpawnManager");BubbleSpawnManager.attributes.add("iconAssets_bigcitygreens",{type:"entity",array:!0,title:"Balloons (bigcitygreens)"}),BubbleSpawnManager.attributes.add("iconAssets_descendants",{type:"entity",array:!0,title:"Balloons (descendants)"}),BubbleSpawnManager.attributes.add("iconAssets_justrollwithit",{type:"entity",array:!0,title:"Balloons (justrollwithit)"}),BubbleSpawnManager.attributes.add("iconAssets_vampirina",{type:"entity",array:!0,title:"Balloons (vampirina)"}),BubbleSpawnManager.attributes.add("iconAssets_mmua",{type:"entity",array:!0,title:"Balloons (mmua)"}),BubbleSpawnManager.attributes.add("iconAssets_gabby",{type:"entity",array:!0,title:"Balloons (gabby)"}),BubbleSpawnManager.attributes.add("iconAssets_muppets",{type:"entity",array:!0,title:"Balloons (muppets)"}),BubbleSpawnManager.attributes.add("iconAssets_tots",{type:"entity",array:!0,title:"Balloons (tots)"}),BubbleSpawnManager.attributes.add("iconAssets_zombies",{type:"entity",array:!0,title:"Balloons (zombies)"}),BubbleSpawnManager.attributes.add("iconAssets_mira",{type:"entity",array:!0,title:"Balloons (mira)"}),BubbleSpawnManager.attributes.add("iconAssets_udm",{type:"entity",array:!0,title:"Balloons (udm)"}),BubbleSpawnManager.attributes.add("spritesAssets_bigcitygreens",{type:"asset",array:!0,title:"Sprites (bigcitygreens)"}),BubbleSpawnManager.attributes.add("spritesAssets_descendants",{type:"asset",array:!0,title:"Sprites (descendants)"}),BubbleSpawnManager.attributes.add("spritesAssets_justrollwithit",{type:"asset",array:!0,title:"Sprites (justrollwithit)"}),BubbleSpawnManager.attributes.add("spritesAssets_vampirina",{type:"asset",array:!0,title:"Sprites (vampirina)"}),BubbleSpawnManager.attributes.add("spritesAssets_mmua",{type:"asset",array:!0,title:"Sprites (mmua)"}),BubbleSpawnManager.attributes.add("spritesAssets_gabby",{type:"asset",array:!0,title:"Sprites (gabby)"}),BubbleSpawnManager.attributes.add("spritesAssets_muppets",{type:"asset",array:!0,title:"Sprites (muppets)"}),BubbleSpawnManager.attributes.add("spritesAssets_tots",{type:"asset",array:!0,title:"Sprites (tots)"}),BubbleSpawnManager.attributes.add("spritesAssets_zombies",{type:"asset",array:!0,title:"Sprites (zombies)"}),BubbleSpawnManager.attributes.add("spritesAssets_mira",{type:"asset",array:!0,title:"Sprites (mira)"}),BubbleSpawnManager.attributes.add("spritesAssets_udm",{type:"asset",array:!0,title:"Sprites (udm)"}),BubbleSpawnManager.attributes.add("playArea",{type:"entity",title:"Play Area"}),BubbleSpawnManager.attributes.add("screenHeader",{type:"entity",title:"Right Screen Header"}),BubbleSpawnManager.attributes.add("easyNumber",{type:"number",default:10,title:"Easy Number of Targets"}),BubbleSpawnManager.attributes.add("mediumNumber",{type:"number",default:20,title:"Medium Number of Targets"}),BubbleSpawnManager.attributes.add("hardNumber",{type:"number",default:30,title:"Hard Number of Targets"}),BubbleSpawnManager.attributes.add("gameTime",{type:"number",default:20,title:"Game Time"}),BubbleSpawnManager.attributes.add("targetSprite",{type:"entity",title:"Target Sprite"}),BubbleSpawnManager.attributes.add("targetBG",{type:"entity",title:"Target BG"}),BubbleSpawnManager.attributes.add("popParticles",{type:"entity",title:"Pop Particles"}),BubbleSpawnManager.attributes.add("badHitEmitter",{type:"entity",title:"Bad Hit Emitter"}),BubbleSpawnManager.attributes.add("charactersPerSpawn",{type:"number",default:1,title:"Characters per spawn"}),BubbleSpawnManager.attributes.add("characterDelay",{type:"number",default:5,title:"Delay between Characters (s)"}),BubbleSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity",array:!0,title:"Character Prefabs (bigcitygreens)"}),BubbleSpawnManager.attributes.add("prefabs_descendants",{type:"entity",array:!0,title:"Character Prefabs (descendants)"}),BubbleSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity",array:!0,title:"Character Prefabs (jrwi)"}),BubbleSpawnManager.attributes.add("prefabs_vampirina",{type:"entity",array:!0,title:"Character Prefabs (vampirina)"}),BubbleSpawnManager.attributes.add("prefabs_mmua",{type:"entity",array:!0,title:"Character Prefabs (mmua)"}),BubbleSpawnManager.attributes.add("prefabs_gabby",{type:"entity",array:!0,title:"Character Prefabs (gabby)"}),BubbleSpawnManager.attributes.add("prefabs_muppets",{type:"entity",array:!0,title:"Character Prefabs (muppets)"}),BubbleSpawnManager.attributes.add("prefabs_tots",{type:"entity",array:!0,title:"Character Prefabs (tots)"}),BubbleSpawnManager.attributes.add("prefabs_zombies",{type:"entity",array:!0,title:"Character Prefabs (zombies)"}),BubbleSpawnManager.attributes.add("prefabs_mira",{type:"entity",array:!0,title:"Character Prefabs (mira)"}),BubbleSpawnManager.attributes.add("prefabs_udm",{type:"entity",array:!0,title:"Character Prefabs (udm)"}),BubbleSpawnManager.prototype.initialize=function(){console.log("[BubbleSpawnManager] Init"),common.minigame="bubble",this._canUpdate=!1,this._targets=[],this._rails=[],this._curves=[],this._spawnerTweens=[],this._extraTargets=[],this._characterSpawnIndex=0,this._hits=0,this._timeStart=0,this._target=0,this._numberOfTargets=Math.ceil(.6*this[common.difficulty+"Number"]),this._currentCharacters=[],this._currentPopup=null,this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.on("disable",this.onDisable,this),this.on("enable",this.onEnable,this),this.app.fire("manager:setGameData",{timed:!0,time:this.gameTime}),"mmua"!==common.skin&&"vampirina"!==common.skin||(this.easyNumber=7,this.mediumNumber=7,this.hardNumber=7,this._numberOfTargets=4),this._layerPositions=this.setupScene(),this.destroyed=!1,this.on("destroy",this.onDestroy,this)},BubbleSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},BubbleSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this);for(var t=this._targets.flat(),e=0;e<t.length;e++)t[e].destroy();for(var a=0;a<this._extraTargets.length;a++)this._extraTargets[a].destroy();this._targets=[[],[],[],[]];for(var r=0;r<this._spawnerTweens.length;r++)this._spawnerTweens[r].stop();this._spawnerTweens.length=0,this._canUpdate=!1},BubbleSpawnManager.prototype.onEnable=function(){this.app.fire("manager:setGameData",{timed:!1,time:this.gameTime}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this._layerPositions=this.setupScene()},BubbleSpawnManager.prototype.setupScene=function(){for(var t=this.entity.findByName("Environment").findByTag("layer"),e=[],a=0;a<t.length;a++){var r=t[a].getLocalPosition();e.push(r.y),t[a].setLocalPosition(r.x,-25,r.z)}return e},BubbleSpawnManager.prototype.unfoldScene=function(t){this._skin=t;var e=this.entity.findByName("Environment").findByTag("layer");this._rails=this.entity.findByPath("Environment/Paths").children;for(var a=0;a<this._layerPositions.length;a++){var r=this._layerPositions[a],i=e[a];tweenlayer.call(this,i,r,a,this)}function tweenlayer(t,e,a,r){t.tween(t.getLocalPosition()).to({y:e},1,pc.QuinticOut).delay(.1*a).on("complete",function(){a>=r._layerPositions.length-1&&r.onUnfoldComplete()},r).start()}},BubbleSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this.entity.findByName("Environment").findByTag("collider"),e=0;e<t.length;e++)t[e].rigidbody.syncEntityToBody();this.startTargets()},BubbleSpawnManager.prototype.createCurves=function(){for(var t=0;t<this._rails.length;t++){for(var e=this._rails[t],a=e.script.rail,r=e.findByTag("curve"),i=e.findByName("CurveStart"),s=e.findByName("CurveEnd").getLocalPosition().x-i.getLocalPosition().x,n=[],p=[],o=0;o<r.length;o++){var l=r[o].getLocalPosition(),h=1/(s/(l.x-i.getLocalPosition().x));n.push(h,l.y),p.push(h,l.x)}var b=new pc.Curve(p);b.type=pc[a.interpolation];var c=new pc.Curve(n);c.type=pc[a.interpolation],this._curves.push([b,c])}},BubbleSpawnManager.prototype.updateTargetCurve=function(t,e,a,r,i,s,n,p,o){this._rails[e].script.rail;var l=this._curves[e][0].value(a.time),h=this._curves[e][1].value(a.time);t.setLocalPosition(l,h,0)},BubbleSpawnManager.prototype.startTargets=function(){this["prefabs_"+this._skin]=P3.utils.shuffleArray(this["prefabs_"+this._skin]),this._rails=this.entity.findByPath("Environment/Paths").children,this._target=0,this.createTargets(),this.createCurves(),this.screenHeader.element.text="TARGET",this.targetSprite.element.spriteAsset=this["spritesAssets_"+this._skin][this._target].id,this.targetSprite.enabled=!0,this.targetBG.enabled=!0,this.screenHeader.enabled=!0;var t=this.app.tween({}).to({},this.characterDelay,pc.Linear).loop(!0).on("loop",function(){for(var t=0;t<this.charactersPerSpawn;t++)this.createRandomCharacter(.5*t)},this).start();this._spawnerTweens.push(t);var e=0,a=this.app.tween({}).to({},1,pc.Linear).repeat(4).on("loop",function(){var t=this["prefabs_"+this._skin][e].clone(),a=t.children[0].script.target;t.enabled=!0,a.setUp();var r=a.playAnimation(0,"popup",!1);P3.utils.delay(r.animation.duration,function(){a.playAnimation(0,"idle",!0)},this),this.entity.findByPath("Environment/character_spots").children[e].addChild(t),this._extraTargets.push(t),e++},this).start();this._spawnerTweens.push(a);var r=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(r),this._timeStart=Date.now(),this._canUpdate=!0},BubbleSpawnManager.prototype.createRandomCurve=function(t){for(var e=this.playArea.children[0].getLocalPosition(),a=this.playArea.children[3].getLocalPosition(),r=[],i=[],s=0;s<=t;s++){var n=pc.math.random(e.x,a.x),p=pc.math.random(e.y,a.y),o=s*(1/t);r.push(o,n),i.push(o,p)}var l=new pc.Curve(r);l.type=pc.CURVE_CATMULL;var h=new pc.Curve(i);return h.type=pc.CURVE_CATMULL,[l,h]},BubbleSpawnManager.prototype.createTargets=function(){for(var t=[.644,.966,1.2],e=[],a=0;a<this["iconAssets_"+this._skin].length;a++)a!=this._target&&e.push(a);for(a=0;a<this[common.difficulty+"Number"];a++){var r=a<this._numberOfTargets?this._target:e[Math.floor(Math.random()*e.length)],i=this["iconAssets_"+this._skin][r].clone();i.enabled=!0,i.guid=pc.guid.create(),i.curves=this.createRandomCurve(pc.math.random(5,10)),this.playArea.addChild(i),this._targets.push(i),i.type=r;var s=i.curves[0].value(0),n=i.curves[1].value(0);i.setLocalPosition(s,n,.05*a),i.children[0].script.target.setUp();var p=Math.random(),o=0;p>=.9?(o=t[2],i.health=5):p>=.35?(o=t[1],i.health=3):(o=t[0],i.health=1),i.health=1,i.value=i.health,i.setLocalScale(o,o,o),tweenTarget.call(this,i,this)}function tweenTarget(t,e){var a={t:0},r=t.getLocalPosition().z,i=e.app.tween(a).to({t:1},this.gameTime+5,pc.Linear).on("update",function(){var e=t.curves[0].value(a.t),i=t.curves[1].value(a.t);t.setLocalPosition(e,i,r)},e).start();t.moveTween=i}},BubbleSpawnManager.prototype.onTargetHit=function(t,e){if(this._canUpdate)if(t._spine){if(t.animating)return void e.destroy();this.app.fire("score:addMissed",1,"bubble"),t.animating=!0,e.destroy(),t.boing();var a=t.playAnimation(0,"hit",!1);P3.utils.delay(a.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else{var r=t.entity.parent;r.health--,t.hit=!1,r.type===this._target?(this.app.fire("score:addScore",100,"bubble"),this.app.fire("score:addHit",1,"bubble"),e.script.targetScore.setText("+100",new pc.Color(1,1,1,1))):(this.app.fire("score:addScore",-100,"bubble"),this.app.fire("score:addMissed",1,"bubble"),e.script.targetScore.setText("-100",new pc.Color(1,0,0,1))),e.script.targetScore.animate(),r.health<=0&&(function playParticles(e){var a=e.clone();a.setPosition(t.entity.parent.getPosition()),a.enabled=!0,a.particlesystem.reset(),a.particlesystem.play(),P3.utils.delay(a.particlesystem.lifetime,function(){a.particlesystem.reset(),a.particlesystem.stop(),a.enabled=!1,a.destroy()},null,this)}.call(this,this.popParticles),r.moveTween.stop(),r.destroy(),this._targets.splice(this._targets.indexOf(r),1),r.type===this._target&&(this._hits++,this._hits>=this._numberOfTargets&&this.onAllTargetsHit()))}},BubbleSpawnManager.prototype.onAllTargetsHit=function(){this.stopAll();var t=Math.ceil((Date.now()-this._timeStart)/10);t=Math.max(0,t),this.app.fire("score:addScore",t,"bubble"),this.app.fire("manager:onMinigameComplete")},BubbleSpawnManager.prototype.stopAll=function(){this._canUpdate=!1,this.screenHeader.enabled=!1,this.targetSprite.enabled=!1,this.targetBG.enabled=!1;for(var t=0;t<this._targets.length;t++)this._targets[t].moveTween.stop(),popBalloon.call(this,t,this);function popBalloon(t,e){e.app.tween({}).to({},1,pc.Linear).on("complete",function(){e._targets[t].destroy(),t===e._targets.length-1&&(e.targetSprite.enabled=!1)},e).delay(.1*t).start()}},BubbleSpawnManager.prototype.createRandomCharacter=function(t){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var e=Math.random()>.5?BubbleSpawnManager.SPAWN_TYPES.RAILS_L:BubbleSpawnManager.SPAWN_TYPES.RAILS_R,a=Math.floor(pc.math.random(0,this._rails.length)),r=this._rails[a],i=r.findByName("CurveStart").getLocalPosition().clone(),s=this["prefabs_"+this._skin],n=s[this._characterSpawnIndex].clone();n.setLocalPosition(i),n.enabled=!0,n.index=this._characterSpawnIndex,r.addChild(n),n.children[0].script.target.setDown(),n.children[0].script.target.flipUp(),this._extraTargets.push(n),this._currentCharacters.push(this._characterSpawnIndex);var p=n.getLocalScale().x/3;n.setLocalScale(p,p,p);var o=n.find("name","spine");if(o.length>0){var l=o[0].script.spine;l._skeleton.setSkinByName(common.theme),l.playAnimation(0,"move",!0)}this.characterMoveTween(n,a,e,t),this._characterSpawnIndex++,this._characterSpawnIndex>=s.length&&(this._characterSpawnIndex=0)}},BubbleSpawnManager.prototype.characterMoveTween=function(t,e,a,r){var i=a===BubbleSpawnManager.SPAWN_TYPES.RAILS_L?1:0,s=a===BubbleSpawnManager.SPAWN_TYPES.RAILS_L?0:1,n=a===BubbleSpawnManager.SPAWN_TYPES.RAILS_L?-1:1,p=new pc.Vec2,o=new pc.Vec2,l=new pc.Vec2,h=new pc.Vec2,b=new pc.Vec2,c=this._rails[e].script.rail;t.children[0].script.target.rail=c,t.enabled=!1;var u={time:i},d=new pc.Tween(u,pc.app._tweenManager).to({time:s},c.speed,pc[c.easing]).on("update",function(){t.enabled=!0,this.updateTargetCurve(t,e,u,n,p,o,l,h,b)},this).on("complete",function(){t.destroy(),this._extraTargets.splice(this._extraTargets.indexOf(t),1),this._currentCharacters.splice(this._currentCharacters.indexOf(t.index),1)},this).delay(r).start();t.moveTween=d},BubbleSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),e=t.getLocalPosition();e.x=Math.random()>.5?e.x:-e.x,t.setLocalPosition(e),this._currentPopup=t.script.appearSpine;var a=this["prefabs_"+this._skin][this._characterSpawnIndex],r=a.findByName("spine");this._currentPopup.createSpine(r,"TargetMira_Mira"===a.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].length&&(this._characterSpawnIndex=0)}},BubbleSpawnManager.SPAWN_TYPES={RAILS_L:1,RAILS_R:2};var BuildSpawnManager=pc.createScript("buildSpawnManager");BuildSpawnManager.attributes.add("targetPrefabs_bigcitygreens",{type:"entity",array:!0,title:"Target (bigcitygreens)"}),BuildSpawnManager.attributes.add("targetPrefabs_descendants",{type:"entity",array:!0,title:"Target (descendants)"}),BuildSpawnManager.attributes.add("targetPrefabs_justrollwithit",{type:"entity",array:!0,title:"Target (justrollwithit)"}),BuildSpawnManager.attributes.add("targetPrefabs_vampirina",{type:"entity",array:!0,title:"Target (vampirina)"}),BuildSpawnManager.attributes.add("targetPrefabs_mmua",{type:"entity",array:!0,title:"Target (mmua)"}),BuildSpawnManager.attributes.add("targetPrefabs_gabby",{type:"entity",array:!0,title:"Target (gabby)"}),BuildSpawnManager.attributes.add("targetPrefabs_muppets",{type:"entity",array:!0,title:"Target (muppets)"}),BuildSpawnManager.attributes.add("targetPrefabs_tots",{type:"entity",array:!0,title:"Target (tots)"}),BuildSpawnManager.attributes.add("targetPrefabs_zombies",{type:"entity",array:!0,title:"Target (zombies)"}),BuildSpawnManager.attributes.add("targetPrefabs_mira",{type:"entity",array:!0,title:"Target (mira)"}),BuildSpawnManager.attributes.add("targetPrefabs_udm",{type:"entity",array:!0,title:"Target (udm)"}),BuildSpawnManager.attributes.add("screenHeader",{type:"entity",title:"Right Screen Header"}),BuildSpawnManager.attributes.add("screenValue",{type:"entity",title:"Right Screen Value"}),BuildSpawnManager.attributes.add("sparkleTrail",{type:"entity",title:"Sparkle Trail"}),BuildSpawnManager.attributes.add("maxSteps",{type:"number",title:"Max Steps"}),BuildSpawnManager.attributes.add("maxScale",{type:"number",title:"Max Scale"}),BuildSpawnManager.attributes.add("easySpeed",{type:"number",default:5,title:"Easy Target move speed"}),BuildSpawnManager.attributes.add("mediumSpeed",{type:"number",default:4,title:"Medium Target move speed"}),BuildSpawnManager.attributes.add("hardSpeed",{type:"number",default:2.5,title:"Hard Target move speed"}),BuildSpawnManager.attributes.add("bonusUI",{type:"entity",title:"Bonus UI"}),BuildSpawnManager.attributes.add("badHitEmitter",{type:"entity",title:"Bad Hit Emitter"}),BuildSpawnManager.attributes.add("goodHitEmitter",{type:"entity",title:"Good Hit Emitter"}),BuildSpawnManager.attributes.add("charactersPerSpawn",{type:"number",default:1,title:"Characters per spawn"}),BuildSpawnManager.attributes.add("characterDelay",{type:"number",default:5,title:"Delay between Characters (s)"}),BuildSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity",array:!0,title:"Character Prefabs (bigcitygreens)"}),BuildSpawnManager.attributes.add("prefabs_descendants",{type:"entity",array:!0,title:"Character Prefabs (descendants)"}),BuildSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity",array:!0,title:"Character Prefabs (jrwi)"}),BuildSpawnManager.attributes.add("prefabs_vampirina",{type:"entity",array:!0,title:"Character Prefabs (vampirina)"}),BuildSpawnManager.attributes.add("prefabs_mmua",{type:"entity",array:!0,title:"Character Prefabs (mmua)"}),BuildSpawnManager.attributes.add("prefabs_gabby",{type:"entity",array:!0,title:"Character Prefabs (gabby)"}),BuildSpawnManager.attributes.add("prefabs_muppets",{type:"entity",array:!0,title:"Character Prefabs (muppets)"}),BuildSpawnManager.attributes.add("prefabs_tots",{type:"entity",array:!0,title:"Character Prefabs (tots)"}),BuildSpawnManager.attributes.add("prefabs_zombies",{type:"entity",array:!0,title:"Character Prefabs (zombies)"}),BuildSpawnManager.attributes.add("prefabs_mira",{type:"entity",array:!0,title:"Character Prefabs (mira)"}),BuildSpawnManager.attributes.add("prefabs_udm",{type:"entity",array:!0,title:"Character Prefabs (udm)"}),BuildSpawnManager.prototype.initialize=function(){console.log("[BuildSpawnManager] Init"),common.minigame="build",this._rails=[],this._popupPositions=[],this._targets=[],this._curves=[],this._extraTargets=[],this._spawnerTweens=[],this._characterSpawnIndex=0,this._currentCharacters=[],this._scaleTween=null,this._currentPopup=null,this._canUpdate=!1,this._activeData={entity:null,moveTween:null,speed:0,direction:0,railIndex:0},this._targetTimeout=20,this._bonusRoundActive=!1,this._guideEntity=null,this._hits=0,this._scaleStep=this.maxScale/this.maxSteps,this.app.fire("manager:setGameData",{timed:!1}),"mmua"!==common.skin&&"vampirina"!==common.skin||(this.easySpeed=12,this.mediumSpeed=12,this.hardSpeed=12),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.app.on("projectile:hit",this.onProjectileHit,this),this.on("disable",this.onDisable,this),this.on("enable",this.onEnable,this),this._layerPositions=this.setupScene(),this.createCurves(),this.destroyed=!1,this.on("destroy",this.onDestroy.bind(this))},BuildSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.app.off("projectile:hit",this.onProjectileHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},BuildSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.app.off("projectile:hit",this.onProjectileHit,this),this.pumpkinEntity.enabled=!1,this._guideEntity.enabled=!1,this.sparkleTrail.enabled=!1;for(var t=0;t<this._targets.length;t++)this._targets[t].entity.destroy();for(var e=0;e<this._extraTargets.length;e++)this._extraTargets[e].destroy();for(var a=0;a<this._spawnerTweens.length;a++)this._spawnerTweens[a].stop()},BuildSpawnManager.prototype.onEnable=function(){this.app.fire("manager:setGameData",{timed:!1}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.app.on("projectile:hit",this.onProjectileHit,this),this._layerPositions=this.setupScene()},BuildSpawnManager.prototype.setupScene=function(){var t=this.entity.findByName("Environment").findByTag("layer");this.pumpkinEntity=this.entity.findByName("Pumpkin Root"),this.pumpkinEntity.enabled=!0,this.pumpkinEntity.children[0].collision.on("collisionstart",this.onPumpkinHit,this),this._guideEntity=this.entity.findByName("Pumpkin-guide"),this._guideEntity.enabled=!0;for(var e=[],a=0;a<t.length;a++){var i=t[a].getLocalPosition();e.push(i.y),t[a].setLocalPosition(i.x,-35,i.z)}return e},BuildSpawnManager.prototype.unfoldScene=function(t){this._skin=t;for(var e=this.entity.findByName("Environment").findByTag("layer"),a=0;a<this._layerPositions.length;a++){var i=this._layerPositions[a],n=e[a];tweenlayer.call(this,n,i,a,this)}function tweenlayer(t,e,a,i){t.tween(t.getLocalPosition()).to({y:e},1,pc.QuinticOut).delay(.1*a).on("complete",function(){a>=i._layerPositions.length-1&&i.onUnfoldComplete()},i).start()}},BuildSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this.entity.findByName("Environment").findByTag("collider"),e=0;e<t.length;e++)t[e].rigidbody.syncEntityToBody();this.startTargets()},BuildSpawnManager.prototype.startTargets=function(){this["prefabs_"+this._skin]=P3.utils.shuffleArray(this["prefabs_"+this._skin]),this._rails=this.entity.findByPath("Environment/Paths").children,this._popupPositions=this.entity.findByPath("Environment/Popups").children,this._popupPositions.forEach(function(t){t.occupied=!1}),this.pumpkinEntity.findByName("Spine").script.spine.playAnimation(0,"grow3",!1),this.createCurves();var t=this.app.tween({}).to({},this.characterDelay,pc.Linear).loop(!0).on("loop",function(){for(var t=0;t<this.charactersPerSpawn;t++)this.createRandomCharacter(.5*t)},this).start();this._spawnerTweens.push(t);var e=0,a=this.app.tween({}).to({},1,pc.Linear).repeat(4).on("loop",function(){var t=this["prefabs_"+this._skin][e].clone(),a=t.children[0].script.target;t.enabled=!0,a.setUp();var i=a.playAnimation(0,"popup",!1);P3.utils.delay(i.animation.duration,function(){a.playAnimation(0,"idle",!0)},this),this.entity.findByPath("Environment/character_spots").children[e].addChild(t),this._extraTargets.push(t),e++},this).start();this._spawnerTweens.push(a);var i=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(i);for(var n=0;n<this._rails.length;n++)for(var r=0;r<3;r++)this.createTarget(n,r);this.screenHeader.element.text="Time Left",this._canUpdate=!0},BuildSpawnManager.prototype.createCurves=function(){for(var t=0;t<this._rails.length;t++){for(var e=this._rails[t],a=e.script.rail,i=e.findByTag("curve"),n=e.findByName("CurveStart"),r=e.findByName("CurveEnd").getLocalPosition().x-n.getLocalPosition().x,s=[],p=[],o=0;o<i.length;o++){var l=i[o].getLocalPosition(),h=1/(r/(l.x-n.getLocalPosition().x));s.push(h,l.y),p.push(h,l.x)}var c=new pc.Curve(p);c.type=pc[a.interpolation];var d=new pc.Curve(s);d.type=pc[a.interpolation],this._curves.push([c,d])}},BuildSpawnManager.prototype.createTarget=function(t,e){var a=this._rails[t],i=Math.random()>=.5?1:-1,n=a.findByTag(i>0?"curveStart":"curveEnd"),r=this["targetPrefabs_"+this._skin],s=r[Math.floor(Math.random()*r.length)].clone();if(s.enabled=!0,s.guid=pc.guid.create(),s.children[0].script.target.invincible=!0,s.setLocalPosition(n[0].getLocalPosition()),a.addChild(s),e%2==0){var p=this.sparkleTrail.clone();p.reparent(s),p.setLocalPosition(pc.Vec3.ZERO)}var o=s.find("name","spine");o.length>0&&o[0].script.spine.playAnimation(0,"idle",!0);var l=s.getLocalScale().x/3;s.setLocalScale(l,l,l);var h=Object.assign({},this._activeData);h.entity=s,h.direction=i,h.railIndex=t,h.speed=14,this._targets.push(h),this.moveTween(h,t,e)},BuildSpawnManager.prototype.moveTween=function(t,e,a){var i=t.direction<0?1:0,n=t.direction<0?0:1,r=t.direction,s=new pc.Vec2,p=new pc.Vec2,o=new pc.Vec2,l=new pc.Vec2,h=new pc.Vec2,c={time:i},d=common.difficulty;"mmua"!==common.skin&&"vampirina"!==common.skin||(d="easy");var u=new pc.Tween(c,pc.app._tweenManager).to({time:n},this[d+"Speed"],pc.Linear).on("update",function(){this.updateTargetCurve(t.entity,e,c,r,s,p,o,l,h)},this).on("complete",function(){this.regenerateTarget(t)},this).delay(a).start();t.moveTween=u},BuildSpawnManager.prototype.updateTargetCurve=function(t,e,a,i,n,r,s,p,o){this._rails[e].script.rail;var l=this._curves[e][0].value(a.time),h=this._curves[e][1].value(a.time);t.setLocalPosition(l,h,0)},BuildSpawnManager.prototype.regenerateTarget=function(t){this._popupPositions.forEach(function(t){t.occupied=!1});var e=-1*t.direction;t.direction=e,t.entity.children[0].script.target.setUp(),this.moveTween(t,t.railIndex,0)},BuildSpawnManager.prototype.onProjectileHit=function(t){if(this._canUpdate&&"Collision"!==t.other.name&&this._canUpdate){var e=new pc.Vec3(this._scaleStep,this._scaleStep,this._scaleStep).scale(.125),a=this.pumpkinEntity.getLocalScale().clone().sub(e);if(a.x<1.5)return;this._scaleTween&&this._scaleTween.stop(),this._scaleTween=this.pumpkinEntity.tween(this.pumpkinEntity.getLocalScale()).to(a,.1,pc.SineOut).start()}},BuildSpawnManager.prototype.onTargetHit=function(t,e){if(this._canUpdate&&!this._bonusRoundActive)if(t._spine){if(t.animating)return void e.destroy();t.animating=!0,e.destroy(),t.boing();var a=t.playAnimation(0,"hit",!1);P3.utils.delay(a.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else{var i=new pc.Vec3(this._scaleStep,this._scaleStep,this._scaleStep),n=this.pumpkinEntity.getLocalScale().clone();n.x<this.maxScale&&(n.add(i),i.z=0,this.pumpkinEntity.children[0].collision.halfExtents.add(i),this.pumpkinEntity.children[0].collision.fire("set_halfExtents"),this._scaleTween&&this._scaleTween.stop(),this._scaleTween=this.pumpkinEntity.tween(this.pumpkinEntity.getLocalScale()).to(n,.1,pc.SineOut).start()),this.app.fire("score:addScore",100,"build"),this.app.fire("score:addHit",1,"build"),e&&(e.enabled=!0,e.script.targetScore.setText("+100",new pc.Color(1,1,1,1)),e.script.targetScore.animate()),t.flipped||(t.flipDown(),t.flipped=!0,P3.utils.delay(1,function(){t.flipUp(),t.flipped=!1},null,this)),this._hits++,this._hits>=this.maxSteps&&this.startBonusRound()}},BuildSpawnManager.prototype.onPumpkinHit=function(t){if(this._bonusRoundActive&&this._canUpdate&&"Projectile"===t.other.name){var e=new pc.Vec3(this._scaleStep,this._scaleStep,this._scaleStep),a=this.pumpkinEntity.getLocalScale().clone();if(a.x<this.maxScale){a.add(e),this._scaleTween&&this._scaleTween.stop(),this._scaleTween=this.pumpkinEntity.tween(this.pumpkinEntity.getLocalScale()).to(a,.1,pc.SineOut).start(),e.z=0;var i=this.pumpkinEntity.children[0].collision.halfExtents.clone().add(e.scale(1.1));this.pumpkinEntity.children[0].collision.halfExtents=i}!function playParticles(t,e){var a=e.clone();a.setPosition(t),a.enabled=!0,a.particlesystem.reset(),a.particlesystem.play(),P3.utils.delay(a.particlesystem.lifetime,function(){a.particlesystem.reset(),a.particlesystem.stop(),a.enabled=!1,a.destroy()},null,this)}(t.contacts[0].point,this.goodHitEmitter),this.app.fire("score:addScore",100,"build"),this.app.fire("score:addHit",1,"build")}},BuildSpawnManager.prototype.startBonusRound=function(){if(this._canUpdate){this.pumpkinEntity.findByName("Spine").script.spine.playAnimation(0,"grow1",!1),this._bonusRoundActive=!0;for(var t=0;t<this._targets.length;t++){var e=this._targets[t];e.moveTween.stop(),e.entity.children[0].script.target.twirl(),destroy(e.entity,t)}var a={t:10},i=this.app.tween(a).to({t:0},10,pc.Linear).on("update",function(){this.screenValue.element.text=Math.floor(a.t).toString()},this).on("complete",function(){this.stopAll()},this);this.bonusUI.enabled=!0,this.bonusUI.script.bonusRoundUI.start(2,2.5,function(){i.start()},this)}function destroy(t,e){setTimeout(function(){t.destroy()},1e3+50*e)}},BuildSpawnManager.prototype.stopAll=function(){this._canUpdate=!1,this.pumpkinEntity.findByName("Spine").script.spine.playAnimation(0,"grow2",!0);for(var t=0;t<this._targets.length;t++)this._targets[t].moveTween.stop();var e=Math.round(200*this._targetTimeout);this.app.fire("score:addScore",e,"build"),P3.utils.delay(2,function(){this.app.fire("manager:onMinigameComplete")},null,this)},BuildSpawnManager.prototype.update=function(t){this._canUpdate&&(this._targetTimeout-=t,this._targetTimeout=Math.max(0,this._targetTimeout),this.screenValue.element.text=Math.floor(this._targetTimeout).toString(),this._targetTimeout<=0&&!this._bonusRoundActive&&this.startBonusRound())},BuildSpawnManager.prototype.createRandomCharacter=function(t){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var e=Math.random()>.5?BuildSpawnManager.SPAWN_TYPES.RAILS_L:BuildSpawnManager.SPAWN_TYPES.RAILS_R,a=Math.floor(pc.math.random(0,this._rails.length)),i=this._rails[a],n=i.findByName("CurveStart").getLocalPosition().clone(),r=this["prefabs_"+this._skin],s=r[this._characterSpawnIndex].clone();s.setLocalPosition(n),s.enabled=!0,s.index=this._characterSpawnIndex,i.addChild(s),s.children[0].script.target.setDown(),s.children[0].script.target.flipUp(),this._extraTargets.push(s),this._currentCharacters.push(this._characterSpawnIndex);var p=s.getLocalScale().x/3;s.setLocalScale(p,p,p);var o=s.find("name","spine");if(o.length>0){var l=o[0].script.spine;l._skeleton.setSkinByName(common.theme),l.playAnimation(0,"move",!0)}this.characterMoveTween(s,a,e,t),this._characterSpawnIndex++,this._characterSpawnIndex>=r.length&&(this._characterSpawnIndex=0)}},BuildSpawnManager.prototype.characterMoveTween=function(t,e,a,i){var n=a===BuildSpawnManager.SPAWN_TYPES.RAILS_L?1:0,r=a===BuildSpawnManager.SPAWN_TYPES.RAILS_L?0:1,s=a===BuildSpawnManager.SPAWN_TYPES.RAILS_L?-1:1,p=new pc.Vec2,o=new pc.Vec2,l=new pc.Vec2,h=new pc.Vec2,c=new pc.Vec2,d=this._rails[e].script.rail;t.children[0].script.target.rail=d,t.enabled=!1;var u={time:n},g=new pc.Tween(u,pc.app._tweenManager).to({time:r},d.speed,pc[d.easing]).on("update",function(){t.enabled=!0,this.updateTargetCurve(t,e,u,s,p,o,l,h,c)},this).on("complete",function(){t.destroy(),this._extraTargets.splice(this._extraTargets.indexOf(t),1),this._currentCharacters.splice(this._currentCharacters.indexOf(t.index),1)},this).delay(i).start();t.moveTween=g},BuildSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),e=t.getLocalPosition();e.x=Math.random()>.5?e.x:-e.x,t.setLocalPosition(e),this._currentPopup=t.script.appearSpine;var a=this["prefabs_"+this._skin][this._characterSpawnIndex],i=a.findByName("spine");this._currentPopup.createSpine(i,"TargetMira_Mira"===a.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].length&&(this._characterSpawnIndex=0)}},BuildSpawnManager.SPAWN_TYPES={RAILS_L:1,RAILS_R:2};var CTTSpawnManager=pc.createScript("CTTSpawnManager");CTTSpawnManager.attributes.add("standardTargetPrefabs_bigcitygreens",{type:"entity",array:!0,title:"Standard Targets (bigcitygreens)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_descendants",{type:"entity",array:!0,title:"Standard Targets (descendants)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_justrollwithit",{type:"entity",array:!0,title:"Standard Targets (justrollwithit)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_vampirina",{type:"entity",array:!0,title:"Standard Targets (vamprina)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_mmua",{type:"entity",array:!0,title:"Standard Targets (mmua)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_gabby",{type:"entity",array:!0,title:"Standard Targets (gabby)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_muppets",{type:"entity",array:!0,title:"Standard Targets (muppets)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_tots",{type:"entity",array:!0,title:"Standard Targets (tots)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_zombies",{type:"entity",array:!0,title:"Standard Targets (zombies)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_mira",{type:"entity",array:!0,title:"Standard Targets (mira)"}),CTTSpawnManager.attributes.add("standardTargetPrefabs_udm",{type:"entity",array:!0,title:"Standard Targets (udm)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_bigcitygreens",{type:"entity",title:"Special Target (bigcitygreens)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_descendants",{type:"entity",title:"Special Target (descendants)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_justrollwithit",{type:"entity",title:"Special Target (justrollwithit)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_vampirina",{type:"entity",title:"Special Target (vampirina)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_mmua",{type:"entity",title:"Special Target (mmua)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_gabby",{type:"entity",title:"Special Target (gabby)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_muppets",{type:"entity",title:"Special Target (muppets)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_tots",{type:"entity",title:"Special Target (tots)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_zombies",{type:"entity",title:"Special Target (zombies)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_mira",{type:"entity",title:"Special Target (mira)"}),CTTSpawnManager.attributes.add("specialTargetPrefab_udm",{type:"entity",title:"Special Target (udm)"}),CTTSpawnManager.attributes.add("spritesAssets_bigcitygreens",{type:"asset",array:!1,title:"Sprites (bigcitygreens)"}),CTTSpawnManager.attributes.add("spritesAssets_descendants",{type:"asset",array:!1,title:"Sprites (descendants)"}),CTTSpawnManager.attributes.add("spritesAssets_justrollwithit",{type:"asset",array:!1,title:"Sprites (justrollwithit)"}),CTTSpawnManager.attributes.add("spritesAssets_vampirina",{type:"asset",array:!1,title:"Sprites (vampirina)"}),CTTSpawnManager.attributes.add("spritesAssets_mmua",{type:"asset",array:!1,title:"Sprites (mmua)"}),CTTSpawnManager.attributes.add("spritesAssets_gabby",{type:"asset",array:!1,title:"Sprites (gabby)"}),CTTSpawnManager.attributes.add("spritesAssets_muppets",{type:"asset",array:!1,title:"Sprites (muppets)"}),CTTSpawnManager.attributes.add("spritesAssets_tots",{type:"asset",array:!1,title:"Sprites (tots)"}),CTTSpawnManager.attributes.add("spritesAssets_zombies",{type:"asset",array:!1,title:"Sprites (zombies)"}),CTTSpawnManager.attributes.add("spritesAssets_mira",{type:"asset",array:!1,title:"Sprites (mira)"}),CTTSpawnManager.attributes.add("spritesAssets_udm",{type:"asset",array:!1,title:"Sprites (udm)"}),CTTSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity",array:!0,title:"Character Prefabs (bigcitygreens)"}),CTTSpawnManager.attributes.add("prefabs_descendants",{type:"entity",array:!0,title:"Character Prefabs (descendants)"}),CTTSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity",array:!0,title:"Character Prefabs (jrwi)"}),CTTSpawnManager.attributes.add("prefabs_vampirina",{type:"entity",array:!0,title:"Character Prefabs (vampirina)"}),CTTSpawnManager.attributes.add("prefabs_mmua",{type:"entity",array:!0,title:"Character Prefabs (mmua)"}),CTTSpawnManager.attributes.add("prefabs_gabby",{type:"entity",array:!0,title:"Character Prefabs (gabby)"}),CTTSpawnManager.attributes.add("prefabs_muppets",{type:"entity",array:!0,title:"Character Prefabs (muppets)"}),CTTSpawnManager.attributes.add("prefabs_tots",{type:"entity",array:!0,title:"Character Prefabs (tots)"}),CTTSpawnManager.attributes.add("prefabs_zombies",{type:"entity",array:!0,title:"Character Prefabs (zombies)"}),CTTSpawnManager.attributes.add("prefabs_mira",{type:"entity",array:!0,title:"Character Prefabs (mira)"}),CTTSpawnManager.attributes.add("prefabs_udm",{type:"entity",array:!0,title:"Character Prefabs (udm)"}),CTTSpawnManager.attributes.add("maxRailTargets",{type:"number",default:5,title:"Total Targets"}),CTTSpawnManager.attributes.add("goodHitEmitter",{type:"entity",title:"Good Hit Emitter"}),CTTSpawnManager.attributes.add("badHitEmitter",{type:"entity",title:"Bad Hit Emitter"}),CTTSpawnManager.attributes.add("charactersPerSpawn",{type:"number",default:1,title:"Characters per spawn"}),CTTSpawnManager.attributes.add("characterDelay",{type:"number",default:5,title:"Delay between Characters (s)"}),CTTSpawnManager.attributes.add("targetSprite",{type:"entity",title:"Target Sprite"}),CTTSpawnManager.attributes.add("targetBG",{type:"entity",title:"Target BG"}),CTTSpawnManager.attributes.add("screenHeader",{type:"entity",title:"Right Screen Header"}),CTTSpawnManager.prototype.initialize=function(){console.log("[CTTSpawnManager] Init"),common.minigame="chase",this._rails=[],this._popupPositions=[],this._curves=[],this._targets=[[],[],[],[],[]],this._extraTargets=[],this._spawnerTweens=[],this._skin=null,this._currentCharacters=[],this._timeLimit=45,this._characterSpawnIndex=0,this._canHit=!0,this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.on("disable",this.onDisable,this),this.on("enable",this.onEnable,this),this._flipCooldown=0,this._canUpdate=!1,this._flipState="down",this._multiplier=1,this._currentPopup=null,this._layerPositions=this.setupScene(),this.createCurves(),this._difficulties={easy:{timer:1/0},medium:{timer:5},hard:{time:3}},this._expiryTimer=null,this.app.fire("manager:setGameData",{timed:!0,time:this._timeLimit}),this._specialTarget=null,this.destroyed=!1,this.on("destroy",this.onDestroy.bind(this))},CTTSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},CTTSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this);for(var t=this._targets.flat(),e=0;e<t.length;e++)t[e].destroy();for(var a=0;a<this._extraTargets.length;a++)this._extraTargets[a].destroy();for(var i=0;i<this._spawnerTweens.length;i++)this._spawnerTweens[i].stop();this._spawnerTweens.length=0,this._extraTargets.length=0,this._targets=[[],[],[],[],[]],this._flipCooldown=0,this._canUpdate=!1,this._flipState="down",this._multiplier=1},CTTSpawnManager.prototype.onEnable=function(){this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.app.fire("manager:setGameData",{timed:!0,time:this._timeLimit}),this._layerPositions=this.setupScene()},CTTSpawnManager.prototype.setupScene=function(){for(var t=this.entity.findByName("Environment").findByTag("layer"),e=[],a=0;a<t.length;a++){var i=t[a].getLocalPosition();e.push(i.y),t[a].setLocalPosition(i.x,-35,i.z)}return e},CTTSpawnManager.prototype.unfoldScene=function(t){this._skin=t;for(var e=this.entity.findByName("Environment").findByTag("layer"),a=0;a<this._layerPositions.length;a++){var i=this._layerPositions[a],r=e[a];tweenlayer.call(this,r,i,a,this)}function tweenlayer(t,e,a,i){t.tween(t.getLocalPosition()).to({y:e},1,pc.QuinticOut).delay(.1*a).on("complete",function(){a>=i._layerPositions.length-1&&i.onUnfoldComplete()},i).start()}},CTTSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this.entity.findByName("Environment").findByTag("collider"),e=0;e<t.length;e++)t[e].rigidbody.syncEntityToBody();this.startTargets()},CTTSpawnManager.prototype.startTargets=function(){this["prefabs_"+this._skin]=P3.utils.shuffleArray(this["prefabs_"+this._skin]),this._rails=this.entity.findByPath("Environment/Paths").children,this._popupPositions=this.entity.findByPath("Environment/Popups").children,this._popupPositions.forEach(function(t){t.occupied=!1}),this.screenHeader.element.text="TARGET",this.targetSprite.element.spriteAsset=this["spritesAssets_"+this._skin].id,this.targetSprite.enabled=!0,this.targetBG.enabled=!0,this.screenHeader.enabled=!0,this.createCurves(),this.spawnPopUp(),this._canUpdate=!0;var t=this.app.tween({}).to({},this.characterDelay,pc.Linear).loop(!0).on("loop",function(){for(var t=0;t<this.charactersPerSpawn;t++)this.createRandomCharacter(.5*t)},this).start();this._spawnerTweens.push(t);var e=0,a=this.app.tween({}).to({},1,pc.Linear).repeat(4).on("loop",function(){var t=this["prefabs_"+this._skin][e].clone(),a=t.children[0].script.target;t.enabled=!0,a.setUp();var i=a.playAnimation(0,"popup",!1);P3.utils.delay(i.animation.duration,function(){a.playAnimation(0,"idle",!0)},this),this.entity.findByPath("Environment/character_spots").children[e].addChild(t),this._extraTargets.push(t),e++},this).start();this._spawnerTweens.push(a);var i=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(i),this.flipUp()},CTTSpawnManager.prototype.createCurves=function(){for(var t=0;t<this._rails.length;t++){for(var e=this._rails[t],a=e.script.rail,i=e.findByTag("curve"),r=e.findByName("CurveStart"),s=e.findByName("CurveEnd").getLocalPosition().x-r.getLocalPosition().x,n=[],p=[],o=0;o<i.length;o++){var l=i[o].getLocalPosition(),h=1/(s/(l.x-r.getLocalPosition().x));n.push(h,l.y),p.push(h,l.x)}var c=new pc.Curve(p);c.type=pc[a.interpolation];var d=new pc.Curve(n);d.type=pc[a.interpolation],this._curves.push([c,d])}},CTTSpawnManager.prototype.updateTargetCurve=function(t,e,a,i,r,s,n,p){this._rails[e].script.rail;var o=this._curves[e][0].value(a.time),l=this._curves[e][1].value(a.time);t.setLocalPosition(o,l,0)},CTTSpawnManager.prototype.spawnPopUp=function(){for(var t=.5-.5*this.maxRailTargets*.075,e=0;e<this.maxRailTargets;e++,t+=.075*1.125){var a=e%this._rails.length,i=this._rails[a],r=(i.findByName("CurveStart"),this._curves[a][0].value(t)),s=this._curves[a][1].value(t),n=new pc.Vec3(r,s,0),p=this.createTarget(e);p.railIndex=a,i.addChild(p),this._targets[a].push(p);var o=new pc.Vec2,l=new pc.Vec2,h=new pc.Vec2,c=new pc.Vec2,d=new pc.Vec2;this.updateTargetCurve(p,a,{time:t},o,l,h,c,d),p.setLocalPosition(n),p.children[0].script.target.setDown()}},CTTSpawnManager.prototype.createTarget=function(t){var e=null;if(0===t)e=this["specialTargetPrefab_"+this._skin].clone(),this._specialTarget=e,e.children[0].script.target.isPopup=!0;else{var a=this["standardTargetPrefabs_"+this._skin],i=Math.floor(Math.random()*a.length);e=a[i].clone(),a.length>1&&a.splice(i,1)}var r=e.find("name","spine");r.length>0&&r[0].script.spine.playAnimation(0,"idle",!0);e.enabled=!0,e.guid=pc.guid.create();var s=e.getLocalScale().x/3;return e.setLocalScale(s,s,s),e},CTTSpawnManager.prototype.stopAll=function(){this._canUpdate=!1,this.screenHeader.enabled=!1,this.targetBG.enabled=!1,this.targetSprite.enabled=!1;for(var t=0;t<this._targets.length;t++)for(var e=0;e<this._targets[t].length;e++){flip(this._targets[t][e])}function flip(t){new pc.Tween({t:0},pc.app._tweenManager).to({t:1},1,pc.Linear).on("complete",function(){t.children[0].script.target.flipDown()}).start()}},CTTSpawnManager.prototype.onTargetHit=function(t,e){if(t.hit=!1,this._canUpdate&&this._canHit)if(t._spine){if(t.animating)return void e.destroy();this.app.fire("score:addMissed",1,"chase"),t.animating=!0,e.destroy(),t.boing();var a=t.playAnimation(0,"hit",!1);P3.utils.delay(a.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else this._specialTarget.guid===t.entity.parent.guid?(this._canHit=!1,playParticles.call(this,this.goodHitEmitter),this.app.fire("score:addScore",100*this._multiplier,"chase"),e.script.targetScore.setText("+"+100*this._multiplier,new pc.Color(1,1,1,1)),this._multiplier++,this.flip(),this.app.fire("score:addHit",1,"chase"),e.script.targetScore.animate()):(playParticles.call(this,this.badHitEmitter),this.app.fire("score:addScore",-100,"chase"),this.app.fire("score:addMissed",1,"chase"),e.script.targetScore.setText("-100",new pc.Color(1,0,0,1)),this._multiplier=1,t.flipDown(),e.script.targetScore.animate()),e.script.targetScore.animate();else e.destroy();function playParticles(e){var a=e.clone();a.setPosition(t.entity.parent.getPosition()),a.enabled=!0,a.particlesystem.reset(),a.particlesystem.play(),P3.utils.delay(a.particlesystem.lifetime,function(){a.particlesystem.reset(),a.particlesystem.stop(),a.enabled=!1,a.destroy()},null,this)}},CTTSpawnManager.prototype.flip=function(){if(this._canUpdate){this._flipState="down";for(var t=this._targets.flat(),e=0;e<t.length;e++)flipDown.call(this,e,this)}function flipDown(e,a){var i=t[e];i.children[0].enabled=!0;var r=i.children[0].script.target;P3.utils.delay(e/100,function(){i.guid===this._specialTarget.guid&&(r.isPopup=!0),i.hit=!1,r.hit=!1,r.flipDown(),e===t.length-1&&P3.utils.delay(.5,function(){this.flipUp(),this._canHit=!0},null,this)},null,this)}},CTTSpawnManager.prototype.flipUp=function(){if(this._canUpdate){for(var t=0;t<this._popupPositions.length;t++)this._popupPositions[t].occupied=!1;this.setNewTargetPositions(),this._flipState="up";for(var e=this._targets.flat(),a=e.length-1;a>0;a--){var i=Math.floor(Math.random()*(a+1)),r=e[a];e[a]=e[i],e[i]=r}for(var s=0;s<e.length;s++)flipUp(s,this);var n=common.difficulty;["mmua","vampirina","tots","muppets"].includes(common.skin)&&(n="easy"),"easy"!==n&&P3.utils.delay(500*e.length,function(){this._expiryTimer=this.app.tween({}).to({},this._difficulties[n].timer,pc.Linear).on("complete",function(){this.flip()},this).start()},null,this)}function flipUp(t,a){var i=e[t];i.enabled=!1;var r=i.children[0].script.target;P3.utils.delay(t/100,function(){r.state="down",r.reset(),r.hit=!1,i.enabled=!0},null,this)}},CTTSpawnManager.prototype.update=function(t){},CTTSpawnManager.prototype.setToRail=function(t){for(var e=[],a=0;a<this._rails.length;a++)e.push(a);e=P3.utils.shuffleArray(e);for(var i=[[.45,.55,.65],[.35,.45,.55,.65],[.35,.45,.55,.65],[.35,.45,.55,.65],[.35,.45,.55,.65]],r=this._popupPositions.length;r<t.length;r++){var s=t[r],n=e[r%e.length];s.reparent(this._rails[n]),s.slot=null;var p=P3.utils.selectRandom(i[n]),o=i[n].indexOf(p);i[n].splice(o,1);var l=this._curves[n][0].value(p),h=this._curves[n][1].value(p),c=new pc.Vec3(l,h,.01*r),d=new pc.Vec2,g=new pc.Vec2,T=new pc.Vec2,u=new pc.Vec2,y=new pc.Vec2;this.updateTargetCurve(s,n,{time:p},d,g,T,u,y),s.setLocalPosition(c)}},CTTSpawnManager.prototype.setNewTargetPositions=function(){var t=this._targets.flat();t.forEach(function(t){t.enabled=!1,t.reparent(this.app.root),t.setLocalPosition(pc.Vec3.ZERO)}.bind(this));var e=t.splice(1);(t=P3.utils.shuffleArray(e)).unshift(this._specialTarget),this._popupPositions=P3.utils.shuffleArray(this._popupPositions);for(var a=0;a<t.length;a++){var i=t[a];if(a>=this._popupPositions.length)i.enabled=!1;else{var r=this._popupPositions[a];i.enabled=!0,i.reparent(r),i.setLocalPosition(pc.Vec3.ZERO)}}},CTTSpawnManager.prototype.createRandomCharacter=function(t){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var e=Math.random()>.5?CTTSpawnManager.SPAWN_TYPES.RAILS_L:CTTSpawnManager.SPAWN_TYPES.RAILS_R,a=Math.floor(pc.math.random(0,this._rails.length)),i=this._rails[a],r=i.findByName("CurveStart").getLocalPosition().clone(),s=this["prefabs_"+this._skin],n=s[this._characterSpawnIndex].clone();n.setLocalPosition(r),n.enabled=!0,n.index=this._characterSpawnIndex,i.addChild(n),n.children[0].script.target.setDown(),n.children[0].script.target.flipUp(),this._extraTargets.push(n),this._currentCharacters.push(this._characterSpawnIndex);var p=n.getLocalScale().x/3;n.setLocalScale(p,p,p);var o=n.find("name","spine");if(o.length>0){var l=o[0].script.spine;l._skeleton.setSkinByName(common.theme),l.playAnimation(0,"move",!0)}this.characterMoveTween(n,a,e,t),this._characterSpawnIndex++,this._characterSpawnIndex>=s.length&&(this._characterSpawnIndex=0)}},CTTSpawnManager.prototype.characterMoveTween=function(t,e,a,i){var r=a===CTTSpawnManager.SPAWN_TYPES.RAILS_L?1:0,s=a===CTTSpawnManager.SPAWN_TYPES.RAILS_L?0:1,n=(CTTSpawnManager.SPAWN_TYPES.RAILS_L,new pc.Vec2),p=new pc.Vec2,o=new pc.Vec2,l=new pc.Vec2,h=new pc.Vec2,c=this._rails[e].script.rail;t.children[0].script.target.rail=c,t.enabled=!1;var d={time:r},g=new pc.Tween(d,pc.app._tweenManager).to({time:s},c.speed,pc[c.easing]).on("update",function(){t.enabled=!0,this.updateTargetCurve(t,e,d,n,p,o,l,h)},this).on("complete",function(){t.destroy(),this._extraTargets.splice(this._extraTargets.indexOf(t),1),this._currentCharacters.splice(this._currentCharacters.indexOf(t.index),1)},this).delay(i).start();t.moveTween=g},CTTSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),e=t.getLocalPosition();e.x=Math.random()>.5?e.x:-e.x,t.setLocalPosition(e),this._currentPopup=t.script.appearSpine;var a=this["prefabs_"+this._skin][this._characterSpawnIndex],i=a.findByName("spine");this._currentPopup.createSpine(i,"TargetMira_Mira"===a.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].length&&(this._characterSpawnIndex=0)}},CTTSpawnManager.SPAWN_TYPES={RAILS_L:1,RAILS_R:2};var FranticSpawnManager=pc.createScript("franticSpawnManager");FranticSpawnManager.attributes.add("targetPrefabs_bigcitygreens",{type:"entity",array:!0,title:"Target Prefabs (bigcitygreens)"}),FranticSpawnManager.attributes.add("targetPrefabs_descendants",{type:"entity",array:!0,title:"Target Prefabs (descendants)"}),FranticSpawnManager.attributes.add("targetPrefabs_justrollwithit",{type:"entity",array:!0,title:"Target Prefabs (jrwi)"}),FranticSpawnManager.attributes.add("targetPrefabs_vampirina",{type:"entity",array:!0,title:"Target Prefabs (vampirina)"}),FranticSpawnManager.attributes.add("targetPrefabs_mmua",{type:"entity",array:!0,title:"Target Prefabs (mmua)"}),FranticSpawnManager.attributes.add("targetPrefabs_gabby",{type:"entity",array:!0,title:"Target Prefabs (gabby)"}),FranticSpawnManager.attributes.add("targetPrefabs_muppets",{type:"entity",array:!0,title:"Target Prefabs (muppets)"}),FranticSpawnManager.attributes.add("targetPrefabs_tots",{type:"entity",array:!0,title:"Target Prefabs (tots)"}),FranticSpawnManager.attributes.add("targetPrefabs_zombies",{type:"entity",array:!0,title:"Target Prefabs (zombies)"}),FranticSpawnManager.attributes.add("targetPrefabs_mira",{type:"entity",array:!0,title:"Target Prefabs (mira)"}),FranticSpawnManager.attributes.add("targetPrefabs_udm",{type:"entity",array:!0,title:"Target Prefabs (udm)"}),FranticSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity",array:!0,title:"Character Prefabs (bigcitygreens)"}),FranticSpawnManager.attributes.add("prefabs_descendants",{type:"entity",array:!0,title:"Character Prefabs (descendants)"}),FranticSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity",array:!0,title:"Character Prefabs (jrwi)"}),FranticSpawnManager.attributes.add("prefabs_vampirina",{type:"entity",array:!0,title:"Character Prefabs (vampirina)"}),FranticSpawnManager.attributes.add("prefabs_mmua",{type:"entity",array:!0,title:"Character Prefabs (MMUA)"}),FranticSpawnManager.attributes.add("prefabs_gabby",{type:"entity",array:!0,title:"Character Prefabs (Gabby)"}),FranticSpawnManager.attributes.add("prefabs_muppets",{type:"entity",array:!0,title:"Character Prefabs (muppets)"}),FranticSpawnManager.attributes.add("prefabs_tots",{type:"entity",array:!0,title:"Character Prefabs (tots)"}),FranticSpawnManager.attributes.add("prefabs_zombies",{type:"entity",array:!0,title:"Character Prefabs (zombies)"}),FranticSpawnManager.attributes.add("prefabs_mira",{type:"entity",array:!0,title:"Character Prefabs (mira)"}),FranticSpawnManager.attributes.add("prefabs_udm",{type:"entity",array:!0,title:"Character Prefabs (udm)"}),FranticSpawnManager.attributes.add("patterns_bigcitygreens",{type:"string",title:"Patterns (bigcitygreens)"}),FranticSpawnManager.attributes.add("patterns_descendants",{type:"string",title:"Patterns (descendants)"}),FranticSpawnManager.attributes.add("patterns_justrollwithit",{type:"string",title:"Patterns (jrwi)"}),FranticSpawnManager.attributes.add("patterns_vampirina",{type:"string",title:"Patterns (vampirina)"}),FranticSpawnManager.attributes.add("patterns_mmua",{type:"string",title:"Patterns (MMUA)"}),FranticSpawnManager.attributes.add("patterns_gabby",{type:"string",title:"Patterns (Gabby)"}),FranticSpawnManager.attributes.add("patterns_muppets",{type:"string",title:"Patterns (muppets)"}),FranticSpawnManager.attributes.add("patterns_tots",{type:"string",title:"Patterns (tots)"}),FranticSpawnManager.attributes.add("patterns_zombies",{type:"string",title:"Patterns (zombies)"}),FranticSpawnManager.attributes.add("patterns_mira",{type:"string",title:"Patterns (mira)"}),FranticSpawnManager.attributes.add("patterns_udm",{type:"string",title:"Patterns (udm)"}),FranticSpawnManager.attributes.add("hitEmitter",{type:"entity",title:"Good Hit Emitter"}),FranticSpawnManager.attributes.add("badHitEmitter",{type:"entity",title:"Bad Hit Emitter"}),FranticSpawnManager.attributes.add("charactersPerSpawn",{type:"number",default:2,title:"Characters per spawn"}),FranticSpawnManager.attributes.add("characterDelay",{type:"number",default:2,title:"Delay between Characters (s)"}),FranticSpawnManager.prototype.initialize=function(){console.log("[FranticSpawnManager] Init"),common.minigame="frantic",this._rails=[],this._popupPositions=[],this._curves=[],this._skin=null,this._timeLimit=45,this._targets=[[],[],[],[]],this._extraTargets=[],this._characterSpawnIndex=0,this._currentCharacters=[],this._spawnCounter=0,this._spawnTypes=[FranticSpawnManager.SPAWN_TYPES.RAILS_L,FranticSpawnManager.SPAWN_TYPES.RAILS_R,FranticSpawnManager.SPAWN_TYPES.RAILS_L,FranticSpawnManager.SPAWN_TYPES.RAILS_R],this._spawnPatterns={easy:{A:[{type:"rail",index:0,icon:0,amount:10,delay:1}],B:[{type:"rail",index:1,icon:1,amount:10,delay:2}],C:[{type:"rail",index:2,icon:2,amount:10,delay:1}],D:[{type:"rail",index:3,icon:3,amount:10,delay:1}],E:[{type:"popup",index:0,icon:0,delay:0,time:2}],F:[{type:"popup",index:1,icon:1,delay:0,time:2}],G:[{type:"popup",index:2,icon:2,delay:0,time:2}],H:[{type:"popup",index:3,icon:3,delay:0,time:2}],I:[{type:"popup",index:4,icon:0,delay:0,time:2}],J:[{type:"popup",index:5,icon:1,delay:0,time:2}],K:[{type:"popup",index:6,icon:2,delay:0,time:2}]},medium:{A:[{type:"rail",index:0,icon:0,amount:10,delay:1}],B:[{type:"rail",index:1,icon:1,amount:10,delay:1}],C:[{type:"rail",index:2,icon:2,amount:10,delay:1}],D:[{type:"rail",index:3,icon:3,amount:10,delay:1}],E:[{type:"popup",index:0,icon:0,delay:0,time:1.5}],F:[{type:"popup",index:1,icon:1,delay:0,time:1.5}],G:[{type:"popup",index:2,icon:2,delay:0,time:1.5}],H:[{type:"popup",index:3,icon:3,delay:0,time:1.5}],I:[{type:"popup",index:4,icon:0,delay:0,time:1.5}],J:[{type:"popup",index:5,icon:1,delay:0,time:1.5}],K:[{type:"popup",index:6,icon:2,delay:0,time:1.5}]},hard:{A:[{type:"rail",index:0,icon:0,amount:10,delay:1}],B:[{type:"rail",index:1,icon:1,amount:10,delay:1}],C:[{type:"rail",index:2,icon:2,amount:10,delay:1}],D:[{type:"rail",index:3,icon:3,amount:10,delay:1}],E:[{type:"popup",index:0,icon:0,delay:0,time:1}],F:[{type:"popup",index:1,icon:1,delay:0,time:1}],G:[{type:"popup",index:2,icon:2,delay:0,time:1}],H:[{type:"popup",index:3,icon:3,delay:0,time:1}],I:[{type:"popup",index:4,icon:0,delay:0,time:1}],J:[{type:"popup",index:5,icon:1,delay:0,time:1}],K:[{type:"popup",index:6,icon:2,delay:0,time:1}]}},"mmua"!==common.skin&&"vampirina"!==common.skin||(this._spawnPatterns.easy={A:[{type:"rail",index:0,icon:0,amount:6,delay:1}],B:[{type:"rail",index:1,icon:1,amount:6,delay:2}],C:[{type:"rail",index:2,icon:2,amount:6,delay:1}],D:[{type:"rail",index:3,icon:3,amount:6,delay:1}],E:[{type:"popup",index:0,icon:0,delay:0,time:5}],F:[{type:"popup",index:1,icon:1,delay:0,time:5}],G:[{type:"popup",index:2,icon:2,delay:0,time:5}],H:[{type:"popup",index:3,icon:3,delay:0,time:5}],I:[{type:"popup",index:4,icon:0,delay:0,time:5}],J:[{type:"popup",index:5,icon:1,delay:0,time:5}],K:[{type:"popup",index:6,icon:2,delay:0,time:5}]}),this._spawnerTweens=[],this._canUpdate=!1,this._currentPopup=null,this.app.fire("manager:setGameData",{timed:!0,time:this._timeLimit}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.on("disable",this.onDisable,this),this.on("enable",this.onEnable,this),this._layerPositions=this.setupScene(),this.destroyed=!1,this.on("destroy",this.onDestroy.bind(this))},FranticSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},FranticSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this);for(var t=this._targets.flat(),e=0;e<t.length;e++)t[e].destroy();for(var a=0;a<this._extraTargets.length;a++)this._extraTargets[a].destroy();this._targets=[[],[],[],[]];for(var i=0;i<this._spawnerTweens.length;i++)this._spawnerTweens[i].stop();this._spawnerTweens.length=0,this._canUpdate=!1},FranticSpawnManager.prototype.onEnable=function(){this.app.fire("manager:setGameData",{timed:!0,time:this._timeLimit}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this._layerPositions=this.setupScene()},FranticSpawnManager.prototype.setupScene=function(){for(var t=this.entity.findByName("Environment").findByTag("layer"),e=[],a=0;a<t.length;a++){var i=t[a].getLocalPosition();e.push(i.y),t[a].setLocalPosition(i.x,-35,i.z)}return e},FranticSpawnManager.prototype.unfoldScene=function(t){this._skin=t;for(var e=this.entity.findByName("Environment").findByTag("layer"),a=0;a<this._layerPositions.length;a++){var i=this._layerPositions[a],n=e[a];tweenlayer.call(this,n,i,a,this)}function tweenlayer(t,e,a,i){t.tween(t.getLocalPosition()).to({y:e},1,pc.QuinticOut).delay(.1*a).on("complete",function(){a>=i._layerPositions.length-1&&i.onUnfoldComplete()},i).start()}},FranticSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this.entity.findByName("Environment").findByTag("collider"),e=0;e<t.length;e++)t[e].rigidbody.syncEntityToBody();this.startTargets()},FranticSpawnManager.prototype.startTargets=function(){this["prefabs_"+this._skin]=P3.utils.shuffleArray(this["prefabs_"+this._skin]),this._rails=this.entity.findByPath("Environment/Paths").children,this._popupPositions=this.entity.findByPath("Environment/Popups").children,this._popupPositions.forEach(function(t){t.occupied=!1}),this.createCurves();var t=common.difficulty;"mmua"!==common.skin&&"vampirina"!==common.skin||(t="easy");var e=[],a=this["patterns_"+this._skin].split("");for(var i in a)for(var n in this._spawnPatterns[t][a[i]]){var r=this._spawnPatterns[t][a[i]][n];e.push(r);for(var s=0;s<r.delay;s++)e.push({type:"delay"})}var p=0,o=this.app.tween({i:0}).to({i:1},1,pc.Linear).loop(!0).on("loop",function(){var t=e[p],a=P3.utils.selectRandom(this["targetPrefabs_"+common.skin]);"rail"===t.type?this.addRailIcon(t.index,a,t.amount,1,t.delay):"popup"===t.type&&this.addPopupIcon(t.index,a,t.time),++p>=e.length&&(p=0)},this).start();this._spawnerTweens.push(o);var c=this.app.tween({}).to({},this.characterDelay,pc.Linear).loop(!0).on("loop",function(){for(var t=0;t<this.charactersPerSpawn;t++)this.createRandomCharacter(.5*t)},this).start();this._spawnerTweens.push(c);var l=0,h=this.app.tween({}).to({},1,pc.Linear).repeat(4).on("loop",function(){var t=this["prefabs_"+this._skin][l].clone(),e=t.children[0].script.target;t.enabled=!0,e.setUp();var a=e.playAnimation(0,"popup",!1);P3.utils.delay(a.animation.duration,function(){e.playAnimation(0,"idle",!0)},this),this.entity.findByPath("Environment/character_spots").children[l].addChild(t),this._extraTargets.push(t),l++},this).start();this._spawnerTweens.push(h);var d=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(d),this._canUpdate=!0},FranticSpawnManager.prototype.addRailIcon=function(t,e,a,i,n){t>=this._rails.length&&(t=this._rails.length%t);var r=this._rails[t],s=(r.script.rail,r.findByName("CurveStart").getLocalPosition().clone()),p=this._spawnTypes[t];this._spawnCounter++,this._spawnCounter%2==0?s.z-=.2:this._spawnCounter%3==0&&(s.z-=.4);var o=e.clone();o.setLocalPosition(s),o.enabled=!0,r.addChild(o),Math.random()>.4?o.children[0].script.target.setUp():(o.children[0].script.target.setDown(),o.tween({}).to({},pc.math.random(2,4),pc.Linear).on("complete",function(){o.children[0].script.target.flipUp()},this).start());var c=o.find("name","spine");c.length>0&&c[0].script.spine.playAnimation(0,"idle",!0);var l=o.getLocalScale().x/3;if(o.setLocalScale(l,l,l),this.moveTween.call(this,o,t,0,p),this._targets[t].push(o),i<a){i++;var h=this.app.tween({i:0}).to({i:1},n,pc.Linear).on("complete",function(){this.addRailIcon(t,e,a,i,n)},this).start();this._spawnerTweens.push(h)}},FranticSpawnManager.prototype.addPopupIcon=function(t,e,a){t>=this._popupPositions.length&&(t=(this._popupPositions.length-1)%t);var i=this._popupPositions[t];if(i.occupied){var n=this._popupPositions.filter(function(t,e){return!t.occupied});if(!(n.length>0))return;i=n[0]}i.occupied=!0;var r=e.clone();r.setLocalPosition(new pc.Vec3(0,0,0)),r.enabled=!0,r.slot=i,r.children[0].script.target.isPopup=!0,i.addChild(r),r.children[0].script.target.setDown(),r.children[0].script.target.flipUp();var s=r.find("name","spine");s.length>0&&s[0].script.spine.playAnimation(0,"idle",!0);this._extraTargets.push(r);var p=r.getLocalScale().x/3;r.setLocalScale(p,p,p);var o=this.app.tween({i:0}).to({i:1},a,pc.Linear).on("complete",function(){r.children.length>0&&"up"===r.children[0].script.target.state&&r.children[0].script.target.scaleDown(!0,function(){r.slot.occupied=!1,r.slot=null,r.destroy()}.bind(this))},this).start();this._spawnerTweens.push(o)},FranticSpawnManager.prototype.createCurves=function(){for(var t=0;t<this._rails.length;t++){for(var e=this._rails[t],a=e.script.rail,i=e.findByTag("curve"),n=e.findByName("CurveStart"),r=e.findByName("CurveEnd").getLocalPosition().x-n.getLocalPosition().x,s=[],p=[],o=0;o<i.length;o++){var c=i[o].getLocalPosition(),l=1/(r/(c.x-n.getLocalPosition().x));s.push(l,c.y),p.push(l,c.x)}var h=new pc.Curve(p);h.type=pc[a.interpolation];var d=new pc.Curve(s);d.type=pc[a.interpolation],this._curves.push([h,d])}},FranticSpawnManager.prototype.moveTween=function(t,e,a,i){var n=i===FranticSpawnManager.SPAWN_TYPES.RAILS_L?1:0,r=i===FranticSpawnManager.SPAWN_TYPES.RAILS_L?0:1,s=this._rails[e].script.rail;t.children[0].script.target.rail=s,t.enabled=!1;var p={time:n},o=new pc.Tween(p,pc.app._tweenManager).to({time:r},.5*s.speed,pc[s.easing]).on("update",function(){t.enabled=!0,this.updateTargetCurve(t,e,p)},this).on("complete",function(){this.onTargetFinishedMoving(a,t,e)},this).delay(a+.5).start();t.moveTween=o},FranticSpawnManager.prototype.updateTargetCurve=function(t,e,a){this._rails[e].script.rail;var i=this._curves[e][0].value(a.time),n=this._curves[e][1].value(a.time),r=t.getLocalPosition();t.setLocalPosition(i,n,r.z)},FranticSpawnManager.prototype.onTargetFinishedMoving=function(t,e,a){e.destroy(),this._targets[a].splice(this._targets[a].indexOf(e),1)},FranticSpawnManager.prototype.reset=function(){this._canUpdate=!1;for(var t=0;t<this._targets.length;t++){for(var e=0;e<this._targets[t].length;e++)this._targets[t][e].destroy();this._targets[t].length=0}for(var a=0;a<this._extraTargets.length;a++)this._extraTargets[a].destroy();this.begin()},FranticSpawnManager.prototype.stopAll=function(){this._canUpdate=!1;for(var t=this._targets.flat(),e=0;e<t.length;e++){var a=t[e];a.moveTween&&a.moveTween.stop(),a.flipTween&&a.flipTween.stop(),flip(a)}for(var i=0;i<this._extraTargets.length;i++)flip(this._extraTargets[i]);function flip(t){new pc.Tween({t:0},pc.app._tweenManager).to({t:1},1,pc.Linear).on("complete",function(){t.children[0]&&t.children[0].script.target.flipDown()}).start()}for(var n=0;n<this._spawnerTweens.length;n++)this._spawnerTweens[n].stop();this._spawnerTweens.length=0},FranticSpawnManager.prototype.onTargetHit=function(t,e){if(this._canUpdate){var a=t.entity.parent;if(t._spine){if(t.animating)return void e.destroy();t.animating=!0,e.destroy(),t.boing(),this.app.fire("score:addMissed",1,"frantic");var i=t.playAnimation(0,"hit",!1);P3.utils.delay(i.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else{if("up"===t.state){var n=100;if(t.isPopup)n=300;else{if(!t.rail)return;t.rail.speed<14&&(n=150),t.rail.speed<9&&(n=200)}(function playParticles(t){var e=t.clone();e.setPosition(a.getPosition()),e.enabled=!0,e.particlesystem.reset(),e.particlesystem.play(),P3.utils.delay(t.particlesystem.lifetime,function(){e.particlesystem.reset(),e.particlesystem.stop(),e.enabled=!1,e.destroy()},null,this)}).call(this,this.hitEmitter),this.app.fire("score:addScore",n,"frantic"),this.app.fire("score:addHit",1,"frantic"),e.script.targetScore.setText("+"+n,new pc.Color(1,1,1,1)),e.script.targetScore.animate()}t.entity.parent.slot?(t.entity.parent.slot.occupied=!1,t.entity.parent.slot=null,this._extraTargets.splice(this._extraTargets.indexOf(t),1),t.entity.parent.destroy()):t.flipDownScale(!1,function(){t.entity.parent.destroy()}.bind(this))}}},FranticSpawnManager.prototype.createRandomCharacter=function(t){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var e=Math.random()>.5?FranticSpawnManager.SPAWN_TYPES.RAILS_L:FranticSpawnManager.SPAWN_TYPES.RAILS_R,a=Math.floor(pc.math.random(0,this._rails.length)),i=this._rails[a],n=i.findByName("CurveStart").getLocalPosition().clone();n.z+=.3;var r=this["prefabs_"+this._skin],s=r[this._characterSpawnIndex].clone();s.setLocalPosition(n),s.enabled=!0,s.index=this._characterSpawnIndex,i.addChild(s),s.children[0].script.target.setDown(),s.children[0].script.target.flipUp(),this._extraTargets.push(s),this._currentCharacters.push(this._characterSpawnIndex);var p=s.getLocalScale().x/3;s.setLocalScale(p,p,p);var o=s.find("name","spine");if(o.length>0){var c=o[0].script.spine;c._skeleton.setSkinByName(common.theme),c.playAnimation(0,"move",!0)}this.characterMoveTween(s,a,e,t),this._characterSpawnIndex++,this._characterSpawnIndex>=r.length&&(this._characterSpawnIndex=0)}},FranticSpawnManager.prototype.characterMoveTween=function(t,e,a,i){var n=a===FranticSpawnManager.SPAWN_TYPES.RAILS_L?1:0,r=a===FranticSpawnManager.SPAWN_TYPES.RAILS_L?0:1,s=a===FranticSpawnManager.SPAWN_TYPES.RAILS_L?-1:1,p=new pc.Vec2,o=new pc.Vec2,c=new pc.Vec2,l=new pc.Vec2,h=new pc.Vec2,d=this._rails[e].script.rail;t.children[0].script.target.rail=d,t.enabled=!1;var y={time:n},g=new pc.Tween(y,pc.app._tweenManager).to({time:r},d.speed,pc[d.easing]).on("update",function(){t.enabled=!0,this.updateTargetCurve(t,e,y,s,p,o,c,l,h)},this).on("complete",function(){t.destroy(),this._extraTargets.splice(this._extraTargets.indexOf(t),1),this._currentCharacters.splice(this._currentCharacters.indexOf(t.index),1)},this).delay(i).start();t.moveTween=g},FranticSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),e=t.getLocalPosition();e.x=Math.random()>.5?e.x:-e.x,t.setLocalPosition(e),this._currentPopup=t.script.appearSpine;var a=this["prefabs_"+this._skin][this._characterSpawnIndex],i=a.findByName("spine");this._currentPopup.createSpine(i,"TargetMira_Mira"===a.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].length&&(this._characterSpawnIndex=0)}},FranticSpawnManager.SPAWN_TYPES={RAILS_L:1,RAILS_R:2};var LightSpawnManager=pc.createScript("lightSpawnManager");LightSpawnManager.attributes.add("targets",{type:"entity",array:!0,title:"Target"}),LightSpawnManager.attributes.add("targetsHanging",{type:"entity",array:!0,title:"Targets Hanging"}),LightSpawnManager.attributes.add("gameTime",{type:"number",default:45,title:"Game Time"}),LightSpawnManager.attributes.add("badHitEmitter",{type:"entity",title:"Bad Hit Emitter"}),LightSpawnManager.attributes.add("charactersPerSpawn",{type:"number",default:1,title:"Characters per spawn"}),LightSpawnManager.attributes.add("characterDelay",{type:"number",default:5,title:"Delay between Characters (s)"}),LightSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity",array:!0,title:"Character Prefabs (bigcitygreens)"}),LightSpawnManager.attributes.add("prefabs_descendants",{type:"entity",array:!0,title:"Character Prefabs (descendants)"}),LightSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity",array:!0,title:"Character Prefabs (jrwi)"}),LightSpawnManager.attributes.add("prefabs_vampirina",{type:"entity",array:!0,title:"Character Prefabs (vampirina)"}),LightSpawnManager.attributes.add("prefabs_mmua",{type:"entity",array:!0,title:"Character Prefabs (mmua)"}),LightSpawnManager.attributes.add("prefabs_gabby",{type:"entity",array:!0,title:"Character Prefabs (gabby)"}),LightSpawnManager.attributes.add("prefabs_muppets",{type:"entity",array:!0,title:"Character Prefabs (muppets)"}),LightSpawnManager.attributes.add("prefabs_tots",{type:"entity",array:!0,title:"Character Prefabs (tots)"}),LightSpawnManager.attributes.add("prefabs_zombies",{type:"entity",array:!0,title:"Character Prefabs (zombies)"}),LightSpawnManager.attributes.add("prefabs_mira",{type:"entity",array:!0,title:"Character Prefabs (mira)"}),LightSpawnManager.attributes.add("prefabs_udm",{type:"entity",array:!0,title:"Character Prefabs (udm)"}),LightSpawnManager.prototype.initialize=function(){console.log("[LightSpawnManager] Init"),common.minigame="light",this._canUpdate=!1,this._targets=[],this._rails=[],this._curves=[],this._spawnerTweens=[],this._extraTargets=[],this._hits=0,this._sequence=0,this._targetCount=0,this._flipCount=0,this._currentCharacters=[],this._characterSpawnIndex=0,this._activeTargets=0,this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.on("disable",this.onDisable,this),this.on("enable",this.onEnable,this),this.app.fire("manager:setGameData",{timed:!0,time:this.gameTime}),this._ready=!1,this._layerPositions=this.setupScene(),this._currentPopup=null,this.destroyed=!1,this.on("destroy",this.onDestroy.bind(this))},LightSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},LightSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this);for(var t=this._targets.flat(),e=0;e<t.length;e++)t[e].destroy();for(var a=0;a<this._extraTargets.length;a++)this._extraTargets[a].destroy();this._targets=[];for(var i=0;i<this._spawnerTweens.length;i++)this._spawnerTweens[i].stop();this._spawnerTweens.length=0,this._canUpdate=!1},LightSpawnManager.prototype.onEnable=function(){this.app.fire("manager:setGameData",{timed:!1,time:this.gameTime}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this._layerPositions=this.setupScene()},LightSpawnManager.prototype.setupScene=function(){for(var t=this.entity.findByName("Environment").findByTag("layer"),e=[],a=0;a<t.length;a++){var i=t[a].getLocalPosition();e.push(i.y),t[a].setLocalPosition(i.x,-25,i.z)}return e},LightSpawnManager.prototype.unfoldScene=function(t){this._skin=t;var e=this.entity.findByName("Environment").findByTag("layer");this._rails=this.entity.findByPath("Environment/Paths").children;for(var a=0;a<this._layerPositions.length;a++){var i=this._layerPositions[a],r=e[a];tweenlayer.call(this,r,i,a,this)}function tweenlayer(t,e,a,i){t.tween(t.getLocalPosition()).to({y:e},1,pc.QuinticOut).delay(.1*a).on("complete",function(){a>=i._layerPositions.length-1&&i.onUnfoldComplete()},i).start()}},LightSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this.entity.findByName("Environment").findByTag("collider"),e=0;e<t.length;e++)t[e].rigidbody.syncEntityToBody();this.startTargets()},LightSpawnManager.prototype.createCurves=function(){for(var t=0;t<this._rails.length;t++){for(var e=this._rails[t],a=e.script.rail,i=e.findByTag("curve"),r=e.findByName("CurveStart"),n=e.findByName("CurveEnd").getLocalPosition().x-r.getLocalPosition().x,s=[],h=[],p=0;p<i.length;p++){var o=i[p].getLocalPosition(),c=1/(n/(o.x-r.getLocalPosition().x));s.push(c,o.y),h.push(c,o.x)}var l=new pc.Curve(h);l.type=pc[a.interpolation];var g=new pc.Curve(s);g.type=pc[a.interpolation],this._curves.push([l,g])}},LightSpawnManager.prototype.updateTargetCurve=function(t,e,a,i,r,n,s,h,p){this._rails[e].script.rail;var o=this._curves[e][0].value(a.time),c=this._curves[e][1].value(a.time);t.setLocalPosition(o,c,0)},LightSpawnManager.prototype.startTargets=function(){this["prefabs_"+this._skin]=P3.utils.shuffleArray(this["prefabs_"+this._skin]),this._rails=this.entity.findByPath("Environment/Paths").children,this.createCurves(),this.createTargets();var t=this.app.tween({}).to({},this.characterDelay,pc.Linear).loop(!0).on("loop",function(){for(var t=0;t<this.charactersPerSpawn;t++)this.createRandomCharacter(.5*t)},this).start();this._spawnerTweens.push(t);var e=0,a=this.app.tween({}).to({},1,pc.Linear).repeat(4).on("loop",function(){var t=this["prefabs_"+this._skin][e].clone(),a=t.children[0].script.target;t.enabled=!0,a.setUp();var i=a.playAnimation(0,"popup",!1);P3.utils.delay(i.animation.duration,function(){a.playAnimation(0,"idle",!0)},this),this.entity.findByPath("Environment/character_spots").children[e].addChild(t),this._extraTargets.push(t),e++},this).start();this._spawnerTweens.push(a);var i=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(i),this._timeStart=Date.now(),this._canUpdate=!0},LightSpawnManager.prototype.createRandomCurve=function(t){for(var e=this.playArea.children[0].getLocalPosition(),a=this.playArea.children[3].getLocalPosition(),i=[],r=[],n=0;n<=t;n++){var s=pc.math.random(e.x,a.x),h=pc.math.random(e.y,a.y),p=n*(1/t);i.push(p,s),r.push(p,h)}var o=new pc.Curve(i);o.type=pc.CURVE_CATMULL;var c=new pc.Curve(r);return c.type=pc.CURVE_CATMULL,[o,c]},LightSpawnManager.prototype.createTargets=function(){this._sequence++,this._activeTargets=0;var t=this.entity.findByPath("Environment/light_mode_spots").children;function flipUp(t,e){P3.utils.delay(.05*e,function(){t.flipUp()},null,this)}this._targetCount=t.length;for(var e=this._sequence%2==0?0:Math.floor(this._targetCount/2)+1,a=this._sequence%2==0?Math.floor(this._targetCount/2):this._targetCount,i=e;i<a;i++){var r=t[i],n=null;(n=r.tags.has("hanging")?P3.utils.selectRandom(this.targetsHanging).clone():P3.utils.selectRandom(this.targets).clone()).enabled=!0,n.guid=pc.guid.create(),r.addChild(n),n.setLocalPosition(pc.Vec3.ZERO),r.tags.has("hanging")?n.children[0].script.target.setUp():(n.children[0].script.target.setDown(),n.setLocalEulerAngles(-90,0,20),flipUp(n.children[0].script.target,i)),this._targets.push(n),this._activeTargets++}P3.utils.delay(.05*this._targetCount,function(){this.swayTargets(),this._ready=!0},null,this)},LightSpawnManager.prototype.onTargetHit=function(t,e){if(this._canUpdate&&this._ready)if(t.hit=!1,t.spinning)e.destroy();else if(t._spine){if(t.animating)return void e.destroy();this.app.fire("score:addMissed",1,"light"),t.animating=!0,e.destroy(),t.boing();var a=t.playAnimation(0,"hit",!1);P3.utils.delay(a.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else{if(t.spun)this._flipCount--,function playParticles(e){var a=e.clone();a.setPosition(t.entity.parent.getPosition()),a.enabled=!0,a.particlesystem.reset(),a.particlesystem.play(),P3.utils.delay(a.particlesystem.lifetime,function(){a.particlesystem.reset(),a.particlesystem.stop(),a.enabled=!1,a.destroy()},null,this)}.call(this,this.badHitEmitter),this.app.fire("score:addScore",-100,"light"),this.app.fire("score:addMissed",1,"light"),e.script.targetScore.setText("-100",new pc.Color(1,0,0,1));else{var i=100*this._sequence;this._flipCount++,this.app.fire("score:addScore",i,"light"),e.script.targetScore.setText("+"+i.toString(),new pc.Color(1,1,1,1)),this.app.fire("score:addHit",1,"light")}e.script.targetScore.animate(),t.entity.parent.tween1&&(t.entity.parent.tween1.stop(),t.entity.parent.tween2.stop()),t.twirl(900,function(){var e=this.swayTarget(t.entity.parent,0);t.entity.parent.tween1=e[0],t.entity.parent.tween2=e[1]}.bind(this)),t.spun=!t.spun,this._flipCount>=this._activeTargets&&this.onAllTargetsHit()}else e.destroy()},LightSpawnManager.prototype.swayTarget=function(t,e){var a=t.children[0].script.target.spun?175:-5,i=-1*a,r=t.tween(t.getLocalEulerAngles()).rotate({z:a},1,pc.QuadraticInOut),n=t.tween(t.getLocalEulerAngles()).rotate({z:i},1,pc.QuadraticInOut);return r.chain(n),n.on("complete",function(){r.delay(0),r.start()},this),r.delay(e),r.start(),[r,n]},LightSpawnManager.prototype.swayTargets=function(){for(var t=0;t<this._targets.length;t++){var e=this.swayTarget(this._targets[t],.1*t);this._targets[t].tween1=e[0],this._targets[t].tween2=e[1]}},LightSpawnManager.prototype.clearTargets=function(){for(var t=0;t<this._targets.length;t++)this._targets[t].tween1.stop(),this._targets[t].tween2.stop(),this._targets[t].destroy();this._targets.length=0},LightSpawnManager.prototype.onAllTargetsHit=function(){function flipDown(t,e){P3.utils.delay(.05*e,function(){t.flipDown()},null,this)}this._flipCount=0;for(var t=0;t<this._targets.length;t++){flipDown(this._targets[t].children[0].script.target,t)}P3.utils.delay(.05*(this._targets.length+1),function(){this.clearTargets(),this.createTargets()},null,this)},LightSpawnManager.prototype.stopAll=function(){function flipDown(t,e){P3.utils.delay(.05*e,function(){t.flipDown()},null,this)}this._canUpdate=!1;for(var t=0;t<this._targets.length;t++){flipDown(this._targets[t].children[0].script.target,t)}},LightSpawnManager.prototype.createRandomCharacter=function(t){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var e=Math.random()>.5?LightSpawnManager.SPAWN_TYPES.RAILS_L:LightSpawnManager.SPAWN_TYPES.RAILS_R,a=Math.floor(pc.math.random(0,this._rails.length)),i=this._rails[a],r=i.findByName("CurveStart").getLocalPosition().clone(),n=this["prefabs_"+this._skin],s=n[this._characterSpawnIndex].clone();s.setLocalPosition(r),s.enabled=!0,s.index=this._characterSpawnIndex,i.addChild(s),s.children[0].script.target.setDown(),s.children[0].script.target.flipUp(),this._extraTargets.push(s),this._currentCharacters.push(this._characterSpawnIndex);var h=s.getLocalScale().x/3;s.setLocalScale(h,h,h);var p=s.find("name","spine");if(p.length>0){var o=p[0].script.spine;o._skeleton.setSkinByName(common.theme),o.playAnimation(0,"move",!0)}this.characterMoveTween(s,a,e,t),this._characterSpawnIndex++,this._characterSpawnIndex>=n.length&&(this._characterSpawnIndex=0)}},LightSpawnManager.prototype.characterMoveTween=function(t,e,a,i){var r=a===LightSpawnManager.SPAWN_TYPES.RAILS_L?1:0,n=a===LightSpawnManager.SPAWN_TYPES.RAILS_L?0:1,s=a===LightSpawnManager.SPAWN_TYPES.RAILS_L?-1:1,h=new pc.Vec2,p=new pc.Vec2,o=new pc.Vec2,c=new pc.Vec2,l=new pc.Vec2,g=this._rails[e].script.rail;t.children[0].script.target.rail=g,t.enabled=!1;var d={time:r},u=new pc.Tween(d,pc.app._tweenManager).to({time:n},g.speed,pc[g.easing]).on("update",function(){t.enabled=!0,this.updateTargetCurve(t,e,d,s,h,p,o,c,l)},this).on("complete",function(){t.destroy(),this._extraTargets.splice(this._extraTargets.indexOf(t),1),this._currentCharacters.splice(this._currentCharacters.indexOf(t.index),1)},this).delay(i).start();t.moveTween=u},LightSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),e=t.getLocalPosition();e.x=Math.random()>.5?e.x:-e.x,t.setLocalPosition(e),this._currentPopup=t.script.appearSpine;var a=this["prefabs_"+this._skin][this._characterSpawnIndex],i=a.findByName("spine");this._currentPopup.createSpine(i,"TargetMira_Mira"===a.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].length&&(this._characterSpawnIndex=0)}},LightSpawnManager.SPAWN_TYPES={RAILS_L:1,RAILS_R:2};var PrecisionSpawnManager=pc.createScript("precisionSpawnManager");PrecisionSpawnManager.attributes.add("targetPrefabs_bigcitygreens",{type:"entity",array:!0,title:"Target Prefabs (bigcitygreens)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_descendants",{type:"entity",array:!0,title:"Target Prefabs (descendants)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_justrollwithit",{type:"entity",array:!0,title:"Target Prefabs (jrwi)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_vampirina",{type:"entity",array:!0,title:"Target Prefabs (vampirina)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_mmua",{type:"entity",array:!0,title:"Target Prefabs (mmua)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_gabby",{type:"entity",array:!0,title:"Target Prefabs (gabby)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_muppets",{type:"entity",array:!0,title:"Target Prefabs (muppets)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_tots",{type:"entity",array:!0,title:"Target Prefabs (tots)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_zombies",{type:"entity",array:!0,title:"Target Prefabs (zombies)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_mira",{type:"entity",array:!0,title:"Target Prefabs (mira)"}),PrecisionSpawnManager.attributes.add("targetPrefabs_udm",{type:"entity",array:!0,title:"Target Prefabs (udm)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_bigcitygreens",{type:"entity",array:!0,title:"Special Target Prefabs (bigcitygreens)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_descendants",{type:"entity",array:!0,title:"Special Target Prefabs (descendants)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_justrollwithit",{type:"entity",array:!0,title:"Special Target Prefabs (jrwi)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_vampirina",{type:"entity",array:!0,title:"Special Target Prefabs (vampirina)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_mmua",{type:"entity",array:!0,title:"Special Target Prefabs (mmua)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_gabby",{type:"entity",array:!0,title:"Special Target Prefabs (gabby)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_muppets",{type:"entity",array:!0,title:"Special Target Prefabs (muppets)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_tots",{type:"entity",array:!0,title:"Special Target Prefabs (tots)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_zombies",{type:"entity",array:!0,title:"Special Target Prefabs (zombies)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_mira",{type:"entity",array:!0,title:"Special Target Prefabs (mira)"}),PrecisionSpawnManager.attributes.add("specialTargetPrefabs_udm",{type:"entity",array:!0,title:"Special Target Prefabs (udm)"}),PrecisionSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity",array:!0,title:"Character Prefabs (bigcitygreens)"}),PrecisionSpawnManager.attributes.add("prefabs_descendants",{type:"entity",array:!0,title:"Character Prefabs (descendants)"}),PrecisionSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity",array:!0,title:"Character Prefabs (jrwi)"}),PrecisionSpawnManager.attributes.add("prefabs_vampirina",{type:"entity",array:!0,title:"Character Prefabs (vampirina)"}),PrecisionSpawnManager.attributes.add("prefabs_mmua",{type:"entity",array:!0,title:"Character Prefabs (MMUA)"}),PrecisionSpawnManager.attributes.add("prefabs_gabby",{type:"entity",array:!0,title:"Character Prefabs (Gabby)"}),PrecisionSpawnManager.attributes.add("prefabs_muppets",{type:"entity",array:!0,title:"Character Prefabs (muppets)"}),PrecisionSpawnManager.attributes.add("prefabs_tots",{type:"entity",array:!0,title:"Character Prefabs (tots)"}),PrecisionSpawnManager.attributes.add("prefabs_zombies",{type:"entity",array:!0,title:"Character Prefabs (zombies)"}),PrecisionSpawnManager.attributes.add("prefabs_mira",{type:"entity",array:!0,title:"Character Prefabs (mira)"}),PrecisionSpawnManager.attributes.add("prefabs_udm",{type:"entity",array:!0,title:"Character Prefabs (udm)"}),PrecisionSpawnManager.attributes.add("spritesAssets_bigcitygreens",{type:"asset",array:!0,title:"Sprites (bigcitygreens)"}),PrecisionSpawnManager.attributes.add("spritesAssets_descendants",{type:"asset",array:!0,title:"Sprites (descendants)"}),PrecisionSpawnManager.attributes.add("spritesAssets_justrollwithit",{type:"asset",array:!0,title:"Sprites (justrollwithit)"}),PrecisionSpawnManager.attributes.add("spritesAssets_vampirina",{type:"asset",array:!0,title:"Sprites (vampirina)"}),PrecisionSpawnManager.attributes.add("spritesAssets_mmua",{type:"asset",array:!0,title:"Sprites (mmua)"}),PrecisionSpawnManager.attributes.add("spritesAssets_gabby",{type:"asset",array:!0,title:"Sprites (gabby)"}),PrecisionSpawnManager.attributes.add("spritesAssets_muppets",{type:"asset",array:!0,title:"Sprites (muppets)"}),PrecisionSpawnManager.attributes.add("spritesAssets_tots",{type:"asset",array:!0,title:"Sprites (tots)"}),PrecisionSpawnManager.attributes.add("spritesAssets_zombies",{type:"asset",array:!0,title:"Sprites (zombies)"}),PrecisionSpawnManager.attributes.add("spritesAssets_mira",{type:"asset",array:!0,title:"Sprites (mira)"}),PrecisionSpawnManager.attributes.add("spritesAssets_udm",{type:"asset",array:!0,title:"Sprites (udm)"}),PrecisionSpawnManager.attributes.add("hitEmitter",{type:"entity",title:"Good Hit Emitter"}),PrecisionSpawnManager.attributes.add("badHitEmitter",{type:"entity",title:"Bad Hit Emitter"}),PrecisionSpawnManager.attributes.add("numTargets",{type:"number",default:6,title:"Targets per sequence"}),PrecisionSpawnManager.attributes.add("targetSprite",{type:"entity",title:"Target Sprite"}),PrecisionSpawnManager.attributes.add("targetBG",{type:"entity",title:"Target BG"}),PrecisionSpawnManager.attributes.add("screenHeader",{type:"entity",title:"Right Screen Header"}),PrecisionSpawnManager.prototype.initialize=function(){console.log("[PrecisionSpawnManager] Init"),common.minigame="precision",this._rails=[],this._occupiedRails=[],this._popupPositions=[],this._curves=[],this._skin=null,this._timeLimit=45,this._targets=[[],[],[],[],[]],this._extraTargets=[],this._characterSpawnIndex=0,this._currentCharacters=[],this._spawnCounter=0,this._spawnTypes=[PrecisionSpawnManager.SPAWN_TYPES.RAILS_L,PrecisionSpawnManager.SPAWN_TYPES.RAILS_R,PrecisionSpawnManager.SPAWN_TYPES.RAILS_L,PrecisionSpawnManager.SPAWN_TYPES.RAILS_R],this._specialTarget=null,this._spawnerTweens=[],this._canUpdate=!1,this._currentPopup=null,this.app.fire("manager:setGameData",{timed:!0,time:this._timeLimit}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.on("disable",this.onDisable,this),this.on("enable",this.onEnable,this),this._layerPositions=this.setupScene(),this.destroyed=!1,this.on("destroy",this.onDestroy.bind(this))},PrecisionSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},PrecisionSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this);for(var t=this._targets.flat(),e=0;e<t.length;e++)t[e].destroy();for(var a=0;a<this._extraTargets.length;a++)this._extraTargets[a].destroy();this._targets=[[],[],[],[]];for(var i=0;i<this._spawnerTweens.length;i++)this._spawnerTweens[i].stop();this._spawnerTweens.length=0,this._canUpdate=!1},PrecisionSpawnManager.prototype.onEnable=function(){this.app.fire("manager:setGameData",{timed:!0,time:this._timeLimit}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this._layerPositions=this.setupScene()},PrecisionSpawnManager.prototype.setupScene=function(){for(var t=this.entity.findByName("Environment").findByTag("layer"),e=[],a=0;a<t.length;a++){var i=t[a].getLocalPosition();e.push(i.y),t[a].setLocalPosition(i.x,-35,i.z)}return e},PrecisionSpawnManager.prototype.unfoldScene=function(t){this._skin=t;for(var e=this.entity.findByName("Environment").findByTag("layer"),a=0;a<this._layerPositions.length;a++){var i=this._layerPositions[a],r=e[a];tweenlayer.call(this,r,i,a,this)}function tweenlayer(t,e,a,i){t.tween(t.getLocalPosition()).to({y:e},1,pc.QuinticOut).delay(.1*a).on("complete",function(){a>=i._layerPositions.length-1&&i.onUnfoldComplete()},i).start()}},PrecisionSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this.entity.findByName("Environment").findByTag("collider"),e=0;e<t.length;e++)t[e].rigidbody.syncEntityToBody();this.startTargets()},PrecisionSpawnManager.prototype.startTargets=function(){this["prefabs_"+this._skin]=P3.utils.shuffleArray(this["prefabs_"+this._skin]),this._specialTarget=P3.utils.selectRandom(this["specialTargetPrefabs_"+this._skin]);var t=this["specialTargetPrefabs_"+this._skin].indexOf(this._specialTarget);this._rails=this.entity.findByPath("Environment/Paths").children,this.createCurves();common.difficulty;if("mmua"===common.skin||"vampirina"===common.skin){"easy";for(var e=0;e<this._rails.length;e++)this._rails[e].script.rail.speed=20}for(var a=0;a<this._rails.length;a++){P3.utils.selectRandom(this["targetPrefabs_"+this._skin]);this.spawnNewSequence(a)}this.spawnCharacters(),this.screenHeader.element.text="TARGET",this.targetSprite.element.spriteAsset=this["spritesAssets_"+this._skin][t].id,this.targetSprite.enabled=!0,this.targetBG.enabled=!0,this.screenHeader.enabled=!0,this._canUpdate=!0},PrecisionSpawnManager.prototype.spawnCharacters=function(){var t=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createRandomCharacter(.5)},this).start();this._spawnerTweens.push(t);var e=0,a=this.app.tween({}).to({},1,pc.Linear).repeat(4).on("loop",function(){var t=this["prefabs_"+this._skin][e].clone(),a=t.children[0].script.target;t.enabled=!0,a.setUp();var i=a.playAnimation(0,"popup",!1);P3.utils.delay(i.animation.duration,function(){a.playAnimation(0,"idle",!0)},this),this.entity.findByPath("Environment/character_spots").children[e].addChild(t),this._extraTargets.push(t),e++},this).start();this._spawnerTweens.push(a);var i=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(i)},PrecisionSpawnManager.prototype.addRailIcon=function(t,e,a){var i=this._rails[t],r=(i.script.rail,i.findByName("CurveStart").getLocalPosition().clone()),s=this._spawnTypes[t];this._spawnCounter++,this._spawnCounter%2==0?r.z-=.2:this._spawnCounter%3==0&&(r.z-=.4);var n=e.clone();n.special=!1,e===this._specialTarget&&(r.z=.2,n.special=!0),n.setLocalPosition(r),n.enabled=!0,n.rail=i,i.addChild(n),n.children[0].script.target.setUp();var p=n.getLocalScale().x/3;n.setLocalScale(p,p,p),this.moveTween.call(this,n,t,a,s),this._targets[t].push(n)},PrecisionSpawnManager.prototype.createCurves=function(){for(var t=0;t<this._rails.length;t++){for(var e=this._rails[t],a=e.script.rail,i=e.findByTag("curve"),r=e.findByName("CurveStart"),s=e.findByName("CurveEnd").getLocalPosition().x-r.getLocalPosition().x,n=[],p=[],o=0;o<i.length;o++){var c=i[o].getLocalPosition(),h=1/(s/(c.x-r.getLocalPosition().x));n.push(h,c.y),p.push(h,c.x)}var l=new pc.Curve(p);l.type=pc[a.interpolation];var g=new pc.Curve(n);g.type=pc[a.interpolation],this._curves.push([l,g])}},PrecisionSpawnManager.prototype.moveTween=function(t,e,a,i){var r=i===PrecisionSpawnManager.SPAWN_TYPES.RAILS_L?1:0,s=i===PrecisionSpawnManager.SPAWN_TYPES.RAILS_L?0:1,n=this._rails[e].script.rail;t.children[0].script.target.rail=n,t.enabled=!1;var p={time:r},o=new pc.Tween(p,pc.app._tweenManager).to({time:s},n.speed,pc[n.easing]).on("update",function(){t.enabled=!0,this.updateTargetCurve(t,e,p)},this).on("complete",function(){this.onTargetFinishedMoving(a,t,e)},this).delay(a+.5).start();t.moveTween=o},PrecisionSpawnManager.prototype.updateTargetCurve=function(t,e,a){this._rails[e].script.rail;var i=this._curves[e][0].value(a.time),r=this._curves[e][1].value(a.time),s=t.getLocalPosition();t.setLocalPosition(i,r,s.z)},PrecisionSpawnManager.prototype.onTargetFinishedMoving=function(t,e,a){e.destroy(),this._targets[a].splice(this._targets[a].indexOf(e),1),t===this.numTargets-1&&(this._occupiedRails.splice(this._occupiedRails.indexOf(a),1),this.spawnNewSequence(a))},PrecisionSpawnManager.prototype.spawnNewSequence=function(t){for(var e=P3.utils.selectRandom(this["targetPrefabs_"+this._skin]),a=[],i=Math.floor(pc.math.random(1,Math.floor(this.numTargets/2))),r=0;r<this.numTargets;r++)r<i?a.push(this._specialTarget):a.push(e);a=P3.utils.shuffleArray(a);for(var s=0;s<a.length;s++){var n=a[s];this.addRailIcon(t,n,s)}this._occupiedRails.push(t)},PrecisionSpawnManager.prototype.reset=function(){this._canUpdate=!1;for(var t=0;t<this._targets.length;t++){for(var e=0;e<this._targets[t].length;e++)this._targets[t][e].destroy();this._targets[t].length=0}for(var a=0;a<this._extraTargets.length;a++)this._extraTargets[a].destroy();this.begin()},PrecisionSpawnManager.prototype.stopAll=function(){this._canUpdate=!1,this.screenHeader.enabled=!1,this.targetSprite.enabled=!1,this.targetBG.enabled=!1;for(var t=this._targets.flat(),e=0;e<t.length;e++){var a=t[e];a.moveTween&&a.moveTween.stop(),a.flipTween&&a.flipTween.stop(),flip(a)}for(var i=0;i<this._extraTargets.length;i++)flip(this._extraTargets[i]);function flip(t){new pc.Tween({t:0},pc.app._tweenManager).to({t:1},1,pc.Linear).on("complete",function(){t.children[0]&&t.children[0].script.target.flipDown()}).start()}for(var r=0;r<this._spawnerTweens.length;r++)this._spawnerTweens[r].stop();this._spawnerTweens.length=0},PrecisionSpawnManager.prototype.onTargetHit=function(t,e){if(this._canUpdate){var a=t.entity.parent;if(t._spine){if(t.animating)return void e.destroy();this.app.fire("score:addMissed",1,"precision"),t.animating=!0,e.destroy(),t.boing();var i=t.playAnimation(0,"hit",!1);P3.utils.delay(i.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else{var r="mmua"===common.skin||"vampirina"===common.skin?30:20;if(a.special){var s=.5*(r-a.rail.script.rail.speed)*100;playParticles.call(this,this.hitEmitter),this.app.fire("score:addScore",s,"precision"),this.app.fire("score:addHit",1,"precision"),e.script.targetScore.setText("+"+s.toString(),new pc.Color(1,1,1,1)),e.script.targetScore.animate()}else playParticles.call(this,this.badHitEmitter),this.app.fire("score:addScore",-100,"precision"),this.app.fire("score:addMissed",1,"precision"),e.script.targetScore.setText("-100",new pc.Color(1,0,0,1)),e.script.targetScore.animate();t.entity.parent.slot?(t.entity.parent.slot.occupied=!1,t.entity.parent.slot=null,this._extraTargets.splice(this._extraTargets.indexOf(t),1),t.entity.parent.destroy()):t.flipDownScale(!1,function(){t.entity.parent.destroy()}.bind(this))}}function playParticles(t){var e=t.clone();e.setPosition(a.getPosition()),e.enabled=!0,e.particlesystem.reset(),e.particlesystem.play(),P3.utils.delay(t.particlesystem.lifetime,function(){e.particlesystem.reset(),e.particlesystem.stop(),e.enabled=!1,e.destroy()},null,this)}},PrecisionSpawnManager.prototype.createRandomCharacter=function(t){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var e=Math.random()>.5?PrecisionSpawnManager.SPAWN_TYPES.RAILS_L:PrecisionSpawnManager.SPAWN_TYPES.RAILS_R,a=Math.floor(pc.math.random(0,this._rails.length)),i=this._rails[a],r=i.findByName("CurveStart").getLocalPosition().clone();r.z+=.3;var s=this["prefabs_"+this._skin],n=s[this._characterSpawnIndex].clone();n.setLocalPosition(r),n.enabled=!0,n.index=this._characterSpawnIndex,i.addChild(n),n.children[0].script.target.setDown(),n.children[0].script.target.flipUp(),this._extraTargets.push(n),this._currentCharacters.push(this._characterSpawnIndex);var p=n.getLocalScale().x/3;n.setLocalScale(p,p,p);var o=n.find("name","spine");if(o.length>0){var c=o[0].script.spine;c._skeleton.setSkinByName(common.theme),c.playAnimation(0,"move",!0)}this.characterMoveTween(n,a,e,t),this._characterSpawnIndex++,this._characterSpawnIndex>=s.length&&(this._characterSpawnIndex=0)}},PrecisionSpawnManager.prototype.characterMoveTween=function(t,e,a,i){var r=a===PrecisionSpawnManager.SPAWN_TYPES.RAILS_L?1:0,s=a===PrecisionSpawnManager.SPAWN_TYPES.RAILS_L?0:1,n=a===PrecisionSpawnManager.SPAWN_TYPES.RAILS_L?-1:1,p=new pc.Vec2,o=new pc.Vec2,c=new pc.Vec2,h=new pc.Vec2,l=new pc.Vec2,g=this._rails[e].script.rail;t.children[0].script.target.rail=g,t.enabled=!1;var d={time:r},y=new pc.Tween(d,pc.app._tweenManager).to({time:s},g.speed,pc[g.easing]).on("update",function(){t.enabled=!0,this.updateTargetCurve(t,e,d,n,p,o,c,h,l)},this).on("complete",function(){t.destroy(),this._extraTargets.splice(this._extraTargets.indexOf(t),1),this._currentCharacters.splice(this._currentCharacters.indexOf(t.index),1)},this).delay(i).start();t.moveTween=y},PrecisionSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),e=t.getLocalPosition();e.x=Math.random()>.5?e.x:-e.x,t.setLocalPosition(e),this._currentPopup=t.script.appearSpine;var a=this["prefabs_"+this._skin][this._characterSpawnIndex],i=a.findByName("spine");this._currentPopup.createSpine(i,"TargetMira_Mira"===a.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].length&&(this._characterSpawnIndex=0)}},PrecisionSpawnManager.SPAWN_TYPES={RAILS_L:1,RAILS_R:2};var STDSpawnManager=pc.createScript("stdSpawnManager");STDSpawnManager.attributes.add("standardTargetPrefabs_bigcitygreens",{type:"entity",array:!0,title:"Standard Targets (bigcitygreens)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_descendants",{type:"entity",array:!0,title:"Standard Targets (descendants)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_justrollwithit",{type:"entity",array:!0,title:"Standard Targets (justrollwithit)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_vampirina",{type:"entity",array:!0,title:"Standard Targets (vamprina)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_mmua",{type:"entity",array:!0,title:"Standard Targets (mmua)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_gabby",{type:"entity",array:!0,title:"Standard Targets (gabby)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_muppets",{type:"entity",array:!0,title:"Standard Targets (muppets)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_tots",{type:"entity",array:!0,title:"Standard Targets (tots)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_zombies",{type:"entity",array:!0,title:"Standard Targets (zombies)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_mira",{type:"entity",array:!0,title:"Standard Targets (mira)"}),STDSpawnManager.attributes.add("standardTargetPrefabs_udm",{type:"entity",array:!0,title:"Standard Targets (udm)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_bigcitygreens",{type:"entity",array:!0,title:"Balloon Target (bigcitygreens)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_descendants",{type:"entity",array:!0,title:"Balloon Target (descendants)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_justrollwithit",{type:"entity",array:!0,title:"Balloon Target (justrollwithit)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_vampirina",{type:"entity",array:!0,title:"Balloon Target (vampirina)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_mmua",{type:"entity",array:!0,title:"Balloon Target (mmua)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_gabby",{type:"entity",array:!0,title:"Balloon Target (gabby)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_muppets",{type:"entity",array:!0,title:"Balloon Target (muppets)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_tots",{type:"entity",array:!0,title:"Balloon Target (tots)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_zombies",{type:"entity",array:!0,title:"Balloon Target (zombies)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_mira",{type:"entity",array:!0,title:"Balloon Target (mira)"}),STDSpawnManager.attributes.add("balloonTargetPrefabs_udm",{type:"entity",array:!0,title:"Balloon Target (udm)"}),STDSpawnManager.attributes.add("playarea",{type:"entity",title:"playarea"}),STDSpawnManager.attributes.add("popParticles",{type:"entity",title:"Pop Particles"}),STDSpawnManager.attributes.add("goodHitEmitter",{type:"entity",title:"Good Hit Emitter"}),STDSpawnManager.attributes.add("maxTime",{type:"number",default:30,title:"Max Speed Time"}),STDSpawnManager.attributes.add("maxMisses",{type:"number",default:3,title:"Max Missed Targets"}),STDSpawnManager.attributes.add("targetSpeed",{type:"number",default:15,title:"Target Speed"}),STDSpawnManager.attributes.add("easyFrequencyCurve",{type:"curve",title:"Frequency Curve",description:"[Easy] Controls time between target spawns"}),STDSpawnManager.attributes.add("mediumFrequencyCurve",{type:"curve",title:"Frequency Curve",description:"[Medium] Controls time between target spawns"}),STDSpawnManager.attributes.add("hardFrequencyCurve",{type:"curve",title:"Frequency Curve",description:"[Hard] Controls time between target spawns"}),STDSpawnManager.attributes.add("badHitEmitter",{type:"entity",title:"Bad Hit Emitter"}),STDSpawnManager.attributes.add("charactersPerSpawn",{type:"number",default:1,title:"Characters per spawn"}),STDSpawnManager.attributes.add("characterDelay",{type:"number",default:5,title:"Delay between Characters (s)"}),STDSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity",array:!0,title:"Character Prefabs (bigcitygreens)"}),STDSpawnManager.attributes.add("prefabs_descendants",{type:"entity",array:!0,title:"Character Prefabs (descendants)"}),STDSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity",array:!0,title:"Character Prefabs (jrwi)"}),STDSpawnManager.attributes.add("prefabs_vampirina",{type:"entity",array:!0,title:"Character Prefabs (vampirina)"}),STDSpawnManager.attributes.add("prefabs_mmua",{type:"entity",array:!0,title:"Character Prefabs (mmua)"}),STDSpawnManager.attributes.add("prefabs_gabby",{type:"entity",array:!0,title:"Character Prefabs (gabby)"}),STDSpawnManager.attributes.add("prefabs_muppets",{type:"entity",array:!0,title:"Character Prefabs (muppets)"}),STDSpawnManager.attributes.add("prefabs_tots",{type:"entity",array:!0,title:"Character Prefabs (tots)"}),STDSpawnManager.attributes.add("prefabs_zombies",{type:"entity",array:!0,title:"Character Prefabs (zombies)"}),STDSpawnManager.attributes.add("prefabs_mira",{type:"entity",array:!0,title:"Character Prefabs (mira)"}),STDSpawnManager.attributes.add("prefabs_udm",{type:"entity",array:!0,title:"Character Prefabs (udm)"}),STDSpawnManager.attributes.add("targetBG",{type:"entity",title:"Target BG"}),STDSpawnManager.attributes.add("targetHeader",{type:"entity",title:"Target Header"}),STDSpawnManager.prototype.initialize=function(){console.log("[STDSpawnManager] Init"),common.minigame="drop",this._rails=[],this._extraTargets=[],this._spawnerTweens=[],this._characterSpawnIndex=0,this._curves=[],this._currentCharacters=[],this._difficulties={easy:{speed:6,amplitude:[-1,1]},medium:{speed:4,amplitude:[-2,2]},hard:{speed:3,amplitude:[-4,4]}},"mmua"!==common.skin&&"vampirina"!==common.skin||(this._difficulties.easy={speed:8,amplitude:[-.5,.5]}),this._timeLimit=45,this._cooldown=0,this._elapsedTime=0,this._canUpdate=!1,this._canSpawnNew=!0,this._currentPopup=null,this._missedTargets=0,this._hitTargets=0,this._multiplier=0,this.app.fire("manager:setGameData",{timed:!0,time:this._timeLimit}),this._targets=[],this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.on("disable",this.onDisable,this),this.on("enable",this.onDisable,this),this._layerPositions=this.setupScene(),this.destroyed=!1,this.on("destroy",this.onDestroy.bind(this))},STDSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},STDSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this._cooldown=0,this._elapsedTime=0,this._canUpdate=!1,this._canSpawnNew=!0,this._missedTargets=0,this._hitTargets=0;for(var t=0;t<this._targets.length;t++)this._targets[t].destroy();this._targets=[];for(var a=0;a<this._spawnerTweens.length;a++)this._spawnerTweens[a].stop()},STDSpawnManager.prototype.onEnable=function(){this.app.fire("manager:setGameData",{timed:!1}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this._layerPositions=this.setupScene()},STDSpawnManager.prototype.setupScene=function(){for(var t=this.entity.findByName("Environment").findByTag("layer"),a=[],e=0;e<t.length;e++){var r=t[e].getLocalPosition();a.push(r.y),t[e].setLocalPosition(r.x,-25,r.z)}return a},STDSpawnManager.prototype.unfoldScene=function(t){this._skin=t;for(var a=this.entity.findByName("Environment").findByTag("layer"),e=0;e<this._layerPositions.length;e++){var r=this._layerPositions[e],i=a[e];tweenlayer.call(this,i,r,e,this)}function tweenlayer(t,a,e,r){t.tween(t.getLocalPosition()).to({y:a},1,pc.QuinticOut).delay(.1*e).on("complete",function(){e>=r._layerPositions.length-1&&r.onUnfoldComplete()},r).start()}},STDSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this.entity.findByName("Environment").findByTag("collider"),a=0;a<t.length;a++)t[a].rigidbody.syncEntityToBody();this.startTargets()},STDSpawnManager.prototype.startTargets=function(){this._canUpdate=!0,this["prefabs_"+this._skin]=P3.utils.shuffleArray(this["prefabs_"+this._skin]),this._rails=this.entity.findByPath("Environment/Paths").children,this.targetHeader.element.text="TARGET",this.targetBG.enabled=!0,this.targetHeader.enabled=!0,this.app.root.root.findByName("std-targets").findByName(this._skin).enabled=!0,this.createCurves();var t=this.app.tween({}).to({},this.characterDelay,pc.Linear).loop(!0).on("loop",function(){for(var t=0;t<this.charactersPerSpawn;t++)this.createRandomCharacter(.5*t)},this).delay(5).start();this._spawnerTweens.push(t);var a=0,e=this.app.tween({}).to({},1,pc.Linear).repeat(4).on("loop",function(){var t=this["prefabs_"+this._skin][a].clone(),e=t.children[0].script.target;t.enabled=!0,e.setUp();var r=e.playAnimation(0,"popup",!1);P3.utils.delay(r.animation.duration,function(){e.playAnimation(0,"idle",!0)},this),this.entity.findByPath("Environment/character_spots").children[a].addChild(t),this._extraTargets.push(t),a++},this).delay(5).start();this._spawnerTweens.push(e);var r=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(r)},STDSpawnManager.prototype.createCurves=function(){for(var t=0;t<this._rails.length;t++){for(var a=this._rails[t],e=a.script.rail,r=a.findByTag("curve"),i=a.findByName("CurveStart"),n=a.findByName("CurveEnd").getLocalPosition().x-i.getLocalPosition().x,s=[],o=[],p=0;p<r.length;p++){var d=r[p].getLocalPosition(),l=1/(n/(d.x-i.getLocalPosition().x));s.push(l,d.y),o.push(l,d.x)}var h=new pc.Curve(o);h.type=pc[e.interpolation];var c=new pc.Curve(s);c.type=pc[e.interpolation],this._curves.push([h,c])}},STDSpawnManager.prototype.stopAll=function(){this._canSpawnNew=!1,this.targetBG.enabled=!1,this.targetHeader.enabled=!1,this.app.root.root.findByName("std-targets").findByName(this._skin).enabled=!1},STDSpawnManager.prototype.onTargetHit=function(t,a){if(this._canUpdate)if(t._spine){if(t.animating)return void a.destroy();this.app.fire("score:addMissed",1,"drop"),t.animating=!0,a.destroy(),t.boing();var e=t.playAnimation(0,"hit",!1);P3.utils.delay(e.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else{var r=t.entity.parent,i=null;for(var n in"balloon"===r.stdType?(playParticles.call(this,this.popParticles),i=-100,this._multiplier=0,r.hanger.speed=-2*this.targetSpeed,r.hanger.decoupled=!0,r.hanger.moveTween.stop(),a.script.targetScore.setText("-100",new pc.Color(1,0,0,1)),this.app.fire("score:addMissed",1,"drop")):"hanger"===r.stdType&&(this._multiplier++,i=100*this._multiplier,r.balloon.speed=2*this.targetSpeed,r.balloon.decoupled=!0,r.balloon.moveTween.stop(),a.script.targetScore.setText("+"+i,new pc.Color(1,1,1,1)),playParticles.call(this,this.goodHitEmitter),this.app.fire("score:addHit",1,"drop")),this._targets)this._targets[n].guid===r.guid&&this._targets.splice(n,1);r.destroy(),a.script.targetScore.animate(),this.app.fire("score:addScore",i,"drop")}function playParticles(a){var e=a.clone();e.setPosition(t.entity.parent.getPosition()),e.enabled=!0,e.particlesystem.reset(),e.particlesystem.play(),P3.utils.delay(e.particlesystem.lifetime,function(){e.particlesystem.reset(),e.particlesystem.stop(),e.enabled=!1,e.destroy()},null,this)}},STDSpawnManager.prototype.update=function(t){var a=common.difficulty;if("mmua"!==common.skin&&"vampirina"!==common.skin||(a="easy"),this._canUpdate){if(this._cooldown-=t,this._elapsedTime+=t,this._elapsedTime=Math.min(this._elapsedTime,30),this._cooldown<=0){var e=this._elapsedTime/this.maxTime;this._cooldown=this[a+"FrequencyCurve"].value(e),this.generateNewTarget()}for(var r=this._targets.length-1;r>=0;r--){var i=this._targets[r];if(i.decoupled){var n=i.getLocalPosition();i.toDestroy||n.y>i.maxY||n.y<i.minY?(i.destroy(),this._targets.splice(r,1)):i.setLocalPosition(n.x,n.y+i.speed*t,n.z)}}}},STDSpawnManager.prototype.createTargetCurve=function(t){var a=common.difficulty;"mmua"!==common.skin&&"vampirina"!==common.skin||(a="easy");for(var e=this.playarea.findByTag("point"),r=e[0].getLocalPosition().x,i=e[1].getLocalPosition().x,n=e[0].getLocalPosition().y,s=e[3].getLocalPosition().y,o=pc.math.random(r,i),p=[],d=0;d<t;d++){var l=1/t*d,h=o+pc.math.random(this._difficulties[a].amplitude[0],this._difficulties[a].amplitude[1]);p.push(l,h)}p.push(1,o);var c=new pc.Curve(p);c.type=pc.CURVE_SPLINE;var g=new pc.Curve([0,n,1,s]);return g.type=pc.CURVE_LINEAR,[c,g]},STDSpawnManager.prototype.generateNewTarget=function(){if(this._canSpawnNew){var t=common.difficulty;"mmua"!==common.skin&&"vampirina"!==common.skin||(t="easy");var a=this.createTargetCurve(5),e=this.playarea.findByTag("point"),r=Math.random()>=.5?1:-1,i=this["standardTargetPrefabs_"+this._skin],n=i[Math.floor(Math.random()*i.length)].clone();n.enabled=!0,n.speed=this.targetSpeed*r,n.guid=pc.guid.create(),n.toDestroy=!1,this.playarea.addChild(n),this._targets.push(n);var s=this["balloonTargetPrefabs_"+this._skin],o=s[Math.floor(Math.random()*s.length)].clone();o.enabled=!0,o.speed=this.targetSpeed*r,o.guid=pc.guid.create(),o.toDestroy=!1,this.playarea.addChild(o),this._targets.push(o),n.balloon=o,n.stdType="hanger",o.hanger=n,o.stdType="balloon",n.decoupled=o.decoupled=!1;var p=Math.random()>.5?1:0,d=1===p?0:1;n.setLocalPosition(a[0].value(d),a[1].value(d),-.1),o.setLocalPosition(a[0].value(d),a[1].value(d)+8,-.1);var l={t:d},h=this.app.tween(l).to({t:p},this._difficulties[t].speed,pc.Linear).on("update",function(){var t=a[0].value(l.t),e=a[1].value(l.t);n.setLocalPosition(t,e,-.1),o.setLocalPosition(t,e+8,-.1)},this).on("complete",function(){this._targets.splice(this._targets.indexOf(n),1),this._targets.splice(this._targets.indexOf(o),1),n.destroy(),o.destroy()},this).start();n.minY=e[0].getLocalPosition().y,n.maxY=e[3].getLocalPosition().y,n.moveTween=h,o.moveTween=h}},STDSpawnManager.prototype.createRandomCharacter=function(t){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var a=Math.random()>.5?STDSpawnManager.SPAWN_TYPES.RAILS_L:STDSpawnManager.SPAWN_TYPES.RAILS_R,e=Math.floor(pc.math.random(0,this._rails.length)),r=this._rails[e],i=r.findByName("CurveStart").getLocalPosition().clone(),n=this["prefabs_"+this._skin],s=n[this._characterSpawnIndex].clone();s.setLocalPosition(i),s.enabled=!0,s.index=this._characterSpawnIndex,r.addChild(s),s.children[0].script.target.setDown(),s.children[0].script.target.flipUp(),this._extraTargets.push(s),this._currentCharacters.push(this._characterSpawnIndex);var o=s.getLocalScale().x/3;s.setLocalScale(o,o,o);var p=s.find("name","spine");if(p.length>0){var d=p[0].script.spine;d._skeleton.setSkinByName(common.theme),d.playAnimation(0,"move",!0)}this.characterMoveTween(s,e,a,t),this._characterSpawnIndex++,this._characterSpawnIndex>=n.length&&(this._characterSpawnIndex=0)}},STDSpawnManager.prototype.updateTargetCurve=function(t,a,e,r,i,n,s,o,p){this._rails[a].script.rail;var d=this._curves[a][0].value(e.time),l=this._curves[a][1].value(e.time);t.setLocalPosition(d,l,0)},STDSpawnManager.prototype.characterMoveTween=function(t,a,e,r){var i=e===STDSpawnManager.SPAWN_TYPES.RAILS_L?1:0,n=e===STDSpawnManager.SPAWN_TYPES.RAILS_L?0:1,s=e===STDSpawnManager.SPAWN_TYPES.RAILS_L?-1:1,o=new pc.Vec2,p=new pc.Vec2,d=new pc.Vec2,l=new pc.Vec2,h=new pc.Vec2,c=this._rails[a].script.rail;t.children[0].script.target.rail=c,t.enabled=!1;var g={time:i},y=new pc.Tween(g,pc.app._tweenManager).to({time:n},c.speed,pc[c.easing]).on("update",function(){t.enabled=!0,this.updateTargetCurve(t,a,g,s,o,p,d,l,h)},this).on("complete",function(){t.destroy(),this._extraTargets.splice(this._extraTargets.indexOf(t),1),this._currentCharacters.splice(this._currentCharacters.indexOf(t.index),1)},this).delay(r).start();t.moveTween=y},STDSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),a=t.getLocalPosition();a.x=Math.random()>.5?a.x:-a.x,t.setLocalPosition(a),this._currentPopup=t.script.appearSpine;var e=this["prefabs_"+this._skin][this._characterSpawnIndex],r=e.findByName("spine");this._currentPopup.createSpine(r,"TargetMira_Mira"===e.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].length&&(this._characterSpawnIndex=0)}},STDSpawnManager.SPAWN_TYPES={RAILS_L:1,RAILS_R:2};var ResultsManager=pc.createScript("resultsManager");ResultsManager.attributes.add("replayButton",{type:"entity",title:"Replay Button"}),ResultsManager.attributes.add("playButton",{type:"entity",title:"Play Button"}),ResultsManager.attributes.add("achievementsButton",{type:"entity",title:"Achievements Button"}),ResultsManager.attributes.add("backButton",{type:"entity",title:"Back Button"}),ResultsManager.attributes.add("scoreEntity",{type:"entity",title:"Score Display"}),ResultsManager.attributes.add("exitDoors",{type:"entity",title:"Exit Doors"}),ResultsManager.attributes.add("accuracyValue",{type:"entity"}),ResultsManager.attributes.add("entries",{type:"entity",array:!0}),ResultsManager.attributes.add("picker",{type:"entity"}),ResultsManager.attributes.add("mainPanel",{type:"entity"}),ResultsManager.attributes.add("achievementsPanel",{type:"entity"}),ResultsManager.attributes.add("gameTheme",{type:"number",enum:[{halloween:790743},{evergreen:816603},{winter:825017}]}),ResultsManager.attributes.add("splashTheme",{type:"number",enum:[{halloween:808068},{evergreen:815693},{winter:825018}]}),ResultsManager.prototype.initialize=function(){this._clicked=!1,this._canClick=!1,this._playerLeaderboardPos=0,this._totalScore=0,this._hasPrevScore=!1;this._leaderboardNames=P3.utils.shuffleArray({vampirina:["Vampirina","Polly","Gregoria","Demi"],bigcitygreens:["Cricket","Tilly","Gramma Alice","Bill"],descendants:["Mal","Evie","Jay","Carlos"],justrollwithit:["Byron","Blair","Rachel","Owen"],gabby:["Gabby Duran","Jeremy","Wesley","Principal Swift"],mmua:["Mickey Mouse","Minnie Mouse","Donald","Pluto"],muppets:["Miss Piggy","Fonzie","Kermit","Gonzo"],tots:["Pip","Freddy","K.C."],zombies:["Addison","Zed","Wyatt","Willa"],mira:["Mira","Chikku","Mikku"],udm:["Reina","Pepper","Andres","Nory"],chicken:[]}[common.skin]),this.replayButton.collision.on("collisionstart",this.onReplayButtonTouch,this),this.playButton.collision.on("collisionstart",this.onPlayButtonTouch,this),this.achievementsButton.collision.on("collisionstart",this.onAchievementsButtonTouch,this),this.backButton.collision.on("collisionstart",this.onBackButtonTouch,this),this._scoreManager=this.app.root.findByName("Root").script.scoreManager,this.app.on("results:activate",function(){this._canClick=!0,this.moveCartBack()},this),this.on("enable",this.onEnable,this),this.onEnable()},ResultsManager.prototype.postInitialize=function(){var e=this.entity.findByPath("SpineCharacters/"+common.skin),t=this.entity.findByPath("SpineCharacters/"+common.skin).children;e.enabled=!0;for(var o=0;o<t.length;o++){var a=t[o].script.spine;a._skeleton.setSkinByName(common.theme);try{a.playAnimation(0,"win",!0)}catch(e){console.warn("No 'win' animation found for "+t[o].name),a.playAnimation(0,"idle",!0)}a.entity.spine.spine.update(Math.random())}this.initLeaderboard()},ResultsManager.prototype.moveCartBack=function(){var e=this.app.root.findByName("Cart"),t=e.getLocalPosition().clone();e.tween(e.getLocalPosition()).to({z:t.z-3,y:t.y-1},1,pc.QuadraticOut).start()},ResultsManager.prototype.restoreScores=function(e){console.log("[ResultsManager] RESTORE SCORES");var t=300,o=5.781;function setText(e,a,i,s){if(void 0!==a){if(s&&(e.element.outlineThickness=1,e.element.color=new pc.Color(249/255,207/255,11/255)),e.element.text=a+"."+i.toString(),e.element.width<t){for(var n=t-e.element.width,r=Math.floor(n/o),l=".",c=0;c<r;c++)l+=".";e.element.text=a+l+i.toString()}}else e.element.text=""}for(var a=JSON.parse(localStorage.getItem("DSN00962_scores_"+common.skin+common.cookieVersion)),i=0;i<a.length;i++){var s=a[i],n=s[1]*pc.math.random(1,1.11);n>5e4||(s[1]=Math.floor(n),a[i]=s)}localStorage.setItem("DSN00962_scores_"+common.skin+common.cookieVersion,JSON.stringify(a)),a.push([common.profileName,e]),a.sort(function(e,t){return t[1]-e[1]});for(var r=0;r<a.length;r++){var l=a[r],c=l[0]===common.profileName,h=l[0];if(c){var u=this.picker.getLocalPosition(),m=this.entries[r].getLocalPosition().y;e,this.picker.setLocalPosition(u.x,m,u.z),this.app.fire("achievements:setData",{leaderboard:r+1})}setText.call(this,this.entries[r],h,l[1],c)}},ResultsManager.prototype.initLeaderboard=function(){console.log("[ResultsManager] INIT LEADERBOARD");var e=300,t=5.781,o=parseInt(localStorage.getItem("DSN00962_hiscore_"+common.skin+common.cookieVersion)||0);if(this._hasPrevScore)this.restoreScores(o);else{o>=4e4?this._playerLeaderboardPos=0:o>=3e4?this._playerLeaderboardPos=1:o>=2e4?this._playerLeaderboardPos=2:o>=1e4||3===this._leaderboardNames.length?this._playerLeaderboardPos=3:o>=0&&(this._playerLeaderboardPos=4),this.app.fire("achievements:setData",{leaderboard:this._playerLeaderboardPos+1});for(var a,i,s,n,r=[],l=this._leaderboardNames.length+1,c=0;c<l;c++){var h=0,u=this._leaderboardNames[0],m=c===this._playerLeaderboardPos,p=Math.max(o,1e4);if(a=c,i=this._playerLeaderboardPos,s=p,void 0,n=1+(10*(i-a)+pc.math.random(0,6))/100,h=Math.floor(s*n),m){var d=this.picker.getLocalPosition(),y=this.entries[c].getLocalPosition().y;h=o,u=common.profileName,this.picker.setLocalPosition(d.x,y,d.z)}else this._leaderboardNames.splice(0,1),r.push([u,h]);setText.call(this,this.entries[c],u,h,m)}localStorage.setItem("DSN00962_scores_"+common.skin+common.cookieVersion,JSON.stringify(r))}function setText(o,a,i,s){if(void 0!==a){if(s&&(o.element.outlineThickness=1,o.element.color=new pc.Color(249/255,207/255,11/255)),o.element.text=a+"."+i.toString(),o.element.width<e){for(var n=e-o.element.width,r=Math.floor(n/t),l=".",c=0;c<r;c++)l+=".";o.element.text=a+l+i.toString()}}else o.element.text=""}},ResultsManager.prototype.onEnable=function(){this._clicked=!1,this.openResultsDoors();var e=this._scoreManager.getAllScores();for(var t in e)this._totalScore+=e[t];var o=localStorage.getItem("DSN00962_hiscore_"+common.skin+common.cookieVersion);o&&(console.log("[ResultsManager] Has previous score!"),this._hasPrevScore=!0,o=parseInt(o)),this._totalScore>o&&(o=this._totalScore,localStorage.setItem("DSN00962_hiscore_"+common.skin+common.cookieVersion,o.toString()));var a=100-this._scoreManager.getTotalMisses()/this._scoreManager.getShots()*100||0;this.accuracyValue.element.text=Math.round(a)+"%",this.app.fire("achievements:setData",{score:this._totalScore,accuracy:a});var i={score:0};this.app.tween(i).to({score:this._totalScore},4,pc.Linear).on("update",function(){this.scoreEntity.element.text=Math.floor(i.score).toString()},this).delay(.5).start(),this._skin=this.app.root.findByName("Root").script.gameManager._skin},ResultsManager.prototype.onReplayButtonTouch=function(e){!this._canClick||this._clicked||e.other.script.projectile.getHit()||(this._clicked=!0,console.log(common.skin),this.app.fire("fade:out"),this.changeScenes(this.gameTheme,!1))},ResultsManager.prototype.onPlayButtonTouch=function(e){!this._canClick||this._clicked||e.other.script.projectile.getHit()||(this._clicked=!0,console.log("[ResultsManager] Play button pressed."),this.app.fire("fade:out"),this.app.fire("AssetManager:loadSplashAssets",function(){this.changeScenes(this.splashTheme,!0)},this))},ResultsManager.prototype.onAchievementsButtonTouch=function(){this.mainPanel.enabled=!1,this.achievementsPanel.enabled=!0},ResultsManager.prototype.onBackButtonTouch=function(){this.mainPanel.enabled=!0,this.achievementsPanel.enabled=!1},ResultsManager.prototype.changeScenes=function(e,t){switch(common.difficulty){case"easy":common.difficulty="medium";break;default:case"medium":case"hard":common.difficulty="hard"}localStorage.setItem("DSN00962_difficulty",common.difficulty),setTimeout(function(){this.app._tweenManager.destroy(),console.log("[ResultsManager] Destroyed old hierarchy.");this.app.root.destroy();this.loadScene(e,function(){setTimeout(function(){t||this.app.fire("skin:setSkin",common.skin)}.bind(this),500)}.bind(this))}.bind(this),100)},ResultsManager.prototype.loadScene=function(e,t){var o=e+".json";this.app.loadSceneHierarchy(o,function(e,o){e?console.error(e):t(o)})},ResultsManager.prototype.openResultsDoors=function(){var e=this.exitDoors.children[0],t=this.exitDoors.children[1];e.tween(e.getLocalEulerAngles()).rotate({y:-70},1,pc.QuarticOut).start(),t.tween(t.getLocalEulerAngles()).rotate({y:70},1,pc.QuarticOut).start()};var AppearSpine=pc.createScript("appearSpine");AppearSpine.attributes.add("destination",{type:"entity"}),AppearSpine.attributes.add("appearTime",{type:"number",default:1.5}),AppearSpine.prototype.initialize=function(){this._playing=!1,this._timer=null,this._moveTween=null},AppearSpine.prototype.createSpine=function(t,i){if(!this._playing){this._playing=!0;var e=t.clone(),p=i?-.788:.788;e.enabled=!0,e.reparent(this.entity),e.setLocalPosition(pc.Vec3.ZERO),e.setLocalScale(p,.788,.788),this.spine=e,this._spineScript=this.spine.script.spine,this.appear()}},AppearSpine.prototype.appear=function(){this.spine.enabled=!0,this._moveTween=this.spine.tween(this.spine.getLocalPosition()).to(this.destination.getLocalPosition(),.3,pc.BackOut).on("complete",function(){this._timer=P3.utils.delay(this.appearTime,function(){this.disappear()},null,this)},this).start(),this._spineScript.playAnimation(0,"appear",!0)},AppearSpine.prototype.disappear=function(){this.spine.tween(this.spine.getLocalPosition()).to(pc.Vec3.ZERO,.3,pc.BackIn).on("complete",function(){this.destroySpine()},this).start()},AppearSpine.prototype.destroySpine=function(){this._moveTween.stop(),this._timer.stop(),this._playing=!1,this.spine.destroy(),this.spine=null,this._spineScript=null};var PopupTarget=pc.createScript("popupTarget");PopupTarget.attributes.add("cartEntity",{type:"entity"}),PopupTarget.prototype.initialize=function(){this._activated=!1},PopupTarget.prototype.postInitialize=function(){this.entity.children[0].script.target.setCorridorTargetDown()},PopupTarget.prototype.update=function(t){!this._activated&&this.cartEntity.getPosition().distance(this.entity.getPosition())<80&&(this._activated=!0,this.entity.children[0].script.target.flipCorridorTargetUp())};var AchievementsPanel=pc.createScript("achievementsPanel");AchievementsPanel.attributes.add("entries",{type:"entity",array:!0}),AchievementsPanel.prototype.postInitialize=function(){this._manager=this.app.root.findByName("Root").script.achievementsManager,this._displayedAchievements=[],this._achievementIndex=0,window.acpa=this,this.populateAchievements()},AchievementsPanel.prototype.populateAchievements=function(){for(var e=P3.utils.shuffleArray(this._manager.getIpFilteredAchievements()),t=this._manager.getTrackedData(),i=0;i<this.entries.length;i++,this._achievementIndex++){if(i>=e.length){this.entries[i].enabled=!1;break}var a=e[this._achievementIndex];if(console.log(a),a.completed||a.data.ip&&a.data.ip!==common.skin)i--;else{var n=this.entries[i],s=n.findByPath("canvas/text").element,c=n.findByName("barfg");s.text=a.description,a.data.useRecord&&(a.data.progress=t.records[a.data.compareName]/a.data.compareValue),c.element.width=pc.math.clamp(600*a.data.progress,45,600);var o=n.findByName("sprite");console.log(a.icon);var r=this.app.assets.find(a.icon,"sprite").id;o.sprite.spriteAsset=r,this._displayedAchievements.push([a,n])}}},AchievementsPanel.prototype.tweenCompletion=function(e){e[0];var t=e[1],i=t.findByName("barfg"),a=t.findByName("tick_off"),n=t.findByName("tick_on"),s=t.tween(t.getLocalScale()).to({y:0},.5,pc.QuadraticOut).on("complete",function(){this.moveEntriesUp(e)},this),c=n.tween(n.sprite).to({opacity:1},.5,pc.QuadraticOut).on("complete",function(){s.start()},this),o=a.tween(a.sprite).to({opacity:0},.5,pc.QuadraticOut).on("complete",function(){c.start()},this);i.tween(i.element).to({width:600},.5,pc.QuadraticOut).on("complete",function(){o.start()},this).start()},AchievementsPanel.prototype.moveEntriesUp=function(e){var t=this._displayedAchievements.indexOf(e);function tween(t,i,a){t.tween(i).to({y:i.y+4.5},.5,pc.QuadraticOut).on("complete",function(){a===this._displayedAchievements.length-1&&this.resetAchievement(e)},this).start()}if(t!==this._displayedAchievements.length-1){for(var i=t;i<this._displayedAchievements.length;i++){var a=this._displayedAchievements[i][1],n=a.getLocalPosition();tween.call(this,a,n,i)}this._displayedAchievements.splice(t,1)}else this.resetAchievement(e)},AchievementsPanel.prototype.resetAchievement=function(e){var t=e[1],i=this._manager.getIpFilteredAchievements()[this._achievementIndex++],a=t.findByName("text").element,n=t.findByName("barfg"),s=t.findByName("tick_off"),c=t.findByName("tick_on"),o=t.findByName("sprite"),r=this.app.assets.find(i.icon,"sprite").id;s.sprite.opacity=1,c.sprite.opacity=0,n.element.width=Math.max(45,e.data.progress),a.text=i.description,o.sprite.spriteAsset=r,t.setLocalPosition(0,-13.5,0),this._displayedAchievements.push([i,t]),t.tween(t.LocalScale()).to({y:5.646},.5,pc.QuadraticOut).start()};var AchievementsManager=pc.createScript("achievementsManager");AchievementsManager.attributes.add("data",{type:"asset",assetType:"json"}),AchievementsManager.prototype.initialize=function(){this._trackedData={targetsTotal:0,targets:0,corridorTargets:0,score:0,accuracy:0,leaderboard:0,targetsNamed:{},targetsIP:{},targetsTotalIP:{},records:{score:0,accuracy:0,targets:0}},window.acma=this,this._currentIP=common.skin,this._time=0,this._maxTimer=0,this._timedAchievements=[],this._achievements=[],this._baseAchievements=[],this.loadAchievements(),this._targetsBuffer=[],this.app.on("target:hit",this.onTargetHit,this),this.app.on("target:onCorridorTargetHit",this.onCorridorTargetHit,this),this.app.on("projectile:miss",this.onProjectileMiss,this),this.app.on("achievements:setData",this.setData,this),this.app.on("achievements:checkCompletion",this.checkCompletion,this),this.on("destroy",this.onDestroy,this)},AchievementsManager.prototype.onDestroy=function(){this.app.off("target:hit",this.onTargetHit,this),this.app.off("target:onCorridorTargetHit",this.onCorridorTargetHit,this),this.app.off("projectile:miss",this.onProjectileMiss,this),this.app.off("achievements:setData",this.setData,this),this.app.off("achievements:checkCompletion",this.checkCompletion,this),this.off("destroy",this.onDestroy,this)},AchievementsManager.prototype.update=function(t){for(var e=this._targetsBuffer.length-1;e>=0;e--){var a=this._targetsBuffer[e];Date.now()-a.hitTime>=1e3*this._maxTimer&&this._targetsBuffer.splice(e,1)}for(var i=this._timedAchievements.length-1;i>=0;i--){var s=this._timedAchievements[i],r=this.calculateTimeTargets(1e3*s.data.time);if(r/s.data.compareValue>s.data.progress&&(s.data.progress=r/s.data.compareValue),r>=s.data.compareValue){this.onAchievementCompleted(s,-1);for(var c=0;c<this._achievements.length;c++)if(this._achievements[c].id===s.id){this._achievements.splice(c,1);break}this._timedAchievements.splice(i,1)}}},AchievementsManager.prototype.setData=function(t){for(var e in t)this._trackedData[e]=t[e];this.checkCompletion()},AchievementsManager.prototype.calculateTimeTargets=function(t){for(var e=0,a=0;a<this._targetsBuffer.length;a++)Date.now()-this._targetsBuffer[a].hitTime<=t&&e++;return e},AchievementsManager.prototype.onTargetHit=function(t){if(!t._spine){var e=t.entity.parent.name;this._trackedData.targetsTotal++,this._trackedData.targets++,this._trackedData.targetsNamed[e]?this._trackedData.targetsNamed[e]++:this._trackedData.targetsNamed[e]=1,e.toLowerCase().includes(this._currentIP.toLowerCase())&&(this._trackedData.targetsIP[this._currentIP]?this._trackedData.targetsIP[this._currentIP]++:this._trackedData.targetsIP[this._currentIP]=1,this._trackedData.targetsTotalIP[this._currentIP]?this._trackedData.targetsTotalIP[this._currentIP]++:this._trackedData.targetsTotalIP[this._currentIP]=1),this._targetsBuffer.push({name:e,hitTime:Date.now()}),this.checkCompletion()}},AchievementsManager.prototype.onCorridorTargetHit=function(){this._trackedData.corridorTargets++,console.log("Corridor target hit. Total: ",this._trackedData.corridorTargets),this.checkCompletion()},AchievementsManager.prototype.onProjectileMiss=function(t){this._trackedData.records.targets=Math.max(this._trackedData.targets,this._trackedData.records.targets),this._trackedData.targets=0,this._trackedData.targetsIP[this._currentIP]=0,this._targetsBuffer.length=0,this.checkCompletion()},AchievementsManager.prototype.loadAchievements=function(){if(localStorage.getItem("DSN00962_achievements"+common.cookieVersion))this.loadData();else{this._achievements=JSON.parse(JSON.stringify(this.data.resource.achievements)),this._baseAchievements=JSON.parse(JSON.stringify(this.data.resource.achievements));for(var t=this._achievements.length-1;t>=0;t--){var e=this._achievements[t];e.levels&&(e.data.compareValue=e.levels[e.currentLevel],e.description=e.description.replace(/\$VAL\$/,e.levels[e.currentLevel]),this._achievements[t]=e),e.data.ip&&e.data.ip!==this._currentSkin||e.data.time&&(this._timedAchievements.push(e),this._achievements.splice(t,1),e.data.time>this._maxTimer&&(this._maxTimer=e.data.time+1))}}},AchievementsManager.prototype.saveData=function(){var t={trackedData:this._trackedData,achievements:this._achievements,timedAchievements:this._timedAchievements};localStorage.setItem("DSN00962_achievements"+common.cookieVersion,JSON.stringify(t))},AchievementsManager.prototype.loadData=function(){var t=JSON.parse(localStorage.getItem("DSN00962_achievements"+common.cookieVersion)||null);t&&(this._baseAchievements=JSON.parse(JSON.stringify(this.data.resource.achievements)),this._trackedData=t.trackedData,this._achievements=t.achievements,this._timedAchievements=t.timedAchievements,this._trackedData.records||(this._trackedData.records={}),this._trackedData.targets=0,this._trackedData.score=0,this._trackedData.corridorTargets=0,this._trackedData.targetsNamed={},this._trackedData.targetsIP={})},AchievementsManager.prototype.trackData=function(t,e){this.checkCompletion(),this.saveData()},AchievementsManager.prototype.checkCompletion=function(){this.saveData();for(var t=0;t<this._achievements.length;t++){var e=this._achievements[t];if(e.completed)return;if("COMPARISON"===e.type){if(!e.data.target){if(e.data.ip&&e.data.ip!==this._currentIP)continue;if(isNaN(this._trackedData[e.data.compareName])?e.data.progress=this._trackedData[e.data.compareName][e.data.ip]/e.data.compareValue:e.data.progress=this._trackedData[e.data.compareName]/e.data.compareValue,e.data.ip){if(this._trackedData.targetsIP[e.data.ip]>=e.data.compareValue){this.onAchievementCompleted(e,t);continue}if(this._trackedData.targetsTotalIP[e.data.ip]>=e.data.compareValue){this.onAchievementCompleted(e,t);continue}}this._trackedData[e.data.compareName]>=e.data.compareValue&&("corridorTargets"===e.data.compareName&&console.log(this._trackedData[e.data.compareNmae],e.data.compareValue),this.onAchievementCompleted(e,t));continue}if("targetsTotalIP"===e.data.compareName&&e.data.ip&&e.data.ip===this._currentIP&&(e.data.progress=this._trackedData.targetsTotalIP[e.data.ip]/e.data.compareValue,this._trackedData.targetsTotalIP[e.data.ip]>=e.data.compareValue)){this.onAchievementCompleted(e,t);continue}if(e.data.target&&(e.data.progress=this._trackedData.targetsNamed[e.data.target]/e.data.compareValue,isNaN(e.data.progress)&&(e.data.progress=0),this._trackedData.targetsNamed[e.data.target]>=e.data.compareValue)){this.onAchievementCompleted(e,t);continue}}}},AchievementsManager.prototype.onAchievementCompleted=function(t,e){if(this.app.fire("achievements:completed",t),e<0)return t.completed=!0,this._timedAchievements.splice(this._timedAchievements.indexOf(t),1),void this.saveData();if(t.levels){if(t.currentLevel++,t.currentLevel>=t.levels.length)return t.completed=!0,void this.saveData();t.data.compareValue=t.levels[t.currentLevel];for(var a=0;a<this._baseAchievements.length;a++)this._baseAchievements[a].id===t.id&&(t.description=this._baseAchievements[a].description.replace(/\$VAL\$/,t.levels[t.currentLevel]));this._achievements[e]=t}else t.completed=!0,this._achievements.splice(e,1);this.saveData()},AchievementsManager.prototype.getIpFilteredAchievements=function(){for(var t=[],e=0;e<this._achievements.length;e++){var a=this._achievements[e];a.data.ip&&a.data.ip!==common.skin||t.push(a)}return t},AchievementsManager.prototype.getAchievements=function(){return this._achievements},AchievementsManager.prototype.getBaseAchievements=function(){return this._baseAchievements},AchievementsManager.prototype.getTrackedData=function(){return this._trackedData};var AchievementsPopup=pc.createScript("achievementsPopup");AchievementsPopup.prototype.initialize=function(){this._manager=null,this._active=!1,this.app.on("achievements:completed",this.onAchievementCompleted,this)},AchievementsPopup.prototype.postInitialize=function(){this._manager=this.app.root.findByName("Root").script.achievementsManager},AchievementsPopup.prototype.update=function(t){this.app.keyboard.wasPressed(pc.KEY_J)&&this.tweenAchievement()},AchievementsPopup.prototype.onAchievementCompleted=function(t){var e=this.entity.findByName("text");if(!this._active&&e){this._active=!1,e=e.element;var i=this.entity.findByName("sprite"),n=this.app.assets.find(t.icon,"sprite").id;e.text=t.description,i.element.spriteAsset=n,this.tweenAchievement()}},AchievementsPopup.prototype.tweenAchievement=function(t){var e=this.entity.findByName("barfg"),i=this.entity.findByName("tick_off"),n=this.entity.findByName("tick_on"),o=this.entity.children[0],c=o.tween(o.getLocalPosition()).to({y:-120},.5,pc.BackOut,3).on("complete",function(){this.app.fire("achievements:checkCompletion",this),this._active=!1},this).start();n.element.opacity=0;var p=n.tween(n.element).to({opacity:1},.5,pc.QuadraticOut).on("complete",function(){c.start()},this);i.element.opacity=1;var a=i.tween(i.element).to({opacity:0},.5,pc.QuadraticOut).on("complete",function(){p.start()},this);e.element.width=45;var s=e.tween(e.element).to({width:600},.5,pc.QuadraticOut).on("complete",function(){a.start()},this);o.tween(o.getLocalPosition()).to({y:0},.5,pc.BackOut).on("complete",function(){s.start()},this).start()};var LiftSpawnManager=pc.createScript("liftSpawnManager");LiftSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity",title:"Character Prefabs (bigcitygreens)"}),LiftSpawnManager.attributes.add("prefabs_descendants",{type:"entity",title:"Character Prefabs (descendants)"}),LiftSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity",title:"Character Prefabs (jrwi)"}),LiftSpawnManager.attributes.add("prefabs_vampirina",{type:"entity",title:"Character Prefabs (vampirina)"}),LiftSpawnManager.attributes.add("prefabs_mmua",{type:"entity",title:"Character Prefabs (mmua)"}),LiftSpawnManager.attributes.add("prefabs_gabby",{type:"entity",title:"Character Prefabs (gabby)"}),LiftSpawnManager.attributes.add("prefabs_muppets",{type:"entity",title:"Character Prefabs (muppets)"}),LiftSpawnManager.attributes.add("prefabs_tots",{type:"entity",title:"Character Prefabs (tots)"}),LiftSpawnManager.attributes.add("prefabs_zombies",{type:"entity",title:"Character Prefabs (zombies)"}),LiftSpawnManager.attributes.add("prefabs_mira",{type:"entity",title:"Character Prefabs (mira)"}),LiftSpawnManager.attributes.add("prefabs_udm",{type:"entity",title:"Character Prefabs (udm)"}),LiftSpawnManager.prototype.initialize=function(){console.log("[LiftSpawnManager] Init"),common.minigame="lift",this.destroyed=!1,this._canUpdate=!1,this._targets=[],this._spawnerTweens=[],this._characterSpawnIndex=0,this._currentCharacters=[],this._currentPopup=null,this._environment=null,this._platformsOutOfView=0,this._movingPlatforms=[],this._characterPrefabs=this["prefabs_"+common.skin].children,this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.on("disable",this.onDisable,this),this.on("enable",this.onEnable,this),this.on("destroy",this.onDestroy,this),this.app.fire("manager:setGameData",{timed:!0,time:45}),this._layerPositions=this.setupScene()},LiftSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},LiftSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this);for(var t=this._targets.flat(),a=0;a<t.length;a++)t[a].destroy();this._targets=[];for(var e=0;e<this._spawnerTweens.length;e++)this._spawnerTweens[e].stop();this._spawnerTweens.length=0,this._canUpdate=!1},LiftSpawnManager.prototype.onEnable=function(){this.app.fire("manager:setGameData",{timed:!0,time:45}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this._layerPositions=this.setupScene()},LiftSpawnManager.prototype.setupScene=function(){this._environment=this.entity.findByName("Environment");for(var t=this._environment.findByTag("layer"),a=[],e=0;e<t.length;e++){var i=t[e].getLocalPosition();a.push(i.y),t[e].setLocalPosition(i.x,-25,i.z)}return a},LiftSpawnManager.prototype.unfoldScene=function(t){this._skin=t;for(var a=this._environment.findByTag("layer"),e=0;e<this._layerPositions.length;e++){var i=this._layerPositions[e],n=a[e];tweenlayer.call(this,n,i,e,this)}function tweenlayer(t,a,e,i){t.tween(t.getLocalPosition()).to({y:a},1,pc.QuinticOut).delay(.1*e).on("complete",function(){e>=i._layerPositions.length-1&&i.onUnfoldComplete()},i).start()}},LiftSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this._environment.findByTag("collider"),a=0;a<t.length;a++)t[a].rigidbody.syncEntityToBody();this.startTargets()},LiftSpawnManager.prototype.startTargets=function(){this._timeStart=Date.now(),this._canUpdate=!0;var t=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(t),this.createTargets()},LiftSpawnManager.prototype.createTargets=function(){var t=this._environment.findByName("platforms"),a=t.children;function tweenPlatform(t,a,e){t.tween(t.getLocalPosition()).to({y:a},3,pc.QuadraticOut).on("complete",function(){this._movingPlatforms[e].canUpdate=!0},this).start()}for(var e=[],i=0;i<this._characterPrefabs.length;i++)e.push(i);var n=5-1.25*(Math.min(this._characterPrefabs.length,5)-1);t.setLocalPosition(n,0,-9.633);for(var s=0;s<a.length;s++)if(s>=this._characterPrefabs.length)a[s].enabled=!0;else{var r=this._characterPrefabs[s].clone();r.setLocalScale(.25,.25,.25),r.enabled=!0,a[s].addChild(r),r.setLocalPosition(0,.119,0);var o=a[s].getLocalPosition();a[s].setLocalPosition(o.x,-15,o.z),a[s].findByName("model").script.target.rootIndex=e[s],this._movingPlatforms.push({platform:a[s],character:r,velocity:pc.math.random(-.2,-.3),canUpdate:!1}),tweenPlatform.call(this,a[s],1,s)}},LiftSpawnManager.prototype.onTargetHit=function(t,a){if(this._canUpdate)if(t._spine){if(t.animating)return void a.destroy();this.app.fire("score:addMissed",1,"lift"),t.animating=!0,a.destroy(),t.boing();var e=t.playAnimation(0,"hit",!1);P3.utils.delay(e.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else{var i=this._movingPlatforms[t.rootIndex].platform.getLocalPosition();i.y+=.2,i.y=Math.min(1,i.y),this._movingPlatforms[t.rootIndex].platform.setLocalPosition(i),this.app.fire("score:addScore",100,"lift"),this.app.fire("score:addHit",1,"lift"),a.script.targetScore.setText("+100",new pc.Color(1,1,1,1)),a.script.targetScore.animate()}},LiftSpawnManager.prototype.stopAll=function(){this._canUpdate=!1},LiftSpawnManager.prototype.onPlatformDeath=function(t){this._movingPlatforms.splice(t,1)},LiftSpawnManager.prototype.endGame=function(){this.stopAll(),this.app.fire("manager:onMinigameComplete")},LiftSpawnManager.prototype.update=function(t){if(this._canUpdate)for(var a=this._movingPlatforms.length-1;a>=0;a--)if(this._movingPlatforms[a].canUpdate){var e=this._movingPlatforms[a].platform.getLocalPosition();e.y<=-10?this.onPlatformDeath(a):(e.y<=-6&&(this._platformsOutOfView++,this._platformsOutOfView>=this._characterPrefabs.length&&this.endGame()),e.y+=this._movingPlatforms[a].velocity*t,this._movingPlatforms[a].platform.setLocalPosition(e))}},LiftSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),a=t.getLocalPosition();a.x=Math.random()>.5?a.x:-a.x,t.setLocalPosition(a),this._currentPopup=t.script.appearSpine;var e=this["prefabs_"+this._skin].children[this._characterSpawnIndex],i=e.findByName("spine");this._currentPopup.createSpine(i,"TargetMira_Mira"===e.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].children.length&&(this._characterSpawnIndex=0)}};var HouseSpawnManager=pc.createScript("houseSpawnManager");HouseSpawnManager.attributes.add("glowPrefab",{type:"entity"}),HouseSpawnManager.attributes.add("targets_bigcitygreens",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_descendants",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_justrollwithit",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_vampirina",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_mmua",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_gabby",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_muppets",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_tots",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_zombies",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_mira",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("targets_udm",{type:"entity",array:!0}),HouseSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_descendants",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_vampirina",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_mmua",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_gabby",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_muppets",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_tots",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_zombies",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_mira",{type:"entity"}),HouseSpawnManager.attributes.add("prefabs_udm",{type:"entity"}),HouseSpawnManager.prototype.initialize=function(){console.log("[HouseSpawnManager] Init"),common.minigame="house",this.destroyed=!1,this._canUpdate=!1,this._targets=[],this._spawnerTweens=[],this._characterSpawnIndex=0,this._currentCharacters=[],this._currentPopup=null,this._environment=null,this._targetMix=[],this._multiplier=1,this._hitCount=0,this._targetCount=0,this._countdownTween=null,this._delayTween=null,this._canHit=!1,this._holdTime=4,this._characterPrefabs=this["prefabs_"+common.skin].children.slice(0),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.app.on("projectile:miss",this.onProjectileMiss,this),this.on("disable",this.onDisable,this),this.on("enable",this.onEnable,this),this.on("destroy",this.onDestroy,this),this.app.fire("manager:setGameData",{timed:!0,time:45}),this._layerPositions=this.setupScene()},HouseSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},HouseSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this);for(var t=this._targets.flat(),e=0;e<t.length;e++)t[e].destroy();this._targets=[];for(var a=0;a<this._spawnerTweens.length;a++)this._spawnerTweens[a].stop();this._spawnerTweens.length=0,this._canUpdate=!1},HouseSpawnManager.prototype.onEnable=function(){this.app.fire("manager:setGameData",{timed:!0,time:45}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this._layerPositions=this.setupScene()},HouseSpawnManager.prototype.setupScene=function(){this._environment=this.entity.findByName("Environment");for(var t=this._environment.findByTag("layer"),e=[],a=0;a<t.length;a++){var i=t[a].getLocalPosition();e.push(i.y),t[a].setLocalPosition(i.x,-25,i.z)}return e},HouseSpawnManager.prototype.unfoldScene=function(t){this._skin=t;for(var e=this._environment.findByTag("layer"),a=0;a<this._layerPositions.length;a++){var i=this._layerPositions[a],s=e[a];tweenlayer.call(this,s,i,a,this)}function tweenlayer(t,e,a,i){t.tween(t.getLocalPosition()).to({y:e},1,pc.QuinticOut).delay(.1*a).on("complete",function(){a>=i._layerPositions.length-1&&i.onUnfoldComplete()},i).start()}},HouseSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this._environment.findByTag("collider"),e=0;e<t.length;e++)t[e].rigidbody.syncEntityToBody();this.startTargets()},HouseSpawnManager.prototype.startTargets=function(){this._timeStart=Date.now(),this._canUpdate=!0;var t=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(t),this.createTargets()},HouseSpawnManager.prototype.createTargets=function(){this._characterPrefabs=P3.utils.shuffleArray(this._characterPrefabs);var t=this._characterPrefabs[0].clone();t.setLocalScale(.7,.7,.7);var e=this._characterPrefabs[1].clone();e.setLocalScale(.7,.7,.7);var a=this._characterPrefabs[2].clone();a.setLocalScale(.7,.7,.7),this._targetMix.push(t,e,a),this._characterPrefabs.splice(0,3);var i=this["targets_"+common.skin];this._targetCount=i.length;for(var s=0;s<i.length;s++){var n=i[s].clone(),r=this.glowPrefab.clone();r.setLocalPosition(0,-.1,0),n.children[0].children[0].addChild(r),this._targetMix.push(n)}this.spawnTargets()},HouseSpawnManager.prototype.spawnTargets=function(){for(var t=P3.utils.shuffleArray(this._environment.findByName("house_positions").children),e=0;e<this._targetMix.length;e++){var a=this._targetMix[e];a.children[0].script.target.hit=!1,a.children[0].script.target.setUp(),a.enabled=!0,a.reparent(t[e]),a.setLocalPosition(pc.Vec3.ZERO)}this._countdownTween=this.app.tween({}).to({},this._holdTime,pc.Linear).on("complete",function(){this.reset()},this).start(),this.toggleShutters("open"),this._canHit=!0},HouseSpawnManager.prototype.reset=function(){console.log("Reset"),this._countdownTween&&this._countdownTween.stop(),this._delayTween&&this._delayTween.stop(),this.toggleShutters("close"),this._multiplier=1,this._hitCount=0,this._canHit=!1,this._holdTime-=.05,this._holdTime=Math.max(2,this._holdTime),this._delayTween=P3.utils.delay(1,function(){this.spawnTargets()},null,this)},HouseSpawnManager.prototype.toggleShutters=function(t){var e=this._environment.findByName("windows").children;function callFunc(e,a){e.script.houseWindow[t](a)}var a=Math.random();if(a>=.6)for(var i=0;i<e.length;i++)callFunc.call(this,e[i],.03*i);else if(a>=.3)for(var s=P3.utils.shuffleArray(e.slice(0)),n=0;n<s.length;n++)callFunc.call(this,s[n],.03*n);else for(var r=e.slice(0).reverse(),o=0;o<r.length;o++)callFunc.call(this,r[o],.03*o)},HouseSpawnManager.prototype.onTargetHit=function(t,e){if(this._canUpdate&&this._canHit)if(t._spine){if(t.animating)return void e.destroy();this.app.fire("score:addMissed",1,"house"),t.animating=!0,e.destroy(),t.boing();var a=t.playAnimation(0,"hit",!1);P3.utils.delay(a.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else this.app.fire("score:addScore",100*this._multiplier,"house"),this.app.fire("score:addHit",1,"house"),t.flipDown(),e.script.targetScore.setText("+"+100*this._multiplier,new pc.Color(1,1,1,1)),e.script.targetScore.animate(),this._multiplier++,this._hitCount++,this._hitCount>=this._targetCount&&this.reset();else e.enabled=!1},HouseSpawnManager.prototype.onProjectileMiss=function(){this._multiplier=1},HouseSpawnManager.prototype.stopAll=function(){this._canUpdate=!1,this._countdownTween.stop(),this._delayTween.stop(),this.toggleShutters("close")},HouseSpawnManager.prototype.update=function(t){},HouseSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),e=t.getLocalPosition();e.x=Math.random()>.5?e.x:-e.x,t.setLocalPosition(e),this._currentPopup=t.script.appearSpine;var a=this["prefabs_"+this._skin].children[this._characterSpawnIndex],i=a.findByName("spine");this._currentPopup.createSpine(i,"TargetMira_Mira"===a.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].children.length&&(this._characterSpawnIndex=0)}};var SortSpawnManager=pc.createScript("sortSpawnManager");SortSpawnManager.attributes.add("leftPipe",{type:"entity"}),SortSpawnManager.attributes.add("rightPipe",{type:"entity"}),SortSpawnManager.attributes.add("targets_bigcitygreens",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_descendants",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_justrollwithit",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_vampirina",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_mmua",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_gabby",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_muppets",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_tots",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_zombies",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_mira",{type:"entity",array:!0}),SortSpawnManager.attributes.add("targets_udm",{type:"entity",array:!0}),SortSpawnManager.attributes.add("prefabs_bigcitygreens",{type:"entity",title:"Character Prefabs (bigcitygreens)"}),SortSpawnManager.attributes.add("prefabs_descendants",{type:"entity",title:"Character Prefabs (descendants)"}),SortSpawnManager.attributes.add("prefabs_justrollwithit",{type:"entity",title:"Character Prefabs (jrwi)"}),SortSpawnManager.attributes.add("prefabs_vampirina",{type:"entity",title:"Character Prefabs (vampirina)"}),SortSpawnManager.attributes.add("prefabs_mmua",{type:"entity",title:"Character Prefabs (mmua)"}),SortSpawnManager.attributes.add("prefabs_gabby",{type:"entity",title:"Character Prefabs (gabby)"}),SortSpawnManager.attributes.add("prefabs_muppets",{type:"entity",title:"Character Prefabs (muppets)"}),SortSpawnManager.attributes.add("prefabs_tots",{type:"entity",title:"Character Prefabs (tots)"}),SortSpawnManager.attributes.add("prefabs_zombies",{type:"entity",title:"Character Prefabs (zombies)"}),SortSpawnManager.attributes.add("prefabs_mira",{type:"entity",title:"Character Prefabs (mira)"}),SortSpawnManager.attributes.add("prefabs_udm",{type:"entity",title:"Character Prefabs (udm)"}),SortSpawnManager.prototype.initialize=function(){console.log("[SortSpawnManager] Init"),common.minigame="sort",this.destroyed=!1,this._canUpdate=!1,this._targets=[],this._spawnerTweens=[],this._characterSpawnIndex=0,this._currentCharacters=[],this._currentPopup=null,this._environment=null,this._movingTargets=[],this._buckets=null,this._leftBucketItem="",this._rightBucketItem="",this._leftBucketEntity="",this._rightBucketEntity="",this._characterPrefabs=this["prefabs_"+common.skin].children,this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this.on("disable",this.onDisable,this),this.on("enable",this.onEnable,this),this.on("destroy",this.onDestroy,this),this.app.fire("manager:setGameData",{timed:!0,time:45}),this._layerPositions=this.setupScene(),this.determineTargets()},SortSpawnManager.prototype.onDestroy=function(){this.destroyed=!0,this.off("destroy",this.onDestroy),this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this),this.off("disable",this.onDisable,this),this.off("enable",this.onEnable,this)},SortSpawnManager.prototype.onDisable=function(){this.app.off("game:beginTargets",this.unfoldScene,this),this.app.off("game:stopTargets",this.stopAll,this),this.app.off("target:hit",this.onTargetHit,this);for(var t=this._targets.flat(),e=0;e<t.length;e++)t[e].destroy();this._targets=[];for(var a=0;a<this._spawnerTweens.length;a++)this._spawnerTweens[a].stop();this._spawnerTweens.length=0,this._canUpdate=!1},SortSpawnManager.prototype.onEnable=function(){this.app.fire("manager:setGameData",{timed:!1,time:45}),this.app.on("game:beginTargets",this.unfoldScene,this),this.app.on("game:stopTargets",this.stopAll,this),this.app.on("target:hit",this.onTargetHit,this),this._layerPositions=this.setupScene()},SortSpawnManager.prototype.setupScene=function(){this._environment=this.entity.findByName("Environment");for(var t=this._environment.findByTag("layer"),e=[],a=0;a<t.length;a++){var r=t[a].getLocalPosition();e.push(r.y),t[a].setLocalPosition(r.x,-25,r.z)}return this._buckets=this._environment.findByName("buckets").children,"mmua"===common.skin&&(this._buckets[0].setLocalPosition(-3.013,-4.7,0),this._buckets[1].setLocalPosition(3.013,-4.7,0)),e},SortSpawnManager.prototype.unfoldScene=function(t){this._skin=t;for(var e=this._environment.findByTag("layer"),a=0;a<this._layerPositions.length;a++){var r=this._layerPositions[a],i=e[a];tweenlayer.call(this,i,r,a,this)}function tweenlayer(t,e,a,r){t.tween(t.getLocalPosition()).to({y:e},1,pc.QuinticOut).delay(.1*a).on("complete",function(){a>=r._layerPositions.length-1&&r.onUnfoldComplete()},r).start()}},SortSpawnManager.prototype.onUnfoldComplete=function(){for(var t=this._environment.findByTag("collider"),e=0;e<t.length;e++)t[e].rigidbody.syncEntityToBody();this.startTargets()},SortSpawnManager.prototype.determineTargets=function(){var t=P3.utils.shuffleArray(this["targets_"+common.skin]),e=t[0],a=t[1];("TargetMira_Crest"===e.name&&"TargetMira_Badge"===a.name||"TargetMira_Badge"===e.name&&"TargetMira_Crest"===a.name)&&(a=t[2]),this._leftBucketItem=e.name,this._rightBucketItem=a.name,this._leftBucketEntity=e,this._rightBucketEntity=a,this.app.fire("manager:setTutorialSprites",e.name,a.name)},SortSpawnManager.prototype.startTargets=function(){function cleanTarget(t,e){var a=t.children[0].children[0].clone();return a.enabled=!0,e.addChild(a),a.setLocalScale(.7,.7,.7),a.setLocalPosition(0,0,.05),a}this._timeStart=Date.now(),this._canUpdate=!0,this._buckets[0].findComponent("collision").on("triggerenter",this.onBucketLeftTriggerEnter,this),this._buckets[1].findComponent("collision").on("triggerenter",this.onBucketRightTriggerEnter,this),cleanTarget(this._leftBucketEntity,this._buckets[0]),cleanTarget(this._rightBucketEntity,this._buckets[1]);var t=this.app.tween({}).to({},5,pc.Linear).loop(!0).on("loop",function(){this.createPopupCharacter()},this).start();this._spawnerTweens.push(t),this.createTargets()},SortSpawnManager.prototype.createTargets=function(){var t=this._environment.findByName("spawnpoints").children[0],e=this._environment.findByName("spawnpoints").children[1],a=0;function createTarget(){var r=0===a?t:e,i=0===a?1:-1,n=0===a?e:t,s=0===a?-.479:-2.447,o=0===a?this.leftPipe:this.rightPipe,p=P3.utils.selectRandom(this["targets_"+common.skin]).clone();p.enabled=!0,p.guid=pc.guid.create(),p.setLocalScale(.25,.25,.25),p.reparent(r.parent),p.setLocalPosition(r.getLocalPosition()),p.children[0].script.target.setUp(),this._movingTargets.push({target:p,dir:i,maxX:4*n.getLocalPosition().x,moveAcross:!1,moveDown:!1,xVelocity:2,yVelocity:3}),function tweenTarget(t,e){t.target.tween(t.target.getLocalPosition()).to({y:e},.4,pc.QuadraticOut).on("complete",function(){t.moveAcross=!0},this).start()}.call(this,this._movingTargets[this._movingTargets.length-1],s),function animatePipe(t){t.tween(t.getLocalScale()).to(pc.Vec3.ONE,.25,pc.QuarticOut).yoyo(!0).repeat(2).start()}.call(this,o),++a>=2&&(a=0)}var r=this.app.tween({}).to({},.5,pc.Linear).loop(!0).on("loop",function(){createTarget.call(this)},this).start();this._spawnerTweens.push(r)},SortSpawnManager.prototype.onTargetHit=function(t,e){if(this._canUpdate)if(t._spine){if(t.animating)return void e.destroy();this.app.fire("score:addMissed",1,"sort"),t.animating=!0,e.destroy(),t.boing();var a=t.playAnimation(0,"hit",!1);P3.utils.delay(a.animation.duration,function(){t.animating=!1,t.playAnimation(0,"move",!0)},this)}else{var r=this.findTargetInArray(t.entity.parent.guid);this._movingTargets[r].moveDown=!0,this.app.fire("score:addScore",20,"sort"),this.app.fire("score:addHit",1,"sort"),e.script.targetScore.setText("+20",new pc.Color(1,1,1,1)),e.script.targetScore.animate()}},SortSpawnManager.prototype.stopAll=function(){for(var t=0;t<this._spawnerTweens.length;t++)this._spawnerTweens[t].stop()},SortSpawnManager.prototype.findTargetInArray=function(t){for(var e=0;e<this._movingTargets.length;e++)if(this._movingTargets[e].target.guid===t)return e;return console.error("[SortSpawnManager] Target not found in array!"),-1},SortSpawnManager.prototype.onTargetExit=function(t){this._movingTargets[t].target.destroy(),this._movingTargets.splice(t,1)},SortSpawnManager.prototype.onBucketLeftTriggerEnter=function(t){var e=t.parent,a=this._buckets[0].findByName("TargetPrefabScoreTextLeft");t.parent.name===this._leftBucketItem?(a.script.targetScore.setText("+500",new pc.Color(.98,.72,.01,1)),this.app.fire("score:addScore",500,"sort")):(a.script.targetScore.setText("-50",new pc.Color(1,0,0,1)),this.app.fire("score:addScore",-50,"sort")),a.script.targetScore.animate(),this.clearTarget(e)},SortSpawnManager.prototype.onBucketRightTriggerEnter=function(t){var e=t.parent,a=this._buckets[1].findByName("TargetPrefabScoreTextLeft");t.parent.name===this._rightBucketItem?(a.script.targetScore.setText("+500",new pc.Color(.98,.72,.01,1)),this.app.fire("score:addScore",500,"sort")):(a.script.targetScore.setText("-50",new pc.Color(1,0,0,1)),this.app.fire("score:addScore",-50,"sort")),a.script.targetScore.animate(),this.clearTarget(e)},SortSpawnManager.prototype.clearTarget=function(t){var e=this.findTargetInArray(t.guid);-1!==e&&(this._movingTargets[e].target.destroy(),this._movingTargets.splice(e,1))},SortSpawnManager.prototype.update=function(t){if(this._canUpdate)for(var e=this._movingTargets.length-1;e>=0;e--){var a=this._movingTargets[e],r=a.target.getLocalPosition();(a.moveAcross||a.moveDown)&&(1===a.dir&&r.x>a.maxX?this.onTargetExit(e):-1===a.dir&&r.x<a.maxX?this.onTargetExit(e):(r.x+=a.xVelocity*t*a.dir,a.moveDown&&(r.y-=a.yVelocity*t,a.xVelocity-=5*t,a.xVelocity=Math.max(0,a.xVelocity),a.yVelocity+=4*t),a.target.setLocalPosition(r)))}},SortSpawnManager.prototype.createPopupCharacter=function(){if(!(this._currentCharacters.indexOf(this._characterSpawnIndex)>=0)){var t=this.entity.findByPath("Environment/AppearSpine"),e=t.getLocalPosition();e.x=Math.random()>.5?e.x:-e.x,t.setLocalPosition(e),this._currentPopup=t.script.appearSpine;var a=this["prefabs_"+this._skin].children[this._characterSpawnIndex],r=a.findByName("spine");this._currentPopup.createSpine(r,"TargetMira_Mira"===a.name),this._characterSpawnIndex++,this._characterSpawnIndex>=this["prefabs_"+this._skin].children.length&&(this._characterSpawnIndex=0)}};var HouseWindow=pc.createScript("houseWindow");HouseWindow.attributes.add("isDoor",{type:"boolean",default:!1}),HouseWindow.prototype.initialize=function(){this._shutter=this.entity.children[0],this._animating=!1,this._state=HouseWindow.STATE.CLOSED,this._animTime=.15},HouseWindow.prototype.toggle=function(){this._animating||(this._animating=!0,this._state===HouseWindow.STATE.CLOSED?this.open():this._state===HouseWindow.STATE.OPEN&&this.close())},HouseWindow.prototype.scaleDoor=function(t,e,i){t.tween(t.getLocalScale()).to(e,this._animTime,pc.QuadraticOut).delay(i).start()},HouseWindow.prototype.open=function(t){if(this._state=HouseWindow.STATE.OPEN,t=t||0,this.isDoor){var e=this.entity.findByName("door_left"),i=this.entity.findByName("door_right");this.scaleDoor(e,new pc.Vec3(0,1,1),t),this.scaleDoor(i,new pc.Vec3(0,1,1),t)}else this._shutter.tween(this._shutter.getLocalScale()).to({y:0},this._animTime,pc.QuadraticOut).delay(t).start()},HouseWindow.prototype.close=function(t){if(this._state=HouseWindow.STATE.CLOSED,t=t||0,this.isDoor){var e=this.entity.findByName("door_left"),i=this.entity.findByName("door_right");this.scaleDoor(e,new pc.Vec3(1,1,1),t),this.scaleDoor(i,new pc.Vec3(1,1,1),t)}else this._shutter.tween(this._shutter.getLocalScale()).to({y:.763},this._animTime,pc.QuadraticOut).delay(t).start()},HouseWindow.prototype.update=function(t){},HouseWindow.STATE={OPEN:0,CLOSED:1};var SplashAchievementButton=pc.createScript("splashAchievementButton");SplashAchievementButton.attributes.add("backButton",{type:"entity"}),SplashAchievementButton.attributes.add("achievementsButton",{type:"entity"}),SplashAchievementButton.attributes.add("ipSelector",{type:"entity"}),SplashAchievementButton.attributes.add("achievementsScreen",{type:"entity"}),SplashAchievementButton.prototype.initialize=function(){this._achievementsOpen=!1,this.backButton.collision.on("collisionstart",this.toggle,this),this.achievementsButton.collision.on("collisionstart",this.toggle,this)},SplashAchievementButton.prototype.toggle=function(){this._achievementsOpen=!this._achievementsOpen,this.ipSelector.enabled=!this._achievementsOpen,this.achievementsScreen.enabled=this._achievementsOpen};pc.script.createLoadingScreen(function(A){var I,S;I=["html, body {position:fixed !important; overflow:hidden !important;}","body {","    background-color: #0e2839;","}","#application-splash-wrapper {","    position: absolute;","    top: 0;","    left: 0;","    height: 100%;","    width: 100%;","    margin: 0 auto;","    background-color: #0e2839;","    background-size: cover;","    background-repeat: no-repeat;","    background-position: center center;","    z-index: 100000000000000;","}","#application-splash {","    position: absolute;","    top: 0%;","    width: 572px;","    left: calc(50% - 286px);","    text-align: center;","}","#logo {","    position: relative;","    left: 25%;","    top: 0%;","    width: 50%;","    height: 90%;","    background-size: contain;","    background-repeat: no-repeat;","    background-position: top center;","}","#progress-bar-container {","    position: absolute;","    top: 75%;","    height: 50px;","    width: 628px;","    left: calc(50% - 314px);","    padding: 5px;","    background: #52355B;","    border-radius: 25px;","    box-sizing: border-box;","}","#progress-bar {","    width: 0%;","    height: 100%;","    background-color: #f2d827;","    background-repeat: no-repeat;","    border-radius: 25px;","}","#mobileButton {","    display: none;","    margin: 30px auto 0;","}"].join("\n"),(S=document.createElement("style")).type="text/css",S.styleSheet?S.styleSheet.cssText=I:S.appendChild(document.createTextNode(I)),document.head.appendChild(S),function(){var A=document.createElement("div");A.id="application-splash-wrapper",A.style.backgroundImage='url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAUAAA/+EDeWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmM5ZDk2NzBmLTMxN2YtNDMyYS05YzIxLWUwYTZjMGRkMDNlNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRUMxQzE3QUVDRkQxMUU5OUNENkU0NkQ1RUI3N0Y2MSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRUMxQzE3OUVDRkQxMUU5OUNENkU0NkQ1RUI3N0Y2MSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFFQzFDMTc1RUNGRDExRTk5Q0Q2RTQ2RDVFQjc3RjYxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFQzFDMTc2RUNGRDExRTk5Q0Q2RTQ2RDVFQjc3RjYxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwv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")',A.style.backgroundRepeat="repeat",A.style.backgroundSize="100% 100%",document.body.appendChild(A);var I=document.createElement("div");I.style.backgroundImage='url("data:image/png;base64,R0lGODlh/AF6Aff/AJLTaE0sVdTtViUfLnW+VZ3jUfzuzc/rUaroZHvEWobqbvDuZavTiWtRb6LnU6XjXEeeSZJtLtTN1rXsZa2JJE2mUYx0i3nDVarmXO7stWhSMNnOszMcP9uMWFCrVHfZZ00sWU0wWbDQbrOnttSvE11Tb/fNAP7pAsbsaIPKXOro7G9QRv7cAYRxdLXqW1e0WfiuAOyvLKTYX3C3aHNla/67Asq4qUElScyXFJeDlPf3905pSNN5bk5PR+XpXWnKYVU4Yc/qjqqVlNrkrY6xWOrvknTMZWOLUKeYrM30aNj2dbfza7eknsbaccd1jo2+eJnfVKy1cmpySeXWuse9ysnpc5GNc8voTYqPS87MW7S2V7j2crjrdvzFAk4yNdT2aK3rXs3nUUUjUdjtdv/TCO3GBzlGMaLjT8Tann3iaf+2CGXFX1+8XJvfTe/ew0QkXPbFE6XrWuS6C9vtYqvrVfPMCWOmWuXh5j9PQW6OaKbrVHtif+uoCKrxaMv2cr2ywcHsXei3GJ2Mop+sgkgoUrX0W8aoHY3UX0coW3SYPJrFXkkkVKvrcPrOCqznVVc2Rqv1cUWkTPeyAX2jWPXFCm/TZffTAuHdYjo3PuzTCX3JXr+RHfK8HFIzUHXDVVs9Ufe8AFEsWubIDvbVCdnAE/bGAXeqQ1k7YEokWZ+cdv3fBffdAf++BVU4XaryWfLdCMDjYGCyX4HVcYPDd2ilS8nzYPGxCJjNTj8gTVQ6VF7BXVEwWeOvEOWgP3K6Ufa+BnLUYaGhU0miTfuyBPvPBP////vTBPv7+//TBPvPAE2iTf+2BFEwXfuyAE2mTVE0XUmiSf/XAHXDWv+yBPvTAP/TAFU0Xf/XBPu2BP+2APvXBPv/+0mmTVE0WPPx8//PBPrLBP//+93Z4PvLAP/LBP+yAFUwXvrXAPv3+//PAO/t71U0Vvm2AEmqUf/LAP/HBfv7/8vvYH3HVff3+/r7919BZd6dC2BBQT+URW3PYfPv74rCV9PrUVk0YEWqTQAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRUMxQzE3MUVDRkQxMUU5OUNENkU0NkQ1RUI3N0Y2MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRUMxQzE3MkVDRkQxMUU5OUNENkU0NkQ1RUI3N0Y2MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMDc2NjNDRUNFNzExRTk5Q0Q2RTQ2RDVFQjc3RjYxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFQzFDMTcwRUNGRDExRTk5Q0Q2RTQ2RDVFQjc3RjYxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcm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")',A.appendChild(I),I.id="logo";var S=document.createElement("div");S.id="progress-bar-container",A.appendChild(S);var Q=document.createElement("div");Q.id="progress-bar",Q.style.backgroundImage='url("data:image/png;base64,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")',S.appendChild(Q)}(),A.on("preload:end",function(){A.off("preload:progress")}),A.on("preload:progress",function(A){var I=document.getElementById("progress-bar");I&&(A=Math.min(1,Math.max(0,A)),I.style.width=100*A+"%")}),A.on("start",function(){var A;(A=document.getElementById("application-splash-wrapper")).parentElement.removeChild(A)})});

//# sourceMappingURL=__game-scripts.js.map