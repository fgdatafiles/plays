 /** Built with 2DKit, http://2dkit.com */
'use strict';
(function(zj) {
    function m(a, b) {
        function c() {} c.prototype = a; var d = new c,
            e; for (e in b) d[e] = b[e];
        b.toString !== Object.prototype.toString && (d.toString = b.toString); return d }

    function Yc(a) { return a instanceof Array ? function() { return D.iter(a) } : "function" == typeof a.iterator ? ha(a, a.iterator) : a.iterator }

    function ha(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = Fj++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var g = {},
        l = function() { return Z.__string_rec(this, "") },
        Nb = function() {};
    g.DateTools = Nb;
    Nb.__name__ = ["DateTools"];
    Nb.__format_get = function(a, b) {
        switch (b) {
            case "%":
                return "%";
            case "C":
                return I.lpad(u.string(u["int"](a.getFullYear() / 100)), "0", 2);
            case "d":
                return I.lpad(u.string(a.getDate()), "0", 2);
            case "D":
                return Nb.__format(a, "%m/%d/%y");
            case "e":
                return u.string(a.getDate());
            case "F":
                return Nb.__format(a, "%Y-%m-%d");
            case "H":
            case "k":
                return I.lpad(u.string(a.getHours()),
                    "H" == b ? "0" : " ", 2);
            case "I":
            case "l":
                var c = a.getHours() % 12;
                return I.lpad(u.string(0 == c ? 12 : c), "I" == b ? "0" : " ", 2);
            case "m":
                return I.lpad(u.string(a.getMonth() + 1), "0", 2);
            case "M":
                return I.lpad(u.string(a.getMinutes()), "0", 2);
            case "n":
                return "\n";
            case "p":
                return 11 < a.getHours() ? "PM" : "AM";
            case "r":
                return Nb.__format(a, "%I:%M:%S %p");
            case "R":
                return Nb.__format(a, "%H:%M");
            case "s":
                return u.string(u["int"](a.getTime() / 1E3));
            case "S":
                return I.lpad(u.string(a.getSeconds()), "0", 2);
            case "t":
                return "\t";
            case "T":
                return Nb.__format(a,
                    "%H:%M:%S");
            case "u":
                return c = a.getDay(), 0 == c ? "7" : null == c ? "null" : "" + c;
            case "w":
                return u.string(a.getDay());
            case "y":
                return I.lpad(u.string(a.getFullYear() % 100), "0", 2);
            case "Y":
                return u.string(a.getFullYear());
            default:
                throw new s("Date.format %" + b + "- not implemented yet.");
        }
    };
    Nb.__format = function(a, b) { for (var c = new eb, d = 0;;) { var e = b.indexOf("%", d); if (0 > e) break;
            c.addSub(b, d, e - d);
            c.add(Nb.__format_get(a, D.substr(b, e + 1, 1)));
            d = e + 2 } c.addSub(b, d, b.length - d); return c.b };
    Nb.format = function(a, b) {
        return Nb.__format(a,
            b)
    };
    var Ra = function(a, b) { b = b.split("u").join("");
        this.r = RegExp(a, b) };
    g.EReg = Ra;
    Ra.__name__ = ["EReg"];
    Ra.prototype = {
        match: function(a) { this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a; return null != this.r.m },
        matched: function(a) { if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a]; throw new s("EReg::matched"); },
        matchedPos: function() { if (null == this.r.m) throw new s("No string matched"); return { pos: this.r.m.index, len: this.r.m[0].length } },
        matchSub: function(a, b, c) {
            null == c && (c = -1);
            if (this.r.global) { this.r.lastIndex = b;
                this.r.m = this.r.exec(0 > c ? a : D.substr(a, 0, b + c)); if (b = null != this.r.m) this.r.s = a; return b }
            if (c = this.match(0 > c ? D.substr(a, b, null) : D.substr(a, b, c))) this.r.s = a, this.r.m.index += b;
            return c
        },
        replace: function(a, b) { return a.replace(this.r, b) },
        map: function(a, b) {
            var c = 0,
                d = new eb;
            do {
                if (c >= a.length) break;
                else if (!this.matchSub(a, c)) { d.add(D.substr(a, c, null)); break }
                var e = this.matchedPos();
                d.add(D.substr(a, c, e.pos - c));
                d.add(b(this));
                0 == e.len ? (d.add(D.substr(a, e.pos, 1)), c = e.pos +
                    1) : c = e.pos + e.len
            } while (this.r.global);
            !this.r.global && 0 < c && c < a.length && d.add(D.substr(a, c, null));
            return d.b
        },
        __class__: Ra
    };
    var D = function() {};
    g.HxOverrides = D;
    D.__name__ = ["HxOverrides"];
    D.strDate = function(a) {
        switch (a.length) {
            case 8:
                a = a.split(":");
                var b = new Date;
                b.setTime(0);
                b.setUTCHours(a[0]);
                b.setUTCMinutes(a[1]);
                b.setUTCSeconds(a[2]);
                return b;
            case 10:
                return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
            case 19:
                return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2],
                    b[0], b[1], b[2]);
            default:
                throw new s("Invalid date format : " + a);
        }
    };
    D.cca = function(a, b) { var c = a.charCodeAt(b); return c != c ? void 0 : c };
    D.substr = function(a, b, c) { if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b); return a.substr(b, c) };
    D.remove = function(a, b) { var c = a.indexOf(b); if (-1 == c) return !1;
        a.splice(c, 1); return !0 };
    D.iter = function(a) { return { cur: 0, arr: a, hasNext: function() { return this.cur < this.arr.length }, next: function() { return this.arr[this.cur++] } } };
    var Ma = function() {};
    g.Lambda = Ma;
    Ma.__name__ = ["Lambda"];
    Ma.array = function(a) { var b = []; for (a = Yc(a)(); a.hasNext();) { var c = a.next();
            b.push(c) } return b };
    Ma.map = function(a, b) { for (var c = new Da, d = Yc(a)(); d.hasNext();) { var e = d.next();
            c.add(b(e)) } return c };
    Ma.mapi = function(a, b) { for (var c = new Da, d = 0, e = Yc(a)(); e.hasNext();) { var f = e.next();
            c.add(b(d++, f)) } return c };
    Ma.exists = function(a, b) { for (var c = Yc(a)(); c.hasNext();) { var d = c.next(); if (b(d)) return !0 } return !1 };
    Ma.iter = function(a, b) {
        for (var c = Yc(a)(); c.hasNext();) {
            var d =
                c.next();
            b(d)
        }
    };
    Ma.filter = function(a, b) { for (var c = new Da, d = Yc(a)(); d.hasNext();) { var e = d.next();
            b(e) && c.add(e) } return c };
    Ma.count = function(a, b) { var c = 0; if (null == b)
            for (var d = Yc(a)(); d.hasNext();) d.next(), c++;
        else
            for (d = Yc(a)(); d.hasNext();) { var e = d.next();
                b(e) && c++ }
        return c };
    var Da = function() { this.length = 0 };
    g.List = Da;
    Da.__name__ = ["List"];
    Da.prototype = {
        add: function(a) { a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++ },
        push: function(a) { this.h = a = [a, this.h];
            null == this.q && (this.q = a);
            this.length++ },
        first: function() { return null == this.h ? null : this.h[0] },
        last: function() { return null == this.q ? null : this.q[0] },
        remove: function(a) { for (var b = null, c = this.h; null != c;) { if (c[0] == a) return null == b ? this.h = c[1] : b[1] = c[1], this.q == c && (this.q = b), this.length--, !0;
                b = c;
                c = c[1] } return !1 },
        iterator: function() { return new Uh(this.h) },
        __class__: Da
    };
    var Uh = function(a) { this.head = a;
        this.val = null };
    g["_List.ListIterator"] = Uh;
    Uh.__name__ = ["_List", "ListIterator"];
    Uh.prototype = {
        hasNext: function() { return null != this.head },
        next: function() {
            this.val =
                this.head[0];
            this.head = this.head[1];
            return this.val
        },
        __class__: Uh
    };
    var Sa = function() {};
    g["kit.util.Disposable"] = Sa;
    Sa.__name__ = ["kit", "util", "Disposable"];
    Sa.prototype = { __class__: Sa };
    var n = function() { this.$C = null;
        this.$B = 0;
        this.owner = this.next = null };
    g["kit.Component"] = n;
    n.__name__ = ["kit", "Component"];
    n.__interfaces__ = [Sa];
    n.prototype = {
        onAdded: function() {},
        onRemoved: function() { null != this.$C && this.$C.$EH() },
        onStart: function() {},
        onStop: function() {},
        onUpdate: function(a) {},
        onMessage: function(a, b) {
            if (null !=
                this.$C) { var c = this.$C.$CH; if (null != c && (c = null != Ea[a] ? c.getReserved(a) : c.h[a], null != c && null != c.$AI)) return c.emit(b), !0 }
            return !1
        },
        connectMessage: function(a, b) { null == this.$C && (this.$C = new Ce);
            null == this.$C.$CH && (this.$C.$CH = new O); var c = this.$C.$CH.get(a); if (null == c) { var d = c = new ia;
                this.$C.$CH.set(a, d) } return c.connect(b) },
        connect0: function(a, b, c) { null == c && (c = !1);
            a = a.connect(b, c);
            this.registerDisposable(a); return a },
        connect1: function(a, b, c) {
            null == c && (c = !1);
            a = a.connect(b, c);
            this.registerDisposable(a);
            return a
        },
        connect2: function(a, b, c) { null == c && (c = !1);
            a = a.connect(b, c);
            this.registerDisposable(a); return a },
        registerDisposable: function(a) { null == this.$C && (this.$C = new Ce);
            null == this.$C.$DH && (this.$C.$DH = []);
            this.$C.$DH.push(a) },
        dispose: function() { null != this.owner ? this.owner.remove(this) : null != this.$C && this.$C.$EH() },
        get_entitySlot: function() { return -1 },
        $A: function() {},
        __class__: n,
        __properties__: { get_entitySlot: "get_entitySlot" }
    };
    var De = function() {
        n.call(this);
        var a = window.jsembed;
        null != a && window.navigator.isCocoonJS &&
            (a.disableAutoScaling(), window.document.documentElement.style.height = "100%", window.document.body.style.height = "100%", a = function() { var a = window.document.getElementById("embedtarget");
                a.style.width = "100%";
                a.style.height = "100%";
                a.style.left = "0";
                a.style.top = "0";
                q.$GI.$XH.$MS(null) }, a(), window.setTimeout(a, 500))
    };
    g.Main = De;
    De.__name__ = ["Main"];
    De.__super__ = n;
    De.prototype = m(n.prototype, {
        get_entitySlot: function() { return 44 },
        onSuccess: function() { window.console.log("Nick Shmup: " + Hc.getBuildLog());
            this.owner.add(new Ee("preloader")) },
        onStart: function() { q.root.add(new Fe); var a = new Zc,
                b = new Ob;
            this.owner.add(a);
            this.owner.add(b);
            b.set("isMobile", y.get_mobile());
            this.owner.add(new Ge(!0));
            b = gc.get_base();
            null != b && "" != b && (-1 < b.toLowerCase().indexOf("http:") || -1 < b.toLowerCase().indexOf("https:") ? (b.charAt(b.length - 1), a.remoteBase = b + "assets") : a.localBase = b + "/assets");
            Na.init(new zd("#"), ha(this, this.onSuccess));
            mj.checkPiracy("#") },
        __class__: De
    });
    Math.__name__ = ["Math"];
    var P = function() {};
    g.Reflect = P;
    P.__name__ = ["Reflect"];
    P.hasField = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };
    P.field = function(a, b) { try { return a[b] } catch (c) { return c instanceof s && (c = c.val), null } };
    P.setField = function(a, b, c) { a[b] = c };
    P.getProperty = function(a, b) { var c; return null == a ? null : a.__properties__ && (c = a.__properties__["get_" + b]) ? a[c]() : a[b] };
    P.setProperty = function(a, b, c) { var d; if (a.__properties__ && (d = a.__properties__["set_" + b])) a[d](c);
        else a[b] = c };
    P.callMethod =
        function(a, b, c) { return b.apply(a, c) };
    P.fields = function(a) { var b = []; if (null != a) { var c = Object.prototype.hasOwnProperty,
                d; for (d in a) "__id__" != d && "hx__closures__" != d && c.call(a, d) && b.push(d) } return b };
    P.isFunction = function(a) { return "function" == typeof a && !(a.__name__ || a.__ename__) };
    P.compare = function(a, b) { return a == b ? 0 : a > b ? 1 : -1 };
    P.deleteField = function(a, b) { if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b]; return !0 };
    var u = function() {};
    g.Std = u;
    u.__name__ = ["Std"];
    u.is = function(a, b) {
        return Z.__instanceof(a,
            b)
    };
    u.instance = function(a, b) { return a instanceof b ? a : null };
    u.string = function(a) { return Z.__string_rec(a, "") };
    u["int"] = function(a) { return a | 0 };
    u.parseInt = function(a) { var b = parseInt(a, 10);
        0 != b || 120 != D.cca(a, 1) && 88 != D.cca(a, 1) || (b = parseInt(a)); return isNaN(b) ? null : b };
    u.parseFloat = function(a) { return parseFloat(a) };
    var eb = function() { this.b = "" };
    g.StringBuf = eb;
    eb.__name__ = ["StringBuf"];
    eb.prototype = {
        add: function(a) { this.b += u.string(a) },
        addSub: function(a, b, c) {
            this.b = null == c ? this.b + D.substr(a, b, null) : this.b +
                D.substr(a, b, c)
        },
        __class__: eb
    };
    var I = function() {};
    g.StringTools = I;
    I.__name__ = ["StringTools"];
    I.htmlEscape = function(a, b) { a = a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"); return b ? a.split('"').join("&quot;").split("'").join("&#039;") : a };
    I.startsWith = function(a, b) { return a.length >= b.length && D.substr(a, 0, b.length) == b };
    I.isSpace = function(a, b) { var c = D.cca(a, b); return 8 < c && 14 > c || 32 == c };
    I.ltrim = function(a) {
        for (var b = a.length, c = 0; c < b && I.isSpace(a, c);) c++;
        return 0 < c ? D.substr(a, c,
            b - c) : a
    };
    I.rtrim = function(a) { for (var b = a.length, c = 0; c < b && I.isSpace(a, b - c - 1);) c++; return 0 < c ? D.substr(a, 0, b - c) : a };
    I.trim = function(a) { return I.ltrim(I.rtrim(a)) };
    I.lpad = function(a, b, c) { if (0 >= b.length) return a; for (; a.length < c;) a = b + a; return a };
    I.replace = function(a, b, c) { return a.split(b).join(c) };
    I.fastCodeAt = function(a, b) { return a.charCodeAt(b) };
    var W = g.ValueType = { __ename__: ["ValueType"], __constructs__: "TNull TInt TFloat TBool TObject TFunction TClass TEnum TUnknown".split(" ") };
    W.TNull = ["TNull", 0];
    W.TNull.toString =
        l;
    W.TNull.__enum__ = W;
    W.TInt = ["TInt", 1];
    W.TInt.toString = l;
    W.TInt.__enum__ = W;
    W.TFloat = ["TFloat", 2];
    W.TFloat.toString = l;
    W.TFloat.__enum__ = W;
    W.TBool = ["TBool", 3];
    W.TBool.toString = l;
    W.TBool.__enum__ = W;
    W.TObject = ["TObject", 4];
    W.TObject.toString = l;
    W.TObject.__enum__ = W;
    W.TFunction = ["TFunction", 5];
    W.TFunction.toString = l;
    W.TFunction.__enum__ = W;
    W.TClass = function(a) { a = ["TClass", 6, a];
        a.__enum__ = W;
        a.toString = l; return a };
    W.TEnum = function(a) { a = ["TEnum", 7, a];
        a.__enum__ = W;
        a.toString = l; return a };
    W.TUnknown = ["TUnknown",
        8
    ];
    W.TUnknown.toString = l;
    W.TUnknown.__enum__ = W;
    var da = function() {};
    g.Type = da;
    da.__name__ = ["Type"];
    da.getClassName = function(a) { a = a.__name__; return null == a ? null : a.join(".") };
    da.getEnumName = function(a) { return a.__ename__.join(".") };
    da.resolveClass = function(a) { a = g[a]; return null != a && a.__name__ ? a : null };
    da.resolveEnum = function(a) { a = g[a]; return null != a && a.__ename__ ? a : null };
    da.createInstance = function(a, b) {
        switch (b.length) {
            case 0:
                return new a;
            case 1:
                return new a(b[0]);
            case 2:
                return new a(b[0], b[1]);
            case 3:
                return new a(b[0],
                    b[1], b[2]);
            case 4:
                return new a(b[0], b[1], b[2], b[3]);
            case 5:
                return new a(b[0], b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            default:
                throw new s("Too many arguments");
        }
    };
    da.createEmptyInstance = function(a) {
        function b() {} b.prototype = a.prototype; return new b };
    da.createEnum = function(a, b, c) {
        var d = P.field(a, b);
        if (null == d) throw new s("No such constructor " + b);
        if (P.isFunction(d)) {
            if (null ==
                c) throw new s("Constructor " + b + " need parameters");
            return P.callMethod(a, d, c)
        }
        if (null != c && 0 != c.length) throw new s("Constructor " + b + " does not need parameters");
        return d
    };
    da.getEnumConstructs = function(a) { return a.__constructs__.slice() };
    da["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return W.TBool;
            case "string":
                return W.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? W.TInt : W.TFloat;
            case "object":
                if (null == a) return W.TNull;
                var b = a.__enum__;
                if (null != b) return W.TEnum(b);
                a = Z.getClass(a);
                return null != a ? W.TClass(a) : W.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? W.TObject : W.TFunction;
            case "undefined":
                return W.TNull;
            default:
                return W.TUnknown
        }
    };
    da.enumEq = function(a, b) { if (a == b) return !0; try { if (a[0] != b[0]) return !1; for (var c = 2, d = a.length; c < d;) { var e = c++; if (!da.enumEq(a[e], b[e])) return !1 } var f = a.__enum__; if (f != b.__enum__ || null == f) return !1 } catch (k) { return k instanceof s && (k = k.val), !1 } return !0 };
    var v = function(a) { this.nodeType = a;
        this.children = [];
        this.attributeMap = new O };
    g.Xml = v;
    v.__name__ = ["Xml"];
    v.parse = function(a) { return nc.parse(a) };
    v.createElement = function(a) { var b = new v(v.Element); if (b.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + b.nodeType);
        b.nodeName = a; return b };
    v.createPCData = function(a) { var b = new v(v.PCData); if (b.nodeType == v.Document || b.nodeType == v.Element) throw new s("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a; return b };
    v.createCData = function(a) {
        var b = new v(v.CData);
        if (b.nodeType == v.Document || b.nodeType == v.Element) throw new s("Bad node type, unexpected " +
            b.nodeType);
        b.nodeValue = a;
        return b
    };
    v.createComment = function(a) { var b = new v(v.Comment); if (b.nodeType == v.Document || b.nodeType == v.Element) throw new s("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a; return b };
    v.createDocType = function(a) { var b = new v(v.DocType); if (b.nodeType == v.Document || b.nodeType == v.Element) throw new s("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a; return b };
    v.createProcessingInstruction = function(a) {
        var b = new v(v.ProcessingInstruction);
        if (b.nodeType == v.Document || b.nodeType ==
            v.Element) throw new s("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    v.createDocument = function() { return new v(v.Document) };
    v.prototype = {
        get_nodeName: function() { if (this.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + this.nodeType); return this.nodeName },
        get_nodeValue: function() { if (this.nodeType == v.Document || this.nodeType == v.Element) throw new s("Bad node type, unexpected " + this.nodeType); return this.nodeValue },
        get: function(a) {
            if (this.nodeType != v.Element) throw new s("Bad node type, expected Element but found " +
                this.nodeType);
            return this.attributeMap.get(a)
        },
        set: function(a, b) { if (this.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + this.nodeType);
            this.attributeMap.set(a, b) },
        exists: function(a) { if (this.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + this.nodeType); return this.attributeMap.exists(a) },
        attributes: function() { if (this.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + this.nodeType); return this.attributeMap.keys() },
        iterator: function() { if (this.nodeType != v.Document && this.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType); return D.iter(this.children) },
        elements: function() { if (this.nodeType != v.Document && this.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType); for (var a = [], b = 0, c = this.children; b < c.length;) { var d = c[b];++b;
                d.nodeType == v.Element && a.push(d) } return D.iter(a) },
        elementsNamed: function(a) {
            if (this.nodeType !=
                v.Document && this.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var b = [], c = 0, d = this.children; c < d.length;) { var e = d[c];++c; var f; if (f = e.nodeType == v.Element) { f = void 0; if (e.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + e.nodeType);
                    f = e.nodeName;
                    f = f == a } f && b.push(e) }
            return D.iter(b)
        },
        firstChild: function() {
            if (this.nodeType != v.Document && this.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " +
                this.nodeType);
            return this.children[0]
        },
        firstElement: function() { if (this.nodeType != v.Document && this.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType); for (var a = 0, b = this.children; a < b.length;) { var c = b[a];++a; if (c.nodeType == v.Element) return c } return null },
        addChild: function(a) {
            if (this.nodeType != v.Document && this.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType);
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this
        },
        removeChild: function(a) { if (this.nodeType != v.Document && this.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType); return D.remove(this.children, a) ? (a.parent = null, !0) : !1 },
        toString: function() { return $c.print(this) },
        __class__: v,
        __properties__: { get_nodeValue: "get_nodeValue", get_nodeName: "get_nodeName" }
    };
    var Ic = function() { this.lowerBound = new E;
        this.upperBound = new E };
    g["box2d.collision.AABB"] = Ic;
    Ic.__name__ = ["box2d", "collision",
        "AABB"
    ];
    Ic.prototype = {
        getCenter: function() { return new E((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2) },
        contains: function(a) { var b; return b = (b = (b = (b = this.lowerBound.x <= a.lowerBound.x) && this.lowerBound.y <= a.lowerBound.y) && a.upperBound.x <= this.upperBound.x) && a.upperBound.y <= this.upperBound.y },
        testOverlap: function(a) {
            var b = a.lowerBound.y - this.upperBound.y,
                c = this.lowerBound.y - a.upperBound.y;
            return 0 < a.lowerBound.x - this.upperBound.x || 0 < b || 0 < this.lowerBound.x - a.upperBound.x ||
                0 < c ? !1 : !0
        },
        combine: function(a, b) { this.lowerBound.x = Math.min(a.lowerBound.x, b.lowerBound.x);
            this.lowerBound.y = Math.min(a.lowerBound.y, b.lowerBound.y);
            this.upperBound.x = Math.max(a.upperBound.x, b.upperBound.x);
            this.upperBound.y = Math.max(a.upperBound.y, b.upperBound.y) },
        __class__: Ic
    };
    var Ie = function() { this.v = new E;
        this.id = new He };
    g["box2d.collision.ClipVertex"] = Ie;
    Ie.__name__ = ["box2d", "collision", "ClipVertex"];
    Ie.prototype = { set: function(a) { this.v.setV(a.v);
            this.id.set(a.id) }, __class__: Ie };
    var E = function(a,
        b) { null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b };
    g["box2d.common.math.Vec2"] = E;
    E.__name__ = ["box2d", "common", "math", "Vec2"];
    E.make = function(a, b) { return new E(a, b) };
    E.prototype = {
        setZero: function() { this.y = this.x = 0 },
        set: function(a, b) { null == b && (b = 0);
            null == a && (a = 0);
            this.x = a;
            this.y = b },
        setV: function(a) { this.x = a.x;
            this.y = a.y },
        getNegative: function() { return new E(-this.x, -this.y) },
        negativeSelf: function() { this.x = -this.x;
            this.y = -this.y },
        copy: function() { return new E(this.x, this.y) },
        multiply: function(a) {
            this.x *=
                a;
            this.y *= a
        },
        length: function() { return Math.sqrt(this.x * this.x + this.y * this.y) },
        lengthSquared: function() { return this.x * this.x + this.y * this.y },
        normalize: function() { var a = Math.sqrt(this.x * this.x + this.y * this.y); if (2.2250738585072014E-308 > a) return 0; var b = 1 / a;
            this.x *= b;
            this.y *= b; return a },
        __class__: E
    };
    var He = function() { this.features = new Vh;
        this.features.$K = this };
    g["box2d.collision.ContactID"] = He;
    He.__name__ = ["box2d", "collision", "ContactID"];
    He.prototype = {
        set: function(a) { this.set_key(a.$F) },
        set_key: function(a) {
            this.$F =
                a;
            this.features.$G = this.$F & 255;
            this.features.$H = (this.$F & 65280) >> 8 & 255;
            this.features.$I = (this.$F & 16711680) >> 16 & 255;
            this.features.$J = (this.$F & -16777216) >> 24 & 255;
            return this.$F
        },
        __class__: He,
        __properties__: { set_key: "set_key" }
    };
    var Vh = function() {};
    g["box2d.collision.Features"] = Vh;
    Vh.__name__ = ["box2d", "collision", "Features"];
    Vh.prototype = {
        set_referenceEdge: function(a) { this.$G = a;
            this.$K.$F = this.$K.$F & -256 | this.$G & 255; return a },
        set_incidentEdge: function(a) {
            this.$H = a;
            this.$K.$F = this.$K.$F & -65281 | this.$H <<
                8 & 65280;
            return a
        },
        set_incidentVertex: function(a) { this.$I = a;
            this.$K.$F = this.$K.$F & -16711681 | this.$I << 16 & 16711680; return a },
        set_flip: function(a) { this.$J = a;
            this.$K.$F = this.$K.$F & 16777215 | this.$J << 24 & -16777216; return a },
        __class__: Vh,
        __properties__: { set_flip: "set_flip", set_incidentVertex: "set_incidentVertex", set_incidentEdge: "set_incidentEdge", set_referenceEdge: "set_referenceEdge" }
    };
    var Q = function() {};
    g["box2d.collision.Collision"] = Q;
    Q.__name__ = ["box2d", "collision", "Collision"];
    Q.clipSegmentToLine = function(a,
        b, c, d) { var e, f = 0;
        e = b[0]; var k = e.v;
        e = b[1]; var p = e.v,
            r = c.x * k.x + c.y * k.y - d;
        e = c.x * p.x + c.y * p.y - d;
        0 >= r && a[f++].set(b[0]);
        0 >= e && a[f++].set(b[1]);
        0 > r * e && (c = r / (r - e), e = a[f], e = e.v, e.x = k.x + c * (p.x - k.x), e.y = k.y + c * (p.y - k.y), e = a[f], e.id = (0 < r ? b[0] : b[1]).id, ++f); return f };
    Q.edgeSeparation = function(a, b, c, d, e) {
        var f = a.$d;
        a = a.$qB;
        var k = d.$rB,
            p = d.$d,
            r, g;
        r = b.R;
        g = a[c];
        a = r.col1.x * g.x + r.col2.x * g.y;
        d = r.col1.y * g.x + r.col2.y * g.y;
        r = e.R;
        var h = r.col1.x * a + r.col1.y * d;
        r = r.col2.x * a + r.col2.y * d;
        for (var l = 0, L = 1.7976931348623157E308, m = 0; m <
            k;) { var n = m++;
            g = p[n];
            g = g.x * h + g.y * r;
            g < L && (L = g, l = n) } g = f[c];
        r = b.R;
        c = b.position.x + (r.col1.x * g.x + r.col2.x * g.y);
        b = b.position.y + (r.col1.y * g.x + r.col2.y * g.y);
        g = p[l];
        r = e.R;
        f = e.position.x + (r.col1.x * g.x + r.col2.x * g.y);
        e = e.position.y + (r.col1.y * g.x + r.col2.y * g.y);
        return (f - c) * a + (e - b) * d
    };
    Q.findMaxSeparation = function(a, b, c, d, e) {
        var f = b.$rB,
            k = b.$qB,
            p, r;
        r = e.R;
        p = d.$pB;
        var g = e.position.x + (r.col1.x * p.x + r.col2.x * p.y),
            h = e.position.y + (r.col1.y * p.x + r.col2.y * p.y);
        r = c.R;
        p = b.$pB;
        g -= c.position.x + (r.col1.x * p.x + r.col2.x * p.y);
        h -= c.position.y +
            (r.col1.y * p.x + r.col2.y * p.y);
        r = g * c.R.col1.x + h * c.R.col1.y;
        for (var h = g * c.R.col2.x + h * c.R.col2.y, g = 0, l = -1.7976931348623157E308, L = 0; L < f;) { var m = L++;
            p = k[m];
            p = p.x * r + p.y * h;
            p > l && (l = p, g = m) } k = Q.edgeSeparation(b, c, g, d, e);
        l = 0 <= g - 1 ? g - 1 : f - 1;
        r = Q.edgeSeparation(b, c, l, d, e);
        L = g + 1 < f ? g + 1 : 0;
        h = Q.edgeSeparation(b, c, L, d, e);
        if (r > k && r > h) p = -1;
        else if (h > k) p = 1, l = L, r = h;
        else return a[0] = g, k;
        for (;;)
            if (g = -1 == p ? 0 <= l - 1 ? l - 1 : f - 1 : l + 1 < f ? l + 1 : 0, k = Q.edgeSeparation(b, c, g, d, e), k > r) l = g, r = k;
            else break;
        a[0] = l;
        return r
    };
    Q.findIncidentEdge = function(a,
        b, c, d, e, f) {
        var k = b.$qB,
            p = e.$rB;
        b = e.$d;
        e = e.$qB;
        var r;
        r = c.R;
        c = k[d];
        var k = r.col1.x * c.x + r.col2.x * c.y,
            g = r.col1.y * c.x + r.col2.y * c.y;
        r = f.R;
        c = r.col1.x * k + r.col1.y * g;
        g = r.col2.x * k + r.col2.y * g;
        k = c;
        r = 0;
        for (var h = 1.7976931348623157E308, l = 0; l < p;) { var L = l++;
            c = e[L];
            c = k * c.x + g * c.y;
            c < h && (h = c, r = L) } e = r;
        k = e + 1 < p ? e + 1 : 0;
        p = a[0];
        c = b[e];
        r = f.R;
        p.v.x = f.position.x + (r.col1.x * c.x + r.col2.x * c.y);
        p.v.y = f.position.y + (r.col1.y * c.x + r.col2.y * c.y);
        p.id.features.set_referenceEdge(d);
        p.id.features.set_incidentEdge(e);
        p.id.features.set_incidentVertex(0);
        p = a[1];
        c = b[k];
        r = f.R;
        p.v.x = f.position.x + (r.col1.x * c.x + r.col2.x * c.y);
        p.v.y = f.position.y + (r.col1.y * c.x + r.col2.y * c.y);
        p.id.features.set_referenceEdge(d);
        p.id.features.set_incidentEdge(k);
        p.id.features.set_incidentVertex(1)
    };
    Q.$L = function() { var a = [];
        a[0] = new Ie;
        a[1] = new Ie; return a };
    Q.collidePolygons = function(a, b, c, d, e) {
        var f;
        a.$GB = 0;
        var k = b.$l + d.$l,
            p;
        Q.$P[0] = 0;
        var r = Q.findMaxSeparation(Q.$P, b, c, d, e);
        p = Q.$P[0];
        if (!(r > k)) {
            var g;
            Q.$Q[0] = 0;
            var h = Q.findMaxSeparation(Q.$Q, d, e, b, c);
            g = Q.$Q[0];
            if (!(h > k)) {
                h > 0.98 *
                    r + 0.001 ? (r = d, d = b, b = e, a.$FB = 2, p = 1) : (r = b, b = c, c = e, g = p, a.$FB = 1, p = 0);
                e = Q.$M;
                Q.findIncidentEdge(e, r, b, g, d, c);
                h = r.$d;
                d = h[g];
                var l;
                l = g + 1 < r.$rB ? h[g + 1] : h[0];
                r = Q.$R;
                r.set(l.x - d.x, l.y - d.y);
                r.normalize();
                h = Q.$S;
                h.x = r.y;
                h.y = -r.x;
                f = Q.$T;
                f.set(0.5 * (d.x + l.x), 0.5 * (d.y + l.y));
                var L = Q.$V;
                g = b.R;
                L.x = g.col1.x * r.x + g.col2.x * r.y;
                L.y = g.col1.y * r.x + g.col2.y * r.y;
                var m = Q.$W;
                m.x = -L.x;
                m.y = -L.y;
                r = Q.$U;
                r.x = L.y;
                r.y = -L.x;
                var n = Q.$X,
                    q = Q.$Y;
                n.x = b.position.x + (g.col1.x * d.x + g.col2.x * d.y);
                n.y = b.position.y + (g.col1.y * d.x + g.col2.y * d.y);
                q.x = b.position.x +
                    (g.col1.x * l.x + g.col2.x * l.y);
                q.y = b.position.y + (g.col1.y * l.x + g.col2.y * l.y);
                b = r.x * n.x + r.y * n.y;
                g = L.x * q.x + L.y * q.y + k;
                l = Q.$N;
                d = Q.$O;
                e = Q.clipSegmentToLine(l, e, m, -L.x * n.x - L.y * n.y + k);
                if (!(2 > e || (e = Q.clipSegmentToLine(d, l, L, g), 2 > e))) { a.$DB.setV(h);
                    a.$EB.setV(f); for (h = e = 0; 2 > h;) g = h++, f = d[g], r.x * f.v.x + r.y * f.v.y - b <= k && (L = a.$CB[e], g = c.R, m = f.v.x - c.position.x, n = f.v.y - c.position.y, L.$EB.x = m * g.col1.x + n * g.col1.y, L.$EB.y = m * g.col2.x + n * g.col2.y, L.$JB.set(f.id), L.$JB.features.set_flip(p), ++e);
                    a.$GB = e }
            }
        }
    };
    Q.collideCircles =
        function(a, b, c, d, e) { a.$GB = 0; var f, k;
            f = c.R;
            k = b.$ZB; var p = c.position.x + (f.col1.x * k.x + f.col2.x * k.y);
            c = c.position.y + (f.col1.y * k.x + f.col2.y * k.y);
            f = e.R;
            k = d.$ZB;
            p = e.position.x + (f.col1.x * k.x + f.col2.x * k.y) - p;
            e = e.position.y + (f.col1.y * k.x + f.col2.y * k.y) - c;
            f = b.$l + d.$l;
            p * p + e * e > f * f || (a.$FB = 0, a.$EB.setV(b.$ZB), a.$DB.setZero(), a.$GB = 1, a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0)) };
    Q.collidePolygonAndCircle = function(a, b, c, d, e) {
        a.$GB = 0;
        var f, k, p, r;
        r = e.R;
        p = d.$ZB;
        var g = e.position.y + (r.col1.y * p.x + r.col2.y * p.y);
        f = e.position.x +
            (r.col1.x * p.x + r.col2.x * p.y) - c.position.x;
        k = g - c.position.y;
        r = c.R;
        c = f * r.col1.x + k * r.col1.y;
        r = f * r.col2.x + k * r.col2.y;
        var h = 0;
        e = -1.7976931348623157E308;
        var g = b.$l + d.$l,
            l = b.$rB,
            L = b.$d;
        b = b.$qB;
        for (var m = 0; m < l;) { var n = m++;
            p = L[n];
            f = c - p.x;
            k = r - p.y;
            p = b[n];
            p = p.x * f + p.y * k; if (p > g) return;
            p > e && (e = p, h = n) } p = h;
        f = L[p];
        l = L[p + 1 < l ? p + 1 : 0];
        2.2250738585072014E-308 > e ? (a.$GB = 1, a.$FB = 1, a.$DB.setV(b[h]), a.$EB.x = 0.5 * (f.x + l.x), a.$EB.y = 0.5 * (f.y + l.y), a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0)) : (e = (c - l.x) * (f.x - l.x) + (r - l.y) * (f.y -
            l.y), 0 >= (c - f.x) * (l.x - f.x) + (r - f.y) * (l.y - f.y) ? (c - f.x) * (c - f.x) + (r - f.y) * (r - f.y) > g * g || (a.$GB = 1, a.$FB = 1, a.$DB.x = c - f.x, a.$DB.y = r - f.y, a.$DB.normalize(), a.$EB.setV(f), a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0)) : 0 >= e ? (c - l.x) * (c - l.x) + (r - l.y) * (r - l.y) > g * g || (a.$GB = 1, a.$FB = 1, a.$DB.x = c - l.x, a.$DB.y = r - l.y, a.$DB.normalize(), a.$EB.setV(l), a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0)) : (h = 0.5 * (f.x + l.x), f = 0.5 * (f.y + l.y), e = (c - h) * b[p].x + (r - f) * b[p].y, e > g || (a.$GB = 1, a.$FB = 1, a.$DB.x = b[p].x, a.$DB.y = b[p].y, a.$DB.normalize(),
            a.$EB.set(h, f), a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0))))
    };
    var Wh = function() { this.$a = new Ad;
        this.$b = new Ad;
        this.$c = new Ad;
        this.$d = [];
        this.$d[0] = this.$a;
        this.$d[1] = this.$b;
        this.$d[2] = this.$c };
    g["box2d.collision.Simplex"] = Wh;
    Wh.__name__ = ["box2d", "collision", "Simplex"];
    Wh.prototype = {
        readCache: function(a, b, c, d, e) {
            var f, k;
            this.$e = a.count;
            for (var p = this.$d, r, g = 0, h = this.$e; g < h;) f = g++, r = p[f], r.indexA = a.indexA[f], r.indexB = a.indexB[f], f = b.$d[r.indexA], k = d.$d[r.indexB], r.wA = B.mulX(c, f), r.wB = B.mulX(e,
                k), r.w = B.subtractVV(r.wB, r.wA), r.a = 0;
            1 < this.$e && (a = a.metric, r = this.getMetric(), r < 0.5 * a || 2 * a < r || 2.2250738585072014E-308 > r) && (this.$e = 0);
            0 == this.$e && (r = p[0], r.indexA = 0, r.indexB = 0, f = b.$d[0], k = d.$d[0], r.wA = B.mulX(c, f), r.wB = B.mulX(e, k), r.w = B.subtractVV(r.wB, r.wA), this.$e = 1)
        },
        writeCache: function(a) { a.metric = this.getMetric();
            a.count = this.$e; for (var b = this.$d, c = 0, d = this.$e; c < d;) { var e = c++;
                a.indexA[e] = b[e].indexA;
                a.indexB[e] = b[e].indexB } },
        getSearchDirection: function() {
            switch (this.$e) {
                case 1:
                    return this.$a.w.getNegative();
                case 2:
                    var a = B.subtractVV(this.$b.w, this.$a.w);
                    return 0 < B.crossVV(a, this.$a.w.getNegative()) ? B.crossFV(1, a) : B.crossVF(a, 1);
                default:
                    return new E
            }
        },
        getClosestPoint: function() { switch (this.$e) {
                case 0:
                    return new E;
                case 1:
                    return this.$a.w;
                case 2:
                    return new E(this.$a.a * this.$a.w.x + this.$b.a * this.$b.w.x, this.$a.a * this.$a.w.y + this.$b.a * this.$b.w.y);
                default:
                    return new E } },
        getWitnessPoints: function(a, b) {
            switch (this.$e) {
                case 0:
                    null;
                    break;
                case 1:
                    a.setV(this.$a.wA);
                    b.setV(this.$a.wB);
                    break;
                case 2:
                    a.x = this.$a.a *
                        this.$a.wA.x + this.$b.a * this.$b.wA.x;
                    a.y = this.$a.a * this.$a.wA.y + this.$b.a * this.$b.wA.y;
                    b.x = this.$a.a * this.$a.wB.x + this.$b.a * this.$b.wB.x;
                    b.y = this.$a.a * this.$a.wB.y + this.$b.a * this.$b.wB.y;
                    break;
                case 3:
                    b.x = a.x = this.$a.a * this.$a.wA.x + this.$b.a * this.$b.wA.x + this.$c.a * this.$c.wA.x;
                    b.y = a.y = this.$a.a * this.$a.wA.y + this.$b.a * this.$b.wA.y + this.$c.a * this.$c.wA.y;
                    break;
                default:
                    null
            }
        },
        getMetric: function() {
            switch (this.$e) {
                case 0:
                    return 0;
                case 1:
                    return 0;
                case 2:
                    return B.subtractVV(this.$a.w, this.$b.w).length();
                case 3:
                    return B.crossVV(B.subtractVV(this.$b.w,
                        this.$a.w), B.subtractVV(this.$c.w, this.$a.w));
                default:
                    return 0
            }
        },
        solve2: function() { var a = this.$a.w,
                b = this.$b.w,
                c = B.subtractVV(b, a),
                a = -(a.x * c.x + a.y * c.y);
            0 >= a ? this.$e = this.$a.a = 1 : (b = b.x * c.x + b.y * c.y, 0 >= b ? (this.$e = this.$b.a = 1, this.$a.set(this.$b)) : (c = 1 / (b + a), this.$a.a = b * c, this.$b.a = a * c, this.$e = 2)) },
        solve3: function() {
            var a = this.$a.w,
                b = this.$b.w,
                c = this.$c.w,
                d = B.subtractVV(b, a),
                e = B.dot(a, d),
                f = B.dot(b, d),
                e = -e,
                k = B.subtractVV(c, a),
                p = B.dot(a, k),
                r = B.dot(c, k),
                p = -p,
                g = B.subtractVV(c, b),
                h = B.dot(b, g),
                g = B.dot(c, g),
                h = -h,
                k = B.crossVV(d, k),
                d = k * B.crossVV(b, c),
                c = k * B.crossVV(c, a),
                a = k * B.crossVV(a, b);
            0 >= e && 0 >= p ? this.$e = this.$a.a = 1 : 0 < f && 0 < e && 0 >= a ? (r = 1 / (f + e), this.$a.a = f * r, this.$b.a = e * r, this.$e = 2) : 0 < r && 0 < p && 0 >= c ? (f = 1 / (r + p), this.$a.a = r * f, this.$c.a = p * f, this.$e = 2, this.$b.set(this.$c)) : 0 >= f && 0 >= h ? (this.$e = this.$b.a = 1, this.$a.set(this.$b)) : 0 >= r && 0 >= g ? (this.$e = this.$c.a = 1, this.$a.set(this.$c)) : 0 < g && 0 < h && 0 >= d ? (f = 1 / (g + h), this.$b.a = g * f, this.$c.a = h * f, this.$e = 2, this.$a.set(this.$c)) : (f = 1 / (d + c + a), this.$a.a = d * f, this.$b.a = c * f, this.$c.a =
                a * f, this.$e = 3)
        },
        __class__: Wh
    };
    var Ad = function() {};
    g["box2d.collision.SimplexVertex"] = Ad;
    Ad.__name__ = ["box2d", "collision", "SimplexVertex"];
    Ad.prototype = { set: function(a) { this.wA.setV(a.wA);
            this.wB.setV(a.wB);
            this.w.setV(a.w);
            this.a = a.a;
            this.indexA = a.indexA;
            this.indexB = a.indexB }, __class__: Ad };
    var pb = function() {};
    g["box2d.collision.Distance"] = pb;
    pb.__name__ = ["box2d", "collision", "Distance"];
    pb.distance = function(a, b, c) {
        ++pb.$f;
        var d = c.proxyA,
            e = c.proxyB,
            f = c.transformA,
            k = c.transformB,
            p = pb.$i;
        p.readCache(b,
            d, f, e, k);
        var r = p.$d,
            g = pb.$j,
            h = pb.$k,
            l = 0;
        p.getClosestPoint().lengthSquared();
        for (var L, m = 0; 20 > m;) {
            l = p.$e;
            for (L = 0; L < l;) { var n = L++;
                g[n] = r[n].indexA;
                h[n] = r[n].indexB }
            switch (p.$e) {
                case 1:
                    break;
                case 2:
                    p.solve2(); break;
                case 3:
                    p.solve3(); break;
                default:
                    null }
            if (3 == p.$e) break;
            L = p.getClosestPoint();
            L.lengthSquared();
            n = p.getSearchDirection();
            if (0 > n.lengthSquared()) break;
            L = r[p.$e];
            L.indexA = d.getSupport(B.mulTMV(f.R, n.getNegative()));
            L.wA = B.mulX(f, d.$d[L.indexA]);
            L.indexB = e.getSupport(B.mulTMV(k.R, n));
            L.wB = B.mulX(k,
                e.$d[L.indexB]);
            L.w = B.subtractVV(L.wB, L.wA);
            ++m;
            ++pb.$g;
            for (var n = !1, q = 0; q < l;) { var J = q++; if (L.indexA == g[J] && L.indexB == h[J]) { n = !0; break } }
            if (n) break;
            ++p.$e
        }
        pb.$h = B.max(pb.$h, m);
        p.getWitnessPoints(a.pointA, a.pointB);
        a.distance = B.subtractVV(a.pointA, a.pointB).length();
        a.iterations = m;
        p.writeCache(b);
        c.useRadii && (b = d.$l, e = e.$l, a.distance > b + e && 2.2250738585072014E-308 < a.distance ? (a.distance -= b + e, c = B.subtractVV(a.pointB, a.pointA), c.normalize(), a.pointA.x += b * c.x, a.pointA.y += b * c.y, a.pointB.x -= e * c.x, a.pointB.y -=
            e * c.y) : (L = new E, L.x = 0.5 * (a.pointA.x + a.pointB.x), L.y = 0.5 * (a.pointA.y + a.pointB.y), a.pointA.x = a.pointB.x = L.x, a.pointA.y = a.pointB.y = L.y, a.distance = 0))
    };
    var Je = function() {};
    g["box2d.collision.DistanceInput"] = Je;
    Je.__name__ = ["box2d", "collision", "DistanceInput"];
    Je.prototype = { __class__: Je };
    var Ke = function() { this.pointA = new E;
        this.pointB = new E };
    g["box2d.collision.DistanceOutput"] = Ke;
    Ke.__name__ = ["box2d", "collision", "DistanceOutput"];
    Ke.prototype = { __class__: Ke };
    var ad = function() { this.$d = [] };
    g["box2d.collision.DistanceProxy"] =
        ad;
    ad.__name__ = ["box2d", "collision", "DistanceProxy"];
    ad.prototype = {
        set: function(a) { switch (a.$FB) {
                case 0:
                    this.$d = [a.$ZB];
                    this.$e = 1;
                    this.$l = a.$l; break;
                case 1:
                    this.$d = a.$d;
                    this.$e = a.$rB;
                    this.$l = a.$l; break;
                default:
                    null } },
        getSupport: function(a) { for (var b = 0, c = this.$d[0].x * a.x + this.$d[0].y * a.y, d = 1, e = this.$e; d < e;) { var f = d++,
                    k = this.$d[f].x * a.x + this.$d[f].y * a.y;
                k > c && (b = f, c = k) } return b },
        getSupportVertex: function(a) {
            for (var b = 0, c = this.$d[0].x * a.x + this.$d[0].y * a.y, d = 1, e = this.$e; d < e;) {
                var f = d++,
                    k = this.$d[f].x *
                    a.x + this.$d[f].y * a.y;
                k > c && (b = f, c = k)
            }
            return this.$d[b]
        },
        __class__: ad
    };
    var Xh = function() { this.$r = this.$q = null;
        this.$t = this.$s = 0 };
    g["box2d.collision.DynamicTree"] = Xh;
    Xh.__name__ = ["box2d", "collision", "DynamicTree"];
    Xh.prototype = {
        createProxy: function(a, b) { var c = this.$m();
            c.aabb.lowerBound.x = a.lowerBound.x - 0.1;
            c.aabb.lowerBound.y = a.lowerBound.y - 0.1;
            c.aabb.upperBound.x = a.upperBound.x + 0.1;
            c.aabb.upperBound.y = a.upperBound.y + 0.1;
            c.userData = b;
            this.$o(c); return c },
        destroyProxy: function(a) { this.$p(a);
            this.$n(a) },
        moveProxy: function(a, b, c) { if (a.aabb.contains(b)) return !1;
            this.$p(a); var d;
            d = 0.1 + 2 * (0 < c.x ? c.x : -c.x);
            c = 0.1 + 2 * (0 < c.y ? c.y : -c.y);
            a.aabb.lowerBound.x = b.lowerBound.x - d;
            a.aabb.lowerBound.y = b.lowerBound.y - c;
            a.aabb.upperBound.x = b.upperBound.x + d;
            a.aabb.upperBound.y = b.upperBound.y + c;
            this.$o(a); return !0 },
        getFatAABB: function(a) { return a.aabb },
        getUserData: function(a) { return a.userData },
        query: function(a, b) {
            if (null != this.$q) {
                var c = [],
                    d = 0;
                for (c[d++] = this.$q; 0 < d;) {
                    var e = c[--d];
                    if (e.aabb.testOverlap(b))
                        if (null == e.child1) { if (!a(e)) break } else c[d++] =
                            e.child1, c[d++] = e.child2
                }
            }
        },
        $m: function() { if (null != this.$r) { var a = this.$r;
                this.$r = a.parent;
                a.parent = null;
                a.child1 = null;
                a.child2 = null; return a } return new Bd },
        $n: function(a) { a.parent = this.$r;
            this.$r = a },
        $o: function(a) {
            ++this.$t;
            if (null == this.$q) this.$q = a, this.$q.parent = null;
            else {
                var b = a.aabb.getCenter(),
                    c = this.$q;
                if (null == c.child1 == !1) {
                    do var d = c.child1,
                        c = c.child2,
                        e = Math.abs((d.aabb.lowerBound.x + d.aabb.upperBound.x) / 2 - b.x) + Math.abs((d.aabb.lowerBound.y + d.aabb.upperBound.y) / 2 - b.y),
                        f = Math.abs((c.aabb.lowerBound.x +
                            c.aabb.upperBound.x) / 2 - b.x) + Math.abs((c.aabb.lowerBound.y + c.aabb.upperBound.y) / 2 - b.y),
                        c = e < f ? d : c; while (null == c.child1 == !1)
                }
                b = c.parent;
                d = this.$m();
                d.parent = b;
                d.userData = null;
                d.aabb.combine(a.aabb, c.aabb);
                if (null != b) { c.parent.child1 == c ? b.child1 = d : b.child2 = d;
                    d.child1 = c;
                    d.child2 = a;
                    c.parent = d;
                    a.parent = d;
                    do { if (b.aabb.contains(d.aabb)) break;
                        b.aabb.combine(b.child1.aabb, b.child2.aabb);
                        d = b;
                        b = b.parent } while (null != b) } else d.child1 = c, d.child2 = a, c.parent = d, this.$q = a.parent = d
            }
        },
        $p: function(a) {
            if (a == this.$q) this.$q =
                null;
            else { var b = a.parent,
                    c = b.parent;
                a = b.child1 == a ? b.child2 : b.child1; if (null != c)
                    for (c.child1 == b ? c.child1 = a : c.child2 = a, a.parent = c, this.$n(b); null != c;) { b = c.aabb;
                        c.aabb = new Ic;
                        c.aabb.combine(c.child1.aabb, c.child2.aabb); if (b.contains(c.aabb)) break;
                        c = c.parent } else this.$q = a, a.parent = null, this.$n(b) }
        },
        __class__: Xh
    };
    var Yh = function() {};
    g["box2d.collision.IBroadPhase"] = Yh;
    Yh.__name__ = ["box2d", "collision", "IBroadPhase"];
    Yh.prototype = { __class__: Yh };
    var Le = function() {
        this.$x = new Xh;
        this.$z = [];
        this.$$ = [];
        this.$_ =
            0
    };
    g["box2d.collision.DynamicTreeBroadPhase"] = Le;
    Le.__name__ = ["box2d", "collision", "DynamicTreeBroadPhase"];
    Le.__interfaces__ = [Yh];
    Le.prototype = {
        createProxy: function(a, b) { var c = this.$x.createProxy(a, b);++this.$y;
            this.$u(c); return c },
        destroyProxy: function(a) { this.$v(a);--this.$y;
            this.$x.destroyProxy(a) },
        moveProxy: function(a, b, c) { this.$x.moveProxy(a, b, c) && this.$u(a) },
        testOverlap: function(a, b) { var c = this.$x.getFatAABB(a),
                d = this.$x.getFatAABB(b); return c.testOverlap(d) },
        updatePairs: function(a) {
            for (var b =
                    this, c = this.$_ = 0, d = this.$z; c < d.length;) { var e = [d[c]];++c; var f = function(a) { return function(c) { if (c == a[0]) return !0;
                            b.$_ == b.$$.length && (b.$$[b.$_] = new Zh); var d = b.$$[b.$_];
                            c.$AB < a[0].$AB ? (d.proxyA = c, d.proxyB = a[0]) : (d.proxyA = a[0], d.proxyB = c);++b.$_; return !0 } }(e),
                    e = this.$x.getFatAABB(e[0]);
                this.$x.query(f, e) } this.$z = [];
            c = !0;
            for (d = 0; c;)
                if (d >= this.$_) c = !1;
                else {
                    var f = this.$$[d],
                        e = this.$x.getUserData(f.proxyA),
                        k = this.$x.getUserData(f.proxyB);
                    a(e, k);
                    for (++d; d < this.$_;) {
                        e = this.$$[d];
                        if (e.proxyA != f.proxyA ||
                            e.proxyB != f.proxyB) break;
                        ++d
                    }
                }
        },
        $u: function(a) { this.$z[this.$z.length] = a },
        $v: function(a) { D.remove(this.$z, a) },
        __class__: Le
    };
    var Bd = function() { this.aabb = new Ic;
        this.$AB = Bd.$BB++ };
    g["box2d.collision.DynamicTreeNode"] = Bd;
    Bd.__name__ = ["box2d", "collision", "DynamicTreeNode"];
    Bd.prototype = { __class__: Bd };
    var Zh = function() {};
    g["box2d.collision.DynamicTreePair"] = Zh;
    Zh.__name__ = ["box2d", "collision", "DynamicTreePair"];
    Zh.prototype = { __class__: Zh };
    var Me = function() {
        this.$GB = 0;
        this.$CB = [];
        for (var a = 0; 2 > a;) {
            var b =
                a++;
            this.$CB[b] = new $h
        }
        this.$DB = new E;
        this.$EB = new E
    };
    g["box2d.collision.Manifold"] = Me;
    Me.__name__ = ["box2d", "collision", "Manifold"];
    Me.prototype = { __class__: Me };
    var $h = function() { this.$EB = new E;
        this.$JB = new He;
        this.reset() };
    g["box2d.collision.ManifoldPoint"] = $h;
    $h.__name__ = ["box2d", "collision", "ManifoldPoint"];
    $h.prototype = { reset: function() { this.$EB.setZero();
            this.$IB = this.$HB = 0;
            this.$JB.set_key(0) }, __class__: $h };
    var ai = function() { this.$EB = new E;
        this.$MB = new E };
    g["box2d.collision.SeparationFunction"] =
        ai;
    ai.__name__ = ["box2d", "collision", "SeparationFunction"];
    ai.prototype = {
        initialize: function(a, b, c, d, e) {
            this.$KB = b;
            this.$LB = d;
            b = a.count;
            var f = new E,
                k = new E,
                p, r;
            if (1 == b) this.$FB = 0, f = this.$KB.$d[a.indexA[0]], k = this.$LB.$d[a.indexB[0]], r = f, p = c.R, f = c.position.x + (p.col1.x * r.x + p.col2.x * r.y), c = c.position.y + (p.col1.y * r.x + p.col2.y * r.y), r = k, p = e.R, k = e.position.x + (p.col1.x * r.x + p.col2.x * r.y), e = e.position.y + (p.col1.y * r.x + p.col2.y * r.y), this.$MB.x = k - f, this.$MB.y = e - c, this.$MB.normalize();
            else {
                if (a.indexB[0] == a.indexB[1]) this.$FB =
                    1, b = this.$KB.$d[a.indexA[0]], d = this.$KB.$d[a.indexA[1]], k = this.$LB.$d[a.indexB[0]], this.$EB.x = 0.5 * (b.x + d.x), this.$EB.y = 0.5 * (b.y + d.y), this.$MB = B.crossVF(B.subtractVV(d, b), 1), this.$MB.normalize(), r = this.$MB, p = c.R, b = p.col1.x * r.x + p.col2.x * r.y, d = p.col1.y * r.x + p.col2.y * r.y, r = this.$EB, p = c.R, f = c.position.x + (p.col1.x * r.x + p.col2.x * r.y), c = c.position.y + (p.col1.y * r.x + p.col2.y * r.y), r = k, p = e.R, k = e.position.x + (p.col1.x * r.x + p.col2.x * r.y), e = e.position.y + (p.col1.y * r.x + p.col2.y * r.y), a = (k - f) * b + (e - c) * d;
                else if (a.indexA[0] ==
                    a.indexA[0]) this.$FB = 2, p = this.$LB.$d[a.indexB[0]], r = this.$LB.$d[a.indexB[1]], f = this.$KB.$d[a.indexA[0]], this.$EB.x = 0.5 * (p.x + r.x), this.$EB.y = 0.5 * (p.y + r.y), this.$MB = B.crossVF(B.subtractVV(r, p), 1), this.$MB.normalize(), r = this.$MB, p = e.R, b = p.col1.x * r.x + p.col2.x * r.y, d = p.col1.y * r.x + p.col2.y * r.y, r = this.$EB, p = e.R, k = e.position.x + (p.col1.x * r.x + p.col2.x * r.y), e = e.position.y + (p.col1.y * r.x + p.col2.y * r.y), r = f, p = c.R, f = c.position.x + (p.col1.x * r.x + p.col2.x * r.y), c = c.position.y + (p.col1.y * r.x + p.col2.y * r.y), a = (f - k) * b + (c - e) *
                    d;
                else {
                    b = this.$KB.$d[a.indexA[0]];
                    d = this.$KB.$d[a.indexA[1]];
                    p = this.$LB.$d[a.indexB[0]];
                    r = this.$LB.$d[a.indexB[1]];
                    B.mulX(c, f);
                    f = B.mulMV(c.R, B.subtractVV(d, b));
                    B.mulX(e, k);
                    a = B.mulMV(e.R, B.subtractVV(r, p));
                    e = f.x * f.x + f.y * f.y;
                    c = a.x * a.x + a.y * a.y;
                    var g = B.subtractVV(a, f),
                        k = f.x * g.x + f.y * g.y,
                        g = a.x * g.x + a.y * g.y,
                        f = f.x * a.x + f.y * a.y,
                        h = e * c - f * f;
                    a = 0;
                    0 != h && (a = B.clamp((f * g - k * c) / h, 0, 1));
                    0 > (f * a + g) / c && (a = B.clamp((f - k) / e, 0, 1));
                    f = new E;
                    f.x = b.x + a * (d.x - b.x);
                    f.y = b.y + a * (d.y - b.y);
                    k = new E;
                    k.x = p.x + a * (r.x - p.x);
                    k.y = p.y + a * (r.y - p.y);
                    0 == a || 1 == a ? (this.$FB = 2, this.$MB = B.crossVF(B.subtractVV(r, p), 1), this.$MB.normalize(), this.$EB = k) : (this.$FB = 1, this.$MB = B.crossVF(B.subtractVV(d, b), 1), this.$EB = f)
                }
                0 > a && this.$MB.negativeSelf()
            }
        },
        evaluate: function(a, b) {
            var c, d, e;
            switch (this.$FB) {
                case 0:
                    return c = B.mulTMV(a.R, this.$MB), d = B.mulTMV(b.R, this.$MB.getNegative()), c = this.$KB.getSupportVertex(c), d = this.$LB.getSupportVertex(d), c = B.mulX(a, c), d = B.mulX(b, d), e = (d.x - c.x) * this.$MB.x + (d.y - c.y) * this.$MB.y;
                case 1:
                    return e = B.mulMV(a.R, this.$MB), c = B.mulX(a,
                        this.$EB), d = B.mulTMV(b.R, e.getNegative()), d = this.$LB.getSupportVertex(d), d = B.mulX(b, d), e = (d.x - c.x) * e.x + (d.y - c.y) * e.y;
                case 2:
                    return e = B.mulMV(b.R, this.$MB), d = B.mulX(b, this.$EB), c = B.mulTMV(a.R, e.getNegative()), c = this.$KB.getSupportVertex(c), c = B.mulX(a, c), e = (c.x - d.x) * e.x + (c.y - d.y) * e.y
            }
        },
        __class__: ai
    };
    var Ne = function() { this.indexA = [];
        this.indexB = [] };
    g["box2d.collision.SimplexCache"] = Ne;
    Ne.__name__ = ["box2d", "collision", "SimplexCache"];
    Ne.prototype = { __class__: Ne };
    var bi = function() {
        this.proxyA = new ad;
        this.proxyB =
            new ad;
        this.sweepA = new Jc;
        this.sweepB = new Jc
    };
    g["box2d.collision.TOIInput"] = bi;
    bi.__name__ = ["box2d", "collision", "TOIInput"];
    bi.prototype = { __class__: bi };
    var Kc = function(a, b) { this.position = new E;
        this.R = new Cd;
        null != a && (this.position.setV(a), this.R.setM(b)) };
    g["box2d.common.math.Transform"] = Kc;
    Kc.__name__ = ["box2d", "common", "math", "Transform"];
    Kc.prototype = { __class__: Kc };
    var Cd = function() { this.col1 = new E(1, 0);
        this.col2 = new E(0, 1) };
    g["box2d.common.math.Mat22"] = Cd;
    Cd.__name__ = ["box2d", "common", "math", "Mat22"];
    Cd.prototype = { set: function(a) { var b = Math.cos(a);
            a = Math.sin(a);
            this.col1.x = b;
            this.col2.x = -a;
            this.col1.y = a;
            this.col2.y = b }, setM: function(a) { this.col1.setV(a.col1);
            this.col2.setV(a.col2) }, getInverse: function(a) { var b = this.col1.x,
                c = this.col2.x,
                d = this.col1.y,
                e = this.col2.y,
                f = b * e - c * d;
            0 != f && (f = 1 / f);
            a.col1.x = f * e;
            a.col2.x = -f * c;
            a.col1.y = -f * d;
            a.col2.y = f * b; return a }, __class__: Cd };
    var S = function() {};
    g["box2d.collision.TimeOfImpact"] = S;
    S.__name__ = ["box2d", "collision", "TimeOfImpact"];
    S.timeOfImpact = function(a) {
        ++S.$NB;
        var b = a.proxyA,
            c = a.proxyB,
            d = a.sweepA,
            e = a.sweepB,
            f = b.$l + c.$l;
        a = a.tolerance;
        var k = 0,
            p = 0,
            r = 0;
        S.$SB.count = 0;
        for (S.$TB.useRadii = !1;;) {
            d.getTransform(S.$UB, k);
            e.getTransform(S.$VB, k);
            S.$TB.proxyA = b;
            S.$TB.proxyB = c;
            S.$TB.transformA = S.$UB;
            S.$TB.transformB = S.$VB;
            pb.distance(S.$XB, S.$SB, S.$TB);
            if (0 >= S.$XB.distance) { k = 1; break } S.$WB.initialize(S.$SB, b, S.$UB, c, S.$VB);
            var g = S.$WB.evaluate(S.$UB, S.$VB);
            if (0 >= g) { k = 1; break } 0 == p && (r = g > f ? B.max(f - a, 0.75 * f) : B.max(g - a, 0.02 * f));
            if (g - r < 0.5 * a) { if (0 == p) { k = 1; break } break }
            var h =
                k,
                l = k,
                L = 1;
            d.getTransform(S.$UB, L);
            e.getTransform(S.$VB, L);
            var m = S.$WB.evaluate(S.$UB, S.$VB);
            if (m >= r) { k = 1; break }
            for (var n = 0;;) { var q;
                q = 0 != (n & 1) ? l + (r - g) * (L - l) / (m - g) : 0.5 * (l + L);
                d.getTransform(S.$UB, q);
                e.getTransform(S.$VB, q); var J = S.$WB.evaluate(S.$UB, S.$VB); if (B.abs(J - r) < 0.025 * a) { h = q; break } J > r ? (l = q, g = J) : (L = q, m = J);++n;++S.$QB; if (50 == n) break } S.$RB = B.max(S.$RB, n);
            if (h < k) break;
            k = h;
            p++;
            ++S.$OB;
            if (1E3 == p) break
        }
        S.$PB = B.max(S.$PB, p);
        return k
    };
    var ci = function() {
        this.$YB = new E;
        this.$CB = [];
        for (var a = 0; 2 > a;) {
            var b =
                a++;
            this.$CB[b] = new E
        }
    };
    g["box2d.collision.WorldManifold"] = ci;
    ci.__name__ = ["box2d", "collision", "WorldManifold"];
    ci.prototype = {
        initialize: function(a, b, c, d, e) {
            if (0 != a.$GB) {
                var f, k, p, r, g, h, l;
                switch (a.$FB) {
                    case 0:
                        k = b.R;
                        f = a.$EB;
                        p = b.position.x + k.col1.x * f.x + k.col2.x * f.y;
                        r = b.position.y + k.col1.y * f.x + k.col2.y * f.y;
                        k = d.R;
                        f = a.$CB[0].$EB;
                        a = d.position.x + k.col1.x * f.x + k.col2.x * f.y;
                        f = d.position.y + k.col1.y * f.x + k.col2.y * f.y;
                        k = a - p;
                        d = f - r;
                        g = k * k + d * d;
                        0 < g ? (g = Math.sqrt(g), this.$YB.x = k / g, this.$YB.y = d / g) : (this.$YB.x = 1, this.$YB.y =
                            0);
                        k = r + c * this.$YB.y;
                        f -= e * this.$YB.y;
                        this.$CB[0].x = 0.5 * (p + c * this.$YB.x + (a - e * this.$YB.x));
                        this.$CB[0].y = 0.5 * (k + f);
                        break;
                    case 1:
                        k = b.R;
                        f = a.$DB;
                        p = k.col1.x * f.x + k.col2.x * f.y;
                        r = k.col1.y * f.x + k.col2.y * f.y;
                        k = b.R;
                        f = a.$EB;
                        g = b.position.x + k.col1.x * f.x + k.col2.x * f.y;
                        h = b.position.y + k.col1.y * f.x + k.col2.y * f.y;
                        this.$YB.x = p;
                        this.$YB.y = r;
                        b = 0;
                        for (var m = a.$GB; b < m;) {
                            var n = b++;
                            k = d.R;
                            f = a.$CB[n].$EB;
                            l = d.position.x + k.col1.x * f.x + k.col2.x * f.y;
                            f = d.position.y + k.col1.y * f.x + k.col2.y * f.y;
                            this.$CB[n].x = l + 0.5 * (c - (l - g) * p - (f - h) * r - e) * p;
                            this.$CB[n].y =
                                f + 0.5 * (c - (l - g) * p - (f - h) * r - e) * r
                        }
                        break;
                    case 2:
                        for (k = d.R, f = a.$DB, p = k.col1.x * f.x + k.col2.x * f.y, r = k.col1.y * f.x + k.col2.y * f.y, k = d.R, f = a.$EB, g = d.position.x + k.col1.x * f.x + k.col2.x * f.y, h = d.position.y + k.col1.y * f.x + k.col2.y * f.y, this.$YB.x = -p, this.$YB.y = -r, d = 0, m = a.$GB; d < m;) n = d++, k = b.R, f = a.$CB[n].$EB, l = b.position.x + k.col1.x * f.x + k.col2.x * f.y, f = b.position.y + k.col1.y * f.x + k.col2.y * f.y, this.$CB[n].x = l + 0.5 * (e - (l - g) * p - (f - h) * r - c) * p, this.$CB[n].y = f + 0.5 * (e - (l - g) * p - (f - h) * r - c) * r
                }
            }
        },
        __class__: ci
    };
    var fb = function() {
        this.$FB = -1;
        this.$l = 0.005
    };
    g["box2d.collision.shapes.Shape"] = fb;
    fb.__name__ = ["box2d", "collision", "shapes", "Shape"];
    fb.testOverlap = function(a, b, c, d) { var e = new Je;
        e.proxyA = new ad;
        e.proxyA.set(a);
        e.proxyB = new ad;
        e.proxyB.set(c);
        e.transformA = b;
        e.transformB = d;
        e.useRadii = !0;
        a = new Ne;
        a.count = 0;
        b = new Ke;
        pb.distance(b, a, e); return 2.2250738585072014E-307 > b.distance };
    fb.prototype = { copy: function() { return null }, set: function(a) { this.$l = a.$l }, computeAABB: function(a, b) {}, computeMass: function(a, b) {}, __class__: fb };
    var Dd = function(a) {
        null ==
            a && (a = 0);
        fb.call(this);
        this.$ZB = new E;
        this.$FB = 0;
        this.$l = a
    };
    g["box2d.collision.shapes.CircleShape"] = Dd;
    Dd.__name__ = ["box2d", "collision", "shapes", "CircleShape"];
    Dd.__super__ = fb;
    Dd.prototype = m(fb.prototype, {
        copy: function() { var a = new Dd;
            a.set(this); return a },
        set: function(a) { fb.prototype.set.call(this, a);
            0 == a.$FB && this.$ZB.setV(a.$ZB) },
        computeAABB: function(a, b) {
            var c = b.R,
                d = b.position.x + (c.col1.x * this.$ZB.x + c.col2.x * this.$ZB.y),
                c = b.position.y + (c.col1.y * this.$ZB.x + c.col2.y * this.$ZB.y);
            a.lowerBound.set(d -
                this.$l, c - this.$l);
            a.upperBound.set(d + this.$l, c + this.$l)
        },
        computeMass: function(a, b) { a.mass = 3.141592653589793 * b * this.$l * this.$l;
            a.center.setV(this.$ZB);
            a.I = a.mass * (0.5 * this.$l * this.$l + (this.$ZB.x * this.$ZB.x + this.$ZB.y * this.$ZB.y)) },
        __class__: Dd
    });
    var di = function() {};
    g["box2d.collision.shapes.EdgeShape"] = di;
    di.__name__ = ["box2d", "collision", "shapes", "EdgeShape"];
    di.__super__ = fb;
    di.prototype = m(fb.prototype, {
        computeAABB: function(a, b) {
            var c = b.R,
                d = b.position.x + (c.col1.x * this.$a.x + c.col2.x * this.$a.y),
                e = b.position.y +
                (c.col1.y * this.$a.x + c.col2.y * this.$a.y),
                f = b.position.x + (c.col1.x * this.$b.x + c.col2.x * this.$b.y),
                c = b.position.y + (c.col1.y * this.$b.x + c.col2.y * this.$b.y);
            d < f ? (a.lowerBound.x = d, a.upperBound.x = f) : (a.lowerBound.x = f, a.upperBound.x = d);
            e < c ? (a.lowerBound.y = e, a.upperBound.y = c) : (a.lowerBound.y = c, a.upperBound.y = e)
        },
        computeMass: function(a, b) { a.mass = 0;
            a.center.setV(this.$a);
            a.I = 0 },
        __class__: di
    });
    var ei = function() { this.mass = 0;
        this.center = new E(0, 0);
        this.I = 0 };
    g["box2d.collision.shapes.MassData"] = ei;
    ei.__name__ = ["box2d",
        "collision", "shapes", "MassData"
    ];
    ei.prototype = { __class__: ei };
    var Ta = function() { fb.call(this);
        this.$FB = 1;
        this.$pB = new E;
        this.$d = [];
        this.$qB = [] };
    g["box2d.collision.shapes.PolygonShape"] = Ta;
    Ta.__name__ = ["box2d", "collision", "shapes", "PolygonShape"];
    Ta.asArray = function(a, b) { null == b && (b = 0); var c = new Ta;
        c.setAsArray(a, b); return c };
    Ta.asOrientedBox = function(a, b, c, d) { null == d && (d = 0); var e = new Ta;
        e.setAsOrientedBox(a, b, c, d); return e };
    Ta.asEdge = function(a, b) { var c = new Ta;
        c.setAsEdge(a, b); return c };
    Ta.computeCentroid =
        function(a, b) { for (var c = new E, d = 0, e = 0; e < b;) { var f = e++,
                    k = a[f],
                    f = f + 1 < b ? a[f + 1] : a[0],
                    p = 0.5 * ((k.x - 0) * (f.y - 0) - (k.y - 0) * (f.x - 0)),
                    d = d + p;
                c.x += 0.3333333333333333 * p * (0 + k.x + f.x);
                c.y += 0.3333333333333333 * p * (0 + k.y + f.y) } c.x *= 1 / d;
            c.y *= 1 / d; return c };
    Ta.__super__ = fb;
    Ta.prototype = m(fb.prototype, {
        copy: function() { var a = new Ta;
            a.set(this); return a },
        set: function(a) {
            fb.prototype.set.call(this, a);
            if (1 == a.$FB) {
                this.$pB.setV(a.$pB);
                this.$rB = a.$rB;
                this.$oB(this.$rB);
                for (var b = 0, c = this.$rB; b < c;) {
                    var d = b++;
                    this.$d[d].setV(a.$d[d]);
                    this.$qB[d].setV(a.$qB[d])
                }
            }
        },
        setAsArray: function(a, b) { null == b && (b = 0);
            0 == b && (b = a.length);
            this.$rB = b;
            this.$oB(b); for (var c = 0, d = this.$rB; c < d;) { var e = c++;
                this.$d[e].setV(a[e]) } c = 0; for (d = this.$rB; c < d;) { var e = c++,
                    f = B.subtractVV(this.$d[e + 1 < this.$rB ? e + 1 : 0], this.$d[e]);
                oc.that(2.2250738585072014E-308 < f.lengthSquared(), null, null);
                this.$qB[e].setV(B.crossVF(f, 1));
                this.$qB[e].normalize() } this.$pB = Ta.computeCentroid(this.$d, this.$rB) },
        setAsOrientedBox: function(a, b, c, d) {
            null == d && (d = 0);
            this.$rB = 4;
            this.$oB(4);
            this.$d[0].set(-a, -b);
            this.$d[1].set(a, -b);
            this.$d[2].set(a, b);
            this.$d[3].set(-a, b);
            this.$qB[0].set(0, -1);
            this.$qB[1].set(1, 0);
            this.$qB[2].set(0, 1);
            this.$qB[3].set(-1, 0);
            this.$pB = c;
            a = new Kc;
            a.position = c;
            a.R.set(d);
            c = 0;
            for (d = this.$rB; c < d;) b = c++, this.$d[b] = B.mulX(a, this.$d[b]), this.$qB[b] = B.mulMV(a.R, this.$qB[b])
        },
        setAsEdge: function(a, b) {
            this.$rB = 2;
            this.$oB(2);
            this.$d[0].setV(a);
            this.$d[1].setV(b);
            this.$pB.x = 0.5 * (a.x + b.x);
            this.$pB.y = 0.5 * (a.y + b.y);
            this.$qB[0] = B.crossVF(B.subtractVV(b, a), 1);
            this.$qB[0].normalize();
            this.$qB[1].x = -this.$qB[0].x;
            this.$qB[1].y = -this.$qB[0].y
        },
        computeAABB: function(a, b) { for (var c = b.R, d = this.$d[0], e = b.position.x + (c.col1.x * d.x + c.col2.x * d.y), f = b.position.y + (c.col1.y * d.x + c.col2.y * d.y), k = e, p = f, r = 1, g = this.$rB; r < g;) { var h = r++,
                    d = this.$d[h],
                    h = b.position.x + (c.col1.x * d.x + c.col2.x * d.y),
                    d = b.position.y + (c.col1.y * d.x + c.col2.y * d.y);
                e < h || (e = h);
                f < d || (f = d);
                k > h || (k = h);
                p > d || (p = d) } a.lowerBound.x = e - this.$l;
            a.lowerBound.y = f - this.$l;
            a.upperBound.x = k + this.$l;
            a.upperBound.y = p + this.$l },
        computeMass: function(a,
            b) {
            if (2 == this.$rB) a.center.x = 0.5 * (this.$d[0].x + this.$d[1].x), a.center.y = 0.5 * (this.$d[0].y + this.$d[1].y), a.mass = 0, a.I = 0;
            else {
                for (var c = 0, d = 0, e = 0, f = 0, k = 0, p = this.$rB; k < p;) { var r = k++,
                        g = this.$d[r],
                        h;
                    h = r + 1 < this.$rB ? this.$d[r + 1] : this.$d[0]; var l = g.x - 0,
                        n = g.y - 0,
                        m = h.x - 0,
                        q = h.y - 0,
                        r = l * q - n * m,
                        u = 0.5 * r,
                        e = e + u,
                        c = c + 0.3333333333333333 * u * (0 + g.x + h.x),
                        d = d + 0.3333333333333333 * u * (0 + g.y + h.y),
                        g = l,
                        f = f + r * (0.3333333333333333 * (0.25 * (g * g + m * g + m * m) + (0 * g + 0 * m)) + 0 + (0.3333333333333333 * (0.25 * (n * n + q * n + q * q) + (0 * n + 0 * q)) + 0)) } a.mass = b * e;
                a.center.set(1 /
                    e * c, 1 / e * d);
                a.I = b * f
            }
        },
        $oB: function(a) { for (var b = this.$d.length; b < a;) { var c = b++;
                this.$d[c] = new E;
                this.$qB[c] = new E } },
        __class__: Ta
    });
    var Oe = function() {};
    g["box2d.common.Settings"] = Oe;
    Oe.__name__ = ["box2d", "common", "Settings"];
    Oe.mixFriction = function(a, b) { return Math.sqrt(a * b) };
    Oe.mixRestitution = function(a, b) { return a > b ? a : b };
    var B = function() {};
    g["box2d.common.math.B2Math"] = B;
    B.__name__ = ["box2d", "common", "math", "B2Math"];
    B.dot = function(a, b) { return a.x * b.x + a.y * b.y };
    B.crossVV = function(a, b) {
        return a.x * b.y -
            a.y * b.x
    };
    B.crossVF = function(a, b) { return new E(b * a.y, -b * a.x) };
    B.crossFV = function(a, b) { return new E(-a * b.y, a * b.x) };
    B.mulMV = function(a, b) { return new E(a.col1.x * b.x + a.col2.x * b.y, a.col1.y * b.x + a.col2.y * b.y) };
    B.mulTMV = function(a, b) { return new E(B.dot(b, a.col1), B.dot(b, a.col2)) };
    B.mulX = function(a, b) { var c = B.mulMV(a.R, b);
        c.x += a.position.x;
        c.y += a.position.y; return c };
    B.subtractVV = function(a, b) { return new E(a.x - b.x, a.y - b.y) };
    B.abs = function(a) { return 0 < a ? a : -a };
    B.min = function(a, b) { return a < b ? a : b };
    B.max = function(a,
        b) { return a > b ? a : b };
    B.clamp = function(a, b, c) { return a < b ? b : a > c ? c : a };
    var Jc = function() { this.localCenter = new E;
        this.c0 = new E;
        this.c = new E };
    g["box2d.common.math.Sweep"] = Jc;
    Jc.__name__ = ["box2d", "common", "math", "Sweep"];
    Jc.prototype = {
        set: function(a) { this.localCenter.setV(a.localCenter);
            this.c0.setV(a.c0);
            this.c.setV(a.c);
            this.a0 = a.a0;
            this.a = a.a;
            this.t0 = a.t0 },
        getTransform: function(a, b) {
            a.position.x = (1 - b) * this.c0.x + b * this.c.x;
            a.position.y = (1 - b) * this.c0.y + b * this.c.y;
            a.R.set((1 - b) * this.a0 + b * this.a);
            var c = a.R;
            a.position.x -= c.col1.x * this.localCenter.x + c.col2.x * this.localCenter.y;
            a.position.y -= c.col1.y * this.localCenter.x + c.col2.y * this.localCenter.y
        },
        advance: function(a) { if (this.t0 < a && 2.2250738585072014E-308 < 1 - this.t0) { var b = (a - this.t0) / (1 - this.t0);
                this.c0.x = (1 - b) * this.c0.x + b * this.c.x;
                this.c0.y = (1 - b) * this.c0.y + b * this.c.y;
                this.a0 = (1 - b) * this.a0 + b * this.a;
                this.t0 = a } },
        __class__: Jc
    };
    var Ed = function(a, b) {
        this.$wB = new Kc;
        this.$xB = new Jc;
        this.$yB = new E;
        this.$$B = new E;
        this.$uB = 0;
        a.bullet && (this.$uB |= 8);
        a.fixedRotation &&
            (this.$uB |= 16);
        a.allowSleep && (this.$uB |= 4);
        a.awake && (this.$uB |= 2);
        a.active && (this.$uB |= 32);
        this.$AC = b;
        this.$wB.position.setV(a.position);
        this.$wB.R.set(a.angle);
        this.$xB.localCenter.setZero();
        this.$xB.t0 = 1;
        this.$xB.a0 = this.$xB.a = a.angle;
        var c = this.$wB.R,
            d = this.$xB.localCenter;
        this.$xB.c.x = c.col1.x * d.x + c.col2.x * d.y;
        this.$xB.c.y = c.col1.y * d.x + c.col2.y * d.y;
        this.$xB.c.x += this.$wB.position.x;
        this.$xB.c.y += this.$wB.position.y;
        this.$xB.c0.setV(this.$xB.c);
        this.$IC = this.$FC = this.$HC = null;
        this.$GC = 0;
        this.$CC =
            this.$BC = null;
        this.$yB.setV(a.linearVelocity);
        this.$zB = a.angularVelocity;
        this.$PC = a.linearDamping;
        this.$QC = a.angularDamping;
        this.$$B.set(0, 0);
        this.$RC = this.$_B = 0;
        this.$FB = a.type;
        this.$KC = 2 == this.$FB ? this.$JC = 1 : this.$JC = 0;
        this.$MC = this.$LC = 0;
        this.$NC = a.inertiaScale;
        this.$OC = a.gravityScale;
        this.$SC = a.userData;
        this.$DC = null;
        this.$EC = 0
    };
    g["box2d.dynamics.Body"] = Ed;
    Ed.__name__ = ["box2d", "dynamics", "Body"];
    Ed.prototype = {
        createFixture: function(a) {
            if (0 != (this.$AC.$uB & 2) == !0) return null;
            var b = new fi;
            b.create(this,
                this.$wB, a);
            0 != (this.$uB & 32) && b.createProxy(this.$AC.$ED.$aC, this.$wB);
            b.$CC = this.$DC;
            this.$DC = b;
            ++this.$EC;
            b.$kC = this;
            0 < b.$jC && this.resetMassData();
            this.$AC.$uB |= 1;
            return b
        },
        setPositionAndAngle: function(a, b) {
            var c;
            if (0 != (this.$AC.$uB & 2) != !0) {
                this.$wB.R.set(b);
                this.$wB.position.setV(a);
                c = this.$wB.R;
                var d = this.$xB.localCenter;
                this.$xB.c.x = c.col1.x * d.x + c.col2.x * d.y;
                this.$xB.c.y = c.col1.y * d.x + c.col2.y * d.y;
                this.$xB.c.x += this.$wB.position.x;
                this.$xB.c.y += this.$wB.position.y;
                this.$xB.c0.setV(this.$xB.c);
                this.$xB.a0 = this.$xB.a = b;
                d = this.$AC.$ED.$aC;
                for (c = this.$DC; null != c;) c.synchronize(d, this.$wB, this.$wB), c = c.$CC;
                this.$AC.$ED.findNewContacts()
            }
        },
        resetMassData: function() {
            this.$MC = this.$LC = this.$KC = this.$JC = 0;
            this.$xB.localCenter.setZero();
            if (0 != this.$FB && 1 != this.$FB) {
                for (var a = E.make(0, 0), b = this.$DC; null != b;) { if (0 != b.$jC) { var c = b.getMassData();
                        this.$JC += c.mass;
                        a.x += c.center.x * c.mass;
                        a.y += c.center.y * c.mass;
                        this.$LC += c.I } b = b.$CC } 0 < this.$JC ? (this.$KC = 1 / this.$JC, a.x *= this.$KC, a.y *= this.$KC) : this.$KC = this.$JC =
                    1;
                0 < this.$LC && 0 == (this.$uB & 16) ? (this.$LC -= this.$JC * (a.x * a.x + a.y * a.y), this.$LC *= this.$NC, this.$MC = 1 / this.$LC) : this.$MC = this.$LC = 0;
                b = this.$xB.c.copy();
                this.$xB.localCenter.setV(a);
                this.$xB.c0.setV(B.mulX(this.$wB, this.$xB.localCenter));
                this.$xB.c.setV(this.$xB.c0);
                this.$yB.x += this.$zB * -(this.$xB.c.y - b.y);
                this.$yB.y += this.$zB * (this.$xB.c.x - b.x)
            }
        },
        setType: function(a) {
            if (this.$FB != a)
                for (this.$FB = a, this.resetMassData(), 0 == this.$FB && (this.$yB.setZero(), this.$zB = 0), this.setAwake(!0), this.$$B.setZero(), this.$_B =
                    0, a = this.$IC; null != a;) a.contact.flagForFiltering(), a = a.next
        },
        setAwake: function(a) { a ? (this.$uB |= 2, this.$RC = 0) : (this.$uB &= -3, this.$RC = 0, this.$yB.setZero(), this.$zB = 0, this.$$B.setZero(), this.$_B = 0) },
        setFixedRotation: function(a) { this.$uB = a ? this.$uB | 16 : this.$uB & -17;
            this.resetMassData() },
        synchronizeFixtures: function() {
            var a = Ed.$TC;
            a.R.set(this.$xB.a0);
            var b = a.R,
                c = this.$xB.localCenter;
            a.position.x = this.$xB.c0.x - (b.col1.x * c.x + b.col2.x * c.y);
            a.position.y = this.$xB.c0.y - (b.col1.y * c.x + b.col2.y * c.y);
            c = this.$AC.$ED.$aC;
            for (b = this.$DC; null != b;) b.synchronize(c, a, this.$wB), b = b.$CC
        },
        synchronizeTransform: function() { this.$wB.R.set(this.$xB.a); var a = this.$wB.R,
                b = this.$xB.localCenter;
            this.$wB.position.x = this.$xB.c.x - (a.col1.x * b.x + a.col2.x * b.y);
            this.$wB.position.y = this.$xB.c.y - (a.col1.y * b.x + a.col2.y * b.y) },
        shouldCollide: function(a) { if (2 != this.$FB && 2 != a.$FB) return !1; for (var b = this.$HC; null != b;) { if (b.other == a && !1 == b.joint.$AE) return !1;
                b = b.next } return !0 },
        advance: function(a) {
            this.$xB.advance(a);
            this.$xB.c.setV(this.$xB.c0);
            this.$xB.a =
                this.$xB.a0;
            this.synchronizeTransform()
        },
        __class__: Ed
    };
    var Fd = function() { this.position = new E;
        this.linearVelocity = new E;
        this.userData = null;
        this.angularDamping = this.linearDamping = this.angularVelocity = this.angle = 0;
        this.awake = this.allowSleep = !0;
        this.bullet = this.fixedRotation = !1;
        this.type = 0;
        this.active = !0;
        this.gravityScale = this.inertiaScale = 1 };
    g["box2d.dynamics.BodyDef"] = Fd;
    Fd.__name__ = ["box2d", "dynamics", "BodyDef"];
    Fd.prototype = { __class__: Fd };
    var Gd = function() {};
    g["box2d.dynamics.ContactFilter"] = Gd;
    Gd.__name__ = ["box2d", "dynamics", "ContactFilter"];
    Gd.prototype = { shouldCollide: function(a, b) { var c = a.$pC,
                d = b.$pC; return c.groupIndex == d.groupIndex && 0 != c.groupIndex ? 0 < c.groupIndex : 0 != (c.maskBits & d.categoryBits) && 0 != (c.categoryBits & d.maskBits) }, __class__: Gd };
    var gi = function() { this.normalImpulses = [];
        this.tangentImpulses = [] };
    g["box2d.dynamics.ContactImpulse"] = gi;
    gi.__name__ = ["box2d", "dynamics", "ContactImpulse"];
    gi.prototype = { __class__: gi };
    var pc = function() {};
    g["box2d.dynamics.ContactListener"] = pc;
    pc.__name__ = ["box2d",
        "dynamics", "ContactListener"
    ];
    pc.prototype = { beginContact: function(a) {}, endContact: function(a) {}, preSolve: function(a, b) {}, postSolve: function(a, b) {}, __class__: pc };
    var ii = function() { this.$AC = null;
        this.$bC = 0;
        this.$cC = Gd.defaultFilter;
        this.$dC = pc.defaultListener;
        this.$eC = new hi(this.$fC);
        this.$aC = new Le };
    g["box2d.dynamics.ContactManager"] = ii;
    ii.__name__ = ["box2d", "dynamics", "ContactManager"];
    ii.prototype = {
        addPair: function(a, b) {
            var c = a,
                d = b,
                e = c.$kC,
                f = d.$kC;
            if (e != f) {
                for (var k = f.$IC; null != k;) {
                    if (k.other == e) {
                        var p =
                            k.contact.$ZD,
                            r = k.contact.$aD;
                        if (p == c && r == d || p == d && r == c) return
                    }
                    k = k.next
                }!1 != f.shouldCollide(e) && !1 != this.$cC.shouldCollide(c, d) && (k = this.$eC.create(c, d), c = k.$ZD, d = k.$aD, e = c.$kC, f = d.$kC, k.$BC = null, k.$CC = this.$AC.$IC, null != this.$AC.$IC && (this.$AC.$IC.$BC = k), this.$AC.$IC = k, k.$XD.contact = k, k.$XD.other = f, k.$XD.prev = null, k.$XD.next = e.$IC, null != e.$IC && (e.$IC.prev = k.$XD), e.$IC = k.$XD, k.$YD.contact = k, k.$YD.other = e, k.$YD.prev = null, k.$YD.next = f.$IC, null != f.$IC && (f.$IC.prev = k.$YD), f.$IC = k.$YD, ++this.$AC.$bC)
            }
        },
        findNewContacts: function() { this.$aC.updatePairs(ha(this, this.addPair)) },
        destroy: function(a) {
            var b = a.$ZD.$kC,
                c = a.$aD.$kC;
            0 != (a.$uB & 16) && this.$dC.endContact(a);
            null != a.$BC && (a.$BC.$CC = a.$CC);
            null != a.$CC && (a.$CC.$BC = a.$BC);
            a == this.$AC.$IC && (this.$AC.$IC = a.$CC);
            null != a.$XD.prev && (a.$XD.prev.next = a.$XD.next);
            null != a.$XD.next && (a.$XD.next.prev = a.$XD.prev);
            a.$XD == b.$IC && (b.$IC = a.$XD.next);
            null != a.$YD.prev && (a.$YD.prev.next = a.$YD.next);
            null != a.$YD.next && (a.$YD.next.prev = a.$YD.prev);
            a.$YD == c.$IC && (c.$IC = a.$YD.next);
            this.$eC.destroy(a);
            --this.$bC
        },
        collide: function() { for (var a = this.$AC.$IC; null != a;) { var b = a.$ZD,
                    c = a.$aD,
                    d = b.$kC,
                    e = c.$kC; if (0 != (d.$uB & 2) == !1 && 0 != (e.$uB & 2) == !1) a = a.$CC;
                else { if (0 != (a.$uB & 64)) { if (!1 == e.shouldCollide(d)) { b = a;
                            a = b.$CC;
                            this.destroy(b); continue } if (!1 == this.$cC.shouldCollide(b, c)) { b = a;
                            a = b.$CC;
                            this.destroy(b); continue } a.$uB &= -65 }!1 == this.$aC.testOverlap(b.$oC, c.$oC) ? (b = a, a = b.$CC, this.destroy(b)) : (a.update(this.$dC), a = a.$CC) } } },
        __class__: ii
    };
    var nj = function() {};
    g["box2d.dynamics.DestructionListener"] =
        nj;
    nj.__name__ = ["box2d", "dynamics", "DestructionListener"];
    nj.prototype = { sayGoodbyeJoint: function(a) {}, sayGoodbyeFixture: function(a) {}, __class__: nj };
    var Hd = function() { this.categoryBits = 1;
        this.maskBits = 65535;
        this.groupIndex = 0 };
    g["box2d.dynamics.FilterData"] = Hd;
    Hd.__name__ = ["box2d", "dynamics", "FilterData"];
    Hd.prototype = { copy: function() { var a = new Hd;
            a.categoryBits = this.categoryBits;
            a.maskBits = this.maskBits;
            a.groupIndex = this.groupIndex; return a }, __class__: Hd };
    var fi = function() {
        this.$pC = new Hd;
        this.$iC =
            new Ic;
        this.$lC = this.$CC = this.$kC = this.$SC = null;
        this.$nC = this.$mC = this.$jC = 0
    };
    g["box2d.dynamics.Fixture"] = fi;
    fi.__name__ = ["box2d", "dynamics", "Fixture"];
    fi.prototype = {
        setSensor: function(a) { if (this.$qC != a && (this.$qC = a, null != this.$kC))
                for (a = this.$kC.$IC; null != a;) { var b = a.contact,
                        c = b.$ZD,
                        d = b.$aD;
                    c != this && d != this || b.setSensor(c.$qC || d.$qC);
                    a = a.next } },
        setFilterData: function(a) {
            this.$pC = a.copy();
            if (null == this.$kC)
                for (a = this.$kC.$IC; null != a;) {
                    var b = a.contact,
                        c = b.$aD;
                    b.$ZD != this && c != this || b.flagForFiltering();
                    a = a.next
                }
        },
        getMassData: function(a) { null == a && (a = new ei);
            this.$lC.computeMass(a, this.$jC); return a },
        create: function(a, b, c) { this.$SC = c.userData;
            this.$mC = c.friction;
            this.$nC = c.restitution;
            this.$kC = a;
            this.$CC = null;
            this.$pC = c.filter.copy();
            this.$qC = c.isSensor;
            this.$lC = c.shape.copy();
            this.$jC = c.density },
        destroy: function() { this.$lC = null },
        createProxy: function(a, b) { this.$lC.computeAABB(this.$iC, b);
            this.$oC = a.createProxy(this.$iC, this) },
        destroyProxy: function(a) {
            null != this.$oC && (a.destroyProxy(this.$oC), this.$oC =
                null)
        },
        synchronize: function(a, b, c) { if (null != this.$oC) { var d = new Ic,
                    e = new Ic;
                this.$lC.computeAABB(d, b);
                this.$lC.computeAABB(e, c);
                this.$iC.combine(d, e);
                b = B.subtractVV(c.position, b.position);
                a.moveProxy(this.$oC, this.$iC, b) } },
        __class__: fi
    };
    var qc = function() { this.filter = new Hd;
        this.userData = this.shape = null;
        this.friction = 0.2;
        this.density = this.restitution = 0;
        this.filter.categoryBits = 1;
        this.filter.maskBits = 65535;
        this.filter.groupIndex = 0;
        this.isSensor = !1 };
    g["box2d.dynamics.FixtureDef"] = qc;
    qc.__name__ = ["box2d",
        "dynamics", "FixtureDef"
    ];
    qc.prototype = { __class__: qc };
    var Lc = function() { this.$tC = [];
        this.$uC = [];
        this.$vC = [] };
    g["box2d.dynamics.Island"] = Lc;
    Lc.__name__ = ["box2d", "dynamics", "Island"];
    Lc.prototype = {
        initialize: function(a, b, c, d, e, f) { this.$yC = a;
            this.$zC = b;
            this.$$C = c;
            this.$xC = this.$bC = this.$wC = 0;
            this.$fC = d;
            this.$rC = e;
            this.$sC = f; for (d = this.$tC.length; d < a;) e = d++, this.$tC[e] = null; for (a = this.$uC.length; a < b;) d = a++, this.$uC[d] = null; for (b = this.$vC.length; b < c;) a = b++, this.$vC[a] = null },
        clear: function() {
            this.$xC = this.$bC =
                this.$wC = 0
        },
        solve: function(a, b, c) {
            for (var d, e = 0, f = this.$wC; e < f;) d = e++, d = this.$tC[d], 2 == d.$FB && (d.$yB.x += a.dt * (d.$OC * b.x + d.$KC * d.$$B.x), d.$yB.y += a.dt * (d.$OC * b.y + d.$KC * d.$$B.y), d.$zB += a.dt * d.$MC * d.$_B, d.$yB.multiply(B.clamp(1 - a.dt * d.$PC, 0, 1)), d.$zB *= B.clamp(1 - a.dt * d.$QC, 0, 1));
            this.$sC.initialize(a, this.$uC, this.$bC, this.$fC);
            b = this.$sC;
            b.initVelocityConstraints(a);
            e = 0;
            for (f = this.$xC; e < f;) d = e++, d = this.$vC[d], d.initVelocityConstraints(a);
            e = 0;
            for (f = a.velocityIterations; e < f;) {
                e++;
                for (var k = 0, p = this.$xC; k <
                    p;) d = k++, d = this.$vC[d], d.solveVelocityConstraints(a);
                b.solveVelocityConstraints()
            }
            e = 0;
            for (f = this.$xC; e < f;) d = e++, d = this.$vC[d], d.finalizeVelocityConstraints();
            b.finalizeVelocityConstraints();
            e = 0;
            for (f = this.$wC; e < f;) d = e++, d = this.$tC[d], 0 != d.$FB && (k = a.dt * d.$yB.x, p = a.dt * d.$yB.y, 4 < k * k + p * p && (d.$yB.normalize(), d.$yB.x = 2 * d.$yB.x * a.inv_dt, d.$yB.y = 2 * d.$yB.y * a.inv_dt), k = a.dt * d.$zB, 2.4674011002723395 < k * k && (d.$zB = 0 > d.$zB ? -1.5707963267948966 * a.inv_dt : 1.5707963267948966 * a.inv_dt), d.$xB.c0.setV(d.$xB.c), d.$xB.a0 =
                d.$xB.a, d.$xB.c.x += a.dt * d.$yB.x, d.$xB.c.y += a.dt * d.$yB.y, d.$xB.a += a.dt * d.$zB, d.synchronizeTransform());
            e = 0;
            for (f = a.positionIterations; e < f;) { e++; for (var k = b.solvePositionConstraints(0.2), p = !0, r = 0, g = this.$xC; r < g;) d = r++, d = this.$vC[d], d = d.solvePositionConstraints(0.2), p = p && d; if (k && p) break } this.report(b.$rD);
            if (c) {
                c = 1.7976931348623157E308;
                b = 0;
                for (e = this.$wC; b < e;) d = b++, d = this.$tC[d], 0 != d.$FB && (0 == (d.$uB & 4) && (c = d.$RC = 0), 0 == (d.$uB & 4) || 0.0012184696791468343 < d.$zB * d.$zB || 1E-4 < B.dot(d.$yB, d.$yB) ? c = d.$RC = 0 : (d.$RC +=
                    a.dt, c = B.min(c, d.$RC)));
                if (0.5 <= c)
                    for (a = 0, c = this.$wC; a < c;) b = a++, d = this.$tC[b], d.setAwake(!1)
            }
        },
        solveTOI: function(a) {
            this.$sC.initialize(a, this.$uC, this.$bC, this.$fC);
            for (var b = this.$sC, c = 0, d = this.$xC; c < d;) { var e = c++;
                this.$vC[e].initVelocityConstraints(a) } c = 0;
            for (d = a.velocityIterations; c < d;) { c++;
                b.solveVelocityConstraints(); for (var e = 0, f = this.$xC; e < f;) { var k = e++;
                    this.$vC[k].solveVelocityConstraints(a) } } c = 0;
            for (d = this.$wC; c < d;) e = c++, e = this.$tC[e], 0 != e.$FB && (f = a.dt * e.$yB.x, k = a.dt * e.$yB.y, 4 < f * f + k * k &&
                (e.$yB.normalize(), e.$yB.x = 2 * e.$yB.x * a.inv_dt, e.$yB.y = 2 * e.$yB.y * a.inv_dt), f = a.dt * e.$zB, 2.4674011002723395 < f * f && (e.$zB = 0 > e.$zB ? -1.5707963267948966 * a.inv_dt : 1.5707963267948966 * a.inv_dt), e.$xB.c0.setV(e.$xB.c), e.$xB.a0 = e.$xB.a, e.$xB.c.x += a.dt * e.$yB.x, e.$xB.c.y += a.dt * e.$yB.y, e.$xB.a += a.dt * e.$zB, e.synchronizeTransform());
            c = 0;
            for (a = a.positionIterations; c < a;) { c++;
                d = b.solvePositionConstraints(0.75);
                e = !0;
                f = 0; for (k = this.$xC; f < k;) var p = f++,
                    p = this.$vC[p].solvePositionConstraints(0.2),
                    e = e && p; if (d && e) break } this.report(b.$rD)
        },
        report: function(a) { if (null != this.$rC)
                for (var b = 0, c = this.$bC; b < c;) { for (var d = b++, e = this.$uC[d], d = a[d], f = 0, k = d.pointCount; f < k;) { var p = f++;
                        Lc.$_C.normalImpulses[p] = d.points[p].normalImpulse;
                        Lc.$_C.tangentImpulses[p] = d.points[p].tangentImpulse } this.$rC.postSolve(e, Lc.$_C) } },
        addBody: function(a) { a.$vB = this.$wC;
            this.$tC[this.$wC++] = a },
        addContact: function(a) { this.$uC[this.$bC++] = a },
        addJoint: function(a) { this.$vC[this.$xC++] = a },
        __class__: Lc
    };
    var Id = function() {};
    g["box2d.dynamics.TimeStep"] = Id;
    Id.__name__ = ["box2d",
        "dynamics", "TimeStep"
    ];
    Id.prototype = { set: function(a) { this.dt = a.dt;
            this.inv_dt = a.inv_dt;
            this.positionIterations = a.positionIterations;
            this.velocityIterations = a.velocityIterations;
            this.warmStarting = a.warmStarting }, __class__: Id };
    var Ka = function(a, b) { this.$AD = [];
        this.$ED = new ii;
        this.$sC = new Ya;
        this.$FD = new Lc;
        this.$FC = this.$HC = this.$IC = this.$GD = this.$KD = null;
        this.$GC = this.$xC = this.$bC = this.$wC = 0;
        Ka.$SD = !0;
        Ka.$TD = !0;
        this.$ID = b;
        this.$HD = a;
        this.$LD = 0;
        this.$ED.$AC = this; var c = new Fd;
        this.$JD = this.createBody(c) };
    g["box2d.dynamics.World"] = Ka;
    Ka.__name__ = ["box2d", "dynamics", "World"];
    Ka.prototype = {
        setContactListener: function(a) { this.$ED.$dC = a },
        createBody: function(a) { if (0 != (this.$uB & 2) == !0) return null;
            a = new Ed(a, this);
            a.$BC = null;
            a.$CC = this.$GD;
            null != this.$GD && (this.$GD.$BC = a);
            this.$GD = a;++this.$wC; return a },
        destroyBody: function(a) {
            if (0 != (this.$uB & 2) != !0) {
                for (var b = a.$HC; null != b;) { var c = b,
                        b = b.next;
                    null != this.$KD && this.$KD.sayGoodbyeJoint(c.joint);
                    this.destroyJoint(c.joint) }
                for (b = a.$FC; null != b;) c = b, b = b.nextController,
                    c.controller.removeBody(a);
                for (b = a.$IC; null != b;) c = b, b = b.next, this.$ED.destroy(c.contact);
                a.$IC = null;
                for (b = a.$DC; null != b;) c = b, b = b.$CC, null != this.$KD && this.$KD.sayGoodbyeFixture(c), c.destroyProxy(this.$ED.$aC), c.destroy();
                a.$DC = null;
                a.$EC = 0;
                null != a.$BC && (a.$BC.$CC = a.$CC);
                null != a.$CC && (a.$CC.$BC = a.$BC);
                a == this.$GD && (this.$GD = a.$CC);
                --this.$wC
            }
        },
        destroyJoint: function(a) {
            var b = a.$AE;
            null != a.$BC && (a.$BC.$CC = a.$CC);
            null != a.$CC && (a.$CC.$BC = a.$BC);
            a == this.$HC && (this.$HC = a.$CC);
            var c = a.$zD,
                d = a.$$D;
            c.setAwake(!0);
            d.setAwake(!0);
            null != a.$xD.prev && (a.$xD.prev.next = a.$xD.next);
            null != a.$xD.next && (a.$xD.next.prev = a.$xD.prev);
            a.$xD == c.$HC && (c.$HC = a.$xD.next);
            a.$xD.prev = null;
            a.$xD.next = null;
            null != a.$yD.prev && (a.$yD.prev.next = a.$yD.next);
            null != a.$yD.next && (a.$yD.next.prev = a.$yD.prev);
            a.$yD == d.$HC && (d.$HC = a.$yD.next);
            a.$yD.prev = null;
            a.$yD.next = null;
            Pe.destroy(a, null);
            --this.$xC;
            if (!1 == b)
                for (a = d.$IC; null != a;) a.other == c && a.contact.flagForFiltering(), a = a.next
        },
        step: function(a, b, c) {
            0 != (this.$uB & 1) && (this.$ED.findNewContacts(),
                this.$uB &= -2);
            this.$uB |= 2;
            var d = Ka.$MD;
            d.dt = a;
            d.velocityIterations = b;
            d.positionIterations = c;
            d.inv_dt = 0 < a ? 1 / a : 0;
            d.dtRatio = this.$LD * a;
            d.warmStarting = Ka.$SD;
            this.$ED.collide();
            0 < d.dt && this.solve(d);
            Ka.$TD && 0 < d.dt && this.solveTOI(d);
            0 < d.dt && (this.$LD = d.inv_dt);
            this.$uB &= -3
        },
        clearForces: function() { for (var a = this.$GD; null != a;) a.$$B.setZero(), a.$_B = 0, a = a.$CC },
        solve: function(a) {
            for (var b, c = this.$FC; null != c;) c.step(a), c = c.$CC;
            var d = this.$FD;
            d.initialize(this.$wC, this.$bC, this.$xC, null, this.$ED.$dC, this.$sC);
            for (b = this.$GD; null != b;) b.$uB &= -2, b = b.$CC;
            for (c = this.$IC; null != c;) c.$uB &= -5, c = c.$CC;
            for (c = this.$HC; null != c;) c.$_D = !1, c = c.$CC;
            for (var c = this.$AD, e = this.$GD; null != e;) {
                if (0 == (e.$uB & 1) && 0 != (e.$uB & 2) != !1 && 0 != (e.$uB & 32) != !1 && 0 != e.$FB) {
                    d.clear();
                    var f = 0;
                    c[f++] = e;
                    for (e.$uB |= 1; 0 < f;)
                        if (b = c[--f], d.addBody(b), 0 != (b.$uB & 2) == !1 && b.setAwake(!0), 0 != b.$FB) {
                            for (var k, p = b.$IC; null != p;) 0 == (p.contact.$uB & 4) && 0 != (p.contact.$uB & 1) != !0 && 0 != (p.contact.$uB & 32) != !1 && 0 != (p.contact.$uB & 16) != !1 && (d.addContact(p.contact), p.contact.$uB |=
                                4, k = p.other, 0 == (k.$uB & 1) && (c[f++] = k, k.$uB |= 1)), p = p.next;
                            for (b = b.$HC; null != b;) !0 != b.joint.$_D && (k = b.other, 0 != (k.$uB & 32) != !1 && (d.addJoint(b.joint), b.joint.$_D = !0, 0 == (k.$uB & 1) && (c[f++] = k, k.$uB |= 1))), b = b.next
                        } d.solve(a, this.$HD, this.$ID);
                    f = 0;
                    for (k = d.$wC; f < k;) b = f++, b = d.$tC[b], 0 == b.$FB && (b.$uB &= -2)
                }
                e = e.$CC
            }
            a = 0;
            for (d = c.length; a < d;) { e = a++; if (null == c[e]) break;
                c[e] = null }
            for (b = this.$GD; null != b;) 0 != (b.$uB & 2) != !1 && 0 != (b.$uB & 32) != !1 && 0 != b.$FB && b.synchronizeFixtures(), b = b.$CC;
            this.$ED.findNewContacts()
        },
        solveTOI: function(a) {
            var b,
                c, d, e, f = this.$FD;
            f.initialize(this.$wC, 32, 32, null, this.$ED.$dC, this.$sC);
            var k = Ka.$RD;
            for (b = this.$GD; null != b;) b.$uB &= -2, b.$xB.t0 = 0, b = b.$CC;
            for (b = this.$IC; null != b;) b.$uB &= -13, b = b.$CC;
            for (e = this.$HC; null != e;) e.$_D = !1, e = e.$CC;
            for (;;) {
                e = null;
                var p = 1;
                for (b = this.$IC; null != b;) {
                    if (0 != (b.$uB & 1) != !0 && 0 != (b.$uB & 32) != !1 && 0 != (b.$uB & 2) != !1) {
                        c = 1;
                        if (0 != (b.$uB & 8)) c = b.$dD;
                        else {
                            c = b.$ZD;
                            d = b.$aD;
                            c = c.$kC;
                            d = d.$kC;
                            if (!(2 == c.$FB && 0 != (c.$uB & 2) != !1 || 2 == d.$FB && 0 != (d.$uB & 2) != !1)) { b = b.$CC; continue }
                            var r = c.$xB.t0;
                            c.$xB.t0 < d.$xB.t0 ?
                                (r = d.$xB.t0, c.$xB.advance(r)) : d.$xB.t0 < c.$xB.t0 && (r = c.$xB.t0, d.$xB.advance(r));
                            c = b.computeTOI(c.$xB, d.$xB);
                            0 < c && 1 > c && (c = (1 - c) * r + c, 1 < c && (c = 1));
                            b.$dD = c;
                            b.$uB |= 8
                        }
                        2.2250738585072014E-308 < c && c < p && (e = b, p = c)
                    }
                    b = b.$CC
                }
                if (null == e || 1 < p) break;
                c = e.$ZD;
                d = e.$aD;
                c = c.$kC;
                d = d.$kC;
                Ka.$OD.set(c.$xB);
                Ka.$PD.set(d.$xB);
                c.advance(p);
                d.advance(p);
                e.update(this.$ED.$dC);
                e.$uB &= -9;
                if (0 != (e.$uB & 1) == !0 || 0 != (e.$uB & 32) == !1) c.$xB.set(Ka.$OD), d.$xB.set(Ka.$PD), c.synchronizeTransform(), d.synchronizeTransform();
                else if (0 != (e.$uB &
                        16) != !1) {
                    b = c;
                    2 != b.$FB && (b = d);
                    f.clear();
                    d = c = 0;
                    k[c + d++] = b;
                    for (b.$uB |= 1; 0 < d;)
                        if (b = k[c++], --d, f.addBody(b), 0 != (b.$uB & 2) == !1 && b.setAwake(!0), 2 == b.$FB) {
                            for (e = b.$IC; null != e && f.$bC != f.$zC;) 0 == (e.contact.$uB & 4) && 0 != (e.contact.$uB & 1) != !0 && 0 != (e.contact.$uB & 32) != !1 && 0 != (e.contact.$uB & 16) != !1 && (f.addContact(e.contact), e.contact.$uB |= 4, r = e.other, 0 == (r.$uB & 1) && (0 != r.$FB && (r.advance(p), r.setAwake(!0)), k[c + d] = r, ++d, r.$uB |= 1)), e = e.next;
                            for (b = b.$HC; null != b;) f.$xC != f.$$C && !0 != b.joint.$_D && (r = b.other, 0 != (r.$uB & 32) !=
                                !1 && (f.addJoint(b.joint), b.joint.$_D = !0, 0 == (r.$uB & 1) && (0 != r.$FB && (r.advance(p), r.setAwake(!0)), k[c + d] = r, ++d, r.$uB |= 1))), b = b.next
                        } b = Ka.$QD;
                    b.warmStarting = !1;
                    b.dt = (1 - p) * a.dt;
                    b.inv_dt = 1 / b.dt;
                    b.dtRatio = 0;
                    b.velocityIterations = a.velocityIterations;
                    b.positionIterations = a.positionIterations;
                    f.solveTOI(b);
                    p = 0;
                    for (c = f.$wC; p < c;)
                        if (b = p++, b = f.$tC[b], b.$uB &= -2, 0 != (b.$uB & 2) != !1 && 2 == b.$FB)
                            for (b.synchronizeFixtures(), e = b.$IC; null != e;) e.contact.$uB &= -9, e = e.next;
                    p = 0;
                    for (e = f.$bC; p < e;) b = p++, b = f.$uC[b], b.$uB &= -13;
                    p = 0;
                    for (b = f.$xC; p < b;) e = p++, e = f.$vC[e], e.$_D = !1;
                    this.$ED.findNewContacts()
                }
            }
        },
        __class__: Ka
    };
    var ma = function() { this.$XD = new Qe;
        this.$YD = new Qe;
        this.$bD = new Me;
        this.$cD = new Me };
    g["box2d.dynamics.contacts.Contact"] = ma;
    ma.__name__ = ["box2d", "dynamics", "contacts", "Contact"];
    ma.prototype = {
        setSensor: function(a) { this.$uB = a ? this.$uB | 1 : this.$uB & -2 },
        flagForFiltering: function() { this.$uB |= 64 },
        $WD: function(a, b) {
            this.$uB = 32;
            if (null == a || null == b) this.$aD = this.$ZD = null;
            else {
                if (a.$qC || b.$qC) this.$uB |= 1;
                var c = a.$kC,
                    d = b.$kC;
                if (2 != c.$FB || 0 != (c.$uB & 8) || 2 != d.$FB || 0 != (d.$uB & 8)) this.$uB |= 2;
                this.$ZD = a;
                this.$aD = b;
                this.$bD.$GB = 0;
                this.$CC = this.$BC = null;
                this.$XD.contact = null;
                this.$XD.prev = null;
                this.$XD.next = null;
                this.$XD.other = null;
                this.$YD.contact = null;
                this.$YD.prev = null;
                this.$YD.next = null;
                this.$YD.other = null
            }
        },
        update: function(a) {
            var b = this.$cD;
            this.$cD = this.$bD;
            this.$bD = b;
            this.$uB |= 32;
            var b = !1,
                c = 0 != (this.$uB & 16),
                d = this.$ZD.$kC,
                e = this.$aD.$kC,
                f = this.$ZD.$iC.testOverlap(this.$aD.$iC);
            if (0 != (this.$uB & 1)) f && (b = fb.testOverlap(this.$ZD.$lC,
                d.$wB, this.$aD.$lC, e.$wB)), this.$bD.$GB = 0;
            else { this.$uB = 2 != d.$FB || 0 != (d.$uB & 8) || 2 != e.$FB || 0 != (e.$uB & 8) ? this.$uB | 2 : this.$uB & -3; if (f) { this.evaluate(); for (var b = 0 < this.$bD.$GB, f = 0, k = this.$bD.$GB; f < k;) { var p = f++,
                            p = this.$bD.$CB[p];
                        p.$HB = 0;
                        p.$IB = 0; for (var r = p.$JB, g = 0, h = this.$cD.$GB; g < h;) { var l = g++,
                                l = this.$cD.$CB[l]; if (l.$JB.$F == r.$F) { p.$HB = l.$HB;
                                p.$IB = l.$IB; break } } } } else this.$bD.$GB = 0;
                b != c && (d.setAwake(!0), e.setAwake(!0)) } this.$uB = b ? this.$uB | 16 : this.$uB & -17;
            !1 == c && !0 == b && a.beginContact(this);
            !0 == c && !1 ==
                b && a.endContact(this);
            0 == (this.$uB & 1) && a.preSolve(this, this.$cD)
        },
        evaluate: function() {},
        computeTOI: function(a, b) { ma.$kD.proxyA.set(this.$ZD.$lC);
            ma.$kD.proxyB.set(this.$aD.$lC);
            ma.$kD.sweepA = a;
            ma.$kD.sweepB = b;
            ma.$kD.tolerance = 0.005; return S.timeOfImpact(ma.$kD) },
        __class__: ma
    };
    var rc = function() { ma.call(this) };
    g["box2d.dynamics.contacts.CircleContact"] = rc;
    rc.__name__ = ["box2d", "dynamics", "contacts", "CircleContact"];
    rc.create = function(a) { return new rc };
    rc.destroy = function(a, b) {};
    rc.__super__ = ma;
    rc.prototype =
        m(ma.prototype, { reset: function(a, b) { ma.prototype.$WD.call(this, a, b) }, evaluate: function() { Q.collideCircles(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, __class__: rc });
    var ki = function() { this.localPlaneNormal = new E;
        this.localPoint = new E;
        this.normal = new E;
        this.normalMass = new Cd;
        this.K = new Cd;
        this.points = []; for (var a = 0; 2 > a;) { var b = a++;
            this.points[b] = new ji } };
    g["box2d.dynamics.contacts.ContactConstraint"] = ki;
    ki.__name__ = ["box2d", "dynamics", "contacts", "ContactConstraint"];
    ki.prototype = { __class__: ki };
    var ji = function() { this.localPoint = new E;
        this.rA = new E;
        this.rB = new E };
    g["box2d.dynamics.contacts.ContactConstraintPoint"] = ji;
    ji.__name__ = ["box2d", "dynamics", "contacts", "ContactConstraintPoint"];
    ji.prototype = { __class__: ji };
    var Qe = function() {};
    g["box2d.dynamics.contacts.ContactEdge"] = Qe;
    Qe.__name__ = ["box2d", "dynamics", "contacts", "ContactEdge"];
    Qe.prototype = { __class__: Qe };
    var hi = function(a) { this.$fC = a;
        this.initializeRegisters() };
    g["box2d.dynamics.contacts.ContactFactory"] = hi;
    hi.__name__ = ["box2d", "dynamics", "contacts", "ContactFactory"];
    hi.prototype = {
        addType: function(a, b, c, d) { this.$lD[c][d].createFcn = a;
            this.$lD[c][d].destroyFcn = b;
            this.$lD[c][d].primary = !0;
            c != d && (this.$lD[d][c].createFcn = a, this.$lD[d][c].destroyFcn = b, this.$lD[d][c].primary = !1) },
        initializeRegisters: function() {
            this.$lD = [];
            for (var a = 0; 3 > a;) { var b = a++;
                this.$lD[b] = []; for (var c = 0; 3 > c;) { var d = c++;
                    this.$lD[b][d] = new li } } this.addType(rc.create, rc.destroy, 0, 0);
            this.addType(sc.create, sc.destroy, 1, 0);
            this.addType(tc.create, tc.destroy,
                1, 1);
            this.addType(uc.create, uc.destroy, 2, 0);
            this.addType(vc.create, vc.destroy, 1, 2)
        },
        create: function(a, b) { var c = this.$lD[a.$lC.$FB][b.$lC.$FB],
                d; if (null != c.pool) return d = c.pool, c.pool = d.$CC, d.$WD(a, b), d;
            d = c.createFcn; return null != d ? (c.primary ? (d = d(this.$fC), d.$WD(a, b)) : (d = d(this.$fC), d.$WD(b, a)), d) : null },
        destroy: function(a) { 0 < a.$bD.$GB && (a.$ZD.$kC.setAwake(!0), a.$aD.$kC.setAwake(!0)); var b = this.$lD[a.$ZD.$lC.$FB][a.$aD.$lC.$FB];
            a.$CC = b.pool;
            b.pool = a;
            b = b.destroyFcn;
            b(a, this.$fC) },
        __class__: hi
    };
    var li =
        function() {};
    g["box2d.dynamics.contacts.ContactRegister"] = li;
    li.__name__ = ["box2d", "dynamics", "contacts", "ContactRegister"];
    li.prototype = { __class__: li };
    var mi = function() { this.$YB = new E;
        this.$nD = [];
        this.$CB = []; for (var a = 0; 2 > a;) { var b = a++;
            this.$CB[b] = new E } };
    g["box2d.dynamics.contacts.PositionSolverManifold"] = mi;
    mi.__name__ = ["box2d", "dynamics", "contacts", "PositionSolverManifold"];
    mi.prototype = {
        initialize: function(a) {
            var b, c, d, e, f;
            switch (a.type) {
                case 0:
                    d = a.bodyA.$wB.R;
                    c = a.localPoint;
                    b = a.bodyA.$wB.position.x +
                        (d.col1.x * c.x + d.col2.x * c.y);
                    e = a.bodyA.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y);
                    d = a.bodyB.$wB.R;
                    c = a.points[0].localPoint;
                    f = a.bodyB.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y);
                    d = a.bodyB.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y);
                    c = f - b;
                    var k = d - e,
                        p = c * c + k * k;
                    0 < p ? (p = Math.sqrt(p), this.$YB.x = c / p, this.$YB.y = k / p) : (this.$YB.x = 1, this.$YB.y = 0);
                    this.$CB[0].x = 0.5 * (b + f);
                    this.$CB[0].y = 0.5 * (e + d);
                    this.$nD[0] = c * this.$YB.x + k * this.$YB.y - a.radius;
                    break;
                case 1:
                    d = a.bodyA.$wB.R;
                    c = a.localPlaneNormal;
                    this.$YB.x = d.col1.x * c.x +
                        d.col2.x * c.y;
                    this.$YB.y = d.col1.y * c.x + d.col2.y * c.y;
                    d = a.bodyA.$wB.R;
                    c = a.localPoint;
                    e = a.bodyA.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y);
                    f = a.bodyA.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y);
                    d = a.bodyB.$wB.R;
                    k = 0;
                    for (p = a.pointCount; k < p;) { var r = k++;
                        c = a.points[r].localPoint;
                        b = a.bodyB.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y);
                        c = a.bodyB.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y);
                        this.$nD[r] = (b - e) * this.$YB.x + (c - f) * this.$YB.y - a.radius;
                        this.$CB[r].x = b;
                        this.$CB[r].y = c }
                    break;
                case 2:
                    d = a.bodyB.$wB.R;
                    c = a.localPlaneNormal;
                    this.$YB.x = d.col1.x * c.x + d.col2.x * c.y;
                    this.$YB.y = d.col1.y * c.x + d.col2.y * c.y;
                    d = a.bodyB.$wB.R;
                    c = a.localPoint;
                    e = a.bodyB.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y);
                    f = a.bodyB.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y);
                    d = a.bodyA.$wB.R;
                    k = 0;
                    for (p = a.pointCount; k < p;) r = k++, c = a.points[r].localPoint, b = a.bodyA.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y), c = a.bodyA.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y), this.$nD[r] = (b - e) * this.$YB.x + (c - f) * this.$YB.y - a.radius, this.$CB[r].set(b, c);
                    this.$YB.x *= -1;
                    this.$YB.y *= -1
            }
        },
        __class__: mi
    };
    var Ya = function() { this.$qD = new Id;
        this.$rD = [] };
    g["box2d.dynamics.contacts.ContactSolver"] = Ya;
    Ya.__name__ = ["box2d", "dynamics", "contacts", "ContactSolver"];
    Ya.prototype = {
        initialize: function(a, b, c, d) {
            var e;
            this.$qD.set(a);
            this.$fC = d;
            for (this.$sD = c; this.$rD.length < this.$sD;) this.$rD[this.$rD.length] = new ki;
            for (a = 0; a < c;) {
                d = a++;
                e = b[d];
                var f = e.$ZD,
                    k = e.$aD,
                    p = f.$lC.$l,
                    r = k.$lC.$l,
                    g = f.$kC,
                    h = k.$kC;
                e = e.$bD;
                var l = Oe.mixFriction(f.$mC, k.$mC),
                    n = Oe.mixRestitution(f.$nC, k.$nC),
                    m = g.$yB.x,
                    q = g.$yB.y,
                    u = h.$yB.x,
                    J = h.$yB.y,
                    v = g.$zB,
                    s = h.$zB;
                Ya.$tD.initialize(e, g.$wB, p, h.$wB, r);
                f = Ya.$tD.$YB.x;
                k = Ya.$tD.$YB.y;
                d = this.$rD[d];
                d.bodyA = g;
                d.bodyB = h;
                d.manifold = e;
                d.normal.x = f;
                d.normal.y = k;
                d.pointCount = e.$GB;
                d.friction = l;
                d.restitution = n;
                d.localPlaneNormal.x = e.$DB.x;
                d.localPlaneNormal.y = e.$DB.y;
                d.localPoint.x = e.$EB.x;
                d.localPoint.y = e.$EB.y;
                d.radius = p + r;
                d.type = e.$FB;
                p = 0;
                for (r = d.pointCount; p < r;) {
                    var t = p++,
                        n = e.$CB[t],
                        l = d.points[t];
                    l.normalImpulse = n.$HB;
                    l.tangentImpulse = n.$IB;
                    l.localPoint.setV(n.$EB);
                    var n = l.rA.x = Ya.$tD.$CB[t].x - g.$xB.c.x,
                        z = l.rA.y = Ya.$tD.$CB[t].y - g.$xB.c.y,
                        w = l.rB.x = Ya.$tD.$CB[t].x - h.$xB.c.x,
                        t = l.rB.y = Ya.$tD.$CB[t].y - h.$xB.c.y,
                        y = n * k - z * f,
                        x = w * k - t * f,
                        y = y * y,
                        x = x * x;
                    l.normalMass = 1 / (g.$KC + h.$KC + g.$MC * y + h.$MC * x);
                    var B = g.$JC * g.$KC + h.$JC * h.$KC,
                        B = B + (g.$JC * g.$MC * y + h.$JC * h.$MC * x);
                    l.equalizedMass = 1 / B;
                    x = k;
                    B = -f;
                    y = n * B - z * x;
                    x = w * B - t * x;
                    y *= y;
                    x *= x;
                    l.tangentMass = 1 / (g.$KC + h.$KC + g.$MC * y + h.$MC * x);
                    l.velocityBias = 0;
                    n = d.normal.x * (u + -s * t - m - -v * z) + d.normal.y * (J + s * w - q - v * n); - 1 > n && (l.velocityBias += -d.restitution * n)
                }
                2 == d.pointCount && (J = d.points[0], u = d.points[1],
                    e = g.$KC, g = g.$MC, m = h.$KC, h = h.$MC, q = J.rA.x * k - J.rA.y * f, J = J.rB.x * k - J.rB.y * f, v = u.rA.x * k - u.rA.y * f, u = u.rB.x * k - u.rB.y * f, f = e + m + g * q * q + h * J * J, k = e + m + g * v * v + h * u * u, h = e + m + g * q * v + h * J * u, f * f < 100 * (f * k - h * h) ? (d.K.col1.set(f, h), d.K.col2.set(h, k), d.K.getInverse(d.normalMass)) : d.pointCount = 1)
            }
        },
        initVelocityConstraints: function(a) {
            for (var b = 0, c = this.$sD; b < c;) {
                var d = b++,
                    d = this.$rD[d],
                    e = d.bodyA,
                    f = d.bodyB,
                    k = e.$KC,
                    p = e.$MC,
                    g = f.$KC,
                    h = f.$MC,
                    l = d.normal.x,
                    n = d.normal.y,
                    m = n,
                    q = -l,
                    u;
                if (a.warmStarting) {
                    u = d.pointCount;
                    for (var v = 0; v < u;) {
                        var J =
                            v++,
                            J = d.points[J];
                        J.normalImpulse *= a.dtRatio;
                        J.tangentImpulse *= a.dtRatio;
                        var s = J.normalImpulse * l + J.tangentImpulse * m,
                            t = J.normalImpulse * n + J.tangentImpulse * q;
                        e.$zB -= p * (J.rA.x * t - J.rA.y * s);
                        e.$yB.x -= k * s;
                        e.$yB.y -= k * t;
                        f.$zB += h * (J.rB.x * t - J.rB.y * s);
                        f.$yB.x += g * s;
                        f.$yB.y += g * t
                    }
                } else
                    for (u = d.pointCount, e = 0; e < u;) f = e++, f = d.points[f], f.normalImpulse = 0, f.tangentImpulse = 0
            }
        },
        solveVelocityConstraints: function() {
            for (var a, b, c, d, e, f, k, p, g, h, l = 0, n = this.$sD; l < n;) {
                var m = l++;
                d = this.$rD[m];
                var m = d.bodyA,
                    q = d.bodyB,
                    u = m.$zB,
                    v =
                    q.$zB,
                    J = m.$yB,
                    s = q.$yB,
                    t = m.$KC,
                    y = m.$MC,
                    x = q.$KC,
                    z = q.$MC;
                p = d.normal.x;
                var w = g = d.normal.y,
                    A = -p;
                h = d.friction;
                k = 0;
                for (f = d.pointCount; k < f;) a = k++, a = d.points[a], b = s.x - v * a.rB.y - J.x + u * a.rA.y, c = s.y + v * a.rB.x - J.y - u * a.rA.x, b = b * w + c * A, b = a.tangentMass * -b, c = h * a.normalImpulse, c = B.clamp(a.tangentImpulse + b, -c, c), b = c - a.tangentImpulse, e = b * w, b *= A, J.x -= t * e, J.y -= t * b, u -= y * (a.rA.x * b - a.rA.y * e), s.x += x * e, s.y += x * b, v += z * (a.rB.x * b - a.rB.y * e), a.tangentImpulse = c;
                if (1 == d.pointCount) a = d.points[0], b = s.x + -v * a.rB.y - J.x - -u * a.rA.y, c = s.y + v *
                    a.rB.x - J.y - u * a.rA.x, d = b * p + c * g, b = -a.normalMass * (d - a.velocityBias), c = a.normalImpulse + b, 0 < c || (c = 0), b = c - a.normalImpulse, e = b * p, b *= g, J.x -= t * e, J.y -= t * b, u -= y * (a.rA.x * b - a.rA.y * e), s.x += x * e, s.y += x * b, v += z * (a.rB.x * b - a.rB.y * e), a.normalImpulse = c;
                else {
                    a = d.points[0];
                    w = d.points[1];
                    f = a.normalImpulse;
                    k = w.normalImpulse;
                    e = (s.x - v * a.rB.y - J.x + u * a.rA.y) * p + (s.y + v * a.rB.x - J.y - u * a.rA.x) * g;
                    var C = (s.x - v * w.rB.y - J.x + u * w.rA.y) * p + (s.y + v * w.rB.x - J.y - u * w.rA.x) * g;
                    b = e - a.velocityBias;
                    c = C - w.velocityBias;
                    h = d.K;
                    b -= h.col1.x * f + h.col2.x * k;
                    for (c -=
                        h.col1.y * f + h.col2.y * k;;) {
                        h = d.normalMass;
                        A = -(h.col1.x * b + h.col2.x * c);
                        h = -(h.col1.y * b + h.col2.y * c);
                        if (0 <= A && 0 <= h) { f = A - f;
                            k = h - k;
                            d = f * p;
                            f *= g;
                            p *= k;
                            g *= k;
                            J.x -= t * (d + p);
                            J.y -= t * (f + g);
                            u -= y * (a.rA.x * f - a.rA.y * d + w.rA.x * g - w.rA.y * p);
                            s.x += x * (d + p);
                            s.y += x * (f + g);
                            v += z * (a.rB.x * f - a.rB.y * d + w.rB.x * g - w.rB.y * p);
                            a.normalImpulse = A;
                            w.normalImpulse = h; break } A = -a.normalMass * b;
                        h = 0;
                        C = d.K.col1.y * A + c;
                        if (0 <= A && 0 <= C) {
                            f = A - f;
                            k = h - k;
                            d = f * p;
                            f *= g;
                            p *= k;
                            g *= k;
                            J.x -= t * (d + p);
                            J.y -= t * (f + g);
                            u -= y * (a.rA.x * f - a.rA.y * d + w.rA.x * g - w.rA.y * p);
                            s.x += x * (d + p);
                            s.y += x * (f +
                                g);
                            v += z * (a.rB.x * f - a.rB.y * d + w.rB.x * g - w.rB.y * p);
                            a.normalImpulse = A;
                            w.normalImpulse = h;
                            break
                        }
                        A = 0;
                        h = -w.normalMass * c;
                        e = d.K.col2.x * h + b;
                        if (0 <= h && 0 <= e) { f = A - f;
                            k = h - k;
                            d = f * p;
                            f *= g;
                            p *= k;
                            g *= k;
                            J.x -= t * (d + p);
                            J.y -= t * (f + g);
                            u -= y * (a.rA.x * f - a.rA.y * d + w.rA.x * g - w.rA.y * p);
                            s.x += x * (d + p);
                            s.y += x * (f + g);
                            v += z * (a.rB.x * f - a.rB.y * d + w.rB.x * g - w.rB.y * p);
                            a.normalImpulse = A;
                            w.normalImpulse = h; break } h = A = 0;
                        e = b;
                        C = c;
                        if (0 <= e && 0 <= C) {
                            f = A - f;
                            k = h - k;
                            d = f * p;
                            f *= g;
                            p *= k;
                            g *= k;
                            J.x -= t * (d + p);
                            J.y -= t * (f + g);
                            u -= y * (a.rA.x * f - a.rA.y * d + w.rA.x * g - w.rA.y * p);
                            s.x += x * (d + p);
                            s.y +=
                                x * (f + g);
                            v += z * (a.rB.x * f - a.rB.y * d + w.rB.x * g - w.rB.y * p);
                            a.normalImpulse = A;
                            w.normalImpulse = h;
                            break
                        }
                        break
                    }
                }
                m.$zB = u;
                q.$zB = v
            }
        },
        finalizeVelocityConstraints: function() { for (var a = 0, b = this.$sD; a < b;)
                for (var c = a++, c = this.$rD[c], d = c.manifold, e = 0, f = c.pointCount; e < f;) { var k = e++,
                        p = d.$CB[k],
                        k = c.points[k];
                    p.$HB = k.normalImpulse;
                    p.$IB = k.tangentImpulse } },
        solvePositionConstraints: function(a) {
            for (var b = 0, c = 0, d = this.$sD; c < d;) {
                var e = c++,
                    e = this.$rD[e],
                    f = e.bodyA,
                    k = e.bodyB,
                    p = f.$JC * f.$KC,
                    g = f.$JC * f.$MC,
                    h = k.$JC * k.$KC,
                    l = k.$JC * k.$MC;
                Ya.$uD.initialize(e);
                for (var n = Ya.$uD.$YB, m = 0, q = e.pointCount; m < q;) { var u = m++,
                        s = e.points[u],
                        v = Ya.$uD.$CB[u],
                        t = Ya.$uD.$nD[u],
                        u = v.x - f.$xB.c.x,
                        w = v.y - f.$xB.c.y,
                        x = v.x - k.$xB.c.x,
                        v = v.y - k.$xB.c.y;
                    b < t || (b = t);
                    t = B.clamp(a * (t + 0.005), -0.2, 0);
                    t *= -s.equalizedMass;
                    s = t * n.x;
                    t *= n.y;
                    f.$xB.c.x -= p * s;
                    f.$xB.c.y -= p * t;
                    f.$xB.a -= g * (u * t - w * s);
                    f.synchronizeTransform();
                    k.$xB.c.x += h * s;
                    k.$xB.c.y += h * t;
                    k.$xB.a += l * (x * t - v * s);
                    k.synchronizeTransform() }
            }
            return -0.0075 < b
        },
        __class__: Ya
    };
    var uc = function() { ma.call(this) };
    g["box2d.dynamics.contacts.EdgeAndCircleContact"] =
        uc;
    uc.__name__ = ["box2d", "dynamics", "contacts", "EdgeAndCircleContact"];
    uc.create = function(a) { return new uc };
    uc.destroy = function(a, b) {};
    uc.__super__ = ma;
    uc.prototype = m(ma.prototype, { reset: function(a, b) { ma.prototype.$WD.call(this, a, b) }, evaluate: function() { this.$vD(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, $vD: function(a, b, c, d, e) {}, __class__: uc });
    var sc = function() { ma.call(this) };
    g["box2d.dynamics.contacts.PolyAndCircleContact"] = sc;
    sc.__name__ = ["box2d", "dynamics", "contacts",
        "PolyAndCircleContact"
    ];
    sc.create = function(a) { return new sc };
    sc.destroy = function(a, b) {};
    sc.__super__ = ma;
    sc.prototype = m(ma.prototype, { reset: function(a, b) { ma.prototype.$WD.call(this, a, b);
            null }, evaluate: function() { Q.collidePolygonAndCircle(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, __class__: sc });
    var vc = function() { ma.call(this) };
    g["box2d.dynamics.contacts.PolyAndEdgeContact"] = vc;
    vc.__name__ = ["box2d", "dynamics", "contacts", "PolyAndEdgeContact"];
    vc.create = function(a) { return new vc };
    vc.destroy = function(a, b) {};
    vc.__super__ = ma;
    vc.prototype = m(ma.prototype, { reset: function(a, b) { ma.prototype.$WD.call(this, a, b);
            null }, evaluate: function() { this.$wD(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, $wD: function(a, b, c, d, e) {}, __class__: vc });
    var tc = function() { ma.call(this) };
    g["box2d.dynamics.contacts.PolygonContact"] = tc;
    tc.__name__ = ["box2d", "dynamics", "contacts", "PolygonContact"];
    tc.create = function(a) { return new tc };
    tc.destroy = function(a, b) {};
    tc.__super__ = ma;
    tc.prototype =
        m(ma.prototype, { reset: function(a, b) { ma.prototype.$WD.call(this, a, b) }, evaluate: function() { Q.collidePolygons(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, __class__: tc });
    var oj = function() {};
    g["box2d.dynamics.controllers.Controller"] = oj;
    oj.__name__ = ["box2d", "dynamics", "controllers", "Controller"];
    oj.prototype = {
        step: function(a) {},
        removeBody: function(a) {
            for (var b = a.$FC; null != b && b.controller != this;) b = b.nextController;
            null != b.prevBody && (b.prevBody.nextBody = b.nextBody);
            null != b.nextBody &&
                (b.nextBody.prevBody = b.prevBody);
            null != b.nextController && (b.nextController.prevController = b.prevController);
            null != b.prevController && (b.prevController.nextController = b.nextController);
            this.$GD == b && (this.$GD = b.nextBody);
            a.$FC == b && (a.$FC = b.nextController);
            a.$GC--;
            this.$wC--
        },
        __class__: oj
    };
    var pj = function() {};
    g["box2d.dynamics.controllers.ControllerEdge"] = pj;
    pj.__name__ = ["box2d", "dynamics", "controllers", "ControllerEdge"];
    pj.prototype = { __class__: pj };
    var Pe = function() {};
    g["box2d.dynamics.joints.Joint"] =
        Pe;
    Pe.__name__ = ["box2d", "dynamics", "joints", "Joint"];
    Pe.destroy = function(a, b) {};
    Pe.prototype = { initVelocityConstraints: function(a) {}, solveVelocityConstraints: function(a) {}, finalizeVelocityConstraints: function() {}, solvePositionConstraints: function(a) { return !1 }, __class__: Pe };
    var qj = function() {};
    g["box2d.dynamics.joints.JointEdge"] = qj;
    qj.__name__ = ["box2d", "dynamics", "joints", "JointEdge"];
    qj.prototype = { __class__: qj };
    var H = function() { this.onStarted = this.onUpdated = this.onStopped = null;
        this.spawned = !0;
        n.call(this) };
    g["kit.creator.CreatorObject"] = H;
    H.__name__ = ["kit", "creator", "CreatorObject"];
    H.__super__ = n;
    H.prototype = m(n.prototype, {
        get_entitySlot: function() { return 1 },
        onStart: function() { this.$B |= 2 },
        onUpdate: function(a) { 0 != (this.$B & 2) && (this.$B &= -3, null != this.onStarted && (this.owner.yieldForStart(), this.owner.emitMessageToParents(this.onStarted, this.owner)));
            null != this.onUpdated && this.owner.emitMessageToParents(this.onUpdated, this.owner) },
        onStop: function() {
            this.$B &= -3;
            null != this.onStopped && this.owner.emitMessageToParents(this.onStopped,
                this.owner)
        },
        __class__: H
    });
    var hc = function() { this.physicsType = Pb.Dynamic;
        this.collisionGroup = this.collidesWith = this.onBeginContact = this.onEndContact = null;
        this.sensor = !1;
        this.restitution = 0;
        this.friction = 0.2;
        this.gravityScale = 1;
        this.fixedRotation = !1;
        this.density = 1;
        this.physicsEnabled = !1;
        this.onPointerDown = this.onPointerIn = this.onPointerOut = this.onPointerUp = null;
        this.pointerEnabled = !0;
        H.call(this) };
    g["ez.Actor"] = hc;
    hc.__name__ = ["ez", "Actor"];
    hc.__super__ = H;
    hc.prototype = m(H.prototype, {
        onStart: function() {
            var a =
                this;
            H.prototype.onStart.call(this);
            if (this.physicsEnabled) {
                var b;
                b = this.owner._internal_getFromParents(7);
                var c = b.owner.$MH[0];
                null == c && b.owner.add(c = new Re);
                var d = b.createObject(this.info);
                this.owner.add(d);
                this.fixedRotation && d.body.setFixedRotation(!0);
                d.body.setType(function(a) { var b; switch (a.physicsType[1]) {
                        case 0:
                            b = 2; break;
                        case 1:
                            b = 0; break;
                        case 2:
                            b = 1 } return b }(this));
                d.body.$OC = this.gravityScale;
                for (b = d.body.$DC; null != b;) {
                    b.$jC = this.density;
                    b.$mC = this.friction;
                    b.$nC = this.restitution;
                    b.setSensor(this.sensor);
                    var e = b.$pC;
                    e.categoryBits = c.toBits(this.collisionGroup);
                    null != this.collidesWith && (e.maskBits = c.toBits(this.collidesWith));
                    b.setFilterData(e);
                    b = b.$CC
                }
                d.body.resetMassData();
                null != this.onBeginContact && d.get_beginContact().connect(function(b) { d.box2d.defer(function() { a.$cF(a.onBeginContact) }) });
                null != this.onEndContact && d.get_endContact().connect(function(b) { d.box2d.defer(function() { a.$cF(a.onEndContact) }) })
            }
            c = this.owner.$MH[3];
            null != c && (c.set_pointerEnabled(this.pointerEnabled), null != this.onPointerDown &&
                c.get_pointerDown().connect(function(b) { a.$cF(a.onPointerDown) }), null != this.onPointerIn && c.get_pointerIn().connect(function(b) { a.$cF(a.onPointerIn) }), null != this.onPointerOut && c.get_pointerOut().connect(function(b) { a.$cF(a.onPointerOut) }), null != this.onPointerUp && c.get_pointerUp().connect(function(b) { a.$cF(a.onPointerUp) }))
        },
        $cF: function(a) { null != this.owner && this.owner.emitMessageToParents(a, this.owner) },
        __class__: hc
    });
    var Re = function() { this.$dF = [];
        n.call(this) };
    g["ez.FilterGroups"] = Re;
    Re.__name__ = ["ez", "FilterGroups"];
    Re.__super__ = n;
    Re.prototype = m(n.prototype, { get_entitySlot: function() { return 0 }, toBits: function(a) { if (null == a) return 1; var b = 0; if (null != a)
                for (var c = 0; c < a.length;) { var d = a[c];++c; var e = this.$dF.indexOf(d);
                    0 > e && (e = this.$dF.push(d) - 1);
                    b |= 1 << e + 1 }
            return b }, __class__: Re });
    var Pb = g["ez.PhysicsType"] = { __ename__: ["ez", "PhysicsType"], __constructs__: ["Dynamic", "Static", "Kinematic"] };
    Pb.Dynamic = ["Dynamic", 0];
    Pb.Dynamic.toString = l;
    Pb.Dynamic.__enum__ = Pb;
    Pb.Static = ["Static", 1];
    Pb.Static.toString =
        l;
    Pb.Static.__enum__ = Pb;
    Pb.Kinematic = ["Kinematic", 2];
    Pb.Kinematic.toString = l;
    Pb.Kinematic.__enum__ = Pb;
    var A = function() { this.target = this.script = null };
    g["kit.creator.CreatorAction"] = A;
    A.__name__ = ["kit", "creator", "CreatorAction"];
    A.runSequence = function(a, b) { if (0 >= a.length) return (new ea).$FW(null); for (var c = null, d = 0; d < a.length;) { var e = [a[d]];++d;
            c = null != c ? c.then(function(a) { return function(c) { return a[0].$gF(b) } }(e)) : e[0].$gF(b) } return c };
    A.runParallel = function(a, b) {
        if (0 >= a.length) return (new ea).$FW(null);
        for (var c = [], d = 0; d < a.length;) { var e = a[d];++d;
            c.push(e.$gF(b)) }
        return ea.all(c)
    };
    A.prototype = {
        $eF: function(a) {},
        $fF: function(a) { return null },
        $gF: function(a) {
            if (null == this.script || null == this.script.owner) return (new ea).failure();
            if (null != this.target) { var b = this.script.owner._internal_getFromParents(3, T);
                a = null; for (var c = b.objects.keys(); c.hasNext();) { var d = c.next(); if (this.target.name == d.name) { a = b.objects.h[d.__id__]; break } } if (null == a) return (new ea).failure() } this.$eF(a);
            a = this.$fF(a);
            null == a && (a = (new ea).$FW(null));
            return a
        },
        __class__: A
    };
    var Se = function() { this.message = "";
        A.call(this) };
    g["ez.Debug"] = Se;
    Se.__name__ = ["ez", "Debug"];
    Se.__super__ = A;
    Se.prototype = m(A.prototype, { $eF: function(a) {}, __class__: Se });
    var Te = function() { this.duration = 1;
        A.call(this) };
    g["ez.Delay"] = Te;
    Te.__name__ = ["ez", "Delay"];
    Te.__super__ = A;
    Te.prototype = m(A.prototype, { $fF: function(a) { var b = new ea;
            a.addChild((new F).add(new Ue(this.duration, b))); return b }, __class__: Te });
    var Ue = function(a, b) { n.call(this);
        this.$jF = a;
        this.$kF = b };
    g.$CG = Ue;
    Ue.__name__ = ["$CG"];
    Ue.__super__ = n;
    Ue.prototype = m(n.prototype, { get_entitySlot: function() { return 38 }, onUpdate: function(a) { this.$jF -= a;
            0 >= this.$jF && (this.owner.dispose(), this.$kF.success(null)) }, __class__: Ue });
    var Ee = function(a, b) { this.loaded = new bb;
        n.call(this);
        null == b && (b = a);
        this.$lF = b };
    g["ez.EzApp"] = Ee;
    Ee.__name__ = ["ez", "EzApp"];
    Ee.__super__ = n;
    Ee.prototype = m(n.prototype, {
        get_entitySlot: function() { return 46 },
        onStart: function() {
            var a = this,
                b = this.owner.$MH[8];
            null == b && this.owner.add(b = new Ve);
            var c = this.owner.$MH[2];
            null == c && this.owner.add(c = new Zc);
            var d = this.owner.$MH[10];
            null == d && this.owner.add(d = new Ob);
            d = va.getRequiredAssetPacks(this.$lF).map(function(a) { return c.load(a) });
            ea.all(d).then(function(c) { b.unwindToScene(new zb(a.$lF));
                a.loaded.emit() })
        },
        __class__: Ee
    });
    var ic = function(a) { null == a && (a = !0);
        n.call(this);
        this.opaque = a;
        this.shown = new bb;
        this.hidden = new bb };
    g["kit.scene.Scene"] = ic;
    ic.__name__ = ["kit", "scene", "Scene"];
    ic.__super__ = n;
    ic.prototype = m(n.prototype, { get_entitySlot: function() { return 9 }, __class__: ic });
    var zb = function(a, b) { null == b && (b = !0);
        this.onStarted = this.onStopped = this.onUpdated = this.onPropertyChanged = this.onKeyDown = this.onKeyUp = this.onPointerDown = this.onPointerUp = this.$nF = null;
        ic.call(this, b);
        this.$mF = a };
    g["ez.EzScene"] = zb;
    zb.__name__ = ["ez", "EzScene"];
    zb.__super__ = ic;
    zb.prototype = m(ic.prototype, {
        onStart: function() {
            var a = this;
            ic.prototype.onStart.call(this);
            var b = this.owner._internal_getFromParents(2).getScene(this.$mF),
                c = [];
            this.registerDisposable(b.reloadCount.watch(function(d, e) {
                a.onStarted =
                    b.properties.get("onStarted");
                a.onStopped = b.properties.get("onStopped");
                a.onUpdated = b.properties.get("onUpdated");
                a.onPropertyChanged = b.properties.get("onPropertyChanged");
                a.onKeyDown = b.properties.get("onKeyDown");
                a.onKeyUp = b.properties.get("onKeyUp");
                a.onPointerDown = b.properties.get("onPointerDown");
                a.onPointerUp = b.properties.get("onPointerUp");
                for (var f = 0; f < c.length;) { var k = c[f];++f;
                    k.dispose() } c = [];
                null != a.onKeyDown && c.push(a.connect1(q.$GI.getKeyboard().down, function(b) { a.$cF(a.onKeyDown) }));
                null != a.onKeyUp && c.push(a.connect1(q.$GI.getKeyboard().up, function(b) { a.$cF(a.onKeyUp) }));
                null != a.onPointerDown && c.push(a.connect1(q.$GI.$VH.down, function(b) { a.$cF(a.onPointerDown) }));
                null != a.onPointerUp && c.push(a.connect1(q.$GI.$VH.up, function(b) { a.$cF(a.onPointerUp) }))
            }));
            var d = b.createSprite();
            d.setCamera(0, 0, sa.$iN("width"), sa.$iN("height"));
            this.$nF = (new F).add(d);
            this.owner.addChild(this.$nF);
            var e = new We;
            this.owner.add(e);
            var f = b.properties.get("gravityX"),
                k = b.properties.get("gravityY"),
                e =
                e.world.$HD;
            null != f && (e.x = parseFloat(f));
            null != k && (e.y = parseFloat(k));
            f = new Ob;
            this.owner.add(f);
            if (null != this.onPropertyChanged) { k = [f]; for (e = this.owner.parent; null != e;) { var p = e.$MH[10];
                    null != p && k.push(p);
                    e = e.parent } for (e = 0; e < k.length;) p = k[e], ++e, this.connect2(p.changed, function(b, c) { a.$cF(a.onPropertyChanged) }) }
            for (k = b.properties.keys(); k.hasNext();) e = k.next(), p = u.parseFloat(b.properties.get(e)), isNaN(p) || f.set(e, p);
            1 != sa.$iN("scaleMode") && (f = function() {
                var a = Math.min(q.$GI.$XH.get_width() / d.cameraWidth.$pH,
                    q.$GI.$XH.get_height() / d.cameraHeight.$pH);
                d.setXY(q.$GI.$XH.get_width() / 2 - a * d.cameraWidth.$pH / 2, q.$GI.$XH.get_height() / 2 - a * d.cameraHeight.$pH / 2);
                d.setScale(a)
            }, f(), this.connect0(q.$GI.$XH.resize, f));
            f = b.createScript();
            this.$nF.add(f);
            this.owner.yieldForStart();
            null != this.onStarted && this.$cF(this.onStarted)
        },
        onUpdate: function(a) { ic.prototype.onUpdate.call(this, a);
            null != this.onUpdated && this.$cF(this.onUpdated) },
        onStop: function() { ic.prototype.onStop.call(this);
            null != this.onStopped && this.$cF(this.onStopped) },
        $cF: function(a) { this.$nF.emitMessageToParents(a, this.owner) },
        __class__: zb
    });
    var ta = function() { this.subActions = [];
        A.call(this) };
    g["kit.creator.GroupAction"] = ta;
    ta.__name__ = ["kit", "creator", "GroupAction"];
    ta.__super__ = A;
    ta.prototype = m(A.prototype, { $fF: function(a) { return A.runSequence(this.subActions, a) }, __class__: ta });
    var Xe = function() { ta.call(this) };
    g["ez.Parallel"] = Xe;
    Xe.__name__ = ["ez", "Parallel"];
    Xe.__super__ = ta;
    Xe.prototype = m(ta.prototype, {
        $fF: function(a) { return A.runParallel(this.subActions, a) },
        __class__: Xe
    });
    var Ye = function() { ta.call(this) };
    g["ez.Random"] = Ye;
    Ye.__name__ = ["ez", "Random"];
    Ye.__super__ = ta;
    Ye.prototype = m(ta.prototype, { $fF: function(a) { return 0 == this.subActions.length ? null : this.subActions[u["int"](Math.random() * this.subActions.length)].$gF(a) }, __class__: Ye });
    var Ze = function() { this.count = -1;
        ta.call(this) };
    g["ez.Repeat"] = Ze;
    Ze.__name__ = ["ez", "Repeat"];
    Ze.__super__ = ta;
    Ze.prototype = m(ta.prototype, {
        $fF: function(a) { return 0 > this.count ? this.$pF(a) : this.$qF(a, this.count) },
        $pF: function(a) {
            var b =
                this;
            return A.runSequence(this.subActions, a).then(function(c) { return b.$pF(a) })
        },
        $qF: function(a, b) { var c = this; return 0 >= b ? null : A.runSequence(this.subActions, a).then(function(d) { return c.$qF(a, b - 1) }) },
        __class__: Ze
    });
    var $e = function() { this.name = null;
        A.call(this) };
    g["ez.RunAction"] = $e;
    $e.__name__ = ["ez", "RunAction"];
    $e.__super__ = A;
    $e.prototype = m(A.prototype, { $fF: function(a) { return this.script.run(this.name, a) }, __class__: $e });
    var af = function() { ta.call(this) };
    g["ez.Sequence"] = af;
    af.__name__ = ["ez", "Sequence"];
    af.__super__ = ta;
    af.prototype = m(ta.prototype, { __class__: af });
    var bf = function() { ta.call(this) };
    g["ez.Spawn"] = bf;
    bf.__name__ = ["ez", "Spawn"];
    bf.__super__ = ta;
    bf.prototype = m(ta.prototype, { $fF: function(a) { if (null == a) return null; var b = this.script.owner._internal_getFromParents(3, T);
            a = a.$MH[1];
            a = null != a ? a.info : this.target; var c = b.createObject(a);
            b.getLayer(a.layer.name).addChild(c);
            c.yieldForStart(); return A.runSequence(this.subActions, c) }, __class__: bf });
    var wc = function() { A.call(this) };
    g["ez.TweenAction"] =
        wc;
    wc.__name__ = ["ez", "TweenAction"];
    wc.__super__ = A;
    wc.prototype = m(A.prototype, {
        $rF: function(a, b, c, d, e) { if (0 >= d) return b.set__(c), null;
            b.animateTo(c, d, this.$tF(e)); return Mc.on(a, b) },
        $sF: function(a, b, c, d, e, f, k) { if (0 >= f) return b.set__(c), d.set__(e), null;
            k = this.$tF(k);
            b.animateTo(c, f, k);
            d.animateTo(e, f, k); return Mc.on(a, b) },
        $tF: function(a) {
            switch (a[1]) {
                case 0:
                    return C.linear;
                case 1:
                    return C.quadIn;
                case 2:
                    return C.quadOut;
                case 3:
                    return C.quadInOut;
                case 4:
                    return C.cubeIn;
                case 5:
                    return C.cubeOut;
                case 6:
                    return C.cubeInOut;
                case 7:
                    return C.quartIn;
                case 8:
                    return C.quartOut;
                case 9:
                    return C.quartInOut;
                case 10:
                    return C.quintIn;
                case 11:
                    return C.quintOut;
                case 12:
                    return C.quintInOut;
                case 13:
                    return C.sineIn;
                case 14:
                    return C.sineOut;
                case 15:
                    return C.sineInOut;
                case 16:
                    return C.bounceIn;
                case 17:
                    return C.bounceOut;
                case 18:
                    return C.bounceInOut;
                case 19:
                    return C.circIn;
                case 20:
                    return C.circOut;
                case 21:
                    return C.circInOut;
                case 22:
                    return C.expoIn;
                case 23:
                    return C.expoOut;
                case 24:
                    return C.expoInOut;
                case 25:
                    return C.backIn;
                case 26:
                    return C.backOut;
                case 27:
                    return C.backInOut;
                case 28:
                    return C.elasticIn;
                case 29:
                    return C.elasticOut;
                case 30:
                    return C.elasticInOut
            }
        },
        $uF: function(a) { a = a.$MH[6];
            null != a && a.dispose() },
        __class__: wc
    });
    var Mc = function(a, b) { n.call(this);
        this.$vF = a;
        this.$wF = a.$wF;
        this.$kF = b };
    g.$CH = Mc;
    Mc.__name__ = ["$CH"];
    Mc.on = function(a, b) { var c = new ea;
        a.addChild((new F).add(new Mc(b, c))); return c };
    Mc.__super__ = n;
    Mc.prototype = m(n.prototype, {
        get_entitySlot: function() { return 36 },
        onUpdate: function(a) {
            this.$vF.$wF != this.$wF && (this.owner.dispose(),
                this.$kF.success(null))
        },
        __class__: Mc
    });
    var t = g["ez.TweenEase"] = { __ename__: ["ez", "TweenEase"], __constructs__: "Linear QuadIn QuadOut QuadInOut CubeIn CubeOut CubeInOut QuartIn QuartOut QuartInOut QuintIn QuintOut QuintInOut SineIn SineOut SineInOut BounceIn BounceOut BounceInOut CircIn CircOut CircInOut ExpoIn ExpoOut ExpoInOut BackIn BackOut BackInOut ElasticIn ElasticOut ElasticInOut".split(" ") };
    t.Linear = ["Linear", 0];
    t.Linear.toString = l;
    t.Linear.__enum__ = t;
    t.QuadIn = ["QuadIn", 1];
    t.QuadIn.toString =
        l;
    t.QuadIn.__enum__ = t;
    t.QuadOut = ["QuadOut", 2];
    t.QuadOut.toString = l;
    t.QuadOut.__enum__ = t;
    t.QuadInOut = ["QuadInOut", 3];
    t.QuadInOut.toString = l;
    t.QuadInOut.__enum__ = t;
    t.CubeIn = ["CubeIn", 4];
    t.CubeIn.toString = l;
    t.CubeIn.__enum__ = t;
    t.CubeOut = ["CubeOut", 5];
    t.CubeOut.toString = l;
    t.CubeOut.__enum__ = t;
    t.CubeInOut = ["CubeInOut", 6];
    t.CubeInOut.toString = l;
    t.CubeInOut.__enum__ = t;
    t.QuartIn = ["QuartIn", 7];
    t.QuartIn.toString = l;
    t.QuartIn.__enum__ = t;
    t.QuartOut = ["QuartOut", 8];
    t.QuartOut.toString = l;
    t.QuartOut.__enum__ = t;
    t.QuartInOut = ["QuartInOut", 9];
    t.QuartInOut.toString = l;
    t.QuartInOut.__enum__ = t;
    t.QuintIn = ["QuintIn", 10];
    t.QuintIn.toString = l;
    t.QuintIn.__enum__ = t;
    t.QuintOut = ["QuintOut", 11];
    t.QuintOut.toString = l;
    t.QuintOut.__enum__ = t;
    t.QuintInOut = ["QuintInOut", 12];
    t.QuintInOut.toString = l;
    t.QuintInOut.__enum__ = t;
    t.SineIn = ["SineIn", 13];
    t.SineIn.toString = l;
    t.SineIn.__enum__ = t;
    t.SineOut = ["SineOut", 14];
    t.SineOut.toString = l;
    t.SineOut.__enum__ = t;
    t.SineInOut = ["SineInOut", 15];
    t.SineInOut.toString = l;
    t.SineInOut.__enum__ = t;
    t.BounceIn = ["BounceIn",
        16
    ];
    t.BounceIn.toString = l;
    t.BounceIn.__enum__ = t;
    t.BounceOut = ["BounceOut", 17];
    t.BounceOut.toString = l;
    t.BounceOut.__enum__ = t;
    t.BounceInOut = ["BounceInOut", 18];
    t.BounceInOut.toString = l;
    t.BounceInOut.__enum__ = t;
    t.CircIn = ["CircIn", 19];
    t.CircIn.toString = l;
    t.CircIn.__enum__ = t;
    t.CircOut = ["CircOut", 20];
    t.CircOut.toString = l;
    t.CircOut.__enum__ = t;
    t.CircInOut = ["CircInOut", 21];
    t.CircInOut.toString = l;
    t.CircInOut.__enum__ = t;
    t.ExpoIn = ["ExpoIn", 22];
    t.ExpoIn.toString = l;
    t.ExpoIn.__enum__ = t;
    t.ExpoOut = ["ExpoOut", 23];
    t.ExpoOut.toString =
        l;
    t.ExpoOut.__enum__ = t;
    t.ExpoInOut = ["ExpoInOut", 24];
    t.ExpoInOut.toString = l;
    t.ExpoInOut.__enum__ = t;
    t.BackIn = ["BackIn", 25];
    t.BackIn.toString = l;
    t.BackIn.__enum__ = t;
    t.BackOut = ["BackOut", 26];
    t.BackOut.toString = l;
    t.BackOut.__enum__ = t;
    t.BackInOut = ["BackInOut", 27];
    t.BackInOut.toString = l;
    t.BackInOut.__enum__ = t;
    t.ElasticIn = ["ElasticIn", 28];
    t.ElasticIn.toString = l;
    t.ElasticIn.__enum__ = t;
    t.ElasticOut = ["ElasticOut", 29];
    t.ElasticOut.toString = l;
    t.ElasticOut.__enum__ = t;
    t.ElasticInOut = ["ElasticInOut", 30];
    t.ElasticInOut.toString =
        l;
    t.ElasticInOut.__enum__ = t;
    var Jd = function() { this.strokeWidth = 5;
        this.strokeColor = 10066329;
        this.fillColor = 12632256;
        hc.call(this) };
    g["ez.VectorGraphics"] = Jd;
    Jd.__name__ = ["ez", "VectorGraphics"];
    Jd.__super__ = hc;
    Jd.prototype = m(hc.prototype, {
        onStart: function() {
            var a = this.owner.$MH[3];
            null == a && (a = new cf(this.info), this.info.transformSprite(a), this.owner.add(a));
            hc.prototype.onStart.call(this);
            a = a.get_graphics();
            switch (this.info.shape[1]) {
                case 2:
                    a.fillPolygon(this.fillColor, this.$xF(!1));
                    0 < this.strokeWidth &&
                        a.strokeLines(this.strokeColor, this.$xF(!0), this.strokeWidth);
                    break;
                case 3:
                    a.strokeLines(this.strokeColor, this.$xF(!1), this.strokeWidth);
                    break;
                case 0:
                    a.fillRect(this.fillColor, 0, 0, this.info.width, this.info.height);
                    0 < this.strokeWidth && a.strokeLines(this.strokeColor, [0, 0, this.info.width, 0, this.info.width, this.info.height, 0, this.info.height, 0, 0], this.strokeWidth);
                    break;
                case 1:
                    var b = this.info.width / 2,
                        c = this.info.height / 2;
                    a.fillEllipse(this.fillColor, b, c, b, c);
                    0 < this.strokeWidth && a.strokeEllipse(this.strokeColor,
                        b, c, b, c, this.strokeWidth)
            }
        },
        $xF: function(a) { for (var b = [], c = 0, d = this.info.points; c < d.length;) { var e = d[c];++c;
                b.push(e.x);
                b.push(e.y) } a && 0 < b.length && (b.push(b[0]), b.push(b[1])); return b },
        __class__: Jd
    });
    var ka = function(a, b) { null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b };
    g["kit.math.Point"] = ka;
    ka.__name__ = ["kit", "math", "Point"];
    ka.prototype = {
        set: function(a, b) { this.x = a;
            this.y = b },
        add: function(a, b) { this.x += a;
            this.y += b },
        normalize: function() { var a = this.magnitude();
            this.x /= a;
            this.y /= a },
        dot: function(a, b) {
            return this.x *
                a + this.y * b
        },
        multiply: function(a) { this.x *= a;
            this.y *= a },
        magnitude: function() { return Math.sqrt(this.x * this.x + this.y * this.y) },
        distanceTo: function(a, b) { return Math.sqrt(this.distanceToSquared(a, b)) },
        distanceToSquared: function(a, b) { var c = this.x - a,
                d = this.y - b; return c * c + d * d },
        __class__: ka
    };
    var x = function() {
        this.$NG = null;
        this.$FG = this.$GG = 0;
        this.$EG = null;
        var a = this;
        n.call(this);
        this.$B |= 182;
        this.$DG = new Ab;
        var b = function(b, d) { a.$B |= 24 };
        this.x = new X(0, b);
        this.y = new X(0, b);
        this.rotation = new X(0, b);
        this.scaleX =
            new X(1, b);
        this.scaleY = new X(1, b);
        this.anchorX = new X(0, b);
        this.anchorY = new X(0, b);
        this.alpha = new X(1)
    };
    g["kit.display.Sprite"] = x;
    x.__name__ = ["kit", "display", "Sprite"];
    x.hitTest = function(a, b, c) { var d = a.$MH[3]; if (null != d) { if (6 != (d.$B & 6) || null != d.$NG && null != d.$NG.$aK || !d.getLocalMatrix().inverseTransform(b, c, x.$SG)) return null;
            b = x.$SG.x;
            c = x.$SG.y; var e = d.get_scissor(); if (null != e && !e.contains(b, c)) return null } a = x.$PG(a.firstChild, b, c); return null != a ? a : null != d && d.containsLocal(b, c) ? d : null };
    x.render = function(a,
        b) { x.$OG(a, b, !0) };
    x.$OG = function(a, b, c) {
        if (a.active) {
            var d = a.$MH[3];
            if (null != d) {
                var e = d.alpha.$pH;
                if (0 == (d.$B & 2) || 0 >= e) return;
                var f = d.$NG;
                if (c && null != f && null != f.$aK) return;
                b.save();
                null != f && null != f.$ZK && 0 != (d.$B & 128) && (c = f.$ZK.owner, null != c && (b.beginMask(), x.$OG(c, b, !1), b.endMask()));
                1 > e && b.multiplyAlpha(e);
                e = d.getLocalMatrix();
                c = e.m02;
                var k = e.m12;
                0 != (d.$B & 32) && (c = Math.round(c), k = Math.round(k));
                b.transform(e.m00, e.m10, e.m01, e.m11, c, k);
                null != f && (1 == f.$VK.$pH && 1 == f.$WK.$pH && 1 == f.$XK.$pH || b.tint(f.$VK.$pH,
                    f.$WK.$pH, f.$XK.$pH), null != f.$TK && b.setBlendMode(f.$TK), e = f.$UK, null != e && b.applyScissor(e.x, e.y, e.width, e.height));
                d.draw(b);
                null != f && null != f.$YK && f.$YK.render(b)
            }
            f = a.$MH[8];
            if (null != f)
                for (f = f.occludedScenes, e = 0; e < f.length;) c = f[e], ++e, x.render(c, b);
            for (a = a.firstChild; null != a;) f = a.next, x.render(a, b), a = f;
            null != d && b.restore()
        }
    };
    x.$PG = function(a, b, c) { if (null != a) { var d = x.$PG(a.next, b, c); return null != d ? d : x.hitTest(a, b, c) } return null };
    x.$RG = function(a, b, c, d) {
        a = a.transform(b, c, x.$SG);
        b = a.x;
        c = a.y;
        b < d.x && (d.x =
            b);
        c < d.y && (d.y = c);
        b > d.width && (d.width = b);
        c > d.height && (d.height = c)
    };
    x.__super__ = n;
    x.prototype = m(n.prototype, {
        get_entitySlot: function() { return 3 },
        getNaturalWidth: function() { return 0 },
        getNaturalHeight: function() { return 0 },
        containsLocal: function(a, b) { return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight() },
        getLocalMatrix: function() {
            0 != (this.$B & 8) && (this.$B &= -9, this.$DG.compose(this.x.$pH, this.y.$pH, this.scaleX.$pH, this.scaleY.$pH, 3.141592653589793 * this.rotation.$pH / 180), this.$DG.translate(-this.anchorX.$pH,
                -this.anchorY.$pH));
            return this.$DG
        },
        getViewMatrix: function() { if (this.$yF()) { var a = this.$zF();
                this.$EG = null != a ? Ab.multiply(a.getViewMatrix(), this.getLocalMatrix(), this.$EG) : this.getLocalMatrix().clone(this.$EG);
                this.$B &= -17;
                null != a && (this.$GG = a.$FG);++this.$FG } return this.$EG },
        viewToLocal: function(a, b, c) { null == c && (c = new ka);
            this.getViewMatrix().inverseTransform(a, b, c) || c.set(0, 0); return c },
        setAnchor: function(a, b) { this.anchorX.set__(a);
            this.anchorY.set__(b); return this },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() /
                2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this
        },
        setXY: function(a, b) { this.x.set__(a);
            this.y.set__(b); return this },
        setAlpha: function(a) { this.alpha.set__(a); return this },
        setTint: function(a) { if (null != this.$NG || 16777215 != a) this.get_tintR().set__((a & 16711680) / 16711680), this.get_tintG().set__((a & 65280) / 65280), this.get_tintB().set__((a & 255) / 255); return this },
        setScale: function(a) { this.scaleX.set__(a);
            this.scaleY.set__(a); return this },
        setScaleXY: function(a, b) {
            this.scaleX.set__(a);
            this.scaleY.set__(b);
            return this
        },
        disablePointer: function() { this.set_pointerEnabled(!1); return this },
        disablePixelSnapping: function() { this.set_pixelSnapping(!1); return this },
        onAdded: function() { 0 != (this.$B & 64) && this.$$F() },
        onRemoved: function() { null != this.$MG && (this.$MG.dispose(), this.$MG = null) },
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a);
            var b = this.$NG;
            null != b && (b.$VK.update(a),
                b.$WK.update(a), b.$XK.update(a))
        },
        draw: function(a) {},
        $yF: function() { if (0 != (this.$B & 16)) return !0; var a = this.$zF(); return null == a ? !1 : this.$GG != a.$FG || a.$yF() },
        $zF: function() { if (null == this.owner) return null; for (var a = this.owner.parent; null != a;) { var b = a.$MH[3]; if (null != b) return b;
                a = a.parent } return null },
        get_pointerDown: function() { null == this.$HG && (this.$HG = new ia); return this.$HG },
        get_pointerUp: function() { null == this.$JG && (this.$JG = new ia); return this.$JG },
        get_pointerIn: function() {
            null == this.$KG && (this.$KG =
                new ia);
            return this.$KG
        },
        get_pointerOut: function() { null == this.$LG && (this.$LG = new ia); return this.$LG },
        $$F: function() { var a = this;
            null == this.$MG && q.$GI.$PH.$PQ(function() { a.$MG = q.$GI.$VH.move.connect(function(b) { for (var c = b.hit; null != c;) { if (c == a) return;
                        c = c.$zF() } null != a.$LG && 0 != (a.$B & 64) && a.$LG.emit(b);
                    a.$B &= -65;
                    null != a.$MG && (a.$MG.dispose(), a.$MG = null) }) }) },
        get_blendMode: function() { return null != this.$NG ? this.$NG.$TK : null },
        set_blendMode: function(a) {
            if (null == this.$NG) {
                if (null == a) return null;
                this.$NG =
                    new Xb
            }
            return this.$NG.$TK = a
        },
        get_scissor: function() { return null != this.$NG ? this.$NG.$UK : null },
        set_scissor: function(a) { if (null == this.$NG) { if (null == a) return null;
                this.$NG = new Xb } return this.$NG.$UK = a },
        get_tintR: function() { null == this.$NG && (this.$NG = new Xb); return this.$NG.$VK },
        get_tintG: function() { null == this.$NG && (this.$NG = new Xb); return this.$NG.$WK },
        get_tintB: function() { null == this.$NG && (this.$NG = new Xb); return this.$NG.$XK },
        get_graphics: function() {
            null == this.$NG && (this.$NG = new Xb);
            var a = this.$NG.$YK;
            null == a && (a = this.$NG.$YK = new df);
            return a
        },
        set_mask: function(a) { if (null == this.$NG) { if (null == a) return null;
                this.$NG = new Xb } var b = this.$NG.$ZK; if (null != b && (b = b.$NG, null != b && null != b.$aK)) { var c = b.$aK;
                b.$aK = null;
                c.set_mask(null) } null != a && (b = a.$NG, null == b && (b = a.$NG = new Xb), null != b.$aK && b.$aK.set_mask(null), b.$aK = this); return this.$NG.$ZK = a },
        set_maskEnabled: function(a) { this.$B = xc.set(this.$B, 128, a); return a },
        set_visible: function(a) { this.$B = xc.set(this.$B, 2, a); return a },
        set_pointerEnabled: function(a) {
            this.$B =
                xc.set(this.$B, 4, a);
            return a
        },
        set_pixelSnapping: function(a) { this.$B = xc.set(this.$B, 32, a); return a },
        $_F: function(a) { this.$BG(a);
            null != this.$HG && this.$HG.emit(a) },
        $AG: function(a) { this.$BG(a);
            null != this.$IG && this.$IG.emit(a) },
        $BG: function(a) { 0 == (this.$B & 64) && (this.$B |= 64, null != this.$KG || null != this.$LG) && (null != this.$KG && this.$KG.emit(a), this.$$F()) },
        $CG: function(a) {
            switch (a.source[1]) {
                case 1:
                    null != this.$LG && 0 != (this.$B & 64) && this.$LG.emit(a), this.$B &= -65, null != this.$MG && (this.$MG.dispose(), this.$MG = null) } null !=
                this.$JG && this.$JG.emit(a)
        },
        __class__: x,
        __properties__: m(n.prototype.__properties__, {
            get_graphics: "get_graphics",
            get_tintB: "get_tintB",
            get_tintG: "get_tintG",
            get_tintR: "get_tintR",
            get_pointerOut: "get_pointerOut",
            get_pointerIn: "get_pointerIn",
            get_pointerUp: "get_pointerUp",
            get_pointerDown: "get_pointerDown",
            set_pointerEnabled: "set_pointerEnabled",
            set_pixelSnapping: "set_pixelSnapping",
            set_visible: "set_visible",
            set_maskEnabled: "set_maskEnabled",
            set_mask: "set_mask",
            set_scissor: "set_scissor",
            get_scissor: "get_scissor",
            set_blendMode: "set_blendMode",
            get_blendMode: "get_blendMode"
        })
    });
    var cf = function(a) { x.call(this); switch (a.shape[1]) {
            case 2:
            case 3:
                var b = this.$dG = this.$cG = this.$bG = this.$aG = 0; for (a = a.points; b < a.length;) { var c = a[b];++b;
                    c.x < this.$aG ? this.$aG = c.x : c.x > this.$cG && (this.$cG = c.x);
                    c.y < this.$bG ? this.$bG = c.y : c.y > this.$dG && (this.$dG = c.y) } break;
            default:
                this.$bG = this.$aG = 0, this.$cG = a.width, this.$dG = a.height } };
    g.$CI = cf;
    cf.__name__ = ["$CI"];
    cf.__super__ = x;
    cf.prototype = m(x.prototype, {
        containsLocal: function(a, b) {
            return a >=
                this.$aG && a <= this.$cG && b >= this.$bG && b <= this.$dG
        },
        __class__: cf
    });
    var ef = function() { this.ease = t.Linear;
        this.to = this.duration = 0;
        A.call(this) };
    g["ez.display.AlphaTo"] = ef;
    ef.__name__ = ["ez", "display", "AlphaTo"];
    ef.__super__ = wc;
    ef.prototype = m(wc.prototype, { $fF: function(a) { return this.$rF(a, a.$MH[3].alpha, this.to, this.duration, this.ease) }, __class__: ef });
    var ff = function() { A.call(this) };
    g["ez.display.Hide"] = ff;
    ff.__name__ = ["ez", "display", "Hide"];
    ff.__super__ = A;
    ff.prototype = m(A.prototype, {
        $eF: function(a) { a.$MH[3].set_visible(!1) },
        __class__: ff
    });
    var gf = function() { this.ease = t.Linear;
        this.x = this.y = this.duration = 0;
        A.call(this) };
    g["ez.display.MoveBy"] = gf;
    gf.__name__ = ["ez", "display", "MoveBy"];
    gf.__super__ = wc;
    gf.prototype = m(wc.prototype, { $fF: function(a) { this.$uF(a); var b = a.$MH[3]; return this.$sF(a, b.x, b.x.$pH + this.x, b.y, b.y.$pH + this.y, this.duration, this.ease) }, __class__: gf });
    var hf = function() { this.loop = this.waitForComplete = !0;
        this.state = null;
        A.call(this) };
    g["ez.movie.ChangeState"] = hf;
    hf.__name__ = ["ez", "movie", "ChangeState"];
    hf.__super__ =
        A;
    hf.prototype = m(A.prototype, { $fF: function(a) { if (null == this.state) return null;
            a = u.instance(a.$MH[3], qb); if (null == a) return null; if (this.loop) a.loop(this.state, !1);
            else if (a.play(this.state, !0), this.waitForComplete) { var b = new ea;
                a.state.get_changed().connect(function(a, d) { b.success(null) }).once(); return b } return null }, __class__: hf });
    var jf = function() { this._value = null;
        this.value = "";
        this.type = Bb.Number;
        this.operator = za.Equals;
        ta.call(this) };
    g["ez.property.IfProperty"] = jf;
    jf.__name__ = ["ez", "property",
        "IfProperty"
    ];
    jf.__super__ = ta;
    jf.prototype = m(ta.prototype, {
        $fF: function(a) { var b = this.$eG(a);
            null == b && (b = 0);
            null == this._value && (this._value = Yb.$hG(this.type, this.value)); var c; switch (this.operator[1]) {
                case 0:
                    c = b == this._value; break;
                case 1:
                    c = b != this._value; break;
                case 2:
                    c = b < this._value; break;
                case 3:
                    c = b <= this._value; break;
                case 4:
                    c = b > this._value; break;
                case 5:
                    c = b >= this._value } return c ? A.runSequence(this.subActions, a) : null },
        $eG: function(a) {
            if (null == a) return null;
            a = a._internal_getFromParents(10);
            if (null ==
                a) return null;
            var b = a.get(this.property);
            return null != b ? b : this.$eG(a.owner.parent)
        },
        __class__: jf
    });
    var za = g["ez.property.IfOperator"] = { __ename__: ["ez", "property", "IfOperator"], __constructs__: "Equals NotEquals LessThan LessThanOrEquals GreaterThan GreaterThanOrEquals".split(" ") };
    za.Equals = ["Equals", 0];
    za.Equals.toString = l;
    za.Equals.__enum__ = za;
    za.NotEquals = ["NotEquals", 1];
    za.NotEquals.toString = l;
    za.NotEquals.__enum__ = za;
    za.LessThan = ["LessThan", 2];
    za.LessThan.toString = l;
    za.LessThan.__enum__ = za;
    za.LessThanOrEquals = ["LessThanOrEquals", 3];
    za.LessThanOrEquals.toString = l;
    za.LessThanOrEquals.__enum__ = za;
    za.GreaterThan = ["GreaterThan", 4];
    za.GreaterThan.toString = l;
    za.GreaterThan.__enum__ = za;
    za.GreaterThanOrEquals = ["GreaterThanOrEquals", 5];
    za.GreaterThanOrEquals.toString = l;
    za.GreaterThanOrEquals.__enum__ = za;
    var Yb = function() { this.location = Cb.Scene;
        this.property = null;
        A.call(this) };
    g["ez.property.PropertyAction"] = Yb;
    Yb.__name__ = ["ez", "property", "PropertyAction"];
    Yb.$hG = function(a, b) {
        switch (a[1]) {
            case 0:
                var c = parseFloat(b);
                return isNaN(c) ? 0 : c;
            case 1:
                return "" != b && "0" != b && "false" != b;
            case 2:
                return b
        }
    };
    Yb.__super__ = A;
    Yb.prototype = m(A.prototype, {
        $eF: function(a) { if (null != this.property) { var b = this.$fG(a),
                    c = b.$MH[10];
                null == c && b.add(c = new Ob);
                b = c.get(this.property);
                a = this.$gG(a, b);
                c.set(this.property, a) } },
        $fG: function(a) { switch (this.location[1]) {
                case 0:
                    return this.script.owner._internal_getFromParents(46).owner;
                case 1:
                    return this.script.owner._internal_getFromParents(9, zb).owner;
                case 2:
                    return a } },
        $gG: function(a, b) { return null },
        __class__: Yb
    });
    var Cb = g["ez.property.PropertyLocation"] = { __ename__: ["ez", "property", "PropertyLocation"], __constructs__: ["Global", "Scene", "Target"] };
    Cb.Global = ["Global", 0];
    Cb.Global.toString = l;
    Cb.Global.__enum__ = Cb;
    Cb.Scene = ["Scene", 1];
    Cb.Scene.toString = l;
    Cb.Scene.__enum__ = Cb;
    Cb.Target = ["Target", 2];
    Cb.Target.toString = l;
    Cb.Target.__enum__ = Cb;
    var Bb = g["ez.property.PropertyType"] = { __ename__: ["ez", "property", "PropertyType"], __constructs__: ["Number", "Boolean", "String"] };
    Bb.Number = ["Number", 0];
    Bb.Number.toString =
        l;
    Bb.Number.__enum__ = Bb;
    Bb.Boolean = ["Boolean", 1];
    Bb.Boolean.toString = l;
    Bb.Boolean.__enum__ = Bb;
    Bb.String = ["String", 2];
    Bb.String.toString = l;
    Bb.String.__enum__ = Bb;
    var kf = function() { this._value = null;
        this.value = "";
        this.type = Bb.Number;
        Yb.call(this) };
    g["ez.property.SetProperty"] = kf;
    kf.__name__ = ["ez", "property", "SetProperty"];
    kf.__super__ = Yb;
    kf.prototype = m(Yb.prototype, { $gG: function(a, b) { null == this._value && (this._value = Yb.$hG(this.type, this.value)); return this._value }, __class__: kf });
    var Ua = function() {
        this.duration =
            0.5;
        this.transition = Db.None;
        A.call(this)
    };
    g["ez.scene.SceneAction"] = Ua;
    Ua.__name__ = ["ez", "scene", "SceneAction"];
    Ua.$nG = function(a, b) { for (var c = [], d = 0; d < a.length;) { var e = a[d];++d;
            0 > b.indexOf(e) && c.push(e) } return c };
    Ua.__super__ = A;
    Ua.prototype = m(A.prototype, {
        $iG: function(a, b) { null == b && (b = !0); return new zb(a, b) },
        $jG: function() { return [] },
        $kG: function(a, b, c, d) {
            var e = this,
                f;
            f = this.script.owner._internal_getFromParents(2);
            var k = this.$mG(),
                p = new Kd(f, a, this.$jG());
            a = null != b ? new Kd(f, b, []) : null;
            f = [];
            if (c)
                for (var g =
                        0, h = k.scenes; g < h.length;) { var l = h[g];++g;
                    l = u.instance(l.$MH[9], zb);
                    null != l && (f = f.concat(va.getRequiredAssetPacks(l.$mF))) } g = k.get_topScene().firstComponent;
            if (0 < p.$qG.length && null != a) return null != g && g.registerDisposable(a), c && (a.$rG = Ua.$nG(f, p.$pG.concat(a.$pG)), p.$rG = Ua.$nG(a.$pG, p.$pG)), a.$sG().then(function(a) {
                a = e.$iG(b);
                a.registerDisposable(p);
                d ? k.pushScene(a) : k.unwindToScene(a);
                a.owner.yieldForStart();
                var c = a.owner.$MH[10];
                null == c && a.owner.add(c = new Ob);
                c.set("progress", 0);
                return p.$sG().progress(function(a) {
                    c.set("progress",
                        100 * a | 0)
                })
            });
            null != g && g.registerDisposable(p);
            c && (p.$rG = Ua.$nG(f, p.$pG));
            var n;
            k.get_topScene();
            n = k.get_topScene().getComponentBySlot(10);
            null == n && k.get_topScene().add(n = new Ob);
            n.set("progress", 0);
            return p.$sG().progress(function(a) { n.set("progress", 100 * a | 0) })
        },
        $lG: function() { switch (this.transition[1]) {
                case 0:
                    return null;
                case 1:
                    return new Ld(this.duration);
                case 2:
                    return new Md(this.duration) } },
        $mG: function() { return this.script.owner._internal_getFromParents(8) },
        __class__: Ua
    });
    var lf = function() {
        this.disposeUnusedAssets = !0;
        this.onLoadError = this.loadingScene = null;
        Ua.call(this)
    };
    g["ez.scene.ChangeScene"] = lf;
    lf.__name__ = ["ez", "scene", "ChangeScene"];
    lf.__super__ = Ua;
    lf.prototype = m(Ua.prototype, {
        $fF: function(a) {
            var b = this;
            if (null == this.scene) return null;
            var c = this.$mG();
            return this.$kG(this.scene, this.loadingScene, this.disposeUnusedAssets, !1).then(function(a) { c.unwindToScene(b.$iG(b.scene), b.$lG()) }).catchError(function(c) {
                null != b.onLoadError && null != b.script.owner && b.script.owner.emitMessageToParents(b.onLoadError, a);
                return (new ea).failure(c)
            })
        },
        __class__: lf
    });
    var yc = function() { this.disposeUnusedAssets = !0;
        Ua.call(this) };
    g["ez.scene.PopScene"] = yc;
    yc.__name__ = ["ez", "scene", "PopScene"];
    yc.__super__ = Ua;
    yc.prototype = m(Ua.prototype, { $eF: function(a) { this.$mG().popScene(this.$lG()) }, __class__: yc });
    var mf = function() { this.onLoadError = this.loadingScene = null;
        this.opaque = !1;
        Ua.call(this) };
    g["ez.scene.PushScene"] = mf;
    mf.__name__ = ["ez", "scene", "PushScene"];
    mf.__super__ = Ua;
    mf.prototype = m(Ua.prototype, {
        $fF: function(a) {
            var b = this;
            if (null == this.scene) return null;
            var c = this.$mG(),
                d = c.get_topScene();
            return this.$kG(this.scene, this.loadingScene, !1, !0).then(function(a) { c.$eV(d);
                c.pushScene(b.$iG(b.scene, b.opaque), b.$lG()) }).catchError(function(c) { null != b.onLoadError && null != b.script.owner && b.script.owner.emitMessageToParents(b.onLoadError, a); return (new ea).failure(c) })
        },
        __class__: mf
    });
    var Kd = function(a, b, c) { this.$rG = [];
        this.$tG = a;
        this.$mF = b;
        this.$pG = va.getRequiredAssetPacks(b).concat(c);
        this.$qG = this.$pG.filter(function(b) { return !a.isLoaded(b) }) };
    g.$CJ = Kd;
    Kd.__name__ = ["$CJ"];
    Kd.__interfaces__ = [Sa];
    Kd.prototype = { $sG: function() { var a = this,
                b = this.$qG.map(function(b) { return a.$tG.load(b) }); return ea.all(b) }, dispose: function() { for (var a = 0, b = this.$rG; a < b.length;) { var c = b[a];++a;
                this.$tG.removePackByName(c) } }, __class__: Kd };
    var Db = g["ez.scene.SceneTransition"] = { __ename__: ["ez", "scene", "SceneTransition"], __constructs__: ["None", "Slide", "Fade"] };
    Db.None = ["None", 0];
    Db.None.toString = l;
    Db.None.__enum__ = Db;
    Db.Slide = ["Slide", 1];
    Db.Slide.toString = l;
    Db.Slide.__enum__ =
        Db;
    Db.Fade = ["Fade", 2];
    Db.Fade.toString = l;
    Db.Fade.__enum__ = Db;
    var Nc = function() { this.soundChannel = null;
        this.loop = this.waitForComplete = this.stopWhenTargetDisposed = !1;
        this.volume = 1;
        this.sound = null;
        A.call(this) };
    g["ez.sound.PlaySound"] = Nc;
    Nc.__name__ = ["ez", "sound", "PlaySound"];
    Nc.__super__ = A;
    Nc.prototype = m(A.prototype, {
        $fF: function(a) {
            if (null == this.sound) return null;
            var b;
            b = this.script.owner._internal_getFromParents(2);
            if (null == b) return null;
            b = b.getSound(this.sound);
            b = this.loop ? b.loop(this.volume) : b.play(this.volume);
            if (null != this.soundChannel) { var c = Nc.channels.get(this.soundChannel);
                null != c && c.dispose();
                Nc.channels.set(this.soundChannel, b) } this.stopWhenTargetDisposed && (c = a.$MH[13], null == c && a.add(c = new nf), c.registerDisposable(b));
            if (this.waitForComplete) { var d = new ea;
                b.get_complete().watch(function(a, b) { a && d.success(null) }); return d }
            return null
        },
        __class__: Nc
    });
    var nf = function() { n.call(this) };
    g.$CK = nf;
    nf.__name__ = ["$CK"];
    nf.__super__ = n;
    nf.prototype = m(n.prototype, { get_entitySlot: function() { return 13 }, __class__: nf });
    var Nd = function() {};
    g["haxe.IMap"] = Nd;
    Nd.__name__ = ["haxe", "IMap"];
    Nd.prototype = { __class__: Nd };
    var ni = function(a) { this.url = a;
        this.headers = new Da;
        this.params = new Da;
        this.async = !0 };
    g["haxe.Http"] = ni;
    ni.__name__ = ["haxe", "Http"];
    ni.prototype = {
        setHeader: function(a, b) { this.headers = Ma.filter(this.headers, function(b) { return b.header != a });
            this.headers.push({ header: a, value: b }); return this },
        setPostData: function(a) { this.postData = a; return this },
        request: function(a) {
            var b = this;
            b.responseData = null;
            var c = this.req = of .createXMLHttpRequest(),
                d = function(a) {
                    if (4 == c.readyState) {
                        var d;
                        try { d = c.status } catch (e) { e instanceof s && (e = e.val), d = null } null != d && (a = window.location.protocol.toLowerCase(), (new Ra("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "")).match(a) && (d = null != c.responseText ? 200 : 404));
                        void 0 == d && (d = null);
                        if (null != d) b.onStatus(d);
                        if (null != d && 200 <= d && 400 > d) b.req = null, b.onData(b.responseData = c.responseText);
                        else if (null == d) b.req = null, b.onError("Failed to connect or resolve host");
                        else switch (d) {
                            case 12029:
                                b.req =
                                    null;
                                b.onError("Failed to connect to host");
                                break;
                            case 12007:
                                b.req = null;
                                b.onError("Unknown host");
                                break;
                            default:
                                b.req = null, b.responseData = c.responseText, b.onError("Http Error #" + c.status)
                        }
                    }
                };
            this.async && (c.onreadystatechange = d);
            var e = this.postData;
            if (null != e) a = !0;
            else
                for (var f = this.params.h, k = null; null != f;) k = f[0], f = f[1], e = null == e ? "" : e + "&", e += encodeURIComponent(k.param) + "=" + encodeURIComponent(k.value);
            try {
                if (a) c.open("POST", this.url, this.async);
                else if (null != e) {
                    var p = 1 >= this.url.split("?").length;
                    c.open("GET", this.url + (p ? "?" : "&") + e, this.async);
                    e = null
                } else c.open("GET", this.url, this.async)
            } catch (g) { g instanceof s && (g = g.val);
                b.req = null;
                this.onError(g.toString()); return }!Ma.exists(this.headers, function(a) { return "Content-Type" == a.header }) && a && null == this.postData && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            a = this.headers.h;
            for (f = null; null != a;) f = a[0], a = a[1], c.setRequestHeader(f.header, f.value);
            c.send(e);
            this.async || d(null)
        },
        onData: function(a) {},
        onError: function(a) {},
        onStatus: function(a) {},
        __class__: ni
    };
    var oi = function(a, b) { this.high = a;
        this.low = b };
    g["haxe._Int64.___Int64"] = oi;
    oi.__name__ = ["haxe", "_Int64", "___Int64"];
    oi.prototype = { __class__: oi };
    var jc = function() { this.buf = new eb;
        this.cache = [];
        this.useCache = jc.USE_CACHE;
        this.useEnumIndex = jc.USE_ENUM_INDEX;
        this.shash = new O;
        this.scount = 0 };
    g["haxe.Serializer"] = jc;
    jc.__name__ = ["haxe", "Serializer"];
    jc.prototype = {
        toString: function() { return this.buf.b },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b +=
                "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)) : (this.shash.set(a, this.scount++), this.buf.b += "y", a = encodeURIComponent(a), this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) { for (var b = typeof a, c = 0, d = this.cache.length; c < d;) { var e = c++,
                    f = this.cache[e]; if (typeof f == b && f == a) return this.buf.b += "r", this.buf.b = null == e ? this.buf.b + "null" : this.buf.b + ("" + e), !0 } this.cache.push(a); return !1 },
        serializeFields: function(a) { for (var b = 0, c = P.fields(a); b < c.length;) { var d = c[b];++b;
                this.serializeString(d);
                this.serialize(P.field(a, d)) } this.buf.b += "g" },
        serialize: function(a) {
            var b = da["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == a) { this.buf.b += "z"; break } this.buf.b += "i";
                    this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                    break;
                case 2:
                    isNaN(a) ? this.buf.b += "k" : isFinite(a) ? (this.buf.b += "d", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)) : this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b +
                        "p";
                    break;
                case 3:
                    this.buf.b = a ? this.buf.b + "t" : this.buf.b + "f";
                    break;
                case 6:
                    b = b[2];
                    if (b == String) { this.serializeString(a); break }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            b = 0;
                            this.buf.b += "a";
                            for (var c = a.length, d = 0; d < c;) { var e = d++;
                                null == a[e] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[e])) } 0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                            this.buf.b +=
                                "h";
                            break;
                        case Da:
                            this.buf.b += "l";
                            a = a.h;
                            for (b = null; null != a;) b = a[0], a = a[1], this.serialize(b);
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(a.getTime());
                            break;
                        case O:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(null != Ea[c] ? a.getReserved(c) : a.h[c]);
                            this.buf.b += "h";
                            break;
                        case rb:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.h[c]);
                            this.buf.b +=
                                "h";
                            break;
                        case Zb:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c = b.next(), d = P.field(c, "__id__"), P.deleteField(c, "__id__"), this.serialize(c), c.__id__ = d, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case Qb:
                            d = 0;
                            e = a.length - 2;
                            b = new eb;
                            for (c = jc.BASE64; d < e;) { var f = a.get(d++),
                                    k = a.get(d++),
                                    p = a.get(d++);
                                b.add(c.charAt(f >> 2));
                                b.add(c.charAt((f << 4 | k >> 4) & 63));
                                b.add(c.charAt((k << 2 | p >> 6) & 63));
                                b.add(c.charAt(p & 63)) } d == e ? (e = a.get(d++), a = a.get(d++), b.add(c.charAt(e >> 2)), b.add(c.charAt((e << 4 | a >> 4) & 63)), b.add(c.charAt(a <<
                                2 & 63))) : d == e + 1 && (a = a.get(d++), b.add(c.charAt(a >> 2)), b.add(c.charAt(a << 4 & 63)));
                            a = b.b;
                            this.buf.b += "s";
                            this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                            this.buf.b += ":";
                            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(da.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(da.getClassName(b)), this.useCache &&
                                this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (Z.__instanceof(a, Bj)) a = da.getClassName(a), this.buf.b += "A", this.serializeString(a);
                    else if (Z.__instanceof(a, Cj)) this.buf.b += "B", this.serializeString(da.getEnumName(a));
                    else { if (this.useCache && this.serializeRef(a)) break;
                        this.buf.b += "o";
                        this.serializeFields(a) }
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) { if (this.serializeRef(a)) break;
                        this.cache.pop() } this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(da.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += u.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += u.string(b - 2);
                    for (c = 2; c < b;) d = c++, this.serialize(a[d]);
                    this.useCache && this.cache.push(a);
                    break;
                case 5:
                    throw new s("Cannot serialize function");
                default:
                    throw new s("Cannot serialize " + u.string(a));
            }
        },
        __class__: jc
    };
    var cb = function(a) { this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = cb.DEFAULT_RESOLVER;
        null == a && (a = da, cb.DEFAULT_RESOLVER = a);
        this.setResolver(a) };
    g["haxe.Unserializer"] = cb;
    cb.__name__ = ["haxe", "Unserializer"];
    cb.initCodes = function() { for (var a = [], b = 0, c = cb.BASE64.length; b < c;) { var d = b++;
            a[cb.BASE64.charCodeAt(d)] = d } return a };
    cb.run = function(a) { return (new cb(a)).unserialize() };
    cb.prototype = {
        setResolver: function(a) { this.resolver = null == a ? { resolveClass: function(a) { return null }, resolveEnum: function(a) { return null } } : a },
        get: function(a) { return this.buf.charCodeAt(a) },
        readDigits: function() {
            for (var a = 0, b = !1, c = this.pos;;) {
                var d = this.buf.charCodeAt(this.pos);
                if (d != d) break;
                if (45 == d) { if (this.pos != c) break;
                    b = !0 } else { if (48 > d || 57 < d) break;
                    a = 10 * a + (d - 48) } this.pos++
            }
            b && (a *= -1);
            return a
        },
        readFloat: function() { for (var a = this.pos;;) { var b = this.buf.charCodeAt(this.pos); if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                else break } return u.parseFloat(D.substr(this.buf, a, this.pos - a)) },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >= this.length) throw new s("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw new s("Invalid object key");
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) { if (58 != this.get(this.pos++)) throw new s("Invalid enum format"); var c = this.readDigits(); if (0 == c) return da.createEnum(a, b); for (var d = []; 0 < c--;) d.push(this.unserialize()); return da.createEnum(a, b, d) },
        unserialize: function() {
            switch (this.get(this.pos++)) {
                case 110:
                    return null;
                case 116:
                    return !0;
                case 102:
                    return !1;
                case 122:
                    return 0;
                case 105:
                    return this.readDigits();
                case 100:
                    return this.readFloat();
                case 121:
                    var a = this.readDigits();
                    if (58 !=
                        this.get(this.pos++) || this.length - this.pos < a) throw new s("Invalid string length");
                    var b = D.substr(this.buf, this.pos, a);
                    this.pos += a;
                    b = decodeURIComponent(b.split("+").join(" "));
                    this.scache.push(b);
                    return b;
                case 107:
                    return NaN;
                case 109:
                    return -Infinity;
                case 112:
                    return Infinity;
                case 97:
                    a = [];
                    for (this.cache.push(a);;) { b = this.buf.charCodeAt(this.pos); if (104 == b) { this.pos++; break } 117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize()) }
                    return a;
                case 111:
                    return a = {}, this.cache.push(a),
                        this.unserializeObject(a), a;
                case 114:
                    a = this.readDigits();
                    if (0 > a || a >= this.cache.length) throw new s("Invalid reference");
                    return this.cache[a];
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw new s("Invalid string reference");
                    return this.scache[a];
                case 120:
                    throw new s(this.unserialize());
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new s("Class not found " + a);
                    a = da.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new s("Enum not found " + a);
                    a = this.unserializeEnum(b, this.unserialize());
                    this.cache.push(a);
                    return a;
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new s("Enum not found " + a);
                    this.pos++;
                    var c = this.readDigits(),
                        d = da.getEnumConstructs(b)[c];
                    if (null == d) throw new s("Unknown enum index " + a + "@" + c);
                    a = this.unserializeEnum(b, d);
                    this.cache.push(a);
                    return a;
                case 108:
                    a = new Da;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 98:
                    a = new O;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 113:
                    a = new rb;
                    this.cache.push(a);
                    for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()), b = this.get(this.pos++);
                    if (104 != b) throw new s("Invalid IntMap format");
                    return a;
                case 77:
                    a = new Zb;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 118:
                    return 48 <= this.buf.charCodeAt(this.pos) && 57 >= this.buf.charCodeAt(this.pos) && 48 <= this.buf.charCodeAt(this.pos + 1) && 57 >= this.buf.charCodeAt(this.pos + 1) && 48 <= this.buf.charCodeAt(this.pos + 2) && 57 >= this.buf.charCodeAt(this.pos + 2) && 48 <= this.buf.charCodeAt(this.pos + 3) && 57 >= this.buf.charCodeAt(this.pos + 3) && 45 == this.buf.charCodeAt(this.pos + 4) ? (a = D.substr(this.buf, this.pos, 19), a = D.strDate(a), this.pos += 19) : (a = this.readFloat(), b = new Date, b.setTime(a), a = b), this.cache.push(a), a;
                case 115:
                    a = this.readDigits();
                    d = this.buf;
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw new s("Invalid bytes length");
                    var e = cb.CODES;
                    null == e && (e = cb.initCodes(), cb.CODES = e);
                    for (var f = this.pos, k = a & 3, p = f + (a - k), b = Qb.alloc(3 * (a >> 2) + (2 <= k ? k - 1 : 0)), c = 0; f < p;) { var g = e[I.fastCodeAt(d, f++)],
                            h = e[I.fastCodeAt(d, f++)];
                        b.set(c++, g << 2 | h >> 4);
                        g = e[I.fastCodeAt(d, f++)];
                        b.set(c++, h << 4 | g >> 2);
                        h = e[I.fastCodeAt(d, f++)];
                        b.set(c++, g << 6 | h) } 2 <= k && (h = e[I.fastCodeAt(d, f++)], p = e[I.fastCodeAt(d, f++)], b.set(c++, h << 2 | p >> 4), 3 == k && (d = e[I.fastCodeAt(d, f++)],
                        b.set(c++, p << 4 | d >> 2)));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new s("Class not found " + a);
                    a = da.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.get(this.pos++)) throw new s("Invalid custom data");
                    return a;
                case 65:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new s("Class not found " + a);
                    return b;
                case 66:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new s("Enum not found " +
                        a);
                    return b
            }
            this.pos--;
            throw new s("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
        },
        __class__: cb
    };
    var Qb = function(a) { this.length = a.byteLength;
        this.b = new Od(a);
        this.b.bufferValue = a;
        a.hxBytes = this;
        a.bytes = this.b };
    g["haxe.io.Bytes"] = Qb;
    Qb.__name__ = ["haxe", "io", "Bytes"];
    Qb.alloc = function(a) { return new Qb(new rj(a)) };
    Qb.ofString = function(a) {
        for (var b = [], c = 0; c < a.length;) {
            var d = I.fastCodeAt(a, c++);
            55296 <= d && 56319 >= d && (d = d - 55232 << 10 | I.fastCodeAt(a, c++) & 1023);
            127 >= d ? b.push(d) : (2047 >= d ?
                b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18), b.push(128 | d >> 12 & 63)), b.push(128 | d >> 6 & 63)), b.push(128 | d & 63))
        }
        return new Qb((new Od(b)).buffer)
    };
    Qb.prototype = {
        get: function(a) { return this.b[a] },
        set: function(a, b) { this.b[a] = b & 255 },
        getString: function(a, b) {
            if (0 > a || 0 > b || a + b > this.length) throw new s(gb.OutsideBounds);
            for (var c = "", d = this.b, e = String.fromCharCode, f = a, k = a + b; f < k;) {
                var p = d[f++];
                if (128 > p) { if (0 == p) break;
                    c += e(p) } else if (224 > p) c += e((p & 63) << 6 | d[f++] & 127);
                else if (240 > p) var g = d[f++],
                    c =
                    c + e((p & 31) << 12 | (g & 127) << 6 | d[f++] & 127);
                else var g = d[f++],
                    h = d[f++],
                    p = (p & 15) << 18 | (g & 127) << 12 | (h & 127) << 6 | d[f++] & 127,
                    c = c + e((p >> 10) + 55232),
                    c = c + e(p & 1023 | 56320)
            }
            return c
        },
        __class__: Qb
    };
    var bd = function() {};
    g["haxe.crypto.Base64"] = bd;
    bd.__name__ = ["haxe", "crypto", "Base64"];
    bd.decode = function(a, b) { null == b && (b = !0); if (b)
            for (; 61 == D.cca(a, a.length - 1);) a = D.substr(a, 0, -1); return (new pi(bd.BYTES)).decodeBytes(Qb.ofString(a)) };
    var pi = function(a) {
        for (var b = a.length, c = 1; b > 1 << c;) c++;
        if (8 < c || b != 1 << c) throw new s("BaseCode : base length must be a power of two.");
        this.base = a;
        this.nbits = c
    };
    g["haxe.crypto.BaseCode"] = pi;
    pi.__name__ = ["haxe", "crypto", "BaseCode"];
    pi.prototype = {
        initTable: function() { for (var a = [], b = 0; 256 > b;) { var c = b++;
                a[c] = -1 } b = 0; for (c = this.base.length; b < c;) { var d = b++;
                a[this.base.b[d]] = d } this.tbl = a },
        decodeBytes: function(a) {
            var b = this.nbits;
            null == this.tbl && this.initTable();
            for (var c = this.tbl, d = a.length * b >> 3, e = Qb.alloc(d), f = 0, k = 0, p = 0, g = 0; g < d;) {
                for (; 8 > k;) { var k = k + b,
                        f = f << b,
                        h = c[a.get(p++)]; if (-1 == h) throw new s("BaseCode : invalid encoded char");
                    f |= h } k -=
                    8;
                e.set(g++, f >> k & 255)
            }
            return e
        },
        __class__: pi
    };
    var rb = function() { this.h = {} };
    g["haxe.ds.IntMap"] = rb;
    rb.__name__ = ["haxe", "ds", "IntMap"];
    rb.__interfaces__ = [Nd];
    rb.prototype = { set: function(a, b) { this.h[a] = b }, get: function(a) { return this.h[a] }, remove: function(a) { if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a]; return !0 }, keys: function() { var a = [],
                b; for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0); return D.iter(a) }, __class__: rb };
    var Zb = function() { this.h = {};
        this.h.__keys__ = {} };
    g["haxe.ds.ObjectMap"] =
        Zb;
    Zb.__name__ = ["haxe", "ds", "ObjectMap"];
    Zb.__interfaces__ = [Nd];
    Zb.prototype = {
        set: function(a, b) { var c = a.__id__ || (a.__id__ = ++Zb.count);
            this.h[c] = b;
            this.h.__keys__[c] = a },
        get: function(a) { return this.h[a.__id__] },
        remove: function(a) { a = a.__id__; if (null == this.h.__keys__[a]) return !1;
            delete this.h[a];
            delete this.h.__keys__[a]; return !0 },
        keys: function() { var a = [],
                b; for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]); return D.iter(a) },
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() { return this.it.hasNext() },
                next: function() { var a = this.it.next(); return this.ref[a.__id__] }
            }
        },
        __class__: Zb
    };
    var pf = function(a, b) { this.map = a;
        this.keys = b;
        this.index = 0;
        this.count = b.length };
    g["haxe.ds._StringMap.StringMapIterator"] = pf;
    pf.__name__ = ["haxe", "ds", "_StringMap", "StringMapIterator"];
    pf.prototype = { hasNext: function() { return this.index < this.count }, next: function() { return this.map.get(this.keys[this.index++]) }, __class__: pf };
    var O = function() { this.h = {} };
    g["haxe.ds.StringMap"] = O;
    O.__name__ = ["haxe", "ds", "StringMap"];
    O.__interfaces__ = [Nd];
    O.prototype = {
        set: function(a, b) { null != Ea[a] ? this.setReserved(a, b) : this.h[a] = b },
        get: function(a) { return null != Ea[a] ? this.getReserved(a) : this.h[a] },
        exists: function(a) { return null != Ea[a] ? this.existsReserved(a) : this.h.hasOwnProperty(a) },
        setReserved: function(a, b) { null == this.rh && (this.rh = {});
            this.rh["$" + a] = b },
        getReserved: function(a) { return null == this.rh ? null : this.rh["$" + a] },
        existsReserved: function(a) { return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + a) },
        remove: function(a) {
            if (null !=
                Ea[a]) { a = "$" + a; if (null == this.rh || !this.rh.hasOwnProperty(a)) return !1;
                delete this.rh[a] } else { if (!this.h.hasOwnProperty(a)) return !1;
                delete this.h[a] }
            return !0
        },
        keys: function() { var a = this.arrayKeys(); return D.iter(a) },
        arrayKeys: function() { var a = [],
                b; for (b in this.h) this.h.hasOwnProperty(b) && a.push(b); if (null != this.rh)
                for (b in this.rh) 36 == b.charCodeAt(0) && a.push(b.substr(1)); return a },
        iterator: function() { return new pf(this, this.arrayKeys()) },
        __class__: O
    };
    var gb = g["haxe.io.Error"] = {
        __ename__: ["haxe", "io",
            "Error"
        ],
        __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
    };
    gb.Blocked = ["Blocked", 0];
    gb.Blocked.toString = l;
    gb.Blocked.__enum__ = gb;
    gb.Overflow = ["Overflow", 1];
    gb.Overflow.toString = l;
    gb.Overflow.__enum__ = gb;
    gb.OutsideBounds = ["OutsideBounds", 2];
    gb.OutsideBounds.toString = l;
    gb.OutsideBounds.__enum__ = gb;
    gb.Custom = function(a) { a = ["Custom", 3, a];
        a.__enum__ = gb;
        a.toString = l; return a };
    var $b = function() {};
    g["haxe.io.FPHelper"] = $b;
    $b.__name__ = ["haxe", "io", "FPHelper"];
    $b.i32ToFloat = function(a) {
        var b =
            a >>> 23 & 255,
            c = a & 8388607;
        return 0 == c && 0 == b ? 0 : (1 - (a >>> 31 << 1)) * (1 + Math.pow(2, -23) * c) * Math.pow(2, b - 127)
    };
    $b.floatToI32 = function(a) { if (0 == a) return 0; var b;
        b = 0 > a ? -a : a; var c = Math.floor(Math.log(b) / 0.6931471805599453); - 127 > c ? c = -127 : 128 < c && (c = 128);
        b = Math.round(8388608 * (b / Math.pow(2, c) - 1)) & 8388607; return (0 > a ? -2147483648 : 0) | c + 127 << 23 | b };
    $b.i64ToDouble = function(a, b) {
        var c = (b >> 20 & 2047) - 1023,
            d = 4294967296 * (b & 1048575) + 2147483648 * (a >>> 31) + (a & 2147483647);
        return 0 == d && -1023 == c ? 0 : (1 - (b >>> 31 << 1)) * (1 + Math.pow(2, -52) * d) *
            Math.pow(2, c)
    };
    $b.doubleToI64 = function(a) { var b = $b.i64tmp; if (0 == a) b.low = 0, b.high = 0;
        else { var c;
            c = 0 > a ? -a : a; var d = Math.floor(Math.log(c) / 0.6931471805599453);
            c = 4503599627370496 * (c / Math.pow(2, d) - 1);
            c = Math.round(c);
            b.low = c | 0;
            b.high = (0 > a ? -2147483648 : 0) | d + 1023 << 20 | c / 4294967296 | 0 } return b };
    var xa = g["haxe.rtti.CType"] = { __ename__: ["haxe", "rtti", "CType"], __constructs__: "CUnknown CEnum CClass CTypedef CFunction CAnonymous CDynamic CAbstract".split(" ") };
    xa.CUnknown = ["CUnknown", 0];
    xa.CUnknown.toString = l;
    xa.CUnknown.__enum__ =
        xa;
    xa.CEnum = function(a, b) { var c = ["CEnum", 1, a, b];
        c.__enum__ = xa;
        c.toString = l; return c };
    xa.CClass = function(a, b) { var c = ["CClass", 2, a, b];
        c.__enum__ = xa;
        c.toString = l; return c };
    xa.CTypedef = function(a, b) { var c = ["CTypedef", 3, a, b];
        c.__enum__ = xa;
        c.toString = l; return c };
    xa.CFunction = function(a, b) { var c = ["CFunction", 4, a, b];
        c.__enum__ = xa;
        c.toString = l; return c };
    xa.CAnonymous = function(a) { a = ["CAnonymous", 5, a];
        a.__enum__ = xa;
        a.toString = l; return a };
    xa.CDynamic = function(a) {
        a = ["CDynamic", 6, a];
        a.__enum__ = xa;
        a.toString = l;
        return a
    };
    xa.CAbstract = function(a, b) { var c = ["CAbstract", 7, a, b];
        c.__enum__ = xa;
        c.toString = l; return c };
    var ra = g["haxe.rtti.Rights"] = { __ename__: ["haxe", "rtti", "Rights"], __constructs__: "RNormal RNo RCall RMethod RDynamic RInline".split(" ") };
    ra.RNormal = ["RNormal", 0];
    ra.RNormal.toString = l;
    ra.RNormal.__enum__ = ra;
    ra.RNo = ["RNo", 1];
    ra.RNo.toString = l;
    ra.RNo.__enum__ = ra;
    ra.RCall = function(a) { a = ["RCall", 2, a];
        a.__enum__ = ra;
        a.toString = l; return a };
    ra.RMethod = ["RMethod", 3];
    ra.RMethod.toString = l;
    ra.RMethod.__enum__ =
        ra;
    ra.RDynamic = ["RDynamic", 4];
    ra.RDynamic.toString = l;
    ra.RDynamic.__enum__ = ra;
    ra.RInline = ["RInline", 5];
    ra.RInline.toString = l;
    ra.RInline.__enum__ = ra;
    var Eb = g["haxe.rtti.TypeTree"] = { __ename__: ["haxe", "rtti", "TypeTree"], __constructs__: ["TPackage", "TClassdecl", "TEnumdecl", "TTypedecl", "TAbstractdecl"] };
    Eb.TPackage = function(a, b, c) { a = ["TPackage", 0, a, b, c];
        a.__enum__ = Eb;
        a.toString = l; return a };
    Eb.TClassdecl = function(a) { a = ["TClassdecl", 1, a];
        a.__enum__ = Eb;
        a.toString = l; return a };
    Eb.TEnumdecl = function(a) {
        a = ["TEnumdecl",
            2, a
        ];
        a.__enum__ = Eb;
        a.toString = l;
        return a
    };
    Eb.TTypedecl = function(a) { a = ["TTypedecl", 3, a];
        a.__enum__ = Eb;
        a.toString = l; return a };
    Eb.TAbstractdecl = function(a) { a = ["TAbstractdecl", 4, a];
        a.__enum__ = Eb;
        a.toString = l; return a };
    var qf = function() {};
    g["haxe.rtti.Meta"] = qf;
    qf.__name__ = ["haxe", "rtti", "Meta"];
    qf.getType = function(a) { a = qf.getMeta(a); return null == a || null == a.obj ? {} : a.obj };
    qf.getMeta = function(a) { return a.__meta__ };
    var qi = function() { this.root = [] };
    g["haxe.rtti.XmlParser"] = qi;
    qi.__name__ = ["haxe", "rtti", "XmlParser"];
    qi.prototype = {
        mkPath: function(a) { return a },
        mkTypeParams: function(a) { a = a.split(":"); return "" == a[0] ? [] : a },
        mkRights: function(a) { switch (a) {
                case "null":
                    return ra.RNo;
                case "method":
                    return ra.RMethod;
                case "dynamic":
                    return ra.RDynamic;
                case "inline":
                    return ra.RInline;
                default:
                    return ra.RCall(a) } },
        xerror: function(a) { throw new s("Invalid " + a.get_name()); },
        processElement: function(a) {
            a = new Fb(a);
            switch (a.get_name()) {
                case "class":
                    return Eb.TClassdecl(this.xclass(a));
                case "enum":
                    return Eb.TEnumdecl(this.xenum(a));
                case "typedef":
                    return Eb.TTypedecl(this.xtypedef(a));
                case "abstract":
                    return Eb.TAbstractdecl(this.xabstract(a));
                default:
                    return this.xerror(a)
            }
        },
        xmeta: function(a) { var b = []; for (a = a.nodes.resolve("m").iterator(); null != a.head;) { var c;
                a.val = a.head[0];
                a.head = a.head[1];
                c = a.val; for (var d = [], e = c.nodes.resolve("e").iterator(); null != e.head;) e.val = e.head[0], e.head = e.head[1], d.push(e.val.get_innerHTML());
                b.push({ name: c.att.resolve("n"), params: d }) } return b },
        xoverloads: function(a) {
            var b = new Da;
            for (a = a.get_elements(); a.hasNext();) {
                var c =
                    a.next();
                b.add(this.xclassfield(c))
            }
            return b
        },
        xpath: function(a) { var b = this.mkPath(a.att.resolve("path")),
                c = new Da; for (a = a.get_elements(); a.hasNext();) { var d = a.next();
                c.add(this.xtype(d)) } return { path: b, params: c } },
        xclass: function(a) {
            for (var b = null, c = null, d = null, e = new Da, f = new Da, k = new Da, p = [], g = a.get_elements(); g.hasNext();) {
                var h = g.next();
                switch (h.get_name()) {
                    case "haxe_doc":
                        c = h.get_innerData();
                        break;
                    case "extends":
                        b = this.xpath(h);
                        break;
                    case "implements":
                        e.add(this.xpath(h));
                        break;
                    case "haxe_dynamic":
                        d =
                            this.xtype(new Fb(h.x.firstElement()));
                        break;
                    case "meta":
                        p = this.xmeta(h);
                        break;
                    default:
                        h.x.exists("static") ? k.add(this.xclassfield(h)) : f.add(this.xclassfield(h))
                }
            }
            return {
                file: a.has.resolve("file") ? a.att.resolve("file") : null,
                path: this.mkPath(a.att.resolve("path")),
                module: a.has.resolve("module") ? this.mkPath(a.att.resolve("module")) : null,
                doc: c,
                isPrivate: a.x.exists("private"),
                isExtern: a.x.exists("extern"),
                isInterface: a.x.exists("interface"),
                params: this.mkTypeParams(a.att.resolve("params")),
                superClass: b,
                interfaces: e,
                fields: f,
                statics: k,
                tdynamic: d,
                platforms: this.defplat(),
                meta: p
            }
        },
        xclassfield: function(a, b) {
            null == b && (b = !1);
            for (var c = a.get_elements(), d = this.xtype(c.next()), e = null, f = [], k = null; c.hasNext();) { var g = c.next(); switch (g.get_name()) {
                    case "haxe_doc":
                        e = g.get_innerData(); break;
                    case "meta":
                        f = this.xmeta(g); break;
                    case "overloads":
                        k = this.xoverloads(g); break;
                    default:
                        this.xerror(g) } }
            return {
                name: a.get_name(),
                type: d,
                isPublic: a.x.exists("public") || b,
                isOverride: a.x.exists("override"),
                line: a.has.resolve("line") ?
                    u.parseInt(a.att.resolve("line")) : null,
                doc: e,
                get: a.has.resolve("get") ? this.mkRights(a.att.resolve("get")) : ra.RNormal,
                set: a.has.resolve("set") ? this.mkRights(a.att.resolve("set")) : ra.RNormal,
                params: a.has.resolve("params") ? this.mkTypeParams(a.att.resolve("params")) : [],
                platforms: this.defplat(),
                meta: f,
                overloads: k,
                expr: a.has.resolve("expr") ? a.att.resolve("expr") : null
            }
        },
        xenum: function(a) {
            for (var b = new Da, c = null, d = [], e = a.get_elements(); e.hasNext();) {
                var f = e.next();
                "haxe_doc" == f.get_name() ? c = f.get_innerData() :
                    "meta" == f.get_name() ? d = this.xmeta(f) : b.add(this.xenumfield(f))
            }
            return { file: a.has.resolve("file") ? a.att.resolve("file") : null, path: this.mkPath(a.att.resolve("path")), module: a.has.resolve("module") ? this.mkPath(a.att.resolve("module")) : null, doc: c, isPrivate: a.x.exists("private"), isExtern: a.x.exists("extern"), params: this.mkTypeParams(a.att.resolve("params")), constructors: b, platforms: this.defplat(), meta: d }
        },
        xenumfield: function(a) {
            var b = null,
                c = a.x.elementsNamed("haxe_doc").next(),
                d;
            d = a.hasNode.resolve("meta") ?
                this.xmeta(a.node.resolve("meta")) : [];
            if (a.has.resolve("a"))
                for (var e = a.att.resolve("a").split(":"), f = a.get_elements(), b = new Da, k = 0; k < e.length;) { var g = e[k];++k; var h = !1; "?" == g.charAt(0) && (h = !0, g = D.substr(g, 1, null));
                    b.add({ name: g, opt: h, t: this.xtype(f.next()) }) }
            return { name: a.get_name(), args: b, doc: null == c ? null : (new Fb(c)).get_innerData(), meta: d, platforms: this.defplat() }
        },
        xabstract: function(a) {
            for (var b = null, c = null, d = null, e = [], f = [], k = [], g = a.get_elements(); g.hasNext();) {
                var h = g.next();
                switch (h.get_name()) {
                    case "haxe_doc":
                        b =
                            h.get_innerData();
                        break;
                    case "meta":
                        e = this.xmeta(h);
                        break;
                    case "to":
                        for (h = h.get_elements(); h.hasNext();) { var l = h.next();
                            f.push({ t: this.xtype(new Fb(l.x.firstElement())), field: l.has.resolve("field") ? l.att.resolve("field") : null }) }
                        break;
                    case "from":
                        for (h = h.get_elements(); h.hasNext();) l = h.next(), k.push({ t: this.xtype(new Fb(l.x.firstElement())), field: l.has.resolve("field") ? l.att.resolve("field") : null });
                        break;
                    case "impl":
                        c = this.xclass(h.node.resolve("class"));
                        break;
                    case "this":
                        d = this.xtype(new Fb(h.x.firstElement()));
                        break;
                    default:
                        this.xerror(h)
                }
            }
            return { file: a.has.resolve("file") ? a.att.resolve("file") : null, path: this.mkPath(a.att.resolve("path")), module: a.has.resolve("module") ? this.mkPath(a.att.resolve("module")) : null, doc: b, isPrivate: a.x.exists("private"), params: this.mkTypeParams(a.att.resolve("params")), platforms: this.defplat(), meta: e, athis: d, to: f, from: k, impl: c }
        },
        xtypedef: function(a) {
            for (var b = null, c = null, d = [], e = a.get_elements(); e.hasNext();) {
                var f = e.next();
                "haxe_doc" == f.get_name() ? b = f.get_innerData() : "meta" ==
                    f.get_name() ? d = this.xmeta(f) : c = this.xtype(f)
            }
            e = new O;
            null != this.curplatform && e.set(this.curplatform, c);
            return { file: a.has.resolve("file") ? a.att.resolve("file") : null, path: this.mkPath(a.att.resolve("path")), module: a.has.resolve("module") ? this.mkPath(a.att.resolve("module")) : null, doc: b, isPrivate: a.x.exists("private"), params: this.mkTypeParams(a.att.resolve("params")), type: c, types: e, platforms: this.defplat(), meta: d }
        },
        xtype: function(a) {
            switch (a.get_name()) {
                case "unknown":
                    return xa.CUnknown;
                case "e":
                    return xa.CEnum(this.mkPath(a.att.resolve("path")),
                        this.xtypeparams(a));
                case "c":
                    return xa.CClass(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "t":
                    return xa.CTypedef(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "x":
                    return xa.CAbstract(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "f":
                    var b = new Da,
                        c = a.att.resolve("a").split(":"),
                        c = D.iter(c),
                        d;
                    a.has.resolve("v") ? (d = a.att.resolve("v").split(":"), d = D.iter(d)) : d = null;
                    for (a = a.get_elements(); a.hasNext();) {
                        var e = a.next(),
                            f = !1,
                            k = c.next();
                        null == k && (k = "");
                        "?" ==
                        k.charAt(0) && (f = !0, k = D.substr(k, 1, null));
                        var g;
                        g = null == d ? null : d.next();
                        b.add({ name: k, opt: f, t: this.xtype(e), value: "" == g ? null : g })
                    }
                    c = b.last();
                    b.remove(c);
                    return xa.CFunction(b, c.t);
                case "a":
                    b = new Da;
                    for (c = a.get_elements(); c.hasNext();) d = c.next(), d = this.xclassfield(d, !0), d.platforms = new Da, b.add(d);
                    return xa.CAnonymous(b);
                case "d":
                    return b = null, c = a.x.firstElement(), null != c && (b = this.xtype(new Fb(c))), xa.CDynamic(b);
                default:
                    return this.xerror(a)
            }
        },
        xtypeparams: function(a) {
            var b = new Da;
            for (a = a.get_elements(); a.hasNext();) {
                var c =
                    a.next();
                b.add(this.xtype(c))
            }
            return b
        },
        defplat: function() { var a = new Da;
            null != this.curplatform && a.add(this.curplatform); return a },
        __class__: qi
    };
    var ri = function(a) { this.__x = a };
    g["haxe.xml._Fast.NodeAccess"] = ri;
    ri.__name__ = ["haxe", "xml", "_Fast", "NodeAccess"];
    ri.prototype = { resolve: function(a) { var b = this.__x.elementsNamed(a).next(); if (null == b) throw b = this.__x.nodeType == v.Document ? "Document" : this.__x.get_nodeName(), new s(b + " is missing element " + a); return new Fb(b) }, __class__: ri };
    var si = function(a) {
        this.__x =
            a
    };
    g["haxe.xml._Fast.AttribAccess"] = si;
    si.__name__ = ["haxe", "xml", "_Fast", "AttribAccess"];
    si.prototype = { resolve: function(a) { if (this.__x.nodeType == v.Document) throw new s("Cannot access document attribute " + a); var b = this.__x.get(a); if (null == b) throw new s(this.__x.get_nodeName() + " is missing attribute " + a); return b }, __class__: si };
    var ti = function(a) { this.__x = a };
    g["haxe.xml._Fast.HasAttribAccess"] = ti;
    ti.__name__ = ["haxe", "xml", "_Fast", "HasAttribAccess"];
    ti.prototype = {
        resolve: function(a) {
            if (this.__x.nodeType ==
                v.Document) throw new s("Cannot access document attribute " + a);
            return this.__x.exists(a)
        },
        __class__: ti
    };
    var ui = function(a) { this.__x = a };
    g["haxe.xml._Fast.HasNodeAccess"] = ui;
    ui.__name__ = ["haxe", "xml", "_Fast", "HasNodeAccess"];
    ui.prototype = { resolve: function(a) { return this.__x.elementsNamed(a).hasNext() }, __class__: ui };
    var vi = function(a) { this.__x = a };
    g["haxe.xml._Fast.NodeListAccess"] = vi;
    vi.__name__ = ["haxe", "xml", "_Fast", "NodeListAccess"];
    vi.prototype = {
        resolve: function(a) {
            var b = new Da;
            for (a = this.__x.elementsNamed(a); a.hasNext();) {
                var c =
                    a.next();
                b.add(new Fb(c))
            }
            return b
        },
        __class__: vi
    };
    var Fb = function(a) { if (a.nodeType != v.Document && a.nodeType != v.Element) throw new s("Invalid nodeType " + a.nodeType);
        this.x = a;
        this.node = new ri(a);
        this.nodes = new vi(a);
        this.att = new si(a);
        this.has = new ti(a);
        this.hasNode = new ui(a) };
    g["haxe.xml.Fast"] = Fb;
    Fb.__name__ = ["haxe", "xml", "Fast"];
    Fb.prototype = {
        get_name: function() { return this.x.nodeType == v.Document ? "Document" : this.x.get_nodeName() },
        get_innerData: function() {
            var a = this.x.iterator();
            if (!a.hasNext()) throw new s(this.get_name() +
                " does not have data");
            var b = a.next(),
                c = a.next();
            if (null != c) {
                if (b.nodeType == v.PCData && c.nodeType == v.CData && "" == I.trim(function(a) { if (b.nodeType == v.Document || b.nodeType == v.Element) throw new s("Bad node type, unexpected " + b.nodeType); return b.nodeValue }(this))) {
                    var d = a.next();
                    if (null == d || d.nodeType == v.PCData && "" == I.trim(function(a) { if (d.nodeType == v.Document || d.nodeType == v.Element) throw new s("Bad node type, unexpected " + d.nodeType); return d.nodeValue }(this)) && null == a.next()) {
                        if (c.nodeType == v.Document ||
                            c.nodeType == v.Element) throw new s("Bad node type, unexpected " + c.nodeType);
                        return c.nodeValue
                    }
                }
                throw new s(this.get_name() + " does not only have data");
            }
            if (b.nodeType != v.PCData && b.nodeType != v.CData) throw new s(this.get_name() + " does not have data");
            if (b.nodeType == v.Document || b.nodeType == v.Element) throw new s("Bad node type, unexpected " + b.nodeType);
            return b.nodeValue
        },
        get_innerHTML: function() { for (var a = new eb, b = this.x.iterator(); b.hasNext();) { var c = b.next();
                a.add($c.print(c)) } return a.b },
        get_elements: function() {
            var a =
                this.x.elements();
            return { hasNext: ha(a, a.hasNext), next: function() { var b = a.next(); return null == b ? null : new Fb(b) } }
        },
        __class__: Fb,
        __properties__: { get_elements: "get_elements", get_innerHTML: "get_innerHTML", get_innerData: "get_innerData", get_name: "get_name" }
    };
    var nc = function() {};
    g["haxe.xml.Parser"] = nc;
    nc.__name__ = ["haxe", "xml", "Parser"];
    nc.parse = function(a, b) { null == b && (b = !1); var c = v.createDocument();
        nc.doParse(a, b, 0, c); return c };
    nc.doParse = function(a, b, c, d) {
        null == c && (c = 0);
        for (var e = null, f = 1, k = 1, g = null, h =
                0, l = 0, n = 0, m = a.charCodeAt(c), q = new eb, t = 1, w = -1; m == m;) {
            switch (f) {
                case 0:
                    switch (m) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            f = k; continue }
                    break;
                case 1:
                    switch (m) {
                        case 60:
                            f = 0;
                            k = 2; break;
                        default:
                            h = c;
                            f = 13; continue }
                    break;
                case 13:
                    60 == m ? (q.addSub(a, h, c - h), k = v.createPCData(q.b), q = new eb, d.addChild(k), l++, f = 0, k = 2) : 38 == m && (q.addSub(a, h, c - h), f = 18, t = 13, h = c + 1);
                    break;
                case 17:
                    93 == m && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (m = v.createCData(D.substr(a, h, c - h)), d.addChild(m), l++, c += 2, f = 1);
                    break;
                case 2:
                    switch (m) {
                        case 33:
                            if (91 ==
                                a.charCodeAt(c + 1)) { c += 2; if ("CDATA[" != D.substr(a, c, 6).toUpperCase()) throw new s("Expected <![CDATA[");
                                c += 5;
                                f = 17 } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) { if ("OCTYPE" != D.substr(a, c + 2, 6).toUpperCase()) throw new s("Expected <!DOCTYPE");
                                c += 8;
                                f = 16 } else { if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw new s("Expected \x3c!--");
                                c += 2;
                                f = 15 } h = c + 1;
                            break;
                        case 63:
                            f = 14;
                            h = c;
                            break;
                        case 47:
                            if (null == d) throw new s("Expected node name");
                            h = c + 1;
                            f = 0;
                            k = 10;
                            break;
                        default:
                            f = 3;
                            h = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <=
                            m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (c == h) throw new s("Expected node name");
                        e = v.createElement(D.substr(a, h, c - h));
                        d.addChild(e);
                        l++;
                        f = 0;
                        k = 4; continue }
                    break;
                case 4:
                    switch (m) {
                        case 47:
                            f = 11; break;
                        case 62:
                            f = 9; break;
                        default:
                            f = 5;
                            h = c; continue }
                    break;
                case 5:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (h == c) throw new s("Expected attribute name");
                        g = D.substr(a, h, c - h); if (e.exists(g)) throw new s("Duplicate attribute");
                        f = 0;
                        k = 6; continue }
                    break;
                case 6:
                    switch (m) {
                        case 61:
                            f =
                                0;
                            k = 7;
                            break;
                        default:
                            throw new s("Expected =");
                    }
                    break;
                case 7:
                    switch (m) {
                        case 34:
                        case 39:
                            q = new eb;
                            f = 8;
                            h = c + 1;
                            w = m; break;
                        default:
                            throw new s('Expected "'); }
                    break;
                case 8:
                    switch (m) {
                        case 38:
                            q.addSub(a, h, c - h);
                            f = 18;
                            t = 8;
                            h = c + 1;
                            break;
                        case 62:
                            if (b) throw new s("Invalid unescaped " + String.fromCharCode(m) + " in attribute value");
                            m == w && (q.addSub(a, h, c - h), k = q.b, q = new eb, e.set(g, k), f = 0, k = 4);
                            break;
                        case 60:
                            if (b) throw new s("Invalid unescaped " + String.fromCharCode(m) + " in attribute value");
                            m == w && (q.addSub(a, h, c - h), k = q.b,
                                q = new eb, e.set(g, k), f = 0, k = 4);
                            break;
                        default:
                            m == w && (q.addSub(a, h, c - h), k = q.b, q = new eb, e.set(g, k), f = 0, k = 4)
                    }
                    break;
                case 9:
                    h = c = nc.doParse(a, b, c, e);
                    f = 1;
                    break;
                case 11:
                    switch (m) {
                        case 62:
                            f = 1; break;
                        default:
                            throw new s("Expected >"); }
                    break;
                case 12:
                    switch (m) {
                        case 62:
                            return 0 == l && d.addChild(v.createPCData("")), c;
                        default:
                            throw new s("Expected >"); }
                case 10:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) {
                        if (h == c) throw new s("Expected node name");
                        k = D.substr(a, h, c - h);
                        if (d.nodeType != v.Element) throw new s("Bad node type, expected Element but found " +
                            d.nodeType);
                        if (k != d.nodeName) throw new s("Expected </" + function(a) { if (d.nodeType != v.Element) throw "Bad node type, expected Element but found " + d.nodeType; return d.nodeName }(this) + ">");
                        f = 0;
                        k = 12;
                        continue
                    }
                    break;
                case 15:
                    45 == m && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (m = v.createComment(D.substr(a, h, c - h)), d.addChild(m), l++, c += 2, f = 1);
                    break;
                case 16:
                    91 == m ? n++ : 93 == m ? n-- : 62 == m && 0 == n && (m = v.createDocType(D.substr(a, h, c - h)), d.addChild(m), l++, f = 1);
                    break;
                case 14:
                    63 == m && 62 == a.charCodeAt(c + 1) && (c++, m = D.substr(a,
                        h + 1, c - h - 2), m = v.createProcessingInstruction(m), d.addChild(m), l++, f = 1);
                    break;
                case 18:
                    if (59 == m) { h = D.substr(a, h, c - h); if (35 == h.charCodeAt(0)) h = 120 == h.charCodeAt(1) ? u.parseInt("0" + D.substr(h, 1, h.length - 1)) : u.parseInt(D.substr(h, 1, h.length - 1)), q.b += String.fromCharCode(h);
                        else if (nc.escapes.exists(h)) q.add(nc.escapes.get(h));
                        else { if (b) throw new s("Undefined entity: " + h);
                            q.b += u.string("&" + h + ";") } h = c + 1;
                        f = t } else if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m) && 35 != m) {
                        if (b) throw new s("Invalid character in entity: " +
                            String.fromCharCode(m));
                        q.b += "&";
                        q.addSub(a, h, c - h);
                        c--;
                        h = c + 1;
                        f = t
                    }
            }
            m = I.fastCodeAt(a, ++c)
        }
        1 == f && (h = c, f = 13);
        if (13 == f) { if (c != h || 0 == l) q.addSub(a, h, c - h), a = v.createPCData(q.b), d.addChild(a), l++; return c }
        if (!b && 18 == f && 13 == t) return q.b += "&", q.addSub(a, h, c - h), a = v.createPCData(q.b), d.addChild(a), l++, c;
        throw new s("Unexpected end");
    };
    var $c = function(a) { this.output = new eb;
        this.pretty = a };
    g["haxe.xml.Printer"] = $c;
    $c.__name__ = ["haxe", "xml", "Printer"];
    $c.print = function(a, b) {
        null == b && (b = !1);
        var c = new $c(b);
        c.writeNode(a,
            "");
        return c.output.b
    };
    $c.prototype = {
        writeNode: function(a, b) {
            switch (a.nodeType) {
                case 2:
                    this.output.b += u.string(b + "<![CDATA[");
                    this.write(I.trim(function(b) { if (a.nodeType == v.Document || a.nodeType == v.Element) throw new s("Bad node type, unexpected " + a.nodeType); return a.nodeValue }(this)));
                    this.output.b += "]]\x3e";
                    this.pretty && (this.output.b += "");
                    break;
                case 3:
                    var c;
                    if (a.nodeType == v.Document || a.nodeType == v.Element) throw new s("Bad node type, unexpected " + a.nodeType);
                    c = a.nodeValue;
                    c = (new Ra("[\n\r\t]+", "g")).replace(c,
                        "");
                    this.output.b = null == b ? this.output.b + "null" : this.output.b + ("" + b);
                    this.write(I.trim("\x3c!--" + c + "--\x3e"));
                    this.pretty && (this.output.b += "");
                    break;
                case 6:
                    if (a.nodeType != v.Document && a.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + a.nodeType);
                    for (c = D.iter(a.children); c.hasNext();) { var d = c.next();
                        this.writeNode(d, b) }
                    break;
                case 0:
                    this.output.b += u.string(b + "<");
                    this.write(function(b) {
                        if (a.nodeType != v.Element) throw new s("Bad node type, expected Element but found " +
                            a.nodeType);
                        return a.nodeName
                    }(this));
                    for (c = a.attributes(); c.hasNext();) d = c.next(), this.output.b += u.string(" " + d + '="'), this.write(I.htmlEscape(a.get(d), !0)), this.output.b += '"';
                    if (this.hasChildren(a)) {
                        this.output.b += ">";
                        this.pretty && (this.output.b += "");
                        if (a.nodeType != v.Document && a.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + a.nodeType);
                        for (c = D.iter(a.children); c.hasNext();) d = c.next(), this.writeNode(d, this.pretty ? b + "\t" : b);
                        this.output.b += u.string(b + "</");
                        this.write(function(b) { if (a.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + a.nodeType); return a.nodeName }(this));
                        this.output.b += ">"
                    } else this.output.b += "/>";
                    this.pretty && (this.output.b += "");
                    break;
                case 1:
                    if (a.nodeType == v.Document || a.nodeType == v.Element) throw new s("Bad node type, unexpected " + a.nodeType);
                    c = a.nodeValue;
                    0 != c.length && (this.write(b + I.htmlEscape(c)), this.pretty && (this.output.b += ""));
                    break;
                case 5:
                    this.write("<?" + function(b) {
                        if (a.nodeType == v.Document || a.nodeType ==
                            v.Element) throw new s("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this) + "?>");
                    break;
                case 4:
                    this.write("<!DOCTYPE " + function(b) { if (a.nodeType == v.Document || a.nodeType == v.Element) throw new s("Bad node type, unexpected " + a.nodeType); return a.nodeValue }(this) + ">")
            }
        },
        write: function(a) { this.output.b = null == a ? this.output.b + "null" : this.output.b + ("" + a) },
        hasChildren: function(a) {
            if (a.nodeType != v.Document && a.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " +
                a.nodeType);
            for (a = D.iter(a.children); a.hasNext();) { var b = a.next(); switch (b.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (0 != I.ltrim(function(a) { if (b.nodeType == v.Document || b.nodeType == v.Element) throw new s("Bad node type, unexpected " + b.nodeType); return b.nodeValue }(this)).length) return !0 } }
            return !1
        },
        __class__: $c
    };
    var s = function(a) { Error.call(this);
        this.val = a;
        this.message = String(a);
        Error.captureStackTrace && Error.captureStackTrace(this, s) };
    g["js._Boot.HaxeError"] = s;
    s.__name__ = ["js", "_Boot", "HaxeError"];
    s.__super__ = Error;
    s.prototype = m(Error.prototype, { __class__: s });
    var Z = function() {};
    g["js.Boot"] = Z;
    Z.__name__ = ["js", "Boot"];
    Z.getClass = function(a) { if (a instanceof Array && null == a.__enum__) return Array; var b = a.__class__; if (null != b) return b;
        a = Z.__nativeClassName(a); return null != a ? Z.__resolveNativeClass(a) : null };
    Z.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        "function" == c && (a.__name__ || a.__ename__) && (c = "object");
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 ==
                            a.length) return a[0];
                        c = a[0] + "(";
                        b += "\t";
                        for (var d = 2, e = a.length; d < e;) var f = d++,
                            c = 2 != f ? c + ("," + Z.__string_rec(a[f], b)) : c + Z.__string_rec(a[f], b);
                        return c + ")"
                    }
                    c = a.length;
                    d = "[";
                    b += "\t";
                    for (e = 0; e < c;) f = e++, d += (0 < f ? "," : "") + Z.__string_rec(a[f], b);
                    return d + "]"
                }
                try { d = a.toString } catch (k) { return k instanceof s && (k = k.val), "???" }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                for (c in a) e && !a.hasOwnProperty(c) || "prototype" ==
                    c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + Z.__string_rec(a[c], b));
                b = b.substring(1);
                return d + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return String(a)
        }
    };
    Z.__interfLoop = function(a, b) { if (null == a) return !1; if (a == b) return !0; var c = a.__interfaces__; if (null != c)
            for (var d = 0, e = c.length; d < e;) { var f = d++,
                    f = c[f]; if (f == b || Z.__interfLoop(f, b)) return !0 }
        return Z.__interfLoop(a.__super__, b) };
    Z.__instanceof =
        function(a, b) {
            if (null == b) return !1;
            switch (b) {
                case Gj:
                    return (a | 0) === a;
                case Dj:
                    return "number" == typeof a;
                case Ej:
                    return "boolean" == typeof a;
                case String:
                    return "string" == typeof a;
                case Array:
                    return a instanceof Array && null == a.__enum__;
                case Hj:
                    return !0;
                default:
                    if (null != a)
                        if ("function" == typeof b) { if (a instanceof b || Z.__interfLoop(Z.getClass(a), b)) return !0 } else { if ("object" == typeof b && Z.__isNativeObj(b) && a instanceof b) return !0 }
                    else return !1;
                    return b == Bj && null != a.__name__ || b == Cj && null != a.__ename__ ? !0 : a.__enum__ ==
                        b
            }
        };
    Z.__cast = function(a, b) { if (Z.__instanceof(a, b)) return a; throw new s("Cannot cast " + u.string(a) + " to " + u.string(b)); };
    Z.__nativeClassName = function(a) { a = Z.__toStr.call(a).slice(8, -1); return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a };
    Z.__isNativeObj = function(a) { return null != Z.__nativeClassName(a) };
    Z.__resolveNativeClass = function(a) { return zj[a] };
    var of = function() {};
    g["js.Browser"] = of ; of .__name__ = ["js", "Browser"]; of .getLocalStorage = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            return a
        } catch (b) { return b instanceof s && (b = b.val), null }
    }; of .createXMLHttpRequest = function() { if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest; if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP"); throw new s("Unable to create XMLHttpRequest object."); };
    var sj = function() {};
    g["js.html._CanvasElement.CanvasUtil"] = sj;
    sj.__name__ = ["js", "html", "_CanvasElement", "CanvasUtil"];
    sj.getContextWebGL = function(a, b) {
        for (var c = 0, d = ["webgl", "experimental-webgl"]; c < d.length;) {
            var e =
                d[c];
            ++c;
            e = a.getContext(e, b);
            if (null != e) return e
        }
        return null
    };
    var ac = function(a) { if (a instanceof Array && null == a.__enum__) this.a = a, this.byteLength = a.length;
        else { this.a = []; for (var b = 0; b < a;) { var c = b++;
                this.a[c] = 0 } this.byteLength = a } };
    g["js.html.compat.ArrayBuffer"] = ac;
    ac.__name__ = ["js", "html", "compat", "ArrayBuffer"];
    ac.sliceImpl = function(a, b) { var c = new Od(this, a, null == b ? null : b - a),
            d = new rj(c.byteLength);
        (new Od(d)).set(c); return d };
    ac.prototype = { slice: function(a, b) { return new ac(this.a.slice(a, b)) }, __class__: ac };
    var tj = function(a, b, c) { this.buf = a;
        this.offset = null == b ? 0 : b;
        this.length = null == c ? a.byteLength - this.offset : c; if (0 > this.offset || 0 > this.length || this.offset + this.length > a.byteLength) throw new s(gb.OutsideBounds); };
    g["js.html.compat.DataView"] = tj;
    tj.__name__ = ["js", "html", "compat", "DataView"];
    tj.prototype = {
        getInt8: function(a) { a = this.buf.a[this.offset + a]; return 128 <= a ? a - 256 : a },
        getUint8: function(a) { return this.buf.a[this.offset + a] },
        getInt16: function(a, b) { var c = this.getUint16(a, b); return 32768 <= c ? c - 65536 : c },
        getUint16: function(a, b) { return b ? this.buf.a[this.offset + a] | this.buf.a[this.offset + a + 1] << 8 : this.buf.a[this.offset + a] << 8 | this.buf.a[this.offset + a + 1] },
        getInt32: function(a, b) { var c = this.offset + a,
                d = this.buf.a[c++],
                e = this.buf.a[c++],
                f = this.buf.a[c++],
                c = this.buf.a[c++]; return b ? d | e << 8 | f << 16 | c << 24 : c | f << 8 | e << 16 | d << 24 },
        getUint32: function(a, b) { var c = this.getInt32(a, b); return 0 > c ? c + 4294967296 : c },
        getFloat32: function(a, b) { return $b.i32ToFloat(this.getInt32(a, b)) },
        getFloat64: function(a, b) {
            var c = this.getInt32(a,
                    b),
                d = this.getInt32(a + 4, b);
            return $b.i64ToDouble(b ? c : d, b ? d : c)
        },
        setInt8: function(a, b) { this.buf.a[a + this.offset] = 0 > b ? b + 128 & 255 : b & 255 },
        setUint8: function(a, b) { this.buf.a[a + this.offset] = b & 255 },
        setInt16: function(a, b, c) { this.setUint16(a, 0 > b ? b + 65536 : b, c) },
        setUint16: function(a, b, c) { a += this.offset;
            c ? (this.buf.a[a] = b & 255, this.buf.a[a++] = b >> 8 & 255) : (this.buf.a[a++] = b >> 8 & 255, this.buf.a[a] = b & 255) },
        setInt32: function(a, b, c) { this.setUint32(a, b, c) },
        setUint32: function(a, b, c) {
            a += this.offset;
            c ? (this.buf.a[a++] = b & 255, this.buf.a[a++] =
                b >> 8 & 255, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >>> 24) : (this.buf.a[a++] = b >>> 24, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b & 255)
        },
        setFloat32: function(a, b, c) { this.setUint32(a, $b.floatToI32(b), c) },
        setFloat64: function(a, b, c) { b = $b.doubleToI64(b);
            c ? (this.setUint32(a, b.low), this.setUint32(a, b.high)) : (this.setUint32(a, b.high), this.setUint32(a, b.low)) },
        __class__: tj
    };
    var zc = function() {};
    g["js.html.compat.Uint8Array"] = zc;
    zc.__name__ = ["js", "html", "compat", "Uint8Array"];
    zc._new = function(a,
        b, c) { if ("number" == typeof a) { c = []; for (b = 0; b < a;) { var d = b++;
                c[d] = 0 } c.byteLength = c.length;
            c.byteOffset = 0;
            c.buffer = new ac(c) } else if (Z.__instanceof(a, ac)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
        else if (a instanceof Array && null == a.__enum__) c = a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new ac(c);
        else throw new s("TODO " + u.string(a));
        c.subarray = zc._subarray;
        c.set = zc._set; return c };
    zc._set = function(a, b) {
        if (Z.__instanceof(a.buffer,
                ac)) { if (a.byteLength + b > this.byteLength) throw new s("set() outside of range"); for (var c = 0, d = a.byteLength; c < d;) { var e = c++;
                this[e + b] = a[e] } } else if (a instanceof Array && null == a.__enum__) { if (a.length + b > this.byteLength) throw new s("set() outside of range");
            c = 0; for (d = a.length; c < d;) e = c++, this[e + b] = a[e] } else throw new s("TODO");
    };
    zc._subarray = function(a, b) { var c = zc._new(this.slice(a, b));
        c.byteOffset = a; return c };
    var Pd = function() {};
    g["kit.asset.AssetPack"] = Pd;
    Pd.__name__ = ["kit", "asset", "AssetPack"];
    Pd.__interfaces__ = [Sa];
    Pd.prototype = { __class__: Pd, __properties__: { get_manifest: "get_manifest" } };
    var Zc = function() { this.$wG = new O;
        this.$vG = [];
        this.localBase = this.remoteBase = null;
        n.call(this) };
    g["kit.Assets"] = Zc;
    Zc.__name__ = ["kit", "Assets"];
    Zc.__interfaces__ = [Pd];
    Zc.__super__ = n;
    Zc.prototype = m(n.prototype, {
        get_entitySlot: function() { return 2 },
        load: function(a) { var b = db.fromAssets(a);
            null != this.localBase && (b.$fI = this.localBase);
            null != this.remoteBase && (b.$gI = this.remoteBase); return this.loadManifest(b, a) },
        loadManifest: function(a,
            b) { var c = this; if (null != b) { var d = this.$wG.get(b); if (null == d) { var e = d = new wi;
                    this.$wG.set(b, e);
                    d.$BH = q.$GI.loadAssetPack(a).then(function(a) { c.$wG.get(b) == d && c.$vG.push(new rf(a)); return d.$xG = a }) } return d.$BH } return q.$GI.loadAssetPack(a).then(function(a) { c.addPack(a); return a }) },
        addPack: function(a) { this.$vG.push(new rf(a)); return this },
        removePackByName: function(a) {
            var b = this.$wG.get(a);
            if (null != b && (this.$wG.remove(a), null != b.$xG)) {
                a = 0;
                for (var c = this.$vG.length; a < c;) {
                    var d = a++;
                    if (this.$vG[d].$xG ==
                        b.$xG) { this.$vG.splice(d, 1); break }
                }
                b.$xG.dispose()
            }
        },
        isLoaded: function(a) { a = this.$wG.get(a); return null != a && null != a.$xG },
        getTexture: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$vG; c < d.length;) { var e = d[c];++c;
                e = e.$xG.getTexture(a, !1); if (null != e) return e } c = this.$uG(); return null != c ? c.getTexture(a, b) : null },
        getSound: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$vG; c < d.length;) { var e = d[c];++c;
                e = e.$xG.getSound(a, !1); if (null != e) return e } c = this.$uG(); return null != c ? c.getSound(a, b) : null },
        getFile: function(a,
            b) { null == b && (b = !0); for (var c = 0, d = this.$vG; c < d.length;) { var e = d[c];++c;
                e = e.$xG.getFile(a, !1); if (null != e) return e } c = this.$uG(); return null != c ? c.getFile(a, b) : null },
        getVectorFont: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$vG; c < d.length;) { var e = d[c];++c;
                e = e.$xG.getVectorFont(a, !1); if (null != e) return e } c = this.$uG(); return null != c ? c.getVectorFont(a, b) : null },
        getVideo: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this.$vG; c < d.length;) { var e = d[c];++c;
                e = e.$xG.getVideo(a, !1); if (null != e) return e } c = this.$uG();
            return null != c ? c.getVideo(a, b) : null
        },
        getFont: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$vG; c < d.length;) { var e = d[c];++c; var f = e.$yG.get(a); if (null != f) return f; if (null != e.$xG.getFile(a + ".fnt", !1)) return c = new Oc(this, a), e.$yG.set(a, c), c.disposeFiles() } e = this.$uG(); return null != e ? e.getFont(a, b) : null },
        getLibrary: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this.$vG; c < d.length;) {
                var e = d[c];
                ++c;
                var f = e.$$G.get(a);
                if (null != f) return f;
                if (null != e.$xG.getFile(a + "/library.json", !1)) return c = new cd(this,
                    a), e.$$G.set(a, c), c.disposeFiles()
            }
            e = this.$uG();
            return null != e ? e.getLibrary(a, b) : null
        },
        getScene: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$vG; c < d.length;) { var e = d[c];++c; var f = e.$_G.get(a); if (null != f) return f; if (null != e.$xG.getFile(a + ".scene", !1) || null != e.$xG.getFile(a + ".json", !1)) return c = new va(this, a), e.$_G.set(a, c), c.disposeFiles() } e = this.$uG(); return null != e ? e.getScene(a, b) : null },
        getTexturePacker: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this.$vG; c < d.length;) {
                var e = d[c];
                ++c;
                var f = e.$AH.get(a);
                if (null != f) return f;
                if (null != e.$xG.getFile(a + ".json", !1)) return c = new xi(this, a), e.$AH.set(a, c), c.disposeFiles()
            }
            e = this.$uG();
            return null != e ? e.getTexturePacker(a, b) : null
        },
        $uG: function() { return null == this.owner || null == this.owner.parent ? null : this.owner.parent._internal_getFromParents(2) },
        dispose: function() { n.prototype.dispose.call(this); var a = this.$vG;
            this.$vG = [];
            this.$wG = new O; for (var b = 0; b < a.length;) { var c = a[b];++b;
                c.$xG.dispose() } },
        get_manifest: function() { return null },
        __class__: Zc,
        __properties__: m(n.prototype.__properties__, { get_manifest: "get_manifest" })
    });
    var rf = function(a) { this.$AH = new O;
        this.$_G = new O;
        this.$$G = new O;
        this.$yG = new O;
        this.$xG = a };
    g.$CL = rf;
    rf.__name__ = ["$CL"];
    rf.prototype = { __class__: rf };
    var wi = function() {};
    g.$CM = wi;
    wi.__name__ = ["$CM"];
    wi.prototype = { __class__: wi };
    var Ce = function() { this.$CH = this.$DH = null };
    g.$CO = Ce;
    Ce.__name__ = ["$CO"];
    Ce.prototype = { $EH: function() { var a = this.$DH; if (null != a) { this.$DH = null; for (var b = 0; b < a.length;) { var c = a[b];++b;
                    c.dispose() } } this.$CH = null }, __class__: Ce };
    var yi = function() {};
    g["kit.MessageResult"] = yi;
    yi.__name__ = ["kit", "MessageResult"];
    yi.prototype = { __class__: yi };
    var F = function() { this.active = !0;
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this.$MH = {} };
    g["kit.Entity"] = F;
    F.__name__ = ["kit", "Entity"];
    F.__interfaces__ = [Sa];
    F.$NH = function(a) { for (var b = null; null != a;) b = a, a = a.next; return b };
    F.prototype = {
        add: function(a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_entitySlot(),
                c = this.$MH[b];
            null != c && this.remove(c);
            this.$MH[b] = a;
            b = null;
            for (c = this.firstComponent; null !=
                c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) { for (var b = null, c = this.firstComponent; null != c;) { var d = c.next; if (c == a) return null == b ? this.firstComponent = d : (b.owner = this, b.next = d), a = c.get_entitySlot(), delete this.$MH[a], 0 != (c.$B & 1) && (c.onStop(), c.$B &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = d } return !1 },
        getComponentBySlot: function(a) { return this.$MH[a] },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            b ? this.$IH(F.$NH(this.firstChild), a) : this.$JH(a);
            return this
        },
        removeChild: function(a) { for (var b = null, c = this.firstChild; null != c;) { if (c == a) { this.$HH(b);
                    c.parent = null;
                    c.next = null; break } b = c;
                c = c.next } },
        emitMessage: function(a, b) { for (var c = !1, d = this.firstComponent; null != d;) { var e = d.next;
                d.onMessage(a, b) && (c = !0);
                d = e } F.$OH.handled = c; return F.$OH },
        emitMessageToParents: function(a, b) { var c = !1,
                d = this;
            do { var e = d.parent;
                d.emitMessage(a, b).handled && (c = !0);
                d = e } while (null != d);
            F.$OH.handled = c; return F.$OH },
        moveToFront: function() { if (null != this.parent && null != this.next)
                for (var a = null, b = this.parent.firstChild; null != b;) { if (b == this) { this.parent.$HH(a);
                        this.parent.$IH(F.$NH(b), b);
                        b.next = null; break } a = b;
                    b = b.next } },
        disposeChildren: function() { for (; null != this.firstChild;) this.firstChild.dispose() },
        dispose: function() { for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren() },
        yieldForStart: function() {
            for (var a = this.firstComponent; null != a;) {
                var b =
                    a.next;
                0 == (a.$B & 1) && (a.$B |= 1, a.$A(), a.onStart());
                a = b
            }
            for (a = this.firstChild; null != a;) b = a.next, a.yieldForStart(), a = b
        },
        _internal_getFromParents: function(a, b) { var c = this;
            do { var d = c.$MH[a];
                null != b && (d = d instanceof b ? d : null); if (null != d) return d;
                c = c.parent } while (null != c); return null },
        _internal_getFromChildren: function(a, b) { var c = this.$MH[a];
            null != b && (c = c instanceof b ? c : null); if (null != c) return c; for (c = this.firstChild; null != c;) { var d = c._internal_getFromChildren(a, b); if (null != d) return d;
                c = c.next } return null },
        getSprite: function() { return this.$MH[3] },
        getAssetsFromParents: function() { return this._internal_getFromParents(2) },
        getDirectorFromParents: function() { return this._internal_getFromParents(8) },
        $HH: function(a) { null != a ? a.next = a.next.next : this.$KH() },
        $IH: function(a, b) { null != a ? (b.next = a.next, a.next = b) : this.$JH(b) },
        $JH: function(a) { a.next = this.firstChild;
            this.firstChild = a },
        $KH: function() { this.firstChild = this.firstChild.next },
        __class__: F
    };
    var zi = function() {};
    g.$CP = zi;
    zi.__name__ = ["$CP"];
    zi.prototype = { __class__: zi };
    var Rb = function() { this.$lH = !0 };
    g.$CQ = Rb;
    Rb.__name__ = ["$CQ"];
    Rb.__interfaces__ = [zi];
    Rb.$oH = function(a) { var b = of .getLocalStorage(); return null != b ? new sf(b, a) : new tf };
    Rb.prototype = {
        init: function() {
            var a = this;
            M.$lS();
            M.$mS();
            var b = null;
            try { b = window.flambe.canvas } catch (c) { c instanceof s && (c = c.val) } b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            M.$dS(b, "tap-highlight-color", "transparent");
            this.$XH = new dd(b);
            this.$VH = new Za;
            this.$UH = new uf(this.$VH, b);
            this.$WH = this.$TH(b);
            this.$PH = new Pc;
            this.$hH =
                b;
            this.$iH = b.parentElement;
            this.$iH.style.overflow = "hidden";
            this.$iH.style.position = "relative";
            M.$dS(this.$iH, "touch-action", "none");
            var d = 0,
                e = function(c) {
                    if (!(1E3 > c.timeStamp - d)) {
                        var e = b.getBoundingClientRect(),
                            f = a.$RH(c, e),
                            e = a.$SH(c, e);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a.$UH.$ON(f, e, c.button), b.focus());
                                break;
                            case "mousemove":
                                a.$UH.$SN(f, e);
                                break;
                            case "mouseup":
                                a.$UH.$PN(f, e, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a.$UH.$TN(f, e, "mousewheel" == c.type ?
                                    c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", e, !1);
            window.addEventListener("mousemove", e, !1);
            window.addEventListener("mouseup", e, !1);
            b.addEventListener("mousewheel", e, !1);
            b.addEventListener("DOMMouseScroll", e, !1);
            b.addEventListener("contextmenu", function(a) { a.preventDefault() }, !1);
            var f = "undefined" != typeof window.ontouchstart,
                e = u["int"](M.$aS("maxTouchPoints", window.navigator).value);
            if (f || 1 < e) {
                var k = new vf(this.$VH, f ? 4 : e);
                this.$YH = k;
                e = function(b) {
                    var c;
                    c =
                        f ? b.changedTouches : [b];
                    var e = b.target.getBoundingClientRect();
                    d = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            for (b = 0; b < c.length;) { var g = c[b];++b; var h = a.$RH(g, e),
                                    p = a.$SH(g, e);
                                k.$ON((f ? g.identifier : g.pointerId) | 0, h, p) }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) g = c[b], ++b, h = a.$RH(g, e), p = a.$SH(g, e), k.$SN((f ? g.identifier : g.pointerId) | 0, h, p);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b =
                                0; b < c.length;) g = c[b], ++b, h = a.$RH(g, e), p = a.$SH(g, e), k.$PN((f ? g.identifier : g.pointerId) | 0, h, p)
                    }
                };
                f ? (b.addEventListener("touchstart", e, !1), b.addEventListener("touchmove", e, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1)) : (b.addEventListener("MSPointerDown", e, !1), b.addEventListener("MSPointerMove", e, !1), b.addEventListener("MSPointerUp", e, !1))
            } else this.$YH = new wf;
            var g = window.onerror;
            window.onerror = function(a, b, c) { q.uncaughtError.emit(a); return null != g ? g(a, b, c) : !1 };
            var h =
                M.$aS("hidden", window.document);
            null != h.value ? (e = function(a) { q.hidden.set__(P.field(window.document, h.field)) }, e(null), window.document.addEventListener(h.prefix + "visibilitychange", e, !1)) : (e = function(a) { q.hidden.set__("pagehide" == a.type) }, window.addEventListener("pageshow", e, !1), window.addEventListener("pagehide", e, !1));
            q.hidden.get_changed().connect(function(b, c) { b || (a.$kH = !0) });
            this.$kH = !1;
            this.$jH = Date.now();
            var l = M.$aS("requestAnimationFrame").value;
            if (null != l) {
                var m = window.performance,
                    n = null !=
                    m && M.$cS("now", m);
                n ? this.$jH = m.now() : null;
                var v = null,
                    v = function(c) { l(v, b);
                        a.$QH(n ? m.now() : c) };
                l(v, b)
            } else window.setInterval(function() { a.$QH(Date.now()) }, 16);
            sa.$iN("fullscreen") && this.$YH.get_supported() && this.$XH.get_fullscreenSupported() && this.$YH.down.connect(function(b) { a.$XH.fullscreen.$pH || a.$XH.requestFullscreen() });
            var t = sa.$jN();
            null != t && (this.$XH.fullscreen.get_changed().connect(function(b, c) { b && a.$XH.lockOrientation(t) }), this.$XH.lockOrientation(t));
            this.$PH.$MQ.add(new xf);
            this.$PH.$oK();
            return (new ea).$FW(null)
        },
        loadAssetPack: function(a) { return (new Y(this, a)).$BH },
        getLocalStorage: function() { if (null == this.$eH) { var a = "2DKit.local." + u.string(sa.$iN("id"));
                this.$eH = Rb.$oH(a) } return this.$eH },
        $QH: function(a) { var b = (a - this.$jH) / 1E3;
            this.$jH = a;
            q.hidden.$pH || (this.$kH ? this.$kH = !1 : (this.$lH && (this.$lH = !1, this.$XH.$MS(null)), this.$PH.$QH(b), this.$PH.$RJ(this.$WH))) },
        getKeyboard: function() {
            var a = this;
            if (null == this.$dH) {
                this.$dH = new Sb;
                var b = function(b) {
                    switch (b.type) {
                        case "keydown":
                            a.$dH.$ON(b.keyCode) &&
                                b.preventDefault();
                            break;
                        case "keyup":
                            a.$dH.$PN(b.keyCode)
                    }
                };
                this.$hH.addEventListener("keydown", b, !1);
                this.$hH.addEventListener("keyup", b, !1);
                if (null != window.history && null != (Aj = window.history, ha(Aj, Aj.pushState))) { var c = !1,
                        d = function() { window.history.pushState("2DKitBack", null);
                            c = !0 };
                    window.addEventListener("popstate", function(b) { c && (null != a.$dH.backButton.$AI ? (d(), a.$dH.backButton.emit()) : window.history.back()) }); if (M.$VS) this.$VH.down.connect(function(a) { d() }).once();
                    else d() }
            }
            return this.$dH
        },
        getExternal: function() { null == this.$bH && (this.$bH = new yf); return this.$bH },
        getRenderer: function() { return this.$WH },
        $RH: function(a, b) { return (a.clientX - b.left) * this.$XH.get_width() / b.width },
        $SH: function(a, b) { return (a.clientY - b.top) * this.$XH.get_height() / b.height },
        $TH: function(a) {
            var b = this;
            if (window.navigator.isCocoonJS) {
                window.ext.IDTK_APP.makeCall("setWebGLEnabled", !0);
                var c = window.jsembed;
                null != c && (c.disableAutoScaling(), window.document.documentElement.style.height = "100%", window.document.body.style.height =
                    "100%", c = function() { var c = a.parentNode;
                        null != c && (c.style.width = "100%", c.style.height = "100%", c.style.left = "0", c.style.top = "0", b.$XH.$MS(null)) }, c(), window.setTimeout(c, 500))
            }
            if (0 <= window.navigator.userAgent.indexOf("Windows Phone")) return new Qd(a);
            try { var d = sj.getContextWebGL(a, { depth: !1, stencil: !0, failIfMajorPerformanceCaveat: !0 }); if (null != d) { var e = new zf(this.$XH, d); if (e.$rU) return e } } catch (f) { f instanceof s && (f = f.val), null }
            return new Qd(a)
        },
        __class__: Rb
    };
    var ya = function(a, b) {
        this.$pH = a;
        this.$qH =
            null != b ? new Tb(b) : null
    };
    g["kit.util.Value"] = ya;
    ya.__name__ = ["kit", "util", "Value"];
    ya.prototype = { watch: function(a) { a(this.$pH, this.$pH); return this.get_changed().connect(a) }, get__: function() { return this.$pH }, set__: function(a) { var b = this.$pH;
            a != b && (this.$pH = a, null != this.$qH && this.$qH.emit(a, b)); return a }, get_changed: function() { null == this.$qH && (this.$qH = new Tb); return this.$qH }, __class__: ya, __properties__: { get_changed: "get_changed", set__: "set__", get__: "get__" } };
    var ed = function(a, b) {
        this.$rH = null;
        this.$tH =
            a;
        this.$sH = b;
        this.stayInList = !0
    };
    g["kit.util.SignalConnection"] = ed;
    ed.__name__ = ["kit", "util", "SignalConnection"];
    ed.__interfaces__ = [Sa];
    ed.prototype = { once: function() { this.stayInList = !1; return this }, dispose: function() { null != this.$tH && (this.$tH.$vH(this), this.$tH = null) }, __class__: ed };
    var Oa = function(a) { this.$AI = null != a ? new ed(this, a) : null;
        this.$BI = null };
    g["kit.util.SignalBase"] = Oa;
    Oa.__name__ = ["kit", "util", "SignalBase"];
    Oa.prototype = {
        $uH: function(a, b) {
            var c = this,
                d = new ed(this, a);
            this.$AI == Oa.$CI ? this.$wH(function() {
                c.$zH(d,
                    b)
            }) : this.$zH(d, b);
            return d
        },
        $vH: function(a) { var b = this;
            this.$AI == Oa.$CI ? this.$wH(function() { b.$$H(a) }) : this.$$H(a) },
        $wH: function(a) { for (var b = null, c = this.$BI; null != c;) b = c, c = c.next;
            a = new Ai(a);
            null != b ? b.next = a : this.$BI = a },
        $xH: function() { var a = this.$AI;
            this.$AI = Oa.$CI; return a },
        $yH: function(a) { this.$AI = a;
            a = this.$BI; for (this.$BI = null; null != a;) a.$PW(), a = a.next },
        $zH: function(a, b) { if (b) a.$rH = this.$AI, this.$AI = a;
            else { for (var c = null, d = this.$AI; null != d;) c = d, d = d.$rH;
                null != c ? c.$rH = a : this.$AI = a } },
        $$H: function(a) {
            for (var b =
                    null, c = this.$AI; null != c;) { if (c == a) { a = c.$rH;
                    null == b ? this.$AI = a : b.$rH = a; break } b = c;
                c = c.$rH }
        },
        __class__: Oa
    };
    var Tb = function(a) { Oa.call(this, a) };
    g["kit.util.Signal2"] = Tb;
    Tb.__name__ = ["kit", "util", "Signal2"];
    Tb.__super__ = Oa;
    Tb.prototype = m(Oa.prototype, {
        connect: function(a, b) { null == b && (b = !1); return this.$uH(a, b) },
        emit: function(a, b) { var c = this;
            this.$AI == Oa.$CI ? this.$wH(function() { c.$DI(a, b) }) : this.$DI(a, b) },
        $DI: function(a, b) { for (var c = this.$xH(), d = c; null != d;) d.$sH(a, b), d.stayInList || d.dispose(), d = d.$rH;
            this.$yH(c) },
        __class__: Tb
    });
    var bb = function(a) { Oa.call(this, a) };
    g["kit.util.Signal0"] = bb;
    bb.__name__ = ["kit", "util", "Signal0"];
    bb.__super__ = Oa;
    bb.prototype = m(Oa.prototype, { connect: function(a, b) { null == b && (b = !1); return this.$uH(a, b) }, emit: function() { var a = this;
            this.$AI == Oa.$CI ? this.$wH(function() { a.$DI() }) : this.$DI() }, $DI: function() { for (var a = this.$xH(), b = a; null != b;) b.$sH(), b.stayInList || b.dispose(), b = b.$rH;
            this.$yH(a) }, __class__: bb });
    var ia = function(a) { Oa.call(this, a) };
    g["kit.util.Signal1"] = ia;
    ia.__name__ = ["kit",
        "util", "Signal1"
    ];
    ia.__super__ = Oa;
    ia.prototype = m(Oa.prototype, { connect: function(a, b) { null == b && (b = !1); return this.$uH(a, b) }, emit: function(a) { var b = this;
            this.$AI == Oa.$CI ? this.$wH(function() { b.$DI(a) }) : this.$DI(a) }, $DI: function(a) { for (var b = this.$xH(), c = b; null != c;) c.$sH(a), c.stayInList || c.dispose(), c = c.$rH;
            this.$yH(b) }, __class__: ia });
    var X = function(a, b) { this.$wF = null;
        ya.call(this, a, b) };
    g["kit.animation.AnimatedFloat"] = X;
    X.__name__ = ["kit", "animation", "AnimatedFloat"];
    X.__super__ = ya;
    X.prototype = m(ya.prototype, {
        set__: function(a) { this.$wF = null; return ya.prototype.set__.call(this, a) },
        update: function(a) { null != this.$wF && (ya.prototype.set__.call(this, this.$wF.update(a)), this.$wF.isComplete() && (this.$wF = null)) },
        animate: function(a, b, c, d) { this.set__(a);
            this.animateTo(b, c, d) },
        animateTo: function(a, b, c) { this.set_behavior(new Ac(this.$pH, a, b, c)) },
        animateBy: function(a, b, c) { this.set_behavior(new Ac(this.$pH, this.$pH + a, b, c)) },
        set_behavior: function(a) { this.$wF = a;
            this.update(0); return a },
        __class__: X,
        __properties__: m(ya.prototype.__properties__, { set_behavior: "set_behavior" })
    });
    var q = function() {};
    g["kit.System"] = q;
    q.__name__ = ["kit", "System"];
    q.$EI = function() { null == q.$HI && (q.$HI = q.$GI.init()); return q.$HI };
    q.loadAssetPack = function(a) { return q.$GI.loadAssetPack(a) };
    q.nextFrame = function(a) { q.$GI.$PH.$PQ(a) };
    var Af = function(a) { null == a && (a = 1);
        this.$KI = 0;
        n.call(this);
        this.scale = new X(a) };
    g["kit.SpeedAdjuster"] = Af;
    Af.__name__ = ["kit", "SpeedAdjuster"];
    Af.__super__ = n;
    Af.prototype = m(n.prototype, {
        get_entitySlot: function() { return 42 },
        onUpdate: function(a) {
            0 <
                this.$KI && (a = this.$KI, this.$KI = 0);
            this.scale.update(a)
        },
        __class__: Af
    });
    var Bf = function() {};
    g["kit.animation.Behavior"] = Bf;
    Bf.__name__ = ["kit", "animation", "Behavior"];
    Bf.prototype = { __class__: Bf };
    var C = function() {};
    g["kit.animation.Ease"] = C;
    C.__name__ = ["kit", "animation", "Ease"];
    C.linear = function(a) { return a };
    C.quadIn = function(a) { return a * a };
    C.quadOut = function(a) { return a * (2 - a) };
    C.quadInOut = function(a) { return 0.5 >= a ? a * a * 2 : 1 - --a * a * 2 };
    C.cubeIn = function(a) { return a * a * a };
    C.cubeOut = function(a) {
        return 1 + --a *
            a * a
    };
    C.cubeInOut = function(a) { return 0.5 >= a ? a * a * a * 4 : 1 + --a * a * a * 4 };
    C.quartIn = function(a) { return a * a * a * a };
    C.quartOut = function(a) { return 1 - --a * a * a * a };
    C.quartInOut = function(a) { return 0.5 >= a ? a * a * a * a * 8 : (1 - (a = 2 * a - 2) * a * a * a) / 2 + 0.5 };
    C.quintIn = function(a) { return a * a * a * a * a };
    C.quintOut = function(a) { return (a -= 1) * a * a * a * a + 1 };
    C.quintInOut = function(a) { return 1 > (a *= 2) ? a * a * a * a * a / 2 : ((a -= 2) * a * a * a * a + 2) / 2 };
    C.sineIn = function(a) { return 1 - Math.cos(1.5707963267948966 * a) };
    C.sineOut = function(a) {
        return Math.sin(1.5707963267948966 *
            a)
    };
    C.sineInOut = function(a) { return 0.5 - Math.cos(3.141592653589793 * a) / 2 };
    C.bounceIn = function(a) { a = 1 - a; return 0.36363636363636365 > a ? 1 - 7.5625 * a * a : 0.7272727272727273 > a ? 1 - (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75) : 0.9090909090909091 > a ? 1 - (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375) : 1 - (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375) };
    C.bounceOut = function(a) {
        return 0.36363636363636365 > a ? 7.5625 * a * a : 0.7272727272727273 > a ? 7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) +
            0.75 : 0.9090909090909091 > a ? 7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375 : 7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375
    };
    C.bounceInOut = function(a) {
        if (0.5 > a) return a = 1 - 2 * a, 0.36363636363636365 > a ? (1 - 7.5625 * a * a) / 2 : 0.7272727272727273 > a ? (1 - (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75)) / 2 : 0.9090909090909091 > a ? (1 - (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375)) / 2 : (1 - (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375)) / 2;
        a = 2 * a - 1;
        return 0.36363636363636365 >
            a ? 7.5625 * a * a / 2 + 0.5 : 0.7272727272727273 > a ? (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75) / 2 + 0.5 : 0.9090909090909091 > a ? (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375) / 2 + 0.5 : (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375) / 2 + 0.5
    };
    C.circIn = function(a) { return 1 - Math.sqrt(1 - a * a) };
    C.circOut = function(a) {--a; return Math.sqrt(1 - a * a) };
    C.circInOut = function(a) { return 0.5 >= a ? (Math.sqrt(1 - a * a * 4) - 1) / -2 : (Math.sqrt(1 - (2 * a - 2) * (2 * a - 2)) + 1) / 2 };
    C.expoIn = function(a) {
        return Math.pow(2,
            10 * (a - 1))
    };
    C.expoOut = function(a) { return -Math.pow(2, -10 * a) + 1 };
    C.expoInOut = function(a) { return 0.5 > a ? Math.pow(2, 10 * (2 * a - 1)) / 2 : (-Math.pow(2, -10 * (2 * a - 1)) + 2) / 2 };
    C.backIn = function(a) { return a * a * (2.70158 * a - 1.70158) };
    C.backOut = function(a) { return 1 - --a * a * (-2.70158 * a - 1.70158) };
    C.backInOut = function(a) { a *= 2; if (1 > a) return a * a * (2.70158 * a - 1.70158) / 2;
        a -= 2; return (1 - a * a * (-2.70158 * a - 1.70158)) / 2 + 0.5 };
    C.elasticIn = function(a) {
        return -(Math.pow(2, 10 * (a -= 1)) * Math.sin(1.5707963267948966 * (a - 0.25464790894703254 * Math.asin(1)) /
            0.4))
    };
    C.elasticOut = function(a) { return Math.pow(2, -10 * a) * Math.sin(1.5707963267948966 * (a - 0.25464790894703254 * Math.asin(1)) / 0.4) + 1 };
    C.elasticInOut = function(a) { return 0.5 > a ? -0.5 * Math.pow(2, 10 * (a -= 0.5)) * Math.sin(1.5707963267948966 * (a - 0.1) / 0.4) : Math.pow(2, -10 * (a -= 0.5)) * Math.sin(1.5707963267948966 * (a - 0.1) / 0.4) * 0.5 + 1 };
    var bc = function(a, b, c, d, e) {
        null == e && (e = 0);
        null == d && (d = 0);
        null == c && (c = 1);
        this.start = a;
        this.end = b;
        this.cycles = d;
        this.speed = new X(c);
        this.$XI = 1.5707963267948966 + 3.141592653589793 / c * e;
        this.$YI =
            0.5 * (a - b);
        this.$ZI = b + this.$YI
    };
    g["kit.animation.Sine"] = bc;
    bc.__name__ = ["kit", "animation", "Sine"];
    bc.__interfaces__ = [Bf];
    bc.prototype = { update: function(a) { this.speed.update(a);
            this.$XI += 3.141592653589793 / this.speed.$pH * a; return this.$ZI + Math.sin(this.$XI) * this.$YI }, isComplete: function() { return 0 < this.cycles && (this.$XI - 1.5707963267948966) / 3.141592653589793 * 0.5 >= this.cycles }, __class__: bc };
    var Ac = function(a, b, c, d) { this.$bI = a;
        this.$cI = b;
        this.$dI = c;
        this.elapsed = 0;
        this.$eI = null != d ? d : C.linear };
    g["kit.animation.Tween"] =
        Ac;
    Ac.__name__ = ["kit", "animation", "Tween"];
    Ac.__interfaces__ = [Bf];
    Ac.prototype = { update: function(a) { this.elapsed += a; return this.elapsed >= this.$dI ? this.$cI : this.$bI + (this.$cI - this.$bI) * this.$eI(this.elapsed / this.$dI) }, isComplete: function() { return this.elapsed >= this.$dI }, __class__: Ac };
    var kc = function() {};
    g["kit.asset.Asset"] = kc;
    kc.__name__ = ["kit", "asset", "Asset"];
    kc.__interfaces__ = [Sa];
    kc.prototype = { __class__: kc };
    var z = g["kit.asset.AssetFormat"] = { __ename__: ["kit", "asset", "AssetFormat"], __constructs__: "WEBP JXR PNG JPG GIF _2DKD _2DKP _2DKE MP3 M4A OPUS OGG WAV WOFF TTF SWF MP4 WEBM Data".split(" ") };
    z.WEBP = ["WEBP", 0];
    z.WEBP.toString = l;
    z.WEBP.__enum__ = z;
    z.JXR = ["JXR", 1];
    z.JXR.toString = l;
    z.JXR.__enum__ = z;
    z.PNG = ["PNG", 2];
    z.PNG.toString = l;
    z.PNG.__enum__ = z;
    z.JPG = ["JPG", 3];
    z.JPG.toString = l;
    z.JPG.__enum__ = z;
    z.GIF = ["GIF", 4];
    z.GIF.toString = l;
    z.GIF.__enum__ = z;
    z._2DKD = ["_2DKD", 5];
    z._2DKD.toString = l;
    z._2DKD.__enum__ = z;
    z._2DKP = ["_2DKP", 6];
    z._2DKP.toString = l;
    z._2DKP.__enum__ = z;
    z._2DKE = ["_2DKE", 7];
    z._2DKE.toString = l;
    z._2DKE.__enum__ = z;
    z.MP3 = ["MP3", 8];
    z.MP3.toString = l;
    z.MP3.__enum__ = z;
    z.M4A = ["M4A", 9];
    z.M4A.toString =
        l;
    z.M4A.__enum__ = z;
    z.OPUS = ["OPUS", 10];
    z.OPUS.toString = l;
    z.OPUS.__enum__ = z;
    z.OGG = ["OGG", 11];
    z.OGG.toString = l;
    z.OGG.__enum__ = z;
    z.WAV = ["WAV", 12];
    z.WAV.toString = l;
    z.WAV.__enum__ = z;
    z.WOFF = ["WOFF", 13];
    z.WOFF.toString = l;
    z.WOFF.__enum__ = z;
    z.TTF = ["TTF", 14];
    z.TTF.toString = l;
    z.TTF.__enum__ = z;
    z.SWF = ["SWF", 15];
    z.SWF.toString = l;
    z.SWF.__enum__ = z;
    z.MP4 = ["MP4", 16];
    z.MP4.toString = l;
    z.MP4.__enum__ = z;
    z.WEBM = ["WEBM", 17];
    z.WEBM.toString = l;
    z.WEBM.__enum__ = z;
    z.Data = ["Data", 18];
    z.Data.toString = l;
    z.Data.__enum__ = z;
    var Bi =
        function(a, b, c, d) { this.name = a;
            this.url = b;
            this.format = c;
            this.bytes = d };
    g["kit.asset.AssetEntry"] = Bi;
    Bi.__name__ = ["kit", "asset", "AssetEntry"];
    Bi.prototype = { __class__: Bi };
    var Cf = function() {};
    g["kit.asset.File"] = Cf;
    Cf.__name__ = ["kit", "asset", "File"];
    Cf.__interfaces__ = [kc];
    Cf.prototype = { __class__: Cf };
    var db = function() { this.$fI = this.$gI = null;
        this.$vG = [] };
    g["kit.asset.Manifest"] = db;
    db.__name__ = ["kit", "asset", "Manifest"];
    db.fromAssets = function(a, b) {
        var c = P.field(sa.$iN("assets"), a);
        if (null == c) return null;
        var d = new db;
        d.$fI = "assets";
        for (var e = 0; e < c.length;) { var f = c[e];++e; for (var k = f.name, g = encodeURIComponent(a), h = 0, l = k.split("/"); h < l.length;) { var m = l[h];++h;
                g += "/" + encodeURIComponent(m) } g += "?v=" + u.string(f.md5);
            h = db.$hI(k);
            h != z.Data && (k = Pa.removeFileExtension(k));
            d.add(k, g, f.bytes, h) }
        return d
    };
    db.$hI = function(a) {
        a = Pa.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return z.GIF;
            case "jpg":
            case "jpeg":
                return z.JPG;
            case "jxr":
            case "wdp":
                return z.JXR;
            case "png":
                return z.PNG;
            case "webp":
                return z.WEBP;
            case "2dkd":
                return z._2DKD;
            case "2dkp":
                return z._2DKP;
            case "2dke":
                return z._2DKE;
            case "m4a":
                return z.M4A;
            case "mp3":
                return z.MP3;
            case "ogg":
                return z.OGG;
            case "opus":
                return z.OPUS;
            case "wav":
                return z.WAV;
            case "woff":
                return z.WOFF;
            case "ttf":
                return z.TTF;
            case "swf":
                return z.SWF;
            case "mp4":
                return z.MP4;
            case "webm":
                return z.WEBM
        } else null;
        return z.Data
    };
    db.prototype = {
        add: function(a, b, c, d) { null == c && (c = 0);
            null == d && (d = db.$hI(b));
            a = new Bi(a, b, d, c);
            this.$vG.push(a); return a },
        iterator: function() { return D.iter(this.$vG) },
        getFullURL: function(a) { var b;
            b = null != this.$gI && db.$iI ? this.$gI : this.$fI; return null != b ? Pa.joinPath(b, a.url) : a.url },
        __class__: db
    };
    var Rd = function() { this.offsetX = this.offsetY = 0;
        this.active = !0;
        this.following = null;
        H.call(this) };
    g["kit.creator.Camera"] = Rd;
    Rd.__name__ = ["kit", "creator", "Camera"];
    Rd.__super__ = H;
    Rd.prototype = m(H.prototype, {
        onStart: function() {
            H.prototype.onStart.call(this);
            var a = this.owner.$MH[3];
            null == a && (this.owner.add(a = new x), this.info.transformSprite(a), a.set_visible(!1));
            null != this.following &&
                (a = this.following.$MH[3], null != a && a.set_pixelSnapping(!1));
            this.active && (this.owner._internal_getFromParents(3, T).camera = this)
        },
        onUpdate: function(a) { H.prototype.onUpdate.call(this, a);
            this.zoom.update(a) },
        $jI: function(a) {
            var b = this.owner.$MH[3];
            if (null != this.following) { var c = this.following.$MH[3];
                null != c && b.setXY(c.x.$pH + this.offsetX, c.y.$pH + this.offsetY) }
            for (var c = this.zoom.$pH, d = b.y.$pH - 0.5 * a.cameraHeight.$pH / c, b = -ja.clamp(b.x.$pH - 0.5 * a.cameraWidth.$pH / c, 0, a.info.width * a.info.tileWidth - a.cameraWidth.$pH /
                    c), d = -ja.clamp(d, 0, a.info.height * a.info.tileHeight - a.cameraHeight.$pH / c), e = 0, f = a.info.layers; e < f.length;) { var k = f[e];++e; var g = a.layers.get(k.name).$MH[3],
                    h = ja.max(k.parallaxX, k.parallaxY) * (c - 1) + 1;
                g.setScale(h);
                g.x.set__(k.parallaxX * b * h);
                g.y.set__(k.parallaxY * d * h) }
        },
        __class__: Rd
    });
    var Df = function(a) { this.$pI = null;
        this.$oI = new O;
        n.call(this);
        this.scene = a;
        this.$kI() };
    g["kit.creator.CreatorScript"] = Df;
    Df.__name__ = ["kit", "creator", "CreatorScript"];
    Df.__super__ = n;
    Df.prototype = m(n.prototype, {
        get_entitySlot: function() { return 4 },
        run: function(a, b, c) { a = this.$oI.get(a); return null != a ? A.runSequence(a.actions, b) : null },
        onMessage: function(a, b) { var c = !1,
                d = this.$oI.get(a); if (null != d) { var e = u.instance(b, F); if (null != e)
                    for (var f = this.owner; null != f;) f == q.root && (A.runSequence(d.actions, e), c = !0), f = f.parent } return n.prototype.onMessage.call(this, a, b) || c },
        $kI: function() {
            this.groups = [];
            for (var a = 0, b = this.scene.script.groups; a < b.length;) {
                var c = b[a];
                ++a;
                var d = c.actions.map(ha(this, this.$lI)).filter(function(a) { return null != a }),
                    d = new Ci(c, d);
                this.groups.push(d);
                this.$oI.set(c.name, d)
            }
            this.$pI = null
        },
        $lI: function(a) {
            var b = da.resolveClass(a.type);
            if (null == b || null == b.__rtti) return null;
            var c = da.createInstance(b, []);
            c.script = this;
            null == this.$pI && (this.$pI = new O);
            var d = this.$pI.get(a.type);
            null == d && (b = d = Qc.$GO(b, new O), this.$pI.set(a.type, b));
            for (b = a.properties.keys(); b.hasNext();) { var e = b.next(),
                    f;
                f = null != Ea[e] ? d.getReserved(e) : d.h[e]; if (null != f) { var k = a.properties.get(e);
                    f = this.$mI(f.type, k, a.type + "." + e);
                    null != f && P.setProperty(c, e, f) } else null } d =
                c instanceof ta ? c : null;
            null != d && (d.subActions = a.subActions.map(ha(this, this.$lI)).filter(function(a) { return null != a }));
            return c
        },
        $mI: function(a, b, c) {
            var d = Qc.$mI(a, b);
            if (null != d) return d;
            switch (a[1]) {
                case 3:
                    switch (a[2]) {
                        case "Null":
                            return this.$mI(a[3].first(), b, c);
                        default:
                            return null }
                case 2:
                    switch (a[2]) {
                        case "Array":
                            a = a[3].first();
                            var d = [],
                                e = 0;
                            for (b = b.split(","); e < b.length;) { var f = b[e];++e;
                                d.push(this.$mI(a, I.trim(f), c)) }
                            return d;
                        case "kit.creator.ObjectInfo":
                            return this.scene.getObject(b, !1);
                        case "kit.creator.LayerInfo":
                            return this.scene.getLayer(b,
                                !1);
                        default:
                            return null
                    }
                default:
                    return null
            }
        },
        __class__: Df
    });
    var Ci = function(a, b) { this.info = a;
        this.actions = b };
    g["kit.creator.Group"] = Ci;
    Ci.__name__ = ["kit", "creator", "Group"];
    Ci.prototype = { __class__: Ci };
    var qb = function(a) { this.$tI = new F;
        this.state = new ya(null);
        x.call(this);
        this.$sI = a };
    g["kit.creator.ObjectSprite"] = qb;
    qb.__name__ = ["kit", "creator", "ObjectSprite"];
    qb.__super__ = x;
    qb.prototype = m(x.prototype, {
        play: function(a, b) {
            null == b && (b = !0);
            var c = this;
            if (!b && this.state.$pH == a) return this;
            var d = this.$tI.$MH[3],
                e = this.state.$pH,
                f = this.$qI(a),
                f = f instanceof sb ? f : null;
            null != f && f.get_looped().connect(function() { c.$rI(d, e) });
            return this
        },
        loop: function(a, b) { null == b && (b = !0); if (!b && this.state.$pH == a) return this;
            this.$qI(a); return this },
        $qI: function(a) {
            if (null == this.owner) return null;
            var b = this.$sI.states.get(a);
            if (null == b) return null;
            var c;
            c = this.owner._internal_getFromParents(2);
            if (null == c) return null;
            var d = b.lastIndexOf("/");
            if (0 > d) return null;
            var e = D.substr(b, 0, d),
                d = D.substr(b, d + 1, null),
                f = c.getLibrary(e, !1);
            if (null != f) return b = f.createSprite(d), this.$rI(b, a), b;
            e = c.getTexturePacker(e, !1);
            if (null != e) return b = e.createSprite(d, !1), null == b && (b = e.toLibrary().createSprite(d)), this.$rI(b, a), b;
            b = c.getTexture(b, !1);
            return null != b ? (b = new Ia(b), this.$rI(b, a), b) : null
        },
        $rI: function(a, b) { var c = this.$sI.tile;
            null == c.texture && (a.x.set__(-u.parseFloat(c.properties.get("boundsX"))), a.y.set__(-u.parseFloat(c.properties.get("boundsY"))));
            this.$tI.add(a);
            this.state.set__(b) },
        onStart: function() {
            x.prototype.onStart.call(this);
            if (null != this.owner && (this.owner.addChild(this.$tI), null == this.state.$pH)) { var a;
                a = this.$sI.tile; if (null != a.texture) a = new Ia(a.texture);
                else { var b;
                    b = this.owner._internal_getFromParents(2); var c = a.tileset.properties.get("library"),
                        d = a.properties.get("symbol");
                    null != c ? a = b.getLibrary(c).createSprite(d) : (c = a.tileset.properties.get("texturepacker"), b = b.getTexturePacker(c), a = null != a.properties.get("animated") ? b.toLibrary().createSprite(d) : b.createSprite(d)) } this.$rI(a, null) }
        },
        __class__: qb
    });
    var Ob = function() {
        this.$vI =
            new O;
        this.changed = new Tb;
        n.call(this)
    };
    g["kit.creator.PropertyBag"] = Ob;
    Ob.__name__ = ["kit", "creator", "PropertyBag"];
    Ob.__super__ = n;
    Ob.prototype = m(n.prototype, {
        get_entitySlot: function() { return 10 },
        get: function(a) { var b = this.$uI(a); if (null != b) return b.$pH;
            a = this.$vI.get(a); return null != a ? a : null },
        set: function(a, b) { var c = this.$uI(a);
            null != c ? c.$pH != b && (c.set__(b), this.changed.emit(a, b)) : this.$vI.get(a) != b && (this.$vI.set(a, b), this.changed.emit(a, b)); return this },
        $uI: function(a) {
            switch (a) {
                case "x":
                case "y":
                case "rotation":
                case "scaleX":
                case "scaleY":
                case "anchorX":
                case "anchorY":
                case "alpha":
                    var b =
                        this.owner.$MH[3];
                    if (null != b) return u.instance(P.field(b, a), X)
            }
            return null
        },
        __class__: Ob
    });
    var va = function(a, b) { this.$yI = a;
        this.$nI = a.getFile(b + ".json", !1);
        null != this.$nI ? null : this.$nI = a.getFile(b + ".scene"); var c = b.lastIndexOf("/");
        this.$zI = 0 <= c ? D.substr(b, 0, c + 1) : "";
        this.$kI();
        this.reloadCount = new ya(0) };
    g["kit.creator.SceneInfo"] = va;
    va.__name__ = ["kit", "creator", "SceneInfo"];
    va.getRequiredAssetPacks = function(a) { var b = sa.$iN("scenes");
        a = P.field(b, a); return null != a ? a : [] };
    va.$AJ = function(a) {
        var b = new O;
        if (null != a)
            for (var c = 0, d = P.fields(a); c < d.length;) { var e = d[c];++c; if (!I.startsWith(e, "//")) { var f = va.$BJ(P.field(a, e));
                    null != f && (null != Ea[e] ? b.setReserved(e, f) : b.h[e] = f) } }
        return b
    };
    va.$BJ = function(a) { null != a && (a = I.trim(a), 0 == a.length && (a = null)); return a };
    va.$CJ = function(a, b) { return null != a ? a : b };
    va.prototype = {
        disposeFiles: function() { this.$nI.dispose(); for (var a = 0, b = this.$$I; a < b.length;) { var c = b[a];++a;
                c.dispose() } return this },
        createSprite: function() { return new T(this) },
        createScript: function() { return new Df(this) },
        getLayer: function(a, b) { for (var c = 0, d = this.layers; c < d.length;) { var e = d[c];++c; if (e.name == a) return e } return null },
        getObject: function(a, b) { return this.$_I.get(a) },
        $wI: function(a) { return this.$yI.getTexture(this.$zI + Pa.removeFileExtension(a), !1) },
        $xI: function(a) { return this.$yI.getTexture(a) },
        $kI: function() {
            var a = this,
                b = this.$nI.toJson();
            this.width = b.width;
            this.height = b.height;
            this.tileWidth = b.tilewidth;
            this.tileHeight = b.tileheight;
            this.tilesets = b.tilesets.map(function(b) { return new Di(a, b) });
            this.backgroundColor =
                null != b.backgroundcolor ? u.parseInt(I.replace(b.backgroundcolor, "#", "0x")) : 8421504;
            this.tiles = new rb;
            for (var c = 0, d = this.tilesets; c < d.length;) { var e = d[c];++c; for (var f = 0, e = e.tiles; f < e.length;) { var k = e[f];++f;
                    this.tiles.h[k.id] = k } } this.layers = b.layers.map(function(b) { return new Ef(a, b) });
            this.properties = va.$AJ(b.properties);
            this.script = new Ei(b.script);
            this.$$I = [];
            c = this.properties.get("resources");
            if (null != c)
                for (b = 0, c = c.split(","); b < c.length;)
                    if (d = c[b], ++b, d = I.trim(d), "" != d)
                        for (f = this.$yI.getFile(this.$zI +
                                Pa.removeFileExtension(d) + ".json"), this.$$I.push(f), d = 0, f = f.toJson().layers; d < f.length;) e = f[d], ++d, "objectgroup" == e.type && this.layers.push(new Ef(this, e, !0));
            this.$_I = new O;
            b = 0;
            for (c = this.layers; b < c.length;)
                if (f = c[b], ++b, null != f.objects)
                    for (d = 0, f = f.objects; d < f.length;) e = f[d], ++d, null != e.name && this.$_I.set(e.name, e)
        },
        __class__: va
    };
    var Bc = g["kit.creator.LayerType"] = { __ename__: ["kit", "creator", "LayerType"], __constructs__: ["Tile", "Object"] };
    Bc.Tile = ["Tile", 0];
    Bc.Tile.toString = l;
    Bc.Tile.__enum__ = Bc;
    Bc.Object = ["Object", 1];
    Bc.Object.toString = l;
    Bc.Object.__enum__ = Bc;
    var Ef = function(a, b, c) {
        null == c && (c = !1);
        this.parallaxX = this.parallaxY = 1;
        this.tiles = this.objects = null;
        var d = this;
        this.scene = a;
        this.name = va.$BJ(b.name);
        switch (b.type) {
            case "tilelayer":
                this.type = Bc.Tile; break;
            case "objectgroup":
                this.type = Bc.Object; break;
            default:
                this.type = null } this.width = b.width;
        this.height = b.height;
        this.opacity = b.opacity;
        this.visible = b.visible && !c;
        null != b.data && (this.tiles = b.data.map(function(b) { return 0 != b ? a.tiles.h[b] : null }));
        null != b.objects && (this.objects = b.objects.map(function(a) { return new Ff(d, a, c) }), "index" != b.draworder && this.objects.sort(function(a, b) { return P.compare(a.y + a.height, b.y + b.height) }));
        null != b.parallaxX && (this.parallaxX = b.parallaxX, this.parallaxY = b.parallaxY);
        this.tileCollisions = b.collisions;
        this.properties = va.$AJ(b.properties)
    };
    g["kit.creator.LayerInfo"] = Ef;
    Ef.__name__ = ["kit", "creator", "LayerInfo"];
    Ef.prototype = { __class__: Ef };
    var ua = g["kit.creator.ObjectShape"] = {
        __ename__: ["kit", "creator", "ObjectShape"],
        __constructs__: ["Rectangle", "Ellipse", "Polygon", "Polyline", "Tile"]
    };
    ua.Rectangle = ["Rectangle", 0];
    ua.Rectangle.toString = l;
    ua.Rectangle.__enum__ = ua;
    ua.Ellipse = ["Ellipse", 1];
    ua.Ellipse.toString = l;
    ua.Ellipse.__enum__ = ua;
    ua.Polygon = ["Polygon", 2];
    ua.Polygon.toString = l;
    ua.Polygon.__enum__ = ua;
    ua.Polyline = ["Polyline", 3];
    ua.Polyline.toString = l;
    ua.Polyline.__enum__ = ua;
    ua.Tile = ["Tile", 4];
    ua.Tile.toString = l;
    ua.Tile.__enum__ = ua;
    var Ff = function(a, b, c) {
        this.states = new O;
        this.properties = new O;
        this.tile = this.points =
            null;
        this.layer = a;
        this.name = va.$BJ(b.name);
        this.type = va.$BJ(b.type);
        this.x = b.x;
        this.y = b.y;
        this.anchorX = va.$CJ(b.anchorX, 0);
        this.anchorY = va.$CJ(b.anchorY, 0);
        this.rotation = b.rotation;
        this.width = b.width;
        this.height = b.height;
        this.visible = b.visible;
        this.tint = null != b.tintcolor ? u.parseInt(I.replace(b.tintcolor, "#", "0x")) : 16777215;
        b.ellipse ? this.shape = ua.Ellipse : null != b.polygon ? (this.shape = ua.Polygon, this.points = b.polygon.map(function(a) { return new ka(a.x, a.y) })) : null != b.polyline ? (this.shape = ua.Polyline,
            this.points = b.polyline.map(function(a) { return new ka(a.x, a.y) })) : null == b.gid || c ? this.shape = ua.Rectangle : (this.shape = ua.Tile, this.tile = a.scene.tiles.h[b.gid]);
        a = null != this.tile ? -this.height : 0;
        0 == this.rotation ? (this.x += this.anchorX, this.y += this.anchorY + a) : (c = new Ab, c.compose(this.x, this.y, 1, 1, 3.141592653589793 * this.rotation / 180), c.translate(this.anchorX, this.anchorY + a), this.x = c.m02, this.y = c.m12);
        null != this.tile && (this.anchorX *= this.tile.get_width() / this.width, this.anchorY *= this.tile.get_height() / this.height);
        b = va.$AJ(b.properties);
        for (a = b.keys(); a.hasNext();) { var d = a.next();
            c = null != Ea[d] ? b.getReserved(d) : b.h[d];
            I.startsWith(d, "@State:") ? (d = D.substr(d, 7, null), this.states.set(d, c)) : this.properties.set(d, c) }
    };
    g["kit.creator.ObjectInfo"] = Ff;
    Ff.__name__ = ["kit", "creator", "ObjectInfo"];
    Ff.prototype = {
        createSprite: function() { var a;
            null != this.tile ? (a = this.tile.texture, a = null != a && 2 > Ma.count(this.states) ? new Ia(a) : new qb(this)) : a = new x;
            this.transformSprite(a); return a },
        transformSprite: function(a) {
            null != this.tile ?
                (a.setXY(this.x + this.tile.tileset.offsetX, this.y + this.tile.tileset.offsetY), a.setScaleXY(this.width / this.tile.get_width(), this.height / this.tile.get_height())) : a.setXY(this.x, this.y);
            a.setAnchor(this.anchorX, this.anchorY);
            a.rotation.set__(this.rotation);
            a.set_visible(this.visible);
            a.setTint(this.tint)
        },
        __class__: Ff
    };
    var Di = function(a, b, c) {
        this.offsetX = this.offsetY = 0;
        this.atlas = null;
        this.scene = a;
        this.name = va.$BJ(b.name);
        this.spacing = b.spacing;
        this.margin = b.margin;
        c = b.tileoffset;
        null != c && (this.offsetX =
            c.x, this.offsetY = c.y);
        this.tileWidth = b.tilewidth;
        this.tileHeight = b.tileheight;
        if (null != b.image) {
            this.atlas = a.$wI(b.image);
            null == this.atlas && (this.atlas = a.$xI(this.name));
            c = this.atlas.get_width() - 2 * this.margin;
            var d = this.atlas.get_height() - 2 * this.margin;
            c = (c + this.spacing) / (this.tileWidth + this.spacing) | 0;
            d = (d + this.spacing) / (this.tileHeight + this.spacing) | 0;
            this.tiles = Array(c * d);
            for (var e = 0, f = 0; f < d;)
                for (var k = f++, g = 0; g < c;) {
                    var h = g++,
                        l = new Gf(this, b, e);
                    l.texture = this.atlas.subTexture(h * (this.tileWidth +
                        this.spacing) + this.margin, k * (this.tileHeight + this.spacing) + this.margin, this.tileWidth, this.tileHeight);
                    this.tiles[e] = l;
                    ++e
                }
        } else this.tiles = [];
        if (null != b.tiles)
            for (c = 0, d = P.fields(b.tiles); c < d.length;)
                if (e = d[c], ++c, f = P.field(b.tiles, e), k = u.parseInt(e), e = this.tiles[k], null == e && (e = this.tiles[k] = new Gf(this, b, k)), null != f.image && "true" != e.properties.get("previewImage") && (e.texture = a.$wI(f.image), null == e.texture && (e.texture = a.$xI(this.name))), null != f.objectgroup)
                    for (k = 0, f = f.objectgroup.objects; k < f.length;) g =
                        f[k], ++k, e.collision.push(new Ff(null, g, !0));
        this.properties = va.$AJ(b.properties)
    };
    g["kit.creator.TilesetInfo"] = Di;
    Di.__name__ = ["kit", "creator", "TilesetInfo"];
    Di.prototype = { __class__: Di };
    var Gf = function(a, b, c) { this.collision = [];
        this.texture = null;
        this.id = b.firstgid + c;
        this.tileset = a;
        this.properties = va.$AJ(null != b.tileproperties ? P.field(b.tileproperties, "" + c) : null) };
    g["kit.creator.TileInfo"] = Gf;
    Gf.__name__ = ["kit", "creator", "TileInfo"];
    Gf.prototype = {
        get_width: function() {
            return null != this.texture ? this.texture.get_width() :
                u.parseInt(this.properties.get("boundsWidth"))
        },
        get_height: function() { return null != this.texture ? this.texture.get_height() : u.parseInt(this.properties.get("boundsHeight")) },
        __class__: Gf,
        __properties__: { get_height: "get_height", get_width: "get_width" }
    };
    var Ei = function(a) { this.groups = null != a ? a.groups.map(function(a) { return new Fi(a) }) : [] };
    g["kit.creator.ScriptInfo"] = Ei;
    Ei.__name__ = ["kit", "creator", "ScriptInfo"];
    Ei.prototype = { __class__: Ei };
    var Fi = function(a) {
        this.actions = [];
        this.name = a.name;
        this.actions =
            a.actions.map(function(a) { return new Hf(a) })
    };
    g["kit.creator.GroupInfo"] = Fi;
    Fi.__name__ = ["kit", "creator", "GroupInfo"];
    Fi.prototype = { __class__: Fi };
    var Hf = function(a) { this.type = a.type;
        this.subActions = null != a.subActions ? a.subActions.map(function(a) { return new Hf(a) }) : [];
        this.properties = va.$AJ(a.properties) };
    g["kit.creator.ActionInfo"] = Hf;
    Hf.__name__ = ["kit", "creator", "ActionInfo"];
    Hf.prototype = { __class__: Hf };
    var tb = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a,
            b, c, d)
    };
    g["kit.math.Rectangle"] = tb;
    tb.__name__ = ["kit", "math", "Rectangle"];
    tb.prototype = {
        set: function(a, b, c, d) { this.x = a;
            this.y = b;
            this.width = c;
            this.height = d },
        contains: function(a, b) { a -= this.x; if (0 <= this.width) { if (0 > a || a > this.width) return !1 } else if (0 < a || a < this.width) return !1;
            b -= this.y; if (0 <= this.height) { if (0 > b || b > this.height) return !1 } else if (0 < b || b < this.height) return !1; return !0 },
        clone: function(a) { null == a && (a = new tb);
            a.set(this.x, this.y, this.width, this.height); return a },
        equals: function(a) {
            return this.x ==
                a.x && this.y == a.y && this.width == a.width && this.height == a.height
        },
        get_right: function() { return this.x + this.width },
        __class__: tb,
        __properties__: { get_right: "get_right" }
    };
    var T = function(a) {
        this.$pI = null;
        this.drawBackgroundColor = !1;
        this.objects = new Zb;
        this.layers = new O;
        this.camera = null;
        x.call(this);
        this.info = a;
        var b = new x;
        this.cameraX = new X(0, function(a, d) { b.x.set__(-a) });
        this.cameraY = new X(0, function(a, d) { b.y.set__(-a) });
        this.cameraWidth = new X(a.tileWidth * a.width);
        this.cameraHeight = new X(a.tileHeight * a.height);
        this.content = (new F).add(b)
    };
    g["kit.creator.SceneSprite"] = T;
    T.__name__ = ["kit", "creator", "SceneSprite"];
    T.$HJ = function(a) {
        null == a && (a = new tb);
        var b = sa.$iN("width"),
            c = sa.$iN("height"),
            d = Math.min(q.$GI.$XH.get_width() / b, q.$GI.$XH.get_height() / c);
        if (1 == sa.$iN("scaleMode")) { var e = Math.max(b, u["int"](sa.$iN("maxWidth"))),
                f = Math.max(c, u["int"](sa.$iN("maxHeight")));
            a.width = Math.min(q.$GI.$XH.get_width() / d, e);
            a.height = Math.min(q.$GI.$XH.get_height() / d, f) } else a.width = q.$GI.$XH.get_width() / d, a.height = q.$GI.$XH.get_height() /
            d;
        a.x = -(a.width / 2 - b / 2);
        a.y = -(a.height / 2 - c / 2);
        return a
    };
    T.__super__ = x;
    T.prototype = m(x.prototype, {
        onStart: function() { x.prototype.onStart.call(this); for (var a = 0, b = this.info.layers; a < b.length;) { var c = b[a];++a; var d = new F;
                this.$EJ(c, d);
                this.content.addChild(d) } this.$pI = null },
        setCamera: function(a, b, c, d) { this.cameraX.set__(a);
            this.cameraY.set__(b);
            this.cameraWidth.set__(c);
            this.cameraHeight.set__(d); return this },
        onAdded: function() { x.prototype.onAdded.call(this);
            this.owner.addChild(this.content) },
        draw: function(a) {
            null !=
                this.camera && this.camera.$jI(this);
            if (this.drawBackgroundColor) { var b = T.$HJ(T.$IJ);
                a.fillRect(this.info.backgroundColor, b.x, b.y, b.width, b.height) }
        },
        onUpdate: function(a) { x.prototype.onUpdate.call(this, a);
            this.cameraX.update(a);
            this.cameraY.update(a);
            this.cameraWidth.update(a);
            this.cameraHeight.update(a) },
        $EJ: function(a, b) {
            var c;
            switch (a.type[1]) {
                case 0:
                    c = new If(this, this.info, a); break;
                case 1:
                    c = new x } c.alpha.set__(a.opacity);
            c.set_visible(a.visible);
            b.add(c);
            switch (a.type[1]) {
                case 1:
                    c = 0;
                    for (var d = a.objects; c <
                        d.length;) { var e = d[c];++c; var f = this.$FJ(e, !0); if (null == f || f.spawned) { var k = this.objects.h[e.__id__]; if (e.shape == ua.Tile) { if (null == k) { var g = k = new F;
                                    this.objects.set(e, g) } k.add(e.createSprite());
                                null != f && k.add(f) } null != k && b.addChild(k) } }
                    break;
                case 0:
                    a.tileCollisions && (c = b.$MH[6], null != c && c.dispose(), c = this.owner._internal_getFromParents(7).$XM(a), b.add(c))
            }
            this.layers.set(a.name, b)
        },
        createObject: function(a) { var b = new F,
                c = this.$FJ(a, !1);
            a.shape == ua.Tile && b.add(a.createSprite());
            null != c && b.add(c); return b },
        getNaturalWidth: function() { return this.cameraWidth.$pH },
        getNaturalHeight: function() { return this.cameraHeight.$pH },
        getLayer: function(a, b) { return this.layers.get(a) },
        getObject: function(a, b) { null == b && (b = !0); var c = this.info.getObject(a, b); return this.objects.h[c.__id__] },
        getObjects: function(a) { for (var b = [], c = this.objects.keys(); c.hasNext();) { var d = c.next();
                d.name == a && b.push(this.objects.h[d.__id__]) } return b },
        getObjectsByType: function(a) {
            a = da.getClassName(a);
            for (var b = [], c = this.objects.keys(); c.hasNext();) {
                var d =
                    c.next();
                d.type == a && b.push(this.objects.h[d.__id__])
            }
            return b
        },
        $FJ: function(a, b) { if (null == a.type) return null; if (b) { var c = this.objects.h[a.__id__]; if (null != c && (c = c.$MH[1], null != c)) return c } c = da.resolveClass(a.type); if (null == c || null == c.__rtti) return null; var d = da.createInstance(c, []); if (b) { var e = (new F).add(d);
                this.objects.set(a, e) } this.$GJ(a, d, c); return d },
        $GJ: function(a, b, c) {
            null == this.$pI && (this.$pI = new O);
            var d = this.$pI.get(a.type);
            null == d && (c = d = Qc.$GO(c, new O), this.$pI.set(a.type, c));
            for (c = a.properties.keys(); c.hasNext();) {
                var e =
                    c.next(),
                    f = a.properties.get(e),
                    k;
                k = null != Ea[e] ? d.getReserved(e) : d.h[e];
                null != k ? (f = this.$mI(k.type, f, a.type + "." + e), null != f && P.setProperty(b, e, f)) : null
            }
            b.info = a
        },
        $mI: function(a, b, c) {
            var d = Qc.$mI(a, b);
            if (null != d) return d;
            switch (a[1]) {
                case 3:
                    switch (a[2]) {
                        case "Null":
                            return this.$mI(a[3].first(), b, c);
                        default:
                            null }
                    break;
                case 2:
                    d = a[2];
                    switch (a[2]) {
                        case "Array":
                            a = a[3].first();
                            var d = [],
                                e = 0;
                            for (b = b.split(","); e < b.length;) { var f = b[e];++e;
                                d.push(this.$mI(a, I.trim(f), c)) }
                            return d;
                        case "kit.creator.ObjectInfo":
                            return this.info.getObject(b,
                                !1);
                        case "kit.creator.LayerInfo":
                            return this.info.getLayer(b, !1);
                        case "kit.Entity":
                            c = this.info.getObject(b, !1);
                            if (null == c) return null;
                            c = this.$FJ(c, !0);
                            return null != c ? c.owner : null;
                        default:
                            c = da.resolveClass(d);
                            b = this.info.getObject(b, !1);
                            if (null == b) return null;
                            b = this.$FJ(b, !0);
                            if (null != b) { if (Z.__instanceof(b, c)) return b;
                                null }
                    }
                    break;
                default:
                    null
            }
            return null
        },
        __class__: T
    });
    var If = function(a, b, c) { x.call(this);
        this.$JJ = a;
        this.$KJ = b;
        this.$LJ = c };
    g.$CR = If;
    If.__name__ = ["$CR"];
    If.__super__ = x;
    If.prototype = m(x.prototype, {
        getNaturalWidth: function() { return this.$KJ.tileWidth * this.$LJ.width },
        getNaturalHeight: function() { return this.$KJ.tileHeight * this.$LJ.height },
        containsLocal: function(a, b) { var c = a / this.$KJ.tileWidth | 0; if (0 > c || c >= this.$LJ.width) return !1; var d = b / this.$KJ.tileHeight | 0; return 0 > d || d >= this.$LJ.height ? !1 : null != this.$LJ.tiles[d * this.$LJ.width + c] },
        draw: function(a) {
            var b = this.$KJ.tileWidth,
                c = this.$KJ.tileHeight,
                d = this.$LJ.width,
                e = this.$LJ.height,
                f = T.$HJ(T.$IJ);
            f.x = (f.x - this.x.$pH) / this.scaleX.$pH;
            f.y = (f.y - this.y.$pH) /
                this.scaleY.$pH;
            f.width /= this.scaleX.$pH;
            f.height /= this.scaleY.$pH;
            for (var k = ja.clamp(f.x / b | 0, 0, d), g = ja.clamp(f.y / c | 0, 0, e), h = ja.clamp(k + Math.ceil(f.width / b) + 1, 0, d), e = ja.clamp(g + Math.ceil(f.height / c) + 1, 0, e); g < e;)
                for (var f = g++, l = k; l < h;) { var m = l++,
                        n = this.$LJ.tiles[f * d + m]; if (null != n) { var q = n.tileset;
                        a.drawTexture(n.texture, m * b + q.offsetX, f * c + q.offsetY - q.tileHeight + c) } }
        },
        __class__: If
    });
    var pa = function() {
        this.cameraEnabled = ub.Yes;
        this.dockY = Gb.None;
        this.dockX = Hb.None;
        this.onPointerDown = this.onPointerIn =
            this.onPointerOut = this.onPointerUp = this.onClick = null;
        this.pointerEnabled = !0;
        H.call(this)
    };
    g["kit.creator.ui.Widget"] = pa;
    pa.__name__ = ["kit", "creator", "ui", "Widget"];
    pa.__super__ = H;
    pa.prototype = m(H.prototype, {
        onStart: function() {
            var a = this;
            H.prototype.onStart.call(this);
            var b = this.owner.$MH[3];
            if (null != b) {
                b.set_pointerEnabled(this.pointerEnabled);
                null != this.onPointerDown && this.$MJ(b.get_pointerDown(), this.onPointerDown);
                null != this.onPointerIn && this.$MJ(b.get_pointerIn(), this.onPointerIn);
                null != this.onPointerOut &&
                    this.$MJ(b.get_pointerOut(), this.onPointerOut);
                null != this.onPointerUp && this.$MJ(b.get_pointerUp(), this.onPointerUp);
                null != this.onClick && b.get_pointerDown().connect(function(b) { q.$GI.$VH.up.connect(function(b) { a.owner.emitMessageToParents(a.onClick, a.owner) }).once() });
                var c = this.owner._internal_getFromParents(3, T),
                    d = function() {
                        var c = sa.$iN("width"),
                            d = sa.$iN("height"),
                            k = T.$HJ(pa.$IJ);
                        switch (a.dockX[1]) {
                            case 1:
                                b.x.set__(a.info.x + k.x); break;
                            case 2:
                                b.x.set__(a.info.x + k.width - c + k.x) }
                        switch (a.dockY[1]) {
                            case 1:
                                b.y.set__(a.info.y +
                                    k.y);
                                break;
                            case 2:
                                b.y.set__(a.info.y + k.height - d + k.y)
                        }
                    };
                if (this.dockX != Hb.None || this.dockY != Gb.None) d(), this.connect0(q.$GI.$XH.resize, d);
                this.cameraEnabled != ub.Yes && c.owner.addChild(this.owner, this.cameraEnabled == ub.Foreground)
            }
        },
        $MJ: function(a, b) { var c = this;
            a.connect(function(a) { null != c.owner && c.owner.emitMessageToParents(b, c.owner) }) },
        __class__: pa
    });
    var fd = function() { this.textScale = 1;
        this.text = "Your text";
        this.letterSpacing = this.lineSpacing = 0;
        this.textAlign = Va.Left;
        pa.call(this) };
    g["kit.creator.ui.BitmapText"] =
        fd;
    fd.__name__ = ["kit", "creator", "ui", "BitmapText"];
    fd.__super__ = pa;
    fd.prototype = m(pa.prototype, {
        onStart: function() { var a = this.owner._internal_getFromParents(2),
                a = new hb(a.getFont(this.font));
            a.set_align(this.textAlign);
            a.letterSpacing.set__(this.letterSpacing);
            a.lineSpacing.set__(this.lineSpacing);
            a.wrapWidth.set__(this.info.width / this.textScale);
            this.owner.add(a);
            this.info.transformSprite(a); var b = a.scaleX;
            b.set__(b.$pH * this.textScale);
            a = a.scaleY;
            a.set__(a.$pH * this.textScale);
            this.$OJ(!0);
            pa.prototype.onStart.call(this) },
        $NJ: function() { return u.instance(this.owner.$MH[3], hb) },
        $OJ: function(a) {
            var b = this,
                c = u.instance(this.owner.$MH[3], hb);
            if (null != this.owner._internal_getFromParents(4)) {
                var d = I.replace(this.text, "\\n", "\n"),
                    e = null;
                c.set_text((new Ra("{(.+?)}", "g")).map(d, function(c) {
                    var d = c.matched(1);
                    if (null == e)
                        for (e = [], c = b.owner; null != c;) { var g = c.$MH[10];
                            null != g && e.push(g);
                            c = c.parent }
                    if (a)
                        for (c = 0; c < e.length;) g = e[c], ++c, b.connect2(g.changed, function(a, c) { a == d && b.$OJ(!1) });
                    for (c = 0; c < e.length;)
                        if (g = e[c], ++c, g = g.get(d),
                            null != g) return "" + g;
                    return "0"
                }))
            }
        },
        __class__: fd
    });
    var Sd = function() { this.pressDistance = 10;
        pa.call(this) };
    g["kit.creator.ui.Button"] = Sd;
    Sd.__name__ = ["kit", "creator", "ui", "Button"];
    Sd.__super__ = pa;
    Sd.prototype = m(pa.prototype, {
        onStart: function() {
            var a = this,
                b = this.owner.$MH[3],
                c;
            c = b instanceof qb ? b : null;
            var d = !1,
                e = !1;
            b.get_pointerIn().connect(function(a) { e = !0;
                null != c && c.loop(d ? "down" : "hover", !1) });
            b.get_pointerOut().connect(function(a) { e = !1;
                null != c && c.loop("up") });
            b.get_pointerDown().connect(function(f) {
                d = !0;
                f = b.y;
                f.set__(f.$pH + a.pressDistance);
                null != c && c.loop("down");
                q.$GI.$VH.up.connect(function(f) { d = !1;
                    f = b.y;
                    f.set__(f.$pH - a.pressDistance);
                    null != c && c.loop(e ? "hover" : "up") }).once()
            });
            pa.prototype.onStart.call(this)
        },
        __class__: Sd
    });
    var Td = function() { pa.call(this) };
    g["kit.creator.ui.Image"] = Td;
    Td.__name__ = ["kit", "creator", "ui", "Image"];
    Td.__super__ = pa;
    Td.prototype = m(pa.prototype, { __class__: Td });
    var Ud = function() {
        this.textAlign = Va.Left;
        this.strokeWidth = this.lineSpacing = 0;
        this.strokeColor = 16777215;
        this.color =
            0;
        this.bold = this.italic = !1;
        this.fontSize = 24;
        this.text = "Your text";
        this.font = this.systemFont = null
    };
    g["kit.creator.ui.Text"] = Ud;
    Ud.__name__ = ["kit", "creator", "ui", "Text"];
    Ud.__super__ = pa;
    Ud.prototype = m(pa.prototype, {
        onStart: function() {
            var a;
            a = null != this.font ? this.owner._internal_getFromParents(2).getVectorFont(this.font) : q.$GI.$WH.createSystemFont(null != this.systemFont ? this.systemFont : "sans");
            a = new gd(a, I.replace(this.text, "\\n", "\n"));
            a.fontSize.set__(this.fontSize);
            a.set_bold(this.bold);
            a.set_italic(this.italic);
            a.set_color(this.color);
            a.set_strokeColor(this.strokeColor);
            a.strokeWidth.set__(this.strokeWidth);
            a.lineSpacing.set__(this.lineSpacing);
            a.set_align(this.textAlign);
            a.wrapWidth.set__(this.info.width);
            this.owner.add(a);
            this.info.transformSprite(a);
            this.$OJ(!0);
            pa.prototype.onStart.call(this)
        },
        $OJ: function(a) {
            var b = this,
                c = u.instance(this.owner.$MH[3], gd);
            if (null != this.owner._internal_getFromParents(4)) {
                var d = I.replace(this.text, "\\n", "\n"),
                    e = null;
                c.set_text((new Ra("{(.+?)}", "g")).map(d, function(c) {
                    var d =
                        c.matched(1);
                    if (null == e)
                        for (e = [], c = b.owner; null != c;) { var g = c.$MH[10];
                            null != g && e.push(g);
                            c = c.parent }
                    if (a)
                        for (c = 0; c < e.length;) g = e[c], ++c, b.connect2(g.changed, function(a, c) { a == d && b.$OJ(!1) });
                    for (c = 0; c < e.length;)
                        if (g = e[c], ++c, g = g.get(d), null != g) return "" + g;
                    return "0"
                }))
            }
        },
        __class__: Ud
    });
    var ub = g["kit.creator.ui.CameraSetting"] = { __ename__: ["kit", "creator", "ui", "CameraSetting"], __constructs__: ["Yes", "Background", "Foreground"] };
    ub.Yes = ["Yes", 0];
    ub.Yes.toString = l;
    ub.Yes.__enum__ = ub;
    ub.Background = ["Background",
        1
    ];
    ub.Background.toString = l;
    ub.Background.__enum__ = ub;
    ub.Foreground = ["Foreground", 2];
    ub.Foreground.toString = l;
    ub.Foreground.__enum__ = ub;
    var Hb = g["kit.creator.ui.DockX"] = { __ename__: ["kit", "creator", "ui", "DockX"], __constructs__: ["None", "Left", "Right"] };
    Hb.None = ["None", 0];
    Hb.None.toString = l;
    Hb.None.__enum__ = Hb;
    Hb.Left = ["Left", 1];
    Hb.Left.toString = l;
    Hb.Left.__enum__ = Hb;
    Hb.Right = ["Right", 2];
    Hb.Right.toString = l;
    Hb.Right.__enum__ = Hb;
    var Gb = g["kit.creator.ui.DockY"] = {
        __ename__: ["kit", "creator", "ui", "DockY"],
        __constructs__: ["None", "Top", "Bottom"]
    };
    Gb.None = ["None", 0];
    Gb.None.toString = l;
    Gb.None.__enum__ = Gb;
    Gb.Top = ["Top", 1];
    Gb.Top.toString = l;
    Gb.Top.__enum__ = Gb;
    Gb.Bottom = ["Bottom", 2];
    Gb.Bottom.toString = l;
    Gb.Bottom.__enum__ = Gb;
    var la = g["kit.display.BlendMode"] = { __ename__: ["kit", "display", "BlendMode"], __constructs__: "Normal Add Multiply Screen Mask Copy".split(" ") };
    la.Normal = ["Normal", 0];
    la.Normal.toString = l;
    la.Normal.__enum__ = la;
    la.Add = ["Add", 1];
    la.Add.toString = l;
    la.Add.__enum__ = la;
    la.Multiply = ["Multiply",
        2
    ];
    la.Multiply.toString = l;
    la.Multiply.__enum__ = la;
    la.Screen = ["Screen", 3];
    la.Screen.toString = l;
    la.Screen.__enum__ = la;
    la.Mask = ["Mask", 4];
    la.Mask.toString = l;
    la.Mask.__enum__ = la;
    la.Copy = ["Copy", 5];
    la.Copy.toString = l;
    la.Copy.__enum__ = la;
    var Jf = function() {};
    g["kit.display.Graphics"] = Jf;
    Jf.__name__ = ["kit", "display", "Graphics"];
    Jf.prototype = { __class__: Jf };
    var df = function() { this.$QJ = [] };
    g["kit.display.BufferedGraphics"] = df;
    df.__name__ = ["kit", "display", "BufferedGraphics"];
    df.__interfaces__ = [Jf];
    df.prototype = {
        save: function() { this.$PJ(new Kf) },
        translate: function(a, b) { this.$PJ(new Lf(a, b)) },
        scale: function(a, b) { this.$PJ(new Mf(a, b)) },
        rotate: function(a) { this.$PJ(new Nf(a)) },
        transform: function(a, b, c, d, e, f) { this.$PJ(new Of(a, b, c, d, e, f)) },
        multiplyAlpha: function(a) { this.$PJ(new Pf(a)) },
        setAlpha: function(a) { this.$PJ(new Qf(a)) },
        tint: function(a, b, c) { this.$PJ(new Rf(a, b, c)) },
        setBlendMode: function(a) { this.$PJ(new Sf(a)) },
        beginMask: function() { this.$PJ(new Tf) },
        endMask: function() { this.$PJ(new Uf) },
        applyScissor: function(a,
            b, c, d) { this.$PJ(new Vf(a, b, c, d)) },
        restore: function() { this.$PJ(new Wf) },
        drawTexture: function(a, b, c) { this.$PJ(new Xf(a, b, c)) },
        drawSubTexture: function(a, b, c, d, e, f, k) { this.$PJ(new Yf(a, b, c, d, e, f, k)) },
        drawPattern: function(a, b, c, d, e) { this.$PJ(new Zf(a, b, c, d, e)) },
        fillRect: function(a, b, c, d, e) { this.$PJ(new $f(a, b, c, d, e)) },
        fillTriangles: function(a, b, c) { this.$PJ(new ag(a, b.slice(), c.slice())) },
        drawTriangles: function(a, b, c) { this.$PJ(new bg(a, b.slice(), c.slice())) },
        fillPolygon: function(a, b) {
            this.$PJ(new cg(a,
                b.slice()))
        },
        drawPolygon: function(a, b) { this.$PJ(new dg(a, b.slice())) },
        drawCircle: function(a, b, c, d, e) { null == e && (e = 50);
            this.$PJ(new eg(a, b, c, d, e)) },
        fillCircle: function(a, b, c, d, e) { null == e && (e = 50);
            this.$PJ(new fg(a, b, c, d, e)) },
        strokeCircle: function(a, b, c, d, e, f) { null == f && (f = 50);
            this.$PJ(new gg(a, b, c, d, e, f)) },
        drawEllipse: function(a, b, c, d, e, f) { null == f && (f = 50);
            this.$PJ(new hg(a, b, c, d, e, f)) },
        fillEllipse: function(a, b, c, d, e, f) { null == f && (f = 50);
            this.$PJ(new ig(a, b, c, d, e, f)) },
        strokeEllipse: function(a, b, c, d, e, f,
            k) { null == k && (k = 50);
            this.$PJ(new jg(a, b, c, d, e, f, k)) },
        fillArc: function(a, b, c, d, e, f, k) { null == k && (k = 50);
            this.$PJ(new kg(a, b, c, d, e, f, k)) },
        strokeArc: function(a, b, c, d, e, f, k, g) { null == g && (g = 50);
            this.$PJ(new lg(a, b, c, d, e, f, k, g)) },
        strokeLines: function(a, b, c) { this.$PJ(new mg(a, b.slice(), c)) },
        drawLines: function(a, b, c) { this.$PJ(new ng(a, b.slice(), c)) },
        render: function(a) { for (var b = this.$QJ.length, c = 0; c < b;) { var d = c++;
                this.$QJ[d].$RJ(a) } },
        $PJ: function(a) { this.$QJ.push(a) },
        __class__: df
    };
    var K = function() {};
    g.$CS = K;
    K.__name__ = ["$CS"];
    K.prototype = { $RJ: function(a) {}, __class__: K };
    var Kf = function() {};
    g.$CT = Kf;
    Kf.__name__ = ["$CT"];
    Kf.__super__ = K;
    Kf.prototype = m(K.prototype, { $RJ: function(a) { a.save() }, __class__: Kf });
    var Lf = function(a, b) { this.$SJ = a;
        this.$TJ = b };
    g.$CU = Lf;
    Lf.__name__ = ["$CU"];
    Lf.__super__ = K;
    Lf.prototype = m(K.prototype, { $RJ: function(a) { a.translate(this.$SJ, this.$TJ) }, __class__: Lf });
    var Mf = function(a, b) { this.$SJ = a;
        this.$TJ = b };
    g.$CV = Mf;
    Mf.__name__ = ["$CV"];
    Mf.__super__ = K;
    Mf.prototype = m(K.prototype, {
        $RJ: function(a) {
            a.scale(this.$SJ,
                this.$TJ)
        },
        __class__: Mf
    });
    var Nf = function(a) { this.$UJ = a };
    g.$CW = Nf;
    Nf.__name__ = ["$CW"];
    Nf.__super__ = K;
    Nf.prototype = m(K.prototype, { $RJ: function(a) { a.rotate(this.$UJ) }, __class__: Nf });
    var Of = function(a, b, c, d, e, f) { this.$VJ = a;
        this.$WJ = b;
        this.$XJ = c;
        this.$YJ = d;
        this.$ZJ = e;
        this.$aJ = f };
    g.$CX = Of;
    Of.__name__ = ["$CX"];
    Of.__super__ = K;
    Of.prototype = m(K.prototype, { $RJ: function(a) { a.transform(this.$VJ, this.$WJ, this.$XJ, this.$YJ, this.$ZJ, this.$aJ) }, __class__: Of });
    var Pf = function(a) { this.$bJ = a };
    g.$CY = Pf;
    Pf.__name__ = ["$CY"];
    Pf.__super__ = K;
    Pf.prototype = m(K.prototype, { $RJ: function(a) { a.multiplyAlpha(this.$bJ) }, __class__: Pf });
    var Qf = function(a) { this.$cJ = a };
    g.$CZ = Qf;
    Qf.__name__ = ["$CZ"];
    Qf.__super__ = K;
    Qf.prototype = m(K.prototype, { $RJ: function(a) { a.setAlpha(this.$cJ) }, __class__: Qf });
    var Rf = function(a, b, c) { this.$dJ = a;
        this.$eJ = b;
        this.$fJ = c };
    g.$Ca = Rf;
    Rf.__name__ = ["$Ca"];
    Rf.__super__ = K;
    Rf.prototype = m(K.prototype, { $RJ: function(a) { a.tint(this.$dJ, this.$eJ, this.$fJ) }, __class__: Rf });
    var Sf = function(a) { this.$gJ = a };
    g.$Cb = Sf;
    Sf.__name__ = ["$Cb"];
    Sf.__super__ = K;
    Sf.prototype = m(K.prototype, { $RJ: function(a) { a.setBlendMode(this.$gJ) }, __class__: Sf });
    var Vf = function(a, b, c, d) { this.$SJ = a;
        this.$TJ = b;
        this.$hJ = c;
        this.$iJ = d };
    g.$Cc = Vf;
    Vf.__name__ = ["$Cc"];
    Vf.__super__ = K;
    Vf.prototype = m(K.prototype, { $RJ: function(a) { a.applyScissor(this.$SJ, this.$TJ, this.$hJ, this.$iJ) }, __class__: Vf });
    var Tf = function() {};
    g.$Cd = Tf;
    Tf.__name__ = ["$Cd"];
    Tf.__super__ = K;
    Tf.prototype = m(K.prototype, { $RJ: function(a) { a.beginMask() }, __class__: Tf });
    var Uf = function() {};
    g.$Ce = Uf;
    Uf.__name__ = ["$Ce"];
    Uf.__super__ = K;
    Uf.prototype = m(K.prototype, { $RJ: function(a) { a.endMask() }, __class__: Uf });
    var Wf = function() {};
    g.$Cf = Wf;
    Wf.__name__ = ["$Cf"];
    Wf.__super__ = K;
    Wf.prototype = m(K.prototype, { $RJ: function(a) { a.restore() }, __class__: Wf });
    var Xf = function(a, b, c) { this.$jJ = a;
        this.$kJ = b;
        this.$lJ = c };
    g.$Cg = Xf;
    Xf.__name__ = ["$Cg"];
    Xf.__super__ = K;
    Xf.prototype = m(K.prototype, { $RJ: function(a) { a.drawTexture(this.$jJ, this.$kJ, this.$lJ) }, __class__: Xf });
    var Yf = function(a, b, c, d, e, f, k) {
        this.$jJ = a;
        this.$kJ = b;
        this.$lJ =
            c;
        this.$mJ = d;
        this.$nJ = e;
        this.$oJ = f;
        this.$pJ = k
    };
    g.$Ch = Yf;
    Yf.__name__ = ["$Ch"];
    Yf.__super__ = K;
    Yf.prototype = m(K.prototype, { $RJ: function(a) { a.drawSubTexture(this.$jJ, this.$kJ, this.$lJ, this.$mJ, this.$nJ, this.$oJ, this.$pJ) }, __class__: Yf });
    var Zf = function(a, b, c, d, e) { this.$jJ = a;
        this.$kJ = b;
        this.$lJ = c;
        this.$hJ = d;
        this.$iJ = e };
    g.$Ci = Zf;
    Zf.__name__ = ["$Ci"];
    Zf.__super__ = K;
    Zf.prototype = m(K.prototype, { $RJ: function(a) { a.drawPattern(this.$jJ, this.$kJ, this.$lJ, this.$hJ, this.$iJ) }, __class__: Zf });
    var ag = function(a, b, c) {
        this.$qJ =
            a;
        this.$rJ = b;
        this.$sJ = c
    };
    g.$Cj = ag;
    ag.__name__ = ["$Cj"];
    ag.__super__ = K;
    ag.prototype = m(K.prototype, { $RJ: function(a) { a.fillTriangles(this.$qJ, this.$rJ, this.$sJ) }, __class__: ag });
    var bg = function(a, b, c) { this.$jJ = a;
        this.$rJ = b;
        this.$sJ = c };
    g.$Ck = bg;
    bg.__name__ = ["$Ck"];
    bg.__super__ = K;
    bg.prototype = m(K.prototype, { $RJ: function(a) { a.drawTriangles(this.$jJ, this.$rJ, this.$sJ) }, __class__: bg });
    var cg = function(a, b) { this.$qJ = a;
        this.$rJ = b };
    g.$Cl = cg;
    cg.__name__ = ["$Cl"];
    cg.__super__ = K;
    cg.prototype = m(K.prototype, {
        $RJ: function(a) {
            a.fillPolygon(this.$qJ,
                this.$rJ)
        },
        __class__: cg
    });
    var dg = function(a, b) { this.$jJ = a;
        this.$rJ = b };
    g.$Cm = dg;
    dg.__name__ = ["$Cm"];
    dg.__super__ = K;
    dg.prototype = m(K.prototype, { $RJ: function(a) { a.drawPolygon(this.$jJ, this.$rJ) }, __class__: dg });
    var eg = function(a, b, c, d, e) { this.$jJ = a;
        this.$tJ = b;
        this.$uJ = c;
        this.$vJ = d;
        this.$wJ = e };
    g.$Cn = eg;
    eg.__name__ = ["$Cn"];
    eg.__super__ = K;
    eg.prototype = m(K.prototype, { $RJ: function(a) { a.drawCircle(this.$jJ, this.$tJ, this.$uJ, this.$vJ, this.$wJ) }, __class__: eg });
    var fg = function(a, b, c, d, e) {
        this.$qJ = a;
        this.$tJ = b;
        this.$uJ = c;
        this.$vJ = d;
        this.$wJ = e
    };
    g.$Co = fg;
    fg.__name__ = ["$Co"];
    fg.__super__ = K;
    fg.prototype = m(K.prototype, { $RJ: function(a) { a.fillCircle(this.$qJ, this.$tJ, this.$uJ, this.$vJ, this.$wJ) }, __class__: fg });
    var gg = function(a, b, c, d, e, f) { this.$qJ = a;
        this.$tJ = b;
        this.$uJ = c;
        this.$vJ = d;
        this.$xJ = e;
        this.$wJ = f };
    g.$Cp = gg;
    gg.__name__ = ["$Cp"];
    gg.__super__ = K;
    gg.prototype = m(K.prototype, { $RJ: function(a) { a.strokeCircle(this.$qJ, this.$tJ, this.$uJ, this.$vJ, this.$xJ, this.$wJ) }, __class__: gg });
    var ig = function(a, b, c, d, e, f) {
        this.$qJ =
            a;
        this.$tJ = b;
        this.$uJ = c;
        this.$yJ = d;
        this.$zJ = e;
        this.$wJ = f
    };
    g.$Cq = ig;
    ig.__name__ = ["$Cq"];
    ig.__super__ = K;
    ig.prototype = m(K.prototype, { $RJ: function(a) { a.fillEllipse(this.$qJ, this.$tJ, this.$uJ, this.$yJ, this.$zJ, this.$wJ) }, __class__: ig });
    var hg = function(a, b, c, d, e, f) { this.$jJ = a;
        this.$tJ = b;
        this.$uJ = c;
        this.$yJ = d;
        this.$zJ = e;
        this.$wJ = f };
    g.$Cr = hg;
    hg.__name__ = ["$Cr"];
    hg.__super__ = K;
    hg.prototype = m(K.prototype, { $RJ: function(a) { a.drawEllipse(this.$jJ, this.$tJ, this.$uJ, this.$yJ, this.$zJ, this.$wJ) }, __class__: hg });
    var jg =
        function(a, b, c, d, e, f, k) { this.$qJ = a;
            this.$tJ = b;
            this.$uJ = c;
            this.$yJ = d;
            this.$zJ = e;
            this.$xJ = f;
            this.$wJ = k };
    g.$Cs = jg;
    jg.__name__ = ["$Cs"];
    jg.__super__ = K;
    jg.prototype = m(K.prototype, { $RJ: function(a) { a.strokeEllipse(this.$qJ, this.$tJ, this.$uJ, this.$yJ, this.$zJ, this.$xJ, this.$wJ) }, __class__: jg });
    var kg = function(a, b, c, d, e, f, k) { this.$qJ = a;
        this.$tJ = b;
        this.$uJ = c;
        this.$vJ = d;
        this.$$J = e;
        this.$_J = f;
        this.$wJ = k };
    g.$Ct = kg;
    kg.__name__ = ["$Ct"];
    kg.__super__ = K;
    kg.prototype = m(K.prototype, {
        $RJ: function(a) {
            a.fillArc(this.$qJ,
                this.$tJ, this.$uJ, this.$vJ, this.$$J, this.$_J, this.$wJ)
        },
        __class__: kg
    });
    var lg = function(a, b, c, d, e, f, k, g) { this.$qJ = a;
        this.$tJ = b;
        this.$uJ = c;
        this.$vJ = d;
        this.$$J = e;
        this.$_J = f;
        this.$xJ = k;
        this.$wJ = g };
    g.$Cu = lg;
    lg.__name__ = ["$Cu"];
    lg.__super__ = K;
    lg.prototype = m(K.prototype, { $RJ: function(a) { a.strokeArc(this.$qJ, this.$tJ, this.$uJ, this.$vJ, this.$$J, this.$_J, this.$xJ, this.$wJ) }, __class__: lg });
    var mg = function(a, b, c) { this.$qJ = a;
        this.$rJ = b;
        this.$AK = c };
    g.$Cv = mg;
    mg.__name__ = ["$Cv"];
    mg.__super__ = K;
    mg.prototype = m(K.prototype, { $RJ: function(a) { a.strokeLines(this.$qJ, this.$rJ, this.$AK) }, __class__: mg });
    var ng = function(a, b, c) { this.$jJ = a;
        this.$rJ = b;
        this.$AK = c };
    g.$Cw = ng;
    ng.__name__ = ["$Cw"];
    ng.__super__ = K;
    ng.prototype = m(K.prototype, { $RJ: function(a) { a.drawLines(this.$jJ, this.$rJ, this.$AK) }, __class__: ng });
    var $f = function(a, b, c, d, e) { this.$qJ = a;
        this.$SJ = b;
        this.$TJ = c;
        this.$hJ = d;
        this.$iJ = e };
    g.$Cx = $f;
    $f.__name__ = ["$Cx"];
    $f.__super__ = K;
    $f.prototype = m(K.prototype, {
        $RJ: function(a) { a.fillRect(this.$qJ, this.$SJ, this.$TJ, this.$hJ, this.$iJ) },
        __class__: $f
    });
    var og = function(a, b, c) { x.call(this);
        this.color = a;
        this.width = new X(b);
        this.height = new X(c) };
    g["kit.display.FillSprite"] = og;
    og.__name__ = ["kit", "display", "FillSprite"];
    og.__super__ = x;
    og.prototype = m(x.prototype, {
        draw: function(a) { a.fillRect(this.color, 0, 0, this.width.$pH, this.height.$pH) },
        getNaturalWidth: function() { return this.width.$pH },
        getNaturalHeight: function() { return this.height.$pH },
        setSize: function(a, b) { this.width.set__(a);
            this.height.set__(b); return this },
        onUpdate: function(a) {
            x.prototype.onUpdate.call(this,
                a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: og
    });
    var pg = function(a) { this.$CK = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a };
    g["kit.display.Glyph"] = pg;
    pg.__name__ = ["kit", "display", "Glyph"];
    pg.prototype = {
        draw: function(a, b, c) { 0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height) },
        getKerning: function(a) { return null != this.$CK ? u["int"](this.$CK.h[a]) : 0 },
        $BK: function(a,
            b) { null == this.$CK && (this.$CK = new rb);
            this.$CK.h[a] = b },
        __class__: pg
    };
    var Oc = function(a, b) { this.name = b;
        this.$yI = a;
        this.$nI = a.getFile(b + ".fnt");
        this.$kI() };
    g["kit.display.Font"] = Oc;
    Oc.__name__ = ["kit", "display", "Font"];
    Oc.prototype = {
        disposeFiles: function() { this.$nI.dispose(); return this },
        layoutText: function(a, b, c, d, e) { null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = Va.Left); return new Rc(this, a, b, c, d, e) },
        $kI: function() {
            this.$DK = new rb;
            this.$DK.h[Oc.$EK.charCode] = Oc.$EK;
            for (var a = new hd(this.$nI.toString()),
                    b = new rb, c = this.name.lastIndexOf("/"), c = 0 <= c ? D.substr(this.name, 0, c + 1) : "", d = a.$JK(); d.hasNext();) switch (d.next()) {
                case "info":
                    for (var e = a.$KK(); e.hasNext();) { var f = e.next(); switch (f.$QK) {
                            case "size":
                                this.size = f.$RK(); break;
                            case "face":
                                this.typeface = f.$SK() } }
                    break;
                case "common":
                    for (e = a.$KK(); e.hasNext();) switch (f = e.next(), f.$QK) {
                        case "lineHeight":
                            this.lineHeight = f.$RK() }
                    break;
                case "page":
                    for (var e = 0, f = null, k = a.$KK(); k.hasNext();) {
                        var g = k.next();
                        switch (g.$QK) {
                            case "id":
                                e = g.$RK();
                                break;
                            case "file":
                                f =
                                    g.$SK()
                        }
                    }
                    f = this.$yI.getTexture(c + Pa.removeFileExtension(f));
                    b.h[e] = f;
                    break;
                case "char":
                    e = null;
                    for (f = a.$KK(); f.hasNext();) switch (k = f.next(), k.$QK) {
                        case "id":
                            e = new pg(k.$RK()); break;
                        case "x":
                            e.x = k.$RK(); break;
                        case "y":
                            e.y = k.$RK(); break;
                        case "width":
                            e.width = k.$RK(); break;
                        case "height":
                            e.height = k.$RK(); break;
                        case "page":
                            k = k.$RK();
                            e.page = b.h[k]; break;
                        case "xoffset":
                            e.xOffset = k.$RK(); break;
                        case "yoffset":
                            e.yOffset = k.$RK(); break;
                        case "xadvance":
                            e.xAdvance = k.$RK() } this.$DK.h[e.charCode] = e;
                    break;
                case "kerning":
                    g =
                        null;
                    f = e = 0;
                    for (k = a.$KK(); k.hasNext();) { var h = k.next(); switch (h.$QK) {
                            case "first":
                                g = h.$RK();
                                g = this.$DK.h[g]; break;
                            case "second":
                                e = h.$RK(); break;
                            case "amount":
                                f = h.$RK() } } null != g && 0 != f && g.$BK(e, f)
            }
        },
        __class__: Oc
    };
    var Va = g["kit.display.TextAlign"] = { __ename__: ["kit", "display", "TextAlign"], __constructs__: ["Left", "Center", "Right"] };
    Va.Left = ["Left", 0];
    Va.Left.toString = l;
    Va.Left.__enum__ = Va;
    Va.Center = ["Center", 1];
    Va.Center.toString = l;
    Va.Center.__enum__ = Va;
    Va.Right = ["Right", 2];
    Va.Right.toString = l;
    Va.Right.__enum__ =
        Va;
    var Rc = function(a, b, c, d, e, f) {
        this.lines = 0;
        var k = this;
        this.$FK = a;
        this.$DK = [];
        this.$GK = [];
        this.$HK = Math.round(a.lineHeight + f);
        this.bounds = new tb;
        var g = [];
        f = b.length;
        for (var h = 0; h < f;) { var l = h++,
                l = b.charCodeAt(l),
                l = a.$DK.h[l];
            null != l ? this.$DK.push(l) : null } b = -1;
        var m = 0,
            n = 0;
        a = a.$DK.h[10];
        f = function() { k.bounds.width = ja.max(k.bounds.width, m);
            k.bounds.height += n;
            g[k.lines] = m;
            n = m = 0;++k.lines };
        for (h = 0; h < this.$DK.length;) {
            l = this.$DK[h];
            this.$GK[h] = Math.round(m);
            var q = 0 < d && m + l.width > d;
            q || l == a ? (q && (0 <= b ? (this.$DK[b] =
                a, m = this.$GK[b], h = b) : this.$DK.splice(h, 0, a)), b = -1, n = this.$HK, f()) : (32 == l.charCode && (b = h), m += l.xAdvance + e, n = ja.max(n, l.height + l.yOffset), h + 1 < this.$DK.length && (m += l.getKerning(this.$DK[h + 1].charCode)));
            ++h
        }
        f();
        e = 0;
        a = Rc.$IK(c, g[0], d);
        b = 1.79769313486231E308;
        f = -1.79769313486231E308;
        l = h = 0;
        for (q = this.$DK.length; l < q;) { var u = this.$DK[l];
            10 == u.charCode && (e += this.$HK, ++h, a = Rc.$IK(c, g[h], d));
            this.$GK[l] += a; var s = e + u.yOffset;
            b = b < s ? b : s;
            f = ja.max(f, s + u.height);++l } this.bounds.x = Rc.$IK(c, this.bounds.width, d);
        this.bounds.y =
            b;
        this.bounds.height = f - b
    };
    g["kit.display.TextLayout"] = Rc;
    Rc.__name__ = ["kit", "display", "TextLayout"];
    Rc.$IK = function(a, b, c) { switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2) } };
    Rc.prototype = { draw: function(a) { for (var b = 0, c = 0, d = this.$DK.length; c < d;) { var e = this.$DK[c];
                10 == e.charCode ? b += this.$HK : e.draw(a, this.$GK[c], b);++c } }, __class__: Rc };
    var hd = function(a) { this.$LK = a;
        this.$NK = new Ra("([A-Za-z]+)(.*)", "");
        this.$OK = new Ra('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "") };
    g.$Cy = hd;
    hd.__name__ = ["$Cy"];
    hd.$PK = function(a, b) { var c = b.matchedPos(); return D.substr(a, c.pos + c.len, a.length) };
    hd.prototype = { $JK: function() { var a = this,
                b = this.$LK; return { next: function() { b = hd.$PK(b, a.$NK);
                    a.$MK = a.$NK.matched(2); return a.$NK.matched(1) }, hasNext: function() { return a.$NK.match(b) } } }, $KK: function() { var a = this,
                b = this.$MK; return { next: function() { b = hd.$PK(b, a.$OK); return new Gi(a.$OK.matched(1), a.$OK.matched(2)) }, hasNext: function() { return a.$OK.match(b) } } }, __class__: hd };
    var Gi = function(a, b) {
        this.$QK = a;
        this.$pH =
            b
    };
    g.$Cz = Gi;
    Gi.__name__ = ["$Cz"];
    Gi.prototype = { $RK: function() { return u.parseInt(this.$pH) }, $SK: function() { return 34 != this.$pH.charCodeAt(0) ? null : D.substr(this.$pH, 1, this.$pH.length - 2) }, __class__: Gi };
    var Ia = function(a) { x.call(this);
        this.texture = a };
    g["kit.display.ImageSprite"] = Ia;
    Ia.__name__ = ["kit", "display", "ImageSprite"];
    Ia.__super__ = x;
    Ia.prototype = m(x.prototype, {
        draw: function(a) { null != this.texture && a.drawTexture(this.texture, 0, 0) },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() :
                0
        },
        getNaturalHeight: function() { return null != this.texture ? this.texture.get_height() : 0 },
        __class__: Ia
    });
    var cc = g["kit.display.Orientation"] = { __ename__: ["kit", "display", "Orientation"], __constructs__: ["Portrait", "Landscape"] };
    cc.Portrait = ["Portrait", 0];
    cc.Portrait.toString = l;
    cc.Portrait.__enum__ = cc;
    cc.Landscape = ["Landscape", 1];
    cc.Landscape.toString = l;
    cc.Landscape.__enum__ = cc;
    var Xb = function() { this.$YK = this.$ZK = this.$aK = null;
        this.$XK = new X(1);
        this.$WK = new X(1);
        this.$VK = new X(1);
        this.$TK = this.$UK = null };
    g.$C$ = Xb;
    Xb.__name__ = ["$C$"];
    Xb.prototype = { __class__: Xb };
    var qg = function() {};
    g["kit.display.Texture"] = qg;
    qg.__name__ = ["kit", "display", "Texture"];
    qg.__interfaces__ = [kc];
    qg.prototype = { __class__: qg, __properties__: { get_graphics: "get_graphics", get_height: "get_height", get_width: "get_width" } };
    var uj = function() {};
    g["kit.display.SubTexture"] = uj;
    uj.__name__ = ["kit", "display", "SubTexture"];
    uj.__interfaces__ = [qg];
    var hb = function(a, b) {
        null == b && (b = "");
        this.$gK = null;
        var c = this;
        x.call(this);
        this.$FK = a;
        this.$eK = b;
        this.$fK = Va.Left;
        this.$B |= 256;
        var d = function(a, b) { c.$B |= 256 };
        this.wrapWidth = new X(0, d);
        this.letterSpacing = new X(0, d);
        this.lineSpacing = new X(0, d)
    };
    g["kit.display.TextSprite"] = hb;
    hb.__name__ = ["kit", "display", "TextSprite"];
    hb.__super__ = x;
    hb.prototype = m(x.prototype, {
        draw: function(a) { this.$dK();
            this.$gK.draw(a) },
        getNaturalWidth: function() { this.$dK(); return 0 < this.wrapWidth.$pH ? this.wrapWidth.$pH : this.$gK.bounds.width },
        getNaturalHeight: function() {
            this.$dK();
            var a = this.$gK.lines * (this.$FK.lineHeight + this.lineSpacing.$pH),
                b = this.$gK.bounds.height;
            return a > b ? a : b
        },
        containsLocal: function(a, b) { this.$dK(); return this.$gK.bounds.contains(a, b) },
        set_text: function(a) { a != this.$eK && (this.$eK = a, this.$B |= 256); return a },
        set_font: function(a) { a != this.$FK && (this.$FK = a, this.$B |= 256); return a },
        set_align: function(a) { a != this.$fK && (this.$fK = a, this.$B |= 256); return a },
        $dK: function() { 0 != (this.$B & 256) && (this.$B &= -257, this.$gK = this.$FK.layoutText(this.$eK, this.$fK, this.wrapWidth.$pH, this.letterSpacing.$pH, this.lineSpacing.$pH)) },
        onUpdate: function(a) {
            x.prototype.onUpdate.call(this,
                a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: hb,
        __properties__: m(x.prototype.__properties__, { set_align: "set_align", set_font: "set_font", set_text: "set_text" })
    });
    var Aa = g["kit.display.TextureFormat"] = { __ename__: ["kit", "display", "TextureFormat"], __constructs__: ["RGBA", "RGBA_4444", "RGB", "RGB_565", "COMPRESSED"] };
    Aa.RGBA = ["RGBA", 0];
    Aa.RGBA.toString = l;
    Aa.RGBA.__enum__ = Aa;
    Aa.RGBA_4444 = ["RGBA_4444", 1];
    Aa.RGBA_4444.toString = l;
    Aa.RGBA_4444.__enum__ = Aa;
    Aa.RGB = ["RGB", 2];
    Aa.RGB.toString = l;
    Aa.RGB.__enum__ = Aa;
    Aa.RGB_565 = ["RGB_565", 3];
    Aa.RGB_565.toString = l;
    Aa.RGB_565.__enum__ = Aa;
    Aa.COMPRESSED = ["COMPRESSED", 4];
    Aa.COMPRESSED.toString = l;
    Aa.COMPRESSED.__enum__ = Aa;
    var xi = function(a, b) {
        this.$iK = null;
        this.items = new O;
        var c = b.lastIndexOf("/"),
            c = D.substr(b, 0, c + 1);
        this.$nI = a.getFile(b + ".json");
        for (var d = 0, e = this.$nI.toJson().atlases; d < e.length;) {
            var f = e[d];
            ++d;
            for (var k = Pa.removeFileExtension(f.image), k = a.getTexture(c + k), g = 0, f = f.items; g < f.length;) {
                var h = f[g];
                ++g;
                h = new Hi(this,
                    k, h);
                this.items.set(h.name, h)
            }
        }
    };
    g["kit.display.TexturePacker"] = xi;
    xi.__name__ = ["kit", "display", "TexturePacker"];
    xi.prototype = {
        getItem: function(a, b) { return this.items.get(a) },
        createSprite: function(a, b) { null == b && (b = !0); var c = this.getItem(a, b); return null != c ? c.createSprite() : null },
        disposeFiles: function() { this.$nI.dispose(); return this },
        toLibrary: function() {
            var a = this;
            if (null == this.$iK) {
                for (var b = new O, c = this.items.iterator(); c.hasNext();) {
                    var d = c.next(),
                        e = new Ra("^(.*?)(\\W*\\d+)$", "");
                    if (e.match(d.name)) {
                        var d =
                            e.matched(1),
                            e = e.matched(2),
                            f;
                        f = null != Ea[d] ? b.getReserved(d) : b.h[d];
                        if (null == f) { var k = f = [];
                            null != Ea[d] ? b.setReserved(d, k) : b.h[d] = k } f.push(e)
                    }
                }
                for (var g = new Ra("\\D", "g"), c = [], d = b.keys(); d.hasNext();) {
                    e = [d.next()];
                    f = null != Ea[e[0]] ? b.getReserved(e[0]) : b.h[e[0]];
                    f.sort(function() { return function(a, b) { var c = u.parseInt(g.replace(a, "")),
                                d = u.parseInt(g.replace(b, "")); return c - d } }());
                    for (var k = f.map(function(b) { return function(c) { return a.items.get(b[0] + c).texture } }(e)), k = new Ii(e[0], k), h = 0, l = f.length; h <
                        l;) { var m = h++,
                            n = k.frames[m],
                            m = this.items.get(e[0] + f[m]);
                        n.anchorX = m.anchorX;
                        n.anchorY = m.anchorY } c.push(k)
                }
                this.$iK = cd.fromFlipbooks(c)
            }
            return this.$iK
        },
        __class__: xi
    };
    var Hi = function(a, b, c) { this.name = null;
        this.packer = a;
        this.name = c.name;
        a = c.frame;
        this.texture = b.subTexture(a[0], a[1], a[2], a[3]);
        this.anchorX = c.pivot[0];
        this.anchorY = c.pivot[1] };
    g["kit.display.TexturePackerItem"] = Hi;
    Hi.__name__ = ["kit", "display", "TexturePackerItem"];
    Hi.prototype = {
        createSprite: function() {
            return (new Ia(this.texture)).setAnchor(this.anchorX,
                this.anchorY)
        },
        __class__: Hi
    };
    var rg = function() {};
    g["kit.display.VectorFont"] = rg;
    rg.__name__ = ["kit", "display", "VectorFont"];
    rg.__interfaces__ = [kc];
    rg.prototype = { __class__: rg };
    var Ji = function() { this.align = Va.Left;
        this.strokeWidth = this.lineSpacing = this.wrapWidth = 0;
        this.strokeColor = 16777215;
        this.color = 0;
        this.bold = this.italic = !1;
        this.fontSize = 18 };
    g["kit.display.TextStyle"] = Ji;
    Ji.__name__ = ["kit", "display", "TextStyle"];
    Ji.prototype = { __class__: Ji };
    var gd = function(a, b) {
        null == b && (b = "");
        this.$jJ = null;
        this.$fK =
            Va.Left;
        this.$nK = 16777215;
        this.$qJ = 0;
        this.$lK = this.$mK = !1;
        var c = this;
        x.call(this);
        this.$FK = a;
        this.$eK = b;
        this.$B |= 256;
        var d = function(a, b) { c.$B |= 256 };
        this.fontSize = new X(18, d);
        this.strokeWidth = new X(0, d);
        this.wrapWidth = new X(0, d);
        this.lineSpacing = new X(0, d)
    };
    g["kit.display.VectorTextSprite"] = gd;
    gd.__name__ = ["kit", "display", "VectorTextSprite"];
    gd.__super__ = x;
    gd.prototype = m(x.prototype, {
        getNaturalWidth: function() { this.$kK(); return null != this.$jJ ? this.$jJ.get_width() : 0 },
        getNaturalHeight: function() {
            this.$kK();
            return null != this.$jJ ? this.$jJ.get_height() : 0
        },
        containsLocal: function(a, b) { this.$kK(); if (null == this.$jJ) return !1; var c = this.$jK(); return a >= c && a <= c + this.$jJ.get_width() && 0 <= b && b <= this.$jJ.get_height() },
        draw: function(a) { this.$kK();
            null != this.$jJ && a.drawTexture(this.$jJ, this.$jK(), 0) },
        onUpdate: function(a) { x.prototype.onUpdate.call(this, a);
            this.fontSize.update(a);
            this.strokeWidth.update(a) },
        dispose: function() {
            x.prototype.dispose.call(this);
            null != this.$jJ && (this.$jJ.dispose(), this.$jJ = null);
            this.$B |=
                256
        },
        $jK: function() { if (0 < this.wrapWidth.$pH) return 0; switch (this.$fK[1]) {
                case 0:
                    return 0;
                case 1:
                    return -this.$jJ.get_width() / 2;
                case 2:
                    return -this.$jJ.get_width() } },
        $kK: function() {
            if (0 != (this.$B & 256) && (this.$B &= -257, null != this.$jJ && (this.$jJ.dispose(), this.$jJ = null), 0 < this.$eK.length)) {
                var a = new Ji;
                a.fontSize = this.fontSize.$pH;
                a.bold = this.$lK;
                a.italic = this.$mK;
                a.color = this.$qJ;
                a.strokeColor = this.$nK;
                a.strokeWidth = this.strokeWidth.$pH;
                a.lineSpacing = this.lineSpacing.$pH;
                a.wrapWidth = this.wrapWidth.$pH;
                a.align = this.$fK;
                this.$jJ = this.$FK.createTexture(this.$eK, a)
            }
        },
        set_text: function(a) { a != this.$eK && (this.$eK = a, this.$B |= 256); return a },
        set_bold: function(a) { a != this.$lK && (this.$lK = a, this.$B |= 256); return a },
        set_italic: function(a) { a != this.$mK && (this.$mK = a, this.$B |= 256); return a },
        set_color: function(a) { a != this.$qJ && (this.$qJ = a, this.$B |= 256); return a },
        set_strokeColor: function(a) { a != this.$nK && (this.$nK = a, this.$B |= 256); return a },
        set_align: function(a) { a != this.$fK && (this.$fK = a, this.$B |= 256); return a },
        __class__: gd,
        __properties__: m(x.prototype.__properties__, { set_align: "set_align", set_strokeColor: "set_strokeColor", set_color: "set_color", set_italic: "set_italic", set_bold: "set_bold", set_text: "set_text" })
    });
    var h = g["kit.input.Key"] = { __ename__: ["kit", "input", "Key"], __constructs__: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Number0 Number1 Number2 Number3 Number4 Number5 Number6 Number7 Number8 Number9 Numpad0 Numpad1 Numpad2 Numpad3 Numpad4 Numpad5 Numpad6 Numpad7 Numpad8 Numpad9 NumpadAdd NumpadDecimal NumpadDivide NumpadEnter NumpadMultiply NumpadSubtract F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 F13 F14 F15 Left Up Right Down Alt Backquote Backslash Backspace CapsLock Comma Command Control Delete End Enter Equals Escape Home Insert LeftBracket Minus PageDown PageUp Period Quote RightBracket Semicolon Shift Slash Space Tab Menu Search Unknown".split(" ") };
    h.A = ["A", 0];
    h.A.toString = l;
    h.A.__enum__ = h;
    h.B = ["B", 1];
    h.B.toString = l;
    h.B.__enum__ = h;
    h.C = ["C", 2];
    h.C.toString = l;
    h.C.__enum__ = h;
    h.D = ["D", 3];
    h.D.toString = l;
    h.D.__enum__ = h;
    h.E = ["E", 4];
    h.E.toString = l;
    h.E.__enum__ = h;
    h.F = ["F", 5];
    h.F.toString = l;
    h.F.__enum__ = h;
    h.G = ["G", 6];
    h.G.toString = l;
    h.G.__enum__ = h;
    h.H = ["H", 7];
    h.H.toString = l;
    h.H.__enum__ = h;
    h.I = ["I", 8];
    h.I.toString = l;
    h.I.__enum__ = h;
    h.J = ["J", 9];
    h.J.toString = l;
    h.J.__enum__ = h;
    h.K = ["K", 10];
    h.K.toString = l;
    h.K.__enum__ = h;
    h.L = ["L", 11];
    h.L.toString = l;
    h.L.__enum__ =
        h;
    h.M = ["M", 12];
    h.M.toString = l;
    h.M.__enum__ = h;
    h.N = ["N", 13];
    h.N.toString = l;
    h.N.__enum__ = h;
    h.O = ["O", 14];
    h.O.toString = l;
    h.O.__enum__ = h;
    h.P = ["P", 15];
    h.P.toString = l;
    h.P.__enum__ = h;
    h.Q = ["Q", 16];
    h.Q.toString = l;
    h.Q.__enum__ = h;
    h.R = ["R", 17];
    h.R.toString = l;
    h.R.__enum__ = h;
    h.S = ["S", 18];
    h.S.toString = l;
    h.S.__enum__ = h;
    h.T = ["T", 19];
    h.T.toString = l;
    h.T.__enum__ = h;
    h.U = ["U", 20];
    h.U.toString = l;
    h.U.__enum__ = h;
    h.V = ["V", 21];
    h.V.toString = l;
    h.V.__enum__ = h;
    h.W = ["W", 22];
    h.W.toString = l;
    h.W.__enum__ = h;
    h.X = ["X", 23];
    h.X.toString =
        l;
    h.X.__enum__ = h;
    h.Y = ["Y", 24];
    h.Y.toString = l;
    h.Y.__enum__ = h;
    h.Z = ["Z", 25];
    h.Z.toString = l;
    h.Z.__enum__ = h;
    h.Number0 = ["Number0", 26];
    h.Number0.toString = l;
    h.Number0.__enum__ = h;
    h.Number1 = ["Number1", 27];
    h.Number1.toString = l;
    h.Number1.__enum__ = h;
    h.Number2 = ["Number2", 28];
    h.Number2.toString = l;
    h.Number2.__enum__ = h;
    h.Number3 = ["Number3", 29];
    h.Number3.toString = l;
    h.Number3.__enum__ = h;
    h.Number4 = ["Number4", 30];
    h.Number4.toString = l;
    h.Number4.__enum__ = h;
    h.Number5 = ["Number5", 31];
    h.Number5.toString = l;
    h.Number5.__enum__ =
        h;
    h.Number6 = ["Number6", 32];
    h.Number6.toString = l;
    h.Number6.__enum__ = h;
    h.Number7 = ["Number7", 33];
    h.Number7.toString = l;
    h.Number7.__enum__ = h;
    h.Number8 = ["Number8", 34];
    h.Number8.toString = l;
    h.Number8.__enum__ = h;
    h.Number9 = ["Number9", 35];
    h.Number9.toString = l;
    h.Number9.__enum__ = h;
    h.Numpad0 = ["Numpad0", 36];
    h.Numpad0.toString = l;
    h.Numpad0.__enum__ = h;
    h.Numpad1 = ["Numpad1", 37];
    h.Numpad1.toString = l;
    h.Numpad1.__enum__ = h;
    h.Numpad2 = ["Numpad2", 38];
    h.Numpad2.toString = l;
    h.Numpad2.__enum__ = h;
    h.Numpad3 = ["Numpad3", 39];
    h.Numpad3.toString =
        l;
    h.Numpad3.__enum__ = h;
    h.Numpad4 = ["Numpad4", 40];
    h.Numpad4.toString = l;
    h.Numpad4.__enum__ = h;
    h.Numpad5 = ["Numpad5", 41];
    h.Numpad5.toString = l;
    h.Numpad5.__enum__ = h;
    h.Numpad6 = ["Numpad6", 42];
    h.Numpad6.toString = l;
    h.Numpad6.__enum__ = h;
    h.Numpad7 = ["Numpad7", 43];
    h.Numpad7.toString = l;
    h.Numpad7.__enum__ = h;
    h.Numpad8 = ["Numpad8", 44];
    h.Numpad8.toString = l;
    h.Numpad8.__enum__ = h;
    h.Numpad9 = ["Numpad9", 45];
    h.Numpad9.toString = l;
    h.Numpad9.__enum__ = h;
    h.NumpadAdd = ["NumpadAdd", 46];
    h.NumpadAdd.toString = l;
    h.NumpadAdd.__enum__ = h;
    h.NumpadDecimal = ["NumpadDecimal", 47];
    h.NumpadDecimal.toString = l;
    h.NumpadDecimal.__enum__ = h;
    h.NumpadDivide = ["NumpadDivide", 48];
    h.NumpadDivide.toString = l;
    h.NumpadDivide.__enum__ = h;
    h.NumpadEnter = ["NumpadEnter", 49];
    h.NumpadEnter.toString = l;
    h.NumpadEnter.__enum__ = h;
    h.NumpadMultiply = ["NumpadMultiply", 50];
    h.NumpadMultiply.toString = l;
    h.NumpadMultiply.__enum__ = h;
    h.NumpadSubtract = ["NumpadSubtract", 51];
    h.NumpadSubtract.toString = l;
    h.NumpadSubtract.__enum__ = h;
    h.F1 = ["F1", 52];
    h.F1.toString = l;
    h.F1.__enum__ = h;
    h.F2 = ["F2", 53];
    h.F2.toString =
        l;
    h.F2.__enum__ = h;
    h.F3 = ["F3", 54];
    h.F3.toString = l;
    h.F3.__enum__ = h;
    h.F4 = ["F4", 55];
    h.F4.toString = l;
    h.F4.__enum__ = h;
    h.F5 = ["F5", 56];
    h.F5.toString = l;
    h.F5.__enum__ = h;
    h.F6 = ["F6", 57];
    h.F6.toString = l;
    h.F6.__enum__ = h;
    h.F7 = ["F7", 58];
    h.F7.toString = l;
    h.F7.__enum__ = h;
    h.F8 = ["F8", 59];
    h.F8.toString = l;
    h.F8.__enum__ = h;
    h.F9 = ["F9", 60];
    h.F9.toString = l;
    h.F9.__enum__ = h;
    h.F10 = ["F10", 61];
    h.F10.toString = l;
    h.F10.__enum__ = h;
    h.F11 = ["F11", 62];
    h.F11.toString = l;
    h.F11.__enum__ = h;
    h.F12 = ["F12", 63];
    h.F12.toString = l;
    h.F12.__enum__ = h;
    h.F13 = ["F13", 64];
    h.F13.toString = l;
    h.F13.__enum__ = h;
    h.F14 = ["F14", 65];
    h.F14.toString = l;
    h.F14.__enum__ = h;
    h.F15 = ["F15", 66];
    h.F15.toString = l;
    h.F15.__enum__ = h;
    h.Left = ["Left", 67];
    h.Left.toString = l;
    h.Left.__enum__ = h;
    h.Up = ["Up", 68];
    h.Up.toString = l;
    h.Up.__enum__ = h;
    h.Right = ["Right", 69];
    h.Right.toString = l;
    h.Right.__enum__ = h;
    h.Down = ["Down", 70];
    h.Down.toString = l;
    h.Down.__enum__ = h;
    h.Alt = ["Alt", 71];
    h.Alt.toString = l;
    h.Alt.__enum__ = h;
    h.Backquote = ["Backquote", 72];
    h.Backquote.toString = l;
    h.Backquote.__enum__ = h;
    h.Backslash = ["Backslash", 73];
    h.Backslash.toString = l;
    h.Backslash.__enum__ = h;
    h.Backspace = ["Backspace", 74];
    h.Backspace.toString = l;
    h.Backspace.__enum__ = h;
    h.CapsLock = ["CapsLock", 75];
    h.CapsLock.toString = l;
    h.CapsLock.__enum__ = h;
    h.Comma = ["Comma", 76];
    h.Comma.toString = l;
    h.Comma.__enum__ = h;
    h.Command = ["Command", 77];
    h.Command.toString = l;
    h.Command.__enum__ = h;
    h.Control = ["Control", 78];
    h.Control.toString = l;
    h.Control.__enum__ = h;
    h.Delete = ["Delete", 79];
    h.Delete.toString = l;
    h.Delete.__enum__ = h;
    h.End = ["End", 80];
    h.End.toString = l;
    h.End.__enum__ =
        h;
    h.Enter = ["Enter", 81];
    h.Enter.toString = l;
    h.Enter.__enum__ = h;
    h.Equals = ["Equals", 82];
    h.Equals.toString = l;
    h.Equals.__enum__ = h;
    h.Escape = ["Escape", 83];
    h.Escape.toString = l;
    h.Escape.__enum__ = h;
    h.Home = ["Home", 84];
    h.Home.toString = l;
    h.Home.__enum__ = h;
    h.Insert = ["Insert", 85];
    h.Insert.toString = l;
    h.Insert.__enum__ = h;
    h.LeftBracket = ["LeftBracket", 86];
    h.LeftBracket.toString = l;
    h.LeftBracket.__enum__ = h;
    h.Minus = ["Minus", 87];
    h.Minus.toString = l;
    h.Minus.__enum__ = h;
    h.PageDown = ["PageDown", 88];
    h.PageDown.toString = l;
    h.PageDown.__enum__ =
        h;
    h.PageUp = ["PageUp", 89];
    h.PageUp.toString = l;
    h.PageUp.__enum__ = h;
    h.Period = ["Period", 90];
    h.Period.toString = l;
    h.Period.__enum__ = h;
    h.Quote = ["Quote", 91];
    h.Quote.toString = l;
    h.Quote.__enum__ = h;
    h.RightBracket = ["RightBracket", 92];
    h.RightBracket.toString = l;
    h.RightBracket.__enum__ = h;
    h.Semicolon = ["Semicolon", 93];
    h.Semicolon.toString = l;
    h.Semicolon.__enum__ = h;
    h.Shift = ["Shift", 94];
    h.Shift.toString = l;
    h.Shift.__enum__ = h;
    h.Slash = ["Slash", 95];
    h.Slash.toString = l;
    h.Slash.__enum__ = h;
    h.Space = ["Space", 96];
    h.Space.toString =
        l;
    h.Space.__enum__ = h;
    h.Tab = ["Tab", 97];
    h.Tab.toString = l;
    h.Tab.__enum__ = h;
    h.Menu = ["Menu", 98];
    h.Menu.toString = l;
    h.Menu.__enum__ = h;
    h.Search = ["Search", 99];
    h.Search.toString = l;
    h.Search.__enum__ = h;
    h.Unknown = function(a) { a = ["Unknown", 100, a];
        a.__enum__ = h;
        a.toString = l; return a };
    var Ki = function() { this.$oK(0, null) };
    g["kit.input.KeyboardEvent"] = Ki;
    Ki.__name__ = ["kit", "input", "KeyboardEvent"];
    Ki.prototype = { $oK: function(a, b) { this.id = a;
            this.key = b }, __class__: Ki };
    var $a = g["kit.input.MouseButton"] = {
        __ename__: ["kit", "input",
            "MouseButton"
        ],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    $a.Left = ["Left", 0];
    $a.Left.toString = l;
    $a.Left.__enum__ = $a;
    $a.Middle = ["Middle", 1];
    $a.Middle.toString = l;
    $a.Middle.__enum__ = $a;
    $a.Right = ["Right", 2];
    $a.Right.toString = l;
    $a.Right.__enum__ = $a;
    $a.Unknown = function(a) { a = ["Unknown", 3, a];
        a.__enum__ = $a;
        a.toString = l; return a };
    var Wa = g["kit.input.MouseCursor"] = { __ename__: ["kit", "input", "MouseCursor"], __constructs__: ["Default", "Button", "None"] };
    Wa.Default = ["Default", 0];
    Wa.Default.toString = l;
    Wa.Default.__enum__ =
        Wa;
    Wa.Button = ["Button", 1];
    Wa.Button.toString = l;
    Wa.Button.__enum__ = Wa;
    Wa.None = ["None", 2];
    Wa.None.toString = l;
    Wa.None.__enum__ = Wa;
    var Li = function() { this.$oK(0, 0, 0, null) };
    g["kit.input.MouseEvent"] = Li;
    Li.__name__ = ["kit", "input", "MouseEvent"];
    Li.prototype = { $oK: function(a, b, c, d) { this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = d }, __class__: Li };
    var sg = g["kit.input.EventSource"] = { __ename__: ["kit", "input", "EventSource"], __constructs__: ["Mouse", "Touch"] };
    sg.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = sg;
        a.toString =
            l;
        return a
    };
    sg.Touch = function(a) { a = ["Touch", 1, a];
        a.__enum__ = sg;
        a.toString = l; return a };
    var Mi = function() { this.$oK(0, 0, 0, null, null) };
    g["kit.input.PointerEvent"] = Mi;
    Mi.__name__ = ["kit", "input", "PointerEvent"];
    Mi.prototype = { $oK: function(a, b, c, d, e) { this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = d;
            this.source = e;
            this.$pK = !1 }, __class__: Mi };
    var Ni = function(a) { this.id = a;
        this.$qK = sg.Touch(this) };
    g["kit.input.TouchPoint"] = Ni;
    Ni.__name__ = ["kit", "input", "TouchPoint"];
    Ni.prototype = {
        $oK: function(a, b) {
            this.viewX = a;
            this.viewY =
                b
        },
        __class__: Ni
    };
    var ja = function() {};
    g["kit.math.FMath"] = ja;
    ja.__name__ = ["kit", "math", "FMath"];
    ja.max = function(a, b) { return a > b ? a : b };
    ja.min = function(a, b) { return a < b ? a : b };
    ja.clamp = function(a, b, c) { return a < b ? b : a > c ? c : a };
    var Ab = function() { this.identity() };
    g["kit.math.Matrix"] = Ab;
    Ab.__name__ = ["kit", "math", "Matrix"];
    Ab.multiply = function(a, b, c) {
        null == c && (c = new Ab);
        var d = a.m00 * b.m00 + a.m01 * b.m10,
            e = a.m00 * b.m01 + a.m01 * b.m11,
            f = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = d;
        c.m01 = e;
        c.m02 = f;
        d = a.m10 * b.m00 + a.m11 * b.m10;
        e = a.m10 *
            b.m01 + a.m11 * b.m11;
        f = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = d;
        c.m11 = e;
        c.m12 = f;
        return c
    };
    Ab.prototype = {
        set: function(a, b, c, d, e, f) { this.m00 = a;
            this.m01 = c;
            this.m02 = e;
            this.m10 = b;
            this.m11 = d;
            this.m12 = f },
        identity: function() { this.set(1, 0, 0, 1, 0, 0) },
        compose: function(a, b, c, d, e) { var f = Math.sin(e);
            e = Math.cos(e);
            this.set(e * c, f * c, -f * d, e * d, a, b) },
        translate: function(a, b) { this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a },
        invert: function() {
            var a = this.determinant();
            if (0 == a) return !1;
            this.set(this.m11 / a, -this.m01 /
                a, -this.m10 / a, this.m00 / a, (this.m01 * this.m12 - this.m11 * this.m02) / a, (this.m10 * this.m02 - this.m00 * this.m12) / a);
            return !0
        },
        transform: function(a, b, c) { null == c && (c = new ka);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12; return c },
        transformArray: function(a, b, c) { for (var d = 0; d < b;) { var e = a[d],
                    f = a[d + 1];
                c[d++] = e * this.m00 + f * this.m01 + this.m02;
                c[d++] = e * this.m10 + f * this.m11 + this.m12 } },
        determinant: function() { return this.m00 * this.m11 - this.m01 * this.m10 },
        inverseTransform: function(a, b, c) {
            var d = this.determinant();
            if (0 == d) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / d;
            c.y = (b * this.m00 - a * this.m10) / d;
            return !0
        },
        clone: function(a) { null == a && (a = new Ab);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12); return a },
        __class__: Ab
    };
    var id = function() {};
    g["kit.movie.Symbol"] = id;
    id.__name__ = ["kit", "movie", "Symbol"];
    id.prototype = { __class__: id };
    var Vd = function(a, b) {
        this.$mF = a.symbol;
        var c = a.rect;
        this.texture = b.subTexture(c[0], c[1], c[2], c[3]);
        c = a.origin;
        null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY =
            this.anchorX = 0;
        c = a.scale;
        null != c ? (this.scaleX = c[0], this.scaleY = c[1]) : this.scaleY = this.scaleX = 1
    };
    g["kit.movie.BitmapSymbol"] = Vd;
    Vd.__name__ = ["kit", "movie", "BitmapSymbol"];
    Vd.__interfaces__ = [id];
    Vd.prototype = { createSprite: function() { var a = new Ia(this.texture);
            a.setAnchor(this.anchorX, this.anchorY);
            a.setScaleXY(this.scaleX, this.scaleY); return a }, __class__: Vd };
    var Ii = function(a, b) { this.name = a; var c = 1 / b.length;
        this.frames = []; for (var d = 0; d < b.length;) { var e = b[d];++d;
            this.frames.push(new Oi(e, c)) } };
    g["kit.movie.Flipbook"] =
        Ii;
    Ii.__name__ = ["kit", "movie", "Flipbook"];
    Ii.prototype = { __class__: Ii };
    var Oi = function(a, b) { this.label = null;
        this.anchorX = this.anchorY = 0;
        this.texture = a;
        this.duration = b };
    g["kit.movie.FlipbookFrame"] = Oi;
    Oi.__name__ = ["kit", "movie", "FlipbookFrame"];
    Oi.prototype = { $rK: function() { return new tg(this) }, __class__: Oi };
    var tg = function(a) { this.$jJ = a.texture;
        this.$sK = a.anchorX;
        this.$tK = a.anchorY };
    g.$CAB = tg;
    tg.__name__ = ["$CAB"];
    tg.__interfaces__ = [id];
    tg.prototype = {
        createSprite: function() {
            var a = new Ia(this.$jJ);
            a.setAnchor(this.$sK,
                this.$tK);
            return a
        },
        __class__: tg
    };
    var cd = function(a, b) {
        this.sounds = new O;
        this.scenes = [];
        var c = this;
        this.$nI = a.getFile(b + "/library.json");
        var d = this.$nI.toJson();
        this.$uK = new O;
        this.frameRate = d.frameRate;
        this.backgroundColor = null != d.backgroundColor ? d.backgroundColor : 0;
        this.backgroundAlpha = null != d.backgroundAlpha ? d.backgroundAlpha : 1;
        this.width = null != d.width ? d.width : 0;
        this.height = null != d.height ? d.height : 0;
        this.pixelSnapping = null != d.pixelSnapping ? d.pixelSnapping : !0;
        if (null != d.sounds)
            for (var e = 0, f = d.sounds; e <
                f.length;) { var k = f[e];++e; var g = a.getSound(b + "/" + Pa.removeFileExtension(k.file), !1),
                    k = k.id,
                    g = new Pi(k, g);
                this.sounds.set(k, g) }
        if (null != d.videos)
            for (e = 0, f = d.videos; e < f.length;) k = f[e], ++e, g = a.getVideo(b + "/" + Pa.removeFileExtension(k.file), !1), k = k.id, g = new ug(k, g), this.$uK.set(k, g);
        e = [];
        f = 0;
        for (g = d.movies; f < g.length;) k = g[f], ++f, k = new jd(this, k), e.push(k), this.$uK.set(k.$mF, k);
        if (null != d.scenes)
            for (f = 0, g = d.scenes; f < g.length;) k = g[f], ++f, k = new jd(this, k), e.push(k), this.scenes.push(k);
        d = d.textureGroups[0].atlases;
        for (f = 0; f < d.length;) { k = d[f];++f;
            g = b + "/" + Pa.removeFileExtension(k.file);
            g = a.getTexture(g); if (null != k.mask) { var h = a.getTexture(b + "/" + Pa.removeFileExtension(k.mask)),
                    l = q.$GI.$WH.createTexture(g.get_width(), g.get_height()),
                    m = l.get_graphics();
                m.save();
                m.setBlendMode(la.Copy);
                m.drawTexture(g, 0, 0);
                m.setBlendMode(la.Mask);
                m.drawTexture(h, 0, 0);
                m.restore();
                g.dispose();
                h.dispose();
                g = l } h = 0; for (k = k.textures; h < k.length;) l = k[h], ++h, l = new Vd(l, g), this.$uK.set(l.$mF, l) }
        for (var n = null, d = n = function(a) {
                for (var b = a.keyframes,
                        d = b.length, e = 0; e < d;) { var f = e++,
                        k = b[f]; if (null != k.$nL) { var g = c.$uK.get(k.$nL);
                        k.symbol = g } k.tweened && 1 == k.duration && f + 1 < d && (f = b[f + 1], f.visible && null != f.$nL || (k.visible = !1)) } b = 0;
                for (a = a.childLayers; b < a.length;) d = a[b], ++b, n(d)
            }, f = 0; f < e.length;)
            for (k = e[f], ++f, g = 0, k = k.layers; g < k.length;) h = k[g], ++g, d(h)
    };
    g["kit.movie.Library"] = cd;
    cd.__name__ = ["kit", "movie", "Library"];
    cd.fromFlipbooks = function(a) {
        var b = da.createEmptyInstance(cd);
        b.$uK = new O;
        b.frameRate = 60;
        b.$nI = null;
        for (var c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            for (var e = [], f = 0, k = d.frames; f < k.length;) { var g = k[f];++f;
                e.push({ duration: g.duration * b.frameRate, label: g.label, pivot: [g.anchorX, g.anchorY], ref: "" }) } e = new jd(b, { id: d.name, layers: [{ name: "flipbook", flipbook: !0, keyframes: e }] });
            b.$uK.set(d.name, e);
            e = e.layers[0].keyframes;
            f = 0;
            for (k = d.frames.length; f < k;) g = f++, e[g].$pL(d.frames[g].$rK())
        }
        return b
    };
    cd.prototype = {
        disposeFiles: function() { null != this.$nI && this.$nI.dispose(); return this },
        createSprite: function(a, b) { var c = this.$uK.get(a); return null == c ? null : c.createSprite() },
        createMovie: function(a, b) { null == b && (b = !0); return this.createSprite(a, b) },
        __class__: cd
    };
    var Wd = function(a) { this.$zK = this.$$K = null;
        n.call(this);
        this.$iK = a;
        this.$yK = new F;
        this.movie = new ya(null);
        this.setCache(!0) };
    g["kit.movie.MoviePlayer"] = Wd;
    Wd.__name__ = ["kit", "movie", "MoviePlayer"];
    Wd.__super__ = n;
    Wd.prototype = m(n.prototype, {
        get_entitySlot: function() { return 5 },
        setCache: function(a) { this.$AL = a ? new O : null; return this },
        play: function(a, b) {
            null == b && (b = !0);
            if (b || null == this.$zK || this.$zK.symbol.$mF != a) this.$zK =
                this.$vK(a);
            return this
        },
        loop: function(a, b) { null == b && (b = !0); if (b || null == this.$$K || this.$$K.symbol.$mF != a) this.$zK = null, this.$$K = this.$vK(a); return this },
        onAdded: function() { this.owner.addChild(this.$yK) },
        onRemoved: function() { this.$yK.dispose();
            this.$zK = this.$$K = null;
            this.movie.set__(null) },
        onUpdate: function(a) { null != this.$zK && this.$zK.$GL + a > this.$zK.symbol.duration && (this.$zK = null, this.$xK(this.$$K)) },
        $vK: function(a) {
            var b;
            null != this.$AL ? (b = this.$AL.get(a), null != b ? b.set_position(0) : (b = this.$wK(a),
                this.$AL.set(a, b))) : b = this.$wK(a);
            return this.$xK(b)
        },
        $wK: function(a) { a = this.$iK.createSprite(a, !0);
            null != this.$_K && this.$_K(a); return a },
        $xK: function(a) { this.$yK.add(a); return this.movie.set__(a) },
        __class__: Wd
    });
    var sb = function(a) {
        this.$JL = this.$KL = this.$LL = null;
        this.$IL = 0;
        var b = this;
        x.call(this);
        this.symbol = a;
        this.speed = new X(1);
        this.$FL = Array(a.layers.length);
        for (var c = 0, d = this.$FL.length; c < d;) { var e = c++;
            this.$FL[e] = new kd(a.layers[e]) } this.$GL = 0;
        this.$HL = -1;
        this.$CL(0);
        if (a.button) {
            var f = 0 / a.frameRate,
                k = 1 / a.frameRate,
                g = 2 / a.frameRate,
                h = !1,
                l = !1,
                c = new tb(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308),
                d = 0;
            for (a = a.layers; d < a.length;) e = a[d], ++d, sb.$ML(e, c);
            c.x < c.width && c.y < c.height && (this.$LL = c);
            this.$B |= 4096;
            this.get_pointerDown().connect(function(a) { h = !0;
                b.set_position(g);
                q.$GI.$VH.up.connect(function(a) { h = !1;
                    b.set_position(l ? k : f) }).once() });
            var m = null;
            this.get_pointerIn().connect(function(a) {
                l = !0;
                b.set_position(h ? g : k);
                q.$GI.$UH.get_cursor() == Wa.Default && q.$GI.$UH.set_cursor(Wa.Button);
                null != m && m.dispose();
                m = q.$GI.$VH.move.connect(function(a) { null == b.owner && (m.dispose(), q.$GI.$UH.get_cursor() == Wa.Button && q.$GI.$UH.set_cursor(Wa.Default)) })
            });
            this.get_pointerOut().connect(function(a) { l = !1;
                b.set_position(f);
                q.$GI.$UH.get_cursor() == Wa.Button && q.$GI.$UH.set_cursor(Wa.Default) })
        }
    };
    g["kit.movie.MovieSprite"] = sb;
    sb.__name__ = ["kit", "movie", "MovieSprite"];
    sb.$ML = function(a, b) {
        for (var c = 0, d = a.keyframes; c < d.length;) {
            var e = d[c];
            ++c;
            if (3 == e.index && null != e.symbol) {
                var f = e.symbol.createSprite(),
                    k = f.getNaturalWidth(),
                    g = f.getNaturalHeight();
                if (0 < k && 0 < g) { var h = f.scaleX.$pH * e.scaleX,
                        l = f.scaleY.$pH * e.scaleY,
                        f = f.getLocalMatrix(),
                        m = Math.sin(e.skewX),
                        n = Math.cos(e.skewX),
                        q = Math.sin(e.skewY),
                        u = Math.cos(e.skewY);
                    f.set(u * h, q * h, -m * l, n * l, e.x, e.y);
                    f.translate(-e.pivotX, -e.pivotY);
                    x.$RG(f, 0, 0, b);
                    x.$RG(f, k, 0, b);
                    x.$RG(f, k, g, b);
                    x.$RG(f, 0, g, b) }
            }
        }
        c = 0;
        for (d = a.childLayers; c < d.length;) e = d[c], ++c, sb.$ML(e, b)
    };
    sb.__super__ = x;
    sb.prototype = m(x.prototype, {
        containsLocal: function(a, b) {
            return null != this.$LL && a >= this.$LL.x &&
                a < this.$LL.width && b >= this.$LL.y && b < this.$LL.height
        },
        onAdded: function() { x.prototype.onAdded.call(this); for (var a = 0, b = this.$FL; a < b.length;) { var c = b[a];++a;
                this.owner.addChild(c.$SL) } },
        onRemoved: function() { x.prototype.onRemoved.call(this); for (var a = 0, b = this.$FL; a < b.length;) { var c = b[a];++a;
                this.owner.removeChild(c.$SL) } },
        onUpdate: function(a) {
            x.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            switch (this.$B & 6912) {
                case 0:
                    0 <= this.speed.$pH && (this.$GL += this.speed.$pH * a, this.$GL > this.symbol.duration &&
                        (0 != (this.$B & 1024) ? (this.$GL = this.symbol.duration, this.$B |= 2048) : (this.$GL %= this.symbol.duration, null != this.$JL && this.$JL.emit())));
                    break;
                case 512:
                    this.$B &= -513
            }
            this.$CL(this.$GL * this.symbol.frameRate)
        },
        $CL: function(a) { if (this.$HL != a) { if (a < this.$HL)
                    for (var b = 0, c = this.$FL; b < c.length;) { var d = c[b];++b; if (d.$cL(this.$KL)) return } b = 0; for (c = this.$FL; b < c.length;)
                    if (d = c[b], ++b, d.$eL(a, this.$KL, this.$IL)) return; switch (this.$IL) {
                    case 0:
                        this.$IL = 1; break;
                    case 1:
                    case 2:
                        this.$IL = 3 } this.$HL = a } },
        set_position: function(a) {
            this.setPosition(a,
                !0);
            return a
        },
        setPosition: function(a, b) { var c = ja.clamp(a, 0, this.symbol.duration);
            this.$GL = c;
            this.$IL = 3; var d = c * this.symbol.frameRate,
                e;
            e = b ? 2 : 0; for (var f = 0, k = this.$FL; f < k.length;) { var g = k[f];++f; if (g.$dL(d, this.$KL, e)) return c } this.$HL = d; return c },
        set_paused: function(a) { this.$B = xc.set(this.$B, 256, a); return a },
        get_looped: function() { null == this.$JL && (this.$JL = new bb); return this.$JL },
        set_pixelSnapping: function(a) {
            for (var b = 0, c = this.$FL; b < c.length;) { var d = c[b];++b;
                d.$fL(a) }
            return x.prototype.set_pixelSnapping.call(this,
                a)
        },
        $DL: function(a) { this.$GL = a.firstFrame / this.symbol.frameRate;
            this.set_paused(a.playMode == Xa.SingleFrame);
            this.$B = (this.$B | 512) & -2049;
            a = 0; for (var b = this.$FL; a < b.length;) { var c = b[a];++a;
                c.$DL() } },
        __class__: sb,
        __properties__: m(x.prototype.__properties__, { get_looped: "get_looped", set_paused: "set_paused", set_position: "set_position" })
    });
    var kd = function(a) {
        this.$kL = [];
        this.$YL = null;
        this.$XL = !0;
        this.$VL = -1;
        this.$UL = 0;
        this.$TL = !1;
        this.$WL = a;
        this.$SL = new F;
        if (a.empty) this.$jL = null;
        else {
            this.$jL = Array(a.keyframes.length);
            for (var b = null, c = null, d = 0, e = this.$jL.length; d < e;) { var f = d++,
                    k = a.keyframes[f]; if (null != b && kd.$lL(b, k)) this.$jL[f] = c;
                else if (null != k.symbol) { c = k.symbol.createSprite();
                    this.$jL[f] = c; if (0 < k.firstFrame || k.playMode != Xa.Loop)
                        if (b = c instanceof sb ? c : null, null != b) { switch (k.playMode[1]) {
                                case 1:
                                    b.$B |= 1024; break;
                                case 2:
                                    b.set_paused(!0) } b.$GL = k.firstFrame / b.symbol.frameRate } b = k } else this.$jL[f] = new x } this.$SL.add(this.$jL[0])
        }
        this.$iL = this.$SL;
        if (0 < a.childLayers.length)
            for (e = new x, k = (new F).add(e), k.addChild(this.$SL),
                this.$SL = b = new F, d = new F, a.mask && (this.$YL = new x, this.$YL.set_mask(e), d.add(this.$YL)), b.addChild(d), b.addChild(k), e = 0, a = a.childLayers; e < a.length;) k = a[e], ++e, k = new kd(k), this.$kL.push(k), d.addChild(k.$SL)
    };
    g.$CBB = kd;
    kd.__name__ = ["$CBB"];
    kd.$lL = function(a, b) { if (a.symbol != b.symbol || a.playMode != b.playMode) return !1; switch (a.playMode[1]) {
            case 2:
                return a.firstFrame == b.firstFrame;
            default:
                return a.firstFrame == b.firstFrame || a.firstFrame + a.duration == b.firstFrame } };
    kd.prototype = {
        $bL: function(a, b) {
            null != a.sound &&
                null != a.sound.sound && (this.$SL.emitMessageToParents("MovieSprite.FRAME_SOUND", new vg(this.$SL, a)).handled || a.sound.sound.play());
            if (null != b) { var c = a.label;
                null != c && b.emit(c) } null != a.actions && this.$SL.emitMessageToParents("MovieSprite.FRAME_ACTION", new vg(this.$SL, a))
        },
        $cL: function(a) {
            for (var b = 0, c = this.$kL; b < c.length;) { var d = c[b];++b; if (d.$cL(a)) return !0 }
            if (0 <= this.$VL) {
                for (var b = this.$WL.keyframes, c = this.$UL, d = this.$VL + 1, e = b.length; d < e;) { var f = d++;
                    this.$bL(b[f], a); if (c != this.$UL) return !0 } this.$VL = -1
            }
            this.$TL = !0;
            return !1
        },
        $dL: function(a, b, c) { for (var d = 0, e = this.$kL; d < e.length;) { var f = e[d];++d; if (f.$dL(a, b, c)) return !0 }++this.$UL;
            d = this.$WL.keyframes;
            e = d.length - 1;
            f = this.$VL; for (this.$VL = -1; this.$VL < e && d[this.$VL + 1].index <= a;) ++this.$VL;
            this.$VL != f && (this.$TL = !0); return this.$eL(a, b, c) },
        $eL: function(a, b, c) {
            for (var d = 0, e = this.$kL; d < e.length;) { var f = e[d];++d; if (f.$eL(a, b, c)) return !0 }
            var d = this.$WL.keyframes,
                k = d.length - 1,
                e = this.$VL;
            if (a > this.$WL.frames) this.$VL = k, this.$TL = !0;
            else
                for (; this.$VL < k &&
                    d[this.$VL + 1].index <= a;) ++this.$VL, this.$TL = !0;
            if (null != this.$jL) {
                var f = d[this.$VL],
                    g;
                if (this.$TL) { if (this.$TL = !1, g = this.$jL[this.$VL], g != this.$iL.$MH[3]) { var h;
                        h = g instanceof sb ? g : null;
                        null != h && h.$DL(f);
                        this.$iL.add(g) } } else g = this.$iL.$MH[3];
                if (this.$XL && (h = f.visible && null != f.symbol && a <= this.$WL.frames, g.set_visible(h), null != this.$YL && this.$YL.set_maskEnabled(h), h)) {
                    h = f.x;
                    var l = f.y,
                        m = f.scaleX,
                        n = f.scaleY,
                        q = f.skewX,
                        s = f.skewY,
                        v = f.alpha,
                        t = f.tint;
                    if (f.tweened && this.$VL < k) {
                        var k = (a - f.index) / f.duration,
                            w = f.ease;
                        if (0 != w) { var x;
                            0 > w ? (x = 1 - k, x = 1 - x * x, w = -w) : x = k * k;
                            k = w * x + (1 - w) * k } w = d[this.$VL + 1];
                        h += (w.x - h) * k;
                        l += (w.y - l) * k;
                        m += (w.scaleX - m) * k;
                        n += (w.scaleY - n) * k;
                        q += (w.skewX - q) * k;
                        s += (w.skewY - s) * k;
                        v += (w.alpha - v) * k;
                        w = w.tint;
                        if (16777215 != w || 16777215 != t) { x = (t & 16711680) >> 16; var y = (t & 65280) >> 8,
                                t = t & 255,
                                y = y + ((((w & 65280) >> 8) - y) * k | 0),
                                t = t + (((w & 255) - t) * k | 0),
                                t = x + ((((w & 16711680) >> 16) - x) * k | 0) << 16 | y << 8 | t }
                    }
                    k = u.instance(f.symbol, Vd);
                    null != k && (m *= k.scaleX, n *= k.scaleY);
                    k = g.getLocalMatrix();
                    w = Math.sin(q);
                    q = Math.cos(q);
                    x = Math.sin(s);
                    s = Math.cos(s);
                    k.set(s * m, x * m, -w * n, q * n, h, l);
                    k.translate(-f.pivotX, -f.pivotY);
                    g.alpha.set__(v);
                    g.setTint(t);
                    null == f.blendMode && null == g.get_blendMode() || g.set_blendMode(f.blendMode)
                }
            }
            if (0 != c)
                for (1 == c ? e = -1 : 2 == c && 0 <= this.$VL && d[this.$VL].index == a && (e = this.$VL - 1), a = this.$UL, c = e, e = this.$VL; c < e;)
                    if (f = c++, this.$bL(d[f + 1], b), this.$UL != a) return !0;
            return !1
        },
        $fL: function(a) { for (var b = 0, c = this.$kL; b < c.length;) { var d = c[b];++b;
                d.$fL(a) } if (null != this.$jL)
                for (b = 0, c = this.$jL; b < c.length;) d = c[b], ++b, d.set_pixelSnapping(a) },
        $DL: function() { for (var a = 0, b = this.$kL; a < b.length;) { var c = b[a];++a;
                c.$DL() } this.$TL = !0;
            this.$VL = -1; if (null != this.$jL)
                for (a = 0, b = this.$jL.length; a < b;) { var c = a++,
                        d = u.instance(this.$jL[c], sb);
                    null != d && d.$DL(this.$WL.keyframes[c]) } },
        __class__: kd
    };
    var vg = function(a, b) { this.layer = a;
        this.keyframe = b };
    g["kit.movie.FrameEvent"] = vg;
    vg.__name__ = ["kit", "movie", "FrameEvent"];
    vg.prototype = { __class__: vg };
    var jd = function(a, b) {
        this.$mF = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length);
        for (var c = 0, d = this.layers.length; c < d;) { var e = c++,
                f = new wg(a, b.layers[e]);
            this.frames = Math.max(f.frames, this.frames);
            this.layers[e] = f } this.duration = this.frames / this.frameRate;
        this.button = !0 == b.button
    };
    g["kit.movie.MovieSymbol"] = jd;
    jd.__name__ = ["kit", "movie", "MovieSymbol"];
    jd.__interfaces__ = [id];
    jd.prototype = { createSprite: function() { return new sb(this) }, __class__: jd };
    var wg = function(a, b) {
        this.mask = !1;
        this.childLayers = [];
        this.empty = !0;
        this.name = b.name;
        var c = null;
        this.keyframes = Array(b.keyframes.length);
        for (var d = 0, e = this.keyframes.length; d < e;) { var f = d++,
                c = new Qi(a, b.keyframes[f], c);
            this.keyframes[f] = c;
            this.empty = this.empty && null == c.$nL } this.frames = null != c ? c.index + c.duration : 0;
        null != b.mask && (this.mask = b.mask);
        if (null != b.childLayers)
            for (c = 0, d = b.childLayers; c < d.length;) e = d[c], ++c, e = new wg(a, e), e.frames > this.frames && (this.frames = e.frames), this.childLayers.push(e)
    };
    g["kit.movie.MovieLayer"] = wg;
    wg.__name__ = ["kit", "movie", "MovieLayer"];
    wg.prototype = { __class__: wg };
    var Xa = g["kit.movie.PlayMode"] = {
        __ename__: ["kit",
            "movie", "PlayMode"
        ],
        __constructs__: ["Loop", "PlayOnce", "SingleFrame"]
    };
    Xa.Loop = ["Loop", 0];
    Xa.Loop.toString = l;
    Xa.Loop.__enum__ = Xa;
    Xa.PlayOnce = ["PlayOnce", 1];
    Xa.PlayOnce.toString = l;
    Xa.PlayOnce.__enum__ = Xa;
    Xa.SingleFrame = ["SingleFrame", 2];
    Xa.SingleFrame.toString = l;
    Xa.SingleFrame.__enum__ = Xa;
    var Qi = function(a, b, c) {
        this.actions = this.sound = null;
        this.firstFrame = 0;
        this.playMode = Xa.Loop;
        this.blendMode = null;
        this.ease = 0;
        this.visible = this.tweened = !0;
        this.tint = 16777215;
        this.alpha = 1;
        this.skewX = this.skewY = this.pivotX =
            this.pivotY = 0;
        this.scaleX = this.scaleY = 1;
        this.x = this.y = 0;
        this.symbol = this.instanceName = null;
        this.index = null != c ? c.index + c.duration : 0;
        this.duration = b.duration;
        this.label = b.label;
        this.$nL = b.ref;
        c = b.loc;
        null != c && (this.x = c[0], this.y = c[1]);
        c = b.scale;
        null != c && (this.scaleX = c[0], this.scaleY = c[1]);
        c = b.skew;
        null != c && (this.skewX = c[0], this.skewY = c[1]);
        c = b.pivot;
        null != c && (this.pivotX = c[0], this.pivotY = c[1]);
        null != b.alpha && (this.alpha = b.alpha);
        null != b.tint && (this.tint = b.tint);
        null != b.visible && (this.visible = b.visible);
        null != b.tweened && (this.tweened = b.tweened);
        null != b.ease && (this.ease = b.ease);
        if (null != b.blendMode)
            if (c = b.blendMode, null != c) switch (c) {
                case "add":
                    this.blendMode = la.Add; break;
                case "multiply":
                    this.blendMode = la.Multiply; break;
                case "screen":
                    this.blendMode = la.Screen; break;
                case "layer":
                    this.blendMode = la.Mask; break;
                default:
                    this.blendMode = null } else this.blendMode = null;
        null != b.firstFrame && (this.firstFrame = b.firstFrame);
        if (null != b.playMode)
            if (c = b.playMode, null != c) switch (c) {
                case "stop":
                    this.playMode = Xa.SingleFrame;
                    break;
                case "once":
                    this.playMode = Xa.PlayOnce;
                    break;
                default:
                    this.playMode = Xa.Loop
            } else this.playMode = Xa.Loop;
        null != b.actions && (this.actions = b.actions);
        null != b.sound && (this.sound = a.sounds.get(b.sound));
        null != b.refName && (this.instanceName = b.refName)
    };
    g["kit.movie.MovieKeyframe"] = Qi;
    Qi.__name__ = ["kit", "movie", "MovieKeyframe"];
    Qi.prototype = { $pL: function(a) { this.symbol = a }, __class__: Qi };
    var Pi = function(a, b) { this.name = a;
        this.sound = b };
    g["kit.movie.SoundSymbol"] = Pi;
    Pi.__name__ = ["kit", "movie", "SoundSymbol"];
    Pi.prototype = { __class__: Pi };
    var ug = function(a, b) { this.$mF = a;
        this.video = b };
    g["kit.movie.VideoSymbol"] = ug;
    ug.__name__ = ["kit", "movie", "VideoSymbol"];
    ug.__interfaces__ = [id];
    ug.prototype = { createSprite: function() { return new xg(this) }, __class__: ug };
    var Cc = function(a) { x.call(this);
        this.$qL = a };
    g["kit.video.VideoSprite"] = Cc;
    Cc.__name__ = ["kit", "video", "VideoSprite"];
    Cc.__super__ = x;
    Cc.prototype = m(x.prototype, {
        draw: function(a) { null != this.$qL && a.drawTexture(this.$qL.get_texture(), 0, 0) },
        getNaturalWidth: function() {
            return null !=
                this.$qL ? this.$qL.get_video().get_width() : 0
        },
        getNaturalHeight: function() { return null != this.$qL ? this.$qL.get_video().get_height() : 0 },
        dispose: function() { x.prototype.dispose.call(this);
            this.set_playback(null) },
        set_playback: function(a) { null != this.$qL && this.$qL.dispose(); return this.$qL = a },
        __class__: Cc,
        __properties__: m(x.prototype.__properties__, { set_playback: "set_playback" })
    });
    var xg = function(a) { Cc.call(this, null);
        this.$rL = a };
    g.$CDB = xg;
    xg.__name__ = ["$CDB"];
    xg.__super__ = Cc;
    xg.prototype = m(Cc.prototype, { onAdded: function() { Cc.prototype.onAdded.call(this);
            this.set_playback(this.$rL.video.play()) }, onRemoved: function() { Cc.prototype.onRemoved.call(this);
            this.set_playback(null) }, __class__: xg });
    var We = function(a) { this.$aM = null;
        this.$YM = this.$ZM = 0;
        this.postSolve = new Tb;
        this.preSolve = new Tb;
        this.endContact = new ia;
        this.beginContact = new ia;
        this.velocityIterations = 8;
        this.positionIterations = 3;
        this.scale = 50;
        n.call(this);
        null == a && (a = new Ka(new E(0, 10), !0));
        this.world = a };
    g["kit.physics.Box2D"] = We;
    We.__name__ = ["kit",
        "physics", "Box2D"
    ];
    We.__super__ = n;
    We.prototype = m(n.prototype, {
        get_entitySlot: function() { return 7 },
        onStart: function() { this.world.setContactListener(new yg(this)) },
        onStop: function() { this.world.$ED.$dC = pc.defaultListener },
        toMeters: function(a) { return a / this.scale },
        createPhysics: function(a) { null == a && (a = new Fd, a.type = 2);
            a = new vb(this, this.world.createBody(a)); return a.body.$SC = a },
        createObject: function(a) {
            var b = this.createPhysics();
            b.body.setPositionAndAngle(new E(a.x / this.scale, a.y / this.scale), 3.141592653589793 *
                a.rotation / 180);
            this.$WM(b.body, a, a);
            return b
        },
        $WM: function(a, b, c) {
            var d = 1,
                e = 1;
            null != c.tile && (d = c.width / c.tile.get_width(), e = c.height / c.tile.get_height());
            var f = -c.anchorX / this.scale * d,
                k = -c.anchorY / this.scale * e;
            b != c && (f += (b.x - b.anchorX) / this.scale * d, k += (b.y - b.anchorY) / this.scale * e);
            switch (b.shape[1]) {
                case 0:
                    d *= b.width / 2 / this.scale;
                    e *= b.height / 2 / this.scale;
                    f = new E(f + d, k + e);
                    k = new qc;
                    k.shape = Ta.asOrientedBox(d, e, f);
                    a.createFixture(k);
                    break;
                case 1:
                    d = this.toMeters(Math.max(d * b.width, e * b.height) / 2);
                    e = new Dd(d);
                    e.$ZB.set(f + d, k + d);
                    f = new qc;
                    f.shape = e;
                    a.createFixture(f);
                    break;
                case 2:
                    c = [];
                    var g = 0;
                    for (b = b.points; g < b.length;) { var h = b[g];++g;
                        c.push(new E(f + h.x / this.scale * d, k + h.y / this.scale * e)) } f = new qc;
                    f.shape = Ta.asArray(c);
                    a.createFixture(f);
                    break;
                case 3:
                    c = 0;
                    for (g = b.points.length - 1; c < g;) { var l = c++,
                            h = b.points[l],
                            l = b.points[l + 1],
                            h = new E(f + h.x / this.scale * d, k + h.y / this.scale * e),
                            l = new E(f + l.x / this.scale * d, k + l.y / this.scale * e),
                            m = new qc;
                        m.shape = Ta.asEdge(h, l);
                        a.createFixture(m) }
                    break;
                case 4:
                    if (b = b.tile, 0 < b.collision.length)
                        for (f =
                            0, k = b.collision; f < k.length;) e = k[f], ++f, this.$WM(a, e, c);
                    else d *= this.toMeters(b.get_width() / 2), e *= this.toMeters(b.get_height() / 2), f = new E(f + d, k + e), k = new qc, k.shape = Ta.asOrientedBox(Math.abs(d), Math.abs(e), f), a.createFixture(k)
            }
        },
        $XM: function(a) {
            var b = this,
                c = new Fd;
            c.awake = !1;
            for (var d = this.createPhysics(c), e = new E, f = new qc, k = a.scene.tileWidth, g = a.scene.tileHeight, c = a.width, h = a.height, l = 0; l < h;) {
                for (var m = [l++], n = [!1], q = [0], u = function(a, c, h) {
                        return function(l) {
                            if (c[0]) {
                                c[0] = !1;
                                l = 0.5 * (l - a[0]) * k / b.scale;
                                var r = 0.5 * g / b.scale;
                                e.set(a[0] * k / b.scale + l, h[0] * g / b.scale + r);
                                f.shape = Ta.asOrientedBox(l, r, e);
                                d.body.createFixture(f)
                            }
                        }
                    }(q, n, m), s = 0; s < c;) { var v = s++;
                    null != a.tiles[m[0] * c + v] ? n[0] || (n[0] = !0, q[0] = v) : u(v) } u(c)
            }
            return d
        },
        onUpdate: function(a) {
            for (this.$YM = ja.min(this.$YM + a, 0.06666666666666667); 0.03333333333333333 <= this.$YM;) {
                this.$YM -= 0.03333333333333333;
                if (0.03333333333333333 > this.$YM)
                    for (a = this.world.$GD; null != a;) { var b = u.instance(a.$SC, vb);
                        null != b && b.$dM();
                        a = a.$CC } this.world.step(0.03333333333333333, this.positionIterations,
                        this.velocityIterations)
            }
            this.$ZM = this.$YM / 0.03333333333333333;
            this.world.clearForces();
            if (null != this.$aM) { a = 0; for (b = this.$aM; a < b.length;) { var c = b[a];++a;
                    c() } this.$aM = null }
        },
        defer: function(a) { if (0 == (this.world.$uB & 2)) return a(), !1;
            null == this.$aM ? this.$aM = [a] : this.$aM.push(a); return !0 },
        __class__: We
    });
    var yg = function(a) { this.$cM = a };
    g.$CFB = yg;
    yg.__name__ = ["$CFB"];
    yg.__super__ = pc;
    yg.prototype = m(pc.prototype, {
        beginContact: function(a) {
            var b = u.instance(a.$ZD.$kC.$SC, vb);
            null != b && null != b.$eM && b.$eM.emit(a);
            b = u.instance(a.$aD.$kC.$SC, vb);
            null != b && null != b.$eM && b.$eM.emit(a);
            this.$cM.beginContact.emit(a)
        },
        endContact: function(a) { var b = u.instance(a.$ZD.$kC.$SC, vb);
            null != b && null != b.$fM && b.$fM.emit(a);
            b = u.instance(a.$aD.$kC.$SC, vb);
            null != b && null != b.$fM && b.$fM.emit(a);
            this.$cM.endContact.emit(a) },
        preSolve: function(a, b) { var c = u.instance(a.$ZD.$kC.$SC, vb);
            null != c && null != c.$gM && c.$gM.emit(a, b);
            c = u.instance(a.$aD.$kC.$SC, vb);
            null != c && null != c.$gM && c.$gM.emit(a, b);
            this.$cM.preSolve.emit(a, b) },
        postSolve: function(a,
            b) { var c = u.instance(a.$ZD.$kC.$SC, vb);
            null != c && null != c.$hM && c.$hM.emit(a, b);
            c = u.instance(a.$aD.$kC.$SC, vb);
            null != c && null != c.$hM && c.$hM.emit(a, b);
            this.$cM.postSolve.emit(a, b) },
        __class__: yg
    });
    var vb = function(a, b) { this.$iM = this.$jM = this.$kM = 0;
        this.$eM = this.$fM = this.$gM = this.$hM = null;
        n.call(this);
        this.box2d = a;
        this.body = b };
    g["kit.physics.PhysicsBody"] = vb;
    vb.__name__ = ["kit", "physics", "PhysicsBody"];
    vb.__super__ = n;
    vb.prototype = m(n.prototype, {
        get_entitySlot: function() { return 6 },
        onUpdate: function(a) {
            if (34 ==
                (this.body.$uB & 34) && (a = this.owner.$MH[3], null != a)) { var b = this.box2d.scale,
                    c = this.body.$wB.position,
                    d = c.x,
                    c = c.y,
                    e = this.body.$xB.a; if (0 != this.body.$FB) var f = this.box2d.$ZM,
                    k = 1 - f,
                    d = d * f + this.$iM * k,
                    c = c * f + this.$jM * k,
                    e = e * f + this.$kM * k;
                a.x.set__(b * d);
                a.y.set__(b * c);
                a.rotation.set__(180 * e / 3.141592653589793) }
        },
        onAdded: function() {
            var a = this.owner.$MH[3];
            if (null != a) {
                var b = this.body.$wB.position;
                b.x = a.x.$pH / this.box2d.scale;
                b.y = a.y.$pH / this.box2d.scale;
                this.body.setPositionAndAngle(b, 3.141592653589793 * a.rotation.$pH /
                    180)
            }
            this.$dM()
        },
        dispose: function() { var a = this;
            n.prototype.dispose.call(this);
            this.body.$SC = null; var b = this.body;
            this.body = null;
            this.box2d.defer(function() { a.box2d.world.destroyBody(b) }) },
        $dM: function() { if (0 != this.body.$FB) { var a = this.body.$wB.position;
                this.$iM = a.x;
                this.$jM = a.y;
                this.$kM = this.body.$xB.a } },
        get_beginContact: function() { null == this.$eM && (this.$eM = new ia); return this.$eM },
        get_endContact: function() { null == this.$fM && (this.$fM = new ia); return this.$fM },
        __class__: vb,
        __properties__: m(n.prototype.__properties__, { get_endContact: "get_endContact", get_beginContact: "get_beginContact" })
    });
    var Ba = function() { this.$qM = !1 };
    g.$CGB = Ba;
    Ba.__name__ = ["$CGB"];
    Ba.__interfaces__ = [kc];
    Ba.prototype = { dispose: function() { this.$qM || (this.$qM = !0, this.$oM()) }, $oM: function() { null }, __class__: Ba };
    var Xd = function(a, b) {
        this.$BN = 0;
        var c = this;
        this.$sM = b;
        this.$GI = a;
        this.$BH = new ea;
        this.$yI = new zg(b, this);
        this.$AN = new O;
        var d = Ma.array(b);
        if (0 == d.length) this.$yM();
        else {
            for (var e = new O, f = 0; f < d.length;) {
                var k = d[f];
                ++f;
                var g = e.get(k.name);
                null ==
                    g && (g = [], e.set(k.name, g));
                g.push(k)
            }
            this.$_M = Ma.count(e);
            for (d = new pf(e, e.arrayKeys()); d.hasNext();) e = [d.next()], this.$tM(e[0], function(a) {
                return function(d) {
                    if (null != d) { var e = new Ag(0, d.bytes);
                        c.$AN.set(d.name, e);
                        e = b.getFullURL(d); try { c.$uM(e, d) } catch (f) { f instanceof s && (f = f.val), c.$zM(d, "Unexpected error: " + u.string(f)) } } else switch (d = a[0][0], e = new Ag(0, 0), c.$AN.set(d.name, e), d.format[1]) {
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                            c.$wM(d, wb.$HO());
                            break;
                        case 16:
                        case 17:
                            c.$wM(d, dc.$HO());
                            break;
                        default:
                            c.$zM(d,
                                "Could not find a supported format to load")
                    }
                }
            }(e))
        }
    };
    g.$CHB = Xd;
    Xd.__name__ = ["$CHB"];
    Xd.prototype = {
        $tM: function(a, b) { this.$vM(function(c) { for (var d = 0; d < c.length;) { var e = c[d];++d; for (var f = 0; f < a.length;) { var k = a[f];++f; if (k.format == e) { b(k); return } } } b(null) }) },
        $uM: function(a, b) { null },
        $vM: function(a) { null },
        $wM: function(a, b) {
            if (this.$yI.$IN) b.dispose();
            else {
                var c = this.$AN.get(a.name);
                c.$LN = c.$MN;
                var d;
                switch (a.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        d = this.$yI.$DN;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        d =
                            this.$yI.$EN;
                        break;
                    case 13:
                    case 14:
                    case 15:
                        d = this.$yI.$GN;
                        break;
                    case 16:
                    case 17:
                        d = this.$yI.$HN;
                        break;
                    case 18:
                        d = this.$yI.$FN
                }
                d.set(a.name, b);
                this.$_M -= 1;
                0 == this.$_M && this.$yM()
            }
        },
        $xM: function(a, b, c) { a = this.$AN.get(a.name);
            0 < c && (a.$MN = c);
            a.$LN = ja.min(b, a.$MN);
            c = b = 0; for (a = this.$AN.iterator(); a.hasNext();) { var d = a.next();
                b += d.$LN;
                c += d.$MN } b = 0 < c ? b / c : 0;
            b != this.$BN && (this.$BN = b, this.$BH.emitProgress(b)) },
        $yM: function() { this.$BH.success(this.$yI) },
        $zM: function(a, b) {
            this.$yI.dispose();
            this.$BH.failure(Pa.withFields(b,
                ["url", a.url]))
        },
        $$M: function(a) { this.$zM(a, "Failed to create texture. Is the GPU context unavailable?") },
        __class__: Xd
    };
    var zg = function(a, b) { this.$IN = !1;
        this.$HN = new O;
        this.$GN = new O;
        this.$FN = new O;
        this.$EN = new O;
        this.$DN = new O;
        this.$JN = a };
    g.$CIB = zg;
    zg.__name__ = ["$CIB"];
    zg.__interfaces__ = [Pd];
    zg.prototype = {
        getTexture: function(a, b) { return this.$DN.get(a) },
        getSound: function(a, b) { return this.$EN.get(a) },
        getFile: function(a, b) { return this.$FN.get(a) },
        getVectorFont: function(a, b) { return this.$GN.get(a) },
        getVideo: function(a, b) { return this.$HN.get(a) },
        dispose: function() { if (!this.$IN) { this.$IN = !0; for (var a = this.$DN.iterator(); a.hasNext();) a.next().dispose();
                this.$DN = null; for (a = this.$EN.iterator(); a.hasNext();) a.next().dispose();
                this.$EN = null; for (a = this.$FN.iterator(); a.hasNext();) a.next().dispose();
                this.$FN = null; for (a = this.$GN.iterator(); a.hasNext();) a.next().dispose();
                this.$GN = null } },
        get_manifest: function() { return this.$JN },
        __class__: zg,
        __properties__: { get_manifest: "get_manifest" }
    };
    var Ag = function(a,
        b) { this.$LN = a;
        this.$MN = b };
    g.$CJB = Ag;
    Ag.__name__ = ["$CJB"];
    Ag.prototype = { __class__: Ag };
    var Yd = function(a) { this.$qM = !1;
        this.$tI = a };
    g.$CKB = Yd;
    Yd.__name__ = ["$CKB"];
    Yd.__interfaces__ = [Cf];
    Yd.__super__ = Ba;
    Yd.prototype = m(Ba.prototype, { toString: function() { return this.$tI }, toJson: function() { return JSON.parse(this.toString()) }, $oM: function() { this.$tI = null }, __class__: Yd });
    var Ri = function() {};
    g["kit.subsystem.KeyboardSystem"] = Ri;
    Ri.__name__ = ["kit", "subsystem", "KeyboardSystem"];
    Ri.prototype = { __class__: Ri };
    var Sb =
        function() { this.down = new ia;
            this.up = new ia;
            this.backButton = new bb;
            this.$QN = new rb };
    g.$CLB = Sb;
    Sb.__name__ = ["$CLB"];
    Sb.__interfaces__ = [Ri];
    Sb.prototype = {
        isDown: function(a) { return this.$NN(Zd.$LQ(a)) },
        $NN: function(a) { return this.$QN.h.hasOwnProperty(a) },
        $ON: function(a) { if (16777238 == a) return null != this.backButton.$AI ? (this.backButton.emit(), !0) : !1;
            this.$QN.h.hasOwnProperty(a) || (this.$QN.h[a] = !0, Sb.$RN.$oK(Sb.$RN.id + 1, Zd.$KQ(a)), this.down.emit(Sb.$RN)); return !0 },
        $PN: function(a) {
            this.$QN.h.hasOwnProperty(a) &&
                (this.$QN.remove(a), Sb.$RN.$oK(Sb.$RN.id + 1, Zd.$KQ(a)), this.up.emit(Sb.$RN))
        },
        __class__: Sb
    };
    var Si = function() {};
    g["kit.subsystem.MouseSystem"] = Si;
    Si.__name__ = ["kit", "subsystem", "MouseSystem"];
    Si.prototype = { __class__: Si, __properties__: { set_cursor: "set_cursor", get_cursor: "get_cursor" } };
    var ib = function(a) { this.$VH = a;
        this.$qK = sg.Mouse(ib.$RN);
        this.down = new ia;
        this.move = new ia;
        this.up = new ia;
        this.scroll = new ia;
        this.$TJ = this.$SJ = 0;
        this.$UN = Wa.Default;
        this.$VN = new rb };
    g.$CMB = ib;
    ib.__name__ = ["$CMB"];
    ib.__interfaces__ = [Si];
    ib.prototype = {
        get_cursor: function() { return this.$UN },
        set_cursor: function(a) { return this.$UN = a },
        $ON: function(a, b, c) { this.$VN.h.hasOwnProperty(c) || (this.$VN.h[c] = !0, this.$bK(a, b, Ti.$dQ(c)), this.$VH.$ON(a, b, this.$qK), this.down.emit(ib.$RN)) },
        $SN: function(a, b) { this.$bK(a, b, null);
            this.$VH.$SN(a, b, this.$qK);
            this.move.emit(ib.$RN) },
        $PN: function(a, b, c) { this.$VN.h.hasOwnProperty(c) && (this.$VN.remove(c), this.$bK(a, b, Ti.$dQ(c)), this.$VH.$PN(a, b, this.$qK), this.up.emit(ib.$RN)) },
        $TN: function(a, b, c) {
            this.$SJ =
                a;
            this.$TJ = b;
            if (null == this.scroll.$AI) return !1;
            this.scroll.emit(c);
            return !0
        },
        $bK: function(a, b, c) { this.$SJ = a;
            this.$TJ = b;
            ib.$RN.$oK(ib.$RN.id + 1, a, b, c) },
        __class__: ib,
        __properties__: { set_cursor: "set_cursor", get_cursor: "get_cursor" }
    };
    var Ui = function() {};
    g["kit.subsystem.PointerSystem"] = Ui;
    Ui.__name__ = ["kit", "subsystem", "PointerSystem"];
    Ui.prototype = { __class__: Ui };
    var Za = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new ia;
        this.move = new ia;
        this.up = new ia;
        this.$SJ = a;
        this.$TJ = b;
        this.$WN = c
    };
    g.$CNB = Za;
    Za.__name__ = ["$CNB"];
    Za.__interfaces__ = [Ui];
    Za.prototype = {
        $ON: function(a, b, c) { if (!this.$WN) { this.$SN(a, b, c);
                this.$WN = !0; var d = [],
                    e = x.hitTest(q.root, a, b); if (null != e) { var f = e.owner;
                    do { var k = f.$MH[3];
                        null != k && d.push(k);
                        f = f.parent } while (null != f) } this.$bK(a, b, e, c); for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.$_F(Za.$RN), Za.$RN.$pK) return;
                this.down.emit(Za.$RN) } },
        $SN: function(a, b, c) {
            if (a != this.$SJ || b != this.$TJ) {
                var d = [],
                    e = x.hitTest(q.root, a, b);
                if (null != e) {
                    var f = e.owner;
                    do {
                        var k = f.$MH[3];
                        null !=
                            k && d.push(k);
                        f = f.parent
                    } while (null != f)
                }
                this.$bK(a, b, e, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.$AG(Za.$RN), Za.$RN.$pK) return;
                this.move.emit(Za.$RN)
            }
        },
        $PN: function(a, b, c) { if (this.$WN) { this.$SN(a, b, c);
                this.$WN = !1; var d = [],
                    e = x.hitTest(q.root, a, b); if (null != e) { var f = e.owner;
                    do { var k = f.$MH[3];
                        null != k && d.push(k);
                        f = f.parent } while (null != f) } this.$bK(a, b, e, c); for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.$CG(Za.$RN), Za.$RN.$pK) return;
                this.up.emit(Za.$RN) } },
        $bK: function(a, b, c, d) {
            this.$SJ = a;
            this.$TJ = b;
            Za.$RN.$oK(Za.$RN.id +
                1, a, b, c, d)
        },
        __class__: Za
    };
    var vj = function() {};
    g.$COB = vj;
    vj.__name__ = ["$COB"];
    vj.__interfaces__ = [uj];
    var ec = function(a, b, c) { this.$SJ = this.$TJ = 0;
        this.$aN = null;
        this.$YN = this.$ZN = 0;
        this.$qM = !1;
        this.$XN = a;
        this.$hJ = b;
        this.$iJ = c };
    g.$CPB = ec;
    ec.__name__ = ["$CPB"];
    ec.__interfaces__ = [vj];
    ec.__super__ = Ba;
    ec.prototype = m(Ba.prototype, {
        subTexture: function(a, b, c, d) { c = this.$XN.createTexture(c, d);
            c.$aN = this;
            c.$SJ = a;
            c.$TJ = b;
            c.$YN = this.$YN + a;
            c.$ZN = this.$ZN + b; return c },
        get_graphics: function() { return this.$XN.getGraphics() },
        $oM: function() { null == this.$aN && this.$XN.dispose() },
        get_width: function() { return this.$hJ },
        get_height: function() { return this.$iJ },
        __class__: ec,
        __properties__: { get_height: "get_height", get_width: "get_width", get_graphics: "get_graphics" }
    });
    var Bg = function() {};
    g["kit.subsystem.TouchSystem"] = Bg;
    Bg.__name__ = ["kit", "subsystem", "TouchSystem"];
    Bg.prototype = { __class__: Bg, __properties__: { get_supported: "get_supported" } };
    var vf = function(a, b) {
        null == b && (b = 4);
        this.$VH = a;
        this.$cN = b;
        this.$dN = new rb;
        this.$rJ = [];
        this.down =
            new ia;
        this.move = new ia;
        this.up = new ia
    };
    g.$CQB = vf;
    vf.__name__ = ["$CQB"];
    vf.__interfaces__ = [Bg];
    vf.prototype = {
        get_supported: function() { return !0 },
        $ON: function(a, b, c) { if (!this.$dN.h.hasOwnProperty(a)) { var d = new Ni(a);
                d.$oK(b, c);
                this.$dN.h[a] = d;
                this.$rJ.push(d);
                null == this.$bN && (this.$bN = d, this.$VH.$ON(b, c, d.$qK));
                this.down.emit(d) } },
        $SN: function(a, b, c) { a = this.$dN.h[a];
            null != a && (a.$oK(b, c), this.$bN == a && this.$VH.$SN(b, c, a.$qK), this.move.emit(a)) },
        $PN: function(a, b, c) {
            var d = this.$dN.h[a];
            null != d && (d.$oK(b,
                c), this.$dN.remove(a), D.remove(this.$rJ, d), this.$bN == d && (this.$bN = null, this.$VH.$PN(b, c, d.$qK)), this.up.emit(d))
        },
        __class__: vf,
        __properties__: { get_supported: "get_supported" }
    };
    var wj = function() {};
    g.$CRB = wj;
    wj.__name__ = ["$CRB"];
    wj.$eN = function() { q.$EI().then(function(a) { try { q.$GI.getExternal().call("console.info", ["Built with 2DKit, http://2dkit.com"]) } catch (b) { b instanceof s && (b = b.val) } a = new De;
            q.root.add(a) }) };
    var sa = function() {};
    g.$CSB = sa;
    sa.__name__ = ["$CSB"];
    sa.$iN = function(a) {
        var b = qf.getType(sa).injected[0];
        return P.field(b, a)
    };
    sa.$jN = function() { switch (sa.$iN("orientation")) {
            case "landscape":
                return cc.Landscape;
            case "portrait":
                return cc.Portrait } return null };
    var Cg = function() { this.$_N = new Zb;
        this.$$N = 0;
        this.$yN = this.$zN = null;
        this.$xN = Infinity;
        this.$wN = 0 };
    g.$CTB = Cg;
    Cg.__name__ = ["$CTB"];
    Cg.__interfaces__ = [Sa];
    Cg.prototype = {
        $mN: function(a) { this.$xN = a;
            this.$vN(!0); return this },
        $nN: function(a) { this.$yN = a; return this },
        $oN: function(a) { this.$zN = a; return this },
        $pN: function(a, b, c) {
            null == c && (c = !0);
            this.$tN(a);
            var d;
            d = null != this.$zN ? this.$zN(a, b) : 1;
            this.$wN += d;
            this.$vN(c);
            b = new Vi(a, b);
            b.$BO = ++this.$$N;
            b.$kN = d;
            this.$_N.set(a, b)
        },
        $iN: function(a) { a = this.$_N.h[a.__id__]; if (null == a) return null;
            a.$BO = ++this.$$N; return a.$AO },
        $qN: function() { var a = this.$sN(!0); return null != a ? a.$QK : null },
        $sN: function(a) { for (var b = null, c = this.$_N.iterator(); c.hasNext();) { var d = c.next(); if (null == b || d.$BO < b.$BO == a) b = d } return b },
        $tN: function(a, b) {
            null == b && (b = !0);
            var c = this.$_N.h[a.__id__];
            if (null == c) return null;
            null != this.$yN && b &&
                this.$yN(a, c.$AO);
            this.$_N.remove(a);
            this.$wN -= c.$kN;
            return c.$AO
        },
        $uN: function(a) { null == a && (a = !0); var b = this.$_N;
            this.$_N = new Zb;
            this.$wN = 0; if (null != this.$yN && a)
                for (a = b.iterator(); a.hasNext();) b = a.next(), this.$yN(b.$QK, b.$AO) },
        dispose: function() { this.$uN() },
        $vN: function(a) { for (; this.$wN > this.$xN;) { var b = this.$sN(a); if (null != b) null != this.$yN && this.$yN(b.$QK, b.$AO), this.$_N.remove(b.$QK), this.$wN -= b.$kN;
                else break } },
        __class__: Cg
    };
    var Vi = function(a, b) { this.$kN = 1;
        this.$BO = 0;
        this.$QK = a;
        this.$AO = b };
    g.$CUB =
        Vi;
    Vi.__name__ = ["$CUB"];
    Vi.prototype = { __class__: Vi };
    var Qc = function() {};
    g.$CWB = Qc;
    Qc.__name__ = ["$CWB"];
    Qc.$GO = function(a, b) { var c = a.__rtti; if (null == c) return null;
        c = v.parse(c).firstElement();
        c = (new qi).processElement(c); switch (c[1]) {
            case 1:
                c = c[2]; if (null != c.superClass) { var d = da.resolveClass(c.superClass.path);
                    null != d && Qc.$GO(d, b) } c = c.fields.h; for (d = null; null != c;) d = void 0, d = c[0], c = c[1], b.set(d.name, d) } return b };
    Qc.$mI = function(a, b) {
        switch (a[1]) {
            case 2:
                switch (a[2]) {
                    case "String":
                        return b;
                    case "kit.animation.AnimatedFloat":
                        var c =
                            parseFloat(b);
                        return new X(isNaN(c) ? 0 : c);
                    case "Date":
                        var c = parseFloat(b),
                            d = new Date;
                        d.setTime(c);
                        return d;
                    case "kit.math.Point":
                        return c = new ka, d = b.split(","), 2 <= d.length && (c.x = parseFloat(d[0]), c.y = parseFloat(d[1])), c;
                    case "kit.math.Rectangle":
                        return c = new tb, d = b.split(","), 4 <= d.length && (c.x = parseFloat(d[0]), c.y = parseFloat(d[1]), c.width = parseFloat(d[2]), c.height = parseFloat(d[3])), c
                }
                break;
            case 7:
                switch (a[2]) {
                    case "Int":
                        return 35 == D.cca(b, 0) && (b = "0x" + D.substr(b, 1, null)), c = u.parseInt(b), null != c ? c : 0;
                    case "Float":
                        return c = parseFloat(b), isNaN(c) ? 0 : c;
                    case "Bool":
                        return "0" != b && "false" != b
                }
                break;
            case 1:
                if (c = da.resolveEnum(a[2]), null != c) try { return da.createEnum(c, b) } catch (e) { e instanceof s && (e = e.val) }
        }
        return null
    };
    var ld = function() {};
    g["kit.sound.Sound"] = ld;
    ld.__name__ = ["kit", "sound", "Sound"];
    ld.__interfaces__ = [kc];
    ld.prototype = { __class__: ld };
    var wb = function() { this.$qM = !1;
        this.$qL = new Dg(this) };
    g.$CZB = wb;
    wb.__name__ = ["$CZB"];
    wb.__interfaces__ = [ld];
    wb.$HO = function() { null == wb.$IO && (wb.$IO = new wb); return wb.$IO };
    wb.__super__ = Ba;
    wb.prototype = m(Ba.prototype, { play: function(a) { return this.$qL }, loop: function(a) { return this.$qL }, $oM: function() {}, __class__: wb });
    var md = function() {};
    g["kit.sound.Playback"] = md;
    md.__name__ = ["kit", "sound", "Playback"];
    md.__interfaces__ = [Sa];
    md.prototype = { __class__: md, __properties__: { get_sound: "get_sound", get_complete: "get_complete" } };
    var Dg = function(a) { this.$JO = a;
        this.volume = new X(0);
        this.$KO = new ya(!0) };
    g.$CaB = Dg;
    Dg.__name__ = ["$CaB"];
    Dg.__interfaces__ = [md];
    Dg.prototype = {
        get_sound: function() { return this.$JO },
        get_complete: function() { return this.$KO },
        dispose: function() {},
        __class__: Dg,
        __properties__: { get_complete: "get_complete", get_sound: "get_sound" }
    };
    var Eg = function() {};
    g["kit.subsystem.StorageSystem"] = Eg;
    Eg.__name__ = ["kit", "subsystem", "StorageSystem"];
    Eg.prototype = { __class__: Eg };
    var tf = function() { this.$KJ = new O };
    g.$CbB = tf;
    tf.__name__ = ["$CbB"];
    tf.__interfaces__ = [Eg];
    tf.prototype = {
        set: function(a, b) { this.$KJ.set(a, b); return (new ea).$FW(null) },
        get: function(a, b) {
            return (new ea).$FW(this.$KJ.exists(a) ? this.$KJ.get(a) :
                b)
        },
        __class__: tf
    };
    var wf = function() { this.down = new ia;
        this.move = new ia;
        this.up = new ia };
    g.$CcB = wf;
    wf.__name__ = ["$CcB"];
    wf.__interfaces__ = [Bg];
    wf.prototype = { get_supported: function() { return !1 }, __class__: wf, __properties__: { get_supported: "get_supported" } };
    var $d = function() {};
    g["kit.video.Video"] = $d;
    $d.__name__ = ["kit", "video", "Video"];
    $d.__interfaces__ = [kc];
    $d.prototype = { __class__: $d, __properties__: { get_height: "get_height", get_width: "get_width" } };
    var dc = function() { this.$qM = !1;
        this.$qL = new Fg(this) };
    g.$CdB =
        dc;
    dc.__name__ = ["$CdB"];
    dc.__interfaces__ = [$d];
    dc.$HO = function() { null == dc.$IO && (dc.$IO = new dc); return dc.$IO };
    dc.__super__ = Ba;
    dc.prototype = m(Ba.prototype, { play: function(a) { return this.$qL }, get_width: function() { return 1 }, get_height: function() { return 1 }, $oM: function() {}, __class__: dc, __properties__: { get_height: "get_height", get_width: "get_width" } });
    var ae = function() {};
    g["kit.video.VideoPlayback"] = ae;
    ae.__name__ = ["kit", "video", "VideoPlayback"];
    ae.__interfaces__ = [Sa];
    ae.prototype = {
        __class__: ae,
        __properties__: {
            get_texture: "get_texture",
            get_video: "get_video"
        }
    };
    var Fg = function(a) { this.$LO = a;
        this.volume = new X(0);
        this.$KO = new ya(!0);
        this.$jJ = q.$GI.$WH.createTexture(1, 1) };
    g.$CeB = Fg;
    Fg.__name__ = ["$CeB"];
    Fg.__interfaces__ = [ae];
    Fg.prototype = { get_video: function() { return this.$LO }, get_texture: function() { return this.$jJ }, dispose: function() {}, __class__: Fg, __properties__: { get_texture: "get_texture", get_video: "get_video" } };
    var nd = function() { this.$vG = [] };
    g.$CgB = nd;
    nd.__name__ = ["$CgB"];
    nd.__interfaces__ = [Sa];
    nd.prototype = {
        $MJ: function(a, b, c) {
            a.addEventListener(b,
                c, !1);
            this.$vG.push(new Wi(a, b, c))
        },
        $MO: function(a, b, c) { var d = this;
            this.$MJ(a, b, function(a) { d.dispose();
                c(a) }) },
        dispose: function() { for (var a = 0, b = this.$vG; a < b.length;) { var c = b[a];++a;
                c.$NO.removeEventListener(c.$OO, c.$PO, !1) } this.$vG = [] },
        __class__: nd
    };
    var Wi = function(a, b, c) { this.$NO = a;
        this.$OO = b;
        this.$PO = c };
    g.$ChB = Wi;
    Wi.__name__ = ["$ChB"];
    Wi.prototype = { __class__: Wi };
    var be = function() {};
    g.$CkB = be;
    be.__name__ = ["$CkB"];
    be.__interfaces__ = [Jf];
    be.prototype = { __class__: be };
    var Xi = function() {};
    g["kit.subsystem.RendererSystem"] =
        Xi;
    Xi.__name__ = ["kit", "subsystem", "RendererSystem"];
    Xi.prototype = { __class__: Xi };
    var ce = function() {};
    g.$ClB = ce;
    ce.__name__ = ["$ClB"];
    ce.__interfaces__ = [Xi];
    ce.prototype = { __class__: ce };
    var Zd = function() {};
    g.$CmB = Zd;
    Zd.__name__ = ["$CmB"];
    Zd.$KQ = function(a) {
        switch (a) {
            case 65:
                return h.A;
            case 66:
                return h.B;
            case 67:
                return h.C;
            case 68:
                return h.D;
            case 69:
                return h.E;
            case 70:
                return h.F;
            case 71:
                return h.G;
            case 72:
                return h.H;
            case 73:
                return h.I;
            case 74:
                return h.J;
            case 75:
                return h.K;
            case 76:
                return h.L;
            case 77:
                return h.M;
            case 78:
                return h.N;
            case 79:
                return h.O;
            case 80:
                return h.P;
            case 81:
                return h.Q;
            case 82:
                return h.R;
            case 83:
                return h.S;
            case 84:
                return h.T;
            case 85:
                return h.U;
            case 86:
                return h.V;
            case 87:
                return h.W;
            case 88:
                return h.X;
            case 89:
                return h.Y;
            case 90:
                return h.Z;
            case 48:
                return h.Number0;
            case 49:
                return h.Number1;
            case 50:
                return h.Number2;
            case 51:
                return h.Number3;
            case 52:
                return h.Number4;
            case 53:
                return h.Number5;
            case 54:
                return h.Number6;
            case 55:
                return h.Number7;
            case 56:
                return h.Number8;
            case 57:
                return h.Number9;
            case 96:
                return h.Numpad0;
            case 97:
                return h.Numpad1;
            case 98:
                return h.Numpad2;
            case 99:
                return h.Numpad3;
            case 100:
                return h.Numpad4;
            case 101:
                return h.Numpad5;
            case 102:
                return h.Numpad6;
            case 103:
                return h.Numpad7;
            case 104:
                return h.Numpad8;
            case 105:
                return h.Numpad9;
            case 107:
                return h.NumpadAdd;
            case 110:
                return h.NumpadDecimal;
            case 111:
                return h.NumpadDivide;
            case 108:
                return h.NumpadEnter;
            case 106:
                return h.NumpadMultiply;
            case 109:
                return h.NumpadSubtract;
            case 112:
                return h.F1;
            case 113:
                return h.F2;
            case 114:
                return h.F3;
            case 115:
                return h.F4;
            case 116:
                return h.F5;
            case 117:
                return h.F6;
            case 118:
                return h.F7;
            case 119:
                return h.F8;
            case 120:
                return h.F9;
            case 121:
                return h.F10;
            case 122:
                return h.F11;
            case 123:
                return h.F12;
            case 37:
                return h.Left;
            case 38:
                return h.Up;
            case 39:
                return h.Right;
            case 40:
                return h.Down;
            case 18:
                return h.Alt;
            case 192:
                return h.Backquote;
            case 220:
                return h.Backslash;
            case 8:
                return h.Backspace;
            case 20:
                return h.CapsLock;
            case 188:
                return h.Comma;
            case 15:
                return h.Command;
            case 17:
                return h.Control;
            case 46:
                return h.Delete;
            case 35:
                return h.End;
            case 13:
                return h.Enter;
            case 187:
                return h.Equals;
            case 27:
                return h.Escape;
            case 36:
                return h.Home;
            case 45:
                return h.Insert;
            case 219:
                return h.LeftBracket;
            case 189:
                return h.Minus;
            case 34:
                return h.PageDown;
            case 33:
                return h.PageUp;
            case 190:
                return h.Period;
            case 222:
                return h.Quote;
            case 221:
                return h.RightBracket;
            case 186:
                return h.Semicolon;
            case 16:
                return h.Shift;
            case 191:
                return h.Slash;
            case 32:
                return h.Space;
            case 9:
                return h.Tab;
            case 16777234:
                return h.Menu;
            case 16777247:
                return h.Search
        }
        return h.Unknown(a)
    };
    Zd.$LQ =
        function(a) {
            switch (a[1]) {
                case 0:
                    return 65;
                case 1:
                    return 66;
                case 2:
                    return 67;
                case 3:
                    return 68;
                case 4:
                    return 69;
                case 5:
                    return 70;
                case 6:
                    return 71;
                case 7:
                    return 72;
                case 8:
                    return 73;
                case 9:
                    return 74;
                case 10:
                    return 75;
                case 11:
                    return 76;
                case 12:
                    return 77;
                case 13:
                    return 78;
                case 14:
                    return 79;
                case 15:
                    return 80;
                case 16:
                    return 81;
                case 17:
                    return 82;
                case 18:
                    return 83;
                case 19:
                    return 84;
                case 20:
                    return 85;
                case 21:
                    return 86;
                case 22:
                    return 87;
                case 23:
                    return 88;
                case 24:
                    return 89;
                case 25:
                    return 90;
                case 26:
                    return 48;
                case 27:
                    return 49;
                case 28:
                    return 50;
                case 29:
                    return 51;
                case 30:
                    return 52;
                case 31:
                    return 53;
                case 32:
                    return 54;
                case 33:
                    return 55;
                case 34:
                    return 56;
                case 35:
                    return 57;
                case 36:
                    return 96;
                case 37:
                    return 97;
                case 38:
                    return 98;
                case 39:
                    return 99;
                case 40:
                    return 100;
                case 41:
                    return 101;
                case 42:
                    return 102;
                case 43:
                    return 103;
                case 44:
                    return 104;
                case 45:
                    return 105;
                case 46:
                    return 107;
                case 47:
                    return 110;
                case 48:
                    return 111;
                case 49:
                    return 108;
                case 50:
                    return 106;
                case 51:
                    return 109;
                case 52:
                    return 112;
                case 53:
                    return 113;
                case 54:
                    return 114;
                case 55:
                    return 115;
                case 56:
                    return 116;
                case 57:
                    return 117;
                case 58:
                    return 118;
                case 59:
                    return 119;
                case 60:
                    return 120;
                case 61:
                    return 121;
                case 62:
                    return 122;
                case 63:
                    return 123;
                case 64:
                    return 124;
                case 65:
                    return 125;
                case 66:
                    return 126;
                case 67:
                    return 37;
                case 68:
                    return 38;
                case 69:
                    return 39;
                case 70:
                    return 40;
                case 71:
                    return 18;
                case 72:
                    return 192;
                case 73:
                    return 220;
                case 74:
                    return 8;
                case 75:
                    return 20;
                case 76:
                    return 188;
                case 77:
                    return 15;
                case 78:
                    return 17;
                case 79:
                    return 46;
                case 80:
                    return 35;
                case 81:
                    return 13;
                case 82:
                    return 187;
                case 83:
                    return 27;
                case 84:
                    return 36;
                case 85:
                    return 45;
                case 86:
                    return 219;
                case 87:
                    return 189;
                case 88:
                    return 34;
                case 89:
                    return 33;
                case 90:
                    return 190;
                case 91:
                    return 222;
                case 92:
                    return 221;
                case 93:
                    return 186;
                case 94:
                    return 16;
                case 95:
                    return 191;
                case 96:
                    return 32;
                case 97:
                    return 9;
                case 98:
                    return 16777234;
                case 99:
                    return 16777247;
                case 100:
                    return a[2]
            }
        };
    var Pc = function() { this.$SQ = 0;
        this.$QQ = null;
        this.$MQ = new F;
        this.$RQ = [] };
    g.$CnB = Pc;
    Pc.__name__ = ["$CnB"];
    Pc.$TQ = function(a, b) {
        if (a.active) {
            var c = a.$MH[42];
            if (null !=
                c && (c.$KI = b, b *= c.scale.$pH, 0 >= b)) { c.onUpdate(b); return }
            for (c = a.firstComponent; null != c;) { var d = c.next;
                0 == (c.$B & 1) && (c.$B |= 1, c.$A(), c.onStart());
                c.onUpdate(b);
                c = d }
            for (c = a.firstChild; null != c;) d = c.next, Pc.$TQ(c, b), c = d
        }
    };
    Pc.prototype = {
        $oK: function() {
            if (1 == sa.$iN("scaleMode")) {
                var a = new x;
                q.root.add(a);
                var b = sa.$iN("width"),
                    c = sa.$iN("height"),
                    d = sa.$iN("maxWidth"),
                    e = sa.$iN("maxHeight"),
                    f = function() {
                        var f = Math.min(q.$GI.$XH.get_width() / b, q.$GI.$XH.get_height() / c);
                        a.setXY(q.$GI.$XH.get_width() / 2 - f * b / 2, q.$GI.$XH.get_height() /
                            2 - f * c / 2);
                        a.setScale(f);
                        d * f < q.$GI.$XH.get_width() || e * f < q.$GI.$XH.get_height() ? (null == a.get_scissor() && a.set_scissor(new tb), a.get_scissor().set(b / 2 - d / 2, c / 2 - e / 2, d, e)) : a.set_scissor(null)
                    };
                f();
                q.$GI.$XH.resize.connect(f)
            }
        },
        $QH: function(a) {
            if (!(0 >= a)) {
                0.5 < a ? 3 >= this.$SQ && (++this.$SQ, a = 0.016666666666666666) : this.$SQ = 0;
                if (null != this.$QQ) { var b = this.$QQ;
                    this.$QQ = null; for (var c = 0; c < b.length;) { var d = b[c];++c;
                        d() } }
                for (b = 0; b < this.$RQ.length;) c = this.$RQ[b], null == c || c.update(a) ? this.$RQ.splice(b, 1) : ++b;
                q.volume.update(a);
                Pc.$TQ(q.root, a);
                Pc.$TQ(this.$MQ, a)
            }
        },
        $RJ: function(a) { var b = a.graphics;
            null != b && (a.willRender(), x.$OG(q.root, b, !0), x.$OG(this.$MQ, b, !0), a.didRender()) },
        $NQ: function(a) { this.$RQ.push(a) },
        $PQ: function(a) { null == this.$QQ ? this.$QQ = [a] : this.$QQ.push(a) },
        __class__: Pc
    };
    var Ca = function() {};
    g.$CoB = Ca;
    Ca.__name__ = ["$CoB"];
    Ca.$VQ = function(a, b, c, d, e, f, k) {
        if (3 > k) return !1;
        for (var g = 0, h = 2 * Math.PI / k, l = 0; l < k;) {
            var m = l++,
                n = Math.cos(g),
                q = Math.sin(g),
                g = g + h;
            a.push(e * n + c);
            a.push(f * q + d);
            m < k - 1 && (b.push(0), b.push(m), b.push(m +
                1))
        }
        return !0
    };
    Ca.$WQ = function(a, b, c, d, e, f, k, g) { if (3 > g) return !1;
        a.push(c);
        a.push(d);
        k /= g; var h = 0; for (g += 1; h < g;) { var l = h++,
                m = Math.cos(f),
                n = Math.sin(f);
            f += k;
            a.push(e * m + c);
            a.push(e * n + d);
            b.push(0);
            b.push(l);
            b.push(l + 1) } return !0 };
    Ca.$XQ = function(a, b, c, d, e, f, k, g, h) { k /= h; var l = [],
            m = 0; for (h += 1; m < h;) { m++; var n = Math.cos(f),
                q = Math.sin(f);
            f += k;
            l.push(e * n + c);
            l.push(e * q + d) } return Ca.$ZQ(a, b, l, g) };
    Ca.$YQ = function(a, b, c, d, e, f, k, g) {
        for (var h = 0, l = 2 * Math.PI / g, m = [], n = 0; n < g;) {
            n++;
            var q = Math.cos(h),
                u = Math.sin(h),
                h = h + l;
            m.push(e * q + c);
            m.push(f * u + d)
        }
        m.push(e + c);
        m.push(d);
        return Ca.$ZQ(a, b, m, k)
    };
    Ca.$ZQ = function(a, b, c, d) {
        var e = c.length;
        if (4 > e) return !1;
        d /= 2;
        var f = c[0],
            k = c[1],
            g = c[e - 2],
            h = c[e - 1],
            l = new ka(-(c[3] - k), c[2] - f);
        l.normalize();
        var m = l.x,
            l = l.y;
        a.push(f - d * m);
        a.push(k - d * l);
        a.push(f + d * m);
        a.push(k + d * l);
        f = e / 2 | 0;
        for (k = 2; k < e - 2;) {
            var n = c[k++],
                q = c[k++],
                u = c[k],
                s = c[k + 1],
                v = new ka(-(s - q), u - n);
            v.normalize();
            var t = new ka(v.x, v.y);
            t.add(m, l);
            t.normalize();
            var w = v.dot(t.x, t.y);
            t.multiply(d / w);
            if (0.15 > w) {
                var w = c[k - 4],
                    x = c[k - 3];
                0 > (n -
                    w) * (s - x) - (q - x) * (u - w) ? (a.push(n - t.x), a.push(q - t.y), a.push(n + m * d), a.push(q + l * d), a.push(n - t.x), a.push(q - t.y), a.push(n + v.x * d), a.push(q + v.y * d)) : (a.push(n - m * d), a.push(q - l * d), a.push(n + t.x), a.push(q + t.y), a.push(n - v.x * d), a.push(q - v.y * d), a.push(n + t.x), a.push(q + t.y));
                ++f
            } else a.push(n - t.x), a.push(q - t.y), a.push(n + t.x), a.push(q + t.y);
            m = v.x;
            l = v.y
        }
        a.push(g - d * m);
        a.push(h - d * l);
        a.push(g + d * m);
        a.push(h + d * l);
        a = 0;
        for (c = f - 1; a < c;) e = 2 * a++, b.push(e), b.push(e + 1), b.push(e + 2), b.push(e + 2), b.push(e + 3), b.push(e + 1);
        return !0
    };
    Ca.$aQ =
        function(a) { if (6 > a.length) return null;
            null == Ca.$bQ && (Ca.$bQ = new Yi); return Ca.$bQ.triangulate(a) };
    var Ti = function() {};
    g.$CpB = Ti;
    Ti.__name__ = ["$CpB"];
    Ti.$dQ = function(a) { switch (a) {
            case 0:
                return $a.Left;
            case 1:
                return $a.Middle;
            case 2:
                return $a.Right } return $a.Unknown(a) };
    var xf = function() { this.$tI = null;
        n.call(this) };
    g.$CqB = xf;
    xf.__name__ = ["$CqB"];
    xf.__super__ = n;
    xf.prototype = m(n.prototype, {
        get_entitySlot: function() { return 43 },
        onStart: function() {
            var a = this,
                b = sa.$jN();
            null != b && q.$GI.$XH.orientation.watch(function(c,
                d) { null == c || c == b ? a.$gQ() : a.$fQ(c != d) })
        },
        $fQ: function(a) {
            var b = this;
            if (null == this.$tI) {
                this.owner.addChild(this.$tI = new F);
                var c = this.$tI;
                q.loadAssetPack(db.fromAssets("_2DKitOrientation")).then(function(d) {
                    b.registerDisposable(d);
                    var e = new og(0, 0, 0);
                    a && e.alpha.animate(0, 1, 0.3);
                    c.add(e);
                    var f = (new Ia(d.getTexture("RotateDevice"))).centerAnchor();
                    c.addChild((new F).add(f));
                    d = function() { e.setSize(q.$GI.$XH.get_width(), q.$GI.$XH.get_height());
                        f.setXY(q.$GI.$XH.get_width() / 2, q.$GI.$XH.get_height() / 2) };
                    d();
                    b.connect0(q.$GI.$XH.resize, d)
                })
            }
        },
        $gQ: function() { null != this.$tI && (this.$tI.dispose(), this.$tI = null) },
        __class__: xf
    });
    var Sc = function() {};
    g.$CrB = Sc;
    Sc.__name__ = ["$CrB"];
    Sc.$iQ = function(a) { var b = new jc;
        b.useCache = !0;
        b.useEnumIndex = !1;
        b.serialize(a); return Sc.$kQ(b.toString(), !1) };
    Sc.$jQ = function(a) { return cb.run(Sc.$kQ(a, !0)) };
    Sc.$kQ = function(a, b) { for (var c = "", d = new Zi(a.length), e = 0, f = a.length; e < f;) { var k = e++,
                g = d.nextInt() % 30;
            b && (g = -g);
            k = a.charCodeAt(k) + g;
            c += String.fromCharCode(k) } return c };
    var Gg =
        function() {};
    g.$CsB = Gg;
    Gg.__name__ = ["$CsB"];
    Gg.prototype = { __class__: Gg };
    var de = function() {};
    g.$CtB = de;
    de.__name__ = ["$CtB"];
    de.prototype = { __class__: de };
    var wa = function(a, b) { this.$zQ = new Hg;
        this.$yQ = !1;
        this.$xQ = a.getContext("2d", { alpha: b }) };
    g.$CuB = wa;
    wa.__name__ = ["$CuB"];
    wa.__interfaces__ = [be];
    wa.prototype = {
        save: function() { var a = this.$zQ,
                b = this.$zQ.next;
            null == b && (b = new Hg, b.$BR = a, a.next = b);
            b.$NM = a.$NM;
            b.$PM = a.$PM;
            b.$RM = a.$RM;
            b.$_Q = a.$_Q;
            b.$AR = a.$AR;
            this.$zQ = b;
            this.$xQ.save() },
        translate: function(a, b) {
            this.$xQ.translate(a |
                0, b | 0)
        },
        scale: function(a, b) { this.$xQ.scale(a, b) },
        rotate: function(a) { this.$xQ.rotate(3.141592653589793 * a / 180) },
        transform: function(a, b, c, d, e, f) { this.$xQ.transform(a, b, c, d, e, f) },
        restore: function() { this.$zQ = this.$zQ.$BR;
            this.$xQ.restore() },
        $lQ: function(a, b, c, d, e) {
            var f = this.$zQ,
                f = (255 * f.$NM & 255) << 16 | (255 * f.$PM & 255) << 8 | 255 * f.$RM & 255;
            null == wa.$$Q && (wa.$$Q = M.$iS(d, e));
            wa.$$Q.width = d;
            wa.$$Q.height = e;
            var k = wa.$$Q.getContext("2d", null);
            k.globalCompositeOperation = "copy";
            k.fillStyle = M.$oS(f);
            k.fillRect(0, 0, d,
                e);
            k.globalCompositeOperation = "multiply";
            k.drawImage(a, b, c, d, e, 0, 0, d, e);
            k.globalCompositeOperation = "destination-atop";
            k.drawImage(a, b, c, d, e, 0, 0, d, e);
            return wa.$$Q
        },
        drawTexture: function(a, b, c) { this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height()) },
        drawSubTexture: function(a, b, c, d, e, f, k) {
            if (this.$yQ) this.$yQ = !1, this.$xQ.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, d, e, f, k), this.$xQ.globalCompositeOperation = "source-over";
            else {
                var g = a.$XN;
                d = a.$YN + d | 0;
                a = a.$ZN + e | 0;
                f |= 0;
                k |= 0;
                b |= 0;
                c |= 0;
                this.$zQ.$_Q ? (g = this.$lQ(g.$IR, d, a, f, k), this.$xQ.drawImage(g, b, c, f, k)) : this.$xQ.drawImage(g.$IR, d, a, f, k, b, c, f, k)
            }
        },
        drawPattern: function(a, b, c, d, e) { this.$yQ ? (this.$yQ = !1, this.$xQ.globalCompositeOperation = "copy", this.drawPattern(a, b, c, d, e), this.$xQ.globalCompositeOperation = "source-over") : (b |= 0, c |= 0, d |= 0, e |= 0, this.$zQ.$AR ? this.$xQ.rect(b, c, d, e) : (this.$xQ.fillStyle = this.$tQ(a), this.$xQ.fillRect(b, c, d, e))) },
        fillRect: function(a, b, c, d, e) {
            this.$yQ ? (this.$yQ = !1, this.$xQ.globalCompositeOperation = "copy", this.fillRect(a,
                b, c, d, e), this.$xQ.globalCompositeOperation = "source-over") : (b |= 0, c |= 0, d |= 0, e |= 0, this.$zQ.$AR ? this.$xQ.rect(b, c, d, e) : (this.$xQ.fillStyle = this.$sQ(a), this.$xQ.fillRect(b, c, d, e)))
        },
        fillTriangles: function(a, b, c) { this.$yQ = !1;
            this.$mQ(b, c);
            this.$uQ(a) },
        drawTriangles: function(a, b, c) { this.$yQ = !1;
            this.$mQ(b, c);
            this.$vQ(a) },
        $mQ: function(a, b) {
            this.$xQ.beginPath();
            for (var c = 0, d = b.length; c < d;) {
                var e = 2 * b[c],
                    f = 2 * b[c + 1],
                    k = 2 * b[c + 2],
                    c = c + 3;
                this.$xQ.moveTo(a[e], a[e + 1]);
                this.$xQ.lineTo(a[f], a[f + 1]);
                this.$xQ.lineTo(a[k],
                    a[k + 1])
            }
            this.$xQ.closePath()
        },
        fillPolygon: function(a, b) { this.$yQ = !1;
            this.$nQ(b);
            this.$uQ(a) },
        drawPolygon: function(a, b) { this.$yQ = !1;
            this.$nQ(b);
            this.$vQ(a) },
        $nQ: function(a) { this.$xQ.beginPath(); for (var b = 0, c = a.length; b < c;) { var d = a[b++],
                    e = a[b++];
                this.$xQ.lineTo(d, e) } this.$xQ.closePath() },
        drawCircle: function(a, b, c, d, e) { this.$yQ = !1;
            this.$oQ(b, c, d);
            this.$vQ(a) },
        fillCircle: function(a, b, c, d, e) { this.$yQ = !1;
            this.$oQ(b, c, d);
            this.$uQ(a) },
        strokeCircle: function(a, b, c, d, e, f) {
            this.$yQ = !1;
            this.$oQ(b, c, d);
            this.$wQ(a,
                e)
        },
        $oQ: function(a, b, c) { this.$xQ.beginPath();
            this.$xQ.arc(a, b, c, 0, 6.283185307179586);
            this.$xQ.closePath() },
        drawEllipse: function(a, b, c, d, e, f) { this.$yQ = !1;
            this.$pQ(b, c, d, e);
            this.$vQ(a) },
        fillEllipse: function(a, b, c, d, e, f) { this.$yQ = !1;
            this.$pQ(b, c, d, e);
            this.$uQ(a) },
        strokeEllipse: function(a, b, c, d, e, f, k) { this.$yQ = !1;
            this.$pQ(b, c, d, e);
            this.$wQ(a, f) },
        $pQ: function(a, b, c, d) {
            var e = 0.5522848 * c,
                f = 0.5522848 * d,
                k = a - c,
                g = b - d;
            c = a + c;
            d = b + d;
            this.$xQ.beginPath();
            this.$xQ.moveTo(k, b);
            this.$xQ.bezierCurveTo(k, b - f, a - e, g, a,
                g);
            this.$xQ.bezierCurveTo(a + e, g, c, b - f, c, b);
            this.$xQ.bezierCurveTo(c, b + f, a + e, d, a, d);
            this.$xQ.bezierCurveTo(a - e, d, k, b + f, k, b);
            this.$xQ.closePath()
        },
        fillArc: function(a, b, c, d, e, f, k) { this.$yQ = !1;
            f = e + f;
            this.$xQ.beginPath();
            this.$xQ.moveTo(b, c);
            this.$xQ.arc(0, 0, d, 3.141592653589793 * e / 180, 3.141592653589793 * f / 180);
            this.$uQ(a) },
        strokeArc: function(a, b, c, d, e, f, k, g) { this.$yQ = !1;
            c = e + f;
            this.$xQ.beginPath();
            this.$xQ.arc(b, b, d, 3.141592653589793 * e / 180, 3.141592653589793 * c / 180);
            this.$wQ(a, k) },
        strokeLines: function(a, b,
            c) { this.$yQ = !1;
            this.$qQ(b);
            this.$xQ.lineWidth = c;
            this.$xQ.strokeStyle = this.$sQ(a);
            this.$xQ.stroke() },
        drawLines: function(a, b, c) { this.$yQ = !1;
            this.$qQ(b);
            this.$xQ.lineWidth = c;
            this.$xQ.strokeStyle = this.$tQ(a);
            this.$xQ.stroke() },
        $qQ: function(a) { this.$xQ.beginPath(); if (2 <= a.length) { this.$xQ.moveTo(a[0], a[1]); for (var b = 2, c = a.length; b < c;) { var d = a[b++],
                        e = a[b++];
                    this.$xQ.lineTo(d, e) } } },
        multiplyAlpha: function(a) { this.$xQ.globalAlpha *= a },
        setAlpha: function(a) { this.$xQ.globalAlpha = a },
        tint: function(a, b, c) {
            var d =
                this.$zQ;
            d.$NM *= a;
            d.$PM *= b;
            d.$RM *= c;
            d.$_Q = !0
        },
        setBlendMode: function(a) { var b; switch (a[1]) {
                case 0:
                    b = "source-over"; break;
                case 1:
                    b = "lighter"; break;
                case 2:
                    b = "multiply"; break;
                case 3:
                    b = "screen"; break;
                case 4:
                    b = "destination-in"; break;
                case 5:
                    b = "copy" } this.$xQ.globalCompositeOperation = b },
        beginMask: function() { var a = this.$zQ;
            a.$AR && this.endMask();
            a.$AR = !0;
            this.$xQ.beginPath() },
        endMask: function() { var a = this.$zQ;
            a.$AR && (a.$AR = !1, this.$xQ.clip()) },
        applyScissor: function(a, b, c, d) {
            this.$xQ.beginPath();
            this.$xQ.rect(a |
                0, b | 0, c | 0, d | 0);
            this.$xQ.clip()
        },
        willRender: function() { this.$yQ = !0 },
        didRender: function() {},
        onResize: function(a, b) {},
        $sQ: function(a) { var b = this.$zQ;
            b.$_Q && (a = (b.$NM * (a & 16711680) / 16711680 * 255 & 255) << 16 | (b.$PM * (a & 65280) / 65280 * 255 & 255) << 8 | b.$RM * (a & 255) / 255 * 255 & 255); return M.$oS(a) },
        $tQ: function(a) { return this.$zQ.$_Q ? (a = this.$lQ(a.$XN.$IR, a.$YN, a.$ZN, a.$hJ, a.$iJ), this.$xQ.createPattern(a, "repeat")) : a.$FR() },
        $uQ: function(a) { this.$zQ.$AR || (this.$xQ.fillStyle = this.$sQ(a), this.$xQ.fill()) },
        $vQ: function(a) {
            this.$zQ.$AR ||
                (this.$xQ.fillStyle = this.$tQ(a), this.$xQ.fill())
        },
        $wQ: function(a, b) { this.$zQ.$AR || (this.$xQ.strokeStyle = this.$sQ(a), this.$xQ.lineWidth = b, this.$xQ.stroke()) },
        __class__: wa
    };
    var Hg = function() { this.$BR = this.next = null;
        this.$_Q = this.$AR = !1;
        this.$NM = this.$PM = this.$RM = 1 };
    g.$CvB = Hg;
    Hg.__name__ = ["$CvB"];
    Hg.prototype = { __class__: Hg };
    var Qd = function(a) { this.graphics = new wa(a, !0);
        this.$ER = new ya(!0) };
    g.$CwB = Qd;
    Qd.__name__ = ["$CwB"];
    Qd.__interfaces__ = [ce];
    Qd.prototype = {
        createTextureFromImage: function(a, b) {
            var c =
                new od(a);
            return c.createTexture(c.width, c.height)
        },
        createTexture: function(a, b, c) { return (new od(M.$iS(a, b))).createTexture(a, b) },
        createSystemFont: function(a) { return new Ib(a) },
        getTextureAssetFormats: function() { return [] },
        willRender: function() { this.graphics.willRender() },
        didRender: function() { this.graphics.didRender() },
        __class__: Qd
    };
    var Ig = function(a, b, c) { this.$HR = 0;
        this.$GR = null;
        ec.call(this, a, b, c) };
    g.$CxB = Ig;
    Ig.__name__ = ["$CxB"];
    Ig.__super__ = ec;
    Ig.prototype = m(ec.prototype, {
        $FR: function() {
            if (this.$HR !=
                this.$XN.$JR || null == this.$GR) this.$HR = this.$XN.$JR, this.$GR = this.$XN.$LR(this.$YN, this.$ZN, this.$hJ, this.$iJ);
            return this.$GR
        },
        __class__: Ig
    });
    var od = function(a) { this.$OR = null;
        this.$JR = 0;
        this.$qM = !1;
        this.$IR = a;
        this.width = a.width;
        this.height = a.height };
    g.$CyB = od;
    od.__name__ = ["$CyB"];
    od.__interfaces__ = [Gg];
    od.__super__ = Ba;
    od.prototype = m(Ba.prototype, {
        createTexture: function(a, b) { return new Ig(this, a, b) },
        getGraphics: function() { null == this.$OR && (this.$NR(), this.$OR = new Jg(this)); return this.$OR },
        $LR: function(a,
            b, c, d) { var e = this.$NR(),
                f = this.$IR; if (0 != a || 0 != b || c != this.width || d != this.height) f = M.$iS(c, d), c = f.getContext("2d", null), c.globalCompositeOperation = "copy", c.drawImage(this.$IR, -a, -b); return e.createPattern(f, "repeat") },
        $NR: function() { Z.__instanceof(this.$IR, HTMLCanvasElement) || (this.$IR = M.$jS(this.$IR)); return this.$IR.getContext("2d", null) },
        $oM: function() { this.$OR = this.$IR = null },
        __class__: od
    });
    var Jg = function(a) { wa.call(this, a.$IR, !0);
        this.$PR = a };
    g.$CzB = Jg;
    Jg.__name__ = ["$CzB"];
    Jg.__super__ = wa;
    Jg.prototype =
        m(wa.prototype, {
            drawTexture: function(a, b, c) { wa.prototype.drawTexture.call(this, a, b, c);++this.$PR.$JR },
            drawSubTexture: function(a, b, c, d, e, f, k) { wa.prototype.drawSubTexture.call(this, a, b, c, d, e, f, k);++this.$PR.$JR },
            drawPattern: function(a, b, c, d, e) { wa.prototype.drawPattern.call(this, a, b, c, d, e);++this.$PR.$JR },
            fillRect: function(a, b, c, d, e) { wa.prototype.fillRect.call(this, a, b, c, d, e);++this.$PR.$JR },
            fillTriangles: function(a, b, c) { wa.prototype.fillTriangles.call(this, a, b, c);++this.$PR.$JR },
            drawTriangles: function(a,
                b, c) { wa.prototype.drawTriangles.call(this, a, b, c);++this.$PR.$JR },
            drawCircle: function(a, b, c, d, e) { null == e && (e = 50);
                wa.prototype.drawCircle.call(this, a, b, c, d, e);++this.$PR.$JR },
            fillCircle: function(a, b, c, d, e) { null == e && (e = 50);
                wa.prototype.fillCircle.call(this, a, b, c, d, e);++this.$PR.$JR },
            drawEllipse: function(a, b, c, d, e, f) { null == f && (f = 50);
                wa.prototype.drawEllipse.call(this, a, b, c, d, e, f);++this.$PR.$JR },
            fillEllipse: function(a, b, c, d, e, f) { null == f && (f = 50);
                wa.prototype.fillEllipse.call(this, a, b, c, d, e, f);++this.$PR.$JR },
            strokeLines: function(a, b, c) { wa.prototype.strokeLines.call(this, a, b, c);++this.$PR.$JR },
            drawLines: function(a, b, c) { wa.prototype.drawLines.call(this, a, b, c);++this.$PR.$JR },
            __class__: Jg
        });
    var Y = function(a, b) { Xd.call(this, a, b) };
    g.$C_B = Y;
    Y.__name__ = ["$C_B"];
    Y.$UR = function(a) {
        var b = [z.PNG, z.JPG, z.GIF],
            c = 2,
            d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function(e) { 1 == d.width && b.unshift(z.WEBP);--c;
            0 == c && a(b) };
        d.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var e;
        e = window.document.createElement("img");
        e.onload = e.onerror = function(d) { 1 == e.width && b.unshift(z.JXR);--c;
            0 == c && a(b) };
        e.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    Y.$VR = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == ha(a, a.canPlayType)) return [];
        var b = new Ra("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!U.get_supported() && b.match(c)) return [];
        b = [];
        b.push({ format: z.MP3, mimeType: "audio/mpeg" });
        b.push({ format: z.MP4, mimeType: "video/mp4" });
        for (var c = [{ format: z.OPUS, mimeType: "audio/ogg; codecs=opus" }, { format: z.OGG, mimeType: "audio/ogg; codecs=vorbis" }, { format: z.WAV, mimeType: "audio/wav" }, { format: z.WEBM, mimeType: "video/webm" }], b = 0 <= window.navigator.userAgent.indexOf("2DKSim") ? c : b.concat(c), c = [], d = 0; d < b.length;) {
            var e = b[d];
            ++d;
            var f = "";
            try { f = a.canPlayType(e.mimeType) } catch (k) { k instanceof s && (k = k.val) }
            "" !=
            f && c.push(e.format)
        }
        return c
    };
    Y.$WR = function() { if (Y.$hR) { Y.$hR = !1; if ((new Ra("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1; var a = new XMLHttpRequest;
            a.open("GET", ".", !0); if ("" != a.responseType) return !1;
            a.responseType = "blob"; if ("blob" != a.responseType) return !1;
            Y.$iR = M.$aS("URL").value } return null != Y.$iR && null != Y.$iR.createObjectURL };
    Y.$XR = function(a) { var b = ++Y.$fR;
        null == Y.$eR && (Y.$eR = new rb);
        Y.$eR.h[b] = a; return b };
    Y.$YR = function(a) { Y.$eR.remove(a) };
    Y.__super__ = Xd;
    Y.prototype =
        m(Xd.prototype, {
            $uM: function(a, b) {
                var c = this;
                switch (b.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        var d;
                        d = window.document.createElement("img");
                        var e = new nd;
                        e.$MO(d, "load", function(a) { Y.$WR() && Y.$iR.revokeObjectURL(d.src);
                            a = c.$GI.getRenderer().createTextureFromImage(d);
                            null != a ? c.$wM(b, a) : c.$$M(b) });
                        e.$MO(d, "error", function(a) { c.$zM(b, "Failed to load image") });
                        e = "data:" == D.substr(a, 0, 5);
                        !e && Y.$WR() ? this.$TR(a, b, "blob", function(a) { d.src = Y.$iR.createObjectURL(a) }) : (e || (d.crossOrigin = ""), d.src = a);
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        if (U.get_supported()) this.$TR(a, b, "arraybuffer", function(a) { U.$ET.decodeAudioData(a, function(a) { c.$wM(b, new U(a)) }, function() { c.$wM(b, wb.$HO()) }) });
                        else {
                            var f;
                            f = window.document.createElement("audio");
                            f.preload = "auto";
                            var k = Y.$XR(f),
                                e = new nd;
                            e.$MO(f, "canplaythrough", function(a) { Y.$YR(k);
                                c.$wM(b, new ee(f)) });
                            e.$MO(f, "error", function(a) { Y.$YR(k);
                                a = f.error.code;
                                3 == a || 4 == a ? c.$wM(b, wb.$HO()) : c.$zM(b, "Failed to load audio: " + f.error.code) });
                            e.$MJ(f, "progress", function(a) {
                                0 <
                                    f.buffered.length && 0 < f.duration && (a = f.buffered.end(0) / f.duration, c.$xM(b, a * b.bytes | 0, b.bytes))
                            });
                            f.src = a;
                            f.load()
                        }
                        break;
                    case 16:
                    case 17:
                        var g;
                        g = window.document.createElement("video");
                        g.preload = "metadata";
                        var h = Y.$XR(g),
                            e = new nd;
                        e.$MO(g, "loadedmetadata", function(a) { Y.$YR(h);
                            c.$wM(b, new fe(g)) });
                        e.$MO(g, "error", function(a) { Y.$YR(h);
                            c.$zM(b, "Failed to load video: " + g.error.code) });
                        g.src = a;
                        g.load();
                        break;
                    case 13:
                    case 14:
                        (function(a, d) {
                            var e = "_kit_font_" + Y.$gR;
                            ++Y.$gR;
                            if ("undefined" != typeof FontFace)(new FontFace(e,
                                "url(" + a + ")")).load().then(function(a) { c.$wM(b, new Ib(e, a));
                                window.document.fonts.add(a) });
                            else {
                                var f;
                                f = window.document.createElement("style");
                                f.innerHTML = "@font-face{font-family:" + e + ";src:url(" + a + ");}";
                                window.document.head.appendChild(f);
                                var k = window.document.createElement("canvas").getContext("2d", null);
                                k.font = "300px sans";
                                var g = k.measureText("BESbswy").width;
                                k.font = '300px "' + e + '"';
                                var h = Date.now() / 1E3;
                                q.nextFrame(function(a) {
                                    var d = null;
                                    return d = function() {
                                        var a = Date.now() / 1E3 - h,
                                            l = k.measureText("BESbswy").width;
                                        5 <= a || g != l ? c.$wM(b, new Ib(e, null, f)) : q.$GI.$PH.$PQ(d)
                                    }
                                }(this))
                            }
                        })(a, !1);
                        break;
                    case 18:
                        this.$TR(a, b, "text", function(a) { c.$wM(b, new Yd(a)) })
                }
            },
            $vM: function(a) { var b = this;
                null == Y.$dR && (Y.$dR = new ea, Y.$UR(function(a) { var d;
                    d = window.navigator.isCocoonJS ? [z.TTF, z.WOFF] : [z.WOFF, z.TTF];
                    a = b.$GI.getRenderer().getTextureAssetFormats().concat(a).concat(Y.$VR()).concat(d).concat([z.Data]);
                    Y.$dR.success(a) }));
                Y.$dR.then(a) },
            $TR: function(a, b, c, d) {
                var e = this,
                    f = null,
                    k = null,
                    g = 0,
                    h = !1,
                    l = function() { h && (h = !1, window.clearInterval(g)) },
                    m = 3,
                    n = function() {--m; return 0 <= m ? (k(), !0) : !1 },
                    k = function() { l();
                        null != f && f.abort();
                        f = new XMLHttpRequest;
                        f.open("GET", a, !0);
                        f.responseType = c; var k = 0;
                        f.onprogress = function(a) { h || (h = !0, g = window.setInterval(function() { 4 != f.readyState && 5E3 < Date.now() - k && !n() && (l(), e.$zM(b, "Download stalled")) }, 1E3));
                            k = Date.now();
                            e.$xM(b, a.loaded, a.total) };
                        f.onerror = function(a) { 0 == f.status && n() || (l(), e.$zM(b, "HTTP error " + f.status)) };
                        f.onload = function(a) { a = f.response;
                            null == a && (a = f.responseText);
                            l();
                            d(a) };
                        f.send() };
                k()
            },
            __class__: Y
        });
    var $i = function() {};
    g["kit.subsystem.ExternalSystem"] = $i;
    $i.__name__ = ["kit", "subsystem", "ExternalSystem"];
    $i.prototype = { __class__: $i, __properties__: { get_supported: "get_supported" } };
    var yf = function() {};
    g.$CBC = yf;
    yf.__name__ = ["$CBC"];
    yf.__interfaces__ = [$i];
    yf.prototype = { get_supported: function() { return !0 }, call: function(a, b) { null == b && (b = []); for (var c = window, d = c, e = 0, f = a.split("."); e < f.length;) { var k = f[e];++e;
                c = d;
                d = P.field(c, k) } return d.apply(c, b) }, __class__: yf, __properties__: { get_supported: "get_supported" } };
    var uf = function(a, b) { ib.call(this, a);
        this.$hH = b };
    g.$CFC = uf;
    uf.__name__ = ["$CFC"];
    uf.__super__ = ib;
    uf.prototype = m(ib.prototype, { set_cursor: function(a) { var b; switch (a[1]) {
                case 0:
                    b = ""; break;
                case 1:
                    b = "pointer"; break;
                case 2:
                    b = "none" } this.$hH.style.cursor = b; return ib.prototype.set_cursor.call(this, a) }, __class__: uf });
    var ee = function(a) { this.$qM = !1;
        this.$ES = a };
    g.$CGC = ee;
    ee.__name__ = ["$CGC"];
    ee.__interfaces__ = [ld];
    ee.__super__ = Ba;
    ee.prototype = m(Ba.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new ge(this,
                a, !1)
        },
        loop: function(a) { null == a && (a = 1); return new ge(this, a, !0) },
        $oM: function() { this.$ES = null },
        __class__: ee
    });
    var ge = function(a, b, c) { this.$LS = !1; var d = this;
        this.$JO = a;
        this.$yR = !1;
        this.$HS = window.document.createElement("audio");
        this.$HS.loop = c;
        this.$HS.src = a.$ES.src;
        this.volume = new X(b, function(a, b) { d.$GS() });
        this.$GS();
        this.$KO = new ya(!1);
        this.$FS();
        q.hidden.$pH && this.set_paused(!0) };
    g.$CHC = ge;
    ge.__name__ = ["$CHC"];
    ge.__interfaces__ = [de, md];
    ge.prototype = {
        get_sound: function() { return this.$JO },
        set_paused: function(a) {
            a !=
                this.$LS && ((this.$LS = a) ? this.$HS.pause() : this.$FS());
            return a
        },
        get_complete: function() { return this.$KO },
        update: function(a) { this.volume.update(a);
            this.$KO.set__(this.$HS.ended); return this.$KO.$pH || this.$LS ? (this.$yR = !1, this.$IS.dispose(), this.$JS.dispose(), !0) : !1 },
        dispose: function() { this.set_paused(!0);
            this.$KO.set__(!0) },
        $FS: function() {
            var a = this;
            this.$HS.play();
            this.$yR || (Rb.$nH.$PH.$NQ(this), this.$yR = !0, this.$IS = q.volume.get_changed().connect(function(b, c) { a.$GS() }), this.$JS = q.hidden.get_changed().connect(function(b,
                c) { b ? (a.$KS = a.$LS, a.set_paused(!0)) : a.set_paused(a.$KS) }))
        },
        $GS: function() { this.$HS.volume = q.volume.$pH * this.volume.$pH },
        __class__: ge,
        __properties__: { get_complete: "get_complete", get_sound: "get_sound", set_paused: "set_paused" }
    };
    var aj = function() {};
    g["kit.subsystem.StageSystem"] = aj;
    aj.__name__ = ["kit", "subsystem", "StageSystem"];
    aj.prototype = { __class__: aj, __properties__: { get_height: "get_height", get_width: "get_width" } };
    var dd = function(a) {
        this.$QS = 1;
        this.orientation = new ya(null);
        var b = this;
        this.$hH = a;
        this.resize =
            new bb;
        this.$QS = dd.$RS();
        M.$pS() || (M.$dS(this.$hH, "transform-origin", "top left"), M.$dS(this.$hH, "transform", "scale(" + 1 / this.$QS + ")"));
        window.addEventListener("resize", ha(this, this.$MS), !1);
        this.$MS(null);
        this.fullscreen = new ya(!1);
        M.$eS(window.document, "fullscreenchange", function(a) { b.$PS() }, !1);
        this.$PS()
    };
    g.$CIC = dd;
    dd.__name__ = ["$CIC"];
    dd.__interfaces__ = [aj];
    dd.$RS = function() {
        var a = window.devicePixelRatio;
        null == a && (a = 1);
        var b = window.document.createElement("canvas").getContext("2d", null),
            b = M.$aS("backingStorePixelRatio",
                b).value;
        null == b && (b = 1);
        return a / b
    };
    dd.prototype = {
        get_width: function() { return this.$hH.width },
        get_height: function() { return this.$hH.height },
        get_fullscreenSupported: function() { return !0 == M.$bS(["fullscreenEnabled", "fullScreenEnabled"], window.document).value },
        lockOrientation: function(a) { var b = M.$aS("lockOrientation", window.screen).value; if (null != b) { var c; switch (a[1]) {
                    case 0:
                        c = "portrait"; break;
                    case 1:
                        c = "landscape" } P.callMethod(window.screen, b, [c]) || null } },
        requestFullscreen: function(a) {
            null == a && (a = !0);
            if (a) { a = window.document.documentElement; var b = M.$bS(["requestFullscreen", "requestFullScreen"], a).value;
                null != b && b.apply(a, []) } else a = M.$bS(["exitFullscreen", "cancelFullscreen", "cancelFullScreen"], window.document).value, null != a && P.callMethod(window.document, a, [])
        },
        $MS: function(a) {
            var b = this.$hH.parentElement.getBoundingClientRect();
            !M.$VS || 90 != window.orientation && -90 != window.orientation ? this.$NS(b.width, b.height) : (a = Math.min(window.innerWidth, b.width), b = Math.min(window.innerHeight, b.height), this.$NS(a,
                b) && window.scrollTo(window.scrollX, window.scrollY));
            this.$OS()
        },
        $NS: function(a, b) { var c = this.$QS * a,
                d = this.$QS * b; if (this.$hH.width == c && this.$hH.height == d) return !1;
            1 != this.$QS && M.$pS() && (this.$hH.style.width = a + "px", this.$hH.style.height = b + "px");
            this.$hH.width = c | 0;
            this.$hH.height = d | 0;
            this.resize.emit(); return !0 },
        $OS: function() { null == window.orientation ? this.orientation.set__(null) : this.orientation.set__(window.innerWidth > window.innerHeight ? cc.Landscape : cc.Portrait) },
        $PS: function() {
            var a = M.$bS(["fullscreen",
                "fullScreen", "isFullScreen"
            ], window.document).value;
            this.fullscreen.set__(!0 == a)
        },
        __class__: dd,
        __properties__: { get_fullscreenSupported: "get_fullscreenSupported", get_height: "get_height", get_width: "get_width" }
    };
    var sf = function(a, b) { this.$SS = a;
        this.$TS = b + ":" };
    g.$CJC = sf;
    sf.__name__ = ["$CJC"];
    sf.__interfaces__ = [Eg];
    sf.prototype = {
        set: function(a, b) { var c = Sc.$iQ(b); try { this.$SS.setItem(this.$TS + a, c) } catch (d) { return d instanceof s && (d = d.val), (new ea).failure(d.message) } return (new ea).$FW(null) },
        get: function(a,
            b) { var c = null; try { c = this.$SS.getItem(this.$TS + a) } catch (d) { d instanceof s && (d = d.val), null } var e = b; if (null != c) try { e = Sc.$jQ(c) } catch (f) { f instanceof s && (f = f.val), null }
            return (new ea).$FW(e) },
        __class__: sf
    };
    var M = function() {};
    g.$CKC = M;
    M.__name__ = ["$CKC"];
    M.$ZS = function(a, b) { null == b && (b = 0);
        window.setTimeout(a, b) };
    M.$aS = function(a, b) {
        null == b && (b = window);
        var c = P.field(b, a);
        if (null != c) return { prefix: "", field: a, value: c };
        for (var c = a.charAt(0).toUpperCase() + D.substr(a, 1, null), d = 0, e = M.$US; d < e.length;) {
            var f = e[d];
            ++d;
            var k = f + c,
                g = P.field(b, k);
            if (null != g) return { prefix: f, field: k, value: g }
        }
        return { prefix: null, field: null, value: null }
    };
    M.$bS = function(a, b) { for (var c = 0; c < a.length;) { var d = a[c];++c;
            d = M.$aS(d, b); if (null != d.field) return d } return { prefix: null, field: null, value: null } };
    M.$cS = function(a, b) { null == b && (b = window); var c = M.$aS(a, b).value; if (null == c) return !1;
        b[a] = c; return !0 };
    M.$dS = function(a, b, c) { a = a.style; for (var d = 0, e = M.$US; d < e.length;) { var f = e[d];++d;
            a.setProperty("-" + f + "-" + b, c) } a.setProperty(b, c) };
    M.$eS = function(a,
        b, c, d) { for (var e = 0, f = M.$US; e < f.length;) { var k = f[e];++e;
            a.addEventListener(k + b, c, d) } a.addEventListener(b, c, d) };
    M.$iS = function(a, b) { var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b; return c };
    M.$jS = function(a) { var b = M.$iS(a.width, a.height),
            c = b.getContext("2d", null);
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore(); return b };
    M.$lS = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) {
                return 0 ==
                    b ? 0 : a(b)
            };
            Math.cos = function(a) { return 0 == a ? 1 : b(a) }
        }
    };
    M.$mS = function() { 0 <= window.navigator.userAgent.indexOf("iPhone OS 7_1") && (window.addEventListener("scroll", function(a) { window.document.activeElement == window.document.body && 0 < window.scrollY && (window.document.body.scrollTop = 0) }, !0), window.document.body.scrollTop = 0) };
    M.$nS = function(a, b, c) { var d = a.getContext("2d", null);
        d.drawImage(a, b - 1, 0, 1, c, b, 0, 1, c);
        d.drawImage(a, 0, c - 1, b, 1, 0, c, b, 1) };
    M.$oS = function(a) {
        for (a = (16777215 & a).toString(16); 6 > a.length;) a =
            "0" + u.string(a);
        return "#" + u.string(a)
    };
    M.$pS = function() { try { return window.self != window.parent } catch (a) { return a instanceof s && (a = a.val), !0 } };
    M.$qS = function(a) { return 157286400 };
    var Ib = function(a, b, c) { this.$qM = !1;
        this.$mF = a;
        this.$tS = b;
        this.$uS = c };
    g.$CLC = Ib;
    Ib.__name__ = ["$CLC"];
    Ib.__interfaces__ = [rg];
    Ib.__super__ = Ba;
    Ib.prototype = m(Ba.prototype, {
        createTexture: function(a, b) {
            var c = b.fontSize + 'px "' + this.$mF + '"';
            b.bold && (c = "bold " + c);
            b.italic && (c = "italic " + c);
            var d = this.$sS(c),
                e;
            e = window.document.createElement("canvas");
            var f = e.getContext("2d", null);
            f.font = c;
            0 < b.wrapWidth && (a = this.$rS(f, a, b.wrapWidth));
            var k = a.split("\n"),
                g;
            if (0 < b.wrapWidth && b.align != Va.Left) g = b.wrapWidth;
            else
                for (var h = g = 0; h < k.length;) { var l = k[h];++h;
                    g = Math.max(g, f.measureText(l).width) } g += b.strokeWidth;
            var h = d.$wS + d.$xS + b.strokeWidth,
                l = g + 4,
                m = h + (h + b.lineSpacing) * (k.length - 1) + 4;
            b.italic && (l += 0.25 * b.fontSize);
            e.width = Math.ceil(l);
            e.height = Math.ceil(m);
            f.font = c;
            f.textBaseline = "alphabetic";
            0 < b.strokeWidth && (f.strokeStyle = M.$oS(b.strokeColor), f.lineWidth =
                b.strokeWidth);
            f.fillStyle = M.$oS(b.color);
            var n;
            switch (b.align[1]) {
                case 0:
                    n = 0.5 * b.strokeWidth;
                    f.textAlign = "left"; break;
                case 1:
                    n = g / 2;
                    f.textAlign = "center"; break;
                case 2:
                    n = g - 0.5 * b.strokeWidth, f.textAlign = "right" } c = d.$wS + 0.5 * b.strokeWidth;
            for (d = 0; d < k.length;) g = k[d], ++d, 0 < b.strokeWidth && f.strokeText(g, n | 0, c | 0), f.fillText(g, n | 0, c | 0), c += h + b.lineSpacing;
            return q.$GI.$WH.createTextureFromImage(e, Aa.RGBA_4444)
        },
        $rS: function(a, b, c) {
            var d = "";
            b = b.split("\n");
            for (var e = 0, f = b.length; e < f;) {
                for (var k = e++, g = c, h = b[k].split(" "),
                        l = 0, m = h.length; l < m;) { var n = l++,
                        q = a.measureText(h[n]).width,
                        u = q + a.measureText(" ").width;
                    0 == n || u > g ? (0 < n && (d += "\n"), d += h[n], g = c - q) : (g -= u, d += " " + h[n]) } k < b.length - 1 && (d += "\n")
            }
            return d
        },
        $sS: function(a) {
            null == Ib.$vS && (Ib.$vS = new O);
            var b = Ib.$vS.get(a);
            if (null != b) return b;
            var c;
            c = window.document.createElement("canvas");
            var d = c.getContext("2d", null);
            d.font = a;
            var e = Math.ceil(d.measureText("|M\u00c9q").width),
                b = Math.ceil(d.measureText("M").width),
                f = 2 * b,
                b = 1.4 * b | 0;
            c.width = e;
            c.height = f;
            d.fillStyle = "#f00";
            d.fillRect(0,
                0, e, f);
            d.font = a;
            d.textBaseline = "alphabetic";
            d.fillStyle = "#000";
            d.fillText("|M\u00c9q", 0, b);
            c = d.getImageData(0, 0, e, f).data;
            for (var d = c.length, e = 4 * e, k = 0, g = 0, h = !1; k < b;) { for (var l = 0; l < e;) { if (255 != c[g + l]) { h = !0; break } l += 4 } if (h) break;
                else g += e;++k } l = b - k;
            g = d - e;
            h = !1;
            for (k = f; k > b;) { for (f = 0; f < e;) { if (255 != c[g + f]) { h = !0; break } f += 4 } if (h) break;
                else g -= e;--k } b = new bj(l, k - b);
            Ib.$vS.set(a, b);
            return b
        },
        $oM: function() {
            null != this.$tS && (window.document.fonts["delete"](this.$tS), this.$tS = null);
            null != this.$uS && (null != this.$uS.parentNode &&
                this.$uS.parentNode.removeChild(this.$uS), this.$uS = null)
        },
        __class__: Ib
    });
    var bj = function(a, b) { this.$wS = a;
        this.$xS = b };
    g.$CMC = bj;
    bj.__name__ = ["$CMC"];
    bj.prototype = { __class__: bj };
    var fe = function(a) { this.$qM = !1;
        this.$yS = a };
    g.$CNC = fe;
    fe.__name__ = ["$CNC"];
    fe.__interfaces__ = [$d];
    fe.__super__ = Ba;
    fe.prototype = m(Ba.prototype, {
        play: function(a) { null == a && (a = 1); return new Kg(this, a, !1) },
        get_width: function() { return this.$yS.videoWidth },
        get_height: function() { return this.$yS.videoHeight },
        $oM: function() { this.$yS = null },
        __class__: fe,
        __properties__: { get_height: "get_height", get_width: "get_width" }
    });
    var Kg = function(a, b, c) {
        this.$jJ = null;
        this.$LS = !1;
        var d = this;
        this.$LO = a;
        this.$HS = window.document.createElement("video");
        this.$HS.loop = c;
        this.$HS.src = a.$yS.src;
        this.$HS.width = a.$yS.videoWidth;
        this.$HS.height = a.$yS.videoHeight;
        this.$HS.setAttribute("playsinline", "");
        this.$HS.setAttribute("webkit-playsinline", "");
        0 <= window.navigator.userAgent.indexOf("2DKSim") && (this.$HS.src += "?" + Math.random());
        this.volume = new X(b, function(a,
            b) { d.$GS() });
        this.$GS();
        this.$KO = new ya(!1);
        this.$$S();
        q.hidden.$pH && this.set_paused(!0)
    };
    g.$COC = Kg;
    Kg.__name__ = ["$COC"];
    Kg.__interfaces__ = [de, ae];
    Kg.prototype = {
        get_texture: function() { null == this.$jJ && (this.$jJ = q.$GI.$WH.createTextureFromImage(this.$HS, Aa.RGB)); return this.$jJ },
        get_video: function() { return this.$LO },
        set_paused: function(a) { a != this.$LS && ((this.$LS = a) ? this.$HS.pause() : this.$$S()); return a },
        update: function(a) {
            this.volume.update(a);
            this.$KO.set__(this.$HS.ended);
            return this.$KO.$pH || this.$LS ?
                (this.$yR = !1, this.$IS.dispose(), this.$JS.dispose(), !0) : !1
        },
        dispose: function() { this.set_paused(!0);
            this.$KO.set__(!0) },
        $$S: function() { var a = this;
            this.$HS.play();
            this.$yR || (Rb.$nH.$PH.$NQ(this), this.$yR = !0, this.$IS = q.volume.get_changed().connect(function(b, c) { a.$GS() }), this.$JS = q.hidden.get_changed().connect(function(b, c) { b ? (a.$KS = a.$LS, a.set_paused(!0)) : a.set_paused(a.$KS) })) },
        $GS: function() { this.$HS.volume = q.volume.$pH * this.volume.$pH },
        __class__: Kg,
        __properties__: {
            get_video: "get_video",
            get_texture: "get_texture",
            set_paused: "set_paused"
        }
    };
    var U = function(a) { this.$qM = !1;
        this.$CT = a };
    g.$CRC = U;
    U.__name__ = ["$CRC"];
    U.__interfaces__ = [ld];
    U.__properties__ = { get_supported: "get_supported" };
    U.get_supported = function() {
        if (U.$KT) {
            U.$KT = !1;
            var a = M.$aS("AudioContext").value;
            if (null != a && (U.$ET = new a, U.$FT = U.$GT(), U.$FT.connect(U.$ET.destination), q.volume.watch(function(a, b) { U.$FT.gain.value = a }), q.$GI.$YH.down.connect(function(a) {
                        (new U(U.$JT())).play() }).once(), q.$GI.$YH.up.connect(function(a) { "suspended" == U.$ET.state && U.$ET.resume() }),
                    M.$VS)) var b = null,
                b = q.$GI.$YH.up.connect(function(a) { var d = (new U(U.$JT())).play();
                    M.$ZS(function() { var a = d.$PT();
                        (null == a || 2 <= a) && b.dispose() }) })
        }
        return null != U.$ET
    };
    U.$GT = function() { return null != U.$ET.createGain ? U.$ET.createGain() : U.$ET.createGainNode() };
    U.$HT = function(a, b) { null != a.start ? a.start(0, b) : a.noteOn(0, b) };
    U.$IT = function(a) { null != a.stop ? a.stop(0) : a.noteOff(0) };
    U.$JT = function() { null == U.$LT && (U.$LT = U.$ET.createBuffer(1, 1, 22050)); return U.$LT };
    U.__super__ = Ba;
    U.prototype = m(Ba.prototype, {
        play: function(a) {
            null ==
                a && (a = 1);
            return new he(this, a, !1)
        },
        loop: function(a) { null == a && (a = 1); return new he(this, a, !0) },
        get_duration: function() { return this.$CT.duration },
        $oM: function() { this.$CT = null },
        __class__: U,
        __properties__: { get_duration: "get_duration" }
    });
    var he = function(a, b, c) { this.$VT = 0;
        this.$QT = -1; var d = this;
        this.$JO = a;
        this.$AI = U.$FT;
        this.$KO = new ya(!1);
        this.$UT = c;
        this.$dI = a.get_duration();
        this.volume = new X(b, function(a, b) { null != d.$ST && d.$NT(a) });
        this.$FS(0);
        q.hidden.$pH && this.set_paused(!0) };
    g.$CSC = he;
    he.__name__ = ["$CSC"];
    he.__interfaces__ = [de, md];
    he.prototype = {
        get_sound: function() { return this.$JO },
        set_paused: function(a) { a != 0 <= this.$QT && (a ? (this.$MT(), this.$QT = this.get_position()) : (this.$KO.$pH || this.$FS(this.$QT), this.$QT = -1)); return a },
        get_complete: function() { return this.$KO },
        get_position: function() { return this.$KO.$pH ? this.$dI : 0 <= this.$QT ? this.$QT : (U.$ET.currentTime - this.$RT + this.$VT) % this.$dI },
        update: function(a) {
            this.volume.update(a);
            null != this.$ST && 3 == this.$ST.playbackState && this.$KO.set__(!0);
            return this.$KO.$pH ||
                0 <= this.$QT ? (this.$yR = !1, this.$JS.dispose(), this.$MT(), !0) : !1
        },
        $MT: function() { if (null != this.$ST) { U.$IT(this.$ST);
                this.$ST.disconnect();
                this.$ST.onended = null; if (M.$VS) { var a = U.$JT(); try { this.$ST.buffer = a } catch (b) { b instanceof s && (b = b.val) } } this.$ST = null } },
        dispose: function() { this.set_paused(!0);
            this.$KO.set__(!0) },
        $NT: function(a) { null == this.$TT && (this.$TT = U.$GT(), this.$OT(this.$TT));
            this.$TT.gain.value = a },
        $OT: function(a) {
            0 <= this.$QT || (this.$ST.disconnect(), this.$ST.connect(a));
            a.connect(this.$AI);
            this.$AI =
                a
        },
        $FS: function(a) { var b = this;
            this.$ST = U.$ET.createBufferSource();
            this.$ST.buffer = this.$JO.$CT;
            this.$ST.loop = this.$UT;
            this.$ST.onended = function() { b.$KO.set__(!0) };
            U.$HT(this.$ST, a);
            this.$ST.connect(this.$AI);
            this.$VT = 0 <= this.$QT ? this.$QT : 0;
            this.$RT = U.$ET.currentTime;
            1 == this.volume.$pH && null == this.$TT || this.$NT(this.volume.$pH);
            this.$yR || (Rb.$nH.$PH.$NQ(this), this.$yR = !0, this.$JS = q.hidden.get_changed().connect(function(a, d) { a ? (b.$KS = 0 <= b.$QT, b.set_paused(!0)) : b.set_paused(b.$KS) })) },
        $PT: function() {
            return null !=
                this.$ST ? this.$ST.playbackState : 3
        },
        __class__: he,
        __properties__: { get_position: "get_position", get_complete: "get_complete", get_sound: "get_sound", set_paused: "set_paused" }
    };
    var cj = function(a) {
        this.$dU = (new Cg).$mN(157286400).$oN(function(a, b) { return a.$$U() });
        this.$XU = this.$YU = this.$ZU = this.$aU = this.$bU = this.$cU = 0;
        this.$PU = [];
        this.$MU = !0;
        this.$KU = !1;
        this.$IU = this.$JU = null;
        this.$HU = !1;
        this.$GU = null;
        this.$FU = 0;
        this.$BU = this.$CU = this.$cK = this.$DU = this.$EU = null;
        this.$AU = !1;
        this.$_T = null;
        this.$$T = new tb;
        this.$zT =
            0;
        this.$xT = this.$yT = null;
        this.$XT = [];
        this.$WT = null;
        var b = this;
        this.$wT = a;
        this.$dU.$nN(function(a, d) { b.$iT(a, d) });
        this.$dU.$mN(M.$qS(a));
        q.lowMemoryWarning.connect(function() { b.$dU.dispose() });
        a.clearColor(0, 0, 0, 0);
        a.enable(3042);
        a.pixelStorei(37441, 1);
        a.pixelStorei(3317, 1);
        this.$LU = a.createBuffer();
        a.bindBuffer(34962, this.$LU);
        this.$NU = a.createBuffer();
        this.$OU = a.createBuffer();
        this.$yT = this.$NU;
        this.$QU = new pd(a, 0);
        this.$RU = new pd(a, 1);
        this.$SU = new pd(a, 2);
        this.$TU = new qd(a, 0);
        this.$UU = new qd(a,
            1);
        this.$VU = new qd(a, 2);
        this.$WU = new Lg(a);
        this.$vT(16)
    };
    g.$CTC = cj;
    cj.__name__ = ["$CTC"];
    cj.prototype = {
        $YT: function(a, b) { this.$wT.viewport(0, 0, a, b);
            this.$aU = a;
            this.$bU = b },
        $ZT: function() { this.$cU = this.$cU + 1 | 0;
            this.$jT(null);
            this.$wT.clear(16384) },
        $aT: function() { this.$uT();
            this.$wT.flush() },
        $cT: function(a) { a == this.$cK && (this.$uT(), this.$cK = null);
            this.$kT(a);
            null != a.$zU ? this.$iT(a, a.$zU) : this.$dU.$tN(a) },
        $dT: function(a) {
            if (a.$yU) {
                a.$yU = !1;
                var b = this.$dU.$tN(a, !1);
                null != b ? a.$zU = b : this.$gT(a);
                a.$uU = null;
                a.$vU = null
            }
        },
        $eT: function() { var a = this.$wT.createTexture();
            this.$hT(a);
            this.$wT.texParameteri(3553, 10242, 33071);
            this.$wT.texParameteri(3553, 10243, 33071);
            this.$wT.texParameteri(3553, 10240, 9729);
            this.$wT.texParameteri(3553, 10241, 9729); return a },
        $gT: function(a) {
            var b;
            b = a.$yU ? this.$dU.$iN(a) : a.$zU;
            if (null == b) {
                b = this.$eT();
                b = new dj(b);
                if (a.$yU) { var c = !0; if (this.$dU.$wN + a.$$U() > this.$dU.$xN) { var d = this.$dU.$qN();
                        2 > this.$cU - d.$xU && (c = !1) } this.$dU.$pN(a, b, c) } else a.$zU = b;
                switch (a.$_U[1]) {
                    case 2:
                    case 3:
                        c =
                            6407;
                        break;
                    default:
                        c = 6408
                }
                switch (a.$_U[1]) {
                    case 3:
                        d = 33635; break;
                    case 1:
                        d = 32819; break;
                    default:
                        d = 5121 }
                var e = a.$uU;
                if (null != e && null == u.instance(a.$uU, HTMLVideoElement)) { if (a.width != e.width || a.height != e.height) { var f = M.$iS(a.width, a.height);
                        f.getContext("2d", null).drawImage(e, 0, 0);
                        M.$nS(f, e.width, e.height);
                        e = f } this.$wT.texImage2D(3553, 0, c, c, d, e) } else this.$wT.texImage2D(3553, 0, c, a.width, a.height, 0, c, d, null)
            }
            a.$xU != this.$cU && (c = u.instance(a.$uU, HTMLVideoElement), null != c && 2 <= c.readyState && (this.$hT(b.$tU),
                this.$wT.texImage2D(3553, 0, 6407, 6407, 5121, c)));
            a.$xU = this.$cU;
            return b
        },
        $hT: function(a) { this.$JU != a && (this.$JU = a, this.$wT.bindTexture(3553, a)) },
        $iT: function(a, b) { a == this.$cK && (this.$uT(), this.$cK = null);
            this.$wT.deleteTexture(b.$tU);
            null != b.$LM && this.$wT.deleteTexture(b.$LM) },
        $jT: function(a) {
            if (this.$GU != a)
                if (this.$GU = a, null != a) {
                    var b = null;
                    null == a.$wU && (a.$wU = this.$wT.createFramebuffer(), this.$dT(a), b = a.$zU.$tU);
                    this.$wT.bindFramebuffer(36160, a.$wU);
                    this.$wT.viewport(0, 0, a.width, a.height);
                    null != b &&
                        this.$wT.framebufferTexture2D(36160, 36064, 3553, b, 0)
                } else this.$wT.bindFramebuffer(36160, null), this.$wT.viewport(0, 0, this.$aU, this.$bU)
        },
        $kT: function(a) { a == this.$_T && (this.$uT(), this.$_T = null);
            null != a.$wU && (this.$wT.deleteFramebuffer(a.$wU), a.$wU = null) },
        $lT: function(a, b, c, d, e, f) { f.$XN != this.$cK && (this.$uT(), this.$cK = f.$XN); return this.$tT(a, b, c, d, e, this.$mT(f.$XN, e)) },
        $mT: function(a, b) { return b ? this.$RU : null != a.$vU && a.$vU.separateAlpha ? this.$SU : this.$QU },
        $nT: function(a, b, c, d, e, f) {
            f.$XN != this.$cK &&
                (this.$uT(), this.$cK = f.$XN);
            if (f.$YN != this.$$T.x || f.$ZN != this.$$T.y || f.$hJ != this.$$T.width || f.$iJ != this.$$T.height) this.$uT(), this.$$T.set(f.$YN, f.$ZN, f.$hJ, f.$iJ);
            return this.$tT(a, b, c, d, e, this.$oT(f.$XN, e))
        },
        $oT: function(a, b) { return b ? this.$UU : null != a.$vU && a.$vU.separateAlpha ? this.$VU : this.$TU },
        $pT: function(a, b, c, d, e) { return this.$tT(a, b, c, d, e, this.$WU) },
        $qT: function(a, b, c, d, e, f) { return this.$sT(a, b, c, d, e, this.$WU, f) },
        $rT: function(a, b, c, d, e, f, k) {
            f.$XN != this.$cK && (this.$uT(), this.$cK = f.$XN);
            if (f.$YN !=
                this.$$T.x || f.$ZN != this.$$T.y || f.$hJ != this.$$T.width || f.$iJ != this.$$T.height) this.$uT(), this.$$T.set(f.$YN, f.$ZN, f.$hJ, f.$iJ);
            return this.$sT(a, b, c, d, e, this.$oT(f.$XN, e), k)
        },
        $bK: function(a, b, c, d, e, f, k) {
            a != this.$_T && (this.$uT(), this.$_T = a);
            b != this.$xT && (this.$uT(), this.$xT = b);
            d != this.$zT && (this.$uT(), this.$zT = d);
            e != this.$AU && (this.$uT(), this.$AU = e);
            f != this.$CU && (this.$uT(), f.$bK(), this.$CU = f);
            k != this.$yT && (this.$uT(), this.$yT = k);
            if (null != c || null != this.$BU) null != c && null != this.$BU && this.$BU.equals(c) ||
                (this.$uT(), this.$BU = null != c ? c.clone(this.$BU) : null, this.$KU = !0)
        },
        $sT: function(a, b, c, d, e, f, k) { this.$bK(a, b, c, d, e, f, this.$OU);
            a = this.$XT.length;
            f = a / f.$EV | 0; for (b = 0; b < k.length;) c = k[b], ++b, this.$PU.push(c + f); return a },
        $tT: function(a, b, c, d, e, f) { this.$bK(a, b, c, d, e, f, this.$NU);
            this.$XU >= this.$YU && this.$vT(2 * this.$YU);++this.$XU;
            a = this.$ZU;
            this.$ZU += 4 * f.$EV; return a },
        $uT: function() {
            if (this.$yT == this.$NU) { if (1 > this.$XU) return } else if (1 > this.$PU.length) return;
            this.$jT(this.$_T);
            if (this.$xT != this.$DU) {
                switch (this.$xT[1]) {
                    case 0:
                        this.$wT.blendFunc(1,
                            771);
                        break;
                    case 1:
                        this.$wT.blendFunc(1, 1);
                        break;
                    case 2:
                        this.$wT.blendFunc(774, 771);
                        break;
                    case 3:
                        this.$wT.blendFunc(1, 769);
                        break;
                    case 4:
                        this.$wT.blendFunc(0, 770);
                        break;
                    case 5:
                        this.$wT.blendFunc(1, 0)
                }
                this.$DU = this.$xT
            }
            if (this.$zT != this.$FU) {
                if (0 < this.$zT)
                    if (0 == this.$FU && this.$wT.enable(2960), this.$AU) { var a = 1 << this.$zT - 1;
                        this.$wT.stencilMask(a);
                        this.$FU < this.$zT && this.$wT.clear(1024);
                        this.$wT.stencilFunc(514, a - 1, 255) } else a = (1 << this.$zT) - 1, this.$wT.stencilFunc(514, a, a);
                else this.$wT.disable(2960);
                this.$FU =
                    this.$zT
            }
            this.$AU != this.$HU && (this.$AU ? (this.$wT.stencilMask(1 << this.$zT - 1), this.$wT.clear(1024), this.$wT.colorMask(!1, !1, !1, !1), this.$wT.stencilFunc(514, (1 << this.$zT - 1) - 1, 255), this.$wT.stencilOp(7680, 7680, 7682)) : (this.$wT.colorMask(!0, !0, !0, !0), a = (1 << this.$zT) - 1, this.$wT.stencilFunc(514, a, a), this.$wT.stencilOp(7680, 7680, 7680)), this.$HU = this.$AU);
            this.$KU && (null != this.$BU ? (this.$wT.enable(3089), this.$wT.scissor(this.$BU.x | 0, this.$BU.y | 0, this.$BU.width | 0, this.$BU.height | 0)) : this.$wT.disable(3089),
                this.$KU = !1);
            null != this.$cK && (a = this.$gT(this.$cK), null != a.$LM ? (this.$wT.activeTexture(33985), this.$hT(a.$tU), this.$wT.activeTexture(33984), this.$hT(a.$LM)) : this.$hT(a.$tU));
            this.$CU != this.$IU && (this.$CU.$GV(this.$IU), this.$IU = this.$CU);
            this.$CU != this.$TU && this.$CU != this.$UU && this.$CU != this.$VU || this.$CU.$QV(this.$$T.x / this.$cK.width, this.$$T.y / this.$cK.height, this.$$T.width / this.$cK.width, this.$$T.height / this.$cK.height);
            this.$yT != this.$EU && (this.$wT.bindBuffer(34963, this.$yT), this.$EU = this.$yT);
            if (this.$EU == this.$NU) { if (this.$MU) { this.$MU = !1; for (var a = new Uint16Array(6 * this.$YU), b = 0, c = this.$YU; b < c;) { var d = b++,
                            e = 6 * d,
                            d = 4 * d;
                        a[e] = d;
                        a[e + 1] = d + 1;
                        a[e + 2] = d + 2;
                        a[e + 3] = d + 2;
                        a[e + 4] = d + 3;
                        a[e + 5] = d } this.$wT.bufferData(34963, a, 35044) } this.$wT.bufferData(34962, this.$WT.subarray(0, this.$ZU), 35048);
                this.$wT.drawElements(4, 6 * this.$XU, 5123, 0);
                this.$ZU = this.$XU = 0 } else a = new Uint16Array(this.$PU), this.$wT.bufferData(34963, a, 35048), this.$PU.length = 0, this.$wT.bufferData(34962, new Float32Array(this.$XT), 35048), this.$XT.length =
                0, this.$wT.drawElements(4, a.length, 5123, 0)
        },
        $vT: function(a) { 1024 < a ? this.$uT() : (this.$YU = a, a = new Float32Array(32 * a), null != this.$WT && a.set(this.$WT, 0), this.$WT = a, this.$MU = !0) },
        __class__: cj
    };
    var Jb = function(a, b) { this.$iU = this.$zQ = null;
        null == Jb.$kU && (Jb.$kU = new Float32Array(8));
        this.$hU = a;
        this.$PR = b };
    g.$CUC = Jb;
    Jb.__name__ = ["$CUC"];
    Jb.__interfaces__ = [be];
    Jb.prototype = {
        save: function() {
            var a = this.$zQ,
                b = this.$zQ.next;
            null == b && (b = new Mg, b.$BR = a, a.next = b);
            a.$lU.clone(b.$lU);
            b.$NM = a.$NM;
            b.$PM = a.$PM;
            b.$RM = a.$RM;
            b.$LM = a.$LM;
            b.$TK = a.$TK;
            b.$UK = null != a.$UK ? a.$UK.clone(b.$UK) : null;
            b.$mU = a.$mU;
            b.$nU = a.$nU;
            this.$zQ = b
        },
        translate: function(a, b) { var c = this.$zQ.$lU;
            c.m02 += c.m00 * a + c.m01 * b;
            c.m12 += c.m10 * a + c.m11 * b },
        scale: function(a, b) { var c = this.$zQ.$lU;
            c.m00 *= a;
            c.m10 *= a;
            c.m01 *= b;
            c.m11 *= b },
        rotate: function(a) { var b = this.$zQ.$lU;
            a = 3.141592653589793 * a / 180; var c = Math.sin(a);
            a = Math.cos(a); var d = b.m00,
                e = b.m10,
                f = b.m01,
                k = b.m11;
            b.m00 = d * a + f * c;
            b.m10 = e * a + k * c;
            b.m01 = f * a - d * c;
            b.m11 = k * a - e * c },
        transform: function(a, b, c, d, e, f) {
            var k = this.$zQ;
            Jb.$jU.set(a, b, c, d, e, f);
            Ab.multiply(k.$lU, Jb.$jU, k.$lU)
        },
        restore: function() { this.$zQ = this.$zQ.$BR },
        drawTexture: function(a, b, c) { this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height()) },
        drawSubTexture: function(a, b, c, d, e, f, k) {
            var g = this.$zQ,
                h = a.$XN;
            b = this.$gU(b, c, f, k);
            c = h.width;
            h = h.height;
            d = (a.$YN + d) / c;
            e = (a.$ZN + e) / h;
            f = d + f / c;
            k = e + k / h;
            c = g.$NM;
            var h = g.$PM,
                l = g.$RM,
                m = g.$LM;
            a = this.$hU.$lT(this.$PR, g.$TK, g.$UK, g.$mU, g.$nU, a);
            g = this.$hU.$WT;
            g[a] = b[0];
            g[++a] = b[1];
            g[++a] = d;
            g[++a] = e;
            g[++a] = c;
            g[++a] = h;
            g[++a] =
                l;
            g[++a] = m;
            g[++a] = b[2];
            g[++a] = b[3];
            g[++a] = f;
            g[++a] = e;
            g[++a] = c;
            g[++a] = h;
            g[++a] = l;
            g[++a] = m;
            g[++a] = b[4];
            g[++a] = b[5];
            g[++a] = f;
            g[++a] = k;
            g[++a] = c;
            g[++a] = h;
            g[++a] = l;
            g[++a] = m;
            g[++a] = b[6];
            g[++a] = b[7];
            g[++a] = d;
            g[++a] = k;
            g[++a] = c;
            g[++a] = h;
            g[++a] = l;
            g[++a] = m
        },
        drawPattern: function(a, b, c, d, e) {
            var f = this.$zQ,
                g = a.$XN;
            b = this.$gU(b, c, d, e);
            d /= g.width;
            e /= g.height;
            g = f.$NM;
            c = f.$PM;
            var h = f.$RM,
                l = f.$LM;
            a = this.$hU.$nT(this.$PR, f.$TK, f.$UK, f.$mU, f.$nU, a);
            f = this.$hU.$WT;
            f[a] = b[0];
            f[++a] = b[1];
            f[++a] = 0;
            f[++a] = 0;
            f[++a] = g;
            f[++a] =
                c;
            f[++a] = h;
            f[++a] = l;
            f[++a] = b[2];
            f[++a] = b[3];
            f[++a] = d;
            f[++a] = 0;
            f[++a] = g;
            f[++a] = c;
            f[++a] = h;
            f[++a] = l;
            f[++a] = b[4];
            f[++a] = b[5];
            f[++a] = d;
            f[++a] = e;
            f[++a] = g;
            f[++a] = c;
            f[++a] = h;
            f[++a] = l;
            f[++a] = b[6];
            f[++a] = b[7];
            f[++a] = 0;
            f[++a] = e;
            f[++a] = g;
            f[++a] = c;
            f[++a] = h;
            f[++a] = l
        },
        fillRect: function(a, b, c, d, e) {
            var f = this.$zQ;
            b = this.$gU(b, c, d, e);
            c = f.$NM * (a & 16711680) / 16711680;
            d = f.$PM * (a & 65280) / 65280;
            a = f.$RM * (a & 255) / 255;
            e = f.$LM;
            var f = this.$hU.$pT(this.$PR, f.$TK, f.$UK, f.$mU, f.$nU),
                g = this.$hU.$WT;
            g[f] = b[0];
            g[++f] = b[1];
            g[++f] = c;
            g[++f] =
                d;
            g[++f] = a;
            g[++f] = e;
            g[++f] = b[2];
            g[++f] = b[3];
            g[++f] = c;
            g[++f] = d;
            g[++f] = a;
            g[++f] = e;
            g[++f] = b[4];
            g[++f] = b[5];
            g[++f] = c;
            g[++f] = d;
            g[++f] = a;
            g[++f] = e;
            g[++f] = b[6];
            g[++f] = b[7];
            g[++f] = c;
            g[++f] = d;
            g[++f] = a;
            g[++f] = e
        },
        fillTriangles: function(a, b, c) {
            var d = this.$zQ,
                e = d.$lU,
                f = e.m00,
                g = e.m01,
                h = e.m02,
                l = e.m10,
                m = e.m11,
                e = e.m12,
                n = d.$NM * (a & 16711680) / 16711680,
                q = d.$PM * (a & 65280) / 65280;
            a = d.$RM * (a & 255) / 255;
            var u = d.$LM;
            c = this.$hU.$qT(this.$PR, d.$TK, d.$UK, d.$mU, d.$nU, c);
            for (var d = this.$hU.$XT, s = 0, v = b.length; s < v;) {
                var t = b[s++],
                    w = b[s++];
                d[c++] = t * f + w * g + h;
                d[c++] = t * l + w * m + e;
                d[c++] = n;
                d[c++] = q;
                d[c++] = a;
                d[c++] = u
            }
        },
        drawTriangles: function(a, b, c) { var d = this.$zQ,
                e = a.$XN,
                f = d.$lU,
                g = f.m00,
                h = f.m01,
                l = f.m02,
                m = f.m10,
                n = f.m11,
                f = f.m12,
                q = d.$NM,
                u = d.$PM,
                s = d.$RM,
                t = d.$LM;
            a = this.$hU.$rT(this.$PR, d.$TK, d.$UK, d.$mU, d.$nU, a, c);
            c = this.$hU.$XT; for (var d = 0, v = b.length; d < v;) { var w = b[d++],
                    x = b[d++];
                c[a++] = w * g + x * h + l;
                c[a++] = w * m + x * n + f;
                c[a++] = w / e.width;
                c[a++] = x / e.height;
                c[a++] = q;
                c[a++] = u;
                c[a++] = s;
                c[a++] = t } },
        fillPolygon: function(a, b) {
            var c = Ca.$aQ(b);
            null != c && this.fillTriangles(a,
                b, c)
        },
        drawPolygon: function(a, b) { var c = Ca.$aQ(b);
            null != c && this.drawTriangles(a, b, c) },
        drawCircle: function(a, b, c, d, e) { null == e && (e = 50); var f = [],
                g = [];
            Ca.$VQ(f, g, b, c, d, d, e) && this.drawTriangles(a, f, g) },
        fillCircle: function(a, b, c, d, e) { null == e && (e = 50); var f = [],
                g = [];
            Ca.$VQ(f, g, b, c, d, d, e) && this.fillTriangles(a, f, g) },
        strokeCircle: function(a, b, c, d, e, f) { null == f && (f = 50); var g = [],
                h = [];
            Ca.$YQ(g, h, b, c, d, d, e, f) && this.fillTriangles(a, g, h) },
        drawEllipse: function(a, b, c, d, e, f) {
            null == f && (f = 50);
            var g = [],
                h = [];
            Ca.$VQ(g, h, b, c,
                d, e, f) && this.drawTriangles(a, g, h)
        },
        fillEllipse: function(a, b, c, d, e, f) { null == f && (f = 50); var g = [],
                h = [];
            Ca.$VQ(g, h, b, c, d, e, f) && this.fillTriangles(a, g, h) },
        strokeEllipse: function(a, b, c, d, e, f, g) { null == g && (g = 50); var h = [],
                l = [];
            Ca.$YQ(h, l, b, c, d, e, f, g) && this.fillTriangles(a, h, l) },
        fillArc: function(a, b, c, d, e, f, g) { null == g && (g = 50); var h = [],
                l = [];
            Ca.$WQ(h, l, b, c, d, 3.141592653589793 * e / 180, 3.141592653589793 * f / 180, g) && this.fillTriangles(a, h, l) },
        strokeArc: function(a, b, c, d, e, f, g, h) {
            null == h && (h = 50);
            var l = [],
                m = [];
            Ca.$XQ(l,
                m, b, c, d, 3.141592653589793 * e / 180, 3.141592653589793 * f / 180, g, h) && this.fillTriangles(a, l, m)
        },
        strokeLines: function(a, b, c) { var d = [],
                e = [];
            Ca.$ZQ(d, e, b, c) && this.fillTriangles(a, d, e) },
        drawLines: function(a, b, c) { var d = [],
                e = [];
            Ca.$ZQ(d, e, b, c) && this.drawTriangles(a, d, e) },
        multiplyAlpha: function(a) { this.$zQ.$LM *= a },
        setAlpha: function(a) { this.$zQ.$LM = a },
        tint: function(a, b, c) { var d = this.$zQ;
            d.$NM *= a;
            d.$PM *= b;
            d.$RM *= c },
        setBlendMode: function(a) { this.$zQ.$TK = a },
        beginMask: function() { var a = this.$zQ;++a.$mU;
            a.$nU = !0 },
        endMask: function() {
            this.$zQ.$nU = !1
        },
        applyScissor: function(a, b, c, d) { var e = this.$zQ,
                f = Jb.$kU;
            f[0] = a;
            f[1] = b;
            f[2] = a + c;
            f[3] = b + d;
            e.$lU.transformArray(f, 4, f);
            this.$iU.transformArray(f, 4, f);
            a = f[0];
            b = f[1];
            c = f[2] - a;
            d = f[3] - b;
            0 > c && (a += c, c = -c);
            0 > d && (b += d, d = -d);
            e.$oU(a, b, c, d) },
        willRender: function() { this.$hU.$ZT() },
        didRender: function() { this.$hU.$aT() },
        onResize: function(a, b) { this.$zQ = new Mg; var c;
            c = null != this.$PR ? -1 : 1;
            this.$zQ.$lU.set(2 / a, 0, 0, -2 * c / b, -1, c);
            this.$iU = new Ab;
            this.$iU.set(2 / a, 0, 0, 2 / b, -1, -1);
            this.$iU.invert() },
        $gU: function(a, b, c, d) {
            c =
                a + c;
            d = b + d;
            var e = Jb.$kU;
            e[0] = a;
            e[1] = b;
            e[2] = c;
            e[3] = b;
            e[4] = c;
            e[5] = d;
            e[6] = a;
            e[7] = d;
            this.$zQ.$lU.transformArray(e, 8, e);
            return e
        },
        __class__: Jb
    };
    var Mg = function() { this.$BR = this.next = null;
        this.$nU = !1;
        this.$mU = 0;
        this.$NM = this.$PM = this.$RM = this.$LM = 1;
        this.$UK = null;
        this.$TK = la.Normal;
        this.$lU = new Ab };
    g.$CVC = Mg;
    Mg.__name__ = ["$CVC"];
    Mg.prototype = {
        $oU: function(a, b, c, d) {
            if (null != this.$UK) {
                var e = ja.max(this.$UK.x, a),
                    f = ja.max(this.$UK.y, b);
                c = ja.min(this.$UK.x + this.$UK.width, a + c);
                d = ja.min(this.$UK.y + this.$UK.height,
                    b + d);
                a = e;
                b = f;
                c -= e;
                d -= f
            } else this.$UK = new tb;
            this.$UK.set(Math.round(a), Math.round(b), Math.round(c), Math.round(d))
        },
        __class__: Mg
    };
    var zf = function(a, b) { this.$rU = !1; var c = this;
        this.$ER = new ya(!0);
        this.$pU = b;
        this.$oK(); if (0 == b.getError()) { this.$rU = !0; var d = b.canvas;
            d.addEventListener("webglcontextlost", function(a) { a.preventDefault();
                c.graphics = null;
                c.$ER.set__(!1) }, !1);
            d.addEventListener("webglcontextrestored", function(a) { c.$oK();
                c.$ER.set__(!0) }, !1);
            a.resize.connect(ha(this, this.$sU)) } else null };
    g.$CWC =
        zf;
    zf.__name__ = ["$CWC"];
    zf.__interfaces__ = [ce];
    zf.prototype = {
        createTextureFromImage: function(a, b) { var c = new rd(this, a.width, a.height);
            null != b && b != Aa.COMPRESSED && (c.$_U = b);
            c.$uU = a; if (this.$pU.isContextLost()) return null;
            null == u.instance(a, HTMLVideoElement) && this.$qU.$dT(c); return c.createTexture(a.width, a.height) },
        createTexture: function(a, b, c) { var d = new rd(this, a, b);
            null != c && c != Aa.COMPRESSED && (d.$_U = c); return d.createTexture(a, b) },
        createSystemFont: function(a) { return new Ib(a) },
        getTextureAssetFormats: function() { return [] },
        willRender: function() { this.graphics.willRender() },
        didRender: function() { this.graphics.didRender() },
        $sU: function() { if (null != this.graphics) { var a = this.$pU.canvas,
                    b = a.width,
                    a = a.height;
                this.$qU.$YT(b, a);
                this.graphics.onResize(b, a) } },
        $oK: function() { this.$qU = new cj(this.$pU);
            this.graphics = new Jb(this.$qU, null);
            this.$sU() },
        __class__: zf
    };
    var dj = function(a) { this.$LM = null;
        this.$tU = a };
    g.$CXC = dj;
    dj.__name__ = ["$CXC"];
    dj.prototype = { __class__: dj };
    var Ng = function(a, b, c) { ec.call(this, a, b, c) };
    g.$CYC = Ng;
    Ng.__name__ = ["$CYC"];
    Ng.__super__ = ec;
    Ng.prototype = m(ec.prototype, { __class__: Ng });
    var rd = function(a, b, c) { this.$OR = null;
        this.$_U = Aa.RGBA;
        this.$zU = null;
        this.$yU = !0;
        this.$xU = -1;
        this.$uU = this.$vU = this.$wU = null;
        this.$qM = !1;
        this.$WH = a;
        this.width = 2 > b ? 2 : b;
        this.height = 2 > c ? 2 : c };
    g.$CZC = rd;
    rd.__name__ = ["$CZC"];
    rd.__interfaces__ = [Gg];
    rd.__super__ = Ba;
    rd.prototype = m(Ba.prototype, {
        createTexture: function(a, b) { return new Ng(this, a, b) },
        getGraphics: function() {
            null == this.$OR && (this.$OR = new Jb(this.$WH.$qU, this), this.$OR.onResize(this.width,
                this.height));
            return this.$OR
        },
        $$U: function() { var a; switch (this.$_U[1]) {
                case 3:
                    a = 2; break;
                case 1:
                    a = 2; break;
                case 2:
                    a = 3; break;
                default:
                    a = 4 } return a * this.width * this.height },
        $oM: function() { this.$WH.$qU.$cT(this);
            this.$OR = this.$zU = this.$wU = this.$vU = this.$uU = null },
        __class__: rd
    });
    var jb = function(a) { this.$OV = -1;
        this.$NV = [];
        this.$KV = this.$LV = this.$MV = null;
        this.$EV = 0;
        this.$wT = a };
    g.$CdC = jb;
    jb.__name__ = ["$CdC"];
    jb.$PV = function(a, b, c) { b = a.createShader(b);
        a.shaderSource(b, c);
        a.compileShader(b); return b };
    jb.prototype = {
        $FV: function() { null },
        $bK: function() { null == this.$KV && (this.$KV = this.$wT.createProgram(), this.$FV(), this.$wT.detachShader(this.$KV, this.$LV), this.$wT.deleteShader(this.$LV), this.$LV = null, this.$wT.detachShader(this.$KV, this.$MV), this.$wT.deleteShader(this.$MV), this.$MV = null) },
        $GV: function(a) {
            this.$wT.useProgram(this.$KV);
            if (0 > this.$OV) { for (var b = this.$OV = 0, c = this.$NV; b < c.length;) { var d = c[b];++b; var e = d.$cV();
                    d.$bV = this.$OV;
                    this.$OV += e } this.$NV.sort(function(a, b) { return a.$aV - b.$aV }) }
            if (null != a) {
                b = a.$NV.length;
                for (c = this.$NV.length; b < c;) d = b++, this.$wT.enableVertexAttribArray(d);
                b = this.$NV.length;
                for (c = a.$NV.length; b < c;) d = b++, this.$wT.disableVertexAttribArray(d)
            } else
                for (b = 0, c = this.$NV.length; b < c;) d = b++, this.$wT.enableVertexAttribArray(d);
            b = 0;
            for (c = this.$NV.length; b < c;) { var d = b++,
                    e = this.$NV[d],
                    f;
                f = null != a ? a.$NV[d] : null;
                null != f && f.$kN == e.$kN && f.$OO == e.$OO && a.$OV == this.$OV && f.$bV == e.$bV || this.$wT.vertexAttribPointer(d, e.$kN, e.$OO, !1, this.$OV, e.$bV) }
        },
        $HV: function(a, b) {
            b = "#ifdef GL_ES\nprecision mediump float;\n#endif\n" +
                b;
            this.$LV = jb.$PV(this.$wT, 35633, a);
            this.$MV = jb.$PV(this.$wT, 35632, b);
            this.$wT.attachShader(this.$KV, this.$LV);
            this.$wT.attachShader(this.$KV, this.$MV);
            this.$wT.linkProgram(this.$KV);
            this.$wT.useProgram(this.$KV)
        },
        $IV: function(a, b, c) { a = this.$wT.getAttribLocation(this.$KV, a);
            this.$NV.push(new ej(a, b, c));
            this.$EV += b },
        $JV: function(a) { return this.$wT.getUniformLocation(this.$KV, a) },
        __class__: jb
    };
    var qd = function(a, b) { this.$RV = this.$SV = this.$TV = this.$UV = -1;
        jb.call(this, a);
        this.$YV = b };
    g.$CeC = qd;
    qd.__name__ = ["$CeC"];
    qd.__super__ = jb;
    qd.prototype = m(jb.prototype, {
        $FV: function() {
            var a;
            switch (this.$YV) {
                case 0:
                case 1:
                    a = "texture2D(u_texture, pos);"; break;
                case 2:
                    a = "vec4(texture2D(u_textureRGB, pos).rgb, texture2D(u_texture, pos).r);" } a = ["varying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nuniform lowp sampler2D u_texture;\nuniform mediump vec4 u_region;", 2 == this.$YV ? "uniform lowp sampler2D u_textureRGB;" : "", "void main (void) {\nmediump vec2 pos = u_region.xy + mod(v_uv, u_region.zw);", "lowp vec4 color = " +
                a, 1 == this.$YV ? "if (color.a == 0.0) discard;" : "", "gl_FragColor = color * v_color;\n}"
            ].join("\n");
            this.$HV("attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp vec4 a_color;\nvarying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_uv = a_uv;\nv_color = vec4(a_color.rgb * a_color.a, a_color.a);\ngl_Position = vec4(a_pos, 0, 1);\n}", a);
            this.$IV("a_pos", 2, 5126);
            this.$IV("a_uv", 2, 5126);
            this.$IV("a_color", 4, 5126);
            this.$VV = this.$JV("u_texture");
            this.$XV = this.$JV("u_region");
            this.$wT.uniform1i(this.$VV, 0);
            2 == this.$YV && (this.$WV = this.$JV("u_textureRGB"), this.$wT.uniform1i(this.$WV, 1))
        },
        $QV: function(a, b, c, d) { if (a != this.$RV || b != this.$SV || c != this.$TV || d != this.$UV) this.$RV = a, this.$SV = b, this.$TV = c, this.$UV = d, this.$wT.uniform4f(this.$XV, a, b, c, d) },
        __class__: qd
    });
    var pd = function(a, b) { jb.call(this, a);
        this.$YV = b };
    g.$CfC = pd;
    pd.__name__ = ["$CfC"];
    pd.__super__ = jb;
    pd.prototype = m(jb.prototype, {
        $FV: function() {
            var a;
            switch (this.$YV) {
                case 0:
                case 1:
                    a = "texture2D(u_texture, v_uv);";
                    break;
                case 2:
                    a =
                        "vec4(texture2D(u_textureRGB, v_uv).rgb, texture2D(u_texture, v_uv).r);"
            }
            a = ["varying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nuniform lowp sampler2D u_texture;", 2 == this.$YV ? "uniform lowp sampler2D u_textureRGB;" : "", "void main (void) {", "lowp vec4 color = " + a, 1 == this.$YV ? "if (color.a == 0.0) discard;" : "", "gl_FragColor = color * v_color;\n}"].join("\n");
            this.$HV("attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp vec4 a_color;\nvarying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_uv = a_uv;\nv_color = vec4(a_color.rgb * a_color.a, a_color.a);\ngl_Position = vec4(a_pos, 0, 1);\n}",
                a);
            this.$IV("a_pos", 2, 5126);
            this.$IV("a_uv", 2, 5126);
            this.$IV("a_color", 4, 5126);
            this.$VV = this.$JV("u_texture");
            this.$ZV(0);
            2 == this.$YV && (this.$WV = this.$JV("u_textureRGB"), this.$wT.uniform1i(this.$WV, 1))
        },
        $ZV: function(a) { this.$wT.uniform1i(this.$VV, a) },
        __class__: pd
    });
    var Lg = function(a) { jb.call(this, a) };
    g.$CgC = Lg;
    Lg.__name__ = ["$CgC"];
    Lg.__super__ = jb;
    Lg.prototype = m(jb.prototype, {
        $FV: function() {
            this.$HV("attribute highp vec2 a_pos;\nattribute lowp vec3 a_rgb;\nattribute lowp float a_alpha;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_color = vec4(a_rgb*a_alpha, a_alpha);\ngl_Position = vec4(a_pos, 0, 1);\n}",
                "varying lowp vec4 v_color;\nvoid main (void) {\ngl_FragColor = v_color;\n}");
            this.$IV("a_pos", 2, 5126);
            this.$IV("a_rgb", 3, 5126);
            this.$IV("a_alpha", 1, 5126)
        },
        __class__: Lg
    });
    var ej = function(a, b, c) { this.$bV = 0;
        this.$aV = a;
        this.$kN = b;
        this.$OO = c };
    g.$ChC = ej;
    ej.__name__ = ["$ChC"];
    ej.prototype = { $cV: function() { var a; switch (this.$OO) {
                case 5126:
                    a = 4; break;
                default:
                    a = 1 } return this.$kN * a }, __class__: ej };
    var Ve = function() { this.$hJ = this.$iJ = -1;
        this.$jV = null;
        n.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this.$yK = new F };
    g["kit.scene.Director"] = Ve;
    Ve.__name__ = ["kit", "scene", "Director"];
    Ve.__super__ = n;
    Ve.prototype = m(n.prototype, {
        get_entitySlot: function() { return 8 },
        pushScene: function(a, b) { var c;
            c = null != a.owner ? a.owner : (new F).add(a);
            this.$dV(c, b) },
        $dV: function(a, b) { var c = this;
            this.$hV(); var d = this.get_topScene();
            null != d ? this.$iV(d, a, b, function() { c.$gQ(d) }) : (this.$PJ(a), this.$gV()) },
        popScene: function(a) {
            var b = this;
            this.$hV();
            var c = this.get_topScene();
            if (null != c) {
                this.scenes.pop();
                var d = this.get_topScene();
                null != d ? this.$iV(c,
                    d, a,
                    function() { b.$fV(c) }) : (this.$fV(c), this.$gV())
            }
        },
        unwindToScene: function(a, b) { var c;
            c = null != a.owner ? a.owner : (new F).add(a);
            this.$eV(c, b) },
        $eV: function(a, b) { var c = this;
            this.$hV(); var d = this.get_topScene(); if (null != d) { if (d != a) { for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.$iV(d, a, b, function() { c.$fV(d) }) } } else this.$dV(a, b) },
        onAdded: function() { this.owner.addChild(this.$yK) },
        onRemoved: function() {
            this.$hV();
            for (var a = 0, b = this.scenes; a <
                b.length;) { var c = b[a];++a;
                c.dispose() } this.scenes = [];
            this.occludedScenes = [];
            this.$yK.dispose()
        },
        onUpdate: function(a) { null != this.$jV && this.$jV.$QH(a) && this.$hV() },
        get_topScene: function() { var a = this.scenes.length; return 0 < a ? this.scenes[a - 1] : null },
        $PJ: function(a) { var b = this.get_topScene();
            null != b && this.$yK.removeChild(b);
            D.remove(this.scenes, a);
            this.scenes.push(a);
            this.$yK.addChild(a) },
        $gQ: function(a) { a = a.$MH[9];
            null != a && a.hidden.emit() },
        $fV: function(a) { this.$gQ(a);
            a.dispose() },
        $fQ: function(a) {
            a = a.$MH[9];
            null != a && a.shown.emit()
        },
        $gV: function() { for (var a = this.scenes.length; 0 < a;) { var b = this.scenes[--a].$MH[9]; if (null == b || b.opaque) break } this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.$fQ(a) },
        $hV: function() { null != this.$jV && (this.$jV.$kV(), this.$jV = null, this.$gV()) },
        $iV: function(a, b, c, d) { this.$hV();
            this.$PJ(b);
            null != c ? (this.occludedScenes.push(a), this.$jV = new fj(a, b, c, d), this.$jV.$oK(this)) : (d(), this.$gV()) },
        get_width: function() {
            return 0 >
                this.$hJ ? q.$GI.$XH.get_width() : this.$hJ
        },
        get_height: function() { return 0 > this.$iJ ? q.$GI.$XH.get_height() : this.$iJ },
        __class__: Ve,
        __properties__: m(n.prototype.__properties__, { get_height: "get_height", get_width: "get_width", get_topScene: "get_topScene" })
    });
    var fj = function(a, b, c, d) { this.$bI = a;
        this.$cI = b;
        this.$lV = c;
        this.$mV = d };
    g.$CiC = fj;
    fj.__name__ = ["$CiC"];
    fj.prototype = {
        $oK: function(a) { this.$lV.init(a, this.$bI, this.$cI) },
        $QH: function(a) { return this.$lV.update(a) },
        $kV: function() { this.$lV.complete();
            this.$mV() },
        __class__: fj
    };
    var ie = function() {};
    g["kit.scene.Transition"] = ie;
    ie.__name__ = ["kit", "scene", "Transition"];
    ie.prototype = { init: function(a, b, c) { this.$nV = a;
            this.$bI = b;
            this.$cI = c }, update: function(a) { return !0 }, complete: function() {}, __class__: ie };
    var xb = function(a, b) { this.$dI = a;
        this.$pV = null != b ? b : C.linear };
    g["kit.scene.TweenTransition"] = xb;
    xb.__name__ = ["kit", "scene", "TweenTransition"];
    xb.__super__ = ie;
    xb.prototype = m(ie.prototype, {
        init: function(a, b, c) { ie.prototype.init.call(this, a, b, c);
            this.$qV = 0 },
        update: function(a) {
            this.$qV +=
                a;
            return this.$qV >= this.$dI
        },
        $oV: function(a, b) { return a + (b - a) * this.$pV(this.$qV / this.$dI) },
        __class__: xb
    });
    var Md = function(a, b) { xb.call(this, a, b) };
    g["kit.scene.FadeTransition"] = Md;
    Md.__name__ = ["kit", "scene", "FadeTransition"];
    Md.__super__ = xb;
    Md.prototype = m(xb.prototype, {
        init: function(a, b, c) { xb.prototype.init.call(this, a, b, c);
            a = this.$cI.$MH[3];
            null == a && this.$cI.add(a = new x);
            a.alpha.set__(0) },
        update: function(a) { a = xb.prototype.update.call(this, a);
            this.$cI.$MH[3].alpha.set__(this.$oV(0, 1)); return a },
        complete: function() { this.$cI.$MH[3].alpha.set__(1) },
        __class__: Md
    });
    var Ld = function(a, b) { this.$rV = 2;
        xb.call(this, a, b) };
    g["kit.scene.SlideTransition"] = Ld;
    Ld.__name__ = ["kit", "scene", "SlideTransition"];
    Ld.__super__ = xb;
    Ld.prototype = m(xb.prototype, {
        init: function(a, b, c) {
            xb.prototype.init.call(this, a, b, c);
            switch (this.$rV) {
                case 0:
                    this.$SJ = 0;
                    this.$TJ = -this.$nV.get_height(); break;
                case 1:
                    this.$SJ = 0;
                    this.$TJ = this.$nV.get_height(); break;
                case 2:
                    this.$SJ = -this.$nV.get_width();
                    this.$TJ = 0; break;
                case 3:
                    this.$SJ = this.$nV.get_width(), this.$TJ = 0 } a = this.$bI.$MH[3];
            null ==
                a && this.$bI.add(a = new x);
            a.setXY(0, 0);
            a = this.$cI.$MH[3];
            null == a && this.$cI.add(a = new x);
            a.setXY(-this.$SJ, -this.$TJ)
        },
        update: function(a) { a = xb.prototype.update.call(this, a);
            this.$bI.$MH[3].setXY(this.$oV(0, this.$SJ), this.$oV(0, this.$TJ));
            this.$cI.$MH[3].setXY(this.$oV(-this.$SJ, 0), this.$oV(-this.$TJ, 0)); return a },
        complete: function() { this.$bI.$MH[3].setXY(0, 0);
            this.$cI.$MH[3].setXY(0, 0) },
        __class__: Ld
    });
    var Dc = function() {};
    g["kit.script.Action"] = Dc;
    Dc.__name__ = ["kit", "script", "Action"];
    Dc.prototype = { __class__: Dc };
    var Ub = function(a, b, c, d) { this.$pH = a;
        this.$cI = b;
        this.$uV = c;
        this.$eI = d };
    g["kit.script.AnimateTo"] = Ub;
    Ub.__name__ = ["kit", "script", "AnimateTo"];
    Ub.__interfaces__ = [Dc];
    Ub.prototype = { update: function(a, b) { null == this.$sV && (this.$sV = new Ac(this.$pH.$pH, this.$cI, this.$uV, this.$eI), this.$pH.set_behavior(this.$sV), this.$pH.update(a)); if (this.$pH.$wF != this.$sV) { var c = this.$sV.elapsed - this.$uV;
                this.$sV = null; return 0 < c ? a - c : 0 } return -1 }, __class__: Ub };
    var ab = function(a) { this.$MI = a };
    g["kit.script.CallFunction"] = ab;
    ab.__name__ = ["kit", "script", "CallFunction"];
    ab.__interfaces__ = [Dc];
    ab.prototype = { update: function(a, b) { this.$MI(); return 0 }, __class__: ab };
    var Vb = function(a) { this.$dI = a;
        this.$qV = 0 };
    g["kit.script.Delay"] = Vb;
    Vb.__name__ = ["kit", "script", "Delay"];
    Vb.__interfaces__ = [Dc];
    Vb.prototype = { update: function(a, b) { this.$qV += a; if (this.$qV >= this.$dI) { var c = this.$qV - this.$dI;
                this.$qV = 0; return a - c } return -1 }, __class__: Vb };
    var Ec = function(a, b, c, d, e) { this.$SJ = a;
        this.$TJ = b;
        this.$uV = c;
        this.$xV = d;
        this.$yV = e };
    g["kit.script.MoveBy"] =
        Ec;
    Ec.__name__ = ["kit", "script", "MoveBy"];
    Ec.__interfaces__ = [Dc];
    Ec.prototype = { update: function(a, b) { var c = b.$MH[3];
            null == this.$vV && (this.$vV = new Ac(c.x.$pH, c.x.$pH + this.$SJ, this.$uV, this.$xV), c.x.set_behavior(this.$vV), c.x.update(a), this.$wV = new Ac(c.y.$pH, c.y.$pH + this.$TJ, this.$uV, null != this.$yV ? this.$yV : this.$xV), c.y.set_behavior(this.$wV), c.y.update(a)); return c.x.$wF != this.$vV && c.y.$wF != this.$wV ? (c = ja.max(this.$vV.elapsed, this.$wV.elapsed) - this.$uV, this.$wV = this.$vV = null, 0 < c ? a - c : 0) : -1 }, __class__: Ec };
    var je = function(a) { this.$$V = [];
        this.$zV = null != a ? a.slice() : [] };
    g["kit.script.Parallel"] = je;
    je.__name__ = ["kit", "script", "Parallel"];
    je.__interfaces__ = [Dc];
    je.prototype = { update: function(a, b) { for (var c = !0, d = 0, e = 0, f = this.$zV.length; e < f;) { var g = e++,
                    h = this.$zV[g]; if (null != h) { var l = h.update(a, b);
                    0 <= l ? (this.$zV[g] = null, this.$$V.push(h), l > d && (d = l)) : c = !1 } } return c ? (this.$zV = this.$$V, this.$$V = [], d) : -1 }, __class__: je };
    var kb = function() { n.call(this);
        this.stopAll() };
    g["kit.script.Script"] = kb;
    kb.__name__ = ["kit", "script",
        "Script"
    ];
    kb.__super__ = n;
    kb.prototype = m(n.prototype, { get_entitySlot: function() { return 32 }, run: function(a) { a = new Og(a);
            this.$_V.push(a); return a }, stopAll: function() { this.$_V = [] }, onUpdate: function(a) { for (var b = 0; b < this.$_V.length;) { var c = this.$_V[b];
                c.$AW || 0 <= c.$BW.update(a, this.owner) ? this.$_V.splice(b, 1) : ++b } }, __class__: kb });
    var Og = function(a) { this.$AW = !1;
        this.$BW = a };
    g.$CjC = Og;
    Og.__name__ = ["$CjC"];
    Og.__interfaces__ = [Sa];
    Og.prototype = { dispose: function() { this.$AW = !0;
            this.$BW = null }, __class__: Og };
    var Kb =
        function(a) { this.$CW = 0;
            this.$zV = null != a ? a.slice() : [] };
    g["kit.script.Sequence"] = Kb;
    Kb.__name__ = ["kit", "script", "Sequence"];
    Kb.__interfaces__ = [Dc];
    Kb.prototype = { update: function(a, b) { for (var c = 0;;) { var d = this.$zV[this.$CW]; if (null != d)
                    if (d = d.update(a - c, b), 0 <= d) c += d;
                    else return -1;++this.$CW; if (this.$CW >= this.$zV.length) { this.$CW = 0; break } else if (c > a) return -1 } return c }, __class__: Kb };
    var oc = function() {};
    g["kit.util.Assert"] = oc;
    oc.__name__ = ["kit", "util", "Assert"];
    oc.that = function(a, b, c) {};
    var xc = function() {};
    g["kit.util.BitSets"] = xc;
    xc.__name__ = ["kit", "util", "BitSets"];
    xc.set = function(a, b, c) { return c ? a | b : a & ~b };
    var sd = function(a) { this.$xN = 2147483647;
        this.$DW = a;
        this.$EW = [] };
    g["kit.util.Pool"] = sd;
    sd.__name__ = ["kit", "util", "Pool"];
    sd.prototype = { take: function() { return 0 < this.$EW.length ? this.$EW.pop() : this.$DW() }, put: function(a) { this.$EW.length < this.$xN && this.$EW.push(a) }, __class__: sd };
    var ea = function() { this.$KW = this.$LW = null;
        this.$JW = 0;
        this.$IW = null };
    g["kit.util.Promise"] = ea;
    ea.__name__ = ["kit", "util", "Promise"];
    ea.all = function(a) { if (1 > a.length) return (new ea).$FW([]); for (var b = a.length, c = new ea, d = function(a) { c.failure(a) }, e = Array(b), f = function() { for (var a = 0, d = 0; d < e.length;) { var f = e[d];++d;
                    a += f } c.emitProgress(a / b) }, g = Array(b), h = 0, l = 0; l < b;) { var m = [l++];
            e[m[0]] = 0;
            a[m[0]].then(function(a) { return function(d) {++h;
                    g[a[0]] = d;
                    1 > e[a[0]] && (e[a[0]] = 1, f());
                    h == b && c.success(g) } }(m)).progress(function(a) { return function(b) { e[a[0]] = b;
                    f() } }(m)).catchError(d) } return c };
    ea.prototype = {
        then: function(a) {
            var b = this;
            if (2 == this.$JW) return this;
            var c = new ea;
            this.$wH(c, function() { 1 == b.$JW ? c.$GW(a(b.$IW)) : c.failure(b.$IW) });
            return c
        },
        catchError: function(a) { var b = this; if (1 == this.$JW) return this; var c = new ea;
            this.$wH(c, function() { 2 == b.$JW ? c.$GW(a(b.$IW)) : c.$FW(b.$IW) }); return c },
        failure: function(a) { return this.$HW(2, a) },
        success: function(a) { return this.$HW(1, a) },
        $FW: function(a) { return this.success(a) },
        progress: function(a) { 0 == this.$JW && (null == this.$LW && (this.$LW = new ia), this.$LW.connect(a)); return this },
        emitProgress: function(a) {
            0 == this.$JW && null !=
                this.$LW && this.$LW.emit(a)
        },
        $wH: function(a, b) { 0 == this.$JW ? null == this.$KW ? this.$KW = [b] : this.$KW.push(b) : q.$GI.$PH.$PQ(b);
            this.progress(function(b) { a.emitProgress(b) }) },
        $GW: function(a) { var b = this;
            Z.__instanceof(a, ea) ? a.then(function(a) { b.success(a) }).catchError(function(a) { b.failure(a) }) : this.$FW(a) },
        $HW: function(a, b) { if (0 == this.$JW && (this.$IW = b, this.$JW = a, null != this.$KW)) { for (var c = 0, d = this.$KW; c < d.length;) { var e = d[c];++c;
                    e() } this.$KW = null } return this },
        __class__: ea
    };
    var Zi = function(a) {
        this.$JW = null !=
            a ? a : Math.floor(2147483647 * Math.random())
    };
    g["kit.util.Random"] = Zi;
    Zi.__name__ = ["kit", "util", "Random"];
    Zi.prototype = { nextInt: function() { return this.$JW = (1103515245 * this.$JW + 12345) % 2147483647 }, __class__: Zi };
    var Ai = function(a) { this.next = null;
        this.$PW = a };
    g.$CkC = Ai;
    Ai.__name__ = ["$CkC"];
    Ai.prototype = { __class__: Ai };
    var Pa = function() {};
    g["kit.util.Strings"] = Pa;
    Pa.__name__ = ["kit", "util", "Strings"];
    Pa.getFileExtension = function(a) { var b = a.lastIndexOf("."); return 0 < b ? D.substr(a, b + 1, null) : null };
    Pa.removeFileExtension =
        function(a) { var b = a.lastIndexOf("."); return 0 < b ? D.substr(a, 0, b) : a };
    Pa.getUrlExtension = function(a) { var b = a.lastIndexOf("?");
        0 <= b && (a = D.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = D.substr(a, b + 1, null)); return Pa.getFileExtension(a) };
    Pa.joinPath = function(a, b) { 0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/"); return a + b };
    Pa.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            a = 0 < a.length ? a + " [" : a + "[";
            for (var d = 0; d < c;) {
                0 < d && (a += ", ");
                var e = b[d],
                    f = b[d + 1];
                if (u.is(f, Error)) { var g = f.stack;
                    null != g && (f = g) } a +=
                    e + "=" + u.string(f);
                d += 2
            }
            a += "]"
        }
        return a
    };
    var gj = function() {};
    g.$ClC = gj;
    gj.__name__ = ["$ClC"];
    gj.prototype = { __class__: gj };
    var Yi = function() {};
    g["kit.util.Triangulator"] = Yi;
    Yi.__name__ = ["kit", "util", "Triangulator"];
    Yi.prototype = {
        triangulate: function(a) {
            var b = a.length;
            if (6 > b) return [];
            for (var c = this.$jW(-1, 0, 0, null), d = c, e = 0, f = 0, g = b - 2; f < b;) e += (a[g] - a[f]) * (a[f + 1] + a[g + 1]), g = f, f += 2;
            if (0 < e)
                for (e = f = 0; f < b;) var g = a[f],
                    h = a[f + 1],
                    c = this.$jW(e++, g, h, c),
                    f = f + 2;
            else
                for (f = b - 2, e = f / 2 | 0; 0 <= f;) g = a[f], h = a[f + 1], c = this.$jW(e--,
                    g, h, c), f -= 2;
            c.next = d.next;
            c.next.$BR = c;
            return this.$cW(c, 160 < b)
        },
        $cW: function(a, b) {
            this.$WW = [];
            a = this.$hW(a);
            if (b && null != a) { var c, d;
                this.$ZW = c = a.$zL;
                this.$aW = d = a.$_L; for (var e = a.next; e != a;) { var f = e.$zL,
                        g = e.$_L;
                    f < this.$ZW && (this.$ZW = f);
                    g < this.$aW && (this.$aW = g);
                    f > c && (c = f);
                    g > d && (d = g);
                    e = e.next } this.$kN = Math.max(c - this.$ZW, d - this.$aW);
                this.$bW = !0 } else this.$bW = !1;
            this.$kW(a);
            c = this.$WW;
            this.$WW = null;
            d = this.$YW;
            if (null != this.$XW) { for (; d != this.$XW;) d = d.$SW;
                d = d.$SW }
            for (; null != d;) d.next = this.$XW, this.$XW =
                d, d = d.$SW;
            return c
        },
        $dW: function(a, b) { return a.$zL == b.$zL && a.$_L == b.$_L },
        $eW: function(a, b, c) { return (b.$_L - a.$_L) * (c.$zL - b.$zL) - (b.$zL - a.$zL) * (c.$_L - b.$_L) },
        $fW: function(a, b, c, d) { return 0 < (b.$_L - a.$_L) * (c.$zL - b.$zL) - (b.$zL - a.$zL) * (c.$_L - b.$_L) != 0 < (b.$_L - a.$_L) * (d.$zL - b.$zL) - (b.$zL - a.$zL) * (d.$_L - b.$_L) && 0 < (d.$_L - c.$_L) * (a.$zL - d.$zL) - (d.$zL - c.$zL) * (a.$_L - d.$_L) != 0 < (d.$_L - c.$_L) * (b.$zL - d.$zL) - (d.$zL - c.$zL) * (b.$_L - d.$_L) },
        $hW: function(a, b) {
            if (null == a) return a;
            null == b && (b = a);
            var c = a,
                d;
            do
                if (d = !1, c.$VW ||
                    !this.$dW(c, c.next) && 0 != this.$eW(c.$BR, c, c.next)) c = c.next;
                else { c.next.$BR = c.$BR;
                    c.$BR.next = c.next;
                    null != c.$RW && (c.$RW.$QW = c.$QW);
                    null != c.$QW && (c.$QW.$RW = c.$RW);
                    c = b = c.$BR; if (c == c.next) return null;
                    d = !0 } while (d || c != b);
            return b
        },
        $iW: function(a) { a.next.$BR = a.$BR;
            a.$BR.next = a.next;
            null != a.$RW && (a.$RW.$QW = a.$QW);
            null != a.$QW && (a.$QW.$RW = a.$RW) },
        $jW: function(a, b, c, d) {
            var e = this.$XW;
            null == e ? (e = new gj, e.$SW = this.$YW, this.$YW = e) : this.$XW = e.next;
            e.$TW = a;
            e.$UW = -1;
            e.$zL = b;
            e.$_L = c;
            e.next = null;
            e.$BR = d;
            e.$VW = !1;
            e.$RW =
                null;
            e.$QW = null;
            null != d && (d.next = e);
            return e
        },
        $kW: function(a, b) { null == b && (b = 0); if (null != a) { 0 == b && this.$bW && this.$vW(a); for (var c = a, d, e; a.$BR != a.next;)
                    if (d = a.$BR, e = a.next, this.$bW ? this.$mW(a) : this.$lW(a)) this.$WW.push(d.$TW), this.$WW.push(a.$TW), this.$WW.push(e.$TW), a.next.$BR = a.$BR, a.$BR.next = a.next, null != a.$RW && (a.$RW.$QW = a.$QW), null != a.$QW && (a.$QW.$RW = a.$RW), c = a = e.next;
                    else if (a = e, a == c) { switch (b) {
                        case 0:
                            this.$kW(this.$hW(a), 1); break;
                        case 1:
                            a = this.$nW(a);
                            this.$kW(a, 2); break;
                        case 2:
                            this.$oW(a) } break } } },
        $lW: function(a) { var b = a.$BR,
                c = a.next; if (0 <= (a.$_L - b.$_L) * (c.$zL - a.$zL) - (a.$zL - b.$zL) * (c.$_L - a.$_L)) return !1; for (var d = a.next.next; d != a.$BR;) { if (this.$qW(b.$zL, b.$_L, a.$zL, a.$_L, c.$zL, c.$_L, d.$zL, d.$_L) && 0 <= this.$eW(d.$BR, d, d.next)) return !1;
                d = d.next } return !0 },
        $mW: function(a) {
            var b = a.$BR,
                c = a.next;
            if (0 <= (a.$_L - b.$_L) * (c.$zL - a.$zL) - (a.$zL - b.$zL) * (c.$_L - a.$_L)) return !1;
            var d;
            d = b.$zL < a.$zL ? b.$zL < c.$zL ? b.$zL : c.$zL : a.$zL < c.$zL ? a.$zL : c.$zL;
            var e;
            e = b.$_L < a.$_L ? b.$_L < c.$_L ? b.$_L : c.$_L : a.$_L < c.$_L ? a.$_L : c.$_L;
            var f;
            f = b.$zL > a.$zL ? b.$zL > c.$zL ? b.$zL : c.$zL : a.$zL > c.$zL ? a.$zL : c.$zL;
            var g;
            g = b.$_L > a.$_L ? b.$_L > c.$_L ? b.$_L : c.$_L : a.$_L > c.$_L ? a.$_L : c.$_L;
            d = this.$uW(d, e);
            f = this.$uW(f, g);
            for (g = a.$QW; null != g && g.$UW <= f;) { if (g != a.$BR && g != a.next && this.$qW(b.$zL, b.$_L, a.$zL, a.$_L, c.$zL, c.$_L, g.$zL, g.$_L) && 0 <= this.$eW(g.$BR, g, g.next)) return !1;
                g = g.$QW }
            for (g = a.$RW; null != g && g.$UW >= d;) { if (g != a.$BR && g != a.next && this.$qW(b.$zL, b.$_L, a.$zL, a.$_L, c.$zL, c.$_L, g.$zL, g.$_L) && 0 <= this.$eW(g.$BR, g, g.next)) return !1;
                g = g.$RW }
            return !0
        },
        $nW: function(a) {
            var b =
                a;
            do { var c = b.$BR,
                    d = b.next.next;
                this.$fW(c, b, b.next, d) && (0 > this.$eW(c.$BR, c, c.next) ? 0 <= this.$eW(c, d, c.next) && 0 <= this.$eW(c, c.$BR, d) : 0 > this.$eW(c, d, c.$BR) || 0 > this.$eW(c, c.next, d)) && (0 > this.$eW(d.$BR, d, d.next) ? 0 <= this.$eW(d, c, d.next) && 0 <= this.$eW(d, d.$BR, c) : 0 > this.$eW(d, c, d.$BR) || 0 > this.$eW(d, d.next, c)) && (this.$WW.push(c.$TW), this.$WW.push(b.$TW), this.$WW.push(d.$TW), b.next.$BR = b.$BR, b.$BR.next = b.next, null != b.$RW && (b.$RW.$QW = b.$QW), null != b.$QW && (b.$QW.$RW = b.$RW), this.$iW(b.next), b = a = d);
                b = b.next } while (b !=
                a);
            return b
        },
        $oW: function(a) { var b = a;
            do { for (var c = b.next.next; c != b.$BR;) { if (b.$TW != c.$TW && this.$rW(b, c)) { a = this.$pW(b, c);
                        b = this.$hW(b, b.next);
                        a = this.$hW(a, a.next);
                        this.$kW(b);
                        this.$kW(a); return } c = c.next } b = b.next } while (b != a) },
        $pW: function(a, b) { var c = this.$jW(a.$TW, a.$zL, a.$_L, null),
                d = this.$jW(b.$TW, b.$zL, b.$_L, null),
                e = a.next,
                f = b.$BR;
            a.next = b;
            b.$BR = a;
            c.next = e;
            e.$BR = c;
            d.next = c;
            c.$BR = d;
            f.next = d;
            d.$BR = f; return d },
        $qW: function(a, b, c, d, e, f, g, h) {
            return 0 <= (e - g) * (b - h) - (a - g) * (f - h) && 0 <= (a - g) * (d - h) - (c - g) * (b -
                h) && 0 <= (c - g) * (f - h) - (e - g) * (d - h)
        },
        $rW: function(a, b) { return a.$zL == b.$zL && a.$_L == b.$_L || a.next.$TW != b.$TW && a.$BR.$TW != b.$TW && !this.$tW(a, b) && (0 > this.$eW(a.$BR, a, a.next) ? 0 <= this.$eW(a, b, a.next) && 0 <= this.$eW(a, a.$BR, b) : 0 > this.$eW(a, b, a.$BR) || 0 > this.$eW(a, a.next, b)) && (0 > this.$eW(b.$BR, b, b.next) ? 0 <= this.$eW(b, a, b.next) && 0 <= this.$eW(b, b.$BR, a) : 0 > this.$eW(b, a, b.$BR) || 0 > this.$eW(b, b.next, a)) && this.$sW(a, b) },
        $sW: function(a, b) {
            var c = a,
                d = !1,
                e = (a.$zL + b.$zL) / 2,
                f = (a.$_L + b.$_L) / 2;
            do c.$_L > f != c.next.$_L > f && e < (c.next.$zL -
                c.$zL) * (f - c.$_L) / (c.next.$_L - c.$_L) + c.$zL && (d = !d), c = c.next; while (c != a);
            return d
        },
        $tW: function(a, b) { var c = a;
            do { if (c.$TW != a.$TW && c.next.$TW != a.$TW && c.$TW != b.$TW && c.next.$TW != b.$TW && this.$fW(c, c.next, a, b)) return !0;
                c = c.next } while (c != a); return !1 },
        $uW: function(a, b) {
            var c = 32767 * (a - this.$ZW) / this.$kN | 0,
                d = 32767 * (b - this.$aW) / this.$kN | 0,
                c = (c | c << 8) & 16711935,
                c = (c | c << 4) & 252645135,
                c = (c | c << 2) & 858993459,
                d = (d | d << 8) & 16711935,
                d = (d | d << 4) & 252645135,
                d = (d | d << 2) & 858993459;
            return (c | c << 1) & 1431655765 | ((d | d << 1) & 1431655765) <<
                1
        },
        $vW: function(a) { var b = a;
            do 0 > b.$UW && (b.$UW = this.$uW(b.$zL, b.$_L)), b.$RW = b.$BR, b = b.$QW = b.next; while (b != a);
            b.$RW.$QW = null;
            b.$RW = null;
            this.$wW(b) },
        $wW: function(a) { var b, c, d, e, f, g, h, l = 1;
            do { b = a;
                e = a = null; for (f = 0; null != b;) { f++;
                    c = b; for (d = g = 0; d < l && (d++, g++, c = c.$QW, null != c);); for (h = l; 0 < g || 0 < h && null != c;) 0 == g ? (d = c, c = c.$QW, h--) : 0 == h || null == c ? (d = b, b = b.$QW, g--) : b.$UW <= c.$UW ? (d = b, b = b.$QW, g--) : (d = c, c = c.$QW, h--), null != e ? e.$QW = d : a = d, d.$RW = e, e = d;
                    b = c } e.$QW = null;
                l *= 2 } while (1 < f); return a },
        __class__: Yi
    };
    var lb = function() {
        this.allocator =
            this.deallocator = this.spawned = null;
        this.alive = !0;
        this.onScreen = new ya(!1);
        this.disposeWhenOffscreen = !0;
        this.x = this.y = this.offsetY = this.radius = this.health = this.totalHealth = this.damage = 0;
        this.markForRemoval = !1;
        this._flags = this.mask = 0
    };
    g["nick.shmup.ActorInfo"] = lb;
    lb.__name__ = ["nick", "shmup", "ActorInfo"];
    lb.__interfaces__ = [Sa];
    lb.make = function(a) { null == a && (a = 0);
        null == lb._pool && (lb._pool = new sd(function() { return new lb })); var b = lb._pool.take();
        b._flags = a; return b };
    lb.prototype = {
        clear: function() {
            this.radius =
                this.offsetY = this.y = this.x = this._flags = 0;
            this.onScreen.set__(!1);
            this.alive = !0;
            this.markForRemoval = !1;
            this.deallocator = this.allocator = null
        },
        dispose: function() { null != this.deallocator && this.deallocator(this.spawned);
            this.clear() },
        __class__: lb
    };
    var Pg = function(a) { this.removed = new bb;
        this._scratch = new ka;
        this.camera = new tb;
        this._onScreenActors = [];
        this._actors = [];
        n.call(this);
        this._sceneSprite = a };
    g["nick.shmup.ActorManager"] = Pg;
    Pg.__name__ = ["nick", "shmup", "ActorManager"];
    Pg.__super__ = n;
    Pg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 14 },
        onStart: function() { null == this._sceneSprite && (this._sceneSprite = this.owner._internal_getFromParents(3, T));
            this._collisionManager = this.owner.$MH[15];
            null == this._collisionManager && this.owner.add(this._collisionManager = new Qg) },
        add: function(a) {
            oc.that(-1 == this._actors.indexOf(a), "Cannot add the same actor twice!", null);
            this._actors.push(a);
            null != this._sceneSprite && (null == a || a.x + a.radius < this.camera.x || a.x - a.radius > this.camera.get_right() ? a.onScreen.set__(!1) : (a.onScreen.set__(!0),
                this._onScreenActors.push(a), this._collisionManager.addActor(a), this.spawnActor(a)))
        },
        getAll: function(a, b) { null == b && (b = !0); return (b ? this._onScreenActors : this._actors).filter(function(b) { return (b._flags & a) == a }) },
        getNearest: function(a, b, c, d) {
            null == c && (c = !0);
            c = c ? this._onScreenActors : this._actors;
            for (var e = 1.79769313486231E308, f = null, g = 0, h = c.length; g < h;) {
                var l = g++,
                    l = c[l],
                    m;
                if (!(m = l == a) && !(m = (l._flags & b) != b) && !(m = l.markForRemoval)) {
                    m = void 0;
                    switch (d[1]) {
                        case 0:
                            m = a.y > l.y;
                            break;
                        case 1:
                            m = a.x > l.x;
                            break;
                        case 2:
                            m =
                                a.x < l.x;
                            break;
                        case 3:
                            m = a.y < l.y;
                            break;
                        case 4:
                            m = !0
                    }
                    m = !m
                }
                m || (this._scratch.set(l.x, l.y), m = this._scratch.distanceToSquared(a.x, a.y), m < e && (f = l, e = m))
            }
            return null == f ? ga.Nothing : ga.Just(f)
        },
        onUpdate: function(a) {
            a = this._actors.length;
            this._actors.sort(function(a, b) { return Math.floor(1E3 * (a.y - b.y)) });
            for (var b = 0, c = this._actors; b < c.length;) { var d = c[b];++b;
                null != d && null != d.spawned && d.onScreen.$pH ? d.spawned.moveToFront() : null }
            for (; 0 < a--;) {
                b = this._actors[a];
                if (b.markForRemoval) {
                    this._actors.splice(a, 1);
                    D.remove(this._onScreenActors,
                        b);
                    this._collisionManager.removeActor(b);
                    b.dispose();
                    break
                }
                c = null == b ? !1 : b.x + b.radius < this.camera.x ? !1 : b.x - b.radius > this.camera.get_right() ? !1 : !0;
                !b.onScreen.$pH && c ? (this.spawnActor(b), b.onScreen.set__(!0), this._onScreenActors.push(b), this._collisionManager.addActor(b)) : b.onScreen.$pH && b.x + b.radius < this.camera.x && (b.onScreen.set__(!1), null != b.spawned && b.disposeWhenOffscreen && (null == b.deallocator ? b.spawned.dispose() : b.deallocator(b.spawned), b.spawned = null), D.remove(this._onScreenActors, b), this._collisionManager.removeActor(b),
                    b.disposeWhenOffscreen && (b.markForRemoval = !0))
            }
        },
        spawnActor: function(a) { if (null == a.spawned) { var b = a.allocator();
                a.spawned = b;
                b.$MH[3].setXY(a.x, a.y);
                this._sceneSprite.getLayer("spawned").addChild(b);
                b.yieldForStart() } },
        __class__: Pg
    });
    var Ga = g["nick.shmup.DirectionFilter"] = { __ename__: ["nick", "shmup", "DirectionFilter"], __constructs__: ["FROM_TOP", "FROM_LEFT", "FROM_RIGHT", "FROM_BOTTOM", "FROM_ALL"] };
    Ga.FROM_TOP = ["FROM_TOP", 0];
    Ga.FROM_TOP.toString = l;
    Ga.FROM_TOP.__enum__ = Ga;
    Ga.FROM_LEFT = ["FROM_LEFT", 1];
    Ga.FROM_LEFT.toString =
        l;
    Ga.FROM_LEFT.__enum__ = Ga;
    Ga.FROM_RIGHT = ["FROM_RIGHT", 2];
    Ga.FROM_RIGHT.toString = l;
    Ga.FROM_RIGHT.__enum__ = Ga;
    Ga.FROM_BOTTOM = ["FROM_BOTTOM", 3];
    Ga.FROM_BOTTOM.toString = l;
    Ga.FROM_BOTTOM.__enum__ = Ga;
    Ga.FROM_ALL = ["FROM_ALL", 4];
    Ga.FROM_ALL.toString = l;
    Ga.FROM_ALL.__enum__ = Ga;
    var ke = function() { n.call(this) };
    g["nick.shmup.CollectableSpawnSystem"] = ke;
    ke.__name__ = ["nick", "shmup", "CollectableSpawnSystem"];
    ke.__super__ = n;
    ke.prototype = m(n.prototype, {
        get_entitySlot: function() { return 17 },
        onStart: function() {
            this._scene =
                this.owner._internal_getFromParents(3, T);
            this._spawnLayer = this._scene.getLayer("spawned");
            this.connectMessage("$spawnItem", ha(this, this.onSpawnMessageReceived))
        },
        onSpawnMessageReceived: function(a) { oc.that(Z.__instanceof(a, Lb), "spawn message must pass a SpawnMessage object.", null);
            this.spawnFromMessage(a) },
        spawnFromMessage: function(a) {
            var b = this._scene.info.getObject(this.idToString(a.type)),
                b = this._scene.createObject(b),
                c = ja.clamp(a.y, 225, 768);
            u.instance(b.$MH[1], lc).setXY(a.x, c);
            b.$MH[3].disablePointer();
            switch (a.type) {
                case 0:
                    this.decorateCoin(b); break;
                case 1:
                    break;
                case 3:
                    break;
                case 2:
                    break;
                default:
                    null } this._spawnLayer.addChild(b);
            a.dispose()
        },
        idToString: function(a) { switch (a) {
                case 0:
                    return "coin";
                case 1:
                    return "rapidFire";
                case 2:
                    return "triBlast";
                case 3:
                    return "shield";
                default:
                    return "" } },
        decorateCoin: function(a) { u.instance(a.$MH[1], td).modifyBeforeOnStart(function(a, c) { a.add(new Rg(3, c)) }) },
        __class__: ke
    });
    var Qg = function(a) {
        this.items = 0;
        n.call(this);
        this._aItems = [];
        this._removeList = [];
        this._sort = a;
        this._listPool =
            new sd(function() { return new hj })
    };
    g["nick.shmup.CollisionManager"] = Qg;
    Qg.__name__ = ["nick", "shmup", "CollisionManager"];
    Qg.__super__ = n;
    Qg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 15 },
        onRemoved: function() { this.clear() },
        clear: function() { this._aItems = [];
            this._head = null },
        addActor: function(a) { this.items++;
            a = this._listPool.take().setinfo(a);
            a.next = this._head;
            this._head = a },
        removeActor: function(a) {
            for (var b = null, c = this._head; null != c;) {
                var d = c.next;
                if (c.info == a) {
                    null == b ? (b = this._head, this._head =
                        d, this._listPool.put(b.clear())) : (a = b.next, b.next = d, this._listPool.put(a.clear()));
                    this.items--;
                    c.next = null;
                    break
                }
                b = c;
                c = d
            }
        },
        onUpdate: function(a) {
            a = null;
            var b = this._head;
            for (this._removeList.length = 0; null != b;) {
                var c = b.info;
                if (null == c.spawned || !c.alive || c.markForRemoval) b = b.next, null == c.spawned && this._removeList.push(c);
                else {
                    for (var d = b.next; null != d;) {
                        var e = d.info;
                        null == e.spawned || !e.alive || e.markForRemoval ? (d = d.next, null == e.spawned && this._removeList.push(e)) : (0 != (c._flags & e.mask) && 0 != (e._flags & c.mask) &&
                            (a = this.resolveCollisions(a, c, e)), d = d.next)
                    }
                    b = b.next
                }
            }
            for (; null != a;) b = null != a.info && null != a.info.spawned ? a.info.spawned.$MH[16] : null, null != b && b.collide(a.info, a.other), b = a, a = a.next, this._listPool.put(b.clear());
            for (a = this._removeList.length; 0 < a--;) this.removeActor(this._removeList[a])
        },
        resolveCollisions: function(a, b, c) {
            var d = b.radius + c.radius,
                e = b.x - c.x,
                f = b.y + b.offsetY - (c.y + c.offsetY);
            d * d > e * e + f * f && (d = this._listPool.take().setinfo(b).setOther(c), b = this._listPool.take().setinfo(c).setOther(b), d.next =
                b, b.next = a, a = d);
            return a
        },
        __class__: Qg
    });
    var hj = function() {};
    g["nick.shmup.ActorInfoList"] = hj;
    hj.__name__ = ["nick", "shmup", "ActorInfoList"];
    hj.prototype = { clear: function() { this.other = this.next = this.info = null; return this }, setinfo: function(a) { this.clear();
            this.info = a; return this }, setOther: function(a) { this.other = a; return this }, __class__: hj };
    var Fa = function() {};
    g["nick.shmup.ComponentHelpers"] = Fa;
    Fa.__name__ = ["nick", "shmup", "ComponentHelpers"];
    Fa.getActorManagerFromParents = function(a) {
        var b;
        b = a._internal_getFromParents(14);
        null == b && a._internal_getFromParents(3, T).owner.add(b = new Pg);
        return b
    };
    Fa.getScoreDisplaySystemFromParents = function(a) { var b;
        b = a._internal_getFromParents(19);
        null == b && a._internal_getFromParents(3, T).owner.add(b = new Sg); return b };
    Fa.getCollectableSpawnSystemFromParents = function(a) { var b;
        b = a._internal_getFromParents(17);
        null == b && a._internal_getFromParents(3, T).owner.add(b = new ke); return b };
    Fa.getSoundSystemFromParents = function(a) {
        var b;
        b = a._internal_getFromParents(34);
        null == b && a._internal_getFromParents(3,
            T).owner.add(b = new le);
        return b
    };
    Fa.trackGameSummary = function(a, b) { var c = q.root.$MH[10],
            d = q.root.$MH[33],
            e = c.get("currentStage"),
            f = c.get("character1"),
            g = c.get("character2");
        Na.get_deltaBootstrap().track(["matchSummary", "matchID", d.getFloat("matchID"), "gamemodeName", "Normal", "characterName", f, "partnerName", g, "characterLevel", d.getFloat(f), "partnerLevel", d.getFloat(g), "fatalHitWasBoss", b && "9" == e && !0 == c.get("reachedBoss"), "squadStrikeCounter", c.get("numSquadStrike"), "gameCompleted", b || !b && "9" == e]) };
    var Tg = function() { this._winDelay = 0.25;
        this._isGameOver = this._cameraStopped = this._isOutOfHealth = !1;
        n.call(this) };
    g["nick.shmup.GameoverSystem"] = Tg;
    Tg.__name__ = ["nick", "shmup", "GameoverSystem"];
    Tg.__super__ = n;
    Tg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 55 },
        onStart: function() {
            var a = this,
                b;
            b = this.owner._internal_getFromParents(10);
            this._sceneSprite = this.owner._internal_getFromParents(3, T);
            this._script = this._sceneSprite.owner._internal_getFromChildren(4);
            this._actorManager = Fa.getActorManagerFromParents(this._sceneSprite.owner);
            var c;
            c = this._sceneSprite.owner._internal_getFromParents(24);
            this.connect2(b.changed, function(b, c) { "heroHealth" == b && !a._isGameOver && 0 >= c && !a._isGameOver && (a._isOutOfHealth = !0, null != a.owner && null != a.owner.getAssetsFromParents() && a.owner.getAssetsFromParents().getSound("sfx/universal_death").play(1)) });
            this.connect0(c.cameraStopped, function() { a._cameraStopped = !0; for (var b = a._actorManager.getAll(1, !0), c = 0, f = b.length; c < f;) { var g = c++;
                    0 == (b[g]._flags & 4) && 0 == (b[g]._flags & 64) && (a._hero = b[g]) } })
        },
        onUpdate: function(a) {
            if (!this._isGameOver) {
                if (this._isOutOfHealth) {
                    this._isGameOver = !0;
                    Fa.trackGameSummary(this.owner, !0);
                    for (var b = this._actorManager.getAll(1), c = 0; c < b.length;) { var d = b[c];++c;
                        d = u.instance(d.spawned.$MH[1], na);
                        null != d && (d.movement.set_enabled(!1), d.owner.$MH[27].allowFire = !1, d.isAI || (d.movementController.enabled = !1)) } null == this._script.run("OnGameOverFail", this.owner, !1) && null
                }
                if (this._cameraStopped && !this._isGameOver) {
                    b = this._actorManager.getAll(2, !0);
                    c = null == b ? 0 : b.length;
                    for (d = 0; d < c;) {
                        var e = d++,
                            e = b[e];
                        if (0 != (e._flags & 32)) { this._winDelay = 0.25; return }
                        if (0 == (e._flags &
                                4) && (null == this._hero || e.x > this._hero.x)) { this._winDelay = 0.25; return }
                    }
                    0 >= this._winDelay && (this._isGameOver = !0, Fa.trackGameSummary(this.owner, !1), "level9" == q.root.$MH[10].get("SetNextScene") && (mb.setBeatBoss(q.root.$MH[10].get("character1"), !0), null), null == this._script.run("OnGameOverSuccess", this.owner, !1) && (this.owner._internal_getFromParents(3, T).disablePointer(), null));
                    this._winDelay -= a
                }
            }
        },
        __class__: Tg
    });
    var me = function(a, b, c) {
        null == c && (c = 0);
        this._changed = !1;
        this.enabled = !0;
        n.call(this);
        null ==
            a && (a = new ka(0, 1316));
        null == b && (b = new ka(0, 768));
        this._clampX = a;
        this._clampY = b;
        this._clampRadius = c;
        this._hasY = this._hasX = !1
    };
    g["nick.shmup.HeroMovement"] = me;
    me.__name__ = ["nick", "shmup", "HeroMovement"];
    me.__super__ = n;
    me.prototype = m(n.prototype, {
        get_entitySlot: function() { return 31 },
        update: function(a, b, c, d, e, f, g) {
            null == g && (g = 0.15);
            this.enabled ? (this.handleLeftRight(Math.round(a.$pH), Math.round(c), this._clampX, this._clampRadius), this.handleUpDown(Math.round(b.$pH), Math.round(d), this._clampY, this._clampRadius,
                f), this._hasX && (c = ja.clamp(a.$pH - c, -220, 220), c = ja.clamp(a.$pH - c, this._clampX.x + this._clampRadius, this._clampX.y - this._clampRadius), e ? a.animateTo(c, g) : a.set__(c)), this._hasY && (a = ja.clamp(b.$pH - d, -220, 220), a = ja.clamp(b.$pH - a, this._clampY.x + this._clampRadius, this._clampY.y - this._clampRadius), e ? b.animateTo(a, g) : b.set__(a))) : this._changed && (a.set_behavior(null), b.set_behavior(null))
        },
        setClamp: function(a, b, c) {
            null == a && (a = new ka(0, 1316));
            null == b && (b = new ka(0, 768));
            this._clampX = a;
            this._clampY = b;
            this._clampRadius =
                c
        },
        handleLeftRight: function(a, b, c, d) { this._hasX = a != b ? !0 : !1 },
        handleUpDown: function(a, b, c, d, e) { Math.abs(a - b) < e ? this._hasY = !1 : this._hasY = a != b ? !0 : !1 },
        set_enabled: function(a) { this.enabled = a;
            this._changed = !0; return a },
        __class__: me,
        __properties__: m(n.prototype.__properties__, { set_enabled: "set_enabled" })
    });
    var xj = function() {};
    g["nick.shmup.OnScreenActor"] = xj;
    xj.__name__ = ["nick", "shmup", "OnScreenActor"];
    var Ug = function(a) { n.call(this);
        this._sceneSprite = a;
        this._container = (new F).add(new x) };
    g["nick.shmup.OverlayFX"] =
        Ug;
    Ug.__name__ = ["nick", "shmup", "OverlayFX"];
    Ug.__super__ = n;
    Ug.prototype = m(n.prototype, {
        get_entitySlot: function() { return 23 },
        onAdded: function() { this.owner.addChild(this._container) },
        onRemoved: function() { this._container.dispose();
            this._sceneSprite = null },
        onUpdate: function(a) {},
        playStageIntro: function() {
            var a = this._sceneSprite.owner.getAssetsFromParents(),
                b = R.getFormat("gameplay.intro").text,
                c = q.root.$MH[10].get("currentStage"),
                c = R.getFormat("gameplay.stage" + c).text,
                b = I.replace(b, "{{currentStage}}", c),
                a = new hb(a.getFont("fonts/roboto_black_white_dropshadow_76"), b);
            a.centerAnchor().setScale(0.1).setAlpha(0).setXY(683, 363);
            b = new kb;
            c = (new F).add(a).add(b);
            b.run(new Kb([new Vb(0.5), new je([new Ub(a.alpha, 1, 0.1), new Ub(a.scaleX, 1, 0.35, C.backOut), new Ub(a.scaleY, 1, 0.35, C.backOut)]), new Vb(1.5), new je([new Kb([new Vb(0.25), new Ub(a.alpha, 1, 0.1)]), new Ub(a.scaleX, 0.1, 0.35, C.backIn), new Ub(a.scaleY, 0.1, 0.35, C.backIn)]), new ab(ha(c, c.dispose))]));
            this._container.addChild(c);
            return this
        },
        playEasterEgg: function(a) {
            this.playMovie(a,
                "easterEgg")
        },
        playWhiteOut: function(a) { this.playMovie(a, "fx_whiteout") },
        playMovie: function(a, b) { var c = new F,
                d = this._container.getAssetsFromParents().getLibrary("animation").createMovie(b, null);
            this._container.addChild(c.add(d.disablePointer().setXY(this._sceneSprite.cameraWidth.$pH / 2, this._sceneSprite.cameraHeight.$pH / 2)));
            d.registerDisposable(d.get_looped().connect(function() { null != a && a();
                c.dispose() })) },
        __class__: Ug
    });
    var Sg = function(a) {
        this._specialPercent = 0.04;
        this._duration = 5;
        this._timeElapsed =
            0;
        this._multiplier = 1;
        n.call(this);
        this._sceneSprite = a
    };
    g["nick.shmup.ScoreDisplaySystem"] = Sg;
    Sg.__name__ = ["nick", "shmup", "ScoreDisplaySystem"];
    Sg.__super__ = n;
    Sg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 19 },
        onStart: function() { null == this._sceneSprite && (this._sceneSprite = this.owner._internal_getFromParents(3, T));
            this._propertyBag = q.root.$MH[10];
            this._sceneBag = this.owner._internal_getFromParents(10) },
        spawn: function(a, b, c) {
            null != this._propertyBag && (a *= this._multiplier, aa.addScore(this._propertyBag,
                a), aa.addSpecial(this._sceneBag, Math.ceil(a * this._specialPercent)))
        },
        onUpdate: function(a) { 1 != this._multiplier && (this._timeElapsed += a, this._timeElapsed > this._duration && (this._multiplier = 1, this._timeElapsed = 0, aa.hasMultiplier(this._sceneBag, !1))) },
        setMultiplier: function(a) { this._multiplier = a;
            aa.hasMultiplier(this._sceneBag, 1 != a) },
        __class__: Sg
    });
    var le = function(a) { n.call(this);
        this._sceneSprite = a };
    g["nick.shmup.SoundSystem"] = le;
    le.__name__ = ["nick", "shmup", "SoundSystem"];
    le.__super__ = n;
    le.prototype = m(n.prototype, {
        get_entitySlot: function() { return 34 },
        onStart: function() { null == this._sceneSprite && (this._sceneSprite = this.owner._internal_getFromParents(3, T));
            this._propertyBag = q.root.$MH[10];
            this._sceneBag = this.owner._internal_getFromParents(10) },
        onUpdate: function(a) {},
        startLoop: function(a, b) { this.stopLoop();
            this._loop = this.owner.getAssetsFromParents().getSound(a).loop(b);
            this.registerDisposable(this._loop) },
        stopLoop: function() { null != this._loop && this._loop.dispose();
            this._loop = null },
        setVolume: function(a) {
            null !=
                this._loop && this._loop.volume.set__(a)
        },
        __class__: le
    });
    var Lb = function() { this.type = -1;
        this.x = this.y = this.value = 0 };
    g["nick.shmup.SpawnMessage"] = Lb;
    Lb.__name__ = ["nick", "shmup", "SpawnMessage"];
    Lb.__interfaces__ = [Sa];
    Lb.make = function(a, b, c, d) { null == d && (d = 0);
        null == Lb._pool && (Lb._pool = new sd(function() { return new Lb })); var e = Lb._pool.take();
        e.x = a;
        e.y = b;
        e.type = c;
        e.value = d; return e };
    Lb.prototype = {
        clear: function() { this.value = this.y = this.x = 0;
            this.type = -1 },
        dispose: function() { this.clear();
            Lb._pool.put(this) },
        __class__: Lb
    };
    var Vg = function(a) { n.call(this);
        this._sceneSprite = a;
        this._container = new F };
    g["nick.shmup.UIManager"] = Vg;
    Vg.__name__ = ["nick", "shmup", "UIManager"];
    Vg.__super__ = n;
    Vg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 47 },
        onAdded: function() { this.owner.addChild(this._container) },
        onRemoved: function() { this._container.dispose() },
        onStart: function() {
            var a = this;
            this._bag = this.owner._internal_getFromParents(10);
            null == this._sceneSprite && (this._sceneSprite = this.owner._internal_getFromParents(3,
                T));
            this._healthBar = (new F).add((new Wg(this._sceneSprite)).setMaxValue(this._bag.get("heroMaxHealth")));
            this._specialBar = (new F).add(new Xg(this._sceneSprite));
            this._coinCounter = (new F).add(new Yg(this._sceneSprite));
            this._pauseButton = (new F).add(new Zg(this._sceneSprite));
            var b = new Ia(this.owner.getAssetsFromParents().getTexture("temphud"));
            this._container.addChild((new F).add(b.setXY(1316 - b.getNaturalWidth(), 0)));
            this._container.addChild(this._specialBar).addChild(this._healthBar);
            this._container.addChild(this._coinCounter);
            this._container.addChild(this._pauseButton);
            this.connect2(this._bag.changed, function(b, d) { "heroMaxHealth" == b && a._healthBar.$MH[53].setMaxValue(d) });
            this.connectMessage("$bossSpawned", ha(this, this.onBossSpawned))
        },
        onBossSpawned: function(a) { var b = this;
            a = u.instance(a.$MH[1], Fc);
            this.connect1(a.get_actorInfoReady(), function(a) { b._container.addChild((new F).add(new $g(a[0])), !1) }) },
        __class__: Vg
    });
    var ah = function(a, b, c, d) {
        this._firing = !1;
        this._count = 0;
        n.call(this);
        this._minTimeOn = a;
        this._maxTimeOn = b;
        this._minTimeOff =
            c;
        this._maxTimeOff = d
    };
    g["nick.shmup.ai.FireRateAlternator"] = ah;
    ah.__name__ = ["nick", "shmup", "ai", "FireRateAlternator"];
    ah.__super__ = n;
    ah.prototype = m(n.prototype, {
        get_entitySlot: function() { return 37 },
        onStart: function() { var a = u.instance(this.owner.$MH[1], Fc);
            this._enemy = u.instance(a._actors[0].spawned.$MH[1], Mb);
            a._actors[0]._flags = 34;
            this._startingRate = this._enemy.fireRate;
            this._count = this.rand(this._minTimeOff, this._maxTimeOff);
            this._firing = !0 },
        onUpdate: function(a) {
            this._count -= a;
            0 >= this._count && ((this._firing = !this._firing) ? (this._enemy.fireRate = this._startingRate, this._count = this.rand(this._minTimeOn, this._maxTimeOn)) : (this._enemy.fireRate = -1, this._count = this.rand(this._minTimeOff, this._maxTimeOff)))
        },
        rand: function(a, b) { return a + Math.random() * (b - a) },
        __class__: ah
    });
    var bh = function() { n.call(this);
        this._noise = new ij;
        this._noiseX = 1337;
        this._noiseY = 58008;
        this._actorTarget = ga.Nothing;
        this._lookUpElapsed = 0 };
    g["nick.shmup.ai.PlayerAI"] = bh;
    bh.__name__ = ["nick", "shmup", "ai", "PlayerAI"];
    bh.__super__ = n;
    bh.prototype =
        m(n.prototype, {
            get_entitySlot: function() { return 30 },
            onRemoved: function() { this._movement = this._actorTarget = this._actorManager = this._noise = this._hero = null },
            onStart: function() { this._hero = this.owner._internal_getFromParents(1, na);
                this._actorManager = Fa.getActorManagerFromParents(this.owner);
                this._movement = this._hero.owner.$MH[31];
                this._movement.setClamp(new ka(0, 1316), new ka(130, 735), this._hero.actorInfo.radius) },
            onUpdate: function(a) {
                var b = this._actorTarget;
                switch (b[1]) {
                    case 0:
                        this._lookUpElapsed += a;
                        0.5 <
                            this._lookUpElapsed ? (this._lookUpElapsed = 0, this._actorTarget = this._actorManager.getNearest(this._hero.actorInfo, 2, null, Ga.FROM_RIGHT)) : this._actorTarget = ga.Nothing;
                        break;
                    case 1:
                        this.attackTarget(a, b[2])
                }
            },
            attackTarget: function(a, b) {
                if (this._movement.enabled)
                    if (null == b.allocator) this._actorTarget = ga.Nothing;
                    else {
                        null == this._initialXPos && (this._initialXPos = this._hero.stageX.$pH);
                        this._noiseX += 0.2 * a;
                        this._noiseY += 0.2 * a;
                        var c = this._initialXPos + 100 * this._noise.noise2D(this._noiseX, 0),
                            d = b.y + this._noise.noise2D(0,
                                this._noiseY) * b.radius;
                        this._movement.update(this._hero.stageX, this._hero.stageY, c, d, !0, 10, 0.6666)
                    }
            },
            __class__: bh
        });
    var ch = function(a, b, c, d, e, f) { null == f && (f = 1);
        null == e && (e = 400);
        this._nextFire = this._inaccuracy = 0;
        this._triblast = this._rapidFire = !1;
        this.offsetY = 0;
        this.enabled = this.allowFire = !0;
        this.bulletRadius = 0;
        this.damage = 1;
        this.speed = 0;
        this.bulletLife = 5;
        this.fireRate = 0;
        n.call(this);
        this.fireRate = a;
        this.bulletLife = b;
        this.damage = c;
        this.bulletRadius = d * f;
        this.speed = e;
        this.bulletScale = f };
    g["nick.shmup.character.Blaster"] =
        ch;
    ch.__name__ = ["nick", "shmup", "character", "Blaster"];
    ch.__super__ = n;
    ch.prototype = m(n.prototype, {
        get_entitySlot: function() { return 27 },
        setOffsetY: function(a) { this.offsetY = a; return this },
        setDestroySound: function(a) { this._destroySound = a; return this },
        onStart: function() {
            var a = this;
            this._manager = Fa.getActorManagerFromParents(this.owner);
            this._hero = u.instance(this.owner.$MH[1], na);
            this._nextFire = this.fireRate;
            this._bag = q.root.$MH[10];
            this._hero.isAI || (this._fireSound = this.owner.getAssetsFromParents().getSound("sfx/" +
                u.string(this._bag.get("character1")) + "_fire"));
            this.connectMessage("activate", function(b) { switch (b) {
                    case "rapidFire":
                        a._rapidFire = !0; break;
                    case "triBlast":
                        a._triblast = !0 } });
            this.connectMessage("deactivate", function(b) { a._rapidFire = !1;
                a._triblast = !1 });
            null == this._bulletPool && (this._bulletPool = new sd(function() { return (new F).add(a._hero.library.createSprite("projectile").disablePointer()).add(new Tc) }))
        },
        onUpdate: function(a) {
            this.enabled && this.allowFire && (this._nextFire -= a * (this._rapidFire ? 1.75 : 1),
                0 > this._nextFire && (this._nextFire = this.fireRate, this.fire(this._hero.actorInfo.x + this._hero.actorInfo.radius, this._hero.actorInfo.y + this.offsetY), this._triblast && (this.fire(this._hero.actorInfo.x + this._hero.actorInfo.radius, this._hero.actorInfo.y + this.offsetY - 2 * this.bulletRadius, -50), this.fire(this._hero.actorInfo.x + this._hero.actorInfo.radius, this._hero.actorInfo.y + this.offsetY + 2 * this.bulletRadius, 50)), this.owner.emitMessage("fire")))
        },
        fire: function(a, b, c) {
            null == c && (c = 0);
            var d = this,
                e = lb.make(5);
            null != this._fireSound && this.registerDisposable(this._fireSound.play(0.35));
            var f;
            f = 0.5 > Math.random() ? -1 : 1;
            f *= Math.random() * this._inaccuracy;
            c += f;
            e.mask = 2;
            e.x = a;
            e.y = b;
            e.radius = this.bulletRadius;
            e.damage = this._triblast ? 0.3 * this.damage : this.damage;
            e.allocator = function() { var a = d._bulletPool.take();
                u.instance(a.$MH[16], Tc).setInfo(e, d.bulletLife, d.speed, c, d._destroySound); return a };
            e.deallocator = function(a) { null != a.parent && a.parent.removeChild(a);
                d._bulletPool.put(a) };
            this._manager.add(e)
        },
        __class__: ch
    });
    var fc = function() { n.call(this) };
    g["nick.shmup.character.CharacterInfo"] = fc;
    fc.__name__ = ["nick", "shmup", "character", "CharacterInfo"];
    fc.__super__ = n;
    fc.prototype = m(n.prototype, {
        get_entitySlot: function() { return 12 },
        onAdded: function() { if (null == fc._info) { fc._info = new O; for (var a = this.owner.getAssetsFromParents().getFile("characterStats.json").toJson(), b = P.fields(a), c = 0; c < b.length;) { var d = b[c];++c; var e = P.getProperty(a, d);
                    fc._info.set(d, e) } } },
        get: function(a, b, c) {
            null == c && (c = 0);
            oc.that(fc._info.exists(a),
                "Character id: " + a + " does not exist", null);
            b = mb.loadLevel(a);
            0 < c && (b = c);
            return this.transformHealtPower(fc._info.get(a), ja.clamp(b, 1, 3))
        },
        transformHealtPower: function(a, b) { var c; switch (b) {
                case 1:
                    c = a.level1; break;
                case 2:
                    c = a.level2; break;
                case 3:
                    c = a.level3; break;
                default:
                    c = null } return { health: c.health, attack: c.attack, fireRate: a.fireRate, bulletRadius: a.bulletRadius, bulletLife: a.bulletLife, bulletSpeed: a.bulletSpeed, bulletScale: a.bulletScale } },
        __class__: fc
    });
    var dh = function() { this.powerups = new O;
        n.call(this) };
    g["nick.shmup.character.PowerUpTracker"] = dh;
    dh.__name__ = ["nick", "shmup", "character", "PowerUpTracker"];
    dh.__super__ = n;
    dh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 26 },
        onStart: function() { this._bag = this.owner._internal_getFromParents(10); var a = !0 == this._bag.get("rapidFire");
            this.powerups.set("rapidFire", a);
            a = !0 == this._bag.get("triBlast");
            this.powerups.set("triBlast", a);
            this.connect2(this._bag.changed, ha(this, this.onPropertyChanged)) },
        onPropertyChanged: function(a, b) {
            var c = !1;
            this.powerups.exists(a) &&
                (c = this.hasPowerUps() && !0 != b, this.powerups.set(a, b), !0 == b && this.owner.emitMessage("activate", a));
            c && this.deactivatePowerups()
        },
        deactivatePowerups: function() { for (var a = this.powerups.keys(); a.hasNext();) { var b = a.next();
                this.powerups.set(b, !1) } for (a = this.powerups.keys(); a.hasNext();) b = a.next(), !1 != this._bag.get(b) && this._bag.set(b, !1);
            this.owner.emitMessage("deactivate") },
        hasPowerUps: function() { for (var a = !1, b = this.powerups.iterator(); b.hasNext();) var c = b.next(),
                a = a || c; return a },
        __class__: dh
    });
    var eh =
        function(a) { null == a && (a = !1);
            this._playBackShield = ga.Nothing;
            n.call(this);
            this._setShieldOnStart = a };
    g["nick.shmup.character.Shield"] = eh;
    eh.__name__ = ["nick", "shmup", "character", "Shield"];
    eh.__super__ = n;
    eh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 21 },
        onStart: function() {
            var a = this.owner.getAssetsFromParents(),
                b;
            b = this.owner._internal_getFromParents(10);
            this._shieldSprite = new F;
            this._shieldSprite.add(a.getLibrary("animation").createSprite("fx_shield"));
            this.connect2(b.changed, ha(this,
                this.onPropertyChanged));
            this._setShieldOnStart && !0 != b.get("shield") && b.set("shield", !0)
        },
        onRemoved: function() { var a = this._playBackShield; switch (a[1]) {
                case 1:
                    a = a[2], ha(a, a.dispose) } },
        onPropertyChanged: function(a, b) { "shield" == a && this.setShield(!0 == b) },
        setShield: function(a) { a ? this.owner.addChild(this._shieldSprite) : null != this._shieldSprite.parent && this._shieldSprite.parent.removeChild(this._shieldSprite);
            null != this.owner && this.loopShield(a) },
        loopShield: function(a) {},
        __class__: eh
    });
    var ud = function() {
        H.call(this);
        this._selectedCharacter = ga.Nothing;
        this._hasSelectedPrimary = !1;
        this._onClickFn = ga.Nothing
    };
    g["nick.shmup.characterSelect.CharacterSelect"] = ud;
    ud.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelect"];
    ud.__super__ = H;
    ud.prototype = m(H.prototype, {
        onStart: function() {
            var a = this;
            H.prototype.onStart.call(this);
            var b = q.root.$MH[10],
                c = function(b) {
                    a.toggleVisiblity("modal__phoneImage modal__phoneBorder modal__characterNameCopy modal__iconAttack modal__iconHealth modal__levelUpButton model__levelUpButtonText modal__coin modal__trophy modal__playerLevelCopy modal__nextLevelCopy modal__maxLevelCopy modal__nextLevelCostCopy modal__characterStatHealth modal__characterStatPower modal__playButton".split(" "),
                        "modal__selectUserCopy", b)
                },
                d = function(b) { a.getFirstObject("modal__maxLevelCopy").getSprite().set_visible(!b);
                    a.getFirstObject("modal__nextLevelCopy").getSprite().set_visible(b);
                    a.getFirstObject("modal__nextLevelCostCopy").getSprite().set_visible(b);
                    a.getFirstObject("modal__coin").getSprite().set_visible(b) },
                e = function(b) { a.getFirstObject("modal__levelUpButton").getSprite().set_pointerEnabled(b);
                    u.instance(a.getFirstObject("modal__levelUpButton").getComponentBySlot(3), qb).loop(b ? "up" : "disabled") };
            c(!1);
            this.owner.emitMessageToParents("headerLeader", this.owner);
            this.owner.emitMessageToParents("selectLeader", this.owner);
            this.owner.emitMessageToParents("nextLevel", this.owner);
            this.owner.emitMessageToParents("maxLevel", this.owner);
            var f = new fc;
            this.owner.add(f);
            for (var g = null, g = Na.get_options().get("disablePowerRanger") ? [N.SQUARE_lisa, N.SQUARE_danger, N.SQUARE_lincoln, N.SQUARE_babe, N.SQUARE_kenzie, N.SQUARE_phoebe, N.SQUARE_april, N.SQUARE_spongebob, N.SQUARE_sandy] : [N.SQUARE_lisa, N.SQUARE_danger,
                    N.SQUARE_lincoln, N.SQUARE_babe, N.SQUARE_kenzie, N.SQUARE_phoebe, N.SQUARE_pinkRanger, N.SQUARE_april, N.SQUARE_spongebob, N.SQUARE_sandy
                ], h = this.getAllObjects("grid__character"); h.length > g.length;) h.pop().dispose();
            var l = Ma.mapi(h, function(a, b) { return b.add(new vd(g[a])) }),
                m = this.getFirstObject("header__back");
            m.$MH[3].set_visible(!1);
            var h = this.getFirstObject("modal__levelUpButton").add(new fh),
                n = this.getFirstObject("model__levelUpButtonText");
            h.$MH[61].controlSprite(n.$MH[3]);
            var s = this.getFirstObject("bg__greenOverlay").add(new gh),
                t = this.getFirstObject("modal__backgroundBorder").add(new hh),
                v = this.getLayer("modal").add(new ne(0.33, 300)),
                w = this.getLayer("header").add(new ne(0.33, -300)),
                x = this.getLayer("grid").add(new ih(0.33, -1E3)),
                y = this.getFirstObject("modal__characterStatHealth").add(new oe),
                z = this.getFirstObject("modal__characterStatPower").add(new oe),
                B = this.getFirstObject("modal__phoneImage").add(new jh),
                A = this.getFirstObject("modal__nextLevelCostCopy").add(new kh),
                C = this.getFirstObject("coin__playCoinAmount").add(new lh(aa.getCoins(b))),
                D = this.getFirstObject("modal__trophy"),
                E = this.getFirstObject("modal__characterNameCopy");
            this._originalNameYPos = u.instance(E.$MH[3], hb).y.get__();
            h = l.h;
            for (n = null; null != h;) n = h[0], h = h[1], n = [n.$MH[11]], n[0].clicker.onClick = function(g) {
                return function() {
                    var h = a._selectedCharacter;
                    switch (h[1]) {
                        case 1:
                            h[2].deselect() } h = a.owner.getAssetsFromParents();
                    a.registerDisposable(h.getSound("sfx/click").play());
                    a._selectedCharacter = ga.Just(g[0]);
                    B.$MH[67].updatePhone(g[0].character);
                    y.$MH[66].setValue(f.get(g[0].getCharacterName()).health);
                    z.$MH[66].setValue(f.get(g[0].getCharacterName()).attack);
                    a.owner.emitMessageToParents(g[0].getCharacterName(), a.owner);
                    a.adjustAnchor(u.instance(E.$MH[3], hb));
                    var k = aa.loadLevel(b, g[0].getCharacterName());
                    a.owner.emitMessageToParents("level" + k, a.owner);
                    c(!0);
                    d(3 > k);
                    b.set("nextLevelCost", A.$MH[68].getCost(k));
                    A.$MH[68].updateCost(k, aa.getCoins(b), function() { return function(a) { e(3 > k && a) } }());
                    mb.hasBeatBoss(g[0].getCharacterName()) ? D.$MH[3].set_visible(!0) : D.$MH[3].set_visible(!1)
                }
            }(n);
            this.connect2(b.changed,
                function(c, d) { if ("purchaseLevel" == c) { if (d) { var e = a._onClickFn; switch (e[1]) {
                                case 1:
                                    (0, e[2])() } } b.set("purchaseLevel", !1) } });
            this.registerDisposable(this.getFirstObject("modal__playButton").getSprite().get_pointerUp().connect(function(d) {
                d = a._selectedCharacter;
                switch (d[1]) {
                    case 1:
                        var e = d[2];
                        if (a._hasSelectedPrimary) { b.set("character2", e.getCharacterName());
                            a.owner.emitMessageToParents("gotoScene1", a.owner); break } v.$MH[64].toggle(function() {
                            t.$MH[63].toggleBorder();
                            a.owner.emitMessageToParents("selectMate",
                                a.owner);
                            c(!1)
                        });
                        w.$MH[64].toggle(function() { a.owner.emitMessageToParents("headerSecondary", a.owner);
                            m.$MH[3].set_visible(!0) });
                        x.$MH[65].toggle(function() { s.$MH[62].fadeInBackground();
                            e.deselect();
                            e.lock(); for (var a = l.h, b = null; null != a;) b = void 0, b = a[0], a = a[1], b.$MH[11].nextState() });
                        b.set("character1", e.getCharacterName());
                        a._hasSelectedPrimary = !0
                }
            }));
            this.registerDisposable(this.getFirstObject("modal__levelUpButton").getSprite().get_pointerUp().connect(function(c) {
                var g = aa.getCoins(b);
                c = a._selectedCharacter;
                switch (c[1]) {
                    case 1:
                        var h = c[2],
                            k = aa.loadLevel(b, h.getCharacterName());
                        A.$MH[68].canPurchase(k, g) && 3 > k && (a.owner.emitMessageToParents("goToConfirmation", a.owner), a._onClickFn = ga.Just(function() {
                            var c = A.$MH[68].getCost(k);
                            aa.setCoins(b, g - c);
                            c = aa.getCoins(b);
                            C.$MH[69].updateCoins(c);
                            var l = k + 1;
                            aa.saveLevel(b, h.getCharacterName(), l);
                            a.owner.emitMessageToParents("level" + l, a.owner);
                            h.updateLevel(l);
                            y.$MH[66].setValue(f.get(h.getCharacterName(), null, l).health);
                            z.$MH[66].setValue(f.get(h.getCharacterName(),
                                null, l).attack);
                            d(3 > l);
                            A.$MH[68].updateCost(l, c, function(a) { e(3 > l && a) });
                            3 > l && b.set("nextLevelCost", A.$MH[68].getCost(l));
                            a._onClickFn = ga.Nothing
                        }))
                }
            }));
            this.registerDisposable(m.$MH[3].get_pointerUp().connect(function(b) {
                a._selectedCharacter = ga.Nothing;
                a._hasSelectedPrimary = !1;
                v.$MH[64].toggle(function() { t.$MH[63].toggleBorder();
                    a.owner.emitMessageToParents("selectLeader", a.owner);
                    c(!1) });
                w.$MH[64].toggle(function() { a.owner.emitMessageToParents("headerLeader", a.owner);
                    m.$MH[3].set_visible(!1) });
                x.$MH[65].toggle(function() {
                    s.$MH[62].fadeInBackground();
                    for (var a = l.h, b = null; null != a;) b = void 0, b = a[0], a = a[1], b.$MH[11].reset()
                }, !0)
            }))
        },
        toggleVisiblity: function(a, b, c) { var d = this;
            Ma.iter(a.map(function(a) { return d.getFirstObject(a) }), function(a) { a.$MH[3].set_visible(c) });
            this.getFirstObject(b).getSprite().set_visible(!c) },
        getFirstObject: function(a) { return this.owner._internal_getFromParents(3, T).getObject(a) },
        getAllObjects: function(a) { return this.owner._internal_getFromParents(3, T).getObjects(a) },
        getLayer: function(a) {
            return this.owner._internal_getFromParents(3,
                T).getLayer(a)
        },
        adjustAnchor: function(a) { a.lineSpacing.set__(-25); var b = a.getNaturalHeight();
            a.setAnchor(0, b / 2) },
        __class__: ud
    });
    var gh = function() { n.call(this);
        this._hasFaded = !1 };
    g["nick.shmup.characterSelect.CharacterSelectBackground"] = gh;
    gh.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectBackground"];
    gh.__super__ = n;
    gh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 62 },
        fadeInBackground: function() {
            if (null == this._sprGrad && null == this._sprOverlay) {
                var a = this.owner.getAssetsFromParents(),
                    b = a.getTexture("GradientBGBlue"),
                    b = this.owner._internal_getFromParents(3, T).cameraWidth.$pH / b.get_width();
                this.owner.addChild((new F).add(this._sprGrad = (new Ia(a.getTexture("GradientBGBlue"))).setAlpha(0).setScale(b))).addChild((new F).add(this._sprOverlay = (new Ia(a.getTexture("SquadMateBG_Blue"))).setAlpha(0)))
            }
            this._sprGrad.alpha.animateTo(this._hasFaded ? 0 : 1, 0.33, C.sineOut);
            this._sprOverlay.alpha.animateTo(this._hasFaded ? 0 : 1, 0.33, C.sineOut);
            this._hasFaded = !this._hasFaded
        },
        __class__: gh
    });
    var hh =
        function() { n.call(this);
            this._hasReplaced = !1 };
    g["nick.shmup.characterSelect.CharacterSelectBorder"] = hh;
    hh.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectBorder"];
    hh.__super__ = n;
    hh.prototype = m(n.prototype, { get_entitySlot: function() { return 63 }, toggleBorder: function() { var a;
            a = this._hasReplaced ? "ModuleGreenStroke" : "ModuleBlueStroke"; var b = this.owner.$MH[3];
            b.set_pointerEnabled(!1); var c = this.owner.getAssetsFromParents();
            b.texture = c.getTexture(a);
            this._hasReplaced = !this._hasReplaced }, __class__: hh });
    var fh = function() { n.call(this);
        this.maybeSpr = ga.Nothing };
    g["nick.shmup.characterSelect.CharacterSelectButton"] = fh;
    fh.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectButton"];
    fh.__super__ = n;
    fh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 61 },
        onAdded: function() {
            var a = this,
                b = this.owner.$MH[3],
                c = !1;
            this.registerDisposable(b.get_pointerDown().connect(function(b) { b = a.maybeSpr; switch (b[1]) {
                    case 1:
                        b = b[2], c = !0, b.y.set__(660) } }));
            this.registerDisposable(q.$GI.$VH.up.connect(function(b) {
                b =
                    a.maybeSpr;
                switch (b[1]) {
                    case 1:
                        b = b[2], c && (b.y.set__(646), c = !1) }
            }));
            this.registerDisposable(b.get_pointerIn().connect(function(b) { b = a.maybeSpr; switch (b[1]) {
                    case 1:
                        b = b[2], c && b.y.set__(660) } }));
            this.registerDisposable(b.get_pointerOut().connect(function(b) { b = a.maybeSpr; switch (b[1]) {
                    case 1:
                        b = b[2], c && b.y.set__(656) } }))
        },
        controlSprite: function(a) { this.maybeSpr = ga.Just(a) },
        __class__: fh
    });
    var lh = function(a) { n.call(this);
        this._initialCoins = a };
    g["nick.shmup.characterSelect.CharacterSelectCoins"] = lh;
    lh.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectCoins"];
    lh.__super__ = n;
    lh.prototype = m(n.prototype, { get_entitySlot: function() { return 69 }, onAdded: function() { this._txtSpr = u.instance(this.owner.$MH[3], hb);
            this._txtSpr.set_text("" + this._initialCoins) }, updateCoins: function(a) { this._txtSpr.set_text("" + a) }, __class__: lh });
    var ih = function(a, b) { n.call(this);
        this.toggleSpeed = a;
        this.moveXPos = b;
        this._isToggling = !1 };
    g["nick.shmup.characterSelect.CharacterSelectHorizontalSlider"] = ih;
    ih.__name__ = ["nick", "shmup",
        "characterSelect", "CharacterSelectHorizontalSlider"
    ];
    ih.__super__ = n;
    ih.prototype = m(n.prototype, { get_entitySlot: function() { return 65 }, toggle: function(a, b) { null == b && (b = !1); var c = this; if (!this._isToggling) { this._isToggling = !0; var d;
                d = b ? -this.moveXPos : this.moveXPos;
                this.owner.add(new kb);
                this.owner.add(new kb).getComponentBySlot(32).run(new Kb([new Ec(d, 0, this.toggleSpeed, C.backIn), new ab(a), new Ec(2 * -d, 0, 0), new Ec(d, 0, this.toggleSpeed, C.backOut), new ab(function() { c._isToggling = !1 })])) } }, __class__: ih });
    var kh = function() { n.call(this) };
    g["nick.shmup.characterSelect.CharacterSelectLevelPrice"] = kh;
    kh.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectLevelPrice"];
    kh.__super__ = n;
    kh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 68 },
        onAdded: function() { this._txtSpr = u.instance(this.owner.$MH[3], hb);
            this._txtSpr.set_text("0");
            this._costs = this.owner.getAssetsFromParents().getFile("LevelUpgradeCosts.json").toJson() },
        updateCost: function(a, b, c) {
            a = this.getCost(a);
            this.setFont(a <= b);
            this._txtSpr.set_text("" +
                a);
            c(a <= b)
        },
        getCost: function(a) { switch (ja.clamp(a, 1, 3)) {
                case 1:
                    return this._costs.level1;
                case 2:
                    return this._costs.level2;
                case 3:
                    return this._costs.level3;
                default:
                    return 0 } },
        canPurchase: function(a, b) { var c = this.getCost(a); return b >= c },
        setFont: function(a) { a = a ? "roboto_black_orange_25" : "roboto_black_red_25";
            this._txtSpr.set_font(this.owner.getAssetsFromParents().getFont("fonts/" + a)) },
        __class__: kh
    });
    var jh = function() { n.call(this);
        this._selectedSquare = ga.Nothing };
    g["nick.shmup.characterSelect.CharacterSelectPhone"] =
        jh;
    jh.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectPhone"];
    jh.__super__ = n;
    jh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 67 },
        onAdded: function() { this._assets = this.owner.getAssetsFromParents();
            this.owner.$MH[3].texture = this.getTexture(ga.Nothing) },
        updatePhone: function(a) { this.owner.$MH[3].texture = this.getTexture(ga.Just(a)) },
        getTexture: function(a) {
            switch (a[1]) {
                case 0:
                    return this._assets.getTexture("phone_images/april_phone");
                case 1:
                    switch (a[2][1]) {
                        case 0:
                            return this._assets.getTexture("phone_images/lisa_phone");
                        case 1:
                            return this._assets.getTexture("phone_images/danger_phone");
                        case 2:
                            return this._assets.getTexture("phone_images/lincoln_phone");
                        case 3:
                            return this._assets.getTexture("phone_images/babe_phone");
                        case 4:
                            return this._assets.getTexture("phone_images/kenzie_phone");
                        case 5:
                            return this._assets.getTexture("phone_images/phoebe_phone");
                        case 6:
                            return this._assets.getTexture("phone_images/pinkRanger_phone");
                        case 7:
                            return this._assets.getTexture("phone_images/april_phone");
                        case 8:
                            return this._assets.getTexture("phone_images/spongeBob_phone");
                        case 9:
                            return this._assets.getTexture("phone_images/sandy_phone")
                    }
            }
        },
        __class__: jh
    });
    var mh = function() { yc.call(this) };
    g["nick.shmup.characterSelect.CharacterSelectPopScene"] = mh;
    mh.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectPopScene"];
    mh.__super__ = yc;
    mh.prototype = m(yc.prototype, { $eF: function(a) { yc.prototype.$eF.call(this, a);
            q.root.$MH[10].set("purchaseLevel", !0) }, __class__: mh });
    var vd = function(a) { n.call(this);
        this.character = a;
        this.clicker = { onClick: function() {} };
        this._isLocked = !1 };
    g["nick.shmup.characterSelect.CharacterSelectSquare"] =
        vd;
    vd.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectSquare"];
    vd.nameEnumToString = function(a) { switch (a[1]) {
            case 0:
                return "lisa";
            case 1:
                return "danger";
            case 2:
                return "lincoln";
            case 3:
                return "babe";
            case 4:
                return "kenzie";
            case 5:
                return "phoebe";
            case 6:
                return "pinkRanger";
            case 7:
                return "april";
            case 8:
                return "spongebob";
            case 9:
                return "sandy" } };
    vd.__super__ = n;
    vd.prototype = m(n.prototype, {
        get_entitySlot: function() { return 11 },
        onAdded: function() {
            var a = this,
                b = q.root.$MH[10];
            this._assets = this.owner.getAssetsFromParents();
            var c = this.characterHead(this.character);
            this._cx = c.cx;
            this._cy = c.cy;
            b = aa.loadLevel(b, this.getCharacterName());
            this.owner.addChild((new F).add(this._stateHeadSprite = c.sprite)).addChild((new F).add(this.defaultBorder(c.cx, c.cy))).addChild((new F).add(this._stateBorderSprite = this.stateBorder(c.cx, c.cy, nb.PRIMARY))).addChild((new F).add(this.getLevelMarker(0, 2 * c.cy)).addChild((new F).add(this._levelSpr = (new hb(this._assets.getFont("fonts/roboto_black_orange_25"), "L" + b)).setScale(1).centerAnchor().setXY(22,
                24))));
            mb.hasBeatBoss(this.getCharacterName()) && this.owner.addChild((new F).add(this.addTrophy(-5, -5)));
            this.registerDisposable(this.owner.$MH[3].get_pointerDown().connect(function(b) { a._isLocked || (a.clicker.onClick(), a.select()) }))
        },
        select: function() { this._isLocked || this._stateBorderSprite.alpha.animateTo(1, 0.25, C.expoOut) },
        deselect: function() { this._isLocked || this._stateBorderSprite.alpha.animateTo(0, 0.25, C.expoOut) },
        nextState: function() {
            this._isLocked || (this._stateBorderSprite.texture = this.getBorderTexture(nb.SECONDARY),
                this._stateBorderSprite.centerAnchor())
        },
        lock: function() { this._isLocked = !0;
            this._stateHeadSprite.texture = this.getHeadTexture(this.character, !0);
            this._stateBorderSprite.texture = this.getBorderTexture(nb.LOCKED);
            this._stateBorderSprite.centerAnchor();
            this._stateBorderSprite.alpha.set__(1) },
        reset: function() { this._isLocked = !1;
            this._stateHeadSprite.texture = this.getHeadTexture(this.character, !1);
            this._stateBorderSprite.texture = this.getBorderTexture(nb.PRIMARY);
            this._stateBorderSprite.centerAnchor();
            this._stateBorderSprite.alpha.set__(0) },
        getCharacterName: function() { return vd.nameEnumToString(this.character) },
        updateLevel: function(a) { this._levelSpr.set_text("L" + a);
            this._levelSpr.centerAnchor() },
        characterHead: function(a) { a = this.getHeadTexture(a, !1); return { sprite: (new Ia(a)).disablePointer(), cx: a.get_width() / 2, cy: a.get_height() / 2 } },
        defaultBorder: function(a, b) { return (new Ia(this._assets.getTexture("CharacterBox"))).centerAnchor().disablePointer().setXY(a, b) },
        stateBorder: function(a, b, c) {
            return (new Ia(this.getBorderTexture(c))).setAlpha(0).centerAnchor().disablePointer().setXY(a,
                b)
        },
        getHeadTexture: function(a, b) { var c; switch (a[1]) {
                case 0:
                    c = "characterportraits/lisa"; break;
                case 1:
                    c = "characterportraits/danger"; break;
                case 2:
                    c = "characterportraits/lincoln"; break;
                case 3:
                    c = "characterportraits/babe"; break;
                case 4:
                    c = "characterportraits/kenzie"; break;
                case 5:
                    c = "characterportraits/phoebe"; break;
                case 6:
                    c = "characterportraits/pinkRanger"; break;
                case 7:
                    c = "characterportraits/april"; break;
                case 8:
                    c = "characterportraits/spongebob"; break;
                case 9:
                    c = "characterportraits/sandy" } b && (c += "_green"); return this._assets.getTexture(c) },
        getBorderTexture: function(a) { switch (a[1]) {
                case 0:
                    return this._assets.getTexture("CharacterBoxSelectedGlow-Green");
                case 1:
                    return this._assets.getTexture("CharacterBoxSelected-Green");
                case 2:
                    return this._assets.getTexture("CharacterBoxSelectedGlow-Blue") } },
        getLevelMarker: function(a, b) { return (new Ia(this._assets.getTexture("LevelMarker"))).centerAnchor().disablePointer().setXY(a, b) },
        addTrophy: function(a, b) { return (new Ia(this._assets.getTexture("trophy"))).disablePointer().setXY(a, b) },
        __class__: vd
    });
    var oe = function() { n.call(this);
        this._value = 0 };
    g["nick.shmup.characterSelect.CharacterSelectStatusBar"] = oe;
    oe.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectStatusBar"];
    oe.__super__ = n;
    oe.prototype = m(n.prototype, {
        get_entitySlot: function() { return 66 },
        onAdded: function() { this._mSpr = this.owner._internal_getFromChildren(3, sb);
            this._mSpr.set_paused(!0);
            this.updateStatusBar() },
        setValue: function(a) { this._value = Math.floor(ja.clamp(a, 0, 11));
            null != this._mSpr && this.updateStatusBar(); return this },
        updateStatusBar: function() {
            0 ==
                this._value ? this._mSpr.set_position(0) : this._mSpr.set_position(this._value / 11 * this._mSpr.symbol.duration)
        },
        __class__: oe
    });
    var ne = function(a, b) { n.call(this);
        this.toggleSpeed = a;
        this.moveYPos = b;
        this._isToggling = !1 };
    g["nick.shmup.characterSelect.CharacterSelectVerticalSlider"] = ne;
    ne.__name__ = ["nick", "shmup", "characterSelect", "CharacterSelectVerticalSlider"];
    ne.__super__ = n;
    ne.prototype = m(n.prototype, {
        get_entitySlot: function() { return 64 },
        toggle: function(a) {
            var b = this;
            this._isToggling || (this._isToggling = !0, this.owner.add(new kb), this.owner.add(new kb).getComponentBySlot(32).run(new Kb([new Ec(0, this.moveYPos, this.toggleSpeed, null, C.sineIn), new ab(a), new Ec(0, -this.moveYPos, this.toggleSpeed, null, C.sineOut), new ab(function() { b._isToggling = !1 })])))
        },
        __class__: ne
    });
    var N = g["nick.shmup.characterSelect.types.SquareCharacter"] = { __ename__: ["nick", "shmup", "characterSelect", "types", "SquareCharacter"], __constructs__: "SQUARE_lisa SQUARE_danger SQUARE_lincoln SQUARE_babe SQUARE_kenzie SQUARE_phoebe SQUARE_pinkRanger SQUARE_april SQUARE_spongebob SQUARE_sandy".split(" ") };
    N.SQUARE_lisa = ["SQUARE_lisa", 0];
    N.SQUARE_lisa.toString = l;
    N.SQUARE_lisa.__enum__ = N;
    N.SQUARE_danger = ["SQUARE_danger", 1];
    N.SQUARE_danger.toString = l;
    N.SQUARE_danger.__enum__ = N;
    N.SQUARE_lincoln = ["SQUARE_lincoln", 2];
    N.SQUARE_lincoln.toString = l;
    N.SQUARE_lincoln.__enum__ = N;
    N.SQUARE_babe = ["SQUARE_babe", 3];
    N.SQUARE_babe.toString = l;
    N.SQUARE_babe.__enum__ = N;
    N.SQUARE_kenzie = ["SQUARE_kenzie", 4];
    N.SQUARE_kenzie.toString = l;
    N.SQUARE_kenzie.__enum__ = N;
    N.SQUARE_phoebe = ["SQUARE_phoebe", 5];
    N.SQUARE_phoebe.toString = l;
    N.SQUARE_phoebe.__enum__ = N;
    N.SQUARE_pinkRanger = ["SQUARE_pinkRanger", 6];
    N.SQUARE_pinkRanger.toString = l;
    N.SQUARE_pinkRanger.__enum__ = N;
    N.SQUARE_april = ["SQUARE_april", 7];
    N.SQUARE_april.toString = l;
    N.SQUARE_april.__enum__ = N;
    N.SQUARE_spongebob = ["SQUARE_spongebob", 8];
    N.SQUARE_spongebob.toString = l;
    N.SQUARE_spongebob.__enum__ = N;
    N.SQUARE_sandy = ["SQUARE_sandy", 9];
    N.SQUARE_sandy.toString = l;
    N.SQUARE_sandy.__enum__ = N;
    var nb = g["nick.shmup.characterSelect.types.SquareState"] = {
        __ename__: ["nick", "shmup", "characterSelect",
            "types", "SquareState"
        ],
        __constructs__: ["PRIMARY", "LOCKED", "SECONDARY"]
    };
    nb.PRIMARY = ["PRIMARY", 0];
    nb.PRIMARY.toString = l;
    nb.PRIMARY.__enum__ = nb;
    nb.LOCKED = ["LOCKED", 1];
    nb.LOCKED.toString = l;
    nb.LOCKED.__enum__ = nb;
    nb.SECONDARY = ["SECONDARY", 2];
    nb.SECONDARY.toString = l;
    nb.SECONDARY.__enum__ = nb;
    var Ha = function() { n.call(this) };
    g["nick.shmup.collision.CollisionLogic"] = Ha;
    Ha.__name__ = ["nick", "shmup", "collision", "CollisionLogic"];
    Ha.__super__ = n;
    Ha.prototype = m(n.prototype, {
        get_entitySlot: function() { return 16 },
        collide: function(a,
            b) { null },
        __class__: Ha
    });
    var Tc = function() { this.speedX = this.speedY = 0;
        this.life = 10;
        n.call(this) };
    g["nick.shmup.collision.BulletLogic"] = Tc;
    Tc.__name__ = ["nick", "shmup", "collision", "BulletLogic"];
    Tc.__interfaces__ = [xj];
    Tc.__super__ = Ha;
    Tc.prototype = m(Ha.prototype, {
        collide: function(a, b) { 0 != (a._flags & 4) && 0 == (b._flags & 4) && (null != this._destroySound && this._destroySound.play(), this.die()) },
        setInfo: function(a, b, c, d, e) { this.actorInfo = a;
            this._destroySound = e;
            this.life = b;
            this.speedX = c;
            this.speedY = d; return this },
        onStart: function() {
            Ha.prototype.onStart.call(this);
            this._sprite = this.owner.$MH[3]
        },
        onUpdate: function(a) { Ha.prototype.onUpdate.call(this, a);
            this.life -= a;
            this.actorInfo.x += this.speedX * a;
            this.actorInfo.y += this.speedY * a;
            this.updateSpritePosition();
            0 >= this.life && this.die() },
        die: function() { this.life = 0;
            this.actorInfo.alive = !1;
            this.actorInfo.markForRemoval = !0;
            this.actorInfo.mask = 0 },
        updateSpritePosition: function() { null != this._sprite && this._sprite.setXY(this.actorInfo.x, this.actorInfo.y) },
        __class__: Tc
    });
    var nh = function() { this._collectableType = ga.Nothing;
        n.call(this) };
    g["nick.shmup.collision.CollectableLogic"] = nh;
    nh.__name__ = ["nick", "shmup", "collision", "CollectableLogic"];
    nh.__super__ = Ha;
    nh.prototype = m(Ha.prototype, {
        collide: function(a, b) { this.onCollect(a) },
        onStart: function() { Ha.prototype.onStart.call(this); if (null != this.owner) { var a = this._collectableType; switch (a[1]) {
                    case 1:
                        switch (a[2][1]) {
                            case 2:
                                this.owner.emitMessageToParents("OnCoinVisible", this.owner) } } a = u.instance(this.owner.$MH[3], qb);
                null != a && a.loop("idle") } },
        onCollect: function(a) {
            var b = this,
                c = q.root.$MH[10],
                d;
            this.owner._internal_getFromParents(3, T);
            d = this.owner._internal_getFromParents(3, T).owner._internal_getFromParents(10);
            var e = function() { b.removeCollision(a); var c = u.instance(a.spawned.$MH[3], qb),
                        d = wd.playStateThen(c, "collect", function() { b.removeCollectableActor(a) });
                    c.registerDisposable(d) },
                f = this._collectableType;
            switch (f[1]) {
                case 0:
                    null;
                    break;
                case 1:
                    switch (f[2][1]) {
                        case 0:
                            this.owner.getAssetsFromParents().getSound("sfx/shield").play(1);
                            aa.setSpecial(d, 100);
                            e();
                            break;
                        case 1:
                            aa.setHealth(d, d.get("heroMaxHealth"));
                            this.owner.getAssetsFromParents().getSound("sfx/heal").play(1);
                            e();
                            break;
                        case 2:
                            this.owner.getAssetsFromParents().getSound("sfx/coin").play(1);
                            aa.addCoins(c, 1);
                            e();
                            break;
                        case 3:
                            e();
                            this.spawnCoins();
                            break;
                        case 4:
                            this.scoreMultiply(d), e()
                    }
            }
        },
        setType: function(a) { this._collectableType = ga.Just(a); return this },
        spawnCoins: function() {
            for (var a = Fa.getActorManagerFromParents(this.owner), b = Fa.getCollectableSpawnSystemFromParents(this.owner), c = 0; 30 > c;) {
                c++;
                var d = a.camera.x + 150 + Math.random() * (a.camera.width -
                        150),
                    e = a.camera.y + 200 + Math.random() * (a.camera.height - 250);
                b.spawnFromMessage(Lb.make(d, e, 0))
            }
            this.owner.getAssetsFromParents().getSound("sfx/coin_power_up").play(1)
        },
        scoreMultiply: function(a) { a = Fa.getScoreDisplaySystemFromParents(this.owner);
            this.owner.getAssetsFromParents().getSound("sfx/shield").play(1);
            a.setMultiplier(2) },
        removeCollision: function(a) { a.mask = 0;
            a.alive = !1 },
        removeCollectableActor: function(a) { null != this.owner && this.owner.dispose();
            a.markForRemoval = !0 },
        __class__: nh
    });
    var Qa = g["nick.shmup.collision.CollectableType"] = { __ename__: ["nick", "shmup", "collision", "CollectableType"], __constructs__: ["SpecialAttackFill", "Healing", "Coin", "CoinBurst", "ScoreMultiplier"] };
    Qa.SpecialAttackFill = ["SpecialAttackFill", 0];
    Qa.SpecialAttackFill.toString = l;
    Qa.SpecialAttackFill.__enum__ = Qa;
    Qa.Healing = ["Healing", 1];
    Qa.Healing.toString = l;
    Qa.Healing.__enum__ = Qa;
    Qa.Coin = ["Coin", 2];
    Qa.Coin.toString = l;
    Qa.Coin.__enum__ = Qa;
    Qa.CoinBurst = ["CoinBurst", 3];
    Qa.CoinBurst.toString = l;
    Qa.CoinBurst.__enum__ = Qa;
    Qa.ScoreMultiplier = ["ScoreMultiplier", 4];
    Qa.ScoreMultiplier.toString =
        l;
    Qa.ScoreMultiplier.__enum__ = Qa;
    var pe = function(a, b) { n.call(this);
        this._scoreValue = a;
        this._dropType = this.enumToMessageType(b);
        0 > this._dropType && 0.5 > Math.random() && (this._dropType = 0) };
    g["nick.shmup.collision.EnemyLogic"] = pe;
    pe.__name__ = ["nick", "shmup", "collision", "EnemyLogic"];
    pe.__super__ = Ha;
    pe.prototype = m(Ha.prototype, {
        onStart: function() { Ha.prototype.onStart.call(this);
            this._spawnSystem = Fa.getCollectableSpawnSystemFromParents(this.owner) },
        onAdded: function() {
            Ha.prototype.onAdded.call(this);
            this._scoreDisplaySystem =
                Fa.getScoreDisplaySystemFromParents(this.owner);
            this._objectSprite = u.instance(this.owner.$MH[3], qb)
        },
        collide: function(a, b) { if (this.takeDamage(a, b.damage) || null != u.instance(a.spawned.$MH[1], Mb) && null != u.instance(b.spawned.$MH[1], na) && -33 == a._flags) null != this.owner && null != this.owner.getAssetsFromParents() && this.owner.getAssetsFromParents().getSound("sfx/enemy_death").play(0.3), this.onDeath(a) },
        takeDamage: function(a, b) { a.health -= b;
            this._objectSprite.play("hit"); return 0 >= a.health },
        onDeath: function(a) {
            var b =
                this;
            this._scoreDisplaySystem.spawn(this._scoreValue, a.x, a.y);
            0 <= this._dropType && null != this._spawnSystem && this._spawnSystem.spawnFromMessage(Lb.make(a.x, a.y, this._dropType));
            a.health = 0;
            a.alive = !1;
            a.mask = 0;
            this.registerDisposable(wd.playStateThen(this._objectSprite, "death", function() { a.markForRemoval = !0;
                b.owner.dispose() }))
        },
        enumToMessageType: function(a) { switch (a[1]) {
                case 0:
                    return 1;
                case 1:
                    return 2;
                case 2:
                    return 3;
                case 3:
                    return 1 + Math.floor(3 * Math.random());
                case 4:
                    return -1 } },
        __class__: pe
    });
    var qe =
        function() { this._invuln = !1;
            this._count = 0;
            n.call(this);
            this._isPlayerHit = !1 };
    g["nick.shmup.collision.HeroCollisionLogic"] = qe;
    qe.__name__ = ["nick", "shmup", "collision", "HeroCollisionLogic"];
    qe.__super__ = Ha;
    qe.prototype = m(Ha.prototype, {
        onStart: function() {
            Ha.prototype.onStart.call(this);
            this._powerTracker = this.owner.$MH[26];
            this._mask = u.instance(this.owner.$MH[1], na).actorInfo.mask;
            this._bag = q.root.$MH[10];
            var a = this.owner.getAssetsFromParents();
            this._shieldDownSound = a.getSound("sfx/shield_power_down");
            this._hitSound = a.getSound("sfx/hero_hit");
            null
        },
        collide: function(a, b) {
            if (0 != (b._flags & 2) && 0 == (a._flags & 64)) {
                var c;
                c = this.owner._internal_getFromParents(10);
                null != this._powerTracker && !0 == c.get("shield") || this._invuln ? this._invuln || (this.registerDisposable(this._shieldDownSound.play(2)), Fa.getSoundSystemFromParents(this.owner).stopLoop(), this._invuln = !0, u.instance(this.owner.$MH[1], na).actorInfo.mask = -3, this._count = 1, c.set("shield", !1)) : (this.playHit(), this.owner.$MH[26].deactivatePowerups(), aa.addHealth(c,
                    -b.damage))
            }
        },
        onUpdate: function(a) { Ha.prototype.onUpdate.call(this, a);
            0 < this._count && (this._count -= a, 0 >= this._count && (this.owner.$MH[27].enabled = !0, u.instance(this.owner.$MH[1], na).actorInfo.mask = this._mask, this.owner.$MH[3].alpha.set__(1), this._invuln = this._isPlayerHit = !1)) },
        playHit: function() {
            var a = this;
            this._isPlayerHit || (this._isPlayerHit = !0, this.registerDisposable(this._hitSound.play()), this.owner.$MH[27].enabled = !1, this.owner.$MH[3].alpha.set_behavior(new bc(1, 0.5, 0.1)), this._invuln = !0, u.instance(this.owner.$MH[1],
                na).actorInfo.mask = -3, this._count = 1.5, this.owner.$MH[25].playState(fa.HIT, !1, function() { null != a.owner && (a.owner.$MH[27].enabled = !0) }))
        },
        setInvuln: function(a) { this._invuln = !0;
            u.instance(this.owner.$MH[1], na).actorInfo.mask = -3;
            this._count = a },
        __class__: qe
    });
    var oh = function() { this._powerUpType = ga.Nothing;
        n.call(this) };
    g["nick.shmup.collision.PowerUpLogic"] = oh;
    oh.__name__ = ["nick", "shmup", "collision", "PowerUpLogic"];
    oh.__super__ = Ha;
    oh.prototype = m(Ha.prototype, {
        collide: function(a, b) {
            var c;
            c = this.owner._internal_getFromParents(10);
            var d = this._powerUpType;
            switch (d[1]) {
                case 0:
                    null; break;
                case 1:
                    switch (d[2][1]) {
                        case 0:
                            c.set("rapidFire", !0);
                            this.owner.getAssetsFromParents().getSound("sfx/shield").play(0.5); break;
                        case 1:
                            c.set("triBlast", !0);
                            this.owner.getAssetsFromParents().getSound("sfx/shield").play(0.5); break;
                        case 2:
                            c.set("shield", !0), this.owner.getAssetsFromParents().getSound("sfx/shield").play(0.5), Fa.getSoundSystemFromParents(this.owner).startLoop("sfx/shield_power_loop", 0.5) } } this.removePowerUpActor(a)
        },
        onStart: function() {
            Ha.prototype.onStart.call(this);
            if (null != this.owner) switch (this._powerUpType[1]) {
                case 1:
                    this.owner.emitMessageToParents("OnPowerUpVisible", this.owner) }
        },
        setType: function(a) { this._powerUpType = ga.Just(a); return this },
        removePowerUpActor: function(a) { a.alive = !1;
            a.markForRemoval = !0;
            a.mask = 0;
            this.owner.dispose();
            this.dispose() },
        __class__: oh
    });
    var Ja = g["nick.shmup.collision.PowerUpType"] = { __ename__: ["nick", "shmup", "collision", "PowerUpType"], __constructs__: ["RapidFire", "TriBlast", "Shield", "Random", "Empty"] };
    Ja.RapidFire = ["RapidFire", 0];
    Ja.RapidFire.toString = l;
    Ja.RapidFire.__enum__ = Ja;
    Ja.TriBlast = ["TriBlast", 1];
    Ja.TriBlast.toString = l;
    Ja.TriBlast.__enum__ = Ja;
    Ja.Shield = ["Shield", 2];
    Ja.Shield.toString = l;
    Ja.Shield.__enum__ = Ja;
    Ja.Random = ["Random", 3];
    Ja.Random.toString = l;
    Ja.Random.__enum__ = Ja;
    Ja.Empty = ["Empty", 4];
    Ja.Empty.toString = l;
    Ja.Empty.__enum__ = Ja;
    var re = function() { this.minTimeFiring = this.maxTimeFiring = this.minTimePaused = this.maxTimePaused = 1;
        H.call(this) };
    g["nick.shmup.creator.BossSpawner"] = re;
    re.__name__ = ["nick", "shmup", "creator",
        "BossSpawner"
    ];
    re.__super__ = H;
    re.prototype = m(H.prototype, {
        onStart: function() { H.prototype.onStart.call(this); var a = u.instance(this.formation.$MH[1], Fc);
            this.connect0(a.formationDestroyed, ha(this, this.onFormationDestroyed)) },
        onFormationDestroyed: function() {
            var a = this.itemToSpawn.$MH[1],
                b = this.owner._internal_getFromParents(3, T),
                c = b.createObject(a.info);
            c.add(new ah(this.minTimeFiring, this.maxTimeFiring, this.minTimePaused, this.maxTimePaused));
            b.getLayer(a.info.layer.name).addChild(c);
            this.owner.emitMessageToParents("$bossSpawned",
                c);
            this.owner.dispose()
        },
        __class__: re
    });
    var lc = function() { H.call(this) };
    g["nick.shmup.creator.PickUpItem"] = lc;
    lc.__name__ = ["nick", "shmup", "creator", "PickUpItem"];
    lc.__super__ = H;
    lc.prototype = m(H.prototype, {
        addLogic: function() { return null },
        onStart: function() { H.prototype.onStart.call(this); var a;
            a = this.owner._internal_getFromChildren(3); var b;
            b = this.owner._internal_getFromParents(14); var c = this.owner._internal_getFromParents(2);
            this.buildActor(a, b, c);
            this.owner.dispose() },
        setXY: function(a, b) {
            this._x =
                a;
            this._y = b;
            return this
        },
        modifyBeforeOnStart: function(a) { this._callback = a; return this },
        createActor: function(a, b, c, d, e) { a = lb.make(a);
            a.mask = b;
            a.x = c;
            a.y = d;
            a.radius = e; return a },
        buildActor: function(a, b, c) { var d = this,
                e = (new F).add(a);
            a = this.createActor(16, 1, null == this._x ? a.x.$pH : this._x, null == this._y ? a.y.$pH : this._y, this.radius);
            a.alive = !0;
            a.disposeWhenOffscreen = !0;
            a.markForRemoval = !1;
            a.allocator = function() { return e.add(d.addLogic()) };
            null != this._callback && this._callback(e, a);
            b.add(a) },
        __class__: lc
    });
    var td = function() { H.call(this) };
    g["nick.shmup.creator.Collectable"] = td;
    td.__name__ = ["nick", "shmup", "creator", "Collectable"];
    td.__super__ = lc;
    td.prototype = m(lc.prototype, { addLogic: function() { return (new nh).setType(this.collectableType) }, __class__: td });
    var se = function() { H.call(this) };
    g["nick.shmup.creator.EasterEgg"] = se;
    se.__name__ = ["nick", "shmup", "creator", "EasterEgg"];
    se.__super__ = H;
    se.prototype = m(H.prototype, {
        onStart: function() {
            H.prototype.onStart.call(this);
            this.registerDisposable(this.owner.$MH[3].get_pointerDown().connect(ha(this,
                this.onEggTap)))
        },
        onEggTap: function(a) {
            var b = this;
            if (null != this.owner) {
                var c = this.owner.getAssetsFromParents();
                c.getSound("sfx/easterEgg").play();
                q.root._internal_getFromChildren(23).playEasterEgg(function() { var a;
                    a = b.owner._internal_getFromParents(10);
                    aa.setHealth(a, a.get("heroMaxHealth"));
                    c.getSound("sfx/heal").play();
                    a = b.owner._internal_getFromParents(3, T).getObjectsByType(na); for (var e = 0; e < a.length;) { var f = a[e];++e;
                        u.instance(f.$MH[1], na).isAI || f.$MH[25].playOverlayHeal() } b.owner.dispose() });
                this.owner.$MH[3].dispose()
            }
        },
        __class__: se
    });
    var Mb = function() { this._powerUpType = Ja.Empty;
        this._timeToNextFire = 0;
        this.offsetY = 15;
        this.damage = this.health = 1;
        this.scoreValue = 100;
        this.bulletLife = 5;
        this.fireRate = 0;
        this.actorInfo = null;
        this.hitRadius = 14;
        H.call(this) };
    g["nick.shmup.creator.Enemy"] = Mb;
    Mb.__name__ = ["nick", "shmup", "creator", "Enemy"];
    Mb.__interfaces__ = [xj];
    Mb.__super__ = H;
    Mb.prototype = m(H.prototype, {
        onAdded: function() { H.prototype.onAdded.call(this);
            this._timeToNextFire = Math.random() * this.fireRate },
        onStart: function() { H.prototype.onStart.call(this);
            this._sprite = this.owner.$MH[3];
            this._sprite.setXY(this.actorInfo.x, this.actorInfo.y);
            this._manager = this.owner._internal_getFromParents(14);
            this._library = this.owner.getAssetsFromParents().getLibrary("animation");
            u.instance(this.owner.$MH[3], qb).loop("walk");
            this.owner.add(new pe(this.scoreValue, this._powerUpType)) },
        getSprite: function() { return this._sprite },
        powerUpDrop: function(a) { this._powerUpType = a; return this },
        onUpdate: function(a) {
            H.prototype.onUpdate.call(this,
                a);
            this.updateSpritePosition();
            0 > this.fireRate || (this._timeToNextFire -= a, 0 >= this._timeToNextFire && (this.fireBullet(), this._timeToNextFire += this.fireRate))
        },
        fireBullet: function() {
            var a = this;
            if (0 != this.actorInfo.mask) {
                var b = lb.make(6);
                b.mask = 1;
                b.x = this.actorInfo.x - this.actorInfo.radius - 5;
                b.y = this.actorInfo.y;
                b.radius = 8;
                b.health = b.totalHealth = 0;
                b.damage = this.damage;
                u.instance(this.owner.$MH[3], qb).play("shoot");
                b.allocator = function() {
                    null != a.owner && a.owner.getAssetsFromParents().getSound("sfx/enemy_fire").play(0.5);
                    var c = a._library.createSprite("projectile01").disablePointer();
                    return (new F).add(c).add((new Tc).setInfo(b, a.bulletLife, -200, 0))
                };
                this._manager.add(b);
                u.instance(this.owner.$MH[3], qb).play("shoot")
            }
        },
        updateSpritePosition: function() { null != this._sprite && this.actorInfo.alive && this._sprite.setXY(this.actorInfo.x, this.actorInfo.y) },
        __class__: Mb
    });
    var La = g["nick.shmup.creator.FormationMovementType"] = {
        __ename__: ["nick", "shmup", "creator", "FormationMovementType"],
        __constructs__: ["Linear", "ZigZag", "Sine", "Homing",
            "Orbit"
        ]
    };
    La.Linear = ["Linear", 0];
    La.Linear.toString = l;
    La.Linear.__enum__ = La;
    La.ZigZag = ["ZigZag", 1];
    La.ZigZag.toString = l;
    La.ZigZag.__enum__ = La;
    La.Sine = ["Sine", 2];
    La.Sine.toString = l;
    La.Sine.__enum__ = La;
    La.Homing = ["Homing", 3];
    La.Homing.toString = l;
    La.Homing.__enum__ = La;
    La.Orbit = ["Orbit", 4];
    La.Orbit.toString = l;
    La.Orbit.__enum__ = La;
    var Fc = function() {
        this._hasCreatedPowerUp = !1;
        this._actors = [];
        this._totalOnScreen = 0;
        this._movementControllerAttached = !1;
        this._anchor = new ka;
        this._totalLength = 0;
        this.formationDestroyed =
            new bb;
        this.dropPowerUp = Ja.Empty;
        this.movementDelay = 0;
        this.angle = 180;
        this.speed = this.amplitude = this.amplitudeSpeed = 0;
        this.movementType = null;
        this.enemyCount = 1;
        H.call(this)
    };
    g["nick.shmup.creator.Formation"] = Fc;
    Fc.__name__ = ["nick", "shmup", "creator", "Formation"];
    Fc.__super__ = H;
    Fc.prototype = m(H.prototype, {
        onStart: function() {
            H.prototype.onStart.call(this);
            null == this.movementType && (this.movementType = La.Linear);
            this._actorManager = Fa.getActorManagerFromParents(this.owner);
            this._anchor.set(this.info.x, this.info.y);
            switch (this.info.shape[1]) {
                case 3:
                    this.spawnPoly(); break;
                case 2:
                    this.info.points.push(this.info.points[0]);
                    this.spawnPoly(); break;
                case 1:
                    this.spawnEllipse(); break;
                case 0:
                    null == this.info.points && (this.info.points = []);
                    this.info.points.push(new ka(0, 0));
                    this.info.points.push(new ka(this.info.width, 0));
                    this.info.points.push(new ka(this.info.width, this.info.height));
                    this.info.points.push(new ka(0, this.info.height));
                    this.info.points.push(this.info.points[0]);
                    this.spawnPoly(); break;
                default:
                    null } null != this._actorInfoReady &&
                this._actorInfoReady.emit(this._actors)
        },
        spawnEllipse: function() { if (1 == this.enemyCount) this.makeActorInfo(0, 0);
            else { for (var a = 360 / this.enemyCount * 3.141592653589793 / 180, b = 0, c = this.enemyCount; b < c;) { var d = b++,
                        e = 0.5 * this.info.width * Math.cos(a * d),
                        d = 0.5 * this.info.height * Math.sin(a * d);
                    this.makeActorInfo(e, d) } 0 < this._totalOnScreen && !this._movementControllerAttached && this.attachMovementController() } },
        spawnPoly: function() {
            for (var a = this.info.points[0], b = [], c = [], d = 1, e = this.info.points.length; d < e;) {
                var f = d++,
                    f = this.info.points[f],
                    a = a.distanceTo(f.x, f.y);
                b.push(a);
                this._totalLength += a;
                c.push(this._totalLength);
                a = f
            }
            d = da.enumEq(this.info.shape, ua.Polyline) ? 1 : 0;
            d = this._totalLength / (this.enemyCount - d);
            this.makeActorInfo(this.info.points[0].x, this.info.points[0].y);
            e = 1;
            for (a = this.enemyCount; e < a;) { for (var f = e++, g = d * f, h = 0; c[h] < g;) h++; var f = this.info.points[h],
                    l = this.info.points[h + 1],
                    g = 1 - (c[h] - g) / b[h];
                this.makeActorInfo(f.x + (l.x - f.x) * g, f.y + (l.y - f.y) * g) } 0 < this._totalOnScreen && !this._movementControllerAttached &&
                this.attachMovementController()
        },
        makeActorInfo: function(a, b) {
            var c = this,
                d = lb.make(2),
                e = this.enemyToSpawn.$MH[1],
                f = this.owner._internal_getFromParents(3, T);
            d.allocator = function() { var a = f.createObject(e.info),
                    b = u.instance(a.$MH[1], Mb);
                a.$MH[3].disablePointer();
                c._hasCreatedPowerUp || (b.powerUpDrop(c.dropPowerUp), c._hasCreatedPowerUp = !0);
                b.actorInfo = d; return a };
            d.x = a + this.info.x;
            d.y = b + this.info.y;
            d.offsetY = e.offsetY;
            d.radius = u.instance(this.enemyToSpawn.$MH[1], Mb).hitRadius;
            d.mask = 1;
            d.damage = u.instance(this.enemyToSpawn.$MH[1],
                Mb).damage;
            d.health = d.totalHealth = u.instance(this.enemyToSpawn.$MH[1], Mb).health;
            this._actors.push(d);
            this._actorManager.add(d);
            this.connect2(d.onScreen.get_changed(), ha(this, this.actorInfoChanged));
            d.onScreen.$pH && (this._totalOnScreen++, this.actorInfoChanged(!0, !0))
        },
        actorInfoChanged: function(a, b) {
            this._totalOnScreen = a ? this._totalOnScreen + 1 : this._totalOnScreen - 1;
            if (0 >= this._totalOnScreen && this._movementControllerAttached) {
                this.formationDestroyed.emit();
                for (var c = 0, d = this._actors.length; c < d;) {
                    var e =
                        c++;
                    this._actors[e].markForRemoval = !0;
                    this._actorManager.removed.emit()
                }
                this._actors = [];
                this.owner.dispose()
            }
            0 < this._totalOnScreen && !this._movementControllerAttached && this.attachMovementController()
        },
        attachMovementController: function() {
            var a = this;
            this._movementControllerAttached = !0;
            var b = null;
            switch (this.movementType[1]) {
                case 0:
                    b = function() { a.owner.add(new ph(a._actors, a.speed, a.angle)) };
                    break;
                case 1:
                    b = function() { a.owner.add(new qh(a._actors, a.speed, a.amplitude, a.amplitudeSpeed)) };
                    break;
                case 2:
                    b =
                        function() { a.owner.add(new rh(a._actors, a.speed, a.amplitude, a.amplitudeSpeed)) };
                    break;
                case 3:
                    b = function() { a.owner.add(new sh(a._actors, a.speed)) };
                    break;
                case 4:
                    b = function() { a.owner.add(new th(a._actors, a.speed, a.info.x, a.info.y)) }
            }
            if (null != b)
                if (0 >= this.movementDelay) b();
                else { var c = new kb;
                    this.owner.add(c);
                    c.run(new Kb([new Vb(this.movementDelay), new ab(b)])) } this.owner.emitMessageToParents("OnFormationVisible", this.owner)
        },
        get_actorInfoReady: function() {
            return null == this._actorInfoReady ? this._actorInfoReady =
                new ia : this._actorInfoReady
        },
        __class__: Fc,
        __properties__: m(H.prototype.__properties__, { get_actorInfoReady: "get_actorInfoReady" })
    });
    var na = function() { this.showsShootAnim = !0;
        this.visualRing = ga.Nothing;
        this.speed = 300;
        this.actorInfo = null;
        this.stageY = new X(0);
        this.stageX = new X(0);
        this.isAI = !1;
        H.call(this) };
    g["nick.shmup.creator.Hero"] = na;
    na.__name__ = ["nick", "shmup", "creator", "Hero"];
    na.__super__ = H;
    na.prototype = m(H.prototype, {
        onStart: function() {
            var a = this;
            H.prototype.onStart.call(this);
            this.owner.add(new fc);
            var b = q.root.$MH[10];
            this._heroID = this.isAI ? b.get("character2") : b.get("character1");
            var c = this.owner._internal_getFromParents(3, T),
                b = this.owner.$MH[12].get(this._heroID, this.isAI);
            this.initArtwork();
            this.initActor(c);
            this.isAI ? this.owner.add(new bh).add(this.movement = new me(null, null, this.actorInfo.radius)) : (c = this.owner._internal_getFromParents(10), c.set("heroMaxHealth", b.health), c.set("heroHealth", b.health), this.owner.add(new dh).add(new eh(!1)).add(new uh).add(new qe).add(this.movementController =
                new vh).add(this.movement = new me(new ka(this.movementController.minX, this.movementController.maxX), new ka(this.movementController.minY, this.movementController.maxY), this.actorInfo.radius)), this.connect2(this.movementController.changed, ha(this, this.clickPadChanged)), this.connect0(this.movementController.pointerDown, ha(this, this.clickPadDown)), this.connect2(this.movementController.keyDown, ha(this, this.clickPadKeyDown)), this.movementController.init(this.stageX.$pH, this.stageY.$pH));
            this.movement.set_enabled(!1);
            c = this.stageX.$pH;
            this.stageX.set__(c - 200);
            var d = this.owner.getAssetsFromParents().getSound("sfx/" + this._heroID + "_hit"),
                e;
            e = null != b.bulletScale ? b.bulletScale : 1;
            var f;
            f = this.isAI ? 0.5 * b.attack : b.attack;
            var g = new kb;
            this.owner.add(g).add((new ch(b.fireRate, b.bulletLife, f, b.bulletRadius, b.bulletSpeed, e)).setOffsetY(22).setDestroySound(d));
            g.run(new Kb([new Ub(this.stageX, c, 1.25), new ab(function() { a.movement.set_enabled(!0) })]));
            this.connectMessage("fire", ha(this, this.onBlasterFire))
        },
        initArtwork: function() {
            var a =
                this.owner.getAssetsFromParents(),
                b = a.getLibrary("animation");
            this.library = a.getLibrary(this._heroID);
            this.owner.add(this._sprite = (new x).disablePointer()).add(new wh(this.isAI));
            this.isAI ? this.owner.addChild((new F).add(a = b.createSprite("fx_secondary").setAlpha(0)), !1) : this.owner.addChild((new F).add(a = b.createSprite("fx_primary")), !1);
            this.visualRing = ga.Just(a)
        },
        initActor: function(a) {
            var b = this,
                c = Fa.getActorManagerFromParents(this.owner),
                d = this.owner.$MH[12].get(this._heroID);
            this.stageX.set__(this.info.x -
                a.cameraX.$pH);
            this.stageY.set__(this.info.y);
            this.isAI ? (this.actorInfo = lb.make(65), this.actorInfo.mask = 0) : (this.actorInfo = lb.make(1), this.actorInfo.mask = -2);
            this.actorInfo.radius = 30;
            this.actorInfo.offsetY = 20;
            this.actorInfo.x = this.info.x;
            this.actorInfo.y = this.info.y;
            this.actorInfo.allocator = function() { return a.createObject(b.info) };
            this.actorInfo.spawned = this.owner;
            this.actorInfo.health = this.actorInfo.totalHealth = d.health;
            this.actorInfo.damage = d.attack;
            this.actorInfo.disposeWhenOffscreen = !1;
            this._sprite =
                this.owner.$MH[3].disablePixelSnapping();
            this._sprite.setXY(this.actorInfo.x, this.actorInfo.y);
            c.add(this.actorInfo)
        },
        onBlasterFire: function(a) { this.showsShootAnim && this.owner.$MH[25].playState(fa.SHOOT, !1) },
        onUpdate: function(a) { H.prototype.onUpdate.call(this, a);
            this.stageX.update(a);
            this.stageY.update(a);
            this._dt = a;
            this.updateSpritePosition() },
        updateSpritePosition: function() { null != this._sprite && this._sprite.setXY(this.actorInfo.x, this.actorInfo.y) },
        clickPadKeyDown: function(a, b) {
            this.movement.update(this.stageX,
                this.stageY, this.stageX.$pH + a * this._dt * this.speed, this.stageY.$pH + b * this._dt * this.speed, !1, 0)
        },
        clickPadChanged: function(a, b) { this.movement.update(this.stageX, this.stageY, a, b, !0, 0) },
        clickPadDown: function() { this.movementController.init(this.stageX.$pH, this.stageY.$pH) },
        __class__: na
    });
    var fa = g["nick.shmup.creator.HeroAnimationState"] = { __ename__: ["nick", "shmup", "creator", "HeroAnimationState"], __constructs__: "DEATH HIT IDLE SHOOT SPECIAL WALK IN OUT".split(" ") };
    fa.DEATH = ["DEATH", 0];
    fa.DEATH.toString =
        l;
    fa.DEATH.__enum__ = fa;
    fa.HIT = ["HIT", 1];
    fa.HIT.toString = l;
    fa.HIT.__enum__ = fa;
    fa.IDLE = ["IDLE", 2];
    fa.IDLE.toString = l;
    fa.IDLE.__enum__ = fa;
    fa.SHOOT = ["SHOOT", 3];
    fa.SHOOT.toString = l;
    fa.SHOOT.__enum__ = fa;
    fa.SPECIAL = ["SPECIAL", 4];
    fa.SPECIAL.toString = l;
    fa.SPECIAL.__enum__ = fa;
    fa.WALK = ["WALK", 5];
    fa.WALK.toString = l;
    fa.WALK.__enum__ = fa;
    fa.IN = ["IN", 6];
    fa.IN.toString = l;
    fa.IN.__enum__ = fa;
    fa.OUT = ["OUT", 7];
    fa.OUT.toString = l;
    fa.OUT.__enum__ = fa;
    var wh = function(a) {
        this._lastBottomAnin = "";
        this._strikeReadyLayer = ga.Nothing;
        this.disableStateChange = !1;
        n.call(this);
        this._isAI = a;
        this.library = ga.Nothing
    };
    g["nick.shmup.creator.HeroBody"] = wh;
    wh.__name__ = ["nick", "shmup", "creator", "HeroBody"];
    wh.__super__ = n;
    wh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 25 },
        onAdded: function() {
            var a = this.owner.getAssetsFromParents(),
                b = q.root.$MH[10],
                b = this._isAI ? b.get("character2") : b.get("character1"),
                a = a.getLibrary(b);
            this.library = ga.Just(a);
            this._topHalf = (new F).add(new Wd(a));
            this._bottomHalf = (new F).add(new Wd(a));
            this._container =
                (new F).add(new x).addChild(this._bottomHalf).addChild(this._topHalf);
            this.owner.addChild(this._container);
            this.playState(fa.WALK, !0)
        },
        onRemoved: function() { this._container.dispose();
            this.library = null },
        playState: function(a, b, c) {
            if (!this.disableStateChange) switch (a[1]) {
                case 0:
                    switch (b) {
                        case !1:
                            null != c ? this.playStateThen("state_death", "bottom_state_death", c) : this.play("state_death", "bottom_state_death"); break;
                        default:
                            null }
                    break;
                case 1:
                    switch (b) {
                        case !1:
                            null != c ? this.playStateThen("state_hit", "bottom_state_walk",
                                c) : this.play("state_hit", "bottom_state_walk");
                            break;
                        default:
                            null
                    }
                    break;
                case 2:
                    switch (b) {
                        case !0:
                            this._topHalf.$MH[5].loop("state_idle");
                            this._bottomHalf.$MH[5].loop("bottom_state_walk"); break;
                        default:
                            null }
                    break;
                case 3:
                    switch (b) {
                        case !1:
                            null != c ? this.playStateThen("state_shoot", "bottom_state_walk", c) : this.play("state_shoot", "bottom_state_walk"); break;
                        default:
                            null }
                    break;
                case 4:
                    switch (b) {
                        case !1:
                            null != c ? this.playStateThen("state_special", "bottom_state_special", c) : this.play("state_special", "bottom_state_special");
                            break;
                        default:
                            null
                    }
                    break;
                case 5:
                    switch (b) {
                        case !0:
                            this._topHalf.$MH[5].loop("state_walk");
                            this._bottomHalf.$MH[5].loop("bottom_state_walk"); break;
                        default:
                            null }
                    break;
                case 6:
                    switch (b) {
                        case !1:
                            null != c ? this.playStateThen("state_in", "bottom_state_in", c) : this.play("state_in", "bottom_state_in"); break;
                        default:
                            null }
                    break;
                case 7:
                    switch (b) {
                        case !1:
                            null != c ? this.playStateThen("state_out", "bottom_state_out", c) : this.play("state_out", "bottom_state_out"); break;
                        default:
                            null }
            }
        },
        playOverlayHeal: function() {
            var a = new F,
                b = this._container.getAssetsFromParents().getLibrary("animation").createMovie("easterEgg_heal", null);
            this._container.addChild(a.add(b.disablePointer()));
            b.registerDisposable(b.get_looped().connect(function() { a.dispose() }))
        },
        playStopStrikeReady: function(a) {
            var b = this._strikeReadyLayer;
            switch (b[1]) {
                case 0:
                    switch (a) {
                        case !0:
                            a = new F, b = u.instance(this.owner.$MH[1], na).library.createMovie("squadStrikeReadyFx", null), this._container.addChild(a.add(b.disablePointer())), this._strikeReadyLayer = ga.Just(a) }
                    break;
                case 1:
                    switch (a) {
                        case !1:
                            b[2].dispose(), this._strikeReadyLayer = ga.Nothing }
            }
        },
        play: function(a, b) { this._topHalf.$MH[5].play(a);
            this._lastBottomAnin != b && (this._bottomHalf.$MH[5].play(b, !1), this._lastBottomAnin = b) },
        playStateThen: function(a, b, c) { yj.playStateThen(this._topHalf.$MH[5], a, c);
            this._lastBottomAnin != b && (this._bottomHalf.$MH[5].play(b, !1), this._lastBottomAnin = b) },
        __class__: wh
    });
    var xh = function() { this.cameraSpeed = 100;
        A.call(this) };
    g["nick.shmup.creator.InitializeLevel"] = xh;
    xh.__name__ = ["nick",
        "shmup", "creator", "InitializeLevel"
    ];
    xh.__super__ = A;
    xh.prototype = m(A.prototype, {
        $eF: function(a) {
            var b = this,
                c = this.script.owner._internal_getFromParents(3, T);
            c.owner.add(new Vg).add((new Ug(c)).playStageIntro());
            null == c.owner.$MH[24] && c.owner.add(new yh(this.cameraSpeed));
            null == c.owner.$MH[17] && c.owner.add(new ke);
            c.owner.add(new Tg);
            var d = new le;
            c.owner.add(d);
            this.script.owner._internal_getFromParents(9, zb).shown.connect(function() { d.setVolume(0.5) });
            var e = q.root.$MH[10];
            a = q.root.$MH[33];
            var f = e.get("character1"),
                g = e.get("character2");
            switch (this.script.owner._internal_getFromParents(9, zb).$mF.toLowerCase()) {
                case "level1":
                    e.set("numSquadStrike", 0);
                    e.set("reachedBoss", !1);
                    var h = a.getFloat("matchID", 0) + 1;
                    a.setFloat("matchID", h);
                    Na.get_deltaBootstrap().track(["matchStarted", "matchID", h, "gameModeName", "Normal", "characterName", f, "partnerName", g]);
                    break;
                case "level9":
                    var l = c.owner.$MH[4];
                    c.connect0(c.owner.$MH[24].cameraStopped, function() { null == l.run("OnBossReached", c.owner, !1) && null;
                        e.set("reachedBoss", !0) });
                    null;
                    break;
                default:
                    null
            }
            c.connect2(c.owner._internal_getFromParents(10).changed, function(a, d) { "heroSpecial" == a && 100 == d && b.script.run("OnSquadStrikeReady", c.owner, !1) })
        },
        __class__: xh
    });
    var zh = function() { A.call(this) };
    g["nick.shmup.creator.MoveHeroOffScreen"] = zh;
    zh.__name__ = ["nick", "shmup", "creator", "MoveHeroOffScreen"];
    zh.__super__ = A;
    zh.prototype = m(A.prototype, {
        $fF: function(a) {
            var b = u.instance(a.$MH[1], na);
            this.script.owner.getAssetsFromParents().getSound("sfx/level_complete").play(1);
            Fa.getSoundSystemFromParents(this.script.owner).stopLoop();
            this.script.owner._internal_getFromParents(3, T).disablePointer();
            var c = a.$MH[31];
            c.enabled = !1;
            c._changed = !0;
            !1;
            null != a.$MH[27] && (a.$MH[27].allowFire = !1);
            null != b.movementController && (b.movementController.enabled = !1);
            var c = (1380 - b.stageX.$pH) / 500,
                d = new ea,
                e = new kb;
            a.add(e);
            e.run(new Kb([new Ub(b.stageX, 1380, c), new ab(function() { d.success(null) })]));
            return d
        },
        __class__: zh
    });
    var Ah = function() { this.changeHeroControls = Wb.NoChange;
        this.loop = !1;
        this.waitForComplete = !0;
        A.call(this) };
    g["nick.shmup.creator.PlayHeroState"] =
        Ah;
    Ah.__name__ = ["nick", "shmup", "creator", "PlayHeroState"];
    Ah.__super__ = A;
    Ah.prototype = m(A.prototype, { $fF: function(a) { var b = new ea,
                c = a.$MH[25]; switch (this.changeHeroControls[1]) {
                case 1:
                    a.$MH[31].set_enabled(!0); break;
                case 2:
                    a.$MH[31].set_enabled(!1) } var d = null;
            this.waitForComplete && (d = function() { b.success(null);
                a.dispose() });
            c.playState(fa.DEATH, !1, d);
            c.disableStateChange = !0; return b }, __class__: Ah });
    var Wb = g["nick.shmup.creator.HeroControlState"] = {
        __ename__: ["nick", "shmup", "creator", "HeroControlState"],
        __constructs__: ["NoChange", "Enable", "Disable"]
    };
    Wb.NoChange = ["NoChange", 0];
    Wb.NoChange.toString = l;
    Wb.NoChange.__enum__ = Wb;
    Wb.Enable = ["Enable", 1];
    Wb.Enable.toString = l;
    Wb.Enable.__enum__ = Wb;
    Wb.Disable = ["Disable", 2];
    Wb.Disable.toString = l;
    Wb.Disable.__enum__ = Wb;
    var te = function() { H.call(this) };
    g["nick.shmup.creator.PowerUp"] = te;
    te.__name__ = ["nick", "shmup", "creator", "PowerUp"];
    te.__super__ = lc;
    te.prototype = m(lc.prototype, { addLogic: function() { return (new oh).setType(this.powerUpType) }, __class__: te });
    var Uc =
        function() { this.propertyLocation = Cb.Scene;
            A.call(this) };
    g["s2.localization.LocalizeText"] = Uc;
    Uc.__name__ = ["s2", "localization", "LocalizeText"];
    Uc.__super__ = A;
    Uc.prototype = m(A.prototype, {
        $eF: function(a) {
            var b = this.getFormat(this.localizationID, this.mobileAlternateID),
                c = this.getTextSetter(a, b.scale),
                d = new Ra("\\{\\{.*}\\}", "g");
            if (d.match(b.text)) {
                var e = new Ra("[\\}\\{].", "g"),
                    f = d.matched(0),
                    g = e.replace(f, ""),
                    d = null;
                switch (this.propertyLocation[1]) {
                    case 0:
                        d = q.root;
                        break;
                    case 1:
                        d = a._internal_getFromParents(9).owner;
                        break;
                    case 2:
                        d = a
                }
                d = d.$MH[10];
                e = function(a, d) { if (a == g) { var e = I.replace(b.text, f, d);
                        c(e) } };
                c(I.replace(b.text, f, d.get(g)));
                var h = u.instance(a.$MH[1], Ud);
                null != h ? h.connect2(d.changed, e) : u.instance(a.$MH[1], fd).connect2(d.changed, e)
            } else c(b.text)
        },
        getFormat: function(a, b) { null == b && (b = ""); var c = a;
            (y.get_mobile() || y.get_android()) && null != b && "" != b && (c = b); return R.getFormat(c) },
        getTextSetter: function(a, b) {
            var c = u.instance(a.$MH[3], hb);
            if (null != c) return function(a) {
                c.set_text(a);
                c.disablePixelSnapping();
                c.setScale(b *
                    c.scaleX.$pH)
            };
            var d = u.instance(a.$MH[3], gd);
            return null != d ? function(a) { d.set_text(a) } : function(a) { null }
        },
        __class__: Uc
    });
    var Bh = function() { Uc.call(this) };
    g["nick.shmup.creator.StageLocalizer"] = Bh;
    Bh.__name__ = ["nick", "shmup", "creator", "StageLocalizer"];
    Bh.__super__ = Uc;
    Bh.prototype = m(Uc.prototype, {
        $eF: function(a) {
            var b = this.getFormat(this.localizationID, this.mobileAlternateID);
            a = this.getTextSetter(a, b.scale);
            var c = q.root.$MH[10].get("currentStage"),
                c = R.getFormat("gameplay.stage" + c).text,
                b = I.replace(b.text,
                    "{{currentStage}}", c);
            a(b)
        },
        __class__: Bh
    });
    var sh = function(a, b) { this._centers = [];
        this._actors = [];
        this.speed = 0;
        n.call(this);
        this._actors = a; for (var c = 0, d = a.length; c < d;) { var e = c++;
            this._centers.push(new ka(a[e].x, a[e].y)) } this.speed = b };
    g["nick.shmup.movement.HomingMovement"] = sh;
    sh.__name__ = ["nick", "shmup", "movement", "HomingMovement"];
    sh.__super__ = n;
    sh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 59 },
        onStart: function() {
            var a;
            a = this.owner._internal_getFromParents(14);
            if (null != a) {
                a = a.getAll(1);
                for (var b = 0; b < a.length;) { var c = a[b];++b; if (0 == (c._flags & 4) && 0 == (c._flags & 64)) { this._hero = c; break } }
            }
        },
        onUpdate: function(a) { if (null != this._hero) { var b = this._actors.length; for (a *= this.speed; 0 < b--;) { var c = this._actors[b]; if (c.x > this._hero.x - 350) { var d = Math.atan2(this._hero.y - c.y, this._hero.x - c.x);
                        c.x += Math.cos(d) * a;
                        c.y += Math.sin(d) * a } else c.x -= a } } },
        __class__: sh
    });
    var ph = function(a, b, c) {
        null == c && (c = 180);
        this._actors = [];
        this.speed = 0;
        n.call(this);
        this._actors = a;
        this.speed = b;
        this.angle = 3.141592653589793 *
            c / 180
    };
    g["nick.shmup.movement.LinearMovement"] = ph;
    ph.__name__ = ["nick", "shmup", "movement", "LinearMovement"];
    ph.__super__ = n;
    ph.prototype = m(n.prototype, { get_entitySlot: function() { return 56 }, onUpdate: function(a) { var b = this._actors.length; for (a *= this.speed; 0 < b--;) { var c = this._actors[b],
                    d = Math.cos(this.angle) * a + c.x,
                    e = Math.sin(this.angle) * a + c.y;
                c.x = d;
                c.y = e } }, __class__: ph });
    var th = function(a, b, c, d) {
        this._radiuses = [];
        this._centers = [];
        this._angleSteps = 0;
        this._actors = [];
        this._count = 0;
        this.direction = 1;
        this.orbitSpeed =
            this.centerX = this.centerY = 0;
        n.call(this);
        this._actors = a;
        for (var e = 0, f = a.length; e < f;) { var g = e++,
                g = new ka(a[g].x, a[g].y);
            this._radiuses.push(g.distanceTo(c, d));
            this._centers.push(g) } this._angleSteps = 360 / this._actors.length;
        this.centerX = c;
        this.centerY = d;
        this.orbitSpeed = b
    };
    g["nick.shmup.movement.OrbitMovement"] = th;
    th.__name__ = ["nick", "shmup", "movement", "OrbitMovement"];
    th.__super__ = n;
    th.prototype = m(n.prototype, {
        get_entitySlot: function() { return 60 },
        onUpdate: function(a) {
            var b = this._actors.length;
            for (this._count +=
                a * this.orbitSpeed * this.direction; 0 < b--;) { a = this._actors[b]; var c = 3.141592653589793 * (this._count + this._angleSteps * b) / 180;
                a.x = this.centerX + this._radiuses[b] * Math.cos(c);
                a.y = this.centerY + this._radiuses[b] * Math.sin(c) }
        },
        __class__: th
    });
    var rh = function(a, b, c, d) {
        this._centers = [];
        this._actors = [];
        this._direction = 1;
        this.horizontalSpeed = this.verticalDistance = this.verticalSpeed = this._count = 0;
        n.call(this);
        this._actors = a;
        for (var e = 0, f = a.length; e < f;) { var g = e++;
            this._centers.push(new ka(a[g].x, a[g].y)) } this.horizontalSpeed =
            b;
        this.verticalSpeed = d;
        this.verticalDistance = c
    };
    g["nick.shmup.movement.SineMovement"] = rh;
    rh.__name__ = ["nick", "shmup", "movement", "SineMovement"];
    rh.__super__ = n;
    rh.prototype = m(n.prototype, { get_entitySlot: function() { return 58 }, onUpdate: function(a) { var b = this._actors.length;
            this._count += 3.141592653589793 / this.verticalSpeed * a; for (var c = Math.sin(this._count); 0 < b--;) { var d = this._actors[b],
                    e;
                e = (0 == b % 2 ? -1 : 1) * this._direction;
                d.x -= a * this.horizontalSpeed;
                d.y = this._centers[b].y + e * c * this.verticalDistance } }, __class__: rh });
    var qh = function(a, b, c, d) { this._actors = [];
        this._direction = 1;
        this.horizontalSpeed = this.verticalDistance = this.verticalSpeed = this._distanceMoved = 0;
        n.call(this);
        this._actors = a;
        this.horizontalSpeed = b;
        this.verticalSpeed = d;
        this.verticalDistance = c };
    g["nick.shmup.movement.ZigZagMovement"] = qh;
    qh.__name__ = ["nick", "shmup", "movement", "ZigZagMovement"];
    qh.__super__ = n;
    qh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 57 },
        onUpdate: function(a) {
            var b = this._actors.length,
                c = a * this.verticalSpeed;
            this._distanceMoved >=
                this.verticalDistance && (this._distanceMoved = 0, this._direction *= -1);
            for (; 0 < b--;) { var d = this._actors[b],
                    e;
                e = (0 == b % 2 ? -1 : 1) * this._direction;
                d.x -= a * this.horizontalSpeed;
                d.y += e * c } this._distanceMoved += c
        },
        __class__: qh
    });
    var xd = function() { H.call(this) };
    g["nick.shmup.outcome.Outcome"] = xd;
    xd.__name__ = ["nick", "shmup", "outcome", "Outcome"];
    xd.__super__ = H;
    xd.prototype = m(H.prototype, {
        onStart: function() {
            var a = this;
            H.prototype.onStart.call(this);
            this.owner.getAssetsFromParents();
            var b = q.root.$MH[10],
                c = this.getFirstObject("background__purple");
            this.getFirstObject("background__orange");
            var d = this.getFirstObject("background__trophy"),
                e = this.getFirstObject("background__eyeball"),
                f = this.getFirstObject("background__text");
            e.$MH[3].scaleX.set_behavior(new bc(1, 0.975, 0.1));
            e.$MH[3].scaleY.set_behavior(new bc(1, 0.975, 0.1));
            var g = b.get("character1");
            null == g && (g = "spongebob");
            var h = null,
                l = null,
                m = "april danger babe kenzie lincoln lisa phoebe pinkRanger sandy spongebob".split(" "),
                n = Ma.mapi(this.getAllObjects("characters__gen"), function(a, b) {
                    b.add(new Ch(m[a]));
                    g == m[a] && (h = b.$MH[39]);
                    4 == a && (l = b.$MH[39]);
                    return b.$MH[39]
                });
            h.swap(l);
            var u = new F;
            u.add(new kb);
            u.add(new kb).getComponentBySlot(32).run(new Kb([new Vb(2), new ab(function() { d.$MH[3].y.set_behavior(new bc(250, 290, 1.5));
                a.swapTrophyEyeball(d, e, 0.5, C.sineOut);
                c.$MH[3].alpha.animateTo(0, 0.25, C.sineOut) }), new Vb(0.125), new ab(function() { a.highlightFadeCharacters(n, l, 0.75, C.backOut);
                f.$MH[3].set_visible(!0);
                f.$MH[3].alpha.set__(0);
                f.$MH[3].alpha.animateTo(1, 1, C.sineOut);
                u.dispose() })]));
            this.owner.addChild(u)
        },
        highlightFadeCharacters: function(a, b, c, d) { Ma.iter(a, function(a) { a.fadeOut(c, d) });
            b.highlight(c, d) },
        swapTrophyEyeball: function(a, b, c, d) { a.$MH[3].set_visible(!0);
            a.$MH[3].alpha.set__(0);
            a.$MH[3].alpha.animateTo(1, c, d);
            b.$MH[3].alpha.animateTo(0, c, d) },
        fadeOutPurpleBackground: function(a, b, c) { a.$MH[3].alpha.animateTo(0, b, c) },
        showText: function(a, b, c) { a.$MH[3].set_visible(!0);
            a.$MH[3].alpha.set__(0);
            a.$MH[3].alpha.animateTo(1, b, c) },
        addTrophyAnim: function(a) { a.$MH[3].y.set_behavior(new bc(250, 290, 1.5)) },
        addEyeballAnim: function(a) { a.$MH[3].scaleX.set_behavior(new bc(1, 0.975, 0.1));
            a.$MH[3].scaleY.set_behavior(new bc(1, 0.975, 0.1)) },
        getFirstObject: function(a) { return this.owner._internal_getFromParents(3, T).getObject(a) },
        getAllObjects: function(a) { return this.owner._internal_getFromParents(3, T).getObjects(a) },
        getLayer: function(a) { return this.owner._internal_getFromParents(3, T).getLayer(a) },
        __class__: xd
    });
    var Ch = function(a) { n.call(this);
        this.charName = a };
    g["nick.shmup.outcome.OutcomeCharacter"] = Ch;
    Ch.__name__ = ["nick", "shmup", "outcome", "OutcomeCharacter"];
    Ch.__super__ = n;
    Ch.prototype = m(n.prototype, {
        get_entitySlot: function() { return 39 },
        onAdded: function() { this.setTextureFade(this.owner);
            this.highlightSprite = this.setTextureHighlight(this.owner);
            this.owner.parent.addChild((new F).add(this.highlightSprite));
            this.owner.$MH[3].alpha.set__(0) },
        swap: function(a) {
            var b = this.owner.$MH[3],
                c = a.owner.$MH[3];
            this.offsetSpr(b, c);
            var d = b.texture;
            b.texture = c.texture;
            c.texture = d;
            this.offsetSpr(this.highlightSprite, a.highlightSprite);
            b = this.highlightSprite.texture;
            this.highlightSprite.texture = a.highlightSprite.texture;
            a.highlightSprite.texture = b;
            b = this.charName;
            this.charName = a.charName;
            a.charName = b
        },
        fadeOut: function(a, b) { this.owner.$MH[3].alpha.animateTo(1, a, b);
            this.highlightSprite.alpha.animateTo(0, a, b) },
        highlight: function(a, b) {
            this.owner.$MH[3].alpha.set__(0);
            this.highlightSprite.alpha.set__(1);
            this.highlightSprite.scaleX.animateTo(1, a, b);
            this.highlightSprite.scaleY.animateTo(1, a, b);
            this.highlightSprite.x.animateBy(-7, a, b);
            this.highlightSprite.y.animateBy(-12, a, b)
        },
        setTextureFade: function(a) { var b = a.getAssetsFromParents();
            a = a.$MH[3];
            a.texture = b.getTexture("characters/" + this.charName + "_smallshaded");
            a.centerAnchor() },
        setTextureHighlight: function(a) { var b = a.getAssetsFromParents();
            a = a.$MH[3];
            b = b.getTexture("characters/" + this.charName); return (new Ia(b)).setXY(a.x.$pH, a.y.$pH).setScale(a.getNaturalHeight() / b.get_height()).centerAnchor() },
        offsetSpr: function(a, b) {
            var c = a.getNaturalHeight(),
                d = b.getNaturalHeight(),
                c = c - d,
                d = a.y;
            d.set__(d.$pH + c / 2);
            d = b.y;
            d.set__(d.$pH - c / 2)
        },
        __class__: Ch
    });
    var uh = function() { this._playedGlitch = !1;
        n.call(this);
        this._secondaryActorInfo = ga.Nothing;
        this.closeProxityElapsed = 0 };
    g["nick.shmup.special.SpecialSystem"] = uh;
    uh.__name__ = ["nick", "shmup", "special", "SpecialSystem"];
    uh.__super__ = n;
    uh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 22 },
        onRemoved: function() { this._propertyBag = this._hero = this._secondaryActorInfo = this._actorManager = null },
        onStart: function() {
            for (var a = this, b = this.owner._internal_getFromParents(3,
                    T), c = b.getObjectsByType(na), d = 0; d < c.length;) { var e = c[d];++d;
                u.instance(e.$MH[1], na).isAI ? this._ai = u.instance(e.$MH[1], na) : this._hero = u.instance(e.$MH[1], na) } this._propertyBag = this.owner._internal_getFromParents(10);
            this._actorManager = Fa.getActorManagerFromParents(this.owner);
            this._secondaryActorInfo = this._actorManager.getNearest(this._hero.actorInfo, 64, null, Ga.FROM_ALL);
            b = b.owner._internal_getFromParents(10);
            this.connect2(b.changed, function(b, c) {
                "heroSpecial" == b && (100 <= c ? (a._hero.owner.$MH[25].playStopStrikeReady(!0),
                    a._ai.owner.$MH[25].playStopStrikeReady(!0), a._playedGlitch = !0) : a._playedGlitch && (a._hero.owner.$MH[25].playStopStrikeReady(!1), a._ai.owner.$MH[25].playStopStrikeReady(!1), a._playedGlitch = !1))
            })
        },
        onUpdate: function(a) {
            var b = this._secondaryActorInfo;
            switch (b[1]) {
                case 0:
                    this._secondaryActorInfo = this._actorManager.getNearest(this._hero.actorInfo, 64, null, Ga.FROM_ALL);
                    break;
                case 1:
                    var b = b[2],
                        c;
                    if (c = this.hasSpecial(aa.getSpecial(this._propertyBag)))
                        if (c = this.isClose(this._hero.actorInfo, b)) this.closeProxityElapsed +=
                            a, 1 < this.closeProxityElapsed ? (this.closeProxityElapsed = 0, a = !0) : a = !1, c = a;
                    c && this.executeSpecial(b.spawned)
            }
        },
        hasSpecial: function(a) { return 100 <= a },
        isClose: function(a, b) { if (100 > Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y))) return !0;
            this.closeProxityElapsed = 0; return !1 },
        executeSpecial: function(a) {
            var b = this,
                c = a.$MH[31],
                d = a.$MH[25];
            if (this.owner.$MH[31].enabled) {
                var e = this.owner.$MH[32];
                null == e && this.owner.add(e = new kb);
                var f = this.owner.getAssetsFromParents();
                f.getSound("sfx/special").play(1);
                u.instance(this._hero.owner.$MH[16],
                    qe).setInvuln(5);
                aa.setSpecial(this._propertyBag, 0);
                var g = q.root.$MH[10],
                    h = !0 == g.get("reachedBoss"),
                    l;
                l = null != g.get("numSquadStrike") ? g.get("numSquadStrike") + 1 : 1;
                g.set("numSquadStrike", l);
                var m;
                m = this.owner._internal_getFromParents(24);
                var n = m.speed.$pH;
                m.speed.set__(50);
                u.instance(a.$MH[1], na).showsShootAnim = !1;
                c.enabled = !1;
                c._changed = !0;
                !1;
                this.showRing(u.instance(a.$MH[1], na), !0);
                e.run(new Kb([new ab(function() {
                    d.playState(fa.SPECIAL, !1, function() {
                        null != a && null != u.instance(a.$MH[1], na) && (u.instance(a.$MH[1],
                            na).showsShootAnim = !0, m.speed.set__(n))
                    })
                }), new Vb(2.5), new ab(function() { b.owner._internal_getFromParents(23).playWhiteOut(); for (var a = b._actorManager.getAll(2), c = 0; c < a.length;) { var d = a[c];++c; var e = u.instance(d.spawned.$MH[16], pe); if (null != e)
                            if (h) { if (e.takeDamage(d, d.totalHealth * (0 != (d._flags & 32) ? 0.15 : 0.25))) e.onDeath(d) } else e.onDeath(d) } f.getSound("sfx/enemy_death").play(0.4);
                    f.getSound("sfx/shrink").play() }), new Vb(1), new ab(function() {
                    c.enabled = !0;
                    c._changed = !0;
                    !0;
                    b.showRing(u.instance(a.$MH[1],
                        na), !1)
                })]))
            }
        },
        showRing: function(a, b) { var c = a.visualRing; switch (c[1]) {
                case 1:
                    c[2].alpha.animateTo(b ? 1 : 0, 0.333, C.sineOut) } },
        __class__: uh
    });
    var Rg = function(a, b) { n.call(this);
        this._duration = a;
        this._actorInfo = b };
    g["nick.shmup.ui.Blink"] = Rg;
    Rg.__name__ = ["nick", "shmup", "ui", "Blink"];
    Rg.__super__ = n;
    Rg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 18 },
        onStart: function() { this._count = 0;
            this._wasOn = !0 },
        onRemoved: function() { this._actorInfo = null },
        onUpdate: function(a) {
            this._count += a;
            this._count > this._duration ?
                (this.owner.$MH[3].alpha.set__(0), this._actorInfo.markForRemoval = !0, this.dispose()) : (a = C.expoIn(ja.clamp(this._count / this._duration, 0, 1)), (a = 0 == Math.round(100 * a) % 2) && !this._wasOn ? (this._wasOn = !0, this.owner.$MH[3].alpha.set__(0.5), this.owner.$MH[3].alpha.animateTo(1, 0.05)) : !a && this._wasOn && (this._wasOn = !1))
        },
        __class__: Rg
    });
    var ue = function(a, b, c, d) {
        this.reverseMoviePercentage = !1;
        this.progressMax = 100;
        this.progressProperty = "progress";
        n.call(this);
        this.progressMax = d;
        this._movie = a.createSprite(b, !0);
        this.progressProperty =
            c
    };
    g["nick.shmup.ui.MovieProgressBar"] = ue;
    ue.__name__ = ["nick", "shmup", "ui", "MovieProgressBar"];
    ue.__super__ = n;
    ue.prototype = m(n.prototype, {
        get_entitySlot: function() { return 54 },
        onStart: function() { var a = this;
            this._movie.set_paused(!0);
            this.owner._internal_getFromParents(9);
            this._bag = this.owner._internal_getFromParents(9).owner.getComponentBySlot(10);
            this.connect2(this._bag.changed, function(b, c) { b == a.progressProperty && a.update(0 < c ? c / a.progressMax : 0) });
            this.owner.addChild((new F).add(this._movie));
            this.forceUpdate() },
        update: function(a) { this._movie.set_position(this._movie.symbol.duration * (this.reverseMoviePercentage ? 1 - a : a)) },
        forceUpdate: function() { var a = this._bag.get(this.progressProperty);
            this.update(0 < a ? a / this.progressMax : 0) },
        init: function(a) { this.progressMax = a;
            null != this._movie && null != this._bag && this.forceUpdate() },
        __class__: ue
    });
    var ve = function() { this.offsetSceneX = this.offsetSceneY = 0;
        H.call(this) };
    g["nick.shmup.ui.SubSceneLoader"] = ve;
    ve.__name__ = ["nick", "shmup", "ui", "SubSceneLoader"];
    ve.__super__ = H;
    ve.prototype =
        m(H.prototype, {
            onStart: function() { H.prototype.onStart.call(this);
                this._holder = new F;
                this.selectScene(0);
                this.connect1(this.backButton.$MH[3].get_pointerDown(), ha(this, this.onBackClick));
                this.connect1(this.nextButton.$MH[3].get_pointerDown(), ha(this, this.onNextClick)) },
            onBackClick: function(a) { 0 < this._currentIndex && this.selectScene(this._currentIndex - 1) },
            onNextClick: function(a) { this._currentIndex < this.scenes.length - 1 && this.selectScene(this._currentIndex + 1) },
            selectScene: function(a) {
                this._holder.dispose();
                this._currentIndex = a;
                this.currentScene = this.scenes[a];
                this.backButton.$MH[3].set_visible(0 < this._currentIndex);
                this.nextButton.$MH[3].set_visible(this._currentIndex < this.scenes.length - 1);
                var b = this.owner._internal_getFromParents(3, T).getLayer("overlay"),
                    c = this.owner.getAssetsFromParents().getScene(this.scenes[a]);
                a = c.createSprite();
                var d = c.createScript();
                this._holder.add(a);
                this._holder.add(d);
                a.setXY(this.offsetSceneX, this.offsetSceneY);
                b.addChild(this._holder);
                this._holder.yieldForStart();
                b = c.properties.get("onStarted");
                null != b && d.run(b, this._holder);
                a.disablePointer();
                b = a.getLayer("background", !1);
                null != b && b.disposeChildren()
            },
            __class__: ve
        });
    var $g = function(a) { this._hasDied = !1;
        n.call(this);
        this._actor = a };
    g["nick.shmup.ui.UIBossBar"] = $g;
    $g.__name__ = ["nick", "shmup", "ui", "UIBossBar"];
    $g.__super__ = n;
    $g.prototype = m(n.prototype, {
        get_entitySlot: function() { return 52 },
        onStart: function() {
            this._movie = this.owner.getAssetsFromParents().getLibrary("ui/progressbar").createSprite("boss_health", !0);
            this._movie.setXY(675, -100);
            this._movie.y.animateTo(65,
                1.5, C.backOut);
            this.owner.add(this._movie);
            this._movie.set_position(this._movie.symbol.duration);
            this._movie.set_paused(!0)
        },
        onUpdate: function(a) { null == this._actor || this._actor.markForRemoval || this._movie.set_position((1 - ja.clamp(this._actor.health / this._actor.totalHealth, 0, 1)) * this._movie.symbol.duration);
            null != this._actor && 0 >= this._actor.health && !this._hasDied && (this._hasDied = !0, this.registerDisposable(this.owner.getAssetsFromParents().getSound("sfx/boss_death").play())) },
        __class__: $g
    });
    var Yg =
        function(a) { var b = this;
            n.call(this);
            this._sceneSprite = a;
            this.connect2(q.root.$MH[10].changed, function(a, d) { "heroCoins" == a && b.update(d) }) };
    g["nick.shmup.ui.UICoinCounter"] = Yg;
    Yg.__name__ = ["nick", "shmup", "ui", "UICoinCounter"];
    Yg.__super__ = n;
    Yg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 49 },
        onStart: function() {
            var a = this.owner.getAssetsFromParents();
            this._text = new hb(a.getFont("fonts/roboto_black_white_dropshadow_76"), "0");
            this._text.disablePointer();
            this._text.centerAnchor();
            this._text.setXY(1065,
                32);
            this._text.setScale(0.6);
            this.owner.addChild((new F).add(this._text));
            this.forceUpdate()
        },
        update: function(a) { this._text.set_text(a + "") },
        forceUpdate: function() { var a = aa.getCoins(q.root.$MH[10]);
            this.update(a) },
        __class__: Yg
    });
    var Wg = function(a) { this._maxVal = 0;
        n.call(this) };
    g["nick.shmup.ui.UIHealthBar"] = Wg;
    Wg.__name__ = ["nick", "shmup", "ui", "UIHealthBar"];
    Wg.__super__ = n;
    Wg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 53 },
        onStart: function() {
            var a = this.owner.getAssetsFromParents().getLibrary("ui/progressbar");
            this.owner.add((new x).setXY(220, 24));
            this.owner.add(this._healthBar = new ue(a, "progress_health", "heroHealth", 100));
            this._healthBar.init(this._maxVal);
            this._healthBar.reverseMoviePercentage = !0
        },
        setMaxValue: function(a) { this._maxVal = a;
            null != this._healthBar && this._healthBar.init(a); return this },
        __class__: Wg
    });
    var Zg = function(a) { n.call(this);
        this._sceneSprite = a };
    g["nick.shmup.ui.UIPauseButton"] = Zg;
    Zg.__name__ = ["nick", "shmup", "ui", "UIPauseButton"];
    Zg.__super__ = n;
    Zg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 48 },
        onStart: function() { var a = this.owner.getAssetsFromParents();
            this._pauseBtn = new Ia(a.getTexture("ui/buttons/Pause_Btn"));
            this._pauseBtn.setXY(1316 - this._pauseBtn.getNaturalWidth() - 10, -10);
            this.connect1(this._pauseBtn.get_pointerDown(), ha(this, this.buttonDown));
            this.owner.addChild((new F).add(this._pauseBtn)) },
        buttonDown: function(a) {
            a = new zb("pause", !1);
            Fa.getSoundSystemFromParents(this.owner).setVolume(0);
            this.owner.getAssetsFromParents().getSound("sfx/click").play(1);
            this.owner.getDirectorFromParents().pushScene(a);
            null
        },
        onUpdate: function(a) {},
        __class__: Zg
    });
    var Xg = function(a) { n.call(this);
        this._sceneSprite = a };
    g["nick.shmup.ui.UISpecialBar"] = Xg;
    Xg.__name__ = ["nick", "shmup", "ui", "UISpecialBar"];
    Xg.__super__ = n;
    Xg.prototype = m(n.prototype, {
        get_entitySlot: function() { return 51 },
        onStart: function() {
            this._sceneSprite.owner._internal_getFromParents(10).set("heroSpecial", 0);
            null == this._sceneSprite && (this._sceneSprite = this.owner._internal_getFromParents(3, T));
            var a = this._sceneSprite.owner.getAssetsFromParents().getLibrary("ui/progressbar");
            this.owner.add((new x).setXY(245, 66));
            this.owner.add(new ue(a, "progress_move", "heroSpecial", 100))
        },
        __class__: Xg
    });
    var we = function() { H.call(this) };
    g["nick.shmup.util.EmptyCreatorObject"] = we;
    we.__name__ = ["nick", "shmup", "util", "EmptyCreatorObject"];
    we.__super__ = H;
    we.prototype = m(H.prototype, { __class__: we });
    var ga = g["nick.shmup.util.Maybe"] = { __ename__: ["nick", "shmup", "util", "Maybe"], __constructs__: ["Nothing", "Just"] };
    ga.Nothing = ["Nothing", 0];
    ga.Nothing.toString = l;
    ga.Nothing.__enum__ = ga;
    ga.Just = function(a) {
        a = ["Just", 1, a];
        a.__enum__ = ga;
        a.toString = l;
        return a
    };
    var yj = function() {};
    g["nick.shmup.util.MoviePlayerHelper"] = yj;
    yj.__name__ = ["nick", "shmup", "util", "MoviePlayerHelper"];
    yj.playStateThen = function(a, b, c) { if (a.movie.$pH.symbol.$mF == b) c();
        else { var d = null;
            a.play(b, !0);
            d = a.movie.get_changed().connect(function(a, b) { c();
                d.dispose() }) } };
    var wd = function() {};
    g["nick.shmup.util.ObjectSpriteHelper"] = wd;
    wd.__name__ = ["nick", "shmup", "util", "ObjectSpriteHelper"];
    wd.playStateThen = function(a, b, c) {
        if (a.state.$pH == b) return c(),
            null == wd._dummy && (wd._dummy = new Dh), wd._dummy;
        var d = null;
        a.play(b, !0);
        return d = a.state.get_changed().connect(function(a, b) { c();
            d.dispose() })
    };
    var Dh = function() {};
    g["nick.shmup.util.DummyDisposable"] = Dh;
    Dh.__name__ = ["nick", "shmup", "util", "DummyDisposable"];
    Dh.__interfaces__ = [Sa];
    Dh.prototype = { dispose: function() {}, __class__: Dh };
    var aa = function() {};
    g["nick.shmup.util.PropertyBagHelper"] = aa;
    aa.__name__ = ["nick", "shmup", "util", "PropertyBagHelper"];
    aa.getScore = function(a) {
        null == a.get("heroScore") && a.set("heroScore",
            0);
        return a.get("heroScore")
    };
    aa.addHealth = function(a, b) { a.set("heroHealth", a.get("heroHealth") + b) };
    aa.addScore = function(a, b) { var c = aa.getScore(a);
        a.set("heroScore", c + b) };
    aa.hasMultiplier = function(a, b) { a.set("hasMultipler", b) };
    aa.setHealth = function(a, b) { a.set("heroHealth", b) };
    aa.getSpecial = function(a) { null == a.get("heroSpecial") && a.set("heroSpecial", 0); return a.get("heroSpecial") };
    aa.setSpecial = function(a, b) { a.set("heroSpecial", b) };
    aa.addSpecial = function(a, b) {
        var c = aa.getSpecial(a);
        a.set("heroSpecial",
            c + b)
    };
    aa.setCoins = function(a, b) { mb.setPlayerCoins(b);
        a.set("heroCoins", b) };
    aa.getCoins = function(a) { null == a.get("heroCoins") && a.set("heroCoins", mb.getPlayerCoins()); return a.get("heroCoins") };
    aa.addCoins = function(a, b) { var c = aa.getCoins(a);
        aa.setCoins(a, c + b) };
    aa.loadLevel = function(a, b) { null == a.get(b + "_level") && a.set(b + "_level", mb.loadLevel(b)); return a.get(b + "_level") };
    aa.saveLevel = function(a, b, c) { mb.saveLevel(b, c);
        a.set(b + "_level", c) };
    var mb = function() {};
    g["nick.shmup.util.Save"] = mb;
    mb.__name__ = ["nick",
        "shmup", "util", "Save"
    ];
    mb.loadLevel = function(a) { return q.root.$MH[33].getFloat(a, 1) | 0 };
    mb.saveLevel = function(a, b) { q.root.$MH[33].setFloat(a, b) };
    mb.getPlayerCoins = function() { return q.root.$MH[33].getFloat("playerCoins", 0) | 0 };
    mb.setPlayerCoins = function(a) { q.root.$MH[33].setFloat("playerCoins", a) };
    mb.hasBeatBoss = function(a) { return q.root.$MH[33].getBool(a + "hasBeat", !1) };
    mb.setBeatBoss = function(a, b) { q.root.$MH[33].setBool(a + "hasBeat", b) };
    var ob = function() { this.duration = 0.5;
        this.transition = Db.None;
        A.call(this) };
    g["nick.stage.StageAction"] = ob;
    ob.__name__ = ["nick", "stage", "StageAction"];
    ob.$nG = function(a, b) { for (var c = [], d = 0; d < a.length;) { var e = a[d];++d;
            0 > b.indexOf(e) && c.push(e) } return c };
    ob.__super__ = A;
    ob.prototype = m(A.prototype, {
        createScene: function(a, b) { null == b && (b = !0); return new zb(a, b) },
        loadScene: function(a, b, c, d) {
            var e = this,
                f;
            f = this.script.owner._internal_getFromParents(2);
            var g = this.getDirector(),
                h = [];
            if (I.startsWith(a, "level") || I.startsWith(a, "stage")) {
                var l = q.root.$MH[10],
                    m = l.get("character1"),
                    n = l.get("character2");
                if (null == m || null == n) l.set("character1", m = "danger"), l.set("character2", n = "lisa");
                h.push("character_" + m);
                h.push("character_" + n)
            }
            var s = new xe(f, a, h);
            a = null != b ? new xe(f, b, []) : null;
            f = [];
            if (c)
                for (h = 0, l = g.scenes; h < l.length;) m = l[h], ++h, m = u.instance(m.$MH[9], zb), null != m && (f = f.concat(va.getRequiredAssetPacks(m.$mF)));
            h = g.get_topScene().firstComponent;
            if (0 < s.needsLoad.length && null != a) return null != h && h.registerDisposable(a), c && (a.needsDispose = ob.$nG(f, s.willBeUsed.concat(a.willBeUsed)), s.needsDispose = ob.$nG(a.willBeUsed,
                s.willBeUsed)), a.load().then(function(a) { a = e.createScene(b);
                a.registerDisposable(s);
                d ? g.pushScene(a) : g.unwindToScene(a);
                a.owner.yieldForStart(); var c = a.owner.$MH[10];
                null == c && a.owner.add(c = new Ob);
                c.set("progress", 0); return s.load().progress(function(a) { c.set("progress", 100 * a | 0) }) });
            null != h && h.registerDisposable(s);
            c && (s.needsDispose = ob.$nG(f, s.willBeUsed));
            var t;
            g.get_topScene();
            t = g.get_topScene().getComponentBySlot(10);
            null == t && g.get_topScene().add(t = new Ob);
            t.set("progress", 0);
            return s.load().progress(function(a) {
                t.set("progress",
                    100 * a | 0)
            })
        },
        createTransition: function() { switch (this.transition[1]) {
                case 0:
                    return null;
                case 1:
                    return new Ld(this.duration);
                case 2:
                    return new Md(this.duration) } },
        getDirector: function() { return this.script.owner._internal_getFromParents(8) },
        __class__: ob
    });
    var Eh = function() { this.disposeUnusedAssets = !0;
        this.onLoadError = this.loadingScene = null;
        ob.call(this) };
    g["nick.stage.ChangeStage"] = Eh;
    Eh.__name__ = ["nick", "stage", "ChangeStage"];
    Eh.__super__ = ob;
    Eh.prototype = m(ob.prototype, {
        $fF: function(a) {
            var b = this;
            if (null ==
                this.scene) return null;
            var c = this.getDirector();
            return this.loadScene(this.scene, this.loadingScene, this.disposeUnusedAssets, !1).then(function(a) { c.unwindToScene(b.createScene(b.scene), b.createTransition()) }).catchError(function(c) { null != b.onLoadError && null != b.script.owner && b.script.owner.emitMessageToParents(b.onLoadError, a); return (new ea).failure(c) })
        },
        __class__: Eh
    });
    var yh = function(a) {
        null == a && (a = 100);
        this._cameraStopped = !1;
        this.cameraStopped = new bb;
        this._parallax = [];
        this.speed = new X(100);
        n.call(this);
        this.speed.set__(a)
    };
    g["nick.stage.LevelMovement"] = yh;
    yh.__name__ = ["nick", "stage", "LevelMovement"];
    yh.__super__ = n;
    yh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 24 },
        onStart: function() {
            var a = this;
            this._scene = u.instance(this.owner.$MH[3], T);
            this._sceneEnd = this._scene.info.width * this._scene.info.tileWidth - this._scene.cameraWidth.$pH;
            this.owner.yieldForStart();
            var b = this.owner.getAssetsFromParents(),
                c = b.getFile("parallax/foreground.json", !1),
                d = b.getFile("parallax/background.json", !1);
            null !=
                c && (c = Vc.fromFile(b, "parallax/foreground.json", this._scene.info.width * this._scene.info.tileWidth, this._scene.info.height * this._scene.info.tileHeight), c.disablePointer(), this.owner.addChild((new F).add(c), !0), this._parallax.push(c));
            null != d && (b = Vc.fromFile(b, "parallax/background.json", this._scene.info.width * this._scene.info.tileWidth, this._scene.info.height * this._scene.info.tileHeight), b.disablePointer(), this.owner.addChild((new F).add(b), !1), this._parallax.push(b));
            var e = this.owner.$MH[14];
            this.registerDisposable(this._scene.cameraX.watch(function(b,
                c) { e.camera.set(a._scene.cameraX.$pH, a._scene.cameraY.$pH, a._scene.cameraWidth.$pH, a._scene.cameraHeight.$pH); for (var d = 0, g = a._parallax; d < g.length;) { var h = g[d];++d;
                    h.position.set__(a._scene.cameraX.$pH) } }));
            this._heroes = Ma.array(Ma.map(this._scene.getObjectsByType(na), function(a) { return u.instance(a.$MH[1], na) }))
        },
        onUpdate: function(a) {
            this.speed.update(a);
            a *= this.speed.$pH;
            if (this._scene.cameraX.$pH < this._sceneEnd) { var b = this._scene.cameraX;
                b.set__(b.$pH + a) } else this._cameraStopped || (this._cameraStopped = !0, this.cameraStopped.emit());
            a = 0;
            for (b = this._heroes.length; a < b;) { var c = a++,
                    c = this._heroes[c];
                c.actorInfo.x = this._scene.cameraX.$pH + c.stageX.$pH;
                c.actorInfo.y = c.stageY.$pH;
                c.updateSpritePosition() }
        },
        __class__: yh
    });
    var xe = function(a, b, c) { this.needsDispose = [];
        this._assets = a;
        this._name = b;
        this.willBeUsed = va.getRequiredAssetPacks(b);
        b = 0; for (var d = c.length; b < d;) { var e = b++,
                e = c[e]; - 1 == this.willBeUsed.indexOf(e) && this.willBeUsed.push(e) } this.needsLoad = this.willBeUsed.filter(function(b) { return !a.isLoaded(b) }) };
    g["nick.stage._StageAction.StageLoader"] = xe;
    xe.__name__ = ["nick", "stage", "_StageAction", "StageLoader"];
    xe.__interfaces__ = [Sa];
    xe.prototype = { load: function() { var a = this,
                b = this.needsLoad.map(function(b) { return a._assets.load(b) }); return ea.all(b) }, dispose: function() { for (var a = 0, b = this.needsDispose; a < b.length;) { var c = b[a];++a;
                this._assets.removePackByName(c) } }, __class__: xe };
    var mj = function() {};
    g["nicksdk.AntiPiracy"] = mj;
    mj.__name__ = ["nicksdk", "AntiPiracy"];
    mj.checkPiracy = function(a) {
        null == a && (a = "");
        mc.eval("nick_sdk_client.AntiPiracy.checkPiracy",
            [a])
    };
    var mc = function() { mc.eval("nick_sdk_client.SDK.initialize") };
    g["nicksdk.SDK"] = mc;
    mc.__name__ = ["nicksdk", "SDK"];
    mc.eval = function(a, b) { null == b && (b = []); for (var c = null, d = null, e = 0, f = a.split("."); e < f.length;) { var g = f[e];++e;
            c = d;
            d = null == c ? P.field(window, g) : P.field(c, g) } e = null;
        null != d ? e = d.apply(c, b) : null; return e };
    mc.bind = function(a, b) { for (var c = null, d = null, e = "", f = 0, g = a.split("."); f < g.length;) { var h = g[f];++f;
            c = d;
            e = h;
            d = null == c ? P.field(window, h) : P.field(c, h) } null == c ? null : c[e] = b };
    mc.prototype = { __class__: mc };
    var Gc = function() {};
    g["nicksdk.event.GameEventEmitter"] = Gc;
    Gc.__name__ = ["nicksdk", "event", "GameEventEmitter"];
    Gc.sendGameEvent = function(a, b) { Gc.callExternal(a, b) };
    Gc.callExternal = function(a, b, c) { mc.eval("nick_sdk_client.GameEventEmitter.sendGameEvent", [a, b]) };
    var Fh = function() {};
    g["nicksdk.event.GameEventListener"] = Fh;
    Fh.__name__ = ["nicksdk", "event", "GameEventListener"];
    Fh.__properties__ = { set_onSuspendToggle: "set_onSuspendToggle" };
    Fh.set_onSuspendToggle = function(a) {
        Fh.onSuspendToggle = a;
        mc.bind("nick_sdk_client.GameEventListener.onSuspendToggle",
            a);
        return a
    };
    var gc = function() {};
    g["nicksdk.jsembed.JSEmbedProxy"] = gc;
    gc.__name__ = ["nicksdk", "jsembed", "JSEmbedProxy"];
    gc.__properties__ = { get_base: "get_base" };
    gc.get_base = function() { return gc.callJSEmbedMethod("baseUrl()") };
    gc.callJSEmbedMethod = function(a) { try { var b = gc.eval("eval", ["jsembed." + a]); if (null != b) return b } catch (c) { c instanceof s && (c = c.val) } return "" };
    gc.eval = function(a, b) { null == b && (b = []); for (var c = null, d = 0, e = a.split("."); d < e.length;) c = e[d], ++d, c = P.field(window, c); return c.apply(null, b) };
    var yb = function() {};
    g["s2.client.CanadaTracker"] = yb;
    yb.__name__ = ["s2", "client", "CanadaTracker"];
    yb.init = function() { if (!yb._init) { yb._init = !0;
            yb._externalSupported = !1; var a = Na.get_deltaBootstrap()._config.elementsNamed("config").next().elementsNamed("tracking").next(),
                b = null != a && "true" == a.get("enabled").toString().toLowerCase();
            yb._gameName = a.elementsNamed("gameName").next().firstChild().toString();
            q.$GI.getExternal().get_supported() && b && (yb._externalSupported = null != window.trackFlashEvent) } };
    yb.track =
        function(a) { yb.init();
            yb._externalSupported && q.$GI.getExternal().call("trackFlashEvent", [yb._gameName, a, "true"]) };
    var Gh = function() { A.call(this) };
    g["s2.client.CanadaTrackerAction"] = Gh;
    Gh.__name__ = ["s2", "client", "CanadaTrackerAction"];
    Gh.__super__ = A;
    Gh.prototype = m(A.prototype, { $eF: function(a) { yb.track(this.eventName) }, __class__: Gh });
    var jj = function() {};
    g["s2.client.ClientBootstrap"] = jj;
    jj.__name__ = ["s2", "client", "ClientBootstrap"];
    jj.prototype = { __class__: jj };
    var yd = function() {
        this.complete = new bb;
        this._options = new O;
        y.get_lowMemory()
    };
    g["s2.client.CommonBootstrap"] = yd;
    yd.__name__ = ["s2", "client", "CommonBootstrap"];
    yd.__interfaces__ = [jj];
    yd.prototype = { start: function() { null }, getOptions: function() { return this._options }, __class__: yd };
    var Na = function() {};
    g["s2.client.Config"] = Na;
    Na.__name__ = ["s2", "client", "Config"];
    Na.__properties__ = { get_deltaBootstrap: "get_deltaBootstrap", get_options: "get_options" };
    Na.init = function(a, b) {
        null == Na.initialized && (Na.initialized = new ya(!1));
        Na.initialized.$pH || (a.complete.connect(function() {
            Na.initialized.set__(!0);
            null != b && b()
        }).once(), Na._bootstrap = a, a.start())
    };
    Na.get_options = function() { return Na._bootstrap.getOptions() };
    Na.get_deltaBootstrap = function() { return Z.__cast(Na._bootstrap, zd) };
    var Wc = function() { this._gameName = this._gameProperty = "";
        yd.call(this);
        this.setupBasePaths() };
    g["s2.client.NickBootstrap"] = Wc;
    Wc.__name__ = ["s2", "client", "NickBootstrap"];
    Wc.__super__ = yd;
    Wc.prototype = m(yd.prototype, {
        start: function() {
            var a = new db,
                b = gc.get_base() + "xml/config.xml";
            a.add("xml/config.xml", b);
            q.$GI.loadAssetPack(a).then(ha(this,
                this.onConfigLoaded))
        },
        onConfigLoaded: function(a) {
            a = a.getFile("xml/config.xml");
            this._config = v.parse(a.toString());
            null != this._parser && (this._parser(this._config), this._parser = null);
            a.dispose();
            a = this._config.elementsNamed("config").next().elementsNamed("tracking").next();
            var b = null != a && "true" == a.get("enabled").toString().toLowerCase();
            this._gameName = a.elementsNamed("gameName").next().firstChild().toString();
            null != a.elementsNamed("gameProperty").next() ? this._gameProperty = a.elementsNamed("gameProperty").next().firstChild().toString() :
                this._gameProperty = "";
            this.setupTracking(b);
            a = a.elementsNamed("locale").next();
            if (null != a) { if (a.nodeType != v.Document && a.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + a.nodeType);
                this._localizationRegion = a.children[0].toString() } else this._localizationRegion = null;
            a = null == this._localizationRegion || "" == this._localizationRegion ? "" : "_" + this._localizationRegion;
            R.init(ha(this, this.onLocalizationLoaded), new Hh, "strings/strings" + a + ".xml")
        },
        setupTracking: function(a) {
            var b = !1;
            a && q.$GI.getExternal().get_supported() && (b = null != window.trackFlashEvent);
            this._externalSupported = b
        },
        getOptions: function() {
            if (this._optionsSet) return this._options;
            for (var a = this._config.elementsNamed("config").next().elementsNamed("options").next().elements(); a.hasNext();) {
                var b = a.next();
                if (b.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + b.nodeType);
                if (b.elements().hasNext()) {
                    var c = this.buildNested(b, {});
                    if (b.nodeType != v.Element) throw new s("Bad node type, expected Element but found " +
                        b.nodeType);
                    this._options.set(b.nodeName, c)
                } else { if (b.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + b.nodeType); var c = b.nodeName,
                        d = this.guessType(function(a) { if (b.nodeType != v.Document && b.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + b.nodeType); return b.children[0] }(this).get_nodeValue());
                    this._options.set(c, d) }
            }
            this._optionsSet = !0;
            return this._options
        },
        buildNested: function(a, b) {
            for (var c = {}, d = a.elements(); d.hasNext();) {
                var e =
                    d.next();
                P.hasField(c, function(a) { if (e.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + e.nodeType); return e.nodeName }(this)) ? P.setField(c, function(a) { if (e.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + e.nodeType); return e.nodeName }(this), P.getProperty(c, function(a) { if (e.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + e.nodeType); return e.nodeName }(this)) + 1) : P.setField(c, function(a) {
                    if (e.nodeType != v.Element) throw new s("Bad node type, expected Element but found " +
                        e.nodeType);
                    return e.nodeName
                }(this), 1)
            }
            for (var d = P.fields(c), f = 0, g = d.length; f < g;) {
                var h = f++,
                    l = P.getProperty(c, d[h]),
                    m = a.elementsNamed(d[h]);
                if (1 < l)
                    for (l = [], b[d[h]] = l; m.hasNext();) { var n = m.next();
                        n.elements().hasNext() ? l.push(this.buildNested(n, {})) : l.push(this.guessType(function(a) { if (n.nodeType != v.Document && n.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + n.nodeType); return n.children[0] }(this).get_nodeValue())) } else
                        for (; m.hasNext();) {
                            var q = m.next();
                            q.elements().hasNext() ?
                                (h = this.buildNested(q, {}), P.setField(b, function(a) { if (q.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + q.nodeType); return q.nodeName }(this), h)) : P.setField(b, function(a) { if (q.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + q.nodeType); return q.nodeName }(this), this.guessType(function(a) { if (q.nodeType != v.Document && q.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " + q.nodeType); return q.children[0] }(this).get_nodeValue()))
                        }
            }
            return b
        },
        guessType: function(a) { switch (a.toLowerCase()) {
                case "true":
                    return !0;
                case "false":
                    return !1 } var b = parseFloat(a); return isNaN(b) ? a : b },
        onLocalizationLoaded: function() { this.complete.emit() },
        setupBasePaths: function() {
            var a;
            a = q.$GI.getExternal().get_supported() ? gc.get_base() : null;
            var b = new Ra("^http(s)?://", "i");
            null != a && 0 < a.length && (b.match(a) ? (b = window.location.href, b = b.split("/"), (null == b[b.length - 1] || -1 < b[b.length - 1].indexOf(".")) && b.pop(), b = b.join("/"), b = Xc.absoluteToRelative(b, a), null != b ? R.relativeBase =
                b : R.externalBase = a) : R.relativeBase = a)
        },
        __class__: Wc
    });
    var w = g["s2.client.DeviceName"] = { __ename__: ["s2", "client", "DeviceName"], __constructs__: "NICKWEB_DESKTOP NICKWEB_MOBILE NICKWEB_TABLET IOS IOS_MOBILEAPP IOS_MOBILE IOS_TABLET ANDROID ANDROID_MOBILEAPP ANDROID_MOBILE ANDROID_TABLET ANDROID_CONSOLE WINDOWS_MOBILE WINDOWS_TABLET BLACKBERRY_MOBILE BLACKBERRY_TABLET FACEBOOK WEB PC_CLIENT MAC_CLIENT PS3 PS4 PSVITA XBOX360 XBOXONE PIRACY_UNKNOWN UNKNOWN".split(" ") };
    w.NICKWEB_DESKTOP = ["NICKWEB_DESKTOP",
        0
    ];
    w.NICKWEB_DESKTOP.toString = l;
    w.NICKWEB_DESKTOP.__enum__ = w;
    w.NICKWEB_MOBILE = ["NICKWEB_MOBILE", 1];
    w.NICKWEB_MOBILE.toString = l;
    w.NICKWEB_MOBILE.__enum__ = w;
    w.NICKWEB_TABLET = ["NICKWEB_TABLET", 2];
    w.NICKWEB_TABLET.toString = l;
    w.NICKWEB_TABLET.__enum__ = w;
    w.IOS = ["IOS", 3];
    w.IOS.toString = l;
    w.IOS.__enum__ = w;
    w.IOS_MOBILEAPP = ["IOS_MOBILEAPP", 4];
    w.IOS_MOBILEAPP.toString = l;
    w.IOS_MOBILEAPP.__enum__ = w;
    w.IOS_MOBILE = ["IOS_MOBILE", 5];
    w.IOS_MOBILE.toString = l;
    w.IOS_MOBILE.__enum__ = w;
    w.IOS_TABLET = ["IOS_TABLET", 6];
    w.IOS_TABLET.toString =
        l;
    w.IOS_TABLET.__enum__ = w;
    w.ANDROID = ["ANDROID", 7];
    w.ANDROID.toString = l;
    w.ANDROID.__enum__ = w;
    w.ANDROID_MOBILEAPP = ["ANDROID_MOBILEAPP", 8];
    w.ANDROID_MOBILEAPP.toString = l;
    w.ANDROID_MOBILEAPP.__enum__ = w;
    w.ANDROID_MOBILE = ["ANDROID_MOBILE", 9];
    w.ANDROID_MOBILE.toString = l;
    w.ANDROID_MOBILE.__enum__ = w;
    w.ANDROID_TABLET = ["ANDROID_TABLET", 10];
    w.ANDROID_TABLET.toString = l;
    w.ANDROID_TABLET.__enum__ = w;
    w.ANDROID_CONSOLE = ["ANDROID_CONSOLE", 11];
    w.ANDROID_CONSOLE.toString = l;
    w.ANDROID_CONSOLE.__enum__ = w;
    w.WINDOWS_MOBILE = ["WINDOWS_MOBILE", 12];
    w.WINDOWS_MOBILE.toString = l;
    w.WINDOWS_MOBILE.__enum__ = w;
    w.WINDOWS_TABLET = ["WINDOWS_TABLET", 13];
    w.WINDOWS_TABLET.toString = l;
    w.WINDOWS_TABLET.__enum__ = w;
    w.BLACKBERRY_MOBILE = ["BLACKBERRY_MOBILE", 14];
    w.BLACKBERRY_MOBILE.toString = l;
    w.BLACKBERRY_MOBILE.__enum__ = w;
    w.BLACKBERRY_TABLET = ["BLACKBERRY_TABLET", 15];
    w.BLACKBERRY_TABLET.toString = l;
    w.BLACKBERRY_TABLET.__enum__ = w;
    w.FACEBOOK = ["FACEBOOK", 16];
    w.FACEBOOK.toString = l;
    w.FACEBOOK.__enum__ = w;
    w.WEB = ["WEB", 17];
    w.WEB.toString = l;
    w.WEB.__enum__ =
        w;
    w.PC_CLIENT = ["PC_CLIENT", 18];
    w.PC_CLIENT.toString = l;
    w.PC_CLIENT.__enum__ = w;
    w.MAC_CLIENT = ["MAC_CLIENT", 19];
    w.MAC_CLIENT.toString = l;
    w.MAC_CLIENT.__enum__ = w;
    w.PS3 = ["PS3", 20];
    w.PS3.toString = l;
    w.PS3.__enum__ = w;
    w.PS4 = ["PS4", 21];
    w.PS4.toString = l;
    w.PS4.__enum__ = w;
    w.PSVITA = ["PSVITA", 22];
    w.PSVITA.toString = l;
    w.PSVITA.__enum__ = w;
    w.XBOX360 = ["XBOX360", 23];
    w.XBOX360.toString = l;
    w.XBOX360.__enum__ = w;
    w.XBOXONE = ["XBOXONE", 24];
    w.XBOXONE.toString = l;
    w.XBOXONE.__enum__ = w;
    w.PIRACY_UNKNOWN = ["PIRACY_UNKNOWN", 25];
    w.PIRACY_UNKNOWN.toString =
        l;
    w.PIRACY_UNKNOWN.__enum__ = w;
    w.UNKNOWN = ["UNKNOWN", 26];
    w.UNKNOWN.toString = l;
    w.UNKNOWN.__enum__ = w;
    var oa = g["s2.client.Platform"] = { __ename__: ["s2", "client", "Platform"], __constructs__: "NICKWEB_DESKTOP NICKWEB_MOBILE NICKWEB_TABLET IOS_APP ANDROID_APP UNKNOWN".split(" ") };
    oa.NICKWEB_DESKTOP = ["NICKWEB_DESKTOP", 0];
    oa.NICKWEB_DESKTOP.toString = l;
    oa.NICKWEB_DESKTOP.__enum__ = oa;
    oa.NICKWEB_MOBILE = ["NICKWEB_MOBILE", 1];
    oa.NICKWEB_MOBILE.toString = l;
    oa.NICKWEB_MOBILE.__enum__ = oa;
    oa.NICKWEB_TABLET = ["NICKWEB_TABLET",
        2
    ];
    oa.NICKWEB_TABLET.toString = l;
    oa.NICKWEB_TABLET.__enum__ = oa;
    oa.IOS_APP = ["IOS_APP", 3];
    oa.IOS_APP.toString = l;
    oa.IOS_APP.__enum__ = oa;
    oa.ANDROID_APP = ["ANDROID_APP", 4];
    oa.ANDROID_APP.toString = l;
    oa.ANDROID_APP.__enum__ = oa;
    oa.UNKNOWN = ["UNKNOWN", 5];
    oa.UNKNOWN.toString = l;
    oa.UNKNOWN.__enum__ = oa;
    var ca = g["s2.client.DeviceType"] = { __ename__: ["s2", "client", "DeviceType"], __constructs__: "MOBILE_PHONE TABLET PC CONSOLE TV HANDHELD UNKNOWN".split(" ") };
    ca.MOBILE_PHONE = ["MOBILE_PHONE", 0];
    ca.MOBILE_PHONE.toString =
        l;
    ca.MOBILE_PHONE.__enum__ = ca;
    ca.TABLET = ["TABLET", 1];
    ca.TABLET.toString = l;
    ca.TABLET.__enum__ = ca;
    ca.PC = ["PC", 2];
    ca.PC.toString = l;
    ca.PC.__enum__ = ca;
    ca.CONSOLE = ["CONSOLE", 3];
    ca.CONSOLE.toString = l;
    ca.CONSOLE.__enum__ = ca;
    ca.TV = ["TV", 4];
    ca.TV.toString = l;
    ca.TV.__enum__ = ca;
    ca.HANDHELD = ["HANDHELD", 5];
    ca.HANDHELD.toString = l;
    ca.HANDHELD.__enum__ = ca;
    ca.UNKNOWN = ["UNKNOWN", 6];
    ca.UNKNOWN.toString = l;
    ca.UNKNOWN.__enum__ = ca;
    var V = g["s2.client.OperatingSystem"] = { __ename__: ["s2", "client", "OperatingSystem"], __constructs__: "WINDOWS OSX LINUX IOS ANDROID FIREOS BLACKBERRY UNKNOWN".split(" ") };
    V.WINDOWS = ["WINDOWS", 0];
    V.WINDOWS.toString = l;
    V.WINDOWS.__enum__ = V;
    V.OSX = ["OSX", 1];
    V.OSX.toString = l;
    V.OSX.__enum__ = V;
    V.LINUX = ["LINUX", 2];
    V.LINUX.toString = l;
    V.LINUX.__enum__ = V;
    V.IOS = ["IOS", 3];
    V.IOS.toString = l;
    V.IOS.__enum__ = V;
    V.ANDROID = ["ANDROID", 4];
    V.ANDROID.toString = l;
    V.ANDROID.__enum__ = V;
    V.FIREOS = ["FIREOS", 5];
    V.FIREOS.toString = l;
    V.FIREOS.__enum__ = V;
    V.BLACKBERRY = ["BLACKBERRY", 6];
    V.BLACKBERRY.toString = l;
    V.BLACKBERRY.__enum__ = V;
    V.UNKNOWN = ["UNKNOWN", 7];
    V.UNKNOWN.toString = l;
    V.UNKNOWN.__enum__ = V;
    var ba =
        g["s2.client.BrowserName"] = { __ename__: ["s2", "client", "BrowserName"], __constructs__: "IOS_MOBILEAPP ANDROID_MOBILEAPP SAFARI CHROME SILK FIREFOX INTERNET_EXPLORER UNKNOWN".split(" ") };
    ba.IOS_MOBILEAPP = ["IOS_MOBILEAPP", 0];
    ba.IOS_MOBILEAPP.toString = l;
    ba.IOS_MOBILEAPP.__enum__ = ba;
    ba.ANDROID_MOBILEAPP = ["ANDROID_MOBILEAPP", 1];
    ba.ANDROID_MOBILEAPP.toString = l;
    ba.ANDROID_MOBILEAPP.__enum__ = ba;
    ba.SAFARI = ["SAFARI", 2];
    ba.SAFARI.toString = l;
    ba.SAFARI.__enum__ = ba;
    ba.CHROME = ["CHROME", 3];
    ba.CHROME.toString = l;
    ba.CHROME.__enum__ =
        ba;
    ba.SILK = ["SILK", 4];
    ba.SILK.toString = l;
    ba.SILK.__enum__ = ba;
    ba.FIREFOX = ["FIREFOX", 5];
    ba.FIREFOX.toString = l;
    ba.FIREFOX.__enum__ = ba;
    ba.INTERNET_EXPLORER = ["INTERNET_EXPLORER", 6];
    ba.INTERNET_EXPLORER.toString = l;
    ba.INTERNET_EXPLORER.__enum__ = ba;
    ba.UNKNOWN = ["UNKNOWN", 7];
    ba.UNKNOWN.toString = l;
    ba.UNKNOWN.__enum__ = ba;
    var zd = function(a) {
        this._validHostingURLs = [];
        var b = this;
        Wc.call(this);
        this._url = qa.fromBrowser().url;
        this._domain = window.location.host;
        this._environmentKey = a;
        this._sessionID = Ih.createGUID();
        this._deviceType = this.getDeviceType();
        this._os = this.getOS();
        this._browserName = this.getBrowserName();
        this._deviceName = this.getDeviceName();
        q.$GI.getLocalStorage().get("delta_uid", null).then(function(a) { b._userID = a })
    };
    g["s2.client.NickDeltaBootstrap"] = zd;
    zd.__name__ = ["s2", "client", "NickDeltaBootstrap"];
    zd.__super__ = Wc;
    zd.prototype = m(Wc.prototype, {
        onConfigLoaded: function(a) {
            var b = this;
            Wc.prototype.onConfigLoaded.call(this, a);
            for (a = 0; 2 > a;) {
                var c = a++;
                this._validHostingURLs.push(Na.get_options().get("hostingURL" +
                    (c + 1)))
            }
            this._platform = this.getPlatform();
            null == this._userID ? (this._userID = Ih.createGUID(), this.trackClientDevice(), q.$GI.getLocalStorage().set("delta_uid", Ih.createGUID()).then(function(a) { b.track(["newPlayer"]);
                b.track(["gameStarted"]) })) : (this.trackClientDevice(), this.track(["gameStarted"]))
        },
        getDeviceType: function() {
            return y.get_tablet() ? ca.TABLET : y.get_mobile() ? ca.MOBILE_PHONE : y.get_desktop() ? ca.PC : this.test("HANDHELD", !0) ? ca.HANDHELD : this.test("CONSOLE", !0) ? ca.CONSOLE : this.test("TV", !0) ? ca.TV :
                ca.UNKNOWN
        },
        getOS: function() { return this.test("Silk") || this.test("Android", !1) && this.test(" KF") ? V.FIREOS : this.test("Android", !1) ? V.ANDROID : this.test("Windows") ? V.WINDOWS : this.test("iPad") || this.test("iPod") || this.test("iPhone") ? V.IOS : this.test("Macintosh") ? V.OSX : this.test("Linux") ? V.LINUX : this.test("BlackBerry") ? V.BLACKBERRY : V.UNKNOWN },
        getBrowserName: function() {
            return this._deviceName == u.string(w.IOS_MOBILEAPP) ? ba.IOS_MOBILEAPP : this._deviceName == u.string(w.ANDROID_MOBILEAPP) ? ba.ANDROID_MOBILEAPP :
                this.test("Silk", !1) ? ba.SILK : this.test("Chrome", !1) || y.get_iOSChrome() ? ba.CHROME : this.test("Safari", !1) ? ba.SAFARI : this.test("Firefox", !1) ? ba.FIREFOX : this.test("Trident", !1) ? ba.INTERNET_EXPLORER : ba.UNKNOWN
        },
        getPlatform: function() {
            var a = [];
            a.push(ye.decrypt("LipzZXZlbjIuY29t"));
            a.push(ye.decrypt("LipzZXZlbjIubmV0"));
            a.push(ye.decrypt("bG9jYWxob3N0Kg=="));
            a.push(ye.decrypt("MTkyLjE2OC4q"));
            if (y.get_nickApp()) return y.get_android() ? oa.ANDROID_APP : y.get_iOS() ? oa.IOS_APP : oa.UNKNOWN;
            switch (this._deviceType[1]) {
                case 1:
                    return oa.NICKWEB_TABLET;
                case 0:
                    return oa.NICKWEB_MOBILE;
                case 2:
                    return oa.NICKWEB_DESKTOP;
                default:
                    return oa.UNKNOWN
            }
        },
        getDeviceName: function() {
            var a = this,
                b = function() { var b = "_"; if (y.get_nickApp()) b += "MOBILEAPP";
                    else switch (a._deviceType[1]) {
                        case 1:
                            b += u.string(ca.TABLET); break;
                        case 0:
                            b += "MOBILE"; break;
                        case 3:
                            b += u.string(ca.CONSOLE) }
                    return b };
            return this._os == V.IOS || this._os == V.ANDROID || this._os == V.BLACKBERRY || this._os == V.WINDOWS && this._deviceType != ca.PC ? u.string(this._os) + b() : this._os == V.FIREOS ? "ANDROID" + b() : this._os == V.WINDOWS ?
                "PC_CLIENT" : this._os == V.OSX ? "MAC_CLIENT" : "WEB"
        },
        track: function(a) { var b = this.getJson(),
                c = P.getProperty(b, "eventParams");
            P.setField(b, "eventName", a.shift()); for (var d = 0; d < a.length;) P.setField(c, a[d], a[d + 1]), d += 2;
            this.sendRequest(b) },
        trackUIInteraction: function(a, b, c) { a = ["uiInteraction", "UIName", a, "UILocation", b, "UIAction", a, "UIType", b]; if (null != c)
                for (b = c.keys(); b.hasNext();) { var d = b.next();
                    a.push(d);
                    a.push(null != Ea[d] ? c.getReserved(d) : c.h[d]) } this.track(a) },
        getJson: function() {
            return {
                userID: this._userID,
                sessionID: this._sessionID,
                eventTimestamp: Nb.format(new Date, "%Y-%m-%d %H:%M:%S"),
                eventParams: { platform: u.string(this._platform) + "", sdkVersion: "S2_2Dkit_DeltaDNA_SDK_v2.1", clientVersion: "Build Date: " + Hc.buildDate }
            }
        },
        test: function(a, b) { null == b && (b = !0); return y.test(a, b) },
        trackClientDevice: function() {
            this.track(["clientDevice", "browserName", u.string(this._browserName), "operatingSystem", u.string(this._os), "deviceType", u.string(this._deviceType), "deviceName", this._deviceName, "operatingSystemVersion",
                y.get_userAgent()
            ])
        },
        sendRequest: function(a) { if (null == this._config) throw new s("Config must be loaded first."); if (this._trackingEnabled) { var b = new ni("#" + this._environmentKey);
                a = JSON.stringify(a, null, " ");
                b.setHeader("Content-type", "application/json");
                b.setPostData(a);
                b.onData = function(a) {};
                b.onStatus = function(a) {};
                b.onError = function(a) {};
                b.request(!0) } },
        setupTracking: function(a) { this._trackingEnabled = a;
            this._externalSupported = !0 },
        __class__: zd
    });
    var Fe =
        function() { n.call(this);
            this.sdk = new mc;
            Fh.set_onSuspendToggle(function(a) { q.root.add(new Af(a ? 0 : 1)) }) };
    g["s2.client.NickSDKComponent"] = Fe;
    Fe.__name__ = ["s2", "client", "NickSDKComponent"];
    Fe.__super__ = n;
    Fe.prototype = m(n.prototype, { get_entitySlot: function() { return 45 }, __class__: Fe });
    var ze = function() { H.call(this) };
    g["s2.client.PreloaderNickEventObject"] = ze;
    ze.__name__ = ["s2", "client", "PreloaderNickEventObject"];
    ze.__super__ = H;
    ze.prototype = m(H.prototype, {
        onStart: function() {
            H.prototype.onStart.call(this);
            Gc.sendGameEvent("onLoadingStart");
            this._handle = this.owner._internal_getFromParents(10).changed.connect(ha(this, this.onLoadingProgress));
            this.registerDisposable(this._handle)
        },
        onLoadingProgress: function(a, b) { "progress" == a && (0 < b && 100 > b ? Gc.sendGameEvent("getLoadingProgress", b / 100) : 100 == b && (Gc.sendGameEvent("onLoadingEnd"), null != this._handle && this._handle.dispose())) },
        __class__: ze
    });
    var Jh = function() { this.name = this.location = "";
        A.call(this) };
    g["s2.client.SendDeltaDNAEvent"] = Jh;
    Jh.__name__ = ["s2", "client",
        "SendDeltaDNAEvent"
    ];
    Jh.__super__ = A;
    Jh.prototype = m(A.prototype, { $eF: function(a) { Na.get_deltaBootstrap().trackUIInteraction(this.name, this.location) }, __class__: Jh });
    var Kh = function() { this.triggerOnDestroy = !1;
        this.event = $.ON_LOADING_START;
        A.call(this) };
    g["s2.client.SendNickelodeonEvent"] = Kh;
    Kh.__name__ = ["s2", "client", "SendNickelodeonEvent"];
    Kh.__super__ = A;
    Kh.prototype = m(A.prototype, {
        $eF: function(a) {
            var b = null;
            if (null != this.event) switch (this.event[1]) {
                case 0:
                    b = "onLoadingStart";
                    break;
                case 1:
                    b = "onLoadingEnd";
                    break;
                case 2:
                    b = "onTitleScreenStart";
                    break;
                case 3:
                    b = "onTitleScreenEnd";
                    break;
                case 4:
                    b = "onResume";
                    break;
                case 5:
                    b = "onPause";
                    break;
                case 6:
                    b = "onLevelStart";
                    break;
                case 7:
                    b = "onLevelComplete";
                    break;
                case 8:
                    b = "onGameOver";
                    break;
                case 9:
                    b = "playMidRollAd"
            }
            this.triggerOnDestroy ? a.add(new Lh(b)) : Gc.sendGameEvent(b)
        },
        __class__: Kh
    });
    var Lh = function(a) { n.call(this);
        this._event = a };
    g["s2.client.TriggerEventOnDestroy"] = Lh;
    Lh.__name__ = ["s2", "client", "TriggerEventOnDestroy"];
    Lh.__super__ = n;
    Lh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 40 },
        dispose: function() { Gc.sendGameEvent(this._event);
            n.prototype.dispose.call(this) },
        __class__: Lh
    });
    var $ = g["s2.client.NickEventName"] = { __ename__: ["s2", "client", "NickEventName"], __constructs__: "ON_LOADING_START ON_LOADING_END ON_TITLE_SCREEN_START ON_TITLE_SCREEN_END ON_RESUME ON_PAUSE ON_LEVEL_START ON_LEVEL_COMPLETE ON_GAME_OVER PLAY_MIDROLL_AD".split(" ") };
    $.ON_LOADING_START = ["ON_LOADING_START", 0];
    $.ON_LOADING_START.toString = l;
    $.ON_LOADING_START.__enum__ = $;
    $.ON_LOADING_END = ["ON_LOADING_END", 1];
    $.ON_LOADING_END.toString =
        l;
    $.ON_LOADING_END.__enum__ = $;
    $.ON_TITLE_SCREEN_START = ["ON_TITLE_SCREEN_START", 2];
    $.ON_TITLE_SCREEN_START.toString = l;
    $.ON_TITLE_SCREEN_START.__enum__ = $;
    $.ON_TITLE_SCREEN_END = ["ON_TITLE_SCREEN_END", 3];
    $.ON_TITLE_SCREEN_END.toString = l;
    $.ON_TITLE_SCREEN_END.__enum__ = $;
    $.ON_RESUME = ["ON_RESUME", 4];
    $.ON_RESUME.toString = l;
    $.ON_RESUME.__enum__ = $;
    $.ON_PAUSE = ["ON_PAUSE", 5];
    $.ON_PAUSE.toString = l;
    $.ON_PAUSE.__enum__ = $;
    $.ON_LEVEL_START = ["ON_LEVEL_START", 6];
    $.ON_LEVEL_START.toString = l;
    $.ON_LEVEL_START.__enum__ =
        $;
    $.ON_LEVEL_COMPLETE = ["ON_LEVEL_COMPLETE", 7];
    $.ON_LEVEL_COMPLETE.toString = l;
    $.ON_LEVEL_COMPLETE.__enum__ = $;
    $.ON_GAME_OVER = ["ON_GAME_OVER", 8];
    $.ON_GAME_OVER.toString = l;
    $.ON_GAME_OVER.__enum__ = $;
    $.PLAY_MIDROLL_AD = ["PLAY_MIDROLL_AD", 9];
    $.PLAY_MIDROLL_AD.toString = l;
    $.PLAY_MIDROLL_AD.__enum__ = $;
    var vh = function() {
        this.enabled = !0;
        this.valueX = this.valueY = this._stageX = this._stageY = 0;
        this.maxY = 768;
        this.minY = 130;
        this.maxX = 1316;
        this.minX = 0;
        n.call(this);
        this.changed = new Tb;
        this.pointerDown = new bb;
        this.keyDown =
            new Tb;
        this._start = new ka
    };
    g["s2.controls.ClickDragPad"] = vh;
    vh.__name__ = ["s2", "controls", "ClickDragPad"];
    vh.__super__ = n;
    vh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 28 },
        onStart: function() { this.connect1(q.$GI.$VH.down, ha(this, this.onPointerDown));
            this.connect1(q.$GI.$VH.up, ha(this, this.onPointerUp)) },
        init: function(a, b) { this._stageX = a;
            this._stageY = b },
        onPointerDown: function(a) {
            if (this.enabled && null != this.owner && null != this.owner._internal_getFromParents(3, T)) {
                var b = this.owner._internal_getFromParents(3,
                        T).viewToLocal(a.viewX, a.viewY),
                    c = b.x,
                    b = b.y;
                b > this.minY && b < this.maxY && c > this.minX && c < this.maxX && null == this._touchPoint && (this._start.set(c, b), this._touchPoint = a, this.pointerDown.emit())
            }
        },
        onPointerUp: function(a) { this.enabled && null != this._touchPoint && a.id == this._touchPoint.id && (this._touchPoint = null) },
        onUpdate: function(a) {
            if (this.enabled && (a = this.updateKeyDown(), null != this._touchPoint)) {
                var b = this.owner._internal_getFromParents(3, T).viewToLocal(this._touchPoint.viewX, this._touchPoint.viewY),
                    c = b.x,
                    b = b.y;
                a || this._Position(c - this._start.x, b - this._start.y)
            }
        },
        onRemoved: function() { this._touchPoint = null },
        _Position: function(a, b) { this.enabled && (this.valueX = this._stageX + a, this.valueY = this._stageY + b, this.changed.emit(this.valueX, this.valueY)) },
        updateKeyDown: function() {
            if (!this.enabled) return !1;
            var a = q.$GI.getKeyboard().isDown(h.Left) || q.$GI.getKeyboard().isDown(h.A),
                b = q.$GI.getKeyboard().isDown(h.Right) || q.$GI.getKeyboard().isDown(h.D),
                c = q.$GI.getKeyboard().isDown(h.Up) || q.$GI.getKeyboard().isDown(h.W),
                d = q.$GI.getKeyboard().isDown(h.Down) || q.$GI.getKeyboard().isDown(h.S);
            return a || c || b || d ? (this.keyDown.emit(a ? -1 : b ? 1 : 0, c ? -1 : d ? 1 : 0), !0) : !1
        },
        __class__: vh
    });
    var Mh = function() { this.nAvailSpace = 50;
        this.valueX = this.valueY = 0;
        this.maxY = 768;
        this.minY = 0;
        this.maxX = 1316;
        this.minX = 0;
        n.call(this);
        this.changed = new Tb;
        this._start = new ka;
        this.connect1(q.$GI.$VH.down, ha(this, this.onPointerDown));
        this.connect1(q.$GI.$VH.up, ha(this, this.onPointerUp)) };
    g["s2.controls.DPad"] = Mh;
    Mh.__name__ = ["s2", "controls", "DPad"];
    Mh.__super__ =
        n;
    Mh.prototype = m(n.prototype, {
        get_entitySlot: function() { return 41 },
        onStart: function() {},
        onPointerDown: function(a) { var b = this.owner._internal_getFromParents(3, T).viewToLocal(a.viewX, a.viewY),
                c = b.x,
                b = b.y;
            b > this.minY && b < this.maxY && c > this.minX && c < this.maxX && null == this._touchPoint && (this._start.set(c, b), this._touchPoint = a) },
        onPointerUp: function(a) { null != this._touchPoint && a.id == this._touchPoint.id && (this._touchPoint = null, this._circlePosition(0, 0)) },
        onUpdate: function(a) {
            a = this.updateKeyDown();
            if (null != this._touchPoint) {
                var b =
                    this.owner._internal_getFromParents(3, T).viewToLocal(this._touchPoint.viewX, this._touchPoint.viewY),
                    c = b.x,
                    b = b.y;
                b > this.minY && b < this.maxY && c > this.minX && c < this.maxX && !a && this._circlePosition(this._start.x - c, this._start.y - b)
            }
        },
        onRemoved: function() { this._touchPoint = null },
        inBounds: function(a, b) { return b > this.minY && b < this.maxY && a > this.minX && a < this.maxX },
        _circlePosition: function(a, b) {
            var c = this.nAvailSpace,
                d = Math.sqrt((0 - a) * (0 - a) + (0 - b) * (0 - b));
            d < c || (d = c);
            var e = -Math.atan2(b, a),
                f = d * Math.cos(e),
                d = d * Math.sin(e);
            this.valueX = -(1 + (f - c) / c);
            this.valueY = 1 + (d - c) / c;
            this.changed.emit(this.valueX, this.valueY)
        },
        updateKeyDown: function() { var a = q.$GI.getKeyboard().isDown(h.Left) || q.$GI.getKeyboard().isDown(h.A),
                b = q.$GI.getKeyboard().isDown(h.Right) || q.$GI.getKeyboard().isDown(h.D),
                c = q.$GI.getKeyboard().isDown(h.Up) || q.$GI.getKeyboard().isDown(h.W),
                d = q.$GI.getKeyboard().isDown(h.Down) || q.$GI.getKeyboard().isDown(h.S); return a || c || b || d ? (this.changed.emit(a ? -1 : b ? 1 : 0, c ? -1 : d ? 1 : 0), !0) : !1 },
        __class__: Mh
    });
    var Ae = function() {
        this.blendMode =
            la.Normal;
        this.alpha = 1;
        this.color = 0;
        pa.call(this)
    };
    g["s2.creator.FillColor"] = Ae;
    Ae.__name__ = ["s2", "creator", "FillColor"];
    Ae.__super__ = pa;
    Ae.prototype = m(pa.prototype, { onStart: function() { pa.prototype.onStart.call(this); var a = new x;
            a.get_graphics().setAlpha(this.alpha);
            a.get_graphics().fillRect(this.color, this.info.x - this.info.anchorX, this.info.y - this.info.anchorY, this.info.width, this.info.height);
            this.owner.add(a) }, __class__: Ae });
    var Be = function() {
        this.reverseMoviePercentage = !1;
        this.progressMax = 100;
        this.progressProperty = "progress";
        pa.call(this)
    };
    g["s2.creator.MovieProgressBar"] = Be;
    Be.__name__ = ["s2", "creator", "MovieProgressBar"];
    Be.__super__ = pa;
    Be.prototype = m(pa.prototype, {
        onStart: function() {
            var a = this;
            pa.prototype.onStart.call(this);
            var b = this.owner._internal_getFromParents(10);
            this.connect2(b.changed, function(b, d) { var e;
                (e = null == d) || (e = isNaN(d));
                e && (d = 0);
                b == a.progressProperty && (e = d, a.update(0 < e ? e / a.progressMax : 0)) });
            this._movie = this.owner._internal_getFromChildren(3, sb);
            this._movie.set_paused(!0);
            this.update(0)
        },
        update: function(a) { this._movie.set_position(this._movie.symbol.duration * (this.reverseMoviePercentage ? 1 - a : a)) },
        __class__: Be
    });
    var Nh = function() { this.disposeUnusedAssets = !0;
        this.onLoadError = this.loadingScene = null;
        ob.call(this) };
    g["s2.creator.actions.ChangeSceneFromProperty"] = Nh;
    Nh.__name__ = ["s2", "creator", "actions", "ChangeSceneFromProperty"];
    Nh.__super__ = ob;
    Nh.prototype = m(ob.prototype, {
        $fF: function(a) {
            var b = this;
            if (null == this.propertyName) return null;
            var c;
            c = a._internal_getFromParents(10);
            for (var d = null; null != c;) d = c.get(this.propertyName), c = null == d ? null != c.owner.parent ? c.owner.parent._internal_getFromParents(10) : null : null;
            if (null == d)
                if (null != this.defaultSceneIfNoProperty) d = this.defaultSceneIfNoProperty;
                else return null;
            var e = this.getDirector();
            return this.loadScene(d, this.loadingScene, this.disposeUnusedAssets, !1).then(function(a) { e.unwindToScene(b.createScene(d), b.createTransition()) }).catchError(function(c) {
                null != b.onLoadError && null != b.script.owner && b.script.owner.emitMessageToParents(b.onLoadError,
                    a);
                return (new ea).failure(c)
            })
        },
        __class__: Nh
    });
    var Oh = function() { this.volume = 1;
        A.call(this) };
    g["s2.creator.actions.PlayMusicTrack"] = Oh;
    Oh.__name__ = ["s2", "creator", "actions", "PlayMusicTrack"];
    Oh.__super__ = A;
    Oh.prototype = m(A.prototype, { $eF: function(a) { G.loop(a.getAssetsFromParents(), this.musicPath, this.volume) }, __class__: Oh });
    var Ph = function() { this.enabled = !1;
        A.call(this) };
    g["s2.creator.actions.SetPointerEnabled"] = Ph;
    Ph.__name__ = ["s2", "creator", "actions", "SetPointerEnabled"];
    Ph.__super__ = A;
    Ph.prototype =
        m(A.prototype, { $eF: function(a) { a.$MH[3].set_pointerEnabled(this.enabled) }, __class__: Ph });
    var Qh = function() { A.call(this) };
    g["s2.creator.actions.StopMusicTrack"] = Qh;
    Qh.__name__ = ["s2", "creator", "actions", "StopMusicTrack"];
    Qh.__super__ = A;
    Qh.prototype = m(A.prototype, { $eF: function(a) { G.stop() }, __class__: Qh });
    var Rh = function() { A.call(this) };
    g["s2.creator.actions.ToggleLayerVisibility"] = Rh;
    Rh.__name__ = ["s2", "creator", "actions", "ToggleLayerVisibility"];
    Rh.__super__ = A;
    Rh.prototype = m(A.prototype, {
        $eF: function(a) {
            a =
                this.script.owner._internal_getFromParents(3, T).getLayer(this.layerName);
            a.$MH[3].set_visible(0 == (a.$MH[3].$B & 2))
        },
        __class__: Rh
    });
    var Vc = function(a, b, c) { null == c && (c = 1);
        x.call(this);
        this.position = new X(0);
        this.width = a;
        this.height = b;
        this._scale = c;
        this._sprite = new x;
        this._holder = (new F).add(this._sprite) };
    g["s2.display.Parallax"] = Vc;
    Vc.__name__ = ["s2", "display", "Parallax"];
    Vc.fromFile = function(a, b, c, d) {
        c = new Vc(c, d);
        b = a.getFile(b).toJson();
        d = null;
        null != b.texturePackerPath && (d = a.getTexturePacker(b.texturePackerPath));
        for (var e = 0, f = b.layers.length; e < f;) { var g = e++,
                g = b.layers[g]; if (null == d) c.addLayer(a.getTexture(g.texturePath), g.speed, g.repeatX, g.repeatY, g.offsetX, g.offsetY, 1);
            else { var h = d.getItem(g.texturePath, null).texture;
                c.addLayer(h, g.speed, g.repeatX, g.repeatY, g.offsetX, g.offsetY, 1) } }
        return c
    };
    Vc.__super__ = x;
    Vc.prototype = m(x.prototype, {
        addLayer: function(a, b, c, d, e, f, g) {
            null == g && (g = 1);
            null == f && (f = 0);
            null == e && (e = 0);
            a = new kj(a, this._scale, b);
            a.alpha = g;
            a.x = this._offsetX = e;
            a.y = Math.round(f);
            for (e = this._head; null !=
                e;) { if (null == e.next) { e.next = a; break } e = e.next } null == this._head && (this._head = a);
            return this
        },
        onUpdate: function(a) { x.prototype.onUpdate.call(this, a);
            this.position.update(a) },
        draw: function(a) { for (var b = this._head, c = this.position.$pH + this._offsetX; null != b;) { for (var d = b.x = -(c * b.speed) % b.width; d < this.width;) d + b.texture.get_width() <= this.width ? a.drawTexture(b.texture, d, b.y) : a.drawSubTexture(b.texture, d, b.y, 0, 0, Math.ceil(d + b.texture.get_width() - this.width), b.texture.get_height()), d += b.width;
                b = b.next } },
        onAdded: function() {
            x.prototype.onAdded.call(this);
            this.owner.addChild(this._holder, !1)
        },
        onRemoved: function() { x.prototype.onRemoved.call(this);
            this.owner.removeChild(this._holder) },
        __class__: Vc
    });
    var kj = function(a, b, c) { this.alpha = 1;
        this.x = this.y = 0;
        this.texture = a;
        this.width = a.get_width() * b;
        this.speed = c };
    g["s2.display.ParallaxLayer"] = kj;
    kj.__name__ = ["s2", "display", "ParallaxLayer"];
    kj.prototype = { __class__: kj };
    var lj = function() {};
    g["s2.localization.LocaleParser"] = lj;
    lj.__name__ = ["s2", "localization", "LocaleParser"];
    lj.prototype = { __class__: lj };
    var Hh = function() {};
    g["s2.localization.DParser"] = Hh;
    Hh.__name__ = ["s2", "localization", "DParser"];
    Hh.__interfaces__ = [lj];
    Hh.prototype = {
        parseFonts: function(a) { var b = new db,
                c = []; if (Z.__instanceof(a, v))
                for (a = a.firstElement().elements(); a.hasNext();)
                    for (var d = a.next().elements(); d.hasNext();) { var e = d.next().get("font");
                        null != e && "" != e && -1 == c.indexOf(e) && (b.add(e + ".fnt", e + ".fnt"), c.push(e)) }
            return b },
        parseDefinitions: function(a) {
            for (var b = new db, c = a.get_manifest().iterator(); c.hasNext();) {
                var d = c.next();
                b.add(d.url, d.name);
                var e = a.getFile(d.name).toString(),
                    f = 0;
                do { var g = e.indexOf('file="', f),
                        f = -1; - 1 < g && (g += 6, f = e.indexOf('"', g), g = e.substring(g, f), b.add(g.split(".")[0], g)) } while (-1 < f);
                a.getFile(d.name).dispose()
            }
            return b
        },
        parseStrings: function(a, b) {
            var c = new O,
                d = new O;
            if (Z.__instanceof(a, v))
                for (var e = a.firstElement().elements(); e.hasNext();) {
                    var f = e.next(),
                        g = f.elements();
                    if (f.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + f.nodeType);
                    for (f = f.nodeName; g.hasNext();) {
                        var h = g.next(),
                            l = h.get("font"),
                            m = null;
                        null != l && "" != l && (m = (null != Ea[l] ? d.existsReserved(l) : d.h.hasOwnProperty(l)) ? null != Ea[l] ? d.getReserved(l) : d.h[l] : (new Oc(b, l)).disposeFiles());
                        var n = 1;
                        null != h.get("fontScale") && (n = u.parseFloat(h.get("fontScale")));
                        var q = f + ".";
                        if (h.nodeType != v.Element) throw new s("Bad node type, expected Element but found " + h.nodeType);
                        var q = q + h.nodeName,
                            t = m,
                            w = u.parseFloat(h.get("lineHeight"));
                        if (h.nodeType != v.Document && h.nodeType != v.Element) throw new s("Bad node type, expected Element or Document but found " +
                            h.nodeType);
                        h = { id: q, font: t, lineHeight: w, scale: n, text: h.children[0].get_nodeValue() };
                        null != Ea[l] ? d.setReserved(l, m) : d.h[l] = m;
                        c.set(h.id, h)
                    }
                }
            return c
        },
        __class__: Hh
    };
    var R = function() {};
    g["s2.localization.Locale"] = R;
    R.__name__ = ["s2", "localization", "Locale"];
    R.init = function(a, b, c, d) {
        null == d && (d = "assets/fonts");
        null == c && (c = "xml/translation.xml");
        R._formats = new O;
        R._xmlPath = c;
        R._fontDirectory = d;
        R._onReady = a;
        R._parser = b;
        a = new db;
        b = c;
        null != R.externalBase ? b = R.externalBase + R._xmlPath : null != R.relativeBase && (b =
            R.relativeBase + R._xmlPath);
        a.add(c, b);
        q.$GI.loadAssetPack(a).then(R.onXmlSuccess)
    };
    R.getFormat = function(a) { if (R._formats.exists(a)) return R._formats.get(a); throw new s("No string id : '" + a + "' exists."); };
    R.onXmlSuccess = function(a) { a = a.getFile(R._xmlPath);
        R._x = v.parse(a.toString());
        a.dispose();
        a = R.prepManifest(R._parser.parseFonts(R._x));
        q.$GI.loadAssetPack(a).then(R.onDefinitionLoadSuccess) };
    R.onDefinitionLoadSuccess = function(a) { a = R.prepManifest(R._parser.parseDefinitions(a));
        q.$GI.loadAssetPack(a).then(R.onAtlasLoadSuccess) };
    R.prepManifest = function(a) { null != R.externalBase ? a.$gI = R.externalBase + R._fontDirectory : a.$fI = null != R.relativeBase ? R.relativeBase + R._fontDirectory : R._fontDirectory; return a };
    R.onAtlasLoadSuccess = function(a) { R._formats = R._parser.parseStrings(R._x, a); for (a = R._formats.iterator(); a.hasNext();) { var b = a.next(),
                c = I.replace(b.text, "<br>", "\n");
            c != b.text && (b.text = c) } R.loading = !1;
        null != R._onReady && R._onReady.apply(null, []);
        R._onReady = null };
    var G = function() {};
    g["s2.sound.MusicManager"] = G;
    G.__name__ = ["s2", "sound",
        "MusicManager"
    ];
    G.__properties__ = { get_muted: "get_muted" };
    G.loop = function(a, b, c) { null == c && (c = 1); var d = a.getSound(b);
        G.init(d);
        G.loopSound(a, b, c) };
    G.stop = function() { null != G._bgLoop && (G._bgLoop.dispose(), G._bgLoop = null);
        null != G._audioTag && G._audioTag.pause() };
    G.loopSoundStandard = function(a, b, c) {
        G._volume = c;
        null == G._bgLoop || G._bgLoop.get_sound() != a.getSound(b) ? (null != G._bgLoop && G._bgLoop.dispose(), G._bgLoop = a.getSound(b).loop(G.get_muted().get__() ? 0 : G._volume)) : null != G._bgLoop && G._bgLoop.volume.animateTo(G.get_muted().get__() ?
            0 : G._volume, 0.2)
    };
    G.get_muted = function() { null == G._muted && (G._muted = new ya(!1, G.onMuteChange)); return G._muted };
    G.onMuteChange = function(a, b) { null != G._audioTag ? (G._audioTag.muted = a, G._audioTag.volume = a ? 0 : G._volume * q.volume.$pH) : null != G._bgLoop && G._bgLoop.volume.set__(a ? 0 : G._volume) };
    G.init = function(a) {
        G._init || (G.loopSound = G.loopSoundStandard, Z.__instanceof(a, wb) && (G.loopSound = G.loopSoundHack, a = window.document, G._audioTag = a.createElement("audio"), G._audioTag.id = "flambe_audioTag_hack", q.hidden.get_changed().connect(function(a,
            c) { G._audioTag.muted = a;
            G._audioTag.volume = a ? 0 : G._volume * q.volume.$pH }), q.volume.get_changed().connect(function(a, c) { G._audioTag.volume = G._volume * a }), a.body.appendChild(G._audioTag)), G._init = !0)
    };
    G.loopSoundHack = function(a, b, c) { G._volume = c;
        G.get_muted().get__() ? G._audioTag.volume = 0 : G._audioTag.volume = c * q.volume.$pH;
        G._audioTag.autoplay = !0;
        G._audioTag.loop = !0;
        G._audioTag.preload = "auto";
        G._audioTag.src = G.findFullSoundURL(a, b);
        G._audioTag.muted = G.get_muted().get__() };
    G.findFullSoundURL = function(a, b) {
        for (var c =
                a.get_manifest().iterator(); c.hasNext();) { var d = c.next(); if (d.name == b) return a.get_manifest().getFullURL(d) }
        return null
    };
    var Ge = function(a) { null == a && (a = !0);
        this._queue = new O;
        this._values = new O;
        this.changed = new ia; var b = this;
        n.call(this);
        a ? q.$GI.getLocalStorage().get("game_state", null).then(function(a) { if (null != a) { a = JSON.parse(a); for (var d = 0; d < a.length;) { var e = a[d];++d;
                    b._values.set(e.key, e) } } }) : this.reset() };
    g["s2.storage.StateManager"] = Ge;
    Ge.__name__ = ["s2", "storage", "StateManager"];
    Ge.__super__ =
        n;
    Ge.prototype = m(n.prototype, {
        get_entitySlot: function() { return 33 },
        setBool: function(a, b) { this.addToQueue(a, b, 2) },
        setFloat: function(a, b) { this.addToQueue(a, b, 3) },
        getBool: function(a, b) { null == b && (b = !1); return this._values.exists(a) ? (oc.that(2 == this._values.get(a).t, "Cannot mismatch types!", null), this._values.get(a).v) : b },
        getFloat: function(a, b) { null == b && (b = 0); return this._values.exists(a) ? (oc.that(3 == this._values.get(a).t, "Cannot mismatch types!", null), this._values.get(a).v) : b },
        reset: function() {
            this._values =
                new O;
            this._queue = new O;
            q.$GI.getLocalStorage().set("game_state", JSON.stringify([])).then(function(a) {})
        },
        onUpdate: function(a) { 0 != (this.$B & 8) && this.flush();
            0 != (this.$B & 2) && (this.$B &= -3, this.applyQueue(), 0 == (this.$B & 4) ? this.flush() : this.$B |= 8) },
        addToQueue: function(a, b, c) {
            var d;
            d = this._queue.exists(a) ? this._queue.get(a) : null;
            if (null == d) {
                if (this._values.exists(a) && this._values.get(a).v == b) return;
                oc.that(!this._values.exists(a) || this._values.get(a).t == c, "Property types must match.", null);
                b = {
                    t: c,
                    v: b,
                    p: this._values.exists(a) ?
                        this._values.get(a).v : null
                };
                this._queue.set(a, b)
            } else { if (d.v == b) return;
                d.p = d.v;
                d.v = b } this.$B = xc.set(this.$B, 2, !0)
        },
        applyQueue: function() { for (var a = this._queue.keys(); a.hasNext();) { var b = a.next(),
                    c = this._queue.get(b);
                this._values.set(b, { t: c.t, key: b, v: c.v });
                this._queue.remove(b);
                this.changed.emit(b) } },
        flush: function() {
            var a = this;
            this.$B &= -9;
            for (var b = this._values.keys(), c = []; b.hasNext();) { var d = b.next(),
                    e = this._values.get(d);
                c.push({ t: e.t, key: d, v: e.v }) } this.$B = xc.set(this.$B, 4, !0);
            q.$GI.getLocalStorage().set("game_state",
                JSON.stringify(c)).then(function(b) { a.$B &= -5 })
        },
        __class__: Ge
    });
    var Sh = function() { this.keys = [];
        ta.call(this) };
    g["s2.storage.actions.IfStatesNotAllTrue"] = Sh;
    Sh.__name__ = ["s2", "storage", "actions", "IfStatesNotAllTrue"];
    Sh.__super__ = ta;
    Sh.prototype = m(ta.prototype, { $fF: function(a) { var b = q.root.$MH[33]; if (0 == this.keys.length) return null; for (var c = 0, d = this.keys; c < d.length;) { var e = d[c];++c; if (!b.getBool(e, !1)) return A.runSequence(this.subActions, a) } return null }, __class__: Sh });
    var Th = function() {
        this.setToTrue = !0;
        this.key = "";
        A.call(this)
    };
    g["s2.storage.actions.SetBooleanState"] = Th;
    Th.__name__ = ["s2", "storage", "actions", "SetBooleanState"];
    Th.__super__ = A;
    Th.prototype = m(A.prototype, { $eF: function(a) { q.root.$MH[33].setBool(this.key, this.setToTrue) }, __class__: Th });
    var Hc = function() {};
    g["s2.util.BuildInfo"] = Hc;
    Hc.__name__ = ["s2", "util", "BuildInfo"];
    Hc.getBuildLog = function() { return "Version 0.1 (" + Hc.commitHash + ") - " + Hc.buildDate };
    var Xc = function() {};
    g["s2.util.PathUtil"] = Xc;
    Xc.__name__ = ["s2", "util", "PathUtil"];
    Xc.absoluteToRelative = function(a, b) { console.log("Start Path: " + a + " - end path: " + b); if (Xc.sameDomain(a, b)) { var c = I.replace(I.replace(a, "http://", ""), "https://", "").split("/"),
                d = I.replace(I.replace(b, "http://", ""), "https://", "").split("/");
            c.shift();
            d.shift(); "" == c[c.length - 1] && c.pop(); for (var e = 0, f = Math.floor(Math.min(c.length, d.length)); e++ < f;) c[0] == d[0] ? (c.splice(0, 1), d.splice(0, 1)) : e = f + 1;
            f = ""; for (e = c.length; 0 < e--;) f += "../";
            console.log("Relative path: " + f + d.join("/")); return f + d.join("/") } return null };
    Xc.sameDomain = function(a, b) { var c = Xc.getHost(a),
            d = Xc.getHost(b); return null != c && null != d && c == d ? !0 : !1 };
    Xc.getHost = function(a) { return I.startsWith(a, "http://") || I.startsWith(a, "https://") ? I.replace(I.replace(a, "http://", ""), "https://", "").split("/")[0] : null };
    var ij = function(a) {
        this.F2 = 0.5 * (Math.sqrt(3) - 1);
        this.G2 = (3 - Math.sqrt(3)) / 6;
        this.F3 = 0.3333333333333333;
        this.G3 = 0.16666666666666666;
        this.F4 = (Math.sqrt(5) - 1) / 4;
        this.G4 = (5 - Math.sqrt(5)) / 20;
        null == a && (a = Math.random);
        this.p = new Od(256);
        this.perm = new Od(512);
        this.permMod12 = new Od(512);
        for (var b = 0; 256 > b;) { var c = b++;
            this.p[c] = Math.floor(256 * a()) }
        for (a = 0; 512 > a;) b = a++, this.perm[b] = this.p[b & 255], this.permMod12[b] = this.perm[b] % 12
    };
    g["s2.util.SimplexNoise"] = ij;
    ij.__name__ = ["s2", "util", "SimplexNoise"];
    ij.prototype = {
        noise2D: function(a, b) {
            var c = this.permMod12,
                d = this.perm,
                e;
            null == this._grad3 && (this._grad3 = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]));
            e = this._grad3;
            var f = 0,
                g = 0,
                h = 0,
                l = (a + b) * this.F2,
                m = Math.floor(a +
                    l),
                n = Math.floor(b + l),
                l = (m + n) * this.G2,
                q = a - (m - l),
                s = b - (n - l),
                t, u;
            q > s ? (t = 1, u = 0) : (t = 0, u = 1);
            var v = q - t + this.G2,
                w = s - u + this.G2,
                l = q - 1 + 2 * this.G2,
                x = s - 1 + 2 * this.G2,
                m = m & 255,
                n = n & 255,
                y = 0.5 - q * q - s * s;
            0 <= y && (f = 3 * c[m + d[n]], y *= y, f = y * y * (e[f] * q + e[f + 1] * s));
            q = 0.5 - v * v - w * w;
            0 <= q && (g = 3 * c[m + t + d[n + u]], q *= q, g = q * q * (e[g] * v + e[g + 1] * w));
            v = 0.5 - l * l - x * x;
            0 <= v && (c = 3 * c[m + 1 + d[n + 1]], v *= v, h = v * v * (e[c] * l + e[c + 1] * x));
            return 70 * (f + g + h)
        },
        __class__: ij
    };
    var y = function() {};
    g["s2.util.Sniffer"] = y;
    y.__name__ = ["s2", "util", "Sniffer"];
    y.__properties__ = {
        get_android: "get_android",
        get_tablet: "get_tablet",
        get_lowMemory: "get_lowMemory",
        get_iOSChrome: "get_iOSChrome",
        get_iOS: "get_iOS",
        get_mobile: "get_mobile",
        get_userAgent: "get_userAgent",
        get_desktop: "get_desktop",
        get_nickApp: "get_nickApp"
    };
    y.init = function() {
        y._userAgent = window.navigator.userAgent;
        y._devicePixelRatio = window.devicePixelRatio;
        y._uaLower = y._userAgent.toLowerCase();
        var a = qa.fromBrowser().query;
        y._nickApp = null != Ea.apiKey ? a.existsReserved("apiKey") : a.h.hasOwnProperty("apiKey");
        y._iOSTablet = y.test("iPad");
        y._iOSPocket =
            y.test("iPod") || y.test("iPhone");
        y._iOS = y._iOSPocket || y._iOSTablet;
        y._iOSChrome = y.test("CriOS");
        y._iOSSafari = y._iOS && y.test("Safari") && !y._iOSChrome;
        y._silk = y.test("Silk");
        y._kindle = y.test("Silk") || "amazon" == (null != Ea.partner ? a.getReserved("partner") : a.h.partner);
        for (var a = "Mini Mobile Phone Tablet Android iOS".split(" "), b = 0; b < a.length;) { var c = a[b];++b; if (y.test(c.toLowerCase(), !1)) { y._mobile = !0; break } } a = ["ARM", "BlackBerry", "Palm", "webOS"];
        for (b = 0; b < a.length;)
            if (c = a[b], ++b, y.test(c)) {
                y._mobile = !0;
                break
            } y._android = y.test("Android", !1);
        y._androidTablet = y._android && !y.test("Mobile", !1);
        y._androidPocket = y._android && y.test("Mobile", !1);
        y._tablet = y._androidTablet || y._iOSTablet || y._kindle || y.test("ARM");
        a = q.$GI.$XH.get_width() * q.$GI.$XH.get_height();
        y._lowMemory = (706560 >= a || (y._iOSTablet || y._iOSPocket) && 2 > y._devicePixelRatio) && y._mobile;
        y._desktop = y.test("Macintosh") || y.test("Linux") || y.test("Windows") && !y._mobile;
        y._inited = !0
    };
    y.get_nickApp = function() { y.assureInited(); return y._nickApp };
    y.get_desktop =
        function() { y.assureInited(); return y._desktop };
    y.get_userAgent = function() { y.assureInited(); return y._userAgent };
    y.get_mobile = function() { y.assureInited(); return y._mobile };
    y.get_iOS = function() { y.assureInited(); return y._iOS };
    y.get_iOSChrome = function() { y.assureInited(); return y._iOSChrome };
    y.get_lowMemory = function() { y.assureInited(); return y._lowMemory };
    y.get_tablet = function() { y.assureInited(); return y._tablet };
    y.get_android = function() { y.assureInited(); return y._android };
    y.assureInited = function() {
        y._inited ||
            y.init()
    };
    y.test = function(a, b) { null == b && (b = !0); return b ? 0 <= y._userAgent.indexOf(a) : 0 <= y._uaLower.indexOf(a.toLowerCase()) };
    var ye = function() {};
    g["s2.util.StringUtil"] = ye;
    ye.__name__ = ["s2", "util", "StringUtil"];
    ye.decrypt = function(a) { a = bd.decode(a); return a.getString(0, a.length) };
    var qa = function(a) {
        null == qa._parts && (qa._parts = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "));
        qa._parts;
        this.url = a;
        this.query = new O;
        var b = new Ra("^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?://)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\\d*))?)(((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[?#]|$)))*/?)?([^?#/]*))(?:\\?([^#]*))?(?:#(.*))?)",
            "");
        b.match(a);
        a = 0;
        for (var c = qa._parts.length; a < c;) { var d = a++,
                e = b.matched(d); if (null != e)
                if ("query" != qa._parts[d]) this[qa._parts[d]] = e;
                else
                    for (var d = e.split("&"), e = 0, f = d.length; e < f;) { var g = e++,
                            g = d[g].split("=");
                        this.query.set(g[0], g[1]) } }
    };
    g["s2.util.URLParser"] = qa;
    qa.__name__ = ["s2", "util", "URLParser"];
    qa.init = function() { null == qa._parts && (qa._parts = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ")); return qa._parts };
    qa.parse = function(a) {
        null ==
            qa._parts && (qa._parts = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "));
        qa._parts;
        return new qa(a)
    };
    qa.fromBrowser = function() { return qa.parse(u.string(window.location)) };
    qa.prototype = {
        toString: function() {
            null == qa._parts && (qa._parts = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "));
            qa._parts;
            for (var a = "For Url -> " + this.url + "\n", b = 0, c = qa._parts.length; b < c;) var d = b++,
                a = a +
                (qa._parts[d] + ": " + u.string(P.field(this, qa._parts[d])) + (d == qa._parts.length - 1 ? "" : "\n"));
            return a
        },
        __class__: qa
    };
    var Ih = function() {};
    g["s2.util.Utils"] = Ih;
    Ih.__name__ = ["s2", "util", "Utils"];
    Ih.createGUID = function() { for (var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b = [], c = 0, d, e = 0; 36 > e;) { var f = e++;
            8 == f || 13 == f || 18 == f || 23 == f ? b[f] = "-" : 14 == f ? b[f] = "4" : (2 >= c && (c = 33554432 + u.parseInt(u.string(Math.random() * parseFloat("16777216"))) | 0), d = c & 15, c >>= 4, b[f] = a[19 == f ? d & 3 | 8 : d]) } return b.join("") };
    var Aj, Fj = 0;
    g.Math = Math;
    String.prototype.__class__ = g.String = String;
    String.__name__ = ["String"];
    g.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = g.Date = Date;
    Date.__name__ = ["Date"];
    var Gj = g.Int = { __name__: ["Int"] },
        Hj = g.Dynamic = { __name__: ["Dynamic"] },
        Dj = g.Float = Number;
    Dj.__name__ = ["Float"];
    var Ej = g.Bool = Boolean;
    Ej.__ename__ = ["Bool"];
    var Bj = g.Class = { __name__: ["Class"] },
        Cj = {},
        Ea = {},
        rj = zj.ArrayBuffer || ac;
    null == rj.prototype.slice && (rj.prototype.slice = ac.sliceImpl);
    var Od = zj.Uint8Array || zc._new;
    v.Element = 0;
    v.PCData = 1;
    v.CData = 2;
    v.Comment = 3;
    v.DocType = 4;
    v.ProcessingInstruction = 5;
    v.Document = 6;
    Q.$M = Q.$L();
    Q.$N = Q.$L();
    Q.$O = Q.$L();
    Q.$P = [];
    Q.$Q = [];
    Q.$R = new E;
    Q.$S = new E;
    Q.$T = new E;
    Q.$U = new E;
    Q.$V = new E;
    Q.$W = new E;
    Q.$X = new E;
    Q.$Y = new E;
    pb.$i = new Wh;
    pb.$j = [];
    pb.$k = [];
    Bd.$BB = 0;
    S.$NB = 0;
    S.$OB = 0;
    S.$PB = 0;
    S.$QB = 0;
    S.$RB = 0;
    S.$SB = new Ne;
    S.$TB = new Je;
    S.$UB = new Kc;
    S.$VB = new Kc;
    S.$WB = new ai;
    S.$XB = new Ke;
    Ed.$TC = new Kc;
    Gd.defaultFilter = new Gd;
    pc.defaultListener = new pc;
    Lc.$_C = new gi;
    Ka.$MD = new Id;
    Ka.$OD = new Jc;
    Ka.$PD =
        new Jc;
    Ka.$QD = new Id;
    Ka.$RD = [];
    ma.$kD = new bi;
    Ya.$tD = new ci;
    Ya.$uD = new mi;
    H.__rtti = '<class path="kit.creator.CreatorObject" params="">\n\t<extends path="kit.Component"/>\n\t<get_entitySlot set="method" line="71" override="1"><f a=""><x path="Int"/></f></get_entitySlot>\n\t<info public="1" set="null">\n\t\t<c path="kit.creator.ObjectInfo"/>\n\t\t<meta>\n\t\t\t<m n=":Creator"><e>visible=false</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t</meta>\n\t</info>\n\t<spawned public="1" set="null" expr="true" line="76">\n\t\t<x path="Bool"/>\n\t\t<meta>\n\t\t\t<m n=":value"><e>true</e></m>\n\t\t\t<m n=":Creator"><e>initial=true</e></m>\n\t\t</meta>\n\t</spawned>\n\t<onStarted public="1" set="null" expr="null" line="81">\n\t\t<c path="String"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</onStarted>\n\t<onUpdated public="1" set="null" expr="null" line="86">\n\t\t<c path="String"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</onUpdated>\n\t<onStopped public="1" set="null" expr="null" line="91">\n\t\t<c path="String"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</onStopped>\n\t<onStart public="1" set="method" line="93" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="101" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<onStop public="1" set="method" line="117" override="1"><f a=""><x path="Void"/></f></onStop>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":rtti"/>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    hc.__rtti = '<class path="ez.Actor" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<pointerEnabled public="1" line="41">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</pointerEnabled>\n\t<onPointerDown public="1" line="43"><c path="String"/></onPointerDown>\n\t<onPointerIn public="1" line="44"><c path="String"/></onPointerIn>\n\t<onPointerOut public="1" line="45"><c path="String"/></onPointerOut>\n\t<onPointerUp public="1" line="46"><c path="String"/></onPointerUp>\n\t<physicsEnabled public="1" line="48"><x path="Bool"/></physicsEnabled>\n\t<density public="1" line="51">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</density>\n\t<fixedRotation public="1" line="53"><x path="Bool"/></fixedRotation>\n\t<gravityScale public="1" line="56">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</gravityScale>\n\t<friction public="1" line="59">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0.2</e></m></meta>\n\t</friction>\n\t<restitution public="1" line="61"><x path="Float"/></restitution>\n\t<sensor public="1" line="62"><x path="Bool"/></sensor>\n\t<collisionGroup public="1" line="63"><c path="Array"><c path="String"/></c></collisionGroup>\n\t<collidesWith public="1" line="64"><c path="Array"><c path="String"/></c></collidesWith>\n\t<onBeginContact public="1" line="65"><c path="String"/></onBeginContact>\n\t<onEndContact public="1" line="66"><c path="String"/></onEndContact>\n\t<physicsType public="1" line="68"><e path="ez.PhysicsType"/></physicsType>\n\t<onStart public="1" set="method" line="72" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<emitMessage set="method" line="158">\n\t\t<f a="message">\n\t\t\t<c path="String"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$cF"</e></m></meta>\n\t</emitMessage>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    hc.ENTITY_SLOT = 1;
    A.__rtti = '<class path="kit.creator.CreatorAction" params="">\n\t<runSequence public="1" set="method" line="129" static="1"><f a="actions:target">\n\t<c path="Array"><c path="kit.creator.CreatorAction"/></c>\n\t<c path="kit.Entity"/>\n\t<t path="kit.util.Promise0"/>\n</f></runSequence>\n\t<runParallel public="1" set="method" line="150" static="1"><f a="actions:target">\n\t<c path="Array"><c path="kit.creator.CreatorAction"/></c>\n\t<c path="kit.Entity"/>\n\t<t path="kit.util.Promise0"/>\n</f></runParallel>\n\t<target public="1" set="null" expr="null" line="37">\n\t\t<c path="kit.creator.ObjectInfo"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</target>\n\t<script public="1" set="null" expr="null" line="44">\n\t\t<c path="kit.creator.CreatorScript"/>\n\t\t<meta>\n\t\t\t<m n=":value"><e>null</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t\t<m n=":Creator"><e>visible=false</e></m>\n\t\t</meta>\n\t\x3c/script>\n\t<onRun public="1" set="method" line="61">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<onRunAsync public="1" set="method" line="71">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<run public="1" set="method" line="86">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$gF"</e></m></meta>\n\t</run>\n\t<new set="method" line="52"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":rtti"/>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    Se.__rtti = '<class path="ez.Debug" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<message public="1" line="36"><c path="String"/></message>\n\t<onRun public="1" set="method" line="38" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Te.__rtti = '<class path="ez.Delay" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<duration public="1" line="38">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</duration>\n\t<onRunAsync public="1" set="method" line="40" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<c path="kit.util.Promise"><unknown/></c>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="34"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ta.__rtti = '<class path="kit.creator.GroupAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<subActions public="1" set="null" line="34">\n\t\t<c path="Array"><c path="kit.creator.CreatorAction"/></c>\n\t\t<meta>\n\t\t\t<m n=":Creator"><e>visible=false</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t</meta>\n\t</subActions>\n\t<onRunAsync public="1" set="method" line="36" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="30"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    Xe.__rtti = '<class path="ez.Parallel" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<onRunAsync public="1" set="method" line="35" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Ye.__rtti = '<class path="ez.Random" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<onRunAsync public="1" set="method" line="34" override="1">\n\t\t<f a="entity">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="32"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Ze.__rtti = '<class path="ez.Repeat" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<count public="1" line="37">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator"><e>initial=-1</e></m></meta>\n\t</count>\n\t<onRunAsync public="1" set="method" line="39" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<runForever set="method" line="44">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$pF"</e></m></meta>\n\t</runForever>\n\t<runCount set="method" line="51">\n\t\t<f a="target:count">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Int"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$qF"</e></m></meta>\n\t</runCount>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    $e.__rtti = '<class path="ez.RunAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<name public="1" line="36"><c path="String"/></name>\n\t<onRunAsync public="1" set="method" line="38" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    af.__rtti = '<class path="ez.Sequence" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<new set="method" line="32"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    bf.__rtti = '<class path="ez.Spawn" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<onRunAsync public="1" set="method" line="37" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="35"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    wc.__rtti = '<class path="ez.TweenAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<tween set="method" line="42">\n\t\t<f a="entity:float:to:duration:ease">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t\t<x path="Float"/>\n\t\t\t<x path="Float"/>\n\t\t\t<e path="ez.TweenEase"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$rF"</e></m></meta>\n\t</tween>\n\t<tweenXY set="method" line="56">\n\t\t<f a="entity:xValue:toX:yValue:toY:duration:ease">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t\t<x path="Float"/>\n\t\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t\t<x path="Float"/>\n\t\t\t<x path="Float"/>\n\t\t\t<e path="ez.TweenEase"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$sF"</e></m></meta>\n\t</tweenXY>\n\t<toEaseFunction set="method" line="74">\n\t\t<f a="ease">\n\t\t\t<e path="ez.TweenEase"/>\n\t\t\t<t path="kit.animation.EaseFunction"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$tF"</e></m></meta>\n\t</toEaseFunction>\n\t<disposePhysics set="method" line="111">\n\t\t<f a="entity">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$uF"</e></m></meta>\n\t</disposePhysics>\n\t<new set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    Jd.__rtti = '<class path="ez.VectorGraphics" params="">\n\t<extends path="ez.Actor"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<fillColor public="1" line="38">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>format=color</e>\n\t<e>initial="#C0C0C0"</e>\n</m></meta>\n\t</fillColor>\n\t<strokeColor public="1" line="41">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>format=color</e>\n\t<e>initial="#999999"</e>\n</m></meta>\n\t</strokeColor>\n\t<strokeWidth public="1" line="44">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator"><e>initial=5</e></m></meta>\n\t</strokeWidth>\n\t<onStart public="1" set="method" line="46" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<toPoints set="method" line="95">\n\t\t<f a="closeLoop">\n\t\t\t<x path="Bool"/>\n\t\t\t<c path="Array"><x path="Float"/></c>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$xF"</e></m></meta>\n\t</toPoints>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Jd.ENTITY_SLOT = 1;
    x.$SG = new ka;
    ef.__rtti = '<class path="ez.display.AlphaTo" params="">\n\t<extends path="ez.TweenAction"/>\n\t<to public="1" line="35"><x path="Float"/></to>\n\t<duration public="1" line="37"><x path="Float"/></duration>\n\t<ease public="1" line="38"><e path="ez.TweenEase"/></ease>\n\t<onRunAsync public="1" set="method" line="40" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ff.__rtti = '<class path="ez.display.Hide" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="35" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    gf.__rtti = '<class path="ez.display.MoveBy" params="">\n\t<extends path="ez.TweenAction"/>\n\t<x public="1" line="35"><x path="Float"/></x>\n\t<y public="1" line="36"><x path="Float"/></y>\n\t<duration public="1" line="38"><x path="Float"/></duration>\n\t<ease public="1" line="39"><e path="ez.TweenEase"/></ease>\n\t<onRunAsync public="1" set="method" line="41" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    hf.__rtti = '<class path="ez.movie.ChangeState" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<state public="1" line="36"><c path="String"/></state>\n\t<loop public="1" line="40">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</loop>\n\t<waitForComplete public="1" line="44">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</waitForComplete>\n\t<onRunAsync public="1" set="method" line="46" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    jf.__rtti = '<class path="ez.property.IfProperty" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<property public="1"><c path="String"/></property>\n\t<operator public="1" line="41"><e path="ez.property.IfOperator"/></operator>\n\t<type public="1" line="44"><e path="ez.property.PropertyType"/></type>\n\t<value public="1" line="47"><c path="String"/></value>\n\t<onRunAsync public="1" set="method" line="49" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<find set="method" line="71">\n\t\t<f a="entity">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<d/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eG"</e></m></meta>\n\t</find>\n\t<_value line="91"><d/></_value>\n\t<new set="method" line="35"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Yb.__rtti = '<class path="ez.property.PropertyAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<convert set="method" line="74" static="1">\n\t\t<f a="type:value">\n\t\t\t<e path="ez.property.PropertyType"/>\n\t\t\t<c path="String"/>\n\t\t\t<d/>\n\t\t</f>\n\t\t<meta>\n\t\t\t<m n=":native"><e>"$hG"</e></m>\n\t\t\t<m n=":allow"><e>ez</e></m>\n\t\t</meta>\n\t</convert>\n\t<property public="1" line="37"><c path="String"/></property>\n\t<location public="1" line="41">\n\t\t<e path="ez.property.PropertyLocation"/>\n\t\t<meta><m n=":Creator"><e>initial=Scene</e></m></meta>\n\t</location>\n\t<onRun public="1" set="method" line="43" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<getScope set="method" line="60">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<c path="kit.Entity"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fG"</e></m></meta>\n\t</getScope>\n\t<getValue set="method" line="69">\n\t\t<f a="target:currentValue">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<d/>\n\t\t\t<d/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$gG"</e></m></meta>\n\t</getValue>\n\t<new set="method" line="34"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    kf.__rtti = '<class path="ez.property.SetProperty" params="">\n\t<extends path="ez.property.PropertyAction"/>\n\t<type public="1" line="34"><e path="ez.property.PropertyType"/></type>\n\t<value public="1" line="37"><c path="String"/></value>\n\t<getValue set="method" line="39" override="1">\n\t\t<f a="target:currentValue">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<d/>\n\t\t\t<d/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$gG"</e></m></meta>\n\t</getValue>\n\t<_value line="48"><d/></_value>\n\t<new set="method" line="31"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Ua.__rtti = '<class path="ez.scene.SceneAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<complement params="A" set="method" line="155" static="1">\n\t\t<f a="set1:set2">\n\t\t\t<c path="Array"><c path="complement.A"/></c>\n\t\t\t<c path="Array"><c path="complement.A"/></c>\n\t\t\t<c path="Array"><c path="complement.A"/></c>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$nG"</e></m></meta>\n\t</complement>\n\t<transition public="1" line="44"><e path="ez.scene.SceneTransition"/></transition>\n\t<duration public="1" line="48">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0.5</e></m></meta>\n\t</duration>\n\t<createScene set="method" line="50">\n\t\t<f a="name:?opaque">\n\t\t\t<c path="String"/>\n\t\t\t<x path="Bool"/>\n\t\t\t<c path="kit.scene.Scene"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$iG"</e></m></meta>\n\t</createScene>\n\t<getAdditionalPackNames public="1" set="method" line="59">\n\t\t<f a=""><c path="Array"><c path="String"/></c></f>\n\t\t<meta><m n=":native"><e>"$jG"</e></m></meta>\n\t</getAdditionalPackNames>\n\t<loadScene set="method" line="64">\n\t\t<f a="name:loadingScene:disposeUnused:push">\n\t\t\t<c path="String"/>\n\t\t\t<c path="String"/>\n\t\t\t<x path="Bool"/>\n\t\t\t<x path="Bool"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$kG"</e></m></meta>\n\t</loadScene>\n\t<createTransition set="method" line="139">\n\t\t<f a=""><c path="kit.scene.Transition"/></f>\n\t\t<meta><m n=":native"><e>"$lG"</e></m></meta>\n\t</createTransition>\n\t<getDirector set="method" line="148">\n\t\t<f a=""><c path="kit.scene.Director"/></f>\n\t\t<meta><m n=":native"><e>"$mG"</e></m></meta>\n\t</getDirector>\n\t<new set="method" line="42"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    lf.__rtti = '<class path="ez.scene.ChangeScene" params="">\n\t<extends path="ez.scene.SceneAction"/>\n\t<scene public="1"><c path="String"/></scene>\n\t<onLoadError public="1" line="38"><c path="String"/></onLoadError>\n\t<loadingScene public="1" line="41"><c path="String"/></loadingScene>\n\t<disposeUnusedAssets public="1" line="45">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</disposeUnusedAssets>\n\t<onRunAsync public="1" set="method" line="47" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="32"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    yc.__rtti = '<class path="ez.scene.PopScene" params="">\n\t<extends path="ez.scene.SceneAction"/>\n\t<disposeUnusedAssets public="1" line="35">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</disposeUnusedAssets>\n\t<onRun public="1" set="method" line="37" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="31"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    mf.__rtti = '<class path="ez.scene.PushScene" params="">\n\t<extends path="ez.scene.SceneAction"/>\n\t<scene public="1"><c path="String"/></scene>\n\t<opaque public="1" line="37"><x path="Bool"/></opaque>\n\t<onLoadError public="1" line="40"><c path="String"/></onLoadError>\n\t<loadingScene public="1" line="43"><c path="String"/></loadingScene>\n\t<onRunAsync public="1" set="method" line="45" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="32"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Nc.__rtti = '<class path="ez.sound.PlaySound" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<channels public="1" set="null" line="58" static="1"><x path="Map">\n\t<c path="String"/>\n\t<c path="kit.sound.Playback"/>\n</x></channels>\n\t<sound public="1" line="39"><c path="String"/></sound>\n\t<volume public="1" line="43">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</volume>\n\t<loop public="1" line="46"><x path="Bool"/></loop>\n\t<waitForComplete public="1" line="49"><x path="Bool"/></waitForComplete>\n\t<stopWhenTargetDisposed public="1" line="52"><x path="Bool"/></stopWhenTargetDisposed>\n\t<soundChannel public="1" line="55"><c path="String"/></soundChannel>\n\t<onRunAsync public="1" set="method" line="60" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="36"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Nc.channels = new O;
    jc.USE_CACHE = !1;
    jc.USE_ENUM_INDEX = !1;
    jc.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    cb.DEFAULT_RESOLVER = da;
    cb.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    bd.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    bd.BYTES = Qb.ofString(bd.CHARS);
    Zb.count = 0;
    $b.i64tmp = new oi(0, 0);
    nc.escapes = function(a) {
        a = new O;
        null != Ea.lt ? a.setReserved("lt", "<") : a.h.lt = "<";
        null != Ea.gt ? a.setReserved("gt", ">") : a.h.gt = ">";
        null !=
            Ea.amp ? a.setReserved("amp", "&") : a.h.amp = "&";
        null != Ea.quot ? a.setReserved("quot", '"') : a.h.quot = '"';
        null != Ea.apos ? a.setReserved("apos", "'") : a.h.apos = "'";
        return a
    }(this);
    Z.__toStr = {}.toString;
    zc.BYTES_PER_ELEMENT = 1;
    F.$OH = new yi;
    Rb.$nH = new Rb;
    Oa.$CI = new ed(null, null);
    q.root = new F;
    q.uncaughtError = new ia;
    q.lowMemoryWarning = new bb;
    q.hidden = new ya(!1);
    q.volume = new X(1);
    q.$GI = Rb.$nH;
    db.$iI = function() { var a = null != (new XMLHttpRequest).withCredentials;
        a || null; return a }();
    Rd.__rtti = '<class path="kit.creator.Camera" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<following public="1" line="36"><c path="kit.Entity"/></following>\n\t<zoom public="1">\n\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</zoom>\n\t<active public="1" line="42">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</active>\n\t<offsetX public="1" line="44"><x path="Float"/></offsetX>\n\t<offsetY public="1" line="45"><x path="Float"/></offsetY>\n\t<onStart public="1" set="method" line="49" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="73" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<updateLayers set="method" line="78">\n\t\t<f a="sceneSprite">\n\t\t\t<c path="kit.creator.SceneSprite"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta>\n\t\t\t<m n=":native"><e>"$jI"</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t</meta>\n\t</updateLayers>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Rd.ENTITY_SLOT = 1;
    T.$IJ = new tb;
    pa.__rtti = '<class path="kit.creator.ui.Widget" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<_scratchRect line="131" static="1">\n\t\t<c path="kit.math.Rectangle"/>\n\t\t<meta><m n=":native"><e>"$IJ"</e></m></meta>\n\t</_scratchRect>\n\t<pointerEnabled public="1" line="40">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</pointerEnabled>\n\t<onPointerDown public="1" line="42"><c path="String"/></onPointerDown>\n\t<onPointerIn public="1" line="43"><c path="String"/></onPointerIn>\n\t<onPointerOut public="1" line="44"><c path="String"/></onPointerOut>\n\t<onPointerUp public="1" line="45"><c path="String"/></onPointerUp>\n\t<onClick public="1" line="47"><c path="String"/></onClick>\n\t<dockX public="1" line="50"><e path="kit.creator.ui.DockX"/></dockX>\n\t<dockY public="1" line="51"><e path="kit.creator.ui.DockY"/></dockY>\n\t<cameraEnabled line="54">\n\t\t<e path="kit.creator.ui.CameraSetting"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</cameraEnabled>\n\t<onStart public="1" set="method" line="56" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<addListener params="A" set="method" line="122">\n\t\t<f a="signal:message">\n\t\t\t<c path="kit.util.Signal1"><c path="addListener.A"/></c>\n\t\t\t<c path="String"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$MJ"</e></m></meta>\n\t</addListener>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    pa.$IJ = new tb;
    fd.__rtti = '<class path="kit.creator.ui.BitmapText" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<textAlign public="1" line="36"><e path="kit.display.TextAlign"/></textAlign>\n\t<font public="1"><c path="String"/></font>\n\t<letterSpacing public="1" line="38"><x path="Float"/></letterSpacing>\n\t<lineSpacing public="1" line="39"><x path="Float"/></lineSpacing>\n\t<text public="1" line="42">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial="Your text"</e></m></meta>\n\t</text>\n\t<textScale public="1" line="45">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</textScale>\n\t<onStart public="1" set="method" line="47" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<getTextSprite public="1" set="method" line="70">\n\t\t<f a=""><c path="kit.display.TextSprite"/></f>\n\t\t<meta><m n=":native"><e>"$NJ"</e></m></meta>\n\t</getTextSprite>\n\t<updateTextSprite set="method" line="75">\n\t\t<f a="addListeners">\n\t\t\t<x path="Bool"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$OJ"</e></m></meta>\n\t</updateTextSprite>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    fd.ENTITY_SLOT = 1;
    Sd.__rtti = '<class path="kit.creator.ui.Button" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<pressDistance public="1" line="33">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=10</e></m></meta>\n\t</pressDistance>\n\t<onStart public="1" set="method" line="35" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Sd.ENTITY_SLOT = 1;
    Td.__rtti = '<class path="kit.creator.ui.Image" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Td.ENTITY_SLOT = 1;
    Ud.__rtti = '<class path="kit.creator.ui.Text" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<font public="1" line="36"><c path="String"/></font>\n\t<systemFont public="1" line="37"><c path="String"/></systemFont>\n\t<text public="1" line="40">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial="Your text"</e></m></meta>\n\t</text>\n\t<fontSize public="1" line="43">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=24</e></m></meta>\n\t</fontSize>\n\t<bold public="1" line="45"><x path="Bool"/></bold>\n\t<italic public="1" line="46"><x path="Bool"/></italic>\n\t<color public="1" line="49">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>initial="#000000"</e>\n\t<e>format=color</e>\n</m></meta>\n\t</color>\n\t<strokeColor public="1" line="52">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>initial="#ffffff"</e>\n\t<e>format=color</e>\n</m></meta>\n\t</strokeColor>\n\t<strokeWidth public="1" line="54"><x path="Float"/></strokeWidth>\n\t<lineSpacing public="1" line="56"><x path="Float"/></lineSpacing>\n\t<textAlign public="1" line="58"><e path="kit.display.TextAlign"/></textAlign>\n\t<onStart public="1" set="method" line="60" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<updateTextSprite set="method" line="91">\n\t\t<f a="addListeners">\n\t\t\t<x path="Bool"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$OJ"</e></m></meta>\n\t</updateTextSprite>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t</meta>\n</class>';
    Oc.$EK = new pg(10);
    Sb.$RN = new Ki;
    ib.$RN = new Li;
    Za.$RN = new Mi;
    sa.__meta__ = {
        obj: {
            injected: [{
                scenes: {
                    intro: ["intro", "common", "bootstrap"],
                    pause: ["pause", "common", "bootstrap"],
                    squadmateSelect: ["characterSelect", "common"],
                    "instruction-overlay": ["pause", "common", "bootstrap"],
                    "powerup-tutorial": ["pause", "bootstrap", "common", "gameplayCommon"],
                    "controls-tutorial": ["pause", "bootstrap", "common", "character_pinkRanger"],
                    level9: ["gameshakerStages", "bootstrap", "common", "gameplayCommon", "pause"],
                    level8: ["gameshakerStages",
                        "bootstrap", "common", "gameplayCommon", "pause"
                    ],
                    level7: ["gameshakerStages", "bootstrap", "common", "gameplayCommon", "pause"],
                    level6: ["loudhouseStages", "bootstrap", "common", "gameplayCommon", "pause"],
                    level5: ["loudhouseStages", "bootstrap", "common", "gameplayCommon", "pause"],
                    level4: ["loudhouseStages", "bootstrap", "common", "gameplayCommon", "pause"],
                    level3: ["spongebobStages", "bootstrap", "common", "gameplayCommon", "pause"],
                    level2: ["spongebobStages", "bootstrap", "common", "gameplayCommon", "pause"],
                    level1: ["spongebobStages",
                        "bootstrap", "common", "gameplayCommon", "pause"
                    ],
                    _level1: ["spongebobStages", "bootstrap", "common", "gameplayCommon", "pause"],
                    resultsSuccess: ["results", "bootstrap", "common"],
                    "enemy-tutorial": "pause bootstrap common character_pinkRanger gameplayCommon character_lisa".split(" "),
                    title: ["title", "common", "bootstrap"],
                    "coin-tutorial": ["pause", "bootstrap", "common", "gameplayCommon"],
                    outro1: ["outro", "common", "bootstrap"],
                    preloader: ["bootstrap"],
                    "strike-tutorial": "pause bootstrap common gameplayCommon character_lisa character_pinkRanger".split(" "),
                    resultsFail: ["results", "bootstrap", "common"],
                    "level-boss": ["prototype", "bootstrap", "common", "gameplayCommon", "gameshakerStages"],
                    "controls-test": ["prototype", "common"],
                    level: "prototype bootstrap common gameplayCommon spongebobStages pause".split(" "),
                    characterSelect: ["characterSelect", "common", "gameplayCommon", "bootstrap"],
                    devtest: ["prototype"],
                    characterSelectConfirmation: ["characterSelect", "common", "bootstrap", "gameplayCommon"]
                },
                maxHeight: 768,
                scaleMode: 1,
                height: 768,
                id: "com.nick.shmup",
                orientation: "any",
                fullscreen: !0,
                maxWidth: 1316,
                assets: {
                    intro: [{ bytes: 11355, md5: "BfjyhkbkeOLIF8g4KlvK9g", name: "intro.scene" }, { bytes: 35035, md5: "JHFyYrAbbY2gmiwwVNpNJw", name: "fonts/roboto_black_black_24.fnt" }, { bytes: 53409, md5: "QH6OULRVXAw9ElYauoAVoA", name: "fonts/roboto_black_black_24.png" }, { bytes: 443376, md5: "qtc6CrMrU4M_e4J7r1VIRw", name: "background.jpg" }],
                    character_lisa: [{ bytes: 48176, md5: "tJunsOnx9LwYQGPMgI-WBw", name: "lisa/library.json" }, { bytes: 7296, md5: "L8iBsXtHevJW-ks5f1XHlQ", name: "sfx/lisa_fire.mp3" }, {
                        bytes: 9333,
                        md5: "yrSMOUQ7_JkT5rtQJMzTDQ",
                        name: "sfx/lisa_fire.ogg"
                    }, { bytes: 11837, md5: "-Jd6JCPkx4xY738j8SHghA", name: "sfx/lisa_hit.ogg" }, { bytes: 9984, md5: "PLDqFOT-griPOIxO4funDw", name: "sfx/lisa_hit.mp3" }, { bytes: 205126, md5: "y5b08zEWaz9vMB5OKt5b8w", name: "lisa/atlas0.png" }],
                    pause: [{ bytes: 22503, md5: "m5jJtu1xb6Z9dBX6tTS3_A", name: "01PinkRanger.png" }, { bytes: 56151, md5: "d6EhdR1OHxGu5nQ9bd2bZw", name: "03Emoticoins.png" }, { bytes: 12101, md5: "V23Tv24sMvCdcxGohnFFlA", name: "coin-tutorial.scene" }, { bytes: 12274, md5: "hn7bG02XIU5DlE8Qgh-76g", name: "controls-tutorial.scene" },
                        { bytes: 12161, md5: "ZlzgigHdvApg7Kyrgvrn9A", name: "enemy-tutorial.scene" }, { bytes: 79699, md5: "-6JR3jdTQsZ4_ONMtlzP1A", name: "02Blasting.png" }, { bytes: 11425, md5: "fHvIICgP0MXDiO4GV2syTQ", name: "instruction-overlay.scene" }, { bytes: 23781, md5: "q7xMcjLkbqXsnrFG6l1gww", name: "pause-border.png" }, { bytes: 105570, md5: "nGaj4cxVoiqCUFg-l8hmgQ", name: "Hologram_Pause.png" }, { bytes: 118058, md5: "CIeCMI-0ZbD3LZRcdC_qqg", name: "instruction-overlay-bg.png" }, { bytes: 31488, md5: "B0kUlxbHhoNAoY6rela_Uw", name: "pause.scene" }, {
                            bytes: 200448,
                            md5: "u8lOmqunx-PzgdkdojxCOQ",
                            name: "05SquadStrike.png"
                        }, { bytes: 36339, md5: "yoB4OHbTMU2u5Smmgz5vmA", name: "powerup-tutorial.scene" }, { bytes: 12291, md5: "L97R9U4pbNTTdcJNHxK6QA", name: "strike-tutorial.scene" }, { bytes: 35048, md5: "kOkPF7MNdZl3qASzHNrsSg", name: "fonts/roboto_black_green_dropshadow_55.fnt" }, { bytes: 695100, md5: "rcRXyaqwUZlXgQJc0Gvk_g", name: "fonts/roboto_black_green_dropshadow_55.png" }
                    ],
                    gameshakerStages: [{ bytes: 3626, md5: "rMEHmH8bsKu8v1rUtmLISA", name: "BGBuildings.jpg" }, {
                            bytes: 14353,
                            md5: "ik3QfLLBYbWyNLnlGNg8wg",
                            name: "Bricks.jpg"
                        }, { bytes: 8188, md5: "sEOzD1mK6dFteMl7pBw83Q", name: "Couch.png" }, { bytes: 7156, md5: "Fy0p9YAOrdcE5hOYDY0zZw", name: "DonutChocolate.png" }, { bytes: 8080, md5: "rqkaHbXV-l712DeWXooMvg", name: "DonutPink.png" }, { bytes: 63623, md5: "txFxc30l6ACVn8j_hz_ASQ", name: "bg-fore.png" }, { bytes: 71438, md5: "9ziug6WbM6EYoXvw-MePVQ", name: "level3_tile.jpg" }, { bytes: 30383, md5: "q5cWvtsrZnBnSFy0au-PTA", name: "boss/library.json" }, { bytes: 23130, md5: "BtvbnLuPBFxI6dp1rSNc6A", name: "music/nffg_bossbattle_endstingerv1.mp3" }, {
                            bytes: 48766,
                            md5: "8PZk4G_ZHluQtVo_Hn_5ow",
                            name: "music/nffg_bossbattle_endstingerv1.ogg"
                        }, { bytes: 22698, md5: "T0NyOwx1Nu442TRma-79BQ", name: "music/nffg_gameplaymusic_endstingerv3.mp3" }, { bytes: 42527, md5: "aL_OEBFMH5pq5RBch2BsEw", name: "music/nffg_gameplaymusic_endstingerv3.ogg" }, { bytes: 165317, md5: "bMatkiTNpGpk4V3VnZj4vA", name: "level7.scene" }, { bytes: 193890, md5: "8zrjm7I7pg5a836JO9aMBw", name: "level8.scene" }, { bytes: 173930, md5: "PI-IHUPqQJ7oYWw2ZdGr2Q", name: "music/nffg_bossbattle_endstingerv1.wav" }, {
                            bytes: 16434,
                            md5: "NTnIDQMzRs5dZEpfzy1emQ",
                            name: "music/nffg_gameplaymusic_endstingerv4.mp3"
                        }, { bytes: 26864, md5: "qxRvB9nfyO63yaPv-WRR7g", name: "music/nffg_gameplaymusic_endstingerv4.ogg" }, { bytes: 222889, md5: "Cj7HArVg1IVrqRiG2asnjA", name: "level9.scene" }, { bytes: 182106, md5: "OpV-jlsKgUB1wkPHc_UO4w", name: "music/nffg_bossbattlemusicv1.mp3" }, { bytes: 169862, md5: "W75cS4xgPdWFPWE85cOzuQ", name: "music/nffg_gameplaymusic_endstingerv3.wav" }, { bytes: 302564, md5: "_Ug5oDwvZ7t1Nltr69zsSA", name: "boss/atlas0.png" }, { bytes: 103826, md5: "fiuMl8sTgwUIsPNua4yLLw", name: "music/nffg_gameplaymusic_endstingerv4.wav" },
                        { bytes: 832, md5: "zd27yco1AkCKVzZ1oBmHjA", name: "parallax/background.json" }, { bytes: 221, md5: "Xd_4oyAVyuCs4gS4Uuhwpg", name: "parallax/foreground.json" }, { bytes: 187506, md5: "ehwpkye6wjsUMflrYBntcA", name: "music/nffg_gameplaymusicv3.mp3" }, { bytes: 58852, md5: "OmB_w89qfwEVBGDqxFdK9A", name: "sfx/boss_death.ogg" }, { bytes: 76032, md5: "gB4IVYIeEdZrUBbf8hXXQw", name: "sfx/boss_death.mp3" }, { bytes: 187506, md5: "tKH-11XV93y5xzLiryzZkw", name: "music/nffg_gameplaymusicv4.mp3" }, { bytes: 525761, md5: "8b0k8sEKxGlF4l29_HY6Ew", name: "music/nffg_bossbattlemusicv1.ogg" },
                        { bytes: 542034, md5: "7j2-UyzrimLQu5yNamGw8A", name: "music/nffg_gameplaymusicv3.ogg" }, { bytes: 485112, md5: "cU8C9kZMecESKepkJ71RoA", name: "music/nffg_gameplaymusicv4.ogg" }, { bytes: 1753445, md5: "HWtJKaFwd_hMrZdjL_5qJw", name: "backgroundfoampits.png" }, { bytes: 1869658, md5: "t42h9jHStSYdMX3SP33tnw", name: "music/nffg_bossbattlemusicv1.wav" }, { bytes: 1927838, md5: "M3LhFQGuAY8iw5SXc2EwXg", name: "music/nffg_gameplaymusicv3.wav" }, { bytes: 1927838, md5: "cO_k-vnLjHuiB2aFCrhzTg", name: "music/nffg_gameplaymusicv4.wav" }
                    ],
                    character_sandy: [{
                        bytes: 47194,
                        md5: "b6Bi5kDg9GsE8fR98DxhkA",
                        name: "sandy/library.json"
                    }, { bytes: 8832, md5: "Em2aegO3k9079QxT0XG1WQ", name: "sfx/sandy_fire.mp3" }, { bytes: 11078, md5: "6fuY1-Szl0g-DyCyTrD5NQ", name: "sfx/sandy_fire.ogg" }, { bytes: 9984, md5: "XWkYDvCWmu-u-EIl6IIBkA", name: "sfx/sandy_hit.mp3" }, { bytes: 10048, md5: "eFnInAliygMQPjfc2Gn8zA", name: "sfx/sandy_hit.ogg" }, { bytes: 199254, md5: "rQInaJ_bcOdDJvDNhwnyKA", name: "sandy/atlas0.png" }],
                    outro: [{ bytes: 50999, md5: "raUj_NqJqnS-RHmyVlUyng", name: "Boss.png" }, {
                        bytes: 45874,
                        md5: "QYHJ3TywUNrNfbqLFfoauA",
                        name: "Trophy.png"
                    }, { bytes: 31169, md5: "Yl4RJpj_evhnUF1SQcaamw", name: "outro1.scene" }, { bytes: 23905, md5: "9lRSEYvqu_7HLhhx_GN6jw", name: "fonts/roboto_black_black_24.fnt" }, { bytes: 38843, md5: "AWj9ZfWKgBuOcffymkA1pw", name: "fonts/roboto_black_black_24.png" }, { bytes: 9473, md5: "UChYiwMQcwkNWCun5szPjQ", name: "characters/april_smallshaded.png" }, { bytes: 29368, md5: "3fv7iyyhg1e2G9473ynVxw", name: "characters/april.png" }, { bytes: 38655, md5: "g6pFnFqMvONQDFNvfNqKvg", name: "characters/babe.png" }, {
                        bytes: 161500,
                        md5: "Q7_zPBnpzKCd2I4C56KMwg",
                        name: "EndBG1.jpg"
                    }, { bytes: 10150, md5: "POgW7TDHR9mmXxtVgtPyQw", name: "characters/babe_smallshaded.png" }, { bytes: 32786, md5: "2hxL3KtMkKOlc32lASDDiQ", name: "characters/danger.png" }, { bytes: 10812, md5: "PBBpRCJVxCAKK1R0xdeXdA", name: "characters/danger_smallshaded.png" }, { bytes: 31341, md5: "zvPtSTVHjEDejBeez7IzSg", name: "characters/kenzie.png" }, { bytes: 9166, md5: "J0i6J9Gnbsum3WBMMsGVXg", name: "characters/kenzie_smallshaded.png" }, { bytes: 308028, md5: "Q0BLbNcYIY-1SZ910Q7txQ", name: "EndBG2.jpg" }, {
                        bytes: 26301,
                        md5: "JfLlg7GnhsqkMkArqfVONQ",
                        name: "characters/lincoln.png"
                    }, { bytes: 10405, md5: "Oq2vpuD0IU1RfXV0lR46kQ", name: "characters/lincoln_smallshaded.png" }, { bytes: 31921, md5: "KGzTNTk6AIfMIYO7t0DKiw", name: "characters/lisa.png" }, { bytes: 36691, md5: "3oO_19pv3Of7nH30QBIHsA", name: "characters/phoebe.png" }, { bytes: 10890, md5: "EabYiyWlbPJAIk6RDbZmIQ", name: "characters/lisa_smallshaded.png" }, { bytes: 10151, md5: "aztsgk8MbO-l0THz0L-G5w", name: "characters/phoebe_smallshaded.png" }, { bytes: 24197, md5: "hAoVlNiqqHJYNTWFJnuqlA", name: "characters/pinkRanger.png" }, {
                        bytes: 8577,
                        md5: "sBF51Jpc44besyoZ6jbNNA",
                        name: "characters/pinkRanger_smallshaded.png"
                    }, { bytes: 30972, md5: "SVOnTyZslwJBF5w7IcV9mQ", name: "characters/sandy.png" }, { bytes: 10986, md5: "YxNZCHzDeLJpl_dzP36tWQ", name: "characters/sandy_smallshaded.png" }, { bytes: 30369, md5: "CmzZwUYst752q3Af5vroOQ", name: "characters/spongebob.png" }, { bytes: 10326, md5: "RTHFz_O2J2-lgB7126U_mg", name: "characters/spongebob_smallshaded.png" }],
                    character_babe: [{ bytes: 8832, md5: "zt0L-Lbf1Y_-aYjk3nQy-w", name: "sfx/babe_fire.mp3" }, {
                        bytes: 47993,
                        md5: "3sK8lle1lHO61AdCNh8a1A",
                        name: "babe/library.json"
                    }, { bytes: 10929, md5: "OChJFD5WRTQDHBfJLiiQsQ", name: "sfx/babe_fire.ogg" }, { bytes: 10752, md5: "WRYDYgVR1dsj4Yr7NhulWA", name: "sfx/babe_hit.mp3" }, { bytes: 9543, md5: "ulBaAm2rwxJX9illlAoIJw", name: "sfx/babe_hit.ogg" }, { bytes: 210298, md5: "eu-PFxDE7lGi3Uf2UjuKdw", name: "babe/atlas0.png" }],
                    character_spongebob: [{ bytes: 47057, md5: "edENrpd8dL5SRyq_QsZ1Qw", name: "spongebob/library.json" }, { bytes: 8832, md5: "ixl8YeXK6WKLtjIJ3XpU7Q", name: "sfx/spongebob_fire.mp3" }, {
                        bytes: 10580,
                        md5: "bLmLlRcDTRrmjAlmsFT_dQ",
                        name: "sfx/spongebob_fire.ogg"
                    }, { bytes: 8064, md5: "ebUXW7HB-HazrgM9jWgx4Q", name: "sfx/spongebob_hit.mp3" }, { bytes: 8918, md5: "_5vj2ljhgNri98gPO7ZYAA", name: "sfx/spongebob_hit.ogg" }, { bytes: 167091, md5: "D5X31UpyHkC0Bvl7iSOn-Q", name: "spongebob/atlas0.png" }],
                    character_kenzie: [{ bytes: 47983, md5: "Gom5jkNQiI-ctUNzXcScxA", name: "kenzie/library.json" }, { bytes: 9600, md5: "1sUVL1hw6N4dWZ7_u7x9Gg", name: "sfx/kenzie_fire.mp3" }, { bytes: 13181, md5: "aXTX8IZNax7SmX-gLPqNkA", name: "sfx/kenzie_fire.ogg" }, {
                        bytes: 9984,
                        md5: "QhMtkUpJJ5JYUMy-qKnM3w",
                        name: "sfx/kenzie_hit.mp3"
                    }, { bytes: 9830, md5: "ROfnzBas6cs11XP9AUls8A", name: "sfx/kenzie_hit.ogg" }, { bytes: 193035, md5: "oSsH46NeSXeLHBgAq9nnhw", name: "kenzie/atlas0.png" }],
                    character_lincoln: [{ bytes: 47212, md5: "E2L0Mp3i0CI4g8sapgSezQ", name: "lincoln/library.json" }, { bytes: 9216, md5: "QtmUZhQ33fNLW67UCyOI_Q", name: "sfx/lincoln_fire.mp3" }, { bytes: 10560, md5: "vTWNJ2QnaaVmtd3w8kqUlQ", name: "sfx/lincoln_fire.ogg" }, { bytes: 10368, md5: "qztG2ZQc8vn0EYygHJucKg", name: "sfx/lincoln_hit.mp3" }, {
                        bytes: 9613,
                        md5: "fi4p2s5glIMmsDhaKifkdA",
                        name: "sfx/lincoln_hit.ogg"
                    }, { bytes: 182403, md5: "RQG9m3UyPaf9SaJkK5KANg", name: "lincoln/atlas0.png" }],
                    title: [{ bytes: 8684, md5: "nIaYuT5HA0V2IJm5A33yeQ", name: "title.scene" }, { bytes: 755820, md5: "OAG0x40pJTgxp6nfRBGmPw", name: "title.jpg" }],
                    gameplayCommon: [{ bytes: 15708, md5: "uzAfpVVvrkt5nWRSKL6r1Q", name: "temphud.png" }, { bytes: 28892, md5: "uwafn5ZGC3cgQGDNsuKOcQ", name: "sfx/coin.mp3" }, { bytes: 9411, md5: "JL0o276m0z2MeBqcF31lMw", name: "sfx/coin.ogg" }, { bytes: 26880, md5: "2Sfe4dch8x9pY6icFcqedw", name: "sfx/coin_power_up.mp3" },
                        { bytes: 26389, md5: "MNdKs0vY96SSfff61nbNvQ", name: "sfx/coin_power_up.ogg" }, { bytes: 38780, md5: "cWCGv96F2TjpYbcS4UfsyQ", name: "sfx/easterEgg.mp3" }, { bytes: 53265, md5: "vc9PsaNV9IGJFxRduwd2mA", name: "sfx/easterEgg.ogg" }, { bytes: 18758, md5: "mORCizeND0qEorIR_G1Biw", name: "sfx/enemy_death.mp3" }, { bytes: 11491, md5: "LVv-uit4EXr9JmHFpQ3N6Q", name: "sfx/enemy_death.ogg" }, { bytes: 19161, md5: "cMEojcz8pEcAW3JMxTADlg", name: "sfx/enemy_fire.mp3" }, { bytes: 14595, md5: "eGA5w8WyxiHkVisCSt7ALg", name: "sfx/enemy_fire.ogg" }, {
                            bytes: 24996,
                            md5: "MTufo97jL1aC8c22aCeRmw",
                            name: "sfx/heal.mp3"
                        }, { bytes: 33296, md5: "0SuxVEkSiJTABrIaRnVgRg", name: "sfx/heal.ogg" }, { bytes: 9628, md5: "OE-Z9p0ALilw-xdzHWkKIg", name: "sfx/hero_hit.ogg" }, { bytes: 6528, md5: "8fjNgFC-S0LXPfSota_pUQ", name: "sfx/hero_hit.mp3" }, { bytes: 37075, md5: "1JC2tX-pccCc8WrEByeL2g", name: "sfx/level_complete.mp3" }, { bytes: 41991, md5: "RN1BEHgpRlP0PAEk3pgkqQ", name: "sfx/level_complete.ogg" }, { bytes: 30644, md5: "X_uww5YyOZjwh-opzILt3A", name: "sfx/shield.mp3" }, { bytes: 18063, md5: "2Moxb2fHG9xvnIMnzfl1Bw", name: "sfx/shield.ogg" }, {
                            bytes: 25837,
                            md5: "MO2X_eUoT-kjZsVspQT8aQ",
                            name: "sfx/shield_power_down.mp3"
                        }, { bytes: 14210, md5: "pI6_5FL4hoQpEZq9DZGCyg", name: "sfx/shield_power_down.ogg" }, { bytes: 32451, md5: "hIfDfMjIINRyY8dldAN1CQ", name: "sfx/shield_power_loop.mp3" }, { bytes: 28116, md5: "gRmvWakkvw-ywaehckUZwA", name: "sfx/shield_power_loop.mp4" }, { bytes: 23059, md5: "Z9ecy-98dGXJ25i7v1kPnQ", name: "sfx/shield_power_loop.ogg" }, { bytes: 11904, md5: "KaGMLNq7T8ecpEDQMDeo3w", name: "sfx/shrink.mp3" }, { bytes: 12424, md5: "3IriNTiStnsozgfR-aLMeA", name: "sfx/shrink.ogg" }, {
                            bytes: 33660,
                            md5: "GaMPFKVyL1umE1i8n0Dcsw",
                            name: "sfx/special.mp3"
                        }, { bytes: 33015, md5: "YEBehLvEhFrybC2CVgD7lQ", name: "sfx/special.ogg" }, { bytes: 28852, md5: "pQUq-UIyvnNpCvQ9FSZUHw", name: "sfx/universal_death.mp3" }, { bytes: 48267, md5: "5srWoFxyR7MCjg6fSBOyAQ", name: "sfx/universal_death.ogg" }, { bytes: 60504, md5: "EQI8dhSTTEqyW4LbEB49Vg", name: "animation/library.json" }, { bytes: 26612, md5: "neI_Jw6kdtbBPHKsDRQ3_g", name: "ui/progressbar/library.json" }, { bytes: 148645, md5: "Bwn8s_scqa48U3H5vOX-dA", name: "ui/progressbar/atlas0.png" }, {
                            bytes: 363464,
                            md5: "bw6hD773M2tbPlkiAeTgEg",
                            name: "animation/atlas0.png"
                        }
                    ],
                    spongebobStages: [{ bytes: 7695, md5: "Z-uaQAdyA7DW2vQjgB2qOg", name: "Rock.png" }, { bytes: 18454, md5: "8UgNy3nBzjfC_4jKHoFJmQ", name: "Rocks2.png" }, { bytes: 44960, md5: "N5TfTagkPzOLvnGuKtOpvw", name: "bg-fore.png" }, { bytes: 18537, md5: "lPg4F7TiIlWi6YcWeTrFlQ", name: "bg-sand.png" }, { bytes: 29619, md5: "yQUr4YPJK-KqrHSU_EDmgA", name: "bg-sandHomes.png" }, { bytes: 18653, md5: "a39hf7EKvjbdoSS6CdU62A", name: "bg-sky.jpg" }, { bytes: 19026, md5: "ba7zLAsl2UFvH4VWpl25MA", name: "music/nffg_gameplaymusic_endstingerv1.mp3" },
                        { bytes: 163604, md5: "ewjBvnYlNjfPUr8SumN7VA", name: "_level1.scene" }, { bytes: 38375, md5: "mQsNglJncLja9xsmfEx_NQ", name: "music/nffg_gameplaymusic_endstingerv1.ogg" }, { bytes: 165012, md5: "CrNq0h3WGvpCe2AQoiOgHg", name: "level1.scene" }, { bytes: 152821, md5: "MVuNssbynMhirk8OjJ7rgQ", name: "level2.scene" }, { bytes: 138212, md5: "nVBYkzh9BM6R9bA8kmrlBQ", name: "level3.scene" }, { bytes: 814, md5: "7SnonLuDQrSbQ3ar68tl3A", name: "parallax/background.json" }, { bytes: 221, md5: "Xd_4oyAVyuCs4gS4Uuhwpg", name: "parallax/foreground.json" }, {
                            bytes: 131710,
                            md5: "9Y63NSQ--T3KH_flWimEQQ",
                            name: "music/nffg_gameplaymusic_endstingerv1.wav"
                        }, { bytes: 187506, md5: "jBUGVZtwSjLx40J3I80YDg", name: "music/nffg_gameplaymusicv1.mp3" }, { bytes: 487045, md5: "O0pddjGoGAfkyoemVQFpag", name: "level1-tile.png" }, { bytes: 481342, md5: "mwMJIMuUzdjsk3_WWvXBBg", name: "music/nffg_gameplaymusicv1.ogg" }, { bytes: 1927838, md5: "hgb1W6CDqCyEHRtI4yEZRw", name: "music/nffg_gameplaymusicv1.wav" }
                    ],
                    character_danger: [{ bytes: 8832, md5: "u0hkTp9XeEDeqrcKBqh4XQ", name: "sfx/danger_fire.mp3" }, {
                        bytes: 47956,
                        md5: "KV2oE4R05MX5j-wpIXXZ6g",
                        name: "danger/library.json"
                    }, { bytes: 10225, md5: "g9QFF3ndkOfGjIFuSCJWIg", name: "sfx/danger_fire.ogg" }, { bytes: 9216, md5: "x-4okD245VmWdfAXKn8_rQ", name: "sfx/danger_hit.mp3" }, { bytes: 10545, md5: "HPTctw2TeOP2j9oQzgzmqA", name: "sfx/danger_hit.ogg" }, { bytes: 200838, md5: "GhDzX4lfQu1LWoMMBql__w", name: "danger/atlas0.png" }],
                    bootstrap: [{ bytes: 10418, md5: "w8QgYNEjHwgnMkB1X6VTMA", name: "preloader.scene" }, { bytes: 35049, md5: "n_prcFkF9Ukwehdia7PLbQ", name: "fonts/roboto_black_white_dropshadow_76.fnt" }, {
                        bytes: 46331,
                        md5: "2fCvXi2-OYZDvrrXUwo2_w",
                        name: "fonts/slackey_white_60.fnt"
                    }, { bytes: 1192, md5: "rp8SvtKsatrgKupnhMU-Cg", name: "preloader/library.json" }, { bytes: 62105, md5: "Cv63XsXuiq-ld5Mzq_F6FA", name: "preloader/atlas0.png" }, { bytes: 68084, md5: "WBr2lY_dmZKidD57fuah_g", name: "fonts/slackey_white_60.png" }, { bytes: 230875, md5: "ddcKkQZ-FauUnm-xzzw7fQ", name: "loadingScreenBG.jpg" }, { bytes: 715729, md5: "ofD3IRO7nFJEZGeW68vj5A", name: "fonts/roboto_black_white_dropshadow_76.png" }],
                    results: [{ bytes: 14821, md5: "HDw_hb0qWpGxIcQL7ZiUPw", name: "resultsFail.scene" }, {
                        bytes: 16338,
                        md5: "2cvoXwV4gALDsHgBvpojYg",
                        name: "resultsSuccess.scene"
                    }, { bytes: 23919, md5: "KXQjmrgenM7_USCkA9JIZA", name: "fonts/roboto_black_green_dropshadow_90.fnt" }, { bytes: 35047, md5: "C-6stt6DVXUKDKvoaVLv4w", name: "fonts/roboto_black_red_dropshadow_120.fnt" }, { bytes: 698537, md5: "pK_s-RNNnZTsezkqpL70Lw", name: "fonts/roboto_black_red_dropshadow_120.png" }, { bytes: 785836, md5: "kCq5gSnLWgiLnI4cq-Zd3A", name: "fonts/roboto_black_green_dropshadow_90.png" }],
                    character_april: [{ bytes: 48193, md5: "Umhn3YMSQEPz1w5LxhRDbg", name: "april/library.json" },
                        { bytes: 8832, md5: "B6A9dbERZtxJiZ8WA0Vv7w", name: "sfx/april_fire.mp3" }, { bytes: 10495, md5: "0na97cc3xhBst1U5T-Z8ug", name: "sfx/april_fire.ogg" }, { bytes: 14208, md5: "B1R_3c7Dzs2JbeB58z9gyQ", name: "sfx/april_hit.mp3" }, { bytes: 10587, md5: "xsMegRzGJHKSaZDHH0nAfw", name: "sfx/april_hit.ogg" }, { bytes: 188876, md5: "rJffRyTA2CR4MardsWSLRw", name: "april/atlas0.png" }
                    ],
                    characterSelect: [{ bytes: 15108, md5: "b6flfBe8rtalyctYaCbd8w", name: "CharacterBox.png" }, { bytes: 15084, md5: "iNnyElIjzOguB66ztDWk1Q", name: "CharacterBoxSelected-Green.png" },
                        { bytes: 18377, md5: "aKhVy88JjU1FpxvaqBTnEg", name: "CharacterBoxSelectedGlow-Green.png" }, { bytes: 18359, md5: "XhhyHQbNYj4Za-1bXtaqig", name: "CharacterBoxSelectedGlow-Blue.png" }, { bytes: 15282, md5: "7yGZIgjaXFlEKcQM58CQjw", name: "IconAttack.png" }, { bytes: 886, md5: "0RLjjTrU8AkWRHMW84_gzQ", name: "IconHealth.png" }, { bytes: 57, md5: "HFhW5Hs4NuS4_LsH76pWlA", name: "LevelUpgradeCosts.json" }, { bytes: 1118, md5: "T-3U9-1hzUUvkE78X7VUHA", name: "LevelMarker.png" }, { bytes: 7229, md5: "h20hlEKWae70W7GZQkUKuw", name: "ModuleBG.png" }, {
                            bytes: 7733,
                            md5: "6PUTSVaIdRREkxzGBn228g",
                            name: "ModuleBlueStroke.png"
                        }, { bytes: 7682, md5: "Q1cZ3tJhM6uJym0P7D5tgQ", name: "ModuleGreenStroke.png" }, { bytes: 4148, md5: "mJP-bp5T_AoUxpZYzpC9Uw", name: "Phone.png" }, { bytes: 57123, md5: "zGgoE1plGeNELR3CgPed0A", name: "characterSelect.scene" }, { bytes: 16022, md5: "s-Y6PUXBtVRl7PxyqMtZ7Q", name: "characterSelectConfirmation.scene" }, { bytes: 7117, md5: "McsoIQy4tBumEeAaXpEz3Q", name: "squadmateSelect.scene" }, { bytes: 11574, md5: "MCpSisMcZjyTrBY_t6ExXQ", name: "trophyLarge.png" }, {
                            bytes: 3817,
                            md5: "ywJDNbqs3-XTwzXShZFdmw",
                            name: "trophy.png"
                        }, { bytes: 9370, md5: "vNJ20RAz3wmyaVybnSdJyA", name: "characterStats/atlas0.png" }, { bytes: 5044, md5: "oosArRMrfIGFMKa5F5LDeA", name: "characterStats/library.json" }, { bytes: 35047, md5: "0xHXTWZDcCqLgLhdX6ANhQ", name: "fonts/roboto_black_black_29_transparent.fnt" }, { bytes: 35036, md5: "Ga3Wo2KzDl7RXXCf4O274w", name: "fonts/roboto_black_orange_25.fnt" }, { bytes: 67691, md5: "vxmJbyGhdypwxNX1CFSGUg", name: "SquadLeaderBG_Green.png" }, { bytes: 67736, md5: "Zk_YGpTOeVRAwevQjBzzow", name: "SquadMateBG_Blue.png" }, {
                            bytes: 389135,
                            md5: "_gdXEl-aOH4BxEobr8B4dw",
                            name: "Hologram.png"
                        }, { bytes: 66633, md5: "NfgR7QGedaANAZ9n5VEP5A", name: "fonts/roboto_black_black_29_transparent.png" }, { bytes: 35033, md5: "zF-gpzhbKo-lD5UcWrEPNw", name: "fonts/roboto_black_red_25.fnt" }, { bytes: 88023, md5: "FssWuomxsnlpZ4hU5eLSBA", name: "fonts/roboto_black_orange_25.png" }, { bytes: 28046, md5: "YQlj75iVwx4u7G-CS5o9EQ", name: "characterportraits/april.jpg" }, { bytes: 22112, md5: "5UgLBJQxGiUV1JdhoSI9SA", name: "characterportraits/april_green.jpg" }, {
                            bytes: 28769,
                            md5: "eQkdYE3dyBQoVJnutWNiNw",
                            name: "characterportraits/babe.jpg"
                        }, { bytes: 23160, md5: "L2z9EkO9crk2c1zd899Y-g", name: "characterportraits/babe_green.jpg" }, { bytes: 27815, md5: "2j2pVGEdpmCweQvZpzVEQQ", name: "characterportraits/danger.jpg" }, { bytes: 23403, md5: "xiN7xnKmabwPuzPIoRDWiQ", name: "characterportraits/danger_green.jpg" }, { bytes: 27047, md5: "CO5xvu5bSyxNxkV-xD-CjQ", name: "characterportraits/kenzie.jpg" }, { bytes: 26677, md5: "sutgZd3w4w8dSE0zdZr_uw", name: "characterportraits/kenzie_green.jpg" }, { bytes: 25580, md5: "1ki8IGEc19wfpctWRat91A", name: "characterportraits/lincoln.jpg" },
                        { bytes: 88353, md5: "qNAkkTrDNI-ptmUbXv8TMg", name: "fonts/roboto_black_red_25.png" }, { bytes: 27217, md5: "oYUgFWBE_Mb6PDskWa43ow", name: "characterportraits/lisa.jpg" }, { bytes: 25270, md5: "hbtCYWBxzSNqo1GpFW2teQ", name: "characterportraits/lincoln_green.jpg" }, { bytes: 22544, md5: "wcJ6qa50Smt3GBkFBvOoiQ", name: "characterportraits/lisa_green.jpg" }, { bytes: 26153, md5: "6rO5TdnKryOpOSGsJNuOog", name: "characterportraits/phoebe.jpg" }, { bytes: 23881, md5: "0405GjrZ6_XaqqQ5or46RA", name: "characterportraits/phoebe_green.jpg" }, {
                            bytes: 22530,
                            md5: "bls8prBZdsBEJoWTp3PKUw",
                            name: "characterportraits/pinkRanger.jpg"
                        }, { bytes: 20822, md5: "-sd3wniaJ3T83tr4EIz3vg", name: "characterportraits/pinkRanger_green.jpg" }, { bytes: 31445, md5: "HOQltEUqrtfNg52sj75ToA", name: "characterportraits/sandy.jpg" }, { bytes: 28757, md5: "Oxt5jqjq-Ct87jNHcs3CMQ", name: "characterportraits/sandy_green.jpg" }, { bytes: 30790, md5: "McSllLgXUaXlbswe3MoP9g", name: "characterportraits/spongebob.jpg" }, { bytes: 25581, md5: "zzucD2VyWEaOWkB1dU75-Q", name: "characterportraits/spongebob_green.jpg" }, {
                            bytes: 40912,
                            md5: "a8I6JHZY8hEtM1BqtuutLA",
                            name: "phone_images/april_phone.jpg"
                        }, { bytes: 45741, md5: "nyGlNq1aCFunhM9-nzCleA", name: "phone_images/babe_phone.jpg" }, { bytes: 45305, md5: "_t49TDBL-LfXuAiF_7fzjg", name: "phone_images/danger_phone.jpg" }, { bytes: 42136, md5: "TgFLGhb4ay9xc8bhpLU7Ng", name: "phone_images/lincoln_phone.jpg" }, { bytes: 44690, md5: "vTfFQX7LaEA3SstGad2N_A", name: "phone_images/kenzie_phone.jpg" }, { bytes: 44260, md5: "GNreOWVOdEYO-GfXN0VWyw", name: "phone_images/lisa_phone.jpg" }, {
                            bytes: 43620,
                            md5: "8C7_iYTp-elvwHfCvjkW-A",
                            name: "phone_images/phoebe_phone.jpg"
                        }, { bytes: 36980, md5: "wVfT3ZwUw3hgFMOHNFsrxw", name: "phone_images/pinkRanger_phone.jpg" }, { bytes: 44131, md5: "UpYvoIvetpWs6nrnAIuYaQ", name: "phone_images/sandy_phone.jpg" }, { bytes: 47561, md5: "IMDPSqHEMyOF7-TFxSHhWQ", name: "phone_images/spongeBob_phone.jpg" }, { bytes: 3390, md5: "9rMQfCrTPcCmg5Amx_TNVA", name: "ui/buttons/ackButtonOver.png" }, { bytes: 3472, md5: "sGY6usnCUIVhVwgXkia2kA", name: "ui/buttons/backButton.png" }, { bytes: 1299421, md5: "AdaRZkREMkcE2eD7cN2jXA", name: "GradientBGBlue.jpg" },
                        { bytes: 1300269, md5: "YDI_BjvvYJGF_GXgYiFeUQ", name: "GradientBGGreen.jpg" }
                    ],
                    prototype: [{ bytes: 1719, md5: "_UG25KvN26-Zom-epNuErQ", name: "controls-test.scene" }, { bytes: 2172, md5: "hdto706WWA9OsijTFnbi1A", name: "devtest.scene" }, { bytes: 19617, md5: "V-IZQ85dztZB7XoLtIkePg", name: "level-boss.scene" }, { bytes: 332269, md5: "_fl9-9XOYwqZUXoN0u_qlw", name: "level.scene" }],
                    character_pinkRanger: [{ bytes: 48320, md5: "U1-YKb0b3ZpBi0kKWOqs0A", name: "pinkRanger/library.json" }, { bytes: 8832, md5: "XF8zG4GLHUAMPGEjUOmF1A", name: "sfx/pinkRanger_fire.mp3" },
                        { bytes: 9235, md5: "pGbv5qn8W1X26pDT8z656w", name: "sfx/pinkRanger_fire.ogg" }, { bytes: 10368, md5: "YV6Fz78E8ZXzgRCPjony8w", name: "sfx/pinkRanger_hit.mp3" }, { bytes: 11175, md5: "wXMGdW_7FIVgeExVyEUNPQ", name: "sfx/pinkRanger_hit.ogg" }, { bytes: 181291, md5: "hP_ZxKdKP7Pozj7Jk1aISQ", name: "pinkRanger/atlas0.png" }
                    ],
                    character_phoebe: [{ bytes: 48543, md5: "PZYL8-8yULfu6oP-b8Xwog", name: "phoebe/library.json" }, { bytes: 9216, md5: "7NuyzNnO0N_nqEzQha3MLg", name: "sfx/phoebe_fire.mp3" }, { bytes: 11429, md5: "IZbqw1bA5l4hKS3K6VE7zA", name: "sfx/phoebe_fire.ogg" },
                        { bytes: 10752, md5: "HFCh7pAsNUVA-dfn-rzZmg", name: "sfx/phoebe_hit.mp3" }, { bytes: 13228, md5: "sYe82p5NbNNey14N7ZKyyA", name: "sfx/phoebe_hit.ogg" }, { bytes: 190062, md5: "qXaWT1l4UevFeyVQaEna7A", name: "phoebe/atlas0.png" }
                    ],
                    loudhouseStages: [{ bytes: 4426, md5: "8q08lQo7RgXRYSZqqHtivg", name: "Bunny.png" }, { bytes: 5532, md5: "A2fHyXERG92aOtSCgTYuWw", name: "Box.png" }, { bytes: 3242, md5: "wwshKDTz4XUZUGOLLBL-6g", name: "Football.png" }, { bytes: 2302, md5: "1I7binq2ZJmoiVx-5VdUzA", name: "Skate.png" }, {
                        bytes: 4840,
                        md5: "Ijr3qI7YNUbHS6x4XNQJUA",
                        name: "Unicorn.png"
                    }, { bytes: 41008, md5: "jI6FlFkbwrLzAU3iwfjC-A", name: "bg-fore.png" }, { bytes: 10570, md5: "joOkz-xyndzyTNA7xbbbSA", name: "laundryPile.png" }, { bytes: 46906, md5: "dGxWekSnfa37iMkEq_rtXw", name: "level2-tile.jpg" }, { bytes: 110317, md5: "M5ro551GLvszZVVm7Gpi-g", name: "doors.png" }, { bytes: 29519, md5: "PiwSKbLD2RPfoAy0eihSQQ", name: "petsBG.png" }, { bytes: 44170, md5: "e_OluLggalFKC5sGclFZ9A", name: "roomsBG.png" }, { bytes: 31122, md5: "sSy9LlEKcgJMGCr7tPQLwQ", name: "music/nffg_gameplaymusic_endstingerv2.mp3" }, {
                        bytes: 151439,
                        md5: "_0I80nZDXZlaCD79EHvE0w",
                        name: "level4.scene"
                    }, { bytes: 164031, md5: "XpYnKd17z7lihHueYjr7Wg", name: "level5.scene" }, { bytes: 58229, md5: "pjEK_RYsaFBsxItxKAQtzA", name: "music/nffg_gameplaymusic_endstingerv2.ogg" }, { bytes: 167328, md5: "w79wSmyQrun8dSyuK906SA", name: "level6.scene" }, { bytes: 221, md5: "Xd_4oyAVyuCs4gS4Uuhwpg", name: "parallax/foreground.json" }, { bytes: 818, md5: "Wgg52hiSBO1i3ATG9aDCGg", name: "parallax/background.json" }, { bytes: 187506, md5: "jrS0aIFOY961gVsm9DbMZw", name: "music/nffg_gameplaymusicv2.mp3" }, {
                        bytes: 259190,
                        md5: "pbGgqz-ciAtmGcfLdmy5Ug",
                        name: "music/nffg_gameplaymusic_endstingerv2.wav"
                    }, { bytes: 497361, md5: "UX08lBgw8Wuw_iFVivh6RQ", name: "music/nffg_gameplaymusicv2.ogg" }, { bytes: 1927838, md5: "r-xKcixYN1GecXxjAE2MQg", name: "music/nffg_gameplaymusicv2.wav" }],
                    common: [{ bytes: 3904, md5: "wxZhwwuoJz6V7CWXCsZNFg", name: "characterStats.json" }, { bytes: 3409, md5: "cVAjnckvj-DBLcwSIV4viw", name: "gameCoin.png" }, { bytes: 24210, md5: "C1ZMsKCSE9wVPlKs_4E-Ag", name: "music/nffg_titlemusic_endstingerv1.mp3" }, {
                            bytes: 52236,
                            md5: "Whwz82uKg5KKl3zcc_BcnQ",
                            name: "music/nffg_titlemusic_endstingerv1.ogg"
                        }, { bytes: 81109, md5: "-_NiAs11N4iOmU0yb0kTTw", name: "fonts/special_elite_grey_30.fnt" }, { bytes: 120471, md5: "MKKmEb9eUgxpqi7Ubp44Jw", name: "fonts/special_elite_grey_30.png" }, { bytes: 4608, md5: "yBZcndDJvPDYHHdPIsGHsw", name: "sfx/click.mp3" }, { bytes: 7434, md5: "TL9T5iZhIk-5x9RD_7d6vg", name: "sfx/click.ogg" }, { bytes: 185450, md5: "S72in5UPaaQ0JWFlf_X_8w", name: "music/nffg_titlemusic_endstingerv1.wav" }, { bytes: 161154, md5: "f8r9ZDjImsu67JHV_iTv4Q", name: "music/nffg_titlemusicv1.mp3" },
                        { bytes: 47311, md5: "-003__NCAa6atpKFvtpiQg", name: "ui/ModalBG.png" }, { bytes: 19990, md5: "pgY2r6GuKolxHCedHny0SA", name: "ui/confirmModal.png" }, { bytes: 8177, md5: "ihrBQgbsDulIlBM9vFIq5g", name: "ui/buttons/Back_Btn.png" }, { bytes: 5255, md5: "ai7jTReoA-brgwwP_PXhtw", name: "ui/buttons/Back_Btn_Down.png" }, { bytes: 7670, md5: "t_8XqRn8Zfe7Yly7KnrThQ", name: "ui/buttons/Back_Btn_Over.png" }, { bytes: 8573, md5: "XJMh3-QEEqhucZcdz_EhAA", name: "ui/buttons/Check_Btn.png" }, { bytes: 5794, md5: "1z8Jfg7vuQ357SWaN1oC_g", name: "ui/buttons/Check_Btn_Down.png" },
                        { bytes: 8647, md5: "zihuFfF1Wo3mS9bmElM4SA", name: "ui/buttons/Check_Btn_Over.png" }, { bytes: 9182, md5: "qKySvNh7xF5PS9_Cxdn1DA", name: "ui/buttons/Close_Btn.png" }, { bytes: 6368, md5: "ytvzj3_Z79CMP4FQl45d5w", name: "ui/buttons/Close_Btn_Down.png" }, { bytes: 8621, md5: "F2raegRoYWCmojoDh56oqA", name: "ui/buttons/Close_Btn_Over.png" }, { bytes: 154011, md5: "jAAL9O2DamI7ztddLXhI9A", name: "ui/HologramModal.png" }, { bytes: 8017, md5: "XN0b404rmm5MIa_imkihSQ", name: "ui/buttons/HelpBtn.png" }, { bytes: 5244, md5: "svZl0eGpFxgpl_Yf2QeVEQ", name: "ui/buttons/HelpBtn_Down.png" },
                        { bytes: 7674, md5: "xnEw4xap5tnfUsmu0zXYlQ", name: "ui/buttons/HelpBtn_Over.png" }, { bytes: 5656, md5: "1E-FHNhamms8jlnymxfHlg", name: "ui/buttons/LevelUp_Btn.png" }, { bytes: 2830, md5: "TvIyDRhfU0HGG-c4eFa7xQ", name: "ui/buttons/LevelUp_Btn_Disabled.png" }, { bytes: 3328, md5: "YqD69i8TdIVCH6E-L_pyuQ", name: "ui/buttons/LevelUp_Btn_Down.png" }, { bytes: 5592, md5: "wOEjqq7D8flhADIOubmHMA", name: "ui/buttons/LevelUp_Btn_Over.png" }, { bytes: 445985, md5: "roz0YOOfdmSIvZaQIQhgFQ", name: "music/nffg_titlemusicv1.ogg" }, {
                            bytes: 8188,
                            md5: "lJptSmwukYwybfrlMH0etg",
                            name: "ui/buttons/Next_Btn.png"
                        }, { bytes: 5678, md5: "m-9u0Pe1SLC4eG7Z-oYD6w", name: "ui/buttons/Next_Btn_Down.png" }, { bytes: 7659, md5: "iywBjivSJCx2SCIxXp5jEA", name: "ui/buttons/Next_Btn_Over.png" }, { bytes: 4274, md5: "juAr70fihMTKf3CX5SLlKg", name: "ui/buttons/Pause_Btn.png" }, { bytes: 3138, md5: "BUcE7_9gFZhYvJMzS-sK7w", name: "ui/buttons/Pause_Btn_Down.png" }, { bytes: 5283, md5: "5_4_HRykAT0tw3d6y-Q9jw", name: "ui/buttons/Pause_Btn_Over.png" }, { bytes: 7883, md5: "WEYcVFG1QXJQWilzUfWnRw", name: "ui/buttons/Play_Btn.png" }, {
                            bytes: 5104,
                            md5: "8dyNUUjz-D00QjHo5mmSpQ",
                            name: "ui/buttons/Play_Btn_Down.png"
                        }, { bytes: 7996, md5: "AIVIbxXS0QhCC4HIF4QJ7g", name: "ui/buttons/Play_Btn_Over.png" }, { bytes: 8565, md5: "u0Nbr6-4RuENB1zA3nKcGA", name: "ui/buttons/RestartBtn.png" }, { bytes: 8363, md5: "slt6-luGDgh2EioG7nmaLQ", name: "ui/buttons/RestartBtn_Over.png" }, { bytes: 1646238, md5: "n6Ov58YYHwPWB8cu6rysHg", name: "music/nffg_titlemusicv1.wav" }
                    ]
                },
                width: 1316
            }]
        }
    };
    Y.$fR = 0;
    Y.$gR = 0;
    Y.$hR = !0;
    M.$US = ["webkit", "moz", "ms"];
    M.$VS = (new Ra("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    U.$KT = !0;
    Jb.$jU = new Ab;
    ud.__rtti = '<class path="nick.shmup.characterSelect.CharacterSelect" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<MAX_LEVEL get="inline" set="null" line="335" static="1">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":native"><e>"$xW"</e></m></meta>\n\t</MAX_LEVEL>\n\t<onStart public="1" set="method" line="26" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<toggleVisiblity set="method" line="277"><f a="group:text:showGroup">\n\t<c path="Array"><c path="String"/></c>\n\t<c path="String"/>\n\t<x path="Bool"/>\n\t<x path="Void"/>\n</f></toggleVisiblity>\n\t<getFirstObject set="method" line="294"><f a="name">\n\t<c path="String"/>\n\t<c path="kit.Entity"/>\n</f></getFirstObject>\n\t<getAllObjects set="method" line="304"><f a="name">\n\t<c path="String"/>\n\t<c path="Array"><c path="kit.Entity"/></c>\n</f></getAllObjects>\n\t<getLayer set="method" line="314"><f a="name">\n\t<c path="String"/>\n\t<c path="kit.Entity"/>\n</f></getLayer>\n\t<adjustAnchor set="method" line="323"><f a="txtSpr">\n\t<c path="kit.display.TextSprite"/>\n\t<x path="Void"/>\n</f></adjustAnchor>\n\t<_selectedCharacter><e path="nick.shmup.util.Maybe"><c path="nick.shmup.characterSelect.CharacterSelectSquare"/></e></_selectedCharacter>\n\t<_onClickFn><e path="nick.shmup.util.Maybe"><f a=""><x path="Void"/></f></e></_onClickFn>\n\t<_hasSelectedPrimary><x path="Bool"/></_hasSelectedPrimary>\n\t<_originalNameYPos><x path="Float"/></_originalNameYPos>\n\t<new public="1" set="method" line="18"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ud.ENTITY_SLOT = 1;
    ud.$xW = 3;
    mh.__rtti = '<class path="nick.shmup.characterSelect.CharacterSelectPopScene" params="">\n\t<extends path="ez.scene.PopScene"/>\n\t<onRun public="1" set="method" line="9" override="1">\n\t\t<f a="e">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="6"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    re.__rtti = '<class path="nick.shmup.creator.BossSpawner" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<formation public="1"><c path="kit.Entity"/></formation>\n\t<itemToSpawn public="1"><c path="kit.Entity"/></itemToSpawn>\n\t<minTimeFiring public="1" line="21">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</minTimeFiring>\n\t<maxTimeFiring public="1" line="24">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</maxTimeFiring>\n\t<minTimePaused public="1" line="27">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</minTimePaused>\n\t<maxTimePaused public="1" line="30">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</maxTimePaused>\n\t<_shield><c path="nick.shmup.ActorInfo"/></_shield>\n\t<onStart public="1" set="method" line="37" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onFormationDestroyed set="method" line="47"><f a=""><x path="Void"/></f></onFormationDestroyed>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    re.ENTITY_SLOT = 1;
    lc.__rtti = '<class path="nick.shmup.creator.PickUpItem" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<radius public="1">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>visible=true</e></m></meta>\n\t</radius>\n\t<addLogic public="1" set="method" line="27"><f a=""><c path="kit.Component"/></f></addLogic>\n\t<onStart public="1" set="method" line="34" override="1">\n\t\t<f a=""><x path="Void"/></f>\n\t\t<meta><m n=":final"/></meta>\n\t</onStart>\n\t<setXY public="1" set="method" line="44">\n\t\t<f a="x:y">\n\t\t\t<x path="Float"/>\n\t\t\t<x path="Float"/>\n\t\t\t<c path="nick.shmup.creator.PickUpItem"/>\n\t\t</f>\n\t\t<meta><m n=":final"/></meta>\n\t</setXY>\n\t<modifyBeforeOnStart public="1" set="method" line="52">\n\t\t<f a="callback">\n\t\t\t<f a=":">\n\t\t\t\t<c path="kit.Entity"/>\n\t\t\t\t<c path="nick.shmup.ActorInfo"/>\n\t\t\t\t<x path="Void"/>\n\t\t\t</f>\n\t\t\t<c path="nick.shmup.creator.PickUpItem"/>\n\t\t</f>\n\t\t<meta><m n=":final"/></meta>\n\t</modifyBeforeOnStart>\n\t<createActor get="inline" set="null" line="59">\n\t\t<f a="type:collidesWith:x:y:radius">\n\t\t\t<x path="Int"/>\n\t\t\t<x path="Int"/>\n\t\t\t<x path="Float"/>\n\t\t\t<x path="Float"/>\n\t\t\t<x path="Float"/>\n\t\t\t<c path="nick.shmup.ActorInfo"/>\n\t\t</f>\n\t\t<meta><m n=":final"/></meta>\n\t</createActor>\n\t<buildActor set="method" line="71">\n\t\t<f a="sprite:actorManager:pack">\n\t\t\t<c path="kit.display.Sprite"/>\n\t\t\t<c path="nick.shmup.ActorManager"/>\n\t\t\t<c path="kit.Assets"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":final"/></meta>\n\t</buildActor>\n\t<_callback><f a=":">\n\t<c path="kit.Entity"/>\n\t<c path="nick.shmup.ActorInfo"/>\n\t<x path="Void"/>\n</f></_callback>\n\t<_x><t path="Null"><x path="Float"/></t></_x>\n\t<_y><t path="Null"><x path="Float"/></t></_y>\n\t<new public="1" set="method" line="22"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t</meta>\n</class>';
    td.__rtti = '<class path="nick.shmup.creator.Collectable" params="">\n\t<extends path="nick.shmup.creator.PickUpItem"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<collectableType public="1">\n\t\t<e path="nick.shmup.collision.CollectableType"/>\n\t\t<meta><m n=":Creator"><e>visible=true</e></m></meta>\n\t</collectableType>\n\t<addLogic public="1" set="method" line="19" override="1"><f a=""><c path="kit.Component"/></f></addLogic>\n\t<new public="1" set="method" line="15"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    td.ENTITY_SLOT = 1;
    se.__rtti = '<class path="nick.shmup.creator.EasterEgg" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<onStart public="1" set="method" line="22" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onEggTap get="inline" set="null" line="27"><f a="_">\n\t<c path="kit.input.PointerEvent"/>\n\t<x path="Void"/>\n</f></onEggTap>\n\t<new public="1" set="method" line="17"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    se.ENTITY_SLOT = 1;
    Mb.__rtti = '<class path="nick.shmup.creator.Enemy" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<implements path="nick.shmup.OnScreenActor"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<hitRadius public="1" line="23">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator"><e>initial=14</e></m></meta>\n\t</hitRadius>\n\t<actorInfo public="1" line="27">\n\t\t<c path="nick.shmup.ActorInfo"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</actorInfo>\n\t<fireRate public="1" line="31">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</fireRate>\n\t<bulletLife public="1" line="35">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</bulletLife>\n\t<scoreValue public="1" line="39">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator"><e>initial=100</e></m></meta>\n\t</scoreValue>\n\t<damage public="1" line="43">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</damage>\n\t<health public="1" line="47">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</health>\n\t<offsetY public="1" line="50">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=15</e></m></meta>\n\t</offsetY>\n\t<_timeToNextFire line="53"><x path="Float"/></_timeToNextFire>\n\t<_sprite><c path="kit.display.Sprite"/></_sprite>\n\t<_manager><c path="nick.shmup.ActorManager"/></_manager>\n\t<_powerUpType line="60"><e path="nick.shmup.collision.PowerUpType"/></_powerUpType>\n\t<_library><c path="kit.movie.Library"/></_library>\n\t<onAdded public="1" set="method" line="64" override="1"><f a=""><x path="Void"/></f></onAdded>\n\t<onStart public="1" set="method" line="69" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<getSprite public="1" set="method" line="80"><f a=""><c path="kit.display.Sprite"/></f></getSprite>\n\t<powerUpDrop public="1" set="method" line="84"><f a="powerUpType">\n\t<e path="nick.shmup.collision.PowerUpType"/>\n\t<c path="nick.shmup.creator.Enemy"/>\n</f></powerUpDrop>\n\t<onUpdate public="1" set="method" line="90" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<fireBullet public="1" set="method" line="103"><f a=""><x path="Void"/></f></fireBullet>\n\t<updateSpritePosition public="1" set="method" line="129"><f a=""><x path="Void"/></f></updateSpritePosition>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Mb.ENTITY_SLOT = 1;
    Fc.__rtti = '<class path="nick.shmup.creator.Formation" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<enemyCount public="1" line="30">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</enemyCount>\n\t<enemyToSpawn public="1"><c path="kit.Entity"/></enemyToSpawn>\n\t<movementType public="1" line="36"><e path="nick.shmup.creator.FormationMovementType"/></movementType>\n\t<speed public="1" line="40">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</speed>\n\t<amplitude public="1" line="44">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</amplitude>\n\t<amplitudeSpeed public="1" line="48">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</amplitudeSpeed>\n\t<angle public="1" line="52">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=180</e></m></meta>\n\t</angle>\n\t<movementDelay public="1" line="56">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</movementDelay>\n\t<dropPowerUp public="1" line="59">\n\t\t<e path="nick.shmup.collision.PowerUpType"/>\n\t\t<meta><m n=":Creator"><e>initial=Empty</e></m></meta>\n\t</dropPowerUp>\n\t<formationDestroyed public="1" set="null" line="62">\n\t\t<c path="kit.util.Signal0"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</formationDestroyed>\n\t<actorInfoReady public="1" get="accessor" set="null"><c path="kit.util.Signal1"><c path="Array"><c path="nick.shmup.ActorInfo"/></c></c></actorInfoReady>\n\t<_actorInfoReady><c path="kit.util.Signal1"><c path="Array"><c path="nick.shmup.ActorInfo"/></c></c></_actorInfoReady>\n\t<_totalLength line="70"><x path="Float"/></_totalLength>\n\t<_actorManager><c path="nick.shmup.ActorManager"/></_actorManager>\n\t<_anchor line="76"><c path="kit.math.Point"/></_anchor>\n\t<_movementControllerAttached line="79"><x path="Bool"/></_movementControllerAttached>\n\t<_totalOnScreen line="82"><x path="Int"/></_totalOnScreen>\n\t<_actors line="85">\n\t\t<c path="Array"><c path="nick.shmup.ActorInfo"/></c>\n\t\t<meta><m n=":allow"><e>nick.shmup</e></m></meta>\n\t</_actors>\n\t<_hasCreatedPowerUp line="87"><x path="Bool"/></_hasCreatedPowerUp>\n\t<onStart public="1" set="method" line="89" override="1">\n\t\t<f a=""><x path="Void"/></f>\n\t\t<meta><m n=":has_untyped"/></meta>\n\t</onStart>\n\t<spawnEllipse set="method" line="132"><f a=""><x path="Void"/></f></spawnEllipse>\n\t<spawnPoly set="method" line="153"><f a=""><x path="Void"/></f></spawnPoly>\n\t<makeActorInfo set="method" line="201"><f a="x:y">\n\t<x path="Float"/>\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></makeActorInfo>\n\t<actorInfoChanged set="method" line="238"><f a="isOnScreen:wasOnScreen">\n\t<x path="Bool"/>\n\t<x path="Bool"/>\n\t<x path="Void"/>\n</f></actorInfoChanged>\n\t<attachMovementController set="method" line="258"><f a=""><x path="Void"/></f></attachMovementController>\n\t<get_actorInfoReady set="method" line="303"><f a=""><c path="kit.util.Signal1"><c path="Array"><c path="nick.shmup.ActorInfo"/></c></c></f></get_actorInfoReady>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Fc.ENTITY_SLOT = 1;
    na.__rtti = '<class path="nick.shmup.creator.Hero" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<isAI public="1" line="40"><x path="Bool"/></isAI>\n\t<movement public="1">\n\t\t<c path="nick.shmup.HeroMovement"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</movement>\n\t<movementController public="1">\n\t\t<c path="s2.controls.ClickDragPad"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</movementController>\n\t<stageX public="1" set="null" line="52">\n\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</stageX>\n\t<stageY public="1" set="null" line="56">\n\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</stageY>\n\t<actorInfo public="1" line="60">\n\t\t<c path="nick.shmup.ActorInfo"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</actorInfo>\n\t<speed public="1" line="63">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=300</e></m></meta>\n\t</speed>\n\t<visualRing public="1" line="66">\n\t\t<e path="nick.shmup.util.Maybe"><c path="kit.display.Sprite"/></e>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</visualRing>\n\t<_heroID><c path="String"/></_heroID>\n\t<_sprite><c path="kit.display.Sprite"/></_sprite>\n\t<_dt><x path="Float"/></_dt>\n\t<library public="1" set="null">\n\t\t<c path="kit.movie.Library"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</library>\n\t<showsShootAnim public="1" line="80"><x path="Bool"/></showsShootAnim>\n\t<onStart public="1" set="method" line="83" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<initArtwork set="method" line="152"><f a=""><x path="Void"/></f></initArtwork>\n\t<initActor set="method" line="179"><f a="sceneSprite">\n\t<c path="kit.creator.SceneSprite"/>\n\t<x path="Void"/>\n</f></initActor>\n\t<onBlasterFire set="method" line="212"><f a="_">\n\t<unknown/>\n\t<x path="Void"/>\n</f></onBlasterFire>\n\t<onUpdate public="1" set="method" line="218" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<updateSpritePosition public="1" set="method" line="226"><f a=""><x path="Void"/></f></updateSpritePosition>\n\t<clickPadKeyDown public="1" set="method" line="233"><f a="x:y">\n\t<x path="Float"/>\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></clickPadKeyDown>\n\t<clickPadChanged public="1" set="method" line="241"><f a="tStageX:tStageY">\n\t<x path="Float"/>\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></clickPadChanged>\n\t<clickPadDown public="1" set="method" line="246"><f a=""><x path="Void"/></f></clickPadDown>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    na.ENTITY_SLOT = 1;
    xh.__rtti = '<class path="nick.shmup.creator.InitializeLevel" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<cameraSpeed public="1" line="23">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=100</e></m></meta>\n\t</cameraSpeed>\n\t<onRun public="1" set="method" line="25" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="19"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    zh.__rtti = '<class path="nick.shmup.creator.MoveHeroOffScreen" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRunAsync public="1" set="method" line="22" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="20"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Ah.__rtti = '<class path="nick.shmup.creator.PlayHeroState" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<waitForComplete public="1" line="15">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</waitForComplete>\n\t<loop public="1" line="18">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=false</e></m></meta>\n\t</loop>\n\t<changeHeroControls public="1" line="20"><e path="nick.shmup.creator.HeroControlState"/></changeHeroControls>\n\t<onRunAsync public="1" set="method" line="22" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="10"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    te.__rtti = '<class path="nick.shmup.creator.PowerUp" params="">\n\t<extends path="nick.shmup.creator.PickUpItem"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<powerUpType public="1">\n\t\t<e path="nick.shmup.collision.PowerUpType"/>\n\t\t<meta><m n=":Creator"><e>visible=true</e></m></meta>\n\t</powerUpType>\n\t<addLogic public="1" set="method" line="21" override="1"><f a=""><c path="kit.Component"/></f></addLogic>\n\t<new public="1" set="method" line="15"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    te.ENTITY_SLOT = 1;
    Uc.__rtti = '<class path="s2.localization.LocalizeText" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<localizationID public="1"><c path="String"/></localizationID>\n\t<mobileAlternateID public="1"><c path="String"/></mobileAlternateID>\n\t<propertyLocation public="1" line="29">\n\t\t<e path="ez.property.PropertyLocation"/>\n\t\t<meta><m n=":Creator"><e>initial=Scene</e></m></meta>\n\t</propertyLocation>\n\t<onRun public="1" set="method" line="31" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<getFormat set="method" line="84"><f a="localizationID:?mobileID">\n\t<c path="String"/>\n\t<c path="String"/>\n\t<t path="s2.localization.StringFormat"/>\n</f></getFormat>\n\t<getTextSetter set="method" line="98"><f a="target:scale">\n\t<c path="kit.Entity"/>\n\t<x path="Float"/>\n\t<f a="">\n\t\t<c path="String"/>\n\t\t<x path="Void"/>\n\t</f>\n</f></getTextSetter>\n\t<new set="method" line="19"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Bh.__rtti = '<class path="nick.shmup.creator.StageLocalizer" params="">\n\t<extends path="s2.localization.LocalizeText"/>\n\t<onRun public="1" set="method" line="15" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="13"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    xd.__rtti = '<class path="nick.shmup.outcome.Outcome" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<CENTER_INDEX get="inline" set="null" line="143" static="1">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":native"><e>"$yW"</e></m></meta>\n\t</CENTER_INDEX>\n\t<onStart public="1" set="method" line="24" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<highlightFadeCharacters get="inline" set="null" line="74"><f a="characterObjects:characterCentered:speed:ease">\n\t<c path="List"><c path="nick.shmup.outcome.OutcomeCharacter"/></c>\n\t<c path="nick.shmup.outcome.OutcomeCharacter"/>\n\t<x path="Float"/>\n\t<f a="">\n\t\t<x path="Float"/>\n\t\t<x path="Float"/>\n\t</f>\n\t<x path="Void"/>\n</f></highlightFadeCharacters>\n\t<swapTrophyEyeball get="inline" set="null" line="82"><f a="bgTrophy:bgEyeball:speed:ease">\n\t<c path="kit.Entity"/>\n\t<c path="kit.Entity"/>\n\t<x path="Float"/>\n\t<f a="">\n\t\t<x path="Float"/>\n\t\t<x path="Float"/>\n\t</f>\n\t<x path="Void"/>\n</f></swapTrophyEyeball>\n\t<fadeOutPurpleBackground get="inline" set="null" line="90"><f a="bgPurple:speed:ease">\n\t<c path="kit.Entity"/>\n\t<x path="Float"/>\n\t<f a="">\n\t\t<x path="Float"/>\n\t\t<x path="Float"/>\n\t</f>\n\t<x path="Void"/>\n</f></fadeOutPurpleBackground>\n\t<showText get="inline" set="null" line="95"><f a="bgText:speed:ease">\n\t<c path="kit.Entity"/>\n\t<x path="Float"/>\n\t<f a="">\n\t\t<x path="Float"/>\n\t\t<x path="Float"/>\n\t</f>\n\t<x path="Void"/>\n</f></showText>\n\t<addTrophyAnim get="inline" set="null" line="102"><f a="bgTrophy">\n\t<c path="kit.Entity"/>\n\t<x path="Void"/>\n</f></addTrophyAnim>\n\t<addEyeballAnim get="inline" set="null" line="107"><f a="bgEyeball">\n\t<c path="kit.Entity"/>\n\t<x path="Void"/>\n</f></addEyeballAnim>\n\t<getFirstObject set="method" line="118"><f a="name">\n\t<c path="String"/>\n\t<c path="kit.Entity"/>\n</f></getFirstObject>\n\t<getAllObjects set="method" line="128"><f a="name">\n\t<c path="String"/>\n\t<c path="Array"><c path="kit.Entity"/></c>\n</f></getAllObjects>\n\t<getLayer set="method" line="138"><f a="name">\n\t<c path="String"/>\n\t<c path="kit.Entity"/>\n</f></getLayer>\n\t<new public="1" set="method" line="19"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    xd.ENTITY_SLOT = 1;
    xd.$yW = 4;
    ve.__rtti = '<class path="nick.shmup.ui.SubSceneLoader" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<scenes public="1"><c path="Array"><c path="String"/></c></scenes>\n\t<currentScene public="1" set="null">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</currentScene>\n\t<offsetSceneX public="1" line="22">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</offsetSceneX>\n\t<offsetSceneY public="1" line="26">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</offsetSceneY>\n\t<_currentIndex><x path="Int"/></_currentIndex>\n\t<_holder><c path="kit.Entity"/></_holder>\n\t<backButton public="1"><c path="kit.Entity"/></backButton>\n\t<nextButton public="1"><c path="kit.Entity"/></nextButton>\n\t<onStart public="1" set="method" line="41" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onBackClick set="method" line="53"><f a="e">\n\t<c path="kit.input.PointerEvent"/>\n\t<x path="Void"/>\n</f></onBackClick>\n\t<onNextClick set="method" line="63"><f a="e">\n\t<c path="kit.input.PointerEvent"/>\n\t<x path="Void"/>\n</f></onNextClick>\n\t<selectScene public="1" set="method" line="73"><f a="index">\n\t<x path="Int"/>\n\t<x path="Void"/>\n</f></selectScene>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ve.ENTITY_SLOT = 1;
    we.__rtti = '<class path="nick.shmup.util.EmptyCreatorObject" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    we.ENTITY_SLOT = 1;
    ob.__rtti = '<class path="nick.stage.StageAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<complement params="A" set="method" line="182" static="1">\n\t\t<f a="set1:set2">\n\t\t\t<c path="Array"><c path="complement.A"/></c>\n\t\t\t<c path="Array"><c path="complement.A"/></c>\n\t\t\t<c path="Array"><c path="complement.A"/></c>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$nG"</e></m></meta>\n\t</complement>\n\t<transition public="1" line="49"><e path="ez.scene.SceneTransition"/></transition>\n\t<duration public="1" line="53">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0.5</e></m></meta>\n\t</duration>\n\t<createScene set="method" line="55"><f a="name:?opaque">\n\t<c path="String"/>\n\t<x path="Bool"/>\n\t<c path="kit.scene.Scene"/>\n</f></createScene>\n\t<loadScene set="method" line="73"><f a="name:loadingScene:disposeUnused:push">\n\t<c path="String"/>\n\t<c path="String"/>\n\t<x path="Bool"/>\n\t<x path="Bool"/>\n\t<t path="kit.util.Promise0"/>\n</f></loadScene>\n\t<createTransition set="method" line="166"><f a=""><c path="kit.scene.Transition"/></f></createTransition>\n\t<getDirector set="method" line="175"><f a=""><c path="kit.scene.Director"/></f></getDirector>\n\t<new set="method" line="47"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    Eh.__rtti = '<class path="nick.stage.ChangeStage" params="">\n\t<extends path="nick.stage.StageAction"/>\n\t<scene public="1"><c path="String"/></scene>\n\t<onLoadError public="1" line="38"><c path="String"/></onLoadError>\n\t<loadingScene public="1" line="41"><c path="String"/></loadingScene>\n\t<disposeUnusedAssets public="1" line="45">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</disposeUnusedAssets>\n\t<onRunAsync public="1" set="method" line="47" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="32"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    yb._init = !1;
    yb._gameName = "";
    Gh.__rtti = '<class path="s2.client.CanadaTrackerAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<eventName public="1"><c path="String"/></eventName>\n\t<onRun public="1" set="method" line="12" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ze.__rtti = '<class path="s2.client.PreloaderNickEventObject" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<_handle><c path="kit.util.Disposable"/></_handle>\n\t<onStart public="1" set="method" line="13" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onLoadingProgress set="method" line="21"><f a="property:progress">\n\t<c path="String"/>\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onLoadingProgress>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ze.ENTITY_SLOT = 1;
    Jh.__rtti = '<class path="s2.client.SendDeltaDNAEvent" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<name public="1" line="11">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial=""</e></m></meta>\n\t</name>\n\t<location public="1" line="15">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial=""</e></m></meta>\n\t</location>\n\t<onRun public="1" set="method" line="17" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Kh.__rtti = '<class path="s2.client.SendNickelodeonEvent" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<event public="1" line="14">\n\t\t<e path="s2.client.NickEventName"/>\n\t\t<meta><m n=":Creator"><e>initial=NickEventName.ON_LOADING_START</e></m></meta>\n\t</event>\n\t<triggerOnDestroy public="1" line="18">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=false</e></m></meta>\n\t</triggerOnDestroy>\n\t<onRun public="1" set="method" line="20" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="10"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Mh.ENTITY_SLOT = 41;
    Ae.__rtti = '<class path="s2.creator.FillColor" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<color public="1" line="11">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>format=Color</e>\n\t<e>initial="#000000"</e>\n</m></meta>\n\t</color>\n\t<alpha public="1" line="14">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</alpha>\n\t<blendMode public="1" line="16"><e path="kit.display.BlendMode"/></blendMode>\n\t<onStart public="1" set="method" line="18" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Ae.ENTITY_SLOT = 1;
    Be.__rtti = '<class path="s2.creator.MovieProgressBar" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<progressProperty public="1" line="12">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial="progress"</e></m></meta>\n\t</progressProperty>\n\t<progressMax public="1" line="16">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=100</e></m></meta>\n\t</progressMax>\n\t<reverseMoviePercentage public="1" line="19">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=false</e></m></meta>\n\t</reverseMoviePercentage>\n\t<_movie><c path="kit.movie.MovieSprite"/></_movie>\n\t<onStart public="1" set="method" line="24" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<update set="method" line="42"><f a="progress">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></update>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Be.ENTITY_SLOT = 1;
    Nh.__rtti = '<class path="s2.creator.actions.ChangeSceneFromProperty" params="">\n\t<extends path="nick.stage.StageAction"/>\n\t<propertyName public="1"><c path="String"/></propertyName>\n\t<defaultSceneIfNoProperty public="1"><c path="String"/></defaultSceneIfNoProperty>\n\t<onLoadError public="1" line="44"><c path="String"/></onLoadError>\n\t<loadingScene public="1" line="47"><c path="String"/></loadingScene>\n\t<disposeUnusedAssets public="1" line="51">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</disposeUnusedAssets>\n\t<onRunAsync public="1" set="method" line="53" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="35"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Oh.__rtti = '<class path="s2.creator.actions.PlayMusicTrack" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<musicPath public="1"><c path="String"/></musicPath>\n\t<volume public="1" line="14">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</volume>\n\t<onRun public="1" set="method" line="16" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Ph.__rtti = '<class path="s2.creator.actions.SetPointerEnabled" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<enabled public="1" line="11">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>intial=false</e></m></meta>\n\t</enabled>\n\t<onRun public="1" set="method" line="13" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Qh.__rtti = '<class path="s2.creator.actions.StopMusicTrack" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="9" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Rh.__rtti = '<class path="s2.creator.actions.ToggleLayerVisibility" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<layerName public="1"><c path="String"/></layerName>\n\t<onRun public="1" set="method" line="12" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    R.loading = !0;
    G._volume = 0;
    G._init = !1;
    Sh.__rtti = '<class path="s2.storage.actions.IfStatesNotAllTrue" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<keys public="1" line="11"><c path="Array"><c path="String"/></c></keys>\n\t<onRunAsync public="1" set="method" line="13" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="8"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Th.__rtti = '<class path="s2.storage.actions.SetBooleanState" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<key public="1" line="11"><c path="String"/></key>\n\t<setToTrue public="1" line="15">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</setToTrue>\n\t<onRun public="1" set="method" line="17" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="8"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Hc.buildDate = "2017-04-06 14:10:50";
    Hc.commitHash = "93f8c5736bf14b02ab7de1ec8f1e4c943cc3fdd8";
    y._mobile = !1;
    y._devicePixelRatio = 1;
    y._inited = !1;
    wj.$eN()
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);